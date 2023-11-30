import { B as Al } from "../chunks/BadgeIcon.5f1570c4.js";
import { f as ea } from "../chunks/fixture-store.724d0928.js";
import { w as tl } from "../chunks/index.8caf67b2.js";
import {
  $ as cl,
  A as Oe,
  a as V,
  a0 as pe,
  a1 as ve,
  a2 as Ta,
  a3 as Va,
  a4 as Ps,
  a5 as Bs,
  b as $,
  B as Se,
  c as P,
  d as fe,
  e as al,
  f as ct,
  g as re,
  G as s,
  H as Ae,
  h as i,
  i as Ht,
  I as Ll,
  J as ul,
  k as m,
  K as xt,
  l as h,
  L as we,
  M as Et,
  m as u,
  n,
  N as Xl,
  O as aa,
  o as la,
  P as fl,
  p as ot,
  q as C,
  Q as Tl,
  R as Jl,
  r as T,
  s as Lt,
  S as St,
  T as Ql,
  u as ge,
  U as Rl,
  V as Cl,
  v as it,
  W as Yl,
  x as Pa,
  X as Ts,
  y as Fe,
  Y as ze,
  z as Le,
  Z as Vs,
} from "../chunks/index.c7b38e5e.js";
import { a as Fs, i as Ul, l as Na } from "../chunks/Layout.a538b3b7.js";
import { m as Aa } from "../chunks/manager-store.9ce96d4b.js";
import { p as Zl } from "../chunks/player-store.1ed81bd6.js";
import { S as Ls } from "../chunks/ShirtIcon.cbb688e3.js";
import { s as Wl } from "../chunks/system-store.28344883.js";
import {
  a as Da,
  b as Os,
  c as Ss,
  f as ta,
  g as Ga,
  h as Hs,
  t as ll,
} from "../chunks/team-store.90511bc6.js";
import { t as jl } from "../chunks/toast-store.58fa49f6.js";
var $e = ((a) => (
  (a[(a.AUTOMATIC = 0)] = "AUTOMATIC"),
  (a[(a.PLAYER = 1)] = "PLAYER"),
  (a[(a.TEAM = 2)] = "TEAM"),
  (a[(a.COUNTRY = 3)] = "COUNTRY"),
  a
))($e || {});
function Ma(a, e, t) {
  const l = a.slice();
  return (l[26] = e[t]), l;
}
function Ba(a, e, t) {
  const l = a.slice();
  return (l[29] = e[t]), l;
}
function Fa(a, e, t) {
  const l = a.slice();
  return (l[32] = e[t]), l;
}
function Oa(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c,
    f,
    d = a[3].name + "",
    _,
    v,
    b,
    I,
    y = a[3].description + "",
    x,
    E,
    g,
    k,
    w,
    N,
    B,
    j,
    F,
    Z,
    q,
    oe,
    L,
    R,
    O,
    ne,
    G,
    M,
    Y,
    te,
    D,
    W,
    X = a[3].selectionType === $e.PLAYER && Sa(a),
    ee = a[3].selectionType === $e.COUNTRY && La(a),
    ae = a[3].selectionType === $e.TEAM && ja(a);
  return {
    c() {
      (e = m("div")),
        (t = m("div")),
        (l = m("img")),
        (p = V()),
        (c = m("div")),
        (f = m("h3")),
        (_ = C(d)),
        (v = V()),
        (b = m("div")),
        (I = m("p")),
        (x = C(y)),
        (E = V()),
        X && X.c(),
        (g = V()),
        ee && ee.c(),
        (k = V()),
        ae && ae.c(),
        (w = V()),
        (N = m("div")),
        (B = m("p")),
        (j = C("Warning")),
        (F = V()),
        (Z = m("p")),
        (q =
          C(`Your bonus will be activated when you save your team and it cannot
            be reversed. A bonus can only be played once per season.`)),
        (oe = V()),
        (L = m("div")),
        (R = m("button")),
        (O = C("Cancel")),
        (ne = V()),
        (G = m("button")),
        (M = C("Use")),
        this.h();
    },
    l(H) {
      e = h(H, "DIV", { class: !0 });
      var J = u(e);
      t = h(J, "DIV", { class: !0 });
      var be = u(t);
      (l = h(be, "IMG", { src: !0, class: !0, alt: !0 })),
        (p = P(be)),
        (c = h(be, "DIV", { class: !0 }));
      var U = u(c);
      f = h(U, "H3", { class: !0 });
      var S = u(f);
      (_ = T(S, d)), S.forEach(i), (v = P(U)), (b = h(U, "DIV", { class: !0 }));
      var le = u(b);
      I = h(le, "P", { class: !0 });
      var Ee = u(I);
      (x = T(Ee, y)),
        Ee.forEach(i),
        le.forEach(i),
        (E = P(U)),
        X && X.l(U),
        (g = P(U)),
        ee && ee.l(U),
        (k = P(U)),
        ae && ae.l(U),
        (w = P(U)),
        (N = h(U, "DIV", { class: !0, role: !0 }));
      var de = u(N);
      B = h(de, "P", { class: !0 });
      var Ve = u(B);
      (j = T(Ve, "Warning")),
        Ve.forEach(i),
        (F = P(de)),
        (Z = h(de, "P", { class: !0 }));
      var ce = u(Z);
      (q = T(
        ce,
        `Your bonus will be activated when you save your team and it cannot
            be reversed. A bonus can only be played once per season.`
      )),
        ce.forEach(i),
        de.forEach(i),
        (oe = P(U)),
        (L = h(U, "DIV", { class: !0 }));
      var ue = u(L);
      R = h(ue, "BUTTON", { class: !0 });
      var Ne = u(R);
      (O = T(Ne, "Cancel")),
        Ne.forEach(i),
        (ne = P(ue)),
        (G = h(ue, "BUTTON", { class: !0 }));
      var Te = u(G);
      (M = T(Te, "Use")),
        Te.forEach(i),
        ue.forEach(i),
        U.forEach(i),
        be.forEach(i),
        J.forEach(i),
        this.h();
    },
    h() {
      cl(l.src, (r = a[3].image)) || n(l, "src", r),
        n(l, "class", "w-16 mx-auto block"),
        n(l, "alt", (o = a[3].name)),
        n(f, "class", "text-lg leading-6 font-medium"),
        n(I, "class", "text-sm"),
        n(b, "class", "mt-2 px-7 py-3"),
        n(B, "class", "font-bold text-sm"),
        n(Z, "class", "font-bold text-xs"),
        n(
          N,
          "class",
          "bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-2"
        ),
        n(N, "role", "alert"),
        n(
          R,
          "class",
          "px-4 py-2 fpl-cancel-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        n(
          G,
          "class",
          (Y =
            Rl(
              `px-4 py-2 ${
                a[8] ? "fpl-purple-btn" : "bg-gray-500"
              } text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`
            ) + " svelte-1fl295u")
        ),
        (G.disabled = te = !a[8]),
        n(L, "class", "items-center py-3 flex space-x-4"),
        n(c, "class", "mt-3 text-center"),
        n(
          t,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"
        ),
        n(
          e,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop svelte-1fl295u"
        );
    },
    m(H, J) {
      $(H, e, J),
        s(e, t),
        s(t, l),
        s(t, p),
        s(t, c),
        s(c, f),
        s(f, _),
        s(c, v),
        s(c, b),
        s(b, I),
        s(I, x),
        s(c, E),
        X && X.m(c, null),
        s(c, g),
        ee && ee.m(c, null),
        s(c, k),
        ae && ae.m(c, null),
        s(c, w),
        s(c, N),
        s(N, B),
        s(B, j),
        s(N, F),
        s(N, Z),
        s(Z, q),
        s(c, oe),
        s(c, L),
        s(L, R),
        s(R, O),
        s(L, ne),
        s(L, G),
        s(G, M),
        D ||
          ((W = [
            we(R, "click", function () {
              Tl(a[2]) && a[2].apply(this, arguments);
            }),
            we(G, "click", a[11]),
            we(t, "click", Jl(a[16])),
            we(t, "keydown", a[12]),
            we(e, "click", function () {
              Tl(a[2]) && a[2].apply(this, arguments);
            }),
            we(e, "keydown", a[12]),
          ]),
          (D = !0));
    },
    p(H, J) {
      (a = H),
        J[0] & 8 && !cl(l.src, (r = a[3].image)) && n(l, "src", r),
        J[0] & 8 && o !== (o = a[3].name) && n(l, "alt", o),
        J[0] & 8 && d !== (d = a[3].name + "") && ge(_, d),
        J[0] & 8 && y !== (y = a[3].description + "") && ge(x, y),
        a[3].selectionType === $e.PLAYER
          ? X
            ? X.p(a, J)
            : ((X = Sa(a)), X.c(), X.m(c, g))
          : X && (X.d(1), (X = null)),
        a[3].selectionType === $e.COUNTRY
          ? ee
            ? ee.p(a, J)
            : ((ee = La(a)), ee.c(), ee.m(c, k))
          : ee && (ee.d(1), (ee = null)),
        a[3].selectionType === $e.TEAM
          ? ae
            ? ae.p(a, J)
            : ((ae = ja(a)), ae.c(), ae.m(c, w))
          : ae && (ae.d(1), (ae = null)),
        J[0] & 256 &&
          Y !==
            (Y =
              Rl(
                `px-4 py-2 ${
                  a[8] ? "fpl-purple-btn" : "bg-gray-500"
                } text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`
              ) + " svelte-1fl295u") &&
          n(G, "class", Y),
        J[0] & 256 && te !== (te = !a[8]) && (G.disabled = te);
    },
    d(H) {
      H && i(e), X && X.d(), ee && ee.d(), ae && ae.d(), (D = !1), Xl(W);
    },
  };
}
function Sa(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c = a[10],
    f = [];
  for (let d = 0; d < c.length; d += 1) f[d] = Ha(Fa(a, c, d));
  return {
    c() {
      (e = m("div")),
        (t = m("select")),
        (l = m("option")),
        (r = C("Select Player"));
      for (let d = 0; d < f.length; d += 1) f[d].c();
      this.h();
    },
    l(d) {
      e = h(d, "DIV", { class: !0 });
      var _ = u(e);
      t = h(_, "SELECT", { class: !0 });
      var v = u(t);
      l = h(v, "OPTION", {});
      var b = u(l);
      (r = T(b, "Select Player")), b.forEach(i);
      for (let I = 0; I < f.length; I += 1) f[I].l(v);
      v.forEach(i), _.forEach(i), this.h();
    },
    h() {
      (l.__value = 0),
        (l.value = l.__value),
        n(t, "class", "w-full p-2 rounded-md fpl-dropdown"),
        a[5] === void 0 && ul(() => a[17].call(t)),
        n(e, "class", "w-full border border-gray-500 my-4");
    },
    m(d, _) {
      $(d, e, _), s(e, t), s(t, l), s(l, r);
      for (let v = 0; v < f.length; v += 1) f[v] && f[v].m(t, null);
      xt(t, a[5], !0), o || ((p = we(t, "change", a[17])), (o = !0));
    },
    p(d, _) {
      if (_[0] & 1024) {
        c = d[10];
        let v;
        for (v = 0; v < c.length; v += 1) {
          const b = Fa(d, c, v);
          f[v] ? f[v].p(b, _) : ((f[v] = Ha(b)), f[v].c(), f[v].m(t, null));
        }
        for (; v < f.length; v += 1) f[v].d(1);
        f.length = c.length;
      }
      _[0] & 1056 && xt(t, d[5]);
    },
    d(d) {
      d && i(e), Et(f, d), (o = !1), p();
    },
  };
}
function Ha(a) {
  let e,
    t = a[32].name + "",
    l,
    r;
  return {
    c() {
      (e = m("option")), (l = C(t)), this.h();
    },
    l(o) {
      e = h(o, "OPTION", {});
      var p = u(e);
      (l = T(p, t)), p.forEach(i), this.h();
    },
    h() {
      (e.__value = r = a[32].id), (e.value = e.__value);
    },
    m(o, p) {
      $(o, e, p), s(e, l);
    },
    p(o, p) {
      p[0] & 1024 && t !== (t = o[32].name + "") && ge(l, t),
        p[0] & 1024 &&
          r !== (r = o[32].id) &&
          ((e.__value = r), (e.value = e.__value));
    },
    d(o) {
      o && i(e);
    },
  };
}
function La(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c = a[7],
    f = [];
  for (let d = 0; d < c.length; d += 1) f[d] = Ua(Ba(a, c, d));
  return {
    c() {
      (e = m("div")),
        (t = m("select")),
        (l = m("option")),
        (r = C("Select Country"));
      for (let d = 0; d < f.length; d += 1) f[d].c();
      this.h();
    },
    l(d) {
      e = h(d, "DIV", { class: !0 });
      var _ = u(e);
      t = h(_, "SELECT", { class: !0 });
      var v = u(t);
      l = h(v, "OPTION", {});
      var b = u(l);
      (r = T(b, "Select Country")), b.forEach(i);
      for (let I = 0; I < f.length; I += 1) f[I].l(v);
      v.forEach(i), _.forEach(i), this.h();
    },
    h() {
      (l.__value = 0),
        (l.value = l.__value),
        n(t, "class", "w-full p-2 rounded-md fpl-dropdown"),
        a[6] === void 0 && ul(() => a[18].call(t)),
        n(e, "class", "w-full border border-gray-500 my-4");
    },
    m(d, _) {
      $(d, e, _), s(e, t), s(t, l), s(l, r);
      for (let v = 0; v < f.length; v += 1) f[v] && f[v].m(t, null);
      xt(t, a[6], !0), o || ((p = we(t, "change", a[18])), (o = !0));
    },
    p(d, _) {
      if (_[0] & 128) {
        c = d[7];
        let v;
        for (v = 0; v < c.length; v += 1) {
          const b = Ba(d, c, v);
          f[v] ? f[v].p(b, _) : ((f[v] = Ua(b)), f[v].c(), f[v].m(t, null));
        }
        for (; v < f.length; v += 1) f[v].d(1);
        f.length = c.length;
      }
      _[0] & 192 && xt(t, d[6]);
    },
    d(d) {
      d && i(e), Et(f, d), (o = !1), p();
    },
  };
}
function Ua(a) {
  let e,
    t = a[29] + "",
    l,
    r;
  return {
    c() {
      (e = m("option")), (l = C(t)), this.h();
    },
    l(o) {
      e = h(o, "OPTION", {});
      var p = u(e);
      (l = T(p, t)), p.forEach(i), this.h();
    },
    h() {
      (e.__value = r = a[29]), (e.value = e.__value);
    },
    m(o, p) {
      $(o, e, p), s(e, l);
    },
    p(o, p) {
      p[0] & 128 && t !== (t = o[29] + "") && ge(l, t),
        p[0] & 128 &&
          r !== (r = o[29]) &&
          ((e.__value = r), (e.value = e.__value));
    },
    d(o) {
      o && i(e);
    },
  };
}
function ja(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c = a[9],
    f = [];
  for (let d = 0; d < c.length; d += 1) f[d] = Ra(Ma(a, c, d));
  return {
    c() {
      (e = m("div")),
        (t = m("select")),
        (l = m("option")),
        (r = C("Select Team"));
      for (let d = 0; d < f.length; d += 1) f[d].c();
      this.h();
    },
    l(d) {
      e = h(d, "DIV", { class: !0 });
      var _ = u(e);
      t = h(_, "SELECT", { class: !0 });
      var v = u(t);
      l = h(v, "OPTION", {});
      var b = u(l);
      (r = T(b, "Select Team")), b.forEach(i);
      for (let I = 0; I < f.length; I += 1) f[I].l(v);
      v.forEach(i), _.forEach(i), this.h();
    },
    h() {
      (l.__value = 0),
        (l.value = l.__value),
        n(t, "class", "w-full p-2 rounded-md fpl-dropdown"),
        a[4] === void 0 && ul(() => a[19].call(t)),
        n(e, "class", "w-full border border-gray-500 my-4");
    },
    m(d, _) {
      $(d, e, _), s(e, t), s(t, l), s(l, r);
      for (let v = 0; v < f.length; v += 1) f[v] && f[v].m(t, null);
      xt(t, a[4], !0), o || ((p = we(t, "change", a[19])), (o = !0));
    },
    p(d, _) {
      if (_[0] & 512) {
        c = d[9];
        let v;
        for (v = 0; v < c.length; v += 1) {
          const b = Ma(d, c, v);
          f[v] ? f[v].p(b, _) : ((f[v] = Ra(b)), f[v].c(), f[v].m(t, null));
        }
        for (; v < f.length; v += 1) f[v].d(1);
        f.length = c.length;
      }
      _[0] & 528 && xt(t, d[4]);
    },
    d(d) {
      d && i(e), Et(f, d), (o = !1), p();
    },
  };
}
function Ra(a) {
  let e,
    t = a[26].name + "",
    l,
    r;
  return {
    c() {
      (e = m("option")), (l = C(t)), this.h();
    },
    l(o) {
      e = h(o, "OPTION", {});
      var p = u(e);
      (l = T(p, t)), p.forEach(i), this.h();
    },
    h() {
      (e.__value = r = a[26].id), (e.value = e.__value);
    },
    m(o, p) {
      $(o, e, p), s(e, l);
    },
    p(o, p) {
      p[0] & 512 && t !== (t = o[26].name + "") && ge(l, t),
        p[0] & 512 &&
          r !== (r = o[26].id) &&
          ((e.__value = r), (e.value = e.__value));
    },
    d(o) {
      o && i(e);
    },
  };
}
function Us(a) {
  let e,
    t = a[1] && Oa(a);
  return {
    c() {
      t && t.c(), (e = al());
    },
    l(l) {
      t && t.l(l), (e = al());
    },
    m(l, r) {
      t && t.m(l, r), $(l, e, r);
    },
    p(l, r) {
      l[1]
        ? t
          ? t.p(l, r)
          : ((t = Oa(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Ae,
    o: Ae,
    d(l) {
      t && t.d(l), l && i(e);
    },
  };
}
function js(a, e, t) {
  let l,
    r,
    o,
    p,
    c = Ae,
    f = () => (c(), (c = Ts(d, (G) => t(20, (p = G)))), d);
  a.$$.on_destroy.push(() => c());
  let { fantasyTeam: d = tl(null) } = e;
  f();
  let { players: _ } = e,
    { teams: v } = e,
    { activeGameweek: b } = e,
    { showModal: I } = e,
    { closeBonusModal: y } = e,
    {
      bonus: x = {
        id: 0,
        name: "",
        description: "",
        image: "",
        selectionType: 0,
      },
    } = e,
    E,
    g = 0,
    k = 0,
    w = "";
  const N = () => {
      const G = ze(d);
      if (!G || !G.playerIds) return [];
      const M = new Set(G.playerIds),
        Y = _.filter((te) => M.has(te.id)).map((te) => te.nationality);
      return [...new Set(Y)].sort();
    },
    B = () =>
      _.filter((G) => j(G.id)).map((G) => ({
        id: G.id,
        name: `${G.firstName} ${G.lastName}`,
      })),
    j = (G) => {
      const M = ze(d);
      return M ? M.playerIds && M.playerIds.includes(G) : !1;
    },
    F = () => {
      const G = new Set(_.filter((M) => j(M.id)).map((M) => M.teamId));
      return v
        .filter((M) => G.has(M.id))
        .map((M) => ({ id: M.id, name: M.friendlyName }));
    },
    Z = () => {
      const G = ze(d);
      if (!G || !G.playerIds) return 0;
      for (const M of G.playerIds) {
        const Y = _.find((te) => te.id === M);
        if (Y && Y.position === 0) return Y.id;
      }
      return 0;
    };
  function q() {
    if (ze(d)) {
      switch (x.id) {
        case 1:
          d.update(
            (M) =>
              M && {
                ...M,
                goalGetterPlayerId: k,
                goalGetterGameweek: b,
                playerIds: M.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 2:
          d.update(
            (M) =>
              M && {
                ...M,
                passMasterPlayerId: k,
                passMasterGameweek: b,
                playerIds: M.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 3:
          d.update(
            (M) =>
              M && {
                ...M,
                noEntryPlayerId: g,
                noEntryGameweek: b,
                playerIds: M.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 4:
          d.update(
            (M) =>
              M && {
                ...M,
                teamBoostTeamId: g,
                teamBoostGameweek: b,
                playerIds: M.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 5:
          d.update(
            (M) =>
              M && {
                ...M,
                safeHandsGameweek: b,
                safeHandsPlayerId: Z(),
                playerIds: M.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 6:
          d.update(
            (M) =>
              M && {
                ...M,
                captainFantasticPlayerId: p?.captainId ?? 0,
                captainFantasticGameweek: b,
                playerIds: M.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 7:
          break;
        case 8:
          break;
        case 9:
          d.update(
            (M) =>
              M && {
                ...M,
                braceBonusGameweek: b,
                playerIds: M.playerIds || new Uint16Array(11),
              }
          );
          break;
        case 10:
          d.update(
            (M) =>
              M && {
                ...M,
                hatTrickHeroGameweek: b,
                playerIds: M.playerIds || new Uint16Array(11),
              }
          );
          break;
      }
      y();
    }
  }
  function oe(G) {
    !(G.target instanceof HTMLInputElement) && G.key === "Escape" && y();
  }
  function L(G) {
    Ql.call(this, a, G);
  }
  function R() {
    (k = fl(this)), t(5, k), t(10, l);
  }
  function O() {
    (w = fl(this)), t(6, w), t(7, E);
  }
  function ne() {
    (g = fl(this)), t(4, g), t(9, r);
  }
  return (
    (a.$$set = (G) => {
      "fantasyTeam" in G && f(t(0, (d = G.fantasyTeam))),
        "players" in G && t(13, (_ = G.players)),
        "teams" in G && t(14, (v = G.teams)),
        "activeGameweek" in G && t(15, (b = G.activeGameweek)),
        "showModal" in G && t(1, (I = G.showModal)),
        "closeBonusModal" in G && t(2, (y = G.closeBonusModal)),
        "bonus" in G && t(3, (x = G.bonus));
    }),
    (a.$$.update = () => {
      a.$$.dirty[0] & 120 &&
        t(
          8,
          (o = (() => {
            switch (x.selectionType) {
              case $e.PLAYER:
                return k !== 0;
              case $e.TEAM:
                return g !== 0;
              case $e.COUNTRY:
                return w !== "";
              default:
                return !0;
            }
          })())
        );
    }),
    t(7, (E = N())),
    t(10, (l = B())),
    t(9, (r = F())),
    [d, I, y, x, g, k, w, E, o, r, l, q, oe, _, v, b, L, R, O, ne]
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
          players: 13,
          teams: 14,
          activeGameweek: 15,
          showModal: 1,
          closeBonusModal: 2,
          bonus: 3,
        },
        null,
        [-1, -1]
      );
  }
}
function Ya(a, e, t) {
  const l = a.slice();
  return (l[15] = e[t]), l;
}
function Wa(a, e, t) {
  const l = a.slice();
  return (l[15] = e[t]), l;
}
function Za(a) {
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
        Fe(e.$$.fragment);
      },
      l(l) {
        Le(e.$$.fragment, l);
      },
      m(l, r) {
        Oe(e, l, r), (t = !0);
      },
      p(l, r) {
        const o = {};
        r & 16 && (o.showModal = l[4]),
          r & 32 && (o.bonus = l[6][l[5] - 1]),
          r & 2 && (o.players = l[1]),
          r & 4 && (o.teams = l[2]),
          r & 1 && (o.fantasyTeam = l[0]),
          r & 8 && (o.activeGameweek = l[3]),
          e.$set(o);
      },
      i(l) {
        t || (re(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        fe(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        Se(e, l);
      },
    }
  );
}
function Ys(a) {
  let e, t, l;
  return {
    c() {
      (e = m("div")), (t = m("p")), (l = C("1 Per Week")), this.h();
    },
    l(r) {
      e = h(r, "DIV", { class: !0 });
      var o = u(e);
      t = h(o, "P", { class: !0 });
      var p = u(t);
      (l = T(p, "1 Per Week")), p.forEach(i), o.forEach(i), this.h();
    },
    h() {
      n(t, "class", "text-center text-xxs md:text-base xl:text-xs xl:mt-1"),
        n(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4 xl:min-h-[30px]");
    },
    m(r, o) {
      $(r, e, o), s(e, t), s(t, l);
    },
    p: Ae,
    d(r) {
      r && i(e);
    },
  };
}
function Ws(a) {
  let e, t, l, r, o;
  function p() {
    return a[13](a[15]);
  }
  return {
    c() {
      (e = m("div")), (t = m("button")), (l = C("Use")), this.h();
    },
    l(c) {
      e = h(c, "DIV", { class: !0 });
      var f = u(e);
      t = h(f, "BUTTON", { class: !0 });
      var d = u(t);
      (l = T(d, "Use")), d.forEach(i), f.forEach(i), this.h();
    },
    h() {
      n(
        t,
        "class",
        "fpl-purple-btn rounded-md w-full text-xs py-1 min-h-[30px] md:text-base"
      ),
        n(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4");
    },
    m(c, f) {
      $(c, e, f), s(e, t), s(t, l), r || ((o = we(t, "click", p)), (r = !0));
    },
    p(c, f) {
      a = c;
    },
    d(c) {
      c && i(e), (r = !1), o();
    },
  };
}
function Zs(a) {
  let e,
    t,
    l,
    r = a[11](a[15].id) + "",
    o;
  return {
    c() {
      (e = m("div")), (t = m("p")), (l = C("Used GW")), (o = C(r)), this.h();
    },
    l(p) {
      e = h(p, "DIV", { class: !0 });
      var c = u(e);
      t = h(c, "P", { class: !0 });
      var f = u(t);
      (l = T(f, "Used GW")),
        (o = T(f, r)),
        f.forEach(i),
        c.forEach(i),
        this.h();
    },
    h() {
      n(t, "class", "text-center text-xxs md:text-base xl:text-xs xl:mt-1"),
        n(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4 xl:min-h-[30px]");
    },
    m(p, c) {
      $(p, e, c), s(e, t), s(t, l), s(t, o);
    },
    p: Ae,
    d(p) {
      p && i(e);
    },
  };
}
function qa(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c,
    f = a[15].name + "",
    d,
    _,
    v;
  function b(x, E) {
    return x[11](x[15].id) ? Zs : x[12]() ? Ys : Ws;
  }
  let y = b(a)(a);
  return {
    c() {
      (e = m("div")),
        (t = m("div")),
        (l = m("img")),
        (o = V()),
        (p = m("div")),
        (c = m("p")),
        (d = C(f)),
        (_ = V()),
        y.c(),
        (v = V()),
        this.h();
    },
    l(x) {
      e = h(x, "DIV", { class: !0 });
      var E = u(e);
      t = h(E, "DIV", { class: !0 });
      var g = u(t);
      (l = h(g, "IMG", { alt: !0, src: !0, class: !0 })),
        (o = P(g)),
        (p = h(g, "DIV", { class: !0 }));
      var k = u(p);
      c = h(k, "P", { class: !0 });
      var w = u(c);
      (d = T(w, f)),
        w.forEach(i),
        k.forEach(i),
        (_ = P(g)),
        y.l(g),
        g.forEach(i),
        (v = P(E)),
        E.forEach(i),
        this.h();
    },
    h() {
      n(l, "alt", a[15].name),
        cl(l.src, (r = a[15].image)) || n(l, "src", r),
        n(l, "class", "h-12 m-2 mt-4 md:h-24 xl:h-20"),
        n(
          c,
          "class",
          "text-center text-xxs sm:text-xs md:text-base font-bold xl:text-sm xl:min-h-[40px]"
        ),
        n(
          p,
          "class",
          "mt-1 mb-1 lg:p-2 p-1 lg:px-4 rounded-md min-h-[40px] flex items-center"
        ),
        n(
          t,
          "class",
          Rl("flex flex-col justify-center items-center flex-1") +
            " svelte-fqxxu5"
        ),
        n(
          e,
          "class",
          "flex items-center w-1/5 bonus-panel-inner m-1 mt-2 rounded-lg border border-gray-700 svelte-fqxxu5"
        );
    },
    m(x, E) {
      $(x, e, E),
        s(e, t),
        s(t, l),
        s(t, o),
        s(t, p),
        s(p, c),
        s(c, d),
        s(t, _),
        y.m(t, null),
        s(e, v);
    },
    p(x, E) {
      y.p(x, E);
    },
    d(x) {
      x && i(e), y.d();
    },
  };
}
function qs(a) {
  let e, t, l;
  return {
    c() {
      (e = m("div")), (t = m("p")), (l = C("1 Per Week")), this.h();
    },
    l(r) {
      e = h(r, "DIV", { class: !0 });
      var o = u(e);
      t = h(o, "P", { class: !0 });
      var p = u(t);
      (l = T(p, "1 Per Week")), p.forEach(i), o.forEach(i), this.h();
    },
    h() {
      n(t, "class", "text-center text-xxs md:text-base xl:text-xs xl:mt-1"),
        n(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4 xl:min-h-[30px]");
    },
    m(r, o) {
      $(r, e, o), s(e, t), s(t, l);
    },
    p: Ae,
    d(r) {
      r && i(e);
    },
  };
}
function Xs(a) {
  let e, t, l, r, o;
  function p() {
    return a[14](a[15]);
  }
  return {
    c() {
      (e = m("div")), (t = m("button")), (l = C("Use")), this.h();
    },
    l(c) {
      e = h(c, "DIV", { class: !0 });
      var f = u(e);
      t = h(f, "BUTTON", { class: !0 });
      var d = u(t);
      (l = T(d, "Use")), d.forEach(i), f.forEach(i), this.h();
    },
    h() {
      n(
        t,
        "class",
        "fpl-purple-btn rounded-md w-full text-xs py-1 min-h-[30px] md:text-base"
      ),
        n(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4");
    },
    m(c, f) {
      $(c, e, f), s(e, t), s(t, l), r || ((o = we(t, "click", p)), (r = !0));
    },
    p(c, f) {
      a = c;
    },
    d(c) {
      c && i(e), (r = !1), o();
    },
  };
}
function Ks(a) {
  let e, t, l;
  return {
    c() {
      (e = m("div")), (t = m("p")), (l = C("Coming Soon")), this.h();
    },
    l(r) {
      e = h(r, "DIV", { class: !0 });
      var o = u(e);
      t = h(o, "P", { class: !0 });
      var p = u(t);
      (l = T(p, "Coming Soon")), p.forEach(i), o.forEach(i), this.h();
    },
    h() {
      n(t, "class", "text-center text-xxs md:text-base xl:text-xs xl:mt-1"),
        n(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4 xl:min-h-[30px]");
    },
    m(r, o) {
      $(r, e, o), s(e, t), s(t, l);
    },
    p: Ae,
    d(r) {
      r && i(e);
    },
  };
}
function $s(a) {
  let e,
    t,
    l,
    r = a[11](a[15].id) + "",
    o;
  return {
    c() {
      (e = m("div")), (t = m("p")), (l = C("Used GW")), (o = C(r)), this.h();
    },
    l(p) {
      e = h(p, "DIV", { class: !0 });
      var c = u(e);
      t = h(c, "P", { class: !0 });
      var f = u(t);
      (l = T(f, "Used GW")),
        (o = T(f, r)),
        f.forEach(i),
        c.forEach(i),
        this.h();
    },
    h() {
      n(t, "class", "text-center text-xxs md:text-base xl:text-xs xl:mt-1"),
        n(e, "class", "w-full px-1 sm:px-4 mb-2 sm:mb-4 xl:min-h-[30px]");
    },
    m(p, c) {
      $(p, e, c), s(e, t), s(t, l), s(t, o);
    },
    p: Ae,
    d(p) {
      p && i(e);
    },
  };
}
function Xa(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c,
    f = a[15].name + "",
    d,
    _,
    v;
  function b(x, E) {
    return x[11](x[15].id)
      ? $s
      : x[15].id == 7 || x[15].id == 8
      ? Ks
      : x[12]()
      ? qs
      : Xs;
  }
  let y = b(a)(a);
  return {
    c() {
      (e = m("div")),
        (t = m("div")),
        (l = m("img")),
        (o = V()),
        (p = m("div")),
        (c = m("p")),
        (d = C(f)),
        (_ = V()),
        y.c(),
        (v = V()),
        this.h();
    },
    l(x) {
      e = h(x, "DIV", { class: !0 });
      var E = u(e);
      t = h(E, "DIV", { class: !0 });
      var g = u(t);
      (l = h(g, "IMG", { alt: !0, src: !0, class: !0 })),
        (o = P(g)),
        (p = h(g, "DIV", { class: !0 }));
      var k = u(p);
      c = h(k, "P", { class: !0 });
      var w = u(c);
      (d = T(w, f)),
        w.forEach(i),
        k.forEach(i),
        (_ = P(g)),
        y.l(g),
        g.forEach(i),
        (v = P(E)),
        E.forEach(i),
        this.h();
    },
    h() {
      n(l, "alt", a[15].name),
        cl(l.src, (r = a[15].image)) || n(l, "src", r),
        n(l, "class", "h-12 m-2 mt-4 md:h-24 xl:h-20"),
        n(
          c,
          "class",
          "text-center text-xxs sm:text-xs md:text-base font-bold xl:text-sm xl:min-h-[40px]"
        ),
        n(
          p,
          "class",
          "mt-1 mb-1 lg:p-2 p-1 lg:px-4 rounded-md min-h-[40px] flex items-center"
        ),
        n(
          t,
          "class",
          Rl("flex flex-col justify-center items-center flex-1") +
            " svelte-fqxxu5"
        ),
        n(
          e,
          "class",
          "flex items-center w-1/5 bonus-panel-inner m-1 rounded-lg border border-gray-700 svelte-fqxxu5"
        );
    },
    m(x, E) {
      $(x, e, E),
        s(e, t),
        s(t, l),
        s(t, o),
        s(t, p),
        s(p, c),
        s(c, d),
        s(t, _),
        y.m(t, null),
        s(e, v);
    },
    p(x, E) {
      y.p(x, E);
    },
    d(x) {
      x && i(e), y.d();
    },
  };
}
function zs(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c,
    f,
    d,
    _,
    v,
    b = a[5] > 0 && Za(a),
    I = a[7],
    y = [];
  for (let g = 0; g < I.length; g += 1) y[g] = qa(Wa(a, I, g));
  let x = a[8],
    E = [];
  for (let g = 0; g < x.length; g += 1) E[g] = Xa(Ya(a, x, g));
  return {
    c() {
      (e = m("div")),
        b && b.c(),
        (t = V()),
        (l = m("div")),
        (r = m("h1")),
        (o = C("Bonuses")),
        (p = V()),
        (c = m("div")),
        (f = m("div"));
      for (let g = 0; g < y.length; g += 1) y[g].c();
      (d = V()), (_ = m("div"));
      for (let g = 0; g < E.length; g += 1) E[g].c();
      this.h();
    },
    l(g) {
      e = h(g, "DIV", { class: !0 });
      var k = u(e);
      b && b.l(k), (t = P(k)), (l = h(k, "DIV", { class: !0 }));
      var w = u(l);
      r = h(w, "H1", { class: !0 });
      var N = u(r);
      (o = T(N, "Bonuses")),
        N.forEach(i),
        w.forEach(i),
        (p = P(k)),
        (c = h(k, "DIV", { class: !0 }));
      var B = u(c);
      f = h(B, "DIV", { class: !0 });
      var j = u(f);
      for (let Z = 0; Z < y.length; Z += 1) y[Z].l(j);
      j.forEach(i), (d = P(B)), (_ = h(B, "DIV", { class: !0 }));
      var F = u(_);
      for (let Z = 0; Z < E.length; Z += 1) E[Z].l(F);
      F.forEach(i), B.forEach(i), k.forEach(i), this.h();
    },
    h() {
      n(r, "class", "m-3 md:m-4 font-bold"),
        n(
          l,
          "class",
          "flex flex-col md:flex-row bonus-panel-inner svelte-fqxxu5"
        ),
        n(f, "class", "flex items-center w-100 xl:w-1/2"),
        n(_, "class", "flex items-center w-100 xl:w-1/2"),
        n(c, "class", "flex flex-col xl:flex-row md:mx-2"),
        n(
          e,
          "class",
          "bonus-panel rounded-md mx-4 flex-1 mb-2 lg:mb-0 svelte-fqxxu5"
        );
    },
    m(g, k) {
      $(g, e, k),
        b && b.m(e, null),
        s(e, t),
        s(e, l),
        s(l, r),
        s(r, o),
        s(e, p),
        s(e, c),
        s(c, f);
      for (let w = 0; w < y.length; w += 1) y[w] && y[w].m(f, null);
      s(c, d), s(c, _);
      for (let w = 0; w < E.length; w += 1) E[w] && E[w].m(_, null);
      v = !0;
    },
    p(g, [k]) {
      if (
        (g[5] > 0
          ? b
            ? (b.p(g, k), k & 32 && re(b, 1))
            : ((b = Za(g)), b.c(), re(b, 1), b.m(e, t))
          : b &&
            (it(),
            fe(b, 1, 1, () => {
              b = null;
            }),
            ct()),
        k & 6784)
      ) {
        I = g[7];
        let w;
        for (w = 0; w < I.length; w += 1) {
          const N = Wa(g, I, w);
          y[w] ? y[w].p(N, k) : ((y[w] = qa(N)), y[w].c(), y[w].m(f, null));
        }
        for (; w < y.length; w += 1) y[w].d(1);
        y.length = I.length;
      }
      if (k & 6912) {
        x = g[8];
        let w;
        for (w = 0; w < x.length; w += 1) {
          const N = Ya(g, x, w);
          E[w] ? E[w].p(N, k) : ((E[w] = Xa(N)), E[w].c(), E[w].m(_, null));
        }
        for (; w < E.length; w += 1) E[w].d(1);
        E.length = x.length;
      }
    },
    i(g) {
      v || (re(b), (v = !0));
    },
    o(g) {
      fe(b), (v = !1);
    },
    d(g) {
      g && i(e), b && b.d(), Et(y, g), Et(E, g);
    },
  };
}
function Js(a, e, t) {
  let { fantasyTeam: l = tl(null) } = e,
    { players: r } = e,
    { teams: o } = e,
    { activeGameweek: p } = e,
    c = !1,
    f = 0,
    d = [
      {
        id: 1,
        name: "Goal Getter",
        image: "goal-getter.png",
        description:
          "Select a player you think will score in a game to receive a X3 mulitplier for each goal scored.",
        selectionType: $e.PLAYER,
      },
      {
        id: 2,
        name: "Pass Master",
        image: "pass-master.png",
        description:
          "Select a player you think will assist in a game to receive a X3 mulitplier for each assist.",
        selectionType: $e.PLAYER,
      },
      {
        id: 3,
        name: "No Entry",
        image: "no-entry.png",
        description:
          "Select a goalkeeper or defender you think will keep a clean sheet to receive a X3 multipler on their total score.",
        selectionType: $e.PLAYER,
      },
      {
        id: 4,
        name: "Team Boost",
        image: "team-boost.png",
        description:
          "Receive a X2 multiplier from all players from a single club that are in your team.",
        selectionType: $e.TEAM,
      },
      {
        id: 5,
        name: "Safe Hands",
        image: "safe-hands.png",
        description:
          "Receive a X3 multiplier on your goalkeeper if they make 5 saves in a match.",
        selectionType: $e.AUTOMATIC,
      },
      {
        id: 6,
        name: "Captain Fantastic",
        image: "captain-fantastic.png",
        description:
          "Receive a X2 multiplier on your team captain's score if they score a goal in a match.",
        selectionType: $e.AUTOMATIC,
      },
      {
        id: 7,
        name: "Prospects",
        image: "prospects.png",
        description: "Receive a X2 multiplier for players under the age of 21.",
        selectionType: $e.AUTOMATIC,
      },
      {
        id: 8,
        name: "Countrymen",
        image: "countrymen.png",
        description:
          "Receive a X2 multiplier for players of a selected nationality.",
        selectionType: $e.COUNTRY,
      },
      {
        id: 9,
        name: "Brace Bonus",
        image: "brace-bonus.png",
        description:
          "Receive a X2 multiplier on a player's score if they score 2 or more goals in a game. Applies to every player who scores a brace.",
        selectionType: $e.AUTOMATIC,
      },
      {
        id: 10,
        name: "Hat-Trick Hero",
        image: "hat-trick-hero.png",
        description:
          "Receive a X3 multiplier on a player's score if they score 3 or more goals in a game. Applies to every player who scores a hat-trick.",
        selectionType: $e.AUTOMATIC,
      },
    ],
    _ = d.slice(0, 5),
    v = d.slice(5, 10);
  function b(k) {
    t(5, (f = k)), t(4, (c = !0));
  }
  function I() {
    t(4, (c = !1));
  }
  function y(k) {
    const w = ze(l);
    if (!w) return !1;
    switch (k) {
      case 1:
        return w.goalGetterGameweek && w.goalGetterGameweek > 0
          ? w.goalGetterGameweek
          : !1;
      case 2:
        return w.passMasterGameweek && w.passMasterGameweek > 0
          ? w.passMasterGameweek
          : !1;
      case 3:
        return w.noEntryGameweek && w.noEntryGameweek > 0
          ? w.noEntryGameweek
          : !1;
      case 4:
        return w.teamBoostGameweek && w.teamBoostGameweek > 0
          ? w.teamBoostGameweek
          : !1;
      case 5:
        return w.safeHandsGameweek && w.safeHandsGameweek > 0
          ? w.safeHandsGameweek
          : !1;
      case 6:
        return w.captainFantasticGameweek && w.captainFantasticGameweek > 0
          ? w.captainFantasticGameweek
          : !1;
      case 7:
        return !1;
      case 8:
        return !1;
      case 9:
        return w.braceBonusGameweek && w.braceBonusGameweek > 0
          ? w.braceBonusGameweek
          : !1;
      case 10:
        return w.hatTrickHeroGameweek && w.hatTrickHeroGameweek > 0
          ? w.hatTrickHeroGameweek
          : !1;
      default:
        return !1;
    }
  }
  function x() {
    const k = ze(l);
    return k
      ? k?.goalGetterGameweek == p ||
          k?.passMasterGameweek == p ||
          k?.noEntryGameweek == p ||
          k?.teamBoostGameweek == p ||
          k?.safeHandsGameweek == p ||
          k?.captainFantasticGameweek == p ||
          k?.braceBonusGameweek == p ||
          k?.hatTrickHeroGameweek == p
      : !1;
  }
  const E = (k) => b(k.id),
    g = (k) => b(k.id);
  return (
    (a.$$set = (k) => {
      "fantasyTeam" in k && t(0, (l = k.fantasyTeam)),
        "players" in k && t(1, (r = k.players)),
        "teams" in k && t(2, (o = k.teams)),
        "activeGameweek" in k && t(3, (p = k.activeGameweek));
    }),
    [l, r, o, p, c, f, d, _, v, b, I, y, x, E, g]
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
      n(
        t,
        "d",
        "M16 6.66667H9.33333V0H6.66667V6.66667H0V9.33333H6.66667V16H9.33333V9.33333H16V6.66667Z"
      ),
        n(t, "fill", "#FFFFFF"),
        n(e, "xmlns", "http://www.w3.org/2000/svg"),
        n(e, "class", a[0]),
        n(e, "fill", "currentColor"),
        n(e, "viewBox", "0 0 16 16");
    },
    m(l, r) {
      $(l, e, r), s(e, t);
    },
    p(l, [r]) {
      r & 1 && n(e, "class", l[0]);
    },
    i: Ae,
    o: Ae,
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
function Ka(a, e, t) {
  const l = a.slice();
  return (l[35] = e[t]), (l[37] = t), l;
}
function $a(a, e, t) {
  const l = a.slice();
  return (l[38] = e[t]), (l[37] = t), l;
}
function za(a, e, t) {
  const l = a.slice();
  return (l[40] = e[t]), l;
}
function Ja(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c,
    f,
    d,
    _,
    v,
    b,
    I,
    y,
    x,
    E,
    g,
    k,
    w,
    N,
    B,
    j,
    F,
    Z,
    q,
    oe,
    L,
    R,
    O,
    ne,
    G,
    M,
    Y,
    te,
    D,
    W,
    X,
    ee,
    ae,
    H,
    J,
    be,
    U,
    S,
    le,
    Ee,
    de,
    Ve,
    ce,
    ue,
    Ne,
    Te,
    Pe,
    We,
    ke,
    Ie,
    Ze,
    je = (a[13] / 4).toFixed(2) + "",
    Ue,
    qe,
    lt,
    at,
    He,
    Tt,
    Rt,
    Vt,
    Pt,
    Yt,
    A,
    K,
    se,
    ie,
    me,
    ye,
    xe,
    Me,
    Je,
    Qe,
    st,
    et,
    Re,
    kt,
    dt,
    rt,
    sl,
    nt,
    bt,
    rl,
    Wt,
    Ut,
    Jt,
    Dt = a[1],
    Ye = [];
  for (let he = 0; he < Dt.length; he += 1) Ye[he] = Qa(za(a, Dt, he));
  let gt = a[11],
    De = [];
  for (let he = 0; he < gt.length; he += 1) De[he] = ss($a(a, gt, he));
  const Vl = (he) =>
    fe(De[he], 1, 1, () => {
      De[he] = null;
    });
  let It = Array(Math.ceil(a[10].length / ql)),
    Ge = [];
  for (let he = 0; he < It.length; he += 1) Ge[he] = rs(Ka(a, It, he));
  return {
    c() {
      (e = m("div")),
        (t = m("div")),
        (l = m("div")),
        (r = m("h3")),
        (o = C("Select Player")),
        (p = V()),
        (c = m("button")),
        (f = C("×")),
        (d = V()),
        (_ = m("div")),
        (v = m("div")),
        (b = m("div")),
        (I = m("label")),
        (y = C("Filter by Team:")),
        (x = V()),
        (E = m("select")),
        (g = m("option")),
        (k = C("All"));
      for (let he = 0; he < Ye.length; he += 1) Ye[he].c();
      (w = V()),
        (N = m("div")),
        (B = m("label")),
        (j = C("Filter by Position:")),
        (F = V()),
        (Z = m("select")),
        (q = m("option")),
        (oe = C("All")),
        (L = m("option")),
        (R = C("Goalkeepers")),
        (O = m("option")),
        (ne = C("Defenders")),
        (G = m("option")),
        (M = C("Midfielders")),
        (Y = m("option")),
        (te = C("Forwards")),
        (D = V()),
        (W = m("div")),
        (X = m("div")),
        (ee = m("label")),
        (ae = C("Min Value:")),
        (H = V()),
        (J = m("input")),
        (be = V()),
        (U = m("div")),
        (S = m("label")),
        (le = C("Max Value:")),
        (Ee = V()),
        (de = m("input")),
        (Ve = V()),
        (ce = m("div")),
        (ue = m("label")),
        (Ne = C("Search by Name:")),
        (Te = V()),
        (Pe = m("input")),
        (We = V()),
        (ke = m("div")),
        (Ie = m("label")),
        (Ze = C("Available Balance: £")),
        (Ue = C(je)),
        (qe = C("m")),
        (lt = V()),
        (at = m("div")),
        (He = m("div")),
        (Tt = m("div")),
        (Rt = C("Pos")),
        (Vt = V()),
        (Pt = m("div")),
        (Yt = C("Player")),
        (A = V()),
        (K = m("div")),
        (se = C("Team")),
        (ie = V()),
        (me = m("div")),
        (ye = C("Value")),
        (xe = V()),
        (Me = m("div")),
        (Je = C("PTS")),
        (Qe = V()),
        (st = m("div")),
        (et = C(" ")),
        (Re = V());
      for (let he = 0; he < De.length; he += 1) De[he].c();
      (kt = V()), (dt = m("div")), (rt = m("div"));
      for (let he = 0; he < Ge.length; he += 1) Ge[he].c();
      (sl = V()),
        (nt = m("div")),
        (bt = m("button")),
        (rl = C("Close")),
        this.h();
    },
    l(he) {
      e = h(he, "DIV", { class: !0 });
      var Ce = u(e);
      t = h(Ce, "DIV", { class: !0 });
      var Q = u(t);
      l = h(Q, "DIV", { class: !0 });
      var tt = u(l);
      r = h(tt, "H3", { class: !0 });
      var dl = u(r);
      (o = T(dl, "Select Player")),
        dl.forEach(i),
        (p = P(tt)),
        (c = h(tt, "BUTTON", { class: !0 }));
      var Gt = u(c);
      (f = T(Gt, "×")),
        Gt.forEach(i),
        tt.forEach(i),
        (d = P(Q)),
        (_ = h(Q, "DIV", { class: !0 }));
      var Nt = u(_);
      v = h(Nt, "DIV", { class: !0 });
      var Zt = u(v);
      b = h(Zt, "DIV", {});
      var Qt = u(b);
      I = h(Qt, "LABEL", { for: !0, class: !0 });
      var qt = u(I);
      (y = T(qt, "Filter by Team:")),
        qt.forEach(i),
        (x = P(Qt)),
        (E = h(Qt, "SELECT", { id: !0, class: !0 }));
      var At = u(E);
      g = h(At, "OPTION", {});
      var ml = u(g);
      (k = T(ml, "All")), ml.forEach(i);
      for (let z = 0; z < Ye.length; z += 1) Ye[z].l(At);
      At.forEach(i), Qt.forEach(i), (w = P(Zt)), (N = h(Zt, "DIV", {}));
      var ft = u(N);
      B = h(ft, "LABEL", { for: !0, class: !0 });
      var hl = u(B);
      (j = T(hl, "Filter by Position:")),
        hl.forEach(i),
        (F = P(ft)),
        (Z = h(ft, "SELECT", { id: !0, class: !0 }));
      var mt = u(Z);
      q = h(mt, "OPTION", {});
      var Ct = u(q);
      (oe = T(Ct, "All")), Ct.forEach(i), (L = h(mt, "OPTION", {}));
      var _l = u(L);
      (R = T(_l, "Goalkeepers")), _l.forEach(i), (O = h(mt, "OPTION", {}));
      var nl = u(O);
      (ne = T(nl, "Defenders")), nl.forEach(i), (G = h(mt, "OPTION", {}));
      var ol = u(G);
      (M = T(ol, "Midfielders")), ol.forEach(i), (Y = h(mt, "OPTION", {}));
      var pl = u(Y);
      (te = T(pl, "Forwards")),
        pl.forEach(i),
        mt.forEach(i),
        ft.forEach(i),
        Zt.forEach(i),
        (D = P(Nt)),
        (W = h(Nt, "DIV", { class: !0 }));
      var ht = u(W);
      X = h(ht, "DIV", {});
      var el = u(X);
      ee = h(el, "LABEL", { for: !0, class: !0 });
      var il = u(ee);
      (ae = T(il, "Min Value:")),
        il.forEach(i),
        (H = P(el)),
        (J = h(el, "INPUT", { id: !0, type: !0, class: !0 })),
        el.forEach(i),
        (be = P(ht)),
        (U = h(ht, "DIV", {}));
      var Xt = u(U);
      S = h(Xt, "LABEL", { for: !0, class: !0 });
      var vl = u(S);
      (le = T(vl, "Max Value:")),
        vl.forEach(i),
        (Ee = P(Xt)),
        (de = h(Xt, "INPUT", { id: !0, type: !0, class: !0 })),
        Xt.forEach(i),
        ht.forEach(i),
        (Ve = P(Nt)),
        (ce = h(Nt, "DIV", { class: !0 }));
      var yt = u(ce);
      ue = h(yt, "LABEL", { for: !0, class: !0 });
      var _t = u(ue);
      (Ne = T(_t, "Search by Name:")),
        _t.forEach(i),
        (Te = P(yt)),
        (Pe = h(yt, "INPUT", { id: !0, type: !0, class: !0, placeholder: !0 })),
        yt.forEach(i),
        (We = P(Nt)),
        (ke = h(Nt, "DIV", { class: !0 }));
      var pt = u(ke);
      Ie = h(pt, "LABEL", { for: !0, class: !0 });
      var Kt = u(Ie);
      (Ze = T(Kt, "Available Balance: £")),
        (Ue = T(Kt, je)),
        (qe = T(Kt, "m")),
        Kt.forEach(i),
        pt.forEach(i),
        Nt.forEach(i),
        (lt = P(Q)),
        (at = h(Q, "DIV", { class: !0 }));
      var Mt = u(at);
      He = h(Mt, "DIV", { class: !0 });
      var Xe = u(He);
      Tt = h(Xe, "DIV", { class: !0 });
      var bl = u(Tt);
      (Rt = T(bl, "Pos")),
        bl.forEach(i),
        (Vt = P(Xe)),
        (Pt = h(Xe, "DIV", { class: !0 }));
      var Bt = u(Pt);
      (Yt = T(Bt, "Player")),
        Bt.forEach(i),
        (A = P(Xe)),
        (K = h(Xe, "DIV", { class: !0 }));
      var Be = u(K);
      (se = T(Be, "Team")),
        Be.forEach(i),
        (ie = P(Xe)),
        (me = h(Xe, "DIV", { class: !0 }));
      var gl = u(me);
      (ye = T(gl, "Value")),
        gl.forEach(i),
        (xe = P(Xe)),
        (Me = h(Xe, "DIV", { class: !0 }));
      var Pl = u(Me);
      (Je = T(Pl, "PTS")),
        Pl.forEach(i),
        (Qe = P(Xe)),
        (st = h(Xe, "DIV", { class: !0 }));
      var $t = u(st);
      (et = T($t, " ")), $t.forEach(i), Xe.forEach(i), (Re = P(Mt));
      for (let z = 0; z < De.length; z += 1) De[z].l(Mt);
      Mt.forEach(i), (kt = P(Q)), (dt = h(Q, "DIV", { class: !0 }));
      var Ke = u(dt);
      rt = h(Ke, "DIV", { class: !0 });
      var Nl = u(rt);
      for (let z = 0; z < Ge.length; z += 1) Ge[z].l(Nl);
      Nl.forEach(i),
        Ke.forEach(i),
        (sl = P(Q)),
        (nt = h(Q, "DIV", { class: !0 }));
      var Ft = u(nt);
      bt = h(Ft, "BUTTON", { class: !0 });
      var Dl = u(bt);
      (rl = T(Dl, "Close")),
        Dl.forEach(i),
        Ft.forEach(i),
        Q.forEach(i),
        Ce.forEach(i),
        this.h();
    },
    h() {
      n(r, "class", "text-xl font-semibold"),
        n(c, "class", "text-3xl leading-none"),
        n(l, "class", "flex justify-between items-center mb-4"),
        n(I, "for", "filterTeam"),
        n(I, "class", "text-sm"),
        (g.__value = -1),
        (g.value = g.__value),
        n(E, "id", "filterTeam"),
        n(
          E,
          "class",
          "mt-1 block w-full p-2 bg-gray-700 text-white rounded-md"
        ),
        a[5] === void 0 && ul(() => a[22].call(E)),
        n(B, "for", "filterPosition"),
        n(B, "class", "text-sm"),
        (q.__value = -1),
        (q.value = q.__value),
        (L.__value = 0),
        (L.value = L.__value),
        (O.__value = 1),
        (O.value = O.__value),
        (G.__value = 2),
        (G.value = G.__value),
        (Y.__value = 3),
        (Y.value = Y.__value),
        n(Z, "id", "filterPosition"),
        n(
          Z,
          "class",
          "mt-1 block w-full p-2 bg-gray-700 text-white rounded-md"
        ),
        a[0] === void 0 && ul(() => a[23].call(Z)),
        n(v, "class", "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"),
        n(ee, "for", "minValue"),
        n(ee, "class", "text-sm"),
        n(J, "id", "minValue"),
        n(J, "type", "number"),
        n(
          J,
          "class",
          "mt-1 block w-full p-2 bg-gray-700 text-white rounded-md"
        ),
        n(S, "for", "maxValue"),
        n(S, "class", "text-sm"),
        n(de, "id", "maxValue"),
        n(de, "type", "number"),
        n(
          de,
          "class",
          "mt-1 block w-full p-2 bg-gray-700 text-white rounded-md"
        ),
        n(W, "class", "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"),
        n(ue, "for", "filterSurname"),
        n(ue, "class", "text-sm"),
        n(Pe, "id", "filterSurname"),
        n(Pe, "type", "text"),
        n(
          Pe,
          "class",
          "mt-1 block w-full p-2 bg-gray-700 text-white rounded-md"
        ),
        n(Pe, "placeholder", "Enter"),
        n(ce, "class", "mb-4"),
        n(Ie, "for", "bankBalance"),
        n(Ie, "class", "font-bold"),
        n(ke, "class", "mb-4"),
        n(_, "class", "mb-4"),
        n(Tt, "class", "w-1/12 text-center mx-4"),
        n(Pt, "class", "w-4/12"),
        n(K, "class", "w-2/12"),
        n(me, "class", "w-2/12"),
        n(Me, "class", "w-1/12"),
        n(st, "class", "w-2/12 text-center"),
        n(
          He,
          "class",
          "flex justify-between border border-gray-700 py-4 bg-light-gray"
        ),
        n(at, "class", "overflow-x-auto flex-1 text-xs md:text-base"),
        n(rt, "class", "flex space-x-1 min-w-max"),
        n(dt, "class", "justify-center mt-4 pb-4 overflow-x-auto"),
        n(bt, "class", "px-4 py-2 fpl-purple-btn rounded-md text-white"),
        n(nt, "class", "flex justify-end mt-4"),
        n(
          t,
          "class",
          "relative top-10 md:top-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-panel text-white"
        ),
        n(
          e,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop svelte-lf3rrb"
        );
    },
    m(he, Ce) {
      $(he, e, Ce),
        s(e, t),
        s(t, l),
        s(l, r),
        s(r, o),
        s(l, p),
        s(l, c),
        s(c, f),
        s(t, d),
        s(t, _),
        s(_, v),
        s(v, b),
        s(b, I),
        s(I, y),
        s(b, x),
        s(b, E),
        s(E, g),
        s(g, k);
      for (let Q = 0; Q < Ye.length; Q += 1) Ye[Q] && Ye[Q].m(E, null);
      xt(E, a[5], !0),
        s(v, w),
        s(v, N),
        s(N, B),
        s(B, j),
        s(N, F),
        s(N, Z),
        s(Z, q),
        s(q, oe),
        s(Z, L),
        s(L, R),
        s(Z, O),
        s(O, ne),
        s(Z, G),
        s(G, M),
        s(Z, Y),
        s(Y, te),
        xt(Z, a[0], !0),
        s(_, D),
        s(_, W),
        s(W, X),
        s(X, ee),
        s(ee, ae),
        s(X, H),
        s(X, J),
        Cl(J, a[7]),
        s(W, be),
        s(W, U),
        s(U, S),
        s(S, le),
        s(U, Ee),
        s(U, de),
        Cl(de, a[8]),
        s(_, Ve),
        s(_, ce),
        s(ce, ue),
        s(ue, Ne),
        s(ce, Te),
        s(ce, Pe),
        Cl(Pe, a[6]),
        s(_, We),
        s(_, ke),
        s(ke, Ie),
        s(Ie, Ze),
        s(Ie, Ue),
        s(Ie, qe),
        s(t, lt),
        s(t, at),
        s(at, He),
        s(He, Tt),
        s(Tt, Rt),
        s(He, Vt),
        s(He, Pt),
        s(Pt, Yt),
        s(He, A),
        s(He, K),
        s(K, se),
        s(He, ie),
        s(He, me),
        s(me, ye),
        s(He, xe),
        s(He, Me),
        s(Me, Je),
        s(He, Qe),
        s(He, st),
        s(st, et),
        s(at, Re);
      for (let Q = 0; Q < De.length; Q += 1) De[Q] && De[Q].m(at, null);
      s(t, kt), s(t, dt), s(dt, rt);
      for (let Q = 0; Q < Ge.length; Q += 1) Ge[Q] && Ge[Q].m(rt, null);
      s(t, sl),
        s(t, nt),
        s(nt, bt),
        s(bt, rl),
        (Wt = !0),
        Ut ||
          ((Jt = [
            we(c, "click", function () {
              Tl(a[3]) && a[3].apply(this, arguments);
            }),
            we(E, "change", a[22]),
            we(Z, "change", a[23]),
            we(J, "input", a[24]),
            we(de, "input", a[25]),
            we(Pe, "input", a[26]),
            we(bt, "click", function () {
              Tl(a[3]) && a[3].apply(this, arguments);
            }),
            we(t, "click", Jl(a[20])),
            we(t, "keydown", Jl(a[21])),
            we(e, "click", function () {
              Tl(a[3]) && a[3].apply(this, arguments);
            }),
            we(e, "keydown", function () {
              Tl(a[3]) && a[3].apply(this, arguments);
            }),
          ]),
          (Ut = !0));
    },
    p(he, Ce) {
      if (((a = he), Ce[0] & 2)) {
        Dt = a[1];
        let Q;
        for (Q = 0; Q < Dt.length; Q += 1) {
          const tt = za(a, Dt, Q);
          Ye[Q]
            ? Ye[Q].p(tt, Ce)
            : ((Ye[Q] = Qa(tt)), Ye[Q].c(), Ye[Q].m(E, null));
        }
        for (; Q < Ye.length; Q += 1) Ye[Q].d(1);
        Ye.length = Dt.length;
      }
      if (
        (Ce[0] & 34 && xt(E, a[5]),
        Ce[0] & 1 && xt(Z, a[0]),
        Ce[0] & 128 && Yl(J.value) !== a[7] && Cl(J, a[7]),
        Ce[0] & 256 && Yl(de.value) !== a[8] && Cl(de, a[8]),
        Ce[0] & 64 && Pe.value !== a[6] && Cl(Pe, a[6]),
        (!Wt || Ce[0] & 8192) &&
          je !== (je = (a[13] / 4).toFixed(2) + "") &&
          ge(Ue, je),
        Ce[0] & 38912)
      ) {
        gt = a[11];
        let Q;
        for (Q = 0; Q < gt.length; Q += 1) {
          const tt = $a(a, gt, Q);
          De[Q]
            ? (De[Q].p(tt, Ce), re(De[Q], 1))
            : ((De[Q] = ss(tt)), De[Q].c(), re(De[Q], 1), De[Q].m(at, null));
        }
        for (it(), Q = gt.length; Q < De.length; Q += 1) Vl(Q);
        ct();
      }
      if (Ce[0] & 17920) {
        It = Array(Math.ceil(a[10].length / ql));
        let Q;
        for (Q = 0; Q < It.length; Q += 1) {
          const tt = Ka(a, It, Q);
          Ge[Q]
            ? Ge[Q].p(tt, Ce)
            : ((Ge[Q] = rs(tt)), Ge[Q].c(), Ge[Q].m(rt, null));
        }
        for (; Q < Ge.length; Q += 1) Ge[Q].d(1);
        Ge.length = It.length;
      }
    },
    i(he) {
      if (!Wt) {
        for (let Ce = 0; Ce < gt.length; Ce += 1) re(De[Ce]);
        Wt = !0;
      }
    },
    o(he) {
      De = De.filter(Boolean);
      for (let Ce = 0; Ce < De.length; Ce += 1) fe(De[Ce]);
      Wt = !1;
    },
    d(he) {
      he && i(e), Et(Ye, he), Et(De, he), Et(Ge, he), (Ut = !1), Xl(Jt);
    },
  };
}
function Qa(a) {
  let e,
    t = a[40].friendlyName + "",
    l,
    r;
  return {
    c() {
      (e = m("option")), (l = C(t)), this.h();
    },
    l(o) {
      e = h(o, "OPTION", {});
      var p = u(e);
      (l = T(p, t)), p.forEach(i), this.h();
    },
    h() {
      (e.__value = r = a[40].id), (e.value = e.__value);
    },
    m(o, p) {
      $(o, e, p), s(e, l);
    },
    p(o, p) {
      p[0] & 2 && t !== (t = o[40].friendlyName + "") && ge(l, t),
        p[0] & 2 &&
          r !== (r = o[40].id) &&
          ((e.__value = r), (e.value = e.__value));
    },
    d(o) {
      o && i(e);
    },
  };
}
function es(a) {
  let e;
  return {
    c() {
      e = C("GK");
    },
    l(t) {
      e = T(t, "GK");
    },
    m(t, l) {
      $(t, e, l);
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
      e = C("DF");
    },
    l(t) {
      e = T(t, "DF");
    },
    m(t, l) {
      $(t, e, l);
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
      e = C("MF");
    },
    l(t) {
      e = T(t, "MF");
    },
    m(t, l) {
      $(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function as(a) {
  let e;
  return {
    c() {
      e = C("FW");
    },
    l(t) {
      e = T(t, "FW");
    },
    m(t, l) {
      $(t, e, l);
    },
    d(t) {
      t && i(e);
    },
  };
}
function lr(a) {
  let e, t, l, r, o;
  t = new Ns({ props: { className: "w-6 h-6 p-2" } });
  function p() {
    return a[27](a[38]);
  }
  return {
    c() {
      (e = m("button")), Fe(t.$$.fragment), this.h();
    },
    l(c) {
      e = h(c, "BUTTON", { class: !0 });
      var f = u(e);
      Le(t.$$.fragment, f), f.forEach(i), this.h();
    },
    h() {
      n(e, "class", "text-xl rounded fpl-button flex items-center");
    },
    m(c, f) {
      $(c, e, f),
        Oe(t, e, null),
        (l = !0),
        r || ((o = we(e, "click", p)), (r = !0));
    },
    p(c, f) {
      a = c;
    },
    i(c) {
      l || (re(t.$$.fragment, c), (l = !0));
    },
    o(c) {
      fe(t.$$.fragment, c), (l = !1);
    },
    d(c) {
      c && i(e), Se(t), (r = !1), o();
    },
  };
}
function ar(a) {
  let e,
    t = a[12][a[37]] + "",
    l;
  return {
    c() {
      (e = m("span")), (l = C(t)), this.h();
    },
    l(r) {
      e = h(r, "SPAN", { class: !0 });
      var o = u(e);
      (l = T(o, t)), o.forEach(i), this.h();
    },
    h() {
      n(e, "class", "text-xs text-center");
    },
    m(r, o) {
      $(r, e, o), s(e, l);
    },
    p(r, o) {
      o[0] & 4096 && t !== (t = r[12][r[37]] + "") && ge(l, t);
    },
    i: Ae,
    o: Ae,
    d(r) {
      r && i(e);
    },
  };
}
function ss(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c,
    f = a[38].firstName + "",
    d,
    _,
    v = a[38].lastName + "",
    b,
    I,
    y,
    x,
    E,
    g,
    k = a[38].team?.abbreviatedName + "",
    w,
    N,
    B,
    j,
    F = (Number(a[38].value) / 4).toFixed(2) + "",
    Z,
    q,
    oe,
    L,
    R = a[38].totalPoints + "",
    O,
    ne,
    G,
    M,
    Y,
    te,
    D,
    W = a[38].position === 0 && es(),
    X = a[38].position === 1 && ts(),
    ee = a[38].position === 2 && ls(),
    ae = a[38].position === 3 && as();
  E = new Al({
    props: {
      className: "w-6 h-6 mr-2",
      primaryColour: a[38].team?.primaryColourHex,
      secondaryColour: a[38].team?.secondaryColourHex,
      thirdColour: a[38].team?.thirdColourHex,
    },
  });
  const H = [ar, lr],
    J = [];
  function be(U, S) {
    return U[12][U[37]] ? 0 : 1;
  }
  return (
    (M = be(a)),
    (Y = J[M] = H[M](a)),
    {
      c() {
        (e = m("div")),
          (t = m("div")),
          W && W.c(),
          (l = V()),
          X && X.c(),
          (r = V()),
          ee && ee.c(),
          (o = V()),
          ae && ae.c(),
          (p = V()),
          (c = m("div")),
          (d = C(f)),
          (_ = V()),
          (b = C(v)),
          (I = V()),
          (y = m("div")),
          (x = m("p")),
          Fe(E.$$.fragment),
          (g = V()),
          (w = C(k)),
          (N = V()),
          (B = m("div")),
          (j = C("£")),
          (Z = C(F)),
          (q = C("m")),
          (oe = V()),
          (L = m("div")),
          (O = C(R)),
          (ne = V()),
          (G = m("div")),
          Y.c(),
          (te = V()),
          this.h();
      },
      l(U) {
        e = h(U, "DIV", { class: !0 });
        var S = u(e);
        t = h(S, "DIV", { class: !0 });
        var le = u(t);
        W && W.l(le),
          (l = P(le)),
          X && X.l(le),
          (r = P(le)),
          ee && ee.l(le),
          (o = P(le)),
          ae && ae.l(le),
          le.forEach(i),
          (p = P(S)),
          (c = h(S, "DIV", { class: !0 }));
        var Ee = u(c);
        (d = T(Ee, f)),
          (_ = P(Ee)),
          (b = T(Ee, v)),
          Ee.forEach(i),
          (I = P(S)),
          (y = h(S, "DIV", { class: !0 }));
        var de = u(y);
        x = h(de, "P", { class: !0 });
        var Ve = u(x);
        Le(E.$$.fragment, Ve),
          (g = P(Ve)),
          (w = T(Ve, k)),
          Ve.forEach(i),
          de.forEach(i),
          (N = P(S)),
          (B = h(S, "DIV", { class: !0 }));
        var ce = u(B);
        (j = T(ce, "£")),
          (Z = T(ce, F)),
          (q = T(ce, "m")),
          ce.forEach(i),
          (oe = P(S)),
          (L = h(S, "DIV", { class: !0 }));
        var ue = u(L);
        (O = T(ue, R)),
          ue.forEach(i),
          (ne = P(S)),
          (G = h(S, "DIV", { class: !0 }));
        var Ne = u(G);
        Y.l(Ne), Ne.forEach(i), (te = P(S)), S.forEach(i), this.h();
      },
      h() {
        n(t, "class", "w-1/12 text-center mx-4"),
          n(c, "class", "w-4/12"),
          n(x, "class", "flex items-center"),
          n(y, "class", "w-2/12"),
          n(B, "class", "w-2/12"),
          n(L, "class", "w-1/12"),
          n(G, "class", "w-2/12 flex justify-center items-center"),
          n(
            e,
            "class",
            "flex items-center justify-between py-4 border-b border-gray-700 cursor-pointer"
          );
      },
      m(U, S) {
        $(U, e, S),
          s(e, t),
          W && W.m(t, null),
          s(t, l),
          X && X.m(t, null),
          s(t, r),
          ee && ee.m(t, null),
          s(t, o),
          ae && ae.m(t, null),
          s(e, p),
          s(e, c),
          s(c, d),
          s(c, _),
          s(c, b),
          s(e, I),
          s(e, y),
          s(y, x),
          Oe(E, x, null),
          s(x, g),
          s(x, w),
          s(e, N),
          s(e, B),
          s(B, j),
          s(B, Z),
          s(B, q),
          s(e, oe),
          s(e, L),
          s(L, O),
          s(e, ne),
          s(e, G),
          J[M].m(G, null),
          s(e, te),
          (D = !0);
      },
      p(U, S) {
        U[38].position === 0
          ? W || ((W = es()), W.c(), W.m(t, l))
          : W && (W.d(1), (W = null)),
          U[38].position === 1
            ? X || ((X = ts()), X.c(), X.m(t, r))
            : X && (X.d(1), (X = null)),
          U[38].position === 2
            ? ee || ((ee = ls()), ee.c(), ee.m(t, o))
            : ee && (ee.d(1), (ee = null)),
          U[38].position === 3
            ? ae || ((ae = as()), ae.c(), ae.m(t, null))
            : ae && (ae.d(1), (ae = null)),
          (!D || S[0] & 2048) && f !== (f = U[38].firstName + "") && ge(d, f),
          (!D || S[0] & 2048) && v !== (v = U[38].lastName + "") && ge(b, v);
        const le = {};
        S[0] & 2048 && (le.primaryColour = U[38].team?.primaryColourHex),
          S[0] & 2048 && (le.secondaryColour = U[38].team?.secondaryColourHex),
          S[0] & 2048 && (le.thirdColour = U[38].team?.thirdColourHex),
          E.$set(le),
          (!D || S[0] & 2048) &&
            k !== (k = U[38].team?.abbreviatedName + "") &&
            ge(w, k),
          (!D || S[0] & 2048) &&
            F !== (F = (Number(U[38].value) / 4).toFixed(2) + "") &&
            ge(Z, F),
          (!D || S[0] & 2048) && R !== (R = U[38].totalPoints + "") && ge(O, R);
        let Ee = M;
        (M = be(U)),
          M === Ee
            ? J[M].p(U, S)
            : (it(),
              fe(J[Ee], 1, 1, () => {
                J[Ee] = null;
              }),
              ct(),
              (Y = J[M]),
              Y ? Y.p(U, S) : ((Y = J[M] = H[M](U)), Y.c()),
              re(Y, 1),
              Y.m(G, null));
      },
      i(U) {
        D || (re(E.$$.fragment, U), re(Y), (D = !0));
      },
      o(U) {
        fe(E.$$.fragment, U), fe(Y), (D = !1);
      },
      d(U) {
        U && i(e),
          W && W.d(),
          X && X.d(),
          ee && ee.d(),
          ae && ae.d(),
          Se(E),
          J[M].d();
      },
    }
  );
}
function rs(a) {
  let e,
    t = a[37] + 1 + "",
    l,
    r,
    o,
    p;
  function c() {
    return a[28](a[37]);
  }
  return {
    c() {
      (e = m("button")), (l = C(t)), (r = V()), this.h();
    },
    l(f) {
      e = h(f, "BUTTON", { class: !0 });
      var d = u(e);
      (l = T(d, t)), (r = P(d)), d.forEach(i), this.h();
    },
    h() {
      n(
        e,
        "class",
        "px-4 py-2 bg-gray-700 rounded-md text-white hover:bg-gray-600 svelte-lf3rrb"
      ),
        Ta(e, "active", a[37] + 1 === a[9]);
    },
    m(f, d) {
      $(f, e, d), s(e, l), s(e, r), o || ((p = we(e, "click", c)), (o = !0));
    },
    p(f, d) {
      (a = f), d[0] & 512 && Ta(e, "active", a[37] + 1 === a[9]);
    },
    d(f) {
      f && i(e), (o = !1), p();
    },
  };
}
function sr(a) {
  let e,
    t,
    l = a[2] && Ja(a);
  return {
    c() {
      l && l.c(), (e = al());
    },
    l(r) {
      l && l.l(r), (e = al());
    },
    m(r, o) {
      l && l.m(r, o), $(r, e, o), (t = !0);
    },
    p(r, o) {
      r[2]
        ? l
          ? (l.p(r, o), o[0] & 4 && re(l, 1))
          : ((l = Ja(r)), l.c(), re(l, 1), l.m(e.parentNode, e))
        : l &&
          (it(),
          fe(l, 1, 1, () => {
            l = null;
          }),
          ct());
    },
    i(r) {
      t || (re(l), (t = !0));
    },
    o(r) {
      fe(l), (t = !1);
    },
    d(r) {
      l && l.d(r), r && i(e);
    },
  };
}
const ql = 10;
function rr(a, e, t) {
  let l,
    r,
    o,
    p,
    c,
    f = Ae,
    d = () => (f(), (f = Ts(E, (H) => t(13, (c = H)))), E);
  a.$$.on_destroy.push(() => f());
  let { showAddPlayer: _ } = e,
    { closeAddPlayerModal: v } = e,
    { handlePlayerSelection: b } = e,
    { fantasyTeam: I = tl(null) } = e,
    { filterPosition: y = -1 } = e,
    { filterColumn: x = -1 } = e,
    { bankBalance: E = tl(0) } = e;
  d();
  let { players: g } = e,
    { teams: k } = e,
    w,
    N,
    B = -1,
    j = "",
    F = 0,
    Z = 0,
    q = 1;
  la(async () => {
    try {
      await Zl.sync(),
        await ll.sync(),
        (w = ll.subscribe((J) => {
          t(1, (k = J));
        })),
        (N = Zl.subscribe((J) => {
          t(16, (g = J));
        }));
      let H = ze(I);
      o = oe(H?.playerIds ?? []);
    } catch (H) {
      jl.show("Error loading add player modal.", "error"),
        console.error("Error fetching homepage data:", H);
    }
  }),
    aa(() => {
      w?.(), N?.();
    });
  function oe(H) {
    const J = {};
    return (
      H.forEach((be) => {
        const U = g.find((S) => S.id === be);
        U && (J[U.teamId] || (J[U.teamId] = 0), J[U.teamId]++);
      }),
      J
    );
  }
  function L(H) {
    if ((o[H.teamId] || 0) >= 2) return "Max 2 Per Team";
    let be = ze(I);
    if (!(ze(E) >= Number(H.value))) return "Over Budget";
    if (be && be.playerIds.includes(H.id)) return "Selected";
    const S = { 0: 0, 1: 0, 2: 0, 3: 0 };
    return (
      be &&
        be.playerIds.forEach((de) => {
          const Ve = g.find((ce) => ce.id === de);
          Ve && S[Ve.position]++;
        }),
      S[H.position]++,
      ["3-4-3", "3-5-2", "4-3-3", "4-4-2", "4-5-1", "5-4-1", "5-3-2"].some(
        (de) => {
          const [Ve, ce, ue] = de.split("-").map(Number),
            Ne = Math.max(0, Ve - (S[1] || 0)),
            Te = Math.max(0, ce - (S[2] || 0)),
            Pe = Math.max(0, ue - (S[3] || 0)),
            We = Math.max(0, 1 - (S[0] || 0)),
            ke = Ne + Te + Pe + We;
          return Object.values(S).reduce((Ze, je) => Ze + je, 0) + ke <= 11;
        }
      )
        ? null
        : "Invalid Formation"
    );
  }
  function R(H) {
    return H.map((J) => {
      const be = k.find((U) => U.id === J.teamId);
      return { ...J, team: be };
    });
  }
  function O(H) {
    t(9, (q = H));
  }
  function ne(H) {
    b(H), v(), t(10, (l = []));
  }
  function G(H) {
    Ql.call(this, a, H);
  }
  function M(H) {
    Ql.call(this, a, H);
  }
  function Y() {
    (B = fl(this)), t(5, B), t(1, k);
  }
  function te() {
    (y = fl(this)), t(0, y);
  }
  function D() {
    (F = Yl(this.value)), t(7, F);
  }
  function W() {
    (Z = Yl(this.value)), t(8, Z);
  }
  function X() {
    (j = this.value), t(6, j);
  }
  const ee = (H) => ne(H),
    ae = (H) => O(H + 1);
  return (
    (a.$$set = (H) => {
      "showAddPlayer" in H && t(2, (_ = H.showAddPlayer)),
        "closeAddPlayerModal" in H && t(3, (v = H.closeAddPlayerModal)),
        "handlePlayerSelection" in H && t(17, (b = H.handlePlayerSelection)),
        "fantasyTeam" in H && t(18, (I = H.fantasyTeam)),
        "filterPosition" in H && t(0, (y = H.filterPosition)),
        "filterColumn" in H && t(19, (x = H.filterColumn)),
        "bankBalance" in H && d(t(4, (E = H.bankBalance))),
        "players" in H && t(16, (g = H.players)),
        "teams" in H && t(1, (k = H.teams));
    }),
    (a.$$.update = () => {
      a.$$.dirty[0] & 590305 &&
        t(
          10,
          (l = g.filter(
            (H) =>
              (B === -1 || H.teamId === B) &&
              (y === -1 || H.position === y) &&
              x > -2 &&
              (F === 0 || H.value >= F) &&
              (Z === 0 || H.value <= Z) &&
              (j === "" || H.lastName.toLowerCase().includes(j.toLowerCase()))
          ))
        ),
        a.$$.dirty[0] & 786913 &&
          (B || y || x || F || Z || j) &&
          ((o = oe(ze(I)?.playerIds ?? [])), t(9, (q = 1))),
        a.$$.dirty[0] & 1536 && t(11, (r = R(l.slice((q - 1) * ql, q * ql)))),
        a.$$.dirty[0] & 262144 && (o = oe(ze(I)?.playerIds ?? [])),
        a.$$.dirty[0] & 2048 && t(12, (p = r.map((H) => L(H))));
    }),
    [
      y,
      k,
      _,
      v,
      E,
      B,
      j,
      F,
      Z,
      q,
      l,
      r,
      p,
      c,
      O,
      ne,
      g,
      b,
      I,
      x,
      G,
      M,
      Y,
      te,
      D,
      W,
      X,
      ee,
      ae,
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
          showAddPlayer: 2,
          closeAddPlayerModal: 3,
          handlePlayerSelection: 17,
          fantasyTeam: 18,
          filterPosition: 0,
          filterColumn: 19,
          bankBalance: 4,
          players: 16,
          teams: 1,
        },
        null,
        [-1, -1]
      );
  }
}
function or(a) {
  let e, t, l, r, o, p, c, f, d, _, v, b, I, y, x;
  return {
    c() {
      (e = pe("svg")),
        (t = pe("defs")),
        (l = pe("linearGradient")),
        (r = pe("linearGradient")),
        (o = pe("stop")),
        (p = pe("stop")),
        (c = pe("linearGradient")),
        (f = pe("stop")),
        (d = pe("stop")),
        (_ = pe("linearGradient")),
        (v = pe("linearGradient")),
        (b = pe("g")),
        (I = pe("path")),
        (y = pe("path")),
        (x = pe("circle")),
        this.h();
    },
    l(E) {
      e = ve(E, "svg", {
        viewBox: !0,
        class: !0,
        xmlns: !0,
        "xmlns:xlink": !0,
      });
      var g = u(e);
      t = ve(g, "defs", {});
      var k = u(t);
      (l = ve(k, "linearGradient", { id: !0 })),
        u(l).forEach(i),
        (r = ve(k, "linearGradient", { id: !0 }));
      var w = u(r);
      (o = ve(w, "stop", { style: !0, offset: !0 })),
        u(o).forEach(i),
        (p = ve(w, "stop", { style: !0, offset: !0 })),
        u(p).forEach(i),
        w.forEach(i),
        (c = ve(k, "linearGradient", { id: !0 }));
      var N = u(c);
      (f = ve(N, "stop", { style: !0, offset: !0 })),
        u(f).forEach(i),
        (d = ve(N, "stop", { style: !0, offset: !0 })),
        u(d).forEach(i),
        N.forEach(i),
        (_ = ve(k, "linearGradient", {
          id: !0,
          gradientUnits: !0,
          x1: !0,
          y1: !0,
          x2: !0,
          y2: !0,
          gradientTransform: !0,
          "xlink:href": !0,
        })),
        u(_).forEach(i),
        (v = ve(k, "linearGradient", {
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
        k.forEach(i),
        (b = ve(g, "g", { transform: !0 }));
      var B = u(b);
      (I = ve(B, "path", { d: !0, style: !0, transform: !0 })),
        u(I).forEach(i),
        (y = ve(B, "path", { style: !0, transform: !0, d: !0 })),
        u(y).forEach(i),
        (x = ve(B, "circle", { style: !0, cx: !0, cy: !0, r: !0 })),
        u(x).forEach(i),
        B.forEach(i),
        g.forEach(i),
        this.h();
    },
    h() {
      n(l, "id", "gradient-2"),
        ot(o, "stop-color", "rgb(251, 176, 59)"),
        n(o, "offset", "0"),
        ot(p, "stop-color", "rgb(240, 90, 36)"),
        n(p, "offset", "1"),
        n(r, "id", "gradient-5"),
        ot(f, "stop-color", "rgb(95, 37, 131)"),
        n(f, "offset", "0"),
        ot(d, "stop-color", "rgb(237, 30, 121)"),
        n(d, "offset", "1"),
        n(c, "id", "gradient-6"),
        n(_, "id", "gradient-6-1"),
        n(_, "gradientUnits", "userSpaceOnUse"),
        n(_, "x1", "973.216"),
        n(_, "y1", "100.665"),
        n(_, "x2", "973.216"),
        n(_, "y2", "388.077"),
        n(
          _,
          "gradientTransform",
          "matrix(0.974127, -0.22842, 0.310454, 1.352474, -95.300314, 85.515158)"
        ),
        Va(_, "xlink:href", "#gradient-6"),
        n(v, "id", "gradient-5-0"),
        n(v, "gradientUnits", "userSpaceOnUse"),
        n(v, "x1", "188.919"),
        n(v, "y1", "1.638"),
        n(v, "x2", "188.919"),
        n(v, "y2", "361.638"),
        n(
          v,
          "gradientTransform",
          "matrix(-0.999999, 0.0016, -0.002016, -1.25907, 376.779907, 357.264557)"
        ),
        Va(v, "xlink:href", "#gradient-5"),
        n(
          I,
          "d",
          "M 188.919 181.638 m -180 0 a 180 180 0 1 0 360 0 a 180 180 0 1 0 -360 0 Z M 188.919 181.638 m -100 0 a 100 100 0 0 1 200 0 a 100 100 0 0 1 -200 0 Z"
        ),
        ot(I, "fill", "url(#gradient-5-0)"),
        n(
          I,
          "transform",
          "matrix(1, 0.000074, -0.000074, 1, 61.094498, 68.347626)"
        ),
        ot(y, "stroke-width", "0px"),
        ot(y, "paint-order", "stroke"),
        ot(y, "fill", "url(#gradient-6-1)"),
        n(
          y,
          "transform",
          "matrix(1.031731, 0.000001, 0, 1.020801, -634.597351, 0.544882)"
        ),
        n(
          y,
          "d",
          "M 958.327234958 100.664699414 A 175.433 175.433 0 0 1 958.327234958 388.077300586 L 913.296322517 323.766492741 A 96.924 96.924 0 0 0 913.296322517 164.975507259 Z"
        ),
        ot(x, "fill", "rgb(25, 25, 25)"),
        n(x, "cx", "250"),
        n(x, "cy", "250"),
        n(x, "r", "100"),
        n(b, "transform", "matrix(1, 0, 0, 1, -69.98674, -69.986298)"),
        n(e, "viewBox", "0 0 361 361"),
        n(e, "class", a[0]),
        n(e, "xmlns", "http://www.w3.org/2000/svg"),
        n(e, "xmlns:xlink", "http://www.w3.org/1999/xlink");
    },
    m(E, g) {
      $(E, e, g),
        s(e, t),
        s(t, l),
        s(t, r),
        s(r, o),
        s(r, p),
        s(t, c),
        s(c, f),
        s(c, d),
        s(t, _),
        s(t, v),
        s(e, b),
        s(b, I),
        s(b, y),
        s(b, x);
    },
    p(E, [g]) {
      g & 1 && n(e, "class", E[0]);
    },
    i: Ae,
    o: Ae,
    d(E) {
      E && i(e);
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
class ns extends St {
  constructor(e) {
    super(), Ht(this, e, ir, or, Lt, { className: 0 });
  }
}
function os(a, e, t) {
  const l = a.slice();
  return (l[16] = e[t][0]), (l[2] = e[t][1]), l;
}
function is(a, e, t) {
  const l = a.slice();
  return (
    (l[19] = e[t].fixture), (l[20] = e[t].homeTeam), (l[21] = e[t].awayTeam), l
  );
}
function cs(a, e, t) {
  const l = a.slice();
  return (l[24] = e[t]), l;
}
function fs(a) {
  let e,
    t,
    l = a[24] + "",
    r;
  return {
    c() {
      (e = m("option")), (t = C("Gameweek ")), (r = C(l)), this.h();
    },
    l(o) {
      e = h(o, "OPTION", {});
      var p = u(e);
      (t = T(p, "Gameweek ")), (r = T(p, l)), p.forEach(i), this.h();
    },
    h() {
      (e.__value = a[24]), (e.value = e.__value);
    },
    m(o, p) {
      $(o, e, p), s(e, t), s(e, r);
    },
    p: Ae,
    d(o) {
      o && i(e);
    },
  };
}
function us(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c,
    f,
    d,
    _,
    v,
    b,
    I,
    y,
    x,
    E,
    g,
    k,
    w = ta(Number(a[19].kickOff)) + "",
    N,
    B,
    j,
    F,
    Z,
    q = (a[20] ? a[20].friendlyName : "") + "",
    oe,
    L,
    R,
    O,
    ne = (a[21] ? a[21].friendlyName : "") + "",
    G,
    M,
    Y,
    te,
    D,
    W = (a[19].status === 0 ? "-" : a[19].homeGoals) + "",
    X,
    ee,
    ae,
    H = (a[19].status === 0 ? "-" : a[19].awayGoals) + "",
    J,
    be,
    U;
  return (
    (p = new Al({
      props: {
        primaryColour: a[20] ? a[20].primaryColourHex : "",
        secondaryColour: a[20] ? a[20].secondaryColourHex : "",
        thirdColour: a[20] ? a[20].thirdColourHex : "",
      },
    })),
    (y = new Al({
      props: {
        primaryColour: a[21] ? a[21].primaryColourHex : "",
        secondaryColour: a[21] ? a[21].secondaryColourHex : "",
        thirdColour: a[21] ? a[21].thirdColourHex : "",
      },
    })),
    {
      c() {
        (e = m("div")),
          (t = m("div")),
          (l = m("div")),
          (r = m("div")),
          (o = m("a")),
          Fe(p.$$.fragment),
          (f = V()),
          (d = m("span")),
          (_ = C("v")),
          (v = V()),
          (b = m("div")),
          (I = m("a")),
          Fe(y.$$.fragment),
          (E = V()),
          (g = m("div")),
          (k = m("span")),
          (N = C(w)),
          (B = V()),
          (j = m("div")),
          (F = m("div")),
          (Z = m("a")),
          (oe = C(q)),
          (R = V()),
          (O = m("a")),
          (G = C(ne)),
          (Y = V()),
          (te = m("div")),
          (D = m("span")),
          (X = C(W)),
          (ee = V()),
          (ae = m("span")),
          (J = C(H)),
          this.h();
      },
      l(S) {
        e = h(S, "DIV", { class: !0 });
        var le = u(e);
        t = h(le, "DIV", { class: !0 });
        var Ee = u(t);
        l = h(Ee, "DIV", { class: !0 });
        var de = u(l);
        r = h(de, "DIV", { class: !0 });
        var Ve = u(r);
        o = h(Ve, "A", { href: !0 });
        var ce = u(o);
        Le(p.$$.fragment, ce),
          ce.forEach(i),
          Ve.forEach(i),
          (f = P(de)),
          (d = h(de, "SPAN", { class: !0 }));
        var ue = u(d);
        (_ = T(ue, "v")),
          ue.forEach(i),
          (v = P(de)),
          (b = h(de, "DIV", { class: !0 }));
        var Ne = u(b);
        I = h(Ne, "A", { href: !0 });
        var Te = u(I);
        Le(y.$$.fragment, Te),
          Te.forEach(i),
          Ne.forEach(i),
          de.forEach(i),
          (E = P(Ee)),
          (g = h(Ee, "DIV", { class: !0 }));
        var Pe = u(g);
        k = h(Pe, "SPAN", { class: !0 });
        var We = u(k);
        (N = T(We, w)),
          We.forEach(i),
          Pe.forEach(i),
          Ee.forEach(i),
          (B = P(le)),
          (j = h(le, "DIV", { class: !0 }));
        var ke = u(j);
        F = h(ke, "DIV", { class: !0 });
        var Ie = u(F);
        Z = h(Ie, "A", { class: !0, href: !0 });
        var Ze = u(Z);
        (oe = T(Ze, q)),
          Ze.forEach(i),
          (R = P(Ie)),
          (O = h(Ie, "A", { class: !0, href: !0 }));
        var je = u(O);
        (G = T(je, ne)),
          je.forEach(i),
          Ie.forEach(i),
          (Y = P(ke)),
          (te = h(ke, "DIV", { class: !0 }));
        var Ue = u(te);
        D = h(Ue, "SPAN", {});
        var qe = u(D);
        (X = T(qe, W)), qe.forEach(i), (ee = P(Ue)), (ae = h(Ue, "SPAN", {}));
        var lt = u(ae);
        (J = T(lt, H)),
          lt.forEach(i),
          Ue.forEach(i),
          ke.forEach(i),
          le.forEach(i),
          this.h();
      },
      h() {
        n(o, "href", (c = `/club?id=${a[19].homeTeamId}`)),
          n(r, "class", "w-8 items-center justify-center"),
          n(d, "class", "font-bold text-lg"),
          n(I, "href", (x = `/club?id=${a[19].awayTeamId}`)),
          n(b, "class", "w-8 items-center justify-center"),
          n(l, "class", "flex w-1/2 space-x-4 justify-center"),
          n(k, "class", "text-sm ml-4 md:ml-0 text-left"),
          n(g, "class", "flex w-1/2 md:justify-center"),
          n(t, "class", "flex items-center w-1/2 ml-4"),
          n(Z, "class", "my-1"),
          n(Z, "href", (L = `/club?id=${a[19].homeTeamId}`)),
          n(O, "class", "my-1"),
          n(O, "href", (M = `/club?id=${a[19].awayTeamId}`)),
          n(
            F,
            "class",
            "flex flex-col min-w-[120px] md:min-w-[200px] text-xs 3xl:text-base"
          ),
          n(te, "class", "flex flex-col items-center text-xs"),
          n(j, "class", "flex items-center space-x-10 w-1/2 md:justify-center"),
          n(
            e,
            "class",
            (be = `flex items-center justify-between py-2 border-b border-gray-700  
              ${a[19].status === 0 ? "text-gray-400" : "text-white"}`)
          );
      },
      m(S, le) {
        $(S, e, le),
          s(e, t),
          s(t, l),
          s(l, r),
          s(r, o),
          Oe(p, o, null),
          s(l, f),
          s(l, d),
          s(d, _),
          s(l, v),
          s(l, b),
          s(b, I),
          Oe(y, I, null),
          s(t, E),
          s(t, g),
          s(g, k),
          s(k, N),
          s(e, B),
          s(e, j),
          s(j, F),
          s(F, Z),
          s(Z, oe),
          s(F, R),
          s(F, O),
          s(O, G),
          s(j, Y),
          s(j, te),
          s(te, D),
          s(D, X),
          s(te, ee),
          s(te, ae),
          s(ae, J),
          (U = !0);
      },
      p(S, le) {
        const Ee = {};
        le & 2 && (Ee.primaryColour = S[20] ? S[20].primaryColourHex : ""),
          le & 2 &&
            (Ee.secondaryColour = S[20] ? S[20].secondaryColourHex : ""),
          le & 2 && (Ee.thirdColour = S[20] ? S[20].thirdColourHex : ""),
          p.$set(Ee),
          (!U || (le & 2 && c !== (c = `/club?id=${S[19].homeTeamId}`))) &&
            n(o, "href", c);
        const de = {};
        le & 2 && (de.primaryColour = S[21] ? S[21].primaryColourHex : ""),
          le & 2 &&
            (de.secondaryColour = S[21] ? S[21].secondaryColourHex : ""),
          le & 2 && (de.thirdColour = S[21] ? S[21].thirdColourHex : ""),
          y.$set(de),
          (!U || (le & 2 && x !== (x = `/club?id=${S[19].awayTeamId}`))) &&
            n(I, "href", x),
          (!U || le & 2) &&
            w !== (w = ta(Number(S[19].kickOff)) + "") &&
            ge(N, w),
          (!U || le & 2) &&
            q !== (q = (S[20] ? S[20].friendlyName : "") + "") &&
            ge(oe, q),
          (!U || (le & 2 && L !== (L = `/club?id=${S[19].homeTeamId}`))) &&
            n(Z, "href", L),
          (!U || le & 2) &&
            ne !== (ne = (S[21] ? S[21].friendlyName : "") + "") &&
            ge(G, ne),
          (!U || (le & 2 && M !== (M = `/club?id=${S[19].awayTeamId}`))) &&
            n(O, "href", M),
          (!U || le & 2) &&
            W !== (W = (S[19].status === 0 ? "-" : S[19].homeGoals) + "") &&
            ge(X, W),
          (!U || le & 2) &&
            H !== (H = (S[19].status === 0 ? "-" : S[19].awayGoals) + "") &&
            ge(J, H),
          (!U ||
            (le & 2 &&
              be !==
                (be = `flex items-center justify-between py-2 border-b border-gray-700  
              ${S[19].status === 0 ? "text-gray-400" : "text-white"}`))) &&
            n(e, "class", be);
      },
      i(S) {
        U || (re(p.$$.fragment, S), re(y.$$.fragment, S), (U = !0));
      },
      o(S) {
        fe(p.$$.fragment, S), fe(y.$$.fragment, S), (U = !1);
      },
      d(S) {
        S && i(e), Se(p), Se(y);
      },
    }
  );
}
function ds(a) {
  let e,
    t,
    l,
    r = a[16] + "",
    o,
    p,
    c,
    f,
    d = a[2],
    _ = [];
  for (let b = 0; b < d.length; b += 1) _[b] = us(is(a, d, b));
  const v = (b) =>
    fe(_[b], 1, 1, () => {
      _[b] = null;
    });
  return {
    c() {
      (e = m("div")), (t = m("div")), (l = m("h2")), (o = C(r)), (p = V());
      for (let b = 0; b < _.length; b += 1) _[b].c();
      (c = V()), this.h();
    },
    l(b) {
      e = h(b, "DIV", {});
      var I = u(e);
      t = h(I, "DIV", { class: !0 });
      var y = u(t);
      l = h(y, "H2", { class: !0 });
      var x = u(l);
      (o = T(x, r)), x.forEach(i), y.forEach(i), (p = P(I));
      for (let E = 0; E < _.length; E += 1) _[E].l(I);
      (c = P(I)), I.forEach(i), this.h();
    },
    h() {
      n(l, "class", "date-header ml-4 text-xs"),
        n(
          t,
          "class",
          "flex items-center justify-between border border-gray-700 py-2 bg-light-gray"
        );
    },
    m(b, I) {
      $(b, e, I), s(e, t), s(t, l), s(l, o), s(e, p);
      for (let y = 0; y < _.length; y += 1) _[y] && _[y].m(e, null);
      s(e, c), (f = !0);
    },
    p(b, I) {
      if (((!f || I & 2) && r !== (r = b[16] + "") && ge(o, r), I & 2)) {
        d = b[2];
        let y;
        for (y = 0; y < d.length; y += 1) {
          const x = is(b, d, y);
          _[y]
            ? (_[y].p(x, I), re(_[y], 1))
            : ((_[y] = us(x)), _[y].c(), re(_[y], 1), _[y].m(e, c));
        }
        for (it(), y = d.length; y < _.length; y += 1) v(y);
        ct();
      }
    },
    i(b) {
      if (!f) {
        for (let I = 0; I < d.length; I += 1) re(_[I]);
        f = !0;
      }
    },
    o(b) {
      _ = _.filter(Boolean);
      for (let I = 0; I < _.length; I += 1) fe(_[I]);
      f = !1;
    },
    d(b) {
      b && i(e), Et(_, b);
    },
  };
}
function cr(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c,
    f,
    d,
    _,
    v,
    b,
    I,
    y,
    x,
    E,
    g,
    k,
    w,
    N,
    B,
    j = a[3],
    F = [];
  for (let L = 0; L < j.length; L += 1) F[L] = fs(cs(a, j, L));
  let Z = Object.entries(a[1]),
    q = [];
  for (let L = 0; L < Z.length; L += 1) q[L] = ds(os(a, Z, L));
  const oe = (L) =>
    fe(q[L], 1, 1, () => {
      q[L] = null;
    });
  return {
    c() {
      (e = m("div")),
        (t = m("div")),
        (l = m("div")),
        (r = m("h1")),
        (o = C("Fixtures")),
        (p = V()),
        (c = m("div")),
        (f = m("button")),
        (d = C("<")),
        (v = V()),
        (b = m("select"));
      for (let L = 0; L < F.length; L += 1) F[L].c();
      (I = V()), (y = m("button")), (x = C(">")), (g = V()), (k = m("div"));
      for (let L = 0; L < q.length; L += 1) q[L].c();
      this.h();
    },
    l(L) {
      e = h(L, "DIV", { class: !0 });
      var R = u(e);
      t = h(R, "DIV", { class: !0 });
      var O = u(t);
      l = h(O, "DIV", { class: !0 });
      var ne = u(l);
      r = h(ne, "H1", { class: !0 });
      var G = u(r);
      (o = T(G, "Fixtures")),
        G.forEach(i),
        ne.forEach(i),
        (p = P(O)),
        (c = h(O, "DIV", { class: !0 }));
      var M = u(c);
      f = h(M, "BUTTON", { class: !0 });
      var Y = u(f);
      (d = T(Y, "<")),
        Y.forEach(i),
        (v = P(M)),
        (b = h(M, "SELECT", { class: !0 }));
      var te = u(b);
      for (let X = 0; X < F.length; X += 1) F[X].l(te);
      te.forEach(i), (I = P(M)), (y = h(M, "BUTTON", { class: !0 }));
      var D = u(y);
      (x = T(D, ">")),
        D.forEach(i),
        M.forEach(i),
        (g = P(O)),
        (k = h(O, "DIV", {}));
      var W = u(k);
      for (let X = 0; X < q.length; X += 1) q[X].l(W);
      W.forEach(i), O.forEach(i), R.forEach(i), this.h();
    },
    h() {
      n(r, "class", "mx-4 m-2 font-bold"),
        n(l, "class", "flex items-center justify-between py-2 bg-light-gray"),
        n(
          f,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1"
        ),
        (f.disabled = _ = a[0] === 1),
        n(
          b,
          "class",
          "p-2 fpl-dropdown text-xs md:text-base text-center mx-0 md:mx-2 min-w-[150px] sm:min-w-[100px]"
        ),
        a[0] === void 0 && ul(() => a[8].call(b)),
        n(
          y,
          "class",
          "text-base sm:text-xs md:text-base rounded fpl-button px-3 sm:px-2 px-3 py-1 ml-1"
        ),
        (y.disabled = E = a[0] === 38),
        n(c, "class", "flex items-center space-x-2 m-3 mx-4"),
        n(t, "class", "container-fluid"),
        n(e, "class", "bg-panel rounded-md m-4 flex-1");
    },
    m(L, R) {
      $(L, e, R),
        s(e, t),
        s(t, l),
        s(l, r),
        s(r, o),
        s(t, p),
        s(t, c),
        s(c, f),
        s(f, d),
        s(c, v),
        s(c, b);
      for (let O = 0; O < F.length; O += 1) F[O] && F[O].m(b, null);
      xt(b, a[0], !0), s(c, I), s(c, y), s(y, x), s(t, g), s(t, k);
      for (let O = 0; O < q.length; O += 1) q[O] && q[O].m(k, null);
      (w = !0),
        N ||
          ((B = [
            we(f, "click", a[7]),
            we(b, "change", a[8]),
            we(y, "click", a[9]),
          ]),
          (N = !0));
    },
    p(L, [R]) {
      if (
        ((!w || (R & 9 && _ !== (_ = L[0] === 1))) && (f.disabled = _), R & 8)
      ) {
        j = L[3];
        let O;
        for (O = 0; O < j.length; O += 1) {
          const ne = cs(L, j, O);
          F[O] ? F[O].p(ne, R) : ((F[O] = fs(ne)), F[O].c(), F[O].m(b, null));
        }
        for (; O < F.length; O += 1) F[O].d(1);
        F.length = j.length;
      }
      if (
        (R & 9 && xt(b, L[0]),
        (!w || (R & 9 && E !== (E = L[0] === 38))) && (y.disabled = E),
        R & 2)
      ) {
        Z = Object.entries(L[1]);
        let O;
        for (O = 0; O < Z.length; O += 1) {
          const ne = os(L, Z, O);
          q[O]
            ? (q[O].p(ne, R), re(q[O], 1))
            : ((q[O] = ds(ne)), q[O].c(), re(q[O], 1), q[O].m(k, null));
        }
        for (it(), O = Z.length; O < q.length; O += 1) oe(O);
        ct();
      }
    },
    i(L) {
      if (!w) {
        for (let R = 0; R < Z.length; R += 1) re(q[R]);
        w = !0;
      }
    },
    o(L) {
      q = q.filter(Boolean);
      for (let R = 0; R < q.length; R += 1) fe(q[R]);
      w = !1;
    },
    d(L) {
      L && i(e), Et(F, L), Et(q, L), (N = !1), Xl(B);
    },
  };
}
function fr(a, e, t) {
  let l,
    r,
    o = [],
    p = [],
    c = [],
    f = 1,
    d = Array.from({ length: 38 }, (k, w) => w + 1),
    _,
    v,
    b;
  la(async () => {
    await ll.sync(),
      await ea.sync(),
      await Wl.sync(),
      (_ = ll.subscribe((k) => {
        o = k;
      })),
      (v = ea.subscribe((k) => {
        t(2, (p = k)),
          t(
            5,
            (c = p.map((w) => ({
              fixture: w,
              homeTeam: y(w.homeTeamId),
              awayTeam: y(w.awayTeamId),
            })))
          );
      })),
      (b = Wl.subscribe((k) => {}));
  }),
    aa(() => {
      _?.(), v?.(), b?.();
    });
  const I = (k) => {
    t(0, (f = Math.max(1, Math.min(38, f + k))));
  };
  function y(k) {
    return o.find((w) => w.id === k);
  }
  const x = () => I(-1);
  function E() {
    (f = fl(this)), t(0, f), t(3, d);
  }
  const g = () => I(1);
  return (
    (a.$$.update = () => {
      a.$$.dirty & 33 &&
        t(6, (l = c.filter(({ fixture: k }) => k.gameweek === f))),
        a.$$.dirty & 64 &&
          t(
            1,
            (r = l.reduce((k, w) => {
              const N = new Date(Number(w.fixture.kickOff) / 1e6),
                j = new Intl.DateTimeFormat("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(N);
              return k[j] || (k[j] = []), k[j].push(w), k;
            }, {}))
          );
    }),
    [f, r, p, d, I, c, l, x, E, g]
  );
}
class ur extends St {
  constructor(e) {
    super(), Ht(this, e, fr, cr, Lt, {});
  }
}
function dr(a) {
  let e, t, l, r, o, p, c, f, d, _, v, b, I, y, x, E, g;
  return {
    c() {
      (e = pe("svg")),
        (t = pe("g")),
        (l = pe("path")),
        (r = pe("path")),
        (o = pe("path")),
        (p = pe("g")),
        (c = pe("path")),
        (f = pe("defs")),
        (d = pe("filter")),
        (_ = pe("feFlood")),
        (v = pe("feColorMatrix")),
        (b = pe("feOffset")),
        (I = pe("feGaussianBlur")),
        (y = pe("feComposite")),
        (x = pe("feColorMatrix")),
        (E = pe("feBlend")),
        (g = pe("feBlend")),
        this.h();
    },
    l(k) {
      e = ve(k, "svg", { xmlns: !0, class: !0, fill: !0, viewBox: !0 });
      var w = u(e);
      t = ve(w, "g", { filter: !0 });
      var N = u(t);
      (l = ve(N, "path", { d: !0, fill: !0 })),
        u(l).forEach(i),
        (r = ve(N, "path", { d: !0, fill: !0 })),
        u(r).forEach(i),
        (o = ve(N, "path", { d: !0, fill: !0 })),
        u(o).forEach(i),
        N.forEach(i),
        (p = ve(w, "g", { transform: !0 }));
      var B = u(p);
      (c = ve(B, "path", { d: !0, fill: !0 })),
        u(c).forEach(i),
        B.forEach(i),
        (f = ve(w, "defs", {}));
      var j = u(f);
      d = ve(j, "filter", {
        id: !0,
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        filterUnits: !0,
      });
      var F = u(d);
      (_ = ve(F, "feFlood", { "flood-opacity": !0, result: !0 })),
        u(_).forEach(i),
        (v = ve(F, "feColorMatrix", {
          in: !0,
          type: !0,
          values: !0,
          result: !0,
        })),
        u(v).forEach(i),
        (b = ve(F, "feOffset", { dy: !0 })),
        u(b).forEach(i),
        (I = ve(F, "feGaussianBlur", { stdDeviation: !0 })),
        u(I).forEach(i),
        (y = ve(F, "feComposite", { in2: !0, operator: !0 })),
        u(y).forEach(i),
        (x = ve(F, "feColorMatrix", { type: !0, values: !0 })),
        u(x).forEach(i),
        (E = ve(F, "feBlend", { mode: !0, in2: !0, result: !0 })),
        u(E).forEach(i),
        (g = ve(F, "feBlend", { mode: !0, in: !0, in2: !0, result: !0 })),
        u(g).forEach(i),
        F.forEach(i),
        j.forEach(i),
        w.forEach(i),
        this.h();
    },
    h() {
      n(
        l,
        "d",
        "M65.9308 38.3253L63.5966 33.0215L63.642 33.2129C63.5966 34.2107 63.5603 35.2633 63.533 36.366C63.4831 38.3299 63.4604 40.4442 63.4604 42.6587C63.4604 54.9386 64.1597 70.308 64.8727 79.9999H21.1266C21.835 70.2989 22.5389 54.9159 22.5389 42.6313C22.5389 40.4214 22.5162 38.3162 22.4663 36.3569C22.439 35.2542 22.4027 34.2062 22.3573 33.2129L22.3982 33.0215L20.0685 38.3253L9.30566 33.3131L20.5453 10.6213L20.5862 10.5438L20.6271 10.4573C20.6271 10.4573 31.6578 6.72087 32.0166 6.3609C32.0983 6.27889 32.2346 6.09662 32.3935 5.86424C34.2554 8.43871 36.6668 10.6122 39.4688 12.2252C40.2726 12.69 41.1037 13.1046 41.971 13.4737C42.3026 13.615 42.6432 13.7517 42.9883 13.8747V13.8838C42.9883 13.8838 42.9928 13.8838 42.9974 13.8793C43.0019 13.8838 43.0065 13.8838 43.011 13.8838V13.8747C43.3516 13.7517 43.6922 13.615 44.0237 13.4737C44.8865 13.1092 45.7267 12.69 46.5305 12.2252C49.3324 10.6122 51.7439 8.43871 53.6058 5.85968C53.7647 6.09662 53.901 6.27889 53.9827 6.3609C54.3415 6.72087 65.3722 10.4573 65.3722 10.4573L65.4131 10.5438L65.454 10.6213L76.6891 33.3131L65.9308 38.3253Z"
      ),
        n(l, "fill", a[1]),
        n(
          r,
          "d",
          "M51.2756 3.04364C51.1348 3.26691 50.985 3.48563 50.8351 3.69979C49.0504 6.26059 46.7298 8.43864 44.0232 10.0881C43.6917 10.2932 43.3556 10.4845 43.0105 10.6714C43.0105 10.6714 43.0059 10.6759 43.0014 10.6759C42.9969 10.6759 42.9923 10.6714 42.9878 10.6714C42.6426 10.4845 42.302 10.2886 41.9705 10.0836C39.2685 8.43864 36.9479 6.26059 35.1632 3.69979C35.0133 3.48563 34.8634 3.26691 34.7227 3.04364H51.2756Z"
        ),
        n(r, "fill", a[2]),
        n(
          o,
          "d",
          "M68.5512 8.58005L68.265 8.00136C68.265 8.00136 68.2514 7.99681 68.2287 7.98769C67.5294 7.75075 57.3478 4.29686 55.1726 3.35365C54.9546 3.25796 54.8138 3.18505 54.7775 3.1486C54.7502 3.12126 54.7184 3.08936 54.6866 3.0438C54.2416 2.49701 53.1699 0.715384 52.8429 0.164037C52.7793 0.0592356 52.743 0 52.743 0H33.2564C33.2564 0 33.22 0.0592356 33.1565 0.164037C32.8295 0.715384 31.7578 2.49701 31.3173 3.0438C31.2809 3.08936 31.2491 3.12126 31.2219 3.1486C31.1856 3.18505 31.0448 3.25796 30.8223 3.35365C28.6424 4.29686 18.4654 7.75075 17.7706 7.98769C17.7479 7.99681 17.7343 8.00136 17.7343 8.00136L17.4482 8.5846L4.33301 35.0629L18.5835 41.7019L20.0685 38.3254L9.3057 33.3132L20.5454 10.6214L20.5862 10.5439L20.6271 10.4574C20.6271 10.4574 31.6578 6.72096 32.0166 6.36099C32.0984 6.27897 32.2346 6.09671 32.3935 5.86432C34.2555 8.43879 36.6669 10.6123 39.4688 12.2253C40.2726 12.6901 41.1037 13.1047 41.9711 13.4738C42.3026 13.6151 42.6432 13.7518 42.9883 13.8748C42.9883 13.8748 42.9914 13.8763 42.9974 13.8794C42.9974 13.8794 43.0065 13.8794 43.011 13.8748C43.3516 13.7518 43.6922 13.6151 44.0237 13.4738C44.8866 13.1093 45.7267 12.6901 46.5305 12.2253C49.3325 10.6123 51.7439 8.43879 53.6058 5.85977C53.7648 6.09671 53.901 6.27897 53.9827 6.36099C54.3415 6.72096 65.3723 10.4574 65.3723 10.4574L65.4131 10.5439L65.454 10.6214L76.6891 33.3132L65.9308 38.3254L67.4158 41.7019L81.6663 35.0629L68.5512 8.58005ZM50.8356 3.69995C49.0509 6.26075 46.7303 8.43879 44.0237 10.0883C43.6922 10.2933 43.3562 10.4847 43.011 10.6715V10.6806H43.0019C42.9974 10.6806 42.9929 10.6806 42.9883 10.6806V10.6715C42.6432 10.4847 42.3026 10.2888 41.9711 10.0837C39.269 8.43879 36.9484 6.26075 35.1637 3.69995C35.0138 3.48579 34.864 3.26707 34.7232 3.0438H51.2761C51.1354 3.26707 50.9855 3.48579 50.8356 3.69995Z"
        ),
        n(o, "fill", a[3]),
        n(t, "filter", "url(#filter0_d_354_581)"),
        n(
          c,
          "d",
          "M16 6.66667H9.33333V0H6.66667V6.66667H0V9.33333H6.66667V16H9.33333V9.33333H16V6.66667Z"
        ),
        n(c, "fill", "#FFFFF"),
        n(p, "transform", "translate(36 30)"),
        n(_, "flood-opacity", "0"),
        n(_, "result", "BackgroundImageFix"),
        n(v, "in", "SourceAlpha"),
        n(v, "type", "matrix"),
        n(v, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"),
        n(v, "result", "hardAlpha"),
        n(b, "dy", "4"),
        n(I, "stdDeviation", "2"),
        n(y, "in2", "hardAlpha"),
        n(y, "operator", "out"),
        n(x, "type", "matrix"),
        n(x, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"),
        n(E, "mode", "normal"),
        n(E, "in2", "BackgroundImageFix"),
        n(E, "result", "effect1_dropShadow_354_581"),
        n(g, "mode", "normal"),
        n(g, "in", "SourceGraphic"),
        n(g, "in2", "effect1_dropShadow_354_581"),
        n(g, "result", "shape"),
        n(d, "id", "filter0_d_354_581"),
        n(d, "x", "0.333008"),
        n(d, "y", "0"),
        n(d, "width", "85.333"),
        n(d, "height", "87.9999"),
        n(d, "filterUnits", "userSpaceOnUse"),
        n(e, "xmlns", "http://www.w3.org/2000/svg"),
        n(e, "class", a[0]),
        n(e, "fill", "currentColor"),
        n(e, "viewBox", "0 0 86 88");
    },
    m(k, w) {
      $(k, e, w),
        s(e, t),
        s(t, l),
        s(t, r),
        s(t, o),
        s(e, p),
        s(p, c),
        s(e, f),
        s(f, d),
        s(d, _),
        s(d, v),
        s(d, b),
        s(d, I),
        s(d, y),
        s(d, x),
        s(d, E),
        s(d, g);
    },
    p(k, [w]) {
      w & 2 && n(l, "fill", k[1]),
        w & 4 && n(r, "fill", k[2]),
        w & 8 && n(o, "fill", k[3]),
        w & 1 && n(e, "class", k[0]);
    },
    i: Ae,
    o: Ae,
    d(k) {
      k && i(e);
    },
  };
}
function mr(a, e, t) {
  let { className: l = "" } = e,
    { primaryColour: r = "#2CE3A6" } = e,
    { secondaryColour: o = "#777777" } = e,
    { thirdColour: p = "#FFFFFF" } = e;
  return (
    (a.$$set = (c) => {
      "className" in c && t(0, (l = c.className)),
        "primaryColour" in c && t(1, (r = c.primaryColour)),
        "secondaryColour" in c && t(2, (o = c.secondaryColour)),
        "thirdColour" in c && t(3, (p = c.thirdColour));
    }),
    [l, r, o, p]
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
      n(
        t,
        "d",
        "M14.5979 8.93594L14.6033 8.89794V8.89927C14.6193 8.7806 14.6326 8.66127 14.6419 8.54127C14.6579 8.33994 14.5159 8.0006 14.1426 8.0006C13.8819 8.0006 13.6659 8.2006 13.6446 8.4606C13.6326 8.60794 13.6153 8.75394 13.5926 8.89794C13.1626 11.5986 10.8206 13.6666 7.99859 13.6666C5.97392 13.6666 4.19592 12.6019 3.19459 11.0033L4.52192 10.9999C4.79792 10.9999 5.02192 10.7759 5.02192 10.4999C5.02192 10.2239 4.79792 9.99994 4.52192 9.99994H1.83325C1.55725 9.99994 1.33325 10.2239 1.33325 10.4999V13.1993C1.33325 13.4753 1.55725 13.6993 1.83325 13.6993C2.10925 13.6993 2.33325 13.4759 2.33325 13.1993L2.33525 11.5159C3.51192 13.4066 5.60925 14.6666 7.99859 14.6666C11.3599 14.6666 14.1433 12.1726 14.5979 8.93594ZM1.41525 6.95327L1.40925 6.9906V6.98927C1.38592 7.1446 1.36725 7.30194 1.35459 7.46127C1.33859 7.6626 1.48059 8.00194 1.85392 8.00194C2.11459 8.00194 2.33059 7.80194 2.35192 7.54194C2.36659 7.35527 2.39059 7.17127 2.42325 6.9906C2.90059 4.34527 5.21592 2.33594 7.99792 2.33594C10.0226 2.33594 11.8006 3.4006 12.8019 4.99927L11.4746 5.0026C11.1986 5.0026 10.9746 5.2266 10.9746 5.5026C10.9746 5.7786 11.1986 6.0026 11.4746 6.0026H14.1633C14.4393 6.0026 14.6633 5.7786 14.6633 5.5026V2.80327C14.6633 2.52727 14.4393 2.30327 14.1633 2.30327C13.8873 2.30327 13.6633 2.5266 13.6633 2.80327L13.6613 4.4866C12.4846 2.59594 10.3873 1.33594 7.99792 1.33594C4.67525 1.33594 1.91792 3.77194 1.41525 6.95327Z"
      ),
        n(t, "fill", "white"),
        n(e, "xmlns", "http://www.w3.org/2000/svg"),
        n(e, "class", a[0]),
        n(e, "fill", "currentColor"),
        n(e, "viewBox", "0 0 16 16");
    },
    m(l, r) {
      $(l, e, r), s(e, t);
    },
    p(l, [r]) {
      r & 1 && n(e, "class", l[0]);
    },
    i: Ae,
    o: Ae,
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
      var o = u(e);
      (t = ve(o, "circle", {
        cx: !0,
        cy: !0,
        r: !0,
        fill: !0,
        "fill-opacity": !0,
      })),
        u(t).forEach(i),
        (l = ve(o, "path", { transform: !0, d: !0, fill: !0 })),
        u(l).forEach(i),
        o.forEach(i),
        this.h();
    },
    h() {
      n(t, "cx", "11.5"),
        n(t, "cy", "11"),
        n(t, "r", "11"),
        n(t, "fill", "#242529"),
        n(t, "fill-opacity", "0.9"),
        n(l, "transform", "translate(4.7,4) scale(0.8,0.8)"),
        n(
          l,
          "d",
          "M8.39289 1.61501C8.47689 1.44234 8.65289 1.33301 8.84489 1.33301C9.03756 1.33301 9.21289 1.44234 9.29689 1.61501C9.94622 2.94701 11.0636 5.24167 11.0636 5.24167C11.0636 5.24167 13.6042 5.59101 15.0782 5.79434C15.3469 5.83101 15.5116 6.05834 15.5116 6.29234C15.5116 6.41901 15.4636 6.54767 15.3576 6.64967C14.2842 7.67501 12.4362 9.44368 12.4362 9.44368C12.4362 9.44368 12.8876 11.955 13.1489 13.4117C13.2042 13.7197 12.9656 13.9997 12.6542 13.9997C12.5729 13.9997 12.4916 13.9803 12.4176 13.9403C11.1056 13.2417 8.84489 12.0397 8.84489 12.0397C8.84489 12.0397 6.58422 13.2417 5.27222 13.9403C5.19822 13.9803 5.11622 13.9997 5.03489 13.9997C4.72489 13.9997 4.48489 13.719 4.54089 13.4117C4.80289 11.955 5.25422 9.44368 5.25422 9.44368C5.25422 9.44368 3.40556 7.67501 2.33289 6.64967C2.22622 6.54767 2.17822 6.41901 2.17822 6.29301C2.17822 6.05834 2.34422 5.83034 2.61222 5.79434C4.08622 5.59101 6.62622 5.24167 6.62622 5.24167C6.62622 5.24167 7.74422 2.94701 8.39289 1.61501ZM8.84489 2.97034L7.27089 6.16501L3.77356 6.64434L6.33889 9.07301L5.70689 12.5763L8.84489 10.9063L11.9829 12.5763L11.3489 9.08567L13.9162 6.64434L10.3736 6.14034L8.84489 2.97034Z"
        ),
        n(l, "fill", "#2CE3A6"),
        n(e, "xmlns", "http://www.w3.org/2000/svg"),
        n(e, "class", a[0]),
        n(e, "fill", "currentColor"),
        n(e, "viewBox", "0 0 23 22");
    },
    m(r, o) {
      $(r, e, o), s(e, t), s(e, l);
    },
    p(r, [o]) {
      o & 1 && n(e, "class", r[0]);
    },
    i: Ae,
    o: Ae,
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
      var o = u(e);
      (t = ve(o, "circle", {
        cx: !0,
        cy: !0,
        r: !0,
        fill: !0,
        fillopacity: !0,
      })),
        u(t).forEach(i),
        (l = ve(o, "path", { transform: !0, d: !0, fill: !0 })),
        u(l).forEach(i),
        o.forEach(i),
        this.h();
    },
    h() {
      n(t, "cx", "11.5"),
        n(t, "cy", "11"),
        n(t, "r", "11"),
        n(t, "fill", "#242529"),
        n(t, "fillopacity", "0.9"),
        n(l, "transform", "translate(4.7,4) scale(0.8,0.8)"),
        n(
          l,
          "d",
          "M8.39289 1.61501C8.47689 1.44234 8.65289 1.33301 8.84489 1.33301C9.03756 1.33301 9.21289 1.44234 9.29689 1.61501C9.94622 2.94701 11.0636 5.24167 11.0636 5.24167C11.0636 5.24167 13.6042 5.59101 15.0782 5.79434C15.3469 5.83101 15.5116 6.05834 15.5116 6.29234C15.5116 6.41901 15.4636 6.54767 15.3576 6.64967C14.2842 7.67501 12.4362 9.44368 12.4362 9.44368C12.4362 9.44368 12.8876 11.955 13.1489 13.4117C13.2042 13.7197 12.9656 13.9997 12.6542 13.9997C12.5729 13.9997 12.4916 13.9803 12.4176 13.9403C11.1056 13.2417 8.84489 12.0397 8.84489 12.0397C8.84489 12.0397 6.58422 13.2417 5.27222 13.9403C5.19822 13.9803 5.11622 13.9997 5.03489 13.9997C4.72489 13.9997 4.48489 13.719 4.54089 13.4117C4.80289 11.955 5.25422 9.44368 5.25422 9.44368C5.25422 9.44368 3.40556 7.67501 2.33289 6.64967C2.22622 6.54767 2.17822 6.41901 2.17822 6.29301C2.17822 6.05834 2.34422 5.83034 2.61222 5.79434C4.08622 5.59101 6.62622 5.24167 6.62622 5.24167C6.62622 5.24167 7.74422 2.94701 8.39289 1.61501Z"
        ),
        n(l, "fill", "#2CE3A6"),
        n(e, "xmlns", "http://www.w3.org/2000/svg"),
        n(e, "class", a[0]),
        n(e, "fill", "currentColor"),
        n(e, "viewBox", "0 0 23 22");
    },
    m(r, o) {
      $(r, e, o), s(e, t), s(e, l);
    },
    p(r, [o]) {
      o & 1 && n(e, "class", r[0]);
    },
    i: Ae,
    o: Ae,
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
function ms(a, e, t) {
  const l = a.slice();
  return (l[66] = e[t]), (l[68] = t), l;
}
function hs(a, e, t) {
  const l = a.slice();
  (l[69] = e[t]), (l[75] = t);
  const r = l[31](l[68], l[75]);
  l[70] = r;
  const o = l[2]?.playerIds ?? [];
  l[71] = o;
  const p = l[71][l[70]];
  l[72] = p;
  const c = l[1].find(function (..._) {
    return a[45](l[72], ..._);
  });
  l[73] = c;
  const f = l[15].find(function (..._) {
    return a[46](l[73], ..._);
  });
  return (l[76] = f), l;
}
function _s(a, e, t) {
  const l = a.slice();
  return (l[66] = e[t]), (l[68] = t), l;
}
function ps(a, e, t) {
  const l = a.slice();
  (l[69] = e[t]), (l[75] = t);
  const r = l[31](l[68], l[75]);
  l[70] = r;
  const o = l[2]?.playerIds ?? [];
  l[71] = o;
  const p = l[71][l[70]];
  l[72] = p;
  const c = l[1].find(function (...d) {
    return a[41](l[72], ...d);
  });
  return (l[73] = c), l;
}
function wr(a) {
  const e = a.slice(),
    t = e[15].find(function (...r) {
      return a[37](e[73], ...r);
    });
  return (e[76] = t), e;
}
function vs(a, e, t) {
  const l = a.slice();
  return (l[79] = e[t]), l;
}
function bs(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c,
    f,
    d,
    _,
    v,
    b,
    I,
    y,
    x,
    E,
    g,
    k,
    w,
    N,
    B,
    j,
    F,
    Z,
    q,
    oe,
    L,
    R,
    O,
    ne,
    G,
    M,
    Y,
    te,
    D,
    W,
    X,
    ee,
    ae,
    H,
    J,
    be,
    U,
    S,
    le,
    Ee,
    de,
    Ve = a[2]?.playerIds.filter(ks).length + "",
    ce,
    ue,
    Ne,
    Te,
    Pe,
    We,
    ke,
    Ie,
    Ze,
    je,
    Ue,
    qe,
    lt,
    at = a[14].toFixed(2) + "",
    He,
    Tt,
    Rt,
    Vt,
    Pt,
    Yt,
    A,
    K,
    se,
    ie,
    me,
    ye,
    xe,
    Me,
    Je = (a[20] / 4).toFixed(2) + "",
    Qe,
    st,
    et,
    Re,
    kt,
    dt,
    rt,
    sl,
    nt,
    bt,
    rl,
    Wt,
    Ut,
    Jt = (a[19] === 1 / 0 ? "Unlimited" : a[19]) + "",
    Dt,
    Ye,
    gt,
    De,
    Vl,
    It,
    Ge,
    he,
    Ce,
    Q,
    tt,
    dl,
    Gt,
    Nt,
    Zt,
    Qt,
    qt,
    At,
    ml,
    ft,
    hl,
    mt,
    Ct,
    _l,
    nl,
    ol,
    pl,
    ht,
    el,
    il,
    Xt,
    vl,
    yt,
    _t,
    pt,
    Kt,
    Mt,
    Xe,
    bl,
    Bt,
    Be,
    gl,
    Pl;
  e = new nr({
    props: {
      handlePlayerSelection: a[30],
      filterPosition: a[10],
      filterColumn: a[11],
      showAddPlayer: a[13],
      closeAddPlayerModal: a[29],
      fantasyTeam: a[23],
      bankBalance: a[25],
      players: a[1],
      teams: a[15],
    },
  });
  let $t = a[21],
    Ke = [];
  for (let z = 0; z < $t.length; z += 1) Ke[z] = gs(vs(a, $t, z));
  const Nl = [Er, xr],
    Ft = [];
  function Dl(z, _e) {
    return z[12] ? 0 : 1;
  }
  return (
    (_t = Dl(a)),
    (pt = Ft[_t] = Nl[_t](a)),
    (Xe = new ur({})),
    (Bt = new Qs({
      props: {
        fantasyTeam: a[23],
        teams: a[15],
        players: a[1],
        activeGameweek: a[4],
      },
    })),
    {
      c() {
        Fe(e.$$.fragment),
          (t = V()),
          (l = m("div")),
          (r = m("div")),
          (o = m("div")),
          (p = m("div")),
          (c = m("p")),
          (f = C("Gameweek")),
          (d = V()),
          (_ = m("p")),
          (v = C(a[4])),
          (b = V()),
          (I = m("p")),
          (y = C(a[3])),
          (x = V()),
          (E = m("div")),
          (g = V()),
          (k = m("div")),
          (w = m("p")),
          (N = C("Kick Off:")),
          (B = V()),
          (j = m("div")),
          (F = m("p")),
          (Z = C(a[7])),
          (q = m("span")),
          (oe = C("d")),
          (L = C(`
                : `)),
          (R = C(a[8])),
          (O = m("span")),
          (ne = C("h")),
          (G = C(`
                : `)),
          (M = C(a[9])),
          (Y = m("span")),
          (te = C("m")),
          (D = V()),
          (W = m("p")),
          (X = C(a[5])),
          (ee = C(" | ")),
          (ae = C(a[6])),
          (H = V()),
          (J = m("div")),
          (be = V()),
          (U = m("div")),
          (S = m("p")),
          (le = C("Players")),
          (Ee = V()),
          (de = m("p")),
          (ce = C(Ve)),
          (ue = C("/11")),
          (Ne = V()),
          (Te = m("p")),
          (Pe = C("Selected")),
          (We = V()),
          (ke = m("div")),
          (Ie = m("div")),
          (Ze = m("p")),
          (je = C("Team Value")),
          (Ue = V()),
          (qe = m("p")),
          (lt = C("£")),
          (He = C(at)),
          (Tt = C("m")),
          (Rt = V()),
          (Vt = m("p")),
          (Pt = C("GBP")),
          (Yt = V()),
          (A = m("div")),
          (K = V()),
          (se = m("div")),
          (ie = m("p")),
          (me = C("Bank Balance")),
          (ye = V()),
          (xe = m("p")),
          (Me = C("£")),
          (Qe = C(Je)),
          (st = C("m")),
          (et = V()),
          (Re = m("p")),
          (kt = C("GBP")),
          (dt = V()),
          (rt = m("div")),
          (sl = V()),
          (nt = m("div")),
          (bt = m("p")),
          (rl = C("Transfers")),
          (Wt = V()),
          (Ut = m("p")),
          (Dt = C(Jt)),
          (Ye = V()),
          (gt = m("p")),
          (De = C("Available")),
          (Vl = V()),
          (It = m("div")),
          (Ge = m("div")),
          (he = m("div")),
          (Ce = m("button")),
          (Q = C("Pitch View")),
          (dl = V()),
          (Gt = m("button")),
          (Nt = C("List View")),
          (Qt = V()),
          (qt = m("div")),
          (At = m("span")),
          (ml = C(`Formation:
              `)),
          (ft = m("select"));
        for (let z = 0; z < Ke.length; z += 1) Ke[z].c();
        (hl = V()),
          (mt = m("div")),
          (Ct = m("button")),
          (_l = C("Auto Fill")),
          (pl = V()),
          (ht = m("button")),
          (el = C("Save Team")),
          (vl = V()),
          (yt = m("div")),
          pt.c(),
          (Kt = V()),
          (Mt = m("div")),
          Fe(Xe.$$.fragment),
          (bl = V()),
          Fe(Bt.$$.fragment),
          this.h();
      },
      l(z) {
        Le(e.$$.fragment, z), (t = P(z)), (l = h(z, "DIV", { class: !0 }));
        var _e = u(l);
        r = h(_e, "DIV", { class: !0 });
        var ut = u(r);
        o = h(ut, "DIV", { class: !0 });
        var wt = u(o);
        p = h(wt, "DIV", { class: !0 });
        var Ot = u(p);
        c = h(Ot, "P", { class: !0 });
        var vt = u(c);
        (f = T(vt, "Gameweek")),
          vt.forEach(i),
          (d = P(Ot)),
          (_ = h(Ot, "P", { class: !0 }));
        var Gl = u(_);
        (v = T(Gl, a[4])),
          Gl.forEach(i),
          (b = P(Ot)),
          (I = h(Ot, "P", { class: !0 }));
        var sa = u(I);
        (y = T(sa, a[3])),
          sa.forEach(i),
          Ot.forEach(i),
          (x = P(wt)),
          (E = h(wt, "DIV", { class: !0, style: !0 })),
          u(E).forEach(i),
          (g = P(wt)),
          (k = h(wt, "DIV", { class: !0 }));
        var yl = u(k);
        w = h(yl, "P", { class: !0 });
        var ra = u(w);
        (N = T(ra, "Kick Off:")),
          ra.forEach(i),
          (B = P(yl)),
          (j = h(yl, "DIV", { class: !0 }));
        var na = u(j);
        F = h(na, "P", { class: !0 });
        var zt = u(F);
        (Z = T(zt, a[7])), (q = h(zt, "SPAN", { class: !0 }));
        var oa = u(q);
        (oe = T(oa, "d")),
          oa.forEach(i),
          (L = T(
            zt,
            `
                : `
          )),
          (R = T(zt, a[8])),
          (O = h(zt, "SPAN", { class: !0 }));
        var ia = u(O);
        (ne = T(ia, "h")),
          ia.forEach(i),
          (G = T(
            zt,
            `
                : `
          )),
          (M = T(zt, a[9])),
          (Y = h(zt, "SPAN", { class: !0 }));
        var ca = u(Y);
        (te = T(ca, "m")),
          ca.forEach(i),
          zt.forEach(i),
          na.forEach(i),
          (D = P(yl)),
          (W = h(yl, "P", { class: !0 }));
        var Ml = u(W);
        (X = T(Ml, a[5])),
          (ee = T(Ml, " | ")),
          (ae = T(Ml, a[6])),
          Ml.forEach(i),
          yl.forEach(i),
          (H = P(wt)),
          (J = h(wt, "DIV", { class: !0, style: !0 })),
          u(J).forEach(i),
          (be = P(wt)),
          (U = h(wt, "DIV", { class: !0 }));
        var wl = u(U);
        S = h(wl, "P", { class: !0 });
        var fa = u(S);
        (le = T(fa, "Players")),
          fa.forEach(i),
          (Ee = P(wl)),
          (de = h(wl, "P", { class: !0 }));
        var Kl = u(de);
        (ce = T(Kl, Ve)),
          (ue = T(Kl, "/11")),
          Kl.forEach(i),
          (Ne = P(wl)),
          (Te = h(wl, "P", { class: !0 }));
        var ua = u(Te);
        (Pe = T(ua, "Selected")),
          ua.forEach(i),
          wl.forEach(i),
          wt.forEach(i),
          (We = P(ut)),
          (ke = h(ut, "DIV", { class: !0 }));
        var jt = u(ke);
        Ie = h(jt, "DIV", { class: !0 });
        var xl = u(Ie);
        Ze = h(xl, "P", { class: !0 });
        var da = u(Ze);
        (je = T(da, "Team Value")),
          da.forEach(i),
          (Ue = P(xl)),
          (qe = h(xl, "P", { class: !0 }));
        var Bl = u(qe);
        (lt = T(Bl, "£")),
          (He = T(Bl, at)),
          (Tt = T(Bl, "m")),
          Bl.forEach(i),
          (Rt = P(xl)),
          (Vt = h(xl, "P", { class: !0 }));
        var ma = u(Vt);
        (Pt = T(ma, "GBP")),
          ma.forEach(i),
          xl.forEach(i),
          (Yt = P(jt)),
          (A = h(jt, "DIV", { class: !0, style: !0 })),
          u(A).forEach(i),
          (K = P(jt)),
          (se = h(jt, "DIV", { class: !0 }));
        var El = u(se);
        ie = h(El, "P", { class: !0 });
        var ha = u(ie);
        (me = T(ha, "Bank Balance")),
          ha.forEach(i),
          (ye = P(El)),
          (xe = h(El, "P", { class: !0 }));
        var Fl = u(xe);
        (Me = T(Fl, "£")),
          (Qe = T(Fl, Je)),
          (st = T(Fl, "m")),
          Fl.forEach(i),
          (et = P(El)),
          (Re = h(El, "P", { class: !0 }));
        var _a = u(Re);
        (kt = T(_a, "GBP")),
          _a.forEach(i),
          El.forEach(i),
          (dt = P(jt)),
          (rt = h(jt, "DIV", { class: !0, style: !0 })),
          u(rt).forEach(i),
          (sl = P(jt)),
          (nt = h(jt, "DIV", { class: !0 }));
        var kl = u(nt);
        bt = h(kl, "P", { class: !0 });
        var pa = u(bt);
        (rl = T(pa, "Transfers")),
          pa.forEach(i),
          (Wt = P(kl)),
          (Ut = h(kl, "P", { class: !0 }));
        var va = u(Ut);
        (Dt = T(va, Jt)),
          va.forEach(i),
          (Ye = P(kl)),
          (gt = h(kl, "P", { class: !0 }));
        var ba = u(gt);
        (De = T(ba, "Available")),
          ba.forEach(i),
          kl.forEach(i),
          jt.forEach(i),
          ut.forEach(i),
          (Vl = P(_e)),
          (It = h(_e, "DIV", { class: !0 }));
        var ga = u(It);
        Ge = h(ga, "DIV", { class: !0 });
        var Il = u(Ge);
        he = h(Il, "DIV", { class: !0 });
        var Ol = u(he);
        Ce = h(Ol, "BUTTON", { class: !0 });
        var ya = u(Ce);
        (Q = T(ya, "Pitch View")),
          ya.forEach(i),
          (dl = P(Ol)),
          (Gt = h(Ol, "BUTTON", { class: !0 }));
        var wa = u(Gt);
        (Nt = T(wa, "List View")),
          wa.forEach(i),
          Ol.forEach(i),
          (Qt = P(Il)),
          (qt = h(Il, "DIV", { class: !0 }));
        var xa = u(qt);
        At = h(xa, "SPAN", { class: !0 });
        var $l = u(At);
        (ml = T(
          $l,
          `Formation:
              `
        )),
          (ft = h($l, "SELECT", { class: !0 }));
        var Ea = u(ft);
        for (let zl = 0; zl < Ke.length; zl += 1) Ke[zl].l(Ea);
        Ea.forEach(i),
          $l.forEach(i),
          xa.forEach(i),
          (hl = P(Il)),
          (mt = h(Il, "DIV", { class: !0 }));
        var Sl = u(mt);
        Ct = h(Sl, "BUTTON", { class: !0 });
        var ka = u(Ct);
        (_l = T(ka, "Auto Fill")),
          ka.forEach(i),
          (pl = P(Sl)),
          (ht = h(Sl, "BUTTON", { class: !0 }));
        var Ia = u(ht);
        (el = T(Ia, "Save Team")),
          Ia.forEach(i),
          Sl.forEach(i),
          Il.forEach(i),
          ga.forEach(i),
          (vl = P(_e)),
          (yt = h(_e, "DIV", { class: !0 }));
        var Hl = u(yt);
        pt.l(Hl), (Kt = P(Hl)), (Mt = h(Hl, "DIV", { class: !0 }));
        var Ca = u(Mt);
        Le(Xe.$$.fragment, Ca),
          Ca.forEach(i),
          Hl.forEach(i),
          (bl = P(_e)),
          Le(Bt.$$.fragment, _e),
          _e.forEach(i),
          this.h();
      },
      h() {
        n(c, "class", "text-gray-300 text-xs"),
          n(_, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
          n(I, "class", "text-gray-300 text-xs"),
          n(p, "class", "flex-grow mb-4 xl:mb-0"),
          n(
            E,
            "class",
            "h-px bg-gray-400 w-full xl:w-px xl:h-full xl:self-stretch"
          ),
          ot(E, "min-height", "2px"),
          ot(E, "min-width", "2px"),
          n(w, "class", "text-gray-300 text-xs mt-4 xl:mt-0"),
          n(q, "class", "text-gray-300 text-xs ml-1"),
          n(O, "class", "text-gray-300 text-xs ml-1"),
          n(Y, "class", "text-gray-300 text-xs ml-1"),
          n(F, "class", "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"),
          n(j, "class", "flex"),
          n(W, "class", "text-gray-300 text-xs"),
          n(k, "class", "flex-grow mb-4 xl:mb-0"),
          n(
            J,
            "class",
            "h-px bg-gray-400 w-full xl:w-px xl:h-full xl:self-stretch"
          ),
          ot(J, "min-height", "2px"),
          ot(J, "min-width", "2px"),
          n(S, "class", "text-gray-300 text-xs"),
          n(
            de,
            "class",
            "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"
          ),
          n(Te, "class", "text-gray-300 text-xs"),
          n(U, "class", "flex-grow mb-0 mt-4 xl:mt-0"),
          n(
            o,
            "class",
            "flex flex-col xl:flex-row justify-start xl:items-center text-white space-x-0 xl:space-x-4 flex-grow mx-4 my-2 xl:m-4 bg-panel p-4 rounded-md"
          ),
          n(Ze, "class", "text-gray-300 text-xs"),
          n(
            qe,
            "class",
            "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"
          ),
          n(Vt, "class", "text-gray-300 text-xs"),
          n(Ie, "class", "flex-grow mb-4 xl:mb-0"),
          n(
            A,
            "class",
            "h-px bg-gray-400 w-full xl:w-px xl:h-full xl:self-stretch"
          ),
          ot(A, "min-height", "2px"),
          ot(A, "min-width", "2px"),
          n(ie, "class", "text-gray-300 text-xs"),
          n(
            xe,
            "class",
            "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"
          ),
          n(Re, "class", "text-gray-300 text-xs"),
          n(se, "class", "flex-grow mb-4 xl:mb-0 mt-4 xl:mt-0"),
          n(
            rt,
            "class",
            "h-px bg-gray-400 w-full xl:w-px xl:h-full xl:self-stretch"
          ),
          ot(rt, "min-height", "2px"),
          ot(rt, "min-width", "2px"),
          n(bt, "class", "text-gray-300 text-xs"),
          n(
            Ut,
            "class",
            "text-2xl sm:text-3xl md:text-4xl mt-2 mb-2 font-bold"
          ),
          n(gt, "class", "text-gray-300 text-xs"),
          n(nt, "class", "flex-grow mb-4 xl:mb-0 mt-4 xl:mt-0"),
          n(
            ke,
            "class",
            "flex flex-col xl:flex-row justify-start xl:items-center text-white space-x-0 xl:space-x-4 flex-grow mx-4 my-1 xl:m-4 bg-panel py-2 px-4 lg:py-4 rounded-md"
          ),
          n(r, "class", "flex flex-col sm:flex-row"),
          n(
            Ce,
            "class",
            (tt = `btn ${
              a[12] ? "fpl-button" : "inactive-btn"
            } px-4 py-2 rounded-l-md font-bold md:text-xs xl:text-base min-w-[100px] lg:min-w-[125px] my-4`)
          ),
          n(
            Gt,
            "class",
            (Zt = `btn ${
              a[12] ? "inactive-btn" : "fpl-button"
            } px-4 py-2 rounded-r-md font-bold md:text-xs xl:text-base min-w-[100px] lg:min-w-[125px] my-4`)
          ),
          n(
            he,
            "class",
            "flex flex-row justify-between md:justify-start flex-grow ml-4 order-3 md:order-1"
          ),
          n(ft, "class", "p-2 fpl-dropdown xl:text-lg text-center"),
          a[0] === void 0 && ul(() => a[36].call(ft)),
          n(At, "class", "text-lg"),
          n(
            qt,
            "class",
            "text-center md:text-left w-full mt-0 md:ml-8 order-2 mt-4 md:mt-0"
          ),
          (Ct.disabled = nl =
            a[2]?.playerIds ? a[2]?.playerIds.filter(Is).length === 0 : !0),
          n(
            Ct,
            "class",
            (ol = `btn w-full md:w-auto md:text-xs xl:text-base px-4 py-2 rounded  
              ${
                a[2]?.playerIds && a[2]?.playerIds.filter(Cs).length > 0
                  ? "fpl-purple-btn"
                  : "bg-gray-500"
              } text-white min-w-[125px]`)
          ),
          (ht.disabled = il = !a[18]),
          n(
            ht,
            "class",
            (Xt = `btn w-full md:w-auto md:text-xs xl:text-base px-4 py-2 rounded ${
              a[18] ? "fpl-purple-btn" : "bg-gray-500"
            } text-white min-w-[125px]`)
          ),
          n(
            mt,
            "class",
            "flex flex-col md:flex-row w-full md:justify-end gap-4 mr-0 md:mr-4 order-1 md:order-3 mt-2 md:mt-0"
          ),
          n(
            Ge,
            "class",
            "flex flex-col md:flex-row justify-between items-center text-white mx-4 my-2 xl:m-4 bg-panel p-2 xl:p-4 rounded-md md:w-full"
          ),
          n(It, "class", "flex flex-col md:flex-row"),
          n(Mt, "class", "flex w-100 xl:w-1/2"),
          n(yt, "class", "flex flex-col xl:flex-row"),
          n(l, "class", "sm:m-1 md:m-2 lg:m-3 xl:m-4");
      },
      m(z, _e) {
        Oe(e, z, _e),
          $(z, t, _e),
          $(z, l, _e),
          s(l, r),
          s(r, o),
          s(o, p),
          s(p, c),
          s(c, f),
          s(p, d),
          s(p, _),
          s(_, v),
          s(p, b),
          s(p, I),
          s(I, y),
          s(o, x),
          s(o, E),
          s(o, g),
          s(o, k),
          s(k, w),
          s(w, N),
          s(k, B),
          s(k, j),
          s(j, F),
          s(F, Z),
          s(F, q),
          s(q, oe),
          s(F, L),
          s(F, R),
          s(F, O),
          s(O, ne),
          s(F, G),
          s(F, M),
          s(F, Y),
          s(Y, te),
          s(k, D),
          s(k, W),
          s(W, X),
          s(W, ee),
          s(W, ae),
          s(o, H),
          s(o, J),
          s(o, be),
          s(o, U),
          s(U, S),
          s(S, le),
          s(U, Ee),
          s(U, de),
          s(de, ce),
          s(de, ue),
          s(U, Ne),
          s(U, Te),
          s(Te, Pe),
          s(r, We),
          s(r, ke),
          s(ke, Ie),
          s(Ie, Ze),
          s(Ze, je),
          s(Ie, Ue),
          s(Ie, qe),
          s(qe, lt),
          s(qe, He),
          s(qe, Tt),
          s(Ie, Rt),
          s(Ie, Vt),
          s(Vt, Pt),
          s(ke, Yt),
          s(ke, A),
          s(ke, K),
          s(ke, se),
          s(se, ie),
          s(ie, me),
          s(se, ye),
          s(se, xe),
          s(xe, Me),
          s(xe, Qe),
          s(xe, st),
          s(se, et),
          s(se, Re),
          s(Re, kt),
          s(ke, dt),
          s(ke, rt),
          s(ke, sl),
          s(ke, nt),
          s(nt, bt),
          s(bt, rl),
          s(nt, Wt),
          s(nt, Ut),
          s(Ut, Dt),
          s(nt, Ye),
          s(nt, gt),
          s(gt, De),
          s(l, Vl),
          s(l, It),
          s(It, Ge),
          s(Ge, he),
          s(he, Ce),
          s(Ce, Q),
          s(he, dl),
          s(he, Gt),
          s(Gt, Nt),
          s(Ge, Qt),
          s(Ge, qt),
          s(qt, At),
          s(At, ml),
          s(At, ft);
        for (let ut = 0; ut < Ke.length; ut += 1) Ke[ut] && Ke[ut].m(ft, null);
        xt(ft, a[0], !0),
          s(Ge, hl),
          s(Ge, mt),
          s(mt, Ct),
          s(Ct, _l),
          s(mt, pl),
          s(mt, ht),
          s(ht, el),
          s(l, vl),
          s(l, yt),
          Ft[_t].m(yt, null),
          s(yt, Kt),
          s(yt, Mt),
          Oe(Xe, Mt, null),
          s(l, bl),
          Oe(Bt, l, null),
          (Be = !0),
          gl ||
            ((Pl = [
              we(Ce, "click", a[26]),
              we(Gt, "click", a[27]),
              we(ft, "change", a[36]),
              we(Ct, "click", a[34]),
              we(ht, "click", a[35]),
            ]),
            (gl = !0));
      },
      p(z, _e) {
        const ut = {};
        if (
          (_e[0] & 1024 && (ut.filterPosition = z[10]),
          _e[0] & 2048 && (ut.filterColumn = z[11]),
          _e[0] & 8192 && (ut.showAddPlayer = z[13]),
          _e[0] & 2 && (ut.players = z[1]),
          _e[0] & 32768 && (ut.teams = z[15]),
          e.$set(ut),
          (!Be || _e[0] & 16) && ge(v, z[4]),
          (!Be || _e[0] & 8) && ge(y, z[3]),
          (!Be || _e[0] & 128) && ge(Z, z[7]),
          (!Be || _e[0] & 256) && ge(R, z[8]),
          (!Be || _e[0] & 512) && ge(M, z[9]),
          (!Be || _e[0] & 32) && ge(X, z[5]),
          (!Be || _e[0] & 64) && ge(ae, z[6]),
          (!Be || _e[0] & 4) &&
            Ve !== (Ve = z[2]?.playerIds.filter(ks).length + "") &&
            ge(ce, Ve),
          (!Be || _e[0] & 16384) &&
            at !== (at = z[14].toFixed(2) + "") &&
            ge(He, at),
          (!Be || _e[0] & 1048576) &&
            Je !== (Je = (z[20] / 4).toFixed(2) + "") &&
            ge(Qe, Je),
          (!Be || _e[0] & 524288) &&
            Jt !== (Jt = (z[19] === 1 / 0 ? "Unlimited" : z[19]) + "") &&
            ge(Dt, Jt),
          (!Be ||
            (_e[0] & 4096 &&
              tt !==
                (tt = `btn ${
                  z[12] ? "fpl-button" : "inactive-btn"
                } px-4 py-2 rounded-l-md font-bold md:text-xs xl:text-base min-w-[100px] lg:min-w-[125px] my-4`))) &&
            n(Ce, "class", tt),
          (!Be ||
            (_e[0] & 4096 &&
              Zt !==
                (Zt = `btn ${
                  z[12] ? "inactive-btn" : "fpl-button"
                } px-4 py-2 rounded-r-md font-bold md:text-xs xl:text-base min-w-[100px] lg:min-w-[125px] my-4`))) &&
            n(Gt, "class", Zt),
          _e[0] & 2097152)
        ) {
          $t = z[21];
          let vt;
          for (vt = 0; vt < $t.length; vt += 1) {
            const Gl = vs(z, $t, vt);
            Ke[vt]
              ? Ke[vt].p(Gl, _e)
              : ((Ke[vt] = gs(Gl)), Ke[vt].c(), Ke[vt].m(ft, null));
          }
          for (; vt < Ke.length; vt += 1) Ke[vt].d(1);
          Ke.length = $t.length;
        }
        _e[0] & 2097153 && xt(ft, z[0]),
          (!Be ||
            (_e[0] & 4 &&
              nl !==
                (nl = z[2]?.playerIds
                  ? z[2]?.playerIds.filter(Is).length === 0
                  : !0))) &&
            (Ct.disabled = nl),
          (!Be ||
            (_e[0] & 4 &&
              ol !==
                (ol = `btn w-full md:w-auto md:text-xs xl:text-base px-4 py-2 rounded  
              ${
                z[2]?.playerIds && z[2]?.playerIds.filter(Cs).length > 0
                  ? "fpl-purple-btn"
                  : "bg-gray-500"
              } text-white min-w-[125px]`))) &&
            n(Ct, "class", ol),
          (!Be || (_e[0] & 262144 && il !== (il = !z[18]))) &&
            (ht.disabled = il),
          (!Be ||
            (_e[0] & 262144 &&
              Xt !==
                (Xt = `btn w-full md:w-auto md:text-xs xl:text-base px-4 py-2 rounded ${
                  z[18] ? "fpl-purple-btn" : "bg-gray-500"
                } text-white min-w-[125px]`))) &&
            n(ht, "class", Xt);
        let wt = _t;
        (_t = Dl(z)),
          _t === wt
            ? Ft[_t].p(z, _e)
            : (it(),
              fe(Ft[wt], 1, 1, () => {
                Ft[wt] = null;
              }),
              ct(),
              (pt = Ft[_t]),
              pt ? pt.p(z, _e) : ((pt = Ft[_t] = Nl[_t](z)), pt.c()),
              re(pt, 1),
              pt.m(yt, Kt));
        const Ot = {};
        _e[0] & 32768 && (Ot.teams = z[15]),
          _e[0] & 2 && (Ot.players = z[1]),
          _e[0] & 16 && (Ot.activeGameweek = z[4]),
          Bt.$set(Ot);
      },
      i(z) {
        Be ||
          (re(e.$$.fragment, z),
          re(pt),
          re(Xe.$$.fragment, z),
          re(Bt.$$.fragment, z),
          (Be = !0));
      },
      o(z) {
        fe(e.$$.fragment, z),
          fe(pt),
          fe(Xe.$$.fragment, z),
          fe(Bt.$$.fragment, z),
          (Be = !1);
      },
      d(z) {
        Se(e, z),
          z && i(t),
          z && i(l),
          Et(Ke, z),
          Ft[_t].d(),
          Se(Xe),
          Se(Bt),
          (gl = !1),
          Xl(Pl);
      },
    }
  );
}
function gs(a) {
  let e,
    t = a[79] + "",
    l,
    r;
  return {
    c() {
      (e = m("option")), (l = C(t)), this.h();
    },
    l(o) {
      e = h(o, "OPTION", {});
      var p = u(e);
      (l = T(p, t)), p.forEach(i), this.h();
    },
    h() {
      (e.__value = r = a[79]), (e.value = e.__value);
    },
    m(o, p) {
      $(o, e, p), s(e, l);
    },
    p(o, p) {
      p[0] & 2097152 && t !== (t = o[79] + "") && ge(l, t),
        p[0] & 2097152 &&
          r !== (r = o[79]) &&
          ((e.__value = r), (e.value = e.__value));
    },
    d(o) {
      o && i(e);
    },
  };
}
function xr(a) {
  let e,
    t,
    l,
    r = a[17],
    o = [];
  for (let c = 0; c < r.length; c += 1) o[c] = ws(ms(a, r, c));
  const p = (c) =>
    fe(o[c], 1, 1, () => {
      o[c] = null;
    });
  return {
    c() {
      (e = m("div")), (t = m("div"));
      for (let c = 0; c < o.length; c += 1) o[c].c();
      this.h();
    },
    l(c) {
      e = h(c, "DIV", { class: !0 });
      var f = u(e);
      t = h(f, "DIV", { class: !0 });
      var d = u(t);
      for (let _ = 0; _ < o.length; _ += 1) o[_].l(d);
      d.forEach(i), f.forEach(i), this.h();
    },
    h() {
      n(t, "class", "container-fluid"),
        n(e, "class", "bg-panel rounded-md m-4 flex-1");
    },
    m(c, f) {
      $(c, e, f), s(e, t);
      for (let d = 0; d < o.length; d += 1) o[d] && o[d].m(t, null);
      l = !0;
    },
    p(c, f) {
      if ((f[0] & 268599302) | (f[1] & 7)) {
        r = c[17];
        let d;
        for (d = 0; d < r.length; d += 1) {
          const _ = ms(c, r, d);
          o[d]
            ? (o[d].p(_, f), re(o[d], 1))
            : ((o[d] = ws(_)), o[d].c(), re(o[d], 1), o[d].m(t, null));
        }
        for (it(), d = r.length; d < o.length; d += 1) p(d);
        ct();
      }
    },
    i(c) {
      if (!l) {
        for (let f = 0; f < r.length; f += 1) re(o[f]);
        l = !0;
      }
    },
    o(c) {
      o = o.filter(Boolean);
      for (let f = 0; f < o.length; f += 1) fe(o[f]);
      l = !1;
    },
    d(c) {
      c && i(e), Et(o, c);
    },
  };
}
function Er(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c,
    f,
    d,
    _,
    v,
    b,
    I,
    y,
    x,
    E,
    g,
    k,
    w,
    N,
    B,
    j,
    F,
    Z,
    q,
    oe,
    L,
    R,
    O;
  (I = new ns({ props: { className: "h-4 md:h-6 mr-1 md:mr-2" } })),
    (Z = new ns({ props: { className: "h-4 md:h-6 mr-1 md:mr-2" } }));
  let ne = a[17],
    G = [];
  for (let Y = 0; Y < ne.length; Y += 1) G[Y] = Es(_s(a, ne, Y));
  const M = (Y) =>
    fe(G[Y], 1, 1, () => {
      G[Y] = null;
    });
  return {
    c() {
      (e = m("div")),
        (t = m("img")),
        (r = V()),
        (o = m("div")),
        (p = m("div")),
        (c = m("div")),
        (f = m("img")),
        (_ = V()),
        (v = m("div")),
        (b = m("a")),
        Fe(I.$$.fragment),
        (y = V()),
        (x = m("span")),
        (E = C("OpenChat")),
        (g = V()),
        (k = m("div")),
        (w = m("img")),
        (B = V()),
        (j = m("div")),
        (F = m("a")),
        Fe(Z.$$.fragment),
        (q = V()),
        (oe = m("span")),
        (L = C("OpenChat")),
        (R = V());
      for (let Y = 0; Y < G.length; Y += 1) G[Y].c();
      this.h();
    },
    l(Y) {
      e = h(Y, "DIV", { class: !0 });
      var te = u(e);
      (t = h(te, "IMG", { src: !0, alt: !0, class: !0 })),
        (r = P(te)),
        (o = h(te, "DIV", { class: !0 }));
      var D = u(o);
      p = h(D, "DIV", { class: !0 });
      var W = u(p);
      c = h(W, "DIV", { class: !0 });
      var X = u(c);
      (f = h(X, "IMG", { class: !0, src: !0, alt: !0 })),
        (_ = P(X)),
        (v = h(X, "DIV", { class: !0 }));
      var ee = u(v);
      b = h(ee, "A", { class: !0, target: !0, href: !0 });
      var ae = u(b);
      Le(I.$$.fragment, ae), (y = P(ae)), (x = h(ae, "SPAN", { class: !0 }));
      var H = u(x);
      (E = T(H, "OpenChat")),
        H.forEach(i),
        ae.forEach(i),
        ee.forEach(i),
        X.forEach(i),
        (g = P(W)),
        (k = h(W, "DIV", { class: !0 }));
      var J = u(k);
      (w = h(J, "IMG", { class: !0, src: !0, alt: !0 })),
        (B = P(J)),
        (j = h(J, "DIV", { class: !0 }));
      var be = u(j);
      F = h(be, "A", { class: !0, target: !0, href: !0 });
      var U = u(F);
      Le(Z.$$.fragment, U), (q = P(U)), (oe = h(U, "SPAN", { class: !0 }));
      var S = u(oe);
      (L = T(S, "OpenChat")),
        S.forEach(i),
        U.forEach(i),
        be.forEach(i),
        J.forEach(i),
        W.forEach(i),
        (R = P(D));
      for (let le = 0; le < G.length; le += 1) G[le].l(D);
      D.forEach(i), te.forEach(i), this.h();
    },
    h() {
      cl(t.src, (l = "pitch.png")) || n(t, "src", l),
        n(t, "alt", "pitch"),
        n(t, "class", "w-full"),
        n(f, "class", "h-6 sm:h-8 md:h-12 m-0 md:m-1"),
        cl(f.src, (d = "board.png")) || n(f, "src", d),
        n(f, "alt", "OpenChat"),
        n(x, "class", "text-white text-xs md:text-xl mr-4 oc-logo"),
        n(
          b,
          "class",
          "flex items-center justify-center w-full h-full px-2 md:px-4 ml-1 md:ml-0"
        ),
        n(b, "target", "_blank"),
        n(
          b,
          "href",
          "https://oc.app/community/uf3iv-naaaa-aaaar-ar3ta-cai/channel/231651284198326210763327878874377361028/?ref=zv6hh-xaaaa-aaaar-ac35q-cai"
        ),
        n(v, "class", "absolute top-0 left-0 w-full h-full"),
        n(c, "class", "relative inline-block"),
        n(w, "class", "h-6 sm:h-8 md:h-12 m-0 md:m-1"),
        cl(w.src, (N = "board.png")) || n(w, "src", N),
        n(w, "alt", "OpenChat"),
        n(oe, "class", "text-white text-xs md:text-xl mr-4 oc-logo"),
        n(
          F,
          "class",
          "flex items-center justify-center w-full h-full px-2 md:px-4 ml-1 md:ml-0"
        ),
        n(F, "target", "_blank"),
        n(
          F,
          "href",
          "https://oc.app/community/uf3iv-naaaa-aaaar-ar3ta-cai/channel/231651284198326210763327878874377361028/?ref=zv6hh-xaaaa-aaaar-ac35q-cai"
        ),
        n(j, "class", "absolute top-0 left-0 w-full h-full"),
        n(k, "class", "relative inline-block"),
        n(p, "class", "flex justify-around w-full h-auto"),
        n(o, "class", "absolute top-0 left-0 right-0 bottom-0"),
        n(e, "class", "relative w-full xl:w-1/2 mt-4");
    },
    m(Y, te) {
      $(Y, e, te),
        s(e, t),
        s(e, r),
        s(e, o),
        s(o, p),
        s(p, c),
        s(c, f),
        s(c, _),
        s(c, v),
        s(v, b),
        Oe(I, b, null),
        s(b, y),
        s(b, x),
        s(x, E),
        s(p, g),
        s(p, k),
        s(k, w),
        s(k, B),
        s(k, j),
        s(j, F),
        Oe(Z, F, null),
        s(F, q),
        s(F, oe),
        s(oe, L),
        s(o, R);
      for (let D = 0; D < G.length; D += 1) G[D] && G[D].m(o, null);
      O = !0;
    },
    p(Y, te) {
      if ((te[0] & 268599302) | (te[1] & 7)) {
        ne = Y[17];
        let D;
        for (D = 0; D < ne.length; D += 1) {
          const W = _s(Y, ne, D);
          G[D]
            ? (G[D].p(W, te), re(G[D], 1))
            : ((G[D] = Es(W)), G[D].c(), re(G[D], 1), G[D].m(o, null));
        }
        for (it(), D = ne.length; D < G.length; D += 1) M(D);
        ct();
      }
    },
    i(Y) {
      if (!O) {
        re(I.$$.fragment, Y), re(Z.$$.fragment, Y);
        for (let te = 0; te < ne.length; te += 1) re(G[te]);
        O = !0;
      }
    },
    o(Y) {
      fe(I.$$.fragment, Y), fe(Z.$$.fragment, Y), (G = G.filter(Boolean));
      for (let te = 0; te < G.length; te += 1) fe(G[te]);
      O = !1;
    },
    d(Y) {
      Y && i(e), Se(I), Se(Z), Et(G, Y);
    },
  };
}
function kr(a) {
  let e, t, l, r, o, p, c, f, d, _, v, b, I, y, x;
  return {
    c() {
      (e = m("div")),
        (t = m("div")),
        (l = C("Goalkeeper")),
        (r = V()),
        (o = m("div")),
        (p = C("(c)")),
        (c = V()),
        (f = m("div")),
        (d = C("Team")),
        (_ = V()),
        (v = m("div")),
        (b = C("Value")),
        (I = V()),
        (y = m("div")),
        (x = C(" ")),
        this.h();
    },
    l(E) {
      e = h(E, "DIV", { class: !0 });
      var g = u(e);
      t = h(g, "DIV", { class: !0 });
      var k = u(t);
      (l = T(k, "Goalkeeper")),
        k.forEach(i),
        (r = P(g)),
        (o = h(g, "DIV", { class: !0 }));
      var w = u(o);
      (p = T(w, "(c)")),
        w.forEach(i),
        (c = P(g)),
        (f = h(g, "DIV", { class: !0 }));
      var N = u(f);
      (d = T(N, "Team")),
        N.forEach(i),
        (_ = P(g)),
        (v = h(g, "DIV", { class: !0 }));
      var B = u(v);
      (b = T(B, "Value")),
        B.forEach(i),
        (I = P(g)),
        (y = h(g, "DIV", { class: !0 }));
      var j = u(y);
      (x = T(j, " ")), j.forEach(i), g.forEach(i), this.h();
    },
    h() {
      n(t, "class", "w-1/3"),
        n(o, "class", "w-1/6"),
        n(f, "class", "w-1/3"),
        n(v, "class", "w-1/6"),
        n(y, "class", "w-1/6"),
        n(
          e,
          "class",
          "flex items-center justify-between py-2 bg-light-gray px-4"
        );
    },
    m(E, g) {
      $(E, e, g),
        s(e, t),
        s(t, l),
        s(e, r),
        s(e, o),
        s(o, p),
        s(e, c),
        s(e, f),
        s(f, d),
        s(e, _),
        s(e, v),
        s(v, b),
        s(e, I),
        s(e, y),
        s(y, x);
    },
    d(E) {
      E && i(e);
    },
  };
}
function Ir(a) {
  let e, t, l, r, o, p, c, f, d, _, v, b, I, y, x;
  return {
    c() {
      (e = m("div")),
        (t = m("div")),
        (l = C("Defenders")),
        (r = V()),
        (o = m("div")),
        (p = C("(c)")),
        (c = V()),
        (f = m("div")),
        (d = C("Team")),
        (_ = V()),
        (v = m("div")),
        (b = C("Value")),
        (I = V()),
        (y = m("div")),
        (x = C(" ")),
        this.h();
    },
    l(E) {
      e = h(E, "DIV", { class: !0 });
      var g = u(e);
      t = h(g, "DIV", { class: !0 });
      var k = u(t);
      (l = T(k, "Defenders")),
        k.forEach(i),
        (r = P(g)),
        (o = h(g, "DIV", { class: !0 }));
      var w = u(o);
      (p = T(w, "(c)")),
        w.forEach(i),
        (c = P(g)),
        (f = h(g, "DIV", { class: !0 }));
      var N = u(f);
      (d = T(N, "Team")),
        N.forEach(i),
        (_ = P(g)),
        (v = h(g, "DIV", { class: !0 }));
      var B = u(v);
      (b = T(B, "Value")),
        B.forEach(i),
        (I = P(g)),
        (y = h(g, "DIV", { class: !0 }));
      var j = u(y);
      (x = T(j, " ")), j.forEach(i), g.forEach(i), this.h();
    },
    h() {
      n(t, "class", "w-1/3"),
        n(o, "class", "w-1/6"),
        n(f, "class", "w-1/3"),
        n(v, "class", "w-1/6"),
        n(y, "class", "w-1/6"),
        n(
          e,
          "class",
          "flex items-center justify-between py-2 bg-light-gray px-4"
        );
    },
    m(E, g) {
      $(E, e, g),
        s(e, t),
        s(t, l),
        s(e, r),
        s(e, o),
        s(o, p),
        s(e, c),
        s(e, f),
        s(f, d),
        s(e, _),
        s(e, v),
        s(v, b),
        s(e, I),
        s(e, y),
        s(y, x);
    },
    d(E) {
      E && i(e);
    },
  };
}
function Cr(a) {
  let e, t, l, r, o, p, c, f, d, _, v, b, I, y, x;
  return {
    c() {
      (e = m("div")),
        (t = m("div")),
        (l = C("Midfielders")),
        (r = V()),
        (o = m("div")),
        (p = C("(c)")),
        (c = V()),
        (f = m("div")),
        (d = C("Team")),
        (_ = V()),
        (v = m("div")),
        (b = C("Value")),
        (I = V()),
        (y = m("div")),
        (x = C(" ")),
        this.h();
    },
    l(E) {
      e = h(E, "DIV", { class: !0 });
      var g = u(e);
      t = h(g, "DIV", { class: !0 });
      var k = u(t);
      (l = T(k, "Midfielders")),
        k.forEach(i),
        (r = P(g)),
        (o = h(g, "DIV", { class: !0 }));
      var w = u(o);
      (p = T(w, "(c)")),
        w.forEach(i),
        (c = P(g)),
        (f = h(g, "DIV", { class: !0 }));
      var N = u(f);
      (d = T(N, "Team")),
        N.forEach(i),
        (_ = P(g)),
        (v = h(g, "DIV", { class: !0 }));
      var B = u(v);
      (b = T(B, "Value")),
        B.forEach(i),
        (I = P(g)),
        (y = h(g, "DIV", { class: !0 }));
      var j = u(y);
      (x = T(j, " ")), j.forEach(i), g.forEach(i), this.h();
    },
    h() {
      n(t, "class", "w-1/3"),
        n(o, "class", "w-1/6"),
        n(f, "class", "w-1/3"),
        n(v, "class", "w-1/6"),
        n(y, "class", "w-1/6"),
        n(
          e,
          "class",
          "flex items-center justify-between py-2 bg-light-gray px-4"
        );
    },
    m(E, g) {
      $(E, e, g),
        s(e, t),
        s(t, l),
        s(e, r),
        s(e, o),
        s(o, p),
        s(e, c),
        s(e, f),
        s(f, d),
        s(e, _),
        s(e, v),
        s(v, b),
        s(e, I),
        s(e, y),
        s(y, x);
    },
    d(E) {
      E && i(e);
    },
  };
}
function Tr(a) {
  let e, t, l, r, o, p, c, f, d, _, v, b, I, y, x;
  return {
    c() {
      (e = m("div")),
        (t = m("div")),
        (l = C("Forwards")),
        (r = V()),
        (o = m("div")),
        (p = C("(c)")),
        (c = V()),
        (f = m("div")),
        (d = C("Team")),
        (_ = V()),
        (v = m("div")),
        (b = C("Value")),
        (I = V()),
        (y = m("div")),
        (x = C(" ")),
        this.h();
    },
    l(E) {
      e = h(E, "DIV", { class: !0 });
      var g = u(e);
      t = h(g, "DIV", { class: !0 });
      var k = u(t);
      (l = T(k, "Forwards")),
        k.forEach(i),
        (r = P(g)),
        (o = h(g, "DIV", { class: !0 }));
      var w = u(o);
      (p = T(w, "(c)")),
        w.forEach(i),
        (c = P(g)),
        (f = h(g, "DIV", { class: !0 }));
      var N = u(f);
      (d = T(N, "Team")),
        N.forEach(i),
        (_ = P(g)),
        (v = h(g, "DIV", { class: !0 }));
      var B = u(v);
      (b = T(B, "Value")),
        B.forEach(i),
        (I = P(g)),
        (y = h(g, "DIV", { class: !0 }));
      var j = u(y);
      (x = T(j, " ")), j.forEach(i), g.forEach(i), this.h();
    },
    h() {
      n(t, "class", "w-1/3"),
        n(o, "class", "w-1/6"),
        n(f, "class", "w-1/3"),
        n(v, "class", "w-1/6"),
        n(y, "class", "w-1/6"),
        n(
          e,
          "class",
          "flex items-center justify-between py-2 bg-light-gray px-4"
        );
    },
    m(E, g) {
      $(E, e, g),
        s(e, t),
        s(t, l),
        s(e, r),
        s(e, o),
        s(o, p),
        s(e, c),
        s(e, f),
        s(f, d),
        s(e, _),
        s(e, v),
        s(v, b),
        s(e, I),
        s(e, y),
        s(y, x);
    },
    d(E) {
      E && i(e);
    },
  };
}
function Vr(a) {
  let e, t, l, r, o, p, c, f, d, _, v, b, I, y, x, E, g, k;
  x = new Ns({ props: { className: "w-6 h-6 p-2" } });
  function w() {
    return a[44](a[68], a[75]);
  }
  return {
    c() {
      (e = m("div")),
        (t = C("-")),
        (l = V()),
        (r = m("div")),
        (o = C("-")),
        (p = V()),
        (c = m("div")),
        (f = C("-")),
        (d = V()),
        (_ = m("div")),
        (v = C("-")),
        (b = V()),
        (I = m("div")),
        (y = m("button")),
        Fe(x.$$.fragment),
        this.h();
    },
    l(N) {
      e = h(N, "DIV", { class: !0 });
      var B = u(e);
      (t = T(B, "-")),
        B.forEach(i),
        (l = P(N)),
        (r = h(N, "DIV", { class: !0 }));
      var j = u(r);
      (o = T(j, "-")),
        j.forEach(i),
        (p = P(N)),
        (c = h(N, "DIV", { class: !0 }));
      var F = u(c);
      (f = T(F, "-")),
        F.forEach(i),
        (d = P(N)),
        (_ = h(N, "DIV", { class: !0 }));
      var Z = u(_);
      (v = T(Z, "-")),
        Z.forEach(i),
        (b = P(N)),
        (I = h(N, "DIV", { class: !0 }));
      var q = u(I);
      y = h(q, "BUTTON", { class: !0 });
      var oe = u(y);
      Le(x.$$.fragment, oe), oe.forEach(i), q.forEach(i), this.h();
    },
    h() {
      n(e, "class", "w-1/3"),
        n(r, "class", "w-1/6"),
        n(c, "class", "w-1/3"),
        n(_, "class", "w-1/6"),
        n(y, "class", "text-xl rounded fpl-button flex items-center"),
        n(I, "class", "w-1/6 flex items-center");
    },
    m(N, B) {
      $(N, e, B),
        s(e, t),
        $(N, l, B),
        $(N, r, B),
        s(r, o),
        $(N, p, B),
        $(N, c, B),
        s(c, f),
        $(N, d, B),
        $(N, _, B),
        s(_, v),
        $(N, b, B),
        $(N, I, B),
        s(I, y),
        Oe(x, y, null),
        (E = !0),
        g || ((k = we(y, "click", w)), (g = !0));
    },
    p(N, B) {
      a = N;
    },
    i(N) {
      E || (re(x.$$.fragment, N), (E = !0));
    },
    o(N) {
      fe(x.$$.fragment, N), (E = !1);
    },
    d(N) {
      N && i(e),
        N && i(l),
        N && i(r),
        N && i(p),
        N && i(c),
        N && i(d),
        N && i(_),
        N && i(b),
        N && i(I),
        Se(x),
        (g = !1),
        k();
    },
  };
}
function Pr(a) {
  let e,
    t = a[73].firstName + "",
    l,
    r,
    o = a[73].lastName + "",
    p,
    c,
    f,
    d,
    _,
    v,
    b,
    I,
    y,
    x,
    E = a[76]?.name + "",
    g,
    k,
    w,
    N,
    B = (Number(a[73].value) / 4).toFixed(2) + "",
    j,
    F,
    Z,
    q,
    oe,
    L,
    R,
    O,
    ne;
  const G = [Dr, Nr],
    M = [];
  function Y(D, W) {
    return D[2]?.captainId === D[72] ? 0 : 1;
  }
  (d = Y(a)),
    (_ = M[d] = G[d](a)),
    (I = new Al({
      props: {
        className: "h-5 w-5 mr-2",
        primaryColour: a[76]?.primaryColourHex,
        secondaryColour: a[76]?.secondaryColourHex,
        thirdColour: a[76]?.thirdColourHex,
      },
    })),
    (L = new Ds({ props: { className: "w-6 h-6 p-2" } }));
  function te() {
    return a[43](a[73]);
  }
  return {
    c() {
      (e = m("div")),
        (l = C(t)),
        (r = V()),
        (p = C(o)),
        (c = V()),
        (f = m("div")),
        _.c(),
        (v = V()),
        (b = m("div")),
        Fe(I.$$.fragment),
        (y = V()),
        (x = m("p")),
        (g = C(E)),
        (k = V()),
        (w = m("div")),
        (N = C("£")),
        (j = C(B)),
        (F = C("m")),
        (Z = V()),
        (q = m("div")),
        (oe = m("button")),
        Fe(L.$$.fragment),
        this.h();
    },
    l(D) {
      e = h(D, "DIV", { class: !0 });
      var W = u(e);
      (l = T(W, t)),
        (r = P(W)),
        (p = T(W, o)),
        W.forEach(i),
        (c = P(D)),
        (f = h(D, "DIV", { class: !0 }));
      var X = u(f);
      _.l(X), X.forEach(i), (v = P(D)), (b = h(D, "DIV", { class: !0 }));
      var ee = u(b);
      Le(I.$$.fragment, ee), (y = P(ee)), (x = h(ee, "P", {}));
      var ae = u(x);
      (g = T(ae, E)),
        ae.forEach(i),
        ee.forEach(i),
        (k = P(D)),
        (w = h(D, "DIV", { class: !0 }));
      var H = u(w);
      (N = T(H, "£")),
        (j = T(H, B)),
        (F = T(H, "m")),
        H.forEach(i),
        (Z = P(D)),
        (q = h(D, "DIV", { class: !0 }));
      var J = u(q);
      oe = h(J, "BUTTON", { class: !0 });
      var be = u(oe);
      Le(L.$$.fragment, be), be.forEach(i), J.forEach(i), this.h();
    },
    h() {
      n(e, "class", "w-1/3"),
        n(f, "class", "w-1/6 flex items-center"),
        n(b, "class", "flex w-1/3 items-center"),
        n(w, "class", "w-1/6"),
        n(oe, "class", "bg-red-600 mb-1 rounded-sm"),
        n(q, "class", "w-1/6 flex items-center");
    },
    m(D, W) {
      $(D, e, W),
        s(e, l),
        s(e, r),
        s(e, p),
        $(D, c, W),
        $(D, f, W),
        M[d].m(f, null),
        $(D, v, W),
        $(D, b, W),
        Oe(I, b, null),
        s(b, y),
        s(b, x),
        s(x, g),
        $(D, k, W),
        $(D, w, W),
        s(w, N),
        s(w, j),
        s(w, F),
        $(D, Z, W),
        $(D, q, W),
        s(q, oe),
        Oe(L, oe, null),
        (R = !0),
        O || ((ne = we(oe, "click", te)), (O = !0));
    },
    p(D, W) {
      (a = D),
        (!R || W[0] & 131078) && t !== (t = a[73].firstName + "") && ge(l, t),
        (!R || W[0] & 131078) && o !== (o = a[73].lastName + "") && ge(p, o);
      let X = d;
      (d = Y(a)),
        d === X
          ? M[d].p(a, W)
          : (it(),
            fe(M[X], 1, 1, () => {
              M[X] = null;
            }),
            ct(),
            (_ = M[d]),
            _ ? _.p(a, W) : ((_ = M[d] = G[d](a)), _.c()),
            re(_, 1),
            _.m(f, null));
      const ee = {};
      W[0] & 163846 && (ee.primaryColour = a[76]?.primaryColourHex),
        W[0] & 163846 && (ee.secondaryColour = a[76]?.secondaryColourHex),
        W[0] & 163846 && (ee.thirdColour = a[76]?.thirdColourHex),
        I.$set(ee),
        (!R || W[0] & 163846) && E !== (E = a[76]?.name + "") && ge(g, E),
        (!R || W[0] & 131078) &&
          B !== (B = (Number(a[73].value) / 4).toFixed(2) + "") &&
          ge(j, B);
    },
    i(D) {
      R || (re(_), re(I.$$.fragment, D), re(L.$$.fragment, D), (R = !0));
    },
    o(D) {
      fe(_), fe(I.$$.fragment, D), fe(L.$$.fragment, D), (R = !1);
    },
    d(D) {
      D && i(e),
        D && i(c),
        D && i(f),
        M[d].d(),
        D && i(v),
        D && i(b),
        Se(I),
        D && i(k),
        D && i(w),
        D && i(Z),
        D && i(q),
        Se(L),
        (O = !1),
        ne();
    },
  };
}
function Nr(a) {
  let e, t, l, r, o;
  t = new Gs({ props: { className: "w-6 h-6" } });
  function p() {
    return a[42](a[73]);
  }
  return {
    c() {
      (e = m("button")), Fe(t.$$.fragment);
    },
    l(c) {
      e = h(c, "BUTTON", {});
      var f = u(e);
      Le(t.$$.fragment, f), f.forEach(i);
    },
    m(c, f) {
      $(c, e, f),
        Oe(t, e, null),
        (l = !0),
        r || ((o = we(e, "click", p)), (r = !0));
    },
    p(c, f) {
      a = c;
    },
    i(c) {
      l || (re(t.$$.fragment, c), (l = !0));
    },
    o(c) {
      fe(t.$$.fragment, c), (l = !1);
    },
    d(c) {
      c && i(e), Se(t), (r = !1), o();
    },
  };
}
function Dr(a) {
  let e, t, l;
  return (
    (t = new As({ props: { className: "w-6 h-6" } })),
    {
      c() {
        (e = m("span")), Fe(t.$$.fragment);
      },
      l(r) {
        e = h(r, "SPAN", {});
        var o = u(e);
        Le(t.$$.fragment, o), o.forEach(i);
      },
      m(r, o) {
        $(r, e, o), Oe(t, e, null), (l = !0);
      },
      p: Ae,
      i(r) {
        l || (re(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        fe(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && i(e), Se(t);
      },
    }
  );
}
function ys(a, e) {
  let t, l, r, o, p;
  const c = [Pr, Vr],
    f = [];
  function d(_, v) {
    return _[72] > 0 && _[73] ? 0 : 1;
  }
  return (
    (l = d(e)),
    (r = f[l] = c[l](e)),
    {
      key: a,
      first: null,
      c() {
        (t = m("div")), r.c(), (o = V()), this.h();
      },
      l(_) {
        t = h(_, "DIV", { class: !0 });
        var v = u(t);
        r.l(v), (o = P(v)), v.forEach(i), this.h();
      },
      h() {
        n(t, "class", "flex items-center justify-between py-2 px-4"),
          (this.first = t);
      },
      m(_, v) {
        $(_, t, v), f[l].m(t, null), s(t, o), (p = !0);
      },
      p(_, v) {
        e = _;
        let b = l;
        (l = d(e)),
          l === b
            ? f[l].p(e, v)
            : (it(),
              fe(f[b], 1, 1, () => {
                f[b] = null;
              }),
              ct(),
              (r = f[l]),
              r ? r.p(e, v) : ((r = f[l] = c[l](e)), r.c()),
              re(r, 1),
              r.m(t, o));
      },
      i(_) {
        p || (re(r), (p = !0));
      },
      o(_) {
        fe(r), (p = !1);
      },
      d(_) {
        _ && i(t), f[l].d();
      },
    }
  );
}
function ws(a) {
  let e,
    t,
    l,
    r,
    o = [],
    p = new Ms(),
    c,
    f,
    d = a[68] === 0 && kr(),
    _ = a[68] === 1 && Ir(),
    v = a[68] === 2 && Cr(),
    b = a[68] === 3 && Tr(),
    I = a[66];
  const y = (x) => x[75];
  for (let x = 0; x < I.length; x += 1) {
    let E = hs(a, I, x),
      g = y(E);
    p.set(g, (o[x] = ys(g, E)));
  }
  return {
    c() {
      d && d.c(),
        (e = V()),
        _ && _.c(),
        (t = V()),
        v && v.c(),
        (l = V()),
        b && b.c(),
        (r = V());
      for (let x = 0; x < o.length; x += 1) o[x].c();
      c = al();
    },
    l(x) {
      d && d.l(x),
        (e = P(x)),
        _ && _.l(x),
        (t = P(x)),
        v && v.l(x),
        (l = P(x)),
        b && b.l(x),
        (r = P(x));
      for (let E = 0; E < o.length; E += 1) o[E].l(x);
      c = al();
    },
    m(x, E) {
      d && d.m(x, E),
        $(x, e, E),
        _ && _.m(x, E),
        $(x, t, E),
        v && v.m(x, E),
        $(x, l, E),
        b && b.m(x, E),
        $(x, r, E);
      for (let g = 0; g < o.length; g += 1) o[g] && o[g].m(x, E);
      $(x, c, E), (f = !0);
    },
    p(x, E) {
      (E[0] & 268599302) | (E[1] & 7) &&
        ((I = x[66]),
        it(),
        (o = Vs(o, E, y, 1, x, I, p, c.parentNode, Ps, ys, c, hs)),
        ct());
    },
    i(x) {
      if (!f) {
        for (let E = 0; E < I.length; E += 1) re(o[E]);
        f = !0;
      }
    },
    o(x) {
      for (let E = 0; E < o.length; E += 1) fe(o[E]);
      f = !1;
    },
    d(x) {
      d && d.d(x),
        x && i(e),
        _ && _.d(x),
        x && i(t),
        v && v.d(x),
        x && i(l),
        b && b.d(x),
        x && i(r);
      for (let E = 0; E < o.length; E += 1) o[E].d(x);
      x && i(c);
    },
  };
}
function Gr(a) {
  let e, t, l, r, o;
  t = new hr({
    props: { className: "h-12 sm:h-16 md:h-20 lg:h-24 xl:h-16 2xl:h-20" },
  });
  function p() {
    return a[40](a[68], a[75]);
  }
  return {
    c() {
      (e = m("button")), Fe(t.$$.fragment), this.h();
    },
    l(c) {
      e = h(c, "BUTTON", { class: !0 });
      var f = u(e);
      Le(t.$$.fragment, f), f.forEach(i), this.h();
    },
    h() {
      n(e, "class", "flex items-center");
    },
    m(c, f) {
      $(c, e, f),
        Oe(t, e, null),
        (l = !0),
        r || ((o = we(e, "click", p)), (r = !0));
    },
    p(c, f) {
      a = c;
    },
    i(c) {
      l || (re(t.$$.fragment, c), (l = !0));
    },
    o(c) {
      fe(t.$$.fragment, c), (l = !1);
    },
    d(c) {
      c && i(e), Se(t), (r = !1), o();
    },
  };
}
function Ar(a) {
  let e,
    t,
    l,
    r,
    o,
    p,
    c,
    f,
    d,
    _,
    v,
    b,
    I,
    y,
    x,
    E = Da(a[73].position) + "",
    g,
    k,
    w,
    N,
    B,
    j = a[73].firstName.length > 2 ? a[73].firstName.substring(0, 1) + "." : "",
    F,
    Z,
    q = a[73].lastName + "",
    oe,
    L,
    R,
    O,
    ne = a[76]?.abbreviatedName + "",
    G,
    M,
    Y,
    te,
    D,
    W,
    X = (Number(a[73].value) / 4).toFixed(2) + "",
    ee,
    ae,
    H,
    J,
    be;
  o = new Ds({ props: { className: "w-4 h-4 sm:w-6 sm:h-6 p-1" } });
  function U() {
    return a[38](a[73]);
  }
  f = new Ls({
    props: {
      className: "h-8 sm:h-12 md:h-16 lg:h-20 xl:h-12 2xl:h-16",
      primaryColour: a[76]?.primaryColourHex,
      secondaryColour: a[76]?.secondaryColourHex,
      thirdColour: a[76]?.thirdColourHex,
    },
  });
  const S = [Br, Mr],
    le = [];
  function Ee(ce, ue) {
    return ce[2]?.captainId === ce[72] ? 0 : 1;
  }
  (_ = Ee(a)), (v = le[_] = S[_](a));
  var de = Ga(a[73].nationality);
  function Ve(ce) {
    return {
      props: { class: "h-2 w-2 mr-1 sm:h-4 sm:w-4 sm:mx-2 min-w-[15px]" },
    };
  }
  return (
    de && (w = Pa(de, Ve())),
    (Y = new Al({
      props: {
        className: "h-4 w-4 sm:mx-1 min-w-[15px]",
        primaryColour: a[76]?.primaryColourHex,
        secondaryColour: a[76]?.secondaryColourHex,
        thirdColour: a[76]?.thirdColourHex,
      },
    })),
    {
      c() {
        (e = m("div")),
          (t = m("div")),
          (l = m("div")),
          (r = m("button")),
          Fe(o.$$.fragment),
          (p = V()),
          (c = m("div")),
          Fe(f.$$.fragment),
          (d = V()),
          v.c(),
          (b = V()),
          (I = m("div")),
          (y = m("div")),
          (x = m("p")),
          (g = C(E)),
          (k = V()),
          w && Fe(w.$$.fragment),
          (N = V()),
          (B = m("p")),
          (F = C(j)),
          (Z = V()),
          (oe = C(q)),
          (L = V()),
          (R = m("div")),
          (O = m("p")),
          (G = C(ne)),
          (M = V()),
          Fe(Y.$$.fragment),
          (te = V()),
          (D = m("p")),
          (W = C("£")),
          (ee = C(X)),
          (ae = C("m")),
          this.h();
      },
      l(ce) {
        e = h(ce, "DIV", { class: !0 });
        var ue = u(e);
        t = h(ue, "DIV", { class: !0 });
        var Ne = u(t);
        l = h(Ne, "DIV", { class: !0 });
        var Te = u(l);
        r = h(Te, "BUTTON", { class: !0 });
        var Pe = u(r);
        Le(o.$$.fragment, Pe),
          Pe.forEach(i),
          (p = P(Te)),
          (c = h(Te, "DIV", { class: !0 }));
        var We = u(c);
        Le(f.$$.fragment, We),
          We.forEach(i),
          (d = P(Te)),
          v.l(Te),
          Te.forEach(i),
          Ne.forEach(i),
          (b = P(ue)),
          (I = h(ue, "DIV", { class: !0 }));
        var ke = u(I);
        y = h(ke, "DIV", { class: !0 });
        var Ie = u(y);
        x = h(Ie, "P", { class: !0 });
        var Ze = u(x);
        (g = T(Ze, E)),
          Ze.forEach(i),
          (k = P(Ie)),
          w && Le(w.$$.fragment, Ie),
          (N = P(Ie)),
          (B = h(Ie, "P", { class: !0 }));
        var je = u(B);
        (F = T(je, j)),
          (Z = P(je)),
          (oe = T(je, q)),
          je.forEach(i),
          Ie.forEach(i),
          (L = P(ke)),
          (R = h(ke, "DIV", { class: !0 }));
        var Ue = u(R);
        O = h(Ue, "P", { class: !0 });
        var qe = u(O);
        (G = T(qe, ne)),
          qe.forEach(i),
          (M = P(Ue)),
          Le(Y.$$.fragment, Ue),
          (te = P(Ue)),
          (D = h(Ue, "P", { class: !0 }));
        var lt = u(D);
        (W = T(lt, "£")),
          (ee = T(lt, X)),
          (ae = T(lt, "m")),
          lt.forEach(i),
          Ue.forEach(i),
          ke.forEach(i),
          ue.forEach(i),
          this.h();
      },
      h() {
        n(r, "class", "bg-red-600 mb-1 rounded-sm"),
          n(c, "class", "flex justify-center items-center flex-grow"),
          n(l, "class", "flex justify-between items-end w-full"),
          n(t, "class", "flex justify-center items-center"),
          n(x, "class", "collapse sm:visible sm:min-w-[15px]"),
          n(B, "class", "truncate min-w-[50px] max-w-[50px]"),
          n(
            y,
            "class",
            "flex justify-center items-center bg-gray-700 md:px-2 py-1 rounded-t-md min-w-[80px] max-w-[80px] sm:min-w-[120px] sm:max-w-[120px]"
          ),
          n(O, "class", "collapse sm:visible sm:min-w-[20px]"),
          n(D, "class", "truncate min-w-[50px] max-w-[50px]"),
          n(
            R,
            "class",
            "flex justify-center items-center bg-white text-black md:px-2 py-1 rounded-b-md min-w-[80px] max-w-[80px] sm:min-w-[120px] sm:max-w-[120px]"
          ),
          n(I, "class", "flex flex-col justify-center items-center text-xs"),
          n(e, "class", "flex flex-col items-center text-center");
      },
      m(ce, ue) {
        $(ce, e, ue),
          s(e, t),
          s(t, l),
          s(l, r),
          Oe(o, r, null),
          s(l, p),
          s(l, c),
          Oe(f, c, null),
          s(l, d),
          le[_].m(l, null),
          s(e, b),
          s(e, I),
          s(I, y),
          s(y, x),
          s(x, g),
          s(y, k),
          w && Oe(w, y, null),
          s(y, N),
          s(y, B),
          s(B, F),
          s(B, Z),
          s(B, oe),
          s(I, L),
          s(I, R),
          s(R, O),
          s(O, G),
          s(R, M),
          Oe(Y, R, null),
          s(R, te),
          s(R, D),
          s(D, W),
          s(D, ee),
          s(D, ae),
          (H = !0),
          J || ((be = we(r, "click", U)), (J = !0));
      },
      p(ce, ue) {
        a = ce;
        const Ne = {};
        ue[0] & 163846 && (Ne.primaryColour = a[76]?.primaryColourHex),
          ue[0] & 163846 && (Ne.secondaryColour = a[76]?.secondaryColourHex),
          ue[0] & 163846 && (Ne.thirdColour = a[76]?.thirdColourHex),
          f.$set(Ne);
        let Te = _;
        if (
          ((_ = Ee(a)),
          _ === Te
            ? le[_].p(a, ue)
            : (it(),
              fe(le[Te], 1, 1, () => {
                le[Te] = null;
              }),
              ct(),
              (v = le[_]),
              v ? v.p(a, ue) : ((v = le[_] = S[_](a)), v.c()),
              re(v, 1),
              v.m(l, null)),
          (!H || ue[0] & 131078) &&
            E !== (E = Da(a[73].position) + "") &&
            ge(g, E),
          ue[0] & 131078 && de !== (de = Ga(a[73].nationality)))
        ) {
          if (w) {
            it();
            const We = w;
            fe(We.$$.fragment, 1, 0, () => {
              Se(We, 1);
            }),
              ct();
          }
          de
            ? ((w = Pa(de, Ve())),
              Fe(w.$$.fragment),
              re(w.$$.fragment, 1),
              Oe(w, y, N))
            : (w = null);
        }
        (!H || ue[0] & 131078) &&
          j !==
            (j =
              a[73].firstName.length > 2
                ? a[73].firstName.substring(0, 1) + "."
                : "") &&
          ge(F, j),
          (!H || ue[0] & 131078) &&
            q !== (q = a[73].lastName + "") &&
            ge(oe, q),
          (!H || ue[0] & 163846) &&
            ne !== (ne = a[76]?.abbreviatedName + "") &&
            ge(G, ne);
        const Pe = {};
        ue[0] & 163846 && (Pe.primaryColour = a[76]?.primaryColourHex),
          ue[0] & 163846 && (Pe.secondaryColour = a[76]?.secondaryColourHex),
          ue[0] & 163846 && (Pe.thirdColour = a[76]?.thirdColourHex),
          Y.$set(Pe),
          (!H || ue[0] & 131078) &&
            X !== (X = (Number(a[73].value) / 4).toFixed(2) + "") &&
            ge(ee, X);
      },
      i(ce) {
        H ||
          (re(o.$$.fragment, ce),
          re(f.$$.fragment, ce),
          re(v),
          w && re(w.$$.fragment, ce),
          re(Y.$$.fragment, ce),
          (H = !0));
      },
      o(ce) {
        fe(o.$$.fragment, ce),
          fe(f.$$.fragment, ce),
          fe(v),
          w && fe(w.$$.fragment, ce),
          fe(Y.$$.fragment, ce),
          (H = !1);
      },
      d(ce) {
        ce && i(e), Se(o), Se(f), le[_].d(), w && Se(w), Se(Y), (J = !1), be();
      },
    }
  );
}
function Mr(a) {
  let e, t, l, r, o;
  t = new Gs({ props: { className: "w-4 h-4 sm:w-7 sm:h-7 md:w-6 md:h-6" } });
  function p() {
    return a[39](a[73]);
  }
  return {
    c() {
      (e = m("button")), Fe(t.$$.fragment), this.h();
    },
    l(c) {
      e = h(c, "BUTTON", { class: !0 });
      var f = u(e);
      Le(t.$$.fragment, f), f.forEach(i), this.h();
    },
    h() {
      n(e, "class", "mb-1");
    },
    m(c, f) {
      $(c, e, f),
        Oe(t, e, null),
        (l = !0),
        r || ((o = we(e, "click", p)), (r = !0));
    },
    p(c, f) {
      a = c;
    },
    i(c) {
      l || (re(t.$$.fragment, c), (l = !0));
    },
    o(c) {
      fe(t.$$.fragment, c), (l = !1);
    },
    d(c) {
      c && i(e), Se(t), (r = !1), o();
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
        (e = m("span")), Fe(t.$$.fragment), this.h();
      },
      l(r) {
        e = h(r, "SPAN", { class: !0 });
        var o = u(e);
        Le(t.$$.fragment, o), o.forEach(i), this.h();
      },
      h() {
        n(e, "class", "mb-1");
      },
      m(r, o) {
        $(r, e, o), Oe(t, e, null), (l = !0);
      },
      p: Ae,
      i(r) {
        l || (re(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        fe(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && i(e), Se(t);
      },
    }
  );
}
function xs(a, e) {
  let t, l, r, o;
  const p = [Ar, Gr],
    c = [];
  function f(_, v) {
    return _[72] > 0 && _[73] ? 0 : 1;
  }
  function d(_, v) {
    return v === 0 ? wr(_) : _;
  }
  return (
    (l = f(e)),
    (r = c[l] = p[l](d(e, l))),
    {
      key: a,
      first: null,
      c() {
        (t = m("div")), r.c(), this.h();
      },
      l(_) {
        t = h(_, "DIV", { class: !0 });
        var v = u(t);
        r.l(v), v.forEach(i), this.h();
      },
      h() {
        n(
          t,
          "class",
          "flex flex-col justify-center items-center flex-1 mt-2 mb-2 sm:mb-6 md:mb-12 lg:mb-16 xl:mb-6 2xl:mb-12"
        ),
          (this.first = t);
      },
      m(_, v) {
        $(_, t, v), c[l].m(t, null), (o = !0);
      },
      p(_, v) {
        e = _;
        let b = l;
        (l = f(e)),
          l === b
            ? c[l].p(d(e, l), v)
            : (it(),
              fe(c[b], 1, 1, () => {
                c[b] = null;
              }),
              ct(),
              (r = c[l]),
              r ? r.p(d(e, l), v) : ((r = c[l] = p[l](d(e, l))), r.c()),
              re(r, 1),
              r.m(t, null));
      },
      i(_) {
        o || (re(r), (o = !0));
      },
      o(_) {
        fe(r), (o = !1);
      },
      d(_) {
        _ && i(t), c[l].d();
      },
    }
  );
}
function Es(a) {
  let e,
    t = [],
    l = new Ms(),
    r,
    o,
    p = a[66];
  const c = (f) => f[75];
  for (let f = 0; f < p.length; f += 1) {
    let d = ps(a, p, f),
      _ = c(d);
    l.set(_, (t[f] = xs(_, d)));
  }
  return {
    c() {
      e = m("div");
      for (let f = 0; f < t.length; f += 1) t[f].c();
      (r = V()), this.h();
    },
    l(f) {
      e = h(f, "DIV", { class: !0 });
      var d = u(e);
      for (let _ = 0; _ < t.length; _ += 1) t[_].l(d);
      (r = P(d)), d.forEach(i), this.h();
    },
    h() {
      n(e, "class", "flex justify-around items-center w-full");
    },
    m(f, d) {
      $(f, e, d);
      for (let _ = 0; _ < t.length; _ += 1) t[_] && t[_].m(e, null);
      s(e, r), (o = !0);
    },
    p(f, d) {
      (d[0] & 268599302) | (d[1] & 7) &&
        ((p = f[66]),
        it(),
        (t = Vs(t, d, c, 1, f, p, l, e, Ps, xs, r, ps)),
        ct());
    },
    i(f) {
      if (!o) {
        for (let d = 0; d < p.length; d += 1) re(t[d]);
        o = !0;
      }
    },
    o(f) {
      for (let d = 0; d < t.length; d += 1) fe(t[d]);
      o = !1;
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
    l = a[16] && bs(a);
  return {
    c() {
      l && l.c(), (e = al());
    },
    l(r) {
      l && l.l(r), (e = al());
    },
    m(r, o) {
      l && l.m(r, o), $(r, e, o), (t = !0);
    },
    p(r, o) {
      r[16]
        ? l
          ? (l.p(r, o), o[0] & 65536 && re(l, 1))
          : ((l = bs(r)), l.c(), re(l, 1), l.m(e.parentNode, e))
        : l &&
          (it(),
          fe(l, 1, 1, () => {
            l = null;
          }),
          ct());
    },
    i(r) {
      t || (re(l), (t = !0));
    },
    o(r) {
      fe(l), (t = !1);
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
        Fe(e.$$.fragment);
      },
      l(l) {
        Le(e.$$.fragment, l);
      },
      m(l, r) {
        Oe(e, l, r), (t = !0);
      },
      p(l, r) {
        const o = {};
        (r[0] & 4194303) | (r[2] & 1048576) &&
          (o.$$scope = { dirty: r, ctx: l }),
          e.$set(o);
      },
      i(l) {
        t || (re(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        fe(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        Se(e, l);
      },
    }
  );
}
function Sr(a) {
  const e = a.split("-").map(Number);
  return [
    [1],
    ...e.map((l) =>
      Array(l)
        .fill(0)
        .map((r, o) => o + 1)
    ),
  ];
}
function Hr(a) {
  if (!a) return console.log("a"), !1;
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
    if (l !== 0 && ((e[l] = (e[l] || 0) + 1), e[l] > 1))
      return console.log("b"), !1;
  return !0;
}
function Lr(a, e, t) {
  const l = { 0: 0, 1: 0, 2: 0, 3: 0 };
  e.playerIds.forEach((I) => {
    const y = a.find((x) => x.id === I);
    y && l[y.position]++;
  });
  const [r, o, p] = t.split("-").map(Number),
    c = Math.max(0, r - (l[1] || 0)),
    f = Math.max(0, o - (l[2] || 0)),
    d = Math.max(0, p - (l[3] || 0)),
    _ = Math.max(0, 1 - (l[0] || 0)),
    v = c + f + d + _;
  return Object.values(l).reduce((I, y) => I + y, 0) + v <= 11;
}
const ks = (a) => a > 0,
  Is = (a) => a === 0,
  Cs = (a) => a === 0;
function Ur(a, e, t) {
  let l, r, o, p, c, f;
  const d = {
      "3-4-3": { positions: [0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3] },
      "3-5-2": { positions: [0, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3] },
      "4-3-3": { positions: [0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3] },
      "4-4-2": { positions: [0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3] },
      "4-5-1": { positions: [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3] },
      "5-4-1": { positions: [0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3] },
      "5-3-2": { positions: [0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3] },
    },
    _ = tl(["3-4-3", "3-5-2", "4-3-3", "4-4-2", "4-5-1", "5-4-1", "5-3-2"]);
  Ll(a, _, (A) => t(21, (f = A)));
  let v = "-",
    b = -1,
    I = "-",
    y = "-",
    x,
    E,
    g = "00",
    k = "00",
    w = "00",
    N = "4-4-2",
    B = -1,
    j = -1,
    F = !0,
    Z = !1,
    q = 0,
    oe = !0,
    L,
    R,
    O,
    ne = [],
    G = !1,
    M,
    Y,
    te;
  const D = tl(null);
  Ll(a, D, (A) => t(2, (o = A)));
  const W = tl(oe ? 1 / 0 : 3);
  Ll(a, W, (A) => t(19, (p = A)));
  const X = tl(1200);
  Ll(a, X, (A) => t(20, (c = A))),
    la(async () => {
      Ul.set(!0);
      try {
        await Wl.sync(),
          await ll.sync(),
          await Zl.sync(),
          (M = Wl.subscribe((ye) => {
            (O = ye),
              t(4, (b = O?.activeGameweek ?? b)),
              t(3, (v = O?.activeSeason.name ?? v));
          })),
          (Y = ll.subscribe((ye) => {
            t(15, (L = ye));
          })),
          (te = Zl.subscribe((ye) => {
            t(1, (R = ye));
          }));
        const A = localStorage.getItem("viewMode");
        A && t(12, (F = A === "pitch"));
        let K = await ea.getNextFixture();
        (x = await ll.getTeamById(K?.homeTeamId ?? 0)),
          (E = await ll.getTeamById(K?.awayTeamId ?? 0));
        let se = await Aa.getFantasyTeam();
        D.set(se);
        let ie = ze(D)?.principalId ?? "";
        ie.length > 0 && ((oe = !1), X.set(Number(se.bankBalance))),
          b > 1 && ie.length > 0 && W.set(se.transfersAvailable),
          D.update((ye) =>
            ye && (!ye.playerIds || ye.playerIds.length !== 11)
              ? { ...ye, playerIds: new Uint16Array(11).fill(0) }
              : ye
          ),
          t(5, (I = Os(Number(K?.kickOff)))),
          t(6, (y = ta(Number(K?.kickOff))));
        let me = Ss(Number(K?.kickOff));
        t(7, (g = me.days.toString())),
          t(8, (k = me.hours.toString())),
          t(9, (w = me.minutes.toString()));
      } catch (A) {
        jl.show("Error fetching team details.", "error"),
          console.error("Error fetching team details:", A);
      } finally {
        Ul.set(!1), t(16, (G = !0));
      }
    }),
    aa(() => {
      Y?.(), te?.(), M?.();
    });
  function ee() {
    t(12, (F = !0)), localStorage.setItem("viewMode", "pitch");
  }
  function ae() {
    t(12, (F = !1)), localStorage.setItem("viewMode", "list");
  }
  function H(A, K) {
    t(10, (B = A)), t(11, (j = K)), t(13, (Z = !0));
  }
  function J() {
    t(13, (Z = !1));
  }
  function be(A) {
    const K = ze(D);
    if (K) {
      if (U(A, K, N)) S(A, K, N);
      else {
        const se = Ee(K, A);
        de(K, se), t(0, (N = se)), S(A, K, se);
      }
      !oe && b > 1 && W.update((se) => (se > 0 ? se - 1 : 0)),
        X.update((se) =>
          se - Number(A.value) > 0 ? se - Number(A.value) : se
        ),
        K.playerIds.includes(A.id) || ne.push(A.id);
    }
  }
  function U(A, K, se) {
    const ie = { 0: 0, 1: 0, 2: 0, 3: 0 };
    K.playerIds.forEach((kt) => {
      const dt = R.find((rt) => rt.id === kt);
      dt && ie[dt.position]++;
    }),
      ie[A.position]++;
    const [me, ye, xe] = se.split("-").map(Number),
      Me = Math.max(0, me - (ie[1] || 0)),
      Je = Math.max(0, ye - (ie[2] || 0)),
      Qe = Math.max(0, xe - (ie[3] || 0)),
      st = Math.max(0, 1 - (ie[0] || 0)),
      et = Me + Je + Qe + st;
    return Object.values(ie).reduce((kt, dt) => kt + dt, 0) + et <= 11;
  }
  function S(A, K, se) {
    const ie = le(A.position, K, se);
    if (ie === -1) {
      console.error("No available position to add the player.");
      return;
    }
    D.update((me) => {
      if (!me) return null;
      const ye = Uint16Array.from(me.playerIds);
      return ie < ye.length
        ? ((ye[ie] = A.id), { ...me, playerIds: ye })
        : (console.error(
            "Index out of bounds when attempting to add player to team."
          ),
          me);
    }),
      Ne(ze(D));
  }
  function le(A, K, se) {
    const ie = d[se].positions;
    for (let me = 0; me < ie.length; me++)
      if (ie[me] === A && K.playerIds[me] === 0) return me;
    return -1;
  }
  function Ee(A, K) {
    const se = { 0: 1, 1: 0, 2: 0, 3: 0 };
    A.playerIds.forEach((ye) => {
      const xe = R.find((Me) => Me.id === ye);
      xe && se[xe.position]++;
    }),
      se[K.position]++;
    let ie = null,
      me = Number.MAX_SAFE_INTEGER;
    for (const ye of Object.keys(d)) {
      if (ye === N) continue;
      const xe = d[ye].positions;
      let Me = { 0: 0, 1: 0, 2: 0, 3: 0 };
      xe.forEach((Qe) => {
        Me[Qe]++;
      });
      const Je = Object.keys(Me).reduce((Qe, st) => {
        const et = parseInt(st);
        return Qe + Math.max(0, Me[et] - se[et]);
      }, 0);
      Je < me && Me[K.position] > se[K.position] - 1 && ((ie = ye), (me = Je));
    }
    return ie || (console.error("No valid formation found for the player"), N);
  }
  function de(A, K) {
    const se = d[K].positions;
    let ie = new Array(11).fill(0);
    A.playerIds.forEach((me) => {
      const ye = R.find((xe) => xe.id === me);
      if (ye) {
        for (let xe = 0; xe < se.length; xe++)
          if (se[xe] === ye.position && ie[xe] === 0) {
            ie[xe] = me;
            break;
          }
      }
    }),
      (A.playerIds = ie);
  }
  function Ve(A, K) {
    return l.slice(0, A).reduce((ie, me) => ie + me.length, 0) + K;
  }
  function ce(A) {
    t(10, (B = -1)),
      t(11, (j = -1)),
      D.update((K) => {
        if (!K) return null;
        const se = K.playerIds.indexOf(A);
        if (se === -1) return console.error("Player not found in the team."), K;
        const ie = Uint16Array.from(K.playerIds);
        return (
          (ie[se] = 0),
          ne.includes(A) &&
            (!oe && b > 1 && W.update((me) => me + 1),
            (ne = ne.filter((me) => me !== A))),
          X.update((me) => me + Number(R.find((ye) => ye.id === A)?.value)),
          { ...K, playerIds: ie }
        );
      }),
      Ne(ze(D));
  }
  function ue(A) {
    t(10, (B = -1)),
      t(11, (j = -1)),
      D.update((K) => (K ? { ...K, captainId: A } : null));
  }
  function Ne(A) {
    if (
      !A.captainId ||
      A.captainId === 0 ||
      !A.playerIds.includes(A.captainId)
    ) {
      const K = Te(A);
      ue(K);
    }
  }
  function Te(A) {
    let K = 0,
      se = 0;
    return (
      A.playerIds.forEach((ie) => {
        const me = R.find((ye) => ye.id === ie);
        me && Number(me.value) > K && ((K = Number(me.value)), (se = ie));
      }),
      se
    );
  }
  function Pe() {
    const A = ze(D);
    if (!A || !A.playerIds) return;
    const K = Hs(R, A);
    _.set(K);
  }
  function We() {
    const A = ze(D);
    if (A) {
      let K = 0;
      A.playerIds.forEach((se) => {
        const ie = R.find((me) => me.id === se);
        ie && (K += Number(ie.value));
      }),
        t(14, (q = K / 4));
    }
  }
  function ke() {
    const A = new Map();
    for (const K of o?.playerIds || [])
      if (K > 0) {
        const se = R.find((ie) => ie.id === K);
        if (
          se &&
          (A.set(se.teamId, (A.get(se.teamId) || 0) + 1), A.get(se.teamId) > 2)
        )
          return !1;
      }
    return Hr(o)
      ? o?.playerIds.filter((K) => K > 0).length !== 11
        ? (console.log("3"), !1)
        : c < 0
        ? (console.log("4"), !1)
        : p < 0
        ? (console.log("5"), !1)
        : !!Lr(R, o, N)
      : (console.log("2"), !1);
  }
  function Ie() {
    const A = ze(D);
    if (!A || !R) return;
    let K = { ...A, playerIds: new Uint16Array(11) },
      se = ze(X);
    const ie = new Map();
    K.playerIds.forEach((xe) => {
      if (xe > 0) {
        const Me = R.find((Je) => Je.id === xe);
        Me && ie.set(Me.teamId, (ie.get(Me.teamId) || 0) + 1);
      }
    });
    let me = Array.from(new Set(R.map((xe) => xe.teamId))).filter(
      (xe) => xe > 0
    );
    me.sort(() => Math.random() - 0.5),
      d[N].positions.forEach((xe, Me) => {
        if (se <= 0 || me.length === 0) return;
        const Je = me.shift();
        if (Je === void 0) return;
        const Qe = R.filter(
          (Re) =>
            Re.position === xe &&
            Re.teamId === Je &&
            !K.playerIds.includes(Re.id) &&
            (ie.get(Re.teamId) || 0) < 1
        );
        Qe.sort((Re, kt) => Number(Re.value) - Number(kt.value));
        const st = Qe.slice(0, Math.ceil(Qe.length / 2)),
          et = st[Math.floor(Math.random() * st.length)];
        if (et) {
          const Re = se - Number(et.value);
          if (Re < 0) return;
          (K.playerIds[Me] = et.id),
            (se = Re),
            ie.set(et.teamId, (ie.get(et.teamId) || 0) + 1);
        }
      }),
      se >= 0 && (D.set(K), X.set(se));
  }
  async function Ze() {
    Na.set("Saving Fantasy Team"), Ul.set(!0);
    let A = ze(D);
    (A?.captainId === 0 || !A?.playerIds.includes(A?.captainId)) &&
      (A.captainId = Te(A)),
      A?.safeHandsGameweek === b &&
        A?.safeHandsPlayerId !== A?.playerIds[0] &&
        (A.safeHandsPlayerId = A?.playerIds[0]),
      A?.captainFantasticGameweek === b &&
        A?.captainFantasticPlayerId !== A?.captainId &&
        (A.captainFantasticPlayerId = A?.captainId);
    try {
      await Aa.saveFantasyTeam(A, b),
        jl.show("Team saved successully!", "success");
    } catch (K) {
      jl.show("Error saving team.", "error"),
        console.error("Error saving team:", K);
    } finally {
      Ul.set(!1), Na.set("Loading");
    }
  }
  function je() {
    (N = fl(this)), t(0, N);
  }
  const Ue = (A, K) => K.id === A.teamId,
    qe = (A) => ce(A.id),
    lt = (A) => ue(A.id),
    at = (A, K) => H(A, K),
    He = (A, K) => K.id === A,
    Tt = (A) => ue(A.id),
    Rt = (A) => ce(A.id),
    Vt = (A, K) => H(A, K),
    Pt = (A, K) => K.id === A,
    Yt = (A, K) => K.id === A?.teamId;
  return (
    (a.$$.update = () => {
      a.$$.dirty[0] & 1 && t(17, (l = Sr(N))),
        a.$$.dirty[0] & 6 && R && o && (Pe(), We()),
        a.$$.dirty[0] & 4 && t(18, (r = o ? ke() : !1));
    }),
    [
      N,
      R,
      o,
      v,
      b,
      I,
      y,
      g,
      k,
      w,
      B,
      j,
      F,
      Z,
      q,
      L,
      G,
      l,
      r,
      p,
      c,
      f,
      _,
      D,
      W,
      X,
      ee,
      ae,
      H,
      J,
      be,
      Ve,
      ce,
      ue,
      Ie,
      Ze,
      je,
      Ue,
      qe,
      lt,
      at,
      He,
      Tt,
      Rt,
      Vt,
      Pt,
      Yt,
    ]
  );
}
class Qr extends St {
  constructor(e) {
    super(), Ht(this, e, Ur, Or, Lt, {}, null, [-1, -1, -1]);
  }
}
export { Qr as component };
