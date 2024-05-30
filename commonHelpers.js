import{a as b,i as E,s as S}from"./assets/vendor-da73009b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const q="43967749-ce2f7a1bd8d115ad659da346f",v="https://pixabay.com/api/";async function p(t,r=1,s=15){const o={key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s};try{const e=await b.get(v,{params:o});return{hits:e.data.hits,totalHits:e.data.totalHits}}catch(e){throw console.error("Error fetching images:",e),e}}let i;const f=document.getElementById("loader"),h=document.querySelector(".gallery"),y=document.querySelector(".load-more");function L(t,r=!1){const s=t.map(o=>`<li class="gallery-item">
      <a class="gallery-link" href="${o.webformatURL}">
        <img 
          class="gallery-image" 
          width="360"
          src="${o.largeImageURL}" 
          alt="${o.tags}" 
          />
          
      </a>
      <ul class='description'>
      <li><strong>Likes</strong> ${o.likes}</li>
      <li><strong>Views</strong> ${o.views}</li>
      <li><strong>Comments</strong> ${o.comments}</li>
      <li><strong>Downloads</strong> ${o.downloads}</li>
      </ul>
    </li>`).join("");r?h.insertAdjacentHTML("beforeend",s):h.innerHTML=s,H()}function a(t){E.error({title:"Error",message:t})}function w(){f.style.display="block",y.insertAdjacentElement("afterend",f)}function d(){f.style.display="none"}function B(){h.innerHTML=""}function H(){i&&i.destroy(),i=new S(".gallery a",{captionsData:"alt",captionDelay:250})}function I(){i&&i.refresh()}function $(){y.style.display="block"}function g(){y.style.display="none"}function x(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}const A=document.querySelector(".form"),M=document.querySelector(".search-img-input"),P=document.querySelector(".load-more");let c="",l=1,m=0;A.addEventListener("submit",O);P.addEventListener("click",T);async function O(t){if(t.preventDefault(),c=M.value.trim(),l=1,!c){a("Please enter a search term");return}B(),g(),w();try{const{hits:r,totalHits:s}=await p(c,l);d(),m=s,r.length===0?a("Sorry, there are no images matching your search query. Please try again!"):(L(r),r.length<15||r.length>=m?(g(),showEndMessage()):$())}catch(r){d(),a("An error occured while fetching images"),console.error(r)}}async function T(){l+=1,w();try{const{hits:t}=await p(c,l);d(),L(t,!0),I(),x(),(t.length===0||(l-1)*15>=m)&&(g(),a("We're sorry, but you've reached the end of search results."))}catch(t){d(),a("An error occured while fetching more images"),console.error(t)}}
//# sourceMappingURL=commonHelpers.js.map
