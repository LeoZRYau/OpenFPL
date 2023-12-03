function M() {}
function nt(t, n) {
  for (const e in n) t[e] = n[e];
  return t;
}
function K(t) {
  return t();
}
function W() {
  return Object.create(null);
}
function $(t) {
  t.forEach(K);
}
function Q(t) {
  return typeof t == "function";
}
function $t(t, n) {
  return t != t
    ? n == n
    : t !== n || (t && typeof t == "object") || typeof t == "function";
}
let N;
function kt(t, n) {
  return N || (N = document.createElement("a")), (N.href = n), t === N.href;
}
function et(t) {
  return Object.keys(t).length === 0;
}
function it(t, ...n) {
  if (t == null) return M;
  const e = t.subscribe(...n);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function vt(t, n, e) {
  t.$$.on_destroy.push(it(n, e));
}
function Et(t, n, e, i) {
  if (t) {
    const r = R(t, n, e, i);
    return t[0](r);
  }
}
function R(t, n, e, i) {
  return t[1] && i ? nt(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function St(t, n, e, i) {
  if (t[2] && i) {
    const r = t[2](i(e));
    if (n.dirty === void 0) return r;
    if (typeof r == "object") {
      const l = [],
        s = Math.max(n.dirty.length, r.length);
      for (let c = 0; c < s; c += 1) l[c] = n.dirty[c] | r[c];
      return l;
    }
    return n.dirty | r;
  }
  return n.dirty;
}
function Nt(t, n, e, i, r, l) {
  if (r) {
    const s = R(n, e, i, l);
    t.p(s, r);
  }
}
function At(t) {
  if (t.ctx.length > 32) {
    const n = [],
      e = t.ctx.length / 32;
    for (let i = 0; i < e; i++) n[i] = -1;
    return n;
  }
  return -1;
}
function Mt(t) {
  const n = {};
  for (const e in t) e[0] !== "$" && (n[e] = t[e]);
  return n;
}
function jt(t, n) {
  const e = {};
  n = new Set(n);
  for (const i in t) !n.has(i) && i[0] !== "$" && (e[i] = t[i]);
  return e;
}
function Ct(t) {
  return t ?? "";
}
function Tt(t, n, e) {
  return t.set(e), n;
}
const qt =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
let j = !1;
function rt() {
  j = !0;
}
function st() {
  j = !1;
}
function ot(t, n, e, i) {
  for (; t < n; ) {
    const r = t + ((n - t) >> 1);
    e(r) <= i ? (t = r + 1) : (n = r);
  }
  return t;
}
function ct(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let n = t.childNodes;
  if (t.nodeName === "HEAD") {
    const o = [];
    for (let u = 0; u < n.length; u++) {
      const f = n[u];
      f.claim_order !== void 0 && o.push(f);
    }
    n = o;
  }
  const e = new Int32Array(n.length + 1),
    i = new Int32Array(n.length);
  e[0] = -1;
  let r = 0;
  for (let o = 0; o < n.length; o++) {
    const u = n[o].claim_order,
      f =
        (r > 0 && n[e[r]].claim_order <= u
          ? r + 1
          : ot(1, r, (_) => n[e[_]].claim_order, u)) - 1;
    i[o] = e[f] + 1;
    const d = f + 1;
    (e[d] = o), (r = Math.max(d, r));
  }
  const l = [],
    s = [];
  let c = n.length - 1;
  for (let o = e[r] + 1; o != 0; o = i[o - 1]) {
    for (l.push(n[o - 1]); c >= o; c--) s.push(n[c]);
    c--;
  }
  for (; c >= 0; c--) s.push(n[c]);
  l.reverse(), s.sort((o, u) => o.claim_order - u.claim_order);
  for (let o = 0, u = 0; o < s.length; o++) {
    for (; u < l.length && s[o].claim_order >= l[u].claim_order; ) u++;
    const f = u < l.length ? l[u] : null;
    t.insertBefore(s[o], f);
  }
}
function ut(t, n) {
  if (j) {
    for (
      ct(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    n !== t.actual_end_child
      ? (n.claim_order !== void 0 || n.parentNode !== t) &&
        t.insertBefore(n, t.actual_end_child)
      : (t.actual_end_child = n.nextSibling);
  } else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function Lt(t, n, e) {
  j && !e
    ? ut(t, n)
    : (n.parentNode !== t || n.nextSibling != e) &&
      t.insertBefore(n, e || null);
}
function lt(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ot(t, n) {
  for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function at(t) {
  return document.createElement(t);
}
function ft(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function I(t) {
  return document.createTextNode(t);
}
function Pt() {
  return I(" ");
}
function Bt() {
  return I("");
}
function Dt(t, n, e, i) {
  return t.addEventListener(n, e, i), () => t.removeEventListener(n, e, i);
}
function It(t) {
  return function (n) {
    return n.preventDefault(), t.call(this, n);
  };
}
function zt(t) {
  return function (n) {
    return n.stopPropagation(), t.call(this, n);
  };
}
function _t(t, n, e) {
  e == null
    ? t.removeAttribute(n)
    : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function Ft(t, n) {
  for (const e in n) _t(t, e, n[e]);
}
function Ht(t, n, e) {
  t.setAttributeNS("http://www.w3.org/1999/xlink", n, e);
}
function Wt(t) {
  return t === "" ? null : +t;
}
function dt(t) {
  return Array.from(t.childNodes);
}
function ht(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function U(t, n, e, i, r = !1) {
  ht(t);
  const l = (() => {
    for (let s = t.claim_info.last_index; s < t.length; s++) {
      const c = t[s];
      if (n(c)) {
        const o = e(c);
        return (
          o === void 0 ? t.splice(s, 1) : (t[s] = o),
          r || (t.claim_info.last_index = s),
          c
        );
      }
    }
    for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
      const c = t[s];
      if (n(c)) {
        const o = e(c);
        return (
          o === void 0 ? t.splice(s, 1) : (t[s] = o),
          r
            ? o === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = s),
          c
        );
      }
    }
    return i();
  })();
  return (
    (l.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    l
  );
}
function V(t, n, e, i) {
  return U(
    t,
    (r) => r.nodeName === n,
    (r) => {
      const l = [];
      for (let s = 0; s < r.attributes.length; s++) {
        const c = r.attributes[s];
        e[c.name] || l.push(c.name);
      }
      l.forEach((s) => r.removeAttribute(s));
    },
    () => i(n)
  );
}
function Gt(t, n, e) {
  return V(t, n, e, at);
}
function Jt(t, n, e) {
  return V(t, n, e, ft);
}
function mt(t, n) {
  return U(
    t,
    (e) => e.nodeType === 3,
    (e) => {
      const i = "" + n;
      if (e.data.startsWith(i)) {
        if (e.data.length !== i.length) return e.splitText(i.length);
      } else e.data = i;
    },
    () => I(n),
    !0
  );
}
function Kt(t) {
  return mt(t, " ");
}
function Qt(t, n) {
  (n = "" + n), t.data !== n && (t.data = n);
}
function Rt(t, n) {
  t.value = n ?? "";
}
function Ut(t, n, e, i) {
  e == null
    ? t.style.removeProperty(n)
    : t.style.setProperty(n, e, i ? "important" : "");
}
function Vt(t, n, e) {
  for (let i = 0; i < t.options.length; i += 1) {
    const r = t.options[i];
    if (r.__value === n) {
      r.selected = !0;
      return;
    }
  }
  (!e || n !== void 0) && (t.selectedIndex = -1);
}
function Xt(t) {
  const n = t.querySelector(":checked");
  return n && n.__value;
}
function Yt(t, n, e) {
  t.classList[e ? "add" : "remove"](n);
}
function Zt(t, n) {
  return new t(n);
}
let v;
function k(t) {
  v = t;
}
function C() {
  if (!v) throw new Error("Function called outside component initialization");
  return v;
}
function tn(t) {
  C().$$.on_mount.push(t);
}
function nn(t) {
  C().$$.after_update.push(t);
}
function en(t) {
  C().$$.on_destroy.push(t);
}
function rn(t) {
  return C().$$.context.get(t);
}
function sn(t, n) {
  const e = t.$$.callbacks[n.type];
  e && e.slice().forEach((i) => i.call(this, n));
}
const x = [],
  G = [];
let w = [];
const J = [],
  X = Promise.resolve();
let B = !1;
function Y() {
  B || ((B = !0), X.then(Z));
}
function on() {
  return Y(), X;
}
function D(t) {
  w.push(t);
}
const P = new Set();
let b = 0;
function Z() {
  if (b !== 0) return;
  const t = v;
  do {
    try {
      for (; b < x.length; ) {
        const n = x[b];
        b++, k(n), pt(n.$$);
      }
    } catch (n) {
      throw ((x.length = 0), (b = 0), n);
    }
    for (k(null), x.length = 0, b = 0; G.length; ) G.pop()();
    for (let n = 0; n < w.length; n += 1) {
      const e = w[n];
      P.has(e) || (P.add(e), e());
    }
    w.length = 0;
  } while (x.length);
  for (; J.length; ) J.pop()();
  (B = !1), P.clear(), k(t);
}
function pt(t) {
  if (t.fragment !== null) {
    t.update(), $(t.before_update);
    const n = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, n),
      t.after_update.forEach(D);
  }
}
function yt(t) {
  const n = [],
    e = [];
  w.forEach((i) => (t.indexOf(i) === -1 ? n.push(i) : e.push(i))),
    e.forEach((i) => i()),
    (w = n);
}
const A = new Set();
let g;
function cn() {
  g = { r: 0, c: [], p: g };
}
function un() {
  g.r || $(g.c), (g = g.p);
}
function tt(t, n) {
  t && t.i && (A.delete(t), t.i(n));
}
function gt(t, n, e, i) {
  if (t && t.o) {
    if (A.has(t)) return;
    A.add(t),
      g.c.push(() => {
        A.delete(t), i && (e && t.d(1), i());
      }),
      t.o(n);
  } else i && i();
}
function ln(t, n) {
  t.d(1), n.delete(t.key);
}
function an(t, n) {
  gt(t, 1, 1, () => {
    n.delete(t.key);
  });
}
function fn(t, n, e, i, r, l, s, c, o, u, f, d) {
  let _ = t.length,
    m = l.length,
    h = _;
  const T = {};
  for (; h--; ) T[t[h].key] = h;
  const E = [],
    q = new Map(),
    L = new Map(),
    z = [];
  for (h = m; h--; ) {
    const a = d(r, l, h),
      p = e(a);
    let y = s.get(p);
    y ? i && z.push(() => y.p(a, n)) : ((y = u(p, a)), y.c()),
      q.set(p, (E[h] = y)),
      p in T && L.set(p, Math.abs(h - T[p]));
  }
  const F = new Set(),
    H = new Set();
  function O(a) {
    tt(a, 1), a.m(c, f), s.set(a.key, a), (f = a.first), m--;
  }
  for (; _ && m; ) {
    const a = E[m - 1],
      p = t[_ - 1],
      y = a.key,
      S = p.key;
    a === p
      ? ((f = a.first), _--, m--)
      : q.has(S)
      ? !s.has(y) || F.has(y)
        ? O(a)
        : H.has(S)
        ? _--
        : L.get(y) > L.get(S)
        ? (H.add(y), O(a))
        : (F.add(S), _--)
      : (o(p, s), _--);
  }
  for (; _--; ) {
    const a = t[_];
    q.has(a.key) || o(a, s);
  }
  for (; m; ) O(E[m - 1]);
  return $(z), E;
}
function _n(t, n) {
  const e = {},
    i = {},
    r = { $$scope: 1 };
  let l = t.length;
  for (; l--; ) {
    const s = t[l],
      c = n[l];
    if (c) {
      for (const o in s) o in c || (i[o] = 1);
      for (const o in c) r[o] || ((e[o] = c[o]), (r[o] = 1));
      t[l] = c;
    } else for (const o in s) r[o] = 1;
  }
  for (const s in i) s in e || (e[s] = void 0);
  return e;
}
function dn(t) {
  t && t.c();
}
function hn(t, n) {
  t && t.l(n);
}
function bt(t, n, e, i) {
  const { fragment: r, after_update: l } = t.$$;
  r && r.m(n, e),
    i ||
      D(() => {
        const s = t.$$.on_mount.map(K).filter(Q);
        t.$$.on_destroy ? t.$$.on_destroy.push(...s) : $(s),
          (t.$$.on_mount = []);
      }),
    l.forEach(D);
}
function xt(t, n) {
  const e = t.$$;
  e.fragment !== null &&
    (yt(e.after_update),
    $(e.on_destroy),
    e.fragment && e.fragment.d(n),
    (e.on_destroy = e.fragment = null),
    (e.ctx = []));
}
function wt(t, n) {
  t.$$.dirty[0] === -1 && (x.push(t), Y(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function mn(t, n, e, i, r, l, s, c = [-1]) {
  const o = v;
  k(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: [],
    props: l,
    update: M,
    not_equal: r,
    bound: W(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (o ? o.$$.context : [])),
    callbacks: W(),
    dirty: c,
    skip_bound: !1,
    root: n.target || o.$$.root,
  });
  s && s(u.root);
  let f = !1;
  if (
    ((u.ctx = e
      ? e(t, n.props || {}, (d, _, ...m) => {
          const h = m.length ? m[0] : _;
          return (
            u.ctx &&
              r(u.ctx[d], (u.ctx[d] = h)) &&
              (!u.skip_bound && u.bound[d] && u.bound[d](h), f && wt(t, d)),
            _
          );
        })
      : []),
    u.update(),
    (f = !0),
    $(u.before_update),
    (u.fragment = i ? i(u.ctx) : !1),
    n.target)
  ) {
    if (n.hydrate) {
      rt();
      const d = dt(n.target);
      u.fragment && u.fragment.l(d), d.forEach(lt);
    } else u.fragment && u.fragment.c();
    n.intro && tt(t.$$.fragment),
      bt(t, n.target, n.anchor, n.customElement),
      st(),
      Z();
  }
  k(o);
}
class pn {
  $destroy() {
    xt(this, 1), (this.$destroy = M);
  }
  $on(n, e) {
    if (!Q(e)) return M;
    const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return (
      i.push(e),
      () => {
        const r = i.indexOf(e);
        r !== -1 && i.splice(r, 1);
      }
    );
  }
  $set(n) {
    this.$$set &&
      !et(n) &&
      ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
  }
}
export {
  It as $,
  bt as A,
  xt as B,
  Et as C,
  Nt as D,
  At as E,
  St as F,
  ut as G,
  M as H,
  vt as I,
  D as J,
  Vt as K,
  Dt as L,
  Ot as M,
  $ as N,
  en as O,
  Xt as P,
  Q,
  zt as R,
  pn as S,
  sn as T,
  Ct as U,
  Rt as V,
  Wt as W,
  it as X,
  Tt as Y,
  fn as Z,
  ln as _,
  Pt as a,
  kt as a0,
  ft as a1,
  Jt as a2,
  Yt as a3,
  Ht as a4,
  an as a5,
  qt as a6,
  nt as a7,
  Ft as a8,
  _n as a9,
  jt as aa,
  rn as ab,
  Mt as ac,
  Lt as b,
  Kt as c,
  gt as d,
  Bt as e,
  un as f,
  tt as g,
  lt as h,
  mn as i,
  nn as j,
  at as k,
  Gt as l,
  dt as m,
  _t as n,
  tn as o,
  Ut as p,
  I as q,
  mt as r,
  $t as s,
  on as t,
  Qt as u,
  cn as v,
  G as w,
  Zt as x,
  dn as y,
  hn as z,
};
