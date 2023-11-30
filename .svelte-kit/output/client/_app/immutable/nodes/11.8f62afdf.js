import { w as $a } from "../chunks/index.8caf67b2.js";
import {
  $ as ja,
  a as C,
  A as La,
  a0 as ne,
  a1 as oe,
  a6 as De,
  b as ma,
  B as wa,
  c as P,
  d as la,
  e as qa,
  f as le,
  G as n,
  g as na,
  H as ga,
  h as l,
  i as Ha,
  I as te,
  J as Te,
  k as m,
  K as pe,
  L as Y,
  l as _,
  m as d,
  M as he,
  n as r,
  N as se,
  o as re,
  O as ve,
  P as Ae,
  p as Ra,
  Q as ae,
  q as j,
  R as be,
  r as k,
  s as Ba,
  S as Ka,
  T as ge,
  u as Ja,
  U as ka,
  V as de,
  v as ie,
  w as Ce,
  y as Oa,
  z as ya,
} from "../chunks/index.c7b38e5e.js";
import {
  a as Re,
  g as ye,
  i as Oe,
  L as Pe,
  l as xa,
} from "../chunks/Layout.a538b3b7.js";
import { M as Le } from "../chunks/manager-gameweeks.3f813266.js";
import { s as ue } from "../chunks/system-store.28344883.js";
import { A as Za, t as ee } from "../chunks/team-store.90511bc6.js";
import { a as Qa, t as va } from "../chunks/toast-store.58fa49f6.js";
function we() {
  const { subscribe: o, set: a, update: e } = $a(null);
  async function s(c) {
    try {
      return await (
        await Za.createIdentityActor(Qa, "bboqb-jiaaa-aaaal-qb6ea-cai")
      ).updateDisplayName(c);
    } catch (t) {
      throw (console.error("Error updating username:", t), t);
    }
  }
  async function i(c) {
    try {
      return await (
        await Za.createIdentityActor(Qa, "bboqb-jiaaa-aaaal-qb6ea-cai")
      ).updateFavouriteTeam(c);
    } catch (t) {
      throw (console.error("Error updating favourite team:", t), t);
    }
  }
  async function p() {
    try {
      const t = await (
        await Za.createIdentityActor(Qa, "bboqb-jiaaa-aaaal-qb6ea-cai")
      ).getProfileDTO();
      return a(t), t;
    } catch (c) {
      throw (console.error("Error getting profile:", c), c);
    }
  }
  async function I(c) {
    try {
      if (c.size > 1e3 * 1024) return null;
      const f = new FileReader();
      f.readAsArrayBuffer(c),
        (f.onloadend = async () => {
          const g = f.result,
            S = new Uint8Array(g);
          try {
            return await (
              await Za.createIdentityActor(Qa, "bboqb-jiaaa-aaaal-qb6ea-cai")
            ).updateProfilePicture(S);
          } catch (D) {
            console.error(D);
          }
        });
    } catch (t) {
      throw (console.error("Error updating username:", t), t);
    }
  }
  return {
    subscribe: o,
    updateUsername: s,
    updateFavouriteTeam: i,
    getProfile: p,
    updateProfilePicture: I,
  };
}
const Pa = we();
function Fe(o) {
  let a, e, s, i, p, I;
  return {
    c() {
      (a = ne("svg")), (e = ne("path")), (s = ne("path")), this.h();
    },
    l(c) {
      a = oe(c, "svg", {
        xmlns: !0,
        "aria-hidden": !0,
        class: !0,
        fill: !0,
        viewBox: !0,
        style: !0,
      });
      var t = d(a);
      (e = oe(t, "path", { d: !0 })),
        d(e).forEach(l),
        (s = oe(t, "path", { d: !0 })),
        d(s).forEach(l),
        t.forEach(l),
        this.h();
    },
    h() {
      r(
        e,
        "d",
        "M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"
      ),
        r(
          s,
          "d",
          "M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-9zM2 2.5A1.5 1.5 0 0 1 3.5 1h9A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5v-10zm9.5 3A1.5 1.5 0 0 1 13 7h1.5V3.5a1.5 1.5 0 0 0-1.5-1.5H9V4a1.5 1.5 0 0 1 1.5 1.5v1zm0 1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1z"
        ),
        r(a, "xmlns", "http://www.w3.org/2000/svg"),
        r(a, "aria-hidden", "true"),
        r(a, "class", (i = ka(o[0]) + " svelte-1qbujws")),
        r(a, "fill", "currentColor"),
        r(a, "viewBox", "0 0 16 16"),
        Ra(a, "--hover-color", o[3]),
        Ra(a, "cursor", "'pointer'");
    },
    m(c, t) {
      ma(c, a, t), n(a, e), n(a, s), p || ((I = Y(a, "click", o[4])), (p = !0));
    },
    p(c, [t]) {
      t & 1 && i !== (i = ka(c[0]) + " svelte-1qbujws") && r(a, "class", i),
        t & 8 && Ra(a, "--hover-color", c[3]);
    },
    i: ga,
    o: ga,
    d(c) {
      c && l(a), (p = !1), I();
    },
  };
}
function je(o, a, e) {
  let { className: s = "" } = a,
    { principalId: i = "" } = a,
    { onClick: p } = a,
    { hoverColor: I = "red" } = a;
  const c = () => p(i);
  return (
    (o.$$set = (t) => {
      "className" in t && e(0, (s = t.className)),
        "principalId" in t && e(1, (i = t.principalId)),
        "onClick" in t && e(2, (p = t.onClick)),
        "hoverColor" in t && e(3, (I = t.hoverColor));
    }),
    [s, i, p, I, c]
  );
}
class ke extends Ka {
  constructor(a) {
    super(),
      Ha(this, a, je, Fe, Ba, {
        className: 0,
        principalId: 1,
        onClick: 2,
        hoverColor: 3,
      });
  }
}
function Ie(o) {
  let a, e, s, i, p, I, c, t, f, g, S, D, b, E, N, T, R, x, M;
  return {
    c() {
      (a = m("div")),
        (e = m("div")),
        (s = m("div")),
        (i = m("h3")),
        (p = j("Update Display Name")),
        (I = C()),
        (c = m("form")),
        (t = m("div")),
        (f = m("input")),
        (g = C()),
        (S = m("div")),
        (D = m("button")),
        (b = j("Cancel")),
        (E = C()),
        (N = m("button")),
        (T = j("Use")),
        this.h();
    },
    l(W) {
      a = _(W, "DIV", { class: !0 });
      var U = d(a);
      e = _(U, "DIV", { class: !0 });
      var L = d(e);
      s = _(L, "DIV", { class: !0 });
      var F = d(s);
      i = _(F, "H3", { class: !0 });
      var O = d(i);
      (p = k(O, "Update Display Name")),
        O.forEach(l),
        (I = P(F)),
        (c = _(F, "FORM", {}));
      var y = d(c);
      t = _(y, "DIV", { class: !0 });
      var q = d(t);
      (f = _(q, "INPUT", { type: !0, class: !0, placeholder: !0 })),
        q.forEach(l),
        (g = P(y)),
        (S = _(y, "DIV", { class: !0 }));
      var G = d(S);
      D = _(G, "BUTTON", { class: !0 });
      var K = d(D);
      (b = k(K, "Cancel")),
        K.forEach(l),
        (E = P(G)),
        (N = _(G, "BUTTON", { class: !0, type: !0 }));
      var u = d(N);
      (T = k(u, "Use")),
        u.forEach(l),
        G.forEach(l),
        y.forEach(l),
        F.forEach(l),
        L.forEach(l),
        U.forEach(l),
        this.h();
    },
    h() {
      r(i, "class", "text-lg leading-6 font-medium mb-2"),
        r(f, "type", "text"),
        r(
          f,
          "class",
          "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        ),
        r(f, "placeholder", "New Username"),
        r(t, "class", "mt-4"),
        r(
          D,
          "class",
          "px-4 py-2 fpl-cancel-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        r(
          N,
          "class",
          (R =
            ka(
              `px-4 py-2 ${
                o[3] ? "bg-gray-500" : "fpl-purple-btn"
              } text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`
            ) + " svelte-1fl295u")
        ),
        r(N, "type", "submit"),
        (N.disabled = o[3]),
        r(S, "class", "items-center py-3 flex space-x-4"),
        r(s, "class", "mt-3 text-center"),
        r(
          e,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"
        ),
        r(
          a,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop svelte-1fl295u"
        );
    },
    m(W, U) {
      ma(W, a, U),
        n(a, e),
        n(e, s),
        n(s, i),
        n(i, p),
        n(s, I),
        n(s, c),
        n(c, t),
        n(t, f),
        de(f, o[0]),
        n(c, g),
        n(c, S),
        n(S, D),
        n(D, b),
        n(S, E),
        n(S, N),
        n(N, T),
        x ||
          ((M = [
            Y(f, "input", o[9]),
            Y(D, "click", function () {
              ae(o[2]) && o[2].apply(this, arguments);
            }),
            Y(c, "submit", De(o[4])),
            Y(e, "click", be(o[8])),
            Y(e, "keydown", o[5]),
            Y(a, "click", function () {
              ae(o[2]) && o[2].apply(this, arguments);
            }),
            Y(a, "keydown", o[5]),
          ]),
          (x = !0));
    },
    p(W, U) {
      (o = W),
        U & 1 && f.value !== o[0] && de(f, o[0]),
        U & 8 &&
          R !==
            (R =
              ka(
                `px-4 py-2 ${
                  o[3] ? "bg-gray-500" : "fpl-purple-btn"
                } text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`
              ) + " svelte-1fl295u") &&
          r(N, "class", R),
        U & 8 && (N.disabled = o[3]);
    },
    d(W) {
      W && l(a), (x = !1), se(M);
    },
  };
}
function qe(o) {
  let a,
    e = o[1] && Ie(o);
  return {
    c() {
      e && e.c(), (a = qa());
    },
    l(s) {
      e && e.l(s), (a = qa());
    },
    m(s, i) {
      e && e.m(s, i), ma(s, a, i);
    },
    p(s, [i]) {
      s[1]
        ? e
          ? e.p(s, i)
          : ((e = Ie(s)), e.c(), e.m(a.parentNode, a))
        : e && (e.d(1), (e = null));
    },
    i: ga,
    o: ga,
    d(s) {
      e && e.d(s), s && l(a);
    },
  };
}
function xe(o) {
  return o.length < 3 || o.length > 20 ? !1 : /^[a-zA-Z0-9 ]+$/.test(o);
}
function Me(o, a, e) {
  let s,
    { showModal: i } = a,
    { closeModal: p } = a,
    { cancelModal: I } = a,
    { newUsername: c = "" } = a,
    { isLoading: t } = a;
  async function f() {
    t.set(!0), xa.set("Updating Display Name");
    try {
      await Pa.updateUsername(c),
        await p(),
        va.show("Display name updated.", "success");
    } catch (b) {
      va.show("Error updating username.", "error"),
        console.error("Error updating username:", b),
        I();
    } finally {
      t.set(!1), xa.set("Loading");
    }
  }
  function g(b) {
    !(b.target instanceof HTMLInputElement) && b.key === "Escape" && p();
  }
  function S(b) {
    ge.call(this, o, b);
  }
  function D() {
    (c = this.value), e(0, c);
  }
  return (
    (o.$$set = (b) => {
      "showModal" in b && e(1, (i = b.showModal)),
        "closeModal" in b && e(6, (p = b.closeModal)),
        "cancelModal" in b && e(2, (I = b.cancelModal)),
        "newUsername" in b && e(0, (c = b.newUsername)),
        "isLoading" in b && e(7, (t = b.isLoading));
    }),
    (o.$$.update = () => {
      o.$$.dirty & 1 && e(3, (s = !xe(c)));
    }),
    [c, i, I, s, f, g, p, t, S, D]
  );
}
class We extends Ka {
  constructor(a) {
    super(),
      Ha(this, a, Me, qe, Ba, {
        showModal: 1,
        closeModal: 6,
        cancelModal: 2,
        newUsername: 0,
        isLoading: 7,
      });
  }
}
function fe(o, a, e) {
  const s = o.slice();
  return (s[12] = a[e]), s;
}
function Ne(o) {
  let a,
    e,
    s,
    i,
    p,
    I,
    c,
    t,
    f,
    g,
    S,
    D,
    b,
    E,
    N,
    T,
    R,
    x,
    M,
    W,
    U,
    L,
    F,
    O,
    y,
    q,
    G,
    K = o[4],
    u = [];
  for (let v = 0; v < K.length; v += 1) u[v] = Se(fe(o, K, v));
  return {
    c() {
      (a = m("div")),
        (e = m("div")),
        (s = m("div")),
        (i = m("h3")),
        (p = j("Update Favourite Team")),
        (I = C()),
        (c = m("div")),
        (t = m("select")),
        (f = m("option")),
        (g = j("Select Team"));
      for (let v = 0; v < u.length; v += 1) u[v].c();
      (S = C()),
        (D = m("div")),
        (b = m("p")),
        (E = j("Warning")),
        (N = C()),
        (T = m("p")),
        (R = j("You can only set your favourite team once per season.")),
        (x = C()),
        (M = m("div")),
        (W = m("button")),
        (U = j("Cancel")),
        (L = C()),
        (F = m("button")),
        (O = j("Use")),
        this.h();
    },
    l(v) {
      a = _(v, "DIV", { class: !0 });
      var z = d(a);
      e = _(z, "DIV", { class: !0 });
      var A = d(e);
      s = _(A, "DIV", { class: !0 });
      var X = d(s);
      i = _(X, "H3", { class: !0 });
      var J = d(i);
      (p = k(J, "Update Favourite Team")),
        J.forEach(l),
        (I = P(X)),
        (c = _(X, "DIV", { class: !0 }));
      var Ia = d(c);
      t = _(Ia, "SELECT", { class: !0 });
      var ea = d(t);
      f = _(ea, "OPTION", {});
      var $ = d(f);
      (g = k($, "Select Team")), $.forEach(l);
      for (let Q = 0; Q < u.length; Q += 1) u[Q].l(ea);
      ea.forEach(l),
        Ia.forEach(l),
        X.forEach(l),
        (S = P(A)),
        (D = _(A, "DIV", { class: !0, role: !0 }));
      var aa = d(D);
      b = _(aa, "P", { class: !0 });
      var oa = d(b);
      (E = k(oa, "Warning")),
        oa.forEach(l),
        (N = P(aa)),
        (T = _(aa, "P", { class: !0 }));
      var da = d(T);
      (R = k(da, "You can only set your favourite team once per season.")),
        da.forEach(l),
        aa.forEach(l),
        (x = P(A)),
        (M = _(A, "DIV", { class: !0 }));
      var sa = d(M);
      W = _(sa, "BUTTON", { class: !0 });
      var ta = d(W);
      (U = k(ta, "Cancel")),
        ta.forEach(l),
        (L = P(sa)),
        (F = _(sa, "BUTTON", { class: !0 }));
      var pa = d(F);
      (O = k(pa, "Use")),
        pa.forEach(l),
        sa.forEach(l),
        A.forEach(l),
        z.forEach(l),
        this.h();
    },
    h() {
      r(i, "class", "text-lg leading-6 font-medium mb-2"),
        (f.__value = 0),
        (f.value = f.__value),
        r(t, "class", "w-full p-2 rounded-md fpl-dropdown"),
        o[0] === void 0 && Te(() => o[10].call(t)),
        r(c, "class", "w-full border border-gray-500 mt-4 mb-2"),
        r(s, "class", "mt-3 text-center"),
        r(b, "class", "font-bold text-sm"),
        r(T, "class", "font-bold text-xs"),
        r(
          D,
          "class",
          "bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-1 mt-4"
        ),
        r(D, "role", "alert"),
        r(
          W,
          "class",
          "px-4 py-2 fpl-cancel-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        r(
          F,
          "class",
          (y =
            ka(
              `px-4 py-2 ${
                o[3] ? "bg-gray-500" : "fpl-purple-btn"
              } text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`
            ) + " svelte-1fl295u")
        ),
        (F.disabled = o[3]),
        r(M, "class", "items-center py-3 flex space-x-4"),
        r(
          e,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"
        ),
        r(
          a,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop svelte-1fl295u"
        );
    },
    m(v, z) {
      ma(v, a, z),
        n(a, e),
        n(e, s),
        n(s, i),
        n(i, p),
        n(s, I),
        n(s, c),
        n(c, t),
        n(t, f),
        n(f, g);
      for (let A = 0; A < u.length; A += 1) u[A] && u[A].m(t, null);
      pe(t, o[0], !0),
        n(e, S),
        n(e, D),
        n(D, b),
        n(b, E),
        n(D, N),
        n(D, T),
        n(T, R),
        n(e, x),
        n(e, M),
        n(M, W),
        n(W, U),
        n(M, L),
        n(M, F),
        n(F, O),
        q ||
          ((G = [
            Y(t, "change", o[10]),
            Y(W, "click", function () {
              ae(o[2]) && o[2].apply(this, arguments);
            }),
            Y(F, "click", o[5]),
            Y(e, "click", be(o[9])),
            Y(e, "keydown", o[6]),
            Y(a, "click", function () {
              ae(o[2]) && o[2].apply(this, arguments);
            }),
            Y(a, "keydown", o[6]),
          ]),
          (q = !0));
    },
    p(v, z) {
      if (((o = v), z & 16)) {
        K = o[4];
        let A;
        for (A = 0; A < K.length; A += 1) {
          const X = fe(o, K, A);
          u[A] ? u[A].p(X, z) : ((u[A] = Se(X)), u[A].c(), u[A].m(t, null));
        }
        for (; A < u.length; A += 1) u[A].d(1);
        u.length = K.length;
      }
      z & 17 && pe(t, o[0]),
        z & 8 &&
          y !==
            (y =
              ka(
                `px-4 py-2 ${
                  o[3] ? "bg-gray-500" : "fpl-purple-btn"
                } text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`
              ) + " svelte-1fl295u") &&
          r(F, "class", y),
        z & 8 && (F.disabled = o[3]);
    },
    d(v) {
      v && l(a), he(u, v), (q = !1), se(G);
    },
  };
}
function Se(o) {
  let a,
    e = o[12].friendlyName + "",
    s,
    i;
  return {
    c() {
      (a = m("option")), (s = j(e)), this.h();
    },
    l(p) {
      a = _(p, "OPTION", {});
      var I = d(a);
      (s = k(I, e)), I.forEach(l), this.h();
    },
    h() {
      (a.__value = i = o[12].id), (a.value = a.__value);
    },
    m(p, I) {
      ma(p, a, I), n(a, s);
    },
    p(p, I) {
      I & 16 && e !== (e = p[12].friendlyName + "") && Ja(s, e),
        I & 16 &&
          i !== (i = p[12].id) &&
          ((a.__value = i), (a.value = a.__value));
    },
    d(p) {
      p && l(a);
    },
  };
}
function Ve(o) {
  let a,
    e = o[1] && Ne(o);
  return {
    c() {
      e && e.c(), (a = qa());
    },
    l(s) {
      e && e.l(s), (a = qa());
    },
    m(s, i) {
      e && e.m(s, i), ma(s, a, i);
    },
    p(s, [i]) {
      s[1]
        ? e
          ? e.p(s, i)
          : ((e = Ne(s)), e.c(), e.m(a.parentNode, a))
        : e && (e.d(1), (e = null));
    },
    i: ga,
    o: ga,
    d(s) {
      e && e.d(s), s && l(a);
    },
  };
}
function ze(o, a, e) {
  let { showModal: s } = a,
    { closeModal: i } = a,
    { cancelModal: p } = a,
    { newFavouriteTeam: I = 0 } = a,
    { isLoading: c } = a,
    t = !0,
    f,
    g;
  re(async () => {
    await ee.sync(),
      (g = ee.subscribe((N) => {
        e(4, (f = N));
      }));
  }),
    ve(() => {
      g?.();
    });
  async function S() {
    c.set(!0), xa.set("Updating Favourite Club");
    try {
      await Pa.updateFavouriteTeam(I),
        await i(),
        va.show("Favourite team updated.", "success");
    } catch (N) {
      va.show("Error updating favourite team.", "error"),
        console.error("Error updating favourite team:", N),
        p();
    } finally {
      c.set(!1), xa.set("Loading");
    }
  }
  function D(N) {
    !(N.target instanceof HTMLInputElement) && N.key === "Escape" && i();
  }
  function b(N) {
    ge.call(this, o, N);
  }
  function E() {
    (I = Ae(this)), e(0, I), e(4, f);
  }
  return (
    (o.$$set = (N) => {
      "showModal" in N && e(1, (s = N.showModal)),
        "closeModal" in N && e(7, (i = N.closeModal)),
        "cancelModal" in N && e(2, (p = N.cancelModal)),
        "newFavouriteTeam" in N && e(0, (I = N.newFavouriteTeam)),
        "isLoading" in N && e(8, (c = N.isLoading));
    }),
    (o.$$.update = () => {
      o.$$.dirty & 1 && e(3, (t = I <= 0));
    }),
    [I, s, p, t, f, S, D, i, c, b, E]
  );
}
class Ue extends Ka {
  constructor(a) {
    super(),
      Ha(this, a, ze, Ve, Ba, {
        showModal: 1,
        closeModal: 7,
        cancelModal: 2,
        newFavouriteTeam: 0,
        isLoading: 8,
      });
  }
}
function Ge(o) {
  let a,
    e,
    s,
    i,
    p,
    I,
    c,
    t,
    f,
    g,
    S,
    D,
    b,
    E,
    N,
    T,
    R,
    x,
    M,
    W,
    U,
    L,
    F,
    O,
    y,
    q,
    G,
    K,
    u,
    v,
    z,
    A,
    X,
    J,
    Ia,
    ea,
    $,
    aa,
    oa,
    da,
    sa,
    ta,
    pa,
    Q,
    Z,
    fa,
    Na,
    ra,
    ua,
    ca,
    ia,
    Sa,
    Fa,
    H;
  (a = new We({
    props: {
      newUsername: o[6] ? o[6].displayName : "",
      showModal: o[1],
      closeModal: o[12],
      cancelModal: o[13],
      isLoading: o[10],
    },
  })),
    (s = new Ue({
      props: {
        newFavouriteTeam: o[6] ? o[6].favouriteTeamId : 0,
        showModal: o[2],
        closeModal: o[15],
        cancelModal: o[16],
        isLoading: o[10],
      },
    }));
  let w = o[6] && Ee(o);
  return {
    c() {
      Oa(a.$$.fragment),
        (e = C()),
        Oa(s.$$.fragment),
        (i = C()),
        (p = m("div")),
        w && w.c(),
        (I = C()),
        (c = m("div")),
        (t = m("div")),
        (f = m("div")),
        (g = m("div")),
        (S = m("div")),
        (D = m("img")),
        (E = C()),
        (N = m("div")),
        (T = m("p")),
        (R = j("ICP")),
        (x = C()),
        (M = m("p")),
        (W = j("0.00 ICP")),
        (U = C()),
        (L = m("div")),
        (F = m("img")),
        (y = C()),
        (q = m("div")),
        (G = m("p")),
        (K = j("FPL")),
        (u = C()),
        (v = m("p")),
        (z = j("0.00 FPL")),
        (A = C()),
        (X = m("div")),
        (J = m("img")),
        (ea = C()),
        ($ = m("div")),
        (aa = m("p")),
        (oa = j("ckBTC")),
        (da = C()),
        (sa = m("p")),
        (ta = j("0.00 ckBTC")),
        (pa = C()),
        (Q = m("div")),
        (Z = m("img")),
        (Na = C()),
        (ra = m("div")),
        (ua = m("p")),
        (ca = j("ckETH")),
        (ia = C()),
        (Sa = m("p")),
        (Fa = j("0.00 ckETH")),
        this.h();
    },
    l(h) {
      ya(a.$$.fragment, h),
        (e = P(h)),
        ya(s.$$.fragment, h),
        (i = P(h)),
        (p = _(h, "DIV", { class: !0 }));
      var B = d(p);
      w && w.l(B), (I = P(B)), (c = _(B, "DIV", { class: !0 }));
      var _a = d(c);
      t = _(_a, "DIV", { class: !0 });
      var Ea = d(t);
      f = _(Ea, "DIV", { class: !0 });
      var Ma = d(f);
      g = _(Ma, "DIV", { class: !0 });
      var V = d(g);
      S = _(V, "DIV", { class: !0 });
      var Da = d(S);
      (D = _(Da, "IMG", { src: !0, alt: !0, class: !0 })),
        (E = P(Da)),
        (N = _(Da, "DIV", { class: !0 }));
      var Ta = d(N);
      T = _(Ta, "P", { class: !0 });
      var Wa = d(T);
      (R = k(Wa, "ICP")), Wa.forEach(l), (x = P(Ta)), (M = _(Ta, "P", {}));
      var Va = d(M);
      (W = k(Va, "0.00 ICP")),
        Va.forEach(l),
        Ta.forEach(l),
        Da.forEach(l),
        (U = P(V)),
        (L = _(V, "DIV", { class: !0 }));
      var ha = d(L);
      (F = _(ha, "IMG", { src: !0, alt: !0, class: !0 })),
        (y = P(ha)),
        (q = _(ha, "DIV", { class: !0 }));
      var Aa = d(q);
      G = _(Aa, "P", { class: !0 });
      var za = d(G);
      (K = k(za, "FPL")), za.forEach(l), (u = P(Aa)), (v = _(Aa, "P", {}));
      var Ua = d(v);
      (z = k(Ua, "0.00 FPL")),
        Ua.forEach(l),
        Aa.forEach(l),
        ha.forEach(l),
        (A = P(V)),
        (X = _(V, "DIV", { class: !0 }));
      var Ca = d(X);
      (J = _(Ca, "IMG", { src: !0, alt: !0, class: !0 })),
        (ea = P(Ca)),
        ($ = _(Ca, "DIV", { class: !0 }));
      var ba = d($);
      aa = _(ba, "P", { class: !0 });
      var Ga = d(aa);
      (oa = k(Ga, "ckBTC")), Ga.forEach(l), (da = P(ba)), (sa = _(ba, "P", {}));
      var ce = d(sa);
      (ta = k(ce, "0.00 ckBTC")),
        ce.forEach(l),
        ba.forEach(l),
        Ca.forEach(l),
        (pa = P(V)),
        (Q = _(V, "DIV", { class: !0 }));
      var Ya = d(Q);
      (Z = _(Ya, "IMG", { src: !0, alt: !0, class: !0 })),
        (Na = P(Ya)),
        (ra = _(Ya, "DIV", { class: !0 }));
      var Xa = d(ra);
      ua = _(Xa, "P", { class: !0 });
      var me = d(ua);
      (ca = k(me, "ckETH")), me.forEach(l), (ia = P(Xa)), (Sa = _(Xa, "P", {}));
      var _e = d(Sa);
      (Fa = k(_e, "0.00 ckETH")),
        _e.forEach(l),
        Xa.forEach(l),
        Ya.forEach(l),
        V.forEach(l),
        Ma.forEach(l),
        Ea.forEach(l),
        _a.forEach(l),
        B.forEach(l),
        this.h();
    },
    h() {
      ja(D.src, (b = "ICPCoin.png")) || r(D, "src", b),
        r(D, "alt", "ICP"),
        r(D, "class", "h-12 w-12"),
        r(T, "class", "font-bold"),
        r(N, "class", "ml-4"),
        r(
          S,
          "class",
          "flex items-center p-4 rounded-lg shadow-md border border-gray-700"
        ),
        ja(F.src, (O = "FPLCoin.png")) || r(F, "src", O),
        r(F, "alt", "FPL"),
        r(F, "class", "h-12 w-12"),
        r(G, "class", "font-bold"),
        r(q, "class", "ml-4"),
        r(
          L,
          "class",
          "flex items-center p-4 rounded-lg shadow-md border border-gray-700"
        ),
        ja(J.src, (Ia = "ckBTCCoin.png")) || r(J, "src", Ia),
        r(J, "alt", "ICP"),
        r(J, "class", "h-12 w-12"),
        r(aa, "class", "font-bold"),
        r($, "class", "ml-4"),
        r(
          X,
          "class",
          "flex items-center p-4 rounded-lg shadow-md border border-gray-700"
        ),
        ja(Z.src, (fa = "ckETHCoin.png")) || r(Z, "src", fa),
        r(Z, "alt", "ICP"),
        r(Z, "class", "h-12 w-12"),
        r(ua, "class", "font-bold"),
        r(ra, "class", "ml-4"),
        r(
          Q,
          "class",
          "flex items-center p-4 rounded-lg shadow-md border border-gray-700"
        ),
        r(g, "class", "grid grid-cols-1 md:grid-cols-4 gap-4"),
        r(f, "class", "mt-4 px-2"),
        r(t, "class", "w-full px-2 mb-4"),
        r(c, "class", "flex flex-wrap -mx-2 mt-4"),
        r(p, "class", "container mx-auto p-4");
    },
    m(h, B) {
      La(a, h, B),
        ma(h, e, B),
        La(s, h, B),
        ma(h, i, B),
        ma(h, p, B),
        w && w.m(p, null),
        n(p, I),
        n(p, c),
        n(c, t),
        n(t, f),
        n(f, g),
        n(g, S),
        n(S, D),
        n(S, E),
        n(S, N),
        n(N, T),
        n(T, R),
        n(N, x),
        n(N, M),
        n(M, W),
        n(g, U),
        n(g, L),
        n(L, F),
        n(L, y),
        n(L, q),
        n(q, G),
        n(G, K),
        n(q, u),
        n(q, v),
        n(v, z),
        n(g, A),
        n(g, X),
        n(X, J),
        n(X, ea),
        n(X, $),
        n($, aa),
        n(aa, oa),
        n($, da),
        n($, sa),
        n(sa, ta),
        n(g, pa),
        n(g, Q),
        n(Q, Z),
        n(Q, Na),
        n(Q, ra),
        n(ra, ua),
        n(ua, ca),
        n(ra, ia),
        n(ra, Sa),
        n(Sa, Fa),
        (H = !0);
    },
    p(h, B) {
      const _a = {};
      B & 64 && (_a.newUsername = h[6] ? h[6].displayName : ""),
        B & 2 && (_a.showModal = h[1]),
        a.$set(_a);
      const Ea = {};
      B & 64 && (Ea.newFavouriteTeam = h[6] ? h[6].favouriteTeamId : 0),
        B & 4 && (Ea.showModal = h[2]),
        s.$set(Ea),
        h[6]
          ? w
            ? (w.p(h, B), B & 64 && na(w, 1))
            : ((w = Ee(h)), w.c(), na(w, 1), w.m(p, I))
          : w &&
            (ie(),
            la(w, 1, 1, () => {
              w = null;
            }),
            le());
    },
    i(h) {
      H || (na(a.$$.fragment, h), na(s.$$.fragment, h), na(w), (H = !0));
    },
    o(h) {
      la(a.$$.fragment, h), la(s.$$.fragment, h), la(w), (H = !1);
    },
    d(h) {
      wa(a, h), h && l(e), wa(s, h), h && l(i), h && l(p), w && w.d();
    },
  };
}
function Ke(o) {
  let a, e;
  return (
    (a = new Pe({})),
    {
      c() {
        Oa(a.$$.fragment);
      },
      l(s) {
        ya(a.$$.fragment, s);
      },
      m(s, i) {
        La(a, s, i), (e = !0);
      },
      p: ga,
      i(s) {
        e || (na(a.$$.fragment, s), (e = !0));
      },
      o(s) {
        la(a.$$.fragment, s), (e = !1);
      },
      d(s) {
        wa(a, s);
      },
    }
  );
}
function Ee(o) {
  let a,
    e,
    s,
    i,
    p,
    I,
    c,
    t,
    f,
    g,
    S,
    D,
    b,
    E,
    N,
    T,
    R,
    x,
    M = o[6]?.displayName + "",
    W,
    U,
    L,
    F,
    O,
    y,
    q,
    G,
    K,
    u = o[0].find(o[21])?.friendlyName + "",
    v,
    z,
    A,
    X,
    J,
    Ia,
    ea,
    $,
    aa,
    oa,
    da,
    sa,
    ta,
    pa,
    Q,
    Z,
    fa,
    Na = o[6]?.principalName + "",
    ra,
    ua,
    ca,
    ia,
    Sa,
    Fa;
  return (
    (ca = new ke({
      props: {
        onClick: o[17],
        principalId: o[6]?.principalName,
        className: "ml-2 w-4 h-4",
      },
    })),
    {
      c() {
        (a = m("div")),
          (e = m("div")),
          (s = m("div")),
          (i = m("img")),
          (I = C()),
          (c = m("div")),
          (t = m("button")),
          (f = j("Upload Photo")),
          (g = C()),
          (S = m("input")),
          (D = C()),
          (b = m("div")),
          (E = m("div")),
          (N = m("p")),
          (T = j("Display Name:")),
          (R = C()),
          (x = m("h2")),
          (W = j(M)),
          (U = C()),
          (L = m("button")),
          (F = j("Update")),
          (O = C()),
          (y = m("p")),
          (q = j("Favourite Team:")),
          (G = C()),
          (K = m("h2")),
          (v = j(u)),
          (z = C()),
          (A = m("button")),
          (X = j("Update")),
          (Ia = C()),
          (ea = m("p")),
          ($ = j("Joined:")),
          (aa = C()),
          (oa = m("h2")),
          (da = j("August 2023")),
          (sa = C()),
          (ta = m("p")),
          (pa = j("Principal:")),
          (Q = C()),
          (Z = m("div")),
          (fa = m("h2")),
          (ra = j(Na)),
          (ua = C()),
          Oa(ca.$$.fragment),
          this.h();
      },
      l(H) {
        a = _(H, "DIV", { class: !0 });
        var w = d(a);
        e = _(w, "DIV", { class: !0 });
        var h = d(e);
        s = _(h, "DIV", { class: !0 });
        var B = d(s);
        (i = _(B, "IMG", { src: !0, alt: !0, class: !0 })),
          (I = P(B)),
          (c = _(B, "DIV", { class: !0 }));
        var _a = d(c);
        t = _(_a, "BUTTON", { class: !0 });
        var Ea = d(t);
        (f = k(Ea, "Upload Photo")),
          Ea.forEach(l),
          (g = P(_a)),
          (S = _(_a, "INPUT", {
            type: !0,
            id: !0,
            accept: !0,
            style: !0,
            class: !0,
          })),
          _a.forEach(l),
          B.forEach(l),
          h.forEach(l),
          (D = P(w)),
          (b = _(w, "DIV", { class: !0 }));
        var Ma = d(b);
        E = _(Ma, "DIV", { class: !0 });
        var V = d(E);
        N = _(V, "P", { class: !0 });
        var Da = d(N);
        (T = k(Da, "Display Name:")),
          Da.forEach(l),
          (R = P(V)),
          (x = _(V, "H2", { class: !0 }));
        var Ta = d(x);
        (W = k(Ta, M)),
          Ta.forEach(l),
          (U = P(V)),
          (L = _(V, "BUTTON", { class: !0 }));
        var Wa = d(L);
        (F = k(Wa, "Update")),
          Wa.forEach(l),
          (O = P(V)),
          (y = _(V, "P", { class: !0 }));
        var Va = d(y);
        (q = k(Va, "Favourite Team:")),
          Va.forEach(l),
          (G = P(V)),
          (K = _(V, "H2", { class: !0 }));
        var ha = d(K);
        (v = k(ha, u)),
          ha.forEach(l),
          (z = P(V)),
          (A = _(V, "BUTTON", { class: !0 }));
        var Aa = d(A);
        (X = k(Aa, "Update")),
          Aa.forEach(l),
          (Ia = P(V)),
          (ea = _(V, "P", { class: !0 }));
        var za = d(ea);
        ($ = k(za, "Joined:")),
          za.forEach(l),
          (aa = P(V)),
          (oa = _(V, "H2", { class: !0 }));
        var Ua = d(oa);
        (da = k(Ua, "August 2023")),
          Ua.forEach(l),
          (sa = P(V)),
          (ta = _(V, "P", { class: !0 }));
        var Ca = d(ta);
        (pa = k(Ca, "Principal:")),
          Ca.forEach(l),
          (Q = P(V)),
          (Z = _(V, "DIV", { class: !0 }));
        var ba = d(Z);
        fa = _(ba, "H2", { class: !0 });
        var Ga = d(fa);
        (ra = k(Ga, Na)),
          Ga.forEach(l),
          (ua = P(ba)),
          ya(ca.$$.fragment, ba),
          ba.forEach(l),
          V.forEach(l),
          Ma.forEach(l),
          w.forEach(l),
          this.h();
      },
      h() {
        ja(i.src, (p = o[7])) || r(i, "src", p),
          r(i, "alt", "Profile"),
          r(i, "class", "w-48 md:w-80 mb-1 rounded-lg"),
          r(t, "class", "btn-file-upload fpl-button svelte-e6um5o"),
          r(S, "type", "file"),
          r(S, "id", "profile-image"),
          r(S, "accept", "image/*"),
          Ra(S, "opacity", "0"),
          Ra(S, "position", "absolute"),
          Ra(S, "left", "0"),
          Ra(S, "top", "0"),
          r(S, "class", "svelte-e6um5o"),
          r(c, "class", "file-upload-wrapper mt-4 svelte-e6um5o"),
          r(s, "class", "group"),
          r(e, "class", "w-full md:w-auto px-2 ml-4 md:ml-0"),
          r(N, "class", "text-xs mb-2"),
          r(x, "class", "text-2xl font-bold mb-2"),
          r(L, "class", "p-2 px-4 rounded fpl-button"),
          r(y, "class", "text-xs mb-2 mt-4"),
          r(K, "class", "text-2xl font-bold mb-2"),
          r(A, "class", "p-2 px-4 rounded fpl-button"),
          (A.disabled = J = o[4] > 1 && (o[6]?.favouriteTeamId ?? 0) > 0),
          r(ea, "class", "text-xs mb-2 mt-4"),
          r(oa, "class", "text-2xl font-bold mb-2"),
          r(ta, "class", "text-xs mb-2 mt-4"),
          r(fa, "class", "text-xs font-bold"),
          r(Z, "class", "flex items-center"),
          r(E, "class", "ml-4 p-4 rounded-lg"),
          r(b, "class", "w-full md:w-3/4 px-2 mb-4"),
          r(a, "class", "flex flex-wrap");
      },
      m(H, w) {
        ma(H, a, w),
          n(a, e),
          n(e, s),
          n(s, i),
          n(s, I),
          n(s, c),
          n(c, t),
          n(t, f),
          n(c, g),
          n(c, S),
          o[20](S),
          n(a, D),
          n(a, b),
          n(b, E),
          n(E, N),
          n(N, T),
          n(E, R),
          n(E, x),
          n(x, W),
          n(E, U),
          n(E, L),
          n(L, F),
          n(E, O),
          n(E, y),
          n(y, q),
          n(E, G),
          n(E, K),
          n(K, v),
          n(E, z),
          n(E, A),
          n(A, X),
          n(E, Ia),
          n(E, ea),
          n(ea, $),
          n(E, aa),
          n(E, oa),
          n(oa, da),
          n(E, sa),
          n(E, ta),
          n(ta, pa),
          n(E, Q),
          n(E, Z),
          n(Z, fa),
          n(fa, ra),
          n(Z, ua),
          La(ca, Z, null),
          (ia = !0),
          Sa ||
            ((Fa = [
              Y(t, "click", o[18]),
              Y(S, "change", o[19]),
              Y(L, "click", o[11]),
              Y(A, "click", o[14]),
            ]),
            (Sa = !0));
      },
      p(H, w) {
        (!ia || (w & 128 && !ja(i.src, (p = H[7])))) && r(i, "src", p),
          (!ia || w & 64) && M !== (M = H[6]?.displayName + "") && Ja(W, M),
          (!ia || w & 65) &&
            u !== (u = H[0].find(H[21])?.friendlyName + "") &&
            Ja(v, u),
          (!ia ||
            (w & 80 &&
              J !== (J = H[4] > 1 && (H[6]?.favouriteTeamId ?? 0) > 0))) &&
            (A.disabled = J),
          (!ia || w & 64) &&
            Na !== (Na = H[6]?.principalName + "") &&
            Ja(ra, Na);
        const h = {};
        w & 64 && (h.principalId = H[6]?.principalName), ca.$set(h);
      },
      i(H) {
        ia || (na(ca.$$.fragment, H), (ia = !0));
      },
      o(H) {
        la(ca.$$.fragment, H), (ia = !1);
      },
      d(H) {
        H && l(a), o[20](null), wa(ca), (Sa = !1), se(Fa);
      },
    }
  );
}
function He(o) {
  let a, e, s, i;
  const p = [Ke, Ge],
    I = [];
  function c(t, f) {
    return t[5] ? 0 : 1;
  }
  return (
    (a = c(o)),
    (e = I[a] = p[a](o)),
    {
      c() {
        e.c(), (s = qa());
      },
      l(t) {
        e.l(t), (s = qa());
      },
      m(t, f) {
        I[a].m(t, f), ma(t, s, f), (i = !0);
      },
      p(t, [f]) {
        let g = a;
        (a = c(t)),
          a === g
            ? I[a].p(t, f)
            : (ie(),
              la(I[g], 1, 1, () => {
                I[g] = null;
              }),
              le(),
              (e = I[a]),
              e ? e.p(t, f) : ((e = I[a] = p[a](t)), e.c()),
              na(e, 1),
              e.m(s.parentNode, s));
      },
      i(t) {
        i || (na(e), (i = !0));
      },
      o(t) {
        la(e), (i = !1);
      },
      d(t) {
        I[a].d(t), t && l(s);
      },
    }
  );
}
function Be(o, a, e) {
  let s,
    i,
    p,
    I,
    c,
    t = $a(null);
  te(o, t, (u) => e(6, (i = u)));
  let f = $a("profile_placeholder.png");
  te(o, f, (u) => e(7, (p = u)));
  let g = !1,
    S = !1,
    D,
    b = 1,
    E = $a(!1);
  te(o, E, (u) => e(5, (s = u)));
  let N, T;
  re(async () => {
    E.set(!0);
    try {
      await ee.sync(),
        await ue.sync(),
        (N = ee.subscribe((v) => {
          e(0, (I = v));
        })),
        (T = ue.subscribe((v) => {
          c = v;
        }));
      const u = await Pa.getProfile();
      if ((t.set(u), u && u.profilePicture.length > 0)) {
        const v = new Blob([new Uint8Array(u.profilePicture)]);
        f.set(URL.createObjectURL(v));
      }
      e(4, (b = c?.activeGameweek ?? 1));
    } catch (u) {
      va.show("Error fetching profile detail.", "error"),
        console.error("Error fetching profile detail:", u);
    } finally {
      E.set(!1);
    }
  }),
    ve(() => {
      N?.(), T?.();
    });
  function R() {
    e(1, (g = !0));
  }
  async function x() {
    const u = await Pa.getProfile();
    t.set(u), e(1, (g = !1));
  }
  function M() {
    e(1, (g = !1));
  }
  function W() {
    e(2, (S = !0));
  }
  async function U() {
    const u = await Pa.getProfile();
    t.set(u), e(2, (S = !1));
  }
  function L() {
    e(2, (S = !1));
  }
  function F(u) {
    navigator.clipboard.writeText(u).then(() => {
      va.show("Copied!", "success");
    });
  }
  function O() {
    D.click();
  }
  function y(u) {
    const v = u.target;
    if (v.files && v.files[0]) {
      const z = v.files[0];
      if (z.size > 1e3 * 1024) {
        alert("File size exceeds 1000KB");
        return;
      }
      q(z);
    }
  }
  async function q(u) {
    E.set(!0), xa.set("Updating Profile Picture");
    try {
      await Pa.updateProfilePicture(u);
      const v = await Pa.getProfile();
      if ((t.set(v), v && v.profilePicture.length > 0)) {
        const z = new Blob([new Uint8Array(v.profilePicture)]);
        f.set(URL.createObjectURL(z));
      }
      va.show("Profile image updated.", "success");
    } catch (v) {
      va.show("Error updating profile image", "error"),
        console.error("Error updating profile image", v);
    } finally {
      E.set(!1), xa.set("Loading");
    }
  }
  function G(u) {
    Ce[u ? "unshift" : "push"](() => {
      (D = u), e(3, D);
    });
  }
  return [
    I,
    g,
    S,
    D,
    b,
    s,
    i,
    p,
    t,
    f,
    E,
    R,
    x,
    M,
    W,
    U,
    L,
    F,
    O,
    y,
    G,
    (u) => u.id === i?.favouriteTeamId,
  ];
}
class Ye extends Ka {
  constructor(a) {
    super(), Ha(this, a, Be, He, Ba, {});
  }
}
function Xe(o) {
  let a, e;
  return (
    (a = new Le({ props: { viewGameweekDetail: o[2] } })),
    {
      c() {
        Oa(a.$$.fragment);
      },
      l(s) {
        ya(a.$$.fragment, s);
      },
      m(s, i) {
        La(a, s, i), (e = !0);
      },
      p: ga,
      i(s) {
        e || (na(a.$$.fragment, s), (e = !0));
      },
      o(s) {
        la(a.$$.fragment, s), (e = !1);
      },
      d(s) {
        wa(a, s);
      },
    }
  );
}
function Qe(o) {
  let a, e;
  return (
    (a = new Ye({})),
    {
      c() {
        Oa(a.$$.fragment);
      },
      l(s) {
        ya(a.$$.fragment, s);
      },
      m(s, i) {
        La(a, s, i), (e = !0);
      },
      p: ga,
      i(s) {
        e || (na(a.$$.fragment, s), (e = !0));
      },
      o(s) {
        la(a.$$.fragment, s), (e = !1);
      },
      d(s) {
        wa(a, s);
      },
    }
  );
}
function Ze(o) {
  let a, e, s, i, p, I, c, t, f, g, S, D, b, E, N, T, R, x, M, W;
  const U = [Qe, Xe],
    L = [];
  function F(O, y) {
    return O[0] === "details" ? 0 : O[0] === "gameweeks" ? 1 : -1;
  }
  return (
    ~(T = F(o)) && (R = L[T] = U[T](o)),
    {
      c() {
        (a = m("div")),
          (e = m("div")),
          (s = m("ul")),
          (i = m("li")),
          (p = m("button")),
          (I = j("Details")),
          (f = C()),
          (g = m("li")),
          (S = m("button")),
          (D = j("Gameweeks")),
          (N = C()),
          R && R.c(),
          this.h();
      },
      l(O) {
        a = _(O, "DIV", { class: !0 });
        var y = d(a);
        e = _(y, "DIV", { class: !0 });
        var q = d(e);
        s = _(q, "UL", { class: !0 });
        var G = d(s);
        i = _(G, "LI", { class: !0 });
        var K = d(i);
        p = _(K, "BUTTON", { class: !0 });
        var u = d(p);
        (I = k(u, "Details")),
          u.forEach(l),
          K.forEach(l),
          (f = P(G)),
          (g = _(G, "LI", { class: !0 }));
        var v = d(g);
        S = _(v, "BUTTON", { class: !0 });
        var z = d(S);
        (D = k(z, "Gameweeks")),
          z.forEach(l),
          v.forEach(l),
          G.forEach(l),
          (N = P(q)),
          R && R.l(q),
          q.forEach(l),
          y.forEach(l),
          this.h();
      },
      h() {
        r(
          p,
          "class",
          (c = `p-2 ${o[0] === "details" ? "text-white" : "text-gray-400"}`)
        ),
          r(
            i,
            "class",
            (t = `mr-4 text-xs md:text-base ${
              o[0] === "details" ? "active-tab" : ""
            }`)
          ),
          r(
            S,
            "class",
            (b = `p-2 ${o[0] === "gameweeks" ? "text-white" : "text-gray-400"}`)
          ),
          r(
            g,
            "class",
            (E = `mr-4 text-xs md:text-base ${
              o[0] === "gameweeks" ? "active-tab" : ""
            }`)
          ),
          r(s, "class", "flex rounded-t-lg bg-light-gray px-4 pt-2"),
          r(e, "class", "bg-panel rounded-lg m-4"),
          r(a, "class", "m-4");
      },
      m(O, y) {
        ma(O, a, y),
          n(a, e),
          n(e, s),
          n(s, i),
          n(i, p),
          n(p, I),
          n(s, f),
          n(s, g),
          n(g, S),
          n(S, D),
          n(e, N),
          ~T && L[T].m(e, null),
          (x = !0),
          M || ((W = [Y(p, "click", o[3]), Y(S, "click", o[4])]), (M = !0));
      },
      p(O, y) {
        (!x ||
          (y & 1 &&
            c !==
              (c = `p-2 ${
                O[0] === "details" ? "text-white" : "text-gray-400"
              }`))) &&
          r(p, "class", c),
          (!x ||
            (y & 1 &&
              t !==
                (t = `mr-4 text-xs md:text-base ${
                  O[0] === "details" ? "active-tab" : ""
                }`))) &&
            r(i, "class", t),
          (!x ||
            (y & 1 &&
              b !==
                (b = `p-2 ${
                  O[0] === "gameweeks" ? "text-white" : "text-gray-400"
                }`))) &&
            r(S, "class", b),
          (!x ||
            (y & 1 &&
              E !==
                (E = `mr-4 text-xs md:text-base ${
                  O[0] === "gameweeks" ? "active-tab" : ""
                }`))) &&
            r(g, "class", E);
        let q = T;
        (T = F(O)),
          T === q
            ? ~T && L[T].p(O, y)
            : (R &&
                (ie(),
                la(L[q], 1, 1, () => {
                  L[q] = null;
                }),
                le()),
              ~T
                ? ((R = L[T]),
                  R ? R.p(O, y) : ((R = L[T] = U[T](O)), R.c()),
                  na(R, 1),
                  R.m(e, null))
                : (R = null));
      },
      i(O) {
        x || (na(R), (x = !0));
      },
      o(O) {
        la(R), (x = !1);
      },
      d(O) {
        O && l(a), ~T && L[T].d(), (M = !1), se(W);
      },
    }
  );
}
function Je(o) {
  let a, e;
  return (
    (a = new Re({
      props: { $$slots: { default: [Ze] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        Oa(a.$$.fragment);
      },
      l(s) {
        ya(a.$$.fragment, s);
      },
      m(s, i) {
        La(a, s, i), (e = !0);
      },
      p(s, [i]) {
        const p = {};
        i & 33 && (p.$$scope = { dirty: i, ctx: s }), a.$set(p);
      },
      i(s) {
        e || (na(a.$$.fragment, s), (e = !0));
      },
      o(s) {
        la(a.$$.fragment, s), (e = !1);
      },
      d(s) {
        wa(a, s);
      },
    }
  );
}
function $e(o, a, e) {
  let s = "details";
  re(async () => {
    Oe.set(!1);
  });
  function i(t) {
    e(0, (s = t));
  }
  function p(t, f) {
    ye(`/manager?id=${t}&gw=${f}`);
  }
  return [s, i, p, () => i("details"), () => i("gameweeks")];
}
class is extends Ka {
  constructor(a) {
    super(), Ha(this, a, $e, Je, Ba, {});
  }
}
export { is as component };
