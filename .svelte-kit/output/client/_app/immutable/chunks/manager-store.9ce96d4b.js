import { w as b } from "./index.8caf67b2.js";
import { s as D } from "./system-store.28344883.js";
import { A as i, i as T } from "./team-store.90511bc6.js";
import { a as r } from "./toast-store.58fa49f6.js";
function A() {
  const { subscribe: _, set: g } = b(null);
  let m;
  D.subscribe((a) => {
    m = a;
  });
  const s = i.createActor(T, "bboqb-jiaaa-aaaal-qb6ea-cai");
  async function c(a, n, e) {
    try {
      return await s.getManager(a, n, e);
    } catch (o) {
      throw (console.error("Error fetching fantasy team for gameweek:", o), o);
    }
  }
  async function t() {
    try {
      const a = await s.getTotalManagers();
      return Number(a);
    } catch (a) {
      throw (console.error("Error fetching total managers:", a), a);
    }
  }
  async function I(a, n) {
    try {
      return await s.getFantasyTeamForGameweek(a, m?.activeSeason.id, n);
    } catch (e) {
      throw (console.error("Error fetching fantasy team for gameweek:", e), e);
    }
  }
  async function S() {
    try {
      return await (
        await i.createIdentityActor(r, "bboqb-jiaaa-aaaal-qb6ea-cai")
      ).getFantasyTeam();
    } catch (a) {
      throw (console.error("Error fetching fantasy team:", a), a);
    }
  }
  async function N(a, n) {
    try {
      let e = p(a, n),
        o = l(a, n),
        E = d(a, n);
      return await (
        await i.createIdentityActor(r, "bboqb-jiaaa-aaaal-qb6ea-cai")
      ).saveFantasyTeam(a.playerIds, a.captainId, e, o, E);
    } catch (e) {
      throw (console.error("Error saving fantasy team:", e), e);
    }
  }
  function p(a, n) {
    let e = 0;
    return (
      a.goalGetterGameweek === n && (e = 1),
      a.passMasterGameweek === n && (e = 2),
      a.noEntryGameweek === n && (e = 3),
      a.teamBoostGameweek === n && (e = 4),
      a.safeHandsGameweek === n && (e = 5),
      a.captainFantasticGameweek === n && (e = 6),
      a.hatTrickHeroGameweek === n && (e = 7),
      a.hatTrickHeroGameweek === n && (e = 8),
      e
    );
  }
  function l(a, n) {
    let e = 0;
    return (
      a.goalGetterGameweek === n && (e = a.goalGetterPlayerId),
      a.passMasterGameweek === n && (e = a.passMasterPlayerId),
      a.noEntryGameweek === n && (e = a.noEntryPlayerId),
      a.safeHandsGameweek === n && (e = a.safeHandsPlayerId),
      a.captainFantasticGameweek === n && (e = a.captainId),
      e
    );
  }
  function d(a, n) {
    let e = 0;
    return a.teamBoostGameweek === n && (e = a.teamBoostTeamId), e;
  }
  return {
    subscribe: _,
    getManager: c,
    getTotalManagers: t,
    getFantasyTeamForGameweek: I,
    getFantasyTeam: S,
    saveFantasyTeam: N,
  };
}
const L = A();
export { L as m };
