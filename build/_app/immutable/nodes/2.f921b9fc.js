var Ps=Object.defineProperty;var ks=(r,e,t)=>e in r?Ps(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var vs=(r,e,t)=>(ks(r,typeof e!="symbol"?e+"":e,t),t);import{S as Ta,i as xa,s as wa,k as n,q as I,a as T,l as i,m as c,r as E,h as o,c as x,n as l,J as Os,b as ue,G as a,K as gs,L as sa,g as z,v as Za,f as et,d as Z,M as Ct,N as xs,o as ws,H as Ne,u as B,O as Ls,y as ye,z as De,A as Te,B as xe,e as bs,p as Ke,P as re}from"../chunks/index.aa733771.js";import{S as Pt,r as Rs,F as Cs,f as At,B as Ja,M as Fs,a as $s,g as Vs,L as js}from"../chunks/LoadingIcon.b1900f5b.js";import{A as qs,i as Ws,T as As}from"../chunks/TeamService.7d253bbd.js";import{L as Gs,i as Hs}from"../chunks/Layout.79823031.js";class Ms{constructor(){vs(this,"actor");this.actor=qs.createActor(Ws,"bkyz2-fmaaa-aaaaa-qaaaq-cai")}async getWeeklyLeaderboardData(e){const t=localStorage.getItem("weekly_leaderboard_hash"),s=localStorage.getItem("weekly_leaderboard_data"),m=JSON.parse(s||"[]");return!e||e.length===0||t!==e?this.fetchWeeklyLeaderboard(e):m}async getLeadingWeeklyTeam(){return(await this.getWeeklyLeaderboardData(localStorage.getItem("weekly_leaderboard_hash")??"")).entries[0]}async fetchWeeklyLeaderboard(e){try{let s=await new Pt().getSystemState(localStorage.getItem("system_state_hash")??"");const m=await this.actor.getWeeklyLeaderboardCache(s.activeSeason.id,s.focusGameweek);return localStorage.setItem("weekly_leaderboard_hash",e),localStorage.setItem("weekly_leaderboard_data",JSON.stringify(m,Rs)),m}catch(t){throw console.error("Error fetching weekly leaderboard:",t),t}}}function Is(r,e,t){const s=r.slice();return s[14]=e[t][0],s[1]=e[t][1],s}function Es(r,e,t){const s=r.slice();return s[17]=e[t].fixture,s[18]=e[t].homeTeam,s[19]=e[t].awayTeam,s}function Ss(r,e,t){const s=r.slice();return s[22]=e[t],s}function Ns(r){let e,t,s=r[22]+"",m;return{c(){e=n("option"),t=I("Gameweek "),m=I(s),this.h()},l(d){e=i(d,"OPTION",{});var v=c(e);t=E(v,"Gameweek "),m=E(v,s),v.forEach(o),this.h()},h(){e.__value=r[22],e.value=e.__value},m(d,v){ue(d,e,v),a(e,t),a(e,m)},p:Ne,d(d){d&&o(e)}}}function ys(r){let e,t,s,m,d,v,L,_,h,g,R,S,D,b,$,O,A,j,q=At(Number(r[17].kickOff))+"",C,W,y,G,p,P=(r[18]?r[18].friendlyName:"")+"",u,Y,H,X,M=(r[19]?r[19].friendlyName:"")+"",ee,Q,U,Be,ae,we,Ce=(r[17].status===0?"-":r[17].homeGoals)+"",K,ne,_e,Ae=(r[17].status===0?"-":r[17].awayGoals)+"",je,he,V;return v=new Ja({props:{primaryColour:r[18]?r[18].primaryColourHex:"",secondaryColour:r[18]?r[18].secondaryColourHex:"",thirdColour:r[18]?r[18].thirdColourHex:""}}),b=new Ja({props:{primaryColour:r[19]?r[19].primaryColourHex:"",secondaryColour:r[19]?r[19].secondaryColourHex:"",thirdColour:r[19]?r[19].thirdColourHex:""}}),{c(){e=n("div"),t=n("div"),s=n("div"),m=n("div"),d=n("a"),ye(v.$$.fragment),_=T(),h=n("span"),g=I("v"),R=T(),S=n("div"),D=n("a"),ye(b.$$.fragment),O=T(),A=n("div"),j=n("span"),C=I(q),W=T(),y=n("div"),G=n("div"),p=n("a"),u=I(P),H=T(),X=n("a"),ee=I(M),Be=T(),ae=n("div"),we=n("span"),K=I(Ce),ne=T(),_e=n("span"),je=I(Ae),this.h()},l(N){e=i(N,"DIV",{class:!0});var k=c(e);t=i(k,"DIV",{class:!0});var J=c(t);s=i(J,"DIV",{class:!0});var te=c(s);m=i(te,"DIV",{class:!0});var ra=c(m);d=i(ra,"A",{href:!0});var Pe=c(d);De(v.$$.fragment,Pe),Pe.forEach(o),ra.forEach(o),_=x(te),h=i(te,"SPAN",{class:!0});var ke=c(h);g=E(ke,"v"),ke.forEach(o),R=x(te),S=i(te,"DIV",{class:!0});var la=c(S);D=i(la,"A",{href:!0});var oa=c(D);De(b.$$.fragment,oa),oa.forEach(o),la.forEach(o),te.forEach(o),O=x(J),A=i(J,"DIV",{class:!0});var Oe=c(A);j=i(Oe,"SPAN",{class:!0});var ge=c(j);C=E(ge,q),ge.forEach(o),Oe.forEach(o),J.forEach(o),W=x(k),y=i(k,"DIV",{class:!0});var ce=c(y);G=i(ce,"DIV",{class:!0});var Le=c(G);p=i(Le,"A",{href:!0});var na=c(p);u=E(na,P),na.forEach(o),H=x(Le),X=i(Le,"A",{href:!0});var me=c(X);ee=E(me,M),me.forEach(o),Le.forEach(o),Be=x(ce),ae=i(ce,"DIV",{class:!0});var pe=c(ae);we=i(pe,"SPAN",{});var Re=c(we);K=E(Re,Ce),Re.forEach(o),ne=x(pe),_e=i(pe,"SPAN",{});var ve=c(_e);je=E(ve,Ae),ve.forEach(o),pe.forEach(o),ce.forEach(o),k.forEach(o),this.h()},h(){l(d,"href",L=`/club/${r[17].homeTeamId}`),l(m,"class","w-10 items-center justify-center"),l(h,"class","font-bold text-lg"),l(D,"href",$=`/club/${r[17].awayTeamId}`),l(S,"class","w-10 items-center justify-center"),l(s,"class","flex w-1/2 space-x-4 justify-center"),l(j,"class","text-sm md:text-lg ml-4 md:ml-0 text-left"),l(A,"class","flex w-1/2 md:justify-center"),l(t,"class","flex items-center w-1/2 ml-4"),l(p,"href",Y=`/club/${r[17].homeTeamId}`),l(X,"href",Q=`/club/${r[17].awayTeamId}`),l(G,"class",U=`flex flex-col min-w-[120px] md:min-w-[300px] text-xs md:text-lg  ${r[17].status===0?"text-gray-400":"text-white"}`),l(ae,"class",he=`flex flex-col items-center text-xs md:text-lg  ${r[17].status===0?"text-gray-400":"text-white"}`),l(y,"class","flex items-center space-x-10 w-1/2 md:justify-center"),l(e,"class","flex items-center justify-between py-2 border-b border-gray-700")},m(N,k){ue(N,e,k),a(e,t),a(t,s),a(s,m),a(m,d),Te(v,d,null),a(s,_),a(s,h),a(h,g),a(s,R),a(s,S),a(S,D),Te(b,D,null),a(t,O),a(t,A),a(A,j),a(j,C),a(e,W),a(e,y),a(y,G),a(G,p),a(p,u),a(G,H),a(G,X),a(X,ee),a(y,Be),a(y,ae),a(ae,we),a(we,K),a(ae,ne),a(ae,_e),a(_e,je),V=!0},p(N,k){const J={};k&4&&(J.primaryColour=N[18]?N[18].primaryColourHex:""),k&4&&(J.secondaryColour=N[18]?N[18].secondaryColourHex:""),k&4&&(J.thirdColour=N[18]?N[18].thirdColourHex:""),v.$set(J),(!V||k&4&&L!==(L=`/club/${N[17].homeTeamId}`))&&l(d,"href",L);const te={};k&4&&(te.primaryColour=N[19]?N[19].primaryColourHex:""),k&4&&(te.secondaryColour=N[19]?N[19].secondaryColourHex:""),k&4&&(te.thirdColour=N[19]?N[19].thirdColourHex:""),b.$set(te),(!V||k&4&&$!==($=`/club/${N[17].awayTeamId}`))&&l(D,"href",$),(!V||k&4)&&q!==(q=At(Number(N[17].kickOff))+"")&&B(C,q),(!V||k&4)&&P!==(P=(N[18]?N[18].friendlyName:"")+"")&&B(u,P),(!V||k&4&&Y!==(Y=`/club/${N[17].homeTeamId}`))&&l(p,"href",Y),(!V||k&4)&&M!==(M=(N[19]?N[19].friendlyName:"")+"")&&B(ee,M),(!V||k&4&&Q!==(Q=`/club/${N[17].awayTeamId}`))&&l(X,"href",Q),(!V||k&4&&U!==(U=`flex flex-col min-w-[120px] md:min-w-[300px] text-xs md:text-lg  ${N[17].status===0?"text-gray-400":"text-white"}`))&&l(G,"class",U),(!V||k&4)&&Ce!==(Ce=(N[17].status===0?"-":N[17].homeGoals)+"")&&B(K,Ce),(!V||k&4)&&Ae!==(Ae=(N[17].status===0?"-":N[17].awayGoals)+"")&&B(je,Ae),(!V||k&4&&he!==(he=`flex flex-col items-center text-xs md:text-lg  ${N[17].status===0?"text-gray-400":"text-white"}`))&&l(ae,"class",he)},i(N){V||(z(v.$$.fragment,N),z(b.$$.fragment,N),V=!0)},o(N){Z(v.$$.fragment,N),Z(b.$$.fragment,N),V=!1},d(N){N&&o(e),xe(v),xe(b)}}}function Ds(r){let e,t,s,m=r[14]+"",d,v,L,_,h=r[1],g=[];for(let S=0;S<h.length;S+=1)g[S]=ys(Es(r,h,S));const R=S=>Z(g[S],1,1,()=>{g[S]=null});return{c(){e=n("div"),t=n("div"),s=n("h2"),d=I(m),v=T();for(let S=0;S<g.length;S+=1)g[S].c();L=T(),this.h()},l(S){e=i(S,"DIV",{});var D=c(e);t=i(D,"DIV",{class:!0});var b=c(t);s=i(b,"H2",{class:!0});var $=c(s);d=E($,m),$.forEach(o),b.forEach(o),v=x(D);for(let O=0;O<g.length;O+=1)g[O].l(D);L=x(D),D.forEach(o),this.h()},h(){l(s,"class","date-header ml-4 text-xs md:text-lg"),l(t,"class","flex items-center justify-between border border-gray-700 py-4 bg-light-gray")},m(S,D){ue(S,e,D),a(e,t),a(t,s),a(s,d),a(e,v);for(let b=0;b<g.length;b+=1)g[b]&&g[b].m(e,null);a(e,L),_=!0},p(S,D){if((!_||D&4)&&m!==(m=S[14]+"")&&B(d,m),D&4){h=S[1];let b;for(b=0;b<h.length;b+=1){const $=Es(S,h,b);g[b]?(g[b].p($,D),z(g[b],1)):(g[b]=ys($),g[b].c(),z(g[b],1),g[b].m(e,L))}for(Za(),b=h.length;b<g.length;b+=1)R(b);et()}},i(S){if(!_){for(let D=0;D<h.length;D+=1)z(g[D]);_=!0}},o(S){g=g.filter(Boolean);for(let D=0;D<g.length;D+=1)Z(g[D]);_=!1},d(S){S&&o(e),Ct(g,S)}}}function zs(r){let e,t,s,m,d,v,L,_,h,g,R,S,D,b,$,O,A,j,q=r[3],C=[];for(let p=0;p<q.length;p+=1)C[p]=Ns(Ss(r,q,p));let W=Object.entries(r[2]),y=[];for(let p=0;p<W.length;p+=1)y[p]=Ds(Is(r,W,p));const G=p=>Z(y[p],1,1,()=>{y[p]=null});return{c(){e=n("div"),t=n("div"),s=n("div"),m=n("div"),d=n("button"),v=I("<"),_=T(),h=n("select");for(let p=0;p<C.length;p+=1)C[p].c();g=T(),R=n("button"),S=I(">"),b=T(),$=n("div");for(let p=0;p<y.length;p+=1)y[p].c();this.h()},l(p){e=i(p,"DIV",{class:!0});var P=c(e);t=i(P,"DIV",{class:!0});var u=c(t);s=i(u,"DIV",{class:!0});var Y=c(s);m=i(Y,"DIV",{class:!0});var H=c(m);d=i(H,"BUTTON",{class:!0});var X=c(d);v=E(X,"<"),X.forEach(o),_=x(H),h=i(H,"SELECT",{class:!0});var M=c(h);for(let U=0;U<C.length;U+=1)C[U].l(M);M.forEach(o),g=x(H),R=i(H,"BUTTON",{class:!0});var ee=c(R);S=E(ee,">"),ee.forEach(o),H.forEach(o),Y.forEach(o),b=x(u),$=i(u,"DIV",{});var Q=c($);for(let U=0;U<y.length;U+=1)y[U].l(Q);Q.forEach(o),u.forEach(o),P.forEach(o),this.h()},h(){l(d,"class","text-2xl rounded fpl-button px-2 py-1"),d.disabled=L=r[0]===1,l(h,"class","p-2 fpl-dropdown text-sm md:text-xl text-center"),r[0]===void 0&&Os(()=>r[7].call(h)),l(R,"class","text-2xl rounded fpl-button px-2 py-1"),R.disabled=D=r[0]===38,l(m,"class","flex items-center space-x-2 ml-4"),l(s,"class","flex flex-col sm:flex-row gap-4 sm:gap-8"),l(t,"class","flex flex-col space-y-4"),l(e,"class","container-fluid mt-4")},m(p,P){ue(p,e,P),a(e,t),a(t,s),a(s,m),a(m,d),a(d,v),a(m,_),a(m,h);for(let u=0;u<C.length;u+=1)C[u]&&C[u].m(h,null);gs(h,r[0],!0),a(m,g),a(m,R),a(R,S),a(t,b),a(t,$);for(let u=0;u<y.length;u+=1)y[u]&&y[u].m($,null);O=!0,A||(j=[sa(d,"click",r[6]),sa(h,"change",r[7]),sa(R,"click",r[8])],A=!0)},p(p,[P]){if((!O||P&9&&L!==(L=p[0]===1))&&(d.disabled=L),P&8){q=p[3];let u;for(u=0;u<q.length;u+=1){const Y=Ss(p,q,u);C[u]?C[u].p(Y,P):(C[u]=Ns(Y),C[u].c(),C[u].m(h,null))}for(;u<C.length;u+=1)C[u].d(1);C.length=q.length}if(P&9&&gs(h,p[0]),(!O||P&9&&D!==(D=p[0]===38))&&(R.disabled=D),P&4){W=Object.entries(p[2]);let u;for(u=0;u<W.length;u+=1){const Y=Is(p,W,u);y[u]?(y[u].p(Y,P),z(y[u],1)):(y[u]=Ds(Y),y[u].c(),z(y[u],1),y[u].m($,null))}for(Za(),u=W.length;u<y.length;u+=1)G(u);et()}},i(p){if(!O){for(let P=0;P<W.length;P+=1)z(y[P]);O=!0}},o(p){y=y.filter(Boolean);for(let P=0;P<y.length;P+=1)Z(y[P]);O=!1},d(p){p&&o(e),Ct(C,p),Ct(y,p),A=!1,xs(j)}}}function Us(r,e,t){let s,m;const d=new Cs,v=new As,L=new Pt;let _=1,h=[],g=[],R=Array.from({length:38},(A,j)=>j+1);ws(async()=>{try{const A=await d.getFixturesData(localStorage.getItem("fixtures_hash")??"");g=await v.getTeamsData(localStorage.getItem("teams_hash")??""),t(1,h=A.map(C=>({fixture:C,homeTeam:D(C.homeTeamId),awayTeam:D(C.awayTeamId)})));let q=await L.getSystemState(localStorage.getItem("system_state_hash")??"");t(0,_=q.activeGameweek)}catch(A){console.error("Error fetching data:",A)}});const S=A=>{t(0,_=Math.max(1,Math.min(38,_+A)))};function D(A){return g.find(j=>j.id===A)}const b=()=>S(-1);function $(){_=Ls(this),t(0,_),t(3,R)}const O=()=>S(1);return r.$$.update=()=>{r.$$.dirty&3&&t(5,s=h.filter(({fixture:A})=>A.gameweek===_)),r.$$.dirty&32&&t(2,m=s.reduce((A,j)=>{const q=new Date(Number(j.fixture.kickOff)/1e6),W=new Intl.DateTimeFormat("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(q);return A[W]||(A[W]=[]),A[W].push(j),A},{}))},[_,h,m,R,S,s,b,$,O]}class Ks extends Ta{constructor(e){super(),xa(this,e,Us,zs,wa,{})}}function Bs(r){let e,t,s;return{c(){e=n("div"),t=n("h1"),s=I("Points"),this.h()},l(m){e=i(m,"DIV",{class:!0});var d=c(e);t=i(d,"H1",{});var v=c(t);s=E(v,"Points"),v.forEach(o),d.forEach(o),this.h()},h(){l(e,"class","container mx-auto mt-4")},m(m,d){ue(m,e,d),a(e,t),a(t,s)},p:Ne,i:Ne,o:Ne,d(m){m&&o(e)}}}class Ys extends Ta{constructor(e){super(),xa(this,e,null,Bs,wa,{})}}function Xs(r){let e,t,s;return{c(){e=n("div"),t=n("h1"),s=I("Leaderboards"),this.h()},l(m){e=i(m,"DIV",{class:!0});var d=c(e);t=i(d,"H1",{});var v=c(t);s=E(v,"Leaderboards"),v.forEach(o),d.forEach(o),this.h()},h(){l(e,"class","container mx-auto mt-4")},m(m,d){ue(m,e,d),a(e,t),a(t,s)},p:Ne,i:Ne,o:Ne,d(m){m&&o(e)}}}class Qs extends Ta{constructor(e){super(),xa(this,e,null,Xs,wa,{})}}function Js(r){let e,t,s;return{c(){e=n("div"),t=n("h1"),s=I("League Table"),this.h()},l(m){e=i(m,"DIV",{class:!0});var d=c(e);t=i(d,"H1",{});var v=c(t);s=E(v,"League Table"),v.forEach(o),d.forEach(o),this.h()},h(){l(e,"class","container mx-auto mt-4")},m(m,d){ue(m,e,d),a(e,t),a(t,s)},p:Ne,i:Ne,o:Ne,d(m){m&&o(e)}}}class Zs extends Ta{constructor(e){super(),xa(this,e,null,Js,wa,{})}}function er(r){let e,t,s,m,d,v,L,_,h,g,R,S,D,b,$,O,A,j,q,C,W,y,G,p,P,u,Y,H,X,M,ee,Q,U,Be,ae,we,Ce,K,ne,_e,Ae,je,he,V,N,k,J,te,ra,Pe,ke,la,oa,Oe,ge,ce,Le,na,me,pe,Re,ve,Na=(r[12]?r[12].abbreviatedName:"")+"",Ca,Aa,at,ya,tt,ia,ca,qe,Da=(r[13]?r[13].abbreviatedName:"")+"",Pa,ka,st,Ye,rt,be,ma,lt,ot,da,de,Oa,fa,nt,it,La,_a,ct,mt,Ra,ua,dt,ft,We,Fa,_t,$a,ut,Xe,ht,Ie,Ge,pt,Va,vt,gt,ha,ja,bt,Qe,qa,It,Wa,Je,Fe,fe,Ze,He,Et,Ga,Ha,St,Ma,ea,Me,Nt,za,Ua,yt,aa,ze,Dt,Ka,Ba,Tt,ie,le,F,xt,kt;J=new Ja({props:{primaryColour:r[12]?r[12].primaryColourHex:"",secondaryColour:r[12]?r[12].secondaryColourHex:"",thirdColour:r[12]?r[12].thirdColourHex:""}}),ce=new Ja({props:{primaryColour:r[13]?r[13].primaryColourHex:"",secondaryColour:r[13]?r[13].secondaryColourHex:"",thirdColour:r[13]?r[13].thirdColourHex:""}});let se=r[16]&&Ts(r);const Ot=[lr,rr,sr,tr],ta=[];function Lt(f,w){return f[0]==="fixtures"?0:f[0]==="points"?1:f[0]==="leaderboards"?2:f[0]==="league-table"?3:-1}return~(ie=Lt(r))&&(le=ta[ie]=Ot[ie](r)),{c(){e=n("div"),t=n("div"),s=n("div"),m=n("div"),d=n("p"),v=I("Gameweek"),L=T(),_=n("p"),h=I(r[1]),g=T(),R=n("p"),S=I(r[2]),D=T(),b=n("div"),$=T(),O=n("div"),A=n("p"),j=I("Managers"),q=T(),C=n("p"),W=I(r[3]),y=T(),G=n("p"),p=I("Total"),P=T(),u=n("div"),Y=T(),H=n("div"),X=n("p"),M=I("Weekly Prize Pool"),ee=T(),Q=n("p"),U=I("0"),Be=T(),ae=n("p"),we=I("$FPL"),Ce=T(),K=n("div"),ne=n("div"),_e=n("p"),Ae=I("Next Game:"),je=T(),he=n("div"),V=n("div"),N=n("div"),k=n("a"),ye(J.$$.fragment),ra=T(),Pe=n("div"),ke=n("p"),la=I("v"),oa=T(),Oe=n("div"),ge=n("a"),ye(ce.$$.fragment),na=T(),me=n("div"),pe=n("div"),Re=n("p"),ve=n("a"),Ca=I(Na),at=T(),ya=n("div"),tt=T(),ia=n("div"),ca=n("p"),qe=n("a"),Pa=I(Da),st=T(),Ye=n("div"),rt=T(),be=n("div"),ma=n("p"),lt=I("Kick Off:"),ot=T(),da=n("div"),de=n("p"),Oa=I(r[4]),fa=n("span"),nt=I("d"),it=I(`
                : `),La=I(r[5]),_a=n("span"),ct=I("h"),mt=I(`
                : `),Ra=I(r[6]),ua=n("span"),dt=I("m"),ft=T(),We=n("p"),Fa=I(r[7]),_t=I(" | "),$a=I(r[8]),ut=T(),Xe=n("div"),ht=T(),Ie=n("div"),Ge=n("p"),pt=I("GW "),Va=I(r[9]),vt=I(" High Score"),gt=T(),ha=n("p"),ja=I(r[10]),bt=T(),Qe=n("p"),qa=I(r[11]),It=I(" points"),Wa=T(),Je=n("div"),Fe=n("div"),fe=n("ul"),Ze=n("li"),He=n("button"),Et=I("Fixtures"),St=T(),se&&se.c(),Ma=T(),ea=n("li"),Me=n("button"),Nt=I("Leaderboards"),yt=T(),aa=n("li"),ze=n("button"),Dt=I("Table"),Tt=T(),le&&le.c(),this.h()},l(f){e=i(f,"DIV",{class:!0});var w=c(e);t=i(w,"DIV",{class:!0});var $e=c(t);s=i($e,"DIV",{class:!0});var oe=c(s);m=i(oe,"DIV",{class:!0});var Ee=c(m);d=i(Ee,"P",{class:!0});var Rt=c(d);v=E(Rt,"Gameweek"),Rt.forEach(o),L=x(Ee),_=i(Ee,"P",{class:!0});var Ft=c(_);h=E(Ft,r[1]),Ft.forEach(o),g=x(Ee),R=i(Ee,"P",{class:!0});var $t=c(R);S=E($t,r[2]),$t.forEach(o),Ee.forEach(o),D=x(oe),b=i(oe,"DIV",{class:!0,style:!0}),c(b).forEach(o),$=x(oe),O=i(oe,"DIV",{class:!0});var pa=c(O);A=i(pa,"P",{class:!0});var Vt=c(A);j=E(Vt,"Managers"),Vt.forEach(o),q=x(pa),C=i(pa,"P",{class:!0});var jt=c(C);W=E(jt,r[3]),jt.forEach(o),y=x(pa),G=i(pa,"P",{class:!0});var qt=c(G);p=E(qt,"Total"),qt.forEach(o),pa.forEach(o),P=x(oe),u=i(oe,"DIV",{class:!0,style:!0}),c(u).forEach(o),Y=x(oe),H=i(oe,"DIV",{class:!0});var va=c(H);X=i(va,"P",{class:!0});var Wt=c(X);M=E(Wt,"Weekly Prize Pool"),Wt.forEach(o),ee=x(va),Q=i(va,"P",{class:!0});var Gt=c(Q);U=E(Gt,"0"),Gt.forEach(o),Be=x(va),ae=i(va,"P",{class:!0});var Ht=c(ae);we=E(Ht,"$FPL"),Ht.forEach(o),va.forEach(o),oe.forEach(o),Ce=x($e),K=i($e,"DIV",{class:!0});var Se=c(K);ne=i(Se,"DIV",{class:!0});var ga=c(ne);_e=i(ga,"P",{class:!0});var Mt=c(_e);Ae=E(Mt,"Next Game:"),Mt.forEach(o),je=x(ga),he=i(ga,"DIV",{class:!0});var zt=c(he);V=i(zt,"DIV",{class:!0});var ba=c(V);N=i(ba,"DIV",{class:!0});var Ut=c(N);k=i(Ut,"A",{href:!0});var Kt=c(k);De(J.$$.fragment,Kt),Kt.forEach(o),Ut.forEach(o),ra=x(ba),Pe=i(ba,"DIV",{class:!0});var Bt=c(Pe);ke=i(Bt,"P",{class:!0});var Yt=c(ke);la=E(Yt,"v"),Yt.forEach(o),Bt.forEach(o),oa=x(ba),Oe=i(ba,"DIV",{class:!0});var Xt=c(Oe);ge=i(Xt,"A",{href:!0});var Qt=c(ge);De(ce.$$.fragment,Qt),Qt.forEach(o),Xt.forEach(o),ba.forEach(o),zt.forEach(o),na=x(ga),me=i(ga,"DIV",{class:!0});var Ia=c(me);pe=i(Ia,"DIV",{class:!0});var Jt=c(pe);Re=i(Jt,"P",{class:!0});var Zt=c(Re);ve=i(Zt,"A",{class:!0,href:!0});var es=c(ve);Ca=E(es,Na),es.forEach(o),Zt.forEach(o),Jt.forEach(o),at=x(Ia),ya=i(Ia,"DIV",{class:!0}),c(ya).forEach(o),tt=x(Ia),ia=i(Ia,"DIV",{class:!0});var as=c(ia);ca=i(as,"P",{class:!0});var ts=c(ca);qe=i(ts,"A",{class:!0,href:!0});var ss=c(qe);Pa=E(ss,Da),ss.forEach(o),ts.forEach(o),as.forEach(o),Ia.forEach(o),ga.forEach(o),st=x(Se),Ye=i(Se,"DIV",{class:!0,style:!0}),c(Ye).forEach(o),rt=x(Se),be=i(Se,"DIV",{class:!0});var Ea=c(be);ma=i(Ea,"P",{class:!0});var rs=c(ma);lt=E(rs,"Kick Off:"),rs.forEach(o),ot=x(Ea),da=i(Ea,"DIV",{class:!0});var ls=c(da);de=i(ls,"P",{class:!0});var Ve=c(de);Oa=E(Ve,r[4]),fa=i(Ve,"SPAN",{class:!0});var os=c(fa);nt=E(os,"d"),os.forEach(o),it=E(Ve,`
                : `),La=E(Ve,r[5]),_a=i(Ve,"SPAN",{class:!0});var ns=c(_a);ct=E(ns,"h"),ns.forEach(o),mt=E(Ve,`
                : `),Ra=E(Ve,r[6]),ua=i(Ve,"SPAN",{class:!0});var is=c(ua);dt=E(is,"m"),is.forEach(o),Ve.forEach(o),ls.forEach(o),ft=x(Ea),We=i(Ea,"P",{class:!0});var Ya=c(We);Fa=E(Ya,r[7]),_t=E(Ya," | "),$a=E(Ya,r[8]),Ya.forEach(o),Ea.forEach(o),ut=x(Se),Xe=i(Se,"DIV",{class:!0,style:!0}),c(Xe).forEach(o),ht=x(Se),Ie=i(Se,"DIV",{class:!0});var Sa=c(Ie);Ge=i(Sa,"P",{class:!0});var Xa=c(Ge);pt=E(Xa,"GW "),Va=E(Xa,r[9]),vt=E(Xa," High Score"),Xa.forEach(o),gt=x(Sa),ha=i(Sa,"P",{class:!0});var cs=c(ha);ja=E(cs,r[10]),cs.forEach(o),bt=x(Sa),Qe=i(Sa,"P",{class:!0});var wt=c(Qe);qa=E(wt,r[11]),It=E(wt," points"),wt.forEach(o),Sa.forEach(o),Se.forEach(o),$e.forEach(o),w.forEach(o),Wa=x(f),Je=i(f,"DIV",{class:!0});var ms=c(Je);Fe=i(ms,"DIV",{class:!0});var Qa=c(Fe);fe=i(Qa,"UL",{class:!0});var Ue=c(fe);Ze=i(Ue,"LI",{class:!0});var ds=c(Ze);He=i(ds,"BUTTON",{class:!0});var fs=c(He);Et=E(fs,"Fixtures"),fs.forEach(o),ds.forEach(o),St=x(Ue),se&&se.l(Ue),Ma=x(Ue),ea=i(Ue,"LI",{class:!0});var _s=c(ea);Me=i(_s,"BUTTON",{class:!0});var us=c(Me);Nt=E(us,"Leaderboards"),us.forEach(o),_s.forEach(o),yt=x(Ue),aa=i(Ue,"LI",{class:!0});var hs=c(aa);ze=i(hs,"BUTTON",{class:!0});var ps=c(ze);Dt=E(ps,"Table"),ps.forEach(o),hs.forEach(o),Ue.forEach(o),Tt=x(Qa),le&&le.l(Qa),Qa.forEach(o),ms.forEach(o),this.h()},h(){l(d,"class","text-gray-300 text-xs"),l(_,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),l(R,"class","text-gray-300 text-xs"),l(m,"class","flex-grow"),l(b,"class","flex-shrink-0 w-px bg-gray-400 self-stretch"),Ke(b,"min-width","2px"),Ke(b,"min-height","50px"),l(A,"class","text-gray-300 text-xs"),l(C,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),l(G,"class","text-gray-300 text-xs"),l(O,"class","flex-grow"),l(u,"class","flex-shrink-0 w-px bg-gray-400 self-stretch"),Ke(u,"min-width","2px"),Ke(u,"min-height","50px"),l(X,"class","text-gray-300 text-xs"),l(Q,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),l(ae,"class","text-gray-300 text-xs"),l(H,"class","flex-grow"),l(s,"class","flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"),l(_e,"class","text-gray-300 text-xs"),l(k,"href",te=`/club/${r[12]?r[12].id:-1}`),l(N,"class","w-10 ml-4 mr-4"),l(ke,"class","text-xs mt-2 mb-2 font-bold"),l(Pe,"class","w-v ml-1 mr-1 flex justify-center svelte-1ylya66"),l(ge,"href",Le=`/club/${r[13]?r[13].id:-1}`),l(Oe,"class","w-10 ml-4"),l(V,"class","flex justify-center items-center"),l(he,"class","flex justify-center mb-2 mt-2"),l(ve,"class","text-gray-300 text-xs text-center"),l(ve,"href",Aa=`/club/${r[12]?r[12].id:-1}`),l(Re,"class","text-gray-300 text-xs text-center"),l(pe,"class","w-10 ml-4 mr-4"),l(ya,"class","w-v ml-1 mr-1 svelte-1ylya66"),l(qe,"class","text-gray-300 text-xs text-center"),l(qe,"href",ka=`/club/${r[13]?r[13].id:-1}`),l(ca,"class","text-gray-300 text-xs text-center"),l(ia,"class","w-10 ml-4"),l(me,"class","flex justify-center"),l(ne,"class","flex-grow mb-4 md:mb-0"),l(Ye,"class","h-px bg-gray-400 w-full md:w-px md:h-full md:self-stretch"),Ke(Ye,"min-height","2px"),Ke(Ye,"min-width","2px"),l(ma,"class","text-gray-300 text-xs mt-4 md:mt-0"),l(fa,"class","text-gray-300 text-xs ml-1"),l(_a,"class","text-gray-300 text-xs ml-1"),l(ua,"class","text-gray-300 text-xs ml-1"),l(de,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),l(da,"class","flex"),l(We,"class","text-gray-300 text-xs"),l(be,"class","flex-grow mb-4 md:mb-0"),l(Xe,"class","h-px bg-gray-400 w-full md:w-px md:h-full md:self-stretch"),Ke(Xe,"min-height","2px"),Ke(Xe,"min-width","2px"),l(Ge,"class","text-gray-300 text-xs mt-4 md:mt-0"),l(ha,"class","text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),l(Qe,"class","text-gray-300 text-xs"),l(Ie,"class","flex-grow"),l(K,"class","flex flex-col md:flex-row justify-start md:items-center text-white space-x-0 md:space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"),l(t,"class","flex flex-col md:flex-row"),l(e,"class","m-4"),l(He,"class",Ga=re(`p-2 ${r[0]==="fixtures"?"text-white":"text-gray-400"}`)+" svelte-1ylya66"),l(Ze,"class",Ha=re(`mr-4 text-xs md:text-lg ${r[0]==="fixtures"?"active-tab":""}`)+" svelte-1ylya66"),l(Me,"class",za=re(`p-2 ${r[0]==="leaderboards"?"text-white":"text-gray-400"}`)+" svelte-1ylya66"),l(ea,"class",Ua=re(`mr-4 text-xs md:text-lg ${r[0]==="leaderboards"?"active-tab":""}`)+" svelte-1ylya66"),l(ze,"class",Ka=re(`p-2 ${r[0]==="league-table"?"text-white":"text-gray-400"}`)+" svelte-1ylya66"),l(aa,"class",Ba=re(`mr-4 text-xs md:text-lg ${r[0]==="league-table"?"active-tab":""}`)+" svelte-1ylya66"),l(fe,"class","flex bg-light-gray px-4 pt-2"),l(Fe,"class","bg-panel rounded-md m-4"),l(Je,"class","m-4")},m(f,w){ue(f,e,w),a(e,t),a(t,s),a(s,m),a(m,d),a(d,v),a(m,L),a(m,_),a(_,h),a(m,g),a(m,R),a(R,S),a(s,D),a(s,b),a(s,$),a(s,O),a(O,A),a(A,j),a(O,q),a(O,C),a(C,W),a(O,y),a(O,G),a(G,p),a(s,P),a(s,u),a(s,Y),a(s,H),a(H,X),a(X,M),a(H,ee),a(H,Q),a(Q,U),a(H,Be),a(H,ae),a(ae,we),a(t,Ce),a(t,K),a(K,ne),a(ne,_e),a(_e,Ae),a(ne,je),a(ne,he),a(he,V),a(V,N),a(N,k),Te(J,k,null),a(V,ra),a(V,Pe),a(Pe,ke),a(ke,la),a(V,oa),a(V,Oe),a(Oe,ge),Te(ce,ge,null),a(ne,na),a(ne,me),a(me,pe),a(pe,Re),a(Re,ve),a(ve,Ca),a(me,at),a(me,ya),a(me,tt),a(me,ia),a(ia,ca),a(ca,qe),a(qe,Pa),a(K,st),a(K,Ye),a(K,rt),a(K,be),a(be,ma),a(ma,lt),a(be,ot),a(be,da),a(da,de),a(de,Oa),a(de,fa),a(fa,nt),a(de,it),a(de,La),a(de,_a),a(_a,ct),a(de,mt),a(de,Ra),a(de,ua),a(ua,dt),a(be,ft),a(be,We),a(We,Fa),a(We,_t),a(We,$a),a(K,ut),a(K,Xe),a(K,ht),a(K,Ie),a(Ie,Ge),a(Ge,pt),a(Ge,Va),a(Ge,vt),a(Ie,gt),a(Ie,ha),a(ha,ja),a(Ie,bt),a(Ie,Qe),a(Qe,qa),a(Qe,It),ue(f,Wa,w),ue(f,Je,w),a(Je,Fe),a(Fe,fe),a(fe,Ze),a(Ze,He),a(He,Et),a(fe,St),se&&se.m(fe,null),a(fe,Ma),a(fe,ea),a(ea,Me),a(Me,Nt),a(fe,yt),a(fe,aa),a(aa,ze),a(ze,Dt),a(Fe,Tt),~ie&&ta[ie].m(Fe,null),F=!0,xt||(kt=[sa(He,"click",r[18]),sa(Me,"click",r[20]),sa(ze,"click",r[21])],xt=!0)},p(f,w){(!F||w&2)&&B(h,f[1]),(!F||w&4)&&B(S,f[2]),(!F||w&8)&&B(W,f[3]);const $e={};w&4096&&($e.primaryColour=f[12]?f[12].primaryColourHex:""),w&4096&&($e.secondaryColour=f[12]?f[12].secondaryColourHex:""),w&4096&&($e.thirdColour=f[12]?f[12].thirdColourHex:""),J.$set($e),(!F||w&4096&&te!==(te=`/club/${f[12]?f[12].id:-1}`))&&l(k,"href",te);const oe={};w&8192&&(oe.primaryColour=f[13]?f[13].primaryColourHex:""),w&8192&&(oe.secondaryColour=f[13]?f[13].secondaryColourHex:""),w&8192&&(oe.thirdColour=f[13]?f[13].thirdColourHex:""),ce.$set(oe),(!F||w&8192&&Le!==(Le=`/club/${f[13]?f[13].id:-1}`))&&l(ge,"href",Le),(!F||w&4096)&&Na!==(Na=(f[12]?f[12].abbreviatedName:"")+"")&&B(Ca,Na),(!F||w&4096&&Aa!==(Aa=`/club/${f[12]?f[12].id:-1}`))&&l(ve,"href",Aa),(!F||w&8192)&&Da!==(Da=(f[13]?f[13].abbreviatedName:"")+"")&&B(Pa,Da),(!F||w&8192&&ka!==(ka=`/club/${f[13]?f[13].id:-1}`))&&l(qe,"href",ka),(!F||w&16)&&B(Oa,f[4]),(!F||w&32)&&B(La,f[5]),(!F||w&64)&&B(Ra,f[6]),(!F||w&128)&&B(Fa,f[7]),(!F||w&256)&&B($a,f[8]),(!F||w&512)&&B(Va,f[9]),(!F||w&1024)&&B(ja,f[10]),(!F||w&2048)&&B(qa,f[11]),(!F||w&1&&Ga!==(Ga=re(`p-2 ${f[0]==="fixtures"?"text-white":"text-gray-400"}`)+" svelte-1ylya66"))&&l(He,"class",Ga),(!F||w&1&&Ha!==(Ha=re(`mr-4 text-xs md:text-lg ${f[0]==="fixtures"?"active-tab":""}`)+" svelte-1ylya66"))&&l(Ze,"class",Ha),f[16]?se?se.p(f,w):(se=Ts(f),se.c(),se.m(fe,Ma)):se&&(se.d(1),se=null),(!F||w&1&&za!==(za=re(`p-2 ${f[0]==="leaderboards"?"text-white":"text-gray-400"}`)+" svelte-1ylya66"))&&l(Me,"class",za),(!F||w&1&&Ua!==(Ua=re(`mr-4 text-xs md:text-lg ${f[0]==="leaderboards"?"active-tab":""}`)+" svelte-1ylya66"))&&l(ea,"class",Ua),(!F||w&1&&Ka!==(Ka=re(`p-2 ${f[0]==="league-table"?"text-white":"text-gray-400"}`)+" svelte-1ylya66"))&&l(ze,"class",Ka),(!F||w&1&&Ba!==(Ba=re(`mr-4 text-xs md:text-lg ${f[0]==="league-table"?"active-tab":""}`)+" svelte-1ylya66"))&&l(aa,"class",Ba);let Ee=ie;ie=Lt(f),ie!==Ee&&(le&&(Za(),Z(ta[Ee],1,1,()=>{ta[Ee]=null}),et()),~ie?(le=ta[ie],le||(le=ta[ie]=Ot[ie](f),le.c()),z(le,1),le.m(Fe,null)):le=null)},i(f){F||(z(J.$$.fragment,f),z(ce.$$.fragment,f),z(le),F=!0)},o(f){Z(J.$$.fragment,f),Z(ce.$$.fragment,f),Z(le),F=!1},d(f){f&&o(e),xe(J),xe(ce),f&&o(Wa),f&&o(Je),se&&se.d(),~ie&&ta[ie].d(),xt=!1,xs(kt)}}}function ar(r){let e,t;return e=new js({props:{progress:r[14]}}),{c(){ye(e.$$.fragment)},l(s){De(e.$$.fragment,s)},m(s,m){Te(e,s,m),t=!0},p(s,m){const d={};m&16384&&(d.progress=s[14]),e.$set(d)},i(s){t||(z(e.$$.fragment,s),t=!0)},o(s){Z(e.$$.fragment,s),t=!1},d(s){xe(e,s)}}}function Ts(r){let e,t,s,m,d,v,L;return{c(){e=n("li"),t=n("button"),s=I("Points"),this.h()},l(_){e=i(_,"LI",{class:!0});var h=c(e);t=i(h,"BUTTON",{class:!0});var g=c(t);s=E(g,"Points"),g.forEach(o),h.forEach(o),this.h()},h(){l(t,"class",m=re(`p-2 ${r[0]==="points"?"text-white":"text-gray-400"}`)+" svelte-1ylya66"),l(e,"class",d=re(`mr-4 text-xs md:text-lg ${r[0]==="points"?"active-tab":""}`)+" svelte-1ylya66")},m(_,h){ue(_,e,h),a(e,t),a(t,s),v||(L=sa(t,"click",r[19]),v=!0)},p(_,h){h&1&&m!==(m=re(`p-2 ${_[0]==="points"?"text-white":"text-gray-400"}`)+" svelte-1ylya66")&&l(t,"class",m),h&1&&d!==(d=re(`mr-4 text-xs md:text-lg ${_[0]==="points"?"active-tab":""}`)+" svelte-1ylya66")&&l(e,"class",d)},d(_){_&&o(e),v=!1,L()}}}function tr(r){let e,t;return e=new Zs({}),{c(){ye(e.$$.fragment)},l(s){De(e.$$.fragment,s)},m(s,m){Te(e,s,m),t=!0},i(s){t||(z(e.$$.fragment,s),t=!0)},o(s){Z(e.$$.fragment,s),t=!1},d(s){xe(e,s)}}}function sr(r){let e,t;return e=new Qs({}),{c(){ye(e.$$.fragment)},l(s){De(e.$$.fragment,s)},m(s,m){Te(e,s,m),t=!0},i(s){t||(z(e.$$.fragment,s),t=!0)},o(s){Z(e.$$.fragment,s),t=!1},d(s){xe(e,s)}}}function rr(r){let e,t;return e=new Ys({}),{c(){ye(e.$$.fragment)},l(s){De(e.$$.fragment,s)},m(s,m){Te(e,s,m),t=!0},i(s){t||(z(e.$$.fragment,s),t=!0)},o(s){Z(e.$$.fragment,s),t=!1},d(s){xe(e,s)}}}function lr(r){let e,t;return e=new Ks({}),{c(){ye(e.$$.fragment)},l(s){De(e.$$.fragment,s)},m(s,m){Te(e,s,m),t=!0},i(s){t||(z(e.$$.fragment,s),t=!0)},o(s){Z(e.$$.fragment,s),t=!1},d(s){xe(e,s)}}}function or(r){let e,t,s,m;const d=[ar,er],v=[];function L(_,h){return _[15]?0:1}return e=L(r),t=v[e]=d[e](r),{c(){t.c(),s=bs()},l(_){t.l(_),s=bs()},m(_,h){v[e].m(_,h),ue(_,s,h),m=!0},p(_,h){let g=e;e=L(_),e===g?v[e].p(_,h):(Za(),Z(v[g],1,1,()=>{v[g]=null}),et(),t=v[e],t?t.p(_,h):(t=v[e]=d[e](_),t.c()),z(t,1),t.m(s.parentNode,s))},i(_){m||(z(t),m=!0)},o(_){Z(t),m=!1},d(_){v[e].d(_),_&&o(s)}}}function nr(r){let e,t;return e=new Gs({props:{$$slots:{default:[or]},$$scope:{ctx:r}}}),{c(){ye(e.$$.fragment)},l(s){De(e.$$.fragment,s)},m(s,m){Te(e,s,m),t=!0},p(s,[m]){const d={};m&134348799&&(d.$$scope={dirty:m,ctx:s}),e.$set(d)},i(s){t||(z(e.$$.fragment,s),t=!0)},o(s){Z(e.$$.fragment,s),t=!1},d(s){xe(e,s)}}}function ir(r,e,t){const s=new Pt,m=new Cs,d=new As,v=new Ms,L=new Fs;let _="fixtures",h=-1,g="-",R=-1,S="00",D="00",b="00",$="-",O="-",A=-1,j="-",q=0,C,W,y=0,G=!0,p=!1;ws(async()=>{t(15,G=!0),Hs.subscribe(M=>{t(16,p=M)});try{t(14,y=0),t(3,R=await L.getTotalManagers()),t(14,y=20);let M=await s.getSystemState(localStorage.getItem("system_state_hash")??"");t(1,h=M.activeGameweek),t(2,g=M.activeSeason.name),t(9,A=M.focusGameweek),t(14,y=40);let ee=await m.getNextFixture();t(12,C=await d.getTeamById(ee.homeTeamId)),t(13,W=await d.getTeamById(ee.awayTeamId)),t(7,$=$s(Number(ee.kickOff))),t(8,O=At(Number(ee.kickOff))),t(14,y=60);let Q=Vs(Number(ee.kickOff));t(4,S=Q.days.toString()),t(5,D=Q.hours.toString()),t(6,b=Q.minutes.toString()),t(14,y=80);let U=await v.getLeadingWeeklyTeam();t(10,j=U.username),t(11,q=U.points),t(14,y=100),t(15,G=!1)}catch(M){console.error("Error fetching homepage data:",M),t(15,G=!1)}});function P(M){t(0,_=M)}return[_,h,g,R,S,D,b,$,O,A,j,q,C,W,y,G,p,P,()=>P("fixtures"),()=>P("points"),()=>P("leaderboards"),()=>P("league-table")]}class ur extends Ta{constructor(e){super(),xa(this,e,ir,nr,wa,{})}}export{ur as component};
