import{a as v,i as m,S as B,b as T,N as R,P as N,A as j,R as V}from"./assets/vendor-Cfl2UIWb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();window.addEventListener("scroll",()=>{const e=document.querySelector(".header");window.scrollY>30?e.classList.add("scrolled"):e.classList.remove("scrolled")});(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll("[data-scroll-to]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",s),e.menuLinks.forEach(r=>{r.addEventListener("click",n)});function t(){e.modal.classList.toggle("is-open")}function s(){e.modal.classList.remove("is-open")}function a(r){const d=document.getElementById(r);d&&d.scrollIntoView({behavior:"smooth",block:"start"})}function n(r){r.preventDefault();const d=r.currentTarget.dataset.scrollTo;s(),setTimeout(()=>{a(d)},300)}e.modal.addEventListener("click",r=>{r.target===e.modal&&s()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&e.modal.classList.contains("is-open")&&s()})})();const M="https://paw-hut.b.goit.study/api";async function z(){try{return(await v.get(`${M}/categories`)).data}catch(e){m.error({message:`Помилка при отриманні категорій  з сервера:' ${e}`})}}async function W(e=null,t=1,s=9){try{const a={page:t,limit:s};return e&&(a.categoryId=e),(await v.get(`${M}/animals`,{params:a})).data}catch(a){m.error({message:`Помилка при отриманні тварин з сервера: ${a}`})}}const i={filtersContainer:document.querySelector(".pets-list-categories"),animalsContainer:document.querySelector(".pets-list-animals"),loadMoreBtn:document.querySelector(".pets-list-load-more-btn"),loader:document.querySelector(".pet-list-loader.loader"),paginationList:document.querySelector(".pagination-list")};function Z(e){const t=["","Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];e.sort((s,a)=>{const n=t.indexOf(s.name),r=t.indexOf(a.name);return n-r}),i.filtersContainer.innerHTML=`
    <li class="filter-item"><button class="filter-btn active" data-id="">Всі</button></li>
    ${e.map(s=>`<li class="filter-item"><button class="filter-btn" data-id="${s._id}">${s.name}</button></li>`).join("")}
      
  `}function G(e,t=!1){t||(i.animalsContainer.innerHTML="");const s=e.map(a=>{const n=a.categories.map(r=>`<li class="animal-card-category">${r.name}</li>`).join("");return`
    <li class="animal-card">
        <img src="${a.image}" alt="${a.name}" class="animal-img" />
        
          <div class="animal-card-content">
          <div class="animal-card-wrapper">
            <div class="animal-card-details">
              <span class="animal-card-species">${a.species} </span>
              <h3 class="animal-card-name">${a.name}</h3>
              <ul class="animal-card-categories">
                ${n}
              </ul>
              <div class="animal-card-info">
                <span>${a.age}</span>
                <span>${a.gender}</span>
              </div>
            </div>
            <p class="animal-card-short-description">
              ${a.shortDescription}
            </p>
        </div>
          <button class="more-btn" data-id="${a._id}">
            Дізнатись більше
          </button>
        </div>
      </li>
  `}).join("");i.animalsContainer.insertAdjacentHTML("beforeend",s)}function J(){if(l<=1){i.paginationList.innerHTML="";return}let e="";if(e+=`
    <li>
      <button class="arrow-button"
        data-action="prev"
        ${o===1?"disabled":""}>
        <svg width="19" height="13">
        <use href="/Lapolis-JS-project/assets/icons-D8Flmos2.svg#icon-left"></use>
      </svg>
      </button>
    </li>`,o===1){for(let t=1;t<=Math.min(3,l);t++)e+=f(t);l>3&&(e+='<li class="empty-space">…</li>',e+=f(l))}else{e+=f(1),o>3&&(e+='<li class="empty-space">…</li>');for(let t=o-1;t<=o+1;t++)t>1&&t<l&&(e+=f(t));o<l-2&&(e+='<li class="empty-space">…</li>'),e+=f(l)}e+=`
    <li>
      <button class="arrow-button"
        data-action="next"
        ${o===l?"disabled":""}>
        <svg width="19" height="13">
        <use href="/Lapolis-JS-project/assets/icons-D8Flmos2.svg#icon-right"></use>
      </svg>
      </button>
    </li>`,i.paginationList.innerHTML=e}function f(e){return`
    <li>
      <button class="page-button ${e===o?"active":""}"
        data-page="${e}">
        ${e}
      </button>
    </li>`}function w(){i.loader.classList.remove("hidden")}function b(){i.loader.classList.add("hidden")}let h=[],I="",o=1,L=9,k=0,l=1;async function K(e){if(!e.target.classList.contains("filter-btn"))return;i.filtersContainer.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),e.target.classList.add("active"),I=e.target.dataset.id,o=1,i.loadMoreBtn.style.display="block",$()?i.loadMoreBtn.style.display="none":i.loadMoreBtn.style.display="block",w();try{await S(!1)}catch(s){m.error({message:`Помилка завантаження тварин ${s}`})}finally{b()}}async function X(){if(!$()){i.loadMoreBtn.style.display="none",w();try{o+=1,await S(!0)?i.loadMoreBtn.style.display="block":i.loadMoreBtn.style.display="none"}catch(e){m.error({message:`Помилка завантаження тварин ${e}`}),i.loadMoreBtn.style.display="block"}finally{b()}}}async function Y(e){const t=e.target.closest("button");if(t){t.dataset.page&&(o=Number(t.dataset.page)),t.dataset.action==="prev"&&o>1&&(o-=1),t.dataset.action==="next"&&o<l&&(o+=1),ee(),w();try{await S(!1)}catch(s){m.error({message:`Помилка завантаження тварин ${s}`})}finally{b()}}}async function S(e=!1){const t=await W(I,o,L);if(!t.animals)return!1;k=t.totalItems,l=Math.ceil(k/L);const s=t.animals;return Q(s,e),$()?(J(),!1):o<l}function Q(e,t=!1){t?h=h.concat(e):h=e,G(e,t)}function E(){window.innerWidth>=1440?(L=9,i.loadMoreBtn.classList.add("hidden"),i.paginationList.classList.remove("hidden")):(L=8,i.loadMoreBtn.classList.remove("hidden"),i.paginationList.classList.add("hidden"))}function $(){return window.innerWidth>=1440}function ee(){const t=i.animalsContainer.getBoundingClientRect().top+window.pageYOffset-110;window.scrollTo({top:t,behavior:"smooth"})}const c=document.querySelector(".order-form"),y=(e,t)=>{const s=c.querySelector(`[data-error-for="${e.name}"]`);s&&(s.textContent=t,s.style.display="block",e.classList.add("is-error"),e.classList.remove("is-valid"))},_=e=>{const t=c.querySelector(`[data-error-for="${e.name}"]`);t&&(t.textContent="",t.style.display="none",e.classList.remove("is-error"),e.classList.add("is-valid"))},D=e=>{const t=/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/,s=e.value.trim();return s.length<2?(y(e,"Імʼя повинно містити мінімум 2 літери"),!1):t.test(s)?(_(e),!0):(y(e,"Імʼя може містити тільки букви"),!1)},H=e=>e.value.replace(/\D/g,"").length!==12?(y(e,"Номер телефону повинен містити 12 цифр"),!1):(_(e),!0),F=e=>e.value.length>500?(y(e,"Коментар не може перевищувати 500 символів"),!1):(_(e),!0);c.name.addEventListener("input",()=>{D(c.name)});c.phone.addEventListener("input",()=>{H(c.phone)});c.comment.addEventListener("input",()=>{F(c.comment)});c.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.dataset.animalId,{name:s,phone:a,comment:n}=e.target.elements;if(!(D(s)&H(a)&F(n)))return;const d=a.value.replace(/\D/g,""),A={name:s.value.trim(),phone:d,animalId:t};n.value.trim()&&(A.comment=n.value.trim());try{await v.post(`${M}/orders`,A),B.fire({title:"Хороша робота!",text:"Заявка відправлена!",icon:"success"}),c.reset(),p.classList.add("hidden"),document.body.classList.remove("no-scroll")}catch{B.fire({title:"Ой ой",text:"Якась помилка — спробуй ще",icon:"error"})}});const p=document.querySelector(".modal-overlay"),C=p.querySelector(".info-modal"),x=p.querySelector(".order-modal");function te(e,t){e.classList.add("hidden"),t.classList.remove("hidden"),document.body.classList.add("no-scroll")}function se(){document.addEventListener("click",e=>{if(e.target.classList.contains("more-btn")){const t=e.target.dataset.id,s=h.find(a=>a._id===t);if(!s)return;c.dataset.animalId=t,C.innerHTML=`
        <button class="close-btn">&times;</button>
        <div class="modal-body">
      <div class="modal-left">
        <img class="modal-animal-img" src="${s.image}" alt="${s.name}"  />
      </div>
      <div class="modal-right">
      <div class="modal-info-head">
        <span class="modal-species">${s.species}</span>
        <h2 class="modal-name">${s.name}</h2>
        <div class="modal-info">
          <span class="modal-age">${s.age}</span>
          <span class="modal-gender">${s.gender}</span>
        </div>
      </div>
        
        <p><strong>Опис:</strong> <span class="modal-description">${s.description}</span></p>
        <p><strong>Здоров'я:</strong> <span class="modal-health">${s.healthStatus}</span></p>
        <p><strong>Поведінка:</strong> <span class="modal-behavior">${s.behavior}</span></p>
        <button class="modal-adopt-btn">Взяти додому</button>
      </div>
    </div>`,p.classList.remove("hidden"),C.classList.remove("hidden"),x.classList.add("hidden"),document.body.classList.add("no-scroll")}if((e.target.classList.contains("close-btn")||e.target.classList.contains("modal-overlay"))&&(p.classList.add("hidden"),document.body.classList.remove("no-scroll")),e.target.closest(".modal-adopt-btn")){te(C,x);return}document.addEventListener("keydown",t=>{t.key==="Escape"&&(p.classList.add("hidden"),document.body.classList.remove("no-scroll"))})})}async function ae(){try{E(),window.addEventListener("resize",()=>{E()}),w();const e=await z();Z(e),i.filtersContainer.addEventListener("click",K),i.loadMoreBtn.addEventListener("click",X),await S()}catch(e){m.error({message:`Помилка завантаження тварин: ${e}`})}finally{b()}}i.paginationList.addEventListener("click",Y);se();ae();const g=new T(".about-swiper",{modules:[R,N],slidesPerView:1,loop:!1,spaceBetween:0,observer:!0,observeParents:!0,navigation:{nextEl:".next-btn",prevEl:".prev-btn"},pagination:{el:".about-controls .swiper-pagination",type:"bullets",clickable:!0,dynamicBullets:window.innerWidth<768,dynamicMainBullets:1}});function ne(){const e=window.innerWidth<768;g.params.pagination.dynamicBullets=e,g.pagination.destroy(),g.pagination.init(),g.pagination.render(),g.pagination.update()}window.addEventListener("resize",()=>{ne()});document.addEventListener("DOMContentLoaded",()=>{new j(".faq-container",{duration:300,collapse:!0,showMultiple:!1})});const re="https://paw-hut.b.goit.study",ie="API/feedbacks",oe=3,le=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='19'%20viewBox='0%200%2020%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.53125%200.806641C9.70323%200.398163%2010.2968%200.398159%2010.4688%200.806641L12.4971%205.625C12.7155%206.14358%2013.2076%206.49471%2013.7676%206.53906L19.0332%206.95605C19.4909%206.99232%2019.6545%207.54121%2019.3242%207.82129L15.3115%2011.2168C14.8819%2011.5804%2014.6919%2012.1542%2014.8242%2012.7021L16.0508%2017.7783C16.1502%2018.1902%2015.6892%2018.5518%2015.291%2018.3115H15.29L10.7832%2015.5918C10.3023%2015.3016%209.6977%2015.3016%209.2168%2015.5918L4.70898%2018.3115C4.31078%2018.5518%203.84983%2018.1902%203.94922%2017.7783L5.17578%2012.7021C5.30809%2012.1543%205.11814%2011.5805%204.68848%2011.2168L0.675781%207.82129C0.345442%207.54122%200.509097%206.99231%200.966797%206.95605L6.23242%206.53906C6.79243%206.49471%207.28456%206.14369%207.50293%205.625L9.53125%200.806641Z'%20fill='url(%23paint0_linear_8242_16265)'%20stroke='%2302060A'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_8242_16265'%20x1='0'%20y1='9.37158'%20x2='20'%20y2='9.37158'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.5'%20stop-color='%2302060A'/%3e%3cstop%20offset='0.5'%20stop-color='%2302060A'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",import.meta.url).href,ce=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='19'%20viewBox='0%200%2020%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.07088%200.612343C9.41462%20-0.204115%2010.5854%20-0.204114%2010.9291%200.612346L12.9579%205.43123C13.1029%205.77543%2013.4306%206.01061%2013.8067%206.0404L19.0727%206.45748C19.9649%206.52814%2020.3267%207.62813%2019.6469%208.2034L15.6348%2011.5987C15.3482%2011.8412%2015.223%2012.2218%2015.3106%2012.5843L16.5363%2017.661C16.744%2018.5211%2015.7969%2019.201%2015.033%2018.7401L10.5245%2016.0196C10.2025%2015.8252%209.7975%2015.8252%209.47548%2016.0196L4.96699%2018.7401C4.20311%2019.201%203.25596%2018.5211%203.46363%2017.661L4.68942%2012.5843C4.77698%2012.2218%204.65182%2011.8412%204.36526%2011.5987L0.353062%208.2034C-0.326718%207.62813%200.0350679%206.52814%200.927291%206.45748L6.19336%206.0404C6.5695%206.01061%206.89716%205.77543%207.04207%205.43123L9.07088%200.612343Z'%20fill='%2302060A'/%3e%3c/svg%3e",import.meta.url).href,de=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='19'%20viewBox='0%200%2020%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.0078%201.00098L12.0361%205.81934C12.328%206.51225%2012.9837%206.97813%2013.7275%207.03711L18.9854%207.45312L14.9893%2010.835H14.9883C14.4157%2011.3197%2014.1618%2012.086%2014.3389%2012.8193L15.5615%2017.8848C15.5599%2017.8857%2015.5589%2017.8872%2015.5576%2017.8877C15.5559%2017.8869%2015.5532%2017.8858%2015.5498%2017.8838L11.041%2015.1631C10.4014%2014.7772%209.59865%2014.7772%208.95898%2015.1631L4.4502%2017.8838C4.44677%2017.8858%204.4441%2017.8869%204.44238%2017.8877C4.44085%2017.8871%204.43936%2017.8859%204.4375%2017.8848L5.66113%2012.8193C5.8271%2012.1321%205.61431%2011.416%205.11523%2010.9297L5.01172%2010.835L1.01367%207.45312L6.27246%207.03711C7.01627%206.97814%207.67205%206.51246%207.96387%205.81934L9.99121%201.00098C9.99362%201.00054%209.99658%201%2010%201C10.003%201%2010.0056%201.00062%2010.0078%201.00098Z'%20stroke='%2302060A'%20stroke-width='2'/%3e%3c/svg%3e",import.meta.url).href,u={section:".success-stories",swiper:"[data-success-swiper]",wrapper:".success-stories__swiper .swiper-wrapper",pagination:".success-stories__pagination",prevBtn:"[data-success-prev]",nextBtn:"[data-success-next]"},ue=v.create({baseURL:re,timeout:1e4});async function pe(){const{data:e}=await ue.get(ie),t=(e==null?void 0:e.feedbacks)??[];return Array.isArray(t)?t:[]}function me(e){let t=e.querySelector(".success-stories__loader");return t||(t=document.createElement("div"),t.className="success-stories__loader is-hidden",t.setAttribute("aria-hidden","true"),t.textContent="Loading...",e.prepend(t)),t}function q(e,t){me(e).classList.toggle("is-hidden",!t);const a=e.querySelector(u.prevBtn),n=e.querySelector(u.nextBtn);a&&(a.disabled=t),n&&(n.disabled=t)}function P(e,t){let s=e.querySelector(".success-stories__error");s||(s=document.createElement("p"),s.className="success-stories__error",e.append(s)),s.textContent=t}function O(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function U(e){const t=Number(e);if(Number.isNaN(t))return 0;const s=Math.max(0,Math.min(5,t));return Math.round(s*2)/2}function fe(e){const t=O((e==null?void 0:e.author)??"Імʼя користувача"),s=O((e==null?void 0:e.description)??""),a=U((e==null?void 0:e.rate)??0);return`
    <div class="swiper-slide">
      <article class="story-card">
        <div class="story-card__rating" data-rating="${a}" aria-label="Рейтинг: ${a} з 5">
          <div class="rating-js"></div>
        </div>

        <p class="story-card__text">${s}</p>
        <p class="story-card__author">${t}</p>
      </article>
    </div>
  `}function ge(e,t){e.innerHTML=t.map(fe).join("")}function he(e){e.querySelectorAll(".story-card__rating").forEach(t=>{const s=U(t.dataset.rating),a=t.querySelector(".rating-js");if(!a)return;a.innerHTML="",new V(a,{score:s,number:5,readOnly:!0,half:!0,starOff:le,starOn:ce,starHalf:de}).init()})}function Le(e){const t=e.querySelector(u.swiper);return t?new T(t,{modules:[R,N],slidesPerView:1,spaceBetween:24,speed:500,navigation:{nextEl:e.querySelector(u.nextBtn),prevEl:e.querySelector(u.prevBtn),disabledClass:"is-disabled"},pagination:{el:e.querySelector(u.pagination),clickable:!0,dynamicBullets:!1},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:32}}}):null}async function ye(){const e=document.querySelector(u.section);if(!e)return;const t=e.querySelector(u.wrapper);if(t){q(e,!0);try{const n=(await pe()).slice(0,5);if(n.length<oe){P(e,"Недостатньо відгуків для відображення секції.");return}if(ge(t,n),!Le(e))return;he(e)}catch(s){console.error("Success stories error:",s),P(e,"Не вдалося завантажити відгуки. Спробуйте пізніше.")}finally{q(e,!1)}}}ye();
//# sourceMappingURL=index.js.map
