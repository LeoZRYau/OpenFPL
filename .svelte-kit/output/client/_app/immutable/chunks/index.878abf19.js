function M(){}function nt(t,n){for(const e in n)t[e]=n[e];return t}function K(t){return t()}function W(){return Object.create(null)}function $(t){t.forEach(K)}function Q(t){return typeof t=="function"}function $t(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let N;function kt(t,n){return N||(N=document.createElement("a")),N.href=n,t===N.href}function et(t){return Object.keys(t).length===0}function it(t,...n){if(t==null)return M;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function vt(t,n,e){t.$$.on_destroy.push(it(n,e))}function Et(t,n,e,i){if(t){const r=R(t,n,e,i);return t[0](r)}}function R(t,n,e,i){return t[1]&&i?nt(e.ctx.slice(),t[1](i(n))):e.ctx}function St(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=n.dirty[o]|r[o];return l}return n.dirty|r}return n.dirty}function Nt(t,n,e,i,r,l){if(r){const c=R(n,e,i,l);t.p(c,r)}}function At(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function Mt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function jt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function Ct(t){return t??""}let j=!1;function rt(){j=!0}function ct(){j=!1}function st(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&s.push(f)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const u=n[s].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:st(1,r,_=>n[e[_]].claim_order,u))-1;i[s]=e[f]+1;const d=f+1;e[d]=s,r=Math.max(d,r)}const l=[],c=[];let o=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(l.push(n[s-1]);o>=s;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);l.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<l.length&&c[s].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(c[s],f)}}function ut(t,n){if(j){for(ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function qt(t,n,e){j&&!e?ut(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function Lt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function at(t){return document.createElement(t)}function ft(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function D(t){return document.createTextNode(t)}function Ot(){return D(" ")}function Pt(){return D("")}function Bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Tt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function Dt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function _t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function It(t,n){for(const e in n)_t(t,e,n[e])}function zt(t,n,e){t.setAttributeNS("http://www.w3.org/1999/xlink",n,e)}function Ft(t){return t===""?null:+t}function dt(t){return Array.from(t.childNodes)}function ht(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function U(t,n,e,i,r=!1){ht(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const s=e(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const s=e(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function V(t,n,e,i){return U(t,r=>r.nodeName===n,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(n))}function Ht(t,n,e){return V(t,n,e,at)}function Wt(t,n,e){return V(t,n,e,ft)}function mt(t,n){return U(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>D(n),!0)}function Gt(t){return mt(t," ")}function Jt(t,n){n=""+n,t.data!==n&&(t.data=n)}function Kt(t,n){t.value=n??""}function Qt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Rt(t,n,e){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===n){r.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function Ut(t){const n=t.querySelector(":checked");return n&&n.__value}function Vt(t,n,e){t.classList[e?"add":"remove"](n)}function Xt(t,n){return new t(n)}let v;function k(t){v=t}function I(){if(!v)throw new Error("Function called outside component initialization");return v}function Yt(t){I().$$.on_mount.push(t)}function Zt(t){I().$$.after_update.push(t)}function tn(t){return I().$$.context.get(t)}function nn(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const b=[],G=[];let w=[];const J=[],X=Promise.resolve();let B=!1;function Y(){B||(B=!0,X.then(Z))}function en(){return Y(),X}function T(t){w.push(t)}const P=new Set;let x=0;function Z(){if(x!==0)return;const t=v;do{try{for(;x<b.length;){const n=b[x];x++,k(n),pt(n.$$)}}catch(n){throw b.length=0,x=0,n}for(k(null),b.length=0,x=0;G.length;)G.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];P.has(e)||(P.add(e),e())}w.length=0}while(b.length);for(;J.length;)J.pop()();B=!1,P.clear(),k(t)}function pt(t){if(t.fragment!==null){t.update(),$(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}function yt(t){const n=[],e=[];w.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),w=n}const A=new Set;let g;function rn(){g={r:0,c:[],p:g}}function cn(){g.r||$(g.c),g=g.p}function tt(t,n){t&&t.i&&(A.delete(t),t.i(n))}function gt(t,n,e,i){if(t&&t.o){if(A.has(t))return;A.add(t),g.c.push(()=>{A.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function sn(t,n){gt(t,1,1,()=>{n.delete(t.key)})}function on(t,n,e,i,r,l,c,o,s,u,f,d){let _=t.length,m=l.length,h=_;const C={};for(;h--;)C[t[h].key]=h;const E=[],q=new Map,L=new Map,z=[];for(h=m;h--;){const a=d(r,l,h),p=e(a);let y=c.get(p);y?i&&z.push(()=>y.p(a,n)):(y=u(p,a),y.c()),q.set(p,E[h]=y),p in C&&L.set(p,Math.abs(h-C[p]))}const F=new Set,H=new Set;function O(a){tt(a,1),a.m(o,f),c.set(a.key,a),f=a.first,m--}for(;_&&m;){const a=E[m-1],p=t[_-1],y=a.key,S=p.key;a===p?(f=a.first,_--,m--):q.has(S)?!c.has(y)||F.has(y)?O(a):H.has(S)?_--:L.get(y)>L.get(S)?(H.add(y),O(a)):(F.add(S),_--):(s(p,c),_--)}for(;_--;){const a=t[_];q.has(a.key)||s(a,c)}for(;m;)O(E[m-1]);return $(z),E}function un(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],o=n[l];if(o){for(const s in c)s in o||(i[s]=1);for(const s in o)r[s]||(e[s]=o[s],r[s]=1);t[l]=o}else for(const s in c)r[s]=1}for(const c in i)c in e||(e[c]=void 0);return e}function ln(t){t&&t.c()}function an(t,n){t&&t.l(n)}function xt(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||T(()=>{const c=t.$$.on_mount.map(K).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...c):$(c),t.$$.on_mount=[]}),l.forEach(T)}function bt(t,n){const e=t.$$;e.fragment!==null&&(yt(e.after_update),$(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function wt(t,n){t.$$.dirty[0]===-1&&(b.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function fn(t,n,e,i,r,l,c,o=[-1]){const s=v;k(t);const u=t.$$={fragment:null,ctx:[],props:l,update:M,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:W(),dirty:o,skip_bound:!1,root:n.target||s.$$.root};c&&c(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return u.ctx&&r(u.ctx[d],u.ctx[d]=h)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](h),f&&wt(t,d)),_}):[],u.update(),f=!0,$(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){rt();const d=dt(n.target);u.fragment&&u.fragment.l(d),d.forEach(lt)}else u.fragment&&u.fragment.c();n.intro&&tt(t.$$.fragment),xt(t,n.target,n.anchor,n.customElement),ct(),Z()}k(s)}class _n{$destroy(){bt(this,1),this.$destroy=M}$on(n,e){if(!Q(e))return M;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!et(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{on as $,xt as A,bt as B,Et as C,Nt as D,At as E,St as F,ut as G,M as H,vt as I,T as J,Rt as K,Bt as L,Lt as M,$ as N,Ut as O,Ct as P,ft as Q,Wt as R,_n as S,zt as T,kt as U,Q as V,nn as W,Ft as X,Kt as Y,Dt as Z,Vt as _,Ot as a,sn as a0,nt as a1,It as a2,un as a3,jt as a4,tn as a5,Mt as a6,Tt as a7,qt as b,Gt as c,gt as d,Pt as e,cn as f,tt as g,lt as h,fn as i,Zt as j,at as k,Ht as l,dt as m,_t as n,Yt as o,Qt as p,D as q,mt as r,$t as s,en as t,Jt as u,rn as v,G as w,Xt as x,ln as y,an as z};
