import"./AdminLayout.astro_astro_type_script_index_0_lang.DN-PMDQc.js";import"./ViewTransitions.astro_astro_type_script_index_0_lang.BScVxmeO.js";let m=[],f=null;async function I(){if(document.getElementById("postsList"))try{const s=window.adminApi;if(!s)return;const{posts:a=[],projects:r=[]}=await s.getPosts();if(!document.getElementById("postsList"))return;m=[...a.map(e=>({...e,type:"posts"})),...r.map(e=>({...e,type:"projects"}))],m.sort((e,i)=>{const t=e.frontmatter.date?new Date(e.frontmatter.date).getTime():0;return(i.frontmatter.date?new Date(i.frontmatter.date).getTime():0)-t}),y();const d=document.getElementById("searchInput"),c=document.getElementById("typeFilter"),o=document.getElementById("statusFilter");d&&d.addEventListener("input",y),c&&c.addEventListener("change",y),o&&o.addEventListener("change",y)}catch(s){console.error("Failed to load items:",s);const a=document.getElementById("postsList");a&&(a.innerHTML='<div class="error-info">获取文件列表失败，请检查网络或授权令牌！</div>')}}function y(){const n=document.getElementById("postsList"),s=document.getElementById("emptyStateContainer");if(!n||!s)return;const a=document.getElementById("searchInput"),r=document.getElementById("typeFilter"),d=document.getElementById("statusFilter");if(!a||!r||!d)return;const c=a.value.toLowerCase(),o=r.value,e=d.value,i=m.filter(t=>{const p=(t.frontmatter?.title||"").toLowerCase(),h=(t.slug||"").toLowerCase(),l=(t.body||"").toLowerCase(),w=p.includes(c)||h.includes(c)||l.includes(c),E=o==="all"||t.type===o,u=t.frontmatter?.draft===!0||t.frontmatter?.draft==="true";let g=!0;return e==="published"?g=!u:e==="draft"&&(g=u),w&&E&&g});if(n.innerHTML="",i.length===0){n.style.display="none",s.style.display="block";return}n.style.display="grid",s.style.display="none",i.forEach(t=>{const p=t.frontmatter?.draft===!0||t.frontmatter?.draft==="true",h=t.frontmatter?.date?t.frontmatter.date.substring(0,16):"未设定",l=document.createElement("div");l.className="post-card-item";const E=(Array.isArray(t.frontmatter?.tags)?t.frontmatter.tags:[]).map(b=>`<span class="item-tag">${b}</span>`).join(""),u=Array.isArray(t.frontmatter?.categories)?t.frontmatter.categories[0]:t.frontmatter?.categories||"",g=u?`<span class="item-category">分类: ${u}</span>`:"";l.innerHTML=`
          <div class="card-inner">
            <div class="card-meta-top">
              <span class="type-badge ${t.type==="projects"?"type-project":"type-post"}">
                ${t.type==="projects"?"项目":"博文"}
              </span>
              <span class="badge ${p?"badge-draft":"badge-published"}">
                ${p?"草稿":"已发布"}
              </span>
            </div>
            
            <h3 class="card-title">${t.frontmatter?.title||t.slug}</h3>
            <p class="card-slug">别名 Slug: <code>${t.slug}</code></p>
            
            <div class="card-meta-bottom">
              ${g}
              <span class="card-date">更新时间: ${h}</span>
            </div>
            
            <div class="card-tags-list">
              ${E}
            </div>
            
            <div class="card-actions">
              <a href="/admin/editor?type=${t.type}&slug=${t.slug}" class="action-btn btn-edit">编辑</a>
              <a href="/${t.type==="projects"?"projects":"posts"}/${t.slug}" target="_blank" class="action-btn btn-preview">预览</a>
              <button class="action-btn btn-delete" data-slug="${t.slug}" data-type="${t.type}" data-sha="${t.sha||""}">删除</button>
            </div>
          </div>
        `,l.querySelector(".btn-delete").addEventListener("click",b=>{const v=b.currentTarget,B=v.getAttribute("data-slug"),$=v.getAttribute("data-type"),C=v.getAttribute("data-sha");f={type:$,slug:B,sha:C,cardElement:l},document.getElementById("deleteConfirmDialog").showModal()}),n.appendChild(l)})}function L(){const n=document.getElementById("deleteConfirmDialog-confirm-btn"),s=document.getElementById("deleteConfirmDialog");n&&n.addEventListener("click",async()=>{if(!f)return;const{type:a,slug:r,sha:d,cardElement:c}=f;try{const o=window.adminApi;s.close(),window.showToast?.(`正在删除 ${r}...`,"success"),await o.deletePost(a,r,d),m=m.filter(e=>!(e.type===a&&e.slug===r)),c.remove(),window.showToast?.("删除成功！","success"),y()}catch(o){console.error("Delete failed:",o),window.showToast?.("删除失败，请检查操作权限！","error")}f=null})}document.addEventListener("astro:page-load",()=>{document.getElementById("postsList")&&(I(),L())});document.getElementById("postsList")&&(I(),L());
