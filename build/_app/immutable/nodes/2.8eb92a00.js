import { B as sl } from "../chunks/BadgeIcon.5f1570c4.js";
import { f as Ma } from "../chunks/fixture-store.8fe042dd.js";
import { i as vs } from "../chunks/global-stores.803ba169.js";
import { w as Bs } from "../chunks/index.8caf67b2.js";
import {
  a as I,
  A as Ue,
  B as ze,
  b as _e,
  c as w,
  d as pe,
  e as Ga,
  f as Yt,
  G as e,
  g as me,
  H as gt,
  h as r,
  i as vl,
  J as al,
  K as bt,
  k as o,
  L as Ee,
  l as n,
  M as ca,
  m as i,
  n as c,
  N as ka,
  o as Ol,
  O as Rl,
  p as $a,
  P as tl,
  Q as Al,
  q as v,
  R as ds,
  r as h,
  s as hl,
  S as _l,
  T as fs,
  u as Y,
  U as Ze,
  v as Jt,
  x as cs,
  y as Be,
  z as Ye,
} from "../chunks/index.c7b38e5e.js";
import { a as Qs, L as qs } from "../chunks/Layout.39e2a716.js";
import { m as Ws } from "../chunks/manager-store.58a33dc2.js";
import { p as Zs } from "../chunks/player-store.55a4cc5d.js";
import { s as Qt } from "../chunks/system-store.408d352e.js";
import {
  A as Us,
  a as _s,
  b as Js,
  c as Ys,
  f as $l,
  g as ms,
  i as zs,
  r as Fl,
  t as Kt,
  u as Ks,
} from "../chunks/team-store.a9afdac8.js";
import { a as us, t as ll } from "../chunks/toast-store.64ad2768.js";
import { V as Xs } from "../chunks/ViewDetailsIcon.98b59799.js";
function er() {
  const { subscribe: a, set: t } = Bs(null),
    l = 25;
  let s;
  Qt.subscribe((p) => {
    s = p;
  });
  let d = Us.createActor(zs, "bkyz2-fmaaa-aaaaa-qaaaq-cai");
  async function u() {
    let p = "weekly_leaderboard",
      N = (await d.getDataHashes()).find((y) => y.category === p) ?? null;
    const k = localStorage.getItem(p);
    if (N?.hash != k) {
      let y = await d.getWeeklyLeaderboardCache(
        s?.activeSeason.id,
        s?.focusGameweek
      );
      localStorage.setItem("weekly_leaderboard_data", JSON.stringify(y, Fl)),
        localStorage.setItem(p, N?.hash ?? "");
    }
  }
  async function f() {
    let p = "monthly_leaderboards",
      N = (await d.getDataHashes()).find((y) => y.category === p) ?? null;
    const k = localStorage.getItem(p);
    if (N?.hash != k) {
      let y = await d.getClubLeaderboardsCache(
        s?.activeSeason.id,
        s?.activeMonth
      );
      localStorage.setItem("monthly_leaderboard_data", JSON.stringify(y, Fl)),
        localStorage.setItem(p, N?.hash ?? "");
    }
  }
  async function g() {
    let p = "season_leaderboard",
      N = (await d.getDataHashes()).find((y) => y.category === p) ?? null;
    const k = localStorage.getItem(p);
    if (N?.hash != k) {
      let y = await d.getSeasonLeaderboardCache(s?.activeSeason.id);
      localStorage.setItem("season_leaderboard_data", JSON.stringify(y, Fl)),
        localStorage.setItem(p, N?.hash ?? "");
    }
  }
  async function _() {
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
  async function b(p, m) {
    const N = l,
      k = (m - 1) * N;
    return await d.getWeeklyLeaderboard(s?.activeSeason.id, p, N, k);
  }
  async function E(p) {
    const m = localStorage.getItem("monthly_leaderboards_data");
    let N;
    try {
      N = JSON.parse(m || "[]");
    } catch {
      N = [];
    }
    return N.find((y) => y.clubId === p) ?? null;
  }
  async function D() {
    const p = localStorage.getItem("season_leaderboard_data");
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
  async function P() {
    return (await _()).entries[0];
  }
  return {
    subscribe: a,
    syncWeeklyLeaderboard: u,
    syncMonthlyLeaderboards: f,
    syncSeasonLeaderboard: g,
    getWeeklyLeaderboard: _,
    getWeeklyLeaderboardPage: b,
    getMonthlyLeaderboard: E,
    getSeasonLeaderboard: D,
    getLeadingWeeklyTeam: P,
  };
}
const el = er();
function hs(a, t, l) {
  const s = a.slice();
  return (s[17] = t[l][0]), (s[2] = t[l][1]), s;
}
function ps(a, t, l) {
  const s = a.slice();
  return (
    (s[20] = t[l].fixture), (s[21] = t[l].homeTeam), (s[22] = t[l].awayTeam), s
  );
}
function bs(a, t, l) {
  const s = a.slice();
  return (s[25] = t[l]), s;
}
function gs(a) {
  let t,
    l,
    s = a[25] + "",
    d;
  return {
    c() {
      (t = o("option")), (l = v("Gameweek ")), (d = v(s)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var f = i(t);
      (l = h(f, "Gameweek ")), (d = h(f, s)), f.forEach(r), this.h();
    },
    h() {
      (t.__value = a[25]), (t.value = t.__value);
    },
    m(u, f) {
      _e(u, t, f), e(t, l), e(t, d);
    },
    p: gt,
    d(u) {
      u && r(t);
    },
  };
}
function Es(a) {
  let t,
    l,
    s,
    d,
    u,
    f,
    g,
    _,
    b,
    E,
    D,
    P,
    p,
    m,
    N,
    k,
    y,
    C,
    S = $l(Number(a[20].kickOff)) + "",
    V,
    G,
    x,
    j,
    T,
    A = (a[21] ? a[21].friendlyName : "") + "",
    O,
    B,
    X,
    M,
    K = (a[22] ? a[22].friendlyName : "") + "",
    se,
    Z,
    ee,
    fe,
    ne,
    ce = (a[20].status === 0 ? "-" : a[20].homeGoals) + "",
    q,
    ie,
    U,
    le = (a[20].status === 0 ? "-" : a[20].awayGoals) + "",
    J,
    ue,
    H;
  return (
    (f = new sl({
      props: {
        primaryColour: a[21] ? a[21].primaryColourHex : "",
        secondaryColour: a[21] ? a[21].secondaryColourHex : "",
        thirdColour: a[21] ? a[21].thirdColourHex : "",
      },
    })),
    (m = new sl({
      props: {
        primaryColour: a[22] ? a[22].primaryColourHex : "",
        secondaryColour: a[22] ? a[22].secondaryColourHex : "",
        thirdColour: a[22] ? a[22].thirdColourHex : "",
      },
    })),
    {
      c() {
        (t = o("div")),
          (l = o("div")),
          (s = o("div")),
          (d = o("div")),
          (u = o("a")),
          Be(f.$$.fragment),
          (_ = I()),
          (b = o("span")),
          (E = v("v")),
          (D = I()),
          (P = o("div")),
          (p = o("a")),
          Be(m.$$.fragment),
          (k = I()),
          (y = o("div")),
          (C = o("span")),
          (V = v(S)),
          (G = I()),
          (x = o("div")),
          (j = o("div")),
          (T = o("a")),
          (O = v(A)),
          (X = I()),
          (M = o("a")),
          (se = v(K)),
          (ee = I()),
          (fe = o("div")),
          (ne = o("span")),
          (q = v(ce)),
          (ie = I()),
          (U = o("span")),
          (J = v(le)),
          this.h();
      },
      l($) {
        t = n($, "DIV", { class: !0 });
        var R = i(t);
        l = n(R, "DIV", { class: !0 });
        var L = i(l);
        s = n(L, "DIV", { class: !0 });
        var F = i(s);
        d = n(F, "DIV", { class: !0 });
        var ae = i(d);
        u = n(ae, "A", { href: !0 });
        var Se = i(u);
        Ye(f.$$.fragment, Se),
          Se.forEach(r),
          ae.forEach(r),
          (_ = w(F)),
          (b = n(F, "SPAN", { class: !0 }));
        var we = i(b);
        (E = h(we, "v")),
          we.forEach(r),
          (D = w(F)),
          (P = n(F, "DIV", { class: !0 }));
        var re = i(P);
        p = n(re, "A", { href: !0 });
        var ye = i(p);
        Ye(m.$$.fragment, ye),
          ye.forEach(r),
          re.forEach(r),
          F.forEach(r),
          (k = w(L)),
          (y = n(L, "DIV", { class: !0 }));
        var te = i(y);
        C = n(te, "SPAN", { class: !0 });
        var be = i(C);
        (V = h(be, S)),
          be.forEach(r),
          te.forEach(r),
          L.forEach(r),
          (G = w(R)),
          (x = n(R, "DIV", { class: !0 }));
        var z = i(x);
        j = n(z, "DIV", { class: !0 });
        var oe = i(j);
        T = n(oe, "A", { href: !0 });
        var Q = i(T);
        (O = h(Q, A)),
          Q.forEach(r),
          (X = w(oe)),
          (M = n(oe, "A", { href: !0 }));
        var De = i(M);
        (se = h(De, K)),
          De.forEach(r),
          oe.forEach(r),
          (ee = w(z)),
          (fe = n(z, "DIV", { class: !0 }));
        var Ne = i(fe);
        ne = n(Ne, "SPAN", {});
        var Ve = i(ne);
        (q = h(Ve, ce)), Ve.forEach(r), (ie = w(Ne)), (U = n(Ne, "SPAN", {}));
        var Ae = i(U);
        (J = h(Ae, le)),
          Ae.forEach(r),
          Ne.forEach(r),
          z.forEach(r),
          R.forEach(r),
          this.h();
      },
      h() {
        c(u, "href", (g = `/club?id=${a[20].homeTeamId}`)),
          c(d, "class", "w-10 items-center justify-center"),
          c(b, "class", "font-bold text-lg"),
          c(p, "href", (N = `/club?id=${a[20].awayTeamId}`)),
          c(P, "class", "w-10 items-center justify-center"),
          c(s, "class", "flex w-1/2 space-x-4 justify-center"),
          c(C, "class", "text-sm md:text-lg ml-4 md:ml-0 text-left"),
          c(y, "class", "flex w-1/2 md:justify-center"),
          c(l, "class", "flex items-center w-1/2 ml-4"),
          c(T, "href", (B = `/club?id=${a[20].homeTeamId}`)),
          c(M, "href", (Z = `/club?id=${a[20].awayTeamId}`)),
          c(
            j,
            "class",
            "flex flex-col min-w-[120px] md:min-w-[300px] text-xs md:text-lg"
          ),
          c(
            fe,
            "class",
            "flex flex-col min-w-[120px] md:min-w-[300px] text-xs md:text-lg"
          ),
          c(x, "class", "flex items-center space-x-10 w-1/2 md:justify-center"),
          c(
            t,
            "class",
            (ue = `flex items-center justify-between py-2 border-b border-gray-700  ${
              a[20].status === 0 ? "text-gray-400" : "text-white"
            }`)
          );
      },
      m($, R) {
        _e($, t, R),
          e(t, l),
          e(l, s),
          e(s, d),
          e(d, u),
          Ue(f, u, null),
          e(s, _),
          e(s, b),
          e(b, E),
          e(s, D),
          e(s, P),
          e(P, p),
          Ue(m, p, null),
          e(l, k),
          e(l, y),
          e(y, C),
          e(C, V),
          e(t, G),
          e(t, x),
          e(x, j),
          e(j, T),
          e(T, O),
          e(j, X),
          e(j, M),
          e(M, se),
          e(x, ee),
          e(x, fe),
          e(fe, ne),
          e(ne, q),
          e(fe, ie),
          e(fe, U),
          e(U, J),
          (H = !0);
      },
      p($, R) {
        const L = {};
        R & 2 && (L.primaryColour = $[21] ? $[21].primaryColourHex : ""),
          R & 2 && (L.secondaryColour = $[21] ? $[21].secondaryColourHex : ""),
          R & 2 && (L.thirdColour = $[21] ? $[21].thirdColourHex : ""),
          f.$set(L),
          (!H || (R & 2 && g !== (g = `/club?id=${$[20].homeTeamId}`))) &&
            c(u, "href", g);
        const F = {};
        R & 2 && (F.primaryColour = $[22] ? $[22].primaryColourHex : ""),
          R & 2 && (F.secondaryColour = $[22] ? $[22].secondaryColourHex : ""),
          R & 2 && (F.thirdColour = $[22] ? $[22].thirdColourHex : ""),
          m.$set(F),
          (!H || (R & 2 && N !== (N = `/club?id=${$[20].awayTeamId}`))) &&
            c(p, "href", N),
          (!H || R & 2) &&
            S !== (S = $l(Number($[20].kickOff)) + "") &&
            Y(V, S),
          (!H || R & 2) &&
            A !== (A = ($[21] ? $[21].friendlyName : "") + "") &&
            Y(O, A),
          (!H || (R & 2 && B !== (B = `/club?id=${$[20].homeTeamId}`))) &&
            c(T, "href", B),
          (!H || R & 2) &&
            K !== (K = ($[22] ? $[22].friendlyName : "") + "") &&
            Y(se, K),
          (!H || (R & 2 && Z !== (Z = `/club?id=${$[20].awayTeamId}`))) &&
            c(M, "href", Z),
          (!H || R & 2) &&
            ce !== (ce = ($[20].status === 0 ? "-" : $[20].homeGoals) + "") &&
            Y(q, ce),
          (!H || R & 2) &&
            le !== (le = ($[20].status === 0 ? "-" : $[20].awayGoals) + "") &&
            Y(J, le),
          (!H ||
            (R & 2 &&
              ue !==
                (ue = `flex items-center justify-between py-2 border-b border-gray-700  ${
                  $[20].status === 0 ? "text-gray-400" : "text-white"
                }`))) &&
            c(t, "class", ue);
      },
      i($) {
        H || (me(f.$$.fragment, $), me(m.$$.fragment, $), (H = !0));
      },
      o($) {
        pe(f.$$.fragment, $), pe(m.$$.fragment, $), (H = !1);
      },
      d($) {
        $ && r(t), ze(f), ze(m);
      },
    }
  );
}
function ys(a) {
  let t,
    l,
    s,
    d = a[17] + "",
    u,
    f,
    g,
    _,
    b = a[2],
    E = [];
  for (let P = 0; P < b.length; P += 1) E[P] = Es(ps(a, b, P));
  const D = (P) =>
    pe(E[P], 1, 1, () => {
      E[P] = null;
    });
  return {
    c() {
      (t = o("div")), (l = o("div")), (s = o("h2")), (u = v(d)), (f = I());
      for (let P = 0; P < E.length; P += 1) E[P].c();
      (g = I()), this.h();
    },
    l(P) {
      t = n(P, "DIV", {});
      var p = i(t);
      l = n(p, "DIV", { class: !0 });
      var m = i(l);
      s = n(m, "H2", { class: !0 });
      var N = i(s);
      (u = h(N, d)), N.forEach(r), m.forEach(r), (f = w(p));
      for (let k = 0; k < E.length; k += 1) E[k].l(p);
      (g = w(p)), p.forEach(r), this.h();
    },
    h() {
      c(s, "class", "date-header ml-4 text-xs md:text-lg"),
        c(
          l,
          "class",
          "flex items-center justify-between border border-gray-700 py-4 bg-light-gray"
        );
    },
    m(P, p) {
      _e(P, t, p), e(t, l), e(l, s), e(s, u), e(t, f);
      for (let m = 0; m < E.length; m += 1) E[m] && E[m].m(t, null);
      e(t, g), (_ = !0);
    },
    p(P, p) {
      if (((!_ || p & 2) && d !== (d = P[17] + "") && Y(u, d), p & 2)) {
        b = P[2];
        let m;
        for (m = 0; m < b.length; m += 1) {
          const N = ps(P, b, m);
          E[m]
            ? (E[m].p(N, p), me(E[m], 1))
            : ((E[m] = Es(N)), E[m].c(), me(E[m], 1), E[m].m(t, g));
        }
        for (Jt(), m = b.length; m < E.length; m += 1) D(m);
        Yt();
      }
    },
    i(P) {
      if (!_) {
        for (let p = 0; p < b.length; p += 1) me(E[p]);
        _ = !0;
      }
    },
    o(P) {
      E = E.filter(Boolean);
      for (let p = 0; p < E.length; p += 1) pe(E[p]);
      _ = !1;
    },
    d(P) {
      P && r(t), ca(E, P);
    },
  };
}
function tr(a) {
  let t,
    l,
    s,
    d,
    u,
    f,
    g,
    _,
    b,
    E,
    D,
    P,
    p,
    m,
    N,
    k,
    y,
    C,
    S = a[3],
    V = [];
  for (let T = 0; T < S.length; T += 1) V[T] = gs(bs(a, S, T));
  let G = Object.entries(a[1]),
    x = [];
  for (let T = 0; T < G.length; T += 1) x[T] = ys(hs(a, G, T));
  const j = (T) =>
    pe(x[T], 1, 1, () => {
      x[T] = null;
    });
  return {
    c() {
      (t = o("div")),
        (l = o("div")),
        (s = o("div")),
        (d = o("div")),
        (u = o("button")),
        (f = v("<")),
        (_ = I()),
        (b = o("select"));
      for (let T = 0; T < V.length; T += 1) V[T].c();
      (E = I()), (D = o("button")), (P = v(">")), (m = I()), (N = o("div"));
      for (let T = 0; T < x.length; T += 1) x[T].c();
      this.h();
    },
    l(T) {
      t = n(T, "DIV", { class: !0 });
      var A = i(t);
      l = n(A, "DIV", { class: !0 });
      var O = i(l);
      s = n(O, "DIV", { class: !0 });
      var B = i(s);
      d = n(B, "DIV", { class: !0 });
      var X = i(d);
      u = n(X, "BUTTON", { class: !0 });
      var M = i(u);
      (f = h(M, "<")),
        M.forEach(r),
        (_ = w(X)),
        (b = n(X, "SELECT", { class: !0 }));
      var K = i(b);
      for (let ee = 0; ee < V.length; ee += 1) V[ee].l(K);
      K.forEach(r), (E = w(X)), (D = n(X, "BUTTON", { class: !0 }));
      var se = i(D);
      (P = h(se, ">")),
        se.forEach(r),
        X.forEach(r),
        B.forEach(r),
        (m = w(O)),
        (N = n(O, "DIV", {}));
      var Z = i(N);
      for (let ee = 0; ee < x.length; ee += 1) x[ee].l(Z);
      Z.forEach(r), O.forEach(r), A.forEach(r), this.h();
    },
    h() {
      c(u, "class", "text-2xl rounded fpl-button px-3 py-1"),
        (u.disabled = g = a[0] === 1),
        c(b, "class", "p-2 fpl-dropdown text-sm md:text-xl text-center"),
        a[0] === void 0 && al(() => a[8].call(b)),
        c(D, "class", "text-2xl rounded fpl-button px-3 py-1 ml-1"),
        (D.disabled = p = a[0] === 38),
        c(d, "class", "flex items-center space-x-2 ml-4"),
        c(s, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        c(l, "class", "flex flex-col space-y-4"),
        c(t, "class", "container-fluid mt-4");
    },
    m(T, A) {
      _e(T, t, A),
        e(t, l),
        e(l, s),
        e(s, d),
        e(d, u),
        e(u, f),
        e(d, _),
        e(d, b);
      for (let O = 0; O < V.length; O += 1) V[O] && V[O].m(b, null);
      bt(b, a[0], !0), e(d, E), e(d, D), e(D, P), e(l, m), e(l, N);
      for (let O = 0; O < x.length; O += 1) x[O] && x[O].m(N, null);
      (k = !0),
        y ||
          ((C = [
            Ee(u, "click", a[7]),
            Ee(b, "change", a[8]),
            Ee(D, "click", a[9]),
          ]),
          (y = !0));
    },
    p(T, [A]) {
      if (
        ((!k || (A & 9 && g !== (g = T[0] === 1))) && (u.disabled = g), A & 8)
      ) {
        S = T[3];
        let O;
        for (O = 0; O < S.length; O += 1) {
          const B = bs(T, S, O);
          V[O] ? V[O].p(B, A) : ((V[O] = gs(B)), V[O].c(), V[O].m(b, null));
        }
        for (; O < V.length; O += 1) V[O].d(1);
        V.length = S.length;
      }
      if (
        (A & 9 && bt(b, T[0]),
        (!k || (A & 9 && p !== (p = T[0] === 38))) && (D.disabled = p),
        A & 2)
      ) {
        G = Object.entries(T[1]);
        let O;
        for (O = 0; O < G.length; O += 1) {
          const B = hs(T, G, O);
          x[O]
            ? (x[O].p(B, A), me(x[O], 1))
            : ((x[O] = ys(B)), x[O].c(), me(x[O], 1), x[O].m(N, null));
        }
        for (Jt(), O = G.length; O < x.length; O += 1) j(O);
        Yt();
      }
    },
    i(T) {
      if (!k) {
        for (let A = 0; A < G.length; A += 1) me(x[A]);
        k = !0;
      }
    },
    o(T) {
      x = x.filter(Boolean);
      for (let A = 0; A < x.length; A += 1) pe(x[A]);
      k = !1;
    },
    d(T) {
      T && r(t), ca(V, T), ca(x, T), (y = !1), ka(C);
    },
  };
}
function ar(a, t, l) {
  let s,
    d,
    u = [],
    f = [],
    g = [],
    _,
    b,
    E,
    D,
    P = 1,
    p = Array.from({ length: 38 }, (S, V) => V + 1);
  Ol(async () => {
    try {
      await Kt.sync(),
        await Ma.sync(),
        await Qt.sync(),
        (b = Kt.subscribe((S) => {
          u = S;
        })),
        (E = Ma.subscribe((S) => {
          l(2, (f = S)),
            l(
              5,
              (g = f.map((V) => ({
                fixture: V,
                homeTeam: N(V.homeTeamId),
                awayTeam: N(V.awayTeamId),
              })))
            );
        })),
        (D = Qt.subscribe((S) => {
          _ = S;
        }));
    } catch (S) {
      ll.show("Error fetching fixtures data.", "error"),
        console.error("Error fetching fixtures data:", S);
    } finally {
    }
  }),
    Rl(() => {
      b?.(), E?.(), D?.();
    });
  const m = (S) => {
    l(0, (P = Math.max(1, Math.min(38, P + S))));
  };
  function N(S) {
    return u.find((V) => V.id === S);
  }
  const k = () => m(-1);
  function y() {
    (P = tl(this)), l(0, P), l(3, p);
  }
  const C = () => m(1);
  return (
    (a.$$.update = () => {
      a.$$.dirty & 33 &&
        l(6, (s = g.filter(({ fixture: S }) => S.gameweek === P))),
        a.$$.dirty & 64 &&
          l(
            1,
            (d = s.reduce((S, V) => {
              const G = new Date(Number(V.fixture.kickOff) / 1e6),
                j = new Intl.DateTimeFormat("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(G);
              return S[j] || (S[j] = []), S[j].push(V), S;
            }, {}))
          );
    }),
    [P, d, f, p, m, g, s, k, y, C]
  );
}
class lr extends _l {
  constructor(t) {
    super(), vl(this, t, ar, tr, hl, {});
  }
}
function Is(a) {
  let t,
    l,
    s,
    d,
    u,
    f,
    g,
    _,
    b,
    E,
    D,
    P,
    p,
    m,
    N =
      (a[2].player.firstName != ""
        ? a[2].player.firstName.charAt(0) + "."
        : "") + a[2].player.lastName,
    k,
    y,
    C,
    S,
    V,
    G = a[3]?.friendlyName + "",
    x,
    j,
    T,
    A,
    O,
    B,
    X,
    M = a[4]?.friendlyName + "",
    K,
    se,
    Z,
    ee,
    fe,
    ne,
    ce,
    q = a[2].gameweek + "",
    ie,
    U,
    le,
    J,
    ue,
    H,
    $,
    R,
    L,
    F,
    ae,
    Se,
    we,
    re,
    ye,
    te,
    be,
    z,
    oe = (a[2].appearance > 0 ? a[2].appearance : "-") + "",
    Q,
    De,
    Ne,
    Ve = (a[2].appearance > 0 ? a[2].appearance * 5 : "-") + "",
    Ae,
    Me,
    Te,
    ge,
    st,
    Et,
    Le,
    kt = a[2].goals + "",
    rt,
    yt,
    He,
    ot = a[2].goalPoints + "",
    St,
    Ot,
    Pe,
    nt,
    Ha,
    it,
    It,
    da = a[2].assists + "",
    Sa,
    Xt,
    Oe,
    Zt = a[2].assistPoints + "",
    xt,
    Wa,
    ct,
    Lt,
    ea,
    qa,
    ta,
    aa = a[2].yellowCards + "",
    jt,
    Ba,
    la,
    dt = a[2].yellowCards * -5 + "",
    fa,
    Ua,
    et,
    sa,
    Rt,
    za,
    Ke,
    ft = a[2].redCards + "",
    Ta,
    Ca,
    ra,
    ua = (a[2].redCards > 0 ? -20 : 0) + "",
    Tt,
    Ka,
    Ct,
    ma,
    We,
    Qe,
    Je,
    Ft,
    tt,
    _a = a[2].ownGoals + "",
    va,
    Pa,
    oa,
    na = a[2].ownGoals * -10 + "",
    Pt,
    Vt,
    ut,
    $t,
    Va,
    Ja,
    mt,
    _t = a[2].missedPenalties + "",
    Aa,
    Oa,
    Gt,
    ha = a[2].missedPenalties * -15 + "",
    je,
    Re,
    ke,
    At,
    pa,
    rl,
    xa,
    qe,
    La = a[2].points + "",
    ba,
    at,
    Ce,
    Mt,
    vt,
    ol,
    W,
    de,
    lt = a[2].bonusPoints + "",
    xe,
    ht,
    ga,
    Ht,
    Ea,
    ia,
    nl,
    ya,
    ja = a[2].totalPoints + "",
    Wt,
    il,
    Ia,
    qt,
    pt,
    Ie,
    cl,
    pl;
  var wt = ms(a[2].player.nationality);
  function bl(Ge) {
    return { props: { class: "h-20 w-20" } };
  }
  wt && (D = cs(wt, bl())),
    (S = new sl({
      props: {
        className: "w-5 h-5 mr-2",
        primaryColour: a[3]?.primaryColourHex,
        secondaryColour: a[3]?.secondaryColourHex,
        thirdColour: a[3]?.thirdColourHex,
      },
    })),
    (B = new sl({
      props: {
        className: "w-5 h-5 mx-1",
        primaryColour: a[4]?.primaryColourHex,
        secondaryColour: a[4]?.secondaryColourHex,
        thirdColour: a[4]?.thirdColourHex,
      },
    }));
  let Fe = a[2].player.position < 2 && ws(a),
    $e = a[2].player.position === 0 && Ds(a);
  return {
    c() {
      (t = o("div")),
        (l = o("div")),
        (s = o("div")),
        (d = o("h3")),
        (u = v("Player Detail")),
        (f = I()),
        (g = o("button")),
        (_ = v("×")),
        (b = I()),
        (E = o("div")),
        D && Be(D.$$.fragment),
        (P = I()),
        (p = o("div")),
        (m = o("h3")),
        (k = v(N)),
        (y = I()),
        (C = o("p")),
        Be(S.$$.fragment),
        (V = I()),
        (x = v(G)),
        (j = I()),
        (T = o("div")),
        (A = o("p")),
        (O = v("vs ")),
        Be(B.$$.fragment),
        (X = I()),
        (K = v(M)),
        (se = I()),
        (Z = o("p")),
        (ee = v(a[5])),
        (fe = I()),
        (ne = o("p")),
        (ce = v("Gameweek ")),
        (ie = v(q)),
        (U = I()),
        (le = o("div")),
        (J = o("div")),
        (ue = o("div")),
        (H = v("Category")),
        ($ = I()),
        (R = o("div")),
        (L = v("Detail")),
        (F = I()),
        (ae = o("div")),
        (Se = v("Points")),
        (we = I()),
        (re = o("div")),
        (ye = o("div")),
        (te = v("Appearance")),
        (be = I()),
        (z = o("div")),
        (Q = v(oe)),
        (De = I()),
        (Ne = o("div")),
        (Ae = v(Ve)),
        (Me = I()),
        (Te = o("div")),
        (ge = o("div")),
        (st = v("Goals")),
        (Et = I()),
        (Le = o("div")),
        (rt = v(kt)),
        (yt = I()),
        (He = o("div")),
        (St = v(ot)),
        (Ot = I()),
        (Pe = o("div")),
        (nt = o("div")),
        (Ha = v("Assists")),
        (it = I()),
        (It = o("div")),
        (Sa = v(da)),
        (Xt = I()),
        (Oe = o("div")),
        (xt = v(Zt)),
        (Wa = I()),
        (ct = o("div")),
        (Lt = o("div")),
        (ea = v("Yellow Card")),
        (qa = I()),
        (ta = o("div")),
        (jt = v(aa)),
        (Ba = I()),
        (la = o("div")),
        (fa = v(dt)),
        (Ua = I()),
        (et = o("div")),
        (sa = o("div")),
        (Rt = v("Red Card")),
        (za = I()),
        (Ke = o("div")),
        (Ta = v(ft)),
        (Ca = I()),
        (ra = o("div")),
        (Tt = v(ua)),
        (Ka = I()),
        Fe && Fe.c(),
        (Ct = I()),
        $e && $e.c(),
        (ma = I()),
        (We = o("div")),
        (Qe = o("div")),
        (Je = v("Own Goal")),
        (Ft = I()),
        (tt = o("div")),
        (va = v(_a)),
        (Pa = I()),
        (oa = o("div")),
        (Pt = v(na)),
        (Vt = I()),
        (ut = o("div")),
        ($t = o("div")),
        (Va = v("Penalty Misses")),
        (Ja = I()),
        (mt = o("div")),
        (Aa = v(_t)),
        (Oa = I()),
        (Gt = o("div")),
        (je = v(ha)),
        (Re = I()),
        (ke = o("div")),
        (At = o("div")),
        (pa = o("span")),
        (rl = v("Player Points:")),
        (xa = I()),
        (qe = o("span")),
        (ba = v(La)),
        (at = I()),
        (Ce = o("div")),
        (Mt = o("div")),
        (vt = o("span")),
        (ol = v("Bonus Points:")),
        (W = I()),
        (de = o("span")),
        (xe = v(lt)),
        (ht = I()),
        (ga = o("div")),
        (Ht = o("div")),
        (Ea = o("span")),
        (ia = v("Total Points:")),
        (nl = I()),
        (ya = o("span")),
        (Wt = v(ja)),
        (il = I()),
        (Ia = o("div")),
        (qt = o("button")),
        (pt = v("Close")),
        this.h();
    },
    l(Ge) {
      t = n(Ge, "DIV", { class: !0 });
      var he = i(t);
      l = n(he, "DIV", { class: !0 });
      var ve = i(l);
      s = n(ve, "DIV", { class: !0 });
      var Xe = i(s);
      d = n(Xe, "H3", { class: !0 });
      var Ra = i(d);
      (u = h(Ra, "Player Detail")),
        Ra.forEach(r),
        (f = w(Xe)),
        (g = n(Xe, "BUTTON", { class: !0 }));
      var gl = i(g);
      (_ = h(gl, "×")),
        gl.forEach(r),
        Xe.forEach(r),
        (b = w(ve)),
        (E = n(ve, "DIV", { class: !0 }));
      var Ya = i(E);
      D && Ye(D.$$.fragment, Ya),
        (P = w(Ya)),
        (p = n(Ya, "DIV", { class: !0 }));
      var Qa = i(p);
      m = n(Qa, "H3", { class: !0 });
      var El = i(m);
      (k = h(El, N)),
        El.forEach(r),
        (y = w(Qa)),
        (C = n(Qa, "P", { class: !0 }));
      var Xa = i(C);
      Ye(S.$$.fragment, Xa),
        (V = w(Xa)),
        (x = h(Xa, G)),
        Xa.forEach(r),
        Qa.forEach(r),
        Ya.forEach(r),
        (j = w(ve)),
        (T = n(ve, "DIV", { class: !0 }));
      var Dt = i(T);
      A = n(Dt, "P", { class: !0 });
      var Fa = i(A);
      (O = h(Fa, "vs ")),
        Ye(B.$$.fragment, Fa),
        (X = w(Fa)),
        (K = h(Fa, M)),
        Fa.forEach(r),
        (se = w(Dt)),
        (Z = n(Dt, "P", { class: !0 }));
      var yl = i(Z);
      (ee = h(yl, a[5])),
        yl.forEach(r),
        (fe = w(Dt)),
        (ne = n(Dt, "P", { class: !0 }));
      var Nt = i(ne);
      (ce = h(Nt, "Gameweek ")),
        (ie = h(Nt, q)),
        Nt.forEach(r),
        Dt.forEach(r),
        (U = w(ve)),
        (le = n(ve, "DIV", { class: !0 }));
      var Il = i(le);
      J = n(Il, "DIV", { class: !0 });
      var wa = i(J);
      ue = n(wa, "DIV", { class: !0 });
      var wl = i(ue);
      (H = h(wl, "Category")),
        wl.forEach(r),
        ($ = w(wa)),
        (R = n(wa, "DIV", { class: !0 }));
      var Za = i(R);
      (L = h(Za, "Detail")),
        Za.forEach(r),
        (F = w(wa)),
        (ae = n(wa, "DIV", { class: !0 }));
      var Da = i(ae);
      (Se = h(Da, "Points")),
        Da.forEach(r),
        wa.forEach(r),
        Il.forEach(r),
        (we = w(ve)),
        (re = n(ve, "DIV", { class: !0 }));
      var Bt = i(re);
      ye = n(Bt, "DIV", { class: !0 });
      var Dl = i(ye);
      (te = h(Dl, "Appearance")),
        Dl.forEach(r),
        (be = w(Bt)),
        (z = n(Bt, "DIV", { class: !0 }));
      var Nl = i(z);
      (Q = h(Nl, oe)),
        Nl.forEach(r),
        (De = w(Bt)),
        (Ne = n(Bt, "DIV", { class: !0 }));
      var kl = i(Ne);
      (Ae = h(kl, Ve)),
        kl.forEach(r),
        Bt.forEach(r),
        (Me = w(ve)),
        (Te = n(ve, "DIV", { class: !0 }));
      var Ut = i(Te);
      ge = n(Ut, "DIV", { class: !0 });
      var zt = i(ge);
      (st = h(zt, "Goals")),
        zt.forEach(r),
        (Et = w(Ut)),
        (Le = n(Ut, "DIV", { class: !0 }));
      var Sl = i(Le);
      (rt = h(Sl, kt)),
        Sl.forEach(r),
        (yt = w(Ut)),
        (He = n(Ut, "DIV", { class: !0 }));
      var Tl = i(He);
      (St = h(Tl, ot)),
        Tl.forEach(r),
        Ut.forEach(r),
        (Ot = w(ve)),
        (Pe = n(ve, "DIV", { class: !0 }));
      var Na = i(Pe);
      nt = n(Na, "DIV", { class: !0 });
      var Cl = i(nt);
      (Ha = h(Cl, "Assists")),
        Cl.forEach(r),
        (it = w(Na)),
        (It = n(Na, "DIV", { class: !0 }));
      var Pl = i(It);
      (Sa = h(Pl, da)),
        Pl.forEach(r),
        (Xt = w(Na)),
        (Oe = n(Na, "DIV", { class: !0 }));
      var Vl = i(Oe);
      (xt = h(Vl, Zt)),
        Vl.forEach(r),
        Na.forEach(r),
        (Wa = w(ve)),
        (ct = n(ve, "DIV", { class: !0 }));
      var dl = i(ct);
      Lt = n(dl, "DIV", { class: !0 });
      var Gl = i(Lt);
      (ea = h(Gl, "Yellow Card")),
        Gl.forEach(r),
        (qa = w(dl)),
        (ta = n(dl, "DIV", { class: !0 }));
      var Ml = i(ta);
      (jt = h(Ml, aa)),
        Ml.forEach(r),
        (Ba = w(dl)),
        (la = n(dl, "DIV", { class: !0 }));
      var Hl = i(la);
      (fa = h(Hl, dt)),
        Hl.forEach(r),
        dl.forEach(r),
        (Ua = w(ve)),
        (et = n(ve, "DIV", { class: !0 }));
      var fl = i(et);
      sa = n(fl, "DIV", { class: !0 });
      var Wl = i(sa);
      (Rt = h(Wl, "Red Card")),
        Wl.forEach(r),
        (za = w(fl)),
        (Ke = n(fl, "DIV", { class: !0 }));
      var ql = i(Ke);
      (Ta = h(ql, ft)),
        ql.forEach(r),
        (Ca = w(fl)),
        (ra = n(fl, "DIV", { class: !0 }));
      var Bl = i(ra);
      (Tt = h(Bl, ua)),
        Bl.forEach(r),
        fl.forEach(r),
        (Ka = w(ve)),
        Fe && Fe.l(ve),
        (Ct = w(ve)),
        $e && $e.l(ve),
        (ma = w(ve)),
        (We = n(ve, "DIV", { class: !0 }));
      var ul = i(We);
      Qe = n(ul, "DIV", { class: !0 });
      var Ul = i(Qe);
      (Je = h(Ul, "Own Goal")),
        Ul.forEach(r),
        (Ft = w(ul)),
        (tt = n(ul, "DIV", { class: !0 }));
      var zl = i(tt);
      (va = h(zl, _a)),
        zl.forEach(r),
        (Pa = w(ul)),
        (oa = n(ul, "DIV", { class: !0 }));
      var Kl = i(oa);
      (Pt = h(Kl, na)),
        Kl.forEach(r),
        ul.forEach(r),
        (Vt = w(ve)),
        (ut = n(ve, "DIV", { class: !0 }));
      var ml = i(ut);
      $t = n(ml, "DIV", { class: !0 });
      var Jl = i($t);
      (Va = h(Jl, "Penalty Misses")),
        Jl.forEach(r),
        (Ja = w(ml)),
        (mt = n(ml, "DIV", { class: !0 }));
      var Yl = i(mt);
      (Aa = h(Yl, _t)),
        Yl.forEach(r),
        (Oa = w(ml)),
        (Gt = n(ml, "DIV", { class: !0 }));
      var Ql = i(Gt);
      (je = h(Ql, ha)),
        Ql.forEach(r),
        ml.forEach(r),
        (Re = w(ve)),
        (ke = n(ve, "DIV", { class: !0 }));
      var Xl = i(ke);
      At = n(Xl, "DIV", { class: !0 });
      var xl = i(At);
      pa = n(xl, "SPAN", { class: !0 });
      var Zl = i(pa);
      (rl = h(Zl, "Player Points:")),
        Zl.forEach(r),
        (xa = w(xl)),
        (qe = n(xl, "SPAN", { class: !0 }));
      var es = i(qe);
      (ba = h(es, La)),
        es.forEach(r),
        xl.forEach(r),
        Xl.forEach(r),
        (at = w(ve)),
        (Ce = n(ve, "DIV", { class: !0 }));
      var ts = i(Ce);
      Mt = n(ts, "DIV", { class: !0 });
      var Ll = i(Mt);
      vt = n(Ll, "SPAN", { class: !0 });
      var as = i(vt);
      (ol = h(as, "Bonus Points:")),
        as.forEach(r),
        (W = w(Ll)),
        (de = n(Ll, "SPAN", { class: !0 }));
      var ls = i(de);
      (xe = h(ls, lt)),
        ls.forEach(r),
        Ll.forEach(r),
        ts.forEach(r),
        (ht = w(ve)),
        (ga = n(ve, "DIV", { class: !0 }));
      var ss = i(ga);
      Ht = n(ss, "DIV", { class: !0 });
      var jl = i(Ht);
      Ea = n(jl, "SPAN", { class: !0 });
      var rs = i(Ea);
      (ia = h(rs, "Total Points:")),
        rs.forEach(r),
        (nl = w(jl)),
        (ya = n(jl, "SPAN", { class: !0 }));
      var os = i(ya);
      (Wt = h(os, ja)),
        os.forEach(r),
        jl.forEach(r),
        ss.forEach(r),
        (il = w(ve)),
        (Ia = n(ve, "DIV", { class: !0 }));
      var ns = i(Ia);
      qt = n(ns, "BUTTON", { class: !0 });
      var is = i(qt);
      (pt = h(is, "Close")),
        is.forEach(r),
        ns.forEach(r),
        ve.forEach(r),
        he.forEach(r),
        this.h();
    },
    h() {
      c(d, "class", "text-xl font-semibold text-white"),
        c(g, "class", "text-white text-3xl"),
        c(s, "class", "flex justify-between items-center"),
        c(m, "class", "text-2xl mb-2"),
        c(C, "class", "text-sm text-gray-400 flex items-center"),
        c(p, "class", "ml-4"),
        c(E, "class", "flex justify-start items-center w-full"),
        c(
          A,
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
        c(R, "class", "text-sm font-medium w-2/6"),
        c(ae, "class", "text-sm font-medium w-1/6"),
        c(
          J,
          "class",
          "flex justify-between items-center mt-4 bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(le, "class", "mt-2"),
        c(ye, "class", "text-sm font-medium w-3/6"),
        c(z, "class", "text-sm font-medium w-2/6"),
        c(Ne, "class", "text-sm font-medium w-1/6"),
        c(re, "class", "flex justify-between items-center p-2"),
        c(ge, "class", "text-sm font-medium w-3/6"),
        c(Le, "class", "text-sm font-medium w-2/6"),
        c(He, "class", "text-sm font-medium w-1/6"),
        c(Te, "class", "flex justify-between items-center p-2"),
        c(nt, "class", "text-sm font-medium w-3/6"),
        c(It, "class", "text-sm font-medium w-2/6"),
        c(Oe, "class", "text-sm font-medium w-1/6"),
        c(Pe, "class", "flex justify-between items-center p-2"),
        c(Lt, "class", "text-sm font-medium w-3/6"),
        c(ta, "class", "text-sm font-medium w-2/6"),
        c(la, "class", "text-sm font-medium w-1/6"),
        c(ct, "class", "flex justify-between items-center p-2"),
        c(sa, "class", "text-sm font-medium w-3/6"),
        c(Ke, "class", "text-sm font-medium w-2/6"),
        c(ra, "class", "text-sm font-medium w-1/6"),
        c(et, "class", "flex justify-between items-center p-2"),
        c(Qe, "class", "text-sm font-medium w-3/6"),
        c(tt, "class", "text-sm font-medium w-2/6"),
        c(oa, "class", "text-sm font-medium w-1/6"),
        c(We, "class", "flex justify-between items-center p-2"),
        c($t, "class", "text-sm font-medium w-3/6"),
        c(mt, "class", "text-sm font-medium w-2/6"),
        c(Gt, "class", "text-sm font-medium w-1/6"),
        c(ut, "class", "flex justify-between items-center p-2"),
        c(pa, "class", "text-sm font-bold w-5/6"),
        c(qe, "class", "text-sm font-bold w-1/6"),
        c(
          At,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(ke, "class", "mt-2"),
        c(vt, "class", "text-sm font-bold w-5/6"),
        c(de, "class", "text-sm font-bold w-1/6"),
        c(
          Mt,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(Ce, "class", "mt-2"),
        c(Ea, "class", "text-sm font-bold w-5/6"),
        c(ya, "class", "text-sm font-bold w-1/6"),
        c(
          Ht,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(ga, "class", "mt-2"),
        c(qt, "class", "fpl-purple-btn px-4 py-2 mt-2 rounded-md"),
        c(Ia, "class", "mt-2 flex justify-end"),
        c(
          l,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"
        ),
        c(
          t,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop svelte-18qswye"
        );
    },
    m(Ge, he) {
      _e(Ge, t, he),
        e(t, l),
        e(l, s),
        e(s, d),
        e(d, u),
        e(s, f),
        e(s, g),
        e(g, _),
        e(l, b),
        e(l, E),
        D && Ue(D, E, null),
        e(E, P),
        e(E, p),
        e(p, m),
        e(m, k),
        e(p, y),
        e(p, C),
        Ue(S, C, null),
        e(C, V),
        e(C, x),
        e(l, j),
        e(l, T),
        e(T, A),
        e(A, O),
        Ue(B, A, null),
        e(A, X),
        e(A, K),
        e(T, se),
        e(T, Z),
        e(Z, ee),
        e(T, fe),
        e(T, ne),
        e(ne, ce),
        e(ne, ie),
        e(l, U),
        e(l, le),
        e(le, J),
        e(J, ue),
        e(ue, H),
        e(J, $),
        e(J, R),
        e(R, L),
        e(J, F),
        e(J, ae),
        e(ae, Se),
        e(l, we),
        e(l, re),
        e(re, ye),
        e(ye, te),
        e(re, be),
        e(re, z),
        e(z, Q),
        e(re, De),
        e(re, Ne),
        e(Ne, Ae),
        e(l, Me),
        e(l, Te),
        e(Te, ge),
        e(ge, st),
        e(Te, Et),
        e(Te, Le),
        e(Le, rt),
        e(Te, yt),
        e(Te, He),
        e(He, St),
        e(l, Ot),
        e(l, Pe),
        e(Pe, nt),
        e(nt, Ha),
        e(Pe, it),
        e(Pe, It),
        e(It, Sa),
        e(Pe, Xt),
        e(Pe, Oe),
        e(Oe, xt),
        e(l, Wa),
        e(l, ct),
        e(ct, Lt),
        e(Lt, ea),
        e(ct, qa),
        e(ct, ta),
        e(ta, jt),
        e(ct, Ba),
        e(ct, la),
        e(la, fa),
        e(l, Ua),
        e(l, et),
        e(et, sa),
        e(sa, Rt),
        e(et, za),
        e(et, Ke),
        e(Ke, Ta),
        e(et, Ca),
        e(et, ra),
        e(ra, Tt),
        e(l, Ka),
        Fe && Fe.m(l, null),
        e(l, Ct),
        $e && $e.m(l, null),
        e(l, ma),
        e(l, We),
        e(We, Qe),
        e(Qe, Je),
        e(We, Ft),
        e(We, tt),
        e(tt, va),
        e(We, Pa),
        e(We, oa),
        e(oa, Pt),
        e(l, Vt),
        e(l, ut),
        e(ut, $t),
        e($t, Va),
        e(ut, Ja),
        e(ut, mt),
        e(mt, Aa),
        e(ut, Oa),
        e(ut, Gt),
        e(Gt, je),
        e(l, Re),
        e(l, ke),
        e(ke, At),
        e(At, pa),
        e(pa, rl),
        e(At, xa),
        e(At, qe),
        e(qe, ba),
        e(l, at),
        e(l, Ce),
        e(Ce, Mt),
        e(Mt, vt),
        e(vt, ol),
        e(Mt, W),
        e(Mt, de),
        e(de, xe),
        e(l, ht),
        e(l, ga),
        e(ga, Ht),
        e(Ht, Ea),
        e(Ea, ia),
        e(Ht, nl),
        e(Ht, ya),
        e(ya, Wt),
        e(l, il),
        e(l, Ia),
        e(Ia, qt),
        e(qt, pt),
        (Ie = !0),
        cl ||
          ((pl = [
            Ee(g, "click", function () {
              Al(a[1]) && a[1].apply(this, arguments);
            }),
            Ee(qt, "click", function () {
              Al(a[1]) && a[1].apply(this, arguments);
            }),
            Ee(qt, "keydown", function () {
              Al(a[1]) && a[1].apply(this, arguments);
            }),
            Ee(l, "click", ds(a[6])),
            Ee(l, "keydown", ds(a[7])),
            Ee(t, "click", function () {
              Al(a[1]) && a[1].apply(this, arguments);
            }),
            Ee(t, "keydown", function () {
              Al(a[1]) && a[1].apply(this, arguments);
            }),
          ]),
          (cl = !0));
    },
    p(Ge, he) {
      if (((a = Ge), he & 4 && wt !== (wt = ms(a[2].player.nationality)))) {
        if (D) {
          Jt();
          const Ra = D;
          pe(Ra.$$.fragment, 1, 0, () => {
            ze(Ra, 1);
          }),
            Yt();
        }
        wt
          ? ((D = cs(wt, bl())),
            Be(D.$$.fragment),
            me(D.$$.fragment, 1),
            Ue(D, E, P))
          : (D = null);
      }
      (!Ie || he & 4) &&
        N !==
          (N =
            (a[2].player.firstName != ""
              ? a[2].player.firstName.charAt(0) + "."
              : "") + a[2].player.lastName) &&
        Y(k, N);
      const ve = {};
      he & 8 && (ve.primaryColour = a[3]?.primaryColourHex),
        he & 8 && (ve.secondaryColour = a[3]?.secondaryColourHex),
        he & 8 && (ve.thirdColour = a[3]?.thirdColourHex),
        S.$set(ve),
        (!Ie || he & 8) && G !== (G = a[3]?.friendlyName + "") && Y(x, G);
      const Xe = {};
      he & 16 && (Xe.primaryColour = a[4]?.primaryColourHex),
        he & 16 && (Xe.secondaryColour = a[4]?.secondaryColourHex),
        he & 16 && (Xe.thirdColour = a[4]?.thirdColourHex),
        B.$set(Xe),
        (!Ie || he & 16) && M !== (M = a[4]?.friendlyName + "") && Y(K, M),
        (!Ie || he & 32) && Y(ee, a[5]),
        (!Ie || he & 4) && q !== (q = a[2].gameweek + "") && Y(ie, q),
        (!Ie || he & 4) &&
          oe !== (oe = (a[2].appearance > 0 ? a[2].appearance : "-") + "") &&
          Y(Q, oe),
        (!Ie || he & 4) &&
          Ve !==
            (Ve = (a[2].appearance > 0 ? a[2].appearance * 5 : "-") + "") &&
          Y(Ae, Ve),
        (!Ie || he & 4) && kt !== (kt = a[2].goals + "") && Y(rt, kt),
        (!Ie || he & 4) && ot !== (ot = a[2].goalPoints + "") && Y(St, ot),
        (!Ie || he & 4) && da !== (da = a[2].assists + "") && Y(Sa, da),
        (!Ie || he & 4) && Zt !== (Zt = a[2].assistPoints + "") && Y(xt, Zt),
        (!Ie || he & 4) && aa !== (aa = a[2].yellowCards + "") && Y(jt, aa),
        (!Ie || he & 4) &&
          dt !== (dt = a[2].yellowCards * -5 + "") &&
          Y(fa, dt),
        (!Ie || he & 4) && ft !== (ft = a[2].redCards + "") && Y(Ta, ft),
        (!Ie || he & 4) &&
          ua !== (ua = (a[2].redCards > 0 ? -20 : 0) + "") &&
          Y(Tt, ua),
        a[2].player.position < 2
          ? Fe
            ? Fe.p(a, he)
            : ((Fe = ws(a)), Fe.c(), Fe.m(l, Ct))
          : Fe && (Fe.d(1), (Fe = null)),
        a[2].player.position === 0
          ? $e
            ? $e.p(a, he)
            : (($e = Ds(a)), $e.c(), $e.m(l, ma))
          : $e && ($e.d(1), ($e = null)),
        (!Ie || he & 4) && _a !== (_a = a[2].ownGoals + "") && Y(va, _a),
        (!Ie || he & 4) && na !== (na = a[2].ownGoals * -10 + "") && Y(Pt, na),
        (!Ie || he & 4) && _t !== (_t = a[2].missedPenalties + "") && Y(Aa, _t),
        (!Ie || he & 4) &&
          ha !== (ha = a[2].missedPenalties * -15 + "") &&
          Y(je, ha),
        (!Ie || he & 4) && La !== (La = a[2].points + "") && Y(ba, La),
        (!Ie || he & 4) && lt !== (lt = a[2].bonusPoints + "") && Y(xe, lt),
        (!Ie || he & 4) && ja !== (ja = a[2].totalPoints + "") && Y(Wt, ja);
    },
    i(Ge) {
      Ie ||
        (D && me(D.$$.fragment, Ge),
        me(S.$$.fragment, Ge),
        me(B.$$.fragment, Ge),
        (Ie = !0));
    },
    o(Ge) {
      D && pe(D.$$.fragment, Ge),
        pe(S.$$.fragment, Ge),
        pe(B.$$.fragment, Ge),
        (Ie = !1);
    },
    d(Ge) {
      Ge && r(t),
        D && ze(D),
        ze(S),
        ze(B),
        Fe && Fe.d(),
        $e && $e.d(),
        (cl = !1),
        ka(pl);
    },
  };
}
function ws(a) {
  let t,
    l,
    s,
    d,
    u,
    f = a[2].cleanSheets + "",
    g,
    _,
    b,
    E = a[2].cleanSheetPoints + "",
    D,
    P,
    p,
    m,
    N,
    k,
    y,
    C = a[2].goalsConceded + "",
    S,
    V,
    G,
    x = a[2].goalsConcededPoints + "",
    j;
  return {
    c() {
      (t = o("div")),
        (l = o("div")),
        (s = v("Clean Sheet")),
        (d = I()),
        (u = o("div")),
        (g = v(f)),
        (_ = I()),
        (b = o("div")),
        (D = v(E)),
        (P = I()),
        (p = o("div")),
        (m = o("div")),
        (N = v("Conceded")),
        (k = I()),
        (y = o("div")),
        (S = v(C)),
        (V = I()),
        (G = o("div")),
        (j = v(x)),
        this.h();
    },
    l(T) {
      t = n(T, "DIV", { class: !0 });
      var A = i(t);
      l = n(A, "DIV", { class: !0 });
      var O = i(l);
      (s = h(O, "Clean Sheet")),
        O.forEach(r),
        (d = w(A)),
        (u = n(A, "DIV", { class: !0 }));
      var B = i(u);
      (g = h(B, f)), B.forEach(r), (_ = w(A)), (b = n(A, "DIV", { class: !0 }));
      var X = i(b);
      (D = h(X, E)),
        X.forEach(r),
        A.forEach(r),
        (P = w(T)),
        (p = n(T, "DIV", { class: !0 }));
      var M = i(p);
      m = n(M, "DIV", { class: !0 });
      var K = i(m);
      (N = h(K, "Conceded")),
        K.forEach(r),
        (k = w(M)),
        (y = n(M, "DIV", { class: !0 }));
      var se = i(y);
      (S = h(se, C)),
        se.forEach(r),
        (V = w(M)),
        (G = n(M, "DIV", { class: !0 }));
      var Z = i(G);
      (j = h(Z, x)), Z.forEach(r), M.forEach(r), this.h();
    },
    h() {
      c(l, "class", "text-sm font-medium w-3/6"),
        c(u, "class", "text-sm font-medium w-2/6"),
        c(b, "class", "text-sm font-medium w-1/6"),
        c(t, "class", "flex justify-between items-center p-2"),
        c(m, "class", "text-sm font-medium w-3/6"),
        c(y, "class", "text-sm font-medium w-2/6"),
        c(G, "class", "text-sm font-medium w-1/6"),
        c(p, "class", "flex justify-between items-center p-2");
    },
    m(T, A) {
      _e(T, t, A),
        e(t, l),
        e(l, s),
        e(t, d),
        e(t, u),
        e(u, g),
        e(t, _),
        e(t, b),
        e(b, D),
        _e(T, P, A),
        _e(T, p, A),
        e(p, m),
        e(m, N),
        e(p, k),
        e(p, y),
        e(y, S),
        e(p, V),
        e(p, G),
        e(G, j);
    },
    p(T, A) {
      A & 4 && f !== (f = T[2].cleanSheets + "") && Y(g, f),
        A & 4 && E !== (E = T[2].cleanSheetPoints + "") && Y(D, E),
        A & 4 && C !== (C = T[2].goalsConceded + "") && Y(S, C),
        A & 4 && x !== (x = T[2].goalsConcededPoints + "") && Y(j, x);
    },
    d(T) {
      T && r(t), T && r(P), T && r(p);
    },
  };
}
function Ds(a) {
  let t,
    l,
    s,
    d,
    u,
    f = a[2].saves + "",
    g,
    _,
    b,
    E = Math.floor(a[2].saves / 3) * 5 + "",
    D,
    P,
    p,
    m,
    N,
    k,
    y,
    C = a[2].penaltySaves + "",
    S,
    V,
    G,
    x = a[2].penaltySaves * 20 + "",
    j;
  return {
    c() {
      (t = o("div")),
        (l = o("div")),
        (s = v("Saves")),
        (d = I()),
        (u = o("div")),
        (g = v(f)),
        (_ = I()),
        (b = o("div")),
        (D = v(E)),
        (P = I()),
        (p = o("div")),
        (m = o("div")),
        (N = v("Penalty Saves")),
        (k = I()),
        (y = o("div")),
        (S = v(C)),
        (V = I()),
        (G = o("div")),
        (j = v(x)),
        this.h();
    },
    l(T) {
      t = n(T, "DIV", { class: !0 });
      var A = i(t);
      l = n(A, "DIV", { class: !0 });
      var O = i(l);
      (s = h(O, "Saves")),
        O.forEach(r),
        (d = w(A)),
        (u = n(A, "DIV", { class: !0 }));
      var B = i(u);
      (g = h(B, f)), B.forEach(r), (_ = w(A)), (b = n(A, "DIV", { class: !0 }));
      var X = i(b);
      (D = h(X, E)),
        X.forEach(r),
        A.forEach(r),
        (P = w(T)),
        (p = n(T, "DIV", { class: !0 }));
      var M = i(p);
      m = n(M, "DIV", { class: !0 });
      var K = i(m);
      (N = h(K, "Penalty Saves")),
        K.forEach(r),
        (k = w(M)),
        (y = n(M, "DIV", { class: !0 }));
      var se = i(y);
      (S = h(se, C)),
        se.forEach(r),
        (V = w(M)),
        (G = n(M, "DIV", { class: !0 }));
      var Z = i(G);
      (j = h(Z, x)), Z.forEach(r), M.forEach(r), this.h();
    },
    h() {
      c(l, "class", "text-sm font-medium w-3/6"),
        c(u, "class", "text-sm font-medium w-2/6"),
        c(b, "class", "text-sm font-medium w-1/6"),
        c(t, "class", "flex justify-between items-center p-2"),
        c(m, "class", "text-sm font-medium w-3/6"),
        c(y, "class", "text-sm font-medium w-2/6"),
        c(G, "class", "text-sm font-medium w-1/6"),
        c(p, "class", "flex justify-between items-center p-2");
    },
    m(T, A) {
      _e(T, t, A),
        e(t, l),
        e(l, s),
        e(t, d),
        e(t, u),
        e(u, g),
        e(t, _),
        e(t, b),
        e(b, D),
        _e(T, P, A),
        _e(T, p, A),
        e(p, m),
        e(m, N),
        e(p, k),
        e(p, y),
        e(y, S),
        e(p, V),
        e(p, G),
        e(G, j);
    },
    p(T, A) {
      A & 4 && f !== (f = T[2].saves + "") && Y(g, f),
        A & 4 && E !== (E = Math.floor(T[2].saves / 3) * 5 + "") && Y(D, E),
        A & 4 && C !== (C = T[2].penaltySaves + "") && Y(S, C),
        A & 4 && x !== (x = T[2].penaltySaves * 20 + "") && Y(j, x);
    },
    d(T) {
      T && r(t), T && r(P), T && r(p);
    },
  };
}
function sr(a) {
  let t,
    l,
    s = a[0] && Is(a);
  return {
    c() {
      s && s.c(), (t = Ga());
    },
    l(d) {
      s && s.l(d), (t = Ga());
    },
    m(d, u) {
      s && s.m(d, u), _e(d, t, u), (l = !0);
    },
    p(d, [u]) {
      d[0]
        ? s
          ? (s.p(d, u), u & 1 && me(s, 1))
          : ((s = Is(d)), s.c(), me(s, 1), s.m(t.parentNode, t))
        : s &&
          (Jt(),
          pe(s, 1, 1, () => {
            s = null;
          }),
          Yt());
    },
    i(d) {
      l || (me(s), (l = !0));
    },
    o(d) {
      pe(s), (l = !1);
    },
    d(d) {
      s && s.d(d), d && r(t);
    },
  };
}
function rr(a, t, l) {
  let { showModal: s } = t,
    { closeDetailModal: d } = t,
    { gameweekData: u } = t,
    { playerTeam: f } = t,
    { opponentTeam: g } = t,
    { seasonName: _ } = t;
  function b(D) {
    fs.call(this, a, D);
  }
  function E(D) {
    fs.call(this, a, D);
  }
  return (
    (a.$$set = (D) => {
      "showModal" in D && l(0, (s = D.showModal)),
        "closeDetailModal" in D && l(1, (d = D.closeDetailModal)),
        "gameweekData" in D && l(2, (u = D.gameweekData)),
        "playerTeam" in D && l(3, (f = D.playerTeam)),
        "opponentTeam" in D && l(4, (g = D.opponentTeam)),
        "seasonName" in D && l(5, (_ = D.seasonName));
    }),
    [s, d, u, f, g, _, b, E]
  );
}
class or extends _l {
  constructor(t) {
    super(),
      vl(this, t, rr, sr, hl, {
        showModal: 0,
        closeDetailModal: 1,
        gameweekData: 2,
        playerTeam: 3,
        opponentTeam: 4,
        seasonName: 5,
      });
  }
}
function Ns(a, t, l) {
  const s = a.slice();
  return (s[23] = t[l]), s;
}
function ks(a, t, l) {
  const s = a.slice();
  return (s[26] = t[l]), s;
}
function nr(a) {
  let t,
    l,
    s,
    d,
    u,
    f,
    g,
    _,
    b,
    E,
    D,
    P,
    p,
    m,
    N,
    k,
    y,
    C,
    S,
    V,
    G,
    x,
    j,
    T,
    A,
    O,
    B,
    X,
    M,
    K,
    se,
    Z,
    ee,
    fe,
    ne,
    ce,
    q = a[2] && Ss(a),
    ie = a[7],
    U = [];
  for (let H = 0; H < ie.length; H += 1) U[H] = Ts(ks(a, ie, H));
  const le = [dr, cr],
    J = [];
  function ue(H, $) {
    return H[1].length > 0 ? 0 : 1;
  }
  return (
    (Z = ue(a)),
    (ee = J[Z] = le[Z](a)),
    {
      c() {
        q && q.c(),
          (t = I()),
          (l = o("div")),
          (s = o("div")),
          (d = o("div")),
          (u = o("div")),
          (f = o("div")),
          (g = o("button")),
          (_ = v("<")),
          (E = I()),
          (D = o("select"));
        for (let H = 0; H < U.length; H += 1) U[H].c();
        (P = I()),
          (p = o("button")),
          (m = v(">")),
          (k = I()),
          (y = o("div")),
          (C = o("div")),
          (S = o("div")),
          (V = o("div")),
          (G = v("Pos")),
          (x = I()),
          (j = o("div")),
          (T = v("Player")),
          (A = I()),
          (O = o("div")),
          (B = v("Points")),
          (X = I()),
          (M = o("div")),
          (K = v(" ")),
          (se = I()),
          ee.c(),
          this.h();
      },
      l(H) {
        q && q.l(H), (t = w(H)), (l = n(H, "DIV", { class: !0 }));
        var $ = i(l);
        s = n($, "DIV", { class: !0 });
        var R = i(s);
        d = n(R, "DIV", { class: !0 });
        var L = i(d);
        u = n(L, "DIV", { class: !0 });
        var F = i(u);
        f = n(F, "DIV", { class: !0 });
        var ae = i(f);
        g = n(ae, "BUTTON", { class: !0 });
        var Se = i(g);
        (_ = h(Se, "<")),
          Se.forEach(r),
          (E = w(ae)),
          (D = n(ae, "SELECT", { class: !0 }));
        var we = i(D);
        for (let Ne = 0; Ne < U.length; Ne += 1) U[Ne].l(we);
        we.forEach(r), (P = w(ae)), (p = n(ae, "BUTTON", { class: !0 }));
        var re = i(p);
        (m = h(re, ">")),
          re.forEach(r),
          ae.forEach(r),
          F.forEach(r),
          L.forEach(r),
          (k = w(R)),
          (y = n(R, "DIV", { class: !0 }));
        var ye = i(y);
        C = n(ye, "DIV", { class: !0 });
        var te = i(C);
        S = n(te, "DIV", { class: !0 });
        var be = i(S);
        V = n(be, "DIV", { class: !0 });
        var z = i(V);
        (G = h(z, "Pos")),
          z.forEach(r),
          (x = w(be)),
          (j = n(be, "DIV", { class: !0 }));
        var oe = i(j);
        (T = h(oe, "Player")),
          oe.forEach(r),
          (A = w(be)),
          (O = n(be, "DIV", { class: !0 }));
        var Q = i(O);
        (B = h(Q, "Points")),
          Q.forEach(r),
          (X = w(be)),
          (M = n(be, "DIV", { class: !0 }));
        var De = i(M);
        (K = h(De, " ")),
          De.forEach(r),
          be.forEach(r),
          (se = w(te)),
          ee.l(te),
          te.forEach(r),
          ye.forEach(r),
          R.forEach(r),
          $.forEach(r),
          this.h();
      },
      h() {
        c(g, "class", "text-2xl rounded fpl-button px-3 py-1"),
          (g.disabled = b = a[0] === 1),
          c(D, "class", "p-2 fpl-dropdown text-sm md:text-xl text-center"),
          a[0] === void 0 && al(() => a[13].call(D)),
          c(p, "class", "text-2xl rounded fpl-button px-3 py-1 ml-1"),
          (p.disabled = N = a[0] === 38),
          c(f, "class", "flex items-center mr-8"),
          c(u, "class", "flex items-center ml-4"),
          c(d, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
          c(V, "class", "w-1/6 text-center mx-4"),
          c(j, "class", "w-3/6 px-4"),
          c(O, "class", "w-1/6 text-center"),
          c(M, "class", "w-1/6 text-center"),
          c(
            S,
            "class",
            "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
          ),
          c(C, "class", "overflow-x-auto flex-1"),
          c(y, "class", "flex flex-col space-y-4 mt-4 text-lg"),
          c(s, "class", "flex flex-col space-y-4"),
          c(l, "class", "container-fluid mt-4");
      },
      m(H, $) {
        q && q.m(H, $),
          _e(H, t, $),
          _e(H, l, $),
          e(l, s),
          e(s, d),
          e(d, u),
          e(u, f),
          e(f, g),
          e(g, _),
          e(f, E),
          e(f, D);
        for (let R = 0; R < U.length; R += 1) U[R] && U[R].m(D, null);
        bt(D, a[0], !0),
          e(f, P),
          e(f, p),
          e(p, m),
          e(s, k),
          e(s, y),
          e(y, C),
          e(C, S),
          e(S, V),
          e(V, G),
          e(S, x),
          e(S, j),
          e(j, T),
          e(S, A),
          e(S, O),
          e(O, B),
          e(S, X),
          e(S, M),
          e(M, K),
          e(C, se),
          J[Z].m(C, null),
          (fe = !0),
          ne ||
            ((ce = [
              Ee(g, "click", a[12]),
              Ee(D, "change", a[13]),
              Ee(p, "click", a[14]),
            ]),
            (ne = !0));
      },
      p(H, $) {
        if (
          (H[2]
            ? q
              ? (q.p(H, $), $ & 4 && me(q, 1))
              : ((q = Ss(H)), q.c(), me(q, 1), q.m(t.parentNode, t))
            : q &&
              (Jt(),
              pe(q, 1, 1, () => {
                q = null;
              }),
              Yt()),
          (!fe || ($ & 129 && b !== (b = H[0] === 1))) && (g.disabled = b),
          $ & 128)
        ) {
          ie = H[7];
          let L;
          for (L = 0; L < ie.length; L += 1) {
            const F = ks(H, ie, L);
            U[L] ? U[L].p(F, $) : ((U[L] = Ts(F)), U[L].c(), U[L].m(D, null));
          }
          for (; L < U.length; L += 1) U[L].d(1);
          U.length = ie.length;
        }
        $ & 129 && bt(D, H[0]),
          (!fe || ($ & 129 && N !== (N = H[0] === 38))) && (p.disabled = N);
        let R = Z;
        (Z = ue(H)),
          Z === R
            ? J[Z].p(H, $)
            : (Jt(),
              pe(J[R], 1, 1, () => {
                J[R] = null;
              }),
              Yt(),
              (ee = J[Z]),
              ee ? ee.p(H, $) : ((ee = J[Z] = le[Z](H)), ee.c()),
              me(ee, 1),
              ee.m(C, null));
      },
      i(H) {
        fe || (me(q), me(ee), (fe = !0));
      },
      o(H) {
        pe(q), pe(ee), (fe = !1);
      },
      d(H) {
        q && q.d(H),
          H && r(t),
          H && r(l),
          ca(U, H),
          J[Z].d(),
          (ne = !1),
          ka(ce);
      },
    }
  );
}
function ir(a) {
  let t, l;
  return (
    (t = new qs({})),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Ue(t, s, d), (l = !0);
      },
      p: gt,
      i(s) {
        l || (me(t.$$.fragment, s), (l = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (l = !1);
      },
      d(s) {
        ze(t, s);
      },
    }
  );
}
function Ss(a) {
  let t, l;
  return (
    (t = new or({
      props: {
        playerTeam: a[3],
        opponentTeam: a[4],
        seasonName: a[8],
        showModal: a[2],
        closeDetailModal: a[11],
        gameweekData: a[5],
      },
    })),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Ue(t, s, d), (l = !0);
      },
      p(s, d) {
        const u = {};
        d & 8 && (u.playerTeam = s[3]),
          d & 16 && (u.opponentTeam = s[4]),
          d & 4 && (u.showModal = s[2]),
          d & 32 && (u.gameweekData = s[5]),
          t.$set(u);
      },
      i(s) {
        l || (me(t.$$.fragment, s), (l = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (l = !1);
      },
      d(s) {
        ze(t, s);
      },
    }
  );
}
function Ts(a) {
  let t,
    l,
    s = a[26] + "",
    d;
  return {
    c() {
      (t = o("option")), (l = v("Gameweek ")), (d = v(s)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var f = i(t);
      (l = h(f, "Gameweek ")), (d = h(f, s)), f.forEach(r), this.h();
    },
    h() {
      (t.__value = a[26]), (t.value = t.__value);
    },
    m(u, f) {
      _e(u, t, f), e(t, l), e(t, d);
    },
    p: gt,
    d(u) {
      u && r(t);
    },
  };
}
function cr(a) {
  let t, l;
  return {
    c() {
      (t = o("p")), (l = v("No data.")), this.h();
    },
    l(s) {
      t = n(s, "P", { class: !0 });
      var d = i(t);
      (l = h(d, "No data.")), d.forEach(r), this.h();
    },
    h() {
      c(t, "class", "w-100 p-4");
    },
    m(s, d) {
      _e(s, t, d), e(t, l);
    },
    p: gt,
    i: gt,
    o: gt,
    d(s) {
      s && r(t);
    },
  };
}
function dr(a) {
  let t,
    l,
    s = a[1],
    d = [];
  for (let f = 0; f < s.length; f += 1) d[f] = Cs(Ns(a, s, f));
  const u = (f) =>
    pe(d[f], 1, 1, () => {
      d[f] = null;
    });
  return {
    c() {
      for (let f = 0; f < d.length; f += 1) d[f].c();
      t = Ga();
    },
    l(f) {
      for (let g = 0; g < d.length; g += 1) d[g].l(f);
      t = Ga();
    },
    m(f, g) {
      for (let _ = 0; _ < d.length; _ += 1) d[_] && d[_].m(f, g);
      _e(f, t, g), (l = !0);
    },
    p(f, g) {
      if (g & 1026) {
        s = f[1];
        let _;
        for (_ = 0; _ < s.length; _ += 1) {
          const b = Ns(f, s, _);
          d[_]
            ? (d[_].p(b, g), me(d[_], 1))
            : ((d[_] = Cs(b)), d[_].c(), me(d[_], 1), d[_].m(t.parentNode, t));
        }
        for (Jt(), _ = s.length; _ < d.length; _ += 1) u(_);
        Yt();
      }
    },
    i(f) {
      if (!l) {
        for (let g = 0; g < s.length; g += 1) me(d[g]);
        l = !0;
      }
    },
    o(f) {
      d = d.filter(Boolean);
      for (let g = 0; g < d.length; g += 1) pe(d[g]);
      l = !1;
    },
    d(f) {
      ca(d, f), f && r(t);
    },
  };
}
function Cs(a) {
  let t,
    l,
    s = _s(a[23].player.position) + "",
    d,
    u,
    f,
    g,
    _ =
      a[23].player.firstName.length > 2
        ? a[23].player.firstName.substring(0, 1) + "."
        : "",
    b,
    E,
    D = a[23].player.lastName + "",
    P,
    p,
    m,
    N,
    k = a[23].points + "",
    y,
    C,
    S,
    V,
    G,
    x,
    j,
    T,
    A,
    O,
    B;
  x = new Xs({ props: { className: "w-6 mr-2" } });
  function X() {
    return a[15](a[23]);
  }
  return {
    c() {
      (t = o("div")),
        (l = o("div")),
        (d = v(s)),
        (u = I()),
        (f = o("div")),
        (g = o("a")),
        (b = v(_)),
        (E = I()),
        (P = v(D)),
        (m = I()),
        (N = o("div")),
        (y = v(k)),
        (C = I()),
        (S = o("div")),
        (V = o("button")),
        (G = o("span")),
        Be(x.$$.fragment),
        (j = v("View Details")),
        (T = I()),
        this.h();
    },
    l(M) {
      t = n(M, "DIV", { class: !0 });
      var K = i(t);
      l = n(K, "DIV", { class: !0 });
      var se = i(l);
      (d = h(se, s)),
        se.forEach(r),
        (u = w(K)),
        (f = n(K, "DIV", { class: !0 }));
      var Z = i(f);
      g = n(Z, "A", { href: !0 });
      var ee = i(g);
      (b = h(ee, _)),
        (E = w(ee)),
        (P = h(ee, D)),
        ee.forEach(r),
        Z.forEach(r),
        (m = w(K)),
        (N = n(K, "DIV", { class: !0 }));
      var fe = i(N);
      (y = h(fe, k)),
        fe.forEach(r),
        (C = w(K)),
        (S = n(K, "DIV", { class: !0 }));
      var ne = i(S);
      V = n(ne, "BUTTON", {});
      var ce = i(V);
      G = n(ce, "SPAN", { class: !0 });
      var q = i(G);
      Ye(x.$$.fragment, q),
        (j = h(q, "View Details")),
        q.forEach(r),
        ce.forEach(r),
        ne.forEach(r),
        (T = w(K)),
        K.forEach(r),
        this.h();
    },
    h() {
      c(l, "class", "w-1/6 text-center"),
        c(g, "href", (p = `/player?id=${a[23].player.id}`)),
        c(f, "class", "w-3/6 text-center"),
        c(N, "class", "w-1/6 text-center"),
        c(G, "class", "flex items-center"),
        c(S, "class", "w-1/6 text-center"),
        c(
          t,
          "class",
          "flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer"
        );
    },
    m(M, K) {
      _e(M, t, K),
        e(t, l),
        e(l, d),
        e(t, u),
        e(t, f),
        e(f, g),
        e(g, b),
        e(g, E),
        e(g, P),
        e(t, m),
        e(t, N),
        e(N, y),
        e(t, C),
        e(t, S),
        e(S, V),
        e(V, G),
        Ue(x, G, null),
        e(G, j),
        e(t, T),
        (A = !0),
        O || ((B = Ee(V, "click", X)), (O = !0));
    },
    p(M, K) {
      (a = M),
        (!A || K & 2) && s !== (s = _s(a[23].player.position) + "") && Y(d, s),
        (!A || K & 2) &&
          _ !==
            (_ =
              a[23].player.firstName.length > 2
                ? a[23].player.firstName.substring(0, 1) + "."
                : "") &&
          Y(b, _),
        (!A || K & 2) && D !== (D = a[23].player.lastName + "") && Y(P, D),
        (!A || (K & 2 && p !== (p = `/player?id=${a[23].player.id}`))) &&
          c(g, "href", p),
        (!A || K & 2) && k !== (k = a[23].points + "") && Y(y, k);
    },
    i(M) {
      A || (me(x.$$.fragment, M), (A = !0));
    },
    o(M) {
      pe(x.$$.fragment, M), (A = !1);
    },
    d(M) {
      M && r(t), ze(x), (O = !1), B();
    },
  };
}
function fr(a) {
  let t, l, s, d;
  const u = [ir, nr],
    f = [];
  function g(_, b) {
    return _[6] ? 0 : 1;
  }
  return (
    (t = g(a)),
    (l = f[t] = u[t](a)),
    {
      c() {
        l.c(), (s = Ga());
      },
      l(_) {
        l.l(_), (s = Ga());
      },
      m(_, b) {
        f[t].m(_, b), _e(_, s, b), (d = !0);
      },
      p(_, [b]) {
        let E = t;
        (t = g(_)),
          t === E
            ? f[t].p(_, b)
            : (Jt(),
              pe(f[E], 1, 1, () => {
                f[E] = null;
              }),
              Yt(),
              (l = f[t]),
              l ? l.p(_, b) : ((l = f[t] = u[t](_)), l.c()),
              me(l, 1),
              l.m(s.parentNode, s));
      },
      i(_) {
        d || (me(l), (d = !0));
      },
      o(_) {
        pe(l), (d = !1);
      },
      d(_) {
        f[t].d(_), _ && r(s);
      },
    }
  );
}
function ur(a, t, l) {
  let s = [],
    d,
    u = [],
    f,
    g,
    _,
    b = 1,
    E = Array.from({ length: 38 }, (O, B) => B + 1),
    D = [],
    P = !1,
    p,
    m,
    N,
    k,
    y = !0;
  Ol(async () => {
    try {
      await Kt.sync(),
        await Qt.sync(),
        await Ma.sync(),
        (f = Kt.subscribe((O) => {
          s = O.sort((B, X) => B.friendlyName.localeCompare(X.friendlyName));
        })),
        (g = Qt.subscribe((O) => {
          d = O;
        })),
        (_ = Ma.subscribe((O) => {
          u = O;
        })),
        await C("");
    } catch (O) {
      ll.show("Error fetching gameweek points.", "error"),
        console.error("Error fetching gameweek points:", O);
    } finally {
      l(6, (y = !1));
    }
  }),
    Rl(() => {
      f?.(), _?.(), g?.();
    });
  async function C(O) {
    let B = await Ws.getFantasyTeamForGameweek(O, b);
    l(1, (D = await Zs.getGameweekPlayers(B, b)));
  }
  const S = (O) => {
    l(0, (b = Math.max(1, Math.min(38, b + O))));
  };
  async function V(O) {
    try {
      l(5, (N = O));
      let B = O.player.teamId;
      l(3, (p = s.find((K) => K.id === B)));
      let X = u.find(
          (K) =>
            K.gameweek === O.gameweek &&
            (K.homeTeamId === B || K.awayTeamId === B)
        ),
        M = X?.homeTeamId === B ? X?.awayTeamId : X?.homeTeamId;
      l(4, (m = s.find((K) => K.id === M))), l(2, (P = !0));
    } catch (B) {
      ll.show("Error loading gameweek detail.", "error"),
        console.error("Error loading gameweek detail:", B);
    }
  }
  function G() {
    l(2, (P = !1));
  }
  const x = () => S(-1);
  function j() {
    (b = tl(this)), l(0, b), l(7, E);
  }
  return [b, D, P, p, m, N, y, E, k, S, V, G, x, j, () => S(1), (O) => V(O)];
}
class mr extends _l {
  constructor(t) {
    super(), vl(this, t, ur, fr, hl, {});
  }
}
function Ps(a, t, l) {
  const s = a.slice();
  return (s[36] = t[l]), s;
}
function Vs(a, t, l) {
  const s = a.slice();
  return (s[39] = t[l]), s;
}
function As(a, t, l) {
  const s = a.slice();
  return (s[42] = t[l]), s;
}
function _r(a) {
  let t,
    l,
    s,
    d,
    u,
    f,
    g,
    _,
    b,
    E,
    D,
    P,
    p,
    m,
    N,
    k,
    y,
    C,
    S,
    V,
    G,
    x,
    j,
    T,
    A,
    O,
    B,
    X,
    M,
    K,
    se,
    Z,
    ee,
    fe,
    ne,
    ce = a[1] === 1 && Os(a),
    q = a[1] === 2 && Ls(a);
  function ie(J, ue) {
    return J[5] && J[5].entries.length > 0 ? pr : hr;
  }
  let U = ie(a),
    le = U(a);
  return {
    c() {
      (t = o("div")),
        (l = o("div")),
        (s = o("div")),
        (d = o("div")),
        (u = o("div")),
        (f = o("button")),
        (g = v("<")),
        (_ = I()),
        (b = o("select")),
        (E = o("option")),
        (D = v("Weekly")),
        (P = o("option")),
        (p = v("Monthly")),
        (m = o("option")),
        (N = v("Season")),
        (k = I()),
        (y = o("button")),
        (C = v(">")),
        (S = I()),
        ce && ce.c(),
        (V = I()),
        q && q.c(),
        (G = I()),
        (x = o("div")),
        (j = o("div")),
        (T = o("div")),
        (A = o("div")),
        (O = v("Pos")),
        (B = I()),
        (X = o("div")),
        (M = v("Manager")),
        (K = I()),
        (se = o("div")),
        (Z = v("Points")),
        (ee = I()),
        le.c(),
        this.h();
    },
    l(J) {
      t = n(J, "DIV", { class: !0 });
      var ue = i(t);
      l = n(ue, "DIV", { class: !0 });
      var H = i(l);
      s = n(H, "DIV", { class: !0 });
      var $ = i(s);
      d = n($, "DIV", { class: !0 });
      var R = i(d);
      u = n(R, "DIV", { class: !0 });
      var L = i(u);
      f = n(L, "BUTTON", { class: !0 });
      var F = i(f);
      (g = h(F, "<")),
        F.forEach(r),
        (_ = w(L)),
        (b = n(L, "SELECT", { class: !0 }));
      var ae = i(b);
      E = n(ae, "OPTION", {});
      var Se = i(E);
      (D = h(Se, "Weekly")), Se.forEach(r), (P = n(ae, "OPTION", {}));
      var we = i(P);
      (p = h(we, "Monthly")), we.forEach(r), (m = n(ae, "OPTION", {}));
      var re = i(m);
      (N = h(re, "Season")),
        re.forEach(r),
        ae.forEach(r),
        (k = w(L)),
        (y = n(L, "BUTTON", { class: !0 }));
      var ye = i(y);
      (C = h(ye, ">")),
        ye.forEach(r),
        L.forEach(r),
        (S = w(R)),
        ce && ce.l(R),
        (V = w(R)),
        q && q.l(R),
        R.forEach(r),
        $.forEach(r),
        (G = w(H)),
        (x = n(H, "DIV", { class: !0 }));
      var te = i(x);
      j = n(te, "DIV", { class: !0 });
      var be = i(j);
      T = n(be, "DIV", { class: !0 });
      var z = i(T);
      A = n(z, "DIV", { class: !0 });
      var oe = i(A);
      (O = h(oe, "Pos")),
        oe.forEach(r),
        (B = w(z)),
        (X = n(z, "DIV", { class: !0 }));
      var Q = i(X);
      (M = h(Q, "Manager")),
        Q.forEach(r),
        (K = w(z)),
        (se = n(z, "DIV", { class: !0 }));
      var De = i(se);
      (Z = h(De, "Points")),
        De.forEach(r),
        z.forEach(r),
        (ee = w(be)),
        le.l(be),
        be.forEach(r),
        te.forEach(r),
        H.forEach(r),
        ue.forEach(r),
        this.h();
    },
    h() {
      c(f, "class", "text-2xl rounded fpl-button px-3 py-1"),
        (E.__value = 1),
        (E.value = E.__value),
        (P.__value = 2),
        (P.value = P.__value),
        (m.__value = 3),
        (m.value = m.__value),
        c(b, "class", "p-2 fpl-dropdown text-sm md:text-xl text-center mx-2"),
        a[1] === void 0 && al(() => a[16].call(b)),
        c(y, "class", "text-2xl rounded fpl-button px-3 py-1 ml-1"),
        c(u, "class", "flex items-center mr-8"),
        c(d, "class", "flex items-center ml-4"),
        c(s, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        c(A, "class", "w-1/6 px-4"),
        c(X, "class", "w-1/3 px-4"),
        c(se, "class", "w-1/2 px-4"),
        c(
          T,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        c(j, "class", "overflow-x-auto flex-1"),
        c(x, "class", "flex flex-col space-y-4 mt-4 text-lg"),
        c(l, "class", "flex flex-col space-y-4"),
        c(t, "class", "container-fluid mt-4");
    },
    m(J, ue) {
      _e(J, t, ue),
        e(t, l),
        e(l, s),
        e(s, d),
        e(d, u),
        e(u, f),
        e(f, g),
        e(u, _),
        e(u, b),
        e(b, E),
        e(E, D),
        e(b, P),
        e(P, p),
        e(b, m),
        e(m, N),
        bt(b, a[1], !0),
        e(u, k),
        e(u, y),
        e(y, C),
        e(d, S),
        ce && ce.m(d, null),
        e(d, V),
        q && q.m(d, null),
        e(l, G),
        e(l, x),
        e(x, j),
        e(j, T),
        e(T, A),
        e(A, O),
        e(T, B),
        e(T, X),
        e(X, M),
        e(T, K),
        e(T, se),
        e(se, Z),
        e(j, ee),
        le.m(j, null),
        fe ||
          ((ne = [
            Ee(f, "click", a[15]),
            Ee(b, "change", a[16]),
            Ee(y, "click", a[17]),
          ]),
          (fe = !0));
    },
    p(J, ue) {
      ue[0] & 2 && bt(b, J[1]),
        J[1] === 1
          ? ce
            ? ce.p(J, ue)
            : ((ce = Os(J)), ce.c(), ce.m(d, V))
          : ce && (ce.d(1), (ce = null)),
        J[1] === 2
          ? q
            ? q.p(J, ue)
            : ((q = Ls(J)), q.c(), q.m(d, null))
          : q && (q.d(1), (q = null)),
        U === (U = ie(J)) && le
          ? le.p(J, ue)
          : (le.d(1), (le = U(J)), le && (le.c(), le.m(j, null)));
    },
    i: gt,
    o: gt,
    d(J) {
      J && r(t), ce && ce.d(), q && q.d(), le.d(), (fe = !1), ka(ne);
    },
  };
}
function vr(a) {
  let t, l;
  return (
    (t = new qs({})),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Ue(t, s, d), (l = !0);
      },
      p: gt,
      i(s) {
        l || (me(t.$$.fragment, s), (l = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (l = !1);
      },
      d(s) {
        ze(t, s);
      },
    }
  );
}
function Os(a) {
  let t,
    l,
    s,
    d,
    u,
    f,
    g,
    _,
    b,
    E,
    D,
    P,
    p = a[9],
    m = [];
  for (let N = 0; N < p.length; N += 1) m[N] = xs(As(a, p, N));
  return {
    c() {
      (t = o("div")),
        (l = o("button")),
        (s = v("<")),
        (u = I()),
        (f = o("select"));
      for (let N = 0; N < m.length; N += 1) m[N].c();
      (g = I()), (_ = o("button")), (b = v(">")), this.h();
    },
    l(N) {
      t = n(N, "DIV", { class: !0 });
      var k = i(t);
      l = n(k, "BUTTON", { class: !0 });
      var y = i(l);
      (s = h(y, "<")),
        y.forEach(r),
        (u = w(k)),
        (f = n(k, "SELECT", { class: !0 }));
      var C = i(f);
      for (let V = 0; V < m.length; V += 1) m[V].l(C);
      C.forEach(r), (g = w(k)), (_ = n(k, "BUTTON", { class: !0 }));
      var S = i(_);
      (b = h(S, ">")), S.forEach(r), k.forEach(r), this.h();
    },
    h() {
      c(l, "class", "text-2xl rounded fpl-button px-3 py-1"),
        (l.disabled = d = a[2] === 1),
        c(f, "class", "p-2 fpl-dropdown text-sm md:text-xl text-center"),
        a[2] === void 0 && al(() => a[19].call(f)),
        c(_, "class", "text-2xl rounded fpl-button px-3 py-1 ml-1"),
        (_.disabled = E = a[2] === 38),
        c(t, "class", "flex items-center mr-8");
    },
    m(N, k) {
      _e(N, t, k), e(t, l), e(l, s), e(t, u), e(t, f);
      for (let y = 0; y < m.length; y += 1) m[y] && m[y].m(f, null);
      bt(f, a[2], !0),
        e(t, g),
        e(t, _),
        e(_, b),
        D ||
          ((P = [
            Ee(l, "click", a[18]),
            Ee(f, "change", a[19]),
            Ee(_, "click", a[20]),
          ]),
          (D = !0));
    },
    p(N, k) {
      if (
        (k[0] & 516 && d !== (d = N[2] === 1) && (l.disabled = d), k[0] & 512)
      ) {
        p = N[9];
        let y;
        for (y = 0; y < p.length; y += 1) {
          const C = As(N, p, y);
          m[y] ? m[y].p(C, k) : ((m[y] = xs(C)), m[y].c(), m[y].m(f, null));
        }
        for (; y < m.length; y += 1) m[y].d(1);
        m.length = p.length;
      }
      k[0] & 516 && bt(f, N[2]),
        k[0] & 516 && E !== (E = N[2] === 38) && (_.disabled = E);
    },
    d(N) {
      N && r(t), ca(m, N), (D = !1), ka(P);
    },
  };
}
function xs(a) {
  let t,
    l,
    s = a[42] + "",
    d;
  return {
    c() {
      (t = o("option")), (l = v("Gameweek ")), (d = v(s)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var f = i(t);
      (l = h(f, "Gameweek ")), (d = h(f, s)), f.forEach(r), this.h();
    },
    h() {
      (t.__value = a[42]), (t.value = t.__value);
    },
    m(u, f) {
      _e(u, t, f), e(t, l), e(t, d);
    },
    p: gt,
    d(u) {
      u && r(t);
    },
  };
}
function Ls(a) {
  let t,
    l,
    s,
    d,
    u,
    f,
    g,
    _,
    b,
    E,
    D,
    P,
    p,
    m,
    N,
    k,
    y,
    C,
    S,
    V,
    G,
    x,
    j,
    T,
    A,
    O,
    B,
    X,
    M,
    K,
    se,
    Z,
    ee,
    fe,
    ne,
    ce,
    q,
    ie,
    U,
    le,
    J,
    ue,
    H,
    $ = a[0],
    R = [];
  for (let L = 0; L < $.length; L += 1) R[L] = js(Vs(a, $, L));
  return {
    c() {
      (t = o("div")),
        (l = o("button")),
        (s = v("<")),
        (d = I()),
        (u = o("select"));
      for (let L = 0; L < R.length; L += 1) R[L].c();
      (f = I()),
        (g = o("button")),
        (_ = v(">")),
        (b = I()),
        (E = o("div")),
        (D = o("button")),
        (P = v("<")),
        (p = I()),
        (m = o("select")),
        (N = o("option")),
        (k = v("January")),
        (y = o("option")),
        (C = v("February")),
        (S = o("option")),
        (V = v("March")),
        (G = o("option")),
        (x = v("April")),
        (j = o("option")),
        (T = v("May")),
        (A = o("option")),
        (O = v("June")),
        (B = o("option")),
        (X = v("July")),
        (M = o("option")),
        (K = v("August")),
        (se = o("option")),
        (Z = v("September")),
        (ee = o("option")),
        (fe = v("October")),
        (ne = o("option")),
        (ce = v("November")),
        (q = o("option")),
        (ie = v("December")),
        (U = I()),
        (le = o("button")),
        (J = v(">")),
        this.h();
    },
    l(L) {
      t = n(L, "DIV", { class: !0 });
      var F = i(t);
      l = n(F, "BUTTON", { class: !0 });
      var ae = i(l);
      (s = h(ae, "<")),
        ae.forEach(r),
        (d = w(F)),
        (u = n(F, "SELECT", { class: !0 }));
      var Se = i(u);
      for (let Le = 0; Le < R.length; Le += 1) R[Le].l(Se);
      Se.forEach(r), (f = w(F)), (g = n(F, "BUTTON", { class: !0 }));
      var we = i(g);
      (_ = h(we, ">")),
        we.forEach(r),
        F.forEach(r),
        (b = w(L)),
        (E = n(L, "DIV", { class: !0 }));
      var re = i(E);
      D = n(re, "BUTTON", { class: !0 });
      var ye = i(D);
      (P = h(ye, "<")),
        ye.forEach(r),
        (p = w(re)),
        (m = n(re, "SELECT", { class: !0 }));
      var te = i(m);
      N = n(te, "OPTION", {});
      var be = i(N);
      (k = h(be, "January")), be.forEach(r), (y = n(te, "OPTION", {}));
      var z = i(y);
      (C = h(z, "February")), z.forEach(r), (S = n(te, "OPTION", {}));
      var oe = i(S);
      (V = h(oe, "March")), oe.forEach(r), (G = n(te, "OPTION", {}));
      var Q = i(G);
      (x = h(Q, "April")), Q.forEach(r), (j = n(te, "OPTION", {}));
      var De = i(j);
      (T = h(De, "May")), De.forEach(r), (A = n(te, "OPTION", {}));
      var Ne = i(A);
      (O = h(Ne, "June")), Ne.forEach(r), (B = n(te, "OPTION", {}));
      var Ve = i(B);
      (X = h(Ve, "July")), Ve.forEach(r), (M = n(te, "OPTION", {}));
      var Ae = i(M);
      (K = h(Ae, "August")), Ae.forEach(r), (se = n(te, "OPTION", {}));
      var Me = i(se);
      (Z = h(Me, "September")), Me.forEach(r), (ee = n(te, "OPTION", {}));
      var Te = i(ee);
      (fe = h(Te, "October")), Te.forEach(r), (ne = n(te, "OPTION", {}));
      var ge = i(ne);
      (ce = h(ge, "November")), ge.forEach(r), (q = n(te, "OPTION", {}));
      var st = i(q);
      (ie = h(st, "December")),
        st.forEach(r),
        te.forEach(r),
        (U = w(re)),
        (le = n(re, "BUTTON", { class: !0 }));
      var Et = i(le);
      (J = h(Et, ">")), Et.forEach(r), re.forEach(r), this.h();
    },
    h() {
      c(l, "class", "text-2xl rounded fpl-button px-3 py-1"),
        c(u, "class", "p-2 fpl-dropdown text-sm md:text-xl text-center"),
        a[4] === void 0 && al(() => a[22].call(u)),
        c(g, "class", "text-2xl rounded fpl-button px-3 py-1 ml-1"),
        c(t, "class", "flex items-center mr-8"),
        c(D, "class", "text-2xl rounded fpl-button px-3 py-1"),
        (N.__value = 1),
        (N.value = N.__value),
        (y.__value = 2),
        (y.value = y.__value),
        (S.__value = 3),
        (S.value = S.__value),
        (G.__value = 4),
        (G.value = G.__value),
        (j.__value = 5),
        (j.value = j.__value),
        (A.__value = 6),
        (A.value = A.__value),
        (B.__value = 7),
        (B.value = B.__value),
        (M.__value = 8),
        (M.value = M.__value),
        (se.__value = 9),
        (se.value = se.__value),
        (ee.__value = 10),
        (ee.value = ee.__value),
        (ne.__value = 11),
        (ne.value = ne.__value),
        (q.__value = 12),
        (q.value = q.__value),
        c(m, "class", "p-2 fpl-dropdown text-sm md:text-xl text-center"),
        a[3] === void 0 && al(() => a[25].call(m)),
        c(le, "class", "text-2xl rounded fpl-button px-3 py-1 ml-1"),
        c(E, "class", "flex items-center");
    },
    m(L, F) {
      _e(L, t, F), e(t, l), e(l, s), e(t, d), e(t, u);
      for (let ae = 0; ae < R.length; ae += 1) R[ae] && R[ae].m(u, null);
      bt(u, a[4], !0),
        e(t, f),
        e(t, g),
        e(g, _),
        _e(L, b, F),
        _e(L, E, F),
        e(E, D),
        e(D, P),
        e(E, p),
        e(E, m),
        e(m, N),
        e(N, k),
        e(m, y),
        e(y, C),
        e(m, S),
        e(S, V),
        e(m, G),
        e(G, x),
        e(m, j),
        e(j, T),
        e(m, A),
        e(A, O),
        e(m, B),
        e(B, X),
        e(m, M),
        e(M, K),
        e(m, se),
        e(se, Z),
        e(m, ee),
        e(ee, fe),
        e(m, ne),
        e(ne, ce),
        e(m, q),
        e(q, ie),
        bt(m, a[3], !0),
        e(E, U),
        e(E, le),
        e(le, J),
        ue ||
          ((H = [
            Ee(l, "click", a[21]),
            Ee(u, "change", a[22]),
            Ee(g, "click", a[23]),
            Ee(D, "click", a[24]),
            Ee(m, "change", a[25]),
            Ee(le, "click", a[26]),
          ]),
          (ue = !0));
    },
    p(L, F) {
      if (F[0] & 1) {
        $ = L[0];
        let ae;
        for (ae = 0; ae < $.length; ae += 1) {
          const Se = Vs(L, $, ae);
          R[ae]
            ? R[ae].p(Se, F)
            : ((R[ae] = js(Se)), R[ae].c(), R[ae].m(u, null));
        }
        for (; ae < R.length; ae += 1) R[ae].d(1);
        R.length = $.length;
      }
      F[0] & 17 && bt(u, L[4]), F[0] & 8 && bt(m, L[3]);
    },
    d(L) {
      L && r(t), ca(R, L), L && r(b), L && r(E), (ue = !1), ka(H);
    },
  };
}
function js(a) {
  let t,
    l = a[39].friendlyName + "",
    s,
    d;
  return {
    c() {
      (t = o("option")), (s = v(l)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var f = i(t);
      (s = h(f, l)), f.forEach(r), this.h();
    },
    h() {
      (t.__value = d = a[39].id), (t.value = t.__value);
    },
    m(u, f) {
      _e(u, t, f), e(t, s);
    },
    p(u, f) {
      f[0] & 1 && l !== (l = u[39].friendlyName + "") && Y(s, l),
        f[0] & 1 &&
          d !== (d = u[39].id) &&
          ((t.__value = d), (t.value = t.__value));
    },
    d(u) {
      u && r(t);
    },
  };
}
function hr(a) {
  let t, l;
  return {
    c() {
      (t = o("p")), (l = v("No leaderboard data.")), this.h();
    },
    l(s) {
      t = n(s, "P", { class: !0 });
      var d = i(t);
      (l = h(d, "No leaderboard data.")), d.forEach(r), this.h();
    },
    h() {
      c(t, "class", "w-100 p-4");
    },
    m(s, d) {
      _e(s, t, d), e(t, l);
    },
    p: gt,
    d(s) {
      s && r(t);
    },
  };
}
function pr(a) {
  let t,
    l,
    s,
    d,
    u,
    f,
    g,
    _,
    b,
    E,
    D,
    P,
    p,
    m,
    N,
    k = a[5].entries,
    y = [];
  for (let C = 0; C < k.length; C += 1) y[C] = Rs(Ps(a, k, C));
  return {
    c() {
      for (let C = 0; C < y.length; C += 1) y[C].c();
      (t = I()),
        (l = o("div")),
        (s = o("button")),
        (d = v("Previous")),
        (f = I()),
        (g = o("span")),
        (_ = v("Page ")),
        (b = v(a[7])),
        (E = I()),
        (D = o("button")),
        (P = v("Next")),
        this.h();
    },
    l(C) {
      for (let j = 0; j < y.length; j += 1) y[j].l(C);
      (t = w(C)), (l = n(C, "DIV", { class: !0 }));
      var S = i(l);
      s = n(S, "BUTTON", { class: !0 });
      var V = i(s);
      (d = h(V, "Previous")),
        V.forEach(r),
        (f = w(S)),
        (g = n(S, "SPAN", { class: !0 }));
      var G = i(g);
      (_ = h(G, "Page ")),
        (b = h(G, a[7])),
        G.forEach(r),
        (E = w(S)),
        (D = n(S, "BUTTON", { class: !0 }));
      var x = i(D);
      (P = h(x, "Next")), x.forEach(r), S.forEach(r), this.h();
    },
    h() {
      (s.disabled = u = a[7] === 1),
        c(
          s,
          "class",
          "px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        ),
        c(g, "class", "px-4"),
        (D.disabled = p = a[7] >= a[8]),
        c(
          D,
          "class",
          "px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        ),
        c(l, "class", "flex justify-center items-center mt-4 mb-4");
    },
    m(C, S) {
      for (let V = 0; V < y.length; V += 1) y[V] && y[V].m(C, S);
      _e(C, t, S),
        _e(C, l, S),
        e(l, s),
        e(s, d),
        e(l, f),
        e(l, g),
        e(g, _),
        e(g, b),
        e(l, E),
        e(l, D),
        e(D, P),
        m || ((N = [Ee(s, "click", a[27]), Ee(D, "click", a[28])]), (m = !0));
    },
    p(C, S) {
      if (S[0] & 36) {
        k = C[5].entries;
        let V;
        for (V = 0; V < k.length; V += 1) {
          const G = Ps(C, k, V);
          y[V]
            ? y[V].p(G, S)
            : ((y[V] = Rs(G)), y[V].c(), y[V].m(t.parentNode, t));
        }
        for (; V < y.length; V += 1) y[V].d(1);
        y.length = k.length;
      }
      S[0] & 128 && u !== (u = C[7] === 1) && (s.disabled = u),
        S[0] & 128 && Y(b, C[7]),
        S[0] & 384 && p !== (p = C[7] >= C[8]) && (D.disabled = p);
    },
    d(C) {
      ca(y, C), C && r(t), C && r(l), (m = !1), ka(N);
    },
  };
}
function Rs(a) {
  let t,
    l,
    s = a[36].positionText + "",
    d,
    u,
    f,
    g,
    _ = a[36].username + "",
    b,
    E,
    D,
    P,
    p = a[36].points + "",
    m;
  return {
    c() {
      (t = o("div")),
        (l = o("div")),
        (d = v(s)),
        (u = I()),
        (f = o("div")),
        (g = o("a")),
        (b = v(_)),
        (D = I()),
        (P = o("div")),
        (m = v(p)),
        this.h();
    },
    l(N) {
      t = n(N, "DIV", { class: !0 });
      var k = i(t);
      l = n(k, "DIV", { class: !0 });
      var y = i(l);
      (d = h(y, s)), y.forEach(r), (u = w(k)), (f = n(k, "DIV", { class: !0 }));
      var C = i(f);
      g = n(C, "A", { href: !0 });
      var S = i(g);
      (b = h(S, _)),
        S.forEach(r),
        C.forEach(r),
        (D = w(k)),
        (P = n(k, "DIV", { class: !0 }));
      var V = i(P);
      (m = h(V, p)), V.forEach(r), k.forEach(r), this.h();
    },
    h() {
      c(l, "class", "w-1/6 px-4"),
        c(g, "href", (E = `/manager?id=${a[36].principalId}&gw=${a[2]}`)),
        c(f, "class", "w-1/3 px-4"),
        c(P, "class", "w-1/2 px-4"),
        c(
          t,
          "class",
          "flex items-center p-2 justify-between py-4 border-b border-gray-700 cursor-pointer"
        );
    },
    m(N, k) {
      _e(N, t, k),
        e(t, l),
        e(l, d),
        e(t, u),
        e(t, f),
        e(f, g),
        e(g, b),
        e(t, D),
        e(t, P),
        e(P, m);
    },
    p(N, k) {
      k[0] & 32 && s !== (s = N[36].positionText + "") && Y(d, s),
        k[0] & 32 && _ !== (_ = N[36].username + "") && Y(b, _),
        k[0] & 548 &&
          E !== (E = `/manager?id=${N[36].principalId}&gw=${N[2]}`) &&
          c(g, "href", E),
        k[0] & 32 && p !== (p = N[36].points + "") && Y(m, p);
    },
    d(N) {
      N && r(t);
    },
  };
}
function br(a) {
  let t, l, s, d;
  const u = [vr, _r],
    f = [];
  function g(_, b) {
    return _[6] ? 0 : 1;
  }
  return (
    (t = g(a)),
    (l = f[t] = u[t](a)),
    {
      c() {
        l.c(), (s = Ga());
      },
      l(_) {
        l.l(_), (s = Ga());
      },
      m(_, b) {
        f[t].m(_, b), _e(_, s, b), (d = !0);
      },
      p(_, b) {
        let E = t;
        (t = g(_)),
          t === E
            ? f[t].p(_, b)
            : (Jt(),
              pe(f[E], 1, 1, () => {
                f[E] = null;
              }),
              Yt(),
              (l = f[t]),
              l ? l.p(_, b) : ((l = f[t] = u[t](_)), l.c()),
              me(l, 1),
              l.m(s.parentNode, s));
      },
      i(_) {
        d || (me(l), (d = !0));
      },
      o(_) {
        pe(l), (d = !1);
      },
      d(_) {
        f[t].d(_), _ && r(s);
      },
    }
  );
}
let gr = 25;
function Er(a, t, l) {
  let s = [],
    d,
    u,
    f,
    g = !0,
    _ = 1,
    b = 1,
    E = 1,
    D,
    P = Array.from({ length: 38 }, (U, le) => le + 1),
    p = 1,
    m,
    N,
    k,
    y = 0,
    C = 0;
  Ol(async () => {
    try {
      await Kt.sync(),
        await Qt.sync(),
        (u = Kt.subscribe((le) => {
          l(
            0,
            (s = le.sort((J, ue) =>
              J.friendlyName.localeCompare(ue.friendlyName)
            ))
          );
        })),
        (f = Qt.subscribe((le) => {
          d = le;
        })),
        l(4, (D = s[0].id)),
        (N = d?.activeGameweek ?? 1),
        (k = d?.focusGameweek ?? 1),
        l(2, (b = d?.focusGameweek ?? b)),
        l(3, (E = d?.activeMonth ?? E));
      let U = await el.getWeeklyLeaderboard();
      l(5, (m = U));
    } catch (U) {
      ll.show("Error fetching leaderboard data.", "error"),
        console.error("Error fetching leaderboard data:", U);
    } finally {
      l(6, (g = !1));
    }
  }),
    Rl(() => {
      u?.(), f?.();
    });
  async function S() {
    try {
      l(6, (g = !0)),
        _ === 1
          ? b === k && p <= 4
            ? l(5, (m = await el.getWeeklyLeaderboard()))
            : b < k || (b === k && p > 4)
            ? l(5, (m = await el.getWeeklyLeaderboardPage(b, p)))
            : b > N && l(5, (m = null))
          : _ === 2
          ? l(5, (m = await el.getMonthlyLeaderboard(D)))
          : _ === 3 && l(5, (m = await el.getSeasonLeaderboard()));
    } catch (U) {
      ll.show("Error fetching leaderboard data.", "error"),
        console.error("Error fetching leaderboard data:", U);
    } finally {
      l(6, (g = !1));
    }
  }
  const V = (U) => {
    l(2, (b = Math.max(1, Math.min(38, b + U))));
  };
  function G(U) {
    l(3, (E += U)), E > 12 ? l(3, (E = 1)) : E < 1 && l(3, (E = 12)), S();
  }
  function x(U) {
    l(7, (p = Math.max(1, Math.min(y, p + U)))), S();
  }
  function j(U) {
    l(1, (_ += U)), _ > 3 ? l(1, (_ = 1)) : _ < 1 && l(1, (_ = 3)), S();
  }
  function T(U) {
    (C = (C + U + s.length) % s.length), l(4, (D = s[C].id)), S();
  }
  const A = () => j(-1);
  function O() {
    (_ = tl(this)), l(1, _);
  }
  const B = () => j(1),
    X = () => V(-1);
  function M() {
    (b = tl(this)), l(2, b), l(9, P);
  }
  const K = () => V(1),
    se = () => T(-1);
  function Z() {
    (D = tl(this)), l(4, D), l(0, s);
  }
  const ee = () => T(1),
    fe = () => G(-1);
  function ne() {
    (E = tl(this)), l(3, E);
  }
  const ce = () => G(1),
    q = () => x(-1),
    ie = () => x(1);
  return (
    (a.$$.update = () => {
      a.$$.dirty[0] & 17 && (C = s.findIndex((U) => U.id === D)),
        a.$$.dirty[0] & 32 &&
          m &&
          m.totalEntries &&
          l(8, (y = Math.ceil(Number(m.totalEntries) / gr))),
        a.$$.dirty[0] & 30 && S();
    }),
    [
      s,
      _,
      b,
      E,
      D,
      m,
      g,
      p,
      y,
      P,
      V,
      G,
      x,
      j,
      T,
      A,
      O,
      B,
      X,
      M,
      K,
      se,
      Z,
      ee,
      fe,
      ne,
      ce,
      q,
      ie,
    ]
  );
}
class yr extends _l {
  constructor(t) {
    super(), vl(this, t, Er, br, hl, {}, null, [-1, -1]);
  }
}
function Fs(a, t, l) {
  const s = a.slice();
  return (s[15] = t[l]), (s[17] = l), s;
}
function $s(a, t, l) {
  const s = a.slice();
  return (s[18] = t[l]), s;
}
function Gs(a) {
  let t,
    l,
    s = a[18] + "",
    d;
  return {
    c() {
      (t = o("option")), (l = v("Gameweek ")), (d = v(s)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var f = i(t);
      (l = h(f, "Gameweek ")), (d = h(f, s)), f.forEach(r), this.h();
    },
    h() {
      (t.__value = a[18]), (t.value = t.__value);
    },
    m(u, f) {
      _e(u, t, f), e(t, l), e(t, d);
    },
    p: gt,
    d(u) {
      u && r(t);
    },
  };
}
function Ms(a) {
  let t,
    l,
    s = a[17] + 1 + "",
    d,
    u,
    f,
    g,
    _,
    b = a[15].friendlyName + "",
    E,
    D,
    P,
    p,
    m = a[15].played + "",
    N,
    k,
    y,
    C = a[15].wins + "",
    S,
    V,
    G,
    x = a[15].draws + "",
    j,
    T,
    A,
    O = a[15].losses + "",
    B,
    X,
    M,
    K = a[15].goalsFor + "",
    se,
    Z,
    ee,
    fe = a[15].goalsAgainst + "",
    ne,
    ce,
    q,
    ie = a[15].goalsFor - a[15].goalsAgainst + "",
    U,
    le,
    J,
    ue = a[15].points + "",
    H,
    $,
    R;
  return (
    (g = new sl({
      props: {
        primaryColour: a[15].primaryColourHex,
        secondaryColour: a[15].secondaryColourHex,
        thirdColour: a[15].thirdColourHex,
        className: "w-6 h-6 mr-2",
      },
    })),
    {
      c() {
        (t = o("div")),
          (l = o("div")),
          (d = v(s)),
          (u = I()),
          (f = o("a")),
          Be(g.$$.fragment),
          (_ = I()),
          (E = v(b)),
          (P = I()),
          (p = o("div")),
          (N = v(m)),
          (k = I()),
          (y = o("div")),
          (S = v(C)),
          (V = I()),
          (G = o("div")),
          (j = v(x)),
          (T = I()),
          (A = o("div")),
          (B = v(O)),
          (X = I()),
          (M = o("div")),
          (se = v(K)),
          (Z = I()),
          (ee = o("div")),
          (ne = v(fe)),
          (ce = I()),
          (q = o("div")),
          (U = v(ie)),
          (le = I()),
          (J = o("div")),
          (H = v(ue)),
          ($ = I()),
          this.h();
      },
      l(L) {
        t = n(L, "DIV", { class: !0 });
        var F = i(t);
        l = n(F, "DIV", { class: !0 });
        var ae = i(l);
        (d = h(ae, s)),
          ae.forEach(r),
          (u = w(F)),
          (f = n(F, "A", { class: !0, href: !0 }));
        var Se = i(f);
        Ye(g.$$.fragment, Se),
          (_ = w(Se)),
          (E = h(Se, b)),
          Se.forEach(r),
          (P = w(F)),
          (p = n(F, "DIV", { class: !0 }));
        var we = i(p);
        (N = h(we, m)),
          we.forEach(r),
          (k = w(F)),
          (y = n(F, "DIV", { class: !0 }));
        var re = i(y);
        (S = h(re, C)),
          re.forEach(r),
          (V = w(F)),
          (G = n(F, "DIV", { class: !0 }));
        var ye = i(G);
        (j = h(ye, x)),
          ye.forEach(r),
          (T = w(F)),
          (A = n(F, "DIV", { class: !0 }));
        var te = i(A);
        (B = h(te, O)),
          te.forEach(r),
          (X = w(F)),
          (M = n(F, "DIV", { class: !0 }));
        var be = i(M);
        (se = h(be, K)),
          be.forEach(r),
          (Z = w(F)),
          (ee = n(F, "DIV", { class: !0 }));
        var z = i(ee);
        (ne = h(z, fe)),
          z.forEach(r),
          (ce = w(F)),
          (q = n(F, "DIV", { class: !0 }));
        var oe = i(q);
        (U = h(oe, ie)),
          oe.forEach(r),
          (le = w(F)),
          (J = n(F, "DIV", { class: !0 }));
        var Q = i(J);
        (H = h(Q, ue)), Q.forEach(r), ($ = w(F)), F.forEach(r), this.h();
      },
      h() {
        c(l, "class", "w-1/12 text-center mx-4"),
          c(f, "class", "w-3/12 flex items-center justify-start"),
          c(f, "href", (D = `/club?id=${a[15].id}`)),
          c(p, "class", "w-1/12 text-center"),
          c(y, "class", "w-1/12 text-center"),
          c(G, "class", "w-1/12 text-center"),
          c(A, "class", "w-1/12 text-center"),
          c(M, "class", "w-1/12 text-center"),
          c(ee, "class", "w-1/12 text-center"),
          c(q, "class", "w-1/12 text-center"),
          c(J, "class", "w-1/12 text-center"),
          c(
            t,
            "class",
            "flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer"
          );
      },
      m(L, F) {
        _e(L, t, F),
          e(t, l),
          e(l, d),
          e(t, u),
          e(t, f),
          Ue(g, f, null),
          e(f, _),
          e(f, E),
          e(t, P),
          e(t, p),
          e(p, N),
          e(t, k),
          e(t, y),
          e(y, S),
          e(t, V),
          e(t, G),
          e(G, j),
          e(t, T),
          e(t, A),
          e(A, B),
          e(t, X),
          e(t, M),
          e(M, se),
          e(t, Z),
          e(t, ee),
          e(ee, ne),
          e(t, ce),
          e(t, q),
          e(q, U),
          e(t, le),
          e(t, J),
          e(J, H),
          e(t, $),
          (R = !0);
      },
      p(L, F) {
        const ae = {};
        F & 2 && (ae.primaryColour = L[15].primaryColourHex),
          F & 2 && (ae.secondaryColour = L[15].secondaryColourHex),
          F & 2 && (ae.thirdColour = L[15].thirdColourHex),
          g.$set(ae),
          (!R || F & 2) && b !== (b = L[15].friendlyName + "") && Y(E, b),
          (!R || (F & 2 && D !== (D = `/club?id=${L[15].id}`))) &&
            c(f, "href", D),
          (!R || F & 2) && m !== (m = L[15].played + "") && Y(N, m),
          (!R || F & 2) && C !== (C = L[15].wins + "") && Y(S, C),
          (!R || F & 2) && x !== (x = L[15].draws + "") && Y(j, x),
          (!R || F & 2) && O !== (O = L[15].losses + "") && Y(B, O),
          (!R || F & 2) && K !== (K = L[15].goalsFor + "") && Y(se, K),
          (!R || F & 2) && fe !== (fe = L[15].goalsAgainst + "") && Y(ne, fe),
          (!R || F & 2) &&
            ie !== (ie = L[15].goalsFor - L[15].goalsAgainst + "") &&
            Y(U, ie),
          (!R || F & 2) && ue !== (ue = L[15].points + "") && Y(H, ue);
      },
      i(L) {
        R || (me(g.$$.fragment, L), (R = !0));
      },
      o(L) {
        pe(g.$$.fragment, L), (R = !1);
      },
      d(L) {
        L && r(t), ze(g);
      },
    }
  );
}
function Ir(a) {
  let t,
    l,
    s,
    d,
    u,
    f,
    g,
    _,
    b,
    E,
    D,
    P,
    p,
    m,
    N,
    k,
    y,
    C,
    S,
    V,
    G,
    x,
    j,
    T,
    A,
    O,
    B,
    X,
    M,
    K,
    se,
    Z,
    ee,
    fe,
    ne,
    ce,
    q,
    ie,
    U,
    le,
    J,
    ue,
    H,
    $,
    R,
    L,
    F,
    ae,
    Se,
    we = a[2],
    re = [];
  for (let z = 0; z < we.length; z += 1) re[z] = Gs($s(a, we, z));
  let ye = a[1],
    te = [];
  for (let z = 0; z < ye.length; z += 1) te[z] = Ms(Fs(a, ye, z));
  const be = (z) =>
    pe(te[z], 1, 1, () => {
      te[z] = null;
    });
  return {
    c() {
      (t = o("div")),
        (l = o("div")),
        (s = o("div")),
        (d = o("button")),
        (u = v("<")),
        (g = I()),
        (_ = o("select"));
      for (let z = 0; z < re.length; z += 1) re[z].c();
      (b = I()),
        (E = o("button")),
        (D = v(">")),
        (p = I()),
        (m = o("div")),
        (N = o("div")),
        (k = o("div")),
        (y = o("div")),
        (C = v("Pos")),
        (S = I()),
        (V = o("div")),
        (G = v("Team")),
        (x = I()),
        (j = o("div")),
        (T = v("P")),
        (A = I()),
        (O = o("div")),
        (B = v("W")),
        (X = I()),
        (M = o("div")),
        (K = v("D")),
        (se = I()),
        (Z = o("div")),
        (ee = v("L")),
        (fe = I()),
        (ne = o("div")),
        (ce = v("GF")),
        (q = I()),
        (ie = o("div")),
        (U = v("GA")),
        (le = I()),
        (J = o("div")),
        (ue = v("GD")),
        (H = I()),
        ($ = o("div")),
        (R = v("PTS")),
        (L = I());
      for (let z = 0; z < te.length; z += 1) te[z].c();
      this.h();
    },
    l(z) {
      t = n(z, "DIV", { class: !0 });
      var oe = i(t);
      l = n(oe, "DIV", { class: !0 });
      var Q = i(l);
      s = n(Q, "DIV", { class: !0 });
      var De = i(s);
      d = n(De, "BUTTON", { class: !0 });
      var Ne = i(d);
      (u = h(Ne, "<")),
        Ne.forEach(r),
        (g = w(De)),
        (_ = n(De, "SELECT", { class: !0 }));
      var Ve = i(_);
      for (let Pe = 0; Pe < re.length; Pe += 1) re[Pe].l(Ve);
      Ve.forEach(r), (b = w(De)), (E = n(De, "BUTTON", { class: !0 }));
      var Ae = i(E);
      (D = h(Ae, ">")),
        Ae.forEach(r),
        De.forEach(r),
        Q.forEach(r),
        (p = w(oe)),
        (m = n(oe, "DIV", { class: !0 }));
      var Me = i(m);
      N = n(Me, "DIV", { class: !0 });
      var Te = i(N);
      k = n(Te, "DIV", { class: !0 });
      var ge = i(k);
      y = n(ge, "DIV", { class: !0 });
      var st = i(y);
      (C = h(st, "Pos")),
        st.forEach(r),
        (S = w(ge)),
        (V = n(ge, "DIV", { class: !0 }));
      var Et = i(V);
      (G = h(Et, "Team")),
        Et.forEach(r),
        (x = w(ge)),
        (j = n(ge, "DIV", { class: !0 }));
      var Le = i(j);
      (T = h(Le, "P")),
        Le.forEach(r),
        (A = w(ge)),
        (O = n(ge, "DIV", { class: !0 }));
      var kt = i(O);
      (B = h(kt, "W")),
        kt.forEach(r),
        (X = w(ge)),
        (M = n(ge, "DIV", { class: !0 }));
      var rt = i(M);
      (K = h(rt, "D")),
        rt.forEach(r),
        (se = w(ge)),
        (Z = n(ge, "DIV", { class: !0 }));
      var yt = i(Z);
      (ee = h(yt, "L")),
        yt.forEach(r),
        (fe = w(ge)),
        (ne = n(ge, "DIV", { class: !0 }));
      var He = i(ne);
      (ce = h(He, "GF")),
        He.forEach(r),
        (q = w(ge)),
        (ie = n(ge, "DIV", { class: !0 }));
      var ot = i(ie);
      (U = h(ot, "GA")),
        ot.forEach(r),
        (le = w(ge)),
        (J = n(ge, "DIV", { class: !0 }));
      var St = i(J);
      (ue = h(St, "GD")),
        St.forEach(r),
        (H = w(ge)),
        ($ = n(ge, "DIV", { class: !0 }));
      var Ot = i($);
      (R = h(Ot, "PTS")), Ot.forEach(r), ge.forEach(r), (L = w(Te));
      for (let Pe = 0; Pe < te.length; Pe += 1) te[Pe].l(Te);
      Te.forEach(r), Me.forEach(r), oe.forEach(r), this.h();
    },
    h() {
      c(d, "class", "text-2xl rounded fpl-button px-3 py-1"),
        (d.disabled = f = a[0] === 1),
        c(_, "class", "p-2 fpl-dropdown text-sm md:text-xl text-center"),
        a[0] === void 0 && al(() => a[8].call(_)),
        c(E, "class", "text-2xl rounded fpl-button px-3 py-1 ml-1"),
        (E.disabled = P = a[0] === 38),
        c(s, "class", "flex items-center space-x-2 ml-4"),
        c(l, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        c(y, "class", "w-1/12 text-center mx-4"),
        c(V, "class", "w-3/12"),
        c(j, "class", "w-1/12 text-center"),
        c(O, "class", "w-1/12 text-center"),
        c(M, "class", "w-1/12 text-center"),
        c(Z, "class", "w-1/12 text-center"),
        c(ne, "class", "w-1/12 text-center"),
        c(ie, "class", "w-1/12 text-center"),
        c(J, "class", "w-1/12 text-center"),
        c($, "class", "w-1/12 text-center"),
        c(
          k,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        c(N, "class", "overflow-x-auto flex-1"),
        c(m, "class", "flex flex-col space-y-4 mt-4 text-lg"),
        c(t, "class", "container-fluid mt-4");
    },
    m(z, oe) {
      _e(z, t, oe), e(t, l), e(l, s), e(s, d), e(d, u), e(s, g), e(s, _);
      for (let Q = 0; Q < re.length; Q += 1) re[Q] && re[Q].m(_, null);
      bt(_, a[0], !0),
        e(s, b),
        e(s, E),
        e(E, D),
        e(t, p),
        e(t, m),
        e(m, N),
        e(N, k),
        e(k, y),
        e(y, C),
        e(k, S),
        e(k, V),
        e(V, G),
        e(k, x),
        e(k, j),
        e(j, T),
        e(k, A),
        e(k, O),
        e(O, B),
        e(k, X),
        e(k, M),
        e(M, K),
        e(k, se),
        e(k, Z),
        e(Z, ee),
        e(k, fe),
        e(k, ne),
        e(ne, ce),
        e(k, q),
        e(k, ie),
        e(ie, U),
        e(k, le),
        e(k, J),
        e(J, ue),
        e(k, H),
        e(k, $),
        e($, R),
        e(N, L);
      for (let Q = 0; Q < te.length; Q += 1) te[Q] && te[Q].m(N, null);
      (F = !0),
        ae ||
          ((Se = [
            Ee(d, "click", a[7]),
            Ee(_, "change", a[8]),
            Ee(E, "click", a[9]),
          ]),
          (ae = !0));
    },
    p(z, [oe]) {
      if (
        ((!F || (oe & 5 && f !== (f = z[0] === 1))) && (d.disabled = f), oe & 4)
      ) {
        we = z[2];
        let Q;
        for (Q = 0; Q < we.length; Q += 1) {
          const De = $s(z, we, Q);
          re[Q]
            ? re[Q].p(De, oe)
            : ((re[Q] = Gs(De)), re[Q].c(), re[Q].m(_, null));
        }
        for (; Q < re.length; Q += 1) re[Q].d(1);
        re.length = we.length;
      }
      if (
        (oe & 5 && bt(_, z[0]),
        (!F || (oe & 5 && P !== (P = z[0] === 38))) && (E.disabled = P),
        oe & 2)
      ) {
        ye = z[1];
        let Q;
        for (Q = 0; Q < ye.length; Q += 1) {
          const De = Fs(z, ye, Q);
          te[Q]
            ? (te[Q].p(De, oe), me(te[Q], 1))
            : ((te[Q] = Ms(De)), te[Q].c(), me(te[Q], 1), te[Q].m(N, null));
        }
        for (Jt(), Q = ye.length; Q < te.length; Q += 1) be(Q);
        Yt();
      }
    },
    i(z) {
      if (!F) {
        for (let oe = 0; oe < ye.length; oe += 1) me(te[oe]);
        F = !0;
      }
    },
    o(z) {
      te = te.filter(Boolean);
      for (let oe = 0; oe < te.length; oe += 1) pe(te[oe]);
      F = !1;
    },
    d(z) {
      z && r(t), ca(re, z), ca(te, z), (ae = !1), ka(Se);
    },
  };
}
function wr(a, t, l) {
  let s = [],
    d = [],
    u,
    f = [],
    g = 1,
    _ = Array.from({ length: 38 }, (C, S) => S + 1),
    b = [],
    E,
    D,
    P;
  Ol(async () => {
    try {
      await Kt.sync(),
        await Ma.sync(),
        await Qt.sync(),
        (E = Kt.subscribe((C) => {
          l(4, (s = C));
        })),
        (D = Ma.subscribe((C) => {
          l(5, (d = C)),
            l(
              6,
              (f = d.map((S) => ({
                fixture: S,
                homeTeam: m(S.homeTeamId),
                awayTeam: m(S.awayTeamId),
              })))
            );
        })),
        (P = Qt.subscribe((C) => {
          u = C;
        }));
    } catch (C) {
      ll.show("Error fetching league table.", "error"),
        console.error("Error fetching league table:", C);
    } finally {
    }
  }),
    Rl(() => {
      E?.(), D?.(), P?.();
    });
  const p = (C) => {
    l(0, (g = Math.max(1, Math.min(38, g + C))));
  };
  function m(C) {
    return s.find((S) => S.id === C);
  }
  const N = () => p(-1);
  function k() {
    (g = tl(this)), l(0, g), l(2, _);
  }
  const y = () => p(1);
  return (
    (a.$$.update = () => {
      a.$$.dirty & 113 &&
        d.length > 0 &&
        s.length > 0 &&
        l(1, (b = Ks(f, s, g)));
    }),
    [g, b, _, p, s, d, f, N, k, y]
  );
}
class Dr extends _l {
  constructor(t) {
    super(), vl(this, t, wr, Ir, hl, {});
  }
}
function Nr(a) {
  let t;
  return {
    c() {
      t = v("-");
    },
    l(l) {
      t = h(l, "-");
    },
    m(l, s) {
      _e(l, t, s);
    },
    p: gt,
    d(l) {
      l && r(t);
    },
  };
}
function kr(a) {
  let t,
    l = a[10].username + "",
    s,
    d;
  return {
    c() {
      (t = o("a")), (s = v(l)), this.h();
    },
    l(u) {
      t = n(u, "A", { href: !0 });
      var f = i(t);
      (s = h(f, l)), f.forEach(r), this.h();
    },
    h() {
      c(t, "href", (d = `/manager?id=${a[10].principalId}&gw=${a[1]}`));
    },
    m(u, f) {
      _e(u, t, f), e(t, s);
    },
    p(u, f) {
      f & 1024 && l !== (l = u[10].username + "") && Y(s, l),
        f & 1026 &&
          d !== (d = `/manager?id=${u[10].principalId}&gw=${u[1]}`) &&
          c(t, "href", d);
    },
    d(u) {
      u && r(t);
    },
  };
}
function Sr(a) {
  let t;
  return {
    c() {
      t = v("-");
    },
    l(l) {
      t = h(l, "-");
    },
    m(l, s) {
      _e(l, t, s);
    },
    p: gt,
    d(l) {
      l && r(t);
    },
  };
}
function Tr(a) {
  let t = a[10].points + "",
    l,
    s;
  return {
    c() {
      (l = v(t)), (s = v(" points"));
    },
    l(d) {
      (l = h(d, t)), (s = h(d, " points"));
    },
    m(d, u) {
      _e(d, l, u), _e(d, s, u);
    },
    p(d, u) {
      u & 1024 && t !== (t = d[10].points + "") && Y(l, t);
    },
    d(d) {
      d && r(l), d && r(s);
    },
  };
}
function Hs(a) {
  let t, l, s, d, u, f, g;
  return {
    c() {
      (t = o("li")), (l = o("button")), (s = v("Points")), this.h();
    },
    l(_) {
      t = n(_, "LI", { class: !0 });
      var b = i(t);
      l = n(b, "BUTTON", { class: !0 });
      var E = i(l);
      (s = h(E, "Points")), E.forEach(r), b.forEach(r), this.h();
    },
    h() {
      c(
        l,
        "class",
        (d =
          Ze(`p-2 ${a[0] === "points" ? "text-white" : "text-gray-400"}`) +
          " svelte-1ylya66")
      ),
        c(
          t,
          "class",
          (u =
            Ze(
              `mr-4 text-xs md:text-lg ${a[0] === "points" ? "active-tab" : ""}`
            ) + " svelte-1ylya66")
        );
    },
    m(_, b) {
      _e(_, t, b),
        e(t, l),
        e(l, s),
        f || ((g = Ee(l, "click", a[16])), (f = !0));
    },
    p(_, b) {
      b & 1 &&
        d !==
          (d =
            Ze(`p-2 ${_[0] === "points" ? "text-white" : "text-gray-400"}`) +
            " svelte-1ylya66") &&
        c(l, "class", d),
        b & 1 &&
          u !==
            (u =
              Ze(
                `mr-4 text-xs md:text-lg ${
                  _[0] === "points" ? "active-tab" : ""
                }`
              ) + " svelte-1ylya66") &&
          c(t, "class", u);
    },
    d(_) {
      _ && r(t), (f = !1), g();
    },
  };
}
function Cr(a) {
  let t, l;
  return (
    (t = new Dr({})),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Ue(t, s, d), (l = !0);
      },
      i(s) {
        l || (me(t.$$.fragment, s), (l = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (l = !1);
      },
      d(s) {
        ze(t, s);
      },
    }
  );
}
function Pr(a) {
  let t, l;
  return (
    (t = new yr({})),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Ue(t, s, d), (l = !0);
      },
      i(s) {
        l || (me(t.$$.fragment, s), (l = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (l = !1);
      },
      d(s) {
        ze(t, s);
      },
    }
  );
}
function Vr(a) {
  let t, l;
  return (
    (t = new mr({})),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Ue(t, s, d), (l = !0);
      },
      i(s) {
        l || (me(t.$$.fragment, s), (l = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (l = !1);
      },
      d(s) {
        ze(t, s);
      },
    }
  );
}
function Ar(a) {
  let t, l;
  return (
    (t = new lr({})),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Ue(t, s, d), (l = !0);
      },
      i(s) {
        l || (me(t.$$.fragment, s), (l = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (l = !1);
      },
      d(s) {
        ze(t, s);
      },
    }
  );
}
function Or(a) {
  let t,
    l,
    s,
    d,
    u,
    f,
    g,
    _,
    b,
    E,
    D,
    P,
    p,
    m,
    N,
    k,
    y,
    C,
    S,
    V,
    G,
    x,
    j,
    T,
    A,
    O,
    B,
    X,
    M,
    K,
    se,
    Z,
    ee,
    fe,
    ne,
    ce,
    q,
    ie,
    U,
    le,
    J,
    ue,
    H,
    $,
    R,
    L,
    F,
    ae,
    Se,
    we,
    re,
    ye,
    te,
    be,
    z,
    oe,
    Q,
    De,
    Ne,
    Ve,
    Ae,
    Me,
    Te = (a[11] ? a[11].abbreviatedName : "") + "",
    ge,
    st,
    Et,
    Le,
    kt,
    rt,
    yt,
    He,
    ot = (a[12] ? a[12].abbreviatedName : "") + "",
    St,
    Ot,
    Pe,
    nt,
    Ha,
    it,
    It,
    da,
    Sa,
    Xt,
    Oe,
    Zt,
    xt,
    Wa,
    ct,
    Lt,
    ea,
    qa,
    ta,
    aa,
    jt,
    Ba,
    la,
    dt,
    fa,
    Ua,
    et,
    sa,
    Rt,
    za,
    Ke,
    ft,
    Ta,
    Ca,
    ra,
    ua,
    Tt,
    Ka,
    Ct,
    ma,
    We,
    Qe,
    Je,
    Ft,
    tt,
    _a,
    va,
    Pa,
    oa,
    na,
    Pt,
    Vt,
    ut,
    $t,
    Va,
    Ja,
    mt,
    _t,
    Aa,
    Oa,
    Gt,
    ha,
    je,
    Re,
    ke,
    At,
    pa;
  (F = new sl({
    props: {
      primaryColour: a[11] ? a[11].primaryColourHex : "",
      secondaryColour: a[11] ? a[11].secondaryColourHex : "",
      thirdColour: a[11] ? a[11].thirdColourHex : "",
    },
  })),
    (oe = new sl({
      props: {
        primaryColour: a[12] ? a[12].primaryColourHex : "",
        secondaryColour: a[12] ? a[12].secondaryColourHex : "",
        thirdColour: a[12] ? a[12].thirdColourHex : "",
      },
    }));
  function rl(W, de) {
    return W[10] ? kr : Nr;
  }
  let xa = rl(a),
    qe = xa(a);
  function La(W, de) {
    return W[10] ? Tr : Sr;
  }
  let ba = La(a),
    at = ba(a),
    Ce = a[13] && Hs(a);
  const Mt = [Ar, Vr, Pr, Cr],
    vt = [];
  function ol(W, de) {
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
    ~(je = ol(a)) && (Re = vt[je] = Mt[je](a)),
    {
      c() {
        (t = o("div")),
          (l = o("div")),
          (s = o("div")),
          (d = o("div")),
          (u = o("p")),
          (f = v("Gameweek")),
          (g = I()),
          (_ = o("p")),
          (b = v(a[1])),
          (E = I()),
          (D = o("p")),
          (P = v(a[2])),
          (p = I()),
          (m = o("div")),
          (N = I()),
          (k = o("div")),
          (y = o("p")),
          (C = v("Managers")),
          (S = I()),
          (V = o("p")),
          (G = v(a[3])),
          (x = I()),
          (j = o("p")),
          (T = v("Total")),
          (A = I()),
          (O = o("div")),
          (B = I()),
          (X = o("div")),
          (M = o("p")),
          (K = v("Weekly Prize Pool")),
          (se = I()),
          (Z = o("p")),
          (ee = v("0")),
          (fe = I()),
          (ne = o("p")),
          (ce = v("$FPL")),
          (q = I()),
          (ie = o("div")),
          (U = o("div")),
          (le = o("p")),
          (J = v("Next Game:")),
          (ue = I()),
          (H = o("div")),
          ($ = o("div")),
          (R = o("div")),
          (L = o("a")),
          Be(F.$$.fragment),
          (Se = I()),
          (we = o("div")),
          (re = o("p")),
          (ye = v("v")),
          (te = I()),
          (be = o("div")),
          (z = o("a")),
          Be(oe.$$.fragment),
          (De = I()),
          (Ne = o("div")),
          (Ve = o("div")),
          (Ae = o("p")),
          (Me = o("a")),
          (ge = v(Te)),
          (Et = I()),
          (Le = o("div")),
          (kt = I()),
          (rt = o("div")),
          (yt = o("p")),
          (He = o("a")),
          (St = v(ot)),
          (Pe = I()),
          (nt = o("div")),
          (Ha = I()),
          (it = o("div")),
          (It = o("p")),
          (da = v("Kick Off:")),
          (Sa = I()),
          (Xt = o("div")),
          (Oe = o("p")),
          (Zt = v(a[4])),
          (xt = o("span")),
          (Wa = v("d")),
          (ct = v(`
              : `)),
          (Lt = v(a[5])),
          (ea = o("span")),
          (qa = v("h")),
          (ta = v(`
              : `)),
          (aa = v(a[6])),
          (jt = o("span")),
          (Ba = v("m")),
          (la = I()),
          (dt = o("p")),
          (fa = v(a[7])),
          (Ua = v(" | ")),
          (et = v(a[8])),
          (sa = I()),
          (Rt = o("div")),
          (za = I()),
          (Ke = o("div")),
          (ft = o("p")),
          (Ta = v("GW ")),
          (Ca = v(a[9])),
          (ra = v(" High Score")),
          (ua = I()),
          (Tt = o("p")),
          qe.c(),
          (Ka = I()),
          (Ct = o("p")),
          at.c(),
          (ma = I()),
          (We = o("div")),
          (Qe = o("div")),
          (Je = o("ul")),
          (Ft = o("li")),
          (tt = o("button")),
          (_a = v("Fixtures")),
          (oa = I()),
          Ce && Ce.c(),
          (na = I()),
          (Pt = o("li")),
          (Vt = o("button")),
          (ut = v("Leaderboards")),
          (Ja = I()),
          (mt = o("li")),
          (_t = o("button")),
          (Aa = v("Table")),
          (ha = I()),
          Re && Re.c(),
          this.h();
      },
      l(W) {
        t = n(W, "DIV", { class: !0 });
        var de = i(t);
        l = n(de, "DIV", { class: !0 });
        var lt = i(l);
        s = n(lt, "DIV", { class: !0 });
        var xe = i(s);
        d = n(xe, "DIV", { class: !0 });
        var ht = i(d);
        u = n(ht, "P", { class: !0 });
        var ga = i(u);
        (f = h(ga, "Gameweek")),
          ga.forEach(r),
          (g = w(ht)),
          (_ = n(ht, "P", { class: !0 }));
        var Ht = i(_);
        (b = h(Ht, a[1])),
          Ht.forEach(r),
          (E = w(ht)),
          (D = n(ht, "P", { class: !0 }));
        var Ea = i(D);
        (P = h(Ea, a[2])),
          Ea.forEach(r),
          ht.forEach(r),
          (p = w(xe)),
          (m = n(xe, "DIV", { class: !0, style: !0 })),
          i(m).forEach(r),
          (N = w(xe)),
          (k = n(xe, "DIV", { class: !0 }));
        var ia = i(k);
        y = n(ia, "P", { class: !0 });
        var nl = i(y);
        (C = h(nl, "Managers")),
          nl.forEach(r),
          (S = w(ia)),
          (V = n(ia, "P", { class: !0 }));
        var ya = i(V);
        (G = h(ya, a[3])),
          ya.forEach(r),
          (x = w(ia)),
          (j = n(ia, "P", { class: !0 }));
        var ja = i(j);
        (T = h(ja, "Total")),
          ja.forEach(r),
          ia.forEach(r),
          (A = w(xe)),
          (O = n(xe, "DIV", { class: !0, style: !0 })),
          i(O).forEach(r),
          (B = w(xe)),
          (X = n(xe, "DIV", { class: !0 }));
        var Wt = i(X);
        M = n(Wt, "P", { class: !0 });
        var il = i(M);
        (K = h(il, "Weekly Prize Pool")),
          il.forEach(r),
          (se = w(Wt)),
          (Z = n(Wt, "P", { class: !0 }));
        var Ia = i(Z);
        (ee = h(Ia, "0")),
          Ia.forEach(r),
          (fe = w(Wt)),
          (ne = n(Wt, "P", { class: !0 }));
        var qt = i(ne);
        (ce = h(qt, "$FPL")),
          qt.forEach(r),
          Wt.forEach(r),
          xe.forEach(r),
          (q = w(lt)),
          (ie = n(lt, "DIV", { class: !0 }));
        var pt = i(ie);
        U = n(pt, "DIV", { class: !0 });
        var Ie = i(U);
        le = n(Ie, "P", { class: !0 });
        var cl = i(le);
        (J = h(cl, "Next Game:")),
          cl.forEach(r),
          (ue = w(Ie)),
          (H = n(Ie, "DIV", { class: !0 }));
        var pl = i(H);
        $ = n(pl, "DIV", { class: !0 });
        var wt = i($);
        R = n(wt, "DIV", { class: !0 });
        var bl = i(R);
        L = n(bl, "A", { href: !0 });
        var Fe = i(L);
        Ye(F.$$.fragment, Fe),
          Fe.forEach(r),
          bl.forEach(r),
          (Se = w(wt)),
          (we = n(wt, "DIV", { class: !0 }));
        var $e = i(we);
        re = n($e, "P", { class: !0 });
        var Ge = i(re);
        (ye = h(Ge, "v")),
          Ge.forEach(r),
          $e.forEach(r),
          (te = w(wt)),
          (be = n(wt, "DIV", { class: !0 }));
        var he = i(be);
        z = n(he, "A", { href: !0 });
        var ve = i(z);
        Ye(oe.$$.fragment, ve),
          ve.forEach(r),
          he.forEach(r),
          wt.forEach(r),
          pl.forEach(r),
          (De = w(Ie)),
          (Ne = n(Ie, "DIV", { class: !0 }));
        var Xe = i(Ne);
        Ve = n(Xe, "DIV", { class: !0 });
        var Ra = i(Ve);
        Ae = n(Ra, "P", { class: !0 });
        var gl = i(Ae);
        Me = n(gl, "A", { class: !0, href: !0 });
        var Ya = i(Me);
        (ge = h(Ya, Te)),
          Ya.forEach(r),
          gl.forEach(r),
          Ra.forEach(r),
          (Et = w(Xe)),
          (Le = n(Xe, "DIV", { class: !0 })),
          i(Le).forEach(r),
          (kt = w(Xe)),
          (rt = n(Xe, "DIV", { class: !0 }));
        var Qa = i(rt);
        yt = n(Qa, "P", { class: !0 });
        var El = i(yt);
        He = n(El, "A", { class: !0, href: !0 });
        var Xa = i(He);
        (St = h(Xa, ot)),
          Xa.forEach(r),
          El.forEach(r),
          Qa.forEach(r),
          Xe.forEach(r),
          Ie.forEach(r),
          (Pe = w(pt)),
          (nt = n(pt, "DIV", { class: !0, style: !0 })),
          i(nt).forEach(r),
          (Ha = w(pt)),
          (it = n(pt, "DIV", { class: !0 }));
        var Dt = i(it);
        It = n(Dt, "P", { class: !0 });
        var Fa = i(It);
        (da = h(Fa, "Kick Off:")),
          Fa.forEach(r),
          (Sa = w(Dt)),
          (Xt = n(Dt, "DIV", { class: !0 }));
        var yl = i(Xt);
        Oe = n(yl, "P", { class: !0 });
        var Nt = i(Oe);
        (Zt = h(Nt, a[4])), (xt = n(Nt, "SPAN", { class: !0 }));
        var Il = i(xt);
        (Wa = h(Il, "d")),
          Il.forEach(r),
          (ct = h(
            Nt,
            `
              : `
          )),
          (Lt = h(Nt, a[5])),
          (ea = n(Nt, "SPAN", { class: !0 }));
        var wa = i(ea);
        (qa = h(wa, "h")),
          wa.forEach(r),
          (ta = h(
            Nt,
            `
              : `
          )),
          (aa = h(Nt, a[6])),
          (jt = n(Nt, "SPAN", { class: !0 }));
        var wl = i(jt);
        (Ba = h(wl, "m")),
          wl.forEach(r),
          Nt.forEach(r),
          yl.forEach(r),
          (la = w(Dt)),
          (dt = n(Dt, "P", { class: !0 }));
        var Za = i(dt);
        (fa = h(Za, a[7])),
          (Ua = h(Za, " | ")),
          (et = h(Za, a[8])),
          Za.forEach(r),
          Dt.forEach(r),
          (sa = w(pt)),
          (Rt = n(pt, "DIV", { class: !0, style: !0 })),
          i(Rt).forEach(r),
          (za = w(pt)),
          (Ke = n(pt, "DIV", { class: !0 }));
        var Da = i(Ke);
        ft = n(Da, "P", { class: !0 });
        var Bt = i(ft);
        (Ta = h(Bt, "GW ")),
          (Ca = h(Bt, a[9])),
          (ra = h(Bt, " High Score")),
          Bt.forEach(r),
          (ua = w(Da)),
          (Tt = n(Da, "P", { class: !0 }));
        var Dl = i(Tt);
        qe.l(Dl), Dl.forEach(r), (Ka = w(Da)), (Ct = n(Da, "P", { class: !0 }));
        var Nl = i(Ct);
        at.l(Nl),
          Nl.forEach(r),
          Da.forEach(r),
          pt.forEach(r),
          lt.forEach(r),
          de.forEach(r),
          (ma = w(W)),
          (We = n(W, "DIV", { class: !0 }));
        var kl = i(We);
        Qe = n(kl, "DIV", { class: !0 });
        var Ut = i(Qe);
        Je = n(Ut, "UL", { class: !0 });
        var zt = i(Je);
        Ft = n(zt, "LI", { class: !0 });
        var Sl = i(Ft);
        tt = n(Sl, "BUTTON", { class: !0 });
        var Tl = i(tt);
        (_a = h(Tl, "Fixtures")),
          Tl.forEach(r),
          Sl.forEach(r),
          (oa = w(zt)),
          Ce && Ce.l(zt),
          (na = w(zt)),
          (Pt = n(zt, "LI", { class: !0 }));
        var Na = i(Pt);
        Vt = n(Na, "BUTTON", { class: !0 });
        var Cl = i(Vt);
        (ut = h(Cl, "Leaderboards")),
          Cl.forEach(r),
          Na.forEach(r),
          (Ja = w(zt)),
          (mt = n(zt, "LI", { class: !0 }));
        var Pl = i(mt);
        _t = n(Pl, "BUTTON", { class: !0 });
        var Vl = i(_t);
        (Aa = h(Vl, "Table")),
          Vl.forEach(r),
          Pl.forEach(r),
          zt.forEach(r),
          (ha = w(Ut)),
          Re && Re.l(Ut),
          Ut.forEach(r),
          kl.forEach(r),
          this.h();
      },
      h() {
        c(u, "class", "text-gray-300 text-xs"),
          c(_, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
          c(D, "class", "text-gray-300 text-xs"),
          c(d, "class", "flex-grow"),
          c(m, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
          $a(m, "min-width", "2px"),
          $a(m, "min-height", "50px"),
          c(y, "class", "text-gray-300 text-xs"),
          c(V, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
          c(j, "class", "text-gray-300 text-xs"),
          c(k, "class", "flex-grow"),
          c(O, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
          $a(O, "min-width", "2px"),
          $a(O, "min-height", "50px"),
          c(M, "class", "text-gray-300 text-xs"),
          c(Z, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
          c(ne, "class", "text-gray-300 text-xs"),
          c(X, "class", "flex-grow"),
          c(
            s,
            "class",
            "flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
          ),
          c(le, "class", "text-gray-300 text-xs"),
          c(L, "href", (ae = `/club?id=${a[11] ? a[11].id : -1}`)),
          c(R, "class", "w-10 ml-4 mr-4"),
          c(re, "class", "text-xs mt-2 mb-2 font-bold"),
          c(we, "class", "w-v ml-1 mr-1 flex justify-center svelte-1ylya66"),
          c(z, "href", (Q = `/club?id=${a[12] ? a[12].id : -1}`)),
          c(be, "class", "w-10 ml-4"),
          c($, "class", "flex justify-center items-center"),
          c(H, "class", "flex justify-center mb-2 mt-2"),
          c(Me, "class", "text-gray-300 text-xs text-center"),
          c(Me, "href", (st = `/club?id=${a[11] ? a[11].id : -1}`)),
          c(Ae, "class", "text-gray-300 text-xs text-center"),
          c(Ve, "class", "w-10 ml-4 mr-4"),
          c(Le, "class", "w-v ml-1 mr-1 svelte-1ylya66"),
          c(He, "class", "text-gray-300 text-xs text-center"),
          c(He, "href", (Ot = `/club?id=${a[12] ? a[12].id : -1}`)),
          c(yt, "class", "text-gray-300 text-xs text-center"),
          c(rt, "class", "w-10 ml-4"),
          c(Ne, "class", "flex justify-center"),
          c(U, "class", "flex-grow mb-4 md:mb-0"),
          c(
            nt,
            "class",
            "h-px bg-gray-400 w-full md:w-px md:h-full md:self-stretch"
          ),
          $a(nt, "min-height", "2px"),
          $a(nt, "min-width", "2px"),
          c(It, "class", "text-gray-300 text-xs mt-4 md:mt-0"),
          c(xt, "class", "text-gray-300 text-xs ml-1"),
          c(ea, "class", "text-gray-300 text-xs ml-1"),
          c(jt, "class", "text-gray-300 text-xs ml-1"),
          c(
            Oe,
            "class",
            "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"
          ),
          c(Xt, "class", "flex"),
          c(dt, "class", "text-gray-300 text-xs"),
          c(it, "class", "flex-grow mb-4 md:mb-0"),
          c(
            Rt,
            "class",
            "h-px bg-gray-400 w-full md:w-px md:h-full md:self-stretch"
          ),
          $a(Rt, "min-height", "2px"),
          $a(Rt, "min-width", "2px"),
          c(ft, "class", "text-gray-300 text-xs mt-4 md:mt-0"),
          c(
            Tt,
            "class",
            "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"
          ),
          c(Ct, "class", "text-gray-300 text-xs"),
          c(Ke, "class", "flex-grow"),
          c(
            ie,
            "class",
            "flex flex-col md:flex-row justify-start md:items-center text-white space-x-0 md:space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
          ),
          c(l, "class", "flex flex-col md:flex-row"),
          c(t, "class", "m-4"),
          c(
            tt,
            "class",
            (va =
              Ze(
                `p-2 ${a[0] === "fixtures" ? "text-white" : "text-gray-400"}`
              ) + " svelte-1ylya66")
          ),
          c(
            Ft,
            "class",
            (Pa =
              Ze(
                `mr-4 text-xs md:text-lg ${
                  a[0] === "fixtures" ? "active-tab" : ""
                }`
              ) + " svelte-1ylya66")
          ),
          c(
            Vt,
            "class",
            ($t =
              Ze(
                `p-2 ${
                  a[0] === "leaderboards" ? "text-white" : "text-gray-400"
                }`
              ) + " svelte-1ylya66")
          ),
          c(
            Pt,
            "class",
            (Va =
              Ze(
                `mr-4 text-xs md:text-lg ${
                  a[0] === "leaderboards" ? "active-tab" : ""
                }`
              ) + " svelte-1ylya66")
          ),
          c(
            _t,
            "class",
            (Oa =
              Ze(
                `p-2 ${
                  a[0] === "league-table" ? "text-white" : "text-gray-400"
                }`
              ) + " svelte-1ylya66")
          ),
          c(
            mt,
            "class",
            (Gt =
              Ze(
                `mr-4 text-xs md:text-lg ${
                  a[0] === "league-table" ? "active-tab" : ""
                }`
              ) + " svelte-1ylya66")
          ),
          c(Je, "class", "flex bg-light-gray px-4 pt-2"),
          c(Qe, "class", "bg-panel rounded-md m-4"),
          c(We, "class", "m-4");
      },
      m(W, de) {
        _e(W, t, de),
          e(t, l),
          e(l, s),
          e(s, d),
          e(d, u),
          e(u, f),
          e(d, g),
          e(d, _),
          e(_, b),
          e(d, E),
          e(d, D),
          e(D, P),
          e(s, p),
          e(s, m),
          e(s, N),
          e(s, k),
          e(k, y),
          e(y, C),
          e(k, S),
          e(k, V),
          e(V, G),
          e(k, x),
          e(k, j),
          e(j, T),
          e(s, A),
          e(s, O),
          e(s, B),
          e(s, X),
          e(X, M),
          e(M, K),
          e(X, se),
          e(X, Z),
          e(Z, ee),
          e(X, fe),
          e(X, ne),
          e(ne, ce),
          e(l, q),
          e(l, ie),
          e(ie, U),
          e(U, le),
          e(le, J),
          e(U, ue),
          e(U, H),
          e(H, $),
          e($, R),
          e(R, L),
          Ue(F, L, null),
          e($, Se),
          e($, we),
          e(we, re),
          e(re, ye),
          e($, te),
          e($, be),
          e(be, z),
          Ue(oe, z, null),
          e(U, De),
          e(U, Ne),
          e(Ne, Ve),
          e(Ve, Ae),
          e(Ae, Me),
          e(Me, ge),
          e(Ne, Et),
          e(Ne, Le),
          e(Ne, kt),
          e(Ne, rt),
          e(rt, yt),
          e(yt, He),
          e(He, St),
          e(ie, Pe),
          e(ie, nt),
          e(ie, Ha),
          e(ie, it),
          e(it, It),
          e(It, da),
          e(it, Sa),
          e(it, Xt),
          e(Xt, Oe),
          e(Oe, Zt),
          e(Oe, xt),
          e(xt, Wa),
          e(Oe, ct),
          e(Oe, Lt),
          e(Oe, ea),
          e(ea, qa),
          e(Oe, ta),
          e(Oe, aa),
          e(Oe, jt),
          e(jt, Ba),
          e(it, la),
          e(it, dt),
          e(dt, fa),
          e(dt, Ua),
          e(dt, et),
          e(ie, sa),
          e(ie, Rt),
          e(ie, za),
          e(ie, Ke),
          e(Ke, ft),
          e(ft, Ta),
          e(ft, Ca),
          e(ft, ra),
          e(Ke, ua),
          e(Ke, Tt),
          qe.m(Tt, null),
          e(Ke, Ka),
          e(Ke, Ct),
          at.m(Ct, null),
          _e(W, ma, de),
          _e(W, We, de),
          e(We, Qe),
          e(Qe, Je),
          e(Je, Ft),
          e(Ft, tt),
          e(tt, _a),
          e(Je, oa),
          Ce && Ce.m(Je, null),
          e(Je, na),
          e(Je, Pt),
          e(Pt, Vt),
          e(Vt, ut),
          e(Je, Ja),
          e(Je, mt),
          e(mt, _t),
          e(_t, Aa),
          e(Qe, ha),
          ~je && vt[je].m(Qe, null),
          (ke = !0),
          At ||
            ((pa = [
              Ee(tt, "click", a[15]),
              Ee(Vt, "click", a[17]),
              Ee(_t, "click", a[18]),
            ]),
            (At = !0));
      },
      p(W, de) {
        (!ke || de & 2) && Y(b, W[1]),
          (!ke || de & 4) && Y(P, W[2]),
          (!ke || de & 8) && Y(G, W[3]);
        const lt = {};
        de & 2048 && (lt.primaryColour = W[11] ? W[11].primaryColourHex : ""),
          de & 2048 &&
            (lt.secondaryColour = W[11] ? W[11].secondaryColourHex : ""),
          de & 2048 && (lt.thirdColour = W[11] ? W[11].thirdColourHex : ""),
          F.$set(lt),
          (!ke ||
            (de & 2048 && ae !== (ae = `/club?id=${W[11] ? W[11].id : -1}`))) &&
            c(L, "href", ae);
        const xe = {};
        de & 4096 && (xe.primaryColour = W[12] ? W[12].primaryColourHex : ""),
          de & 4096 &&
            (xe.secondaryColour = W[12] ? W[12].secondaryColourHex : ""),
          de & 4096 && (xe.thirdColour = W[12] ? W[12].thirdColourHex : ""),
          oe.$set(xe),
          (!ke ||
            (de & 4096 && Q !== (Q = `/club?id=${W[12] ? W[12].id : -1}`))) &&
            c(z, "href", Q),
          (!ke || de & 2048) &&
            Te !== (Te = (W[11] ? W[11].abbreviatedName : "") + "") &&
            Y(ge, Te),
          (!ke ||
            (de & 2048 && st !== (st = `/club?id=${W[11] ? W[11].id : -1}`))) &&
            c(Me, "href", st),
          (!ke || de & 4096) &&
            ot !== (ot = (W[12] ? W[12].abbreviatedName : "") + "") &&
            Y(St, ot),
          (!ke ||
            (de & 4096 && Ot !== (Ot = `/club?id=${W[12] ? W[12].id : -1}`))) &&
            c(He, "href", Ot),
          (!ke || de & 16) && Y(Zt, W[4]),
          (!ke || de & 32) && Y(Lt, W[5]),
          (!ke || de & 64) && Y(aa, W[6]),
          (!ke || de & 128) && Y(fa, W[7]),
          (!ke || de & 256) && Y(et, W[8]),
          (!ke || de & 512) && Y(Ca, W[9]),
          xa === (xa = rl(W)) && qe
            ? qe.p(W, de)
            : (qe.d(1), (qe = xa(W)), qe && (qe.c(), qe.m(Tt, null))),
          ba === (ba = La(W)) && at
            ? at.p(W, de)
            : (at.d(1), (at = ba(W)), at && (at.c(), at.m(Ct, null))),
          (!ke ||
            (de & 1 &&
              va !==
                (va =
                  Ze(
                    `p-2 ${
                      W[0] === "fixtures" ? "text-white" : "text-gray-400"
                    }`
                  ) + " svelte-1ylya66"))) &&
            c(tt, "class", va),
          (!ke ||
            (de & 1 &&
              Pa !==
                (Pa =
                  Ze(
                    `mr-4 text-xs md:text-lg ${
                      W[0] === "fixtures" ? "active-tab" : ""
                    }`
                  ) + " svelte-1ylya66"))) &&
            c(Ft, "class", Pa),
          W[13]
            ? Ce
              ? Ce.p(W, de)
              : ((Ce = Hs(W)), Ce.c(), Ce.m(Je, na))
            : Ce && (Ce.d(1), (Ce = null)),
          (!ke ||
            (de & 1 &&
              $t !==
                ($t =
                  Ze(
                    `p-2 ${
                      W[0] === "leaderboards" ? "text-white" : "text-gray-400"
                    }`
                  ) + " svelte-1ylya66"))) &&
            c(Vt, "class", $t),
          (!ke ||
            (de & 1 &&
              Va !==
                (Va =
                  Ze(
                    `mr-4 text-xs md:text-lg ${
                      W[0] === "leaderboards" ? "active-tab" : ""
                    }`
                  ) + " svelte-1ylya66"))) &&
            c(Pt, "class", Va),
          (!ke ||
            (de & 1 &&
              Oa !==
                (Oa =
                  Ze(
                    `p-2 ${
                      W[0] === "league-table" ? "text-white" : "text-gray-400"
                    }`
                  ) + " svelte-1ylya66"))) &&
            c(_t, "class", Oa),
          (!ke ||
            (de & 1 &&
              Gt !==
                (Gt =
                  Ze(
                    `mr-4 text-xs md:text-lg ${
                      W[0] === "league-table" ? "active-tab" : ""
                    }`
                  ) + " svelte-1ylya66"))) &&
            c(mt, "class", Gt);
        let ht = je;
        (je = ol(W)),
          je !== ht &&
            (Re &&
              (Jt(),
              pe(vt[ht], 1, 1, () => {
                vt[ht] = null;
              }),
              Yt()),
            ~je
              ? ((Re = vt[je]),
                Re || ((Re = vt[je] = Mt[je](W)), Re.c()),
                me(Re, 1),
                Re.m(Qe, null))
              : (Re = null));
      },
      i(W) {
        ke || (me(F.$$.fragment, W), me(oe.$$.fragment, W), me(Re), (ke = !0));
      },
      o(W) {
        pe(F.$$.fragment, W), pe(oe.$$.fragment, W), pe(Re), (ke = !1);
      },
      d(W) {
        W && r(t),
          ze(F),
          ze(oe),
          qe.d(),
          at.d(),
          W && r(ma),
          W && r(We),
          Ce && Ce.d(),
          ~je && vt[je].d(),
          (At = !1),
          ka(pa);
      },
    }
  );
}
function xr(a) {
  let t, l;
  return (
    (t = new Qs({
      props: { $$slots: { default: [Or] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(s) {
        Ye(t.$$.fragment, s);
      },
      m(s, d) {
        Ue(t, s, d), (l = !0);
      },
      p(s, [d]) {
        const u = {};
        d & 540671 && (u.$$scope = { dirty: d, ctx: s }), t.$set(u);
      },
      i(s) {
        l || (me(t.$$.fragment, s), (l = !0));
      },
      o(s) {
        pe(t.$$.fragment, s), (l = !1);
      },
      d(s) {
        ze(t, s);
      },
    }
  );
}
function Lr(a, t, l) {
  let s = "fixtures",
    d = -1,
    u = "-",
    f = -1,
    g = "00",
    _ = "00",
    b = "00",
    E = "-",
    D = "-",
    P = -1,
    p,
    m,
    N,
    k = !1;
  Ol(async () => {
    vs.set(!0);
    try {
      await Qt.sync(),
        await Kt.sync(),
        await Ma.sync(),
        await el.syncWeeklyLeaderboard(),
        await us.sync(),
        us.subscribe((A) => {
          l(13, (k = A.identity !== null && A.identity !== void 0));
        }),
        l(3, (f = await Ws.getTotalManagers()));
      let x = await Qt.getSystemState();
      console.log(x),
        l(1, (d = x?.activeGameweek ?? d)),
        l(2, (u = x?.activeSeason.name ?? u)),
        l(9, (P = x?.focusGameweek ?? d));
      let j = await Ma.getNextFixture();
      l(11, (m = await Kt.getTeamById(j ? j.homeTeamId : 0))),
        l(12, (N = await Kt.getTeamById(j ? j.awayTeamId : 0))),
        l(7, (E = Js(j ? Number(j.kickOff) : 0))),
        l(8, (D = $l(j ? Number(j.kickOff) : 0)));
      let T = Ys(j ? Number(j.kickOff) : 0);
      l(4, (g = T.days.toString())),
        l(5, (_ = T.hours.toString())),
        l(6, (b = T.minutes.toString())),
        l(10, (p = await el.getLeadingWeeklyTeam()));
    } catch (x) {
      ll.show("Error fetching homepage data.", "error"),
        console.error("Error fetching homepage data:", x);
    } finally {
      vs.set(!1);
    }
  });
  function y(x) {
    l(0, (s = x));
  }
  return [
    s,
    d,
    u,
    f,
    g,
    _,
    b,
    E,
    D,
    P,
    p,
    m,
    N,
    k,
    y,
    () => y("fixtures"),
    () => y("points"),
    () => y("leaderboards"),
    () => y("league-table"),
  ];
}
class Kr extends _l {
  constructor(t) {
    super(), vl(this, t, Lr, xr, hl, {});
  }
}
export { Kr as component };
