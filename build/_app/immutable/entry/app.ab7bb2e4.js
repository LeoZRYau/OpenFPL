import {
  A,
  a as B,
  c as C,
  B as D,
  h as E,
  k as F,
  l as G,
  m as H,
  f as I,
  q as J,
  r as K,
  z as L,
  j as M,
  v as P,
  u as Q,
  n as R,
  S,
  o as U,
  w as V,
  t as W,
  e as d,
  g,
  d as h,
  i as j,
  y as k,
  p,
  x as v,
  b as w,
  s as z,
} from "../chunks/index.a8c54947.js";
import { _ as c } from "../chunks/preload-helper.a4192956.js";
const it = {};
function X(s) {
  let t, i, n;
  var r = s[1][0];
  function u(e) {
    return { props: { data: e[3], form: e[2] } };
  }
  return (
    r && ((t = v(r, u(s))), s[12](t)),
    {
      c() {
        t && k(t.$$.fragment), (i = d());
      },
      l(e) {
        t && L(t.$$.fragment, e), (i = d());
      },
      m(e, o) {
        t && A(t, e, o), w(e, i, o), (n = !0);
      },
      p(e, o) {
        const l = {};
        if (
          (o & 8 && (l.data = e[3]),
          o & 4 && (l.form = e[2]),
          o & 2 && r !== (r = e[1][0]))
        ) {
          if (t) {
            P();
            const a = t;
            h(a.$$.fragment, 1, 0, () => {
              D(a, 1);
            }),
              I();
          }
          r
            ? ((t = v(r, u(e))),
              e[12](t),
              k(t.$$.fragment),
              g(t.$$.fragment, 1),
              A(t, i.parentNode, i))
            : (t = null);
        } else r && t.$set(l);
      },
      i(e) {
        n || (t && g(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        t && h(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        s[12](null), e && E(i), t && D(t, e);
      },
    }
  );
}
function Y(s) {
  let t, i, n;
  var r = s[1][0];
  function u(e) {
    return {
      props: { data: e[3], $$slots: { default: [Z] }, $$scope: { ctx: e } },
    };
  }
  return (
    r && ((t = v(r, u(s))), s[11](t)),
    {
      c() {
        t && k(t.$$.fragment), (i = d());
      },
      l(e) {
        t && L(t.$$.fragment, e), (i = d());
      },
      m(e, o) {
        t && A(t, e, o), w(e, i, o), (n = !0);
      },
      p(e, o) {
        const l = {};
        if (
          (o & 8 && (l.data = e[3]),
          o & 8215 && (l.$$scope = { dirty: o, ctx: e }),
          o & 2 && r !== (r = e[1][0]))
        ) {
          if (t) {
            P();
            const a = t;
            h(a.$$.fragment, 1, 0, () => {
              D(a, 1);
            }),
              I();
          }
          r
            ? ((t = v(r, u(e))),
              e[11](t),
              k(t.$$.fragment),
              g(t.$$.fragment, 1),
              A(t, i.parentNode, i))
            : (t = null);
        } else r && t.$set(l);
      },
      i(e) {
        n || (t && g(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        t && h(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        s[11](null), e && E(i), t && D(t, e);
      },
    }
  );
}
function Z(s) {
  let t, i, n;
  var r = s[1][1];
  function u(e) {
    return { props: { data: e[4], form: e[2] } };
  }
  return (
    r && ((t = v(r, u(s))), s[10](t)),
    {
      c() {
        t && k(t.$$.fragment), (i = d());
      },
      l(e) {
        t && L(t.$$.fragment, e), (i = d());
      },
      m(e, o) {
        t && A(t, e, o), w(e, i, o), (n = !0);
      },
      p(e, o) {
        const l = {};
        if (
          (o & 16 && (l.data = e[4]),
          o & 4 && (l.form = e[2]),
          o & 2 && r !== (r = e[1][1]))
        ) {
          if (t) {
            P();
            const a = t;
            h(a.$$.fragment, 1, 0, () => {
              D(a, 1);
            }),
              I();
          }
          r
            ? ((t = v(r, u(e))),
              e[10](t),
              k(t.$$.fragment),
              g(t.$$.fragment, 1),
              A(t, i.parentNode, i))
            : (t = null);
        } else r && t.$set(l);
      },
      i(e) {
        n || (t && g(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        t && h(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        s[10](null), e && E(i), t && D(t, e);
      },
    }
  );
}
function O(s) {
  let t,
    i = s[6] && T(s);
  return {
    c() {
      (t = F("div")), i && i.c(), this.h();
    },
    l(n) {
      t = G(n, "DIV", {
        id: !0,
        "aria-live": !0,
        "aria-atomic": !0,
        style: !0,
      });
      var r = H(t);
      i && i.l(r), r.forEach(E), this.h();
    },
    h() {
      R(t, "id", "svelte-announcer"),
        R(t, "aria-live", "assertive"),
        R(t, "aria-atomic", "true"),
        p(t, "position", "absolute"),
        p(t, "left", "0"),
        p(t, "top", "0"),
        p(t, "clip", "rect(0 0 0 0)"),
        p(t, "clip-path", "inset(50%)"),
        p(t, "overflow", "hidden"),
        p(t, "white-space", "nowrap"),
        p(t, "width", "1px"),
        p(t, "height", "1px");
    },
    m(n, r) {
      w(n, t, r), i && i.m(t, null);
    },
    p(n, r) {
      n[6]
        ? i
          ? i.p(n, r)
          : ((i = T(n)), i.c(), i.m(t, null))
        : i && (i.d(1), (i = null));
    },
    d(n) {
      n && E(t), i && i.d();
    },
  };
}
function T(s) {
  let t;
  return {
    c() {
      t = J(s[7]);
    },
    l(i) {
      t = K(i, s[7]);
    },
    m(i, n) {
      w(i, t, n);
    },
    p(i, n) {
      n & 128 && Q(t, i[7]);
    },
    d(i) {
      i && E(t);
    },
  };
}
function $(s) {
  let t, i, n, r, u;
  const e = [Y, X],
    o = [];
  function l(_, m) {
    return _[1][1] ? 0 : 1;
  }
  (t = l(s)), (i = o[t] = e[t](s));
  let a = s[5] && O(s);
  return {
    c() {
      i.c(), (n = B()), a && a.c(), (r = d());
    },
    l(_) {
      i.l(_), (n = C(_)), a && a.l(_), (r = d());
    },
    m(_, m) {
      o[t].m(_, m), w(_, n, m), a && a.m(_, m), w(_, r, m), (u = !0);
    },
    p(_, [m]) {
      let b = t;
      (t = l(_)),
        t === b
          ? o[t].p(_, m)
          : (P(),
            h(o[b], 1, 1, () => {
              o[b] = null;
            }),
            I(),
            (i = o[t]),
            i ? i.p(_, m) : ((i = o[t] = e[t](_)), i.c()),
            g(i, 1),
            i.m(n.parentNode, n)),
        _[5]
          ? a
            ? a.p(_, m)
            : ((a = O(_)), a.c(), a.m(r.parentNode, r))
          : a && (a.d(1), (a = null));
    },
    i(_) {
      u || (g(i), (u = !0));
    },
    o(_) {
      h(i), (u = !1);
    },
    d(_) {
      o[t].d(_), _ && E(n), a && a.d(_), _ && E(r);
    },
  };
}
function x(s, t, i) {
  let { stores: n } = t,
    { page: r } = t,
    { constructors: u } = t,
    { components: e = [] } = t,
    { form: o } = t,
    { data_0: l = null } = t,
    { data_1: a = null } = t;
  M(n.page.notify);
  let _ = !1,
    m = !1,
    b = null;
  U(() => {
    const f = n.page.subscribe(() => {
      _ &&
        (i(6, (m = !0)),
        W().then(() => {
          i(7, (b = document.title || "untitled page"));
        }));
    });
    return i(5, (_ = !0)), f;
  });
  function y(f) {
    V[f ? "unshift" : "push"](() => {
      (e[1] = f), i(0, e);
    });
  }
  function N(f) {
    V[f ? "unshift" : "push"](() => {
      (e[0] = f), i(0, e);
    });
  }
  function q(f) {
    V[f ? "unshift" : "push"](() => {
      (e[0] = f), i(0, e);
    });
  }
  return (
    (s.$$set = (f) => {
      "stores" in f && i(8, (n = f.stores)),
        "page" in f && i(9, (r = f.page)),
        "constructors" in f && i(1, (u = f.constructors)),
        "components" in f && i(0, (e = f.components)),
        "form" in f && i(2, (o = f.form)),
        "data_0" in f && i(3, (l = f.data_0)),
        "data_1" in f && i(4, (a = f.data_1));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 768 && n.page.set(r);
    }),
    [e, u, o, l, a, _, m, b, n, r, y, N, q]
  );
}
class nt extends S {
  constructor(t) {
    super(),
      j(this, t, x, $, z, {
        stores: 8,
        page: 9,
        constructors: 1,
        components: 0,
        form: 2,
        data_0: 3,
        data_1: 4,
      });
  }
}
const rt = [
    () =>
      c(
        () => import("../nodes/0.00292b82.js"),
        ["../nodes/0.00292b82.js", "../chunks/index.a8c54947.js"],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/1.f49e0cf4.js"),
        [
          "../nodes/1.f49e0cf4.js",
          "../chunks/index.a8c54947.js",
          "../chunks/stores.95126db5.js",
          "../chunks/singletons.fdfa7ed0.js",
        ],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/2.232ebf2e.js"),
        [
          "../nodes/2.232ebf2e.js",
          "../chunks/index.a8c54947.js",
          "../chunks/Layout.0e76e124.js",
          "../chunks/singletons.fdfa7ed0.js",
          "../chunks/stores.95126db5.js",
          "../chunks/preload-helper.a4192956.js",
          "../assets/Layout.ef6abfb5.css",
          "../chunks/manager-store.ef17e835.js",
          "../chunks/BadgeIcon.ac2d82f5.js",
          "../chunks/ViewDetailsIcon.d864d339.js",
          "../assets/2.cc11644e.css",
        ],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/3.1e18be7c.js"),
        [
          "../nodes/3.1e18be7c.js",
          "../chunks/index.a8c54947.js",
          "../chunks/stores.95126db5.js",
          "../chunks/singletons.fdfa7ed0.js",
          "../chunks/Layout.0e76e124.js",
          "../chunks/preload-helper.a4192956.js",
          "../assets/Layout.ef6abfb5.css",
        ],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/4.d384d12f.js"),
        [
          "../nodes/4.d384d12f.js",
          "../chunks/index.a8c54947.js",
          "../chunks/Layout.0e76e124.js",
          "../chunks/singletons.fdfa7ed0.js",
          "../chunks/stores.95126db5.js",
          "../chunks/preload-helper.a4192956.js",
          "../assets/Layout.ef6abfb5.css",
          "../chunks/BadgeIcon.ac2d82f5.js",
        ],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/5.d907552f.js"),
        [
          "../nodes/5.d907552f.js",
          "../chunks/index.a8c54947.js",
          "../chunks/Layout.0e76e124.js",
          "../chunks/singletons.fdfa7ed0.js",
          "../chunks/stores.95126db5.js",
          "../chunks/preload-helper.a4192956.js",
          "../assets/Layout.ef6abfb5.css",
          "../chunks/BadgeIcon.ac2d82f5.js",
          "../chunks/ShirtIcon.3da312bd.js",
        ],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/6.bc3f884a.js"),
        [
          "../nodes/6.bc3f884a.js",
          "../chunks/index.a8c54947.js",
          "../chunks/Layout.0e76e124.js",
          "../chunks/singletons.fdfa7ed0.js",
          "../chunks/stores.95126db5.js",
          "../chunks/preload-helper.a4192956.js",
          "../assets/Layout.ef6abfb5.css",
        ],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/7.52173097.js"),
        [
          "../nodes/7.52173097.js",
          "../chunks/index.a8c54947.js",
          "../chunks/Layout.0e76e124.js",
          "../chunks/singletons.fdfa7ed0.js",
          "../chunks/stores.95126db5.js",
          "../chunks/preload-helper.a4192956.js",
          "../assets/Layout.ef6abfb5.css",
          "../assets/7.2206b352.css",
        ],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/8.e291d6c1.js"),
        [
          "../nodes/8.e291d6c1.js",
          "../chunks/index.a8c54947.js",
          "../chunks/Layout.0e76e124.js",
          "../chunks/singletons.fdfa7ed0.js",
          "../chunks/stores.95126db5.js",
          "../chunks/preload-helper.a4192956.js",
          "../assets/Layout.ef6abfb5.css",
        ],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/9.043408f5.js"),
        [
          "../nodes/9.043408f5.js",
          "../chunks/index.a8c54947.js",
          "../chunks/singletons.fdfa7ed0.js",
          "../chunks/stores.95126db5.js",
          "../chunks/Layout.0e76e124.js",
          "../chunks/preload-helper.a4192956.js",
          "../assets/Layout.ef6abfb5.css",
          "../chunks/manager-store.ef17e835.js",
          "../chunks/BadgeIcon.ac2d82f5.js",
          "../chunks/manager-gameweeks.a53f4a02.js",
          "../chunks/ViewDetailsIcon.d864d339.js",
        ],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/10.7d6c604c.js"),
        [
          "../nodes/10.7d6c604c.js",
          "../chunks/index.a8c54947.js",
          "../chunks/Layout.0e76e124.js",
          "../chunks/singletons.fdfa7ed0.js",
          "../chunks/stores.95126db5.js",
          "../chunks/preload-helper.a4192956.js",
          "../assets/Layout.ef6abfb5.css",
          "../chunks/manager-store.ef17e835.js",
          "../chunks/BadgeIcon.ac2d82f5.js",
          "../chunks/ShirtIcon.3da312bd.js",
          "../assets/10.291f2ab9.css",
        ],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/11.0f064a4a.js"),
        [
          "../nodes/11.0f064a4a.js",
          "../chunks/index.a8c54947.js",
          "../chunks/stores.95126db5.js",
          "../chunks/singletons.fdfa7ed0.js",
          "../chunks/Layout.0e76e124.js",
          "../chunks/preload-helper.a4192956.js",
          "../assets/Layout.ef6abfb5.css",
          "../chunks/BadgeIcon.ac2d82f5.js",
          "../chunks/ViewDetailsIcon.d864d339.js",
          "../chunks/ShirtIcon.3da312bd.js",
          "../assets/11.ff16016e.css",
        ],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/12.e2af2314.js"),
        [
          "../nodes/12.e2af2314.js",
          "../chunks/index.a8c54947.js",
          "../chunks/Layout.0e76e124.js",
          "../chunks/singletons.fdfa7ed0.js",
          "../chunks/stores.95126db5.js",
          "../chunks/preload-helper.a4192956.js",
          "../assets/Layout.ef6abfb5.css",
          "../chunks/manager-gameweeks.a53f4a02.js",
          "../chunks/manager-store.ef17e835.js",
          "../chunks/ViewDetailsIcon.d864d339.js",
          "../assets/12.1aed53fb.css",
        ],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/13.64ea5cdb.js"),
        [
          "../nodes/13.64ea5cdb.js",
          "../chunks/index.a8c54947.js",
          "../chunks/Layout.0e76e124.js",
          "../chunks/singletons.fdfa7ed0.js",
          "../chunks/stores.95126db5.js",
          "../chunks/preload-helper.a4192956.js",
          "../assets/Layout.ef6abfb5.css",
        ],
        import.meta.url
      ),
    () =>
      c(
        () => import("../nodes/14.cf9782bd.js"),
        [
          "../nodes/14.cf9782bd.js",
          "../chunks/index.a8c54947.js",
          "../chunks/Layout.0e76e124.js",
          "../chunks/singletons.fdfa7ed0.js",
          "../chunks/stores.95126db5.js",
          "../chunks/preload-helper.a4192956.js",
          "../assets/Layout.ef6abfb5.css",
          "../assets/7.2206b352.css",
        ],
        import.meta.url
      ),
  ],
  ot = [],
  st = {
    "/": [2],
    "/add-fixture-data": [3],
    "/admin": [4],
    "/club": [5],
    "/fixture-validation": [6],
    "/gameplay-rules": [7],
    "/governance": [8],
    "/manager": [9],
    "/pick-team": [10],
    "/player": [11],
    "/profile": [12],
    "/terms": [13],
    "/whitepaper": [14],
  },
  _t = {
    handleError: ({ error: s }) => {
      console.error(s);
    },
  };
export {
  st as dictionary,
  _t as hooks,
  it as matchers,
  rt as nodes,
  nt as root,
  ot as server_loads,
};
