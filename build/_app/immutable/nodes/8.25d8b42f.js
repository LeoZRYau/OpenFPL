import{S as Pl,i as Vl,s as Sl,k as o,q as u,a as f,l as n,m as i,r as m,h as r,c as v,n as l,J as Al,b as Tt,G as e,K as ul,L as Ct,g as ge,v as qt,f as Kt,d as Re,M as ml,N as Cl,o as Tl,X as Hl,H as Ml,x as _l,y as bt,z as St,A as xt,u as H,B as Et,O as Ll,I as Ol,$ as hl,p as gt}from"../chunks/index.85206748.js";import{a as Bl}from"../chunks/Layout.226466cf.js";import{p as Ul}from"../chunks/stores.8ae7c18f.js";import{s as jl,t as Jl,a as pl,g as gl}from"../chunks/team-store.fa9fd22b.js";import{t as Nl}from"../chunks/toast-store.55f7539f.js";import{p as wl}from"../chunks/player-store.19e70b0f.js";import{B as Gl}from"../chunks/BadgeIcon.f58a17b7.js";import{M as Fl}from"../chunks/manager-gameweeks.a5be737b.js";import{i as bl}from"../chunks/global-stores.db6c0769.js";function xl(t,a,d){const s=t.slice();s[16]=a[d];const g=s[4](s[16].player.id);s[17]=g;const b=s[5](s[16].player.teamId);return s[18]=b,s}function El(t,a,d){const s=t.slice();return s[21]=a[d],s}function yl(t){let a,d,s=t[21]+"",g;return{c(){a=o("option"),d=u("Gameweek "),g=u(s),this.h()},l(b){a=n(b,"OPTION",{});var I=i(a);d=m(I,"Gameweek "),g=m(I,s),I.forEach(r),this.h()},h(){a.__value=t[21],a.value=a.__value},m(b,I){Tt(b,a,I),e(a,d),e(a,g)},p:Ml,d(b){b&&r(a)}}}function Il(t){let a,d,s=pl(t[16].player.position)+"",g,b,I,E,k,B=t[17]&&t[17].firstName.length>2?t[17].firstName.substring(0,1)+"."+t[17].lastName:"",M,U,L,R,se,N=t[18]?.friendlyName+"",x,j,D,S,z=t[16].appearance+"",de,Te,q,ue,J=(t[16].highestScoringPlayerId===t[17]?.id?1:0)+"",y,we,tt,W,K=t[16].goals+"",qe,Ne,be,xe,me=t[16].assists+"",fe,Ue,lt,G,X=t[16].penaltySaves+"",Ee,ye,at,Q,ie=t[16].cleanSheets+"",je,Ke,re,Ie,De=t[16].saves+"",_e,Ye,st,Y,Je=t[16].yellowCards+"",ze,oe,rt,F,ne=t[16].ownGoals+"",Ge,Fe,Ae,Z,$e=t[16].goalsConceded+"",he,We,ke,ce,A=t[16].redCards+"",ve,P,vt,h,V=t[16].bonusPoints+"",w,O,nt,ee,Pe=t[16].points+"",Xe,Qe,p;var Ve=gl(t[17]?.nationality??"");function it(_){return{props:{class:"w-4 h-4 mr-1",size:"100"}}}return Ve&&(E=_l(Ve,it())),R=new Gl({props:{primaryColour:t[18]?.primaryColourHex,secondaryColour:t[18]?.secondaryColourHex,thirdColour:t[18]?.thirdColourHex,className:"w-6 h-6 mr-2"}}),{c(){a=o("div"),d=o("div"),g=u(s),b=f(),I=o("div"),E&&bt(E.$$.fragment),k=f(),M=u(B),U=f(),L=o("div"),bt(R.$$.fragment),se=f(),x=u(N),j=f(),D=o("div"),S=o("div"),de=u(z),q=f(),ue=o("div"),y=u(J),tt=f(),W=o("div"),qe=u(K),be=f(),xe=o("div"),fe=u(me),lt=f(),G=o("div"),Ee=u(X),at=f(),Q=o("div"),je=u(ie),re=f(),Ie=o("div"),_e=u(De),st=f(),Y=o("div"),ze=u(Je),rt=f(),F=o("div"),Ge=u(ne),Ae=f(),Z=o("div"),he=u($e),ke=f(),ce=o("div"),ve=u(A),vt=f(),h=o("div"),w=u(V),nt=f(),ee=o("div"),Xe=u(Pe),Qe=f(),this.h()},l(_){a=n(_,"DIV",{class:!0});var c=i(a);d=n(c,"DIV",{class:!0});var He=i(d);g=m(He,s),He.forEach(r),b=v(c),I=n(c,"DIV",{class:!0});var pe=i(I);E&&St(E.$$.fragment,pe),k=v(pe),M=m(pe,B),pe.forEach(r),U=v(c),L=n(c,"DIV",{class:!0});var Ze=i(L);St(R.$$.fragment,Ze),se=v(Ze),x=m(Ze,N),Ze.forEach(r),j=v(c),D=n(c,"DIV",{class:!0});var C=i(D);S=n(C,"DIV",{class:!0});var ut=i(S);de=m(ut,z),ut.forEach(r),q=v(C),ue=n(C,"DIV",{class:!0});var et=i(ue);y=m(et,J),et.forEach(r),tt=v(C),W=n(C,"DIV",{class:!0});var mt=i(W);qe=m(mt,K),mt.forEach(r),be=v(C),xe=n(C,"DIV",{class:!0});var _t=i(xe);fe=m(_t,me),_t.forEach(r),lt=v(C),G=n(C,"DIV",{class:!0});var Me=i(G);Ee=m(Me,X),Me.forEach(r),at=v(C),Q=n(C,"DIV",{class:!0});var Le=i(Q);je=m(Le,ie),Le.forEach(r),re=v(C),Ie=n(C,"DIV",{class:!0});var Oe=i(Ie);_e=m(Oe,De),Oe.forEach(r),st=v(C),Y=n(C,"DIV",{class:!0});var Be=i(Y);ze=m(Be,Je),Be.forEach(r),rt=v(C),F=n(C,"DIV",{class:!0});var ht=i(F);Ge=m(ht,ne),ht.forEach(r),Ae=v(C),Z=n(C,"DIV",{class:!0});var Se=i(Z);he=m(Se,$e),Se.forEach(r),ke=v(C),ce=n(C,"DIV",{class:!0});var yt=i(ce);ve=m(yt,A),yt.forEach(r),vt=v(C),h=n(C,"DIV",{class:!0});var ot=i(h);w=m(ot,V),ot.forEach(r),C.forEach(r),nt=v(c),ee=n(c,"DIV",{class:!0});var It=i(ee);Xe=m(It,Pe),It.forEach(r),Qe=v(c),c.forEach(r),this.h()},h(){l(d,"class","w-1/12 text-center mx-4"),l(I,"class","w-2/12"),l(L,"class","w-2/12 text-center flex items-center"),l(S,"class",Te=`w-1/12 text-center ${t[16].appearance>0?"":"text-gray-500"}`),l(ue,"class",we=`w-1/12 text-center ${t[16].highestScoringPlayerId===t[17]?.id?"":"text-gray-500"}`),l(W,"class",Ne=`w-1/12 text-center ${t[16].goals>0?"":"text-gray-500"}`),l(xe,"class",Ue=`w-1/12 text-center ${t[16].assists>0?"":"text-gray-500"}`),l(G,"class",ye=`w-1/12 text-center ${t[16].penaltySaves>0?"":"text-gray-500"}`),l(Q,"class",Ke=`w-1/12 text-center ${t[16].cleanSheets>0?"":"text-gray-500"}`),l(Ie,"class",Ye=`w-1/12 text-center ${t[16].saves>0?"":"text-gray-500"}`),l(Y,"class",oe=`w-1/12 text-center ${t[16].yellowCards>0?"":"text-gray-500"}`),l(F,"class",Fe=`w-1/12 text-center ${t[16].ownGoals>0?"":"text-gray-500"}`),l(Z,"class",We=`w-1/12 text-center ${t[16].goalsConceded>0?"":"text-gray-500"}`),l(ce,"class",P=`w-1/12 text-center ${t[16].redCards>0?"":"text-gray-500"}`),l(h,"class",O=`w-1/12 text-center ${t[16].bonusPoints>0?"":"text-gray-500"}`),l(D,"class","w-1/2"),l(ee,"class","w-1/12 text-center"),l(a,"class","flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer")},m(_,c){Tt(_,a,c),e(a,d),e(d,g),e(a,b),e(a,I),E&&xt(E,I,null),e(I,k),e(I,M),e(a,U),e(a,L),xt(R,L,null),e(L,se),e(L,x),e(a,j),e(a,D),e(D,S),e(S,de),e(D,q),e(D,ue),e(ue,y),e(D,tt),e(D,W),e(W,qe),e(D,be),e(D,xe),e(xe,fe),e(D,lt),e(D,G),e(G,Ee),e(D,at),e(D,Q),e(Q,je),e(D,re),e(D,Ie),e(Ie,_e),e(D,st),e(D,Y),e(Y,ze),e(D,rt),e(D,F),e(F,Ge),e(D,Ae),e(D,Z),e(Z,he),e(D,ke),e(D,ce),e(ce,ve),e(D,vt),e(D,h),e(h,w),e(a,nt),e(a,ee),e(ee,Xe),e(a,Qe),p=!0},p(_,c){if((!p||c&2)&&s!==(s=pl(_[16].player.position)+"")&&H(g,s),c&2&&Ve!==(Ve=gl(_[17]?.nationality??""))){if(E){qt();const pe=E;Re(pe.$$.fragment,1,0,()=>{Et(pe,1)}),Kt()}Ve?(E=_l(Ve,it()),bt(E.$$.fragment),ge(E.$$.fragment,1),xt(E,I,k)):E=null}(!p||c&2)&&B!==(B=_[17]&&_[17].firstName.length>2?_[17].firstName.substring(0,1)+"."+_[17].lastName:"")&&H(M,B);const He={};c&2&&(He.primaryColour=_[18]?.primaryColourHex),c&2&&(He.secondaryColour=_[18]?.secondaryColourHex),c&2&&(He.thirdColour=_[18]?.thirdColourHex),R.$set(He),(!p||c&2)&&N!==(N=_[18]?.friendlyName+"")&&H(x,N),(!p||c&2)&&z!==(z=_[16].appearance+"")&&H(de,z),(!p||c&2&&Te!==(Te=`w-1/12 text-center ${_[16].appearance>0?"":"text-gray-500"}`))&&l(S,"class",Te),(!p||c&2)&&J!==(J=(_[16].highestScoringPlayerId===_[17]?.id?1:0)+"")&&H(y,J),(!p||c&2&&we!==(we=`w-1/12 text-center ${_[16].highestScoringPlayerId===_[17]?.id?"":"text-gray-500"}`))&&l(ue,"class",we),(!p||c&2)&&K!==(K=_[16].goals+"")&&H(qe,K),(!p||c&2&&Ne!==(Ne=`w-1/12 text-center ${_[16].goals>0?"":"text-gray-500"}`))&&l(W,"class",Ne),(!p||c&2)&&me!==(me=_[16].assists+"")&&H(fe,me),(!p||c&2&&Ue!==(Ue=`w-1/12 text-center ${_[16].assists>0?"":"text-gray-500"}`))&&l(xe,"class",Ue),(!p||c&2)&&X!==(X=_[16].penaltySaves+"")&&H(Ee,X),(!p||c&2&&ye!==(ye=`w-1/12 text-center ${_[16].penaltySaves>0?"":"text-gray-500"}`))&&l(G,"class",ye),(!p||c&2)&&ie!==(ie=_[16].cleanSheets+"")&&H(je,ie),(!p||c&2&&Ke!==(Ke=`w-1/12 text-center ${_[16].cleanSheets>0?"":"text-gray-500"}`))&&l(Q,"class",Ke),(!p||c&2)&&De!==(De=_[16].saves+"")&&H(_e,De),(!p||c&2&&Ye!==(Ye=`w-1/12 text-center ${_[16].saves>0?"":"text-gray-500"}`))&&l(Ie,"class",Ye),(!p||c&2)&&Je!==(Je=_[16].yellowCards+"")&&H(ze,Je),(!p||c&2&&oe!==(oe=`w-1/12 text-center ${_[16].yellowCards>0?"":"text-gray-500"}`))&&l(Y,"class",oe),(!p||c&2)&&ne!==(ne=_[16].ownGoals+"")&&H(Ge,ne),(!p||c&2&&Fe!==(Fe=`w-1/12 text-center ${_[16].ownGoals>0?"":"text-gray-500"}`))&&l(F,"class",Fe),(!p||c&2)&&$e!==($e=_[16].goalsConceded+"")&&H(he,$e),(!p||c&2&&We!==(We=`w-1/12 text-center ${_[16].goalsConceded>0?"":"text-gray-500"}`))&&l(Z,"class",We),(!p||c&2)&&A!==(A=_[16].redCards+"")&&H(ve,A),(!p||c&2&&P!==(P=`w-1/12 text-center ${_[16].redCards>0?"":"text-gray-500"}`))&&l(ce,"class",P),(!p||c&2)&&V!==(V=_[16].bonusPoints+"")&&H(w,V),(!p||c&2&&O!==(O=`w-1/12 text-center ${_[16].bonusPoints>0?"":"text-gray-500"}`))&&l(h,"class",O),(!p||c&2)&&Pe!==(Pe=_[16].points+"")&&H(Xe,Pe)},i(_){p||(E&&ge(E.$$.fragment,_),ge(R.$$.fragment,_),p=!0)},o(_){E&&Re(E.$$.fragment,_),Re(R.$$.fragment,_),p=!1},d(_){_&&r(a),E&&Et(E),Et(R)}}}function Rl(t){let a,d,s,g,b,I,E,k,B,M,U,L,R,se,N,x,j,D,S,z,de,Te,q,ue,J,y,we,tt,W,K,qe,Ne,be,xe,me,fe,Ue,lt,G,X,Ee,ye,at,Q,ie,je,Ke,re,Ie,De,_e,Ye,st,Y,Je,ze,oe,rt,F,ne,Ge,Fe,Ae,Z,$e,he,We,ke,ce=t[2],A=[];for(let h=0;h<ce.length;h+=1)A[h]=yl(El(t,ce,h));let ve=t[1],P=[];for(let h=0;h<ve.length;h+=1)P[h]=Il(xl(t,ve,h));const vt=h=>Re(P[h],1,1,()=>{P[h]=null});return{c(){a=o("div"),d=o("div"),s=o("div"),g=o("button"),b=u("<"),E=f(),k=o("select");for(let h=0;h<A.length;h+=1)A[h].c();B=f(),M=o("button"),U=u(">"),R=f(),se=o("div"),N=o("div"),x=o("div"),j=o("div"),D=u("Position"),S=f(),z=o("div"),de=u("Player"),Te=f(),q=o("div"),ue=u("Team"),J=f(),y=o("div"),we=o("div"),tt=u("A"),W=f(),K=o("div"),qe=u("HSP"),Ne=f(),be=o("div"),xe=u("GS"),me=f(),fe=o("div"),Ue=u("GA"),lt=f(),G=o("div"),X=u("PS"),Ee=f(),ye=o("div"),at=u("CS"),Q=f(),ie=o("div"),je=u("KS"),Ke=f(),re=o("div"),Ie=u("YC"),De=f(),_e=o("div"),Ye=u("OG"),st=f(),Y=o("div"),Je=u("GC"),ze=f(),oe=o("div"),rt=u("RC"),F=f(),ne=o("div"),Ge=u("B"),Fe=f(),Ae=o("div"),Z=u("PTS"),$e=f();for(let h=0;h<P.length;h+=1)P[h].c();this.h()},l(h){a=n(h,"DIV",{class:!0});var V=i(a);d=n(V,"DIV",{class:!0});var w=i(d);s=n(w,"DIV",{class:!0});var O=i(s);g=n(O,"BUTTON",{class:!0});var nt=i(g);b=m(nt,"<"),nt.forEach(r),E=v(O),k=n(O,"SELECT",{class:!0});var ee=i(k);for(let Se=0;Se<A.length;Se+=1)A[Se].l(ee);ee.forEach(r),B=v(O),M=n(O,"BUTTON",{class:!0});var Pe=i(M);U=m(Pe,">"),Pe.forEach(r),O.forEach(r),w.forEach(r),R=v(V),se=n(V,"DIV",{class:!0});var Xe=i(se);N=n(Xe,"DIV",{class:!0});var Qe=i(N);x=n(Qe,"DIV",{class:!0});var p=i(x);j=n(p,"DIV",{class:!0});var Ve=i(j);D=m(Ve,"Position"),Ve.forEach(r),S=v(p),z=n(p,"DIV",{class:!0});var it=i(z);de=m(it,"Player"),it.forEach(r),Te=v(p),q=n(p,"DIV",{class:!0});var _=i(q);ue=m(_,"Team"),_.forEach(r),J=v(p),y=n(p,"DIV",{class:!0});var c=i(y);we=n(c,"DIV",{class:!0});var He=i(we);tt=m(He,"A"),He.forEach(r),W=v(c),K=n(c,"DIV",{class:!0});var pe=i(K);qe=m(pe,"HSP"),pe.forEach(r),Ne=v(c),be=n(c,"DIV",{class:!0});var Ze=i(be);xe=m(Ze,"GS"),Ze.forEach(r),me=v(c),fe=n(c,"DIV",{class:!0});var C=i(fe);Ue=m(C,"GA"),C.forEach(r),lt=v(c),G=n(c,"DIV",{class:!0});var ut=i(G);X=m(ut,"PS"),ut.forEach(r),Ee=v(c),ye=n(c,"DIV",{class:!0});var et=i(ye);at=m(et,"CS"),et.forEach(r),Q=v(c),ie=n(c,"DIV",{class:!0});var mt=i(ie);je=m(mt,"KS"),mt.forEach(r),Ke=v(c),re=n(c,"DIV",{class:!0});var _t=i(re);Ie=m(_t,"YC"),_t.forEach(r),De=v(c),_e=n(c,"DIV",{class:!0});var Me=i(_e);Ye=m(Me,"OG"),Me.forEach(r),st=v(c),Y=n(c,"DIV",{class:!0});var Le=i(Y);Je=m(Le,"GC"),Le.forEach(r),ze=v(c),oe=n(c,"DIV",{class:!0});var Oe=i(oe);rt=m(Oe,"RC"),Oe.forEach(r),F=v(c),ne=n(c,"DIV",{class:!0});var Be=i(ne);Ge=m(Be,"B"),Be.forEach(r),c.forEach(r),Fe=v(p),Ae=n(p,"DIV",{class:!0});var ht=i(Ae);Z=m(ht,"PTS"),ht.forEach(r),p.forEach(r),$e=v(Qe);for(let Se=0;Se<P.length;Se+=1)P[Se].l(Qe);Qe.forEach(r),Xe.forEach(r),V.forEach(r),this.h()},h(){l(g,"class","text-2xl rounded fpl-button px-2"),g.disabled=I=t[0]===1,l(k,"class","p-4 fpl-dropdown text-sm md:text-lg text-center"),t[0]===void 0&&Al(()=>t[8].call(k)),l(M,"class","text-2xl rounded fpl-button px-2 ml-1"),M.disabled=L=t[0]===38,l(s,"class","flex items-center space-x-2"),l(d,"class","flex flex-col sm:flex-row gap-4 sm:gap-8"),l(j,"class","w-1/12 text-center mx-4"),l(z,"class","w-2/12"),l(q,"class","w-2/12 text-center"),l(we,"class","w-1/12 text-center"),l(K,"class","w-1/12 text-center"),l(be,"class","w-1/12 text-center"),l(fe,"class","w-1/12 text-center"),l(G,"class","w-1/12 text-center"),l(ye,"class","w-1/12 text-center"),l(ie,"class","w-1/12 text-center"),l(re,"class","w-1/12 text-center"),l(_e,"class","w-1/12 text-center"),l(Y,"class","w-1/12 text-center"),l(oe,"class","w-1/12 text-center"),l(ne,"class","w-1/12 text-center"),l(y,"class","w-1/2"),l(Ae,"class","w-1/12 text-center"),l(x,"class","flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"),l(N,"class","overflow-x-auto flex-1"),l(se,"class","flex flex-col space-y-4 mt-4 text-lg"),l(a,"class","mx-5 my-4")},m(h,V){Tt(h,a,V),e(a,d),e(d,s),e(s,g),e(g,b),e(s,E),e(s,k);for(let w=0;w<A.length;w+=1)A[w]&&A[w].m(k,null);ul(k,t[0],!0),e(s,B),e(s,M),e(M,U),e(a,R),e(a,se),e(se,N),e(N,x),e(x,j),e(j,D),e(x,S),e(x,z),e(z,de),e(x,Te),e(x,q),e(q,ue),e(x,J),e(x,y),e(y,we),e(we,tt),e(y,W),e(y,K),e(K,qe),e(y,Ne),e(y,be),e(be,xe),e(y,me),e(y,fe),e(fe,Ue),e(y,lt),e(y,G),e(G,X),e(y,Ee),e(y,ye),e(ye,at),e(y,Q),e(y,ie),e(ie,je),e(y,Ke),e(y,re),e(re,Ie),e(y,De),e(y,_e),e(_e,Ye),e(y,st),e(y,Y),e(Y,Je),e(y,ze),e(y,oe),e(oe,rt),e(y,F),e(y,ne),e(ne,Ge),e(x,Fe),e(x,Ae),e(Ae,Z),e(N,$e);for(let w=0;w<P.length;w+=1)P[w]&&P[w].m(N,null);he=!0,We||(ke=[Ct(g,"click",t[7]),Ct(k,"change",t[8]),Ct(M,"click",t[9])],We=!0)},p(h,[V]){if((!he||V&5&&I!==(I=h[0]===1))&&(g.disabled=I),V&4){ce=h[2];let w;for(w=0;w<ce.length;w+=1){const O=El(h,ce,w);A[w]?A[w].p(O,V):(A[w]=yl(O),A[w].c(),A[w].m(k,null))}for(;w<A.length;w+=1)A[w].d(1);A.length=ce.length}if(V&5&&ul(k,h[0]),(!he||V&5&&L!==(L=h[0]===38))&&(M.disabled=L),V&50){ve=h[1];let w;for(w=0;w<ve.length;w+=1){const O=xl(h,ve,w);P[w]?(P[w].p(O,V),ge(P[w],1)):(P[w]=Il(O),P[w].c(),ge(P[w],1),P[w].m(N,null))}for(qt(),w=ve.length;w<P.length;w+=1)vt(w);Kt()}},i(h){if(!he){for(let V=0;V<ve.length;V+=1)ge(P[V]);he=!0}},o(h){P=P.filter(Boolean);for(let V=0;V<P.length;V+=1)Re(P[V]);he=!1},d(h){h&&r(a),ml(A,h),ml(P,h),We=!1,Cl(ke)}}}function ql(t,a,d){let s=[],g=[],b;jl.subscribe(x=>{b=x}),Jl.subscribe(x=>{s=x}),wl.subscribe(x=>{g=x});let I=Array.from({length:38},(x,j)=>j+1),{selectedGameweek:E}=a,{fantasyTeam:k}=a,B=[];Tl(async()=>{try{d(0,E=b?.activeGameweek??E),d(1,B=await wl.getGameweekPlayers(Hl(k),E))}catch(x){Nl.show("Error fetching manager gameweek detail.","error"),console.error("Error fetching manager gameweek detail:",x)}});const M=x=>{d(0,E=Math.max(1,Math.min(38,E+x)))};function U(x){return g.find(j=>j.id===x)??null}function L(x){return s.find(j=>j.id===x)??null}const R=()=>M(-1);function se(){E=Ll(this),d(0,E),d(2,I)}const N=()=>M(1);return t.$$set=x=>{"selectedGameweek"in x&&d(0,E=x.selectedGameweek),"fantasyTeam"in x&&d(6,k=x.fantasyTeam)},[E,B,I,M,U,L,k,R,se,N]}class Kl extends Pl{constructor(a){super(),Vl(this,a,ql,Rl,Sl,{selectedGameweek:0,fantasyTeam:6})}}function Dl(t){let a,d,s="0",g;return{c(){a=o("span"),d=u("Total Points: "),g=u(s),this.h()},l(b){a=n(b,"SPAN",{class:!0});var I=i(a);d=m(I,"Total Points: "),g=m(I,s),I.forEach(r),this.h()},h(){l(a,"class","text-2xl")},m(b,I){Tt(b,a,I),e(a,d),e(a,g)},d(b){b&&r(a)}}}function $l(t){let a,d;return a=new Kl({props:{selectedGameweek:t[6],fantasyTeam:t[7]}}),{c(){bt(a.$$.fragment)},l(s){St(a.$$.fragment,s)},m(s,g){xt(a,s,g),d=!0},p(s,g){const b={};g&64&&(b.selectedGameweek=s[6]),a.$set(b)},i(s){d||(ge(a.$$.fragment,s),d=!0)},o(s){Re(a.$$.fragment,s),d=!1},d(s){Et(a,s)}}}function kl(t){let a,d;return a=new Fl({props:{viewGameweekDetail:t[9],principalId:t[1].principalId}}),{c(){bt(a.$$.fragment)},l(s){St(a.$$.fragment,s)},m(s,g){xt(a,s,g),d=!0},p(s,g){const b={};g&2&&(b.principalId=s[1].principalId),a.$set(b)},i(s){d||(ge(a.$$.fragment,s),d=!0)},o(s){Re(a.$$.fragment,s),d=!1},d(s){Et(a,s)}}}function Yl(t){let a,d,s,g,b,I,E,k,B,M,U,L,R,se,N,x=t[1].displayName+"",j,D,S,z,de,Te,q,ue,J,y,we,tt,W,K,qe,Ne=t[5]?.abbreviatedName+"",be,xe,me,fe=t[5]?.name+"",Ue,lt,G,X,Ee,ye,at,Q,ie=t[1].weeklyPositionText+"",je,Ke,re,Ie,De=t[1].weeklyPoints.toLocaleString()+"",_e,Ye,st,Y,Je,ze,oe,rt,F,ne,Ge=t[5]?.friendlyName+"",Fe,Ae,Z,$e=t[1].monthlyPositionText+"",he,We,ke,ce,A=t[1].monthlyPoints.toLocaleString()+"",ve,P,vt,h,V,w,O,nt,ee,Pe,Xe,Qe,p,Ve=t[1].seasonPositionText+"",it,_,c,He,pe=t[1].seasonPoints.toLocaleString()+"",Ze,C,ut,et,mt,_t,Me,Le,Oe,Be,ht,Se,yt,ot,It,Nt,Yt,wt,zt,ct,Gt,te,Wt,Qt;K=new Gl({props:{className:"w-7 mr-2",primaryColour:t[5]?.primaryColourHex,secondaryColour:t[5]?.secondaryColourHex,thirdColour:t[5]?.thirdColourHex}});let Ce=t[0]==="details"&&Dl(),le=t[0]==="details"&&$l(t),ae=t[0]==="gameweeks"&&kl(t);return{c(){a=o("div"),d=o("div"),s=o("div"),g=o("div"),b=o("img"),k=f(),B=o("div"),M=f(),U=o("div"),L=o("p"),R=u("Manager"),se=f(),N=o("p"),j=u(x),D=f(),S=o("p"),z=u("Joined: "),de=u(t[3]),Te=f(),q=o("div"),ue=f(),J=o("div"),y=o("p"),we=u("Favourite Team"),tt=f(),W=o("p"),bt(K.$$.fragment),qe=f(),be=u(Ne),xe=f(),me=o("p"),Ue=u(fe),lt=f(),G=o("div"),X=o("div"),Ee=o("p"),ye=u("Leaderboards"),at=f(),Q=o("p"),je=u(ie),Ke=f(),re=o("span"),Ie=u("("),_e=u(De),Ye=u(")"),st=f(),Y=o("p"),Je=u("Weekly"),ze=f(),oe=o("div"),rt=f(),F=o("div"),ne=o("p"),Fe=u(Ge),Ae=f(),Z=o("p"),he=u($e),We=f(),ke=o("span"),ce=u("("),ve=u(A),P=u(")"),vt=f(),h=o("p"),V=u("Club"),w=f(),O=o("div"),nt=f(),ee=o("div"),Pe=o("p"),Xe=u(t[2]),Qe=f(),p=o("p"),it=u(Ve),_=f(),c=o("span"),He=u("("),Ze=u(pe),C=u(")"),ut=f(),et=o("p"),mt=u("Season"),_t=f(),Me=o("div"),Le=o("div"),Oe=o("div"),Be=o("button"),ht=u("Details"),yt=f(),ot=o("button"),It=u("Gameweeks"),Yt=f(),wt=o("div"),Ce&&Ce.c(),zt=f(),ct=o("div"),le&&le.c(),Gt=f(),ae&&ae.c(),this.h()},l($){a=n($,"DIV",{class:!0});var T=i(a);d=n(T,"DIV",{class:!0});var pt=i(d);s=n(pt,"DIV",{class:!0});var dt=i(s);g=n(dt,"DIV",{class:!0});var Zt=i(g);b=n(Zt,"IMG",{class:!0,src:!0,alt:!0}),Zt.forEach(r),k=v(dt),B=n(dt,"DIV",{class:!0,style:!0}),i(B).forEach(r),M=v(dt),U=n(dt,"DIV",{class:!0});var Dt=i(U);L=n(Dt,"P",{class:!0});var el=i(L);R=m(el,"Manager"),el.forEach(r),se=v(Dt),N=n(Dt,"P",{class:!0});var tl=i(N);j=m(tl,x),tl.forEach(r),D=v(Dt),S=n(Dt,"P",{class:!0});var Xt=i(S);z=m(Xt,"Joined: "),de=m(Xt,t[3]),Xt.forEach(r),Dt.forEach(r),Te=v(dt),q=n(dt,"DIV",{class:!0,style:!0}),i(q).forEach(r),ue=v(dt),J=n(dt,"DIV",{class:!0});var $t=i(J);y=n($t,"P",{class:!0});var ll=i(y);we=m(ll,"Favourite Team"),ll.forEach(r),tt=v($t),W=n($t,"P",{class:!0});var At=i(W);St(K.$$.fragment,At),qe=v(At),be=m(At,Ne),At.forEach(r),xe=v($t),me=n($t,"P",{class:!0});var al=i(me);Ue=m(al,fe),al.forEach(r),$t.forEach(r),dt.forEach(r),lt=v(pt),G=n(pt,"DIV",{class:!0});var ft=i(G);X=n(ft,"DIV",{class:!0});var kt=i(X);Ee=n(kt,"P",{class:!0});var sl=i(Ee);ye=m(sl,"Leaderboards"),sl.forEach(r),at=v(kt),Q=n(kt,"P",{class:!0});var Ht=i(Q);je=m(Ht,ie),Ke=v(Ht),re=n(Ht,"SPAN",{class:!0});var Mt=i(re);Ie=m(Mt,"("),_e=m(Mt,De),Ye=m(Mt,")"),Mt.forEach(r),Ht.forEach(r),st=v(kt),Y=n(kt,"P",{class:!0});var rl=i(Y);Je=m(rl,"Weekly"),rl.forEach(r),kt.forEach(r),ze=v(ft),oe=n(ft,"DIV",{class:!0,style:!0}),i(oe).forEach(r),rt=v(ft),F=n(ft,"DIV",{class:!0});var Pt=i(F);ne=n(Pt,"P",{class:!0});var ol=i(ne);Fe=m(ol,Ge),ol.forEach(r),Ae=v(Pt),Z=n(Pt,"P",{class:!0});var Lt=i(Z);he=m(Lt,$e),We=v(Lt),ke=n(Lt,"SPAN",{class:!0});var Ot=i(ke);ce=m(Ot,"("),ve=m(Ot,A),P=m(Ot,")"),Ot.forEach(r),Lt.forEach(r),vt=v(Pt),h=n(Pt,"P",{class:!0});var nl=i(h);V=m(nl,"Club"),nl.forEach(r),Pt.forEach(r),w=v(ft),O=n(ft,"DIV",{class:!0,style:!0}),i(O).forEach(r),nt=v(ft),ee=n(ft,"DIV",{class:!0});var Vt=i(ee);Pe=n(Vt,"P",{class:!0});var il=i(Pe);Xe=m(il,t[2]),il.forEach(r),Qe=v(Vt),p=n(Vt,"P",{class:!0});var Bt=i(p);it=m(Bt,Ve),_=v(Bt),c=n(Bt,"SPAN",{class:!0});var Ut=i(c);He=m(Ut,"("),Ze=m(Ut,pe),C=m(Ut,")"),Ut.forEach(r),Bt.forEach(r),ut=v(Vt),et=n(Vt,"P",{class:!0});var cl=i(et);mt=m(cl,"Season"),cl.forEach(r),Vt.forEach(r),ft.forEach(r),pt.forEach(r),_t=v(T),Me=n(T,"DIV",{class:!0});var jt=i(Me);Le=n(jt,"DIV",{class:!0});var Jt=i(Le);Oe=n(Jt,"DIV",{class:!0});var Ft=i(Oe);Be=n(Ft,"BUTTON",{class:!0});var dl=i(Be);ht=m(dl,"Details"),dl.forEach(r),yt=v(Ft),ot=n(Ft,"BUTTON",{class:!0});var fl=i(ot);It=m(fl,"Gameweeks"),fl.forEach(r),Ft.forEach(r),Yt=v(Jt),wt=n(Jt,"DIV",{class:!0});var vl=i(wt);Ce&&Ce.l(vl),vl.forEach(r),Jt.forEach(r),zt=v(jt),ct=n(jt,"DIV",{class:!0});var Rt=i(ct);le&&le.l(Rt),Gt=v(Rt),ae&&ae.l(Rt),Rt.forEach(r),jt.forEach(r),T.forEach(r),this.h()},h(){l(b,"class","w-20"),hl(b.src,I=t[4])||l(b,"src",I),l(b,"alt",E=t[1].displayName),l(g,"class","flex"),l(B,"class","flex-shrink-0 w-px bg-gray-400 self-stretch"),gt(B,"min-width","2px"),gt(B,"min-height","50px"),l(L,"class","text-gray-300 text-xs"),l(N,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),l(S,"class","text-gray-300 text-xs"),l(U,"class","flex-grow"),l(q,"class","flex-shrink-0 w-px bg-gray-400 self-stretch"),gt(q,"min-width","2px"),gt(q,"min-height","50px"),l(y,"class","text-gray-300 text-xs"),l(W,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold flex items-center"),l(me,"class","text-gray-300 text-xs"),l(J,"class","flex-grow"),l(s,"class","flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"),l(Ee,"class","text-gray-300 text-xs"),l(re,"class","text-xs"),l(Q,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),l(Y,"class","text-gray-300 text-xs"),l(X,"class","flex-grow"),l(oe,"class","flex-shrink-0 w-px bg-gray-400 self-stretch"),gt(oe,"min-width","2px"),gt(oe,"min-height","50px"),l(ne,"class","text-gray-300 text-xs"),l(ke,"class","text-xs"),l(Z,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),l(h,"class","text-gray-300 text-xs"),l(F,"class","flex-grow"),l(O,"class","flex-shrink-0 w-px bg-gray-400 self-stretch"),gt(O,"min-width","2px"),gt(O,"min-height","50px"),l(Pe,"class","text-gray-300 text-xs"),l(c,"class","text-xs"),l(p,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),l(et,"class","text-gray-300 text-xs"),l(ee,"class","flex-grow"),l(G,"class","flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"),l(d,"class","flex flex-col md:flex-row"),l(Be,"class",Se=`btn ${t[0]==="details"?"fpl-button":"inactive-btn"} px-4 py-2 rounded-l-md font-bold text-md min-w-[125px]`),l(ot,"class",Nt=`btn ${t[0]==="gameweeks"?"fpl-button":"inactive-btn"} px-4 py-2 rounded-r-md font-bold text-md min-w-[125px]`),l(Oe,"class","flex"),l(wt,"class","px-4"),l(Le,"class","flex justify-between items-center text-white px-4 pt-4 rounded-md w-full"),l(ct,"class","w-full"),l(Me,"class","flex flex-col bg-panel m-4 rounded-md"),l(a,"class","m-4")},m($,T){Tt($,a,T),e(a,d),e(d,s),e(s,g),e(g,b),e(s,k),e(s,B),e(s,M),e(s,U),e(U,L),e(L,R),e(U,se),e(U,N),e(N,j),e(U,D),e(U,S),e(S,z),e(S,de),e(s,Te),e(s,q),e(s,ue),e(s,J),e(J,y),e(y,we),e(J,tt),e(J,W),xt(K,W,null),e(W,qe),e(W,be),e(J,xe),e(J,me),e(me,Ue),e(d,lt),e(d,G),e(G,X),e(X,Ee),e(Ee,ye),e(X,at),e(X,Q),e(Q,je),e(Q,Ke),e(Q,re),e(re,Ie),e(re,_e),e(re,Ye),e(X,st),e(X,Y),e(Y,Je),e(G,ze),e(G,oe),e(G,rt),e(G,F),e(F,ne),e(ne,Fe),e(F,Ae),e(F,Z),e(Z,he),e(Z,We),e(Z,ke),e(ke,ce),e(ke,ve),e(ke,P),e(F,vt),e(F,h),e(h,V),e(G,w),e(G,O),e(G,nt),e(G,ee),e(ee,Pe),e(Pe,Xe),e(ee,Qe),e(ee,p),e(p,it),e(p,_),e(p,c),e(c,He),e(c,Ze),e(c,C),e(ee,ut),e(ee,et),e(et,mt),e(a,_t),e(a,Me),e(Me,Le),e(Le,Oe),e(Oe,Be),e(Be,ht),e(Oe,yt),e(Oe,ot),e(ot,It),e(Le,Yt),e(Le,wt),Ce&&Ce.m(wt,null),e(Me,zt),e(Me,ct),le&&le.m(ct,null),e(ct,Gt),ae&&ae.m(ct,null),te=!0,Wt||(Qt=[Ct(Be,"click",t[11]),Ct(ot,"click",t[12])],Wt=!0)},p($,T){(!te||T&16&&!hl(b.src,I=$[4]))&&l(b,"src",I),(!te||T&2&&E!==(E=$[1].displayName))&&l(b,"alt",E),(!te||T&2)&&x!==(x=$[1].displayName+"")&&H(j,x),(!te||T&8)&&H(de,$[3]);const pt={};T&32&&(pt.primaryColour=$[5]?.primaryColourHex),T&32&&(pt.secondaryColour=$[5]?.secondaryColourHex),T&32&&(pt.thirdColour=$[5]?.thirdColourHex),K.$set(pt),(!te||T&32)&&Ne!==(Ne=$[5]?.abbreviatedName+"")&&H(be,Ne),(!te||T&32)&&fe!==(fe=$[5]?.name+"")&&H(Ue,fe),(!te||T&2)&&ie!==(ie=$[1].weeklyPositionText+"")&&H(je,ie),(!te||T&2)&&De!==(De=$[1].weeklyPoints.toLocaleString()+"")&&H(_e,De),(!te||T&32)&&Ge!==(Ge=$[5]?.friendlyName+"")&&H(Fe,Ge),(!te||T&2)&&$e!==($e=$[1].monthlyPositionText+"")&&H(he,$e),(!te||T&2)&&A!==(A=$[1].monthlyPoints.toLocaleString()+"")&&H(ve,A),(!te||T&4)&&H(Xe,$[2]),(!te||T&2)&&Ve!==(Ve=$[1].seasonPositionText+"")&&H(it,Ve),(!te||T&2)&&pe!==(pe=$[1].seasonPoints.toLocaleString()+"")&&H(Ze,pe),(!te||T&1&&Se!==(Se=`btn ${$[0]==="details"?"fpl-button":"inactive-btn"} px-4 py-2 rounded-l-md font-bold text-md min-w-[125px]`))&&l(Be,"class",Se),(!te||T&1&&Nt!==(Nt=`btn ${$[0]==="gameweeks"?"fpl-button":"inactive-btn"} px-4 py-2 rounded-r-md font-bold text-md min-w-[125px]`))&&l(ot,"class",Nt),$[0]==="details"?Ce||(Ce=Dl(),Ce.c(),Ce.m(wt,null)):Ce&&(Ce.d(1),Ce=null),$[0]==="details"?le?(le.p($,T),T&1&&ge(le,1)):(le=$l($),le.c(),ge(le,1),le.m(ct,Gt)):le&&(qt(),Re(le,1,1,()=>{le=null}),Kt()),$[0]==="gameweeks"?ae?(ae.p($,T),T&1&&ge(ae,1)):(ae=kl($),ae.c(),ge(ae,1),ae.m(ct,null)):ae&&(qt(),Re(ae,1,1,()=>{ae=null}),Kt())},i($){te||(ge(K.$$.fragment,$),ge(le),ge(ae),te=!0)},o($){Re(K.$$.fragment,$),Re(le),Re(ae),te=!1},d($){$&&r(a),Et(K),Ce&&Ce.d(),le&&le.d(),ae&&ae.d(),Wt=!1,Cl(Qt)}}}function zl(t){let a,d;return a=new Bl({props:{$$slots:{default:[Yl]},$$scope:{ctx:t}}}),{c(){bt(a.$$.fragment)},l(s){St(a.$$.fragment,s)},m(s,g){xt(a,s,g),d=!0},p(s,[g]){const b={};g&65663&&(b.$$scope={dirty:g,ctx:s}),a.$set(b)},i(s){d||(ge(a.$$.fragment,s),d=!0)},o(s){Re(a.$$.fragment,s),d=!1},d(s){Et(a,s)}}}function Wl(t,a,d){let s,g,b,I;Ol(t,Ul,S=>d(10,I=S));let E="details",k,B="",M="",U,L,R=null,se;Tl(async()=>{bl.set(!0);try{let S=await systemService.getSystemState();d(6,s=b||(S?.activeGameweek??1)),d(2,B=S?.activeSeason.name??""),d(1,k=await managerService.getManager(g??"",S?.activeSeason.id??1,S?.activeGameweek??1));const z=new Blob([new Uint8Array(k.profilePicture)]),de=k.profilePicture.length>0?URL.createObjectURL(z):"profile_placeholder.png";d(4,U=de);const Te=Number(k.createDate/1000000n),q=new Date(Te);d(3,M=`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][q.getUTCMonth()]} ${q.getUTCFullYear()}`),L=await teamService.getTeams(),d(5,R=k.favouriteTeamId>0?L.find(J=>J.id==k.favouriteTeamId)??null:null),bl.set(!1)}catch(S){Nl.show("Error fetching manager details.","error"),console.error("Error fetching manager details:",S)}});function N(S){d(0,E=S)}function x(S,z){se.set(k.gameweeks.find(de=>de.gameweek===z)),N("details")}const j=()=>N("details"),D=()=>N("gameweeks");return t.$$.update=()=>{t.$$.dirty&1024&&(g=I.url.searchParams.get("id")),t.$$.dirty&1024&&(b=Number(I.url.searchParams.get("gw")))},d(6,s=1),[E,k,B,M,U,R,s,se,N,x,I,j,D]}class oa extends Pl{constructor(a){super(),Vl(this,a,Wl,zl,Sl,{})}}export{oa as component};
