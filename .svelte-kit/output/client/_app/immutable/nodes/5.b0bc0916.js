import { g as Se } from "../chunks/governance-store.d0bbcce4.js";
import {
  a as $,
  b as Q,
  c as P,
  e as de,
  G as t,
  h as l,
  H as x,
  i as pe,
  k as n,
  l as c,
  m as d,
  n as m,
  O as Ee,
  o as ye,
  q as D,
  r as I,
  s as be,
  S as me,
  u as Y,
  Z as ge,
  _ as Te,
} from "../chunks/index.c7b38e5e.js";
import { p as fe } from "../chunks/player-store.1ed81bd6.js";
import { s as he } from "../chunks/system-store.28344883.js";
import { t as ue } from "../chunks/team-store.90511bc6.js";
import { t as ke } from "../chunks/toast-store.58fa49f6.js";
function ve(S, e, a) {
  const s = S.slice();
  return (s[12] = e[a]), (s[14] = a), s;
}
function we(S) {
  let e,
    a,
    s,
    r,
    o,
    i,
    h,
    f = `Season ${S[2]}`,
    p,
    A,
    E = `Gameweek ${S[1]}`,
    g,
    H,
    v,
    T,
    k,
    b,
    L,
    M,
    F,
    w,
    _,
    q,
    B,
    R,
    j,
    G,
    U,
    W,
    O,
    V = [],
    ee = new Map(),
    Z = S[0];
  const te = (u) => u[12].id;
  for (let u = 0; u < Z.length; u += 1) {
    let y = ve(S, Z, u),
      N = te(y);
    ee.set(N, (V[u] = _e(N, y)));
  }
  return {
    c() {
      (e = n("div")),
        (a = n("div")),
        (s = n("p")),
        (r = D(
          "This view will be removed after the SNS decentralisation sale"
        )),
        (o = $()),
        (i = n("div")),
        (h = n("div")),
        (p = D(f)),
        (A = D(" - ")),
        (g = D(E)),
        (H = $()),
        (v = n("div")),
        (T = n("table")),
        (k = n("thead")),
        (b = n("tr")),
        (L = n("th")),
        (M = D("#")),
        (F = $()),
        (w = n("th")),
        (_ = D("Match")),
        (q = $()),
        (B = n("th")),
        (R = D("Status")),
        (j = $()),
        (G = n("th")),
        (U = D("Action")),
        (W = $()),
        (O = n("tbody"));
      for (let u = 0; u < V.length; u += 1) V[u].c();
      this.h();
    },
    l(u) {
      e = c(u, "DIV", { class: !0 });
      var y = d(e);
      a = c(y, "DIV", { class: !0 });
      var N = d(a);
      s = c(N, "P", {});
      var ae = d(s);
      (r = I(
        ae,
        "This view will be removed after the SNS decentralisation sale"
      )),
        ae.forEach(l),
        N.forEach(l),
        (o = P(y)),
        (i = c(y, "DIV", { class: !0 }));
      var z = d(i);
      h = c(z, "DIV", { class: !0 });
      var J = d(h);
      (p = I(J, f)),
        (A = I(J, " - ")),
        (g = I(J, E)),
        J.forEach(l),
        (H = P(z)),
        (v = c(z, "DIV", { class: !0 }));
      var se = d(v);
      T = c(se, "TABLE", { class: !0 });
      var K = d(T);
      k = c(K, "THEAD", { class: !0 });
      var re = d(k);
      b = c(re, "TR", {});
      var C = d(b);
      L = c(C, "TH", { scope: !0 });
      var le = d(L);
      (M = I(le, "#")),
        le.forEach(l),
        (F = P(C)),
        (w = c(C, "TH", { scope: !0 }));
      var oe = d(w);
      (_ = I(oe, "Match")),
        oe.forEach(l),
        (q = P(C)),
        (B = c(C, "TH", { scope: !0 }));
      var ie = d(B);
      (R = I(ie, "Status")),
        ie.forEach(l),
        (j = P(C)),
        (G = c(C, "TH", { scope: !0 }));
      var ne = d(G);
      (U = I(ne, "Action")),
        ne.forEach(l),
        C.forEach(l),
        re.forEach(l),
        (W = P(K)),
        (O = c(K, "TBODY", { class: !0 }));
      var ce = d(O);
      for (let X = 0; X < V.length; X += 1) V[X].l(ce);
      ce.forEach(l),
        K.forEach(l),
        se.forEach(l),
        z.forEach(l),
        y.forEach(l),
        this.h();
    },
    h() {
      m(a, "class", "card mb-3 p-4"),
        m(h, "class", "card-header"),
        m(L, "scope", "col"),
        m(w, "scope", "col"),
        m(B, "scope", "col"),
        m(G, "scope", "col"),
        m(k, "class", "bg-gray-50"),
        m(O, "class", "divide-y divide-gray-200"),
        m(T, "class", "min-w-full divide-y divide-gray-200"),
        m(v, "class", "card-body"),
        m(i, "class", "card custom-card mt-3 p-4"),
        m(e, "class", "container mx-auto my-5 flex-grow");
    },
    m(u, y) {
      Q(u, e, y),
        t(e, a),
        t(a, s),
        t(s, r),
        t(e, o),
        t(e, i),
        t(i, h),
        t(h, p),
        t(h, A),
        t(h, g),
        t(i, H),
        t(i, v),
        t(v, T),
        t(T, k),
        t(k, b),
        t(b, L),
        t(L, M),
        t(b, F),
        t(b, w),
        t(w, _),
        t(b, q),
        t(b, B),
        t(B, R),
        t(b, j),
        t(b, G),
        t(G, U),
        t(T, W),
        t(T, O);
      for (let N = 0; N < V.length; N += 1) V[N] && V[N].m(O, null);
    },
    p(u, y) {
      y & 4 && f !== (f = `Season ${u[2]}`) && Y(p, f),
        y & 2 && E !== (E = `Gameweek ${u[1]}`) && Y(g, E),
        y & 17 &&
          ((Z = u[0]), (V = ge(V, y, te, 1, u, Z, ee, O, Te, _e, null, ve)));
    },
    d(u) {
      u && l(e);
      for (let y = 0; y < V.length; y += 1) V[y].d();
    },
  };
}
function De(S) {
  let e, a, s, r, o, i, h;
  return {
    c() {
      (e = n("div")),
        (a = n("div")),
        (s = n("span")),
        (r = D("Loading...")),
        (o = $()),
        (i = n("p")),
        (h = D("Loading Fixtures")),
        this.h();
    },
    l(f) {
      e = c(f, "DIV", { class: !0 });
      var p = d(e);
      a = c(p, "DIV", { class: !0, role: !0 });
      var A = d(a);
      s = c(A, "SPAN", { class: !0 });
      var E = d(s);
      (r = I(E, "Loading...")),
        E.forEach(l),
        A.forEach(l),
        (o = P(p)),
        (i = c(p, "P", { class: !0 }));
      var g = d(i);
      (h = I(g, "Loading Fixtures")), g.forEach(l), p.forEach(l), this.h();
    },
    h() {
      m(s, "class", "visually-hidden"),
        m(
          a,
          "class",
          "spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        ),
        m(a, "role", "status"),
        m(i, "class", "text-center mt-1"),
        m(e, "class", "flex items-center justify-center h-screen");
    },
    m(f, p) {
      Q(f, e, p), t(e, a), t(a, s), t(s, r), t(e, o), t(e, i), t(i, h);
    },
    p: x,
    d(f) {
      f && l(e);
    },
  };
}
function _e(S, e) {
  let a,
    s,
    r = e[14] + 1 + "",
    o,
    i,
    h,
    f = `${e[4](e[12].homeTeamId).name} vs ${e[4](e[12].awayTeamId).name}`,
    p,
    A,
    E,
    g = e[12].status === 2 ? "Completed" : "Active",
    H,
    v,
    T,
    k,
    b,
    L,
    M,
    F;
  return {
    key: S,
    first: null,
    c() {
      (a = n("tr")),
        (s = n("td")),
        (o = D(r)),
        (i = $()),
        (h = n("td")),
        (p = D(f)),
        (A = $()),
        (E = n("td")),
        (H = D(g)),
        (v = $()),
        (T = n("td")),
        (k = n("a")),
        (b = n("button")),
        (L = D("Add Player Event Data")),
        (F = $()),
        this.h();
    },
    l(w) {
      a = c(w, "TR", {});
      var _ = d(a);
      s = c(_, "TD", {});
      var q = d(s);
      (o = I(q, r)), q.forEach(l), (i = P(_)), (h = c(_, "TD", {}));
      var B = d(h);
      (p = I(B, f)), B.forEach(l), (A = P(_)), (E = c(_, "TD", {}));
      var R = d(E);
      (H = I(R, g)), R.forEach(l), (v = P(_)), (T = c(_, "TD", {}));
      var j = d(T);
      k = c(j, "A", { href: !0 });
      var G = d(k);
      b = c(G, "BUTTON", { class: !0 });
      var U = d(b);
      (L = I(U, "Add Player Event Data")),
        U.forEach(l),
        G.forEach(l),
        j.forEach(l),
        (F = P(_)),
        _.forEach(l),
        this.h();
    },
    h() {
      m(b, "class", "btn btn-primary"),
        m(k, "href", (M = `/add-fixture-data?id=${e[12].id}`)),
        (this.first = a);
    },
    m(w, _) {
      Q(w, a, _),
        t(a, s),
        t(s, o),
        t(a, i),
        t(a, h),
        t(h, p),
        t(a, A),
        t(a, E),
        t(E, H),
        t(a, v),
        t(a, T),
        t(T, k),
        t(k, b),
        t(b, L),
        t(a, F);
    },
    p(w, _) {
      (e = w),
        _ & 1 && r !== (r = e[14] + 1 + "") && Y(o, r),
        _ & 1 &&
          f !==
            (f = `${e[4](e[12].homeTeamId).name} vs ${
              e[4](e[12].awayTeamId).name
            }`) &&
          Y(p, f),
        _ & 1 &&
          g !== (g = e[12].status === 2 ? "Completed" : "Active") &&
          Y(H, g),
        _ & 1 &&
          M !== (M = `/add-fixture-data?id=${e[12].id}`) &&
          m(k, "href", M);
    },
    d(w) {
      w && l(a);
    },
  };
}
function Ie(S) {
  let e;
  function a(o, i) {
    return o[3] ? De : we;
  }
  let s = a(S),
    r = s(S);
  return {
    c() {
      r.c(), (e = de());
    },
    l(o) {
      r.l(o), (e = de());
    },
    m(o, i) {
      r.m(o, i), Q(o, e, i);
    },
    p(o, [i]) {
      s === (s = a(o)) && r
        ? r.p(o, i)
        : (r.d(1), (r = s(o)), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: x,
    o: x,
    d(o) {
      r.d(o), o && l(e);
    },
  };
}
function Ae(S, e, a) {
  let s,
    r,
    o,
    i,
    h,
    f,
    p,
    A,
    E,
    g = !0;
  ye(async () => {
    try {
      await he.sync(),
        await ue.sync(),
        await fe.sync(),
        (h = he.subscribe((v) => {
          (i = v), a(2, (E = i?.activeSeason.name ?? ""));
        })),
        (f = ue.subscribe((v) => {
          s = v;
        })),
        (p = fe.subscribe((v) => {
          o = v;
        })),
        a(0, (r = await Se.getValidatableFixtures())),
        a(1, (A = r[0].gameweek));
    } catch (v) {
      ke.show("Error fetching fixture validation list.", "error"),
        console.error("Error fetching fixture validation list.", v);
    } finally {
      a(3, (g = !1));
    }
  }),
    Ee(() => {
      f?.(), p?.(), h?.();
    });
  function H(v) {
    return s.find((T) => T.id === v);
  }
  return [r, A, E, g, H];
}
class Be extends me {
  constructor(e) {
    super(), pe(this, e, Ae, Ie, be, {});
  }
}
export { Be as component };
