import{w as N}from"./index.8caf67b2.js";import"./toast-store.fd13d56a.js";import{A as _,i as f,r as E}from"./team-store.ba38ba75.js";function I(){const{subscribe:c,set:s}=N([]),i=_.createActor(f,"bboqb-jiaaa-aaaal-qb6ea-cai");async function o(){let a="fixtures",t=(await i.getDataHashes()).find(e=>e.category===a)??null;const u=localStorage.getItem(a);if(t?.hash!=u){let e=await i.getFixtures();localStorage.setItem("fixtures_data",JSON.stringify(e,E)),localStorage.setItem(a,t?.hash??""),s(e)}else{const e=localStorage.getItem("fixtures_data");let r=[];try{r=JSON.parse(e||"[]")}catch{r=[]}s(r)}}async function n(){let a=[];await o(),await c(t=>{a=t})();const l=new Date;return a.find(t=>new Date(Number(t.kickOff)/1e6)>l)}return{subscribe:c,sync:o,getNextFixture:n}}const w=I();export{w as f};
