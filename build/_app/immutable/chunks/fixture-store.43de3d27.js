import{w as S}from"./index.8caf67b2.js";import"./toast-store.6633d9f4.js";import{A as N,i as I,r as l}from"./team-store.5723d493.js";function p(){const{subscribe:o,set:i}=S([]),r=N.createActor(I,"bboqb-jiaaa-aaaal-qb6ea-cai");async function m(){let a="fixtures",e=(await r.getDataHashes()).find(n=>n.category===a)??null;const _=localStorage.getItem(a);if(e?.hash!=_){let n=await r.getFixtures();localStorage.setItem("fixtures_data",JSON.stringify(n,l)),localStorage.setItem(a,e?.hash??""),i(n)}else{const n=localStorage.getItem("fixtures_data");let s=[];try{s=JSON.parse(n||"[]")}catch{s=[]}i(s)}}async function t(){let a=[];await m(),await o(e=>{a=e})();const c=new Date;return a.find(e=>new Date(Number(e.kickOff)/1e6)>c)}return{subscribe:o,sync:m,getNextFixture:t}}const A=p();export{A as f};
