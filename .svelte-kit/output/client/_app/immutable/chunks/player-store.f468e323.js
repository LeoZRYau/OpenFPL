import{f as w}from"./fixture-store.f607ef65.js";import{s as M}from"./system-store.3e6f7264.js";import{w as g}from"./index.8caf67b2.js";import"./toast-store.fd13d56a.js";import{A as k,k as x,r as B}from"./team-store.1a48175b.js";function L(){const{subscribe:E,set:C}=g([]);let S;M.subscribe(e=>{S=e});let v;w.subscribe(e=>v=e);let u=k.createActor(x,"pec6o-uqaaa-aaaal-qb7eq-cai");async function G(){let e="players",s=(await u.getDataHashes()).find(o=>o.category===e)??null;const t=localStorage.getItem(e);if(s?.hash!=t){let o=await u.getAllPlayers();localStorage.setItem("players_data",JSON.stringify(o,B)),localStorage.setItem(e,s?.hash??""),C(o)}else{const o=localStorage.getItem("players_data");let a=[];try{a=JSON.parse(o||"[]")}catch{a=[]}C(a)}}async function N(){const e=localStorage.getItem("player_events_data");let r;try{r=JSON.parse(e||"[]")}catch{r=[]}return r}async function _(e,r){try{return await u.getPlayerDetails(e,r)}catch(s){throw console.error("Error fetching player data:",s),s}}async function A(e,r){let s=[];S?.focusGameweek===r?s=await N():s=await u.getPlayersDetailsForGameweek(e.playerIds,S?.activeSeason.id,r);const o=(await Promise.all(s.map(async a=>await R(a)))).map(a=>{const l=q(a,v),n=H(a,e,l),d=a.player.id===e.captainId?l+n:0;return{...a,points:l,bonusPoints:n,totalPoints:l+n+d}});return await Promise.all(o)}async function R(e){let r=0,s=0,t=0,o=0,a=0,l=0,n=0,d=0,b=0,y=0,f=0,h=0,i=0,c=0,I=0,F=0;e.events.forEach(P=>{switch(P.eventType){case 0:f+=1;break;case 1:switch(r+=1,e.position){case 0:case 1:i+=20;break;case 2:i+=15;break;case 3:i+=10;break}break;case 2:switch(s+=1,e.position){case 0:case 1:c+=15;break;case 2:case 3:c+=10;break}break;case 3:y+=1,e.position<2&&y%2===0&&(I+=-15);break;case 4:n+=1;break;case 5:d+=1,e.position<2&&y===0&&(F+=10);break;case 6:b+=1;break;case 7:a+=1;break;case 8:o+=1;break;case 9:t+=1;break;case 10:l+=1;break;case 11:h+=1;break}});let p=[];return E(P=>p=P),{player:p.find(P=>P.id===e.id),points:e.points,appearance:f,goals:r,assists:s,goalsConceded:y,saves:n,cleanSheets:d,penaltySaves:b,missedPenalties:a,yellowCards:o,redCards:t,ownGoals:l,highestScoringPlayerId:h,goalPoints:i,assistPoints:c,goalsConcededPoints:I,cleanSheetPoints:F,gameweek:e.gameweek,bonusPoints:0,totalPoints:0}}function q(e,r){if(!e)return console.error("No gameweek data found:",e),0;let s=0,t=5,o=5,a=20,l=25,n=-20,d=-10,b=-15,y=-10,f=-5,h=10;var i=0,c=0;switch(e.appearance>0&&(s+=t*e.appearance),e.redCards>0&&(s+=n),e.missedPenalties>0&&(s+=d*e.missedPenalties),e.ownGoals>0&&(s+=y*e.ownGoals),e.yellowCards>0&&(s+=f*e.yellowCards),e.player.position){case 0:i=20,c=15,e.saves>=3&&(s+=Math.floor(e.saves/3)*o),e.penaltySaves&&(s+=a*e.penaltySaves),e.cleanSheets>0&&(s+=h),e.goalsConceded>=2&&(s+=Math.floor(e.goalsConceded/2)*b);break;case 1:i=20,c=15,e.cleanSheets>0&&(s+=h),e.goalsConceded>=2&&(s+=Math.floor(e.goalsConceded/2)*b);break;case 2:i=15,c=10;break;case 3:i=10,c=10;break}return(r?r.filter(p=>p.gameweek===e.gameweek):[]).find(p=>(p.homeTeamId===e.player.teamId||p.awayTeamId===e.player.teamId)&&p.highestScoringPlayerId===e.player.id)&&(s+=l),s+=e.goals*i,s+=e.assists*c,s}function H(e,r,s){if(!e)return console.error("No gameweek data found:",e),0;let t=0;var o=0,a=0;switch(e.player.position){case 0:o=20,a=15;break;case 1:o=20,a=15;break;case 2:o=15,a=10;break;case 3:o=10,a=10;break}return r.goalGetterGameweek===e.gameweek&&r.goalGetterPlayerId===e.player.id&&(t=e.goals*o*2),r.passMasterGameweek===e.gameweek&&r.passMasterPlayerId===e.player.id&&(t=e.assists*a*2),r.noEntryGameweek===e.gameweek&&r.noEntryPlayerId===e.player.id&&(e.player.position===0||e.player.position===1)&&e.cleanSheets&&(t=s*2),r.safeHandsGameweek===e.gameweek&&e.player.position===0&&e.saves>=5&&(t=s*2),r.captainFantasticGameweek===e.gameweek&&r.captainId===e.player.id&&e.goals>0&&(t=s),r.braceBonusGameweek===e.gameweek&&e.goals>=2&&(t=s),r.hatTrickHeroGameweek===e.gameweek&&e.goals>=3&&(t=s*2),r.teamBoostGameweek===e.gameweek&&e.player.teamId===r.teamBoostTeamId&&(t=s),t}return{subscribe:E,sync:G,getPlayerDetails:_,getGameweekPlayers:A}}const j=L();export{j as p};
