import{S as X,i as Y,s as Z,e as z,b as O,v as F,d as B,f as J,g as S,h as g,I as ee,o as te,O as ae,k as D,q as M,a as L,l as I,m as E,r as N,c as P,n as V,G as u,M as re,y as K,z as Q,A as R,H as le,B as W,L as se,u as C}from"./index.245a0e92.js";import{p as ne}from"./stores.1b616741.js";import{s as H}from"./system-store.944c9f5b.js";import{m as ie}from"./manager-store.717e10ee.js";import{t as oe}from"./Helpers.5827f282.js";import{V as ce}from"./ViewDetailsIcon.c2e63547.js";import{L as fe}from"./Layout.24679a1a.js";function U(o,e,t){const a=o.slice();return a[11]=e[t],a}function ue(o){let e,t,a,c,w,f,_,r,v,d,k,b,y,i=o[2].gameweeks,l=[];for(let s=0;s<i.length;s+=1)l[s]=$(U(o,i,s));const x=s=>B(l[s],1,1,()=>{l[s]=null});return{c(){e=D("div"),t=D("div"),a=D("div"),c=D("div"),w=M("Gameweek"),f=L(),_=D("div"),r=M("Points"),v=L(),d=D("div"),k=M(" "),b=L();for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=I(s,"DIV",{class:!0});var p=E(e);t=I(p,"DIV",{class:!0});var n=E(t);a=I(n,"DIV",{class:!0});var m=E(a);c=I(m,"DIV",{class:!0});var h=E(c);w=N(h,"Gameweek"),h.forEach(g),f=P(m),_=I(m,"DIV",{class:!0});var j=E(_);r=N(j,"Points"),j.forEach(g),v=P(m),d=I(m,"DIV",{class:!0});var q=E(d);k=N(q," "),q.forEach(g),m.forEach(g),b=P(n);for(let G=0;G<l.length;G+=1)l[G].l(n);n.forEach(g),p.forEach(g),this.h()},h(){V(c,"class","w-1/4 px-4"),V(_,"class","w-1/4 px-4"),V(d,"class","w-1/4 px-4"),V(a,"class","flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"),V(t,"class","overflow-x-auto flex-1"),V(e,"class","flex flex-col space-y-4 text-lg mt-4")},m(s,p){O(s,e,p),u(e,t),u(t,a),u(a,c),u(c,w),u(a,f),u(a,_),u(_,r),u(a,v),u(a,d),u(d,k),u(t,b);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(t,null);y=!0},p(s,p){if(p&5){i=s[2].gameweeks;let n;for(n=0;n<i.length;n+=1){const m=U(s,i,n);l[n]?(l[n].p(m,p),S(l[n],1)):(l[n]=$(m),l[n].c(),S(l[n],1),l[n].m(t,null))}for(F(),n=i.length;n<l.length;n+=1)x(n);J()}},i(s){if(!y){for(let p=0;p<i.length;p+=1)S(l[p]);y=!0}},o(s){l=l.filter(Boolean);for(let p=0;p<l.length;p+=1)B(l[p]);y=!1},d(s){s&&g(e),re(l,s)}}}function de(o){let e,t;return e=new fe({}),{c(){K(e.$$.fragment)},l(a){Q(e.$$.fragment,a)},m(a,c){R(e,a,c),t=!0},p:le,i(a){t||(S(e.$$.fragment,a),t=!0)},o(a){B(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function $(o){let e,t,a=o[11].gameweek+"",c,w,f,_=o[11].points+"",r,v,d,k,b,y,i,l,x,s,p;y=new ce({props:{className:"w-6 mr-2"}});function n(){return o[5](o[11])}return{c(){e=D("div"),t=D("div"),c=M(a),w=L(),f=D("div"),r=M(_),v=L(),d=D("div"),k=D("button"),b=D("span"),K(y.$$.fragment),i=M("View Details"),l=L(),this.h()},l(m){e=I(m,"DIV",{class:!0});var h=E(e);t=I(h,"DIV",{class:!0});var j=E(t);c=N(j,a),j.forEach(g),w=P(h),f=I(h,"DIV",{class:!0});var q=E(f);r=N(q,_),q.forEach(g),v=P(h),d=I(h,"DIV",{class:!0});var G=E(d);k=I(G,"BUTTON",{});var T=E(k);b=I(T,"SPAN",{class:!0});var A=E(b);Q(y.$$.fragment,A),i=N(A,"View Details"),A.forEach(g),T.forEach(g),G.forEach(g),l=P(h),h.forEach(g),this.h()},h(){V(t,"class","w-1/4 px-4"),V(f,"class","w-1/4 px-4"),V(b,"class","flex items-center"),V(d,"class","w-1/4 px-4 flex items-center"),V(e,"class","flex items-center justify-between p-2 py-4 border-b border-gray-700 cursor-pointer")},m(m,h){O(m,e,h),u(e,t),u(t,c),u(e,w),u(e,f),u(f,r),u(e,v),u(e,d),u(d,k),u(k,b),R(y,b,null),u(b,i),u(e,l),x=!0,s||(p=se(k,"click",n),s=!0)},p(m,h){o=m,(!x||h&4)&&a!==(a=o[11].gameweek+"")&&C(c,a),(!x||h&4)&&_!==(_=o[11].points+"")&&C(r,_)},i(m){x||(S(y.$$.fragment,m),x=!0)},o(m){B(y.$$.fragment,m),x=!1},d(m){m&&g(e),W(y),s=!1,p()}}}function me(o){let e,t,a,c;const w=[de,ue],f=[];function _(r,v){return r[1]?0:1}return e=_(o),t=f[e]=w[e](o),{c(){t.c(),a=z()},l(r){t.l(r),a=z()},m(r,v){f[e].m(r,v),O(r,a,v),c=!0},p(r,[v]){let d=e;e=_(r),e===d?f[e].p(r,v):(F(),B(f[d],1,1,()=>{f[d]=null}),J(),t=f[e],t?t.p(r,v):(t=f[e]=w[e](r),t.c()),S(t,1),t.m(a.parentNode,a))},i(r){c||(S(t),c=!0)},o(r){B(t),c=!1},d(r){f[e].d(r),r&&g(a)}}}function _e(o,e,t){let a,c;ee(o,ne,i=>t(4,c=i));let w,f=!0,{principalId:_=""}=e,{viewGameweekDetail:r}=e,v,d=1,k=null,b;te(async()=>{try{await H.sync(),b=H.subscribe(i=>{w=i}),d=w?.activeGameweek??d,k=w?.activeSeason??k,t(2,v=await ie.getManager(a??"",k?.id??1,d))}catch(i){oe.show("Error fetching manager gameweeks.","error"),console.error("Error fetching manager gameweeks:",i)}finally{t(1,f=!1)}}),ae(()=>{b?.()});const y=i=>r(i.principalId,i.gameweek);return o.$$set=i=>{"principalId"in i&&t(3,_=i.principalId),"viewGameweekDetail"in i&&t(0,r=i.viewGameweekDetail)},o.$$.update=()=>{o.$$.dirty&24&&(a=c.url.searchParams.get("id")??_)},[r,f,v,_,c,y]}class ye extends X{constructor(e){super(),Y(this,e,_e,me,Z,{principalId:3,viewGameweekDetail:0})}}export{ye as M};
