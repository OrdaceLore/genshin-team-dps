    const rows=[
      {main:'玛薇卡',released:'2025-01-01',team:'超载',comp:'玛薇卡 / 夏沃蕾 / 欧洛伦 / 伊安珊',dps:18.44,url:'https://www.bilibili.com/video/BV1g5Vh63EQS/',author:'夜星Wetchin',tags:[['角色 95 级','special']],detail:'原片 95 级'},
      {main:'菲林斯',released:'2025-09-30',team:'月感电',comp:'菲林斯 / 队友配置见原片',dps:19,url:'https://www.bilibili.com/video/BV1HRt163Ef8/',author:'米酒Yahalo',detail:'作者标称全 0+0、冷启动、无剧诗增益'},
      {main:'玛拉妮',released:'2024-08-28',team:'魔导',comp:'玛拉妮 / 队友配置见原片',dps:11,url:'https://www.bilibili.com/video/BV1vrg96gEoZ/',author:'她说玫瑰玫瑰头香',detail:'作者标称限定 1 金；命座和武器以原片为准'},
      {main:'阿蕾奇诺',released:'2024-04-24',team:'融化',comp:'阿蕾奇诺 / 茜特菈莉 / 砂糖 / 班尼特',author:''},
      {main:'那维莱特',released:'2023-09-27',team:'水伤',comp:'那维莱特 / 芙宁娜 / 希诺宁 / 欧洛伦',author:''},
      {main:'克洛琳德',released:'2024-06-05',team:'魔导超载',comp:'克洛琳德 / 菲谢尔 / 夏沃蕾 / 杜林',author:''},
      {main:'娜维娅',released:'2023-12-20',team:'结晶',comp:'娜维娅 / 队友配置见原片',author:''},
      {main:'莱欧斯利',released:'2023-10-17',team:'星超导',comp:'莱欧斯利 / 队友配置见原片',author:''},
      {main:'林尼',released:'2023-08-16',team:'纯火',comp:'林尼 / 班尼特 / 香菱 / 风系队友',url:'https://www.bilibili.com/video/BV1A44y1F7JG/',author:'赫箩的苹果'},
      {main:'嘉明',released:'2024-01-31',team:'下落蒸发',comp:'嘉明 / 闲云 / 芙宁娜 / 班尼特',url:'https://www.bilibili.com/video/BV195ttz9EsB/',author:'氢氧化氢芙',detail:'原片为幽境实战，未提供木桩 DPS'},
      {main:'恰斯卡',released:'2024-11-20',team:'多元素',comp:'恰斯卡 / 队友配置见原片',url:'https://www.bilibili.com/video/BV1etfaB8ER5/',author:'邪恶仓鼠精',detail:'与法尔伽的限定 1 金对比；片中法尔伽使用模拟加成，不引用其数值'},
      {main:'基尼奇',released:'2024-09-17',team:'魔导',comp:'基尼奇 / 队友配置见原片',dps:10.2,url:'https://www.bilibili.com/video/BV1q6um6XEJA/',author:'天之玄圆sc',detail:'作者标称 3 金；命座和武器以原片为准'},
      {main:'瓦蕾莎',released:'2025-03-26',team:'下落',comp:'瓦蕾莎 / 队友配置见原片',dps:12.2,url:'https://www.bilibili.com/video/BV15VYo6iEqp/',author:'羊套橘子',detail:'作者标称严格 0 限定金；需双西风'},
      {main:'丝柯克',released:'2025-06-18',team:'冰水',comp:'丝柯克 / 爱可菲 / 沃雅妮莎 / 芙宁娜',url:'https://www.bilibili.com/video/BV1PBHR6HEER/',author:'枫声松松',detail:'作者标称全 0+0、无隐金；移动端 60 帧实战'},
      {main:'奈芙尔',released:'2025-10-22',team:'月绽放',comp:'奈芙尔 / 菈乌玛 / 少女 / 队友配置见原片',dps:19.3,url:'https://www.bilibili.com/video/BV1ZCXDB6EZZ/',author:'梦翼yi',detail:'作者标称 3 金、冷启动 120 秒；命座和武器以原片为准'},
      {main:'兹白',released:'2026-02-03',team:'月结晶',comp:'兹白 / 莉奈娅 / 少女 / 队友配置见原片',dps:22.9,url:'https://www.bilibili.com/video/BV1JGbB6SE6y/',author:'米酒Yahalo',tags:[['锻造武器','']],detail:'作者标称严格 3 金、冷启动'},
      {main:'木偶',released:'2026-07-01',team:'星超导',comp:'木偶 / 队友配置见原片',dps:23.4,url:'https://www.bilibili.com/video/BV1MUpz6pEob/',author:'最ニ网管',tags:[['精 4 新枝','special']],detail:'作者标称严格 2 金、官方 60 帧；视频说明称木偶 65% 暴击率下全暴击'},
      {main:'法尔伽',released:'2026-02-25',team:'魔导',comp:'法尔伽 / 队友配置见原片',dps:20.13,url:'https://www.bilibili.com/video/BV16FtW6BEJb/?p=2',author:'氪星难民',tags:[['大月卡武器：螭骨剑','paid']],detail:'仅采用视频第二 P 的严格 3 金成绩；第一 P 涉及五星专武，不计入'},
      {main:'薇斯纳',released:'2026-09-23',team:'队伍见原片',comp:'薇斯纳 / 队友配置见原片',dps:22.65,url:'https://www.bilibili.com/video/BV1KKaP6qExn/',author:'荷欢欢',detail:'作者标称 3 金、60 帧纯绿；命座和武器以原片为准'},
      {main:'洛恩',released:'2026-06-09',team:'队伍见原片',comp:'洛恩 / 尼可 / 杜林 / 奶奶',dps:13.1,url:'https://www.bilibili.com/video/BV1VJEm66Ekz/?p=1',author:'粑重神子Tatsumaki',tags:[['大月卡武器：决斗之枪、狼牙','paid']],detail:'仅采用视频第一 P 的严格 4 金成绩；第二 P 有五星专武，不计入'}
    ];
