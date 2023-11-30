import { f as Xe } from "../chunks/fixture-store.724d0928.js";
import { g as Dt } from "../chunks/governance-store.d0bbcce4.js";
import { w as de } from "../chunks/index.8caf67b2.js";
import {
  a as B,
  A as ve,
  b as K,
  B as ye,
  c as L,
  d as pe,
  e as te,
  G as a,
  g as be,
  h as i,
  H as le,
  i as ge,
  I as Qe,
  J as vt,
  k as h,
  K as ze,
  L as z,
  l as _,
  M as Be,
  m as y,
  n as d,
  N as ke,
  o as pt,
  O as yt,
  P as bt,
  Q as Le,
  q as V,
  r as C,
  S as Ee,
  s as we,
  u as ee,
  V as Ve,
  W as Se,
  X as Fe,
  Y as he,
  y as _e,
  z as me,
  Z as _t,
  _ as mt,
} from "../chunks/index.c7b38e5e.js";
import {
  a as wt,
  g as kt,
  i as Ae,
  l as Ze,
} from "../chunks/Layout.a538b3b7.js";
import { p as Et } from "../chunks/stores.f89c8fde.js";
import { r as gt, t as We } from "../chunks/team-store.90511bc6.js";
import { t as Ce } from "../chunks/toast-store.58fa49f6.js";
function $e(s, t, e) {
  const l = s.slice();
  return (l[17] = t[e]), (l[19] = e), l;
}
function et(s, t, e) {
  const l = s.slice();
  return (l[20] = t[e]), l;
}
function tt(s) {
  let t,
    e,
    l,
    n,
    c,
    r,
    o,
    p,
    m = s[1] && lt(s);
  return {
    c() {
      (t = h("div")),
        (e = h("div")),
        m && m.c(),
        (l = B()),
        (n = h("div")),
        (c = h("button")),
        (r = V("Done")),
        this.h();
    },
    l(v) {
      t = _(v, "DIV", { class: !0 });
      var f = y(t);
      e = _(f, "DIV", { class: !0 });
      var u = y(e);
      m && m.l(u), (l = L(u)), (n = _(u, "DIV", { class: !0 }));
      var g = y(n);
      c = _(g, "BUTTON", { class: !0 });
      var b = y(c);
      (r = C(b, "Done")),
        b.forEach(i),
        g.forEach(i),
        u.forEach(i),
        f.forEach(i),
        this.h();
    },
    h() {
      d(c, "class", "px-4 py-2 bg-blue-500 text-white rounded"),
        d(n, "class", "flex justify-end gap-3 mt-4"),
        d(
          e,
          "class",
          "relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md"
        ),
        d(
          t,
          "class",
          "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        );
    },
    m(v, f) {
      K(v, t, f),
        a(t, e),
        m && m.m(e, null),
        a(e, l),
        a(e, n),
        a(n, c),
        a(c, r),
        o || ((p = z(c, "click", s[16])), (o = !0));
    },
    p(v, f) {
      v[1]
        ? m
          ? m.p(v, f)
          : ((m = lt(v)), m.c(), m.m(e, l))
        : m && (m.d(1), (m = null));
    },
    d(v) {
      v && i(t), m && m.d(), (o = !1), p();
    },
  };
}
function lt(s) {
  let t,
    e,
    l = s[1].firstName !== "" ? s[1].firstName.charAt(0) + "." : "",
    n,
    c,
    r = s[1].lastName + "",
    o,
    p,
    m,
    v,
    f,
    u,
    g,
    b,
    D,
    U,
    N,
    P,
    I,
    M,
    A,
    T,
    F,
    O,
    E,
    w,
    k,
    G,
    Y,
    x,
    J,
    R,
    W,
    $,
    H,
    q,
    ae,
    ne,
    Me,
    De,
    oe,
    ie,
    Oe,
    je,
    ce = s[7],
    X = [];
  for (let S = 0; S < ce.length; S += 1) X[S] = at(et(s, ce, S));
  let ue = s[6],
    Z = [];
  for (let S = 0; S < ue.length; S += 1) Z[S] = st($e(s, ue, S));
  return {
    c() {
      (t = h("div")),
        (e = h("h4")),
        (n = V(l)),
        (c = B()),
        (o = V(r)),
        (p = V(" - Match Events")),
        (m = B()),
        (v = h("button")),
        (f = V("✕")),
        (u = B()),
        (g = h("div")),
        (b = h("h4")),
        (D = V("Add Event")),
        (U = B()),
        (N = h("div")),
        (P = h("div")),
        (I = h("label")),
        (M = V("Event Type")),
        (A = B()),
        (T = h("select")),
        (F = h("option")),
        (O = V("Select event type"));
      for (let S = 0; S < X.length; S += 1) X[S].c();
      (E = B()),
        (w = h("div")),
        (k = h("label")),
        (G = V("Start Minute")),
        (Y = B()),
        (x = h("input")),
        (J = B()),
        (R = h("div")),
        (W = h("label")),
        ($ = V("End Minute")),
        (H = B()),
        (q = h("input")),
        (ae = B()),
        (ne = h("button")),
        (Me = V("Add Event")),
        (De = B()),
        (oe = h("div")),
        (ie = h("ul"));
      for (let S = 0; S < Z.length; S += 1) Z[S].c();
      this.h();
    },
    l(S) {
      t = _(S, "DIV", { class: !0 });
      var Q = y(t);
      e = _(Q, "H4", { class: !0 });
      var j = y(e);
      (n = C(j, l)),
        (c = L(j)),
        (o = C(j, r)),
        (p = C(j, " - Match Events")),
        j.forEach(i),
        (m = L(Q)),
        (v = _(Q, "BUTTON", { class: !0 }));
      var se = y(v);
      (f = C(se, "✕")),
        se.forEach(i),
        Q.forEach(i),
        (u = L(S)),
        (g = _(S, "DIV", { class: !0 }));
      var Ie = y(g);
      b = _(Ie, "H4", { class: !0 });
      var He = y(b);
      (D = C(He, "Add Event")),
        He.forEach(i),
        (U = L(Ie)),
        (N = _(Ie, "DIV", { class: !0 }));
      var re = y(N);
      P = _(re, "DIV", {});
      var Te = y(P);
      I = _(Te, "LABEL", { for: !0, class: !0 });
      var xe = y(I);
      (M = C(xe, "Event Type")),
        xe.forEach(i),
        (A = L(Te)),
        (T = _(Te, "SELECT", { id: !0, class: !0 }));
      var Ue = y(T);
      F = _(Ue, "OPTION", {});
      var Ge = y(F);
      (O = C(Ge, "Select event type")), Ge.forEach(i);
      for (let fe = 0; fe < X.length; fe += 1) X[fe].l(Ue);
      Ue.forEach(i), Te.forEach(i), (E = L(re)), (w = _(re, "DIV", {}));
      var Ne = y(w);
      k = _(Ne, "LABEL", { for: !0, class: !0 });
      var Re = y(k);
      (G = C(Re, "Start Minute")),
        Re.forEach(i),
        (Y = L(Ne)),
        (x = _(Ne, "INPUT", { type: !0, id: !0, class: !0, placeholder: !0 })),
        Ne.forEach(i),
        (J = L(re)),
        (R = _(re, "DIV", {}));
      var Pe = y(R);
      W = _(Pe, "LABEL", { for: !0, class: !0 });
      var Ye = y(W);
      ($ = C(Ye, "End Minute")),
        Ye.forEach(i),
        (H = L(Pe)),
        (q = _(Pe, "INPUT", { type: !0, id: !0, class: !0, placeholder: !0 })),
        Pe.forEach(i),
        (ae = L(re)),
        (ne = _(re, "BUTTON", { class: !0 }));
      var Je = y(ne);
      (Me = C(Je, "Add Event")),
        Je.forEach(i),
        re.forEach(i),
        Ie.forEach(i),
        (De = L(S)),
        (oe = _(S, "DIV", { class: !0 }));
      var Ke = y(oe);
      ie = _(Ke, "UL", { class: !0 });
      var qe = y(ie);
      for (let fe = 0; fe < Z.length; fe += 1) Z[fe].l(qe);
      qe.forEach(i), Ke.forEach(i), this.h();
    },
    h() {
      d(e, "class", "text-lg font-bold"),
        d(v, "class", "text-black"),
        d(t, "class", "flex justify-between items-center"),
        d(b, "class", "text-lg font-bold mb-3"),
        d(I, "for", "eventType"),
        d(I, "class", "block text-sm font-medium text-gray-700"),
        (F.__value = "-1"),
        (F.value = F.__value),
        (F.disabled = !0),
        d(T, "id", "eventType"),
        d(
          T,
          "class",
          "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        ),
        s[3] === void 0 && vt(() => s[12].call(T)),
        d(k, "for", "startMinute"),
        d(k, "class", "block text-sm font-medium text-gray-700"),
        d(x, "type", "number"),
        d(x, "id", "startMinute"),
        d(
          x,
          "class",
          "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        ),
        d(x, "placeholder", "Enter start minute"),
        d(W, "for", "endMinute"),
        d(W, "class", "block text-sm font-medium text-gray-700"),
        d(q, "type", "number"),
        d(q, "id", "endMinute"),
        d(
          q,
          "class",
          "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        ),
        d(q, "placeholder", "Enter end minute"),
        d(ne, "class", "mt-2 px-4 py-2 bg-blue-500 text-white rounded"),
        d(N, "class", "flex flex-col gap-3"),
        d(g, "class", "mt-4 p-4 border-t border-gray-200"),
        d(ie, "class", "list-disc pl-5"),
        d(oe, "class", "mt-4");
    },
    m(S, Q) {
      K(S, t, Q),
        a(t, e),
        a(e, n),
        a(e, c),
        a(e, o),
        a(e, p),
        a(t, m),
        a(t, v),
        a(v, f),
        K(S, u, Q),
        K(S, g, Q),
        a(g, b),
        a(b, D),
        a(g, U),
        a(g, N),
        a(N, P),
        a(P, I),
        a(I, M),
        a(P, A),
        a(P, T),
        a(T, F),
        a(F, O);
      for (let j = 0; j < X.length; j += 1) X[j] && X[j].m(T, null);
      ze(T, s[3], !0),
        a(N, E),
        a(N, w),
        a(w, k),
        a(k, G),
        a(w, Y),
        a(w, x),
        Ve(x, s[4]),
        a(N, J),
        a(N, R),
        a(R, W),
        a(W, $),
        a(R, H),
        a(R, q),
        Ve(q, s[5]),
        a(N, ae),
        a(N, ne),
        a(ne, Me),
        K(S, De, Q),
        K(S, oe, Q),
        a(oe, ie);
      for (let j = 0; j < Z.length; j += 1) Z[j] && Z[j].m(ie, null);
      Oe ||
        ((je = [
          z(v, "click", s[11]),
          z(T, "change", s[12]),
          z(x, "input", s[13]),
          z(q, "input", s[14]),
          z(ne, "click", s[8]),
        ]),
        (Oe = !0));
    },
    p(S, Q) {
      if (
        (Q & 2 &&
          l !==
            (l = S[1].firstName !== "" ? S[1].firstName.charAt(0) + "." : "") &&
          ee(n, l),
        Q & 2 && r !== (r = S[1].lastName + "") && ee(o, r),
        Q & 128)
      ) {
        ce = S[7];
        let j;
        for (j = 0; j < ce.length; j += 1) {
          const se = et(S, ce, j);
          X[j] ? X[j].p(se, Q) : ((X[j] = at(se)), X[j].c(), X[j].m(T, null));
        }
        for (; j < X.length; j += 1) X[j].d(1);
        X.length = ce.length;
      }
      if (
        (Q & 136 && ze(T, S[3]),
        Q & 16 && Se(x.value) !== S[4] && Ve(x, S[4]),
        Q & 32 && Se(q.value) !== S[5] && Ve(q, S[5]),
        Q & 576)
      ) {
        ue = S[6];
        let j;
        for (j = 0; j < ue.length; j += 1) {
          const se = $e(S, ue, j);
          Z[j] ? Z[j].p(se, Q) : ((Z[j] = st(se)), Z[j].c(), Z[j].m(ie, null));
        }
        for (; j < Z.length; j += 1) Z[j].d(1);
        Z.length = ue.length;
      }
    },
    d(S) {
      S && i(t),
        S && i(u),
        S && i(g),
        Be(X, S),
        S && i(De),
        S && i(oe),
        Be(Z, S),
        (Oe = !1),
        ke(je);
    },
  };
}
function at(s) {
  let t,
    e = s[20].label + "",
    l;
  return {
    c() {
      (t = h("option")), (l = V(e)), this.h();
    },
    l(n) {
      t = _(n, "OPTION", {});
      var c = y(t);
      (l = C(c, e)), c.forEach(i), this.h();
    },
    h() {
      (t.__value = s[20].id), (t.value = t.__value);
    },
    m(n, c) {
      K(n, t, c), a(t, l);
    },
    p: le,
    d(n) {
      n && i(t);
    },
  };
}
function st(s) {
  let t,
    e,
    l = s[17].eventType + "",
    n,
    c,
    r = s[17].eventStartMinute + "",
    o,
    p,
    m = s[17].eventEndMinute + "",
    v,
    f,
    u,
    g,
    b,
    D,
    U,
    N;
  function P() {
    return s[15](s[19]);
  }
  return {
    c() {
      (t = h("li")),
        (e = h("span")),
        (n = V(l)),
        (c = V(" - From ")),
        (o = V(r)),
        (p = V(" to ")),
        (v = V(m)),
        (f = V(`
                  minutes`)),
        (u = B()),
        (g = h("button")),
        (b = V("Remove")),
        (D = B()),
        this.h();
    },
    l(I) {
      t = _(I, "LI", { class: !0 });
      var M = y(t);
      e = _(M, "SPAN", {});
      var A = y(e);
      (n = C(A, l)),
        (c = C(A, " - From ")),
        (o = C(A, r)),
        (p = C(A, " to ")),
        (v = C(A, m)),
        (f = C(
          A,
          `
                  minutes`
        )),
        A.forEach(i),
        (u = L(M)),
        (g = _(M, "BUTTON", { class: !0 }));
      var T = y(g);
      (b = C(T, "Remove")), T.forEach(i), (D = L(M)), M.forEach(i), this.h();
    },
    h() {
      d(g, "class", "px-3 py-1 bg-red-500 text-white rounded"),
        d(t, "class", "flex justify-between items-center mb-2");
    },
    m(I, M) {
      K(I, t, M),
        a(t, e),
        a(e, n),
        a(e, c),
        a(e, o),
        a(e, p),
        a(e, v),
        a(e, f),
        a(t, u),
        a(t, g),
        a(g, b),
        a(t, D),
        U || ((N = z(g, "click", P)), (U = !0));
    },
    p(I, M) {
      (s = I),
        M & 64 && l !== (l = s[17].eventType + "") && ee(n, l),
        M & 64 && r !== (r = s[17].eventStartMinute + "") && ee(o, r),
        M & 64 && m !== (m = s[17].eventEndMinute + "") && ee(v, m);
    },
    d(I) {
      I && i(t), (U = !1), N();
    },
  };
}
function It(s) {
  let t,
    e = s[0] && tt(s);
  return {
    c() {
      e && e.c(), (t = te());
    },
    l(l) {
      e && e.l(l), (t = te());
    },
    m(l, n) {
      e && e.m(l, n), K(l, t, n);
    },
    p(l, [n]) {
      l[0]
        ? e
          ? e.p(l, n)
          : ((e = tt(l)), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null));
    },
    i: le,
    o: le,
    d(l) {
      e && e.d(l), l && i(t);
    },
  };
}
function Tt(s, t, e) {
  let l,
    n = le,
    c = () => (n(), (n = Fe(m, (T) => e(6, (l = T)))), m);
  s.$$.on_destroy.push(() => n());
  let { show: r = !1 } = t,
    { player: o } = t,
    { fixtureId: p } = t,
    { playerEventData: m } = t;
  c();
  let v = -1,
    f = 0,
    u = 0;
  const g = [
    { id: 0, label: "Appearance" },
    { id: 1, label: "Goal Scored" },
    { id: 2, label: "Goal Assisted" },
    { id: 7, label: "Penalty Missed" },
    { id: 8, label: "Yellow Card" },
    { id: 9, label: "Red Card" },
    { id: 10, label: "Own Goal" },
  ];
  function b() {
    if (v && f !== null && u !== null) {
      const T = {
        playerId: o.id,
        eventType: Number(v),
        eventStartMinute: Number(f),
        eventEndMinute: Number(u),
        fixtureId: p,
        teamId: o.teamId,
      };
      let F = [...he(m), T];
      m.set(F), e(4, (f = 0)), e(5, (u = 0)), e(3, (v = -1));
    }
  }
  function D(T) {
    m.update((F) => F.filter((O, E) => E !== T));
  }
  const U = () => e(0, (r = !1));
  function N() {
    (v = bt(this)), e(3, v), e(7, g);
  }
  function P() {
    (f = Se(this.value)), e(4, f);
  }
  function I() {
    (u = Se(this.value)), e(5, u);
  }
  const M = (T) => D(T),
    A = () => e(0, (r = !1));
  return (
    (s.$$set = (T) => {
      "show" in T && e(0, (r = T.show)),
        "player" in T && e(1, (o = T.player)),
        "fixtureId" in T && e(10, (p = T.fixtureId)),
        "playerEventData" in T && c(e(2, (m = T.playerEventData)));
    }),
    [r, o, m, v, f, u, l, g, b, D, p, U, N, P, I, M, A]
  );
}
class Nt extends Ee {
  constructor(t) {
    super(),
      ge(this, t, Tt, It, we, {
        show: 0,
        player: 1,
        fixtureId: 10,
        playerEventData: 2,
      });
  }
}
function rt(s, t, e) {
  const l = s.slice();
  l[9] = t[e];
  const n = he(l[3]).some(function (...r) {
    return s[8](l[9], ...r);
  });
  return (l[10] = n), l;
}
function nt(s) {
  let t,
    e,
    l,
    n,
    c,
    r = s[2].friendlyName + "",
    o,
    p,
    m,
    v,
    f,
    u,
    g,
    b,
    D,
    U,
    N,
    P,
    I,
    M,
    A,
    T,
    F = s[4],
    O = [];
  for (let E = 0; E < F.length; E += 1) O[E] = ot(rt(s, F, E));
  return {
    c() {
      (t = h("div")),
        (e = h("div")),
        (l = h("div")),
        (n = h("h4")),
        (c = V("Select ")),
        (o = V(r)),
        (p = V(" Players")),
        (m = B()),
        (v = h("button")),
        (f = V("✕")),
        (u = B()),
        (g = h("div"));
      for (let E = 0; E < O.length; E += 1) O[E].c();
      (b = B()),
        (D = h("div")),
        (U = h("button")),
        (N = V("Cancel")),
        (P = B()),
        (I = h("button")),
        (M = V("Select Players")),
        this.h();
    },
    l(E) {
      t = _(E, "DIV", { class: !0 });
      var w = y(t);
      e = _(w, "DIV", { class: !0 });
      var k = y(e);
      l = _(k, "DIV", { class: !0 });
      var G = y(l);
      n = _(G, "H4", { class: !0 });
      var Y = y(n);
      (c = C(Y, "Select ")),
        (o = C(Y, r)),
        (p = C(Y, " Players")),
        Y.forEach(i),
        (m = L(G)),
        (v = _(G, "BUTTON", { class: !0 }));
      var x = y(v);
      (f = C(x, "✕")),
        x.forEach(i),
        G.forEach(i),
        (u = L(k)),
        (g = _(k, "DIV", { class: !0 }));
      var J = y(g);
      for (let H = 0; H < O.length; H += 1) O[H].l(J);
      J.forEach(i), (b = L(k)), (D = _(k, "DIV", { class: !0 }));
      var R = y(D);
      U = _(R, "BUTTON", { class: !0 });
      var W = y(U);
      (N = C(W, "Cancel")),
        W.forEach(i),
        (P = L(R)),
        (I = _(R, "BUTTON", { class: !0 }));
      var $ = y(I);
      (M = C($, "Select Players")),
        $.forEach(i),
        R.forEach(i),
        k.forEach(i),
        w.forEach(i),
        this.h();
    },
    h() {
      d(n, "class", "text-lg font-bold"),
        d(v, "class", "text-black"),
        d(l, "class", "flex justify-between items-center"),
        d(g, "class", "my-5 flex flex-wrap"),
        d(U, "class", "px-4 py-2 border rounded text-black"),
        d(I, "class", "px-4 py-2 bg-blue-500 text-white rounded"),
        d(D, "class", "flex justify-end gap-3"),
        d(
          e,
          "class",
          "relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md"
        ),
        d(
          t,
          "class",
          "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        );
    },
    m(E, w) {
      K(E, t, w),
        a(t, e),
        a(e, l),
        a(l, n),
        a(n, c),
        a(n, o),
        a(n, p),
        a(l, m),
        a(l, v),
        a(v, f),
        a(e, u),
        a(e, g);
      for (let k = 0; k < O.length; k += 1) O[k] && O[k].m(g, null);
      a(e, b),
        a(e, D),
        a(D, U),
        a(U, N),
        a(D, P),
        a(D, I),
        a(I, M),
        A ||
          ((T = [
            z(v, "click", s[6]),
            z(U, "click", s[6]),
            z(I, "click", s[6]),
          ]),
          (A = !0));
    },
    p(E, w) {
      if ((w & 4 && r !== (r = E[2].friendlyName + "") && ee(o, r), w & 56)) {
        F = E[4];
        let k;
        for (k = 0; k < F.length; k += 1) {
          const G = rt(E, F, k);
          O[k] ? O[k].p(G, w) : ((O[k] = ot(G)), O[k].c(), O[k].m(g, null));
        }
        for (; k < O.length; k += 1) O[k].d(1);
        O.length = F.length;
      }
    },
    d(E) {
      E && i(t), Be(O, E), (A = !1), ke(T);
    },
  };
}
function ot(s) {
  let t,
    e,
    l,
    n,
    c,
    r = `${s[9].firstName.length > 0 ? s[9].firstName.charAt(0) + "." : ""} ${
      s[9].lastName
    }`,
    o,
    p,
    m,
    v;
  function f(...u) {
    return s[7](s[9], ...u);
  }
  return {
    c() {
      (t = h("div")),
        (e = h("label")),
        (l = h("input")),
        (c = B()),
        (o = V(r)),
        (p = B()),
        this.h();
    },
    l(u) {
      t = _(u, "DIV", { class: !0 });
      var g = y(t);
      e = _(g, "LABEL", { class: !0 });
      var b = y(e);
      (l = _(b, "INPUT", { type: !0 })),
        (c = L(b)),
        (o = C(b, r)),
        b.forEach(i),
        (p = L(g)),
        g.forEach(i),
        this.h();
    },
    h() {
      d(l, "type", "checkbox"),
        (l.checked = n = s[10]),
        d(e, "class", "block"),
        d(t, "class", "flex-1 sm:flex-basis-1/2");
    },
    m(u, g) {
      K(u, t, g),
        a(t, e),
        a(e, l),
        a(e, c),
        a(e, o),
        a(t, p),
        m || ((v = z(l, "change", f)), (m = !0));
    },
    p(u, g) {
      (s = u),
        g & 24 && n !== (n = s[10]) && (l.checked = n),
        g & 16 &&
          r !==
            (r = `${
              s[9].firstName.length > 0 ? s[9].firstName.charAt(0) + "." : ""
            } ${s[9].lastName}`) &&
          ee(o, r);
    },
    d(u) {
      u && i(t), (m = !1), v();
    },
  };
}
function Pt(s) {
  let t,
    e = s[0] && nt(s);
  return {
    c() {
      e && e.c(), (t = te());
    },
    l(l) {
      e && e.l(l), (t = te());
    },
    m(l, n) {
      e && e.m(l, n), K(l, t, n);
    },
    p(l, [n]) {
      l[0]
        ? e
          ? e.p(l, n)
          : ((e = nt(l)), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null));
    },
    i: le,
    o: le,
    d(l) {
      e && e.d(l), l && i(t);
    },
  };
}
function Vt(s, t, e) {
  let l,
    n = le,
    c = () => (n(), (n = Fe(r, (b) => e(4, (l = b)))), r);
  s.$$.on_destroy.push(() => n());
  let { teamPlayers: r = de([]) } = t;
  c();
  let { selectedTeam: o } = t,
    { selectedPlayers: p = de([]) } = t,
    { show: m = !1 } = t;
  function v(b, D) {
    const U = b.target;
    let N = he(p),
      P = he(r);
    if (U.checked) {
      const I = P.find((M) => M.id === D.id);
      I && !N.some((M) => M.id === D.id) && (N = [...N, I]);
    } else N = N.filter((I) => I.id !== D.id);
  }
  function f() {
    e(0, (m = !1));
  }
  const u = (b, D) => {
      v(D, b);
    },
    g = (b, D) => D.id === b.id;
  return (
    (s.$$set = (b) => {
      "teamPlayers" in b && c(e(1, (r = b.teamPlayers))),
        "selectedTeam" in b && e(2, (o = b.selectedTeam)),
        "selectedPlayers" in b && e(3, (p = b.selectedPlayers)),
        "show" in b && e(0, (m = b.show));
    }),
    [m, r, o, p, l, v, f, u, g]
  );
}
class Ct extends Ee {
  constructor(t) {
    super(),
      ge(this, t, Vt, Pt, we, {
        teamPlayers: 1,
        selectedTeam: 2,
        selectedPlayers: 3,
        show: 0,
      });
  }
}
function it(s) {
  let t, e, l, n, c, r, o, p, m, v, f, u, g, b, D, U, N, P, I, M, A, T, F, O;
  return {
    c() {
      (t = h("div")),
        (e = h("div")),
        (l = h("div")),
        (n = h("h4")),
        (c = V("Confirm Fixture Data")),
        (r = B()),
        (o = h("button")),
        (p = V("✕")),
        (m = B()),
        (v = h("div")),
        (f = h("h1")),
        (u = V("Please confirm your fixture data.")),
        (g = B()),
        (b = h("p")),
        (D =
          V(`You will not be able to edit your submission and entries that differ
          from the accepted consensus data will not receive $FPL rewards. If
          consensus has already been reached for the fixture your submission
          will also not be counted.`)),
        (U = B()),
        (N = h("div")),
        (P = h("button")),
        (I = V("Cancel")),
        (M = B()),
        (A = h("button")),
        (T = V("Confirm")),
        this.h();
    },
    l(E) {
      t = _(E, "DIV", { class: !0 });
      var w = y(t);
      e = _(w, "DIV", { class: !0 });
      var k = y(e);
      l = _(k, "DIV", { class: !0 });
      var G = y(l);
      n = _(G, "H4", { class: !0 });
      var Y = y(n);
      (c = C(Y, "Confirm Fixture Data")),
        Y.forEach(i),
        (r = L(G)),
        (o = _(G, "BUTTON", { class: !0 }));
      var x = y(o);
      (p = C(x, "✕")),
        x.forEach(i),
        G.forEach(i),
        (m = L(k)),
        (v = _(k, "DIV", { class: !0 }));
      var J = y(v);
      f = _(J, "H1", {});
      var R = y(f);
      (u = C(R, "Please confirm your fixture data.")),
        R.forEach(i),
        (g = L(J)),
        (b = _(J, "P", { class: !0 }));
      var W = y(b);
      (D = C(
        W,
        `You will not be able to edit your submission and entries that differ
          from the accepted consensus data will not receive $FPL rewards. If
          consensus has already been reached for the fixture your submission
          will also not be counted.`
      )),
        W.forEach(i),
        J.forEach(i),
        (U = L(k)),
        (N = _(k, "DIV", { class: !0 }));
      var $ = y(N);
      P = _($, "BUTTON", { class: !0 });
      var H = y(P);
      (I = C(H, "Cancel")),
        H.forEach(i),
        (M = L($)),
        (A = _($, "BUTTON", { class: !0 }));
      var q = y(A);
      (T = C(q, "Confirm")),
        q.forEach(i),
        $.forEach(i),
        k.forEach(i),
        w.forEach(i),
        this.h();
    },
    h() {
      d(n, "class", "text-lg font-bold"),
        d(o, "class", "text-black"),
        d(l, "class", "flex justify-between items-center"),
        d(b, "class", "text-sm text-gray-600"),
        d(v, "class", "my-5"),
        d(P, "class", "px-4 py-2 border rounded text-black"),
        d(A, "class", "px-4 py-2 bg-blue-500 text-white rounded"),
        d(N, "class", "flex justify-end gap-3"),
        d(
          e,
          "class",
          "relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md"
        ),
        d(
          t,
          "class",
          "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        );
    },
    m(E, w) {
      K(E, t, w),
        a(t, e),
        a(e, l),
        a(l, n),
        a(n, c),
        a(l, r),
        a(l, o),
        a(o, p),
        a(e, m),
        a(e, v),
        a(v, f),
        a(f, u),
        a(v, g),
        a(v, b),
        a(b, D),
        a(e, U),
        a(e, N),
        a(N, P),
        a(P, I),
        a(N, M),
        a(N, A),
        a(A, T),
        F ||
          ((O = [
            z(o, "click", s[2]),
            z(P, "click", s[2]),
            z(A, "click", function () {
              Le(s[1]) && s[1].apply(this, arguments);
            }),
          ]),
          (F = !0));
    },
    p(E, w) {
      s = E;
    },
    d(E) {
      E && i(t), (F = !1), ke(O);
    },
  };
}
function St(s) {
  let t,
    e = s[0] && it(s);
  return {
    c() {
      e && e.c(), (t = te());
    },
    l(l) {
      e && e.l(l), (t = te());
    },
    m(l, n) {
      e && e.m(l, n), K(l, t, n);
    },
    p(l, [n]) {
      l[0]
        ? e
          ? e.p(l, n)
          : ((e = it(l)), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null));
    },
    i: le,
    o: le,
    d(l) {
      e && e.d(l), l && i(t);
    },
  };
}
function Mt(s, t, e) {
  let { show: l = !1 } = t,
    { onConfirm: n } = t;
  function c() {
    e(0, (l = !1));
  }
  return (
    (s.$$set = (r) => {
      "show" in r && e(0, (l = r.show)),
        "onConfirm" in r && e(1, (n = r.onConfirm));
    }),
    [l, n, c]
  );
}
class Ot extends Ee {
  constructor(t) {
    super(), ge(this, t, Mt, St, we, { show: 0, onConfirm: 1 });
  }
}
function ft(s) {
  let t, e, l, n, c, r, o, p, m, v, f, u, g, b, D, U, N, P, I, M, A;
  return {
    c() {
      (t = h("div")),
        (e = h("div")),
        (l = h("div")),
        (n = h("h4")),
        (c = V("Confirm Clear Draft")),
        (r = B()),
        (o = h("button")),
        (p = V("✕")),
        (m = B()),
        (v = h("div")),
        (f = h("h1")),
        (u = V("Please confirm you want to clear the draft from your cache.")),
        (g = B()),
        (b = h("div")),
        (D = h("button")),
        (U = V("Cancel")),
        (N = B()),
        (P = h("button")),
        (I = V("Confirm")),
        this.h();
    },
    l(T) {
      t = _(T, "DIV", { class: !0 });
      var F = y(t);
      e = _(F, "DIV", { class: !0 });
      var O = y(e);
      l = _(O, "DIV", { class: !0 });
      var E = y(l);
      n = _(E, "H4", { class: !0 });
      var w = y(n);
      (c = C(w, "Confirm Clear Draft")),
        w.forEach(i),
        (r = L(E)),
        (o = _(E, "BUTTON", { class: !0 }));
      var k = y(o);
      (p = C(k, "✕")),
        k.forEach(i),
        E.forEach(i),
        (m = L(O)),
        (v = _(O, "DIV", { class: !0 }));
      var G = y(v);
      f = _(G, "H1", {});
      var Y = y(f);
      (u = C(Y, "Please confirm you want to clear the draft from your cache.")),
        Y.forEach(i),
        G.forEach(i),
        (g = L(O)),
        (b = _(O, "DIV", { class: !0 }));
      var x = y(b);
      D = _(x, "BUTTON", { class: !0 });
      var J = y(D);
      (U = C(J, "Cancel")),
        J.forEach(i),
        (N = L(x)),
        (P = _(x, "BUTTON", { class: !0 }));
      var R = y(P);
      (I = C(R, "Confirm")),
        R.forEach(i),
        x.forEach(i),
        O.forEach(i),
        F.forEach(i),
        this.h();
    },
    h() {
      d(n, "class", "text-lg font-bold"),
        d(o, "class", "text-black"),
        d(l, "class", "flex justify-between items-center"),
        d(v, "class", "my-5"),
        d(D, "class", "px-4 py-2 border rounded text-black"),
        d(P, "class", "px-4 py-2 bg-blue-500 text-white rounded"),
        d(b, "class", "flex justify-end gap-3"),
        d(
          e,
          "class",
          "relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md"
        ),
        d(
          t,
          "class",
          "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        );
    },
    m(T, F) {
      K(T, t, F),
        a(t, e),
        a(e, l),
        a(l, n),
        a(n, c),
        a(l, r),
        a(l, o),
        a(o, p),
        a(e, m),
        a(e, v),
        a(v, f),
        a(f, u),
        a(e, g),
        a(e, b),
        a(b, D),
        a(D, U),
        a(b, N),
        a(b, P),
        a(P, I),
        M ||
          ((A = [
            z(o, "click", function () {
              Le(s[1]) && s[1].apply(this, arguments);
            }),
            z(D, "click", s[2]),
            z(P, "click", function () {
              Le(s[1]) && s[1].apply(this, arguments);
            }),
          ]),
          (M = !0));
    },
    p(T, F) {
      s = T;
    },
    d(T) {
      T && i(t), (M = !1), ke(A);
    },
  };
}
function Ut(s) {
  let t,
    e = s[0] && ft(s);
  return {
    c() {
      e && e.c(), (t = te());
    },
    l(l) {
      e && e.l(l), (t = te());
    },
    m(l, n) {
      e && e.m(l, n), K(l, t, n);
    },
    p(l, [n]) {
      l[0]
        ? e
          ? e.p(l, n)
          : ((e = ft(l)), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null));
    },
    i: le,
    o: le,
    d(l) {
      e && e.d(l), l && i(t);
    },
  };
}
function Bt(s, t, e) {
  let { show: l = !1 } = t,
    { onConfirm: n } = t;
  function c() {
    e(0, (l = !1));
  }
  return (
    (s.$$set = (r) => {
      "show" in r && e(0, (l = r.show)),
        "onConfirm" in r && e(1, (n = r.onConfirm));
    }),
    [l, n, c]
  );
}
class Lt extends Ee {
  constructor(t) {
    super(), ge(this, t, Bt, Ut, we, { show: 0, onConfirm: 1 });
  }
}
function ct(s, t, e) {
  const l = s.slice();
  return (l[30] = t[e]), l;
}
function ut(s, t, e) {
  const l = s.slice();
  return (l[30] = t[e]), l;
}
function At(s) {
  let t,
    e,
    l,
    n,
    c,
    r,
    o,
    p,
    m = s[15](s[0]?.homeTeamId ?? 0)?.friendlyName + "",
    v,
    f,
    u,
    g,
    b,
    D,
    U = s[15](s[0]?.awayTeamId ?? 0)?.friendlyName + "",
    N,
    P,
    I,
    M,
    A,
    T;
  function F(w, k) {
    if (w[4] === "home") return Ht;
    if (w[4] === "away") return jt;
  }
  let O = F(s),
    E = O && O(s);
  return {
    c() {
      (t = h("div")),
        (e = h("button")),
        (l = V("Save Draft")),
        (n = B()),
        (c = h("div")),
        (r = h("ul")),
        (o = h("li")),
        (p = h("button")),
        (v = V(m)),
        (g = B()),
        (b = h("li")),
        (D = h("button")),
        (N = V(U)),
        (M = B()),
        E && E.c(),
        this.h();
    },
    l(w) {
      t = _(w, "DIV", { class: !0 });
      var k = y(t);
      e = _(k, "BUTTON", { class: !0 });
      var G = y(e);
      (l = C(G, "Save Draft")),
        G.forEach(i),
        (n = L(k)),
        (c = _(k, "DIV", { class: !0 }));
      var Y = y(c);
      r = _(Y, "UL", { class: !0 });
      var x = y(r);
      o = _(x, "LI", { class: !0 });
      var J = y(o);
      p = _(J, "BUTTON", { class: !0 });
      var R = y(p);
      (v = C(R, m)),
        R.forEach(i),
        J.forEach(i),
        (g = L(x)),
        (b = _(x, "LI", { class: !0 }));
      var W = y(b);
      D = _(W, "BUTTON", { class: !0 });
      var $ = y(D);
      (N = C($, U)),
        $.forEach(i),
        W.forEach(i),
        x.forEach(i),
        (M = L(Y)),
        E && E.l(Y),
        Y.forEach(i),
        k.forEach(i),
        this.h();
    },
    h() {
      d(e, "class", "fpl-button"),
        d(
          p,
          "class",
          (f = `p-2 ${s[4] === "home" ? "text-white" : "text-gray-400"}`)
        ),
        d(
          o,
          "class",
          (u = `mr-4 text-xs md:text-base ${
            s[4] === "home" ? "active-tab" : ""
          }`)
        ),
        d(
          D,
          "class",
          (P = `p-2 ${s[4] === "away" ? "text-white" : "text-gray-400"}`)
        ),
        d(
          b,
          "class",
          (I = `mr-4 text-xs md:text-base ${
            s[4] === "away" ? "active-tab" : ""
          }`)
        ),
        d(r, "class", "flex rounded-t-lg bg-light-gray px-4 pt-2"),
        d(c, "class", "bg-panel rounded-lg m-4"),
        d(t, "class", "m-4");
    },
    m(w, k) {
      K(w, t, k),
        a(t, e),
        a(e, l),
        a(t, n),
        a(t, c),
        a(c, r),
        a(r, o),
        a(o, p),
        a(p, v),
        a(r, g),
        a(r, b),
        a(b, D),
        a(D, N),
        a(c, M),
        E && E.m(c, null),
        A ||
          ((T = [
            z(e, "click", s[12]),
            z(p, "click", s[18]),
            z(D, "click", s[19]),
          ]),
          (A = !0));
    },
    p(w, k) {
      k[0] & 1 &&
        m !== (m = w[15](w[0]?.homeTeamId ?? 0)?.friendlyName + "") &&
        ee(v, m),
        k[0] & 16 &&
          f !==
            (f = `p-2 ${w[4] === "home" ? "text-white" : "text-gray-400"}`) &&
          d(p, "class", f),
        k[0] & 16 &&
          u !==
            (u = `mr-4 text-xs md:text-base ${
              w[4] === "home" ? "active-tab" : ""
            }`) &&
          d(o, "class", u),
        k[0] & 1 &&
          U !== (U = w[15](w[0]?.awayTeamId ?? 0)?.friendlyName + "") &&
          ee(N, U),
        k[0] & 16 &&
          P !==
            (P = `p-2 ${w[4] === "away" ? "text-white" : "text-gray-400"}`) &&
          d(D, "class", P),
        k[0] & 16 &&
          I !==
            (I = `mr-4 text-xs md:text-base ${
              w[4] === "away" ? "active-tab" : ""
            }`) &&
          d(b, "class", I),
        O === (O = F(w)) && E
          ? E.p(w, k)
          : (E && E.d(1), (E = O && O(w)), E && (E.c(), E.m(c, null)));
    },
    d(w) {
      w && i(t), E && E.d(), (A = !1), ke(T);
    },
  };
}
function Ft(s) {
  let t, e, l;
  return {
    c() {
      (t = h("div")),
        (e = h("p")),
        (l = V("Loading Fixture Data...")),
        this.h();
    },
    l(n) {
      t = _(n, "DIV", { class: !0 });
      var c = y(t);
      e = _(c, "P", { class: !0 });
      var r = y(e);
      (l = C(r, "Loading Fixture Data...")),
        r.forEach(i),
        c.forEach(i),
        this.h();
    },
    h() {
      d(e, "class", "text-center mt-1"),
        d(t, "class", "flex items-center justify-center h-screen");
    },
    m(n, c) {
      K(n, t, c), a(t, e), a(e, l);
    },
    p: le,
    d(n) {
      n && i(t);
    },
  };
}
function jt(s) {
  let t = [],
    e = new Map(),
    l,
    n = s[6].filter(s[23]);
  const c = (r) => r[30].id;
  for (let r = 0; r < n.length; r += 1) {
    let o = ct(s, n, r),
      p = c(o);
    e.set(p, (t[r] = dt(p, o)));
  }
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      l = te();
    },
    l(r) {
      for (let o = 0; o < t.length; o += 1) t[o].l(r);
      l = te();
    },
    m(r, o) {
      for (let p = 0; p < t.length; p += 1) t[p] && t[p].m(r, o);
      K(r, l, o);
    },
    p(r, o) {
      o[0] & 65729 &&
        ((n = r[6].filter(r[23])),
        (t = _t(t, o, c, 1, r, n, e, l.parentNode, mt, dt, l, ct)));
    },
    d(r) {
      for (let o = 0; o < t.length; o += 1) t[o].d(r);
      r && i(l);
    },
  };
}
function Ht(s) {
  let t = [],
    e = new Map(),
    l,
    n = s[6].filter(s[20]);
  const c = (r) => r[30].id;
  for (let r = 0; r < n.length; r += 1) {
    let o = ut(s, n, r),
      p = c(o);
    e.set(p, (t[r] = ht(p, o)));
  }
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      l = te();
    },
    l(r) {
      for (let o = 0; o < t.length; o += 1) t[o].l(r);
      l = te();
    },
    m(r, o) {
      for (let p = 0; p < t.length; p += 1) t[p] && t[p].m(r, o);
      K(r, l, o);
    },
    p(r, o) {
      o[0] & 65729 &&
        ((n = r[6].filter(r[20])),
        (t = _t(t, o, c, 1, r, n, e, l.parentNode, mt, ht, l, ut)));
    },
    d(r) {
      for (let o = 0; o < t.length; o += 1) t[o].d(r);
      r && i(l);
    },
  };
}
function dt(s, t) {
  let e,
    l,
    n,
    c = t[30].lastName + "",
    r,
    o,
    p,
    m = t[30].firstName + "",
    v,
    f,
    u,
    g,
    b,
    D = t[7].filter(F).length + "",
    U,
    N,
    P,
    I,
    M,
    A,
    T;
  function F(...E) {
    return t[24](t[30], ...E);
  }
  function O() {
    return t[25](t[30]);
  }
  return {
    key: s,
    first: null,
    c() {
      (e = h("div")),
        (l = h("div")),
        (n = h("h5")),
        (r = V(c)),
        (o = B()),
        (p = h("p")),
        (v = V(m)),
        (f = B()),
        (u = h("div")),
        (g = h("p")),
        (b = V("Events: ")),
        (U = V(D)),
        (N = B()),
        (P = h("button")),
        (I = V("Update")),
        (M = B()),
        this.h();
    },
    l(E) {
      e = _(E, "DIV", { class: !0 });
      var w = y(e);
      l = _(w, "DIV", { class: !0 });
      var k = y(l);
      n = _(k, "H5", {});
      var G = y(n);
      (r = C(G, c)), G.forEach(i), (o = L(k)), (p = _(k, "P", { class: !0 }));
      var Y = y(p);
      (v = C(Y, m)),
        Y.forEach(i),
        k.forEach(i),
        (f = L(w)),
        (u = _(w, "DIV", { class: !0 }));
      var x = y(u);
      g = _(x, "P", {});
      var J = y(g);
      (b = C(J, "Events: ")),
        (U = C(J, D)),
        J.forEach(i),
        (N = L(x)),
        (P = _(x, "BUTTON", {}));
      var R = y(P);
      (I = C(R, "Update")),
        R.forEach(i),
        x.forEach(i),
        (M = L(w)),
        w.forEach(i),
        this.h();
    },
    h() {
      d(p, "class", "small-text mb-0 mt-0"),
        d(l, "class", "card-header"),
        d(u, "class", "card-body"),
        d(e, "class", "card player-card mb-4"),
        (this.first = e);
    },
    m(E, w) {
      K(E, e, w),
        a(e, l),
        a(l, n),
        a(n, r),
        a(l, o),
        a(l, p),
        a(p, v),
        a(e, f),
        a(e, u),
        a(u, g),
        a(g, b),
        a(g, U),
        a(u, N),
        a(u, P),
        a(P, I),
        a(e, M),
        A || ((T = z(P, "click", O)), (A = !0));
    },
    p(E, w) {
      (t = E),
        w[0] & 65 && c !== (c = t[30].lastName + "") && ee(r, c),
        w[0] & 65 && m !== (m = t[30].firstName + "") && ee(v, m),
        w[0] & 193 && D !== (D = t[7].filter(F).length + "") && ee(U, D);
    },
    d(E) {
      E && i(e), (A = !1), T();
    },
  };
}
function ht(s, t) {
  let e,
    l,
    n,
    c = t[30].lastName + "",
    r,
    o,
    p,
    m = t[30].firstName + "",
    v,
    f,
    u,
    g,
    b,
    D = t[7].filter(F).length + "",
    U,
    N,
    P,
    I,
    M,
    A,
    T;
  function F(...E) {
    return t[21](t[30], ...E);
  }
  function O() {
    return t[22](t[30]);
  }
  return {
    key: s,
    first: null,
    c() {
      (e = h("div")),
        (l = h("div")),
        (n = h("h5")),
        (r = V(c)),
        (o = B()),
        (p = h("p")),
        (v = V(m)),
        (f = B()),
        (u = h("div")),
        (g = h("p")),
        (b = V("Events: ")),
        (U = V(D)),
        (N = B()),
        (P = h("button")),
        (I = V("Update")),
        (M = B()),
        this.h();
    },
    l(E) {
      e = _(E, "DIV", { class: !0 });
      var w = y(e);
      l = _(w, "DIV", { class: !0 });
      var k = y(l);
      n = _(k, "H5", {});
      var G = y(n);
      (r = C(G, c)), G.forEach(i), (o = L(k)), (p = _(k, "P", { class: !0 }));
      var Y = y(p);
      (v = C(Y, m)),
        Y.forEach(i),
        k.forEach(i),
        (f = L(w)),
        (u = _(w, "DIV", { class: !0 }));
      var x = y(u);
      g = _(x, "P", {});
      var J = y(g);
      (b = C(J, "Events: ")),
        (U = C(J, D)),
        J.forEach(i),
        (N = L(x)),
        (P = _(x, "BUTTON", {}));
      var R = y(P);
      (I = C(R, "Update")),
        R.forEach(i),
        x.forEach(i),
        (M = L(w)),
        w.forEach(i),
        this.h();
    },
    h() {
      d(p, "class", "small-text mb-0 mt-0"),
        d(l, "class", "card-header"),
        d(u, "class", "card-body"),
        d(e, "class", "card player-card mb-4"),
        (this.first = e);
    },
    m(E, w) {
      K(E, e, w),
        a(e, l),
        a(l, n),
        a(n, r),
        a(l, o),
        a(l, p),
        a(p, v),
        a(e, f),
        a(e, u),
        a(u, g),
        a(g, b),
        a(g, U),
        a(u, N),
        a(u, P),
        a(P, I),
        a(e, M),
        A || ((T = z(P, "click", O)), (A = !0));
    },
    p(E, w) {
      (t = E),
        w[0] & 65 && c !== (c = t[30].lastName + "") && ee(r, c),
        w[0] & 65 && m !== (m = t[30].firstName + "") && ee(v, m),
        w[0] & 193 && D !== (D = t[7].filter(F).length + "") && ee(U, D);
    },
    d(E) {
      E && i(e), (A = !1), T();
    },
  };
}
function xt(s) {
  let t;
  function e(c, r) {
    return Ae ? Ft : At;
  }
  let n = e()(s);
  return {
    c() {
      n.c(), (t = te());
    },
    l(c) {
      n.l(c), (t = te());
    },
    m(c, r) {
      n.m(c, r), K(c, t, r);
    },
    p(c, r) {
      n.p(c, r);
    },
    d(c) {
      n.d(c), c && i(t);
    },
  };
}
function Gt(s) {
  let t, e, l, n, c, r, o, p, m, v;
  return (
    (t = new wt({
      props: { $$slots: { default: [xt] }, $$scope: { ctx: s } },
    })),
    (l = new Ct({
      props: {
        show: Rt,
        teamPlayers: s[8],
        selectedTeam: s[10],
        selectedPlayers: s[9],
      },
    })),
    (c = new Nt({
      props: {
        show: s[1],
        player: s[2],
        fixtureId: s[5],
        playerEventData: s[3],
      },
    })),
    (o = new Ot({ props: { show: Jt, onConfirm: s[11] } })),
    (m = new Lt({ props: { show: Yt, onConfirm: s[13] } })),
    {
      c() {
        _e(t.$$.fragment),
          (e = B()),
          _e(l.$$.fragment),
          (n = B()),
          _e(c.$$.fragment),
          (r = B()),
          _e(o.$$.fragment),
          (p = B()),
          _e(m.$$.fragment);
      },
      l(f) {
        me(t.$$.fragment, f),
          (e = L(f)),
          me(l.$$.fragment, f),
          (n = L(f)),
          me(c.$$.fragment, f),
          (r = L(f)),
          me(o.$$.fragment, f),
          (p = L(f)),
          me(m.$$.fragment, f);
      },
      m(f, u) {
        ve(t, f, u),
          K(f, e, u),
          ve(l, f, u),
          K(f, n, u),
          ve(c, f, u),
          K(f, r, u),
          ve(o, f, u),
          K(f, p, u),
          ve(m, f, u),
          (v = !0);
      },
      p(f, u) {
        const g = {};
        (u[0] & 209) | (u[1] & 16) && (g.$$scope = { dirty: u, ctx: f }),
          t.$set(g);
        const b = {};
        u[0] & 2 && (b.show = f[1]),
          u[0] & 4 && (b.player = f[2]),
          u[0] & 32 && (b.fixtureId = f[5]),
          u[0] & 8 && (b.playerEventData = f[3]),
          c.$set(b);
      },
      i(f) {
        v ||
          (be(t.$$.fragment, f),
          be(l.$$.fragment, f),
          be(c.$$.fragment, f),
          be(o.$$.fragment, f),
          be(m.$$.fragment, f),
          (v = !0));
      },
      o(f) {
        pe(t.$$.fragment, f),
          pe(l.$$.fragment, f),
          pe(c.$$.fragment, f),
          pe(o.$$.fragment, f),
          pe(m.$$.fragment, f),
          (v = !1);
      },
      d(f) {
        ye(t, f),
          f && i(e),
          ye(l, f),
          f && i(n),
          ye(c, f),
          f && i(r),
          ye(o, f),
          f && i(p),
          ye(m, f);
      },
    }
  );
}
let Rt = !1,
  Yt = !1,
  Jt = !1;
