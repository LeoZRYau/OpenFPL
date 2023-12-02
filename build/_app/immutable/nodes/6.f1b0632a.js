import { f as st } from "../chunks/fixture-store.880a736f.js";
import {
  a as N,
  A as ze,
  b as q,
  B as Ye,
  c as A,
  d as Ke,
  e as Ie,
  G as a,
  g as Je,
  H as He,
  h as n,
  i as $e,
  I as Qe,
  J as Ze,
  K as Ee,
  k as u,
  L as fe,
  l as m,
  M as Fe,
  m as h,
  N as et,
  n as _,
  o as Re,
  O as Xe,
  P as tt,
  q as y,
  r as k,
  s as je,
  S as Me,
  u as se,
  y as Ue,
  Y as We,
  z as qe,
} from "../chunks/index.a8c54947.js";
import { c as lt, d as Te, t as at } from "../chunks/Layout.3f9368f3.js";
import { p as Se } from "../chunks/player-store.f12f3662.js";
import { s as De, t as Ve } from "../chunks/team-store.583260fe.js";
function Ne(r, e, l) {
  const t = r.slice();
  t[18] = e[l];
  const s = t[5](t[18].homeTeamId);
  t[19] = s;
  const c = t[5](t[18].awayTeamId);
  return (t[20] = c), t;
}
function Ae(r, e, l) {
  const t = r.slice();
  return (t[23] = e[l]), t;
}
function Ge(r) {
  let e,
    l,
    t = r[23] + "",
    s;
  return {
    c() {
      (e = u("option")), (l = y("Gameweek ")), (s = y(t)), this.h();
    },
    l(c) {
      e = m(c, "OPTION", {});
      var i = h(e);
      (l = k(i, "Gameweek ")), (s = k(i, t)), i.forEach(n), this.h();
    },
    h() {
      (e.__value = r[23]), (e.value = e.__value);
    },
    m(c, i) {
      q(c, e, i), a(e, l), a(e, s);
    },
    p: He,
    d(c) {
      c && n(e);
    },
  };
}
function rt(r) {
  let e, l;
  return {
    c() {
      (e = u("p")), (l = y("No leaderboard data.")), this.h();
    },
    l(t) {
      e = m(t, "P", { class: !0 });
      var s = h(e);
      (l = k(s, "No leaderboard data.")), s.forEach(n), this.h();
    },
    h() {
      _(e, "class", "w-100 p-4");
    },
    m(t, s) {
      q(t, e, s), a(e, l);
    },
    p: He,
    d(t) {
      t && n(e);
    },
  };
}
function it(r) {
  let e,
    l = r[1],
    t = [];
  for (let s = 0; s < l.length; s += 1) t[s] = Ce(Ne(r, l, s));
  return {
    c() {
      for (let s = 0; s < t.length; s += 1) t[s].c();
      e = Ie();
    },
    l(s) {
      for (let c = 0; c < t.length; c += 1) t[c].l(s);
      e = Ie();
    },
    m(s, c) {
      for (let i = 0; i < t.length; i += 1) t[i] && t[i].m(s, c);
      q(s, e, c);
    },
    p(s, c) {
      if (c & 34) {
        l = s[1];
        let i;
        for (i = 0; i < l.length; i += 1) {
          const G = Ne(s, l, i);
          t[i]
            ? t[i].p(G, c)
            : ((t[i] = Ce(G)), t[i].c(), t[i].m(e.parentNode, e));
        }
        for (; i < t.length; i += 1) t[i].d(1);
        t.length = l.length;
      }
    },
    d(s) {
      Fe(t, s), s && n(e);
    },
  };
}
function Oe(r) {
  let e, l;
  return {
    c() {
      (e = u("div")), (l = y("Scheduled")), this.h();
    },
    l(t) {
      e = m(t, "DIV", { class: !0 });
      var s = h(e);
      (l = k(s, "Scheduled")), s.forEach(n), this.h();
    },
    h() {
      _(e, "class", "w-1/4 px-4");
    },
    m(t, s) {
      q(t, e, s), a(e, l);
    },
    d(t) {
      t && n(e);
    },
  };
}
function Be(r) {
  let e, l;
  return {
    c() {
      (e = u("div")), (l = y("Active")), this.h();
    },
    l(t) {
      e = m(t, "DIV", { class: !0 });
      var s = h(e);
      (l = k(s, "Active")), s.forEach(n), this.h();
    },
    h() {
      _(e, "class", "w-1/4 px-4");
    },
    m(t, s) {
      q(t, e, s), a(e, l);
    },
    d(t) {
      t && n(e);
    },
  };
}
function Le(r) {
  let e, l;
  return {
    c() {
      (e = u("div")), (l = y("Completed")), this.h();
    },
    l(t) {
      e = m(t, "DIV", { class: !0 });
      var s = h(e);
      (l = k(s, "Completed")), s.forEach(n), this.h();
    },
    h() {
      _(e, "class", "w-1/4 px-4");
    },
    m(t, s) {
      q(t, e, s), a(e, l);
    },
    d(t) {
      t && n(e);
    },
  };
}
function Pe(r) {
  let e, l;
  return {
    c() {
      (e = u("div")), (l = y("Verified")), this.h();
    },
    l(t) {
      e = m(t, "DIV", { class: !0 });
      var s = h(e);
      (l = k(s, "Verified")), s.forEach(n), this.h();
    },
    h() {
      _(e, "class", "w-1/4 px-4");
    },
    m(t, s) {
      q(t, e, s), a(e, l);
    },
    d(t) {
      t && n(e);
    },
  };
}
function Ce(r) {
  let e,
    l,
    t = r[19].friendlyName + "",
    s,
    c,
    i,
    G = r[20].friendlyName + "",
    D,
    C,
    F,
    O,
    L,
    E,
    b,
    P,
    S,
    M,
    I,
    $,
    v = r[18].status == 0 && Oe(),
    o = r[18].status == 1 && Be(),
    p = r[18].status == 2 && Le(),
    w = r[18].status == 3 && Pe();
  return {
    c() {
      (e = u("div")),
        (l = u("div")),
        (s = y(t)),
        (c = N()),
        (i = u("div")),
        (D = y(G)),
        (C = N()),
        v && v.c(),
        (F = N()),
        o && o.c(),
        (O = N()),
        p && p.c(),
        (L = N()),
        w && w.c(),
        (E = N()),
        (b = u("div")),
        (P = u("button")),
        (S = u("a")),
        (M = y("Add Fixture Data")),
        ($ = N()),
        this.h();
    },
    l(g) {
      e = m(g, "DIV", { class: !0 });
      var d = h(e);
      l = m(d, "DIV", { class: !0 });
      var T = h(l);
      (s = k(T, t)), T.forEach(n), (c = A(d)), (i = m(d, "DIV", { class: !0 }));
      var j = h(i);
      (D = k(j, G)),
        j.forEach(n),
        (C = A(d)),
        v && v.l(d),
        (F = A(d)),
        o && o.l(d),
        (O = A(d)),
        p && p.l(d),
        (L = A(d)),
        w && w.l(d),
        (E = A(d)),
        (b = m(d, "DIV", { class: !0 }));
      var J = h(b);
      P = m(J, "BUTTON", { class: !0 });
      var K = h(P);
      S = m(K, "A", { href: !0 });
      var U = h(S);
      (M = k(U, "Add Fixture Data")),
        U.forEach(n),
        K.forEach(n),
        J.forEach(n),
        ($ = A(d)),
        d.forEach(n),
        this.h();
    },
    h() {
      _(l, "class", "w-1/4 px-4"),
        _(i, "class", "w-1/4 px-4"),
        _(S, "href", (I = "/add-fixture-data?id=" + r[18].id)),
        _(
          P,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        _(b, "class", "w-1/4 px-4"),
        _(
          e,
          "class",
          "flex items-center p-2 justify-between py-4 border-b border-gray-700 cursor-pointer"
        );
    },
    m(g, d) {
      q(g, e, d),
        a(e, l),
        a(l, s),
        a(e, c),
        a(e, i),
        a(i, D),
        a(e, C),
        v && v.m(e, null),
        a(e, F),
        o && o.m(e, null),
        a(e, O),
        p && p.m(e, null),
        a(e, L),
        w && w.m(e, null),
        a(e, E),
        a(e, b),
        a(b, P),
        a(P, S),
        a(S, M),
        a(e, $);
    },
    p(g, d) {
      d & 2 && t !== (t = g[19].friendlyName + "") && se(s, t),
        d & 2 && G !== (G = g[20].friendlyName + "") && se(D, G),
        g[18].status == 0
          ? v || ((v = Oe()), v.c(), v.m(e, F))
          : v && (v.d(1), (v = null)),
        g[18].status == 1
          ? o || ((o = Be()), o.c(), o.m(e, O))
          : o && (o.d(1), (o = null)),
        g[18].status == 2
          ? p || ((p = Le()), p.c(), p.m(e, L))
          : p && (p.d(1), (p = null)),
        g[18].status == 3
          ? w || ((w = Pe()), w.c(), w.m(e, E))
          : w && (w.d(1), (w = null)),
        d & 2 &&
          I !== (I = "/add-fixture-data?id=" + g[18].id) &&
          _(S, "href", I);
    },
    d(g) {
      g && n(e), v && v.d(), o && o.d(), p && p.d(), w && w.d();
    },
  };
}
function ot(r) {
  let e,
    l,
    t,
    s,
    c = `Season ${r[2]}`,
    i,
    G,
    D = `Gameweek ${r[0]}`,
    C,
    F,
    O,
    L,
    E,
    b,
    P,
    S,
    M,
    I,
    $,
    v,
    o,
    p,
    w,
    g,
    d,
    T,
    j,
    J,
    K,
    U,
    le,
    ae,
    Y,
    re,
    ie,
    Q,
    oe,
    ne,
    ce,
    ue,
    R = r[3],
    V = [];
  for (let f = 0; f < R.length; f += 1) V[f] = Ge(Ae(r, R, f));
  function me(f, B) {
    return f[1] && f[1].length > 0 ? it : rt;
  }
  let Z = me(r),
    H = Z(r);
  return {
    c() {
      (e = u("div")),
        (l = u("div")),
        (t = u("div")),
        (s = u("h1")),
        (i = y(c)),
        (G = y(" - ")),
        (C = y(D)),
        (F = N()),
        (O = u("div")),
        (L = u("div")),
        (E = u("div")),
        (b = u("button")),
        (P = y("<")),
        (M = N()),
        (I = u("select"));
      for (let f = 0; f < V.length; f += 1) V[f].c();
      ($ = N()),
        (v = u("button")),
        (o = y(">")),
        (w = N()),
        (g = u("div")),
        (d = u("div")),
        (T = u("div")),
        (j = u("div")),
        (J = y("Home Team")),
        (K = N()),
        (U = u("div")),
        (le = y("Away Team")),
        (ae = N()),
        (Y = u("div")),
        (re = y("Status")),
        (ie = N()),
        (Q = u("div")),
        (oe = y("Actions")),
        (ne = N()),
        H.c(),
        this.h();
    },
    l(f) {
      e = m(f, "DIV", { class: !0 });
      var B = h(e);
      l = m(B, "DIV", { class: !0 });
      var x = h(l);
      t = m(x, "DIV", { class: !0 });
      var X = h(t);
      s = m(X, "H1", {});
      var ee = h(s);
      (i = k(ee, c)),
        (G = k(ee, " - ")),
        (C = k(ee, D)),
        ee.forEach(n),
        X.forEach(n),
        (F = A(x)),
        (O = m(x, "DIV", { class: !0 }));
      var he = h(O);
      L = m(he, "DIV", { class: !0 });
      var _e = h(L);
      E = m(_e, "DIV", { class: !0 });
      var W = h(E);
      b = m(W, "BUTTON", { class: !0 });
      var ve = h(b);
      (P = k(ve, "<")),
        ve.forEach(n),
        (M = A(W)),
        (I = m(W, "SELECT", { class: !0 }));
      var pe = h(I);
      for (let de = 0; de < V.length; de += 1) V[de].l(pe);
      pe.forEach(n), ($ = A(W)), (v = m(W, "BUTTON", { class: !0 }));
      var be = h(v);
      (o = k(be, ">")),
        be.forEach(n),
        W.forEach(n),
        _e.forEach(n),
        he.forEach(n),
        (w = A(x)),
        (g = m(x, "DIV", { class: !0 }));
      var xe = h(g);
      d = m(xe, "DIV", { class: !0 });
      var te = h(d);
      T = m(te, "DIV", { class: !0 });
      var z = h(T);
      j = m(z, "DIV", { class: !0 });
      var ge = h(j);
      (J = k(ge, "Home Team")),
        ge.forEach(n),
        (K = A(z)),
        (U = m(z, "DIV", { class: !0 }));
      var we = h(U);
      (le = k(we, "Away Team")),
        we.forEach(n),
        (ae = A(z)),
        (Y = m(z, "DIV", { class: !0 }));
      var ye = h(Y);
      (re = k(ye, "Status")),
        ye.forEach(n),
        (ie = A(z)),
        (Q = m(z, "DIV", { class: !0 }));
      var ke = h(Q);
      (oe = k(ke, "Actions")),
        ke.forEach(n),
        z.forEach(n),
        (ne = A(te)),
        H.l(te),
        te.forEach(n),
        xe.forEach(n),
        x.forEach(n),
        B.forEach(n),
        this.h();
    },
    h() {
      _(t, "class", "flex p-4"),
        _(
          b,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
        ),
        (b.disabled = S = r[0] === 1),
        _(
          I,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px] md:min-w-[140px]"
        ),
        r[0] === void 0 && Ze(() => r[9].call(I)),
        _(
          v,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (v.disabled = p = r[0] === 38),
        _(E, "class", "md:flex md:items-center mt-2 sm:mt-0 ml-2"),
        _(
          L,
          "class",
          "flex flex-col sm:flex-row justify-between sm:items-center"
        ),
        _(O, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        _(j, "class", "w-1/4 px-4"),
        _(U, "class", "w-1/4 px-4"),
        _(Y, "class", "w-1/4 px-4"),
        _(Q, "class", "w-1/4 px-4"),
        _(
          T,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        _(d, "class", "overflow-x-auto flex-1"),
        _(g, "class", "flex flex-col space-y-4 mt-4 text-xs md:text-base"),
        _(l, "class", "flex flex-col space-y-4 text-xs md:text-base"),
        _(e, "class", "container-fluid mx-4 md:mx-16 mt-4 bg-panel");
    },
    m(f, B) {
      q(f, e, B),
        a(e, l),
        a(l, t),
        a(t, s),
        a(s, i),
        a(s, G),
        a(s, C),
        a(l, F),
        a(l, O),
        a(O, L),
        a(L, E),
        a(E, b),
        a(b, P),
        a(E, M),
        a(E, I);
      for (let x = 0; x < V.length; x += 1) V[x] && V[x].m(I, null);
      Ee(I, r[0], !0),
        a(E, $),
        a(E, v),
        a(v, o),
        a(l, w),
        a(l, g),
        a(g, d),
        a(d, T),
        a(T, j),
        a(j, J),
        a(T, K),
        a(T, U),
        a(U, le),
        a(T, ae),
        a(T, Y),
        a(Y, re),
        a(T, ie),
        a(T, Q),
        a(Q, oe),
        a(d, ne),
        H.m(d, null),
        ce ||
          ((ue = [
            fe(b, "click", r[8]),
            fe(I, "change", r[9]),
            fe(v, "click", r[10]),
          ]),
          (ce = !0));
    },
    p(f, B) {
      if (
        (B & 4 && c !== (c = `Season ${f[2]}`) && se(i, c),
        B & 1 && D !== (D = `Gameweek ${f[0]}`) && se(C, D),
        B & 9 && S !== (S = f[0] === 1) && (b.disabled = S),
        B & 8)
      ) {
        R = f[3];
        let x;
        for (x = 0; x < R.length; x += 1) {
          const X = Ae(f, R, x);
          V[x] ? V[x].p(X, B) : ((V[x] = Ge(X)), V[x].c(), V[x].m(I, null));
        }
        for (; x < V.length; x += 1) V[x].d(1);
        V.length = R.length;
      }
      B & 9 && Ee(I, f[0]),
        B & 9 && p !== (p = f[0] === 38) && (v.disabled = p),
        Z === (Z = me(f)) && H
          ? H.p(f, B)
          : (H.d(1), (H = Z(f)), H && (H.c(), H.m(d, null)));
    },
    d(f) {
      f && n(e), Fe(V, f), H.d(), (ce = !1), et(ue);
    },
  };
}
function nt(r) {
  let e, l;
  return (
    (e = new lt({
      props: { $$slots: { default: [ot] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        Ue(e.$$.fragment);
      },
      l(t) {
        qe(e.$$.fragment, t);
      },
      m(t, s) {
        ze(e, t, s), (l = !0);
      },
      p(t, [s]) {
        const c = {};
        s & 67108871 && (c.$$scope = { dirty: s, ctx: t }), e.$set(c);
      },
      i(t) {
        l || (Je(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        Ke(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ye(e, t);
      },
    }
  );
}
function ct(r, e, l) {
  let t;
  Qe(r, Te, (o) => l(17, (t = o)));
  let s,
    c,
    i,
    G,
    D,
    C,
    F,
    O,
    L,
    E = Array.from({ length: 38 }, (o, p) => p + 1),
    b,
    P;
  Re(async () => {
    try {
      await De.sync(),
        await Ve.sync(),
        await Se.sync(),
        (C = De.subscribe((o) => {
          l(7, (D = o)),
            l(2, (P = D?.activeSeason.name ?? "")),
            l(0, (b = D?.activeGameweek ?? 1));
        })),
        (F = Ve.subscribe((o) => {
          s = o;
        })),
        (O = Se.subscribe((o) => {
          G = o;
        })),
        (L = st.subscribe((o) => {
          l(6, (c = o)),
            l(1, (i = o.filter((p) => p.gameweek == D?.activeGameweek)));
        }));
    } catch (o) {
      at.show("Error fetching fixture validation list.", "error"),
        console.error("Error fetching fixture validation list.", o);
    } finally {
      We(Te, (t = !1), t);
    }
  }),
    Xe(() => {
      F?.(), O?.(), C?.();
    });
  const S = (o) => {
    l(0, (b = Math.max(1, Math.min(38, b + o))));
  };
  function M(o) {
    return s.find((p) => p.id === o);
  }
  const I = () => S(-1);
  function $() {
    (b = tt(this)), l(0, b), l(3, E);
  }
  const v = () => S(1);
  return (
    (r.$$.update = () => {
      r.$$.dirty & 193 &&
        D &&
        b &&
        l(1, (i = c.filter((o) => o.gameweek === b)));
    }),
    [b, i, P, E, S, M, c, D, I, $, v]
  );
}
class _t extends Me {
  constructor(e) {
    super(), $e(this, e, ct, nt, je, {});
  }
}
export { _t as component };
