import{a as m,S as g,i as n}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="48875390-cd749f18f58e0c0fd72bc8c02",f="https://pixabay.com/api/";async function p(o){try{return(await m.get(f,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}function h(o){return o.map(({webformatURL:t,largeImageURL:s,tags:i,likes:e,views:r,comments:a,downloads:u})=>`
      <a class="gallery-item" href="${s}">
        <img src="${t}" alt="${i}" loading="lazy" />
        <div class="info">
          <p><b>Likes</b> ${e}</p>
          <p><b>Views</b> ${r}</p>
          <p><b>Comments</b> ${a}</p>
          <p><b>Downloads</b> ${u}</p>
        </div>
      </a>
    `).join("")}const y=document.querySelector("#search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new g(".gallery a",{captionsData:"alt",captionDelay:250});y.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){n.warning({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",timeout:5e3,backgroundColor:"red",messageColor:"white",progressBar:!1,maxWidth:432,balloon:!0,close:!0,messageLineHeight:"1.4em"});return}c.innerHTML="",l.classList.add("show");try{const s=await p(t);if(s.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",timeout:5e3,backgroundColor:"red",messageColor:"white",progressBar:!1,maxWidth:432,balloon:!0,close:!0,messageLineHeight:"1.4em"});return}c.innerHTML=h(s),b.refresh()}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{l.classList.remove("show")}});
//# sourceMappingURL=index.js.map
