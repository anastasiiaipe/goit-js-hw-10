/* empty css                      */import{f,i as m}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const c=document.querySelector("button[data-start]");c.disabled=!0;const p=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),y=document.querySelector("span[data-minutes]"),g=document.querySelector("span[data-seconds]");let u;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const r=t[0].getTime();r>Date.now()?(u=r,c.disabled=!1):m.error({message:"Please, choose a date in the future",messageColor:"#FFF",messageSize:"20px",backgroundColor:"#f54e59",position:"topRight"})}};f("#datetime-picker",S);function i(t){return String(t).padStart(2,"0")}function b(){c.disabled=!0;let t=0;const r=setInterval(()=>{if(t=u-Date.now(),t>0){let n=v(t);p.textContent=i(n.days),h.textContent=i(n.hours),y.textContent=i(n.minutes),g.textContent=i(n.seconds)}else clearInterval(r)},1e3)}c.addEventListener("click",b);function v(t){const o=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:s,minutes:d,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map
