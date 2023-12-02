import { B as Ge } from "../chunks/BadgeIcon.ac2d82f5.js";
import { f as Re } from "../chunks/fixture-store.880a736f.js";
import {
  $ as ot,
  A as ce,
  a as P,
  b as te,
  B as ue,
  c as H,
  d as Q,
  e as He,
  f as Ie,
  G as l,
  g as R,
  H as be,
  h as i,
  I as rt,
  i as we,
  J as st,
  k as p,
  K as Pe,
  L as J,
  l as v,
  m as b,
  M as ve,
  n as m,
  N as Se,
  o as ke,
  O as tt,
  P as lt,
  q as B,
  Q as Be,
  R as nt,
  r as U,
  s as Ee,
  S as ye,
  T as it,
  u as se,
  v as xe,
  y as ne,
  z as ie,
} from "../chunks/index.a8c54947.js";
import {
  A as ct,
  a as ft,
  c as dt,
  d as at,
  f as Ue,
  i as ut,
  l as je,
  t as ge,
} from "../chunks/Layout.3f9368f3.js";
import { w as mt } from "../chunks/singletons.e655d5e5.js";
import { s as le, t as qe } from "../chunks/team-store.583260fe.js";
function Ke(s, e, a) {
  const t = s.slice();
  return (t[17] = e[a][0]), (t[2] = e[a][1]), t;
}
function ze(s, e, a) {
  const t = s.slice();
  return (
    (t[20] = e[a].fixture), (t[21] = e[a].homeTeam), (t[22] = e[a].awayTeam), t
  );
}
function Je(s, e, a) {
  const t = s.slice();
  return (t[25] = e[a]), t;
}
function Qe(s) {
  let e,
    a,
    t = s[25] + "",
    n;
  return {
    c() {
      (e = p("option")), (a = B("Gameweek ")), (n = B(t)), this.h();
    },
    l(f) {
      e = v(f, "OPTION", {});
      var y = b(e);
      (a = U(y, "Gameweek ")), (n = U(y, t)), y.forEach(i), this.h();
    },
    h() {
      (e.__value = s[25]), (e.value = e.__value);
    },
    m(f, y) {
      te(f, e, y), l(e, a), l(e, n);
    },
    p: be,
    d(f) {
      f && i(e);
    },
  };
}
function We(s) {
  let e,
    a,
    t,
    n,
    f,
    y,
    I,
    k,
    _,
    d,
    T,
    c,
    h,
    r,
    C,
    N,
    A,
    V,
    w = Ue(Number(s[20].kickOff)) + "",
    g,
    L,
    E,
    $,
    u,
    D = (s[21] ? s[21].friendlyName : "") + "",
    o,
    S,
    M,
    F,
    G = (s[22] ? s[22].friendlyName : "") + "",
    W,
    X,
    j,
    K,
    Z,
    ee = (s[20].status === 0 ? "-" : s[20].homeGoals) + "",
    ae,
    pe,
    re,
    oe = (s[20].status === 0 ? "-" : s[20].awayGoals) + "",
    fe,
    de,
    q;
  return (
    (y = new Ge({
      props: {
        primaryColour: s[21] ? s[21].primaryColourHex : "",
        secondaryColour: s[21] ? s[21].secondaryColourHex : "",
        thirdColour: s[21] ? s[21].thirdColourHex : "",
      },
    })),
    (r = new Ge({
      props: {
        primaryColour: s[22] ? s[22].primaryColourHex : "",
        secondaryColour: s[22] ? s[22].secondaryColourHex : "",
        thirdColour: s[22] ? s[22].thirdColourHex : "",
      },
    })),
    {
      c() {
        (e = p("div")),
          (a = p("div")),
          (t = p("div")),
          (n = p("div")),
          (f = p("a")),
          ne(y.$$.fragment),
          (k = P()),
          (_ = p("span")),
          (d = B("v")),
          (T = P()),
          (c = p("div")),
          (h = p("a")),
          ne(r.$$.fragment),
          (N = P()),
          (A = p("div")),
          (V = p("span")),
          (g = B(w)),
          (L = P()),
          (E = p("div")),
          ($ = p("div")),
          (u = p("a")),
          (o = B(D)),
          (M = P()),
          (F = p("a")),
          (W = B(G)),
          (j = P()),
          (K = p("div")),
          (Z = p("span")),
          (ae = B(ee)),
          (pe = P()),
          (re = p("span")),
          (fe = B(oe)),
          this.h();
      },
      l(x) {
        e = v(x, "DIV", { class: !0 });
        var O = b(e);
        a = v(O, "DIV", { class: !0 });
        var Y = b(a);
        t = v(Y, "DIV", { class: !0 });
        var z = b(t);
        n = v(z, "DIV", { class: !0 });
        var Te = b(n);
        f = v(Te, "A", { href: !0 });
        var De = b(f);
        ie(y.$$.fragment, De),
          De.forEach(i),
          Te.forEach(i),
          (k = H(z)),
          (_ = v(z, "SPAN", { class: !0 }));
        var Ce = b(_);
        (d = U(Ce, "v")),
          Ce.forEach(i),
          (T = H(z)),
          (c = v(z, "DIV", { class: !0 }));
        var Ne = b(c);
        h = v(Ne, "A", { href: !0 });
        var Me = b(h);
        ie(r.$$.fragment, Me),
          Me.forEach(i),
          Ne.forEach(i),
          z.forEach(i),
          (N = H(Y)),
          (A = v(Y, "DIV", { class: !0 }));
        var Ae = b(A);
        V = v(Ae, "SPAN", { class: !0 });
        var $e = b(V);
        (g = U($e, w)),
          $e.forEach(i),
          Ae.forEach(i),
          Y.forEach(i),
          (L = H(O)),
          (E = v(O, "DIV", { class: !0 }));
        var me = b(E);
        $ = v(me, "DIV", { class: !0 });
        var he = b($);
        u = v(he, "A", { href: !0 });
        var Ve = b(u);
        (o = U(Ve, D)),
          Ve.forEach(i),
          (M = H(he)),
          (F = v(he, "A", { href: !0 }));
        var Oe = b(F);
        (W = U(Oe, G)),
          Oe.forEach(i),
          he.forEach(i),
          (j = H(me)),
          (K = v(me, "DIV", { class: !0 }));
        var _e = b(K);
        Z = v(_e, "SPAN", {});
        var Fe = b(Z);
        (ae = U(Fe, ee)), Fe.forEach(i), (pe = H(_e)), (re = v(_e, "SPAN", {}));
        var Le = b(re);
        (fe = U(Le, oe)),
          Le.forEach(i),
          _e.forEach(i),
          me.forEach(i),
          O.forEach(i),
          this.h();
      },
      h() {
        m(f, "href", (I = `/club?id=${s[20].homeTeamId}`)),
          m(n, "class", "w-10 items-center justify-center"),
          m(_, "class", "font-bold text-lg"),
          m(h, "href", (C = `/club?id=${s[20].awayTeamId}`)),
          m(c, "class", "w-10 items-center justify-center"),
          m(t, "class", "flex w-1/2 space-x-4 justify-center"),
          m(V, "class", "text-sm md:text-lg ml-4 md:ml-0 text-left"),
          m(A, "class", "flex w-1/2 lg:justify-center"),
          m(a, "class", "flex items-center w-1/2 ml-4"),
          m(u, "href", (S = `/club?id=${s[20].homeTeamId}`)),
          m(F, "href", (X = `/club?id=${s[20].awayTeamId}`)),
          m(
            $,
            "class",
            "flex flex-col min-w-[200px] lg:min-w-[120px] lg:min-w-[200px] text-xs md:text-base"
          ),
          m(
            K,
            "class",
            "flex flex-col min-w-[200px] lg:min-w-[120px] lg:min-w-[200px] text-xs md:text-base"
          ),
          m(E, "class", "flex items-center space-x-10 w-1/2 lg:justify-center"),
          m(
            e,
            "class",
            (de = `flex items-center justify-between py-2 border-b border-gray-700  ${
              s[20].status === 0 ? "text-gray-400" : "text-white"
            }`)
          );
      },
      m(x, O) {
        te(x, e, O),
          l(e, a),
          l(a, t),
          l(t, n),
          l(n, f),
          ce(y, f, null),
          l(t, k),
          l(t, _),
          l(_, d),
          l(t, T),
          l(t, c),
          l(c, h),
          ce(r, h, null),
          l(a, N),
          l(a, A),
          l(A, V),
          l(V, g),
          l(e, L),
          l(e, E),
          l(E, $),
          l($, u),
          l(u, o),
          l($, M),
          l($, F),
          l(F, W),
          l(E, j),
          l(E, K),
          l(K, Z),
          l(Z, ae),
          l(K, pe),
          l(K, re),
          l(re, fe),
          (q = !0);
      },
      p(x, O) {
        const Y = {};
        O & 2 && (Y.primaryColour = x[21] ? x[21].primaryColourHex : ""),
          O & 2 && (Y.secondaryColour = x[21] ? x[21].secondaryColourHex : ""),
          O & 2 && (Y.thirdColour = x[21] ? x[21].thirdColourHex : ""),
          y.$set(Y),
          (!q || (O & 2 && I !== (I = `/club?id=${x[20].homeTeamId}`))) &&
            m(f, "href", I);
        const z = {};
        O & 2 && (z.primaryColour = x[22] ? x[22].primaryColourHex : ""),
          O & 2 && (z.secondaryColour = x[22] ? x[22].secondaryColourHex : ""),
          O & 2 && (z.thirdColour = x[22] ? x[22].thirdColourHex : ""),
          r.$set(z),
          (!q || (O & 2 && C !== (C = `/club?id=${x[20].awayTeamId}`))) &&
            m(h, "href", C),
          (!q || O & 2) &&
            w !== (w = Ue(Number(x[20].kickOff)) + "") &&
            se(g, w),
          (!q || O & 2) &&
            D !== (D = (x[21] ? x[21].friendlyName : "") + "") &&
            se(o, D),
          (!q || (O & 2 && S !== (S = `/club?id=${x[20].homeTeamId}`))) &&
            m(u, "href", S),
          (!q || O & 2) &&
            G !== (G = (x[22] ? x[22].friendlyName : "") + "") &&
            se(W, G),
          (!q || (O & 2 && X !== (X = `/club?id=${x[20].awayTeamId}`))) &&
            m(F, "href", X),
          (!q || O & 2) &&
            ee !== (ee = (x[20].status === 0 ? "-" : x[20].homeGoals) + "") &&
            se(ae, ee),
          (!q || O & 2) &&
            oe !== (oe = (x[20].status === 0 ? "-" : x[20].awayGoals) + "") &&
            se(fe, oe),
          (!q ||
            (O & 2 &&
              de !==
                (de = `flex items-center justify-between py-2 border-b border-gray-700  ${
                  x[20].status === 0 ? "text-gray-400" : "text-white"
                }`))) &&
            m(e, "class", de);
      },
      i(x) {
        q || (R(y.$$.fragment, x), R(r.$$.fragment, x), (q = !0));
      },
      o(x) {
        Q(y.$$.fragment, x), Q(r.$$.fragment, x), (q = !1);
      },
      d(x) {
        x && i(e), ue(y), ue(r);
      },
    }
  );
}
function Xe(s) {
  let e,
    a,
    t,
    n = s[17] + "",
    f,
    y,
    I,
    k,
    _ = s[2],
    d = [];
  for (let c = 0; c < _.length; c += 1) d[c] = We(ze(s, _, c));
  const T = (c) =>
    Q(d[c], 1, 1, () => {
      d[c] = null;
    });
  return {
    c() {
      (e = p("div")), (a = p("div")), (t = p("h2")), (f = B(n)), (y = P());
      for (let c = 0; c < d.length; c += 1) d[c].c();
      (I = P()), this.h();
    },
    l(c) {
      e = v(c, "DIV", {});
      var h = b(e);
      a = v(h, "DIV", { class: !0 });
      var r = b(a);
      t = v(r, "H2", { class: !0 });
      var C = b(t);
      (f = U(C, n)), C.forEach(i), r.forEach(i), (y = H(h));
      for (let N = 0; N < d.length; N += 1) d[N].l(h);
      (I = H(h)), h.forEach(i), this.h();
    },
    h() {
      m(t, "class", "date-header ml-4 text-xs md:text-base"),
        m(
          a,
          "class",
          "flex items-center justify-between border border-gray-700 py-4 bg-light-gray"
        );
    },
    m(c, h) {
      te(c, e, h), l(e, a), l(a, t), l(t, f), l(e, y);
      for (let r = 0; r < d.length; r += 1) d[r] && d[r].m(e, null);
      l(e, I), (k = !0);
    },
    p(c, h) {
      if (((!k || h & 2) && n !== (n = c[17] + "") && se(f, n), h & 2)) {
        _ = c[2];
        let r;
        for (r = 0; r < _.length; r += 1) {
          const C = ze(c, _, r);
          d[r]
            ? (d[r].p(C, h), R(d[r], 1))
            : ((d[r] = We(C)), d[r].c(), R(d[r], 1), d[r].m(e, I));
        }
        for (xe(), r = _.length; r < d.length; r += 1) T(r);
        Ie();
      }
    },
    i(c) {
      if (!k) {
        for (let h = 0; h < _.length; h += 1) R(d[h]);
        k = !0;
      }
    },
    o(c) {
      d = d.filter(Boolean);
      for (let h = 0; h < d.length; h += 1) Q(d[h]);
      k = !1;
    },
    d(c) {
      c && i(e), ve(d, c);
    },
  };
}
function ht(s) {
  let e,
    a,
    t,
    n,
    f,
    y,
    I,
    k,
    _,
    d,
    T,
    c,
    h,
    r,
    C,
    N,
    A,
    V,
    w = s[3],
    g = [];
  for (let u = 0; u < w.length; u += 1) g[u] = Qe(Je(s, w, u));
  let L = Object.entries(s[1]),
    E = [];
  for (let u = 0; u < L.length; u += 1) E[u] = Xe(Ke(s, L, u));
  const $ = (u) =>
    Q(E[u], 1, 1, () => {
      E[u] = null;
    });
  return {
    c() {
      (e = p("div")),
        (a = p("div")),
        (t = p("div")),
        (n = p("div")),
        (f = p("button")),
        (y = B("<")),
        (k = P()),
        (_ = p("select"));
      for (let u = 0; u < g.length; u += 1) g[u].c();
      (d = P()), (T = p("button")), (c = B(">")), (r = P()), (C = p("div"));
      for (let u = 0; u < E.length; u += 1) E[u].c();
      this.h();
    },
    l(u) {
      e = v(u, "DIV", { class: !0 });
      var D = b(e);
      a = v(D, "DIV", { class: !0 });
      var o = b(a);
      t = v(o, "DIV", { class: !0 });
      var S = b(t);
      n = v(S, "DIV", { class: !0 });
      var M = b(n);
      f = v(M, "BUTTON", { class: !0 });
      var F = b(f);
      (y = U(F, "<")),
        F.forEach(i),
        (k = H(M)),
        (_ = v(M, "SELECT", { class: !0 }));
      var G = b(_);
      for (let j = 0; j < g.length; j += 1) g[j].l(G);
      G.forEach(i), (d = H(M)), (T = v(M, "BUTTON", { class: !0 }));
      var W = b(T);
      (c = U(W, ">")),
        W.forEach(i),
        M.forEach(i),
        S.forEach(i),
        (r = H(o)),
        (C = v(o, "DIV", {}));
      var X = b(C);
      for (let j = 0; j < E.length; j += 1) E[j].l(X);
      X.forEach(i), o.forEach(i), D.forEach(i), this.h();
    },
    h() {
      m(
        f,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (f.disabled = I = s[0] === 1),
        m(
          _,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        s[0] === void 0 && st(() => s[8].call(_)),
        m(
          T,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (T.disabled = h = s[0] === 38),
        m(n, "class", "flex items-center space-x-2 ml-4"),
        m(t, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        m(a, "class", "flex flex-col space-y-4"),
        m(e, "class", "container-fluid mt-4 mb-4");
    },
    m(u, D) {
      te(u, e, D),
        l(e, a),
        l(a, t),
        l(t, n),
        l(n, f),
        l(f, y),
        l(n, k),
        l(n, _);
      for (let o = 0; o < g.length; o += 1) g[o] && g[o].m(_, null);
      Pe(_, s[0], !0), l(n, d), l(n, T), l(T, c), l(a, r), l(a, C);
      for (let o = 0; o < E.length; o += 1) E[o] && E[o].m(C, null);
      (N = !0),
        A ||
          ((V = [
            J(f, "click", s[7]),
            J(_, "change", s[8]),
            J(T, "click", s[9]),
          ]),
          (A = !0));
    },
    p(u, [D]) {
      if (
        ((!N || (D & 9 && I !== (I = u[0] === 1))) && (f.disabled = I), D & 8)
      ) {
        w = u[3];
        let o;
        for (o = 0; o < w.length; o += 1) {
          const S = Je(u, w, o);
          g[o] ? g[o].p(S, D) : ((g[o] = Qe(S)), g[o].c(), g[o].m(_, null));
        }
        for (; o < g.length; o += 1) g[o].d(1);
        g.length = w.length;
      }
      if (
        (D & 9 && Pe(_, u[0]),
        (!N || (D & 9 && h !== (h = u[0] === 38))) && (T.disabled = h),
        D & 2)
      ) {
        L = Object.entries(u[1]);
        let o;
        for (o = 0; o < L.length; o += 1) {
          const S = Ke(u, L, o);
          E[o]
            ? (E[o].p(S, D), R(E[o], 1))
            : ((E[o] = Xe(S)), E[o].c(), R(E[o], 1), E[o].m(C, null));
        }
        for (xe(), o = L.length; o < E.length; o += 1) $(o);
        Ie();
      }
    },
    i(u) {
      if (!N) {
        for (let D = 0; D < L.length; D += 1) R(E[D]);
        N = !0;
      }
    },
    o(u) {
      E = E.filter(Boolean);
      for (let D = 0; D < E.length; D += 1) Q(E[D]);
      N = !1;
    },
    d(u) {
      u && i(e), ve(g, u), ve(E, u), (A = !1), Se(V);
    },
  };
}
function _t(s, e, a) {
  let t,
    n,
    f = [],
    y = [],
    I = [],
    k,
    _,
    d,
    T,
    c = 1,
    h = Array.from({ length: 38 }, (w, g) => g + 1);
  ke(async () => {
    try {
      await qe.sync(),
        await Re.sync(),
        await le.sync(),
        (_ = qe.subscribe((w) => {
          f = w;
        })),
        (d = Re.subscribe((w) => {
          a(2, (y = w)),
            a(
              5,
              (I = y.map((g) => ({
                fixture: g,
                homeTeam: C(g.homeTeamId),
                awayTeam: C(g.awayTeamId),
              })))
            );
        })),
        (T = le.subscribe((w) => {
          k = w;
        }));
    } catch (w) {
      ge.show("Error fetching fixtures data.", "error"),
        console.error("Error fetching fixtures data:", w);
    } finally {
    }
  }),
    tt(() => {
      _?.(), d?.(), T?.();
    });
  const r = (w) => {
    a(0, (c = Math.max(1, Math.min(38, c + w))));
  };
  function C(w) {
    return f.find((g) => g.id === w);
  }
  const N = () => r(-1);
  function A() {
    (c = lt(this)), a(0, c), a(3, h);
  }
  const V = () => r(1);
  return (
    (s.$$.update = () => {
      s.$$.dirty & 33 &&
        a(6, (t = I.filter(({ fixture: w }) => w.gameweek === c))),
        s.$$.dirty & 64 &&
          a(
            1,
            (n = t.reduce((w, g) => {
              const L = new Date(Number(g.fixture.kickOff) / 1e6),
                $ = new Intl.DateTimeFormat("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(L);
              return w[$] || (w[$] = []), w[$].push(g), w;
            }, {}))
          );
    }),
    [c, n, y, h, r, I, t, N, A, V]
  );
}
class pt extends ye {
  constructor(e) {
    super(), we(this, e, _t, ht, Ee, {});
  }
}
function vt() {
  const { subscribe: s, set: e } = mt([]),
    a = ct.createActor(ut, "bboqb-jiaaa-aaaal-qb6ea-cai");
  async function t() {
    const n = await a.getSeasons();
    e(n);
  }
  return { subscribe: s, sync: t };
}
const Ye = vt();
function Ze(s) {
  let e, a, t, n, f, y, I, k, _, d, T, c, h, r, C, N, A, V;
  return {
    c() {
      (e = p("div")),
        (a = p("div")),
        (t = p("div")),
        (n = p("h3")),
        (f = B("Update System State")),
        (y = P()),
        (I = p("form")),
        (k = p("div")),
        (_ = P()),
        (d = p("div")),
        (T = p("button")),
        (c = B("Cancel")),
        (h = P()),
        (r = p("button")),
        (C = B("Update")),
        this.h();
    },
    l(w) {
      e = v(w, "DIV", { class: !0 });
      var g = b(e);
      a = v(g, "DIV", { class: !0 });
      var L = b(a);
      t = v(L, "DIV", { class: !0 });
      var E = b(t);
      n = v(E, "H3", { class: !0 });
      var $ = b(n);
      (f = U($, "Update System State")),
        $.forEach(i),
        (y = H(E)),
        (I = v(E, "FORM", {}));
      var u = b(I);
      k = v(u, "DIV", { class: !0 });
      var D = b(k);
      D.forEach(i), (_ = H(u)), (d = v(u, "DIV", { class: !0 }));
      var o = b(d);
      T = v(o, "BUTTON", { class: !0 });
      var S = b(T);
      (c = U(S, "Cancel")),
        S.forEach(i),
        (h = H(o)),
        (r = v(o, "BUTTON", { class: !0, type: !0 }));
      var M = b(r);
      (C = U(M, "Update")),
        M.forEach(i),
        o.forEach(i),
        u.forEach(i),
        E.forEach(i),
        L.forEach(i),
        g.forEach(i),
        this.h();
    },
    h() {
      m(n, "class", "text-lg leading-6 font-medium mb-2"),
        m(k, "class", "mt-4"),
        m(
          T,
          "class",
          "px-4 py-2 fpl-cancel-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        m(
          r,
          "class",
          (N = `px-4 py-2 ${
            s[2] ? "bg-gray-500" : "fpl-purple-btn"
          } text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`)
        ),
        m(r, "type", "submit"),
        (r.disabled = s[2]),
        m(d, "class", "items-center py-3 flex space-x-4"),
        m(t, "class", "mt-3 text-center"),
        m(
          a,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"
        ),
        m(
          e,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop"
        );
    },
    m(w, g) {
      te(w, e, g),
        l(e, a),
        l(a, t),
        l(t, n),
        l(n, f),
        l(t, y),
        l(t, I),
        l(I, k),
        l(I, _),
        l(I, d),
        l(d, T),
        l(T, c),
        l(d, h),
        l(d, r),
        l(r, C),
        A ||
          ((V = [
            J(T, "click", function () {
              Be(s[1]) && s[1].apply(this, arguments);
            }),
            J(I, "submit", ot(s[3])),
            J(a, "click", nt(s[8])),
            J(a, "keydown", s[4]),
            J(e, "click", function () {
              Be(s[1]) && s[1].apply(this, arguments);
            }),
            J(e, "keydown", s[4]),
          ]),
          (A = !0));
    },
    p(w, g) {
      (s = w),
        g & 4 &&
          N !==
            (N = `px-4 py-2 ${
              s[2] ? "bg-gray-500" : "fpl-purple-btn"
            } text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`) &&
          m(r, "class", N),
        g & 4 && (r.disabled = s[2]);
    },
    d(w) {
      w && i(e), (A = !1), Se(V);
    },
  };
}
function bt(s) {
  let e,
    a = s[0] && Ze(s);
  return {
    c() {
      a && a.c(), (e = He());
    },
    l(t) {
      a && a.l(t), (e = He());
    },
    m(t, n) {
      a && a.m(t, n), te(t, e, n);
    },
    p(t, [n]) {
      t[0]
        ? a
          ? a.p(t, n)
          : ((a = Ze(t)), a.c(), a.m(e.parentNode, e))
        : a && (a.d(1), (a = null));
    },
    i: be,
    o: be,
    d(t) {
      a && a.d(t), t && i(e);
    },
  };
}
let gt = 1,
  yt = 1;
function wt(s, e, a) {
  let t, n;
  rt(s, ft, (r) => a(7, (n = r)));
  let { showModal: f } = e,
    { closeModal: y } = e,
    { cancelModal: I } = e,
    { isLoading: k } = e,
    _,
    d;
  ke(async () => {
    await Ye.sync(),
      await le.sync(),
      (_ = Ye.subscribe((r) => {})),
      (d = le.subscribe((r) => {}));
  }),
    tt(() => {
      _?.(), d?.();
    });
  async function T() {
    k.set(!0), je.set("Updating System State");
    try {
      let r = { activeGameweek: gt, activeSeasonId: yt };
      await le.updateSystemState(r),
        le.sync(),
        await y(),
        ge.show("System State Updated.", "success");
    } catch (r) {
      ge.show("Error updating system state.", "error"),
        console.error("Error updating system state:", r),
        I();
    } finally {
      k.set(!1), je.set("Loading");
    }
  }
  function c(r) {
    !(r.target instanceof HTMLInputElement) && r.key === "Escape" && y();
  }
  function h(r) {
    it.call(this, s, r);
  }
  return (
    (s.$$set = (r) => {
      "showModal" in r && a(0, (f = r.showModal)),
        "closeModal" in r && a(5, (y = r.closeModal)),
        "cancelModal" in r && a(1, (I = r.cancelModal)),
        "isLoading" in r && a(6, (k = r.isLoading));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 128 &&
        a(
          2,
          (t =
            (n.identity?.getPrincipal().toString() ?? "") !==
            "kydhj-2crf5-wwkao-msv4s-vbyvu-kkroq-apnyv-zykjk-r6oyk-ksodu-vqe")
        );
    }),
    [f, I, t, T, c, y, k, n, h]
  );
}
class Et extends ye {
  constructor(e) {
    super(),
      we(this, e, wt, bt, Ee, {
        showModal: 0,
        closeModal: 5,
        cancelModal: 1,
        isLoading: 6,
      });
  }
}
function et(s) {
  let e, a;
  return (
    (e = new pt({})),
    {
      c() {
        ne(e.$$.fragment);
      },
      l(t) {
        ie(e.$$.fragment, t);
      },
      m(t, n) {
        ce(e, t, n), (a = !0);
      },
      i(t) {
        a || (R(e.$$.fragment, t), (a = !0));
      },
      o(t) {
        Q(e.$$.fragment, t), (a = !1);
      },
      d(t) {
        ue(e, t);
      },
    }
  );
}
function xt(s) {
  let e, a, t, n, f, y, I, k, _, d, T, c, h, r, C, N, A, V, w, g, L, E, $, u, D;
  e = new Et({
    props: {
      showModal: s[0],
      closeModal: s[4],
      cancelModal: s[4],
      isLoading: at,
    },
  });
  let o = s[1] === "fixtures" && et();
  return {
    c() {
      ne(e.$$.fragment),
        (a = P()),
        (t = p("div")),
        (n = p("div")),
        (f = p("div")),
        (y = p("h1")),
        (I = B("OpenFPL Admin")),
        (k = P()),
        (_ = p("p")),
        (d = B("This view is for testing purposes only.")),
        (T = P()),
        (c = p("div")),
        (h = p("button")),
        (r = B("System Status")),
        (C = P()),
        (N = p("ul")),
        (A = p("li")),
        (V = p("button")),
        (w = B("Fixtures")),
        (E = P()),
        o && o.c(),
        this.h();
    },
    l(S) {
      ie(e.$$.fragment, S), (a = H(S)), (t = v(S, "DIV", { class: !0 }));
      var M = b(t);
      n = v(M, "DIV", { class: !0 });
      var F = b(n);
      f = v(F, "DIV", { class: !0 });
      var G = b(f);
      y = v(G, "H1", { class: !0 });
      var W = b(y);
      (I = U(W, "OpenFPL Admin")),
        W.forEach(i),
        (k = H(G)),
        (_ = v(G, "P", { class: !0 }));
      var X = b(_);
      (d = U(X, "This view is for testing purposes only.")),
        X.forEach(i),
        G.forEach(i),
        (T = H(F)),
        (c = v(F, "DIV", { class: !0 }));
      var j = b(c);
      h = v(j, "BUTTON", { class: !0 });
      var K = b(h);
      (r = U(K, "System Status")),
        K.forEach(i),
        j.forEach(i),
        (C = H(F)),
        (N = v(F, "UL", { class: !0 }));
      var Z = b(N);
      A = v(Z, "LI", { class: !0 });
      var ee = b(A);
      V = v(ee, "BUTTON", { class: !0 });
      var ae = b(V);
      (w = U(ae, "Fixtures")),
        ae.forEach(i),
        ee.forEach(i),
        Z.forEach(i),
        (E = H(F)),
        o && o.l(F),
        F.forEach(i),
        M.forEach(i),
        this.h();
    },
    h() {
      m(y, "class", "text-xl"),
        m(_, "class", "mt-2"),
        m(f, "class", "flex flex-col p-4"),
        m(
          h,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
        ),
        m(c, "class", "flex flex-row p-4 space-x-4"),
        m(
          V,
          "class",
          (g = `p-2 ${s[1] === "fixtures" ? "text-white" : "text-gray-400"}`)
        ),
        m(
          A,
          "class",
          (L = `mr-4 text-xs md:text-base ${
            s[1] === "fixtures" ? "active-tab" : ""
          }`)
        ),
        m(N, "class", "flex rounded-t-lg bg-light-gray px-4 pt-2"),
        m(n, "class", "bg-panel rounded-lg m-4"),
        m(t, "class", "m-4");
    },
    m(S, M) {
      ce(e, S, M),
        te(S, a, M),
        te(S, t, M),
        l(t, n),
        l(n, f),
        l(f, y),
        l(y, I),
        l(f, k),
        l(f, _),
        l(_, d),
        l(n, T),
        l(n, c),
        l(c, h),
        l(h, r),
        l(n, C),
        l(n, N),
        l(N, A),
        l(A, V),
        l(V, w),
        l(n, E),
        o && o.m(n, null),
        ($ = !0),
        u || ((D = [J(h, "click", s[2]), J(V, "click", s[5])]), (u = !0));
    },
    p(S, M) {
      const F = {};
      M & 1 && (F.showModal = S[0]),
        e.$set(F),
        (!$ ||
          (M & 2 &&
            g !==
              (g = `p-2 ${
                S[1] === "fixtures" ? "text-white" : "text-gray-400"
              }`))) &&
          m(V, "class", g),
        (!$ ||
          (M & 2 &&
            L !==
              (L = `mr-4 text-xs md:text-base ${
                S[1] === "fixtures" ? "active-tab" : ""
              }`))) &&
          m(A, "class", L),
        S[1] === "fixtures"
          ? o
            ? M & 2 && R(o, 1)
            : ((o = et()), o.c(), R(o, 1), o.m(n, null))
          : o &&
            (xe(),
            Q(o, 1, 1, () => {
              o = null;
            }),
            Ie());
    },
    i(S) {
      $ || (R(e.$$.fragment, S), R(o), ($ = !0));
    },
    o(S) {
      Q(e.$$.fragment, S), Q(o), ($ = !1);
    },
    d(S) {
      ue(e, S), S && i(a), S && i(t), o && o.d(), (u = !1), Se(D);
    },
  };
}
function It(s) {
  let e, a;
  return (
    (e = new dt({
      props: { $$slots: { default: [xt] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        ne(e.$$.fragment);
      },
      l(t) {
        ie(e.$$.fragment, t);
      },
      m(t, n) {
        ce(e, t, n), (a = !0);
      },
      p(t, [n]) {
        const f = {};
        n & 67 && (f.$$scope = { dirty: n, ctx: t }), e.$set(f);
      },
      i(t) {
        a || (R(e.$$.fragment, t), (a = !0));
      },
      o(t) {
        Q(e.$$.fragment, t), (a = !1);
      },
      d(t) {
        ue(e, t);
      },
    }
  );
}
function St(s, e, a) {
  let { showModal: t = !1 } = e,
    n = "fixtures";
  ke(async () => {
    at.set(!1);
  });
  function f() {
    a(0, (t = !0));
  }
  function y(_) {
    a(1, (n = _));
  }
  function I() {
    a(0, (t = !1));
  }
  const k = () => y("fixtures");
  return (
    (s.$$set = (_) => {
      "showModal" in _ && a(0, (t = _.showModal));
    }),
    [t, n, f, y, I, k]
  );
}
class At extends ye {
  constructor(e) {
    super(), we(this, e, St, It, Ee, { showModal: 0 });
  }
}
export { At as component };
