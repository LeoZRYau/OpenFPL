import { B as aa } from "../chunks/BadgeIcon.ac2d82f5.js";
import { f as Fl } from "../chunks/fixture-store.880a736f.js";
import {
  a as E,
  A as Re,
  B as qe,
  b as ve,
  c as k,
  d as pe,
  e as jl,
  f as Yt,
  G as e,
  g as me,
  H as gt,
  h as r,
  i as ha,
  I as Rs,
  J as ta,
  K as bt,
  k as o,
  l as n,
  L as we,
  M as cl,
  m as i,
  n as c,
  N as xl,
  o as $a,
  O as Ga,
  P as ea,
  p as Ml,
  q as h,
  Q as Sa,
  R as fs,
  r as _,
  S as va,
  s as _a,
  T as us,
  u as Q,
  U as Ze,
  v as zt,
  x as ds,
  y as Je,
  z as Ye,
} from "../chunks/index.a8c54947.js";
import {
  a as Aa,
  A as qs,
  b as vs,
  c as Ys,
  d as hs,
  e as Qs,
  f as ja,
  g as ms,
  h as Xs,
  i as Ks,
  L as Us,
  r as Ma,
  t as la,
  u as zs,
} from "../chunks/Layout.3f9368f3.js";
import { m as Ws } from "../chunks/manager-store.58773d0c.js";
import { p as Js } from "../chunks/player-events-store.1310c1bb.js";
import { p as er } from "../chunks/player-store.f12f3662.js";
import { w as Zs } from "../chunks/singletons.e655d5e5.js";
import { s as Qt, t as Kt } from "../chunks/team-store.583260fe.js";
import { V as tr } from "../chunks/ViewDetailsIcon.d864d339.js";
function lr() {
  const { subscribe: l, set: t } = Zs(null),
    a = 25;
  let s;
  Qt.subscribe((p) => {
    s = p;
  });
  let d = qs.createActor(Ks, "bboqb-jiaaa-aaaal-qb6ea-cai");
  async function u() {
    let p = "weekly_leaderboard",
      D = (await d.getDataHashes()).find((b) => b.category === p) ?? null;
    const x = localStorage.getItem(p);
    if (D?.hash != x) {
      let b = await d.getWeeklyLeaderboardCache(
        s?.activeSeason.id,
        s?.focusGameweek
      );
      localStorage.setItem("weekly_leaderboard_data", JSON.stringify(b, Ma)),
        localStorage.setItem(p, D?.hash ?? "");
    }
  }
  async function f() {
    let p = "monthly_leaderboards",
      D = (await d.getDataHashes()).find((b) => b.category === p) ?? null;
    const x = localStorage.getItem(p);
    if (D?.hash != x) {
      let b = await d.getClubLeaderboardsCache(
        s?.activeSeason.id,
        s?.activeMonth
      );
      localStorage.setItem("monthly_leaderboard_data", JSON.stringify(b, Ma)),
        localStorage.setItem(p, D?.hash ?? "");
    }
  }
  async function g() {
    let p = "season_leaderboard",
      D = (await d.getDataHashes()).find((b) => b.category === p) ?? null;
    const x = localStorage.getItem(p);
    if (D?.hash != x) {
      let b = await d.getSeasonLeaderboardCache(s?.activeSeason.id);
      localStorage.setItem("season_leaderboard_data", JSON.stringify(b, Ma)),
        localStorage.setItem(p, D?.hash ?? "");
    }
  }
  async function v() {
    const p = localStorage.getItem("weekly_leaderboard_data");
    let m;
    try {
      m = JSON.parse(
        p || "{entries: [], gameweek: 0, seasonId: 0, totalEntries: 0n }"
      );
    } catch {
      m = { entries: [], gameweek: 0, seasonId: 0, totalEntries: 0n };
    }
    return m;
  }
  async function I(p, m) {
    const D = a,
      x = (m - 1) * D;
    if (m <= 4) {
      const N = localStorage.getItem("weekly_leaderboard_data");
      if (N) {
        let V = JSON.parse(N);
        return {
          entries: V.entries.slice(x, x + D),
          gameweek: V.gameweek,
          seasonId: V.seasonId,
          totalEntries: V.totalEntries,
        };
      }
    }
    return await d.getWeeklyLeaderboard(s?.activeSeason.id, p, D, x);
  }
  async function w(p, m, D) {
    const x = a,
      b = (D - 1) * x;
    if (D <= 4) {
      const V = localStorage.getItem("monthly_leaderboard_data");
      if (V) {
        let M = JSON.parse(V).find(($) => $.clubId === p);
        if (M) return { ...M, entries: M.entries.slice(b, b + x) };
      }
    }
    return await d.getClubLeaderboard(s?.activeSeason.id, m, p, x, b);
  }
  async function y(p) {
    const m = a,
      D = (p - 1) * m;
    if (p <= 4) {
      const b = localStorage.getItem("season_leaderboard_data");
      if (b) {
        let N = JSON.parse(b);
        return { ...N, entries: N.entries.slice(D, D + m) };
      }
    }
    return await d.getSeasonLeaderboard(s?.activeSeason.id, m, D);
  }
  async function C() {
    return (await v()).entries[0];
  }
  return {
    subscribe: l,
    syncWeeklyLeaderboard: u,
    syncMonthlyLeaderboards: f,
    syncSeasonLeaderboard: g,
    getWeeklyLeaderboard: v,
    getWeeklyLeaderboardPage: I,
    getMonthlyLeaderboard: w,
    getSeasonLeaderboardPage: y,
    getLeadingWeeklyTeam: C,
  };
}
const ma = lr();
function _s(l, t, a) {
  const s = l.slice();
  return (s[17] = t[a][0]), (s[2] = t[a][1]), s;
}
function ps(l, t, a) {
  const s = l.slice();
  return (
    (s[20] = t[a].fixture), (s[21] = t[a].homeTeam), (s[22] = t[a].awayTeam), s
  );
}
function bs(l, t, a) {
  const s = l.slice();
  return (s[25] = t[a]), s;
}
function gs(l) {
  let t,
    a,
    s = l[25] + "",
    d;
  return {
    c() {
      (t = o("option")), (a = h("Gameweek ")), (d = h(s)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var f = i(t);
      (a = _(f, "Gameweek ")), (d = _(f, s)), f.forEach(r), this.h();
    },
    h() {
      (t.__value = l[25]), (t.value = t.__value);
    },
    m(u, f) {
      ve(u, t, f), e(t, a), e(t, d);
    },
    p: gt,
    d(u) {
      u && r(t);
    },
  };
}
function ws(l) {
  let t,
    a,
    s,
    d,
    u,
    f,
    g,
    v,
    I,
    w,
    y,
    C,
    p,
    m,
    D,
    x,
    b,
    N,
    V = ja(Number(l[20].kickOff)) + "",
    P,
    M,
    $,
    H,
    T,
    S = (l[21] ? l[21].friendlyName : "") + "",
    O,
    B,
    K,
    F,
    Y = (l[22] ? l[22].friendlyName : "") + "",
    te,
    Z,
    ee,
    fe,
    ne,
    ce = (l[20].status === 0 ? "-" : l[20].homeGoals) + "",
    J,
    ie,
    R,
    se = (l[20].status === 0 ? "-" : l[20].awayGoals) + "",
    z,
    ue,
    U;
  return (
    (f = new aa({
      props: {
        primaryColour: l[21] ? l[21].primaryColourHex : "",
        secondaryColour: l[21] ? l[21].secondaryColourHex : "",
        thirdColour: l[21] ? l[21].thirdColourHex : "",
      },
    })),
    (m = new aa({
      props: {
        primaryColour: l[22] ? l[22].primaryColourHex : "",
        secondaryColour: l[22] ? l[22].secondaryColourHex : "",
        thirdColour: l[22] ? l[22].thirdColourHex : "",
      },
    })),
    {
      c() {
        (t = o("div")),
          (a = o("div")),
          (s = o("div")),
          (d = o("div")),
          (u = o("a")),
          Je(f.$$.fragment),
          (v = E()),
          (I = o("span")),
          (w = h("v")),
          (y = E()),
          (C = o("div")),
          (p = o("a")),
          Je(m.$$.fragment),
          (x = E()),
          (b = o("div")),
          (N = o("span")),
          (P = h(V)),
          (M = E()),
          ($ = o("div")),
          (H = o("div")),
          (T = o("a")),
          (O = h(S)),
          (K = E()),
          (F = o("a")),
          (te = h(Y)),
          (ee = E()),
          (fe = o("div")),
          (ne = o("span")),
          (J = h(ce)),
          (ie = E()),
          (R = o("span")),
          (z = h(se)),
          this.h();
      },
      l(j) {
        t = n(j, "DIV", { class: !0 });
        var A = i(t);
        a = n(A, "DIV", { class: !0 });
        var L = i(a);
        s = n(L, "DIV", { class: !0 });
        var G = i(s);
        d = n(G, "DIV", { class: !0 });
        var ae = i(d);
        u = n(ae, "A", { href: !0 });
        var Ve = i(u);
        Ye(f.$$.fragment, Ve),
          Ve.forEach(r),
          ae.forEach(r),
          (v = k(G)),
          (I = n(G, "SPAN", { class: !0 }));
        var ke = i(I);
        (w = _(ke, "v")),
          ke.forEach(r),
          (y = k(G)),
          (C = n(G, "DIV", { class: !0 }));
        var re = i(C);
        p = n(re, "A", { href: !0 });
        var ye = i(p);
        Ye(m.$$.fragment, ye),
          ye.forEach(r),
          re.forEach(r),
          G.forEach(r),
          (x = k(L)),
          (b = n(L, "DIV", { class: !0 }));
        var le = i(b);
        N = n(le, "SPAN", { class: !0 });
        var be = i(N);
        (P = _(be, V)),
          be.forEach(r),
          le.forEach(r),
          L.forEach(r),
          (M = k(A)),
          ($ = n(A, "DIV", { class: !0 }));
        var q = i($);
        H = n(q, "DIV", { class: !0 });
        var oe = i(H);
        T = n(oe, "A", { href: !0 });
        var X = i(T);
        (O = _(X, S)),
          X.forEach(r),
          (K = k(oe)),
          (F = n(oe, "A", { href: !0 }));
        var Ie = i(F);
        (te = _(Ie, Y)),
          Ie.forEach(r),
          oe.forEach(r),
          (ee = k(q)),
          (fe = n(q, "DIV", { class: !0 }));
        var De = i(fe);
        ne = n(De, "SPAN", {});
        var Ce = i(ne);
        (J = _(Ce, ce)), Ce.forEach(r), (ie = k(De)), (R = n(De, "SPAN", {}));
        var Se = i(R);
        (z = _(Se, se)),
          Se.forEach(r),
          De.forEach(r),
          q.forEach(r),
          A.forEach(r),
          this.h();
      },
      h() {
        c(u, "href", (g = `/club?id=${l[20].homeTeamId}`)),
          c(d, "class", "w-10 items-center justify-center"),
          c(I, "class", "font-bold text-lg"),
          c(p, "href", (D = `/club?id=${l[20].awayTeamId}`)),
          c(C, "class", "w-10 items-center justify-center"),
          c(s, "class", "flex w-1/2 space-x-4 justify-center"),
          c(N, "class", "text-sm md:text-lg ml-4 md:ml-0 text-left"),
          c(b, "class", "flex w-1/2 lg:justify-center"),
          c(a, "class", "flex items-center w-1/2 ml-4"),
          c(T, "href", (B = `/club?id=${l[20].homeTeamId}`)),
          c(F, "href", (Z = `/club?id=${l[20].awayTeamId}`)),
          c(
            H,
            "class",
            "flex flex-col min-w-[200px] lg:min-w-[120px] lg:min-w-[200px] text-xs md:text-base"
          ),
          c(
            fe,
            "class",
            "flex flex-col min-w-[200px] lg:min-w-[120px] lg:min-w-[200px] text-xs md:text-base"
          ),
          c($, "class", "flex items-center space-x-10 w-1/2 lg:justify-center"),
          c(
            t,
            "class",
            (ue = `flex items-center justify-between py-2 border-b border-gray-700  ${
              l[20].status === 0 ? "text-gray-400" : "text-white"
            }`)
          );
      },
      m(j, A) {
        ve(j, t, A),
          e(t, a),
          e(a, s),
          e(s, d),
          e(d, u),
          Re(f, u, null),
          e(s, v),
          e(s, I),
          e(I, w),
          e(s, y),
          e(s, C),
          e(C, p),
          Re(m, p, null),
          e(a, x),
          e(a, b),
          e(b, N),
          e(N, P),
          e(t, M),
          e(t, $),
          e($, H),
          e(H, T),
          e(T, O),
          e(H, K),
          e(H, F),
          e(F, te),
          e($, ee),
          e($, fe),
          e(fe, ne),
          e(ne, J),
          e(fe, ie),
          e(fe, R),
          e(R, z),
          (U = !0);
      },
      p(j, A) {
        const L = {};
        A & 2 && (L.primaryColour = j[21] ? j[21].primaryColourHex : ""),
          A & 2 && (L.secondaryColour = j[21] ? j[21].secondaryColourHex : ""),
          A & 2 && (L.thirdColour = j[21] ? j[21].thirdColourHex : ""),
          f.$set(L),
          (!U || (A & 2 && g !== (g = `/club?id=${j[20].homeTeamId}`))) &&
            c(u, "href", g);
        const G = {};
        A & 2 && (G.primaryColour = j[22] ? j[22].primaryColourHex : ""),
          A & 2 && (G.secondaryColour = j[22] ? j[22].secondaryColourHex : ""),
          A & 2 && (G.thirdColour = j[22] ? j[22].thirdColourHex : ""),
          m.$set(G),
          (!U || (A & 2 && D !== (D = `/club?id=${j[20].awayTeamId}`))) &&
            c(p, "href", D),
          (!U || A & 2) &&
            V !== (V = ja(Number(j[20].kickOff)) + "") &&
            Q(P, V),
          (!U || A & 2) &&
            S !== (S = (j[21] ? j[21].friendlyName : "") + "") &&
            Q(O, S),
          (!U || (A & 2 && B !== (B = `/club?id=${j[20].homeTeamId}`))) &&
            c(T, "href", B),
          (!U || A & 2) &&
            Y !== (Y = (j[22] ? j[22].friendlyName : "") + "") &&
            Q(te, Y),
          (!U || (A & 2 && Z !== (Z = `/club?id=${j[20].awayTeamId}`))) &&
            c(F, "href", Z),
          (!U || A & 2) &&
            ce !== (ce = (j[20].status === 0 ? "-" : j[20].homeGoals) + "") &&
            Q(J, ce),
          (!U || A & 2) &&
            se !== (se = (j[20].status === 0 ? "-" : j[20].awayGoals) + "") &&
            Q(z, se),
          (!U ||
            (A & 2 &&
              ue !==
                (ue = `flex items-center justify-between py-2 border-b border-gray-700  ${
                  j[20].status === 0 ? "text-gray-400" : "text-white"
                }`))) &&
            c(t, "class", ue);
      },
      i(j) {
        U || (me(f.$$.fragment, j), me(m.$$.fragment, j), (U = !0));
      },
      o(j) {
        pe(f.$$.fragment, j), pe(m.$$.fragment, j), (U = !1);
      },
      d(j) {
        j && r(t), qe(f), qe(m);
      },
    }
  );
}
function ys(l) {
  let t,
    a,
    s,
    d = l[17] + "",
    u,
    f,
    g,
    v,
    I = l[2],
    w = [];
  for (let C = 0; C < I.length; C += 1) w[C] = ws(ps(l, I, C));
  const y = (C) =>
    pe(w[C], 1, 1, () => {
      w[C] = null;
    });
  return {
    c() {
      (t = o("div")), (a = o("div")), (s = o("h2")), (u = h(d)), (f = E());
      for (let C = 0; C < w.length; C += 1) w[C].c();
      (g = E()), this.h();
    },
    l(C) {
      t = n(C, "DIV", {});
      var p = i(t);
      a = n(p, "DIV", { class: !0 });
      var m = i(a);
      s = n(m, "H2", { class: !0 });
      var D = i(s);
      (u = _(D, d)), D.forEach(r), m.forEach(r), (f = k(p));
      for (let x = 0; x < w.length; x += 1) w[x].l(p);
      (g = k(p)), p.forEach(r), this.h();
    },
    h() {
      c(s, "class", "date-header ml-4 text-xs md:text-base"),
        c(
          a,
          "class",
          "flex items-center justify-between border border-gray-700 py-4 bg-light-gray"
        );
    },
    m(C, p) {
      ve(C, t, p), e(t, a), e(a, s), e(s, u), e(t, f);
      for (let m = 0; m < w.length; m += 1) w[m] && w[m].m(t, null);
      e(t, g), (v = !0);
    },
    p(C, p) {
      if (((!v || p & 2) && d !== (d = C[17] + "") && Q(u, d), p & 2)) {
        I = C[2];
        let m;
        for (m = 0; m < I.length; m += 1) {
          const D = ps(C, I, m);
          w[m]
            ? (w[m].p(D, p), me(w[m], 1))
            : ((w[m] = ws(D)), w[m].c(), me(w[m], 1), w[m].m(t, g));
        }
        for (zt(), m = I.length; m < w.length; m += 1) y(m);
        Yt();
      }
    },
    i(C) {
      if (!v) {
        for (let p = 0; p < I.length; p += 1) me(w[p]);
        v = !0;
      }
    },
    o(C) {
      w = w.filter(Boolean);
      for (let p = 0; p < w.length; p += 1) pe(w[p]);
      v = !1;
    },
    d(C) {
      C && r(t), cl(w, C);
    },
  };
}
function ar(l) {
  let t,
    a,
    s,
    d,
    u,
    f,
    g,
    v,
    I,
    w,
    y,
    C,
    p,
    m,
    D,
    x,
    b,
    N,
    V = l[3],
    P = [];
  for (let T = 0; T < V.length; T += 1) P[T] = gs(bs(l, V, T));
  let M = Object.entries(l[1]),
    $ = [];
  for (let T = 0; T < M.length; T += 1) $[T] = ys(_s(l, M, T));
  const H = (T) =>
    pe($[T], 1, 1, () => {
      $[T] = null;
    });
  return {
    c() {
      (t = o("div")),
        (a = o("div")),
        (s = o("div")),
        (d = o("div")),
        (u = o("button")),
        (f = h("<")),
        (v = E()),
        (I = o("select"));
      for (let T = 0; T < P.length; T += 1) P[T].c();
      (w = E()), (y = o("button")), (C = h(">")), (m = E()), (D = o("div"));
      for (let T = 0; T < $.length; T += 1) $[T].c();
      this.h();
    },
    l(T) {
      t = n(T, "DIV", { class: !0 });
      var S = i(t);
      a = n(S, "DIV", { class: !0 });
      var O = i(a);
      s = n(O, "DIV", { class: !0 });
      var B = i(s);
      d = n(B, "DIV", { class: !0 });
      var K = i(d);
      u = n(K, "BUTTON", { class: !0 });
      var F = i(u);
      (f = _(F, "<")),
        F.forEach(r),
        (v = k(K)),
        (I = n(K, "SELECT", { class: !0 }));
      var Y = i(I);
      for (let ee = 0; ee < P.length; ee += 1) P[ee].l(Y);
      Y.forEach(r), (w = k(K)), (y = n(K, "BUTTON", { class: !0 }));
      var te = i(y);
      (C = _(te, ">")),
        te.forEach(r),
        K.forEach(r),
        B.forEach(r),
        (m = k(O)),
        (D = n(O, "DIV", {}));
      var Z = i(D);
      for (let ee = 0; ee < $.length; ee += 1) $[ee].l(Z);
      Z.forEach(r), O.forEach(r), S.forEach(r), this.h();
    },
    h() {
      c(
        u,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (u.disabled = g = l[0] === 1),
        c(
          I,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        l[0] === void 0 && ta(() => l[8].call(I)),
        c(
          y,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (y.disabled = p = l[0] === 38),
        c(d, "class", "flex items-center space-x-2 ml-4"),
        c(s, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        c(a, "class", "flex flex-col space-y-4"),
        c(t, "class", "container-fluid mt-4 mb-4");
    },
    m(T, S) {
      ve(T, t, S),
        e(t, a),
        e(a, s),
        e(s, d),
        e(d, u),
        e(u, f),
        e(d, v),
        e(d, I);
      for (let O = 0; O < P.length; O += 1) P[O] && P[O].m(I, null);
      bt(I, l[0], !0), e(d, w), e(d, y), e(y, C), e(a, m), e(a, D);
      for (let O = 0; O < $.length; O += 1) $[O] && $[O].m(D, null);
      (x = !0),
        b ||
          ((N = [
            we(u, "click", l[7]),
            we(I, "change", l[8]),
            we(y, "click", l[9]),
          ]),
          (b = !0));
    },
    p(T, [S]) {
      if (
        ((!x || (S & 9 && g !== (g = T[0] === 1))) && (u.disabled = g), S & 8)
      ) {
        V = T[3];
        let O;
        for (O = 0; O < V.length; O += 1) {
          const B = bs(T, V, O);
          P[O] ? P[O].p(B, S) : ((P[O] = gs(B)), P[O].c(), P[O].m(I, null));
        }
        for (; O < P.length; O += 1) P[O].d(1);
        P.length = V.length;
      }
      if (
        (S & 9 && bt(I, T[0]),
        (!x || (S & 9 && p !== (p = T[0] === 38))) && (y.disabled = p),
        S & 2)
      ) {
        M = Object.entries(T[1]);
        let O;
        for (O = 0; O < M.length; O += 1) {
          const B = _s(T, M, O);
          $[O]
            ? ($[O].p(B, S), me($[O], 1))
            : (($[O] = ys(B)), $[O].c(), me($[O], 1), $[O].m(D, null));
        }
        for (zt(), O = M.length; O < $.length; O += 1) H(O);
        Yt();
      }
    },
    i(T) {
      if (!x) {
        for (let S = 0; S < M.length; S += 1) me($[S]);
        x = !0;
      }
    },
    o(T) {
      $ = $.filter(Boolean);
      for (let S = 0; S < $.length; S += 1) pe($[S]);
      x = !1;
    },
    d(T) {
      T && r(t), cl(P, T), cl($, T), (b = !1), xl(N);
    },
  };
}
function sr(l, t, a) {
  let s,
    d,
    u = [],
    f = [],
    g = [],
    v,
    I,
    w,
    y,
    C = 1,
    p = Array.from({ length: 38 }, (V, P) => P + 1);
  $a(async () => {
    try {
      await Kt.sync(),
        await Fl.sync(),
        await Qt.sync(),
        (I = Kt.subscribe((V) => {
          u = V;
        })),
        (w = Fl.subscribe((V) => {
          a(2, (f = V)),
            a(
              5,
              (g = f.map((P) => ({
                fixture: P,
                homeTeam: D(P.homeTeamId),
                awayTeam: D(P.awayTeamId),
              })))
            );
        })),
        (y = Qt.subscribe((V) => {
          v = V;
        }));
    } catch (V) {
      la.show("Error fetching fixtures data.", "error"),
        console.error("Error fetching fixtures data:", V);
    } finally {
    }
  }),
    Ga(() => {
      I?.(), w?.(), y?.();
    });
  const m = (V) => {
    a(0, (C = Math.max(1, Math.min(38, C + V))));
  };
  function D(V) {
    return u.find((P) => P.id === V);
  }
  const x = () => m(-1);
  function b() {
    (C = ea(this)), a(0, C), a(3, p);
  }
  const N = () => m(1);
  return (
    (l.$$.update = () => {
      l.$$.dirty & 33 &&
        a(6, (s = g.filter(({ fixture: V }) => V.gameweek === C))),
        l.$$.dirty & 64 &&
          a(
            1,
            (d = s.reduce((V, P) => {
              const M = new Date(Number(P.fixture.kickOff) / 1e6),
                H = new Intl.DateTimeFormat("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(M);
              return V[H] || (V[H] = []), V[H].push(P), V;
            }, {}))
          );
    }),
    [C, d, f, p, m, g, s, x, b, N]
  );
}
class rr extends va {
  constructor(t) {
    super(), ha(this, t, sr, ar, _a, {});
  }
}
function Es(l) {
  let t,
    a,
    s,
    d,
    u,
    f,
    g,
    v,
    I,
    w,
    y,
    C,
    p,
    m,
    D =
      (l[2].player.firstName != ""
        ? l[2].player.firstName.charAt(0) + "."
        : "") + l[2].player.lastName,
    x,
    b,
    N,
    V,
    P,
    M = l[3]?.friendlyName + "",
    $,
    H,
    T,
    S,
    O,
    B,
    K,
    F = l[4]?.friendlyName + "",
    Y,
    te,
    Z,
    ee,
    fe,
    ne,
    ce,
    J = l[2].gameweek + "",
    ie,
    R,
    se,
    z,
    ue,
    U,
    j,
    A,
    L,
    G,
    ae,
    Ve,
    ke,
    re,
    ye,
    le,
    be,
    q,
    oe = (l[2].appearance > 0 ? l[2].appearance : "-") + "",
    X,
    Ie,
    De,
    Ce = (l[2].appearance > 0 ? l[2].appearance * 5 : "-") + "",
    Se,
    Fe,
    Te,
    ge,
    st,
    wt,
    Le,
    xt = l[2].goals + "",
    rt,
    yt,
    Be,
    ot = l[2].goalPoints + "",
    Vt,
    $t,
    Pe,
    nt,
    Bl,
    it,
    Et,
    dl = l[2].assists + "",
    Vl,
    Xt,
    $e,
    Zt = l[2].assistPoints + "",
    Ot,
    Ul,
    ct,
    Lt,
    el,
    Wl,
    tl,
    ll = l[2].yellowCards + "",
    Ht,
    Jl,
    al,
    dt = l[2].yellowCards * -5 + "",
    fl,
    Rl,
    et,
    sl,
    At,
    ql,
    Ke,
    ft = l[2].redCards + "",
    Tl,
    Nl,
    rl,
    ul = (l[2].redCards > 0 ? -20 : 0) + "",
    Tt,
    Kl,
    Nt,
    ml,
    Ue,
    Qe,
    ze,
    Gt,
    tt,
    vl = l[2].ownGoals + "",
    hl,
    Pl,
    ol,
    nl = l[2].ownGoals * -10 + "",
    Pt,
    Ct,
    ut,
    Mt,
    Cl,
    zl,
    mt,
    vt = l[2].missedPenalties + "",
    Sl,
    $l,
    jt,
    _l = l[2].missedPenalties * -15 + "",
    He,
    Ae,
    xe,
    St,
    pl,
    sa,
    Ol,
    We,
    Ll = l[2].points + "",
    bl,
    lt,
    Ne,
    Ft,
    ht,
    ra,
    W,
    de,
    at = l[2].bonusPoints + "",
    Oe,
    _t,
    gl,
    Bt,
    wl,
    il,
    oa,
    yl,
    Hl = l[2].totalPoints + "",
    Ut,
    na,
    El,
    Wt,
    pt,
    Ee,
    ia,
    pa;
  var kt = ms(l[2].player.nationality);
  function ba(je) {
    return { props: { class: "h-20 w-20" } };
  }
  kt && (y = ds(kt, ba())),
    (V = new aa({
      props: {
        className: "w-5 h-5 mr-2",
        primaryColour: l[3]?.primaryColourHex,
        secondaryColour: l[3]?.secondaryColourHex,
        thirdColour: l[3]?.thirdColourHex,
      },
    })),
    (B = new aa({
      props: {
        className: "w-5 h-5 mx-1",
        primaryColour: l[4]?.primaryColourHex,
        secondaryColour: l[4]?.secondaryColourHex,
        thirdColour: l[4]?.thirdColourHex,
      },
    }));
  let Ge = l[2].player.position < 2 && ks(l),
    Me = l[2].player.position === 0 && Is(l);
  return {
    c() {
      (t = o("div")),
        (a = o("div")),
        (s = o("div")),
        (d = o("h3")),
        (u = h("Player Detail")),
        (f = E()),
        (g = o("button")),
        (v = h("×")),
        (I = E()),
        (w = o("div")),
        y && Je(y.$$.fragment),
        (C = E()),
        (p = o("div")),
        (m = o("h3")),
        (x = h(D)),
        (b = E()),
        (N = o("p")),
        Je(V.$$.fragment),
        (P = E()),
        ($ = h(M)),
        (H = E()),
        (T = o("div")),
        (S = o("p")),
        (O = h("vs ")),
        Je(B.$$.fragment),
        (K = E()),
        (Y = h(F)),
        (te = E()),
        (Z = o("p")),
        (ee = h(l[5])),
        (fe = E()),
        (ne = o("p")),
        (ce = h("Gameweek ")),
        (ie = h(J)),
        (R = E()),
        (se = o("div")),
        (z = o("div")),
        (ue = o("div")),
        (U = h("Category")),
        (j = E()),
        (A = o("div")),
        (L = h("Detail")),
        (G = E()),
        (ae = o("div")),
        (Ve = h("Points")),
        (ke = E()),
        (re = o("div")),
        (ye = o("div")),
        (le = h("Appearance")),
        (be = E()),
        (q = o("div")),
        (X = h(oe)),
        (Ie = E()),
        (De = o("div")),
        (Se = h(Ce)),
        (Fe = E()),
        (Te = o("div")),
        (ge = o("div")),
        (st = h("Goals")),
        (wt = E()),
        (Le = o("div")),
        (rt = h(xt)),
        (yt = E()),
        (Be = o("div")),
        (Vt = h(ot)),
        ($t = E()),
        (Pe = o("div")),
        (nt = o("div")),
        (Bl = h("Assists")),
        (it = E()),
        (Et = o("div")),
        (Vl = h(dl)),
        (Xt = E()),
        ($e = o("div")),
        (Ot = h(Zt)),
        (Ul = E()),
        (ct = o("div")),
        (Lt = o("div")),
        (el = h("Yellow Card")),
        (Wl = E()),
        (tl = o("div")),
        (Ht = h(ll)),
        (Jl = E()),
        (al = o("div")),
        (fl = h(dt)),
        (Rl = E()),
        (et = o("div")),
        (sl = o("div")),
        (At = h("Red Card")),
        (ql = E()),
        (Ke = o("div")),
        (Tl = h(ft)),
        (Nl = E()),
        (rl = o("div")),
        (Tt = h(ul)),
        (Kl = E()),
        Ge && Ge.c(),
        (Nt = E()),
        Me && Me.c(),
        (ml = E()),
        (Ue = o("div")),
        (Qe = o("div")),
        (ze = h("Own Goal")),
        (Gt = E()),
        (tt = o("div")),
        (hl = h(vl)),
        (Pl = E()),
        (ol = o("div")),
        (Pt = h(nl)),
        (Ct = E()),
        (ut = o("div")),
        (Mt = o("div")),
        (Cl = h("Penalty Misses")),
        (zl = E()),
        (mt = o("div")),
        (Sl = h(vt)),
        ($l = E()),
        (jt = o("div")),
        (He = h(_l)),
        (Ae = E()),
        (xe = o("div")),
        (St = o("div")),
        (pl = o("span")),
        (sa = h("Player Points:")),
        (Ol = E()),
        (We = o("span")),
        (bl = h(Ll)),
        (lt = E()),
        (Ne = o("div")),
        (Ft = o("div")),
        (ht = o("span")),
        (ra = h("Bonus Points:")),
        (W = E()),
        (de = o("span")),
        (Oe = h(at)),
        (_t = E()),
        (gl = o("div")),
        (Bt = o("div")),
        (wl = o("span")),
        (il = h("Total Points:")),
        (oa = E()),
        (yl = o("span")),
        (Ut = h(Hl)),
        (na = E()),
        (El = o("div")),
        (Wt = o("button")),
        (pt = h("Close")),
        this.h();
    },
    l(je) {
      t = n(je, "DIV", { class: !0 });
      var _e = i(t);
      a = n(_e, "DIV", { class: !0 });
      var he = i(a);
      s = n(he, "DIV", { class: !0 });
      var Xe = i(s);
      d = n(Xe, "H3", { class: !0 });
      var Al = i(d);
      (u = _(Al, "Player Detail")),
        Al.forEach(r),
        (f = k(Xe)),
        (g = n(Xe, "BUTTON", { class: !0 }));
      var ga = i(g);
      (v = _(ga, "×")),
        ga.forEach(r),
        Xe.forEach(r),
        (I = k(he)),
        (w = n(he, "DIV", { class: !0 }));
      var Yl = i(w);
      y && Ye(y.$$.fragment, Yl),
        (C = k(Yl)),
        (p = n(Yl, "DIV", { class: !0 }));
      var Ql = i(p);
      m = n(Ql, "H3", { class: !0 });
      var wa = i(m);
      (x = _(wa, D)),
        wa.forEach(r),
        (b = k(Ql)),
        (N = n(Ql, "P", { class: !0 }));
      var Xl = i(N);
      Ye(V.$$.fragment, Xl),
        (P = k(Xl)),
        ($ = _(Xl, M)),
        Xl.forEach(r),
        Ql.forEach(r),
        Yl.forEach(r),
        (H = k(he)),
        (T = n(he, "DIV", { class: !0 }));
      var It = i(T);
      S = n(It, "P", { class: !0 });
      var Gl = i(S);
      (O = _(Gl, "vs ")),
        Ye(B.$$.fragment, Gl),
        (K = k(Gl)),
        (Y = _(Gl, F)),
        Gl.forEach(r),
        (te = k(It)),
        (Z = n(It, "P", { class: !0 }));
      var ya = i(Z);
      (ee = _(ya, l[5])),
        ya.forEach(r),
        (fe = k(It)),
        (ne = n(It, "P", { class: !0 }));
      var Dt = i(ne);
      (ce = _(Dt, "Gameweek ")),
        (ie = _(Dt, J)),
        Dt.forEach(r),
        It.forEach(r),
        (R = k(he)),
        (se = n(he, "DIV", { class: !0 }));
      var Ea = i(se);
      z = n(Ea, "DIV", { class: !0 });
      var kl = i(z);
      ue = n(kl, "DIV", { class: !0 });
      var ka = i(ue);
      (U = _(ka, "Category")),
        ka.forEach(r),
        (j = k(kl)),
        (A = n(kl, "DIV", { class: !0 }));
      var Zl = i(A);
      (L = _(Zl, "Detail")),
        Zl.forEach(r),
        (G = k(kl)),
        (ae = n(kl, "DIV", { class: !0 }));
      var Il = i(ae);
      (Ve = _(Il, "Points")),
        Il.forEach(r),
        kl.forEach(r),
        Ea.forEach(r),
        (ke = k(he)),
        (re = n(he, "DIV", { class: !0 }));
      var Jt = i(re);
      ye = n(Jt, "DIV", { class: !0 });
      var Ia = i(ye);
      (le = _(Ia, "Appearance")),
        Ia.forEach(r),
        (be = k(Jt)),
        (q = n(Jt, "DIV", { class: !0 }));
      var Da = i(q);
      (X = _(Da, oe)),
        Da.forEach(r),
        (Ie = k(Jt)),
        (De = n(Jt, "DIV", { class: !0 }));
      var xa = i(De);
      (Se = _(xa, Ce)),
        xa.forEach(r),
        Jt.forEach(r),
        (Fe = k(he)),
        (Te = n(he, "DIV", { class: !0 }));
      var Rt = i(Te);
      ge = n(Rt, "DIV", { class: !0 });
      var qt = i(ge);
      (st = _(qt, "Goals")),
        qt.forEach(r),
        (wt = k(Rt)),
        (Le = n(Rt, "DIV", { class: !0 }));
      var Va = i(Le);
      (rt = _(Va, xt)),
        Va.forEach(r),
        (yt = k(Rt)),
        (Be = n(Rt, "DIV", { class: !0 }));
      var Ta = i(Be);
      (Vt = _(Ta, ot)),
        Ta.forEach(r),
        Rt.forEach(r),
        ($t = k(he)),
        (Pe = n(he, "DIV", { class: !0 }));
      var Dl = i(Pe);
      nt = n(Dl, "DIV", { class: !0 });
      var Na = i(nt);
      (Bl = _(Na, "Assists")),
        Na.forEach(r),
        (it = k(Dl)),
        (Et = n(Dl, "DIV", { class: !0 }));
      var Pa = i(Et);
      (Vl = _(Pa, dl)),
        Pa.forEach(r),
        (Xt = k(Dl)),
        ($e = n(Dl, "DIV", { class: !0 }));
      var Ca = i($e);
      (Ot = _(Ca, Zt)),
        Ca.forEach(r),
        Dl.forEach(r),
        (Ul = k(he)),
        (ct = n(he, "DIV", { class: !0 }));
      var ca = i(ct);
      Lt = n(ca, "DIV", { class: !0 });
      var Fa = i(Lt);
      (el = _(Fa, "Yellow Card")),
        Fa.forEach(r),
        (Wl = k(ca)),
        (tl = n(ca, "DIV", { class: !0 }));
      var Ba = i(tl);
      (Ht = _(Ba, ll)),
        Ba.forEach(r),
        (Jl = k(ca)),
        (al = n(ca, "DIV", { class: !0 }));
      var Ua = i(al);
      (fl = _(Ua, dt)),
        Ua.forEach(r),
        ca.forEach(r),
        (Rl = k(he)),
        (et = n(he, "DIV", { class: !0 }));
      var da = i(et);
      sl = n(da, "DIV", { class: !0 });
      var Wa = i(sl);
      (At = _(Wa, "Red Card")),
        Wa.forEach(r),
        (ql = k(da)),
        (Ke = n(da, "DIV", { class: !0 }));
      var Ja = i(Ke);
      (Tl = _(Ja, ft)),
        Ja.forEach(r),
        (Nl = k(da)),
        (rl = n(da, "DIV", { class: !0 }));
      var Ra = i(rl);
      (Tt = _(Ra, ul)),
        Ra.forEach(r),
        da.forEach(r),
        (Kl = k(he)),
        Ge && Ge.l(he),
        (Nt = k(he)),
        Me && Me.l(he),
        (ml = k(he)),
        (Ue = n(he, "DIV", { class: !0 }));
      var fa = i(Ue);
      Qe = n(fa, "DIV", { class: !0 });
      var qa = i(Qe);
      (ze = _(qa, "Own Goal")),
        qa.forEach(r),
        (Gt = k(fa)),
        (tt = n(fa, "DIV", { class: !0 }));
      var Ka = i(tt);
      (hl = _(Ka, vl)),
        Ka.forEach(r),
        (Pl = k(fa)),
        (ol = n(fa, "DIV", { class: !0 }));
      var za = i(ol);
      (Pt = _(za, nl)),
        za.forEach(r),
        fa.forEach(r),
        (Ct = k(he)),
        (ut = n(he, "DIV", { class: !0 }));
      var ua = i(ut);
      Mt = n(ua, "DIV", { class: !0 });
      var Ya = i(Mt);
      (Cl = _(Ya, "Penalty Misses")),
        Ya.forEach(r),
        (zl = k(ua)),
        (mt = n(ua, "DIV", { class: !0 }));
      var Qa = i(mt);
      (Sl = _(Qa, vt)),
        Qa.forEach(r),
        ($l = k(ua)),
        (jt = n(ua, "DIV", { class: !0 }));
      var Xa = i(jt);
      (He = _(Xa, _l)),
        Xa.forEach(r),
        ua.forEach(r),
        (Ae = k(he)),
        (xe = n(he, "DIV", { class: !0 }));
      var Za = i(xe);
      St = n(Za, "DIV", { class: !0 });
      var Oa = i(St);
      pl = n(Oa, "SPAN", { class: !0 });
      var es = i(pl);
      (sa = _(es, "Player Points:")),
        es.forEach(r),
        (Ol = k(Oa)),
        (We = n(Oa, "SPAN", { class: !0 }));
      var ts = i(We);
      (bl = _(ts, Ll)),
        ts.forEach(r),
        Oa.forEach(r),
        Za.forEach(r),
        (lt = k(he)),
        (Ne = n(he, "DIV", { class: !0 }));
      var ls = i(Ne);
      Ft = n(ls, "DIV", { class: !0 });
      var La = i(Ft);
      ht = n(La, "SPAN", { class: !0 });
      var as = i(ht);
      (ra = _(as, "Bonus Points:")),
        as.forEach(r),
        (W = k(La)),
        (de = n(La, "SPAN", { class: !0 }));
      var ss = i(de);
      (Oe = _(ss, at)),
        ss.forEach(r),
        La.forEach(r),
        ls.forEach(r),
        (_t = k(he)),
        (gl = n(he, "DIV", { class: !0 }));
      var rs = i(gl);
      Bt = n(rs, "DIV", { class: !0 });
      var Ha = i(Bt);
      wl = n(Ha, "SPAN", { class: !0 });
      var os = i(wl);
      (il = _(os, "Total Points:")),
        os.forEach(r),
        (oa = k(Ha)),
        (yl = n(Ha, "SPAN", { class: !0 }));
      var ns = i(yl);
      (Ut = _(ns, Hl)),
        ns.forEach(r),
        Ha.forEach(r),
        rs.forEach(r),
        (na = k(he)),
        (El = n(he, "DIV", { class: !0 }));
      var is = i(El);
      Wt = n(is, "BUTTON", { class: !0 });
      var cs = i(Wt);
      (pt = _(cs, "Close")),
        cs.forEach(r),
        is.forEach(r),
        he.forEach(r),
        _e.forEach(r),
        this.h();
    },
    h() {
      c(d, "class", "text-xl font-semibold text-white"),
        c(g, "class", "text-white text-3xl"),
        c(s, "class", "flex justify-between items-center"),
        c(m, "class", "text-2xl mb-2"),
        c(N, "class", "text-sm text-gray-400 flex items-center"),
        c(p, "class", "ml-4"),
        c(w, "class", "flex justify-start items-center w-full"),
        c(
          S,
          "class",
          "flex w-1/3 items-center border-r border-gray-600 justify-center pt-2"
        ),
        c(Z, "class", "flex w-1/3 justify-center items-center pt-2"),
        c(
          ne,
          "class",
          "flex w-1/3 items-center justify-center border-l border-gray-600 pt-2"
        ),
        c(
          T,
          "class",
          "flex justify-start items-center w-full border-t border-gray-600 text-sm"
        ),
        c(ue, "class", "text-sm font-medium w-3/6"),
        c(A, "class", "text-sm font-medium w-2/6"),
        c(ae, "class", "text-sm font-medium w-1/6"),
        c(
          z,
          "class",
          "flex justify-between items-center mt-4 bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(se, "class", "mt-2"),
        c(ye, "class", "text-sm font-medium w-3/6"),
        c(q, "class", "text-sm font-medium w-2/6"),
        c(De, "class", "text-sm font-medium w-1/6"),
        c(re, "class", "flex justify-between items-center p-2"),
        c(ge, "class", "text-sm font-medium w-3/6"),
        c(Le, "class", "text-sm font-medium w-2/6"),
        c(Be, "class", "text-sm font-medium w-1/6"),
        c(Te, "class", "flex justify-between items-center p-2"),
        c(nt, "class", "text-sm font-medium w-3/6"),
        c(Et, "class", "text-sm font-medium w-2/6"),
        c($e, "class", "text-sm font-medium w-1/6"),
        c(Pe, "class", "flex justify-between items-center p-2"),
        c(Lt, "class", "text-sm font-medium w-3/6"),
        c(tl, "class", "text-sm font-medium w-2/6"),
        c(al, "class", "text-sm font-medium w-1/6"),
        c(ct, "class", "flex justify-between items-center p-2"),
        c(sl, "class", "text-sm font-medium w-3/6"),
        c(Ke, "class", "text-sm font-medium w-2/6"),
        c(rl, "class", "text-sm font-medium w-1/6"),
        c(et, "class", "flex justify-between items-center p-2"),
        c(Qe, "class", "text-sm font-medium w-3/6"),
        c(tt, "class", "text-sm font-medium w-2/6"),
        c(ol, "class", "text-sm font-medium w-1/6"),
        c(Ue, "class", "flex justify-between items-center p-2"),
        c(Mt, "class", "text-sm font-medium w-3/6"),
        c(mt, "class", "text-sm font-medium w-2/6"),
        c(jt, "class", "text-sm font-medium w-1/6"),
        c(ut, "class", "flex justify-between items-center p-2"),
        c(pl, "class", "text-sm font-bold w-5/6"),
        c(We, "class", "text-sm font-bold w-1/6"),
        c(
          St,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(xe, "class", "mt-2"),
        c(ht, "class", "text-sm font-bold w-5/6"),
        c(de, "class", "text-sm font-bold w-1/6"),
        c(
          Ft,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(Ne, "class", "mt-2"),
        c(wl, "class", "text-sm font-bold w-5/6"),
        c(yl, "class", "text-sm font-bold w-1/6"),
        c(
          Bt,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(gl, "class", "mt-2"),
        c(Wt, "class", "fpl-purple-btn px-4 py-2 mt-2 rounded-md"),
        c(El, "class", "mt-2 flex justify-end"),
        c(
          a,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"
        ),
        c(
          t,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop"
        );
    },
    m(je, _e) {
      ve(je, t, _e),
        e(t, a),
        e(a, s),
        e(s, d),
        e(d, u),
        e(s, f),
        e(s, g),
        e(g, v),
        e(a, I),
        e(a, w),
        y && Re(y, w, null),
        e(w, C),
        e(w, p),
        e(p, m),
        e(m, x),
        e(p, b),
        e(p, N),
        Re(V, N, null),
        e(N, P),
        e(N, $),
        e(a, H),
        e(a, T),
        e(T, S),
        e(S, O),
        Re(B, S, null),
        e(S, K),
        e(S, Y),
        e(T, te),
        e(T, Z),
        e(Z, ee),
        e(T, fe),
        e(T, ne),
        e(ne, ce),
        e(ne, ie),
        e(a, R),
        e(a, se),
        e(se, z),
        e(z, ue),
        e(ue, U),
        e(z, j),
        e(z, A),
        e(A, L),
        e(z, G),
        e(z, ae),
        e(ae, Ve),
        e(a, ke),
        e(a, re),
        e(re, ye),
        e(ye, le),
        e(re, be),
        e(re, q),
        e(q, X),
        e(re, Ie),
        e(re, De),
        e(De, Se),
        e(a, Fe),
        e(a, Te),
        e(Te, ge),
        e(ge, st),
        e(Te, wt),
        e(Te, Le),
        e(Le, rt),
        e(Te, yt),
        e(Te, Be),
        e(Be, Vt),
        e(a, $t),
        e(a, Pe),
        e(Pe, nt),
        e(nt, Bl),
        e(Pe, it),
        e(Pe, Et),
        e(Et, Vl),
        e(Pe, Xt),
        e(Pe, $e),
        e($e, Ot),
        e(a, Ul),
        e(a, ct),
        e(ct, Lt),
        e(Lt, el),
        e(ct, Wl),
        e(ct, tl),
        e(tl, Ht),
        e(ct, Jl),
        e(ct, al),
        e(al, fl),
        e(a, Rl),
        e(a, et),
        e(et, sl),
        e(sl, At),
        e(et, ql),
        e(et, Ke),
        e(Ke, Tl),
        e(et, Nl),
        e(et, rl),
        e(rl, Tt),
        e(a, Kl),
        Ge && Ge.m(a, null),
        e(a, Nt),
        Me && Me.m(a, null),
        e(a, ml),
        e(a, Ue),
        e(Ue, Qe),
        e(Qe, ze),
        e(Ue, Gt),
        e(Ue, tt),
        e(tt, hl),
        e(Ue, Pl),
        e(Ue, ol),
        e(ol, Pt),
        e(a, Ct),
        e(a, ut),
        e(ut, Mt),
        e(Mt, Cl),
        e(ut, zl),
        e(ut, mt),
        e(mt, Sl),
        e(ut, $l),
        e(ut, jt),
        e(jt, He),
        e(a, Ae),
        e(a, xe),
        e(xe, St),
        e(St, pl),
        e(pl, sa),
        e(St, Ol),
        e(St, We),
        e(We, bl),
        e(a, lt),
        e(a, Ne),
        e(Ne, Ft),
        e(Ft, ht),
        e(ht, ra),
        e(Ft, W),
        e(Ft, de),
        e(de, Oe),
        e(a, _t),
        e(a, gl),
        e(gl, Bt),
        e(Bt, wl),
        e(wl, il),
        e(Bt, oa),
        e(Bt, yl),
        e(yl, Ut),
        e(a, na),
        e(a, El),
        e(El, Wt),
        e(Wt, pt),
        (Ee = !0),
        ia ||
          ((pa = [
            we(g, "click", function () {
              Sa(l[1]) && l[1].apply(this, arguments);
            }),
            we(Wt, "click", function () {
              Sa(l[1]) && l[1].apply(this, arguments);
            }),
            we(Wt, "keydown", function () {
              Sa(l[1]) && l[1].apply(this, arguments);
            }),
            we(a, "click", fs(l[6])),
            we(a, "keydown", fs(l[7])),
            we(t, "click", function () {
              Sa(l[1]) && l[1].apply(this, arguments);
            }),
            we(t, "keydown", function () {
              Sa(l[1]) && l[1].apply(this, arguments);
            }),
          ]),
          (ia = !0));
    },
    p(je, _e) {
      if (((l = je), _e & 4 && kt !== (kt = ms(l[2].player.nationality)))) {
        if (y) {
          zt();
          const Al = y;
          pe(Al.$$.fragment, 1, 0, () => {
            qe(Al, 1);
          }),
            Yt();
        }
        kt
          ? ((y = ds(kt, ba())),
            Je(y.$$.fragment),
            me(y.$$.fragment, 1),
            Re(y, w, C))
          : (y = null);
      }
      (!Ee || _e & 4) &&
        D !==
          (D =
            (l[2].player.firstName != ""
              ? l[2].player.firstName.charAt(0) + "."
              : "") + l[2].player.lastName) &&
        Q(x, D);
      const he = {};
      _e & 8 && (he.primaryColour = l[3]?.primaryColourHex),
        _e & 8 && (he.secondaryColour = l[3]?.secondaryColourHex),
        _e & 8 && (he.thirdColour = l[3]?.thirdColourHex),
        V.$set(he),
        (!Ee || _e & 8) && M !== (M = l[3]?.friendlyName + "") && Q($, M);
      const Xe = {};
      _e & 16 && (Xe.primaryColour = l[4]?.primaryColourHex),
        _e & 16 && (Xe.secondaryColour = l[4]?.secondaryColourHex),
        _e & 16 && (Xe.thirdColour = l[4]?.thirdColourHex),
        B.$set(Xe),
        (!Ee || _e & 16) && F !== (F = l[4]?.friendlyName + "") && Q(Y, F),
        (!Ee || _e & 32) && Q(ee, l[5]),
        (!Ee || _e & 4) && J !== (J = l[2].gameweek + "") && Q(ie, J),
        (!Ee || _e & 4) &&
          oe !== (oe = (l[2].appearance > 0 ? l[2].appearance : "-") + "") &&
          Q(X, oe),
        (!Ee || _e & 4) &&
          Ce !==
            (Ce = (l[2].appearance > 0 ? l[2].appearance * 5 : "-") + "") &&
          Q(Se, Ce),
        (!Ee || _e & 4) && xt !== (xt = l[2].goals + "") && Q(rt, xt),
        (!Ee || _e & 4) && ot !== (ot = l[2].goalPoints + "") && Q(Vt, ot),
        (!Ee || _e & 4) && dl !== (dl = l[2].assists + "") && Q(Vl, dl),
        (!Ee || _e & 4) && Zt !== (Zt = l[2].assistPoints + "") && Q(Ot, Zt),
        (!Ee || _e & 4) && ll !== (ll = l[2].yellowCards + "") && Q(Ht, ll),
        (!Ee || _e & 4) &&
          dt !== (dt = l[2].yellowCards * -5 + "") &&
          Q(fl, dt),
        (!Ee || _e & 4) && ft !== (ft = l[2].redCards + "") && Q(Tl, ft),
        (!Ee || _e & 4) &&
          ul !== (ul = (l[2].redCards > 0 ? -20 : 0) + "") &&
          Q(Tt, ul),
        l[2].player.position < 2
          ? Ge
            ? Ge.p(l, _e)
            : ((Ge = ks(l)), Ge.c(), Ge.m(a, Nt))
          : Ge && (Ge.d(1), (Ge = null)),
        l[2].player.position === 0
          ? Me
            ? Me.p(l, _e)
            : ((Me = Is(l)), Me.c(), Me.m(a, ml))
          : Me && (Me.d(1), (Me = null)),
        (!Ee || _e & 4) && vl !== (vl = l[2].ownGoals + "") && Q(hl, vl),
        (!Ee || _e & 4) && nl !== (nl = l[2].ownGoals * -10 + "") && Q(Pt, nl),
        (!Ee || _e & 4) && vt !== (vt = l[2].missedPenalties + "") && Q(Sl, vt),
        (!Ee || _e & 4) &&
          _l !== (_l = l[2].missedPenalties * -15 + "") &&
          Q(He, _l),
        (!Ee || _e & 4) && Ll !== (Ll = l[2].points + "") && Q(bl, Ll),
        (!Ee || _e & 4) && at !== (at = l[2].bonusPoints + "") && Q(Oe, at),
        (!Ee || _e & 4) && Hl !== (Hl = l[2].totalPoints + "") && Q(Ut, Hl);
    },
    i(je) {
      Ee ||
        (y && me(y.$$.fragment, je),
        me(V.$$.fragment, je),
        me(B.$$.fragment, je),
        (Ee = !0));
    },
    o(je) {
      y && pe(y.$$.fragment, je),
        pe(V.$$.fragment, je),
        pe(B.$$.fragment, je),
        (Ee = !1);
    },
    d(je) {
      je && r(t),
        y && qe(y),
        qe(V),
        qe(B),
        Ge && Ge.d(),
        Me && Me.d(),
        (ia = !1),
        xl(pa);
    },
  };
}
function ks(l) {
  let t,
    a,
    s,
    d,
    u,
    f = l[2].cleanSheets + "",
    g,
    v,
    I,
    w = l[2].cleanSheetPoints + "",
    y,
    C,
    p,
    m,
    D,
    x,
    b,
    N = l[2].goalsConceded + "",
    V,
    P,
    M,
    $ = l[2].goalsConcededPoints + "",
    H;
  return {
    c() {
      (t = o("div")),
        (a = o("div")),
        (s = h("Clean Sheet")),
        (d = E()),
        (u = o("div")),
        (g = h(f)),
        (v = E()),
        (I = o("div")),
        (y = h(w)),
        (C = E()),
        (p = o("div")),
        (m = o("div")),
        (D = h("Conceded")),
        (x = E()),
        (b = o("div")),
        (V = h(N)),
        (P = E()),
        (M = o("div")),
        (H = h($)),
        this.h();
    },
    l(T) {
      t = n(T, "DIV", { class: !0 });
      var S = i(t);
      a = n(S, "DIV", { class: !0 });
      var O = i(a);
      (s = _(O, "Clean Sheet")),
        O.forEach(r),
        (d = k(S)),
        (u = n(S, "DIV", { class: !0 }));
      var B = i(u);
      (g = _(B, f)), B.forEach(r), (v = k(S)), (I = n(S, "DIV", { class: !0 }));
      var K = i(I);
      (y = _(K, w)),
        K.forEach(r),
        S.forEach(r),
        (C = k(T)),
        (p = n(T, "DIV", { class: !0 }));
      var F = i(p);
      m = n(F, "DIV", { class: !0 });
      var Y = i(m);
      (D = _(Y, "Conceded")),
        Y.forEach(r),
        (x = k(F)),
        (b = n(F, "DIV", { class: !0 }));
      var te = i(b);
      (V = _(te, N)),
        te.forEach(r),
        (P = k(F)),
        (M = n(F, "DIV", { class: !0 }));
      var Z = i(M);
      (H = _(Z, $)), Z.forEach(r), F.forEach(r), this.h();
    },
    h() {
      c(a, "class", "text-sm font-medium w-3/6"),
        c(u, "class", "text-sm font-medium w-2/6"),
        c(I, "class", "text-sm font-medium w-1/6"),
        c(t, "class", "flex justify-between items-center p-2"),
        c(m, "class", "text-sm font-medium w-3/6"),
        c(b, "class", "text-sm font-medium w-2/6"),
        c(M, "class", "text-sm font-medium w-1/6"),
        c(p, "class", "flex justify-between items-center p-2");
    },
    m(T, S) {
      ve(T, t, S),
        e(t, a),
        e(a, s),
        e(t, d),
        e(t, u),
        e(u, g),
        e(t, v),
        e(t, I),
        e(I, y),
        ve(T, C, S),
        ve(T, p, S),
        e(p, m),
        e(m, D),
        e(p, x),
        e(p, b),
        e(b, V),
        e(p, P),
        e(p, M),
        e(M, H);
    },
    p(T, S) {
      S & 4 && f !== (f = T[2].cleanSheets + "") && Q(g, f),
        S & 4 && w !== (w = T[2].cleanSheetPoints + "") && Q(y, w),
        S & 4 && N !== (N = T[2].goalsConceded + "") && Q(V, N),
        S & 4 && $ !== ($ = T[2].goalsConcededPoints + "") && Q(H, $);
    },
    d(T) {
      T && r(t), T && r(C), T && r(p);
    },
  };
}
function Is(l) {
  let t,
    a,
    s,
    d,
    u,
    f = l[2].saves + "",
    g,
    v,
    I,
    w = Math.floor(l[2].saves / 3) * 5 + "",
    y,
    C,
    p,
    m,
    D,
    x,
    b,
    N = l[2].penaltySaves + "",
    V,
    P,
    M,
    $ = l[2].penaltySaves * 20 + "",
    H;
  return {
    c() {
      (t = o("div")),
        (a = o("div")),
        (s = h("Saves")),
        (d = E()),
        (u = o("div")),
        (g = h(f)),
        (v = E()),
        (I = o("div")),
        (y = h(w)),
        (C = E()),
        (p = o("div")),
        (m = o("div")),
        (D = h("Penalty Saves")),
        (x = E()),
        (b = o("div")),
        (V = h(N)),
        (P = E()),
        (M = o("div")),
        (H = h($)),
        this.h();
    },
    l(T) {
      t = n(T, "DIV", { class: !0 });
      var S = i(t);
      a = n(S, "DIV", { class: !0 });
      var O = i(a);
      (s = _(O, "Saves")),
        O.forEach(r),
        (d = k(S)),
        (u = n(S, "DIV", { class: !0 }));
      var B = i(u);
      (g = _(B, f)), B.forEach(r), (v = k(S)), (I = n(S, "DIV", { class: !0 }));
      var K = i(I);
      (y = _(K, w)),
        K.forEach(r),
        S.forEach(r),
        (C = k(T)),
        (p = n(T, "DIV", { class: !0 }));
      var F = i(p);
      m = n(F, "DIV", { class: !0 });
      var Y = i(m);
      (D = _(Y, "Penalty Saves")),
        Y.forEach(r),
        (x = k(F)),
        (b = n(F, "DIV", { class: !0 }));
      var te = i(b);
      (V = _(te, N)),
        te.forEach(r),
        (P = k(F)),
        (M = n(F, "DIV", { class: !0 }));
      var Z = i(M);
      (H = _(Z, $)), Z.forEach(r), F.forEach(r), this.h();
    },
    h() {
      c(a, "class", "text-sm font-medium w-3/6"),
        c(u, "class", "text-sm font-medium w-2/6"),
        c(I, "class", "text-sm font-medium w-1/6"),
        c(t, "class", "flex justify-between items-center p-2"),
        c(m, "class", "text-sm font-medium w-3/6"),
        c(b, "class", "text-sm font-medium w-2/6"),
        c(M, "class", "text-sm font-medium w-1/6"),
        c(p, "class", "flex justify-between items-center p-2");
    },
    m(T, S) {
      ve(T, t, S),
        e(t, a),
        e(a, s),
        e(t, d),
        e(t, u),
        e(u, g),
        e(t, v),
        e(t, I),
        e(I, y),
        ve(T, C, S),
        ve(T, p, S),
        e(p, m),
        e(m, D),
        e(p, x),
        e(p, b),
        e(b, V),
        e(p, P),
        e(p, M),
        e(M, H);
    },
    p(T, S) {
      S & 4 && f !== (f = T[2].saves + "") && Q(g, f),
        S & 4 && w !== (w = Math.floor(T[2].saves / 3) * 5 + "") && Q(y, w),
        S & 4 && N !== (N = T[2].penaltySaves + "") && Q(V, N),
        S & 4 && $ !== ($ = T[2].penaltySaves * 20 + "") && Q(H, $);
    },
    d(T) {
      T && r(t), T && r(C), T && r(p);
    },
  };
}
function or(l) {
  let t,
    a,
    s = l[0] && Es(l);
  return {
    c() {
      s && s.c(), (t = jl());
    },
    l(d) {
      s && s.l(d), (t = jl());
    },
    m(d, u) {
      s && s.m(d, u), ve(d, t, u), (a = !0);
    },
    p(d, [u]) {
      d[0]
        ? s
          ? (s.p(d, u), u & 1 && me(s, 1))
          : ((s = Es(d)), s.c(), me(s, 1), s.m(t.parentNode, t))
        : s &&
          (zt(),
          pe(s, 1, 1, () => {
            s = null;
          }),
          Yt());
    },
    i(d) {
      a || (me(s), (a = !0));
    },
    o(d) {
      pe(s), (a = !1);
    },
    d(d) {
      s && s.d(d), d && r(t);
    },
  };
}
function nr(l, t, a) {
  let { showModal: s } = t,
    { closeDetailModal: d } = t,
    { gameweekData: u } = t,
    { playerTeam: f } = t,
    { opponentTeam: g } = t,
    { seasonName: v } = t;
  function I(y) {
    us.call(this, l, y);
  }
  function w(y) {
    us.call(this, l, y);
  }
  return (
    (l.$$set = (y) => {
      "showModal" in y && a(0, (s = y.showModal)),
        "closeDetailModal" in y && a(1, (d = y.closeDetailModal)),
        "gameweekData" in y && a(2, (u = y.gameweekData)),
        "playerTeam" in y && a(3, (f = y.playerTeam)),
        "opponentTeam" in y && a(4, (g = y.opponentTeam)),
        "seasonName" in y && a(5, (v = y.seasonName));
    }),
    [s, d, u, f, g, v, I, w]
  );
}
class ir extends va {
  constructor(t) {
    super(),
      ha(this, t, nr, or, _a, {
        showModal: 0,
        closeDetailModal: 1,
        gameweekData: 2,
        playerTeam: 3,
        opponentTeam: 4,
        seasonName: 5,
      });
  }
}
function Ds(l, t, a) {
  const s = l.slice();
  return (s[24] = t[a]), s;
}
function xs(l, t, a) {
  const s = l.slice();
  return (s[27] = t[a]), s;
}
function cr(l) {
  let t,
    a,
    s,
    d,
    u,
    f,
    g,
    v,
    I,
    w,
    y,
    C,
    p,
    m,
    D,
    x,
    b,
    N,
    V,
    P,
    M,
    $,
    H,
    T,
    S,
    O,
    B,
    K,
    F,
    Y,
    te,
    Z,
    ee,
    fe,
    ne,
    ce,
    J = l[3] && Vs(l),
    ie = l[7],
    R = [];
  for (let U = 0; U < ie.length; U += 1) R[U] = Ts(xs(l, ie, U));
  const se = [ur, fr],
    z = [];
  function ue(U, j) {
    return U[2].length > 0 ? 0 : 1;
  }
  return (
    (Z = ue(l)),
    (ee = z[Z] = se[Z](l)),
    {
      c() {
        J && J.c(),
          (t = E()),
          (a = o("div")),
          (s = o("div")),
          (d = o("div")),
          (u = o("div")),
          (f = o("div")),
          (g = o("button")),
          (v = h("<")),
          (w = E()),
          (y = o("select"));
        for (let U = 0; U < R.length; U += 1) R[U].c();
        (C = E()),
          (p = o("button")),
          (m = h(">")),
          (x = E()),
          (b = o("div")),
          (N = o("div")),
          (V = o("div")),
          (P = o("div")),
          (M = h("Pos")),
          ($ = E()),
          (H = o("div")),
          (T = h("Player")),
          (S = E()),
          (O = o("div")),
          (B = h("Points")),
          (K = E()),
          (F = o("div")),
          (Y = h(" ")),
          (te = E()),
          ee.c(),
          this.h();
      },
      l(U) {
        J && J.l(U), (t = k(U)), (a = n(U, "DIV", { class: !0 }));
        var j = i(a);
        s = n(j, "DIV", { class: !0 });
        var A = i(s);
        d = n(A, "DIV", { class: !0 });
        var L = i(d);
        u = n(L, "DIV", { class: !0 });
        var G = i(u);
        f = n(G, "DIV", { class: !0 });
        var ae = i(f);
        g = n(ae, "BUTTON", { class: !0 });
        var Ve = i(g);
        (v = _(Ve, "<")),
          Ve.forEach(r),
          (w = k(ae)),
          (y = n(ae, "SELECT", { class: !0 }));
        var ke = i(y);
        for (let De = 0; De < R.length; De += 1) R[De].l(ke);
        ke.forEach(r), (C = k(ae)), (p = n(ae, "BUTTON", { class: !0 }));
        var re = i(p);
        (m = _(re, ">")),
          re.forEach(r),
          ae.forEach(r),
          G.forEach(r),
          L.forEach(r),
          (x = k(A)),
          (b = n(A, "DIV", { class: !0 }));
        var ye = i(b);
        N = n(ye, "DIV", { class: !0 });
        var le = i(N);
        V = n(le, "DIV", { class: !0 });
        var be = i(V);
        P = n(be, "DIV", { class: !0 });
        var q = i(P);
        (M = _(q, "Pos")),
          q.forEach(r),
          ($ = k(be)),
          (H = n(be, "DIV", { class: !0 }));
        var oe = i(H);
        (T = _(oe, "Player")),
          oe.forEach(r),
          (S = k(be)),
          (O = n(be, "DIV", { class: !0 }));
        var X = i(O);
        (B = _(X, "Points")),
          X.forEach(r),
          (K = k(be)),
          (F = n(be, "DIV", { class: !0 }));
        var Ie = i(F);
        (Y = _(Ie, " ")),
          Ie.forEach(r),
          be.forEach(r),
          (te = k(le)),
          ee.l(le),
          le.forEach(r),
          ye.forEach(r),
          A.forEach(r),
          j.forEach(r),
          this.h();
      },
      h() {
        c(
          g,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
        ),
          (g.disabled = I = l[1] === 1),
          c(
            y,
            "class",
            "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
          ),
          l[1] === void 0 && ta(() => l[14].call(y)),
          c(
            p,
            "class",
            "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
          ),
          (p.disabled = D = l[1] === 38),
          c(f, "class", "flex items-center mr-8"),
          c(u, "class", "flex items-center ml-4"),
          c(d, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
          c(P, "class", "w-1/6 text-center mx-4"),
          c(H, "class", "w-3/6 px-4"),
          c(O, "class", "w-1/6 text-center"),
          c(F, "class", "w-1/6 text-center"),
          c(
            V,
            "class",
            "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
          ),
          c(N, "class", "overflow-x-auto flex-1"),
          c(
            b,
            "class",
            "flex flex-col space-y-4 mt-4 text-lg text-xs md:text-base"
          ),
          c(s, "class", "flex flex-col space-y-4 text-xs md:text-base"),
          c(a, "class", "container-fluid mt-4 mb-4");
      },
      m(U, j) {
        J && J.m(U, j),
          ve(U, t, j),
          ve(U, a, j),
          e(a, s),
          e(s, d),
          e(d, u),
          e(u, f),
          e(f, g),
          e(g, v),
          e(f, w),
          e(f, y);
        for (let A = 0; A < R.length; A += 1) R[A] && R[A].m(y, null);
        bt(y, l[1], !0),
          e(f, C),
          e(f, p),
          e(p, m),
          e(s, x),
          e(s, b),
          e(b, N),
          e(N, V),
          e(V, P),
          e(P, M),
          e(V, $),
          e(V, H),
          e(H, T),
          e(V, S),
          e(V, O),
          e(O, B),
          e(V, K),
          e(V, F),
          e(F, Y),
          e(N, te),
          z[Z].m(N, null),
          (fe = !0),
          ne ||
            ((ce = [
              we(g, "click", l[13]),
              we(y, "change", l[14]),
              we(p, "click", l[15]),
            ]),
            (ne = !0));
      },
      p(U, j) {
        if (
          (U[3]
            ? J
              ? (J.p(U, j), j & 8 && me(J, 1))
              : ((J = Vs(U)), J.c(), me(J, 1), J.m(t.parentNode, t))
            : J &&
              (zt(),
              pe(J, 1, 1, () => {
                J = null;
              }),
              Yt()),
          (!fe || (j & 130 && I !== (I = U[1] === 1))) && (g.disabled = I),
          j & 128)
        ) {
          ie = U[7];
          let L;
          for (L = 0; L < ie.length; L += 1) {
            const G = xs(U, ie, L);
            R[L] ? R[L].p(G, j) : ((R[L] = Ts(G)), R[L].c(), R[L].m(y, null));
          }
          for (; L < R.length; L += 1) R[L].d(1);
          R.length = ie.length;
        }
        j & 130 && bt(y, U[1]),
          (!fe || (j & 130 && D !== (D = U[1] === 38))) && (p.disabled = D);
        let A = Z;
        (Z = ue(U)),
          Z === A
            ? z[Z].p(U, j)
            : (zt(),
              pe(z[A], 1, 1, () => {
                z[A] = null;
              }),
              Yt(),
              (ee = z[Z]),
              ee ? ee.p(U, j) : ((ee = z[Z] = se[Z](U)), ee.c()),
              me(ee, 1),
              ee.m(N, null));
      },
      i(U) {
        fe || (me(J), me(ee), (fe = !0));
      },
      o(U) {
        pe(J), pe(ee), (fe = !1);
      },
      d(U) {
        J && J.d(U),
          U && r(t),
          U && r(a),
          cl(R, U),
          z[Z].d(),
          (ne = !1),
          xl(ce);
      },
    }
  );
}
function dr(l) {
  let t, a;
  return (
    (t = new Us({})),
    {
      c() {
        Je(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Re(t, s, d), (a = !0);
      },
      p: gt,
      i(s) {
        a || (me(t.$$.fragment, s), (a = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (a = !1);
      },
      d(s) {
        qe(t, s);
      },
    }
  );
}
function Vs(l) {
  let t, a;
  return (
    (t = new ir({
      props: {
        playerTeam: l[4],
        opponentTeam: l[5],
        seasonName: l[8],
        showModal: l[3],
        closeDetailModal: l[11],
        gameweekData: l[6],
      },
    })),
    {
      c() {
        Je(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Re(t, s, d), (a = !0);
      },
      p(s, d) {
        const u = {};
        d & 16 && (u.playerTeam = s[4]),
          d & 32 && (u.opponentTeam = s[5]),
          d & 8 && (u.showModal = s[3]),
          d & 64 && (u.gameweekData = s[6]),
          t.$set(u);
      },
      i(s) {
        a || (me(t.$$.fragment, s), (a = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (a = !1);
      },
      d(s) {
        qe(t, s);
      },
    }
  );
}
function Ts(l) {
  let t,
    a,
    s = l[27] + "",
    d;
  return {
    c() {
      (t = o("option")), (a = h("Gameweek ")), (d = h(s)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var f = i(t);
      (a = _(f, "Gameweek ")), (d = _(f, s)), f.forEach(r), this.h();
    },
    h() {
      (t.__value = l[27]), (t.value = t.__value);
    },
    m(u, f) {
      ve(u, t, f), e(t, a), e(t, d);
    },
    p: gt,
    d(u) {
      u && r(t);
    },
  };
}
function fr(l) {
  let t, a;
  return {
    c() {
      (t = o("p")), (a = h("No data.")), this.h();
    },
    l(s) {
      t = n(s, "P", { class: !0 });
      var d = i(t);
      (a = _(d, "No data.")), d.forEach(r), this.h();
    },
    h() {
      c(t, "class", "w-100 p-4");
    },
    m(s, d) {
      ve(s, t, d), e(t, a);
    },
    p: gt,
    i: gt,
    o: gt,
    d(s) {
      s && r(t);
    },
  };
}
function ur(l) {
  let t,
    a,
    s = l[2],
    d = [];
  for (let f = 0; f < s.length; f += 1) d[f] = Ns(Ds(l, s, f));
  const u = (f) =>
    pe(d[f], 1, 1, () => {
      d[f] = null;
    });
  return {
    c() {
      for (let f = 0; f < d.length; f += 1) d[f].c();
      t = jl();
    },
    l(f) {
      for (let g = 0; g < d.length; g += 1) d[g].l(f);
      t = jl();
    },
    m(f, g) {
      for (let v = 0; v < d.length; v += 1) d[v] && d[v].m(f, g);
      ve(f, t, g), (a = !0);
    },
    p(f, g) {
      if (g & 1028) {
        s = f[2];
        let v;
        for (v = 0; v < s.length; v += 1) {
          const I = Ds(f, s, v);
          d[v]
            ? (d[v].p(I, g), me(d[v], 1))
            : ((d[v] = Ns(I)), d[v].c(), me(d[v], 1), d[v].m(t.parentNode, t));
        }
        for (zt(), v = s.length; v < d.length; v += 1) u(v);
        Yt();
      }
    },
    i(f) {
      if (!a) {
        for (let g = 0; g < s.length; g += 1) me(d[g]);
        a = !0;
      }
    },
    o(f) {
      d = d.filter(Boolean);
      for (let g = 0; g < d.length; g += 1) pe(d[g]);
      a = !1;
    },
    d(f) {
      cl(d, f), f && r(t);
    },
  };
}
function Ns(l) {
  let t,
    a,
    s = vs(l[24].player.position) + "",
    d,
    u,
    f,
    g,
    v =
      l[24].player.firstName.length > 2
        ? l[24].player.firstName.substring(0, 1) + "."
        : "",
    I,
    w,
    y = l[24].player.lastName + "",
    C,
    p,
    m,
    D,
    x = l[24].points + "",
    b,
    N,
    V,
    P,
    M,
    $,
    H,
    T,
    S,
    O,
    B;
  $ = new tr({ props: { className: "w-6 mr-2" } });
  function K() {
    return l[16](l[24]);
  }
  return {
    c() {
      (t = o("div")),
        (a = o("div")),
        (d = h(s)),
        (u = E()),
        (f = o("div")),
        (g = o("a")),
        (I = h(v)),
        (w = E()),
        (C = h(y)),
        (m = E()),
        (D = o("div")),
        (b = h(x)),
        (N = E()),
        (V = o("div")),
        (P = o("button")),
        (M = o("span")),
        Je($.$$.fragment),
        (H = h("View Details")),
        (T = E()),
        this.h();
    },
    l(F) {
      t = n(F, "DIV", { class: !0 });
      var Y = i(t);
      a = n(Y, "DIV", { class: !0 });
      var te = i(a);
      (d = _(te, s)),
        te.forEach(r),
        (u = k(Y)),
        (f = n(Y, "DIV", { class: !0 }));
      var Z = i(f);
      g = n(Z, "A", { href: !0 });
      var ee = i(g);
      (I = _(ee, v)),
        (w = k(ee)),
        (C = _(ee, y)),
        ee.forEach(r),
        Z.forEach(r),
        (m = k(Y)),
        (D = n(Y, "DIV", { class: !0 }));
      var fe = i(D);
      (b = _(fe, x)),
        fe.forEach(r),
        (N = k(Y)),
        (V = n(Y, "DIV", { class: !0 }));
      var ne = i(V);
      P = n(ne, "BUTTON", {});
      var ce = i(P);
      M = n(ce, "SPAN", { class: !0 });
      var J = i(M);
      Ye($.$$.fragment, J),
        (H = _(J, "View Details")),
        J.forEach(r),
        ce.forEach(r),
        ne.forEach(r),
        (T = k(Y)),
        Y.forEach(r),
        this.h();
    },
    h() {
      c(a, "class", "w-1/6 text-center"),
        c(g, "href", (p = `/player?id=${l[24].player.id}`)),
        c(f, "class", "w-3/6 text-center"),
        c(D, "class", "w-1/6 text-center"),
        c(M, "class", "flex items-center"),
        c(V, "class", "w-1/6 text-center"),
        c(
          t,
          "class",
          "flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer"
        );
    },
    m(F, Y) {
      ve(F, t, Y),
        e(t, a),
        e(a, d),
        e(t, u),
        e(t, f),
        e(f, g),
        e(g, I),
        e(g, w),
        e(g, C),
        e(t, m),
        e(t, D),
        e(D, b),
        e(t, N),
        e(t, V),
        e(V, P),
        e(P, M),
        Re($, M, null),
        e(M, H),
        e(t, T),
        (S = !0),
        O || ((B = we(P, "click", K)), (O = !0));
    },
    p(F, Y) {
      (l = F),
        (!S || Y & 4) && s !== (s = vs(l[24].player.position) + "") && Q(d, s),
        (!S || Y & 4) &&
          v !==
            (v =
              l[24].player.firstName.length > 2
                ? l[24].player.firstName.substring(0, 1) + "."
                : "") &&
          Q(I, v),
        (!S || Y & 4) && y !== (y = l[24].player.lastName + "") && Q(C, y),
        (!S || (Y & 4 && p !== (p = `/player?id=${l[24].player.id}`))) &&
          c(g, "href", p),
        (!S || Y & 4) && x !== (x = l[24].points + "") && Q(b, x);
    },
    i(F) {
      S || (me($.$$.fragment, F), (S = !0));
    },
    o(F) {
      pe($.$$.fragment, F), (S = !1);
    },
    d(F) {
      F && r(t), qe($), (O = !1), B();
    },
  };
}
function mr(l) {
  let t, a, s, d;
  const u = [dr, cr],
    f = [];
  function g(v, I) {
    return v[0] ? 0 : 1;
  }
  return (
    (t = g(l)),
    (a = f[t] = u[t](l)),
    {
      c() {
        a.c(), (s = jl());
      },
      l(v) {
        a.l(v), (s = jl());
      },
      m(v, I) {
        f[t].m(v, I), ve(v, s, I), (d = !0);
      },
      p(v, [I]) {
        let w = t;
        (t = g(v)),
          t === w
            ? f[t].p(v, I)
            : (zt(),
              pe(f[w], 1, 1, () => {
                f[w] = null;
              }),
              Yt(),
              (a = f[t]),
              a ? a.p(v, I) : ((a = f[t] = u[t](v)), a.c()),
              me(a, 1),
              a.m(s.parentNode, s));
      },
      i(v) {
        d || (me(a), (d = !0));
      },
      o(v) {
        pe(a), (d = !1);
      },
      d(v) {
        f[t].d(v), v && r(s);
      },
    }
  );
}
function vr(l, t, a) {
  let s;
  Rs(l, Aa, (B) => a(12, (s = B)));
  let d,
    u,
    f,
    g = !0,
    v = [],
    I,
    w = [],
    y = 1,
    C = Array.from({ length: 38 }, (B, K) => K + 1),
    p = [],
    m = !1,
    D,
    x,
    b,
    N;
  $a(async () => {
    try {
      await Kt.sync(),
        await Qt.sync(),
        await Fl.sync(),
        await Aa.sync(),
        (d = Kt.subscribe((B) => {
          v = B.sort((K, F) => K.friendlyName.localeCompare(F.friendlyName));
        })),
        (u = Qt.subscribe((B) => {
          I = B;
        })),
        (f = Fl.subscribe((B) => {
          w = B;
        })),
        await V(s?.identity?.getPrincipal());
    } catch (B) {
      la.show("Error fetching gameweek points.", "error"),
        console.error("Error fetching gameweek points:", B);
    } finally {
      a(0, (g = !1));
    }
  }),
    Ga(() => {
      d?.(), f?.(), u?.();
    });
  async function V(B) {
    if (!B) return;
    let K = await Ws.getFantasyTeamForGameweek(B?.toText(), y);
    a(2, (p = await Js.getGameweekPlayers(K, y)));
  }
  const P = (B) => {
    a(1, (y = Math.max(1, Math.min(38, y + B))));
  };
  async function M(B) {
    try {
      a(6, (b = B));
      let K = B.player.teamId;
      a(4, (D = v.find((te) => te.id === K)));
      let F = w.find(
          (te) =>
            te.gameweek === B.gameweek &&
            (te.homeTeamId === K || te.awayTeamId === K)
        ),
        Y = F?.homeTeamId === K ? F?.awayTeamId : F?.homeTeamId;
      a(5, (x = v.find((te) => te.id === Y))), a(3, (m = !0));
    } catch (K) {
      la.show("Error loading gameweek detail.", "error"),
        console.error("Error loading gameweek detail:", K);
    }
  }
  function $() {
    a(3, (m = !1));
  }
  const H = () => P(-1);
  function T() {
    (y = ea(this)), a(1, y), a(7, C);
  }
  const S = () => P(1),
    O = (B) => M(B);
  return (
    (l.$$.update = () => {
      l.$$.dirty & 4096 &&
        s?.identity?.getPrincipal() &&
        V(s?.identity?.getPrincipal());
    }),
    [g, y, p, m, D, x, b, C, N, P, M, $, s, H, T, S, O]
  );
}
class hr extends va {
  constructor(t) {
    super(), ha(this, t, vr, mr, _a, {});
  }
}
function Ps(l, t, a) {
  const s = l.slice();
  return (s[36] = t[a]), s;
}
function Cs(l, t, a) {
  const s = l.slice();
  return (s[39] = t[a]), s;
}
function Ss(l, t, a) {
  const s = l.slice();
  return (s[42] = t[a]), s;
}
function _r(l) {
  let t,
    a,
    s,
    d,
    u,
    f,
    g,
    v,
    I,
    w,
    y,
    C,
    p,
    m,
    D,
    x,
    b,
    N,
    V,
    P,
    M,
    $,
    H,
    T,
    S,
    O,
    B,
    K,
    F,
    Y,
    te,
    Z,
    ee,
    fe,
    ne,
    ce = l[1] === 1 && $s(l),
    J = l[1] === 2 && Ls(l);
  function ie(z, ue) {
    return z[5] && z[5].entries.length > 0 ? gr : br;
  }
  let R = ie(l),
    se = R(l);
  return {
    c() {
      (t = o("div")),
        (a = o("div")),
        (s = o("div")),
        (d = o("div")),
        (u = o("div")),
        (f = o("button")),
        (g = h("<")),
        (v = E()),
        (I = o("select")),
        (w = o("option")),
        (y = h("Weekly")),
        (C = o("option")),
        (p = h("Monthly")),
        (m = o("option")),
        (D = h("Season")),
        (x = E()),
        (b = o("button")),
        (N = h(">")),
        (V = E()),
        ce && ce.c(),
        (P = E()),
        J && J.c(),
        (M = E()),
        ($ = o("div")),
        (H = o("div")),
        (T = o("div")),
        (S = o("div")),
        (O = h("Pos")),
        (B = E()),
        (K = o("div")),
        (F = h("Manager")),
        (Y = E()),
        (te = o("div")),
        (Z = h("Points")),
        (ee = E()),
        se.c(),
        this.h();
    },
    l(z) {
      t = n(z, "DIV", { class: !0 });
      var ue = i(t);
      a = n(ue, "DIV", { class: !0 });
      var U = i(a);
      s = n(U, "DIV", { class: !0 });
      var j = i(s);
      d = n(j, "DIV", { class: !0 });
      var A = i(d);
      u = n(A, "DIV", { class: !0 });
      var L = i(u);
      f = n(L, "BUTTON", { class: !0 });
      var G = i(f);
      (g = _(G, "<")),
        G.forEach(r),
        (v = k(L)),
        (I = n(L, "SELECT", { class: !0 }));
      var ae = i(I);
      w = n(ae, "OPTION", {});
      var Ve = i(w);
      (y = _(Ve, "Weekly")), Ve.forEach(r), (C = n(ae, "OPTION", {}));
      var ke = i(C);
      (p = _(ke, "Monthly")), ke.forEach(r), (m = n(ae, "OPTION", {}));
      var re = i(m);
      (D = _(re, "Season")),
        re.forEach(r),
        ae.forEach(r),
        (x = k(L)),
        (b = n(L, "BUTTON", { class: !0 }));
      var ye = i(b);
      (N = _(ye, ">")),
        ye.forEach(r),
        L.forEach(r),
        (V = k(A)),
        ce && ce.l(A),
        (P = k(A)),
        J && J.l(A),
        A.forEach(r),
        j.forEach(r),
        (M = k(U)),
        ($ = n(U, "DIV", { class: !0 }));
      var le = i($);
      H = n(le, "DIV", { class: !0 });
      var be = i(H);
      T = n(be, "DIV", { class: !0 });
      var q = i(T);
      S = n(q, "DIV", { class: !0 });
      var oe = i(S);
      (O = _(oe, "Pos")),
        oe.forEach(r),
        (B = k(q)),
        (K = n(q, "DIV", { class: !0 }));
      var X = i(K);
      (F = _(X, "Manager")),
        X.forEach(r),
        (Y = k(q)),
        (te = n(q, "DIV", { class: !0 }));
      var Ie = i(te);
      (Z = _(Ie, "Points")),
        Ie.forEach(r),
        q.forEach(r),
        (ee = k(be)),
        se.l(be),
        be.forEach(r),
        le.forEach(r),
        U.forEach(r),
        ue.forEach(r),
        this.h();
    },
    h() {
      c(
        f,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (w.__value = 1),
        (w.value = w.__value),
        (C.__value = 2),
        (C.value = C.__value),
        (m.__value = 3),
        (m.value = m.__value),
        c(
          I,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        l[1] === void 0 && ta(() => l[16].call(I)),
        c(
          b,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        c(u, "class", "md:flex md:items-center md:mt-0 ml-2 md:ml-4"),
        c(
          d,
          "class",
          "flex flex-col sm:flex-row justify-between sm:items-center"
        ),
        c(s, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        c(S, "class", "w-1/6 px-4"),
        c(K, "class", "w-1/3 px-4"),
        c(te, "class", "w-1/2 px-4"),
        c(
          T,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        c(H, "class", "overflow-x-auto flex-1"),
        c($, "class", "flex flex-col space-y-4 mt-4 text-xs md:text-base"),
        c(a, "class", "flex flex-col space-y-4 text-xs md:text-base"),
        c(t, "class", "container-fluid mt-4");
    },
    m(z, ue) {
      ve(z, t, ue),
        e(t, a),
        e(a, s),
        e(s, d),
        e(d, u),
        e(u, f),
        e(f, g),
        e(u, v),
        e(u, I),
        e(I, w),
        e(w, y),
        e(I, C),
        e(C, p),
        e(I, m),
        e(m, D),
        bt(I, l[1], !0),
        e(u, x),
        e(u, b),
        e(b, N),
        e(d, V),
        ce && ce.m(d, null),
        e(d, P),
        J && J.m(d, null),
        e(a, M),
        e(a, $),
        e($, H),
        e(H, T),
        e(T, S),
        e(S, O),
        e(T, B),
        e(T, K),
        e(K, F),
        e(T, Y),
        e(T, te),
        e(te, Z),
        e(H, ee),
        se.m(H, null),
        fe ||
          ((ne = [
            we(f, "click", l[15]),
            we(I, "change", l[16]),
            we(b, "click", l[17]),
          ]),
          (fe = !0));
    },
    p(z, ue) {
      ue[0] & 2 && bt(I, z[1]),
        z[1] === 1
          ? ce
            ? ce.p(z, ue)
            : ((ce = $s(z)), ce.c(), ce.m(d, P))
          : ce && (ce.d(1), (ce = null)),
        z[1] === 2
          ? J
            ? J.p(z, ue)
            : ((J = Ls(z)), J.c(), J.m(d, null))
          : J && (J.d(1), (J = null)),
        R === (R = ie(z)) && se
          ? se.p(z, ue)
          : (se.d(1), (se = R(z)), se && (se.c(), se.m(H, null)));
    },
    i: gt,
    o: gt,
    d(z) {
      z && r(t), ce && ce.d(), J && J.d(), se.d(), (fe = !1), xl(ne);
    },
  };
}
function pr(l) {
  let t, a;
  return (
    (t = new Us({})),
    {
      c() {
        Je(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Re(t, s, d), (a = !0);
      },
      p: gt,
      i(s) {
        a || (me(t.$$.fragment, s), (a = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (a = !1);
      },
      d(s) {
        qe(t, s);
      },
    }
  );
}
function $s(l) {
  let t,
    a,
    s,
    d,
    u,
    f,
    g,
    v,
    I,
    w,
    y,
    C,
    p = l[9],
    m = [];
  for (let D = 0; D < p.length; D += 1) m[D] = Os(Ss(l, p, D));
  return {
    c() {
      (t = o("div")),
        (a = o("button")),
        (s = h("<")),
        (u = E()),
        (f = o("select"));
      for (let D = 0; D < m.length; D += 1) m[D].c();
      (g = E()), (v = o("button")), (I = h(">")), this.h();
    },
    l(D) {
      t = n(D, "DIV", { class: !0 });
      var x = i(t);
      a = n(x, "BUTTON", { class: !0 });
      var b = i(a);
      (s = _(b, "<")),
        b.forEach(r),
        (u = k(x)),
        (f = n(x, "SELECT", { class: !0 }));
      var N = i(f);
      for (let P = 0; P < m.length; P += 1) m[P].l(N);
      N.forEach(r), (g = k(x)), (v = n(x, "BUTTON", { class: !0 }));
      var V = i(v);
      (I = _(V, ">")), V.forEach(r), x.forEach(r), this.h();
    },
    h() {
      c(
        a,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (a.disabled = d = l[2] === 1),
        c(
          f,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px] md:min-w-[140px]"
        ),
        l[2] === void 0 && ta(() => l[19].call(f)),
        c(
          v,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (v.disabled = w = l[2] === 38),
        c(t, "class", "md:flex md:items-center mt-2 sm:mt-0 ml-2");
    },
    m(D, x) {
      ve(D, t, x), e(t, a), e(a, s), e(t, u), e(t, f);
      for (let b = 0; b < m.length; b += 1) m[b] && m[b].m(f, null);
      bt(f, l[2], !0),
        e(t, g),
        e(t, v),
        e(v, I),
        y ||
          ((C = [
            we(a, "click", l[18]),
            we(f, "change", l[19]),
            we(v, "click", l[20]),
          ]),
          (y = !0));
    },
    p(D, x) {
      if (
        (x[0] & 516 && d !== (d = D[2] === 1) && (a.disabled = d), x[0] & 512)
      ) {
        p = D[9];
        let b;
        for (b = 0; b < p.length; b += 1) {
          const N = Ss(D, p, b);
          m[b] ? m[b].p(N, x) : ((m[b] = Os(N)), m[b].c(), m[b].m(f, null));
        }
        for (; b < m.length; b += 1) m[b].d(1);
        m.length = p.length;
      }
      x[0] & 516 && bt(f, D[2]),
        x[0] & 516 && w !== (w = D[2] === 38) && (v.disabled = w);
    },
    d(D) {
      D && r(t), cl(m, D), (y = !1), xl(C);
    },
  };
}
function Os(l) {
  let t,
    a,
    s = l[42] + "",
    d;
  return {
    c() {
      (t = o("option")), (a = h("Gameweek ")), (d = h(s)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var f = i(t);
      (a = _(f, "Gameweek ")), (d = _(f, s)), f.forEach(r), this.h();
    },
    h() {
      (t.__value = l[42]), (t.value = t.__value);
    },
    m(u, f) {
      ve(u, t, f), e(t, a), e(t, d);
    },
    p: gt,
    d(u) {
      u && r(t);
    },
  };
}
function Ls(l) {
  let t,
    a,
    s,
    d,
    u,
    f,
    g,
    v,
    I,
    w,
    y,
    C,
    p,
    m,
    D,
    x,
    b,
    N,
    V,
    P,
    M,
    $,
    H,
    T,
    S,
    O,
    B,
    K,
    F,
    Y,
    te,
    Z,
    ee,
    fe,
    ne,
    ce,
    J,
    ie,
    R,
    se,
    z,
    ue,
    U,
    j = l[0],
    A = [];
  for (let L = 0; L < j.length; L += 1) A[L] = Hs(Cs(l, j, L));
  return {
    c() {
      (t = o("div")),
        (a = o("button")),
        (s = h("<")),
        (d = E()),
        (u = o("select"));
      for (let L = 0; L < A.length; L += 1) A[L].c();
      (f = E()),
        (g = o("button")),
        (v = h(">")),
        (I = E()),
        (w = o("div")),
        (y = o("button")),
        (C = h("<")),
        (p = E()),
        (m = o("select")),
        (D = o("option")),
        (x = h("January")),
        (b = o("option")),
        (N = h("February")),
        (V = o("option")),
        (P = h("March")),
        (M = o("option")),
        ($ = h("April")),
        (H = o("option")),
        (T = h("May")),
        (S = o("option")),
        (O = h("June")),
        (B = o("option")),
        (K = h("July")),
        (F = o("option")),
        (Y = h("August")),
        (te = o("option")),
        (Z = h("September")),
        (ee = o("option")),
        (fe = h("October")),
        (ne = o("option")),
        (ce = h("November")),
        (J = o("option")),
        (ie = h("December")),
        (R = E()),
        (se = o("button")),
        (z = h(">")),
        this.h();
    },
    l(L) {
      t = n(L, "DIV", { class: !0 });
      var G = i(t);
      a = n(G, "BUTTON", { class: !0 });
      var ae = i(a);
      (s = _(ae, "<")),
        ae.forEach(r),
        (d = k(G)),
        (u = n(G, "SELECT", { class: !0 }));
      var Ve = i(u);
      for (let Le = 0; Le < A.length; Le += 1) A[Le].l(Ve);
      Ve.forEach(r), (f = k(G)), (g = n(G, "BUTTON", { class: !0 }));
      var ke = i(g);
      (v = _(ke, ">")),
        ke.forEach(r),
        G.forEach(r),
        (I = k(L)),
        (w = n(L, "DIV", { class: !0 }));
      var re = i(w);
      y = n(re, "BUTTON", { class: !0 });
      var ye = i(y);
      (C = _(ye, "<")),
        ye.forEach(r),
        (p = k(re)),
        (m = n(re, "SELECT", { class: !0 }));
      var le = i(m);
      D = n(le, "OPTION", {});
      var be = i(D);
      (x = _(be, "January")), be.forEach(r), (b = n(le, "OPTION", {}));
      var q = i(b);
      (N = _(q, "February")), q.forEach(r), (V = n(le, "OPTION", {}));
      var oe = i(V);
      (P = _(oe, "March")), oe.forEach(r), (M = n(le, "OPTION", {}));
      var X = i(M);
      ($ = _(X, "April")), X.forEach(r), (H = n(le, "OPTION", {}));
      var Ie = i(H);
      (T = _(Ie, "May")), Ie.forEach(r), (S = n(le, "OPTION", {}));
      var De = i(S);
      (O = _(De, "June")), De.forEach(r), (B = n(le, "OPTION", {}));
      var Ce = i(B);
      (K = _(Ce, "July")), Ce.forEach(r), (F = n(le, "OPTION", {}));
      var Se = i(F);
      (Y = _(Se, "August")), Se.forEach(r), (te = n(le, "OPTION", {}));
      var Fe = i(te);
      (Z = _(Fe, "September")), Fe.forEach(r), (ee = n(le, "OPTION", {}));
      var Te = i(ee);
      (fe = _(Te, "October")), Te.forEach(r), (ne = n(le, "OPTION", {}));
      var ge = i(ne);
      (ce = _(ge, "November")), ge.forEach(r), (J = n(le, "OPTION", {}));
      var st = i(J);
      (ie = _(st, "December")),
        st.forEach(r),
        le.forEach(r),
        (R = k(re)),
        (se = n(re, "BUTTON", { class: !0 }));
      var wt = i(se);
      (z = _(wt, ">")), wt.forEach(r), re.forEach(r), this.h();
    },
    h() {
      c(
        a,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        c(
          u,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        l[4] === void 0 && ta(() => l[22].call(u)),
        c(
          g,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        c(t, "class", "sm:flex sm:items-center sm:mt-0 mt-2 ml-2"),
        c(
          y,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
        ),
        (D.__value = 1),
        (D.value = D.__value),
        (b.__value = 2),
        (b.value = b.__value),
        (V.__value = 3),
        (V.value = V.__value),
        (M.__value = 4),
        (M.value = M.__value),
        (H.__value = 5),
        (H.value = H.__value),
        (S.__value = 6),
        (S.value = S.__value),
        (B.__value = 7),
        (B.value = B.__value),
        (F.__value = 8),
        (F.value = F.__value),
        (te.__value = 9),
        (te.value = te.__value),
        (ee.__value = 10),
        (ee.value = ee.__value),
        (ne.__value = 11),
        (ne.value = ne.__value),
        (J.__value = 12),
        (J.value = J.__value),
        c(
          m,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px] md:min-w-[150px]"
        ),
        l[3] === void 0 && ta(() => l[25].call(m)),
        c(
          se,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        c(w, "class", "sm:flex sm:items-center sm:mt-0 mt-2 ml-2");
    },
    m(L, G) {
      ve(L, t, G), e(t, a), e(a, s), e(t, d), e(t, u);
      for (let ae = 0; ae < A.length; ae += 1) A[ae] && A[ae].m(u, null);
      bt(u, l[4], !0),
        e(t, f),
        e(t, g),
        e(g, v),
        ve(L, I, G),
        ve(L, w, G),
        e(w, y),
        e(y, C),
        e(w, p),
        e(w, m),
        e(m, D),
        e(D, x),
        e(m, b),
        e(b, N),
        e(m, V),
        e(V, P),
        e(m, M),
        e(M, $),
        e(m, H),
        e(H, T),
        e(m, S),
        e(S, O),
        e(m, B),
        e(B, K),
        e(m, F),
        e(F, Y),
        e(m, te),
        e(te, Z),
        e(m, ee),
        e(ee, fe),
        e(m, ne),
        e(ne, ce),
        e(m, J),
        e(J, ie),
        bt(m, l[3], !0),
        e(w, R),
        e(w, se),
        e(se, z),
        ue ||
          ((U = [
            we(a, "click", l[21]),
            we(u, "change", l[22]),
            we(g, "click", l[23]),
            we(y, "click", l[24]),
            we(m, "change", l[25]),
            we(se, "click", l[26]),
          ]),
          (ue = !0));
    },
    p(L, G) {
      if (G[0] & 1) {
        j = L[0];
        let ae;
        for (ae = 0; ae < j.length; ae += 1) {
          const Ve = Cs(L, j, ae);
          A[ae]
            ? A[ae].p(Ve, G)
            : ((A[ae] = Hs(Ve)), A[ae].c(), A[ae].m(u, null));
        }
        for (; ae < A.length; ae += 1) A[ae].d(1);
        A.length = j.length;
      }
      G[0] & 17 && bt(u, L[4]), G[0] & 8 && bt(m, L[3]);
    },
    d(L) {
      L && r(t), cl(A, L), L && r(I), L && r(w), (ue = !1), xl(U);
    },
  };
}
function Hs(l) {
  let t,
    a = l[39].friendlyName + "",
    s,
    d;
  return {
    c() {
      (t = o("option")), (s = h(a)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var f = i(t);
      (s = _(f, a)), f.forEach(r), this.h();
    },
    h() {
      (t.__value = d = l[39].id), (t.value = t.__value);
    },
    m(u, f) {
      ve(u, t, f), e(t, s);
    },
    p(u, f) {
      f[0] & 1 && a !== (a = u[39].friendlyName + "") && Q(s, a),
        f[0] & 1 &&
          d !== (d = u[39].id) &&
          ((t.__value = d), (t.value = t.__value));
    },
    d(u) {
      u && r(t);
    },
  };
}
function br(l) {
  let t, a;
  return {
    c() {
      (t = o("p")), (a = h("No leaderboard data.")), this.h();
    },
    l(s) {
      t = n(s, "P", { class: !0 });
      var d = i(t);
      (a = _(d, "No leaderboard data.")), d.forEach(r), this.h();
    },
    h() {
      c(t, "class", "w-100 p-4");
    },
    m(s, d) {
      ve(s, t, d), e(t, a);
    },
    p: gt,
    d(s) {
      s && r(t);
    },
  };
}
function gr(l) {
  let t,
    a,
    s,
    d,
    u,
    f,
    g,
    v,
    I,
    w,
    y,
    C,
    p,
    m,
    D,
    x = l[5].entries,
    b = [];
  for (let N = 0; N < x.length; N += 1) b[N] = As(Ps(l, x, N));
  return {
    c() {
      for (let N = 0; N < b.length; N += 1) b[N].c();
      (t = E()),
        (a = o("div")),
        (s = o("button")),
        (d = h("Previous")),
        (f = E()),
        (g = o("span")),
        (v = h("Page ")),
        (I = h(l[7])),
        (w = E()),
        (y = o("button")),
        (C = h("Next")),
        this.h();
    },
    l(N) {
      for (let H = 0; H < b.length; H += 1) b[H].l(N);
      (t = k(N)), (a = n(N, "DIV", { class: !0 }));
      var V = i(a);
      s = n(V, "BUTTON", { class: !0 });
      var P = i(s);
      (d = _(P, "Previous")),
        P.forEach(r),
        (f = k(V)),
        (g = n(V, "SPAN", { class: !0 }));
      var M = i(g);
      (v = _(M, "Page ")),
        (I = _(M, l[7])),
        M.forEach(r),
        (w = k(V)),
        (y = n(V, "BUTTON", { class: !0 }));
      var $ = i(y);
      (C = _($, "Next")), $.forEach(r), V.forEach(r), this.h();
    },
    h() {
      (s.disabled = u = l[7] === 1),
        c(
          s,
          "class",
          "px-4 py-2 mx-2 fpl-button rounded disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed min-w-[100px] text-sm"
        ),
        c(g, "class", "px-4"),
        (y.disabled = p = l[7] >= l[8]),
        c(
          y,
          "class",
          "px-4 py-2 mx-2 fpl-button rounded disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed min-w-[100px] text-sm"
        ),
        c(a, "class", "flex justify-center items-center mt-4 mb-4");
    },
    m(N, V) {
      for (let P = 0; P < b.length; P += 1) b[P] && b[P].m(N, V);
      ve(N, t, V),
        ve(N, a, V),
        e(a, s),
        e(s, d),
        e(a, f),
        e(a, g),
        e(g, v),
        e(g, I),
        e(a, w),
        e(a, y),
        e(y, C),
        m || ((D = [we(s, "click", l[27]), we(y, "click", l[28])]), (m = !0));
    },
    p(N, V) {
      if (V[0] & 36) {
        x = N[5].entries;
        let P;
        for (P = 0; P < x.length; P += 1) {
          const M = Ps(N, x, P);
          b[P]
            ? b[P].p(M, V)
            : ((b[P] = As(M)), b[P].c(), b[P].m(t.parentNode, t));
        }
        for (; P < b.length; P += 1) b[P].d(1);
        b.length = x.length;
      }
      V[0] & 128 && u !== (u = N[7] === 1) && (s.disabled = u),
        V[0] & 128 && Q(I, N[7]),
        V[0] & 384 && p !== (p = N[7] >= N[8]) && (y.disabled = p);
    },
    d(N) {
      cl(b, N), N && r(t), N && r(a), (m = !1), xl(D);
    },
  };
}
function As(l) {
  let t,
    a,
    s = l[36].positionText + "",
    d,
    u,
    f,
    g,
    v =
      (l[36].principalId === l[36].username ? "Unknown" : l[36].username) + "",
    I,
    w,
    y,
    C,
    p = l[36].points + "",
    m;
  return {
    c() {
      (t = o("div")),
        (a = o("div")),
        (d = h(s)),
        (u = E()),
        (f = o("div")),
        (g = o("a")),
        (I = h(v)),
        (y = E()),
        (C = o("div")),
        (m = h(p)),
        this.h();
    },
    l(D) {
      t = n(D, "DIV", { class: !0 });
      var x = i(t);
      a = n(x, "DIV", { class: !0 });
      var b = i(a);
      (d = _(b, s)), b.forEach(r), (u = k(x)), (f = n(x, "DIV", { class: !0 }));
      var N = i(f);
      g = n(N, "A", { href: !0 });
      var V = i(g);
      (I = _(V, v)),
        V.forEach(r),
        N.forEach(r),
        (y = k(x)),
        (C = n(x, "DIV", { class: !0 }));
      var P = i(C);
      (m = _(P, p)), P.forEach(r), x.forEach(r), this.h();
    },
    h() {
      c(a, "class", "w-1/6 px-4"),
        c(g, "href", (w = `/manager?id=${l[36].principalId}&gw=${l[2]}`)),
        c(f, "class", "w-1/3 px-4"),
        c(C, "class", "w-1/2 px-4"),
        c(
          t,
          "class",
          "flex items-center p-2 justify-between py-4 border-b border-gray-700 cursor-pointer"
        );
    },
    m(D, x) {
      ve(D, t, x),
        e(t, a),
        e(a, d),
        e(t, u),
        e(t, f),
        e(f, g),
        e(g, I),
        e(t, y),
        e(t, C),
        e(C, m);
    },
    p(D, x) {
      x[0] & 32 && s !== (s = D[36].positionText + "") && Q(d, s),
        x[0] & 32 &&
          v !==
            (v =
              (D[36].principalId === D[36].username
                ? "Unknown"
                : D[36].username) + "") &&
          Q(I, v),
        x[0] & 548 &&
          w !== (w = `/manager?id=${D[36].principalId}&gw=${D[2]}`) &&
          c(g, "href", w),
        x[0] & 32 && p !== (p = D[36].points + "") && Q(m, p);
    },
    d(D) {
      D && r(t);
    },
  };
}
function wr(l) {
  let t, a, s, d;
  const u = [pr, _r],
    f = [];
  function g(v, I) {
    return v[6] ? 0 : 1;
  }
  return (
    (t = g(l)),
    (a = f[t] = u[t](l)),
    {
      c() {
        a.c(), (s = jl());
      },
      l(v) {
        a.l(v), (s = jl());
      },
      m(v, I) {
        f[t].m(v, I), ve(v, s, I), (d = !0);
      },
      p(v, I) {
        let w = t;
        (t = g(v)),
          t === w
            ? f[t].p(v, I)
            : (zt(),
              pe(f[w], 1, 1, () => {
                f[w] = null;
              }),
              Yt(),
              (a = f[t]),
              a ? a.p(v, I) : ((a = f[t] = u[t](v)), a.c()),
              me(a, 1),
              a.m(s.parentNode, s));
      },
      i(v) {
        d || (me(a), (d = !0));
      },
      o(v) {
        pe(a), (d = !1);
      },
      d(v) {
        f[t].d(v), v && r(s);
      },
    }
  );
}
let yr = 25;
function Er(l, t, a) {
  let s,
    d,
    u = !0,
    f = [],
    g,
    v = 1,
    I = 1,
    w = 1,
    y,
    C = Array.from({ length: 38 }, (R, se) => se + 1),
    p = 1,
    m,
    D,
    x,
    b = 0,
    N = 0;
  $a(async () => {
    try {
      await Kt.sync(),
        await Qt.sync(),
        (s = Kt.subscribe((se) => {
          a(
            0,
            (f = se.sort((z, ue) =>
              z.friendlyName.localeCompare(ue.friendlyName)
            ))
          );
        })),
        (d = Qt.subscribe((se) => {
          g = se;
        })),
        a(4, (y = f[0].id)),
        (D = g?.activeGameweek ?? 1),
        (x = g?.focusGameweek ?? 1),
        a(2, (I = g?.focusGameweek ?? I)),
        a(3, (w = g?.activeMonth ?? w));
      let R = await ma.getWeeklyLeaderboard();
      a(5, (m = R));
    } catch (R) {
      la.show("Error fetching leaderboard data.", "error"),
        console.error("Error fetching leaderboard data:", R);
    } finally {
      a(6, (u = !1));
    }
  }),
    Ga(() => {
      s?.(), d?.();
    });
  async function V() {
    a(6, (u = !0));
    try {
      switch (v) {
        case 1:
          a(5, (m = await ma.getWeeklyLeaderboardPage(I, p)));
          break;
        case 2:
          a(5, (m = await ma.getMonthlyLeaderboard(y, w, p)));
          break;
        case 3:
          a(5, (m = await ma.getSeasonLeaderboardPage(p)));
          break;
      }
    } catch (R) {
      la.show("Error fetching leaderboard data.", "error"),
        console.error("Error fetching leaderboard data:", R);
    } finally {
      a(6, (u = !1));
    }
  }
  const P = (R) => {
    a(2, (I = Math.max(1, Math.min(38, I + R))));
  };
  function M(R) {
    a(3, (w += R)), w > 12 ? a(3, (w = 1)) : w < 1 && a(3, (w = 12)), V();
  }
  function $(R) {
    a(7, (p = Math.max(1, Math.min(b, p + R)))), V();
  }
  function H(R) {
    a(1, (v += R)), v > 3 ? a(1, (v = 1)) : v < 1 && a(1, (v = 3)), V();
  }
  function T(R) {
    (N = (N + R + f.length) % f.length), a(4, (y = f[N].id)), V();
  }
  const S = () => H(-1);
  function O() {
    (v = ea(this)), a(1, v);
  }
  const B = () => H(1),
    K = () => P(-1);
  function F() {
    (I = ea(this)), a(2, I), a(9, C);
  }
  const Y = () => P(1),
    te = () => T(-1);
  function Z() {
    (y = ea(this)), a(4, y), a(0, f);
  }
  const ee = () => T(1),
    fe = () => M(-1);
  function ne() {
    (w = ea(this)), a(3, w);
  }
  const ce = () => M(1),
    J = () => $(-1),
    ie = () => $(1);
  return (
    (l.$$.update = () => {
      l.$$.dirty[0] & 17 && (N = f.findIndex((R) => R.id === y)),
        l.$$.dirty[0] & 32 &&
          m &&
          m.totalEntries &&
          a(8, (b = Math.ceil(Number(m.totalEntries) / yr))),
        l.$$.dirty[0] & 30 && V();
    }),
    [
      f,
      v,
      I,
      w,
      y,
      m,
      u,
      p,
      b,
      C,
      P,
      M,
      $,
      H,
      T,
      S,
      O,
      B,
      K,
      F,
      Y,
      te,
      Z,
      ee,
      fe,
      ne,
      ce,
      J,
      ie,
    ]
  );
}
class kr extends va {
  constructor(t) {
    super(), ha(this, t, Er, wr, _a, {}, null, [-1, -1]);
  }
}
function Gs(l, t, a) {
  const s = l.slice();
  return (s[15] = t[a]), (s[17] = a), s;
}
function Ms(l, t, a) {
  const s = l.slice();
  return (s[18] = t[a]), s;
}
function js(l) {
  let t,
    a,
    s = l[18] + "",
    d;
  return {
    c() {
      (t = o("option")), (a = h("Gameweek ")), (d = h(s)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var f = i(t);
      (a = _(f, "Gameweek ")), (d = _(f, s)), f.forEach(r), this.h();
    },
    h() {
      (t.__value = l[18]), (t.value = t.__value);
    },
    m(u, f) {
      ve(u, t, f), e(t, a), e(t, d);
    },
    p: gt,
    d(u) {
      u && r(t);
    },
  };
}
function Fs(l) {
  let t,
    a,
    s = l[17] + 1 + "",
    d,
    u,
    f,
    g,
    v,
    I = l[15].friendlyName + "",
    w,
    y,
    C,
    p,
    m = l[15].played + "",
    D,
    x,
    b,
    N = l[15].wins + "",
    V,
    P,
    M,
    $ = l[15].draws + "",
    H,
    T,
    S,
    O = l[15].losses + "",
    B,
    K,
    F,
    Y = l[15].goalsFor + "",
    te,
    Z,
    ee,
    fe = l[15].goalsAgainst + "",
    ne,
    ce,
    J,
    ie = l[15].goalsFor - l[15].goalsAgainst + "",
    R,
    se,
    z,
    ue = l[15].points + "",
    U,
    j,
    A;
  return (
    (g = new aa({
      props: {
        primaryColour: l[15].primaryColourHex,
        secondaryColour: l[15].secondaryColourHex,
        thirdColour: l[15].thirdColourHex,
        className: "w-6 h-6 mr-2",
      },
    })),
    {
      c() {
        (t = o("div")),
          (a = o("div")),
          (d = h(s)),
          (u = E()),
          (f = o("a")),
          Je(g.$$.fragment),
          (v = E()),
          (w = h(I)),
          (C = E()),
          (p = o("div")),
          (D = h(m)),
          (x = E()),
          (b = o("div")),
          (V = h(N)),
          (P = E()),
          (M = o("div")),
          (H = h($)),
          (T = E()),
          (S = o("div")),
          (B = h(O)),
          (K = E()),
          (F = o("div")),
          (te = h(Y)),
          (Z = E()),
          (ee = o("div")),
          (ne = h(fe)),
          (ce = E()),
          (J = o("div")),
          (R = h(ie)),
          (se = E()),
          (z = o("div")),
          (U = h(ue)),
          (j = E()),
          this.h();
      },
      l(L) {
        t = n(L, "DIV", { class: !0 });
        var G = i(t);
        a = n(G, "DIV", { class: !0 });
        var ae = i(a);
        (d = _(ae, s)),
          ae.forEach(r),
          (u = k(G)),
          (f = n(G, "A", { class: !0, href: !0 }));
        var Ve = i(f);
        Ye(g.$$.fragment, Ve),
          (v = k(Ve)),
          (w = _(Ve, I)),
          Ve.forEach(r),
          (C = k(G)),
          (p = n(G, "DIV", { class: !0 }));
        var ke = i(p);
        (D = _(ke, m)),
          ke.forEach(r),
          (x = k(G)),
          (b = n(G, "DIV", { class: !0 }));
        var re = i(b);
        (V = _(re, N)),
          re.forEach(r),
          (P = k(G)),
          (M = n(G, "DIV", { class: !0 }));
        var ye = i(M);
        (H = _(ye, $)),
          ye.forEach(r),
          (T = k(G)),
          (S = n(G, "DIV", { class: !0 }));
        var le = i(S);
        (B = _(le, O)),
          le.forEach(r),
          (K = k(G)),
          (F = n(G, "DIV", { class: !0 }));
        var be = i(F);
        (te = _(be, Y)),
          be.forEach(r),
          (Z = k(G)),
          (ee = n(G, "DIV", { class: !0 }));
        var q = i(ee);
        (ne = _(q, fe)),
          q.forEach(r),
          (ce = k(G)),
          (J = n(G, "DIV", { class: !0 }));
        var oe = i(J);
        (R = _(oe, ie)),
          oe.forEach(r),
          (se = k(G)),
          (z = n(G, "DIV", { class: !0 }));
        var X = i(z);
        (U = _(X, ue)), X.forEach(r), (j = k(G)), G.forEach(r), this.h();
      },
      h() {
        c(a, "class", "w-1/12 text-center mx-4"),
          c(f, "class", "w-3/12 flex items-center justify-start"),
          c(f, "href", (y = `/club?id=${l[15].id}`)),
          c(p, "class", "w-1/12 text-center"),
          c(b, "class", "w-1/12 text-center"),
          c(M, "class", "w-1/12 text-center"),
          c(S, "class", "w-1/12 text-center"),
          c(F, "class", "w-1/12 text-center"),
          c(ee, "class", "w-1/12 text-center"),
          c(J, "class", "w-1/12 text-center"),
          c(z, "class", "w-1/12 text-center"),
          c(
            t,
            "class",
            "flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer"
          );
      },
      m(L, G) {
        ve(L, t, G),
          e(t, a),
          e(a, d),
          e(t, u),
          e(t, f),
          Re(g, f, null),
          e(f, v),
          e(f, w),
          e(t, C),
          e(t, p),
          e(p, D),
          e(t, x),
          e(t, b),
          e(b, V),
          e(t, P),
          e(t, M),
          e(M, H),
          e(t, T),
          e(t, S),
          e(S, B),
          e(t, K),
          e(t, F),
          e(F, te),
          e(t, Z),
          e(t, ee),
          e(ee, ne),
          e(t, ce),
          e(t, J),
          e(J, R),
          e(t, se),
          e(t, z),
          e(z, U),
          e(t, j),
          (A = !0);
      },
      p(L, G) {
        const ae = {};
        G & 2 && (ae.primaryColour = L[15].primaryColourHex),
          G & 2 && (ae.secondaryColour = L[15].secondaryColourHex),
          G & 2 && (ae.thirdColour = L[15].thirdColourHex),
          g.$set(ae),
          (!A || G & 2) && I !== (I = L[15].friendlyName + "") && Q(w, I),
          (!A || (G & 2 && y !== (y = `/club?id=${L[15].id}`))) &&
            c(f, "href", y),
          (!A || G & 2) && m !== (m = L[15].played + "") && Q(D, m),
          (!A || G & 2) && N !== (N = L[15].wins + "") && Q(V, N),
          (!A || G & 2) && $ !== ($ = L[15].draws + "") && Q(H, $),
          (!A || G & 2) && O !== (O = L[15].losses + "") && Q(B, O),
          (!A || G & 2) && Y !== (Y = L[15].goalsFor + "") && Q(te, Y),
          (!A || G & 2) && fe !== (fe = L[15].goalsAgainst + "") && Q(ne, fe),
          (!A || G & 2) &&
            ie !== (ie = L[15].goalsFor - L[15].goalsAgainst + "") &&
            Q(R, ie),
          (!A || G & 2) && ue !== (ue = L[15].points + "") && Q(U, ue);
      },
      i(L) {
        A || (me(g.$$.fragment, L), (A = !0));
      },
      o(L) {
        pe(g.$$.fragment, L), (A = !1);
      },
      d(L) {
        L && r(t), qe(g);
      },
    }
  );
}
function Ir(l) {
  let t,
    a,
    s,
    d,
    u,
    f,
    g,
    v,
    I,
    w,
    y,
    C,
    p,
    m,
    D,
    x,
    b,
    N,
    V,
    P,
    M,
    $,
    H,
    T,
    S,
    O,
    B,
    K,
    F,
    Y,
    te,
    Z,
    ee,
    fe,
    ne,
    ce,
    J,
    ie,
    R,
    se,
    z,
    ue,
    U,
    j,
    A,
    L,
    G,
    ae,
    Ve,
    ke = l[2],
    re = [];
  for (let q = 0; q < ke.length; q += 1) re[q] = js(Ms(l, ke, q));
  let ye = l[1],
    le = [];
  for (let q = 0; q < ye.length; q += 1) le[q] = Fs(Gs(l, ye, q));
  const be = (q) =>
    pe(le[q], 1, 1, () => {
      le[q] = null;
    });
  return {
    c() {
      (t = o("div")),
        (a = o("div")),
        (s = o("div")),
        (d = o("button")),
        (u = h("<")),
        (g = E()),
        (v = o("select"));
      for (let q = 0; q < re.length; q += 1) re[q].c();
      (I = E()),
        (w = o("button")),
        (y = h(">")),
        (p = E()),
        (m = o("div")),
        (D = o("div")),
        (x = o("div")),
        (b = o("div")),
        (N = h("Pos")),
        (V = E()),
        (P = o("div")),
        (M = h("Team")),
        ($ = E()),
        (H = o("div")),
        (T = h("P")),
        (S = E()),
        (O = o("div")),
        (B = h("W")),
        (K = E()),
        (F = o("div")),
        (Y = h("D")),
        (te = E()),
        (Z = o("div")),
        (ee = h("L")),
        (fe = E()),
        (ne = o("div")),
        (ce = h("GF")),
        (J = E()),
        (ie = o("div")),
        (R = h("GA")),
        (se = E()),
        (z = o("div")),
        (ue = h("GD")),
        (U = E()),
        (j = o("div")),
        (A = h("PTS")),
        (L = E());
      for (let q = 0; q < le.length; q += 1) le[q].c();
      this.h();
    },
    l(q) {
      t = n(q, "DIV", { class: !0 });
      var oe = i(t);
      a = n(oe, "DIV", { class: !0 });
      var X = i(a);
      s = n(X, "DIV", { class: !0 });
      var Ie = i(s);
      d = n(Ie, "BUTTON", { class: !0 });
      var De = i(d);
      (u = _(De, "<")),
        De.forEach(r),
        (g = k(Ie)),
        (v = n(Ie, "SELECT", { class: !0 }));
      var Ce = i(v);
      for (let Pe = 0; Pe < re.length; Pe += 1) re[Pe].l(Ce);
      Ce.forEach(r), (I = k(Ie)), (w = n(Ie, "BUTTON", { class: !0 }));
      var Se = i(w);
      (y = _(Se, ">")),
        Se.forEach(r),
        Ie.forEach(r),
        X.forEach(r),
        (p = k(oe)),
        (m = n(oe, "DIV", { class: !0 }));
      var Fe = i(m);
      D = n(Fe, "DIV", { class: !0 });
      var Te = i(D);
      x = n(Te, "DIV", { class: !0 });
      var ge = i(x);
      b = n(ge, "DIV", { class: !0 });
      var st = i(b);
      (N = _(st, "Pos")),
        st.forEach(r),
        (V = k(ge)),
        (P = n(ge, "DIV", { class: !0 }));
      var wt = i(P);
      (M = _(wt, "Team")),
        wt.forEach(r),
        ($ = k(ge)),
        (H = n(ge, "DIV", { class: !0 }));
      var Le = i(H);
      (T = _(Le, "P")),
        Le.forEach(r),
        (S = k(ge)),
        (O = n(ge, "DIV", { class: !0 }));
      var xt = i(O);
      (B = _(xt, "W")),
        xt.forEach(r),
        (K = k(ge)),
        (F = n(ge, "DIV", { class: !0 }));
      var rt = i(F);
      (Y = _(rt, "D")),
        rt.forEach(r),
        (te = k(ge)),
        (Z = n(ge, "DIV", { class: !0 }));
      var yt = i(Z);
      (ee = _(yt, "L")),
        yt.forEach(r),
        (fe = k(ge)),
        (ne = n(ge, "DIV", { class: !0 }));
      var Be = i(ne);
      (ce = _(Be, "GF")),
        Be.forEach(r),
        (J = k(ge)),
        (ie = n(ge, "DIV", { class: !0 }));
      var ot = i(ie);
      (R = _(ot, "GA")),
        ot.forEach(r),
        (se = k(ge)),
        (z = n(ge, "DIV", { class: !0 }));
      var Vt = i(z);
      (ue = _(Vt, "GD")),
        Vt.forEach(r),
        (U = k(ge)),
        (j = n(ge, "DIV", { class: !0 }));
      var $t = i(j);
      (A = _($t, "PTS")), $t.forEach(r), ge.forEach(r), (L = k(Te));
      for (let Pe = 0; Pe < le.length; Pe += 1) le[Pe].l(Te);
      Te.forEach(r), Fe.forEach(r), oe.forEach(r), this.h();
    },
    h() {
      c(
        d,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (d.disabled = f = l[0] === 1),
        c(
          v,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        l[0] === void 0 && ta(() => l[8].call(v)),
        c(
          w,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (w.disabled = C = l[0] === 38),
        c(s, "class", "flex items-center space-x-2 ml-4"),
        c(a, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        c(b, "class", "w-1/12 text-center mx-4"),
        c(P, "class", "w-3/12"),
        c(H, "class", "w-1/12 text-center"),
        c(O, "class", "w-1/12 text-center"),
        c(F, "class", "w-1/12 text-center"),
        c(Z, "class", "w-1/12 text-center"),
        c(ne, "class", "w-1/12 text-center"),
        c(ie, "class", "w-1/12 text-center"),
        c(z, "class", "w-1/12 text-center"),
        c(j, "class", "w-1/12 text-center"),
        c(
          x,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        c(D, "class", "overflow-x-auto flex-1"),
        c(m, "class", "flex flex-col space-y-4 mt-4 text-xs md:text-base"),
        c(t, "class", "container-fluid mt-4");
    },
    m(q, oe) {
      ve(q, t, oe), e(t, a), e(a, s), e(s, d), e(d, u), e(s, g), e(s, v);
      for (let X = 0; X < re.length; X += 1) re[X] && re[X].m(v, null);
      bt(v, l[0], !0),
        e(s, I),
        e(s, w),
        e(w, y),
        e(t, p),
        e(t, m),
        e(m, D),
        e(D, x),
        e(x, b),
        e(b, N),
        e(x, V),
        e(x, P),
        e(P, M),
        e(x, $),
        e(x, H),
        e(H, T),
        e(x, S),
        e(x, O),
        e(O, B),
        e(x, K),
        e(x, F),
        e(F, Y),
        e(x, te),
        e(x, Z),
        e(Z, ee),
        e(x, fe),
        e(x, ne),
        e(ne, ce),
        e(x, J),
        e(x, ie),
        e(ie, R),
        e(x, se),
        e(x, z),
        e(z, ue),
        e(x, U),
        e(x, j),
        e(j, A),
        e(D, L);
      for (let X = 0; X < le.length; X += 1) le[X] && le[X].m(D, null);
      (G = !0),
        ae ||
          ((Ve = [
            we(d, "click", l[7]),
            we(v, "change", l[8]),
            we(w, "click", l[9]),
          ]),
          (ae = !0));
    },
    p(q, [oe]) {
      if (
        ((!G || (oe & 5 && f !== (f = q[0] === 1))) && (d.disabled = f), oe & 4)
      ) {
        ke = q[2];
        let X;
        for (X = 0; X < ke.length; X += 1) {
          const Ie = Ms(q, ke, X);
          re[X]
            ? re[X].p(Ie, oe)
            : ((re[X] = js(Ie)), re[X].c(), re[X].m(v, null));
        }
        for (; X < re.length; X += 1) re[X].d(1);
        re.length = ke.length;
      }
      if (
        (oe & 5 && bt(v, q[0]),
        (!G || (oe & 5 && C !== (C = q[0] === 38))) && (w.disabled = C),
        oe & 2)
      ) {
        ye = q[1];
        let X;
        for (X = 0; X < ye.length; X += 1) {
          const Ie = Gs(q, ye, X);
          le[X]
            ? (le[X].p(Ie, oe), me(le[X], 1))
            : ((le[X] = Fs(Ie)), le[X].c(), me(le[X], 1), le[X].m(D, null));
        }
        for (zt(), X = ye.length; X < le.length; X += 1) be(X);
        Yt();
      }
    },
    i(q) {
      if (!G) {
        for (let oe = 0; oe < ye.length; oe += 1) me(le[oe]);
        G = !0;
      }
    },
    o(q) {
      le = le.filter(Boolean);
      for (let oe = 0; oe < le.length; oe += 1) pe(le[oe]);
      G = !1;
    },
    d(q) {
      q && r(t), cl(re, q), cl(le, q), (ae = !1), xl(Ve);
    },
  };
}
function Dr(l, t, a) {
  let s = [],
    d = [],
    u,
    f = [],
    g = 1,
    v = Array.from({ length: 38 }, (N, V) => V + 1),
    I = [],
    w,
    y,
    C;
  $a(async () => {
    try {
      await Kt.sync(),
        await Fl.sync(),
        await Qt.sync(),
        (w = Kt.subscribe((N) => {
          a(4, (s = N));
        })),
        (y = Fl.subscribe((N) => {
          a(5, (d = N)),
            a(
              6,
              (f = d.map((V) => ({
                fixture: V,
                homeTeam: m(V.homeTeamId),
                awayTeam: m(V.awayTeamId),
              })))
            );
        })),
        (C = Qt.subscribe((N) => {
          u = N;
        }));
    } catch (N) {
      la.show("Error fetching league table.", "error"),
        console.error("Error fetching league table:", N);
    } finally {
    }
  }),
    Ga(() => {
      w?.(), y?.(), C?.();
    });
  const p = (N) => {
    a(0, (g = Math.max(1, Math.min(38, g + N))));
  };
  function m(N) {
    return s.find((V) => V.id === N);
  }
  const D = () => p(-1);
  function x() {
    (g = ea(this)), a(0, g), a(2, v);
  }
  const b = () => p(1);
  return (
    (l.$$.update = () => {
      l.$$.dirty & 113 &&
        d.length > 0 &&
        s.length > 0 &&
        a(1, (I = zs(f, s, g)));
    }),
    [g, I, v, p, s, d, f, D, x, b]
  );
}
class xr extends va {
  constructor(t) {
    super(), ha(this, t, Dr, Ir, _a, {});
  }
}
function Vr(l) {
  let t;
  return {
    c() {
      t = h("-");
    },
    l(a) {
      t = _(a, "-");
    },
    m(a, s) {
      ve(a, t, s);
    },
    p: gt,
    d(a) {
      a && r(t);
    },
  };
}
function Tr(l) {
  let t,
    a = l[10].username + "",
    s,
    d;
  return {
    c() {
      (t = o("a")), (s = h(a)), this.h();
    },
    l(u) {
      t = n(u, "A", { href: !0 });
      var f = i(t);
      (s = _(f, a)), f.forEach(r), this.h();
    },
    h() {
      c(t, "href", (d = `/manager?id=${l[10].principalId}&gw=${l[1]}`));
    },
    m(u, f) {
      ve(u, t, f), e(t, s);
    },
    p(u, f) {
      f & 1024 && a !== (a = u[10].username + "") && Q(s, a),
        f & 1026 &&
          d !== (d = `/manager?id=${u[10].principalId}&gw=${u[1]}`) &&
          c(t, "href", d);
    },
    d(u) {
      u && r(t);
    },
  };
}
function Nr(l) {
  let t;
  return {
    c() {
      t = h("-");
    },
    l(a) {
      t = _(a, "-");
    },
    m(a, s) {
      ve(a, t, s);
    },
    p: gt,
    d(a) {
      a && r(t);
    },
  };
}
function Pr(l) {
  let t = l[10].points + "",
    a,
    s;
  return {
    c() {
      (a = h(t)), (s = h(" points"));
    },
    l(d) {
      (a = _(d, t)), (s = _(d, " points"));
    },
    m(d, u) {
      ve(d, a, u), ve(d, s, u);
    },
    p(d, u) {
      u & 1024 && t !== (t = d[10].points + "") && Q(a, t);
    },
    d(d) {
      d && r(a), d && r(s);
    },
  };
}
function Bs(l) {
  let t, a, s, d, u, f, g;
  return {
    c() {
      (t = o("li")), (a = o("button")), (s = h("Points")), this.h();
    },
    l(v) {
      t = n(v, "LI", { class: !0 });
      var I = i(t);
      a = n(I, "BUTTON", { class: !0 });
      var w = i(a);
      (s = _(w, "Points")), w.forEach(r), I.forEach(r), this.h();
    },
    h() {
      c(
        a,
        "class",
        (d =
          Ze(`p-2 ${l[0] === "points" ? "text-white" : "text-gray-400"}`) +
          " svelte-18fkfyi")
      ),
        c(
          t,
          "class",
          (u =
            Ze(`mr-4 ${l[0] === "points" ? "active-tab" : ""}`) +
            " svelte-18fkfyi")
        );
    },
    m(v, I) {
      ve(v, t, I),
        e(t, a),
        e(a, s),
        f || ((g = we(a, "click", l[16])), (f = !0));
    },
    p(v, I) {
      I & 1 &&
        d !==
          (d =
            Ze(`p-2 ${v[0] === "points" ? "text-white" : "text-gray-400"}`) +
            " svelte-18fkfyi") &&
        c(a, "class", d),
        I & 1 &&
          u !==
            (u =
              Ze(`mr-4 ${v[0] === "points" ? "active-tab" : ""}`) +
              " svelte-18fkfyi") &&
          c(t, "class", u);
    },
    d(v) {
      v && r(t), (f = !1), g();
    },
  };
}
function Cr(l) {
  let t, a;
  return (
    (t = new xr({})),
    {
      c() {
        Je(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Re(t, s, d), (a = !0);
      },
      i(s) {
        a || (me(t.$$.fragment, s), (a = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (a = !1);
      },
      d(s) {
        qe(t, s);
      },
    }
  );
}
function Sr(l) {
  let t, a;
  return (
    (t = new kr({})),
    {
      c() {
        Je(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Re(t, s, d), (a = !0);
      },
      i(s) {
        a || (me(t.$$.fragment, s), (a = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (a = !1);
      },
      d(s) {
        qe(t, s);
      },
    }
  );
}
function $r(l) {
  let t, a;
  return (
    (t = new hr({})),
    {
      c() {
        Je(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Re(t, s, d), (a = !0);
      },
      i(s) {
        a || (me(t.$$.fragment, s), (a = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (a = !1);
      },
      d(s) {
        qe(t, s);
      },
    }
  );
}
function Or(l) {
  let t, a;
  return (
    (t = new rr({})),
    {
      c() {
        Je(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Re(t, s, d), (a = !0);
      },
      i(s) {
        a || (me(t.$$.fragment, s), (a = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (a = !1);
      },
      d(s) {
        qe(t, s);
      },
    }
  );
}
function Lr(l) {
  let t,
    a,
    s,
    d,
    u,
    f,
    g,
    v,
    I,
    w,
    y,
    C,
    p,
    m,
    D,
    x,
    b,
    N,
    V,
    P,
    M,
    $,
    H,
    T,
    S,
    O,
    B,
    K,
    F,
    Y,
    te,
    Z,
    ee,
    fe,
    ne,
    ce,
    J,
    ie,
    R,
    se,
    z,
    ue,
    U,
    j,
    A,
    L,
    G,
    ae,
    Ve,
    ke,
    re,
    ye,
    le,
    be,
    q,
    oe,
    X,
    Ie,
    De,
    Ce,
    Se,
    Fe,
    Te = (l[11] ? l[11].abbreviatedName : "") + "",
    ge,
    st,
    wt,
    Le,
    xt,
    rt,
    yt,
    Be,
    ot = (l[12] ? l[12].abbreviatedName : "") + "",
    Vt,
    $t,
    Pe,
    nt,
    Bl,
    it,
    Et,
    dl,
    Vl,
    Xt,
    $e,
    Zt,
    Ot,
    Ul,
    ct,
    Lt,
    el,
    Wl,
    tl,
    ll,
    Ht,
    Jl,
    al,
    dt,
    fl,
    Rl,
    et,
    sl,
    At,
    ql,
    Ke,
    ft,
    Tl,
    Nl,
    rl,
    ul,
    Tt,
    Kl,
    Nt,
    ml,
    Ue,
    Qe,
    ze,
    Gt,
    tt,
    vl,
    hl,
    Pl,
    ol,
    nl,
    Pt,
    Ct,
    ut,
    Mt,
    Cl,
    zl,
    mt,
    vt,
    Sl,
    $l,
    jt,
    _l,
    He,
    Ae,
    xe,
    St,
    pl;
  (G = new aa({
    props: {
      primaryColour: l[11] ? l[11].primaryColourHex : "",
      secondaryColour: l[11] ? l[11].secondaryColourHex : "",
      thirdColour: l[11] ? l[11].thirdColourHex : "",
    },
  })),
    (oe = new aa({
      props: {
        primaryColour: l[12] ? l[12].primaryColourHex : "",
        secondaryColour: l[12] ? l[12].secondaryColourHex : "",
        thirdColour: l[12] ? l[12].thirdColourHex : "",
      },
    }));
  function sa(W, de) {
    return W[10] ? Tr : Vr;
  }
  let Ol = sa(l),
    We = Ol(l);
  function Ll(W, de) {
    return W[10] ? Pr : Nr;
  }
  let bl = Ll(l),
    lt = bl(l),
    Ne = l[13] && Bs(l);
  const Ft = [Or, $r, Sr, Cr],
    ht = [];
  function ra(W, de) {
    return W[0] === "fixtures"
      ? 0
      : W[0] === "points"
      ? 1
      : W[0] === "leaderboards"
      ? 2
      : W[0] === "league-table"
      ? 3
      : -1;
  }
  return (
    ~(He = ra(l)) && (Ae = ht[He] = Ft[He](l)),
    {
      c() {
        (t = o("div")),
          (a = o("div")),
          (s = o("div")),
          (d = o("div")),
          (u = o("p")),
          (f = h("Gameweek")),
          (g = E()),
          (v = o("p")),
          (I = h(l[1])),
          (w = E()),
          (y = o("p")),
          (C = h(l[2])),
          (p = E()),
          (m = o("div")),
          (D = E()),
          (x = o("div")),
          (b = o("p")),
          (N = h("Managers")),
          (V = E()),
          (P = o("p")),
          (M = h(l[3])),
          ($ = E()),
          (H = o("p")),
          (T = h("Total")),
          (S = E()),
          (O = o("div")),
          (B = E()),
          (K = o("div")),
          (F = o("p")),
          (Y = h("Weekly Prize Pool")),
          (te = E()),
          (Z = o("p")),
          (ee = h("0")),
          (fe = E()),
          (ne = o("p")),
          (ce = h("$FPL")),
          (J = E()),
          (ie = o("div")),
          (R = o("div")),
          (se = o("p")),
          (z = h("Next Game:")),
          (ue = E()),
          (U = o("div")),
          (j = o("div")),
          (A = o("div")),
          (L = o("a")),
          Je(G.$$.fragment),
          (Ve = E()),
          (ke = o("div")),
          (re = o("p")),
          (ye = h("v")),
          (le = E()),
          (be = o("div")),
          (q = o("a")),
          Je(oe.$$.fragment),
          (Ie = E()),
          (De = o("div")),
          (Ce = o("div")),
          (Se = o("p")),
          (Fe = o("a")),
          (ge = h(Te)),
          (wt = E()),
          (Le = o("div")),
          (xt = E()),
          (rt = o("div")),
          (yt = o("p")),
          (Be = o("a")),
          (Vt = h(ot)),
          (Pe = E()),
          (nt = o("div")),
          (Bl = E()),
          (it = o("div")),
          (Et = o("p")),
          (dl = h("Kick Off:")),
          (Vl = E()),
          (Xt = o("div")),
          ($e = o("p")),
          (Zt = h(l[4])),
          (Ot = o("span")),
          (Ul = h("d")),
          (ct = h(`
              : `)),
          (Lt = h(l[5])),
          (el = o("span")),
          (Wl = h("h")),
          (tl = h(`
              : `)),
          (ll = h(l[6])),
          (Ht = o("span")),
          (Jl = h("m")),
          (al = E()),
          (dt = o("p")),
          (fl = h(l[7])),
          (Rl = h(" | ")),
          (et = h(l[8])),
          (sl = E()),
          (At = o("div")),
          (ql = E()),
          (Ke = o("div")),
          (ft = o("p")),
          (Tl = h("GW ")),
          (Nl = h(l[9])),
          (rl = h(" High Score")),
          (ul = E()),
          (Tt = o("p")),
          We.c(),
          (Kl = E()),
          (Nt = o("p")),
          lt.c(),
          (ml = E()),
          (Ue = o("div")),
          (Qe = o("div")),
          (ze = o("ul")),
          (Gt = o("li")),
          (tt = o("button")),
          (vl = h("Fixtures")),
          (ol = E()),
          Ne && Ne.c(),
          (nl = E()),
          (Pt = o("li")),
          (Ct = o("button")),
          (ut = h("Leaderboards")),
          (zl = E()),
          (mt = o("li")),
          (vt = o("button")),
          (Sl = h("Table")),
          (_l = E()),
          Ae && Ae.c(),
          this.h();
      },
      l(W) {
        t = n(W, "DIV", { class: !0 });
        var de = i(t);
        a = n(de, "DIV", { class: !0 });
        var at = i(a);
        s = n(at, "DIV", { class: !0 });
        var Oe = i(s);
        d = n(Oe, "DIV", { class: !0 });
        var _t = i(d);
        u = n(_t, "P", { class: !0 });
        var gl = i(u);
        (f = _(gl, "Gameweek")),
          gl.forEach(r),
          (g = k(_t)),
          (v = n(_t, "P", { class: !0 }));
        var Bt = i(v);
        (I = _(Bt, l[1])),
          Bt.forEach(r),
          (w = k(_t)),
          (y = n(_t, "P", { class: !0 }));
        var wl = i(y);
        (C = _(wl, l[2])),
          wl.forEach(r),
          _t.forEach(r),
          (p = k(Oe)),
          (m = n(Oe, "DIV", { class: !0, style: !0 })),
          i(m).forEach(r),
          (D = k(Oe)),
          (x = n(Oe, "DIV", { class: !0 }));
        var il = i(x);
        b = n(il, "P", { class: !0 });
        var oa = i(b);
        (N = _(oa, "Managers")),
          oa.forEach(r),
          (V = k(il)),
          (P = n(il, "P", { class: !0 }));
        var yl = i(P);
        (M = _(yl, l[3])),
          yl.forEach(r),
          ($ = k(il)),
          (H = n(il, "P", { class: !0 }));
        var Hl = i(H);
        (T = _(Hl, "Total")),
          Hl.forEach(r),
          il.forEach(r),
          (S = k(Oe)),
          (O = n(Oe, "DIV", { class: !0, style: !0 })),
          i(O).forEach(r),
          (B = k(Oe)),
          (K = n(Oe, "DIV", { class: !0 }));
        var Ut = i(K);
        F = n(Ut, "P", { class: !0 });
        var na = i(F);
        (Y = _(na, "Weekly Prize Pool")),
          na.forEach(r),
          (te = k(Ut)),
          (Z = n(Ut, "P", { class: !0 }));
        var El = i(Z);
        (ee = _(El, "0")),
          El.forEach(r),
          (fe = k(Ut)),
          (ne = n(Ut, "P", { class: !0 }));
        var Wt = i(ne);
        (ce = _(Wt, "$FPL")),
          Wt.forEach(r),
          Ut.forEach(r),
          Oe.forEach(r),
          (J = k(at)),
          (ie = n(at, "DIV", { class: !0 }));
        var pt = i(ie);
        R = n(pt, "DIV", { class: !0 });
        var Ee = i(R);
        se = n(Ee, "P", { class: !0 });
        var ia = i(se);
        (z = _(ia, "Next Game:")),
          ia.forEach(r),
          (ue = k(Ee)),
          (U = n(Ee, "DIV", { class: !0 }));
        var pa = i(U);
        j = n(pa, "DIV", { class: !0 });
        var kt = i(j);
        A = n(kt, "DIV", { class: !0 });
        var ba = i(A);
        L = n(ba, "A", { href: !0 });
        var Ge = i(L);
        Ye(G.$$.fragment, Ge),
          Ge.forEach(r),
          ba.forEach(r),
          (Ve = k(kt)),
          (ke = n(kt, "DIV", { class: !0 }));
        var Me = i(ke);
        re = n(Me, "P", { class: !0 });
        var je = i(re);
        (ye = _(je, "v")),
          je.forEach(r),
          Me.forEach(r),
          (le = k(kt)),
          (be = n(kt, "DIV", { class: !0 }));
        var _e = i(be);
        q = n(_e, "A", { href: !0 });
        var he = i(q);
        Ye(oe.$$.fragment, he),
          he.forEach(r),
          _e.forEach(r),
          kt.forEach(r),
          pa.forEach(r),
          (Ie = k(Ee)),
          (De = n(Ee, "DIV", { class: !0 }));
        var Xe = i(De);
        Ce = n(Xe, "DIV", { class: !0 });
        var Al = i(Ce);
        Se = n(Al, "P", { class: !0 });
        var ga = i(Se);
        Fe = n(ga, "A", { class: !0, href: !0 });
        var Yl = i(Fe);
        (ge = _(Yl, Te)),
          Yl.forEach(r),
          ga.forEach(r),
          Al.forEach(r),
          (wt = k(Xe)),
          (Le = n(Xe, "DIV", { class: !0 })),
          i(Le).forEach(r),
          (xt = k(Xe)),
          (rt = n(Xe, "DIV", { class: !0 }));
        var Ql = i(rt);
        yt = n(Ql, "P", { class: !0 });
        var wa = i(yt);
        Be = n(wa, "A", { class: !0, href: !0 });
        var Xl = i(Be);
        (Vt = _(Xl, ot)),
          Xl.forEach(r),
          wa.forEach(r),
          Ql.forEach(r),
          Xe.forEach(r),
          Ee.forEach(r),
          (Pe = k(pt)),
          (nt = n(pt, "DIV", { class: !0, style: !0 })),
          i(nt).forEach(r),
          (Bl = k(pt)),
          (it = n(pt, "DIV", { class: !0 }));
        var It = i(it);
        Et = n(It, "P", { class: !0 });
        var Gl = i(Et);
        (dl = _(Gl, "Kick Off:")),
          Gl.forEach(r),
          (Vl = k(It)),
          (Xt = n(It, "DIV", { class: !0 }));
        var ya = i(Xt);
        $e = n(ya, "P", { class: !0 });
        var Dt = i($e);
        (Zt = _(Dt, l[4])), (Ot = n(Dt, "SPAN", { class: !0 }));
        var Ea = i(Ot);
        (Ul = _(Ea, "d")),
          Ea.forEach(r),
          (ct = _(
            Dt,
            `
              : `
          )),
          (Lt = _(Dt, l[5])),
          (el = n(Dt, "SPAN", { class: !0 }));
        var kl = i(el);
        (Wl = _(kl, "h")),
          kl.forEach(r),
          (tl = _(
            Dt,
            `
              : `
          )),
          (ll = _(Dt, l[6])),
          (Ht = n(Dt, "SPAN", { class: !0 }));
        var ka = i(Ht);
        (Jl = _(ka, "m")),
          ka.forEach(r),
          Dt.forEach(r),
          ya.forEach(r),
          (al = k(It)),
          (dt = n(It, "P", { class: !0 }));
        var Zl = i(dt);
        (fl = _(Zl, l[7])),
          (Rl = _(Zl, " | ")),
          (et = _(Zl, l[8])),
          Zl.forEach(r),
          It.forEach(r),
          (sl = k(pt)),
          (At = n(pt, "DIV", { class: !0, style: !0 })),
          i(At).forEach(r),
          (ql = k(pt)),
          (Ke = n(pt, "DIV", { class: !0 }));
        var Il = i(Ke);
        ft = n(Il, "P", { class: !0 });
        var Jt = i(ft);
        (Tl = _(Jt, "GW ")),
          (Nl = _(Jt, l[9])),
          (rl = _(Jt, " High Score")),
          Jt.forEach(r),
          (ul = k(Il)),
          (Tt = n(Il, "P", { class: !0 }));
        var Ia = i(Tt);
        We.l(Ia), Ia.forEach(r), (Kl = k(Il)), (Nt = n(Il, "P", { class: !0 }));
        var Da = i(Nt);
        lt.l(Da),
          Da.forEach(r),
          Il.forEach(r),
          pt.forEach(r),
          at.forEach(r),
          de.forEach(r),
          (ml = k(W)),
          (Ue = n(W, "DIV", { class: !0 }));
        var xa = i(Ue);
        Qe = n(xa, "DIV", { class: !0 });
        var Rt = i(Qe);
        ze = n(Rt, "UL", { class: !0 });
        var qt = i(ze);
        Gt = n(qt, "LI", { class: !0 });
        var Va = i(Gt);
        tt = n(Va, "BUTTON", { class: !0 });
        var Ta = i(tt);
        (vl = _(Ta, "Fixtures")),
          Ta.forEach(r),
          Va.forEach(r),
          (ol = k(qt)),
          Ne && Ne.l(qt),
          (nl = k(qt)),
          (Pt = n(qt, "LI", { class: !0 }));
        var Dl = i(Pt);
        Ct = n(Dl, "BUTTON", { class: !0 });
        var Na = i(Ct);
        (ut = _(Na, "Leaderboards")),
          Na.forEach(r),
          Dl.forEach(r),
          (zl = k(qt)),
          (mt = n(qt, "LI", { class: !0 }));
        var Pa = i(mt);
        vt = n(Pa, "BUTTON", { class: !0 });
        var Ca = i(vt);
        (Sl = _(Ca, "Table")),
          Ca.forEach(r),
          Pa.forEach(r),
          qt.forEach(r),
          (_l = k(Rt)),
          Ae && Ae.l(Rt),
          Rt.forEach(r),
          xa.forEach(r),
          this.h();
      },
      h() {
        c(u, "class", "text-gray-300 text-xs"),
          c(v, "class", "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold"),
          c(y, "class", "text-gray-300 text-xs"),
          c(d, "class", "flex-grow"),
          c(m, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
          Ml(m, "min-width", "2px"),
          Ml(m, "min-height", "50px"),
          c(b, "class", "text-gray-300 text-xs"),
          c(P, "class", "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold"),
          c(H, "class", "text-gray-300 text-xs"),
          c(x, "class", "flex-grow"),
          c(O, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
          Ml(O, "min-width", "2px"),
          Ml(O, "min-height", "50px"),
          c(F, "class", "text-gray-300 text-xs"),
          c(Z, "class", "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold"),
          c(ne, "class", "text-gray-300 text-xs"),
          c(K, "class", "flex-grow"),
          c(
            s,
            "class",
            "flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
          ),
          c(se, "class", "text-gray-300 text-xs"),
          c(L, "href", (ae = `/club?id=${l[11] ? l[11].id : -1}`)),
          c(A, "class", "w-10 ml-4 mr-4"),
          c(re, "class", "text-xs mt-2 mb-2 font-bold"),
          c(ke, "class", "w-v ml-1 mr-1 flex justify-center svelte-18fkfyi"),
          c(q, "href", (X = `/club?id=${l[12] ? l[12].id : -1}`)),
          c(be, "class", "w-10 ml-4"),
          c(j, "class", "flex justify-center items-center"),
          c(U, "class", "flex justify-center mb-2 mt-2"),
          c(Fe, "class", "text-gray-300 text-xs text-center"),
          c(Fe, "href", (st = `/club?id=${l[11] ? l[11].id : -1}`)),
          c(Se, "class", "text-gray-300 text-xs text-center"),
          c(Ce, "class", "w-10 ml-4 mr-4"),
          c(Le, "class", "w-v ml-1 mr-1 svelte-18fkfyi"),
          c(Be, "class", "text-gray-300 text-xs text-center"),
          c(Be, "href", ($t = `/club?id=${l[12] ? l[12].id : -1}`)),
          c(yt, "class", "text-gray-300 text-xs text-center"),
          c(rt, "class", "w-10 ml-4"),
          c(De, "class", "flex justify-center"),
          c(R, "class", "flex-grow mb-4 lg:mb-0"),
          c(
            nt,
            "class",
            "h-px bg-gray-400 w-full lg:w-px lg:h-full lg:self-stretch"
          ),
          Ml(nt, "min-height", "2px"),
          Ml(nt, "min-width", "2px"),
          c(Et, "class", "text-gray-300 text-xs mt-4 lg:mt-0"),
          c(Ot, "class", "text-gray-300 text-xs ml-1"),
          c(el, "class", "text-gray-300 text-xs ml-1"),
          c(Ht, "class", "text-gray-300 text-xs ml-1"),
          c(
            $e,
            "class",
            "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold"
          ),
          c(Xt, "class", "flex"),
          c(dt, "class", "text-gray-300 text-xs"),
          c(it, "class", "flex-grow mb-4 lg:mb-0"),
          c(
            At,
            "class",
            "h-px bg-gray-400 w-full lg:w-px lg:h-full lg:self-stretch"
          ),
          Ml(At, "min-height", "2px"),
          Ml(At, "min-width", "2px"),
          c(ft, "class", "text-gray-300 text-xs mt-4 lg:mt-0"),
          c(
            Tt,
            "class",
            "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold max-w-[200px] truncate"
          ),
          c(Nt, "class", "text-gray-300 text-xs"),
          c(Ke, "class", "flex-grow"),
          c(
            ie,
            "class",
            "flex flex-col lg:flex-row justify-start lg:items-center text-white space-x-0 lg:space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
          ),
          c(a, "class", "flex flex-col lg:flex-row"),
          c(t, "class", "m-4"),
          c(
            tt,
            "class",
            (hl =
              Ze(
                `p-2 ${l[0] === "fixtures" ? "text-white" : "text-gray-400"}`
              ) + " svelte-18fkfyi")
          ),
          c(
            Gt,
            "class",
            (Pl =
              Ze(`mr-4 ${l[0] === "fixtures" ? "active-tab" : ""}`) +
              " svelte-18fkfyi")
          ),
          c(
            Ct,
            "class",
            (Mt =
              Ze(
                `p-2 ${
                  l[0] === "leaderboards" ? "text-white" : "text-gray-400"
                }`
              ) + " svelte-18fkfyi")
          ),
          c(
            Pt,
            "class",
            (Cl =
              Ze(`mr-4 ${l[0] === "leaderboards" ? "active-tab" : ""}`) +
              " svelte-18fkfyi")
          ),
          c(
            vt,
            "class",
            ($l =
              Ze(
                `p-2 ${
                  l[0] === "league-table" ? "text-white" : "text-gray-400"
                }`
              ) + " svelte-18fkfyi")
          ),
          c(
            mt,
            "class",
            (jt =
              Ze(`mr-4 ${l[0] === "league-table" ? "active-tab" : ""}`) +
              " svelte-18fkfyi")
          ),
          c(
            ze,
            "class",
            "flex bg-light-gray px-4 pt-2 text-sm sm:text-base md:text-lg"
          ),
          c(Qe, "class", "bg-panel rounded-md mx-4"),
          c(Ue, "class", "mx-4");
      },
      m(W, de) {
        ve(W, t, de),
          e(t, a),
          e(a, s),
          e(s, d),
          e(d, u),
          e(u, f),
          e(d, g),
          e(d, v),
          e(v, I),
          e(d, w),
          e(d, y),
          e(y, C),
          e(s, p),
          e(s, m),
          e(s, D),
          e(s, x),
          e(x, b),
          e(b, N),
          e(x, V),
          e(x, P),
          e(P, M),
          e(x, $),
          e(x, H),
          e(H, T),
          e(s, S),
          e(s, O),
          e(s, B),
          e(s, K),
          e(K, F),
          e(F, Y),
          e(K, te),
          e(K, Z),
          e(Z, ee),
          e(K, fe),
          e(K, ne),
          e(ne, ce),
          e(a, J),
          e(a, ie),
          e(ie, R),
          e(R, se),
          e(se, z),
          e(R, ue),
          e(R, U),
          e(U, j),
          e(j, A),
          e(A, L),
          Re(G, L, null),
          e(j, Ve),
          e(j, ke),
          e(ke, re),
          e(re, ye),
          e(j, le),
          e(j, be),
          e(be, q),
          Re(oe, q, null),
          e(R, Ie),
          e(R, De),
          e(De, Ce),
          e(Ce, Se),
          e(Se, Fe),
          e(Fe, ge),
          e(De, wt),
          e(De, Le),
          e(De, xt),
          e(De, rt),
          e(rt, yt),
          e(yt, Be),
          e(Be, Vt),
          e(ie, Pe),
          e(ie, nt),
          e(ie, Bl),
          e(ie, it),
          e(it, Et),
          e(Et, dl),
          e(it, Vl),
          e(it, Xt),
          e(Xt, $e),
          e($e, Zt),
          e($e, Ot),
          e(Ot, Ul),
          e($e, ct),
          e($e, Lt),
          e($e, el),
          e(el, Wl),
          e($e, tl),
          e($e, ll),
          e($e, Ht),
          e(Ht, Jl),
          e(it, al),
          e(it, dt),
          e(dt, fl),
          e(dt, Rl),
          e(dt, et),
          e(ie, sl),
          e(ie, At),
          e(ie, ql),
          e(ie, Ke),
          e(Ke, ft),
          e(ft, Tl),
          e(ft, Nl),
          e(ft, rl),
          e(Ke, ul),
          e(Ke, Tt),
          We.m(Tt, null),
          e(Ke, Kl),
          e(Ke, Nt),
          lt.m(Nt, null),
          ve(W, ml, de),
          ve(W, Ue, de),
          e(Ue, Qe),
          e(Qe, ze),
          e(ze, Gt),
          e(Gt, tt),
          e(tt, vl),
          e(ze, ol),
          Ne && Ne.m(ze, null),
          e(ze, nl),
          e(ze, Pt),
          e(Pt, Ct),
          e(Ct, ut),
          e(ze, zl),
          e(ze, mt),
          e(mt, vt),
          e(vt, Sl),
          e(Qe, _l),
          ~He && ht[He].m(Qe, null),
          (xe = !0),
          St ||
            ((pl = [
              we(tt, "click", l[15]),
              we(Ct, "click", l[17]),
              we(vt, "click", l[18]),
            ]),
            (St = !0));
      },
      p(W, de) {
        (!xe || de & 2) && Q(I, W[1]),
          (!xe || de & 4) && Q(C, W[2]),
          (!xe || de & 8) && Q(M, W[3]);
        const at = {};
        de & 2048 && (at.primaryColour = W[11] ? W[11].primaryColourHex : ""),
          de & 2048 &&
            (at.secondaryColour = W[11] ? W[11].secondaryColourHex : ""),
          de & 2048 && (at.thirdColour = W[11] ? W[11].thirdColourHex : ""),
          G.$set(at),
          (!xe ||
            (de & 2048 && ae !== (ae = `/club?id=${W[11] ? W[11].id : -1}`))) &&
            c(L, "href", ae);
        const Oe = {};
        de & 4096 && (Oe.primaryColour = W[12] ? W[12].primaryColourHex : ""),
          de & 4096 &&
            (Oe.secondaryColour = W[12] ? W[12].secondaryColourHex : ""),
          de & 4096 && (Oe.thirdColour = W[12] ? W[12].thirdColourHex : ""),
          oe.$set(Oe),
          (!xe ||
            (de & 4096 && X !== (X = `/club?id=${W[12] ? W[12].id : -1}`))) &&
            c(q, "href", X),
          (!xe || de & 2048) &&
            Te !== (Te = (W[11] ? W[11].abbreviatedName : "") + "") &&
            Q(ge, Te),
          (!xe ||
            (de & 2048 && st !== (st = `/club?id=${W[11] ? W[11].id : -1}`))) &&
            c(Fe, "href", st),
          (!xe || de & 4096) &&
            ot !== (ot = (W[12] ? W[12].abbreviatedName : "") + "") &&
            Q(Vt, ot),
          (!xe ||
            (de & 4096 && $t !== ($t = `/club?id=${W[12] ? W[12].id : -1}`))) &&
            c(Be, "href", $t),
          (!xe || de & 16) && Q(Zt, W[4]),
          (!xe || de & 32) && Q(Lt, W[5]),
          (!xe || de & 64) && Q(ll, W[6]),
          (!xe || de & 128) && Q(fl, W[7]),
          (!xe || de & 256) && Q(et, W[8]),
          (!xe || de & 512) && Q(Nl, W[9]),
          Ol === (Ol = sa(W)) && We
            ? We.p(W, de)
            : (We.d(1), (We = Ol(W)), We && (We.c(), We.m(Tt, null))),
          bl === (bl = Ll(W)) && lt
            ? lt.p(W, de)
            : (lt.d(1), (lt = bl(W)), lt && (lt.c(), lt.m(Nt, null))),
          (!xe ||
            (de & 1 &&
              hl !==
                (hl =
                  Ze(
                    `p-2 ${
                      W[0] === "fixtures" ? "text-white" : "text-gray-400"
                    }`
                  ) + " svelte-18fkfyi"))) &&
            c(tt, "class", hl),
          (!xe ||
            (de & 1 &&
              Pl !==
                (Pl =
                  Ze(`mr-4 ${W[0] === "fixtures" ? "active-tab" : ""}`) +
                  " svelte-18fkfyi"))) &&
            c(Gt, "class", Pl),
          W[13]
            ? Ne
              ? Ne.p(W, de)
              : ((Ne = Bs(W)), Ne.c(), Ne.m(ze, nl))
            : Ne && (Ne.d(1), (Ne = null)),
          (!xe ||
            (de & 1 &&
              Mt !==
                (Mt =
                  Ze(
                    `p-2 ${
                      W[0] === "leaderboards" ? "text-white" : "text-gray-400"
                    }`
                  ) + " svelte-18fkfyi"))) &&
            c(Ct, "class", Mt),
          (!xe ||
            (de & 1 &&
              Cl !==
                (Cl =
                  Ze(`mr-4 ${W[0] === "leaderboards" ? "active-tab" : ""}`) +
                  " svelte-18fkfyi"))) &&
            c(Pt, "class", Cl),
          (!xe ||
            (de & 1 &&
              $l !==
                ($l =
                  Ze(
                    `p-2 ${
                      W[0] === "league-table" ? "text-white" : "text-gray-400"
                    }`
                  ) + " svelte-18fkfyi"))) &&
            c(vt, "class", $l),
          (!xe ||
            (de & 1 &&
              jt !==
                (jt =
                  Ze(`mr-4 ${W[0] === "league-table" ? "active-tab" : ""}`) +
                  " svelte-18fkfyi"))) &&
            c(mt, "class", jt);
        let _t = He;
        (He = ra(W)),
          He !== _t &&
            (Ae &&
              (zt(),
              pe(ht[_t], 1, 1, () => {
                ht[_t] = null;
              }),
              Yt()),
            ~He
              ? ((Ae = ht[He]),
                Ae || ((Ae = ht[He] = Ft[He](W)), Ae.c()),
                me(Ae, 1),
                Ae.m(Qe, null))
              : (Ae = null));
      },
      i(W) {
        xe || (me(G.$$.fragment, W), me(oe.$$.fragment, W), me(Ae), (xe = !0));
      },
      o(W) {
        pe(G.$$.fragment, W), pe(oe.$$.fragment, W), pe(Ae), (xe = !1);
      },
      d(W) {
        W && r(t),
          qe(G),
          qe(oe),
          We.d(),
          lt.d(),
          W && r(ml),
          W && r(Ue),
          Ne && Ne.d(),
          ~He && ht[He].d(),
          (St = !1),
          xl(pl);
      },
    }
  );
}
function Hr(l) {
  let t, a;
  return (
    (t = new Ys({
      props: { $$slots: { default: [Lr] }, $$scope: { ctx: l } },
    })),
    {
      c() {
        Je(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Re(t, s, d), (a = !0);
      },
      p(s, [d]) {
        const u = {};
        d & 540671 && (u.$$scope = { dirty: d, ctx: s }), t.$set(u);
      },
      i(s) {
        a || (me(t.$$.fragment, s), (a = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (a = !1);
      },
      d(s) {
        qe(t, s);
      },
    }
  );
}
function Ar(l, t, a) {
  let s = "fixtures",
    d = -1,
    u = "-",
    f = -1,
    g = "00",
    v = "00",
    I = "00",
    w = "-",
    y = "-",
    C = -1,
    p,
    m,
    D,
    x = !1;
  $a(async () => {
    hs.set(!0);
    try {
      await Qt.sync(),
        await Kt.sync(),
        await Fl.sync(),
        await ma.syncWeeklyLeaderboard(),
        await Aa.sync(),
        await er.sync(),
        await Js.sync(),
        Aa.subscribe((S) => {
          a(13, (x = S.identity !== null && S.identity !== void 0));
        }),
        a(3, (f = await Ws.getTotalManagers()));
      let $ = await Qt.getSystemState();
      a(1, (d = $?.activeGameweek ?? d)),
        a(2, (u = $?.activeSeason.name ?? u)),
        a(9, (C = $?.focusGameweek ?? d));
      let H = await Fl.getNextFixture();
      a(11, (m = await Kt.getTeamById(H ? H.homeTeamId : 0))),
        a(12, (D = await Kt.getTeamById(H ? H.awayTeamId : 0))),
        a(7, (w = Qs(H ? Number(H.kickOff) : 0))),
        a(8, (y = ja(H ? Number(H.kickOff) : 0)));
      let T = Xs(H ? Number(H.kickOff) : 0);
      a(4, (g = T.days.toString())),
        a(5, (v = T.hours.toString())),
        a(6, (I = T.minutes.toString())),
        a(10, (p = await ma.getLeadingWeeklyTeam()));
    } catch ($) {
      la.show("Error fetching homepage data.", "error"),
        console.error("Error fetching homepage data:", $);
    } finally {
      hs.set(!1);
    }
  });
  function b($) {
    a(0, (s = $));
  }
  return [
    s,
    d,
    u,
    f,
    g,
    v,
    I,
    w,
    y,
    C,
    p,
    m,
    D,
    x,
    b,
    () => b("fixtures"),
    () => b("points"),
    () => b("leaderboards"),
    () => b("league-table"),
  ];
}
class Kr extends va {
  constructor(t) {
    super(), ha(this, t, Ar, Hr, _a, {});
  }
}
export { Kr as component };
