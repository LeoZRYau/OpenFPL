var ls=Object.defineProperty;var cs=(r,a,e)=>a in r?ls(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e;var es=(r,a,e)=>(cs(r,typeof a!="symbol"?a+"":a,e),e);import{S as Ca,i as Pa,s as Ra,k as l,q as h,l as c,m,r as D,h as i,b as W,G as t,H as K,Q as he,R as De,n,P as ss,p as Te,L as x,e as Ha,a as N,c as E,_ as ts,$ as ms,Y as _s,V as Ce,N as Ba,Z as ds,y as ha,z as Da,U as Fa,A as Ta,g as ta,d as na,B as Aa,o as ps,v as fs,f as us}from"../chunks/index.b324a1dd.js";import{A as ns,i as os,T as Is}from"../chunks/TeamService.3585d717.js";import{a as vs,t as Ns,L as Es}from"../chunks/Layout.8d88a232.js";function Ss(r){let a,e;return{c(){a=l("h1"),e=h("gameweeks")},l(s){a=c(s,"H1",{});var o=m(a);e=D(o,"gameweeks"),o.forEach(i)},m(s,o){W(s,a,o),t(a,e)},p:K,i:K,o:K,d(s){s&&i(a)}}}class bs extends Ca{constructor(a){super(),Pa(this,a,null,Ss,Ra,{})}}function gs(r){let a,e,s,o,_,I;return{c(){a=he("svg"),e=he("path"),s=he("path"),this.h()},l(f){a=De(f,"svg",{xmlns:!0,"aria-hidden":!0,class:!0,fill:!0,viewBox:!0,style:!0});var p=m(a);e=De(p,"path",{d:!0}),m(e).forEach(i),s=De(p,"path",{d:!0}),m(s).forEach(i),p.forEach(i),this.h()},h(){n(e,"d","M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"),n(s,"d","M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-9zM2 2.5A1.5 1.5 0 0 1 3.5 1h9A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5v-10zm9.5 3A1.5 1.5 0 0 1 13 7h1.5V3.5a1.5 1.5 0 0 0-1.5-1.5H9V4a1.5 1.5 0 0 1 1.5 1.5v1zm0 1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1z"),n(a,"xmlns","http://www.w3.org/2000/svg"),n(a,"aria-hidden","true"),n(a,"class",o=ss(r[0])+" svelte-1qfim5c"),n(a,"fill","currentColor"),n(a,"viewBox","0 0 16 16"),Te(a,"--hover-color",r[3]),Te(a,"cursor","'pointer'")},m(f,p){W(f,a,p),t(a,e),t(a,s),_||(I=x(a,"click",r[4]),_=!0)},p(f,[p]){p&1&&o!==(o=ss(f[0])+" svelte-1qfim5c")&&n(a,"class",o),p&8&&Te(a,"--hover-color",f[3])},i:K,o:K,d(f){f&&i(a),_=!1,I()}}}function hs(r,a,e){let{className:s=""}=a,{principalId:o=""}=a,{onClick:_}=a,{hoverColor:I="red"}=a;const f=()=>_(o);return r.$$set=p=>{"className"in p&&e(0,s=p.className),"principalId"in p&&e(1,o=p.principalId),"onClick"in p&&e(2,_=p.onClick),"hoverColor"in p&&e(3,I=p.hoverColor)},[s,o,_,I,f]}class Ds extends Ca{constructor(a){super(),Pa(this,a,hs,gs,Ra,{className:0,principalId:1,onClick:2,hoverColor:3})}}class Ts{constructor(){es(this,"actor");this.actor=ns.createActor(os,"bkyz2-fmaaa-aaaaa-qaaaq-cai")}async actorFromIdentity(){let a;return new Promise((e,s)=>{a=vs.subscribe(o=>{o.identity&&(console.log(o.identity),e(o.identity))})}).then(e=>(a(),ns.createActor(os,"bkyz2-fmaaa-aaaaa-qaaaq-cai",e)))}async updateUsername(a){try{const s=await(await this.actorFromIdentity()).updateDisplayName(a);return console.log("result"),console.log(s),s}catch(e){throw console.error("Error updating username:",e),e}}}function rs(r){let a,e,s,o,_,I,f,p,g,A,u,d,P,R,k;return{c(){a=l("div"),e=l("div"),s=l("div"),o=l("h3"),_=h("Update Username"),I=N(),f=l("form"),p=l("div"),g=l("input"),A=N(),u=l("div"),d=l("button"),P=h("Update"),this.h()},l(v){a=c(v,"DIV",{class:!0});var b=m(a);e=c(b,"DIV",{class:!0});var w=m(e);s=c(w,"DIV",{class:!0});var L=m(s);o=c(L,"H3",{class:!0});var z=m(o);_=D(z,"Update Username"),z.forEach(i),I=E(L),f=c(L,"FORM",{});var M=m(f);p=c(M,"DIV",{class:!0});var y=m(p);g=c(y,"INPUT",{type:!0,class:!0,placeholder:!0}),y.forEach(i),A=E(M),u=c(M,"DIV",{class:!0});var U=m(u);d=c(U,"BUTTON",{type:!0,class:!0});var T=m(d);P=D(T,"Update"),T.forEach(i),U.forEach(i),M.forEach(i),L.forEach(i),w.forEach(i),b.forEach(i),this.h()},h(){n(o,"class","text-lg leading-6 font-medium"),n(g,"type","text"),n(g,"class","w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"),n(g,"placeholder","New Username"),n(p,"class","mt-4"),n(d,"type","submit"),n(d,"class","px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md text-white"),n(u,"class","mt-4"),n(s,"class","mt-3 text-center"),n(e,"class","relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"),n(a,"class","fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop svelte-18qswye")},m(v,b){W(v,a,b),t(a,e),t(e,s),t(s,o),t(o,_),t(s,I),t(s,f),t(f,p),t(p,g),ts(g,r[2]),t(f,A),t(f,u),t(u,d),t(d,P),R||(k=[x(g,"input",r[6]),x(f,"submit",ms(r[3])),x(e,"click",_s(r[5])),x(e,"keydown",r[4]),x(a,"click",function(){Ce(r[1])&&r[1].apply(this,arguments)}),x(a,"keydown",r[4])],R=!0)},p(v,b){r=v,b&4&&g.value!==r[2]&&ts(g,r[2])},d(v){v&&i(a),R=!1,Ba(k)}}}function As(r){let a,e=r[0]&&rs(r);return{c(){e&&e.c(),a=Ha()},l(s){e&&e.l(s),a=Ha()},m(s,o){e&&e.m(s,o),W(s,a,o)},p(s,[o]){s[0]?e?e.p(s,o):(e=rs(s),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},i:K,o:K,d(s){e&&e.d(s),s&&i(a)}}}function Cs(r,a,e){let{showModal:s}=a,{closeModal:o}=a,_=new Ts,I="";async function f(){await _.updateUsername(I),o()}function p(u){console.log(u),!(u.target instanceof HTMLInputElement)&&u.key==="Escape"&&o()}function g(u){ds.call(this,r,u)}function A(){I=this.value,e(2,I)}return r.$$set=u=>{"showModal"in u&&e(0,s=u.showModal),"closeModal"in u&&e(1,o=u.closeModal)},[s,o,I,f,p,g,A]}class Ps extends Ca{constructor(a){super(),Pa(this,a,Cs,As,Ra,{showModal:0,closeModal:1})}}function is(r){let a,e,s,o,_,I,f,p,g,A;return{c(){a=l("div"),e=l("div"),s=l("div"),o=l("h3"),_=h("Favourite team"),I=N(),f=l("p"),p=h("Update favourite tean"),this.h()},l(u){a=c(u,"DIV",{class:!0});var d=m(a);e=c(d,"DIV",{class:!0});var P=m(e);s=c(P,"DIV",{class:!0});var R=m(s);o=c(R,"H3",{class:!0});var k=m(o);_=D(k,"Favourite team"),k.forEach(i),I=E(R),f=c(R,"P",{});var v=m(f);p=D(v,"Update favourite tean"),v.forEach(i),R.forEach(i),P.forEach(i),d.forEach(i),this.h()},h(){n(o,"class","text-lg leading-6 font-medium"),n(s,"class","mt-3 text-center"),n(e,"class","relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"),n(a,"class","fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop svelte-18qswye")},m(u,d){W(u,a,d),t(a,e),t(e,s),t(s,o),t(o,_),t(s,I),t(s,f),t(f,p),g||(A=[x(a,"click",function(){Ce(r[1])&&r[1].apply(this,arguments)}),x(a,"keydown",function(){Ce(r[1])&&r[1].apply(this,arguments)})],g=!0)},p(u,d){r=u},d(u){u&&i(a),g=!1,Ba(A)}}}function Rs(r){let a,e=r[0]&&is(r);return{c(){e&&e.c(),a=Ha()},l(s){e&&e.l(s),a=Ha()},m(s,o){e&&e.m(s,o),W(s,a,o)},p(s,[o]){s[0]?e?e.p(s,o):(e=is(s),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},i:K,o:K,d(s){e&&e.d(s),s&&i(a)}}}function ys(r,a,e){let{showModal:s}=a,{closeModal:o}=a;return r.$$set=_=>{"showModal"in _&&e(0,s=_.showModal),"closeModal"in _&&e(1,o=_.closeModal)},[s,o]}class Os extends Ca{constructor(a){super(),Pa(this,a,ys,Rs,Ra,{showModal:0,closeModal:1})}}function Ls(r){let a,e,s,o,_,I,f,p,g,A,u,d,P,R,k,v,b,w,L,z,M,y,U,T,O,j,H,V,_a,da,G,$a,Ya,pa,Xa,Qa,fa,Za,Ja,B,ua,ae,ee,oa,se,Ia,va,Na,q,$,ra,Pe,te,Y,Ea,ne,oe,ya,re,ie,X,ia,Re,le,Q,Sa,ce,me,Oa,_e,de,Z,la,ye,pe,J,ba,fe,ue,La,Ie,ve,aa,ca,Oe,Ne,ea,ga,Ee,Se,wa,be,xa,ge,Le;return a=new Ps({props:{showModal:r[0],closeModal:r[3]}}),s=new Os({props:{showModal:r[1],closeModal:r[5]}}),oa=new Ds({props:{onClick:r[6],principalId:Ae,className:"ml-2 w-4 h-4"}}),{c(){ha(a.$$.fragment),e=N(),ha(s.$$.fragment),o=N(),_=l("div"),I=l("div"),f=l("div"),p=l("img"),A=N(),u=l("div"),d=l("div"),P=l("p"),R=h("Display Name:"),k=N(),v=l("h2"),b=h("Not Set"),w=N(),L=l("button"),z=h("Update"),M=N(),y=l("p"),U=h("Favourite Team:"),T=N(),O=l("h2"),j=h("Not Set"),H=N(),V=l("button"),_a=h("Update"),da=N(),G=l("p"),$a=h("Joined:"),Ya=N(),pa=l("h2"),Xa=h("August 2023"),Qa=N(),fa=l("p"),Za=h("Principal:"),Ja=N(),B=l("div"),ua=l("h2"),ae=h(Ae),ee=N(),ha(oa.$$.fragment),se=N(),Ia=l("div"),va=l("div"),Na=l("div"),q=l("div"),$=l("div"),ra=l("img"),te=N(),Y=l("div"),Ea=l("p"),ne=h("ICP"),oe=N(),ya=l("p"),re=h("0.00 ICP"),ie=N(),X=l("div"),ia=l("img"),le=N(),Q=l("div"),Sa=l("p"),ce=h("FPL"),me=N(),Oa=l("p"),_e=h("0.00 FPL"),de=N(),Z=l("div"),la=l("img"),pe=N(),J=l("div"),ba=l("p"),fe=h("ckBTC"),ue=N(),La=l("p"),Ie=h("0.00 ckBTC"),ve=N(),aa=l("div"),ca=l("img"),Ne=N(),ea=l("div"),ga=l("p"),Ee=h("ckETH"),Se=N(),wa=l("p"),be=h("0.00 ckETH"),this.h()},l(S){Da(a.$$.fragment,S),e=E(S),Da(s.$$.fragment,S),o=E(S),_=c(S,"DIV",{class:!0});var F=m(_);I=c(F,"DIV",{class:!0});var ma=m(I);f=c(ma,"DIV",{class:!0});var ka=m(f);p=c(ka,"IMG",{src:!0,alt:!0,class:!0}),ka.forEach(i),A=E(ma),u=c(ma,"DIV",{class:!0});var we=m(u);d=c(we,"DIV",{class:!0});var C=m(d);P=c(C,"P",{class:!0});var ke=m(P);R=D(ke,"Display Name:"),ke.forEach(i),k=E(C),v=c(C,"H2",{class:!0});var Fe=m(v);b=D(Fe,"Not Set"),Fe.forEach(i),w=E(C),L=c(C,"BUTTON",{class:!0});var xe=m(L);z=D(xe,"Update"),xe.forEach(i),M=E(C),y=c(C,"P",{class:!0});var je=m(y);U=D(je,"Favourite Team:"),je.forEach(i),T=E(C),O=c(C,"H2",{class:!0});var qe=m(O);j=D(qe,"Not Set"),qe.forEach(i),H=E(C),V=c(C,"BUTTON",{class:!0});var Me=m(V);_a=D(Me,"Update"),Me.forEach(i),da=E(C),G=c(C,"P",{class:!0});var Ve=m(G);$a=D(Ve,"Joined:"),Ve.forEach(i),Ya=E(C),pa=c(C,"H2",{class:!0});var We=m(pa);Xa=D(We,"August 2023"),We.forEach(i),Qa=E(C),fa=c(C,"P",{class:!0});var ze=m(fa);Za=D(ze,"Principal:"),ze.forEach(i),Ja=E(C),B=c(C,"DIV",{class:!0});var ja=m(B);ua=c(ja,"H2",{class:!0});var Ue=m(ua);ae=D(Ue,Ae),Ue.forEach(i),ee=E(ja),Da(oa.$$.fragment,ja),ja.forEach(i),C.forEach(i),we.forEach(i),ma.forEach(i),se=E(F),Ia=c(F,"DIV",{class:!0});var Ge=m(Ia);va=c(Ge,"DIV",{class:!0});var Ke=m(va);Na=c(Ke,"DIV",{class:!0});var He=m(Na);q=c(He,"DIV",{class:!0});var sa=m(q);$=c(sa,"DIV",{class:!0});var qa=m($);ra=c(qa,"IMG",{src:!0,alt:!0,class:!0}),te=E(qa),Y=c(qa,"DIV",{class:!0});var Ma=m(Y);Ea=c(Ma,"P",{class:!0});var Be=m(Ea);ne=D(Be,"ICP"),Be.forEach(i),oe=E(Ma),ya=c(Ma,"P",{});var $e=m(ya);re=D($e,"0.00 ICP"),$e.forEach(i),Ma.forEach(i),qa.forEach(i),ie=E(sa),X=c(sa,"DIV",{class:!0});var Va=m(X);ia=c(Va,"IMG",{src:!0,alt:!0,class:!0}),le=E(Va),Q=c(Va,"DIV",{class:!0});var Wa=m(Q);Sa=c(Wa,"P",{class:!0});var Ye=m(Sa);ce=D(Ye,"FPL"),Ye.forEach(i),me=E(Wa),Oa=c(Wa,"P",{});var Xe=m(Oa);_e=D(Xe,"0.00 FPL"),Xe.forEach(i),Wa.forEach(i),Va.forEach(i),de=E(sa),Z=c(sa,"DIV",{class:!0});var za=m(Z);la=c(za,"IMG",{src:!0,alt:!0,class:!0}),pe=E(za),J=c(za,"DIV",{class:!0});var Ua=m(J);ba=c(Ua,"P",{class:!0});var Qe=m(ba);fe=D(Qe,"ckBTC"),Qe.forEach(i),ue=E(Ua),La=c(Ua,"P",{});var Ze=m(La);Ie=D(Ze,"0.00 ckBTC"),Ze.forEach(i),Ua.forEach(i),za.forEach(i),ve=E(sa),aa=c(sa,"DIV",{class:!0});var Ga=m(aa);ca=c(Ga,"IMG",{src:!0,alt:!0,class:!0}),Ne=E(Ga),ea=c(Ga,"DIV",{class:!0});var Ka=m(ea);ga=c(Ka,"P",{class:!0});var Je=m(ga);Ee=D(Je,"ckETH"),Je.forEach(i),Se=E(Ka),wa=c(Ka,"P",{});var as=m(wa);be=D(as,"0.00 ckETH"),as.forEach(i),Ka.forEach(i),Ga.forEach(i),sa.forEach(i),He.forEach(i),Ke.forEach(i),Ge.forEach(i),F.forEach(i),this.h()},h(){Fa(p.src,g="profile_placeholder.png")||n(p,"src",g),n(p,"alt","Profile"),n(p,"class","w-48 md:w-80 p-4"),n(f,"class","w-full md:w-auto px-2 ml-4 md:ml-0"),n(P,"class","text-xs mb-2"),n(v,"class","text-2xl font-bold mb-2"),n(L,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded"),n(y,"class","text-xs mb-2 mt-4"),n(O,"class","text-2xl font-bold mb-2"),n(V,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded"),n(G,"class","text-xs mb-2 mt-4"),n(pa,"class","text-2xl font-bold mb-2"),n(fa,"class","text-xs mb-2 mt-4"),n(ua,"class","text-xs font-bold"),n(B,"class","flex items-center"),n(d,"class","ml-4 p-4 rounded-lg"),n(u,"class","w-full md:w-3/4 px-2 mb-4"),n(I,"class","flex flex-wrap"),Fa(ra.src,Pe="ICPCoin.png")||n(ra,"src",Pe),n(ra,"alt","ICP"),n(ra,"class","h-12 w-12"),n(Ea,"class","font-bold"),n(Y,"class","ml-4"),n($,"class","flex items-center p-4 rounded-lg shadow-md border border-gray-700"),Fa(ia.src,Re="FPLCoin.png")||n(ia,"src",Re),n(ia,"alt","FPL"),n(ia,"class","h-12 w-12"),n(Sa,"class","font-bold"),n(Q,"class","ml-4"),n(X,"class","flex items-center p-4 rounded-lg shadow-md border border-gray-700"),Fa(la.src,ye="ckBTCCoin.png")||n(la,"src",ye),n(la,"alt","ICP"),n(la,"class","h-12 w-12"),n(ba,"class","font-bold"),n(J,"class","ml-4"),n(Z,"class","flex items-center p-4 rounded-lg shadow-md border border-gray-700"),Fa(ca.src,Oe="ckETHCoin.png")||n(ca,"src",Oe),n(ca,"alt","ICP"),n(ca,"class","h-12 w-12"),n(ga,"class","font-bold"),n(ea,"class","ml-4"),n(aa,"class","flex items-center p-4 rounded-lg shadow-md border border-gray-700"),n(q,"class","grid grid-cols-1 md:grid-cols-4 gap-4"),n(Na,"class","mt-4 px-2"),n(va,"class","w-full px-2 mb-4"),n(Ia,"class","flex flex-wrap -mx-2 mt-4"),n(_,"class","container mx-auto p-4")},m(S,F){Ta(a,S,F),W(S,e,F),Ta(s,S,F),W(S,o,F),W(S,_,F),t(_,I),t(I,f),t(f,p),t(I,A),t(I,u),t(u,d),t(d,P),t(P,R),t(d,k),t(d,v),t(v,b),t(d,w),t(d,L),t(L,z),t(d,M),t(d,y),t(y,U),t(d,T),t(d,O),t(O,j),t(d,H),t(d,V),t(V,_a),t(d,da),t(d,G),t(G,$a),t(d,Ya),t(d,pa),t(pa,Xa),t(d,Qa),t(d,fa),t(fa,Za),t(d,Ja),t(d,B),t(B,ua),t(ua,ae),t(B,ee),Ta(oa,B,null),t(_,se),t(_,Ia),t(Ia,va),t(va,Na),t(Na,q),t(q,$),t($,ra),t($,te),t($,Y),t(Y,Ea),t(Ea,ne),t(Y,oe),t(Y,ya),t(ya,re),t(q,ie),t(q,X),t(X,ia),t(X,le),t(X,Q),t(Q,Sa),t(Sa,ce),t(Q,me),t(Q,Oa),t(Oa,_e),t(q,de),t(q,Z),t(Z,la),t(Z,pe),t(Z,J),t(J,ba),t(ba,fe),t(J,ue),t(J,La),t(La,Ie),t(q,ve),t(q,aa),t(aa,ca),t(aa,Ne),t(aa,ea),t(ea,ga),t(ga,Ee),t(ea,Se),t(ea,wa),t(wa,be),xa=!0,ge||(Le=[x(L,"click",r[2]),x(V,"click",r[4])],ge=!0)},p(S,[F]){const ma={};F&1&&(ma.showModal=S[0]),a.$set(ma);const ka={};F&2&&(ka.showModal=S[1]),s.$set(ka)},i(S){xa||(ta(a.$$.fragment,S),ta(s.$$.fragment,S),ta(oa.$$.fragment,S),xa=!0)},o(S){na(a.$$.fragment,S),na(s.$$.fragment,S),na(oa.$$.fragment,S),xa=!1},d(S){Aa(a,S),S&&i(e),Aa(s,S),S&&i(o),S&&i(_),Aa(oa),ge=!1,Ba(Le)}}}let Ae="yxaeb-cknlu-ymf7s-hyhv4-ngpus-hurji-roqrb-hcf46-6ed5v-cp3qa-uqe";function ws(r,a,e){const s=new Is;let o=[],_=!1,I=!1;function f(){e(0,_=!0)}function p(){e(0,_=!1)}function g(){e(1,I=!0)}function A(){e(1,I=!1)}ps(async()=>{try{o=await s.getTeams()}catch(d){console.error("Error fetching data:",d)}});function u(d){navigator.clipboard.writeText(d).then(()=>{Ns.show("Copied","success")})}return[_,I,f,p,g,A,u]}class ks extends Ca{constructor(a){super(),Pa(this,a,ws,Ls,Ra,{})}}function Fs(r){let a,e;return a=new bs({}),{c(){ha(a.$$.fragment)},l(s){Da(a.$$.fragment,s)},m(s,o){Ta(a,s,o),e=!0},i(s){e||(ta(a.$$.fragment,s),e=!0)},o(s){na(a.$$.fragment,s),e=!1},d(s){Aa(a,s)}}}function xs(r){let a,e;return a=new ks({}),{c(){ha(a.$$.fragment)},l(s){Da(a.$$.fragment,s)},m(s,o){Ta(a,s,o),e=!0},i(s){e||(ta(a.$$.fragment,s),e=!0)},o(s){na(a.$$.fragment,s),e=!1},d(s){Aa(a,s)}}}function js(r){let a,e,s,o,_,I,f,p,g,A,u,d,P,R,k,v,b,w,L,z;const M=[xs,Fs],y=[];function U(T,O){return T[0]==="details"?0:T[0]==="gameweeks"?1:-1}return~(v=U(r))&&(b=y[v]=M[v](r)),{c(){a=l("div"),e=l("div"),s=l("ul"),o=l("li"),_=l("button"),I=h("Details"),g=N(),A=l("li"),u=l("button"),d=h("Gameweeks"),k=N(),b&&b.c(),this.h()},l(T){a=c(T,"DIV",{class:!0});var O=m(a);e=c(O,"DIV",{class:!0});var j=m(e);s=c(j,"UL",{class:!0});var H=m(s);o=c(H,"LI",{class:!0});var V=m(o);_=c(V,"BUTTON",{class:!0});var _a=m(_);I=D(_a,"Details"),_a.forEach(i),V.forEach(i),g=E(H),A=c(H,"LI",{class:!0});var da=m(A);u=c(da,"BUTTON",{class:!0});var G=m(u);d=D(G,"Gameweeks"),G.forEach(i),da.forEach(i),H.forEach(i),k=E(j),b&&b.l(j),j.forEach(i),O.forEach(i),this.h()},h(){n(_,"class",f=`p-2 ${r[0]==="details"?"text-white":"text-gray-400"}`),n(o,"class",p=`mr-4 text-xs md:text-lg ${r[0]==="details"?"active-tab":""}`),n(u,"class",P=`p-2 ${r[0]==="gameweeks"?"text-white":"text-gray-400"}`),n(A,"class",R=`mr-4 text-xs md:text-lg ${r[0]==="gameweeks"?"active-tab":""}`),n(s,"class","flex rounded-lg bg-light-gray px-4 pt-2"),n(e,"class","bg-panel rounded-lg m-4"),n(a,"class","m-4")},m(T,O){W(T,a,O),t(a,e),t(e,s),t(s,o),t(o,_),t(_,I),t(s,g),t(s,A),t(A,u),t(u,d),t(e,k),~v&&y[v].m(e,null),w=!0,L||(z=[x(_,"click",r[2]),x(u,"click",r[3])],L=!0)},p(T,O){(!w||O&1&&f!==(f=`p-2 ${T[0]==="details"?"text-white":"text-gray-400"}`))&&n(_,"class",f),(!w||O&1&&p!==(p=`mr-4 text-xs md:text-lg ${T[0]==="details"?"active-tab":""}`))&&n(o,"class",p),(!w||O&1&&P!==(P=`p-2 ${T[0]==="gameweeks"?"text-white":"text-gray-400"}`))&&n(u,"class",P),(!w||O&1&&R!==(R=`mr-4 text-xs md:text-lg ${T[0]==="gameweeks"?"active-tab":""}`))&&n(A,"class",R);let j=v;v=U(T),v!==j&&(b&&(fs(),na(y[j],1,1,()=>{y[j]=null}),us()),~v?(b=y[v],b||(b=y[v]=M[v](T),b.c()),ta(b,1),b.m(e,null)):b=null)},i(T){w||(ta(b),w=!0)},o(T){na(b),w=!1},d(T){T&&i(a),~v&&y[v].d(),L=!1,Ba(z)}}}function qs(r){let a,e;return a=new Es({props:{$$slots:{default:[js]},$$scope:{ctx:r}}}),{c(){ha(a.$$.fragment)},l(s){Da(a.$$.fragment,s)},m(s,o){Ta(a,s,o),e=!0},p(s,[o]){const _={};o&17&&(_.$$scope={dirty:o,ctx:s}),a.$set(_)},i(s){e||(ta(a.$$.fragment,s),e=!0)},o(s){na(a.$$.fragment,s),e=!1},d(s){Aa(a,s)}}}function Ms(r,a,e){let s="details";function o(f){e(0,s=f)}return[s,o,()=>o("details"),()=>o("gameweeks")]}class Gs extends Ca{constructor(a){super(),Pa(this,a,Ms,qs,Ra,{})}}export{Gs as component};
