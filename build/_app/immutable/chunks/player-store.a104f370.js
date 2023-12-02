import{f as w}from"./fixture-store.89aff47d.js";import{s as M}from"./system-store.53911b2c.js";import{w as g}from"./index.c203a7c8.js";import{A as k,l as x,r as B}from"./Helpers.c6feb0fc.js";function L(){const{subscribe:_,set:F}=g([]);let S;M.subscribe(e=>{S=e});let C;w.subscribe(e=>C=e);let P=k.createActor(x,"be2us-64aaa-aaaaa-qaabq-cai");async function E(){let e="players",s=(await P.getDataHashes()).find(o=>o.category===e)??null;const r=localStorage.getItem(e);if(s?.hash!=r){let o=await P.getAllPlayers();localStorage.setItem("players_data",JSON.stringify(o,B)),localStorage.setItem(e,s?.hash??""),F(o)}else{const o=localStorage.getItem("players_data");let t=[];try{t=JSON.parse(o||"[]")}catch{t=[]}F(t)}}async function N(){const e=localStorage.getItem("player_events_data");let a;try{a=JSON.parse(e||"[]")}catch{a=[]}return a}async function v(e,a){try{return await P.getPlayerDetails(e,a)}catch(s){throw console.error("Error fetching player data:",s),s}}async function G(e,a){let s=[];S?.focusGameweek===a?s=await N():s=await P.getPlayersDetailsForGameweek(e.playerIds,S?.activeSeason.id,a),await E();let r=[];J.subscribe(l=>{r=l})();const y=(await Promise.all(s.map(async l=>await A(l,r.find(i=>i.id==l.id))))).map(l=>{const i=R(l,C),n=q(l,e,i),b=l.player.id===e.captainId?i+n:0;return{...l,points:i,bonusPoints:n,totalPoints:i+n+b}});return await Promise.all(y)}async function A(e,a){let s=0,r=0,o=0,t=0,y=0,l=0,i=0,n=0,b=0,u=0,h=0,p=0,c=0,f=0,I=0,d=0;return e.events.forEach(H=>{switch(H.eventType){case 0:h+=1;break;case 1:switch(s+=1,e.position){case 0:case 1:c+=20;break;case 2:c+=15;break;case 3:c+=10;break}break;case 2:switch(r+=1,e.position){case 0:case 1:f+=15;break;case 2:case 3:f+=10;break}break;case 3:u+=1,e.position<2&&u%2===0&&(I+=-15);break;case 4:i+=1;break;case 5:n+=1,e.position<2&&u===0&&(d+=10);break;case 6:b+=1;break;case 7:y+=1;break;case 8:t+=1;break;case 9:o+=1;break;case 10:l+=1;break;case 11:p+=1;break}}),{player:a,points:e.points,appearance:h,goals:s,assists:r,goalsConceded:u,saves:i,cleanSheets:n,penaltySaves:b,missedPenalties:y,yellowCards:t,redCards:o,ownGoals:l,highestScoringPlayerId:p,goalPoints:c,assistPoints:f,goalsConcededPoints:I,cleanSheetPoints:d,gameweek:e.gameweek,bonusPoints:0,totalPoints:0}}function R(e,a){if(!e)return console.error("No gameweek data found:",e),0;let s=0,r=5,o=5,t=20,y=25,l=-20,i=-10,n=-15,b=-10,u=-5,h=10;var p=0,c=0;switch(e.appearance>0&&(s+=r*e.appearance),e.redCards>0&&(s+=l),e.missedPenalties>0&&(s+=i*e.missedPenalties),e.ownGoals>0&&(s+=b*e.ownGoals),e.yellowCards>0&&(s+=u*e.yellowCards),e.player.position){case 0:p=20,c=15,e.saves>=3&&(s+=Math.floor(e.saves/3)*o),e.penaltySaves&&(s+=t*e.penaltySaves),e.cleanSheets>0&&(s+=h),e.goalsConceded>=2&&(s+=Math.floor(e.goalsConceded/2)*n);break;case 1:p=20,c=15,e.cleanSheets>0&&(s+=h),e.goalsConceded>=2&&(s+=Math.floor(e.goalsConceded/2)*n);break;case 2:p=15,c=10;break;case 3:p=10,c=10;break}return(a?a.filter(d=>d.gameweek===e.gameweek):[]).find(d=>(d.homeTeamId===e.player.teamId||d.awayTeamId===e.player.teamId)&&d.highestScoringPlayerId===e.player.id)&&(s+=y),s+=e.goals*p,s+=e.assists*c,s}function q(e,a,s){if(!e)return console.error("No gameweek data found:",e),0;let r=0;var o=0,t=0;switch(e.player.position){case 0:o=20,t=15;break;case 1:o=20,t=15;break;case 2:o=15,t=10;break;case 3:o=10,t=10;break}return a.goalGetterGameweek===e.gameweek&&a.goalGetterPlayerId===e.player.id&&(r=e.goals*o*2),a.passMasterGameweek===e.gameweek&&a.passMasterPlayerId===e.player.id&&(r=e.assists*t*2),a.noEntryGameweek===e.gameweek&&a.noEntryPlayerId===e.player.id&&(e.player.position===0||e.player.position===1)&&e.cleanSheets&&(r=s*2),a.safeHandsGameweek===e.gameweek&&e.player.position===0&&e.saves>=5&&(r=s*2),a.captainFantasticGameweek===e.gameweek&&a.captainId===e.player.id&&e.goals>0&&(r=s),a.braceBonusGameweek===e.gameweek&&e.goals>=2&&(r=s),a.hatTrickHeroGameweek===e.gameweek&&e.goals>=3&&(r=s*2),a.teamBoostGameweek===e.gameweek&&e.player.teamId===a.teamBoostTeamId&&(r=s),r}return{subscribe:_,sync:E,getPlayerDetails:v,getGameweekPlayers:G}}const J=L();export{J as p};
