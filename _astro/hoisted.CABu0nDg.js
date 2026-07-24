import"./hoisted.BoeLkuNd.js";import"./ViewTransitions.astro_astro_type_script_index_0_lang.BScVxmeO.js";const p="https://v1.hitokoto.cn/?c=a&c=b&c=i&c=j&c=k&encode=json",h=async()=>{const o=document.getElementById("hitokoto-text"),e=document.getElementById("hitokoto-from");if(o)try{const s=await(await fetch(p)).json();if(o.style.opacity="0",await new Promise(t=>setTimeout(t,250)),o.textContent=s.hitokoto||"天不再与，时不久留，能不两工，事在当之。",e){const t=[s.from_who,s.from].filter(Boolean).join(" · ");e.textContent=t?`—— ${t}`:""}o.style.opacity="1"}catch{o&&(o.style.opacity="1",o.textContent="天不再与，时不久留，能不两工，事在当之。")}};h();document.addEventListener("astro:page-load",h);function d(){const o=document.getElementById("terminal-form"),e=document.getElementById("terminal-input"),a=document.getElementById("terminal-output");if(!o||!e||!a||e.hasAttribute("data-term-inited"))return;e.setAttribute("data-term-inited","true");const s=[];let t=-1;const n=(i,c="")=>{const r=document.createElement("p");r.className=`term-line ${c}`,r.innerHTML=i,a.appendChild(r),a.scrollTop=a.scrollHeight};o.addEventListener("submit",i=>{i.preventDefault();const c=e.value.trim();if(e.value="",!c)return;s.push(c),t=s.length,n(`<span class="prompt-user">y4n-ci@blog:~$</span> ${c}`,"user-cmd");const r=c.split(" "),m=r[0].toLowerCase(),l=r[1]?.toLowerCase();switch(m){case"help":n(`可用命令列表：
  <span class="cmd-highlight">help</span>     - 显示当前帮助信息
  <span class="cmd-highlight">ls</span>       - 列出全站路由目录
  <span class="cmd-highlight">about</span>    - 查看作者简介
  <span class="cmd-highlight">whoami</span>   - 显示当前用户身份
  <span class="cmd-highlight">date</span>     - 显示当前系统时间
  <span class="cmd-highlight">clear</span>    - 清空终端屏幕
  <span class="cmd-highlight">cat</span>      - 读取站点元数据 (如 cat site.yml)`);break;case"ls":n(`全站可用页面路径:
  /posts       - 文章归档
  /about       - 关于我
  /projects    - 个人项目
  /footprint   - 物理足迹地图
  /timeline    - 创作时间轴
  /field-guide - 具身智能交互手册`);break;case"about":n(`Y4n-CI · MSc Robotics @ Bristol & BSc CS @ Essex
专注具身智能 (VLA)、控制理论、机器人系统集成与极简 Web 架构。`);break;case"whoami":n("visitor@y4n-ci-blog (Guest User)");break;case"date":n(new Date().toString());break;case"clear":a.innerHTML="";break;case"cat":n(l==="site.yml"||l==="about.yml"?`author: Y4n-CI
role: Robotics MSc Researcher
framework: Astro 5.0 + Material Design 3`:`cat: ${l||"未指定文件"}: No such file or directory. Try 'cat site.yml'`);break;default:n(`zsh: command not found: ${m}. 输入 'help' 查看帮助。`,"err")}}),e.addEventListener("keydown",i=>{i.key==="ArrowUp"?t>0&&(t--,e.value=s[t]||""):i.key==="ArrowDown"&&(t<s.length-1?(t++,e.value=s[t]||""):(t=s.length,e.value=""))})}d();document.addEventListener("DOMContentLoaded",d);document.addEventListener("astro:page-load",d);
