(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();(()=>{const n=document.getElementById("mob-menu").querySelectorAll("nav a"),o={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};o.openModalBtn.addEventListener("click",r),o.closeModalBtn.addEventListener("click",r);function r(){o.modal.classList.toggle("is-open")}n.forEach(e=>{e.addEventListener("click",function(){o.modal.classList.toggle("is-open")})})})();new Swiper(".swiper",{loop:!0,slidesPerView:1,spaceBetween:20,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:20}},pagination:{el:".pagination",bulletClass:"pagination-btn",bulletActiveClass:"pagination-btn--active"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},autoplay:{delay:5e3}});
//# sourceMappingURL=index.js.map
