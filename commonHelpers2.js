import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as t}from"./assets/vendor-77e16229.js";const o=document.querySelector(".form");o.addEventListener("submit",n);function n(i){i.preventDefault();const s=Number(o.delay.value),r=o.state.value;new Promise((e,m)=>{setTimeout(()=>{r==="fulfilled"?e(s):m(s)},s)}).then(e=>{t.success({message:`✅ Fulfilled promise in ${e}ms`,messageColor:"#FFF",backgroundColor:"#59A10D",position:"topRight",icon:""})}).catch(e=>{t.error({message:`❌ Rejected promise in ${e}ms`,messageColor:"#FFF",backgroundColor:"#EF4040",position:"topRight",icon:""})}),o.reset()}
//# sourceMappingURL=commonHelpers2.js.map