function Kt(s, t, e) {
  let l,
    n,
    c,
    r,
    o = le,
    p = () => (o(), (o = Fe(I, (H) => e(7, (r = H)))), I);
  Qe(s, Et, (H) => e(17, (n = H))), s.$$.on_destroy.push(() => o());
  let m,
    v,
    f,
    u,
    g,
    b = !1,
    D = de([]),
    U = de([]);
  Qe(s, U, (H) => e(6, (c = H)));
  let N,
    P,
    I = de([]);
  p();
  let M = "home";
  pt(async () => {
    await We.sync(),
      await Xe.sync(),
      (f = We.subscribe((ae) => {
        m = ae;
      })),
      (u = Xe.subscribe((ae) => {
        v = ae;
      })),
      e(0, (g = v.find((ae) => ae.id === l) ?? null));
    const H = `fixtureDraft_${l}`,
      q = localStorage.getItem(H);
    if (q) {
      const ae = JSON.parse(q);
      I.set(ae);
    }
  }),
    yt(() => {
      f?.(), u?.();
    });
  async function A() {
    Ae.set(!0), Ze.set("Saving Fixture Data");
    try {
      await Dt.submitFixtureData(l, he(I)),
        localStorage.removeItem(`fixtureDraft_${l}`),
        Ce.show("Fixture data saved", "success"),
        kt("/fixture-validation");
    } catch (H) {
      Ce.show("Error saving fixture data.", "error"),
        console.error("Error saving fixture data: ", H);
    } finally {
      Ae.set(!1), Ze.set("Loading");
    }
  }
  function T() {
    const H = { playerEventData: he(I) },
      q = `fixtureDraft_${l}`;
    localStorage.setItem(q, JSON.stringify(H, gt)),
      Ce.show("Draft saved.", "success");
  }
  function F() {
    p(e(3, (I = de([])))),
      localStorage.removeItem(`fixtureDraft_${l}`),
      Ce.show("Draft cleared.", "success");
  }
  function O(H) {
    e(4, (M = H));
  }
  function E(H) {
    return m.find((q) => q.id === H);
  }
  function w(H) {
    e(2, (P = H)), e(1, (b = !0));
  }
  const k = () => O("home"),
    G = () => O("away"),
    Y = (H) => H.teamId === g?.homeTeamId,
    x = (H, q) => q.playerId === H.id,
    J = (H) => w(H),
    R = (H) => H.teamId === g?.awayTeamId,
    W = (H, q) => q.playerId === H.id,
    $ = (H) => w(H);
  return (
    (s.$$.update = () => {
      s.$$.dirty[0] & 131072 &&
        e(5, (l = Number(n.url.searchParams.get("id"))));
    }),
    [
      g,
      b,
      P,
      I,
      M,
      l,
      c,
      r,
      D,
      U,
      N,
      A,
      T,
      F,
      O,
      E,
      w,
      n,
      k,
      G,
      Y,
      x,
      J,
      R,
      W,
      $,
    ]
  );
}
class tl extends Ee {
  constructor(t) {
    super(), ge(this, t, Kt, Gt, we, {}, null, [-1, -1]);
  }
}
export { tl as component };
