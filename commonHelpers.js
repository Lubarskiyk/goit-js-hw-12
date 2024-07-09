import{i,a as u,S as m}from"./assets/vendor-tlB36mqp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();i.settings({timeout:2500,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",titleSize:25,messageSize:25,backgroundColor:"rgba(255, 182, 66, 0.8)"});const s={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader")};function g(a){return a.map(e=>`<li class="card">
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
          </li>`).join("")}function c(a){switch(a){case"outdata":i.warning({title:"Error",message:"Введіть данні для пошуку!"});break;case"nodata":i.warning({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});break;default:i.error({title:"Error",message:"Щось пішло не так. Ми працюемо над вирішенням питання!"});break}}u.defaults.baseURL="https://pixabay.com/api";const d={key:"44443472-3b41bcc651e7d0b56b1888f38",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};async function h(a){d.q=a;const e=await u.get("/",{params:d});return console.log(e.data),e.data}s.searchForm.addEventListener("submit",p);function p(a){a.preventDefault();const e=a.target.searchtext.value.trim();if(!e){c("outdata");return}s.gallery.innerHTML="",s.loader.classList.add("loader"),h(e).then(o=>{if(s.loader.classList.remove("loader"),o.totalHits===0){c("nodata");return}s.gallery.insertAdjacentHTML("beforeend",g(o.hits)),f.refresh()}).catch(o=>{s.loader.classList.remove("loader"),c(o)}).finally(s.searchForm.reset())}const f=new m(".gallery a",{captionDelay:250,overlayOpacity:.8,scrollZoom:!1});f.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
