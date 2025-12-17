import{a as w,i as u,S,A as x}from"./assets/vendor-CUVKyrIO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();window.addEventListener("scroll",()=>{const e=document.querySelector(".header");window.scrollY>30?e.classList.add("scrolled"):e.classList.remove("scrolled")});(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll("[data-scroll-to]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",a),e.menuLinks.forEach(s=>{s.addEventListener("click",o)});function t(){e.modal.classList.toggle("is-open")}function a(){e.modal.classList.remove("is-open")}function n(s){const d=document.getElementById(s);d&&d.scrollIntoView({behavior:"smooth",block:"start"})}function o(s){s.preventDefault();const d=s.currentTarget.dataset.scrollTo;a(),setTimeout(()=>{n(d)},300)}e.modal.addEventListener("click",s=>{s.target===e.modal&&a()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&e.modal.classList.contains("is-open")&&a()})})();const M="https://paw-hut.b.goit.study/api";async function I(){try{return(await w.get(`${M}/categories`)).data}catch(e){u.error({message:`Помилка при отриманні категорій  з сервера:' ${e}`})}}async function D(e=null,t=1,a=9){try{const n={page:t,limit:a};return e&&(n.categoryId=e),(await w.get(`${M}/animals`,{params:n})).data}catch(n){u.error({message:`Помилка при отриманні тварин з сервера: ${n}`})}}const i={filtersContainer:document.querySelector(".pets-list-categories"),animalsContainer:document.querySelector(".pets-list-animals"),loadMoreBtn:document.querySelector(".pets-list-load-more-btn"),loader:document.querySelector(".pet-list-loader.loader"),paginationList:document.querySelector(".pagination-list")};function H(e){const t=["","Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];e.sort((a,n)=>{const o=t.indexOf(a.name),s=t.indexOf(n.name);return o-s}),i.filtersContainer.innerHTML=`
    <li class="filter-item"><button class="filter-btn active" data-id="">Всі</button></li>
    ${e.map(a=>`<li class="filter-item"><button class="filter-btn" data-id="${a._id}">${a.name}</button></li>`).join("")}
      
  `}function N(e,t=!1){t||(i.animalsContainer.innerHTML="");const a=e.map(n=>{const o=n.categories.map(s=>`<li class="animal-card-category">${s.name}</li>`).join("");return`
    <li class="animal-card">
        <img src="${n.image}" alt="${n.name}" class="animal-img" />
        
          <div class="animal-card-content">
          <div class="animal-card-wrapper">
            <div class="animal-card-details">
              <span class="animal-card-species">${n.species} </span>
              <h3 class="animal-card-name">${n.name}</h3>
              <ul class="animal-card-categories">
                ${o}
              </ul>
              <div class="animal-card-info">
                <span>${n.age}</span>
                <span>${n.gender}</span>
              </div>
            </div>
            <p class="animal-card-short-description">
              ${n.shortDescription}
            </p>
        </div>
          <button class="more-btn" data-id="${n._id}">
            Дізнатись більше
          </button>
        </div>
      </li>
  `}).join("");i.animalsContainer.insertAdjacentHTML("beforeend",a)}function j(){if(l<=1){i.paginationList.innerHTML="";return}let e="";if(e+=`
    <li>
      <button class="arrow-button"
        data-action="prev"
        ${r===1?"disabled":""}>
        <svg width="19" height="13">
        <use href="./img/icons.svg#icon-left"></use>
      </svg>
      </button>
    </li>`,r===1){for(let t=1;t<=Math.min(3,l);t++)e+=f(t);l>3&&(e+='<li class="empty-space">…</li>',e+=f(l))}else{e+=f(1),r>3&&(e+='<li class="empty-space">…</li>');for(let t=r-1;t<=r+1;t++)t>1&&t<l&&(e+=f(t));r<l-2&&(e+='<li class="empty-space">…</li>'),e+=f(l)}e+=`
    <li>
      <button class="arrow-button"
        data-action="next"
        ${r===l?"disabled":""}>
        <svg width="19" height="13">
        <use href="./img/icons.svg#icon-right"></use>
      </svg>
      </button>
    </li>`,i.paginationList.innerHTML=e}function f(e){return`
    <li>
      <button class="page-button ${e===r?"active":""}"
        data-page="${e}">
        ${e}
      </button>
    </li>`}function y(){i.loader.classList.remove("hidden")}function v(){i.loader.classList.add("hidden")}let p=[],A="",r=1,g=9,q=0,l=1;async function z(e){if(!e.target.classList.contains("filter-btn"))return;i.filtersContainer.querySelectorAll(".filter-btn").forEach(a=>a.classList.remove("active")),e.target.classList.add("active"),A=e.target.dataset.id,r=1,i.loadMoreBtn.style.display="block",$()?i.loadMoreBtn.style.display="none":i.loadMoreBtn.style.display="block",y();try{await L(!1)}catch(a){u.error({message:`Помилка завантаження тварин ${a}`})}finally{v()}}async function R(){if(!$()){i.loadMoreBtn.style.display="none",y();try{r+=1,await L(!0)?i.loadMoreBtn.style.display="block":i.loadMoreBtn.style.display="none"}catch(e){u.error({message:`Помилка завантаження тварин ${e}`}),i.loadMoreBtn.style.display="block"}finally{v()}}}async function F(e){const t=e.target.closest("button");if(t){t.dataset.page&&(r=Number(t.dataset.page)),t.dataset.action==="prev"&&r>1&&(r-=1),t.dataset.action==="next"&&r<l&&(r+=1),_(),y();try{await L(!1)}catch(a){u.error({message:`Помилка завантаження тварин ${a}`})}finally{v()}}}async function L(e=!1){const t=await D(A,r,g);if(!t.animals)return!1;q=t.totalItems,l=Math.ceil(q/g);const a=t.animals;return V(a,e),$()?(j(),!1):r<l}function V(e,t=!1){t?p=p.concat(e):p=e,N(e,t)}function B(){window.innerWidth>=1440?(g=9,i.loadMoreBtn.classList.add("hidden"),i.paginationList.classList.remove("hidden")):(g=8,i.loadMoreBtn.classList.remove("hidden"),i.paginationList.classList.add("hidden"))}function $(){return window.innerWidth>=1440}function _(){const t=i.animalsContainer.getBoundingClientRect().top+window.pageYOffset-110;window.scrollTo({top:t,behavior:"smooth"})}const c=document.querySelector(".order-form"),h=(e,t)=>{const a=c.querySelector(`[data-error-for="${e.name}"]`);a&&(a.textContent=t,a.style.display="block",e.classList.add("is-error"),e.classList.remove("is-valid"))},E=e=>{const t=c.querySelector(`[data-error-for="${e.name}"]`);t&&(t.textContent="",t.style.display="none",e.classList.remove("is-error"),e.classList.add("is-valid"))},P=e=>{const t=/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/,a=e.value.trim();return a.length<2?(h(e,"Імʼя повинно містити мінімум 2 літери"),!1):t.test(a)?(E(e),!0):(h(e,"Імʼя може містити тільки букви"),!1)},T=e=>e.value.replace(/\D/g,"").length!==12?(h(e,"Номер телефону повинен містити 12 цифр"),!1):(E(e),!0),O=e=>e.value.length>500?(h(e,"Коментар не може перевищувати 500 символів"),!1):(E(e),!0);c.name.addEventListener("input",()=>{P(c.name)});c.phone.addEventListener("input",()=>{T(c.phone)});c.comment.addEventListener("input",()=>{O(c.comment)});c.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.dataset.animalId,{name:a,phone:n,comment:o}=e.target.elements;if(!(P(a)&T(n)&O(o)))return;const d=n.value.replace(/\D/g,""),k={name:a.value.trim(),phone:d,animalId:t};o.value.trim()&&(k.comment=o.value.trim());try{await w.post(`${M}/orders`,k),S.fire({title:"Хороша робота!",text:"Заявка відправлена!",icon:"success"}),c.reset(),m.classList.add("hidden"),document.body.classList.remove("no-scroll")}catch{S.fire({title:"Ой ой",text:"Якась помилка — спробуй ще",icon:"error"})}});const m=document.querySelector(".modal-overlay"),b=m.querySelector(".info-modal"),C=m.querySelector(".order-modal");function W(e,t){e.classList.add("hidden"),t.classList.remove("hidden"),document.body.classList.add("no-scroll")}function Y(){document.addEventListener("click",e=>{if(e.target.classList.contains("more-btn")){const t=e.target.dataset.id,a=p.find(n=>n._id===t);if(!a)return;c.dataset.animalId=t,b.innerHTML=`
        <button class="close-btn">&times;</button>
        <div class="modal-body">
      <div class="modal-left">
        <img class="modal-animal-img" src="${a.image}" alt="${a.name}"  />
      </div>
      <div class="modal-right">
      <div class="modal-info-head">
        <span class="modal-species">${a.species}</span>
        <h2 class="modal-name">${a.name}</h2>
        <div class="modal-info">
          <span class="modal-age">${a.age}</span>
          <span class="modal-gender">${a.gender}</span>
        </div>
      </div>
        
        <p><strong>Опис:</strong> <span class="modal-description">${a.description}</span></p>
        <p><strong>Здоров'я:</strong> <span class="modal-health">${a.healthStatus}</span></p>
        <p><strong>Поведінка:</strong> <span class="modal-behavior">${a.behavior}</span></p>
        <button class="modal-adopt-btn">Взяти додому</button>
      </div>
    </div>`,m.classList.remove("hidden"),b.classList.remove("hidden"),C.classList.add("hidden"),document.body.classList.add("no-scroll")}if((e.target.classList.contains("close-btn")||e.target.classList.contains("modal-overlay"))&&(m.classList.add("hidden"),document.body.classList.remove("no-scroll")),e.target.closest(".modal-adopt-btn")){W(b,C);return}document.addEventListener("keydown",t=>{t.key==="Escape"&&(m.classList.add("hidden"),document.body.classList.remove("no-scroll"))})})}async function K(){try{B(),window.addEventListener("resize",()=>{B()}),y();const e=await I();H(e),i.filtersContainer.addEventListener("click",z),i.loadMoreBtn.addEventListener("click",R),await L()}catch(e){u.error({message:`Помилка завантаження тварин: ${e}`})}finally{v()}}i.paginationList.addEventListener("click",F);Y();K();document.addEventListener("DOMContentLoaded",()=>{new x(".faq-container",{duration:300,collapse:!0,showMultiple:!1})});
//# sourceMappingURL=index.js.map
