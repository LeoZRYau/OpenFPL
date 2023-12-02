import{A as n,i as C,a as i}from"./Helpers.c6feb0fc.js";import{s as b}from"./system-store.53911b2c.js";import{w as R}from"./index.c203a7c8.js";function g(){const{subscribe:I,set:y}=R(null);let c;b.subscribe(a=>{c=a});const e=n.createActor(C,"bkyz2-fmaaa-aaaaa-qaaaq-cai");async function _(a,r,t){try{return await e.getManager(a,r,t)}catch(o){throw console.error("Error fetching fantasy team for gameweek:",o),o}}async function E(){try{const a=await e.getTotalManagers();return Number(a)}catch(a){throw console.error("Error fetching total managers:",a),a}}async function s(a,r){try{return await e.getFantasyTeamForGameweek(a,c?.activeSeason.id,r)}catch(t){throw console.error("Error fetching fantasy team for gameweek:",t),t}}async function N(){try{return await(await n.createIdentityActor(i,"bkyz2-fmaaa-aaaaa-qaaaq-cai")).getFantasyTeam()}catch(a){throw console.error("Error fetching fantasy team:",a),a}}async function f(a,r){try{let t=A(a,r),o=l(a,r),d=D(a,r);return await(await n.createIdentityActor(i,"bkyz2-fmaaa-aaaaa-qaaaq-cai")).saveFantasyTeam(a.playerIds,a.captainId,t,o,d)}catch(t){throw console.error("Error saving fantasy team:",t),t}}function A(a,r){let t=0;return a.goalGetterGameweek===r&&(t=1),a.passMasterGameweek===r&&(t=2),a.noEntryGameweek===r&&(t=3),a.teamBoostGameweek===r&&(t=4),a.safeHandsGameweek===r&&(t=5),a.captainFantasticGameweek===r&&(t=6),a.hatTrickHeroGameweek===r&&(t=7),a.hatTrickHeroGameweek===r&&(t=8),t}function l(a,r){let t=0;return a.goalGetterGameweek===r&&(t=a.goalGetterPlayerId),a.passMasterGameweek===r&&(t=a.passMasterPlayerId),a.noEntryGameweek===r&&(t=a.noEntryPlayerId),a.safeHandsGameweek===r&&(t=a.safeHandsPlayerId),a.captainFantasticGameweek===r&&(t=a.captainId),t}function D(a,r){let t=0;return a.teamBoostGameweek===r&&(t=a.teamBoostTeamId),t}return{subscribe:I,getManager:_,getTotalManagers:E,getFantasyTeamForGameweek:s,getFantasyTeam:N,saveFantasyTeam:f}}const w=g();export{w as m};
