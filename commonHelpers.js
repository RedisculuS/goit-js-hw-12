import{a as w,i as b,s as E}from"./assets/vendor-da73009b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const q="43967749-ce2f7a1bd8d115ad659da346f",S="https://pixabay.com/api/";async function y(n,r=1,s=15){const t={key:q,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s};try{return(await w.get(S,{params:t})).data.hits}catch(e){throw console.error("Error fetching images:",e),e}}let a;const f=document.getElementById("loader"),m=document.querySelector(".gallery"),g=document.querySelector(".load-more");function h(n,r=!1){const s=n.map(t=>`<li class="gallery-item">
      <a class="gallery-link" href="${t.webformatURL}">
        <img 
          class="gallery-image" 
          width="360"
          src="${t.largeImageURL}" 
          alt="${t.tags}" 
          />
          
      </a>
      <ul class='description'>
      <li><strong>Likes</strong> ${t.likes}</li>
      <li><strong>Views</strong> ${t.views}</li>
      <li><strong>Comments</strong> ${t.comments}</li>
      <li><strong>Downloads</strong> ${t.downloads}</li>
      </ul>
    </li>`).join("");r?m.insertAdjacentHTML("beforeend",s):m.innerHTML=s,$()}function i(n){b.error({title:"Error",message:n})}function p(){f.style.display="block",g.insertAdjacentElement("afterend",f)}function c(){f.style.display="none"}function v(){m.innerHTML=""}function $(){a&&a.destroy(),a=new E(".gallery a",{captionsData:"alt",captionDelay:250})}function A(){a&&a.refresh()}function I(){g.style.display="block"}function L(){g.style.display="none"}const P=document.querySelector(".form"),x=document.querySelector(".search-img-input"),B=document.querySelector(".load-more");let l="",d=1;P.addEventListener("submit",M);B.addEventListener("click",O);async function M(n){if(n.preventDefault(),l=x.value.trim(),d=1,!l){i("Please enter a search term");return}v(),L(),p();try{const r=await y(l,d);c(),r.length===0?i("Sorry, there are no images matching your search query. Please try again!"):(h(r),I())}catch(r){c(),i("An error occured while fetching images"),console.error(r)}}async function O(n){d+=1,p();try{const r=await y(l,d);c(),r.length===0?(i("No more images found"),L()):(h(r,!0),A())}catch(r){c(),i("An error occured while fetching more images"),console.error(r)}}
//# sourceMappingURL=commonHelpers.js.map
