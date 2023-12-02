import { B as Ls } from "../chunks/BadgeIcon.ac2d82f5.js";
import {
  a as u,
  A as wt,
  a0 as gs,
  b as gt,
  B as yt,
  c as v,
  d as ke,
  f as Nt,
  g as ce,
  G as e,
  H as $t,
  h as n,
  I as Os,
  i as Ts,
  J as Hs,
  k as o,
  K as _s,
  L as Ct,
  l as i,
  m as c,
  M as hs,
  n as a,
  N as Gs,
  o as As,
  O as Fs,
  P as Ms,
  p as pt,
  q as m,
  r as _,
  S as Cs,
  s as Ns,
  u as M,
  v as Tt,
  x as ps,
  X as qt,
  y as bt,
  z as Et,
} from "../chunks/index.a8c54947.js";
import {
  b as bs,
  c as js,
  g as ws,
  L as Js,
  t as Zt,
} from "../chunks/Layout.3f9368f3.js";
import { M as Rs } from "../chunks/manager-gameweeks.c1460105.js";
import { m as Us } from "../chunks/manager-store.58773d0c.js";
import { p as xs } from "../chunks/player-events-store.1310c1bb.js";
import { p as ys } from "../chunks/player-store.f12f3662.js";
import { w as Kt } from "../chunks/singletons.e655d5e5.js";
import { p as Bs } from "../chunks/stores.42c5f1dc.js";
import { s as Yt, t as zt } from "../chunks/team-store.583260fe.js";
function Es(t, s, r) {
  const l = t.slice();
  l[21] = s[r];
  const f = l[8](l[21].player.id);
  l[22] = f;
  const E = l[9](l[21].player.teamId);
  return (l[23] = E), l;
}
function Is(t, s, r) {
  const l = t.slice();
  return (l[26] = s[r]), l;
}
function ks(t) {
  let s,
    r,
    l = t[26] + "",
    f;
  return {
    c() {
      (s = o("option")), (r = m("Gameweek ")), (f = m(l)), this.h();
    },
    l(E) {
      s = i(E, "OPTION", {});
      var y = c(s);
      (r = _(y, "Gameweek ")), (f = _(y, l)), y.forEach(n), this.h();
    },
    h() {
      (s.__value = t[26]), (s.value = s.__value);
    },
    m(E, y) {
      gt(E, s, y), e(s, r), e(s, f);
    },
    p: $t,
    d(E) {
      E && n(s);
    },
  };
}
function Ds(t) {
  let s,
    r,
    l = bs(t[21].player.position) + "",
    f,
    E,
    y,
    k,
    P,
    S =
      t[22] && t[22].firstName.length > 2
        ? t[22].firstName.substring(0, 1) + "." + t[22].lastName
        : "",
    T,
    he,
    O,
    C,
    X,
    L = t[23]?.friendlyName + "",
    V,
    q,
    I,
    K,
    U = t[21].appearance + "",
    pe,
    j,
    $,
    J,
    te = (t[21].highestScoringPlayerId === t[22]?.id ? 1 : 0) + "",
    b,
    Y,
    se,
    le,
    ae = t[21].goals + "",
    Ae,
    w,
    z,
    xe,
    Ye = t[21].assists + "",
    B,
    re,
    Fe,
    de,
    ze = t[21].penaltySaves + "",
    ge,
    be,
    st,
    De,
    Q = t[21].cleanSheets + "",
    lt,
    Le,
    Pe,
    Se,
    We = t[21].saves + "",
    fe,
    at,
    rt,
    W,
    Xe = t[21].yellowCards + "",
    ne,
    ue,
    Qe,
    Ee,
    Ie = t[21].ownGoals + "",
    we,
    He,
    Ve,
    $e,
    ve = t[21].goalsConceded + "",
    Ce,
    Me,
    nt,
    me,
    H = t[21].redCards + "",
    oe,
    N,
    vt,
    g,
    G = t[21].bonusPoints + "",
    p,
    R,
    ot,
    Ze,
    ye = t[21].points + "",
    et,
    tt,
    x;
  var _e = ws(t[22]?.nationality ?? "");
  function mt(h) {
    return { props: { class: "w-4 h-4 mr-1", size: "100" } };
  }
  return (
    _e && (k = ps(_e, mt())),
    (C = new Ls({
      props: {
        primaryColour: t[23]?.primaryColourHex,
        secondaryColour: t[23]?.secondaryColourHex,
        thirdColour: t[23]?.thirdColourHex,
        className: "w-6 h-6 mr-2",
      },
    })),
    {
      c() {
        (s = o("div")),
          (r = o("div")),
          (f = m(l)),
          (E = u()),
          (y = o("div")),
          k && bt(k.$$.fragment),
          (P = u()),
          (T = m(S)),
          (he = u()),
          (O = o("div")),
          bt(C.$$.fragment),
          (X = u()),
          (V = m(L)),
          (q = u()),
          (I = o("div")),
          (K = o("div")),
          (pe = m(U)),
          ($ = u()),
          (J = o("div")),
          (b = m(te)),
          (se = u()),
          (le = o("div")),
          (Ae = m(ae)),
          (z = u()),
          (xe = o("div")),
          (B = m(Ye)),
          (Fe = u()),
          (de = o("div")),
          (ge = m(ze)),
          (st = u()),
          (De = o("div")),
          (lt = m(Q)),
          (Pe = u()),
          (Se = o("div")),
          (fe = m(We)),
          (rt = u()),
          (W = o("div")),
          (ne = m(Xe)),
          (Qe = u()),
          (Ee = o("div")),
          (we = m(Ie)),
          (Ve = u()),
          ($e = o("div")),
          (Ce = m(ve)),
          (nt = u()),
          (me = o("div")),
          (oe = m(H)),
          (vt = u()),
          (g = o("div")),
          (p = m(G)),
          (ot = u()),
          (Ze = o("div")),
          (et = m(ye)),
          (tt = u()),
          this.h();
      },
      l(h) {
        s = i(h, "DIV", { class: !0 });
        var d = c(s);
        r = i(d, "DIV", { class: !0 });
        var Oe = c(r);
        (f = _(Oe, l)),
          Oe.forEach(n),
          (E = v(d)),
          (y = i(d, "DIV", { class: !0 }));
        var Be = c(y);
        k && Et(k.$$.fragment, Be),
          (P = v(Be)),
          (T = _(Be, S)),
          Be.forEach(n),
          (he = v(d)),
          (O = i(d, "DIV", { class: !0 }));
        var Ue = c(O);
        Et(C.$$.fragment, Ue),
          (X = v(Ue)),
          (V = _(Ue, L)),
          Ue.forEach(n),
          (q = v(d)),
          (I = i(d, "DIV", { class: !0 }));
        var A = c(I);
        K = i(A, "DIV", { class: !0 });
        var it = c(K);
        (pe = _(it, U)),
          it.forEach(n),
          ($ = v(A)),
          (J = i(A, "DIV", { class: !0 }));
        var Te = c(J);
        (b = _(Te, te)),
          Te.forEach(n),
          (se = v(A)),
          (le = i(A, "DIV", { class: !0 }));
        var je = c(le);
        (Ae = _(je, ae)),
          je.forEach(n),
          (z = v(A)),
          (xe = i(A, "DIV", { class: !0 }));
        var Je = c(xe);
        (B = _(Je, Ye)),
          Je.forEach(n),
          (Fe = v(A)),
          (de = i(A, "DIV", { class: !0 }));
        var Re = c(de);
        (ge = _(Re, ze)),
          Re.forEach(n),
          (st = v(A)),
          (De = i(A, "DIV", { class: !0 }));
        var _t = c(De);
        (lt = _(_t, Q)),
          _t.forEach(n),
          (Pe = v(A)),
          (Se = i(A, "DIV", { class: !0 }));
        var ct = c(Se);
        (fe = _(ct, We)),
          ct.forEach(n),
          (rt = v(A)),
          (W = i(A, "DIV", { class: !0 }));
        var ht = c(W);
        (ne = _(ht, Xe)),
          ht.forEach(n),
          (Qe = v(A)),
          (Ee = i(A, "DIV", { class: !0 }));
        var qe = c(Ee);
        (we = _(qe, Ie)),
          qe.forEach(n),
          (Ve = v(A)),
          ($e = i(A, "DIV", { class: !0 }));
        var Ke = c($e);
        (Ce = _(Ke, ve)),
          Ke.forEach(n),
          (nt = v(A)),
          (me = i(A, "DIV", { class: !0 }));
        var xt = c(me);
        (oe = _(xt, H)),
          xt.forEach(n),
          (vt = v(A)),
          (g = i(A, "DIV", { class: !0 }));
        var It = c(g);
        (p = _(It, G)),
          It.forEach(n),
          A.forEach(n),
          (ot = v(d)),
          (Ze = i(d, "DIV", { class: !0 }));
        var dt = c(Ze);
        (et = _(dt, ye)), dt.forEach(n), (tt = v(d)), d.forEach(n), this.h();
      },
      h() {
        a(r, "class", "w-1/12 text-center mx-4"),
          a(y, "class", "w-2/12"),
          a(O, "class", "w-2/12 text-center flex items-center"),
          a(
            K,
            "class",
            (j = `w-1/12 text-center ${
              t[21].appearance > 0 ? "" : "text-gray-500"
            }`)
          ),
          a(
            J,
            "class",
            (Y = `w-1/12 text-center ${
              t[21].highestScoringPlayerId === t[22]?.id ? "" : "text-gray-500"
            }`)
          ),
          a(
            le,
            "class",
            (w = `w-1/12 text-center ${t[21].goals > 0 ? "" : "text-gray-500"}`)
          ),
          a(
            xe,
            "class",
            (re = `w-1/12 text-center ${
              t[21].assists > 0 ? "" : "text-gray-500"
            }`)
          ),
          a(
            de,
            "class",
            (be = `w-1/12 text-center ${
              t[21].penaltySaves > 0 ? "" : "text-gray-500"
            }`)
          ),
          a(
            De,
            "class",
            (Le = `w-1/12 text-center ${
              t[21].cleanSheets > 0 ? "" : "text-gray-500"
            }`)
          ),
          a(
            Se,
            "class",
            (at = `w-1/12 text-center ${
              t[21].saves > 0 ? "" : "text-gray-500"
            }`)
          ),
          a(
            W,
            "class",
            (ue = `w-1/12 text-center ${
              t[21].yellowCards > 0 ? "" : "text-gray-500"
            }`)
          ),
          a(
            Ee,
            "class",
            (He = `w-1/12 text-center ${
              t[21].ownGoals > 0 ? "" : "text-gray-500"
            }`)
          ),
          a(
            $e,
            "class",
            (Me = `w-1/12 text-center ${
              t[21].goalsConceded > 0 ? "" : "text-gray-500"
            }`)
          ),
          a(
            me,
            "class",
            (N = `w-1/12 text-center ${
              t[21].redCards > 0 ? "" : "text-gray-500"
            }`)
          ),
          a(
            g,
            "class",
            (R = `w-1/12 text-center ${
              t[21].bonusPoints > 0 ? "" : "text-gray-500"
            }`)
          ),
          a(I, "class", "w-1/2 flex"),
          a(Ze, "class", "w-1/12 text-center"),
          a(
            s,
            "class",
            "flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer"
          );
      },
      m(h, d) {
        gt(h, s, d),
          e(s, r),
          e(r, f),
          e(s, E),
          e(s, y),
          k && wt(k, y, null),
          e(y, P),
          e(y, T),
          e(s, he),
          e(s, O),
          wt(C, O, null),
          e(O, X),
          e(O, V),
          e(s, q),
          e(s, I),
          e(I, K),
          e(K, pe),
          e(I, $),
          e(I, J),
          e(J, b),
          e(I, se),
          e(I, le),
          e(le, Ae),
          e(I, z),
          e(I, xe),
          e(xe, B),
          e(I, Fe),
          e(I, de),
          e(de, ge),
          e(I, st),
          e(I, De),
          e(De, lt),
          e(I, Pe),
          e(I, Se),
          e(Se, fe),
          e(I, rt),
          e(I, W),
          e(W, ne),
          e(I, Qe),
          e(I, Ee),
          e(Ee, we),
          e(I, Ve),
          e(I, $e),
          e($e, Ce),
          e(I, nt),
          e(I, me),
          e(me, oe),
          e(I, vt),
          e(I, g),
          e(g, p),
          e(s, ot),
          e(s, Ze),
          e(Ze, et),
          e(s, tt),
          (x = !0);
      },
      p(h, d) {
        if (
          ((!x || d & 32) &&
            l !== (l = bs(h[21].player.position) + "") &&
            M(f, l),
          d & 32 && _e !== (_e = ws(h[22]?.nationality ?? "")))
        ) {
          if (k) {
            Tt();
            const Be = k;
            ke(Be.$$.fragment, 1, 0, () => {
              yt(Be, 1);
            }),
              Nt();
          }
          _e
            ? ((k = ps(_e, mt())),
              bt(k.$$.fragment),
              ce(k.$$.fragment, 1),
              wt(k, y, P))
            : (k = null);
        }
        (!x || d & 32) &&
          S !==
            (S =
              h[22] && h[22].firstName.length > 2
                ? h[22].firstName.substring(0, 1) + "." + h[22].lastName
                : "") &&
          M(T, S);
        const Oe = {};
        d & 32 && (Oe.primaryColour = h[23]?.primaryColourHex),
          d & 32 && (Oe.secondaryColour = h[23]?.secondaryColourHex),
          d & 32 && (Oe.thirdColour = h[23]?.thirdColourHex),
          C.$set(Oe),
          (!x || d & 32) && L !== (L = h[23]?.friendlyName + "") && M(V, L),
          (!x || d & 32) && U !== (U = h[21].appearance + "") && M(pe, U),
          (!x ||
            (d & 32 &&
              j !==
                (j = `w-1/12 text-center ${
                  h[21].appearance > 0 ? "" : "text-gray-500"
                }`))) &&
            a(K, "class", j),
          (!x || d & 32) &&
            te !==
              (te =
                (h[21].highestScoringPlayerId === h[22]?.id ? 1 : 0) + "") &&
            M(b, te),
          (!x ||
            (d & 32 &&
              Y !==
                (Y = `w-1/12 text-center ${
                  h[21].highestScoringPlayerId === h[22]?.id
                    ? ""
                    : "text-gray-500"
                }`))) &&
            a(J, "class", Y),
          (!x || d & 32) && ae !== (ae = h[21].goals + "") && M(Ae, ae),
          (!x ||
            (d & 32 &&
              w !==
                (w = `w-1/12 text-center ${
                  h[21].goals > 0 ? "" : "text-gray-500"
                }`))) &&
            a(le, "class", w),
          (!x || d & 32) && Ye !== (Ye = h[21].assists + "") && M(B, Ye),
          (!x ||
            (d & 32 &&
              re !==
                (re = `w-1/12 text-center ${
                  h[21].assists > 0 ? "" : "text-gray-500"
                }`))) &&
            a(xe, "class", re),
          (!x || d & 32) && ze !== (ze = h[21].penaltySaves + "") && M(ge, ze),
          (!x ||
            (d & 32 &&
              be !==
                (be = `w-1/12 text-center ${
                  h[21].penaltySaves > 0 ? "" : "text-gray-500"
                }`))) &&
            a(de, "class", be),
          (!x || d & 32) && Q !== (Q = h[21].cleanSheets + "") && M(lt, Q),
          (!x ||
            (d & 32 &&
              Le !==
                (Le = `w-1/12 text-center ${
                  h[21].cleanSheets > 0 ? "" : "text-gray-500"
                }`))) &&
            a(De, "class", Le),
          (!x || d & 32) && We !== (We = h[21].saves + "") && M(fe, We),
          (!x ||
            (d & 32 &&
              at !==
                (at = `w-1/12 text-center ${
                  h[21].saves > 0 ? "" : "text-gray-500"
                }`))) &&
            a(Se, "class", at),
          (!x || d & 32) && Xe !== (Xe = h[21].yellowCards + "") && M(ne, Xe),
          (!x ||
            (d & 32 &&
              ue !==
                (ue = `w-1/12 text-center ${
                  h[21].yellowCards > 0 ? "" : "text-gray-500"
                }`))) &&
            a(W, "class", ue),
          (!x || d & 32) && Ie !== (Ie = h[21].ownGoals + "") && M(we, Ie),
          (!x ||
            (d & 32 &&
              He !==
                (He = `w-1/12 text-center ${
                  h[21].ownGoals > 0 ? "" : "text-gray-500"
                }`))) &&
            a(Ee, "class", He),
          (!x || d & 32) && ve !== (ve = h[21].goalsConceded + "") && M(Ce, ve),
          (!x ||
            (d & 32 &&
              Me !==
                (Me = `w-1/12 text-center ${
                  h[21].goalsConceded > 0 ? "" : "text-gray-500"
                }`))) &&
            a($e, "class", Me),
          (!x || d & 32) && H !== (H = h[21].redCards + "") && M(oe, H),
          (!x ||
            (d & 32 &&
              N !==
                (N = `w-1/12 text-center ${
                  h[21].redCards > 0 ? "" : "text-gray-500"
                }`))) &&
            a(me, "class", N),
          (!x || d & 32) && G !== (G = h[21].bonusPoints + "") && M(p, G),
          (!x ||
            (d & 32 &&
              R !==
                (R = `w-1/12 text-center ${
                  h[21].bonusPoints > 0 ? "" : "text-gray-500"
                }`))) &&
            a(g, "class", R),
          (!x || d & 32) && ye !== (ye = h[21].points + "") && M(et, ye);
      },
      i(h) {
        x || (k && ce(k.$$.fragment, h), ce(C.$$.fragment, h), (x = !0));
      },
      o(h) {
        k && ke(k.$$.fragment, h), ke(C.$$.fragment, h), (x = !1);
      },
      d(h) {
        h && n(s), k && yt(k), yt(C);
      },
    }
  );
}
function qs(t) {
  let s,
    r,
    l,
    f,
    E,
    y,
    k,
    P,
    S,
    T,
    he,
    O,
    C,
    X,
    L,
    V,
    q,
    I,
    K,
    U,
    pe,
    j,
    $,
    J,
    te,
    b,
    Y,
    se,
    le,
    ae,
    Ae,
    w,
    z,
    xe,
    Ye,
    B,
    re,
    Fe,
    de,
    ze,
    ge,
    be,
    st,
    De,
    Q,
    lt,
    Le,
    Pe,
    Se,
    We,
    fe,
    at,
    rt,
    W,
    Xe,
    ne,
    ue,
    Qe,
    Ee,
    Ie,
    we,
    He,
    Ve,
    $e,
    ve,
    Ce,
    Me,
    nt,
    me = t[6],
    H = [];
  for (let g = 0; g < me.length; g += 1) H[g] = ks(Is(t, me, g));
  let oe = t[5],
    N = [];
  for (let g = 0; g < oe.length; g += 1) N[g] = Ds(Es(t, oe, g));
  const vt = (g) =>
    ke(N[g], 1, 1, () => {
      N[g] = null;
    });
  return {
    c() {
      (s = o("div")),
        (r = o("div")),
        (l = o("div")),
        (f = o("button")),
        (E = m("<")),
        (k = u()),
        (P = o("select"));
      for (let g = 0; g < H.length; g += 1) H[g].c();
      (S = u()),
        (T = o("button")),
        (he = m(">")),
        (C = u()),
        (X = o("div")),
        (L = o("div")),
        (V = o("div")),
        (q = o("div")),
        (I = m("Position")),
        (K = u()),
        (U = o("div")),
        (pe = m("Player")),
        (j = u()),
        ($ = o("div")),
        (J = m("Team")),
        (te = u()),
        (b = o("div")),
        (Y = o("div")),
        (se = m("A")),
        (le = u()),
        (ae = o("div")),
        (Ae = m("HSP")),
        (w = u()),
        (z = o("div")),
        (xe = m("GS")),
        (Ye = u()),
        (B = o("div")),
        (re = m("GA")),
        (Fe = u()),
        (de = o("div")),
        (ze = m("PS")),
        (ge = u()),
        (be = o("div")),
        (st = m("CS")),
        (De = u()),
        (Q = o("div")),
        (lt = m("KS")),
        (Le = u()),
        (Pe = o("div")),
        (Se = m("YC")),
        (We = u()),
        (fe = o("div")),
        (at = m("OG")),
        (rt = u()),
        (W = o("div")),
        (Xe = m("GC")),
        (ne = u()),
        (ue = o("div")),
        (Qe = m("RC")),
        (Ee = u()),
        (Ie = o("div")),
        (we = m("B")),
        (He = u()),
        (Ve = o("div")),
        ($e = m("PTS")),
        (ve = u());
      for (let g = 0; g < N.length; g += 1) N[g].c();
      this.h();
    },
    l(g) {
      s = i(g, "DIV", { class: !0 });
      var G = c(s);
      r = i(G, "DIV", { class: !0 });
      var p = c(r);
      l = i(p, "DIV", { class: !0 });
      var R = c(l);
      f = i(R, "BUTTON", { class: !0 });
      var ot = c(f);
      (E = _(ot, "<")),
        ot.forEach(n),
        (k = v(R)),
        (P = i(R, "SELECT", { class: !0 }));
      var Ze = c(P);
      for (let Ke = 0; Ke < H.length; Ke += 1) H[Ke].l(Ze);
      Ze.forEach(n), (S = v(R)), (T = i(R, "BUTTON", { class: !0 }));
      var ye = c(T);
      (he = _(ye, ">")),
        ye.forEach(n),
        R.forEach(n),
        p.forEach(n),
        (C = v(G)),
        (X = i(G, "DIV", { class: !0 }));
      var et = c(X);
      L = i(et, "DIV", { class: !0 });
      var tt = c(L);
      V = i(tt, "DIV", { class: !0 });
      var x = c(V);
      q = i(x, "DIV", { class: !0 });
      var _e = c(q);
      (I = _(_e, "Position")),
        _e.forEach(n),
        (K = v(x)),
        (U = i(x, "DIV", { class: !0 }));
      var mt = c(U);
      (pe = _(mt, "Player")),
        mt.forEach(n),
        (j = v(x)),
        ($ = i(x, "DIV", { class: !0 }));
      var h = c($);
      (J = _(h, "Team")),
        h.forEach(n),
        (te = v(x)),
        (b = i(x, "DIV", { class: !0 }));
      var d = c(b);
      Y = i(d, "DIV", { class: !0 });
      var Oe = c(Y);
      (se = _(Oe, "A")),
        Oe.forEach(n),
        (le = v(d)),
        (ae = i(d, "DIV", { class: !0 }));
      var Be = c(ae);
      (Ae = _(Be, "HSP")),
        Be.forEach(n),
        (w = v(d)),
        (z = i(d, "DIV", { class: !0 }));
      var Ue = c(z);
      (xe = _(Ue, "GS")),
        Ue.forEach(n),
        (Ye = v(d)),
        (B = i(d, "DIV", { class: !0 }));
      var A = c(B);
      (re = _(A, "GA")),
        A.forEach(n),
        (Fe = v(d)),
        (de = i(d, "DIV", { class: !0 }));
      var it = c(de);
      (ze = _(it, "PS")),
        it.forEach(n),
        (ge = v(d)),
        (be = i(d, "DIV", { class: !0 }));
      var Te = c(be);
      (st = _(Te, "CS")),
        Te.forEach(n),
        (De = v(d)),
        (Q = i(d, "DIV", { class: !0 }));
      var je = c(Q);
      (lt = _(je, "KS")),
        je.forEach(n),
        (Le = v(d)),
        (Pe = i(d, "DIV", { class: !0 }));
      var Je = c(Pe);
      (Se = _(Je, "YC")),
        Je.forEach(n),
        (We = v(d)),
        (fe = i(d, "DIV", { class: !0 }));
      var Re = c(fe);
      (at = _(Re, "OG")),
        Re.forEach(n),
        (rt = v(d)),
        (W = i(d, "DIV", { class: !0 }));
      var _t = c(W);
      (Xe = _(_t, "GC")),
        _t.forEach(n),
        (ne = v(d)),
        (ue = i(d, "DIV", { class: !0 }));
      var ct = c(ue);
      (Qe = _(ct, "RC")),
        ct.forEach(n),
        (Ee = v(d)),
        (Ie = i(d, "DIV", { class: !0 }));
      var ht = c(Ie);
      (we = _(ht, "B")),
        ht.forEach(n),
        d.forEach(n),
        (He = v(x)),
        (Ve = i(x, "DIV", { class: !0 }));
      var qe = c(Ve);
      ($e = _(qe, "PTS")), qe.forEach(n), x.forEach(n), (ve = v(tt));
      for (let Ke = 0; Ke < N.length; Ke += 1) N[Ke].l(tt);
      tt.forEach(n), et.forEach(n), G.forEach(n), this.h();
    },
    h() {
      a(
        f,
        "class",
        "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
      ),
        (f.disabled = y = t[0] === 1),
        a(
          P,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        t[0] === void 0 && Hs(() => t[13].call(P)),
        a(
          T,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (T.disabled = O = t[0] === 38),
        a(l, "class", "flex items-center space-x-2"),
        a(r, "class", "flex flex-col sm:flex-row gap-4 sm:gap-8"),
        a(q, "class", "w-1/12 text-center mx-4"),
        a(U, "class", "w-2/12"),
        a($, "class", "w-2/12 text-center"),
        a(Y, "class", "w-1/12 text-center"),
        a(ae, "class", "w-1/12 text-center"),
        a(z, "class", "w-1/12 text-center"),
        a(B, "class", "w-1/12 text-center"),
        a(de, "class", "w-1/12 text-center"),
        a(be, "class", "w-1/12 text-center"),
        a(Q, "class", "w-1/12 text-center"),
        a(Pe, "class", "w-1/12 text-center"),
        a(fe, "class", "w-1/12 text-center"),
        a(W, "class", "w-1/12 text-center"),
        a(ue, "class", "w-1/12 text-center"),
        a(Ie, "class", "w-1/12 text-center"),
        a(b, "class", "w-1/2 flex"),
        a(Ve, "class", "w-1/12 text-center"),
        a(
          V,
          "class",
          "flex justify-between p-2 border border-gray-700 py-4 bg-light-gray"
        ),
        a(L, "class", "overflow-x-auto flex-1"),
        a(X, "class", "flex flex-col space-y-4 mt-4 text-lg"),
        a(s, "class", "mx-5 my-4");
    },
    m(g, G) {
      gt(g, s, G), e(s, r), e(r, l), e(l, f), e(f, E), e(l, k), e(l, P);
      for (let p = 0; p < H.length; p += 1) H[p] && H[p].m(P, null);
      _s(P, t[0], !0),
        e(l, S),
        e(l, T),
        e(T, he),
        e(s, C),
        e(s, X),
        e(X, L),
        e(L, V),
        e(V, q),
        e(q, I),
        e(V, K),
        e(V, U),
        e(U, pe),
        e(V, j),
        e(V, $),
        e($, J),
        e(V, te),
        e(V, b),
        e(b, Y),
        e(Y, se),
        e(b, le),
        e(b, ae),
        e(ae, Ae),
        e(b, w),
        e(b, z),
        e(z, xe),
        e(b, Ye),
        e(b, B),
        e(B, re),
        e(b, Fe),
        e(b, de),
        e(de, ze),
        e(b, ge),
        e(b, be),
        e(be, st),
        e(b, De),
        e(b, Q),
        e(Q, lt),
        e(b, Le),
        e(b, Pe),
        e(Pe, Se),
        e(b, We),
        e(b, fe),
        e(fe, at),
        e(b, rt),
        e(b, W),
        e(W, Xe),
        e(b, ne),
        e(b, ue),
        e(ue, Qe),
        e(b, Ee),
        e(b, Ie),
        e(Ie, we),
        e(V, He),
        e(V, Ve),
        e(Ve, $e),
        e(L, ve);
      for (let p = 0; p < N.length; p += 1) N[p] && N[p].m(L, null);
      (Ce = !0),
        Me ||
          ((nt = [
            Ct(f, "click", t[12]),
            Ct(P, "change", t[13]),
            Ct(T, "click", t[14]),
          ]),
          (Me = !0));
    },
    p(g, [G]) {
      if (
        ((!Ce || (G & 65 && y !== (y = g[0] === 1))) && (f.disabled = y),
        G & 64)
      ) {
        me = g[6];
        let p;
        for (p = 0; p < me.length; p += 1) {
          const R = Is(g, me, p);
          H[p] ? H[p].p(R, G) : ((H[p] = ks(R)), H[p].c(), H[p].m(P, null));
        }
        for (; p < H.length; p += 1) H[p].d(1);
        H.length = me.length;
      }
      if (
        (G & 65 && _s(P, g[0]),
        (!Ce || (G & 65 && O !== (O = g[0] === 38))) && (T.disabled = O),
        G & 800)
      ) {
        oe = g[5];
        let p;
        for (p = 0; p < oe.length; p += 1) {
          const R = Es(g, oe, p);
          N[p]
            ? (N[p].p(R, G), ce(N[p], 1))
            : ((N[p] = Ds(R)), N[p].c(), ce(N[p], 1), N[p].m(L, null));
        }
        for (Tt(), p = oe.length; p < N.length; p += 1) vt(p);
        Nt();
      }
    },
    i(g) {
      if (!Ce) {
        for (let G = 0; G < oe.length; G += 1) ce(N[G]);
        Ce = !0;
      }
    },
    o(g) {
      N = N.filter(Boolean);
      for (let G = 0; G < N.length; G += 1) ke(N[G]);
      Ce = !1;
    },
    d(g) {
      g && n(s), hs(H, g), hs(N, g), (Me = !1), Gs(nt);
    },
  };
}
function Ks(t, s, r) {
  let l,
    f = $t,
    E = () => (f(), (f = qt(L, (w) => r(18, (l = w)))), L),
    y,
    k = $t,
    P = () => (k(), (k = qt(V, (w) => r(19, (y = w)))), V),
    S,
    T = $t,
    he = () => (T(), (T = qt(J, (w) => r(10, (S = w)))), J),
    O,
    C = $t,
    X = () => (C(), (C = qt(q, (w) => r(11, (O = w)))), q);
  t.$$.on_destroy.push(() => f()),
    t.$$.on_destroy.push(() => k()),
    t.$$.on_destroy.push(() => T()),
    t.$$.on_destroy.push(() => C());
  let { teams: L = Kt([]) } = s;
  E();
  let { players: V = Kt([]) } = s;
  P();
  let { systemState: q = Kt(null) } = s;
  X();
  let I,
    K,
    U,
    pe = [],
    j = Array.from({ length: 38 }, (w, z) => z + 1),
    { selectedGameweek: $ } = s,
    { fantasyTeam: J } = s;
  he(),
    As(async () => {
      try {
        await Yt.sync(),
          await zt.sync(),
          await ys.sync(),
          await xs.sync(),
          (I = Yt.subscribe((w) => {
            q.set(w);
          })),
          (K = zt.subscribe((w) => {
            L.set(w);
          })),
          (U = ys.subscribe((w) => {
            V.set(w);
          }));
      } catch (w) {
        Zt.show("Error fetching manager gameweek detail.", "error"),
          console.error("Error fetching manager gameweek detail:", w);
      }
    });
  async function te() {
    try {
      r(5, (pe = await xs.getGameweekPlayers(S, $)));
    } catch (w) {
      Zt.show("Error updating gameweek players.", "error"),
        console.error("Error updating gameweek players:", w);
    }
  }
  Fs(() => {
    K?.(), U?.(), I?.();
  });
  const b = (w) => {
    r(0, ($ = Math.max(1, Math.min(38, $ + w))));
  };
  function Y(w) {
    return y.find((z) => z.id === w) ?? null;
  }
  function se(w) {
    return l.find((z) => z.id === w) ?? null;
  }
  const le = () => b(-1);
  function ae() {
    ($ = Ms(this)), r(0, $), r(11, O), r(6, j);
  }
  const Ae = () => b(1);
  return (
    (t.$$set = (w) => {
      "teams" in w && E(r(1, (L = w.teams))),
        "players" in w && P(r(2, (V = w.players))),
        "systemState" in w && X(r(3, (q = w.systemState))),
        "selectedGameweek" in w && r(0, ($ = w.selectedGameweek)),
        "fantasyTeam" in w && he(r(4, (J = w.fantasyTeam)));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 2049 && O && r(0, ($ = O?.activeGameweek ?? $)),
        t.$$.dirty & 1024 && S && te();
    }),
    [$, L, V, q, J, pe, j, b, Y, se, S, O, le, ae, Ae]
  );
}
class Ys extends Cs {
  constructor(s) {
    super(),
      Ts(this, s, Ks, qs, Ns, {
        teams: 1,
        players: 2,
        systemState: 3,
        selectedGameweek: 0,
        fantasyTeam: 4,
      });
  }
}
function zs(t) {
  let s,
    r,
    l,
    f,
    E,
    y,
    k,
    P,
    S,
    T,
    he,
    O,
    C,
    X,
    L,
    V,
    q,
    I,
    K,
    U,
    pe,
    j,
    $,
    J,
    te,
    b,
    Y,
    se,
    le = (t[3]?.abbreviatedName ?? "-") + "",
    ae,
    Ae,
    w,
    z = (t[3]?.name ?? "Not Set") + "",
    xe,
    Ye,
    B,
    re,
    Fe,
    de,
    ze,
    ge,
    be = t[1].weeklyPositionText + "",
    st,
    De,
    Q,
    lt,
    Le = t[1].weeklyPoints.toLocaleString() + "",
    Pe,
    Se,
    We,
    fe,
    at,
    rt,
    W,
    Xe,
    ne,
    ue,
    Qe = (t[3]?.friendlyName ?? "Not Entered") + "",
    Ee,
    Ie,
    we,
    He = t[1].monthlyPositionText + "",
    Ve,
    $e,
    ve,
    Ce,
    Me = (t[3] ? t[1].monthlyPoints.toLocaleString() : "-") + "",
    nt,
    me,
    H,
    oe,
    N,
    vt,
    g,
    G,
    p,
    R,
    ot,
    Ze,
    ye,
    et = t[1].seasonPositionText + "",
    tt,
    x,
    _e,
    mt,
    h = t[1].seasonPoints.toLocaleString() + "",
    d,
    Oe,
    Be,
    Ue,
    A,
    it,
    Te,
    je,
    Je,
    Re,
    _t,
    ct,
    ht,
    qe,
    Ke,
    xt,
    It,
    dt,
    Wt,
    ft,
    Gt,
    ie,
    Xt,
    es;
  Y = new Ls({
    props: {
      className: "w-7 mr-2",
      primaryColour: t[3]?.primaryColourHex ?? "#2CE3A6",
      secondaryColour: t[3]?.secondaryColourHex ?? "#FFFFFF",
      thirdColour: t[3]?.thirdColourHex ?? "#000000",
    },
  });
  let Ne = t[0] === "details" && Ps(),
    Z = t[0] === "details" && Ss(t),
    ee = t[0] === "gameweeks" && Vs(t);
  return {
    c() {
      (s = o("div")),
        (r = o("div")),
        (l = o("div")),
        (f = o("img")),
        (y = u()),
        (k = o("div")),
        (P = u()),
        (S = o("div")),
        (T = o("p")),
        (he = m("Manager")),
        (O = u()),
        (C = o("p")),
        (X = m(t[2])),
        (L = u()),
        (V = o("p")),
        (q = m("Joined: ")),
        (I = m(t[4])),
        (K = u()),
        (U = o("div")),
        (pe = u()),
        (j = o("div")),
        ($ = o("p")),
        (J = m("Favourite Team")),
        (te = u()),
        (b = o("p")),
        bt(Y.$$.fragment),
        (se = u()),
        (ae = m(le)),
        (Ae = u()),
        (w = o("p")),
        (xe = m(z)),
        (Ye = u()),
        (B = o("div")),
        (re = o("div")),
        (Fe = o("p")),
        (de = m("Leaderboards")),
        (ze = u()),
        (ge = o("p")),
        (st = m(be)),
        (De = u()),
        (Q = o("span")),
        (lt = m("(")),
        (Pe = m(Le)),
        (Se = m(")")),
        (We = u()),
        (fe = o("p")),
        (at = m("Weekly")),
        (rt = u()),
        (W = o("div")),
        (Xe = u()),
        (ne = o("div")),
        (ue = o("p")),
        (Ee = m(Qe)),
        (Ie = u()),
        (we = o("p")),
        (Ve = m(He)),
        ($e = u()),
        (ve = o("span")),
        (Ce = m("(")),
        (nt = m(Me)),
        (me = m(")")),
        (H = u()),
        (oe = o("p")),
        (N = m("Club")),
        (vt = u()),
        (g = o("div")),
        (G = u()),
        (p = o("div")),
        (R = o("p")),
        (ot = m($s)),
        (Ze = u()),
        (ye = o("p")),
        (tt = m(et)),
        (x = u()),
        (_e = o("span")),
        (mt = m("(")),
        (d = m(h)),
        (Oe = m(")")),
        (Be = u()),
        (Ue = o("p")),
        (A = m("Season")),
        (it = u()),
        (Te = o("div")),
        (je = o("div")),
        (Je = o("div")),
        (Re = o("button")),
        (_t = m("Details")),
        (ht = u()),
        (qe = o("button")),
        (Ke = m("Gameweeks")),
        (It = u()),
        (dt = o("div")),
        Ne && Ne.c(),
        (Wt = u()),
        (ft = o("div")),
        Z && Z.c(),
        (Gt = u()),
        ee && ee.c(),
        this.h();
    },
    l(D) {
      s = i(D, "DIV", { class: !0 });
      var F = c(s);
      r = i(F, "DIV", { class: !0 });
      var Ge = c(r);
      l = i(Ge, "DIV", { class: !0 });
      var ts = c(l);
      (f = i(ts, "IMG", { class: !0, src: !0, alt: !0 })),
        ts.forEach(n),
        (y = v(Ge)),
        (k = i(Ge, "DIV", { class: !0, style: !0 })),
        c(k).forEach(n),
        (P = v(Ge)),
        (S = i(Ge, "DIV", { class: !0 }));
      var kt = c(S);
      T = i(kt, "P", { class: !0 });
      var ss = c(T);
      (he = _(ss, "Manager")),
        ss.forEach(n),
        (O = v(kt)),
        (C = i(kt, "P", { class: !0 }));
      var ls = c(C);
      (X = _(ls, t[2])),
        ls.forEach(n),
        (L = v(kt)),
        (V = i(kt, "P", { class: !0 }));
      var Qt = c(V);
      (q = _(Qt, "Joined: ")),
        (I = _(Qt, t[4])),
        Qt.forEach(n),
        kt.forEach(n),
        (K = v(Ge)),
        (U = i(Ge, "DIV", { class: !0, style: !0 })),
        c(U).forEach(n),
        (pe = v(Ge)),
        (j = i(Ge, "DIV", { class: !0 }));
      var Dt = c(j);
      $ = i(Dt, "P", { class: !0 });
      var as = c($);
      (J = _(as, "Favourite Team")),
        as.forEach(n),
        (te = v(Dt)),
        (b = i(Dt, "P", { class: !0 }));
      var At = c(b);
      Et(Y.$$.fragment, At),
        (se = v(At)),
        (ae = _(At, le)),
        At.forEach(n),
        (Ae = v(Dt)),
        (w = i(Dt, "P", { class: !0 }));
      var rs = c(w);
      (xe = _(rs, z)),
        rs.forEach(n),
        Dt.forEach(n),
        Ge.forEach(n),
        (Ye = v(F)),
        (B = i(F, "DIV", { class: !0 }));
      var ut = c(B);
      re = i(ut, "DIV", { class: !0 });
      var Pt = c(re);
      Fe = i(Pt, "P", { class: !0 });
      var ns = c(Fe);
      (de = _(ns, "Leaderboards")),
        ns.forEach(n),
        (ze = v(Pt)),
        (ge = i(Pt, "P", { class: !0 }));
      var Ft = c(ge);
      (st = _(Ft, be)), (De = v(Ft)), (Q = i(Ft, "SPAN", { class: !0 }));
      var Lt = c(Q);
      (lt = _(Lt, "(")),
        (Pe = _(Lt, Le)),
        (Se = _(Lt, ")")),
        Lt.forEach(n),
        Ft.forEach(n),
        (We = v(Pt)),
        (fe = i(Pt, "P", { class: !0 }));
      var os = c(fe);
      (at = _(os, "Weekly")),
        os.forEach(n),
        Pt.forEach(n),
        (rt = v(ut)),
        (W = i(ut, "DIV", { class: !0, style: !0 })),
        c(W).forEach(n),
        (Xe = v(ut)),
        (ne = i(ut, "DIV", { class: !0 }));
      var St = c(ne);
      ue = i(St, "P", { class: !0 });
      var is = c(ue);
      (Ee = _(is, Qe)),
        is.forEach(n),
        (Ie = v(St)),
        (we = i(St, "P", { class: !0 }));
      var Ht = c(we);
      (Ve = _(Ht, He)), ($e = v(Ht)), (ve = i(Ht, "SPAN", { class: !0 }));
      var Mt = c(ve);
      (Ce = _(Mt, "(")),
        (nt = _(Mt, Me)),
        (me = _(Mt, ")")),
        Mt.forEach(n),
        Ht.forEach(n),
        (H = v(St)),
        (oe = i(St, "P", { class: !0 }));
      var cs = c(oe);
      (N = _(cs, "Club")),
        cs.forEach(n),
        St.forEach(n),
        (vt = v(ut)),
        (g = i(ut, "DIV", { class: !0, style: !0 })),
        c(g).forEach(n),
        (G = v(ut)),
        (p = i(ut, "DIV", { class: !0 }));
      var Vt = c(p);
      R = i(Vt, "P", { class: !0 });
      var ds = c(R);
      (ot = _(ds, $s)),
        ds.forEach(n),
        (Ze = v(Vt)),
        (ye = i(Vt, "P", { class: !0 }));
      var Ot = c(ye);
      (tt = _(Ot, et)), (x = v(Ot)), (_e = i(Ot, "SPAN", { class: !0 }));
      var Bt = c(_e);
      (mt = _(Bt, "(")),
        (d = _(Bt, h)),
        (Oe = _(Bt, ")")),
        Bt.forEach(n),
        Ot.forEach(n),
        (Be = v(Vt)),
        (Ue = i(Vt, "P", { class: !0 }));
      var fs = c(Ue);
      (A = _(fs, "Season")),
        fs.forEach(n),
        Vt.forEach(n),
        ut.forEach(n),
        F.forEach(n),
        (it = v(D)),
        (Te = i(D, "DIV", { class: !0 }));
      var Ut = c(Te);
      je = i(Ut, "DIV", { class: !0 });
      var jt = c(je);
      Je = i(jt, "DIV", { class: !0 });
      var Jt = c(Je);
      Re = i(Jt, "BUTTON", { class: !0 });
      var us = c(Re);
      (_t = _(us, "Details")),
        us.forEach(n),
        (ht = v(Jt)),
        (qe = i(Jt, "BUTTON", { class: !0 }));
      var vs = c(qe);
      (Ke = _(vs, "Gameweeks")),
        vs.forEach(n),
        Jt.forEach(n),
        (It = v(jt)),
        (dt = i(jt, "DIV", { class: !0 }));
      var ms = c(dt);
      Ne && Ne.l(ms),
        ms.forEach(n),
        jt.forEach(n),
        (Wt = v(Ut)),
        (ft = i(Ut, "DIV", { class: !0 }));
      var Rt = c(ft);
      Z && Z.l(Rt),
        (Gt = v(Rt)),
        ee && ee.l(Rt),
        Rt.forEach(n),
        Ut.forEach(n),
        this.h();
    },
    h() {
      a(f, "class", "w-20"),
        gs(f.src, (E = t[5])) || a(f, "src", E),
        a(f, "alt", t[2]),
        a(l, "class", "flex"),
        a(k, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        pt(k, "min-width", "2px"),
        pt(k, "min-height", "50px"),
        a(T, "class", "text-gray-300 text-xs"),
        a(C, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        a(V, "class", "text-gray-300 text-xs"),
        a(S, "class", "flex-grow"),
        a(U, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        pt(U, "min-width", "2px"),
        pt(U, "min-height", "50px"),
        a($, "class", "text-gray-300 text-xs"),
        a(
          b,
          "class",
          "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold flex items-center"
        ),
        a(w, "class", "text-gray-300 text-xs"),
        a(j, "class", "flex-grow"),
        a(
          r,
          "class",
          "flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
        ),
        a(Fe, "class", "text-gray-300 text-xs"),
        a(Q, "class", "text-xs"),
        a(ge, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        a(fe, "class", "text-gray-300 text-xs"),
        a(re, "class", "flex-grow"),
        a(W, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        pt(W, "min-width", "2px"),
        pt(W, "min-height", "50px"),
        a(ue, "class", "text-gray-300 text-xs"),
        a(ve, "class", "text-xs"),
        a(we, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        a(oe, "class", "text-gray-300 text-xs"),
        a(ne, "class", "flex-grow"),
        a(g, "class", "flex-shrink-0 w-px bg-gray-400 self-stretch"),
        pt(g, "min-width", "2px"),
        pt(g, "min-height", "50px"),
        a(R, "class", "text-gray-300 text-xs"),
        a(_e, "class", "text-xs"),
        a(ye, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
        a(Ue, "class", "text-gray-300 text-xs"),
        a(p, "class", "flex-grow"),
        a(
          B,
          "class",
          "flex justify-start items-center text-white space-x-4 flex-grow m-4 bg-panel p-4 rounded-md"
        ),
        a(s, "class", "flex flex-col md:flex-row"),
        a(
          Re,
          "class",
          (ct = `btn ${
            t[0] === "details" ? "fpl-button" : "inactive-btn"
          } px-4 py-2 rounded-l-md font-bold text-md min-w-[125px]`)
        ),
        a(
          qe,
          "class",
          (xt = `btn ${
            t[0] === "gameweeks" ? "fpl-button" : "inactive-btn"
          } px-4 py-2 rounded-r-md font-bold text-md min-w-[125px]`)
        ),
        a(Je, "class", "flex"),
        a(dt, "class", "px-4"),
        a(
          je,
          "class",
          "flex justify-between items-center text-white px-4 pt-4 rounded-md w-full"
        ),
        a(ft, "class", "w-full"),
        a(Te, "class", "flex flex-col bg-panel m-4 rounded-md");
    },
    m(D, F) {
      gt(D, s, F),
        e(s, r),
        e(r, l),
        e(l, f),
        e(r, y),
        e(r, k),
        e(r, P),
        e(r, S),
        e(S, T),
        e(T, he),
        e(S, O),
        e(S, C),
        e(C, X),
        e(S, L),
        e(S, V),
        e(V, q),
        e(V, I),
        e(r, K),
        e(r, U),
        e(r, pe),
        e(r, j),
        e(j, $),
        e($, J),
        e(j, te),
        e(j, b),
        wt(Y, b, null),
        e(b, se),
        e(b, ae),
        e(j, Ae),
        e(j, w),
        e(w, xe),
        e(s, Ye),
        e(s, B),
        e(B, re),
        e(re, Fe),
        e(Fe, de),
        e(re, ze),
        e(re, ge),
        e(ge, st),
        e(ge, De),
        e(ge, Q),
        e(Q, lt),
        e(Q, Pe),
        e(Q, Se),
        e(re, We),
        e(re, fe),
        e(fe, at),
        e(B, rt),
        e(B, W),
        e(B, Xe),
        e(B, ne),
        e(ne, ue),
        e(ue, Ee),
        e(ne, Ie),
        e(ne, we),
        e(we, Ve),
        e(we, $e),
        e(we, ve),
        e(ve, Ce),
        e(ve, nt),
        e(ve, me),
        e(ne, H),
        e(ne, oe),
        e(oe, N),
        e(B, vt),
        e(B, g),
        e(B, G),
        e(B, p),
        e(p, R),
        e(R, ot),
        e(p, Ze),
        e(p, ye),
        e(ye, tt),
        e(ye, x),
        e(ye, _e),
        e(_e, mt),
        e(_e, d),
        e(_e, Oe),
        e(p, Be),
        e(p, Ue),
        e(Ue, A),
        gt(D, it, F),
        gt(D, Te, F),
        e(Te, je),
        e(je, Je),
        e(Je, Re),
        e(Re, _t),
        e(Je, ht),
        e(Je, qe),
        e(qe, Ke),
        e(je, It),
        e(je, dt),
        Ne && Ne.m(dt, null),
        e(Te, Wt),
        e(Te, ft),
        Z && Z.m(ft, null),
        e(ft, Gt),
        ee && ee.m(ft, null),
        (ie = !0),
        Xt ||
          ((es = [Ct(Re, "click", t[13]), Ct(qe, "click", t[14])]), (Xt = !0));
    },
    p(D, F) {
      (!ie || (F & 32 && !gs(f.src, (E = D[5])))) && a(f, "src", E),
        (!ie || F & 4) && a(f, "alt", D[2]),
        (!ie || F & 4) && M(X, D[2]),
        (!ie || F & 16) && M(I, D[4]);
      const Ge = {};
      F & 8 && (Ge.primaryColour = D[3]?.primaryColourHex ?? "#2CE3A6"),
        F & 8 && (Ge.secondaryColour = D[3]?.secondaryColourHex ?? "#FFFFFF"),
        F & 8 && (Ge.thirdColour = D[3]?.thirdColourHex ?? "#000000"),
        Y.$set(Ge),
        (!ie || F & 8) &&
          le !== (le = (D[3]?.abbreviatedName ?? "-") + "") &&
          M(ae, le),
        (!ie || F & 8) &&
          z !== (z = (D[3]?.name ?? "Not Set") + "") &&
          M(xe, z),
        (!ie || F & 2) &&
          be !== (be = D[1].weeklyPositionText + "") &&
          M(st, be),
        (!ie || F & 2) &&
          Le !== (Le = D[1].weeklyPoints.toLocaleString() + "") &&
          M(Pe, Le),
        (!ie || F & 8) &&
          Qe !== (Qe = (D[3]?.friendlyName ?? "Not Entered") + "") &&
          M(Ee, Qe),
        (!ie || F & 2) &&
          He !== (He = D[1].monthlyPositionText + "") &&
          M(Ve, He),
        (!ie || F & 10) &&
          Me !==
            (Me = (D[3] ? D[1].monthlyPoints.toLocaleString() : "-") + "") &&
          M(nt, Me),
        (!ie || F & 2) &&
          et !== (et = D[1].seasonPositionText + "") &&
          M(tt, et),
        (!ie || F & 2) &&
          h !== (h = D[1].seasonPoints.toLocaleString() + "") &&
          M(d, h),
        (!ie ||
          (F & 1 &&
            ct !==
              (ct = `btn ${
                D[0] === "details" ? "fpl-button" : "inactive-btn"
              } px-4 py-2 rounded-l-md font-bold text-md min-w-[125px]`))) &&
          a(Re, "class", ct),
        (!ie ||
          (F & 1 &&
            xt !==
              (xt = `btn ${
                D[0] === "gameweeks" ? "fpl-button" : "inactive-btn"
              } px-4 py-2 rounded-r-md font-bold text-md min-w-[125px]`))) &&
          a(qe, "class", xt),
        D[0] === "details"
          ? Ne || ((Ne = Ps()), Ne.c(), Ne.m(dt, null))
          : Ne && (Ne.d(1), (Ne = null)),
        D[0] === "details"
          ? Z
            ? (Z.p(D, F), F & 1 && ce(Z, 1))
            : ((Z = Ss(D)), Z.c(), ce(Z, 1), Z.m(ft, Gt))
          : Z &&
            (Tt(),
            ke(Z, 1, 1, () => {
              Z = null;
            }),
            Nt()),
        D[0] === "gameweeks"
          ? ee
            ? (ee.p(D, F), F & 1 && ce(ee, 1))
            : ((ee = Vs(D)), ee.c(), ce(ee, 1), ee.m(ft, null))
          : ee &&
            (Tt(),
            ke(ee, 1, 1, () => {
              ee = null;
            }),
            Nt());
    },
    i(D) {
      ie || (ce(Y.$$.fragment, D), ce(Z), ce(ee), (ie = !0));
    },
    o(D) {
      ke(Y.$$.fragment, D), ke(Z), ke(ee), (ie = !1);
    },
    d(D) {
      D && n(s),
        yt(Y),
        D && n(it),
        D && n(Te),
        Ne && Ne.d(),
        Z && Z.d(),
        ee && ee.d(),
        (Xt = !1),
        Gs(es);
    },
  };
}
function Ws(t) {
  let s, r;
  return (
    (s = new Js({})),
    {
      c() {
        bt(s.$$.fragment);
      },
      l(l) {
        Et(s.$$.fragment, l);
      },
      m(l, f) {
        wt(s, l, f), (r = !0);
      },
      p: $t,
      i(l) {
        r || (ce(s.$$.fragment, l), (r = !0));
      },
      o(l) {
        ke(s.$$.fragment, l), (r = !1);
      },
      d(l) {
        yt(s, l);
      },
    }
  );
}
function Ps(t) {
  let s,
    r,
    l = "0",
    f;
  return {
    c() {
      (s = o("span")), (r = m("Total Points: ")), (f = m(l)), this.h();
    },
    l(E) {
      s = i(E, "SPAN", { class: !0 });
      var y = c(s);
      (r = _(y, "Total Points: ")), (f = _(y, l)), y.forEach(n), this.h();
    },
    h() {
      a(s, "class", "text-2xl");
    },
    m(E, y) {
      gt(E, s, y), e(s, r), e(s, f);
    },
    d(E) {
      E && n(s);
    },
  };
}
function Ss(t) {
  let s, r;
  return (
    (s = new Ys({ props: { selectedGameweek: t[7], fantasyTeam: t[8] } })),
    {
      c() {
        bt(s.$$.fragment);
      },
      l(l) {
        Et(s.$$.fragment, l);
      },
      m(l, f) {
        wt(s, l, f), (r = !0);
      },
      p(l, f) {
        const E = {};
        f & 128 && (E.selectedGameweek = l[7]), s.$set(E);
      },
      i(l) {
        r || (ce(s.$$.fragment, l), (r = !0));
      },
      o(l) {
        ke(s.$$.fragment, l), (r = !1);
      },
      d(l) {
        yt(s, l);
      },
    }
  );
}
function Vs(t) {
  let s, r;
  return (
    (s = new Rs({
      props: { viewGameweekDetail: t[10], principalId: t[1].principalId },
    })),
    {
      c() {
        bt(s.$$.fragment);
      },
      l(l) {
        Et(s.$$.fragment, l);
      },
      m(l, f) {
        wt(s, l, f), (r = !0);
      },
      p(l, f) {
        const E = {};
        f & 2 && (E.principalId = l[1].principalId), s.$set(E);
      },
      i(l) {
        r || (ce(s.$$.fragment, l), (r = !0));
      },
      o(l) {
        ke(s.$$.fragment, l), (r = !1);
      },
      d(l) {
        yt(s, l);
      },
    }
  );
}
function Xs(t) {
  let s, r, l, f;
  const E = [Ws, zs],
    y = [];
  function k(P, S) {
    return P[6] ? 0 : 1;
  }
  return (
    (r = k(t)),
    (l = y[r] = E[r](t)),
    {
      c() {
        (s = o("div")), l.c(), this.h();
      },
      l(P) {
        s = i(P, "DIV", { class: !0 });
        var S = c(s);
        l.l(S), S.forEach(n), this.h();
      },
      h() {
        a(s, "class", "m-4");
      },
      m(P, S) {
        gt(P, s, S), y[r].m(s, null), (f = !0);
      },
      p(P, S) {
        let T = r;
        (r = k(P)),
          r === T
            ? y[r].p(P, S)
            : (Tt(),
              ke(y[T], 1, 1, () => {
                y[T] = null;
              }),
              Nt(),
              (l = y[r]),
              l ? l.p(P, S) : ((l = y[r] = E[r](P)), l.c()),
              ce(l, 1),
              l.m(s, null));
      },
      i(P) {
        f || (ce(l), (f = !0));
      },
      o(P) {
        ke(l), (f = !1);
      },
      d(P) {
        P && n(s), y[r].d();
      },
    }
  );
}
function Qs(t) {
  let s, r;
  return (
    (s = new js({
      props: { $$slots: { default: [Xs] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        bt(s.$$.fragment);
      },
      l(l) {
        Et(s.$$.fragment, l);
      },
      m(l, f) {
        wt(s, l, f), (r = !0);
      },
      p(l, [f]) {
        const E = {};
        f & 1048831 && (E.$$scope = { dirty: f, ctx: l }), s.$set(E);
      },
      i(l) {
        r || (ce(s.$$.fragment, l), (r = !0));
      },
      o(l) {
        ke(s.$$.fragment, l), (r = !1);
      },
      d(l) {
        yt(s, l);
      },
    }
  );
}
let $s = "";
function Zs(t, s, r) {
  let l, f, E, y;
  Os(t, Bs, ($) => r(12, (y = $)));
  let k = "details",
    P,
    S = Kt(null),
    T,
    he,
    O,
    C,
    X = "",
    L = null,
    V = "",
    q,
    I = !0;
  As(async () => {
    try {
      await Yt.sync(),
        await zt.sync(),
        (he = Yt.subscribe((se) => {
          T = se;
        })),
        (O = zt.subscribe((se) => {
          P = se;
        })),
        r(
          1,
          (C = await Us.getManager(
            l ?? "",
            T?.activeSeason.id ?? 1,
            f && f > 0 ? f : T?.activeGameweek ?? 1
          ))
        ),
        console.log("manager"),
        console.log(C),
        r(2, (X = C.displayName));
      const $ = new Blob([new Uint8Array(C.profilePicture)]),
        J =
          C.profilePicture.length > 0
            ? URL.createObjectURL($)
            : "profile_placeholder.png";
      r(5, (q = J));
      const te = Number(C.createDate / 1000000n),
        b = new Date(te);
      r(
        4,
        (V = `${
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
          ][b.getUTCMonth()]
        } ${b.getUTCFullYear()}`)
      ),
        r(
          3,
          (L =
            C.favouriteTeamId > 0
              ? P.find((se) => se.id == C.favouriteTeamId) ?? null
              : null)
        );
    } catch ($) {
      Zt.show("Error fetching manager details.", "error"),
        console.error("Error fetching manager details:", $);
    } finally {
      r(6, (I = !1));
    }
  }),
    Fs(() => {
      O?.(), he?.();
    });
  function K($) {
    r(0, (k = $));
  }
  function U($, J) {
    let te = C.gameweeks.find((b) => b.gameweek === J);
    S.set(te), K("details");
  }
  const pe = () => K("details"),
    j = () => K("gameweeks");
  return (
    (t.$$.update = () => {
      t.$$.dirty & 4096 && (l = y.url.searchParams.get("id")),
        t.$$.dirty & 4096 &&
          r(11, (f = Number(y.url.searchParams.get("gw")) ?? 0)),
        t.$$.dirty & 2048 && r(7, (E = f));
    }),
    [k, C, X, L, V, q, I, E, S, K, U, f, y, pe, j]
  );
}
class dl extends Cs {
  constructor(s) {
    super(), Ts(this, s, Zs, Qs, Ns, {});
  }
}
export { dl as component };
