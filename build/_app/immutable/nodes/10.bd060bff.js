import { B as Jt } from "../chunks/BadgeIcon.5f1570c4.js";
import { f as Vl } from "../chunks/fixture-store.8fe042dd.js";
import { i as us } from "../chunks/global-stores.803ba169.js";
import {
  A as Le,
  a as v,
  b as U,
  B as Ue,
  c as h,
  d as De,
  e as fl,
  f as Ht,
  g as ie,
  G as s,
  H as nt,
  h as r,
  i as Nl,
  I as oi,
  k as n,
  l as f,
  L as gt,
  m as d,
  M as Dl,
  n as o,
  N as ui,
  O as mi,
  o as ni,
  p as Dt,
  q as c,
  Q as Qt,
  R as ds,
  r as u,
  S as Cl,
  s as xl,
  T as cs,
  u as J,
  v as Pt,
  x as dl,
  y as Be,
  z as Je,
} from "../chunks/index.c7b38e5e.js";
import { a as hi, L as vi } from "../chunks/Layout.39e2a716.js";
import { p as ci } from "../chunks/player-store.55a4cc5d.js";
import { S as wi } from "../chunks/ShirtIcon.cbb688e3.js";
import { p as fi } from "../chunks/stores.f0f38284.js";
import { s as Il } from "../chunks/system-store.408d352e.js";
import {
  b as pi,
  c as gi,
  d as ms,
  e as vs,
  f as _i,
  g as cl,
  j as hs,
  t as Tl,
  u as bi,
} from "../chunks/team-store.a9afdac8.js";
import { t as di } from "../chunks/toast-store.64ad2768.js";
import { V as yi } from "../chunks/ViewDetailsIcon.98b59799.js";
function ps(i, e, l) {
  const t = i.slice();
  return (t[21] = e[l]), t;
}
function _s(i, e, l) {
  const t = i.slice();
  return (t[21] = e[l]), t;
}
function gs(i) {
  let e,
    l,
    t,
    a,
    m,
    y,
    x,
    I,
    C,
    w,
    D,
    H,
    p,
    T,
    F = i[2].firstName + "",
    $,
    M,
    V = i[2].lastName + "",
    j,
    P,
    W,
    g,
    b,
    _ = i[4]?.friendlyName + "",
    N,
    G,
    A,
    S,
    B,
    me,
    Ae,
    ae = i[5]?.friendlyName + "",
    X,
    Ve,
    z,
    de,
    Ce,
    ce,
    re,
    Ie,
    ve,
    oe,
    ee,
    he,
    pe,
    Ne,
    _e,
    ne,
    xe,
    Y,
    ue,
    Te,
    we,
    fe,
    ge = Math.floor(i[11] / 3) > 0,
    be,
    Ee,
    te,
    E,
    se,
    Re,
    Q,
    q,
    Z = i[3]?.points + "",
    bt,
    It,
    We,
    $e,
    st,
    Me,
    Xe,
    Tt;
  var it = cl(i[2].nationality);
  function ft(L) {
    return { props: { class: "h-20 w-20" } };
  }
  it && (D = dl(it, ft())),
    (g = new Jt({
      props: {
        className: "w-5 h-5 mr-2",
        primaryColour: i[4]?.primaryColourHex,
        secondaryColour: i[4]?.secondaryColourHex,
        thirdColour: i[4]?.thirdColourHex,
      },
    })),
    (me = new Jt({
      props: {
        className: "w-5 h-5 mx-1",
        primaryColour: i[5]?.primaryColourHex,
        secondaryColour: i[5]?.secondaryColourHex,
        thirdColour: i[5]?.thirdColourHex,
      },
    }));
  let Ye = i[8],
    He = [];
  for (let L = 0; L < Ye.length; L += 1) He[L] = bs(_s(i, Ye, L));
  let Se = i[10] >= 2 && ys(i),
    Pe = ge && ws(i),
    Ke = i[9],
    ye = [];
  for (let L = 0; L < Ke.length; L += 1) ye[L] = zs(ps(i, Ke, L));
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (a = n("h3")),
        (m = c("Player Detail")),
        (y = v()),
        (x = n("button")),
        (I = c("×")),
        (C = v()),
        (w = n("div")),
        D && Be(D.$$.fragment),
        (H = v()),
        (p = n("div")),
        (T = n("h3")),
        ($ = c(F)),
        (M = v()),
        (j = c(V)),
        (P = v()),
        (W = n("p")),
        Be(g.$$.fragment),
        (b = v()),
        (N = c(_)),
        (G = v()),
        (A = n("div")),
        (S = n("p")),
        (B = c("vs ")),
        Be(me.$$.fragment),
        (Ae = v()),
        (X = c(ae)),
        (Ve = v()),
        (z = n("p")),
        (de = c(i[7])),
        (Ce = v()),
        (ce = n("p")),
        (re = c("Gameweek ")),
        (Ie = c(i[6])),
        (ve = v()),
        (oe = n("div")),
        (ee = n("div")),
        (he = n("div")),
        (pe = c("Category")),
        (Ne = v()),
        (_e = n("div")),
        (ne = c("Detail")),
        (xe = v()),
        (Y = n("div")),
        (ue = c("Points")),
        (Te = v());
      for (let L = 0; L < He.length; L += 1) He[L].c();
      (we = v()), Se && Se.c(), (fe = v()), Pe && Pe.c(), (be = v());
      for (let L = 0; L < ye.length; L += 1) ye[L].c();
      (Ee = v()),
        (te = n("div")),
        (E = n("div")),
        (se = n("span")),
        (Re = c("Total Points:")),
        (Q = v()),
        (q = n("span")),
        (bt = c(Z)),
        (It = v()),
        (We = n("div")),
        ($e = n("button")),
        (st = c("Close")),
        this.h();
    },
    l(L) {
      e = f(L, "DIV", { class: !0 });
      var le = d(e);
      l = f(le, "DIV", { class: !0 });
      var O = d(l);
      t = f(O, "DIV", { class: !0 });
      var Oe = d(t);
      a = f(Oe, "H3", { class: !0 });
      var K = d(a);
      (m = u(K, "Player Detail")),
        K.forEach(r),
        (y = h(Oe)),
        (x = f(Oe, "BUTTON", { class: !0 }));
      var Ge = d(x);
      (I = u(Ge, "×")),
        Ge.forEach(r),
        Oe.forEach(r),
        (C = h(O)),
        (w = f(O, "DIV", { class: !0 }));
      var at = d(w);
      D && Je(D.$$.fragment, at),
        (H = h(at)),
        (p = f(at, "DIV", { class: !0 }));
      var dt = d(p);
      T = f(dt, "H3", { class: !0 });
      var ct = d(T);
      ($ = u(ct, F)),
        (M = h(ct)),
        (j = u(ct, V)),
        ct.forEach(r),
        (P = h(dt)),
        (W = f(dt, "P", { class: !0 }));
      var yt = d(W);
      Je(g.$$.fragment, yt),
        (b = h(yt)),
        (N = u(yt, _)),
        yt.forEach(r),
        dt.forEach(r),
        at.forEach(r),
        (G = h(O)),
        (A = f(O, "DIV", { class: !0 }));
      var Ze = d(A);
      S = f(Ze, "P", { class: !0 });
      var ut = d(S);
      (B = u(ut, "vs ")),
        Je(me.$$.fragment, ut),
        (Ae = h(ut)),
        (X = u(ut, ae)),
        ut.forEach(r),
        (Ve = h(Ze)),
        (z = f(Ze, "P", { class: !0 }));
      var mt = d(z);
      (de = u(mt, i[7])),
        mt.forEach(r),
        (Ce = h(Ze)),
        (ce = f(Ze, "P", { class: !0 }));
      var rt = d(ce);
      (re = u(rt, "Gameweek ")),
        (Ie = u(rt, i[6])),
        rt.forEach(r),
        Ze.forEach(r),
        (ve = h(O)),
        (oe = f(O, "DIV", { class: !0 }));
      var tt = d(oe);
      ee = f(tt, "DIV", { class: !0 });
      var et = d(ee);
      he = f(et, "DIV", { class: !0 });
      var Vt = d(he);
      (pe = u(Vt, "Category")),
        Vt.forEach(r),
        (Ne = h(et)),
        (_e = f(et, "DIV", { class: !0 }));
      var Ct = d(_e);
      (ne = u(Ct, "Detail")),
        Ct.forEach(r),
        (xe = h(et)),
        (Y = f(et, "DIV", { class: !0 }));
      var St = d(Y);
      (ue = u(St, "Points")),
        St.forEach(r),
        et.forEach(r),
        tt.forEach(r),
        (Te = h(O));
      for (let qe = 0; qe < He.length; qe += 1) He[qe].l(O);
      (we = h(O)), Se && Se.l(O), (fe = h(O)), Pe && Pe.l(O), (be = h(O));
      for (let qe = 0; qe < ye.length; qe += 1) ye[qe].l(O);
      (Ee = h(O)), (te = f(O, "DIV", { class: !0 }));
      var ot = d(te);
      E = f(ot, "DIV", { class: !0 });
      var wt = d(E);
      se = f(wt, "SPAN", { class: !0 });
      var ze = d(se);
      (Re = u(ze, "Total Points:")),
        ze.forEach(r),
        (Q = h(wt)),
        (q = f(wt, "SPAN", { class: !0 }));
      var vt = d(q);
      (bt = u(vt, Z)),
        vt.forEach(r),
        wt.forEach(r),
        ot.forEach(r),
        (It = h(O)),
        (We = f(O, "DIV", { class: !0 }));
      var $t = d(We);
      $e = f($t, "BUTTON", { class: !0 });
      var Mt = d($e);
      (st = u(Mt, "Close")),
        Mt.forEach(r),
        $t.forEach(r),
        O.forEach(r),
        le.forEach(r),
        this.h();
    },
    h() {
      o(a, "class", "text-xl font-semibold text-white"),
        o(x, "class", "text-white text-3xl"),
        o(t, "class", "flex justify-between items-center"),
        o(T, "class", "text-2xl mb-2"),
        o(W, "class", "text-sm text-gray-400 flex items-center"),
        o(p, "class", "ml-4"),
        o(w, "class", "flex justify-start items-center w-full"),
        o(
          S,
          "class",
          "flex w-1/3 items-center border-r border-gray-600 justify-center pt-2"
        ),
        o(z, "class", "flex w-1/3 justify-center items-center pt-2"),
        o(
          ce,
          "class",
          "flex w-1/3 items-center justify-center border-l border-gray-600 pt-2"
        ),
        o(
          A,
          "class",
          "flex justify-start items-center w-full border-t border-gray-600 text-sm"
        ),
        o(he, "class", "text-sm font-medium w-3/6"),
        o(_e, "class", "text-sm font-medium w-2/6"),
        o(Y, "class", "text-sm font-medium w-1/6"),
        o(
          ee,
          "class",
          "flex justify-between items-center mt-4 bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        o(oe, "class", "mt-2"),
        o(se, "class", "text-sm font-bold w-5/6"),
        o(q, "class", "text-sm font-bold w-1/6"),
        o(
          E,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        o(te, "class", "mt-2"),
        o($e, "class", "fpl-purple-btn px-4 py-2 mt-2 rounded-md"),
        o(We, "class", "mt-2 flex justify-end"),
        o(
          l,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"
        ),
        o(
          e,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop svelte-18qswye"
        );
    },
    m(L, le) {
      U(L, e, le),
        s(e, l),
        s(l, t),
        s(t, a),
        s(a, m),
        s(t, y),
        s(t, x),
        s(x, I),
        s(l, C),
        s(l, w),
        D && Le(D, w, null),
        s(w, H),
        s(w, p),
        s(p, T),
        s(T, $),
        s(T, M),
        s(T, j),
        s(p, P),
        s(p, W),
        Le(g, W, null),
        s(W, b),
        s(W, N),
        s(l, G),
        s(l, A),
        s(A, S),
        s(S, B),
        Le(me, S, null),
        s(S, Ae),
        s(S, X),
        s(A, Ve),
        s(A, z),
        s(z, de),
        s(A, Ce),
        s(A, ce),
        s(ce, re),
        s(ce, Ie),
        s(l, ve),
        s(l, oe),
        s(oe, ee),
        s(ee, he),
        s(he, pe),
        s(ee, Ne),
        s(ee, _e),
        s(_e, ne),
        s(ee, xe),
        s(ee, Y),
        s(Y, ue),
        s(l, Te);
      for (let O = 0; O < He.length; O += 1) He[O] && He[O].m(l, null);
      s(l, we), Se && Se.m(l, null), s(l, fe), Pe && Pe.m(l, null), s(l, be);
      for (let O = 0; O < ye.length; O += 1) ye[O] && ye[O].m(l, null);
      s(l, Ee),
        s(l, te),
        s(te, E),
        s(E, se),
        s(se, Re),
        s(E, Q),
        s(E, q),
        s(q, bt),
        s(l, It),
        s(l, We),
        s(We, $e),
        s($e, st),
        (Me = !0),
        Xe ||
          ((Tt = [
            gt(x, "click", function () {
              Qt(i[1]) && i[1].apply(this, arguments);
            }),
            gt($e, "click", function () {
              Qt(i[1]) && i[1].apply(this, arguments);
            }),
            gt($e, "keydown", function () {
              Qt(i[1]) && i[1].apply(this, arguments);
            }),
            gt(l, "click", ds(i[19])),
            gt(l, "keydown", ds(i[20])),
            gt(e, "click", function () {
              Qt(i[1]) && i[1].apply(this, arguments);
            }),
            gt(e, "keydown", function () {
              Qt(i[1]) && i[1].apply(this, arguments);
            }),
          ]),
          (Xe = !0));
    },
    p(L, le) {
      if (((i = L), le & 4 && it !== (it = cl(i[2].nationality)))) {
        if (D) {
          Pt();
          const K = D;
          De(K.$$.fragment, 1, 0, () => {
            Ue(K, 1);
          }),
            Ht();
        }
        it
          ? ((D = dl(it, ft())),
            Be(D.$$.fragment),
            ie(D.$$.fragment, 1),
            Le(D, w, H))
          : (D = null);
      }
      (!Me || le & 4) && F !== (F = i[2].firstName + "") && J($, F),
        (!Me || le & 4) && V !== (V = i[2].lastName + "") && J(j, V);
      const O = {};
      le & 16 && (O.primaryColour = i[4]?.primaryColourHex),
        le & 16 && (O.secondaryColour = i[4]?.secondaryColourHex),
        le & 16 && (O.thirdColour = i[4]?.thirdColourHex),
        g.$set(O),
        (!Me || le & 16) && _ !== (_ = i[4]?.friendlyName + "") && J(N, _);
      const Oe = {};
      if (
        (le & 32 && (Oe.primaryColour = i[5]?.primaryColourHex),
        le & 32 && (Oe.secondaryColour = i[5]?.secondaryColourHex),
        le & 32 && (Oe.thirdColour = i[5]?.thirdColourHex),
        me.$set(Oe),
        (!Me || le & 32) && ae !== (ae = i[5]?.friendlyName + "") && J(X, ae),
        (!Me || le & 128) && J(de, i[7]),
        (!Me || le & 64) && J(Ie, i[6]),
        le & 256)
      ) {
        Ye = i[8];
        let K;
        for (K = 0; K < Ye.length; K += 1) {
          const Ge = _s(i, Ye, K);
          He[K]
            ? He[K].p(Ge, le)
            : ((He[K] = bs(Ge)), He[K].c(), He[K].m(l, we));
        }
        for (; K < He.length; K += 1) He[K].d(1);
        He.length = Ye.length;
      }
      if (
        (i[10] >= 2
          ? Se
            ? Se.p(i, le)
            : ((Se = ys(i)), Se.c(), Se.m(l, fe))
          : Se && (Se.d(1), (Se = null)),
        le & 2048 && (ge = Math.floor(i[11] / 3) > 0),
        ge
          ? Pe
            ? Pe.p(i, le)
            : ((Pe = ws(i)), Pe.c(), Pe.m(l, be))
          : Pe && (Pe.d(1), (Pe = null)),
        le & 111104)
      ) {
        Ke = i[9];
        let K;
        for (K = 0; K < Ke.length; K += 1) {
          const Ge = ps(i, Ke, K);
          ye[K]
            ? ye[K].p(Ge, le)
            : ((ye[K] = zs(Ge)), ye[K].c(), ye[K].m(l, Ee));
        }
        for (; K < ye.length; K += 1) ye[K].d(1);
        ye.length = Ke.length;
      }
      (!Me || le & 8) && Z !== (Z = i[3]?.points + "") && J(bt, Z);
    },
    i(L) {
      Me ||
        (D && ie(D.$$.fragment, L),
        ie(g.$$.fragment, L),
        ie(me.$$.fragment, L),
        (Me = !0));
    },
    o(L) {
      D && De(D.$$.fragment, L),
        De(g.$$.fragment, L),
        De(me.$$.fragment, L),
        (Me = !1);
    },
    d(L) {
      L && r(e),
        D && Ue(D),
        Ue(g),
        Ue(me),
        Dl(He, L),
        Se && Se.d(),
        Pe && Pe.d(),
        Dl(ye, L),
        (Xe = !1),
        ui(Tt);
    },
  };
}
function bs(i) {
  let e,
    l,
    t,
    a,
    m,
    y,
    x = i[21].eventStartMinute + "",
    I,
    C,
    w = i[21].eventEndMinute + "",
    D,
    H,
    p,
    T,
    F;
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (a = c("Appearance")),
        (m = v()),
        (y = n("div")),
        (I = c(x)),
        (C = c("-")),
        (D = c(w)),
        (H = c("'")),
        (p = v()),
        (T = n("div")),
        (F = c(Qs)),
        this.h();
    },
    l($) {
      e = f($, "DIV", { class: !0 });
      var M = d(e);
      l = f(M, "DIV", { class: !0 });
      var V = d(l);
      t = f(V, "DIV", { class: !0 });
      var j = d(t);
      (a = u(j, "Appearance")),
        j.forEach(r),
        (m = h(V)),
        (y = f(V, "DIV", { class: !0 }));
      var P = d(y);
      (I = u(P, x)),
        (C = u(P, "-")),
        (D = u(P, w)),
        (H = u(P, "'")),
        P.forEach(r),
        (p = h(V)),
        (T = f(V, "DIV", { class: !0 }));
      var W = d(T);
      (F = u(W, Qs)), W.forEach(r), V.forEach(r), M.forEach(r), this.h();
    },
    h() {
      o(t, "class", "text-sm font-medium w-3/6"),
        o(y, "class", "text-sm font-medium w-2/6"),
        o(T, "class", "text-sm font-medium w-1/6"),
        o(l, "class", "flex justify-between items-center p-2"),
        o(e, "class", "mt-2");
    },
    m($, M) {
      U($, e, M),
        s(e, l),
        s(l, t),
        s(t, a),
        s(l, m),
        s(l, y),
        s(y, I),
        s(y, C),
        s(y, D),
        s(y, H),
        s(l, p),
        s(l, T),
        s(T, F);
    },
    p($, M) {
      M & 256 && x !== (x = $[21].eventStartMinute + "") && J(I, x),
        M & 256 && w !== (w = $[21].eventEndMinute + "") && J(D, w);
    },
    d($) {
      $ && r(e);
    },
  };
}
function ys(i) {
  let e,
    l,
    t,
    a,
    m,
    y,
    x,
    I,
    C,
    w,
    D = -(-i[14] * Math.floor(i[10] / 2)) + "",
    H;
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (a = c("Goal x ")),
        (m = c(i[10])),
        (y = v()),
        (x = n("div")),
        (I = c("-")),
        (C = v()),
        (w = n("div")),
        (H = c(D)),
        this.h();
    },
    l(p) {
      e = f(p, "DIV", { class: !0 });
      var T = d(e);
      l = f(T, "DIV", { class: !0 });
      var F = d(l);
      t = f(F, "DIV", { class: !0 });
      var $ = d(t);
      (a = u($, "Goal x ")),
        (m = u($, i[10])),
        $.forEach(r),
        (y = h(F)),
        (x = f(F, "DIV", { class: !0 }));
      var M = d(x);
      (I = u(M, "-")),
        M.forEach(r),
        (C = h(F)),
        (w = f(F, "DIV", { class: !0 }));
      var V = d(w);
      (H = u(V, D)), V.forEach(r), F.forEach(r), T.forEach(r), this.h();
    },
    h() {
      o(t, "class", "text-sm font-medium w-3/6"),
        o(x, "class", "text-sm font-medium w-2/6"),
        o(w, "class", "text-sm font-medium w-1/6"),
        o(l, "class", "flex justify-between items-center p-2"),
        o(e, "class", "mt-2");
    },
    m(p, T) {
      U(p, e, T),
        s(e, l),
        s(l, t),
        s(t, a),
        s(t, m),
        s(l, y),
        s(l, x),
        s(x, I),
        s(l, C),
        s(l, w),
        s(w, H);
    },
    p(p, T) {
      T & 1024 && J(m, p[10]),
        T & 1024 &&
          D !== (D = -(-p[14] * Math.floor(p[10] / 2)) + "") &&
          J(H, D);
    },
    d(p) {
      p && r(e);
    },
  };
}
function ws(i) {
  let e,
    l,
    t,
    a,
    m,
    y,
    x,
    I,
    C,
    w = Js * Math.floor(i[11] / 3) + "",
    D;
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (a = c("Keeper Save x 3")),
        (m = v()),
        (y = n("div")),
        (x = c("-")),
        (I = v()),
        (C = n("div")),
        (D = c(w)),
        this.h();
    },
    l(H) {
      e = f(H, "DIV", { class: !0 });
      var p = d(e);
      l = f(p, "DIV", { class: !0 });
      var T = d(l);
      t = f(T, "DIV", { class: !0 });
      var F = d(t);
      (a = u(F, "Keeper Save x 3")),
        F.forEach(r),
        (m = h(T)),
        (y = f(T, "DIV", { class: !0 }));
      var $ = d(y);
      (x = u($, "-")),
        $.forEach(r),
        (I = h(T)),
        (C = f(T, "DIV", { class: !0 }));
      var M = d(C);
      (D = u(M, w)), M.forEach(r), T.forEach(r), p.forEach(r), this.h();
    },
    h() {
      o(t, "class", "text-sm font-medium w-3/6"),
        o(y, "class", "text-sm font-medium w-2/6"),
        o(C, "class", "text-sm font-medium w-1/6"),
        o(l, "class", "flex justify-between items-center p-2"),
        o(e, "class", "mt-2");
    },
    m(H, p) {
      U(H, e, p),
        s(e, l),
        s(l, t),
        s(t, a),
        s(l, m),
        s(l, y),
        s(y, x),
        s(l, I),
        s(l, C),
        s(C, D);
    },
    p(H, p) {
      p & 2048 && w !== (w = Js * Math.floor(H[11] / 3) + "") && J(D, w);
    },
    d(H) {
      H && r(e);
    },
  };
}
function Es(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Goal Scored")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "Goal Scored")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function ks(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Assist")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "Assist")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Ds(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Clean Sheet")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "Clean Sheet")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Is(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Penalty Save")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "Penalty Save")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Ts(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Penalty Missed")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "Penalty Missed")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Vs(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Yellow Card")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "Yellow Card")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Cs(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Red Card")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "Red Card")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Ns(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Own Goal")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "Own Goal")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function xs(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Highest Scoring Player")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "Highest Scoring Player")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Ps(i) {
  let e,
    l = i[21].eventEndMinute + "",
    t;
  return {
    c() {
      (e = n("div")), (t = c(l)), this.h();
    },
    l(a) {
      e = f(a, "DIV", { class: !0 });
      var m = d(e);
      (t = u(m, l)), m.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(a, m) {
      U(a, e, m), s(e, t);
    },
    p(a, m) {
      m & 512 && l !== (l = a[21].eventEndMinute + "") && J(t, l);
    },
    d(a) {
      a && r(e);
    },
  };
}
function Hs(i) {
  let e,
    l = i[21].eventEndMinute + "",
    t;
  return {
    c() {
      (e = n("div")), (t = c(l)), this.h();
    },
    l(a) {
      e = f(a, "DIV", { class: !0 });
      var m = d(e);
      (t = u(m, l)), m.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(a, m) {
      U(a, e, m), s(e, t);
    },
    p(a, m) {
      m & 512 && l !== (l = a[21].eventEndMinute + "") && J(t, l);
    },
    d(a) {
      a && r(e);
    },
  };
}
function Ss(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "-")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function $s(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "-")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Ms(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "-")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Fs(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "-")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function js(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "-")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function As(i) {
  let e,
    l = i[21].eventEndMinute + "",
    t;
  return {
    c() {
      (e = n("div")), (t = c(l)), this.h();
    },
    l(a) {
      e = f(a, "DIV", { class: !0 });
      var m = d(e);
      (t = u(m, l)), m.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(a, m) {
      U(a, e, m), s(e, t);
    },
    p(a, m) {
      m & 512 && l !== (l = a[21].eventEndMinute + "") && J(t, l);
    },
    d(a) {
      a && r(e);
    },
  };
}
function Gs(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, "-")), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Os(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(ti)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, ti)), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Bs(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(li)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, li)), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Ls(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(ei)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, ei)), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Us(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(Xs)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, Xs)), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Rs(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(i[13])), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, i[13])), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Ks(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(i[16])), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, i[16])), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function qs(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(i[12])), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, i[12])), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Ws(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(i[15])), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, i[15])), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Ys(i) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(Zs)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var a = d(e);
      (l = u(a, Zs)), a.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, a) {
      U(t, e, a), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function zs(i) {
  let e,
    l,
    t,
    a,
    m,
    y,
    x,
    I,
    C,
    w,
    D,
    H,
    p,
    T,
    F,
    $,
    M,
    V,
    j,
    P,
    W,
    g,
    b,
    _,
    N,
    G,
    A,
    S,
    B,
    me,
    Ae,
    ae = i[21].eventType === 1 && Es(),
    X = i[21].eventType === 2 && ks(),
    Ve = i[21].eventType === 5 && Ds(),
    z = i[21].eventType === 6 && Is(),
    de = i[21].eventType === 7 && Ts(),
    Ce = i[21].eventType === 8 && Vs(),
    ce = i[21].eventType === 9 && Cs(),
    re = i[21].eventType === 10 && Ns(),
    Ie = i[21].eventType === 11 && xs(),
    ve = i[21].eventType === 1 && Ps(i),
    oe = i[21].eventType === 2 && Hs(i),
    ee = i[21].eventType === 5 && Ss(),
    he = i[21].eventType === 6 && $s(),
    pe = i[21].eventType === 7 && Ms(),
    Ne = i[21].eventType === 8 && Fs(),
    _e = i[21].eventType === 9 && js(),
    ne = i[21].eventType === 10 && As(i),
    xe = i[21].eventType === 11 && Gs(),
    Y = i[21].eventType === 1 && Os(),
    ue = i[21].eventType === 2 && Bs(),
    Te = i[21].eventType === 5 && Ls(),
    we = i[21].eventType === 6 && Us(),
    fe = i[21].eventType === 7 && Rs(i),
    ge = i[21].eventType === 8 && Ks(i),
    be = i[21].eventType === 9 && qs(i),
    Ee = i[21].eventType === 10 && Ws(i),
    te = i[21].eventType === 11 && Ys();
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        ae && ae.c(),
        (a = v()),
        X && X.c(),
        (m = v()),
        Ve && Ve.c(),
        (y = v()),
        z && z.c(),
        (x = v()),
        de && de.c(),
        (I = v()),
        Ce && Ce.c(),
        (C = v()),
        ce && ce.c(),
        (w = v()),
        re && re.c(),
        (D = v()),
        Ie && Ie.c(),
        (H = v()),
        (p = n("div")),
        ve && ve.c(),
        (T = v()),
        oe && oe.c(),
        (F = v()),
        ee && ee.c(),
        ($ = v()),
        he && he.c(),
        (M = v()),
        pe && pe.c(),
        (V = v()),
        Ne && Ne.c(),
        (j = v()),
        _e && _e.c(),
        (P = v()),
        ne && ne.c(),
        (W = v()),
        xe && xe.c(),
        (g = v()),
        (b = n("div")),
        Y && Y.c(),
        (_ = v()),
        ue && ue.c(),
        (N = v()),
        Te && Te.c(),
        (G = v()),
        we && we.c(),
        (A = v()),
        fe && fe.c(),
        (S = v()),
        ge && ge.c(),
        (B = v()),
        be && be.c(),
        (me = v()),
        Ee && Ee.c(),
        (Ae = v()),
        te && te.c(),
        this.h();
    },
    l(E) {
      e = f(E, "DIV", { class: !0 });
      var se = d(e);
      l = f(se, "DIV", { class: !0 });
      var Re = d(l);
      t = f(Re, "DIV", { class: !0 });
      var Q = d(t);
      ae && ae.l(Q),
        (a = h(Q)),
        X && X.l(Q),
        (m = h(Q)),
        Ve && Ve.l(Q),
        (y = h(Q)),
        z && z.l(Q),
        (x = h(Q)),
        de && de.l(Q),
        (I = h(Q)),
        Ce && Ce.l(Q),
        (C = h(Q)),
        ce && ce.l(Q),
        (w = h(Q)),
        re && re.l(Q),
        (D = h(Q)),
        Ie && Ie.l(Q),
        Q.forEach(r),
        (H = h(Re)),
        (p = f(Re, "DIV", { class: !0 }));
      var q = d(p);
      ve && ve.l(q),
        (T = h(q)),
        oe && oe.l(q),
        (F = h(q)),
        ee && ee.l(q),
        ($ = h(q)),
        he && he.l(q),
        (M = h(q)),
        pe && pe.l(q),
        (V = h(q)),
        Ne && Ne.l(q),
        (j = h(q)),
        _e && _e.l(q),
        (P = h(q)),
        ne && ne.l(q),
        (W = h(q)),
        xe && xe.l(q),
        q.forEach(r),
        (g = h(Re)),
        (b = f(Re, "DIV", { class: !0 }));
      var Z = d(b);
      Y && Y.l(Z),
        (_ = h(Z)),
        ue && ue.l(Z),
        (N = h(Z)),
        Te && Te.l(Z),
        (G = h(Z)),
        we && we.l(Z),
        (A = h(Z)),
        fe && fe.l(Z),
        (S = h(Z)),
        ge && ge.l(Z),
        (B = h(Z)),
        be && be.l(Z),
        (me = h(Z)),
        Ee && Ee.l(Z),
        (Ae = h(Z)),
        te && te.l(Z),
        Z.forEach(r),
        Re.forEach(r),
        se.forEach(r),
        this.h();
    },
    h() {
      o(t, "class", "text-sm font-medium w-3/6"),
        o(p, "class", "text-sm font-medium w-2/6"),
        o(b, "class", "text-sm font-medium w-1/6"),
        o(l, "class", "flex justify-between items-center p-2"),
        o(e, "class", "mt-2");
    },
    m(E, se) {
      U(E, e, se),
        s(e, l),
        s(l, t),
        ae && ae.m(t, null),
        s(t, a),
        X && X.m(t, null),
        s(t, m),
        Ve && Ve.m(t, null),
        s(t, y),
        z && z.m(t, null),
        s(t, x),
        de && de.m(t, null),
        s(t, I),
        Ce && Ce.m(t, null),
        s(t, C),
        ce && ce.m(t, null),
        s(t, w),
        re && re.m(t, null),
        s(t, D),
        Ie && Ie.m(t, null),
        s(l, H),
        s(l, p),
        ve && ve.m(p, null),
        s(p, T),
        oe && oe.m(p, null),
        s(p, F),
        ee && ee.m(p, null),
        s(p, $),
        he && he.m(p, null),
        s(p, M),
        pe && pe.m(p, null),
        s(p, V),
        Ne && Ne.m(p, null),
        s(p, j),
        _e && _e.m(p, null),
        s(p, P),
        ne && ne.m(p, null),
        s(p, W),
        xe && xe.m(p, null),
        s(l, g),
        s(l, b),
        Y && Y.m(b, null),
        s(b, _),
        ue && ue.m(b, null),
        s(b, N),
        Te && Te.m(b, null),
        s(b, G),
        we && we.m(b, null),
        s(b, A),
        fe && fe.m(b, null),
        s(b, S),
        ge && ge.m(b, null),
        s(b, B),
        be && be.m(b, null),
        s(b, me),
        Ee && Ee.m(b, null),
        s(b, Ae),
        te && te.m(b, null);
    },
    p(E, se) {
      E[21].eventType === 1
        ? ae || ((ae = Es()), ae.c(), ae.m(t, a))
        : ae && (ae.d(1), (ae = null)),
        E[21].eventType === 2
          ? X || ((X = ks()), X.c(), X.m(t, m))
          : X && (X.d(1), (X = null)),
        E[21].eventType === 5
          ? Ve || ((Ve = Ds()), Ve.c(), Ve.m(t, y))
          : Ve && (Ve.d(1), (Ve = null)),
        E[21].eventType === 6
          ? z || ((z = Is()), z.c(), z.m(t, x))
          : z && (z.d(1), (z = null)),
        E[21].eventType === 7
          ? de || ((de = Ts()), de.c(), de.m(t, I))
          : de && (de.d(1), (de = null)),
        E[21].eventType === 8
          ? Ce || ((Ce = Vs()), Ce.c(), Ce.m(t, C))
          : Ce && (Ce.d(1), (Ce = null)),
        E[21].eventType === 9
          ? ce || ((ce = Cs()), ce.c(), ce.m(t, w))
          : ce && (ce.d(1), (ce = null)),
        E[21].eventType === 10
          ? re || ((re = Ns()), re.c(), re.m(t, D))
          : re && (re.d(1), (re = null)),
        E[21].eventType === 11
          ? Ie || ((Ie = xs()), Ie.c(), Ie.m(t, null))
          : Ie && (Ie.d(1), (Ie = null)),
        E[21].eventType === 1
          ? ve
            ? ve.p(E, se)
            : ((ve = Ps(E)), ve.c(), ve.m(p, T))
          : ve && (ve.d(1), (ve = null)),
        E[21].eventType === 2
          ? oe
            ? oe.p(E, se)
            : ((oe = Hs(E)), oe.c(), oe.m(p, F))
          : oe && (oe.d(1), (oe = null)),
        E[21].eventType === 5
          ? ee || ((ee = Ss()), ee.c(), ee.m(p, $))
          : ee && (ee.d(1), (ee = null)),
        E[21].eventType === 6
          ? he || ((he = $s()), he.c(), he.m(p, M))
          : he && (he.d(1), (he = null)),
        E[21].eventType === 7
          ? pe || ((pe = Ms()), pe.c(), pe.m(p, V))
          : pe && (pe.d(1), (pe = null)),
        E[21].eventType === 8
          ? Ne || ((Ne = Fs()), Ne.c(), Ne.m(p, j))
          : Ne && (Ne.d(1), (Ne = null)),
        E[21].eventType === 9
          ? _e || ((_e = js()), _e.c(), _e.m(p, P))
          : _e && (_e.d(1), (_e = null)),
        E[21].eventType === 10
          ? ne
            ? ne.p(E, se)
            : ((ne = As(E)), ne.c(), ne.m(p, W))
          : ne && (ne.d(1), (ne = null)),
        E[21].eventType === 11
          ? xe || ((xe = Gs()), xe.c(), xe.m(p, null))
          : xe && (xe.d(1), (xe = null)),
        E[21].eventType === 1
          ? Y
            ? Y.p(E, se)
            : ((Y = Os()), Y.c(), Y.m(b, _))
          : Y && (Y.d(1), (Y = null)),
        E[21].eventType === 2
          ? ue
            ? ue.p(E, se)
            : ((ue = Bs()), ue.c(), ue.m(b, N))
          : ue && (ue.d(1), (ue = null)),
        E[21].eventType === 5
          ? Te
            ? Te.p(E, se)
            : ((Te = Ls()), Te.c(), Te.m(b, G))
          : Te && (Te.d(1), (Te = null)),
        E[21].eventType === 6
          ? we
            ? we.p(E, se)
            : ((we = Us()), we.c(), we.m(b, A))
          : we && (we.d(1), (we = null)),
        E[21].eventType === 7
          ? fe
            ? fe.p(E, se)
            : ((fe = Rs(E)), fe.c(), fe.m(b, S))
          : fe && (fe.d(1), (fe = null)),
        E[21].eventType === 8
          ? ge
            ? ge.p(E, se)
            : ((ge = Ks(E)), ge.c(), ge.m(b, B))
          : ge && (ge.d(1), (ge = null)),
        E[21].eventType === 9
          ? be
            ? be.p(E, se)
            : ((be = qs(E)), be.c(), be.m(b, me))
          : be && (be.d(1), (be = null)),
        E[21].eventType === 10
          ? Ee
            ? Ee.p(E, se)
            : ((Ee = Ws(E)), Ee.c(), Ee.m(b, Ae))
          : Ee && (Ee.d(1), (Ee = null)),
        E[21].eventType === 11
          ? te
            ? te.p(E, se)
            : ((te = Ys()), te.c(), te.m(b, null))
          : te && (te.d(1), (te = null));
    },
    d(E) {
      E && r(e),
        ae && ae.d(),
        X && X.d(),
        Ve && Ve.d(),
        z && z.d(),
        de && de.d(),
        Ce && Ce.d(),
        ce && ce.d(),
        re && re.d(),
        Ie && Ie.d(),
        ve && ve.d(),
        oe && oe.d(),
        ee && ee.d(),
        he && he.d(),
        pe && pe.d(),
        Ne && Ne.d(),
        _e && _e.d(),
        ne && ne.d(),
        xe && xe.d(),
        Y && Y.d(),
        ue && ue.d(),
        Te && Te.d(),
        we && we.d(),
        fe && fe.d(),
        ge && ge.d(),
        be && be.d(),
        Ee && Ee.d(),
        te && te.d();
    },
  };
}
function Ei(i) {
  let e,
    l,
    t = i[0] && gs(i);
  return {
    c() {
      t && t.c(), (e = fl());
    },
    l(a) {
      t && t.l(a), (e = fl());
    },
    m(a, m) {
      t && t.m(a, m), U(a, e, m), (l = !0);
    },
    p(a, [m]) {
      a[0]
        ? t
          ? (t.p(a, m), m & 1 && ie(t, 1))
          : ((t = gs(a)), t.c(), ie(t, 1), t.m(e.parentNode, e))
        : t &&
          (Pt(),
          De(t, 1, 1, () => {
            t = null;
          }),
          Ht());
    },
    i(a) {
      l || (ie(t), (l = !0));
    },
    o(a) {
      De(t), (l = !1);
    },
    d(a) {
      t && t.d(a), a && r(e);
    },
  };
}
let Qs = 5,
  Js = 5,
  Xs = 20,
  Zs = 25,
  ei = 10;
