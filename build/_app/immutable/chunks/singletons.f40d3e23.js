import { w as u } from "./index.8caf67b2.js";
const h = globalThis.__sveltekit_1o5ldxu?.base ?? "",
  b = globalThis.__sveltekit_1o5ldxu?.assets ?? h,
  v = "1701214701515",
  E = "sveltekit:snapshot",
  A = "sveltekit:scroll",
  R = "sveltekit:index",
  f = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1 };
function T(e) {
  let t = e.baseURI;
  if (!t) {
    const n = e.getElementsByTagName("base");
    t = n.length ? n[0].href : e.URL;
  }
  return t;
}
function x() {
  return { x: pageXOffset, y: pageYOffset };
}
function c(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const d = { ...f, "": f.hover };
function _(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return t?.nodeType === 11 && (t = t.host), t;
}
function y(e, t) {
  for (; e && e !== t; ) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = _(e);
  }
}
function I(e, t) {
  let n;
  try {
    n = new URL(
      e instanceof SVGAElement ? e.href.baseVal : e.href,
      document.baseURI
    );
  } catch {}
  const o = e instanceof SVGAElement ? e.target.baseVal : e.target,
    r =
      !n ||
      !!o ||
      m(n, t) ||
      (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
    l = n?.origin === location.origin && e.hasAttribute("download");
  return { url: n, external: r, target: o, download: l };
}
function S(e) {
  let t = null,
    n = null,
    o = null,
    r = null,
    l = null,
    a = null,
    s = e;
  for (; s && s !== document.documentElement; )
    o === null && (o = c(s, "preload-code")),
      r === null && (r = c(s, "preload-data")),
      t === null && (t = c(s, "keepfocus")),
      n === null && (n = c(s, "noscroll")),
      l === null && (l = c(s, "reload")),
      a === null && (a = c(s, "replacestate")),
      (s = _(s));
  function i(g) {
    switch (g) {
      case "":
      case "true":
        return !0;
      case "off":
      case "false":
        return !1;
      default:
        return null;
    }
  }
  return {
    preload_code: d[o ?? "off"],
    preload_data: d[r ?? "off"],
    keep_focus: i(t),
    noscroll: i(n),
    reload: i(l),
    replace_state: i(a),
  };
}
function p(e) {
  const t = u(e);
  let n = !0;
  function o() {
    (n = !0), t.update((a) => a);
  }
  function r(a) {
    (n = !1), t.set(a);
  }
  function l(a) {
    let s;
    return t.subscribe((i) => {
      (s === void 0 || (n && i !== s)) && a((s = i));
    });
  }
  return { notify: o, set: r, subscribe: l };
}
function k() {
  const { set: e, subscribe: t } = u(!1);
  let n;
  async function o() {
    clearTimeout(n);
    try {
      const r = await fetch(`${b}/_app/version.json`, {
        headers: { pragma: "no-cache", "cache-control": "no-cache" },
      });
      if (!r.ok) return !1;
      const a = (await r.json()).version !== v;
      return a && (e(!0), clearTimeout(n)), a;
    } catch {
      return !1;
    }
  }
  return { subscribe: t, check: o };
}
function m(e, t) {
  return e.origin !== location.origin || !e.pathname.startsWith(t);
}
function O(e) {
  e.client;
}
const U = { url: p({}), page: p({}), navigating: u(null), updated: k() };
export {
  R as I,
  f as P,
  A as S,
  E as a,
  I as b,
  S as c,
  U as d,
  h as e,
  y as f,
  T as g,
  O as h,
  m as i,
  x as s,
};
