import{S as Te,i as Ae,s as Ne,a0 as H,a1 as j,m as u,h as i,n as s,b as Z,G as l,H as ue,k as h,y as he,q as N,a as S,l as v,z as ve,r as D,c as k,A as me,L as je,v as Tt,d as G,f as At,g as B,B as ge,I as Nt,o as Dt,T as W,N as Ot,p as Ht,$ as st,e as yt,u as jt,C as Rt,D as Ut,E as zt,F as Ft,W as Wt}from"./index.85206748.js";import{w as Pt}from"./index.b378d913.js";import{p as Gt}from"./stores.3691cf6a.js";import{S as Yt,o as qt,E as ot,D as bt,i as Jt,a as xt,b as Zt,c as Et,Y as $t,d as Xt,e as Qt,f as es,t as ts}from"./toast-store.55f7539f.js";class ht extends Error{constructor(e){super(e),this.message=e,Object.setPrototypeOf(this,ht.prototype)}}function Lt(c){if(c)return c;if(typeof crypto<"u"&&crypto.subtle)return crypto.subtle;throw new ht("Global crypto was not available and none was provided. Please inlcude a SubtleCrypto implementation. See https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto")}class rt extends Yt{constructor(e,t,a){super(),this._keyPair=e,this._derKey=t,this._subtleCrypto=a}static async generate(e){const{extractable:t=!1,keyUsages:a=["sign","verify"],subtleCrypto:r}=e??{},n=Lt(r),o=await n.generateKey({name:"ECDSA",namedCurve:"P-256"},t,a),d=await n.exportKey("spki",o.publicKey);return new this(o,d,n)}static async fromKeyPair(e,t){const a=Lt(t),r=await a.exportKey("spki",e.publicKey);return new rt(e,r,a)}getKeyPair(){return this._keyPair}getPublicKey(){const e=this._derKey,t=Object.create(this._keyPair.publicKey);return t.toDer=function(){return e},t}async sign(e){const t={name:"ECDSA",hash:{name:"SHA-256"}};return this._keyPair.privateKey,await this._subtleCrypto.sign(t,this._keyPair.privateKey,e)}}const Ct=["mousedown","mousemove","keydown","touchstart","wheel"];class It{constructor(e={}){var t;this.callbacks=[],this.idleTimeout=10*60*1e3,this.timeoutID=void 0;const{onIdle:a,idleTimeout:r=10*60*1e3}=e||{};this.callbacks=a?[a]:[],this.idleTimeout=r;const n=this._resetTimer.bind(this);window.addEventListener("load",n,!0),Ct.forEach(function(d){document.addEventListener(d,n,!0)});const o=(d,g)=>{let f;return(...m)=>{const _=this,p=function(){f=void 0,d.apply(_,m)};clearTimeout(f),f=window.setTimeout(p,g)}};if(e?.captureScroll){const d=o(n,(t=e?.scrollDebounce)!==null&&t!==void 0?t:100);window.addEventListener("scroll",d,!0)}n()}static create(e={}){return new this(e)}registerCallback(e){this.callbacks.push(e)}exit(){clearTimeout(this.timeoutID),window.removeEventListener("load",this._resetTimer,!0);const e=this._resetTimer.bind(this);Ct.forEach(function(t){document.removeEventListener(t,e,!0)}),this.callbacks.forEach(t=>t())}_resetTimer(){const e=this.exit.bind(this);window.clearTimeout(this.timeoutID),this.timeoutID=window.setTimeout(e,this.idleTimeout)}}const Vt="auth-client-db",Mt="ic-keyval",ss=async(c=Vt,e=Mt,t)=>(Kt&&(localStorage!=null&&localStorage.getItem(ke))&&(localStorage.removeItem(ke),localStorage.removeItem(Se)),await qt(c,t,{upgrade:a=>{a.objectStoreNames,a.objectStoreNames.contains(e)&&a.clear(e),a.createObjectStore(e)}}));async function as(c,e,t){return await c.get(e,t)}async function rs(c,e,t,a){return await c.put(e,a,t)}async function ls(c,e,t){return await c.delete(e,t)}class vt{constructor(e,t){this._db=e,this._storeName=t}static async create(e){const{dbName:t=Vt,storeName:a=Mt,version:r=1}=e??{},n=await ss(t,a,r);return new vt(n,a)}async set(e,t){return await rs(this._db,this._storeName,e,t)}async get(e){var t;return(t=await as(this._db,this._storeName,e))!==null&&t!==void 0?t:null}async remove(e){return await ls(this._db,this._storeName,e)}}const Se="identity",ke="delegation",ns="iv",is=1,Kt=typeof window<"u";class os{constructor(e="ic-",t){this.prefix=e,this._localStorage=t}get(e){return Promise.resolve(this._getLocalStorage().getItem(this.prefix+e))}set(e,t){return this._getLocalStorage().setItem(this.prefix+e,t),Promise.resolve()}remove(e){return this._getLocalStorage().removeItem(this.prefix+e),Promise.resolve()}_getLocalStorage(){if(this._localStorage)return this._localStorage;const e=typeof window>"u"?typeof global>"u"?typeof self>"u"?void 0:self.localStorage:global.localStorage:window.localStorage;if(!e)throw new Error("Could not find local storage.");return e}}class cs{get _db(){return new Promise(e=>{if(this.initializedDb){e(this.initializedDb);return}vt.create({version:is}).then(t=>{this.initializedDb=t,e(t)})})}async get(e){return await(await this._db).get(e)}async set(e,t){await(await this._db).set(e,t)}async remove(e){await(await this._db).remove(e)}}const us="https://identity.ic0.app",ds="#authorize",ct="ECDSA",ut="Ed25519",fs=500,hs="UserInterrupt";class vs{constructor(e,t,a,r,n,o,d,g){var f;this._identity=e,this._key=t,this._chain=a,this._storage=r,this.idleManager=n,this._createOptions=o,this._idpWindow=d,this._eventHandler=g;const m=this.logout.bind(this),_=o?.idleOptions;!_?.onIdle&&!_?.disableDefaultIdleCallback&&((f=this.idleManager)===null||f===void 0||f.registerCallback(()=>{m(),location.reload()}))}static async create(e={}){var t,a,r;const n=(t=e.storage)!==null&&t!==void 0?t:new cs,o=(a=e.keyType)!==null&&a!==void 0?a:ct;let d=null;if(e.identity)d=e.identity;else{let _=await n.get(Se);if(!_&&Kt)try{const p=new os,b=await p.get(ke),w=await p.get(Se);b&&w&&o===ct&&(console.log("Discovered an identity stored in localstorage. Migrating to IndexedDB"),await n.set(ke,b),await n.set(Se,w),_=b,await p.remove(ke),await p.remove(Se))}catch(p){console.error("error while attempting to recover localstorage: "+p)}if(_)try{typeof _=="object"?o===ut&&typeof _=="string"?d=await ot.fromJSON(_):d=await rt.fromKeyPair(_):typeof _=="string"&&(d=ot.fromJSON(_))}catch{}}let g=new Et,f=null;if(d)try{const _=await n.get(ke);if(typeof _=="object"&&_!==null)throw new Error("Delegation chain is incorrectly stored. A delegation chain should be stored as a string.");e.identity?g=e.identity:_&&(f=bt.fromJSON(_),Jt(f)?g=xt.fromDelegation(d,f):(await dt(n),d=null))}catch(_){console.error(_),await dt(n),d=null}let m;return!((r=e.idleOptions)===null||r===void 0)&&r.disableIdle?m=void 0:(f||e.identity)&&(m=It.create(e.idleOptions)),d||(o===ut?(d=await ot.generate(),await n.set(Se,JSON.stringify(d.toJSON()))):(e.storage&&o===ct&&console.warn(`You are using a custom storage provider that may not support CryptoKey storage. If you are using a custom storage provider that does not support CryptoKey storage, you should use '${ut}' as the key type, as it can serialize to a string`),d=await rt.generate(),await n.set(Se,d.getKeyPair()))),new this(g,d,f,n,m,e)}async _handleSuccess(e,t){var a,r,n;const o=e.delegations.map(f=>({delegation:new Zt(f.delegation.pubkey,f.delegation.expiration,f.delegation.targets),signature:f.signature.buffer})),d=bt.fromDelegations(o,e.userPublicKey.buffer),g=this._key;if(g){if(this._chain=d,this._identity=xt.fromDelegation(g,this._chain),(a=this._idpWindow)===null||a===void 0||a.close(),!this.idleManager){const f=(r=this._createOptions)===null||r===void 0?void 0:r.idleOptions;this.idleManager=It.create(f),!f?.onIdle&&!f?.disableDefaultIdleCallback&&((n=this.idleManager)===null||n===void 0||n.registerCallback(()=>{this.logout(),location.reload()}))}this._removeEventListener(),delete this._idpWindow,this._chain&&await this._storage.set(ke,JSON.stringify(this._chain.toJSON())),t?.()}}getIdentity(){return this._identity}async isAuthenticated(){return!this.getIdentity().getPrincipal().isAnonymous()&&this._chain!==null}async login(e){var t,a,r,n;const o=BigInt(8)*BigInt(36e11),d=new URL(((t=e?.identityProvider)===null||t===void 0?void 0:t.toString())||us);d.hash=ds,(a=this._idpWindow)===null||a===void 0||a.close(),this._removeEventListener(),this._eventHandler=this._getEventHandler(d,Object.assign({maxTimeToLive:(r=e?.maxTimeToLive)!==null&&r!==void 0?r:o},e)),window.addEventListener("message",this._eventHandler),this._idpWindow=(n=window.open(d.toString(),"idpWindow",e?.windowOpenerFeatures))!==null&&n!==void 0?n:void 0;const g=()=>{this._idpWindow&&(this._idpWindow.closed?this._handleFailure(hs,e?.onError):setTimeout(g,fs))};g()}_getEventHandler(e,t){return async a=>{var r,n,o;if(a.origin!==e.origin){console.warn(`WARNING: expected origin '${e.origin}', got '${a.origin}' (ignoring)`);return}const d=a.data;switch(d.kind){case"authorize-ready":{const g={kind:"authorize-client",sessionPublicKey:new Uint8Array((r=this._key)===null||r===void 0?void 0:r.getPublicKey().toDer()),maxTimeToLive:t?.maxTimeToLive,derivationOrigin:(n=t?.derivationOrigin)===null||n===void 0?void 0:n.toString()};(o=this._idpWindow)===null||o===void 0||o.postMessage(g,e.origin);break}case"authorize-client-success":try{await this._handleSuccess(d,t?.onSuccess)}catch(g){this._handleFailure(g.message,t?.onError)}break;case"authorize-client-failure":this._handleFailure(d.text,t?.onError);break}}}_handleFailure(e,t){var a;(a=this._idpWindow)===null||a===void 0||a.close(),t?.(e),this._removeEventListener(),delete this._idpWindow}_removeEventListener(){this._eventHandler&&window.removeEventListener("message",this._eventHandler),this._eventHandler=void 0}async logout(e={}){if(await dt(this._storage),this._identity=new Et,this._chain=null,e.returnTo)try{window.history.pushState({},"",e.returnTo)}catch{window.location.href=e.returnTo}}}async function dt(c){await c.remove(Se),await c.remove(ke),await c.remove(ns)}const ft=()=>vs.create({idleOptions:{disableIdle:!0,disableDefaultIdleCallback:!0}}),ms=({width:c,height:e})=>{if($t(window)||$t(window.top))return;const{top:{innerWidth:t,innerHeight:a}}=window,r=a/2+screenY-e/2,n=t/2+screenX-c/2;return`toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${c}, height=${e}, top=${r}, left=${n}`};let Ee;const gs=()=>{const{subscribe:c,set:e,update:t}=Pt({identity:void 0});return{subscribe:c,sync:async()=>{Ee=Ee??await ft();const a=await Ee.isAuthenticated();e({identity:a?Ee.getIdentity():null})},signIn:({domain:a})=>new Promise(async(r,n)=>{Ee=Ee??await ft();const o="https://identity.ic0.app";await Ee?.login({maxTimeToLive:Xt,onSuccess:()=>{t(d=>({...d,identity:Ee?.getIdentity()})),r()},onError:n,identityProvider:o,windowOpenerFeatures:ms({width:Qt,height:es})})}),signOut:async()=>{await(Ee??await ft()).logout(),Ee=null,t(r=>({...r,identity:null}))}}},at=gs();function _s(c){let e,t;return{c(){e=H("svg"),t=H("path"),this.h()},l(a){e=j(a,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0});var r=u(e);t=j(r,"path",{d:!0,fill:!0}),u(t).forEach(i),r.forEach(i),this.h()},h(){s(t,"d","M68.8457 0C43.0009 4.21054 19.8233 14.9859 0.331561 30.5217L0.264282 30.6627V129.685L68.7784 187.97L136.528 129.685L136.543 30.6204C117.335 15.7049 94.1282 4.14474 68.8457 0ZM82.388 145.014C82.388 145.503 82.0804 145.992 81.5806 146.114L68.7784 150.329C68.5285 150.39 68.2786 150.39 68.0287 150.329L55.2265 146.114C54.7267 145.931 54.4143 145.503 54.4143 145.014V140.738C54.4143 140.31 54.6642 139.883 55.039 139.7L67.8413 133.102C68.2161 132.919 68.591 132.919 68.9658 133.102L81.768 139.7C82.1429 139.883 82.388 140.31 82.388 140.738V145.014ZM106.464 97.9137C106.464 98.3414 106.214 98.769 105.777 98.9523L96.6607 103.534C96.036 103.84 95.8486 104.573 96.1609 105.122L105.027 121.189C105.277 121.678 105.215 122.228 104.84 122.594L89.7262 137.134C89.2889 137.561 88.6641 137.561 88.1644 137.256L70.9313 125.099C70.369 124.671 70.2441 123.877 70.7439 123.327L84.4208 108.421C85.2329 107.505 84.2958 106.161 83.1713 106.527L68.7447 111.109C68.4948 111.17 68.2449 111.17 67.9951 111.109L53.6358 106.527C52.4488 106.161 51.5742 107.566 52.3863 108.421L66.0584 123.327C66.5582 123.877 66.4332 124.671 65.871 125.099L48.6379 137.256C48.1381 137.561 47.5134 137.561 47.0761 137.134L31.9671 122.533C31.5923 122.167 31.5298 121.617 31.7797 121.128L40.6461 105.061C40.9585 104.45 40.7086 103.778 40.1463 103.473L31.03 98.8912C30.6552 98.7079 30.3428 98.2803 30.3428 97.8526V65.8413C30.3428 64.9249 31.4049 64.314 32.217 64.8639L39.709 69.8122C40.0214 70.0565 40.2088 70.362 40.2088 70.7896L40.2713 79.0368C40.2713 79.4034 40.4587 79.7699 40.7711 80.0143L51.7616 87.5284C52.5737 88.0782 53.6983 87.4673 53.6358 86.4898L52.9486 71.9503C52.9486 71.5838 52.7612 71.2173 52.4488 71.034L30.8426 56.5556C30.5302 56.3112 30.3428 55.9447 30.3428 55.5781V48.4305C30.3428 48.1862 30.4053 47.8807 30.5927 47.6975L38.3971 38.0452C38.7094 37.6176 39.2717 37.4954 39.7715 37.6786L67.9326 47.8807C68.1825 48.0029 68.4948 48.0029 68.7447 47.8807L96.9106 37.6786C97.4104 37.4954 97.9679 37.6786 98.2802 38.0452L106.089 47.6975C106.277 47.8807 106.339 48.1862 106.339 48.4305V55.5781C106.339 55.9447 106.152 56.3112 105.84 56.5556L84.2333 71.034C84.0459 71.2783 83.8585 71.6449 83.8585 72.0114L83.1713 86.5509C83.1088 87.5284 84.2333 88.1393 85.0455 87.5895L96.036 80.0753C96.3484 79.831 96.5358 79.5255 96.5358 79.0979L96.5983 70.8507C96.5983 70.4842 96.7857 70.1176 97.098 69.8733L104.59 64.9249C105.402 64.3751 106.464 64.9249 106.464 65.9024V97.9137Z"),s(t,"fill","#fffff"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"class",c[0]),s(e,"fill","currentColor"),s(e,"viewBox","0 0 137 188")},m(a,r){Z(a,e,r),l(e,t)},p(a,[r]){r&1&&s(e,"class",a[0])},i:ue,o:ue,d(a){a&&i(e)}}}function ps(c,e,t){let{className:a=""}=e;return c.$$set=r=>{"className"in r&&t(0,a=r.className)},[a]}class Bt extends Te{constructor(e){super(),Ae(this,e,ps,_s,Ne,{className:0})}}function ws(c){let e,t,a,r;return{c(){e=H("svg"),t=H("path"),a=H("path"),r=H("path"),this.h()},l(n){e=j(n,"svg",{xmlns:!0,"aria-hidden":!0,class:!0,fill:!0,viewBox:!0});var o=u(e);t=j(o,"path",{d:!0}),u(t).forEach(i),a=j(o,"path",{d:!0}),u(a).forEach(i),r=j(o,"path",{d:!0}),u(r).forEach(i),o.forEach(i),this.h()},h(){s(t,"d","M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"),s(a,"d","M15.5,6.5v3a1,1,0,0,1-1,1h-3.5v-5H14.5A1,1,0,0,1,15.5,6.5Z"),s(r,"d","M12,8a.5,.5 0,1,1,.001,0Z"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"aria-hidden","true"),s(e,"class",c[0]),s(e,"fill","currentColor"),s(e,"viewBox","0 0 24 24")},m(n,o){Z(n,e,o),l(e,t),l(e,a),l(e,r)},p(n,[o]){o&1&&s(e,"class",n[0])},i:ue,o:ue,d(n){n&&i(e)}}}function ys(c,e,t){let{className:a=""}=e;return c.$$set=r=>{"className"in r&&t(0,a=r.className)},[a]}class lt extends Te{constructor(e){super(),Ae(this,e,ys,ws,Ne,{className:0})}}function bs(c){let e,t,a,r,n,o,d,g,f,m,_,p,b,w,y,I;return n=new lt({props:{className:"ml-2 h-6 w-6 mt-1"}}),p=new lt({props:{className:"ml-2 h-6 w-6 mt-1"}}),{c(){e=h("ul"),t=h("li"),a=h("button"),r=N(`Connect
              `),he(n.$$.fragment),o=S(),d=h("div"),g=h("ul"),f=h("li"),m=h("button"),_=N(`Connect
                `),he(p.$$.fragment),this.h()},l(E){e=v(E,"UL",{class:!0});var T=u(e);t=v(T,"LI",{class:!0});var M=u(t);a=v(M,"BUTTON",{class:!0});var R=u(a);r=D(R,`Connect
              `),ve(n.$$.fragment,R),R.forEach(i),M.forEach(i),T.forEach(i),o=k(E),d=v(E,"DIV",{class:!0});var A=u(d);g=v(A,"UL",{class:!0});var O=u(g);f=v(O,"LI",{class:!0});var $=u(f);m=v($,"BUTTON",{class:!0});var P=u(m);_=D(P,`Connect
                `),ve(p.$$.fragment,P),P.forEach(i),$.forEach(i),O.forEach(i),A.forEach(i),this.h()},h(){s(a,"class","flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 nav-button svelte-tlhn8x"),s(t,"class","mx-2 flex items-center h-16"),s(e,"class","hidden md:flex"),s(m,"class","flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 nav-button svelte-tlhn8x"),s(f,"class","p-2"),s(g,"class","flex flex-col"),s(d,"class",b=W(`absolute top-12 right-2.5 bg-black rounded-lg shadow-md z-10 p-2 ${c[0]?"block":"hidden"} md:hidden`)+" svelte-tlhn8x")},m(E,T){Z(E,e,T),l(e,t),l(t,a),l(a,r),me(n,a,null),Z(E,o,T),Z(E,d,T),l(d,g),l(g,f),l(f,m),l(m,_),me(p,m,null),w=!0,y||(I=[je(a,"click",c[4]),je(m,"click",c[4])],y=!0)},p(E,T){(!w||T&1&&b!==(b=W(`absolute top-12 right-2.5 bg-black rounded-lg shadow-md z-10 p-2 ${E[0]?"block":"hidden"} md:hidden`)+" svelte-tlhn8x"))&&s(d,"class",b)},i(E){w||(B(n.$$.fragment,E),B(p.$$.fragment,E),w=!0)},o(E){G(n.$$.fragment,E),G(p.$$.fragment,E),w=!1},d(E){E&&i(e),ge(n),E&&i(o),E&&i(d),ge(p),y=!1,Ot(I)}}}function xs(c){let e,t,a,r,n,o,d,g,f,m,_,p,b,w,y,I,E,T,M,R,A,O,$,P,X,V,L,Q,ee,se,Y,U,_e,z,De,Ce,pe,we,ae,de,Ie,Oe,re,le,Pe,ie,Ve,ye,q,be,J,oe,F,Me,$e;return ee=new lt({props:{className:"ml-2 h-6 w-6 mt-1"}}),J=new lt({props:{className:"ml-2 h-6 w-6 mt-1"}}),{c(){e=h("ul"),t=h("li"),a=h("a"),r=h("span"),n=N("Home"),d=S(),g=h("li"),f=h("a"),m=h("span"),_=N("Squad Selection"),b=S(),w=h("li"),y=h("a"),I=h("span"),E=N("Profile"),M=S(),R=h("li"),A=h("a"),O=h("span"),$=N("Governance"),X=S(),V=h("li"),L=h("button"),Q=N(`Disconnect
              `),he(ee.$$.fragment),se=S(),Y=h("div"),U=h("ul"),_e=h("li"),z=h("a"),De=N("Home"),pe=S(),we=h("li"),ae=h("a"),de=N("Squad Selection"),Oe=S(),re=h("li"),le=h("a"),Pe=N("Profile"),Ve=S(),ye=h("li"),q=h("button"),be=N(`Disconnect
                `),he(J.$$.fragment),this.h()},l(x){e=v(x,"UL",{class:!0});var C=u(e);t=v(C,"LI",{class:!0});var ce=u(t);a=v(ce,"A",{href:!0,class:!0});var Re=u(a);r=v(Re,"SPAN",{class:!0});var xe=u(r);n=D(xe,"Home"),xe.forEach(i),Re.forEach(i),ce.forEach(i),d=k(C),g=v(C,"LI",{class:!0});var Ke=u(g);f=v(Ke,"A",{href:!0,class:!0});var te=u(f);m=v(te,"SPAN",{class:!0});var Be=u(m);_=D(Be,"Squad Selection"),Be.forEach(i),te.forEach(i),Ke.forEach(i),b=k(C),w=v(C,"LI",{class:!0});var Le=u(w);y=v(Le,"A",{href:!0,class:!0});var He=u(y);I=v(He,"SPAN",{class:!0});var Fe=u(I);E=D(Fe,"Profile"),Fe.forEach(i),He.forEach(i),Le.forEach(i),M=k(C),R=v(C,"LI",{class:!0});var ne=u(R);A=v(ne,"A",{href:!0,class:!0});var We=u(A);O=v(We,"SPAN",{class:!0});var Ge=u(O);$=D(Ge,"Governance"),Ge.forEach(i),We.forEach(i),ne.forEach(i),X=k(C),V=v(C,"LI",{class:!0});var Ye=u(V);L=v(Ye,"BUTTON",{class:!0});var Ue=u(L);Q=D(Ue,`Disconnect
              `),ve(ee.$$.fragment,Ue),Ue.forEach(i),Ye.forEach(i),C.forEach(i),se=k(x),Y=v(x,"DIV",{class:!0});var qe=u(Y);U=v(qe,"UL",{class:!0});var fe=u(U);_e=v(fe,"LI",{class:!0});var K=u(_e);z=v(K,"A",{href:!0,class:!0});var Je=u(z);De=D(Je,"Home"),Je.forEach(i),K.forEach(i),pe=k(fe),we=v(fe,"LI",{class:!0});var Ze=u(we);ae=v(Ze,"A",{href:!0,class:!0});var Xe=u(ae);de=D(Xe,"Squad Selection"),Xe.forEach(i),Ze.forEach(i),Oe=k(fe),re=v(fe,"LI",{class:!0});var Qe=u(re);le=v(Qe,"A",{href:!0,class:!0});var et=u(le);Pe=D(et,"Profile"),et.forEach(i),Qe.forEach(i),Ve=k(fe),ye=v(fe,"LI",{class:!0});var tt=u(ye);q=v(tt,"BUTTON",{class:!0});var ze=u(q);be=D(ze,`Disconnect
                `),ve(J.$$.fragment,ze),ze.forEach(i),tt.forEach(i),fe.forEach(i),qe.forEach(i),this.h()},h(){s(r,"class","flex items-center h-full px-4"),s(a,"href","/"),s(a,"class",o="flex items-center h-full nav-underline hover:text-gray-400 $"+c[2]("/")+" svelte-tlhn8x"),s(t,"class","mx-2 flex items-center h-16"),s(m,"class","flex items-center h-full px-4"),s(f,"href","/pick-team"),s(f,"class",p="flex items-center h-full nav-underline hover:text-gray-400 $"+c[2]("/pick-team")+" svelte-tlhn8x"),s(g,"class","mx-2 flex items-center h-16"),s(I,"class","flex items-center h-full px-4"),s(y,"href","/profile"),s(y,"class",T="flex items-center h-full nav-underline hover:text-gray-400 $"+c[2]("/profile")+" svelte-tlhn8x"),s(w,"class","mx-2 flex items-center h-16"),s(O,"class","flex items-center h-full px-4"),s(A,"href","/governance"),s(A,"class",P="flex items-center h-full nav-underline hover:text-gray-400 $"+c[2]("/governance")+" svelte-tlhn8x"),s(R,"class","mx-2 flex items-center h-16"),s(L,"class","flex items-center justify-center px-4 py-2 text-white rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 nav-button svelte-tlhn8x"),s(V,"class","mx-2 flex items-center h-16"),s(e,"class","hidden md:flex"),s(z,"href","/"),s(z,"class",Ce=W(`nav-underline hover:text-gray-400 ${c[2]("/")}`)+" svelte-tlhn8x"),s(_e,"class","p-2"),s(ae,"href","/pick-team"),s(ae,"class",Ie=W(c[2]("/pick-team"))+" svelte-tlhn8x"),s(we,"class","p-2"),s(le,"href","/profile"),s(le,"class",ie=W(c[2]("/profile"))+" svelte-tlhn8x"),s(re,"class","p-2"),s(q,"class","flex items-center justify-center px-4 py-2 text-white rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 nav-button svelte-tlhn8x"),s(ye,"class","p-2"),s(U,"class","flex flex-col"),s(Y,"class",oe=W(`absolute top-12 right-2.5 bg-black rounded-lg shadow-md z-10 p-2 ${c[0]?"block":"hidden"} md:hidden`)+" svelte-tlhn8x")},m(x,C){Z(x,e,C),l(e,t),l(t,a),l(a,r),l(r,n),l(e,d),l(e,g),l(g,f),l(f,m),l(m,_),l(e,b),l(e,w),l(w,y),l(y,I),l(I,E),l(e,M),l(e,R),l(R,A),l(A,O),l(O,$),l(e,X),l(e,V),l(V,L),l(L,Q),me(ee,L,null),Z(x,se,C),Z(x,Y,C),l(Y,U),l(U,_e),l(_e,z),l(z,De),l(U,pe),l(U,we),l(we,ae),l(ae,de),l(U,Oe),l(U,re),l(re,le),l(le,Pe),l(U,Ve),l(U,ye),l(ye,q),l(q,be),me(J,q,null),F=!0,Me||($e=[je(L,"click",c[5]),je(ae,"click",c[3]),je(le,"click",c[3]),je(q,"click",c[5])],Me=!0)},p(x,C){(!F||C&4&&o!==(o="flex items-center h-full nav-underline hover:text-gray-400 $"+x[2]("/")+" svelte-tlhn8x"))&&s(a,"class",o),(!F||C&4&&p!==(p="flex items-center h-full nav-underline hover:text-gray-400 $"+x[2]("/pick-team")+" svelte-tlhn8x"))&&s(f,"class",p),(!F||C&4&&T!==(T="flex items-center h-full nav-underline hover:text-gray-400 $"+x[2]("/profile")+" svelte-tlhn8x"))&&s(y,"class",T),(!F||C&4&&P!==(P="flex items-center h-full nav-underline hover:text-gray-400 $"+x[2]("/governance")+" svelte-tlhn8x"))&&s(A,"class",P),(!F||C&4&&Ce!==(Ce=W(`nav-underline hover:text-gray-400 ${x[2]("/")}`)+" svelte-tlhn8x"))&&s(z,"class",Ce),(!F||C&4&&Ie!==(Ie=W(x[2]("/pick-team"))+" svelte-tlhn8x"))&&s(ae,"class",Ie),(!F||C&4&&ie!==(ie=W(x[2]("/profile"))+" svelte-tlhn8x"))&&s(le,"class",ie),(!F||C&1&&oe!==(oe=W(`absolute top-12 right-2.5 bg-black rounded-lg shadow-md z-10 p-2 ${x[0]?"block":"hidden"} md:hidden`)+" svelte-tlhn8x"))&&s(Y,"class",oe)},i(x){F||(B(ee.$$.fragment,x),B(J.$$.fragment,x),F=!0)},o(x){G(ee.$$.fragment,x),G(J.$$.fragment,x),F=!1},d(x){x&&i(e),ge(ee),x&&i(se),x&&i(Y),ge(J),Me=!1,Ot($e)}}}function Es(c){let e,t,a,r,n,o,d,g,f,m,_,p,b,w,y,I,E,T,M;n=new Bt({props:{className:"h-8 w-auto"}});const R=[xs,bs],A=[];function O($,P){return $[1]?0:1}return y=O(c),I=A[y]=R[y](c),{c(){e=h("header"),t=h("nav"),a=h("div"),r=h("a"),he(n.$$.fragment),o=h("b"),d=N("OpenFPL"),g=S(),f=h("button"),m=H("svg"),_=H("rect"),p=H("rect"),b=H("rect"),w=S(),I.c(),this.h()},l($){e=v($,"HEADER",{class:!0});var P=u(e);t=v(P,"NAV",{class:!0});var X=u(t);a=v(X,"DIV",{class:!0});var V=u(a);r=v(V,"A",{href:!0,class:!0});var L=u(r);ve(n.$$.fragment,L),o=v(L,"B",{class:!0});var Q=u(o);d=D(Q,"OpenFPL"),Q.forEach(i),L.forEach(i),g=k(V),f=v(V,"BUTTON",{class:!0});var ee=u(f);m=j(ee,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var se=u(m);_=j(se,"rect",{width:!0,height:!0,rx:!0,fill:!0}),u(_).forEach(i),p=j(se,"rect",{y:!0,width:!0,height:!0,rx:!0,fill:!0}),u(p).forEach(i),b=j(se,"rect",{y:!0,width:!0,height:!0,rx:!0,fill:!0}),u(b).forEach(i),se.forEach(i),ee.forEach(i),w=k(V),I.l(V),V.forEach(i),X.forEach(i),P.forEach(i),this.h()},h(){s(o,"class","ml-2"),s(r,"href","/"),s(r,"class","hover:text-gray-400 flex items-center"),s(_,"width","24"),s(_,"height","2"),s(_,"rx","1"),s(_,"fill","currentColor"),s(p,"y","8"),s(p,"width","24"),s(p,"height","2"),s(p,"rx","1"),s(p,"fill","currentColor"),s(b,"y","16"),s(b,"width","24"),s(b,"height","2"),s(b,"rx","1"),s(b,"fill","currentColor"),s(m,"width","24"),s(m,"height","18"),s(m,"viewBox","0 0 24 18"),s(m,"fill","none"),s(m,"xmlns","http://www.w3.org/2000/svg"),s(f,"class","md:hidden focus:outline-none"),s(a,"class","px-4 h-16 flex justify-between items-center w-full"),s(t,"class","text-white"),s(e,"class","svelte-tlhn8x")},m($,P){Z($,e,P),l(e,t),l(t,a),l(a,r),me(n,r,null),l(r,o),l(o,d),l(a,g),l(a,f),l(f,m),l(m,_),l(m,p),l(m,b),l(a,w),A[y].m(a,null),E=!0,T||(M=je(f,"click",c[3]),T=!0)},p($,[P]){let X=y;y=O($),y===X?A[y].p($,P):(Tt(),G(A[X],1,1,()=>{A[X]=null}),At(),I=A[y],I?I.p($,P):(I=A[y]=R[y]($),I.c()),B(I,1),I.m(a,null))},i($){E||(B(n.$$.fragment,$),B(I),E=!0)},o($){G(n.$$.fragment,$),G(I),E=!1},d($){$&&i(e),ge(n),A[y].d(),T=!1,M()}}}function $s(c,e,t){let a,r;Nt(c,Gt,m=>t(6,r=m));let n=!1,o=!1;Dt(async()=>{await at.sync(),at.subscribe(m=>{t(1,o=m.identity!==null&&m.identity!==void 0)})});function d(){t(0,n=!n)}function g(){let m={domain:"https://identity.ic0.app"};at.signIn(m)}function f(){at.signOut()}return c.$$.update=()=>{c.$$.dirty&64&&t(2,a=m=>r.url.pathname===m?"text-blue-500 nav-underline active":"nav-underline")},[n,o,a,d,g,f,r]}class Ls extends Te{constructor(e){super(),Ae(this,e,$s,Es,Ne,{})}}function Cs(c){let e,t,a,r,n;return{c(){e=H("svg"),t=H("g"),a=H("g"),r=H("path"),n=H("circle"),this.h()},l(o){e=j(o,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0});var d=u(e);t=j(d,"g",{id:!0});var g=u(t);a=j(g,"g",{});var f=u(a);r=j(f,"path",{d:!0}),u(r).forEach(i),n=j(f,"circle",{cx:!0,cy:!0,r:!0,style:!0}),u(n).forEach(i),f.forEach(i),g.forEach(i),d.forEach(i),this.h()},h(){s(r,"d","M91.99,64.798c0,-20.748 -16.845,-37.593 -37.593,-37.593l-0.003,-0c-20.749,-0 -37.594,16.845 -37.594,37.593l0,0.004c0,20.748 16.845,37.593 37.594,37.593l0.003,0c20.748,0 37.593,-16.845 37.593,-37.593l0,-0.004Z"),s(n,"cx","87.153"),s(n,"cy","50.452"),s(n,"r","23.247"),Ht(n,"fill","#7888ff"),s(t,"id","Layer_1-2"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"class",c[0]),s(e,"fill","currentColor"),s(e,"viewBox","0 0 130 130")},m(o,d){Z(o,e,d),l(e,t),l(t,a),l(a,r),l(a,n)},p(o,[d]){d&1&&s(e,"class",o[0])},i:ue,o:ue,d(o){o&&i(e)}}}function Is(c,e,t){let{className:a=""}=e;return c.$$set=r=>{"className"in r&&t(0,a=r.className)},[a]}class Ss extends Te{constructor(e){super(),Ae(this,e,Is,Cs,Ne,{className:0})}}function ks(c){let e,t,a,r,n,o,d,g,f,m,_,p,b,w,y,I,E,T,M,R,A,O,$,P,X,V,L,Q,ee,se,Y,U,_e,z,De,Ce,pe,we,ae,de,Ie,Oe,re,le,Pe,ie,Ve,ye,q,be,J,oe,F,Me,$e,x,C,ce,Re,xe,Ke;return oe=new Bt({props:{className:"h-6 w-auto mr-2"}}),xe=new Ss({props:{className:"h-8 w-auto ml-2"}}),{c(){e=h("footer"),t=h("div"),a=h("div"),r=h("div"),n=h("div"),o=h("a"),d=h("img"),f=S(),m=h("a"),_=h("img"),b=S(),w=h("a"),y=h("img"),E=S(),T=h("a"),M=h("img"),A=S(),O=h("a"),$=h("img"),X=S(),V=h("div"),L=h("div"),Q=h("a"),ee=N("Whitepaper"),se=S(),Y=h("span"),U=N("|"),_e=S(),z=h("a"),De=N("Gameplay Rules"),Ce=S(),pe=h("span"),we=N("|"),ae=S(),de=h("a"),Ie=N("Terms & Conditions"),Oe=S(),re=h("span"),le=N("|"),Pe=S(),ie=h("a"),Ve=N("Pre-SNS Fixture Validation"),ye=S(),q=h("div"),be=h("a"),J=h("b"),he(oe.$$.fragment),F=N("OpenFPL"),Me=S(),$e=h("div"),x=h("div"),C=h("div"),ce=h("a"),Re=N(`Sponsored By juno.build
            `),he(xe.$$.fragment),this.h()},l(te){e=v(te,"FOOTER",{class:!0});var Be=u(e);t=v(Be,"DIV",{class:!0});var Le=u(t);a=v(Le,"DIV",{class:!0});var He=u(a);r=v(He,"DIV",{class:!0});var Fe=u(r);n=v(Fe,"DIV",{class:!0});var ne=u(n);o=v(ne,"A",{href:!0,target:!0,rel:!0});var We=u(o);d=v(We,"IMG",{src:!0,class:!0,alt:!0}),We.forEach(i),f=k(ne),m=v(ne,"A",{href:!0,target:!0,rel:!0});var Ge=u(m);_=v(Ge,"IMG",{src:!0,class:!0,alt:!0}),Ge.forEach(i),b=k(ne),w=v(ne,"A",{href:!0,target:!0,rel:!0});var Ye=u(w);y=v(Ye,"IMG",{src:!0,class:!0,alt:!0}),Ye.forEach(i),E=k(ne),T=v(ne,"A",{href:!0,target:!0,rel:!0});var Ue=u(T);M=v(Ue,"IMG",{src:!0,class:!0,alt:!0}),Ue.forEach(i),A=k(ne),O=v(ne,"A",{href:!0,target:!0,rel:!0});var qe=u(O);$=v(qe,"IMG",{src:!0,class:!0,alt:!0}),qe.forEach(i),ne.forEach(i),Fe.forEach(i),X=k(He),V=v(He,"DIV",{class:!0});var fe=u(V);L=v(fe,"DIV",{class:!0});var K=u(L);Q=v(K,"A",{href:!0,class:!0});var Je=u(Q);ee=D(Je,"Whitepaper"),Je.forEach(i),se=k(K),Y=v(K,"SPAN",{class:!0});var Ze=u(Y);U=D(Ze,"|"),Ze.forEach(i),_e=k(K),z=v(K,"A",{href:!0,class:!0});var Xe=u(z);De=D(Xe,"Gameplay Rules"),Xe.forEach(i),Ce=k(K),pe=v(K,"SPAN",{class:!0});var Qe=u(pe);we=D(Qe,"|"),Qe.forEach(i),ae=k(K),de=v(K,"A",{href:!0,class:!0});var et=u(de);Ie=D(et,"Terms & Conditions"),et.forEach(i),Oe=k(K),re=v(K,"SPAN",{class:!0});var tt=u(re);le=D(tt,"|"),tt.forEach(i),Pe=k(K),ie=v(K,"A",{href:!0,class:!0});var ze=u(ie);Ve=D(ze,"Pre-SNS Fixture Validation"),ze.forEach(i),K.forEach(i),fe.forEach(i),He.forEach(i),ye=k(Le),q=v(Le,"DIV",{class:!0});var mt=u(q);be=v(mt,"A",{href:!0});var gt=u(be);J=v(gt,"B",{class:!0});var nt=u(J);ve(oe.$$.fragment,nt),F=D(nt,"OpenFPL"),nt.forEach(i),gt.forEach(i),mt.forEach(i),Me=k(Le),$e=v(Le,"DIV",{class:!0});var _t=u($e);x=v(_t,"DIV",{class:!0});var pt=u(x);C=v(pt,"DIV",{class:!0});var wt=u(C);ce=v(wt,"A",{href:!0,target:!0,class:!0});var it=u(ce);Re=D(it,`Sponsored By juno.build
            `),ve(xe.$$.fragment,it),it.forEach(i),wt.forEach(i),pt.forEach(i),_t.forEach(i),Le.forEach(i),Be.forEach(i),this.h()},h(){st(d.src,g="openchat.png")||s(d,"src",g),s(d,"class","h-4 w-auto mb-2 mr-2"),s(d,"alt","OpenChat"),s(o,"href","https://oc.app/community/uf3iv-naaaa-aaaar-ar3ta-cai/?ref=zv6hh-xaaaa-aaaar-ac35q-cai"),s(o,"target","_blank"),s(o,"rel","noopener noreferrer"),st(_.src,p="twitter.png")||s(_,"src",p),s(_,"class","h-4 w-auto mb-2 mr-2"),s(_,"alt","Twitter"),s(m,"href","https://twitter.com/OpenFPL_DAO"),s(m,"target","_blank"),s(m,"rel","noopener noreferrer"),st(y.src,I="discord.png")||s(y,"src",I),s(y,"class","h-4 w-auto mb-2 mr-2"),s(y,"alt","Discord"),s(w,"href","https://t.co/WmOhFA8JUR"),s(w,"target","_blank"),s(w,"rel","noopener noreferrer"),st(M.src,R="telegram.png")||s(M,"src",R),s(M,"class","h-4 w-auto mb-2 mr-2"),s(M,"alt","Telegram"),s(T,"href","https://t.co/vVkquMrdOu"),s(T,"target","_blank"),s(T,"rel","noopener noreferrer"),st($.src,P="github.png")||s($,"src",P),s($,"class","h-4 w-auto mb-2"),s($,"alt","GitHub"),s(O,"href","https://github.com/jamesbeadle/OpenFPL"),s(O,"target","_blank"),s(O,"rel","noopener noreferrer"),s(n,"class","flex flex-row pl-4"),s(r,"class","flex justify-start"),s(Q,"href","/whitepaper"),s(Q,"class","hover:text-gray-300"),s(Y,"class","hidden sm:flex"),s(z,"href","/gameplay-rules"),s(z,"class","hover:text-gray-300"),s(pe,"class","hidden sm:flex"),s(de,"href","/terms"),s(de,"class","hover:text-gray-300"),s(re,"class","hidden sm:flex"),s(ie,"href","/fixture-validation"),s(ie,"class","hover:text-gray-300"),s(L,"class","flex flex-col sm:flex-row sm:space-x-2 pl-4"),s(V,"class","flex justify-start"),s(a,"class","flex-1"),s(J,"class","px-4 mt-2 sm:mt-0 sm:px-10 flex items-center"),s(be,"href","/"),s(q,"class","flex-0"),s(ce,"href","https://juno.build"),s(ce,"target","_blank"),s(ce,"class","hover:text-gray-300 flex items-center"),s(C,"class","text-right px-4 sm:px-0 mt-1 sm:mt-0 md:mr-4"),s(x,"class","flex justify-end"),s($e,"class","flex-1"),s(t,"class","container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs"),s(e,"class","bg-gray-900 text-white py-3")},m(te,Be){Z(te,e,Be),l(e,t),l(t,a),l(a,r),l(r,n),l(n,o),l(o,d),l(n,f),l(n,m),l(m,_),l(n,b),l(n,w),l(w,y),l(n,E),l(n,T),l(T,M),l(n,A),l(n,O),l(O,$),l(a,X),l(a,V),l(V,L),l(L,Q),l(Q,ee),l(L,se),l(L,Y),l(Y,U),l(L,_e),l(L,z),l(z,De),l(L,Ce),l(L,pe),l(pe,we),l(L,ae),l(L,de),l(de,Ie),l(L,Oe),l(L,re),l(re,le),l(L,Pe),l(L,ie),l(ie,Ve),l(t,ye),l(t,q),l(q,be),l(be,J),me(oe,J,null),l(J,F),l(t,Me),l(t,$e),l($e,x),l(x,C),l(C,ce),l(ce,Re),me(xe,ce,null),Ke=!0},p:ue,i(te){Ke||(B(oe.$$.fragment,te),B(xe.$$.fragment,te),Ke=!0)},o(te){G(oe.$$.fragment,te),G(xe.$$.fragment,te),Ke=!1},d(te){te&&i(e),ge(oe),ge(xe)}}}class Ts extends Te{constructor(e){super(),Ae(this,e,null,ks,Ne,{})}}function St(c){let e,t=c[1].message+"",a,r;return{c(){e=h("div"),a=N(t),this.h()},l(n){e=v(n,"DIV",{class:!0});var o=u(e);a=D(o,t),o.forEach(i),this.h()},h(){s(e,"class",r=W(`fixed inset-x-0 ${c[0]?"top-0":"bottom-0"} toast-panel text-white text-center py-2 ${c[1].type}`)+" svelte-3oms0v")},m(n,o){Z(n,e,o),l(e,a)},p(n,o){o&2&&t!==(t=n[1].message+"")&&jt(a,t),o&3&&r!==(r=W(`fixed inset-x-0 ${n[0]?"top-0":"bottom-0"} toast-panel text-white text-center py-2 ${n[1].type}`)+" svelte-3oms0v")&&s(e,"class",r)},d(n){n&&i(e)}}}function As(c){let e,t=c[1].visible&&St(c);return{c(){t&&t.c(),e=yt()},l(a){t&&t.l(a),e=yt()},m(a,r){t&&t.m(a,r),Z(a,e,r)},p(a,[r]){a[1].visible?t?t.p(a,r):(t=St(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:ue,o:ue,d(a){t&&t.d(a),a&&i(e)}}}function Ns(c,e,t){let a;Nt(c,ts,o=>t(1,a=o));let r=!1;function n(){t(0,r=window.pageYOffset>0)}return Dt(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)})),[r,a]}class Ds extends Te{constructor(e){super(),Ae(this,e,Ns,As,Ne,{})}}function Os(c){let e,t,a,r,n,o,d;return{c(){e=h("div"),t=h("div"),a=h("div"),r=H("svg"),n=H("path"),this.h()},l(g){e=v(g,"DIV",{class:!0});var f=u(e);t=v(f,"DIV",{class:!0});var m=u(t);a=v(m,"DIV",{class:!0});var _=u(a);r=j(_,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0});var p=u(r);n=j(p,"path",{d:!0}),u(n).forEach(i),p.forEach(i),_.forEach(i),m.forEach(i),f.forEach(i),this.h()},h(){s(n,"d","M68.8457 0C43.0009 4.21054 19.8233 14.9859 0.331561 30.5217L0.264282 30.6627V129.685L68.7784 187.97L136.528 129.685L136.543 30.6204C117.335 15.7049 94.1282 4.14474 68.8457 0ZM82.388 145.014C82.388 145.503 82.0804 145.992 81.5806 146.114L68.7784 150.329C68.5285 150.39 68.2786 150.39 68.0287 150.329L55.2265 146.114C54.7267 145.931 54.4143 145.503 54.4143 145.014V140.738C54.4143 140.31 54.6642 139.883 55.039 139.7L67.8413 133.102C68.2161 132.919 68.591 132.919 68.9658 133.102L81.768 139.7C82.1429 139.883 82.388 140.31 82.388 140.738V145.014ZM106.464 97.9137C106.464 98.3414 106.214 98.769 105.777 98.9523L96.6607 103.534C96.036 103.84 95.8486 104.573 96.1609 105.122L105.027 121.189C105.277 121.678 105.215 122.228 104.84 122.594L89.7262 137.134C89.2889 137.561 88.6641 137.561 88.1644 137.256L70.9313 125.099C70.369 124.671 70.2441 123.877 70.7439 123.327L84.4208 108.421C85.2329 107.505 84.2958 106.161 83.1713 106.527L68.7447 111.109C68.4948 111.17 68.2449 111.17 67.9951 111.109L53.6358 106.527C52.4488 106.161 51.5742 107.566 52.3863 108.421L66.0584 123.327C66.5582 123.877 66.4332 124.671 65.871 125.099L48.6379 137.256C48.1381 137.561 47.5134 137.561 47.0761 137.134L31.9671 122.533C31.5923 122.167 31.5298 121.617 31.7797 121.128L40.6461 105.061C40.9585 104.45 40.7086 103.778 40.1463 103.473L31.03 98.8912C30.6552 98.7079 30.3428 98.2803 30.3428 97.8526V65.8413C30.3428 64.9249 31.4049 64.314 32.217 64.8639L39.709 69.8122C40.0214 70.0565 40.2088 70.362 40.2088 70.7896L40.2713 79.0368C40.2713 79.4034 40.4587 79.7699 40.7711 80.0143L51.7616 87.5284C52.5737 88.0782 53.6983 87.4673 53.6358 86.4898L52.9486 71.9503C52.9486 71.5838 52.7612 71.2173 52.4488 71.034L30.8426 56.5556C30.5302 56.3112 30.3428 55.9447 30.3428 55.5781V48.4305C30.3428 48.1862 30.4053 47.8807 30.5927 47.6975L38.3971 38.0452C38.7094 37.6176 39.2717 37.4954 39.7715 37.6786L67.9326 47.8807C68.1825 48.0029 68.4948 48.0029 68.7447 47.8807L96.9106 37.6786C97.4104 37.4954 97.9679 37.6786 98.2802 38.0452L106.089 47.6975C106.277 47.8807 106.339 48.1862 106.339 48.4305V55.5781C106.339 55.9447 106.152 56.3112 105.84 56.5556L84.2333 71.034C84.0459 71.2783 83.8585 71.6449 83.8585 72.0114L83.1713 86.5509C83.1088 87.5284 84.2333 88.1393 85.0455 87.5895L96.036 80.0753C96.3484 79.831 96.5358 79.5255 96.5358 79.0979L96.5983 70.8507C96.5983 70.4842 96.7857 70.1176 97.098 69.8733L104.59 64.9249C105.402 64.3751 106.464 64.9249 106.464 65.9024V97.9137Z"),s(r,"xmlns","http://www.w3.org/2000/svg"),s(r,"class",o=W(`pulse-color pusle-spin ${c[0]}`)+" svelte-mws7rs"),s(r,"fill","currentColor"),s(r,"viewBox","0 0 137 188"),s(a,"class","relative"),s(t,"class",d=W(`${c[0]} flex justify-center items-center h-screen`)+" svelte-mws7rs"),s(e,"class","flex justify-center items-center h-screen")},m(g,f){Z(g,e,f),l(e,t),l(t,a),l(a,r),l(r,n)},p(g,[f]){f&1&&o!==(o=W(`pulse-color pusle-spin ${g[0]}`)+" svelte-mws7rs")&&s(r,"class",o),f&1&&d!==(d=W(`${g[0]} flex justify-center items-center h-screen`)+" svelte-mws7rs")&&s(t,"class",d)},i:ue,o:ue,d(g){g&&i(e)}}}function Ps(c,e,t){let{className:a=""}=e;return c.$$set=r=>{"className"in r&&t(0,a=r.className)},[a]}class Vs extends Te{constructor(e){super(),Ae(this,e,Ps,Os,Ne,{className:0})}}function kt(c){let e,t;return e=new Vs({}),{c(){he(e.$$.fragment)},l(a){ve(e.$$.fragment,a)},m(a,r){me(e,a,r),t=!0},i(a){t||(B(e.$$.fragment,a),t=!0)},o(a){G(e.$$.fragment,a),t=!1},d(a){ge(e,a)}}}function Ms(c){let e,t,a,r,n,o,d,g,f,m;t=new Ls({});const _=c[3].default,p=Rt(_,c,c[2],null);o=new Ds({});let b=c[1]&&kt();return f=new Ts({}),{c(){e=h("div"),he(t.$$.fragment),a=S(),r=h("main"),p&&p.c(),n=S(),he(o.$$.fragment),d=S(),b&&b.c(),g=S(),he(f.$$.fragment),this.h()},l(w){e=v(w,"DIV",{class:!0});var y=u(e);ve(t.$$.fragment,y),a=k(y),r=v(y,"MAIN",{class:!0});var I=u(r);p&&p.l(I),I.forEach(i),n=k(y),ve(o.$$.fragment,y),d=k(y),b&&b.l(y),g=k(y),ve(f.$$.fragment,y),y.forEach(i),this.h()},h(){s(r,"class","mb-auto"),s(e,"class","flex flex-col h-screen justify-between")},m(w,y){Z(w,e,y),me(t,e,null),l(e,a),l(e,r),p&&p.m(r,null),l(e,n),me(o,e,null),l(e,d),b&&b.m(e,null),l(e,g),me(f,e,null),m=!0},p(w,[y]){p&&p.p&&(!m||y&4)&&Ut(p,_,w,w[2],m?Ft(_,w[2],y,null):zt(w[2]),null),w[1]?b?y&2&&B(b,1):(b=kt(),b.c(),B(b,1),b.m(e,g)):b&&(Tt(),G(b,1,1,()=>{b=null}),At())},i(w){m||(B(t.$$.fragment,w),B(p,w),B(o.$$.fragment,w),B(b),B(f.$$.fragment,w),m=!0)},o(w){G(t.$$.fragment,w),G(p,w),G(o.$$.fragment,w),G(b),G(f.$$.fragment,w),m=!1},d(w){w&&i(e),ge(t),p&&p.d(w),ge(o),b&&b.d(),ge(f)}}}function Ks(c,e,t){let a,r=ue,n=()=>(r(),r=Wt(g,f=>t(1,a=f)),g);c.$$.on_destroy.push(()=>r());let{$$slots:o={},$$scope:d}=e;const g=Pt(!1);return n(),c.$$set=f=>{"$$scope"in f&&t(2,d=f.$$scope)},[g,a,d,o]}class Us extends Te{constructor(e){super(),Ae(this,e,Ks,Ms,Ne,{isLoading:0})}get isLoading(){return this.$$.ctx[0]}}export{Vs as L,Us as a,at as b};
