import{s as bl,f as o,a as g,g as i,h as c,I as oe,c as x,d as f,j as r,G as kt,A as da,i as Be,x as e,B as el,C as tl,D as xl,l as B,m as M,y as ma,q as Yl,n as X,H as va,o as ha,F as _a,z as ga,e as Zl,k as Ke,E as xa}from"../chunks/scheduler.2037d42e.js";import{S as yl,i as wl,a as ee,g as St,c as jt,t as le,b as ye,d as Te,m as we,e as Ce}from"../chunks/index.cd713282.js";import{e as Ct,P as ba,v as At,w as ea,g as ta,t as ll,f as al,a as pa,h as la,b as aa,L as ya,s as sa,j as ra,u as wa}from"../chunks/Layout.b983af79.js";import{L as Ca}from"../chunks/LoadingIcon.64dacd79.js";import{B as Ht}from"../chunks/BadgeIcon.de5ce3c9.js";import{p as $a}from"../chunks/stores.2a5d2c72.js";import{S as Ia}from"../chunks/ShirtIcon.ede2fe7f.js";function oa(a,t,s){const l=a.slice();return l[5]=t[s],l}function ia(a,t,s){const l=a.slice();return l[8]=t[s],l}function na(a){let t,s=At(a[8])+"",l;return{c(){t=o("option"),l=B(s),this.h()},l(d){t=i(d,"OPTION",{});var m=c(t);l=M(m,s),m.forEach(f),this.h()},h(){t.__value=a[8],kt(t,t.__value)},m(d,m){Be(d,t,m),e(t,l)},p:ma,d(d){d&&f(t)}}}function fa(a){let t,s,l,d=(a[5].shirtNumber===0?"-":a[5].shirtNumber)+"",m,b,P,h=(a[5].firstName===""?"-":a[5].firstName)+"",v,C,R,N=a[5].lastName+"",T,A,W,q=At(a[5].position)+"",O,J,z,y=ea(Number(a[5].dateOfBirth))+"",j,V,F,n,k,u,I=a[5].totalPoints+"",w,$,_,D,ae=(Number(a[5].value)/4).toFixed(2)+"",K,ce,de,_e,Q;var re=ta(a[5].nationality);function $e(L,G){return{props:{class:"w-10 h-10",size:"100"}}}return re&&(n=Yl(re,$e())),{c(){t=o("div"),s=o("a"),l=o("div"),m=B(d),b=g(),P=o("div"),v=B(h),C=g(),R=o("div"),T=B(N),A=g(),W=o("div"),O=B(q),J=g(),z=o("div"),j=B(y),V=g(),F=o("div"),n&&ye(n.$$.fragment),k=g(),u=o("div"),w=B(I),$=g(),_=o("div"),D=B("£"),K=B(ae),ce=B("m"),_e=g(),this.h()},l(L){t=i(L,"DIV",{class:!0});var G=c(t);s=i(G,"A",{class:!0,href:!0});var U=c(s);l=i(U,"DIV",{class:!0});var pe=c(l);m=M(pe,d),pe.forEach(f),b=x(U),P=i(U,"DIV",{class:!0});var Ie=c(P);v=M(Ie,h),Ie.forEach(f),C=x(U),R=i(U,"DIV",{class:!0});var te=c(R);T=M(te,N),te.forEach(f),A=x(U),W=i(U,"DIV",{class:!0});var se=c(W);O=M(se,q),se.forEach(f),J=x(U),z=i(U,"DIV",{class:!0});var ie=c(z);j=M(ie,y),ie.forEach(f),V=x(U),F=i(U,"DIV",{class:!0});var De=c(F);n&&Te(n.$$.fragment,De),De.forEach(f),k=x(U),u=i(U,"DIV",{class:!0});var Ve=c(u);w=M(Ve,I),Ve.forEach(f),$=x(U),_=i(U,"DIV",{class:!0});var ne=c(_);D=M(ne,"£"),K=M(ne,ae),ce=M(ne,"m"),ne.forEach(f),U.forEach(f),_e=x(G),G.forEach(f),this.h()},h(){r(l,"class","flex items-center w-1/2 px-3"),r(P,"class","flex items-center w-1/2 px-3"),r(R,"class","flex items-center w-1/2 px-3"),r(W,"class","flex items-center w-1/2 px-3"),r(z,"class","flex items-center w-1/2 px-3"),r(F,"class","flex items-center w-1/2 px-3"),r(u,"class","flex items-center w-1/2 px-3"),r(_,"class","flex items-center w-1/2 px-3"),r(s,"class","flex-grow flex items-center justify-start space-x-2 px-4"),r(s,"href",de=`/player?id=${a[5].id}`),r(t,"class","flex items-center justify-between py-2 border-b border-gray-700 text-white cursor-pointer")},m(L,G){Be(L,t,G),e(t,s),e(s,l),e(l,m),e(s,b),e(s,P),e(P,v),e(s,C),e(s,R),e(R,T),e(s,A),e(s,W),e(W,O),e(s,J),e(s,z),e(z,j),e(s,V),e(s,F),n&&we(n,F,null),e(s,k),e(s,u),e(u,w),e(s,$),e(s,_),e(_,D),e(_,K),e(_,ce),e(t,_e),Q=!0},p(L,G){if((!Q||G&2)&&d!==(d=(L[5].shirtNumber===0?"-":L[5].shirtNumber)+"")&&X(m,d),(!Q||G&2)&&h!==(h=(L[5].firstName===""?"-":L[5].firstName)+"")&&X(v,h),(!Q||G&2)&&N!==(N=L[5].lastName+"")&&X(T,N),(!Q||G&2)&&q!==(q=At(L[5].position)+"")&&X(O,q),(!Q||G&2)&&y!==(y=ea(Number(L[5].dateOfBirth))+"")&&X(j,y),G&2&&re!==(re=ta(L[5].nationality))){if(n){St();const U=n;le(U.$$.fragment,1,0,()=>{Ce(U,1)}),jt()}re?(n=Yl(re,$e()),ye(n.$$.fragment),ee(n.$$.fragment,1),we(n,F,null)):n=null}(!Q||G&2)&&I!==(I=L[5].totalPoints+"")&&X(w,I),(!Q||G&2)&&ae!==(ae=(Number(L[5].value)/4).toFixed(2)+"")&&X(K,ae),(!Q||G&2&&de!==(de=`/player?id=${L[5].id}`))&&r(s,"href",de)},i(L){Q||(n&&ee(n.$$.fragment,L),Q=!0)},o(L){n&&le(n.$$.fragment,L),Q=!1},d(L){L&&f(t),n&&Ce(n)}}}function Ea(a){let t,s,l,d,m,b,P="Position:",h,v,C,R="All",N,T,A='<div class="flex-grow px-4 w-1/2">Number</div> <div class="flex-grow px-4 w-1/2">First Name</div> <div class="flex-grow px-4 w-1/2">Last Name</div> <div class="flex-grow px-4 w-1/2">Position</div> <div class="flex-grow px-4 w-1/2">Age</div> <div class="flex-grow px-4 w-1/2">Nationality</div> <div class="flex-grow px-4 w-1/2">Season Points</div> <div class="flex-grow px-4 w-1/2">Value</div>',W,q,O,J,z=Ct(a[2]),y=[];for(let n=0;n<z.length;n+=1)y[n]=na(ia(a,z,n));let j=Ct(a[1]),V=[];for(let n=0;n<j.length;n+=1)V[n]=fa(oa(a,j,n));const F=n=>le(V[n],1,1,()=>{V[n]=null});return{c(){t=o("div"),s=o("div"),l=o("div"),d=o("div"),m=o("div"),b=o("p"),b.textContent=P,h=g(),v=o("select"),C=o("option"),C.textContent=R;for(let n=0;n<y.length;n+=1)y[n].c();N=g(),T=o("div"),T.innerHTML=A,W=g();for(let n=0;n<V.length;n+=1)V[n].c();this.h()},l(n){t=i(n,"DIV",{class:!0});var k=c(t);s=i(k,"DIV",{class:!0});var u=c(s);l=i(u,"DIV",{});var I=c(l);d=i(I,"DIV",{class:!0});var w=c(d);m=i(w,"DIV",{class:!0});var $=c(m);b=i($,"P",{class:!0,"data-svelte-h":!0}),oe(b)!=="svelte-1sco8cj"&&(b.textContent=P),h=x($),v=i($,"SELECT",{class:!0});var _=c(v);C=i(_,"OPTION",{"data-svelte-h":!0}),oe(C)!=="svelte-daeyot"&&(C.textContent=R);for(let D=0;D<y.length;D+=1)y[D].l(_);_.forEach(f),$.forEach(f),w.forEach(f),N=x(I),T=i(I,"DIV",{class:!0,"data-svelte-h":!0}),oe(T)!=="svelte-1xp4c4m"&&(T.innerHTML=A),W=x(I);for(let D=0;D<V.length;D+=1)V[D].l(I);I.forEach(f),u.forEach(f),k.forEach(f),this.h()},h(){r(b,"class","text-sm md:text-xl mr-4"),C.__value=-1,kt(C,C.__value),r(v,"class","p-2 fpl-dropdown text-sm md:text-xl"),a[0]===void 0&&da(()=>a[4].call(v)),r(m,"class","flex items-center ml-4"),r(d,"class","flex p-4"),r(T,"class","flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"),r(s,"class","flex flex-col space-y-4"),r(t,"class","container-fluid")},m(n,k){Be(n,t,k),e(t,s),e(s,l),e(l,d),e(d,m),e(m,b),e(m,h),e(m,v),e(v,C);for(let u=0;u<y.length;u+=1)y[u]&&y[u].m(v,null);el(v,a[0],!0),e(l,N),e(l,T),e(l,W);for(let u=0;u<V.length;u+=1)V[u]&&V[u].m(l,null);q=!0,O||(J=tl(v,"change",a[4]),O=!0)},p(n,[k]){if(k&4){z=Ct(n[2]);let u;for(u=0;u<z.length;u+=1){const I=ia(n,z,u);y[u]?y[u].p(I,k):(y[u]=na(I),y[u].c(),y[u].m(v,null))}for(;u<y.length;u+=1)y[u].d(1);y.length=z.length}if(k&5&&el(v,n[0]),k&2){j=Ct(n[1]);let u;for(u=0;u<j.length;u+=1){const I=oa(n,j,u);V[u]?(V[u].p(I,k),ee(V[u],1)):(V[u]=fa(I),V[u].c(),ee(V[u],1),V[u].m(l,null))}for(St(),u=j.length;u<V.length;u+=1)F(u);jt()}},i(n){if(!q){for(let k=0;k<j.length;k+=1)ee(V[k]);q=!0}},o(n){V=V.filter(Boolean);for(let k=0;k<V.length;k+=1)le(V[k]);q=!1},d(n){n&&f(t),xl(y,n),xl(V,n),O=!1,J()}}}function Ta(a,t,s){let l,{players:d=[]}=t,m=-1,b=Object.values(ba).filter(h=>typeof h=="number");function P(){m=va(this),s(0,m),s(2,b)}return a.$$set=h=>{"players"in h&&s(3,d=h.players)},a.$$.update=()=>{a.$$.dirty&9&&s(1,l=m===-1?d:d.filter(h=>h.position===m))},[m,l,b,d,P]}class Da extends yl{constructor(t){super(),wl(this,t,Ta,Ea,bl,{players:3})}}function ua(a,t,s){const l=a.slice();return l[10]=t[s].fixture,l[11]=t[s].homeTeam,l[12]=t[s].awayTeam,l}function ca(a){let t,s,l=a[10].gameweek+"",d,m,b,P,h,v,C,R,N,T="v",A,W,q,O,J,z,y,j=la(Number(a[10].kickOff))+"",V,F,n,k=aa(Number(a[10].kickOff))+"",u,I,w,$,_,D=(a[11]?a[11].friendlyName:"")+"",ae,K,ce,de,_e=(a[12]?a[12].friendlyName:"")+"",Q,re,$e,L,G,U,pe=(a[10].status===0?"-":a[10].homeGoals)+"",Ie,te,se,ie=(a[10].status===0?"-":a[10].awayGoals)+"",De,Ve,ne,Y;return v=new Ht({props:{primaryColour:a[11]?a[11].primaryColourHex:"",secondaryColour:a[11]?a[11].secondaryColourHex:"",thirdColour:a[11]?a[11].thirdColourHex:""}}),O=new Ht({props:{primaryColour:a[12]?a[12].primaryColourHex:"",secondaryColour:a[12]?a[12].secondaryColourHex:"",thirdColour:a[12]?a[12].thirdColourHex:""}}),{c(){t=o("div"),s=o("div"),d=B(l),m=g(),b=o("div"),P=o("div"),h=o("a"),ye(v.$$.fragment),R=g(),N=o("span"),N.textContent=T,A=g(),W=o("div"),q=o("a"),ye(O.$$.fragment),z=g(),y=o("div"),V=B(j),F=g(),n=o("div"),u=B(k),I=g(),w=o("div"),$=o("div"),_=o("a"),ae=B(D),ce=g(),de=o("a"),Q=B(_e),$e=g(),L=o("div"),G=o("div"),U=o("span"),Ie=B(pe),te=g(),se=o("span"),De=B(ie),Ve=g(),this.h()},l(E){t=i(E,"DIV",{class:!0});var H=c(t);s=i(H,"DIV",{class:!0});var me=c(s);d=M(me,l),me.forEach(f),m=x(H),b=i(H,"DIV",{class:!0});var he=c(b);P=i(he,"DIV",{class:!0});var ot=c(P);h=i(ot,"A",{href:!0});var Ne=c(h);Te(v.$$.fragment,Ne),Ne.forEach(f),ot.forEach(f),R=x(he),N=i(he,"SPAN",{class:!0,"data-svelte-h":!0}),oe(N)!=="svelte-t2hdpb"&&(N.textContent=T),A=x(he),W=i(he,"DIV",{class:!0});var it=c(W);q=i(it,"A",{href:!0});var ge=c(q);Te(O.$$.fragment,ge),ge.forEach(f),it.forEach(f),he.forEach(f),z=x(H),y=i(H,"DIV",{class:!0});var Pe=c(y);V=M(Pe,j),Pe.forEach(f),F=x(H),n=i(H,"DIV",{class:!0});var $t=c(n);u=M($t,k),$t.forEach(f),I=x(H),w=i(H,"DIV",{class:!0});var nt=c(w);$=i(nt,"DIV",{class:!0});var Ee=c($);_=i(Ee,"A",{href:!0});var xe=c(_);ae=M(xe,D),xe.forEach(f),ce=x(Ee),de=i(Ee,"A",{href:!0});var Le=c(de);Q=M(Le,_e),Le.forEach(f),Ee.forEach(f),nt.forEach(f),$e=x(H),L=i(H,"DIV",{class:!0});var ke=c(L);G=i(ke,"DIV",{class:!0});var be=c(G);U=i(be,"SPAN",{});var Xe=c(U);Ie=M(Xe,pe),Xe.forEach(f),te=x(be),se=i(be,"SPAN",{});var ft=c(se);De=M(ft,ie),ft.forEach(f),be.forEach(f),ke.forEach(f),Ve=x(H),H.forEach(f),this.h()},h(){r(s,"class","w-1/6 ml-4"),r(h,"href",C=`/club?id=${a[10].homeTeamId}`),r(P,"class","w-10 items-center justify-center mr-4"),r(N,"class","font-bold text-lg"),r(q,"href",J=`/club?id=${a[10].awayTeamId}`),r(W,"class","w-10 items-center justify-center ml-4"),r(b,"class","w-1/3 flex justify-center"),r(y,"class","w-1/3"),r(n,"class","w-1/4 text-center"),r(_,"href",K=`/club?id=${a[10].homeTeamId}`),r(de,"href",re=`/club?id=${a[10].awayTeamId}`),r($,"class","flex flex-col text-xs md:text-base"),r(w,"class","w-1/3"),r(G,"class","flex flex-col text-xs md:text-base"),r(L,"class","w-1/4 mr-4"),r(t,"class",ne=`flex items-center justify-between border-b border-gray-700 p-2 px-4  
          ${a[10].status===0?"text-gray-400":"text-white"}`)},m(E,H){Be(E,t,H),e(t,s),e(s,d),e(t,m),e(t,b),e(b,P),e(P,h),we(v,h,null),e(b,R),e(b,N),e(b,A),e(b,W),e(W,q),we(O,q,null),e(t,z),e(t,y),e(y,V),e(t,F),e(t,n),e(n,u),e(t,I),e(t,w),e(w,$),e($,_),e(_,ae),e($,ce),e($,de),e(de,Q),e(t,$e),e(t,L),e(L,G),e(G,U),e(U,Ie),e(G,te),e(G,se),e(se,De),e(t,Ve),Y=!0},p(E,H){(!Y||H&2)&&l!==(l=E[10].gameweek+"")&&X(d,l);const me={};H&2&&(me.primaryColour=E[11]?E[11].primaryColourHex:""),H&2&&(me.secondaryColour=E[11]?E[11].secondaryColourHex:""),H&2&&(me.thirdColour=E[11]?E[11].thirdColourHex:""),v.$set(me),(!Y||H&2&&C!==(C=`/club?id=${E[10].homeTeamId}`))&&r(h,"href",C);const he={};H&2&&(he.primaryColour=E[12]?E[12].primaryColourHex:""),H&2&&(he.secondaryColour=E[12]?E[12].secondaryColourHex:""),H&2&&(he.thirdColour=E[12]?E[12].thirdColourHex:""),O.$set(he),(!Y||H&2&&J!==(J=`/club?id=${E[10].awayTeamId}`))&&r(q,"href",J),(!Y||H&2)&&j!==(j=la(Number(E[10].kickOff))+"")&&X(V,j),(!Y||H&2)&&k!==(k=aa(Number(E[10].kickOff))+"")&&X(u,k),(!Y||H&2)&&D!==(D=(E[11]?E[11].friendlyName:"")+"")&&X(ae,D),(!Y||H&2&&K!==(K=`/club?id=${E[10].homeTeamId}`))&&r(_,"href",K),(!Y||H&2)&&_e!==(_e=(E[12]?E[12].friendlyName:"")+"")&&X(Q,_e),(!Y||H&2&&re!==(re=`/club?id=${E[10].awayTeamId}`))&&r(de,"href",re),(!Y||H&2)&&pe!==(pe=(E[10].status===0?"-":E[10].homeGoals)+"")&&X(Ie,pe),(!Y||H&2)&&ie!==(ie=(E[10].status===0?"-":E[10].awayGoals)+"")&&X(De,ie),(!Y||H&2&&ne!==(ne=`flex items-center justify-between border-b border-gray-700 p-2 px-4  
          ${E[10].status===0?"text-gray-400":"text-white"}`))&&r(t,"class",ne)},i(E){Y||(ee(v.$$.fragment,E),ee(O.$$.fragment,E),Y=!0)},o(E){le(v.$$.fragment,E),le(O.$$.fragment,E),Y=!1},d(E){E&&f(t),Ce(v),Ce(O)}}}function Va(a){let t,s,l,d,m,b,P="Type:",h,v,C,R="All",N,T="Home",A,W="Away",q,O,J='<div class="flex-grow w-1/6 ml-4">Gameweek</div> <div class="flex-grow w-1/3 text-center">Game</div> <div class="flex-grow w-1/3">Date</div> <div class="flex-grow w-1/4 text-center">Time</div> <div class="flex-grow w-1/3">Teams</div> <div class="flex-grow w-1/4 mr-4">Result</div>',z,y,j,V,F=Ct(a[1]),n=[];for(let u=0;u<F.length;u+=1)n[u]=ca(ua(a,F,u));const k=u=>le(n[u],1,1,()=>{n[u]=null});return{c(){t=o("div"),s=o("div"),l=o("div"),d=o("div"),m=o("div"),b=o("p"),b.textContent=P,h=g(),v=o("select"),C=o("option"),C.textContent=R,N=o("option"),N.textContent=T,A=o("option"),A.textContent=W,q=g(),O=o("div"),O.innerHTML=J,z=g();for(let u=0;u<n.length;u+=1)n[u].c();this.h()},l(u){t=i(u,"DIV",{class:!0});var I=c(t);s=i(I,"DIV",{class:!0});var w=c(s);l=i(w,"DIV",{});var $=c(l);d=i($,"DIV",{class:!0});var _=c(d);m=i(_,"DIV",{class:!0});var D=c(m);b=i(D,"P",{class:!0,"data-svelte-h":!0}),oe(b)!=="svelte-1u2k8g6"&&(b.textContent=P),h=x(D),v=i(D,"SELECT",{class:!0});var ae=c(v);C=i(ae,"OPTION",{"data-svelte-h":!0}),oe(C)!=="svelte-daeyot"&&(C.textContent=R),N=i(ae,"OPTION",{"data-svelte-h":!0}),oe(N)!=="svelte-13am3j1"&&(N.textContent=T),A=i(ae,"OPTION",{"data-svelte-h":!0}),oe(A)!=="svelte-19oionv"&&(A.textContent=W),ae.forEach(f),D.forEach(f),_.forEach(f),q=x($),O=i($,"DIV",{class:!0,"data-svelte-h":!0}),oe(O)!=="svelte-1mz00a"&&(O.innerHTML=J),z=x($);for(let K=0;K<n.length;K+=1)n[K].l($);$.forEach(f),w.forEach(f),I.forEach(f),this.h()},h(){r(b,"class","text-sm md:text-xl mr-4"),C.__value=-1,kt(C,C.__value),N.__value=0,kt(N,N.__value),A.__value=1,kt(A,A.__value),r(v,"class","p-2 fpl-dropdown text-sm md:text-xl"),a[0]===void 0&&da(()=>a[4].call(v)),r(m,"class","flex items-center ml-4"),r(d,"class","flex p-4"),r(O,"class","flex justify-between p-2 border border-gray-700 py-4 bg-light-gray px-4"),r(s,"class","flex flex-col space-y-4"),r(t,"class","container-fluid")},m(u,I){Be(u,t,I),e(t,s),e(s,l),e(l,d),e(d,m),e(m,b),e(m,h),e(m,v),e(v,C),e(v,N),e(v,A),el(v,a[0],!0),e(l,q),e(l,O),e(l,z);for(let w=0;w<n.length;w+=1)n[w]&&n[w].m(l,null);y=!0,j||(V=tl(v,"change",a[4]),j=!0)},p(u,[I]){if(I&1&&el(v,u[0]),I&2){F=Ct(u[1]);let w;for(w=0;w<F.length;w+=1){const $=ua(u,F,w);n[w]?(n[w].p($,I),ee(n[w],1)):(n[w]=ca($),n[w].c(),ee(n[w],1),n[w].m(l,null))}for(St(),w=F.length;w<n.length;w+=1)k(w);jt()}},i(u){if(!y){for(let I=0;I<F.length;I+=1)ee(n[I]);y=!0}},o(u){n=n.filter(Boolean);for(let I=0;I<n.length;I+=1)le(n[I]);y=!1},d(u){u&&f(t),xl(n,u),j=!1,V()}}}function Na(a,t,s){let l,{clubId:d=null}=t,m=[],b=[],P=[],h=-1,v,C;ha(async()=>{try{await ll.sync(),await al.sync(),v=ll.subscribe(T=>{m=T}),C=al.subscribe(T=>{b=T,s(3,P=b.map(A=>({fixture:A,homeTeam:R(A.homeTeamId),awayTeam:R(A.awayTeamId)})))})}catch(T){pa({msg:{text:"Error fetching team fixtures."},err:T}),console.error("Error fetching team fixtures:",T)}finally{}}),_a(()=>{v?.(),C?.()});function R(T){return m.find(A=>A.id===T)}function N(){h=va(this),s(0,h)}return a.$$set=T=>{"clubId"in T&&s(2,d=T.clubId)},a.$$.update=()=>{a.$$.dirty&13&&s(1,l=h===-1?P.filter(({fixture:T})=>d===null||T.homeTeamId===d||T.awayTeamId===d):h===0?P.filter(({fixture:T})=>d===null||T.homeTeamId===d):P.filter(({fixture:T})=>d===null||T.awayTeamId===d))},[h,l,d,P,N]}class Pa extends yl{constructor(t){super(),wl(this,t,Na,Va,bl,{clubId:2})}}function ka(a){let t,s,l,d,m,b=Qe?.friendlyName+"",P,h,v,C,R,N,T,A,W=Qe?.abbreviatedName+"",q,O,J,z,y,j,V="Players",F,n,k=a[1].length+"",u,I,w,$="Total",_,D,ae,K,ce,de="League Position",_e,Q,re=a[9](a[7])+"",$e,L,G,U=a[0].name+"",pe,Ie,te,se,ie,De="League Points",Ve,ne,Y=a[10](a[7])+"",E,H,me,he="Total",ot,Ne,it,ge,Pe,$t="Next Game:",nt,Ee,xe,Le,ke,be,Xe,ft,Ye,Cl='<p class="text-xs mt-2 mb-2 font-bold">v</p>',sl,ut,Ze,Me,Lt,rl,He,ct,dt,Ue,It=a[2]?.abbreviatedName+"",Ot,Ft,ol,Et,il,mt,vt,qe,Tt=a[3]?.abbreviatedName+"",Gt,Bt,nl,et,fl,Ae,tt,$l="Highest Scoring Player",ul,ht,lt,Dt=a[4]?.lastName+"",Mt,Ut,cl,Oe,Vt=At(a[4]?.position??0)+"",qt,dl,Nt=a[4]?.totalPoints+"",zt,ml,Rt,at,Fe,ze,st,Re,vl,Wt,Jt,hl,rt,We,_l,Kt,Qt,pl,fe,ue,Z,gl,Il;C=new Ht({props:{className:"h-10",primaryColour:Qe?.primaryColourHex,secondaryColour:Qe?.secondaryColourHex,thirdColour:Qe?.thirdColourHex}}),N=new Ia({props:{className:"h-10",primaryColour:Qe?.primaryColourHex,secondaryColour:Qe?.secondaryColourHex,thirdColour:Qe?.thirdColourHex}}),be=new Ht({props:{primaryColour:a[2]?.primaryColourHex,secondaryColour:a[2]?.secondaryColourHex,thirdColour:a[2]?.thirdColourHex}}),Me=new Ht({props:{primaryColour:a[3]?.primaryColourHex,secondaryColour:a[3]?.secondaryColourHex,thirdColour:a[3]?.thirdColourHex}});const El=[Sa,Aa],Je=[];function Tl(p,S){return p[5]==="players"?0:p[5]==="fixtures"?1:-1}return~(fe=Tl(a))&&(ue=Je[fe]=El[fe](a)),{c(){t=o("div"),s=o("div"),l=o("div"),d=o("div"),m=o("p"),P=B(b),h=g(),v=o("div"),ye(C.$$.fragment),R=g(),ye(N.$$.fragment),T=g(),A=o("p"),q=B(W),O=g(),J=o("div"),z=g(),y=o("div"),j=o("p"),j.textContent=V,F=g(),n=o("p"),u=B(k),I=g(),w=o("p"),w.textContent=$,_=g(),D=o("div"),ae=g(),K=o("div"),ce=o("p"),ce.textContent=de,_e=g(),Q=o("p"),$e=B(re),L=g(),G=o("p"),pe=B(U),Ie=g(),te=o("div"),se=o("div"),ie=o("p"),ie.textContent=De,Ve=g(),ne=o("p"),E=B(Y),H=g(),me=o("p"),me.textContent=he,ot=g(),Ne=o("div"),it=g(),ge=o("div"),Pe=o("p"),Pe.textContent=$t,nt=g(),Ee=o("div"),xe=o("div"),Le=o("div"),ke=o("a"),ye(be.$$.fragment),ft=g(),Ye=o("div"),Ye.innerHTML=Cl,sl=g(),ut=o("div"),Ze=o("a"),ye(Me.$$.fragment),rl=g(),He=o("div"),ct=o("div"),dt=o("p"),Ue=o("a"),Ot=B(It),ol=g(),Et=o("div"),il=g(),mt=o("div"),vt=o("p"),qe=o("a"),Gt=B(Tt),nl=g(),et=o("div"),fl=g(),Ae=o("div"),tt=o("p"),tt.textContent=$l,ul=g(),ht=o("p"),lt=o("a"),Mt=B(Dt),cl=g(),Oe=o("p"),qt=B(Vt),dl=B(`
              (`),zt=B(Nt),ml=B(")"),Rt=g(),at=o("div"),Fe=o("div"),ze=o("ul"),st=o("li"),Re=o("button"),vl=B("Players"),hl=g(),rt=o("li"),We=o("button"),_l=B("Fixtures"),pl=g(),ue&&ue.c(),this.h()},l(p){t=i(p,"DIV",{class:!0});var S=c(t);s=i(S,"DIV",{class:!0});var Ge=c(s);l=i(Ge,"DIV",{class:!0});var ve=c(l);d=i(ve,"DIV",{class:!0});var Se=c(d);m=i(Se,"P",{class:!0});var Dl=c(m);P=M(Dl,b),Dl.forEach(f),h=x(Se),v=i(Se,"DIV",{class:!0});var Xt=c(v);Te(C.$$.fragment,Xt),R=x(Xt),Te(N.$$.fragment,Xt),Xt.forEach(f),T=x(Se),A=i(Se,"P",{class:!0});var Vl=c(A);q=M(Vl,W),Vl.forEach(f),Se.forEach(f),O=x(ve),J=i(ve,"DIV",{class:!0,style:!0}),c(J).forEach(f),z=x(ve),y=i(ve,"DIV",{class:!0});var _t=c(y);j=i(_t,"P",{class:!0,"data-svelte-h":!0}),oe(j)!=="svelte-188mqu1"&&(j.textContent=V),F=x(_t),n=i(_t,"P",{class:!0});var Nl=c(n);u=M(Nl,k),Nl.forEach(f),I=x(_t),w=i(_t,"P",{class:!0,"data-svelte-h":!0}),oe(w)!=="svelte-175ivs5"&&(w.textContent=$),_t.forEach(f),_=x(ve),D=i(ve,"DIV",{class:!0,style:!0}),c(D).forEach(f),ae=x(ve),K=i(ve,"DIV",{class:!0});var pt=c(K);ce=i(pt,"P",{class:!0,"data-svelte-h":!0}),oe(ce)!=="svelte-1icnpyr"&&(ce.textContent=de),_e=x(pt),Q=i(pt,"P",{class:!0});var Pl=c(Q);$e=M(Pl,re),Pl.forEach(f),L=x(pt),G=i(pt,"P",{class:!0});var kl=c(G);pe=M(kl,U),kl.forEach(f),pt.forEach(f),ve.forEach(f),Ie=x(Ge),te=i(Ge,"DIV",{class:!0});var je=c(te);se=i(je,"DIV",{class:!0});var gt=c(se);ie=i(gt,"P",{class:!0,"data-svelte-h":!0}),oe(ie)!=="svelte-1syl7vn"&&(ie.textContent=De),Ve=x(gt),ne=i(gt,"P",{class:!0});var Hl=c(ne);E=M(Hl,Y),Hl.forEach(f),H=x(gt),me=i(gt,"P",{class:!0,"data-svelte-h":!0}),oe(me)!=="svelte-175ivs5"&&(me.textContent=he),gt.forEach(f),ot=x(je),Ne=i(je,"DIV",{class:!0,style:!0}),c(Ne).forEach(f),it=x(je),ge=i(je,"DIV",{class:!0});var xt=c(ge);Pe=i(xt,"P",{class:!0,"data-svelte-h":!0}),oe(Pe)!=="svelte-1k71hc"&&(Pe.textContent=$t),nt=x(xt),Ee=i(xt,"DIV",{class:!0});var Al=c(Ee);xe=i(Al,"DIV",{class:!0});var bt=c(xe);Le=i(bt,"DIV",{class:!0});var Sl=c(Le);ke=i(Sl,"A",{href:!0});var jl=c(ke);Te(be.$$.fragment,jl),jl.forEach(f),Sl.forEach(f),ft=x(bt),Ye=i(bt,"DIV",{class:!0,"data-svelte-h":!0}),oe(Ye)!=="svelte-giolu"&&(Ye.innerHTML=Cl),sl=x(bt),ut=i(bt,"DIV",{class:!0});var Ll=c(ut);Ze=i(Ll,"A",{href:!0});var Ol=c(Ze);Te(Me.$$.fragment,Ol),Ol.forEach(f),Ll.forEach(f),bt.forEach(f),Al.forEach(f),rl=x(xt),He=i(xt,"DIV",{class:!0});var yt=c(He);ct=i(yt,"DIV",{class:!0});var Fl=c(ct);dt=i(Fl,"P",{class:!0});var Gl=c(dt);Ue=i(Gl,"A",{class:!0,href:!0});var Bl=c(Ue);Ot=M(Bl,It),Bl.forEach(f),Gl.forEach(f),Fl.forEach(f),ol=x(yt),Et=i(yt,"DIV",{class:!0}),c(Et).forEach(f),il=x(yt),mt=i(yt,"DIV",{class:!0});var Ml=c(mt);vt=i(Ml,"P",{class:!0});var Ul=c(vt);qe=i(Ul,"A",{class:!0,href:!0});var ql=c(qe);Gt=M(ql,Tt),ql.forEach(f),Ul.forEach(f),Ml.forEach(f),yt.forEach(f),xt.forEach(f),nl=x(je),et=i(je,"DIV",{class:!0,style:!0}),c(et).forEach(f),fl=x(je),Ae=i(je,"DIV",{class:!0});var wt=c(Ae);tt=i(wt,"P",{class:!0,"data-svelte-h":!0}),oe(tt)!=="svelte-1ty22y4"&&(tt.textContent=$l),ul=x(wt),ht=i(wt,"P",{class:!0});var zl=c(ht);lt=i(zl,"A",{href:!0});var Rl=c(lt);Mt=M(Rl,Dt),Rl.forEach(f),zl.forEach(f),cl=x(wt),Oe=i(wt,"P",{class:!0});var Pt=c(Oe);qt=M(Pt,Vt),dl=M(Pt,`
              (`),zt=M(Pt,Nt),ml=M(Pt,")"),Pt.forEach(f),wt.forEach(f),je.forEach(f),Ge.forEach(f),S.forEach(f),Rt=x(p),at=i(p,"DIV",{class:!0});var Wl=c(at);Fe=i(Wl,"DIV",{class:!0});var Yt=c(Fe);ze=i(Yt,"UL",{class:!0});var Zt=c(ze);st=i(Zt,"LI",{class:!0});var Jl=c(st);Re=i(Jl,"BUTTON",{class:!0});var Kl=c(Re);vl=M(Kl,"Players"),Kl.forEach(f),Jl.forEach(f),hl=x(Zt),rt=i(Zt,"LI",{class:!0});var Ql=c(rt);We=i(Ql,"BUTTON",{class:!0});var Xl=c(We);_l=M(Xl,"Fixtures"),Xl.forEach(f),Ql.forEach(f),Zt.forEach(f),pl=x(Yt),ue&&ue.l(Yt),Yt.forEach(f),Wl.forEach(f),this.h()},h(){r(m,"class","text-gray-300 text-xs"),r(v,"class","py-2 flex space-x-4"),r(A,"class","text-gray-300 text-xs"),r(d,"class","flex-grow flex flex-col items-center"),r(J,"class","flex-shrink-0 w-px bg-gray-400 self-stretch"),Ke(J,"min-width","2px"),Ke(J,"min-height","50px"),r(j,"class","text-gray-300 text-xs"),r(n,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),r(w,"class","text-gray-300 text-xs"),r(y,"class","flex-grow"),r(D,"class","flex-shrink-0 w-px bg-gray-400 self-stretch"),Ke(D,"min-width","2px"),Ke(D,"min-height","50px"),r(ce,"class","text-gray-300 text-xs"),r(Q,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),r(G,"class","text-gray-300 text-xs"),r(K,"class","flex-grow"),r(l,"class","flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"),r(ie,"class","text-gray-300 text-xs"),r(ne,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),r(me,"class","text-gray-300 text-xs"),r(se,"class","flex-grow mb-4 md:mb-0"),r(Ne,"class","h-px bg-gray-400 w-full md:w-px md:h-full md:self-stretch"),Ke(Ne,"min-height","2px"),Ke(Ne,"min-width","2px"),r(Pe,"class","text-gray-300 text-xs"),r(ke,"href",Xe=`/club?id=${a[2]?.id}`),r(Le,"class","w-10 ml-4 mr-4"),r(Ye,"class","w-v ml-1 mr-1 flex justify-center"),r(Ze,"href",Lt=`/club?id=${a[3]?.id}`),r(ut,"class","w-10 ml-4"),r(xe,"class","flex justify-center items-center"),r(Ee,"class","flex justify-center mb-2 mt-2"),r(Ue,"class","text-gray-300 text-xs text-center"),r(Ue,"href",Ft=`/club?id=${a[2]?.id}`),r(dt,"class","text-gray-300 text-xs text-center"),r(ct,"class","w-10 ml-4 mr-4"),r(Et,"class","w-v ml-2 mr-2"),r(qe,"class","text-gray-300 text-xs text-center"),r(qe,"href",Bt=`/club?id=${a[3]?.id}`),r(vt,"class","text-gray-300 text-xs text-center"),r(mt,"class","w-10 ml-4"),r(He,"class","flex justify-center"),r(ge,"class","flex-grow mb-4 md:mb-0"),r(et,"class","h-px bg-gray-400 w-full md:w-px md:h-full md:self-stretch"),Ke(et,"min-height","2px"),Ke(et,"min-width","2px"),r(tt,"class","text-gray-300 text-xs mt-4 md:mt-0"),r(lt,"href",Ut=`/player?id=${a[4]?.id}`),r(ht,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),r(Oe,"class","text-gray-300 text-xs"),r(Ae,"class","flex-grow"),r(te,"class","flex flex-col md:flex-row justify-start md:items-center text-white space-x-0 md:space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"),r(s,"class","flex flex-col md:flex-row"),r(t,"class","m-4"),r(Re,"class",Wt=`p-2 ${a[5]==="players"?"text-white":"text-gray-400"}`),r(st,"class",Jt=`mr-4 text-xs md:text-base ${a[5]==="players"?"active-tab":""}`),r(We,"class",Kt=`p-2 ${a[5]==="fixtures"?"text-white":"text-gray-400"}`),r(rt,"class",Qt=`mr-4 text-xs md:text-base ${a[5]==="fixtures"?"active-tab":""}`),r(ze,"class","flex bg-light-gray px-4 pt-2"),r(Fe,"class","bg-panel rounded-md m-4"),r(at,"class","m-4")},m(p,S){Be(p,t,S),e(t,s),e(s,l),e(l,d),e(d,m),e(m,P),e(d,h),e(d,v),we(C,v,null),e(v,R),we(N,v,null),e(d,T),e(d,A),e(A,q),e(l,O),e(l,J),e(l,z),e(l,y),e(y,j),e(y,F),e(y,n),e(n,u),e(y,I),e(y,w),e(l,_),e(l,D),e(l,ae),e(l,K),e(K,ce),e(K,_e),e(K,Q),e(Q,$e),e(K,L),e(K,G),e(G,pe),e(s,Ie),e(s,te),e(te,se),e(se,ie),e(se,Ve),e(se,ne),e(ne,E),e(se,H),e(se,me),e(te,ot),e(te,Ne),e(te,it),e(te,ge),e(ge,Pe),e(ge,nt),e(ge,Ee),e(Ee,xe),e(xe,Le),e(Le,ke),we(be,ke,null),e(xe,ft),e(xe,Ye),e(xe,sl),e(xe,ut),e(ut,Ze),we(Me,Ze,null),e(ge,rl),e(ge,He),e(He,ct),e(ct,dt),e(dt,Ue),e(Ue,Ot),e(He,ol),e(He,Et),e(He,il),e(He,mt),e(mt,vt),e(vt,qe),e(qe,Gt),e(te,nl),e(te,et),e(te,fl),e(te,Ae),e(Ae,tt),e(Ae,ul),e(Ae,ht),e(ht,lt),e(lt,Mt),e(Ae,cl),e(Ae,Oe),e(Oe,qt),e(Oe,dl),e(Oe,zt),e(Oe,ml),Be(p,Rt,S),Be(p,at,S),e(at,Fe),e(Fe,ze),e(ze,st),e(st,Re),e(Re,vl),e(ze,hl),e(ze,rt),e(rt,We),e(We,_l),e(Fe,pl),~fe&&Je[fe].m(Fe,null),Z=!0,gl||(Il=[tl(Re,"click",a[15]),tl(We,"click",a[16])],gl=!0)},p(p,S){(!Z||S&2)&&k!==(k=p[1].length+"")&&X(u,k),(!Z||S&128)&&re!==(re=p[9](p[7])+"")&&X($e,re),(!Z||S&1)&&U!==(U=p[0].name+"")&&X(pe,U),(!Z||S&128)&&Y!==(Y=p[10](p[7])+"")&&X(E,Y);const Ge={};S&4&&(Ge.primaryColour=p[2]?.primaryColourHex),S&4&&(Ge.secondaryColour=p[2]?.secondaryColourHex),S&4&&(Ge.thirdColour=p[2]?.thirdColourHex),be.$set(Ge),(!Z||S&4&&Xe!==(Xe=`/club?id=${p[2]?.id}`))&&r(ke,"href",Xe);const ve={};S&8&&(ve.primaryColour=p[3]?.primaryColourHex),S&8&&(ve.secondaryColour=p[3]?.secondaryColourHex),S&8&&(ve.thirdColour=p[3]?.thirdColourHex),Me.$set(ve),(!Z||S&8&&Lt!==(Lt=`/club?id=${p[3]?.id}`))&&r(Ze,"href",Lt),(!Z||S&4)&&It!==(It=p[2]?.abbreviatedName+"")&&X(Ot,It),(!Z||S&4&&Ft!==(Ft=`/club?id=${p[2]?.id}`))&&r(Ue,"href",Ft),(!Z||S&8)&&Tt!==(Tt=p[3]?.abbreviatedName+"")&&X(Gt,Tt),(!Z||S&8&&Bt!==(Bt=`/club?id=${p[3]?.id}`))&&r(qe,"href",Bt),(!Z||S&16)&&Dt!==(Dt=p[4]?.lastName+"")&&X(Mt,Dt),(!Z||S&16&&Ut!==(Ut=`/player?id=${p[4]?.id}`))&&r(lt,"href",Ut),(!Z||S&16)&&Vt!==(Vt=At(p[4]?.position??0)+"")&&X(qt,Vt),(!Z||S&16)&&Nt!==(Nt=p[4]?.totalPoints+"")&&X(zt,Nt),(!Z||S&32&&Wt!==(Wt=`p-2 ${p[5]==="players"?"text-white":"text-gray-400"}`))&&r(Re,"class",Wt),(!Z||S&32&&Jt!==(Jt=`mr-4 text-xs md:text-base ${p[5]==="players"?"active-tab":""}`))&&r(st,"class",Jt),(!Z||S&32&&Kt!==(Kt=`p-2 ${p[5]==="fixtures"?"text-white":"text-gray-400"}`))&&r(We,"class",Kt),(!Z||S&32&&Qt!==(Qt=`mr-4 text-xs md:text-base ${p[5]==="fixtures"?"active-tab":""}`))&&r(rt,"class",Qt);let Se=fe;fe=Tl(p),fe===Se?~fe&&Je[fe].p(p,S):(ue&&(St(),le(Je[Se],1,1,()=>{Je[Se]=null}),jt()),~fe?(ue=Je[fe],ue?ue.p(p,S):(ue=Je[fe]=El[fe](p),ue.c()),ee(ue,1),ue.m(Fe,null)):ue=null)},i(p){Z||(ee(C.$$.fragment,p),ee(N.$$.fragment,p),ee(be.$$.fragment,p),ee(Me.$$.fragment,p),ee(ue),Z=!0)},o(p){le(C.$$.fragment,p),le(N.$$.fragment,p),le(be.$$.fragment,p),le(Me.$$.fragment,p),le(ue),Z=!1},d(p){p&&(f(t),f(Rt),f(at)),Ce(C),Ce(N),Ce(be),Ce(Me),~fe&&Je[fe].d(),gl=!1,xa(Il)}}}function Ha(a){let t,s;return t=new Ca({}),{c(){ye(t.$$.fragment)},l(l){Te(t.$$.fragment,l)},m(l,d){we(t,l,d),s=!0},p:ma,i(l){s||(ee(t.$$.fragment,l),s=!0)},o(l){le(t.$$.fragment,l),s=!1},d(l){Ce(t,l)}}}function Aa(a){let t,s;return t=new Pa({props:{clubId:a[7]}}),{c(){ye(t.$$.fragment)},l(l){Te(t.$$.fragment,l)},m(l,d){we(t,l,d),s=!0},p(l,d){const m={};d&128&&(m.clubId=l[7]),t.$set(m)},i(l){s||(ee(t.$$.fragment,l),s=!0)},o(l){le(t.$$.fragment,l),s=!1},d(l){Ce(t,l)}}}function Sa(a){let t,s;return t=new Da({props:{players:a[1]}}),{c(){ye(t.$$.fragment)},l(l){Te(t.$$.fragment,l)},m(l,d){we(t,l,d),s=!0},p(l,d){const m={};d&2&&(m.players=l[1]),t.$set(m)},i(l){s||(ee(t.$$.fragment,l),s=!0)},o(l){le(t.$$.fragment,l),s=!1},d(l){Ce(t,l)}}}function ja(a){let t,s,l,d;const m=[Ha,ka],b=[];function P(h,v){return h[6]?0:1}return t=P(a),s=b[t]=m[t](a),{c(){s.c(),l=Zl()},l(h){s.l(h),l=Zl()},m(h,v){b[t].m(h,v),Be(h,l,v),d=!0},p(h,v){let C=t;t=P(h),t===C?b[t].p(h,v):(St(),le(b[C],1,1,()=>{b[C]=null}),jt(),s=b[t],s?s.p(h,v):(s=b[t]=m[t](h),s.c()),ee(s,1),s.m(l.parentNode,l))},i(h){d||(ee(s),d=!0)},o(h){le(s),d=!1},d(h){h&&f(l),b[t].d(h)}}}function La(a){let t,s;return t=new ya({props:{$$slots:{default:[ja]},$$scope:{ctx:a}}}),{c(){ye(t.$$.fragment)},l(l){Te(t.$$.fragment,l)},m(l,d){we(t,l,d),s=!0},p(l,[d]){const m={};d&67109119&&(m.$$scope={dirty:d,ctx:l}),t.$set(m)},i(l){s||(ee(t.$$.fragment,l),s=!0)},o(l){le(t.$$.fragment,l),s=!1},d(l){Ce(t,l)}}}let Qe=null;function Oa(a,t,s){let l,d;ga(a,$a,$=>s(14,d=$));let m=[],b=[],P,h=[],v=1,C,R=[],N=null,T=null,A=null,W=null,q="players",O,J,z,y,j=!0;ha(async()=>{try{await ll.sync(),await al.sync(),await sa.sync(),await ra.sync(),J=al.subscribe(_=>{b=_,s(12,h=b.map(D=>({fixture:D,homeTeam:F(D.homeTeamId),awayTeam:F(D.awayTeamId)})))}),O=ll.subscribe(_=>{s(11,m=_)}),z=sa.subscribe(_=>{P=_}),y=ra.subscribe(_=>{s(1,R=_.filter(D=>D.teamId===l))});let $=b.filter(_=>_.homeTeamId===l||_.awayTeamId===l);s(12,h=$.map(_=>({fixture:_,homeTeam:F(_.homeTeamId),awayTeam:F(_.awayTeamId)}))),s(4,W=R.sort((_,D)=>_.totalPoints-D.totalPoints).sort((_,D)=>Number(D.value)-Number(_.value))[0]),s(13,v=P?.activeGameweek??v),s(0,C=P?.activeSeason??C),N=$.find(_=>_.gameweek===v)??null,s(2,T=F(N?.homeTeamId??0)??null),s(3,A=F(N?.awayTeamId??0)??null)}catch($){pa({msg:{text:"Error fetching club details."},err:$}),console.error("Error fetching club details:",$)}finally{s(6,j=!1)}}),_a(()=>{O?.(),J?.(),z?.(),y?.()});let V=[];function F($){return m.find(_=>_.id===$)}function n($){s(5,q=$)}const k=$=>{const _=V.findIndex(D=>D.id===$);return _!==-1?_+1:"Not found"},u=$=>V.find(D=>D.id===$).points,I=()=>n("players"),w=()=>n("fixtures");return a.$$.update=()=>{a.$$.dirty&16384&&s(7,l=Number(d.url.searchParams.get("id"))),a.$$.dirty&14336&&h.length>0&&m.length>0&&(V=wa(h,m,v))},[C,R,T,A,W,q,j,l,n,k,u,m,h,v,d,I,w]}class Ra extends yl{constructor(t){super(),wl(this,t,Oa,La,bl,{})}}export{Ra as component};