var ti = 0,
  li = 0;
function ki(i, e, l) {
  let { showModal: t } = e,
    { closeDetailModal: a } = e,
    { playerDetail: m } = e,
    { gameweekDetail: y } = e,
    { playerTeam: x } = e,
    { opponentTeam: I } = e,
    { gameweek: C = 0 } = e,
    { seasonName: w = "" } = e,
    D = [],
    H = [],
    p = [],
    T = [],
    F = 0,
    $ = 0,
    M = -20,
    V = -10,
    j = -15,
    P = -10,
    W = -5;
  function g(_) {
    cs.call(this, i, _);
  }
  function b(_) {
    cs.call(this, i, _);
  }
  return (
    (i.$$set = (_) => {
      "showModal" in _ && l(0, (t = _.showModal)),
        "closeDetailModal" in _ && l(1, (a = _.closeDetailModal)),
        "playerDetail" in _ && l(2, (m = _.playerDetail)),
        "gameweekDetail" in _ && l(3, (y = _.gameweekDetail)),
        "playerTeam" in _ && l(4, (x = _.playerTeam)),
        "opponentTeam" in _ && l(5, (I = _.opponentTeam)),
        "gameweek" in _ && l(6, (C = _.gameweek)),
        "seasonName" in _ && l(7, (w = _.seasonName));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 397064 &&
        y &&
        (l(8, (D = [])),
        l(17, (H = [])),
        l(18, (p = [])),
        l(9, (T = [])),
        l(10, (F = 0)),
        l(11, ($ = 0)),
        y.events.forEach((_) => {
          switch (_.eventType) {
            case 0:
              D.push(_);
              break;
            case 3:
              H.push(_), l(10, F++, F);
              break;
            case 4:
              p.push(_), l(11, $++, $);
              break;
            default:
              T.push(_);
              break;
          }
        }),
        H.sort((_, N) => _.eventEndMinute - N.eventEndMinute),
        p.sort((_, N) => _.eventEndMinute - N.eventEndMinute),
        T.sort(
          (_, N) =>
            _.eventType - N.eventType || _.eventEndMinute - N.eventEndMinute
        ));
    }),
    [t, a, m, y, x, I, C, w, D, T, F, $, M, V, j, P, W, H, p, g, b]
  );
}
class Di extends Cl {
  constructor(e) {
    super(),
      Nl(this, e, ki, Ei, xl, {
        showModal: 0,
        closeDetailModal: 1,
        playerDetail: 2,
        gameweekDetail: 3,
        playerTeam: 4,
        opponentTeam: 5,
        gameweek: 6,
        seasonName: 7,
      });
  }
}
function si(i, e, l) {
  const t = i.slice();
  t[23] = e[l];
  const a = t[7](t[23].fixtureId);
  return (t[24] = a), t;
}
function Ii(i) {
  let e,
    l,
    t,
    a,
    m,
    y,
    x,
    I,
    C,
    w,
    D,
    H,
    p,
    T,
    F,
    $,
    M,
    V = i[3] && ii(i),
    j = i[3].gameweeks,
    P = [];
  for (let g = 0; g < j.length; g += 1) P[g] = ai(si(i, j, g));
  const W = (g) =>
    De(P[g], 1, 1, () => {
      P[g] = null;
    });
  return {
    c() {
      V && V.c(),
        (e = v()),
        (l = n("div")),
        (t = n("div")),
        (a = n("div")),
        (m = n("div")),
        (y = c("Gameweek")),
        (x = v()),
        (I = n("div")),
        (C = c("Opponent")),
        (w = v()),
        (D = n("div")),
        (H = c("Points")),
        (p = v()),
        (T = n("div")),
        (F = c(" ")),
        ($ = v());
      for (let g = 0; g < P.length; g += 1) P[g].c();
      this.h();
    },
    l(g) {
      V && V.l(g), (e = h(g)), (l = f(g, "DIV", { class: !0 }));
      var b = d(l);
      t = f(b, "DIV", { class: !0 });
      var _ = d(t);
      a = f(_, "DIV", { class: !0 });
      var N = d(a);
      m = f(N, "DIV", { class: !0 });
      var G = d(m);
      (y = u(G, "Gameweek")),
        G.forEach(r),
        (x = h(N)),
        (I = f(N, "DIV", { class: !0 }));
      var A = d(I);
      (C = u(A, "Opponent")),
        A.forEach(r),
        (w = h(N)),
        (D = f(N, "DIV", { class: !0 }));
      var S = d(D);
      (H = u(S, "Points")),
        S.forEach(r),
        (p = h(N)),
        (T = f(N, "DIV", { class: !0 }));
      var B = d(T);
      (F = u(B, " ")), B.forEach(r), N.forEach(r), ($ = h(_));
      for (let me = 0; me < P.length; me += 1) P[me].l(_);
      _.forEach(r), b.forEach(r), this.h();
    },
    h() {
      o(m, "class", "w-1/4 px-4"),
        o(I, "class", "w-1/4 px-4"),
        o(D, "class", "w-1/4 px-4"),
        o(T, "class", "w-1/4 px-4"),
        o(
          a,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        o(t, "class", "overflow-x-auto flex-1"),
        o(l, "class", "flex flex-col space-y-4 text-lg mt-4");
    },
    m(g, b) {
      V && V.m(g, b),
        U(g, e, b),
        U(g, l, b),
        s(l, t),
        s(t, a),
        s(a, m),
        s(m, y),
        s(a, x),
        s(a, I),
        s(I, C),
        s(a, w),
        s(a, D),
        s(D, H),
        s(a, p),
        s(a, T),
        s(T, F),
        s(t, $);
      for (let _ = 0; _ < P.length; _ += 1) P[_] && P[_].m(t, null);
      M = !0;
    },
    p(g, b) {
      if (
        (g[3]
          ? V
            ? (V.p(g, b), b & 8 && ie(V, 1))
            : ((V = ii(g)), V.c(), ie(V, 1), V.m(e.parentNode, e))
          : V &&
            (Pt(),
            De(V, 1, 1, () => {
              V = null;
            }),
            Ht()),
        b & 392)
      ) {
        j = g[3].gameweeks;
        let _;
        for (_ = 0; _ < j.length; _ += 1) {
          const N = si(g, j, _);
          P[_]
            ? (P[_].p(N, b), ie(P[_], 1))
            : ((P[_] = ai(N)), P[_].c(), ie(P[_], 1), P[_].m(t, null));
        }
        for (Pt(), _ = j.length; _ < P.length; _ += 1) W(_);
        Ht();
      }
    },
    i(g) {
      if (!M) {
        ie(V);
        for (let b = 0; b < j.length; b += 1) ie(P[b]);
        M = !0;
      }
    },
    o(g) {
      De(V), (P = P.filter(Boolean));
      for (let b = 0; b < P.length; b += 1) De(P[b]);
      M = !1;
    },
    d(g) {
      V && V.d(g), g && r(e), g && r(l), Dl(P, g);
    },
  };
}
function Ti(i) {
  let e, l;
  return (
    (e = new vi({})),
    {
      c() {
        Be(e.$$.fragment);
      },
      l(t) {
        Je(e.$$.fragment, t);
      },
      m(t, a) {
        Le(e, t, a), (l = !0);
      },
      p: nt,
      i(t) {
        l || (ie(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        De(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ue(e, t);
      },
    }
  );
}
function ii(i) {
  let e, l;
  return (
    (e = new Di({
      props: {
        gameweekDetail: i[3].gameweeks.find(i[11]) ?? null,
        opponentTeam: i[4],
        playerTeam: i[6](i[3].teamId) ?? null,
        closeDetailModal: i[9],
        showModal: i[5],
        playerDetail: i[3],
        gameweek: i[1],
        seasonName: i[2]?.name,
      },
    })),
    {
      c() {
        Be(e.$$.fragment);
      },
      l(t) {
        Je(e.$$.fragment, t);
      },
      m(t, a) {
        Le(e, t, a), (l = !0);
      },
      p(t, a) {
        const m = {};
        a & 10 && (m.gameweekDetail = t[3].gameweeks.find(t[11]) ?? null),
          a & 16 && (m.opponentTeam = t[4]),
          a & 8 && (m.playerTeam = t[6](t[3].teamId) ?? null),
          a & 32 && (m.showModal = t[5]),
          a & 8 && (m.playerDetail = t[3]),
          a & 2 && (m.gameweek = t[1]),
          a & 4 && (m.seasonName = t[2]?.name),
          e.$set(m);
      },
      i(t) {
        l || (ie(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        De(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ue(e, t);
      },
    }
  );
}
function ai(i) {
  let e,
    l,
    t = i[23].number + "",
    a,
    m,
    y,
    x,
    I,
    C = i[24]?.friendlyName + "",
    w,
    D,
    H,
    p = i[23].points + "",
    T,
    F,
    $,
    M,
    V,
    j,
    P,
    W,
    g,
    b,
    _;
  (x = new Jt({
    props: {
      className: "w-6 mr-2",
      primaryColour: i[24]?.primaryColourHex,
      secondaryColour: i[24]?.secondaryColourHex,
      thirdColour: i[24]?.thirdColourHex,
    },
  })),
    (j = new yi({ props: { className: "w-6 mr-2" } }));
  function N() {
    return i[12](i[23], i[24]);
  }
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (a = c(t)),
        (m = v()),
        (y = n("div")),
        Be(x.$$.fragment),
        (I = v()),
        (w = c(C)),
        (D = v()),
        (H = n("div")),
        (T = c(p)),
        (F = v()),
        ($ = n("div")),
        (M = n("button")),
        (V = n("span")),
        Be(j.$$.fragment),
        (P = c("View Details")),
        (W = v()),
        this.h();
    },
    l(G) {
      e = f(G, "DIV", { class: !0 });
      var A = d(e);
      l = f(A, "DIV", { class: !0 });
      var S = d(l);
      (a = u(S, t)), S.forEach(r), (m = h(A)), (y = f(A, "DIV", { class: !0 }));
      var B = d(y);
      Je(x.$$.fragment, B),
        (I = h(B)),
        (w = u(B, C)),
        B.forEach(r),
        (D = h(A)),
        (H = f(A, "DIV", { class: !0 }));
      var me = d(H);
      (T = u(me, p)),
        me.forEach(r),
        (F = h(A)),
        ($ = f(A, "DIV", { class: !0 }));
      var Ae = d($);
      M = f(Ae, "BUTTON", {});
      var ae = d(M);
      V = f(ae, "SPAN", { class: !0 });
      var X = d(V);
      Je(j.$$.fragment, X),
        (P = u(X, "View Details")),
        X.forEach(r),
        ae.forEach(r),
        Ae.forEach(r),
        (W = h(A)),
        A.forEach(r),
        this.h();
    },
    h() {
      o(l, "class", "w-1/4 px-4"),
        o(y, "class", "w-1/4 px-4 flex items-center"),
        o(H, "class", "w-1/4 px-4"),
        o(V, "class", "flex items-center"),
        o($, "class", "w-1/4 px-4 flex items-center"),
        o(
          e,
          "class",
          "flex items-center justify-between p-2 py-4 border-b border-gray-700 cursor-pointer"
        );
    },
    m(G, A) {
      U(G, e, A),
        s(e, l),
        s(l, a),
        s(e, m),
        s(e, y),
        Le(x, y, null),
        s(y, I),
        s(y, w),
        s(e, D),
        s(e, H),
        s(H, T),
        s(e, F),
        s(e, $),
        s($, M),
        s(M, V),
        Le(j, V, null),
        s(V, P),
        s(e, W),
        (g = !0),
        b || ((_ = gt(M, "click", N)), (b = !0));
    },
    p(G, A) {
      (i = G), (!g || A & 8) && t !== (t = i[23].number + "") && J(a, t);
      const S = {};
      A & 8 && (S.primaryColour = i[24]?.primaryColourHex),
        A & 8 && (S.secondaryColour = i[24]?.secondaryColourHex),
        A & 8 && (S.thirdColour = i[24]?.thirdColourHex),
        x.$set(S),
        (!g || A & 8) && C !== (C = i[24]?.friendlyName + "") && J(w, C),
        (!g || A & 8) && p !== (p = i[23].points + "") && J(T, p);
    },
    i(G) {
      g || (ie(x.$$.fragment, G), ie(j.$$.fragment, G), (g = !0));
    },
    o(G) {
      De(x.$$.fragment, G), De(j.$$.fragment, G), (g = !1);
    },
    d(G) {
      G && r(e), Ue(x), Ue(j), (b = !1), _();
    },
  };
}
function Vi(i) {
  let e, l, t, a;
  const m = [Ti, Ii],
    y = [];
  function x(I, C) {
    return I[0] ? 0 : 1;
  }
  return (
    (e = x(i)),
    (l = y[e] = m[e](i)),
    {
      c() {
        l.c(), (t = fl());
      },
      l(I) {
        l.l(I), (t = fl());
      },
      m(I, C) {
        y[e].m(I, C), U(I, t, C), (a = !0);
      },
      p(I, [C]) {
        let w = e;
        (e = x(I)),
          e === w
            ? y[e].p(I, C)
            : (Pt(),
              De(y[w], 1, 1, () => {
                y[w] = null;
              }),
              Ht(),
              (l = y[e]),
              l ? l.p(I, C) : ((l = y[e] = m[e](I)), l.c()),
              ie(l, 1),
              l.m(t.parentNode, t));
      },
      i(I) {
        a || (ie(l), (a = !0));
      },
      o(I) {
        De(l), (a = !1);
      },
      d(I) {
        y[e].d(I), I && r(t);
      },
    }
  );
}
function Ci(i, e, l) {
  let t, a;
  oi(i, fi, (N) => l(10, (a = N)));
  let m = !0,
    y = [],
    x = [],
    I,
    C = 1,
    w = null,
    D = [],
    H,
    p = null,
    T = new Map(),
    F = !1,
    $,
    M,
    V;
  ni(async () => {
    try {
      await Tl.sync(),
        await Vl.sync(),
        await Il.sync(),
        ($ = Tl.subscribe((N) => {
          y = N;
        })),
        (M = Vl.subscribe((N) => {
          (x = N),
            (D = x.map((G) => ({
              fixture: G,
              homeTeam: j(G.homeTeamId),
              awayTeam: j(G.awayTeamId),
            })));
        })),
        (V = Il.subscribe((N) => {
          I = N;
        })),
        l(3, (H = await ci.getPlayerDetails(t, I?.activeSeason.id ?? 0))),
        l(1, (C = I?.activeGameweek ?? C)),
        l(2, (w = I?.activeSeason ?? w));
    } catch (N) {
      di.show("Error fetching player gameweek history.", "error"),
        console.error("Error fetching player gameweek history:", N);
    } finally {
      l(0, (m = !1));
    }
  }),
    mi(() => {
      $?.(), M?.(), V?.();
    });
  function j(N) {
    return y.find((G) => G.id === N);
  }
  function P(N) {
    if (T.has(N)) return T.get(N);
    let G = D.find((B) => B.fixture.id === N),
      A = G?.homeTeam?.id === H.teamId ? G?.awayTeam?.id : G?.homeTeam?.id,
      S = y.find((B) => B.id === A);
    return S
      ? (T.set(N, S), S)
      : {
          id: 0,
          secondaryColourHex: "",
          name: "",
          friendlyName: "",
          thirdColourHex: "",
          abbreviatedName: "",
          shirtType: 0,
          primaryColourHex: "",
        };
  }
  function W(N, G) {
    l(4, (p = G)), l(5, (F = !0));
  }
  function g() {
    l(5, (F = !1));
  }
  const b = (N) => N.number === C,
    _ = (N, G) => W(N, G);
  return (
    (i.$$.update = () => {
      i.$$.dirty & 1024 && (t = Number(a.url.searchParams.get("id")));
    }),
    [m, C, w, H, p, F, j, P, W, g, a, b, _]
  );
}
class Ni extends Cl {
  constructor(e) {
    super(), Nl(this, e, Ci, Vi, xl, {});
  }
}
function ri(i) {
  let e, l;
  return (
    (e = new Ni({})),
    {
      c() {
        Be(e.$$.fragment);
      },
      l(t) {
        Je(e.$$.fragment, t);
      },
      m(t, a) {
        Le(e, t, a), (l = !0);
      },
      i(t) {
        l || (ie(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        De(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ue(e, t);
      },
    }
  );
}
function xi(i) {
  let e,
    l,
    t,
    a,
    m,
    y = ms(i[0]?.position ?? -1) + "",
    x,
    I,
    C,
    w,
    D,
    H,
    p,
    T = i[0]?.shirtNumber + "",
    F,
    $,
    M,
    V,
    j,
    P,
    W = i[1]?.name + "",
    g,
    b,
    _,
    N = i[0]?.lastName + "",
    G,
    A,
    S,
    B,
    me = i[0]?.firstName + "",
    Ae,
    ae,
    X,
    Ve,
    z,
    de,
    Ce,
    ce,
    re,
    Ie,
    ve = (Number(i[0]?.value ?? 0) / 4).toFixed(2) + "",
    oe,
    ee,
    he,
    pe,
    Ne,
    _e,
    ne,
    xe,
    Y,
    ue,
    Te,
    we,
    fe,
    ge = vs(Number(i[0]?.dateOfBirth ?? 0)) + "",
    be,
    Ee,
    te,
    E = hs(Number(i[0]?.dateOfBirth ?? 0)) + "",
    se,
    Re,
    Q,
    q,
    Z,
    bt,
    It,
    We,
    $e,
    st,
    Me,
    Xe,
    Tt,
    it,
    ft,
    Ye,
    He,
    Se,
    Pe,
    Ke,
    ye,
    L,
    le,
    O,
    Oe,
    K,
    Ge,
    at = (i[2] ? i[2].abbreviatedName : "") + "",
    dt,
    ct,
    yt,
    Ze,
    ut,
    mt,
    rt,
    tt,
    et = (i[3] ? i[3].abbreviatedName : "") + "",
    Vt,
    Ct,
    St,
    ot,
    wt,
    ze,
    vt,
    $t,
    Mt,
    qe,
    Qe,
    Xt,
    Ft,
    ul,
    ml,
    Zt,
    jt,
    vl,
    hl,
    el,
    At,
    pl,
    _l,
    Et,
    tl,
    gl,
    ll,
    sl,
    Nt,
    ht,
    Gt,
    xt,
    kt,
    bl,
    il,
    al,
    yl,
    ke,
    wl,
    Pl;
  w = new wi({
    props: {
      className: "h-10",
      primaryColour: i[1]?.primaryColourHex,
      secondaryColour: i[1]?.secondaryColourHex,
      thirdColour: i[1]?.thirdColourHex,
    },
  });
  var Ot = cl(i[0]?.nationality ?? "");
  function Hl(k) {
    return { props: { class: "w-4 h-4 mr-1", size: "100" } };
  }
  Ot && (B = dl(Ot, Hl())),
    (Xe = new Jt({
      props: {
        primaryColour: i[2] ? i[2].primaryColourHex : "",
        secondaryColour: i[2] ? i[2].secondaryColourHex : "",
        thirdColour: i[2] ? i[2].thirdColourHex : "",
      },
    })),
    (ye = new Jt({
      props: {
        primaryColour: i[3] ? i[3].primaryColourHex : "",
        secondaryColour: i[3] ? i[3].secondaryColourHex : "",
        thirdColour: i[3] ? i[3].thirdColourHex : "",
      },
    }));
  let Fe = i[9] === "history" && ri();
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (a = n("div")),
        (m = n("p")),
        (x = c(y)),
        (I = v()),
        (C = n("div")),
        Be(w.$$.fragment),
        (D = v()),
        (H = n("p")),
        (p = c("Shirt: ")),
        (F = c(T)),
        ($ = v()),
        (M = n("div")),
        (V = v()),
        (j = n("div")),
        (P = n("p")),
        (g = c(W)),
        (b = v()),
        (_ = n("p")),
        (G = c(N)),
        (A = v()),
        (S = n("p")),
        B && Be(B.$$.fragment),
        (Ae = c(me)),
        (ae = v()),
        (X = n("div")),
        (Ve = v()),
        (z = n("div")),
        (de = n("p")),
        (Ce = c("Value")),
        (ce = v()),
        (re = n("p")),
        (Ie = c("£")),
        (oe = c(ve)),
        (ee = c("m")),
        (he = v()),
        (pe = n("p")),
        (Ne = c("Weekly Change: 0%")),
        (_e = v()),
        (ne = n("div")),
        (xe = v()),
        (Y = n("div")),
        (ue = n("p")),
        (Te = c("Age")),
        (we = v()),
        (fe = n("p")),
        (be = c(ge)),
        (Ee = v()),
        (te = n("p")),
        (se = c(E)),
        (Re = v()),
        (Q = n("div")),
        (q = n("div")),
        (Z = n("p")),
        (bt = c("Next Game:")),
        (It = v()),
        (We = n("div")),
        ($e = n("div")),
        (st = n("div")),
        (Me = n("a")),
        Be(Xe.$$.fragment),
        (it = v()),
        (ft = n("div")),
        (Ye = n("p")),
        (He = c("v")),
        (Se = v()),
        (Pe = n("div")),
        (Ke = n("a")),
        Be(ye.$$.fragment),
        (le = v()),
        (O = n("div")),
        (Oe = n("div")),
        (K = n("p")),
        (Ge = n("a")),
        (dt = c(at)),
        (yt = v()),
        (Ze = n("div")),
        (ut = v()),
        (mt = n("div")),
        (rt = n("p")),
        (tt = n("a")),
        (Vt = c(et)),
        (St = v()),
        (ot = n("div")),
        (wt = v()),
        (ze = n("div")),
        (vt = n("p")),
        ($t = c("Kick Off:")),
        (Mt = v()),
        (qe = n("div")),
        (Qe = n("p")),
        (Xt = c(i[4])),
        (Ft = n("span")),
        (ul = c("d")),
        (ml = c(`
              : `)),
        (Zt = c(i[5])),
        (jt = n("span")),
        (vl = c("h")),
        (hl = c(`
              : `)),
        (el = c(i[6])),
        (At = n("span")),
        (pl = c("m")),
        (_l = v()),
        (Et = n("p")),
        (tl = c(i[7])),
        (gl = c(" | ")),
        (ll = c(i[8])),
        (sl = v()),
        (Nt = n("div")),
        (ht = n("div")),
        (Gt = n("ul")),
        (xt = n("li")),
        (kt = n("button")),
        (bl = c("Gameweek History")),
        (yl = v()),
        Fe && Fe.c(),
        this.h();
    },
    l(k) {
      e = f(k, "DIV", { class: !0 });
      var R = d(e);
      l = f(R, "DIV", { class: !0 });
      var pt = d(l);
      t = f(pt, "DIV", { class: !0 });
      var je = d(t);
      a = f(je, "DIV", { class: !0 });
      var lt = d(a);
      m = f(lt, "P", { class: !0 });
      var zt = d(m);
      (x = u(zt, y)),
        zt.forEach(r),
        (I = h(lt)),
        (C = f(lt, "DIV", { class: !0 }));
      var Sl = d(C);
      Je(w.$$.fragment, Sl),
        Sl.forEach(r),
        (D = h(lt)),
        (H = f(lt, "P", { class: !0 }));
      var El = d(H);
      (p = u(El, "Shirt: ")),
        (F = u(El, T)),
        El.forEach(r),
        lt.forEach(r),
        ($ = h(je)),
        (M = f(je, "DIV", { class: !0, style: !0 })),
        d(M).forEach(r),
        (V = h(je)),
        (j = f(je, "DIV", { class: !0 }));
      var Bt = d(j);
      P = f(Bt, "P", { class: !0 });
      var $l = d(P);
      (g = u($l, W)),
        $l.forEach(r),
        (b = h(Bt)),
        (_ = f(Bt, "P", { class: !0 }));
      var Ml = d(_);
      (G = u(Ml, N)),
        Ml.forEach(r),
        (A = h(Bt)),
        (S = f(Bt, "P", { class: !0 }));
      var kl = d(S);
      B && Je(B.$$.fragment, kl),
        (Ae = u(kl, me)),
        kl.forEach(r),
        Bt.forEach(r),
        (ae = h(je)),
        (X = f(je, "DIV", { class: !0, style: !0 })),
        d(X).forEach(r),
        (Ve = h(je)),
        (z = f(je, "DIV", { class: !0 }));
      var Lt = d(z);
      de = f(Lt, "P", { class: !0 });
      var Fl = d(de);
      (Ce = u(Fl, "Value")),
        Fl.forEach(r),
        (ce = h(Lt)),
        (re = f(Lt, "P", { class: !0 }));
      var rl = d(re);
      (Ie = u(rl, "£")),
        (oe = u(rl, ve)),
        (ee = u(rl, "m")),
        rl.forEach(r),
        (he = h(Lt)),
        (pe = f(Lt, "P", { class: !0 }));
      var jl = d(pe);
      (Ne = u(jl, "Weekly Change: 0%")),
        jl.forEach(r),
        Lt.forEach(r),
        (_e = h(je)),
        (ne = f(je, "DIV", { class: !0, style: !0 })),
        d(ne).forEach(r),
        (xe = h(je)),
        (Y = f(je, "DIV", { class: !0 }));
      var Ut = d(Y);
      ue = f(Ut, "P", { class: !0 });
      var Al = d(ue);
      (Te = u(Al, "Age")),
        Al.forEach(r),
        (we = h(Ut)),
        (fe = f(Ut, "P", { class: !0 }));
      var Gl = d(fe);
      (be = u(Gl, ge)),
        Gl.forEach(r),
        (Ee = h(Ut)),
        (te = f(Ut, "P", { class: !0 }));
      var Ol = d(te);
      (se = u(Ol, E)),
        Ol.forEach(r),
        Ut.forEach(r),
        je.forEach(r),
        (Re = h(pt)),
        (Q = f(pt, "DIV", { class: !0 }));
      var Rt = d(Q);
      q = f(Rt, "DIV", { class: !0 });
      var Kt = d(q);
      Z = f(Kt, "P", { class: !0 });
      var Bl = d(Z);
      (bt = u(Bl, "Next Game:")),
        Bl.forEach(r),
        (It = h(Kt)),
        (We = f(Kt, "DIV", { class: !0 }));
      var Ll = d(We);
      $e = f(Ll, "DIV", { class: !0 });
      var qt = d($e);
      st = f(qt, "DIV", { class: !0 });
      var Ul = d(st);
      Me = f(Ul, "A", { href: !0 });
      var Rl = d(Me);
      Je(Xe.$$.fragment, Rl),
        Rl.forEach(r),
        Ul.forEach(r),
        (it = h(qt)),
        (ft = f(qt, "DIV", { class: !0 }));
      var Kl = d(ft);
      Ye = f(Kl, "P", { class: !0 });
      var ql = d(Ye);
      (He = u(ql, "v")),
        ql.forEach(r),
        Kl.forEach(r),
        (Se = h(qt)),
        (Pe = f(qt, "DIV", { class: !0 }));
      var Wl = d(Pe);
      Ke = f(Wl, "A", { href: !0 });
      var Yl = d(Ke);
      Je(ye.$$.fragment, Yl),
        Yl.forEach(r),
        Wl.forEach(r),
        qt.forEach(r),
        Ll.forEach(r),
        (le = h(Kt)),
        (O = f(Kt, "DIV", { class: !0 }));
      var Wt = d(O);
      Oe = f(Wt, "DIV", { class: !0 });
      var zl = d(Oe);
      K = f(zl, "P", { class: !0 });
      var Ql = d(K);
      Ge = f(Ql, "A", { class: !0, href: !0 });
      var Jl = d(Ge);
      (dt = u(Jl, at)),
        Jl.forEach(r),
        Ql.forEach(r),
        zl.forEach(r),
        (yt = h(Wt)),
        (Ze = f(Wt, "DIV", { class: !0 })),
        d(Ze).forEach(r),
        (ut = h(Wt)),
        (mt = f(Wt, "DIV", { class: !0 }));
      var Xl = d(mt);
      rt = f(Xl, "P", { class: !0 });
      var Zl = d(rt);
      tt = f(Zl, "A", { class: !0, href: !0 });
      var es = d(tt);
      (Vt = u(es, et)),
        es.forEach(r),
        Zl.forEach(r),
        Xl.forEach(r),
        Wt.forEach(r),
        Kt.forEach(r),
        (St = h(Rt)),
        (ot = f(Rt, "DIV", { class: !0, style: !0 })),
        d(ot).forEach(r),
        (wt = h(Rt)),
        (ze = f(Rt, "DIV", { class: !0 }));
      var Yt = d(ze);
      vt = f(Yt, "P", { class: !0 });
      var ts = d(vt);
      ($t = u(ts, "Kick Off:")),
        ts.forEach(r),
        (Mt = h(Yt)),
        (qe = f(Yt, "DIV", { class: !0 }));
      var ls = d(qe);
      Qe = f(ls, "P", { class: !0 });
      var _t = d(Qe);
      (Xt = u(_t, i[4])), (Ft = f(_t, "SPAN", { class: !0 }));
      var ss = d(Ft);
      (ul = u(ss, "d")),
        ss.forEach(r),
        (ml = u(
          _t,
          `
              : `
        )),
        (Zt = u(_t, i[5])),
        (jt = f(_t, "SPAN", { class: !0 }));
      var is = d(jt);
      (vl = u(is, "h")),
        is.forEach(r),
        (hl = u(
          _t,
          `
              : `
        )),
        (el = u(_t, i[6])),
        (At = f(_t, "SPAN", { class: !0 }));
      var as = d(At);
      (pl = u(as, "m")),
        as.forEach(r),
        _t.forEach(r),
        ls.forEach(r),
        (_l = h(Yt)),
        (Et = f(Yt, "P", { class: !0 }));
      var ol = d(Et);
      (tl = u(ol, i[7])),
        (gl = u(ol, " | ")),
        (ll = u(ol, i[8])),
        ol.forEach(r),
        Yt.forEach(r),
        Rt.forEach(r),
        pt.forEach(r),
        R.forEach(r),
        (sl = h(k)),
        (Nt = f(k, "DIV", { class: !0 }));
      var rs = d(Nt);
      ht = f(rs, "DIV", { class: !0 });
      var nl = d(ht);
      Gt = f(nl, "UL", { class: !0 });
      var os = d(Gt);
      xt = f(os, "LI", { class: !0 });
      var ns = d(xt);
      kt = f(ns, "BUTTON", { class: !0 });
      var fs = d(kt);
      (bl = u(fs, "Gameweek History")),
        fs.forEach(r),
        ns.forEach(r),
        os.forEach(r),
        (yl = h(nl)),
        Fe && Fe.l(nl),
        nl.forEach(r),
        rs.forEach(r),
        this.h();
    },
    h() {
      o(m, "class", "text-gray-300 text-xs"),
        o(C, "class", "py-2 flex"),
        o(H, "class", "text-gray-300 text-xs"),
        o(a, "class", "flex-grow flex flex-col items-center"),
        o(M, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        Dt(M, "min-width", "2px"),
        Dt(M, "min-height", "50px"),
        o(P, "class", "text-gray-300 text-xs"),
        o(_, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        o(S, "class", "text-gray-300 text-xs flex items-center"),
        o(j, "class", "flex-grow"),
        o(X, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        Dt(X, "min-width", "2px"),
        Dt(X, "min-height", "50px"),
        o(de, "class", "text-gray-300 text-xs"),
        o(re, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        o(pe, "class", "text-gray-300 text-xs"),
        o(z, "class", "flex-grow"),
        o(
          ne,
          "class",
          "h-px bg-gray-400 w-full md:w-px md:h-full md:self-stretch"
        ),
        Dt(ne, "min-height", "2px"),
        Dt(ne, "min-width", "2px"),
        o(ue, "class", "text-gray-300 text-xs"),
        o(fe, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        o(te, "class", "text-gray-300 text-xs"),
        o(Y, "class", "flex-grow mb-4 md:mb-0"),
        o(
          t,
          "class",
          "flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
        ),
        o(Z, "class", "text-gray-300 text-xs"),
        o(Me, "href", (Tt = `/club?id=${i[2] ? i[2].id : -1}`)),
        o(st, "class", "w-10 ml-4 mr-4"),
        o(Ye, "class", "text-xs mt-2 mb-2 font-bold"),
        o(ft, "class", "w-v ml-1 mr-1 flex justify-center"),
        o(Ke, "href", (L = `/club?id=${i[3] ? i[3].id : -1}`)),
        o(Pe, "class", "w-10 ml-4"),
        o($e, "class", "flex justify-center items-center"),
        o(We, "class", "flex justify-center mb-2 mt-2"),
        o(Ge, "class", "text-gray-300 text-xs text-center"),
        o(Ge, "href", (ct = `/club?id=${i[2] ? i[2].id : -1}`)),
        o(K, "class", "text-gray-300 text-xs text-center"),
        o(Oe, "class", "w-10 ml-4 mr-4"),
        o(Ze, "class", "w-v ml-2 mr-2"),
        o(tt, "class", "text-gray-300 text-xs text-center"),
        o(tt, "href", (Ct = `/club?id=${i[3] ? i[3].id : -1}`)),
        o(rt, "class", "text-gray-300 text-xs text-center"),
        o(mt, "class", "w-10 ml-4"),
        o(O, "class", "flex justify-center"),
        o(q, "class", "flex-grow mb-4 md:mb-0"),
        o(
          ot,
          "class",
          "h-px bg-gray-400 w-full md:w-px md:h-full md:self-stretch"
        ),
        Dt(ot, "min-height", "2px"),
        Dt(ot, "min-width", "2px"),
        o(vt, "class", "text-gray-300 text-xs mt-4 md:mt-0"),
        o(Ft, "class", "text-gray-300 text-xs ml-1"),
        o(jt, "class", "text-gray-300 text-xs ml-1"),
        o(At, "class", "text-gray-300 text-xs ml-1"),
        o(Qe, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        o(qe, "class", "flex"),
        o(Et, "class", "text-gray-300 text-xs"),
        o(ze, "class", "flex-grow mb-4 md:mb-0"),
        o(
          Q,
          "class",
          "flex flex-col md:flex-row justify-start md:items-center text-white space-x-0 md:space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
        ),
        o(l, "class", "flex flex-col md:flex-row"),
        o(e, "class", "m-4"),
        o(
          kt,
          "class",
          (il = `p-2 ${i[9] === "history" ? "text-white" : "text-gray-400"}`)
        ),
        o(
          xt,
          "class",
          (al = `mr-4 text-xs md:text-lg ${
            i[9] === "history" ? "active-tab" : ""
          }`)
        ),
        o(Gt, "class", "flex bg-light-gray px-4 pt-2"),
        o(ht, "class", "bg-panel rounded-md m-4"),
        o(Nt, "class", "m-4");
    },
    m(k, R) {
      U(k, e, R),
        s(e, l),
        s(l, t),
        s(t, a),
        s(a, m),
        s(m, x),
        s(a, I),
        s(a, C),
        Le(w, C, null),
        s(a, D),
        s(a, H),
        s(H, p),
        s(H, F),
        s(t, $),
        s(t, M),
        s(t, V),
        s(t, j),
        s(j, P),
        s(P, g),
        s(j, b),
        s(j, _),
        s(_, G),
        s(j, A),
        s(j, S),
        B && Le(B, S, null),
        s(S, Ae),
        s(t, ae),
        s(t, X),
        s(t, Ve),
        s(t, z),
        s(z, de),
        s(de, Ce),
        s(z, ce),
        s(z, re),
        s(re, Ie),
        s(re, oe),
        s(re, ee),
        s(z, he),
        s(z, pe),
        s(pe, Ne),
        s(t, _e),
        s(t, ne),
        s(t, xe),
        s(t, Y),
        s(Y, ue),
        s(ue, Te),
        s(Y, we),
        s(Y, fe),
        s(fe, be),
        s(Y, Ee),
        s(Y, te),
        s(te, se),
        s(l, Re),
        s(l, Q),
        s(Q, q),
        s(q, Z),
        s(Z, bt),
        s(q, It),
        s(q, We),
        s(We, $e),
        s($e, st),
        s(st, Me),
        Le(Xe, Me, null),
        s($e, it),
        s($e, ft),
        s(ft, Ye),
        s(Ye, He),
        s($e, Se),
        s($e, Pe),
        s(Pe, Ke),
        Le(ye, Ke, null),
        s(q, le),
        s(q, O),
        s(O, Oe),
        s(Oe, K),
        s(K, Ge),
        s(Ge, dt),
        s(O, yt),
        s(O, Ze),
        s(O, ut),
        s(O, mt),
        s(mt, rt),
        s(rt, tt),
        s(tt, Vt),
        s(Q, St),
        s(Q, ot),
        s(Q, wt),
        s(Q, ze),
        s(ze, vt),
        s(vt, $t),
        s(ze, Mt),
        s(ze, qe),
        s(qe, Qe),
        s(Qe, Xt),
        s(Qe, Ft),
        s(Ft, ul),
        s(Qe, ml),
        s(Qe, Zt),
        s(Qe, jt),
        s(jt, vl),
        s(Qe, hl),
        s(Qe, el),
        s(Qe, At),
        s(At, pl),
        s(ze, _l),
        s(ze, Et),
        s(Et, tl),
        s(Et, gl),
        s(Et, ll),
        U(k, sl, R),
        U(k, Nt, R),
        s(Nt, ht),
        s(ht, Gt),
        s(Gt, xt),
        s(xt, kt),
        s(kt, bl),
        s(ht, yl),
        Fe && Fe.m(ht, null),
        (ke = !0),
        wl || ((Pl = gt(kt, "click", i[13])), (wl = !0));
    },
    p(k, R) {
      (!ke || R & 1) && y !== (y = ms(k[0]?.position ?? -1) + "") && J(x, y);
      const pt = {};
      if (
        (R & 2 && (pt.primaryColour = k[1]?.primaryColourHex),
        R & 2 && (pt.secondaryColour = k[1]?.secondaryColourHex),
        R & 2 && (pt.thirdColour = k[1]?.thirdColourHex),
        w.$set(pt),
        (!ke || R & 1) && T !== (T = k[0]?.shirtNumber + "") && J(F, T),
        (!ke || R & 2) && W !== (W = k[1]?.name + "") && J(g, W),
        (!ke || R & 1) && N !== (N = k[0]?.lastName + "") && J(G, N),
        R & 1 && Ot !== (Ot = cl(k[0]?.nationality ?? "")))
      ) {
        if (B) {
          Pt();
          const zt = B;
          De(zt.$$.fragment, 1, 0, () => {
            Ue(zt, 1);
          }),
            Ht();
        }
        Ot
          ? ((B = dl(Ot, Hl())),
            Be(B.$$.fragment),
            ie(B.$$.fragment, 1),
            Le(B, S, Ae))
          : (B = null);
      }
      (!ke || R & 1) && me !== (me = k[0]?.firstName + "") && J(Ae, me),
        (!ke || R & 1) &&
          ve !== (ve = (Number(k[0]?.value ?? 0) / 4).toFixed(2) + "") &&
          J(oe, ve),
        (!ke || R & 1) &&
          ge !== (ge = vs(Number(k[0]?.dateOfBirth ?? 0)) + "") &&
          J(be, ge),
        (!ke || R & 1) &&
          E !== (E = hs(Number(k[0]?.dateOfBirth ?? 0)) + "") &&
          J(se, E);
      const je = {};
      R & 4 && (je.primaryColour = k[2] ? k[2].primaryColourHex : ""),
        R & 4 && (je.secondaryColour = k[2] ? k[2].secondaryColourHex : ""),
        R & 4 && (je.thirdColour = k[2] ? k[2].thirdColourHex : ""),
        Xe.$set(je),
        (!ke || (R & 4 && Tt !== (Tt = `/club?id=${k[2] ? k[2].id : -1}`))) &&
          o(Me, "href", Tt);
      const lt = {};
      R & 8 && (lt.primaryColour = k[3] ? k[3].primaryColourHex : ""),
        R & 8 && (lt.secondaryColour = k[3] ? k[3].secondaryColourHex : ""),
        R & 8 && (lt.thirdColour = k[3] ? k[3].thirdColourHex : ""),
        ye.$set(lt),
        (!ke || (R & 8 && L !== (L = `/club?id=${k[3] ? k[3].id : -1}`))) &&
          o(Ke, "href", L),
        (!ke || R & 4) &&
          at !== (at = (k[2] ? k[2].abbreviatedName : "") + "") &&
          J(dt, at),
        (!ke || (R & 4 && ct !== (ct = `/club?id=${k[2] ? k[2].id : -1}`))) &&
          o(Ge, "href", ct),
        (!ke || R & 8) &&
          et !== (et = (k[3] ? k[3].abbreviatedName : "") + "") &&
          J(Vt, et),
        (!ke || (R & 8 && Ct !== (Ct = `/club?id=${k[3] ? k[3].id : -1}`))) &&
          o(tt, "href", Ct),
        (!ke || R & 16) && J(Xt, k[4]),
        (!ke || R & 32) && J(Zt, k[5]),
        (!ke || R & 64) && J(el, k[6]),
        (!ke || R & 128) && J(tl, k[7]),
        (!ke || R & 256) && J(ll, k[8]),
        (!ke ||
          (R & 512 &&
            il !==
              (il = `p-2 ${
                k[9] === "history" ? "text-white" : "text-gray-400"
              }`))) &&
          o(kt, "class", il),
        (!ke ||
          (R & 512 &&
            al !==
              (al = `mr-4 text-xs md:text-lg ${
                k[9] === "history" ? "active-tab" : ""
              }`))) &&
          o(xt, "class", al),
        k[9] === "history"
          ? Fe
            ? R & 512 && ie(Fe, 1)
            : ((Fe = ri()), Fe.c(), ie(Fe, 1), Fe.m(ht, null))
          : Fe &&
            (Pt(),
            De(Fe, 1, 1, () => {
              Fe = null;
            }),
            Ht());
    },
    i(k) {
      ke ||
        (ie(w.$$.fragment, k),
        B && ie(B.$$.fragment, k),
        ie(Xe.$$.fragment, k),
        ie(ye.$$.fragment, k),
        ie(Fe),
        (ke = !0));
    },
    o(k) {
      De(w.$$.fragment, k),
        B && De(B.$$.fragment, k),
        De(Xe.$$.fragment, k),
        De(ye.$$.fragment, k),
        De(Fe),
        (ke = !1);
    },
    d(k) {
      k && r(e),
        Ue(w),
        B && Ue(B),
        Ue(Xe),
        Ue(ye),
        k && r(sl),
        k && r(Nt),
        Fe && Fe.d(),
        (wl = !1),
        Pl();
    },
  };
}
function Pi(i) {
  let e, l;
  return (
    (e = new hi({
      props: { $$slots: { default: [xi] }, $$scope: { ctx: i } },
    })),
    {
      c() {
        Be(e.$$.fragment);
      },
      l(t) {
        Je(e.$$.fragment, t);
      },
      m(t, a) {
        Le(e, t, a), (l = !0);
      },
      p(t, [a]) {
        const m = {};
        a & 1049599 && (m.$$scope = { dirty: a, ctx: t }), e.$set(m);
      },
      i(t) {
        l || (ie(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        De(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ue(e, t);
      },
    }
  );
}
function Hi(i, e, l) {
  let t, a;
  oi(i, fi, (g) => l(12, (a = g)));
  let m = 1,
    y = null,
    x = [],
    I = [],
    C = null,
    w = null,
    D = null,
    H = null,
    p = "00",
    T = "00",
    F = "00",
    $ = "-",
    M = "-",
    V = "history";
  ni(async () => {
    us.set(!0);
    try {
      let g = [];
      ci.subscribe((S) => {
        g = S;
      });
      let b = [];
      Tl.subscribe((S) => {
        b = S;
      });
      let _ = [];
      Vl.subscribe((S) => {
        _ = S;
      }),
        l(0, (y = g.find((S) => S.id === t) ?? null)),
        l(1, (C = b.find((S) => S.id === y?.teamId) ?? null));
      let N = _.filter((S) => S.homeTeamId === C?.id || S.awayTeamId === C?.id),
        G = await Il.getSystemState();
      l(11, (m = G?.activeGameweek ?? m)),
        (w = N.find((S) => S.gameweek === m) ?? null),
        l(2, (D = j(w?.homeTeamId ?? 0) ?? null)),
        l(3, (H = j(w?.awayTeamId ?? 0) ?? null)),
        l(7, ($ = pi(Number(w?.kickOff)))),
        l(8, (M = _i(Number(w?.kickOff))));
      let A = gi(Number(w?.kickOff));
      l(4, (p = A.days.toString())),
        l(5, (T = A.hours.toString())),
        l(6, (F = A.minutes.toString()));
    } catch (g) {
      di.show("Error fetching player details.", "error"),
        console.error("Error fetching data:", g);
    } finally {
      us.set(!1);
    }
  });
  function j(g) {
    return I.find((b) => b.id === g);
  }
  function P(g) {
    l(9, (V = g));
  }
  const W = () => P("history");
  return (
    (i.$$.update = () => {
      i.$$.dirty & 4096 && (t = Number(a.url.searchParams.get("id"))),
        i.$$.dirty & 2048 && x.length > 0 && I.length > 0 && bi(x, I, m);
    }),
    [y, C, D, H, p, T, F, $, M, V, P, m, a, W]
  );
}
class Ki extends Cl {
  constructor(e) {
    super(), Nl(this, e, Hi, Pi, xl, {});
  }
}
export { Ki as component };
