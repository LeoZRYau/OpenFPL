import { B as Ll } from "../chunks/BadgeIcon.5f1570c4.js";
import { i as yl } from "../chunks/global-stores.803ba169.js";
import {
  $ as wl,
  a as f,
  A as xt,
  b as Tt,
  B as yt,
  c as u,
  d as Re,
  f as qt,
  G as e,
  g as we,
  h as r,
  H as Ul,
  I as Jl,
  i as Tl,
  J as Ol,
  K as hl,
  k as o,
  L as Ct,
  l as n,
  m as i,
  M as pl,
  N as Gl,
  n as t,
  o as Al,
  O as Hl,
  p as gt,
  P as jl,
  q as v,
  r as m,
  S as Cl,
  s as Nl,
  u as M,
  v as Yt,
  x as gl,
  Y as Bl,
  y as bt,
  z as St,
} from "../chunks/index.c7b38e5e.js";
import { a as Yl } from "../chunks/Layout.39e2a716.js";
import { M as ql } from "../chunks/manager-gameweeks.bd195a5b.js";
import { m as Rl } from "../chunks/manager-store.58a33dc2.js";
import { p as el } from "../chunks/player-store.55a4cc5d.js";
import { p as Fl } from "../chunks/stores.f0f38284.js";
import { s as zt } from "../chunks/system-store.408d352e.js";
import { a as bl, g as xl, t as Kt } from "../chunks/team-store.a9afdac8.js";
import { t as Ml } from "../chunks/toast-store.64ad2768.js";
function El(l, s, d) {
  const a = l.slice();
  a[16] = s[d];
  const g = a[4](a[16].player.id);
  a[17] = g;
  const b = a[5](a[16].player.teamId);
  return (a[18] = b), a;
}
function Il(l, s, d) {
  const a = l.slice();
  return (a[21] = s[d]), a;
}
function $l(l) {
  let s,
    d,
    a = l[21] + "",
    g;
  return {
    c() {
      (s = o("option")), (d = v("Gameweek ")), (g = v(a)), this.h();
    },
    l(b) {
      s = n(b, "OPTION", {});
      var I = i(s);
      (d = m(I, "Gameweek ")), (g = m(I, a)), I.forEach(r), this.h();
    },
    h() {
      (s.__value = l[21]), (s.value = s.__value);
    },
    m(b, I) {
      Tt(b, s, I), e(s, d), e(s, g);
    },
    p: Ul,
    d(b) {
      b && r(s);
    },
  };
}
function Dl(l) {
  let s,
    d,
    a = bl(l[16].player.position) + "",
    g,
    b,
    I,
    $,
    P,
    j =
      l[17] && l[17].firstName.length > 2
        ? l[17].firstName.substring(0, 1) + "." + l[17].lastName
        : "",
    S,
    O,
    L,
    J,
    Q,
    H = l[18]?.friendlyName + "",
    T,
    F,
    E,
    y,
    U = l[16].appearance + "",
    R,
    me,
    Y,
    ce,
    K = (l[16].highestScoringPlayerId === l[17]?.id ? 1 : 0) + "",
    x,
    be,
    et,
    X,
    z = l[16].goals + "",
    Ye,
    Ne,
    xe,
    ye,
    _e = l[16].assists + "",
    ue,
    Ue,
    tt,
    N,
    Z = l[16].penaltySaves + "",
    Ee,
    Ie,
    lt,
    ee,
    de = l[16].cleanSheets + "",
    je,
    qe,
    re,
    $e,
    De = l[16].saves + "",
    he,
    Ke,
    st,
    W,
    Je = l[16].yellowCards + "",
    ze,
    oe,
    at,
    q,
    ne = l[16].ownGoals + "",
    Ge,
    Fe,
    Ae,
    te,
    ke = l[16].goalsConceded + "",
    pe,
    We,
    Pe,
    fe,
    G = l[16].redCards + "",
    ve,
    k,
    ut,
    h,
    V = l[16].bonusPoints + "",
    w,
    B,
    nt,
    le,
    Ve = l[16].points + "",
    rt,
    Qe,
    p;
  var Se = xl(l[17]?.nationality ?? "");
  function it(_) {
    return { props: { class: "w-4 h-4 mr-1", size: "100" } };
  }
  return (
    Se && ($ = gl(Se, it())),
    (J = new Ll({
      props: {
        primaryColour: l[18]?.primaryColourHex,
        secondaryColour: l[18]?.secondaryColourHex,
        thirdColour: l[18]?.thirdColourHex,
        className: "w-6 h-6 mr-2",
      },
    })),
    {
      c() {
        (s = o("div")),
          (d = o("div")),
          (g = v(a)),
          (b = f()),
          (I = o("div")),
          $ && bt($.$$.fragment),
          (P = f()),
          (S = v(j)),
          (O = f()),
          (L = o("div")),
          bt(J.$$.fragment),
          (Q = f()),
          (T = v(H)),
          (F = f()),
          (E = o("div")),
          (y = o("div")),
          (R = v(U)),
          (Y = f()),
          (ce = o("div")),
          (x = v(K)),
          (et = f()),
          (X = o("div")),
          (Ye = v(z)),
          (xe = f()),
          (ye = o("div")),
          (ue = v(_e)),
          (tt = f()),
          (N = o("div")),
          (Ee = v(Z)),
          (lt = f()),
          (ee = o("div")),
          (je = v(de)),
          (re = f()),
          ($e = o("div")),
          (he = v(De)),
          (st = f()),
          (W = o("div")),
          (ze = v(Je)),
          (at = f()),
          (q = o("div")),
          (Ge = v(ne)),
          (Ae = f()),
          (te = o("div")),
          (pe = v(ke)),
          (Pe = f()),
          (fe = o("div")),
          (ve = v(G)),
          (ut = f()),
          (h = o("div")),
          (w = v(V)),
          (nt = f()),
          (le = o("div")),
          (rt = v(Ve)),
          (Qe = f()),
          this.h();
      },
      l(_) {
        s = n(_, "DIV", { class: !0 });
        var c = i(s);
        d = n(c, "DIV", { class: !0 });
        var He = i(d);
        (g = m(He, a)),
          He.forEach(r),
          (b = u(c)),
          (I = n(c, "DIV", { class: !0 }));
        var ge = i(I);
        $ && St($.$$.fragment, ge),
          (P = u(ge)),
          (S = m(ge, j)),
          ge.forEach(r),
          (O = u(c)),
          (L = n(c, "DIV", { class: !0 }));
        var Xe = i(L);
        St(J.$$.fragment, Xe),
          (Q = u(Xe)),
          (T = m(Xe, H)),
          Xe.forEach(r),
          (F = u(c)),
          (E = n(c, "DIV", { class: !0 }));
        var C = i(E);
        y = n(C, "DIV", { class: !0 });
        var vt = i(y);
        (R = m(vt, U)),
          vt.forEach(r),
          (Y = u(C)),
          (ce = n(C, "DIV", { class: !0 }));
        var Ze = i(ce);
        (x = m(Ze, K)),
          Ze.forEach(r),
          (et = u(C)),
          (X = n(C, "DIV", { class: !0 }));
        var mt = i(X);
        (Ye = m(mt, z)),
          mt.forEach(r),
          (xe = u(C)),
          (ye = n(C, "DIV", { class: !0 }));
        var _t = i(ye);
        (ue = m(_t, _e)),
          _t.forEach(r),
          (tt = u(C)),
          (N = n(C, "DIV", { class: !0 }));
        var Me = i(N);
        (Ee = m(Me, Z)),
          Me.forEach(r),
          (lt = u(C)),
          (ee = n(C, "DIV", { class: !0 }));
        var Le = i(ee);
        (je = m(Le, de)),
          Le.forEach(r),
          (re = u(C)),
          ($e = n(C, "DIV", { class: !0 }));
        var Oe = i($e);
        (he = m(Oe, De)),
          Oe.forEach(r),
          (st = u(C)),
          (W = n(C, "DIV", { class: !0 }));
        var Be = i(W);
        (ze = m(Be, Je)),
          Be.forEach(r),
          (at = u(C)),
          (q = n(C, "DIV", { class: !0 }));
        var ht = i(q);
        (Ge = m(ht, ne)),
          ht.forEach(r),
          (Ae = u(C)),
          (te = n(C, "DIV", { class: !0 }));
        var Ce = i(te);
        (pe = m(Ce, ke)),
          Ce.forEach(r),
          (Pe = u(C)),
          (fe = n(C, "DIV", { class: !0 }));
        var Et = i(fe);
        (ve = m(Et, G)),
          Et.forEach(r),
          (ut = u(C)),
          (h = n(C, "DIV", { class: !0 }));
        var ot = i(h);
        (w = m(ot, V)),
          ot.forEach(r),
          C.forEach(r),
          (nt = u(c)),
          (le = n(c, "DIV", { class: !0 }));
        var It = i(le);
        (rt = m(It, Ve)), It.forEach(r), (Qe = u(c)), c.forEach(r), this.h();
      },
      h() {
        t(d, "class", "w-1/12 text-center mx-4"),
          t(I, "class", "w-2/12"),
          t(L, "class", "w-2/12 text-center flex items-center"),
          t(
            y,
            "class",
            (me = `w-1/12 text-center ${
              l[16].appearance > 0 ? "" : "text-gray-500"
            }`)
          ),
          t(
            ce,
            "class",
            (be = `w-1/12 text-center ${
              l[16].highestScoringPlayerId === l[17]?.id ? "" : "text-gray-500"
            }`)
          ),
          t(
            X,
            "class",
            (Ne = `w-1/12 text-center ${
              l[16].goals > 0 ? "" : "text-gray-500"
            }`)
          ),
          t(
            ye,
            "class",
            (Ue = `w-1/12 text-center ${
              l[16].assists > 0 ? "" : "text-gray-500"
            }`)
          ),
          t(
            N,
            "class",
            (Ie = `w-1/12 text-center ${
              l[16].penaltySaves > 0 ? "" : "text-gray-500"
            }`)
          ),
          t(
            ee,
            "class",
            (qe = `w-1/12 text-center ${
              l[16].cleanSheets > 0 ? "" : "text-gray-500"
            }`)
          ),
          t(
            $e,
            "class",
            (Ke = `w-1/12 text-center ${
              l[16].saves > 0 ? "" : "text-gray-500"
            }`)
          ),
          t(
            W,
            "class",
            (oe = `w-1/12 text-center ${
              l[16].yellowCards > 0 ? "" : "text-gray-500"
            }`)
          ),
          t(
            q,
            "class",
            (Fe = `w-1/12 text-center ${
              l[16].ownGoals > 0 ? "" : "text-gray-500"
            }`)
          ),
          t(
            te,
            "class",
            (We = `w-1/12 text-center ${
              l[16].goalsConceded > 0 ? "" : "text-gray-500"
            }`)
          ),
          t(
            fe,
            "class",
            (k = `w-1/12 text-center ${
              l[16].redCards > 0 ? "" : "text-gray-500"
            }`)
          ),
          t(
            h,
            "class",
            (B = `w-1/12 text-center ${
              l[16].bonusPoints > 0 ? "" : "text-gray-500"
            }`)
          ),
          t(E, "class", "w-1/2"),
          t(le, "class", "w-1/12 text-center"),
          t(
            s,
            "class",
            "flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer"
          );
      },
      m(_, c) {
        Tt(_, s, c),
          e(s, d),
          e(d, g),
          e(s, b),
          e(s, I),
          $ && xt($, I, null),
          e(I, P),
          e(I, S),
          e(s, O),
          e(s, L),
          xt(J, L, null),
          e(L, Q),
          e(L, T),
          e(s, F),
          e(s, E),
          e(E, y),
          e(y, R),
          e(E, Y),
          e(E, ce),
          e(ce, x),
          e(E, et),
          e(E, X),
          e(X, Ye),
          e(E, xe),
          e(E, ye),
          e(ye, ue),
          e(E, tt),
          e(E, N),
          e(N, Ee),
          e(E, lt),
          e(E, ee),
          e(ee, je),
          e(E, re),
          e(E, $e),
          e($e, he),
          e(E, st),
          e(E, W),
          e(W, ze),
          e(E, at),
          e(E, q),
          e(q, Ge),
          e(E, Ae),
          e(E, te),
          e(te, pe),
          e(E, Pe),
          e(E, fe),
          e(fe, ve),
          e(E, ut),
          e(E, h),
          e(h, w),
          e(s, nt),
          e(s, le),
          e(le, rt),
          e(s, Qe),
          (p = !0);
      },
      p(_, c) {
        if (
          ((!p || c & 2) &&
            a !== (a = bl(_[16].player.position) + "") &&
            M(g, a),
          c & 2 && Se !== (Se = xl(_[17]?.nationality ?? "")))
        ) {
          if ($) {
            Yt();
            const ge = $;
            Re(ge.$$.fragment, 1, 0, () => {
              yt(ge, 1);
            }),
              qt();
          }
          Se
            ? (($ = gl(Se, it())),
              bt($.$$.fragment),
              we($.$$.fragment, 1),
              xt($, I, P))
            : ($ = null);
        }
        (!p || c & 2) &&
          j !==
            (j =
              _[17] && _[17].firstName.length > 2
                ? _[17].firstName.substring(0, 1) + "." + _[17].lastName
                : "") &&
          M(S, j);
        const He = {};
        c & 2 && (He.primaryColour = _[18]?.primaryColourHex),
          c & 2 && (He.secondaryColour = _[18]?.secondaryColourHex),
          c & 2 && (He.thirdColour = _[18]?.thirdColourHex),
          J.$set(He),
          (!p || c & 2) && H !== (H = _[18]?.friendlyName + "") && M(T, H),
          (!p || c & 2) && U !== (U = _[16].appearance + "") && M(R, U),
          (!p ||
            (c & 2 &&
              me !==
                (me = `w-1/12 text-center ${
                  _[16].appearance > 0 ? "" : "text-gray-500"
                }`))) &&
            t(y, "class", me),
          (!p || c & 2) &&
            K !==
              (K = (_[16].highestScoringPlayerId === _[17]?.id ? 1 : 0) + "") &&
            M(x, K),
          (!p ||
            (c & 2 &&
              be !==
                (be = `w-1/12 text-center ${
                  _[16].highestScoringPlayerId === _[17]?.id
                    ? ""
                    : "text-gray-500"
                }`))) &&
            t(ce, "class", be),
          (!p || c & 2) && z !== (z = _[16].goals + "") && M(Ye, z),
          (!p ||
            (c & 2 &&
              Ne !==
                (Ne = `w-1/12 text-center ${
                  _[16].goals > 0 ? "" : "text-gray-500"
                }`))) &&
            t(X, "class", Ne),
          (!p || c & 2) && _e !== (_e = _[16].assists + "") && M(ue, _e),
          (!p ||
            (c & 2 &&
              Ue !==
                (Ue = `w-1/12 text-center ${
                  _[16].assists > 0 ? "" : "text-gray-500"
                }`))) &&
            t(ye, "class", Ue),
          (!p || c & 2) && Z !== (Z = _[16].penaltySaves + "") && M(Ee, Z),
          (!p ||
            (c & 2 &&
              Ie !==
                (Ie = `w-1/12 text-center ${
                  _[16].penaltySaves > 0 ? "" : "text-gray-500"
                }`))) &&
            t(N, "class", Ie),
          (!p || c & 2) && de !== (de = _[16].cleanSheets + "") && M(je, de),
          (!p ||
            (c & 2 &&
              qe !==
                (qe = `w-1/12 text-center ${
                  _[16].cleanSheets > 0 ? "" : "text-gray-500"
                }`))) &&
            t(ee, "class", qe),
          (!p || c & 2) && De !== (De = _[16].saves + "") && M(he, De),
          (!p ||
            (c & 2 &&
              Ke !==
                (Ke = `w-1/12 text-center ${
                  _[16].saves > 0 ? "" : "text-gray-500"
                }`))) &&
            t($e, "class", Ke),
          (!p || c & 2) && Je !== (Je = _[16].yellowCards + "") && M(ze, Je),
          (!p ||
            (c & 2 &&
              oe !==
                (oe = `w-1/12 text-center ${
                  _[16].yellowCards > 0 ? "" : "text-gray-500"
                }`))) &&
            t(W, "class", oe),
          (!p || c & 2) && ne !== (ne = _[16].ownGoals + "") && M(Ge, ne),
          (!p ||
            (c & 2 &&
              Fe !==
                (Fe = `w-1/12 text-center ${
                  _[16].ownGoals > 0 ? "" : "text-gray-500"
                }`))) &&
            t(q, "class", Fe),
          (!p || c & 2) && ke !== (ke = _[16].goalsConceded + "") && M(pe, ke),
          (!p ||
            (c & 2 &&
              We !==
                (We = `w-1/12 text-center ${
                  _[16].goalsConceded > 0 ? "" : "text-gray-500"
                }`))) &&
            t(te, "class", We),
          (!p || c & 2) && G !== (G = _[16].redCards + "") && M(ve, G),
          (!p ||
            (c & 2 &&
              k !==
                (k = `w-1/12 text-center ${
                  _[16].redCards > 0 ? "" : "text-gray-500"
                }`))) &&
            t(fe, "class", k),
          (!p || c & 2) && V !== (V = _[16].bonusPoints + "") && M(w, V),
          (!p ||
            (c & 2 &&
              B !==
                (B = `w-1/12 text-center ${
                  _[16].bonusPoints > 0 ? "" : "text-gray-500"
                }`))) &&
            t(h, "class", B),
          (!p || c & 2) && Ve !== (Ve = _[16].points + "") && M(rt, Ve);
      },
      i(_) {
        p || ($ && we($.$$.fragment, _), we(J.$$.fragment, _), (p = !0));
      },
      o(_) {
        $ && Re($.$$.fragment, _), Re(J.$$.fragment, _), (p = !1);
      },
      d(_) {
        _ && r(s), $ && yt($), yt(J);
      },
    }
  );
}
function Kl(l) {
  let s,
    d,
    a,
    g,
    b,
    I,
    $,
    P,
    j,
    S,
    O,
    L,
    J,
    Q,
    H,
    T,
    F,
    E,
    y,
    U,
    R,
    me,
    Y,
    ce,
    K,
    x,
    be,
    et,
    X,
    z,
    Ye,
    Ne,
    xe,
    ye,
    _e,
    ue,
    Ue,
    tt,
    N,
    Z,
    Ee,
    Ie,
    lt,
    ee,
    de,
    je,
    qe,
    re,
    $e,
    De,
    he,
    Ke,
    st,
    W,
    Je,
    ze,
    oe,
    at,
    q,
    ne,
    Ge,
    Fe,
    Ae,
    te,
    ke,
    pe,
    We,
    Pe,
    fe = l[2],
    G = [];
  for (let h = 0; h < fe.length; h += 1) G[h] = $l(Il(l, fe, h));
  let ve = l[1],
    k = [];
  for (let h = 0; h < ve.length; h += 1) k[h] = Dl(El(l, ve, h));
  const ut = (h) =>
    Re(k[h], 1, 1, () => {
      k[h] = null;
    });
  return {
    c() {
      (s = o("div")),
        (d = o("div")),
        (a = o("div")),
        (g = o("button")),
        (b = v("<")),
        ($ = f()),
        (P = o("select"));
      for (let h = 0; h < G.length; h += 1) G[h].c();
      (j = f()),
        (S = o("button")),
        (O = v(">")),
        (J = f()),
        (Q = o("div")),
        (H = o("div")),
        (T = o("div")),
        (F = o("div")),
        (E = v("Position")),
        (y = f()),
        (U = o("div")),
        (R = v("Player")),
        (me = f()),
        (Y = o("div")),
        (ce = v("Team")),
        (K = f()),
        (x = o("div")),
        (be = o("div")),
        (et = v("A")),
        (X = f()),
        (z = o("div")),
        (Ye = v("HSP")),
        (Ne = f()),
        (xe = o("div")),
        (ye = v("GS")),
        (_e = f()),
        (ue = o("div")),
        (Ue = v("GA")),
        (tt = f()),
        (N = o("div")),
        (Z = v("PS")),
        (Ee = f()),
        (Ie = o("div")),
        (lt = v("CS")),
        (ee = f()),
        (de = o("div")),
        (je = v("KS")),
        (qe = f()),
        (re = o("div")),
        ($e = v("YC")),
        (De = f()),
        (he = o("div")),
        (Ke = v("OG")),
        (st = f()),
        (W = o("div")),
        (Je = v("GC")),
        (ze = f()),
        (oe = o("div")),
        (at = v("RC")),
        (q = f()),
        (ne = o("div")),
        (Ge = v("B")),
        (Fe = f()),
        (Ae = o("div")),
        (te = v("PTS")),
        (ke = f());
      for (let h = 0; h < k.length; h += 1) k[h].c();
      this.h();
    },
    l(h) {
      s = n(h, "DIV", { class: !0 });
      var V = i(s);
      d = n(V, "DIV", { class: !0 });
      var w = i(d);
      a = n(w, "DIV", { class: !0 });
      var B = i(a);
      g = n(B, "BUTTON", { class: !0 });
      var nt = i(g);
      (b = m(nt, "<")),
        nt.forEach(r),
        ($ = u(B)),
        (P = n(B, "SELECT", { class: !0 }));
      var le = i(P);
      for (let Ce = 0; Ce < G.length; Ce += 1) G[Ce].l(le);
      le.forEach(r), (j = u(B)), (S = n(B, "BUTTON", { class: !0 }));
      var Ve = i(S);
      (O = m(Ve, ">")),
        Ve.forEach(r),
        B.forEach(r),
        w.forEach(r),
        (J = u(V)),
        (Q = n(V, "DIV", { class: !0 }));
      var rt = i(Q);
      H = n(rt, "DIV", { class: !0 });
      var Qe = i(H);
      T = n(Qe, "DIV", { class: !0 });
      var p = i(T);
      F = n(p, "DIV", { class: !0 });
      var Se = i(F);
      (E = m(Se, "Position")),
        Se.forEach(r),
        (y = u(p)),
        (U = n(p, "DIV", { class: !0 }));
      var it = i(U);
      (R = m(it, "Player")),
        it.forEach(r),
        (me = u(p)),
        (Y = n(p, "DIV", { class: !0 }));
      var _ = i(Y);
      (ce = m(_, "Team")),
        _.forEach(r),
        (K = u(p)),
        (x = n(p, "DIV", { class: !0 }));
      var c = i(x);
      be = n(c, "DIV", { class: !0 });
      var He = i(be);
      (et = m(He, "A")),
        He.forEach(r),
        (X = u(c)),
        (z = n(c, "DIV", { class: !0 }));
      var ge = i(z);
      (Ye = m(ge, "HSP")),
        ge.forEach(r),
        (Ne = u(c)),
        (xe = n(c, "DIV", { class: !0 }));
      var Xe = i(xe);
      (ye = m(Xe, "GS")),
        Xe.forEach(r),
        (_e = u(c)),
        (ue = n(c, "DIV", { class: !0 }));
      var C = i(ue);
      (Ue = m(C, "GA")),
        C.forEach(r),
        (tt = u(c)),
        (N = n(c, "DIV", { class: !0 }));
      var vt = i(N);
      (Z = m(vt, "PS")),
        vt.forEach(r),
        (Ee = u(c)),
        (Ie = n(c, "DIV", { class: !0 }));
      var Ze = i(Ie);
      (lt = m(Ze, "CS")),
        Ze.forEach(r),
        (ee = u(c)),
        (de = n(c, "DIV", { class: !0 }));
      var mt = i(de);
      (je = m(mt, "KS")),
        mt.forEach(r),
        (qe = u(c)),
        (re = n(c, "DIV", { class: !0 }));
      var _t = i(re);
      ($e = m(_t, "YC")),
        _t.forEach(r),
        (De = u(c)),
        (he = n(c, "DIV", { class: !0 }));
      var Me = i(he);
      (Ke = m(Me, "OG")),
        Me.forEach(r),
        (st = u(c)),
        (W = n(c, "DIV", { class: !0 }));
      var Le = i(W);
      (Je = m(Le, "GC")),
        Le.forEach(r),
        (ze = u(c)),
        (oe = n(c, "DIV", { class: !0 }));
      var Oe = i(oe);
      (at = m(Oe, "RC")),
        Oe.forEach(r),
        (q = u(c)),
        (ne = n(c, "DIV", { class: !0 }));
      var Be = i(ne);
      (Ge = m(Be, "B")),
        Be.forEach(r),
        c.forEach(r),
        (Fe = u(p)),
        (Ae = n(p, "DIV", { class: !0 }));
      var ht = i(Ae);
      (te = m(ht, "PTS")), ht.forEach(r), p.forEach(r), (ke = u(Qe));
      for (let Ce = 0; Ce < k.length; Ce += 1) k[Ce].l(Qe);
      Qe.forEach(r), rt.forEach(r), V.forEach(r), this.h();
    },
    h() {
      t(g, "class", "text-2xl rounded fpl-button px-2"),
        (g.disabled = I = l[0] === 1),
        t(P, "class", "p-4 fpl-dropdown text-sm md:text-lg text-center"),
        l[0] === void 0 && Ol(() => l[8].call(P)),
        t(S, "class", "text-2xl rounded fpl-button px-2 ml-1"),
        (S.disabled = L = l[0] === 38),
        t(a, "class", "flex items-center space-x-2"),
        t(d, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        t(F, "class", "w-1/12 text-center mx-4"),
        t(U, "class", "w-2/12"),
        t(Y, "class", "w-2/12 text-center"),
        t(be, "class", "w-1/12 text-center"),
        t(z, "class", "w-1/12 text-center"),
        t(xe, "class", "w-1/12 text-center"),
        t(ue, "class", "w-1/12 text-center"),
        t(N, "class", "w-1/12 text-center"),
        t(Ie, "class", "w-1/12 text-center"),
        t(de, "class", "w-1/12 text-center"),
        t(re, "class", "w-1/12 text-center"),
        t(he, "class", "w-1/12 text-center"),
        t(W, "class", "w-1/12 text-center"),
        t(oe, "class", "w-1/12 text-center"),
        t(ne, "class", "w-1/12 text-center"),
        t(x, "class", "w-1/2"),
        t(Ae, "class", "w-1/12 text-center"),
        t(
          T,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        t(H, "class", "overflow-x-auto flex-1"),
        t(Q, "class", "flex flex-col space-y-4 mt-4 text-lg"),
        t(s, "class", "mx-5 my-4");
    },
    m(h, V) {
      Tt(h, s, V), e(s, d), e(d, a), e(a, g), e(g, b), e(a, $), e(a, P);
      for (let w = 0; w < G.length; w += 1) G[w] && G[w].m(P, null);
      hl(P, l[0], !0),
        e(a, j),
        e(a, S),
        e(S, O),
        e(s, J),
        e(s, Q),
        e(Q, H),
        e(H, T),
        e(T, F),
        e(F, E),
        e(T, y),
        e(T, U),
        e(U, R),
        e(T, me),
        e(T, Y),
        e(Y, ce),
        e(T, K),
        e(T, x),
        e(x, be),
        e(be, et),
        e(x, X),
        e(x, z),
        e(z, Ye),
        e(x, Ne),
        e(x, xe),
        e(xe, ye),
        e(x, _e),
        e(x, ue),
        e(ue, Ue),
        e(x, tt),
        e(x, N),
        e(N, Z),
        e(x, Ee),
        e(x, Ie),
        e(Ie, lt),
        e(x, ee),
        e(x, de),
        e(de, je),
        e(x, qe),
        e(x, re),
        e(re, $e),
        e(x, De),
        e(x, he),
        e(he, Ke),
        e(x, st),
        e(x, W),
        e(W, Je),
        e(x, ze),
        e(x, oe),
        e(oe, at),
        e(x, q),
        e(x, ne),
        e(ne, Ge),
        e(T, Fe),
        e(T, Ae),
        e(Ae, te),
        e(H, ke);
      for (let w = 0; w < k.length; w += 1) k[w] && k[w].m(H, null);
      (pe = !0),
        We ||
          ((Pe = [
            Ct(g, "click", l[7]),
            Ct(P, "change", l[8]),
            Ct(S, "click", l[9]),
          ]),
          (We = !0));
    },
    p(h, [V]) {
      if (
        ((!pe || (V & 5 && I !== (I = h[0] === 1))) && (g.disabled = I), V & 4)
      ) {
        fe = h[2];
        let w;
        for (w = 0; w < fe.length; w += 1) {
          const B = Il(h, fe, w);
          G[w] ? G[w].p(B, V) : ((G[w] = $l(B)), G[w].c(), G[w].m(P, null));
        }
        for (; w < G.length; w += 1) G[w].d(1);
        G.length = fe.length;
      }
      if (
        (V & 5 && hl(P, h[0]),
        (!pe || (V & 5 && L !== (L = h[0] === 38))) && (S.disabled = L),
        V & 50)
      ) {
        ve = h[1];
        let w;
        for (w = 0; w < ve.length; w += 1) {
          const B = El(h, ve, w);
          k[w]
            ? (k[w].p(B, V), we(k[w], 1))
            : ((k[w] = Dl(B)), k[w].c(), we(k[w], 1), k[w].m(H, null));
        }
        for (Yt(), w = ve.length; w < k.length; w += 1) ut(w);
        qt();
      }
    },
    i(h) {
      if (!pe) {
        for (let V = 0; V < ve.length; V += 1) we(k[V]);
        pe = !0;
      }
    },
    o(h) {
      k = k.filter(Boolean);
      for (let V = 0; V < k.length; V += 1) Re(k[V]);
      pe = !1;
    },
    d(h) {
      h && r(s), pl(G, h), pl(k, h), (We = !1), Gl(Pe);
    },
  };
}
function zl(l, s, d) {
  let a = [],
    g = [],
    b,
    I,
    $,
    P,
    j = Array.from({ length: 38 }, (y, U) => U + 1),
    { selectedGameweek: S } = s,
    { fantasyTeam: O } = s,
    L = [];
  Al(async () => {
    try {
      await zt.sync(),
        await Kt.sync(),
        await el.sync(),
        (I = zt.subscribe((y) => {
          b = y;
        })),
        ($ = Kt.subscribe((y) => {
          a = y;
        })),
        (P = el.subscribe((y) => {
          g = y;
        })),
        d(0, (S = b?.activeGameweek ?? S)),
        d(1, (L = await el.getGameweekPlayers(Bl(O), S)));
    } catch (y) {
      Ml.show("Error fetching manager gameweek detail.", "error"),
        console.error("Error fetching manager gameweek detail:", y);
    }
  }),
    Hl(() => {
      $?.(), P?.(), I?.();
    });
  const J = (y) => {
    d(0, (S = Math.max(1, Math.min(38, S + y))));
  };
  function Q(y) {
    return g.find((U) => U.id === y) ?? null;
  }
  function H(y) {
    return a.find((U) => U.id === y) ?? null;
  }
  const T = () => J(-1);
  function F() {
    (S = jl(this)), d(0, S), d(2, j);
  }
  const E = () => J(1);
  return (
    (l.$$set = (y) => {
      "selectedGameweek" in y && d(0, (S = y.selectedGameweek)),
        "fantasyTeam" in y && d(6, (O = y.fantasyTeam));
    }),
    [S, L, j, J, Q, H, O, T, F, E]
  );
}
class Wl extends Cl {
  constructor(s) {
    super(), Tl(this, s, zl, Kl, Nl, { selectedGameweek: 0, fantasyTeam: 6 });
  }
}
function kl(l) {
  let s,
    d,
    a = "0",
    g;
  return {
    c() {
      (s = o("span")), (d = v("Total Points: ")), (g = v(a)), this.h();
    },
    l(b) {
      s = n(b, "SPAN", { class: !0 });
      var I = i(s);
      (d = m(I, "Total Points: ")), (g = m(I, a)), I.forEach(r), this.h();
    },
    h() {
      t(s, "class", "text-2xl");
    },
    m(b, I) {
      Tt(b, s, I), e(s, d), e(s, g);
    },
    d(b) {
      b && r(s);
    },
  };
}
function Pl(l) {
  let s, d;
  return (
    (s = new Wl({ props: { selectedGameweek: l[5], fantasyTeam: l[6] } })),
    {
      c() {
        bt(s.$$.fragment);
      },
      l(a) {
        St(s.$$.fragment, a);
      },
      m(a, g) {
        xt(s, a, g), (d = !0);
      },
      p(a, g) {
        const b = {};
        g & 32 && (b.selectedGameweek = a[5]), s.$set(b);
      },
      i(a) {
        d || (we(s.$$.fragment, a), (d = !0));
      },
      o(a) {
        Re(s.$$.fragment, a), (d = !1);
      },
      d(a) {
        yt(s, a);
      },
    }
  );
}
function Vl(l) {
  let s, d;
  return (
    (s = new ql({
      props: { viewGameweekDetail: l[8], principalId: l[1].principalId },
    })),
    {
      c() {
        bt(s.$$.fragment);
      },
      l(a) {
        St(s.$$.fragment, a);
      },
      m(a, g) {
        xt(s, a, g), (d = !0);
      },
      p(a, g) {
        const b = {};
        g & 2 && (b.principalId = a[1].principalId), s.$set(b);
      },
      i(a) {
        d || (we(s.$$.fragment, a), (d = !0));
      },
      o(a) {
        Re(s.$$.fragment, a), (d = !1);
      },
      d(a) {
        yt(s, a);
      },
    }
  );
}
function Ql(l) {
  let s,
    d,
    a,
    g,
    b,
    I,
    $,
    P,
    j,
    S,
    O,
    L,
    J,
    Q,
    H,
    T = l[1].displayName + "",
    F,
    E,
    y,
    U,
    R,
    me,
    Y,
    ce,
    K,
    x,
    be,
    et,
    X,
    z,
    Ye,
    Ne = l[4]?.abbreviatedName + "",
    xe,
    ye,
    _e,
    ue = l[4]?.name + "",
    Ue,
    tt,
    N,
    Z,
    Ee,
    Ie,
    lt,
    ee,
    de = l[1].weeklyPositionText + "",
    je,
    qe,
    re,
    $e,
    De = l[1].weeklyPoints.toLocaleString() + "",
    he,
    Ke,
    st,
    W,
    Je,
    ze,
    oe,
    at,
    q,
    ne,
    Ge = l[4]?.friendlyName + "",
    Fe,
    Ae,
    te,
    ke = l[1].monthlyPositionText + "",
    pe,
    We,
    Pe,
    fe,
    G = l[1].monthlyPoints.toLocaleString() + "",
    ve,
    k,
    ut,
    h,
    V,
    w,
    B,
    nt,
    le,
    Ve,
    rt,
    Qe,
    p,
    Se = l[1].seasonPositionText + "",
    it,
    _,
    c,
    He,
    ge = l[1].seasonPoints.toLocaleString() + "",
    Xe,
    C,
    vt,
    Ze,
    mt,
    _t,
    Me,
    Le,
    Oe,
    Be,
    ht,
    Ce,
    Et,
    ot,
    It,
    Nt,
    Wt,
    wt,
    Qt,
    ct,
    Gt,
    ie,
    Xt,
    tl;
  z = new Ll({
    props: {
      className: "w-7 mr-2",
      primaryColour: l[4]?.primaryColourHex,
      secondaryColour: l[4]?.secondaryColourHex,
      thirdColour: l[4]?.thirdColourHex,
    },
  });
  let Te = l[0] === "details" && kl(),
    se = l[0] === "details" && Pl(l),
    ae = l[0] === "gameweeks" && Vl(l);
  return {
    c() {
      (s = o("div")),
        (d = o("div")),
        (a = o("div")),
        (g = o("div")),
        (b = o("img")),
        (P = f()),
        (j = o("div")),
        (S = f()),
        (O = o("div")),
        (L = o("p")),
        (J = v("Manager")),
        (Q = f()),
        (H = o("p")),
        (F = v(T)),
        (E = f()),
        (y = o("p")),
        (U = v("Joined: ")),
        (R = v(l[2])),
        (me = f()),
        (Y = o("div")),
        (ce = f()),
        (K = o("div")),
        (x = o("p")),
        (be = v("Favourite Team")),
        (et = f()),
        (X = o("p")),
        bt(z.$$.fragment),
        (Ye = f()),
        (xe = v(Ne)),
        (ye = f()),
        (_e = o("p")),
        (Ue = v(ue)),
        (tt = f()),
        (N = o("div")),
        (Z = o("div")),
        (Ee = o("p")),
        (Ie = v("Leaderboards")),
        (lt = f()),
        (ee = o("p")),
        (je = v(de)),
        (qe = f()),
        (re = o("span")),
        ($e = v("(")),
        (he = v(De)),
        (Ke = v(")")),
        (st = f()),
        (W = o("p")),
        (Je = v("Weekly")),
        (ze = f()),
        (oe = o("div")),
        (at = f()),
        (q = o("div")),
        (ne = o("p")),
        (Fe = v(Ge)),
        (Ae = f()),
        (te = o("p")),
        (pe = v(ke)),
        (We = f()),
        (Pe = o("span")),
        (fe = v("(")),
        (ve = v(G)),
        (k = v(")")),
        (ut = f()),
        (h = o("p")),
        (V = v("Club")),
        (w = f()),
        (B = o("div")),
        (nt = f()),
        (le = o("div")),
        (Ve = o("p")),
        (rt = v(Sl)),
        (Qe = f()),
        (p = o("p")),
        (it = v(Se)),
        (_ = f()),
        (c = o("span")),
        (He = v("(")),
        (Xe = v(ge)),
        (C = v(")")),
        (vt = f()),
        (Ze = o("p")),
        (mt = v("Season")),
        (_t = f()),
        (Me = o("div")),
        (Le = o("div")),
        (Oe = o("div")),
        (Be = o("button")),
        (ht = v("Details")),
        (Et = f()),
        (ot = o("button")),
        (It = v("Gameweeks")),
        (Wt = f()),
        (wt = o("div")),
        Te && Te.c(),
        (Qt = f()),
        (ct = o("div")),
        se && se.c(),
        (Gt = f()),
        ae && ae.c(),
        this.h();
    },
    l(D) {
      s = n(D, "DIV", { class: !0 });
      var A = i(s);
      d = n(A, "DIV", { class: !0 });
      var pt = i(d);
      a = n(pt, "DIV", { class: !0 });
      var dt = i(a);
      g = n(dt, "DIV", { class: !0 });
      var ll = i(g);
      (b = n(ll, "IMG", { class: !0, src: !0, alt: !0 })),
        ll.forEach(r),
        (P = u(dt)),
        (j = n(dt, "DIV", { class: !0, style: !0 })),
        i(j).forEach(r),
        (S = u(dt)),
        (O = n(dt, "DIV", { class: !0 }));
      var $t = i(O);
      L = n($t, "P", { class: !0 });
      var sl = i(L);
      (J = m(sl, "Manager")),
        sl.forEach(r),
        (Q = u($t)),
        (H = n($t, "P", { class: !0 }));
      var al = i(H);
      (F = m(al, T)),
        al.forEach(r),
        (E = u($t)),
        (y = n($t, "P", { class: !0 }));
      var Zt = i(y);
      (U = m(Zt, "Joined: ")),
        (R = m(Zt, l[2])),
        Zt.forEach(r),
        $t.forEach(r),
        (me = u(dt)),
        (Y = n(dt, "DIV", { class: !0, style: !0 })),
        i(Y).forEach(r),
        (ce = u(dt)),
        (K = n(dt, "DIV", { class: !0 }));
      var Dt = i(K);
      x = n(Dt, "P", { class: !0 });
      var rl = i(x);
      (be = m(rl, "Favourite Team")),
        rl.forEach(r),
        (et = u(Dt)),
        (X = n(Dt, "P", { class: !0 }));
      var At = i(X);
      St(z.$$.fragment, At),
        (Ye = u(At)),
        (xe = m(At, Ne)),
        At.forEach(r),
        (ye = u(Dt)),
        (_e = n(Dt, "P", { class: !0 }));
      var ol = i(_e);
      (Ue = m(ol, ue)),
        ol.forEach(r),
        Dt.forEach(r),
        dt.forEach(r),
        (tt = u(pt)),
        (N = n(pt, "DIV", { class: !0 }));
      var ft = i(N);
      Z = n(ft, "DIV", { class: !0 });
      var kt = i(Z);
      Ee = n(kt, "P", { class: !0 });
      var nl = i(Ee);
      (Ie = m(nl, "Leaderboards")),
        nl.forEach(r),
        (lt = u(kt)),
        (ee = n(kt, "P", { class: !0 }));
      var Ht = i(ee);
      (je = m(Ht, de)), (qe = u(Ht)), (re = n(Ht, "SPAN", { class: !0 }));
      var Mt = i(re);
      ($e = m(Mt, "(")),
        (he = m(Mt, De)),
        (Ke = m(Mt, ")")),
        Mt.forEach(r),
        Ht.forEach(r),
        (st = u(kt)),
        (W = n(kt, "P", { class: !0 }));
      var il = i(W);
      (Je = m(il, "Weekly")),
        il.forEach(r),
        kt.forEach(r),
        (ze = u(ft)),
        (oe = n(ft, "DIV", { class: !0, style: !0 })),
        i(oe).forEach(r),
        (at = u(ft)),
        (q = n(ft, "DIV", { class: !0 }));
      var Pt = i(q);
      ne = n(Pt, "P", { class: !0 });
      var cl = i(ne);
      (Fe = m(cl, Ge)),
        cl.forEach(r),
        (Ae = u(Pt)),
        (te = n(Pt, "P", { class: !0 }));
      var Lt = i(te);
      (pe = m(Lt, ke)), (We = u(Lt)), (Pe = n(Lt, "SPAN", { class: !0 }));
      var Ot = i(Pe);
      (fe = m(Ot, "(")),
        (ve = m(Ot, G)),
        (k = m(Ot, ")")),
        Ot.forEach(r),
        Lt.forEach(r),
        (ut = u(Pt)),
        (h = n(Pt, "P", { class: !0 }));
      var dl = i(h);
      (V = m(dl, "Club")),
        dl.forEach(r),
        Pt.forEach(r),
        (w = u(ft)),
        (B = n(ft, "DIV", { class: !0, style: !0 })),
        i(B).forEach(r),
        (nt = u(ft)),
        (le = n(ft, "DIV", { class: !0 }));
      var Vt = i(le);
      Ve = n(Vt, "P", { class: !0 });
      var fl = i(Ve);
      (rt = m(fl, Sl)),
        fl.forEach(r),
        (Qe = u(Vt)),
        (p = n(Vt, "P", { class: !0 }));
      var Bt = i(p);
      (it = m(Bt, Se)), (_ = u(Bt)), (c = n(Bt, "SPAN", { class: !0 }));
      var Ut = i(c);
      (He = m(Ut, "(")),
        (Xe = m(Ut, ge)),
        (C = m(Ut, ")")),
        Ut.forEach(r),
        Bt.forEach(r),
        (vt = u(Vt)),
        (Ze = n(Vt, "P", { class: !0 }));
      var ul = i(Ze);
      (mt = m(ul, "Season")),
        ul.forEach(r),
        Vt.forEach(r),
        ft.forEach(r),
        pt.forEach(r),
        (_t = u(A)),
        (Me = n(A, "DIV", { class: !0 }));
      var jt = i(Me);
      Le = n(jt, "DIV", { class: !0 });
      var Jt = i(Le);
      Oe = n(Jt, "DIV", { class: !0 });
      var Ft = i(Oe);
      Be = n(Ft, "BUTTON", { class: !0 });
      var vl = i(Be);
      (ht = m(vl, "Details")),
        vl.forEach(r),
        (Et = u(Ft)),
        (ot = n(Ft, "BUTTON", { class: !0 }));
      var ml = i(ot);
      (It = m(ml, "Gameweeks")),
        ml.forEach(r),
        Ft.forEach(r),
        (Wt = u(Jt)),
        (wt = n(Jt, "DIV", { class: !0 }));
      var _l = i(wt);
      Te && Te.l(_l),
        _l.forEach(r),
        Jt.forEach(r),
        (Qt = u(jt)),
        (ct = n(jt, "DIV", { class: !0 }));
      var Rt = i(ct);
      se && se.l(Rt),
        (Gt = u(Rt)),
        ae && ae.l(Rt),
        Rt.forEach(r),
        jt.forEach(r),
        A.forEach(r),
        this.h();
    },
    h() {
      t(b, "class", "w-20"),
        wl(b.src, (I = l[3])) || t(b, "src", I),
        t(b, "alt", ($ = l[1].displayName)),
        t(g, "class", "flex"),
        t(j, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        gt(j, "min-width", "2px"),
        gt(j, "min-height", "50px"),
        t(L, "class", "text-gray-300 text-xs"),
        t(H, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        t(y, "class", "text-gray-300 text-xs"),
        t(O, "class", "flex-grow"),
        t(Y, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        gt(Y, "min-width", "2px"),
        gt(Y, "min-height", "50px"),
        t(x, "class", "text-gray-300 text-xs"),
        t(
          X,
          "class",
          "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold flex items-center"
        ),
        t(_e, "class", "text-gray-300 text-xs"),
        t(K, "class", "flex-grow"),
        t(
          a,
          "class",
          "flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
        ),
        t(Ee, "class", "text-gray-300 text-xs"),
        t(re, "class", "text-xs"),
        t(ee, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        t(W, "class", "text-gray-300 text-xs"),
        t(Z, "class", "flex-grow"),
        t(oe, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        gt(oe, "min-width", "2px"),
        gt(oe, "min-height", "50px"),
        t(ne, "class", "text-gray-300 text-xs"),
        t(Pe, "class", "text-xs"),
        t(te, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        t(h, "class", "text-gray-300 text-xs"),
        t(q, "class", "flex-grow"),
        t(B, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        gt(B, "min-width", "2px"),
        gt(B, "min-height", "50px"),
        t(Ve, "class", "text-gray-300 text-xs"),
        t(c, "class", "text-xs"),
        t(p, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        t(Ze, "class", "text-gray-300 text-xs"),
        t(le, "class", "flex-grow"),
        t(
          N,
          "class",
          "flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
        ),
        t(d, "class", "flex flex-col md:flex-row"),
        t(
          Be,
          "class",
          (Ce = `btn ${
            l[0] === "details" ? "fpl-button" : "inactive-btn"
          } px-4 py-2 rounded-l-md font-bold text-md min-w-[125px]`)
        ),
        t(
          ot,
          "class",
          (Nt = `btn ${
            l[0] === "gameweeks" ? "fpl-button" : "inactive-btn"
          } px-4 py-2 rounded-r-md font-bold text-md min-w-[125px]`)
        ),
        t(Oe, "class", "flex"),
        t(wt, "class", "px-4"),
        t(
          Le,
          "class",
          "flex justify-between items-center text-white px-4 pt-4 rounded-md w-full"
        ),
        t(ct, "class", "w-full"),
        t(Me, "class", "flex flex-col bg-panel m-4 rounded-md"),
        t(s, "class", "m-4");
    },
    m(D, A) {
      Tt(D, s, A),
        e(s, d),
        e(d, a),
        e(a, g),
        e(g, b),
        e(a, P),
        e(a, j),
        e(a, S),
        e(a, O),
        e(O, L),
        e(L, J),
        e(O, Q),
        e(O, H),
        e(H, F),
        e(O, E),
        e(O, y),
        e(y, U),
        e(y, R),
        e(a, me),
        e(a, Y),
        e(a, ce),
        e(a, K),
        e(K, x),
        e(x, be),
        e(K, et),
        e(K, X),
        xt(z, X, null),
        e(X, Ye),
        e(X, xe),
        e(K, ye),
        e(K, _e),
        e(_e, Ue),
        e(d, tt),
        e(d, N),
        e(N, Z),
        e(Z, Ee),
        e(Ee, Ie),
        e(Z, lt),
        e(Z, ee),
        e(ee, je),
        e(ee, qe),
        e(ee, re),
        e(re, $e),
        e(re, he),
        e(re, Ke),
        e(Z, st),
        e(Z, W),
        e(W, Je),
        e(N, ze),
        e(N, oe),
        e(N, at),
        e(N, q),
        e(q, ne),
        e(ne, Fe),
        e(q, Ae),
        e(q, te),
        e(te, pe),
        e(te, We),
        e(te, Pe),
        e(Pe, fe),
        e(Pe, ve),
        e(Pe, k),
        e(q, ut),
        e(q, h),
        e(h, V),
        e(N, w),
        e(N, B),
        e(N, nt),
        e(N, le),
        e(le, Ve),
        e(Ve, rt),
        e(le, Qe),
        e(le, p),
        e(p, it),
        e(p, _),
        e(p, c),
        e(c, He),
        e(c, Xe),
        e(c, C),
        e(le, vt),
        e(le, Ze),
        e(Ze, mt),
        e(s, _t),
        e(s, Me),
        e(Me, Le),
        e(Le, Oe),
        e(Oe, Be),
        e(Be, ht),
        e(Oe, Et),
        e(Oe, ot),
        e(ot, It),
        e(Le, Wt),
        e(Le, wt),
        Te && Te.m(wt, null),
        e(Me, Qt),
        e(Me, ct),
        se && se.m(ct, null),
        e(ct, Gt),
        ae && ae.m(ct, null),
        (ie = !0),
        Xt ||
          ((tl = [Ct(Be, "click", l[10]), Ct(ot, "click", l[11])]), (Xt = !0));
    },
    p(D, A) {
      (!ie || (A & 8 && !wl(b.src, (I = D[3])))) && t(b, "src", I),
        (!ie || (A & 2 && $ !== ($ = D[1].displayName))) && t(b, "alt", $),
        (!ie || A & 2) && T !== (T = D[1].displayName + "") && M(F, T),
        (!ie || A & 4) && M(R, D[2]);
      const pt = {};
      A & 16 && (pt.primaryColour = D[4]?.primaryColourHex),
        A & 16 && (pt.secondaryColour = D[4]?.secondaryColourHex),
        A & 16 && (pt.thirdColour = D[4]?.thirdColourHex),
        z.$set(pt),
        (!ie || A & 16) &&
          Ne !== (Ne = D[4]?.abbreviatedName + "") &&
          M(xe, Ne),
        (!ie || A & 16) && ue !== (ue = D[4]?.name + "") && M(Ue, ue),
        (!ie || A & 2) &&
          de !== (de = D[1].weeklyPositionText + "") &&
          M(je, de),
        (!ie || A & 2) &&
          De !== (De = D[1].weeklyPoints.toLocaleString() + "") &&
          M(he, De),
        (!ie || A & 16) && Ge !== (Ge = D[4]?.friendlyName + "") && M(Fe, Ge),
        (!ie || A & 2) &&
          ke !== (ke = D[1].monthlyPositionText + "") &&
          M(pe, ke),
        (!ie || A & 2) &&
          G !== (G = D[1].monthlyPoints.toLocaleString() + "") &&
          M(ve, G),
        (!ie || A & 2) &&
          Se !== (Se = D[1].seasonPositionText + "") &&
          M(it, Se),
        (!ie || A & 2) &&
          ge !== (ge = D[1].seasonPoints.toLocaleString() + "") &&
          M(Xe, ge),
        (!ie ||
          (A & 1 &&
            Ce !==
              (Ce = `btn ${
                D[0] === "details" ? "fpl-button" : "inactive-btn"
              } px-4 py-2 rounded-l-md font-bold text-md min-w-[125px]`))) &&
          t(Be, "class", Ce),
        (!ie ||
          (A & 1 &&
            Nt !==
              (Nt = `btn ${
                D[0] === "gameweeks" ? "fpl-button" : "inactive-btn"
              } px-4 py-2 rounded-r-md font-bold text-md min-w-[125px]`))) &&
          t(ot, "class", Nt),
        D[0] === "details"
          ? Te || ((Te = kl()), Te.c(), Te.m(wt, null))
          : Te && (Te.d(1), (Te = null)),
        D[0] === "details"
          ? se
            ? (se.p(D, A), A & 1 && we(se, 1))
            : ((se = Pl(D)), se.c(), we(se, 1), se.m(ct, Gt))
          : se &&
            (Yt(),
            Re(se, 1, 1, () => {
              se = null;
            }),
            qt()),
        D[0] === "gameweeks"
          ? ae
            ? (ae.p(D, A), A & 1 && we(ae, 1))
            : ((ae = Vl(D)), ae.c(), we(ae, 1), ae.m(ct, null))
          : ae &&
            (Yt(),
            Re(ae, 1, 1, () => {
              ae = null;
            }),
            qt());
    },
    i(D) {
      ie || (we(z.$$.fragment, D), we(se), we(ae), (ie = !0));
    },
    o(D) {
      Re(z.$$.fragment, D), Re(se), Re(ae), (ie = !1);
    },
    d(D) {
      D && r(s),
        yt(z),
        Te && Te.d(),
        se && se.d(),
        ae && ae.d(),
        (Xt = !1),
        Gl(tl);
    },
  };
}
function Xl(l) {
  let s, d;
  return (
    (s = new Yl({
      props: { $$slots: { default: [Ql] }, $$scope: { ctx: l } },
    })),
    {
      c() {
        bt(s.$$.fragment);
      },
      l(a) {
        St(s.$$.fragment, a);
      },
      m(a, g) {
        xt(s, a, g), (d = !0);
      },
      p(a, [g]) {
        const b = {};
        g & 262207 && (b.$$scope = { dirty: g, ctx: a }), s.$set(b);
      },
      i(a) {
        d || (we(s.$$.fragment, a), (d = !0));
      },
      o(a) {
        Re(s.$$.fragment, a), (d = !1);
      },
      d(a) {
        yt(s, a);
      },
    }
  );
}
let Sl = "";
function Zl(l, s, d) {
  let a, g, b, I;
  Jl(l, Fl, (R) => d(9, (I = R)));
  let $ = "details",
    P,
    j = "",
    S,
    O,
    L = null,
    J,
    Q,
    H,
    T;
  Al(async () => {
    yl.set(!0);
    try {
      await zt.sync(),
        await Kt.sync(),
        (H = zt.subscribe((x) => {
          Q = x;
        })),
        (T = Kt.subscribe((x) => {
          O = x;
        })),
        d(
          1,
          (P = await Rl.getManager(
            g ?? "",
            Q?.activeSeason.id ?? 1,
            b && b > 0 ? b : Q?.activeGameweek ?? 1
          ))
        );
      const R = new Blob([new Uint8Array(P.profilePicture)]),
        me =
          P.profilePicture.length > 0
            ? URL.createObjectURL(R)
            : "profile_placeholder.png";
      d(3, (S = me));
      const Y = Number(P.createDate / 1000000n),
        ce = new Date(Y);
      d(
        2,
        (j = `${
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ][ce.getUTCMonth()]
        } ${ce.getUTCFullYear()}`)
      ),
        d(
          4,
          (L =
            P.favouriteTeamId > 0
              ? O.find((x) => x.id == P.favouriteTeamId) ?? null
              : null)
        ),
        yl.set(!1);
    } catch (R) {
      Ml.show("Error fetching manager details.", "error"),
        console.error("Error fetching manager details:", R);
    }
  }),
    Hl(() => {
      T?.(), H?.();
    });
  function F(R) {
    d(0, ($ = R));
  }
  function E(R, me) {
    J.set(P.gameweeks.find((Y) => Y.gameweek === me)), F("details");
  }
  const y = () => F("details"),
    U = () => F("gameweeks");
  return (
    (l.$$.update = () => {
      l.$$.dirty & 512 && (g = I.url.searchParams.get("id")),
        l.$$.dirty & 512 && (b = Number(I.url.searchParams.get("gw")) ?? 0);
    }),
    d(5, (a = 1)),
    [$, P, j, S, L, a, J, F, E, I, y, U]
  );
}
class fs extends Cl {
  constructor(s) {
    super(), Tl(this, s, Zl, Xl, Nl, {});
  }
}
export { fs as component };
