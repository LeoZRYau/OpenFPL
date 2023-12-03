import {
  E,
  F as P,
  C as b,
  z as g,
  y as k,
  D as v,
  B as x,
} from "./Layout.0e76e124.js";
const T = async (t) => {
    const { canisterId: c, agent: d, paths: r } = t,
      o = [...new Set(r)],
      a = o.map((e) => f(e, c)),
      n = new Map(),
      m = o.map((e, l) =>
        (async () => {
          var u;
          try {
            const i = await d.readState(c, { paths: [a[l]] }),
              s = (
                await b.create({
                  certificate: i.certificate,
                  rootKey: d.rootKey,
                  canisterId: c,
                })
              ).lookup(f(o[l], c));
            if (!s)
              console.warn(
                `Expected to find result for path ${e}, but instead found nothing.`
              ),
                typeof e == "string" ? n.set(e, null) : n.set(e.key, null);
            else
              switch (e) {
                case "time": {
                  n.set(e, g(s));
                  break;
                }
                case "controllers": {
                  n.set(e, D(s));
                  break;
                }
                case "module_hash": {
                  n.set(e, y(s));
                  break;
                }
                case "candid": {
                  n.set(e, new TextDecoder().decode(s));
                  break;
                }
                default:
                  if (typeof e != "string" && "key" in e && "path" in e)
                    switch (e.decodeStrategy) {
                      case "raw":
                        n.set(e.key, s);
                        break;
                      case "leb128": {
                        n.set(e.key, k(s));
                        break;
                      }
                      case "cbor": {
                        n.set(e.key, w(s));
                        break;
                      }
                      case "hex": {
                        n.set(e.key, y(s));
                        break;
                      }
                      case "utf-8":
                        n.set(e.key, A(s));
                    }
              }
          } catch (i) {
            if (
              !((u = i?.message) === null || u === void 0) &&
              u.includes("Invalid certificate")
            )
              throw new x(i.message);
            typeof e != "string" && "key" in e && "path" in e
              ? n.set(e.key, null)
              : n.set(e, null),
              console.group(),
              console.warn(
                `Expected to find result for path ${e}, but instead found nothing.`
              ),
              console.warn(i),
              console.groupEnd();
          }
        })()
      );
    return await Promise.all(m), n;
  },
  f = (t, c) => {
    const d = new TextEncoder(),
      r = (a) => new DataView(d.encode(a).buffer).buffer,
      o = new DataView(c.toUint8Array().buffer).buffer;
    switch (t) {
      case "time":
        return [r("time")];
      case "controllers":
        return [r("canister"), o, r("controllers")];
      case "module_hash":
        return [r("canister"), o, r("module_hash")];
      case "subnet":
        return [r("subnet")];
      case "candid":
        return [r("canister"), o, r("metadata"), r("candid:service")];
      default:
        if ("key" in t && "path" in t)
          if (typeof t.path == "string" || t.path instanceof ArrayBuffer) {
            const a = t.path,
              n = typeof a == "string" ? r(a) : a;
            return [r("canister"), o, r("metadata"), n];
          } else return t.path;
    }
    throw new Error(
      `An unexpeected error was encountered while encoding your path for canister status. Please ensure that your path, ${t} was formatted correctly.`
    );
  },
  y = (t) => v(t),
  w = (t) => E(t),
  A = (t) => new TextDecoder().decode(t),
  D = (t) => {
    const [c, ...d] = w(t);
    return d.map((r) => P.fromUint8Array(new Uint8Array(r)));
  };
export { f as encodePath, T as request };
