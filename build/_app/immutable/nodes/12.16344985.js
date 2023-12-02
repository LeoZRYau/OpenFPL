import {
  $ as yt,
  A as Fe,
  a as T,
  a0 as Oe,
  a1 as et,
  a2 as tt,
  B as Be,
  b as ce,
  c as M,
  d as oe,
  e as Se,
  f as st,
  G as a,
  g as se,
  h as i,
  H as we,
  i as Re,
  I as We,
  J as kt,
  k as c,
  K as dt,
  L as Q,
  l as u,
  M as Et,
  m as f,
  N as $e,
  n as r,
  o as lt,
  O as wt,
  P as It,
  p as Ve,
  q as O,
  Q as Ze,
  R as gt,
  r as S,
  s as je,
  S as qe,
  T as bt,
  U as ct,
  u as Qe,
  v as at,
  V as ut,
  w as Tt,
  y as Le,
  z as Ne,
} from "../chunks/index.a8c54947.js";
import {
  c as Pt,
  d as Ut,
  j as Dt,
  l as He,
  L as Mt,
  q as fe,
  t as Ie,
} from "../chunks/Layout.3f9368f3.js";
import { M as Ct } from "../chunks/manager-gameweeks.c1460105.js";
import { w as Ye } from "../chunks/singletons.e655d5e5.js";
import { s as ft, t as Xe } from "../chunks/team-store.583260fe.js";
function Vt(s) {
  let e, t, l, o, d, h;
  return {
    c() {
      (e = et("svg")), (t = et("path")), (l = et("path")), this.h();
    },
    l(m) {
      e = tt(m, "svg", {
        xmlns: !0,
        "aria-hidden": !0,
        class: !0,
        fill: !0,
        viewBox: !0,
        style: !0,
      });
      var n = f(e);
      (t = tt(n, "path", { d: !0 })),
        f(t).forEach(i),
        (l = tt(n, "path", { d: !0 })),
        f(l).forEach(i),
        n.forEach(i),
        this.h();
    },
    h() {
      r(
        t,
        "d",
        "M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"
      ),
        r(
          l,
          "d",
          "M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-9zM2 2.5A1.5 1.5 0 0 1 3.5 1h9A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5v-10zm9.5 3A1.5 1.5 0 0 1 13 7h1.5V3.5a1.5 1.5 0 0 0-1.5-1.5H9V4a1.5 1.5 0 0 1 1.5 1.5v1zm0 1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1z"
        ),
        r(e, "xmlns", "http://www.w3.org/2000/svg"),
        r(e, "aria-hidden", "true"),
        r(e, "class", (o = ct(s[0]) + " svelte-1qbujws")),
        r(e, "fill", "currentColor"),
        r(e, "viewBox", "0 0 16 16"),
        Ve(e, "--hover-color", s[3]),
        Ve(e, "cursor", "'pointer'");
    },
    m(m, n) {
      ce(m, e, n), a(e, t), a(e, l), d || ((h = Q(e, "click", s[4])), (d = !0));
    },
    p(m, [n]) {
      n & 1 && o !== (o = ct(m[0]) + " svelte-1qbujws") && r(e, "class", o),
        n & 8 && Ve(e, "--hover-color", m[3]);
    },
    i: we,
    o: we,
    d(m) {
      m && i(e), (d = !1), h();
    },
  };
}
function Lt(s, e, t) {
  let { className: l = "" } = e,
    { principalId: o = "" } = e,
    { onClick: d } = e,
    { hoverColor: h = "red" } = e;
  const m = () => d(o);
  return (
    (s.$$set = (n) => {
      "className" in n && t(0, (l = n.className)),
        "principalId" in n && t(1, (o = n.principalId)),
        "onClick" in n && t(2, (d = n.onClick)),
        "hoverColor" in n && t(3, (h = n.hoverColor));
    }),
    [l, o, d, h, m]
  );
}
class Nt extends qe {
  constructor(e) {
    super(),
      Re(this, e, Lt, Vt, je, {
        className: 0,
        principalId: 1,
        onClick: 2,
        hoverColor: 3,
      });
  }
}
function mt(s) {
  let e, t, l, o, d, h, m, n, _, y, g, E, b, w, v, k, P, H, z;
  return {
    c() {
      (e = c("div")),
        (t = c("div")),
        (l = c("div")),
        (o = c("h3")),
        (d = O("Update Display Name")),
        (h = T()),
        (m = c("form")),
        (n = c("div")),
        (_ = c("input")),
        (y = T()),
        (g = c("div")),
        (E = c("button")),
        (b = O("Cancel")),
        (w = T()),
        (v = c("button")),
        (k = O("Update")),
        this.h();
    },
    l(N) {
      e = u(N, "DIV", { class: !0 });
      var q = f(e);
      t = u(q, "DIV", { class: !0 });
      var C = f(t);
      l = u(C, "DIV", { class: !0 });
      var F = f(l);
      o = u(F, "H3", { class: !0 });
      var U = f(o);
      (d = S(U, "Update Display Name")),
        U.forEach(i),
        (h = M(F)),
        (m = u(F, "FORM", {}));
      var D = f(m);
      n = u(D, "DIV", { class: !0 });
      var A = f(n);
      (_ = u(A, "INPUT", { type: !0, class: !0, placeholder: !0 })),
        A.forEach(i),
        (y = M(D)),
        (g = u(D, "DIV", { class: !0 }));
      var R = f(g);
      E = u(R, "BUTTON", { class: !0 });
      var j = f(E);
      (b = S(j, "Cancel")),
        j.forEach(i),
        (w = M(R)),
        (v = u(R, "BUTTON", { class: !0, type: !0 }));
      var V = f(v);
      (k = S(V, "Update")),
        V.forEach(i),
        R.forEach(i),
        D.forEach(i),
        F.forEach(i),
        C.forEach(i),
        q.forEach(i),
        this.h();
    },
    h() {
      r(o, "class", "text-lg leading-6 font-medium mb-2"),
        r(_, "type", "text"),
        r(
          _,
          "class",
          "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        ),
        r(_, "placeholder", "New Username"),
        r(n, "class", "mt-4"),
        r(
          E,
          "class",
          "px-4 py-2 fpl-cancel-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        r(
          v,
          "class",
          (P = `px-4 py-2 ${
            s[3] ? "bg-gray-500" : "fpl-purple-btn"
          } text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`)
        ),
        r(v, "type", "submit"),
        (v.disabled = s[3]),
        r(g, "class", "items-center py-3 flex space-x-4"),
        r(l, "class", "mt-3 text-center"),
        r(
          t,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"
        ),
        r(
          e,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop"
        );
    },
    m(N, q) {
      ce(N, e, q),
        a(e, t),
        a(t, l),
        a(l, o),
        a(o, d),
        a(l, h),
        a(l, m),
        a(m, n),
        a(n, _),
        ut(_, s[0]),
        a(m, y),
        a(m, g),
        a(g, E),
        a(E, b),
        a(g, w),
        a(g, v),
        a(v, k),
        H ||
          ((z = [
            Q(_, "input", s[9]),
            Q(E, "click", function () {
              Ze(s[2]) && s[2].apply(this, arguments);
            }),
            Q(m, "submit", yt(s[4])),
            Q(t, "click", gt(s[8])),
            Q(t, "keydown", s[5]),
            Q(e, "click", function () {
              Ze(s[2]) && s[2].apply(this, arguments);
            }),
            Q(e, "keydown", s[5]),
          ]),
          (H = !0));
    },
    p(N, q) {
      (s = N),
        q & 1 && _.value !== s[0] && ut(_, s[0]),
        q & 8 &&
          P !==
            (P = `px-4 py-2 ${
              s[3] ? "bg-gray-500" : "fpl-purple-btn"
            } text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`) &&
          r(v, "class", P),
        q & 8 && (v.disabled = s[3]);
    },
    d(N) {
      N && i(e), (H = !1), $e(z);
    },
  };
}
function Ft(s) {
  let e,
    t = s[1] && mt(s);
  return {
    c() {
      t && t.c(), (e = Se());
    },
    l(l) {
      t && t.l(l), (e = Se());
    },
    m(l, o) {
      t && t.m(l, o), ce(l, e, o);
    },
    p(l, [o]) {
      l[1]
        ? t
          ? t.p(l, o)
          : ((t = mt(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: we,
    o: we,
    d(l) {
      t && t.d(l), l && i(e);
    },
  };
}
function Bt(s) {
  return s.length < 3 || s.length > 20 ? !1 : /^[a-zA-Z0-9 ]+$/.test(s);
}
function Ot(s, e, t) {
  let l,
    { showModal: o } = e,
    { closeModal: d } = e,
    { cancelModal: h } = e,
    { newUsername: m = "" } = e,
    { isLoading: n } = e;
  async function _() {
    n.set(!0), He.set("Updating Display Name");
    try {
      await fe.updateUsername(m),
        fe.sync(),
        await d(),
        Ie.show("Display name updated.", "success");
    } catch (b) {
      Ie.show("Error updating username.", "error"),
        console.error("Error updating username:", b),
        h();
    } finally {
      n.set(!1), He.set("Loading");
    }
  }
  function y(b) {
    !(b.target instanceof HTMLInputElement) && b.key === "Escape" && d();
  }
  function g(b) {
    bt.call(this, s, b);
  }
  function E() {
    (m = this.value), t(0, m);
  }
  return (
    (s.$$set = (b) => {
      "showModal" in b && t(1, (o = b.showModal)),
        "closeModal" in b && t(6, (d = b.closeModal)),
        "cancelModal" in b && t(2, (h = b.cancelModal)),
        "newUsername" in b && t(0, (m = b.newUsername)),
        "isLoading" in b && t(7, (n = b.isLoading));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 1 && t(3, (l = !Bt(m)));
    }),
    [m, o, h, l, _, y, d, n, g, E]
  );
}
class St extends qe {
  constructor(e) {
    super(),
      Re(this, e, Ot, Ft, je, {
        showModal: 1,
        closeModal: 6,
        cancelModal: 2,
        newUsername: 0,
        isLoading: 7,
      });
  }
}
function pt(s, e, t) {
  const l = s.slice();
  return (l[12] = e[t]), l;
}
function ht(s) {
  let e,
    t,
    l,
    o,
    d,
    h,
    m,
    n,
    _,
    y,
    g,
    E,
    b,
    w,
    v,
    k,
    P,
    H,
    z,
    N,
    q,
    C,
    F,
    U,
    D,
    A,
    R,
    j = s[4],
    V = [];
  for (let B = 0; B < j.length; B += 1) V[B] = vt(pt(s, j, B));
  return {
    c() {
      (e = c("div")),
        (t = c("div")),
        (l = c("div")),
        (o = c("h3")),
        (d = O("Update Favourite Team")),
        (h = T()),
        (m = c("div")),
        (n = c("select")),
        (_ = c("option")),
        (y = O("Select Team"));
      for (let B = 0; B < V.length; B += 1) V[B].c();
      (g = T()),
        (E = c("div")),
        (b = c("p")),
        (w = O("Warning")),
        (v = T()),
        (k = c("p")),
        (P = O("You can only set your favourite team once per season.")),
        (H = T()),
        (z = c("div")),
        (N = c("button")),
        (q = O("Cancel")),
        (C = T()),
        (F = c("button")),
        (U = O("Update")),
        this.h();
    },
    l(B) {
      e = u(B, "DIV", { class: !0 });
      var G = f(e);
      t = u(G, "DIV", { class: !0 });
      var p = f(t);
      l = u(p, "DIV", { class: !0 });
      var L = f(l);
      o = u(L, "H3", { class: !0 });
      var Z = f(o);
      (d = S(Z, "Update Favourite Team")),
        Z.forEach(i),
        (h = M(L)),
        (m = u(L, "DIV", { class: !0 }));
      var ne = f(m);
      n = u(ne, "SELECT", { class: !0 });
      var ue = f(n);
      _ = u(ue, "OPTION", {});
      var te = f(_);
      (y = S(te, "Select Team")), te.forEach(i);
      for (let W = 0; W < V.length; W += 1) V[W].l(ue);
      ue.forEach(i),
        ne.forEach(i),
        L.forEach(i),
        (g = M(p)),
        (E = u(p, "DIV", { class: !0, role: !0 }));
      var X = f(E);
      b = u(X, "P", { class: !0 });
      var me = f(b);
      (w = S(me, "Warning")),
        me.forEach(i),
        (v = M(X)),
        (k = u(X, "P", { class: !0 }));
      var pe = f(k);
      (P = S(pe, "You can only set your favourite team once per season.")),
        pe.forEach(i),
        X.forEach(i),
        (H = M(p)),
        (z = u(p, "DIV", { class: !0 }));
      var ee = f(z);
      N = u(ee, "BUTTON", { class: !0 });
      var he = f(N);
      (q = S(he, "Cancel")),
        he.forEach(i),
        (C = M(ee)),
        (F = u(ee, "BUTTON", { class: !0 }));
      var ve = f(F);
      (U = S(ve, "Update")),
        ve.forEach(i),
        ee.forEach(i),
        p.forEach(i),
        G.forEach(i),
        this.h();
    },
    h() {
      r(o, "class", "text-lg leading-6 font-medium mb-2"),
        (_.__value = 0),
        (_.value = _.__value),
        r(n, "class", "w-full p-2 rounded-md fpl-dropdown"),
        s[0] === void 0 && kt(() => s[10].call(n)),
        r(m, "class", "w-full border border-gray-500 mt-4 mb-2"),
        r(l, "class", "mt-3 text-center"),
        r(b, "class", "font-bold text-sm"),
        r(k, "class", "font-bold text-xs"),
        r(
          E,
          "class",
          "bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-1 mt-4"
        ),
        r(E, "role", "alert"),
        r(
          N,
          "class",
          "px-4 py-2 fpl-cancel-btn text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        ),
        r(
          F,
          "class",
          (D = `px-4 py-2 ${s[3] ? "bg-gray-500" : "fpl-purple-btn"} 
          text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`)
        ),
        (F.disabled = s[3]),
        r(z, "class", "items-center py-3 flex space-x-4"),
        r(
          t,
          "class",
          "relative top-20 mx-auto p-5 border border-gray-700 w-96 shadow-lg rounded-md bg-panel text-white"
        ),
        r(
          e,
          "class",
          "fixed inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full modal-backdrop"
        );
    },
    m(B, G) {
      ce(B, e, G),
        a(e, t),
        a(t, l),
        a(l, o),
        a(o, d),
        a(l, h),
        a(l, m),
        a(m, n),
        a(n, _),
        a(_, y);
      for (let p = 0; p < V.length; p += 1) V[p] && V[p].m(n, null);
      dt(n, s[0], !0),
        a(t, g),
        a(t, E),
        a(E, b),
        a(b, w),
        a(E, v),
        a(E, k),
        a(k, P),
        a(t, H),
        a(t, z),
        a(z, N),
        a(N, q),
        a(z, C),
        a(z, F),
        a(F, U),
        A ||
          ((R = [
            Q(n, "change", s[10]),
            Q(N, "click", function () {
              Ze(s[2]) && s[2].apply(this, arguments);
            }),
            Q(F, "click", s[5]),
            Q(t, "click", gt(s[9])),
            Q(t, "keydown", s[6]),
            Q(e, "click", function () {
              Ze(s[2]) && s[2].apply(this, arguments);
            }),
            Q(e, "keydown", s[6]),
          ]),
          (A = !0));
    },
    p(B, G) {
      if (((s = B), G & 16)) {
        j = s[4];
        let p;
        for (p = 0; p < j.length; p += 1) {
          const L = pt(s, j, p);
          V[p] ? V[p].p(L, G) : ((V[p] = vt(L)), V[p].c(), V[p].m(n, null));
        }
        for (; p < V.length; p += 1) V[p].d(1);
        V.length = j.length;
      }
      G & 17 && dt(n, s[0]),
        G & 8 &&
          D !==
            (D = `px-4 py-2 ${s[3] ? "bg-gray-500" : "fpl-purple-btn"} 
          text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300`) &&
          r(F, "class", D),
        G & 8 && (F.disabled = s[3]);
    },
    d(B) {
      B && i(e), Et(V, B), (A = !1), $e(R);
    },
  };
}
function vt(s) {
  let e,
    t = s[12].friendlyName + "",
    l,
    o;
  return {
    c() {
      (e = c("option")), (l = O(t)), this.h();
    },
    l(d) {
      e = u(d, "OPTION", {});
      var h = f(e);
      (l = S(h, t)), h.forEach(i), this.h();
    },
    h() {
      (e.__value = o = s[12].id), (e.value = e.__value);
    },
    m(d, h) {
      ce(d, e, h), a(e, l);
    },
    p(d, h) {
      h & 16 && t !== (t = d[12].friendlyName + "") && Qe(l, t),
        h & 16 &&
          o !== (o = d[12].id) &&
          ((e.__value = o), (e.value = e.__value));
    },
    d(d) {
      d && i(e);
    },
  };
}
function Ht(s) {
  let e,
    t = s[1] && ht(s);
  return {
    c() {
      t && t.c(), (e = Se());
    },
    l(l) {
      t && t.l(l), (e = Se());
    },
    m(l, o) {
      t && t.m(l, o), ce(l, e, o);
    },
    p(l, [o]) {
      l[1]
        ? t
          ? t.p(l, o)
          : ((t = ht(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: we,
    o: we,
    d(l) {
      t && t.d(l), l && i(e);
    },
  };
}
function At(s, e, t) {
  let { showModal: l } = e,
    { closeModal: o } = e,
    { cancelModal: d } = e,
    { newFavouriteTeam: h = 0 } = e,
    { isLoading: m } = e,
    n = !0,
    _,
    y;
  lt(async () => {
    await Xe.sync(),
      (y = Xe.subscribe((v) => {
        t(4, (_ = v));
      }));
  }),
    wt(() => {
      y?.();
    });
  async function g() {
    m.set(!0), He.set("Updating Favourite Club");
    try {
      await fe.updateFavouriteTeam(h),
        fe.sync(),
        await o(),
        Ie.show("Favourite team updated.", "success");
    } catch (v) {
      Ie.show("Error updating favourite team.", "error"),
        console.error("Error updating favourite team:", v),
        d();
    } finally {
      m.set(!1), He.set("Loading");
    }
  }
  function E(v) {
    !(v.target instanceof HTMLInputElement) && v.key === "Escape" && o();
  }
  function b(v) {
    bt.call(this, s, v);
  }
  function w() {
    (h = It(this)), t(0, h), t(4, _);
  }
  return (
    (s.$$set = (v) => {
      "showModal" in v && t(1, (l = v.showModal)),
        "closeModal" in v && t(7, (o = v.closeModal)),
        "cancelModal" in v && t(2, (d = v.cancelModal)),
        "newFavouriteTeam" in v && t(0, (h = v.newFavouriteTeam)),
        "isLoading" in v && t(8, (m = v.isLoading));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 1 && t(3, (n = h <= 0));
    }),
    [h, l, d, n, _, g, E, o, m, b, w]
  );
}
class zt extends qe {
  constructor(e) {
    super(),
      Re(this, e, At, Ht, je, {
        showModal: 1,
        closeModal: 7,
        cancelModal: 2,
        newFavouriteTeam: 0,
        isLoading: 8,
      });
  }
}
function Gt(s) {
  let e,
    t,
    l,
    o,
    d,
    h,
    m,
    n,
    _,
    y,
    g,
    E,
    b,
    w,
    v,
    k,
    P,
    H,
    z,
    N,
    q,
    C,
    F,
    U,
    D,
    A,
    R,
    j,
    V,
    B,
    G,
    p,
    L,
    Z,
    ne,
    ue,
    te,
    X,
    me,
    pe,
    ee,
    he,
    ve,
    W,
    ae,
    ye,
    ke,
    ie,
    le,
    re,
    Te,
    Ee,
    Y,
    $;
  (e = new St({
    props: {
      newUsername: s[0] ? s[0].displayName : "",
      showModal: s[1],
      closeModal: s[13],
      cancelModal: s[14],
      isLoading: s[11],
    },
  })),
    (l = new zt({
      props: {
        newFavouriteTeam: s[0] ? s[0].favouriteTeamId : 0,
        showModal: s[2],
        closeModal: s[16],
        cancelModal: s[17],
        isLoading: s[11],
      },
    }));
  let x = s[0] && _t(s);
  return {
    c() {
      Le(e.$$.fragment),
        (t = T()),
        Le(l.$$.fragment),
        (o = T()),
        (d = c("div")),
        x && x.c(),
        (h = T()),
        (m = c("div")),
        (n = c("div")),
        (_ = c("div")),
        (y = c("div")),
        (g = c("div")),
        (E = c("img")),
        (w = T()),
        (v = c("div")),
        (k = c("p")),
        (P = O("ICP")),
        (H = T()),
        (z = c("p")),
        (N = O("0.00 ICP")),
        (q = T()),
        (C = c("div")),
        (F = c("img")),
        (D = T()),
        (A = c("div")),
        (R = c("p")),
        (j = O("FPL")),
        (V = T()),
        (B = c("p")),
        (G = O("0.00 FPL")),
        (p = T()),
        (L = c("div")),
        (Z = c("img")),
        (ue = T()),
        (te = c("div")),
        (X = c("p")),
        (me = O("ckBTC")),
        (pe = T()),
        (ee = c("p")),
        (he = O("0.00 ckBTC")),
        (ve = T()),
        (W = c("div")),
        (ae = c("img")),
        (ke = T()),
        (ie = c("div")),
        (le = c("p")),
        (re = O("ckETH")),
        (Te = T()),
        (Ee = c("p")),
        (Y = O("0.00 ckETH")),
        this.h();
    },
    l(I) {
      Ne(e.$$.fragment, I),
        (t = M(I)),
        Ne(l.$$.fragment, I),
        (o = M(I)),
        (d = u(I, "DIV", { class: !0 }));
      var J = f(d);
      x && x.l(J), (h = M(J)), (m = u(J, "DIV", { class: !0 }));
      var _e = f(m);
      n = u(_e, "DIV", { class: !0 });
      var ge = f(n);
      _ = u(ge, "DIV", { class: !0 });
      var K = f(_);
      y = u(K, "DIV", { class: !0 });
      var de = f(y);
      g = u(de, "DIV", { class: !0 });
      var Me = f(g);
      (E = u(Me, "IMG", { src: !0, alt: !0, class: !0 })),
        (w = M(Me)),
        (v = u(Me, "DIV", { class: !0 }));
      var Pe = f(v);
      k = u(Pe, "P", { class: !0 });
      var Ae = f(k);
      (P = S(Ae, "ICP")), Ae.forEach(i), (H = M(Pe)), (z = u(Pe, "P", {}));
      var ze = f(z);
      (N = S(ze, "0.00 ICP")),
        ze.forEach(i),
        Pe.forEach(i),
        Me.forEach(i),
        (q = M(de)),
        (C = u(de, "DIV", { class: !0 }));
      var Ue = f(C);
      (F = u(Ue, "IMG", { src: !0, alt: !0, class: !0 })),
        (D = M(Ue)),
        (A = u(Ue, "DIV", { class: !0 }));
      var De = f(A);
      R = u(De, "P", { class: !0 });
      var Ge = f(R);
      (j = S(Ge, "FPL")), Ge.forEach(i), (V = M(De)), (B = u(De, "P", {}));
      var xe = f(B);
      (G = S(xe, "0.00 FPL")),
        xe.forEach(i),
        De.forEach(i),
        Ue.forEach(i),
        (p = M(de)),
        (L = u(de, "DIV", { class: !0 }));
      var be = f(L);
      (Z = u(be, "IMG", { src: !0, alt: !0, class: !0 })),
        (ue = M(be)),
        (te = u(be, "DIV", { class: !0 }));
      var Ce = f(te);
      X = u(Ce, "P", { class: !0 });
      var rt = f(X);
      (me = S(rt, "ckBTC")), rt.forEach(i), (pe = M(Ce)), (ee = u(Ce, "P", {}));
      var ot = f(ee);
      (he = S(ot, "0.00 ckBTC")),
        ot.forEach(i),
        Ce.forEach(i),
        be.forEach(i),
        (ve = M(de)),
        (W = u(de, "DIV", { class: !0 }));
      var Ke = f(W);
      (ae = u(Ke, "IMG", { src: !0, alt: !0, class: !0 })),
        (ke = M(Ke)),
        (ie = u(Ke, "DIV", { class: !0 }));
      var Je = f(ie);
      le = u(Je, "P", { class: !0 });
      var nt = f(le);
      (re = S(nt, "ckETH")), nt.forEach(i), (Te = M(Je)), (Ee = u(Je, "P", {}));
      var it = f(Ee);
      (Y = S(it, "0.00 ckETH")),
        it.forEach(i),
        Je.forEach(i),
        Ke.forEach(i),
        de.forEach(i),
        K.forEach(i),
        ge.forEach(i),
        _e.forEach(i),
        J.forEach(i),
        this.h();
    },
    h() {
      Oe(E.src, (b = "ICPCoin.png")) || r(E, "src", b),
        r(E, "alt", "ICP"),
        r(E, "class", "h-12 w-12"),
        r(k, "class", "font-bold"),
        r(v, "class", "ml-4"),
        r(
          g,
          "class",
          "flex items-center p-4 rounded-lg shadow-md border border-gray-700"
        ),
        Oe(F.src, (U = "FPLCoin.png")) || r(F, "src", U),
        r(F, "alt", "FPL"),
        r(F, "class", "h-12 w-12"),
        r(R, "class", "font-bold"),
        r(A, "class", "ml-4"),
        r(
          C,
          "class",
          "flex items-center p-4 rounded-lg shadow-md border border-gray-700"
        ),
        Oe(Z.src, (ne = "ckBTCCoin.png")) || r(Z, "src", ne),
        r(Z, "alt", "ICP"),
        r(Z, "class", "h-12 w-12"),
        r(X, "class", "font-bold"),
        r(te, "class", "ml-4"),
        r(
          L,
          "class",
          "flex items-center p-4 rounded-lg shadow-md border border-gray-700"
        ),
        Oe(ae.src, (ye = "ckETHCoin.png")) || r(ae, "src", ye),
        r(ae, "alt", "ICP"),
        r(ae, "class", "h-12 w-12"),
        r(le, "class", "font-bold"),
        r(ie, "class", "ml-4"),
        r(
          W,
          "class",
          "flex items-center p-4 rounded-lg shadow-md border border-gray-700"
        ),
        r(y, "class", "grid grid-cols-1 md:grid-cols-4 gap-4"),
        r(_, "class", "mt-4 px-2"),
        r(n, "class", "w-full px-2 mb-4"),
        r(m, "class", "flex flex-wrap -mx-2 mt-4"),
        r(d, "class", "container mx-auto p-4");
    },
    m(I, J) {
      Fe(e, I, J),
        ce(I, t, J),
        Fe(l, I, J),
        ce(I, o, J),
        ce(I, d, J),
        x && x.m(d, null),
        a(d, h),
        a(d, m),
        a(m, n),
        a(n, _),
        a(_, y),
        a(y, g),
        a(g, E),
        a(g, w),
        a(g, v),
        a(v, k),
        a(k, P),
        a(v, H),
        a(v, z),
        a(z, N),
        a(y, q),
        a(y, C),
        a(C, F),
        a(C, D),
        a(C, A),
        a(A, R),
        a(R, j),
        a(A, V),
        a(A, B),
        a(B, G),
        a(y, p),
        a(y, L),
        a(L, Z),
        a(L, ue),
        a(L, te),
        a(te, X),
        a(X, me),
        a(te, pe),
        a(te, ee),
        a(ee, he),
        a(y, ve),
        a(y, W),
        a(W, ae),
        a(W, ke),
        a(W, ie),
        a(ie, le),
        a(le, re),
        a(ie, Te),
        a(ie, Ee),
        a(Ee, Y),
        ($ = !0);
    },
    p(I, J) {
      const _e = {};
      J & 1 && (_e.newUsername = I[0] ? I[0].displayName : ""),
        J & 2 && (_e.showModal = I[1]),
        e.$set(_e);
      const ge = {};
      J & 1 && (ge.newFavouriteTeam = I[0] ? I[0].favouriteTeamId : 0),
        J & 4 && (ge.showModal = I[2]),
        l.$set(ge),
        I[0]
          ? x
            ? (x.p(I, J), J & 1 && se(x, 1))
            : ((x = _t(I)), x.c(), se(x, 1), x.m(d, h))
          : x &&
            (at(),
            oe(x, 1, 1, () => {
              x = null;
            }),
            st());
    },
    i(I) {
      $ || (se(e.$$.fragment, I), se(l.$$.fragment, I), se(x), ($ = !0));
    },
    o(I) {
      oe(e.$$.fragment, I), oe(l.$$.fragment, I), oe(x), ($ = !1);
    },
    d(I) {
      Be(e, I), I && i(t), Be(l, I), I && i(o), I && i(d), x && x.d();
    },
  };
}
function xt(s) {
  let e, t;
  return (
    (e = new Mt({})),
    {
      c() {
        Le(e.$$.fragment);
      },
      l(l) {
        Ne(e.$$.fragment, l);
      },
      m(l, o) {
        Fe(e, l, o), (t = !0);
      },
      p: we,
      i(l) {
        t || (se(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        oe(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        Be(e, l);
      },
    }
  );
}
function _t(s) {
  let e,
    t,
    l,
    o,
    d,
    h,
    m,
    n,
    _,
    y,
    g,
    E,
    b,
    w,
    v,
    k,
    P,
    H,
    z = s[0]?.displayName + "",
    N,
    q,
    C,
    F,
    U,
    D,
    A,
    R,
    j,
    V,
    B,
    G,
    p,
    L,
    Z,
    ne,
    ue,
    te,
    X,
    me,
    pe,
    ee,
    he,
    ve,
    W,
    ae,
    ye = s[0]?.principalId + "",
    ke,
    ie,
    le,
    re,
    Te,
    Ee;
  return (
    (le = new Nt({
      props: {
        onClick: s[18],
        principalId: s[0]?.principalId,
        className: "ml-2 w-4 h-4",
      },
    })),
    {
      c() {
        (e = c("div")),
          (t = c("div")),
          (l = c("div")),
          (o = c("img")),
          (h = T()),
          (m = c("div")),
          (n = c("button")),
          (_ = O("Upload Photo")),
          (y = T()),
          (g = c("input")),
          (E = T()),
          (b = c("div")),
          (w = c("div")),
          (v = c("p")),
          (k = O("Display Name:")),
          (P = T()),
          (H = c("h2")),
          (N = O(z)),
          (q = T()),
          (C = c("button")),
          (F = O("Update")),
          (U = T()),
          (D = c("p")),
          (A = O("Favourite Team:")),
          (R = T()),
          (j = c("h2")),
          (V = O(s[6])),
          (B = T()),
          (G = c("button")),
          (p = O("Update")),
          (Z = T()),
          (ne = c("p")),
          (ue = O("Joined:")),
          (te = T()),
          (X = c("h2")),
          (me = O("August 2023")),
          (pe = T()),
          (ee = c("p")),
          (he = O("Principal:")),
          (ve = T()),
          (W = c("div")),
          (ae = c("h2")),
          (ke = O(ye)),
          (ie = T()),
          Le(le.$$.fragment),
          this.h();
      },
      l(Y) {
        e = u(Y, "DIV", { class: !0 });
        var $ = f(e);
        t = u($, "DIV", { class: !0 });
        var x = f(t);
        l = u(x, "DIV", { class: !0 });
        var I = f(l);
        (o = u(I, "IMG", { src: !0, alt: !0, class: !0 })),
          (h = M(I)),
          (m = u(I, "DIV", { class: !0 }));
        var J = f(m);
        n = u(J, "BUTTON", { class: !0 });
        var _e = f(n);
        (_ = S(_e, "Upload Photo")),
          _e.forEach(i),
          (y = M(J)),
          (g = u(J, "INPUT", {
            type: !0,
            id: !0,
            accept: !0,
            style: !0,
            class: !0,
          })),
          J.forEach(i),
          I.forEach(i),
          x.forEach(i),
          (E = M($)),
          (b = u($, "DIV", { class: !0 }));
        var ge = f(b);
        w = u(ge, "DIV", { class: !0 });
        var K = f(w);
        v = u(K, "P", { class: !0 });
        var de = f(v);
        (k = S(de, "Display Name:")),
          de.forEach(i),
          (P = M(K)),
          (H = u(K, "H2", { class: !0 }));
        var Me = f(H);
        (N = S(Me, z)),
          Me.forEach(i),
          (q = M(K)),
          (C = u(K, "BUTTON", { class: !0 }));
        var Pe = f(C);
        (F = S(Pe, "Update")),
          Pe.forEach(i),
          (U = M(K)),
          (D = u(K, "P", { class: !0 }));
        var Ae = f(D);
        (A = S(Ae, "Favourite Team:")),
          Ae.forEach(i),
          (R = M(K)),
          (j = u(K, "H2", { class: !0 }));
        var ze = f(j);
        (V = S(ze, s[6])),
          ze.forEach(i),
          (B = M(K)),
          (G = u(K, "BUTTON", { class: !0 }));
        var Ue = f(G);
        (p = S(Ue, "Update")),
          Ue.forEach(i),
          (Z = M(K)),
          (ne = u(K, "P", { class: !0 }));
        var De = f(ne);
        (ue = S(De, "Joined:")),
          De.forEach(i),
          (te = M(K)),
          (X = u(K, "H2", { class: !0 }));
        var Ge = f(X);
        (me = S(Ge, "August 2023")),
          Ge.forEach(i),
          (pe = M(K)),
          (ee = u(K, "P", { class: !0 }));
        var xe = f(ee);
        (he = S(xe, "Principal:")),
          xe.forEach(i),
          (ve = M(K)),
          (W = u(K, "DIV", { class: !0 }));
        var be = f(W);
        ae = u(be, "H2", { class: !0 });
        var Ce = f(ae);
        (ke = S(Ce, ye)),
          Ce.forEach(i),
          (ie = M(be)),
          Ne(le.$$.fragment, be),
          be.forEach(i),
          K.forEach(i),
          ge.forEach(i),
          $.forEach(i),
          this.h();
      },
      h() {
        Oe(o.src, (d = s[5])) || r(o, "src", d),
          r(o, "alt", "Profile"),
          r(o, "class", "w-100 md:w-80 mb-1 rounded-lg"),
          r(n, "class", "btn-file-upload fpl-button svelte-e6um5o"),
          r(g, "type", "file"),
          r(g, "id", "profile-image"),
          r(g, "accept", "image/*"),
          Ve(g, "opacity", "0"),
          Ve(g, "position", "absolute"),
          Ve(g, "left", "0"),
          Ve(g, "top", "0"),
          r(g, "class", "svelte-e6um5o"),
          r(m, "class", "file-upload-wrapper mt-4 svelte-e6um5o"),
          r(l, "class", "group"),
          r(t, "class", "w-full md:w-auto px-2 ml-4 md:ml-0"),
          r(v, "class", "text-xs mb-2"),
          r(H, "class", "text-2xl font-bold mb-2"),
          r(C, "class", "p-2 px-4 rounded fpl-button"),
          r(D, "class", "text-xs mb-2 mt-4"),
          r(j, "class", "text-2xl font-bold mb-2"),
          r(G, "class", "p-2 px-4 rounded fpl-button"),
          (G.disabled = L = s[4] > 1 && (s[0]?.favouriteTeamId ?? 0) > 0),
          r(ne, "class", "text-xs mb-2 mt-4"),
          r(X, "class", "text-2xl font-bold mb-2"),
          r(ee, "class", "text-xs mb-2 mt-4"),
          r(ae, "class", "text-xs font-bold"),
          r(W, "class", "flex items-center"),
          r(w, "class", "ml-4 p-4 rounded-lg"),
          r(b, "class", "w-full md:w-3/4 px-2 mb-4"),
          r(e, "class", "flex flex-wrap");
      },
      m(Y, $) {
        ce(Y, e, $),
          a(e, t),
          a(t, l),
          a(l, o),
          a(l, h),
          a(l, m),
          a(m, n),
          a(n, _),
          a(m, y),
          a(m, g),
          s[23](g),
          a(e, E),
          a(e, b),
          a(b, w),
          a(w, v),
          a(v, k),
          a(w, P),
          a(w, H),
          a(H, N),
          a(w, q),
          a(w, C),
          a(C, F),
          a(w, U),
          a(w, D),
          a(D, A),
          a(w, R),
          a(w, j),
          a(j, V),
          a(w, B),
          a(w, G),
          a(G, p),
          a(w, Z),
          a(w, ne),
          a(ne, ue),
          a(w, te),
          a(w, X),
          a(X, me),
          a(w, pe),
          a(w, ee),
          a(ee, he),
          a(w, ve),
          a(w, W),
          a(W, ae),
          a(ae, ke),
          a(W, ie),
          Fe(le, W, null),
          (re = !0),
          Te ||
            ((Ee = [
              Q(n, "click", s[19]),
              Q(g, "change", s[20]),
              Q(C, "click", s[12]),
              Q(G, "click", s[15]),
            ]),
            (Te = !0));
      },
      p(Y, $) {
        (!re || ($ & 32 && !Oe(o.src, (d = Y[5])))) && r(o, "src", d),
          (!re || $ & 1) && z !== (z = Y[0]?.displayName + "") && Qe(N, z),
          (!re || $ & 64) && Qe(V, Y[6]),
          (!re ||
            ($ & 17 &&
              L !== (L = Y[4] > 1 && (Y[0]?.favouriteTeamId ?? 0) > 0))) &&
            (G.disabled = L),
          (!re || $ & 1) && ye !== (ye = Y[0]?.principalId + "") && Qe(ke, ye);
        const x = {};
        $ & 1 && (x.principalId = Y[0]?.principalId), le.$set(x);
      },
      i(Y) {
        re || (se(le.$$.fragment, Y), (re = !0));
      },
      o(Y) {
        oe(le.$$.fragment, Y), (re = !1);
      },
      d(Y) {
        Y && i(e), s[23](null), Be(le), (Te = !1), $e(Ee);
      },
    }
  );
}
function qt(s) {
  let e, t, l, o;
  const d = [xt, Gt],
    h = [];
  function m(n, _) {
    return n[7] ? 0 : 1;
  }
  return (
    (e = m(s)),
    (t = h[e] = d[e](s)),
    {
      c() {
        t.c(), (l = Se());
      },
      l(n) {
        t.l(n), (l = Se());
      },
      m(n, _) {
        h[e].m(n, _), ce(n, l, _), (o = !0);
      },
      p(n, [_]) {
        let y = e;
        (e = m(n)),
          e === y
            ? h[e].p(n, _)
            : (at(),
              oe(h[y], 1, 1, () => {
                h[y] = null;
              }),
              st(),
              (t = h[e]),
              t ? t.p(n, _) : ((t = h[e] = d[e](n)), t.c()),
              se(t, 1),
              t.m(l.parentNode, l));
      },
      i(n) {
        o || (se(t), (o = !0));
      },
      o(n) {
        oe(t), (o = !1);
      },
      d(n) {
        h[e].d(n), n && i(l);
      },
    }
  );
}
function Rt(s, e, t) {
  let l,
    o,
    d,
    h,
    m,
    n,
    _ = Ye([]);
  We(s, _, (p) => t(21, (h = p)));
  let y = Ye(null);
  We(s, y, (p) => t(22, (m = p)));
  let g = Ye(null);
  We(s, g, (p) => t(0, (d = p)));
  let E = !1,
    b = !1,
    w,
    v = 1,
    k = Ye(!1);
  We(s, k, (p) => t(7, (n = p)));
  let P, H, z;
  lt(async () => {
    k.set(!0);
    try {
      await Xe.sync(),
        await ft.sync(),
        await fe.sync(),
        (P = Xe.subscribe((p) => {
          _.set(p);
        })),
        (H = ft.subscribe((p) => {
          y.set(p);
        })),
        (z = fe.subscribe((p) => {
          N(p);
        }));
    } catch (p) {
      Ie.show("Error fetching profile detail.", "error"),
        console.error("Error fetching profile detail:", p);
    } finally {
      k.set(!1);
    }
  }),
    wt(() => {
      P?.(), H?.();
    });
  function N(p) {
    p && g.set(p);
  }
  function q() {
    t(1, (E = !0));
  }
  async function C() {
    const p = await fe.getProfile();
    N(p), t(1, (E = !1));
  }
  function F() {
    t(1, (E = !1));
  }
  function U() {
    t(2, (b = !0));
  }
  async function D() {
    const p = await fe.getProfile();
    N(p), t(2, (b = !1));
  }
  function A() {
    t(2, (b = !1));
  }
  function R(p) {
    navigator.clipboard.writeText(p).then(() => {
      Ie.show("Copied!", "success");
    });
  }
  function j() {
    w.click();
  }
  function V(p) {
    const L = p.target;
    if (L.files && L.files[0]) {
      const Z = L.files[0];
      if (Z.size > 1e3 * 1024) {
        alert("File size exceeds 1000KB");
        return;
      }
      B(Z);
    }
  }
  async function B(p) {
    k.set(!0), He.set("Updating Profile Picture");
    try {
      await fe.updateProfilePicture(p), fe.sync();
      const L = await fe.getProfile();
      if ((N(L), L && L.profilePicture && L.profilePicture.length > 0)) {
        const Z = new Blob([new Uint8Array(L.profilePicture)]);
        t(5, (l = URL.createObjectURL(Z)));
      }
      Ie.show("Profile image updated.", "success");
    } catch (L) {
      Ie.show("Error updating profile image", "error"),
        console.error("Error updating profile image", L);
    } finally {
      k.set(!1), He.set("Loading");
    }
  }
  function G(p) {
    Tt[p ? "unshift" : "push"](() => {
      (w = p), t(3, w);
    });
  }
  return (
    (s.$$.update = () => {
      s.$$.dirty & 1 &&
        t(
          5,
          (l =
            d && d?.profilePicture && d?.profilePicture?.length > 0
              ? URL.createObjectURL(
                  new Blob([new Uint8Array(d.profilePicture)])
                )
              : "profile_placeholder.png")
        ),
        s.$$.dirty & 4194304 && t(4, (v = m?.activeGameweek ?? 1)),
        s.$$.dirty & 2097153 &&
          t(
            6,
            (o =
              h.find((p) => p.id == d?.favouriteTeamId)?.friendlyName ??
              "Not Set")
          );
    }),
    [d, E, b, w, v, l, o, n, _, y, g, k, q, C, F, U, D, A, R, j, V, h, m, G]
  );
}
class jt extends qe {
  constructor(e) {
    super(), Re(this, e, Rt, qt, je, {});
  }
}
function Kt(s) {
  let e, t;
  return (
    (e = new Ct({ props: { viewGameweekDetail: s[2] } })),
    {
      c() {
        Le(e.$$.fragment);
      },
      l(l) {
        Ne(e.$$.fragment, l);
      },
      m(l, o) {
        Fe(e, l, o), (t = !0);
      },
      p: we,
      i(l) {
        t || (se(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        oe(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        Be(e, l);
      },
    }
  );
}
function Jt(s) {
  let e, t;
  return (
    (e = new jt({})),
    {
      c() {
        Le(e.$$.fragment);
      },
      l(l) {
        Ne(e.$$.fragment, l);
      },
      m(l, o) {
        Fe(e, l, o), (t = !0);
      },
      p: we,
      i(l) {
        t || (se(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        oe(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        Be(e, l);
      },
    }
  );
}
function Wt(s) {
  let e, t, l, o, d, h, m, n, _, y, g, E, b, w, v, k, P, H, z, N;
  const q = [Jt, Kt],
    C = [];
  function F(U, D) {
    return U[0] === "details" ? 0 : U[0] === "gameweeks" ? 1 : -1;
  }
  return (
    ~(k = F(s)) && (P = C[k] = q[k](s)),
    {
      c() {
        (e = c("div")),
          (t = c("div")),
          (l = c("ul")),
          (o = c("li")),
          (d = c("button")),
          (h = O("Details")),
          (_ = T()),
          (y = c("li")),
          (g = c("button")),
          (E = O("Gameweeks")),
          (v = T()),
          P && P.c(),
          this.h();
      },
      l(U) {
        e = u(U, "DIV", { class: !0 });
        var D = f(e);
        t = u(D, "DIV", { class: !0 });
        var A = f(t);
        l = u(A, "UL", { class: !0 });
        var R = f(l);
        o = u(R, "LI", { class: !0 });
        var j = f(o);
        d = u(j, "BUTTON", { class: !0 });
        var V = f(d);
        (h = S(V, "Details")),
          V.forEach(i),
          j.forEach(i),
          (_ = M(R)),
          (y = u(R, "LI", { class: !0 }));
        var B = f(y);
        g = u(B, "BUTTON", { class: !0 });
        var G = f(g);
        (E = S(G, "Gameweeks")),
          G.forEach(i),
          B.forEach(i),
          R.forEach(i),
          (v = M(A)),
          P && P.l(A),
          A.forEach(i),
          D.forEach(i),
          this.h();
      },
      h() {
        r(
          d,
          "class",
          (m = `p-2 ${s[0] === "details" ? "text-white" : "text-gray-400"}`)
        ),
          r(
            o,
            "class",
            (n = `mr-4 text-xs md:text-base ${
              s[0] === "details" ? "active-tab" : ""
            }`)
          ),
          r(
            g,
            "class",
            (b = `p-2 ${s[0] === "gameweeks" ? "text-white" : "text-gray-400"}`)
          ),
          r(
            y,
            "class",
            (w = `mr-4 text-xs md:text-base ${
              s[0] === "gameweeks" ? "active-tab" : ""
            }`)
          ),
          r(l, "class", "flex rounded-t-lg bg-light-gray px-4 pt-2"),
          r(t, "class", "bg-panel rounded-lg m-4"),
          r(e, "class", "m-4");
      },
      m(U, D) {
        ce(U, e, D),
          a(e, t),
          a(t, l),
          a(l, o),
          a(o, d),
          a(d, h),
          a(l, _),
          a(l, y),
          a(y, g),
          a(g, E),
          a(t, v),
          ~k && C[k].m(t, null),
          (H = !0),
          z || ((N = [Q(d, "click", s[3]), Q(g, "click", s[4])]), (z = !0));
      },
      p(U, D) {
        (!H ||
          (D & 1 &&
            m !==
              (m = `p-2 ${
                U[0] === "details" ? "text-white" : "text-gray-400"
              }`))) &&
          r(d, "class", m),
          (!H ||
            (D & 1 &&
              n !==
                (n = `mr-4 text-xs md:text-base ${
                  U[0] === "details" ? "active-tab" : ""
                }`))) &&
            r(o, "class", n),
          (!H ||
            (D & 1 &&
              b !==
                (b = `p-2 ${
                  U[0] === "gameweeks" ? "text-white" : "text-gray-400"
                }`))) &&
            r(g, "class", b),
          (!H ||
            (D & 1 &&
              w !==
                (w = `mr-4 text-xs md:text-base ${
                  U[0] === "gameweeks" ? "active-tab" : ""
                }`))) &&
            r(y, "class", w);
        let A = k;
        (k = F(U)),
          k === A
            ? ~k && C[k].p(U, D)
            : (P &&
                (at(),
                oe(C[A], 1, 1, () => {
                  C[A] = null;
                }),
                st()),
              ~k
                ? ((P = C[k]),
                  P ? P.p(U, D) : ((P = C[k] = q[k](U)), P.c()),
                  se(P, 1),
                  P.m(t, null))
                : (P = null));
      },
      i(U) {
        H || (se(P), (H = !0));
      },
      o(U) {
        oe(P), (H = !1);
      },
      d(U) {
        U && i(e), ~k && C[k].d(), (z = !1), $e(N);
      },
    }
  );
}
function Yt(s) {
  let e, t;
  return (
    (e = new Pt({
      props: { $$slots: { default: [Wt] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        Le(e.$$.fragment);
      },
      l(l) {
        Ne(e.$$.fragment, l);
      },
      m(l, o) {
        Fe(e, l, o), (t = !0);
      },
      p(l, [o]) {
        const d = {};
        o & 33 && (d.$$scope = { dirty: o, ctx: l }), e.$set(d);
      },
      i(l) {
        t || (se(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        oe(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        Be(e, l);
      },
    }
  );
}
function Qt(s, e, t) {
  let l = "details";
  lt(async () => {
    Ut.set(!1);
  });
  function o(n) {
    t(0, (l = n));
  }
  function d(n, _) {
    Dt(`/manager?id=${n}&gw=${_}`);
  }
  return [l, o, d, () => o("details"), () => o("gameweeks")];
}
class ll extends qe {
  constructor(e) {
    super(), Re(this, e, Qt, Yt, je, {});
  }
}
export { ll as component };
