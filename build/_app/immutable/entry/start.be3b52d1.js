import { H as te, R as De } from "../chunks/control.f5b05b5f.js";
import { o as ge, t as me } from "../chunks/index.c7b38e5e.js";
import {
  a as Fe,
  b as we,
  c as le,
  d as F,
  e as B,
  f as Te,
  g as Ne,
  h as Je,
  I as C,
  i as ye,
  P as $e,
  s as ee,
  S as qe,
} from "../chunks/singletons.f40d3e23.js";
function We(n, s) {
  return n === "/" || s === "ignore"
    ? n
    : s === "never"
    ? n.endsWith("/")
      ? n.slice(0, -1)
      : n
    : s === "always" && !n.endsWith("/")
    ? n + "/"
    : n;
}
function Ye(n) {
  return n.split("%25").map(decodeURI).join("%25");
}
function Xe(n) {
  for (const s in n) n[s] = decodeURIComponent(n[s]);
  return n;
}
const Ze = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function Qe(n, s) {
  const d = new URL(n);
  for (const o of Ze)
    Object.defineProperty(d, o, {
      get() {
        return s(), n[o];
      },
      enumerable: !0,
      configurable: !0,
    });
  return et(d), d;
}
function et(n) {
  Object.defineProperty(n, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    },
  });
}
const tt = "/__data.json";
function nt(n) {
  return n.replace(/\/$/, "") + tt;
}
function at(...n) {
  let s = 5381;
  for (const d of n)
    if (typeof d == "string") {
      let o = d.length;
      for (; o; ) s = (s * 33) ^ d.charCodeAt(--o);
    } else if (ArrayBuffer.isView(d)) {
      const o = new Uint8Array(d.buffer, d.byteOffset, d.byteLength);
      let u = o.length;
      for (; u; ) s = (s * 33) ^ o[--u];
    } else throw new TypeError("value must be a string or TypedArray");
  return (s >>> 0).toString(36);
}
const He = window.fetch;
window.fetch = (n, s) => (
  (n instanceof Request ? n.method : s?.method || "GET") !== "GET" &&
    ne.delete(ke(n)),
  He(n, s)
);
const ne = new Map();
function rt(n, s) {
  const d = ke(n, s),
    o = document.querySelector(d);
  if (o?.textContent) {
    const { body: u, ...f } = JSON.parse(o.textContent),
      E = o.getAttribute("data-ttl");
    return (
      E && ne.set(d, { body: u, init: f, ttl: 1e3 * Number(E) }),
      Promise.resolve(new Response(u, f))
    );
  }
  return window.fetch(n, s);
}
function ot(n, s, d) {
  if (ne.size > 0) {
    const o = ke(n, d),
      u = ne.get(o);
    if (u) {
      if (
        performance.now() < u.ttl &&
        ["default", "force-cache", "only-if-cached", void 0].includes(d?.cache)
      )
        return new Response(u.body, u.init);
      ne.delete(o);
    }
  }
  return window.fetch(s, d);
}
function ke(n, s) {
  let o = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
    n instanceof Request ? n.url : n
  )}]`;
  if (s?.headers || s?.body) {
    const u = [];
    s.headers && u.push([...new Headers(s.headers)].join(",")),
      s.body &&
        (typeof s.body == "string" || ArrayBuffer.isView(s.body)) &&
        u.push(s.body),
      (o += `[data-hash="${at(...u)}"]`);
  }
  return o;
}
const st = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function it(n) {
  const s = [];
  return {
    pattern:
      n === "/"
        ? /^\/$/
        : new RegExp(
            `^${lt(n)
              .map((o) => {
                const u = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);
                if (u)
                  return (
                    s.push({
                      name: u[1],
                      matcher: u[2],
                      optional: !1,
                      rest: !0,
                      chained: !0,
                    }),
                    "(?:/(.*))?"
                  );
                const f = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);
                if (f)
                  return (
                    s.push({
                      name: f[1],
                      matcher: f[2],
                      optional: !0,
                      rest: !1,
                      chained: !0,
                    }),
                    "(?:/([^/]+))?"
                  );
                if (!o) return;
                const E = o.split(/\[(.+?)\](?!\])/);
                return (
                  "/" +
                  E.map((_, h) => {
                    if (h % 2) {
                      if (_.startsWith("x+"))
                        return ve(
                          String.fromCharCode(parseInt(_.slice(2), 16))
                        );
                      if (_.startsWith("u+"))
                        return ve(
                          String.fromCharCode(
                            ..._.slice(2)
                              .split("-")
                              .map((D) => parseInt(D, 16))
                          )
                        );
                      const p = st.exec(_);
                      if (!p)
                        throw new Error(
                          `Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`
                        );
                      const [, P, I, b, O] = p;
                      return (
                        s.push({
                          name: b,
                          matcher: O,
                          optional: !!P,
                          rest: !!I,
                          chained: I ? h === 1 && E[0] === "" : !1,
                        }),
                        I ? "(.*?)" : P ? "([^/]*)?" : "([^/]+?)"
                      );
                    }
                    return ve(_);
                  }).join("")
                );
              })
              .join("")}/?$`
          ),
    params: s,
  };
}
function ct(n) {
  return !/^\([^)]+\)$/.test(n);
}
function lt(n) {
  return n.slice(1).split("/").filter(ct);
}
function ft(n, s, d) {
  const o = {},
    u = n.slice(1),
    f = u.filter((i) => i !== void 0);
  let E = 0;
  for (let i = 0; i < s.length; i += 1) {
    const _ = s[i];
    let h = u[i - E];
    if (
      (_.chained &&
        _.rest &&
        E &&
        ((h = u
          .slice(i - E, i + 1)
          .filter((p) => p)
          .join("/")),
        (E = 0)),
      h === void 0)
    ) {
      _.rest && (o[_.name] = "");
      continue;
    }
    if (!_.matcher || d[_.matcher](h)) {
      o[_.name] = h;
      const p = s[i + 1],
        P = u[i + 1];
      p && !p.rest && p.optional && P && _.chained && (E = 0),
        !p && !P && Object.keys(o).length === f.length && (E = 0);
      continue;
    }
    if (_.optional && _.chained) {
      E++;
      continue;
    }
    return;
  }
  if (!E) return o;
}
function ve(n) {
  return n
    .normalize()
    .replace(/[[\]]/g, "\\$&")
    .replace(/%/g, "%25")
    .replace(/\//g, "%2[Ff]")
    .replace(/\?/g, "%3[Ff]")
    .replace(/#/g, "%23")
    .replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function ut({ nodes: n, server_loads: s, dictionary: d, matchers: o }) {
  const u = new Set(s);
  return Object.entries(d).map(([i, [_, h, p]]) => {
    const { pattern: P, params: I } = it(i),
      b = {
        id: i,
        exec: (O) => {
          const D = P.exec(O);
          if (D) return ft(D, I, o);
        },
        errors: [1, ...(p || [])].map((O) => n[O]),
        layouts: [0, ...(h || [])].map(E),
        leaf: f(_),
      };
    return (
      (b.errors.length = b.layouts.length =
        Math.max(b.errors.length, b.layouts.length)),
      b
    );
  });
  function f(i) {
    const _ = i < 0;
    return _ && (i = ~i), [_, n[i]];
  }
  function E(i) {
    return i === void 0 ? i : [u.has(i), n[i]];
  }
}
function Be(n) {
  try {
    return JSON.parse(sessionStorage[n]);
  } catch {}
}
function Ce(n, s) {
  const d = JSON.stringify(s);
  try {
    sessionStorage[n] = d;
  } catch {}
}
const dt = -1,
  pt = -2,
  ht = -3,
  _t = -4,
  gt = -5,
  mt = -6;
function wt(n, s) {
  if (typeof n == "number") return u(n, !0);
  if (!Array.isArray(n) || n.length === 0) throw new Error("Invalid input");
  const d = n,
    o = Array(d.length);
  function u(f, E = !1) {
    if (f === dt) return;
    if (f === ht) return NaN;
    if (f === _t) return 1 / 0;
    if (f === gt) return -1 / 0;
    if (f === mt) return -0;
    if (E) throw new Error("Invalid input");
    if (f in o) return o[f];
    const i = d[f];
    if (!i || typeof i != "object") o[f] = i;
    else if (Array.isArray(i))
      if (typeof i[0] == "string") {
        const _ = i[0],
          h = s?.[_];
        if (h) return (o[f] = h(u(i[1])));
        switch (_) {
          case "Date":
            o[f] = new Date(i[1]);
            break;
          case "Set":
            const p = new Set();
            o[f] = p;
            for (let b = 1; b < i.length; b += 1) p.add(u(i[b]));
            break;
          case "Map":
            const P = new Map();
            o[f] = P;
            for (let b = 1; b < i.length; b += 2) P.set(u(i[b]), u(i[b + 1]));
            break;
          case "RegExp":
            o[f] = new RegExp(i[1], i[2]);
            break;
          case "Object":
            o[f] = Object(i[1]);
            break;
          case "BigInt":
            o[f] = BigInt(i[1]);
            break;
          case "null":
            const I = Object.create(null);
            o[f] = I;
            for (let b = 1; b < i.length; b += 2) I[i[b]] = u(i[b + 1]);
            break;
          default:
            throw new Error(`Unknown type ${_}`);
        }
      } else {
        const _ = new Array(i.length);
        o[f] = _;
        for (let h = 0; h < i.length; h += 1) {
          const p = i[h];
          p !== pt && (_[h] = u(p));
        }
      }
    else {
      const _ = {};
      o[f] = _;
      for (const h in i) {
        const p = i[h];
        _[h] = u(p);
      }
    }
    return o[f];
  }
  return u(0);
}
function yt(n) {
  return n.filter((s) => s != null);
}
const Ge = new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config",
]);
[...Ge];
const vt = new Set([...Ge]);
[...vt];
async function bt(n) {
  for (const s in n)
    if (typeof n[s]?.then == "function")
      return Object.fromEntries(
        await Promise.all(Object.entries(n).map(async ([d, o]) => [d, await o]))
      );
  return n;
}
const Et = "x-sveltekit-invalidated",
  kt = "x-sveltekit-trailing-slash",
  G = Be(qe) ?? {},
  Q = Be(Fe) ?? {};
function be(n) {
  G[n] = ee();
}
function St(n, s) {
  const d = ut(n),
    o = n.nodes[0],
    u = n.nodes[1];
  o(), u();
  const f = document.documentElement,
    E = [],
    i = [];
  let _ = null;
  const h = { before_navigate: [], on_navigate: [], after_navigate: [] };
  let p = { branch: [], error: null, url: null },
    P = !1,
    I = !1,
    b = !0,
    O = !1,
    D = !1,
    V = !1,
    H = !1,
    K,
    U = history.state?.[C];
  U ||
    ((U = Date.now()),
    history.replaceState({ ...history.state, [C]: U }, "", location.href));
  const fe = G[U];
  fe && ((history.scrollRestoration = "manual"), scrollTo(fe.x, fe.y));
  let q, z, W;
  async function Se() {
    if (((W = W || Promise.resolve()), await W, !W)) return;
    W = null;
    const e = new URL(location.href),
      t = X(e, !0);
    _ = null;
    const r = (z = {}),
      a = t && (await pe(t));
    if (r === z && a) {
      if (a.type === "redirect")
        return ae(new URL(a.location, e).href, {}, 1, r);
      a.props.page !== void 0 && (q = a.props.page), K.$set(a.props);
    }
  }
  function Re(e) {
    i.some((t) => t?.snapshot) && (Q[e] = i.map((t) => t?.snapshot?.capture()));
  }
  function Ae(e) {
    Q[e]?.forEach((t, r) => {
      i[r]?.snapshot?.restore(t);
    });
  }
  function Ie() {
    be(U), Ce(qe, G), Re(U), Ce(Fe, Q);
  }
  async function ae(
    e,
    {
      noScroll: t = !1,
      replaceState: r = !1,
      keepFocus: a = !1,
      state: c = {},
      invalidateAll: l = !1,
    },
    w,
    y
  ) {
    return (
      typeof e == "string" && (e = new URL(e, Ne(document))),
      ie({
        url: e,
        scroll: t ? ee() : null,
        keepfocus: a,
        redirect_count: w,
        details: { state: c, replaceState: r },
        nav_token: y,
        accepted: () => {
          l && (H = !0);
        },
        blocked: () => {},
        type: "goto",
      })
    );
  }
  async function Le(e) {
    return (
      (_ = {
        id: e.id,
        promise: pe(e).then(
          (t) => (t.type === "loaded" && t.state.error && (_ = null), t)
        ),
      }),
      _.promise
    );
  }
  async function re(...e) {
    const r = d
      .filter((a) => e.some((c) => a.exec(c)))
      .map((a) => Promise.all([...a.layouts, a.leaf].map((c) => c?.[1]())));
    await Promise.all(r);
  }
  function Pe(e) {
    p = e.state;
    const t = document.querySelector("style[data-sveltekit]");
    t && t.remove(),
      (q = e.props.page),
      (K = new n.root({
        target: s,
        props: { ...e.props, stores: F, components: i },
        hydrate: !0,
      })),
      Ae(U);
    const r = {
      from: null,
      to: {
        params: p.params,
        route: { id: p.route?.id ?? null },
        url: new URL(location.href),
      },
      willUnload: !1,
      type: "enter",
      complete: Promise.resolve(),
    };
    h.after_navigate.forEach((a) => a(r)), (I = !0);
  }
  async function Y({
    url: e,
    params: t,
    branch: r,
    status: a,
    error: c,
    route: l,
    form: w,
  }) {
    let y = "never";
    for (const m of r) m?.slash !== void 0 && (y = m.slash);
    (e.pathname = We(e.pathname, y)), (e.search = e.search);
    const k = {
      type: "loaded",
      state: { url: e, params: t, branch: r, error: c, route: l },
      props: { constructors: yt(r).map((m) => m.node.component) },
    };
    w !== void 0 && (k.props.form = w);
    let v = {},
      A = !q,
      g = 0;
    for (let m = 0; m < Math.max(r.length, p.branch.length); m += 1) {
      const x = r[m],
        M = p.branch[m];
      x?.data !== M?.data && (A = !0),
        x &&
          ((v = { ...v, ...x.data }),
          A && (k.props[`data_${g}`] = v),
          (g += 1));
    }
    return (
      (!p.url ||
        e.href !== p.url.href ||
        p.error !== c ||
        (w !== void 0 && w !== q.form) ||
        A) &&
        (k.props.page = {
          error: c,
          params: t,
          route: { id: l?.id ?? null },
          status: a,
          url: new URL(e),
          form: w ?? null,
          data: A ? v : q.data,
        }),
      k
    );
  }
  async function ue({
    loader: e,
    parent: t,
    url: r,
    params: a,
    route: c,
    server_data_node: l,
  }) {
    let w = null;
    const y = {
        dependencies: new Set(),
        params: new Set(),
        parent: !1,
        route: !1,
        url: !1,
      },
      k = await e();
    if (k.universal?.load) {
      let v = function (...g) {
        for (const S of g) {
          const { href: m } = new URL(S, r);
          y.dependencies.add(m);
        }
      };
      const A = {
        route: new Proxy(c, { get: (g, S) => ((y.route = !0), g[S]) }),
        params: new Proxy(a, { get: (g, S) => (y.params.add(S), g[S]) }),
        data: l?.data ?? null,
        url: Qe(r, () => {
          y.url = !0;
        }),
        async fetch(g, S) {
          let m;
          g instanceof Request
            ? ((m = g.url),
              (S = {
                body:
                  g.method === "GET" || g.method === "HEAD"
                    ? void 0
                    : await g.blob(),
                cache: g.cache,
                credentials: g.credentials,
                headers: g.headers,
                integrity: g.integrity,
                keepalive: g.keepalive,
                method: g.method,
                mode: g.mode,
                redirect: g.redirect,
                referrer: g.referrer,
                referrerPolicy: g.referrerPolicy,
                signal: g.signal,
                ...S,
              }))
            : (m = g);
          const x = new URL(m, r);
          return (
            v(x.href),
            x.origin === r.origin && (m = x.href.slice(r.origin.length)),
            I ? ot(m, x.href, S) : rt(m, S)
          );
        },
        setHeaders: () => {},
        depends: v,
        parent() {
          return (y.parent = !0), t();
        },
      };
      (w = (await k.universal.load.call(null, A)) ?? null),
        (w = w ? await bt(w) : null);
    }
    return {
      node: k,
      loader: e,
      server: l,
      universal: k.universal?.load ? { type: "data", data: w, uses: y } : null,
      data: w ?? l?.data ?? null,
      slash: k.universal?.trailingSlash ?? l?.slash,
    };
  }
  function Oe(e, t, r, a, c) {
    if (H) return !0;
    if (!a) return !1;
    if ((a.parent && e) || (a.route && t) || (a.url && r)) return !0;
    for (const l of a.params) if (c[l] !== p.params[l]) return !0;
    for (const l of a.dependencies) if (E.some((w) => w(new URL(l)))) return !0;
    return !1;
  }
  function de(e, t) {
    return e?.type === "data" ? e : e?.type === "skip" ? t ?? null : null;
  }
  async function pe({ id: e, invalidating: t, url: r, params: a, route: c }) {
    if (_?.id === e) return _.promise;
    const { errors: l, layouts: w, leaf: y } = c,
      k = [...w, y];
    l.forEach((R) => R?.().catch(() => {})),
      k.forEach((R) => R?.[1]().catch(() => {}));
    let v = null;
    const A = p.url ? e !== p.url.pathname + p.url.search : !1,
      g = p.route ? c.id !== p.route.id : !1;
    let S = !1;
    const m = k.map((R, N) => {
      const $ = p.branch[N],
        T = !!R?.[0] && ($?.loader !== R[1] || Oe(S, g, A, $.server?.uses, a));
      return T && (S = !0), T;
    });
    if (m.some(Boolean)) {
      try {
        v = await Me(r, m);
      } catch (R) {
        return oe({
          status: R instanceof te ? R.status : 500,
          error: await Z(R, { url: r, params: a, route: { id: c.id } }),
          url: r,
          route: c,
        });
      }
      if (v.type === "redirect") return v;
    }
    const x = v?.nodes;
    let M = !1;
    const L = k.map(async (R, N) => {
      if (!R) return;
      const $ = p.branch[N],
        T = x?.[N];
      if (
        (!T || T.type === "skip") &&
        R[1] === $?.loader &&
        !Oe(M, g, A, $.universal?.uses, a)
      )
        return $;
      if (((M = !0), T?.type === "error")) throw T;
      return ue({
        loader: R[1],
        url: r,
        params: a,
        route: c,
        parent: async () => {
          const he = {};
          for (let _e = 0; _e < N; _e += 1)
            Object.assign(he, (await L[_e])?.data);
          return he;
        },
        server_data_node: de(
          T === void 0 && R[0] ? { type: "skip" } : T ?? null,
          R[0] ? $?.server : void 0
        ),
      });
    });
    for (const R of L) R.catch(() => {});
    const j = [];
    for (let R = 0; R < k.length; R += 1)
      if (k[R])
        try {
          j.push(await L[R]);
        } catch (N) {
          if (N instanceof De)
            return { type: "redirect", location: N.location };
          let $ = 500,
            T;
          if (x?.includes(N)) ($ = N.status ?? $), (T = N.error);
          else if (N instanceof te) ($ = N.status), (T = N.body);
          else {
            if (await F.updated.check()) return await J(r);
            T = await Z(N, { params: a, url: r, route: { id: c.id } });
          }
          const ce = await Ue(R, j, l);
          return ce
            ? await Y({
                url: r,
                params: a,
                branch: j.slice(0, ce.idx).concat(ce.node),
                status: $,
                error: T,
                route: c,
              })
            : await je(r, { id: c.id }, T, $);
        }
      else j.push(void 0);
    return await Y({
      url: r,
      params: a,
      branch: j,
      status: 200,
      error: null,
      route: c,
      form: t ? void 0 : null,
    });
  }
  async function Ue(e, t, r) {
    for (; e--; )
      if (r[e]) {
        let a = e;
        for (; !t[a]; ) a -= 1;
        try {
          return {
            idx: a + 1,
            node: {
              node: await r[e](),
              loader: r[e],
              data: {},
              server: null,
              universal: null,
            },
          };
        } catch {
          continue;
        }
      }
  }
  async function oe({ status: e, error: t, url: r, route: a }) {
    const c = {};
    let l = null;
    if (n.server_loads[0] === 0)
      try {
        const v = await Me(r, [!0]);
        if (v.type !== "data" || (v.nodes[0] && v.nodes[0].type !== "data"))
          throw 0;
        l = v.nodes[0] ?? null;
      } catch {
        (r.origin !== location.origin ||
          r.pathname !== location.pathname ||
          P) &&
          (await J(r));
      }
    const y = await ue({
        loader: o,
        url: r,
        params: c,
        route: a,
        parent: () => Promise.resolve({}),
        server_data_node: de(l),
      }),
      k = {
        node: await u(),
        loader: u,
        universal: null,
        server: null,
        data: null,
      };
    return await Y({
      url: r,
      params: c,
      branch: [y, k],
      status: e,
      error: t,
      route: null,
    });
  }
  function X(e, t) {
    if (ye(e, B)) return;
    const r = se(e);
    for (const a of d) {
      const c = a.exec(r);
      if (c)
        return {
          id: e.pathname + e.search,
          invalidating: t,
          route: a,
          params: Xe(c),
          url: e,
        };
    }
  }
  function se(e) {
    return Ye(e.pathname.slice(B.length) || "/");
  }
  function xe({ url: e, type: t, intent: r, delta: a }) {
    let c = !1;
    const l = Ve(p, r, e, t);
    a !== void 0 && (l.navigation.delta = a);
    const w = {
      ...l.navigation,
      cancel: () => {
        (c = !0), l.reject(new Error("navigation was cancelled"));
      },
    };
    return D || h.before_navigate.forEach((y) => y(w)), c ? null : l;
  }
  async function ie({
    url: e,
    scroll: t,
    keepfocus: r,
    redirect_count: a,
    details: c,
    type: l,
    delta: w,
    nav_token: y = {},
    accepted: k,
    blocked: v,
  }) {
    const A = X(e, !1),
      g = xe({ url: e, type: l, delta: w, intent: A });
    if (!g) {
      v();
      return;
    }
    const S = U;
    k(), (D = !0), I && F.navigating.set(g.navigation), (z = y);
    let m = A && (await pe(A));
    if (!m) {
      if (ye(e, B)) return await J(e);
      m = await je(
        e,
        { id: null },
        await Z(new Error(`Not found: ${e.pathname}`), {
          url: e,
          params: {},
          route: { id: null },
        }),
        404
      );
    }
    if (((e = A?.url || e), z !== y))
      return g.reject(new Error("navigation was aborted")), !1;
    if (m.type === "redirect")
      if (a >= 20)
        m = await oe({
          status: 500,
          error: await Z(new Error("Redirect loop"), {
            url: e,
            params: {},
            route: { id: null },
          }),
          url: e,
          route: { id: null },
        });
      else return ae(new URL(m.location, e).href, {}, a + 1, y), !1;
    else
      m.props.page?.status >= 400 && (await F.updated.check()) && (await J(e));
    if (
      ((E.length = 0),
      (H = !1),
      (O = !0),
      be(S),
      Re(S),
      m.props.page?.url &&
        m.props.page.url.pathname !== e.pathname &&
        (e.pathname = m.props.page?.url.pathname),
      c)
    ) {
      const L = c.replaceState ? 0 : 1;
      if (
        ((c.state[C] = U += L),
        history[c.replaceState ? "replaceState" : "pushState"](c.state, "", e),
        !c.replaceState)
      ) {
        let j = U + 1;
        for (; Q[j] || G[j]; ) delete Q[j], delete G[j], (j += 1);
      }
    }
    if (((_ = null), I)) {
      (p = m.state), m.props.page && (m.props.page.url = e);
      const L = (
        await Promise.all(h.on_navigate.map((j) => j(g.navigation)))
      ).filter((j) => typeof j == "function");
      if (L.length > 0) {
        let j = function () {
          h.after_navigate = h.after_navigate.filter((R) => !L.includes(R));
        };
        L.push(j), h.after_navigate.push(...L);
      }
      K.$set(m.props);
    } else Pe(m);
    const { activeElement: x } = document;
    if ((await me(), b)) {
      const L =
        e.hash && document.getElementById(decodeURIComponent(e.hash.slice(1)));
      t ? scrollTo(t.x, t.y) : L ? L.scrollIntoView() : scrollTo(0, 0);
    }
    const M =
      document.activeElement !== x && document.activeElement !== document.body;
    !r && !M && Ee(),
      (b = !0),
      m.props.page && (q = m.props.page),
      (D = !1),
      l === "popstate" && Ae(U),
      g.fulfil(void 0),
      h.after_navigate.forEach((L) => L(g.navigation)),
      F.navigating.set(null),
      (O = !1);
  }
  async function je(e, t, r, a) {
    return e.origin === location.origin &&
      e.pathname === location.pathname &&
      !P
      ? await oe({ status: a, error: r, url: e, route: t })
      : await J(e);
  }
  function J(e) {
    return (location.href = e.href), new Promise(() => {});
  }
  function ze() {
    let e;
    f.addEventListener("mousemove", (l) => {
      const w = l.target;
      clearTimeout(e),
        (e = setTimeout(() => {
          a(w, 2);
        }, 20));
    });
    function t(l) {
      a(l.composedPath()[0], 1);
    }
    f.addEventListener("mousedown", t),
      f.addEventListener("touchstart", t, { passive: !0 });
    const r = new IntersectionObserver(
      (l) => {
        for (const w of l)
          w.isIntersecting &&
            (re(se(new URL(w.target.href))), r.unobserve(w.target));
      },
      { threshold: 0 }
    );
    function a(l, w) {
      const y = Te(l, f);
      if (!y) return;
      const { url: k, external: v, download: A } = we(y, B);
      if (v || A) return;
      const g = le(y);
      if (!g.reload)
        if (w <= g.preload_data) {
          const S = X(k, !1);
          S && Le(S);
        } else w <= g.preload_code && re(se(k));
    }
    function c() {
      r.disconnect();
      for (const l of f.querySelectorAll("a")) {
        const { url: w, external: y, download: k } = we(l, B);
        if (y || k) continue;
        const v = le(l);
        v.reload ||
          (v.preload_code === $e.viewport && r.observe(l),
          v.preload_code === $e.eager && re(se(w)));
      }
    }
    h.after_navigate.push(c), c();
  }
  function Z(e, t) {
    return e instanceof te
      ? e.body
      : n.hooks.handleError({ error: e, event: t }) ?? {
          message: t.route.id != null ? "Internal Error" : "Not Found",
        };
  }
  return {
    after_navigate: (e) => {
      ge(
        () => (
          h.after_navigate.push(e),
          () => {
            const t = h.after_navigate.indexOf(e);
            h.after_navigate.splice(t, 1);
          }
        )
      );
    },
    before_navigate: (e) => {
      ge(
        () => (
          h.before_navigate.push(e),
          () => {
            const t = h.before_navigate.indexOf(e);
            h.before_navigate.splice(t, 1);
          }
        )
      );
    },
    on_navigate: (e) => {
      ge(
        () => (
          h.on_navigate.push(e),
          () => {
            const t = h.on_navigate.indexOf(e);
            h.on_navigate.splice(t, 1);
          }
        )
      );
    },
    disable_scroll_handling: () => {
      (O || !I) && (b = !1);
    },
    goto: (e, t = {}) => ae(e, t, 0),
    invalidate: (e) => {
      if (typeof e == "function") E.push(e);
      else {
        const { href: t } = new URL(e, location.href);
        E.push((r) => r.href === t);
      }
      return Se();
    },
    invalidate_all: () => ((H = !0), Se()),
    preload_data: async (e) => {
      const t = new URL(e, Ne(document)),
        r = X(t, !1);
      if (!r)
        throw new Error(
          `Attempted to preload a URL that does not belong to this app: ${t}`
        );
      await Le(r);
    },
    preload_code: re,
    apply_action: async (e) => {
      if (e.type === "error") {
        const t = new URL(location.href),
          { branch: r, route: a } = p;
        if (!a) return;
        const c = await Ue(p.branch.length, r, a.errors);
        if (c) {
          const l = await Y({
            url: t,
            params: p.params,
            branch: r.slice(0, c.idx).concat(c.node),
            status: e.status ?? 500,
            error: e.error,
            route: a,
          });
          (p = l.state), K.$set(l.props), me().then(Ee);
        }
      } else
        e.type === "redirect"
          ? ae(e.location, { invalidateAll: !0 }, 0)
          : (K.$set({
              form: null,
              page: { ...q, form: e.data, status: e.status },
            }),
            await me(),
            K.$set({ form: e.data }),
            e.type === "success" && Ee());
    },
    _start_router: () => {
      (history.scrollRestoration = "manual"),
        addEventListener("beforeunload", (t) => {
          let r = !1;
          if ((Ie(), !D)) {
            const a = Ve(p, void 0, null, "leave"),
              c = {
                ...a.navigation,
                cancel: () => {
                  (r = !0), a.reject(new Error("navigation was cancelled"));
                },
              };
            h.before_navigate.forEach((l) => l(c));
          }
          r
            ? (t.preventDefault(), (t.returnValue = ""))
            : (history.scrollRestoration = "auto");
        }),
        addEventListener("visibilitychange", () => {
          document.visibilityState === "hidden" && Ie();
        }),
        navigator.connection?.saveData || ze(),
        f.addEventListener("click", (t) => {
          if (
            t.button ||
            t.which !== 1 ||
            t.metaKey ||
            t.ctrlKey ||
            t.shiftKey ||
            t.altKey ||
            t.defaultPrevented
          )
            return;
          const r = Te(t.composedPath()[0], f);
          if (!r) return;
          const { url: a, external: c, target: l, download: w } = we(r, B);
          if (!a) return;
          if (l === "_parent" || l === "_top") {
            if (window.parent !== window) return;
          } else if (l && l !== "_self") return;
          const y = le(r);
          if (
            (!(r instanceof SVGAElement) &&
              a.protocol !== location.protocol &&
              !(a.protocol === "https:" || a.protocol === "http:")) ||
            w
          )
            return;
          if (c || y.reload) {
            xe({ url: a, type: "link" }) ? (D = !0) : t.preventDefault();
            return;
          }
          const [v, A] = a.href.split("#");
          if (A !== void 0 && v === location.href.split("#")[0]) {
            if (p.url.hash === a.hash) {
              t.preventDefault(),
                r.ownerDocument.getElementById(A)?.scrollIntoView();
              return;
            }
            if (((V = !0), be(U), e(a), !y.replace_state)) return;
            (V = !1), t.preventDefault();
          }
          ie({
            url: a,
            scroll: y.noscroll ? ee() : null,
            keepfocus: y.keep_focus ?? !1,
            redirect_count: 0,
            details: {
              state: {},
              replaceState: y.replace_state ?? a.href === location.href,
            },
            accepted: () => t.preventDefault(),
            blocked: () => t.preventDefault(),
            type: "link",
          });
        }),
        f.addEventListener("submit", (t) => {
          if (t.defaultPrevented) return;
          const r = HTMLFormElement.prototype.cloneNode.call(t.target),
            a = t.submitter;
          if ((a?.formMethod || r.method) !== "get") return;
          const l = new URL(
            (a?.hasAttribute("formaction") && a?.formAction) || r.action
          );
          if (ye(l, B)) return;
          const w = t.target,
            { keep_focus: y, noscroll: k, reload: v, replace_state: A } = le(w);
          if (v) return;
          t.preventDefault(), t.stopPropagation();
          const g = new FormData(w),
            S = a?.getAttribute("name");
          S && g.append(S, a?.getAttribute("value") ?? ""),
            (l.search = new URLSearchParams(g).toString()),
            ie({
              url: l,
              scroll: k ? ee() : null,
              keepfocus: y ?? !1,
              redirect_count: 0,
              details: {
                state: {},
                replaceState: A ?? l.href === location.href,
              },
              nav_token: {},
              accepted: () => {},
              blocked: () => {},
              type: "form",
            });
        }),
        addEventListener("popstate", async (t) => {
          if (((z = {}), t.state?.[C])) {
            if (t.state[C] === U) return;
            const r = G[t.state[C]],
              a = new URL(location.href);
            if (p.url.href.split("#")[0] === location.href.split("#")[0]) {
              e(a), (G[U] = ee()), (U = t.state[C]), scrollTo(r.x, r.y);
              return;
            }
            const c = t.state[C] - U;
            await ie({
              url: a,
              scroll: r,
              keepfocus: !1,
              redirect_count: 0,
              details: null,
              accepted: () => {
                U = t.state[C];
              },
              blocked: () => {
                history.go(-c);
              },
              type: "popstate",
              delta: c,
              nav_token: z,
            });
          } else if (!V) {
            const r = new URL(location.href);
            e(r);
          }
        }),
        addEventListener("hashchange", () => {
          V &&
            ((V = !1),
            history.replaceState(
              { ...history.state, [C]: ++U },
              "",
              location.href
            ));
        });
      for (const t of document.querySelectorAll("link"))
        t.rel === "icon" && (t.href = t.href);
      addEventListener("pageshow", (t) => {
        t.persisted && F.navigating.set(null);
      });
      function e(t) {
        (p.url = t), F.page.set({ ...q, url: t }), F.page.notify();
      }
    },
    _hydrate: async ({
      status: e = 200,
      error: t,
      node_ids: r,
      params: a,
      route: c,
      data: l,
      form: w,
    }) => {
      P = !0;
      const y = new URL(location.href);
      ({ params: a = {}, route: c = { id: null } } = X(y, !1) || {});
      let k;
      try {
        const v = r.map(async (S, m) => {
            const x = l[m];
            return (
              x?.uses && (x.uses = Ke(x.uses)),
              ue({
                loader: n.nodes[S],
                url: y,
                params: a,
                route: c,
                parent: async () => {
                  const M = {};
                  for (let L = 0; L < m; L += 1)
                    Object.assign(M, (await v[L]).data);
                  return M;
                },
                server_data_node: de(x),
              })
            );
          }),
          A = await Promise.all(v),
          g = d.find(({ id: S }) => S === c.id);
        if (g) {
          const S = g.layouts;
          for (let m = 0; m < S.length; m++) S[m] || A.splice(m, 0, void 0);
        }
        k = await Y({
          url: y,
          params: a,
          branch: A,
          status: e,
          error: t,
          form: w,
          route: g ?? null,
        });
      } catch (v) {
        if (v instanceof De) {
          await J(new URL(v.location, location.href));
          return;
        }
        k = await oe({
          status: v instanceof te ? v.status : 500,
          error: await Z(v, { url: y, params: a, route: c }),
          url: y,
          route: c,
        });
      }
      Pe(k);
    },
  };
}
async function Me(n, s) {
  const d = new URL(n);
  (d.pathname = nt(n.pathname)),
    n.pathname.endsWith("/") && d.searchParams.append(kt, "1"),
    d.searchParams.append(Et, s.map((u) => (u ? "1" : "0")).join(""));
  const o = await He(d.href);
  if (!o.ok) throw new te(o.status, await o.json());
  return new Promise(async (u) => {
    const f = new Map(),
      E = o.body.getReader(),
      i = new TextDecoder();
    function _(p) {
      return wt(p, {
        Promise: (P) =>
          new Promise((I, b) => {
            f.set(P, { fulfil: I, reject: b });
          }),
      });
    }
    let h = "";
    for (;;) {
      const { done: p, value: P } = await E.read();
      if (p && !h) break;
      for (
        h +=
          !P && h
            ? `