const board=document.getElementById('board'),count=document.getElementById('count');
const search=document.getElementById('search'),sort=document.getElementById('sort');
const modeButton=document.getElementById('modeButton'),passwordButton=document.getElementById('passwordButton');
const addButton=document.getElementById('addButton');
const editHint=document.getElementById('editHint');
const loginDialog=document.getElementById('loginDialog'),editDialog=document.getElementById('editDialog'),passwordDialog=document.getElementById('passwordDialog');
const loginForm=document.getElementById('loginForm'),editForm=document.getElementById('editForm'),passwordForm=document.getElementById('passwordForm');
const messageFields={editor:document.getElementById('editorMessage'),developer:document.getElementById('developerMessage')};
const overlays=new Map();
const builtInIds=new Set(rows.map(row=>row.main));
let role=null,editingId=null;

function baseData(x){
  const members=x.comp.split('/').map(s=>s.trim()).slice(1,4);
  while(members.length<3)members.push('');
  return {main:x.main,team:x.team,members,released:x.released,
    tags:(x.tags||[]).map(t=>t[0]),detail:x.detail||'',author:x.author||'',
    dps:x.dps??null,url:x.url||''};
}
function current(x){return {...baseData(x),...(overlays.get(x.main)?.data||{}),id:x.main,
  frozen:Boolean(overlays.get(x.main)?.frozen)};}
function tagClass(tag){return tag.includes('大月卡')||tag.includes('纪行')?'paid':
  tag.includes('级')||tag.includes('精 ') ?'special':'';}
