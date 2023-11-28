import{S as Xe,i as Je,s as Ze,a0 as qa,a1 as za,m as u,h as i,n as l,T as Wa,p as Te,b as $,G as s,L as j,H as ae,e as Ge,k as c,q as P,a as N,l as m,r as A,c as S,U as bt,a6 as kt,Q as Dt,P as Ga,N as fa,R as wt,o as yt,J as Rt,K as It,M as Ot,u as da,O as Lt,v as Pt,d as Q,f as At,g as X,w as Ft,y as De,z as we,$ as We,A as ye,B as Pe}from"../chunks/index.85206748.js";import{r as Mt}from"../chunks/index.d7eb2526.js";import{M as Vt}from"../chunks/manager-gameweeks.25472b2a.js";import{b as Ut,L as jt,a as xt}from"../chunks/Layout.bf9e7437.js";import{w as qt}from"../chunks/index.b378d913.js";import{t as Qe}from"../chunks/toast-store.55f7539f.js";import{A as zt,i as Wt,t as Ct,s as Gt}from"../chunks/team-store.fa9fd22b.js";import{i as ua}from"../chunks/global-stores.db6c0769.js";function Bt(){const{subscribe:r,set:e,update:a}=qt(null);async function t(){let o;return new Promise((_,v)=>{o=Ut.subscribe(h=>{h.identity&&_(h.identity)})}).then(_=>(o(),zt.createActor(Wt,"bkyz2-fmaaa-aaaaa-qaaaq-cai",_)))}async function n(o){try{return await(await t()).updateDisplayName(o)}catch(_){throw console.error("Error updating username:",_),_}}async function d(o){try{return await(await t()).updateFavouriteTeam(o)}catch(_){throw console.error("Error updating favourite team:",_),_}}async function f(){try{const _=await(await t()).getProfileDTO();return e(_),_}catch(o){throw console.error("Error getting profile:",o),o}}async function p(o){try{if(o.size>1e3*1024)return null;const v=new FileReader;v.readAsArrayBuffer(o),v.onloadend=async()=>{const h=v.result,D=new Uint8Array(h);try{return await(await t()).updateProfilePicture(D)}catch(C){console.error(C)}}}catch(_){throw console.error("Error updating username:",_),_}}return{subscribe:r,updateUsername:n,updateFavouriteTeam:d,getProfile:f,updateProfilePicture:p}}const _a=Bt();function Ht(r){let e,a,t,n,d,f;return{c(){e=qa("svg"),a=qa("path"),t=qa("path"),this.h()},l(p){e=za(p,"svg",{xmlns:!0,"aria-hidden":!0,class:!0,fill:!0,viewBox:!0,style:!0});var o=u(e);a=za(o,"path",{d:!0}),u(a).forEach(i),t=za(o,"path",{d:!0}),u(t).forEach(i),o.forEach(i),this.h()},h(){l(a,"d","M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"),l(t,"d","M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-9zM2 2.5A1.5 1.5 0 0 1 3.5 1h9A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5v-10zm9.5 3A1.5 1.5 0 0 1 13 7h1.5V3.5a1.5 1.5 0 0 0-1.5-1.5H9V4a1.5 1.5 0 0 1 1.5 1.5v1zm0 1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1z"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"aria-hidden","true"),l(e,"class",n=Wa(r[0])+" svelte-1qfim5c"),l(e,"fill","currentColor"),l(e,"viewBox","0 0 16 16"),Te(e,"--hover-color",r[3]),Te(e,"cursor","'pointer'")},m(p,o){$(p,e,o),s(e,a),s(e,t),d||(f=j(e,"click",r[4]),d=!0)},p(p,[o]){o&1&&n!==(n=Wa(p[0])+" svelte-1qfim5c")&&l(e,"class",n),o&8&&Te(e,"--hover-color",p[3])},i:ae,o:ae,d(p){p&&i(e),d=!1,f()}}}function Kt(r,e,a){let{className:t=""}=e,{principalId:n=""}=e,{onClick:d}=e,{hoverColor:f="red"}=e;const p=()=>d(n);return r.$$set=o=>{"className"in o&&a(0,t=o.className),"principalId"in o&&a(1,n=o.principalId),"onClick"in o&&a(2,d=o.onClick),"hoverColor"in o&&a(3,f=o.hoverColor)},[t,n,d,f,p]}class Yt extends Xe{constructor(e){super(),Je(this,e,Kt,Ht,Ze,{className:0,principalId:1,onClick:2,hoverColor:3})}}function Et(r){let e,a,t,n,d,f,p,o,_,v,h,D,C,x,W;return{c(){e=c("div"),a=c("div"),t=c("div"),n=c("h3"),d=P("Update Username"),f=N(),p=c("form"),o=c("div"),_=c("input"),v=N(),h=c("div"),D=c("button"),C=P("Update"),this.h()},l(g){e=m(g,"DIV",{class:!0});var w=u(e);a=m(w,"DIV",{class:!0});var R=u(a);t=m(R,"DIV",{class:!0});var b=u(t);n=m(b,"H3",{class:!0});var F=u(n);d=A(F,"Update Username"),F.forEach(i),f=S(b),p=m(b,"FORM",{});var G=u(p);o=m(G,"DIV",{class:!0});var I=u(o);_=m(I,"INPUT",{type:!0,class:!0,placeholder:!0}),I.forEach(i),v=S(G),h=m(G,"DIV",{class:!0});var k=u(h);D=m(k,"BUTTON",{type:!0,class:!0});var T=u(D);C=A(T,"Update"),T.forEach(i),k.forEach(i),G.forEach(i),b.forEach(i),R.forEach(i),w.forEach(i),this.h()},h(){l(n,"class","text-lg leading-6 font-medium"),l(_,"type","text"),l(_,"class","w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"),l(_,"placeholder","New Username"),l(o,"class","mt-4"),l(D,"type","submit"),l(D,"class","px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md text-white"),l(h,"class","mt-4"),l(t,"class","mt-3 text-center"),l(a,"class","relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"),l(e,"class","fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop svelte-18qswye")},m(g,w){$(g,e,w),s(e,a),s(a,t),s(t,n),s(n,d),s(t,f),s(t,p),s(p,o),s(o,_),bt(_,r[0]),s(p,v),s(p,h),s(h,D),s(D,C),x||(W=[j(_,"input",r[6]),j(p,"submit",kt(r[3])),j(a,"click",Dt(r[5])),j(a,"keydown",r[4]),j(e,"click",function(){Ga(r[2])&&r[2].apply(this,arguments)}),j(e,"keydown",r[4])],x=!0)},p(g,w){r=g,w&1&&_.value!==r[0]&&bt(_,r[0])},d(g){g&&i(e),x=!1,fa(W)}}}function $t(r){let e,a=r[1]&&Et(r);return{c(){a&&a.c(),e=Ge()},l(t){a&&a.l(t),e=Ge()},m(t,n){a&&a.m(t,n),$(t,e,n)},p(t,[n]){t[1]?a?a.p(t,n):(a=Et(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:ae,o:ae,d(t){a&&a.d(t),t&&i(e)}}}function Qt(r,e,a){let{showModal:t}=e,{closeModal:n}=e,{newUsername:d}=e;async function f(){ua.set(!0);try{await _a.updateUsername(d)}catch(v){Qe.show("Error updating username.","error"),console.error("Error updating username:",v)}ua.set(!0),n()}function p(v){!(v.target instanceof HTMLInputElement)&&v.key==="Escape"&&n()}function o(v){wt.call(this,r,v)}function _(){d=this.value,a(0,d)}return r.$$set=v=>{"showModal"in v&&a(1,t=v.showModal),"closeModal"in v&&a(2,n=v.closeModal),"newUsername"in v&&a(0,d=v.newUsername)},[d,t,n,f,p,o,_]}class Xt extends Xe{constructor(e){super(),Je(this,e,Qt,$t,Ze,{showModal:1,closeModal:2,newUsername:0})}}function Nt(r,e,a){const t=r.slice();return t[9]=e[a],t}function St(r){let e,a,t,n,d,f,p,o,_,v,h,D,C,x,W,g,w,R,b,F,G,I,k,T,M,B,q=r[3],O=[];for(let L=0;L<q.length;L+=1)O[L]=Tt(Nt(r,q,L));return{c(){e=c("div"),a=c("div"),t=c("div"),n=c("h3"),d=P("Update Favourite Team"),f=N(),p=c("div"),o=c("select"),_=c("option"),v=P("Select Team");for(let L=0;L<O.length;L+=1)O[L].c();h=N(),D=c("div"),C=c("p"),x=P("Warning"),W=N(),g=c("p"),w=P("You can only set your favourite team once per season."),R=N(),b=c("div"),F=c("button"),G=P("Cancel"),I=N(),k=c("button"),T=P("Use"),this.h()},l(L){e=m(L,"DIV",{class:!0});var z=u(e);a=m(z,"DIV",{class:!0});var y=u(a);t=m(y,"DIV",{class:!0});var Y=u(t);n=m(Y,"H3",{class:!0});var J=u(n);d=A(J,"Update Favourite Team"),J.forEach(i),f=S(Y),p=m(Y,"DIV",{class:!0});var te=u(p);o=m(te,"SELECT",{class:!0});var se=u(o);_=m(se,"OPTION",{});var Ae=u(_);v=A(Ae,"Select Team"),Ae.forEach(i);for(let ge=0;ge<O.length;ge+=1)O[ge].l(se);se.forEach(i),te.forEach(i),Y.forEach(i),h=S(y),D=m(y,"DIV",{class:!0,role:!0});var H=u(D);C=m(H,"P",{class:!0});var Ce=u(C);x=A(Ce,"Warning"),Ce.forEach(i),W=S(H),g=m(H,"P",{class:!0});var he=u(g);w=A(he,"You can only set your favourite team once per season."),he.forEach(i),H.forEach(i),R=S(y),b=m(y,"DIV",{class:!0});var re=u(b);F=m(re,"BUTTON",{class:!0});var Z=u(F);G=A(Z,"Cancel"),Z.forEach(i),I=S(re),k=m(re,"BUTTON",{class:!0});var ke=u(k);T=A(ke,"Use"),ke.forEach(i),re.forEach(i),y.forEach(i),z.forEach(i),this.h()},h(){l(n,"class","text-lg leading-6 font-medium mb-2"),_.__value=0,_.value=_.__value,l(o,"class","w-full p-2 rounded-md fpl-dropdown"),r[0]===void 0&&Rt(()=>r[7].call(o)),l(p,"class","w-full border border-gray-500 mt-4 mb-2"),l(t,"class","mt-3 text-center"),l(C,"class","font-bold text-sm"),l(g,"class","font-bold text-xs"),l(D,"class","bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-1 mt-4"),l(D,"role","alert"),l(F,"class","px-4 py-2 fpl-cancel-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"),l(k,"class",Wa("px-4 py-2 fpl-purple-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300")+" svelte-18qswye"),l(b,"class","items-center py-3 flex space-x-4"),l(a,"class","relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"),l(e,"class","fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop svelte-18qswye")},m(L,z){$(L,e,z),s(e,a),s(a,t),s(t,n),s(n,d),s(t,f),s(t,p),s(p,o),s(o,_),s(_,v);for(let y=0;y<O.length;y+=1)O[y]&&O[y].m(o,null);It(o,r[0],!0),s(a,h),s(a,D),s(D,C),s(C,x),s(D,W),s(D,g),s(g,w),s(a,R),s(a,b),s(b,F),s(F,G),s(b,I),s(b,k),s(k,T),M||(B=[j(o,"change",r[7]),j(F,"click",function(){Ga(r[2])&&r[2].apply(this,arguments)}),j(k,"click",r[4]),j(a,"click",Dt(r[6])),j(a,"keydown",r[5]),j(e,"click",function(){Ga(r[2])&&r[2].apply(this,arguments)}),j(e,"keydown",r[5])],M=!0)},p(L,z){if(r=L,z&8){q=r[3];let y;for(y=0;y<q.length;y+=1){const Y=Nt(r,q,y);O[y]?O[y].p(Y,z):(O[y]=Tt(Y),O[y].c(),O[y].m(o,null))}for(;y<O.length;y+=1)O[y].d(1);O.length=q.length}z&9&&It(o,r[0])},d(L){L&&i(e),Ot(O,L),M=!1,fa(B)}}}function Tt(r){let e,a=r[9].friendlyName+"",t,n;return{c(){e=c("option"),t=P(a),this.h()},l(d){e=m(d,"OPTION",{});var f=u(e);t=A(f,a),f.forEach(i),this.h()},h(){e.__value=n=r[9].id,e.value=e.__value},m(d,f){$(d,e,f),s(e,t)},p(d,f){f&8&&a!==(a=d[9].friendlyName+"")&&da(t,a),f&8&&n!==(n=d[9].id)&&(e.__value=n,e.value=e.__value)},d(d){d&&i(e)}}}function Jt(r){let e,a=r[1]&&St(r);return{c(){a&&a.c(),e=Ge()},l(t){a&&a.l(t),e=Ge()},m(t,n){a&&a.m(t,n),$(t,e,n)},p(t,[n]){t[1]?a?a.p(t,n):(a=St(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:ae,o:ae,d(t){a&&a.d(t),t&&i(e)}}}function Zt(r,e,a){let{showModal:t}=e,{closeModal:n}=e,{newFavouriteTeam:d}=e,f;Ct.subscribe(h=>{a(3,f=h)}),yt(async()=>{});async function p(){ua.set(!0);try{await _a.updateFavouriteTeam(d)}catch(h){Qe.show("Error updating favourite team.","error"),console.error("Error updating favourite team:",h)}ua.set(!1),n()}function o(h){!(h.target instanceof HTMLInputElement)&&h.key==="Escape"&&n()}function _(h){wt.call(this,r,h)}function v(){d=Lt(this),a(0,d),a(3,f)}return r.$$set=h=>{"showModal"in h&&a(1,t=h.showModal),"closeModal"in h&&a(2,n=h.closeModal),"newFavouriteTeam"in h&&a(0,d=h.newFavouriteTeam)},[d,t,n,f,p,o,_,v]}class es extends Xe{constructor(e){super(),Je(this,e,Zt,Jt,Ze,{showModal:1,closeModal:2,newFavouriteTeam:0})}}function as(r){let e,a,t,n,d,f,p,o,_,v,h,D,C,x,W,g,w,R,b,F,G,I,k,T=r[1].displayName+"",M,B,q,O,L,z,y,Y,J,te=r[0].find(r[16])?.friendlyName+"",se,Ae,H,Ce,he,re,Z,ke,ge,Re,pa,va,Oe,ha,ga,le,Le,Be=r[1].principalName+"",ea,ba,oe,Ia,Fe,Me,Ve,K,ne,be,Ba,Ea,ie,Ue,Na,Sa,He,Ta,Da,ce,Ie,Ha,wa,me,je,ya,Pa,Ke,Aa,Ca,de,Ee,Ka,ka,ue,xe,Ra,Oa,Ye,La,Fa,_e,Ne,Ya,Ma,fe,qe,Va,Ua,$e,ja,ee,xa,$a;return e=new Xt({props:{newUsername:r[1].displayName,showModal:r[3],closeModal:r[9]}}),t=new es({props:{newFavouriteTeam:r[1].favouriteTeamId,showModal:r[4],closeModal:r[11]}}),oe=new Yt({props:{onClick:r[12],principalId:r[1].principalName,className:"ml-2 w-4 h-4"}}),{c(){De(e.$$.fragment),a=N(),De(t.$$.fragment),n=N(),d=c("div"),f=c("div"),p=c("div"),o=c("div"),_=c("img"),h=N(),D=c("div"),C=c("button"),x=P("Upload Photo"),W=N(),g=c("input"),w=N(),R=c("div"),b=c("div"),F=c("p"),G=P("Display Name:"),I=N(),k=c("h2"),M=P(T),B=N(),q=c("button"),O=P("Update"),L=N(),z=c("p"),y=P("Favourite Team:"),Y=N(),J=c("h2"),se=P(te),Ae=N(),H=c("button"),Ce=P("Update"),re=N(),Z=c("p"),ke=P("Joined:"),ge=N(),Re=c("h2"),pa=P("August 2023"),va=N(),Oe=c("p"),ha=P("Principal:"),ga=N(),le=c("div"),Le=c("h2"),ea=P(Be),ba=N(),De(oe.$$.fragment),Ia=N(),Fe=c("div"),Me=c("div"),Ve=c("div"),K=c("div"),ne=c("div"),be=c("img"),Ea=N(),ie=c("div"),Ue=c("p"),Na=P("ICP"),Sa=N(),He=c("p"),Ta=P("0.00 ICP"),Da=N(),ce=c("div"),Ie=c("img"),wa=N(),me=c("div"),je=c("p"),ya=P("FPL"),Pa=N(),Ke=c("p"),Aa=P("0.00 FPL"),Ca=N(),de=c("div"),Ee=c("img"),ka=N(),ue=c("div"),xe=c("p"),Ra=P("ckBTC"),Oa=N(),Ye=c("p"),La=P("0.00 ckBTC"),Fa=N(),_e=c("div"),Ne=c("img"),Ma=N(),fe=c("div"),qe=c("p"),Va=P("ckETH"),Ua=N(),$e=c("p"),ja=P("0.00 ckETH"),this.h()},l(E){we(e.$$.fragment,E),a=S(E),we(t.$$.fragment,E),n=S(E),d=m(E,"DIV",{class:!0});var V=u(d);f=m(V,"DIV",{class:!0});var pe=u(f);p=m(pe,"DIV",{class:!0});var ze=u(p);o=m(ze,"DIV",{class:!0});var Se=u(o);_=m(Se,"IMG",{src:!0,alt:!0,class:!0}),h=S(Se),D=m(Se,"DIV",{class:!0});var aa=u(D);C=m(aa,"BUTTON",{class:!0});var Qa=u(C);x=A(Qa,"Upload Photo"),Qa.forEach(i),W=S(aa),g=m(aa,"INPUT",{type:!0,id:!0,accept:!0,style:!0,class:!0}),aa.forEach(i),Se.forEach(i),ze.forEach(i),w=S(pe),R=m(pe,"DIV",{class:!0});var Xa=u(R);b=m(Xa,"DIV",{class:!0});var U=u(b);F=m(U,"P",{class:!0});var Ja=u(F);G=A(Ja,"Display Name:"),Ja.forEach(i),I=S(U),k=m(U,"H2",{class:!0});var Za=u(k);M=A(Za,T),Za.forEach(i),B=S(U),q=m(U,"BUTTON",{class:!0});var et=u(q);O=A(et,"Update"),et.forEach(i),L=S(U),z=m(U,"P",{class:!0});var at=u(z);y=A(at,"Favourite Team:"),at.forEach(i),Y=S(U),J=m(U,"H2",{class:!0});var tt=u(J);se=A(tt,te),tt.forEach(i),Ae=S(U),H=m(U,"BUTTON",{class:!0});var st=u(H);Ce=A(st,"Update"),st.forEach(i),re=S(U),Z=m(U,"P",{class:!0});var rt=u(Z);ke=A(rt,"Joined:"),rt.forEach(i),ge=S(U),Re=m(U,"H2",{class:!0});var lt=u(Re);pa=A(lt,"August 2023"),lt.forEach(i),va=S(U),Oe=m(U,"P",{class:!0});var ot=u(Oe);ha=A(ot,"Principal:"),ot.forEach(i),ga=S(U),le=m(U,"DIV",{class:!0});var ta=u(le);Le=m(ta,"H2",{class:!0});var nt=u(Le);ea=A(nt,Be),nt.forEach(i),ba=S(ta),we(oe.$$.fragment,ta),ta.forEach(i),U.forEach(i),Xa.forEach(i),pe.forEach(i),Ia=S(V),Fe=m(V,"DIV",{class:!0});var it=u(Fe);Me=m(it,"DIV",{class:!0});var ct=u(Me);Ve=m(ct,"DIV",{class:!0});var mt=u(Ve);K=m(mt,"DIV",{class:!0});var ve=u(K);ne=m(ve,"DIV",{class:!0});var sa=u(ne);be=m(sa,"IMG",{src:!0,alt:!0,class:!0}),Ea=S(sa),ie=m(sa,"DIV",{class:!0});var ra=u(ie);Ue=m(ra,"P",{class:!0});var dt=u(Ue);Na=A(dt,"ICP"),dt.forEach(i),Sa=S(ra),He=m(ra,"P",{});var ut=u(He);Ta=A(ut,"0.00 ICP"),ut.forEach(i),ra.forEach(i),sa.forEach(i),Da=S(ve),ce=m(ve,"DIV",{class:!0});var la=u(ce);Ie=m(la,"IMG",{src:!0,alt:!0,class:!0}),wa=S(la),me=m(la,"DIV",{class:!0});var oa=u(me);je=m(oa,"P",{class:!0});var _t=u(je);ya=A(_t,"FPL"),_t.forEach(i),Pa=S(oa),Ke=m(oa,"P",{});var ft=u(Ke);Aa=A(ft,"0.00 FPL"),ft.forEach(i),oa.forEach(i),la.forEach(i),Ca=S(ve),de=m(ve,"DIV",{class:!0});var na=u(de);Ee=m(na,"IMG",{src:!0,alt:!0,class:!0}),ka=S(na),ue=m(na,"DIV",{class:!0});var ia=u(ue);xe=m(ia,"P",{class:!0});var pt=u(xe);Ra=A(pt,"ckBTC"),pt.forEach(i),Oa=S(ia),Ye=m(ia,"P",{});var vt=u(Ye);La=A(vt,"0.00 ckBTC"),vt.forEach(i),ia.forEach(i),na.forEach(i),Fa=S(ve),_e=m(ve,"DIV",{class:!0});var ca=u(_e);Ne=m(ca,"IMG",{src:!0,alt:!0,class:!0}),Ma=S(ca),fe=m(ca,"DIV",{class:!0});var ma=u(fe);qe=m(ma,"P",{class:!0});var ht=u(qe);Va=A(ht,"ckETH"),ht.forEach(i),Ua=S(ma),$e=m(ma,"P",{});var gt=u($e);ja=A(gt,"0.00 ckETH"),gt.forEach(i),ma.forEach(i),ca.forEach(i),ve.forEach(i),mt.forEach(i),ct.forEach(i),it.forEach(i),V.forEach(i),this.h()},h(){We(_.src,v=r[2])||l(_,"src",v),l(_,"alt","Profile"),l(_,"class","w-48 md:w-80 mb-1 rounded-lg"),l(C,"class","btn-file-upload fpl-button svelte-10w7xjk"),l(g,"type","file"),l(g,"id","profile-image"),l(g,"accept","image/*"),Te(g,"opacity","0"),Te(g,"position","absolute"),Te(g,"left","0"),Te(g,"top","0"),l(g,"class","svelte-10w7xjk"),l(D,"class","file-upload-wrapper mt-4 svelte-10w7xjk"),l(o,"class","group"),l(p,"class","w-full md:w-auto px-2 ml-4 md:ml-0"),l(F,"class","text-xs mb-2"),l(k,"class","text-2xl font-bold mb-2"),l(q,"class","p-2 px-4 rounded fpl-button"),l(z,"class","text-xs mb-2 mt-4"),l(J,"class","text-2xl font-bold mb-2"),l(H,"class","p-2 px-4 rounded fpl-button"),H.disabled=he=r[6]>1&&r[1].favouriteTeamId>0,l(Z,"class","text-xs mb-2 mt-4"),l(Re,"class","text-2xl font-bold mb-2"),l(Oe,"class","text-xs mb-2 mt-4"),l(Le,"class","text-xs font-bold"),l(le,"class","flex items-center"),l(b,"class","ml-4 p-4 rounded-lg"),l(R,"class","w-full md:w-3/4 px-2 mb-4"),l(f,"class","flex flex-wrap"),We(be.src,Ba="ICPCoin.png")||l(be,"src",Ba),l(be,"alt","ICP"),l(be,"class","h-12 w-12"),l(Ue,"class","font-bold"),l(ie,"class","ml-4"),l(ne,"class","flex items-center p-4 rounded-lg shadow-md border border-gray-700"),We(Ie.src,Ha="FPLCoin.png")||l(Ie,"src",Ha),l(Ie,"alt","FPL"),l(Ie,"class","h-12 w-12"),l(je,"class","font-bold"),l(me,"class","ml-4"),l(ce,"class","flex items-center p-4 rounded-lg shadow-md border border-gray-700"),We(Ee.src,Ka="ckBTCCoin.png")||l(Ee,"src",Ka),l(Ee,"alt","ICP"),l(Ee,"class","h-12 w-12"),l(xe,"class","font-bold"),l(ue,"class","ml-4"),l(de,"class","flex items-center p-4 rounded-lg shadow-md border border-gray-700"),We(Ne.src,Ya="ckETHCoin.png")||l(Ne,"src",Ya),l(Ne,"alt","ICP"),l(Ne,"class","h-12 w-12"),l(qe,"class","font-bold"),l(fe,"class","ml-4"),l(_e,"class","flex items-center p-4 rounded-lg shadow-md border border-gray-700"),l(K,"class","grid grid-cols-1 md:grid-cols-4 gap-4"),l(Ve,"class","mt-4 px-2"),l(Me,"class","w-full px-2 mb-4"),l(Fe,"class","flex flex-wrap -mx-2 mt-4"),l(d,"class","container mx-auto p-4")},m(E,V){ye(e,E,V),$(E,a,V),ye(t,E,V),$(E,n,V),$(E,d,V),s(d,f),s(f,p),s(p,o),s(o,_),s(o,h),s(o,D),s(D,C),s(C,x),s(D,W),s(D,g),r[15](g),s(f,w),s(f,R),s(R,b),s(b,F),s(F,G),s(b,I),s(b,k),s(k,M),s(b,B),s(b,q),s(q,O),s(b,L),s(b,z),s(z,y),s(b,Y),s(b,J),s(J,se),s(b,Ae),s(b,H),s(H,Ce),s(b,re),s(b,Z),s(Z,ke),s(b,ge),s(b,Re),s(Re,pa),s(b,va),s(b,Oe),s(Oe,ha),s(b,ga),s(b,le),s(le,Le),s(Le,ea),s(le,ba),ye(oe,le,null),s(d,Ia),s(d,Fe),s(Fe,Me),s(Me,Ve),s(Ve,K),s(K,ne),s(ne,be),s(ne,Ea),s(ne,ie),s(ie,Ue),s(Ue,Na),s(ie,Sa),s(ie,He),s(He,Ta),s(K,Da),s(K,ce),s(ce,Ie),s(ce,wa),s(ce,me),s(me,je),s(je,ya),s(me,Pa),s(me,Ke),s(Ke,Aa),s(K,Ca),s(K,de),s(de,Ee),s(de,ka),s(de,ue),s(ue,xe),s(xe,Ra),s(ue,Oa),s(ue,Ye),s(Ye,La),s(K,Fa),s(K,_e),s(_e,Ne),s(_e,Ma),s(_e,fe),s(fe,qe),s(qe,Va),s(fe,Ua),s(fe,$e),s($e,ja),ee=!0,xa||($a=[j(C,"click",r[13]),j(g,"change",r[14]),j(q,"click",r[8]),j(H,"click",r[10])],xa=!0)},p(E,V){const pe={};V&2&&(pe.newUsername=E[1].displayName),V&8&&(pe.showModal=E[3]),e.$set(pe);const ze={};V&2&&(ze.newFavouriteTeam=E[1].favouriteTeamId),V&16&&(ze.showModal=E[4]),t.$set(ze),(!ee||V&4&&!We(_.src,v=E[2]))&&l(_,"src",v),(!ee||V&2)&&T!==(T=E[1].displayName+"")&&da(M,T),(!ee||V&3)&&te!==(te=E[0].find(E[16])?.friendlyName+"")&&da(se,te),(!ee||V&66&&he!==(he=E[6]>1&&E[1].favouriteTeamId>0))&&(H.disabled=he),(!ee||V&2)&&Be!==(Be=E[1].principalName+"")&&da(ea,Be);const Se={};V&2&&(Se.principalId=E[1].principalName),oe.$set(Se)},i(E){ee||(X(e.$$.fragment,E),X(t.$$.fragment,E),X(oe.$$.fragment,E),ee=!0)},o(E){Q(e.$$.fragment,E),Q(t.$$.fragment,E),Q(oe.$$.fragment,E),ee=!1},d(E){Pe(e,E),E&&i(a),Pe(t,E),E&&i(n),E&&i(d),r[15](null),Pe(oe),xa=!1,fa($a)}}}function ts(r){let e,a;return e=new jt({}),{c(){De(e.$$.fragment)},l(t){we(e.$$.fragment,t)},m(t,n){ye(e,t,n),a=!0},p:ae,i(t){a||(X(e.$$.fragment,t),a=!0)},o(t){Q(e.$$.fragment,t),a=!1},d(t){Pe(e,t)}}}function ss(r){let e,a,t,n;const d=[ts,as],f=[];function p(o,_){return o[7]?0:1}return e=p(r),a=f[e]=d[e](r),{c(){a.c(),t=Ge()},l(o){a.l(o),t=Ge()},m(o,_){f[e].m(o,_),$(o,t,_),n=!0},p(o,[_]){let v=e;e=p(o),e===v?f[e].p(o,_):(Pt(),Q(f[v],1,1,()=>{f[v]=null}),At(),a=f[e],a?a.p(o,_):(a=f[e]=d[e](o),a.c()),X(a,1),a.m(t.parentNode,t))},i(o){n||(X(a),n=!0)},o(o){Q(a),n=!1},d(o){f[e].d(o),o&&i(t)}}}function rs(r,e,a){let t,n,d,f="profile_placeholder.png",p=!1,o=!1,_,v=1,h=!0;Ct.subscribe(I=>{a(0,t=I)}),Gt.subscribe(I=>{n=I}),yt(async()=>{try{const I=await _a.getProfile();if(a(1,d=I),d.profilePicture.length>0){const k=new Blob([new Uint8Array(d.profilePicture)]);a(2,f=URL.createObjectURL(k))}a(6,v=n?.activeGameweek??1)}catch(I){Qe.show("Error fetching profile detail.","error"),console.error("Error fetching profile detail:",I)}finally{a(7,h=!1)}});function D(){a(3,p=!0)}function C(){a(3,p=!1)}function x(){a(4,o=!0)}function W(){a(4,o=!1)}function g(I){navigator.clipboard.writeText(I).then(()=>{Qe.show("Copied!","success")})}function w(){_.click()}function R(I){const k=I.target;if(k.files&&k.files[0]){const T=k.files[0];if(T.size>1e3*1024){alert("File size exceeds 1000KB");return}b(T)}}async function b(I){try{await _a.updateProfilePicture(I)}catch(k){Qe.show("Error updating profile image","error"),console.error("Error updating profile image",k)}}function F(I){Ft[I?"unshift":"push"](()=>{_=I,a(5,_)})}return[t,d,f,p,o,_,v,h,D,C,x,W,g,w,R,F,I=>I.id===d.favouriteTeamId]}class ls extends Xe{constructor(e){super(),Je(this,e,rs,ss,Ze,{})}}function os(r){let e,a;return e=new Vt({props:{viewGameweekDetail:r[2]}}),{c(){De(e.$$.fragment)},l(t){we(e.$$.fragment,t)},m(t,n){ye(e,t,n),a=!0},p:ae,i(t){a||(X(e.$$.fragment,t),a=!0)},o(t){Q(e.$$.fragment,t),a=!1},d(t){Pe(e,t)}}}function ns(r){let e,a;return e=new ls({}),{c(){De(e.$$.fragment)},l(t){we(e.$$.fragment,t)},m(t,n){ye(e,t,n),a=!0},p:ae,i(t){a||(X(e.$$.fragment,t),a=!0)},o(t){Q(e.$$.fragment,t),a=!1},d(t){Pe(e,t)}}}function is(r){let e,a,t,n,d,f,p,o,_,v,h,D,C,x,W,g,w,R,b,F;const G=[ns,os],I=[];function k(T,M){return T[0]==="details"?0:T[0]==="gameweeks"?1:-1}return~(g=k(r))&&(w=I[g]=G[g](r)),{c(){e=c("div"),a=c("div"),t=c("ul"),n=c("li"),d=c("button"),f=P("Details"),_=N(),v=c("li"),h=c("button"),D=P("Gameweeks"),W=N(),w&&w.c(),this.h()},l(T){e=m(T,"DIV",{class:!0});var M=u(e);a=m(M,"DIV",{class:!0});var B=u(a);t=m(B,"UL",{class:!0});var q=u(t);n=m(q,"LI",{class:!0});var O=u(n);d=m(O,"BUTTON",{class:!0});var L=u(d);f=A(L,"Details"),L.forEach(i),O.forEach(i),_=S(q),v=m(q,"LI",{class:!0});var z=u(v);h=m(z,"BUTTON",{class:!0});var y=u(h);D=A(y,"Gameweeks"),y.forEach(i),z.forEach(i),q.forEach(i),W=S(B),w&&w.l(B),B.forEach(i),M.forEach(i),this.h()},h(){l(d,"class",p=`p-2 ${r[0]==="details"?"text-white":"text-gray-400"}`),l(n,"class",o=`mr-4 text-xs md:text-lg ${r[0]==="details"?"active-tab":""}`),l(h,"class",C=`p-2 ${r[0]==="gameweeks"?"text-white":"text-gray-400"}`),l(v,"class",x=`mr-4 text-xs md:text-lg ${r[0]==="gameweeks"?"active-tab":""}`),l(t,"class","flex rounded-lg bg-light-gray px-4 pt-2"),l(a,"class","bg-panel rounded-lg m-4"),l(e,"class","m-4")},m(T,M){$(T,e,M),s(e,a),s(a,t),s(t,n),s(n,d),s(d,f),s(t,_),s(t,v),s(v,h),s(h,D),s(a,W),~g&&I[g].m(a,null),R=!0,b||(F=[j(d,"click",r[3]),j(h,"click",r[4])],b=!0)},p(T,M){(!R||M&1&&p!==(p=`p-2 ${T[0]==="details"?"text-white":"text-gray-400"}`))&&l(d,"class",p),(!R||M&1&&o!==(o=`mr-4 text-xs md:text-lg ${T[0]==="details"?"active-tab":""}`))&&l(n,"class",o),(!R||M&1&&C!==(C=`p-2 ${T[0]==="gameweeks"?"text-white":"text-gray-400"}`))&&l(h,"class",C),(!R||M&1&&x!==(x=`mr-4 text-xs md:text-lg ${T[0]==="gameweeks"?"active-tab":""}`))&&l(v,"class",x);let B=g;g=k(T),g===B?~g&&I[g].p(T,M):(w&&(Pt(),Q(I[B],1,1,()=>{I[B]=null}),At()),~g?(w=I[g],w?w.p(T,M):(w=I[g]=G[g](T),w.c()),X(w,1),w.m(a,null)):w=null)},i(T){R||(X(w),R=!0)},o(T){Q(w),R=!1},d(T){T&&i(e),~g&&I[g].d(),b=!1,fa(F)}}}function cs(r){let e,a;return e=new xt({props:{$$slots:{default:[is]},$$scope:{ctx:r}}}),{c(){De(e.$$.fragment)},l(t){we(e.$$.fragment,t)},m(t,n){ye(e,t,n),a=!0},p(t,[n]){const d={};n&33&&(d.$$scope={dirty:n,ctx:t}),e.$set(d)},i(t){a||(X(e.$$.fragment,t),a=!0)},o(t){Q(e.$$.fragment,t),a=!1},d(t){Pe(e,t)}}}function ms(r,e,a){let t="details";function n(o){a(0,t=o)}function d(o,_){throw Mt(307,`/manager?id=${o}&gw=${_}`)}return[t,n,d,()=>n("details"),()=>n("gameweeks")]}class bs extends Xe{constructor(e){super(),Je(this,e,ms,cs,Ze,{})}}export{bs as component};
