import { B as Jt } from "../chunks/BadgeIcon.5f1570c4.js";
import { f as ml } from "../chunks/fixture-store.724d0928.js";
import {
  A as Le,
  a as v,
  b as L,
  B as Ue,
  c as p,
  d as Te,
  e as fl,
  f as Ht,
  g as ne,
  G as s,
  H as nt,
  h as r,
  I as na,
  i as Pl,
  k as n,
  L as bt,
  l as f,
  m as d,
  M as Vl,
  n as o,
  N as ua,
  o as fa,
  O as ma,
  p as Dt,
  q as c,
  Q as Qt,
  R as cs,
  r as u,
  S as Nl,
  s as xl,
  T as us,
  u as Z,
  v as xt,
  x as dl,
  y as Be,
  z as Je,
} from "../chunks/index.c7b38e5e.js";
import { a as va, i as ms, L as ha } from "../chunks/Layout.a538b3b7.js";
import { p as Cl } from "../chunks/player-store.1ed81bd6.js";
import { S as wa } from "../chunks/ShirtIcon.cbb688e3.js";
import { p as da } from "../chunks/stores.f89c8fde.js";
import { s as hl } from "../chunks/system-store.28344883.js";
import {
  b as pa,
  c as ba,
  d as hs,
  e as vs,
  f as _a,
  g as cl,
  j as ps,
  t as ul,
  u as ga,
} from "../chunks/team-store.90511bc6.js";
import { t as ca } from "../chunks/toast-store.58fa49f6.js";
import { V as ya } from "../chunks/ViewDetailsIcon.98b59799.js";
function _s(a, e, l) {
  const t = a.slice();
  return (t[21] = e[l]), t;
}
function bs(a, e, l) {
  const t = a.slice();
  return (t[21] = e[l]), t;
}
function gs(a) {
  let e,
    l,
    t,
    i,
    m,
    y,
    C,
    b,
    H,
    D,
    w,
    S,
    _,
    I,
    $ = a[2].firstName + "",
    F,
    M,
    N = a[2].lastName + "",
    A,
    P,
    B,
    x,
    g,
    h = a[4]?.friendlyName + "",
    V,
    R,
    re,
    j,
    T,
    W,
    z,
    Q = a[5]?.friendlyName + "",
    ee,
    ve,
    Y,
    te,
    Ne,
    me,
    fe,
    Ve,
    pe,
    de,
    se,
    _e,
    be,
    Pe,
    ge,
    ce,
    xe,
    J,
    he,
    Ce,
    ke,
    ue,
    ye = Math.floor(a[11] / 3) > 0,
    we,
    De,
    ae,
    E,
    oe,
    Re,
    X,
    q,
    le = a[3]?.points + "",
    gt,
    It,
    Ye,
    $e,
    st,
    Fe,
    Xe,
    Tt;
  var at = cl(a[2].nationality);
  function ft(O) {
    return { props: { class: "h-20 w-20" } };
  }
  at && (w = dl(at, ft())),
    (x = new Jt({
      props: {
        className: "w-5 h-5 mr-2",
        primaryColour: a[4]?.primaryColourHex,
        secondaryColour: a[4]?.secondaryColourHex,
        thirdColour: a[4]?.thirdColourHex,
      },
    })),
    (W = new Jt({
      props: {
        className: "w-5 h-5 mx-1",
        primaryColour: a[5]?.primaryColourHex,
        secondaryColour: a[5]?.secondaryColourHex,
        thirdColour: a[5]?.thirdColourHex,
      },
    }));
  let qe = a[8],
    Se = [];
  for (let O = 0; O < qe.length; O += 1) Se[O] = ys(bs(a, qe, O));
  let Me = a[10] >= 2 && ws(a),
    He = ye && Es(a),
    Ke = a[9],
    Ee = [];
  for (let O = 0; O < Ke.length; O += 1) Ee[O] = Qs(_s(a, Ke, O));
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (i = n("h3")),
        (m = c("Player Detail")),
        (y = v()),
        (C = n("button")),
        (b = c("×")),
        (H = v()),
        (D = n("div")),
        w && Be(w.$$.fragment),
        (S = v()),
        (_ = n("div")),
        (I = n("h3")),
        (F = c($)),
        (M = v()),
        (A = c(N)),
        (P = v()),
        (B = n("p")),
        Be(x.$$.fragment),
        (g = v()),
        (V = c(h)),
        (R = v()),
        (re = n("div")),
        (j = n("p")),
        (T = c("vs ")),
        Be(W.$$.fragment),
        (z = v()),
        (ee = c(Q)),
        (ve = v()),
        (Y = n("p")),
        (te = c(a[7])),
        (Ne = v()),
        (me = n("p")),
        (fe = c("Gameweek ")),
        (Ve = c(a[6])),
        (pe = v()),
        (de = n("div")),
        (se = n("div")),
        (_e = n("div")),
        (be = c("Category")),
        (Pe = v()),
        (ge = n("div")),
        (ce = c("Detail")),
        (xe = v()),
        (J = n("div")),
        (he = c("Points")),
        (Ce = v());
      for (let O = 0; O < Se.length; O += 1) Se[O].c();
      (ke = v()), Me && Me.c(), (ue = v()), He && He.c(), (we = v());
      for (let O = 0; O < Ee.length; O += 1) Ee[O].c();
      (De = v()),
        (ae = n("div")),
        (E = n("div")),
        (oe = n("span")),
        (Re = c("Total Points:")),
        (X = v()),
        (q = n("span")),
        (gt = c(le)),
        (It = v()),
        (Ye = n("div")),
        ($e = n("button")),
        (st = c("Close")),
        this.h();
    },
    l(O) {
      e = f(O, "DIV", { class: !0 });
      var ie = d(e);
      l = f(ie, "DIV", { class: !0 });
      var G = d(l);
      t = f(G, "DIV", { class: !0 });
      var Oe = d(t);
      i = f(Oe, "H3", { class: !0 });
      var K = d(i);
      (m = u(K, "Player Detail")),
        K.forEach(r),
        (y = p(Oe)),
        (C = f(Oe, "BUTTON", { class: !0 }));
      var Ge = d(C);
      (b = u(Ge, "×")),
        Ge.forEach(r),
        Oe.forEach(r),
        (H = p(G)),
        (D = f(G, "DIV", { class: !0 }));
      var it = d(D);
      w && Je(w.$$.fragment, it),
        (S = p(it)),
        (_ = f(it, "DIV", { class: !0 }));
      var dt = d(_);
      I = f(dt, "H3", { class: !0 });
      var ct = d(I);
      (F = u(ct, $)),
        (M = p(ct)),
        (A = u(ct, N)),
        ct.forEach(r),
        (P = p(dt)),
        (B = f(dt, "P", { class: !0 }));
      var yt = d(B);
      Je(x.$$.fragment, yt),
        (g = p(yt)),
        (V = u(yt, h)),
        yt.forEach(r),
        dt.forEach(r),
        it.forEach(r),
        (R = p(G)),
        (re = f(G, "DIV", { class: !0 }));
      var Ze = d(re);
      j = f(Ze, "P", { class: !0 });
      var ut = d(j);
      (T = u(ut, "vs ")),
        Je(W.$$.fragment, ut),
        (z = p(ut)),
        (ee = u(ut, Q)),
        ut.forEach(r),
        (ve = p(Ze)),
        (Y = f(Ze, "P", { class: !0 }));
      var mt = d(Y);
      (te = u(mt, a[7])),
        mt.forEach(r),
        (Ne = p(Ze)),
        (me = f(Ze, "P", { class: !0 }));
      var rt = d(me);
      (fe = u(rt, "Gameweek ")),
        (Ve = u(rt, a[6])),
        rt.forEach(r),
        Ze.forEach(r),
        (pe = p(G)),
        (de = f(G, "DIV", { class: !0 }));
      var tt = d(de);
      se = f(tt, "DIV", { class: !0 });
      var et = d(se);
      _e = f(et, "DIV", { class: !0 });
      var Vt = d(_e);
      (be = u(Vt, "Category")),
        Vt.forEach(r),
        (Pe = p(et)),
        (ge = f(et, "DIV", { class: !0 }));
      var Ct = d(ge);
      (ce = u(Ct, "Detail")),
        Ct.forEach(r),
        (xe = p(et)),
        (J = f(et, "DIV", { class: !0 }));
      var St = d(J);
      (he = u(St, "Points")),
        St.forEach(r),
        et.forEach(r),
        tt.forEach(r),
        (Ce = p(G));
      for (let We = 0; We < Se.length; We += 1) Se[We].l(G);
      (ke = p(G)), Me && Me.l(G), (ue = p(G)), He && He.l(G), (we = p(G));
      for (let We = 0; We < Ee.length; We += 1) Ee[We].l(G);
      (De = p(G)), (ae = f(G, "DIV", { class: !0 }));
      var ot = d(ae);
      E = f(ot, "DIV", { class: !0 });
      var wt = d(E);
      oe = f(wt, "SPAN", { class: !0 });
      var ze = d(oe);
      (Re = u(ze, "Total Points:")),
        ze.forEach(r),
        (X = p(wt)),
        (q = f(wt, "SPAN", { class: !0 }));
      var ht = d(q);
      (gt = u(ht, le)),
        ht.forEach(r),
        wt.forEach(r),
        ot.forEach(r),
        (It = p(G)),
        (Ye = f(G, "DIV", { class: !0 }));
      var Mt = d(Ye);
      $e = f(Mt, "BUTTON", { class: !0 });
      var $t = d($e);
      (st = u($t, "Close")),
        $t.forEach(r),
        Mt.forEach(r),
        G.forEach(r),
        ie.forEach(r),
        this.h();
    },
    h() {
      o(i, "class", "text-xl font-semibold text-white"),
        o(C, "class", "text-white text-3xl"),
        o(t, "class", "flex justify-between items-center"),
        o(I, "class", "text-2xl mb-2"),
        o(B, "class", "text-sm text-gray-400 flex items-center"),
        o(_, "class", "ml-4"),
        o(D, "class", "flex justify-start items-center w-full"),
        o(
          j,
          "class",
          "flex w-1/3 items-center border-r border-gray-600 justify-center pt-2"
        ),
        o(Y, "class", "flex w-1/3 justify-center items-center pt-2"),
        o(
          me,
          "class",
          "flex w-1/3 items-center justify-center border-l border-gray-600 pt-2"
        ),
        o(
          re,
          "class",
          "flex justify-start items-center w-full border-t border-gray-600 text-sm"
        ),
        o(_e, "class", "text-sm font-medium w-3/6"),
        o(ge, "class", "text-sm font-medium w-2/6"),
        o(J, "class", "text-sm font-medium w-1/6"),
        o(
          se,
          "class",
          "flex justify-between items-center mt-4 bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        o(de, "class", "mt-2"),
        o(oe, "class", "text-sm font-bold w-5/6"),
        o(q, "class", "text-sm font-bold w-1/6"),
        o(
          E,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        o(ae, "class", "mt-2"),
        o($e, "class", "fpl-purple-btn px-4 py-2 mt-2 rounded-md"),
        o(Ye, "class", "mt-2 flex justify-end"),
        o(
          l,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"
        ),
        o(
          e,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop svelte-1fl295u"
        );
    },
    m(O, ie) {
      L(O, e, ie),
        s(e, l),
        s(l, t),
        s(t, i),
        s(i, m),
        s(t, y),
        s(t, C),
        s(C, b),
        s(l, H),
        s(l, D),
        w && Le(w, D, null),
        s(D, S),
        s(D, _),
        s(_, I),
        s(I, F),
        s(I, M),
        s(I, A),
        s(_, P),
        s(_, B),
        Le(x, B, null),
        s(B, g),
        s(B, V),
        s(l, R),
        s(l, re),
        s(re, j),
        s(j, T),
        Le(W, j, null),
        s(j, z),
        s(j, ee),
        s(re, ve),
        s(re, Y),
        s(Y, te),
        s(re, Ne),
        s(re, me),
        s(me, fe),
        s(me, Ve),
        s(l, pe),
        s(l, de),
        s(de, se),
        s(se, _e),
        s(_e, be),
        s(se, Pe),
        s(se, ge),
        s(ge, ce),
        s(se, xe),
        s(se, J),
        s(J, he),
        s(l, Ce);
      for (let G = 0; G < Se.length; G += 1) Se[G] && Se[G].m(l, null);
      s(l, ke), Me && Me.m(l, null), s(l, ue), He && He.m(l, null), s(l, we);
      for (let G = 0; G < Ee.length; G += 1) Ee[G] && Ee[G].m(l, null);
      s(l, De),
        s(l, ae),
        s(ae, E),
        s(E, oe),
        s(oe, Re),
        s(E, X),
        s(E, q),
        s(q, gt),
        s(l, It),
        s(l, Ye),
        s(Ye, $e),
        s($e, st),
        (Fe = !0),
        Xe ||
          ((Tt = [
            bt(C, "click", function () {
              Qt(a[1]) && a[1].apply(this, arguments);
            }),
            bt($e, "click", function () {
              Qt(a[1]) && a[1].apply(this, arguments);
            }),
            bt($e, "keydown", function () {
              Qt(a[1]) && a[1].apply(this, arguments);
            }),
            bt(l, "click", cs(a[19])),
            bt(l, "keydown", cs(a[20])),
            bt(e, "click", function () {
              Qt(a[1]) && a[1].apply(this, arguments);
            }),
            bt(e, "keydown", function () {
              Qt(a[1]) && a[1].apply(this, arguments);
            }),
          ]),
          (Xe = !0));
    },
    p(O, ie) {
      if (((a = O), ie & 4 && at !== (at = cl(a[2].nationality)))) {
        if (w) {
          xt();
          const K = w;
          Te(K.$$.fragment, 1, 0, () => {
            Ue(K, 1);
          }),
            Ht();
        }
        at
          ? ((w = dl(at, ft())),
            Be(w.$$.fragment),
            ne(w.$$.fragment, 1),
            Le(w, D, S))
          : (w = null);
      }
      (!Fe || ie & 4) && $ !== ($ = a[2].firstName + "") && Z(F, $),
        (!Fe || ie & 4) && N !== (N = a[2].lastName + "") && Z(A, N);
      const G = {};
      ie & 16 && (G.primaryColour = a[4]?.primaryColourHex),
        ie & 16 && (G.secondaryColour = a[4]?.secondaryColourHex),
        ie & 16 && (G.thirdColour = a[4]?.thirdColourHex),
        x.$set(G),
        (!Fe || ie & 16) && h !== (h = a[4]?.friendlyName + "") && Z(V, h);
      const Oe = {};
      if (
        (ie & 32 && (Oe.primaryColour = a[5]?.primaryColourHex),
        ie & 32 && (Oe.secondaryColour = a[5]?.secondaryColourHex),
        ie & 32 && (Oe.thirdColour = a[5]?.thirdColourHex),
        W.$set(Oe),
        (!Fe || ie & 32) && Q !== (Q = a[5]?.friendlyName + "") && Z(ee, Q),
        (!Fe || ie & 128) && Z(te, a[7]),
        (!Fe || ie & 64) && Z(Ve, a[6]),
        ie & 256)
      ) {
        qe = a[8];
        let K;
        for (K = 0; K < qe.length; K += 1) {
          const Ge = bs(a, qe, K);
          Se[K]
            ? Se[K].p(Ge, ie)
            : ((Se[K] = ys(Ge)), Se[K].c(), Se[K].m(l, ke));
        }
        for (; K < Se.length; K += 1) Se[K].d(1);
        Se.length = qe.length;
      }
      if (
        (a[10] >= 2
          ? Me
            ? Me.p(a, ie)
            : ((Me = ws(a)), Me.c(), Me.m(l, ue))
          : Me && (Me.d(1), (Me = null)),
        ie & 2048 && (ye = Math.floor(a[11] / 3) > 0),
        ye
          ? He
            ? He.p(a, ie)
            : ((He = Es(a)), He.c(), He.m(l, we))
          : He && (He.d(1), (He = null)),
        ie & 111104)
      ) {
        Ke = a[9];
        let K;
        for (K = 0; K < Ke.length; K += 1) {
          const Ge = _s(a, Ke, K);
          Ee[K]
            ? Ee[K].p(Ge, ie)
            : ((Ee[K] = Qs(Ge)), Ee[K].c(), Ee[K].m(l, De));
        }
        for (; K < Ee.length; K += 1) Ee[K].d(1);
        Ee.length = Ke.length;
      }
      (!Fe || ie & 8) && le !== (le = a[3]?.points + "") && Z(gt, le);
    },
    i(O) {
      Fe ||
        (w && ne(w.$$.fragment, O),
        ne(x.$$.fragment, O),
        ne(W.$$.fragment, O),
        (Fe = !0));
    },
    o(O) {
      w && Te(w.$$.fragment, O),
        Te(x.$$.fragment, O),
        Te(W.$$.fragment, O),
        (Fe = !1);
    },
    d(O) {
      O && r(e),
        w && Ue(w),
        Ue(x),
        Ue(W),
        Vl(Se, O),
        Me && Me.d(),
        He && He.d(),
        Vl(Ee, O),
        (Xe = !1),
        ua(Tt);
    },
  };
}
function ys(a) {
  let e,
    l,
    t,
    i,
    m,
    y,
    C = a[21].eventStartMinute + "",
    b,
    H,
    D = a[21].eventEndMinute + "",
    w,
    S,
    _,
    I,
    $;
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (i = c("Appearance")),
        (m = v()),
        (y = n("div")),
        (b = c(C)),
        (H = c("-")),
        (w = c(D)),
        (S = c("'")),
        (_ = v()),
        (I = n("div")),
        ($ = c(Js)),
        this.h();
    },
    l(F) {
      e = f(F, "DIV", { class: !0 });
      var M = d(e);
      l = f(M, "DIV", { class: !0 });
      var N = d(l);
      t = f(N, "DIV", { class: !0 });
      var A = d(t);
      (i = u(A, "Appearance")),
        A.forEach(r),
        (m = p(N)),
        (y = f(N, "DIV", { class: !0 }));
      var P = d(y);
      (b = u(P, C)),
        (H = u(P, "-")),
        (w = u(P, D)),
        (S = u(P, "'")),
        P.forEach(r),
        (_ = p(N)),
        (I = f(N, "DIV", { class: !0 }));
      var B = d(I);
      ($ = u(B, Js)), B.forEach(r), N.forEach(r), M.forEach(r), this.h();
    },
    h() {
      o(t, "class", "text-sm font-medium w-3/6"),
        o(y, "class", "text-sm font-medium w-2/6"),
        o(I, "class", "text-sm font-medium w-1/6"),
        o(l, "class", "flex justify-between items-center p-2"),
        o(e, "class", "mt-2");
    },
    m(F, M) {
      L(F, e, M),
        s(e, l),
        s(l, t),
        s(t, i),
        s(l, m),
        s(l, y),
        s(y, b),
        s(y, H),
        s(y, w),
        s(y, S),
        s(l, _),
        s(l, I),
        s(I, $);
    },
    p(F, M) {
      M & 256 && C !== (C = F[21].eventStartMinute + "") && Z(b, C),
        M & 256 && D !== (D = F[21].eventEndMinute + "") && Z(w, D);
    },
    d(F) {
      F && r(e);
    },
  };
}
function ws(a) {
  let e,
    l,
    t,
    i,
    m,
    y,
    C,
    b,
    H,
    D,
    w = -(-a[14] * Math.floor(a[10] / 2)) + "",
    S;
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (i = c("Goal x ")),
        (m = c(a[10])),
        (y = v()),
        (C = n("div")),
        (b = c("-")),
        (H = v()),
        (D = n("div")),
        (S = c(w)),
        this.h();
    },
    l(_) {
      e = f(_, "DIV", { class: !0 });
      var I = d(e);
      l = f(I, "DIV", { class: !0 });
      var $ = d(l);
      t = f($, "DIV", { class: !0 });
      var F = d(t);
      (i = u(F, "Goal x ")),
        (m = u(F, a[10])),
        F.forEach(r),
        (y = p($)),
        (C = f($, "DIV", { class: !0 }));
      var M = d(C);
      (b = u(M, "-")),
        M.forEach(r),
        (H = p($)),
        (D = f($, "DIV", { class: !0 }));
      var N = d(D);
      (S = u(N, w)), N.forEach(r), $.forEach(r), I.forEach(r), this.h();
    },
    h() {
      o(t, "class", "text-sm font-medium w-3/6"),
        o(C, "class", "text-sm font-medium w-2/6"),
        o(D, "class", "text-sm font-medium w-1/6"),
        o(l, "class", "flex justify-between items-center p-2"),
        o(e, "class", "mt-2");
    },
    m(_, I) {
      L(_, e, I),
        s(e, l),
        s(l, t),
        s(t, i),
        s(t, m),
        s(l, y),
        s(l, C),
        s(C, b),
        s(l, H),
        s(l, D),
        s(D, S);
    },
    p(_, I) {
      I & 1024 && Z(m, _[10]),
        I & 1024 &&
          w !== (w = -(-_[14] * Math.floor(_[10] / 2)) + "") &&
          Z(S, w);
    },
    d(_) {
      _ && r(e);
    },
  };
}
function Es(a) {
  let e,
    l,
    t,
    i,
    m,
    y,
    C,
    b,
    H,
    D = Xs * Math.floor(a[11] / 3) + "",
    w;
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (i = c("Keeper Save x 3")),
        (m = v()),
        (y = n("div")),
        (C = c("-")),
        (b = v()),
        (H = n("div")),
        (w = c(D)),
        this.h();
    },
    l(S) {
      e = f(S, "DIV", { class: !0 });
      var _ = d(e);
      l = f(_, "DIV", { class: !0 });
      var I = d(l);
      t = f(I, "DIV", { class: !0 });
      var $ = d(t);
      (i = u($, "Keeper Save x 3")),
        $.forEach(r),
        (m = p(I)),
        (y = f(I, "DIV", { class: !0 }));
      var F = d(y);
      (C = u(F, "-")),
        F.forEach(r),
        (b = p(I)),
        (H = f(I, "DIV", { class: !0 }));
      var M = d(H);
      (w = u(M, D)), M.forEach(r), I.forEach(r), _.forEach(r), this.h();
    },
    h() {
      o(t, "class", "text-sm font-medium w-3/6"),
        o(y, "class", "text-sm font-medium w-2/6"),
        o(H, "class", "text-sm font-medium w-1/6"),
        o(l, "class", "flex justify-between items-center p-2"),
        o(e, "class", "mt-2");
    },
    m(S, _) {
      L(S, e, _),
        s(e, l),
        s(l, t),
        s(t, i),
        s(l, m),
        s(l, y),
        s(y, C),
        s(l, b),
        s(l, H),
        s(H, w);
    },
    p(S, _) {
      _ & 2048 && D !== (D = Xs * Math.floor(S[11] / 3) + "") && Z(w, D);
    },
    d(S) {
      S && r(e);
    },
  };
}
function ks(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Goal Scored")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "Goal Scored")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Ds(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Assist")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "Assist")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Is(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Clean Sheet")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "Clean Sheet")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Ts(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Penalty Save")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "Penalty Save")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Vs(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Penalty Missed")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "Penalty Missed")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Cs(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Yellow Card")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "Yellow Card")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Ns(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Red Card")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "Red Card")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Ps(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Own Goal")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "Own Goal")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function xs(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("Highest Scoring Player")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "Highest Scoring Player")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Hs(a) {
  let e,
    l = a[21].eventEndMinute + "",
    t;
  return {
    c() {
      (e = n("div")), (t = c(l)), this.h();
    },
    l(i) {
      e = f(i, "DIV", { class: !0 });
      var m = d(e);
      (t = u(m, l)), m.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(i, m) {
      L(i, e, m), s(e, t);
    },
    p(i, m) {
      m & 512 && l !== (l = i[21].eventEndMinute + "") && Z(t, l);
    },
    d(i) {
      i && r(e);
    },
  };
}
function Ss(a) {
  let e,
    l = a[21].eventEndMinute + "",
    t;
  return {
    c() {
      (e = n("div")), (t = c(l)), this.h();
    },
    l(i) {
      e = f(i, "DIV", { class: !0 });
      var m = d(e);
      (t = u(m, l)), m.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(i, m) {
      L(i, e, m), s(e, t);
    },
    p(i, m) {
      m & 512 && l !== (l = i[21].eventEndMinute + "") && Z(t, l);
    },
    d(i) {
      i && r(e);
    },
  };
}
function Ms(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "-")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function $s(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "-")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Fs(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "-")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function As(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "-")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function js(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "-")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Gs(a) {
  let e,
    l = a[21].eventEndMinute + "",
    t;
  return {
    c() {
      (e = n("div")), (t = c(l)), this.h();
    },
    l(i) {
      e = f(i, "DIV", { class: !0 });
      var m = d(e);
      (t = u(m, l)), m.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(i, m) {
      L(i, e, m), s(e, t);
    },
    p(i, m) {
      m & 512 && l !== (l = i[21].eventEndMinute + "") && Z(t, l);
    },
    d(i) {
      i && r(e);
    },
  };
}
function Os(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, "-")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Bs(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(la)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, la)), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Ls(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(sa)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, sa)), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Us(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(ta)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, ta)), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Rs(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(Zs)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, Zs)), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Ks(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(a[13])), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, a[13])), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Ws(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(a[16])), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, a[16])), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Ys(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(a[12])), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, a[12])), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function qs(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(a[15])), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, a[15])), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function zs(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = c(ea)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = d(e);
      (l = u(i, ea)), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      L(t, e, i), s(e, l);
    },
    p: nt,
    d(t) {
      t && r(e);
    },
  };
}
function Qs(a) {
  let e,
    l,
    t,
    i,
    m,
    y,
    C,
    b,
    H,
    D,
    w,
    S,
    _,
    I,
    $,
    F,
    M,
    N,
    A,
    P,
    B,
    x,
    g,
    h,
    V,
    R,
    re,
    j,
    T,
    W,
    z,
    Q = a[21].eventType === 1 && ks(),
    ee = a[21].eventType === 2 && Ds(),
    ve = a[21].eventType === 5 && Is(),
    Y = a[21].eventType === 6 && Ts(),
    te = a[21].eventType === 7 && Vs(),
    Ne = a[21].eventType === 8 && Cs(),
    me = a[21].eventType === 9 && Ns(),
    fe = a[21].eventType === 10 && Ps(),
    Ve = a[21].eventType === 11 && xs(),
    pe = a[21].eventType === 1 && Hs(a),
    de = a[21].eventType === 2 && Ss(a),
    se = a[21].eventType === 5 && Ms(),
    _e = a[21].eventType === 6 && $s(),
    be = a[21].eventType === 7 && Fs(),
    Pe = a[21].eventType === 8 && As(),
    ge = a[21].eventType === 9 && js(),
    ce = a[21].eventType === 10 && Gs(a),
    xe = a[21].eventType === 11 && Os(),
    J = a[21].eventType === 1 && Bs(),
    he = a[21].eventType === 2 && Ls(),
    Ce = a[21].eventType === 5 && Us(),
    ke = a[21].eventType === 6 && Rs(),
    ue = a[21].eventType === 7 && Ks(a),
    ye = a[21].eventType === 8 && Ws(a),
    we = a[21].eventType === 9 && Ys(a),
    De = a[21].eventType === 10 && qs(a),
    ae = a[21].eventType === 11 && zs();
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        Q && Q.c(),
        (i = v()),
        ee && ee.c(),
        (m = v()),
        ve && ve.c(),
        (y = v()),
        Y && Y.c(),
        (C = v()),
        te && te.c(),
        (b = v()),
        Ne && Ne.c(),
        (H = v()),
        me && me.c(),
        (D = v()),
        fe && fe.c(),
        (w = v()),
        Ve && Ve.c(),
        (S = v()),
        (_ = n("div")),
        pe && pe.c(),
        (I = v()),
        de && de.c(),
        ($ = v()),
        se && se.c(),
        (F = v()),
        _e && _e.c(),
        (M = v()),
        be && be.c(),
        (N = v()),
        Pe && Pe.c(),
        (A = v()),
        ge && ge.c(),
        (P = v()),
        ce && ce.c(),
        (B = v()),
        xe && xe.c(),
        (x = v()),
        (g = n("div")),
        J && J.c(),
        (h = v()),
        he && he.c(),
        (V = v()),
        Ce && Ce.c(),
        (R = v()),
        ke && ke.c(),
        (re = v()),
        ue && ue.c(),
        (j = v()),
        ye && ye.c(),
        (T = v()),
        we && we.c(),
        (W = v()),
        De && De.c(),
        (z = v()),
        ae && ae.c(),
        this.h();
    },
    l(E) {
      e = f(E, "DIV", { class: !0 });
      var oe = d(e);
      l = f(oe, "DIV", { class: !0 });
      var Re = d(l);
      t = f(Re, "DIV", { class: !0 });
      var X = d(t);
      Q && Q.l(X),
        (i = p(X)),
        ee && ee.l(X),
        (m = p(X)),
        ve && ve.l(X),
        (y = p(X)),
        Y && Y.l(X),
        (C = p(X)),
        te && te.l(X),
        (b = p(X)),
        Ne && Ne.l(X),
        (H = p(X)),
        me && me.l(X),
        (D = p(X)),
        fe && fe.l(X),
        (w = p(X)),
        Ve && Ve.l(X),
        X.forEach(r),
        (S = p(Re)),
        (_ = f(Re, "DIV", { class: !0 }));
      var q = d(_);
      pe && pe.l(q),
        (I = p(q)),
        de && de.l(q),
        ($ = p(q)),
        se && se.l(q),
        (F = p(q)),
        _e && _e.l(q),
        (M = p(q)),
        be && be.l(q),
        (N = p(q)),
        Pe && Pe.l(q),
        (A = p(q)),
        ge && ge.l(q),
        (P = p(q)),
        ce && ce.l(q),
        (B = p(q)),
        xe && xe.l(q),
        q.forEach(r),
        (x = p(Re)),
        (g = f(Re, "DIV", { class: !0 }));
      var le = d(g);
      J && J.l(le),
        (h = p(le)),
        he && he.l(le),
        (V = p(le)),
        Ce && Ce.l(le),
        (R = p(le)),
        ke && ke.l(le),
        (re = p(le)),
        ue && ue.l(le),
        (j = p(le)),
        ye && ye.l(le),
        (T = p(le)),
        we && we.l(le),
        (W = p(le)),
        De && De.l(le),
        (z = p(le)),
        ae && ae.l(le),
        le.forEach(r),
        Re.forEach(r),
        oe.forEach(r),
        this.h();
    },
    h() {
      o(t, "class", "text-sm font-medium w-3/6"),
        o(_, "class", "text-sm font-medium w-2/6"),
        o(g, "class", "text-sm font-medium w-1/6"),
        o(l, "class", "flex justify-between items-center p-2"),
        o(e, "class", "mt-2");
    },
    m(E, oe) {
      L(E, e, oe),
        s(e, l),
        s(l, t),
        Q && Q.m(t, null),
        s(t, i),
        ee && ee.m(t, null),
        s(t, m),
        ve && ve.m(t, null),
        s(t, y),
        Y && Y.m(t, null),
        s(t, C),
        te && te.m(t, null),
        s(t, b),
        Ne && Ne.m(t, null),
        s(t, H),
        me && me.m(t, null),
        s(t, D),
        fe && fe.m(t, null),
        s(t, w),
        Ve && Ve.m(t, null),
        s(l, S),
        s(l, _),
        pe && pe.m(_, null),
        s(_, I),
        de && de.m(_, null),
        s(_, $),
        se && se.m(_, null),
        s(_, F),
        _e && _e.m(_, null),
        s(_, M),
        be && be.m(_, null),
        s(_, N),
        Pe && Pe.m(_, null),
        s(_, A),
        ge && ge.m(_, null),
        s(_, P),
        ce && ce.m(_, null),
        s(_, B),
        xe && xe.m(_, null),
        s(l, x),
        s(l, g),
        J && J.m(g, null),
        s(g, h),
        he && he.m(g, null),
        s(g, V),
        Ce && Ce.m(g, null),
        s(g, R),
        ke && ke.m(g, null),
        s(g, re),
        ue && ue.m(g, null),
        s(g, j),
        ye && ye.m(g, null),
        s(g, T),
        we && we.m(g, null),
        s(g, W),
        De && De.m(g, null),
        s(g, z),
        ae && ae.m(g, null);
    },
    p(E, oe) {
      E[21].eventType === 1
        ? Q || ((Q = ks()), Q.c(), Q.m(t, i))
        : Q && (Q.d(1), (Q = null)),
        E[21].eventType === 2
          ? ee || ((ee = Ds()), ee.c(), ee.m(t, m))
          : ee && (ee.d(1), (ee = null)),
        E[21].eventType === 5
          ? ve || ((ve = Is()), ve.c(), ve.m(t, y))
          : ve && (ve.d(1), (ve = null)),
        E[21].eventType === 6
          ? Y || ((Y = Ts()), Y.c(), Y.m(t, C))
          : Y && (Y.d(1), (Y = null)),
        E[21].eventType === 7
          ? te || ((te = Vs()), te.c(), te.m(t, b))
          : te && (te.d(1), (te = null)),
        E[21].eventType === 8
          ? Ne || ((Ne = Cs()), Ne.c(), Ne.m(t, H))
          : Ne && (Ne.d(1), (Ne = null)),
        E[21].eventType === 9
          ? me || ((me = Ns()), me.c(), me.m(t, D))
          : me && (me.d(1), (me = null)),
        E[21].eventType === 10
          ? fe || ((fe = Ps()), fe.c(), fe.m(t, w))
          : fe && (fe.d(1), (fe = null)),
        E[21].eventType === 11
          ? Ve || ((Ve = xs()), Ve.c(), Ve.m(t, null))
          : Ve && (Ve.d(1), (Ve = null)),
        E[21].eventType === 1
          ? pe
            ? pe.p(E, oe)
            : ((pe = Hs(E)), pe.c(), pe.m(_, I))
          : pe && (pe.d(1), (pe = null)),
        E[21].eventType === 2
          ? de
            ? de.p(E, oe)
            : ((de = Ss(E)), de.c(), de.m(_, $))
          : de && (de.d(1), (de = null)),
        E[21].eventType === 5
          ? se || ((se = Ms()), se.c(), se.m(_, F))
          : se && (se.d(1), (se = null)),
        E[21].eventType === 6
          ? _e || ((_e = $s()), _e.c(), _e.m(_, M))
          : _e && (_e.d(1), (_e = null)),
        E[21].eventType === 7
          ? be || ((be = Fs()), be.c(), be.m(_, N))
          : be && (be.d(1), (be = null)),
        E[21].eventType === 8
          ? Pe || ((Pe = As()), Pe.c(), Pe.m(_, A))
          : Pe && (Pe.d(1), (Pe = null)),
        E[21].eventType === 9
          ? ge || ((ge = js()), ge.c(), ge.m(_, P))
          : ge && (ge.d(1), (ge = null)),
        E[21].eventType === 10
          ? ce
            ? ce.p(E, oe)
            : ((ce = Gs(E)), ce.c(), ce.m(_, B))
          : ce && (ce.d(1), (ce = null)),
        E[21].eventType === 11
          ? xe || ((xe = Os()), xe.c(), xe.m(_, null))
          : xe && (xe.d(1), (xe = null)),
        E[21].eventType === 1
          ? J
            ? J.p(E, oe)
            : ((J = Bs()), J.c(), J.m(g, h))
          : J && (J.d(1), (J = null)),
        E[21].eventType === 2
          ? he
            ? he.p(E, oe)
            : ((he = Ls()), he.c(), he.m(g, V))
          : he && (he.d(1), (he = null)),
        E[21].eventType === 5
          ? Ce
            ? Ce.p(E, oe)
            : ((Ce = Us()), Ce.c(), Ce.m(g, R))
          : Ce && (Ce.d(1), (Ce = null)),
        E[21].eventType === 6
          ? ke
            ? ke.p(E, oe)
            : ((ke = Rs()), ke.c(), ke.m(g, re))
          : ke && (ke.d(1), (ke = null)),
        E[21].eventType === 7
          ? ue
            ? ue.p(E, oe)
            : ((ue = Ks(E)), ue.c(), ue.m(g, j))
          : ue && (ue.d(1), (ue = null)),
        E[21].eventType === 8
          ? ye
            ? ye.p(E, oe)
            : ((ye = Ws(E)), ye.c(), ye.m(g, T))
          : ye && (ye.d(1), (ye = null)),
        E[21].eventType === 9
          ? we
            ? we.p(E, oe)
            : ((we = Ys(E)), we.c(), we.m(g, W))
          : we && (we.d(1), (we = null)),
        E[21].eventType === 10
          ? De
            ? De.p(E, oe)
            : ((De = qs(E)), De.c(), De.m(g, z))
          : De && (De.d(1), (De = null)),
        E[21].eventType === 11
          ? ae
            ? ae.p(E, oe)
            : ((ae = zs()), ae.c(), ae.m(g, null))
          : ae && (ae.d(1), (ae = null));
    },
    d(E) {
      E && r(e),
        Q && Q.d(),
        ee && ee.d(),
        ve && ve.d(),
        Y && Y.d(),
        te && te.d(),
        Ne && Ne.d(),
        me && me.d(),
        fe && fe.d(),
        Ve && Ve.d(),
        pe && pe.d(),
        de && de.d(),
        se && se.d(),
        _e && _e.d(),
        be && be.d(),
        Pe && Pe.d(),
        ge && ge.d(),
        ce && ce.d(),
        xe && xe.d(),
        J && J.d(),
        he && he.d(),
        Ce && Ce.d(),
        ke && ke.d(),
        ue && ue.d(),
        ye && ye.d(),
        we && we.d(),
        De && De.d(),
        ae && ae.d();
    },
  };
}
function Ea(a) {
  let e,
    l,
    t = a[0] && gs(a);
  return {
    c() {
      t && t.c(), (e = fl());
    },
    l(i) {
      t && t.l(i), (e = fl());
    },
    m(i, m) {
      t && t.m(i, m), L(i, e, m), (l = !0);
    },
    p(i, [m]) {
      i[0]
        ? t
          ? (t.p(i, m), m & 1 && ne(t, 1))
          : ((t = gs(i)), t.c(), ne(t, 1), t.m(e.parentNode, e))
        : t &&
          (xt(),
          Te(t, 1, 1, () => {
            t = null;
          }),
          Ht());
    },
    i(i) {
      l || (ne(t), (l = !0));
    },
    o(i) {
      Te(t), (l = !1);
    },
    d(i) {
      t && t.d(i), i && r(e);
    },
  };
}
let Js = 5,
  Xs = 5,
  Zs = 20,
  ea = 25,
  ta = 10;
