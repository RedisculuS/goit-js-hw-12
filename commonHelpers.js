import{i as d,s as h}from"./assets/vendor-5c957d73.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="43967749-ce2f7a1bd8d115ad659da346f",g="https://pixabay.com/api/";function y(n){const o=`${g}?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error(`Error: ${err.message}`);return e.json()}).then(e=>e.hits).catch(e=>(console.log("Fetch error:",e),[]))}let l;const c=document.getElementById("loader"),u=document.querySelector(".gallery");function p(n){const o=n.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.webformatURL}">
        <img 
          class="gallery-image" 
          width="360"
          src="${e.largeImageURL}" 
          alt="${e.tags}" 
          />
          
      </a>
      <ul class='description'>
      <li><strong>Likes</strong> ${e.likes}</li>
      <li><strong>Views</strong> ${e.views}</li>
      <li><strong>Comments</strong> ${e.comments}</li>
      <li><strong>Downloads</strong> ${e.downloads}</li>
      </ul>
    </li>`).join("");u.innerHTML=o}function i(n){d.error({title:"Error",message:n})}function L(){u.innerHTML=""}function b(){c.style.display="block"}function w(){c.style.display="none"}function f(){l=new h(".gallery a",{captionsData:"alt",captionDelay:250})}function $(){l?l.refresh():f()}const E=document.querySelector(".form"),I=document.querySelector(".search-img-input");E.addEventListener("submit",q);function q(n){n.preventDefault();const o=I.value.trim();if(!o){i("Please enter a search term");return}L(),b(),y(o).then(e=>{e.length===0?i("Sorry, there are no images matching your search query. Please try again!"):(p(e),f(),$())}).catch(e=>{i("An error occured while fetching images"),console.error(e)}).finally(()=>{w()})}
//# sourceMappingURL=commonHelpers.js.map
