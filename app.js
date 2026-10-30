const icons = {
 robot:'<path d="M6 26h20M10 26v-5h12v5M16 21v-6l-7-5 4-6 9 6-3 6M11 8l8 6M22 10l4 2-1 5m1-5 3 1v4"/><circle cx="16" cy="16" r="2"/>',
 terrain:'<path d="M2 23c6 0 7-12 13-12s7 12 15 12M2 27c7 0 8-10 13-10s7 10 15 10M5 18c4-3 6-12 10-12s6 8 11 11M10 11l5-8 5 7"/>',
 chip:'<rect x="8" y="8" width="16" height="16" rx="2"/><rect x="12" y="12" width="8" height="8"/><path d="M12 3v5m8-5v5M12 24v5m8-5v5M3 12h5m-5 8h5m16-8h5m-5 8h5"/>',
 book:'<path d="M4 5h9l3 3 3-3h9v22h-9l-3 2-3-2H4ZM16 8v21M8 11h4m-4 5h4m8-5h4m-4 5h4"/>'
};
const projects=[
  {
    "title": "言出必行",
    "short": "项目负责人 · 具身智能、自然语言理解与 Agent 任务规划。",
    "icon": "robot",
    "body": "负责团队组织与核心意图理解模块开发，围绕感知、推理、执行和反馈推进闭环演示；参与任务规划与多智能体“插桩—分析—修复”机制的设计和开发。",
    "meta": "具身智能 · Agent 任务规划 · Python · CodeArts · Isaac Sim",
    "boundary": "项目获 2026 年挑战杯揭榜挂帅国家三等奖。当前验证范围为 Mock / Isaac Sim 仿真，不代表完成真实机器人部署。"
  },
  {
    "title": "昆仑碳藏",
    "short": "项目负责人 · 机器学习、遥感碳汇估算与地理数据可视化。",
    "icon": "terrain",
    "body": "统筹 4 人团队完成需求分析、开发、部署与参赛交付。负责前后端架构、估算接口、地图展示与模型问答等工作，并开展阿里云部署与 Nginx 运维。",
    "meta": "Random Forest / XGBoost · 遥感估算 · FastAPI · Vue / Vite",
    "boundary": "作品获 2026 年中国大学生计算机设计大赛重庆市级赛三等奖。平台技术实现与实际试点成效分别记录。"
  },
  {
    "title": "TraceCoder",
    "short": "科研实践 · 代码修复 Agent 的研究与工程。",
    "icon": "chip",
    "body": "参与代码修复 Agent 相关课题，开展文献与技术路线梳理、基线复现和实验分析，以及核心逻辑整理与技术文档建设。",
    "meta": "Agent · 基线复现 · 实验与排错",
    "boundary": "展示参与内容，不将课题参与经历表述为已经发表的论文成果。"
  },
  {
    "title": "鸿枢 iHongShuAgent",
    "short": "把指令转换为经过约束与校验的结构化任务。",
    "icon": "robot",
    "body": "由 Python 意图理解引擎与 HarmonyOS 交互前端组成，经过场景构建、规划与安全校验生成 RobotTaskIR，并将结果返回界面。",
    "meta": "HarmonyOS · FastAPI · RobotTaskIR",
    "boundary": "端到端演示，与具身智能方向存在技术关联；具体个人分工仍在整理。"
  },
  {
    "title": "诗映大唐",
    "short": "项目负责人 · 数据可视化、交互叙事与诗人关系网络。",
    "icon": "book",
    "body": "作为项目负责人，统筹诗映大唐的开发与迭代，通过数字长卷、意象统计、人物档案和交游网络组织唐诗内容，推进排版、配色、文案、交互及部署。",
    "meta": "数据可视化 · 关系网络 · React · D3.js · GSAP · Three.js",
    "boundary": "担任项目负责人；具体模块分工与实现范围按团队实际贡献记录。"
  },
  {
    "title": "RAG 问答与电影检索",
    "short": "个人实践 · 从数据到可使用的应用。",
    "icon": "book",
    "body": "完成恋爱哲学 RAG 问答平台的知识切片、向量存储与检索问答流程；另开展电影检索网站的前后端、数据库与云端部署实践。",
    "meta": "RAG · 数据库 · 全栈开发",
    "boundary": "开发经历依据个人简历整理；暂未提供在线演示入口。"
  },
  {
    "title": "NFC 与 PCB 小创作",
    "short": "硬件实践 · 从电路设计到打样与调试。",
    "icon": "chip",
    "body": "使用嘉立创 EDA 开展无源 NFC LED 读卡装置的原理图和 PCB 布线，参与打样、焊接与射频调试，也保留邮宝挂件和纪念卡等小作品的设计工程。",
    "meta": "嘉立创 EDA · PCB · NFC",
    "boundary": "不同工程的承接关系与实物展示仍在整理，不附未经确认的性能指标。"
  }
];
const caseStudies={
 '言出必行':{overview:'将自然语言指令转换为可检查的任务规划，在仿真环境中连接执行与反馈。',result:'2026 年挑战杯揭榜挂帅 · 国家三等奖',tasks:['统筹团队组织与模块联调','负责核心意图理解与任务规划','参与多智能体反馈纠错机制'],flow:['指令理解','任务规划','仿真执行','反馈纠错']},
 '昆仑碳藏':{overview:'面向草地生态研究，将遥感驱动数据、碳通量估算模型与地图展示组织为完整平台。',result:'2026 中国大学生计算机设计大赛 · 重庆市级赛三等奖',tasks:['统筹 4 人团队与全流程交付','负责估算接口、前后端与地图展示','开展云端部署和运维排错'],flow:['数据校验','模型估算','空间展示','辅助分析']},
 '诗映大唐':{overview:'通过时代、意象与诗人关系组织唐诗数据，探索可视化叙事与交互阅读。',result:'形成数字长卷、意象统计与诗人交游网络等交互内容',tasks:['统筹项目开发与迭代','推进视觉排版与内容组织','推进交互反馈及部署'],flow:['数据整理','意象统计','关系呈现','交互阅读']}
};
function projectCase(p){const c=caseStudies[p.title];const tech=p.meta.split(' · ');const duties=c?c.tasks:[p.body];return `<div class="case-overview"><p class="panel-lead">${p.short}</p><p>${c?c.overview:p.body}</p></div>${c?`<section class="case-result"><h3>核心成果</h3><p>${c.result}</p></section>`:''}<div class="case-columns"><section><h3>技术重点</h3><ul>${tech.map(t=>`<li>${t}</li>`).join('')}</ul></section><section><h3>我的职责</h3><ul>${duties.map(t=>`<li>${t}</li>`).join('')}</ul></section></div>${c?`<section><h3>实现流程</h3><ol class="case-flow">${c.flow.map(t=>`<li>${t}</li>`).join('')}</ol></section>`:''}<section class="case-boundary"><h3>验证与边界</h3><p>${p.boundary}</p></section>`;}
function projectElement(p){const d=document.createElement('button');d.type='button';d.className='project project-trigger';d.innerHTML=`<span class="project-icon" aria-hidden="true"><svg viewBox="0 0 32 32">${icons[p.icon]}</svg></span><span class="project-label"><strong>${p.title}</strong><span>${p.short}</span></span><span class="project-arrow" aria-hidden="true">↗</span>`;d.addEventListener('click',()=>openPanel(p.title,projectCase(p)));return d;}
const featuredTitles = ['言出必行', '昆仑碳藏', '诗映大唐'];
const orderedProjects = [...featuredTitles.map(title => projects.find(p => p.title === title)), ...projects.filter(p => !featuredTitles.includes(p.title))].filter(Boolean);
orderedProjects.forEach((p,i)=>document.getElementById(i<featuredTitles.length?'projects':'more-projects').append(projectElement(p)));
const show=document.getElementById('show-projects');show.addEventListener('click',()=>{const el=document.getElementById('more-projects');el.hidden=!el.hidden;show.setAttribute('aria-expanded',String(!el.hidden));show.innerHTML=el.hidden?'再看看其他项目 <span aria-hidden="true">＋</span>':'收起其他项目 <span aria-hidden="true">−</span>';});
const profile=window.PROFILE||{};
if(profile.name)document.querySelectorAll('[data-name]').forEach(el=>el.textContent=profile.name);
if(profile.name&&profile.name!=='你的名字')document.title=profile.name+' 的实验室';
if(profile.currentStatus)document.getElementById('current-status').textContent=profile.currentStatus;
const contacts=document.getElementById('contacts');let configured=false;
for(const [label,value] of [['GitHub',profile.github],['邮件',profile.email]]){if(!value)continue;let href;if(label==='邮件'){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))continue;href='mailto:'+value;}else{try{const u=new URL(value);if(u.protocol!=='https:')continue;href=u.href;}catch{continue;}}if(!configured){contacts.replaceChildren();configured=true;}const link=document.createElement('a');link.className='contact-link';link.textContent=label+' ↗';link.href=href;if(label==='GitHub'){link.target='_blank';link.rel='noopener noreferrer';}contacts.append(link);}
const theme=document.getElementById('theme');function setTheme(dark){document.documentElement.dataset.theme=dark?'dark':'light';theme.setAttribute('aria-label',dark?'切换浅色模式':'切换深色模式');theme.title=theme.getAttribute('aria-label');theme.setAttribute('aria-pressed',String(dark));}
try{setTheme(localStorage.getItem('personal-home-theme')==='dark');}catch{setTheme(false);}
theme.addEventListener('click',()=>{const dark=document.documentElement.dataset.theme!=='dark';setTheme(dark);try{localStorage.setItem('personal-home-theme',dark?'dark':'light');}catch{}});


