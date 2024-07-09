import{i,a as g,S as y}from"./assets/vendor-tlB36mqp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();i.settings({timeout:2500,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",titleSize:25,messageSize:25,backgroundColor:"rgba(255, 182, 66, 0.8)"});const a={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadmore:document.querySelector(".loadmore-button")};function p(r){return r.map(e=>`<li class="card">
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
          </li>`).join("")}function c(r){switch(r){case"outdata":i.warning({title:"Error",message:"Введіть данні для пошуку!"});break;case"nodata":i.warning({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});break;default:i.error({title:"Error",message:"Щось пішло не так. Ми працюемо над вирішенням питання!"});break}}g.defaults.baseURL="https://pixabay.com/api";const l={key:"44443472-3b41bcc651e7d0b56b1888f38",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1};async function h(){const r=await g.get("/",{params:l});return console.log(r.data),r.data}a.searchForm.addEventListener("submit",b);let n=1,u=1;function b(r){r.preventDefault();const e=r.target.searchtext.value.trim();if(!e){c("outdata");return}l.q=e,l.page=n,a.gallery.innerHTML="",a.loader.classList.add("loader"),h().then(o=>{if(a.loader.classList.remove("loader"),u=Math.ceil(o.totalHits/l.per_page),u===0){c("nodata");return}a.gallery.insertAdjacentHTML("beforeend",p(o.hits)),m.refresh(),u>n&&L()}).catch(o=>{a.loadmore.classList.remove("loader"),c(o)}).finally(a.searchForm.reset())}function L(){a.loadmore.addEventListener("click",()=>{a.loader.classList.add("loader"),n+=1,l.page=n,h().then(r=>{a.loader.classList.remove("loader"),a.gallery.insertAdjacentHTML("beforeend",p(r.hits)),m.refresh()}).catch(r=>{a.loadmore.classList.remove("loader"),c(r)}).finally(a.searchForm.reset())})}const m=new y(".gallery a",{captionDelay:250,overlayOpacity:.8,scrollZoom:!1});m.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
