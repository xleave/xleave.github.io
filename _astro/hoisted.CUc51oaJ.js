import"./AdminLayout.astro_astro_type_script_index_0_lang.Ce0vtiYh.js";import"./ViewTransitions.astro_astro_type_script_index_0_lang.BScVxmeO.js";let u=[],g=null;async function v(){const a=document.getElementById("postsList");document.getElementById("emptyStateContainer");try{const s=window.adminApi;if(!s)return;const{posts:n=[],projects:o=[]}=await s.getPosts();u=[...n.map(e=>({...e,type:"posts"})),...o.map(e=>({...e,type:"projects"}))],u.sort((e,d)=>{const t=e.frontmatter.date?new Date(e.frontmatter.date).getTime():0;return(d.frontmatter.date?new Date(d.frontmatter.date).getTime():0)-t}),p(),document.getElementById("searchInput").addEventListener("input",p),document.getElementById("typeFilter").addEventListener("change",p),document.getElementById("statusFilter").addEventListener("change",p)}catch(s){console.error("Failed to load items:",s),a.innerHTML='<div class="error-info">获取文件列表失败，请检查网络或授权令牌！</div>'}}function p(){const a=document.getElementById("postsList"),s=document.getElementById("emptyStateContainer"),n=document.getElementById("searchInput").value.toLowerCase(),o=document.getElementById("typeFilter").value,e=document.getElementById("statusFilter").value,d=u.filter(t=>{const r=(t.frontmatter?.title||"").toLowerCase(),y=(t.slug||"").toLowerCase(),c=(t.body||"").toLowerCase(),b=r.includes(n)||y.includes(n)||c.includes(n),m=o==="all"||t.type===o,l=t.frontmatter?.draft===!0||t.frontmatter?.draft==="true";let i=!0;return e==="published"?i=!l:e==="draft"&&(i=l),b&&m&&i});if(a.innerHTML="",d.length===0){a.style.display="none",s.style.display="block";return}a.style.display="grid",s.style.display="none",d.forEach(t=>{const r=t.frontmatter?.draft===!0||t.frontmatter?.draft==="true",y=t.frontmatter?.date?t.frontmatter.date.substring(0,16):"未设定",c=document.createElement("div");c.className="post-card-item";const m=(Array.isArray(t.frontmatter?.tags)?t.frontmatter.tags:[]).map(f=>`<span class="item-tag">${f}</span>`).join(""),l=Array.isArray(t.frontmatter?.categories)?t.frontmatter.categories[0]:t.frontmatter?.categories||"",i=l?`<span class="item-category">分类: ${l}</span>`:"";c.innerHTML=`
          <div class="card-inner">
            <div class="card-meta-top">
              <span class="type-badge ${t.type==="projects"?"type-project":"type-post"}">
                ${t.type==="projects"?"项目":"博文"}
              </span>
              <span class="badge ${r?"badge-draft":"badge-published"}">
                ${r?"草稿":"已发布"}
              </span>
            </div>
            
            <h3 class="card-title">${t.frontmatter?.title||t.slug}</h3>
            <p class="card-slug">别名 Slug: <code>${t.slug}</code></p>
            
            <div class="card-meta-bottom">
              ${i}
              <span class="card-date">更新时间: ${y}</span>
            </div>
            
            <div class="card-tags-list">
              ${m}
            </div>
            
            <div class="card-actions">
              <a href="/admin/editor?type=${t.type}&slug=${t.slug}" class="action-btn btn-edit">编辑</a>
              <a href="/${t.type==="projects"?"projects":"posts"}/${t.slug}" target="_blank" class="action-btn btn-preview">预览</a>
              <button class="action-btn btn-delete" data-slug="${t.slug}" data-type="${t.type}" data-sha="${t.sha||""}">删除</button>
            </div>
          </div>
        `,c.querySelector(".btn-delete").addEventListener("click",f=>{const h=f.currentTarget,E=h.getAttribute("data-slug"),$=h.getAttribute("data-type"),I=h.getAttribute("data-sha");g={type:$,slug:E,sha:I,cardElement:c},document.getElementById("deleteConfirmDialog").showModal()}),a.appendChild(c)})}function w(){const a=document.getElementById("deleteConfirmDialog-confirm-btn"),s=document.getElementById("deleteConfirmDialog");a&&a.addEventListener("click",async()=>{if(!g)return;const{type:n,slug:o,sha:e,cardElement:d}=g;try{const t=window.adminApi;s.close(),window.showToast?.(`正在删除 ${o}...`,"success"),await t.deletePost(n,o,e),u=u.filter(r=>!(r.type===n&&r.slug===o)),d.remove(),window.showToast?.("删除成功！","success"),p()}catch(t){console.error("Delete failed:",t),window.showToast?.("删除失败，请检查操作权限！","error")}g=null})}document.addEventListener("astro:page-load",()=>{v(),w()});v();w();
