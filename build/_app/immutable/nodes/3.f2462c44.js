import { f as il } from "../chunks/fixture-store.880a736f.js";
import {
  a as P,
  A as wt,
  B as gt,
  b as W,
  c as V,
  d as We,
  e as Ae,
  f as sl,
  g as Ke,
  G as s,
  H as Fe,
  h as i,
  i as Dt,
  I as Nt,
  J as Ql,
  K as ll,
  k as r,
  l as f,
  L as Z,
  m as d,
  M as Jl,
  n as o,
  N as _t,
  O as $l,
  o as xl,
  P as Zl,
  Q as He,
  q as m,
  r as p,
  R as Rt,
  S as It,
  s as kt,
  T as qt,
  u as le,
  v as al,
  V as Tt,
  W as Pt,
  X as Vt,
  Y as st,
  y as yt,
  z as Et,
  Z as Xl,
  _ as zl,
} from "../chunks/index.a8c54947.js";
import {
  a as ls,
  A as ts,
  c as ss,
  d as bt,
  j as as,
  l as Gt,
  r as ns,
  t as pt,
} from "../chunks/Layout.3f9368f3.js";
import { p as Kt } from "../chunks/player-store.f12f3662.js";
import { w as at } from "../chunks/singletons.e655d5e5.js";
import { p as es } from "../chunks/stores.42c5f1dc.js";
import { t as nl } from "../chunks/team-store.583260fe.js";
function is() {
  const { subscribe: a, set: e } = at([]);
  async function t(l, n) {
    try {
      await (
        await ts.createIdentityActor(ls, "bboqb-jiaaa-aaaal-qb6ea-cai")
      ).savePlayerEvents(l, n);
    } catch (_) {
      throw (console.error("Error submitting fixture data:", _), _);
    }
  }
  return { subscribe: a, submitFixtureData: t };
}
const os = is();
function ol(a, e, t) {
  const l = a.slice();
  return (l[21] = e[t]), (l[23] = t), l;
}
function rl(a) {
  let e,
    t,
    l,
    n,
    _,
    v = a[1].firstName !== "" ? a[1].firstName.charAt(0) + "." : "",
    u,
    h,
    I = a[1].lastName + "",
    y,
    c,
    D,
    k,
    A,
    S,
    O,
    T,
    C,
    b,
    E,
    w,
    g,
    q,
    B,
    L,
    N,
    z,
    J,
    $,
    U,
    K,
    H,
    Y,
    x,
    _e,
    ue,
    ne,
    fe,
    ce,
    De,
    G,
    F,
    X,
    se,
    ke,
    Ee,
    ee,
    Te,
    we,
    ge,
    Le,
    Ue,
    je,
    Ie,
    M,
    j,
    de,
    ie,
    Ne,
    Ze,
    Me,
    Oe,
    xe,
    Be,
    nt,
    oe = a[1].position === 0 && fl(),
    Ge = a[8].filter(a[18]),
    re = [];
  for (let ae = 0; ae < Ge.length; ae += 1) re[ae] = ul(ol(a, Ge, ae));
  return {
    c() {
      (e = r("div")),
        (t = r("div")),
        (l = r("div")),
        (n = r("div")),
        (_ = r("h4")),
        (u = m(v)),
        (h = P()),
        (y = m(I)),
        (c = m(" - Match Events")),
        (D = P()),
        (k = r("div")),
        (A = r("h4")),
        (S = m("Add Event")),
        (O = P()),
        (T = r("div")),
        (C = r("div")),
        (b = r("select")),
        (E = r("option")),
        (w = m("Select event type")),
        (g = r("option")),
        (q = m("Appearance")),
        (B = r("option")),
        (L = m("Goal Scored")),
        (N = r("option")),
        (z = m("Goal Assisted")),
        (J = r("option")),
        ($ = m("Penalty Missed")),
        (U = r("option")),
        (K = m("Yellow Card")),
        (H = r("option")),
        (Y = m("Card")),
        (x = r("option")),
        (_e = m("Own Goal")),
        oe && oe.c(),
        (ue = P()),
        (ne = r("div")),
        (fe = r("label")),
        (ce = m("Start Minute")),
        (De = P()),
        (G = r("input")),
        (F = P()),
        (X = r("div")),
        (se = r("label")),
        (ke = m("End Minute")),
        (Ee = P()),
        (ee = r("input")),
        (Te = P()),
        (we = r("div")),
        (ge = r("button")),
        (Le = m("Add Event")),
        (je = P()),
        (Ie = r("div")),
        (M = r("h4")),
        (j = m("Events:")),
        (de = P()),
        (ie = r("div")),
        (Ne = r("ul"));
      for (let ae = 0; ae < re.length; ae += 1) re[ae].c();
      (Ze = P()),
        (Me = r("div")),
        (Oe = r("button")),
        (xe = m("Done")),
        this.h();
    },
    l(ae) {
      e = f(ae, "DIV", { class: !0 });
      var me = d(e);
      t = f(me, "DIV", { class: !0 });
      var te = d(t);
      l = f(te, "DIV", { class: !0 });
      var pe = d(l);
      n = f(pe, "DIV", { class: !0 });
      var it = d(n);
      _ = f(it, "H4", { class: !0 });
      var Ve = d(_);
      (u = p(Ve, v)),
        (h = V(Ve)),
        (y = p(Ve, I)),
        (c = p(Ve, " - Match Events")),
        Ve.forEach(i),
        it.forEach(i),
        (D = V(pe)),
        (k = f(pe, "DIV", { class: !0 }));
      var Je = d(k);
      A = f(Je, "H4", { class: !0 });
      var Xe = d(A);
      (S = p(Xe, "Add Event")),
        Xe.forEach(i),
        (O = V(Je)),
        (T = f(Je, "DIV", { class: !0 }));
      var Se = d(T);
      C = f(Se, "DIV", { class: !0 });
      var ot = d(C);
      b = f(ot, "SELECT", { id: !0, class: !0 });
      var be = d(b);
      E = f(be, "OPTION", {});
      var rt = d(E);
      (w = p(rt, "Select event type")),
        rt.forEach(i),
        (g = f(be, "OPTION", {}));
      var ze = d(g);
      (q = p(ze, "Appearance")), ze.forEach(i), (B = f(be, "OPTION", {}));
      var $e = d(B);
      (L = p($e, "Goal Scored")), $e.forEach(i), (N = f(be, "OPTION", {}));
      var ft = d(N);
      (z = p(ft, "Goal Assisted")), ft.forEach(i), (J = f(be, "OPTION", {}));
      var Re = d(J);
      ($ = p(Re, "Penalty Missed")), Re.forEach(i), (U = f(be, "OPTION", {}));
      var ut = d(U);
      (K = p(ut, "Yellow Card")), ut.forEach(i), (H = f(be, "OPTION", {}));
      var Qe = d(H);
      (Y = p(Qe, "Card")), Qe.forEach(i), (x = f(be, "OPTION", {}));
      var et = d(x);
      (_e = p(et, "Own Goal")),
        et.forEach(i),
        oe && oe.l(be),
        be.forEach(i),
        ot.forEach(i),
        (ue = V(Se)),
        (ne = f(Se, "DIV", { class: !0 }));
      var Ye = d(ne);
      fe = f(Ye, "LABEL", { for: !0, class: !0 });
      var qe = d(fe);
      (ce = p(qe, "Start Minute")),
        qe.forEach(i),
        (De = V(Ye)),
        (G = f(Ye, "INPUT", {
          type: !0,
          id: !0,
          class: !0,
          placeholder: !0,
          min: !0,
          max: !0,
        })),
        Ye.forEach(i),
        (F = V(Se)),
        (X = f(Se, "DIV", { class: !0 }));
      var Pe = d(X);
      se = f(Pe, "LABEL", { for: !0, class: !0 });
      var ct = d(se);
      (ke = p(ct, "End Minute")),
        ct.forEach(i),
        (Ee = V(Pe)),
        (ee = f(Pe, "INPUT", {
          type: !0,
          id: !0,
          class: !0,
          placeholder: !0,
          min: !0,
          max: !0,
        })),
        Pe.forEach(i),
        (Te = V(Se)),
        (we = f(Se, "DIV", { class: !0 }));
      var tt = d(we);
      ge = f(tt, "BUTTON", { class: !0 });
      var dt = d(ge);
      (Le = p(dt, "Add Event")),
        dt.forEach(i),
        tt.forEach(i),
        Se.forEach(i),
        Je.forEach(i),
        (je = V(pe)),
        (Ie = f(pe, "DIV", { class: !0 }));
      var mt = d(Ie);
      M = f(mt, "H4", { class: !0 });
      var ve = d(M);
      (j = p(ve, "Events:")),
        ve.forEach(i),
        mt.forEach(i),
        (de = V(pe)),
        (ie = f(pe, "DIV", { class: !0 }));
      var he = d(ie);
      Ne = f(he, "UL", { class: !0 });
      var R = d(Ne);
      for (let vt = 0; vt < re.length; vt += 1) re[vt].l(R);
      R.forEach(i),
        he.forEach(i),
        (Ze = V(pe)),
        (Me = f(pe, "DIV", { class: !0 }));
      var Q = d(Me);
      Oe = f(Q, "BUTTON", { class: !0 });
      var lt = d(Oe);
      (xe = p(lt, "Done")),
        lt.forEach(i),
        Q.forEach(i),
        pe.forEach(i),
        te.forEach(i),
        me.forEach(i),
        this.h();
    },
    h() {
      o(_, "class", "text-lg font-bold"),
        o(n, "class", "flex justify-between items-center"),
        o(A, "class", "font-bold"),
        (E.__value = -1),
        (E.value = E.__value),
        (E.disabled = !0),
        (g.__value = 0),
        (g.value = g.__value),
        (B.__value = 1),
        (B.value = B.__value),
        (N.__value = 2),
        (N.value = N.__value),
        (J.__value = 7),
        (J.value = J.__value),
        (U.__value = 8),
        (U.value = U.__value),
        (H.__value = 9),
        (H.value = H.__value),
        (x.__value = 10),
        (x.value = x.__value),
        o(b, "id", "eventType"),
        o(b, "class", "w-full p-2 fpl-dropdown"),
        a[4] === void 0 && Ql(() => a[15].call(b)),
        o(C, "class", "mt-1"),
        o(fe, "for", "startMinute"),
        o(fe, "class", "block text-sm font-medium"),
        o(G, "type", "number"),
        o(G, "id", "startMinute"),
        o(
          G,
          "class",
          "bg-gray-900 w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ),
        o(G, "placeholder", "Enter start minute"),
        o(G, "min", "0"),
        o(G, "max", "90"),
        o(ne, "class", "mt-1"),
        o(se, "for", "endMinute"),
        o(se, "class", "block text-sm font-medium"),
        o(ee, "type", "number"),
        o(ee, "id", "endMinute"),
        o(
          ee,
          "class",
          "bg-gray-900 w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ),
        o(ee, "placeholder", "Enter end minute"),
        o(ee, "min", "0"),
        o(ee, "max", "90"),
        o(X, "class", "mt-2"),
        o(
          ge,
          "class",
          (Ue = `${
            a[7] ? "bg-gray-500" : "fpl-purple-btn"
          } px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`)
        ),
        (ge.disabled = a[7]),
        o(we, "class", "items-center mt-3 flex space-x-4"),
        o(T, "class", "flex flex-col gap-1"),
        o(k, "class", "mt-4 p-4 border-t border-gray-200"),
        o(M, "class", "text-sm"),
        o(Ie, "class", "px-4"),
        o(Ne, "class", "list-disc"),
        o(ie, "class", "mt-1 text-xs mx-4"),
        o(
          Oe,
          "class",
          "fpl-button mx-4 px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        o(Me, "class", "items-center mt-3 flex space-x-4"),
        o(l, "class", "mt-3"),
        o(
          t,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel"
        ),
        o(
          e,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop"
        );
    },
    m(ae, me) {
      W(ae, e, me),
        s(e, t),
        s(t, l),
        s(l, n),
        s(n, _),
        s(_, u),
        s(_, h),
        s(_, y),
        s(_, c),
        s(l, D),
        s(l, k),
        s(k, A),
        s(A, S),
        s(k, O),
        s(k, T),
        s(T, C),
        s(C, b),
        s(b, E),
        s(E, w),
        s(b, g),
        s(g, q),
        s(b, B),
        s(B, L),
        s(b, N),
        s(N, z),
        s(b, J),
        s(J, $),
        s(b, U),
        s(U, K),
        s(b, H),
        s(H, Y),
        s(b, x),
        s(x, _e),
        oe && oe.m(b, null),
        ll(b, a[4], !0),
        s(T, ue),
        s(T, ne),
        s(ne, fe),
        s(fe, ce),
        s(ne, De),
        s(ne, G),
        Tt(G, a[5]),
        s(T, F),
        s(T, X),
        s(X, se),
        s(se, ke),
        s(X, Ee),
        s(X, ee),
        Tt(ee, a[6]),
        s(T, Te),
        s(T, we),
        s(we, ge),
        s(ge, Le),
        s(l, je),
        s(l, Ie),
        s(Ie, M),
        s(M, j),
        s(l, de),
        s(l, ie),
        s(ie, Ne);
      for (let te = 0; te < re.length; te += 1) re[te] && re[te].m(Ne, null);
      s(l, Ze),
        s(l, Me),
        s(Me, Oe),
        s(Oe, xe),
        Be ||
          ((nt = [
            Z(b, "change", a[15]),
            Z(G, "input", a[16]),
            Z(ee, "input", a[17]),
            Z(ge, "click", a[9]),
            Z(Oe, "click", function () {
              He(a[3]) && a[3].apply(this, arguments);
            }),
            Z(t, "click", Rt(a[14])),
            Z(t, "keydown", a[11]),
            Z(e, "click", function () {
              He(a[3]) && a[3].apply(this, arguments);
            }),
            Z(e, "keydown", a[11]),
          ]),
          (Be = !0));
    },
    p(ae, me) {
      if (
        ((a = ae),
        me & 2 &&
          v !==
            (v = a[1].firstName !== "" ? a[1].firstName.charAt(0) + "." : "") &&
          le(u, v),
        me & 2 && I !== (I = a[1].lastName + "") && le(y, I),
        a[1].position === 0
          ? oe || ((oe = fl()), oe.c(), oe.m(b, null))
          : oe && (oe.d(1), (oe = null)),
        me & 16 && ll(b, a[4]),
        me & 32 && Pt(G.value) !== a[5] && Tt(G, a[5]),
        me & 64 && Pt(ee.value) !== a[6] && Tt(ee, a[6]),
        me & 128 &&
          Ue !==
            (Ue = `${
              a[7] ? "bg-gray-500" : "fpl-purple-btn"
            } px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`) &&
          o(ge, "class", Ue),
        me & 128 && (ge.disabled = a[7]),
        me & 5378)
      ) {
        Ge = a[8].filter(a[18]);
        let te;
        for (te = 0; te < Ge.length; te += 1) {
          const pe = ol(a, Ge, te);
          re[te]
            ? re[te].p(pe, me)
            : ((re[te] = ul(pe)), re[te].c(), re[te].m(Ne, null));
        }
        for (; te < re.length; te += 1) re[te].d(1);
        re.length = Ge.length;
      }
    },
    d(ae) {
      ae && i(e), oe && oe.d(), Jl(re, ae), (Be = !1), _t(nt);
    },
  };
}
function fl(a) {
  let e, t, l, n;
  return {
    c() {
      (e = r("option")),
        (t = m("Keeper Save")),
        (l = r("option")),
        (n = m("Penalty Save")),
        this.h();
    },
    l(_) {
      e = f(_, "OPTION", {});
      var v = d(e);
      (t = p(v, "Keeper Save")), v.forEach(i), (l = f(_, "OPTION", {}));
      var u = d(l);
      (n = p(u, "Penalty Save")), u.forEach(i), this.h();
    },
    h() {
      (e.__value = 4),
        (e.value = e.__value),
        (l.__value = 6),
        (l.value = l.__value);
    },
    m(_, v) {
      W(_, e, v), s(e, t), W(_, l, v), s(l, n);
    },
    d(_) {
      _ && i(e), _ && i(l);
    },
  };
}
function ul(a) {
  let e,
    t,
    l = a[12](a[21].eventType) + "",
    n,
    _,
    v = a[21].eventStartMinute + "",
    u,
    h,
    I = a[21].eventEndMinute + "",
    y,
    c,
    D,
    k,
    A,
    S,
    O,
    T;
  function C() {
    return a[19](a[23]);
  }
  return {
    c() {
      (e = r("li")),
        (t = r("span")),
        (n = m(l)),
        (_ = m(" (")),
        (u = m(v)),
        (h = m(`
                  - `)),
        (y = m(I)),
        (c = m(") mins")),
        (D = P()),
        (k = r("button")),
        (A = m("Remove")),
        (S = P()),
        this.h();
    },
    l(b) {
      e = f(b, "LI", { class: !0 });
      var E = d(e);
      t = f(E, "SPAN", {});
      var w = d(t);
      (n = p(w, l)),
        (_ = p(w, " (")),
        (u = p(w, v)),
        (h = p(
          w,
          `
                  - `
        )),
        (y = p(w, I)),
        (c = p(w, ") mins")),
        w.forEach(i),
        (D = V(E)),
        (k = f(E, "BUTTON", { class: !0 }));
      var g = d(k);
      (A = p(g, "Remove")), g.forEach(i), (S = V(E)), E.forEach(i), this.h();
    },
    h() {
      o(k, "class", "px-3 py-1 bg-red-500 rounded"),
        o(e, "class", "flex justify-between items-center mb-2");
    },
    m(b, E) {
      W(b, e, E),
        s(e, t),
        s(t, n),
        s(t, _),
        s(t, u),
        s(t, h),
        s(t, y),
        s(t, c),
        s(e, D),
        s(e, k),
        s(k, A),
        s(e, S),
        O || ((T = Z(k, "click", C)), (O = !0));
    },
    p(b, E) {
      (a = b),
        E & 258 && l !== (l = a[12](a[21].eventType) + "") && le(n, l),
        E & 258 && v !== (v = a[21].eventStartMinute + "") && le(u, v),
        E & 258 && I !== (I = a[21].eventEndMinute + "") && le(y, I);
    },
    d(b) {
      b && i(e), (O = !1), T();
    },
  };
}
function rs(a) {
  let e,
    t = a[0] && rl(a);
  return {
    c() {
      t && t.c(), (e = Ae());
    },
    l(l) {
      t && t.l(l), (e = Ae());
    },
    m(l, n) {
      t && t.m(l, n), W(l, e, n);
    },
    p(l, [n]) {
      l[0]
        ? t
          ? t.p(l, n)
          : ((t = rl(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Fe,
    o: Fe,
    d(l) {
      t && t.d(l), l && i(e);
    },
  };
}
function fs(a, e, t) {
  let l,
    n = Fe,
    _ = () => (n(), (n = Vt(I, (N) => t(8, (l = N)))), I);
  a.$$.on_destroy.push(() => n());
  let { show: v = !1 } = e,
    { player: u } = e,
    { fixtureId: h } = e,
    { playerEventData: I } = e;
  _();
  let { closeModal: y } = e,
    c = -1,
    D = 0,
    k = 0,
    A = !0;
  const S = [
    { id: 0, label: "Appearance" },
    { id: 1, label: "Goal Scored" },
    { id: 2, label: "Goal Assisted" },
    { id: 6, label: "Penalty Saved" },
    { id: 7, label: "Penalty Missed" },
    { id: 8, label: "Yellow Card" },
    { id: 9, label: "Red Card" },
    { id: 10, label: "Own Goal" },
  ];
  function O() {
    if (c >= 0 && D !== null && k !== null) {
      const N = {
        playerId: u.id,
        eventType: Number(c),
        eventStartMinute: Number(D),
        eventEndMinute: Number(k),
        fixtureId: h,
        teamId: u.teamId,
      };
      let z = [...l, N];
      I.set(z), t(5, (D = 0)), t(6, (k = 0)), t(4, (c = -1));
    }
  }
  function T(N) {
    I.update((z) => z.filter((J, $) => $ !== N));
  }
  function C(N) {
    !(N.target instanceof HTMLInputElement) && N.key === "Escape" && y();
  }
  const b = (N) => {
    const z = S.find((J) => J.id === N);
    return z ? z.label : "";
  };
  function E(N) {
    qt.call(this, a, N);
  }
  function w() {
    (c = Zl(this)), t(4, c);
  }
  function g() {
    (D = Pt(this.value)), t(5, D);
  }
  function q() {
    (k = Pt(this.value)), t(6, k);
  }
  const B = (N) => N.playerId == u.id,
    L = (N) => T(N);
  return (
    (a.$$set = (N) => {
      "show" in N && t(0, (v = N.show)),
        "player" in N && t(1, (u = N.player)),
        "fixtureId" in N && t(13, (h = N.fixtureId)),
        "playerEventData" in N && _(t(2, (I = N.playerEventData))),
        "closeModal" in N && t(3, (y = N.closeModal));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 112 &&
        t(7, (A = c < 0 || D < 0 || D > 90 || k < 0 || k > 90));
    }),
    [v, u, I, y, c, D, k, A, l, O, T, C, b, h, E, w, g, q, B, L]
  );
}
class us extends It {
  constructor(e) {
    super(),
      Dt(this, e, fs, rs, kt, {
        show: 0,
        player: 1,
        fixtureId: 13,
        playerEventData: 2,
        closeModal: 3,
      });
  }
}
function cl(a, e, t) {
  const l = a.slice();
  l[12] = e[t];
  const n = l[5].some(function (...v) {
    return a[11](l[12], ...v);
  });
  return (l[13] = n), l;
}
function dl(a) {
  let e,
    t,
    l,
    n,
    _,
    v = a[1].friendlyName + "",
    u,
    h,
    I,
    y,
    c,
    D,
    k,
    A,
    S,
    O,
    T,
    C,
    b,
    E = a[6].sort(bl),
    w = [];
  for (let g = 0; g < E.length; g += 1) w[g] = pl(cl(a, E, g));
  return {
    c() {
      (e = r("div")),
        (t = r("div")),
        (l = r("div")),
        (n = r("h3")),
        (_ = m("Select ")),
        (u = m(v)),
        (h = m(" Players")),
        (I = P()),
        (y = r("div"));
      for (let g = 0; g < w.length; g += 1) w[g].c();
      (c = P()),
        (D = r("div")),
        (k = r("button")),
        (A = m("Cancel")),
        (S = P()),
        (O = r("button")),
        (T = m("Select")),
        this.h();
    },
    l(g) {
      e = f(g, "DIV", { class: !0 });
      var q = d(e);
      t = f(q, "DIV", { class: !0 });
      var B = d(t);
      l = f(B, "DIV", { class: !0 });
      var L = d(l);
      n = f(L, "H3", { class: !0 });
      var N = d(n);
      (_ = p(N, "Select ")),
        (u = p(N, v)),
        (h = p(N, " Players")),
        N.forEach(i),
        (I = V(L)),
        (y = f(L, "DIV", { class: !0 }));
      var z = d(y);
      for (let K = 0; K < w.length; K += 1) w[K].l(z);
      z.forEach(i), (c = V(L)), (D = f(L, "DIV", { class: !0 }));
      var J = d(D);
      k = f(J, "BUTTON", { class: !0 });
      var $ = d(k);
      (A = p($, "Cancel")),
        $.forEach(i),
        (S = V(J)),
        (O = f(J, "BUTTON", { class: !0 }));
      var U = d(O);
      (T = p(U, "Select")),
        U.forEach(i),
        J.forEach(i),
        L.forEach(i),
        B.forEach(i),
        q.forEach(i),
        this.h();
    },
    h() {
      o(n, "class", "text-lg leading-6 font-medium mb-2"),
        o(y, "class", "my-5 grid grid-cols-1 sm:grid-cols-2 gap-2"),
        o(
          k,
          "class",
          "px-4 py-2 fpl-cancel-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        o(
          O,
          "class",
          "px-4 py-2 fpl-purple-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        o(D, "class", "items-center py-3 flex space-x-4"),
        o(l, "class", "mt-3 px-4 py-2"),
        o(
          t,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 mx-8 md:mx-64 shadow-lg rounded-md bg-panel text-white"
        ),
        o(
          e,
          "class",
          "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        );
    },
    m(g, q) {
      W(g, e, q),
        s(e, t),
        s(t, l),
        s(l, n),
        s(n, _),
        s(n, u),
        s(n, h),
        s(l, I),
        s(l, y);
      for (let B = 0; B < w.length; B += 1) w[B] && w[B].m(y, null);
      s(l, c),
        s(l, D),
        s(D, k),
        s(k, A),
        s(D, S),
        s(D, O),
        s(O, T),
        C ||
          ((b = [
            Z(k, "click", function () {
              He(a[4]) && a[4].apply(this, arguments);
            }),
            Z(O, "click", function () {
              He(a[4]) && a[4].apply(this, arguments);
            }),
            Z(t, "click", Rt(a[9])),
            Z(t, "keydown", a[8]),
            Z(e, "click", function () {
              He(a[4]) && a[4].apply(this, arguments);
            }),
            Z(e, "keydown", function () {
              He(a[4]) && a[4].apply(this, arguments);
            }),
          ]),
          (C = !0));
    },
    p(g, q) {
      if (
        ((a = g),
        q & 2 && v !== (v = a[1].friendlyName + "") && le(u, v),
        q & 224)
      ) {
        E = a[6].sort(bl);
        let B;
        for (B = 0; B < E.length; B += 1) {
          const L = cl(a, E, B);
          w[B] ? w[B].p(L, q) : ((w[B] = pl(L)), w[B].c(), w[B].m(y, null));
        }
        for (; B < w.length; B += 1) w[B].d(1);
        w.length = E.length;
      }
    },
    d(g) {
      g && i(e), Jl(w, g), (C = !1), _t(b);
    },
  };
}
function vl(a) {
  let e;
  return {
    c() {
      e = m("GK");
    },
    l(t) {
      e = p(t, "GK");
    },
    m(t, l) {
      W(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function hl(a) {
  let e;
  return {
    c() {
      e = m("DF");
    },
    l(t) {
      e = p(t, "DF");
    },
    m(t, l) {
      W(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function _l(a) {
  let e;
  return {
    c() {
      e = m("MF");
    },
    l(t) {
      e = p(t, "MF");
    },
    m(t, l) {
      W(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function ml(a) {
  let e;
  return {
    c() {
      e = m("FW");
    },
    l(t) {
      e = p(t, "FW");
    },
    m(t, l) {
      W(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function pl(a) {
  let e,
    t,
    l,
    n = `${a[12].firstName.length > 0 ? a[12].firstName.charAt(0) + "." : ""} ${
      a[12].lastName
    }`,
    _,
    v,
    u,
    h,
    I,
    y,
    c,
    D,
    k,
    A,
    S,
    O,
    T,
    C,
    b,
    E = a[12].position == 0 && vl(),
    w = a[12].position == 1 && hl(),
    g = a[12].position == 2 && _l(),
    q = a[12].position == 3 && ml();
  function B(...L) {
    return a[10](a[12], ...L);
  }
  return {
    c() {
      (e = r("div")),
        (t = r("div")),
        (l = r("span")),
        (_ = m(n)),
        (v = P()),
        (u = r("div")),
        (h = r("span")),
        E && E.c(),
        (I = P()),
        w && w.c(),
        (y = P()),
        g && g.c(),
        (c = P()),
        q && q.c(),
        (D = P()),
        (k = r("div")),
        (A = r("label")),
        (S = r("input")),
        (T = P()),
        this.h();
    },
    l(L) {
      e = f(L, "DIV", { class: !0 });
      var N = d(e);
      t = f(N, "DIV", { class: !0 });
      var z = d(t);
      l = f(z, "SPAN", { class: !0 });
      var J = d(l);
      (_ = p(J, n)),
        J.forEach(i),
        z.forEach(i),
        (v = V(N)),
        (u = f(N, "DIV", { class: !0 }));
      var $ = d(u);
      h = f($, "SPAN", { class: !0 });
      var U = d(h);
      E && E.l(U),
        (I = V(U)),
        w && w.l(U),
        (y = V(U)),
        g && g.l(U),
        (c = V(U)),
        q && q.l(U),
        U.forEach(i),
        $.forEach(i),
        (D = V(N)),
        (k = f(N, "DIV", { class: !0 }));
      var K = d(k);
      A = f(K, "LABEL", { class: !0 });
      var H = d(A);
      (S = f(H, "INPUT", { type: !0, class: !0 })),
        H.forEach(i),
        K.forEach(i),
        (T = V(N)),
        N.forEach(i),
        this.h();
    },
    h() {
      o(l, "class", "text-lg font-medium"),
        o(t, "class", "flex w-1/2"),
        o(h, "class", "text-lg font-medium"),
        o(u, "class", "flex w-1/4"),
        o(S, "type", "checkbox"),
        o(S, "class", "form-checkbox h-5 w-5 text-blue-600"),
        (S.checked = O = a[13]),
        o(A, "class", "inline-flex items-center"),
        o(k, "class", "form-checkbox w-1/4"),
        o(
          e,
          "class",
          "flex flex-row justify-between items-center mx-4 border-b"
        );
    },
    m(L, N) {
      W(L, e, N),
        s(e, t),
        s(t, l),
        s(l, _),
        s(e, v),
        s(e, u),
        s(u, h),
        E && E.m(h, null),
        s(h, I),
        w && w.m(h, null),
        s(h, y),
        g && g.m(h, null),
        s(h, c),
        q && q.m(h, null),
        s(e, D),
        s(e, k),
        s(k, A),
        s(A, S),
        s(e, T),
        C || ((b = Z(S, "change", B)), (C = !0));
    },
    p(L, N) {
      (a = L),
        N & 64 &&
          n !==
            (n = `${
              a[12].firstName.length > 0 ? a[12].firstName.charAt(0) + "." : ""
            } ${a[12].lastName}`) &&
          le(_, n),
        a[12].position == 0
          ? E || ((E = vl()), E.c(), E.m(h, I))
          : E && (E.d(1), (E = null)),
        a[12].position == 1
          ? w || ((w = hl()), w.c(), w.m(h, y))
          : w && (w.d(1), (w = null)),
        a[12].position == 2
          ? g || ((g = _l()), g.c(), g.m(h, c))
          : g && (g.d(1), (g = null)),
        a[12].position == 3
          ? q || ((q = ml()), q.c(), q.m(h, null))
          : q && (q.d(1), (q = null)),
        N & 96 && O !== (O = a[13]) && (S.checked = O);
    },
    d(L) {
      L && i(e), E && E.d(), w && w.d(), g && g.d(), q && q.d(), (C = !1), b();
    },
  };
}
function cs(a) {
  let e,
    t = a[3] && dl(a);
  return {
    c() {
      t && t.c(), (e = Ae());
    },
    l(l) {
      t && t.l(l), (e = Ae());
    },
    m(l, n) {
      t && t.m(l, n), W(l, e, n);
    },
    p(l, [n]) {
      l[3]
        ? t
          ? t.p(l, n)
          : ((t = dl(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Fe,
    o: Fe,
    d(l) {
      t && t.d(l), l && i(e);
    },
  };
}
const bl = (a, e) => a.position - e.position;
function ds(a, e, t) {
  let l,
    n = Fe,
    _ = () => (n(), (n = Vt(c, (b) => t(5, (l = b)))), c),
    v,
    u = Fe,
    h = () => (u(), (u = Vt(I, (b) => t(6, (v = b)))), I);
  a.$$.on_destroy.push(() => n()), a.$$.on_destroy.push(() => u());
  let { teamPlayers: I = at([]) } = e;
  h();
  let { selectedTeam: y } = e,
    { selectedPlayers: c = at([]) } = e;
  _();
  let { show: D = !1 } = e;
  function k(b, E) {
    const w = b.target;
    let g = l,
      q = v;
    if (w.checked) {
      const B = q.find((L) => L.id === E.id);
      B && !g.some((L) => L.id === E.id) && (g = [...g, B]);
    } else g = g.filter((B) => B.id !== E.id);
    st(c, (l = g), l);
  }
  let { closeModal: A } = e;
  function S(b) {
    !(b.target instanceof HTMLInputElement) && b.key === "Escape" && A();
  }
  function O(b) {
    qt.call(this, a, b);
  }
  const T = (b, E) => {
      k(E, b);
    },
    C = (b, E) => E.id === b.id;
  return (
    (a.$$set = (b) => {
      "teamPlayers" in b && h(t(0, (I = b.teamPlayers))),
        "selectedTeam" in b && t(1, (y = b.selectedTeam)),
        "selectedPlayers" in b && _(t(2, (c = b.selectedPlayers))),
        "show" in b && t(3, (D = b.show)),
        "closeModal" in b && t(4, (A = b.closeModal));
    }),
    [I, y, c, D, A, l, v, k, S, O, T, C]
  );
}
class vs extends It {
  constructor(e) {
    super(),
      Dt(this, e, ds, cs, kt, {
        teamPlayers: 0,
        selectedTeam: 1,
        selectedPlayers: 2,
        show: 3,
        closeModal: 4,
      });
  }
}
function yl(a) {
  let e, t, l, n, _, v, u, h, I, y, c, D, k, A, S, O, T, C, b, E, w, g, q, B;
  return {
    c() {
      (e = r("div")),
        (t = r("div")),
        (l = r("div")),
        (n = r("h4")),
        (_ = m("Confirm Fixture Data")),
        (v = P()),
        (u = r("button")),
        (h = m("✕")),
        (I = P()),
        (y = r("div")),
        (c = r("h1")),
        (D = m("Please confirm your fixture data.")),
        (k = P()),
        (A = r("p")),
        (S =
          m(`You will not be able to edit your submission and entries that differ
          from the accepted consensus data will not receive $FPL rewards. If
          consensus has already been reached for the fixture your submission
          will also not be counted.`)),
        (O = P()),
        (T = r("div")),
        (C = r("button")),
        (b = m("Cancel")),
        (E = P()),
        (w = r("button")),
        (g = m("Confirm")),
        this.h();
    },
    l(L) {
      e = f(L, "DIV", { class: !0 });
      var N = d(e);
      t = f(N, "DIV", { class: !0 });
      var z = d(t);
      l = f(z, "DIV", { class: !0 });
      var J = d(l);
      n = f(J, "H4", { class: !0 });
      var $ = d(n);
      (_ = p($, "Confirm Fixture Data")),
        $.forEach(i),
        (v = V(J)),
        (u = f(J, "BUTTON", { class: !0 }));
      var U = d(u);
      (h = p(U, "✕")),
        U.forEach(i),
        J.forEach(i),
        (I = V(z)),
        (y = f(z, "DIV", { class: !0 }));
      var K = d(y);
      c = f(K, "H1", {});
      var H = d(c);
      (D = p(H, "Please confirm your fixture data.")),
        H.forEach(i),
        (k = V(K)),
        (A = f(K, "P", { class: !0 }));
      var Y = d(A);
      (S = p(
        Y,
        `You will not be able to edit your submission and entries that differ
          from the accepted consensus data will not receive $FPL rewards. If
          consensus has already been reached for the fixture your submission
          will also not be counted.`
      )),
        Y.forEach(i),
        K.forEach(i),
        (O = V(z)),
        (T = f(z, "DIV", { class: !0 }));
      var x = d(T);
      C = f(x, "BUTTON", { class: !0 });
      var _e = d(C);
      (b = p(_e, "Cancel")),
        _e.forEach(i),
        (E = V(x)),
        (w = f(x, "BUTTON", { class: !0 }));
      var ue = d(w);
      (g = p(ue, "Confirm")),
        ue.forEach(i),
        x.forEach(i),
        z.forEach(i),
        N.forEach(i),
        this.h();
    },
    h() {
      o(n, "class", "text-lg font-bold"),
        o(u, "class", "text-black"),
        o(l, "class", "flex justify-between items-center"),
        o(A, "class", "text-sm text-gray-600"),
        o(y, "class", "my-5"),
        o(C, "class", "px-4 py-2 border rounded text-black"),
        o(w, "class", "px-4 py-2 bg-blue-500 text-white rounded"),
        o(T, "class", "flex justify-end gap-3"),
        o(
          t,
          "class",
          "relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md"
        ),
        o(
          e,
          "class",
          "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        );
    },
    m(L, N) {
      W(L, e, N),
        s(e, t),
        s(t, l),
        s(l, n),
        s(n, _),
        s(l, v),
        s(l, u),
        s(u, h),
        s(t, I),
        s(t, y),
        s(y, c),
        s(c, D),
        s(y, k),
        s(y, A),
        s(A, S),
        s(t, O),
        s(t, T),
        s(T, C),
        s(C, b),
        s(T, E),
        s(T, w),
        s(w, g),
        q ||
          ((B = [
            Z(u, "click", a[2]),
            Z(C, "click", a[2]),
            Z(w, "click", function () {
              He(a[1]) && a[1].apply(this, arguments);
            }),
          ]),
          (q = !0));
    },
    p(L, N) {
      a = L;
    },
    d(L) {
      L && i(e), (q = !1), _t(B);
    },
  };
}
function hs(a) {
  let e,
    t = a[0] && yl(a);
  return {
    c() {
      t && t.c(), (e = Ae());
    },
    l(l) {
      t && t.l(l), (e = Ae());
    },
    m(l, n) {
      t && t.m(l, n), W(l, e, n);
    },
    p(l, [n]) {
      l[0]
        ? t
          ? t.p(l, n)
          : ((t = yl(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Fe,
    o: Fe,
    d(l) {
      t && t.d(l), l && i(e);
    },
  };
}
function _s(a, e, t) {
  let { show: l = !1 } = e,
    { onConfirm: n } = e;
  function _() {
    t(0, (l = !1));
  }
  return (
    (a.$$set = (v) => {
      "show" in v && t(0, (l = v.show)),
        "onConfirm" in v && t(1, (n = v.onConfirm));
    }),
    [l, n, _]
  );
}
class ms extends It {
  constructor(e) {
    super(), Dt(this, e, _s, hs, kt, { show: 0, onConfirm: 1 });
  }
}
function El(a) {
  let e, t, l, n, _, v, u, h, I, y, c, D, k, A;
  return {
    c() {
      (e = r("div")),
        (t = r("div")),
        (l = r("div")),
        (n = r("h3")),
        (_ = m("Please confirm you want to clear the draft from your cache.")),
        (v = P()),
        (u = r("div")),
        (h = r("button")),
        (I = m("Cancel")),
        (y = P()),
        (c = r("button")),
        (D = m("Clear")),
        this.h();
    },
    l(S) {
      e = f(S, "DIV", { class: !0 });
      var O = d(e);
      t = f(O, "DIV", { class: !0 });
      var T = d(t);
      l = f(T, "DIV", { class: !0 });
      var C = d(l);
      n = f(C, "H3", { class: !0 });
      var b = d(n);
      (_ = p(b, "Please confirm you want to clear the draft from your cache.")),
        b.forEach(i),
        C.forEach(i),
        (v = V(T)),
        (u = f(T, "DIV", { class: !0 }));
      var E = d(u);
      h = f(E, "BUTTON", { class: !0 });
      var w = d(h);
      (I = p(w, "Cancel")),
        w.forEach(i),
        (y = V(E)),
        (c = f(E, "BUTTON", { class: !0 }));
      var g = d(c);
      (D = p(g, "Clear")),
        g.forEach(i),
        E.forEach(i),
        T.forEach(i),
        O.forEach(i),
        this.h();
    },
    h() {
      o(n, "class", "text-lg leading-6 font-medium mb-2"),
        o(l, "class", "mt-3 text-center"),
        o(
          h,
          "class",
          "px-4 py-2 fpl-cancel-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        o(
          c,
          "class",
          "px-4 py-2 fpl-purple-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        o(u, "class", "items-center py-3 flex space-x-4"),
        o(
          t,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"
        ),
        o(
          e,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop"
        );
    },
    m(S, O) {
      W(S, e, O),
        s(e, t),
        s(t, l),
        s(l, n),
        s(n, _),
        s(t, v),
        s(t, u),
        s(u, h),
        s(h, I),
        s(u, y),
        s(u, c),
        s(c, D),
        k ||
          ((A = [
            Z(h, "click", function () {
              He(a[2]) && a[2].apply(this, arguments);
            }),
            Z(c, "click", function () {
              He(a[1]) && a[1].apply(this, arguments);
            }),
            Z(t, "click", Rt(a[4])),
            Z(t, "keydown", a[3]),
            Z(e, "click", function () {
              He(a[2]) && a[2].apply(this, arguments);
            }),
            Z(e, "keydown", a[3]),
          ]),
          (k = !0));
    },
    p(S, O) {
      a = S;
    },
    d(S) {
      S && i(e), (k = !1), _t(A);
    },
  };
}
function ps(a) {
  let e,
    t = a[0] && El(a);
  return {
    c() {
      t && t.c(), (e = Ae());
    },
    l(l) {
      t && t.l(l), (e = Ae());
    },
    m(l, n) {
      t && t.m(l, n), W(l, e, n);
    },
    p(l, [n]) {
      l[0]
        ? t
          ? t.p(l, n)
          : ((t = El(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Fe,
    o: Fe,
    d(l) {
      t && t.d(l), l && i(e);
    },
  };
}
function bs(a, e, t) {
  let { show: l = !1 } = e,
    { onConfirm: n } = e,
    { closeModal: _ } = e;
  function v(h) {
    !(h.target instanceof HTMLInputElement) && h.key === "Escape" && _();
  }
  function u(h) {
    qt.call(this, a, h);
  }
  return (
    (a.$$set = (h) => {
      "show" in h && t(0, (l = h.show)),
        "onConfirm" in h && t(1, (n = h.onConfirm)),
        "closeModal" in h && t(2, (_ = h.closeModal));
    }),
    [l, n, _, v, u]
  );
}
class ys extends It {
  constructor(e) {
    super(), Dt(this, e, bs, ps, kt, { show: 0, onConfirm: 1, closeModal: 2 });
  }
}
function wl(a, e, t) {
  const l = a.slice();
  return (l[50] = e[t]), l;
}
function gl(a, e, t) {
  const l = a.slice();
  return (l[50] = e[t]), l;
}
function Il(a) {
  let e,
    t,
    l,
    n,
    _ = a[3]?.friendlyName + "",
    v,
    u,
    h,
    I,
    y,
    c,
    D = a[4]?.friendlyName + "",
    k,
    A,
    S,
    O,
    T,
    C,
    b,
    E,
    w,
    g,
    q,
    B,
    L,
    N,
    z,
    J,
    $,
    U,
    K,
    H,
    Y,
    x,
    _e,
    ue,
    ne,
    fe,
    ce,
    De,
    G,
    F,
    X,
    se,
    ke,
    Ee = a[0].filter(Bl).length + "",
    ee,
    Te,
    we,
    ge,
    Le = a[0].filter(Gl).length + "",
    Ue,
    je,
    Ie,
    M,
    j = a[0].filter(Kl).length + "",
    de,
    ie,
    Ne,
    Ze,
    Me = a[0].filter(Rl).length + "",
    Oe,
    xe,
    Be,
    nt,
    oe = a[0].filter(ql).length + "",
    Ge,
    re,
    ae,
    me,
    te = a[0].filter(Hl).length + "",
    pe,
    it,
    Ve,
    Je,
    Xe = a[0].filter(jl).length + "",
    Se,
    ot,
    be,
    rt,
    ze = a[0].filter(Yl).length + "",
    $e,
    ft,
    Re,
    ut,
    Qe = a[0].filter(Wl).length + "",
    et,
    Ye,
    qe,
    Pe,
    ct,
    tt,
    dt,
    mt,
    ve = a[11] === "home" && Dl(a),
    he = a[11] === "away" && Sl(a);
  return {
    c() {
      (e = r("div")),
        (t = r("ul")),
        (l = r("li")),
        (n = r("button")),
        (v = m(_)),
        (I = P()),
        (y = r("li")),
        (c = r("button")),
        (k = m(D)),
        (O = P()),
        (T = r("div")),
        (C = r("div")),
        (b = r("div")),
        (E = m("Player")),
        (w = P()),
        (g = r("div")),
        (q = m("Position")),
        (B = P()),
        (L = r("div")),
        (N = m("Events")),
        (z = P()),
        (J = r("div")),
        ($ = m("Start")),
        (U = P()),
        (K = r("div")),
        (H = m("End")),
        (Y = P()),
        (x = r("div")),
        (_e = m(" ")),
        (ue = P()),
        ve && ve.c(),
        (ne = P()),
        he && he.c(),
        (fe = P()),
        (ce = r("div")),
        (De = r("h1")),
        (G = m("Summary")),
        (F = P()),
        (X = r("div")),
        (se = r("div")),
        (ke = m("Appearances: ")),
        (ee = m(Ee)),
        (Te = P()),
        (we = r("div")),
        (ge = m("Goals: ")),
        (Ue = m(Le)),
        (je = P()),
        (Ie = r("div")),
        (M = m("Own Goals: ")),
        (de = m(j)),
        (ie = P()),
        (Ne = r("div")),
        (Ze = m("Assists: ")),
        (Oe = m(Me)),
        (xe = P()),
        (Be = r("div")),
        (nt = m("Keeper Saves: ")),
        (Ge = m(oe)),
        (re = P()),
        (ae = r("div")),
        (me = m("Yellow Cards: ")),
        (pe = m(te)),
        (it = P()),
        (Ve = r("div")),
        (Je = m("Red Cards: ")),
        (Se = m(Xe)),
        (ot = P()),
        (be = r("div")),
        (rt = m("Penalties Saved: ")),
        ($e = m(ze)),
        (ft = P()),
        (Re = r("div")),
        (ut = m("Penalties Missed: ")),
        (et = m(Qe)),
        (Ye = P()),
        (qe = r("div")),
        (Pe = r("button")),
        (ct = m("Submit Event Data")),
        this.h();
    },
    l(R) {
      e = f(R, "DIV", { class: !0 });
      var Q = d(e);
      t = f(Q, "UL", { class: !0 });
      var lt = d(t);
      l = f(lt, "LI", { class: !0 });
      var vt = d(l);
      n = f(vt, "BUTTON", { class: !0 });
      var Ht = d(n);
      (v = p(Ht, _)),
        Ht.forEach(i),
        vt.forEach(i),
        (I = V(lt)),
        (y = f(lt, "LI", { class: !0 }));
      var jt = d(y);
      c = f(jt, "BUTTON", { class: !0 });
      var Yt = d(c);
      (k = p(Yt, D)),
        Yt.forEach(i),
        jt.forEach(i),
        lt.forEach(i),
        Q.forEach(i),
        (O = V(R)),
        (T = f(R, "DIV", { class: !0 }));
      var ht = d(T);
      C = f(ht, "DIV", { class: !0 });
      var Ce = d(C);
      b = f(Ce, "DIV", { class: !0 });
      var Wt = d(b);
      (E = p(Wt, "Player")),
        Wt.forEach(i),
        (w = V(Ce)),
        (g = f(Ce, "DIV", { class: !0 }));
      var Jt = d(g);
      (q = p(Jt, "Position")),
        Jt.forEach(i),
        (B = V(Ce)),
        (L = f(Ce, "DIV", { class: !0 }));
      var Xt = d(L);
      (N = p(Xt, "Events")),
        Xt.forEach(i),
        (z = V(Ce)),
        (J = f(Ce, "DIV", { class: !0 }));
      var zt = d(J);
      ($ = p(zt, "Start")),
        zt.forEach(i),
        (U = V(Ce)),
        (K = f(Ce, "DIV", { class: !0 }));
      var Qt = d(K);
      (H = p(Qt, "End")),
        Qt.forEach(i),
        (Y = V(Ce)),
        (x = f(Ce, "DIV", { class: !0 }));
      var Zt = d(x);
      (_e = p(Zt, " ")),
        Zt.forEach(i),
        Ce.forEach(i),
        (ue = V(ht)),
        ve && ve.l(ht),
        (ne = V(ht)),
        he && he.l(ht),
        ht.forEach(i),
        (fe = V(R)),
        (ce = f(R, "DIV", { class: !0 }));
      var xt = d(ce);
      De = f(xt, "H1", {});
      var $t = d(De);
      (G = p($t, "Summary")),
        $t.forEach(i),
        xt.forEach(i),
        (F = V(R)),
        (X = f(R, "DIV", { class: !0 }));
      var ye = d(X);
      se = f(ye, "DIV", { class: !0 });
      var St = d(se);
      (ke = p(St, "Appearances: ")),
        (ee = p(St, Ee)),
        St.forEach(i),
        (Te = V(ye)),
        (we = f(ye, "DIV", { class: !0 }));
      var Mt = d(we);
      (ge = p(Mt, "Goals: ")),
        (Ue = p(Mt, Le)),
        Mt.forEach(i),
        (je = V(ye)),
        (Ie = f(ye, "DIV", { class: !0 }));
      var Ot = d(Ie);
      (M = p(Ot, "Own Goals: ")),
        (de = p(Ot, j)),
        Ot.forEach(i),
        (ie = V(ye)),
        (Ne = f(ye, "DIV", { class: !0 }));
      var Ct = d(Ne);
      (Ze = p(Ct, "Assists: ")),
        (Oe = p(Ct, Me)),
        Ct.forEach(i),
        (xe = V(ye)),
        (Be = f(ye, "DIV", { class: !0 }));
      var At = d(Be);
      (nt = p(At, "Keeper Saves: ")),
        (Ge = p(At, oe)),
        At.forEach(i),
        (re = V(ye)),
        (ae = f(ye, "DIV", { class: !0 }));
      var Ft = d(ae);
      (me = p(Ft, "Yellow Cards: ")),
        (pe = p(Ft, te)),
        Ft.forEach(i),
        (it = V(ye)),
        (Ve = f(ye, "DIV", { class: !0 }));
      var Lt = d(Ve);
      (Je = p(Lt, "Red Cards: ")),
        (Se = p(Lt, Xe)),
        Lt.forEach(i),
        (ot = V(ye)),
        (be = f(ye, "DIV", { class: !0 }));
      var Ut = d(be);
      (rt = p(Ut, "Penalties Saved: ")),
        ($e = p(Ut, ze)),
        Ut.forEach(i),
        (ft = V(ye)),
        (Re = f(ye, "DIV", { class: !0 }));
      var Bt = d(Re);
      (ut = p(Bt, "Penalties Missed: ")),
        (et = p(Bt, Qe)),
        Bt.forEach(i),
        ye.forEach(i),
        (Ye = V(R)),
        (qe = f(R, "DIV", { class: !0 }));
      var el = d(qe);
      Pe = f(el, "BUTTON", { class: !0 });
      var tl = d(Pe);
      (ct = p(tl, "Submit Event Data")), tl.forEach(i), el.forEach(i), this.h();
    },
    h() {
      o(
        n,
        "class",
        (u = `p-2 ${a[11] === "home" ? "text-white" : "text-gray-400"}`)
      ),
        o(
          l,
          "class",
          (h = `mr-4 text-xs md:text-base ${
            a[11] === "home" ? "active-tab" : ""
          }`)
        ),
        o(
          c,
          "class",
          (A = `p-2 ${a[11] === "away" ? "text-white" : "text-gray-400"}`)
        ),
        o(
          y,
          "class",
          (S = `mr-4 text-xs md:text-base ${
            a[11] === "away" ? "active-tab" : ""
          }`)
        ),
        o(t, "class", "flex bg-light-gray px-4 pt-2 w-full mt-4"),
        o(e, "class", "flex w-full"),
        o(b, "class", "w-1/6 px-4"),
        o(g, "class", "w-1/6 px-4"),
        o(L, "class", "w-1/6 px-4"),
        o(J, "class", "w-1/6 px-4"),
        o(K, "class", "w-1/6 px-4"),
        o(x, "class", "w-1/6 px-4"),
        o(
          C,
          "class",
          "flex items-center p-2 justify-between py-4 border-b border-gray-700 cursor-pointer w-full"
        ),
        o(T, "class", "flex w-full flex-col"),
        o(ce, "class", "flex w-full m-4"),
        o(se, "class", "text-sm font-medium flex-grow"),
        o(we, "class", "text-sm font-medium flex-grow"),
        o(Ie, "class", "text-sm font-medium flex-grow"),
        o(Ne, "class", "text-sm font-medium flex-grow"),
        o(Be, "class", "text-sm font-medium flex-grow"),
        o(ae, "class", "text-sm font-medium flex-grow"),
        o(Ve, "class", "text-sm font-medium flex-grow"),
        o(be, "class", "text-sm font-medium flex-grow"),
        o(Re, "class", "text-sm font-medium flex-grow"),
        o(X, "class", "flex flex-row w-full m-4"),
        o(
          Pe,
          "class",
          (tt = `${a[12] ? "bg-gray-500" : "fpl-purple-btn"} 
            px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`)
        ),
        (Pe.disabled = a[12]),
        o(qe, "class", "items-center mt-3 flex space-x-4");
    },
    m(R, Q) {
      W(R, e, Q),
        s(e, t),
        s(t, l),
        s(l, n),
        s(n, v),
        s(t, I),
        s(t, y),
        s(y, c),
        s(c, k),
        W(R, O, Q),
        W(R, T, Q),
        s(T, C),
        s(C, b),
        s(b, E),
        s(C, w),
        s(C, g),
        s(g, q),
        s(C, B),
        s(C, L),
        s(L, N),
        s(C, z),
        s(C, J),
        s(J, $),
        s(C, U),
        s(C, K),
        s(K, H),
        s(C, Y),
        s(C, x),
        s(x, _e),
        s(T, ue),
        ve && ve.m(T, null),
        s(T, ne),
        he && he.m(T, null),
        W(R, fe, Q),
        W(R, ce, Q),
        s(ce, De),
        s(De, G),
        W(R, F, Q),
        W(R, X, Q),
        s(X, se),
        s(se, ke),
        s(se, ee),
        s(X, Te),
        s(X, we),
        s(we, ge),
        s(we, Ue),
        s(X, je),
        s(X, Ie),
        s(Ie, M),
        s(Ie, de),
        s(X, ie),
        s(X, Ne),
        s(Ne, Ze),
        s(Ne, Oe),
        s(X, xe),
        s(X, Be),
        s(Be, nt),
        s(Be, Ge),
        s(X, re),
        s(X, ae),
        s(ae, me),
        s(ae, pe),
        s(X, it),
        s(X, Ve),
        s(Ve, Je),
        s(Ve, Se),
        s(X, ot),
        s(X, be),
        s(be, rt),
        s(be, $e),
        s(X, ft),
        s(X, Re),
        s(Re, ut),
        s(Re, et),
        W(R, Ye, Q),
        W(R, qe, Q),
        s(qe, Pe),
        s(Pe, ct),
        dt ||
          ((mt = [
            Z(n, "click", a[28]),
            Z(c, "click", a[29]),
            Z(Pe, "click", a[17]),
          ]),
          (dt = !0));
    },
    p(R, Q) {
      Q[0] & 8 && _ !== (_ = R[3]?.friendlyName + "") && le(v, _),
        Q[0] & 2048 &&
          u !==
            (u = `p-2 ${R[11] === "home" ? "text-white" : "text-gray-400"}`) &&
          o(n, "class", u),
        Q[0] & 2048 &&
          h !==
            (h = `mr-4 text-xs md:text-base ${
              R[11] === "home" ? "active-tab" : ""
            }`) &&
          o(l, "class", h),
        Q[0] & 16 && D !== (D = R[4]?.friendlyName + "") && le(k, D),
        Q[0] & 2048 &&
          A !==
            (A = `p-2 ${R[11] === "away" ? "text-white" : "text-gray-400"}`) &&
          o(c, "class", A),
        Q[0] & 2048 &&
          S !==
            (S = `mr-4 text-xs md:text-base ${
              R[11] === "away" ? "active-tab" : ""
            }`) &&
          o(y, "class", S),
        R[11] === "home"
          ? ve
            ? ve.p(R, Q)
            : ((ve = Dl(R)), ve.c(), ve.m(T, ne))
          : ve && (ve.d(1), (ve = null)),
        R[11] === "away"
          ? he
            ? he.p(R, Q)
            : ((he = Sl(R)), he.c(), he.m(T, null))
          : he && (he.d(1), (he = null)),
        Q[0] & 1 && Ee !== (Ee = R[0].filter(Bl).length + "") && le(ee, Ee),
        Q[0] & 1 && Le !== (Le = R[0].filter(Gl).length + "") && le(Ue, Le),
        Q[0] & 1 && j !== (j = R[0].filter(Kl).length + "") && le(de, j),
        Q[0] & 1 && Me !== (Me = R[0].filter(Rl).length + "") && le(Oe, Me),
        Q[0] & 1 && oe !== (oe = R[0].filter(ql).length + "") && le(Ge, oe),
        Q[0] & 1 && te !== (te = R[0].filter(Hl).length + "") && le(pe, te),
        Q[0] & 1 && Xe !== (Xe = R[0].filter(jl).length + "") && le(Se, Xe),
        Q[0] & 1 && ze !== (ze = R[0].filter(Yl).length + "") && le($e, ze),
        Q[0] & 1 && Qe !== (Qe = R[0].filter(Wl).length + "") && le(et, Qe),
        Q[0] & 4096 &&
          tt !==
            (tt = `${R[12] ? "bg-gray-500" : "fpl-purple-btn"} 
            px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`) &&
          o(Pe, "class", tt),
        Q[0] & 4096 && (Pe.disabled = R[12]);
    },
    d(R) {
      R && i(e),
        R && i(O),
        R && i(T),
        ve && ve.d(),
        he && he.d(),
        R && i(fe),
        R && i(ce),
        R && i(F),
        R && i(X),
        R && i(Ye),
        R && i(qe),
        (dt = !1),
        _t(mt);
    },
  };
}
function Dl(a) {
  let e = [],
    t = new Map(),
    l,
    n = a[1].filter(a[30]);
  const _ = (v) => v[50].id;
  for (let v = 0; v < n.length; v += 1) {
    let u = gl(a, n, v),
      h = _(u);
    t.set(h, (e[v] = Vl(h, u)));
  }
  return {
    c() {
      for (let v = 0; v < e.length; v += 1) e[v].c();
      l = Ae();
    },
    l(v) {
      for (let u = 0; u < e.length; u += 1) e[u].l(v);
      l = Ae();
    },
    m(v, u) {
      for (let h = 0; h < e.length; h += 1) e[h] && e[h].m(v, u);
      W(v, l, u);
    },
    p(v, u) {
      u[0] & 2097159 &&
        ((n = v[1].filter(v[30])),
        (e = Xl(e, u, _, 1, v, n, t, l.parentNode, zl, Vl, l, gl)));
    },
    d(v) {
      for (let u = 0; u < e.length; u += 1) e[u].d(v);
      v && i(l);
    },
  };
}
function kl(a) {
  let e, t;
  return {
    c() {
      (e = r("div")), (t = m("GK")), this.h();
    },
    l(l) {
      e = f(l, "DIV", { class: !0 });
      var n = d(e);
      (t = p(n, "GK")), n.forEach(i), this.h();
    },
    h() {
      o(e, "class", "w-1/6 px-4");
    },
    m(l, n) {
      W(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function Tl(a) {
  let e, t;
  return {
    c() {
      (e = r("div")), (t = m("DF")), this.h();
    },
    l(l) {
      e = f(l, "DIV", { class: !0 });
      var n = d(e);
      (t = p(n, "DF")), n.forEach(i), this.h();
    },
    h() {
      o(e, "class", "w-1/6 px-4");
    },
    m(l, n) {
      W(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function Nl(a) {
  let e, t;
  return {
    c() {
      (e = r("div")), (t = m("MF")), this.h();
    },
    l(l) {
      e = f(l, "DIV", { class: !0 });
      var n = d(e);
      (t = p(n, "MF")), n.forEach(i), this.h();
    },
    h() {
      o(e, "class", "w-1/6 px-4");
    },
    m(l, n) {
      W(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function Pl(a) {
  let e, t;
  return {
    c() {
      (e = r("div")), (t = m("FW")), this.h();
    },
    l(l) {
      e = f(l, "DIV", { class: !0 });
      var n = d(e);
      (t = p(n, "FW")), n.forEach(i), this.h();
    },
    h() {
      o(e, "class", "w-1/6 px-4");
    },
    m(l, n) {
      W(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function Vl(a, e) {
  let t,
    l,
    n = `${e[50].firstName.length > 0 ? e[50].firstName.charAt(0) + "." : ""} ${
      e[50].lastName
    }`,
    _,
    v,
    u,
    h,
    I,
    y,
    c,
    D,
    k =
      (e[0]?.length > 0 && e[0]?.filter(x).length
        ? e[0]?.filter(_e).length
        : 0) + "",
    A,
    S,
    O,
    T =
      (e[0] && e[0]?.length > 0 && e[0]?.find(ue)
        ? e[0]?.find(ne)?.eventStartMinute
        : "-") + "",
    C,
    b,
    E,
    w =
      (e[0] && e[0]?.length > 0 && e[0]?.find(fe)
        ? e[0]?.find(ce)?.eventEndMinute
        : "-") + "",
    g,
    q,
    B,
    L,
    N,
    z,
    J,
    $,
    U = e[50].position == 0 && kl(),
    K = e[50].position == 1 && Tl(),
    H = e[50].position == 2 && Nl(),
    Y = e[50].position == 3 && Pl();
  function x(...G) {
    return e[31](e[50], ...G);
  }
  function _e(...G) {
    return e[32](e[50], ...G);
  }
  function ue(...G) {
    return e[33](e[50], ...G);
  }
  function ne(...G) {
    return e[34](e[50], ...G);
  }
  function fe(...G) {
    return e[35](e[50], ...G);
  }
  function ce(...G) {
    return e[36](e[50], ...G);
  }
  function De() {
    return e[37](e[50]);
  }
  return {
    key: a,
    first: null,
    c() {
      (t = r("div")),
        (l = r("div")),
        (_ = m(n)),
        (v = P()),
        U && U.c(),
        (u = P()),
        K && K.c(),
        (h = P()),
        H && H.c(),
        (I = P()),
        Y && Y.c(),
        (y = P()),
        (c = r("div")),
        (D = m(`Events:
                  `)),
        (A = m(k)),
        (S = P()),
        (O = r("div")),
        (C = m(T)),
        (b = P()),
        (E = r("div")),
        (g = m(w)),
        (q = P()),
        (B = r("div")),
        (L = r("button")),
        (N = m("Update Events")),
        (z = P()),
        this.h();
    },
    l(G) {
      t = f(G, "DIV", { class: !0 });
      var F = d(t);
      l = f(F, "DIV", { class: !0 });
      var X = d(l);
      (_ = p(X, n)),
        X.forEach(i),
        (v = V(F)),
        U && U.l(F),
        (u = V(F)),
        K && K.l(F),
        (h = V(F)),
        H && H.l(F),
        (I = V(F)),
        Y && Y.l(F),
        (y = V(F)),
        (c = f(F, "DIV", { class: !0 }));
      var se = d(c);
      (D = p(
        se,
        `Events:
                  `
      )),
        (A = p(se, k)),
        se.forEach(i),
        (S = V(F)),
        (O = f(F, "DIV", { class: !0 }));
      var ke = d(O);
      (C = p(ke, T)),
        ke.forEach(i),
        (b = V(F)),
        (E = f(F, "DIV", { class: !0 }));
      var Ee = d(E);
      (g = p(Ee, w)),
        Ee.forEach(i),
        (q = V(F)),
        (B = f(F, "DIV", { class: !0 }));
      var ee = d(B);
      L = f(ee, "BUTTON", { class: !0 });
      var Te = d(L);
      (N = p(Te, "Update Events")),
        Te.forEach(i),
        ee.forEach(i),
        (z = V(F)),
        F.forEach(i),
        this.h();
    },
    h() {
      o(l, "class", "w-1/6 px-4"),
        o(c, "class", "w-1/6 px-4"),
        o(O, "class", "w-1/6 px-4"),
        o(E, "class", "w-1/6 px-4"),
        o(
          L,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        o(B, "class", "w-1/6 px-4"),
        o(
          t,
          "class",
          "flex items-center p-2 justify-between py-4 border-b border-gray-700 cursor-pointer w-full"
        ),
        (this.first = t);
    },
    m(G, F) {
      W(G, t, F),
        s(t, l),
        s(l, _),
        s(t, v),
        U && U.m(t, null),
        s(t, u),
        K && K.m(t, null),
        s(t, h),
        H && H.m(t, null),
        s(t, I),
        Y && Y.m(t, null),
        s(t, y),
        s(t, c),
        s(c, D),
        s(c, A),
        s(t, S),
        s(t, O),
        s(O, C),
        s(t, b),
        s(t, E),
        s(E, g),
        s(t, q),
        s(t, B),
        s(B, L),
        s(L, N),
        s(t, z),
        J || (($ = Z(L, "click", De)), (J = !0));
    },
    p(G, F) {
      (e = G),
        F[0] & 6 &&
          n !==
            (n = `${
              e[50].firstName.length > 0 ? e[50].firstName.charAt(0) + "." : ""
            } ${e[50].lastName}`) &&
          le(_, n),
        e[50].position == 0
          ? U || ((U = kl()), U.c(), U.m(t, u))
          : U && (U.d(1), (U = null)),
        e[50].position == 1
          ? K || ((K = Tl()), K.c(), K.m(t, h))
          : K && (K.d(1), (K = null)),
        e[50].position == 2
          ? H || ((H = Nl()), H.c(), H.m(t, I))
          : H && (H.d(1), (H = null)),
        e[50].position == 3
          ? Y || ((Y = Pl()), Y.c(), Y.m(t, y))
          : Y && (Y.d(1), (Y = null)),
        F[0] & 7 &&
          k !==
            (k =
              (e[0]?.length > 0 && e[0]?.filter(x).length
                ? e[0]?.filter(_e).length
                : 0) + "") &&
          le(A, k),
        F[0] & 7 &&
          T !==
            (T =
              (e[0] && e[0]?.length > 0 && e[0]?.find(ue)
                ? e[0]?.find(ne)?.eventStartMinute
                : "-") + "") &&
          le(C, T),
        F[0] & 7 &&
          w !==
            (w =
              (e[0] && e[0]?.length > 0 && e[0]?.find(fe)
                ? e[0]?.find(ce)?.eventEndMinute
                : "-") + "") &&
          le(g, w);
    },
    d(G) {
      G && i(t), U && U.d(), K && K.d(), H && H.d(), Y && Y.d(), (J = !1), $();
    },
  };
}
function Sl(a) {
  let e = [],
    t = new Map(),
    l,
    n = a[1].filter(a[38]);
  const _ = (v) => v[50].id;
  for (let v = 0; v < n.length; v += 1) {
    let u = wl(a, n, v),
      h = _(u);
    t.set(h, (e[v] = Fl(h, u)));
  }
  return {
    c() {
      for (let v = 0; v < e.length; v += 1) e[v].c();
      l = Ae();
    },
    l(v) {
      for (let u = 0; u < e.length; u += 1) e[u].l(v);
      l = Ae();
    },
    m(v, u) {
      for (let h = 0; h < e.length; h += 1) e[h] && e[h].m(v, u);
      W(v, l, u);
    },
    p(v, u) {
      u[0] & 2097159 &&
        ((n = v[1].filter(v[38])),
        (e = Xl(e, u, _, 1, v, n, t, l.parentNode, zl, Fl, l, wl)));
    },
    d(v) {
      for (let u = 0; u < e.length; u += 1) e[u].d(v);
      v && i(l);
    },
  };
}
function Ml(a) {
  let e, t;
  return {
    c() {
      (e = r("div")), (t = m("GK")), this.h();
    },
    l(l) {
      e = f(l, "DIV", { class: !0 });
      var n = d(e);
      (t = p(n, "GK")), n.forEach(i), this.h();
    },
    h() {
      o(e, "class", "w-1/6 px-4");
    },
    m(l, n) {
      W(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function Ol(a) {
  let e, t;
  return {
    c() {
      (e = r("div")), (t = m("DF")), this.h();
    },
    l(l) {
      e = f(l, "DIV", { class: !0 });
      var n = d(e);
      (t = p(n, "DF")), n.forEach(i), this.h();
    },
    h() {
      o(e, "class", "w-1/6 px-4");
    },
    m(l, n) {
      W(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function Cl(a) {
  let e, t;
  return {
    c() {
      (e = r("div")), (t = m("MF")), this.h();
    },
    l(l) {
      e = f(l, "DIV", { class: !0 });
      var n = d(e);
      (t = p(n, "MF")), n.forEach(i), this.h();
    },
    h() {
      o(e, "class", "w-1/6 px-4");
    },
    m(l, n) {
      W(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function Al(a) {
  let e, t;
  return {
    c() {
      (e = r("div")), (t = m("FW")), this.h();
    },
    l(l) {
      e = f(l, "DIV", { class: !0 });
      var n = d(e);
      (t = p(n, "FW")), n.forEach(i), this.h();
    },
    h() {
      o(e, "class", "w-1/6 px-4");
    },
    m(l, n) {
      W(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function Fl(a, e) {
  let t,
    l,
    n = `${e[50].firstName.length > 0 ? e[50].firstName.charAt(0) + "." : ""} ${
      e[50].lastName
    }`,
    _,
    v,
    u,
    h,
    I,
    y,
    c,
    D,
    k =
      (e[0]?.length > 0 && e[0]?.filter(x).length
        ? e[0]?.filter(_e).length
        : 0) + "",
    A,
    S,
    O,
    T =
      (e[0] && e[0]?.length > 0 && e[0]?.find(ue)
        ? e[0]?.find(ne)?.eventStartMinute
        : "-") + "",
    C,
    b,
    E,
    w =
      (e[0] && e[0]?.length > 0 && e[0]?.find(fe)
        ? e[0]?.find(ce)?.eventEndMinute
        : "-") + "",
    g,
    q,
    B,
    L,
    N,
    z,
    J,
    $,
    U = e[50].position == 0 && Ml(),
    K = e[50].position == 1 && Ol(),
    H = e[50].position == 2 && Cl(),
    Y = e[50].position == 3 && Al();
  function x(...G) {
    return e[39](e[50], ...G);
  }
  function _e(...G) {
    return e[40](e[50], ...G);
  }
  function ue(...G) {
    return e[41](e[50], ...G);
  }
  function ne(...G) {
    return e[42](e[50], ...G);
  }
  function fe(...G) {
    return e[43](e[50], ...G);
  }
  function ce(...G) {
    return e[44](e[50], ...G);
  }
  function De() {
    return e[45](e[50]);
  }
  return {
    key: a,
    first: null,
    c() {
      (t = r("div")),
        (l = r("div")),
        (_ = m(n)),
        (v = P()),
        U && U.c(),
        (u = P()),
        K && K.c(),
        (h = P()),
        H && H.c(),
        (I = P()),
        Y && Y.c(),
        (y = P()),
        (c = r("div")),
        (D = m(`Events:
                  `)),
        (A = m(k)),
        (S = P()),
        (O = r("div")),
        (C = m(T)),
        (b = P()),
        (E = r("div")),
        (g = m(w)),
        (q = P()),
        (B = r("div")),
        (L = r("button")),
        (N = m("Update Events")),
        (z = P()),
        this.h();
    },
    l(G) {
      t = f(G, "DIV", { class: !0 });
      var F = d(t);
      l = f(F, "DIV", { class: !0 });
      var X = d(l);
      (_ = p(X, n)),
        X.forEach(i),
        (v = V(F)),
        U && U.l(F),
        (u = V(F)),
        K && K.l(F),
        (h = V(F)),
        H && H.l(F),
        (I = V(F)),
        Y && Y.l(F),
        (y = V(F)),
        (c = f(F, "DIV", { class: !0 }));
      var se = d(c);
      (D = p(
        se,
        `Events:
                  `
      )),
        (A = p(se, k)),
        se.forEach(i),
        (S = V(F)),
        (O = f(F, "DIV", { class: !0 }));
      var ke = d(O);
      (C = p(ke, T)),
        ke.forEach(i),
        (b = V(F)),
        (E = f(F, "DIV", { class: !0 }));
      var Ee = d(E);
      (g = p(Ee, w)),
        Ee.forEach(i),
        (q = V(F)),
        (B = f(F, "DIV", { class: !0 }));
      var ee = d(B);
      L = f(ee, "BUTTON", { class: !0 });
      var Te = d(L);
      (N = p(Te, "Update Events")),
        Te.forEach(i),
        ee.forEach(i),
        (z = V(F)),
        F.forEach(i),
        this.h();
    },
    h() {
      o(l, "class", "w-1/6 px-4"),
        o(c, "class", "w-1/6 px-4"),
        o(O, "class", "w-1/6 px-4"),
        o(E, "class", "w-1/6 px-4"),
        o(
          L,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        o(B, "class", "w-1/6 px-4"),
        o(
          t,
          "class",
          "flex items-center p-2 justify-between py-4 border-b border-gray-700 cursor-pointer w-full"
        ),
        (this.first = t);
    },
    m(G, F) {
      W(G, t, F),
        s(t, l),
        s(l, _),
        s(t, v),
        U && U.m(t, null),
        s(t, u),
        K && K.m(t, null),
        s(t, h),
        H && H.m(t, null),
        s(t, I),
        Y && Y.m(t, null),
        s(t, y),
        s(t, c),
        s(c, D),
        s(c, A),
        s(t, S),
        s(t, O),
        s(O, C),
        s(t, b),
        s(t, E),
        s(E, g),
        s(t, q),
        s(t, B),
        s(B, L),
        s(L, N),
        s(t, z),
        J || (($ = Z(L, "click", De)), (J = !0));
    },
    p(G, F) {
      (e = G),
        F[0] & 6 &&
          n !==
            (n = `${
              e[50].firstName.length > 0 ? e[50].firstName.charAt(0) + "." : ""
            } ${e[50].lastName}`) &&
          le(_, n),
        e[50].position == 0
          ? U || ((U = Ml()), U.c(), U.m(t, u))
          : U && (U.d(1), (U = null)),
        e[50].position == 1
          ? K || ((K = Ol()), K.c(), K.m(t, h))
          : K && (K.d(1), (K = null)),
        e[50].position == 2
          ? H || ((H = Cl()), H.c(), H.m(t, I))
          : H && (H.d(1), (H = null)),
        e[50].position == 3
          ? Y || ((Y = Al()), Y.c(), Y.m(t, y))
          : Y && (Y.d(1), (Y = null)),
        F[0] & 7 &&
          k !==
            (k =
              (e[0]?.length > 0 && e[0]?.filter(x).length
                ? e[0]?.filter(_e).length
                : 0) + "") &&
          le(A, k),
        F[0] & 7 &&
          T !==
            (T =
              (e[0] && e[0]?.length > 0 && e[0]?.find(ue)
                ? e[0]?.find(ne)?.eventStartMinute
                : "-") + "") &&
          le(C, T),
        F[0] & 7 &&
          w !==
            (w =
              (e[0] && e[0]?.length > 0 && e[0]?.find(fe)
                ? e[0]?.find(ce)?.eventEndMinute
                : "-") + "") &&
          le(g, w);
    },
    d(G) {
      G && i(t), U && U.d(), K && K.d(), H && H.d(), Y && Y.d(), (J = !1), $();
    },
  };
}
function Es(a) {
  let e,
    t,
    l,
    n,
    _,
    v,
    u,
    h,
    I,
    y,
    c,
    D,
    k,
    A,
    S = !a[14] && Il(a);
  return {
    c() {
      (e = r("div")),
        (t = r("div")),
        (l = r("div")),
        (n = r("button")),
        (_ = m("Select Players")),
        (v = P()),
        (u = r("button")),
        (h = m("Save Draft")),
        (I = P()),
        (y = r("button")),
        (c = m("Clear Draft")),
        (D = P()),
        S && S.c(),
        this.h();
    },
    l(O) {
      e = f(O, "DIV", { class: !0 });
      var T = d(e);
      t = f(T, "DIV", { class: !0 });
      var C = d(t);
      l = f(C, "DIV", { class: !0 });
      var b = d(l);
      n = f(b, "BUTTON", { class: !0 });
      var E = d(n);
      (_ = p(E, "Select Players")),
        E.forEach(i),
        (v = V(b)),
        (u = f(b, "BUTTON", { class: !0 }));
      var w = d(u);
      (h = p(w, "Save Draft")),
        w.forEach(i),
        (I = V(b)),
        (y = f(b, "BUTTON", { class: !0 }));
      var g = d(y);
      (c = p(g, "Clear Draft")),
        g.forEach(i),
        b.forEach(i),
        (D = V(C)),
        S && S.l(C),
        C.forEach(i),
        T.forEach(i),
        this.h();
    },
    h() {
      o(n, "class", "fpl-button px-4 py-2"),
        o(u, "class", "fpl-button px-4 py-2"),
        o(y, "class", "fpl-button px-4 py-2"),
        o(l, "class", "flex flex-row space-x-2 p-4"),
        o(t, "class", "flex flex-col text-xs md:text-base mt-4"),
        o(e, "class", "container-fluid mx-4 md:mx-16 mt-4 bg-panel");
    },
    m(O, T) {
      W(O, e, T),
        s(e, t),
        s(t, l),
        s(l, n),
        s(n, _),
        s(l, v),
        s(l, u),
        s(u, h),
        s(l, I),
        s(l, y),
        s(y, c),
        s(t, D),
        S && S.m(t, null),
        k ||
          ((A = [
            Z(n, "click", a[23]),
            Z(u, "click", a[18]),
            Z(y, "click", a[25]),
          ]),
          (k = !0));
    },
    p(O, T) {
      O[14]
        ? S && (S.d(1), (S = null))
        : S
        ? S.p(O, T)
        : ((S = Il(O)), S.c(), S.m(t, null));
    },
    d(O) {
      O && i(e), S && S.d(), (k = !1), _t(A);
    },
  };
}
function Ll(a) {
  let e, t;
  return (
    (e = new vs({
      props: {
        show: a[5],
        teamPlayers: a[15],
        selectedTeam: a[8],
        selectedPlayers: a[16],
        closeModal: a[24],
      },
    })),
    {
      c() {
        yt(e.$$.fragment);
      },
      l(l) {
        Et(e.$$.fragment, l);
      },
      m(l, n) {
        wt(e, l, n), (t = !0);
      },
      p(l, n) {
        const _ = {};
        n[0] & 32 && (_.show = l[5]),
          n[0] & 256 && (_.selectedTeam = l[8]),
          e.$set(_);
      },
      i(l) {
        t || (Ke(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        We(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        gt(e, l);
      },
    }
  );
}
function Ul(a) {
  let e, t;
  return (
    (e = new us({
      props: {
        show: a[6],
        player: a[9],
        fixtureId: a[13],
        playerEventData: a[10],
        closeModal: a[22],
      },
    })),
    {
      c() {
        yt(e.$$.fragment);
      },
      l(l) {
        Et(e.$$.fragment, l);
      },
      m(l, n) {
        wt(e, l, n), (t = !0);
      },
      p(l, n) {
        const _ = {};
        n[0] & 64 && (_.show = l[6]),
          n[0] & 512 && (_.player = l[9]),
          n[0] & 8192 && (_.fixtureId = l[13]),
          n[0] & 1024 && (_.playerEventData = l[10]),
          e.$set(_);
      },
      i(l) {
        t || (Ke(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        We(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        gt(e, l);
      },
    }
  );
}
function ws(a) {
  let e, t, l, n, _, v, u, h;
  e = new ss({ props: { $$slots: { default: [Es] }, $$scope: { ctx: a } } });
  let I = a[8] && Ll(a),
    y = a[9] && Ul(a);
  return (
    (_ = new ms({ props: { show: gs, onConfirm: a[17] } })),
    (u = new ys({
      props: { closeModal: a[26], show: a[7], onConfirm: a[19] },
    })),
    {
      c() {
        yt(e.$$.fragment),
          (t = P()),
          I && I.c(),
          (l = P()),
          y && y.c(),
          (n = P()),
          yt(_.$$.fragment),
          (v = P()),
          yt(u.$$.fragment);
      },
      l(c) {
        Et(e.$$.fragment, c),
          (t = V(c)),
          I && I.l(c),
          (l = V(c)),
          y && y.l(c),
          (n = V(c)),
          Et(_.$$.fragment, c),
          (v = V(c)),
          Et(u.$$.fragment, c);
      },
      m(c, D) {
        wt(e, c, D),
          W(c, t, D),
          I && I.m(c, D),
          W(c, l, D),
          y && y.m(c, D),
          W(c, n, D),
          wt(_, c, D),
          W(c, v, D),
          wt(u, c, D),
          (h = !0);
      },
      p(c, D) {
        const k = {};
        (D[0] & 22559) | (D[1] & 16777216) &&
          (k.$$scope = { dirty: D, ctx: c }),
          e.$set(k),
          c[8]
            ? I
              ? (I.p(c, D), D[0] & 256 && Ke(I, 1))
              : ((I = Ll(c)), I.c(), Ke(I, 1), I.m(l.parentNode, l))
            : I &&
              (al(),
              We(I, 1, 1, () => {
                I = null;
              }),
              sl()),
          c[9]
            ? y
              ? (y.p(c, D), D[0] & 512 && Ke(y, 1))
              : ((y = Ul(c)), y.c(), Ke(y, 1), y.m(n.parentNode, n))
            : y &&
              (al(),
              We(y, 1, 1, () => {
                y = null;
              }),
              sl());
        const A = {};
        D[0] & 128 && (A.show = c[7]), u.$set(A);
      },
      i(c) {
        h ||
          (Ke(e.$$.fragment, c),
          Ke(I),
          Ke(y),
          Ke(_.$$.fragment, c),
          Ke(u.$$.fragment, c),
          (h = !0));
      },
      o(c) {
        We(e.$$.fragment, c),
          We(I),
          We(y),
          We(_.$$.fragment, c),
          We(u.$$.fragment, c),
          (h = !1);
      },
      d(c) {
        gt(e, c),
          c && i(t),
          I && I.d(c),
          c && i(l),
          y && y.d(c),
          c && i(n),
          gt(_, c),
          c && i(v),
          gt(u, c);
      },
    }
  );
}
let gs = !1;
const Bl = (a) => a.eventType == 0,
  Gl = (a) => a.eventType == 1,
  Kl = (a) => a.eventType == 10,
  Rl = (a) => a.eventType == 2,
  ql = (a) => a.eventType == 4,
  Hl = (a) => a.eventType == 8,
  jl = (a) => a.eventType == 9,
  Yl = (a) => a.eventType == 6,
  Wl = (a) => a.eventType == 7;
function Is(a, e, t) {
  let l,
    n,
    _ = Fe,
    v = () => (_(), (_ = Vt(q, (M) => t(0, (n = M)))), q),
    u,
    h,
    I,
    y;
  Nt(a, Gt, (M) => t(48, (u = M))),
    Nt(a, bt, (M) => t(14, (h = M))),
    Nt(a, es, (M) => t(27, (y = M))),
    a.$$.on_destroy.push(() => _());
  let c = [],
    D = [],
    k,
    A,
    S,
    O = !1,
    T = !1,
    C = !1,
    b = at([]),
    E = at([]);
  Nt(a, E, (M) => t(1, (I = M)));
  let w = null,
    g = null,
    q = at([]);
  v();
  let B = "home",
    L = !0;
  xl(async () => {
    st(bt, (h = !0), h);
    try {
      await nl.sync(),
        await il.sync(),
        await Kt.sync(),
        nl.subscribe((de) => {
          c = de;
        }),
        Kt.subscribe((de) => {
          D = de;
        }),
        il.subscribe((de) => {
          t(2, (k = de.find((ie) => ie.id == l))),
            t(3, (A = c.find((ie) => ie.id == k?.homeTeamId))),
            t(4, (S = c.find((ie) => ie.id == k?.awayTeamId))),
            t(8, (w = A)),
            b.set(D.filter((ie) => ie.teamId == w?.id));
        });
      const M = `fixtureDraft_${l}`,
        j = localStorage.getItem(M);
      if (j) {
        let ie = JSON.parse(j).playerEventData;
        ie && (q.set(ie), z());
      }
    } catch (M) {
      pt.show("Error fetching fixture validation list.", "error"),
        console.error("Error fetching fixture validation list.", M);
    } finally {
      st(bt, (h = !1), h);
    }
  }),
    $l(() => {});
  async function N() {
    st(bt, (h = !0), h), st(Gt, (u = "Saving Fixture Data"), u);
    try {
      await os.submitFixtureData(l, n),
        localStorage.removeItem(`fixtureDraft_${l}`),
        pt.show("Fixture data saved", "success"),
        as("/fixture-validation");
    } catch (M) {
      pt.show("Error saving fixture data.", "error"),
        console.error("Error saving fixture data: ", M);
    } finally {
      st(bt, (h = !1), h), st(Gt, (u = "Loading"), u);
    }
  }
  function z() {
    const M = new Set(n.map((de) => de.playerId)),
      j = D.filter((de) => M.has(de.id));
    E.set(j);
  }
  function J() {
    const M = { playerEventData: n },
      j = `fixtureDraft_${l}`;
    localStorage.setItem(j, JSON.stringify(M, ns)),
      pt.show("Draft saved.", "success");
  }
  function $() {
    v(t(10, (q = at([])))),
      localStorage.removeItem(`fixtureDraft_${l}`),
      pt.show("Draft cleared.", "success"),
      ue();
  }
  async function U(M) {
    await Kt.sync(),
      t(8, (w = M === "home" ? A : S)),
      b.set(D.filter((j) => j.teamId == w?.id)),
      t(11, (B = M));
  }
  function K(M) {
    t(9, (g = M)), t(6, (T = !0));
  }
  function H() {
    t(6, (T = !1)), t(9, (g = null));
  }
  function Y() {
    t(5, (O = !0));
  }
  function x() {
    t(5, (O = !1));
  }
  function _e() {
    t(7, (C = !0));
  }
  function ue() {
    t(7, (C = !1));
  }
  const ne = () => U("home"),
    fe = () => U("away"),
    ce = (M) => M.teamId === k?.homeTeamId,
    De = (M, j) => j.playerId === M.id,
    G = (M, j) => j.playerId === M.id,
    F = (M, j) => j.playerId === M.id && j.eventType == 0,
    X = (M, j) => j.playerId === M.id && j.eventType == 0,
    se = (M, j) => j.playerId === M.id && j.eventType == 0,
    ke = (M, j) => j.playerId === M.id && j.eventType == 0,
    Ee = (M) => K(M),
    ee = (M) => M.teamId === k?.awayTeamId,
    Te = (M, j) => j.playerId === M.id,
    we = (M, j) => j.playerId === M.id,
    ge = (M, j) => j.playerId === M.id && j.eventType == 0,
    Le = (M, j) => j.playerId === M.id,
    Ue = (M, j) => j.playerId === M.id && j.eventType == 0,
    je = (M, j) => j.playerId === M.id,
    Ie = (M) => K(M);
  return (
    (a.$$.update = () => {
      a.$$.dirty[0] & 134217728 &&
        t(13, (l = Number(y.url.searchParams.get("id")))),
        a.$$.dirty[0] & 3 &&
          t(
            12,
            (L =
              n.length == 0 ||
              n.filter((M) => M.eventType == 0).length != I.length)
          );
    }),
    [
      n,
      I,
      k,
      A,
      S,
      O,
      T,
      C,
      w,
      g,
      q,
      B,
      L,
      l,
      h,
      b,
      E,
      N,
      J,
      $,
      U,
      K,
      H,
      Y,
      x,
      _e,
      ue,
      y,
      ne,
      fe,
      ce,
      De,
      G,
      F,
      X,
      se,
      ke,
      Ee,
      ee,
      Te,
      we,
      ge,
      Le,
      Ue,
      je,
      Ie,
    ]
  );
}
class Ms extends It {
  constructor(e) {
    super(), Dt(this, e, Is, ws, kt, {}, null, [-1, -1]);
  }
}
export { Ms as component };
