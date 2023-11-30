import { B as ll } from "../chunks/BadgeIcon.5f1570c4.js";
import { f as Ha } from "../chunks/fixture-store.724d0928.js";
import { w as Bs } from "../chunks/index.8caf67b2.js";
import {
  a as I,
  A as Ue,
  B as ze,
  b as _e,
  c as y,
  d as pe,
  e as Ga,
  f as Yt,
  G as e,
  g as me,
  H as gt,
  h as r,
  i as vl,
  J as tl,
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
  P as el,
  q as v,
  Q as Vl,
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
import { a as Qs, i as vs, L as qs } from "../chunks/Layout.a538b3b7.js";
import { m as Ws } from "../chunks/manager-store.9ce96d4b.js";
import { p as Zs } from "../chunks/player-store.1ed81bd6.js";
import { s as Qt } from "../chunks/system-store.28344883.js";
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
} from "../chunks/team-store.90511bc6.js";
import { a as us, t as al } from "../chunks/toast-store.58fa49f6.js";
import { V as Xs } from "../chunks/ViewDetailsIcon.98b59799.js";
function er() {
  const { subscribe: a, set: t } = Bs(null),
    l = 25;
  let s;
  Qt.subscribe((p) => {
    s = p;
  });
  let d = Us.createActor(zs, "bboqb-jiaaa-aaaal-qb6ea-cai");
  async function u() {
    let p = "weekly_leaderboard",
      S = (await d.getDataHashes()).find((b) => b.category === p) ?? null;
    const N = localStorage.getItem(p);
    if (S?.hash != N) {
      let b = await d.getWeeklyLeaderboardCache(
        s?.activeSeason.id,
        s?.focusGameweek
      );
      localStorage.setItem("weekly_leaderboard_data", JSON.stringify(b, Fl)),
        localStorage.setItem(p, S?.hash ?? "");
    }
  }
  async function f() {
    let p = "monthly_leaderboards",
      S = (await d.getDataHashes()).find((b) => b.category === p) ?? null;
    const N = localStorage.getItem(p);
    if (S?.hash != N) {
      let b = await d.getClubLeaderboardsCache(
        s?.activeSeason.id,
        s?.activeMonth
      );
      localStorage.setItem("monthly_leaderboard_data", JSON.stringify(b, Fl)),
        localStorage.setItem(p, S?.hash ?? "");
    }
  }
  async function E() {
    let p = "season_leaderboard",
      S = (await d.getDataHashes()).find((b) => b.category === p) ?? null;
    const N = localStorage.getItem(p);
    if (S?.hash != N) {
      let b = await d.getSeasonLeaderboardCache(s?.activeSeason.id);
      localStorage.setItem("season_leaderboard_data", JSON.stringify(b, Fl)),
        localStorage.setItem(p, S?.hash ?? "");
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
  async function g(p, m) {
    const S = l,
      N = (m - 1) * S;
    if (m <= 4) {
      const x = localStorage.getItem("weekly_leaderboard_data");
      if (x) {
        let k = JSON.parse(x);
        return {
          entries: k.entries.slice(N, N + S),
          gameweek: k.gameweek,
          seasonId: k.seasonId,
          totalEntries: k.totalEntries,
        };
      }
    }
    return await d.getWeeklyLeaderboard(s?.activeSeason.id, p, S, N);
  }
  async function w(p, m, S) {
    const N = l,
      b = (S - 1) * N;
    if (S <= 4) {
      const k = localStorage.getItem("monthly_leaderboard_data");
      if (k) {
        let $ = JSON.parse(k).find((A) => A.clubId === p);
        if ($) return { ...$, entries: $.entries.slice(b, b + N) };
      }
    }
    return await d.getClubLeaderboard(s?.activeSeason.id, m, p, N, b);
  }
  async function D(p) {
    const m = l,
      S = (p - 1) * m;
    if (p <= 4) {
      const b = localStorage.getItem("season_leaderboard_data");
      if (b) {
        let x = JSON.parse(b);
        return { ...x, entries: x.entries.slice(S, S + m) };
      }
    }
    return await d.getSeasonLeaderboard(s?.activeSeason.id, m, S);
  }
  async function P() {
    return (await _()).entries[0];
  }
  return {
    subscribe: a,
    syncWeeklyLeaderboard: u,
    syncMonthlyLeaderboards: f,
    syncSeasonLeaderboard: E,
    getWeeklyLeaderboard: _,
    getWeeklyLeaderboardPage: g,
    getMonthlyLeaderboard: w,
    getSeasonLeaderboardPage: D,
    getLeadingWeeklyTeam: P,
  };
}
const ml = er();
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
    E,
    _,
    g,
    w,
    D,
    P,
    p,
    m,
    S,
    N,
    b,
    x,
    k = $l(Number(a[20].kickOff)) + "",
    C,
    $,
    A,
    j,
    T,
    V = (a[21] ? a[21].friendlyName : "") + "",
    O,
    B,
    X,
    H,
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
    M;
  return (
    (f = new ll({
      props: {
        primaryColour: a[21] ? a[21].primaryColourHex : "",
        secondaryColour: a[21] ? a[21].secondaryColourHex : "",
        thirdColour: a[21] ? a[21].thirdColourHex : "",
      },
    })),
    (m = new ll({
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
          (g = o("span")),
          (w = v("v")),
          (D = I()),
          (P = o("div")),
          (p = o("a")),
          Be(m.$$.fragment),
          (N = I()),
          (b = o("div")),
          (x = o("span")),
          (C = v(k)),
          ($ = I()),
          (A = o("div")),
          (j = o("div")),
          (T = o("a")),
          (O = v(V)),
          (X = I()),
          (H = o("a")),
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
      l(G) {
        t = n(G, "DIV", { class: !0 });
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
          (_ = y(F)),
          (g = n(F, "SPAN", { class: !0 }));
        var ye = i(g);
        (w = h(ye, "v")),
          ye.forEach(r),
          (D = y(F)),
          (P = n(F, "DIV", { class: !0 }));
        var re = i(P);
        p = n(re, "A", { href: !0 });
        var we = i(p);
        Ye(m.$$.fragment, we),
          we.forEach(r),
          re.forEach(r),
          F.forEach(r),
          (N = y(L)),
          (b = n(L, "DIV", { class: !0 }));
        var te = i(b);
        x = n(te, "SPAN", { class: !0 });
        var be = i(x);
        (C = h(be, k)),
          be.forEach(r),
          te.forEach(r),
          L.forEach(r),
          ($ = y(R)),
          (A = n(R, "DIV", { class: !0 }));
        var z = i(A);
        j = n(z, "DIV", { class: !0 });
        var oe = i(j);
        T = n(oe, "A", { href: !0 });
        var Q = i(T);
        (O = h(Q, V)),
          Q.forEach(r),
          (X = y(oe)),
          (H = n(oe, "A", { href: !0 }));
        var De = i(H);
        (se = h(De, K)),
          De.forEach(r),
          oe.forEach(r),
          (ee = y(z)),
          (fe = n(z, "DIV", { class: !0 }));
        var Ne = i(fe);
        ne = n(Ne, "SPAN", {});
        var Pe = i(ne);
        (q = h(Pe, ce)), Pe.forEach(r), (ie = y(Ne)), (U = n(Ne, "SPAN", {}));
        var Ve = i(U);
        (J = h(Ve, le)),
          Ve.forEach(r),
          Ne.forEach(r),
          z.forEach(r),
          R.forEach(r),
          this.h();
      },
      h() {
        c(u, "href", (E = `/club?id=${a[20].homeTeamId}`)),
          c(d, "class", "w-10 items-center justify-center"),
          c(g, "class", "font-bold text-lg"),
          c(p, "href", (S = `/club?id=${a[20].awayTeamId}`)),
          c(P, "class", "w-10 items-center justify-center"),
          c(s, "class", "flex w-1/2 space-x-4 justify-center"),
          c(x, "class", "text-sm md:text-lg ml-4 md:ml-0 text-left"),
          c(b, "class", "flex w-1/2 lg:justify-center"),
          c(l, "class", "flex items-center w-1/2 ml-4"),
          c(T, "href", (B = `/club?id=${a[20].homeTeamId}`)),
          c(H, "href", (Z = `/club?id=${a[20].awayTeamId}`)),
          c(
            j,
            "class",
            "flex flex-col min-w-[200px] lg:min-w-[120px] lg:min-w-[200px] text-xs md:text-base"
          ),
          c(
            fe,
            "class",
            "flex flex-col min-w-[200px] lg:min-w-[120px] lg:min-w-[200px] text-xs md:text-base"
          ),
          c(A, "class", "flex items-center space-x-10 w-1/2 lg:justify-center"),
          c(
            t,
            "class",
            (ue = `flex items-center justify-between py-2 border-b border-gray-700  ${
              a[20].status === 0 ? "text-gray-400" : "text-white"
            }`)
          );
      },
      m(G, R) {
        _e(G, t, R),
          e(t, l),
          e(l, s),
          e(s, d),
          e(d, u),
          Ue(f, u, null),
          e(s, _),
          e(s, g),
          e(g, w),
          e(s, D),
          e(s, P),
          e(P, p),
          Ue(m, p, null),
          e(l, N),
          e(l, b),
          e(b, x),
          e(x, C),
          e(t, $),
          e(t, A),
          e(A, j),
          e(j, T),
          e(T, O),
          e(j, X),
          e(j, H),
          e(H, se),
          e(A, ee),
          e(A, fe),
          e(fe, ne),
          e(ne, q),
          e(fe, ie),
          e(fe, U),
          e(U, J),
          (M = !0);
      },
      p(G, R) {
        const L = {};
        R & 2 && (L.primaryColour = G[21] ? G[21].primaryColourHex : ""),
          R & 2 && (L.secondaryColour = G[21] ? G[21].secondaryColourHex : ""),
          R & 2 && (L.thirdColour = G[21] ? G[21].thirdColourHex : ""),
          f.$set(L),
          (!M || (R & 2 && E !== (E = `/club?id=${G[20].homeTeamId}`))) &&
            c(u, "href", E);
        const F = {};
        R & 2 && (F.primaryColour = G[22] ? G[22].primaryColourHex : ""),
          R & 2 && (F.secondaryColour = G[22] ? G[22].secondaryColourHex : ""),
          R & 2 && (F.thirdColour = G[22] ? G[22].thirdColourHex : ""),
          m.$set(F),
          (!M || (R & 2 && S !== (S = `/club?id=${G[20].awayTeamId}`))) &&
            c(p, "href", S),
          (!M || R & 2) &&
            k !== (k = $l(Number(G[20].kickOff)) + "") &&
            Y(C, k),
          (!M || R & 2) &&
            V !== (V = (G[21] ? G[21].friendlyName : "") + "") &&
            Y(O, V),
          (!M || (R & 2 && B !== (B = `/club?id=${G[20].homeTeamId}`))) &&
            c(T, "href", B),
          (!M || R & 2) &&
            K !== (K = (G[22] ? G[22].friendlyName : "") + "") &&
            Y(se, K),
          (!M || (R & 2 && Z !== (Z = `/club?id=${G[20].awayTeamId}`))) &&
            c(H, "href", Z),
          (!M || R & 2) &&
            ce !== (ce = (G[20].status === 0 ? "-" : G[20].homeGoals) + "") &&
            Y(q, ce),
          (!M || R & 2) &&
            le !== (le = (G[20].status === 0 ? "-" : G[20].awayGoals) + "") &&
            Y(J, le),
          (!M ||
            (R & 2 &&
              ue !==
                (ue = `flex items-center justify-between py-2 border-b border-gray-700  ${
                  G[20].status === 0 ? "text-gray-400" : "text-white"
                }`))) &&
            c(t, "class", ue);
      },
      i(G) {
        M || (me(f.$$.fragment, G), me(m.$$.fragment, G), (M = !0));
      },
      o(G) {
        pe(f.$$.fragment, G), pe(m.$$.fragment, G), (M = !1);
      },
      d(G) {
        G && r(t), ze(f), ze(m);
      },
    }
  );
}
function ws(a) {
  let t,
    l,
    s,
    d = a[17] + "",
    u,
    f,
    E,
    _,
    g = a[2],
    w = [];
  for (let P = 0; P < g.length; P += 1) w[P] = Es(ps(a, g, P));
  const D = (P) =>
    pe(w[P], 1, 1, () => {
      w[P] = null;
    });
  return {
    c() {
      (t = o("div")), (l = o("div")), (s = o("h2")), (u = v(d)), (f = I());
      for (let P = 0; P < w.length; P += 1) w[P].c();
      (E = I()), this.h();
    },
    l(P) {
      t = n(P, "DIV", {});
      var p = i(t);
      l = n(p, "DIV", { class: !0 });
      var m = i(l);
      s = n(m, "H2", { class: !0 });
      var S = i(s);
      (u = h(S, d)), S.forEach(r), m.forEach(r), (f = y(p));
      for (let N = 0; N < w.length; N += 1) w[N].l(p);
      (E = y(p)), p.forEach(r), this.h();
    },
    h() {
      c(s, "class", "date-header ml-4 text-xs md:text-base"),
        c(
          l,
          "class",
          "flex items-center justify-between border border-gray-700 py-4 bg-light-gray"
        );
    },
    m(P, p) {
      _e(P, t, p), e(t, l), e(l, s), e(s, u), e(t, f);
      for (let m = 0; m < w.length; m += 1) w[m] && w[m].m(t, null);
      e(t, E), (_ = !0);
    },
    p(P, p) {
      if (((!_ || p & 2) && d !== (d = P[17] + "") && Y(u, d), p & 2)) {
        g = P[2];
        let m;
        for (m = 0; m < g.length; m += 1) {
          const S = ps(P, g, m);
          w[m]
            ? (w[m].p(S, p), me(w[m], 1))
            : ((w[m] = Es(S)), w[m].c(), me(w[m], 1), w[m].m(t, E));
        }
        for (Jt(), m = g.length; m < w.length; m += 1) D(m);
        Yt();
      }
    },
    i(P) {
      if (!_) {
        for (let p = 0; p < g.length; p += 1) me(w[p]);
        _ = !0;
      }
    },
    o(P) {
      w = w.filter(Boolean);
      for (let p = 0; p < w.length; p += 1) pe(w[p]);
      _ = !1;
    },
    d(P) {
      P && r(t), ca(w, P);
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
    E,
    _,
    g,
    w,
    D,
    P,
    p,
    m,
    S,
    N,
    b,
    x,
    k = a[3],
    C = [];
  for (let T = 0; T < k.length; T += 1) C[T] = gs(bs(a, k, T));
  let $ = Object.entries(a[1]),
    A = [];
  for (let T = 0; T < $.length; T += 1) A[T] = ws(hs(a, $, T));
  const j = (T) =>
    pe(A[T], 1, 1, () => {
      A[T] = null;
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
        (g = o("select"));
      for (let T = 0; T < C.length; T += 1) C[T].c();
      (w = I()), (D = o("button")), (P = v(">")), (m = I()), (S = o("div"));
      for (let T = 0; T < A.length; T += 1) A[T].c();
      this.h();
    },
    l(T) {
      t = n(T, "DIV", { class: !0 });
      var V = i(t);
      l = n(V, "DIV", { class: !0 });
      var O = i(l);
      s = n(O, "DIV", { class: !0 });
      var B = i(s);
      d = n(B, "DIV", { class: !0 });
      var X = i(d);
      u = n(X, "BUTTON", { class: !0 });
      var H = i(u);
      (f = h(H, "<")),
        H.forEach(r),
        (_ = y(X)),
        (g = n(X, "SELECT", { class: !0 }));
      var K = i(g);
      for (let ee = 0; ee < C.length; ee += 1) C[ee].l(K);
      K.forEach(r), (w = y(X)), (D = n(X, "BUTTON", { class: !0 }));
      var se = i(D);
      (P = h(se, ">")),
        se.forEach(r),
        X.forEach(r),
        B.forEach(r),
        (m = y(O)),
        (S = n(O, "DIV", {}));
      var Z = i(S);
      for (let ee = 0; ee < A.length; ee += 1) A[ee].l(Z);
      Z.forEach(r), O.forEach(r), V.forEach(r), this.h();
    },
    h() {
      c(
        u,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (u.disabled = E = a[0] === 1),
        c(
          g,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        a[0] === void 0 && tl(() => a[8].call(g)),
        c(
          D,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (D.disabled = p = a[0] === 38),
        c(d, "class", "flex items-center space-x-2 ml-4"),
        c(s, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        c(l, "class", "flex flex-col space-y-4"),
        c(t, "class", "container-fluid mt-4 mb-4");
    },
    m(T, V) {
      _e(T, t, V),
        e(t, l),
        e(l, s),
        e(s, d),
        e(d, u),
        e(u, f),
        e(d, _),
        e(d, g);
      for (let O = 0; O < C.length; O += 1) C[O] && C[O].m(g, null);
      bt(g, a[0], !0), e(d, w), e(d, D), e(D, P), e(l, m), e(l, S);
      for (let O = 0; O < A.length; O += 1) A[O] && A[O].m(S, null);
      (N = !0),
        b ||
          ((x = [
            Ee(u, "click", a[7]),
            Ee(g, "change", a[8]),
            Ee(D, "click", a[9]),
          ]),
          (b = !0));
    },
    p(T, [V]) {
      if (
        ((!N || (V & 9 && E !== (E = T[0] === 1))) && (u.disabled = E), V & 8)
      ) {
        k = T[3];
        let O;
        for (O = 0; O < k.length; O += 1) {
          const B = bs(T, k, O);
          C[O] ? C[O].p(B, V) : ((C[O] = gs(B)), C[O].c(), C[O].m(g, null));
        }
        for (; O < C.length; O += 1) C[O].d(1);
        C.length = k.length;
      }
      if (
        (V & 9 && bt(g, T[0]),
        (!N || (V & 9 && p !== (p = T[0] === 38))) && (D.disabled = p),
        V & 2)
      ) {
        $ = Object.entries(T[1]);
        let O;
        for (O = 0; O < $.length; O += 1) {
          const B = hs(T, $, O);
          A[O]
            ? (A[O].p(B, V), me(A[O], 1))
            : ((A[O] = ws(B)), A[O].c(), me(A[O], 1), A[O].m(S, null));
        }
        for (Jt(), O = $.length; O < A.length; O += 1) j(O);
        Yt();
      }
    },
    i(T) {
      if (!N) {
        for (let V = 0; V < $.length; V += 1) me(A[V]);
        N = !0;
      }
    },
    o(T) {
      A = A.filter(Boolean);
      for (let V = 0; V < A.length; V += 1) pe(A[V]);
      N = !1;
    },
    d(T) {
      T && r(t), ca(C, T), ca(A, T), (b = !1), ka(x);
    },
  };
}
function ar(a, t, l) {
  let s,
    d,
    u = [],
    f = [],
    E = [],
    _,
    g,
    w,
    D,
    P = 1,
    p = Array.from({ length: 38 }, (k, C) => C + 1);
  Ol(async () => {
    try {
      await Kt.sync(),
        await Ha.sync(),
        await Qt.sync(),
        (g = Kt.subscribe((k) => {
          u = k;
        })),
        (w = Ha.subscribe((k) => {
          l(2, (f = k)),
            l(
              5,
              (E = f.map((C) => ({
                fixture: C,
                homeTeam: S(C.homeTeamId),
                awayTeam: S(C.awayTeamId),
              })))
            );
        })),
        (D = Qt.subscribe((k) => {
          _ = k;
        }));
    } catch (k) {
      al.show("Error fetching fixtures data.", "error"),
        console.error("Error fetching fixtures data:", k);
    } finally {
    }
  }),
    Rl(() => {
      g?.(), w?.(), D?.();
    });
  const m = (k) => {
    l(0, (P = Math.max(1, Math.min(38, P + k))));
  };
  function S(k) {
    return u.find((C) => C.id === k);
  }
  const N = () => m(-1);
  function b() {
    (P = el(this)), l(0, P), l(3, p);
  }
  const x = () => m(1);
  return (
    (a.$$.update = () => {
      a.$$.dirty & 33 &&
        l(6, (s = E.filter(({ fixture: k }) => k.gameweek === P))),
        a.$$.dirty & 64 &&
          l(
            1,
            (d = s.reduce((k, C) => {
              const $ = new Date(Number(C.fixture.kickOff) / 1e6),
                j = new Intl.DateTimeFormat("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format($);
              return k[j] || (k[j] = []), k[j].push(C), k;
            }, {}))
          );
    }),
    [P, d, f, p, m, E, s, N, b, x]
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
    E,
    _,
    g,
    w,
    D,
    P,
    p,
    m,
    S =
      (a[2].player.firstName != ""
        ? a[2].player.firstName.charAt(0) + "."
        : "") + a[2].player.lastName,
    N,
    b,
    x,
    k,
    C,
    $ = a[3]?.friendlyName + "",
    A,
    j,
    T,
    V,
    O,
    B,
    X,
    H = a[4]?.friendlyName + "",
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
    M,
    G,
    R,
    L,
    F,
    ae,
    Se,
    ye,
    re,
    we,
    te,
    be,
    z,
    oe = (a[2].appearance > 0 ? a[2].appearance : "-") + "",
    Q,
    De,
    Ne,
    Pe = (a[2].appearance > 0 ? a[2].appearance * 5 : "-") + "",
    Ve,
    He,
    Te,
    ge,
    st,
    Et,
    Le,
    kt = a[2].goals + "",
    rt,
    wt,
    Me,
    ot = a[2].goalPoints + "",
    St,
    Ot,
    Ce,
    nt,
    Ma,
    it,
    It,
    da = a[2].assists + "",
    Sa,
    Xt,
    Oe,
    Zt = a[2].assistPoints + "",
    At,
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
    xa,
    ra,
    ua = (a[2].redCards > 0 ? -20 : 0) + "",
    Tt,
    Ka,
    xt,
    ma,
    We,
    Qe,
    Je,
    Ft,
    tt,
    _a = a[2].ownGoals + "",
    va,
    Ca,
    oa,
    na = a[2].ownGoals * -10 + "",
    Ct,
    Pt,
    ut,
    $t,
    Pa,
    Ja,
    mt,
    _t = a[2].missedPenalties + "",
    Va,
    Oa,
    Gt,
    ha = a[2].missedPenalties * -15 + "",
    je,
    Re,
    ke,
    Vt,
    pa,
    sl,
    Aa,
    qe,
    La = a[2].points + "",
    ba,
    at,
    xe,
    Ht,
    vt,
    rl,
    W,
    de,
    lt = a[2].bonusPoints + "",
    Ae,
    ht,
    ga,
    Mt,
    Ea,
    ia,
    ol,
    wa,
    ja = a[2].totalPoints + "",
    Wt,
    nl,
    Ia,
    qt,
    pt,
    Ie,
    il,
    pl;
  var yt = ms(a[2].player.nationality);
  function bl(Ge) {
    return { props: { class: "h-20 w-20" } };
  }
  yt && (D = cs(yt, bl())),
    (k = new ll({
      props: {
        className: "w-5 h-5 mr-2",
        primaryColour: a[3]?.primaryColourHex,
        secondaryColour: a[3]?.secondaryColourHex,
        thirdColour: a[3]?.thirdColourHex,
      },
    })),
    (B = new ll({
      props: {
        className: "w-5 h-5 mx-1",
        primaryColour: a[4]?.primaryColourHex,
        secondaryColour: a[4]?.secondaryColourHex,
        thirdColour: a[4]?.thirdColourHex,
      },
    }));
  let Fe = a[2].player.position < 2 && ys(a),
    $e = a[2].player.position === 0 && Ds(a);
  return {
    c() {
      (t = o("div")),
        (l = o("div")),
        (s = o("div")),
        (d = o("h3")),
        (u = v("Player Detail")),
        (f = I()),
        (E = o("button")),
        (_ = v("×")),
        (g = I()),
        (w = o("div")),
        D && Be(D.$$.fragment),
        (P = I()),
        (p = o("div")),
        (m = o("h3")),
        (N = v(S)),
        (b = I()),
        (x = o("p")),
        Be(k.$$.fragment),
        (C = I()),
        (A = v($)),
        (j = I()),
        (T = o("div")),
        (V = o("p")),
        (O = v("vs ")),
        Be(B.$$.fragment),
        (X = I()),
        (K = v(H)),
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
        (M = v("Category")),
        (G = I()),
        (R = o("div")),
        (L = v("Detail")),
        (F = I()),
        (ae = o("div")),
        (Se = v("Points")),
        (ye = I()),
        (re = o("div")),
        (we = o("div")),
        (te = v("Appearance")),
        (be = I()),
        (z = o("div")),
        (Q = v(oe)),
        (De = I()),
        (Ne = o("div")),
        (Ve = v(Pe)),
        (He = I()),
        (Te = o("div")),
        (ge = o("div")),
        (st = v("Goals")),
        (Et = I()),
        (Le = o("div")),
        (rt = v(kt)),
        (wt = I()),
        (Me = o("div")),
        (St = v(ot)),
        (Ot = I()),
        (Ce = o("div")),
        (nt = o("div")),
        (Ma = v("Assists")),
        (it = I()),
        (It = o("div")),
        (Sa = v(da)),
        (Xt = I()),
        (Oe = o("div")),
        (At = v(Zt)),
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
        (xa = I()),
        (ra = o("div")),
        (Tt = v(ua)),
        (Ka = I()),
        Fe && Fe.c(),
        (xt = I()),
        $e && $e.c(),
        (ma = I()),
        (We = o("div")),
        (Qe = o("div")),
        (Je = v("Own Goal")),
        (Ft = I()),
        (tt = o("div")),
        (va = v(_a)),
        (Ca = I()),
        (oa = o("div")),
        (Ct = v(na)),
        (Pt = I()),
        (ut = o("div")),
        ($t = o("div")),
        (Pa = v("Penalty Misses")),
        (Ja = I()),
        (mt = o("div")),
        (Va = v(_t)),
        (Oa = I()),
        (Gt = o("div")),
        (je = v(ha)),
        (Re = I()),
        (ke = o("div")),
        (Vt = o("div")),
        (pa = o("span")),
        (sl = v("Player Points:")),
        (Aa = I()),
        (qe = o("span")),
        (ba = v(La)),
        (at = I()),
        (xe = o("div")),
        (Ht = o("div")),
        (vt = o("span")),
        (rl = v("Bonus Points:")),
        (W = I()),
        (de = o("span")),
        (Ae = v(lt)),
        (ht = I()),
        (ga = o("div")),
        (Mt = o("div")),
        (Ea = o("span")),
        (ia = v("Total Points:")),
        (ol = I()),
        (wa = o("span")),
        (Wt = v(ja)),
        (nl = I()),
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
        (f = y(Xe)),
        (E = n(Xe, "BUTTON", { class: !0 }));
      var gl = i(E);
      (_ = h(gl, "×")),
        gl.forEach(r),
        Xe.forEach(r),
        (g = y(ve)),
        (w = n(ve, "DIV", { class: !0 }));
      var Ya = i(w);
      D && Ye(D.$$.fragment, Ya),
        (P = y(Ya)),
        (p = n(Ya, "DIV", { class: !0 }));
      var Qa = i(p);
      m = n(Qa, "H3", { class: !0 });
      var El = i(m);
      (N = h(El, S)),
        El.forEach(r),
        (b = y(Qa)),
        (x = n(Qa, "P", { class: !0 }));
      var Xa = i(x);
      Ye(k.$$.fragment, Xa),
        (C = y(Xa)),
        (A = h(Xa, $)),
        Xa.forEach(r),
        Qa.forEach(r),
        Ya.forEach(r),
        (j = y(ve)),
        (T = n(ve, "DIV", { class: !0 }));
      var Dt = i(T);
      V = n(Dt, "P", { class: !0 });
      var Fa = i(V);
      (O = h(Fa, "vs ")),
        Ye(B.$$.fragment, Fa),
        (X = y(Fa)),
        (K = h(Fa, H)),
        Fa.forEach(r),
        (se = y(Dt)),
        (Z = n(Dt, "P", { class: !0 }));
      var wl = i(Z);
      (ee = h(wl, a[5])),
        wl.forEach(r),
        (fe = y(Dt)),
        (ne = n(Dt, "P", { class: !0 }));
      var Nt = i(ne);
      (ce = h(Nt, "Gameweek ")),
        (ie = h(Nt, q)),
        Nt.forEach(r),
        Dt.forEach(r),
        (U = y(ve)),
        (le = n(ve, "DIV", { class: !0 }));
      var Il = i(le);
      J = n(Il, "DIV", { class: !0 });
      var ya = i(J);
      ue = n(ya, "DIV", { class: !0 });
      var yl = i(ue);
      (M = h(yl, "Category")),
        yl.forEach(r),
        (G = y(ya)),
        (R = n(ya, "DIV", { class: !0 }));
      var Za = i(R);
      (L = h(Za, "Detail")),
        Za.forEach(r),
        (F = y(ya)),
        (ae = n(ya, "DIV", { class: !0 }));
      var Da = i(ae);
      (Se = h(Da, "Points")),
        Da.forEach(r),
        ya.forEach(r),
        Il.forEach(r),
        (ye = y(ve)),
        (re = n(ve, "DIV", { class: !0 }));
      var Bt = i(re);
      we = n(Bt, "DIV", { class: !0 });
      var Dl = i(we);
      (te = h(Dl, "Appearance")),
        Dl.forEach(r),
        (be = y(Bt)),
        (z = n(Bt, "DIV", { class: !0 }));
      var Nl = i(z);
      (Q = h(Nl, oe)),
        Nl.forEach(r),
        (De = y(Bt)),
        (Ne = n(Bt, "DIV", { class: !0 }));
      var kl = i(Ne);
      (Ve = h(kl, Pe)),
        kl.forEach(r),
        Bt.forEach(r),
        (He = y(ve)),
        (Te = n(ve, "DIV", { class: !0 }));
      var Ut = i(Te);
      ge = n(Ut, "DIV", { class: !0 });
      var zt = i(ge);
      (st = h(zt, "Goals")),
        zt.forEach(r),
        (Et = y(Ut)),
        (Le = n(Ut, "DIV", { class: !0 }));
      var Sl = i(Le);
      (rt = h(Sl, kt)),
        Sl.forEach(r),
        (wt = y(Ut)),
        (Me = n(Ut, "DIV", { class: !0 }));
      var Tl = i(Me);
      (St = h(Tl, ot)),
        Tl.forEach(r),
        Ut.forEach(r),
        (Ot = y(ve)),
        (Ce = n(ve, "DIV", { class: !0 }));
      var Na = i(Ce);
      nt = n(Na, "DIV", { class: !0 });
      var xl = i(nt);
      (Ma = h(xl, "Assists")),
        xl.forEach(r),
        (it = y(Na)),
        (It = n(Na, "DIV", { class: !0 }));
      var Cl = i(It);
      (Sa = h(Cl, da)),
        Cl.forEach(r),
        (Xt = y(Na)),
        (Oe = n(Na, "DIV", { class: !0 }));
      var Pl = i(Oe);
      (At = h(Pl, Zt)),
        Pl.forEach(r),
        Na.forEach(r),
        (Wa = y(ve)),
        (ct = n(ve, "DIV", { class: !0 }));
      var cl = i(ct);
      Lt = n(cl, "DIV", { class: !0 });
      var Gl = i(Lt);
      (ea = h(Gl, "Yellow Card")),
        Gl.forEach(r),
        (qa = y(cl)),
        (ta = n(cl, "DIV", { class: !0 }));
      var Hl = i(ta);
      (jt = h(Hl, aa)),
        Hl.forEach(r),
        (Ba = y(cl)),
        (la = n(cl, "DIV", { class: !0 }));
      var Ml = i(la);
      (fa = h(Ml, dt)),
        Ml.forEach(r),
        cl.forEach(r),
        (Ua = y(ve)),
        (et = n(ve, "DIV", { class: !0 }));
      var dl = i(et);
      sa = n(dl, "DIV", { class: !0 });
      var Wl = i(sa);
      (Rt = h(Wl, "Red Card")),
        Wl.forEach(r),
        (za = y(dl)),
        (Ke = n(dl, "DIV", { class: !0 }));
      var ql = i(Ke);
      (Ta = h(ql, ft)),
        ql.forEach(r),
        (xa = y(dl)),
        (ra = n(dl, "DIV", { class: !0 }));
      var Bl = i(ra);
      (Tt = h(Bl, ua)),
        Bl.forEach(r),
        dl.forEach(r),
        (Ka = y(ve)),
        Fe && Fe.l(ve),
        (xt = y(ve)),
        $e && $e.l(ve),
        (ma = y(ve)),
        (We = n(ve, "DIV", { class: !0 }));
      var fl = i(We);
      Qe = n(fl, "DIV", { class: !0 });
      var Ul = i(Qe);
      (Je = h(Ul, "Own Goal")),
        Ul.forEach(r),
        (Ft = y(fl)),
        (tt = n(fl, "DIV", { class: !0 }));
      var zl = i(tt);
      (va = h(zl, _a)),
        zl.forEach(r),
        (Ca = y(fl)),
        (oa = n(fl, "DIV", { class: !0 }));
      var Kl = i(oa);
      (Ct = h(Kl, na)),
        Kl.forEach(r),
        fl.forEach(r),
        (Pt = y(ve)),
        (ut = n(ve, "DIV", { class: !0 }));
      var ul = i(ut);
      $t = n(ul, "DIV", { class: !0 });
      var Jl = i($t);
      (Pa = h(Jl, "Penalty Misses")),
        Jl.forEach(r),
        (Ja = y(ul)),
        (mt = n(ul, "DIV", { class: !0 }));
      var Yl = i(mt);
      (Va = h(Yl, _t)),
        Yl.forEach(r),
        (Oa = y(ul)),
        (Gt = n(ul, "DIV", { class: !0 }));
      var Ql = i(Gt);
      (je = h(Ql, ha)),
        Ql.forEach(r),
        ul.forEach(r),
        (Re = y(ve)),
        (ke = n(ve, "DIV", { class: !0 }));
      var Xl = i(ke);
      Vt = n(Xl, "DIV", { class: !0 });
      var Al = i(Vt);
      pa = n(Al, "SPAN", { class: !0 });
      var Zl = i(pa);
      (sl = h(Zl, "Player Points:")),
        Zl.forEach(r),
        (Aa = y(Al)),
        (qe = n(Al, "SPAN", { class: !0 }));
      var es = i(qe);
      (ba = h(es, La)),
        es.forEach(r),
        Al.forEach(r),
        Xl.forEach(r),
        (at = y(ve)),
        (xe = n(ve, "DIV", { class: !0 }));
      var ts = i(xe);
      Ht = n(ts, "DIV", { class: !0 });
      var Ll = i(Ht);
      vt = n(Ll, "SPAN", { class: !0 });
      var as = i(vt);
      (rl = h(as, "Bonus Points:")),
        as.forEach(r),
        (W = y(Ll)),
        (de = n(Ll, "SPAN", { class: !0 }));
      var ls = i(de);
      (Ae = h(ls, lt)),
        ls.forEach(r),
        Ll.forEach(r),
        ts.forEach(r),
        (ht = y(ve)),
        (ga = n(ve, "DIV", { class: !0 }));
      var ss = i(ga);
      Mt = n(ss, "DIV", { class: !0 });
      var jl = i(Mt);
      Ea = n(jl, "SPAN", { class: !0 });
      var rs = i(Ea);
      (ia = h(rs, "Total Points:")),
        rs.forEach(r),
        (ol = y(jl)),
        (wa = n(jl, "SPAN", { class: !0 }));
      var os = i(wa);
      (Wt = h(os, ja)),
        os.forEach(r),
        jl.forEach(r),
        ss.forEach(r),
        (nl = y(ve)),
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
        c(E, "class", "text-white text-3xl"),
        c(s, "class", "flex justify-between items-center"),
        c(m, "class", "text-2xl mb-2"),
        c(x, "class", "text-sm text-gray-400 flex items-center"),
        c(p, "class", "ml-4"),
        c(w, "class", "flex justify-start items-center w-full"),
        c(
          V,
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
        c(we, "class", "text-sm font-medium w-3/6"),
        c(z, "class", "text-sm font-medium w-2/6"),
        c(Ne, "class", "text-sm font-medium w-1/6"),
        c(re, "class", "flex justify-between items-center p-2"),
        c(ge, "class", "text-sm font-medium w-3/6"),
        c(Le, "class", "text-sm font-medium w-2/6"),
        c(Me, "class", "text-sm font-medium w-1/6"),
        c(Te, "class", "flex justify-between items-center p-2"),
        c(nt, "class", "text-sm font-medium w-3/6"),
        c(It, "class", "text-sm font-medium w-2/6"),
        c(Oe, "class", "text-sm font-medium w-1/6"),
        c(Ce, "class", "flex justify-between items-center p-2"),
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
          Vt,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(ke, "class", "mt-2"),
        c(vt, "class", "text-sm font-bold w-5/6"),
        c(de, "class", "text-sm font-bold w-1/6"),
        c(
          Ht,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(xe, "class", "mt-2"),
        c(Ea, "class", "text-sm font-bold w-5/6"),
        c(wa, "class", "text-sm font-bold w-1/6"),
        c(
          Mt,
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
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop svelte-1fl295u"
        );
    },
    m(Ge, he) {
      _e(Ge, t, he),
        e(t, l),
        e(l, s),
        e(s, d),
        e(d, u),
        e(s, f),
        e(s, E),
        e(E, _),
        e(l, g),
        e(l, w),
        D && Ue(D, w, null),
        e(w, P),
        e(w, p),
        e(p, m),
        e(m, N),
        e(p, b),
        e(p, x),
        Ue(k, x, null),
        e(x, C),
        e(x, A),
        e(l, j),
        e(l, T),
        e(T, V),
        e(V, O),
        Ue(B, V, null),
        e(V, X),
        e(V, K),
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
        e(ue, M),
        e(J, G),
        e(J, R),
        e(R, L),
        e(J, F),
        e(J, ae),
        e(ae, Se),
        e(l, ye),
        e(l, re),
        e(re, we),
        e(we, te),
        e(re, be),
        e(re, z),
        e(z, Q),
        e(re, De),
        e(re, Ne),
        e(Ne, Ve),
        e(l, He),
        e(l, Te),
        e(Te, ge),
        e(ge, st),
        e(Te, Et),
        e(Te, Le),
        e(Le, rt),
        e(Te, wt),
        e(Te, Me),
        e(Me, St),
        e(l, Ot),
        e(l, Ce),
        e(Ce, nt),
        e(nt, Ma),
        e(Ce, it),
        e(Ce, It),
        e(It, Sa),
        e(Ce, Xt),
        e(Ce, Oe),
        e(Oe, At),
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
        e(et, xa),
        e(et, ra),
        e(ra, Tt),
        e(l, Ka),
        Fe && Fe.m(l, null),
        e(l, xt),
        $e && $e.m(l, null),
        e(l, ma),
        e(l, We),
        e(We, Qe),
        e(Qe, Je),
        e(We, Ft),
        e(We, tt),
        e(tt, va),
        e(We, Ca),
        e(We, oa),
        e(oa, Ct),
        e(l, Pt),
        e(l, ut),
        e(ut, $t),
        e($t, Pa),
        e(ut, Ja),
        e(ut, mt),
        e(mt, Va),
        e(ut, Oa),
        e(ut, Gt),
        e(Gt, je),
        e(l, Re),
        e(l, ke),
        e(ke, Vt),
        e(Vt, pa),
        e(pa, sl),
        e(Vt, Aa),
        e(Vt, qe),
        e(qe, ba),
        e(l, at),
        e(l, xe),
        e(xe, Ht),
        e(Ht, vt),
        e(vt, rl),
        e(Ht, W),
        e(Ht, de),
        e(de, Ae),
        e(l, ht),
        e(l, ga),
        e(ga, Mt),
        e(Mt, Ea),
        e(Ea, ia),
        e(Mt, ol),
        e(Mt, wa),
        e(wa, Wt),
        e(l, nl),
        e(l, Ia),
        e(Ia, qt),
        e(qt, pt),
        (Ie = !0),
        il ||
          ((pl = [
            Ee(E, "click", function () {
              Vl(a[1]) && a[1].apply(this, arguments);
            }),
            Ee(qt, "click", function () {
              Vl(a[1]) && a[1].apply(this, arguments);
            }),
            Ee(qt, "keydown", function () {
              Vl(a[1]) && a[1].apply(this, arguments);
            }),
            Ee(l, "click", ds(a[6])),
            Ee(l, "keydown", ds(a[7])),
            Ee(t, "click", function () {
              Vl(a[1]) && a[1].apply(this, arguments);
            }),
            Ee(t, "keydown", function () {
              Vl(a[1]) && a[1].apply(this, arguments);
            }),
          ]),
          (il = !0));
    },
    p(Ge, he) {
      if (((a = Ge), he & 4 && yt !== (yt = ms(a[2].player.nationality)))) {
        if (D) {
          Jt();
          const Ra = D;
          pe(Ra.$$.fragment, 1, 0, () => {
            ze(Ra, 1);
          }),
            Yt();
        }
        yt
          ? ((D = cs(yt, bl())),
            Be(D.$$.fragment),
            me(D.$$.fragment, 1),
            Ue(D, w, P))
          : (D = null);
      }
      (!Ie || he & 4) &&
        S !==
          (S =
            (a[2].player.firstName != ""
              ? a[2].player.firstName.charAt(0) + "."
              : "") + a[2].player.lastName) &&
        Y(N, S);
      const ve = {};
      he & 8 && (ve.primaryColour = a[3]?.primaryColourHex),
        he & 8 && (ve.secondaryColour = a[3]?.secondaryColourHex),
        he & 8 && (ve.thirdColour = a[3]?.thirdColourHex),
        k.$set(ve),
        (!Ie || he & 8) && $ !== ($ = a[3]?.friendlyName + "") && Y(A, $);
      const Xe = {};
      he & 16 && (Xe.primaryColour = a[4]?.primaryColourHex),
        he & 16 && (Xe.secondaryColour = a[4]?.secondaryColourHex),
        he & 16 && (Xe.thirdColour = a[4]?.thirdColourHex),
        B.$set(Xe),
        (!Ie || he & 16) && H !== (H = a[4]?.friendlyName + "") && Y(K, H),
        (!Ie || he & 32) && Y(ee, a[5]),
        (!Ie || he & 4) && q !== (q = a[2].gameweek + "") && Y(ie, q),
        (!Ie || he & 4) &&
          oe !== (oe = (a[2].appearance > 0 ? a[2].appearance : "-") + "") &&
          Y(Q, oe),
        (!Ie || he & 4) &&
          Pe !==
            (Pe = (a[2].appearance > 0 ? a[2].appearance * 5 : "-") + "") &&
          Y(Ve, Pe),
        (!Ie || he & 4) && kt !== (kt = a[2].goals + "") && Y(rt, kt),
        (!Ie || he & 4) && ot !== (ot = a[2].goalPoints + "") && Y(St, ot),
        (!Ie || he & 4) && da !== (da = a[2].assists + "") && Y(Sa, da),
        (!Ie || he & 4) && Zt !== (Zt = a[2].assistPoints + "") && Y(At, Zt),
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
            : ((Fe = ys(a)), Fe.c(), Fe.m(l, xt))
          : Fe && (Fe.d(1), (Fe = null)),
        a[2].player.position === 0
          ? $e
            ? $e.p(a, he)
            : (($e = Ds(a)), $e.c(), $e.m(l, ma))
          : $e && ($e.d(1), ($e = null)),
        (!Ie || he & 4) && _a !== (_a = a[2].ownGoals + "") && Y(va, _a),
        (!Ie || he & 4) && na !== (na = a[2].ownGoals * -10 + "") && Y(Ct, na),
        (!Ie || he & 4) && _t !== (_t = a[2].missedPenalties + "") && Y(Va, _t),
        (!Ie || he & 4) &&
          ha !== (ha = a[2].missedPenalties * -15 + "") &&
          Y(je, ha),
        (!Ie || he & 4) && La !== (La = a[2].points + "") && Y(ba, La),
        (!Ie || he & 4) && lt !== (lt = a[2].bonusPoints + "") && Y(Ae, lt),
        (!Ie || he & 4) && ja !== (ja = a[2].totalPoints + "") && Y(Wt, ja);
    },
    i(Ge) {
      Ie ||
        (D && me(D.$$.fragment, Ge),
        me(k.$$.fragment, Ge),
        me(B.$$.fragment, Ge),
        (Ie = !0));
    },
    o(Ge) {
      D && pe(D.$$.fragment, Ge),
        pe(k.$$.fragment, Ge),
        pe(B.$$.fragment, Ge),
        (Ie = !1);
    },
    d(Ge) {
      Ge && r(t),
        D && ze(D),
        ze(k),
        ze(B),
        Fe && Fe.d(),
        $e && $e.d(),
        (il = !1),
        ka(pl);
    },
  };
}
function ys(a) {
  let t,
    l,
    s,
    d,
    u,
    f = a[2].cleanSheets + "",
    E,
    _,
    g,
    w = a[2].cleanSheetPoints + "",
    D,
    P,
    p,
    m,
    S,
    N,
    b,
    x = a[2].goalsConceded + "",
    k,
    C,
    $,
    A = a[2].goalsConcededPoints + "",
    j;
  return {
    c() {
      (t = o("div")),
        (l = o("div")),
        (s = v("Clean Sheet")),
        (d = I()),
        (u = o("div")),
        (E = v(f)),
        (_ = I()),
        (g = o("div")),
        (D = v(w)),
        (P = I()),
        (p = o("div")),
        (m = o("div")),
        (S = v("Conceded")),
        (N = I()),
        (b = o("div")),
        (k = v(x)),
        (C = I()),
        ($ = o("div")),
        (j = v(A)),
        this.h();
    },
    l(T) {
      t = n(T, "DIV", { class: !0 });
      var V = i(t);
      l = n(V, "DIV", { class: !0 });
      var O = i(l);
      (s = h(O, "Clean Sheet")),
        O.forEach(r),
        (d = y(V)),
        (u = n(V, "DIV", { class: !0 }));
      var B = i(u);
      (E = h(B, f)), B.forEach(r), (_ = y(V)), (g = n(V, "DIV", { class: !0 }));
      var X = i(g);
      (D = h(X, w)),
        X.forEach(r),
        V.forEach(r),
        (P = y(T)),
        (p = n(T, "DIV", { class: !0 }));
      var H = i(p);
      m = n(H, "DIV", { class: !0 });
      var K = i(m);
      (S = h(K, "Conceded")),
        K.forEach(r),
        (N = y(H)),
        (b = n(H, "DIV", { class: !0 }));
      var se = i(b);
      (k = h(se, x)),
        se.forEach(r),
        (C = y(H)),
        ($ = n(H, "DIV", { class: !0 }));
      var Z = i($);
      (j = h(Z, A)), Z.forEach(r), H.forEach(r), this.h();
    },
    h() {
      c(l, "class", "text-sm font-medium w-3/6"),
        c(u, "class", "text-sm font-medium w-2/6"),
        c(g, "class", "text-sm font-medium w-1/6"),
        c(t, "class", "flex justify-between items-center p-2"),
        c(m, "class", "text-sm font-medium w-3/6"),
        c(b, "class", "text-sm font-medium w-2/6"),
        c($, "class", "text-sm font-medium w-1/6"),
        c(p, "class", "flex justify-between items-center p-2");
    },
    m(T, V) {
      _e(T, t, V),
        e(t, l),
        e(l, s),
        e(t, d),
        e(t, u),
        e(u, E),
        e(t, _),
        e(t, g),
        e(g, D),
        _e(T, P, V),
        _e(T, p, V),
        e(p, m),
        e(m, S),
        e(p, N),
        e(p, b),
        e(b, k),
        e(p, C),
        e(p, $),
        e($, j);
    },
    p(T, V) {
      V & 4 && f !== (f = T[2].cleanSheets + "") && Y(E, f),
        V & 4 && w !== (w = T[2].cleanSheetPoints + "") && Y(D, w),
        V & 4 && x !== (x = T[2].goalsConceded + "") && Y(k, x),
        V & 4 && A !== (A = T[2].goalsConcededPoints + "") && Y(j, A);
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
    E,
    _,
    g,
    w = Math.floor(a[2].saves / 3) * 5 + "",
    D,
    P,
    p,
    m,
    S,
    N,
    b,
    x = a[2].penaltySaves + "",
    k,
    C,
    $,
    A = a[2].penaltySaves * 20 + "",
    j;
  return {
    c() {
      (t = o("div")),
        (l = o("div")),
        (s = v("Saves")),
        (d = I()),
        (u = o("div")),
        (E = v(f)),
        (_ = I()),
        (g = o("div")),
        (D = v(w)),
        (P = I()),
        (p = o("div")),
        (m = o("div")),
        (S = v("Penalty Saves")),
        (N = I()),
        (b = o("div")),
        (k = v(x)),
        (C = I()),
        ($ = o("div")),
        (j = v(A)),
        this.h();
    },
    l(T) {
      t = n(T, "DIV", { class: !0 });
      var V = i(t);
      l = n(V, "DIV", { class: !0 });
      var O = i(l);
      (s = h(O, "Saves")),
        O.forEach(r),
        (d = y(V)),
        (u = n(V, "DIV", { class: !0 }));
      var B = i(u);
      (E = h(B, f)), B.forEach(r), (_ = y(V)), (g = n(V, "DIV", { class: !0 }));
      var X = i(g);
      (D = h(X, w)),
        X.forEach(r),
        V.forEach(r),
        (P = y(T)),
        (p = n(T, "DIV", { class: !0 }));
      var H = i(p);
      m = n(H, "DIV", { class: !0 });
      var K = i(m);
      (S = h(K, "Penalty Saves")),
        K.forEach(r),
        (N = y(H)),
        (b = n(H, "DIV", { class: !0 }));
      var se = i(b);
      (k = h(se, x)),
        se.forEach(r),
        (C = y(H)),
        ($ = n(H, "DIV", { class: !0 }));
      var Z = i($);
      (j = h(Z, A)), Z.forEach(r), H.forEach(r), this.h();
    },
    h() {
      c(l, "class", "text-sm font-medium w-3/6"),
        c(u, "class", "text-sm font-medium w-2/6"),
        c(g, "class", "text-sm font-medium w-1/6"),
        c(t, "class", "flex justify-between items-center p-2"),
        c(m, "class", "text-sm font-medium w-3/6"),
        c(b, "class", "text-sm font-medium w-2/6"),
        c($, "class", "text-sm font-medium w-1/6"),
        c(p, "class", "flex justify-between items-center p-2");
    },
    m(T, V) {
      _e(T, t, V),
        e(t, l),
        e(l, s),
        e(t, d),
        e(t, u),
        e(u, E),
        e(t, _),
        e(t, g),
        e(g, D),
        _e(T, P, V),
        _e(T, p, V),
        e(p, m),
        e(m, S),
        e(p, N),
        e(p, b),
        e(b, k),
        e(p, C),
        e(p, $),
        e($, j);
    },
    p(T, V) {
      V & 4 && f !== (f = T[2].saves + "") && Y(E, f),
        V & 4 && w !== (w = Math.floor(T[2].saves / 3) * 5 + "") && Y(D, w),
        V & 4 && x !== (x = T[2].penaltySaves + "") && Y(k, x),
        V & 4 && A !== (A = T[2].penaltySaves * 20 + "") && Y(j, A);
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
    { opponentTeam: E } = t,
    { seasonName: _ } = t;
  function g(D) {
    fs.call(this, a, D);
  }
  function w(D) {
    fs.call(this, a, D);
  }
  return (
    (a.$$set = (D) => {
      "showModal" in D && l(0, (s = D.showModal)),
        "closeDetailModal" in D && l(1, (d = D.closeDetailModal)),
        "gameweekData" in D && l(2, (u = D.gameweekData)),
        "playerTeam" in D && l(3, (f = D.playerTeam)),
        "opponentTeam" in D && l(4, (E = D.opponentTeam)),
        "seasonName" in D && l(5, (_ = D.seasonName));
    }),
    [s, d, u, f, E, _, g, w]
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
    E,
    _,
    g,
    w,
    D,
    P,
    p,
    m,
    S,
    N,
    b,
    x,
    k,
    C,
    $,
    A,
    j,
    T,
    V,
    O,
    B,
    X,
    H,
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
  for (let M = 0; M < ie.length; M += 1) U[M] = Ts(ks(a, ie, M));
  const le = [dr, cr],
    J = [];
  function ue(M, G) {
    return M[1].length > 0 ? 0 : 1;
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
          (E = o("button")),
          (_ = v("<")),
          (w = I()),
          (D = o("select"));
        for (let M = 0; M < U.length; M += 1) U[M].c();
        (P = I()),
          (p = o("button")),
          (m = v(">")),
          (N = I()),
          (b = o("div")),
          (x = o("div")),
          (k = o("div")),
          (C = o("div")),
          ($ = v("Pos")),
          (A = I()),
          (j = o("div")),
          (T = v("Player")),
          (V = I()),
          (O = o("div")),
          (B = v("Points")),
          (X = I()),
          (H = o("div")),
          (K = v(" ")),
          (se = I()),
          ee.c(),
          this.h();
      },
      l(M) {
        q && q.l(M), (t = y(M)), (l = n(M, "DIV", { class: !0 }));
        var G = i(l);
        s = n(G, "DIV", { class: !0 });
        var R = i(s);
        d = n(R, "DIV", { class: !0 });
        var L = i(d);
        u = n(L, "DIV", { class: !0 });
        var F = i(u);
        f = n(F, "DIV", { class: !0 });
        var ae = i(f);
        E = n(ae, "BUTTON", { class: !0 });
        var Se = i(E);
        (_ = h(Se, "<")),
          Se.forEach(r),
          (w = y(ae)),
          (D = n(ae, "SELECT", { class: !0 }));
        var ye = i(D);
        for (let Ne = 0; Ne < U.length; Ne += 1) U[Ne].l(ye);
        ye.forEach(r), (P = y(ae)), (p = n(ae, "BUTTON", { class: !0 }));
        var re = i(p);
        (m = h(re, ">")),
          re.forEach(r),
          ae.forEach(r),
          F.forEach(r),
          L.forEach(r),
          (N = y(R)),
          (b = n(R, "DIV", { class: !0 }));
        var we = i(b);
        x = n(we, "DIV", { class: !0 });
        var te = i(x);
        k = n(te, "DIV", { class: !0 });
        var be = i(k);
        C = n(be, "DIV", { class: !0 });
        var z = i(C);
        ($ = h(z, "Pos")),
          z.forEach(r),
          (A = y(be)),
          (j = n(be, "DIV", { class: !0 }));
        var oe = i(j);
        (T = h(oe, "Player")),
          oe.forEach(r),
          (V = y(be)),
          (O = n(be, "DIV", { class: !0 }));
        var Q = i(O);
        (B = h(Q, "Points")),
          Q.forEach(r),
          (X = y(be)),
          (H = n(be, "DIV", { class: !0 }));
        var De = i(H);
        (K = h(De, " ")),
          De.forEach(r),
          be.forEach(r),
          (se = y(te)),
          ee.l(te),
          te.forEach(r),
          we.forEach(r),
          R.forEach(r),
          G.forEach(r),
          this.h();
      },
      h() {
        c(
          E,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
        ),
          (E.disabled = g = a[0] === 1),
          c(
            D,
            "class",
            "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
          ),
          a[0] === void 0 && tl(() => a[13].call(D)),
          c(
            p,
            "class",
            "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
          ),
          (p.disabled = S = a[0] === 38),
          c(f, "class", "flex items-center mr-8"),
          c(u, "class", "flex items-center ml-4"),
          c(d, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
          c(C, "class", "w-1/6 text-center mx-4"),
          c(j, "class", "w-3/6 px-4"),
          c(O, "class", "w-1/6 text-center"),
          c(H, "class", "w-1/6 text-center"),
          c(
            k,
            "class",
            "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
          ),
          c(x, "class", "overflow-x-auto flex-1"),
          c(
            b,
            "class",
            "flex flex-col space-y-4 mt-4 text-lg text-xs md:text-base"
          ),
          c(s, "class", "flex flex-col space-y-4 text-xs md:text-base"),
          c(l, "class", "container-fluid mt-4 mb-4");
      },
      m(M, G) {
        q && q.m(M, G),
          _e(M, t, G),
          _e(M, l, G),
          e(l, s),
          e(s, d),
          e(d, u),
          e(u, f),
          e(f, E),
          e(E, _),
          e(f, w),
          e(f, D);
        for (let R = 0; R < U.length; R += 1) U[R] && U[R].m(D, null);
        bt(D, a[0], !0),
          e(f, P),
          e(f, p),
          e(p, m),
          e(s, N),
          e(s, b),
          e(b, x),
          e(x, k),
          e(k, C),
          e(C, $),
          e(k, A),
          e(k, j),
          e(j, T),
          e(k, V),
          e(k, O),
          e(O, B),
          e(k, X),
          e(k, H),
          e(H, K),
          e(x, se),
          J[Z].m(x, null),
          (fe = !0),
          ne ||
            ((ce = [
              Ee(E, "click", a[12]),
              Ee(D, "change", a[13]),
              Ee(p, "click", a[14]),
            ]),
            (ne = !0));
      },
      p(M, G) {
        if (
          (M[2]
            ? q
              ? (q.p(M, G), G & 4 && me(q, 1))
              : ((q = Ss(M)), q.c(), me(q, 1), q.m(t.parentNode, t))
            : q &&
              (Jt(),
              pe(q, 1, 1, () => {
                q = null;
              }),
              Yt()),
          (!fe || (G & 129 && g !== (g = M[0] === 1))) && (E.disabled = g),
          G & 128)
        ) {
          ie = M[7];
          let L;
          for (L = 0; L < ie.length; L += 1) {
            const F = ks(M, ie, L);
            U[L] ? U[L].p(F, G) : ((U[L] = Ts(F)), U[L].c(), U[L].m(D, null));
          }
          for (; L < U.length; L += 1) U[L].d(1);
          U.length = ie.length;
        }
        G & 129 && bt(D, M[0]),
          (!fe || (G & 129 && S !== (S = M[0] === 38))) && (p.disabled = S);
        let R = Z;
        (Z = ue(M)),
          Z === R
            ? J[Z].p(M, G)
            : (Jt(),
              pe(J[R], 1, 1, () => {
                J[R] = null;
              }),
              Yt(),
              (ee = J[Z]),
              ee ? ee.p(M, G) : ((ee = J[Z] = le[Z](M)), ee.c()),
              me(ee, 1),
              ee.m(x, null));
      },
      i(M) {
        fe || (me(q), me(ee), (fe = !0));
      },
      o(M) {
        pe(q), pe(ee), (fe = !1);
      },
      d(M) {
        q && q.d(M),
          M && r(t),
          M && r(l),
          ca(U, M),
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
  for (let f = 0; f < s.length; f += 1) d[f] = xs(Ns(a, s, f));
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
      for (let E = 0; E < d.length; E += 1) d[E].l(f);
      t = Ga();
    },
    m(f, E) {
      for (let _ = 0; _ < d.length; _ += 1) d[_] && d[_].m(f, E);
      _e(f, t, E), (l = !0);
    },
    p(f, E) {
      if (E & 1026) {
        s = f[1];
        let _;
        for (_ = 0; _ < s.length; _ += 1) {
          const g = Ns(f, s, _);
          d[_]
            ? (d[_].p(g, E), me(d[_], 1))
            : ((d[_] = xs(g)), d[_].c(), me(d[_], 1), d[_].m(t.parentNode, t));
        }
        for (Jt(), _ = s.length; _ < d.length; _ += 1) u(_);
        Yt();
      }
    },
    i(f) {
      if (!l) {
        for (let E = 0; E < s.length; E += 1) me(d[E]);
        l = !0;
      }
    },
    o(f) {
      d = d.filter(Boolean);
      for (let E = 0; E < d.length; E += 1) pe(d[E]);
      l = !1;
    },
    d(f) {
      ca(d, f), f && r(t);
    },
  };
}
function xs(a) {
  let t,
    l,
    s = _s(a[23].player.position) + "",
    d,
    u,
    f,
    E,
    _ =
      a[23].player.firstName.length > 2
        ? a[23].player.firstName.substring(0, 1) + "."
        : "",
    g,
    w,
    D = a[23].player.lastName + "",
    P,
    p,
    m,
    S,
    N = a[23].points + "",
    b,
    x,
    k,
    C,
    $,
    A,
    j,
    T,
    V,
    O,
    B;
  A = new Xs({ props: { className: "w-6 mr-2" } });
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
        (E = o("a")),
        (g = v(_)),
        (w = I()),
        (P = v(D)),
        (m = I()),
        (S = o("div")),
        (b = v(N)),
        (x = I()),
        (k = o("div")),
        (C = o("button")),
        ($ = o("span")),
        Be(A.$$.fragment),
        (j = v("View Details")),
        (T = I()),
        this.h();
    },
    l(H) {
      t = n(H, "DIV", { class: !0 });
      var K = i(t);
      l = n(K, "DIV", { class: !0 });
      var se = i(l);
      (d = h(se, s)),
        se.forEach(r),
        (u = y(K)),
        (f = n(K, "DIV", { class: !0 }));
      var Z = i(f);
      E = n(Z, "A", { href: !0 });
      var ee = i(E);
      (g = h(ee, _)),
        (w = y(ee)),
        (P = h(ee, D)),
        ee.forEach(r),
        Z.forEach(r),
        (m = y(K)),
        (S = n(K, "DIV", { class: !0 }));
      var fe = i(S);
      (b = h(fe, N)),
        fe.forEach(r),
        (x = y(K)),
        (k = n(K, "DIV", { class: !0 }));
      var ne = i(k);
      C = n(ne, "BUTTON", {});
      var ce = i(C);
      $ = n(ce, "SPAN", { class: !0 });
      var q = i($);
      Ye(A.$$.fragment, q),
        (j = h(q, "View Details")),
        q.forEach(r),
        ce.forEach(r),
        ne.forEach(r),
        (T = y(K)),
        K.forEach(r),
        this.h();
    },
    h() {
      c(l, "class", "w-1/6 text-center"),
        c(E, "href", (p = `/player?id=${a[23].player.id}`)),
        c(f, "class", "w-3/6 text-center"),
        c(S, "class", "w-1/6 text-center"),
        c($, "class", "flex items-center"),
        c(k, "class", "w-1/6 text-center"),
        c(
          t,
          "class",
          "flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer"
        );
    },
    m(H, K) {
      _e(H, t, K),
        e(t, l),
        e(l, d),
        e(t, u),
        e(t, f),
        e(f, E),
        e(E, g),
        e(E, w),
        e(E, P),
        e(t, m),
        e(t, S),
        e(S, b),
        e(t, x),
        e(t, k),
        e(k, C),
        e(C, $),
        Ue(A, $, null),
        e($, j),
        e(t, T),
        (V = !0),
        O || ((B = Ee(C, "click", X)), (O = !0));
    },
    p(H, K) {
      (a = H),
        (!V || K & 2) && s !== (s = _s(a[23].player.position) + "") && Y(d, s),
        (!V || K & 2) &&
          _ !==
            (_ =
              a[23].player.firstName.length > 2
                ? a[23].player.firstName.substring(0, 1) + "."
                : "") &&
          Y(g, _),
        (!V || K & 2) && D !== (D = a[23].player.lastName + "") && Y(P, D),
        (!V || (K & 2 && p !== (p = `/player?id=${a[23].player.id}`))) &&
          c(E, "href", p),
        (!V || K & 2) && N !== (N = a[23].points + "") && Y(b, N);
    },
    i(H) {
      V || (me(A.$$.fragment, H), (V = !0));
    },
    o(H) {
      pe(A.$$.fragment, H), (V = !1);
    },
    d(H) {
      H && r(t), ze(A), (O = !1), B();
    },
  };
}
function fr(a) {
  let t, l, s, d;
  const u = [ir, nr],
    f = [];
  function E(_, g) {
    return _[6] ? 0 : 1;
  }
  return (
    (t = E(a)),
    (l = f[t] = u[t](a)),
    {
      c() {
        l.c(), (s = Ga());
      },
      l(_) {
        l.l(_), (s = Ga());
      },
      m(_, g) {
        f[t].m(_, g), _e(_, s, g), (d = !0);
      },
      p(_, [g]) {
        let w = t;
        (t = E(_)),
          t === w
            ? f[t].p(_, g)
            : (Jt(),
              pe(f[w], 1, 1, () => {
                f[w] = null;
              }),
              Yt(),
              (l = f[t]),
              l ? l.p(_, g) : ((l = f[t] = u[t](_)), l.c()),
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
    E,
    _,
    g = 1,
    w = Array.from({ length: 38 }, (O, B) => B + 1),
    D = [],
    P = !1,
    p,
    m,
    S,
    N,
    b = !0;
  Ol(async () => {
    try {
      await Kt.sync(),
        await Qt.sync(),
        await Ha.sync(),
        (f = Kt.subscribe((O) => {
          s = O.sort((B, X) => B.friendlyName.localeCompare(X.friendlyName));
        })),
        (E = Qt.subscribe((O) => {
          d = O;
        })),
        (_ = Ha.subscribe((O) => {
          u = O;
        })),
        await x("");
    } catch (O) {
      al.show("Error fetching gameweek points.", "error"),
        console.error("Error fetching gameweek points:", O);
    } finally {
      l(6, (b = !1));
    }
  }),
    Rl(() => {
      f?.(), _?.(), E?.();
    });
  async function x(O) {
    let B = await Ws.getFantasyTeamForGameweek(O, g);
    l(1, (D = await Zs.getGameweekPlayers(B, g)));
  }
  const k = (O) => {
    l(0, (g = Math.max(1, Math.min(38, g + O))));
  };
  async function C(O) {
    try {
      l(5, (S = O));
      let B = O.player.teamId;
      l(3, (p = s.find((K) => K.id === B)));
      let X = u.find(
          (K) =>
            K.gameweek === O.gameweek &&
            (K.homeTeamId === B || K.awayTeamId === B)
        ),
        H = X?.homeTeamId === B ? X?.awayTeamId : X?.homeTeamId;
      l(4, (m = s.find((K) => K.id === H))), l(2, (P = !0));
    } catch (B) {
      al.show("Error loading gameweek detail.", "error"),
        console.error("Error loading gameweek detail:", B);
    }
  }
  function $() {
    l(2, (P = !1));
  }
  const A = () => k(-1);
  function j() {
    (g = el(this)), l(0, g), l(7, w);
  }
  return [g, D, P, p, m, S, b, w, N, k, C, $, A, j, () => k(1), (O) => C(O)];
}
class mr extends _l {
  constructor(t) {
    super(), vl(this, t, ur, fr, hl, {});
  }
}
function Cs(a, t, l) {
  const s = a.slice();
  return (s[36] = t[l]), s;
}
function Ps(a, t, l) {
  const s = a.slice();
  return (s[39] = t[l]), s;
}
function Vs(a, t, l) {
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
    E,
    _,
    g,
    w,
    D,
    P,
    p,
    m,
    S,
    N,
    b,
    x,
    k,
    C,
    $,
    A,
    j,
    T,
    V,
    O,
    B,
    X,
    H,
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
        (E = v("<")),
        (_ = I()),
        (g = o("select")),
        (w = o("option")),
        (D = v("Weekly")),
        (P = o("option")),
        (p = v("Monthly")),
        (m = o("option")),
        (S = v("Season")),
        (N = I()),
        (b = o("button")),
        (x = v(">")),
        (k = I()),
        ce && ce.c(),
        (C = I()),
        q && q.c(),
        ($ = I()),
        (A = o("div")),
        (j = o("div")),
        (T = o("div")),
        (V = o("div")),
        (O = v("Pos")),
        (B = I()),
        (X = o("div")),
        (H = v("Manager")),
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
      var M = i(l);
      s = n(M, "DIV", { class: !0 });
      var G = i(s);
      d = n(G, "DIV", { class: !0 });
      var R = i(d);
      u = n(R, "DIV", { class: !0 });
      var L = i(u);
      f = n(L, "BUTTON", { class: !0 });
      var F = i(f);
      (E = h(F, "<")),
        F.forEach(r),
        (_ = y(L)),
        (g = n(L, "SELECT", { class: !0 }));
      var ae = i(g);
      w = n(ae, "OPTION", {});
      var Se = i(w);
      (D = h(Se, "Weekly")), Se.forEach(r), (P = n(ae, "OPTION", {}));
      var ye = i(P);
      (p = h(ye, "Monthly")), ye.forEach(r), (m = n(ae, "OPTION", {}));
      var re = i(m);
      (S = h(re, "Season")),
        re.forEach(r),
        ae.forEach(r),
        (N = y(L)),
        (b = n(L, "BUTTON", { class: !0 }));
      var we = i(b);
      (x = h(we, ">")),
        we.forEach(r),
        L.forEach(r),
        (k = y(R)),
        ce && ce.l(R),
        (C = y(R)),
        q && q.l(R),
        R.forEach(r),
        G.forEach(r),
        ($ = y(M)),
        (A = n(M, "DIV", { class: !0 }));
      var te = i(A);
      j = n(te, "DIV", { class: !0 });
      var be = i(j);
      T = n(be, "DIV", { class: !0 });
      var z = i(T);
      V = n(z, "DIV", { class: !0 });
      var oe = i(V);
      (O = h(oe, "Pos")),
        oe.forEach(r),
        (B = y(z)),
        (X = n(z, "DIV", { class: !0 }));
      var Q = i(X);
      (H = h(Q, "Manager")),
        Q.forEach(r),
        (K = y(z)),
        (se = n(z, "DIV", { class: !0 }));
      var De = i(se);
      (Z = h(De, "Points")),
        De.forEach(r),
        z.forEach(r),
        (ee = y(be)),
        le.l(be),
        be.forEach(r),
        te.forEach(r),
        M.forEach(r),
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
        (P.__value = 2),
        (P.value = P.__value),
        (m.__value = 3),
        (m.value = m.__value),
        c(
          g,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        a[1] === void 0 && tl(() => a[16].call(g)),
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
        c(V, "class", "w-1/6 px-4"),
        c(X, "class", "w-1/3 px-4"),
        c(se, "class", "w-1/2 px-4"),
        c(
          T,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        c(j, "class", "overflow-x-auto flex-1"),
        c(A, "class", "flex flex-col space-y-4 mt-4 text-xs md:text-base"),
        c(l, "class", "flex flex-col space-y-4 text-xs md:text-base"),
        c(t, "class", "container-fluid mt-4");
    },
    m(J, ue) {
      _e(J, t, ue),
        e(t, l),
        e(l, s),
        e(s, d),
        e(d, u),
        e(u, f),
        e(f, E),
        e(u, _),
        e(u, g),
        e(g, w),
        e(w, D),
        e(g, P),
        e(P, p),
        e(g, m),
        e(m, S),
        bt(g, a[1], !0),
        e(u, N),
        e(u, b),
        e(b, x),
        e(d, k),
        ce && ce.m(d, null),
        e(d, C),
        q && q.m(d, null),
        e(l, $),
        e(l, A),
        e(A, j),
        e(j, T),
        e(T, V),
        e(V, O),
        e(T, B),
        e(T, X),
        e(X, H),
        e(T, K),
        e(T, se),
        e(se, Z),
        e(j, ee),
        le.m(j, null),
        fe ||
          ((ne = [
            Ee(f, "click", a[15]),
            Ee(g, "change", a[16]),
            Ee(b, "click", a[17]),
          ]),
          (fe = !0));
    },
    p(J, ue) {
      ue[0] & 2 && bt(g, J[1]),
        J[1] === 1
          ? ce
            ? ce.p(J, ue)
            : ((ce = Os(J)), ce.c(), ce.m(d, C))
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
    E,
    _,
    g,
    w,
    D,
    P,
    p = a[9],
    m = [];
  for (let S = 0; S < p.length; S += 1) m[S] = As(Vs(a, p, S));
  return {
    c() {
      (t = o("div")),
        (l = o("button")),
        (s = v("<")),
        (u = I()),
        (f = o("select"));
      for (let S = 0; S < m.length; S += 1) m[S].c();
      (E = I()), (_ = o("button")), (g = v(">")), this.h();
    },
    l(S) {
      t = n(S, "DIV", { class: !0 });
      var N = i(t);
      l = n(N, "BUTTON", { class: !0 });
      var b = i(l);
      (s = h(b, "<")),
        b.forEach(r),
        (u = y(N)),
        (f = n(N, "SELECT", { class: !0 }));
      var x = i(f);
      for (let C = 0; C < m.length; C += 1) m[C].l(x);
      x.forEach(r), (E = y(N)), (_ = n(N, "BUTTON", { class: !0 }));
      var k = i(_);
      (g = h(k, ">")), k.forEach(r), N.forEach(r), this.h();
    },
    h() {
      c(
        l,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (l.disabled = d = a[2] === 1),
        c(
          f,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px] md:min-w-[140px]"
        ),
        a[2] === void 0 && tl(() => a[19].call(f)),
        c(
          _,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (_.disabled = w = a[2] === 38),
        c(t, "class", "md:flex md:items-center mt-2 sm:mt-0 ml-2");
    },
    m(S, N) {
      _e(S, t, N), e(t, l), e(l, s), e(t, u), e(t, f);
      for (let b = 0; b < m.length; b += 1) m[b] && m[b].m(f, null);
      bt(f, a[2], !0),
        e(t, E),
        e(t, _),
        e(_, g),
        D ||
          ((P = [
            Ee(l, "click", a[18]),
            Ee(f, "change", a[19]),
            Ee(_, "click", a[20]),
          ]),
          (D = !0));
    },
    p(S, N) {
      if (
        (N[0] & 516 && d !== (d = S[2] === 1) && (l.disabled = d), N[0] & 512)
      ) {
        p = S[9];
        let b;
        for (b = 0; b < p.length; b += 1) {
          const x = Vs(S, p, b);
          m[b] ? m[b].p(x, N) : ((m[b] = As(x)), m[b].c(), m[b].m(f, null));
        }
        for (; b < m.length; b += 1) m[b].d(1);
        m.length = p.length;
      }
      N[0] & 516 && bt(f, S[2]),
        N[0] & 516 && w !== (w = S[2] === 38) && (_.disabled = w);
    },
    d(S) {
      S && r(t), ca(m, S), (D = !1), ka(P);
    },
  };
}
function As(a) {
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
    E,
    _,
    g,
    w,
    D,
    P,
    p,
    m,
    S,
    N,
    b,
    x,
    k,
    C,
    $,
    A,
    j,
    T,
    V,
    O,
    B,
    X,
    H,
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
    M,
    G = a[0],
    R = [];
  for (let L = 0; L < G.length; L += 1) R[L] = js(Ps(a, G, L));
  return {
    c() {
      (t = o("div")),
        (l = o("button")),
        (s = v("<")),
        (d = I()),
        (u = o("select"));
      for (let L = 0; L < R.length; L += 1) R[L].c();
      (f = I()),
        (E = o("button")),
        (_ = v(">")),
        (g = I()),
        (w = o("div")),
        (D = o("button")),
        (P = v("<")),
        (p = I()),
        (m = o("select")),
        (S = o("option")),
        (N = v("January")),
        (b = o("option")),
        (x = v("February")),
        (k = o("option")),
        (C = v("March")),
        ($ = o("option")),
        (A = v("April")),
        (j = o("option")),
        (T = v("May")),
        (V = o("option")),
        (O = v("June")),
        (B = o("option")),
        (X = v("July")),
        (H = o("option")),
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
        (d = y(F)),
        (u = n(F, "SELECT", { class: !0 }));
      var Se = i(u);
      for (let Le = 0; Le < R.length; Le += 1) R[Le].l(Se);
      Se.forEach(r), (f = y(F)), (E = n(F, "BUTTON", { class: !0 }));
      var ye = i(E);
      (_ = h(ye, ">")),
        ye.forEach(r),
        F.forEach(r),
        (g = y(L)),
        (w = n(L, "DIV", { class: !0 }));
      var re = i(w);
      D = n(re, "BUTTON", { class: !0 });
      var we = i(D);
      (P = h(we, "<")),
        we.forEach(r),
        (p = y(re)),
        (m = n(re, "SELECT", { class: !0 }));
      var te = i(m);
      S = n(te, "OPTION", {});
      var be = i(S);
      (N = h(be, "January")), be.forEach(r), (b = n(te, "OPTION", {}));
      var z = i(b);
      (x = h(z, "February")), z.forEach(r), (k = n(te, "OPTION", {}));
      var oe = i(k);
      (C = h(oe, "March")), oe.forEach(r), ($ = n(te, "OPTION", {}));
      var Q = i($);
      (A = h(Q, "April")), Q.forEach(r), (j = n(te, "OPTION", {}));
      var De = i(j);
      (T = h(De, "May")), De.forEach(r), (V = n(te, "OPTION", {}));
      var Ne = i(V);
      (O = h(Ne, "June")), Ne.forEach(r), (B = n(te, "OPTION", {}));
      var Pe = i(B);
      (X = h(Pe, "July")), Pe.forEach(r), (H = n(te, "OPTION", {}));
      var Ve = i(H);
      (K = h(Ve, "August")), Ve.forEach(r), (se = n(te, "OPTION", {}));
      var He = i(se);
      (Z = h(He, "September")), He.forEach(r), (ee = n(te, "OPTION", {}));
      var Te = i(ee);
      (fe = h(Te, "October")), Te.forEach(r), (ne = n(te, "OPTION", {}));
      var ge = i(ne);
      (ce = h(ge, "November")), ge.forEach(r), (q = n(te, "OPTION", {}));
      var st = i(q);
      (ie = h(st, "December")),
        st.forEach(r),
        te.forEach(r),
        (U = y(re)),
        (le = n(re, "BUTTON", { class: !0 }));
      var Et = i(le);
      (J = h(Et, ">")), Et.forEach(r), re.forEach(r), this.h();
    },
    h() {
      c(
        l,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        c(
          u,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        a[4] === void 0 && tl(() => a[22].call(u)),
        c(
          E,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        c(t, "class", "sm:flex sm:items-center sm:mt-0 mt-2 ml-2"),
        c(
          D,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
        ),
        (S.__value = 1),
        (S.value = S.__value),
        (b.__value = 2),
        (b.value = b.__value),
        (k.__value = 3),
        (k.value = k.__value),
        ($.__value = 4),
        ($.value = $.__value),
        (j.__value = 5),
        (j.value = j.__value),
        (V.__value = 6),
        (V.value = V.__value),
        (B.__value = 7),
        (B.value = B.__value),
        (H.__value = 8),
        (H.value = H.__value),
        (se.__value = 9),
        (se.value = se.__value),
        (ee.__value = 10),
        (ee.value = ee.__value),
        (ne.__value = 11),
        (ne.value = ne.__value),
        (q.__value = 12),
        (q.value = q.__value),
        c(
          m,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px] md:min-w-[150px]"
        ),
        a[3] === void 0 && tl(() => a[25].call(m)),
        c(
          le,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        c(w, "class", "sm:flex sm:items-center sm:mt-0 mt-2 ml-2");
    },
    m(L, F) {
      _e(L, t, F), e(t, l), e(l, s), e(t, d), e(t, u);
      for (let ae = 0; ae < R.length; ae += 1) R[ae] && R[ae].m(u, null);
      bt(u, a[4], !0),
        e(t, f),
        e(t, E),
        e(E, _),
        _e(L, g, F),
        _e(L, w, F),
        e(w, D),
        e(D, P),
        e(w, p),
        e(w, m),
        e(m, S),
        e(S, N),
        e(m, b),
        e(b, x),
        e(m, k),
        e(k, C),
        e(m, $),
        e($, A),
        e(m, j),
        e(j, T),
        e(m, V),
        e(V, O),
        e(m, B),
        e(B, X),
        e(m, H),
        e(H, K),
        e(m, se),
        e(se, Z),
        e(m, ee),
        e(ee, fe),
        e(m, ne),
        e(ne, ce),
        e(m, q),
        e(q, ie),
        bt(m, a[3], !0),
        e(w, U),
        e(w, le),
        e(le, J),
        ue ||
          ((M = [
            Ee(l, "click", a[21]),
            Ee(u, "change", a[22]),
            Ee(E, "click", a[23]),
            Ee(D, "click", a[24]),
            Ee(m, "change", a[25]),
            Ee(le, "click", a[26]),
          ]),
          (ue = !0));
    },
    p(L, F) {
      if (F[0] & 1) {
        G = L[0];
        let ae;
        for (ae = 0; ae < G.length; ae += 1) {
          const Se = Ps(L, G, ae);
          R[ae]
            ? R[ae].p(Se, F)
            : ((R[ae] = js(Se)), R[ae].c(), R[ae].m(u, null));
        }
        for (; ae < R.length; ae += 1) R[ae].d(1);
        R.length = G.length;
      }
      F[0] & 17 && bt(u, L[4]), F[0] & 8 && bt(m, L[3]);
    },
    d(L) {
      L && r(t), ca(R, L), L && r(g), L && r(w), (ue = !1), ka(M);
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
    E,
    _,
    g,
    w,
    D,
    P,
    p,
    m,
    S,
    N = a[5].entries,
    b = [];
  for (let x = 0; x < N.length; x += 1) b[x] = Rs(Cs(a, N, x));
  return {
    c() {
      for (let x = 0; x < b.length; x += 1) b[x].c();
      (t = I()),
        (l = o("div")),
        (s = o("button")),
        (d = v("Previous")),
        (f = I()),
        (E = o("span")),
        (_ = v("Page ")),
        (g = v(a[7])),
        (w = I()),
        (D = o("button")),
        (P = v("Next")),
        this.h();
    },
    l(x) {
      for (let j = 0; j < b.length; j += 1) b[j].l(x);
      (t = y(x)), (l = n(x, "DIV", { class: !0 }));
      var k = i(l);
      s = n(k, "BUTTON", { class: !0 });
      var C = i(s);
      (d = h(C, "Previous")),
        C.forEach(r),
        (f = y(k)),
        (E = n(k, "SPAN", { class: !0 }));
      var $ = i(E);
      (_ = h($, "Page ")),
        (g = h($, a[7])),
        $.forEach(r),
        (w = y(k)),
        (D = n(k, "BUTTON", { class: !0 }));
      var A = i(D);
      (P = h(A, "Next")), A.forEach(r), k.forEach(r), this.h();
    },
    h() {
      (s.disabled = u = a[7] === 1),
        c(
          s,
          "class",
          "px-4 py-2 mx-2 fpl-button rounded disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed min-w-[100px] text-sm"
        ),
        c(E, "class", "px-4"),
        (D.disabled = p = a[7] >= a[8]),
        c(
          D,
          "class",
          "px-4 py-2 mx-2 fpl-button rounded disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed min-w-[100px] text-sm"
        ),
        c(l, "class", "flex justify-center items-center mt-4 mb-4");
    },
    m(x, k) {
      for (let C = 0; C < b.length; C += 1) b[C] && b[C].m(x, k);
      _e(x, t, k),
        _e(x, l, k),
        e(l, s),
        e(s, d),
        e(l, f),
        e(l, E),
        e(E, _),
        e(E, g),
        e(l, w),
        e(l, D),
        e(D, P),
        m || ((S = [Ee(s, "click", a[27]), Ee(D, "click", a[28])]), (m = !0));
    },
    p(x, k) {
      if (k[0] & 36) {
        N = x[5].entries;
        let C;
        for (C = 0; C < N.length; C += 1) {
          const $ = Cs(x, N, C);
          b[C]
            ? b[C].p($, k)
            : ((b[C] = Rs($)), b[C].c(), b[C].m(t.parentNode, t));
        }
        for (; C < b.length; C += 1) b[C].d(1);
        b.length = N.length;
      }
      k[0] & 128 && u !== (u = x[7] === 1) && (s.disabled = u),
        k[0] & 128 && Y(g, x[7]),
        k[0] & 384 && p !== (p = x[7] >= x[8]) && (D.disabled = p);
    },
    d(x) {
      ca(b, x), x && r(t), x && r(l), (m = !1), ka(S);
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
    E,
    _ = a[36].username + "",
    g,
    w,
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
        (E = o("a")),
        (g = v(_)),
        (D = I()),
        (P = o("div")),
        (m = v(p)),
        this.h();
    },
    l(S) {
      t = n(S, "DIV", { class: !0 });
      var N = i(t);
      l = n(N, "DIV", { class: !0 });
      var b = i(l);
      (d = h(b, s)), b.forEach(r), (u = y(N)), (f = n(N, "DIV", { class: !0 }));
      var x = i(f);
      E = n(x, "A", { href: !0 });
      var k = i(E);
      (g = h(k, _)),
        k.forEach(r),
        x.forEach(r),
        (D = y(N)),
        (P = n(N, "DIV", { class: !0 }));
      var C = i(P);
      (m = h(C, p)), C.forEach(r), N.forEach(r), this.h();
    },
    h() {
      c(l, "class", "w-1/6 px-4"),
        c(E, "href", (w = `/manager?id=${a[36].principalId}&gw=${a[2]}`)),
        c(f, "class", "w-1/3 px-4"),
        c(P, "class", "w-1/2 px-4"),
        c(
          t,
          "class",
          "flex items-center p-2 justify-between py-4 border-b border-gray-700 cursor-pointer"
        );
    },
    m(S, N) {
      _e(S, t, N),
        e(t, l),
        e(l, d),
        e(t, u),
        e(t, f),
        e(f, E),
        e(E, g),
        e(t, D),
        e(t, P),
        e(P, m);
    },
    p(S, N) {
      N[0] & 32 && s !== (s = S[36].positionText + "") && Y(d, s),
        N[0] & 32 && _ !== (_ = S[36].username + "") && Y(g, _),
        N[0] & 548 &&
          w !== (w = `/manager?id=${S[36].principalId}&gw=${S[2]}`) &&
          c(E, "href", w),
        N[0] & 32 && p !== (p = S[36].points + "") && Y(m, p);
    },
    d(S) {
      S && r(t);
    },
  };
}
function br(a) {
  let t, l, s, d;
  const u = [vr, _r],
    f = [];
  function E(_, g) {
    return _[6] ? 0 : 1;
  }
  return (
    (t = E(a)),
    (l = f[t] = u[t](a)),
    {
      c() {
        l.c(), (s = Ga());
      },
      l(_) {
        l.l(_), (s = Ga());
      },
      m(_, g) {
        f[t].m(_, g), _e(_, s, g), (d = !0);
      },
      p(_, g) {
        let w = t;
        (t = E(_)),
          t === w
            ? f[t].p(_, g)
            : (Jt(),
              pe(f[w], 1, 1, () => {
                f[w] = null;
              }),
              Yt(),
              (l = f[t]),
              l ? l.p(_, g) : ((l = f[t] = u[t](_)), l.c()),
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
    E = !0,
    _ = 1,
    g = 1,
    w = 1,
    D,
    P = Array.from({ length: 38 }, (U, le) => le + 1),
    p = 1,
    m,
    S,
    N,
    b = 0,
    x = 0;
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
        (S = d?.activeGameweek ?? 1),
        (N = d?.focusGameweek ?? 1),
        l(2, (g = d?.focusGameweek ?? g)),
        l(3, (w = d?.activeMonth ?? w));
      let U = await ml.getWeeklyLeaderboard();
      l(5, (m = U));
    } catch (U) {
      al.show("Error fetching leaderboard data.", "error"),
        console.error("Error fetching leaderboard data:", U);
    } finally {
      l(6, (E = !1));
    }
  }),
    Rl(() => {
      u?.(), f?.();
    });
  async function k() {
    l(6, (E = !0));
    try {
      switch (_) {
        case 1:
          l(5, (m = await ml.getWeeklyLeaderboardPage(g, p)));
          break;
        case 2:
          l(5, (m = await ml.getMonthlyLeaderboard(D, w, p)));
          break;
        case 3:
          l(5, (m = await ml.getSeasonLeaderboardPage(p)));
          break;
      }
    } catch (U) {
      al.show("Error fetching leaderboard data.", "error"),
        console.error("Error fetching leaderboard data:", U);
    } finally {
      l(6, (E = !1));
    }
  }
  const C = (U) => {
    l(2, (g = Math.max(1, Math.min(38, g + U))));
  };
  function $(U) {
    l(3, (w += U)), w > 12 ? l(3, (w = 1)) : w < 1 && l(3, (w = 12)), k();
  }
  function A(U) {
    l(7, (p = Math.max(1, Math.min(b, p + U)))), k();
  }
  function j(U) {
    l(1, (_ += U)), _ > 3 ? l(1, (_ = 1)) : _ < 1 && l(1, (_ = 3)), k();
  }
  function T(U) {
    (x = (x + U + s.length) % s.length), l(4, (D = s[x].id)), k();
  }
  const V = () => j(-1);
  function O() {
    (_ = el(this)), l(1, _);
  }
  const B = () => j(1),
    X = () => C(-1);
  function H() {
    (g = el(this)), l(2, g), l(9, P);
  }
  const K = () => C(1),
    se = () => T(-1);
  function Z() {
    (D = el(this)), l(4, D), l(0, s);
  }
  const ee = () => T(1),
    fe = () => $(-1);
  function ne() {
    (w = el(this)), l(3, w);
  }
  const ce = () => $(1),
    q = () => A(-1),
    ie = () => A(1);
  return (
    (a.$$.update = () => {
      a.$$.dirty[0] & 17 && (x = s.findIndex((U) => U.id === D)),
        a.$$.dirty[0] & 32 &&
          m &&
          m.totalEntries &&
          l(8, (b = Math.ceil(Number(m.totalEntries) / gr))),
        a.$$.dirty[0] & 30 && k();
    }),
    [
      s,
      _,
      g,
      w,
      D,
      m,
      E,
      p,
      b,
      P,
      C,
      $,
      A,
      j,
      T,
      V,
      O,
      B,
      X,
      H,
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
class wr extends _l {
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
function Hs(a) {
  let t,
    l,
    s = a[17] + 1 + "",
    d,
    u,
    f,
    E,
    _,
    g = a[15].friendlyName + "",
    w,
    D,
    P,
    p,
    m = a[15].played + "",
    S,
    N,
    b,
    x = a[15].wins + "",
    k,
    C,
    $,
    A = a[15].draws + "",
    j,
    T,
    V,
    O = a[15].losses + "",
    B,
    X,
    H,
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
    M,
    G,
    R;
  return (
    (E = new ll({
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
          Be(E.$$.fragment),
          (_ = I()),
          (w = v(g)),
          (P = I()),
          (p = o("div")),
          (S = v(m)),
          (N = I()),
          (b = o("div")),
          (k = v(x)),
          (C = I()),
          ($ = o("div")),
          (j = v(A)),
          (T = I()),
          (V = o("div")),
          (B = v(O)),
          (X = I()),
          (H = o("div")),
          (se = v(K)),
          (Z = I()),
          (ee = o("div")),
          (ne = v(fe)),
          (ce = I()),
          (q = o("div")),
          (U = v(ie)),
          (le = I()),
          (J = o("div")),
          (M = v(ue)),
          (G = I()),
          this.h();
      },
      l(L) {
        t = n(L, "DIV", { class: !0 });
        var F = i(t);
        l = n(F, "DIV", { class: !0 });
        var ae = i(l);
        (d = h(ae, s)),
          ae.forEach(r),
          (u = y(F)),
          (f = n(F, "A", { class: !0, href: !0 }));
        var Se = i(f);
        Ye(E.$$.fragment, Se),
          (_ = y(Se)),
          (w = h(Se, g)),
          Se.forEach(r),
          (P = y(F)),
          (p = n(F, "DIV", { class: !0 }));
        var ye = i(p);
        (S = h(ye, m)),
          ye.forEach(r),
          (N = y(F)),
          (b = n(F, "DIV", { class: !0 }));
        var re = i(b);
        (k = h(re, x)),
          re.forEach(r),
          (C = y(F)),
          ($ = n(F, "DIV", { class: !0 }));
        var we = i($);
        (j = h(we, A)),
          we.forEach(r),
          (T = y(F)),
          (V = n(F, "DIV", { class: !0 }));
        var te = i(V);
        (B = h(te, O)),
          te.forEach(r),
          (X = y(F)),
          (H = n(F, "DIV", { class: !0 }));
        var be = i(H);
        (se = h(be, K)),
          be.forEach(r),
          (Z = y(F)),
          (ee = n(F, "DIV", { class: !0 }));
        var z = i(ee);
        (ne = h(z, fe)),
          z.forEach(r),
          (ce = y(F)),
          (q = n(F, "DIV", { class: !0 }));
        var oe = i(q);
        (U = h(oe, ie)),
          oe.forEach(r),
          (le = y(F)),
          (J = n(F, "DIV", { class: !0 }));
        var Q = i(J);
        (M = h(Q, ue)), Q.forEach(r), (G = y(F)), F.forEach(r), this.h();
      },
      h() {
        c(l, "class", "w-1/12 text-center mx-4"),
          c(f, "class", "w-3/12 flex items-center justify-start"),
          c(f, "href", (D = `/club?id=${a[15].id}`)),
          c(p, "class", "w-1/12 text-center"),
          c(b, "class", "w-1/12 text-center"),
          c($, "class", "w-1/12 text-center"),
          c(V, "class", "w-1/12 text-center"),
          c(H, "class", "w-1/12 text-center"),
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
          Ue(E, f, null),
          e(f, _),
          e(f, w),
          e(t, P),
          e(t, p),
          e(p, S),
          e(t, N),
          e(t, b),
          e(b, k),
          e(t, C),
          e(t, $),
          e($, j),
          e(t, T),
          e(t, V),
          e(V, B),
          e(t, X),
          e(t, H),
          e(H, se),
          e(t, Z),
          e(t, ee),
          e(ee, ne),
          e(t, ce),
          e(t, q),
          e(q, U),
          e(t, le),
          e(t, J),
          e(J, M),
          e(t, G),
          (R = !0);
      },
      p(L, F) {
        const ae = {};
        F & 2 && (ae.primaryColour = L[15].primaryColourHex),
          F & 2 && (ae.secondaryColour = L[15].secondaryColourHex),
          F & 2 && (ae.thirdColour = L[15].thirdColourHex),
          E.$set(ae),
          (!R || F & 2) && g !== (g = L[15].friendlyName + "") && Y(w, g),
          (!R || (F & 2 && D !== (D = `/club?id=${L[15].id}`))) &&
            c(f, "href", D),
          (!R || F & 2) && m !== (m = L[15].played + "") && Y(S, m),
          (!R || F & 2) && x !== (x = L[15].wins + "") && Y(k, x),
          (!R || F & 2) && A !== (A = L[15].draws + "") && Y(j, A),
          (!R || F & 2) && O !== (O = L[15].losses + "") && Y(B, O),
          (!R || F & 2) && K !== (K = L[15].goalsFor + "") && Y(se, K),
          (!R || F & 2) && fe !== (fe = L[15].goalsAgainst + "") && Y(ne, fe),
          (!R || F & 2) &&
            ie !== (ie = L[15].goalsFor - L[15].goalsAgainst + "") &&
            Y(U, ie),
          (!R || F & 2) && ue !== (ue = L[15].points + "") && Y(M, ue);
      },
      i(L) {
        R || (me(E.$$.fragment, L), (R = !0));
      },
      o(L) {
        pe(E.$$.fragment, L), (R = !1);
      },
      d(L) {
        L && r(t), ze(E);
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
    E,
    _,
    g,
    w,
    D,
    P,
    p,
    m,
    S,
    N,
    b,
    x,
    k,
    C,
    $,
    A,
    j,
    T,
    V,
    O,
    B,
    X,
    H,
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
    M,
    G,
    R,
    L,
    F,
    ae,
    Se,
    ye = a[2],
    re = [];
  for (let z = 0; z < ye.length; z += 1) re[z] = Gs($s(a, ye, z));
  let we = a[1],
    te = [];
  for (let z = 0; z < we.length; z += 1) te[z] = Hs(Fs(a, we, z));
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
        (E = I()),
        (_ = o("select"));
      for (let z = 0; z < re.length; z += 1) re[z].c();
      (g = I()),
        (w = o("button")),
        (D = v(">")),
        (p = I()),
        (m = o("div")),
        (S = o("div")),
        (N = o("div")),
        (b = o("div")),
        (x = v("Pos")),
        (k = I()),
        (C = o("div")),
        ($ = v("Team")),
        (A = I()),
        (j = o("div")),
        (T = v("P")),
        (V = I()),
        (O = o("div")),
        (B = v("W")),
        (X = I()),
        (H = o("div")),
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
        (M = I()),
        (G = o("div")),
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
        (E = y(De)),
        (_ = n(De, "SELECT", { class: !0 }));
      var Pe = i(_);
      for (let Ce = 0; Ce < re.length; Ce += 1) re[Ce].l(Pe);
      Pe.forEach(r), (g = y(De)), (w = n(De, "BUTTON", { class: !0 }));
      var Ve = i(w);
      (D = h(Ve, ">")),
        Ve.forEach(r),
        De.forEach(r),
        Q.forEach(r),
        (p = y(oe)),
        (m = n(oe, "DIV", { class: !0 }));
      var He = i(m);
      S = n(He, "DIV", { class: !0 });
      var Te = i(S);
      N = n(Te, "DIV", { class: !0 });
      var ge = i(N);
      b = n(ge, "DIV", { class: !0 });
      var st = i(b);
      (x = h(st, "Pos")),
        st.forEach(r),
        (k = y(ge)),
        (C = n(ge, "DIV", { class: !0 }));
      var Et = i(C);
      ($ = h(Et, "Team")),
        Et.forEach(r),
        (A = y(ge)),
        (j = n(ge, "DIV", { class: !0 }));
      var Le = i(j);
      (T = h(Le, "P")),
        Le.forEach(r),
        (V = y(ge)),
        (O = n(ge, "DIV", { class: !0 }));
      var kt = i(O);
      (B = h(kt, "W")),
        kt.forEach(r),
        (X = y(ge)),
        (H = n(ge, "DIV", { class: !0 }));
      var rt = i(H);
      (K = h(rt, "D")),
        rt.forEach(r),
        (se = y(ge)),
        (Z = n(ge, "DIV", { class: !0 }));
      var wt = i(Z);
      (ee = h(wt, "L")),
        wt.forEach(r),
        (fe = y(ge)),
        (ne = n(ge, "DIV", { class: !0 }));
      var Me = i(ne);
      (ce = h(Me, "GF")),
        Me.forEach(r),
        (q = y(ge)),
        (ie = n(ge, "DIV", { class: !0 }));
      var ot = i(ie);
      (U = h(ot, "GA")),
        ot.forEach(r),
        (le = y(ge)),
        (J = n(ge, "DIV", { class: !0 }));
      var St = i(J);
      (ue = h(St, "GD")),
        St.forEach(r),
        (M = y(ge)),
        (G = n(ge, "DIV", { class: !0 }));
      var Ot = i(G);
      (R = h(Ot, "PTS")), Ot.forEach(r), ge.forEach(r), (L = y(Te));
      for (let Ce = 0; Ce < te.length; Ce += 1) te[Ce].l(Te);
      Te.forEach(r), He.forEach(r), oe.forEach(r), this.h();
    },
    h() {
      c(
        d,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (d.disabled = f = a[0] === 1),
        c(
          _,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        a[0] === void 0 && tl(() => a[8].call(_)),
        c(
          w,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (w.disabled = P = a[0] === 38),
        c(s, "class", "flex items-center space-x-2 ml-4"),
        c(l, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        c(b, "class", "w-1/12 text-center mx-4"),
        c(C, "class", "w-3/12"),
        c(j, "class", "w-1/12 text-center"),
        c(O, "class", "w-1/12 text-center"),
        c(H, "class", "w-1/12 text-center"),
        c(Z, "class", "w-1/12 text-center"),
        c(ne, "class", "w-1/12 text-center"),
        c(ie, "class", "w-1/12 text-center"),
        c(J, "class", "w-1/12 text-center"),
        c(G, "class", "w-1/12 text-center"),
        c(
          N,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        c(S, "class", "overflow-x-auto flex-1"),
        c(m, "class", "flex flex-col space-y-4 mt-4 text-xs md:text-base"),
        c(t, "class", "container-fluid mt-4");
    },
    m(z, oe) {
      _e(z, t, oe), e(t, l), e(l, s), e(s, d), e(d, u), e(s, E), e(s, _);
      for (let Q = 0; Q < re.length; Q += 1) re[Q] && re[Q].m(_, null);
      bt(_, a[0], !0),
        e(s, g),
        e(s, w),
        e(w, D),
        e(t, p),
        e(t, m),
        e(m, S),
        e(S, N),
        e(N, b),
        e(b, x),
        e(N, k),
        e(N, C),
        e(C, $),
        e(N, A),
        e(N, j),
        e(j, T),
        e(N, V),
        e(N, O),
        e(O, B),
        e(N, X),
        e(N, H),
        e(H, K),
        e(N, se),
        e(N, Z),
        e(Z, ee),
        e(N, fe),
        e(N, ne),
        e(ne, ce),
        e(N, q),
        e(N, ie),
        e(ie, U),
        e(N, le),
        e(N, J),
        e(J, ue),
        e(N, M),
        e(N, G),
        e(G, R),
        e(S, L);
      for (let Q = 0; Q < te.length; Q += 1) te[Q] && te[Q].m(S, null);
      (F = !0),
        ae ||
          ((Se = [
            Ee(d, "click", a[7]),
            Ee(_, "change", a[8]),
            Ee(w, "click", a[9]),
          ]),
          (ae = !0));
    },
    p(z, [oe]) {
      if (
        ((!F || (oe & 5 && f !== (f = z[0] === 1))) && (d.disabled = f), oe & 4)
      ) {
        ye = z[2];
        let Q;
        for (Q = 0; Q < ye.length; Q += 1) {
          const De = $s(z, ye, Q);
          re[Q]
            ? re[Q].p(De, oe)
            : ((re[Q] = Gs(De)), re[Q].c(), re[Q].m(_, null));
        }
        for (; Q < re.length; Q += 1) re[Q].d(1);
        re.length = ye.length;
      }
      if (
        (oe & 5 && bt(_, z[0]),
        (!F || (oe & 5 && P !== (P = z[0] === 38))) && (w.disabled = P),
        oe & 2)
      ) {
        we = z[1];
        let Q;
        for (Q = 0; Q < we.length; Q += 1) {
          const De = Fs(z, we, Q);
          te[Q]
            ? (te[Q].p(De, oe), me(te[Q], 1))
            : ((te[Q] = Hs(De)), te[Q].c(), me(te[Q], 1), te[Q].m(S, null));
        }
        for (Jt(), Q = we.length; Q < te.length; Q += 1) be(Q);
        Yt();
      }
    },
    i(z) {
      if (!F) {
        for (let oe = 0; oe < we.length; oe += 1) me(te[oe]);
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
function yr(a, t, l) {
  let s = [],
    d = [],
    u,
    f = [],
    E = 1,
    _ = Array.from({ length: 38 }, (x, k) => k + 1),
    g = [],
    w,
    D,
    P;
  Ol(async () => {
    try {
      await Kt.sync(),
        await Ha.sync(),
        await Qt.sync(),
        (w = Kt.subscribe((x) => {
          l(4, (s = x));
        })),
        (D = Ha.subscribe((x) => {
          l(5, (d = x)),
            l(
              6,
              (f = d.map((k) => ({
                fixture: k,
                homeTeam: m(k.homeTeamId),
                awayTeam: m(k.awayTeamId),
              })))
            );
        })),
        (P = Qt.subscribe((x) => {
          u = x;
        }));
    } catch (x) {
      al.show("Error fetching league table.", "error"),
        console.error("Error fetching league table:", x);
    } finally {
    }
  }),
    Rl(() => {
      w?.(), D?.(), P?.();
    });
  const p = (x) => {
    l(0, (E = Math.max(1, Math.min(38, E + x))));
  };
  function m(x) {
    return s.find((k) => k.id === x);
  }
  const S = () => p(-1);
  function N() {
    (E = el(this)), l(0, E), l(2, _);
  }
  const b = () => p(1);
  return (
    (a.$$.update = () => {
      a.$$.dirty & 113 &&
        d.length > 0 &&
        s.length > 0 &&
        l(1, (g = Ks(f, s, E)));
    }),
    [E, g, _, p, s, d, f, S, N, b]
  );
}
class Dr extends _l {
  constructor(t) {
    super(), vl(this, t, yr, Ir, hl, {});
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
function Ms(a) {
  let t, l, s, d, u, f, E;
  return {
    c() {
      (t = o("li")), (l = o("button")), (s = v("Points")), this.h();
    },
    l(_) {
      t = n(_, "LI", { class: !0 });
      var g = i(t);
      l = n(g, "BUTTON", { class: !0 });
      var w = i(l);
      (s = h(w, "Points")), w.forEach(r), g.forEach(r), this.h();
    },
    h() {
      c(
        l,
        "class",
        (d =
          Ze(`p-2 ${a[0] === "points" ? "text-white" : "text-gray-400"}`) +
          " svelte-18fkfyi")
      ),
        c(
          t,
          "class",
          (u =
            Ze(`mr-4 ${a[0] === "points" ? "active-tab" : ""}`) +
            " svelte-18fkfyi")
        );
    },
    m(_, g) {
      _e(_, t, g),
        e(t, l),
        e(l, s),
        f || ((E = Ee(l, "click", a[16])), (f = !0));
    },
    p(_, g) {
      g & 1 &&
        d !==
          (d =
            Ze(`p-2 ${_[0] === "points" ? "text-white" : "text-gray-400"}`) +
            " svelte-18fkfyi") &&
        c(l, "class", d),
        g & 1 &&
          u !==
            (u =
              Ze(`mr-4 ${_[0] === "points" ? "active-tab" : ""}`) +
              " svelte-18fkfyi") &&
          c(t, "class", u);
    },
    d(_) {
      _ && r(t), (f = !1), E();
    },
  };
}
function xr(a) {
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
function Cr(a) {
  let t, l;
  return (
    (t = new wr({})),
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
function Vr(a) {
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
    E,
    _,
    g,
    w,
    D,
    P,
    p,
    m,
    S,
    N,
    b,
    x,
    k,
    C,
    $,
    A,
    j,
    T,
    V,
    O,
    B,
    X,
    H,
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
    M,
    G,
    R,
    L,
    F,
    ae,
    Se,
    ye,
    re,
    we,
    te,
    be,
    z,
    oe,
    Q,
    De,
    Ne,
    Pe,
    Ve,
    He,
    Te = (a[11] ? a[11].abbreviatedName : "") + "",
    ge,
    st,
    Et,
    Le,
    kt,
    rt,
    wt,
    Me,
    ot = (a[12] ? a[12].abbreviatedName : "") + "",
    St,
    Ot,
    Ce,
    nt,
    Ma,
    it,
    It,
    da,
    Sa,
    Xt,
    Oe,
    Zt,
    At,
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
    xa,
    ra,
    ua,
    Tt,
    Ka,
    xt,
    ma,
    We,
    Qe,
    Je,
    Ft,
    tt,
    _a,
    va,
    Ca,
    oa,
    na,
    Ct,
    Pt,
    ut,
    $t,
    Pa,
    Ja,
    mt,
    _t,
    Va,
    Oa,
    Gt,
    ha,
    je,
    Re,
    ke,
    Vt,
    pa;
  (F = new ll({
    props: {
      primaryColour: a[11] ? a[11].primaryColourHex : "",
      secondaryColour: a[11] ? a[11].secondaryColourHex : "",
      thirdColour: a[11] ? a[11].thirdColourHex : "",
    },
  })),
    (oe = new ll({
      props: {
        primaryColour: a[12] ? a[12].primaryColourHex : "",
        secondaryColour: a[12] ? a[12].secondaryColourHex : "",
        thirdColour: a[12] ? a[12].thirdColourHex : "",
      },
    }));
  function sl(W, de) {
    return W[10] ? kr : Nr;
  }
  let Aa = sl(a),
    qe = Aa(a);
  function La(W, de) {
    return W[10] ? Tr : Sr;
  }
  let ba = La(a),
    at = ba(a),
    xe = a[13] && Ms(a);
  const Ht = [Vr, Pr, Cr, xr],
    vt = [];
  function rl(W, de) {
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
    ~(je = rl(a)) && (Re = vt[je] = Ht[je](a)),
    {
      c() {
        (t = o("div")),
          (l = o("div")),
          (s = o("div")),
          (d = o("div")),
          (u = o("p")),
          (f = v("Gameweek")),
          (E = I()),
          (_ = o("p")),
          (g = v(a[1])),
          (w = I()),
          (D = o("p")),
          (P = v(a[2])),
          (p = I()),
          (m = o("div")),
          (S = I()),
          (N = o("div")),
          (b = o("p")),
          (x = v("Managers")),
          (k = I()),
          (C = o("p")),
          ($ = v(a[3])),
          (A = I()),
          (j = o("p")),
          (T = v("Total")),
          (V = I()),
          (O = o("div")),
          (B = I()),
          (X = o("div")),
          (H = o("p")),
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
          (M = o("div")),
          (G = o("div")),
          (R = o("div")),
          (L = o("a")),
          Be(F.$$.fragment),
          (Se = I()),
          (ye = o("div")),
          (re = o("p")),
          (we = v("v")),
          (te = I()),
          (be = o("div")),
          (z = o("a")),
          Be(oe.$$.fragment),
          (De = I()),
          (Ne = o("div")),
          (Pe = o("div")),
          (Ve = o("p")),
          (He = o("a")),
          (ge = v(Te)),
          (Et = I()),
          (Le = o("div")),
          (kt = I()),
          (rt = o("div")),
          (wt = o("p")),
          (Me = o("a")),
          (St = v(ot)),
          (Ce = I()),
          (nt = o("div")),
          (Ma = I()),
          (it = o("div")),
          (It = o("p")),
          (da = v("Kick Off:")),
          (Sa = I()),
          (Xt = o("div")),
          (Oe = o("p")),
          (Zt = v(a[4])),
          (At = o("span")),
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
          (xa = v(a[9])),
          (ra = v(" High Score")),
          (ua = I()),
          (Tt = o("p")),
          qe.c(),
          (Ka = I()),
          (xt = o("p")),
          at.c(),
          (ma = I()),
          (We = o("div")),
          (Qe = o("div")),
          (Je = o("ul")),
          (Ft = o("li")),
          (tt = o("button")),
          (_a = v("Fixtures")),
          (oa = I()),
          xe && xe.c(),
          (na = I()),
          (Ct = o("li")),
          (Pt = o("button")),
          (ut = v("Leaderboards")),
          (Ja = I()),
          (mt = o("li")),
          (_t = o("button")),
          (Va = v("Table")),
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
        var Ae = i(s);
        d = n(Ae, "DIV", { class: !0 });
        var ht = i(d);
        u = n(ht, "P", { class: !0 });
        var ga = i(u);
        (f = h(ga, "Gameweek")),
          ga.forEach(r),
          (E = y(ht)),
          (_ = n(ht, "P", { class: !0 }));
        var Mt = i(_);
        (g = h(Mt, a[1])),
          Mt.forEach(r),
          (w = y(ht)),
          (D = n(ht, "P", { class: !0 }));
        var Ea = i(D);
        (P = h(Ea, a[2])),
          Ea.forEach(r),
          ht.forEach(r),
          (p = y(Ae)),
          (m = n(Ae, "DIV", { class: !0, style: !0 })),
          i(m).forEach(r),
          (S = y(Ae)),
          (N = n(Ae, "DIV", { class: !0 }));
        var ia = i(N);
        b = n(ia, "P", { class: !0 });
        var ol = i(b);
        (x = h(ol, "Managers")),
          ol.forEach(r),
          (k = y(ia)),
          (C = n(ia, "P", { class: !0 }));
        var wa = i(C);
        ($ = h(wa, a[3])),
          wa.forEach(r),
          (A = y(ia)),
          (j = n(ia, "P", { class: !0 }));
        var ja = i(j);
        (T = h(ja, "Total")),
          ja.forEach(r),
          ia.forEach(r),
          (V = y(Ae)),
          (O = n(Ae, "DIV", { class: !0, style: !0 })),
          i(O).forEach(r),
          (B = y(Ae)),
          (X = n(Ae, "DIV", { class: !0 }));
        var Wt = i(X);
        H = n(Wt, "P", { class: !0 });
        var nl = i(H);
        (K = h(nl, "Weekly Prize Pool")),
          nl.forEach(r),
          (se = y(Wt)),
          (Z = n(Wt, "P", { class: !0 }));
        var Ia = i(Z);
        (ee = h(Ia, "0")),
          Ia.forEach(r),
          (fe = y(Wt)),
          (ne = n(Wt, "P", { class: !0 }));
        var qt = i(ne);
        (ce = h(qt, "$FPL")),
          qt.forEach(r),
          Wt.forEach(r),
          Ae.forEach(r),
          (q = y(lt)),
          (ie = n(lt, "DIV", { class: !0 }));
        var pt = i(ie);
        U = n(pt, "DIV", { class: !0 });
        var Ie = i(U);
        le = n(Ie, "P", { class: !0 });
        var il = i(le);
        (J = h(il, "Next Game:")),
          il.forEach(r),
          (ue = y(Ie)),
          (M = n(Ie, "DIV", { class: !0 }));
        var pl = i(M);
        G = n(pl, "DIV", { class: !0 });
        var yt = i(G);
        R = n(yt, "DIV", { class: !0 });
        var bl = i(R);
        L = n(bl, "A", { href: !0 });
        var Fe = i(L);
        Ye(F.$$.fragment, Fe),
          Fe.forEach(r),
          bl.forEach(r),
          (Se = y(yt)),
          (ye = n(yt, "DIV", { class: !0 }));
        var $e = i(ye);
        re = n($e, "P", { class: !0 });
        var Ge = i(re);
        (we = h(Ge, "v")),
          Ge.forEach(r),
          $e.forEach(r),
          (te = y(yt)),
          (be = n(yt, "DIV", { class: !0 }));
        var he = i(be);
        z = n(he, "A", { href: !0 });
        var ve = i(z);
        Ye(oe.$$.fragment, ve),
          ve.forEach(r),
          he.forEach(r),
          yt.forEach(r),
          pl.forEach(r),
          (De = y(Ie)),
          (Ne = n(Ie, "DIV", { class: !0 }));
        var Xe = i(Ne);
        Pe = n(Xe, "DIV", { class: !0 });
        var Ra = i(Pe);
        Ve = n(Ra, "P", { class: !0 });
        var gl = i(Ve);
        He = n(gl, "A", { class: !0, href: !0 });
        var Ya = i(He);
        (ge = h(Ya, Te)),
          Ya.forEach(r),
          gl.forEach(r),
          Ra.forEach(r),
          (Et = y(Xe)),
          (Le = n(Xe, "DIV", { class: !0 })),
          i(Le).forEach(r),
          (kt = y(Xe)),
          (rt = n(Xe, "DIV", { class: !0 }));
        var Qa = i(rt);
        wt = n(Qa, "P", { class: !0 });
        var El = i(wt);
        Me = n(El, "A", { class: !0, href: !0 });
        var Xa = i(Me);
        (St = h(Xa, ot)),
          Xa.forEach(r),
          El.forEach(r),
          Qa.forEach(r),
          Xe.forEach(r),
          Ie.forEach(r),
          (Ce = y(pt)),
          (nt = n(pt, "DIV", { class: !0, style: !0 })),
          i(nt).forEach(r),
          (Ma = y(pt)),
          (it = n(pt, "DIV", { class: !0 }));
        var Dt = i(it);
        It = n(Dt, "P", { class: !0 });
        var Fa = i(It);
        (da = h(Fa, "Kick Off:")),
          Fa.forEach(r),
          (Sa = y(Dt)),
          (Xt = n(Dt, "DIV", { class: !0 }));
        var wl = i(Xt);
        Oe = n(wl, "P", { class: !0 });
        var Nt = i(Oe);
        (Zt = h(Nt, a[4])), (At = n(Nt, "SPAN", { class: !0 }));
        var Il = i(At);
        (Wa = h(Il, "d")),
          Il.forEach(r),
          (ct = h(
            Nt,
            `
              : `
          )),
          (Lt = h(Nt, a[5])),
          (ea = n(Nt, "SPAN", { class: !0 }));
        var ya = i(ea);
        (qa = h(ya, "h")),
          ya.forEach(r),
          (ta = h(
            Nt,
            `
              : `
          )),
          (aa = h(Nt, a[6])),
          (jt = n(Nt, "SPAN", { class: !0 }));
        var yl = i(jt);
        (Ba = h(yl, "m")),
          yl.forEach(r),
          Nt.forEach(r),
          wl.forEach(r),
          (la = y(Dt)),
          (dt = n(Dt, "P", { class: !0 }));
        var Za = i(dt);
        (fa = h(Za, a[7])),
          (Ua = h(Za, " | ")),
          (et = h(Za, a[8])),
          Za.forEach(r),
          Dt.forEach(r),
          (sa = y(pt)),
          (Rt = n(pt, "DIV", { class: !0, style: !0 })),
          i(Rt).forEach(r),
          (za = y(pt)),
          (Ke = n(pt, "DIV", { class: !0 }));
        var Da = i(Ke);
        ft = n(Da, "P", { class: !0 });
        var Bt = i(ft);
        (Ta = h(Bt, "GW ")),
          (xa = h(Bt, a[9])),
          (ra = h(Bt, " High Score")),
          Bt.forEach(r),
          (ua = y(Da)),
          (Tt = n(Da, "P", { class: !0 }));
        var Dl = i(Tt);
        qe.l(Dl), Dl.forEach(r), (Ka = y(Da)), (xt = n(Da, "P", { class: !0 }));
        var Nl = i(xt);
        at.l(Nl),
          Nl.forEach(r),
          Da.forEach(r),
          pt.forEach(r),
          lt.forEach(r),
          de.forEach(r),
          (ma = y(W)),
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
          (oa = y(zt)),
          xe && xe.l(zt),
          (na = y(zt)),
          (Ct = n(zt, "LI", { class: !0 }));
        var Na = i(Ct);
        Pt = n(Na, "BUTTON", { class: !0 });
        var xl = i(Pt);
        (ut = h(xl, "Leaderboards")),
          xl.forEach(r),
          Na.forEach(r),
          (Ja = y(zt)),
          (mt = n(zt, "LI", { class: !0 }));
        var Cl = i(mt);
        _t = n(Cl, "BUTTON", { class: !0 });
        var Pl = i(_t);
        (Va = h(Pl, "Table")),
          Pl.forEach(r),
          Cl.forEach(r),
          zt.forEach(r),
          (ha = y(Ut)),
          Re && Re.l(Ut),
          Ut.forEach(r),
          kl.forEach(r),
          this.h();
      },
      h() {
        c(u, "class", "text-gray-300 text-xs"),
          c(_, "class", "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold"),
          c(D, "class", "text-gray-300 text-xs"),
          c(d, "class", "flex-grow"),
          c(m, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
          $a(m, "min-width", "2px"),
          $a(m, "min-height", "50px"),
          c(b, "class", "text-gray-300 text-xs"),
          c(C, "class", "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold"),
          c(j, "class", "text-gray-300 text-xs"),
          c(N, "class", "flex-grow"),
          c(O, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
          $a(O, "min-width", "2px"),
          $a(O, "min-height", "50px"),
          c(H, "class", "text-gray-300 text-xs"),
          c(Z, "class", "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold"),
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
          c(ye, "class", "w-v ml-1 mr-1 flex justify-center svelte-18fkfyi"),
          c(z, "href", (Q = `/club?id=${a[12] ? a[12].id : -1}`)),
          c(be, "class", "w-10 ml-4"),
          c(G, "class", "flex justify-center items-center"),
          c(M, "class", "flex justify-center mb-2 mt-2"),
          c(He, "class", "text-gray-300 text-xs text-center"),
          c(He, "href", (st = `/club?id=${a[11] ? a[11].id : -1}`)),
          c(Ve, "class", "text-gray-300 text-xs text-center"),
          c(Pe, "class", "w-10 ml-4 mr-4"),
          c(Le, "class", "w-v ml-1 mr-1 svelte-18fkfyi"),
          c(Me, "class", "text-gray-300 text-xs text-center"),
          c(Me, "href", (Ot = `/club?id=${a[12] ? a[12].id : -1}`)),
          c(wt, "class", "text-gray-300 text-xs text-center"),
          c(rt, "class", "w-10 ml-4"),
          c(Ne, "class", "flex justify-center"),
          c(U, "class", "flex-grow mb-4 lg:mb-0"),
          c(
            nt,
            "class",
            "h-px bg-gray-400 w-full lg:w-px lg:h-full lg:self-stretch"
          ),
          $a(nt, "min-height", "2px"),
          $a(nt, "min-width", "2px"),
          c(It, "class", "text-gray-300 text-xs mt-4 lg:mt-0"),
          c(At, "class", "text-gray-300 text-xs ml-1"),
          c(ea, "class", "text-gray-300 text-xs ml-1"),
          c(jt, "class", "text-gray-300 text-xs ml-1"),
          c(
            Oe,
            "class",
            "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold"
          ),
          c(Xt, "class", "flex"),
          c(dt, "class", "text-gray-300 text-xs"),
          c(it, "class", "flex-grow mb-4 lg:mb-0"),
          c(
            Rt,
            "class",
            "h-px bg-gray-400 w-full lg:w-px lg:h-full lg:self-stretch"
          ),
          $a(Rt, "min-height", "2px"),
          $a(Rt, "min-width", "2px"),
          c(ft, "class", "text-gray-300 text-xs mt-4 lg:mt-0"),
          c(
            Tt,
            "class",
            "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold max-w-[200px] truncate"
          ),
          c(xt, "class", "text-gray-300 text-xs"),
          c(Ke, "class", "flex-grow"),
          c(
            ie,
            "class",
            "flex flex-col lg:flex-row justify-start lg:items-center text-white space-x-0 lg:space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
          ),
          c(l, "class", "flex flex-col lg:flex-row"),
          c(t, "class", "m-4"),
          c(
            tt,
            "class",
            (va =
              Ze(
                `p-2 ${a[0] === "fixtures" ? "text-white" : "text-gray-400"}`
              ) + " svelte-18fkfyi")
          ),
          c(
            Ft,
            "class",
            (Ca =
              Ze(`mr-4 ${a[0] === "fixtures" ? "active-tab" : ""}`) +
              " svelte-18fkfyi")
          ),
          c(
            Pt,
            "class",
            ($t =
              Ze(
                `p-2 ${
                  a[0] === "leaderboards" ? "text-white" : "text-gray-400"
                }`
              ) + " svelte-18fkfyi")
          ),
          c(
            Ct,
            "class",
            (Pa =
              Ze(`mr-4 ${a[0] === "leaderboards" ? "active-tab" : ""}`) +
              " svelte-18fkfyi")
          ),
          c(
            _t,
            "class",
            (Oa =
              Ze(
                `p-2 ${
                  a[0] === "league-table" ? "text-white" : "text-gray-400"
                }`
              ) + " svelte-18fkfyi")
          ),
          c(
            mt,
            "class",
            (Gt =
              Ze(`mr-4 ${a[0] === "league-table" ? "active-tab" : ""}`) +
              " svelte-18fkfyi")
          ),
          c(
            Je,
            "class",
            "flex bg-light-gray px-4 pt-2 text-sm sm:text-base md:text-lg"
          ),
          c(Qe, "class", "bg-panel rounded-md mx-4"),
          c(We, "class", "mx-4");
      },
      m(W, de) {
        _e(W, t, de),
          e(t, l),
          e(l, s),
          e(s, d),
          e(d, u),
          e(u, f),
          e(d, E),
          e(d, _),
          e(_, g),
          e(d, w),
          e(d, D),
          e(D, P),
          e(s, p),
          e(s, m),
          e(s, S),
          e(s, N),
          e(N, b),
          e(b, x),
          e(N, k),
          e(N, C),
          e(C, $),
          e(N, A),
          e(N, j),
          e(j, T),
          e(s, V),
          e(s, O),
          e(s, B),
          e(s, X),
          e(X, H),
          e(H, K),
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
          e(U, M),
          e(M, G),
          e(G, R),
          e(R, L),
          Ue(F, L, null),
          e(G, Se),
          e(G, ye),
          e(ye, re),
          e(re, we),
          e(G, te),
          e(G, be),
          e(be, z),
          Ue(oe, z, null),
          e(U, De),
          e(U, Ne),
          e(Ne, Pe),
          e(Pe, Ve),
          e(Ve, He),
          e(He, ge),
          e(Ne, Et),
          e(Ne, Le),
          e(Ne, kt),
          e(Ne, rt),
          e(rt, wt),
          e(wt, Me),
          e(Me, St),
          e(ie, Ce),
          e(ie, nt),
          e(ie, Ma),
          e(ie, it),
          e(it, It),
          e(It, da),
          e(it, Sa),
          e(it, Xt),
          e(Xt, Oe),
          e(Oe, Zt),
          e(Oe, At),
          e(At, Wa),
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
          e(ft, xa),
          e(ft, ra),
          e(Ke, ua),
          e(Ke, Tt),
          qe.m(Tt, null),
          e(Ke, Ka),
          e(Ke, xt),
          at.m(xt, null),
          _e(W, ma, de),
          _e(W, We, de),
          e(We, Qe),
          e(Qe, Je),
          e(Je, Ft),
          e(Ft, tt),
          e(tt, _a),
          e(Je, oa),
          xe && xe.m(Je, null),
          e(Je, na),
          e(Je, Ct),
          e(Ct, Pt),
          e(Pt, ut),
          e(Je, Ja),
          e(Je, mt),
          e(mt, _t),
          e(_t, Va),
          e(Qe, ha),
          ~je && vt[je].m(Qe, null),
          (ke = !0),
          Vt ||
            ((pa = [
              Ee(tt, "click", a[15]),
              Ee(Pt, "click", a[17]),
              Ee(_t, "click", a[18]),
            ]),
            (Vt = !0));
      },
      p(W, de) {
        (!ke || de & 2) && Y(g, W[1]),
          (!ke || de & 4) && Y(P, W[2]),
          (!ke || de & 8) && Y($, W[3]);
        const lt = {};
        de & 2048 && (lt.primaryColour = W[11] ? W[11].primaryColourHex : ""),
          de & 2048 &&
            (lt.secondaryColour = W[11] ? W[11].secondaryColourHex : ""),
          de & 2048 && (lt.thirdColour = W[11] ? W[11].thirdColourHex : ""),
          F.$set(lt),
          (!ke ||
            (de & 2048 && ae !== (ae = `/club?id=${W[11] ? W[11].id : -1}`))) &&
            c(L, "href", ae);
        const Ae = {};
        de & 4096 && (Ae.primaryColour = W[12] ? W[12].primaryColourHex : ""),
          de & 4096 &&
            (Ae.secondaryColour = W[12] ? W[12].secondaryColourHex : ""),
          de & 4096 && (Ae.thirdColour = W[12] ? W[12].thirdColourHex : ""),
          oe.$set(Ae),
          (!ke ||
            (de & 4096 && Q !== (Q = `/club?id=${W[12] ? W[12].id : -1}`))) &&
            c(z, "href", Q),
          (!ke || de & 2048) &&
            Te !== (Te = (W[11] ? W[11].abbreviatedName : "") + "") &&
            Y(ge, Te),
          (!ke ||
            (de & 2048 && st !== (st = `/club?id=${W[11] ? W[11].id : -1}`))) &&
            c(He, "href", st),
          (!ke || de & 4096) &&
            ot !== (ot = (W[12] ? W[12].abbreviatedName : "") + "") &&
            Y(St, ot),
          (!ke ||
            (de & 4096 && Ot !== (Ot = `/club?id=${W[12] ? W[12].id : -1}`))) &&
            c(Me, "href", Ot),
          (!ke || de & 16) && Y(Zt, W[4]),
          (!ke || de & 32) && Y(Lt, W[5]),
          (!ke || de & 64) && Y(aa, W[6]),
          (!ke || de & 128) && Y(fa, W[7]),
          (!ke || de & 256) && Y(et, W[8]),
          (!ke || de & 512) && Y(xa, W[9]),
          Aa === (Aa = sl(W)) && qe
            ? qe.p(W, de)
            : (qe.d(1), (qe = Aa(W)), qe && (qe.c(), qe.m(Tt, null))),
          ba === (ba = La(W)) && at
            ? at.p(W, de)
            : (at.d(1), (at = ba(W)), at && (at.c(), at.m(xt, null))),
          (!ke ||
            (de & 1 &&
              va !==
                (va =
                  Ze(
                    `p-2 ${
                      W[0] === "fixtures" ? "text-white" : "text-gray-400"
                    }`
                  ) + " svelte-18fkfyi"))) &&
            c(tt, "class", va),
          (!ke ||
            (de & 1 &&
              Ca !==
                (Ca =
                  Ze(`mr-4 ${W[0] === "fixtures" ? "active-tab" : ""}`) +
                  " svelte-18fkfyi"))) &&
            c(Ft, "class", Ca),
          W[13]
            ? xe
              ? xe.p(W, de)
              : ((xe = Ms(W)), xe.c(), xe.m(Je, na))
            : xe && (xe.d(1), (xe = null)),
          (!ke ||
            (de & 1 &&
              $t !==
                ($t =
                  Ze(
                    `p-2 ${
                      W[0] === "leaderboards" ? "text-white" : "text-gray-400"
                    }`
                  ) + " svelte-18fkfyi"))) &&
            c(Pt, "class", $t),
          (!ke ||
            (de & 1 &&
              Pa !==
                (Pa =
                  Ze(`mr-4 ${W[0] === "leaderboards" ? "active-tab" : ""}`) +
                  " svelte-18fkfyi"))) &&
            c(Ct, "class", Pa),
          (!ke ||
            (de & 1 &&
              Oa !==
                (Oa =
                  Ze(
                    `p-2 ${
                      W[0] === "league-table" ? "text-white" : "text-gray-400"
                    }`
                  ) + " svelte-18fkfyi"))) &&
            c(_t, "class", Oa),
          (!ke ||
            (de & 1 &&
              Gt !==
                (Gt =
                  Ze(`mr-4 ${W[0] === "league-table" ? "active-tab" : ""}`) +
                  " svelte-18fkfyi"))) &&
            c(mt, "class", Gt);
        let ht = je;
        (je = rl(W)),
          je !== ht &&
            (Re &&
              (Jt(),
              pe(vt[ht], 1, 1, () => {
                vt[ht] = null;
              }),
              Yt()),
            ~je
              ? ((Re = vt[je]),
                Re || ((Re = vt[je] = Ht[je](W)), Re.c()),
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
          xe && xe.d(),
          ~je && vt[je].d(),
          (Vt = !1),
          ka(pa);
      },
    }
  );
}
function Ar(a) {
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
    E = "00",
    _ = "00",
    g = "00",
    w = "-",
    D = "-",
    P = -1,
    p,
    m,
    S,
    N = !1;
  Ol(async () => {
    vs.set(!0);
    try {
      await Qt.sync(),
        await Kt.sync(),
        await Ha.sync(),
        await ml.syncWeeklyLeaderboard(),
        await us.sync(),
        us.subscribe((V) => {
          l(13, (N = V.identity !== null && V.identity !== void 0));
        }),
        l(3, (f = await Ws.getTotalManagers()));
      let A = await Qt.getSystemState();
      console.log(A),
        l(1, (d = A?.activeGameweek ?? d)),
        l(2, (u = A?.activeSeason.name ?? u)),
        l(9, (P = A?.focusGameweek ?? d));
      let j = await Ha.getNextFixture();
      l(11, (m = await Kt.getTeamById(j ? j.homeTeamId : 0))),
        l(12, (S = await Kt.getTeamById(j ? j.awayTeamId : 0))),
        l(7, (w = Js(j ? Number(j.kickOff) : 0))),
        l(8, (D = $l(j ? Number(j.kickOff) : 0)));
      let T = Ys(j ? Number(j.kickOff) : 0);
      l(4, (E = T.days.toString())),
        l(5, (_ = T.hours.toString())),
        l(6, (g = T.minutes.toString())),
        l(10, (p = await ml.getLeadingWeeklyTeam()));
    } catch (A) {
      al.show("Error fetching homepage data.", "error"),
        console.error("Error fetching homepage data:", A);
    } finally {
      vs.set(!1);
    }
  });
  function b(A) {
    l(0, (s = A));
  }
  return [
    s,
    d,
    u,
    f,
    E,
    _,
    g,
    w,
    D,
    P,
    p,
    m,
    S,
    N,
    b,
    () => b("fixtures"),
    () => b("points"),
    () => b("leaderboards"),
    () => b("league-table"),
  ];
}
class zr extends _l {
  constructor(t) {
    super(), vl(this, t, Lr, Ar, hl, {});
  }
}
export { zr as component };