`
            : i.decode(P);
        ;

      ) {
        const I = h.indexOf(`
`);
        if (I === -1) break;
        const b = JSON.parse(h.slice(0, I));
        if (((h = h.slice(I + 1)), b.type === "redirect")) return u(b);
        if (b.type === "data")
          b.nodes?.forEach((O) => {
            O?.type === "data" && ((O.uses = Ke(O.uses)), (O.data = _(O.data)));
          }),
            u(b);
        else if (b.type === "chunk") {
          const { id: O, data: D, error: V } = b,
            H = f.get(O);
          f.delete(O), V ? H.reject(_(V)) : H.fulfil(_(D));
        }
      }
    }
  });
}
function Ke(n) {
  return {
    dependencies: new Set(n?.dependencies ?? []),
    params: new Set(n?.params ?? []),
    parent: !!n?.parent,
    route: !!n?.route,
    url: !!n?.url,
  };
}
function Ee() {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const s = document.body,
      d = s.getAttribute("tabindex");
    (s.tabIndex = -1),
      s.focus({ preventScroll: !0, focusVisible: !1 }),
      d !== null
        ? s.setAttribute("tabindex", d)
        : s.removeAttribute("tabindex");
    const o = getSelection();
    if (o && o.type !== "None") {
      const u = [];
      for (let f = 0; f < o.rangeCount; f += 1) u.push(o.getRangeAt(f));
      setTimeout(() => {
        if (o.rangeCount === u.length) {
          for (let f = 0; f < o.rangeCount; f += 1) {
            const E = u[f],
              i = o.getRangeAt(f);
            if (
              E.commonAncestorContainer !== i.commonAncestorContainer ||
              E.startContainer !== i.startContainer ||
              E.endContainer !== i.endContainer ||
              E.startOffset !== i.startOffset ||
              E.endOffset !== i.endOffset
            )
              return;
          }
          o.removeAllRanges();
        }
      });
    }
  }
}
function Ve(n, s, d, o) {
  let u, f;
  const E = new Promise((_, h) => {
    (u = _), (f = h);
  });
  return (
    E.catch(() => {}),
    {
      navigation: {
        from: {
          params: n.params,
          route: { id: n.route?.id ?? null },
          url: n.url,
        },
        to: d && {
          params: s?.params ?? null,
          route: { id: s?.route?.id ?? null },
          url: d,
        },
        willUnload: !s,
        type: o,
        complete: E,
      },
      fulfil: u,
      reject: f,
    }
  );
}
async function Lt(n, s, d) {
  const o = St(n, s);
  Je({ client: o }),
    d ? await o._hydrate(d) : o.goto(location.href, { replaceState: !0 }),
    o._start_router();
}
export { Lt as start };
