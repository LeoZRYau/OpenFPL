import{w as y}from"./index.8caf67b2.js";import"./toast-store.fd13d56a.js";import{A as _,i as m,r as N}from"./team-store.ba38ba75.js";function E(){const{subscribe:s,set:c}=y(null);let l=_.createActor(m,"bboqb-jiaaa-aaaal-qb6ea-cai");async function S(){let a="system_state",r=(await l.getDataHashes()).find(t=>t.category===a)??null;const i=localStorage.getItem(a);if(r?.hash!=i){let t=await l.getSystemState();localStorage.setItem("system_state_data",JSON.stringify(t,N)),localStorage.setItem(a,r?.hash??""),c(t)}else{const t=localStorage.getItem("system_state_data");let e=null;try{e=JSON.parse(t||"{}")}catch{e=null}c(e)}}async function n(){let a;return s(o=>{a=o})(),a}return{subscribe:s,sync:S,getSystemState:n}}const A=E();export{A as s};
