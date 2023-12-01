import{S as Nl,i as Gl,s as Al,k as o,q as m,a as u,l as n,m as i,r as _,h as r,c as v,n as s,J as jl,b as Ct,G as e,K as pl,L as Tt,g as fe,v as Nt,f as Gt,d as Ne,M as hl,N as Hl,o as Ml,O as Ll,H as Ol,x as gl,y as bt,z as St,A as xt,u as L,B as yt,X as Jl,P as Fl,I as Rl,e as wl,_ as bl,p as gt}from"../chunks/index.245a0e92.js";import{p as ql}from"../chunks/stores.7e512e60.js";import{t as Yt,a as xl,g as yl}from"../chunks/team-store.b04b0b2e.js";import{s as zt}from"../chunks/system-store.029b98ee.js";import{m as Kl}from"../chunks/manager-store.244c9f60.js";import{a as Yl,i as El}from"../chunks/Layout.950c6c4c.js";import{t as Bl}from"../chunks/toast-store.0b82f89c.js";import{p as el}from"../chunks/player-store.4c8784c1.js";import{B as Ul}from"../chunks/BadgeIcon.aeacabbb.js";import{M as zl}from"../chunks/manager-gameweeks.031c5d41.js";import{w as Wl}from"../chunks/index.c203a7c8.js";function Il(l,a,d){const t=l.slice();t[17]=a[d];const f=t[5](t[17].player.id);t[18]=f;const h=t[6](t[17].player.teamId);return t[19]=h,t}function $l(l,a,d){const t=l.slice();return t[22]=a[d],t}function Dl(l){let a,d,t=l[22]+"",f;return{c(){a=o("option"),d=m("Gameweek "),f=m(t),this.h()},l(h){a=n(h,"OPTION",{});var I=i(a);d=_(I,"Gameweek "),f=_(I,t),I.forEach(r),this.h()},h(){a.__value=l[22],a.value=a.__value},m(h,I){Ct(h,a,I),e(a,d),e(a,f)},p:Ol,d(h){h&&r(a)}}}function kl(l){let a,d,t=xl(l[17].player.position)+"",f,h,I,$,P,F=l[18]&&l[18].firstName.length>2?l[18].firstName.substring(0,1)+"."+l[18].lastName:"",j,J,O,T,R,H=l[19]?.friendlyName+"",V,X,x,q,Q=l[17].appearance+"",me,y,M,oe,B=(l[17].highestScoringPlayerId===l[18]?.id?1:0)+"",E,Y,et,Z,z=l[17].goals+"",qe,Ge,xe,ye,he=l[17].assists+"",_e,je,tt,N,ee=l[17].penaltySaves+"",Ee,Ie,lt,te,ue=l[17].cleanSheets+"",Je,Ke,ne,$e,De=l[17].saves+"",ge,Ye,st,W,Fe=l[17].yellowCards+"",ze,ie,at,K,ce=l[17].ownGoals+"",Ae,Re,He,le,ke=l[17].goalsConceded+"",we,We,Pe,ve,G=l[17].redCards+"",pe,k,ut,g,S=l[17].bonusPoints+"",b,U,nt,se,Ve=l[17].points+"",rt,Xe,w;var Se=yl(l[18]?.nationality??"");function it(p){return{props:{class:"w-4 h-4 mr-1",size:"100"}}}return Se&&($=gl(Se,it())),T=new Ul({props:{primaryColour:l[19]?.primaryColourHex,secondaryColour:l[19]?.secondaryColourHex,thirdColour:l[19]?.thirdColourHex,className:"w-6 h-6 mr-2"}}),{c(){a=o("div"),d=o("div"),f=m(t),h=u(),I=o("div"),$&&bt($.$$.fragment),P=u(),j=m(F),J=u(),O=o("div"),bt(T.$$.fragment),R=u(),V=m(H),X=u(),x=o("div"),q=o("div"),me=m(Q),M=u(),oe=o("div"),E=m(B),et=u(),Z=o("div"),qe=m(z),xe=u(),ye=o("div"),_e=m(he),tt=u(),N=o("div"),Ee=m(ee),lt=u(),te=o("div"),Je=m(ue),ne=u(),$e=o("div"),ge=m(De),st=u(),W=o("div"),ze=m(Fe),at=u(),K=o("div"),Ae=m(ce),He=u(),le=o("div"),we=m(ke),Pe=u(),ve=o("div"),pe=m(G),ut=u(),g=o("div"),b=m(S),nt=u(),se=o("div"),rt=m(Ve),Xe=u(),this.h()},l(p){a=n(p,"DIV",{class:!0});var c=i(a);d=n(c,"DIV",{class:!0});var Me=i(d);f=_(Me,t),Me.forEach(r),h=v(c),I=n(c,"DIV",{class:!0});var be=i(I);$&&St($.$$.fragment,be),P=v(be),j=_(be,F),be.forEach(r),J=v(c),O=n(c,"DIV",{class:!0});var Qe=i(O);St(T.$$.fragment,Qe),R=v(Qe),V=_(Qe,H),Qe.forEach(r),X=v(c),x=n(c,"DIV",{class:!0});var C=i(x);q=n(C,"DIV",{class:!0});var vt=i(q);me=_(vt,Q),vt.forEach(r),M=v(C),oe=n(C,"DIV",{class:!0});var Ze=i(oe);E=_(Ze,B),Ze.forEach(r),et=v(C),Z=n(C,"DIV",{class:!0});var mt=i(Z);qe=_(mt,z),mt.forEach(r),xe=v(C),ye=n(C,"DIV",{class:!0});var _t=i(ye);_e=_(_t,he),_t.forEach(r),tt=v(C),N=n(C,"DIV",{class:!0});var Le=i(N);Ee=_(Le,ee),Le.forEach(r),lt=v(C),te=n(C,"DIV",{class:!0});var Oe=i(te);Je=_(Oe,ue),Oe.forEach(r),ne=v(C),$e=n(C,"DIV",{class:!0});var Be=i($e);ge=_(Be,De),Be.forEach(r),st=v(C),W=n(C,"DIV",{class:!0});var Ue=i(W);ze=_(Ue,Fe),Ue.forEach(r),at=v(C),K=n(C,"DIV",{class:!0});var pt=i(K);Ae=_(pt,ce),pt.forEach(r),He=v(C),le=n(C,"DIV",{class:!0});var Ce=i(le);we=_(Ce,ke),Ce.forEach(r),Pe=v(C),ve=n(C,"DIV",{class:!0});var Et=i(ve);pe=_(Et,G),Et.forEach(r),ut=v(C),g=n(C,"DIV",{class:!0});var ot=i(g);b=_(ot,S),ot.forEach(r),C.forEach(r),nt=v(c),se=n(c,"DIV",{class:!0});var It=i(se);rt=_(It,Ve),It.forEach(r),Xe=v(c),c.forEach(r),this.h()},h(){s(d,"class","w-1/12 text-center mx-4"),s(I,"class","w-2/12"),s(O,"class","w-2/12 text-center flex items-center"),s(q,"class",y=`w-1/12 text-center ${l[17].appearance>0?"":"text-gray-500"}`),s(oe,"class",Y=`w-1/12 text-center ${l[17].highestScoringPlayerId===l[18]?.id?"":"text-gray-500"}`),s(Z,"class",Ge=`w-1/12 text-center ${l[17].goals>0?"":"text-gray-500"}`),s(ye,"class",je=`w-1/12 text-center ${l[17].assists>0?"":"text-gray-500"}`),s(N,"class",Ie=`w-1/12 text-center ${l[17].penaltySaves>0?"":"text-gray-500"}`),s(te,"class",Ke=`w-1/12 text-center ${l[17].cleanSheets>0?"":"text-gray-500"}`),s($e,"class",Ye=`w-1/12 text-center ${l[17].saves>0?"":"text-gray-500"}`),s(W,"class",ie=`w-1/12 text-center ${l[17].yellowCards>0?"":"text-gray-500"}`),s(K,"class",Re=`w-1/12 text-center ${l[17].ownGoals>0?"":"text-gray-500"}`),s(le,"class",We=`w-1/12 text-center ${l[17].goalsConceded>0?"":"text-gray-500"}`),s(ve,"class",k=`w-1/12 text-center ${l[17].redCards>0?"":"text-gray-500"}`),s(g,"class",U=`w-1/12 text-center ${l[17].bonusPoints>0?"":"text-gray-500"}`),s(x,"class","w-1/2 flex"),s(se,"class","w-1/12 text-center"),s(a,"class","flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer")},m(p,c){Ct(p,a,c),e(a,d),e(d,f),e(a,h),e(a,I),$&&xt($,I,null),e(I,P),e(I,j),e(a,J),e(a,O),xt(T,O,null),e(O,R),e(O,V),e(a,X),e(a,x),e(x,q),e(q,me),e(x,M),e(x,oe),e(oe,E),e(x,et),e(x,Z),e(Z,qe),e(x,xe),e(x,ye),e(ye,_e),e(x,tt),e(x,N),e(N,Ee),e(x,lt),e(x,te),e(te,Je),e(x,ne),e(x,$e),e($e,ge),e(x,st),e(x,W),e(W,ze),e(x,at),e(x,K),e(K,Ae),e(x,He),e(x,le),e(le,we),e(x,Pe),e(x,ve),e(ve,pe),e(x,ut),e(x,g),e(g,b),e(a,nt),e(a,se),e(se,rt),e(a,Xe),w=!0},p(p,c){if((!w||c&4)&&t!==(t=xl(p[17].player.position)+"")&&L(f,t),c&4&&Se!==(Se=yl(p[18]?.nationality??""))){if($){Nt();const be=$;Ne(be.$$.fragment,1,0,()=>{yt(be,1)}),Gt()}Se?($=gl(Se,it()),bt($.$$.fragment),fe($.$$.fragment,1),xt($,I,P)):$=null}(!w||c&4)&&F!==(F=p[18]&&p[18].firstName.length>2?p[18].firstName.substring(0,1)+"."+p[18].lastName:"")&&L(j,F);const Me={};c&4&&(Me.primaryColour=p[19]?.primaryColourHex),c&4&&(Me.secondaryColour=p[19]?.secondaryColourHex),c&4&&(Me.thirdColour=p[19]?.thirdColourHex),T.$set(Me),(!w||c&4)&&H!==(H=p[19]?.friendlyName+"")&&L(V,H),(!w||c&4)&&Q!==(Q=p[17].appearance+"")&&L(me,Q),(!w||c&4&&y!==(y=`w-1/12 text-center ${p[17].appearance>0?"":"text-gray-500"}`))&&s(q,"class",y),(!w||c&4)&&B!==(B=(p[17].highestScoringPlayerId===p[18]?.id?1:0)+"")&&L(E,B),(!w||c&4&&Y!==(Y=`w-1/12 text-center ${p[17].highestScoringPlayerId===p[18]?.id?"":"text-gray-500"}`))&&s(oe,"class",Y),(!w||c&4)&&z!==(z=p[17].goals+"")&&L(qe,z),(!w||c&4&&Ge!==(Ge=`w-1/12 text-center ${p[17].goals>0?"":"text-gray-500"}`))&&s(Z,"class",Ge),(!w||c&4)&&he!==(he=p[17].assists+"")&&L(_e,he),(!w||c&4&&je!==(je=`w-1/12 text-center ${p[17].assists>0?"":"text-gray-500"}`))&&s(ye,"class",je),(!w||c&4)&&ee!==(ee=p[17].penaltySaves+"")&&L(Ee,ee),(!w||c&4&&Ie!==(Ie=`w-1/12 text-center ${p[17].penaltySaves>0?"":"text-gray-500"}`))&&s(N,"class",Ie),(!w||c&4)&&ue!==(ue=p[17].cleanSheets+"")&&L(Je,ue),(!w||c&4&&Ke!==(Ke=`w-1/12 text-center ${p[17].cleanSheets>0?"":"text-gray-500"}`))&&s(te,"class",Ke),(!w||c&4)&&De!==(De=p[17].saves+"")&&L(ge,De),(!w||c&4&&Ye!==(Ye=`w-1/12 text-center ${p[17].saves>0?"":"text-gray-500"}`))&&s($e,"class",Ye),(!w||c&4)&&Fe!==(Fe=p[17].yellowCards+"")&&L(ze,Fe),(!w||c&4&&ie!==(ie=`w-1/12 text-center ${p[17].yellowCards>0?"":"text-gray-500"}`))&&s(W,"class",ie),(!w||c&4)&&ce!==(ce=p[17].ownGoals+"")&&L(Ae,ce),(!w||c&4&&Re!==(Re=`w-1/12 text-center ${p[17].ownGoals>0?"":"text-gray-500"}`))&&s(K,"class",Re),(!w||c&4)&&ke!==(ke=p[17].goalsConceded+"")&&L(we,ke),(!w||c&4&&We!==(We=`w-1/12 text-center ${p[17].goalsConceded>0?"":"text-gray-500"}`))&&s(le,"class",We),(!w||c&4)&&G!==(G=p[17].redCards+"")&&L(pe,G),(!w||c&4&&k!==(k=`w-1/12 text-center ${p[17].redCards>0?"":"text-gray-500"}`))&&s(ve,"class",k),(!w||c&4)&&S!==(S=p[17].bonusPoints+"")&&L(b,S),(!w||c&4&&U!==(U=`w-1/12 text-center ${p[17].bonusPoints>0?"":"text-gray-500"}`))&&s(g,"class",U),(!w||c&4)&&Ve!==(Ve=p[17].points+"")&&L(rt,Ve)},i(p){w||($&&fe($.$$.fragment,p),fe(T.$$.fragment,p),w=!0)},o(p){$&&Ne($.$$.fragment,p),Ne(T.$$.fragment,p),w=!1},d(p){p&&r(a),$&&yt($),yt(T)}}}function Xl(l){let a,d,t,f,h,I,$,P,F,j,J,O,T,R,H,V,X,x,q,Q,me,y,M,oe,B,E,Y,et,Z,z,qe,Ge,xe,ye,he,_e,je,tt,N,ee,Ee,Ie,lt,te,ue,Je,Ke,ne,$e,De,ge,Ye,st,W,Fe,ze,ie,at,K,ce,Ae,Re,He,le,ke,we,We,Pe,ve=l[3],G=[];for(let g=0;g<ve.length;g+=1)G[g]=Dl($l(l,ve,g));let pe=l[2],k=[];for(let g=0;g<pe.length;g+=1)k[g]=kl(Il(l,pe,g));const ut=g=>Ne(k[g],1,1,()=>{k[g]=null});return{c(){a=o("div"),d=o("div"),t=o("div"),f=o("button"),h=m("<"),$=u(),P=o("select");for(let g=0;g<G.length;g+=1)G[g].c();F=u(),j=o("button"),J=m(">"),T=u(),R=o("div"),H=o("div"),V=o("div"),X=o("div"),x=m("Position"),q=u(),Q=o("div"),me=m("Player"),y=u(),M=o("div"),oe=m("Team"),B=u(),E=o("div"),Y=o("div"),et=m("A"),Z=u(),z=o("div"),qe=m("HSP"),Ge=u(),xe=o("div"),ye=m("GS"),he=u(),_e=o("div"),je=m("GA"),tt=u(),N=o("div"),ee=m("PS"),Ee=u(),Ie=o("div"),lt=m("CS"),te=u(),ue=o("div"),Je=m("KS"),Ke=u(),ne=o("div"),$e=m("YC"),De=u(),ge=o("div"),Ye=m("OG"),st=u(),W=o("div"),Fe=m("GC"),ze=u(),ie=o("div"),at=m("RC"),K=u(),ce=o("div"),Ae=m("B"),Re=u(),He=o("div"),le=m("PTS"),ke=u();for(let g=0;g<k.length;g+=1)k[g].c();this.h()},l(g){a=n(g,"DIV",{class:!0});var S=i(a);d=n(S,"DIV",{class:!0});var b=i(d);t=n(b,"DIV",{class:!0});var U=i(t);f=n(U,"BUTTON",{class:!0});var nt=i(f);h=_(nt,"<"),nt.forEach(r),$=v(U),P=n(U,"SELECT",{class:!0});var se=i(P);for(let Ce=0;Ce<G.length;Ce+=1)G[Ce].l(se);se.forEach(r),F=v(U),j=n(U,"BUTTON",{class:!0});var Ve=i(j);J=_(Ve,">"),Ve.forEach(r),U.forEach(r),b.forEach(r),T=v(S),R=n(S,"DIV",{class:!0});var rt=i(R);H=n(rt,"DIV",{class:!0});var Xe=i(H);V=n(Xe,"DIV",{class:!0});var w=i(V);X=n(w,"DIV",{class:!0});var Se=i(X);x=_(Se,"Position"),Se.forEach(r),q=v(w),Q=n(w,"DIV",{class:!0});var it=i(Q);me=_(it,"Player"),it.forEach(r),y=v(w),M=n(w,"DIV",{class:!0});var p=i(M);oe=_(p,"Team"),p.forEach(r),B=v(w),E=n(w,"DIV",{class:!0});var c=i(E);Y=n(c,"DIV",{class:!0});var Me=i(Y);et=_(Me,"A"),Me.forEach(r),Z=v(c),z=n(c,"DIV",{class:!0});var be=i(z);qe=_(be,"HSP"),be.forEach(r),Ge=v(c),xe=n(c,"DIV",{class:!0});var Qe=i(xe);ye=_(Qe,"GS"),Qe.forEach(r),he=v(c),_e=n(c,"DIV",{class:!0});var C=i(_e);je=_(C,"GA"),C.forEach(r),tt=v(c),N=n(c,"DIV",{class:!0});var vt=i(N);ee=_(vt,"PS"),vt.forEach(r),Ee=v(c),Ie=n(c,"DIV",{class:!0});var Ze=i(Ie);lt=_(Ze,"CS"),Ze.forEach(r),te=v(c),ue=n(c,"DIV",{class:!0});var mt=i(ue);Je=_(mt,"KS"),mt.forEach(r),Ke=v(c),ne=n(c,"DIV",{class:!0});var _t=i(ne);$e=_(_t,"YC"),_t.forEach(r),De=v(c),ge=n(c,"DIV",{class:!0});var Le=i(ge);Ye=_(Le,"OG"),Le.forEach(r),st=v(c),W=n(c,"DIV",{class:!0});var Oe=i(W);Fe=_(Oe,"GC"),Oe.forEach(r),ze=v(c),ie=n(c,"DIV",{class:!0});var Be=i(ie);at=_(Be,"RC"),Be.forEach(r),K=v(c),ce=n(c,"DIV",{class:!0});var Ue=i(ce);Ae=_(Ue,"B"),Ue.forEach(r),c.forEach(r),Re=v(w),He=n(w,"DIV",{class:!0});var pt=i(He);le=_(pt,"PTS"),pt.forEach(r),w.forEach(r),ke=v(Xe);for(let Ce=0;Ce<k.length;Ce+=1)k[Ce].l(Xe);Xe.forEach(r),rt.forEach(r),S.forEach(r),this.h()},h(){s(f,"class","text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"),f.disabled=I=l[0]===1,s(P,"class","p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"),l[0]===void 0&&jl(()=>l[8].call(P)),s(j,"class","text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"),j.disabled=O=l[0]===38,s(t,"class","flex items-center space-x-2"),s(d,"class","flex flex-col sm:flex-row gap-4 sm:gap-8"),s(X,"class","w-1/12 text-center mx-4"),s(Q,"class","w-2/12"),s(M,"class","w-2/12 text-center"),s(Y,"class","w-1/12 text-center"),s(z,"class","w-1/12 text-center"),s(xe,"class","w-1/12 text-center"),s(_e,"class","w-1/12 text-center"),s(N,"class","w-1/12 text-center"),s(Ie,"class","w-1/12 text-center"),s(ue,"class","w-1/12 text-center"),s(ne,"class","w-1/12 text-center"),s(ge,"class","w-1/12 text-center"),s(W,"class","w-1/12 text-center"),s(ie,"class","w-1/12 text-center"),s(ce,"class","w-1/12 text-center"),s(E,"class","w-1/2 flex"),s(He,"class","w-1/12 text-center"),s(V,"class","flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"),s(H,"class","overflow-x-auto flex-1"),s(R,"class","flex flex-col space-y-4 mt-4 text-lg"),s(a,"class","mx-5 my-4")},m(g,S){Ct(g,a,S),e(a,d),e(d,t),e(t,f),e(f,h),e(t,$),e(t,P);for(let b=0;b<G.length;b+=1)G[b]&&G[b].m(P,null);pl(P,l[0],!0),e(t,F),e(t,j),e(j,J),e(a,T),e(a,R),e(R,H),e(H,V),e(V,X),e(X,x),e(V,q),e(V,Q),e(Q,me),e(V,y),e(V,M),e(M,oe),e(V,B),e(V,E),e(E,Y),e(Y,et),e(E,Z),e(E,z),e(z,qe),e(E,Ge),e(E,xe),e(xe,ye),e(E,he),e(E,_e),e(_e,je),e(E,tt),e(E,N),e(N,ee),e(E,Ee),e(E,Ie),e(Ie,lt),e(E,te),e(E,ue),e(ue,Je),e(E,Ke),e(E,ne),e(ne,$e),e(E,De),e(E,ge),e(ge,Ye),e(E,st),e(E,W),e(W,Fe),e(E,ze),e(E,ie),e(ie,at),e(E,K),e(E,ce),e(ce,Ae),e(V,Re),e(V,He),e(He,le),e(H,ke);for(let b=0;b<k.length;b+=1)k[b]&&k[b].m(H,null);we=!0,We||(Pe=[Tt(f,"click",l[7]),Tt(P,"change",l[8]),Tt(j,"click",l[9])],We=!0)},p(g,[S]){if((!we||S&9&&I!==(I=g[0]===1))&&(f.disabled=I),S&8){ve=g[3];let b;for(b=0;b<ve.length;b+=1){const U=$l(g,ve,b);G[b]?G[b].p(U,S):(G[b]=Dl(U),G[b].c(),G[b].m(P,null))}for(;b<G.length;b+=1)G[b].d(1);G.length=ve.length}if(S&9&&pl(P,g[0]),(!we||S&9&&O!==(O=g[0]===38))&&(j.disabled=O),S&100){pe=g[2];let b;for(b=0;b<pe.length;b+=1){const U=Il(g,pe,b);k[b]?(k[b].p(U,S),fe(k[b],1)):(k[b]=kl(U),k[b].c(),fe(k[b],1),k[b].m(H,null))}for(Nt(),b=pe.length;b<k.length;b+=1)ut(b);Gt()}},i(g){if(!we){for(let S=0;S<pe.length;S+=1)fe(k[S]);we=!0}},o(g){k=k.filter(Boolean);for(let S=0;S<k.length;S+=1)Ne(k[S]);we=!1},d(g){g&&r(a),hl(G,g),hl(k,g),We=!1,Hl(Pe)}}}function Ql(l,a,d){let t,f=Ol,h=()=>(f(),f=Jl(R,y=>d(16,t=y)),R);l.$$.on_destroy.push(()=>f());let I=[],$=[],P,F,j,J,O=Array.from({length:38},(y,M)=>M+1),{selectedGameweek:T}=a,{fantasyTeam:R}=a;h();let H=[];Ml(async()=>{try{await zt.sync(),await Yt.sync(),await el.sync(),F=zt.subscribe(y=>{P=y}),j=Yt.subscribe(y=>{I=y}),J=el.subscribe(y=>{$=y}),d(0,T=P?.activeGameweek??T),d(2,H=await el.getGameweekPlayers(t,T))}catch(y){Bl.show("Error fetching manager gameweek detail.","error"),console.error("Error fetching manager gameweek detail:",y)}}),Ll(()=>{j?.(),J?.(),F?.()});const V=y=>{d(0,T=Math.max(1,Math.min(38,T+y)))};function X(y){return $.find(M=>M.id===y)??null}function x(y){return I.find(M=>M.id===y)??null}const q=()=>V(-1);function Q(){T=Fl(this),d(0,T),d(3,O)}const me=()=>V(1);return l.$$set=y=>{"selectedGameweek"in y&&d(0,T=y.selectedGameweek),"fantasyTeam"in y&&h(d(1,R=y.fantasyTeam))},[T,R,H,O,V,X,x,q,Q,me]}class Zl extends Nl{constructor(a){super(),Gl(this,a,Ql,Xl,Al,{selectedGameweek:0,fantasyTeam:1})}}function Pl(l){let a,d,t,f,h,I,$,P,F,j,J,O,T,R,H,V=l[1].displayName+"",X,x,q,Q,me,y,M,oe,B,E,Y,et,Z,z,qe,Ge=l[4]?.abbreviatedName+"",xe,ye,he,_e=l[4]?.name+"",je,tt,N,ee,Ee,Ie,lt,te,ue=l[1].weeklyPositionText+"",Je,Ke,ne,$e,De=l[1].weeklyPoints.toLocaleString()+"",ge,Ye,st,W,Fe,ze,ie,at,K,ce,Ae=l[4]?.friendlyName+"",Re,He,le,ke=l[1].monthlyPositionText+"",we,We,Pe,ve,G=l[1].monthlyPoints.toLocaleString()+"",pe,k,ut,g,S,b,U,nt,se,Ve,rt,Xe,w,Se=l[1].seasonPositionText+"",it,p,c,Me,be=l[1].seasonPoints.toLocaleString()+"",Qe,C,vt,Ze,mt,_t,Le,Oe,Be,Ue,pt,Ce,Et,ot,It,At,Wt,wt,Xt,ct,Ht,de,Qt,tl;z=new Ul({props:{className:"w-7 mr-2",primaryColour:l[4]?.primaryColourHex,secondaryColour:l[4]?.secondaryColourHex,thirdColour:l[4]?.thirdColourHex}});let Te=l[0]==="details"&&Vl(),ae=l[0]==="details"&&Sl(l),re=l[0]==="gameweeks"&&Cl(l);return{c(){a=o("div"),d=o("div"),t=o("div"),f=o("div"),h=o("img"),P=u(),F=o("div"),j=u(),J=o("div"),O=o("p"),T=m("Manager"),R=u(),H=o("p"),X=m(V),x=u(),q=o("p"),Q=m("Joined: "),me=m(l[2]),y=u(),M=o("div"),oe=u(),B=o("div"),E=o("p"),Y=m("Favourite Team"),et=u(),Z=o("p"),bt(z.$$.fragment),qe=u(),xe=m(Ge),ye=u(),he=o("p"),je=m(_e),tt=u(),N=o("div"),ee=o("div"),Ee=o("p"),Ie=m("Leaderboards"),lt=u(),te=o("p"),Je=m(ue),Ke=u(),ne=o("span"),$e=m("("),ge=m(De),Ye=m(")"),st=u(),W=o("p"),Fe=m("Weekly"),ze=u(),ie=o("div"),at=u(),K=o("div"),ce=o("p"),Re=m(Ae),He=u(),le=o("p"),we=m(ke),We=u(),Pe=o("span"),ve=m("("),pe=m(G),k=m(")"),ut=u(),g=o("p"),S=m("Club"),b=u(),U=o("div"),nt=u(),se=o("div"),Ve=o("p"),rt=m(Tl),Xe=u(),w=o("p"),it=m(Se),p=u(),c=o("span"),Me=m("("),Qe=m(be),C=m(")"),vt=u(),Ze=o("p"),mt=m("Season"),_t=u(),Le=o("div"),Oe=o("div"),Be=o("div"),Ue=o("button"),pt=m("Details"),Et=u(),ot=o("button"),It=m("Gameweeks"),Wt=u(),wt=o("div"),Te&&Te.c(),Xt=u(),ct=o("div"),ae&&ae.c(),Ht=u(),re&&re.c(),this.h()},l(D){a=n(D,"DIV",{class:!0});var A=i(a);d=n(A,"DIV",{class:!0});var ht=i(d);t=n(ht,"DIV",{class:!0});var dt=i(t);f=n(dt,"DIV",{class:!0});var ll=i(f);h=n(ll,"IMG",{class:!0,src:!0,alt:!0}),ll.forEach(r),P=v(dt),F=n(dt,"DIV",{class:!0,style:!0}),i(F).forEach(r),j=v(dt),J=n(dt,"DIV",{class:!0});var $t=i(J);O=n($t,"P",{class:!0});var sl=i(O);T=_(sl,"Manager"),sl.forEach(r),R=v($t),H=n($t,"P",{class:!0});var al=i(H);X=_(al,V),al.forEach(r),x=v($t),q=n($t,"P",{class:!0});var Zt=i(q);Q=_(Zt,"Joined: "),me=_(Zt,l[2]),Zt.forEach(r),$t.forEach(r),y=v(dt),M=n(dt,"DIV",{class:!0,style:!0}),i(M).forEach(r),oe=v(dt),B=n(dt,"DIV",{class:!0});var Dt=i(B);E=n(Dt,"P",{class:!0});var rl=i(E);Y=_(rl,"Favourite Team"),rl.forEach(r),et=v(Dt),Z=n(Dt,"P",{class:!0});var Mt=i(Z);St(z.$$.fragment,Mt),qe=v(Mt),xe=_(Mt,Ge),Mt.forEach(r),ye=v(Dt),he=n(Dt,"P",{class:!0});var ol=i(he);je=_(ol,_e),ol.forEach(r),Dt.forEach(r),dt.forEach(r),tt=v(ht),N=n(ht,"DIV",{class:!0});var ft=i(N);ee=n(ft,"DIV",{class:!0});var kt=i(ee);Ee=n(kt,"P",{class:!0});var nl=i(Ee);Ie=_(nl,"Leaderboards"),nl.forEach(r),lt=v(kt),te=n(kt,"P",{class:!0});var Lt=i(te);Je=_(Lt,ue),Ke=v(Lt),ne=n(Lt,"SPAN",{class:!0});var Ot=i(ne);$e=_(Ot,"("),ge=_(Ot,De),Ye=_(Ot,")"),Ot.forEach(r),Lt.forEach(r),st=v(kt),W=n(kt,"P",{class:!0});var il=i(W);Fe=_(il,"Weekly"),il.forEach(r),kt.forEach(r),ze=v(ft),ie=n(ft,"DIV",{class:!0,style:!0}),i(ie).forEach(r),at=v(ft),K=n(ft,"DIV",{class:!0});var Pt=i(K);ce=n(Pt,"P",{class:!0});var cl=i(ce);Re=_(cl,Ae),cl.forEach(r),He=v(Pt),le=n(Pt,"P",{class:!0});var Bt=i(le);we=_(Bt,ke),We=v(Bt),Pe=n(Bt,"SPAN",{class:!0});var Ut=i(Pe);ve=_(Ut,"("),pe=_(Ut,G),k=_(Ut,")"),Ut.forEach(r),Bt.forEach(r),ut=v(Pt),g=n(Pt,"P",{class:!0});var dl=i(g);S=_(dl,"Club"),dl.forEach(r),Pt.forEach(r),b=v(ft),U=n(ft,"DIV",{class:!0,style:!0}),i(U).forEach(r),nt=v(ft),se=n(ft,"DIV",{class:!0});var Vt=i(se);Ve=n(Vt,"P",{class:!0});var fl=i(Ve);rt=_(fl,Tl),fl.forEach(r),Xe=v(Vt),w=n(Vt,"P",{class:!0});var jt=i(w);it=_(jt,Se),p=v(jt),c=n(jt,"SPAN",{class:!0});var Jt=i(c);Me=_(Jt,"("),Qe=_(Jt,be),C=_(Jt,")"),Jt.forEach(r),jt.forEach(r),vt=v(Vt),Ze=n(Vt,"P",{class:!0});var ul=i(Ze);mt=_(ul,"Season"),ul.forEach(r),Vt.forEach(r),ft.forEach(r),ht.forEach(r),_t=v(A),Le=n(A,"DIV",{class:!0});var Ft=i(Le);Oe=n(Ft,"DIV",{class:!0});var Rt=i(Oe);Be=n(Rt,"DIV",{class:!0});var qt=i(Be);Ue=n(qt,"BUTTON",{class:!0});var vl=i(Ue);pt=_(vl,"Details"),vl.forEach(r),Et=v(qt),ot=n(qt,"BUTTON",{class:!0});var ml=i(ot);It=_(ml,"Gameweeks"),ml.forEach(r),qt.forEach(r),Wt=v(Rt),wt=n(Rt,"DIV",{class:!0});var _l=i(wt);Te&&Te.l(_l),_l.forEach(r),Rt.forEach(r),Xt=v(Ft),ct=n(Ft,"DIV",{class:!0});var Kt=i(ct);ae&&ae.l(Kt),Ht=v(Kt),re&&re.l(Kt),Kt.forEach(r),Ft.forEach(r),A.forEach(r),this.h()},h(){s(h,"class","w-20"),bl(h.src,I=l[3])||s(h,"src",I),s(h,"alt",$=l[1].displayName),s(f,"class","flex"),s(F,"class","flex-shrink-0 w-px bg-gray-400 self-stretch"),gt(F,"min-width","2px"),gt(F,"min-height","50px"),s(O,"class","text-gray-300 text-xs"),s(H,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),s(q,"class","text-gray-300 text-xs"),s(J,"class","flex-grow"),s(M,"class","flex-shrink-0 w-px bg-gray-400 self-stretch"),gt(M,"min-width","2px"),gt(M,"min-height","50px"),s(E,"class","text-gray-300 text-xs"),s(Z,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold flex items-center"),s(he,"class","text-gray-300 text-xs"),s(B,"class","flex-grow"),s(t,"class","flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"),s(Ee,"class","text-gray-300 text-xs"),s(ne,"class","text-xs"),s(te,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),s(W,"class","text-gray-300 text-xs"),s(ee,"class","flex-grow"),s(ie,"class","flex-shrink-0 w-px bg-gray-400 self-stretch"),gt(ie,"min-width","2px"),gt(ie,"min-height","50px"),s(ce,"class","text-gray-300 text-xs"),s(Pe,"class","text-xs"),s(le,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),s(g,"class","text-gray-300 text-xs"),s(K,"class","flex-grow"),s(U,"class","flex-shrink-0 w-px bg-gray-400 self-stretch"),gt(U,"min-width","2px"),gt(U,"min-height","50px"),s(Ve,"class","text-gray-300 text-xs"),s(c,"class","text-xs"),s(w,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),s(Ze,"class","text-gray-300 text-xs"),s(se,"class","flex-grow"),s(N,"class","flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"),s(d,"class","flex flex-col md:flex-row"),s(Ue,"class",Ce=`btn ${l[0]==="details"?"fpl-button":"inactive-btn"} px-4 py-2 rounded-l-md font-bold text-md min-w-[125px]`),s(ot,"class",At=`btn ${l[0]==="gameweeks"?"fpl-button":"inactive-btn"} px-4 py-2 rounded-r-md font-bold text-md min-w-[125px]`),s(Be,"class","flex"),s(wt,"class","px-4"),s(Oe,"class","flex justify-between items-center text-white px-4 pt-4 rounded-md w-full"),s(ct,"class","w-full"),s(Le,"class","flex flex-col bg-panel m-4 rounded-md"),s(a,"class","m-4")},m(D,A){Ct(D,a,A),e(a,d),e(d,t),e(t,f),e(f,h),e(t,P),e(t,F),e(t,j),e(t,J),e(J,O),e(O,T),e(J,R),e(J,H),e(H,X),e(J,x),e(J,q),e(q,Q),e(q,me),e(t,y),e(t,M),e(t,oe),e(t,B),e(B,E),e(E,Y),e(B,et),e(B,Z),xt(z,Z,null),e(Z,qe),e(Z,xe),e(B,ye),e(B,he),e(he,je),e(d,tt),e(d,N),e(N,ee),e(ee,Ee),e(Ee,Ie),e(ee,lt),e(ee,te),e(te,Je),e(te,Ke),e(te,ne),e(ne,$e),e(ne,ge),e(ne,Ye),e(ee,st),e(ee,W),e(W,Fe),e(N,ze),e(N,ie),e(N,at),e(N,K),e(K,ce),e(ce,Re),e(K,He),e(K,le),e(le,we),e(le,We),e(le,Pe),e(Pe,ve),e(Pe,pe),e(Pe,k),e(K,ut),e(K,g),e(g,S),e(N,b),e(N,U),e(N,nt),e(N,se),e(se,Ve),e(Ve,rt),e(se,Xe),e(se,w),e(w,it),e(w,p),e(w,c),e(c,Me),e(c,Qe),e(c,C),e(se,vt),e(se,Ze),e(Ze,mt),e(a,_t),e(a,Le),e(Le,Oe),e(Oe,Be),e(Be,Ue),e(Ue,pt),e(Be,Et),e(Be,ot),e(ot,It),e(Oe,Wt),e(Oe,wt),Te&&Te.m(wt,null),e(Le,Xt),e(Le,ct),ae&&ae.m(ct,null),e(ct,Ht),re&&re.m(ct,null),de=!0,Qt||(tl=[Tt(Ue,"click",l[11]),Tt(ot,"click",l[12])],Qt=!0)},p(D,A){(!de||A&8&&!bl(h.src,I=D[3]))&&s(h,"src",I),(!de||A&2&&$!==($=D[1].displayName))&&s(h,"alt",$),(!de||A&2)&&V!==(V=D[1].displayName+"")&&L(X,V),(!de||A&4)&&L(me,D[2]);const ht={};A&16&&(ht.primaryColour=D[4]?.primaryColourHex),A&16&&(ht.secondaryColour=D[4]?.secondaryColourHex),A&16&&(ht.thirdColour=D[4]?.thirdColourHex),z.$set(ht),(!de||A&16)&&Ge!==(Ge=D[4]?.abbreviatedName+"")&&L(xe,Ge),(!de||A&16)&&_e!==(_e=D[4]?.name+"")&&L(je,_e),(!de||A&2)&&ue!==(ue=D[1].weeklyPositionText+"")&&L(Je,ue),(!de||A&2)&&De!==(De=D[1].weeklyPoints.toLocaleString()+"")&&L(ge,De),(!de||A&16)&&Ae!==(Ae=D[4]?.friendlyName+"")&&L(Re,Ae),(!de||A&2)&&ke!==(ke=D[1].monthlyPositionText+"")&&L(we,ke),(!de||A&2)&&G!==(G=D[1].monthlyPoints.toLocaleString()+"")&&L(pe,G),(!de||A&2)&&Se!==(Se=D[1].seasonPositionText+"")&&L(it,Se),(!de||A&2)&&be!==(be=D[1].seasonPoints.toLocaleString()+"")&&L(Qe,be),(!de||A&1&&Ce!==(Ce=`btn ${D[0]==="details"?"fpl-button":"inactive-btn"} px-4 py-2 rounded-l-md font-bold text-md min-w-[125px]`))&&s(Ue,"class",Ce),(!de||A&1&&At!==(At=`btn ${D[0]==="gameweeks"?"fpl-button":"inactive-btn"} px-4 py-2 rounded-r-md font-bold text-md min-w-[125px]`))&&s(ot,"class",At),D[0]==="details"?Te||(Te=Vl(),Te.c(),Te.m(wt,null)):Te&&(Te.d(1),Te=null),D[0]==="details"?ae?(ae.p(D,A),A&1&&fe(ae,1)):(ae=Sl(D),ae.c(),fe(ae,1),ae.m(ct,Ht)):ae&&(Nt(),Ne(ae,1,1,()=>{ae=null}),Gt()),D[0]==="gameweeks"?re?(re.p(D,A),A&1&&fe(re,1)):(re=Cl(D),re.c(),fe(re,1),re.m(ct,null)):re&&(Nt(),Ne(re,1,1,()=>{re=null}),Gt())},i(D){de||(fe(z.$$.fragment,D),fe(ae),fe(re),de=!0)},o(D){Ne(z.$$.fragment,D),Ne(ae),Ne(re),de=!1},d(D){D&&r(a),yt(z),Te&&Te.d(),ae&&ae.d(),re&&re.d(),Qt=!1,Hl(tl)}}}function Vl(l){let a,d,t="0",f;return{c(){a=o("span"),d=m("Total Points: "),f=m(t),this.h()},l(h){a=n(h,"SPAN",{class:!0});var I=i(a);d=_(I,"Total Points: "),f=_(I,t),I.forEach(r),this.h()},h(){s(a,"class","text-2xl")},m(h,I){Ct(h,a,I),e(a,d),e(a,f)},d(h){h&&r(a)}}}function Sl(l){let a,d;return a=new Zl({props:{selectedGameweek:l[6],fantasyTeam:l[7]}}),{c(){bt(a.$$.fragment)},l(t){St(a.$$.fragment,t)},m(t,f){xt(a,t,f),d=!0},p(t,f){const h={};f&64&&(h.selectedGameweek=t[6]),a.$set(h)},i(t){d||(fe(a.$$.fragment,t),d=!0)},o(t){Ne(a.$$.fragment,t),d=!1},d(t){yt(a,t)}}}function Cl(l){let a,d;return a=new zl({props:{viewGameweekDetail:l[9],principalId:l[1].principalId}}),{c(){bt(a.$$.fragment)},l(t){St(a.$$.fragment,t)},m(t,f){xt(a,t,f),d=!0},p(t,f){const h={};f&2&&(h.principalId=t[1].principalId),a.$set(h)},i(t){d||(fe(a.$$.fragment,t),d=!0)},o(t){Ne(a.$$.fragment,t),d=!1},d(t){yt(a,t)}}}function es(l){let a,d,t=l[5]&&Pl(l);return{c(){t&&t.c(),a=wl()},l(f){t&&t.l(f),a=wl()},m(f,h){t&&t.m(f,h),Ct(f,a,h),d=!0},p(f,h){f[5]?t?(t.p(f,h),h&32&&fe(t,1)):(t=Pl(f),t.c(),fe(t,1),t.m(a.parentNode,a)):t&&(Nt(),Ne(t,1,1,()=>{t=null}),Gt())},i(f){d||(fe(t),d=!0)},o(f){Ne(t),d=!1},d(f){t&&t.d(f),f&&r(a)}}}function ts(l){let a,d;return a=new Yl({props:{$$slots:{default:[es]},$$scope:{ctx:l}}}),{c(){bt(a.$$.fragment)},l(t){St(a.$$.fragment,t)},m(t,f){xt(a,t,f),d=!0},p(t,[f]){const h={};f&524415&&(h.$$scope={dirty:f,ctx:t}),a.$set(h)},i(t){d||(fe(a.$$.fragment,t),d=!0)},o(t){Ne(a.$$.fragment,t),d=!1},d(t){yt(a,t)}}}let Tl="";function ls(l,a,d){let t,f,h,I;Rl(l,ql,y=>d(10,I=y));let $="details",P,F="",j,J,O=null,T=Wl(null),R,H,V,X=!1;Ml(async()=>{El.set(!0);try{await zt.sync(),await Yt.sync(),H=zt.subscribe(Y=>{R=Y}),V=Yt.subscribe(Y=>{J=Y}),d(1,P=await Kl.getManager(f??"",R?.activeSeason.id??1,h&&h>0?h:R?.activeGameweek??1));const y=new Blob([new Uint8Array(P.profilePicture)]),M=P.profilePicture.length>0?URL.createObjectURL(y):"profile_placeholder.png";d(3,j=M);const oe=Number(P.createDate/1000000n),B=new Date(oe);d(2,F=`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][B.getUTCMonth()]} ${B.getUTCFullYear()}`),d(4,O=P.favouriteTeamId>0?J.find(Y=>Y.id==P.favouriteTeamId)??null:null)}catch(y){Bl.show("Error fetching manager details.","error"),console.error("Error fetching manager details:",y)}finally{El.set(!1),d(5,X=!0)}}),Ll(()=>{V?.(),H?.()});function x(y){d(0,$=y)}function q(y,M){let oe=P.gameweeks.find(B=>B.gameweek===M);T.set(oe),x("details")}const Q=()=>x("details"),me=()=>x("gameweeks");return l.$$.update=()=>{l.$$.dirty&1024&&(f=I.url.searchParams.get("id")),l.$$.dirty&1024&&(h=Number(I.url.searchParams.get("gw"))??0)},d(6,t=1),[$,P,F,j,O,X,t,T,x,q,I,Q,me]}class ms extends Nl{constructor(a){super(),Gl(this,a,ls,ts,Al,{})}}export{ms as component};
