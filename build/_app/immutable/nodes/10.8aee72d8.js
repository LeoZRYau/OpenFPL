import { B as Ml } from "../chunks/BadgeIcon.ac2d82f5.js";
import { f as ea } from "../chunks/fixture-store.880a736f.js";
import {
  a as P,
  A as Ue,
  a0 as cl,
  a1 as pe,
  a2 as ve,
  a3 as Ca,
  a4 as Va,
  a5 as Ps,
  a6 as Bs,
  B as je,
  b as K,
  c as N,
  d as de,
  e as al,
  f as it,
  g as re,
  G as s,
  h as i,
  H as Ne,
  i as Ht,
  I as il,
  J as ul,
  k as h,
  K as It,
  L as Ee,
  l as _,
  M as Ct,
  m as u,
  n as o,
  N as Zl,
  O as la,
  o as ta,
  P as fl,
  p as rt,
  q as C,
  Q as Vl,
  r as V,
  R as zl,
  s as Lt,
  S as St,
  T as Jl,
  U as Vs,
  u as ye,
  V as Cl,
  v as ot,
  W as Rl,
  X as ll,
  x as Ta,
  y as Le,
  Z as Ts,
  z as Ye,
} from "../chunks/index.a8c54947.js";
import {
  b as Na,
  c as Fs,
  d as Ul,
  e as Os,
  f as Ql,
  g as Da,
  h as Ss,
  l as Pa,
  o as Hs,
  t as jl,
} from "../chunks/Layout.3f9368f3.js";
import { m as Ga } from "../chunks/manager-store.58773d0c.js";
import { p as Yl } from "../chunks/player-store.f12f3662.js";
import { S as Ls } from "../chunks/ShirtIcon.3da312bd.js";
import { w as nt } from "../chunks/singletons.e655d5e5.js";
import { s as $l, t as Tl } from "../chunks/team-store.583260fe.js";
var Qe = ((a) => (
  (a[(a.AUTOMATIC = 0)] = "AUTOMATIC"),
  (a[(a.PLAYER = 1)] = "PLAYER"),
  (a[(a.TEAM = 2)] = "TEAM"),
  (a[(a.COUNTRY = 3)] = "COUNTRY"),
  a
))(Qe || {});
function Aa(a, e, t) {
  const l = a.slice();
  return (l[28] = e[t]), l;
}
function Ma(a, e, t) {
  const l = a.slice();
  return (l[31] = e[t]), l;
}
function Ba(a, e, t) {
  const l = a.slice();
  return (l[34] = e[t]), l;
}
function Fa(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c,
    f,
    d = a[5].name + "",
    p,
    v,
    b,
    E,
    x = a[5].description + "",
    g,
    y,
    w,
    T,
    k,
    G,
    D,
    R,
    B,
    L,
    Y,
    ce,
    S,
    X,
    O,
    ne,
    q,
    te,
    j,
    le,
    M,
    H,
    I = a[5].selectionType === Qe.PLAYER && Oa(a),
    $ = a[5].selectionType === Qe.COUNTRY && Ha(a),
    Q = a[5].selectionType === Qe.TEAM && Ua(a);
  return {
    c() {
      (e = h("div")),
        (t = h("div")),
        (l = h("img")),
        (m = P()),
        (c = h("div")),
        (f = h("h3")),
        (p = C(d)),
        (v = P()),
        (b = h("div")),
        (E = h("p")),
        (g = C(x)),
        (y = P()),
        I && I.c(),
        (w = P()),
        $ && $.c(),
        (T = P()),
        Q && Q.c(),
        (k = P()),
        (G = h("div")),
        (D = h("p")),
        (R = C("Warning")),
        (B = P()),
        (L = h("p")),
        (Y =
          C(`Your bonus will be activated when you save your team and it cannot
            be reversed. A bonus can only be played once per season.`)),
        (ce = P()),
        (S = h("div")),
        (X = h("button")),
        (O = C("Cancel")),
        (ne = P()),
        (q = h("button")),
        (te = C("Use")),
        this.h();
    },
    l(_e) {
      e = _(_e, "DIV", { class: !0 });
      var ae = u(e);
      t = _(ae, "DIV", { class: !0 });
      var Ve = u(t);
      (l = _(Ve, "IMG", { src: !0, class: !0, alt: !0 })),
        (m = N(Ve)),
        (c = _(Ve, "DIV", { class: !0 }));
      var W = u(c);
      f = _(W, "H3", { class: !0 });
      var U = u(f);
      (p = V(U, d)), U.forEach(i), (v = N(W)), (b = _(W, "DIV", { class: !0 }));
      var ee = u(b);
      E = _(ee, "P", { class: !0 });
      var Ie = u(E);
      (g = V(Ie, x)),
        Ie.forEach(i),
        ee.forEach(i),
        (y = N(W)),
        I && I.l(W),
        (w = N(W)),
        $ && $.l(W),
        (T = N(W)),
        Q && Q.l(W),
        (k = N(W)),
        (G = _(W, "DIV", { class: !0, role: !0 }));
      var he = u(G);
      D = _(he, "P", { class: !0 });
      var Me = u(D);
      (R = V(Me, "Warning")),
        Me.forEach(i),
        (B = N(he)),
        (L = _(he, "P", { class: !0 }));
      var F = u(L);
      (Y = V(
        F,
        `Your bonus will be activated when you save your team and it cannot
            be reversed. A bonus can only be played once per season.`
      )),
        F.forEach(i),
        he.forEach(i),
        (ce = N(W)),
        (S = _(W, "DIV", { class: !0 }));
      var oe = u(S);
      X = _(oe, "BUTTON", { class: !0 });
      var Ce = u(X);
      (O = V(Ce, "Cancel")),
        Ce.forEach(i),
        (ne = N(oe)),
        (q = _(oe, "BUTTON", { class: !0 }));
      var be = u(q);
      (te = V(be, "Use")),
        be.forEach(i),
        oe.forEach(i),
        W.forEach(i),
        Ve.forEach(i),
        ae.forEach(i),
        this.h();
    },
    h() {
      cl(l.src, (r = a[5].image)) || o(l, "src", r),
        o(l, "class", "w-16 mx-auto block"),
        o(l, "alt", (n = a[5].name)),
        o(f, "class", "text-lg leading-6 font-medium"),
        o(E, "class", "text-sm"),
        o(b, "class", "mt-2 px-7 py-3"),
        o(D, "class", "font-bold text-sm"),
        o(L, "class", "font-bold text-xs"),
        o(
          G,
          "class",
          "bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-2"
        ),
        o(G, "role", "alert"),
        o(
          X,
          "class",
          "px-4 py-2 fpl-cancel-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        o(
          q,
          "class",
          (j = `px-4 py-2 ${
            a[10] ? "fpl-purple-btn" : "bg-gray-500"
          } text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`)
        ),
        (q.disabled = le = !a[10]),
        o(S, "class", "items-center py-3 flex space-x-4"),
        o(c, "class", "mt-3 text-center"),
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
    m(_e, ae) {
      K(_e, e, ae),
        s(e, t),
        s(t, l),
        s(t, m),
        s(t, c),
        s(c, f),
        s(f, p),
        s(c, v),
        s(c, b),
        s(b, E),
        s(E, g),
        s(c, y),
        I && I.m(c, null),
        s(c, w),
        $ && $.m(c, null),
        s(c, T),
        Q && Q.m(c, null),
        s(c, k),
        s(c, G),
        s(G, D),
        s(D, R),
        s(G, B),
        s(G, L),
        s(L, Y),
        s(c, ce),
        s(c, S),
        s(S, X),
        s(X, O),
        s(S, ne),
        s(S, q),
        s(q, te),
        M ||
          ((H = [
            Ee(X, "click", function () {
              Vl(a[4]) && a[4].apply(this, arguments);
            }),
            Ee(q, "click", a[13]),
            Ee(t, "click", zl(a[16])),
            Ee(t, "keydown", a[14]),
            Ee(e, "click", function () {
              Vl(a[4]) && a[4].apply(this, arguments);
            }),
            Ee(e, "keydown", a[14]),
          ]),
          (M = !0));
    },
    p(_e, ae) {
      (a = _e),
        ae[0] & 32 && !cl(l.src, (r = a[5].image)) && o(l, "src", r),
        ae[0] & 32 && n !== (n = a[5].name) && o(l, "alt", n),
        ae[0] & 32 && d !== (d = a[5].name + "") && ye(p, d),
        ae[0] & 32 && x !== (x = a[5].description + "") && ye(g, x),
        a[5].selectionType === Qe.PLAYER
          ? I
            ? I.p(a, ae)
            : ((I = Oa(a)), I.c(), I.m(c, w))
          : I && (I.d(1), (I = null)),
        a[5].selectionType === Qe.COUNTRY
          ? $
            ? $.p(a, ae)
            : (($ = Ha(a)), $.c(), $.m(c, T))
          : $ && ($.d(1), ($ = null)),
        a[5].selectionType === Qe.TEAM
          ? Q
            ? Q.p(a, ae)
            : ((Q = Ua(a)), Q.c(), Q.m(c, k))
          : Q && (Q.d(1), (Q = null)),
        ae[0] & 1024 &&
          j !==
            (j = `px-4 py-2 ${
              a[10] ? "fpl-purple-btn" : "bg-gray-500"
            } text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`) &&
          o(q, "class", j),
        ae[0] & 1024 && le !== (le = !a[10]) && (q.disabled = le);
    },
    d(_e) {
      _e && i(e), I && I.d(), $ && $.d(), Q && Q.d(), (M = !1), Zl(H);
    },
  };
}
function Oa(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c = a[12],
    f = [];
  for (let d = 0; d < c.length; d += 1) f[d] = Sa(Ba(a, c, d));
  return {
    c() {
      (e = h("div")),
        (t = h("select")),
        (l = h("option")),
        (r = C("Select Player"));
      for (let d = 0; d < f.length; d += 1) f[d].c();
      this.h();
    },
    l(d) {
      e = _(d, "DIV", { class: !0 });
      var p = u(e);
      t = _(p, "SELECT", { class: !0 });
      var v = u(t);
      l = _(v, "OPTION", {});
      var b = u(l);
      (r = V(b, "Select Player")), b.forEach(i);
      for (let E = 0; E < f.length; E += 1) f[E].l(v);
      v.forEach(i), p.forEach(i), this.h();
    },
    h() {
      (l.__value = 0),
        (l.value = l.__value),
        o(t, "class", "w-full p-2 rounded-md fpl-dropdown"),
        a[7] === void 0 && ul(() => a[17].call(t)),
        o(e, "class", "w-full border border-gray-500 my-4");
    },
    m(d, p) {
      K(d, e, p), s(e, t), s(t, l), s(l, r);
      for (let v = 0; v < f.length; v += 1) f[v] && f[v].m(t, null);
      It(t, a[7], !0), n || ((m = Ee(t, "change", a[17])), (n = !0));
    },
    p(d, p) {
      if (p[0] & 4096) {
        c = d[12];
        let v;
        for (v = 0; v < c.length; v += 1) {
          const b = Ba(d, c, v);
          f[v] ? f[v].p(b, p) : ((f[v] = Sa(b)), f[v].c(), f[v].m(t, null));
        }
        for (; v < f.length; v += 1) f[v].d(1);
        f.length = c.length;
      }
      p[0] & 4224 && It(t, d[7]);
    },
    d(d) {
      d && i(e), Ct(f, d), (n = !1), m();
    },
  };
}
function Sa(a) {
  let e,
    t = a[34].name + "",
    l,
    r;
  return {
    c() {
      (e = h("option")), (l = C(t)), this.h();
    },
    l(n) {
      e = _(n, "OPTION", {});
      var m = u(e);
      (l = V(m, t)), m.forEach(i), this.h();
    },
    h() {
      (e.__value = r = a[34].id), (e.value = e.__value);
    },
    m(n, m) {
      K(n, e, m), s(e, l);
    },
    p(n, m) {
      m[0] & 4096 && t !== (t = n[34].name + "") && ye(l, t),
        m[0] & 4096 &&
          r !== (r = n[34].id) &&
          ((e.__value = r), (e.value = e.__value));
    },
    d(n) {
      n && i(e);
    },
  };
}
function Ha(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c = a[9],
    f = [];
  for (let d = 0; d < c.length; d += 1) f[d] = La(Ma(a, c, d));
  return {
    c() {
      (e = h("div")),
        (t = h("select")),
        (l = h("option")),
        (r = C("Select Country"));
      for (let d = 0; d < f.length; d += 1) f[d].c();
      this.h();
    },
    l(d) {
      e = _(d, "DIV", { class: !0 });
      var p = u(e);
      t = _(p, "SELECT", { class: !0 });
      var v = u(t);
      l = _(v, "OPTION", {});
      var b = u(l);
      (r = V(b, "Select Country")), b.forEach(i);
      for (let E = 0; E < f.length; E += 1) f[E].l(v);
      v.forEach(i), p.forEach(i), this.h();
    },
    h() {
      (l.__value = 0),
        (l.value = l.__value),
        o(t, "class", "w-full p-2 rounded-md fpl-dropdown"),
        a[8] === void 0 && ul(() => a[18].call(t)),
        o(e, "class", "w-full border border-gray-500 my-4");
    },
    m(d, p) {
      K(d, e, p), s(e, t), s(t, l), s(l, r);
      for (let v = 0; v < f.length; v += 1) f[v] && f[v].m(t, null);
      It(t, a[8], !0), n || ((m = Ee(t, "change", a[18])), (n = !0));
    },
    p(d, p) {
      if (p[0] & 512) {
        c = d[9];
        let v;
        for (v = 0; v < c.length; v += 1) {
          const b = Ma(d, c, v);
          f[v] ? f[v].p(b, p) : ((f[v] = La(b)), f[v].c(), f[v].m(t, null));
        }
        for (; v < f.length; v += 1) f[v].d(1);
        f.length = c.length;
      }
      p[0] & 768 && It(t, d[8]);
    },
    d(d) {
      d && i(e), Ct(f, d), (n = !1), m();
    },
  };
}
function La(a) {
  let e,
    t = a[31] + "",
    l,
    r;
  return {
    c() {
      (e = h("option")), (l = C(t)), this.h();
    },
    l(n) {
      e = _(n, "OPTION", {});
      var m = u(e);
      (l = V(m, t)), m.forEach(i), this.h();
    },
    h() {
      (e.__value = r = a[31]), (e.value = e.__value);
    },
    m(n, m) {
      K(n, e, m), s(e, l);
    },
    p(n, m) {
      m[0] & 512 && t !== (t = n[31] + "") && ye(l, t),
        m[0] & 512 &&
          r !== (r = n[31]) &&
          ((e.__value = r), (e.value = e.__value));
    },
    d(n) {
      n && i(e);
    },
  };
}
function Ua(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c = a[11],
    f = [];
  for (let d = 0; d < c.length; d += 1) f[d] = ja(Aa(a, c, d));
  return {
    c() {
      (e = h("div")),
        (t = h("select")),
        (l = h("option")),
        (r = C("Select Team"));
      for (let d = 0; d < f.length; d += 1) f[d].c();
      this.h();
    },
    l(d) {
      e = _(d, "DIV", { class: !0 });
      var p = u(e);
      t = _(p, "SELECT", { class: !0 });
      var v = u(t);
      l = _(v, "OPTION", {});
      var b = u(l);
      (r = V(b, "Select Team")), b.forEach(i);
      for (let E = 0; E < f.length; E += 1) f[E].l(v);
      v.forEach(i), p.forEach(i), this.h();
    },
    h() {
      (l.__value = 0),
        (l.value = l.__value),
        o(t, "class", "w-full p-2 rounded-md fpl-dropdown"),
        a[6] === void 0 && ul(() => a[19].call(t)),
        o(e, "class", "w-full border border-gray-500 my-4");
    },
    m(d, p) {
      K(d, e, p), s(e, t), s(t, l), s(l, r);
      for (let v = 0; v < f.length; v += 1) f[v] && f[v].m(t, null);
      It(t, a[6], !0), n || ((m = Ee(t, "change", a[19])), (n = !0));
    },
    p(d, p) {
      if (p[0] & 2048) {
        c = d[11];
        let v;
        for (v = 0; v < c.length; v += 1) {
          const b = Aa(d, c, v);
          f[v] ? f[v].p(b, p) : ((f[v] = ja(b)), f[v].c(), f[v].m(t, null));
        }
        for (; v < f.length; v += 1) f[v].d(1);
        f.length = c.length;
      }
      p[0] & 2112 && It(t, d[6]);
    },
    d(d) {
      d && i(e), Ct(f, d), (n = !1), m();
    },
  };
}
function ja(a) {
  let e,
    t = a[28].name + "",
    l,
    r;
  return {
    c() {
      (e = h("option")), (l = C(t)), this.h();
    },
    l(n) {
      e = _(n, "OPTION", {});
      var m = u(e);
      (l = V(m, t)), m.forEach(i), this.h();
    },
    h() {
      (e.__value = r = a[28].id), (e.value = e.__value);
    },
    m(n, m) {
      K(n, e, m), s(e, l);
    },
    p(n, m) {
      m[0] & 2048 && t !== (t = n[28].name + "") && ye(l, t),
        m[0] & 2048 &&
          r !== (r = n[28].id) &&
          ((e.__value = r), (e.value = e.__value));
    },
    d(n) {
      n && i(e);
    },
  };
}
function Us(a) {
  let e,
    t = a[3] && Fa(a);
  return {
    c() {
      t && t.c(), (e = al());
    },
    l(l) {
      t && t.l(l), (e = al());
    },
    m(l, r) {
      t && t.m(l, r), K(l, e, r);
    },
    p(l, r) {
      l[3]
        ? t
          ? t.p(l, r)
          : ((t = Fa(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Ne,
    o: Ne,
    d(l) {
      t && t.d(l), l && i(e);
    },
  };
}
function js(a, e, t) {
  let l,
    r,
    n,
    m,
    c = Ne,
    f = () => (c(), (c = ll(g, (I) => t(20, (m = I)))), g),
    d,
    p = Ne,
    v = () => (p(), (p = ll(y, (I) => t(21, (d = I)))), y),
    b,
    E = Ne,
    x = () => (E(), (E = ll(w, (I) => t(22, (b = I)))), w);
  a.$$.on_destroy.push(() => c()),
    a.$$.on_destroy.push(() => p()),
    a.$$.on_destroy.push(() => E());
  let { fantasyTeam: g = nt(null) } = e;
  f();
  let { players: y = nt([]) } = e;
  v();
  let { teams: w = nt([]) } = e;
  x();
  let { activeGameweek: T } = e,
    { showModal: k } = e,
    { closeBonusModal: G } = e,
    {
      bonus: D = {
        id: 0,
        name: "",
        description: "",
        image: "",
        selectionType: 0,
      },
    } = e,
    R,
    B = 0,
    L = 0,
    Y = "";
  const ce = () => {
      if (!m || !m.playerIds) return [];
      const I = new Set(m.playerIds),
        $ = d.filter((Q) => I.has(Q.id)).map((Q) => Q.nationality);
      return [...new Set($)].sort();
    },
    S = () =>
      d
        .filter((I) => X(I.id))
        .map((I) => ({ id: I.id, name: `${I.firstName} ${I.lastName}` })),
    X = (I) => (m ? m.playerIds && m.playerIds.includes(I) : !1),
    O = () => {
      const I = new Set(d.filter(($) => X($.id)).map(($) => $.teamId));
      return b
        .filter(($) => I.has($.id))
        .map(($) => ({ id: $.id, name: $.friendlyName }));
    },
    ne = () => {
      if (!m || !m.playerIds) return 0;
      for (const I of m.playerIds) {
        const $ = d.find((Q) => Q.id === I);
        if ($ && $.position === 0) return $.id;
      }
      return 0;
    };
  function q() {
    if (m) {
      switch (D.id) {
        case 1:
          g.update(
            (I) =>
              I && {
                ...I,
                goalGetterPlayerId: L,
                goalGetterGameweek: T,
                playerIds: I.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 2:
          g.update(
            (I) =>
              I && {
                ...I,
                passMasterPlayerId: L,
                passMasterGameweek: T,
                playerIds: I.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 3:
          g.update(
            (I) =>
              I && {
                ...I,
                noEntryPlayerId: B,
                noEntryGameweek: T,
                playerIds: I.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 4:
          g.update(
            (I) =>
              I && {
                ...I,
                teamBoostTeamId: B,
                teamBoostGameweek: T,
                playerIds: I.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 5:
          g.update(
            (I) =>
              I && {
                ...I,
                safeHandsGameweek: T,
                safeHandsPlayerId: ne(),
                playerIds: I.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 6:
          g.update(
            (I) =>
              I && {
                ...I,
                captainFantasticPlayerId: m?.captainId ?? 0,
                captainFantasticGameweek: T,
                playerIds: I.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 7:
          break;
        case 8:
          break;
        case 9:
          g.update(
            (I) =>
              I && {
                ...I,
                braceBonusGameweek: T,
                playerIds: I.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 10:
          g.update(
            (I) =>
              I && {
                ...I,
                hatTrickHeroGameweek: T,
                playerIds: I.playerIds || new Uint16Array(11),
              }
          );
          break;
      }
      G();
    }
  }
  function te(I) {
    !(I.target instanceof HTMLInputElement) && I.key === "Escape" && G();
  }
  function j(I) {
    Jl.call(this, a, I);
  }
  function le() {
    (L = fl(this)), t(7, L), t(12, l);
  }
  function M() {
    (Y = fl(this)), t(8, Y), t(9, R);
  }
  function H() {
    (B = fl(this)), t(6, B), t(11, r);
  }
  return (
    (a.$$set = (I) => {
      "fantasyTeam" in I && f(t(0, (g = I.fantasyTeam))),
        "players" in I && v(t(1, (y = I.players))),
        "teams" in I && x(t(2, (w = I.teams))),
        "activeGameweek" in I && t(15, (T = I.activeGameweek)),
        "showModal" in I && t(3, (k = I.showModal)),
        "closeBonusModal" in I && t(4, (G = I.closeBonusModal)),
        "bonus" in I && t(5, (D = I.bonus));
    }),
    (a.$$.update = () => {
      a.$$.dirty[0] & 480 &&
        t(
          10,
          (n = (() => {
            switch (D.selectionType) {
              case Qe.PLAYER:
                return L !== 0;
              case Qe.TEAM:
                return B !== 0;
              case Qe.COUNTRY:
                return Y !== "";
              default:
                return !0;
            }
          })())
        );
    }),
    t(9, (R = ce())),
    t(12, (l = S())),
    t(11, (r = O())),
    [g, y, w, k, G, D, B, L, Y, R, n, r, l, q, te, T, j, le, M, H]
  );
}
class Rs extends St {
  constructor(e) {
    super(),
      Ht(
        this,
        e,
        js,
        Us,
        Lt,
        {
          fantasyTeam: 0,
          players: 1,
          teams: 2,
          activeGameweek: 15,
          showModal: 3,
          closeBonusModal: 4,
          bonus: 5,
        },
        null,
        [-1, -1]
      );
  }
}
function Ra(a, e, t) {
  const l = a.slice();
  return (l[16] = e[t]), l;
}
function $a(a, e, t) {
  const l = a.slice();
  return (l[16] = e[t]), l;
}
function Ya(a) {
  let e, t;
  return (
    (e = new Rs({
      props: {
        showModal: a[4],
        bonus: a[6][a[5] - 1],
        closeBonusModal: a[10],
        players: a[1],
        teams: a[2],
        fantasyTeam: a[0],
        activeGameweek: a[3],
      },
    })),
    {
      c() {
        Le(e.$$.fragment);
      },
      l(l) {
        Ye(e.$$.fragment, l);
      },
      m(l, r) {
        Ue(e, l, r), (t = !0);
      },
      p(l, r) {
        const n = {};
        r & 16 && (n.showModal = l[4]),
          r & 32 && (n.bonus = l[6][l[5] - 1]),
          r & 2 && (n.players = l[1]),
          r & 4 && (n.teams = l[2]),
          r & 1 && (n.fantasyTeam = l[0]),
          r & 8 && (n.activeGameweek = l[3]),
          e.$set(n);
      },
      i(l) {
        t || (re(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        de(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        je(e, l);
      },
    }
  );
}
function $s(a) {
  let e, t, l;
  return {
    c() {
      (e = h("div")), (t = h("p")), (l = C("1 Per Week")), this.h();
    },
    l(r) {
      e = _(r, "DIV", { class: !0 });
      var n = u(e);
      t = _(n, "P", { class: !0 });
      var m = u(t);
      (l = V(m, "1 Per Week")), m.forEach(i), n.forEach(i), this.h();
    },
    h() {
      o(t, "class", "text-center text-xxs md:text-base xl:text-xs xl:mt-1"),
        o(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4 xl:min-h-[30px]");
    },
    m(r, n) {
      K(r, e, n), s(e, t), s(t, l);
    },
    p: Ne,
    d(r) {
      r && i(e);
    },
  };
}
function Ys(a) {
  let e, t, l, r, n;
  function m() {
    return a[13](a[16]);
  }
  return {
    c() {
      (e = h("div")), (t = h("button")), (l = C("Use")), this.h();
    },
    l(c) {
      e = _(c, "DIV", { class: !0 });
      var f = u(e);
      t = _(f, "BUTTON", { class: !0 });
      var d = u(t);
      (l = V(d, "Use")), d.forEach(i), f.forEach(i), this.h();
    },
    h() {
      o(
        t,
        "class",
        "fpl-purple-btn rounded-md w-full text-xs py-1 min-h-[30px] md:text-base"
      ),
        o(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4");
    },
    m(c, f) {
      K(c, e, f), s(e, t), s(t, l), r || ((n = Ee(t, "click", m)), (r = !0));
    },
    p(c, f) {
      a = c;
    },
    d(c) {
      c && i(e), (r = !1), n();
    },
  };
}
function Ws(a) {
  let e,
    t,
    l,
    r = a[11](a[16].id) + "",
    n;
  return {
    c() {
      (e = h("div")), (t = h("p")), (l = C("Used GW")), (n = C(r)), this.h();
    },
    l(m) {
      e = _(m, "DIV", { class: !0 });
      var c = u(e);
      t = _(c, "P", { class: !0 });
      var f = u(t);
      (l = V(f, "Used GW")),
        (n = V(f, r)),
        f.forEach(i),
        c.forEach(i),
        this.h();
    },
    h() {
      o(t, "class", "text-center text-xxs md:text-base xl:text-xs xl:mt-1"),
        o(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4 xl:min-h-[30px]");
    },
    m(m, c) {
      K(m, e, c), s(e, t), s(t, l), s(t, n);
    },
    p: Ne,
    d(m) {
      m && i(e);
    },
  };
}
function Wa(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c,
    f = a[16].name + "",
    d,
    p,
    v;
  function b(g, y) {
    return g[11](g[16].id) ? Ws : g[12]() ? $s : Ys;
  }
  let x = b(a)(a);
  return {
    c() {
      (e = h("div")),
        (t = h("div")),
        (l = h("img")),
        (n = P()),
        (m = h("div")),
        (c = h("p")),
        (d = C(f)),
        (p = P()),
        x.c(),
        (v = P()),
        this.h();
    },
    l(g) {
      e = _(g, "DIV", { class: !0 });
      var y = u(e);
      t = _(y, "DIV", { class: !0 });
      var w = u(t);
      (l = _(w, "IMG", { alt: !0, src: !0, class: !0 })),
        (n = N(w)),
        (m = _(w, "DIV", { class: !0 }));
      var T = u(m);
      c = _(T, "P", { class: !0 });
      var k = u(c);
      (d = V(k, f)),
        k.forEach(i),
        T.forEach(i),
        (p = N(w)),
        x.l(w),
        w.forEach(i),
        (v = N(y)),
        y.forEach(i),
        this.h();
    },
    h() {
      o(l, "alt", a[16].name),
        cl(l.src, (r = a[16].image)) || o(l, "src", r),
        o(l, "class", "h-12 m-2 mt-4 md:h-24 xl:h-20"),
        o(
          c,
          "class",
          "text-center text-xxs sm:text-xs md:text-base font-bold xl:text-sm xl:min-h-[40px]"
        ),
        o(
          m,
          "class",
          "mt-1 mb-1 lg:p-2 p-1 lg:px-4 rounded-md min-h-[40px] flex items-center"
        ),
        o(
          t,
          "class",
          Vs("flex flex-col justify-center items-center flex-1") +
            " svelte-fqxxu5"
        ),
        o(
          e,
          "class",
          "flex items-center w-1/5 bonus-panel-inner m-1 mt-2 rounded-lg border border-gray-700 svelte-fqxxu5"
        );
    },
    m(g, y) {
      K(g, e, y),
        s(e, t),
        s(t, l),
        s(t, n),
        s(t, m),
        s(m, c),
        s(c, d),
        s(t, p),
        x.m(t, null),
        s(e, v);
    },
    p(g, y) {
      x.p(g, y);
    },
    d(g) {
      g && i(e), x.d();
    },
  };
}
function Zs(a) {
  let e, t, l;
  return {
    c() {
      (e = h("div")), (t = h("p")), (l = C("1 Per Week")), this.h();
    },
    l(r) {
      e = _(r, "DIV", { class: !0 });
      var n = u(e);
      t = _(n, "P", { class: !0 });
      var m = u(t);
      (l = V(m, "1 Per Week")), m.forEach(i), n.forEach(i), this.h();
    },
    h() {
      o(t, "class", "text-center text-xxs md:text-base xl:text-xs xl:mt-1"),
        o(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4 xl:min-h-[30px]");
    },
    m(r, n) {
      K(r, e, n), s(e, t), s(t, l);
    },
    p: Ne,
    d(r) {
      r && i(e);
    },
  };
}
function qs(a) {
  let e, t, l, r, n;
  function m() {
    return a[14](a[16]);
  }
  return {
    c() {
      (e = h("div")), (t = h("button")), (l = C("Use")), this.h();
    },
    l(c) {
      e = _(c, "DIV", { class: !0 });
      var f = u(e);
      t = _(f, "BUTTON", { class: !0 });
      var d = u(t);
      (l = V(d, "Use")), d.forEach(i), f.forEach(i), this.h();
    },
    h() {
      o(
        t,
        "class",
        "fpl-purple-btn rounded-md w-full text-xs py-1 min-h-[30px] md:text-base"
      ),
        o(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4");
    },
    m(c, f) {
      K(c, e, f), s(e, t), s(t, l), r || ((n = Ee(t, "click", m)), (r = !0));
    },
    p(c, f) {
      a = c;
    },
    d(c) {
      c && i(e), (r = !1), n();
    },
  };
}
function Xs(a) {
  let e, t, l;
  return {
    c() {
      (e = h("div")), (t = h("p")), (l = C("Coming Soon")), this.h();
    },
    l(r) {
      e = _(r, "DIV", { class: !0 });
      var n = u(e);
      t = _(n, "P", { class: !0 });
      var m = u(t);
      (l = V(m, "Coming Soon")), m.forEach(i), n.forEach(i), this.h();
    },
    h() {
      o(t, "class", "text-center text-xxs md:text-base xl:text-xs xl:mt-1"),
        o(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4 xl:min-h-[30px]");
    },
    m(r, n) {
      K(r, e, n), s(e, t), s(t, l);
    },
    p: Ne,
    d(r) {
      r && i(e);
    },
  };
}
function Ks(a) {
  let e,
    t,
    l,
    r = a[11](a[16].id) + "",
    n;
  return {
    c() {
      (e = h("div")), (t = h("p")), (l = C("Used GW")), (n = C(r)), this.h();
    },
    l(m) {
      e = _(m, "DIV", { class: !0 });
      var c = u(e);
      t = _(c, "P", { class: !0 });
      var f = u(t);
      (l = V(f, "Used GW")),
        (n = V(f, r)),
        f.forEach(i),
        c.forEach(i),
        this.h();
    },
    h() {
      o(t, "class", "text-center text-xxs md:text-base xl:text-xs xl:mt-1"),
        o(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4 xl:min-h-[30px]");
    },
    m(m, c) {
      K(m, e, c), s(e, t), s(t, l), s(t, n);
    },
    p: Ne,
    d(m) {
      m && i(e);
    },
  };
}
function Za(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c,
    f = a[16].name + "",
    d,
    p,
    v;
  function b(g, y) {
    return g[11](g[16].id)
      ? Ks
      : g[16].id == 7 || g[16].id == 8
      ? Xs
      : g[12]()
      ? Zs
      : qs;
  }
  let x = b(a)(a);
  return {
    c() {
      (e = h("div")),
        (t = h("div")),
        (l = h("img")),
        (n = P()),
        (m = h("div")),
        (c = h("p")),
        (d = C(f)),
        (p = P()),
        x.c(),
        (v = P()),
        this.h();
    },
    l(g) {
      e = _(g, "DIV", { class: !0 });
      var y = u(e);
      t = _(y, "DIV", { class: !0 });
      var w = u(t);
      (l = _(w, "IMG", { alt: !0, src: !0, class: !0 })),
        (n = N(w)),
        (m = _(w, "DIV", { class: !0 }));
      var T = u(m);
      c = _(T, "P", { class: !0 });
      var k = u(c);
      (d = V(k, f)),
        k.forEach(i),
        T.forEach(i),
        (p = N(w)),
        x.l(w),
        w.forEach(i),
        (v = N(y)),
        y.forEach(i),
        this.h();
    },
    h() {
      o(l, "alt", a[16].name),
        cl(l.src, (r = a[16].image)) || o(l, "src", r),
        o(l, "class", "h-12 m-2 mt-4 md:h-24 xl:h-20"),
        o(
          c,
          "class",
          "text-center text-xxs sm:text-xs md:text-base font-bold xl:text-sm xl:min-h-[40px]"
        ),
        o(
          m,
          "class",
          "mt-1 mb-1 lg:p-2 p-1 lg:px-4 rounded-md min-h-[40px] flex items-center"
        ),
        o(
          t,
          "class",
          Vs("flex flex-col justify-center items-center flex-1") +
            " svelte-fqxxu5"
        ),
        o(
          e,
          "class",
          "flex items-center w-1/5 bonus-panel-inner m-1 rounded-lg border border-gray-700 svelte-fqxxu5"
        );
    },
    m(g, y) {
      K(g, e, y),
        s(e, t),
        s(t, l),
        s(t, n),
        s(t, m),
        s(m, c),
        s(c, d),
        s(t, p),
        x.m(t, null),
        s(e, v);
    },
    p(g, y) {
      x.p(g, y);
    },
    d(g) {
      g && i(e), x.d();
    },
  };
}
function zs(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c,
    f,
    d,
    p,
    v,
    b = a[5] > 0 && Ya(a),
    E = a[7],
    x = [];
  for (let w = 0; w < E.length; w += 1) x[w] = Wa($a(a, E, w));
  let g = a[8],
    y = [];
  for (let w = 0; w < g.length; w += 1) y[w] = Za(Ra(a, g, w));
  return {
    c() {
      (e = h("div")),
        b && b.c(),
        (t = P()),
        (l = h("div")),
        (r = h("h1")),
        (n = C("Bonuses")),
        (m = P()),
        (c = h("div")),
        (f = h("div"));
      for (let w = 0; w < x.length; w += 1) x[w].c();
      (d = P()), (p = h("div"));
      for (let w = 0; w < y.length; w += 1) y[w].c();
      this.h();
    },
    l(w) {
      e = _(w, "DIV", { class: !0 });
      var T = u(e);
      b && b.l(T), (t = N(T)), (l = _(T, "DIV", { class: !0 }));
      var k = u(l);
      r = _(k, "H1", { class: !0 });
      var G = u(r);
      (n = V(G, "Bonuses")),
        G.forEach(i),
        k.forEach(i),
        (m = N(T)),
        (c = _(T, "DIV", { class: !0 }));
      var D = u(c);
      f = _(D, "DIV", { class: !0 });
      var R = u(f);
      for (let L = 0; L < x.length; L += 1) x[L].l(R);
      R.forEach(i), (d = N(D)), (p = _(D, "DIV", { class: !0 }));
      var B = u(p);
      for (let L = 0; L < y.length; L += 1) y[L].l(B);
      B.forEach(i), D.forEach(i), T.forEach(i), this.h();
    },
    h() {
      o(r, "class", "m-3 md:m-4 font-bold"),
        o(
          l,
          "class",
          "flex flex-col md:flex-row bonus-panel-inner svelte-fqxxu5"
        ),
        o(f, "class", "flex items-center w-100 xl:w-1/2"),
        o(p, "class", "flex items-center w-100 xl:w-1/2"),
        o(c, "class", "flex flex-col xl:flex-row md:mx-2"),
        o(
          e,
          "class",
          "bonus-panel rounded-md mx-4 flex-1 mb-2 lg:mb-0 svelte-fqxxu5"
        );
    },
    m(w, T) {
      K(w, e, T),
        b && b.m(e, null),
        s(e, t),
        s(e, l),
        s(l, r),
        s(r, n),
        s(e, m),
        s(e, c),
        s(c, f);
      for (let k = 0; k < x.length; k += 1) x[k] && x[k].m(f, null);
      s(c, d), s(c, p);
      for (let k = 0; k < y.length; k += 1) y[k] && y[k].m(p, null);
      v = !0;
    },
    p(w, [T]) {
      if (
        (w[5] > 0
          ? b
            ? (b.p(w, T), T & 32 && re(b, 1))
            : ((b = Ya(w)), b.c(), re(b, 1), b.m(e, t))
          : b &&
            (ot(),
            de(b, 1, 1, () => {
              b = null;
            }),
            it()),
        T & 6784)
      ) {
        E = w[7];
        let k;
        for (k = 0; k < E.length; k += 1) {
          const G = $a(w, E, k);
          x[k] ? x[k].p(G, T) : ((x[k] = Wa(G)), x[k].c(), x[k].m(f, null));
        }
        for (; k < x.length; k += 1) x[k].d(1);
        x.length = E.length;
      }
      if (T & 6912) {
        g = w[8];
        let k;
        for (k = 0; k < g.length; k += 1) {
          const G = Ra(w, g, k);
          y[k] ? y[k].p(G, T) : ((y[k] = Za(G)), y[k].c(), y[k].m(p, null));
        }
        for (; k < y.length; k += 1) y[k].d(1);
        y.length = g.length;
      }
    },
    i(w) {
      v || (re(b), (v = !0));
    },
    o(w) {
      de(b), (v = !1);
    },
    d(w) {
      w && i(e), b && b.d(), Ct(x, w), Ct(y, w);
    },
  };
}
function Js(a, e, t) {
  let l,
    r = Ne,
    n = () => (r(), (r = ll(m, (D) => t(15, (l = D)))), m);
  a.$$.on_destroy.push(() => r());
  let { fantasyTeam: m = nt(null) } = e;
  n();
  let { players: c = nt([]) } = e,
    { teams: f = nt([]) } = e,
    { activeGameweek: d } = e,
    p = !1,
    v = 0,
    b = [
      {
        id: 1,
        name: "Goal Getter",
        image: "goal-getter.png",
        description:
          "Select a player you think will score in a game to receive a X3 mulitplier for each goal scored.",
        selectionType: Qe.PLAYER,
      },
      {
        id: 2,
        name: "Pass Master",
        image: "pass-master.png",
        description:
          "Select a player you think will assist in a game to receive a X3 mulitplier for each assist.",
        selectionType: Qe.PLAYER,
      },
      {
        id: 3,
        name: "No Entry",
        image: "no-entry.png",
        description:
          "Select a goalkeeper or defender you think will keep a clean sheet to receive a X3 multipler on their total score.",
        selectionType: Qe.PLAYER,
      },
      {
        id: 4,
        name: "Team Boost",
        image: "team-boost.png",
        description:
          "Receive a X2 multiplier from all players from a single club that are in your team.",
        selectionType: Qe.TEAM,
      },
      {
        id: 5,
        name: "Safe Hands",
        image: "safe-hands.png",
        description:
          "Receive a X3 multiplier on your goalkeeper if they make 5 saves in a match.",
        selectionType: Qe.AUTOMATIC,
      },
      {
        id: 6,
        name: "Captain Fantastic",
        image: "captain-fantastic.png",
        description:
          "Receive a X2 multiplier on your team captain's score if they score a goal in a match.",
        selectionType: Qe.AUTOMATIC,
      },
      {
        id: 7,
        name: "Prospects",
        image: "prospects.png",
        description: "Receive a X2 multiplier for players under the age of 21.",
        selectionType: Qe.AUTOMATIC,
      },
      {
        id: 8,
        name: "Countrymen",
        image: "countrymen.png",
        description:
          "Receive a X2 multiplier for players of a selected nationality.",
        selectionType: Qe.COUNTRY,
      },
      {
        id: 9,
        name: "Brace Bonus",
        image: "brace-bonus.png",
        description:
          "Receive a X2 multiplier on a player's score if they score 2 or more goals in a game. Applies to every player who scores a brace.",
        selectionType: Qe.AUTOMATIC,
      },
      {
        id: 10,
        name: "Hat-Trick Hero",
        image: "hat-trick-hero.png",
        description:
          "Receive a X3 multiplier on a player's score if they score 3 or more goals in a game. Applies to every player who scores a hat-trick.",
        selectionType: Qe.AUTOMATIC,
      },
    ],
    E = b.slice(0, 5),
    x = b.slice(5, 10);
  function g(D) {
    t(5, (v = D)), t(4, (p = !0));
  }
  function y() {
    t(4, (p = !1));
  }
  function w(D) {
    if (!l) return !1;
    switch (D) {
      case 1:
        return l.goalGetterGameweek && l.goalGetterGameweek > 0
          ? l.goalGetterGameweek
          : !1;
      case 2:
        return l.passMasterGameweek && l.passMasterGameweek > 0
          ? l.passMasterGameweek
          : !1;
      case 3:
        return l.noEntryGameweek && l.noEntryGameweek > 0
          ? l.noEntryGameweek
          : !1;
      case 4:
        return l.teamBoostGameweek && l.teamBoostGameweek > 0
          ? l.teamBoostGameweek
          : !1;
      case 5:
        return l.safeHandsGameweek && l.safeHandsGameweek > 0
          ? l.safeHandsGameweek
          : !1;
      case 6:
        return l.captainFantasticGameweek && l.captainFantasticGameweek > 0
          ? l.captainFantasticGameweek
          : !1;
      case 7:
        return !1;
      case 8:
        return !1;
      case 9:
        return l.braceBonusGameweek && l.braceBonusGameweek > 0
          ? l.braceBonusGameweek
          : !1;
      case 10:
        return l.hatTrickHeroGameweek && l.hatTrickHeroGameweek > 0
          ? l.hatTrickHeroGameweek
          : !1;
      default:
        return !1;
    }
  }
  function T() {
    return l
      ? l?.goalGetterGameweek == d ||
          l?.passMasterGameweek == d ||
          l?.noEntryGameweek == d ||
          l?.teamBoostGameweek == d ||
          l?.safeHandsGameweek == d ||
          l?.captainFantasticGameweek == d ||
          l?.braceBonusGameweek == d ||
          l?.hatTrickHeroGameweek == d
      : !1;
  }
  const k = (D) => g(D.id),
    G = (D) => g(D.id);
  return (
    (a.$$set = (D) => {
      "fantasyTeam" in D && n(t(0, (m = D.fantasyTeam))),
        "players" in D && t(1, (c = D.players)),
        "teams" in D && t(2, (f = D.teams)),
        "activeGameweek" in D && t(3, (d = D.activeGameweek));
    }),
    [m, c, f, d, p, v, b, E, x, g, y, w, T, k, G]
  );
}
class Qs extends St {
  constructor(e) {
    super(),
      Ht(this, e, Js, zs, Lt, {
        fantasyTeam: 0,
        players: 1,
        teams: 2,
        activeGameweek: 3,
      });
  }
}
function er(a) {
  let e, t;
  return {
    c() {
      (e = pe("svg")), (t = pe("path")), this.h();
    },
    l(l) {
      e = ve(l, "svg", { xmlns: !0, class: !0, fill: !0, viewBox: !0 });
      var r = u(e);
      (t = ve(r, "path", { d: !0, fill: !0 })),
        u(t).forEach(i),
        r.forEach(i),
        this.h();
    },
    h() {
      o(
        t,
        "d",
        "M16 6.66667H9.33333V0H6.66667V6.66667H0V9.33333H6.66667V16H9.33333V9.33333H16V6.66667Z"
      ),
        o(t, "fill", "#FFFFFF"),
        o(e, "xmlns", "http://www.w3.org/2000/svg"),
        o(e, "class", a[0]),
        o(e, "fill", "currentColor"),
        o(e, "viewBox", "0 0 16 16");
    },
    m(l, r) {
      K(l, e, r), s(e, t);
    },
    p(l, [r]) {
      r & 1 && o(e, "class", l[0]);
    },
    i: Ne,
    o: Ne,
    d(l) {
      l && i(e);
    },
  };
}
function tr(a, e, t) {
  let { className: l = "" } = e;
  return (
    (a.$$set = (r) => {
      "className" in r && t(0, (l = r.className));
    }),
    [l]
  );
}
class Ns extends St {
  constructor(e) {
    super(), Ht(this, e, tr, er, Lt, { className: 0 });
  }
}
function qa(a, e, t) {
  const l = a.slice();
  return (l[38] = e[t]), (l[40] = t), l;
}
function Xa(a, e, t) {
  const l = a.slice();
  return (l[41] = e[t]), (l[40] = t), l;
}
function Ka(a, e, t) {
  const l = a.slice();
  return (l[43] = e[t]), l;
}
function za(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c,
    f,
    d,
    p,
    v,
    b,
    E,
    x,
    g,
    y,
    w,
    T,
    k,
    G,
    D,
    R,
    B,
    L,
    Y,
    ce,
    S,
    X,
    O,
    ne,
    q,
    te,
    j,
    le,
    M,
    H,
    I,
    $,
    Q,
    _e,
    ae,
    Ve,
    W,
    U,
    ee,
    Ie,
    he,
    Me,
    F,
    oe,
    Ce,
    be,
    we,
    Ke,
    Te,
    xe,
    Re,
    $e = (a[16] / 4).toFixed(2) + "",
    Oe,
    We,
    et,
    tt,
    Fe,
    bt,
    Ut,
    gt,
    yt,
    $t,
    Vt,
    Nt,
    ct,
    A,
    Z,
    ie,
    se,
    fe,
    ue,
    ke,
    De,
    at,
    qe,
    lt,
    Be,
    Ze,
    ft,
    Se,
    ut,
    sl,
    Yt,
    jt,
    Qt,
    Gt = a[15],
    Xe = [];
  for (let me = 0; me < Gt.length; me += 1) Xe[me] = Ja(Ka(a, Gt, me));
  let wt = a[13],
    Ge = [];
  for (let me = 0; me < wt.length; me += 1) Ge[me] = as(Xa(a, wt, me));
  const Pl = (me) =>
    de(Ge[me], 1, 1, () => {
      Ge[me] = null;
    });
  let Tt = Array(Math.ceil(a[12].length / Wl)),
    Ae = [];
  for (let me = 0; me < Tt.length; me += 1) Ae[me] = ss(qa(a, Tt, me));
  return {
    c() {
      (e = h("div")),
        (t = h("div")),
        (l = h("div")),
        (r = h("h3")),
        (n = C("Select Player")),
        (m = P()),
        (c = h("button")),
        (f = C("×")),
        (d = P()),
        (p = h("div")),
        (v = h("div")),
        (b = h("div")),
        (E = h("label")),
        (x = C("Filter by Team:")),
        (g = P()),
        (y = h("select")),
        (w = h("option")),
        (T = C("All"));
      for (let me = 0; me < Xe.length; me += 1) Xe[me].c();
      (k = P()),
        (G = h("div")),
        (D = h("label")),
        (R = C("Filter by Position:")),
        (B = P()),
        (L = h("select")),
        (Y = h("option")),
        (ce = C("All")),
        (S = h("option")),
        (X = C("Goalkeepers")),
        (O = h("option")),
        (ne = C("Defenders")),
        (q = h("option")),
        (te = C("Midfielders")),
        (j = h("option")),
        (le = C("Forwards")),
        (M = P()),
        (H = h("div")),
        (I = h("div")),
        ($ = h("label")),
        (Q = C("Min Value:")),
        (_e = P()),
        (ae = h("input")),
        (Ve = P()),
        (W = h("div")),
        (U = h("label")),
        (ee = C("Max Value:")),
        (Ie = P()),
        (he = h("input")),
        (Me = P()),
        (F = h("div")),
        (oe = h("label")),
        (Ce = C("Search by Name:")),
        (be = P()),
        (we = h("input")),
        (Ke = P()),
        (Te = h("div")),
        (xe = h("label")),
        (Re = C("Available Balance: £")),
        (Oe = C($e)),
        (We = C("m")),
        (et = P()),
        (tt = h("div")),
        (Fe = h("div")),
        (bt = h("div")),
        (Ut = C("Pos")),
        (gt = P()),
        (yt = h("div")),
        ($t = C("Player")),
        (Vt = P()),
        (Nt = h("div")),
        (ct = C("Team")),
        (A = P()),
        (Z = h("div")),
        (ie = C("Value")),
        (se = P()),
        (fe = h("div")),
        (ue = C("PTS")),
        (ke = P()),
        (De = h("div")),
        (at = C(" ")),
        (qe = P());
      for (let me = 0; me < Ge.length; me += 1) Ge[me].c();
      (lt = P()), (Be = h("div")), (Ze = h("div"));
      for (let me = 0; me < Ae.length; me += 1) Ae[me].c();
      (ft = P()),
        (Se = h("div")),
        (ut = h("button")),
        (sl = C("Close")),
        this.h();
    },
    l(me) {
      e = _(me, "DIV", { class: !0 });
      var Pe = u(e);
      t = _(Pe, "DIV", { class: !0 });
      var J = u(t);
      l = _(J, "DIV", { class: !0 });
      var st = u(l);
      r = _(st, "H3", { class: !0 });
      var dl = u(r);
      (n = V(dl, "Select Player")),
        dl.forEach(i),
        (m = N(st)),
        (c = _(st, "BUTTON", { class: !0 }));
      var At = u(c);
      (f = V(At, "×")),
        At.forEach(i),
        st.forEach(i),
        (d = N(J)),
        (p = _(J, "DIV", { class: !0 }));
      var Dt = u(p);
      v = _(Dt, "DIV", { class: !0 });
      var Wt = u(v);
      b = _(Wt, "DIV", {});
      var el = u(b);
      E = _(el, "LABEL", { for: !0, class: !0 });
      var Zt = u(E);
      (x = V(Zt, "Filter by Team:")),
        Zt.forEach(i),
        (g = N(el)),
        (y = _(el, "SELECT", { id: !0, class: !0 }));
      var Mt = u(y);
      w = _(Mt, "OPTION", {});
      var ml = u(w);
      (T = V(ml, "All")), ml.forEach(i);
      for (let z = 0; z < Xe.length; z += 1) Xe[z].l(Mt);
      Mt.forEach(i), el.forEach(i), (k = N(Wt)), (G = _(Wt, "DIV", {}));
      var dt = u(G);
      D = _(dt, "LABEL", { for: !0, class: !0 });
      var hl = u(D);
      (R = V(hl, "Filter by Position:")),
        hl.forEach(i),
        (B = N(dt)),
        (L = _(dt, "SELECT", { id: !0, class: !0 }));
      var mt = u(L);
      Y = _(mt, "OPTION", {});
      var Pt = u(Y);
      (ce = V(Pt, "All")), Pt.forEach(i), (S = _(mt, "OPTION", {}));
      var _l = u(S);
      (X = V(_l, "Goalkeepers")), _l.forEach(i), (O = _(mt, "OPTION", {}));
      var rl = u(O);
      (ne = V(rl, "Defenders")), rl.forEach(i), (q = _(mt, "OPTION", {}));
      var nl = u(q);
      (te = V(nl, "Midfielders")), nl.forEach(i), (j = _(mt, "OPTION", {}));
      var pl = u(j);
      (le = V(pl, "Forwards")),
        pl.forEach(i),
        mt.forEach(i),
        dt.forEach(i),
        Wt.forEach(i),
        (M = N(Dt)),
        (H = _(Dt, "DIV", { class: !0 }));
      var ht = u(H);
      I = _(ht, "DIV", {});
      var tl = u(I);
      $ = _(tl, "LABEL", { for: !0, class: !0 });
      var ol = u($);
      (Q = V(ol, "Min Value:")),
        ol.forEach(i),
        (_e = N(tl)),
        (ae = _(tl, "INPUT", { id: !0, type: !0, class: !0 })),
        tl.forEach(i),
        (Ve = N(ht)),
        (W = _(ht, "DIV", {}));
      var qt = u(W);
      U = _(qt, "LABEL", { for: !0, class: !0 });
      var vl = u(U);
      (ee = V(vl, "Max Value:")),
        vl.forEach(i),
        (Ie = N(qt)),
        (he = _(qt, "INPUT", { id: !0, type: !0, class: !0 })),
        qt.forEach(i),
        ht.forEach(i),
        (Me = N(Dt)),
        (F = _(Dt, "DIV", { class: !0 }));
      var xt = u(F);
      oe = _(xt, "LABEL", { for: !0, class: !0 });
      var _t = u(oe);
      (Ce = V(_t, "Search by Name:")),
        _t.forEach(i),
        (be = N(xt)),
        (we = _(xt, "INPUT", { id: !0, type: !0, class: !0, placeholder: !0 })),
        xt.forEach(i),
        (Ke = N(Dt)),
        (Te = _(Dt, "DIV", { class: !0 }));
      var pt = u(Te);
      xe = _(pt, "LABEL", { for: !0, class: !0 });
      var Xt = u(xe);
      (Re = V(Xt, "Available Balance: £")),
        (Oe = V(Xt, $e)),
        (We = V(Xt, "m")),
        Xt.forEach(i),
        pt.forEach(i),
        Dt.forEach(i),
        (et = N(J)),
        (tt = _(J, "DIV", { class: !0 }));
      var Bt = u(tt);
      Fe = _(Bt, "DIV", { class: !0 });
      var ze = u(Fe);
      bt = _(ze, "DIV", { class: !0 });
      var bl = u(bt);
      (Ut = V(bl, "Pos")),
        bl.forEach(i),
        (gt = N(ze)),
        (yt = _(ze, "DIV", { class: !0 }));
      var Ft = u(yt);
      ($t = V(Ft, "Player")),
        Ft.forEach(i),
        (Vt = N(ze)),
        (Nt = _(ze, "DIV", { class: !0 }));
      var He = u(Nt);
      (ct = V(He, "Team")),
        He.forEach(i),
        (A = N(ze)),
        (Z = _(ze, "DIV", { class: !0 }));
      var gl = u(Z);
      (ie = V(gl, "Value")),
        gl.forEach(i),
        (se = N(ze)),
        (fe = _(ze, "DIV", { class: !0 }));
      var Nl = u(fe);
      (ue = V(Nl, "PTS")),
        Nl.forEach(i),
        (ke = N(ze)),
        (De = _(ze, "DIV", { class: !0 }));
      var Kt = u(De);
      (at = V(Kt, " ")), Kt.forEach(i), ze.forEach(i), (qe = N(Bt));
      for (let z = 0; z < Ge.length; z += 1) Ge[z].l(Bt);
      Bt.forEach(i), (lt = N(J)), (Be = _(J, "DIV", { class: !0 }));
      var Je = u(Be);
      Ze = _(Je, "DIV", { class: !0 });
      var Dl = u(Ze);
      for (let z = 0; z < Ae.length; z += 1) Ae[z].l(Dl);
      Dl.forEach(i),
        Je.forEach(i),
        (ft = N(J)),
        (Se = _(J, "DIV", { class: !0 }));
      var Ot = u(Se);
      ut = _(Ot, "BUTTON", { class: !0 });
      var Gl = u(ut);
      (sl = V(Gl, "Close")),
        Gl.forEach(i),
        Ot.forEach(i),
        J.forEach(i),
        Pe.forEach(i),
        this.h();
    },
    h() {
      o(r, "class", "text-xl font-semibold"),
        o(c, "class", "text-3xl leading-none"),
        o(l, "class", "flex justify-between items-center mb-4"),
        o(E, "for", "filterTeam"),
        o(E, "class", "text-sm"),
        (w.__value = -1),
        (w.value = w.__value),
        o(y, "id", "filterTeam"),
        o(
          y,
          "class",
          "mt-1 block w-full p-2 bg-gray-700 text-white rounded-md"
        ),
        a[7] === void 0 && ul(() => a[25].call(y)),
        o(D, "for", "filterPosition"),
        o(D, "class", "text-sm"),
        (Y.__value = -1),
        (Y.value = Y.__value),
        (S.__value = 0),
        (S.value = S.__value),
        (O.__value = 1),
        (O.value = O.__value),
        (q.__value = 2),
        (q.value = q.__value),
        (j.__value = 3),
        (j.value = j.__value),
        o(L, "id", "filterPosition"),
        o(
          L,
          "class",
          "mt-1 block w-full p-2 bg-gray-700 text-white rounded-md"
        ),
        a[0] === void 0 && ul(() => a[26].call(L)),
        o(v, "class", "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"),
        o($, "for", "minValue"),
        o($, "class", "text-sm"),
        o(ae, "id", "minValue"),
        o(ae, "type", "number"),
        o(
          ae,
          "class",
          "mt-1 block w-full p-2 bg-gray-700 text-white rounded-md"
        ),
        o(U, "for", "maxValue"),
        o(U, "class", "text-sm"),
        o(he, "id", "maxValue"),
        o(he, "type", "number"),
        o(
          he,
          "class",
          "mt-1 block w-full p-2 bg-gray-700 text-white rounded-md"
        ),
        o(H, "class", "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"),
        o(oe, "for", "filterSurname"),
        o(oe, "class", "text-sm"),
        o(we, "id", "filterSurname"),
        o(we, "type", "text"),
        o(
          we,
          "class",
          "mt-1 block w-full p-2 bg-gray-700 text-white rounded-md"
        ),
        o(we, "placeholder", "Enter"),
        o(F, "class", "mb-4"),
        o(xe, "for", "bankBalance"),
        o(xe, "class", "font-bold"),
        o(Te, "class", "mb-4"),
        o(p, "class", "mb-4"),
        o(bt, "class", "w-1/12 text-center mx-4"),
        o(yt, "class", "w-4/12"),
        o(Nt, "class", "w-2/12"),
        o(Z, "class", "w-2/12"),
        o(fe, "class", "w-1/12"),
        o(De, "class", "w-2/12 text-center"),
        o(
          Fe,
          "class",
          "flex justify-between border border-gray-700 py-4 bg-light-gray"
        ),
        o(tt, "class", "overflow-x-auto flex-1 text-xs md:text-base"),
        o(Ze, "class", "flex space-x-1 min-w-max"),
        o(Be, "class", "justify-center mt-4 pb-4 overflow-x-auto"),
        o(ut, "class", "px-4 py-2 fpl-purple-btn rounded-md text-white"),
        o(Se, "class", "flex justify-end mt-4"),
        o(
          t,
          "class",
          "relative top-10 md:top-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-panel text-white"
        ),
        o(
          e,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop"
        );
    },
    m(me, Pe) {
      K(me, e, Pe),
        s(e, t),
        s(t, l),
        s(l, r),
        s(r, n),
        s(l, m),
        s(l, c),
        s(c, f),
        s(t, d),
        s(t, p),
        s(p, v),
        s(v, b),
        s(b, E),
        s(E, x),
        s(b, g),
        s(b, y),
        s(y, w),
        s(w, T);
      for (let J = 0; J < Xe.length; J += 1) Xe[J] && Xe[J].m(y, null);
      It(y, a[7], !0),
        s(v, k),
        s(v, G),
        s(G, D),
        s(D, R),
        s(G, B),
        s(G, L),
        s(L, Y),
        s(Y, ce),
        s(L, S),
        s(S, X),
        s(L, O),
        s(O, ne),
        s(L, q),
        s(q, te),
        s(L, j),
        s(j, le),
        It(L, a[0], !0),
        s(p, M),
        s(p, H),
        s(H, I),
        s(I, $),
        s($, Q),
        s(I, _e),
        s(I, ae),
        Cl(ae, a[9]),
        s(H, Ve),
        s(H, W),
        s(W, U),
        s(U, ee),
        s(W, Ie),
        s(W, he),
        Cl(he, a[10]),
        s(p, Me),
        s(p, F),
        s(F, oe),
        s(oe, Ce),
        s(F, be),
        s(F, we),
        Cl(we, a[8]),
        s(p, Ke),
        s(p, Te),
        s(Te, xe),
        s(xe, Re),
        s(xe, Oe),
        s(xe, We),
        s(t, et),
        s(t, tt),
        s(tt, Fe),
        s(Fe, bt),
        s(bt, Ut),
        s(Fe, gt),
        s(Fe, yt),
        s(yt, $t),
        s(Fe, Vt),
        s(Fe, Nt),
        s(Nt, ct),
        s(Fe, A),
        s(Fe, Z),
        s(Z, ie),
        s(Fe, se),
        s(Fe, fe),
        s(fe, ue),
        s(Fe, ke),
        s(Fe, De),
        s(De, at),
        s(tt, qe);
      for (let J = 0; J < Ge.length; J += 1) Ge[J] && Ge[J].m(tt, null);
      s(t, lt), s(t, Be), s(Be, Ze);
      for (let J = 0; J < Ae.length; J += 1) Ae[J] && Ae[J].m(Ze, null);
      s(t, ft),
        s(t, Se),
        s(Se, ut),
        s(ut, sl),
        (Yt = !0),
        jt ||
          ((Qt = [
            Ee(c, "click", function () {
              Vl(a[2]) && a[2].apply(this, arguments);
            }),
            Ee(y, "change", a[25]),
            Ee(L, "change", a[26]),
            Ee(ae, "input", a[27]),
            Ee(he, "input", a[28]),
            Ee(we, "input", a[29]),
            Ee(ut, "click", function () {
              Vl(a[2]) && a[2].apply(this, arguments);
            }),
            Ee(t, "click", zl(a[23])),
            Ee(t, "keydown", zl(a[24])),
            Ee(e, "click", function () {
              Vl(a[2]) && a[2].apply(this, arguments);
            }),
            Ee(e, "keydown", function () {
              Vl(a[2]) && a[2].apply(this, arguments);
            }),
          ]),
          (jt = !0));
    },
    p(me, Pe) {
      if (((a = me), Pe[0] & 32768)) {
        Gt = a[15];
        let J;
        for (J = 0; J < Gt.length; J += 1) {
          const st = Ka(a, Gt, J);
          Xe[J]
            ? Xe[J].p(st, Pe)
            : ((Xe[J] = Ja(st)), Xe[J].c(), Xe[J].m(y, null));
        }
        for (; J < Xe.length; J += 1) Xe[J].d(1);
        Xe.length = Gt.length;
      }
      if (
        (Pe[0] & 32896 && It(y, a[7]),
        Pe[0] & 1 && It(L, a[0]),
        Pe[0] & 512 && Rl(ae.value) !== a[9] && Cl(ae, a[9]),
        Pe[0] & 1024 && Rl(he.value) !== a[10] && Cl(he, a[10]),
        Pe[0] & 256 && we.value !== a[8] && Cl(we, a[8]),
        (!Yt || Pe[0] & 65536) &&
          $e !== ($e = (a[16] / 4).toFixed(2) + "") &&
          ye(Oe, $e),
        Pe[0] & 286720)
      ) {
        wt = a[13];
        let J;
        for (J = 0; J < wt.length; J += 1) {
          const st = Xa(a, wt, J);
          Ge[J]
            ? (Ge[J].p(st, Pe), re(Ge[J], 1))
            : ((Ge[J] = as(st)), Ge[J].c(), re(Ge[J], 1), Ge[J].m(tt, null));
        }
        for (ot(), J = wt.length; J < Ge.length; J += 1) Pl(J);
        it();
      }
      if (Pe[0] & 137216) {
        Tt = Array(Math.ceil(a[12].length / Wl));
        let J;
        for (J = 0; J < Tt.length; J += 1) {
          const st = qa(a, Tt, J);
          Ae[J]
            ? Ae[J].p(st, Pe)
            : ((Ae[J] = ss(st)), Ae[J].c(), Ae[J].m(Ze, null));
        }
        for (; J < Ae.length; J += 1) Ae[J].d(1);
        Ae.length = Tt.length;
      }
    },
    i(me) {
      if (!Yt) {
        for (let Pe = 0; Pe < wt.length; Pe += 1) re(Ge[Pe]);
        Yt = !0;
      }
    },
    o(me) {
      Ge = Ge.filter(Boolean);
      for (let Pe = 0; Pe < Ge.length; Pe += 1) de(Ge[Pe]);
      Yt = !1;
    },
    d(me) {
      me && i(e), Ct(Xe, me), Ct(Ge, me), Ct(Ae, me), (jt = !1), Zl(Qt);
    },
  };
}
function Ja(a) {
  let e,
    t = a[43].friendlyName + "",
    l,
    r;
  return {
    c() {
      (e = h("option")), (l = C(t)), this.h();
    },
    l(n) {
      e = _(n, "OPTION", {});
      var m = u(e);
      (l = V(m, t)), m.forEach(i), this.h();
    },
    h() {
      (e.__value = r = a[43].id), (e.value = e.__value);
    },
    m(n, m) {
      K(n, e, m), s(e, l);
    },
    p(n, m) {
      m[0] & 32768 && t !== (t = n[43].friendlyName + "") && ye(l, t),
        m[0] & 32768 &&
          r !== (r = n[43].id) &&
          ((e.__value = r), (e.value = e.__value));
    },
    d(n) {
      n && i(e);
    },
  };
}
function Qa(a) {
  let e;
  return {
    c() {
      e = C("GK");
    },
    l(t) {
      e = V(t, "GK");
    },
    m(t, l) {
      K(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function es(a) {
  let e;
  return {
    c() {
      e = C("DF");
    },
    l(t) {
      e = V(t, "DF");
    },
    m(t, l) {
      K(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function ts(a) {
  let e;
  return {
    c() {
      e = C("MF");
    },
    l(t) {
      e = V(t, "MF");
    },
    m(t, l) {
      K(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function ls(a) {
  let e;
  return {
    c() {
      e = C("FW");
    },
    l(t) {
      e = V(t, "FW");
    },
    m(t, l) {
      K(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function lr(a) {
  let e, t, l, r, n;
  t = new Ns({ props: { className: "w-6 h-6 p-2" } });
  function m() {
    return a[30](a[41]);
  }
  return {
    c() {
      (e = h("button")), Le(t.$$.fragment), this.h();
    },
    l(c) {
      e = _(c, "BUTTON", { class: !0 });
      var f = u(e);
      Ye(t.$$.fragment, f), f.forEach(i), this.h();
    },
    h() {
      o(e, "class", "text-xl rounded fpl-button flex items-center");
    },
    m(c, f) {
      K(c, e, f),
        Ue(t, e, null),
        (l = !0),
        r || ((n = Ee(e, "click", m)), (r = !0));
    },
    p(c, f) {
      a = c;
    },
    i(c) {
      l || (re(t.$$.fragment, c), (l = !0));
    },
    o(c) {
      de(t.$$.fragment, c), (l = !1);
    },
    d(c) {
      c && i(e), je(t), (r = !1), n();
    },
  };
}
function ar(a) {
  let e,
    t = a[14][a[40]] + "",
    l;
  return {
    c() {
      (e = h("span")), (l = C(t)), this.h();
    },
    l(r) {
      e = _(r, "SPAN", { class: !0 });
      var n = u(e);
      (l = V(n, t)), n.forEach(i), this.h();
    },
    h() {
      o(e, "class", "text-xs text-center");
    },
    m(r, n) {
      K(r, e, n), s(e, l);
    },
    p(r, n) {
      n[0] & 16384 && t !== (t = r[14][r[40]] + "") && ye(l, t);
    },
    i: Ne,
    o: Ne,
    d(r) {
      r && i(e);
    },
  };
}
function as(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c,
    f = a[41].firstName + "",
    d,
    p,
    v = a[41].lastName + "",
    b,
    E,
    x,
    g,
    y,
    w,
    T = a[41].team?.abbreviatedName + "",
    k,
    G,
    D,
    R,
    B = (Number(a[41].value) / 4).toFixed(2) + "",
    L,
    Y,
    ce,
    S,
    X = a[41].totalPoints + "",
    O,
    ne,
    q,
    te,
    j,
    le,
    M,
    H = a[41].position === 0 && Qa(),
    I = a[41].position === 1 && es(),
    $ = a[41].position === 2 && ts(),
    Q = a[41].position === 3 && ls();
  y = new Ml({
    props: {
      className: "w-6 h-6 mr-2",
      primaryColour: a[41].team?.primaryColourHex,
      secondaryColour: a[41].team?.secondaryColourHex,
      thirdColour: a[41].team?.thirdColourHex,
    },
  });
  const _e = [ar, lr],
    ae = [];
  function Ve(W, U) {
    return W[14][W[40]] ? 0 : 1;
  }
  return (
    (te = Ve(a)),
    (j = ae[te] = _e[te](a)),
    {
      c() {
        (e = h("div")),
          (t = h("div")),
          H && H.c(),
          (l = P()),
          I && I.c(),
          (r = P()),
          $ && $.c(),
          (n = P()),
          Q && Q.c(),
          (m = P()),
          (c = h("div")),
          (d = C(f)),
          (p = P()),
          (b = C(v)),
          (E = P()),
          (x = h("div")),
          (g = h("p")),
          Le(y.$$.fragment),
          (w = P()),
          (k = C(T)),
          (G = P()),
          (D = h("div")),
          (R = C("£")),
          (L = C(B)),
          (Y = C("m")),
          (ce = P()),
          (S = h("div")),
          (O = C(X)),
          (ne = P()),
          (q = h("div")),
          j.c(),
          (le = P()),
          this.h();
      },
      l(W) {
        e = _(W, "DIV", { class: !0 });
        var U = u(e);
        t = _(U, "DIV", { class: !0 });
        var ee = u(t);
        H && H.l(ee),
          (l = N(ee)),
          I && I.l(ee),
          (r = N(ee)),
          $ && $.l(ee),
          (n = N(ee)),
          Q && Q.l(ee),
          ee.forEach(i),
          (m = N(U)),
          (c = _(U, "DIV", { class: !0 }));
        var Ie = u(c);
        (d = V(Ie, f)),
          (p = N(Ie)),
          (b = V(Ie, v)),
          Ie.forEach(i),
          (E = N(U)),
          (x = _(U, "DIV", { class: !0 }));
        var he = u(x);
        g = _(he, "P", { class: !0 });
        var Me = u(g);
        Ye(y.$$.fragment, Me),
          (w = N(Me)),
          (k = V(Me, T)),
          Me.forEach(i),
          he.forEach(i),
          (G = N(U)),
          (D = _(U, "DIV", { class: !0 }));
        var F = u(D);
        (R = V(F, "£")),
          (L = V(F, B)),
          (Y = V(F, "m")),
          F.forEach(i),
          (ce = N(U)),
          (S = _(U, "DIV", { class: !0 }));
        var oe = u(S);
        (O = V(oe, X)),
          oe.forEach(i),
          (ne = N(U)),
          (q = _(U, "DIV", { class: !0 }));
        var Ce = u(q);
        j.l(Ce), Ce.forEach(i), (le = N(U)), U.forEach(i), this.h();
      },
      h() {
        o(t, "class", "w-1/12 text-center mx-4"),
          o(c, "class", "w-4/12"),
          o(g, "class", "flex items-center"),
          o(x, "class", "w-2/12"),
          o(D, "class", "w-2/12"),
          o(S, "class", "w-1/12"),
          o(q, "class", "w-2/12 flex justify-center items-center"),
          o(
            e,
            "class",
            "flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer"
          );
      },
      m(W, U) {
        K(W, e, U),
          s(e, t),
          H && H.m(t, null),
          s(t, l),
          I && I.m(t, null),
          s(t, r),
          $ && $.m(t, null),
          s(t, n),
          Q && Q.m(t, null),
          s(e, m),
          s(e, c),
          s(c, d),
          s(c, p),
          s(c, b),
          s(e, E),
          s(e, x),
          s(x, g),
          Ue(y, g, null),
          s(g, w),
          s(g, k),
          s(e, G),
          s(e, D),
          s(D, R),
          s(D, L),
          s(D, Y),
          s(e, ce),
          s(e, S),
          s(S, O),
          s(e, ne),
          s(e, q),
          ae[te].m(q, null),
          s(e, le),
          (M = !0);
      },
      p(W, U) {
        W[41].position === 0
          ? H || ((H = Qa()), H.c(), H.m(t, l))
          : H && (H.d(1), (H = null)),
          W[41].position === 1
            ? I || ((I = es()), I.c(), I.m(t, r))
            : I && (I.d(1), (I = null)),
          W[41].position === 2
            ? $ || (($ = ts()), $.c(), $.m(t, n))
            : $ && ($.d(1), ($ = null)),
          W[41].position === 3
            ? Q || ((Q = ls()), Q.c(), Q.m(t, null))
            : Q && (Q.d(1), (Q = null)),
          (!M || U[0] & 8192) && f !== (f = W[41].firstName + "") && ye(d, f),
          (!M || U[0] & 8192) && v !== (v = W[41].lastName + "") && ye(b, v);
        const ee = {};
        U[0] & 8192 && (ee.primaryColour = W[41].team?.primaryColourHex),
          U[0] & 8192 && (ee.secondaryColour = W[41].team?.secondaryColourHex),
          U[0] & 8192 && (ee.thirdColour = W[41].team?.thirdColourHex),
          y.$set(ee),
          (!M || U[0] & 8192) &&
            T !== (T = W[41].team?.abbreviatedName + "") &&
            ye(k, T),
          (!M || U[0] & 8192) &&
            B !== (B = (Number(W[41].value) / 4).toFixed(2) + "") &&
            ye(L, B),
          (!M || U[0] & 8192) && X !== (X = W[41].totalPoints + "") && ye(O, X);
        let Ie = te;
        (te = Ve(W)),
          te === Ie
            ? ae[te].p(W, U)
            : (ot(),
              de(ae[Ie], 1, 1, () => {
                ae[Ie] = null;
              }),
              it(),
              (j = ae[te]),
              j ? j.p(W, U) : ((j = ae[te] = _e[te](W)), j.c()),
              re(j, 1),
              j.m(q, null));
      },
      i(W) {
        M || (re(y.$$.fragment, W), re(j), (M = !0));
      },
      o(W) {
        de(y.$$.fragment, W), de(j), (M = !1);
      },
      d(W) {
        W && i(e),
          H && H.d(),
          I && I.d(),
          $ && $.d(),
          Q && Q.d(),
          je(y),
          ae[te].d();
      },
    }
  );
}
function ss(a) {
  let e,
    t = a[40] + 1 + "",
    l,
    r,
    n,
    m;
  function c() {
    return a[31](a[40]);
  }
  return {
    c() {
      (e = h("button")), (l = C(t)), (r = P()), this.h();
    },
    l(f) {
      e = _(f, "BUTTON", { class: !0 });
      var d = u(e);
      (l = V(d, t)), (r = N(d)), d.forEach(i), this.h();
    },
    h() {
      o(
        e,
        "class",
        "px-4 py-2 bg-gray-700 rounded-md text-white hover:bg-gray-600 svelte-1jqs3dw"
      ),
        Ca(e, "active", a[40] + 1 === a[11]);
    },
    m(f, d) {
      K(f, e, d), s(e, l), s(e, r), n || ((m = Ee(e, "click", c)), (n = !0));
    },
    p(f, d) {
      (a = f), d[0] & 2048 && Ca(e, "active", a[40] + 1 === a[11]);
    },
    d(f) {
      f && i(e), (n = !1), m();
    },
  };
}
function sr(a) {
  let e,
    t,
    l = a[1] && za(a);
  return {
    c() {
      l && l.c(), (e = al());
    },
    l(r) {
      l && l.l(r), (e = al());
    },
    m(r, n) {
      l && l.m(r, n), K(r, e, n), (t = !0);
    },
    p(r, n) {
      r[1]
        ? l
          ? (l.p(r, n), n[0] & 2 && re(l, 1))
          : ((l = za(r)), l.c(), re(l, 1), l.m(e.parentNode, e))
        : l &&
          (ot(),
          de(l, 1, 1, () => {
            l = null;
          }),
          it());
    },
    i(r) {
      t || (re(l), (t = !0));
    },
    o(r) {
      de(l), (t = !1);
    },
    d(r) {
      l && l.d(r), r && i(e);
    },
  };
}
const Wl = 10;
function rr(a, e, t) {
  let l,
    r,
    n,
    m,
    c,
    f = Ne,
    d = () => (f(), (f = ll(S, (F) => t(15, (c = F)))), S),
    p,
    v = Ne,
    b = () => (v(), (v = ll(ce, (F) => t(21, (p = F)))), ce),
    E,
    x = Ne,
    g = () => (x(), (x = ll(Y, (F) => t(16, (E = F)))), Y),
    y,
    w = Ne,
    T = () => (w(), (w = ll(R, (F) => t(22, (y = F)))), R);
  a.$$.on_destroy.push(() => f()),
    a.$$.on_destroy.push(() => v()),
    a.$$.on_destroy.push(() => x()),
    a.$$.on_destroy.push(() => w());
  let { showAddPlayer: k } = e,
    { closeAddPlayerModal: G } = e,
    { handlePlayerSelection: D } = e,
    { fantasyTeam: R = nt(null) } = e;
  T();
  let { filterPosition: B = -1 } = e,
    { filterColumn: L = -1 } = e,
    { bankBalance: Y = nt(0) } = e;
  g();
  let { players: ce = nt([]) } = e;
  b();
  let { teams: S = nt([]) } = e;
  d();
  let X,
    O,
    ne = -1,
    q = "",
    te = 0,
    j = 0,
    le = 1;
  ta(async () => {
    try {
      await Yl.sync(),
        await Tl.sync(),
        (X = Tl.subscribe((oe) => {
          S.set(oe);
        })),
        (O = Yl.subscribe((oe) => {
          ce.set(oe);
        })),
        (n = M(y?.playerIds ?? []));
    } catch (F) {
      jl.show("Error loading add player modal.", "error"),
        console.error("Error fetching homepage data:", F);
    }
  }),
    la(() => {
      X?.(), O?.();
    });
  function M(F) {
    const oe = {};
    return (
      F.forEach((Ce) => {
        const be = p.find((we) => we.id === Ce);
        be && (oe[be.teamId] || (oe[be.teamId] = 0), oe[be.teamId]++);
      }),
      oe
    );
  }
  function H(F) {
    if ((n[F.teamId] || 0) >= 2) return "Max 2 Per Team";
    let Ce = y;
    if (!(E >= Number(F.value))) return "Over Budget";
    if (Ce && Ce.playerIds.includes(F.id)) return "Selected";
    const we = { 0: 0, 1: 0, 2: 0, 3: 0 };
    return (
      Ce &&
        Ce.playerIds.forEach((xe) => {
          const Re = p.find(($e) => $e.id === xe);
          Re && we[Re.position]++;
        }),
      we[F.position]++,
      ["3-4-3", "3-5-2", "4-3-3", "4-4-2", "4-5-1", "5-4-1", "5-3-2"].some(
        (xe) => {
          const [Re, $e, Oe] = xe.split("-").map(Number),
            We = Math.max(0, Re - (we[1] || 0)),
            et = Math.max(0, $e - (we[2] || 0)),
            tt = Math.max(0, Oe - (we[3] || 0)),
            Fe = Math.max(0, 1 - (we[0] || 0)),
            bt = We + et + tt + Fe;
          return Object.values(we).reduce((gt, yt) => gt + yt, 0) + bt <= 11;
        }
      )
        ? null
        : "Invalid Formation"
    );
  }
  function I(F) {
    return F.map((oe) => {
      const Ce = c.find((be) => be.id === oe.teamId);
      return { ...oe, team: Ce };
    });
  }
  function $(F) {
    t(11, (le = F));
  }
  function Q(F) {
    D(F), G(), t(12, (l = []));
  }
  function _e(F) {
    Jl.call(this, a, F);
  }
  function ae(F) {
    Jl.call(this, a, F);
  }
  function Ve() {
    (ne = fl(this)), t(7, ne);
  }
  function W() {
    (B = fl(this)), t(0, B);
  }
  function U() {
    (te = Rl(this.value)), t(9, te);
  }
  function ee() {
    (j = Rl(this.value)), t(10, j);
  }
  function Ie() {
    (q = this.value), t(8, q);
  }
  const he = (F) => Q(F),
    Me = (F) => $(F + 1);
  return (
    (a.$$set = (F) => {
      "showAddPlayer" in F && t(1, (k = F.showAddPlayer)),
        "closeAddPlayerModal" in F && t(2, (G = F.closeAddPlayerModal)),
        "handlePlayerSelection" in F && t(19, (D = F.handlePlayerSelection)),
        "fantasyTeam" in F && T(t(3, (R = F.fantasyTeam))),
        "filterPosition" in F && t(0, (B = F.filterPosition)),
        "filterColumn" in F && t(20, (L = F.filterColumn)),
        "bankBalance" in F && g(t(4, (Y = F.bankBalance))),
        "players" in F && b(t(5, (ce = F.players))),
        "teams" in F && d(t(6, (S = F.teams)));
    }),
    (a.$$.update = () => {
      a.$$.dirty[0] & 3147649 &&
        t(
          12,
          (l = p.filter(
            (F) =>
              (ne === -1 || F.teamId === ne) &&
              (B === -1 || F.position === B) &&
              L > -2 &&
              (te === 0 || F.value >= te) &&
              (j === 0 || F.value <= j) &&
              (q === "" || F.lastName.toLowerCase().includes(q.toLowerCase()))
          ))
        ),
        a.$$.dirty[0] & 5244801 &&
          (ne || B || L || te || j || q) &&
          ((n = M(y?.playerIds ?? [])), t(11, (le = 1))),
        a.$$.dirty[0] & 6144 && t(13, (r = I(l.slice((le - 1) * Wl, le * Wl)))),
        a.$$.dirty[0] & 4194304 && (n = M(y?.playerIds ?? [])),
        a.$$.dirty[0] & 8192 && t(14, (m = r.map((F) => H(F))));
    }),
    [
      B,
      k,
      G,
      R,
      Y,
      ce,
      S,
      ne,
      q,
      te,
      j,
      le,
      l,
      r,
      m,
      c,
      E,
      $,
      Q,
      D,
      L,
      p,
      y,
      _e,
      ae,
      Ve,
      W,
      U,
      ee,
      Ie,
      he,
      Me,
    ]
  );
}
class nr extends St {
  constructor(e) {
    super(),
      Ht(
        this,
        e,
        rr,
        sr,
        Lt,
        {
          showAddPlayer: 1,
          closeAddPlayerModal: 2,
          handlePlayerSelection: 19,
          fantasyTeam: 3,
          filterPosition: 0,
          filterColumn: 20,
          bankBalance: 4,
          players: 5,
          teams: 6,
        },
        null,
        [-1, -1]
      );
  }
}
function or(a) {
  let e, t, l, r, n, m, c, f, d, p, v, b, E, x, g;
  return {
    c() {
      (e = pe("svg")),
        (t = pe("defs")),
        (l = pe("linearGradient")),
        (r = pe("linearGradient")),
        (n = pe("stop")),
        (m = pe("stop")),
        (c = pe("linearGradient")),
        (f = pe("stop")),
        (d = pe("stop")),
        (p = pe("linearGradient")),
        (v = pe("linearGradient")),
        (b = pe("g")),
        (E = pe("path")),
        (x = pe("path")),
        (g = pe("circle")),
        this.h();
    },
    l(y) {
      e = ve(y, "svg", {
        viewBox: !0,
        class: !0,
        xmlns: !0,
        "xmlns:xlink": !0,
      });
      var w = u(e);
      t = ve(w, "defs", {});
      var T = u(t);
      (l = ve(T, "linearGradient", { id: !0 })),
        u(l).forEach(i),
        (r = ve(T, "linearGradient", { id: !0 }));
      var k = u(r);
      (n = ve(k, "stop", { style: !0, offset: !0 })),
        u(n).forEach(i),
        (m = ve(k, "stop", { style: !0, offset: !0 })),
        u(m).forEach(i),
        k.forEach(i),
        (c = ve(T, "linearGradient", { id: !0 }));
      var G = u(c);
      (f = ve(G, "stop", { style: !0, offset: !0 })),
        u(f).forEach(i),
        (d = ve(G, "stop", { style: !0, offset: !0 })),
        u(d).forEach(i),
        G.forEach(i),
        (p = ve(T, "linearGradient", {
          id: !0,
          gradientUnits: !0,
          x1: !0,
          y1: !0,
          x2: !0,
          y2: !0,
          gradientTransform: !0,
          "xlink:href": !0,
        })),
        u(p).forEach(i),
        (v = ve(T, "linearGradient", {
          id: !0,
          gradientUnits: !0,
          x1: !0,
          y1: !0,
          x2: !0,
          y2: !0,
          gradientTransform: !0,
          "xlink:href": !0,
        })),
        u(v).forEach(i),
        T.forEach(i),
        (b = ve(w, "g", { transform: !0 }));
      var D = u(b);
      (E = ve(D, "path", { d: !0, style: !0, transform: !0 })),
        u(E).forEach(i),
        (x = ve(D, "path", { style: !0, transform: !0, d: !0 })),
        u(x).forEach(i),
        (g = ve(D, "circle", { style: !0, cx: !0, cy: !0, r: !0 })),
        u(g).forEach(i),
        D.forEach(i),
        w.forEach(i),
        this.h();
    },
    h() {
      o(l, "id", "gradient-2"),
        rt(n, "stop-color", "rgb(251, 176, 59)"),
        o(n, "offset", "0"),
        rt(m, "stop-color", "rgb(240, 90, 36)"),
        o(m, "offset", "1"),
        o(r, "id", "gradient-5"),
        rt(f, "stop-color", "rgb(95, 37, 131)"),
        o(f, "offset", "0"),
        rt(d, "stop-color", "rgb(237, 30, 121)"),
        o(d, "offset", "1"),
        o(c, "id", "gradient-6"),
        o(p, "id", "gradient-6-1"),
        o(p, "gradientUnits", "userSpaceOnUse"),
        o(p, "x1", "973.216"),
        o(p, "y1", "100.665"),
        o(p, "x2", "973.216"),
        o(p, "y2", "388.077"),
        o(
          p,
          "gradientTransform",
          "matrix(0.974127, -0.22842, 0.310454, 1.352474, -95.300314, 85.515158)"
        ),
        Va(p, "xlink:href", "#gradient-6"),
        o(v, "id", "gradient-5-0"),
        o(v, "gradientUnits", "userSpaceOnUse"),
        o(v, "x1", "188.919"),
        o(v, "y1", "1.638"),
        o(v, "x2", "188.919"),
        o(v, "y2", "361.638"),
        o(
          v,
          "gradientTransform",
          "matrix(-0.999999, 0.0016, -0.002016, -1.25907, 376.779907, 357.264557)"
        ),
        Va(v, "xlink:href", "#gradient-5"),
        o(
          E,
          "d",
          "M 188.919 181.638 m -180 0 a 180 180 0 1 0 360 0 a 180 180 0 1 0 -360 0 Z M 188.919 181.638 m -100 0 a 100 100 0 0 1 200 0 a 100 100 0 0 1 -200 0 Z"
        ),
        rt(E, "fill", "url(#gradient-5-0)"),
        o(
          E,
          "transform",
          "matrix(1, 0.000074, -0.000074, 1, 61.094498, 68.347626)"
        ),
        rt(x, "stroke-width", "0px"),
        rt(x, "paint-order", "stroke"),
        rt(x, "fill", "url(#gradient-6-1)"),
        o(
          x,
          "transform",
          "matrix(1.031731, 0.000001, 0, 1.020801, -634.597351, 0.544882)"
        ),
        o(
          x,
          "d",
          "M 958.327234958 100.664699414 A 175.433 175.433 0 0 1 958.327234958 388.077300586 L 913.296322517 323.766492741 A 96.924 96.924 0 0 0 913.296322517 164.975507259 Z"
        ),
        rt(g, "fill", "rgb(25, 25, 25)"),
        o(g, "cx", "250"),
        o(g, "cy", "250"),
        o(g, "r", "100"),
        o(b, "transform", "matrix(1, 0, 0, 1, -69.98674, -69.986298)"),
        o(e, "viewBox", "0 0 361 361"),
        o(e, "class", a[0]),
        o(e, "xmlns", "http://www.w3.org/2000/svg"),
        o(e, "xmlns:xlink", "http://www.w3.org/1999/xlink");
    },
    m(y, w) {
      K(y, e, w),
        s(e, t),
        s(t, l),
        s(t, r),
        s(r, n),
        s(r, m),
        s(t, c),
        s(c, f),
        s(c, d),
        s(t, p),
        s(t, v),
        s(e, b),
        s(b, E),
        s(b, x),
        s(b, g);
    },
    p(y, [w]) {
      w & 1 && o(e, "class", y[0]);
    },
    i: Ne,
    o: Ne,
    d(y) {
      y && i(e);
    },
  };
}
function ir(a, e, t) {
  let { className: l = "" } = e;
  return (
    (a.$$set = (r) => {
      "className" in r && t(0, (l = r.className));
    }),
    [l]
  );
}
class rs extends St {
  constructor(e) {
    super(), Ht(this, e, ir, or, Lt, { className: 0 });
  }
}
function ns(a, e, t) {
  const l = a.slice();
  return (l[16] = e[t][0]), (l[2] = e[t][1]), l;
}
function os(a, e, t) {
  const l = a.slice();
  return (
    (l[19] = e[t].fixture), (l[20] = e[t].homeTeam), (l[21] = e[t].awayTeam), l
  );
}
function is(a, e, t) {
  const l = a.slice();
  return (l[24] = e[t]), l;
}
function cs(a) {
  let e,
    t,
    l = a[24] + "",
    r;
  return {
    c() {
      (e = h("option")), (t = C("Gameweek ")), (r = C(l)), this.h();
    },
    l(n) {
      e = _(n, "OPTION", {});
      var m = u(e);
      (t = V(m, "Gameweek ")), (r = V(m, l)), m.forEach(i), this.h();
    },
    h() {
      (e.__value = a[24]), (e.value = e.__value);
    },
    m(n, m) {
      K(n, e, m), s(e, t), s(e, r);
    },
    p: Ne,
    d(n) {
      n && i(e);
    },
  };
}
function fs(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c,
    f,
    d,
    p,
    v,
    b,
    E,
    x,
    g,
    y,
    w,
    T,
    k = Ql(Number(a[19].kickOff)) + "",
    G,
    D,
    R,
    B,
    L,
    Y = (a[20] ? a[20].friendlyName : "") + "",
    ce,
    S,
    X,
    O,
    ne = (a[21] ? a[21].friendlyName : "") + "",
    q,
    te,
    j,
    le,
    M,
    H = (a[19].status === 0 ? "-" : a[19].homeGoals) + "",
    I,
    $,
    Q,
    _e = (a[19].status === 0 ? "-" : a[19].awayGoals) + "",
    ae,
    Ve,
    W;
  return (
    (m = new Ml({
      props: {
        primaryColour: a[20] ? a[20].primaryColourHex : "",
        secondaryColour: a[20] ? a[20].secondaryColourHex : "",
        thirdColour: a[20] ? a[20].thirdColourHex : "",
      },
    })),
    (x = new Ml({
      props: {
        primaryColour: a[21] ? a[21].primaryColourHex : "",
        secondaryColour: a[21] ? a[21].secondaryColourHex : "",
        thirdColour: a[21] ? a[21].thirdColourHex : "",
      },
    })),
    {
      c() {
        (e = h("div")),
          (t = h("div")),
          (l = h("div")),
          (r = h("div")),
          (n = h("a")),
          Le(m.$$.fragment),
          (f = P()),
          (d = h("span")),
          (p = C("v")),
          (v = P()),
          (b = h("div")),
          (E = h("a")),
          Le(x.$$.fragment),
          (y = P()),
          (w = h("div")),
          (T = h("span")),
          (G = C(k)),
          (D = P()),
          (R = h("div")),
          (B = h("div")),
          (L = h("a")),
          (ce = C(Y)),
          (X = P()),
          (O = h("a")),
          (q = C(ne)),
          (j = P()),
          (le = h("div")),
          (M = h("span")),
          (I = C(H)),
          ($ = P()),
          (Q = h("span")),
          (ae = C(_e)),
          this.h();
      },
      l(U) {
        e = _(U, "DIV", { class: !0 });
        var ee = u(e);
        t = _(ee, "DIV", { class: !0 });
        var Ie = u(t);
        l = _(Ie, "DIV", { class: !0 });
        var he = u(l);
        r = _(he, "DIV", { class: !0 });
        var Me = u(r);
        n = _(Me, "A", { href: !0 });
        var F = u(n);
        Ye(m.$$.fragment, F),
          F.forEach(i),
          Me.forEach(i),
          (f = N(he)),
          (d = _(he, "SPAN", { class: !0 }));
        var oe = u(d);
        (p = V(oe, "v")),
          oe.forEach(i),
          (v = N(he)),
          (b = _(he, "DIV", { class: !0 }));
        var Ce = u(b);
        E = _(Ce, "A", { href: !0 });
        var be = u(E);
        Ye(x.$$.fragment, be),
          be.forEach(i),
          Ce.forEach(i),
          he.forEach(i),
          (y = N(Ie)),
          (w = _(Ie, "DIV", { class: !0 }));
        var we = u(w);
        T = _(we, "SPAN", { class: !0 });
        var Ke = u(T);
        (G = V(Ke, k)),
          Ke.forEach(i),
          we.forEach(i),
          Ie.forEach(i),
          (D = N(ee)),
          (R = _(ee, "DIV", { class: !0 }));
        var Te = u(R);
        B = _(Te, "DIV", { class: !0 });
        var xe = u(B);
        L = _(xe, "A", { class: !0, href: !0 });
        var Re = u(L);
        (ce = V(Re, Y)),
          Re.forEach(i),
          (X = N(xe)),
          (O = _(xe, "A", { class: !0, href: !0 }));
        var $e = u(O);
        (q = V($e, ne)),
          $e.forEach(i),
          xe.forEach(i),
          (j = N(Te)),
          (le = _(Te, "DIV", { class: !0 }));
        var Oe = u(le);
        M = _(Oe, "SPAN", {});
        var We = u(M);
        (I = V(We, H)), We.forEach(i), ($ = N(Oe)), (Q = _(Oe, "SPAN", {}));
        var et = u(Q);
        (ae = V(et, _e)),
          et.forEach(i),
          Oe.forEach(i),
          Te.forEach(i),
          ee.forEach(i),
          this.h();
      },
      h() {
        o(n, "href", (c = `/club?id=${a[19].homeTeamId}`)),
          o(r, "class", "w-8 items-center justify-center"),
          o(d, "class", "font-bold text-lg"),
          o(E, "href", (g = `/club?id=${a[19].awayTeamId}`)),
          o(b, "class", "w-8 items-center justify-center"),
          o(l, "class", "flex w-1/2 space-x-4 justify-center"),
          o(T, "class", "text-sm ml-4 md:ml-0 text-left"),
          o(w, "class", "flex w-1/2 md:justify-center"),
          o(t, "class", "flex items-center w-1/2 ml-4"),
          o(L, "class", "my-1"),
          o(L, "href", (S = `/club?id=${a[19].homeTeamId}`)),
          o(O, "class", "my-1"),
          o(O, "href", (te = `/club?id=${a[19].awayTeamId}`)),
          o(
            B,
            "class",
            "flex flex-col min-w-[120px] md:min-w-[200px] text-xs 3xl:text-base"
          ),
          o(le, "class", "flex flex-col items-center text-xs"),
          o(R, "class", "flex items-center space-x-10 w-1/2 md:justify-center"),
          o(
            e,
            "class",
            (Ve = `flex items-center justify-between py-2 border-b border-gray-700  
              ${a[19].status === 0 ? "text-gray-400" : "text-white"}`)
          );
      },
      m(U, ee) {
        K(U, e, ee),
          s(e, t),
          s(t, l),
          s(l, r),
          s(r, n),
          Ue(m, n, null),
          s(l, f),
          s(l, d),
          s(d, p),
          s(l, v),
          s(l, b),
          s(b, E),
          Ue(x, E, null),
          s(t, y),
          s(t, w),
          s(w, T),
          s(T, G),
          s(e, D),
          s(e, R),
          s(R, B),
          s(B, L),
          s(L, ce),
          s(B, X),
          s(B, O),
          s(O, q),
          s(R, j),
          s(R, le),
          s(le, M),
          s(M, I),
          s(le, $),
          s(le, Q),
          s(Q, ae),
          (W = !0);
      },
      p(U, ee) {
        const Ie = {};
        ee & 2 && (Ie.primaryColour = U[20] ? U[20].primaryColourHex : ""),
          ee & 2 &&
            (Ie.secondaryColour = U[20] ? U[20].secondaryColourHex : ""),
          ee & 2 && (Ie.thirdColour = U[20] ? U[20].thirdColourHex : ""),
          m.$set(Ie),
          (!W || (ee & 2 && c !== (c = `/club?id=${U[19].homeTeamId}`))) &&
            o(n, "href", c);
        const he = {};
        ee & 2 && (he.primaryColour = U[21] ? U[21].primaryColourHex : ""),
          ee & 2 &&
            (he.secondaryColour = U[21] ? U[21].secondaryColourHex : ""),
          ee & 2 && (he.thirdColour = U[21] ? U[21].thirdColourHex : ""),
          x.$set(he),
          (!W || (ee & 2 && g !== (g = `/club?id=${U[19].awayTeamId}`))) &&
            o(E, "href", g),
          (!W || ee & 2) &&
            k !== (k = Ql(Number(U[19].kickOff)) + "") &&
            ye(G, k),
          (!W || ee & 2) &&
            Y !== (Y = (U[20] ? U[20].friendlyName : "") + "") &&
            ye(ce, Y),
          (!W || (ee & 2 && S !== (S = `/club?id=${U[19].homeTeamId}`))) &&
            o(L, "href", S),
          (!W || ee & 2) &&
            ne !== (ne = (U[21] ? U[21].friendlyName : "") + "") &&
            ye(q, ne),
          (!W || (ee & 2 && te !== (te = `/club?id=${U[19].awayTeamId}`))) &&
            o(O, "href", te),
          (!W || ee & 2) &&
            H !== (H = (U[19].status === 0 ? "-" : U[19].homeGoals) + "") &&
            ye(I, H),
          (!W || ee & 2) &&
            _e !== (_e = (U[19].status === 0 ? "-" : U[19].awayGoals) + "") &&
            ye(ae, _e),
          (!W ||
            (ee & 2 &&
              Ve !==
                (Ve = `flex items-center justify-between py-2 border-b border-gray-700  
              ${U[19].status === 0 ? "text-gray-400" : "text-white"}`))) &&
            o(e, "class", Ve);
      },
      i(U) {
        W || (re(m.$$.fragment, U), re(x.$$.fragment, U), (W = !0));
      },
      o(U) {
        de(m.$$.fragment, U), de(x.$$.fragment, U), (W = !1);
      },
      d(U) {
        U && i(e), je(m), je(x);
      },
    }
  );
}
function us(a) {
  let e,
    t,
    l,
    r = a[16] + "",
    n,
    m,
    c,
    f,
    d = a[2],
    p = [];
  for (let b = 0; b < d.length; b += 1) p[b] = fs(os(a, d, b));
  const v = (b) =>
    de(p[b], 1, 1, () => {
      p[b] = null;
    });
  return {
    c() {
      (e = h("div")), (t = h("div")), (l = h("h2")), (n = C(r)), (m = P());
      for (let b = 0; b < p.length; b += 1) p[b].c();
      (c = P()), this.h();
    },
    l(b) {
      e = _(b, "DIV", {});
      var E = u(e);
      t = _(E, "DIV", { class: !0 });
      var x = u(t);
      l = _(x, "H2", { class: !0 });
      var g = u(l);
      (n = V(g, r)), g.forEach(i), x.forEach(i), (m = N(E));
      for (let y = 0; y < p.length; y += 1) p[y].l(E);
      (c = N(E)), E.forEach(i), this.h();
    },
    h() {
      o(l, "class", "date-header ml-4 text-xs"),
        o(
          t,
          "class",
          "flex items-center justify-between border border-gray-700 py-2 bg-light-gray"
        );
    },
    m(b, E) {
      K(b, e, E), s(e, t), s(t, l), s(l, n), s(e, m);
      for (let x = 0; x < p.length; x += 1) p[x] && p[x].m(e, null);
      s(e, c), (f = !0);
    },
    p(b, E) {
      if (((!f || E & 2) && r !== (r = b[16] + "") && ye(n, r), E & 2)) {
        d = b[2];
        let x;
        for (x = 0; x < d.length; x += 1) {
          const g = os(b, d, x);
          p[x]
            ? (p[x].p(g, E), re(p[x], 1))
            : ((p[x] = fs(g)), p[x].c(), re(p[x], 1), p[x].m(e, c));
        }
        for (ot(), x = d.length; x < p.length; x += 1) v(x);
        it();
      }
    },
    i(b) {
      if (!f) {
        for (let E = 0; E < d.length; E += 1) re(p[E]);
        f = !0;
      }
    },
    o(b) {
      p = p.filter(Boolean);
      for (let E = 0; E < p.length; E += 1) de(p[E]);
      f = !1;
    },
    d(b) {
      b && i(e), Ct(p, b);
    },
  };
}
function cr(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c,
    f,
    d,
    p,
    v,
    b,
    E,
    x,
    g,
    y,
    w,
    T,
    k,
    G,
    D,
    R = a[3],
    B = [];
  for (let S = 0; S < R.length; S += 1) B[S] = cs(is(a, R, S));
  let L = Object.entries(a[1]),
    Y = [];
  for (let S = 0; S < L.length; S += 1) Y[S] = us(ns(a, L, S));
  const ce = (S) =>
    de(Y[S], 1, 1, () => {
      Y[S] = null;
    });
  return {
    c() {
      (e = h("div")),
        (t = h("div")),
        (l = h("div")),
        (r = h("h1")),
        (n = C("Fixtures")),
        (m = P()),
        (c = h("div")),
        (f = h("button")),
        (d = C("<")),
        (v = P()),
        (b = h("select"));
      for (let S = 0; S < B.length; S += 1) B[S].c();
      (E = P()), (x = h("button")), (g = C(">")), (w = P()), (T = h("div"));
      for (let S = 0; S < Y.length; S += 1) Y[S].c();
      this.h();
    },
    l(S) {
      e = _(S, "DIV", { class: !0 });
      var X = u(e);
      t = _(X, "DIV", { class: !0 });
      var O = u(t);
      l = _(O, "DIV", { class: !0 });
      var ne = u(l);
      r = _(ne, "H1", { class: !0 });
      var q = u(r);
      (n = V(q, "Fixtures")),
        q.forEach(i),
        ne.forEach(i),
        (m = N(O)),
        (c = _(O, "DIV", { class: !0 }));
      var te = u(c);
      f = _(te, "BUTTON", { class: !0 });
      var j = u(f);
      (d = V(j, "<")),
        j.forEach(i),
        (v = N(te)),
        (b = _(te, "SELECT", { class: !0 }));
      var le = u(b);
      for (let I = 0; I < B.length; I += 1) B[I].l(le);
      le.forEach(i), (E = N(te)), (x = _(te, "BUTTON", { class: !0 }));
      var M = u(x);
      (g = V(M, ">")),
        M.forEach(i),
        te.forEach(i),
        (w = N(O)),
        (T = _(O, "DIV", {}));
      var H = u(T);
      for (let I = 0; I < Y.length; I += 1) Y[I].l(H);
      H.forEach(i), O.forEach(i), X.forEach(i), this.h();
    },
    h() {
      o(r, "class", "mx-4 m-2 font-bold"),
        o(l, "class", "flex items-center justify-between py-2 bg-light-gray"),
        o(
          f,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
        ),
        (f.disabled = p = a[0] === 1),
        o(
          b,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        a[0] === void 0 && ul(() => a[8].call(b)),
        o(
          x,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (x.disabled = y = a[0] === 38),
        o(c, "class", "flex items-center space-x-2 m-3 mx-4"),
        o(t, "class", "container-fluid"),
        o(e, "class", "bg-panel rounded-md m-4 flex-1");
    },
    m(S, X) {
      K(S, e, X),
        s(e, t),
        s(t, l),
        s(l, r),
        s(r, n),
        s(t, m),
        s(t, c),
        s(c, f),
        s(f, d),
        s(c, v),
        s(c, b);
      for (let O = 0; O < B.length; O += 1) B[O] && B[O].m(b, null);
      It(b, a[0], !0), s(c, E), s(c, x), s(x, g), s(t, w), s(t, T);
      for (let O = 0; O < Y.length; O += 1) Y[O] && Y[O].m(T, null);
      (k = !0),
        G ||
          ((D = [
            Ee(f, "click", a[7]),
            Ee(b, "change", a[8]),
            Ee(x, "click", a[9]),
          ]),
          (G = !0));
    },
    p(S, [X]) {
      if (
        ((!k || (X & 9 && p !== (p = S[0] === 1))) && (f.disabled = p), X & 8)
      ) {
        R = S[3];
        let O;
        for (O = 0; O < R.length; O += 1) {
          const ne = is(S, R, O);
          B[O] ? B[O].p(ne, X) : ((B[O] = cs(ne)), B[O].c(), B[O].m(b, null));
        }
        for (; O < B.length; O += 1) B[O].d(1);
        B.length = R.length;
      }
      if (
        (X & 9 && It(b, S[0]),
        (!k || (X & 9 && y !== (y = S[0] === 38))) && (x.disabled = y),
        X & 2)
      ) {
        L = Object.entries(S[1]);
        let O;
        for (O = 0; O < L.length; O += 1) {
          const ne = ns(S, L, O);
          Y[O]
            ? (Y[O].p(ne, X), re(Y[O], 1))
            : ((Y[O] = us(ne)), Y[O].c(), re(Y[O], 1), Y[O].m(T, null));
        }
        for (ot(), O = L.length; O < Y.length; O += 1) ce(O);
        it();
      }
    },
    i(S) {
      if (!k) {
        for (let X = 0; X < L.length; X += 1) re(Y[X]);
        k = !0;
      }
    },
    o(S) {
      Y = Y.filter(Boolean);
      for (let X = 0; X < Y.length; X += 1) de(Y[X]);
      k = !1;
    },
    d(S) {
      S && i(e), Ct(B, S), Ct(Y, S), (G = !1), Zl(D);
    },
  };
}
function fr(a, e, t) {
  let l,
    r,
    n = [],
    m = [],
    c = [],
    f = 1,
    d = Array.from({ length: 38 }, (T, k) => k + 1),
    p,
    v,
    b;
  ta(async () => {
    await Tl.sync(),
      await ea.sync(),
      await $l.sync(),
      (p = Tl.subscribe((T) => {
        n = T;
      })),
      (v = ea.subscribe((T) => {
        t(2, (m = T)),
          t(
            5,
            (c = m.map((k) => ({
              fixture: k,
              homeTeam: x(k.homeTeamId),
              awayTeam: x(k.awayTeamId),
            })))
          );
      })),
      (b = $l.subscribe((T) => {}));
  }),
    la(() => {
      p?.(), v?.(), b?.();
    });
  const E = (T) => {
    t(0, (f = Math.max(1, Math.min(38, f + T))));
  };
  function x(T) {
    return n.find((k) => k.id === T);
  }
  const g = () => E(-1);
  function y() {
    (f = fl(this)), t(0, f), t(3, d);
  }
  const w = () => E(1);
  return (
    (a.$$.update = () => {
      a.$$.dirty & 33 &&
        t(6, (l = c.filter(({ fixture: T }) => T.gameweek === f))),
        a.$$.dirty & 64 &&
          t(
            1,
            (r = l.reduce((T, k) => {
              const G = new Date(Number(k.fixture.kickOff) / 1e6),
                R = new Intl.DateTimeFormat("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(G);
              return T[R] || (T[R] = []), T[R].push(k), T;
            }, {}))
          );
    }),
    [f, r, m, d, E, c, l, g, y, w]
  );
}
class ur extends St {
  constructor(e) {
    super(), Ht(this, e, fr, cr, Lt, {});
  }
}
function dr(a) {
  let e, t, l, r, n, m, c, f, d, p, v, b, E, x, g, y, w;
  return {
    c() {
      (e = pe("svg")),
        (t = pe("g")),
        (l = pe("path")),
        (r = pe("path")),
        (n = pe("path")),
        (m = pe("g")),
        (c = pe("path")),
        (f = pe("defs")),
        (d = pe("filter")),
        (p = pe("feFlood")),
        (v = pe("feColorMatrix")),
        (b = pe("feOffset")),
        (E = pe("feGaussianBlur")),
        (x = pe("feComposite")),
        (g = pe("feColorMatrix")),
        (y = pe("feBlend")),
        (w = pe("feBlend")),
        this.h();
    },
    l(T) {
      e = ve(T, "svg", { xmlns: !0, class: !0, fill: !0, viewBox: !0 });
      var k = u(e);
      t = ve(k, "g", { filter: !0 });
      var G = u(t);
      (l = ve(G, "path", { d: !0, fill: !0 })),
        u(l).forEach(i),
        (r = ve(G, "path", { d: !0, fill: !0 })),
        u(r).forEach(i),
        (n = ve(G, "path", { d: !0, fill: !0 })),
        u(n).forEach(i),
        G.forEach(i),
        (m = ve(k, "g", { transform: !0 }));
      var D = u(m);
      (c = ve(D, "path", { d: !0, fill: !0 })),
        u(c).forEach(i),
        D.forEach(i),
        (f = ve(k, "defs", {}));
      var R = u(f);
      d = ve(R, "filter", {
        id: !0,
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        filterUnits: !0,
      });
      var B = u(d);
      (p = ve(B, "feFlood", { "flood-opacity": !0, result: !0 })),
        u(p).forEach(i),
        (v = ve(B, "feColorMatrix", {
          in: !0,
          type: !0,
          values: !0,
          result: !0,
        })),
        u(v).forEach(i),
        (b = ve(B, "feOffset", { dy: !0 })),
        u(b).forEach(i),
        (E = ve(B, "feGaussianBlur", { stdDeviation: !0 })),
        u(E).forEach(i),
        (x = ve(B, "feComposite", { in2: !0, operator: !0 })),
        u(x).forEach(i),
        (g = ve(B, "feColorMatrix", { type: !0, values: !0 })),
        u(g).forEach(i),
        (y = ve(B, "feBlend", { mode: !0, in2: !0, result: !0 })),
        u(y).forEach(i),
        (w = ve(B, "feBlend", { mode: !0, in: !0, in2: !0, result: !0 })),
        u(w).forEach(i),
        B.forEach(i),
        R.forEach(i),
        k.forEach(i),
        this.h();
    },
    h() {
      o(
        l,
        "d",
        "M65.9308 38.3253L63.5966 33.0215L63.642 33.2129C63.5966 34.2107 63.5603 35.2633 63.533 36.366C63.4831 38.3299 63.4604 40.4442 63.4604 42.6587C63.4604 54.9386 64.1597 70.308 64.8727 79.9999H21.1266C21.835 70.2989 22.5389 54.9159 22.5389 42.6313C22.5389 40.4214 22.5162 38.3162 22.4663 36.3569C22.439 35.2542 22.4027 34.2062 22.3573 33.2129L22.3982 33.0215L20.0685 38.3253L9.30566 33.3131L20.5453 10.6213L20.5862 10.5438L20.6271 10.4573C20.6271 10.4573 31.6578 6.72087 32.0166 6.3609C32.0983 6.27889 32.2346 6.09662 32.3935 5.86424C34.2554 8.43871 36.6668 10.6122 39.4688 12.2252C40.2726 12.69 41.1037 13.1046 41.971 13.4737C42.3026 13.615 42.6432 13.7517 42.9883 13.8747V13.8838C42.9883 13.8838 42.9928 13.8838 42.9974 13.8793C43.0019 13.8838 43.0065 13.8838 43.011 13.8838V13.8747C43.3516 13.7517 43.6922 13.615 44.0237 13.4737C44.8865 13.1092 45.7267 12.69 46.5305 12.2252C49.3324 10.6122 51.7439 8.43871 53.6058 5.85968C53.7647 6.09662 53.901 6.27889 53.9827 6.3609C54.3415 6.72087 65.3722 10.4573 65.3722 10.4573L65.4131 10.5438L65.454 10.6213L76.6891 33.3131L65.9308 38.3253Z"
      ),
        o(l, "fill", a[1]),
        o(
          r,
          "d",
          "M51.2756 3.04364C51.1348 3.26691 50.985 3.48563 50.8351 3.69979C49.0504 6.26059 46.7298 8.43864 44.0232 10.0881C43.6917 10.2932 43.3556 10.4845 43.0105 10.6714C43.0105 10.6714 43.0059 10.6759 43.0014 10.6759C42.9969 10.6759 42.9923 10.6714 42.9878 10.6714C42.6426 10.4845 42.302 10.2886 41.9705 10.0836C39.2685 8.43864 36.9479 6.26059 35.1632 3.69979C35.0133 3.48563 34.8634 3.26691 34.7227 3.04364H51.2756Z"
        ),
        o(r, "fill", a[2]),
        o(
          n,
          "d",
          "M68.5512 8.58005L68.265 8.00136C68.265 8.00136 68.2514 7.99681 68.2287 7.98769C67.5294 7.75075 57.3478 4.29686 55.1726 3.35365C54.9546 3.25796 54.8138 3.18505 54.7775 3.1486C54.7502 3.12126 54.7184 3.08936 54.6866 3.0438C54.2416 2.49701 53.1699 0.715384 52.8429 0.164037C52.7793 0.0592356 52.743 0 52.743 0H33.2564C33.2564 0 33.22 0.0592356 33.1565 0.164037C32.8295 0.715384 31.7578 2.49701 31.3173 3.0438C31.2809 3.08936 31.2491 3.12126 31.2219 3.1486C31.1856 3.18505 31.0448 3.25796 30.8223 3.35365C28.6424 4.29686 18.4654 7.75075 17.7706 7.98769C17.7479 7.99681 17.7343 8.00136 17.7343 8.00136L17.4482 8.5846L4.33301 35.0629L18.5835 41.7019L20.0685 38.3254L9.3057 33.3132L20.5454 10.6214L20.5862 10.5439L20.6271 10.4574C20.6271 10.4574 31.6578 6.72096 32.0166 6.36099C32.0984 6.27897 32.2346 6.09671 32.3935 5.86432C34.2555 8.43879 36.6669 10.6123 39.4688 12.2253C40.2726 12.6901 41.1037 13.1047 41.9711 13.4738C42.3026 13.6151 42.6432 13.7518 42.9883 13.8748C42.9883 13.8748 42.9914 13.8763 42.9974 13.8794C42.9974 13.8794 43.0065 13.8794 43.011 13.8748C43.3516 13.7518 43.6922 13.6151 44.0237 13.4738C44.8866 13.1093 45.7267 12.6901 46.5305 12.2253C49.3325 10.6123 51.7439 8.43879 53.6058 5.85977C53.7648 6.09671 53.901 6.27897 53.9827 6.36099C54.3415 6.72096 65.3723 10.4574 65.3723 10.4574L65.4131 10.5439L65.454 10.6214L76.6891 33.3132L65.9308 38.3254L67.4158 41.7019L81.6663 35.0629L68.5512 8.58005ZM50.8356 3.69995C49.0509 6.26075 46.7303 8.43879 44.0237 10.0883C43.6922 10.2933 43.3562 10.4847 43.011 10.6715V10.6806H43.0019C42.9974 10.6806 42.9929 10.6806 42.9883 10.6806V10.6715C42.6432 10.4847 42.3026 10.2888 41.9711 10.0837C39.269 8.43879 36.9484 6.26075 35.1637 3.69995C35.0138 3.48579 34.864 3.26707 34.7232 3.0438H51.2761C51.1354 3.26707 50.9855 3.48579 50.8356 3.69995Z"
        ),
        o(n, "fill", a[3]),
        o(t, "filter", "url(#filter0_d_354_581)"),
        o(
          c,
          "d",
          "M16 6.66667H9.33333V0H6.66667V6.66667H0V9.33333H6.66667V16H9.33333V9.33333H16V6.66667Z"
        ),
        o(c, "fill", "#FFFFF"),
        o(m, "transform", "translate(36 30)"),
        o(p, "flood-opacity", "0"),
        o(p, "result", "BackgroundImageFix"),
        o(v, "in", "SourceAlpha"),
        o(v, "type", "matrix"),
        o(v, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"),
        o(v, "result", "hardAlpha"),
        o(b, "dy", "4"),
        o(E, "stdDeviation", "2"),
        o(x, "in2", "hardAlpha"),
        o(x, "operator", "out"),
        o(g, "type", "matrix"),
        o(g, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"),
        o(y, "mode", "normal"),
        o(y, "in2", "BackgroundImageFix"),
        o(y, "result", "effect1_dropShadow_354_581"),
        o(w, "mode", "normal"),
        o(w, "in", "SourceGraphic"),
        o(w, "in2", "effect1_dropShadow_354_581"),
        o(w, "result", "shape"),
        o(d, "id", "filter0_d_354_581"),
        o(d, "x", "0.333008"),
        o(d, "y", "0"),
        o(d, "width", "85.333"),
        o(d, "height", "87.9999"),
        o(d, "filterUnits", "userSpaceOnUse"),
        o(e, "xmlns", "http://www.w3.org/2000/svg"),
        o(e, "class", a[0]),
        o(e, "fill", "currentColor"),
        o(e, "viewBox", "0 0 86 88");
    },
    m(T, k) {
      K(T, e, k),
        s(e, t),
        s(t, l),
        s(t, r),
        s(t, n),
        s(e, m),
        s(m, c),
        s(e, f),
        s(f, d),
        s(d, p),
        s(d, v),
        s(d, b),
        s(d, E),
        s(d, x),
        s(d, g),
        s(d, y),
        s(d, w);
    },
    p(T, [k]) {
      k & 2 && o(l, "fill", T[1]),
        k & 4 && o(r, "fill", T[2]),
        k & 8 && o(n, "fill", T[3]),
        k & 1 && o(e, "class", T[0]);
    },
    i: Ne,
    o: Ne,
    d(T) {
      T && i(e);
    },
  };
}
function mr(a, e, t) {
  let { className: l = "" } = e,
    { primaryColour: r = "#2CE3A6" } = e,
    { secondaryColour: n = "#777777" } = e,
    { thirdColour: m = "#FFFFFF" } = e;
  return (
    (a.$$set = (c) => {
      "className" in c && t(0, (l = c.className)),
        "primaryColour" in c && t(1, (r = c.primaryColour)),
        "secondaryColour" in c && t(2, (n = c.secondaryColour)),
        "thirdColour" in c && t(3, (m = c.thirdColour));
    }),
    [l, r, n, m]
  );
}
class hr extends St {
  constructor(e) {
    super(),
      Ht(this, e, mr, dr, Lt, {
        className: 0,
        primaryColour: 1,
        secondaryColour: 2,
        thirdColour: 3,
      });
  }
}
function _r(a) {
  let e, t;
  return {
    c() {
      (e = pe("svg")), (t = pe("path")), this.h();
    },
    l(l) {
      e = ve(l, "svg", { xmlns: !0, class: !0, fill: !0, viewBox: !0 });
      var r = u(e);
      (t = ve(r, "path", { d: !0, fill: !0 })),
        u(t).forEach(i),
        r.forEach(i),
        this.h();
    },
    h() {
      o(
        t,
        "d",
        "M14.5979 8.93594L14.6033 8.89794V8.89927C14.6193 8.7806 14.6326 8.66127 14.6419 8.54127C14.6579 8.33994 14.5159 8.0006 14.1426 8.0006C13.8819 8.0006 13.6659 8.2006 13.6446 8.4606C13.6326 8.60794 13.6153 8.75394 13.5926 8.89794C13.1626 11.5986 10.8206 13.6666 7.99859 13.6666C5.97392 13.6666 4.19592 12.6019 3.19459 11.0033L4.52192 10.9999C4.79792 10.9999 5.02192 10.7759 5.02192 10.4999C5.02192 10.2239 4.79792 9.99994 4.52192 9.99994H1.83325C1.55725 9.99994 1.33325 10.2239 1.33325 10.4999V13.1993C1.33325 13.4753 1.55725 13.6993 1.83325 13.6993C2.10925 13.6993 2.33325 13.4759 2.33325 13.1993L2.33525 11.5159C3.51192 13.4066 5.60925 14.6666 7.99859 14.6666C11.3599 14.6666 14.1433 12.1726 14.5979 8.93594ZM1.41525 6.95327L1.40925 6.9906V6.98927C1.38592 7.1446 1.36725 7.30194 1.35459 7.46127C1.33859 7.6626 1.48059 8.00194 1.85392 8.00194C2.11459 8.00194 2.33059 7.80194 2.35192 7.54194C2.36659 7.35527 2.39059 7.17127 2.42325 6.9906C2.90059 4.34527 5.21592 2.33594 7.99792 2.33594C10.0226 2.33594 11.8006 3.4006 12.8019 4.99927L11.4746 5.0026C11.1986 5.0026 10.9746 5.2266 10.9746 5.5026C10.9746 5.7786 11.1986 6.0026 11.4746 6.0026H14.1633C14.4393 6.0026 14.6633 5.7786 14.6633 5.5026V2.80327C14.6633 2.52727 14.4393 2.30327 14.1633 2.30327C13.8873 2.30327 13.6633 2.5266 13.6633 2.80327L13.6613 4.4866C12.4846 2.59594 10.3873 1.33594 7.99792 1.33594C4.67525 1.33594 1.91792 3.77194 1.41525 6.95327Z"
      ),
        o(t, "fill", "white"),
        o(e, "xmlns", "http://www.w3.org/2000/svg"),
        o(e, "class", a[0]),
        o(e, "fill", "currentColor"),
        o(e, "viewBox", "0 0 16 16");
    },
    m(l, r) {
      K(l, e, r), s(e, t);
    },
    p(l, [r]) {
      r & 1 && o(e, "class", l[0]);
    },
    i: Ne,
    o: Ne,
    d(l) {
      l && i(e);
    },
  };
}
function pr(a, e, t) {
  let { className: l = "" } = e;
  return (
    (a.$$set = (r) => {
      "className" in r && t(0, (l = r.className));
    }),
    [l]
  );
}
class Ds extends St {
  constructor(e) {
    super(), Ht(this, e, pr, _r, Lt, { className: 0 });
  }
}
function vr(a) {
  let e, t, l;
  return {
    c() {
      (e = pe("svg")), (t = pe("circle")), (l = pe("path")), this.h();
    },
    l(r) {
      e = ve(r, "svg", { xmlns: !0, class: !0, fill: !0, viewBox: !0 });
      var n = u(e);
      (t = ve(n, "circle", {
        cx: !0,
        cy: !0,
        r: !0,
        fill: !0,
        "fill-opacity": !0,
      })),
        u(t).forEach(i),
        (l = ve(n, "path", { transform: !0, d: !0, fill: !0 })),
        u(l).forEach(i),
        n.forEach(i),
        this.h();
    },
    h() {
      o(t, "cx", "11.5"),
        o(t, "cy", "11"),
        o(t, "r", "11"),
        o(t, "fill", "#242529"),
        o(t, "fill-opacity", "0.9"),
        o(l, "transform", "translate(4.7,4) scale(0.8,0.8)"),
        o(
          l,
          "d",
          "M8.39289 1.61501C8.47689 1.44234 8.65289 1.33301 8.84489 1.33301C9.03756 1.33301 9.21289 1.44234 9.29689 1.61501C9.94622 2.94701 11.0636 5.24167 11.0636 5.24167C11.0636 5.24167 13.6042 5.59101 15.0782 5.79434C15.3469 5.83101 15.5116 6.05834 15.5116 6.29234C15.5116 6.41901 15.4636 6.54767 15.3576 6.64967C14.2842 7.67501 12.4362 9.44368 12.4362 9.44368C12.4362 9.44368 12.8876 11.955 13.1489 13.4117C13.2042 13.7197 12.9656 13.9997 12.6542 13.9997C12.5729 13.9997 12.4916 13.9803 12.4176 13.9403C11.1056 13.2417 8.84489 12.0397 8.84489 12.0397C8.84489 12.0397 6.58422 13.2417 5.27222 13.9403C5.19822 13.9803 5.11622 13.9997 5.03489 13.9997C4.72489 13.9997 4.48489 13.719 4.54089 13.4117C4.80289 11.955 5.25422 9.44368 5.25422 9.44368C5.25422 9.44368 3.40556 7.67501 2.33289 6.64967C2.22622 6.54767 2.17822 6.41901 2.17822 6.29301C2.17822 6.05834 2.34422 5.83034 2.61222 5.79434C4.08622 5.59101 6.62622 5.24167 6.62622 5.24167C6.62622 5.24167 7.74422 2.94701 8.39289 1.61501ZM8.84489 2.97034L7.27089 6.16501L3.77356 6.64434L6.33889 9.07301L5.70689 12.5763L8.84489 10.9063L11.9829 12.5763L11.3489 9.08567L13.9162 6.64434L10.3736 6.14034L8.84489 2.97034Z"
        ),
        o(l, "fill", "#2CE3A6"),
        o(e, "xmlns", "http://www.w3.org/2000/svg"),
        o(e, "class", a[0]),
        o(e, "fill", "currentColor"),
        o(e, "viewBox", "0 0 23 22");
    },
    m(r, n) {
      K(r, e, n), s(e, t), s(e, l);
    },
    p(r, [n]) {
      n & 1 && o(e, "class", r[0]);
    },
    i: Ne,
    o: Ne,
    d(r) {
      r && i(e);
    },
  };
}
function br(a, e, t) {
  let { className: l = "" } = e;
  return (
    (a.$$set = (r) => {
      "className" in r && t(0, (l = r.className));
    }),
    [l]
  );
}
class Gs extends St {
  constructor(e) {
    super(), Ht(this, e, br, vr, Lt, { className: 0 });
  }
}
function gr(a) {
  let e, t, l;
  return {
    c() {
      (e = pe("svg")), (t = pe("circle")), (l = pe("path")), this.h();
    },
    l(r) {
      e = ve(r, "svg", { xmlns: !0, class: !0, fill: !0, viewBox: !0 });
      var n = u(e);
      (t = ve(n, "circle", {
        cx: !0,
        cy: !0,
        r: !0,
        fill: !0,
        fillopacity: !0,
      })),
        u(t).forEach(i),
        (l = ve(n, "path", { transform: !0, d: !0, fill: !0 })),
        u(l).forEach(i),
        n.forEach(i),
        this.h();
    },
    h() {
      o(t, "cx", "11.5"),
        o(t, "cy", "11"),
        o(t, "r", "11"),
        o(t, "fill", "#242529"),
        o(t, "fillopacity", "0.9"),
        o(l, "transform", "translate(4.7,4) scale(0.8,0.8)"),
        o(
          l,
          "d",
          "M8.39289 1.61501C8.47689 1.44234 8.65289 1.33301 8.84489 1.33301C9.03756 1.33301 9.21289 1.44234 9.29689 1.61501C9.94622 2.94701 11.0636 5.24167 11.0636 5.24167C11.0636 5.24167 13.6042 5.59101 15.0782 5.79434C15.3469 5.83101 15.5116 6.05834 15.5116 6.29234C15.5116 6.41901 15.4636 6.54767 15.3576 6.64967C14.2842 7.67501 12.4362 9.44368 12.4362 9.44368C12.4362 9.44368 12.8876 11.955 13.1489 13.4117C13.2042 13.7197 12.9656 13.9997 12.6542 13.9997C12.5729 13.9997 12.4916 13.9803 12.4176 13.9403C11.1056 13.2417 8.84489 12.0397 8.84489 12.0397C8.84489 12.0397 6.58422 13.2417 5.27222 13.9403C5.19822 13.9803 5.11622 13.9997 5.03489 13.9997C4.72489 13.9997 4.48489 13.719 4.54089 13.4117C4.80289 11.955 5.25422 9.44368 5.25422 9.44368C5.25422 9.44368 3.40556 7.67501 2.33289 6.64967C2.22622 6.54767 2.17822 6.41901 2.17822 6.29301C2.17822 6.05834 2.34422 5.83034 2.61222 5.79434C4.08622 5.59101 6.62622 5.24167 6.62622 5.24167C6.62622 5.24167 7.74422 2.94701 8.39289 1.61501Z"
        ),
        o(l, "fill", "#2CE3A6"),
        o(e, "xmlns", "http://www.w3.org/2000/svg"),
        o(e, "class", a[0]),
        o(e, "fill", "currentColor"),
        o(e, "viewBox", "0 0 23 22");
    },
    m(r, n) {
      K(r, e, n), s(e, t), s(e, l);
    },
    p(r, [n]) {
      n & 1 && o(e, "class", r[0]);
    },
    i: Ne,
    o: Ne,
    d(r) {
      r && i(e);
    },
  };
}
function yr(a, e, t) {
  let { className: l = "" } = e;
  return (
    (a.$$set = (r) => {
      "className" in r && t(0, (l = r.className));
    }),
    [l]
  );
}
class As extends St {
  constructor(e) {
    super(), Ht(this, e, yr, gr, Lt, { className: 0 });
  }
}
const { Map: Ms } = Bs;
function ds(a, e, t) {
  const l = a.slice();
  return (l[69] = e[t]), (l[71] = t), l;
}
function ms(a, e, t) {
  const l = a.slice();
  (l[72] = e[t]), (l[78] = t);
  const r = l[34](l[71], l[78]);
  l[73] = r;
  const n = l[3]?.playerIds ?? [];
  l[74] = n;
  const m = l[74][l[73]];
  l[75] = m;
  const c = l[4].find(function (...p) {
    return a[49](l[75], ...p);
  });
  l[76] = c;
  const f = l[5].find(function (...p) {
    return a[50](l[76], ...p);
  });
  return (l[79] = f), l;
}
function hs(a, e, t) {
  const l = a.slice();
  return (l[69] = e[t]), (l[71] = t), l;
}
function _s(a, e, t) {
  const l = a.slice();
  (l[72] = e[t]), (l[78] = t);
  const r = l[34](l[71], l[78]);
  l[73] = r;
  const n = l[3]?.playerIds ?? [];
  l[74] = n;
  const m = l[74][l[73]];
  l[75] = m;
  const c = l[4].find(function (...d) {
    return a[45](l[75], ...d);
  });
  return (l[76] = c), l;
}
function wr(a) {
  const e = a.slice(),
    t = e[5].find(function (...r) {
      return a[41](e[76], ...r);
    });
  return (e[79] = t), e;
}
function ps(a, e, t) {
  const l = a.slice();
  return (l[82] = e[t]), l;
}
function vs(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c,
    f,
    d,
    p,
    v,
    b,
    E,
    x,
    g,
    y,
    w,
    T,
    k,
    G,
    D,
    R,
    B,
    L,
    Y,
    ce,
    S,
    X,
    O,
    ne,
    q,
    te,
    j,
    le,
    M,
    H,
    I,
    $,
    Q,
    _e,
    ae,
    Ve,
    W,
    U,
    ee,
    Ie,
    he,
    Me = a[3]?.playerIds.filter(Es).length + "",
    F,
    oe,
    Ce,
    be,
    we,
    Ke,
    Te,
    xe,
    Re,
    $e,
    Oe,
    We,
    et,
    tt = a[15].toFixed(2) + "",
    Fe,
    bt,
    Ut,
    gt,
    yt,
    $t,
    Vt,
    Nt,
    ct,
    A,
    Z,
    ie,
    se,
    fe,
    ue = (a[19] / 4).toFixed(2) + "",
    ke,
    De,
    at,
    qe,
    lt,
    Be,
    Ze,
    ft,
    Se,
    ut,
    sl,
    Yt,
    jt,
    Qt = (a[20] === 1 / 0 ? "Unlimited" : a[20]) + "",
    Gt,
    Xe,
    wt,
    Ge,
    Pl,
    Tt,
    Ae,
    me,
    Pe,
    J,
    st,
    dl,
    At,
    Dt,
    Wt,
    el,
    Zt,
    Mt,
    ml,
    dt,
    hl,
    mt,
    Pt,
    _l,
    rl,
    nl,
    pl,
    ht,
    tl,
    ol,
    qt,
    vl,
    xt,
    _t,
    pt,
    Xt,
    Bt,
    ze,
    bl,
    Ft,
    He,
    gl,
    Nl;
  e = new nr({
    props: {
      handlePlayerSelection: a[33],
      filterPosition: a[11],
      filterColumn: a[12],
      showAddPlayer: a[14],
      closeAddPlayerModal: a[32],
      fantasyTeam: a[26],
      bankBalance: a[28],
      players: a[24],
      teams: a[23],
    },
  });
  let Kt = a[21],
    Je = [];
  for (let z = 0; z < Kt.length; z += 1) Je[z] = bs(ps(a, Kt, z));
  const Dl = [kr, xr],
    Ot = [];
  function Gl(z, ge) {
    return z[13] ? 0 : 1;
  }
  return (
    (_t = Gl(a)),
    (pt = Ot[_t] = Dl[_t](a)),
    (ze = new ur({})),
    (Ft = new Qs({
      props: {
        fantasyTeam: a[26],
        teams: a[23],
        players: a[24],
        activeGameweek: a[1],
      },
    })),
    {
      c() {
        Le(e.$$.fragment),
          (t = P()),
          (l = h("div")),
          (r = h("div")),
          (n = h("div")),
          (m = h("div")),
          (c = h("p")),
          (f = C("Gameweek")),
          (d = P()),
          (p = h("p")),
          (v = C(a[1])),
          (b = P()),
          (E = h("p")),
          (x = C(a[0])),
          (g = P()),
          (y = h("div")),
          (w = P()),
          (T = h("div")),
          (k = h("p")),
          (G = C("Kick Off:")),
          (D = P()),
          (R = h("div")),
          (B = h("p")),
          (L = C(a[8])),
          (Y = h("span")),
          (ce = C("d")),
          (S = C(`
                : `)),
          (X = C(a[9])),
          (O = h("span")),
          (ne = C("h")),
          (q = C(`
                : `)),
          (te = C(a[10])),
          (j = h("span")),
          (le = C("m")),
          (M = P()),
          (H = h("p")),
          (I = C(a[6])),
          ($ = C(" | ")),
          (Q = C(a[7])),
          (_e = P()),
          (ae = h("div")),
          (Ve = P()),
          (W = h("div")),
          (U = h("p")),
          (ee = C("Players")),
          (Ie = P()),
          (he = h("p")),
          (F = C(Me)),
          (oe = C("/11")),
          (Ce = P()),
          (be = h("p")),
          (we = C("Selected")),
          (Ke = P()),
          (Te = h("div")),
          (xe = h("div")),
          (Re = h("p")),
          ($e = C("Team Value")),
          (Oe = P()),
          (We = h("p")),
          (et = C("£")),
          (Fe = C(tt)),
          (bt = C("m")),
          (Ut = P()),
          (gt = h("p")),
          (yt = C("GBP")),
          ($t = P()),
          (Vt = h("div")),
          (Nt = P()),
          (ct = h("div")),
          (A = h("p")),
          (Z = C("Bank Balance")),
          (ie = P()),
          (se = h("p")),
          (fe = C("£")),
          (ke = C(ue)),
          (De = C("m")),
          (at = P()),
          (qe = h("p")),
          (lt = C("GBP")),
          (Be = P()),
          (Ze = h("div")),
          (ft = P()),
          (Se = h("div")),
          (ut = h("p")),
          (sl = C("Transfers")),
          (Yt = P()),
          (jt = h("p")),
          (Gt = C(Qt)),
          (Xe = P()),
          (wt = h("p")),
          (Ge = C("Available")),
          (Pl = P()),
          (Tt = h("div")),
          (Ae = h("div")),
          (me = h("div")),
          (Pe = h("button")),
          (J = C("Pitch View")),
          (dl = P()),
          (At = h("button")),
          (Dt = C("List View")),
          (el = P()),
          (Zt = h("div")),
          (Mt = h("span")),
          (ml = C(`Formation:
              `)),
          (dt = h("select"));
        for (let z = 0; z < Je.length; z += 1) Je[z].c();
        (hl = P()),
          (mt = h("div")),
          (Pt = h("button")),
          (_l = C("Auto Fill")),
          (pl = P()),
          (ht = h("button")),
          (tl = C("Save Team")),
          (vl = P()),
          (xt = h("div")),
          pt.c(),
          (Xt = P()),
          (Bt = h("div")),
          Le(ze.$$.fragment),
          (bl = P()),
          Le(Ft.$$.fragment),
          this.h();
      },
      l(z) {
        Ye(e.$$.fragment, z), (t = N(z)), (l = _(z, "DIV", { class: !0 }));
        var ge = u(l);
        r = _(ge, "DIV", { class: !0 });
        var kt = u(r);
        n = _(kt, "DIV", { class: !0 });
        var Et = u(n);
        m = _(Et, "DIV", { class: !0 });
        var zt = u(m);
        c = _(zt, "P", { class: !0 });
        var vt = u(c);
        (f = V(vt, "Gameweek")),
          vt.forEach(i),
          (d = N(zt)),
          (p = _(zt, "P", { class: !0 }));
        var Al = u(p);
        (v = V(Al, a[1])),
          Al.forEach(i),
          (b = N(zt)),
          (E = _(zt, "P", { class: !0 }));
        var aa = u(E);
        (x = V(aa, a[0])),
          aa.forEach(i),
          zt.forEach(i),
          (g = N(Et)),
          (y = _(Et, "DIV", { class: !0, style: !0 })),
          u(y).forEach(i),
          (w = N(Et)),
          (T = _(Et, "DIV", { class: !0 }));
        var yl = u(T);
        k = _(yl, "P", { class: !0 });
        var sa = u(k);
        (G = V(sa, "Kick Off:")),
          sa.forEach(i),
          (D = N(yl)),
          (R = _(yl, "DIV", { class: !0 }));
        var ra = u(R);
        B = _(ra, "P", { class: !0 });
        var Jt = u(B);
        (L = V(Jt, a[8])), (Y = _(Jt, "SPAN", { class: !0 }));
        var na = u(Y);
        (ce = V(na, "d")),
          na.forEach(i),
          (S = V(
            Jt,
            `
                : `
          )),
          (X = V(Jt, a[9])),
          (O = _(Jt, "SPAN", { class: !0 }));
        var oa = u(O);
        (ne = V(oa, "h")),
          oa.forEach(i),
          (q = V(
            Jt,
            `
                : `
          )),
          (te = V(Jt, a[10])),
          (j = _(Jt, "SPAN", { class: !0 }));
        var ia = u(j);
        (le = V(ia, "m")),
          ia.forEach(i),
          Jt.forEach(i),
          ra.forEach(i),
          (M = N(yl)),
          (H = _(yl, "P", { class: !0 }));
        var Bl = u(H);
        (I = V(Bl, a[6])),
          ($ = V(Bl, " | ")),
          (Q = V(Bl, a[7])),
          Bl.forEach(i),
          yl.forEach(i),
          (_e = N(Et)),
          (ae = _(Et, "DIV", { class: !0, style: !0 })),
          u(ae).forEach(i),
          (Ve = N(Et)),
          (W = _(Et, "DIV", { class: !0 }));
        var wl = u(W);
        U = _(wl, "P", { class: !0 });
        var ca = u(U);
        (ee = V(ca, "Players")),
          ca.forEach(i),
          (Ie = N(wl)),
          (he = _(wl, "P", { class: !0 }));
        var ql = u(he);
        (F = V(ql, Me)),
          (oe = V(ql, "/11")),
          ql.forEach(i),
          (Ce = N(wl)),
          (be = _(wl, "P", { class: !0 }));
        var fa = u(be);
        (we = V(fa, "Selected")),
          fa.forEach(i),
          wl.forEach(i),
          Et.forEach(i),
          (Ke = N(kt)),
          (Te = _(kt, "DIV", { class: !0 }));
        var Rt = u(Te);
        xe = _(Rt, "DIV", { class: !0 });
        var xl = u(xe);
        Re = _(xl, "P", { class: !0 });
        var ua = u(Re);
        ($e = V(ua, "Team Value")),
          ua.forEach(i),
          (Oe = N(xl)),
          (We = _(xl, "P", { class: !0 }));
        var Fl = u(We);
        (et = V(Fl, "£")),
          (Fe = V(Fl, tt)),
          (bt = V(Fl, "m")),
          Fl.forEach(i),
          (Ut = N(xl)),
          (gt = _(xl, "P", { class: !0 }));
        var da = u(gt);
        (yt = V(da, "GBP")),
          da.forEach(i),
          xl.forEach(i),
          ($t = N(Rt)),
          (Vt = _(Rt, "DIV", { class: !0, style: !0 })),
          u(Vt).forEach(i),
          (Nt = N(Rt)),
          (ct = _(Rt, "DIV", { class: !0 }));
        var kl = u(ct);
        A = _(kl, "P", { class: !0 });
        var ma = u(A);
        (Z = V(ma, "Bank Balance")),
          ma.forEach(i),
          (ie = N(kl)),
          (se = _(kl, "P", { class: !0 }));
        var Ol = u(se);
        (fe = V(Ol, "£")),
          (ke = V(Ol, ue)),
          (De = V(Ol, "m")),
          Ol.forEach(i),
          (at = N(kl)),
          (qe = _(kl, "P", { class: !0 }));
        var ha = u(qe);
        (lt = V(ha, "GBP")),
          ha.forEach(i),
          kl.forEach(i),
          (Be = N(Rt)),
          (Ze = _(Rt, "DIV", { class: !0, style: !0 })),
          u(Ze).forEach(i),
          (ft = N(Rt)),
          (Se = _(Rt, "DIV", { class: !0 }));
        var El = u(Se);
        ut = _(El, "P", { class: !0 });
        var _a = u(ut);
        (sl = V(_a, "Transfers")),
          _a.forEach(i),
          (Yt = N(El)),
          (jt = _(El, "P", { class: !0 }));
        var pa = u(jt);
        (Gt = V(pa, Qt)),
          pa.forEach(i),
          (Xe = N(El)),
          (wt = _(El, "P", { class: !0 }));
        var va = u(wt);
        (Ge = V(va, "Available")),
          va.forEach(i),
          El.forEach(i),
          Rt.forEach(i),
          kt.forEach(i),
          (Pl = N(ge)),
          (Tt = _(ge, "DIV", { class: !0 }));
        var ba = u(Tt);
        Ae = _(ba, "DIV", { class: !0 });
        var Il = u(Ae);
        me = _(Il, "DIV", { class: !0 });
        var Sl = u(me);
        Pe = _(Sl, "BUTTON", { class: !0 });
        var ga = u(Pe);
        (J = V(ga, "Pitch View")),
          ga.forEach(i),
          (dl = N(Sl)),
          (At = _(Sl, "BUTTON", { class: !0 }));
        var ya = u(At);
        (Dt = V(ya, "List View")),
          ya.forEach(i),
          Sl.forEach(i),
          (el = N(Il)),
          (Zt = _(Il, "DIV", { class: !0 }));
        var wa = u(Zt);
        Mt = _(wa, "SPAN", { class: !0 });
        var Xl = u(Mt);
        (ml = V(
          Xl,
          `Formation:
              `
        )),
          (dt = _(Xl, "SELECT", { class: !0 }));
        var xa = u(dt);
        for (let Kl = 0; Kl < Je.length; Kl += 1) Je[Kl].l(xa);
        xa.forEach(i),
          Xl.forEach(i),
          wa.forEach(i),
          (hl = N(Il)),
          (mt = _(Il, "DIV", { class: !0 }));
        var Hl = u(mt);
        Pt = _(Hl, "BUTTON", { class: !0 });
        var ka = u(Pt);
        (_l = V(ka, "Auto Fill")),
          ka.forEach(i),
          (pl = N(Hl)),
          (ht = _(Hl, "BUTTON", { class: !0 }));
        var Ea = u(ht);
        (tl = V(Ea, "Save Team")),
          Ea.forEach(i),
          Hl.forEach(i),
          Il.forEach(i),
          ba.forEach(i),
          (vl = N(ge)),
          (xt = _(ge, "DIV", { class: !0 }));
        var Ll = u(xt);
        pt.l(Ll), (Xt = N(Ll)), (Bt = _(Ll, "DIV", { class: !0 }));
        var Ia = u(Bt);
        Ye(ze.$$.fragment, Ia),
          Ia.forEach(i),
          Ll.forEach(i),
          (bl = N(ge)),
          Ye(Ft.$$.fragment, ge),
          ge.forEach(i),
          this.h();
      },
      h() {
        o(c, "class", "text-gray-300 text-xs"),
          o(p, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
          o(E, "class", "text-gray-300 text-xs"),
          o(m, "class", "flex-grow mb-4 xl:mb-0"),
          o(
            y,
            "class",
            "h-px bg-gray-400 w-full xl:w-px xl:h-full xl:self-stretch"
          ),
          rt(y, "min-height", "2px"),
          rt(y, "min-width", "2px"),
          o(k, "class", "text-gray-300 text-xs mt-4 xl:mt-0"),
          o(Y, "class", "text-gray-300 text-xs ml-1"),
          o(O, "class", "text-gray-300 text-xs ml-1"),
          o(j, "class", "text-gray-300 text-xs ml-1"),
          o(B, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
          o(R, "class", "flex"),
          o(H, "class", "text-gray-300 text-xs"),
          o(T, "class", "flex-grow mb-4 xl:mb-0"),
          o(
            ae,
            "class",
            "h-px bg-gray-400 w-full xl:w-px xl:h-full xl:self-stretch"
          ),
          rt(ae, "min-height", "2px"),
          rt(ae, "min-width", "2px"),
          o(U, "class", "text-gray-300 text-xs"),
          o(
            he,
            "class",
            "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"
          ),
          o(be, "class", "text-gray-300 text-xs"),
          o(W, "class", "flex-grow mb-0 mt-4 xl:mt-0"),
          o(
            n,
            "class",
            "flex flex-col xl:flex-row justify-start xl:items-center text-white space-x-0 xl:space-x-4 flex-grow mx-4 my-2 xl:m-4 bg-panel p-4 rounded-md"
          ),
          o(Re, "class", "text-gray-300 text-xs"),
          o(
            We,
            "class",
            "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"
          ),
          o(gt, "class", "text-gray-300 text-xs"),
          o(xe, "class", "flex-grow mb-4 xl:mb-0"),
          o(
            Vt,
            "class",
            "h-px bg-gray-400 w-full xl:w-px xl:h-full xl:self-stretch"
          ),
          rt(Vt, "min-height", "2px"),
          rt(Vt, "min-width", "2px"),
          o(A, "class", "text-gray-300 text-xs"),
          o(
            se,
            "class",
            "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"
          ),
          o(qe, "class", "text-gray-300 text-xs"),
          o(ct, "class", "flex-grow mb-4 xl:mb-0 mt-4 xl:mt-0"),
          o(
            Ze,
            "class",
            "h-px bg-gray-400 w-full xl:w-px xl:h-full xl:self-stretch"
          ),
          rt(Ze, "min-height", "2px"),
          rt(Ze, "min-width", "2px"),
          o(ut, "class", "text-gray-300 text-xs"),
          o(
            jt,
            "class",
            "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"
          ),
          o(wt, "class", "text-gray-300 text-xs"),
          o(Se, "class", "flex-grow mb-4 xl:mb-0 mt-4 xl:mt-0"),
          o(
            Te,
            "class",
            "flex flex-col xl:flex-row justify-start xl:items-center text-white space-x-0 xl:space-x-4 flex-grow mx-4 my-1 xl:m-4 bg-panel py-2 px-4 lg:py-4 rounded-md"
          ),
          o(r, "class", "flex flex-col sm:flex-row"),
          o(
            Pe,
            "class",
            (st = `btn ${
              a[13] ? "fpl-button" : "inactive-btn"
            } px-4 py-2 rounded-l-md font-bold md:text-xs xl:text-base min-w-[100px] lg:min-w-[125px] my-4`)
          ),
          o(
            At,
            "class",
            (Wt = `btn ${
              a[13] ? "inactive-btn" : "fpl-button"
            } px-4 py-2 rounded-r-md font-bold md:text-xs xl:text-base min-w-[100px] lg:min-w-[125px] my-4`)
          ),
          o(
            me,
            "class",
            "flex flex-row justify-between md:justify-start flex-grow ml-4 order-3 md:order-1"
          ),
          o(dt, "class", "p-2 fpl-dropdown xl:text-lg text-center"),
          a[2] === void 0 && ul(() => a[40].call(dt)),
          o(Mt, "class", "text-lg"),
          o(
            Zt,
            "class",
            "text-center md:text-left w-full mt-0 md:ml-8 order-2 mt-4 md:mt-0"
          ),
          (Pt.disabled = rl =
            a[3]?.playerIds ? a[3]?.playerIds.filter(Is).length === 0 : !0),
          o(
            Pt,
            "class",
            (nl = `btn w-full md:w-auto md:text-xs xl:text-base px-4 py-2 rounded  
              ${
                a[3]?.playerIds && a[3]?.playerIds.filter(Cs).length > 0
                  ? "fpl-purple-btn"
                  : "bg-gray-500"
              } text-white min-w-[125px]`)
          ),
          (ht.disabled = ol = !a[18]),
          o(
            ht,
            "class",
            (qt = `btn w-full md:w-auto md:text-xs xl:text-base px-4 py-2 rounded ${
              a[18] ? "fpl-purple-btn" : "bg-gray-500"
            } text-white min-w-[125px]`)
          ),
          o(
            mt,
            "class",
            "flex flex-col md:flex-row w-full md:justify-end gap-4 mr-0 md:mr-4 order-1 md:order-3 mt-2 md:mt-0"
          ),
          o(
            Ae,
            "class",
            "flex flex-col md:flex-row justify-between items-center text-white mx-4 my-2 xl:m-4 bg-panel p-2 xl:p-4 rounded-md md:w-full"
          ),
          o(Tt, "class", "flex flex-col md:flex-row"),
          o(Bt, "class", "flex w-100 xl:w-1/2"),
          o(xt, "class", "flex flex-col xl:flex-row"),
          o(l, "class", "sm:m-1 md:m-2 lg:m-3 xl:m-4");
      },
      m(z, ge) {
        Ue(e, z, ge),
          K(z, t, ge),
          K(z, l, ge),
          s(l, r),
          s(r, n),
          s(n, m),
          s(m, c),
          s(c, f),
          s(m, d),
          s(m, p),
          s(p, v),
          s(m, b),
          s(m, E),
          s(E, x),
          s(n, g),
          s(n, y),
          s(n, w),
          s(n, T),
          s(T, k),
          s(k, G),
          s(T, D),
          s(T, R),
          s(R, B),
          s(B, L),
          s(B, Y),
          s(Y, ce),
          s(B, S),
          s(B, X),
          s(B, O),
          s(O, ne),
          s(B, q),
          s(B, te),
          s(B, j),
          s(j, le),
          s(T, M),
          s(T, H),
          s(H, I),
          s(H, $),
          s(H, Q),
          s(n, _e),
          s(n, ae),
          s(n, Ve),
          s(n, W),
          s(W, U),
          s(U, ee),
          s(W, Ie),
          s(W, he),
          s(he, F),
          s(he, oe),
          s(W, Ce),
          s(W, be),
          s(be, we),
          s(r, Ke),
          s(r, Te),
          s(Te, xe),
          s(xe, Re),
          s(Re, $e),
          s(xe, Oe),
          s(xe, We),
          s(We, et),
          s(We, Fe),
          s(We, bt),
          s(xe, Ut),
          s(xe, gt),
          s(gt, yt),
          s(Te, $t),
          s(Te, Vt),
          s(Te, Nt),
          s(Te, ct),
          s(ct, A),
          s(A, Z),
          s(ct, ie),
          s(ct, se),
          s(se, fe),
          s(se, ke),
          s(se, De),
          s(ct, at),
          s(ct, qe),
          s(qe, lt),
          s(Te, Be),
          s(Te, Ze),
          s(Te, ft),
          s(Te, Se),
          s(Se, ut),
          s(ut, sl),
          s(Se, Yt),
          s(Se, jt),
          s(jt, Gt),
          s(Se, Xe),
          s(Se, wt),
          s(wt, Ge),
          s(l, Pl),
          s(l, Tt),
          s(Tt, Ae),
          s(Ae, me),
          s(me, Pe),
          s(Pe, J),
          s(me, dl),
          s(me, At),
          s(At, Dt),
          s(Ae, el),
          s(Ae, Zt),
          s(Zt, Mt),
          s(Mt, ml),
          s(Mt, dt);
        for (let kt = 0; kt < Je.length; kt += 1) Je[kt] && Je[kt].m(dt, null);
        It(dt, a[2], !0),
          s(Ae, hl),
          s(Ae, mt),
          s(mt, Pt),
          s(Pt, _l),
          s(mt, pl),
          s(mt, ht),
          s(ht, tl),
          s(l, vl),
          s(l, xt),
          Ot[_t].m(xt, null),
          s(xt, Xt),
          s(xt, Bt),
          Ue(ze, Bt, null),
          s(l, bl),
          Ue(Ft, l, null),
          (He = !0),
          gl ||
            ((Nl = [
              Ee(Pe, "click", a[29]),
              Ee(At, "click", a[30]),
              Ee(dt, "change", a[40]),
              Ee(Pt, "click", a[37]),
              Ee(ht, "click", a[38]),
            ]),
            (gl = !0));
      },
      p(z, ge) {
        const kt = {};
        if (
          (ge[0] & 2048 && (kt.filterPosition = z[11]),
          ge[0] & 4096 && (kt.filterColumn = z[12]),
          ge[0] & 16384 && (kt.showAddPlayer = z[14]),
          e.$set(kt),
          (!He || ge[0] & 2) && ye(v, z[1]),
          (!He || ge[0] & 1) && ye(x, z[0]),
          (!He || ge[0] & 256) && ye(L, z[8]),
          (!He || ge[0] & 512) && ye(X, z[9]),
          (!He || ge[0] & 1024) && ye(te, z[10]),
          (!He || ge[0] & 64) && ye(I, z[6]),
          (!He || ge[0] & 128) && ye(Q, z[7]),
          (!He || ge[0] & 8) &&
            Me !== (Me = z[3]?.playerIds.filter(Es).length + "") &&
            ye(F, Me),
          (!He || ge[0] & 32768) &&
            tt !== (tt = z[15].toFixed(2) + "") &&
            ye(Fe, tt),
          (!He || ge[0] & 524288) &&
            ue !== (ue = (z[19] / 4).toFixed(2) + "") &&
            ye(ke, ue),
          (!He || ge[0] & 1048576) &&
            Qt !== (Qt = (z[20] === 1 / 0 ? "Unlimited" : z[20]) + "") &&
            ye(Gt, Qt),
          (!He ||
            (ge[0] & 8192 &&
              st !==
                (st = `btn ${
                  z[13] ? "fpl-button" : "inactive-btn"
                } px-4 py-2 rounded-l-md font-bold md:text-xs xl:text-base min-w-[100px] lg:min-w-[125px] my-4`))) &&
            o(Pe, "class", st),
          (!He ||
            (ge[0] & 8192 &&
              Wt !==
                (Wt = `btn ${
                  z[13] ? "inactive-btn" : "fpl-button"
                } px-4 py-2 rounded-r-md font-bold md:text-xs xl:text-base min-w-[100px] lg:min-w-[125px] my-4`))) &&
            o(At, "class", Wt),
          ge[0] & 2097152)
        ) {
          Kt = z[21];
          let vt;
          for (vt = 0; vt < Kt.length; vt += 1) {
            const Al = ps(z, Kt, vt);
            Je[vt]
              ? Je[vt].p(Al, ge)
              : ((Je[vt] = bs(Al)), Je[vt].c(), Je[vt].m(dt, null));
          }
          for (; vt < Je.length; vt += 1) Je[vt].d(1);
          Je.length = Kt.length;
        }
        ge[0] & 2097156 && It(dt, z[2]),
          (!He ||
            (ge[0] & 8 &&
              rl !==
                (rl = z[3]?.playerIds
                  ? z[3]?.playerIds.filter(Is).length === 0
                  : !0))) &&
            (Pt.disabled = rl),
          (!He ||
            (ge[0] & 8 &&
              nl !==
                (nl = `btn w-full md:w-auto md:text-xs xl:text-base px-4 py-2 rounded  
              ${
                z[3]?.playerIds && z[3]?.playerIds.filter(Cs).length > 0
                  ? "fpl-purple-btn"
                  : "bg-gray-500"
              } text-white min-w-[125px]`))) &&
            o(Pt, "class", nl),
          (!He || (ge[0] & 262144 && ol !== (ol = !z[18]))) &&
            (ht.disabled = ol),
          (!He ||
            (ge[0] & 262144 &&
              qt !==
                (qt = `btn w-full md:w-auto md:text-xs xl:text-base px-4 py-2 rounded ${
                  z[18] ? "fpl-purple-btn" : "bg-gray-500"
                } text-white min-w-[125px]`))) &&
            o(ht, "class", qt);
        let Et = _t;
        (_t = Gl(z)),
          _t === Et
            ? Ot[_t].p(z, ge)
            : (ot(),
              de(Ot[Et], 1, 1, () => {
                Ot[Et] = null;
              }),
              it(),
              (pt = Ot[_t]),
              pt ? pt.p(z, ge) : ((pt = Ot[_t] = Dl[_t](z)), pt.c()),
              re(pt, 1),
              pt.m(xt, Xt));
        const zt = {};
        ge[0] & 2 && (zt.activeGameweek = z[1]), Ft.$set(zt);
      },
      i(z) {
        He ||
          (re(e.$$.fragment, z),
          re(pt),
          re(ze.$$.fragment, z),
          re(Ft.$$.fragment, z),
          (He = !0));
      },
      o(z) {
        de(e.$$.fragment, z),
          de(pt),
          de(ze.$$.fragment, z),
          de(Ft.$$.fragment, z),
          (He = !1);
      },
      d(z) {
        je(e, z),
          z && i(t),
          z && i(l),
          Ct(Je, z),
          Ot[_t].d(),
          je(ze),
          je(Ft),
          (gl = !1),
          Zl(Nl);
      },
    }
  );
}
function bs(a) {
  let e,
    t = a[82] + "",
    l,
    r;
  return {
    c() {
      (e = h("option")), (l = C(t)), this.h();
    },
    l(n) {
      e = _(n, "OPTION", {});
      var m = u(e);
      (l = V(m, t)), m.forEach(i), this.h();
    },
    h() {
      (e.__value = r = a[82]), (e.value = e.__value);
    },
    m(n, m) {
      K(n, e, m), s(e, l);
    },
    p(n, m) {
      m[0] & 2097152 && t !== (t = n[82] + "") && ye(l, t),
        m[0] & 2097152 &&
          r !== (r = n[82]) &&
          ((e.__value = r), (e.value = e.__value));
    },
    d(n) {
      n && i(e);
    },
  };
}
function xr(a) {
  let e,
    t,
    l,
    r = a[17],
    n = [];
  for (let c = 0; c < r.length; c += 1) n[c] = ys(ds(a, r, c));
  const m = (c) =>
    de(n[c], 1, 1, () => {
      n[c] = null;
    });
  return {
    c() {
      (e = h("div")), (t = h("div"));
      for (let c = 0; c < n.length; c += 1) n[c].c();
      this.h();
    },
    l(c) {
      e = _(c, "DIV", { class: !0 });
      var f = u(e);
      t = _(f, "DIV", { class: !0 });
      var d = u(t);
      for (let p = 0; p < n.length; p += 1) n[p].l(d);
      d.forEach(i), f.forEach(i), this.h();
    },
    h() {
      o(t, "class", "container-fluid"),
        o(e, "class", "bg-panel rounded-md m-4 flex-1");
    },
    m(c, f) {
      K(c, e, f), s(e, t);
      for (let d = 0; d < n.length; d += 1) n[d] && n[d].m(t, null);
      l = !0;
    },
    p(c, f) {
      if ((f[0] & 131128) | (f[1] & 57)) {
        r = c[17];
        let d;
        for (d = 0; d < r.length; d += 1) {
          const p = ds(c, r, d);
          n[d]
            ? (n[d].p(p, f), re(n[d], 1))
            : ((n[d] = ys(p)), n[d].c(), re(n[d], 1), n[d].m(t, null));
        }
        for (ot(), d = r.length; d < n.length; d += 1) m(d);
        it();
      }
    },
    i(c) {
      if (!l) {
        for (let f = 0; f < r.length; f += 1) re(n[f]);
        l = !0;
      }
    },
    o(c) {
      n = n.filter(Boolean);
      for (let f = 0; f < n.length; f += 1) de(n[f]);
      l = !1;
    },
    d(c) {
      c && i(e), Ct(n, c);
    },
  };
}
function kr(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c,
    f,
    d,
    p,
    v,
    b,
    E,
    x,
    g,
    y,
    w,
    T,
    k,
    G,
    D,
    R,
    B,
    L,
    Y,
    ce,
    S,
    X,
    O;
  (E = new rs({ props: { className: "h-4 md:h-6 mr-1 md:mr-2" } })),
    (L = new rs({ props: { className: "h-4 md:h-6 mr-1 md:mr-2" } }));
  let ne = a[17],
    q = [];
  for (let j = 0; j < ne.length; j += 1) q[j] = xs(hs(a, ne, j));
  const te = (j) =>
    de(q[j], 1, 1, () => {
      q[j] = null;
    });
  return {
    c() {
      (e = h("div")),
        (t = h("img")),
        (r = P()),
        (n = h("div")),
        (m = h("div")),
        (c = h("div")),
        (f = h("img")),
        (p = P()),
        (v = h("div")),
        (b = h("a")),
        Le(E.$$.fragment),
        (x = P()),
        (g = h("span")),
        (y = C("OpenChat")),
        (w = P()),
        (T = h("div")),
        (k = h("img")),
        (D = P()),
        (R = h("div")),
        (B = h("a")),
        Le(L.$$.fragment),
        (Y = P()),
        (ce = h("span")),
        (S = C("OpenChat")),
        (X = P());
      for (let j = 0; j < q.length; j += 1) q[j].c();
      this.h();
    },
    l(j) {
      e = _(j, "DIV", { class: !0 });
      var le = u(e);
      (t = _(le, "IMG", { src: !0, alt: !0, class: !0 })),
        (r = N(le)),
        (n = _(le, "DIV", { class: !0 }));
      var M = u(n);
      m = _(M, "DIV", { class: !0 });
      var H = u(m);
      c = _(H, "DIV", { class: !0 });
      var I = u(c);
      (f = _(I, "IMG", { class: !0, src: !0, alt: !0 })),
        (p = N(I)),
        (v = _(I, "DIV", { class: !0 }));
      var $ = u(v);
      b = _($, "A", { class: !0, target: !0, href: !0 });
      var Q = u(b);
      Ye(E.$$.fragment, Q), (x = N(Q)), (g = _(Q, "SPAN", { class: !0 }));
      var _e = u(g);
      (y = V(_e, "OpenChat")),
        _e.forEach(i),
        Q.forEach(i),
        $.forEach(i),
        I.forEach(i),
        (w = N(H)),
        (T = _(H, "DIV", { class: !0 }));
      var ae = u(T);
      (k = _(ae, "IMG", { class: !0, src: !0, alt: !0 })),
        (D = N(ae)),
        (R = _(ae, "DIV", { class: !0 }));
      var Ve = u(R);
      B = _(Ve, "A", { class: !0, target: !0, href: !0 });
      var W = u(B);
      Ye(L.$$.fragment, W), (Y = N(W)), (ce = _(W, "SPAN", { class: !0 }));
      var U = u(ce);
      (S = V(U, "OpenChat")),
        U.forEach(i),
        W.forEach(i),
        Ve.forEach(i),
        ae.forEach(i),
        H.forEach(i),
        (X = N(M));
      for (let ee = 0; ee < q.length; ee += 1) q[ee].l(M);
      M.forEach(i), le.forEach(i), this.h();
    },
    h() {
      cl(t.src, (l = "pitch.png")) || o(t, "src", l),
        o(t, "alt", "pitch"),
        o(t, "class", "w-full"),
        o(f, "class", "h-6 sm:h-8 md:h-12 m-0 md:m-1"),
        cl(f.src, (d = "board.png")) || o(f, "src", d),
        o(f, "alt", "OpenChat"),
        o(g, "class", "text-white text-xs md:text-xl mr-4 oc-logo"),
        o(
          b,
          "class",
          "flex items-center justify-center w-full h-full px-2 md:px-4 ml-1 md:ml-0"
        ),
        o(b, "target", "_blank"),
        o(
          b,
          "href",
          "https://oc.app/community/uf3iv-naaaa-aaaar-ar3ta-cai/channel/231651284198326210763327878874377361028/?ref=zv6hh-xaaaa-aaaar-ac35q-cai"
        ),
        o(v, "class", "absolute top-0 left-0 w-full h-full"),
        o(c, "class", "relative inline-block"),
        o(k, "class", "h-6 sm:h-8 md:h-12 m-0 md:m-1"),
        cl(k.src, (G = "board.png")) || o(k, "src", G),
        o(k, "alt", "OpenChat"),
        o(ce, "class", "text-white text-xs md:text-xl mr-4 oc-logo"),
        o(
          B,
          "class",
          "flex items-center justify-center w-full h-full px-2 md:px-4 ml-1 md:ml-0"
        ),
        o(B, "target", "_blank"),
        o(
          B,
          "href",
          "https://oc.app/community/uf3iv-naaaa-aaaar-ar3ta-cai/channel/231651284198326210763327878874377361028/?ref=zv6hh-xaaaa-aaaar-ac35q-cai"
        ),
        o(R, "class", "absolute top-0 left-0 w-full h-full"),
        o(T, "class", "relative inline-block"),
        o(m, "class", "flex justify-around w-full h-auto"),
        o(n, "class", "absolute top-0 left-0 right-0 bottom-0"),
        o(e, "class", "relative w-full xl:w-1/2 mt-4");
    },
    m(j, le) {
      K(j, e, le),
        s(e, t),
        s(e, r),
        s(e, n),
        s(n, m),
        s(m, c),
        s(c, f),
        s(c, p),
        s(c, v),
        s(v, b),
        Ue(E, b, null),
        s(b, x),
        s(b, g),
        s(g, y),
        s(m, w),
        s(m, T),
        s(T, k),
        s(T, D),
        s(T, R),
        s(R, B),
        Ue(L, B, null),
        s(B, Y),
        s(B, ce),
        s(ce, S),
        s(n, X);
      for (let M = 0; M < q.length; M += 1) q[M] && q[M].m(n, null);
      O = !0;
    },
    p(j, le) {
      if ((le[0] & 131128) | (le[1] & 57)) {
        ne = j[17];
        let M;
        for (M = 0; M < ne.length; M += 1) {
          const H = hs(j, ne, M);
          q[M]
            ? (q[M].p(H, le), re(q[M], 1))
            : ((q[M] = xs(H)), q[M].c(), re(q[M], 1), q[M].m(n, null));
        }
        for (ot(), M = ne.length; M < q.length; M += 1) te(M);
        it();
      }
    },
    i(j) {
      if (!O) {
        re(E.$$.fragment, j), re(L.$$.fragment, j);
        for (let le = 0; le < ne.length; le += 1) re(q[le]);
        O = !0;
      }
    },
    o(j) {
      de(E.$$.fragment, j), de(L.$$.fragment, j), (q = q.filter(Boolean));
      for (let le = 0; le < q.length; le += 1) de(q[le]);
      O = !1;
    },
    d(j) {
      j && i(e), je(E), je(L), Ct(q, j);
    },
  };
}
function Er(a) {
  let e, t, l, r, n, m, c, f, d, p, v, b, E, x, g;
  return {
    c() {
      (e = h("div")),
        (t = h("div")),
        (l = C("Goalkeeper")),
        (r = P()),
        (n = h("div")),
        (m = C("(c)")),
        (c = P()),
        (f = h("div")),
        (d = C("Team")),
        (p = P()),
        (v = h("div")),
        (b = C("Value")),
        (E = P()),
        (x = h("div")),
        (g = C(" ")),
        this.h();
    },
    l(y) {
      e = _(y, "DIV", { class: !0 });
      var w = u(e);
      t = _(w, "DIV", { class: !0 });
      var T = u(t);
      (l = V(T, "Goalkeeper")),
        T.forEach(i),
        (r = N(w)),
        (n = _(w, "DIV", { class: !0 }));
      var k = u(n);
      (m = V(k, "(c)")),
        k.forEach(i),
        (c = N(w)),
        (f = _(w, "DIV", { class: !0 }));
      var G = u(f);
      (d = V(G, "Team")),
        G.forEach(i),
        (p = N(w)),
        (v = _(w, "DIV", { class: !0 }));
      var D = u(v);
      (b = V(D, "Value")),
        D.forEach(i),
        (E = N(w)),
        (x = _(w, "DIV", { class: !0 }));
      var R = u(x);
      (g = V(R, " ")), R.forEach(i), w.forEach(i), this.h();
    },
    h() {
      o(t, "class", "w-1/3"),
        o(n, "class", "w-1/6"),
        o(f, "class", "w-1/3"),
        o(v, "class", "w-1/6"),
        o(x, "class", "w-1/6"),
        o(
          e,
          "class",
          "flex items-center justify-between py-2 bg-light-gray px-4"
        );
    },
    m(y, w) {
      K(y, e, w),
        s(e, t),
        s(t, l),
        s(e, r),
        s(e, n),
        s(n, m),
        s(e, c),
        s(e, f),
        s(f, d),
        s(e, p),
        s(e, v),
        s(v, b),
        s(e, E),
        s(e, x),
        s(x, g);
    },
    d(y) {
      y && i(e);
    },
  };
}
function Ir(a) {
  let e, t, l, r, n, m, c, f, d, p, v, b, E, x, g;
  return {
    c() {
      (e = h("div")),
        (t = h("div")),
        (l = C("Defenders")),
        (r = P()),
        (n = h("div")),
        (m = C("(c)")),
        (c = P()),
        (f = h("div")),
        (d = C("Team")),
        (p = P()),
        (v = h("div")),
        (b = C("Value")),
        (E = P()),
        (x = h("div")),
        (g = C(" ")),
        this.h();
    },
    l(y) {
      e = _(y, "DIV", { class: !0 });
      var w = u(e);
      t = _(w, "DIV", { class: !0 });
      var T = u(t);
      (l = V(T, "Defenders")),
        T.forEach(i),
        (r = N(w)),
        (n = _(w, "DIV", { class: !0 }));
      var k = u(n);
      (m = V(k, "(c)")),
        k.forEach(i),
        (c = N(w)),
        (f = _(w, "DIV", { class: !0 }));
      var G = u(f);
      (d = V(G, "Team")),
        G.forEach(i),
        (p = N(w)),
        (v = _(w, "DIV", { class: !0 }));
      var D = u(v);
      (b = V(D, "Value")),
        D.forEach(i),
        (E = N(w)),
        (x = _(w, "DIV", { class: !0 }));
      var R = u(x);
      (g = V(R, " ")), R.forEach(i), w.forEach(i), this.h();
    },
    h() {
      o(t, "class", "w-1/3"),
        o(n, "class", "w-1/6"),
        o(f, "class", "w-1/3"),
        o(v, "class", "w-1/6"),
        o(x, "class", "w-1/6"),
        o(
          e,
          "class",
          "flex items-center justify-between py-2 bg-light-gray px-4"
        );
    },
    m(y, w) {
      K(y, e, w),
        s(e, t),
        s(t, l),
        s(e, r),
        s(e, n),
        s(n, m),
        s(e, c),
        s(e, f),
        s(f, d),
        s(e, p),
        s(e, v),
        s(v, b),
        s(e, E),
        s(e, x),
        s(x, g);
    },
    d(y) {
      y && i(e);
    },
  };
}
function Cr(a) {
  let e, t, l, r, n, m, c, f, d, p, v, b, E, x, g;
  return {
    c() {
      (e = h("div")),
        (t = h("div")),
        (l = C("Midfielders")),
        (r = P()),
        (n = h("div")),
        (m = C("(c)")),
        (c = P()),
        (f = h("div")),
        (d = C("Team")),
        (p = P()),
        (v = h("div")),
        (b = C("Value")),
        (E = P()),
        (x = h("div")),
        (g = C(" ")),
        this.h();
    },
    l(y) {
      e = _(y, "DIV", { class: !0 });
      var w = u(e);
      t = _(w, "DIV", { class: !0 });
      var T = u(t);
      (l = V(T, "Midfielders")),
        T.forEach(i),
        (r = N(w)),
        (n = _(w, "DIV", { class: !0 }));
      var k = u(n);
      (m = V(k, "(c)")),
        k.forEach(i),
        (c = N(w)),
        (f = _(w, "DIV", { class: !0 }));
      var G = u(f);
      (d = V(G, "Team")),
        G.forEach(i),
        (p = N(w)),
        (v = _(w, "DIV", { class: !0 }));
      var D = u(v);
      (b = V(D, "Value")),
        D.forEach(i),
        (E = N(w)),
        (x = _(w, "DIV", { class: !0 }));
      var R = u(x);
      (g = V(R, " ")), R.forEach(i), w.forEach(i), this.h();
    },
    h() {
      o(t, "class", "w-1/3"),
        o(n, "class", "w-1/6"),
        o(f, "class", "w-1/3"),
        o(v, "class", "w-1/6"),
        o(x, "class", "w-1/6"),
        o(
          e,
          "class",
          "flex items-center justify-between py-2 bg-light-gray px-4"
        );
    },
    m(y, w) {
      K(y, e, w),
        s(e, t),
        s(t, l),
        s(e, r),
        s(e, n),
        s(n, m),
        s(e, c),
        s(e, f),
        s(f, d),
        s(e, p),
        s(e, v),
        s(v, b),
        s(e, E),
        s(e, x),
        s(x, g);
    },
    d(y) {
      y && i(e);
    },
  };
}
function Vr(a) {
  let e, t, l, r, n, m, c, f, d, p, v, b, E, x, g;
  return {
    c() {
      (e = h("div")),
        (t = h("div")),
        (l = C("Forwards")),
        (r = P()),
        (n = h("div")),
        (m = C("(c)")),
        (c = P()),
        (f = h("div")),
        (d = C("Team")),
        (p = P()),
        (v = h("div")),
        (b = C("Value")),
        (E = P()),
        (x = h("div")),
        (g = C(" ")),
        this.h();
    },
    l(y) {
      e = _(y, "DIV", { class: !0 });
      var w = u(e);
      t = _(w, "DIV", { class: !0 });
      var T = u(t);
      (l = V(T, "Forwards")),
        T.forEach(i),
        (r = N(w)),
        (n = _(w, "DIV", { class: !0 }));
      var k = u(n);
      (m = V(k, "(c)")),
        k.forEach(i),
        (c = N(w)),
        (f = _(w, "DIV", { class: !0 }));
      var G = u(f);
      (d = V(G, "Team")),
        G.forEach(i),
        (p = N(w)),
        (v = _(w, "DIV", { class: !0 }));
      var D = u(v);
      (b = V(D, "Value")),
        D.forEach(i),
        (E = N(w)),
        (x = _(w, "DIV", { class: !0 }));
      var R = u(x);
      (g = V(R, " ")), R.forEach(i), w.forEach(i), this.h();
    },
    h() {
      o(t, "class", "w-1/3"),
        o(n, "class", "w-1/6"),
        o(f, "class", "w-1/3"),
        o(v, "class", "w-1/6"),
        o(x, "class", "w-1/6"),
        o(
          e,
          "class",
          "flex items-center justify-between py-2 bg-light-gray px-4"
        );
    },
    m(y, w) {
      K(y, e, w),
        s(e, t),
        s(t, l),
        s(e, r),
        s(e, n),
        s(n, m),
        s(e, c),
        s(e, f),
        s(f, d),
        s(e, p),
        s(e, v),
        s(v, b),
        s(e, E),
        s(e, x),
        s(x, g);
    },
    d(y) {
      y && i(e);
    },
  };
}
function Tr(a) {
  let e, t, l, r, n, m, c, f, d, p, v, b, E, x, g, y, w, T;
  g = new Ns({ props: { className: "w-6 h-6 p-2" } });
  function k() {
    return a[48](a[71], a[78]);
  }
  return {
    c() {
      (e = h("div")),
        (t = C("-")),
        (l = P()),
        (r = h("div")),
        (n = C("-")),
        (m = P()),
        (c = h("div")),
        (f = C("-")),
        (d = P()),
        (p = h("div")),
        (v = C("-")),
        (b = P()),
        (E = h("div")),
        (x = h("button")),
        Le(g.$$.fragment),
        this.h();
    },
    l(G) {
      e = _(G, "DIV", { class: !0 });
      var D = u(e);
      (t = V(D, "-")),
        D.forEach(i),
        (l = N(G)),
        (r = _(G, "DIV", { class: !0 }));
      var R = u(r);
      (n = V(R, "-")),
        R.forEach(i),
        (m = N(G)),
        (c = _(G, "DIV", { class: !0 }));
      var B = u(c);
      (f = V(B, "-")),
        B.forEach(i),
        (d = N(G)),
        (p = _(G, "DIV", { class: !0 }));
      var L = u(p);
      (v = V(L, "-")),
        L.forEach(i),
        (b = N(G)),
        (E = _(G, "DIV", { class: !0 }));
      var Y = u(E);
      x = _(Y, "BUTTON", { class: !0 });
      var ce = u(x);
      Ye(g.$$.fragment, ce), ce.forEach(i), Y.forEach(i), this.h();
    },
    h() {
      o(e, "class", "w-1/3"),
        o(r, "class", "w-1/6"),
        o(c, "class", "w-1/3"),
        o(p, "class", "w-1/6"),
        o(x, "class", "text-xl rounded fpl-button flex items-center"),
        o(E, "class", "w-1/6 flex items-center");
    },
    m(G, D) {
      K(G, e, D),
        s(e, t),
        K(G, l, D),
        K(G, r, D),
        s(r, n),
        K(G, m, D),
        K(G, c, D),
        s(c, f),
        K(G, d, D),
        K(G, p, D),
        s(p, v),
        K(G, b, D),
        K(G, E, D),
        s(E, x),
        Ue(g, x, null),
        (y = !0),
        w || ((T = Ee(x, "click", k)), (w = !0));
    },
    p(G, D) {
      a = G;
    },
    i(G) {
      y || (re(g.$$.fragment, G), (y = !0));
    },
    o(G) {
      de(g.$$.fragment, G), (y = !1);
    },
    d(G) {
      G && i(e),
        G && i(l),
        G && i(r),
        G && i(m),
        G && i(c),
        G && i(d),
        G && i(p),
        G && i(b),
        G && i(E),
        je(g),
        (w = !1),
        T();
    },
  };
}
function Pr(a) {
  let e,
    t = a[76].firstName + "",
    l,
    r,
    n = a[76].lastName + "",
    m,
    c,
    f,
    d,
    p,
    v,
    b,
    E,
    x,
    g,
    y = a[79]?.name + "",
    w,
    T,
    k,
    G,
    D = (Number(a[76].value) / 4).toFixed(2) + "",
    R,
    B,
    L,
    Y,
    ce,
    S,
    X,
    O,
    ne;
  const q = [Dr, Nr],
    te = [];
  function j(M, H) {
    return M[3]?.captainId === M[75] ? 0 : 1;
  }
  (d = j(a)),
    (p = te[d] = q[d](a)),
    (E = new Ml({
      props: {
        className: "h-5 w-5 mr-2",
        primaryColour: a[79]?.primaryColourHex,
        secondaryColour: a[79]?.secondaryColourHex,
        thirdColour: a[79]?.thirdColourHex,
      },
    })),
    (S = new Ds({ props: { className: "w-6 h-6 p-2" } }));
  function le() {
    return a[47](a[76]);
  }
  return {
    c() {
      (e = h("div")),
        (l = C(t)),
        (r = P()),
        (m = C(n)),
        (c = P()),
        (f = h("div")),
        p.c(),
        (v = P()),
        (b = h("div")),
        Le(E.$$.fragment),
        (x = P()),
        (g = h("p")),
        (w = C(y)),
        (T = P()),
        (k = h("div")),
        (G = C("£")),
        (R = C(D)),
        (B = C("m")),
        (L = P()),
        (Y = h("div")),
        (ce = h("button")),
        Le(S.$$.fragment),
        this.h();
    },
    l(M) {
      e = _(M, "DIV", { class: !0 });
      var H = u(e);
      (l = V(H, t)),
        (r = N(H)),
        (m = V(H, n)),
        H.forEach(i),
        (c = N(M)),
        (f = _(M, "DIV", { class: !0 }));
      var I = u(f);
      p.l(I), I.forEach(i), (v = N(M)), (b = _(M, "DIV", { class: !0 }));
      var $ = u(b);
      Ye(E.$$.fragment, $), (x = N($)), (g = _($, "P", {}));
      var Q = u(g);
      (w = V(Q, y)),
        Q.forEach(i),
        $.forEach(i),
        (T = N(M)),
        (k = _(M, "DIV", { class: !0 }));
      var _e = u(k);
      (G = V(_e, "£")),
        (R = V(_e, D)),
        (B = V(_e, "m")),
        _e.forEach(i),
        (L = N(M)),
        (Y = _(M, "DIV", { class: !0 }));
      var ae = u(Y);
      ce = _(ae, "BUTTON", { class: !0 });
      var Ve = u(ce);
      Ye(S.$$.fragment, Ve), Ve.forEach(i), ae.forEach(i), this.h();
    },
    h() {
      o(e, "class", "w-1/3"),
        o(f, "class", "w-1/6 flex items-center"),
        o(b, "class", "flex w-1/3 items-center"),
        o(k, "class", "w-1/6"),
        o(ce, "class", "bg-red-600 mb-1 rounded-sm"),
        o(Y, "class", "w-1/6 flex items-center");
    },
    m(M, H) {
      K(M, e, H),
        s(e, l),
        s(e, r),
        s(e, m),
        K(M, c, H),
        K(M, f, H),
        te[d].m(f, null),
        K(M, v, H),
        K(M, b, H),
        Ue(E, b, null),
        s(b, x),
        s(b, g),
        s(g, w),
        K(M, T, H),
        K(M, k, H),
        s(k, G),
        s(k, R),
        s(k, B),
        K(M, L, H),
        K(M, Y, H),
        s(Y, ce),
        Ue(S, ce, null),
        (X = !0),
        O || ((ne = Ee(ce, "click", le)), (O = !0));
    },
    p(M, H) {
      (a = M),
        (!X || H[0] & 131096) && t !== (t = a[76].firstName + "") && ye(l, t),
        (!X || H[0] & 131096) && n !== (n = a[76].lastName + "") && ye(m, n);
      let I = d;
      (d = j(a)),
        d === I
          ? te[d].p(a, H)
          : (ot(),
            de(te[I], 1, 1, () => {
              te[I] = null;
            }),
            it(),
            (p = te[d]),
            p ? p.p(a, H) : ((p = te[d] = q[d](a)), p.c()),
            re(p, 1),
            p.m(f, null));
      const $ = {};
      H[0] & 131128 && ($.primaryColour = a[79]?.primaryColourHex),
        H[0] & 131128 && ($.secondaryColour = a[79]?.secondaryColourHex),
        H[0] & 131128 && ($.thirdColour = a[79]?.thirdColourHex),
        E.$set($),
        (!X || H[0] & 131128) && y !== (y = a[79]?.name + "") && ye(w, y),
        (!X || H[0] & 131096) &&
          D !== (D = (Number(a[76].value) / 4).toFixed(2) + "") &&
          ye(R, D);
    },
    i(M) {
      X || (re(p), re(E.$$.fragment, M), re(S.$$.fragment, M), (X = !0));
    },
    o(M) {
      de(p), de(E.$$.fragment, M), de(S.$$.fragment, M), (X = !1);
    },
    d(M) {
      M && i(e),
        M && i(c),
        M && i(f),
        te[d].d(),
        M && i(v),
        M && i(b),
        je(E),
        M && i(T),
        M && i(k),
        M && i(L),
        M && i(Y),
        je(S),
        (O = !1),
        ne();
    },
  };
}
function Nr(a) {
  let e, t, l, r, n;
  t = new Gs({ props: { className: "w-6 h-6" } });
  function m() {
    return a[46](a[76]);
  }
  return {
    c() {
      (e = h("button")), Le(t.$$.fragment);
    },
    l(c) {
      e = _(c, "BUTTON", {});
      var f = u(e);
      Ye(t.$$.fragment, f), f.forEach(i);
    },
    m(c, f) {
      K(c, e, f),
        Ue(t, e, null),
        (l = !0),
        r || ((n = Ee(e, "click", m)), (r = !0));
    },
    p(c, f) {
      a = c;
    },
    i(c) {
      l || (re(t.$$.fragment, c), (l = !0));
    },
    o(c) {
      de(t.$$.fragment, c), (l = !1);
    },
    d(c) {
      c && i(e), je(t), (r = !1), n();
    },
  };
}
function Dr(a) {
  let e, t, l;
  return (
    (t = new As({ props: { className: "w-6 h-6" } })),
    {
      c() {
        (e = h("span")), Le(t.$$.fragment);
      },
      l(r) {
        e = _(r, "SPAN", {});
        var n = u(e);
        Ye(t.$$.fragment, n), n.forEach(i);
      },
      m(r, n) {
        K(r, e, n), Ue(t, e, null), (l = !0);
      },
      p: Ne,
      i(r) {
        l || (re(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        de(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && i(e), je(t);
      },
    }
  );
}
function gs(a, e) {
  let t, l, r, n, m;
  const c = [Pr, Tr],
    f = [];
  function d(p, v) {
    return p[75] > 0 && p[76] ? 0 : 1;
  }
  return (
    (l = d(e)),
    (r = f[l] = c[l](e)),
    {
      key: a,
      first: null,
      c() {
        (t = h("div")), r.c(), (n = P()), this.h();
      },
      l(p) {
        t = _(p, "DIV", { class: !0 });
        var v = u(t);
        r.l(v), (n = N(v)), v.forEach(i), this.h();
      },
      h() {
        o(t, "class", "flex items-center justify-between py-2 px-4"),
          (this.first = t);
      },
      m(p, v) {
        K(p, t, v), f[l].m(t, null), s(t, n), (m = !0);
      },
      p(p, v) {
        e = p;
        let b = l;
        (l = d(e)),
          l === b
            ? f[l].p(e, v)
            : (ot(),
              de(f[b], 1, 1, () => {
                f[b] = null;
              }),
              it(),
              (r = f[l]),
              r ? r.p(e, v) : ((r = f[l] = c[l](e)), r.c()),
              re(r, 1),
              r.m(t, n));
      },
      i(p) {
        m || (re(r), (m = !0));
      },
      o(p) {
        de(r), (m = !1);
      },
      d(p) {
        p && i(t), f[l].d();
      },
    }
  );
}
function ys(a) {
  let e,
    t,
    l,
    r,
    n = [],
    m = new Ms(),
    c,
    f,
    d = a[71] === 0 && Er(),
    p = a[71] === 1 && Ir(),
    v = a[71] === 2 && Cr(),
    b = a[71] === 3 && Vr(),
    E = a[69];
  const x = (g) => g[78];
  for (let g = 0; g < E.length; g += 1) {
    let y = ms(a, E, g),
      w = x(y);
    m.set(w, (n[g] = gs(w, y)));
  }
  return {
    c() {
      d && d.c(),
        (e = P()),
        p && p.c(),
        (t = P()),
        v && v.c(),
        (l = P()),
        b && b.c(),
        (r = P());
      for (let g = 0; g < n.length; g += 1) n[g].c();
      c = al();
    },
    l(g) {
      d && d.l(g),
        (e = N(g)),
        p && p.l(g),
        (t = N(g)),
        v && v.l(g),
        (l = N(g)),
        b && b.l(g),
        (r = N(g));
      for (let y = 0; y < n.length; y += 1) n[y].l(g);
      c = al();
    },
    m(g, y) {
      d && d.m(g, y),
        K(g, e, y),
        p && p.m(g, y),
        K(g, t, y),
        v && v.m(g, y),
        K(g, l, y),
        b && b.m(g, y),
        K(g, r, y);
      for (let w = 0; w < n.length; w += 1) n[w] && n[w].m(g, y);
      K(g, c, y), (f = !0);
    },
    p(g, y) {
      (y[0] & 131128) | (y[1] & 57) &&
        ((E = g[69]),
        ot(),
        (n = Ts(n, y, x, 1, g, E, m, c.parentNode, Ps, gs, c, ms)),
        it());
    },
    i(g) {
      if (!f) {
        for (let y = 0; y < E.length; y += 1) re(n[y]);
        f = !0;
      }
    },
    o(g) {
      for (let y = 0; y < n.length; y += 1) de(n[y]);
      f = !1;
    },
    d(g) {
      d && d.d(g),
        g && i(e),
        p && p.d(g),
        g && i(t),
        v && v.d(g),
        g && i(l),
        b && b.d(g),
        g && i(r);
      for (let y = 0; y < n.length; y += 1) n[y].d(g);
      g && i(c);
    },
  };
}
function Gr(a) {
  let e, t, l, r, n;
  t = new hr({
    props: { className: "h-12 sm:h-16 md:h-20 lg:h-24 xl:h-16 2xl:h-20" },
  });
  function m() {
    return a[44](a[71], a[78]);
  }
  return {
    c() {
      (e = h("button")), Le(t.$$.fragment), this.h();
    },
    l(c) {
      e = _(c, "BUTTON", { class: !0 });
      var f = u(e);
      Ye(t.$$.fragment, f), f.forEach(i), this.h();
    },
    h() {
      o(e, "class", "flex items-center");
    },
    m(c, f) {
      K(c, e, f),
        Ue(t, e, null),
        (l = !0),
        r || ((n = Ee(e, "click", m)), (r = !0));
    },
    p(c, f) {
      a = c;
    },
    i(c) {
      l || (re(t.$$.fragment, c), (l = !0));
    },
    o(c) {
      de(t.$$.fragment, c), (l = !1);
    },
    d(c) {
      c && i(e), je(t), (r = !1), n();
    },
  };
}
function Ar(a) {
  let e,
    t,
    l,
    r,
    n,
    m,
    c,
    f,
    d,
    p,
    v,
    b,
    E,
    x,
    g,
    y = Na(a[76].position) + "",
    w,
    T,
    k,
    G,
    D,
    R = a[76].firstName.length > 2 ? a[76].firstName.substring(0, 1) + "." : "",
    B,
    L,
    Y = a[76].lastName + "",
    ce,
    S,
    X,
    O,
    ne = a[79]?.abbreviatedName + "",
    q,
    te,
    j,
    le,
    M,
    H,
    I = (Number(a[76].value) / 4).toFixed(2) + "",
    $,
    Q,
    _e,
    ae,
    Ve;
  n = new Ds({ props: { className: "w-4 h-4 sm:w-6 sm:h-6 p-1" } });
  function W() {
    return a[42](a[76]);
  }
  f = new Ls({
    props: {
      className: "h-8 sm:h-12 md:h-16 lg:h-20 xl:h-12 2xl:h-16",
      primaryColour: a[79]?.primaryColourHex,
      secondaryColour: a[79]?.secondaryColourHex,
      thirdColour: a[79]?.thirdColourHex,
    },
  });
  const U = [Br, Mr],
    ee = [];
  function Ie(F, oe) {
    return F[3]?.captainId === F[75] ? 0 : 1;
  }
  (p = Ie(a)), (v = ee[p] = U[p](a));
  var he = Da(a[76].nationality);
  function Me(F) {
    return {
      props: { class: "h-2 w-2 mr-1 sm:h-4 sm:w-4 sm:mx-2 min-w-[15px]" },
    };
  }
  return (
    he && (k = Ta(he, Me())),
    (j = new Ml({
      props: {
        className: "h-4 w-4 sm:mx-1 min-w-[15px]",
        primaryColour: a[79]?.primaryColourHex,
        secondaryColour: a[79]?.secondaryColourHex,
        thirdColour: a[79]?.thirdColourHex,
      },
    })),
    {
      c() {
        (e = h("div")),
          (t = h("div")),
          (l = h("div")),
          (r = h("button")),
          Le(n.$$.fragment),
          (m = P()),
          (c = h("div")),
          Le(f.$$.fragment),
          (d = P()),
          v.c(),
          (b = P()),
          (E = h("div")),
          (x = h("div")),
          (g = h("p")),
          (w = C(y)),
          (T = P()),
          k && Le(k.$$.fragment),
          (G = P()),
          (D = h("p")),
          (B = C(R)),
          (L = P()),
          (ce = C(Y)),
          (S = P()),
          (X = h("div")),
          (O = h("p")),
          (q = C(ne)),
          (te = P()),
          Le(j.$$.fragment),
          (le = P()),
          (M = h("p")),
          (H = C("£")),
          ($ = C(I)),
          (Q = C("m")),
          this.h();
      },
      l(F) {
        e = _(F, "DIV", { class: !0 });
        var oe = u(e);
        t = _(oe, "DIV", { class: !0 });
        var Ce = u(t);
        l = _(Ce, "DIV", { class: !0 });
        var be = u(l);
        r = _(be, "BUTTON", { class: !0 });
        var we = u(r);
        Ye(n.$$.fragment, we),
          we.forEach(i),
          (m = N(be)),
          (c = _(be, "DIV", { class: !0 }));
        var Ke = u(c);
        Ye(f.$$.fragment, Ke),
          Ke.forEach(i),
          (d = N(be)),
          v.l(be),
          be.forEach(i),
          Ce.forEach(i),
          (b = N(oe)),
          (E = _(oe, "DIV", { class: !0 }));
        var Te = u(E);
        x = _(Te, "DIV", { class: !0 });
        var xe = u(x);
        g = _(xe, "P", { class: !0 });
        var Re = u(g);
        (w = V(Re, y)),
          Re.forEach(i),
          (T = N(xe)),
          k && Ye(k.$$.fragment, xe),
          (G = N(xe)),
          (D = _(xe, "P", { class: !0 }));
        var $e = u(D);
        (B = V($e, R)),
          (L = N($e)),
          (ce = V($e, Y)),
          $e.forEach(i),
          xe.forEach(i),
          (S = N(Te)),
          (X = _(Te, "DIV", { class: !0 }));
        var Oe = u(X);
        O = _(Oe, "P", { class: !0 });
        var We = u(O);
        (q = V(We, ne)),
          We.forEach(i),
          (te = N(Oe)),
          Ye(j.$$.fragment, Oe),
          (le = N(Oe)),
          (M = _(Oe, "P", { class: !0 }));
        var et = u(M);
        (H = V(et, "£")),
          ($ = V(et, I)),
          (Q = V(et, "m")),
          et.forEach(i),
          Oe.forEach(i),
          Te.forEach(i),
          oe.forEach(i),
          this.h();
      },
      h() {
        o(r, "class", "bg-red-600 mb-1 rounded-sm"),
          o(c, "class", "flex justify-center items-center flex-grow"),
          o(l, "class", "flex justify-between items-end w-full"),
          o(t, "class", "flex justify-center items-center"),
          o(g, "class", "collapse sm:visible sm:min-w-[15px]"),
          o(D, "class", "truncate min-w-[50px] max-w-[50px]"),
          o(
            x,
            "class",
            "flex justify-center items-center bg-gray-700 md:px-2 py-1 rounded-t-md min-w-[80px] max-w-[80px] sm:min-w-[120px] sm:max-w-[120px]"
          ),
          o(O, "class", "collapse sm:visible sm:min-w-[20px]"),
          o(M, "class", "truncate min-w-[50px] max-w-[50px]"),
          o(
            X,
            "class",
            "flex justify-center items-center bg-white text-black md:px-2 py-1 rounded-b-md min-w-[80px] max-w-[80px] sm:min-w-[120px] sm:max-w-[120px]"
          ),
          o(E, "class", "flex flex-col justify-center items-center text-xs"),
          o(e, "class", "flex flex-col items-center text-center");
      },
      m(F, oe) {
        K(F, e, oe),
          s(e, t),
          s(t, l),
          s(l, r),
          Ue(n, r, null),
          s(l, m),
          s(l, c),
          Ue(f, c, null),
          s(l, d),
          ee[p].m(l, null),
          s(e, b),
          s(e, E),
          s(E, x),
          s(x, g),
          s(g, w),
          s(x, T),
          k && Ue(k, x, null),
          s(x, G),
          s(x, D),
          s(D, B),
          s(D, L),
          s(D, ce),
          s(E, S),
          s(E, X),
          s(X, O),
          s(O, q),
          s(X, te),
          Ue(j, X, null),
          s(X, le),
          s(X, M),
          s(M, H),
          s(M, $),
          s(M, Q),
          (_e = !0),
          ae || ((Ve = Ee(r, "click", W)), (ae = !0));
      },
      p(F, oe) {
        a = F;
        const Ce = {};
        oe[0] & 131128 && (Ce.primaryColour = a[79]?.primaryColourHex),
          oe[0] & 131128 && (Ce.secondaryColour = a[79]?.secondaryColourHex),
          oe[0] & 131128 && (Ce.thirdColour = a[79]?.thirdColourHex),
          f.$set(Ce);
        let be = p;
        if (
          ((p = Ie(a)),
          p === be
            ? ee[p].p(a, oe)
            : (ot(),
              de(ee[be], 1, 1, () => {
                ee[be] = null;
              }),
              it(),
              (v = ee[p]),
              v ? v.p(a, oe) : ((v = ee[p] = U[p](a)), v.c()),
              re(v, 1),
              v.m(l, null)),
          (!_e || oe[0] & 131096) &&
            y !== (y = Na(a[76].position) + "") &&
            ye(w, y),
          oe[0] & 131096 && he !== (he = Da(a[76].nationality)))
        ) {
          if (k) {
            ot();
            const Ke = k;
            de(Ke.$$.fragment, 1, 0, () => {
              je(Ke, 1);
            }),
              it();
          }
          he
            ? ((k = Ta(he, Me())),
              Le(k.$$.fragment),
              re(k.$$.fragment, 1),
              Ue(k, x, G))
            : (k = null);
        }
        (!_e || oe[0] & 131096) &&
          R !==
            (R =
              a[76].firstName.length > 2
                ? a[76].firstName.substring(0, 1) + "."
                : "") &&
          ye(B, R),
          (!_e || oe[0] & 131096) &&
            Y !== (Y = a[76].lastName + "") &&
            ye(ce, Y),
          (!_e || oe[0] & 131128) &&
            ne !== (ne = a[79]?.abbreviatedName + "") &&
            ye(q, ne);
        const we = {};
        oe[0] & 131128 && (we.primaryColour = a[79]?.primaryColourHex),
          oe[0] & 131128 && (we.secondaryColour = a[79]?.secondaryColourHex),
          oe[0] & 131128 && (we.thirdColour = a[79]?.thirdColourHex),
          j.$set(we),
          (!_e || oe[0] & 131096) &&
            I !== (I = (Number(a[76].value) / 4).toFixed(2) + "") &&
            ye($, I);
      },
      i(F) {
        _e ||
          (re(n.$$.fragment, F),
          re(f.$$.fragment, F),
          re(v),
          k && re(k.$$.fragment, F),
          re(j.$$.fragment, F),
          (_e = !0));
      },
      o(F) {
        de(n.$$.fragment, F),
          de(f.$$.fragment, F),
          de(v),
          k && de(k.$$.fragment, F),
          de(j.$$.fragment, F),
          (_e = !1);
      },
      d(F) {
        F && i(e), je(n), je(f), ee[p].d(), k && je(k), je(j), (ae = !1), Ve();
      },
    }
  );
}
function Mr(a) {
  let e, t, l, r, n;
  t = new Gs({ props: { className: "w-4 h-4 sm:w-7 sm:h-7 md:w-6 md:h-6" } });
  function m() {
    return a[43](a[76]);
  }
  return {
    c() {
      (e = h("button")), Le(t.$$.fragment), this.h();
    },
    l(c) {
      e = _(c, "BUTTON", { class: !0 });
      var f = u(e);
      Ye(t.$$.fragment, f), f.forEach(i), this.h();
    },
    h() {
      o(e, "class", "mb-1");
    },
    m(c, f) {
      K(c, e, f),
        Ue(t, e, null),
        (l = !0),
        r || ((n = Ee(e, "click", m)), (r = !0));
    },
    p(c, f) {
      a = c;
    },
    i(c) {
      l || (re(t.$$.fragment, c), (l = !0));
    },
    o(c) {
      de(t.$$.fragment, c), (l = !1);
    },
    d(c) {
      c && i(e), je(t), (r = !1), n();
    },
  };
}
function Br(a) {
  let e, t, l;
  return (
    (t = new As({
      props: { className: "w-4 h-4 sm:w-7 sm:h-7 md:w-6 md:h-6" },
    })),
    {
      c() {
        (e = h("span")), Le(t.$$.fragment), this.h();
      },
      l(r) {
        e = _(r, "SPAN", { class: !0 });
        var n = u(e);
        Ye(t.$$.fragment, n), n.forEach(i), this.h();
      },
      h() {
        o(e, "class", "mb-1");
      },
      m(r, n) {
        K(r, e, n), Ue(t, e, null), (l = !0);
      },
      p: Ne,
      i(r) {
        l || (re(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        de(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && i(e), je(t);
      },
    }
  );
}
function ws(a, e) {
  let t, l, r, n;
  const m = [Ar, Gr],
    c = [];
  function f(p, v) {
    return p[75] > 0 && p[76] ? 0 : 1;
  }
  function d(p, v) {
    return v === 0 ? wr(p) : p;
  }
  return (
    (l = f(e)),
    (r = c[l] = m[l](d(e, l))),
    {
      key: a,
      first: null,
      c() {
        (t = h("div")), r.c(), this.h();
      },
      l(p) {
        t = _(p, "DIV", { class: !0 });
        var v = u(t);
        r.l(v), v.forEach(i), this.h();
      },
      h() {
        o(
          t,
          "class",
          "flex flex-col justify-center items-center flex-1 mt-2 mb-2 sm:mb-6 md:mb-12 lg:mb-16 xl:mb-6 2xl:mb-12"
        ),
          (this.first = t);
      },
      m(p, v) {
        K(p, t, v), c[l].m(t, null), (n = !0);
      },
      p(p, v) {
        e = p;
        let b = l;
        (l = f(e)),
          l === b
            ? c[l].p(d(e, l), v)
            : (ot(),
              de(c[b], 1, 1, () => {
                c[b] = null;
              }),
              it(),
              (r = c[l]),
              r ? r.p(d(e, l), v) : ((r = c[l] = m[l](d(e, l))), r.c()),
              re(r, 1),
              r.m(t, null));
      },
      i(p) {
        n || (re(r), (n = !0));
      },
      o(p) {
        de(r), (n = !1);
      },
      d(p) {
        p && i(t), c[l].d();
      },
    }
  );
}
function xs(a) {
  let e,
    t = [],
    l = new Ms(),
    r,
    n,
    m = a[69];
  const c = (f) => f[78];
  for (let f = 0; f < m.length; f += 1) {
    let d = _s(a, m, f),
      p = c(d);
    l.set(p, (t[f] = ws(p, d)));
  }
  return {
    c() {
      e = h("div");
      for (let f = 0; f < t.length; f += 1) t[f].c();
      (r = P()), this.h();
    },
    l(f) {
      e = _(f, "DIV", { class: !0 });
      var d = u(e);
      for (let p = 0; p < t.length; p += 1) t[p].l(d);
      (r = N(d)), d.forEach(i), this.h();
    },
    h() {
      o(e, "class", "flex justify-around items-center w-full");
    },
    m(f, d) {
      K(f, e, d);
      for (let p = 0; p < t.length; p += 1) t[p] && t[p].m(e, null);
      s(e, r), (n = !0);
    },
    p(f, d) {
      (d[0] & 131128) | (d[1] & 57) &&
        ((m = f[69]),
        ot(),
        (t = Ts(t, d, c, 1, f, m, l, e, Ps, ws, r, _s)),
        it());
    },
    i(f) {
      if (!n) {
        for (let d = 0; d < m.length; d += 1) re(t[d]);
        n = !0;
      }
    },
    o(f) {
      for (let d = 0; d < t.length; d += 1) de(t[d]);
      n = !1;
    },
    d(f) {
      f && i(e);
      for (let d = 0; d < t.length; d += 1) t[d].d();
    },
  };
}
function Fr(a) {
  let e,
    t,
    l = a[16] && vs(a);
  return {
    c() {
      l && l.c(), (e = al());
    },
    l(r) {
      l && l.l(r), (e = al());
    },
    m(r, n) {
      l && l.m(r, n), K(r, e, n), (t = !0);
    },
    p(r, n) {
      r[16]
        ? l
          ? (l.p(r, n), n[0] & 65536 && re(l, 1))
          : ((l = vs(r)), l.c(), re(l, 1), l.m(e.parentNode, e))
        : l &&
          (ot(),
          de(l, 1, 1, () => {
            l = null;
          }),
          it());
    },
    i(r) {
      t || (re(l), (t = !0));
    },
    o(r) {
      de(l), (t = !1);
    },
    d(r) {
      l && l.d(r), r && i(e);
    },
  };
}
function Or(a) {
  let e, t;
  return (
    (e = new Fs({
      props: { $$slots: { default: [Fr] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        Le(e.$$.fragment);
      },
      l(l) {
        Ye(e.$$.fragment, l);
      },
      m(l, r) {
        Ue(e, l, r), (t = !0);
      },
      p(l, r) {
        const n = {};
        (r[0] & 4194303) | (r[2] & 8388608) &&
          (n.$$scope = { dirty: r, ctx: l }),
          e.$set(n);
      },
      i(l) {
        t || (re(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        de(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        je(e, l);
      },
    }
  );
}
function ks(a) {
  const e = a.split("-").map(Number);
  return [
    [1],
    ...e.map((l) =>
      Array(l)
        .fill(0)
        .map((r, n) => n + 1)
    ),
  ];
}
function Sr(a) {
  if (!a) return !1;
  const e = {},
    t = [
      a.hatTrickHeroGameweek,
      a.teamBoostGameweek,
      a.captainFantasticGameweek,
      a.braceBonusGameweek,
      a.passMasterGameweek,
      a.goalGetterGameweek,
      a.noEntryGameweek,
      a.safeHandsGameweek,
    ];
  for (const l of t)
    if (l !== 0 && ((e[l] = (e[l] || 0) + 1), e[l] > 1)) return !1;
  return !0;
}
const Es = (a) => a > 0,
  Is = (a) => a === 0,
  Cs = (a) => a === 0;
function Hr(a, e, t) {
  let l, r, n, m, c, f, d, p, v;
  const b = {
      "3-4-3": { positions: [0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3] },
      "3-5-2": { positions: [0, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3] },
      "4-3-3": { positions: [0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3] },
      "4-4-2": { positions: [0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3] },
      "4-5-1": { positions: [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3] },
      "5-4-1": { positions: [0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3] },
      "5-3-2": { positions: [0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3] },
    },
    E = nt(["3-4-3", "3-5-2", "4-3-3", "4-4-2", "4-5-1", "5-4-1", "5-3-2"]);
  il(a, E, (A) => t(21, (v = A)));
  let x = "-",
    g = -1,
    y = "-",
    w = "-",
    T = "00",
    k = "00",
    G = "00",
    D = "4-4-2",
    R = -1,
    B = -1,
    L = !0,
    Y = !1,
    ce = 0,
    S = !0,
    X = nt([]);
  il(a, X, (A) => t(5, (p = A)));
  let O = nt([]);
  il(a, O, (A) => t(4, (m = A)));
  let ne = nt(null);
  il(a, ne, (A) => t(39, (d = A)));
  let q = [],
    te = !1,
    j,
    le,
    M;
  const H = nt(null);
  il(a, H, (A) => t(3, (n = A)));
  const I = nt(S ? 1 / 0 : 3);
  il(a, I, (A) => t(20, (f = A)));
  const $ = nt(1200);
  il(a, $, (A) => t(19, (c = A))),
    ta(async () => {
      Ul.set(!0);
      try {
        await $l.sync(),
          await Tl.sync(),
          await Yl.sync(),
          (j = $l.subscribe((ue) => {
            ne.set(ue);
          })),
          (le = Tl.subscribe((ue) => {
            X.set(ue);
          })),
          (M = Yl.subscribe((ue) => {
            O.set(ue);
          }));
        const A = localStorage.getItem("viewMode");
        A && t(13, (L = A === "pitch"));
        let Z = await ea.getNextFixture(),
          ie = await Ga.getFantasyTeam();
        H.set(ie);
        let se = n?.principalId ?? "";
        se.length > 0 && ((S = !1), $.set(Number(ie.bankBalance))),
          g > 1 && se.length > 0 && I.set(ie.transfersAvailable),
          H.update((ue) =>
            ue && (!ue.playerIds || ue.playerIds.length !== 11)
              ? { ...ue, playerIds: new Uint16Array(11).fill(0) }
              : ue
          ),
          t(6, (y = Os(Number(Z?.kickOff)))),
          t(7, (w = Ql(Number(Z?.kickOff))));
        let fe = Ss(Number(Z?.kickOff));
        t(8, (T = fe.days.toString())),
          t(9, (k = fe.hours.toString())),
          t(10, (G = fe.minutes.toString()));
      } catch (A) {
        jl.show("Error fetching team details.", "error"),
          console.error("Error fetching team details:", A);
      } finally {
        Ul.set(!1), t(16, (te = !0));
      }
    }),
    la(() => {
      le?.(), M?.(), j?.();
    });
  function Q(A) {
    const Z = { 0: 0, 1: 0, 2: 0, 3: 0 };
    A.playerIds.forEach((ie) => {
      const se = m.find((fe) => fe.id === ie);
      se && Z[se.position]++;
    });
    for (const ie of Object.keys(b)) {
      const se = b[ie].positions;
      let fe = !0;
      const ue = se.reduce((ke, De) => ((ke[De] = (ke[De] || 0) + 1), ke), {});
      for (const ke in ue)
        if (ue[ke] !== Z[ke]) {
          fe = !1;
          break;
        }
      if (fe) return ie;
    }
    return console.error("No valid formation found for the team"), D;
  }
  function _e() {
    t(13, (L = !0)), localStorage.setItem("viewMode", "pitch");
  }
  function ae() {
    t(13, (L = !1)), localStorage.setItem("viewMode", "list");
  }
  function Ve(A, Z) {
    t(11, (R = A)), t(12, (B = Z)), t(14, (Y = !0));
  }
  function W() {
    t(14, (Y = !1));
  }
  function U(A) {
    if (n) {
      if (ee(A, n, D)) Ie(A, n, D);
      else {
        const Z = Me(n, A);
        F(n, Z), t(2, (D = Z)), Ie(A, n, Z);
      }
      !S && g > 1 && I.update((Z) => (Z > 0 ? Z - 1 : 0)),
        $.update((Z) => (Z - Number(A.value) > 0 ? Z - Number(A.value) : Z)),
        n.playerIds.includes(A.id) || q.push(A.id);
    }
  }
  function ee(A, Z, ie) {
    const se = { 0: 0, 1: 0, 2: 0, 3: 0 };
    Z.playerIds.forEach((ft) => {
      const Se = m.find((ut) => ut.id === ft);
      Se && se[Se.position]++;
    }),
      se[A.position]++;
    const [fe, ue, ke] = ie.split("-").map(Number),
      De = Math.max(0, fe - (se[1] || 0)),
      at = Math.max(0, ue - (se[2] || 0)),
      qe = Math.max(0, ke - (se[3] || 0)),
      lt = Math.max(0, 1 - (se[0] || 0)),
      Be = De + at + qe + lt;
    return Object.values(se).reduce((ft, Se) => ft + Se, 0) + Be <= 11;
  }
  function Ie(A, Z, ie) {
    const se = he(A.position, Z, ie);
    if (se === -1) {
      console.error("No available position to add the player.");
      return;
    }
    H.update((fe) => {
      if (!fe) return null;
      const ue = Uint16Array.from(fe.playerIds);
      return se < ue.length
        ? ((ue[se] = A.id), { ...fe, playerIds: ue })
        : (console.error(
            "Index out of bounds when attempting to add player to team."
          ),
          fe);
    }),
      we(n);
  }
  function he(A, Z, ie) {
    const se = b[ie].positions;
    for (let fe = 0; fe < se.length; fe++)
      if (se[fe] === A && Z.playerIds[fe] === 0) return fe;
    return -1;
  }
  function Me(A, Z) {
    const ie = { 0: 0, 1: 0, 2: 0, 3: 0 };
    A.playerIds.forEach((ue) => {
      const ke = m.find((De) => De.id === ue);
      ke && ie[ke.position]++;
    }),
      ie[Z.position]++;
    let se = null,
      fe = Number.MAX_SAFE_INTEGER;
    for (const ue of Object.keys(b)) {
      if (ue === D) continue;
      const ke = b[ue].positions;
      let De = { 0: 0, 1: 0, 2: 0, 3: 0 };
      ke.forEach((qe) => {
        De[qe]++;
      });
      const at = Object.keys(De).reduce((qe, lt) => {
        const Be = parseInt(lt);
        return qe + Math.max(0, De[Be] - ie[Be]);
      }, 0);
      at < fe && De[Z.position] > ie[Z.position] - 1 && ((se = ue), (fe = at));
    }
    return se || (console.error("No valid formation found for the player"), D);
  }
  function F(A, Z) {
    const ie = b[Z].positions;
    let se = new Array(11).fill(0);
    A.playerIds.forEach((fe) => {
      const ue = m.find((ke) => ke.id === fe);
      if (ue) {
        for (let ke = 0; ke < ie.length; ke++)
          if (ie[ke] === ue.position && se[ke] === 0) {
            se[ke] = fe;
            break;
          }
      }
    }),
      (A.playerIds = se);
  }
  function oe(A, Z) {
    return l.slice(0, A).reduce((se, fe) => se + fe.length, 0) + Z;
  }
  function Ce(A) {
    t(11, (R = -1)),
      t(12, (B = -1)),
      H.update((Z) => {
        if (!Z) return null;
        const ie = Z.playerIds.indexOf(A);
        if (ie === -1) return console.error("Player not found in the team."), Z;
        const se = Uint16Array.from(Z.playerIds);
        return (
          (se[ie] = 0),
          q.includes(A) &&
            (!S && g > 1 && I.update((fe) => fe + 1),
            (q = q.filter((fe) => fe !== A))),
          $.update((fe) => fe + Number(m.find((ue) => ue.id === A)?.value)),
          { ...Z, playerIds: se }
        );
      }),
      we(n);
  }
  function be(A) {
    t(11, (R = -1)),
      t(12, (B = -1)),
      H.update((Z) => (Z ? { ...Z, captainId: A } : null));
  }
  function we(A) {
    if (
      !A.captainId ||
      A.captainId === 0 ||
      !A.playerIds.includes(A.captainId)
    ) {
      const Z = Ke(A);
      be(Z);
    }
  }
  function Ke(A) {
    let Z = 0,
      ie = 0;
    return (
      A.playerIds.forEach((se) => {
        const fe = m.find((ue) => ue.id === se);
        fe && Number(fe.value) > Z && ((Z = Number(fe.value)), (ie = se));
      }),
      ie
    );
  }
  function Te() {
    if (!n || !n.playerIds) return;
    const A = Hs(m, n);
    E.set(A);
  }
  function xe() {
    const A = n;
    if (A) {
      let Z = 0;
      A.playerIds.forEach((ie) => {
        const se = m.find((fe) => fe.id === ie);
        se && (Z += Number(se.value));
      }),
        t(15, (ce = Z / 4));
    }
  }
  function Re() {
    const A = new Map();
    for (const Z of n?.playerIds || [])
      if (Z > 0) {
        const ie = m.find((se) => se.id === Z);
        if (
          ie &&
          (A.set(ie.teamId, (A.get(ie.teamId) || 0) + 1), A.get(ie.teamId) > 2)
        )
          return !1;
      }
    return !(
      !Sr(n) ||
      n?.playerIds.filter((Z) => Z > 0).length !== 11 ||
      c < 0 ||
      f < 0 ||
      !$e(n, D)
    );
  }
  function $e(A, Z) {
    const ie = { 0: 0, 1: 0, 2: 0, 3: 0 };
    A.playerIds.forEach((Ze) => {
      const ft = m.find((Se) => Se.id === Ze);
      ft && ie[ft.position]++;
    });
    const [se, fe, ue] = Z.split("-").map(Number),
      ke = Math.max(0, se - (ie[1] || 0)),
      De = Math.max(0, fe - (ie[2] || 0)),
      at = Math.max(0, ue - (ie[3] || 0)),
      qe = Math.max(0, 1 - (ie[0] || 0)),
      lt = ke + De + at + qe;
    return Object.values(ie).reduce((Ze, ft) => Ze + ft, 0) + lt <= 11;
  }
  function Oe() {
    if (!n || !m) return;
    let A = { ...n, playerIds: new Uint16Array(11) },
      Z = c;
    const ie = new Map();
    A.playerIds.forEach((ue) => {
      if (ue > 0) {
        const ke = m.find((De) => De.id === ue);
        ke && ie.set(ke.teamId, (ie.get(ke.teamId) || 0) + 1);
      }
    });
    let se = Array.from(new Set(m.map((ue) => ue.teamId))).filter(
      (ue) => ue > 0
    );
    se.sort(() => Math.random() - 0.5),
      b[D].positions.forEach((ue, ke) => {
        if (Z <= 0 || se.length === 0) return;
        const De = se.shift();
        if (De === void 0) return;
        const at = m.filter(
          (Be) =>
            Be.position === ue &&
            Be.teamId === De &&
            !A.playerIds.includes(Be.id) &&
            (ie.get(Be.teamId) || 0) < 1
        );
        at.sort((Be, Ze) => Number(Be.value) - Number(Ze.value));
        const qe = at.slice(0, Math.ceil(at.length / 2)),
          lt = qe[Math.floor(Math.random() * qe.length)];
        if (lt) {
          const Be = Z - Number(lt.value);
          if (Be < 0) return;
          (A.playerIds[ke] = lt.id),
            (Z = Be),
            ie.set(lt.teamId, (ie.get(lt.teamId) || 0) + 1);
        }
      }),
      Z >= 0 && (H.set(A), $.set(Z));
  }
  async function We() {
    Pa.set("Saving Fantasy Team"), Ul.set(!0);
    let A = n;
    (A?.captainId === 0 || !A?.playerIds.includes(A?.captainId)) &&
      (A.captainId = Ke(A)),
      A?.safeHandsGameweek === g &&
        A?.safeHandsPlayerId !== A?.playerIds[0] &&
        (A.safeHandsPlayerId = A?.playerIds[0]),
      A?.captainFantasticGameweek === g &&
        A?.captainFantasticPlayerId !== A?.captainId &&
        (A.captainFantasticPlayerId = A?.captainId);
    try {
      await Ga.saveFantasyTeam(A, g),
        jl.show("Team saved successully!", "success");
    } catch (Z) {
      jl.show("Error saving team.", "error"),
        console.error("Error saving team:", Z);
    } finally {
      Ul.set(!1), Pa.set("Loading");
    }
  }
  function et() {
    (D = fl(this)), t(2, D), t(3, n);
  }
  const tt = (A, Z) => Z.id === A.teamId,
    Fe = (A) => Ce(A.id),
    bt = (A) => be(A.id),
    Ut = (A, Z) => Ve(A, Z),
    gt = (A, Z) => Z.id === A,
    yt = (A) => be(A.id),
    $t = (A) => Ce(A.id),
    Vt = (A, Z) => Ve(A, Z),
    Nt = (A, Z) => Z.id === A,
    ct = (A, Z) => Z.id === A?.teamId;
  return (
    (a.$$.update = () => {
      if (a.$$.dirty[0] & 12 && n) {
        ks(D);
        const A = Q(n);
        t(2, (D = A));
      }
      a.$$.dirty[0] & 4 && t(17, (l = ks(D))),
        a.$$.dirty[0] & 8 && O && n && (Te(), xe()),
        (a.$$.dirty[0] & 56) | (a.$$.dirty[1] & 256) &&
          t(18, (r = d && p && m && n ? Re() : !1)),
        (a.$$.dirty[0] & 3) | (a.$$.dirty[1] & 256) &&
          d &&
          (t(0, (x = d?.activeSeason.name ?? x)),
          t(1, (g = d?.activeGameweek ?? g)));
    }),
    [
      x,
      g,
      D,
      n,
      m,
      p,
      y,
      w,
      T,
      k,
      G,
      R,
      B,
      L,
      Y,
      ce,
      te,
      l,
      r,
      c,
      f,
      v,
      E,
      X,
      O,
      ne,
      H,
      I,
      $,
      _e,
      ae,
      Ve,
      W,
      U,
      oe,
      Ce,
      be,
      Oe,
      We,
      d,
      et,
      tt,
      Fe,
      bt,
      Ut,
      gt,
      yt,
      $t,
      Vt,
      Nt,
      ct,
    ]
  );
}
class Xr extends St {
  constructor(e) {
    super(), Ht(this, e, Hr, Or, Lt, {}, null, [-1, -1, -1]);
  }
}
export { Xr as component };
