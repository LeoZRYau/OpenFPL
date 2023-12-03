import {
  k as _,
  G as a,
  d as ae,
  r as D,
  N as et,
  b as F,
  y as Fe,
  a as G,
  m as h,
  z as He,
  L as he,
  q as I,
  u as ie,
  i as Je,
  s as Ke,
  c as L,
  l as m,
  A as Me,
  h as o,
  o as Qe,
  M as qe,
  O as Re,
  e as re,
  g as se,
  K as Se,
  B as Ue,
  n as v,
  v as We,
  f as Xe,
  P as Ye,
  H as Z,
  S as ze,
  J as Ze,
} from "../chunks/index.a8c54947.js";
import {
  j as $e,
  L as at,
  f as lt,
  t as Ne,
  a as st,
  s as Te,
  e as tt,
} from "../chunks/Layout.0e76e124.js";
function Ae(r, e, l) {
  const t = r.slice();
  t[18] = e[l];
  const s = t[6](t[18].homeTeamId);
  t[19] = s;
  const n = t[6](t[18].awayTeamId);
  return (t[20] = n), t;
}
function Ge(r, e, l) {
  const t = r.slice();
  return (t[23] = e[l]), t;
}
function rt(r) {
  let e,
    l,
    t,
    s,
    n = `Season ${r[2]}`,
    i,
    k,
    d = `Gameweek ${r[0]}`,
    V,
    $,
    P,
    O,
    x,
    y,
    j,
    N,
    H,
    S,
    M,
    p,
    c,
    b,
    E,
    w,
    f,
    A,
    U,
    J,
    K,
    q,
    oe,
    ne,
    Q,
    ce,
    fe,
    R,
    de,
    ue,
    _e,
    ve,
    W = r[4],
    T = [];
  for (let u = 0; u < W.length; u += 1) T[u] = Le(Ge(r, W, u));
  function pe(u, B) {
    return u[1] && u[1].length > 0 ? nt : ot;
  }
  let ee = pe(r),
    C = ee(r);
  return {
    c() {
      (e = _("div")),
        (l = _("div")),
        (t = _("div")),
        (s = _("h1")),
        (i = I(n)),
        (k = I(" - ")),
        (V = I(d)),
        ($ = G()),
        (P = _("div")),
        (O = _("div")),
        (x = _("div")),
        (y = _("button")),
        (j = I("<")),
        (H = G()),
        (S = _("select"));
      for (let u = 0; u < T.length; u += 1) T[u].c();
      (M = G()),
        (p = _("button")),
        (c = I(">")),
        (E = G()),
        (w = _("div")),
        (f = _("div")),
        (A = _("div")),
        (U = _("div")),
        (J = I("Home Team")),
        (K = G()),
        (q = _("div")),
        (oe = I("Away Team")),
        (ne = G()),
        (Q = _("div")),
        (ce = I("Status")),
        (fe = G()),
        (R = _("div")),
        (de = I("Actions")),
        (ue = G()),
        C.c(),
        this.h();
    },
    l(u) {
      e = m(u, "DIV", { class: !0 });
      var B = h(e);
      l = m(B, "DIV", { class: !0 });
      var g = h(l);
      t = m(g, "DIV", { class: !0 });
      var Y = h(t);
      s = m(Y, "H1", {});
      var te = h(s);
      (i = D(te, n)),
        (k = D(te, " - ")),
        (V = D(te, d)),
        te.forEach(o),
        Y.forEach(o),
        ($ = L(g)),
        (P = m(g, "DIV", { class: !0 }));
      var be = h(P);
      O = m(be, "DIV", { class: !0 });
      var xe = h(O);
      x = m(xe, "DIV", { class: !0 });
      var X = h(x);
      y = m(X, "BUTTON", { class: !0 });
      var ge = h(y);
      (j = D(ge, "<")),
        ge.forEach(o),
        (H = L(X)),
        (S = m(X, "SELECT", { class: !0 }));
      var ke = h(S);
      for (let me = 0; me < T.length; me += 1) T[me].l(ke);
      ke.forEach(o), (M = L(X)), (p = m(X, "BUTTON", { class: !0 }));
      var we = h(p);
      (c = D(we, ">")),
        we.forEach(o),
        X.forEach(o),
        xe.forEach(o),
        be.forEach(o),
        (E = L(g)),
        (w = m(g, "DIV", { class: !0 }));
      var ye = h(w);
      f = m(ye, "DIV", { class: !0 });
      var le = h(f);
      A = m(le, "DIV", { class: !0 });
      var z = h(A);
      U = m(z, "DIV", { class: !0 });
      var Ee = h(U);
      (J = D(Ee, "Home Team")),
        Ee.forEach(o),
        (K = L(z)),
        (q = m(z, "DIV", { class: !0 }));
      var Ie = h(q);
      (oe = D(Ie, "Away Team")),
        Ie.forEach(o),
        (ne = L(z)),
        (Q = m(z, "DIV", { class: !0 }));
      var De = h(Q);
      (ce = D(De, "Status")),
        De.forEach(o),
        (fe = L(z)),
        (R = m(z, "DIV", { class: !0 }));
      var Ve = h(R);
      (de = D(Ve, "Actions")),
        Ve.forEach(o),
        z.forEach(o),
        (ue = L(le)),
        C.l(le),
        le.forEach(o),
        ye.forEach(o),
        g.forEach(o),
        B.forEach(o),
        this.h();
    },
    h() {
      v(t, "class", "flex p-4"),
        v(
          y,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
        ),
        (y.disabled = N = r[0] === 1),
        v(
          S,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px] md:min-w-[140px]"
        ),
        r[0] === void 0 && Ze(() => r[10].call(S)),
        v(
          p,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (p.disabled = b = r[0] === 38),
        v(x, "class", "md:flex md:items-center mt-2 sm:mt-0 ml-2"),
        v(
          O,
          "class",
          "flex flex-col sm:flex-row justify-between sm:items-center"
        ),
        v(P, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        v(U, "class", "w-1/4 px-4"),
        v(q, "class", "w-1/4 px-4"),
        v(Q, "class", "w-1/4 px-4"),
        v(R, "class", "w-1/4 px-4"),
        v(
          A,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        v(f, "class", "overflow-x-auto flex-1"),
        v(w, "class", "flex flex-col space-y-4 mt-4 text-xs md:text-base"),
        v(l, "class", "flex flex-col space-y-4 text-xs md:text-base"),
        v(e, "class", "container-fluid mx-4 md:mx-16 mt-4 bg-panel");
    },
    m(u, B) {
      F(u, e, B),
        a(e, l),
        a(l, t),
        a(t, s),
        a(s, i),
        a(s, k),
        a(s, V),
        a(l, $),
        a(l, P),
        a(P, O),
        a(O, x),
        a(x, y),
        a(y, j),
        a(x, H),
        a(x, S);
      for (let g = 0; g < T.length; g += 1) T[g] && T[g].m(S, null);
      Se(S, r[0], !0),
        a(x, M),
        a(x, p),
        a(p, c),
        a(l, E),
        a(l, w),
        a(w, f),
        a(f, A),
        a(A, U),
        a(U, J),
        a(A, K),
        a(A, q),
        a(q, oe),
        a(A, ne),
        a(A, Q),
        a(Q, ce),
        a(A, fe),
        a(A, R),
        a(R, de),
        a(f, ue),
        C.m(f, null),
        _e ||
          ((ve = [
            he(y, "click", r[9]),
            he(S, "change", r[10]),
            he(p, "click", r[11]),
          ]),
          (_e = !0));
    },
    p(u, B) {
      if (
        (B & 4 && n !== (n = `Season ${u[2]}`) && ie(i, n),
        B & 1 && d !== (d = `Gameweek ${u[0]}`) && ie(V, d),
        B & 17 && N !== (N = u[0] === 1) && (y.disabled = N),
        B & 16)
      ) {
        W = u[4];
        let g;
        for (g = 0; g < W.length; g += 1) {
          const Y = Ge(u, W, g);
          T[g] ? T[g].p(Y, B) : ((T[g] = Le(Y)), T[g].c(), T[g].m(S, null));
        }
        for (; g < T.length; g += 1) T[g].d(1);
        T.length = W.length;
      }
      B & 17 && Se(S, u[0]),
        B & 17 && b !== (b = u[0] === 38) && (p.disabled = b),
        ee === (ee = pe(u)) && C
          ? C.p(u, B)
          : (C.d(1), (C = ee(u)), C && (C.c(), C.m(f, null)));
    },
    i: Z,
    o: Z,
    d(u) {
      u && o(e), qe(T, u), C.d(), (_e = !1), et(ve);
    },
  };
}
function it(r) {
  let e, l;
  return (
    (e = new at({})),
    {
      c() {
        Fe(e.$$.fragment);
      },
      l(t) {
        He(e.$$.fragment, t);
      },
      m(t, s) {
        Me(e, t, s), (l = !0);
      },
      p: Z,
      i(t) {
        l || (se(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        ae(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ue(e, t);
      },
    }
  );
}
function Le(r) {
  let e,
    l,
    t = r[23] + "",
    s;
  return {
    c() {
      (e = _("option")), (l = I("Gameweek ")), (s = I(t)), this.h();
    },
    l(n) {
      e = m(n, "OPTION", {});
      var i = h(e);
      (l = D(i, "Gameweek ")), (s = D(i, t)), i.forEach(o), this.h();
    },
    h() {
      (e.__value = r[23]), (e.value = e.__value);
    },
    m(n, i) {
      F(n, e, i), a(e, l), a(e, s);
    },
    p: Z,
    d(n) {
      n && o(e);
    },
  };
}
function ot(r) {
  let e, l;
  return {
    c() {
      (e = _("p")), (l = I("No leaderboard data.")), this.h();
    },
    l(t) {
      e = m(t, "P", { class: !0 });
      var s = h(e);
      (l = D(s, "No leaderboard data.")), s.forEach(o), this.h();
    },
    h() {
      v(e, "class", "w-100 p-4");
    },
    m(t, s) {
      F(t, e, s), a(e, l);
    },
    p: Z,
    d(t) {
      t && o(e);
    },
  };
}
function nt(r) {
  let e,
    l = r[1],
    t = [];
  for (let s = 0; s < l.length; s += 1) t[s] = Ce(Ae(r, l, s));
  return {
    c() {
      for (let s = 0; s < t.length; s += 1) t[s].c();
      e = re();
    },
    l(s) {
      for (let n = 0; n < t.length; n += 1) t[n].l(s);
      e = re();
    },
    m(s, n) {
      for (let i = 0; i < t.length; i += 1) t[i] && t[i].m(s, n);
      F(s, e, n);
    },
    p(s, n) {
      if (n & 66) {
        l = s[1];
        let i;
        for (i = 0; i < l.length; i += 1) {
          const k = Ae(s, l, i);
          t[i]
            ? t[i].p(k, n)
            : ((t[i] = Ce(k)), t[i].c(), t[i].m(e.parentNode, e));
        }
        for (; i < t.length; i += 1) t[i].d(1);
        t.length = l.length;
      }
    },
    d(s) {
      qe(t, s), s && o(e);
    },
  };
}
function Oe(r) {
  let e, l;
  return {
    c() {
      (e = _("div")), (l = I("Scheduled")), this.h();
    },
    l(t) {
      e = m(t, "DIV", { class: !0 });
      var s = h(e);
      (l = D(s, "Scheduled")), s.forEach(o), this.h();
    },
    h() {
      v(e, "class", "w-1/4 px-4");
    },
    m(t, s) {
      F(t, e, s), a(e, l);
    },
    d(t) {
      t && o(e);
    },
  };
}
function Be(r) {
  let e, l;
  return {
    c() {
      (e = _("div")), (l = I("Active")), this.h();
    },
    l(t) {
      e = m(t, "DIV", { class: !0 });
      var s = h(e);
      (l = D(s, "Active")), s.forEach(o), this.h();
    },
    h() {
      v(e, "class", "w-1/4 px-4");
    },
    m(t, s) {
      F(t, e, s), a(e, l);
    },
    d(t) {
      t && o(e);
    },
  };
}
function Pe(r) {
  let e, l;
  return {
    c() {
      (e = _("div")), (l = I("Completed")), this.h();
    },
    l(t) {
      e = m(t, "DIV", { class: !0 });
      var s = h(e);
      (l = D(s, "Completed")), s.forEach(o), this.h();
    },
    h() {
      v(e, "class", "w-1/4 px-4");
    },
    m(t, s) {
      F(t, e, s), a(e, l);
    },
    d(t) {
      t && o(e);
    },
  };
}
function je(r) {
  let e, l;
  return {
    c() {
      (e = _("div")), (l = I("Verified")), this.h();
    },
    l(t) {
      e = m(t, "DIV", { class: !0 });
      var s = h(e);
      (l = D(s, "Verified")), s.forEach(o), this.h();
    },
    h() {
      v(e, "class", "w-1/4 px-4");
    },
    m(t, s) {
      F(t, e, s), a(e, l);
    },
    d(t) {
      t && o(e);
    },
  };
}
function Ce(r) {
  let e,
    l,
    t = r[19].friendlyName + "",
    s,
    n,
    i,
    k = r[20].friendlyName + "",
    d,
    V,
    $,
    P,
    O,
    x,
    y,
    j,
    N,
    H,
    S,
    M,
    p = r[18].status == 0 && Oe(),
    c = r[18].status == 1 && Be(),
    b = r[18].status == 2 && Pe(),
    E = r[18].status == 3 && je();
  return {
    c() {
      (e = _("div")),
        (l = _("div")),
        (s = I(t)),
        (n = G()),
        (i = _("div")),
        (d = I(k)),
        (V = G()),
        p && p.c(),
        ($ = G()),
        c && c.c(),
        (P = G()),
        b && b.c(),
        (O = G()),
        E && E.c(),
        (x = G()),
        (y = _("div")),
        (j = _("button")),
        (N = _("a")),
        (H = I("Add Fixture Data")),
        (M = G()),
        this.h();
    },
    l(w) {
      e = m(w, "DIV", { class: !0 });
      var f = h(e);
      l = m(f, "DIV", { class: !0 });
      var A = h(l);
      (s = D(A, t)), A.forEach(o), (n = L(f)), (i = m(f, "DIV", { class: !0 }));
      var U = h(i);
      (d = D(U, k)),
        U.forEach(o),
        (V = L(f)),
        p && p.l(f),
        ($ = L(f)),
        c && c.l(f),
        (P = L(f)),
        b && b.l(f),
        (O = L(f)),
        E && E.l(f),
        (x = L(f)),
        (y = m(f, "DIV", { class: !0 }));
      var J = h(y);
      j = m(J, "BUTTON", { class: !0 });
      var K = h(j);
      N = m(K, "A", { href: !0 });
      var q = h(N);
      (H = D(q, "Add Fixture Data")),
        q.forEach(o),
        K.forEach(o),
        J.forEach(o),
        (M = L(f)),
        f.forEach(o),
        this.h();
    },
    h() {
      v(l, "class", "w-1/4 px-4"),
        v(i, "class", "w-1/4 px-4"),
        v(N, "href", (S = "/add-fixture-data?id=" + r[18].id)),
        v(
          j,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        v(y, "class", "w-1/4 px-4"),
        v(
          e,
          "class",
          "flex items-center p-2 justify-between py-4 border-b border-gray-700 cursor-pointer"
        );
    },
    m(w, f) {
      F(w, e, f),
        a(e, l),
        a(l, s),
        a(e, n),
        a(e, i),
        a(i, d),
        a(e, V),
        p && p.m(e, null),
        a(e, $),
        c && c.m(e, null),
        a(e, P),
        b && b.m(e, null),
        a(e, O),
        E && E.m(e, null),
        a(e, x),
        a(e, y),
        a(y, j),
        a(j, N),
        a(N, H),
        a(e, M);
    },
    p(w, f) {
      f & 2 && t !== (t = w[19].friendlyName + "") && ie(s, t),
        f & 2 && k !== (k = w[20].friendlyName + "") && ie(d, k),
        w[18].status == 0
          ? p || ((p = Oe()), p.c(), p.m(e, $))
          : p && (p.d(1), (p = null)),
        w[18].status == 1
          ? c || ((c = Be()), c.c(), c.m(e, P))
          : c && (c.d(1), (c = null)),
        w[18].status == 2
          ? b || ((b = Pe()), b.c(), b.m(e, O))
          : b && (b.d(1), (b = null)),
        w[18].status == 3
          ? E || ((E = je()), E.c(), E.m(e, x))
          : E && (E.d(1), (E = null)),
        f & 2 &&
          S !== (S = "/add-fixture-data?id=" + w[18].id) &&
          v(N, "href", S);
    },
    d(w) {
      w && o(e), p && p.d(), c && c.d(), b && b.d(), E && E.d();
    },
  };
}
function ct(r) {
  let e, l, t, s;
  const n = [it, rt],
    i = [];
  function k(d, V) {
    return d[3] ? 0 : 1;
  }
  return (
    (e = k(r)),
    (l = i[e] = n[e](r)),
    {
      c() {
        l.c(), (t = re());
      },
      l(d) {
        l.l(d), (t = re());
      },
      m(d, V) {
        i[e].m(d, V), F(d, t, V), (s = !0);
      },
      p(d, V) {
        let $ = e;
        (e = k(d)),
          e === $
            ? i[e].p(d, V)
            : (We(),
              ae(i[$], 1, 1, () => {
                i[$] = null;
              }),
              Xe(),
              (l = i[e]),
              l ? l.p(d, V) : ((l = i[e] = n[e](d)), l.c()),
              se(l, 1),
              l.m(t.parentNode, t));
      },
      i(d) {
        s || (se(l), (s = !0));
      },
      o(d) {
        ae(l), (s = !1);
      },
      d(d) {
        i[e].d(d), d && o(t);
      },
    }
  );
}
function ft(r) {
  let e, l;
  return (
    (e = new tt({
      props: { $$slots: { default: [ct] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        Fe(e.$$.fragment);
      },
      l(t) {
        He(e.$$.fragment, t);
      },
      m(t, s) {
        Me(e, t, s), (l = !0);
      },
      p(t, [s]) {
        const n = {};
        s & 67108879 && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
      },
      i(t) {
        l || (se(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        ae(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ue(e, t);
      },
    }
  );
}
function dt(r, e, l) {
  let t,
    s,
    n,
    i,
    k,
    d,
    V,
    $,
    P,
    O = Array.from({ length: 38 }, (c, b) => b + 1),
    x,
    y,
    j = !0;
  Qe(async () => {
    try {
      await Te.sync(),
        await Ne.sync(),
        await $e.sync(),
        (d = Te.subscribe((c) => {
          l(8, (k = c)),
            l(2, (y = k?.activeSeason.name ?? "")),
            l(0, (x = k?.activeGameweek ?? 1));
        })),
        (V = Ne.subscribe((c) => {
          t = c;
        })),
        ($ = $e.subscribe((c) => {
          i = c;
        })),
        (P = lt.subscribe((c) => {
          l(7, (s = c)),
            l(1, (n = c.filter((b) => b.gameweek == k?.activeGameweek)));
        }));
    } catch (c) {
      st.show("Error fetching fixture validation list.", "error"),
        console.error("Error fetching fixture validation list.", c);
    } finally {
      l(3, (j = !1));
    }
  }),
    Re(() => {
      V?.(), $?.(), d?.();
    });
  const N = (c) => {
    l(0, (x = Math.max(1, Math.min(38, x + c))));
  };
  function H(c) {
    return t.find((b) => b.id === c);
  }
  const S = () => N(-1);
  function M() {
    (x = Ye(this)), l(0, x), l(4, O);
  }
  const p = () => N(1);
  return (
    (r.$$.update = () => {
      r.$$.dirty & 385 &&
        k &&
        x &&
        l(1, (n = s.filter((c) => c.gameweek === x)));
    }),
    [x, n, y, j, O, N, H, s, k, S, M, p]
  );
}
class mt extends ze {
  constructor(e) {
    super(), Je(this, e, dt, ft, Ke, {});
  }
}
export { mt as component };
