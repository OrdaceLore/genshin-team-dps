const encoder = new TextEncoder();
const SESSION_SECONDS = 12 * 60 * 60;

function json(data, status = 200, headers = {}) {
  return Response.json(data, {
    status,
    headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...headers }
  });
}

function fail(message, status = 400) {
  return json({ error: message }, status);
}

async function digest(value) {
  return new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value)));
}

function hex(bytes) {
  return [...bytes].map(byte => byte.toString(16).padStart(2, '0')).join('');
}

function equalBytes(a, b) {
  if (a.length !== b.length) return false;
  let difference = 0;
  for (let i = 0; i < a.length; i++) difference |= a[i] ^ b[i];
  return difference === 0;
}

async function equalSecret(input, secret) {
  const [a, b] = await Promise.all([digest(input), digest(secret)]);
  return equalBytes(a, b);
}

async function passwordHash(password, salt) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: 120000, hash: 'SHA-256' }, key, 256
  );
  return hex(new Uint8Array(bits));
}

async function readJson(request, maxBytes = 8192) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error('请求内容为空');
  let size = 0;
  const chunks = [];
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > maxBytes) {
      await reader.cancel();
      throw new Error('提交内容过大');
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder().decode(bytes));
}

function originOkay(request) {
  return request.headers.get('Origin') === new URL(request.url).origin;
}

function cookie(request) {
  return request.headers.get('Cookie')?.split(';').map(part => part.trim())
    .find(part => part.startsWith('dps_session='))?.slice('dps_session='.length) || '';
}

async function session(request, db) {
  const token = cookie(request);
  if (!/^[a-f0-9]{64}$/.test(token)) return null;
  const row = await db.prepare('SELECT role, expires_at FROM sessions WHERE token_hash = ?')
    .bind(hex(await digest(token))).first();
  return row && row.expires_at > Math.floor(Date.now() / 1000) ? row.role : null;
}

async function login(request, env) {
  if (!env.EDITOR_PASSWORD || !env.DEVELOPER_PASSWORD) return fail('编辑功能尚未配置', 503);
  const body = await readJson(request, 512);
  if (!body || typeof body.password !== 'string' || body.password.length > 128) return fail('请输入密码');
  const now = Math.floor(Date.now() / 1000);
  const ip = request.headers.get('CF-Connecting-IP') || 'local';
  const attemptKey = hex(await digest(ip));
  const attempt = await env.DB.prepare('SELECT window_start, failures FROM login_attempts WHERE key = ?')
    .bind(attemptKey).first();
  if (attempt && attempt.window_start > now - 600 && attempt.failures >= 8) {
    return fail('尝试次数过多，请稍后再试', 429);
  }
  let role = null;
  if (await equalSecret(body.password, env.DEVELOPER_PASSWORD)) {
    role = 'developer';
  } else {
    const setting = await env.DB.prepare("SELECT value FROM settings WHERE key = 'editor_password'").first();
    if (setting) {
      const saved = JSON.parse(setting.value);
      const salt = Uint8Array.from(saved.salt.match(/.{2}/g), byte => parseInt(byte, 16));
      const candidate = await passwordHash(body.password, salt);
      if (equalBytes(encoder.encode(candidate), encoder.encode(saved.hash))) role = 'editor';
    } else if (await equalSecret(body.password, env.EDITOR_PASSWORD)) {
      role = 'editor';
    }
  }
  if (!role) {
    await env.DB.prepare(`INSERT INTO login_attempts (key, window_start, failures) VALUES (?, ?, 1)
      ON CONFLICT(key) DO UPDATE SET
      failures = CASE WHEN window_start < ? THEN 1 ELSE failures + 1 END,
      window_start = CASE WHEN window_start < ? THEN excluded.window_start ELSE window_start END`)
      .bind(attemptKey, now, now - 600, now - 600).run();
    return fail('密码错误', 401);
  }
  await env.DB.prepare('DELETE FROM login_attempts WHERE key = ?').bind(attemptKey).run();
  const token = hex(crypto.getRandomValues(new Uint8Array(32)));
  await env.DB.prepare('INSERT INTO sessions (token_hash, role, expires_at) VALUES (?, ?, ?)')
    .bind(hex(await digest(token)), role, now + SESSION_SECONDS).run();
  return json({ role }, 200, {
    'Set-Cookie': `dps_session=${token}; Path=/api; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_SECONDS}`
  });
}

function text(value, max) {
  if (typeof value !== 'string' || value.length > max) throw new Error('字段内容不符合要求');
  return value.trim();
}

function videoUrl(value) {
  const url = text(value, 250);
  if (!url) return '';
  let parsed;
  try { parsed = new URL(url); } catch { throw new Error('请填写有效的 B 站视频链接'); }
  if (parsed.protocol !== 'https:' || parsed.hostname !== 'www.bilibili.com' ||
      !/^\/video\/BV[A-Za-z0-9]+\/?$/.test(parsed.pathname)) {
    throw new Error('请填写 B 站原视频链接');
  }
  const page = parsed.searchParams.get('p');
  if (page !== null && !/^[1-9]\d{0,2}$/.test(page)) throw new Error('视频分 P 参数无效');
  return `${parsed.origin}${parsed.pathname}${page ? '?p=' + page : ''}`;
}

