import{H as d,s as k}from"./index.b324a1dd.js";const u=[];function p(e,t=d){let n;const o=new Set;function r(s){if(k(e,s)&&(e=s,n)){const i=!u.length;for(const l of o)l[1](),u.push(l,e);if(i){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function c(s){r(s(e))}function a(s,i=d){const l=[s,i];return o.add(l),o.size===1&&(n=t(r)||d),s(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:a}}const v=globalThis.__sveltekit_18k00zi?.base??"",m=globalThis.__sveltekit_18k00zi?.assets??v,w="1700580983442",S="sveltekit:snapshot",T="sveltekit:scroll",y="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function I(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function x(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function g(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function O(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=g(e)}}function U(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||A(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=n?.origin===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:o,download:c}}function L(e){let t=null,n=null,o=null,r=null,c=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),c===null&&(c=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=g(s);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:b[o??"off"],preload_data:b[r??"off"],keep_focus:i(t),noscroll:i(n),reload:i(c),replace_state:i(a)}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function c(a){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&a(s=i)})}return{notify:o,set:r,subscribe:c}}function E(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${m}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==w;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:o}}function A(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function N(e){e.client}const z={url:h({}),page:h({}),navigating:p(null),updated:E()};export{y as I,_ as P,T as S,S as a,U as b,L as c,z as d,v as e,O as f,I as g,N as h,A as i,x as s,p as w};
