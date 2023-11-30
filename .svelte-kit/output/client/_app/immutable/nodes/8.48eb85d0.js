import { B as Bl } from "../chunks/BadgeIcon.5f1570c4.js";
import { w as Wl } from "../chunks/index.8caf67b2.js";
import {
  $ as bl,
  a as f,
  A as xt,
  b as Ct,
  B as yt,
  c as u,
  d as Ne,
  e as wl,
  f as Gt,
  G as e,
  g as fe,
  H as Jl,
  h as r,
  i as Gl,
  I as Rl,
  J as Ul,
  k as o,
  K as pl,
  l as n,
  L as Tt,
  M as hl,
  m as i,
  N as Hl,
  n as s,
  O as Ll,
  o as Ml,
  P as Fl,
  p as gt,
  q as v,
  r as m,
  s as Al,
  S as Nl,
  u as M,
  v as Nt,
  x as gl,
  y as bt,
  Y as jl,
  z as St,
} from "../chunks/index.c7b38e5e.js";
import { a as Kl, i as El } from "../chunks/Layout.a538b3b7.js";
import { M as zl } from "../chunks/manager-gameweeks.3f813266.js";
import { m as ql } from "../chunks/manager-store.9ce96d4b.js";
import { p as el } from "../chunks/player-store.1ed81bd6.js";
import { p as Yl } from "../chunks/stores.f89c8fde.js";
import { s as zt } from "../chunks/system-store.28344883.js";
import { a as xl, g as yl, t as Kt } from "../chunks/team-store.90511bc6.js";
import { t as Ol } from "../chunks/toast-store.58fa49f6.js";
function Il(l, a, d) {
  const t = l.slice();
  t[16] = a[d];
  const _ = t[4](t[16].player.id);
  t[17] = _;
  const h = t[5](t[16].player.teamId);
  return (t[18] = h), t;
}
function Dl(l, a, d) {
  const t = l.slice();
  return (t[21] = a[d]), t;
}
function $l(l) {
  let a,
    d,
    t = l[21] + "",
    _;
  return {
    c() {
      (a = o("option")), (d = v("Gameweek ")), (_ = v(t)), this.h();
    },
    l(h) {
      a = n(h, "OPTION", {});
      var I = i(a);
      (d = m(I, "Gameweek ")), (_ = m(I, t)), I.forEach(r), this.h();
    },
    h() {
      (a.__value = l[21]), (a.value = a.__value);
    },
    m(h, I) {
      Ct(h, a, I), e(a, d), e(a, _);
    },
    p: Jl,
    d(h) {
      h && r(a);
    },
  };
}
function kl(l) {
  let a,
    d,
    t = xl(l[16].player.position) + "",
    _,
    h,
    I,
    D,
    P,
    J =
      l[17] && l[17].firstName.length > 2
        ? l[17].firstName.substring(0, 1) + "." + l[17].lastName
        : "",
    S,
    O,
    L,
    F,
    Q,
    H = l[18]?.friendlyName + "",
    T,
    X,
    x,
    y,
    j = l[16].appearance + "",
    be,
    q,
    R,
    oe,
    B = (l[16].highestScoringPlayerId === l[17]?.id ? 1 : 0) + "",
    E,
    K,
    et,
    Z,
    z = l[16].goals + "",
    Ye,
    Ge,
    xe,
    ye,
    pe = l[16].assists + "",
    me,
    je,
    tt,
    N,
    ee = l[16].penaltySaves + "",
    Ee,
    Ie,
    lt,
    te,
    ue = l[16].cleanSheets + "",
    Je,
    qe,
    ne,
    De,
    $e = l[16].saves + "",
    he,
    Ke,
    st,
    W,
    Fe = l[16].yellowCards + "",
    ze,
    ie,
    at,
    Y,
    ce = l[16].ownGoals + "",
    Ae,
    Re,
    He,
    le,
    ke = l[16].goalsConceded + "",
    ge,
    We,
    Pe,
    ve,
    G = l[16].redCards + "",
    _e,
    k,
    ut,
    g,
    V = l[16].bonusPoints + "",
    b,
    U,
    nt,
    se,
    Ve = l[16].points + "",
    rt,
    Qe,
    w;
  var Se = yl(l[17]?.nationality ?? "");
  function it(p) {
    return { props: { class: "w-4 h-4 mr-1", size: "100" } };
  }
  return (
    Se && (D = gl(Se, it())),
    (F = new Bl({
      props: {
        primaryColour: l[18]?.primaryColourHex,
        secondaryColour: l[18]?.secondaryColourHex,
        thirdColour: l[18]?.thirdColourHex,
        className: "w-6 h-6 mr-2",
      },
    })),
    {
      c() {
        (a = o("div")),
          (d = o("div")),
          (_ = v(t)),
          (h = f()),
          (I = o("div")),
          D && bt(D.$$.fragment),
          (P = f()),
          (S = v(J)),
          (O = f()),
          (L = o("div")),
          bt(F.$$.fragment),
          (Q = f()),
          (T = v(H)),
          (X = f()),
          (x = o("div")),
          (y = o("div")),
          (be = v(j)),
          (R = f()),
          (oe = o("div")),
          (E = v(B)),
          (et = f()),
          (Z = o("div")),
          (Ye = v(z)),
          (xe = f()),
          (ye = o("div")),
          (me = v(pe)),
          (tt = f()),
          (N = o("div")),
          (Ee = v(ee)),
          (lt = f()),
          (te = o("div")),
          (Je = v(ue)),
          (ne = f()),
          (De = o("div")),
          (he = v($e)),
          (st = f()),
          (W = o("div")),
          (ze = v(Fe)),
          (at = f()),
          (Y = o("div")),
          (Ae = v(ce)),
          (He = f()),
          (le = o("div")),
          (ge = v(ke)),
          (Pe = f()),
          (ve = o("div")),
          (_e = v(G)),
          (ut = f()),
          (g = o("div")),
          (b = v(V)),
          (nt = f()),
          (se = o("div")),
          (rt = v(Ve)),
          (Qe = f()),
          this.h();
      },
      l(p) {
        a = n(p, "DIV", { class: !0 });
        var c = i(a);
        d = n(c, "DIV", { class: !0 });
        var Me = i(d);
        (_ = m(Me, t)),
          Me.forEach(r),
          (h = u(c)),
          (I = n(c, "DIV", { class: !0 }));
        var we = i(I);
        D && St(D.$$.fragment, we),
          (P = u(we)),
          (S = m(we, J)),
          we.forEach(r),
          (O = u(c)),
          (L = n(c, "DIV", { class: !0 }));
        var Xe = i(L);
        St(F.$$.fragment, Xe),
          (Q = u(Xe)),
          (T = m(Xe, H)),
          Xe.forEach(r),
          (X = u(c)),
          (x = n(c, "DIV", { class: !0 }));
        var C = i(x);
        y = n(C, "DIV", { class: !0 });
        var vt = i(y);
        (be = m(vt, j)),
          vt.forEach(r),
          (R = u(C)),
          (oe = n(C, "DIV", { class: !0 }));
        var Ze = i(oe);
        (E = m(Ze, B)),
          Ze.forEach(r),
          (et = u(C)),
          (Z = n(C, "DIV", { class: !0 }));
        var mt = i(Z);
        (Ye = m(mt, z)),
          mt.forEach(r),
          (xe = u(C)),
          (ye = n(C, "DIV", { class: !0 }));
        var _t = i(ye);
        (me = m(_t, pe)),
          _t.forEach(r),
          (tt = u(C)),
          (N = n(C, "DIV", { class: !0 }));
        var Le = i(N);
        (Ee = m(Le, ee)),
          Le.forEach(r),
          (lt = u(C)),
          (te = n(C, "DIV", { class: !0 }));
        var Oe = i(te);
        (Je = m(Oe, ue)),
          Oe.forEach(r),
          (ne = u(C)),
          (De = n(C, "DIV", { class: !0 }));
        var Be = i(De);
        (he = m(Be, $e)),
          Be.forEach(r),
          (st = u(C)),
          (W = n(C, "DIV", { class: !0 }));
        var Ue = i(W);
        (ze = m(Ue, Fe)),
          Ue.forEach(r),
          (at = u(C)),
          (Y = n(C, "DIV", { class: !0 }));
        var pt = i(Y);
        (Ae = m(pt, ce)),
          pt.forEach(r),
          (He = u(C)),
          (le = n(C, "DIV", { class: !0 }));
        var Ce = i(le);
        (ge = m(Ce, ke)),
          Ce.forEach(r),
          (Pe = u(C)),
          (ve = n(C, "DIV", { class: !0 }));
        var Et = i(ve);
        (_e = m(Et, G)),
          Et.forEach(r),
          (ut = u(C)),
          (g = n(C, "DIV", { class: !0 }));
        var ot = i(g);
        (b = m(ot, V)),
          ot.forEach(r),
          C.forEach(r),
          (nt = u(c)),
          (se = n(c, "DIV", { class: !0 }));
        var It = i(se);
        (rt = m(It, Ve)), It.forEach(r), (Qe = u(c)), c.forEach(r), this.h();
      },
      h() {
        s(d, "class", "w-1/12 text-center mx-4"),
          s(I, "class", "w-2/12"),
          s(L, "class", "w-2/12 text-center flex items-center"),
          s(
            y,
            "class",
            (q = `w-1/12 text-center ${
              l[16].appearance > 0 ? "" : "text-gray-500"
            }`)
          ),
          s(
            oe,
            "class",
            (K = `w-1/12 text-center ${
              l[16].highestScoringPlayerId === l[17]?.id ? "" : "text-gray-500"
            }`)
          ),
          s(
            Z,
            "class",
            (Ge = `w-1/12 text-center ${
              l[16].goals > 0 ? "" : "text-gray-500"
            }`)
          ),
          s(
            ye,
            "class",
            (je = `w-1/12 text-center ${
              l[16].assists > 0 ? "" : "text-gray-500"
            }`)
          ),
          s(
            N,
            "class",
            (Ie = `w-1/12 text-center ${
              l[16].penaltySaves > 0 ? "" : "text-gray-500"
            }`)
          ),
          s(
            te,
            "class",
            (qe = `w-1/12 text-center ${
              l[16].cleanSheets > 0 ? "" : "text-gray-500"
            }`)
          ),
          s(
            De,
            "class",
            (Ke = `w-1/12 text-center ${
              l[16].saves > 0 ? "" : "text-gray-500"
            }`)
          ),
          s(
            W,
            "class",
            (ie = `w-1/12 text-center ${
              l[16].yellowCards > 0 ? "" : "text-gray-500"
            }`)
          ),
          s(
            Y,
            "class",
            (Re = `w-1/12 text-center ${
              l[16].ownGoals > 0 ? "" : "text-gray-500"
            }`)
          ),
          s(
            le,
            "class",
            (We = `w-1/12 text-center ${
              l[16].goalsConceded > 0 ? "" : "text-gray-500"
            }`)
          ),
          s(
            ve,
            "class",
            (k = `w-1/12 text-center ${
              l[16].redCards > 0 ? "" : "text-gray-500"
            }`)
          ),
          s(
            g,
            "class",
            (U = `w-1/12 text-center ${
              l[16].bonusPoints > 0 ? "" : "text-gray-500"
            }`)
          ),
          s(x, "class", "w-1/2 flex"),
          s(se, "class", "w-1/12 text-center"),
          s(
            a,
            "class",
            "flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer"
          );
      },
      m(p, c) {
        Ct(p, a, c),
          e(a, d),
          e(d, _),
          e(a, h),
          e(a, I),
          D && xt(D, I, null),
          e(I, P),
          e(I, S),
          e(a, O),
          e(a, L),
          xt(F, L, null),
          e(L, Q),
          e(L, T),
          e(a, X),
          e(a, x),
          e(x, y),
          e(y, be),
          e(x, R),
          e(x, oe),
          e(oe, E),
          e(x, et),
          e(x, Z),
          e(Z, Ye),
          e(x, xe),
          e(x, ye),
          e(ye, me),
          e(x, tt),
          e(x, N),
          e(N, Ee),
          e(x, lt),
          e(x, te),
          e(te, Je),
          e(x, ne),
          e(x, De),
          e(De, he),
          e(x, st),
          e(x, W),
          e(W, ze),
          e(x, at),
          e(x, Y),
          e(Y, Ae),
          e(x, He),
          e(x, le),
          e(le, ge),
          e(x, Pe),
          e(x, ve),
          e(ve, _e),
          e(x, ut),
          e(x, g),
          e(g, b),
          e(a, nt),
          e(a, se),
          e(se, rt),
          e(a, Qe),
          (w = !0);
      },
      p(p, c) {
        if (
          ((!w || c & 2) &&
            t !== (t = xl(p[16].player.position) + "") &&
            M(_, t),
          c & 2 && Se !== (Se = yl(p[17]?.nationality ?? "")))
        ) {
          if (D) {
            Nt();
            const we = D;
            Ne(we.$$.fragment, 1, 0, () => {
              yt(we, 1);
            }),
              Gt();
          }
          Se
            ? ((D = gl(Se, it())),
              bt(D.$$.fragment),
              fe(D.$$.fragment, 1),
              xt(D, I, P))
            : (D = null);
        }
        (!w || c & 2) &&
          J !==
            (J =
              p[17] && p[17].firstName.length > 2
                ? p[17].firstName.substring(0, 1) + "." + p[17].lastName
                : "") &&
          M(S, J);
        const Me = {};
        c & 2 && (Me.primaryColour = p[18]?.primaryColourHex),
          c & 2 && (Me.secondaryColour = p[18]?.secondaryColourHex),
          c & 2 && (Me.thirdColour = p[18]?.thirdColourHex),
          F.$set(Me),
          (!w || c & 2) && H !== (H = p[18]?.friendlyName + "") && M(T, H),
          (!w || c & 2) && j !== (j = p[16].appearance + "") && M(be, j),
          (!w ||
            (c & 2 &&
              q !==
                (q = `w-1/12 text-center ${
                  p[16].appearance > 0 ? "" : "text-gray-500"
                }`))) &&
            s(y, "class", q),
          (!w || c & 2) &&
            B !==
              (B = (p[16].highestScoringPlayerId === p[17]?.id ? 1 : 0) + "") &&
            M(E, B),
          (!w ||
            (c & 2 &&
              K !==
                (K = `w-1/12 text-center ${
                  p[16].highestScoringPlayerId === p[17]?.id
                    ? ""
                    : "text-gray-500"
                }`))) &&
            s(oe, "class", K),
          (!w || c & 2) && z !== (z = p[16].goals + "") && M(Ye, z),
          (!w ||
            (c & 2 &&
              Ge !==
                (Ge = `w-1/12 text-center ${
                  p[16].goals > 0 ? "" : "text-gray-500"
                }`))) &&
            s(Z, "class", Ge),
          (!w || c & 2) && pe !== (pe = p[16].assists + "") && M(me, pe),
          (!w ||
            (c & 2 &&
              je !==
                (je = `w-1/12 text-center ${
                  p[16].assists > 0 ? "" : "text-gray-500"
                }`))) &&
            s(ye, "class", je),
          (!w || c & 2) && ee !== (ee = p[16].penaltySaves + "") && M(Ee, ee),
          (!w ||
            (c & 2 &&
              Ie !==
                (Ie = `w-1/12 text-center ${
                  p[16].penaltySaves > 0 ? "" : "text-gray-500"
                }`))) &&
            s(N, "class", Ie),
          (!w || c & 2) && ue !== (ue = p[16].cleanSheets + "") && M(Je, ue),
          (!w ||
            (c & 2 &&
              qe !==
                (qe = `w-1/12 text-center ${
                  p[16].cleanSheets > 0 ? "" : "text-gray-500"
                }`))) &&
            s(te, "class", qe),
          (!w || c & 2) && $e !== ($e = p[16].saves + "") && M(he, $e),
          (!w ||
            (c & 2 &&
              Ke !==
                (Ke = `w-1/12 text-center ${
                  p[16].saves > 0 ? "" : "text-gray-500"
                }`))) &&
            s(De, "class", Ke),
          (!w || c & 2) && Fe !== (Fe = p[16].yellowCards + "") && M(ze, Fe),
          (!w ||
            (c & 2 &&
              ie !==
                (ie = `w-1/12 text-center ${
                  p[16].yellowCards > 0 ? "" : "text-gray-500"
                }`))) &&
            s(W, "class", ie),
          (!w || c & 2) && ce !== (ce = p[16].ownGoals + "") && M(Ae, ce),
          (!w ||
            (c & 2 &&
              Re !==
                (Re = `w-1/12 text-center ${
                  p[16].ownGoals > 0 ? "" : "text-gray-500"
                }`))) &&
            s(Y, "class", Re),
          (!w || c & 2) && ke !== (ke = p[16].goalsConceded + "") && M(ge, ke),
          (!w ||
            (c & 2 &&
              We !==
                (We = `w-1/12 text-center ${
                  p[16].goalsConceded > 0 ? "" : "text-gray-500"
                }`))) &&
            s(le, "class", We),
          (!w || c & 2) && G !== (G = p[16].redCards + "") && M(_e, G),
          (!w ||
            (c & 2 &&
              k !==
                (k = `w-1/12 text-center ${
                  p[16].redCards > 0 ? "" : "text-gray-500"
                }`))) &&
            s(ve, "class", k),
          (!w || c & 2) && V !== (V = p[16].bonusPoints + "") && M(b, V),
          (!w ||
            (c & 2 &&
              U !==
                (U = `w-1/12 text-center ${
                  p[16].bonusPoints > 0 ? "" : "text-gray-500"
                }`))) &&
            s(g, "class", U),
          (!w || c & 2) && Ve !== (Ve = p[16].points + "") && M(rt, Ve);
      },
      i(p) {
        w || (D && fe(D.$$.fragment, p), fe(F.$$.fragment, p), (w = !0));
      },
      o(p) {
        D && Ne(D.$$.fragment, p), Ne(F.$$.fragment, p), (w = !1);
      },
      d(p) {
        p && r(a), D && yt(D), yt(F);
      },
    }
  );
}
function Ql(l) {
  let a,
    d,
    t,
    _,
    h,
    I,
    D,
    P,
    J,
    S,
    O,
    L,
    F,
    Q,
    H,
    T,
    X,
    x,
    y,
    j,
    be,
    q,
    R,
    oe,
    B,
    E,
    K,
    et,
    Z,
    z,
    Ye,
    Ge,
    xe,
    ye,
    pe,
    me,
    je,
    tt,
    N,
    ee,
    Ee,
    Ie,
    lt,
    te,
    ue,
    Je,
    qe,
    ne,
    De,
    $e,
    he,
    Ke,
    st,
    W,
    Fe,
    ze,
    ie,
    at,
    Y,
    ce,
    Ae,
    Re,
    He,
    le,
    ke,
    ge,
    We,
    Pe,
    ve = l[2],
    G = [];
  for (let g = 0; g < ve.length; g += 1) G[g] = $l(Dl(l, ve, g));
  let _e = l[1],
    k = [];
  for (let g = 0; g < _e.length; g += 1) k[g] = kl(Il(l, _e, g));
  const ut = (g) =>
    Ne(k[g], 1, 1, () => {
      k[g] = null;
    });
  return {
    c() {
      (a = o("div")),
        (d = o("div")),
        (t = o("div")),
        (_ = o("button")),
        (h = v("<")),
        (D = f()),
        (P = o("select"));
      for (let g = 0; g < G.length; g += 1) G[g].c();
      (J = f()),
        (S = o("button")),
        (O = v(">")),
        (F = f()),
        (Q = o("div")),
        (H = o("div")),
        (T = o("div")),
        (X = o("div")),
        (x = v("Position")),
        (y = f()),
        (j = o("div")),
        (be = v("Player")),
        (q = f()),
        (R = o("div")),
        (oe = v("Team")),
        (B = f()),
        (E = o("div")),
        (K = o("div")),
        (et = v("A")),
        (Z = f()),
        (z = o("div")),
        (Ye = v("HSP")),
        (Ge = f()),
        (xe = o("div")),
        (ye = v("GS")),
        (pe = f()),
        (me = o("div")),
        (je = v("GA")),
        (tt = f()),
        (N = o("div")),
        (ee = v("PS")),
        (Ee = f()),
        (Ie = o("div")),
        (lt = v("CS")),
        (te = f()),
        (ue = o("div")),
        (Je = v("KS")),
        (qe = f()),
        (ne = o("div")),
        (De = v("YC")),
        ($e = f()),
        (he = o("div")),
        (Ke = v("OG")),
        (st = f()),
        (W = o("div")),
        (Fe = v("GC")),
        (ze = f()),
        (ie = o("div")),
        (at = v("RC")),
        (Y = f()),
        (ce = o("div")),
        (Ae = v("B")),
        (Re = f()),
        (He = o("div")),
        (le = v("PTS")),
        (ke = f());
      for (let g = 0; g < k.length; g += 1) k[g].c();
      this.h();
    },
    l(g) {
      a = n(g, "DIV", { class: !0 });
      var V = i(a);
      d = n(V, "DIV", { class: !0 });
      var b = i(d);
      t = n(b, "DIV", { class: !0 });
      var U = i(t);
      _ = n(U, "BUTTON", { class: !0 });
      var nt = i(_);
      (h = m(nt, "<")),
        nt.forEach(r),
        (D = u(U)),
        (P = n(U, "SELECT", { class: !0 }));
      var se = i(P);
      for (let Ce = 0; Ce < G.length; Ce += 1) G[Ce].l(se);
      se.forEach(r), (J = u(U)), (S = n(U, "BUTTON", { class: !0 }));
      var Ve = i(S);
      (O = m(Ve, ">")),
        Ve.forEach(r),
        U.forEach(r),
        b.forEach(r),
        (F = u(V)),
        (Q = n(V, "DIV", { class: !0 }));
      var rt = i(Q);
      H = n(rt, "DIV", { class: !0 });
      var Qe = i(H);
      T = n(Qe, "DIV", { class: !0 });
      var w = i(T);
      X = n(w, "DIV", { class: !0 });
      var Se = i(X);
      (x = m(Se, "Position")),
        Se.forEach(r),
        (y = u(w)),
        (j = n(w, "DIV", { class: !0 }));
      var it = i(j);
      (be = m(it, "Player")),
        it.forEach(r),
        (q = u(w)),
        (R = n(w, "DIV", { class: !0 }));
      var p = i(R);
      (oe = m(p, "Team")),
        p.forEach(r),
        (B = u(w)),
        (E = n(w, "DIV", { class: !0 }));
      var c = i(E);
      K = n(c, "DIV", { class: !0 });
      var Me = i(K);
      (et = m(Me, "A")),
        Me.forEach(r),
        (Z = u(c)),
        (z = n(c, "DIV", { class: !0 }));
      var we = i(z);
      (Ye = m(we, "HSP")),
        we.forEach(r),
        (Ge = u(c)),
        (xe = n(c, "DIV", { class: !0 }));
      var Xe = i(xe);
      (ye = m(Xe, "GS")),
        Xe.forEach(r),
        (pe = u(c)),
        (me = n(c, "DIV", { class: !0 }));
      var C = i(me);
      (je = m(C, "GA")),
        C.forEach(r),
        (tt = u(c)),
        (N = n(c, "DIV", { class: !0 }));
      var vt = i(N);
      (ee = m(vt, "PS")),
        vt.forEach(r),
        (Ee = u(c)),
        (Ie = n(c, "DIV", { class: !0 }));
      var Ze = i(Ie);
      (lt = m(Ze, "CS")),
        Ze.forEach(r),
        (te = u(c)),
        (ue = n(c, "DIV", { class: !0 }));
      var mt = i(ue);
      (Je = m(mt, "KS")),
        mt.forEach(r),
        (qe = u(c)),
        (ne = n(c, "DIV", { class: !0 }));
      var _t = i(ne);
      (De = m(_t, "YC")),
        _t.forEach(r),
        ($e = u(c)),
        (he = n(c, "DIV", { class: !0 }));
      var Le = i(he);
      (Ke = m(Le, "OG")),
        Le.forEach(r),
        (st = u(c)),
        (W = n(c, "DIV", { class: !0 }));
      var Oe = i(W);
      (Fe = m(Oe, "GC")),
        Oe.forEach(r),
        (ze = u(c)),
        (ie = n(c, "DIV", { class: !0 }));
      var Be = i(ie);
      (at = m(Be, "RC")),
        Be.forEach(r),
        (Y = u(c)),
        (ce = n(c, "DIV", { class: !0 }));
      var Ue = i(ce);
      (Ae = m(Ue, "B")),
        Ue.forEach(r),
        c.forEach(r),
        (Re = u(w)),
        (He = n(w, "DIV", { class: !0 }));
      var pt = i(He);
      (le = m(pt, "PTS")), pt.forEach(r), w.forEach(r), (ke = u(Qe));
      for (let Ce = 0; Ce < k.length; Ce += 1) k[Ce].l(Qe);
      Qe.forEach(r), rt.forEach(r), V.forEach(r), this.h();
    },
    h() {
      s(
        _,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (_.disabled = I = l[0] === 1),
        s(
          P,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        l[0] === void 0 && Ul(() => l[8].call(P)),
        s(
          S,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (S.disabled = L = l[0] === 38),
        s(t, "class", "flex items-center space-x-2"),
        s(d, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        s(X, "class", "w-1/12 text-center mx-4"),
        s(j, "class", "w-2/12"),
        s(R, "class", "w-2/12 text-center"),
        s(K, "class", "w-1/12 text-center"),
        s(z, "class", "w-1/12 text-center"),
        s(xe, "class", "w-1/12 text-center"),
        s(me, "class", "w-1/12 text-center"),
        s(N, "class", "w-1/12 text-center"),
        s(Ie, "class", "w-1/12 text-center"),
        s(ue, "class", "w-1/12 text-center"),
        s(ne, "class", "w-1/12 text-center"),
        s(he, "class", "w-1/12 text-center"),
        s(W, "class", "w-1/12 text-center"),
        s(ie, "class", "w-1/12 text-center"),
        s(ce, "class", "w-1/12 text-center"),
        s(E, "class", "w-1/2 flex"),
        s(He, "class", "w-1/12 text-center"),
        s(
          T,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        s(H, "class", "overflow-x-auto flex-1"),
        s(Q, "class", "flex flex-col space-y-4 mt-4 text-lg"),
        s(a, "class", "mx-5 my-4");
    },
    m(g, V) {
      Ct(g, a, V), e(a, d), e(d, t), e(t, _), e(_, h), e(t, D), e(t, P);
      for (let b = 0; b < G.length; b += 1) G[b] && G[b].m(P, null);
      pl(P, l[0], !0),
        e(t, J),
        e(t, S),
        e(S, O),
        e(a, F),
        e(a, Q),
        e(Q, H),
        e(H, T),
        e(T, X),
        e(X, x),
        e(T, y),
        e(T, j),
        e(j, be),
        e(T, q),
        e(T, R),
        e(R, oe),
        e(T, B),
        e(T, E),
        e(E, K),
        e(K, et),
        e(E, Z),
        e(E, z),
        e(z, Ye),
        e(E, Ge),
        e(E, xe),
        e(xe, ye),
        e(E, pe),
        e(E, me),
        e(me, je),
        e(E, tt),
        e(E, N),
        e(N, ee),
        e(E, Ee),
        e(E, Ie),
        e(Ie, lt),
        e(E, te),
        e(E, ue),
        e(ue, Je),
        e(E, qe),
        e(E, ne),
        e(ne, De),
        e(E, $e),
        e(E, he),
        e(he, Ke),
        e(E, st),
        e(E, W),
        e(W, Fe),
        e(E, ze),
        e(E, ie),
        e(ie, at),
        e(E, Y),
        e(E, ce),
        e(ce, Ae),
        e(T, Re),
        e(T, He),
        e(He, le),
        e(H, ke);
      for (let b = 0; b < k.length; b += 1) k[b] && k[b].m(H, null);
      (ge = !0),
        We ||
          ((Pe = [
            Tt(_, "click", l[7]),
            Tt(P, "change", l[8]),
            Tt(S, "click", l[9]),
          ]),
          (We = !0));
    },
    p(g, [V]) {
      if (
        ((!ge || (V & 5 && I !== (I = g[0] === 1))) && (_.disabled = I), V & 4)
      ) {
        ve = g[2];
        let b;
        for (b = 0; b < ve.length; b += 1) {
          const U = Dl(g, ve, b);
          G[b] ? G[b].p(U, V) : ((G[b] = $l(U)), G[b].c(), G[b].m(P, null));
        }
        for (; b < G.length; b += 1) G[b].d(1);
        G.length = ve.length;
      }
      if (
        (V & 5 && pl(P, g[0]),
        (!ge || (V & 5 && L !== (L = g[0] === 38))) && (S.disabled = L),
        V & 50)
      ) {
        _e = g[1];
        let b;
        for (b = 0; b < _e.length; b += 1) {
          const U = Il(g, _e, b);
          k[b]
            ? (k[b].p(U, V), fe(k[b], 1))
            : ((k[b] = kl(U)), k[b].c(), fe(k[b], 1), k[b].m(H, null));
        }
        for (Nt(), b = _e.length; b < k.length; b += 1) ut(b);
        Gt();
      }
    },
    i(g) {
      if (!ge) {
        for (let V = 0; V < _e.length; V += 1) fe(k[V]);
        ge = !0;
      }
    },
    o(g) {
      k = k.filter(Boolean);
      for (let V = 0; V < k.length; V += 1) Ne(k[V]);
      ge = !1;
    },
    d(g) {
      g && r(a), hl(G, g), hl(k, g), (We = !1), Hl(Pe);
    },
  };
}
function Xl(l, a, d) {
  let t = [],
    _ = [],
    h,
    I,
    D,
    P,
    J = Array.from({ length: 38 }, (y, j) => j + 1),
    { selectedGameweek: S } = a,
    { fantasyTeam: O } = a,
    L = [];
  Ml(async () => {
    try {
      await zt.sync(),
        await Kt.sync(),
        await el.sync(),
        (I = zt.subscribe((y) => {
          h = y;
        })),
        (D = Kt.subscribe((y) => {
          t = y;
        })),
        (P = el.subscribe((y) => {
          _ = y;
        })),
        d(0, (S = h?.activeGameweek ?? S)),
        d(1, (L = await el.getGameweekPlayers(jl(O), S)));
    } catch (y) {
      Ol.show("Error fetching manager gameweek detail.", "error"),
        console.error("Error fetching manager gameweek detail:", y);
    }
  }),
    Ll(() => {
      D?.(), P?.(), I?.();
    });
  const F = (y) => {
    d(0, (S = Math.max(1, Math.min(38, S + y))));
  };
  function Q(y) {
    return _.find((j) => j.id === y) ?? null;
  }
  function H(y) {
    return t.find((j) => j.id === y) ?? null;
  }
  const T = () => F(-1);
  function X() {
    (S = Fl(this)), d(0, S), d(2, J);
  }
  const x = () => F(1);
  return (
    (l.$$set = (y) => {
      "selectedGameweek" in y && d(0, (S = y.selectedGameweek)),
        "fantasyTeam" in y && d(6, (O = y.fantasyTeam));
    }),
    [S, L, J, F, Q, H, O, T, X, x]
  );
}
class Zl extends Nl {
  constructor(a) {
    super(), Gl(this, a, Xl, Ql, Al, { selectedGameweek: 0, fantasyTeam: 6 });
  }
}
function Pl(l) {
  let a,
    d,
    t,
    _,
    h,
    I,
    D,
    P,
    J,
    S,
    O,
    L,
    F,
    Q,
    H,
    T = l[1].displayName + "",
    X,
    x,
    y,
    j,
    be,
    q,
    R,
    oe,
    B,
    E,
    K,
    et,
    Z,
    z,
    Ye,
    Ge = l[4]?.abbreviatedName + "",
    xe,
    ye,
    pe,
    me = l[4]?.name + "",
    je,
    tt,
    N,
    ee,
    Ee,
    Ie,
    lt,
    te,
    ue = l[1].weeklyPositionText + "",
    Je,
    qe,
    ne,
    De,
    $e = l[1].weeklyPoints.toLocaleString() + "",
    he,
    Ke,
    st,
    W,
    Fe,
    ze,
    ie,
    at,
    Y,
    ce,
    Ae = l[4]?.friendlyName + "",
    Re,
    He,
    le,
    ke = l[1].monthlyPositionText + "",
    ge,
    We,
    Pe,
    ve,
    G = l[1].monthlyPoints.toLocaleString() + "",
    _e,
    k,
    ut,
    g,
    V,
    b,
    U,
    nt,
    se,
    Ve,
    rt,
    Qe,
    w,
    Se = l[1].seasonPositionText + "",
    it,
    p,
    c,
    Me,
    we = l[1].seasonPoints.toLocaleString() + "",
    Xe,
    C,
    vt,
    Ze,
    mt,
    _t,
    Le,
    Oe,
    Be,
    Ue,
    pt,
    Ce,
    Et,
    ot,
    It,
    At,
    Wt,
    wt,
    Qt,
    ct,
    Ht,
    de,
    Xt,
    tl;
  z = new Bl({
    props: {
      className: "w-7 mr-2",
      primaryColour: l[4]?.primaryColourHex,
      secondaryColour: l[4]?.secondaryColourHex,
      thirdColour: l[4]?.thirdColourHex,
    },
  });
  let Te = l[0] === "details" && Vl(),
    ae = l[0] === "details" && Sl(l),
    re = l[0] === "gameweeks" && Cl(l);
  return {
    c() {
      (a = o("div")),
        (d = o("div")),
        (t = o("div")),
        (_ = o("div")),
        (h = o("img")),
        (P = f()),
        (J = o("div")),
        (S = f()),
        (O = o("div")),
        (L = o("p")),
        (F = v("Manager")),
        (Q = f()),
        (H = o("p")),
        (X = v(T)),
        (x = f()),
        (y = o("p")),
        (j = v("Joined: ")),
        (be = v(l[2])),
        (q = f()),
        (R = o("div")),
        (oe = f()),
        (B = o("div")),
        (E = o("p")),
        (K = v("Favourite Team")),
        (et = f()),
        (Z = o("p")),
        bt(z.$$.fragment),
        (Ye = f()),
        (xe = v(Ge)),
        (ye = f()),
        (pe = o("p")),
        (je = v(me)),
        (tt = f()),
        (N = o("div")),
        (ee = o("div")),
        (Ee = o("p")),
        (Ie = v("Leaderboards")),
        (lt = f()),
        (te = o("p")),
        (Je = v(ue)),
        (qe = f()),
        (ne = o("span")),
        (De = v("(")),
        (he = v($e)),
        (Ke = v(")")),
        (st = f()),
        (W = o("p")),
        (Fe = v("Weekly")),
        (ze = f()),
        (ie = o("div")),
        (at = f()),
        (Y = o("div")),
        (ce = o("p")),
        (Re = v(Ae)),
        (He = f()),
        (le = o("p")),
        (ge = v(ke)),
        (We = f()),
        (Pe = o("span")),
        (ve = v("(")),
        (_e = v(G)),
        (k = v(")")),
        (ut = f()),
        (g = o("p")),
        (V = v("Club")),
        (b = f()),
        (U = o("div")),
        (nt = f()),
        (se = o("div")),
        (Ve = o("p")),
        (rt = v(Tl)),
        (Qe = f()),
        (w = o("p")),
        (it = v(Se)),
        (p = f()),
        (c = o("span")),
        (Me = v("(")),
        (Xe = v(we)),
        (C = v(")")),
        (vt = f()),
        (Ze = o("p")),
        (mt = v("Season")),
        (_t = f()),
        (Le = o("div")),
        (Oe = o("div")),
        (Be = o("div")),
        (Ue = o("button")),
        (pt = v("Details")),
        (Et = f()),
        (ot = o("button")),
        (It = v("Gameweeks")),
        (Wt = f()),
        (wt = o("div")),
        Te && Te.c(),
        (Qt = f()),
        (ct = o("div")),
        ae && ae.c(),
        (Ht = f()),
        re && re.c(),
        this.h();
    },
    l($) {
      a = n($, "DIV", { class: !0 });
      var A = i(a);
      d = n(A, "DIV", { class: !0 });
      var ht = i(d);
      t = n(ht, "DIV", { class: !0 });
      var dt = i(t);
      _ = n(dt, "DIV", { class: !0 });
      var ll = i(_);
      (h = n(ll, "IMG", { class: !0, src: !0, alt: !0 })),
        ll.forEach(r),
        (P = u(dt)),
        (J = n(dt, "DIV", { class: !0, style: !0 })),
        i(J).forEach(r),
        (S = u(dt)),
        (O = n(dt, "DIV", { class: !0 }));
      var Dt = i(O);
      L = n(Dt, "P", { class: !0 });
      var sl = i(L);
      (F = m(sl, "Manager")),
        sl.forEach(r),
        (Q = u(Dt)),
        (H = n(Dt, "P", { class: !0 }));
      var al = i(H);
      (X = m(al, T)),
        al.forEach(r),
        (x = u(Dt)),
        (y = n(Dt, "P", { class: !0 }));
      var Zt = i(y);
      (j = m(Zt, "Joined: ")),
        (be = m(Zt, l[2])),
        Zt.forEach(r),
        Dt.forEach(r),
        (q = u(dt)),
        (R = n(dt, "DIV", { class: !0, style: !0 })),
        i(R).forEach(r),
        (oe = u(dt)),
        (B = n(dt, "DIV", { class: !0 }));
      var $t = i(B);
      E = n($t, "P", { class: !0 });
      var rl = i(E);
      (K = m(rl, "Favourite Team")),
        rl.forEach(r),
        (et = u($t)),
        (Z = n($t, "P", { class: !0 }));
      var Mt = i(Z);
      St(z.$$.fragment, Mt),
        (Ye = u(Mt)),
        (xe = m(Mt, Ge)),
        Mt.forEach(r),
        (ye = u($t)),
        (pe = n($t, "P", { class: !0 }));
      var ol = i(pe);
      (je = m(ol, me)),
        ol.forEach(r),
        $t.forEach(r),
        dt.forEach(r),
        (tt = u(ht)),
        (N = n(ht, "DIV", { class: !0 }));
      var ft = i(N);
      ee = n(ft, "DIV", { class: !0 });
      var kt = i(ee);
      Ee = n(kt, "P", { class: !0 });
      var nl = i(Ee);
      (Ie = m(nl, "Leaderboards")),
        nl.forEach(r),
        (lt = u(kt)),
        (te = n(kt, "P", { class: !0 }));
      var Lt = i(te);
      (Je = m(Lt, ue)), (qe = u(Lt)), (ne = n(Lt, "SPAN", { class: !0 }));
      var Ot = i(ne);
      (De = m(Ot, "(")),
        (he = m(Ot, $e)),
        (Ke = m(Ot, ")")),
        Ot.forEach(r),
        Lt.forEach(r),
        (st = u(kt)),
        (W = n(kt, "P", { class: !0 }));
      var il = i(W);
      (Fe = m(il, "Weekly")),
        il.forEach(r),
        kt.forEach(r),
        (ze = u(ft)),
        (ie = n(ft, "DIV", { class: !0, style: !0 })),
        i(ie).forEach(r),
        (at = u(ft)),
        (Y = n(ft, "DIV", { class: !0 }));
      var Pt = i(Y);
      ce = n(Pt, "P", { class: !0 });
      var cl = i(ce);
      (Re = m(cl, Ae)),
        cl.forEach(r),
        (He = u(Pt)),
        (le = n(Pt, "P", { class: !0 }));
      var Bt = i(le);
      (ge = m(Bt, ke)), (We = u(Bt)), (Pe = n(Bt, "SPAN", { class: !0 }));
      var Ut = i(Pe);
      (ve = m(Ut, "(")),
        (_e = m(Ut, G)),
        (k = m(Ut, ")")),
        Ut.forEach(r),
        Bt.forEach(r),
        (ut = u(Pt)),
        (g = n(Pt, "P", { class: !0 }));
      var dl = i(g);
      (V = m(dl, "Club")),
        dl.forEach(r),
        Pt.forEach(r),
        (b = u(ft)),
        (U = n(ft, "DIV", { class: !0, style: !0 })),
        i(U).forEach(r),
        (nt = u(ft)),
        (se = n(ft, "DIV", { class: !0 }));
      var Vt = i(se);
      Ve = n(Vt, "P", { class: !0 });
      var fl = i(Ve);
      (rt = m(fl, Tl)),
        fl.forEach(r),
        (Qe = u(Vt)),
        (w = n(Vt, "P", { class: !0 }));
      var jt = i(w);
      (it = m(jt, Se)), (p = u(jt)), (c = n(jt, "SPAN", { class: !0 }));
      var Jt = i(c);
      (Me = m(Jt, "(")),
        (Xe = m(Jt, we)),
        (C = m(Jt, ")")),
        Jt.forEach(r),
        jt.forEach(r),
        (vt = u(Vt)),
        (Ze = n(Vt, "P", { class: !0 }));
      var ul = i(Ze);
      (mt = m(ul, "Season")),
        ul.forEach(r),
        Vt.forEach(r),
        ft.forEach(r),
        ht.forEach(r),
        (_t = u(A)),
        (Le = n(A, "DIV", { class: !0 }));
      var Ft = i(Le);
      Oe = n(Ft, "DIV", { class: !0 });
      var Rt = i(Oe);
      Be = n(Rt, "DIV", { class: !0 });
      var Yt = i(Be);
      Ue = n(Yt, "BUTTON", { class: !0 });
      var vl = i(Ue);
      (pt = m(vl, "Details")),
        vl.forEach(r),
        (Et = u(Yt)),
        (ot = n(Yt, "BUTTON", { class: !0 }));
      var ml = i(ot);
      (It = m(ml, "Gameweeks")),
        ml.forEach(r),
        Yt.forEach(r),
        (Wt = u(Rt)),
        (wt = n(Rt, "DIV", { class: !0 }));
      var _l = i(wt);
      Te && Te.l(_l),
        _l.forEach(r),
        Rt.forEach(r),
        (Qt = u(Ft)),
        (ct = n(Ft, "DIV", { class: !0 }));
      var qt = i(ct);
      ae && ae.l(qt),
        (Ht = u(qt)),
        re && re.l(qt),
        qt.forEach(r),
        Ft.forEach(r),
        A.forEach(r),
        this.h();
    },
    h() {
      s(h, "class", "w-20"),
        bl(h.src, (I = l[3])) || s(h, "src", I),
        s(h, "alt", (D = l[1].displayName)),
        s(_, "class", "flex"),
        s(J, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        gt(J, "min-width", "2px"),
        gt(J, "min-height", "50px"),
        s(L, "class", "text-gray-300 text-xs"),
        s(H, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        s(y, "class", "text-gray-300 text-xs"),
        s(O, "class", "flex-grow"),
        s(R, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        gt(R, "min-width", "2px"),
        gt(R, "min-height", "50px"),
        s(E, "class", "text-gray-300 text-xs"),
        s(
          Z,
          "class",
          "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold flex items-center"
        ),
        s(pe, "class", "text-gray-300 text-xs"),
        s(B, "class", "flex-grow"),
        s(
          t,
          "class",
          "flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
        ),
        s(Ee, "class", "text-gray-300 text-xs"),
        s(ne, "class", "text-xs"),
        s(te, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        s(W, "class", "text-gray-300 text-xs"),
        s(ee, "class", "flex-grow"),
        s(ie, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        gt(ie, "min-width", "2px"),
        gt(ie, "min-height", "50px"),
        s(ce, "class", "text-gray-300 text-xs"),
        s(Pe, "class", "text-xs"),
        s(le, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        s(g, "class", "text-gray-300 text-xs"),
        s(Y, "class", "flex-grow"),
        s(U, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        gt(U, "min-width", "2px"),
        gt(U, "min-height", "50px"),
        s(Ve, "class", "text-gray-300 text-xs"),
        s(c, "class", "text-xs"),
        s(w, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        s(Ze, "class", "text-gray-300 text-xs"),
        s(se, "class", "flex-grow"),
        s(
          N,
          "class",
          "flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
        ),
        s(d, "class", "flex flex-col md:flex-row"),
        s(
          Ue,
          "class",
          (Ce = `btn ${
            l[0] === "details" ? "fpl-button" : "inactive-btn"
          } px-4 py-2 rounded-l-md font-bold text-md min-w-[125px]`)
        ),
        s(
          ot,
          "class",
          (At = `btn ${
            l[0] === "gameweeks" ? "fpl-button" : "inactive-btn"
          } px-4 py-2 rounded-r-md font-bold text-md min-w-[125px]`)
        ),
        s(Be, "class", "flex"),
        s(wt, "class", "px-4"),
        s(
          Oe,
          "class",
          "flex justify-between items-center text-white px-4 pt-4 rounded-md w-full"
        ),
        s(ct, "class", "w-full"),
        s(Le, "class", "flex flex-col bg-panel m-4 rounded-md"),
        s(a, "class", "m-4");
    },
    m($, A) {
      Ct($, a, A),
        e(a, d),
        e(d, t),
        e(t, _),
        e(_, h),
        e(t, P),
        e(t, J),
        e(t, S),
        e(t, O),
        e(O, L),
        e(L, F),
        e(O, Q),
        e(O, H),
        e(H, X),
        e(O, x),
        e(O, y),
        e(y, j),
        e(y, be),
        e(t, q),
        e(t, R),
        e(t, oe),
        e(t, B),
        e(B, E),
        e(E, K),
        e(B, et),
        e(B, Z),
        xt(z, Z, null),
        e(Z, Ye),
        e(Z, xe),
        e(B, ye),
        e(B, pe),
        e(pe, je),
        e(d, tt),
        e(d, N),
        e(N, ee),
        e(ee, Ee),
        e(Ee, Ie),
        e(ee, lt),
        e(ee, te),
        e(te, Je),
        e(te, qe),
        e(te, ne),
        e(ne, De),
        e(ne, he),
        e(ne, Ke),
        e(ee, st),
        e(ee, W),
        e(W, Fe),
        e(N, ze),
        e(N, ie),
        e(N, at),
        e(N, Y),
        e(Y, ce),
        e(ce, Re),
        e(Y, He),
        e(Y, le),
        e(le, ge),
        e(le, We),
        e(le, Pe),
        e(Pe, ve),
        e(Pe, _e),
        e(Pe, k),
        e(Y, ut),
        e(Y, g),
        e(g, V),
        e(N, b),
        e(N, U),
        e(N, nt),
        e(N, se),
        e(se, Ve),
        e(Ve, rt),
        e(se, Qe),
        e(se, w),
        e(w, it),
        e(w, p),
        e(w, c),
        e(c, Me),
        e(c, Xe),
        e(c, C),
        e(se, vt),
        e(se, Ze),
        e(Ze, mt),
        e(a, _t),
        e(a, Le),
        e(Le, Oe),
        e(Oe, Be),
        e(Be, Ue),
        e(Ue, pt),
        e(Be, Et),
        e(Be, ot),
        e(ot, It),
        e(Oe, Wt),
        e(Oe, wt),
        Te && Te.m(wt, null),
        e(Le, Qt),
        e(Le, ct),
        ae && ae.m(ct, null),
        e(ct, Ht),
        re && re.m(ct, null),
        (de = !0),
        Xt ||
          ((tl = [Tt(Ue, "click", l[11]), Tt(ot, "click", l[12])]), (Xt = !0));
    },
    p($, A) {
      (!de || (A & 8 && !bl(h.src, (I = $[3])))) && s(h, "src", I),
        (!de || (A & 2 && D !== (D = $[1].displayName))) && s(h, "alt", D),
        (!de || A & 2) && T !== (T = $[1].displayName + "") && M(X, T),
        (!de || A & 4) && M(be, $[2]);
      const ht = {};
      A & 16 && (ht.primaryColour = $[4]?.primaryColourHex),
        A & 16 && (ht.secondaryColour = $[4]?.secondaryColourHex),
        A & 16 && (ht.thirdColour = $[4]?.thirdColourHex),
        z.$set(ht),
        (!de || A & 16) &&
          Ge !== (Ge = $[4]?.abbreviatedName + "") &&
          M(xe, Ge),
        (!de || A & 16) && me !== (me = $[4]?.name + "") && M(je, me),
        (!de || A & 2) &&
          ue !== (ue = $[1].weeklyPositionText + "") &&
          M(Je, ue),
        (!de || A & 2) &&
          $e !== ($e = $[1].weeklyPoints.toLocaleString() + "") &&
          M(he, $e),
        (!de || A & 16) && Ae !== (Ae = $[4]?.friendlyName + "") && M(Re, Ae),
        (!de || A & 2) &&
          ke !== (ke = $[1].monthlyPositionText + "") &&
          M(ge, ke),
        (!de || A & 2) &&
          G !== (G = $[1].monthlyPoints.toLocaleString() + "") &&
          M(_e, G),
        (!de || A & 2) &&
          Se !== (Se = $[1].seasonPositionText + "") &&
          M(it, Se),
        (!de || A & 2) &&
          we !== (we = $[1].seasonPoints.toLocaleString() + "") &&
          M(Xe, we),
        (!de ||
          (A & 1 &&
            Ce !==
              (Ce = `btn ${
                $[0] === "details" ? "fpl-button" : "inactive-btn"
              } px-4 py-2 rounded-l-md font-bold text-md min-w-[125px]`))) &&
          s(Ue, "class", Ce),
        (!de ||
          (A & 1 &&
            At !==
              (At = `btn ${
                $[0] === "gameweeks" ? "fpl-button" : "inactive-btn"
              } px-4 py-2 rounded-r-md font-bold text-md min-w-[125px]`))) &&
          s(ot, "class", At),
        $[0] === "details"
          ? Te || ((Te = Vl()), Te.c(), Te.m(wt, null))
          : Te && (Te.d(1), (Te = null)),
        $[0] === "details"
          ? ae
            ? (ae.p($, A), A & 1 && fe(ae, 1))
            : ((ae = Sl($)), ae.c(), fe(ae, 1), ae.m(ct, Ht))
          : ae &&
            (Nt(),
            Ne(ae, 1, 1, () => {
              ae = null;
            }),
            Gt()),
        $[0] === "gameweeks"
          ? re
            ? (re.p($, A), A & 1 && fe(re, 1))
            : ((re = Cl($)), re.c(), fe(re, 1), re.m(ct, null))
          : re &&
            (Nt(),
            Ne(re, 1, 1, () => {
              re = null;
            }),
            Gt());
    },
    i($) {
      de || (fe(z.$$.fragment, $), fe(ae), fe(re), (de = !0));
    },
    o($) {
      Ne(z.$$.fragment, $), Ne(ae), Ne(re), (de = !1);
    },
    d($) {
      $ && r(a),
        yt(z),
        Te && Te.d(),
        ae && ae.d(),
        re && re.d(),
        (Xt = !1),
        Hl(tl);
    },
  };
}
function Vl(l) {
  let a,
    d,
    t = "0",
    _;
  return {
    c() {
      (a = o("span")), (d = v("Total Points: ")), (_ = v(t)), this.h();
    },
    l(h) {
      a = n(h, "SPAN", { class: !0 });
      var I = i(a);
      (d = m(I, "Total Points: ")), (_ = m(I, t)), I.forEach(r), this.h();
    },
    h() {
      s(a, "class", "text-2xl");
    },
    m(h, I) {
      Ct(h, a, I), e(a, d), e(a, _);
    },
    d(h) {
      h && r(a);
    },
  };
}
function Sl(l) {
  let a, d;
  return (
    (a = new Zl({ props: { selectedGameweek: l[6], fantasyTeam: l[7] } })),
    {
      c() {
        bt(a.$$.fragment);
      },
      l(t) {
        St(a.$$.fragment, t);
      },
      m(t, _) {
        xt(a, t, _), (d = !0);
      },
      p(t, _) {
        const h = {};
        _ & 64 && (h.selectedGameweek = t[6]), a.$set(h);
      },
      i(t) {
        d || (fe(a.$$.fragment, t), (d = !0));
      },
      o(t) {
        Ne(a.$$.fragment, t), (d = !1);
      },
      d(t) {
        yt(a, t);
      },
    }
  );
}
function Cl(l) {
  let a, d;
  return (
    (a = new zl({
      props: { viewGameweekDetail: l[9], principalId: l[1].principalId },
    })),
    {
      c() {
        bt(a.$$.fragment);
      },
      l(t) {
        St(a.$$.fragment, t);
      },
      m(t, _) {
        xt(a, t, _), (d = !0);
      },
      p(t, _) {
        const h = {};
        _ & 2 && (h.principalId = t[1].principalId), a.$set(h);
      },
      i(t) {
        d || (fe(a.$$.fragment, t), (d = !0));
      },
      o(t) {
        Ne(a.$$.fragment, t), (d = !1);
      },
      d(t) {
        yt(a, t);
      },
    }
  );
}
function es(l) {
  let a,
    d,
    t = l[5] && Pl(l);
  return {
    c() {
      t && t.c(), (a = wl());
    },
    l(_) {
      t && t.l(_), (a = wl());
    },
    m(_, h) {
      t && t.m(_, h), Ct(_, a, h), (d = !0);
    },
    p(_, h) {
      _[5]
        ? t
          ? (t.p(_, h), h & 32 && fe(t, 1))
          : ((t = Pl(_)), t.c(), fe(t, 1), t.m(a.parentNode, a))
        : t &&
          (Nt(),
          Ne(t, 1, 1, () => {
            t = null;
          }),
          Gt());
    },
    i(_) {
      d || (fe(t), (d = !0));
    },
    o(_) {
      Ne(t), (d = !1);
    },
    d(_) {
      t && t.d(_), _ && r(a);
    },
  };
}
function ts(l) {
  let a, d;
  return (
    (a = new Kl({
      props: { $$slots: { default: [es] }, $$scope: { ctx: l } },
    })),
    {
      c() {
        bt(a.$$.fragment);
      },
      l(t) {
        St(a.$$.fragment, t);
      },
      m(t, _) {
        xt(a, t, _), (d = !0);
      },
      p(t, [_]) {
        const h = {};
        _ & 524415 && (h.$$scope = { dirty: _, ctx: t }), a.$set(h);
      },
      i(t) {
        d || (fe(a.$$.fragment, t), (d = !0));
      },
      o(t) {
        Ne(a.$$.fragment, t), (d = !1);
      },
      d(t) {
        yt(a, t);
      },
    }
  );
}
let Tl = "";
function ls(l, a, d) {
  let t, _, h, I;
  Rl(l, Yl, (q) => d(10, (I = q)));
  let D = "details",
    P,
    J = "",
    S,
    O,
    L = null,
    F = Wl(null),
    Q,
    H,
    T,
    X = !1;
  Ml(async () => {
    El.set(!0);
    try {
      await zt.sync(),
        await Kt.sync(),
        (H = zt.subscribe((K) => {
          Q = K;
        })),
        (T = Kt.subscribe((K) => {
          O = K;
        })),
        d(
          1,
          (P = await ql.getManager(
            _ ?? "",
            Q?.activeSeason.id ?? 1,
            h && h > 0 ? h : Q?.activeGameweek ?? 1
          ))
        );
      const q = new Blob([new Uint8Array(P.profilePicture)]),
        R =
          P.profilePicture.length > 0
            ? URL.createObjectURL(q)
            : "profile_placeholder.png";
      d(3, (S = R));
      const oe = Number(P.createDate / 1000000n),
        B = new Date(oe);
      d(
        2,
        (J = `${
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
          ][B.getUTCMonth()]
        } ${B.getUTCFullYear()}`)
      ),
        d(
          4,
          (L =
            P.favouriteTeamId > 0
              ? O.find((K) => K.id == P.favouriteTeamId) ?? null
              : null)
        );
    } catch (q) {
      Ol.show("Error fetching manager details.", "error"),
        console.error("Error fetching manager details:", q);
    } finally {
      El.set(!1), d(5, (X = !0));
    }
  }),
    Ll(() => {
      T?.(), H?.();
    });
  function x(q) {
    d(0, (D = q));
  }
  function y(q, R) {
    let oe = P.gameweeks.find((B) => B.gameweek === R);
    F.set(oe), x("details");
  }
  const j = () => x("details"),
    be = () => x("gameweeks");
  return (
    (l.$$.update = () => {
      l.$$.dirty & 1024 && (_ = I.url.searchParams.get("id")),
        l.$$.dirty & 1024 && (h = Number(I.url.searchParams.get("gw")) ?? 0);
    }),
    d(6, (t = 1)),
    [D, P, J, S, L, X, t, F, x, y, I, j, be]
  );
}
class ms extends Nl {
  constructor(a) {
    super(), Gl(this, a, ls, ts, Al, {});
  }
}
export { ms as component };
