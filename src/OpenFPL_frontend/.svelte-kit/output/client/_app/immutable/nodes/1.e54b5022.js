import {
  a as m,
  c as C,
  f as u,
  g as f,
  h as g,
  i as q,
  j as h,
  m as d,
  n as v,
  o as E,
  S as j,
  s as y,
  x as $,
} from "../chunks/index.a21d6cee.js";
import { e as S, n as _, s as x } from "../chunks/scheduler.e108d1fd.js";
import { d as H } from "../chunks/singletons.e25685a9.js";
const P = () => {
    const s = H;
    return {
      page: { subscribe: s.page.subscribe },
      navigating: { subscribe: s.navigating.subscribe },
      updated: s.updated,
    };
  },
  k = {
    subscribe(s) {
      return P().page.subscribe(s);
    },
  };
function w(s) {
  var b;
  let t,
    r = s[0].status + "",
    o,
    n,
    i,
    c = ((b = s[0].error) == null ? void 0 : b.message) + "",
    l;
  return {
    c() {
      (t = f("h1")), (o = d(r)), (n = y()), (i = f("p")), (l = d(c));
    },
    l(e) {
      t = g(e, "H1", {});
      var a = h(t);
      (o = v(a, r)), a.forEach(u), (n = C(e)), (i = g(e, "P", {}));
      var p = h(i);
      (l = v(p, c)), p.forEach(u);
    },
    m(e, a) {
      m(e, t, a), $(t, o), m(e, n, a), m(e, i, a), $(i, l);
    },
    p(e, [a]) {
      var p;
      a & 1 && r !== (r = e[0].status + "") && E(o, r),
        a & 1 &&
          c !== (c = ((p = e[0].error) == null ? void 0 : p.message) + "") &&
          E(l, c);
    },
    i: _,
    o: _,
    d(e) {
      e && (u(t), u(n), u(i));
    },
  };
}
function z(s, t, r) {
  let o;
  return S(s, k, (n) => r(0, (o = n))), [o];
}
let F = class extends j {
  constructor(t) {
    super(), q(this, t, z, w, x, {});
  }
};
export { F as component };
