import{i as n,a as p,S as y}from"./assets/vendor-tlB36mqp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&g(u)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function g(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();n.settings({timeout:2500,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",titleSize:25,messageSize:25,backgroundColor:"rgba(255, 182, 66, 0.8)"});const r={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadmore:document.querySelector(".loadmore-button")};function h(a){return a.map(e=>`<li class="card">
            <a href="${e.largeImageURL}" class="big gallery-link">
              <img
                src="${e.previewURL}"
                alt="${e.tags}"
                title="${e.tags}"
                class="card-img"
            /></a>
            <ul class="card-title">
              <li class="card-text-blok">
                <h2 class="card-title-text">Likes</h2>
                <p class="card-text-value">${e.likes}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Views</h2>
                <p class="card-text-value">${e.views}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Comments</h2>
                <p class="card-text-value">${e.comments}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Downloads</h2>
                <p class="card-text-value">${e.downloads}</p>
              </li>
            </ul>
          </li>`).join("")}function d(a){switch(a){case"outdata":n.warning({title:"Error",message:"Введіть данні для пошуку!"});break;case"nodata":n.warning({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});break;default:console.log(a),n.error({title:"Error",message:"Щось пішло не так. Ми працюемо над вирішенням питання!"});break}}p.defaults.baseURL="https://pixabay.com/api";const c={key:"44443472-3b41bcc651e7d0b56b1888f38",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1};async function f(){return(await p.get("/",{params:c})).data}r.searchForm.addEventListener("submit",b);let s,i;function b(a){a.preventDefault(),s=1,i=1;const e=a.target.searchtext.value.trim();if(!e){d("outdata");return}c.q=e,c.page=s,r.gallery.innerHTML="",r.loader.classList.add("loader"),f().then(l=>{if(r.loader.classList.remove("loader"),i=Math.ceil(l.totalHits/c.per_page),i===0){d("nodata");return}r.gallery.insertAdjacentHTML("beforeend",h(l.hits)),m.refresh(),i>s&&(s+=1,r.loadmore.style.setProperty("--lmb-dispay","block"),L())}).catch(l=>{r.loadmore.classList.remove("loader"),d(l)}).finally(r.searchForm.reset())}function L(){r.loadmore.addEventListener("click",()=>{if(r.loader.classList.add("loader"),c.page=s,f().then(a=>{r.loader.classList.remove("loader"),r.gallery.insertAdjacentHTML("beforeend",h(a.hits)),m.refresh();const e=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({left:0,top:Math.ceil(e*2),behavior:"smooth"})}).catch(a=>{r.loadmore.classList.remove("loader"),d(a)}),i===s){r.loadmore.style.setProperty("--lmb-dispay","none");return}else s+=1})}const m=new y(".gallery a",{captionDelay:250,overlayOpacity:.8,scrollZoom:!1});m.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
