import{a as n}from"./toast-store.ddf69d4c.js";import{w as c}from"./index.8caf67b2.js";import{A as s}from"./team-store.38ee0fd3.js";function _(){const{subscribe:m,set:i}=c([]);async function r(){const a=await(await s.createIdentityActor(n,"bboqb-jiaaa-aaaal-qb6ea-cai")).getValidatableFixtures();return i(a),a}async function t(o,a){try{await(await s.createIdentityActor(n,"bboqb-jiaaa-aaaal-qb6ea-cai")).submitFixtureData(o,a)}catch(e){throw console.error("Error submitting fixture data:",e),e}}return{subscribe:m,getValidatableFixtures:r,submitFixtureData:t}}const S=_();export{S as g};