function canEdit(x){return Boolean(role)&&(!x.frozen||role==='developer');}
function entryPayload(x){
  return {main:x.main,team:x.team,released:x.released,members:[...x.members],
    tags:[...x.tags],detail:x.detail,author:x.author,dps:x.dps,url:x.url};
}
async function saveField(x,field,value){
  const data=entryPayload(x);
  if(field.startsWith('member:')) data.members[Number(field.slice(7))]=value.trim();
  else if(field.startsWith('tag:')){
    const index=Number(field.slice(4));
    if(value.trim())data.tags[index]=value.trim();else data.tags.splice(index,1);
  }else if(field==='newTag'){
    if(value.trim())data.tags.push(value.trim());
  }else if(field==='dps')data.dps=value.trim()===''?null:Number(value);
  else data[field]=value.trim();
  await api('/entries/'+encodeURIComponent(x.id),{method:'PUT',body:JSON.stringify(data)});
  await loadBoard();
}
let activeInline=false;
function inlineField(x,field,label,display,value,options={}){
  const span=document.createElement('span');
  span.textContent=display||options.placeholder||'';
  if(!canEdit(x))return span;
  span.className='inline-field'+(options.className?' '+options.className:'');
  span.tabIndex=0;span.setAttribute('role','button');
  span.setAttribute('aria-label','编辑'+label);
  span.title='点击编辑'+label;
  const begin=()=>{
    if(activeInline)return;
    activeInline=true;
    const input=document.createElement(options.multiline?'textarea':'input');
    if(!options.multiline)input.type=options.type||'text';
    input.className='inline-input';
    input.value=value??'';
    input.placeholder=options.placeholder||label;
    input.maxLength=options.maxLength||250;
    input.setAttribute('aria-label',label);
    span.replaceWith(input);
    input.focus();input.select();
    let done=false;
    const finish=async(commit)=>{
      if(done)return;done=true;
      if(!commit||input.value===(value??'')){activeInline=false;input.replaceWith(span);return;}
      input.disabled=true;
      try{await saveField(x,field,input.value)}
      catch(error){input.replaceWith(span);alert(error.message)}
      finally{activeInline=false}
    };
    input.addEventListener('blur',()=>finish(true));
    input.addEventListener('keydown',event=>{
      if(event.key==='Escape'){event.preventDefault();finish(false)}
      else if(event.key==='Enter'&&(!options.multiline||event.ctrlKey||event.metaKey)){
        event.preventDefault();finish(true)
      }
    });
  };
  span.addEventListener('click',begin);
  span.addEventListener('keydown',event=>{
    if(event.key==='Enter'||event.key===' '){event.preventDefault();begin()}
  });
  return span;
}
function updateMode(){
  modeButton.textContent=role?(role==='developer'?'开发者模式 · 退出':'编辑模式 · 退出'):'启用编辑模式';
  passwordButton.hidden=role!=='developer';
  addButton.hidden=!role;
  editHint.hidden=!role;
  for(const owner of ['editor','developer']){
    const allowed=Boolean(role)&&(owner==='editor'||role==='developer');
    messageFields[owner].classList.toggle('inline-field',allowed);
    messageFields[owner].tabIndex=allowed?0:-1;
    if(allowed)messageFields[owner].setAttribute('role','button');
    else messageFields[owner].removeAttribute('role');
  }
  render();
}
async function api(path,options={}){
  const response=await fetch('/api'+path,{credentials:'same-origin',...options,
    headers:{'Content-Type':'application/json',...(options.headers||{})}});
  const data=await response.json();
  if(!response.ok)throw new Error(data.error||'请求失败');
  return data;
}
async function loadBoard(){
  try{
    const data=await api('/board');
    overlays.clear();
    for(const entry of data.entries||[])overlays.set(entry.id,entry);
    for(const owner of ['editor','developer'])
      if(data.messages?.[owner+'_message'])messageFields[owner].textContent=data.messages[owner+'_message'];
    render();
  }catch(error){console.warn('榜单更新暂时不可用',error);render();}
}
function render(){
  const query=search.value.trim().toLowerCase();
  const added=[...overlays].filter(([id,entry])=>!builtInIds.has(id)&&entry.data)
    .map(([id,entry])=>({main:id,team:entry.data.team,released:entry.data.released,
      comp:id+' / '+entry.data.members.join(' / '),author:'',tags:[],detail:'',dps:null,url:''}));
  const visible=[...rows,...added].map(current).filter(x=>role||(x.dps!=null&&x.url));
  document.getElementById('total').innerHTML=visible.length+'<span> 位主 C</span>';
  const selected=visible.filter(x=>(x.main+' '+x.team+' '+x.members.join(' ')+' '+x.author+' '+x.tags.join(' ')).toLowerCase().includes(query));
  selected.sort((a,b)=>sort.value==='release'?b.released.localeCompare(a.released)||a.main.localeCompare(b.main,'zh-CN'):(a.dps==null)-(b.dps==null)||(a.dps!=null&&b.dps!=null?b.dps-a.dps:b.released.localeCompare(a.released)));
  count.innerHTML='<strong>'+selected.length+'</strong> 位主 C · <strong>'+selected.filter(x=>x.dps!=null).length+'</strong> 条视频标称 DPS';
  board.replaceChildren();
  if(!selected.length){board.innerHTML='<div class="empty">没有找到对应队伍</div>';return}
  const max=Math.max(...selected.map(x=>x.dps||0),1);let ranked=0;
  selected.forEach((x,index)=>{
    const el=document.createElement('article');el.className='row';
    el.innerHTML='<div class="rank"></div><div class="primary"><div class="team"></div><div class="subtitle"></div><div class="details"><div class="tags"></div><div class="note"></div><div class="manage"></div></div></div><div class="valuebox"><div class="value"></div><div class="bar"><i></i></div></div><div class="video-group"></div>';
    const rank=el.querySelector('.rank');
    if(sort.value==='release')rank.textContent=String(index+1).padStart(2,'0');
    else if(x.dps!=null){rank.textContent=String(++ranked).padStart(2,'0');if(ranked<=3)rank.classList.add('top3')}
    else{rank.textContent='·';rank.classList.add('none')}
    const title=el.querySelector('.team');
    title.append(inlineField(x,'main','角色名',x.main,x.main,{maxLength:40}),' · ',
      inlineField(x,'team','反应',x.team,x.team,{maxLength:40}));
    const subtitle=el.querySelector('.subtitle');
    x.members.forEach((member,memberIndex)=>{
      if(!member&&!canEdit(x))return;
      if(subtitle.childNodes.length)subtitle.append(' / ');
      subtitle.append(inlineField(x,'member:'+memberIndex,'队伍成员 '+(memberIndex+1),
        member,member,{placeholder:'+ 队友',maxLength:40}));
    });
    if(sort.value==='release'||canEdit(x)){
      if(subtitle.childNodes.length)subtitle.append(' · ');
      subtitle.append(inlineField(x,'released','角色发布时间',x.released+' 实装',
        x.released,{type:'date',maxLength:10}));
    }
    const tags=el.querySelector('.tags');
    x.tags.forEach((t,tagIndex)=>{
      const item=inlineField(x,'tag:'+tagIndex,'标签备注',t,t,{maxLength:80});
      item.classList.add('pill');
      const variant=tagClass(t);if(variant)item.classList.add(variant);
      tags.append(item);
    });
    if(canEdit(x)){
      const add=inlineField(x,'newTag','新标签','+ 标签','',{maxLength:80});
      add.classList.add('add-tag');tags.append(add);
    }
    const note=el.querySelector('.note');
    if(x.author||canEdit(x))note.append(inlineField(x,'author','视频作者',x.author,x.author,
      {placeholder:'+ 作者',maxLength:80}));
    if((x.author||canEdit(x))&&(x.detail||canEdit(x)))note.append(' · ');
    if(x.detail||canEdit(x))note.append(inlineField(x,'detail','文字备注',x.detail,x.detail,
      {placeholder:'+ 备注',maxLength:600,multiline:true}));
    const value=el.querySelector('.value'),bar=el.querySelector('.bar');
    if(x.dps!=null){
      value.append(inlineField(x,'dps','DPS',x.dps.toFixed(2).replace(/0$/,''),String(x.dps),
        {type:'number',maxLength:12}),' ');
      const unit=document.createElement('small');unit.textContent='万 DPS';value.append(unit);
      bar.querySelector('i').style.width=(x.dps/max*100)+'%';
    }else{
      value.append(inlineField(x,'dps','DPS','未提供 DPS','',{type:'number',maxLength:12}));
      value.classList.add('missing');bar.remove();
    }
    const videoGroup=el.querySelector('.video-group');
    if(canEdit(x)){
      const videoEdit=inlineField(x,'url','B 站视频链接',x.url?'B 站原视频':'添加视频链接',
        x.url,{type:'url',maxLength:250});
      videoEdit.classList.add('video');videoGroup.append(videoEdit);
      if(x.url){
        const open=document.createElement('a');open.href=x.url;open.target='_blank';
        open.rel='noopener noreferrer';open.className='video-open';
        open.textContent='↗';open.setAttribute('aria-label','观看 '+x.main+' 的 B 站原视频');
        videoGroup.append(open);
      }
    }else if(x.url){
      const link=document.createElement('a');link.href=x.url;link.target='_blank';
      link.rel='noopener noreferrer';link.className='video';
      link.textContent='B 站原视频 ↗';link.setAttribute('aria-label','观看 '+x.main+' 的 B 站原视频');
      videoGroup.append(link);
    }else videoGroup.remove();
    const manage=el.querySelector('.manage');
    if(role){
      if(x.frozen&&role!=='developer'){
        const frozen=document.createElement('span');frozen.className='frozen-label';frozen.textContent='此角色已冻结';manage.append(frozen);
      }
      if(role==='developer'){
        const freeze=document.createElement('button');freeze.type='button';freeze.className='action';
        freeze.textContent=x.frozen?'解除冻结':'冻结编辑';
        freeze.addEventListener('click',async()=>{
          freeze.disabled=true;
          try{await api('/entries/'+encodeURIComponent(x.id)+'/freeze',{method:'PUT',body:JSON.stringify({frozen:!x.frozen})});await loadBoard()}
          catch(error){alert(error.message);freeze.disabled=false}
        });
        manage.append(freeze);
      }
    }
    board.append(el);
  });
}
addButton.addEventListener('click',()=>{
  editingId=null;editForm.reset();
  document.getElementById('editHeading').textContent='新增角色';
  document.getElementById('editError').textContent='';
  editDialog.showModal();
});
document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
modeButton.addEventListener('click',async()=>{
  if(role){try{await api('/logout',{method:'POST'})}catch(error){console.warn(error)}
    role=null;updateMode();return;}
  loginForm.reset();document.getElementById('loginError').textContent='';loginDialog.showModal();
});
passwordButton.addEventListener('click',()=>{passwordForm.reset();document.getElementById('passwordError').textContent='';passwordDialog.showModal()});
for(const owner of ['editor','developer']){
  const field=messageFields[owner];
  const begin=()=>{
    if(activeInline||!role||(owner==='developer'&&role!=='developer'))return;
    activeInline=true;
    const original=field.textContent;
    const textarea=document.createElement('textarea');
    textarea.className='inline-input message-input';textarea.value=original;
    textarea.maxLength=2000;textarea.setAttribute('aria-label',owner==='editor'?'致读者的话':'致编辑的话');
    field.replaceWith(textarea);textarea.focus();
    let done=false;
    const finish=async(commit)=>{
      if(done)return;done=true;
      if(!commit||textarea.value.trim()===original){activeInline=false;textarea.replaceWith(field);return}
      textarea.disabled=true;
      try{const data=await api('/messages/'+owner,{method:'PUT',
          body:JSON.stringify({message:textarea.value})});
        field.textContent=data.message;textarea.replaceWith(field)}
      catch(error){textarea.replaceWith(field);alert(error.message)}
      finally{activeInline=false}
    };
    textarea.addEventListener('blur',()=>finish(true));
    textarea.addEventListener('keydown',event=>{
      if(event.key==='Escape'){event.preventDefault();finish(false)}
      else if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();finish(true)}
    });
  };
  field.addEventListener('click',begin);
  field.addEventListener('keydown',event=>{
    if(event.key==='Enter'||event.key===' '){event.preventDefault();begin()}
  });
}
loginForm.addEventListener('submit',async event=>{
  event.preventDefault();
  const error=document.getElementById('loginError');error.textContent='';
  try{const data=await api('/login',{method:'POST',body:JSON.stringify({password:document.getElementById('loginPassword').value})});
    role=data.role;loginDialog.close();loginForm.reset();updateMode()}
  catch(e){error.textContent=e.message}
});
editForm.addEventListener('submit',async event=>{
  event.preventDefault();
  const form=new FormData(editForm),error=document.getElementById('editError');error.textContent='';
  const payload={main:form.get('main'),team:form.get('team'),released:form.get('released'),
    members:[form.get('member1'),form.get('member2'),form.get('member3')],
    tags:String(form.get('tags')).split(/\r?\n/).map(s=>s.trim()).filter(Boolean),
    detail:form.get('detail'),author:form.get('author'),
    dps:form.get('dps')===''?null:Number(form.get('dps')),url:form.get('url')};
  if(!editingId&&(builtInIds.has(payload.main)||overlays.has(payload.main))){
    error.textContent='该角色已存在，请在榜单中编辑原条目';return;
  }
  try{await api('/entries/'+encodeURIComponent(editingId||payload.main),{method:'PUT',body:JSON.stringify(payload)});
    editDialog.close();await loadBoard()}
  catch(e){error.textContent=e.message}
});
passwordForm.addEventListener('submit',async event=>{
  event.preventDefault();
  const error=document.getElementById('passwordError');error.textContent='';
  try{await api('/settings/editor-password',{method:'PUT',body:JSON.stringify({password:document.getElementById('newPassword').value})});
    passwordDialog.close();passwordForm.reset();alert('编辑模式密码已更新')}
  catch(e){error.textContent=e.message}
});
[search,sort].forEach(el=>el.addEventListener(el===search?'input':'change',render));
render();loadBoard();
api('/session').then(data=>{role=data.role;updateMode()}).catch(()=>{});
