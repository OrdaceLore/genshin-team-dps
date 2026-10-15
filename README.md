# 原神标准队伍DPS排行

收录有视频来源的高 DPS 主 C，范围覆盖原神全部角色。每位主 C 列一支队伍；五星角色均为零命，全队不能携带五星武器，四星命座不限。公开榜单仅显示已填写 DPS 和 B 站原视频链接的条目，支持按 DPS 或角色首次发布时间排序。

## 编辑

右上角进入编辑模式后，可以修改角色资料、DPS、原视频和“编辑者寄语”，也可以新增角色。开发者模式还可冻结角色编辑、修改编辑模式密码，以及修改“开发者致信寄语”。改动保存在 Cloudflare D1，对所有访客生效。生产密码存放在 Cloudflare Pages Secrets，不在仓库中。

角色初始资料在 `dist/app.js`；在线修改覆盖初始资料。公开榜单暂不显示缺少 DPS 或原视频链接的初始条目，编辑模式仍可补全。

## 本地预览

```sh
python3 -m http.server 8765 --directory dist
```

这种静态预览只展示初始资料；编辑接口需要 Pages Functions 和 D1。数据库结构见 `schema.sql`，绑定见 `wrangler.jsonc`。

## 部署

项目使用 Cloudflare Pages Direct Upload。推送 GitHub 保存源代码后，运行：

```sh
wrangler pages deploy dist --project-name genshin-team-dps --branch main
```

正式域名：https://dps.efficientsystem.org/ 。修改 `dist/app.js` 后，请同步更新 `dist/index.html` 中的脚本版本参数，避免浏览器继续使用旧脚本。
