import {
  r as Es,
  f as Il,
  a as Nt,
  m as Qt,
  c as bs,
  k as gs,
  A as ps,
  t as wl,
  L as ws,
  e as ys,
  j as zt,
} from "../chunks/Layout.0e76e124.js";
import {
  u as $,
  v as $t,
  V as At,
  z as Dt,
  K as El,
  W as Ft,
  y as It,
  X as Lt,
  N as Mt,
  g as Ne,
  e as Pe,
  S as Pt,
  c as S,
  s as St,
  B as Tt,
  d as Ue,
  a as V,
  i as Vt,
  L as X,
  Q as Xe,
  I as Xt,
  Y as Zt,
  O as _s,
  _ as cs,
  m as d,
  J as ds,
  R as el,
  l as f,
  M as fs,
  o as hs,
  h as i,
  H as ke,
  A as kt,
  q as m,
  n as o,
  r as p,
  k as r,
  G as s,
  T as tl,
  Z as us,
  P as vs,
  f as xt,
  b as z,
} from "../chunks/index.a8c54947.js";
import { w as ct } from "../chunks/singletons.fdfa7ed0.js";
import { p as ms } from "../chunks/stores.95126db5.js";
function Is() {
  const { subscribe: a, set: e } = ct([]);
  async function t(l, n) {
    try {
      await (
        await ps.createIdentityActor(bs, "bboqb-jiaaa-aaaal-qb6ea-cai")
      ).savePlayerEvents(l, n);
    } catch (_) {
      throw (console.error("Error submitting fixture data:", _), _);
    }
  }
  return { subscribe: a, submitFixtureData: t };
}
const Ds = Is();
function Dl(a, e, t) {
  const l = a.slice();
  return (l[21] = e[t]), (l[23] = t), l;
}
function kl(a) {
  let e,
    t,
    l,
    n,
    _,
    u = a[1].firstName !== "" ? a[1].firstName.charAt(0) + "." : "",
    c,
    h,
    g = a[1].lastName + "",
    b,
    v,
    k,
    T,
    M,
    G,
    L,
    O,
    q,
    E,
    y,
    D,
    I,
    K,
    C,
    A,
    P,
    W,
    Y,
    J,
    N,
    B,
    R,
    j,
    Z,
    ce,
    fe,
    le,
    ue,
    Ee,
    pe,
    U,
    F,
    se,
    re,
    we,
    de,
    ee,
    Ie,
    Ve,
    be,
    Se,
    Me,
    ze,
    Oe,
    w,
    H,
    ve,
    ae,
    Ce,
    nt,
    Te,
    Be,
    Qe,
    Ze,
    dt,
    ne = a[1].position === 0 && Tl(),
    Ge = a[8].filter(a[18]),
    ie = [];
  for (let oe = 0; oe < Ge.length; oe += 1) ie[oe] = Nl(Dl(a, Ge, oe));
  return {
    c() {
      (e = r("div")),
        (t = r("div")),
        (l = r("div")),
        (n = r("div")),
        (_ = r("h4")),
        (c = m(u)),
        (h = V()),
        (b = m(g)),
        (v = m(" - Match Events")),
        (k = V()),
        (T = r("div")),
        (M = r("h4")),
        (G = m("Add Event")),
        (L = V()),
        (O = r("div")),
        (q = r("div")),
        (E = r("select")),
        (y = r("option")),
        (D = m("Select event type")),
        (I = r("option")),
        (K = m("Appearance")),
        (C = r("option")),
        (A = m("Goal Scored")),
        (P = r("option")),
        (W = m("Goal Assisted")),
        (Y = r("option")),
        (J = m("Penalty Missed")),
        (N = r("option")),
        (B = m("Yellow Card")),
        (R = r("option")),
        (j = m("Card")),
        (Z = r("option")),
        (ce = m("Own Goal")),
        ne && ne.c(),
        (fe = V()),
        (le = r("div")),
        (ue = r("label")),
        (Ee = m("Start Minute")),
        (pe = V()),
        (U = r("input")),
        (F = V()),
        (se = r("div")),
        (re = r("label")),
        (we = m("End Minute")),
        (de = V()),
        (ee = r("input")),
        (Ie = V()),
        (Ve = r("div")),
        (be = r("button")),
        (Se = m("Add Event")),
        (ze = V()),
        (Oe = r("div")),
        (w = r("h4")),
        (H = m("Events:")),
        (ve = V()),
        (ae = r("div")),
        (Ce = r("ul"));
      for (let oe = 0; oe < ie.length; oe += 1) ie[oe].c();
      (nt = V()),
        (Te = r("div")),
        (Be = r("button")),
        (Qe = m("Done")),
        this.h();
    },
    l(oe) {
      e = f(oe, "DIV", { class: !0 });
      var he = d(e);
      t = f(he, "DIV", { class: !0 });
      var x = d(t);
      l = f(x, "DIV", { class: !0 });
      var me = d(l);
      n = f(me, "DIV", { class: !0 });
      var xe = d(n);
      _ = f(xe, "H4", { class: !0 });
      var Ke = d(_);
      (c = p(Ke, u)),
        (h = S(Ke)),
        (b = p(Ke, g)),
        (v = p(Ke, " - Match Events")),
        Ke.forEach(i),
        xe.forEach(i),
        (k = S(me)),
        (T = f(me, "DIV", { class: !0 }));
      var $e = d(T);
      M = f($e, "H4", { class: !0 });
      var Re = d(M);
      (G = p(Re, "Add Event")),
        Re.forEach(i),
        (L = S($e)),
        (O = f($e, "DIV", { class: !0 }));
      var Ae = d(O);
      q = f(Ae, "DIV", { class: !0 });
      var et = d(q);
      E = f(et, "SELECT", { id: !0, class: !0 });
      var De = d(E);
      y = f(De, "OPTION", {});
      var vt = d(y);
      (D = p(vt, "Select event type")),
        vt.forEach(i),
        (I = f(De, "OPTION", {}));
      var qe = d(I);
      (K = p(qe, "Appearance")), qe.forEach(i), (C = f(De, "OPTION", {}));
      var ht = d(C);
      (A = p(ht, "Goal Scored")), ht.forEach(i), (P = f(De, "OPTION", {}));
      var tt = d(P);
      (W = p(tt, "Goal Assisted")), tt.forEach(i), (Y = f(De, "OPTION", {}));
      var it = d(Y);
      (J = p(it, "Penalty Missed")), it.forEach(i), (N = f(De, "OPTION", {}));
      var _t = d(N);
      (B = p(_t, "Yellow Card")), _t.forEach(i), (R = f(De, "OPTION", {}));
      var He = d(R);
      (j = p(He, "Card")), He.forEach(i), (Z = f(De, "OPTION", {}));
      var mt = d(Z);
      (ce = p(mt, "Own Goal")),
        mt.forEach(i),
        ne && ne.l(De),
        De.forEach(i),
        et.forEach(i),
        (fe = S(Ae)),
        (le = f(Ae, "DIV", { class: !0 }));
      var je = d(le);
      ue = f(je, "LABEL", { for: !0, class: !0 });
      var ot = d(ue);
      (Ee = p(ot, "Start Minute")),
        ot.forEach(i),
        (pe = S(je)),
        (U = f(je, "INPUT", {
          type: !0,
          id: !0,
          class: !0,
          placeholder: !0,
          min: !0,
          max: !0,
        })),
        je.forEach(i),
        (F = S(Ae)),
        (se = f(Ae, "DIV", { class: !0 }));
      var lt = d(se);
      re = f(lt, "LABEL", { for: !0, class: !0 });
      var Ye = d(re);
      (we = p(Ye, "End Minute")),
        Ye.forEach(i),
        (de = S(lt)),
        (ee = f(lt, "INPUT", {
          type: !0,
          id: !0,
          class: !0,
          placeholder: !0,
          min: !0,
          max: !0,
        })),
        lt.forEach(i),
        (Ie = S(Ae)),
        (Ve = f(Ae, "DIV", { class: !0 }));
      var pt = d(Ve);
      be = f(pt, "BUTTON", { class: !0 });
      var st = d(be);
      (Se = p(st, "Add Event")),
        st.forEach(i),
        pt.forEach(i),
        Ae.forEach(i),
        $e.forEach(i),
        (ze = S(me)),
        (Oe = f(me, "DIV", { class: !0 }));
      var rt = d(Oe);
      w = f(rt, "H4", { class: !0 });
      var bt = d(w);
      (H = p(bt, "Events:")),
        bt.forEach(i),
        rt.forEach(i),
        (ve = S(me)),
        (ae = f(me, "DIV", { class: !0 }));
      var We = d(ae);
      Ce = f(We, "UL", { class: !0 });
      var yt = d(Ce);
      for (let ut = 0; ut < ie.length; ut += 1) ie[ut].l(yt);
      yt.forEach(i),
        We.forEach(i),
        (nt = S(me)),
        (Te = f(me, "DIV", { class: !0 }));
      var at = d(Te);
      Be = f(at, "BUTTON", { class: !0 });
      var ft = d(Be);
      (Qe = p(ft, "Done")),
        ft.forEach(i),
        at.forEach(i),
        me.forEach(i),
        x.forEach(i),
        he.forEach(i),
        this.h();
    },
    h() {
      o(_, "class", "text-lg font-bold"),
        o(n, "class", "flex justify-between items-center"),
        o(M, "class", "font-bold"),
        (y.__value = -1),
        (y.value = y.__value),
        (y.disabled = !0),
        (I.__value = 0),
        (I.value = I.__value),
        (C.__value = 1),
        (C.value = C.__value),
        (P.__value = 2),
        (P.value = P.__value),
        (Y.__value = 7),
        (Y.value = Y.__value),
        (N.__value = 8),
        (N.value = N.__value),
        (R.__value = 9),
        (R.value = R.__value),
        (Z.__value = 10),
        (Z.value = Z.__value),
        o(E, "id", "eventType"),
        o(E, "class", "w-full p-2 fpl-dropdown"),
        a[4] === void 0 && ds(() => a[15].call(E)),
        o(q, "class", "mt-1"),
        o(ue, "for", "startMinute"),
        o(ue, "class", "block text-sm font-medium"),
        o(U, "type", "number"),
        o(U, "id", "startMinute"),
        o(
          U,
          "class",
          "bg-gray-900 w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ),
        o(U, "placeholder", "Enter start minute"),
        o(U, "min", "0"),
        o(U, "max", "90"),
        o(le, "class", "mt-1"),
        o(re, "for", "endMinute"),
        o(re, "class", "block text-sm font-medium"),
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
        o(se, "class", "mt-2"),
        o(
          be,
          "class",
          (Me = `${
            a[7] ? "bg-gray-500" : "fpl-purple-btn"
          } px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`)
        ),
        (be.disabled = a[7]),
        o(Ve, "class", "items-center mt-3 flex space-x-4"),
        o(O, "class", "flex flex-col gap-1"),
        o(T, "class", "mt-4 p-4 border-t border-gray-200"),
        o(w, "class", "text-sm"),
        o(Oe, "class", "px-4"),
        o(Ce, "class", "list-disc"),
        o(ae, "class", "mt-1 text-xs mx-4"),
        o(
          Be,
          "class",
          "fpl-button mx-4 px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        o(Te, "class", "items-center mt-3 flex space-x-4"),
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
    m(oe, he) {
      z(oe, e, he),
        s(e, t),
        s(t, l),
        s(l, n),
        s(n, _),
        s(_, c),
        s(_, h),
        s(_, b),
        s(_, v),
        s(l, k),
        s(l, T),
        s(T, M),
        s(M, G),
        s(T, L),
        s(T, O),
        s(O, q),
        s(q, E),
        s(E, y),
        s(y, D),
        s(E, I),
        s(I, K),
        s(E, C),
        s(C, A),
        s(E, P),
        s(P, W),
        s(E, Y),
        s(Y, J),
        s(E, N),
        s(N, B),
        s(E, R),
        s(R, j),
        s(E, Z),
        s(Z, ce),
        ne && ne.m(E, null),
        El(E, a[4], !0),
        s(O, fe),
        s(O, le),
        s(le, ue),
        s(ue, Ee),
        s(le, pe),
        s(le, U),
        At(U, a[5]),
        s(O, F),
        s(O, se),
        s(se, re),
        s(re, we),
        s(se, de),
        s(se, ee),
        At(ee, a[6]),
        s(O, Ie),
        s(O, Ve),
        s(Ve, be),
        s(be, Se),
        s(l, ze),
        s(l, Oe),
        s(Oe, w),
        s(w, H),
        s(l, ve),
        s(l, ae),
        s(ae, Ce);
      for (let x = 0; x < ie.length; x += 1) ie[x] && ie[x].m(Ce, null);
      s(l, nt),
        s(l, Te),
        s(Te, Be),
        s(Be, Qe),
        Ze ||
          ((dt = [
            X(E, "change", a[15]),
            X(U, "input", a[16]),
            X(ee, "input", a[17]),
            X(be, "click", a[9]),
            X(Be, "click", function () {
              Xe(a[3]) && a[3].apply(this, arguments);
            }),
            X(t, "click", el(a[14])),
            X(t, "keydown", a[11]),
            X(e, "click", function () {
              Xe(a[3]) && a[3].apply(this, arguments);
            }),
            X(e, "keydown", a[11]),
          ]),
          (Ze = !0));
    },
    p(oe, he) {
      if (
        ((a = oe),
        he & 2 &&
          u !==
            (u = a[1].firstName !== "" ? a[1].firstName.charAt(0) + "." : "") &&
          $(c, u),
        he & 2 && g !== (g = a[1].lastName + "") && $(b, g),
        a[1].position === 0
          ? ne || ((ne = Tl()), ne.c(), ne.m(E, null))
          : ne && (ne.d(1), (ne = null)),
        he & 16 && El(E, a[4]),
        he & 32 && Ft(U.value) !== a[5] && At(U, a[5]),
        he & 64 && Ft(ee.value) !== a[6] && At(ee, a[6]),
        he & 128 &&
          Me !==
            (Me = `${
              a[7] ? "bg-gray-500" : "fpl-purple-btn"
            } px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`) &&
          o(be, "class", Me),
        he & 128 && (be.disabled = a[7]),
        he & 5378)
      ) {
        Ge = a[8].filter(a[18]);
        let x;
        for (x = 0; x < Ge.length; x += 1) {
          const me = Dl(a, Ge, x);
          ie[x]
            ? ie[x].p(me, he)
            : ((ie[x] = Nl(me)), ie[x].c(), ie[x].m(Ce, null));
        }
        for (; x < ie.length; x += 1) ie[x].d(1);
        ie.length = Ge.length;
      }
    },
    d(oe) {
      oe && i(e), ne && ne.d(), fs(ie, oe), (Ze = !1), Mt(dt);
    },
  };
}
function Tl(a) {
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
      var u = d(e);
      (t = p(u, "Keeper Save")), u.forEach(i), (l = f(_, "OPTION", {}));
      var c = d(l);
      (n = p(c, "Penalty Save")), c.forEach(i), this.h();
    },
    h() {
      (e.__value = 4),
        (e.value = e.__value),
        (l.__value = 6),
        (l.value = l.__value);
    },
    m(_, u) {
      z(_, e, u), s(e, t), z(_, l, u), s(l, n);
    },
    d(_) {
      _ && i(e), _ && i(l);
    },
  };
}
function Nl(a) {
  let e,
    t,
    l = a[12](a[21].eventType) + "",
    n,
    _,
    u = a[21].eventStartMinute + "",
    c,
    h,
    g = a[21].eventEndMinute + "",
    b,
    v,
    k,
    T,
    M,
    G,
    L,
    O;
  function q() {
    return a[19](a[23]);
  }
  return {
    c() {
      (e = r("li")),
        (t = r("span")),
        (n = m(l)),
        (_ = m(" (")),
        (c = m(u)),
        (h = m(`
                  - `)),
        (b = m(g)),
        (v = m(") mins")),
        (k = V()),
        (T = r("button")),
        (M = m("Remove")),
        (G = V()),
        this.h();
    },
    l(E) {
      e = f(E, "LI", { class: !0 });
      var y = d(e);
      t = f(y, "SPAN", {});
      var D = d(t);
      (n = p(D, l)),
        (_ = p(D, " (")),
        (c = p(D, u)),
        (h = p(
          D,
          `
                  - `
        )),
        (b = p(D, g)),
        (v = p(D, ") mins")),
        D.forEach(i),
        (k = S(y)),
        (T = f(y, "BUTTON", { class: !0 }));
      var I = d(T);
      (M = p(I, "Remove")), I.forEach(i), (G = S(y)), y.forEach(i), this.h();
    },
    h() {
      o(T, "class", "px-3 py-1 bg-red-500 rounded"),
        o(e, "class", "flex justify-between items-center mb-2");
    },
    m(E, y) {
      z(E, e, y),
        s(e, t),
        s(t, n),
        s(t, _),
        s(t, c),
        s(t, h),
        s(t, b),
        s(t, v),
        s(e, k),
        s(e, T),
        s(T, M),
        s(e, G),
        L || ((O = X(T, "click", q)), (L = !0));
    },
    p(E, y) {
      (a = E),
        y & 258 && l !== (l = a[12](a[21].eventType) + "") && $(n, l),
        y & 258 && u !== (u = a[21].eventStartMinute + "") && $(c, u),
        y & 258 && g !== (g = a[21].eventEndMinute + "") && $(b, g);
    },
    d(E) {
      E && i(e), (L = !1), O();
    },
  };
}
function ks(a) {
  let e,
    t = a[0] && kl(a);
  return {
    c() {
      t && t.c(), (e = Pe());
    },
    l(l) {
      t && t.l(l), (e = Pe());
    },
    m(l, n) {
      t && t.m(l, n), z(l, e, n);
    },
    p(l, [n]) {
      l[0]
        ? t
          ? t.p(l, n)
          : ((t = kl(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: ke,
    o: ke,
    d(l) {
      t && t.d(l), l && i(e);
    },
  };
}
function Ts(a, e, t) {
  let l,
    n = ke,
    _ = () => (n(), (n = Lt(g, (P) => t(8, (l = P)))), g);
  a.$$.on_destroy.push(() => n());
  let { show: u = !1 } = e,
    { player: c } = e,
    { fixtureId: h } = e,
    { playerEventData: g } = e;
  _();
  let { closeModal: b } = e,
    v = -1,
    k = 0,
    T = 0,
    M = !0;
  const G = [
    { id: 0, label: "Appearance" },
    { id: 1, label: "Goal Scored" },
    { id: 2, label: "Goal Assisted" },
    { id: 6, label: "Penalty Saved" },
    { id: 7, label: "Penalty Missed" },
    { id: 8, label: "Yellow Card" },
    { id: 9, label: "Red Card" },
    { id: 10, label: "Own Goal" },
  ];
  function L() {
    if (v >= 0 && k !== null && T !== null) {
      const P = {
        playerId: c.id,
        eventType: Number(v),
        eventStartMinute: Number(k),
        eventEndMinute: Number(T),
        fixtureId: h,
        teamId: c.teamId,
      };
      let W = [...l, P];
      g.set(W), t(5, (k = 0)), t(6, (T = 0)), t(4, (v = -1));
    }
  }
  function O(P) {
    g.update((W) =>
      W.filter((Y) => Y.playerId == c.id).filter((Y, J) => J !== P)
    );
  }
  function q(P) {
    !(P.target instanceof HTMLInputElement) && P.key === "Escape" && b();
  }
  const E = (P) => {
    const W = G.find((Y) => Y.id === P);
    return W ? W.label : "";
  };
  function y(P) {
    tl.call(this, a, P);
  }
  function D() {
    (v = vs(this)), t(4, v);
  }
  function I() {
    (k = Ft(this.value)), t(5, k);
  }
  function K() {
    (T = Ft(this.value)), t(6, T);
  }
  const C = (P) => P.playerId == c.id,
    A = (P) => O(P);
  return (
    (a.$$set = (P) => {
      "show" in P && t(0, (u = P.show)),
        "player" in P && t(1, (c = P.player)),
        "fixtureId" in P && t(13, (h = P.fixtureId)),
        "playerEventData" in P && _(t(2, (g = P.playerEventData))),
        "closeModal" in P && t(3, (b = P.closeModal));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 112 &&
        t(7, (M = v < 0 || k < 0 || k > 90 || T < 0 || T > 90));
    }),
    [u, c, g, b, v, k, T, M, l, L, O, q, E, h, y, D, I, K, C, A]
  );
}
class Ns extends Pt {
  constructor(e) {
    super(),
      Vt(this, e, Ts, ks, St, {
        show: 0,
        player: 1,
        fixtureId: 13,
        playerEventData: 2,
        closeModal: 3,
      });
  }
}
function Pl(a, e, t) {
  const l = a.slice();
  l[12] = e[t];
  const n = l[5].some(function (...u) {
    return a[11](l[12], ...u);
  });
  return (l[13] = n), l;
}
function Vl(a) {
  let e,
    t,
    l,
    n,
    _,
    u = a[1].friendlyName + "",
    c,
    h,
    g,
    b,
    v,
    k,
    T,
    M,
    G,
    L,
    O,
    q,
    E,
    y = a[6].sort(Fl),
    D = [];
  for (let I = 0; I < y.length; I += 1) D[I] = Al(Pl(a, y, I));
  return {
    c() {
      (e = r("div")),
        (t = r("div")),
        (l = r("div")),
        (n = r("h3")),
        (_ = m("Select ")),
        (c = m(u)),
        (h = m(" Players")),
        (g = V()),
        (b = r("div"));
      for (let I = 0; I < D.length; I += 1) D[I].c();
      (v = V()),
        (k = r("div")),
        (T = r("button")),
        (M = m("Cancel")),
        (G = V()),
        (L = r("button")),
        (O = m("Select")),
        this.h();
    },
    l(I) {
      e = f(I, "DIV", { class: !0 });
      var K = d(e);
      t = f(K, "DIV", { class: !0 });
      var C = d(t);
      l = f(C, "DIV", { class: !0 });
      var A = d(l);
      n = f(A, "H3", { class: !0 });
      var P = d(n);
      (_ = p(P, "Select ")),
        (c = p(P, u)),
        (h = p(P, " Players")),
        P.forEach(i),
        (g = S(A)),
        (b = f(A, "DIV", { class: !0 }));
      var W = d(b);
      for (let B = 0; B < D.length; B += 1) D[B].l(W);
      W.forEach(i), (v = S(A)), (k = f(A, "DIV", { class: !0 }));
      var Y = d(k);
      T = f(Y, "BUTTON", { class: !0 });
      var J = d(T);
      (M = p(J, "Cancel")),
        J.forEach(i),
        (G = S(Y)),
        (L = f(Y, "BUTTON", { class: !0 }));
      var N = d(L);
      (O = p(N, "Select")),
        N.forEach(i),
        Y.forEach(i),
        A.forEach(i),
        C.forEach(i),
        K.forEach(i),
        this.h();
    },
    h() {
      o(n, "class", "text-lg leading-6 font-medium mb-2"),
        o(b, "class", "my-5 grid grid-cols-1 sm:grid-cols-2 gap-2"),
        o(
          T,
          "class",
          "px-4 py-2 fpl-cancel-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        o(
          L,
          "class",
          "px-4 py-2 fpl-purple-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        o(k, "class", "items-center py-3 flex space-x-4"),
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
    m(I, K) {
      z(I, e, K),
        s(e, t),
        s(t, l),
        s(l, n),
        s(n, _),
        s(n, c),
        s(n, h),
        s(l, g),
        s(l, b);
      for (let C = 0; C < D.length; C += 1) D[C] && D[C].m(b, null);
      s(l, v),
        s(l, k),
        s(k, T),
        s(T, M),
        s(k, G),
        s(k, L),
        s(L, O),
        q ||
          ((E = [
            X(T, "click", function () {
              Xe(a[4]) && a[4].apply(this, arguments);
            }),
            X(L, "click", function () {
              Xe(a[4]) && a[4].apply(this, arguments);
            }),
            X(t, "click", el(a[9])),
            X(t, "keydown", a[8]),
            X(e, "click", function () {
              Xe(a[4]) && a[4].apply(this, arguments);
            }),
            X(e, "keydown", function () {
              Xe(a[4]) && a[4].apply(this, arguments);
            }),
          ]),
          (q = !0));
    },
    p(I, K) {
      if (
        ((a = I),
        K & 2 && u !== (u = a[1].friendlyName + "") && $(c, u),
        K & 224)
      ) {
        y = a[6].sort(Fl);
        let C;
        for (C = 0; C < y.length; C += 1) {
          const A = Pl(a, y, C);
          D[C] ? D[C].p(A, K) : ((D[C] = Al(A)), D[C].c(), D[C].m(b, null));
        }
        for (; C < D.length; C += 1) D[C].d(1);
        D.length = y.length;
      }
    },
    d(I) {
      I && i(e), fs(D, I), (q = !1), Mt(E);
    },
  };
}
function Sl(a) {
  let e;
  return {
    c() {
      e = m("GK");
    },
    l(t) {
      e = p(t, "GK");
    },
    m(t, l) {
      z(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function Ml(a) {
  let e;
  return {
    c() {
      e = m("DF");
    },
    l(t) {
      e = p(t, "DF");
    },
    m(t, l) {
      z(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function Ol(a) {
  let e;
  return {
    c() {
      e = m("MF");
    },
    l(t) {
      e = p(t, "MF");
    },
    m(t, l) {
      z(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function Cl(a) {
  let e;
  return {
    c() {
      e = m("FW");
    },
    l(t) {
      e = p(t, "FW");
    },
    m(t, l) {
      z(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function Al(a) {
  let e,
    t,
    l,
    n = `${a[12].firstName.length > 0 ? a[12].firstName.charAt(0) + "." : ""} ${
      a[12].lastName
    }`,
    _,
    u,
    c,
    h,
    g,
    b,
    v,
    k,
    T,
    M,
    G,
    L,
    O,
    q,
    E,
    y = a[12].position == 0 && Sl(),
    D = a[12].position == 1 && Ml(),
    I = a[12].position == 2 && Ol(),
    K = a[12].position == 3 && Cl();
  function C(...A) {
    return a[10](a[12], ...A);
  }
  return {
    c() {
      (e = r("div")),
        (t = r("div")),
        (l = r("span")),
        (_ = m(n)),
        (u = V()),
        (c = r("div")),
        (h = r("span")),
        y && y.c(),
        (g = V()),
        D && D.c(),
        (b = V()),
        I && I.c(),
        (v = V()),
        K && K.c(),
        (k = V()),
        (T = r("div")),
        (M = r("label")),
        (G = r("input")),
        (O = V()),
        this.h();
    },
    l(A) {
      e = f(A, "DIV", { class: !0 });
      var P = d(e);
      t = f(P, "DIV", { class: !0 });
      var W = d(t);
      l = f(W, "SPAN", { class: !0 });
      var Y = d(l);
      (_ = p(Y, n)),
        Y.forEach(i),
        W.forEach(i),
        (u = S(P)),
        (c = f(P, "DIV", { class: !0 }));
      var J = d(c);
      h = f(J, "SPAN", { class: !0 });
      var N = d(h);
      y && y.l(N),
        (g = S(N)),
        D && D.l(N),
        (b = S(N)),
        I && I.l(N),
        (v = S(N)),
        K && K.l(N),
        N.forEach(i),
        J.forEach(i),
        (k = S(P)),
        (T = f(P, "DIV", { class: !0 }));
      var B = d(T);
      M = f(B, "LABEL", { class: !0 });
      var R = d(M);
      (G = f(R, "INPUT", { type: !0, class: !0 })),
        R.forEach(i),
        B.forEach(i),
        (O = S(P)),
        P.forEach(i),
        this.h();
    },
    h() {
      o(l, "class", "text-lg font-medium"),
        o(t, "class", "flex w-1/2"),
        o(h, "class", "text-lg font-medium"),
        o(c, "class", "flex w-1/4"),
        o(G, "type", "checkbox"),
        o(G, "class", "form-checkbox h-5 w-5 text-blue-600"),
        (G.checked = L = a[13]),
        o(M, "class", "inline-flex items-center"),
        o(T, "class", "form-checkbox w-1/4"),
        o(
          e,
          "class",
          "flex flex-row justify-between items-center mx-4 border-b"
        );
    },
    m(A, P) {
      z(A, e, P),
        s(e, t),
        s(t, l),
        s(l, _),
        s(e, u),
        s(e, c),
        s(c, h),
        y && y.m(h, null),
        s(h, g),
        D && D.m(h, null),
        s(h, b),
        I && I.m(h, null),
        s(h, v),
        K && K.m(h, null),
        s(e, k),
        s(e, T),
        s(T, M),
        s(M, G),
        s(e, O),
        q || ((E = X(G, "change", C)), (q = !0));
    },
    p(A, P) {
      (a = A),
        P & 64 &&
          n !==
            (n = `${
              a[12].firstName.length > 0 ? a[12].firstName.charAt(0) + "." : ""
            } ${a[12].lastName}`) &&
          $(_, n),
        a[12].position == 0
          ? y || ((y = Sl()), y.c(), y.m(h, g))
          : y && (y.d(1), (y = null)),
        a[12].position == 1
          ? D || ((D = Ml()), D.c(), D.m(h, b))
          : D && (D.d(1), (D = null)),
        a[12].position == 2
          ? I || ((I = Ol()), I.c(), I.m(h, v))
          : I && (I.d(1), (I = null)),
        a[12].position == 3
          ? K || ((K = Cl()), K.c(), K.m(h, null))
          : K && (K.d(1), (K = null)),
        P & 96 && L !== (L = a[13]) && (G.checked = L);
    },
    d(A) {
      A && i(e), y && y.d(), D && D.d(), I && I.d(), K && K.d(), (q = !1), E();
    },
  };
}
function Ps(a) {
  let e,
    t = a[3] && Vl(a);
  return {
    c() {
      t && t.c(), (e = Pe());
    },
    l(l) {
      t && t.l(l), (e = Pe());
    },
    m(l, n) {
      t && t.m(l, n), z(l, e, n);
    },
    p(l, [n]) {
      l[3]
        ? t
          ? t.p(l, n)
          : ((t = Vl(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: ke,
    o: ke,
    d(l) {
      t && t.d(l), l && i(e);
    },
  };
}
const Fl = (a, e) => a.position - e.position;
function Vs(a, e, t) {
  let l,
    n = ke,
    _ = () => (n(), (n = Lt(v, (E) => t(5, (l = E)))), v),
    u,
    c = ke,
    h = () => (c(), (c = Lt(g, (E) => t(6, (u = E)))), g);
  a.$$.on_destroy.push(() => n()), a.$$.on_destroy.push(() => c());
  let { teamPlayers: g = ct([]) } = e;
  h();
  let { selectedTeam: b } = e,
    { selectedPlayers: v = ct([]) } = e;
  _();
  let { show: k = !1 } = e;
  function T(E, y) {
    const D = E.target;
    let I = l,
      K = u;
    if (D.checked) {
      const C = K.find((A) => A.id === y.id);
      C && !I.some((A) => A.id === y.id) && (I = [...I, C]);
    } else I = I.filter((C) => C.id !== y.id);
    Zt(v, (l = I), l);
  }
  let { closeModal: M } = e;
  function G(E) {
    !(E.target instanceof HTMLInputElement) && E.key === "Escape" && M();
  }
  function L(E) {
    tl.call(this, a, E);
  }
  const O = (E, y) => {
      T(y, E);
    },
    q = (E, y) => y.id === E.id;
  return (
    (a.$$set = (E) => {
      "teamPlayers" in E && h(t(0, (g = E.teamPlayers))),
        "selectedTeam" in E && t(1, (b = E.selectedTeam)),
        "selectedPlayers" in E && _(t(2, (v = E.selectedPlayers))),
        "show" in E && t(3, (k = E.show)),
        "closeModal" in E && t(4, (M = E.closeModal));
    }),
    [g, b, v, k, M, l, u, T, G, L, O, q]
  );
}
class Ss extends Pt {
  constructor(e) {
    super(),
      Vt(this, e, Vs, Ps, St, {
        teamPlayers: 0,
        selectedTeam: 1,
        selectedPlayers: 2,
        show: 3,
        closeModal: 4,
      });
  }
}
function Ll(a) {
  let e, t, l, n, _, u, c, h, g, b, v, k, T, M, G, L, O, q, E, y, D, I, K, C;
  return {
    c() {
      (e = r("div")),
        (t = r("div")),
        (l = r("div")),
        (n = r("h4")),
        (_ = m("Confirm Fixture Data")),
        (u = V()),
        (c = r("button")),
        (h = m("✕")),
        (g = V()),
        (b = r("div")),
        (v = r("h1")),
        (k = m("Please confirm your fixture data.")),
        (T = V()),
        (M = r("p")),
        (G =
          m(`You will not be able to edit your submission and entries that differ
          from the accepted consensus data will not receive $FPL rewards. If
          consensus has already been reached for the fixture your submission
          will also not be counted.`)),
        (L = V()),
        (O = r("div")),
        (q = r("button")),
        (E = m("Cancel")),
        (y = V()),
        (D = r("button")),
        (I = m("Confirm")),
        this.h();
    },
    l(A) {
      e = f(A, "DIV", { class: !0 });
      var P = d(e);
      t = f(P, "DIV", { class: !0 });
      var W = d(t);
      l = f(W, "DIV", { class: !0 });
      var Y = d(l);
      n = f(Y, "H4", { class: !0 });
      var J = d(n);
      (_ = p(J, "Confirm Fixture Data")),
        J.forEach(i),
        (u = S(Y)),
        (c = f(Y, "BUTTON", { class: !0 }));
      var N = d(c);
      (h = p(N, "✕")),
        N.forEach(i),
        Y.forEach(i),
        (g = S(W)),
        (b = f(W, "DIV", { class: !0 }));
      var B = d(b);
      v = f(B, "H1", {});
      var R = d(v);
      (k = p(R, "Please confirm your fixture data.")),
        R.forEach(i),
        (T = S(B)),
        (M = f(B, "P", { class: !0 }));
      var j = d(M);
      (G = p(
        j,
        `You will not be able to edit your submission and entries that differ
          from the accepted consensus data will not receive $FPL rewards. If
          consensus has already been reached for the fixture your submission
          will also not be counted.`
      )),
        j.forEach(i),
        B.forEach(i),
        (L = S(W)),
        (O = f(W, "DIV", { class: !0 }));
      var Z = d(O);
      q = f(Z, "BUTTON", { class: !0 });
      var ce = d(q);
      (E = p(ce, "Cancel")),
        ce.forEach(i),
        (y = S(Z)),
        (D = f(Z, "BUTTON", { class: !0 }));
      var fe = d(D);
      (I = p(fe, "Confirm")),
        fe.forEach(i),
        Z.forEach(i),
        W.forEach(i),
        P.forEach(i),
        this.h();
    },
    h() {
      o(n, "class", "text-lg font-bold"),
        o(c, "class", "text-black"),
        o(l, "class", "flex justify-between items-center"),
        o(M, "class", "text-sm text-gray-600"),
        o(b, "class", "my-5"),
        o(q, "class", "px-4 py-2 border rounded text-black"),
        o(D, "class", "px-4 py-2 bg-blue-500 text-white rounded"),
        o(O, "class", "flex justify-end gap-3"),
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
    m(A, P) {
      z(A, e, P),
        s(e, t),
        s(t, l),
        s(l, n),
        s(n, _),
        s(l, u),
        s(l, c),
        s(c, h),
        s(t, g),
        s(t, b),
        s(b, v),
        s(v, k),
        s(b, T),
        s(b, M),
        s(M, G),
        s(t, L),
        s(t, O),
        s(O, q),
        s(q, E),
        s(O, y),
        s(O, D),
        s(D, I),
        K ||
          ((C = [
            X(c, "click", a[2]),
            X(q, "click", a[2]),
            X(D, "click", function () {
              Xe(a[1]) && a[1].apply(this, arguments);
            }),
          ]),
          (K = !0));
    },
    p(A, P) {
      a = A;
    },
    d(A) {
      A && i(e), (K = !1), Mt(C);
    },
  };
}
function Ms(a) {
  let e,
    t = a[0] && Ll(a);
  return {
    c() {
      t && t.c(), (e = Pe());
    },
    l(l) {
      t && t.l(l), (e = Pe());
    },
    m(l, n) {
      t && t.m(l, n), z(l, e, n);
    },
    p(l, [n]) {
      l[0]
        ? t
          ? t.p(l, n)
          : ((t = Ll(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: ke,
    o: ke,
    d(l) {
      t && t.d(l), l && i(e);
    },
  };
}
function Os(a, e, t) {
  let { show: l = !1 } = e,
    { onConfirm: n } = e;
  function _() {
    t(0, (l = !1));
  }
  return (
    (a.$$set = (u) => {
      "show" in u && t(0, (l = u.show)),
        "onConfirm" in u && t(1, (n = u.onConfirm));
    }),
    [l, n, _]
  );
}
class Cs extends Pt {
  constructor(e) {
    super(), Vt(this, e, Os, Ms, St, { show: 0, onConfirm: 1 });
  }
}
function Ul(a) {
  let e, t, l, n, _, u, c, h, g, b, v, k, T, M;
  return {
    c() {
      (e = r("div")),
        (t = r("div")),
        (l = r("div")),
        (n = r("h3")),
        (_ = m("Please confirm you want to clear the draft from your cache.")),
        (u = V()),
        (c = r("div")),
        (h = r("button")),
        (g = m("Cancel")),
        (b = V()),
        (v = r("button")),
        (k = m("Clear")),
        this.h();
    },
    l(G) {
      e = f(G, "DIV", { class: !0 });
      var L = d(e);
      t = f(L, "DIV", { class: !0 });
      var O = d(t);
      l = f(O, "DIV", { class: !0 });
      var q = d(l);
      n = f(q, "H3", { class: !0 });
      var E = d(n);
      (_ = p(E, "Please confirm you want to clear the draft from your cache.")),
        E.forEach(i),
        q.forEach(i),
        (u = S(O)),
        (c = f(O, "DIV", { class: !0 }));
      var y = d(c);
      h = f(y, "BUTTON", { class: !0 });
      var D = d(h);
      (g = p(D, "Cancel")),
        D.forEach(i),
        (b = S(y)),
        (v = f(y, "BUTTON", { class: !0 }));
      var I = d(v);
      (k = p(I, "Clear")),
        I.forEach(i),
        y.forEach(i),
        O.forEach(i),
        L.forEach(i),
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
          v,
          "class",
          "px-4 py-2 fpl-purple-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        o(c, "class", "items-center py-3 flex space-x-4"),
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
    m(G, L) {
      z(G, e, L),
        s(e, t),
        s(t, l),
        s(l, n),
        s(n, _),
        s(t, u),
        s(t, c),
        s(c, h),
        s(h, g),
        s(c, b),
        s(c, v),
        s(v, k),
        T ||
          ((M = [
            X(h, "click", function () {
              Xe(a[2]) && a[2].apply(this, arguments);
            }),
            X(v, "click", function () {
              Xe(a[1]) && a[1].apply(this, arguments);
            }),
            X(t, "click", el(a[4])),
            X(t, "keydown", a[3]),
            X(e, "click", function () {
              Xe(a[2]) && a[2].apply(this, arguments);
            }),
            X(e, "keydown", a[3]),
          ]),
          (T = !0));
    },
    p(G, L) {
      a = G;
    },
    d(G) {
      G && i(e), (T = !1), Mt(M);
    },
  };
}
function As(a) {
  let e,
    t = a[0] && Ul(a);
  return {
    c() {
      t && t.c(), (e = Pe());
    },
    l(l) {
      t && t.l(l), (e = Pe());
    },
    m(l, n) {
      t && t.m(l, n), z(l, e, n);
    },
    p(l, [n]) {
      l[0]
        ? t
          ? t.p(l, n)
          : ((t = Ul(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: ke,
    o: ke,
    d(l) {
      t && t.d(l), l && i(e);
    },
  };
}
function Fs(a, e, t) {
  let { show: l = !1 } = e,
    { onConfirm: n } = e,
    { closeModal: _ } = e;
  function u(h) {
    !(h.target instanceof HTMLInputElement) && h.key === "Escape" && _();
  }
  function c(h) {
    tl.call(this, a, h);
  }
  return (
    (a.$$set = (h) => {
      "show" in h && t(0, (l = h.show)),
        "onConfirm" in h && t(1, (n = h.onConfirm)),
        "closeModal" in h && t(2, (_ = h.closeModal));
    }),
    [l, n, _, u, c]
  );
}
class Ls extends Pt {
  constructor(e) {
    super(), Vt(this, e, Fs, As, St, { show: 0, onConfirm: 1, closeModal: 2 });
  }
}
function Bl(a, e, t) {
  const l = a.slice();
  return (l[50] = e[t]), l;
}
function Gl(a, e, t) {
  const l = a.slice();
  return (l[50] = e[t]), l;
}
function Us(a) {
  let e,
    t,
    l,
    n,
    _,
    u,
    c,
    h,
    g,
    b,
    v,
    k,
    T,
    M,
    G,
    L,
    O = a[3]?.friendlyName + "",
    q,
    E,
    y,
    D,
    I,
    K,
    C = a[4]?.friendlyName + "",
    A,
    P,
    W,
    Y,
    J,
    N,
    B,
    R,
    j,
    Z,
    ce,
    fe,
    le,
    ue,
    Ee,
    pe,
    U,
    F,
    se,
    re,
    we,
    de,
    ee,
    Ie,
    Ve,
    be,
    Se,
    Me,
    ze,
    Oe,
    w,
    H,
    ve,
    ae = a[0].filter(es).length + "",
    Ce,
    nt,
    Te,
    Be,
    Qe = a[0].filter(ts).length + "",
    Ze,
    dt,
    ne,
    Ge,
    ie = a[0].filter(ls).length + "",
    oe,
    he,
    x,
    me,
    xe = a[0].filter(ss).length + "",
    Ke,
    $e,
    Re,
    Ae,
    et = a[0].filter(as).length + "",
    De,
    vt,
    qe,
    ht,
    tt = a[0].filter(ns).length + "",
    it,
    _t,
    He,
    mt,
    je = a[0].filter(is).length + "",
    ot,
    lt,
    Ye,
    pt,
    st = a[0].filter(os).length + "",
    rt,
    bt,
    We,
    yt,
    at = a[0].filter(rs).length + "",
    ft,
    ut,
    gt,
    Je,
    Ut,
    Ot,
    Bt,
    ll,
    ye = a[11] === "home" && Kl(a),
    ge = a[11] === "away" && Wl(a);
  return {
    c() {
      (e = r("div")),
        (t = r("div")),
        (l = r("div")),
        (n = r("button")),
        (_ = m("Select Players")),
        (u = V()),
        (c = r("button")),
        (h = m("Save Draft")),
        (g = V()),
        (b = r("button")),
        (v = m("Clear Draft")),
        (k = V()),
        (T = r("div")),
        (M = r("ul")),
        (G = r("li")),
        (L = r("button")),
        (q = m(O)),
        (D = V()),
        (I = r("li")),
        (K = r("button")),
        (A = m(C)),
        (Y = V()),
        (J = r("div")),
        (N = r("div")),
        (B = r("div")),
        (R = m("Player")),
        (j = V()),
        (Z = r("div")),
        (ce = m("Position")),
        (fe = V()),
        (le = r("div")),
        (ue = m("Events")),
        (Ee = V()),
        (pe = r("div")),
        (U = m("Start")),
        (F = V()),
        (se = r("div")),
        (re = m("End")),
        (we = V()),
        (de = r("div")),
        (ee = m(" ")),
        (Ie = V()),
        ye && ye.c(),
        (Ve = V()),
        ge && ge.c(),
        (be = V()),
        (Se = r("div")),
        (Me = r("h1")),
        (ze = m("Summary")),
        (Oe = V()),
        (w = r("div")),
        (H = r("div")),
        (ve = m("Appearances: ")),
        (Ce = m(ae)),
        (nt = V()),
        (Te = r("div")),
        (Be = m("Goals: ")),
        (Ze = m(Qe)),
        (dt = V()),
        (ne = r("div")),
        (Ge = m("Own Goals: ")),
        (oe = m(ie)),
        (he = V()),
        (x = r("div")),
        (me = m("Assists: ")),
        (Ke = m(xe)),
        ($e = V()),
        (Re = r("div")),
        (Ae = m("Keeper Saves: ")),
        (De = m(et)),
        (vt = V()),
        (qe = r("div")),
        (ht = m("Yellow Cards: ")),
        (it = m(tt)),
        (_t = V()),
        (He = r("div")),
        (mt = m("Red Cards: ")),
        (ot = m(je)),
        (lt = V()),
        (Ye = r("div")),
        (pt = m("Penalties Saved: ")),
        (rt = m(st)),
        (bt = V()),
        (We = r("div")),
        (yt = m("Penalties Missed: ")),
        (ft = m(at)),
        (ut = V()),
        (gt = r("div")),
        (Je = r("button")),
        (Ut = m("Submit Event Data")),
        this.h();
    },
    l(Q) {
      e = f(Q, "DIV", { class: !0 });
      var te = d(e);
      t = f(te, "DIV", { class: !0 });
      var Fe = d(t);
      l = f(Fe, "DIV", { class: !0 });
      var Et = d(l);
      n = f(Et, "BUTTON", { class: !0 });
      var sl = d(n);
      (_ = p(sl, "Select Players")),
        sl.forEach(i),
        (u = S(Et)),
        (c = f(Et, "BUTTON", { class: !0 }));
      var al = d(c);
      (h = p(al, "Save Draft")),
        al.forEach(i),
        (g = S(Et)),
        (b = f(Et, "BUTTON", { class: !0 }));
      var nl = d(b);
      (v = p(nl, "Clear Draft")),
        nl.forEach(i),
        Et.forEach(i),
        (k = S(Fe)),
        (T = f(Fe, "DIV", { class: !0 }));
      var il = d(T);
      M = f(il, "UL", { class: !0 });
      var Ct = d(M);
      G = f(Ct, "LI", { class: !0 });
      var ol = d(G);
      L = f(ol, "BUTTON", { class: !0 });
      var rl = d(L);
      (q = p(rl, O)),
        rl.forEach(i),
        ol.forEach(i),
        (D = S(Ct)),
        (I = f(Ct, "LI", { class: !0 }));
      var fl = d(I);
      K = f(fl, "BUTTON", { class: !0 });
      var ul = d(K);
      (A = p(ul, C)),
        ul.forEach(i),
        fl.forEach(i),
        Ct.forEach(i),
        il.forEach(i),
        (Y = S(Fe)),
        (J = f(Fe, "DIV", { class: !0 }));
      var wt = d(J);
      N = f(wt, "DIV", { class: !0 });
      var Le = d(N);
      B = f(Le, "DIV", { class: !0 });
      var cl = d(B);
      (R = p(cl, "Player")),
        cl.forEach(i),
        (j = S(Le)),
        (Z = f(Le, "DIV", { class: !0 }));
      var dl = d(Z);
      (ce = p(dl, "Position")),
        dl.forEach(i),
        (fe = S(Le)),
        (le = f(Le, "DIV", { class: !0 }));
      var vl = d(le);
      (ue = p(vl, "Events")),
        vl.forEach(i),
        (Ee = S(Le)),
        (pe = f(Le, "DIV", { class: !0 }));
      var hl = d(pe);
      (U = p(hl, "Start")),
        hl.forEach(i),
        (F = S(Le)),
        (se = f(Le, "DIV", { class: !0 }));
      var _l = d(se);
      (re = p(_l, "End")),
        _l.forEach(i),
        (we = S(Le)),
        (de = f(Le, "DIV", { class: !0 }));
      var ml = d(de);
      (ee = p(ml, " ")),
        ml.forEach(i),
        Le.forEach(i),
        (Ie = S(wt)),
        ye && ye.l(wt),
        (Ve = S(wt)),
        ge && ge.l(wt),
        wt.forEach(i),
        (be = S(Fe)),
        (Se = f(Fe, "DIV", { class: !0 }));
      var pl = d(Se);
      Me = f(pl, "H1", {});
      var bl = d(Me);
      (ze = p(bl, "Summary")),
        bl.forEach(i),
        pl.forEach(i),
        (Oe = S(Fe)),
        (w = f(Fe, "DIV", { class: !0 }));
      var _e = d(w);
      H = f(_e, "DIV", { class: !0 });
      var Gt = d(H);
      (ve = p(Gt, "Appearances: ")),
        (Ce = p(Gt, ae)),
        Gt.forEach(i),
        (nt = S(_e)),
        (Te = f(_e, "DIV", { class: !0 }));
      var Kt = d(Te);
      (Be = p(Kt, "Goals: ")),
        (Ze = p(Kt, Qe)),
        Kt.forEach(i),
        (dt = S(_e)),
        (ne = f(_e, "DIV", { class: !0 }));
      var Rt = d(ne);
      (Ge = p(Rt, "Own Goals: ")),
        (oe = p(Rt, ie)),
        Rt.forEach(i),
        (he = S(_e)),
        (x = f(_e, "DIV", { class: !0 }));
      var qt = d(x);
      (me = p(qt, "Assists: ")),
        (Ke = p(qt, xe)),
        qt.forEach(i),
        ($e = S(_e)),
        (Re = f(_e, "DIV", { class: !0 }));
      var Ht = d(Re);
      (Ae = p(Ht, "Keeper Saves: ")),
        (De = p(Ht, et)),
        Ht.forEach(i),
        (vt = S(_e)),
        (qe = f(_e, "DIV", { class: !0 }));
      var jt = d(qe);
      (ht = p(jt, "Yellow Cards: ")),
        (it = p(jt, tt)),
        jt.forEach(i),
        (_t = S(_e)),
        (He = f(_e, "DIV", { class: !0 }));
      var Yt = d(He);
      (mt = p(Yt, "Red Cards: ")),
        (ot = p(Yt, je)),
        Yt.forEach(i),
        (lt = S(_e)),
        (Ye = f(_e, "DIV", { class: !0 }));
      var Wt = d(Ye);
      (pt = p(Wt, "Penalties Saved: ")),
        (rt = p(Wt, st)),
        Wt.forEach(i),
        (bt = S(_e)),
        (We = f(_e, "DIV", { class: !0 }));
      var Jt = d(We);
      (yt = p(Jt, "Penalties Missed: ")),
        (ft = p(Jt, at)),
        Jt.forEach(i),
        _e.forEach(i),
        (ut = S(Fe)),
        (gt = f(Fe, "DIV", { class: !0 }));
      var yl = d(gt);
      Je = f(yl, "BUTTON", { class: !0 });
      var gl = d(Je);
      (Ut = p(gl, "Submit Event Data")),
        gl.forEach(i),
        yl.forEach(i),
        Fe.forEach(i),
        te.forEach(i),
        this.h();
    },
    h() {
      o(n, "class", "fpl-button px-4 py-2"),
        o(c, "class", "fpl-button px-4 py-2"),
        o(b, "class", "fpl-button px-4 py-2"),
        o(l, "class", "flex flex-row space-x-2 p-4"),
        o(
          L,
          "class",
          (E = `p-2 ${a[11] === "home" ? "text-white" : "text-gray-400"}`)
        ),
        o(
          G,
          "class",
          (y = `mr-4 text-xs md:text-base ${
            a[11] === "home" ? "active-tab" : ""
          }`)
        ),
        o(
          K,
          "class",
          (P = `p-2 ${a[11] === "away" ? "text-white" : "text-gray-400"}`)
        ),
        o(
          I,
          "class",
          (W = `mr-4 text-xs md:text-base ${
            a[11] === "away" ? "active-tab" : ""
          }`)
        ),
        o(M, "class", "flex bg-light-gray px-4 pt-2 w-full mt-4"),
        o(T, "class", "flex w-full"),
        o(B, "class", "w-1/6 px-4"),
        o(Z, "class", "w-1/6 px-4"),
        o(le, "class", "w-1/6 px-4"),
        o(pe, "class", "w-1/6 px-4"),
        o(se, "class", "w-1/6 px-4"),
        o(de, "class", "w-1/6 px-4"),
        o(
          N,
          "class",
          "flex items-center p-2 justify-between py-4 border-b border-gray-700 cursor-pointer w-full"
        ),
        o(J, "class", "flex w-full flex-col"),
        o(Se, "class", "flex w-full m-4"),
        o(H, "class", "text-sm font-medium flex-grow"),
        o(Te, "class", "text-sm font-medium flex-grow"),
        o(ne, "class", "text-sm font-medium flex-grow"),
        o(x, "class", "text-sm font-medium flex-grow"),
        o(Re, "class", "text-sm font-medium flex-grow"),
        o(qe, "class", "text-sm font-medium flex-grow"),
        o(He, "class", "text-sm font-medium flex-grow"),
        o(Ye, "class", "text-sm font-medium flex-grow"),
        o(We, "class", "text-sm font-medium flex-grow"),
        o(w, "class", "flex flex-row w-full m-4"),
        o(
          Je,
          "class",
          (Ot = `${a[12] ? "bg-gray-500" : "fpl-purple-btn"} 
            px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`)
        ),
        (Je.disabled = a[12]),
        o(gt, "class", "items-center mt-3 flex space-x-4"),
        o(t, "class", "flex flex-col text-xs md:text-base mt-4"),
        o(e, "class", "container-fluid mx-4 md:mx-16 mt-4 bg-panel");
    },
    m(Q, te) {
      z(Q, e, te),
        s(e, t),
        s(t, l),
        s(l, n),
        s(n, _),
        s(l, u),
        s(l, c),
        s(c, h),
        s(l, g),
        s(l, b),
        s(b, v),
        s(t, k),
        s(t, T),
        s(T, M),
        s(M, G),
        s(G, L),
        s(L, q),
        s(M, D),
        s(M, I),
        s(I, K),
        s(K, A),
        s(t, Y),
        s(t, J),
        s(J, N),
        s(N, B),
        s(B, R),
        s(N, j),
        s(N, Z),
        s(Z, ce),
        s(N, fe),
        s(N, le),
        s(le, ue),
        s(N, Ee),
        s(N, pe),
        s(pe, U),
        s(N, F),
        s(N, se),
        s(se, re),
        s(N, we),
        s(N, de),
        s(de, ee),
        s(J, Ie),
        ye && ye.m(J, null),
        s(J, Ve),
        ge && ge.m(J, null),
        s(t, be),
        s(t, Se),
        s(Se, Me),
        s(Me, ze),
        s(t, Oe),
        s(t, w),
        s(w, H),
        s(H, ve),
        s(H, Ce),
        s(w, nt),
        s(w, Te),
        s(Te, Be),
        s(Te, Ze),
        s(w, dt),
        s(w, ne),
        s(ne, Ge),
        s(ne, oe),
        s(w, he),
        s(w, x),
        s(x, me),
        s(x, Ke),
        s(w, $e),
        s(w, Re),
        s(Re, Ae),
        s(Re, De),
        s(w, vt),
        s(w, qe),
        s(qe, ht),
        s(qe, it),
        s(w, _t),
        s(w, He),
        s(He, mt),
        s(He, ot),
        s(w, lt),
        s(w, Ye),
        s(Ye, pt),
        s(Ye, rt),
        s(w, bt),
        s(w, We),
        s(We, yt),
        s(We, ft),
        s(t, ut),
        s(t, gt),
        s(gt, Je),
        s(Je, Ut),
        Bt ||
          ((ll = [
            X(n, "click", a[23]),
            X(c, "click", a[18]),
            X(b, "click", a[25]),
            X(L, "click", a[28]),
            X(K, "click", a[29]),
            X(Je, "click", a[17]),
          ]),
          (Bt = !0));
    },
    p(Q, te) {
      te[0] & 8 && O !== (O = Q[3]?.friendlyName + "") && $(q, O),
        te[0] & 2048 &&
          E !==
            (E = `p-2 ${Q[11] === "home" ? "text-white" : "text-gray-400"}`) &&
          o(L, "class", E),
        te[0] & 2048 &&
          y !==
            (y = `mr-4 text-xs md:text-base ${
              Q[11] === "home" ? "active-tab" : ""
            }`) &&
          o(G, "class", y),
        te[0] & 16 && C !== (C = Q[4]?.friendlyName + "") && $(A, C),
        te[0] & 2048 &&
          P !==
            (P = `p-2 ${Q[11] === "away" ? "text-white" : "text-gray-400"}`) &&
          o(K, "class", P),
        te[0] & 2048 &&
          W !==
            (W = `mr-4 text-xs md:text-base ${
              Q[11] === "away" ? "active-tab" : ""
            }`) &&
          o(I, "class", W),
        Q[11] === "home"
          ? ye
            ? ye.p(Q, te)
            : ((ye = Kl(Q)), ye.c(), ye.m(J, Ve))
          : ye && (ye.d(1), (ye = null)),
        Q[11] === "away"
          ? ge
            ? ge.p(Q, te)
            : ((ge = Wl(Q)), ge.c(), ge.m(J, null))
          : ge && (ge.d(1), (ge = null)),
        te[0] & 1 && ae !== (ae = Q[0].filter(es).length + "") && $(Ce, ae),
        te[0] & 1 && Qe !== (Qe = Q[0].filter(ts).length + "") && $(Ze, Qe),
        te[0] & 1 && ie !== (ie = Q[0].filter(ls).length + "") && $(oe, ie),
        te[0] & 1 && xe !== (xe = Q[0].filter(ss).length + "") && $(Ke, xe),
        te[0] & 1 && et !== (et = Q[0].filter(as).length + "") && $(De, et),
        te[0] & 1 && tt !== (tt = Q[0].filter(ns).length + "") && $(it, tt),
        te[0] & 1 && je !== (je = Q[0].filter(is).length + "") && $(ot, je),
        te[0] & 1 && st !== (st = Q[0].filter(os).length + "") && $(rt, st),
        te[0] & 1 && at !== (at = Q[0].filter(rs).length + "") && $(ft, at),
        te[0] & 4096 &&
          Ot !==
            (Ot = `${Q[12] ? "bg-gray-500" : "fpl-purple-btn"} 
            px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`) &&
          o(Je, "class", Ot),
        te[0] & 4096 && (Je.disabled = Q[12]);
    },
    i: ke,
    o: ke,
    d(Q) {
      Q && i(e), ye && ye.d(), ge && ge.d(), (Bt = !1), Mt(ll);
    },
  };
}
function Bs(a) {
  let e, t;
  return (
    (e = new ws({})),
    {
      c() {
        It(e.$$.fragment);
      },
      l(l) {
        Dt(e.$$.fragment, l);
      },
      m(l, n) {
        kt(e, l, n), (t = !0);
      },
      p: ke,
      i(l) {
        t || (Ne(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        Ue(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        Tt(e, l);
      },
    }
  );
}
function Kl(a) {
  let e = [],
    t = new Map(),
    l,
    n = a[1].filter(a[30]);
  const _ = (u) => u[50].id;
  for (let u = 0; u < n.length; u += 1) {
    let c = Gl(a, n, u),
      h = _(c);
    t.set(h, (e[u] = Yl(h, c)));
  }
  return {
    c() {
      for (let u = 0; u < e.length; u += 1) e[u].c();
      l = Pe();
    },
    l(u) {
      for (let c = 0; c < e.length; c += 1) e[c].l(u);
      l = Pe();
    },
    m(u, c) {
      for (let h = 0; h < e.length; h += 1) e[h] && e[h].m(u, c);
      z(u, l, c);
    },
    p(u, c) {
      c[0] & 2097159 &&
        ((n = u[1].filter(u[30])),
        (e = us(e, c, _, 1, u, n, t, l.parentNode, cs, Yl, l, Gl)));
    },
    d(u) {
      for (let c = 0; c < e.length; c += 1) e[c].d(u);
      u && i(l);
    },
  };
}
function Rl(a) {
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
      z(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function ql(a) {
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
      z(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function Hl(a) {
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
      z(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function jl(a) {
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
      z(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function Yl(a, e) {
  let t,
    l,
    n = `${e[50].firstName.length > 0 ? e[50].firstName.charAt(0) + "." : ""} ${
      e[50].lastName
    }`,
    _,
    u,
    c,
    h,
    g,
    b,
    v,
    k,
    T =
      (e[0]?.length > 0 && e[0]?.filter(Z).length
        ? e[0]?.filter(ce).length
        : 0) + "",
    M,
    G,
    L,
    O =
      (e[0] && e[0]?.length > 0 && e[0]?.find(fe)
        ? e[0]?.find(le)?.eventStartMinute
        : "-") + "",
    q,
    E,
    y,
    D =
      (e[0] && e[0]?.length > 0 && e[0]?.find(ue)
        ? e[0]?.find(Ee)?.eventEndMinute
        : "-") + "",
    I,
    K,
    C,
    A,
    P,
    W,
    Y,
    J,
    N = e[50].position == 0 && Rl(),
    B = e[50].position == 1 && ql(),
    R = e[50].position == 2 && Hl(),
    j = e[50].position == 3 && jl();
  function Z(...U) {
    return e[31](e[50], ...U);
  }
  function ce(...U) {
    return e[32](e[50], ...U);
  }
  function fe(...U) {
    return e[33](e[50], ...U);
  }
  function le(...U) {
    return e[34](e[50], ...U);
  }
  function ue(...U) {
    return e[35](e[50], ...U);
  }
  function Ee(...U) {
    return e[36](e[50], ...U);
  }
  function pe() {
    return e[37](e[50]);
  }
  return {
    key: a,
    first: null,
    c() {
      (t = r("div")),
        (l = r("div")),
        (_ = m(n)),
        (u = V()),
        N && N.c(),
        (c = V()),
        B && B.c(),
        (h = V()),
        R && R.c(),
        (g = V()),
        j && j.c(),
        (b = V()),
        (v = r("div")),
        (k = m(`Events:
                  `)),
        (M = m(T)),
        (G = V()),
        (L = r("div")),
        (q = m(O)),
        (E = V()),
        (y = r("div")),
        (I = m(D)),
        (K = V()),
        (C = r("div")),
        (A = r("button")),
        (P = m("Update Events")),
        (W = V()),
        this.h();
    },
    l(U) {
      t = f(U, "DIV", { class: !0 });
      var F = d(t);
      l = f(F, "DIV", { class: !0 });
      var se = d(l);
      (_ = p(se, n)),
        se.forEach(i),
        (u = S(F)),
        N && N.l(F),
        (c = S(F)),
        B && B.l(F),
        (h = S(F)),
        R && R.l(F),
        (g = S(F)),
        j && j.l(F),
        (b = S(F)),
        (v = f(F, "DIV", { class: !0 }));
      var re = d(v);
      (k = p(
        re,
        `Events:
                  `
      )),
        (M = p(re, T)),
        re.forEach(i),
        (G = S(F)),
        (L = f(F, "DIV", { class: !0 }));
      var we = d(L);
      (q = p(we, O)),
        we.forEach(i),
        (E = S(F)),
        (y = f(F, "DIV", { class: !0 }));
      var de = d(y);
      (I = p(de, D)),
        de.forEach(i),
        (K = S(F)),
        (C = f(F, "DIV", { class: !0 }));
      var ee = d(C);
      A = f(ee, "BUTTON", { class: !0 });
      var Ie = d(A);
      (P = p(Ie, "Update Events")),
        Ie.forEach(i),
        ee.forEach(i),
        (W = S(F)),
        F.forEach(i),
        this.h();
    },
    h() {
      o(l, "class", "w-1/6 px-4"),
        o(v, "class", "w-1/6 px-4"),
        o(L, "class", "w-1/6 px-4"),
        o(y, "class", "w-1/6 px-4"),
        o(
          A,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        o(C, "class", "w-1/6 px-4"),
        o(
          t,
          "class",
          "flex items-center p-2 justify-between py-4 border-b border-gray-700 cursor-pointer w-full"
        ),
        (this.first = t);
    },
    m(U, F) {
      z(U, t, F),
        s(t, l),
        s(l, _),
        s(t, u),
        N && N.m(t, null),
        s(t, c),
        B && B.m(t, null),
        s(t, h),
        R && R.m(t, null),
        s(t, g),
        j && j.m(t, null),
        s(t, b),
        s(t, v),
        s(v, k),
        s(v, M),
        s(t, G),
        s(t, L),
        s(L, q),
        s(t, E),
        s(t, y),
        s(y, I),
        s(t, K),
        s(t, C),
        s(C, A),
        s(A, P),
        s(t, W),
        Y || ((J = X(A, "click", pe)), (Y = !0));
    },
    p(U, F) {
      (e = U),
        F[0] & 6 &&
          n !==
            (n = `${
              e[50].firstName.length > 0 ? e[50].firstName.charAt(0) + "." : ""
            } ${e[50].lastName}`) &&
          $(_, n),
        e[50].position == 0
          ? N || ((N = Rl()), N.c(), N.m(t, c))
          : N && (N.d(1), (N = null)),
        e[50].position == 1
          ? B || ((B = ql()), B.c(), B.m(t, h))
          : B && (B.d(1), (B = null)),
        e[50].position == 2
          ? R || ((R = Hl()), R.c(), R.m(t, g))
          : R && (R.d(1), (R = null)),
        e[50].position == 3
          ? j || ((j = jl()), j.c(), j.m(t, b))
          : j && (j.d(1), (j = null)),
        F[0] & 7 &&
          T !==
            (T =
              (e[0]?.length > 0 && e[0]?.filter(Z).length
                ? e[0]?.filter(ce).length
                : 0) + "") &&
          $(M, T),
        F[0] & 7 &&
          O !==
            (O =
              (e[0] && e[0]?.length > 0 && e[0]?.find(fe)
                ? e[0]?.find(le)?.eventStartMinute
                : "-") + "") &&
          $(q, O),
        F[0] & 7 &&
          D !==
            (D =
              (e[0] && e[0]?.length > 0 && e[0]?.find(ue)
                ? e[0]?.find(Ee)?.eventEndMinute
                : "-") + "") &&
          $(I, D);
    },
    d(U) {
      U && i(t), N && N.d(), B && B.d(), R && R.d(), j && j.d(), (Y = !1), J();
    },
  };
}
function Wl(a) {
  let e = [],
    t = new Map(),
    l,
    n = a[1].filter(a[38]);
  const _ = (u) => u[50].id;
  for (let u = 0; u < n.length; u += 1) {
    let c = Bl(a, n, u),
      h = _(c);
    t.set(h, (e[u] = Zl(h, c)));
  }
  return {
    c() {
      for (let u = 0; u < e.length; u += 1) e[u].c();
      l = Pe();
    },
    l(u) {
      for (let c = 0; c < e.length; c += 1) e[c].l(u);
      l = Pe();
    },
    m(u, c) {
      for (let h = 0; h < e.length; h += 1) e[h] && e[h].m(u, c);
      z(u, l, c);
    },
    p(u, c) {
      c[0] & 2097159 &&
        ((n = u[1].filter(u[38])),
        (e = us(e, c, _, 1, u, n, t, l.parentNode, cs, Zl, l, Bl)));
    },
    d(u) {
      for (let c = 0; c < e.length; c += 1) e[c].d(u);
      u && i(l);
    },
  };
}
function Jl(a) {
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
      z(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function Xl(a) {
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
      z(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function zl(a) {
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
      z(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function Ql(a) {
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
      z(l, e, n), s(e, t);
    },
    d(l) {
      l && i(e);
    },
  };
}
function Zl(a, e) {
  let t,
    l,
    n = `${e[50].firstName.length > 0 ? e[50].firstName.charAt(0) + "." : ""} ${
      e[50].lastName
    }`,
    _,
    u,
    c,
    h,
    g,
    b,
    v,
    k,
    T =
      (e[0]?.length > 0 && e[0]?.filter(Z).length
        ? e[0]?.filter(ce).length
        : 0) + "",
    M,
    G,
    L,
    O =
      (e[0] && e[0]?.length > 0 && e[0]?.find(fe)
        ? e[0]?.find(le)?.eventStartMinute
        : "-") + "",
    q,
    E,
    y,
    D =
      (e[0] && e[0]?.length > 0 && e[0]?.find(ue)
        ? e[0]?.find(Ee)?.eventEndMinute
        : "-") + "",
    I,
    K,
    C,
    A,
    P,
    W,
    Y,
    J,
    N = e[50].position == 0 && Jl(),
    B = e[50].position == 1 && Xl(),
    R = e[50].position == 2 && zl(),
    j = e[50].position == 3 && Ql();
  function Z(...U) {
    return e[39](e[50], ...U);
  }
  function ce(...U) {
    return e[40](e[50], ...U);
  }
  function fe(...U) {
    return e[41](e[50], ...U);
  }
  function le(...U) {
    return e[42](e[50], ...U);
  }
  function ue(...U) {
    return e[43](e[50], ...U);
  }
  function Ee(...U) {
    return e[44](e[50], ...U);
  }
  function pe() {
    return e[45](e[50]);
  }
  return {
    key: a,
    first: null,
    c() {
      (t = r("div")),
        (l = r("div")),
        (_ = m(n)),
        (u = V()),
        N && N.c(),
        (c = V()),
        B && B.c(),
        (h = V()),
        R && R.c(),
        (g = V()),
        j && j.c(),
        (b = V()),
        (v = r("div")),
        (k = m(`Events:
                  `)),
        (M = m(T)),
        (G = V()),
        (L = r("div")),
        (q = m(O)),
        (E = V()),
        (y = r("div")),
        (I = m(D)),
        (K = V()),
        (C = r("div")),
        (A = r("button")),
        (P = m("Update Events")),
        (W = V()),
        this.h();
    },
    l(U) {
      t = f(U, "DIV", { class: !0 });
      var F = d(t);
      l = f(F, "DIV", { class: !0 });
      var se = d(l);
      (_ = p(se, n)),
        se.forEach(i),
        (u = S(F)),
        N && N.l(F),
        (c = S(F)),
        B && B.l(F),
        (h = S(F)),
        R && R.l(F),
        (g = S(F)),
        j && j.l(F),
        (b = S(F)),
        (v = f(F, "DIV", { class: !0 }));
      var re = d(v);
      (k = p(
        re,
        `Events:
                  `
      )),
        (M = p(re, T)),
        re.forEach(i),
        (G = S(F)),
        (L = f(F, "DIV", { class: !0 }));
      var we = d(L);
      (q = p(we, O)),
        we.forEach(i),
        (E = S(F)),
        (y = f(F, "DIV", { class: !0 }));
      var de = d(y);
      (I = p(de, D)),
        de.forEach(i),
        (K = S(F)),
        (C = f(F, "DIV", { class: !0 }));
      var ee = d(C);
      A = f(ee, "BUTTON", { class: !0 });
      var Ie = d(A);
      (P = p(Ie, "Update Events")),
        Ie.forEach(i),
        ee.forEach(i),
        (W = S(F)),
        F.forEach(i),
        this.h();
    },
    h() {
      o(l, "class", "w-1/6 px-4"),
        o(v, "class", "w-1/6 px-4"),
        o(L, "class", "w-1/6 px-4"),
        o(y, "class", "w-1/6 px-4"),
        o(
          A,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        o(C, "class", "w-1/6 px-4"),
        o(
          t,
          "class",
          "flex items-center p-2 justify-between py-4 border-b border-gray-700 cursor-pointer w-full"
        ),
        (this.first = t);
    },
    m(U, F) {
      z(U, t, F),
        s(t, l),
        s(l, _),
        s(t, u),
        N && N.m(t, null),
        s(t, c),
        B && B.m(t, null),
        s(t, h),
        R && R.m(t, null),
        s(t, g),
        j && j.m(t, null),
        s(t, b),
        s(t, v),
        s(v, k),
        s(v, M),
        s(t, G),
        s(t, L),
        s(L, q),
        s(t, E),
        s(t, y),
        s(y, I),
        s(t, K),
        s(t, C),
        s(C, A),
        s(A, P),
        s(t, W),
        Y || ((J = X(A, "click", pe)), (Y = !0));
    },
    p(U, F) {
      (e = U),
        F[0] & 6 &&
          n !==
            (n = `${
              e[50].firstName.length > 0 ? e[50].firstName.charAt(0) + "." : ""
            } ${e[50].lastName}`) &&
          $(_, n),
        e[50].position == 0
          ? N || ((N = Jl()), N.c(), N.m(t, c))
          : N && (N.d(1), (N = null)),
        e[50].position == 1
          ? B || ((B = Xl()), B.c(), B.m(t, h))
          : B && (B.d(1), (B = null)),
        e[50].position == 2
          ? R || ((R = zl()), R.c(), R.m(t, g))
          : R && (R.d(1), (R = null)),
        e[50].position == 3
          ? j || ((j = Ql()), j.c(), j.m(t, b))
          : j && (j.d(1), (j = null)),
        F[0] & 7 &&
          T !==
            (T =
              (e[0]?.length > 0 && e[0]?.filter(Z).length
                ? e[0]?.filter(ce).length
                : 0) + "") &&
          $(M, T),
        F[0] & 7 &&
          O !==
            (O =
              (e[0] && e[0]?.length > 0 && e[0]?.find(fe)
                ? e[0]?.find(le)?.eventStartMinute
                : "-") + "") &&
          $(q, O),
        F[0] & 7 &&
          D !==
            (D =
              (e[0] && e[0]?.length > 0 && e[0]?.find(ue)
                ? e[0]?.find(Ee)?.eventEndMinute
                : "-") + "") &&
          $(I, D);
    },
    d(U) {
      U && i(t), N && N.d(), B && B.d(), R && R.d(), j && j.d(), (Y = !1), J();
    },
  };
}
function Gs(a) {
  let e, t, l, n;
  const _ = [Bs, Us],
    u = [];
  function c(h, g) {
    return h[13] ? 0 : 1;
  }
  return (
    (e = c(a)),
    (t = u[e] = _[e](a)),
    {
      c() {
        t.c(), (l = Pe());
      },
      l(h) {
        t.l(h), (l = Pe());
      },
      m(h, g) {
        u[e].m(h, g), z(h, l, g), (n = !0);
      },
      p(h, g) {
        let b = e;
        (e = c(h)),
          e === b
            ? u[e].p(h, g)
            : ($t(),
              Ue(u[b], 1, 1, () => {
                u[b] = null;
              }),
              xt(),
              (t = u[e]),
              t ? t.p(h, g) : ((t = u[e] = _[e](h)), t.c()),
              Ne(t, 1),
              t.m(l.parentNode, l));
      },
      i(h) {
        n || (Ne(t), (n = !0));
      },
      o(h) {
        Ue(t), (n = !1);
      },
      d(h) {
        u[e].d(h), h && i(l);
      },
    }
  );
}
function xl(a) {
  let e, t;
  return (
    (e = new Ss({
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
        It(e.$$.fragment);
      },
      l(l) {
        Dt(e.$$.fragment, l);
      },
      m(l, n) {
        kt(e, l, n), (t = !0);
      },
      p(l, n) {
        const _ = {};
        n[0] & 32 && (_.show = l[5]),
          n[0] & 256 && (_.selectedTeam = l[8]),
          e.$set(_);
      },
      i(l) {
        t || (Ne(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        Ue(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        Tt(e, l);
      },
    }
  );
}
function $l(a) {
  let e, t;
  return (
    (e = new Ns({
      props: {
        show: a[6],
        player: a[9],
        fixtureId: a[14],
        playerEventData: a[10],
        closeModal: a[22],
      },
    })),
    {
      c() {
        It(e.$$.fragment);
      },
      l(l) {
        Dt(e.$$.fragment, l);
      },
      m(l, n) {
        kt(e, l, n), (t = !0);
      },
      p(l, n) {
        const _ = {};
        n[0] & 64 && (_.show = l[6]),
          n[0] & 512 && (_.player = l[9]),
          n[0] & 16384 && (_.fixtureId = l[14]),
          n[0] & 1024 && (_.playerEventData = l[10]),
          e.$set(_);
      },
      i(l) {
        t || (Ne(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        Ue(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        Tt(e, l);
      },
    }
  );
}
function Ks(a) {
  let e, t, l, n, _, u, c, h;
  e = new ys({ props: { $$slots: { default: [Gs] }, $$scope: { ctx: a } } });
  let g = a[8] && xl(a),
    b = a[9] && $l(a);
  return (
    (_ = new Cs({ props: { show: Rs, onConfirm: a[17] } })),
    (c = new Ls({
      props: { closeModal: a[26], show: a[7], onConfirm: a[19] },
    })),
    {
      c() {
        It(e.$$.fragment),
          (t = V()),
          g && g.c(),
          (l = V()),
          b && b.c(),
          (n = V()),
          It(_.$$.fragment),
          (u = V()),
          It(c.$$.fragment);
      },
      l(v) {
        Dt(e.$$.fragment, v),
          (t = S(v)),
          g && g.l(v),
          (l = S(v)),
          b && b.l(v),
          (n = S(v)),
          Dt(_.$$.fragment, v),
          (u = S(v)),
          Dt(c.$$.fragment, v);
      },
      m(v, k) {
        kt(e, v, k),
          z(v, t, k),
          g && g.m(v, k),
          z(v, l, k),
          b && b.m(v, k),
          z(v, n, k),
          kt(_, v, k),
          z(v, u, k),
          kt(c, v, k),
          (h = !0);
      },
      p(v, k) {
        const T = {};
        (k[0] & 14367) | (k[1] & 16777216) &&
          (T.$$scope = { dirty: k, ctx: v }),
          e.$set(T),
          v[8]
            ? g
              ? (g.p(v, k), k[0] & 256 && Ne(g, 1))
              : ((g = xl(v)), g.c(), Ne(g, 1), g.m(l.parentNode, l))
            : g &&
              ($t(),
              Ue(g, 1, 1, () => {
                g = null;
              }),
              xt()),
          v[9]
            ? b
              ? (b.p(v, k), k[0] & 512 && Ne(b, 1))
              : ((b = $l(v)), b.c(), Ne(b, 1), b.m(n.parentNode, n))
            : b &&
              ($t(),
              Ue(b, 1, 1, () => {
                b = null;
              }),
              xt());
        const M = {};
        k[0] & 128 && (M.show = v[7]), c.$set(M);
      },
      i(v) {
        h ||
          (Ne(e.$$.fragment, v),
          Ne(g),
          Ne(b),
          Ne(_.$$.fragment, v),
          Ne(c.$$.fragment, v),
          (h = !0));
      },
      o(v) {
        Ue(e.$$.fragment, v),
          Ue(g),
          Ue(b),
          Ue(_.$$.fragment, v),
          Ue(c.$$.fragment, v),
          (h = !1);
      },
      d(v) {
        Tt(e, v),
          v && i(t),
          g && g.d(v),
          v && i(l),
          b && b.d(v),
          v && i(n),
          Tt(_, v),
          v && i(u),
          Tt(c, v);
      },
    }
  );
}
let Rs = !1;
const es = (a) => a.eventType == 0,
  ts = (a) => a.eventType == 1,
  ls = (a) => a.eventType == 10,
  ss = (a) => a.eventType == 2,
  as = (a) => a.eventType == 4,
  ns = (a) => a.eventType == 8,
  is = (a) => a.eventType == 9,
  os = (a) => a.eventType == 6,
  rs = (a) => a.eventType == 7;
function qs(a, e, t) {
  let l,
    n,
    _ = ke,
    u = () => (_(), (_ = Lt(I, (w) => t(0, (n = w)))), I),
    c,
    h,
    g;
  Xt(a, Qt, (w) => t(48, (c = w))),
    Xt(a, ms, (w) => t(27, (g = w))),
    a.$$.on_destroy.push(() => _());
  let b = [],
    v = [],
    k,
    T,
    M,
    G = !1,
    L = !1,
    O = !1,
    q = ct([]),
    E = ct([]);
  Xt(a, E, (w) => t(1, (h = w)));
  let y = null,
    D = null,
    I = ct([]);
  u();
  let K = "home",
    C = !0,
    A = !0;
  hs(async () => {
    try {
      await wl.sync(),
        await Il.sync(),
        await zt.sync(),
        wl.subscribe((ve) => {
          b = ve;
        }),
        zt.subscribe((ve) => {
          v = ve;
        }),
        Il.subscribe((ve) => {
          t(2, (k = ve.find((ae) => ae.id == l))),
            t(3, (T = b.find((ae) => ae.id == k?.homeTeamId))),
            t(4, (M = b.find((ae) => ae.id == k?.awayTeamId))),
            t(8, (y = T)),
            q.set(v.filter((ae) => ae.teamId == y?.id));
        });
      const w = `fixtureDraft_${l}`,
        H = localStorage.getItem(w);
      if (H) {
        let ae = JSON.parse(H).playerEventData;
        ae && (I.set(ae), W());
      }
    } catch (w) {
      Nt.show("Error fetching fixture validation list.", "error"),
        console.error("Error fetching fixture validation list.", w);
    } finally {
      t(13, (A = !1));
    }
  }),
    _s(() => {});
  async function P() {
    t(13, (A = !0)), Zt(Qt, (c = "Saving Fixture Data"), c);
    try {
      await Ds.submitFixtureData(l, n),
        localStorage.removeItem(`fixtureDraft_${l}`),
        Nt.show("Fixture data saved", "success"),
        gs("/fixture-validation");
    } catch (w) {
      Nt.show("Error saving fixture data.", "error"),
        console.error("Error saving fixture data: ", w);
    } finally {
      t(13, (A = !1)), Zt(Qt, (c = "Loading"), c);
    }
  }
  function W() {
    const w = new Set(n.map((ve) => ve.playerId)),
      H = v.filter((ve) => w.has(ve.id));
    E.set(H);
  }
  function Y() {
    const w = { playerEventData: n },
      H = `fixtureDraft_${l}`;
    localStorage.setItem(H, JSON.stringify(w, Es)),
      Nt.show("Draft saved.", "success");
  }
  function J() {
    u(t(10, (I = ct([])))),
      localStorage.removeItem(`fixtureDraft_${l}`),
      Nt.show("Draft cleared.", "success"),
      fe();
  }
  async function N(w) {
    await zt.sync(),
      t(8, (y = w === "home" ? T : M)),
      q.set(v.filter((H) => H.teamId == y?.id)),
      t(11, (K = w));
  }
  function B(w) {
    t(9, (D = w)), t(6, (L = !0));
  }
  function R() {
    t(6, (L = !1)), t(9, (D = null));
  }
  function j() {
    t(5, (G = !0));
  }
  function Z() {
    t(5, (G = !1));
  }
  function ce() {
    t(7, (O = !0));
  }
  function fe() {
    t(7, (O = !1));
  }
  const le = () => N("home"),
    ue = () => N("away"),
    Ee = (w) => w.teamId === k?.homeTeamId,
    pe = (w, H) => H.playerId === w.id,
    U = (w, H) => H.playerId === w.id,
    F = (w, H) => H.playerId === w.id && H.eventType == 0,
    se = (w, H) => H.playerId === w.id && H.eventType == 0,
    re = (w, H) => H.playerId === w.id && H.eventType == 0,
    we = (w, H) => H.playerId === w.id && H.eventType == 0,
    de = (w) => B(w),
    ee = (w) => w.teamId === k?.awayTeamId,
    Ie = (w, H) => H.playerId === w.id,
    Ve = (w, H) => H.playerId === w.id,
    be = (w, H) => H.playerId === w.id && H.eventType == 0,
    Se = (w, H) => H.playerId === w.id,
    Me = (w, H) => H.playerId === w.id && H.eventType == 0,
    ze = (w, H) => H.playerId === w.id,
    Oe = (w) => B(w);
  return (
    (a.$$.update = () => {
      a.$$.dirty[0] & 134217728 &&
        t(14, (l = Number(g.url.searchParams.get("id")))),
        a.$$.dirty[0] & 3 &&
          t(
            12,
            (C =
              n.length == 0 ||
              n.filter((w) => w.eventType == 0).length != h.length)
          );
    }),
    [
      n,
      h,
      k,
      T,
      M,
      G,
      L,
      O,
      y,
      D,
      I,
      K,
      C,
      A,
      l,
      q,
      E,
      P,
      Y,
      J,
      N,
      B,
      R,
      j,
      Z,
      ce,
      fe,
      g,
      le,
      ue,
      Ee,
      pe,
      U,
      F,
      se,
      re,
      we,
      de,
      ee,
      Ie,
      Ve,
      be,
      Se,
      Me,
      ze,
      Oe,
    ]
  );
}
class Js extends Pt {
  constructor(e) {
    super(), Vt(this, e, qs, Ks, St, {}, null, [-1, -1]);
  }
}
export { Js as component };
