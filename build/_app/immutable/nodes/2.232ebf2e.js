import { B as as } from "../chunks/BadgeIcon.ac2d82f5.js";
import {
  f as Fl,
  c as Hs,
  u as Ja,
  e as Ka,
  L as Ls,
  h as Ra,
  l as Vl,
  t as Yt,
  d as _a,
  s as fl,
  b as js,
  p as ma,
  a as ss,
  g as va,
  i as za,
} from "../chunks/Layout.0e76e124.js";
import { V as qa } from "../chunks/ViewDetailsIcon.d864d339.js";
import {
  Q as $s,
  y as Be,
  p as Bl,
  A as Fe,
  O as Ms,
  o as Os,
  v as Ot,
  u as Q,
  f as St,
  N as Tl,
  B as Ue,
  I as Wa,
  U as Ze,
  r as _,
  i as _s,
  H as at,
  n as c,
  e as cl,
  R as da,
  g as de,
  G as e,
  x as fa,
  K as gt,
  d as he,
  s as hs,
  m as i,
  M as il,
  J as ls,
  q as m,
  b as me,
  S as ms,
  l as n,
  k as o,
  h as r,
  P as ts,
  T as ua,
  a as w,
  L as we,
  c as y,
  z as ze,
} from "../chunks/index.a8c54947.js";
import { m as Ua } from "../chunks/manager-store.ef17e835.js";
function ha(l, t, s) {
  const a = l.slice();
  return (a[17] = t[s][0]), (a[2] = t[s][1]), a;
}
function pa(l, t, s) {
  const a = l.slice();
  return (
    (a[20] = t[s].fixture), (a[21] = t[s].homeTeam), (a[22] = t[s].awayTeam), a
  );
}
function ba(l, t, s) {
  const a = l.slice();
  return (a[25] = t[s]), a;
}
function ga(l) {
  let t,
    s,
    a = l[25] + "",
    f;
  return {
    c() {
      (t = o("option")), (s = m("Gameweek ")), (f = m(a)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var d = i(t);
      (s = _(d, "Gameweek ")), (f = _(d, a)), d.forEach(r), this.h();
    },
    h() {
      (t.__value = l[25]), (t.value = t.__value);
    },
    m(u, d) {
      me(u, t, d), e(t, s), e(t, f);
    },
    p: at,
    d(u) {
      u && r(t);
    },
  };
}
function wa(l) {
  let t,
    s,
    a,
    f,
    u,
    d,
    b,
    v,
    g,
    p,
    E,
    $,
    I,
    h,
    P,
    D,
    V,
    T,
    x = js(Number(l[20].kickOff)) + "",
    N,
    B,
    G,
    A,
    k,
    C = (l[21] ? l[21].friendlyName : "") + "",
    O,
    F,
    z,
    L,
    Y = (l[22] ? l[22].friendlyName : "") + "",
    te,
    Z,
    ee,
    ue,
    ne,
    ce = (l[20].status === 0 ? "-" : l[20].homeGoals) + "",
    J,
    ie,
    K,
    ae = (l[20].status === 0 ? "-" : l[20].awayGoals) + "",
    q,
    ve,
    U;
  return (
    (d = new as({
      props: {
        primaryColour: l[21] ? l[21].primaryColourHex : "",
        secondaryColour: l[21] ? l[21].secondaryColourHex : "",
        thirdColour: l[21] ? l[21].thirdColourHex : "",
      },
    })),
    (h = new as({
      props: {
        primaryColour: l[22] ? l[22].primaryColourHex : "",
        secondaryColour: l[22] ? l[22].secondaryColourHex : "",
        thirdColour: l[22] ? l[22].thirdColourHex : "",
      },
    })),
    {
      c() {
        (t = o("div")),
          (s = o("div")),
          (a = o("div")),
          (f = o("div")),
          (u = o("a")),
          Be(d.$$.fragment),
          (v = w()),
          (g = o("span")),
          (p = m("v")),
          (E = w()),
          ($ = o("div")),
          (I = o("a")),
          Be(h.$$.fragment),
          (D = w()),
          (V = o("div")),
          (T = o("span")),
          (N = m(x)),
          (B = w()),
          (G = o("div")),
          (A = o("div")),
          (k = o("a")),
          (O = m(C)),
          (z = w()),
          (L = o("a")),
          (te = m(Y)),
          (ee = w()),
          (ue = o("div")),
          (ne = o("span")),
          (J = m(ce)),
          (ie = w()),
          (K = o("span")),
          (q = m(ae)),
          this.h();
      },
      l(j) {
        t = n(j, "DIV", { class: !0 });
        var H = i(t);
        s = n(H, "DIV", { class: !0 });
        var S = i(s);
        a = n(S, "DIV", { class: !0 });
        var M = i(a);
        f = n(M, "DIV", { class: !0 });
        var se = i(f);
        u = n(se, "A", { href: !0 });
        var Ve = i(u);
        ze(d.$$.fragment, Ve),
          Ve.forEach(r),
          se.forEach(r),
          (v = y(M)),
          (g = n(M, "SPAN", { class: !0 }));
        var ke = i(g);
        (p = _(ke, "v")),
          ke.forEach(r),
          (E = y(M)),
          ($ = n(M, "DIV", { class: !0 }));
        var re = i($);
        I = n(re, "A", { href: !0 });
        var ye = i(I);
        ze(h.$$.fragment, ye),
          ye.forEach(r),
          re.forEach(r),
          M.forEach(r),
          (D = y(S)),
          (V = n(S, "DIV", { class: !0 }));
        var le = i(V);
        T = n(le, "SPAN", { class: !0 });
        var be = i(T);
        (N = _(be, x)),
          be.forEach(r),
          le.forEach(r),
          S.forEach(r),
          (B = y(H)),
          (G = n(H, "DIV", { class: !0 }));
        var R = i(G);
        A = n(R, "DIV", { class: !0 });
        var oe = i(A);
        k = n(oe, "A", { href: !0 });
        var X = i(k);
        (O = _(X, C)),
          X.forEach(r),
          (z = y(oe)),
          (L = n(oe, "A", { href: !0 }));
        var Ie = i(L);
        (te = _(Ie, Y)),
          Ie.forEach(r),
          oe.forEach(r),
          (ee = y(R)),
          (ue = n(R, "DIV", { class: !0 }));
        var xe = i(ue);
        ne = n(xe, "SPAN", {});
        var Ce = i(ne);
        (J = _(Ce, ce)), Ce.forEach(r), (ie = y(xe)), (K = n(xe, "SPAN", {}));
        var $e = i(K);
        (q = _($e, ae)),
          $e.forEach(r),
          xe.forEach(r),
          R.forEach(r),
          H.forEach(r),
          this.h();
      },
      h() {
        c(u, "href", (b = `/club?id=${l[20].homeTeamId}`)),
          c(f, "class", "w-10 items-center justify-center"),
          c(g, "class", "font-bold text-lg"),
          c(I, "href", (P = `/club?id=${l[20].awayTeamId}`)),
          c($, "class", "w-10 items-center justify-center"),
          c(a, "class", "flex w-1/2 space-x-4 justify-center"),
          c(T, "class", "text-sm md:text-lg ml-4 md:ml-0 text-left"),
          c(V, "class", "flex w-1/2 lg:justify-center"),
          c(s, "class", "flex items-center w-1/2 ml-4"),
          c(k, "href", (F = `/club?id=${l[20].homeTeamId}`)),
          c(L, "href", (Z = `/club?id=${l[20].awayTeamId}`)),
          c(
            A,
            "class",
            "flex flex-col min-w-[200px] lg:min-w-[120px] lg:min-w-[200px] text-xs md:text-base"
          ),
          c(
            ue,
            "class",
            "flex flex-col min-w-[200px] lg:min-w-[120px] lg:min-w-[200px] text-xs md:text-base"
          ),
          c(G, "class", "flex items-center space-x-10 w-1/2 lg:justify-center"),
          c(
            t,
            "class",
            (ve = `flex items-center justify-between py-2 border-b border-gray-700  ${
              l[20].status === 0 ? "text-gray-400" : "text-white"
            }`)
          );
      },
      m(j, H) {
        me(j, t, H),
          e(t, s),
          e(s, a),
          e(a, f),
          e(f, u),
          Fe(d, u, null),
          e(a, v),
          e(a, g),
          e(g, p),
          e(a, E),
          e(a, $),
          e($, I),
          Fe(h, I, null),
          e(s, D),
          e(s, V),
          e(V, T),
          e(T, N),
          e(t, B),
          e(t, G),
          e(G, A),
          e(A, k),
          e(k, O),
          e(A, z),
          e(A, L),
          e(L, te),
          e(G, ee),
          e(G, ue),
          e(ue, ne),
          e(ne, J),
          e(ue, ie),
          e(ue, K),
          e(K, q),
          (U = !0);
      },
      p(j, H) {
        const S = {};
        H & 2 && (S.primaryColour = j[21] ? j[21].primaryColourHex : ""),
          H & 2 && (S.secondaryColour = j[21] ? j[21].secondaryColourHex : ""),
          H & 2 && (S.thirdColour = j[21] ? j[21].thirdColourHex : ""),
          d.$set(S),
          (!U || (H & 2 && b !== (b = `/club?id=${j[20].homeTeamId}`))) &&
            c(u, "href", b);
        const M = {};
        H & 2 && (M.primaryColour = j[22] ? j[22].primaryColourHex : ""),
          H & 2 && (M.secondaryColour = j[22] ? j[22].secondaryColourHex : ""),
          H & 2 && (M.thirdColour = j[22] ? j[22].thirdColourHex : ""),
          h.$set(M),
          (!U || (H & 2 && P !== (P = `/club?id=${j[20].awayTeamId}`))) &&
            c(I, "href", P),
          (!U || H & 2) &&
            x !== (x = js(Number(j[20].kickOff)) + "") &&
            Q(N, x),
          (!U || H & 2) &&
            C !== (C = (j[21] ? j[21].friendlyName : "") + "") &&
            Q(O, C),
          (!U || (H & 2 && F !== (F = `/club?id=${j[20].homeTeamId}`))) &&
            c(k, "href", F),
          (!U || H & 2) &&
            Y !== (Y = (j[22] ? j[22].friendlyName : "") + "") &&
            Q(te, Y),
          (!U || (H & 2 && Z !== (Z = `/club?id=${j[20].awayTeamId}`))) &&
            c(L, "href", Z),
          (!U || H & 2) &&
            ce !== (ce = (j[20].status === 0 ? "-" : j[20].homeGoals) + "") &&
            Q(J, ce),
          (!U || H & 2) &&
            ae !== (ae = (j[20].status === 0 ? "-" : j[20].awayGoals) + "") &&
            Q(q, ae),
          (!U ||
            (H & 2 &&
              ve !==
                (ve = `flex items-center justify-between py-2 border-b border-gray-700  ${
                  j[20].status === 0 ? "text-gray-400" : "text-white"
                }`))) &&
            c(t, "class", ve);
      },
      i(j) {
        U || (de(d.$$.fragment, j), de(h.$$.fragment, j), (U = !0));
      },
      o(j) {
        he(d.$$.fragment, j), he(h.$$.fragment, j), (U = !1);
      },
      d(j) {
        j && r(t), Ue(d), Ue(h);
      },
    }
  );
}
function ya(l) {
  let t,
    s,
    a,
    f = l[17] + "",
    u,
    d,
    b,
    v,
    g = l[2],
    p = [];
  for (let $ = 0; $ < g.length; $ += 1) p[$] = wa(pa(l, g, $));
  const E = ($) =>
    he(p[$], 1, 1, () => {
      p[$] = null;
    });
  return {
    c() {
      (t = o("div")), (s = o("div")), (a = o("h2")), (u = m(f)), (d = w());
      for (let $ = 0; $ < p.length; $ += 1) p[$].c();
      (b = w()), this.h();
    },
    l($) {
      t = n($, "DIV", {});
      var I = i(t);
      s = n(I, "DIV", { class: !0 });
      var h = i(s);
      a = n(h, "H2", { class: !0 });
      var P = i(a);
      (u = _(P, f)), P.forEach(r), h.forEach(r), (d = y(I));
      for (let D = 0; D < p.length; D += 1) p[D].l(I);
      (b = y(I)), I.forEach(r), this.h();
    },
    h() {
      c(a, "class", "date-header ml-4 text-xs md:text-base"),
        c(
          s,
          "class",
          "flex items-center justify-between border border-gray-700 py-4 bg-light-gray"
        );
    },
    m($, I) {
      me($, t, I), e(t, s), e(s, a), e(a, u), e(t, d);
      for (let h = 0; h < p.length; h += 1) p[h] && p[h].m(t, null);
      e(t, b), (v = !0);
    },
    p($, I) {
      if (((!v || I & 2) && f !== (f = $[17] + "") && Q(u, f), I & 2)) {
        g = $[2];
        let h;
        for (h = 0; h < g.length; h += 1) {
          const P = pa($, g, h);
          p[h]
            ? (p[h].p(P, I), de(p[h], 1))
            : ((p[h] = wa(P)), p[h].c(), de(p[h], 1), p[h].m(t, b));
        }
        for (Ot(), h = g.length; h < p.length; h += 1) E(h);
        St();
      }
    },
    i($) {
      if (!v) {
        for (let I = 0; I < g.length; I += 1) de(p[I]);
        v = !0;
      }
    },
    o($) {
      p = p.filter(Boolean);
      for (let I = 0; I < p.length; I += 1) he(p[I]);
      v = !1;
    },
    d($) {
      $ && r(t), il(p, $);
    },
  };
}
function Ya(l) {
  let t,
    s,
    a,
    f,
    u,
    d,
    b,
    v,
    g,
    p,
    E,
    $,
    I,
    h,
    P,
    D,
    V,
    T,
    x = l[3],
    N = [];
  for (let k = 0; k < x.length; k += 1) N[k] = ga(ba(l, x, k));
  let B = Object.entries(l[1]),
    G = [];
  for (let k = 0; k < B.length; k += 1) G[k] = ya(ha(l, B, k));
  const A = (k) =>
    he(G[k], 1, 1, () => {
      G[k] = null;
    });
  return {
    c() {
      (t = o("div")),
        (s = o("div")),
        (a = o("div")),
        (f = o("div")),
        (u = o("button")),
        (d = m("<")),
        (v = w()),
        (g = o("select"));
      for (let k = 0; k < N.length; k += 1) N[k].c();
      (p = w()), (E = o("button")), ($ = m(">")), (h = w()), (P = o("div"));
      for (let k = 0; k < G.length; k += 1) G[k].c();
      this.h();
    },
    l(k) {
      t = n(k, "DIV", { class: !0 });
      var C = i(t);
      s = n(C, "DIV", { class: !0 });
      var O = i(s);
      a = n(O, "DIV", { class: !0 });
      var F = i(a);
      f = n(F, "DIV", { class: !0 });
      var z = i(f);
      u = n(z, "BUTTON", { class: !0 });
      var L = i(u);
      (d = _(L, "<")),
        L.forEach(r),
        (v = y(z)),
        (g = n(z, "SELECT", { class: !0 }));
      var Y = i(g);
      for (let ee = 0; ee < N.length; ee += 1) N[ee].l(Y);
      Y.forEach(r), (p = y(z)), (E = n(z, "BUTTON", { class: !0 }));
      var te = i(E);
      ($ = _(te, ">")),
        te.forEach(r),
        z.forEach(r),
        F.forEach(r),
        (h = y(O)),
        (P = n(O, "DIV", {}));
      var Z = i(P);
      for (let ee = 0; ee < G.length; ee += 1) G[ee].l(Z);
      Z.forEach(r), O.forEach(r), C.forEach(r), this.h();
    },
    h() {
      c(
        u,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (u.disabled = b = l[0] === 1),
        c(
          g,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        l[0] === void 0 && ls(() => l[8].call(g)),
        c(
          E,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (E.disabled = I = l[0] === 38),
        c(f, "class", "flex items-center space-x-2 ml-4"),
        c(a, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        c(s, "class", "flex flex-col space-y-4"),
        c(t, "class", "container-fluid mt-4 mb-4");
    },
    m(k, C) {
      me(k, t, C),
        e(t, s),
        e(s, a),
        e(a, f),
        e(f, u),
        e(u, d),
        e(f, v),
        e(f, g);
      for (let O = 0; O < N.length; O += 1) N[O] && N[O].m(g, null);
      gt(g, l[0], !0), e(f, p), e(f, E), e(E, $), e(s, h), e(s, P);
      for (let O = 0; O < G.length; O += 1) G[O] && G[O].m(P, null);
      (D = !0),
        V ||
          ((T = [
            we(u, "click", l[7]),
            we(g, "change", l[8]),
            we(E, "click", l[9]),
          ]),
          (V = !0));
    },
    p(k, [C]) {
      if (
        ((!D || (C & 9 && b !== (b = k[0] === 1))) && (u.disabled = b), C & 8)
      ) {
        x = k[3];
        let O;
        for (O = 0; O < x.length; O += 1) {
          const F = ba(k, x, O);
          N[O] ? N[O].p(F, C) : ((N[O] = ga(F)), N[O].c(), N[O].m(g, null));
        }
        for (; O < N.length; O += 1) N[O].d(1);
        N.length = x.length;
      }
      if (
        (C & 9 && gt(g, k[0]),
        (!D || (C & 9 && I !== (I = k[0] === 38))) && (E.disabled = I),
        C & 2)
      ) {
        B = Object.entries(k[1]);
        let O;
        for (O = 0; O < B.length; O += 1) {
          const F = ha(k, B, O);
          G[O]
            ? (G[O].p(F, C), de(G[O], 1))
            : ((G[O] = ya(F)), G[O].c(), de(G[O], 1), G[O].m(P, null));
        }
        for (Ot(), O = B.length; O < G.length; O += 1) A(O);
        St();
      }
    },
    i(k) {
      if (!D) {
        for (let C = 0; C < B.length; C += 1) de(G[C]);
        D = !0;
      }
    },
    o(k) {
      G = G.filter(Boolean);
      for (let C = 0; C < G.length; C += 1) he(G[C]);
      D = !1;
    },
    d(k) {
      k && r(t), il(N, k), il(G, k), (V = !1), Tl(T);
    },
  };
}
function Qa(l, t, s) {
  let a,
    f,
    u = [],
    d = [],
    b = [],
    v,
    g,
    p,
    E,
    $ = 1,
    I = Array.from({ length: 38 }, (x, N) => N + 1);
  Os(async () => {
    try {
      await Yt.sync(),
        await Fl.sync(),
        await fl.sync(),
        (g = Yt.subscribe((x) => {
          u = x;
        })),
        (p = Fl.subscribe((x) => {
          s(2, (d = x)),
            s(
              5,
              (b = d.map((N) => ({
                fixture: N,
                homeTeam: P(N.homeTeamId),
                awayTeam: P(N.awayTeamId),
              })))
            );
        })),
        (E = fl.subscribe((x) => {
          v = x;
        }));
    } catch (x) {
      ss.show("Error fetching fixtures data.", "error"),
        console.error("Error fetching fixtures data:", x);
    } finally {
    }
  }),
    Ms(() => {
      g?.(), p?.(), E?.();
    });
  const h = (x) => {
    s(0, ($ = Math.max(1, Math.min(38, $ + x))));
  };
  function P(x) {
    return u.find((N) => N.id === x);
  }
  const D = () => h(-1);
  function V() {
    ($ = ts(this)), s(0, $), s(3, I);
  }
  const T = () => h(1);
  return (
    (l.$$.update = () => {
      l.$$.dirty & 33 &&
        s(6, (a = b.filter(({ fixture: x }) => x.gameweek === $))),
        l.$$.dirty & 64 &&
          s(
            1,
            (f = a.reduce((x, N) => {
              const B = new Date(Number(N.fixture.kickOff) / 1e6),
                A = new Intl.DateTimeFormat("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(B);
              return x[A] || (x[A] = []), x[A].push(N), x;
            }, {}))
          );
    }),
    [$, f, d, I, h, b, a, D, V, T]
  );
}
class Xa extends ms {
  constructor(t) {
    super(), _s(this, t, Qa, Ya, hs, {});
  }
}
function Ea(l) {
  let t,
    s,
    a,
    f,
    u,
    d,
    b,
    v,
    g,
    p,
    E,
    $,
    I,
    h,
    P =
      (l[2].player.firstName != ""
        ? l[2].player.firstName.charAt(0) + "."
        : "") + l[2].player.lastName,
    D,
    V,
    T,
    x,
    N,
    B = l[3]?.friendlyName + "",
    G,
    A,
    k,
    C,
    O,
    F,
    z,
    L = l[4]?.friendlyName + "",
    Y,
    te,
    Z,
    ee,
    ue,
    ne,
    ce,
    J = l[2].gameweek + "",
    ie,
    K,
    ae,
    q,
    ve,
    U,
    j,
    H,
    S,
    M,
    se,
    Ve,
    ke,
    re,
    ye,
    le,
    be,
    R,
    oe = (l[2].appearance > 0 ? l[2].appearance : "-") + "",
    X,
    Ie,
    xe,
    Ce = (l[2].appearance > 0 ? l[2].appearance * 5 : "-") + "",
    $e,
    We,
    Te,
    ge,
    rt,
    wt,
    Ge,
    Dt = l[2].goals + "",
    ot,
    yt,
    Je,
    nt = l[2].goalPoints + "",
    Vt,
    Gt,
    Ne,
    it,
    Ul,
    ct,
    Et,
    dl = l[2].assists + "",
    Pl,
    Qt,
    Oe,
    Xt = l[2].assistPoints + "",
    At,
    Wl,
    ft,
    Ht,
    Zt,
    Jl,
    el,
    tl = l[2].yellowCards + "",
    Mt,
    Kl,
    ll,
    dt = l[2].yellowCards * -5 + "",
    ul,
    Rl,
    et,
    sl,
    jt,
    zl,
    qe,
    ut = l[2].redCards + "",
    Nl,
    Cl,
    al,
    vl = (l[2].redCards > 0 ? -20 : 0) + "",
    Tt,
    ql,
    Pt,
    ml,
    Ke,
    Qe,
    Ye,
    Lt,
    tt,
    _l = l[2].ownGoals + "",
    hl,
    $l,
    rl,
    ol = l[2].ownGoals * -10 + "",
    Nt,
    Ct,
    vt,
    Bt,
    Ol,
    Yl,
    mt,
    _t = l[2].missedPenalties + "",
    Sl,
    Gl,
    Ft,
    pl = l[2].missedPenalties * -15 + "",
    Ae,
    He,
    De,
    $t,
    bl,
    rs,
    Al,
    Re,
    Hl = l[2].points + "",
    gl,
    lt,
    Pe,
    Ut,
    ht,
    os,
    W,
    fe,
    st = l[2].bonusPoints + "",
    Se,
    pt,
    wl,
    Wt,
    yl,
    nl,
    ns,
    El,
    Ml = l[2].totalPoints + "",
    Jt,
    is,
    kl,
    Kt,
    bt,
    Ee,
    cs,
    ps;
  var kt = va(l[2].player.nationality);
  function bs(Le) {
    return { props: { class: "h-20 w-20" } };
  }
  kt && (E = fa(kt, bs())),
    (x = new as({
      props: {
        className: "w-5 h-5 mr-2",
        primaryColour: l[3]?.primaryColourHex,
        secondaryColour: l[3]?.secondaryColourHex,
        thirdColour: l[3]?.thirdColourHex,
      },
    })),
    (F = new as({
      props: {
        className: "w-5 h-5 mx-1",
        primaryColour: l[4]?.primaryColourHex,
        secondaryColour: l[4]?.secondaryColourHex,
        thirdColour: l[4]?.thirdColourHex,
      },
    }));
  let Me = l[2].player.position < 2 && ka(l),
    je = l[2].player.position === 0 && Ia(l);
  return {
    c() {
      (t = o("div")),
        (s = o("div")),
        (a = o("div")),
        (f = o("h3")),
        (u = m("Player Detail")),
        (d = w()),
        (b = o("button")),
        (v = m("×")),
        (g = w()),
        (p = o("div")),
        E && Be(E.$$.fragment),
        ($ = w()),
        (I = o("div")),
        (h = o("h3")),
        (D = m(P)),
        (V = w()),
        (T = o("p")),
        Be(x.$$.fragment),
        (N = w()),
        (G = m(B)),
        (A = w()),
        (k = o("div")),
        (C = o("p")),
        (O = m("vs ")),
        Be(F.$$.fragment),
        (z = w()),
        (Y = m(L)),
        (te = w()),
        (Z = o("p")),
        (ee = m(l[5])),
        (ue = w()),
        (ne = o("p")),
        (ce = m("Gameweek ")),
        (ie = m(J)),
        (K = w()),
        (ae = o("div")),
        (q = o("div")),
        (ve = o("div")),
        (U = m("Category")),
        (j = w()),
        (H = o("div")),
        (S = m("Detail")),
        (M = w()),
        (se = o("div")),
        (Ve = m("Points")),
        (ke = w()),
        (re = o("div")),
        (ye = o("div")),
        (le = m("Appearance")),
        (be = w()),
        (R = o("div")),
        (X = m(oe)),
        (Ie = w()),
        (xe = o("div")),
        ($e = m(Ce)),
        (We = w()),
        (Te = o("div")),
        (ge = o("div")),
        (rt = m("Goals")),
        (wt = w()),
        (Ge = o("div")),
        (ot = m(Dt)),
        (yt = w()),
        (Je = o("div")),
        (Vt = m(nt)),
        (Gt = w()),
        (Ne = o("div")),
        (it = o("div")),
        (Ul = m("Assists")),
        (ct = w()),
        (Et = o("div")),
        (Pl = m(dl)),
        (Qt = w()),
        (Oe = o("div")),
        (At = m(Xt)),
        (Wl = w()),
        (ft = o("div")),
        (Ht = o("div")),
        (Zt = m("Yellow Card")),
        (Jl = w()),
        (el = o("div")),
        (Mt = m(tl)),
        (Kl = w()),
        (ll = o("div")),
        (ul = m(dt)),
        (Rl = w()),
        (et = o("div")),
        (sl = o("div")),
        (jt = m("Red Card")),
        (zl = w()),
        (qe = o("div")),
        (Nl = m(ut)),
        (Cl = w()),
        (al = o("div")),
        (Tt = m(vl)),
        (ql = w()),
        Me && Me.c(),
        (Pt = w()),
        je && je.c(),
        (ml = w()),
        (Ke = o("div")),
        (Qe = o("div")),
        (Ye = m("Own Goal")),
        (Lt = w()),
        (tt = o("div")),
        (hl = m(_l)),
        ($l = w()),
        (rl = o("div")),
        (Nt = m(ol)),
        (Ct = w()),
        (vt = o("div")),
        (Bt = o("div")),
        (Ol = m("Penalty Misses")),
        (Yl = w()),
        (mt = o("div")),
        (Sl = m(_t)),
        (Gl = w()),
        (Ft = o("div")),
        (Ae = m(pl)),
        (He = w()),
        (De = o("div")),
        ($t = o("div")),
        (bl = o("span")),
        (rs = m("Player Points:")),
        (Al = w()),
        (Re = o("span")),
        (gl = m(Hl)),
        (lt = w()),
        (Pe = o("div")),
        (Ut = o("div")),
        (ht = o("span")),
        (os = m("Bonus Points:")),
        (W = w()),
        (fe = o("span")),
        (Se = m(st)),
        (pt = w()),
        (wl = o("div")),
        (Wt = o("div")),
        (yl = o("span")),
        (nl = m("Total Points:")),
        (ns = w()),
        (El = o("span")),
        (Jt = m(Ml)),
        (is = w()),
        (kl = o("div")),
        (Kt = o("button")),
        (bt = m("Close")),
        this.h();
    },
    l(Le) {
      t = n(Le, "DIV", { class: !0 });
      var pe = i(t);
      s = n(pe, "DIV", { class: !0 });
      var _e = i(s);
      a = n(_e, "DIV", { class: !0 });
      var Xe = i(a);
      f = n(Xe, "H3", { class: !0 });
      var jl = i(f);
      (u = _(jl, "Player Detail")),
        jl.forEach(r),
        (d = y(Xe)),
        (b = n(Xe, "BUTTON", { class: !0 }));
      var gs = i(b);
      (v = _(gs, "×")),
        gs.forEach(r),
        Xe.forEach(r),
        (g = y(_e)),
        (p = n(_e, "DIV", { class: !0 }));
      var Ql = i(p);
      E && ze(E.$$.fragment, Ql),
        ($ = y(Ql)),
        (I = n(Ql, "DIV", { class: !0 }));
      var Xl = i(I);
      h = n(Xl, "H3", { class: !0 });
      var ws = i(h);
      (D = _(ws, P)),
        ws.forEach(r),
        (V = y(Xl)),
        (T = n(Xl, "P", { class: !0 }));
      var Zl = i(T);
      ze(x.$$.fragment, Zl),
        (N = y(Zl)),
        (G = _(Zl, B)),
        Zl.forEach(r),
        Xl.forEach(r),
        Ql.forEach(r),
        (A = y(_e)),
        (k = n(_e, "DIV", { class: !0 }));
      var It = i(k);
      C = n(It, "P", { class: !0 });
      var Ll = i(C);
      (O = _(Ll, "vs ")),
        ze(F.$$.fragment, Ll),
        (z = y(Ll)),
        (Y = _(Ll, L)),
        Ll.forEach(r),
        (te = y(It)),
        (Z = n(It, "P", { class: !0 }));
      var ys = i(Z);
      (ee = _(ys, l[5])),
        ys.forEach(r),
        (ue = y(It)),
        (ne = n(It, "P", { class: !0 }));
      var xt = i(ne);
      (ce = _(xt, "Gameweek ")),
        (ie = _(xt, J)),
        xt.forEach(r),
        It.forEach(r),
        (K = y(_e)),
        (ae = n(_e, "DIV", { class: !0 }));
      var Es = i(ae);
      q = n(Es, "DIV", { class: !0 });
      var Il = i(q);
      ve = n(Il, "DIV", { class: !0 });
      var ks = i(ve);
      (U = _(ks, "Category")),
        ks.forEach(r),
        (j = y(Il)),
        (H = n(Il, "DIV", { class: !0 }));
      var es = i(H);
      (S = _(es, "Detail")),
        es.forEach(r),
        (M = y(Il)),
        (se = n(Il, "DIV", { class: !0 }));
      var xl = i(se);
      (Ve = _(xl, "Points")),
        xl.forEach(r),
        Il.forEach(r),
        Es.forEach(r),
        (ke = y(_e)),
        (re = n(_e, "DIV", { class: !0 }));
      var Rt = i(re);
      ye = n(Rt, "DIV", { class: !0 });
      var Is = i(ye);
      (le = _(Is, "Appearance")),
        Is.forEach(r),
        (be = y(Rt)),
        (R = n(Rt, "DIV", { class: !0 }));
      var xs = i(R);
      (X = _(xs, oe)),
        xs.forEach(r),
        (Ie = y(Rt)),
        (xe = n(Rt, "DIV", { class: !0 }));
      var Ds = i(xe);
      ($e = _(Ds, Ce)),
        Ds.forEach(r),
        Rt.forEach(r),
        (We = y(_e)),
        (Te = n(_e, "DIV", { class: !0 }));
      var zt = i(Te);
      ge = n(zt, "DIV", { class: !0 });
      var qt = i(ge);
      (rt = _(qt, "Goals")),
        qt.forEach(r),
        (wt = y(zt)),
        (Ge = n(zt, "DIV", { class: !0 }));
      var Vs = i(Ge);
      (ot = _(Vs, Dt)),
        Vs.forEach(r),
        (yt = y(zt)),
        (Je = n(zt, "DIV", { class: !0 }));
      var Ts = i(Je);
      (Vt = _(Ts, nt)),
        Ts.forEach(r),
        zt.forEach(r),
        (Gt = y(_e)),
        (Ne = n(_e, "DIV", { class: !0 }));
      var Dl = i(Ne);
      it = n(Dl, "DIV", { class: !0 });
      var Ps = i(it);
      (Ul = _(Ps, "Assists")),
        Ps.forEach(r),
        (ct = y(Dl)),
        (Et = n(Dl, "DIV", { class: !0 }));
      var Ns = i(Et);
      (Pl = _(Ns, dl)),
        Ns.forEach(r),
        (Qt = y(Dl)),
        (Oe = n(Dl, "DIV", { class: !0 }));
      var Cs = i(Oe);
      (At = _(Cs, Xt)),
        Cs.forEach(r),
        Dl.forEach(r),
        (Wl = y(_e)),
        (ft = n(_e, "DIV", { class: !0 }));
      var fs = i(ft);
      Ht = n(fs, "DIV", { class: !0 });
      var Bs = i(Ht);
      (Zt = _(Bs, "Yellow Card")),
        Bs.forEach(r),
        (Jl = y(fs)),
        (el = n(fs, "DIV", { class: !0 }));
      var Fs = i(el);
      (Mt = _(Fs, tl)),
        Fs.forEach(r),
        (Kl = y(fs)),
        (ll = n(fs, "DIV", { class: !0 }));
      var Us = i(ll);
      (ul = _(Us, dt)),
        Us.forEach(r),
        fs.forEach(r),
        (Rl = y(_e)),
        (et = n(_e, "DIV", { class: !0 }));
      var ds = i(et);
      sl = n(ds, "DIV", { class: !0 });
      var Ws = i(sl);
      (jt = _(Ws, "Red Card")),
        Ws.forEach(r),
        (zl = y(ds)),
        (qe = n(ds, "DIV", { class: !0 }));
      var Js = i(qe);
      (Nl = _(Js, ut)),
        Js.forEach(r),
        (Cl = y(ds)),
        (al = n(ds, "DIV", { class: !0 }));
      var Ks = i(al);
      (Tt = _(Ks, vl)),
        Ks.forEach(r),
        ds.forEach(r),
        (ql = y(_e)),
        Me && Me.l(_e),
        (Pt = y(_e)),
        je && je.l(_e),
        (ml = y(_e)),
        (Ke = n(_e, "DIV", { class: !0 }));
      var us = i(Ke);
      Qe = n(us, "DIV", { class: !0 });
      var Rs = i(Qe);
      (Ye = _(Rs, "Own Goal")),
        Rs.forEach(r),
        (Lt = y(us)),
        (tt = n(us, "DIV", { class: !0 }));
      var zs = i(tt);
      (hl = _(zs, _l)),
        zs.forEach(r),
        ($l = y(us)),
        (rl = n(us, "DIV", { class: !0 }));
      var qs = i(rl);
      (Nt = _(qs, ol)),
        qs.forEach(r),
        us.forEach(r),
        (Ct = y(_e)),
        (vt = n(_e, "DIV", { class: !0 }));
      var vs = i(vt);
      Bt = n(vs, "DIV", { class: !0 });
      var Ys = i(Bt);
      (Ol = _(Ys, "Penalty Misses")),
        Ys.forEach(r),
        (Yl = y(vs)),
        (mt = n(vs, "DIV", { class: !0 }));
      var Qs = i(mt);
      (Sl = _(Qs, _t)),
        Qs.forEach(r),
        (Gl = y(vs)),
        (Ft = n(vs, "DIV", { class: !0 }));
      var Xs = i(Ft);
      (Ae = _(Xs, pl)),
        Xs.forEach(r),
        vs.forEach(r),
        (He = y(_e)),
        (De = n(_e, "DIV", { class: !0 }));
      var Zs = i(De);
      $t = n(Zs, "DIV", { class: !0 });
      var Ss = i($t);
      bl = n(Ss, "SPAN", { class: !0 });
      var ea = i(bl);
      (rs = _(ea, "Player Points:")),
        ea.forEach(r),
        (Al = y(Ss)),
        (Re = n(Ss, "SPAN", { class: !0 }));
      var ta = i(Re);
      (gl = _(ta, Hl)),
        ta.forEach(r),
        Ss.forEach(r),
        Zs.forEach(r),
        (lt = y(_e)),
        (Pe = n(_e, "DIV", { class: !0 }));
      var la = i(Pe);
      Ut = n(la, "DIV", { class: !0 });
      var Gs = i(Ut);
      ht = n(Gs, "SPAN", { class: !0 });
      var sa = i(ht);
      (os = _(sa, "Bonus Points:")),
        sa.forEach(r),
        (W = y(Gs)),
        (fe = n(Gs, "SPAN", { class: !0 }));
      var aa = i(fe);
      (Se = _(aa, st)),
        aa.forEach(r),
        Gs.forEach(r),
        la.forEach(r),
        (pt = y(_e)),
        (wl = n(_e, "DIV", { class: !0 }));
      var ra = i(wl);
      Wt = n(ra, "DIV", { class: !0 });
      var As = i(Wt);
      yl = n(As, "SPAN", { class: !0 });
      var oa = i(yl);
      (nl = _(oa, "Total Points:")),
        oa.forEach(r),
        (ns = y(As)),
        (El = n(As, "SPAN", { class: !0 }));
      var na = i(El);
      (Jt = _(na, Ml)),
        na.forEach(r),
        As.forEach(r),
        ra.forEach(r),
        (is = y(_e)),
        (kl = n(_e, "DIV", { class: !0 }));
      var ia = i(kl);
      Kt = n(ia, "BUTTON", { class: !0 });
      var ca = i(Kt);
      (bt = _(ca, "Close")),
        ca.forEach(r),
        ia.forEach(r),
        _e.forEach(r),
        pe.forEach(r),
        this.h();
    },
    h() {
      c(f, "class", "text-xl font-semibold text-white"),
        c(b, "class", "text-white text-3xl"),
        c(a, "class", "flex justify-between items-center"),
        c(h, "class", "text-2xl mb-2"),
        c(T, "class", "text-sm text-gray-400 flex items-center"),
        c(I, "class", "ml-4"),
        c(p, "class", "flex justify-start items-center w-full"),
        c(
          C,
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
          k,
          "class",
          "flex justify-start items-center w-full border-t border-gray-600 text-sm"
        ),
        c(ve, "class", "text-sm font-medium w-3/6"),
        c(H, "class", "text-sm font-medium w-2/6"),
        c(se, "class", "text-sm font-medium w-1/6"),
        c(
          q,
          "class",
          "flex justify-between items-center mt-4 bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(ae, "class", "mt-2"),
        c(ye, "class", "text-sm font-medium w-3/6"),
        c(R, "class", "text-sm font-medium w-2/6"),
        c(xe, "class", "text-sm font-medium w-1/6"),
        c(re, "class", "flex justify-between items-center p-2"),
        c(ge, "class", "text-sm font-medium w-3/6"),
        c(Ge, "class", "text-sm font-medium w-2/6"),
        c(Je, "class", "text-sm font-medium w-1/6"),
        c(Te, "class", "flex justify-between items-center p-2"),
        c(it, "class", "text-sm font-medium w-3/6"),
        c(Et, "class", "text-sm font-medium w-2/6"),
        c(Oe, "class", "text-sm font-medium w-1/6"),
        c(Ne, "class", "flex justify-between items-center p-2"),
        c(Ht, "class", "text-sm font-medium w-3/6"),
        c(el, "class", "text-sm font-medium w-2/6"),
        c(ll, "class", "text-sm font-medium w-1/6"),
        c(ft, "class", "flex justify-between items-center p-2"),
        c(sl, "class", "text-sm font-medium w-3/6"),
        c(qe, "class", "text-sm font-medium w-2/6"),
        c(al, "class", "text-sm font-medium w-1/6"),
        c(et, "class", "flex justify-between items-center p-2"),
        c(Qe, "class", "text-sm font-medium w-3/6"),
        c(tt, "class", "text-sm font-medium w-2/6"),
        c(rl, "class", "text-sm font-medium w-1/6"),
        c(Ke, "class", "flex justify-between items-center p-2"),
        c(Bt, "class", "text-sm font-medium w-3/6"),
        c(mt, "class", "text-sm font-medium w-2/6"),
        c(Ft, "class", "text-sm font-medium w-1/6"),
        c(vt, "class", "flex justify-between items-center p-2"),
        c(bl, "class", "text-sm font-bold w-5/6"),
        c(Re, "class", "text-sm font-bold w-1/6"),
        c(
          $t,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(De, "class", "mt-2"),
        c(ht, "class", "text-sm font-bold w-5/6"),
        c(fe, "class", "text-sm font-bold w-1/6"),
        c(
          Ut,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(Pe, "class", "mt-2"),
        c(yl, "class", "text-sm font-bold w-5/6"),
        c(El, "class", "text-sm font-bold w-1/6"),
        c(
          Wt,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        c(wl, "class", "mt-2"),
        c(Kt, "class", "fpl-purple-btn px-4 py-2 mt-2 rounded-md"),
        c(kl, "class", "mt-2 flex justify-end"),
        c(
          s,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"
        ),
        c(
          t,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop"
        );
    },
    m(Le, pe) {
      me(Le, t, pe),
        e(t, s),
        e(s, a),
        e(a, f),
        e(f, u),
        e(a, d),
        e(a, b),
        e(b, v),
        e(s, g),
        e(s, p),
        E && Fe(E, p, null),
        e(p, $),
        e(p, I),
        e(I, h),
        e(h, D),
        e(I, V),
        e(I, T),
        Fe(x, T, null),
        e(T, N),
        e(T, G),
        e(s, A),
        e(s, k),
        e(k, C),
        e(C, O),
        Fe(F, C, null),
        e(C, z),
        e(C, Y),
        e(k, te),
        e(k, Z),
        e(Z, ee),
        e(k, ue),
        e(k, ne),
        e(ne, ce),
        e(ne, ie),
        e(s, K),
        e(s, ae),
        e(ae, q),
        e(q, ve),
        e(ve, U),
        e(q, j),
        e(q, H),
        e(H, S),
        e(q, M),
        e(q, se),
        e(se, Ve),
        e(s, ke),
        e(s, re),
        e(re, ye),
        e(ye, le),
        e(re, be),
        e(re, R),
        e(R, X),
        e(re, Ie),
        e(re, xe),
        e(xe, $e),
        e(s, We),
        e(s, Te),
        e(Te, ge),
        e(ge, rt),
        e(Te, wt),
        e(Te, Ge),
        e(Ge, ot),
        e(Te, yt),
        e(Te, Je),
        e(Je, Vt),
        e(s, Gt),
        e(s, Ne),
        e(Ne, it),
        e(it, Ul),
        e(Ne, ct),
        e(Ne, Et),
        e(Et, Pl),
        e(Ne, Qt),
        e(Ne, Oe),
        e(Oe, At),
        e(s, Wl),
        e(s, ft),
        e(ft, Ht),
        e(Ht, Zt),
        e(ft, Jl),
        e(ft, el),
        e(el, Mt),
        e(ft, Kl),
        e(ft, ll),
        e(ll, ul),
        e(s, Rl),
        e(s, et),
        e(et, sl),
        e(sl, jt),
        e(et, zl),
        e(et, qe),
        e(qe, Nl),
        e(et, Cl),
        e(et, al),
        e(al, Tt),
        e(s, ql),
        Me && Me.m(s, null),
        e(s, Pt),
        je && je.m(s, null),
        e(s, ml),
        e(s, Ke),
        e(Ke, Qe),
        e(Qe, Ye),
        e(Ke, Lt),
        e(Ke, tt),
        e(tt, hl),
        e(Ke, $l),
        e(Ke, rl),
        e(rl, Nt),
        e(s, Ct),
        e(s, vt),
        e(vt, Bt),
        e(Bt, Ol),
        e(vt, Yl),
        e(vt, mt),
        e(mt, Sl),
        e(vt, Gl),
        e(vt, Ft),
        e(Ft, Ae),
        e(s, He),
        e(s, De),
        e(De, $t),
        e($t, bl),
        e(bl, rs),
        e($t, Al),
        e($t, Re),
        e(Re, gl),
        e(s, lt),
        e(s, Pe),
        e(Pe, Ut),
        e(Ut, ht),
        e(ht, os),
        e(Ut, W),
        e(Ut, fe),
        e(fe, Se),
        e(s, pt),
        e(s, wl),
        e(wl, Wt),
        e(Wt, yl),
        e(yl, nl),
        e(Wt, ns),
        e(Wt, El),
        e(El, Jt),
        e(s, is),
        e(s, kl),
        e(kl, Kt),
        e(Kt, bt),
        (Ee = !0),
        cs ||
          ((ps = [
            we(b, "click", function () {
              $s(l[1]) && l[1].apply(this, arguments);
            }),
            we(Kt, "click", function () {
              $s(l[1]) && l[1].apply(this, arguments);
            }),
            we(Kt, "keydown", function () {
              $s(l[1]) && l[1].apply(this, arguments);
            }),
            we(s, "click", da(l[6])),
            we(s, "keydown", da(l[7])),
            we(t, "click", function () {
              $s(l[1]) && l[1].apply(this, arguments);
            }),
            we(t, "keydown", function () {
              $s(l[1]) && l[1].apply(this, arguments);
            }),
          ]),
          (cs = !0));
    },
    p(Le, pe) {
      if (((l = Le), pe & 4 && kt !== (kt = va(l[2].player.nationality)))) {
        if (E) {
          Ot();
          const jl = E;
          he(jl.$$.fragment, 1, 0, () => {
            Ue(jl, 1);
          }),
            St();
        }
        kt
          ? ((E = fa(kt, bs())),
            Be(E.$$.fragment),
            de(E.$$.fragment, 1),
            Fe(E, p, $))
          : (E = null);
      }
      (!Ee || pe & 4) &&
        P !==
          (P =
            (l[2].player.firstName != ""
              ? l[2].player.firstName.charAt(0) + "."
              : "") + l[2].player.lastName) &&
        Q(D, P);
      const _e = {};
      pe & 8 && (_e.primaryColour = l[3]?.primaryColourHex),
        pe & 8 && (_e.secondaryColour = l[3]?.secondaryColourHex),
        pe & 8 && (_e.thirdColour = l[3]?.thirdColourHex),
        x.$set(_e),
        (!Ee || pe & 8) && B !== (B = l[3]?.friendlyName + "") && Q(G, B);
      const Xe = {};
      pe & 16 && (Xe.primaryColour = l[4]?.primaryColourHex),
        pe & 16 && (Xe.secondaryColour = l[4]?.secondaryColourHex),
        pe & 16 && (Xe.thirdColour = l[4]?.thirdColourHex),
        F.$set(Xe),
        (!Ee || pe & 16) && L !== (L = l[4]?.friendlyName + "") && Q(Y, L),
        (!Ee || pe & 32) && Q(ee, l[5]),
        (!Ee || pe & 4) && J !== (J = l[2].gameweek + "") && Q(ie, J),
        (!Ee || pe & 4) &&
          oe !== (oe = (l[2].appearance > 0 ? l[2].appearance : "-") + "") &&
          Q(X, oe),
        (!Ee || pe & 4) &&
          Ce !==
            (Ce = (l[2].appearance > 0 ? l[2].appearance * 5 : "-") + "") &&
          Q($e, Ce),
        (!Ee || pe & 4) && Dt !== (Dt = l[2].goals + "") && Q(ot, Dt),
        (!Ee || pe & 4) && nt !== (nt = l[2].goalPoints + "") && Q(Vt, nt),
        (!Ee || pe & 4) && dl !== (dl = l[2].assists + "") && Q(Pl, dl),
        (!Ee || pe & 4) && Xt !== (Xt = l[2].assistPoints + "") && Q(At, Xt),
        (!Ee || pe & 4) && tl !== (tl = l[2].yellowCards + "") && Q(Mt, tl),
        (!Ee || pe & 4) &&
          dt !== (dt = l[2].yellowCards * -5 + "") &&
          Q(ul, dt),
        (!Ee || pe & 4) && ut !== (ut = l[2].redCards + "") && Q(Nl, ut),
        (!Ee || pe & 4) &&
          vl !== (vl = (l[2].redCards > 0 ? -20 : 0) + "") &&
          Q(Tt, vl),
        l[2].player.position < 2
          ? Me
            ? Me.p(l, pe)
            : ((Me = ka(l)), Me.c(), Me.m(s, Pt))
          : Me && (Me.d(1), (Me = null)),
        l[2].player.position === 0
          ? je
            ? je.p(l, pe)
            : ((je = Ia(l)), je.c(), je.m(s, ml))
          : je && (je.d(1), (je = null)),
        (!Ee || pe & 4) && _l !== (_l = l[2].ownGoals + "") && Q(hl, _l),
        (!Ee || pe & 4) && ol !== (ol = l[2].ownGoals * -10 + "") && Q(Nt, ol),
        (!Ee || pe & 4) && _t !== (_t = l[2].missedPenalties + "") && Q(Sl, _t),
        (!Ee || pe & 4) &&
          pl !== (pl = l[2].missedPenalties * -15 + "") &&
          Q(Ae, pl),
        (!Ee || pe & 4) && Hl !== (Hl = l[2].points + "") && Q(gl, Hl),
        (!Ee || pe & 4) && st !== (st = l[2].bonusPoints + "") && Q(Se, st),
        (!Ee || pe & 4) && Ml !== (Ml = l[2].totalPoints + "") && Q(Jt, Ml);
    },
    i(Le) {
      Ee ||
        (E && de(E.$$.fragment, Le),
        de(x.$$.fragment, Le),
        de(F.$$.fragment, Le),
        (Ee = !0));
    },
    o(Le) {
      E && he(E.$$.fragment, Le),
        he(x.$$.fragment, Le),
        he(F.$$.fragment, Le),
        (Ee = !1);
    },
    d(Le) {
      Le && r(t),
        E && Ue(E),
        Ue(x),
        Ue(F),
        Me && Me.d(),
        je && je.d(),
        (cs = !1),
        Tl(ps);
    },
  };
}
function ka(l) {
  let t,
    s,
    a,
    f,
    u,
    d = l[2].cleanSheets + "",
    b,
    v,
    g,
    p = l[2].cleanSheetPoints + "",
    E,
    $,
    I,
    h,
    P,
    D,
    V,
    T = l[2].goalsConceded + "",
    x,
    N,
    B,
    G = l[2].goalsConcededPoints + "",
    A;
  return {
    c() {
      (t = o("div")),
        (s = o("div")),
        (a = m("Clean Sheet")),
        (f = w()),
        (u = o("div")),
        (b = m(d)),
        (v = w()),
        (g = o("div")),
        (E = m(p)),
        ($ = w()),
        (I = o("div")),
        (h = o("div")),
        (P = m("Conceded")),
        (D = w()),
        (V = o("div")),
        (x = m(T)),
        (N = w()),
        (B = o("div")),
        (A = m(G)),
        this.h();
    },
    l(k) {
      t = n(k, "DIV", { class: !0 });
      var C = i(t);
      s = n(C, "DIV", { class: !0 });
      var O = i(s);
      (a = _(O, "Clean Sheet")),
        O.forEach(r),
        (f = y(C)),
        (u = n(C, "DIV", { class: !0 }));
      var F = i(u);
      (b = _(F, d)), F.forEach(r), (v = y(C)), (g = n(C, "DIV", { class: !0 }));
      var z = i(g);
      (E = _(z, p)),
        z.forEach(r),
        C.forEach(r),
        ($ = y(k)),
        (I = n(k, "DIV", { class: !0 }));
      var L = i(I);
      h = n(L, "DIV", { class: !0 });
      var Y = i(h);
      (P = _(Y, "Conceded")),
        Y.forEach(r),
        (D = y(L)),
        (V = n(L, "DIV", { class: !0 }));
      var te = i(V);
      (x = _(te, T)),
        te.forEach(r),
        (N = y(L)),
        (B = n(L, "DIV", { class: !0 }));
      var Z = i(B);
      (A = _(Z, G)), Z.forEach(r), L.forEach(r), this.h();
    },
    h() {
      c(s, "class", "text-sm font-medium w-3/6"),
        c(u, "class", "text-sm font-medium w-2/6"),
        c(g, "class", "text-sm font-medium w-1/6"),
        c(t, "class", "flex justify-between items-center p-2"),
        c(h, "class", "text-sm font-medium w-3/6"),
        c(V, "class", "text-sm font-medium w-2/6"),
        c(B, "class", "text-sm font-medium w-1/6"),
        c(I, "class", "flex justify-between items-center p-2");
    },
    m(k, C) {
      me(k, t, C),
        e(t, s),
        e(s, a),
        e(t, f),
        e(t, u),
        e(u, b),
        e(t, v),
        e(t, g),
        e(g, E),
        me(k, $, C),
        me(k, I, C),
        e(I, h),
        e(h, P),
        e(I, D),
        e(I, V),
        e(V, x),
        e(I, N),
        e(I, B),
        e(B, A);
    },
    p(k, C) {
      C & 4 && d !== (d = k[2].cleanSheets + "") && Q(b, d),
        C & 4 && p !== (p = k[2].cleanSheetPoints + "") && Q(E, p),
        C & 4 && T !== (T = k[2].goalsConceded + "") && Q(x, T),
        C & 4 && G !== (G = k[2].goalsConcededPoints + "") && Q(A, G);
    },
    d(k) {
      k && r(t), k && r($), k && r(I);
    },
  };
}
function Ia(l) {
  let t,
    s,
    a,
    f,
    u,
    d = l[2].saves + "",
    b,
    v,
    g,
    p = Math.floor(l[2].saves / 3) * 5 + "",
    E,
    $,
    I,
    h,
    P,
    D,
    V,
    T = l[2].penaltySaves + "",
    x,
    N,
    B,
    G = l[2].penaltySaves * 20 + "",
    A;
  return {
    c() {
      (t = o("div")),
        (s = o("div")),
        (a = m("Saves")),
        (f = w()),
        (u = o("div")),
        (b = m(d)),
        (v = w()),
        (g = o("div")),
        (E = m(p)),
        ($ = w()),
        (I = o("div")),
        (h = o("div")),
        (P = m("Penalty Saves")),
        (D = w()),
        (V = o("div")),
        (x = m(T)),
        (N = w()),
        (B = o("div")),
        (A = m(G)),
        this.h();
    },
    l(k) {
      t = n(k, "DIV", { class: !0 });
      var C = i(t);
      s = n(C, "DIV", { class: !0 });
      var O = i(s);
      (a = _(O, "Saves")),
        O.forEach(r),
        (f = y(C)),
        (u = n(C, "DIV", { class: !0 }));
      var F = i(u);
      (b = _(F, d)), F.forEach(r), (v = y(C)), (g = n(C, "DIV", { class: !0 }));
      var z = i(g);
      (E = _(z, p)),
        z.forEach(r),
        C.forEach(r),
        ($ = y(k)),
        (I = n(k, "DIV", { class: !0 }));
      var L = i(I);
      h = n(L, "DIV", { class: !0 });
      var Y = i(h);
      (P = _(Y, "Penalty Saves")),
        Y.forEach(r),
        (D = y(L)),
        (V = n(L, "DIV", { class: !0 }));
      var te = i(V);
      (x = _(te, T)),
        te.forEach(r),
        (N = y(L)),
        (B = n(L, "DIV", { class: !0 }));
      var Z = i(B);
      (A = _(Z, G)), Z.forEach(r), L.forEach(r), this.h();
    },
    h() {
      c(s, "class", "text-sm font-medium w-3/6"),
        c(u, "class", "text-sm font-medium w-2/6"),
        c(g, "class", "text-sm font-medium w-1/6"),
        c(t, "class", "flex justify-between items-center p-2"),
        c(h, "class", "text-sm font-medium w-3/6"),
        c(V, "class", "text-sm font-medium w-2/6"),
        c(B, "class", "text-sm font-medium w-1/6"),
        c(I, "class", "flex justify-between items-center p-2");
    },
    m(k, C) {
      me(k, t, C),
        e(t, s),
        e(s, a),
        e(t, f),
        e(t, u),
        e(u, b),
        e(t, v),
        e(t, g),
        e(g, E),
        me(k, $, C),
        me(k, I, C),
        e(I, h),
        e(h, P),
        e(I, D),
        e(I, V),
        e(V, x),
        e(I, N),
        e(I, B),
        e(B, A);
    },
    p(k, C) {
      C & 4 && d !== (d = k[2].saves + "") && Q(b, d),
        C & 4 && p !== (p = Math.floor(k[2].saves / 3) * 5 + "") && Q(E, p),
        C & 4 && T !== (T = k[2].penaltySaves + "") && Q(x, T),
        C & 4 && G !== (G = k[2].penaltySaves * 20 + "") && Q(A, G);
    },
    d(k) {
      k && r(t), k && r($), k && r(I);
    },
  };
}
function Za(l) {
  let t,
    s,
    a = l[0] && Ea(l);
  return {
    c() {
      a && a.c(), (t = cl());
    },
    l(f) {
      a && a.l(f), (t = cl());
    },
    m(f, u) {
      a && a.m(f, u), me(f, t, u), (s = !0);
    },
    p(f, [u]) {
      f[0]
        ? a
          ? (a.p(f, u), u & 1 && de(a, 1))
          : ((a = Ea(f)), a.c(), de(a, 1), a.m(t.parentNode, t))
        : a &&
          (Ot(),
          he(a, 1, 1, () => {
            a = null;
          }),
          St());
    },
    i(f) {
      s || (de(a), (s = !0));
    },
    o(f) {
      he(a), (s = !1);
    },
    d(f) {
      a && a.d(f), f && r(t);
    },
  };
}
function er(l, t, s) {
  let { showModal: a } = t,
    { closeDetailModal: f } = t,
    { gameweekData: u } = t,
    { playerTeam: d } = t,
    { opponentTeam: b } = t,
    { seasonName: v } = t;
  function g(E) {
    ua.call(this, l, E);
  }
  function p(E) {
    ua.call(this, l, E);
  }
  return (
    (l.$$set = (E) => {
      "showModal" in E && s(0, (a = E.showModal)),
        "closeDetailModal" in E && s(1, (f = E.closeDetailModal)),
        "gameweekData" in E && s(2, (u = E.gameweekData)),
        "playerTeam" in E && s(3, (d = E.playerTeam)),
        "opponentTeam" in E && s(4, (b = E.opponentTeam)),
        "seasonName" in E && s(5, (v = E.seasonName));
    }),
    [a, f, u, d, b, v, g, p]
  );
}
class tr extends ms {
  constructor(t) {
    super(),
      _s(this, t, er, Za, hs, {
        showModal: 0,
        closeDetailModal: 1,
        gameweekData: 2,
        playerTeam: 3,
        opponentTeam: 4,
        seasonName: 5,
      });
  }
}
function xa(l, t, s) {
  const a = l.slice();
  return (a[24] = t[s]), a;
}
function Da(l, t, s) {
  const a = l.slice();
  return (a[27] = t[s]), a;
}
function lr(l) {
  let t,
    s,
    a,
    f,
    u,
    d,
    b,
    v,
    g,
    p,
    E,
    $,
    I,
    h,
    P,
    D,
    V,
    T,
    x,
    N,
    B,
    G,
    A,
    k,
    C,
    O,
    F,
    z,
    L,
    Y,
    te,
    Z,
    ee,
    ue,
    ne,
    ce,
    J = l[2] && Va(l),
    ie = l[7],
    K = [];
  for (let U = 0; U < ie.length; U += 1) K[U] = Ta(Da(l, ie, U));
  const ae = [rr, ar],
    q = [];
  function ve(U, j) {
    return U[1].length > 0 ? 0 : 1;
  }
  return (
    (Z = ve(l)),
    (ee = q[Z] = ae[Z](l)),
    {
      c() {
        J && J.c(),
          (t = w()),
          (s = o("div")),
          (a = o("div")),
          (f = o("div")),
          (u = o("div")),
          (d = o("div")),
          (b = o("button")),
          (v = m("<")),
          (p = w()),
          (E = o("select"));
        for (let U = 0; U < K.length; U += 1) K[U].c();
        ($ = w()),
          (I = o("button")),
          (h = m(">")),
          (D = w()),
          (V = o("div")),
          (T = o("div")),
          (x = o("div")),
          (N = o("div")),
          (B = m("Pos")),
          (G = w()),
          (A = o("div")),
          (k = m("Player")),
          (C = w()),
          (O = o("div")),
          (F = m("Points")),
          (z = w()),
          (L = o("div")),
          (Y = m(" ")),
          (te = w()),
          ee.c(),
          this.h();
      },
      l(U) {
        J && J.l(U), (t = y(U)), (s = n(U, "DIV", { class: !0 }));
        var j = i(s);
        a = n(j, "DIV", { class: !0 });
        var H = i(a);
        f = n(H, "DIV", { class: !0 });
        var S = i(f);
        u = n(S, "DIV", { class: !0 });
        var M = i(u);
        d = n(M, "DIV", { class: !0 });
        var se = i(d);
        b = n(se, "BUTTON", { class: !0 });
        var Ve = i(b);
        (v = _(Ve, "<")),
          Ve.forEach(r),
          (p = y(se)),
          (E = n(se, "SELECT", { class: !0 }));
        var ke = i(E);
        for (let xe = 0; xe < K.length; xe += 1) K[xe].l(ke);
        ke.forEach(r), ($ = y(se)), (I = n(se, "BUTTON", { class: !0 }));
        var re = i(I);
        (h = _(re, ">")),
          re.forEach(r),
          se.forEach(r),
          M.forEach(r),
          S.forEach(r),
          (D = y(H)),
          (V = n(H, "DIV", { class: !0 }));
        var ye = i(V);
        T = n(ye, "DIV", { class: !0 });
        var le = i(T);
        x = n(le, "DIV", { class: !0 });
        var be = i(x);
        N = n(be, "DIV", { class: !0 });
        var R = i(N);
        (B = _(R, "Pos")),
          R.forEach(r),
          (G = y(be)),
          (A = n(be, "DIV", { class: !0 }));
        var oe = i(A);
        (k = _(oe, "Player")),
          oe.forEach(r),
          (C = y(be)),
          (O = n(be, "DIV", { class: !0 }));
        var X = i(O);
        (F = _(X, "Points")),
          X.forEach(r),
          (z = y(be)),
          (L = n(be, "DIV", { class: !0 }));
        var Ie = i(L);
        (Y = _(Ie, " ")),
          Ie.forEach(r),
          be.forEach(r),
          (te = y(le)),
          ee.l(le),
          le.forEach(r),
          ye.forEach(r),
          H.forEach(r),
          j.forEach(r),
          this.h();
      },
      h() {
        c(
          b,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
        ),
          (b.disabled = g = l[0] === 1),
          c(
            E,
            "class",
            "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
          ),
          l[0] === void 0 && ls(() => l[14].call(E)),
          c(
            I,
            "class",
            "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
          ),
          (I.disabled = P = l[0] === 38),
          c(d, "class", "flex items-center mr-8"),
          c(u, "class", "flex items-center ml-4"),
          c(f, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
          c(N, "class", "w-1/6 text-center mx-4"),
          c(A, "class", "w-3/6 px-4"),
          c(O, "class", "w-1/6 text-center"),
          c(L, "class", "w-1/6 text-center"),
          c(
            x,
            "class",
            "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
          ),
          c(T, "class", "overflow-x-auto flex-1"),
          c(
            V,
            "class",
            "flex flex-col space-y-4 mt-4 text-lg text-xs md:text-base"
          ),
          c(a, "class", "flex flex-col space-y-4 text-xs md:text-base"),
          c(s, "class", "container-fluid mt-4 mb-4");
      },
      m(U, j) {
        J && J.m(U, j),
          me(U, t, j),
          me(U, s, j),
          e(s, a),
          e(a, f),
          e(f, u),
          e(u, d),
          e(d, b),
          e(b, v),
          e(d, p),
          e(d, E);
        for (let H = 0; H < K.length; H += 1) K[H] && K[H].m(E, null);
        gt(E, l[0], !0),
          e(d, $),
          e(d, I),
          e(I, h),
          e(a, D),
          e(a, V),
          e(V, T),
          e(T, x),
          e(x, N),
          e(N, B),
          e(x, G),
          e(x, A),
          e(A, k),
          e(x, C),
          e(x, O),
          e(O, F),
          e(x, z),
          e(x, L),
          e(L, Y),
          e(T, te),
          q[Z].m(T, null),
          (ue = !0),
          ne ||
            ((ce = [
              we(b, "click", l[13]),
              we(E, "change", l[14]),
              we(I, "click", l[15]),
            ]),
            (ne = !0));
      },
      p(U, j) {
        if (
          (U[2]
            ? J
              ? (J.p(U, j), j & 4 && de(J, 1))
              : ((J = Va(U)), J.c(), de(J, 1), J.m(t.parentNode, t))
            : J &&
              (Ot(),
              he(J, 1, 1, () => {
                J = null;
              }),
              St()),
          (!ue || (j & 129 && g !== (g = U[0] === 1))) && (b.disabled = g),
          j & 128)
        ) {
          ie = U[7];
          let S;
          for (S = 0; S < ie.length; S += 1) {
            const M = Da(U, ie, S);
            K[S] ? K[S].p(M, j) : ((K[S] = Ta(M)), K[S].c(), K[S].m(E, null));
          }
          for (; S < K.length; S += 1) K[S].d(1);
          K.length = ie.length;
        }
        j & 129 && gt(E, U[0]),
          (!ue || (j & 129 && P !== (P = U[0] === 38))) && (I.disabled = P);
        let H = Z;
        (Z = ve(U)),
          Z === H
            ? q[Z].p(U, j)
            : (Ot(),
              he(q[H], 1, 1, () => {
                q[H] = null;
              }),
              St(),
              (ee = q[Z]),
              ee ? ee.p(U, j) : ((ee = q[Z] = ae[Z](U)), ee.c()),
              de(ee, 1),
              ee.m(T, null));
      },
      i(U) {
        ue || (de(J), de(ee), (ue = !0));
      },
      o(U) {
        he(J), he(ee), (ue = !1);
      },
      d(U) {
        J && J.d(U),
          U && r(t),
          U && r(s),
          il(K, U),
          q[Z].d(),
          (ne = !1),
          Tl(ce);
      },
    }
  );
}
function sr(l) {
  let t, s;
  return (
    (t = new Ls({})),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(a) {
        ze(t.$$.fragment, a);
      },
      m(a, f) {
        Fe(t, a, f), (s = !0);
      },
      p: at,
      i(a) {
        s || (de(t.$$.fragment, a), (s = !0));
      },
      o(a) {
        he(t.$$.fragment, a), (s = !1);
      },
      d(a) {
        Ue(t, a);
      },
    }
  );
}
function Va(l) {
  let t, s;
  return (
    (t = new tr({
      props: {
        playerTeam: l[3],
        opponentTeam: l[4],
        seasonName: l[8],
        showModal: l[2],
        closeDetailModal: l[11],
        gameweekData: l[5],
      },
    })),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(a) {
        ze(t.$$.fragment, a);
      },
      m(a, f) {
        Fe(t, a, f), (s = !0);
      },
      p(a, f) {
        const u = {};
        f & 8 && (u.playerTeam = a[3]),
          f & 16 && (u.opponentTeam = a[4]),
          f & 4 && (u.showModal = a[2]),
          f & 32 && (u.gameweekData = a[5]),
          t.$set(u);
      },
      i(a) {
        s || (de(t.$$.fragment, a), (s = !0));
      },
      o(a) {
        he(t.$$.fragment, a), (s = !1);
      },
      d(a) {
        Ue(t, a);
      },
    }
  );
}
function Ta(l) {
  let t,
    s,
    a = l[27] + "",
    f;
  return {
    c() {
      (t = o("option")), (s = m("Gameweek ")), (f = m(a)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var d = i(t);
      (s = _(d, "Gameweek ")), (f = _(d, a)), d.forEach(r), this.h();
    },
    h() {
      (t.__value = l[27]), (t.value = t.__value);
    },
    m(u, d) {
      me(u, t, d), e(t, s), e(t, f);
    },
    p: at,
    d(u) {
      u && r(t);
    },
  };
}
function ar(l) {
  let t, s;
  return {
    c() {
      (t = o("p")), (s = m("No data.")), this.h();
    },
    l(a) {
      t = n(a, "P", { class: !0 });
      var f = i(t);
      (s = _(f, "No data.")), f.forEach(r), this.h();
    },
    h() {
      c(t, "class", "w-100 p-4");
    },
    m(a, f) {
      me(a, t, f), e(t, s);
    },
    p: at,
    i: at,
    o: at,
    d(a) {
      a && r(t);
    },
  };
}
function rr(l) {
  let t,
    s,
    a = l[1],
    f = [];
  for (let d = 0; d < a.length; d += 1) f[d] = Pa(xa(l, a, d));
  const u = (d) =>
    he(f[d], 1, 1, () => {
      f[d] = null;
    });
  return {
    c() {
      for (let d = 0; d < f.length; d += 1) f[d].c();
      t = cl();
    },
    l(d) {
      for (let b = 0; b < f.length; b += 1) f[b].l(d);
      t = cl();
    },
    m(d, b) {
      for (let v = 0; v < f.length; v += 1) f[v] && f[v].m(d, b);
      me(d, t, b), (s = !0);
    },
    p(d, b) {
      if (b & 1026) {
        a = d[1];
        let v;
        for (v = 0; v < a.length; v += 1) {
          const g = xa(d, a, v);
          f[v]
            ? (f[v].p(g, b), de(f[v], 1))
            : ((f[v] = Pa(g)), f[v].c(), de(f[v], 1), f[v].m(t.parentNode, t));
        }
        for (Ot(), v = a.length; v < f.length; v += 1) u(v);
        St();
      }
    },
    i(d) {
      if (!s) {
        for (let b = 0; b < a.length; b += 1) de(f[b]);
        s = !0;
      }
    },
    o(d) {
      f = f.filter(Boolean);
      for (let b = 0; b < f.length; b += 1) he(f[b]);
      s = !1;
    },
    d(d) {
      il(f, d), d && r(t);
    },
  };
}
function Pa(l) {
  let t,
    s,
    a = _a(l[24].player.position) + "",
    f,
    u,
    d,
    b,
    v =
      l[24].player.firstName.length > 2
        ? l[24].player.firstName.substring(0, 1) + "."
        : "",
    g,
    p,
    E = l[24].player.lastName + "",
    $,
    I,
    h,
    P,
    D = l[24].points + "",
    V,
    T,
    x,
    N,
    B,
    G,
    A,
    k,
    C,
    O,
    F;
  G = new qa({ props: { className: "w-6 mr-2" } });
  function z() {
    return l[16](l[24]);
  }
  return {
    c() {
      (t = o("div")),
        (s = o("div")),
        (f = m(a)),
        (u = w()),
        (d = o("div")),
        (b = o("a")),
        (g = m(v)),
        (p = w()),
        ($ = m(E)),
        (h = w()),
        (P = o("div")),
        (V = m(D)),
        (T = w()),
        (x = o("div")),
        (N = o("button")),
        (B = o("span")),
        Be(G.$$.fragment),
        (A = m("View Details")),
        (k = w()),
        this.h();
    },
    l(L) {
      t = n(L, "DIV", { class: !0 });
      var Y = i(t);
      s = n(Y, "DIV", { class: !0 });
      var te = i(s);
      (f = _(te, a)),
        te.forEach(r),
        (u = y(Y)),
        (d = n(Y, "DIV", { class: !0 }));
      var Z = i(d);
      b = n(Z, "A", { href: !0 });
      var ee = i(b);
      (g = _(ee, v)),
        (p = y(ee)),
        ($ = _(ee, E)),
        ee.forEach(r),
        Z.forEach(r),
        (h = y(Y)),
        (P = n(Y, "DIV", { class: !0 }));
      var ue = i(P);
      (V = _(ue, D)),
        ue.forEach(r),
        (T = y(Y)),
        (x = n(Y, "DIV", { class: !0 }));
      var ne = i(x);
      N = n(ne, "BUTTON", {});
      var ce = i(N);
      B = n(ce, "SPAN", { class: !0 });
      var J = i(B);
      ze(G.$$.fragment, J),
        (A = _(J, "View Details")),
        J.forEach(r),
        ce.forEach(r),
        ne.forEach(r),
        (k = y(Y)),
        Y.forEach(r),
        this.h();
    },
    h() {
      c(s, "class", "w-1/6 text-center"),
        c(b, "href", (I = `/player?id=${l[24].player.id}`)),
        c(d, "class", "w-3/6 text-center"),
        c(P, "class", "w-1/6 text-center"),
        c(B, "class", "flex items-center"),
        c(x, "class", "w-1/6 text-center"),
        c(
          t,
          "class",
          "flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer"
        );
    },
    m(L, Y) {
      me(L, t, Y),
        e(t, s),
        e(s, f),
        e(t, u),
        e(t, d),
        e(d, b),
        e(b, g),
        e(b, p),
        e(b, $),
        e(t, h),
        e(t, P),
        e(P, V),
        e(t, T),
        e(t, x),
        e(x, N),
        e(N, B),
        Fe(G, B, null),
        e(B, A),
        e(t, k),
        (C = !0),
        O || ((F = we(N, "click", z)), (O = !0));
    },
    p(L, Y) {
      (l = L),
        (!C || Y & 2) && a !== (a = _a(l[24].player.position) + "") && Q(f, a),
        (!C || Y & 2) &&
          v !==
            (v =
              l[24].player.firstName.length > 2
                ? l[24].player.firstName.substring(0, 1) + "."
                : "") &&
          Q(g, v),
        (!C || Y & 2) && E !== (E = l[24].player.lastName + "") && Q($, E),
        (!C || (Y & 2 && I !== (I = `/player?id=${l[24].player.id}`))) &&
          c(b, "href", I),
        (!C || Y & 2) && D !== (D = l[24].points + "") && Q(V, D);
    },
    i(L) {
      C || (de(G.$$.fragment, L), (C = !0));
    },
    o(L) {
      he(G.$$.fragment, L), (C = !1);
    },
    d(L) {
      L && r(t), Ue(G), (O = !1), F();
    },
  };
}
function or(l) {
  let t, s, a, f;
  const u = [sr, lr],
    d = [];
  function b(v, g) {
    return v[6] ? 0 : 1;
  }
  return (
    (t = b(l)),
    (s = d[t] = u[t](l)),
    {
      c() {
        s.c(), (a = cl());
      },
      l(v) {
        s.l(v), (a = cl());
      },
      m(v, g) {
        d[t].m(v, g), me(v, a, g), (f = !0);
      },
      p(v, [g]) {
        let p = t;
        (t = b(v)),
          t === p
            ? d[t].p(v, g)
            : (Ot(),
              he(d[p], 1, 1, () => {
                d[p] = null;
              }),
              St(),
              (s = d[t]),
              s ? s.p(v, g) : ((s = d[t] = u[t](v)), s.c()),
              de(s, 1),
              s.m(a.parentNode, a));
      },
      i(v) {
        f || (de(s), (f = !0));
      },
      o(v) {
        he(s), (f = !1);
      },
      d(v) {
        d[t].d(v), v && r(a);
      },
    }
  );
}
function nr(l, t, s) {
  let a;
  Wa(l, Hs, (F) => s(12, (a = F)));
  let f,
    u,
    d,
    b = [],
    v,
    g = [],
    p = 1,
    E = Array.from({ length: 38 }, (F, z) => z + 1),
    $ = [],
    I = !1,
    h,
    P,
    D,
    V,
    T = !0;
  Os(async () => {
    try {
      await Yt.sync(),
        await fl.sync(),
        await Fl.sync(),
        await Hs.sync(),
        await ma.sync(),
        (f = Yt.subscribe((F) => {
          b = F.sort((z, L) => z.friendlyName.localeCompare(L.friendlyName));
        })),
        (u = fl.subscribe((F) => {
          v = F;
        })),
        (d = Fl.subscribe((F) => {
          g = F;
        })),
        await x(a?.identity?.getPrincipal());
    } catch (F) {
      ss.show("Error fetching gameweek points.", "error"),
        console.error("Error fetching gameweek points:", F);
    } finally {
      s(6, (T = !1));
    }
  }),
    Ms(() => {
      f?.(), d?.(), u?.();
    });
  async function x(F) {
    if (!F) return;
    let z = await Ua.getFantasyTeamForGameweek(F?.toText(), p);
    s(1, ($ = await ma.getGameweekPlayers(z, p)));
  }
  const N = (F) => {
    s(0, (p = Math.max(1, Math.min(38, p + F))));
  };
  async function B(F) {
    try {
      s(5, (D = F));
      let z = F.player.teamId;
      s(3, (h = b.find((te) => te.id === z)));
      let L = g.find(
          (te) =>
            te.gameweek === F.gameweek &&
            (te.homeTeamId === z || te.awayTeamId === z)
        ),
        Y = L?.homeTeamId === z ? L?.awayTeamId : L?.homeTeamId;
      s(4, (P = b.find((te) => te.id === Y))), s(2, (I = !0));
    } catch (z) {
      ss.show("Error loading gameweek detail.", "error"),
        console.error("Error loading gameweek detail:", z);
    }
  }
  function G() {
    s(2, (I = !1));
  }
  const A = () => N(-1);
  function k() {
    (p = ts(this)), s(0, p), s(7, E);
  }
  const C = () => N(1),
    O = (F) => B(F);
  return (
    (l.$$.update = () => {
      l.$$.dirty & 4096 &&
        a?.identity?.getPrincipal() &&
        x(a?.identity?.getPrincipal());
    }),
    [p, $, I, h, P, D, T, E, V, N, B, G, a, A, k, C, O]
  );
}
class ir extends ms {
  constructor(t) {
    super(), _s(this, t, nr, or, hs, {});
  }
}
function Na(l, t, s) {
  const a = l.slice();
  return (a[36] = t[s]), a;
}
function Ca(l, t, s) {
  const a = l.slice();
  return (a[39] = t[s]), a;
}
function $a(l, t, s) {
  const a = l.slice();
  return (a[42] = t[s]), a;
}
function cr(l) {
  let t,
    s,
    a,
    f,
    u,
    d,
    b,
    v,
    g,
    p,
    E,
    $,
    I,
    h,
    P,
    D,
    V,
    T,
    x,
    N,
    B,
    G,
    A,
    k,
    C,
    O,
    F,
    z,
    L,
    Y,
    te,
    Z,
    ee,
    ue,
    ne,
    ce = l[1] === 1 && Oa(l),
    J = l[1] === 2 && Ga(l);
  function ie(q, ve) {
    return q[5] && q[5].entries.length > 0 ? ur : dr;
  }
  let K = ie(l),
    ae = K(l);
  return {
    c() {
      (t = o("div")),
        (s = o("div")),
        (a = o("div")),
        (f = o("div")),
        (u = o("div")),
        (d = o("button")),
        (b = m("<")),
        (v = w()),
        (g = o("select")),
        (p = o("option")),
        (E = m("Weekly")),
        ($ = o("option")),
        (I = m("Monthly")),
        (h = o("option")),
        (P = m("Season")),
        (D = w()),
        (V = o("button")),
        (T = m(">")),
        (x = w()),
        ce && ce.c(),
        (N = w()),
        J && J.c(),
        (B = w()),
        (G = o("div")),
        (A = o("div")),
        (k = o("div")),
        (C = o("div")),
        (O = m("Pos")),
        (F = w()),
        (z = o("div")),
        (L = m("Manager")),
        (Y = w()),
        (te = o("div")),
        (Z = m("Points")),
        (ee = w()),
        ae.c(),
        this.h();
    },
    l(q) {
      t = n(q, "DIV", { class: !0 });
      var ve = i(t);
      s = n(ve, "DIV", { class: !0 });
      var U = i(s);
      a = n(U, "DIV", { class: !0 });
      var j = i(a);
      f = n(j, "DIV", { class: !0 });
      var H = i(f);
      u = n(H, "DIV", { class: !0 });
      var S = i(u);
      d = n(S, "BUTTON", { class: !0 });
      var M = i(d);
      (b = _(M, "<")),
        M.forEach(r),
        (v = y(S)),
        (g = n(S, "SELECT", { class: !0 }));
      var se = i(g);
      p = n(se, "OPTION", {});
      var Ve = i(p);
      (E = _(Ve, "Weekly")), Ve.forEach(r), ($ = n(se, "OPTION", {}));
      var ke = i($);
      (I = _(ke, "Monthly")), ke.forEach(r), (h = n(se, "OPTION", {}));
      var re = i(h);
      (P = _(re, "Season")),
        re.forEach(r),
        se.forEach(r),
        (D = y(S)),
        (V = n(S, "BUTTON", { class: !0 }));
      var ye = i(V);
      (T = _(ye, ">")),
        ye.forEach(r),
        S.forEach(r),
        (x = y(H)),
        ce && ce.l(H),
        (N = y(H)),
        J && J.l(H),
        H.forEach(r),
        j.forEach(r),
        (B = y(U)),
        (G = n(U, "DIV", { class: !0 }));
      var le = i(G);
      A = n(le, "DIV", { class: !0 });
      var be = i(A);
      k = n(be, "DIV", { class: !0 });
      var R = i(k);
      C = n(R, "DIV", { class: !0 });
      var oe = i(C);
      (O = _(oe, "Pos")),
        oe.forEach(r),
        (F = y(R)),
        (z = n(R, "DIV", { class: !0 }));
      var X = i(z);
      (L = _(X, "Manager")),
        X.forEach(r),
        (Y = y(R)),
        (te = n(R, "DIV", { class: !0 }));
      var Ie = i(te);
      (Z = _(Ie, "Points")),
        Ie.forEach(r),
        R.forEach(r),
        (ee = y(be)),
        ae.l(be),
        be.forEach(r),
        le.forEach(r),
        U.forEach(r),
        ve.forEach(r),
        this.h();
    },
    h() {
      c(
        d,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (p.__value = 1),
        (p.value = p.__value),
        ($.__value = 2),
        ($.value = $.__value),
        (h.__value = 3),
        (h.value = h.__value),
        c(
          g,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        l[1] === void 0 && ls(() => l[16].call(g)),
        c(
          V,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        c(u, "class", "md:flex md:items-center md:mt-0 ml-2 md:ml-4"),
        c(
          f,
          "class",
          "flex flex-col sm:flex-row justify-between sm:items-center"
        ),
        c(a, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        c(C, "class", "w-1/6 px-4"),
        c(z, "class", "w-1/3 px-4"),
        c(te, "class", "w-1/2 px-4"),
        c(
          k,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        c(A, "class", "overflow-x-auto flex-1"),
        c(G, "class", "flex flex-col space-y-4 mt-4 text-xs md:text-base"),
        c(s, "class", "flex flex-col space-y-4 text-xs md:text-base"),
        c(t, "class", "container-fluid mt-4");
    },
    m(q, ve) {
      me(q, t, ve),
        e(t, s),
        e(s, a),
        e(a, f),
        e(f, u),
        e(u, d),
        e(d, b),
        e(u, v),
        e(u, g),
        e(g, p),
        e(p, E),
        e(g, $),
        e($, I),
        e(g, h),
        e(h, P),
        gt(g, l[1], !0),
        e(u, D),
        e(u, V),
        e(V, T),
        e(f, x),
        ce && ce.m(f, null),
        e(f, N),
        J && J.m(f, null),
        e(s, B),
        e(s, G),
        e(G, A),
        e(A, k),
        e(k, C),
        e(C, O),
        e(k, F),
        e(k, z),
        e(z, L),
        e(k, Y),
        e(k, te),
        e(te, Z),
        e(A, ee),
        ae.m(A, null),
        ue ||
          ((ne = [
            we(d, "click", l[15]),
            we(g, "change", l[16]),
            we(V, "click", l[17]),
          ]),
          (ue = !0));
    },
    p(q, ve) {
      ve[0] & 2 && gt(g, q[1]),
        q[1] === 1
          ? ce
            ? ce.p(q, ve)
            : ((ce = Oa(q)), ce.c(), ce.m(f, N))
          : ce && (ce.d(1), (ce = null)),
        q[1] === 2
          ? J
            ? J.p(q, ve)
            : ((J = Ga(q)), J.c(), J.m(f, null))
          : J && (J.d(1), (J = null)),
        K === (K = ie(q)) && ae
          ? ae.p(q, ve)
          : (ae.d(1), (ae = K(q)), ae && (ae.c(), ae.m(A, null)));
    },
    i: at,
    o: at,
    d(q) {
      q && r(t), ce && ce.d(), J && J.d(), ae.d(), (ue = !1), Tl(ne);
    },
  };
}
function fr(l) {
  let t, s;
  return (
    (t = new Ls({})),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(a) {
        ze(t.$$.fragment, a);
      },
      m(a, f) {
        Fe(t, a, f), (s = !0);
      },
      p: at,
      i(a) {
        s || (de(t.$$.fragment, a), (s = !0));
      },
      o(a) {
        he(t.$$.fragment, a), (s = !1);
      },
      d(a) {
        Ue(t, a);
      },
    }
  );
}
function Oa(l) {
  let t,
    s,
    a,
    f,
    u,
    d,
    b,
    v,
    g,
    p,
    E,
    $,
    I = l[9],
    h = [];
  for (let P = 0; P < I.length; P += 1) h[P] = Sa($a(l, I, P));
  return {
    c() {
      (t = o("div")),
        (s = o("button")),
        (a = m("<")),
        (u = w()),
        (d = o("select"));
      for (let P = 0; P < h.length; P += 1) h[P].c();
      (b = w()), (v = o("button")), (g = m(">")), this.h();
    },
    l(P) {
      t = n(P, "DIV", { class: !0 });
      var D = i(t);
      s = n(D, "BUTTON", { class: !0 });
      var V = i(s);
      (a = _(V, "<")),
        V.forEach(r),
        (u = y(D)),
        (d = n(D, "SELECT", { class: !0 }));
      var T = i(d);
      for (let N = 0; N < h.length; N += 1) h[N].l(T);
      T.forEach(r), (b = y(D)), (v = n(D, "BUTTON", { class: !0 }));
      var x = i(v);
      (g = _(x, ">")), x.forEach(r), D.forEach(r), this.h();
    },
    h() {
      c(
        s,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (s.disabled = f = l[2] === 1),
        c(
          d,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px] md:min-w-[140px]"
        ),
        l[2] === void 0 && ls(() => l[19].call(d)),
        c(
          v,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (v.disabled = p = l[2] === 38),
        c(t, "class", "md:flex md:items-center mt-2 sm:mt-0 ml-2");
    },
    m(P, D) {
      me(P, t, D), e(t, s), e(s, a), e(t, u), e(t, d);
      for (let V = 0; V < h.length; V += 1) h[V] && h[V].m(d, null);
      gt(d, l[2], !0),
        e(t, b),
        e(t, v),
        e(v, g),
        E ||
          (($ = [
            we(s, "click", l[18]),
            we(d, "change", l[19]),
            we(v, "click", l[20]),
          ]),
          (E = !0));
    },
    p(P, D) {
      if (
        (D[0] & 516 && f !== (f = P[2] === 1) && (s.disabled = f), D[0] & 512)
      ) {
        I = P[9];
        let V;
        for (V = 0; V < I.length; V += 1) {
          const T = $a(P, I, V);
          h[V] ? h[V].p(T, D) : ((h[V] = Sa(T)), h[V].c(), h[V].m(d, null));
        }
        for (; V < h.length; V += 1) h[V].d(1);
        h.length = I.length;
      }
      D[0] & 516 && gt(d, P[2]),
        D[0] & 516 && p !== (p = P[2] === 38) && (v.disabled = p);
    },
    d(P) {
      P && r(t), il(h, P), (E = !1), Tl($);
    },
  };
}
function Sa(l) {
  let t,
    s,
    a = l[42] + "",
    f;
  return {
    c() {
      (t = o("option")), (s = m("Gameweek ")), (f = m(a)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var d = i(t);
      (s = _(d, "Gameweek ")), (f = _(d, a)), d.forEach(r), this.h();
    },
    h() {
      (t.__value = l[42]), (t.value = t.__value);
    },
    m(u, d) {
      me(u, t, d), e(t, s), e(t, f);
    },
    p: at,
    d(u) {
      u && r(t);
    },
  };
}
function Ga(l) {
  let t,
    s,
    a,
    f,
    u,
    d,
    b,
    v,
    g,
    p,
    E,
    $,
    I,
    h,
    P,
    D,
    V,
    T,
    x,
    N,
    B,
    G,
    A,
    k,
    C,
    O,
    F,
    z,
    L,
    Y,
    te,
    Z,
    ee,
    ue,
    ne,
    ce,
    J,
    ie,
    K,
    ae,
    q,
    ve,
    U,
    j = l[0],
    H = [];
  for (let S = 0; S < j.length; S += 1) H[S] = Aa(Ca(l, j, S));
  return {
    c() {
      (t = o("div")),
        (s = o("button")),
        (a = m("<")),
        (f = w()),
        (u = o("select"));
      for (let S = 0; S < H.length; S += 1) H[S].c();
      (d = w()),
        (b = o("button")),
        (v = m(">")),
        (g = w()),
        (p = o("div")),
        (E = o("button")),
        ($ = m("<")),
        (I = w()),
        (h = o("select")),
        (P = o("option")),
        (D = m("January")),
        (V = o("option")),
        (T = m("February")),
        (x = o("option")),
        (N = m("March")),
        (B = o("option")),
        (G = m("April")),
        (A = o("option")),
        (k = m("May")),
        (C = o("option")),
        (O = m("June")),
        (F = o("option")),
        (z = m("July")),
        (L = o("option")),
        (Y = m("August")),
        (te = o("option")),
        (Z = m("September")),
        (ee = o("option")),
        (ue = m("October")),
        (ne = o("option")),
        (ce = m("November")),
        (J = o("option")),
        (ie = m("December")),
        (K = w()),
        (ae = o("button")),
        (q = m(">")),
        this.h();
    },
    l(S) {
      t = n(S, "DIV", { class: !0 });
      var M = i(t);
      s = n(M, "BUTTON", { class: !0 });
      var se = i(s);
      (a = _(se, "<")),
        se.forEach(r),
        (f = y(M)),
        (u = n(M, "SELECT", { class: !0 }));
      var Ve = i(u);
      for (let Ge = 0; Ge < H.length; Ge += 1) H[Ge].l(Ve);
      Ve.forEach(r), (d = y(M)), (b = n(M, "BUTTON", { class: !0 }));
      var ke = i(b);
      (v = _(ke, ">")),
        ke.forEach(r),
        M.forEach(r),
        (g = y(S)),
        (p = n(S, "DIV", { class: !0 }));
      var re = i(p);
      E = n(re, "BUTTON", { class: !0 });
      var ye = i(E);
      ($ = _(ye, "<")),
        ye.forEach(r),
        (I = y(re)),
        (h = n(re, "SELECT", { class: !0 }));
      var le = i(h);
      P = n(le, "OPTION", {});
      var be = i(P);
      (D = _(be, "January")), be.forEach(r), (V = n(le, "OPTION", {}));
      var R = i(V);
      (T = _(R, "February")), R.forEach(r), (x = n(le, "OPTION", {}));
      var oe = i(x);
      (N = _(oe, "March")), oe.forEach(r), (B = n(le, "OPTION", {}));
      var X = i(B);
      (G = _(X, "April")), X.forEach(r), (A = n(le, "OPTION", {}));
      var Ie = i(A);
      (k = _(Ie, "May")), Ie.forEach(r), (C = n(le, "OPTION", {}));
      var xe = i(C);
      (O = _(xe, "June")), xe.forEach(r), (F = n(le, "OPTION", {}));
      var Ce = i(F);
      (z = _(Ce, "July")), Ce.forEach(r), (L = n(le, "OPTION", {}));
      var $e = i(L);
      (Y = _($e, "August")), $e.forEach(r), (te = n(le, "OPTION", {}));
      var We = i(te);
      (Z = _(We, "September")), We.forEach(r), (ee = n(le, "OPTION", {}));
      var Te = i(ee);
      (ue = _(Te, "October")), Te.forEach(r), (ne = n(le, "OPTION", {}));
      var ge = i(ne);
      (ce = _(ge, "November")), ge.forEach(r), (J = n(le, "OPTION", {}));
      var rt = i(J);
      (ie = _(rt, "December")),
        rt.forEach(r),
        le.forEach(r),
        (K = y(re)),
        (ae = n(re, "BUTTON", { class: !0 }));
      var wt = i(ae);
      (q = _(wt, ">")), wt.forEach(r), re.forEach(r), this.h();
    },
    h() {
      c(
        s,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        c(
          u,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        l[4] === void 0 && ls(() => l[22].call(u)),
        c(
          b,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        c(t, "class", "sm:flex sm:items-center sm:mt-0 mt-2 ml-2"),
        c(
          E,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
        ),
        (P.__value = 1),
        (P.value = P.__value),
        (V.__value = 2),
        (V.value = V.__value),
        (x.__value = 3),
        (x.value = x.__value),
        (B.__value = 4),
        (B.value = B.__value),
        (A.__value = 5),
        (A.value = A.__value),
        (C.__value = 6),
        (C.value = C.__value),
        (F.__value = 7),
        (F.value = F.__value),
        (L.__value = 8),
        (L.value = L.__value),
        (te.__value = 9),
        (te.value = te.__value),
        (ee.__value = 10),
        (ee.value = ee.__value),
        (ne.__value = 11),
        (ne.value = ne.__value),
        (J.__value = 12),
        (J.value = J.__value),
        c(
          h,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px] md:min-w-[150px]"
        ),
        l[3] === void 0 && ls(() => l[25].call(h)),
        c(
          ae,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        c(p, "class", "sm:flex sm:items-center sm:mt-0 mt-2 ml-2");
    },
    m(S, M) {
      me(S, t, M), e(t, s), e(s, a), e(t, f), e(t, u);
      for (let se = 0; se < H.length; se += 1) H[se] && H[se].m(u, null);
      gt(u, l[4], !0),
        e(t, d),
        e(t, b),
        e(b, v),
        me(S, g, M),
        me(S, p, M),
        e(p, E),
        e(E, $),
        e(p, I),
        e(p, h),
        e(h, P),
        e(P, D),
        e(h, V),
        e(V, T),
        e(h, x),
        e(x, N),
        e(h, B),
        e(B, G),
        e(h, A),
        e(A, k),
        e(h, C),
        e(C, O),
        e(h, F),
        e(F, z),
        e(h, L),
        e(L, Y),
        e(h, te),
        e(te, Z),
        e(h, ee),
        e(ee, ue),
        e(h, ne),
        e(ne, ce),
        e(h, J),
        e(J, ie),
        gt(h, l[3], !0),
        e(p, K),
        e(p, ae),
        e(ae, q),
        ve ||
          ((U = [
            we(s, "click", l[21]),
            we(u, "change", l[22]),
            we(b, "click", l[23]),
            we(E, "click", l[24]),
            we(h, "change", l[25]),
            we(ae, "click", l[26]),
          ]),
          (ve = !0));
    },
    p(S, M) {
      if (M[0] & 1) {
        j = S[0];
        let se;
        for (se = 0; se < j.length; se += 1) {
          const Ve = Ca(S, j, se);
          H[se]
            ? H[se].p(Ve, M)
            : ((H[se] = Aa(Ve)), H[se].c(), H[se].m(u, null));
        }
        for (; se < H.length; se += 1) H[se].d(1);
        H.length = j.length;
      }
      M[0] & 17 && gt(u, S[4]), M[0] & 8 && gt(h, S[3]);
    },
    d(S) {
      S && r(t), il(H, S), S && r(g), S && r(p), (ve = !1), Tl(U);
    },
  };
}
function Aa(l) {
  let t,
    s = l[39].friendlyName + "",
    a,
    f;
  return {
    c() {
      (t = o("option")), (a = m(s)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var d = i(t);
      (a = _(d, s)), d.forEach(r), this.h();
    },
    h() {
      (t.__value = f = l[39].id), (t.value = t.__value);
    },
    m(u, d) {
      me(u, t, d), e(t, a);
    },
    p(u, d) {
      d[0] & 1 && s !== (s = u[39].friendlyName + "") && Q(a, s),
        d[0] & 1 &&
          f !== (f = u[39].id) &&
          ((t.__value = f), (t.value = t.__value));
    },
    d(u) {
      u && r(t);
    },
  };
}
function dr(l) {
  let t, s;
  return {
    c() {
      (t = o("p")), (s = m("No leaderboard data.")), this.h();
    },
    l(a) {
      t = n(a, "P", { class: !0 });
      var f = i(t);
      (s = _(f, "No leaderboard data.")), f.forEach(r), this.h();
    },
    h() {
      c(t, "class", "w-100 p-4");
    },
    m(a, f) {
      me(a, t, f), e(t, s);
    },
    p: at,
    d(a) {
      a && r(t);
    },
  };
}
function ur(l) {
  let t,
    s,
    a,
    f,
    u,
    d,
    b,
    v,
    g,
    p,
    E,
    $,
    I,
    h,
    P,
    D = l[5].entries,
    V = [];
  for (let T = 0; T < D.length; T += 1) V[T] = Ha(Na(l, D, T));
  return {
    c() {
      for (let T = 0; T < V.length; T += 1) V[T].c();
      (t = w()),
        (s = o("div")),
        (a = o("button")),
        (f = m("Previous")),
        (d = w()),
        (b = o("span")),
        (v = m("Page ")),
        (g = m(l[7])),
        (p = w()),
        (E = o("button")),
        ($ = m("Next")),
        this.h();
    },
    l(T) {
      for (let A = 0; A < V.length; A += 1) V[A].l(T);
      (t = y(T)), (s = n(T, "DIV", { class: !0 }));
      var x = i(s);
      a = n(x, "BUTTON", { class: !0 });
      var N = i(a);
      (f = _(N, "Previous")),
        N.forEach(r),
        (d = y(x)),
        (b = n(x, "SPAN", { class: !0 }));
      var B = i(b);
      (v = _(B, "Page ")),
        (g = _(B, l[7])),
        B.forEach(r),
        (p = y(x)),
        (E = n(x, "BUTTON", { class: !0 }));
      var G = i(E);
      ($ = _(G, "Next")), G.forEach(r), x.forEach(r), this.h();
    },
    h() {
      (a.disabled = u = l[7] === 1),
        c(
          a,
          "class",
          "px-4 py-2 mx-2 fpl-button rounded disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed min-w-[100px] text-sm"
        ),
        c(b, "class", "px-4"),
        (E.disabled = I = l[7] >= l[8]),
        c(
          E,
          "class",
          "px-4 py-2 mx-2 fpl-button rounded disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed min-w-[100px] text-sm"
        ),
        c(s, "class", "flex justify-center items-center mt-4 mb-4");
    },
    m(T, x) {
      for (let N = 0; N < V.length; N += 1) V[N] && V[N].m(T, x);
      me(T, t, x),
        me(T, s, x),
        e(s, a),
        e(a, f),
        e(s, d),
        e(s, b),
        e(b, v),
        e(b, g),
        e(s, p),
        e(s, E),
        e(E, $),
        h || ((P = [we(a, "click", l[27]), we(E, "click", l[28])]), (h = !0));
    },
    p(T, x) {
      if (x[0] & 36) {
        D = T[5].entries;
        let N;
        for (N = 0; N < D.length; N += 1) {
          const B = Na(T, D, N);
          V[N]
            ? V[N].p(B, x)
            : ((V[N] = Ha(B)), V[N].c(), V[N].m(t.parentNode, t));
        }
        for (; N < V.length; N += 1) V[N].d(1);
        V.length = D.length;
      }
      x[0] & 128 && u !== (u = T[7] === 1) && (a.disabled = u),
        x[0] & 128 && Q(g, T[7]),
        x[0] & 384 && I !== (I = T[7] >= T[8]) && (E.disabled = I);
    },
    d(T) {
      il(V, T), T && r(t), T && r(s), (h = !1), Tl(P);
    },
  };
}
function Ha(l) {
  let t,
    s,
    a = l[36].positionText + "",
    f,
    u,
    d,
    b,
    v =
      (l[36].principalId === l[36].username ? "Unknown" : l[36].username) + "",
    g,
    p,
    E,
    $,
    I = l[36].points + "",
    h;
  return {
    c() {
      (t = o("div")),
        (s = o("div")),
        (f = m(a)),
        (u = w()),
        (d = o("div")),
        (b = o("a")),
        (g = m(v)),
        (E = w()),
        ($ = o("div")),
        (h = m(I)),
        this.h();
    },
    l(P) {
      t = n(P, "DIV", { class: !0 });
      var D = i(t);
      s = n(D, "DIV", { class: !0 });
      var V = i(s);
      (f = _(V, a)), V.forEach(r), (u = y(D)), (d = n(D, "DIV", { class: !0 }));
      var T = i(d);
      b = n(T, "A", { href: !0 });
      var x = i(b);
      (g = _(x, v)),
        x.forEach(r),
        T.forEach(r),
        (E = y(D)),
        ($ = n(D, "DIV", { class: !0 }));
      var N = i($);
      (h = _(N, I)), N.forEach(r), D.forEach(r), this.h();
    },
    h() {
      c(s, "class", "w-1/6 px-4"),
        c(b, "href", (p = `/manager?id=${l[36].principalId}&gw=${l[2]}`)),
        c(d, "class", "w-1/3 px-4"),
        c($, "class", "w-1/2 px-4"),
        c(
          t,
          "class",
          "flex items-center p-2 justify-between py-4 border-b border-gray-700 cursor-pointer"
        );
    },
    m(P, D) {
      me(P, t, D),
        e(t, s),
        e(s, f),
        e(t, u),
        e(t, d),
        e(d, b),
        e(b, g),
        e(t, E),
        e(t, $),
        e($, h);
    },
    p(P, D) {
      D[0] & 32 && a !== (a = P[36].positionText + "") && Q(f, a),
        D[0] & 32 &&
          v !==
            (v =
              (P[36].principalId === P[36].username
                ? "Unknown"
                : P[36].username) + "") &&
          Q(g, v),
        D[0] & 548 &&
          p !== (p = `/manager?id=${P[36].principalId}&gw=${P[2]}`) &&
          c(b, "href", p),
        D[0] & 32 && I !== (I = P[36].points + "") && Q(h, I);
    },
    d(P) {
      P && r(t);
    },
  };
}
function vr(l) {
  let t, s, a, f;
  const u = [fr, cr],
    d = [];
  function b(v, g) {
    return v[6] ? 0 : 1;
  }
  return (
    (t = b(l)),
    (s = d[t] = u[t](l)),
    {
      c() {
        s.c(), (a = cl());
      },
      l(v) {
        s.l(v), (a = cl());
      },
      m(v, g) {
        d[t].m(v, g), me(v, a, g), (f = !0);
      },
      p(v, g) {
        let p = t;
        (t = b(v)),
          t === p
            ? d[t].p(v, g)
            : (Ot(),
              he(d[p], 1, 1, () => {
                d[p] = null;
              }),
              St(),
              (s = d[t]),
              s ? s.p(v, g) : ((s = d[t] = u[t](v)), s.c()),
              de(s, 1),
              s.m(a.parentNode, a));
      },
      i(v) {
        f || (de(s), (f = !0));
      },
      o(v) {
        he(s), (f = !1);
      },
      d(v) {
        d[t].d(v), v && r(a);
      },
    }
  );
}
let mr = 25;
function _r(l, t, s) {
  let a,
    f,
    u = !0,
    d = [],
    b,
    v = 1,
    g = 1,
    p = 1,
    E,
    $ = Array.from({ length: 38 }, (K, ae) => ae + 1),
    I = 1,
    h,
    P,
    D,
    V = 0,
    T = 0;
  Os(async () => {
    try {
      await Yt.sync(),
        await fl.sync(),
        await Vl.syncWeeklyLeaderboard(),
        await Vl.syncMonthlyLeaderboards(),
        await Vl.syncSeasonLeaderboard(),
        (a = Yt.subscribe((ae) => {
          s(
            0,
            (d = ae.sort((q, ve) =>
              q.friendlyName.localeCompare(ve.friendlyName)
            ))
          );
        })),
        (f = fl.subscribe((ae) => {
          b = ae;
        })),
        s(4, (E = d[0].id)),
        (P = b?.activeGameweek ?? 1),
        (D = b?.focusGameweek ?? 1),
        s(2, (g = b?.focusGameweek ?? g)),
        s(3, (p = b?.activeMonth ?? p));
      let K = await Vl.getWeeklyLeaderboard();
      s(5, (h = K));
    } catch (K) {
      ss.show("Error fetching leaderboard data.", "error"),
        console.error("Error fetching leaderboard data:", K);
    } finally {
      s(6, (u = !1));
    }
  }),
    Ms(() => {
      a?.(), f?.();
    });
  async function x() {
    s(6, (u = !0));
    try {
      switch (v) {
        case 1:
          s(5, (h = await Vl.getWeeklyLeaderboardPage(g, I)));
          break;
        case 2:
          s(5, (h = await Vl.getMonthlyLeaderboard(E, p, I)));
          break;
        case 3:
          s(5, (h = await Vl.getSeasonLeaderboardPage(I)));
          break;
      }
    } catch (K) {
      ss.show("Error fetching leaderboard data.", "error"),
        console.error("Error fetching leaderboard data:", K);
    } finally {
      s(6, (u = !1));
    }
  }
  const N = (K) => {
    s(2, (g = Math.max(1, Math.min(38, g + K))));
  };
  function B(K) {
    s(3, (p += K)), p > 12 ? s(3, (p = 1)) : p < 1 && s(3, (p = 12)), x();
  }
  function G(K) {
    s(7, (I = Math.max(1, Math.min(V, I + K)))), x();
  }
  function A(K) {
    s(1, (v += K)), v > 3 ? s(1, (v = 1)) : v < 1 && s(1, (v = 3)), x();
  }
  function k(K) {
    (T = (T + K + d.length) % d.length), s(4, (E = d[T].id)), x();
  }
  const C = () => A(-1);
  function O() {
    (v = ts(this)), s(1, v);
  }
  const F = () => A(1),
    z = () => N(-1);
  function L() {
    (g = ts(this)), s(2, g), s(9, $);
  }
  const Y = () => N(1),
    te = () => k(-1);
  function Z() {
    (E = ts(this)), s(4, E), s(0, d);
  }
  const ee = () => k(1),
    ue = () => B(-1);
  function ne() {
    (p = ts(this)), s(3, p);
  }
  const ce = () => B(1),
    J = () => G(-1),
    ie = () => G(1);
  return (
    (l.$$.update = () => {
      l.$$.dirty[0] & 17 && (T = d.findIndex((K) => K.id === E)),
        l.$$.dirty[0] & 32 &&
          h &&
          h.totalEntries &&
          s(8, (V = Math.ceil(Number(h.totalEntries) / mr))),
        l.$$.dirty[0] & 30 && x();
    }),
    [
      d,
      v,
      g,
      p,
      E,
      h,
      u,
      I,
      V,
      $,
      N,
      B,
      G,
      A,
      k,
      C,
      O,
      F,
      z,
      L,
      Y,
      te,
      Z,
      ee,
      ue,
      ne,
      ce,
      J,
      ie,
    ]
  );
}
class hr extends ms {
  constructor(t) {
    super(), _s(this, t, _r, vr, hs, {}, null, [-1, -1]);
  }
}
function Ma(l, t, s) {
  const a = l.slice();
  return (a[15] = t[s]), (a[17] = s), a;
}
function ja(l, t, s) {
  const a = l.slice();
  return (a[18] = t[s]), a;
}
function La(l) {
  let t,
    s,
    a = l[18] + "",
    f;
  return {
    c() {
      (t = o("option")), (s = m("Gameweek ")), (f = m(a)), this.h();
    },
    l(u) {
      t = n(u, "OPTION", {});
      var d = i(t);
      (s = _(d, "Gameweek ")), (f = _(d, a)), d.forEach(r), this.h();
    },
    h() {
      (t.__value = l[18]), (t.value = t.__value);
    },
    m(u, d) {
      me(u, t, d), e(t, s), e(t, f);
    },
    p: at,
    d(u) {
      u && r(t);
    },
  };
}
function Ba(l) {
  let t,
    s,
    a = l[17] + 1 + "",
    f,
    u,
    d,
    b,
    v,
    g = l[15].friendlyName + "",
    p,
    E,
    $,
    I,
    h = l[15].played + "",
    P,
    D,
    V,
    T = l[15].wins + "",
    x,
    N,
    B,
    G = l[15].draws + "",
    A,
    k,
    C,
    O = l[15].losses + "",
    F,
    z,
    L,
    Y = l[15].goalsFor + "",
    te,
    Z,
    ee,
    ue = l[15].goalsAgainst + "",
    ne,
    ce,
    J,
    ie = l[15].goalsFor - l[15].goalsAgainst + "",
    K,
    ae,
    q,
    ve = l[15].points + "",
    U,
    j,
    H;
  return (
    (b = new as({
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
          (s = o("div")),
          (f = m(a)),
          (u = w()),
          (d = o("a")),
          Be(b.$$.fragment),
          (v = w()),
          (p = m(g)),
          ($ = w()),
          (I = o("div")),
          (P = m(h)),
          (D = w()),
          (V = o("div")),
          (x = m(T)),
          (N = w()),
          (B = o("div")),
          (A = m(G)),
          (k = w()),
          (C = o("div")),
          (F = m(O)),
          (z = w()),
          (L = o("div")),
          (te = m(Y)),
          (Z = w()),
          (ee = o("div")),
          (ne = m(ue)),
          (ce = w()),
          (J = o("div")),
          (K = m(ie)),
          (ae = w()),
          (q = o("div")),
          (U = m(ve)),
          (j = w()),
          this.h();
      },
      l(S) {
        t = n(S, "DIV", { class: !0 });
        var M = i(t);
        s = n(M, "DIV", { class: !0 });
        var se = i(s);
        (f = _(se, a)),
          se.forEach(r),
          (u = y(M)),
          (d = n(M, "A", { class: !0, href: !0 }));
        var Ve = i(d);
        ze(b.$$.fragment, Ve),
          (v = y(Ve)),
          (p = _(Ve, g)),
          Ve.forEach(r),
          ($ = y(M)),
          (I = n(M, "DIV", { class: !0 }));
        var ke = i(I);
        (P = _(ke, h)),
          ke.forEach(r),
          (D = y(M)),
          (V = n(M, "DIV", { class: !0 }));
        var re = i(V);
        (x = _(re, T)),
          re.forEach(r),
          (N = y(M)),
          (B = n(M, "DIV", { class: !0 }));
        var ye = i(B);
        (A = _(ye, G)),
          ye.forEach(r),
          (k = y(M)),
          (C = n(M, "DIV", { class: !0 }));
        var le = i(C);
        (F = _(le, O)),
          le.forEach(r),
          (z = y(M)),
          (L = n(M, "DIV", { class: !0 }));
        var be = i(L);
        (te = _(be, Y)),
          be.forEach(r),
          (Z = y(M)),
          (ee = n(M, "DIV", { class: !0 }));
        var R = i(ee);
        (ne = _(R, ue)),
          R.forEach(r),
          (ce = y(M)),
          (J = n(M, "DIV", { class: !0 }));
        var oe = i(J);
        (K = _(oe, ie)),
          oe.forEach(r),
          (ae = y(M)),
          (q = n(M, "DIV", { class: !0 }));
        var X = i(q);
        (U = _(X, ve)), X.forEach(r), (j = y(M)), M.forEach(r), this.h();
      },
      h() {
        c(s, "class", "w-1/12 text-center mx-4"),
          c(d, "class", "w-3/12 flex items-center justify-start"),
          c(d, "href", (E = `/club?id=${l[15].id}`)),
          c(I, "class", "w-1/12 text-center"),
          c(V, "class", "w-1/12 text-center"),
          c(B, "class", "w-1/12 text-center"),
          c(C, "class", "w-1/12 text-center"),
          c(L, "class", "w-1/12 text-center"),
          c(ee, "class", "w-1/12 text-center"),
          c(J, "class", "w-1/12 text-center"),
          c(q, "class", "w-1/12 text-center"),
          c(
            t,
            "class",
            "flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer"
          );
      },
      m(S, M) {
        me(S, t, M),
          e(t, s),
          e(s, f),
          e(t, u),
          e(t, d),
          Fe(b, d, null),
          e(d, v),
          e(d, p),
          e(t, $),
          e(t, I),
          e(I, P),
          e(t, D),
          e(t, V),
          e(V, x),
          e(t, N),
          e(t, B),
          e(B, A),
          e(t, k),
          e(t, C),
          e(C, F),
          e(t, z),
          e(t, L),
          e(L, te),
          e(t, Z),
          e(t, ee),
          e(ee, ne),
          e(t, ce),
          e(t, J),
          e(J, K),
          e(t, ae),
          e(t, q),
          e(q, U),
          e(t, j),
          (H = !0);
      },
      p(S, M) {
        const se = {};
        M & 2 && (se.primaryColour = S[15].primaryColourHex),
          M & 2 && (se.secondaryColour = S[15].secondaryColourHex),
          M & 2 && (se.thirdColour = S[15].thirdColourHex),
          b.$set(se),
          (!H || M & 2) && g !== (g = S[15].friendlyName + "") && Q(p, g),
          (!H || (M & 2 && E !== (E = `/club?id=${S[15].id}`))) &&
            c(d, "href", E),
          (!H || M & 2) && h !== (h = S[15].played + "") && Q(P, h),
          (!H || M & 2) && T !== (T = S[15].wins + "") && Q(x, T),
          (!H || M & 2) && G !== (G = S[15].draws + "") && Q(A, G),
          (!H || M & 2) && O !== (O = S[15].losses + "") && Q(F, O),
          (!H || M & 2) && Y !== (Y = S[15].goalsFor + "") && Q(te, Y),
          (!H || M & 2) && ue !== (ue = S[15].goalsAgainst + "") && Q(ne, ue),
          (!H || M & 2) &&
            ie !== (ie = S[15].goalsFor - S[15].goalsAgainst + "") &&
            Q(K, ie),
          (!H || M & 2) && ve !== (ve = S[15].points + "") && Q(U, ve);
      },
      i(S) {
        H || (de(b.$$.fragment, S), (H = !0));
      },
      o(S) {
        he(b.$$.fragment, S), (H = !1);
      },
      d(S) {
        S && r(t), Ue(b);
      },
    }
  );
}
function pr(l) {
  let t,
    s,
    a,
    f,
    u,
    d,
    b,
    v,
    g,
    p,
    E,
    $,
    I,
    h,
    P,
    D,
    V,
    T,
    x,
    N,
    B,
    G,
    A,
    k,
    C,
    O,
    F,
    z,
    L,
    Y,
    te,
    Z,
    ee,
    ue,
    ne,
    ce,
    J,
    ie,
    K,
    ae,
    q,
    ve,
    U,
    j,
    H,
    S,
    M,
    se,
    Ve,
    ke = l[2],
    re = [];
  for (let R = 0; R < ke.length; R += 1) re[R] = La(ja(l, ke, R));
  let ye = l[1],
    le = [];
  for (let R = 0; R < ye.length; R += 1) le[R] = Ba(Ma(l, ye, R));
  const be = (R) =>
    he(le[R], 1, 1, () => {
      le[R] = null;
    });
  return {
    c() {
      (t = o("div")),
        (s = o("div")),
        (a = o("div")),
        (f = o("button")),
        (u = m("<")),
        (b = w()),
        (v = o("select"));
      for (let R = 0; R < re.length; R += 1) re[R].c();
      (g = w()),
        (p = o("button")),
        (E = m(">")),
        (I = w()),
        (h = o("div")),
        (P = o("div")),
        (D = o("div")),
        (V = o("div")),
        (T = m("Pos")),
        (x = w()),
        (N = o("div")),
        (B = m("Team")),
        (G = w()),
        (A = o("div")),
        (k = m("P")),
        (C = w()),
        (O = o("div")),
        (F = m("W")),
        (z = w()),
        (L = o("div")),
        (Y = m("D")),
        (te = w()),
        (Z = o("div")),
        (ee = m("L")),
        (ue = w()),
        (ne = o("div")),
        (ce = m("GF")),
        (J = w()),
        (ie = o("div")),
        (K = m("GA")),
        (ae = w()),
        (q = o("div")),
        (ve = m("GD")),
        (U = w()),
        (j = o("div")),
        (H = m("PTS")),
        (S = w());
      for (let R = 0; R < le.length; R += 1) le[R].c();
      this.h();
    },
    l(R) {
      t = n(R, "DIV", { class: !0 });
      var oe = i(t);
      s = n(oe, "DIV", { class: !0 });
      var X = i(s);
      a = n(X, "DIV", { class: !0 });
      var Ie = i(a);
      f = n(Ie, "BUTTON", { class: !0 });
      var xe = i(f);
      (u = _(xe, "<")),
        xe.forEach(r),
        (b = y(Ie)),
        (v = n(Ie, "SELECT", { class: !0 }));
      var Ce = i(v);
      for (let Ne = 0; Ne < re.length; Ne += 1) re[Ne].l(Ce);
      Ce.forEach(r), (g = y(Ie)), (p = n(Ie, "BUTTON", { class: !0 }));
      var $e = i(p);
      (E = _($e, ">")),
        $e.forEach(r),
        Ie.forEach(r),
        X.forEach(r),
        (I = y(oe)),
        (h = n(oe, "DIV", { class: !0 }));
      var We = i(h);
      P = n(We, "DIV", { class: !0 });
      var Te = i(P);
      D = n(Te, "DIV", { class: !0 });
      var ge = i(D);
      V = n(ge, "DIV", { class: !0 });
      var rt = i(V);
      (T = _(rt, "Pos")),
        rt.forEach(r),
        (x = y(ge)),
        (N = n(ge, "DIV", { class: !0 }));
      var wt = i(N);
      (B = _(wt, "Team")),
        wt.forEach(r),
        (G = y(ge)),
        (A = n(ge, "DIV", { class: !0 }));
      var Ge = i(A);
      (k = _(Ge, "P")),
        Ge.forEach(r),
        (C = y(ge)),
        (O = n(ge, "DIV", { class: !0 }));
      var Dt = i(O);
      (F = _(Dt, "W")),
        Dt.forEach(r),
        (z = y(ge)),
        (L = n(ge, "DIV", { class: !0 }));
      var ot = i(L);
      (Y = _(ot, "D")),
        ot.forEach(r),
        (te = y(ge)),
        (Z = n(ge, "DIV", { class: !0 }));
      var yt = i(Z);
      (ee = _(yt, "L")),
        yt.forEach(r),
        (ue = y(ge)),
        (ne = n(ge, "DIV", { class: !0 }));
      var Je = i(ne);
      (ce = _(Je, "GF")),
        Je.forEach(r),
        (J = y(ge)),
        (ie = n(ge, "DIV", { class: !0 }));
      var nt = i(ie);
      (K = _(nt, "GA")),
        nt.forEach(r),
        (ae = y(ge)),
        (q = n(ge, "DIV", { class: !0 }));
      var Vt = i(q);
      (ve = _(Vt, "GD")),
        Vt.forEach(r),
        (U = y(ge)),
        (j = n(ge, "DIV", { class: !0 }));
      var Gt = i(j);
      (H = _(Gt, "PTS")), Gt.forEach(r), ge.forEach(r), (S = y(Te));
      for (let Ne = 0; Ne < le.length; Ne += 1) le[Ne].l(Te);
      Te.forEach(r), We.forEach(r), oe.forEach(r), this.h();
    },
    h() {
      c(
        f,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (f.disabled = d = l[0] === 1),
        c(
          v,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        l[0] === void 0 && ls(() => l[8].call(v)),
        c(
          p,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (p.disabled = $ = l[0] === 38),
        c(a, "class", "flex items-center space-x-2 ml-4"),
        c(s, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        c(V, "class", "w-1/12 text-center mx-4"),
        c(N, "class", "w-3/12"),
        c(A, "class", "w-1/12 text-center"),
        c(O, "class", "w-1/12 text-center"),
        c(L, "class", "w-1/12 text-center"),
        c(Z, "class", "w-1/12 text-center"),
        c(ne, "class", "w-1/12 text-center"),
        c(ie, "class", "w-1/12 text-center"),
        c(q, "class", "w-1/12 text-center"),
        c(j, "class", "w-1/12 text-center"),
        c(
          D,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        c(P, "class", "overflow-x-auto flex-1"),
        c(h, "class", "flex flex-col space-y-4 mt-4 text-xs md:text-base"),
        c(t, "class", "container-fluid mt-4");
    },
    m(R, oe) {
      me(R, t, oe), e(t, s), e(s, a), e(a, f), e(f, u), e(a, b), e(a, v);
      for (let X = 0; X < re.length; X += 1) re[X] && re[X].m(v, null);
      gt(v, l[0], !0),
        e(a, g),
        e(a, p),
        e(p, E),
        e(t, I),
        e(t, h),
        e(h, P),
        e(P, D),
        e(D, V),
        e(V, T),
        e(D, x),
        e(D, N),
        e(N, B),
        e(D, G),
        e(D, A),
        e(A, k),
        e(D, C),
        e(D, O),
        e(O, F),
        e(D, z),
        e(D, L),
        e(L, Y),
        e(D, te),
        e(D, Z),
        e(Z, ee),
        e(D, ue),
        e(D, ne),
        e(ne, ce),
        e(D, J),
        e(D, ie),
        e(ie, K),
        e(D, ae),
        e(D, q),
        e(q, ve),
        e(D, U),
        e(D, j),
        e(j, H),
        e(P, S);
      for (let X = 0; X < le.length; X += 1) le[X] && le[X].m(P, null);
      (M = !0),
        se ||
          ((Ve = [
            we(f, "click", l[7]),
            we(v, "change", l[8]),
            we(p, "click", l[9]),
          ]),
          (se = !0));
    },
    p(R, [oe]) {
      if (
        ((!M || (oe & 5 && d !== (d = R[0] === 1))) && (f.disabled = d), oe & 4)
      ) {
        ke = R[2];
        let X;
        for (X = 0; X < ke.length; X += 1) {
          const Ie = ja(R, ke, X);
          re[X]
            ? re[X].p(Ie, oe)
            : ((re[X] = La(Ie)), re[X].c(), re[X].m(v, null));
        }
        for (; X < re.length; X += 1) re[X].d(1);
        re.length = ke.length;
      }
      if (
        (oe & 5 && gt(v, R[0]),
        (!M || (oe & 5 && $ !== ($ = R[0] === 38))) && (p.disabled = $),
        oe & 2)
      ) {
        ye = R[1];
        let X;
        for (X = 0; X < ye.length; X += 1) {
          const Ie = Ma(R, ye, X);
          le[X]
            ? (le[X].p(Ie, oe), de(le[X], 1))
            : ((le[X] = Ba(Ie)), le[X].c(), de(le[X], 1), le[X].m(P, null));
        }
        for (Ot(), X = ye.length; X < le.length; X += 1) be(X);
        St();
      }
    },
    i(R) {
      if (!M) {
        for (let oe = 0; oe < ye.length; oe += 1) de(le[oe]);
        M = !0;
      }
    },
    o(R) {
      le = le.filter(Boolean);
      for (let oe = 0; oe < le.length; oe += 1) he(le[oe]);
      M = !1;
    },
    d(R) {
      R && r(t), il(re, R), il(le, R), (se = !1), Tl(Ve);
    },
  };
}
function br(l, t, s) {
  let a = [],
    f = [],
    u,
    d = [],
    b = 1,
    v = Array.from({ length: 38 }, (T, x) => x + 1),
    g = [],
    p,
    E,
    $;
  Os(async () => {
    try {
      await Yt.sync(),
        await Fl.sync(),
        await fl.sync(),
        (p = Yt.subscribe((T) => {
          s(4, (a = T));
        })),
        (E = Fl.subscribe((T) => {
          s(5, (f = T)),
            s(
              6,
              (d = f.map((x) => ({
                fixture: x,
                homeTeam: h(x.homeTeamId),
                awayTeam: h(x.awayTeamId),
              })))
            );
        })),
        ($ = fl.subscribe((T) => {
          u = T;
        }));
    } catch (T) {
      ss.show("Error fetching league table.", "error"),
        console.error("Error fetching league table:", T);
    } finally {
    }
  }),
    Ms(() => {
      p?.(), E?.(), $?.();
    });
  const I = (T) => {
    s(0, (b = Math.max(1, Math.min(38, b + T))));
  };
  function h(T) {
    return a.find((x) => x.id === T);
  }
  const P = () => I(-1);
  function D() {
    (b = ts(this)), s(0, b), s(2, v);
  }
  const V = () => I(1);
  return (
    (l.$$.update = () => {
      l.$$.dirty & 113 &&
        f.length > 0 &&
        a.length > 0 &&
        s(1, (g = Ja(d, a, b)));
    }),
    [b, g, v, I, a, f, d, P, D, V]
  );
}
class gr extends ms {
  constructor(t) {
    super(), _s(this, t, br, pr, hs, {});
  }
}
function wr(l) {
  let t,
    s,
    a,
    f,
    u,
    d,
    b,
    v,
    g,
    p,
    E,
    $,
    I,
    h,
    P,
    D,
    V,
    T,
    x,
    N,
    B,
    G,
    A,
    k,
    C,
    O,
    F,
    z,
    L,
    Y,
    te,
    Z,
    ee,
    ue,
    ne,
    ce,
    J,
    ie,
    K,
    ae,
    q,
    ve,
    U,
    j,
    H,
    S,
    M,
    se,
    Ve,
    ke,
    re,
    ye,
    le,
    be,
    R,
    oe,
    X,
    Ie,
    xe,
    Ce,
    $e,
    We,
    Te = (l[11] ? l[11].abbreviatedName : "") + "",
    ge,
    rt,
    wt,
    Ge,
    Dt,
    ot,
    yt,
    Je,
    nt = (l[12] ? l[12].abbreviatedName : "") + "",
    Vt,
    Gt,
    Ne,
    it,
    Ul,
    ct,
    Et,
    dl,
    Pl,
    Qt,
    Oe,
    Xt,
    At,
    Wl,
    ft,
    Ht,
    Zt,
    Jl,
    el,
    tl,
    Mt,
    Kl,
    ll,
    dt,
    ul,
    Rl,
    et,
    sl,
    jt,
    zl,
    qe,
    ut,
    Nl,
    Cl,
    al,
    vl,
    Tt,
    ql,
    Pt,
    ml,
    Ke,
    Qe,
    Ye,
    Lt,
    tt,
    _l,
    hl,
    $l,
    rl,
    ol,
    Nt,
    Ct,
    vt,
    Bt,
    Ol,
    Yl,
    mt,
    _t,
    Sl,
    Gl,
    Ft,
    pl,
    Ae,
    He,
    De,
    $t,
    bl;
  (M = new as({
    props: {
      primaryColour: l[11] ? l[11].primaryColourHex : "",
      secondaryColour: l[11] ? l[11].secondaryColourHex : "",
      thirdColour: l[11] ? l[11].thirdColourHex : "",
    },
  })),
    (oe = new as({
      props: {
        primaryColour: l[12] ? l[12].primaryColourHex : "",
        secondaryColour: l[12] ? l[12].secondaryColourHex : "",
        thirdColour: l[12] ? l[12].thirdColourHex : "",
      },
    }));
  function rs(W, fe) {
    return W[10] ? kr : Er;
  }
  let Al = rs(l),
    Re = Al(l);
  function Hl(W, fe) {
    return W[10] ? xr : Ir;
  }
  let gl = Hl(l),
    lt = gl(l),
    Pe = l[13] && Fa(l);
  const Ut = [Pr, Tr, Vr, Dr],
    ht = [];
  function os(W, fe) {
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
    ~(Ae = os(l)) && (He = ht[Ae] = Ut[Ae](l)),
    {
      c() {
        (t = o("div")),
          (s = o("div")),
          (a = o("div")),
          (f = o("div")),
          (u = o("p")),
          (d = m("Gameweek")),
          (b = w()),
          (v = o("p")),
          (g = m(l[1])),
          (p = w()),
          (E = o("p")),
          ($ = m(l[2])),
          (I = w()),
          (h = o("div")),
          (P = w()),
          (D = o("div")),
          (V = o("p")),
          (T = m("Managers")),
          (x = w()),
          (N = o("p")),
          (B = m(l[3])),
          (G = w()),
          (A = o("p")),
          (k = m("Total")),
          (C = w()),
          (O = o("div")),
          (F = w()),
          (z = o("div")),
          (L = o("p")),
          (Y = m("Weekly Prize Pool")),
          (te = w()),
          (Z = o("p")),
          (ee = m("0")),
          (ue = w()),
          (ne = o("p")),
          (ce = m("$FPL")),
          (J = w()),
          (ie = o("div")),
          (K = o("div")),
          (ae = o("p")),
          (q = m("Next Game:")),
          (ve = w()),
          (U = o("div")),
          (j = o("div")),
          (H = o("div")),
          (S = o("a")),
          Be(M.$$.fragment),
          (Ve = w()),
          (ke = o("div")),
          (re = o("p")),
          (ye = m("v")),
          (le = w()),
          (be = o("div")),
          (R = o("a")),
          Be(oe.$$.fragment),
          (Ie = w()),
          (xe = o("div")),
          (Ce = o("div")),
          ($e = o("p")),
          (We = o("a")),
          (ge = m(Te)),
          (wt = w()),
          (Ge = o("div")),
          (Dt = w()),
          (ot = o("div")),
          (yt = o("p")),
          (Je = o("a")),
          (Vt = m(nt)),
          (Ne = w()),
          (it = o("div")),
          (Ul = w()),
          (ct = o("div")),
          (Et = o("p")),
          (dl = m("Kick Off:")),
          (Pl = w()),
          (Qt = o("div")),
          (Oe = o("p")),
          (Xt = m(l[4])),
          (At = o("span")),
          (Wl = m("d")),
          (ft = m(`
                : `)),
          (Ht = m(l[5])),
          (Zt = o("span")),
          (Jl = m("h")),
          (el = m(`
                : `)),
          (tl = m(l[6])),
          (Mt = o("span")),
          (Kl = m("m")),
          (ll = w()),
          (dt = o("p")),
          (ul = m(l[7])),
          (Rl = m(" | ")),
          (et = m(l[8])),
          (sl = w()),
          (jt = o("div")),
          (zl = w()),
          (qe = o("div")),
          (ut = o("p")),
          (Nl = m("GW ")),
          (Cl = m(l[9])),
          (al = m(" High Score")),
          (vl = w()),
          (Tt = o("p")),
          Re.c(),
          (ql = w()),
          (Pt = o("p")),
          lt.c(),
          (ml = w()),
          (Ke = o("div")),
          (Qe = o("div")),
          (Ye = o("ul")),
          (Lt = o("li")),
          (tt = o("button")),
          (_l = m("Fixtures")),
          (rl = w()),
          Pe && Pe.c(),
          (ol = w()),
          (Nt = o("li")),
          (Ct = o("button")),
          (vt = m("Leaderboards")),
          (Yl = w()),
          (mt = o("li")),
          (_t = o("button")),
          (Sl = m("Table")),
          (pl = w()),
          He && He.c(),
          this.h();
      },
      l(W) {
        t = n(W, "DIV", { class: !0 });
        var fe = i(t);
        s = n(fe, "DIV", { class: !0 });
        var st = i(s);
        a = n(st, "DIV", { class: !0 });
        var Se = i(a);
        f = n(Se, "DIV", { class: !0 });
        var pt = i(f);
        u = n(pt, "P", { class: !0 });
        var wl = i(u);
        (d = _(wl, "Gameweek")),
          wl.forEach(r),
          (b = y(pt)),
          (v = n(pt, "P", { class: !0 }));
        var Wt = i(v);
        (g = _(Wt, l[1])),
          Wt.forEach(r),
          (p = y(pt)),
          (E = n(pt, "P", { class: !0 }));
        var yl = i(E);
        ($ = _(yl, l[2])),
          yl.forEach(r),
          pt.forEach(r),
          (I = y(Se)),
          (h = n(Se, "DIV", { class: !0, style: !0 })),
          i(h).forEach(r),
          (P = y(Se)),
          (D = n(Se, "DIV", { class: !0 }));
        var nl = i(D);
        V = n(nl, "P", { class: !0 });
        var ns = i(V);
        (T = _(ns, "Managers")),
          ns.forEach(r),
          (x = y(nl)),
          (N = n(nl, "P", { class: !0 }));
        var El = i(N);
        (B = _(El, l[3])),
          El.forEach(r),
          (G = y(nl)),
          (A = n(nl, "P", { class: !0 }));
        var Ml = i(A);
        (k = _(Ml, "Total")),
          Ml.forEach(r),
          nl.forEach(r),
          (C = y(Se)),
          (O = n(Se, "DIV", { class: !0, style: !0 })),
          i(O).forEach(r),
          (F = y(Se)),
          (z = n(Se, "DIV", { class: !0 }));
        var Jt = i(z);
        L = n(Jt, "P", { class: !0 });
        var is = i(L);
        (Y = _(is, "Weekly Prize Pool")),
          is.forEach(r),
          (te = y(Jt)),
          (Z = n(Jt, "P", { class: !0 }));
        var kl = i(Z);
        (ee = _(kl, "0")),
          kl.forEach(r),
          (ue = y(Jt)),
          (ne = n(Jt, "P", { class: !0 }));
        var Kt = i(ne);
        (ce = _(Kt, "$FPL")),
          Kt.forEach(r),
          Jt.forEach(r),
          Se.forEach(r),
          (J = y(st)),
          (ie = n(st, "DIV", { class: !0 }));
        var bt = i(ie);
        K = n(bt, "DIV", { class: !0 });
        var Ee = i(K);
        ae = n(Ee, "P", { class: !0 });
        var cs = i(ae);
        (q = _(cs, "Next Game:")),
          cs.forEach(r),
          (ve = y(Ee)),
          (U = n(Ee, "DIV", { class: !0 }));
        var ps = i(U);
        j = n(ps, "DIV", { class: !0 });
        var kt = i(j);
        H = n(kt, "DIV", { class: !0 });
        var bs = i(H);
        S = n(bs, "A", { href: !0 });
        var Me = i(S);
        ze(M.$$.fragment, Me),
          Me.forEach(r),
          bs.forEach(r),
          (Ve = y(kt)),
          (ke = n(kt, "DIV", { class: !0 }));
        var je = i(ke);
        re = n(je, "P", { class: !0 });
        var Le = i(re);
        (ye = _(Le, "v")),
          Le.forEach(r),
          je.forEach(r),
          (le = y(kt)),
          (be = n(kt, "DIV", { class: !0 }));
        var pe = i(be);
        R = n(pe, "A", { href: !0 });
        var _e = i(R);
        ze(oe.$$.fragment, _e),
          _e.forEach(r),
          pe.forEach(r),
          kt.forEach(r),
          ps.forEach(r),
          (Ie = y(Ee)),
          (xe = n(Ee, "DIV", { class: !0 }));
        var Xe = i(xe);
        Ce = n(Xe, "DIV", { class: !0 });
        var jl = i(Ce);
        $e = n(jl, "P", { class: !0 });
        var gs = i($e);
        We = n(gs, "A", { class: !0, href: !0 });
        var Ql = i(We);
        (ge = _(Ql, Te)),
          Ql.forEach(r),
          gs.forEach(r),
          jl.forEach(r),
          (wt = y(Xe)),
          (Ge = n(Xe, "DIV", { class: !0 })),
          i(Ge).forEach(r),
          (Dt = y(Xe)),
          (ot = n(Xe, "DIV", { class: !0 }));
        var Xl = i(ot);
        yt = n(Xl, "P", { class: !0 });
        var ws = i(yt);
        Je = n(ws, "A", { class: !0, href: !0 });
        var Zl = i(Je);
        (Vt = _(Zl, nt)),
          Zl.forEach(r),
          ws.forEach(r),
          Xl.forEach(r),
          Xe.forEach(r),
          Ee.forEach(r),
          (Ne = y(bt)),
          (it = n(bt, "DIV", { class: !0, style: !0 })),
          i(it).forEach(r),
          (Ul = y(bt)),
          (ct = n(bt, "DIV", { class: !0 }));
        var It = i(ct);
        Et = n(It, "P", { class: !0 });
        var Ll = i(Et);
        (dl = _(Ll, "Kick Off:")),
          Ll.forEach(r),
          (Pl = y(It)),
          (Qt = n(It, "DIV", { class: !0 }));
        var ys = i(Qt);
        Oe = n(ys, "P", { class: !0 });
        var xt = i(Oe);
        (Xt = _(xt, l[4])), (At = n(xt, "SPAN", { class: !0 }));
        var Es = i(At);
        (Wl = _(Es, "d")),
          Es.forEach(r),
          (ft = _(
            xt,
            `
                : `
          )),
          (Ht = _(xt, l[5])),
          (Zt = n(xt, "SPAN", { class: !0 }));
        var Il = i(Zt);
        (Jl = _(Il, "h")),
          Il.forEach(r),
          (el = _(
            xt,
            `
                : `
          )),
          (tl = _(xt, l[6])),
          (Mt = n(xt, "SPAN", { class: !0 }));
        var ks = i(Mt);
        (Kl = _(ks, "m")),
          ks.forEach(r),
          xt.forEach(r),
          ys.forEach(r),
          (ll = y(It)),
          (dt = n(It, "P", { class: !0 }));
        var es = i(dt);
        (ul = _(es, l[7])),
          (Rl = _(es, " | ")),
          (et = _(es, l[8])),
          es.forEach(r),
          It.forEach(r),
          (sl = y(bt)),
          (jt = n(bt, "DIV", { class: !0, style: !0 })),
          i(jt).forEach(r),
          (zl = y(bt)),
          (qe = n(bt, "DIV", { class: !0 }));
        var xl = i(qe);
        ut = n(xl, "P", { class: !0 });
        var Rt = i(ut);
        (Nl = _(Rt, "GW ")),
          (Cl = _(Rt, l[9])),
          (al = _(Rt, " High Score")),
          Rt.forEach(r),
          (vl = y(xl)),
          (Tt = n(xl, "P", { class: !0 }));
        var Is = i(Tt);
        Re.l(Is), Is.forEach(r), (ql = y(xl)), (Pt = n(xl, "P", { class: !0 }));
        var xs = i(Pt);
        lt.l(xs),
          xs.forEach(r),
          xl.forEach(r),
          bt.forEach(r),
          st.forEach(r),
          fe.forEach(r),
          (ml = y(W)),
          (Ke = n(W, "DIV", { class: !0 }));
        var Ds = i(Ke);
        Qe = n(Ds, "DIV", { class: !0 });
        var zt = i(Qe);
        Ye = n(zt, "UL", { class: !0 });
        var qt = i(Ye);
        Lt = n(qt, "LI", { class: !0 });
        var Vs = i(Lt);
        tt = n(Vs, "BUTTON", { class: !0 });
        var Ts = i(tt);
        (_l = _(Ts, "Fixtures")),
          Ts.forEach(r),
          Vs.forEach(r),
          (rl = y(qt)),
          Pe && Pe.l(qt),
          (ol = y(qt)),
          (Nt = n(qt, "LI", { class: !0 }));
        var Dl = i(Nt);
        Ct = n(Dl, "BUTTON", { class: !0 });
        var Ps = i(Ct);
        (vt = _(Ps, "Leaderboards")),
          Ps.forEach(r),
          Dl.forEach(r),
          (Yl = y(qt)),
          (mt = n(qt, "LI", { class: !0 }));
        var Ns = i(mt);
        _t = n(Ns, "BUTTON", { class: !0 });
        var Cs = i(_t);
        (Sl = _(Cs, "Table")),
          Cs.forEach(r),
          Ns.forEach(r),
          qt.forEach(r),
          (pl = y(zt)),
          He && He.l(zt),
          zt.forEach(r),
          Ds.forEach(r),
          this.h();
      },
      h() {
        c(u, "class", "text-gray-300 text-xs"),
          c(v, "class", "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold"),
          c(E, "class", "text-gray-300 text-xs"),
          c(f, "class", "flex-grow"),
          c(h, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
          Bl(h, "min-width", "2px"),
          Bl(h, "min-height", "50px"),
          c(V, "class", "text-gray-300 text-xs"),
          c(N, "class", "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold"),
          c(A, "class", "text-gray-300 text-xs"),
          c(D, "class", "flex-grow"),
          c(O, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
          Bl(O, "min-width", "2px"),
          Bl(O, "min-height", "50px"),
          c(L, "class", "text-gray-300 text-xs"),
          c(Z, "class", "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold"),
          c(ne, "class", "text-gray-300 text-xs"),
          c(z, "class", "flex-grow"),
          c(
            a,
            "class",
            "flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
          ),
          c(ae, "class", "text-gray-300 text-xs"),
          c(S, "href", (se = `/club?id=${l[11] ? l[11].id : -1}`)),
          c(H, "class", "w-10 ml-4 mr-4"),
          c(re, "class", "text-xs mt-2 mb-2 font-bold"),
          c(ke, "class", "w-v ml-1 mr-1 flex justify-center svelte-18fkfyi"),
          c(R, "href", (X = `/club?id=${l[12] ? l[12].id : -1}`)),
          c(be, "class", "w-10 ml-4"),
          c(j, "class", "flex justify-center items-center"),
          c(U, "class", "flex justify-center mb-2 mt-2"),
          c(We, "class", "text-gray-300 text-xs text-center"),
          c(We, "href", (rt = `/club?id=${l[11] ? l[11].id : -1}`)),
          c($e, "class", "text-gray-300 text-xs text-center"),
          c(Ce, "class", "w-10 ml-4 mr-4"),
          c(Ge, "class", "w-v ml-1 mr-1 svelte-18fkfyi"),
          c(Je, "class", "text-gray-300 text-xs text-center"),
          c(Je, "href", (Gt = `/club?id=${l[12] ? l[12].id : -1}`)),
          c(yt, "class", "text-gray-300 text-xs text-center"),
          c(ot, "class", "w-10 ml-4"),
          c(xe, "class", "flex justify-center"),
          c(K, "class", "flex-grow mb-4 lg:mb-0"),
          c(
            it,
            "class",
            "h-px bg-gray-400 w-full lg:w-px lg:h-full lg:self-stretch"
          ),
          Bl(it, "min-height", "2px"),
          Bl(it, "min-width", "2px"),
          c(Et, "class", "text-gray-300 text-xs mt-4 lg:mt-0"),
          c(At, "class", "text-gray-300 text-xs ml-1"),
          c(Zt, "class", "text-gray-300 text-xs ml-1"),
          c(Mt, "class", "text-gray-300 text-xs ml-1"),
          c(
            Oe,
            "class",
            "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold"
          ),
          c(Qt, "class", "flex"),
          c(dt, "class", "text-gray-300 text-xs"),
          c(ct, "class", "flex-grow mb-4 lg:mb-0"),
          c(
            jt,
            "class",
            "h-px bg-gray-400 w-full lg:w-px lg:h-full lg:self-stretch"
          ),
          Bl(jt, "min-height", "2px"),
          Bl(jt, "min-width", "2px"),
          c(ut, "class", "text-gray-300 text-xs mt-4 lg:mt-0"),
          c(
            Tt,
            "class",
            "text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 font-bold max-w-[200px] truncate"
          ),
          c(Pt, "class", "text-gray-300 text-xs"),
          c(qe, "class", "flex-grow"),
          c(
            ie,
            "class",
            "flex flex-col lg:flex-row justify-start lg:items-center text-white space-x-0 lg:space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
          ),
          c(s, "class", "flex flex-col lg:flex-row"),
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
            Lt,
            "class",
            ($l =
              Ze(`mr-4 ${l[0] === "fixtures" ? "active-tab" : ""}`) +
              " svelte-18fkfyi")
          ),
          c(
            Ct,
            "class",
            (Bt =
              Ze(
                `p-2 ${
                  l[0] === "leaderboards" ? "text-white" : "text-gray-400"
                }`
              ) + " svelte-18fkfyi")
          ),
          c(
            Nt,
            "class",
            (Ol =
              Ze(`mr-4 ${l[0] === "leaderboards" ? "active-tab" : ""}`) +
              " svelte-18fkfyi")
          ),
          c(
            _t,
            "class",
            (Gl =
              Ze(
                `p-2 ${
                  l[0] === "league-table" ? "text-white" : "text-gray-400"
                }`
              ) + " svelte-18fkfyi")
          ),
          c(
            mt,
            "class",
            (Ft =
              Ze(`mr-4 ${l[0] === "league-table" ? "active-tab" : ""}`) +
              " svelte-18fkfyi")
          ),
          c(
            Ye,
            "class",
            "flex bg-light-gray px-4 pt-2 text-sm sm:text-base md:text-lg"
          ),
          c(Qe, "class", "bg-panel rounded-md mx-4"),
          c(Ke, "class", "mx-4");
      },
      m(W, fe) {
        me(W, t, fe),
          e(t, s),
          e(s, a),
          e(a, f),
          e(f, u),
          e(u, d),
          e(f, b),
          e(f, v),
          e(v, g),
          e(f, p),
          e(f, E),
          e(E, $),
          e(a, I),
          e(a, h),
          e(a, P),
          e(a, D),
          e(D, V),
          e(V, T),
          e(D, x),
          e(D, N),
          e(N, B),
          e(D, G),
          e(D, A),
          e(A, k),
          e(a, C),
          e(a, O),
          e(a, F),
          e(a, z),
          e(z, L),
          e(L, Y),
          e(z, te),
          e(z, Z),
          e(Z, ee),
          e(z, ue),
          e(z, ne),
          e(ne, ce),
          e(s, J),
          e(s, ie),
          e(ie, K),
          e(K, ae),
          e(ae, q),
          e(K, ve),
          e(K, U),
          e(U, j),
          e(j, H),
          e(H, S),
          Fe(M, S, null),
          e(j, Ve),
          e(j, ke),
          e(ke, re),
          e(re, ye),
          e(j, le),
          e(j, be),
          e(be, R),
          Fe(oe, R, null),
          e(K, Ie),
          e(K, xe),
          e(xe, Ce),
          e(Ce, $e),
          e($e, We),
          e(We, ge),
          e(xe, wt),
          e(xe, Ge),
          e(xe, Dt),
          e(xe, ot),
          e(ot, yt),
          e(yt, Je),
          e(Je, Vt),
          e(ie, Ne),
          e(ie, it),
          e(ie, Ul),
          e(ie, ct),
          e(ct, Et),
          e(Et, dl),
          e(ct, Pl),
          e(ct, Qt),
          e(Qt, Oe),
          e(Oe, Xt),
          e(Oe, At),
          e(At, Wl),
          e(Oe, ft),
          e(Oe, Ht),
          e(Oe, Zt),
          e(Zt, Jl),
          e(Oe, el),
          e(Oe, tl),
          e(Oe, Mt),
          e(Mt, Kl),
          e(ct, ll),
          e(ct, dt),
          e(dt, ul),
          e(dt, Rl),
          e(dt, et),
          e(ie, sl),
          e(ie, jt),
          e(ie, zl),
          e(ie, qe),
          e(qe, ut),
          e(ut, Nl),
          e(ut, Cl),
          e(ut, al),
          e(qe, vl),
          e(qe, Tt),
          Re.m(Tt, null),
          e(qe, ql),
          e(qe, Pt),
          lt.m(Pt, null),
          me(W, ml, fe),
          me(W, Ke, fe),
          e(Ke, Qe),
          e(Qe, Ye),
          e(Ye, Lt),
          e(Lt, tt),
          e(tt, _l),
          e(Ye, rl),
          Pe && Pe.m(Ye, null),
          e(Ye, ol),
          e(Ye, Nt),
          e(Nt, Ct),
          e(Ct, vt),
          e(Ye, Yl),
          e(Ye, mt),
          e(mt, _t),
          e(_t, Sl),
          e(Qe, pl),
          ~Ae && ht[Ae].m(Qe, null),
          (De = !0),
          $t ||
            ((bl = [
              we(tt, "click", l[16]),
              we(Ct, "click", l[18]),
              we(_t, "click", l[19]),
            ]),
            ($t = !0));
      },
      p(W, fe) {
        (!De || fe & 2) && Q(g, W[1]),
          (!De || fe & 4) && Q($, W[2]),
          (!De || fe & 8) && Q(B, W[3]);
        const st = {};
        fe & 2048 && (st.primaryColour = W[11] ? W[11].primaryColourHex : ""),
          fe & 2048 &&
            (st.secondaryColour = W[11] ? W[11].secondaryColourHex : ""),
          fe & 2048 && (st.thirdColour = W[11] ? W[11].thirdColourHex : ""),
          M.$set(st),
          (!De ||
            (fe & 2048 && se !== (se = `/club?id=${W[11] ? W[11].id : -1}`))) &&
            c(S, "href", se);
        const Se = {};
        fe & 4096 && (Se.primaryColour = W[12] ? W[12].primaryColourHex : ""),
          fe & 4096 &&
            (Se.secondaryColour = W[12] ? W[12].secondaryColourHex : ""),
          fe & 4096 && (Se.thirdColour = W[12] ? W[12].thirdColourHex : ""),
          oe.$set(Se),
          (!De ||
            (fe & 4096 && X !== (X = `/club?id=${W[12] ? W[12].id : -1}`))) &&
            c(R, "href", X),
          (!De || fe & 2048) &&
            Te !== (Te = (W[11] ? W[11].abbreviatedName : "") + "") &&
            Q(ge, Te),
          (!De ||
            (fe & 2048 && rt !== (rt = `/club?id=${W[11] ? W[11].id : -1}`))) &&
            c(We, "href", rt),
          (!De || fe & 4096) &&
            nt !== (nt = (W[12] ? W[12].abbreviatedName : "") + "") &&
            Q(Vt, nt),
          (!De ||
            (fe & 4096 && Gt !== (Gt = `/club?id=${W[12] ? W[12].id : -1}`))) &&
            c(Je, "href", Gt),
          (!De || fe & 16) && Q(Xt, W[4]),
          (!De || fe & 32) && Q(Ht, W[5]),
          (!De || fe & 64) && Q(tl, W[6]),
          (!De || fe & 128) && Q(ul, W[7]),
          (!De || fe & 256) && Q(et, W[8]),
          (!De || fe & 512) && Q(Cl, W[9]),
          Al === (Al = rs(W)) && Re
            ? Re.p(W, fe)
            : (Re.d(1), (Re = Al(W)), Re && (Re.c(), Re.m(Tt, null))),
          gl === (gl = Hl(W)) && lt
            ? lt.p(W, fe)
            : (lt.d(1), (lt = gl(W)), lt && (lt.c(), lt.m(Pt, null))),
          (!De ||
            (fe & 1 &&
              hl !==
                (hl =
                  Ze(
                    `p-2 ${
                      W[0] === "fixtures" ? "text-white" : "text-gray-400"
                    }`
                  ) + " svelte-18fkfyi"))) &&
            c(tt, "class", hl),
          (!De ||
            (fe & 1 &&
              $l !==
                ($l =
                  Ze(`mr-4 ${W[0] === "fixtures" ? "active-tab" : ""}`) +
                  " svelte-18fkfyi"))) &&
            c(Lt, "class", $l),
          W[13]
            ? Pe
              ? Pe.p(W, fe)
              : ((Pe = Fa(W)), Pe.c(), Pe.m(Ye, ol))
            : Pe && (Pe.d(1), (Pe = null)),
          (!De ||
            (fe & 1 &&
              Bt !==
                (Bt =
                  Ze(
                    `p-2 ${
                      W[0] === "leaderboards" ? "text-white" : "text-gray-400"
                    }`
                  ) + " svelte-18fkfyi"))) &&
            c(Ct, "class", Bt),
          (!De ||
            (fe & 1 &&
              Ol !==
                (Ol =
                  Ze(`mr-4 ${W[0] === "leaderboards" ? "active-tab" : ""}`) +
                  " svelte-18fkfyi"))) &&
            c(Nt, "class", Ol),
          (!De ||
            (fe & 1 &&
              Gl !==
                (Gl =
                  Ze(
                    `p-2 ${
                      W[0] === "league-table" ? "text-white" : "text-gray-400"
                    }`
                  ) + " svelte-18fkfyi"))) &&
            c(_t, "class", Gl),
          (!De ||
            (fe & 1 &&
              Ft !==
                (Ft =
                  Ze(`mr-4 ${W[0] === "league-table" ? "active-tab" : ""}`) +
                  " svelte-18fkfyi"))) &&
            c(mt, "class", Ft);
        let pt = Ae;
        (Ae = os(W)),
          Ae !== pt &&
            (He &&
              (Ot(),
              he(ht[pt], 1, 1, () => {
                ht[pt] = null;
              }),
              St()),
            ~Ae
              ? ((He = ht[Ae]),
                He || ((He = ht[Ae] = Ut[Ae](W)), He.c()),
                de(He, 1),
                He.m(Qe, null))
              : (He = null));
      },
      i(W) {
        De || (de(M.$$.fragment, W), de(oe.$$.fragment, W), de(He), (De = !0));
      },
      o(W) {
        he(M.$$.fragment, W), he(oe.$$.fragment, W), he(He), (De = !1);
      },
      d(W) {
        W && r(t),
          Ue(M),
          Ue(oe),
          Re.d(),
          lt.d(),
          W && r(ml),
          W && r(Ke),
          Pe && Pe.d(),
          ~Ae && ht[Ae].d(),
          ($t = !1),
          Tl(bl);
      },
    }
  );
}
function yr(l) {
  let t, s;
  return (
    (t = new Ls({})),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(a) {
        ze(t.$$.fragment, a);
      },
      m(a, f) {
        Fe(t, a, f), (s = !0);
      },
      p: at,
      i(a) {
        s || (de(t.$$.fragment, a), (s = !0));
      },
      o(a) {
        he(t.$$.fragment, a), (s = !1);
      },
      d(a) {
        Ue(t, a);
      },
    }
  );
}
function Er(l) {
  let t;
  return {
    c() {
      t = m("-");
    },
    l(s) {
      t = _(s, "-");
    },
    m(s, a) {
      me(s, t, a);
    },
    p: at,
    d(s) {
      s && r(t);
    },
  };
}
function kr(l) {
  let t,
    s = l[10].username + "",
    a,
    f;
  return {
    c() {
      (t = o("a")), (a = m(s)), this.h();
    },
    l(u) {
      t = n(u, "A", { href: !0 });
      var d = i(t);
      (a = _(d, s)), d.forEach(r), this.h();
    },
    h() {
      c(t, "href", (f = `/manager?id=${l[10].principalId}&gw=${l[1]}`));
    },
    m(u, d) {
      me(u, t, d), e(t, a);
    },
    p(u, d) {
      d & 1024 && s !== (s = u[10].username + "") && Q(a, s),
        d & 1026 &&
          f !== (f = `/manager?id=${u[10].principalId}&gw=${u[1]}`) &&
          c(t, "href", f);
    },
    d(u) {
      u && r(t);
    },
  };
}
function Ir(l) {
  let t;
  return {
    c() {
      t = m("-");
    },
    l(s) {
      t = _(s, "-");
    },
    m(s, a) {
      me(s, t, a);
    },
    p: at,
    d(s) {
      s && r(t);
    },
  };
}
function xr(l) {
  let t = l[10].points + "",
    s,
    a;
  return {
    c() {
      (s = m(t)), (a = m(" points"));
    },
    l(f) {
      (s = _(f, t)), (a = _(f, " points"));
    },
    m(f, u) {
      me(f, s, u), me(f, a, u);
    },
    p(f, u) {
      u & 1024 && t !== (t = f[10].points + "") && Q(s, t);
    },
    d(f) {
      f && r(s), f && r(a);
    },
  };
}
function Fa(l) {
  let t, s, a, f, u, d, b;
  return {
    c() {
      (t = o("li")), (s = o("button")), (a = m("Points")), this.h();
    },
    l(v) {
      t = n(v, "LI", { class: !0 });
      var g = i(t);
      s = n(g, "BUTTON", { class: !0 });
      var p = i(s);
      (a = _(p, "Points")), p.forEach(r), g.forEach(r), this.h();
    },
    h() {
      c(
        s,
        "class",
        (f =
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
    m(v, g) {
      me(v, t, g),
        e(t, s),
        e(s, a),
        d || ((b = we(s, "click", l[17])), (d = !0));
    },
    p(v, g) {
      g & 1 &&
        f !==
          (f =
            Ze(`p-2 ${v[0] === "points" ? "text-white" : "text-gray-400"}`) +
            " svelte-18fkfyi") &&
        c(s, "class", f),
        g & 1 &&
          u !==
            (u =
              Ze(`mr-4 ${v[0] === "points" ? "active-tab" : ""}`) +
              " svelte-18fkfyi") &&
          c(t, "class", u);
    },
    d(v) {
      v && r(t), (d = !1), b();
    },
  };
}
function Dr(l) {
  let t, s;
  return (
    (t = new gr({})),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(a) {
        ze(t.$$.fragment, a);
      },
      m(a, f) {
        Fe(t, a, f), (s = !0);
      },
      i(a) {
        s || (de(t.$$.fragment, a), (s = !0));
      },
      o(a) {
        he(t.$$.fragment, a), (s = !1);
      },
      d(a) {
        Ue(t, a);
      },
    }
  );
}
function Vr(l) {
  let t, s;
  return (
    (t = new hr({})),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(a) {
        ze(t.$$.fragment, a);
      },
      m(a, f) {
        Fe(t, a, f), (s = !0);
      },
      i(a) {
        s || (de(t.$$.fragment, a), (s = !0));
      },
      o(a) {
        he(t.$$.fragment, a), (s = !1);
      },
      d(a) {
        Ue(t, a);
      },
    }
  );
}
function Tr(l) {
  let t, s;
  return (
    (t = new ir({})),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(a) {
        ze(t.$$.fragment, a);
      },
      m(a, f) {
        Fe(t, a, f), (s = !0);
      },
      i(a) {
        s || (de(t.$$.fragment, a), (s = !0));
      },
      o(a) {
        he(t.$$.fragment, a), (s = !1);
      },
      d(a) {
        Ue(t, a);
      },
    }
  );
}
function Pr(l) {
  let t, s;
  return (
    (t = new Xa({})),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(a) {
        ze(t.$$.fragment, a);
      },
      m(a, f) {
        Fe(t, a, f), (s = !0);
      },
      i(a) {
        s || (de(t.$$.fragment, a), (s = !0));
      },
      o(a) {
        he(t.$$.fragment, a), (s = !1);
      },
      d(a) {
        Ue(t, a);
      },
    }
  );
}
function Nr(l) {
  let t, s, a, f;
  const u = [yr, wr],
    d = [];
  function b(v, g) {
    return v[14] ? 0 : 1;
  }
  return (
    (t = b(l)),
    (s = d[t] = u[t](l)),
    {
      c() {
        s.c(), (a = cl());
      },
      l(v) {
        s.l(v), (a = cl());
      },
      m(v, g) {
        d[t].m(v, g), me(v, a, g), (f = !0);
      },
      p(v, g) {
        let p = t;
        (t = b(v)),
          t === p
            ? d[t].p(v, g)
            : (Ot(),
              he(d[p], 1, 1, () => {
                d[p] = null;
              }),
              St(),
              (s = d[t]),
              s ? s.p(v, g) : ((s = d[t] = u[t](v)), s.c()),
              de(s, 1),
              s.m(a.parentNode, a));
      },
      i(v) {
        f || (de(s), (f = !0));
      },
      o(v) {
        he(s), (f = !1);
      },
      d(v) {
        d[t].d(v), v && r(a);
      },
    }
  );
}
function Cr(l) {
  let t, s;
  return (
    (t = new Ka({
      props: { $$slots: { default: [Nr] }, $$scope: { ctx: l } },
    })),
    {
      c() {
        Be(t.$$.fragment);
      },
      l(a) {
        ze(t.$$.fragment, a);
      },
      m(a, f) {
        Fe(t, a, f), (s = !0);
      },
      p(a, [f]) {
        const u = {};
        f & 1081343 && (u.$$scope = { dirty: f, ctx: a }), t.$set(u);
      },
      i(a) {
        s || (de(t.$$.fragment, a), (s = !0));
      },
      o(a) {
        he(t.$$.fragment, a), (s = !1);
      },
      d(a) {
        Ue(t, a);
      },
    }
  );
}
function $r(l, t, s) {
  let a = "fixtures",
    f = -1,
    u = "-",
    d = -1,
    b = "00",
    v = "00",
    g = "00",
    p = "-",
    E = "-",
    $ = -1,
    I,
    h,
    P,
    D = !1,
    V = !0;
  Os(async () => {
    try {
      await Hs.sync(),
        await fl.sync(),
        await Fl.sync(),
        await Yt.sync(),
        await Vl.syncWeeklyLeaderboard(),
        Hs.subscribe((O) => {
          s(13, (D = O.identity !== null && O.identity !== void 0));
        }),
        s(3, (d = await Ua.getTotalManagers()));
      let A = await fl.getSystemState();
      s(1, (f = A?.activeGameweek ?? f)),
        s(2, (u = A?.activeSeason.name ?? u)),
        s(9, ($ = A?.focusGameweek ?? f));
      let k = await Fl.getNextFixture();
      s(11, (h = await Yt.getTeamById(k ? k.homeTeamId : 0))),
        s(12, (P = await Yt.getTeamById(k ? k.awayTeamId : 0))),
        s(7, (p = Ra(k ? Number(k.kickOff) : 0))),
        s(8, (E = js(k ? Number(k.kickOff) : 0)));
      let C = za(k ? Number(k.kickOff) : 0);
      s(4, (b = C.days.toString())),
        s(5, (v = C.hours.toString())),
        s(6, (g = C.minutes.toString())),
        s(10, (I = await Vl.getLeadingWeeklyTeam()));
    } catch (A) {
      ss.show("Error fetching homepage data.", "error"),
        console.error("Error fetching homepage data:", A);
    } finally {
      s(14, (V = !1));
    }
  });
  function T(A) {
    s(0, (a = A));
  }
  return [
    a,
    f,
    u,
    d,
    b,
    v,
    g,
    p,
    E,
    $,
    I,
    h,
    P,
    D,
    V,
    T,
    () => T("fixtures"),
    () => T("points"),
    () => T("leaderboards"),
    () => T("league-table"),
  ];
}
class Mr extends ms {
  constructor(t) {
    super(), _s(this, t, $r, Cr, hs, {});
  }
}
export { Mr as component };