const panel=document.getElementById('detail-panel');let lastTrigger=null;let previousOverflow='';
function openPanel(title,html){lastTrigger=document.activeElement;document.getElementById('panel-title').textContent=title;document.getElementById('panel-body').innerHTML=html;organizePanel();previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';panel.showModal();panel.scrollTop=0;document.getElementById('panel-close').focus();}
document.getElementById('panel-close').addEventListener('click',()=>panel.close());
panel.addEventListener('click',event=>{if(event.target===panel){const rect=panel.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)panel.close();}});
panel.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;if(lastTrigger?.isConnected)lastTrigger.focus({preventScroll:true});});
document.querySelectorAll('[data-panel]').forEach(button=>button.addEventListener('click',()=>{const id=button.dataset.panel;openPanel(id==='academic'?'学术介绍':id==='experience'?'经历与认可':'这次，先从自己的主页开始',document.getElementById(id+'-content').innerHTML);}));
document.querySelectorAll('[data-academic]').forEach(button=>button.addEventListener('click',()=>{openPanel('学术介绍',document.getElementById('academic-content').innerHTML);const headings=document.querySelectorAll('#panel-body h3');headings[Number(button.dataset.academic)]?.scrollIntoView({block:'start'});}));

function organizePanel(){const body=document.getElementById('panel-body');if(body.querySelector('.case-overview')){body.classList.remove('reading-panel');return;}const headings=[...body.children].filter(el=>el.tagName==='H3');if(!headings.length){body.classList.add('reading-panel');return;}body.classList.remove('reading-panel');for(const heading of headings){const section=document.createElement('section');section.className='detail-group';heading.before(section);section.append(heading);while(section.nextElementSibling&&section.nextElementSibling.tagName!=='H3'){section.append(section.nextElementSibling);}}}
