import { B as Xt } from "../chunks/BadgeIcon.ac2d82f5.js";
import {
  h as _a,
  w as _s,
  i as ba,
  a as da,
  g as dl,
  u as ga,
  s as hl,
  o as hs,
  f as ml,
  j as ms,
  b as pa,
  L as ua,
  t as ul,
  p as us,
  e as va,
  q as vs,
} from "../chunks/Layout.0e76e124.js";
import { S as wa } from "../chunks/ShirtIcon.3da312bd.js";
import { V as ya } from "../chunks/ViewDetailsIcon.d864d339.js";
import {
  y as Be,
  S as Cl,
  p as Dt,
  v as It,
  Q as Jt,
  A as Le,
  i as Nl,
  s as Pl,
  f as Tt,
  b as U,
  B as Ue,
  M as Vl,
  u as Z,
  a as _,
  L as bt,
  m as c,
  x as cl,
  R as cs,
  T as ds,
  g as ee,
  l as f,
  o as fa,
  O as ha,
  r as m,
  N as ma,
  k as n,
  I as na,
  n as o,
  c as p,
  z as qe,
  h as r,
  G as s,
  H as st,
  q as u,
  d as ue,
  e as zt,
} from "../chunks/index.a8c54947.js";
import { p as ca } from "../chunks/stores.95126db5.js";
function ps(a, e, l) {
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
    d,
    g,
    V,
    v,
    I,
    y,
    E,
    $,
    b,
    T,
    M = a[2].firstName + "",
    F,
    S,
    x = a[2].lastName + "",
    A,
    N,
    R,
    P,
    w,
    h = a[4]?.friendlyName + "",
    C,
    q,
    te,
    j,
    H,
    B,
    Ce,
    G = a[5]?.friendlyName + "",
    Q,
    ve,
    Y,
    le,
    Ne,
    me,
    ne,
    Te,
    _e,
    fe,
    ae,
    pe,
    be,
    Pe,
    ge,
    ce,
    xe,
    J,
    he,
    Ve,
    ke,
    de,
    ye = Math.floor(a[11] / 3) > 0,
    we,
    De,
    ie,
    k,
    oe,
    Re,
    X,
    z,
    se = a[3]?.points + "",
    gt,
    Vt,
    Ye,
    Me,
    at,
    Fe,
    Xe,
    Ct;
  var it = dl(a[2].nationality);
  function ft(L) {
    return { props: { class: "h-20 w-20" } };
  }
  it && (E = cl(it, ft())),
    (P = new Xt({
      props: {
        className: "w-5 h-5 mr-2",
        primaryColour: a[4]?.primaryColourHex,
        secondaryColour: a[4]?.secondaryColourHex,
        thirdColour: a[4]?.thirdColourHex,
      },
    })),
    (B = new Xt({
      props: {
        className: "w-5 h-5 mx-1",
        primaryColour: a[5]?.primaryColourHex,
        secondaryColour: a[5]?.secondaryColourHex,
        thirdColour: a[5]?.thirdColourHex,
      },
    }));
  let ze = a[8],
    $e = [];
  for (let L = 0; L < ze.length; L += 1) $e[L] = ys(bs(a, ze, L));
  let Se = a[10] >= 2 && ws(a),
    He = ye && Es(a),
    Ke = a[9],
    Ee = [];
  for (let L = 0; L < Ke.length; L += 1) Ee[L] = Qs(ps(a, Ke, L));
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (i = n("h3")),
        (d = u("Player Detail")),
        (g = _()),
        (V = n("button")),
        (v = u("×")),
        (I = _()),
        (y = n("div")),
        E && Be(E.$$.fragment),
        ($ = _()),
        (b = n("div")),
        (T = n("h3")),
        (F = u(M)),
        (S = _()),
        (A = u(x)),
        (N = _()),
        (R = n("p")),
        Be(P.$$.fragment),
        (w = _()),
        (C = u(h)),
        (q = _()),
        (te = n("div")),
        (j = n("p")),
        (H = u("vs ")),
        Be(B.$$.fragment),
        (Ce = _()),
        (Q = u(G)),
        (ve = _()),
        (Y = n("p")),
        (le = u(a[7])),
        (Ne = _()),
        (me = n("p")),
        (ne = u("Gameweek ")),
        (Te = u(a[6])),
        (_e = _()),
        (fe = n("div")),
        (ae = n("div")),
        (pe = n("div")),
        (be = u("Category")),
        (Pe = _()),
        (ge = n("div")),
        (ce = u("Detail")),
        (xe = _()),
        (J = n("div")),
        (he = u("Points")),
        (Ve = _());
      for (let L = 0; L < $e.length; L += 1) $e[L].c();
      (ke = _()), Se && Se.c(), (de = _()), He && He.c(), (we = _());
      for (let L = 0; L < Ee.length; L += 1) Ee[L].c();
      (De = _()),
        (ie = n("div")),
        (k = n("div")),
        (oe = n("span")),
        (Re = u("Total Points:")),
        (X = _()),
        (z = n("span")),
        (gt = u(se)),
        (Vt = _()),
        (Ye = n("div")),
        (Me = n("button")),
        (at = u("Close")),
        this.h();
    },
    l(L) {
      e = f(L, "DIV", { class: !0 });
      var re = c(e);
      l = f(re, "DIV", { class: !0 });
      var O = c(l);
      t = f(O, "DIV", { class: !0 });
      var Oe = c(t);
      i = f(Oe, "H3", { class: !0 });
      var W = c(i);
      (d = m(W, "Player Detail")),
        W.forEach(r),
        (g = p(Oe)),
        (V = f(Oe, "BUTTON", { class: !0 }));
      var Ge = c(V);
      (v = m(Ge, "×")),
        Ge.forEach(r),
        Oe.forEach(r),
        (I = p(O)),
        (y = f(O, "DIV", { class: !0 }));
      var rt = c(y);
      E && qe(E.$$.fragment, rt),
        ($ = p(rt)),
        (b = f(rt, "DIV", { class: !0 }));
      var ct = c(b);
      T = f(ct, "H3", { class: !0 });
      var dt = c(T);
      (F = m(dt, M)),
        (S = p(dt)),
        (A = m(dt, x)),
        dt.forEach(r),
        (N = p(ct)),
        (R = f(ct, "P", { class: !0 }));
      var yt = c(R);
      qe(P.$$.fragment, yt),
        (w = p(yt)),
        (C = m(yt, h)),
        yt.forEach(r),
        ct.forEach(r),
        rt.forEach(r),
        (q = p(O)),
        (te = f(O, "DIV", { class: !0 }));
      var Ze = c(te);
      j = f(Ze, "P", { class: !0 });
      var ut = c(j);
      (H = m(ut, "vs ")),
        qe(B.$$.fragment, ut),
        (Ce = p(ut)),
        (Q = m(ut, G)),
        ut.forEach(r),
        (ve = p(Ze)),
        (Y = f(Ze, "P", { class: !0 }));
      var mt = c(Y);
      (le = m(mt, a[7])),
        mt.forEach(r),
        (Ne = p(Ze)),
        (me = f(Ze, "P", { class: !0 }));
      var ot = c(me);
      (ne = m(ot, "Gameweek ")),
        (Te = m(ot, a[6])),
        ot.forEach(r),
        Ze.forEach(r),
        (_e = p(O)),
        (fe = f(O, "DIV", { class: !0 }));
      var tt = c(fe);
      ae = f(tt, "DIV", { class: !0 });
      var et = c(ae);
      pe = f(et, "DIV", { class: !0 });
      var Nt = c(pe);
      (be = m(Nt, "Category")),
        Nt.forEach(r),
        (Pe = p(et)),
        (ge = f(et, "DIV", { class: !0 }));
      var Pt = c(ge);
      (ce = m(Pt, "Detail")),
        Pt.forEach(r),
        (xe = p(et)),
        (J = f(et, "DIV", { class: !0 }));
      var $t = c(J);
      (he = m($t, "Points")),
        $t.forEach(r),
        et.forEach(r),
        tt.forEach(r),
        (Ve = p(O));
      for (let We = 0; We < $e.length; We += 1) $e[We].l(O);
      (ke = p(O)), Se && Se.l(O), (de = p(O)), He && He.l(O), (we = p(O));
      for (let We = 0; We < Ee.length; We += 1) Ee[We].l(O);
      (De = p(O)), (ie = f(O, "DIV", { class: !0 }));
      var nt = c(ie);
      k = f(nt, "DIV", { class: !0 });
      var wt = c(k);
      oe = f(wt, "SPAN", { class: !0 });
      var Qe = c(oe);
      (Re = m(Qe, "Total Points:")),
        Qe.forEach(r),
        (X = p(wt)),
        (z = f(wt, "SPAN", { class: !0 }));
      var ht = c(z);
      (gt = m(ht, se)),
        ht.forEach(r),
        wt.forEach(r),
        nt.forEach(r),
        (Vt = p(O)),
        (Ye = f(O, "DIV", { class: !0 }));
      var St = c(Ye);
      Me = f(St, "BUTTON", { class: !0 });
      var Mt = c(Me);
      (at = m(Mt, "Close")),
        Mt.forEach(r),
        St.forEach(r),
        O.forEach(r),
        re.forEach(r),
        this.h();
    },
    h() {
      o(i, "class", "text-xl font-semibold text-white"),
        o(V, "class", "text-white text-3xl"),
        o(t, "class", "flex justify-between items-center"),
        o(T, "class", "text-2xl mb-2"),
        o(R, "class", "text-sm text-gray-400 flex items-center"),
        o(b, "class", "ml-4"),
        o(y, "class", "flex justify-start items-center w-full"),
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
          te,
          "class",
          "flex justify-start items-center w-full border-t border-gray-600 text-sm"
        ),
        o(pe, "class", "text-sm font-medium w-3/6"),
        o(ge, "class", "text-sm font-medium w-2/6"),
        o(J, "class", "text-sm font-medium w-1/6"),
        o(
          ae,
          "class",
          "flex justify-between items-center mt-4 bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        o(fe, "class", "mt-2"),
        o(oe, "class", "text-sm font-bold w-5/6"),
        o(z, "class", "text-sm font-bold w-1/6"),
        o(
          k,
          "class",
          "flex justify-between items-center bg-light-gray p-2 border-t border-b border-gray-600"
        ),
        o(ie, "class", "mt-2"),
        o(Me, "class", "fpl-purple-btn px-4 py-2 mt-2 rounded-md"),
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
    m(L, re) {
      U(L, e, re),
        s(e, l),
        s(l, t),
        s(t, i),
        s(i, d),
        s(t, g),
        s(t, V),
        s(V, v),
        s(l, I),
        s(l, y),
        E && Le(E, y, null),
        s(y, $),
        s(y, b),
        s(b, T),
        s(T, F),
        s(T, S),
        s(T, A),
        s(b, N),
        s(b, R),
        Le(P, R, null),
        s(R, w),
        s(R, C),
        s(l, q),
        s(l, te),
        s(te, j),
        s(j, H),
        Le(B, j, null),
        s(j, Ce),
        s(j, Q),
        s(te, ve),
        s(te, Y),
        s(Y, le),
        s(te, Ne),
        s(te, me),
        s(me, ne),
        s(me, Te),
        s(l, _e),
        s(l, fe),
        s(fe, ae),
        s(ae, pe),
        s(pe, be),
        s(ae, Pe),
        s(ae, ge),
        s(ge, ce),
        s(ae, xe),
        s(ae, J),
        s(J, he),
        s(l, Ve);
      for (let O = 0; O < $e.length; O += 1) $e[O] && $e[O].m(l, null);
      s(l, ke), Se && Se.m(l, null), s(l, de), He && He.m(l, null), s(l, we);
      for (let O = 0; O < Ee.length; O += 1) Ee[O] && Ee[O].m(l, null);
      s(l, De),
        s(l, ie),
        s(ie, k),
        s(k, oe),
        s(oe, Re),
        s(k, X),
        s(k, z),
        s(z, gt),
        s(l, Vt),
        s(l, Ye),
        s(Ye, Me),
        s(Me, at),
        (Fe = !0),
        Xe ||
          ((Ct = [
            bt(V, "click", function () {
              Jt(a[1]) && a[1].apply(this, arguments);
            }),
            bt(Me, "click", function () {
              Jt(a[1]) && a[1].apply(this, arguments);
            }),
            bt(Me, "keydown", function () {
              Jt(a[1]) && a[1].apply(this, arguments);
            }),
            bt(l, "click", cs(a[19])),
            bt(l, "keydown", cs(a[20])),
            bt(e, "click", function () {
              Jt(a[1]) && a[1].apply(this, arguments);
            }),
            bt(e, "keydown", function () {
              Jt(a[1]) && a[1].apply(this, arguments);
            }),
          ]),
          (Xe = !0));
    },
    p(L, re) {
      if (((a = L), re & 4 && it !== (it = dl(a[2].nationality)))) {
        if (E) {
          It();
          const W = E;
          ue(W.$$.fragment, 1, 0, () => {
            Ue(W, 1);
          }),
            Tt();
        }
        it
          ? ((E = cl(it, ft())),
            Be(E.$$.fragment),
            ee(E.$$.fragment, 1),
            Le(E, y, $))
          : (E = null);
      }
      (!Fe || re & 4) && M !== (M = a[2].firstName + "") && Z(F, M),
        (!Fe || re & 4) && x !== (x = a[2].lastName + "") && Z(A, x);
      const O = {};
      re & 16 && (O.primaryColour = a[4]?.primaryColourHex),
        re & 16 && (O.secondaryColour = a[4]?.secondaryColourHex),
        re & 16 && (O.thirdColour = a[4]?.thirdColourHex),
        P.$set(O),
        (!Fe || re & 16) && h !== (h = a[4]?.friendlyName + "") && Z(C, h);
      const Oe = {};
      if (
        (re & 32 && (Oe.primaryColour = a[5]?.primaryColourHex),
        re & 32 && (Oe.secondaryColour = a[5]?.secondaryColourHex),
        re & 32 && (Oe.thirdColour = a[5]?.thirdColourHex),
        B.$set(Oe),
        (!Fe || re & 32) && G !== (G = a[5]?.friendlyName + "") && Z(Q, G),
        (!Fe || re & 128) && Z(le, a[7]),
        (!Fe || re & 64) && Z(Te, a[6]),
        re & 256)
      ) {
        ze = a[8];
        let W;
        for (W = 0; W < ze.length; W += 1) {
          const Ge = bs(a, ze, W);
          $e[W]
            ? $e[W].p(Ge, re)
            : (($e[W] = ys(Ge)), $e[W].c(), $e[W].m(l, ke));
        }
        for (; W < $e.length; W += 1) $e[W].d(1);
        $e.length = ze.length;
      }
      if (
        (a[10] >= 2
          ? Se
            ? Se.p(a, re)
            : ((Se = ws(a)), Se.c(), Se.m(l, de))
          : Se && (Se.d(1), (Se = null)),
        re & 2048 && (ye = Math.floor(a[11] / 3) > 0),
        ye
          ? He
            ? He.p(a, re)
            : ((He = Es(a)), He.c(), He.m(l, we))
          : He && (He.d(1), (He = null)),
        re & 111104)
      ) {
        Ke = a[9];
        let W;
        for (W = 0; W < Ke.length; W += 1) {
          const Ge = ps(a, Ke, W);
          Ee[W]
            ? Ee[W].p(Ge, re)
            : ((Ee[W] = Qs(Ge)), Ee[W].c(), Ee[W].m(l, De));
        }
        for (; W < Ee.length; W += 1) Ee[W].d(1);
        Ee.length = Ke.length;
      }
      (!Fe || re & 8) && se !== (se = a[3]?.points + "") && Z(gt, se);
    },
    i(L) {
      Fe ||
        (E && ee(E.$$.fragment, L),
        ee(P.$$.fragment, L),
        ee(B.$$.fragment, L),
        (Fe = !0));
    },
    o(L) {
      E && ue(E.$$.fragment, L),
        ue(P.$$.fragment, L),
        ue(B.$$.fragment, L),
        (Fe = !1);
    },
    d(L) {
      L && r(e),
        E && Ue(E),
        Ue(P),
        Ue(B),
        Vl($e, L),
        Se && Se.d(),
        He && He.d(),
        Vl(Ee, L),
        (Xe = !1),
        ma(Ct);
    },
  };
}
function ys(a) {
  let e,
    l,
    t,
    i,
    d,
    g,
    V = a[21].eventStartMinute + "",
    v,
    I,
    y = a[21].eventEndMinute + "",
    E,
    $,
    b,
    T,
    M;
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (i = u("Appearance")),
        (d = _()),
        (g = n("div")),
        (v = u(V)),
        (I = u("-")),
        (E = u(y)),
        ($ = u("'")),
        (b = _()),
        (T = n("div")),
        (M = u(Js)),
        this.h();
    },
    l(F) {
      e = f(F, "DIV", { class: !0 });
      var S = c(e);
      l = f(S, "DIV", { class: !0 });
      var x = c(l);
      t = f(x, "DIV", { class: !0 });
      var A = c(t);
      (i = m(A, "Appearance")),
        A.forEach(r),
        (d = p(x)),
        (g = f(x, "DIV", { class: !0 }));
      var N = c(g);
      (v = m(N, V)),
        (I = m(N, "-")),
        (E = m(N, y)),
        ($ = m(N, "'")),
        N.forEach(r),
        (b = p(x)),
        (T = f(x, "DIV", { class: !0 }));
      var R = c(T);
      (M = m(R, Js)), R.forEach(r), x.forEach(r), S.forEach(r), this.h();
    },
    h() {
      o(t, "class", "text-sm font-medium w-3/6"),
        o(g, "class", "text-sm font-medium w-2/6"),
        o(T, "class", "text-sm font-medium w-1/6"),
        o(l, "class", "flex justify-between items-center p-2"),
        o(e, "class", "mt-2");
    },
    m(F, S) {
      U(F, e, S),
        s(e, l),
        s(l, t),
        s(t, i),
        s(l, d),
        s(l, g),
        s(g, v),
        s(g, I),
        s(g, E),
        s(g, $),
        s(l, b),
        s(l, T),
        s(T, M);
    },
    p(F, S) {
      S & 256 && V !== (V = F[21].eventStartMinute + "") && Z(v, V),
        S & 256 && y !== (y = F[21].eventEndMinute + "") && Z(E, y);
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
    d,
    g,
    V,
    v,
    I,
    y,
    E = -(-a[14] * Math.floor(a[10] / 2)) + "",
    $;
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (i = u("Goal x ")),
        (d = u(a[10])),
        (g = _()),
        (V = n("div")),
        (v = u("-")),
        (I = _()),
        (y = n("div")),
        ($ = u(E)),
        this.h();
    },
    l(b) {
      e = f(b, "DIV", { class: !0 });
      var T = c(e);
      l = f(T, "DIV", { class: !0 });
      var M = c(l);
      t = f(M, "DIV", { class: !0 });
      var F = c(t);
      (i = m(F, "Goal x ")),
        (d = m(F, a[10])),
        F.forEach(r),
        (g = p(M)),
        (V = f(M, "DIV", { class: !0 }));
      var S = c(V);
      (v = m(S, "-")),
        S.forEach(r),
        (I = p(M)),
        (y = f(M, "DIV", { class: !0 }));
      var x = c(y);
      ($ = m(x, E)), x.forEach(r), M.forEach(r), T.forEach(r), this.h();
    },
    h() {
      o(t, "class", "text-sm font-medium w-3/6"),
        o(V, "class", "text-sm font-medium w-2/6"),
        o(y, "class", "text-sm font-medium w-1/6"),
        o(l, "class", "flex justify-between items-center p-2"),
        o(e, "class", "mt-2");
    },
    m(b, T) {
      U(b, e, T),
        s(e, l),
        s(l, t),
        s(t, i),
        s(t, d),
        s(l, g),
        s(l, V),
        s(V, v),
        s(l, I),
        s(l, y),
        s(y, $);
    },
    p(b, T) {
      T & 1024 && Z(d, b[10]),
        T & 1024 &&
          E !== (E = -(-b[14] * Math.floor(b[10] / 2)) + "") &&
          Z($, E);
    },
    d(b) {
      b && r(e);
    },
  };
}
function Es(a) {
  let e,
    l,
    t,
    i,
    d,
    g,
    V,
    v,
    I,
    y = Xs * Math.floor(a[11] / 3) + "",
    E;
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        (i = u("Keeper Save x 3")),
        (d = _()),
        (g = n("div")),
        (V = u("-")),
        (v = _()),
        (I = n("div")),
        (E = u(y)),
        this.h();
    },
    l($) {
      e = f($, "DIV", { class: !0 });
      var b = c(e);
      l = f(b, "DIV", { class: !0 });
      var T = c(l);
      t = f(T, "DIV", { class: !0 });
      var M = c(t);
      (i = m(M, "Keeper Save x 3")),
        M.forEach(r),
        (d = p(T)),
        (g = f(T, "DIV", { class: !0 }));
      var F = c(g);
      (V = m(F, "-")),
        F.forEach(r),
        (v = p(T)),
        (I = f(T, "DIV", { class: !0 }));
      var S = c(I);
      (E = m(S, y)), S.forEach(r), T.forEach(r), b.forEach(r), this.h();
    },
    h() {
      o(t, "class", "text-sm font-medium w-3/6"),
        o(g, "class", "text-sm font-medium w-2/6"),
        o(I, "class", "text-sm font-medium w-1/6"),
        o(l, "class", "flex justify-between items-center p-2"),
        o(e, "class", "mt-2");
    },
    m($, b) {
      U($, e, b),
        s(e, l),
        s(l, t),
        s(t, i),
        s(l, d),
        s(l, g),
        s(g, V),
        s(l, v),
        s(l, I),
        s(I, E);
    },
    p($, b) {
      b & 2048 && y !== (y = Xs * Math.floor($[11] / 3) + "") && Z(E, y);
    },
    d($) {
      $ && r(e);
    },
  };
}
function ks(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = u("Goal Scored")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "Goal Scored")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (l = u("Assist")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "Assist")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (l = u("Clean Sheet")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "Clean Sheet")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (l = u("Penalty Save")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "Penalty Save")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (l = u("Penalty Missed")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "Penalty Missed")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (l = u("Yellow Card")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "Yellow Card")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (l = u("Red Card")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "Red Card")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (l = u("Own Goal")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "Own Goal")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (l = u("Highest Scoring Player")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "Highest Scoring Player")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (t = u(l)), this.h();
    },
    l(i) {
      e = f(i, "DIV", { class: !0 });
      var d = c(e);
      (t = m(d, l)), d.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(i, d) {
      U(i, e, d), s(e, t);
    },
    p(i, d) {
      d & 512 && l !== (l = i[21].eventEndMinute + "") && Z(t, l);
    },
    d(i) {
      i && r(e);
    },
  };
}
function $s(a) {
  let e,
    l = a[21].eventEndMinute + "",
    t;
  return {
    c() {
      (e = n("div")), (t = u(l)), this.h();
    },
    l(i) {
      e = f(i, "DIV", { class: !0 });
      var d = c(e);
      (t = m(d, l)), d.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(i, d) {
      U(i, e, d), s(e, t);
    },
    p(i, d) {
      d & 512 && l !== (l = i[21].eventEndMinute + "") && Z(t, l);
    },
    d(i) {
      i && r(e);
    },
  };
}
function Ss(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = u("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "-")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
    },
    d(t) {
      t && r(e);
    },
  };
}
function Ms(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = u("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "-")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (l = u("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "-")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (l = u("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "-")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (l = u("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "-")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (t = u(l)), this.h();
    },
    l(i) {
      e = f(i, "DIV", { class: !0 });
      var d = c(e);
      (t = m(d, l)), d.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(i, d) {
      U(i, e, d), s(e, t);
    },
    p(i, d) {
      d & 512 && l !== (l = i[21].eventEndMinute + "") && Z(t, l);
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
      (e = n("div")), (l = u("-")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, "-")), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
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
      (e = n("div")), (l = u(la)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, la)), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
    },
    p: st,
    d(t) {
      t && r(e);
    },
  };
}
function Ls(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = u(sa)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, sa)), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
    },
    p: st,
    d(t) {
      t && r(e);
    },
  };
}
function Us(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = u(ta)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, ta)), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
    },
    p: st,
    d(t) {
      t && r(e);
    },
  };
}
function Rs(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = u(Zs)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, Zs)), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
    },
    p: st,
    d(t) {
      t && r(e);
    },
  };
}
function Ks(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = u(a[13])), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, a[13])), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
    },
    p: st,
    d(t) {
      t && r(e);
    },
  };
}
function Ws(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = u(a[16])), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, a[16])), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
    },
    p: st,
    d(t) {
      t && r(e);
    },
  };
}
function qs(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = u(a[12])), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, a[12])), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
    },
    p: st,
    d(t) {
      t && r(e);
    },
  };
}
function Ys(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = u(a[15])), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, a[15])), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
    },
    p: st,
    d(t) {
      t && r(e);
    },
  };
}
function zs(a) {
  let e, l;
  return {
    c() {
      (e = n("div")), (l = u(ea)), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = c(e);
      (l = m(i, ea)), i.forEach(r), this.h();
    },
    h() {
      o(e, "class", "text-sm font-medium w-3/6");
    },
    m(t, i) {
      U(t, e, i), s(e, l);
    },
    p: st,
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
    d,
    g,
    V,
    v,
    I,
    y,
    E,
    $,
    b,
    T,
    M,
    F,
    S,
    x,
    A,
    N,
    R,
    P,
    w,
    h,
    C,
    q,
    te,
    j,
    H,
    B,
    Ce,
    G = a[21].eventType === 1 && ks(),
    Q = a[21].eventType === 2 && Ds(),
    ve = a[21].eventType === 5 && Is(),
    Y = a[21].eventType === 6 && Ts(),
    le = a[21].eventType === 7 && Vs(),
    Ne = a[21].eventType === 8 && Cs(),
    me = a[21].eventType === 9 && Ns(),
    ne = a[21].eventType === 10 && Ps(),
    Te = a[21].eventType === 11 && xs(),
    _e = a[21].eventType === 1 && Hs(a),
    fe = a[21].eventType === 2 && $s(a),
    ae = a[21].eventType === 5 && Ss(),
    pe = a[21].eventType === 6 && Ms(),
    be = a[21].eventType === 7 && Fs(),
    Pe = a[21].eventType === 8 && As(),
    ge = a[21].eventType === 9 && js(),
    ce = a[21].eventType === 10 && Gs(a),
    xe = a[21].eventType === 11 && Os(),
    J = a[21].eventType === 1 && Bs(),
    he = a[21].eventType === 2 && Ls(),
    Ve = a[21].eventType === 5 && Us(),
    ke = a[21].eventType === 6 && Rs(),
    de = a[21].eventType === 7 && Ks(a),
    ye = a[21].eventType === 8 && Ws(a),
    we = a[21].eventType === 9 && qs(a),
    De = a[21].eventType === 10 && Ys(a),
    ie = a[21].eventType === 11 && zs();
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (t = n("div")),
        G && G.c(),
        (i = _()),
        Q && Q.c(),
        (d = _()),
        ve && ve.c(),
        (g = _()),
        Y && Y.c(),
        (V = _()),
        le && le.c(),
        (v = _()),
        Ne && Ne.c(),
        (I = _()),
        me && me.c(),
        (y = _()),
        ne && ne.c(),
        (E = _()),
        Te && Te.c(),
        ($ = _()),
        (b = n("div")),
        _e && _e.c(),
        (T = _()),
        fe && fe.c(),
        (M = _()),
        ae && ae.c(),
        (F = _()),
        pe && pe.c(),
        (S = _()),
        be && be.c(),
        (x = _()),
        Pe && Pe.c(),
        (A = _()),
        ge && ge.c(),
        (N = _()),
        ce && ce.c(),
        (R = _()),
        xe && xe.c(),
        (P = _()),
        (w = n("div")),
        J && J.c(),
        (h = _()),
        he && he.c(),
        (C = _()),
        Ve && Ve.c(),
        (q = _()),
        ke && ke.c(),
        (te = _()),
        de && de.c(),
        (j = _()),
        ye && ye.c(),
        (H = _()),
        we && we.c(),
        (B = _()),
        De && De.c(),
        (Ce = _()),
        ie && ie.c(),
        this.h();
    },
    l(k) {
      e = f(k, "DIV", { class: !0 });
      var oe = c(e);
      l = f(oe, "DIV", { class: !0 });
      var Re = c(l);
      t = f(Re, "DIV", { class: !0 });
      var X = c(t);
      G && G.l(X),
        (i = p(X)),
        Q && Q.l(X),
        (d = p(X)),
        ve && ve.l(X),
        (g = p(X)),
        Y && Y.l(X),
        (V = p(X)),
        le && le.l(X),
        (v = p(X)),
        Ne && Ne.l(X),
        (I = p(X)),
        me && me.l(X),
        (y = p(X)),
        ne && ne.l(X),
        (E = p(X)),
        Te && Te.l(X),
        X.forEach(r),
        ($ = p(Re)),
        (b = f(Re, "DIV", { class: !0 }));
      var z = c(b);
      _e && _e.l(z),
        (T = p(z)),
        fe && fe.l(z),
        (M = p(z)),
        ae && ae.l(z),
        (F = p(z)),
        pe && pe.l(z),
        (S = p(z)),
        be && be.l(z),
        (x = p(z)),
        Pe && Pe.l(z),
        (A = p(z)),
        ge && ge.l(z),
        (N = p(z)),
        ce && ce.l(z),
        (R = p(z)),
        xe && xe.l(z),
        z.forEach(r),
        (P = p(Re)),
        (w = f(Re, "DIV", { class: !0 }));
      var se = c(w);
      J && J.l(se),
        (h = p(se)),
        he && he.l(se),
        (C = p(se)),
        Ve && Ve.l(se),
        (q = p(se)),
        ke && ke.l(se),
        (te = p(se)),
        de && de.l(se),
        (j = p(se)),
        ye && ye.l(se),
        (H = p(se)),
        we && we.l(se),
        (B = p(se)),
        De && De.l(se),
        (Ce = p(se)),
        ie && ie.l(se),
        se.forEach(r),
        Re.forEach(r),
        oe.forEach(r),
        this.h();
    },
    h() {
      o(t, "class", "text-sm font-medium w-3/6"),
        o(b, "class", "text-sm font-medium w-2/6"),
        o(w, "class", "text-sm font-medium w-1/6"),
        o(l, "class", "flex justify-between items-center p-2"),
        o(e, "class", "mt-2");
    },
    m(k, oe) {
      U(k, e, oe),
        s(e, l),
        s(l, t),
        G && G.m(t, null),
        s(t, i),
        Q && Q.m(t, null),
        s(t, d),
        ve && ve.m(t, null),
        s(t, g),
        Y && Y.m(t, null),
        s(t, V),
        le && le.m(t, null),
        s(t, v),
        Ne && Ne.m(t, null),
        s(t, I),
        me && me.m(t, null),
        s(t, y),
        ne && ne.m(t, null),
        s(t, E),
        Te && Te.m(t, null),
        s(l, $),
        s(l, b),
        _e && _e.m(b, null),
        s(b, T),
        fe && fe.m(b, null),
        s(b, M),
        ae && ae.m(b, null),
        s(b, F),
        pe && pe.m(b, null),
        s(b, S),
        be && be.m(b, null),
        s(b, x),
        Pe && Pe.m(b, null),
        s(b, A),
        ge && ge.m(b, null),
        s(b, N),
        ce && ce.m(b, null),
        s(b, R),
        xe && xe.m(b, null),
        s(l, P),
        s(l, w),
        J && J.m(w, null),
        s(w, h),
        he && he.m(w, null),
        s(w, C),
        Ve && Ve.m(w, null),
        s(w, q),
        ke && ke.m(w, null),
        s(w, te),
        de && de.m(w, null),
        s(w, j),
        ye && ye.m(w, null),
        s(w, H),
        we && we.m(w, null),
        s(w, B),
        De && De.m(w, null),
        s(w, Ce),
        ie && ie.m(w, null);
    },
    p(k, oe) {
      k[21].eventType === 1
        ? G || ((G = ks()), G.c(), G.m(t, i))
        : G && (G.d(1), (G = null)),
        k[21].eventType === 2
          ? Q || ((Q = Ds()), Q.c(), Q.m(t, d))
          : Q && (Q.d(1), (Q = null)),
        k[21].eventType === 5
          ? ve || ((ve = Is()), ve.c(), ve.m(t, g))
          : ve && (ve.d(1), (ve = null)),
        k[21].eventType === 6
          ? Y || ((Y = Ts()), Y.c(), Y.m(t, V))
          : Y && (Y.d(1), (Y = null)),
        k[21].eventType === 7
          ? le || ((le = Vs()), le.c(), le.m(t, v))
          : le && (le.d(1), (le = null)),
        k[21].eventType === 8
          ? Ne || ((Ne = Cs()), Ne.c(), Ne.m(t, I))
          : Ne && (Ne.d(1), (Ne = null)),
        k[21].eventType === 9
          ? me || ((me = Ns()), me.c(), me.m(t, y))
          : me && (me.d(1), (me = null)),
        k[21].eventType === 10
          ? ne || ((ne = Ps()), ne.c(), ne.m(t, E))
          : ne && (ne.d(1), (ne = null)),
        k[21].eventType === 11
          ? Te || ((Te = xs()), Te.c(), Te.m(t, null))
          : Te && (Te.d(1), (Te = null)),
        k[21].eventType === 1
          ? _e
            ? _e.p(k, oe)
            : ((_e = Hs(k)), _e.c(), _e.m(b, T))
          : _e && (_e.d(1), (_e = null)),
        k[21].eventType === 2
          ? fe
            ? fe.p(k, oe)
            : ((fe = $s(k)), fe.c(), fe.m(b, M))
          : fe && (fe.d(1), (fe = null)),
        k[21].eventType === 5
          ? ae || ((ae = Ss()), ae.c(), ae.m(b, F))
          : ae && (ae.d(1), (ae = null)),
        k[21].eventType === 6
          ? pe || ((pe = Ms()), pe.c(), pe.m(b, S))
          : pe && (pe.d(1), (pe = null)),
        k[21].eventType === 7
          ? be || ((be = Fs()), be.c(), be.m(b, x))
          : be && (be.d(1), (be = null)),
        k[21].eventType === 8
          ? Pe || ((Pe = As()), Pe.c(), Pe.m(b, A))
          : Pe && (Pe.d(1), (Pe = null)),
        k[21].eventType === 9
          ? ge || ((ge = js()), ge.c(), ge.m(b, N))
          : ge && (ge.d(1), (ge = null)),
        k[21].eventType === 10
          ? ce
            ? ce.p(k, oe)
            : ((ce = Gs(k)), ce.c(), ce.m(b, R))
          : ce && (ce.d(1), (ce = null)),
        k[21].eventType === 11
          ? xe || ((xe = Os()), xe.c(), xe.m(b, null))
          : xe && (xe.d(1), (xe = null)),
        k[21].eventType === 1
          ? J
            ? J.p(k, oe)
            : ((J = Bs()), J.c(), J.m(w, h))
          : J && (J.d(1), (J = null)),
        k[21].eventType === 2
          ? he
            ? he.p(k, oe)
            : ((he = Ls()), he.c(), he.m(w, C))
          : he && (he.d(1), (he = null)),
        k[21].eventType === 5
          ? Ve
            ? Ve.p(k, oe)
            : ((Ve = Us()), Ve.c(), Ve.m(w, q))
          : Ve && (Ve.d(1), (Ve = null)),
        k[21].eventType === 6
          ? ke
            ? ke.p(k, oe)
            : ((ke = Rs()), ke.c(), ke.m(w, te))
          : ke && (ke.d(1), (ke = null)),
        k[21].eventType === 7
          ? de
            ? de.p(k, oe)
            : ((de = Ks(k)), de.c(), de.m(w, j))
          : de && (de.d(1), (de = null)),
        k[21].eventType === 8
          ? ye
            ? ye.p(k, oe)
            : ((ye = Ws(k)), ye.c(), ye.m(w, H))
          : ye && (ye.d(1), (ye = null)),
        k[21].eventType === 9
          ? we
            ? we.p(k, oe)
            : ((we = qs(k)), we.c(), we.m(w, B))
          : we && (we.d(1), (we = null)),
        k[21].eventType === 10
          ? De
            ? De.p(k, oe)
            : ((De = Ys(k)), De.c(), De.m(w, Ce))
          : De && (De.d(1), (De = null)),
        k[21].eventType === 11
          ? ie
            ? ie.p(k, oe)
            : ((ie = zs()), ie.c(), ie.m(w, null))
          : ie && (ie.d(1), (ie = null));
    },
    d(k) {
      k && r(e),
        G && G.d(),
        Q && Q.d(),
        ve && ve.d(),
        Y && Y.d(),
        le && le.d(),
        Ne && Ne.d(),
        me && me.d(),
        ne && ne.d(),
        Te && Te.d(),
        _e && _e.d(),
        fe && fe.d(),
        ae && ae.d(),
        pe && pe.d(),
        be && be.d(),
        Pe && Pe.d(),
        ge && ge.d(),
        ce && ce.d(),
        xe && xe.d(),
        J && J.d(),
        he && he.d(),
        Ve && Ve.d(),
        ke && ke.d(),
        de && de.d(),
        ye && ye.d(),
        we && we.d(),
        De && De.d(),
        ie && ie.d();
    },
  };
}
function Ea(a) {
  let e,
    l,
    t = a[0] && gs(a);
  return {
    c() {
      t && t.c(), (e = zt());
    },
    l(i) {
      t && t.l(i), (e = zt());
    },
    m(i, d) {
      t && t.m(i, d), U(i, e, d), (l = !0);
    },
    p(i, [d]) {
      i[0]
        ? t
          ? (t.p(i, d), d & 1 && ee(t, 1))
          : ((t = gs(i)), t.c(), ee(t, 1), t.m(e.parentNode, e))
        : t &&
          (It(),
          ue(t, 1, 1, () => {
            t = null;
          }),
          Tt());
    },
    i(i) {
      l || (ee(t), (l = !0));
    },
    o(i) {
      ue(t), (l = !1);
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
    { playerDetail: d } = e,
    { gameweekDetail: g } = e,
    { playerTeam: V } = e,
    { opponentTeam: v } = e,
    { gameweek: I = 0 } = e,
    { seasonName: y = "" } = e,
    E = [],
    $ = [],
    b = [],
    T = [],
    M = 0,
    F = 0,
    S = -20,
    x = -10,
    A = -15,
    N = -10,
    R = -5;
  function P(h) {
    ds.call(this, a, h);
  }
  function w(h) {
    ds.call(this, a, h);
  }
  return (
    (a.$$set = (h) => {
      "showModal" in h && l(0, (t = h.showModal)),
        "closeDetailModal" in h && l(1, (i = h.closeDetailModal)),
        "playerDetail" in h && l(2, (d = h.playerDetail)),
        "gameweekDetail" in h && l(3, (g = h.gameweekDetail)),
        "playerTeam" in h && l(4, (V = h.playerTeam)),
        "opponentTeam" in h && l(5, (v = h.opponentTeam)),
        "gameweek" in h && l(6, (I = h.gameweek)),
        "seasonName" in h && l(7, (y = h.seasonName));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 397064 &&
        g &&
        (l(8, (E = [])),
        l(17, ($ = [])),
        l(18, (b = [])),
        l(9, (T = [])),
        l(10, (M = 0)),
        l(11, (F = 0)),
        g.events.forEach((h) => {
          switch (h.eventType) {
            case 0:
              E.push(h);
              break;
            case 3:
              $.push(h), l(10, M++, M);
              break;
            case 4:
              b.push(h), l(11, F++, F);
              break;
            default:
              T.push(h);
              break;
          }
        }),
        $.sort((h, C) => h.eventEndMinute - C.eventEndMinute),
        b.sort((h, C) => h.eventEndMinute - C.eventEndMinute),
        T.sort(
          (h, C) =>
            h.eventType - C.eventType || h.eventEndMinute - C.eventEndMinute
        ));
    }),
    [t, i, d, g, V, v, I, y, E, T, M, F, S, x, A, N, R, $, b, P, w]
  );
}
class Da extends Cl {
  constructor(e) {
    super(),
      Nl(this, e, ka, Ea, Pl, {
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
    d,
    g,
    V,
    v,
    I,
    y,
    E,
    $,
    b,
    T,
    M,
    F,
    S,
    x = a[3] && ia(a),
    A = a[3].gameweeks,
    N = [];
  for (let P = 0; P < A.length; P += 1) N[P] = ra(aa(a, A, P));
  const R = (P) =>
    ue(N[P], 1, 1, () => {
      N[P] = null;
    });
  return {
    c() {
      x && x.c(),
        (e = _()),
        (l = n("div")),
        (t = n("div")),
        (i = n("div")),
        (d = n("div")),
        (g = u("Gameweek")),
        (V = _()),
        (v = n("div")),
        (I = u("Opponent")),
        (y = _()),
        (E = n("div")),
        ($ = u("Points")),
        (b = _()),
        (T = n("div")),
        (M = u(" ")),
        (F = _());
      for (let P = 0; P < N.length; P += 1) N[P].c();
      this.h();
    },
    l(P) {
      x && x.l(P), (e = p(P)), (l = f(P, "DIV", { class: !0 }));
      var w = c(l);
      t = f(w, "DIV", { class: !0 });
      var h = c(t);
      i = f(h, "DIV", { class: !0 });
      var C = c(i);
      d = f(C, "DIV", { class: !0 });
      var q = c(d);
      (g = m(q, "Gameweek")),
        q.forEach(r),
        (V = p(C)),
        (v = f(C, "DIV", { class: !0 }));
      var te = c(v);
      (I = m(te, "Opponent")),
        te.forEach(r),
        (y = p(C)),
        (E = f(C, "DIV", { class: !0 }));
      var j = c(E);
      ($ = m(j, "Points")),
        j.forEach(r),
        (b = p(C)),
        (T = f(C, "DIV", { class: !0 }));
      var H = c(T);
      (M = m(H, " ")), H.forEach(r), C.forEach(r), (F = p(h));
      for (let B = 0; B < N.length; B += 1) N[B].l(h);
      h.forEach(r), w.forEach(r), this.h();
    },
    h() {
      o(d, "class", "w-1/4 px-4"),
        o(v, "class", "w-1/4 px-4"),
        o(E, "class", "w-1/4 px-4"),
        o(T, "class", "w-1/4 px-4"),
        o(
          i,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        o(t, "class", "overflow-x-auto flex-1"),
        o(l, "class", "flex flex-col space-y-4 text-lg mt-4");
    },
    m(P, w) {
      x && x.m(P, w),
        U(P, e, w),
        U(P, l, w),
        s(l, t),
        s(t, i),
        s(i, d),
        s(d, g),
        s(i, V),
        s(i, v),
        s(v, I),
        s(i, y),
        s(i, E),
        s(E, $),
        s(i, b),
        s(i, T),
        s(T, M),
        s(t, F);
      for (let h = 0; h < N.length; h += 1) N[h] && N[h].m(t, null);
      S = !0;
    },
    p(P, w) {
      if (
        (P[3]
          ? x
            ? (x.p(P, w), w & 8 && ee(x, 1))
            : ((x = ia(P)), x.c(), ee(x, 1), x.m(e.parentNode, e))
          : x &&
            (It(),
            ue(x, 1, 1, () => {
              x = null;
            }),
            Tt()),
        w & 392)
      ) {
        A = P[3].gameweeks;
        let h;
        for (h = 0; h < A.length; h += 1) {
          const C = aa(P, A, h);
          N[h]
            ? (N[h].p(C, w), ee(N[h], 1))
            : ((N[h] = ra(C)), N[h].c(), ee(N[h], 1), N[h].m(t, null));
        }
        for (It(), h = A.length; h < N.length; h += 1) R(h);
        Tt();
      }
    },
    i(P) {
      if (!S) {
        ee(x);
        for (let w = 0; w < A.length; w += 1) ee(N[w]);
        S = !0;
      }
    },
    o(P) {
      ue(x), (N = N.filter(Boolean));
      for (let w = 0; w < N.length; w += 1) ue(N[w]);
      S = !1;
    },
    d(P) {
      x && x.d(P), P && r(e), P && r(l), Vl(N, P);
    },
  };
}
function Ta(a) {
  let e, l;
  return (
    (e = new ua({})),
    {
      c() {
        Be(e.$$.fragment);
      },
      l(t) {
        qe(e.$$.fragment, t);
      },
      m(t, i) {
        Le(e, t, i), (l = !0);
      },
      p: st,
      i(t) {
        l || (ee(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        ue(e.$$.fragment, t), (l = !1);
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
        qe(e.$$.fragment, t);
      },
      m(t, i) {
        Le(e, t, i), (l = !0);
      },
      p(t, i) {
        const d = {};
        i & 10 && (d.gameweekDetail = t[3].gameweeks.find(t[11]) ?? null),
          i & 16 && (d.opponentTeam = t[4]),
          i & 8 && (d.playerTeam = t[6](t[3].teamId) ?? null),
          i & 32 && (d.showModal = t[5]),
          i & 8 && (d.playerDetail = t[3]),
          i & 2 && (d.gameweek = t[1]),
          i & 4 && (d.seasonName = t[2]?.name),
          e.$set(d);
      },
      i(t) {
        l || (ee(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        ue(e.$$.fragment, t), (l = !1);
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
    d,
    g,
    V,
    v,
    I,
    y = a[24]?.friendlyName + "",
    E,
    $,
    b,
    T,
    M = a[23].points + "",
    F,
    S,
    x,
    A,
    N,
    R,
    P,
    w,
    h,
    C,
    q;
  (v = new Xt({
    props: {
      className: "w-6 mr-2",
      primaryColour: a[24]?.primaryColourHex,
      secondaryColour: a[24]?.secondaryColourHex,
      thirdColour: a[24]?.thirdColourHex,
    },
  })),
    (R = new ya({ props: { className: "w-6 mr-2" } }));
  function te() {
    return a[12](a[23], a[24]);
  }
  return {
    c() {
      (e = n("div")),
        (l = n("div")),
        (i = u(t)),
        (d = _()),
        (g = n("div")),
        (V = n("a")),
        Be(v.$$.fragment),
        (I = _()),
        (E = u(y)),
        (b = _()),
        (T = n("div")),
        (F = u(M)),
        (S = _()),
        (x = n("div")),
        (A = n("button")),
        (N = n("span")),
        Be(R.$$.fragment),
        (P = u("View Details")),
        (w = _()),
        this.h();
    },
    l(j) {
      e = f(j, "DIV", { class: !0 });
      var H = c(e);
      l = f(H, "DIV", { class: !0 });
      var B = c(l);
      (i = m(B, t)), B.forEach(r), (d = p(H)), (g = f(H, "DIV", { class: !0 }));
      var Ce = c(g);
      V = f(Ce, "A", { class: !0, href: !0 });
      var G = c(V);
      qe(v.$$.fragment, G),
        (I = p(G)),
        (E = m(G, y)),
        G.forEach(r),
        Ce.forEach(r),
        (b = p(H)),
        (T = f(H, "DIV", { class: !0 }));
      var Q = c(T);
      (F = m(Q, M)), Q.forEach(r), (S = p(H)), (x = f(H, "DIV", { class: !0 }));
      var ve = c(x);
      A = f(ve, "BUTTON", {});
      var Y = c(A);
      N = f(Y, "SPAN", { class: !0 });
      var le = c(N);
      qe(R.$$.fragment, le),
        (P = m(le, "View Details")),
        le.forEach(r),
        Y.forEach(r),
        ve.forEach(r),
        (w = p(H)),
        H.forEach(r),
        this.h();
    },
    h() {
      o(l, "class", "w-1/4 px-4"),
        o(V, "class", "flex items-center"),
        o(V, "href", ($ = `/club?id=${a[24]?.id}`)),
        o(g, "class", "w-1/4 px-4"),
        o(T, "class", "w-1/4 px-4"),
        o(N, "class", "flex items-center"),
        o(x, "class", "w-1/4 px-4 flex items-center"),
        o(
          e,
          "class",
          "flex items-center justify-between p-2 py-4 border-b border-gray-700 cursor-pointer"
        );
    },
    m(j, H) {
      U(j, e, H),
        s(e, l),
        s(l, i),
        s(e, d),
        s(e, g),
        s(g, V),
        Le(v, V, null),
        s(V, I),
        s(V, E),
        s(e, b),
        s(e, T),
        s(T, F),
        s(e, S),
        s(e, x),
        s(x, A),
        s(A, N),
        Le(R, N, null),
        s(N, P),
        s(e, w),
        (h = !0),
        C || ((q = bt(A, "click", te)), (C = !0));
    },
    p(j, H) {
      (a = j), (!h || H & 8) && t !== (t = a[23].number + "") && Z(i, t);
      const B = {};
      H & 8 && (B.primaryColour = a[24]?.primaryColourHex),
        H & 8 && (B.secondaryColour = a[24]?.secondaryColourHex),
        H & 8 && (B.thirdColour = a[24]?.thirdColourHex),
        v.$set(B),
        (!h || H & 8) && y !== (y = a[24]?.friendlyName + "") && Z(E, y),
        (!h || (H & 8 && $ !== ($ = `/club?id=${a[24]?.id}`))) &&
          o(V, "href", $),
        (!h || H & 8) && M !== (M = a[23].points + "") && Z(F, M);
    },
    i(j) {
      h || (ee(v.$$.fragment, j), ee(R.$$.fragment, j), (h = !0));
    },
    o(j) {
      ue(v.$$.fragment, j), ue(R.$$.fragment, j), (h = !1);
    },
    d(j) {
      j && r(e), Ue(v), Ue(R), (C = !1), q();
    },
  };
}
function Va(a) {
  let e, l, t, i;
  const d = [Ta, Ia],
    g = [];
  function V(v, I) {
    return v[0] ? 0 : 1;
  }
  return (
    (e = V(a)),
    (l = g[e] = d[e](a)),
    {
      c() {
        l.c(), (t = zt());
      },
      l(v) {
        l.l(v), (t = zt());
      },
      m(v, I) {
        g[e].m(v, I), U(v, t, I), (i = !0);
      },
      p(v, [I]) {
        let y = e;
        (e = V(v)),
          e === y
            ? g[e].p(v, I)
            : (It(),
              ue(g[y], 1, 1, () => {
                g[y] = null;
              }),
              Tt(),
              (l = g[e]),
              l ? l.p(v, I) : ((l = g[e] = d[e](v)), l.c()),
              ee(l, 1),
              l.m(t.parentNode, t));
      },
      i(v) {
        i || (ee(l), (i = !0));
      },
      o(v) {
        ue(l), (i = !1);
      },
      d(v) {
        g[e].d(v), v && r(t);
      },
    }
  );
}
function Ca(a, e, l) {
  let t, i;
  na(a, ca, (C) => l(10, (i = C)));
  let d = !0,
    g = [],
    V = [],
    v,
    I = 1,
    y = null,
    E = [],
    $,
    b = null,
    T = new Map(),
    M = !1,
    F,
    S,
    x;
  fa(async () => {
    try {
      await ul.sync(),
        await ml.sync(),
        await hl.sync(),
        await us.sync,
        (F = ul.subscribe((C) => {
          g = C;
        })),
        (S = ml.subscribe((C) => {
          (V = C),
            (E = V.map((q) => ({
              fixture: q,
              homeTeam: A(q.homeTeamId),
              awayTeam: A(q.awayTeamId),
            })));
        })),
        (x = hl.subscribe((C) => {
          v = C;
        })),
        l(3, ($ = await us.getPlayerDetails(t, v?.activeSeason.id ?? 0))),
        l(1, (I = v?.activeGameweek ?? I)),
        l(2, (y = v?.activeSeason ?? y));
    } catch (C) {
      da.show("Error fetching player gameweek history.", "error"),
        console.error("Error fetching player gameweek history:", C);
    } finally {
      l(0, (d = !1));
    }
  }),
    ha(() => {
      F?.(), S?.(), x?.();
    });
  function A(C) {
    return g.find((q) => q.id === C);
  }
  function N(C) {
    if (T.has(C)) return T.get(C);
    let q = E.find((H) => H.fixture.id === C),
      te = q?.homeTeam?.id === $.teamId ? q?.awayTeam?.id : q?.homeTeam?.id,
      j = g.find((H) => H.id === te);
    return j
      ? (T.set(C, j), j)
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
  function R(C, q) {
    l(4, (b = q)), l(5, (M = !0));
  }
  function P() {
    l(5, (M = !1));
  }
  const w = (C) => C.number === I,
    h = (C, q) => R(C, q);
  return (
    (a.$$.update = () => {
      a.$$.dirty & 1024 && (t = Number(i.url.searchParams.get("id")));
    }),
    [d, I, y, $, b, M, A, N, R, P, i, w, h]
  );
}
class Na extends Cl {
  constructor(e) {
    super(), Nl(this, e, Ca, Va, Pl, {});
  }
}
function Pa(a) {
  let e,
    l,
    t,
    i,
    d,
    g = hs(a[0]?.position ?? -1) + "",
    V,
    v,
    I,
    y,
    E,
    $,
    b,
    T = a[0]?.shirtNumber + "",
    M,
    F,
    S,
    x,
    A,
    N,
    R = a[1]?.name + "",
    P,
    w,
    h,
    C = a[0]?.lastName + "",
    q,
    te,
    j,
    H,
    B = a[0]?.firstName + "",
    Ce,
    G,
    Q,
    ve,
    Y,
    le,
    Ne,
    me,
    ne,
    Te,
    _e = (Number(a[0]?.value ?? 0) / 4).toFixed(2) + "",
    fe,
    ae,
    pe,
    be,
    Pe,
    ge,
    ce,
    xe,
    J,
    he,
    Ve,
    ke,
    de,
    ye = vs(Number(a[0]?.dateOfBirth ?? 0)) + "",
    we,
    De,
    ie,
    k = _s(Number(a[0]?.dateOfBirth ?? 0)) + "",
    oe,
    Re,
    X,
    z,
    se,
    gt,
    Vt,
    Ye,
    Me,
    at,
    Fe,
    Xe,
    Ct,
    it,
    ft,
    ze,
    $e,
    Se,
    He,
    Ke,
    Ee,
    L,
    re,
    O,
    Oe,
    W,
    Ge,
    rt = (a[2] ? a[2].abbreviatedName : "") + "",
    ct,
    dt,
    yt,
    Ze,
    ut,
    mt,
    ot,
    tt,
    et = (a[3] ? a[3].abbreviatedName : "") + "",
    Nt,
    Pt,
    $t,
    nt,
    wt,
    Qe,
    ht,
    St,
    Mt,
    We,
    Je,
    Zt,
    Ft,
    vl,
    _l,
    el,
    At,
    pl,
    bl,
    tl,
    jt,
    gl,
    yl,
    Et,
    ll,
    wl,
    sl,
    al,
    xt,
    vt,
    Gt,
    Ht,
    kt,
    El,
    il,
    rl,
    kl,
    Ie,
    Dl,
    xl;
  y = new wa({
    props: {
      className: "h-10",
      primaryColour: a[1]?.primaryColourHex,
      secondaryColour: a[1]?.secondaryColourHex,
      thirdColour: a[1]?.thirdColourHex,
    },
  });
  var Ot = dl(a[0]?.nationality ?? "");
  function Hl(D) {
    return { props: { class: "w-4 h-4 mr-1", size: "100" } };
  }
  Ot && (H = cl(Ot, Hl())),
    (Xe = new Xt({
      props: {
        primaryColour: a[2] ? a[2].primaryColourHex : "",
        secondaryColour: a[2] ? a[2].secondaryColourHex : "",
        thirdColour: a[2] ? a[2].thirdColourHex : "",
      },
    })),
    (Ee = new Xt({
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
        (d = n("p")),
        (V = u(g)),
        (v = _()),
        (I = n("div")),
        Be(y.$$.fragment),
        (E = _()),
        ($ = n("p")),
        (b = u("Shirt: ")),
        (M = u(T)),
        (F = _()),
        (S = n("div")),
        (x = _()),
        (A = n("div")),
        (N = n("p")),
        (P = u(R)),
        (w = _()),
        (h = n("p")),
        (q = u(C)),
        (te = _()),
        (j = n("p")),
        H && Be(H.$$.fragment),
        (Ce = u(B)),
        (G = _()),
        (Q = n("div")),
        (ve = _()),
        (Y = n("div")),
        (le = n("p")),
        (Ne = u("Value")),
        (me = _()),
        (ne = n("p")),
        (Te = u("£")),
        (fe = u(_e)),
        (ae = u("m")),
        (pe = _()),
        (be = n("p")),
        (Pe = u("Weekly Change: 0%")),
        (ge = _()),
        (ce = n("div")),
        (xe = _()),
        (J = n("div")),
        (he = n("p")),
        (Ve = u("Age")),
        (ke = _()),
        (de = n("p")),
        (we = u(ye)),
        (De = _()),
        (ie = n("p")),
        (oe = u(k)),
        (Re = _()),
        (X = n("div")),
        (z = n("div")),
        (se = n("p")),
        (gt = u("Next Game:")),
        (Vt = _()),
        (Ye = n("div")),
        (Me = n("div")),
        (at = n("div")),
        (Fe = n("a")),
        Be(Xe.$$.fragment),
        (it = _()),
        (ft = n("div")),
        (ze = n("p")),
        ($e = u("v")),
        (Se = _()),
        (He = n("div")),
        (Ke = n("a")),
        Be(Ee.$$.fragment),
        (re = _()),
        (O = n("div")),
        (Oe = n("div")),
        (W = n("p")),
        (Ge = n("a")),
        (ct = u(rt)),
        (yt = _()),
        (Ze = n("div")),
        (ut = _()),
        (mt = n("div")),
        (ot = n("p")),
        (tt = n("a")),
        (Nt = u(et)),
        ($t = _()),
        (nt = n("div")),
        (wt = _()),
        (Qe = n("div")),
        (ht = n("p")),
        (St = u("Kick Off:")),
        (Mt = _()),
        (We = n("div")),
        (Je = n("p")),
        (Zt = u(a[4])),
        (Ft = n("span")),
        (vl = u("d")),
        (_l = u(`
                : `)),
        (el = u(a[5])),
        (At = n("span")),
        (pl = u("h")),
        (bl = u(`
                : `)),
        (tl = u(a[6])),
        (jt = n("span")),
        (gl = u("m")),
        (yl = _()),
        (Et = n("p")),
        (ll = u(a[7])),
        (wl = u(" | ")),
        (sl = u(a[8])),
        (al = _()),
        (xt = n("div")),
        (vt = n("div")),
        (Gt = n("ul")),
        (Ht = n("li")),
        (kt = n("button")),
        (El = u("Gameweek History")),
        (kl = _()),
        Ae && Ae.c(),
        this.h();
    },
    l(D) {
      e = f(D, "DIV", { class: !0 });
      var K = c(e);
      l = f(K, "DIV", { class: !0 });
      var _t = c(l);
      t = f(_t, "DIV", { class: !0 });
      var je = c(t);
      i = f(je, "DIV", { class: !0 });
      var lt = c(i);
      d = f(lt, "P", { class: !0 });
      var Qt = c(d);
      (V = m(Qt, g)),
        Qt.forEach(r),
        (v = p(lt)),
        (I = f(lt, "DIV", { class: !0 }));
      var $l = c(I);
      qe(y.$$.fragment, $l),
        $l.forEach(r),
        (E = p(lt)),
        ($ = f(lt, "P", { class: !0 }));
      var Il = c($);
      (b = m(Il, "Shirt: ")),
        (M = m(Il, T)),
        Il.forEach(r),
        lt.forEach(r),
        (F = p(je)),
        (S = f(je, "DIV", { class: !0, style: !0 })),
        c(S).forEach(r),
        (x = p(je)),
        (A = f(je, "DIV", { class: !0 }));
      var Bt = c(A);
      N = f(Bt, "P", { class: !0 });
      var Sl = c(N);
      (P = m(Sl, R)),
        Sl.forEach(r),
        (w = p(Bt)),
        (h = f(Bt, "P", { class: !0 }));
      var Ml = c(h);
      (q = m(Ml, C)),
        Ml.forEach(r),
        (te = p(Bt)),
        (j = f(Bt, "P", { class: !0 }));
      var Tl = c(j);
      H && qe(H.$$.fragment, Tl),
        (Ce = m(Tl, B)),
        Tl.forEach(r),
        Bt.forEach(r),
        (G = p(je)),
        (Q = f(je, "DIV", { class: !0, style: !0 })),
        c(Q).forEach(r),
        (ve = p(je)),
        (Y = f(je, "DIV", { class: !0 }));
      var Lt = c(Y);
      le = f(Lt, "P", { class: !0 });
      var Fl = c(le);
      (Ne = m(Fl, "Value")),
        Fl.forEach(r),
        (me = p(Lt)),
        (ne = f(Lt, "P", { class: !0 }));
      var ol = c(ne);
      (Te = m(ol, "£")),
        (fe = m(ol, _e)),
        (ae = m(ol, "m")),
        ol.forEach(r),
        (pe = p(Lt)),
        (be = f(Lt, "P", { class: !0 }));
      var Al = c(be);
      (Pe = m(Al, "Weekly Change: 0%")),
        Al.forEach(r),
        Lt.forEach(r),
        (ge = p(je)),
        (ce = f(je, "DIV", { class: !0, style: !0 })),
        c(ce).forEach(r),
        (xe = p(je)),
        (J = f(je, "DIV", { class: !0 }));
      var Ut = c(J);
      he = f(Ut, "P", { class: !0 });
      var jl = c(he);
      (Ve = m(jl, "Age")),
        jl.forEach(r),
        (ke = p(Ut)),
        (de = f(Ut, "P", { class: !0 }));
      var Gl = c(de);
      (we = m(Gl, ye)),
        Gl.forEach(r),
        (De = p(Ut)),
        (ie = f(Ut, "P", { class: !0 }));
      var Ol = c(ie);
      (oe = m(Ol, k)),
        Ol.forEach(r),
        Ut.forEach(r),
        je.forEach(r),
        (Re = p(_t)),
        (X = f(_t, "DIV", { class: !0 }));
      var Rt = c(X);
      z = f(Rt, "DIV", { class: !0 });
      var Kt = c(z);
      se = f(Kt, "P", { class: !0 });
      var Bl = c(se);
      (gt = m(Bl, "Next Game:")),
        Bl.forEach(r),
        (Vt = p(Kt)),
        (Ye = f(Kt, "DIV", { class: !0 }));
      var Ll = c(Ye);
      Me = f(Ll, "DIV", { class: !0 });
      var Wt = c(Me);
      at = f(Wt, "DIV", { class: !0 });
      var Ul = c(at);
      Fe = f(Ul, "A", { href: !0 });
      var Rl = c(Fe);
      qe(Xe.$$.fragment, Rl),
        Rl.forEach(r),
        Ul.forEach(r),
        (it = p(Wt)),
        (ft = f(Wt, "DIV", { class: !0 }));
      var Kl = c(ft);
      ze = f(Kl, "P", { class: !0 });
      var Wl = c(ze);
      ($e = m(Wl, "v")),
        Wl.forEach(r),
        Kl.forEach(r),
        (Se = p(Wt)),
        (He = f(Wt, "DIV", { class: !0 }));
      var ql = c(He);
      Ke = f(ql, "A", { href: !0 });
      var Yl = c(Ke);
      qe(Ee.$$.fragment, Yl),
        Yl.forEach(r),
        ql.forEach(r),
        Wt.forEach(r),
        Ll.forEach(r),
        (re = p(Kt)),
        (O = f(Kt, "DIV", { class: !0 }));
      var qt = c(O);
      Oe = f(qt, "DIV", { class: !0 });
      var zl = c(Oe);
      W = f(zl, "P", { class: !0 });
      var Ql = c(W);
      Ge = f(Ql, "A", { class: !0, href: !0 });
      var Jl = c(Ge);
      (ct = m(Jl, rt)),
        Jl.forEach(r),
        Ql.forEach(r),
        zl.forEach(r),
        (yt = p(qt)),
        (Ze = f(qt, "DIV", { class: !0 })),
        c(Ze).forEach(r),
        (ut = p(qt)),
        (mt = f(qt, "DIV", { class: !0 }));
      var Xl = c(mt);
      ot = f(Xl, "P", { class: !0 });
      var Zl = c(ot);
      tt = f(Zl, "A", { class: !0, href: !0 });
      var es = c(tt);
      (Nt = m(es, et)),
        es.forEach(r),
        Zl.forEach(r),
        Xl.forEach(r),
        qt.forEach(r),
        Kt.forEach(r),
        ($t = p(Rt)),
        (nt = f(Rt, "DIV", { class: !0, style: !0 })),
        c(nt).forEach(r),
        (wt = p(Rt)),
        (Qe = f(Rt, "DIV", { class: !0 }));
      var Yt = c(Qe);
      ht = f(Yt, "P", { class: !0 });
      var ts = c(ht);
      (St = m(ts, "Kick Off:")),
        ts.forEach(r),
        (Mt = p(Yt)),
        (We = f(Yt, "DIV", { class: !0 }));
      var ls = c(We);
      Je = f(ls, "P", { class: !0 });
      var pt = c(Je);
      (Zt = m(pt, a[4])), (Ft = f(pt, "SPAN", { class: !0 }));
      var ss = c(Ft);
      (vl = m(ss, "d")),
        ss.forEach(r),
        (_l = m(
          pt,
          `
                : `
        )),
        (el = m(pt, a[5])),
        (At = f(pt, "SPAN", { class: !0 }));
      var as = c(At);
      (pl = m(as, "h")),
        as.forEach(r),
        (bl = m(
          pt,
          `
                : `
        )),
        (tl = m(pt, a[6])),
        (jt = f(pt, "SPAN", { class: !0 }));
      var is = c(jt);
      (gl = m(is, "m")),
        is.forEach(r),
        pt.forEach(r),
        ls.forEach(r),
        (yl = p(Yt)),
        (Et = f(Yt, "P", { class: !0 }));
      var nl = c(Et);
      (ll = m(nl, a[7])),
        (wl = m(nl, " | ")),
        (sl = m(nl, a[8])),
        nl.forEach(r),
        Yt.forEach(r),
        Rt.forEach(r),
        _t.forEach(r),
        K.forEach(r),
        (al = p(D)),
        (xt = f(D, "DIV", { class: !0 }));
      var rs = c(xt);
      vt = f(rs, "DIV", { class: !0 });
      var fl = c(vt);
      Gt = f(fl, "UL", { class: !0 });
      var os = c(Gt);
      Ht = f(os, "LI", { class: !0 });
      var ns = c(Ht);
      kt = f(ns, "BUTTON", { class: !0 });
      var fs = c(kt);
      (El = m(fs, "Gameweek History")),
        fs.forEach(r),
        ns.forEach(r),
        os.forEach(r),
        (kl = p(fl)),
        Ae && Ae.l(fl),
        fl.forEach(r),
        rs.forEach(r),
        this.h();
    },
    h() {
      o(d, "class", "text-gray-300 text-xs"),
        o(I, "class", "py-2 flex"),
        o($, "class", "text-gray-300 text-xs"),
        o(i, "class", "flex-grow flex flex-col items-center"),
        o(S, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        Dt(S, "min-width", "2px"),
        Dt(S, "min-height", "50px"),
        o(N, "class", "text-gray-300 text-xs"),
        o(h, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        o(j, "class", "text-gray-300 text-xs flex items-center"),
        o(A, "class", "flex-grow"),
        o(Q, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        Dt(Q, "min-width", "2px"),
        Dt(Q, "min-height", "50px"),
        o(le, "class", "text-gray-300 text-xs"),
        o(ne, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
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
        o(de, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        o(ie, "class", "text-gray-300 text-xs"),
        o(J, "class", "flex-grow mb-4 md:mb-0"),
        o(
          t,
          "class",
          "flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
        ),
        o(se, "class", "text-gray-300 text-xs"),
        o(Fe, "href", (Ct = `/club?id=${a[2] ? a[2].id : -1}`)),
        o(at, "class", "w-10 ml-4 mr-4"),
        o(ze, "class", "text-xs mt-2 mb-2 font-bold"),
        o(ft, "class", "w-v ml-1 mr-1 flex justify-center"),
        o(Ke, "href", (L = `/club?id=${a[3] ? a[3].id : -1}`)),
        o(He, "class", "w-10 ml-4"),
        o(Me, "class", "flex justify-center items-center"),
        o(Ye, "class", "flex justify-center mb-2 mt-2"),
        o(Ge, "class", "text-gray-300 text-xs text-center"),
        o(Ge, "href", (dt = `/club?id=${a[2] ? a[2].id : -1}`)),
        o(W, "class", "text-gray-300 text-xs text-center"),
        o(Oe, "class", "w-10 ml-4 mr-4"),
        o(Ze, "class", "w-v ml-2 mr-2"),
        o(tt, "class", "text-gray-300 text-xs text-center"),
        o(tt, "href", (Pt = `/club?id=${a[3] ? a[3].id : -1}`)),
        o(ot, "class", "text-gray-300 text-xs text-center"),
        o(mt, "class", "w-10 ml-4"),
        o(O, "class", "flex justify-center"),
        o(z, "class", "flex-grow mb-4 md:mb-0"),
        o(
          nt,
          "class",
          "h-px bg-gray-400 w-full md:w-px md:h-full md:self-stretch"
        ),
        Dt(nt, "min-height", "2px"),
        Dt(nt, "min-width", "2px"),
        o(ht, "class", "text-gray-300 text-xs mt-4 md:mt-0"),
        o(Ft, "class", "text-gray-300 text-xs ml-1"),
        o(At, "class", "text-gray-300 text-xs ml-1"),
        o(jt, "class", "text-gray-300 text-xs ml-1"),
        o(Je, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        o(We, "class", "flex"),
        o(Et, "class", "text-gray-300 text-xs"),
        o(Qe, "class", "flex-grow mb-4 md:mb-0"),
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
          (il = `p-2 ${a[9] === "history" ? "text-white" : "text-gray-400"}`)
        ),
        o(
          Ht,
          "class",
          (rl = `mr-4 text-xs md:text-base ${
            a[9] === "history" ? "active-tab" : ""
          }`)
        ),
        o(Gt, "class", "flex bg-light-gray px-4 pt-2"),
        o(vt, "class", "bg-panel rounded-md m-4"),
        o(xt, "class", "m-4");
    },
    m(D, K) {
      U(D, e, K),
        s(e, l),
        s(l, t),
        s(t, i),
        s(i, d),
        s(d, V),
        s(i, v),
        s(i, I),
        Le(y, I, null),
        s(i, E),
        s(i, $),
        s($, b),
        s($, M),
        s(t, F),
        s(t, S),
        s(t, x),
        s(t, A),
        s(A, N),
        s(N, P),
        s(A, w),
        s(A, h),
        s(h, q),
        s(A, te),
        s(A, j),
        H && Le(H, j, null),
        s(j, Ce),
        s(t, G),
        s(t, Q),
        s(t, ve),
        s(t, Y),
        s(Y, le),
        s(le, Ne),
        s(Y, me),
        s(Y, ne),
        s(ne, Te),
        s(ne, fe),
        s(ne, ae),
        s(Y, pe),
        s(Y, be),
        s(be, Pe),
        s(t, ge),
        s(t, ce),
        s(t, xe),
        s(t, J),
        s(J, he),
        s(he, Ve),
        s(J, ke),
        s(J, de),
        s(de, we),
        s(J, De),
        s(J, ie),
        s(ie, oe),
        s(l, Re),
        s(l, X),
        s(X, z),
        s(z, se),
        s(se, gt),
        s(z, Vt),
        s(z, Ye),
        s(Ye, Me),
        s(Me, at),
        s(at, Fe),
        Le(Xe, Fe, null),
        s(Me, it),
        s(Me, ft),
        s(ft, ze),
        s(ze, $e),
        s(Me, Se),
        s(Me, He),
        s(He, Ke),
        Le(Ee, Ke, null),
        s(z, re),
        s(z, O),
        s(O, Oe),
        s(Oe, W),
        s(W, Ge),
        s(Ge, ct),
        s(O, yt),
        s(O, Ze),
        s(O, ut),
        s(O, mt),
        s(mt, ot),
        s(ot, tt),
        s(tt, Nt),
        s(X, $t),
        s(X, nt),
        s(X, wt),
        s(X, Qe),
        s(Qe, ht),
        s(ht, St),
        s(Qe, Mt),
        s(Qe, We),
        s(We, Je),
        s(Je, Zt),
        s(Je, Ft),
        s(Ft, vl),
        s(Je, _l),
        s(Je, el),
        s(Je, At),
        s(At, pl),
        s(Je, bl),
        s(Je, tl),
        s(Je, jt),
        s(jt, gl),
        s(Qe, yl),
        s(Qe, Et),
        s(Et, ll),
        s(Et, wl),
        s(Et, sl),
        U(D, al, K),
        U(D, xt, K),
        s(xt, vt),
        s(vt, Gt),
        s(Gt, Ht),
        s(Ht, kt),
        s(kt, El),
        s(vt, kl),
        Ae && Ae.m(vt, null),
        (Ie = !0),
        Dl || ((xl = bt(kt, "click", a[17])), (Dl = !0));
    },
    p(D, K) {
      (!Ie || K & 1) && g !== (g = hs(D[0]?.position ?? -1) + "") && Z(V, g);
      const _t = {};
      if (
        (K & 2 && (_t.primaryColour = D[1]?.primaryColourHex),
        K & 2 && (_t.secondaryColour = D[1]?.secondaryColourHex),
        K & 2 && (_t.thirdColour = D[1]?.thirdColourHex),
        y.$set(_t),
        (!Ie || K & 1) && T !== (T = D[0]?.shirtNumber + "") && Z(M, T),
        (!Ie || K & 2) && R !== (R = D[1]?.name + "") && Z(P, R),
        (!Ie || K & 1) && C !== (C = D[0]?.lastName + "") && Z(q, C),
        K & 1 && Ot !== (Ot = dl(D[0]?.nationality ?? "")))
      ) {
        if (H) {
          It();
          const Qt = H;
          ue(Qt.$$.fragment, 1, 0, () => {
            Ue(Qt, 1);
          }),
            Tt();
        }
        Ot
          ? ((H = cl(Ot, Hl())),
            Be(H.$$.fragment),
            ee(H.$$.fragment, 1),
            Le(H, j, Ce))
          : (H = null);
      }
      (!Ie || K & 1) && B !== (B = D[0]?.firstName + "") && Z(Ce, B),
        (!Ie || K & 1) &&
          _e !== (_e = (Number(D[0]?.value ?? 0) / 4).toFixed(2) + "") &&
          Z(fe, _e),
        (!Ie || K & 1) &&
          ye !== (ye = vs(Number(D[0]?.dateOfBirth ?? 0)) + "") &&
          Z(we, ye),
        (!Ie || K & 1) &&
          k !== (k = _s(Number(D[0]?.dateOfBirth ?? 0)) + "") &&
          Z(oe, k);
      const je = {};
      K & 4 && (je.primaryColour = D[2] ? D[2].primaryColourHex : ""),
        K & 4 && (je.secondaryColour = D[2] ? D[2].secondaryColourHex : ""),
        K & 4 && (je.thirdColour = D[2] ? D[2].thirdColourHex : ""),
        Xe.$set(je),
        (!Ie || (K & 4 && Ct !== (Ct = `/club?id=${D[2] ? D[2].id : -1}`))) &&
          o(Fe, "href", Ct);
      const lt = {};
      K & 8 && (lt.primaryColour = D[3] ? D[3].primaryColourHex : ""),
        K & 8 && (lt.secondaryColour = D[3] ? D[3].secondaryColourHex : ""),
        K & 8 && (lt.thirdColour = D[3] ? D[3].thirdColourHex : ""),
        Ee.$set(lt),
        (!Ie || (K & 8 && L !== (L = `/club?id=${D[3] ? D[3].id : -1}`))) &&
          o(Ke, "href", L),
        (!Ie || K & 4) &&
          rt !== (rt = (D[2] ? D[2].abbreviatedName : "") + "") &&
          Z(ct, rt),
        (!Ie || (K & 4 && dt !== (dt = `/club?id=${D[2] ? D[2].id : -1}`))) &&
          o(Ge, "href", dt),
        (!Ie || K & 8) &&
          et !== (et = (D[3] ? D[3].abbreviatedName : "") + "") &&
          Z(Nt, et),
        (!Ie || (K & 8 && Pt !== (Pt = `/club?id=${D[3] ? D[3].id : -1}`))) &&
          o(tt, "href", Pt),
        (!Ie || K & 16) && Z(Zt, D[4]),
        (!Ie || K & 32) && Z(el, D[5]),
        (!Ie || K & 64) && Z(tl, D[6]),
        (!Ie || K & 128) && Z(ll, D[7]),
        (!Ie || K & 256) && Z(sl, D[8]),
        (!Ie ||
          (K & 512 &&
            il !==
              (il = `p-2 ${
                D[9] === "history" ? "text-white" : "text-gray-400"
              }`))) &&
          o(kt, "class", il),
        (!Ie ||
          (K & 512 &&
            rl !==
              (rl = `mr-4 text-xs md:text-base ${
                D[9] === "history" ? "active-tab" : ""
              }`))) &&
          o(Ht, "class", rl),
        D[9] === "history"
          ? Ae
            ? K & 512 && ee(Ae, 1)
            : ((Ae = oa()), Ae.c(), ee(Ae, 1), Ae.m(vt, null))
          : Ae &&
            (It(),
            ue(Ae, 1, 1, () => {
              Ae = null;
            }),
            Tt());
    },
    i(D) {
      Ie ||
        (ee(y.$$.fragment, D),
        H && ee(H.$$.fragment, D),
        ee(Xe.$$.fragment, D),
        ee(Ee.$$.fragment, D),
        ee(Ae),
        (Ie = !0));
    },
    o(D) {
      ue(y.$$.fragment, D),
        H && ue(H.$$.fragment, D),
        ue(Xe.$$.fragment, D),
        ue(Ee.$$.fragment, D),
        ue(Ae),
        (Ie = !1);
    },
    d(D) {
      D && r(e),
        Ue(y),
        H && Ue(H),
        Ue(Xe),
        Ue(Ee),
        D && r(al),
        D && r(xt),
        Ae && Ae.d(),
        (Dl = !1),
        xl();
    },
  };
}
function xa(a) {
  let e, l;
  return (
    (e = new ua({})),
    {
      c() {
        Be(e.$$.fragment);
      },
      l(t) {
        qe(e.$$.fragment, t);
      },
      m(t, i) {
        Le(e, t, i), (l = !0);
      },
      p: st,
      i(t) {
        l || (ee(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        ue(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ue(e, t);
      },
    }
  );
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
        qe(e.$$.fragment, t);
      },
      m(t, i) {
        Le(e, t, i), (l = !0);
      },
      i(t) {
        l || (ee(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        ue(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ue(e, t);
      },
    }
  );
}
function Ha(a) {
  let e, l, t, i;
  const d = [xa, Pa],
    g = [];
  function V(v, I) {
    return v[10] ? 0 : 1;
  }
  return (
    (e = V(a)),
    (l = g[e] = d[e](a)),
    {
      c() {
        l.c(), (t = zt());
      },
      l(v) {
        l.l(v), (t = zt());
      },
      m(v, I) {
        g[e].m(v, I), U(v, t, I), (i = !0);
      },
      p(v, I) {
        let y = e;
        (e = V(v)),
          e === y
            ? g[e].p(v, I)
            : (It(),
              ue(g[y], 1, 1, () => {
                g[y] = null;
              }),
              Tt(),
              (l = g[e]),
              l ? l.p(v, I) : ((l = g[e] = d[e](v)), l.c()),
              ee(l, 1),
              l.m(t.parentNode, t));
      },
      i(v) {
        i || (ee(l), (i = !0));
      },
      o(v) {
        ue(l), (i = !1);
      },
      d(v) {
        g[e].d(v), v && r(t);
      },
    }
  );
}
function $a(a) {
  let e, l;
  return (
    (e = new va({
      props: { $$slots: { default: [Ha] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        Be(e.$$.fragment);
      },
      l(t) {
        qe(e.$$.fragment, t);
      },
      m(t, i) {
        Le(e, t, i), (l = !0);
      },
      p(t, [i]) {
        const d = {};
        i & 268437503 && (d.$$scope = { dirty: i, ctx: t }), e.$set(d);
      },
      i(t) {
        l || (ee(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        ue(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Ue(e, t);
      },
    }
  );
}
function Sa(a, e, l) {
  let t, i;
  na(a, ca, (B) => l(16, (i = B)));
  let d = 1,
    g = null,
    V = [],
    v = [],
    I = [],
    y,
    E = [],
    $ = null,
    b,
    T,
    M,
    F,
    S = null,
    x = null,
    A = null,
    N = "00",
    R = "00",
    P = "00",
    w = "-",
    h = "-",
    C = "history",
    q = !0;
  fa(async () => {
    try {
      await ul.sync(),
        await ml.sync(),
        await hl.sync(),
        await ms.sync(),
        (T = ul.subscribe((G) => {
          l(13, (v = G));
        })),
        (M = ms.subscribe((G) => {
          V = G;
        })),
        (F = ml.subscribe((G) => {
          l(14, (I = G)),
            l(
              15,
              (E = I.map((Q) => ({
                fixture: Q,
                homeTeam: te(Q.homeTeamId),
                awayTeam: te(Q.awayTeamId),
              })))
            );
        })),
        (b = hl.subscribe((G) => {
          y = G;
        })),
        l(0, (g = V.find((G) => G.id === t) ?? null)),
        l(1, ($ = v.find((G) => G.id === g?.teamId) ?? null));
      let B = I.filter((G) => G.homeTeamId === $?.id || G.awayTeamId === $?.id);
      l(12, (d = y?.activeGameweek ?? d)),
        (S = B.find((G) => G.gameweek === d) ?? null),
        l(2, (x = te(S?.homeTeamId ?? 0) ?? null)),
        l(3, (A = te(S?.awayTeamId ?? 0) ?? null)),
        l(7, (w = _a(Number(S?.kickOff)))),
        l(8, (h = pa(Number(S?.kickOff))));
      let Ce = ba(Number(S?.kickOff));
      l(4, (N = Ce.days.toString())),
        l(5, (R = Ce.hours.toString())),
        l(6, (P = Ce.minutes.toString()));
    } catch (B) {
      da.show("Error fetching player details.", "error"),
        console.error("Error fetching data:", B);
    } finally {
      l(10, (q = !1));
    }
  });
  function te(B) {
    return v.find((Ce) => Ce.id === B);
  }
  function j(B) {
    l(9, (C = B));
  }
  const H = () => j("history");
  return (
    (a.$$.update = () => {
      a.$$.dirty & 65536 && (t = Number(i.url.searchParams.get("id"))),
        a.$$.dirty & 61440 && I.length > 0 && v.length > 0 && ga(E, v, d);
    }),
    [g, $, x, A, N, R, P, w, h, C, q, j, d, v, I, E, i, H]
  );
}
class Ba extends Cl {
  constructor(e) {
    super(), Nl(this, e, Sa, $a, Pl, {});
  }
}
export { Ba as component };
