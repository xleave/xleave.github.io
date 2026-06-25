import"./AdminLayout.astro_astro_type_script_index_0_lang.Ce0vtiYh.js";import"./ViewTransitions.astro_astro_type_script_index_0_lang.BScVxmeO.js";async function m(){try{const n=window.adminApi;if(!n)return;const{posts:e=[],projects:c=[]}=await n.getPosts();let r=[];try{const t=await n.getSettings("essays");r=(t.rawYaml?u(t.rawYaml):t)?.essay_list||[]}catch(t){console.error("Failed to load essays for dashboard:",t)}const o=e.filter(t=>!t.frontmatter?.draft),s=e.filter(t=>t.frontmatter?.draft);document.getElementById("statTotalPosts").textContent=String(o.length),document.getElementById("statDraftPosts").textContent=String(s.length),document.getElementById("statTotalProjects").textContent=String(c.length),document.getElementById("statTotalEssays").textContent=String(r.length);const d=document.getElementById("recentPostsList");d.innerHTML="",e.length===0?d.innerHTML='<div class="empty-list-info">没有已编辑的博文。</div>':e.slice(0,5).forEach(t=>{const a=document.createElement("div");a.className="recent-item";const l=t.frontmatter?.draft,f=t.frontmatter?.date?t.frontmatter.date.substring(0,10):"未指定",g=`<span class="badge ${l?"badge-draft":"badge-published"}">${l?"草稿":"已发布"}</span>`;a.innerHTML=`
              <div class="item-main">
                <a href="/admin/editor?type=posts&slug=${t.slug}" class="item-title">${t.frontmatter?.title||t.slug}</a>
                <span class="item-meta">/src/content/posts/${t.fileName}</span>
              </div>
              <div class="item-side">
                ${g}
                <span class="item-date">${f}</span>
              </div>
            `,d.appendChild(a)});const i=document.getElementById("draftsList");i.innerHTML="",s.length===0?i.innerHTML='<div class="empty-list-info">草稿箱空空如也，暂无需要完成的创作。</div>':s.slice(0,5).forEach(t=>{const a=document.createElement("div");a.className="recent-item";const l=t.frontmatter?.date?t.frontmatter.date.substring(0,10):"未指定";a.innerHTML=`
              <div class="item-main">
                <a href="/admin/editor?type=posts&slug=${t.slug}" class="item-title">${t.frontmatter?.title||t.slug}</a>
                <span class="item-meta">待续...</span>
              </div>
              <div class="item-side">
                <span class="item-date">${l}</span>
                <a href="/admin/editor?type=posts&slug=${t.slug}" class="btn-edit">继续编辑 →</a>
              </div>
            `,i.appendChild(a)})}catch(n){console.error("Failed to load dashboard:",n),window.showToast?.("加载控制台数据失败！","error")}}function u(n){try{const e={},c=n.split(`
`);let r="",o=null;return c.forEach(s=>{s.trim().startsWith("-")&&s.indexOf("essay_list:")<0&&r==="essay_list"&&(e.essay_list||(e.essay_list=[]),o={},e.essay_list.push(o));const i=s.indexOf(":");if(i>0){const t=s.slice(0,i).trim(),a=s.slice(i+1).trim().replace(/^['"]|['"]$/g,"");t==="essay_list"?r="essay_list":s.startsWith("  ")&&o?o[t]=a:s.startsWith("  ")||(e[t]=a,r="")}}),e}catch{return{}}}document.addEventListener("astro:page-load",m);m();
