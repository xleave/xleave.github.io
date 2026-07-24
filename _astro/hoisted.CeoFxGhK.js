import"./hoisted.BoeLkuNd.js";import"./ViewTransitions.astro_astro_type_script_index_0_lang.BScVxmeO.js";function m(){const o=document.getElementById("btn-toggle-guide"),d=document.getElementById("btn-font-increase"),l=document.getElementById("btn-font-decrease"),i=document.getElementById("reading-focus-line"),e=document.querySelector(".post-content, article");let a=!1,n=100;o?.addEventListener("click",()=>{a=!a,i&&(i.style.display=a?"block":"none"),o.textContent=a?"关闭聚焦线":"切换高亮聚焦线"}),d?.addEventListener("click",()=>{n<140&&e&&(n+=10,e.style.fontSize=`${n}%`)}),l?.addEventListener("click",()=>{n>80&&e&&(n-=10,e.style.fontSize=`${n}%`)}),window.addEventListener("mousemove",s=>{a&&i&&(i.style.top=`${s.clientY}px`)})}document.addEventListener("astro:page-load",m);function g(){const o=document.getElementById("hex-raw"),d=document.getElementById("decoded-table-body");if(!o||!d)return;function l(){if(!o||!d)return;const i=o.value.trim().replace(/0x/g,"").replace(/\s+/g,""),e=[];for(let t=0;t<i.length;t+=2)e.push(parseInt(i.substr(t,2),16)||0);if(d.innerHTML="",e.length<4){d.innerHTML='<tr><td colspan="4" style="text-align:center; color:var(--md-on-surface-variant);">请输入至少 4 字节 Hex 数据</td></tr>';return}const a=e[0],n=e[1],s=e[3]<<8|e[2];let r=0;if(e.length>=8){const t=new ArrayBuffer(4),c=new DataView(t);e.slice(4,8).forEach((p,f)=>c.setUint8(f,p)),r=c.getFloat32(0,!0)}[{offset:"0x00",type:"uint8_t",field:"frame_header",val:"0x"+a.toString(16).toUpperCase()},{offset:"0x01",type:"uint8_t",field:"command_id",val:"0x"+n.toString(16).toUpperCase()},{offset:"0x02",type:"uint16_t",field:"payload_len",val:s.toString()},{offset:"0x04",type:"float32_t",field:"imu_roll_rad",val:r.toFixed(4)}].forEach(t=>{const c=document.createElement("tr");c.innerHTML=`
          <td><code>${t.offset}</code></td>
          <td><code>${t.type}</code></td>
          <td><strong>${t.field}</strong></td>
          <td style="color:var(--md-primary); font-weight:700;">${t.val}</td>
        `,d.appendChild(c)})}o.addEventListener("input",l),l()}document.addEventListener("astro:page-load",g);function y(){const o=document.getElementById("exp-kp"),d=document.getElementById("exp-ki"),l=document.getElementById("exp-kd"),i=document.getElementById("exp-kp-val"),e=document.getElementById("exp-ki-val"),a=document.getElementById("exp-kd-val"),n=document.getElementById("tab-cpp"),s=document.getElementById("tab-py"),r=document.getElementById("exp-code-output");let u="cpp";function t(){if(!o||!d||!l||!r)return;const c=parseFloat(o.value),p=parseFloat(d.value),f=parseFloat(l.value);i&&(i.textContent=c.toFixed(1)),e&&(e.textContent=p.toFixed(1)),a&&(a.textContent=f.toFixed(2)),u==="cpp"?r.textContent=`// PID Controller Config
typedef struct {
    float kp = ${c.toFixed(2)}f;
    float ki = ${p.toFixed(2)}f;
    float kd = ${f.toFixed(2)}f;
    float out_max = 100.0f;
} PID_Config_t;

PID_Config_t pid_cfg;`:r.textContent=`# PID Controller Config
pid_config = {
    "kp": ${c.toFixed(2)},
    "ki": ${p.toFixed(2)},
    "kd": ${f.toFixed(2)},
    "out_max": 100.0
}`}n?.addEventListener("click",()=>{u="cpp",n.className="tab tab-active",s&&(s.className="tab"),t()}),s?.addEventListener("click",()=>{u="py",s.className="tab tab-active",n&&(n.className="tab"),t()}),o?.addEventListener("input",t),d?.addEventListener("input",t),l?.addEventListener("input",t),t()}document.addEventListener("astro:page-load",y);
