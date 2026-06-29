import"./AdminLayout.astro_astro_type_script_index_0_lang.JqnWi_5r.js";import"./ViewTransitions.astro_astro_type_script_index_0_lang.BScVxmeO.js";async function y(){try{const n=window.adminApi;if(!n)return;const{posts:e=[],projects:g=[]}=await n.getPosts();if(!document.getElementById("statTotalPosts"))return;let i=[];try{const t=await n.getSettings("essays");if(!document.getElementById("statTotalPosts"))return;i=(t.rawYaml?E(t.rawYaml):t)?.essay_list||[]}catch(t){console.error("Failed to load essays for dashboard:",t)}if(!document.getElementById("statTotalPosts"))return;const o=e.filter(t=>!t.frontmatter?.draft),s=e.filter(t=>t.frontmatter?.draft),u=document.getElementById("statTotalPosts"),r=document.getElementById("statDraftPosts"),l=document.getElementById("statTotalProjects"),d=document.getElementById("statTotalEssays");u&&(u.textContent=String(o.length)),r&&(r.textContent=String(s.length)),l&&(l.textContent=String(g.length)),d&&(d.textContent=String(i.length));const c=document.getElementById("recentPostsList");c&&(c.innerHTML="",e.length===0?c.innerHTML='<div class="empty-list-info">没有已编辑的博文。</div>':e.slice(0,5).forEach(t=>{const a=document.createElement("div");a.className="recent-item";const f=t.frontmatter?.draft,h=t.frontmatter?.date?t.frontmatter.date.substring(0,10):"未指定",p=`<span class="badge ${f?"badge-draft":"badge-published"}">${f?"草稿":"已发布"}</span>`;a.innerHTML=`
                <div class="item-main">
                  <a href="/admin/editor?type=posts&slug=${t.slug}" class="item-title">${t.frontmatter?.title||t.slug}</a>
                  <span class="item-meta">/src/content/posts/${t.fileName}</span>
                </div>
                <div class="item-side">
                  ${p}
                  <span class="item-date">${h}</span>
                </div>
              `,c.appendChild(a)}));const m=document.getElementById("draftsList");m&&(m.innerHTML="",s.length===0?m.innerHTML='<div class="empty-list-info">草稿箱空空如也，暂无需要完成的创作。</div>':s.slice(0,5).forEach(t=>{const a=document.createElement("div");a.className="recent-item";const f=t.frontmatter?.date?t.frontmatter.date.substring(0,10):"未指定";a.innerHTML=`
                <div class="item-main">
                  <a href="/admin/editor?type=posts&slug=${t.slug}" class="item-title">${t.frontmatter?.title||t.slug}</a>
                  <span class="item-meta">待续...</span>
                </div>
                <div class="item-side">
                  <span class="item-date">${f}</span>
                  <a href="/admin/editor?type=posts&slug=${t.slug}" class="btn-edit">继续编辑 →</a>
                </div>
              `,m.appendChild(a)}))}catch(n){console.error("Failed to load dashboard:",n),document.getElementById("statTotalPosts")&&window.showToast?.("加载控制台数据失败！","error")}}function E(n){try{const e={},g=n.split(`
`);let i="",o=null;return g.forEach(s=>{s.trim().startsWith("-")&&s.indexOf("essay_list:")<0&&i==="essay_list"&&(e.essay_list||(e.essay_list=[]),o={},e.essay_list.push(o));const r=s.indexOf(":");if(r>0){const l=s.slice(0,r).trim(),d=s.slice(r+1).trim().replace(/^['"]|['"]$/g,"");l==="essay_list"?i="essay_list":s.startsWith("  ")&&o?o[l]=d:s.startsWith("  ")||(e[l]=d,i="")}}),e}catch{return{}}}document.addEventListener("astro:page-load",()=>{document.getElementById("statTotalPosts")&&y()});document.getElementById("statTotalPosts")&&y();
