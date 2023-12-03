import { o as _e, t as me } from "../chunks/index.a8c54947.js";
import {
  f as $e,
  e as B,
  I as C,
  P as De,
  d as F,
  S as Fe,
  a as He,
  g as Ne,
  o as Te,
  h as We,
  s as ee,
  c as le,
  b as we,
  i as ye,
} from "../chunks/singletons.fdfa7ed0.js";
function Ye(n, s) {
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
function Xe(n) {
  return n.split("%25").map(decodeURI).join("%25");
}
function Ze(n) {
  for (const s in n) n[s] = decodeURIComponent(n[s]);
  return n;
}
const Qe = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function et(n, s) {
  const f = new URL(n);
  for (const o of Qe)
    Object.defineProperty(f, o, {
      get() {
        return s(), n[o];
      },
      enumerable: !0,
      configurable: !0,
    });
  return tt(f), f;
}
function tt(n) {
  Object.defineProperty(n, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    },
  });
}
const nt = "/__data.json";
function at(n) {
  return n.replace(/\/$/, "") + nt;
}
function rt(...n) {
  let s = 5381;
  for (const f of n)
    if (typeof f == "string") {
      let o = f.length;
      for (; o; ) s = (s * 33) ^ f.charCodeAt(--o);
    } else if (ArrayBuffer.isView(f)) {
      const o = new Uint8Array(f.buffer, f.byteOffset, f.byteLength);
      let d = o.length;
      for (; d; ) s = (s * 33) ^ o[--d];
    } else throw new TypeError("value must be a string or TypedArray");
  return (s >>> 0).toString(36);
}
const Be = window.fetch;
window.fetch = (n, s) => (
  (n instanceof Request ? n.method : s?.method || "GET") !== "GET" &&
    ne.delete(Se(n)),
  Be(n, s)
);
const ne = new Map();
function ot(n, s) {
  const f = Se(n, s),
    o = document.querySelector(f);
  if (o?.textContent) {
    const { body: d, ...u } = JSON.parse(o.textContent),
      E = o.getAttribute("data-ttl");
    return (
      E && ne.set(f, { body: d, init: u, ttl: 1e3 * Number(E) }),
      Promise.resolve(new Response(d, u))
    );
  }
  return window.fetch(n, s);
}
function st(n, s, f) {
  if (ne.size > 0) {
    const o = Se(n, f),
      d = ne.get(o);
    if (d) {
      if (
        performance.now() < d.ttl &&
        ["default", "force-cache", "only-if-cached", void 0].includes(f?.cache)
      )
        return new Response(d.body, d.init);
      ne.delete(o);
    }
  }
  return window.fetch(s, f);
}
function Se(n, s) {
  let o = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
    n instanceof Request ? n.url : n
  )}]`;
  if (s?.headers || s?.body) {
    const d = [];
    s.headers && d.push([...new Headers(s.headers)].join(",")),
      s.body &&
        (typeof s.body == "string" || ArrayBuffer.isView(s.body)) &&
        d.push(s.body),
      (o += `[data-hash="${rt(...d)}"]`);
  }
  return o;
}
const it = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function ct(n) {
  const s = [];
  return {
    pattern:
      n === "/"
        ? /^\/$/
        : new RegExp(
            `^${ft(n)
              .map((o) => {
                const d = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);
                if (d)
                  return (
                    s.push({
                      name: d[1],
                      matcher: d[2],
                      optional: !1,
                      rest: !0,
                      chained: !0,
                    }),
                    "(?:/(.*))?"
                  );
                const u = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);
                if (u)
                  return (
                    s.push({
                      name: u[1],
                      matcher: u[2],
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
                  E.map((g, h) => {
                    if (h % 2) {
                      if (g.startsWith("x+"))
                        return ve(
                          String.fromCharCode(parseInt(g.slice(2), 16))
                        );
                      if (g.startsWith("u+"))
                        return ve(
                          String.fromCharCode(
                            ...g
                              .slice(2)
                              .split("-")
                              .map((D) => parseInt(D, 16))
                          )
                        );
                      const p = it.exec(g);
                      if (!p)
                        throw new Error(
                          `Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`
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
                    return ve(g);
                  }).join("")
                );
              })
              .join("")}/?$`
          ),
    params: s,
  };
}
function lt(n) {
  return !/^\([^)]+\)$/.test(n);
}
function ft(n) {
  return n.slice(1).split("/").filter(lt);
}
function ut(n, s, f) {
  const o = {},
    d = n.slice(1),
    u = d.filter((i) => i !== void 0);
  let E = 0;
  for (let i = 0; i < s.length; i += 1) {
    const g = s[i];
    let h = d[i - E];
    if (
      (g.chained &&
        g.rest &&
        E &&
        ((h = d
          .slice(i - E, i + 1)
          .filter((p) => p)
          .join("/")),
        (E = 0)),
      h === void 0)
    ) {
      g.rest && (o[g.name] = "");
      continue;
    }
    if (!g.matcher || f[g.matcher](h)) {
      o[g.name] = h;
      const p = s[i + 1],
        P = d[i + 1];
      p && !p.rest && p.optional && P && g.chained && (E = 0),
        !p && !P && Object.keys(o).length === u.length && (E = 0);
      continue;
    }
    if (g.optional && g.chained) {
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
function dt({ nodes: n, server_loads: s, dictionary: f, matchers: o }) {
  const d = new Set(s);
  return Object.entries(f).map(([i, [g, h, p]]) => {
    const { pattern: P, params: I } = ct(i),
      b = {
        id: i,
        exec: (O) => {
          const D = P.exec(O);
          if (D) return ut(D, I, o);
        },
        errors: [1, ...(p || [])].map((O) => n[O]),
        layouts: [0, ...(h || [])].map(E),
        leaf: u(g),
      };
    return (
      (b.errors.length = b.layouts.length =
        Math.max(b.errors.length, b.layouts.length)),
      b
    );
  });
  function u(i) {
    const g = i < 0;
    return g && (i = ~i), [g, n[i]];
  }
  function E(i) {
    return i === void 0 ? i : [d.has(i), n[i]];
  }
}
function Ge(n) {
  try {
    return JSON.parse(sessionStorage[n]);
  } catch {}
}
function Ce(n, s) {
  const f = JSON.stringify(s);
  try {
    sessionStorage[n] = f;
  } catch {}
}
const pt = -1,
  ht = -2,
  gt = -3,
  _t = -4,
  mt = -5,
  wt = -6;
function yt(n, s) {
  if (typeof n == "number") return d(n, !0);
  if (!Array.isArray(n) || n.length === 0) throw new Error("Invalid input");
  const f = n,
    o = Array(f.length);
  function d(u, E = !1) {
    if (u === pt) return;
    if (u === gt) return NaN;
    if (u === _t) return 1 / 0;
    if (u === mt) return -1 / 0;
    if (u === wt) return -0;
    if (E) throw new Error("Invalid input");
    if (u in o) return o[u];
    const i = f[u];
    if (!i || typeof i != "object") o[u] = i;
    else if (Array.isArray(i))
      if (typeof i[0] == "string") {
        const g = i[0],
          h = s?.[g];
        if (h) return (o[u] = h(d(i[1])));
        switch (g) {
          case "Date":
            o[u] = new Date(i[1]);
            break;
          case "Set":
            const p = new Set();
            o[u] = p;
            for (let b = 1; b < i.length; b += 1) p.add(d(i[b]));
            break;
          case "Map":
            const P = new Map();
            o[u] = P;
            for (let b = 1; b < i.length; b += 2) P.set(d(i[b]), d(i[b + 1]));
            break;
          case "RegExp":
            o[u] = new RegExp(i[1], i[2]);
            break;
          case "Object":
            o[u] = Object(i[1]);
            break;
          case "BigInt":
            o[u] = BigInt(i[1]);
            break;
          case "null":
            const I = Object.create(null);
            o[u] = I;
            for (let b = 1; b < i.length; b += 2) I[i[b]] = d(i[b + 1]);
            break;
          default:
            throw new Error(`Unknown type ${g}`);
        }
      } else {
        const g = new Array(i.length);
        o[u] = g;
        for (let h = 0; h < i.length; h += 1) {
          const p = i[h];
          p !== ht && (g[h] = d(p));
        }
      }
    else {
      const g = {};
      o[u] = g;
      for (const h in i) {
        const p = i[h];
        g[h] = d(p);
      }
    }
    return o[u];
  }
  return d(0);
}
function vt(n) {
  return n.filter((s) => s != null);
}
const Je = new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config",
]);
[...Je];
const bt = new Set([...Je]);
[...bt];
async function Et(n) {
  for (const s in n)
    if (typeof n[s]?.then == "function")
      return Object.fromEntries(
        await Promise.all(Object.entries(n).map(async ([f, o]) => [f, await o]))
      );
  return n;
}
class te {
  constructor(s, f) {
    (this.status = s),
      typeof f == "string"
        ? (this.body = { message: f })
        : f
        ? (this.body = f)
        : (this.body = { message: `Error: ${s}` });
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class Me {
  constructor(s, f) {
    (this.status = s), (this.location = f);
  }
}
const St = "x-sveltekit-invalidated",
  kt = "x-sveltekit-trailing-slash",
  G = Ge(Fe) ?? {},
  Q = Ge(He) ?? {};
function be(n) {
  G[n] = ee();
}
function J(n) {
  return (location.href = n.href), new Promise(() => {});
}
function Rt(n, s) {
  const f = dt(n),
    o = n.nodes[0],
    d = n.nodes[1];
  o(), d();
  const u = document.documentElement,
    E = [],
    i = [];
  let g = null;
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
    x = history.state?.[C];
  x ||
    ((x = Date.now()),
    history.replaceState({ ...history.state, [C]: x }, "", location.href));
  const fe = G[x];
  fe && ((history.scrollRestoration = "manual"), scrollTo(fe.x, fe.y));
  let q, z, W;
  async function ke() {
    if (((W = W || Promise.resolve()), await W, !W)) return;
    W = null;
    const e = new URL(location.href),
      t = X(e, !0);
    g = null;
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
    be(x), Ce(Fe, G), Re(x), Ce(He, Q);
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
      (g = {
        id: e.id,
        promise: pe(e).then(
          (t) => (t.type === "loaded" && t.state.error && (g = null), t)
        ),
      }),
      g.promise
    );
  }
  async function re(...e) {
    const r = f
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
      Ae(x);
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
    (e.pathname = Ye(e.pathname, y)), (e.search = e.search);
    const S = {
      type: "loaded",
      state: { url: e, params: t, branch: r, error: c, route: l },
      props: { constructors: vt(r).map((m) => m.node.component) },
    };
    w !== void 0 && (S.props.form = w);
    let v = {},
      A = !q,
      _ = 0;
    for (let m = 0; m < Math.max(r.length, p.branch.length); m += 1) {
      const U = r[m],
        M = p.branch[m];
      U?.data !== M?.data && (A = !0),
        U &&
          ((v = { ...v, ...U.data }),
          A && (S.props[`data_${_}`] = v),
          (_ += 1));
    }
    return (
      (!p.url ||
        e.href !== p.url.href ||
        p.error !== c ||
        (w !== void 0 && w !== q.form) ||
        A) &&
        (S.props.page = {
          error: c,
          params: t,
          route: { id: l?.id ?? null },
          status: a,
          url: new URL(e),
          form: w ?? null,
          data: A ? v : q.data,
        }),
      S
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
      S = await e();
    if (S.universal?.load) {
      let v = function (..._) {
        for (const k of _) {
          const { href: m } = new URL(k, r);
          y.dependencies.add(m);
        }
      };
      const A = {
        route: new Proxy(c, { get: (_, k) => ((y.route = !0), _[k]) }),
        params: new Proxy(a, { get: (_, k) => (y.params.add(k), _[k]) }),
        data: l?.data ?? null,
        url: et(r, () => {
          y.url = !0;
        }),
        async fetch(_, k) {
          let m;
          _ instanceof Request
            ? ((m = _.url),
              (k = {
                body:
                  _.method === "GET" || _.method === "HEAD"
                    ? void 0
                    : await _.blob(),
                cache: _.cache,
                credentials: _.credentials,
                headers: _.headers,
                integrity: _.integrity,
                keepalive: _.keepalive,
                method: _.method,
                mode: _.mode,
                redirect: _.redirect,
                referrer: _.referrer,
                referrerPolicy: _.referrerPolicy,
                signal: _.signal,
                ...k,
              }))
            : (m = _);
          const U = new URL(m, r);
          return (
            v(U.href),
            U.origin === r.origin && (m = U.href.slice(r.origin.length)),
            I ? st(m, U.href, k) : ot(m, k)
          );
        },
        setHeaders: () => {},
        depends: v,
        parent() {
          return (y.parent = !0), t();
        },
      };
      (w = (await S.universal.load.call(null, A)) ?? null),
        (w = w ? await Et(w) : null);
    }
    return {
      node: S,
      loader: e,
      server: l,
      universal: S.universal?.load ? { type: "data", data: w, uses: y } : null,
      data: w ?? l?.data ?? null,
      slash: S.universal?.trailingSlash ?? l?.slash,
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
    if (g?.id === e) return g.promise;
    const { errors: l, layouts: w, leaf: y } = c,
      S = [...w, y];
    l.forEach((R) => R?.().catch(() => {})),
      S.forEach((R) => R?.[1]().catch(() => {}));
    let v = null;
    const A = p.url ? e !== p.url.pathname + p.url.search : !1,
      _ = p.route ? c.id !== p.route.id : !1;
    let k = !1;
    const m = S.map((R, N) => {
      const T = p.branch[N],
        $ = !!R?.[0] && (T?.loader !== R[1] || Oe(k, _, A, T.server?.uses, a));
      return $ && (k = !0), $;
    });
    if (m.some(Boolean)) {
      try {
        v = await Ve(r, m);
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
    const U = v?.nodes;
    let M = !1;
    const L = S.map(async (R, N) => {
      if (!R) return;
      const T = p.branch[N],
        $ = U?.[N];
      if (
        (!$ || $.type === "skip") &&
        R[1] === T?.loader &&
        !Oe(M, _, A, T.universal?.uses, a)
      )
        return T;
      if (((M = !0), $?.type === "error")) throw $;
      return ue({
        loader: R[1],
        url: r,
        params: a,
        route: c,
        parent: async () => {
          const he = {};
          for (let ge = 0; ge < N; ge += 1)
            Object.assign(he, (await L[ge])?.data);
          return he;
        },
        server_data_node: de(
          $ === void 0 && R[0] ? { type: "skip" } : $ ?? null,
          R[0] ? T?.server : void 0
        ),
      });
    });
    for (const R of L) R.catch(() => {});
    const j = [];
    for (let R = 0; R < S.length; R += 1)
      if (S[R])
        try {
          j.push(await L[R]);
        } catch (N) {
          if (N instanceof Me)
            return { type: "redirect", location: N.location };
          let T = 500,
            $;
          if (U?.includes(N)) (T = N.status ?? T), ($ = N.error);
          else if (N instanceof te) (T = N.status), ($ = N.body);
          else {
            if (await F.updated.check()) return await J(r);
            $ = await Z(N, { params: a, url: r, route: { id: c.id } });
          }
          const ce = await xe(R, j, l);
          return ce
            ? await Y({
                url: r,
                params: a,
                branch: j.slice(0, ce.idx).concat(ce.node),
                status: T,
                error: $,
                route: c,
              })
            : await je(r, { id: c.id }, $, T);
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
  async function xe(e, t, r) {
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
        const v = await Ve(r, [!0]);
        if (v.type !== "data" || (v.nodes[0] && v.nodes[0].type !== "data"))
          throw 0;
        l = v.nodes[0] ?? null;
      } catch {
        (r.origin !== Te || r.pathname !== location.pathname || P) &&
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
      S = {
        node: await d(),
        loader: d,
        universal: null,
        server: null,
        data: null,
      };
    return await Y({
      url: r,
      params: c,
      branch: [y, S],
      status: e,
      error: t,
      route: null,
    });
  }
  function X(e, t) {
    if (ye(e, B)) return;
    const r = se(e);
    for (const a of f) {
      const c = a.exec(r);
      if (c)
        return {
          id: e.pathname + e.search,
          invalidating: t,
          route: a,
          params: Ze(c),
          url: e,
        };
    }
  }
  function se(e) {
    return Xe(e.pathname.slice(B.length) || "/");
  }
  function Ue({ url: e, type: t, intent: r, delta: a }) {
    let c = !1;
    const l = qe(p, r, e, t);
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
    accepted: S,
    blocked: v,
  }) {
    const A = X(e, !1),
      _ = Ue({ url: e, type: l, delta: w, intent: A });
    if (!_) {
      v();
      return;
    }
    const k = x;
    S(), (D = !0), I && F.navigating.set(_.navigation), (z = y);
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
      return _.reject(new Error("navigation was aborted")), !1;
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
      be(k),
      Re(k),
      m.props.page?.url &&
        m.props.page.url.pathname !== e.pathname &&
        (e.pathname = m.props.page?.url.pathname),
      c)
    ) {
      const L = c.replaceState ? 0 : 1;
      if (
        ((c.state[C] = x += L),
        history[c.replaceState ? "replaceState" : "pushState"](c.state, "", e),
        !c.replaceState)
      ) {
        let j = x + 1;
        for (; Q[j] || G[j]; ) delete Q[j], delete G[j], (j += 1);
      }
    }
    if (((g = null), I)) {
      (p = m.state), m.props.page && (m.props.page.url = e);
      const L = (
        await Promise.all(h.on_navigate.map((j) => j(_.navigation)))
      ).filter((j) => typeof j == "function");
      if (L.length > 0) {
        let j = function () {
          h.after_navigate = h.after_navigate.filter((R) => !L.includes(R));
        };
        L.push(j), h.after_navigate.push(...L);
      }
      K.$set(m.props);
    } else Pe(m);
    const { activeElement: U } = document;
    if ((await me(), b)) {
      const L =
        e.hash && document.getElementById(decodeURIComponent(e.hash.slice(1)));
      t ? scrollTo(t.x, t.y) : L ? L.scrollIntoView() : scrollTo(0, 0);
    }
    const M =
      document.activeElement !== U && document.activeElement !== document.body;
    !r && !M && Ee(),
      (b = !0),
      m.props.page && (q = m.props.page),
      (D = !1),
      l === "popstate" && Ae(x),
      _.fulfil(void 0),
      h.after_navigate.forEach((L) => L(_.navigation)),
      F.navigating.set(null),
      (O = !1);
  }
  async function je(e, t, r, a) {
    return e.origin === Te && e.pathname === location.pathname && !P
      ? await oe({ status: a, error: r, url: e, route: t })
      : await J(e);
  }
  function ze() {
    let e;
    u.addEventListener("mousemove", (l) => {
      const w = l.target;
      clearTimeout(e),
        (e = setTimeout(() => {
          a(w, 2);
        }, 20));
    });
    function t(l) {
      a(l.composedPath()[0], 1);
    }
    u.addEventListener("mousedown", t),
      u.addEventListener("touchstart", t, { passive: !0 });
    const r = new IntersectionObserver(
      (l) => {
        for (const w of l)
          w.isIntersecting &&
            (re(se(new URL(w.target.href))), r.unobserve(w.target));
      },
      { threshold: 0 }
    );
    function a(l, w) {
      const y = $e(l, u);
      if (!y) return;
      const { url: S, external: v, download: A } = we(y, B);
      if (v || A) return;
      const _ = le(y);
      if (!_.reload)
        if (w <= _.preload_data) {
          const k = X(S, !1);
          k && Le(k);
        } else w <= _.preload_code && re(se(S));
    }
    function c() {
      r.disconnect();
      for (const l of u.querySelectorAll("a")) {
        const { url: w, external: y, download: S } = we(l, B);
        if (y || S) continue;
        const v = le(l);
        v.reload ||
          (v.preload_code === De.viewport && r.observe(l),
          v.preload_code === De.eager && re(se(w)));
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
      _e(
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
      _e(
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
      _e(
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
      return ke();
    },
    invalidate_all: () => ((H = !0), ke()),
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
        const c = await xe(p.branch.length, r, a.errors);
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
            const a = qe(p, void 0, null, "leave"),
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
        u.addEventListener("click", (t) => {
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
          const r = $e(t.composedPath()[0], u);
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
            Ue({ url: a, type: "link" }) ? (D = !0) : t.preventDefault();
            return;
          }
          const [v, A] = a.href.split("#");
          if (A !== void 0 && v === location.href.split("#")[0]) {
            if (p.url.hash === a.hash) {
              t.preventDefault(),
                r.ownerDocument.getElementById(A)?.scrollIntoView();
              return;
            }
            if (((V = !0), be(x), e(a), !y.replace_state)) return;
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
        u.addEventListener("submit", (t) => {
          if (t.defaultPrevented) return;
          const r = HTMLFormElement.prototype.cloneNode.call(t.target),
            a = t.submitter;
          if ((a?.formMethod || r.method) !== "get") return;
          const l = new URL(
            (a?.hasAttribute("formaction") && a?.formAction) || r.action
          );
          if (ye(l, B)) return;
          const w = t.target,
            { keep_focus: y, noscroll: S, reload: v, replace_state: A } = le(w);
          if (v) return;
          t.preventDefault(), t.stopPropagation();
          const _ = new FormData(w),
            k = a?.getAttribute("name");
          k && _.append(k, a?.getAttribute("value") ?? ""),
            (l.search = new URLSearchParams(_).toString()),
            ie({
              url: l,
              scroll: S ? ee() : null,
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
            if (t.state[C] === x) return;
            const r = G[t.state[C]],
              a = new URL(location.href);
            if (p.url.href.split("#")[0] === location.href.split("#")[0]) {
              e(a), (G[x] = ee()), (x = t.state[C]), scrollTo(r.x, r.y);
              return;
            }
            const c = t.state[C] - x;
            await ie({
              url: a,
              scroll: r,
              keepfocus: !1,
              redirect_count: 0,
              details: null,
              accepted: () => {
                x = t.state[C];
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
              { ...history.state, [C]: ++x },
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
      let S;
      try {
        const v = r.map(async (k, m) => {
            const U = l[m];
            return (
              U?.uses && (U.uses = Ke(U.uses)),
              ue({
                loader: n.nodes[k],
                url: y,
                params: a,
                route: c,
                parent: async () => {
                  const M = {};
                  for (let L = 0; L < m; L += 1)
                    Object.assign(M, (await v[L]).data);
                  return M;
                },
                server_data_node: de(U),
              })
            );
          }),
          A = await Promise.all(v),
          _ = f.find(({ id: k }) => k === c.id);
        if (_) {
          const k = _.layouts;
          for (let m = 0; m < k.length; m++) k[m] || A.splice(m, 0, void 0);
        }
        S = await Y({
          url: y,
          params: a,
          branch: A,
          status: e,
          error: t,
          form: w,
          route: _ ?? null,
        });
      } catch (v) {
        if (v instanceof Me) {
          await J(new URL(v.location, location.href));
          return;
        }
        S = await oe({
          status: v instanceof te ? v.status : 500,
          error: await Z(v, { url: y, params: a, route: c }),
          url: y,
          route: c,
        });
      }
      Pe(S);
    },
  };
}
async function Ve(n, s) {
  const f = new URL(n);
  (f.pathname = at(n.pathname)),
    n.pathname.endsWith("/") && f.searchParams.append(kt, "1"),
    f.searchParams.append(St, s.map((d) => (d ? "1" : "0")).join(""));
  const o = await Be(f.href);
  if (
    (o.headers.get("content-type")?.includes("text/html") && (await J(n)),
    !o.ok)
  )
    throw new te(o.status, await o.json());
  return new Promise(async (d) => {
    const u = new Map(),
      E = o.body.getReader(),
      i = new TextDecoder();
    function g(p) {
      return yt(p, {
        Promise: (P) =>
          new Promise((I, b) => {
            u.set(P, { fulfil: I, reject: b });
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
        if (((h = h.slice(I + 1)), b.type === "redirect")) return d(b);
        if (b.type === "data")
          b.nodes?.forEach((O) => {
            O?.type === "data" && ((O.uses = Ke(O.uses)), (O.data = g(O.data)));
          }),
            d(b);
        else if (b.type === "chunk") {
          const { id: O, data: D, error: V } = b,
            H = u.get(O);
          u.delete(O), V ? H.reject(g(V)) : H.fulfil(g(D));
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
      f = s.getAttribute("tabindex");
    (s.tabIndex = -1),
      s.focus({ preventScroll: !0, focusVisible: !1 }),
      f !== null
        ? s.setAttribute("tabindex", f)
        : s.removeAttribute("tabindex");
    const o = getSelection();
    if (o && o.type !== "None") {
      const d = [];
      for (let u = 0; u < o.rangeCount; u += 1) d.push(o.getRangeAt(u));
      setTimeout(() => {
        if (o.rangeCount === d.length) {
          for (let u = 0; u < o.rangeCount; u += 1) {
            const E = d[u],
              i = o.getRangeAt(u);
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
function qe(n, s, f, o) {
  let d, u;
  const E = new Promise((g, h) => {
    (d = g), (u = h);
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
        to: f && {
          params: s?.params ?? null,
          route: { id: s?.route?.id ?? null },
          url: f,
        },
        willUnload: !s,
        type: o,
        complete: E,
      },
      fulfil: d,
      reject: u,
    }
  );
}
async function Lt(n, s, f) {
  const o = Rt(n, s);
  We({ client: o }),
    f ? await o._hydrate(f) : o.goto(location.href, { replaceState: !0 }),
    o._start_router();
}
export { Lt as start };