var la = 0,
  sa = 0;
function ka(a, e, l) {
  let { showModal: t } = e,
    { closeDetailModal: i } = e,
    { playerDetail: m } = e,
    { gameweekDetail: y } = e,
    { playerTeam: C } = e,
    { opponentTeam: b } = e,
    { gameweek: H = 0 } = e,
    { seasonName: D = "" } = e,
    w = [],
    S = [],
    _ = [],
    I = [],
    $ = 0,
    F = 0,
    M = -20,
    N = -10,
    A = -15,
    P = -10,
    B = -5;
  function x(h) {
    us.call(this, a, h);
  }
  function g(h) {
    us.call(this, a, h);
  }
  return (
    (a.$$set = (h) => {
      "showModal" in h && l(0, (t = h.showModal)),
        "closeDetailModal" in h && l(1, (i = h.closeDetailModal)),
        "playerDetail" in h && l(2, (m = h.playerDetail)),
        "gameweekDetail" in h && l(3, (y = h.gameweekDetail)),
        "playerTeam" in h && l(4, (C = h.playerTeam)),
        "opponentTeam" in h && l(5, (b = h.opponentTeam)),
        "gameweek" in h && l(6, (H = h.gameweek)),
        "seasonName" in h && l(7, (D = h.seasonName));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 397064 &&
        y &&
        (l(8, (w = [])),
        l(17, (S = [])),
        l(18, (_ = [])),
        l(9, (I = [])),
        l(10, ($ = 0)),
        l(11, (F = 0)),
        y.events.forEach((h) => {
          switch (h.eventType) {
            case 0:
              w.push(h);
              break;
            case 3:
              S.push(h), l(10, $++, $);
              break;
            case 4:
              _.push(h), l(11, F++, F);
              break;
            default:
              I.push(h);
              break;
          }
        }),
        S.sort((h, V) => h.eventEndMinute - V.eventEndMinute),
        _.sort((h, V) => h.eventEndMinute - V.eventEndMinute),
        I.sort(
          (h, V) =>
            h.eventType - V.eventType || h.eventEndMinute - V.eventEndMinute
        ));
    }),
    [t, i, m, y, C, b, H, D, w, I, $, F, M, N, A, P, B, S, _, x, g]
  );
}
class Da extends Nl {
  constructor(e) {
    super(),
      Pl(this, e, ka, Ea, xl, {
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
function aa(a, e, l) {
  const t = a.slice();
  t[23] = e[l];
  const i = t[7](t[23].fixtureId);
  return (t[24] = i), t;
}
function Ia(a) {
  let e,
    l,
    t,
    i,
    m,
    y,
    C,
    b,
    H,
    D,
    w,
    S,
    _,
    I,
    $,
    F,
    M,
    N = a[3] && ia(a),
    A = a[3].gameweeks,
    P = [];
  for (let x = 0; x < A.length; x += 1) P[x] = ra(aa(a, A, x));
  const B = (x) =>
    Te(P[x], 1, 1, () => {
      P[x] = null;
    });
  return {
    c() {
      N && N.c(),
        (e = v()),
        (l = n("div")),
        (t = n("div")),
        (i = n("div")),
        (m = n("div")),
        (y = c("Gameweek")),
        (C = v()),
        (b = n("div")),
        (H = c("Opponent")),
        (D = v()),
        (w = n("div")),
        (S = c("Points")),
        (_ = v()),
        (I = n("div")),
        ($ = c(" ")),
        (F = v());
      for (let x = 0; x < P.length; x += 1) P[x].c();
      this.h();
    },
    l(x) {
      N && N.l(x), (e = p(x)), (l = f(x, "DIV", { class: !0 }));
      var g = d(l);
      t = f(g, "DIV", { class: !0 });
      var h = d(t);
      i = f(h, "DIV", { class: !0 });
      var V = d(i);
      m = f(V, "DIV", { class: !0 });
      var R = d(m);
      (y = u(R, "Gameweek")),
        R.forEach(r),
        (C = p(V)),
        (b = f(V, "DIV", { class: !0 }));
      var re = d(b);
      (H = u(re, "Opponent")),
        re.forEach(r),
        (D = p(V)),
        (w = f(V, "DIV", { class: !0 }));
      var j = d(w);
      (S = u(j, "Points")),
        j.forEach(r),
        (_ = p(V)),
        (I = f(V, "DIV", { class: !0 }));
      var T = d(I);
      ($ = u(T, " ")), T.forEach(r), V.forEach(r), (F = p(h));
      for (let W = 0; W < P.length; W += 1) P[W].l(h);
      h.forEach(r), g.forEach(r), this.h();
    },
    h() {
      o(m, "class", "w-1/4 px-4"),
        o(b, "class", "w-1/4 px-4"),
        o(w, "class", "w-1/4 px-4"),
        o(I, "class", "w-1/4 px-4"),
        o(
          i,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        o(t, "class", "overflow-x-auto flex-1"),
        o(l, "class", "flex flex-col space-y-4 text-lg mt-4");
    },
    m(x, g) {
      N && N.m(x, g),
        L(x, e, g),
        L(x, l, g),
        s(l, t),
        s(t, i),
        s(i, m),
        s(m, y),
        s(i, C),
        s(i, b),
        s(b, H),
        s(i, D),
        s(i, w),
        s(w, S),
        s(i, _),
        s(i, I),
        s(I, $),
        s(t, F);
      for (let h = 0; h < P.length; h += 1) P[h] && P[h].m(t, null);
      M = !0;
    },
    p(x, g) {
      if (
        (x[3]
          ? N
            ? (N.p(x, g), g & 8 && ne(N, 1))
            : ((N = ia(x)), N.c(), ne(N, 1), N.m(e.parentNode, e))
          : N &&
            (xt(),
            Te(N, 1, 1, () => {
              N = null;
            }),
            Ht()),
        g & 392)
      ) {
        A = x[3].gameweeks;
        let h;
        for (h = 0; h < A.length; h += 1) {
          const V = aa(x, A, h);
          P[h]
            ? (P[h].p(V, g), ne(P[h], 1))
            : ((P[h] = ra(V)), P[h].c(), ne(P[h], 1), P[h].m(t, null));
        }
        for (xt(), h = A.length; h < P.length; h += 1) B(h);
        Ht();
      }
    },
    i(x) {
      if (!M) {
        ne(N);
        for (let g = 0; g < A.length; g += 1) ne(P[g]);
        M = !0;
      }
    },
    o(x) {
      Te(N), (P = P.filter(Boolean));
      for (let g = 0; g < P.length; g += 1) Te(P[g]);
      M = !1;
    },
    d(x) {
      N && N.d(x), x && r(e), x && r(l), Vl(P, x);
    },
  };
}
function Ta(a) {
  let e, l;
  return (
    (e = new ha({})),
    {
      c() {
        Be(e.$$.fragment);
      },
      l(t) {
        Je(e.$$.fragment, t);
      },
      m(t, i) {
        Le(e, t, i), (l = !0);
      },
      p: nt,
      i(t) {
        l || (ne(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        Te(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ue(e, t);
      },
    }
  );
}
function ia(a) {
  let e, l;
  return (
    (e = new Da({
      props: {
        gameweekDetail: a[3].gameweeks.find(a[11]) ?? null,
        opponentTeam: a[4],
        playerTeam: a[6](a[3].teamId) ?? null,
        closeDetailModal: a[9],
        showModal: a[5],
        playerDetail: a[3],
        gameweek: a[1],
        seasonName: a[2]?.name,
      },
    })),
    {
      c() {
        Be(e.$$.fragment);
      },
      l(t) {
        Je(e.$$.fragment, t);
      },
      m(t, i) {
        Le(e, t, i), (l = !0);
      },
      p(t, i) {
        const m = {};
        i & 10 && (m.gameweekDetail = t[3].gameweeks.find(t[11]) ?? null),
          i & 16 && (m.opponentTeam = t[4]),
          i & 8 && (m.playerTeam = t[6](t[3].teamId) ?? null),
          i & 32 && (m.showModal = t[5]),
          i & 8 && (m.playerDetail = t[3]),
          i & 2 && (m.gameweek = t[1]),
          i & 4 && (m.seasonName = t[2]?.name),
          e.$set(m);
      },
      i(t) {
        l || (ne(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        Te(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ue(e, t);
      },
    }
  );
}
function ra(a) {
  let e,
    l,
    t = a[23].number + "",
    i,
    m,
    y,
    C,
    b,
    H,
    D = a[24]?.friendlyName + "",
    w,
    S,
    _,
    I,
    $ = a[23].points + "",
    F,
    M,
    N,
    A,
    P,
    B,
    x,
    g,
    h,
    V,
    R;
  (b = new Jt({
    props: {
      className: "w-6 mr-2",
      primaryColour: a[24]?.primaryColourHex,
      secondaryColour: a[24]?.secondaryColourHex,
      thirdColour: a[24]?.thirdColourHex,
    },
  })),
    (B = new ya({ props: { className: "w-6 mr-2" } }));
  function re() {
    return a[12](a[23], a[24]);
  }
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (i = c(t)),
        (m = v()),
        (y = n("div")),
        (C = n("a")),
        Be(b.$$.fragment),
        (H = v()),
        (w = c(D)),
        (_ = v()),
        (I = n("div")),
        (F = c($)),
        (M = v()),
        (N = n("div")),
        (A = n("button")),
        (P = n("span")),
        Be(B.$$.fragment),
        (x = c("View Details")),
        (g = v()),
        this.h();
    },
    l(j) {
      e = f(j, "DIV", { class: !0 });
      var T = d(e);
      l = f(T, "DIV", { class: !0 });
      var W = d(l);
      (i = u(W, t)), W.forEach(r), (m = p(T)), (y = f(T, "DIV", { class: !0 }));
      var z = d(y);
      C = f(z, "A", { class: !0, href: !0 });
      var Q = d(C);
      Je(b.$$.fragment, Q),
        (H = p(Q)),
        (w = u(Q, D)),
        Q.forEach(r),
        z.forEach(r),
        (_ = p(T)),
        (I = f(T, "DIV", { class: !0 }));
      var ee = d(I);
      (F = u(ee, $)),
        ee.forEach(r),
        (M = p(T)),
        (N = f(T, "DIV", { class: !0 }));
      var ve = d(N);
      A = f(ve, "BUTTON", {});
      var Y = d(A);
      P = f(Y, "SPAN", { class: !0 });
      var te = d(P);
      Je(B.$$.fragment, te),
        (x = u(te, "View Details")),
        te.forEach(r),
        Y.forEach(r),
        ve.forEach(r),
        (g = p(T)),
        T.forEach(r),
        this.h();
    },
    h() {
      o(l, "class", "w-1/4 px-4"),
        o(C, "class", "flex items-center"),
        o(C, "href", (S = `/club?id=${a[24]?.id}`)),
        o(y, "class", "w-1/4 px-4"),
        o(I, "class", "w-1/4 px-4"),
        o(P, "class", "flex items-center"),
        o(N, "class", "w-1/4 px-4 flex items-center"),
        o(
          e,
          "class",
          "flex items-center justify-between p-2 py-4 border-b border-gray-700 cursor-pointer"
        );
    },
    m(j, T) {
      L(j, e, T),
        s(e, l),
        s(l, i),
        s(e, m),
        s(e, y),
        s(y, C),
        Le(b, C, null),
        s(C, H),
        s(C, w),
        s(e, _),
        s(e, I),
        s(I, F),
        s(e, M),
        s(e, N),
        s(N, A),
        s(A, P),
        Le(B, P, null),
        s(P, x),
        s(e, g),
        (h = !0),
        V || ((R = bt(A, "click", re)), (V = !0));
    },
    p(j, T) {
      (a = j), (!h || T & 8) && t !== (t = a[23].number + "") && Z(i, t);
      const W = {};
      T & 8 && (W.primaryColour = a[24]?.primaryColourHex),
        T & 8 && (W.secondaryColour = a[24]?.secondaryColourHex),
        T & 8 && (W.thirdColour = a[24]?.thirdColourHex),
        b.$set(W),
        (!h || T & 8) && D !== (D = a[24]?.friendlyName + "") && Z(w, D),
        (!h || (T & 8 && S !== (S = `/club?id=${a[24]?.id}`))) &&
          o(C, "href", S),
        (!h || T & 8) && $ !== ($ = a[23].points + "") && Z(F, $);
    },
    i(j) {
      h || (ne(b.$$.fragment, j), ne(B.$$.fragment, j), (h = !0));
    },
    o(j) {
      Te(b.$$.fragment, j), Te(B.$$.fragment, j), (h = !1);
    },
    d(j) {
      j && r(e), Ue(b), Ue(B), (V = !1), R();
    },
  };
}
function Va(a) {
  let e, l, t, i;
  const m = [Ta, Ia],
    y = [];
  function C(b, H) {
    return b[0] ? 0 : 1;
  }
  return (
    (e = C(a)),
    (l = y[e] = m[e](a)),
    {
      c() {
        l.c(), (t = fl());
      },
      l(b) {
        l.l(b), (t = fl());
      },
      m(b, H) {
        y[e].m(b, H), L(b, t, H), (i = !0);
      },
      p(b, [H]) {
        let D = e;
        (e = C(b)),
          e === D
            ? y[e].p(b, H)
            : (xt(),
              Te(y[D], 1, 1, () => {
                y[D] = null;
              }),
              Ht(),
              (l = y[e]),
              l ? l.p(b, H) : ((l = y[e] = m[e](b)), l.c()),
              ne(l, 1),
              l.m(t.parentNode, t));
      },
      i(b) {
        i || (ne(l), (i = !0));
      },
      o(b) {
        Te(l), (i = !1);
      },
      d(b) {
        y[e].d(b), b && r(t);
      },
    }
  );
}
function Ca(a, e, l) {
  let t, i;
  na(a, da, (V) => l(10, (i = V)));
  let m = !0,
    y = [],
    C = [],
    b,
    H = 1,
    D = null,
    w = [],
    S,
    _ = null,
    I = new Map(),
    $ = !1,
    F,
    M,
    N;
  fa(async () => {
    try {
      await ul.sync(),
        await ml.sync(),
        await hl.sync(),
        (F = ul.subscribe((V) => {
          y = V;
        })),
        (M = ml.subscribe((V) => {
          (C = V),
            (w = C.map((R) => ({
              fixture: R,
              homeTeam: A(R.homeTeamId),
              awayTeam: A(R.awayTeamId),
            })));
        })),
        (N = hl.subscribe((V) => {
          b = V;
        })),
        l(3, (S = await Cl.getPlayerDetails(t, b?.activeSeason.id ?? 0))),
        l(1, (H = b?.activeGameweek ?? H)),
        l(2, (D = b?.activeSeason ?? D));
    } catch (V) {
      ca.show("Error fetching player gameweek history.", "error"),
        console.error("Error fetching player gameweek history:", V);
    } finally {
      l(0, (m = !1));
    }
  }),
    ma(() => {
      F?.(), M?.(), N?.();
    });
  function A(V) {
    return y.find((R) => R.id === V);
  }
  function P(V) {
    if (I.has(V)) return I.get(V);
    let R = w.find((T) => T.fixture.id === V),
      re = R?.homeTeam?.id === S.teamId ? R?.awayTeam?.id : R?.homeTeam?.id,
      j = y.find((T) => T.id === re);
    return j
      ? (I.set(V, j), j)
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
  function B(V, R) {
    l(4, (_ = R)), l(5, ($ = !0));
  }
  function x() {
    l(5, ($ = !1));
  }
  const g = (V) => V.number === H,
    h = (V, R) => B(V, R);
  return (
    (a.$$.update = () => {
      a.$$.dirty & 1024 && (t = Number(i.url.searchParams.get("id")));
    }),
    [m, H, D, S, _, $, A, P, B, x, i, g, h]
  );
}
class Na extends Nl {
  constructor(e) {
    super(), Pl(this, e, Ca, Va, xl, {});
  }
}
function oa(a) {
  let e, l;
  return (
    (e = new Na({})),
    {
      c() {
        Be(e.$$.fragment);
      },
      l(t) {
        Je(e.$$.fragment, t);
      },
      m(t, i) {
        Le(e, t, i), (l = !0);
      },
      i(t) {
        l || (ne(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        Te(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ue(e, t);
      },
    }
  );
}
function Pa(a) {
  let e,
    l,
    t,
    i,
    m,
    y = hs(a[0]?.position ?? -1) + "",
    C,
    b,
    H,
    D,
    w,
    S,
    _,
    I = a[0]?.shirtNumber + "",
    $,
    F,
    M,
    N,
    A,
    P,
    B = a[1]?.name + "",
    x,
    g,
    h,
    V = a[0]?.lastName + "",
    R,
    re,
    j,
    T,
    W = a[0]?.firstName + "",
    z,
    Q,
    ee,
    ve,
    Y,
    te,
    Ne,
    me,
    fe,
    Ve,
    pe = (Number(a[0]?.value ?? 0) / 4).toFixed(2) + "",
    de,
    se,
    _e,
    be,
    Pe,
    ge,
    ce,
    xe,
    J,
    he,
    Ce,
    ke,
    ue,
    ye = vs(Number(a[0]?.dateOfBirth ?? 0)) + "",
    we,
    De,
    ae,
    E = ps(Number(a[0]?.dateOfBirth ?? 0)) + "",
    oe,
    Re,
    X,
    q,
    le,
    gt,
    It,
    Ye,
    $e,
    st,
    Fe,
    Xe,
    Tt,
    at,
    ft,
    qe,
    Se,
    Me,
    He,
    Ke,
    Ee,
    O,
    ie,
    G,
    Oe,
    K,
    Ge,
    it = (a[2] ? a[2].abbreviatedName : "") + "",
    dt,
    ct,
    yt,
    Ze,
    ut,
    mt,
    rt,
    tt,
    et = (a[3] ? a[3].abbreviatedName : "") + "",
    Vt,
    Ct,
    St,
    ot,
    wt,
    ze,
    ht,
    Mt,
    $t,
    We,
    Qe,
    Xt,
    Ft,
    vl,
    pl,
    Zt,
    At,
    _l,
    bl,
    el,
    jt,
    gl,
    yl,
    Et,
    tl,
    wl,
    ll,
    sl,
    Nt,
    vt,
    Gt,
    Pt,
    kt,
    El,
    al,
    il,
    kl,
    Ie,
    Dl,
    Hl;
  D = new wa({
    props: {
      className: "h-10",
      primaryColour: a[1]?.primaryColourHex,
      secondaryColour: a[1]?.secondaryColourHex,
      thirdColour: a[1]?.thirdColourHex,
    },
  });
  var Ot = cl(a[0]?.nationality ?? "");
  function Sl(k) {
    return { props: { class: "w-4 h-4 mr-1", size: "100" } };
  }
  Ot && (T = dl(Ot, Sl())),
    (Xe = new Jt({
      props: {
        primaryColour: a[2] ? a[2].primaryColourHex : "",
        secondaryColour: a[2] ? a[2].secondaryColourHex : "",
        thirdColour: a[2] ? a[2].thirdColourHex : "",
      },
    })),
    (Ee = new Jt({
      props: {
        primaryColour: a[3] ? a[3].primaryColourHex : "",
        secondaryColour: a[3] ? a[3].secondaryColourHex : "",
        thirdColour: a[3] ? a[3].thirdColourHex : "",
      },
    }));
  let Ae = a[9] === "history" && oa();
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (i = n("div")),
        (m = n("p")),
        (C = c(y)),
        (b = v()),
        (H = n("div")),
        Be(D.$$.fragment),
        (w = v()),
        (S = n("p")),
        (_ = c("Shirt: ")),
        ($ = c(I)),
        (F = v()),
        (M = n("div")),
        (N = v()),
        (A = n("div")),
        (P = n("p")),
        (x = c(B)),
        (g = v()),
        (h = n("p")),
        (R = c(V)),
        (re = v()),
        (j = n("p")),
        T && Be(T.$$.fragment),
        (z = c(W)),
        (Q = v()),
        (ee = n("div")),
        (ve = v()),
        (Y = n("div")),
        (te = n("p")),
        (Ne = c("Value")),
        (me = v()),
        (fe = n("p")),
        (Ve = c("£")),
        (de = c(pe)),
        (se = c("m")),
        (_e = v()),
        (be = n("p")),
        (Pe = c("Weekly Change: 0%")),
        (ge = v()),
        (ce = n("div")),
        (xe = v()),
        (J = n("div")),
        (he = n("p")),
        (Ce = c("Age")),
        (ke = v()),
        (ue = n("p")),
        (we = c(ye)),
        (De = v()),
        (ae = n("p")),
        (oe = c(E)),
        (Re = v()),
        (X = n("div")),
        (q = n("div")),
        (le = n("p")),
        (gt = c("Next Game:")),
        (It = v()),
        (Ye = n("div")),
        ($e = n("div")),
        (st = n("div")),
        (Fe = n("a")),
        Be(Xe.$$.fragment),
        (at = v()),
        (ft = n("div")),
        (qe = n("p")),
        (Se = c("v")),
        (Me = v()),
        (He = n("div")),
        (Ke = n("a")),
        Be(Ee.$$.fragment),
        (ie = v()),
        (G = n("div")),
        (Oe = n("div")),
        (K = n("p")),
        (Ge = n("a")),
        (dt = c(it)),
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
        (ht = n("p")),
        (Mt = c("Kick Off:")),
        ($t = v()),
        (We = n("div")),
        (Qe = n("p")),
        (Xt = c(a[4])),
        (Ft = n("span")),
        (vl = c("d")),
        (pl = c(`
              : `)),
        (Zt = c(a[5])),
        (At = n("span")),
        (_l = c("h")),
        (bl = c(`
              : `)),
        (el = c(a[6])),
        (jt = n("span")),
        (gl = c("m")),
        (yl = v()),
        (Et = n("p")),
        (tl = c(a[7])),
        (wl = c(" | ")),
        (ll = c(a[8])),
        (sl = v()),
        (Nt = n("div")),
        (vt = n("div")),
        (Gt = n("ul")),
        (Pt = n("li")),
        (kt = n("button")),
        (El = c("Gameweek History")),
        (kl = v()),
        Ae && Ae.c(),
        this.h();
    },
    l(k) {
      e = f(k, "DIV", { class: !0 });
      var U = d(e);
      l = f(U, "DIV", { class: !0 });
      var pt = d(l);
      t = f(pt, "DIV", { class: !0 });
      var je = d(t);
      i = f(je, "DIV", { class: !0 });
      var lt = d(i);
      m = f(lt, "P", { class: !0 });
      var zt = d(m);
      (C = u(zt, y)),
        zt.forEach(r),
        (b = p(lt)),
        (H = f(lt, "DIV", { class: !0 }));
      var Ml = d(H);
      Je(D.$$.fragment, Ml),
        Ml.forEach(r),
        (w = p(lt)),
        (S = f(lt, "P", { class: !0 }));
      var Il = d(S);
      (_ = u(Il, "Shirt: ")),
        ($ = u(Il, I)),
        Il.forEach(r),
        lt.forEach(r),
        (F = p(je)),
        (M = f(je, "DIV", { class: !0, style: !0 })),
        d(M).forEach(r),
        (N = p(je)),
        (A = f(je, "DIV", { class: !0 }));
      var Bt = d(A);
      P = f(Bt, "P", { class: !0 });
      var $l = d(P);
      (x = u($l, B)),
        $l.forEach(r),
        (g = p(Bt)),
        (h = f(Bt, "P", { class: !0 }));
      var Fl = d(h);
      (R = u(Fl, V)),
        Fl.forEach(r),
        (re = p(Bt)),
        (j = f(Bt, "P", { class: !0 }));
      var Tl = d(j);
      T && Je(T.$$.fragment, Tl),
        (z = u(Tl, W)),
        Tl.forEach(r),
        Bt.forEach(r),
        (Q = p(je)),
        (ee = f(je, "DIV", { class: !0, style: !0 })),
        d(ee).forEach(r),
        (ve = p(je)),
        (Y = f(je, "DIV", { class: !0 }));
      var Lt = d(Y);
      te = f(Lt, "P", { class: !0 });
      var Al = d(te);
      (Ne = u(Al, "Value")),
        Al.forEach(r),
        (me = p(Lt)),
        (fe = f(Lt, "P", { class: !0 }));
      var rl = d(fe);
      (Ve = u(rl, "£")),
        (de = u(rl, pe)),
        (se = u(rl, "m")),
        rl.forEach(r),
        (_e = p(Lt)),
        (be = f(Lt, "P", { class: !0 }));
      var jl = d(be);
      (Pe = u(jl, "Weekly Change: 0%")),
        jl.forEach(r),
        Lt.forEach(r),
        (ge = p(je)),
        (ce = f(je, "DIV", { class: !0, style: !0 })),
        d(ce).forEach(r),
        (xe = p(je)),
        (J = f(je, "DIV", { class: !0 }));
      var Ut = d(J);
      he = f(Ut, "P", { class: !0 });
      var Gl = d(he);
      (Ce = u(Gl, "Age")),
        Gl.forEach(r),
        (ke = p(Ut)),
        (ue = f(Ut, "P", { class: !0 }));
      var Ol = d(ue);
      (we = u(Ol, ye)),
        Ol.forEach(r),
        (De = p(Ut)),
        (ae = f(Ut, "P", { class: !0 }));
      var Bl = d(ae);
      (oe = u(Bl, E)),
        Bl.forEach(r),
        Ut.forEach(r),
        je.forEach(r),
        (Re = p(pt)),
        (X = f(pt, "DIV", { class: !0 }));
      var Rt = d(X);
      q = f(Rt, "DIV", { class: !0 });
      var Kt = d(q);
      le = f(Kt, "P", { class: !0 });
      var Ll = d(le);
      (gt = u(Ll, "Next Game:")),
        Ll.forEach(r),
        (It = p(Kt)),
        (Ye = f(Kt, "DIV", { class: !0 }));
      var Ul = d(Ye);
      $e = f(Ul, "DIV", { class: !0 });
      var Wt = d($e);
      st = f(Wt, "DIV", { class: !0 });
      var Rl = d(st);
      Fe = f(Rl, "A", { href: !0 });
      var Kl = d(Fe);
      Je(Xe.$$.fragment, Kl),
        Kl.forEach(r),
        Rl.forEach(r),
        (at = p(Wt)),
        (ft = f(Wt, "DIV", { class: !0 }));
      var Wl = d(ft);
      qe = f(Wl, "P", { class: !0 });
      var Yl = d(qe);
      (Se = u(Yl, "v")),
        Yl.forEach(r),
        Wl.forEach(r),
        (Me = p(Wt)),
        (He = f(Wt, "DIV", { class: !0 }));
      var ql = d(He);
      Ke = f(ql, "A", { href: !0 });
      var zl = d(Ke);
      Je(Ee.$$.fragment, zl),
        zl.forEach(r),
        ql.forEach(r),
        Wt.forEach(r),
        Ul.forEach(r),
        (ie = p(Kt)),
        (G = f(Kt, "DIV", { class: !0 }));
      var Yt = d(G);
      Oe = f(Yt, "DIV", { class: !0 });
      var Ql = d(Oe);
      K = f(Ql, "P", { class: !0 });
      var Jl = d(K);
      Ge = f(Jl, "A", { class: !0, href: !0 });
      var Xl = d(Ge);
      (dt = u(Xl, it)),
        Xl.forEach(r),
        Jl.forEach(r),
        Ql.forEach(r),
        (yt = p(Yt)),
        (Ze = f(Yt, "DIV", { class: !0 })),
        d(Ze).forEach(r),
        (ut = p(Yt)),
        (mt = f(Yt, "DIV", { class: !0 }));
      var Zl = d(mt);
      rt = f(Zl, "P", { class: !0 });
      var es = d(rt);
      tt = f(es, "A", { class: !0, href: !0 });
      var ts = d(tt);
      (Vt = u(ts, et)),
        ts.forEach(r),
        es.forEach(r),
        Zl.forEach(r),
        Yt.forEach(r),
        Kt.forEach(r),
        (St = p(Rt)),
        (ot = f(Rt, "DIV", { class: !0, style: !0 })),
        d(ot).forEach(r),
        (wt = p(Rt)),
        (ze = f(Rt, "DIV", { class: !0 }));
      var qt = d(ze);
      ht = f(qt, "P", { class: !0 });
      var ls = d(ht);
      (Mt = u(ls, "Kick Off:")),
        ls.forEach(r),
        ($t = p(qt)),
        (We = f(qt, "DIV", { class: !0 }));
      var ss = d(We);
      Qe = f(ss, "P", { class: !0 });
      var _t = d(Qe);
      (Xt = u(_t, a[4])), (Ft = f(_t, "SPAN", { class: !0 }));
      var as = d(Ft);
      (vl = u(as, "d")),
        as.forEach(r),
        (pl = u(
          _t,
          `
              : `
        )),
        (Zt = u(_t, a[5])),
        (At = f(_t, "SPAN", { class: !0 }));
      var is = d(At);
      (_l = u(is, "h")),
        is.forEach(r),
        (bl = u(
          _t,
          `
              : `
        )),
        (el = u(_t, a[6])),
        (jt = f(_t, "SPAN", { class: !0 }));
      var rs = d(jt);
      (gl = u(rs, "m")),
        rs.forEach(r),
        _t.forEach(r),
        ss.forEach(r),
        (yl = p(qt)),
        (Et = f(qt, "P", { class: !0 }));
      var ol = d(Et);
      (tl = u(ol, a[7])),
        (wl = u(ol, " | ")),
        (ll = u(ol, a[8])),
        ol.forEach(r),
        qt.forEach(r),
        Rt.forEach(r),
        pt.forEach(r),
        U.forEach(r),
        (sl = p(k)),
        (Nt = f(k, "DIV", { class: !0 }));
      var os = d(Nt);
      vt = f(os, "DIV", { class: !0 });
      var nl = d(vt);
      Gt = f(nl, "UL", { class: !0 });
      var ns = d(Gt);
      Pt = f(ns, "LI", { class: !0 });
      var fs = d(Pt);
      kt = f(fs, "BUTTON", { class: !0 });
      var ds = d(kt);
      (El = u(ds, "Gameweek History")),
        ds.forEach(r),
        fs.forEach(r),
        ns.forEach(r),
        (kl = p(nl)),
        Ae && Ae.l(nl),
        nl.forEach(r),
        os.forEach(r),
        this.h();
    },
    h() {
      o(m, "class", "text-gray-300 text-xs"),
        o(H, "class", "py-2 flex"),
        o(S, "class", "text-gray-300 text-xs"),
        o(i, "class", "flex-grow flex flex-col items-center"),
        o(M, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        Dt(M, "min-width", "2px"),
        Dt(M, "min-height", "50px"),
        o(P, "class", "text-gray-300 text-xs"),
        o(h, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        o(j, "class", "text-gray-300 text-xs flex items-center"),
        o(A, "class", "flex-grow"),
        o(ee, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        Dt(ee, "min-width", "2px"),
        Dt(ee, "min-height", "50px"),
        o(te, "class", "text-gray-300 text-xs"),
        o(fe, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        o(be, "class", "text-gray-300 text-xs"),
        o(Y, "class", "flex-grow"),
        o(
          ce,
          "class",
          "h-px bg-gray-400 w-full md:w-px md:h-full md:self-stretch"
        ),
        Dt(ce, "min-height", "2px"),
        Dt(ce, "min-width", "2px"),
        o(he, "class", "text-gray-300 text-xs"),
        o(ue, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        o(ae, "class", "text-gray-300 text-xs"),
        o(J, "class", "flex-grow mb-4 md:mb-0"),
        o(
          t,
          "class",
          "flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
        ),
        o(le, "class", "text-gray-300 text-xs"),
        o(Fe, "href", (Tt = `/club?id=${a[2] ? a[2].id : -1}`)),
        o(st, "class", "w-10 ml-4 mr-4"),
        o(qe, "class", "text-xs mt-2 mb-2 font-bold"),
        o(ft, "class", "w-v ml-1 mr-1 flex justify-center"),
        o(Ke, "href", (O = `/club?id=${a[3] ? a[3].id : -1}`)),
        o(He, "class", "w-10 ml-4"),
        o($e, "class", "flex justify-center items-center"),
        o(Ye, "class", "flex justify-center mb-2 mt-2"),
        o(Ge, "class", "text-gray-300 text-xs text-center"),
        o(Ge, "href", (ct = `/club?id=${a[2] ? a[2].id : -1}`)),
        o(K, "class", "text-gray-300 text-xs text-center"),
        o(Oe, "class", "w-10 ml-4 mr-4"),
        o(Ze, "class", "w-v ml-2 mr-2"),
        o(tt, "class", "text-gray-300 text-xs text-center"),
        o(tt, "href", (Ct = `/club?id=${a[3] ? a[3].id : -1}`)),
        o(rt, "class", "text-gray-300 text-xs text-center"),
        o(mt, "class", "w-10 ml-4"),
        o(G, "class", "flex justify-center"),
        o(q, "class", "flex-grow mb-4 md:mb-0"),
        o(
          ot,
          "class",
          "h-px bg-gray-400 w-full md:w-px md:h-full md:self-stretch"
        ),
        Dt(ot, "min-height", "2px"),
        Dt(ot, "min-width", "2px"),
        o(ht, "class", "text-gray-300 text-xs mt-4 md:mt-0"),
        o(Ft, "class", "text-gray-300 text-xs ml-1"),
        o(At, "class", "text-gray-300 text-xs ml-1"),
        o(jt, "class", "text-gray-300 text-xs ml-1"),
        o(Qe, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        o(We, "class", "flex"),
        o(Et, "class", "text-gray-300 text-xs"),
        o(ze, "class", "flex-grow mb-4 md:mb-0"),
        o(
          X,
          "class",
          "flex flex-col md:flex-row justify-start md:items-center text-white space-x-0 md:space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
        ),
        o(l, "class", "flex flex-col md:flex-row"),
        o(e, "class", "m-4"),
        o(
          kt,
          "class",
          (al = `p-2 ${a[9] === "history" ? "text-white" : "text-gray-400"}`)
        ),
        o(
          Pt,
          "class",
          (il = `mr-4 text-xs md:text-base ${
            a[9] === "history" ? "active-tab" : ""
          }`)
        ),
        o(Gt, "class", "flex bg-light-gray px-4 pt-2"),
        o(vt, "class", "bg-panel rounded-md m-4"),
        o(Nt, "class", "m-4");
    },
    m(k, U) {
      L(k, e, U),
        s(e, l),
        s(l, t),
        s(t, i),
        s(i, m),
        s(m, C),
        s(i, b),
        s(i, H),
        Le(D, H, null),
        s(i, w),
        s(i, S),
        s(S, _),
        s(S, $),
        s(t, F),
        s(t, M),
        s(t, N),
        s(t, A),
        s(A, P),
        s(P, x),
        s(A, g),
        s(A, h),
        s(h, R),
        s(A, re),
        s(A, j),
        T && Le(T, j, null),
        s(j, z),
        s(t, Q),
        s(t, ee),
        s(t, ve),
        s(t, Y),
        s(Y, te),
        s(te, Ne),
        s(Y, me),
        s(Y, fe),
        s(fe, Ve),
        s(fe, de),
        s(fe, se),
        s(Y, _e),
        s(Y, be),
        s(be, Pe),
        s(t, ge),
        s(t, ce),
        s(t, xe),
        s(t, J),
        s(J, he),
        s(he, Ce),
        s(J, ke),
        s(J, ue),
        s(ue, we),
        s(J, De),
        s(J, ae),
        s(ae, oe),
        s(l, Re),
        s(l, X),
        s(X, q),
        s(q, le),
        s(le, gt),
        s(q, It),
        s(q, Ye),
        s(Ye, $e),
        s($e, st),
        s(st, Fe),
        Le(Xe, Fe, null),
        s($e, at),
        s($e, ft),
        s(ft, qe),
        s(qe, Se),
        s($e, Me),
        s($e, He),
        s(He, Ke),
        Le(Ee, Ke, null),
        s(q, ie),
        s(q, G),
        s(G, Oe),
        s(Oe, K),
        s(K, Ge),
        s(Ge, dt),
        s(G, yt),
        s(G, Ze),
        s(G, ut),
        s(G, mt),
        s(mt, rt),
        s(rt, tt),
        s(tt, Vt),
        s(X, St),
        s(X, ot),
        s(X, wt),
        s(X, ze),
        s(ze, ht),
        s(ht, Mt),
        s(ze, $t),
        s(ze, We),
        s(We, Qe),
        s(Qe, Xt),
        s(Qe, Ft),
        s(Ft, vl),
        s(Qe, pl),
        s(Qe, Zt),
        s(Qe, At),
        s(At, _l),
        s(Qe, bl),
        s(Qe, el),
        s(Qe, jt),
        s(jt, gl),
        s(ze, yl),
        s(ze, Et),
        s(Et, tl),
        s(Et, wl),
        s(Et, ll),
        L(k, sl, U),
        L(k, Nt, U),
        s(Nt, vt),
        s(vt, Gt),
        s(Gt, Pt),
        s(Pt, kt),
        s(kt, El),
        s(vt, kl),
        Ae && Ae.m(vt, null),
        (Ie = !0),
        Dl || ((Hl = bt(kt, "click", a[16])), (Dl = !0));
    },
    p(k, U) {
      (!Ie || U & 1) && y !== (y = hs(k[0]?.position ?? -1) + "") && Z(C, y);
      const pt = {};
      if (
        (U & 2 && (pt.primaryColour = k[1]?.primaryColourHex),
        U & 2 && (pt.secondaryColour = k[1]?.secondaryColourHex),
        U & 2 && (pt.thirdColour = k[1]?.thirdColourHex),
        D.$set(pt),
        (!Ie || U & 1) && I !== (I = k[0]?.shirtNumber + "") && Z($, I),
        (!Ie || U & 2) && B !== (B = k[1]?.name + "") && Z(x, B),
        (!Ie || U & 1) && V !== (V = k[0]?.lastName + "") && Z(R, V),
        U & 1 && Ot !== (Ot = cl(k[0]?.nationality ?? "")))
      ) {
        if (T) {
          xt();
          const zt = T;
          Te(zt.$$.fragment, 1, 0, () => {
            Ue(zt, 1);
          }),
            Ht();
        }
        Ot
          ? ((T = dl(Ot, Sl())),
            Be(T.$$.fragment),
            ne(T.$$.fragment, 1),
            Le(T, j, z))
          : (T = null);
      }
      (!Ie || U & 1) && W !== (W = k[0]?.firstName + "") && Z(z, W),
        (!Ie || U & 1) &&
          pe !== (pe = (Number(k[0]?.value ?? 0) / 4).toFixed(2) + "") &&
          Z(de, pe),
        (!Ie || U & 1) &&
          ye !== (ye = vs(Number(k[0]?.dateOfBirth ?? 0)) + "") &&
          Z(we, ye),
        (!Ie || U & 1) &&
          E !== (E = ps(Number(k[0]?.dateOfBirth ?? 0)) + "") &&
          Z(oe, E);
      const je = {};
      U & 4 && (je.primaryColour = k[2] ? k[2].primaryColourHex : ""),
        U & 4 && (je.secondaryColour = k[2] ? k[2].secondaryColourHex : ""),
        U & 4 && (je.thirdColour = k[2] ? k[2].thirdColourHex : ""),
        Xe.$set(je),
        (!Ie || (U & 4 && Tt !== (Tt = `/club?id=${k[2] ? k[2].id : -1}`))) &&
          o(Fe, "href", Tt);
      const lt = {};
      U & 8 && (lt.primaryColour = k[3] ? k[3].primaryColourHex : ""),
        U & 8 && (lt.secondaryColour = k[3] ? k[3].secondaryColourHex : ""),
        U & 8 && (lt.thirdColour = k[3] ? k[3].thirdColourHex : ""),
        Ee.$set(lt),
        (!Ie || (U & 8 && O !== (O = `/club?id=${k[3] ? k[3].id : -1}`))) &&
          o(Ke, "href", O),
        (!Ie || U & 4) &&
          it !== (it = (k[2] ? k[2].abbreviatedName : "") + "") &&
          Z(dt, it),
        (!Ie || (U & 4 && ct !== (ct = `/club?id=${k[2] ? k[2].id : -1}`))) &&
          o(Ge, "href", ct),
        (!Ie || U & 8) &&
          et !== (et = (k[3] ? k[3].abbreviatedName : "") + "") &&
          Z(Vt, et),
        (!Ie || (U & 8 && Ct !== (Ct = `/club?id=${k[3] ? k[3].id : -1}`))) &&
          o(tt, "href", Ct),
        (!Ie || U & 16) && Z(Xt, k[4]),
        (!Ie || U & 32) && Z(Zt, k[5]),
        (!Ie || U & 64) && Z(el, k[6]),
        (!Ie || U & 128) && Z(tl, k[7]),
        (!Ie || U & 256) && Z(ll, k[8]),
        (!Ie ||
          (U & 512 &&
            al !==
              (al = `p-2 ${
                k[9] === "history" ? "text-white" : "text-gray-400"
              }`))) &&
          o(kt, "class", al),
        (!Ie ||
          (U & 512 &&
            il !==
              (il = `mr-4 text-xs md:text-base ${
                k[9] === "history" ? "active-tab" : ""
              }`))) &&
          o(Pt, "class", il),
        k[9] === "history"
          ? Ae
            ? U & 512 && ne(Ae, 1)
            : ((Ae = oa()), Ae.c(), ne(Ae, 1), Ae.m(vt, null))
          : Ae &&
            (xt(),
            Te(Ae, 1, 1, () => {
              Ae = null;
            }),
            Ht());
    },
    i(k) {
      Ie ||
        (ne(D.$$.fragment, k),
        T && ne(T.$$.fragment, k),
        ne(Xe.$$.fragment, k),
        ne(Ee.$$.fragment, k),
        ne(Ae),
        (Ie = !0));
    },
    o(k) {
      Te(D.$$.fragment, k),
        T && Te(T.$$.fragment, k),
        Te(Xe.$$.fragment, k),
        Te(Ee.$$.fragment, k),
        Te(Ae),
        (Ie = !1);
    },
    d(k) {
      k && r(e),
        Ue(D),
        T && Ue(T),
        Ue(Xe),
        Ue(Ee),
        k && r(sl),
        k && r(Nt),
        Ae && Ae.d(),
        (Dl = !1),
        Hl();
    },
  };
}
function xa(a) {
  let e, l;
  return (
    (e = new va({
      props: { $$slots: { default: [Pa] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        Be(e.$$.fragment);
      },
      l(t) {
        Je(e.$$.fragment, t);
      },
      m(t, i) {
        Le(e, t, i), (l = !0);
      },
      p(t, [i]) {
        const m = {};
        i & 134218751 && (m.$$scope = { dirty: i, ctx: t }), e.$set(m);
      },
      i(t) {
        l || (ne(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        Te(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ue(e, t);
      },
    }
  );
}
function Ha(a, e, l) {
  let t, i;
  na(a, da, (T) => l(15, (i = T)));
  let m = 1,
    y = null,
    C = [],
    b = [],
    H = [],
    D,
    w = [],
    S = null,
    _,
    I,
    $,
    F,
    M = null,
    N = null,
    A = null,
    P = "00",
    B = "00",
    x = "00",
    g = "-",
    h = "-",
    V = "history";
  fa(async () => {
    ms.set(!0);
    try {
      await ul.sync(),
        await ml.sync(),
        await hl.sync(),
        await Cl.sync(),
        (I = ul.subscribe((z) => {
          l(12, (b = z));
        })),
        ($ = Cl.subscribe((z) => {
          C = z;
        })),
        (F = ml.subscribe((z) => {
          l(13, (H = z)),
            l(
              14,
              (w = H.map((Q) => ({
                fixture: Q,
                homeTeam: R(Q.homeTeamId),
                awayTeam: R(Q.awayTeamId),
              })))
            );
        })),
        (_ = hl.subscribe((z) => {
          D = z;
        })),
        l(0, (y = C.find((z) => z.id === t) ?? null)),
        l(1, (S = b.find((z) => z.id === y?.teamId) ?? null));
      let T = H.filter((z) => z.homeTeamId === S?.id || z.awayTeamId === S?.id);
      l(11, (m = D?.activeGameweek ?? m)),
        (M = T.find((z) => z.gameweek === m) ?? null),
        l(2, (N = R(M?.homeTeamId ?? 0) ?? null)),
        l(3, (A = R(M?.awayTeamId ?? 0) ?? null)),
        console.log(N),
        l(7, (g = pa(Number(M?.kickOff)))),
        l(8, (h = _a(Number(M?.kickOff))));
      let W = ba(Number(M?.kickOff));
      l(4, (P = W.days.toString())),
        l(5, (B = W.hours.toString())),
        l(6, (x = W.minutes.toString()));
    } catch (T) {
      ca.show("Error fetching player details.", "error"),
        console.error("Error fetching data:", T);
    } finally {
      ms.set(!1);
    }
  });
  function R(T) {
    return b.find((W) => W.id === T);
  }
  function re(T) {
    l(9, (V = T));
  }
  const j = () => re("history");
  return (
    (a.$$.update = () => {
      a.$$.dirty & 32768 && (t = Number(i.url.searchParams.get("id"))),
        a.$$.dirty & 30720 && H.length > 0 && b.length > 0 && ga(w, b, m);
    }),
    [y, S, N, A, P, B, x, g, h, V, re, m, b, H, w, i, j]
  );
}
class Ra extends Nl {
  constructor(e) {
    super(), Pl(this, e, Ha, xa, xl, {});
  }
}
export { Ra as component };