function validateEntry(body) {
  if (!body || typeof body !== 'object' || !Array.isArray(body.members) ||
      body.members.length !== 3 || !Array.isArray(body.tags) || body.tags.length > 8) {
    throw new Error('角色资料格式不正确');
  }
  const main = text(body.main, 40);
  const team = text(body.team, 40);
  if (!main || !team) throw new Error('角色名和反应不能为空');
  const dps = body.dps === null || body.dps === '' ? null : Number(body.dps);
  if (dps !== null && (!Number.isFinite(dps) || dps < 0 || dps > 1000)) {
    throw new Error('DPS 数值不正确');
  }
  const released = text(body.released, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(released) || Number.isNaN(Date.parse(released))) {
    throw new Error('角色实装日期不正确');
  }
  return {
    main, team, released, members: body.members.map(member => text(member, 40)),
    tags: body.tags.map(tag => text(tag, 80)).filter(Boolean),
    detail: text(body.detail, 600), author: text(body.author, 80),
    dps, url: videoUrl(body.url)
  };
}

async function api(request, env) {
  if (!env.DB) return fail('编辑数据库尚未配置', 503);
  const url = new URL(request.url);
  const path = url.pathname;
  const method = request.method;
  if (method !== 'GET' && !originOkay(request)) return fail('请求来源无效', 403);

  if (path === '/api/board' && method === 'GET') {
    const [result, settings] = await Promise.all([
      env.DB.prepare('SELECT id, payload, frozen FROM entries').all(),
      env.DB.prepare("SELECT key, value FROM settings WHERE key IN ('editor_message', 'developer_message')").all()
    ]);
    return json({ entries: result.results.map(row => ({
      id: row.id, data: row.payload ? JSON.parse(row.payload) : null, frozen: Boolean(row.frozen)
    })), messages: Object.fromEntries(settings.results.map(row => [row.key, row.value])) });
  }
  if (path === '/api/login' && method === 'POST') return login(request, env);
  if (path === '/api/session' && method === 'GET') return json({ role: await session(request, env.DB) });
  if (path === '/api/logout' && method === 'POST') {
    const token = cookie(request);
    if (/^[a-f0-9]{64}$/.test(token)) {
      await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?')
        .bind(hex(await digest(token))).run();
    }
    return json({ ok: true }, 200, {
      'Set-Cookie': 'dps_session=; Path=/api; HttpOnly; Secure; SameSite=Strict; Max-Age=0'
    });
  }
  const role = await session(request, env.DB);
  if (!role) return fail('请先启用编辑模式', 401);

  const match = path.match(/^\/api\/entries\/([^/]+)(\/freeze)?$/);
  if (match && method === 'PUT') {
    const id = decodeURIComponent(match[1]);
    if (!/^[\p{L}\p{N}·.' -]{1,40}$/u.test(id)) return fail('角色名称无效');
    if (match[2]) {
      if (role !== 'developer') return fail('仅开发者可以冻结角色', 403);
      const body = await readJson(request, 512);
      if (!body || typeof body.frozen !== 'boolean') return fail('冻结状态无效');
      await env.DB.prepare(`INSERT INTO entries (id, frozen) VALUES (?, ?)
        ON CONFLICT(id) DO UPDATE SET frozen = excluded.frozen, updated_at = CURRENT_TIMESTAMP`)
        .bind(id, Number(body.frozen)).run();
      return json({ ok: true, frozen: body.frozen });
    }
    const data = validateEntry(await readJson(request));
    const result = await env.DB.prepare(`INSERT INTO entries (id, payload, frozen) VALUES (?, ?, 0)
      ON CONFLICT(id) DO UPDATE SET payload = excluded.payload, updated_at = CURRENT_TIMESTAMP
      WHERE ? = 'developer' OR entries.frozen = 0`)
      .bind(id, JSON.stringify(data), role).run();
    if (!result.meta.changes) return fail('此角色已冻结，只有开发者可以编辑', 403);
    return json({ ok: true, data });
  }
  if (path === '/api/settings/editor-password' && method === 'PUT') {
    if (role !== 'developer') return fail('仅开发者可以更改密码', 403);
    const body = await readJson(request, 512);
    if (!body || typeof body.password !== 'string' || body.password.length < 4 || body.password.length > 128) {
      return fail('新密码需为 4 到 128 个字符');
    }
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const value = JSON.stringify({ salt: hex(salt), hash: await passwordHash(body.password, salt) });
    await env.DB.batch([
      env.DB.prepare("INSERT INTO settings (key, value) VALUES ('editor_password', ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value").bind(value),
      env.DB.prepare("DELETE FROM sessions WHERE role = 'editor'")
    ]);
    return json({ ok: true });
  }
  const messageMatch = path.match(/^\/api\/messages\/(editor|developer)$/);
  if (messageMatch && method === 'PUT') {
    const owner = messageMatch[1];
    if (owner === 'developer' && role !== 'developer') return fail('仅开发者可以修改此寄语', 403);
    const body = await readJson(request, 4096);
    if (!body || typeof body.message !== 'string' || !body.message.trim() ||
        body.message.length > 2000) return fail('寄语需为 1 到 2000 个字符');
    const message = body.message.trim();
    await env.DB.prepare('INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value')
      .bind(owner + '_message', message).run();
    return json({ ok: true, message });
  }
  return fail('接口不存在', 404);
}

export default {
  async fetch(request, env) {
    if (!new URL(request.url).pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
    try { return await api(request, env); }
    catch (error) {
      if (error instanceof SyntaxError) return fail('请求内容不是有效 JSON');
      if (error instanceof Error && /^(请求内容|字段内容|角色资料|角色名|DPS 数值|角色实装日期|请填写|视频分 P)/.test(error.message)) {
        return fail(error.message);
      }
      console.error(JSON.stringify({ event: 'api_error', message: String(error) }));
      return fail('服务器暂时无法处理请求', 500);
    }
  }
};
