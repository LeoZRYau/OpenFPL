import { f as We } from "../chunks/fixture-store.8fe042dd.js";
import { g as vt } from "../chunks/governance-store.4e2c6360.js";
import { w as de } from "../chunks/index.8caf67b2.js";
import {
  a as A,
  A as ve,
  b as R,
  B as ye,
  c as B,
  d as pe,
  e as le,
  g as be,
  G as s,
  H as ee,
  h as o,
  i as ge,
  I as ze,
  J as it,
  K as qe,
  k as _,
  L as Q,
  l as v,
  M as Ae,
  m as p,
  n as m,
  N as Se,
  o as ft,
  O as ut,
  P as ct,
  Q as Be,
  q as S,
  r as V,
  S as Ee,
  s as we,
  u as ce,
  V as Ne,
  W as Ce,
  X as Le,
  Y as he,
  y as me,
  z as _e,
} from "../chunks/index.c7b38e5e.js";
import { r as mt } from "../chunks/index.d7eb2526.js";
import { a as _t } from "../chunks/Layout.39e2a716.js";
import { p as dt } from "../chunks/stores.f0f38284.js";
import { r as ht, t as Qe } from "../chunks/team-store.a9afdac8.js";
import { t as Oe } from "../chunks/toast-store.64ad2768.js";
function Xe(a, t, e) {
  const l = a.slice();
  return (l[17] = t[e]), (l[19] = e), l;
}
function Ze(a, t, e) {
  const l = a.slice();
  return (l[20] = t[e]), l;
}
function $e(a) {
  let t,
    e,
    l,
    r,
    i,
    c,
    b,
    D,
    d = a[1] && et(a);
  return {
    c() {
      (t = _("div")),
        (e = _("div")),
        d && d.c(),
        (l = A()),
        (r = _("div")),
        (i = _("button")),
        (c = S("Done")),
        this.h();
    },
    l(f) {
      t = v(f, "DIV", { class: !0 });
      var n = p(t);
      e = v(n, "DIV", { class: !0 });
      var h = p(e);
      d && d.l(h), (l = B(h)), (r = v(h, "DIV", { class: !0 }));
      var y = p(r);
      i = v(y, "BUTTON", { class: !0 });
      var u = p(i);
      (c = V(u, "Done")),
        u.forEach(o),
        y.forEach(o),
        h.forEach(o),
        n.forEach(o),
        this.h();
    },
    h() {
      m(i, "class", "px-4 py-2 bg-blue-500 text-white rounded"),
        m(r, "class", "flex justify-end gap-3 mt-4"),
        m(
          e,
          "class",
          "relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white"
        ),
        m(
          t,
          "class",
          "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        );
    },
    m(f, n) {
      R(f, t, n),
        s(t, e),
        d && d.m(e, null),
        s(e, l),
        s(e, r),
        s(r, i),
        s(i, c),
        b || ((D = Q(i, "click", a[16])), (b = !0));
    },
    p(f, n) {
      f[1]
        ? d
          ? d.p(f, n)
          : ((d = et(f)), d.c(), d.m(e, l))
        : d && (d.d(1), (d = null));
    },
    d(f) {
      f && o(t), d && d.d(), (b = !1), D();
    },
  };
}
function et(a) {
  let t,
    e,
    l = a[1].firstName !== "" ? a[1].firstName.charAt(0) + "." : "",
    r,
    i,
    c = a[1].lastName + "",
    b,
    D,
    d,
    f,
    n,
    h,
    y,
    u,
    T,
    U,
    I,
    M,
    w,
    x,
    F,
    E,
    L,
    O,
    N,
    j,
    k,
    Y,
    W,
    G,
    X,
    J,
    Z,
    $,
    C,
    H,
    te,
    re,
    Ve,
    ke,
    ne,
    oe,
    Me,
    Ue,
    fe = a[7],
    q = [];
  for (let g = 0; g < fe.length; g += 1) q[g] = tt(Ze(a, fe, g));
  let ue = a[6],
    z = [];
  for (let g = 0; g < ue.length; g += 1) z[g] = lt(Xe(a, ue, g));
  return {
    c() {
      (t = _("div")),
        (e = _("h4")),
        (r = S(l)),
        (i = A()),
        (b = S(c)),
        (D = S(" - Match Events")),
        (d = A()),
        (f = _("button")),
        (n = S("✕")),
        (h = A()),
        (y = _("div")),
        (u = _("h4")),
        (T = S("Add Event")),
        (U = A()),
        (I = _("div")),
        (M = _("div")),
        (w = _("label")),
        (x = S("Event Type")),
        (F = A()),
        (E = _("select")),
        (L = _("option")),
        (O = S("Select event type"));
      for (let g = 0; g < q.length; g += 1) q[g].c();
      (N = A()),
        (j = _("div")),
        (k = _("label")),
        (Y = S("Start Minute")),
        (W = A()),
        (G = _("input")),
        (X = A()),
        (J = _("div")),
        (Z = _("label")),
        ($ = S("End Minute")),
        (C = A()),
        (H = _("input")),
        (te = A()),
        (re = _("button")),
        (Ve = S("Add Event")),
        (ke = A()),
        (ne = _("div")),
        (oe = _("ul"));
      for (let g = 0; g < z.length; g += 1) z[g].c();
      this.h();
    },
    l(g) {
      t = v(g, "DIV", { class: !0 });
      var K = p(t);
      e = v(K, "H4", { class: !0 });
      var P = p(e);
      (r = V(P, l)),
        (i = B(P)),
        (b = V(P, c)),
        (D = V(P, " - Match Events")),
        P.forEach(o),
        (d = B(K)),
        (f = v(K, "BUTTON", { class: !0 }));
      var ae = p(f);
      (n = V(ae, "✕")),
        ae.forEach(o),
        K.forEach(o),
        (h = B(g)),
        (y = v(g, "DIV", { class: !0 }));
      var De = p(y);
      u = v(De, "H4", { class: !0 });
      var Fe = p(u);
      (T = V(Fe, "Add Event")),
        Fe.forEach(o),
        (U = B(De)),
        (I = v(De, "DIV", { class: !0 }));
      var se = p(I);
      M = v(se, "DIV", {});
      var Ie = p(M);
      w = v(Ie, "LABEL", { for: !0, class: !0 });
      var je = p(w);
      (x = V(je, "Event Type")),
        je.forEach(o),
        (F = B(Ie)),
        (E = v(Ie, "SELECT", { id: !0, class: !0 }));
      var xe = p(E);
      L = v(xe, "OPTION", {});
      var He = p(L);
      (O = V(He, "Select event type")), He.forEach(o);
      for (let ie = 0; ie < q.length; ie += 1) q[ie].l(xe);
      xe.forEach(o), Ie.forEach(o), (N = B(se)), (j = v(se, "DIV", {}));
      var Te = p(j);
      k = v(Te, "LABEL", { for: !0, class: !0 });
      var Ge = p(k);
      (Y = V(Ge, "Start Minute")),
        Ge.forEach(o),
        (W = B(Te)),
        (G = v(Te, "INPUT", { type: !0, id: !0, class: !0, placeholder: !0 })),
        Te.forEach(o),
        (X = B(se)),
        (J = v(se, "DIV", {}));
      var Pe = p(J);
      Z = v(Pe, "LABEL", { for: !0, class: !0 });
      var Re = p(Z);
      ($ = V(Re, "End Minute")),
        Re.forEach(o),
        (C = B(Pe)),
        (H = v(Pe, "INPUT", { type: !0, id: !0, class: !0, placeholder: !0 })),
        Pe.forEach(o),
        (te = B(se)),
        (re = v(se, "BUTTON", { class: !0 }));
      var Ye = p(re);
      (Ve = V(Ye, "Add Event")),
        Ye.forEach(o),
        se.forEach(o),
        De.forEach(o),
        (ke = B(g)),
        (ne = v(g, "DIV", { class: !0 }));
      var Je = p(ne);
      oe = v(Je, "UL", { class: !0 });
      var Ke = p(oe);
      for (let ie = 0; ie < z.length; ie += 1) z[ie].l(Ke);
      Ke.forEach(o), Je.forEach(o), this.h();
    },
    h() {
      m(e, "class", "text-lg font-bold"),
        m(f, "class", "text-black"),
        m(t, "class", "flex justify-between items-center"),
        m(u, "class", "text-lg font-bold mb-3"),
        m(w, "for", "eventType"),
        m(w, "class", "block text-sm font-medium text-gray-700"),
        (L.__value = "-1"),
        (L.value = L.__value),
        (L.disabled = !0),
        m(E, "id", "eventType"),
        m(
          E,
          "class",
          "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        ),
        a[3] === void 0 && it(() => a[12].call(E)),
        m(k, "for", "startMinute"),
        m(k, "class", "block text-sm font-medium text-gray-700"),
        m(G, "type", "number"),
        m(G, "id", "startMinute"),
        m(
          G,
          "class",
          "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        ),
        m(G, "placeholder", "Enter start minute"),
        m(Z, "for", "endMinute"),
        m(Z, "class", "block text-sm font-medium text-gray-700"),
        m(H, "type", "number"),
        m(H, "id", "endMinute"),
        m(
          H,
          "class",
          "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        ),
        m(H, "placeholder", "Enter end minute"),
        m(re, "class", "mt-2 px-4 py-2 bg-blue-500 text-white rounded"),
        m(I, "class", "flex flex-col gap-3"),
        m(y, "class", "mt-4 p-4 border-t border-gray-200"),
        m(oe, "class", "list-disc pl-5"),
        m(ne, "class", "mt-4");
    },
    m(g, K) {
      R(g, t, K),
        s(t, e),
        s(e, r),
        s(e, i),
        s(e, b),
        s(e, D),
        s(t, d),
        s(t, f),
        s(f, n),
        R(g, h, K),
        R(g, y, K),
        s(y, u),
        s(u, T),
        s(y, U),
        s(y, I),
        s(I, M),
        s(M, w),
        s(w, x),
        s(M, F),
        s(M, E),
        s(E, L),
        s(L, O);
      for (let P = 0; P < q.length; P += 1) q[P] && q[P].m(E, null);
      qe(E, a[3], !0),
        s(I, N),
        s(I, j),
        s(j, k),
        s(k, Y),
        s(j, W),
        s(j, G),
        Ne(G, a[4]),
        s(I, X),
        s(I, J),
        s(J, Z),
        s(Z, $),
        s(J, C),
        s(J, H),
        Ne(H, a[5]),
        s(I, te),
        s(I, re),
        s(re, Ve),
        R(g, ke, K),
        R(g, ne, K),
        s(ne, oe);
      for (let P = 0; P < z.length; P += 1) z[P] && z[P].m(oe, null);
      Me ||
        ((Ue = [
          Q(f, "click", a[11]),
          Q(E, "change", a[12]),
          Q(G, "input", a[13]),
          Q(H, "input", a[14]),
          Q(re, "click", a[8]),
        ]),
        (Me = !0));
    },
    p(g, K) {
      if (
        (K & 2 &&
          l !==
            (l = g[1].firstName !== "" ? g[1].firstName.charAt(0) + "." : "") &&
          ce(r, l),
        K & 2 && c !== (c = g[1].lastName + "") && ce(b, c),
        K & 128)
      ) {
        fe = g[7];
        let P;
        for (P = 0; P < fe.length; P += 1) {
          const ae = Ze(g, fe, P);
          q[P] ? q[P].p(ae, K) : ((q[P] = tt(ae)), q[P].c(), q[P].m(E, null));
        }
        for (; P < q.length; P += 1) q[P].d(1);
        q.length = fe.length;
      }
      if (
        (K & 136 && qe(E, g[3]),
        K & 16 && Ce(G.value) !== g[4] && Ne(G, g[4]),
        K & 32 && Ce(H.value) !== g[5] && Ne(H, g[5]),
        K & 576)
      ) {
        ue = g[6];
        let P;
        for (P = 0; P < ue.length; P += 1) {
          const ae = Xe(g, ue, P);
          z[P] ? z[P].p(ae, K) : ((z[P] = lt(ae)), z[P].c(), z[P].m(oe, null));
        }
        for (; P < z.length; P += 1) z[P].d(1);
        z.length = ue.length;
      }
    },
    d(g) {
      g && o(t),
        g && o(h),
        g && o(y),
        Ae(q, g),
        g && o(ke),
        g && o(ne),
        Ae(z, g),
        (Me = !1),
        Se(Ue);
    },
  };
}
function tt(a) {
  let t,
    e = a[20].label + "",
    l;
  return {
    c() {
      (t = _("option")), (l = S(e)), this.h();
    },
    l(r) {
      t = v(r, "OPTION", {});
      var i = p(t);
      (l = V(i, e)), i.forEach(o), this.h();
    },
    h() {
      (t.__value = a[20].id), (t.value = t.__value);
    },
    m(r, i) {
      R(r, t, i), s(t, l);
    },
    p: ee,
    d(r) {
      r && o(t);
    },
  };
}
function lt(a) {
  let t,
    e,
    l = a[17].eventType + "",
    r,
    i,
    c = a[17].eventStartMinute + "",
    b,
    D,
    d = a[17].eventEndMinute + "",
    f,
    n,
    h,
    y,
    u,
    T,
    U,
    I;
  function M() {
    return a[15](a[19]);
  }
  return {
    c() {
      (t = _("li")),
        (e = _("span")),
        (r = S(l)),
        (i = S(" - From ")),
        (b = S(c)),
        (D = S(" to ")),
        (f = S(d)),
        (n = S(`
                  minutes`)),
        (h = A()),
        (y = _("button")),
        (u = S("Remove")),
        (T = A()),
        this.h();
    },
    l(w) {
      t = v(w, "LI", { class: !0 });
      var x = p(t);
      e = v(x, "SPAN", {});
      var F = p(e);
      (r = V(F, l)),
        (i = V(F, " - From ")),
        (b = V(F, c)),
        (D = V(F, " to ")),
        (f = V(F, d)),
        (n = V(
          F,
          `
                  minutes`
        )),
        F.forEach(o),
        (h = B(x)),
        (y = v(x, "BUTTON", { class: !0 }));
      var E = p(y);
      (u = V(E, "Remove")), E.forEach(o), (T = B(x)), x.forEach(o), this.h();
    },
    h() {
      m(y, "class", "px-3 py-1 bg-red-500 text-white rounded"),
        m(t, "class", "flex justify-between items-center mb-2");
    },
    m(w, x) {
      R(w, t, x),
        s(t, e),
        s(e, r),
        s(e, i),
        s(e, b),
        s(e, D),
        s(e, f),
        s(e, n),
        s(t, h),
        s(t, y),
        s(y, u),
        s(t, T),
        U || ((I = Q(y, "click", M)), (U = !0));
    },
    p(w, x) {
      (a = w),
        x & 64 && l !== (l = a[17].eventType + "") && ce(r, l),
        x & 64 && c !== (c = a[17].eventStartMinute + "") && ce(b, c),
        x & 64 && d !== (d = a[17].eventEndMinute + "") && ce(f, d);
    },
    d(w) {
      w && o(t), (U = !1), I();
    },
  };
}
function bt(a) {
  let t,
    e = a[0] && $e(a);
  return {
    c() {
      e && e.c(), (t = le());
    },
    l(l) {
      e && e.l(l), (t = le());
    },
    m(l, r) {
      e && e.m(l, r), R(l, t, r);
    },
    p(l, [r]) {
      l[0]
        ? e
          ? e.p(l, r)
          : ((e = $e(l)), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null));
    },
    i: ee,
    o: ee,
    d(l) {
      e && e.d(l), l && o(t);
    },
  };
}
function pt(a, t, e) {
  let l,
    r = ee,
    i = () => (r(), (r = Le(d, (E) => e(6, (l = E)))), d);
  a.$$.on_destroy.push(() => r());
  let { show: c = !1 } = t,
    { player: b } = t,
    { fixtureId: D } = t,
    { playerEventData: d } = t;
  i();
  let f = -1,
    n = 0,
    h = 0;
  const y = [
    { id: 0, label: "Appearance" },
    { id: 1, label: "Goal Scored" },
    { id: 2, label: "Goal Assisted" },
    { id: 7, label: "Penalty Missed" },
    { id: 8, label: "Yellow Card" },
    { id: 9, label: "Red Card" },
    { id: 10, label: "Own Goal" },
  ];
  function u() {
    if (f && n !== null && h !== null) {
      const E = {
        playerId: b.id,
        eventType: Number(f),
        eventStartMinute: Number(n),
        eventEndMinute: Number(h),
        fixtureId: D,
        teamId: b.teamId,
      };
      let L = [...he(d), E];
      d.set(L), e(4, (n = 0)), e(5, (h = 0)), e(3, (f = -1));
    }
  }
  function T(E) {
    d.update((L) => L.filter((O, N) => N !== E));
  }
  const U = () => e(0, (c = !1));
  function I() {
    (f = ct(this)), e(3, f), e(7, y);
  }
  function M() {
    (n = Ce(this.value)), e(4, n);
  }
  function w() {
    (h = Ce(this.value)), e(5, h);
  }
  const x = (E) => T(E),
    F = () => e(0, (c = !1));
  return (
    (a.$$set = (E) => {
      "show" in E && e(0, (c = E.show)),
        "player" in E && e(1, (b = E.player)),
        "fixtureId" in E && e(10, (D = E.fixtureId)),
        "playerEventData" in E && i(e(2, (d = E.playerEventData)));
    }),
    [c, b, d, f, n, h, l, y, u, T, D, U, I, M, w, x, F]
  );
}
class yt extends Ee {
  constructor(t) {
    super(),
      ge(this, t, pt, bt, we, {
        show: 0,
        player: 1,
        fixtureId: 10,
        playerEventData: 2,
      });
  }
}
function at(a, t, e) {
  const l = a.slice();
  l[9] = t[e];
  const r = he(l[3]).some(function (...c) {
    return a[8](l[9], ...c);
  });
  return (l[10] = r), l;
}
function st(a) {
  let t,
    e,
    l,
    r,
    i,
    c = a[2].friendlyName + "",
    b,
    D,
    d,
    f,
    n,
    h,
    y,
    u,
    T,
    U,
    I,
    M,
    w,
    x,
    F,
    E,
    L = a[4],
    O = [];
  for (let N = 0; N < L.length; N += 1) O[N] = rt(at(a, L, N));
  return {
    c() {
      (t = _("div")),
        (e = _("div")),
        (l = _("div")),
        (r = _("h4")),
        (i = S("Select ")),
        (b = S(c)),
        (D = S(" Players")),
        (d = A()),
        (f = _("button")),
        (n = S("✕")),
        (h = A()),
        (y = _("div"));
      for (let N = 0; N < O.length; N += 1) O[N].c();
      (u = A()),
        (T = _("div")),
        (U = _("button")),
        (I = S("Cancel")),
        (M = A()),
        (w = _("button")),
        (x = S("Select Players")),
        this.h();
    },
    l(N) {
      t = v(N, "DIV", { class: !0 });
      var j = p(t);
      e = v(j, "DIV", { class: !0 });
      var k = p(e);
      l = v(k, "DIV", { class: !0 });
      var Y = p(l);
      r = v(Y, "H4", { class: !0 });
      var W = p(r);
      (i = V(W, "Select ")),
        (b = V(W, c)),
        (D = V(W, " Players")),
        W.forEach(o),
        (d = B(Y)),
        (f = v(Y, "BUTTON", { class: !0 }));
      var G = p(f);
      (n = V(G, "✕")),
        G.forEach(o),
        Y.forEach(o),
        (h = B(k)),
        (y = v(k, "DIV", { class: !0 }));
      var X = p(y);
      for (let C = 0; C < O.length; C += 1) O[C].l(X);
      X.forEach(o), (u = B(k)), (T = v(k, "DIV", { class: !0 }));
      var J = p(T);
      U = v(J, "BUTTON", { class: !0 });
      var Z = p(U);
      (I = V(Z, "Cancel")),
        Z.forEach(o),
        (M = B(J)),
        (w = v(J, "BUTTON", { class: !0 }));
      var $ = p(w);
      (x = V($, "Select Players")),
        $.forEach(o),
        J.forEach(o),
        k.forEach(o),
        j.forEach(o),
        this.h();
    },
    h() {
      m(r, "class", "text-lg font-bold"),
        m(f, "class", "text-black"),
        m(l, "class", "flex justify-between items-center"),
        m(y, "class", "my-5 flex flex-wrap"),
        m(U, "class", "px-4 py-2 border rounded text-black"),
        m(w, "class", "px-4 py-2 bg-blue-500 text-white rounded"),
        m(T, "class", "flex justify-end gap-3"),
        m(
          e,
          "class",
          "relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white"
        ),
        m(
          t,
          "class",
          "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        );
    },
    m(N, j) {
      R(N, t, j),
        s(t, e),
        s(e, l),
        s(l, r),
        s(r, i),
        s(r, b),
        s(r, D),
        s(l, d),
        s(l, f),
        s(f, n),
        s(e, h),
        s(e, y);
      for (let k = 0; k < O.length; k += 1) O[k] && O[k].m(y, null);
      s(e, u),
        s(e, T),
        s(T, U),
        s(U, I),
        s(T, M),
        s(T, w),
        s(w, x),
        F ||
          ((E = [
            Q(f, "click", a[6]),
            Q(U, "click", a[6]),
            Q(w, "click", a[6]),
          ]),
          (F = !0));
    },
    p(N, j) {
      if ((j & 4 && c !== (c = N[2].friendlyName + "") && ce(b, c), j & 56)) {
        L = N[4];
        let k;
        for (k = 0; k < L.length; k += 1) {
          const Y = at(N, L, k);
          O[k] ? O[k].p(Y, j) : ((O[k] = rt(Y)), O[k].c(), O[k].m(y, null));
        }
        for (; k < O.length; k += 1) O[k].d(1);
        O.length = L.length;
      }
    },
    d(N) {
      N && o(t), Ae(O, N), (F = !1), Se(E);
    },
  };
}
function rt(a) {
  let t,
    e,
    l,
    r,
    i,
    c = `${a[9].firstName.length > 0 ? a[9].firstName.charAt(0) + "." : ""} ${
      a[9].lastName
    }`,
    b,
    D,
    d,
    f;
  function n(...h) {
    return a[7](a[9], ...h);
  }
  return {
    c() {
      (t = _("div")),
        (e = _("label")),
        (l = _("input")),
        (i = A()),
        (b = S(c)),
        (D = A()),
        this.h();
    },
    l(h) {
      t = v(h, "DIV", { class: !0 });
      var y = p(t);
      e = v(y, "LABEL", { class: !0 });
      var u = p(e);
      (l = v(u, "INPUT", { type: !0 })),
        (i = B(u)),
        (b = V(u, c)),
        u.forEach(o),
        (D = B(y)),
        y.forEach(o),
        this.h();
    },
    h() {
      m(l, "type", "checkbox"),
        (l.checked = r = a[10]),
        m(e, "class", "block"),
        m(t, "class", "flex-1 sm:flex-basis-1/2");
    },
    m(h, y) {
      R(h, t, y),
        s(t, e),
        s(e, l),
        s(e, i),
        s(e, b),
        s(t, D),
        d || ((f = Q(l, "change", n)), (d = !0));
    },
    p(h, y) {
      (a = h),
        y & 24 && r !== (r = a[10]) && (l.checked = r),
        y & 16 &&
          c !==
            (c = `${
              a[9].firstName.length > 0 ? a[9].firstName.charAt(0) + "." : ""
            } ${a[9].lastName}`) &&
          ce(b, c);
    },
    d(h) {
      h && o(t), (d = !1), f();
    },
  };
}
function Et(a) {
  let t,
    e = a[0] && st(a);
  return {
    c() {
      e && e.c(), (t = le());
    },
    l(l) {
      e && e.l(l), (t = le());
    },
    m(l, r) {
      e && e.m(l, r), R(l, t, r);
    },
    p(l, [r]) {
      l[0]
        ? e
          ? e.p(l, r)
          : ((e = st(l)), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null));
    },
    i: ee,
    o: ee,
    d(l) {
      e && e.d(l), l && o(t);
    },
  };
}
function gt(a, t, e) {
  let l,
    r = ee,
    i = () => (r(), (r = Le(c, (u) => e(4, (l = u)))), c);
  a.$$.on_destroy.push(() => r());
  let { teamPlayers: c = de([]) } = t;
  i();
  let { selectedTeam: b } = t,
    { selectedPlayers: D = de([]) } = t,
    { show: d = !1 } = t;
  function f(u, T) {
    const U = u.target;
    let I = he(D),
      M = he(c);
    if (U.checked) {
      const w = M.find((x) => x.id === T.id);
      w && !I.some((x) => x.id === T.id) && (I = [...I, w]);
    } else I = I.filter((w) => w.id !== T.id);
  }
  function n() {
    e(0, (d = !1));
  }
  const h = (u, T) => {
      f(T, u);
    },
    y = (u, T) => T.id === u.id;
  return (
    (a.$$set = (u) => {
      "teamPlayers" in u && i(e(1, (c = u.teamPlayers))),
        "selectedTeam" in u && e(2, (b = u.selectedTeam)),
        "selectedPlayers" in u && e(3, (D = u.selectedPlayers)),
        "show" in u && e(0, (d = u.show));
    }),
    [d, c, b, D, l, f, n, h, y]
  );
}
class wt extends Ee {
  constructor(t) {
    super(),
      ge(this, t, gt, Et, we, {
        teamPlayers: 1,
        selectedTeam: 2,
        selectedPlayers: 3,
        show: 0,
      });
  }
}
function nt(a) {
  let t, e, l, r, i, c, b, D, d, f, n, h, y, u, T, U, I, M, w, x, F, E, L, O;
  return {
    c() {
      (t = _("div")),
        (e = _("div")),
        (l = _("div")),
        (r = _("h4")),
        (i = S("Confirm Fixture Data")),
        (c = A()),
        (b = _("button")),
        (D = S("✕")),
        (d = A()),
        (f = _("div")),
        (n = _("h1")),
        (h = S("Please confirm your fixture data.")),
        (y = A()),
        (u = _("p")),
        (T =
          S(`You will not be able to edit your submission and entries that differ
          from the accepted consensus data will not receive $FPL rewards. If
          consensus has already been reached for the fixture your submission
          will also not be counted.`)),
        (U = A()),
        (I = _("div")),
        (M = _("button")),
        (w = S("Cancel")),
        (x = A()),
        (F = _("button")),
        (E = S("Confirm")),
        this.h();
    },
    l(N) {
      t = v(N, "DIV", { class: !0 });
      var j = p(t);
      e = v(j, "DIV", { class: !0 });
      var k = p(e);
      l = v(k, "DIV", { class: !0 });
      var Y = p(l);
      r = v(Y, "H4", { class: !0 });
      var W = p(r);
      (i = V(W, "Confirm Fixture Data")),
        W.forEach(o),
        (c = B(Y)),
        (b = v(Y, "BUTTON", { class: !0 }));
      var G = p(b);
      (D = V(G, "✕")),
        G.forEach(o),
        Y.forEach(o),
        (d = B(k)),
        (f = v(k, "DIV", { class: !0 }));
      var X = p(f);
      n = v(X, "H1", {});
      var J = p(n);
      (h = V(J, "Please confirm your fixture data.")),
        J.forEach(o),
        (y = B(X)),
        (u = v(X, "P", { class: !0 }));
      var Z = p(u);
      (T = V(
        Z,
        `You will not be able to edit your submission and entries that differ
          from the accepted consensus data will not receive $FPL rewards. If
          consensus has already been reached for the fixture your submission
          will also not be counted.`
      )),
        Z.forEach(o),
        X.forEach(o),
        (U = B(k)),
        (I = v(k, "DIV", { class: !0 }));
      var $ = p(I);
      M = v($, "BUTTON", { class: !0 });
      var C = p(M);
      (w = V(C, "Cancel")),
        C.forEach(o),
        (x = B($)),
        (F = v($, "BUTTON", { class: !0 }));
      var H = p(F);
      (E = V(H, "Confirm")),
        H.forEach(o),
        $.forEach(o),
        k.forEach(o),
        j.forEach(o),
        this.h();
    },
    h() {
      m(r, "class", "text-lg font-bold"),
        m(b, "class", "text-black"),
        m(l, "class", "flex justify-between items-center"),
        m(u, "class", "text-sm text-gray-600"),
        m(f, "class", "my-5"),
        m(M, "class", "px-4 py-2 border rounded text-black"),
        m(F, "class", "px-4 py-2 bg-blue-500 text-white rounded"),
        m(I, "class", "flex justify-end gap-3"),
        m(
          e,
          "class",
          "relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white"
        ),
        m(
          t,
          "class",
          "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        );
    },
    m(N, j) {
      R(N, t, j),
        s(t, e),
        s(e, l),
        s(l, r),
        s(r, i),
        s(l, c),
        s(l, b),
        s(b, D),
        s(e, d),
        s(e, f),
        s(f, n),
        s(n, h),
        s(f, y),
        s(f, u),
        s(u, T),
        s(e, U),
        s(e, I),
        s(I, M),
        s(M, w),
        s(I, x),
        s(I, F),
        s(F, E),
        L ||
          ((O = [
            Q(b, "click", a[2]),
            Q(M, "click", a[2]),
            Q(F, "click", function () {
              Be(a[1]) && a[1].apply(this, arguments);
            }),
          ]),
          (L = !0));
    },
    p(N, j) {
      a = N;
    },
    d(N) {
      N && o(t), (L = !1), Se(O);
    },
  };
}
function kt(a) {
  let t,
    e = a[0] && nt(a);
  return {
    c() {
      e && e.c(), (t = le());
    },
    l(l) {
      e && e.l(l), (t = le());
    },
    m(l, r) {
      e && e.m(l, r), R(l, t, r);
    },
    p(l, [r]) {
      l[0]
        ? e
          ? e.p(l, r)
          : ((e = nt(l)), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null));
    },
    i: ee,
    o: ee,
    d(l) {
      e && e.d(l), l && o(t);
    },
  };
}
function Dt(a, t, e) {
  let { show: l = !1 } = t,
    { onConfirm: r } = t;
  function i() {
    e(0, (l = !1));
  }
  return (
    (a.$$set = (c) => {
      "show" in c && e(0, (l = c.show)),
        "onConfirm" in c && e(1, (r = c.onConfirm));
    }),
    [l, r, i]
  );
}
class It extends Ee {
  constructor(t) {
    super(), ge(this, t, Dt, kt, we, { show: 0, onConfirm: 1 });
  }
}
function ot(a) {
  let t, e, l, r, i, c, b, D, d, f, n, h, y, u, T, U, I, M, w, x, F;
  return {
    c() {
      (t = _("div")),
        (e = _("div")),
        (l = _("div")),
        (r = _("h4")),
        (i = S("Confirm Clear Draft")),
        (c = A()),
        (b = _("button")),
        (D = S("✕")),
        (d = A()),
        (f = _("div")),
        (n = _("h1")),
        (h = S("Please confirm you want to clear the draft from your cache.")),
        (y = A()),
        (u = _("div")),
        (T = _("button")),
        (U = S("Cancel")),
        (I = A()),
        (M = _("button")),
        (w = S("Confirm")),
        this.h();
    },
    l(E) {
      t = v(E, "DIV", { class: !0 });
      var L = p(t);
      e = v(L, "DIV", { class: !0 });
      var O = p(e);
      l = v(O, "DIV", { class: !0 });
      var N = p(l);
      r = v(N, "H4", { class: !0 });
      var j = p(r);
      (i = V(j, "Confirm Clear Draft")),
        j.forEach(o),
        (c = B(N)),
        (b = v(N, "BUTTON", { class: !0 }));
      var k = p(b);
      (D = V(k, "✕")),
        k.forEach(o),
        N.forEach(o),
        (d = B(O)),
        (f = v(O, "DIV", { class: !0 }));
      var Y = p(f);
      n = v(Y, "H1", {});
      var W = p(n);
      (h = V(W, "Please confirm you want to clear the draft from your cache.")),
        W.forEach(o),
        Y.forEach(o),
        (y = B(O)),
        (u = v(O, "DIV", { class: !0 }));
      var G = p(u);
      T = v(G, "BUTTON", { class: !0 });
      var X = p(T);
      (U = V(X, "Cancel")),
        X.forEach(o),
        (I = B(G)),
        (M = v(G, "BUTTON", { class: !0 }));
      var J = p(M);
      (w = V(J, "Confirm")),
        J.forEach(o),
        G.forEach(o),
        O.forEach(o),
        L.forEach(o),
        this.h();
    },
    h() {
      m(r, "class", "text-lg font-bold"),
        m(b, "class", "text-black"),
        m(l, "class", "flex justify-between items-center"),
        m(f, "class", "my-5"),
        m(T, "class", "px-4 py-2 border rounded text-black"),
        m(M, "class", "px-4 py-2 bg-blue-500 text-white rounded"),
        m(u, "class", "flex justify-end gap-3"),
        m(
          e,
          "class",
          "relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white"
        ),
        m(
          t,
          "class",
          "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        );
    },
    m(E, L) {
      R(E, t, L),
        s(t, e),
        s(e, l),
        s(l, r),
        s(r, i),
        s(l, c),
        s(l, b),
        s(b, D),
        s(e, d),
        s(e, f),
        s(f, n),
        s(n, h),
        s(e, y),
        s(e, u),
        s(u, T),
        s(T, U),
        s(u, I),
        s(u, M),
        s(M, w),
        x ||
          ((F = [
            Q(b, "click", function () {
              Be(a[1]) && a[1].apply(this, arguments);
            }),
            Q(T, "click", a[2]),
            Q(M, "click", function () {
              Be(a[1]) && a[1].apply(this, arguments);
            }),
          ]),
          (x = !0));
    },
    p(E, L) {
      a = E;
    },
    d(E) {
      E && o(t), (x = !1), Se(F);
    },
  };
}
function Tt(a) {
  let t,
    e = a[0] && ot(a);
  return {
    c() {
      e && e.c(), (t = le());
    },
    l(l) {
      e && e.l(l), (t = le());
    },
    m(l, r) {
      e && e.m(l, r), R(l, t, r);
    },
    p(l, [r]) {
      l[0]
        ? e
          ? e.p(l, r)
          : ((e = ot(l)), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null));
    },
    i: ee,
    o: ee,
    d(l) {
      e && e.d(l), l && o(t);
    },
  };
}
function Pt(a, t, e) {
  let { show: l = !1 } = t,
    { onConfirm: r } = t;
  function i() {
    e(0, (l = !1));
  }
  return (
    (a.$$set = (c) => {
      "show" in c && e(0, (l = c.show)),
        "onConfirm" in c && e(1, (r = c.onConfirm));
    }),
    [l, r, i]
  );
}
class Nt extends Ee {
  constructor(t) {
    super(), ge(this, t, Pt, Tt, we, { show: 0, onConfirm: 1 });
  }
}
function Ct(a) {
  let t, e, l;
  return {
    c() {
      (t = _("div")),
        (e = _("p")),
        (l = S("Loading Fixture Data...")),
        this.h();
    },
    l(r) {
      t = v(r, "DIV", { class: !0 });
      var i = p(t);
      e = v(i, "P", { class: !0 });
      var c = p(e);
      (l = V(c, "Loading Fixture Data...")),
        c.forEach(o),
        i.forEach(o),
        this.h();
    },
    h() {
      m(e, "class", "text-center mt-1"),
        m(t, "class", "flex items-center justify-center h-screen");
    },
    m(r, i) {
      R(r, t, i), s(t, e), s(e, l);
    },
    p: ee,
    d(r) {
      r && o(t);
    },
  };
}
function St(a) {
  let t;
  function e(i, c) {
    return Ct;
  }
  let r = e()(a);
  return {
    c() {
      r.c(), (t = le());
    },
    l(i) {
      r.l(i), (t = le());
    },
    m(i, c) {
      r.m(i, c), R(i, t, c);
    },
    p(i, c) {
      r.p(i, c);
    },
    d(i) {
      r.d(i), i && o(t);
    },
  };
}
function Vt(a) {
  let t, e, l, r, i, c, b, D, d, f;
  return (
    (t = new _t({
      props: { $$slots: { default: [St] }, $$scope: { ctx: a } },
    })),
    (l = new wt({
      props: {
        show: Mt,
        teamPlayers: a[8],
        selectedTeam: a[10],
        selectedPlayers: a[9],
      },
    })),
    (i = new yt({
      props: {
        show: a[1],
        player: a[2],
        fixtureId: a[5],
        playerEventData: a[3],
      },
    })),
    (b = new It({ props: { show: Ot, onConfirm: a[11] } })),
    (d = new Nt({ props: { show: xt, onConfirm: a[13] } })),
    {
      c() {
        me(t.$$.fragment),
          (e = A()),
          me(l.$$.fragment),
          (r = A()),
          me(i.$$.fragment),
          (c = A()),
          me(b.$$.fragment),
          (D = A()),
          me(d.$$.fragment);
      },
      l(n) {
        _e(t.$$.fragment, n),
          (e = B(n)),
          _e(l.$$.fragment, n),
          (r = B(n)),
          _e(i.$$.fragment, n),
          (c = B(n)),
          _e(b.$$.fragment, n),
          (D = B(n)),
          _e(d.$$.fragment, n);
      },
      m(n, h) {
        ve(t, n, h),
          R(n, e, h),
          ve(l, n, h),
          R(n, r, h),
          ve(i, n, h),
          R(n, c, h),
          ve(b, n, h),
          R(n, D, h),
          ve(d, n, h),
          (f = !0);
      },
      p(n, h) {
        const y = {};
        (h[0] & 209) | (h[1] & 16) && (y.$$scope = { dirty: h, ctx: n }),
          t.$set(y);
        const u = {};
        h[0] & 2 && (u.show = n[1]),
          h[0] & 4 && (u.player = n[2]),
          h[0] & 32 && (u.fixtureId = n[5]),
          h[0] & 8 && (u.playerEventData = n[3]),
          i.$set(u);
      },
      i(n) {
        f ||
          (be(t.$$.fragment, n),
          be(l.$$.fragment, n),
          be(i.$$.fragment, n),
          be(b.$$.fragment, n),
          be(d.$$.fragment, n),
          (f = !0));
      },
      o(n) {
        pe(t.$$.fragment, n),
          pe(l.$$.fragment, n),
          pe(i.$$.fragment, n),
          pe(b.$$.fragment, n),
          pe(d.$$.fragment, n),
          (f = !1);
      },
      d(n) {
        ye(t, n),
          n && o(e),
          ye(l, n),
          n && o(r),
          ye(i, n),
          n && o(c),
          ye(b, n),
          n && o(D),
          ye(d, n);
      },
    }
  );
}
let Mt = !1,
  xt = !1,
  Ot = !1;
function At(a, t, e) {
  let l,
    r,
    i,
    c,
    b = ee,
    D = () => (b(), (b = Le(w, (C) => e(7, (c = C)))), w);
  ze(a, dt, (C) => e(17, (r = C))), a.$$.on_destroy.push(() => b());
  let d,
    f,
    n,
    h,
    y,
    u = !1,
    T = de([]),
    U = de([]);
  ze(a, U, (C) => e(6, (i = C)));
  let I,
    M,
    w = de([]);
  D();
  let x = "home";
  ft(async () => {
    await Qe.sync(),
      await We.sync(),
      (n = Qe.subscribe((te) => {
        d = te;
      })),
      (h = We.subscribe((te) => {
        f = te;
      })),
      e(0, (y = f.find((te) => te.id === l) ?? null));
    const C = `fixtureDraft_${l}`,
      H = localStorage.getItem(C);
    if (H) {
      const te = JSON.parse(H);
      w.set(te);
    }
  }),
    ut(() => {
      n?.(), h?.();
    });
  async function F() {
    try {
      throw (
        (await vt.submitFixtureData(l, he(w)),
        localStorage.removeItem(`fixtureDraft_${l}`),
        mt(307, "/fixture-validation"))
      );
    } catch (C) {
      Oe.show("Error saving fixture data.", "error"),
        console.error("Error saving fixture data: ", C);
    }
  }
  function E() {
    const C = { playerEventData: he(w) },
      H = `fixtureDraft_${l}`;
    localStorage.setItem(H, JSON.stringify(C, ht)),
      Oe.show("Draft saved.", "success");
  }
  function L() {
    D(e(3, (w = de([])))),
      localStorage.removeItem(`fixtureDraft_${l}`),
      Oe.show("Draft cleared.", "success");
  }
  function O(C) {
    e(4, (x = C));
  }
  function N(C) {
    return d.find((H) => H.id === C);
  }
  function j(C) {
    e(2, (M = C)), e(1, (u = !0));
  }
  const k = () => O("home"),
    Y = () => O("away"),
    W = (C) => C.teamId === y?.homeTeamId,
    G = (C, H) => H.playerId === C.id,
    X = (C) => j(C),
    J = (C) => C.teamId === y?.awayTeamId,
    Z = (C, H) => H.playerId === C.id,
    $ = (C) => j(C);
  return (
    (a.$$.update = () => {
      a.$$.dirty[0] & 131072 &&
        e(5, (l = Number(r.url.searchParams.get("id"))));
    }),
    [
      y,
      u,
      M,
      w,
      x,
      l,
      i,
      c,
      T,
      U,
      I,
      F,
      E,
      L,
      O,
      N,
      j,
      r,
      k,
      Y,
      W,
      G,
      X,
      J,
      Z,
      $,
    ]
  );
}
class Jt extends Ee {
  constructor(t) {
    super(), ge(this, t, At, Vt, we, {}, null, [-1, -1]);
  }
}
export { Jt as component };
