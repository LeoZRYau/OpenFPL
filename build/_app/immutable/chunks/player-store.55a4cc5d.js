import { f as F } from "./fixture-store.8fe042dd.js";
import { w as L } from "./index.8caf67b2.js";
import { s as O } from "./system-store.408d352e.js";
import { A as j, k as q, r as G } from "./team-store.a9afdac8.js";
import "./toast-store.64ad2768.js";
function k() {
  const { subscribe: C, set: f } = L([]);
  let b;
  O.subscribe((a) => {
    b = a;
  });
  let y;
  F.subscribe((a) => (y = a));
  let N = j.createActor(q, "be2us-64aaa-aaaaa-qaabq-cai");
  async function g() {
    let a = "players",
      e = (await N.getDataHashes()).find((n) => n.category === a) ?? null;
    const r = localStorage.getItem(a);
    if (e?.hash != r) {
      let n = await N.getAllPlayers();
      localStorage.setItem("players_data", JSON.stringify(n, G)),
        localStorage.setItem(a, e?.hash ?? ""),
        f(n);
    } else {
      const n = localStorage.getItem("players_data");
      let o = [];
      try {
        o = JSON.parse(n || "[]");
      } catch {
        o = [];
      }
      f(o);
    }
  }
  async function T() {
    const a = localStorage.getItem("player_events_data");
    let s;
    try {
      s = JSON.parse(a || "[]");
    } catch {
      s = [];
    }
    return s;
  }
  async function h(a, s) {
    try {
      return await N.getPlayerDetails(a, s);
    } catch (e) {
      throw (console.error("Error fetching player data:", e), e);
    }
  }
  async function v(a, s) {
    let e = [];
    b?.focusGameweek === s
      ? (e = await T())
      : (e = await N.getPlayersDetailsForGameweek(
          a.playerIds,
          b?.activeSeason.id,
          s
        ));
    const n = (await Promise.all(e.map(async (o) => await R(o)))).map((o) => {
      const i = D(o, y),
        l = u(o, a, i),
        _ = o.player.id === a.captainId ? i + l : 0;
      return { ...o, points: i, bonusPoints: l, totalPoints: i + l + _ };
    });
    return await Promise.all(n);
  }
  async function R(a) {
    let s = 0,
      e = 0,
      r = 0,
      n = 0,
      o = 0,
      i = 0,
      l = 0,
      _ = 0,
      d = 0,
      p = 0,
      E = 0,
      S = 0,
      c = 0,
      t = 0,
      A = 0,
      P = 0;
    a.events.forEach((I) => {
      switch (I.eventType) {
        case 0:
          E += 1;
          break;
        case 1:
          switch (((s += 1), a.position)) {
            case 0:
            case 1:
              c += 20;
              break;
            case 2:
              c += 15;
              break;
            case 3:
              c += 10;
              break;
          }
          break;
        case 2:
          switch (((e += 1), a.position)) {
            case 0:
            case 1:
              t += 15;
              break;
            case 2:
            case 3:
              t += 10;
              break;
          }
          break;
        case 3:
          (p += 1), a.position < 2 && p % 2 === 0 && (A += -15);
          break;
        case 4:
          l += 1;
          break;
        case 5:
          (_ += 1), a.position < 2 && p === 0 && (P += 10);
          break;
        case 6:
          d += 1;
          break;
        case 7:
          o += 1;
          break;
        case 8:
          n += 1;
          break;
        case 9:
          r += 1;
          break;
        case 10:
          i += 1;
          break;
        case 11:
          S += 1;
          break;
      }
    });
    let m = [];
    return (
      C((I) => (m = I)),
      {
        player: m.find((I) => I.id === a.id),
        points: a.points,
        appearance: E,
        goals: s,
        assists: e,
        goalsConceded: p,
        saves: l,
        cleanSheets: _,
        penaltySaves: d,
        missedPenalties: o,
        yellowCards: n,
        redCards: r,
        ownGoals: i,
        highestScoringPlayerId: S,
        goalPoints: c,
        assistPoints: t,
        goalsConcededPoints: A,
        cleanSheetPoints: P,
        gameweek: a.gameweek,
        bonusPoints: 0,
        totalPoints: 0,
      }
    );
  }
  function D(a, s) {
    if (!a) return console.error("No gameweek data found:", a), 0;
    let e = 0,
      r = 5,
      n = 5,
      o = 20,
      i = 25,
      l = -20,
      _ = -10,
      d = -15,
      p = -10,
      E = -5,
      S = 10;
    var c = 0,
      t = 0;
    switch (
      (a.appearance > 0 && (e += r * a.appearance),
      a.redCards > 0 && (e += l),
      a.missedPenalties > 0 && (e += _ * a.missedPenalties),
      a.ownGoals > 0 && (e += p * a.ownGoals),
      a.yellowCards > 0 && (e += E * a.yellowCards),
      a.player.position)
    ) {
      case 0:
        (c = 20),
          (t = 15),
          a.saves >= 3 && (e += Math.floor(a.saves / 3) * n),
          a.penaltySaves && (e += o * a.penaltySaves),
          a.cleanSheets > 0 && (e += S),
          a.goalsConceded >= 2 && (e += Math.floor(a.goalsConceded / 2) * d);
        break;
      case 1:
        (c = 20),
          (t = 15),
          a.cleanSheets > 0 && (e += S),
          a.goalsConceded >= 2 && (e += Math.floor(a.goalsConceded / 2) * d);
        break;
      case 2:
        (c = 15), (t = 10);
        break;
      case 3:
        (c = 10), (t = 10);
        break;
    }
    return (
      (s ? s.filter((m) => m.gameweek === a.gameweek) : []).find(
        (m) =>
          (m.homeTeamId === a.player.teamId ||
            m.awayTeamId === a.player.teamId) &&
          m.highestScoringPlayerId === a.player.id
      ) && (e += i),
      (e += a.goals * c),
      (e += a.assists * t),
      e
    );
  }
  function u(a, s, e) {
    if (!a) return console.error("No gameweek data found:", a), 0;
    let r = 0;
    var n = 0,
      o = 0;
    switch (a.player.position) {
      case 0:
        (n = 20), (o = 15);
        break;
      case 1:
        (n = 20), (o = 15);
        break;
      case 2:
        (n = 15), (o = 10);
        break;
      case 3:
        (n = 10), (o = 10);
        break;
    }
    return (
      s.goalGetterGameweek === a.gameweek &&
        s.goalGetterPlayerId === a.player.id &&
        (r = a.goals * n * 2),
      s.passMasterGameweek === a.gameweek &&
        s.passMasterPlayerId === a.player.id &&
        (r = a.assists * o * 2),
      s.noEntryGameweek === a.gameweek &&
        s.noEntryPlayerId === a.player.id &&
        (a.player.position === 0 || a.player.position === 1) &&
        a.cleanSheets &&
        (r = e * 2),
      s.safeHandsGameweek === a.gameweek &&
        a.player.position === 0 &&
        a.saves >= 5 &&
        (r = e * 2),
      s.captainFantasticGameweek === a.gameweek &&
        s.captainId === a.player.id &&
        a.goals > 0 &&
        (r = e),
      s.braceBonusGameweek === a.gameweek && a.goals >= 2 && (r = e),
      s.hatTrickHeroGameweek === a.gameweek && a.goals >= 3 && (r = e * 2),
      s.teamBoostGameweek === a.gameweek &&
        a.player.teamId === s.teamBoostTeamId &&
        (r = e),
      r
    );
  }
  return { subscribe: C, sync: g, getPlayerDetails: h, getGameweekPlayers: v };
}
const H = k();
export { H as p };
