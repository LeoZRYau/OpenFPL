import{w as i}from"./index.c203a7c8.js";import"./toast-store.4fb1a6f1.js";import{A as m,i as y,r as I}from"./team-store.1430ecc0.js";function N(){const{subscribe:s,set:c}=i(null);let l=m.createActor(y,"bkyz2-fmaaa-aaaaa-qaaaq-cai");async function S(){let a="system_state",o=(await l.getDataHashes()).find(t=>t.category===a)??null;const n=localStorage.getItem(a);if(o?.hash!=n){let t=await l.getSystemState();localStorage.setItem("system_state_data",JSON.stringify(t,I)),localStorage.setItem(a,o?.hash??""),c(t)}else{const t=localStorage.getItem("system_state_data");let e=null;try{e=JSON.parse(t||"{}")}catch{e=null}c(e)}}async function _(){let a;return s(r=>{a=r})(),a}return{subscribe:s,sync:S,getSystemState:_}}const g=N();export{g as s};
