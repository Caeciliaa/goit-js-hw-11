import{S as d,i as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery");function p(i){return i.map(({largeImageURL:r,webformatURL:o,tags:s,likes:e,views:t,comments:n,downloads:h})=>`<li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img
          class="gallery-image"
          src="${o}"
          alt="${s}"
          width="340"
          height="200"
        />
      </a>
      <ul class="inform-container"> +
        <li class="inform-item">
          <h3 class="inform-title">Likes</h3>
          <p>${e}</p>
        </li>
        <li class="inform-item">
          <h3 class="inform-title">Views</h3>
          <p>${t}</p>
        </li>
        <li class="inform-item">
          <h3 class="inform-title">Comments</h3>
          <p>${n}</p>
        </li>
        <li class="inform-item">
          <h3 class="inform-title">Downloads</h3>
          <p>${h}</p>
        </li>
      </ul>
    </li>`).join("")}function c(i){return m.error({message:i||"Sorry, an error occurred. Try again!",backgroundColor:"#ef4040",maxWidth:432,timeout:3e3,messageColor:"#fafafb",messageSize:"16",theme:"dark",progressBarColor:"#b51b1b",position:"topRight"})}const f=new d(".gallery a",{captionsData:"alt",captionDelay:250,scrollZoom:!1});f.on("show.simplelightbox",function(){});const g="44899470-dc00d504e23887fc09aa8b920";function y(i){const r=`https://pixabay.com/api/?key=${g}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}m.settings({timeout:2500,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",titleSize:"16px",titleColor:"#fff",titleLineHeight:"1.5",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"rgba(255, 182, 66, 0.8)"});const L=document.querySelector(".js-search-form"),a=document.querySelector(".loader"),u=document.querySelector(".gallery");L.addEventListener("submit",b);function b(i){i.preventDefault();const r=i.currentTarget,o=r.elements.query.value.trim();if(o==="")return l.innerHTML="",c("Enter data to search");l.innerHTML="",a.classList.remove("hidden"),u.innerHTML="",y(o).then(s=>{if(s.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");setTimeout(()=>{a.classList.add("hidden");const e=p(s.hits);console.log("Generated Markup:",e),u.innerHTML=e,f.refresh()},1500)}).catch(s=>{a.classList.add("hidden"),c(s.message)}),r.reset()}
//# sourceMappingURL=commonHelpers.js.map
