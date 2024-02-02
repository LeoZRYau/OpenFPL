import { g as Ba, c as he, _ as oo } from "./index.5a19c9f4.js";
const Ia = -1,
  ha = -2,
  Ea = -3,
  la = -4,
  Qa = -5,
  Ca = -6;
function mB(e, A) {
  if (typeof e == "number") return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
  const t = e,
    i = Array(t.length);
  function s(u, f = !1) {
    if (u === Ia) return;
    if (u === Ea) return NaN;
    if (u === la) return 1 / 0;
    if (u === Qa) return -1 / 0;
    if (u === Ca) return -0;
    if (f) throw new Error("Invalid input");
    if (u in i) return i[u];
    const a = t[u];
    if (!a || typeof a != "object") i[u] = a;
    else if (Array.isArray(a))
      if (typeof a[0] == "string") {
        const E = a[0],
          d = A?.[E];
        if (d) return (i[u] = d(s(a[1])));
        switch (E) {
          case "Date":
            i[u] = new Date(a[1]);
            break;
          case "Set":
            const m = new Set();
            i[u] = m;
            for (let _ = 1; _ < a.length; _ += 1) m.add(s(a[_]));
            break;
          case "Map":
            const N = new Map();
            i[u] = N;
            for (let _ = 1; _ < a.length; _ += 2) N.set(s(a[_]), s(a[_ + 1]));
            break;
          case "RegExp":
            i[u] = new RegExp(a[1], a[2]);
            break;
          case "Object":
            i[u] = Object(a[1]);
            break;
          case "BigInt":
            i[u] = BigInt(a[1]);
            break;
          case "null":
            const k = Object.create(null);
            i[u] = k;
            for (let _ = 1; _ < a.length; _ += 2) k[a[_]] = s(a[_ + 1]);
            break;
          default:
            throw new Error(`Unknown type ${E}`);
        }
      } else {
        const E = new Array(a.length);
        i[u] = E;
        for (let d = 0; d < a.length; d += 1) {
          const m = a[d];
          m !== ha && (E[d] = s(m));
        }
      }
    else {
      const E = {};
      i[u] = E;
      for (const d in a) {
        const m = a[d];
        E[d] = s(m);
      }
    }
    return i[u];
  }
  return s(0);
}
var Ne = {},
  Ge = {};
Ge.byteLength = wa;
Ge.toByteArray = ma;
Ge.fromByteArray = Da;
var wt = [],
  ot = [],
  da = typeof Uint8Array < "u" ? Uint8Array : Array,
  Pr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var oe = 0, pa = Pr.length; oe < pa; ++oe)
  (wt[oe] = Pr[oe]), (ot[Pr.charCodeAt(oe)] = oe);
ot["-".charCodeAt(0)] = 62;
ot["_".charCodeAt(0)] = 63;
function so(e) {
  var A = e.length;
  if (A % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = e.indexOf("=");
  t === -1 && (t = A);
  var i = t === A ? 0 : 4 - (t % 4);
  return [t, i];
}
function wa(e) {
  var A = so(e),
    t = A[0],
    i = A[1];
  return ((t + i) * 3) / 4 - i;
}
function ya(e, A, t) {
  return ((A + t) * 3) / 4 - t;
}
function ma(e) {
  var A,
    t = so(e),
    i = t[0],
    s = t[1],
    u = new da(ya(e, i, s)),
    f = 0,
    a = s > 0 ? i - 4 : i,
    E;
  for (E = 0; E < a; E += 4)
    (A =
      (ot[e.charCodeAt(E)] << 18) |
      (ot[e.charCodeAt(E + 1)] << 12) |
      (ot[e.charCodeAt(E + 2)] << 6) |
      ot[e.charCodeAt(E + 3)]),
      (u[f++] = (A >> 16) & 255),
      (u[f++] = (A >> 8) & 255),
      (u[f++] = A & 255);
  return (
    s === 2 &&
      ((A = (ot[e.charCodeAt(E)] << 2) | (ot[e.charCodeAt(E + 1)] >> 4)),
      (u[f++] = A & 255)),
    s === 1 &&
      ((A =
        (ot[e.charCodeAt(E)] << 10) |
        (ot[e.charCodeAt(E + 1)] << 4) |
        (ot[e.charCodeAt(E + 2)] >> 2)),
      (u[f++] = (A >> 8) & 255),
      (u[f++] = A & 255)),
    u
  );
}
function Sa(e) {
  return (
    wt[(e >> 18) & 63] + wt[(e >> 12) & 63] + wt[(e >> 6) & 63] + wt[e & 63]
  );
}
function ba(e, A, t) {
  for (var i, s = [], u = A; u < t; u += 3)
    (i =
      ((e[u] << 16) & 16711680) + ((e[u + 1] << 8) & 65280) + (e[u + 2] & 255)),
      s.push(Sa(i));
  return s.join("");
}
function Da(e) {
  for (
    var A, t = e.length, i = t % 3, s = [], u = 16383, f = 0, a = t - i;
    f < a;
    f += u
  )
    s.push(ba(e, f, f + u > a ? a : f + u));
  return (
    i === 1
      ? ((A = e[t - 1]), s.push(wt[A >> 2] + wt[(A << 4) & 63] + "=="))
      : i === 2 &&
        ((A = (e[t - 2] << 8) + e[t - 1]),
        s.push(wt[A >> 10] + wt[(A >> 4) & 63] + wt[(A << 2) & 63] + "=")),
    s.join("")
  );
}
var ke = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ ke.read =
  function (e, A, t, i, s) {
    var u,
      f,
      a = s * 8 - i - 1,
      E = (1 << a) - 1,
      d = E >> 1,
      m = -7,
      N = t ? s - 1 : 0,
      k = t ? -1 : 1,
      _ = e[A + N];
    for (
      N += k, u = _ & ((1 << -m) - 1), _ >>= -m, m += a;
      m > 0;
      u = u * 256 + e[A + N], N += k, m -= 8
    );
    for (
      f = u & ((1 << -m) - 1), u >>= -m, m += i;
      m > 0;
      f = f * 256 + e[A + N], N += k, m -= 8
    );
    if (u === 0) u = 1 - d;
    else {
      if (u === E) return f ? NaN : (_ ? -1 : 1) * (1 / 0);
      (f = f + Math.pow(2, i)), (u = u - d);
    }
    return (_ ? -1 : 1) * f * Math.pow(2, u - i);
  };
ke.write = function (e, A, t, i, s, u) {
  var f,
    a,
    E,
    d = u * 8 - s - 1,
    m = (1 << d) - 1,
    N = m >> 1,
    k = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    _ = i ? 0 : u - 1,
    G = i ? 1 : -1,
    L = A < 0 || (A === 0 && 1 / A < 0) ? 1 : 0;
  for (
    A = Math.abs(A),
      isNaN(A) || A === 1 / 0
        ? ((a = isNaN(A) ? 1 : 0), (f = m))
        : ((f = Math.floor(Math.log(A) / Math.LN2)),
          A * (E = Math.pow(2, -f)) < 1 && (f--, (E *= 2)),
          f + N >= 1 ? (A += k / E) : (A += k * Math.pow(2, 1 - N)),
          A * E >= 2 && (f++, (E /= 2)),
          f + N >= m
            ? ((a = 0), (f = m))
            : f + N >= 1
            ? ((a = (A * E - 1) * Math.pow(2, s)), (f = f + N))
            : ((a = A * Math.pow(2, N - 1) * Math.pow(2, s)), (f = 0)));
    s >= 8;
    e[t + _] = a & 255, _ += G, a /= 256, s -= 8
  );
  for (
    f = (f << s) | a, d += s;
    d > 0;
    e[t + _] = f & 255, _ += G, f /= 256, d -= 8
  );
  e[t + _ - G] |= L * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ (function (e) {
  const A = Ge,
    t = ke,
    i =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  (e.Buffer = a), (e.SlowBuffer = z), (e.INSPECT_MAX_BYTES = 50);
  const s = 2147483647;
  (e.kMaxLength = s),
    (a.TYPED_ARRAY_SUPPORT = u()),
    !a.TYPED_ARRAY_SUPPORT &&
      typeof console < "u" &&
      typeof console.error == "function" &&
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
  function u() {
    try {
      const n = new Uint8Array(1),
        r = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(r, Uint8Array.prototype),
        Object.setPrototypeOf(n, r),
        n.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (a.isBuffer(this)) return this.buffer;
    },
  }),
    Object.defineProperty(a.prototype, "offset", {
      enumerable: !0,
      get: function () {
        if (a.isBuffer(this)) return this.byteOffset;
      },
    });
  function f(n) {
    if (n > s)
      throw new RangeError(
        'The value "' + n + '" is invalid for option "size"'
      );
    const r = new Uint8Array(n);
    return Object.setPrototypeOf(r, a.prototype), r;
  }
  function a(n, r, o) {
    if (typeof n == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return N(n);
    }
    return E(n, r, o);
  }
  a.poolSize = 8192;
  function E(n, r, o) {
    if (typeof n == "string") return k(n, r);
    if (ArrayBuffer.isView(n)) return G(n);
    if (n == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof n
      );
    if (
      T(n, ArrayBuffer) ||
      (n && T(n.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (T(n, SharedArrayBuffer) || (n && T(n.buffer, SharedArrayBuffer))))
    )
      return L(n, r, o);
    if (typeof n == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const B = n.valueOf && n.valueOf();
    if (B != null && B !== n) return a.from(B, r, o);
    const l = J(n);
    if (l) return l;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof n[Symbol.toPrimitive] == "function"
    )
      return a.from(n[Symbol.toPrimitive]("string"), r, o);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof n
    );
  }
  (a.from = function (n, r, o) {
    return E(n, r, o);
  }),
    Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(a, Uint8Array);
  function d(n) {
    if (typeof n != "number")
      throw new TypeError('"size" argument must be of type number');
    if (n < 0)
      throw new RangeError(
        'The value "' + n + '" is invalid for option "size"'
      );
  }
  function m(n, r, o) {
    return (
      d(n),
      n <= 0
        ? f(n)
        : r !== void 0
        ? typeof o == "string"
          ? f(n).fill(r, o)
          : f(n).fill(r)
        : f(n)
    );
  }
  a.alloc = function (n, r, o) {
    return m(n, r, o);
  };
  function N(n) {
    return d(n), f(n < 0 ? 0 : X(n) | 0);
  }
  (a.allocUnsafe = function (n) {
    return N(n);
  }),
    (a.allocUnsafeSlow = function (n) {
      return N(n);
    });
  function k(n, r) {
    if (((typeof r != "string" || r === "") && (r = "utf8"), !a.isEncoding(r)))
      throw new TypeError("Unknown encoding: " + r);
    const o = q(n, r) | 0;
    let B = f(o);
    const l = B.write(n, r);
    return l !== o && (B = B.slice(0, l)), B;
  }
  function _(n) {
    const r = n.length < 0 ? 0 : X(n.length) | 0,
      o = f(r);
    for (let B = 0; B < r; B += 1) o[B] = n[B] & 255;
    return o;
  }
  function G(n) {
    if (T(n, Uint8Array)) {
      const r = new Uint8Array(n);
      return L(r.buffer, r.byteOffset, r.byteLength);
    }
    return _(n);
  }
  function L(n, r, o) {
    if (r < 0 || n.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (n.byteLength < r + (o || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let B;
    return (
      r === void 0 && o === void 0
        ? (B = new Uint8Array(n))
        : o === void 0
        ? (B = new Uint8Array(n, r))
        : (B = new Uint8Array(n, r, o)),
      Object.setPrototypeOf(B, a.prototype),
      B
    );
  }
  function J(n) {
    if (a.isBuffer(n)) {
      const r = X(n.length) | 0,
        o = f(r);
      return o.length === 0 || n.copy(o, 0, 0, r), o;
    }
    if (n.length !== void 0)
      return typeof n.length != "number" || O(n.length) ? f(0) : _(n);
    if (n.type === "Buffer" && Array.isArray(n.data)) return _(n.data);
  }
  function X(n) {
    if (n >= s)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          s.toString(16) +
          " bytes"
      );
    return n | 0;
  }
  function z(n) {
    return +n != n && (n = 0), a.alloc(+n);
  }
  (a.isBuffer = function (r) {
    return r != null && r._isBuffer === !0 && r !== a.prototype;
  }),
    (a.compare = function (r, o) {
      if (
        (T(r, Uint8Array) && (r = a.from(r, r.offset, r.byteLength)),
        T(o, Uint8Array) && (o = a.from(o, o.offset, o.byteLength)),
        !a.isBuffer(r) || !a.isBuffer(o))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (r === o) return 0;
      let B = r.length,
        l = o.length;
      for (let y = 0, b = Math.min(B, l); y < b; ++y)
        if (r[y] !== o[y]) {
          (B = r[y]), (l = o[y]);
          break;
        }
      return B < l ? -1 : l < B ? 1 : 0;
    }),
    (a.isEncoding = function (r) {
      switch (String(r).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }),
    (a.concat = function (r, o) {
      if (!Array.isArray(r))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (r.length === 0) return a.alloc(0);
      let B;
      if (o === void 0) for (o = 0, B = 0; B < r.length; ++B) o += r[B].length;
      const l = a.allocUnsafe(o);
      let y = 0;
      for (B = 0; B < r.length; ++B) {
        let b = r[B];
        if (T(b, Uint8Array))
          y + b.length > l.length
            ? (a.isBuffer(b) || (b = a.from(b)), b.copy(l, y))
            : Uint8Array.prototype.set.call(l, b, y);
        else if (a.isBuffer(b)) b.copy(l, y);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        y += b.length;
      }
      return l;
    });
  function q(n, r) {
    if (a.isBuffer(n)) return n.length;
    if (ArrayBuffer.isView(n) || T(n, ArrayBuffer)) return n.byteLength;
    if (typeof n != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof n
      );
    const o = n.length,
      B = arguments.length > 2 && arguments[2] === !0;
    if (!B && o === 0) return 0;
    let l = !1;
    for (;;)
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return o;
        case "utf8":
        case "utf-8":
          return c(n).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return o * 2;
        case "hex":
          return o >>> 1;
        case "base64":
          return Q(n).length;
        default:
          if (l) return B ? -1 : c(n).length;
          (r = ("" + r).toLowerCase()), (l = !0);
      }
  }
  a.byteLength = q;
  function cA(n, r, o) {
    let B = !1;
    if (
      ((r === void 0 || r < 0) && (r = 0),
      r > this.length ||
        ((o === void 0 || o > this.length) && (o = this.length), o <= 0) ||
        ((o >>>= 0), (r >>>= 0), o <= r))
    )
      return "";
    for (n || (n = "utf8"); ; )
      switch (n) {
        case "hex":
          return H(this, r, o);
        case "utf8":
        case "utf-8":
          return FA(this, r, o);
        case "ascii":
          return kA(this, r, o);
        case "latin1":
        case "binary":
          return $(this, r, o);
        case "base64":
          return QA(this, r, o);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return oA(this, r, o);
        default:
          if (B) throw new TypeError("Unknown encoding: " + n);
          (n = (n + "").toLowerCase()), (B = !0);
      }
  }
  a.prototype._isBuffer = !0;
  function P(n, r, o) {
    const B = n[r];
    (n[r] = n[o]), (n[o] = B);
  }
  (a.prototype.swap16 = function () {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let o = 0; o < r; o += 2) P(this, o, o + 1);
    return this;
  }),
    (a.prototype.swap32 = function () {
      const r = this.length;
      if (r % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let o = 0; o < r; o += 4) P(this, o, o + 3), P(this, o + 1, o + 2);
      return this;
    }),
    (a.prototype.swap64 = function () {
      const r = this.length;
      if (r % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let o = 0; o < r; o += 8)
        P(this, o, o + 7),
          P(this, o + 1, o + 6),
          P(this, o + 2, o + 5),
          P(this, o + 3, o + 4);
      return this;
    }),
    (a.prototype.toString = function () {
      const r = this.length;
      return r === 0
        ? ""
        : arguments.length === 0
        ? FA(this, 0, r)
        : cA.apply(this, arguments);
    }),
    (a.prototype.toLocaleString = a.prototype.toString),
    (a.prototype.equals = function (r) {
      if (!a.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
      return this === r ? !0 : a.compare(this, r) === 0;
    }),
    (a.prototype.inspect = function () {
      let r = "";
      const o = e.INSPECT_MAX_BYTES;
      return (
        (r = this.toString("hex", 0, o)
          .replace(/(.{2})/g, "$1 ")
          .trim()),
        this.length > o && (r += " ... "),
        "<Buffer " + r + ">"
      );
    }),
    i && (a.prototype[i] = a.prototype.inspect),
    (a.prototype.compare = function (r, o, B, l, y) {
      if (
        (T(r, Uint8Array) && (r = a.from(r, r.offset, r.byteLength)),
        !a.isBuffer(r))
      )
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof r
        );
      if (
        (o === void 0 && (o = 0),
        B === void 0 && (B = r ? r.length : 0),
        l === void 0 && (l = 0),
        y === void 0 && (y = this.length),
        o < 0 || B > r.length || l < 0 || y > this.length)
      )
        throw new RangeError("out of range index");
      if (l >= y && o >= B) return 0;
      if (l >= y) return -1;
      if (o >= B) return 1;
      if (((o >>>= 0), (B >>>= 0), (l >>>= 0), (y >>>= 0), this === r))
        return 0;
      let b = y - l,
        Z = B - o;
      const uA = Math.min(b, Z),
        nA = this.slice(l, y),
        AA = r.slice(o, B);
      for (let BA = 0; BA < uA; ++BA)
        if (nA[BA] !== AA[BA]) {
          (b = nA[BA]), (Z = AA[BA]);
          break;
        }
      return b < Z ? -1 : Z < b ? 1 : 0;
    });
  function W(n, r, o, B, l) {
    if (n.length === 0) return -1;
    if (
      (typeof o == "string"
        ? ((B = o), (o = 0))
        : o > 2147483647
        ? (o = 2147483647)
        : o < -2147483648 && (o = -2147483648),
      (o = +o),
      O(o) && (o = l ? 0 : n.length - 1),
      o < 0 && (o = n.length + o),
      o >= n.length)
    ) {
      if (l) return -1;
      o = n.length - 1;
    } else if (o < 0)
      if (l) o = 0;
      else return -1;
    if ((typeof r == "string" && (r = a.from(r, B)), a.isBuffer(r)))
      return r.length === 0 ? -1 : iA(n, r, o, B, l);
    if (typeof r == "number")
      return (
        (r = r & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? l
            ? Uint8Array.prototype.indexOf.call(n, r, o)
            : Uint8Array.prototype.lastIndexOf.call(n, r, o)
          : iA(n, [r], o, B, l)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function iA(n, r, o, B, l) {
    let y = 1,
      b = n.length,
      Z = r.length;
    if (
      B !== void 0 &&
      ((B = String(B).toLowerCase()),
      B === "ucs2" || B === "ucs-2" || B === "utf16le" || B === "utf-16le")
    ) {
      if (n.length < 2 || r.length < 2) return -1;
      (y = 2), (b /= 2), (Z /= 2), (o /= 2);
    }
    function uA(AA, BA) {
      return y === 1 ? AA[BA] : AA.readUInt16BE(BA * y);
    }
    let nA;
    if (l) {
      let AA = -1;
      for (nA = o; nA < b; nA++)
        if (uA(n, nA) === uA(r, AA === -1 ? 0 : nA - AA)) {
          if ((AA === -1 && (AA = nA), nA - AA + 1 === Z)) return AA * y;
        } else AA !== -1 && (nA -= nA - AA), (AA = -1);
    } else
      for (o + Z > b && (o = b - Z), nA = o; nA >= 0; nA--) {
        let AA = !0;
        for (let BA = 0; BA < Z; BA++)
          if (uA(n, nA + BA) !== uA(r, BA)) {
            AA = !1;
            break;
          }
        if (AA) return nA;
      }
    return -1;
  }
  (a.prototype.includes = function (r, o, B) {
    return this.indexOf(r, o, B) !== -1;
  }),
    (a.prototype.indexOf = function (r, o, B) {
      return W(this, r, o, B, !0);
    }),
    (a.prototype.lastIndexOf = function (r, o, B) {
      return W(this, r, o, B, !1);
    });
  function fA(n, r, o, B) {
    o = Number(o) || 0;
    const l = n.length - o;
    B ? ((B = Number(B)), B > l && (B = l)) : (B = l);
    const y = r.length;
    B > y / 2 && (B = y / 2);
    let b;
    for (b = 0; b < B; ++b) {
      const Z = parseInt(r.substr(b * 2, 2), 16);
      if (O(Z)) return b;
      n[o + b] = Z;
    }
    return b;
  }
  function EA(n, r, o, B) {
    return S(c(r, n.length - o), n, o, B);
  }
  function Y(n, r, o, B) {
    return S(g(r), n, o, B);
  }
  function SA(n, r, o, B) {
    return S(Q(r), n, o, B);
  }
  function dA(n, r, o, B) {
    return S(h(r, n.length - o), n, o, B);
  }
  (a.prototype.write = function (r, o, B, l) {
    if (o === void 0) (l = "utf8"), (B = this.length), (o = 0);
    else if (B === void 0 && typeof o == "string")
      (l = o), (B = this.length), (o = 0);
    else if (isFinite(o))
      (o = o >>> 0),
        isFinite(B)
          ? ((B = B >>> 0), l === void 0 && (l = "utf8"))
          : ((l = B), (B = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const y = this.length - o;
    if (
      ((B === void 0 || B > y) && (B = y),
      (r.length > 0 && (B < 0 || o < 0)) || o > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    l || (l = "utf8");
    let b = !1;
    for (;;)
      switch (l) {
        case "hex":
          return fA(this, r, o, B);
        case "utf8":
        case "utf-8":
          return EA(this, r, o, B);
        case "ascii":
        case "latin1":
        case "binary":
          return Y(this, r, o, B);
        case "base64":
          return SA(this, r, o, B);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return dA(this, r, o, B);
        default:
          if (b) throw new TypeError("Unknown encoding: " + l);
          (l = ("" + l).toLowerCase()), (b = !0);
      }
  }),
    (a.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function QA(n, r, o) {
    return r === 0 && o === n.length
      ? A.fromByteArray(n)
      : A.fromByteArray(n.slice(r, o));
  }
  function FA(n, r, o) {
    o = Math.min(n.length, o);
    const B = [];
    let l = r;
    for (; l < o; ) {
      const y = n[l];
      let b = null,
        Z = y > 239 ? 4 : y > 223 ? 3 : y > 191 ? 2 : 1;
      if (l + Z <= o) {
        let uA, nA, AA, BA;
        switch (Z) {
          case 1:
            y < 128 && (b = y);
            break;
          case 2:
            (uA = n[l + 1]),
              (uA & 192) === 128 &&
                ((BA = ((y & 31) << 6) | (uA & 63)), BA > 127 && (b = BA));
            break;
          case 3:
            (uA = n[l + 1]),
              (nA = n[l + 2]),
              (uA & 192) === 128 &&
                (nA & 192) === 128 &&
                ((BA = ((y & 15) << 12) | ((uA & 63) << 6) | (nA & 63)),
                BA > 2047 && (BA < 55296 || BA > 57343) && (b = BA));
            break;
          case 4:
            (uA = n[l + 1]),
              (nA = n[l + 2]),
              (AA = n[l + 3]),
              (uA & 192) === 128 &&
                (nA & 192) === 128 &&
                (AA & 192) === 128 &&
                ((BA =
                  ((y & 15) << 18) |
                  ((uA & 63) << 12) |
                  ((nA & 63) << 6) |
                  (AA & 63)),
                BA > 65535 && BA < 1114112 && (b = BA));
        }
      }
      b === null
        ? ((b = 65533), (Z = 1))
        : b > 65535 &&
          ((b -= 65536),
          B.push(((b >>> 10) & 1023) | 55296),
          (b = 56320 | (b & 1023))),
        B.push(b),
        (l += Z);
    }
    return YA(B);
  }
  const _A = 4096;
  function YA(n) {
    const r = n.length;
    if (r <= _A) return String.fromCharCode.apply(String, n);
    let o = "",
      B = 0;
    for (; B < r; )
      o += String.fromCharCode.apply(String, n.slice(B, (B += _A)));
    return o;
  }
  function kA(n, r, o) {
    let B = "";
    o = Math.min(n.length, o);
    for (let l = r; l < o; ++l) B += String.fromCharCode(n[l] & 127);
    return B;
  }
  function $(n, r, o) {
    let B = "";
    o = Math.min(n.length, o);
    for (let l = r; l < o; ++l) B += String.fromCharCode(n[l]);
    return B;
  }
  function H(n, r, o) {
    const B = n.length;
    (!r || r < 0) && (r = 0), (!o || o < 0 || o > B) && (o = B);
    let l = "";
    for (let y = r; y < o; ++y) l += eA[n[y]];
    return l;
  }
  function oA(n, r, o) {
    const B = n.slice(r, o);
    let l = "";
    for (let y = 0; y < B.length - 1; y += 2)
      l += String.fromCharCode(B[y] + B[y + 1] * 256);
    return l;
  }
  a.prototype.slice = function (r, o) {
    const B = this.length;
    (r = ~~r),
      (o = o === void 0 ? B : ~~o),
      r < 0 ? ((r += B), r < 0 && (r = 0)) : r > B && (r = B),
      o < 0 ? ((o += B), o < 0 && (o = 0)) : o > B && (o = B),
      o < r && (o = r);
    const l = this.subarray(r, o);
    return Object.setPrototypeOf(l, a.prototype), l;
  };
  function v(n, r, o) {
    if (n % 1 !== 0 || n < 0) throw new RangeError("offset is not uint");
    if (n + r > o)
      throw new RangeError("Trying to access beyond buffer length");
  }
  (a.prototype.readUintLE = a.prototype.readUIntLE =
    function (r, o, B) {
      (r = r >>> 0), (o = o >>> 0), B || v(r, o, this.length);
      let l = this[r],
        y = 1,
        b = 0;
      for (; ++b < o && (y *= 256); ) l += this[r + b] * y;
      return l;
    }),
    (a.prototype.readUintBE = a.prototype.readUIntBE =
      function (r, o, B) {
        (r = r >>> 0), (o = o >>> 0), B || v(r, o, this.length);
        let l = this[r + --o],
          y = 1;
        for (; o > 0 && (y *= 256); ) l += this[r + --o] * y;
        return l;
      }),
    (a.prototype.readUint8 = a.prototype.readUInt8 =
      function (r, o) {
        return (r = r >>> 0), o || v(r, 1, this.length), this[r];
      }),
    (a.prototype.readUint16LE = a.prototype.readUInt16LE =
      function (r, o) {
        return (
          (r = r >>> 0), o || v(r, 2, this.length), this[r] | (this[r + 1] << 8)
        );
      }),
    (a.prototype.readUint16BE = a.prototype.readUInt16BE =
      function (r, o) {
        return (
          (r = r >>> 0), o || v(r, 2, this.length), (this[r] << 8) | this[r + 1]
        );
      }),
    (a.prototype.readUint32LE = a.prototype.readUInt32LE =
      function (r, o) {
        return (
          (r = r >>> 0),
          o || v(r, 4, this.length),
          (this[r] | (this[r + 1] << 8) | (this[r + 2] << 16)) +
            this[r + 3] * 16777216
        );
      }),
    (a.prototype.readUint32BE = a.prototype.readUInt32BE =
      function (r, o) {
        return (
          (r = r >>> 0),
          o || v(r, 4, this.length),
          this[r] * 16777216 +
            ((this[r + 1] << 16) | (this[r + 2] << 8) | this[r + 3])
        );
      }),
    (a.prototype.readBigUInt64LE = rA(function (r) {
      (r = r >>> 0), R(r, "offset");
      const o = this[r],
        B = this[r + 7];
      (o === void 0 || B === void 0) && F(r, this.length - 8);
      const l =
          o + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24,
        y = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + B * 2 ** 24;
      return BigInt(l) + (BigInt(y) << BigInt(32));
    })),
    (a.prototype.readBigUInt64BE = rA(function (r) {
      (r = r >>> 0), R(r, "offset");
      const o = this[r],
        B = this[r + 7];
      (o === void 0 || B === void 0) && F(r, this.length - 8);
      const l =
          o * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r],
        y = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + B;
      return (BigInt(l) << BigInt(32)) + BigInt(y);
    })),
    (a.prototype.readIntLE = function (r, o, B) {
      (r = r >>> 0), (o = o >>> 0), B || v(r, o, this.length);
      let l = this[r],
        y = 1,
        b = 0;
      for (; ++b < o && (y *= 256); ) l += this[r + b] * y;
      return (y *= 128), l >= y && (l -= Math.pow(2, 8 * o)), l;
    }),
    (a.prototype.readIntBE = function (r, o, B) {
      (r = r >>> 0), (o = o >>> 0), B || v(r, o, this.length);
      let l = o,
        y = 1,
        b = this[r + --l];
      for (; l > 0 && (y *= 256); ) b += this[r + --l] * y;
      return (y *= 128), b >= y && (b -= Math.pow(2, 8 * o)), b;
    }),
    (a.prototype.readInt8 = function (r, o) {
      return (
        (r = r >>> 0),
        o || v(r, 1, this.length),
        this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r]
      );
    }),
    (a.prototype.readInt16LE = function (r, o) {
      (r = r >>> 0), o || v(r, 2, this.length);
      const B = this[r] | (this[r + 1] << 8);
      return B & 32768 ? B | 4294901760 : B;
    }),
    (a.prototype.readInt16BE = function (r, o) {
      (r = r >>> 0), o || v(r, 2, this.length);
      const B = this[r + 1] | (this[r] << 8);
      return B & 32768 ? B | 4294901760 : B;
    }),
    (a.prototype.readInt32LE = function (r, o) {
      return (
        (r = r >>> 0),
        o || v(r, 4, this.length),
        this[r] | (this[r + 1] << 8) | (this[r + 2] << 16) | (this[r + 3] << 24)
      );
    }),
    (a.prototype.readInt32BE = function (r, o) {
      return (
        (r = r >>> 0),
        o || v(r, 4, this.length),
        (this[r] << 24) | (this[r + 1] << 16) | (this[r + 2] << 8) | this[r + 3]
      );
    }),
    (a.prototype.readBigInt64LE = rA(function (r) {
      (r = r >>> 0), R(r, "offset");
      const o = this[r],
        B = this[r + 7];
      (o === void 0 || B === void 0) && F(r, this.length - 8);
      const l =
        this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (B << 24);
      return (
        (BigInt(l) << BigInt(32)) +
        BigInt(
          o + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24
        )
      );
    })),
    (a.prototype.readBigInt64BE = rA(function (r) {
      (r = r >>> 0), R(r, "offset");
      const o = this[r],
        B = this[r + 7];
      (o === void 0 || B === void 0) && F(r, this.length - 8);
      const l =
        (o << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
      return (
        (BigInt(l) << BigInt(32)) +
        BigInt(
          this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + B
        )
      );
    })),
    (a.prototype.readFloatLE = function (r, o) {
      return (
        (r = r >>> 0), o || v(r, 4, this.length), t.read(this, r, !0, 23, 4)
      );
    }),
    (a.prototype.readFloatBE = function (r, o) {
      return (
        (r = r >>> 0), o || v(r, 4, this.length), t.read(this, r, !1, 23, 4)
      );
    }),
    (a.prototype.readDoubleLE = function (r, o) {
      return (
        (r = r >>> 0), o || v(r, 8, this.length), t.read(this, r, !0, 52, 8)
      );
    }),
    (a.prototype.readDoubleBE = function (r, o) {
      return (
        (r = r >>> 0), o || v(r, 8, this.length), t.read(this, r, !1, 52, 8)
      );
    });
  function j(n, r, o, B, l, y) {
    if (!a.isBuffer(n))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > l || r < y)
      throw new RangeError('"value" argument is out of bounds');
    if (o + B > n.length) throw new RangeError("Index out of range");
  }
  (a.prototype.writeUintLE = a.prototype.writeUIntLE =
    function (r, o, B, l) {
      if (((r = +r), (o = o >>> 0), (B = B >>> 0), !l)) {
        const Z = Math.pow(2, 8 * B) - 1;
        j(this, r, o, B, Z, 0);
      }
      let y = 1,
        b = 0;
      for (this[o] = r & 255; ++b < B && (y *= 256); )
        this[o + b] = (r / y) & 255;
      return o + B;
    }),
    (a.prototype.writeUintBE = a.prototype.writeUIntBE =
      function (r, o, B, l) {
        if (((r = +r), (o = o >>> 0), (B = B >>> 0), !l)) {
          const Z = Math.pow(2, 8 * B) - 1;
          j(this, r, o, B, Z, 0);
        }
        let y = B - 1,
          b = 1;
        for (this[o + y] = r & 255; --y >= 0 && (b *= 256); )
          this[o + y] = (r / b) & 255;
        return o + B;
      }),
    (a.prototype.writeUint8 = a.prototype.writeUInt8 =
      function (r, o, B) {
        return (
          (r = +r),
          (o = o >>> 0),
          B || j(this, r, o, 1, 255, 0),
          (this[o] = r & 255),
          o + 1
        );
      }),
    (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
      function (r, o, B) {
        return (
          (r = +r),
          (o = o >>> 0),
          B || j(this, r, o, 2, 65535, 0),
          (this[o] = r & 255),
          (this[o + 1] = r >>> 8),
          o + 2
        );
      }),
    (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
      function (r, o, B) {
        return (
          (r = +r),
          (o = o >>> 0),
          B || j(this, r, o, 2, 65535, 0),
          (this[o] = r >>> 8),
          (this[o + 1] = r & 255),
          o + 2
        );
      }),
    (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
      function (r, o, B) {
        return (
          (r = +r),
          (o = o >>> 0),
          B || j(this, r, o, 4, 4294967295, 0),
          (this[o + 3] = r >>> 24),
          (this[o + 2] = r >>> 16),
          (this[o + 1] = r >>> 8),
          (this[o] = r & 255),
          o + 4
        );
      }),
    (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
      function (r, o, B) {
        return (
          (r = +r),
          (o = o >>> 0),
          B || j(this, r, o, 4, 4294967295, 0),
          (this[o] = r >>> 24),
          (this[o + 1] = r >>> 16),
          (this[o + 2] = r >>> 8),
          (this[o + 3] = r & 255),
          o + 4
        );
      });
  function sA(n, r, o, B, l) {
    D(r, B, l, n, o, 7);
    let y = Number(r & BigInt(4294967295));
    (n[o++] = y),
      (y = y >> 8),
      (n[o++] = y),
      (y = y >> 8),
      (n[o++] = y),
      (y = y >> 8),
      (n[o++] = y);
    let b = Number((r >> BigInt(32)) & BigInt(4294967295));
    return (
      (n[o++] = b),
      (b = b >> 8),
      (n[o++] = b),
      (b = b >> 8),
      (n[o++] = b),
      (b = b >> 8),
      (n[o++] = b),
      o
    );
  }
  function p(n, r, o, B, l) {
    D(r, B, l, n, o, 7);
    let y = Number(r & BigInt(4294967295));
    (n[o + 7] = y),
      (y = y >> 8),
      (n[o + 6] = y),
      (y = y >> 8),
      (n[o + 5] = y),
      (y = y >> 8),
      (n[o + 4] = y);
    let b = Number((r >> BigInt(32)) & BigInt(4294967295));
    return (
      (n[o + 3] = b),
      (b = b >> 8),
      (n[o + 2] = b),
      (b = b >> 8),
      (n[o + 1] = b),
      (b = b >> 8),
      (n[o] = b),
      o + 8
    );
  }
  (a.prototype.writeBigUInt64LE = rA(function (r, o = 0) {
    return sA(this, r, o, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
    (a.prototype.writeBigUInt64BE = rA(function (r, o = 0) {
      return p(this, r, o, BigInt(0), BigInt("0xffffffffffffffff"));
    })),
    (a.prototype.writeIntLE = function (r, o, B, l) {
      if (((r = +r), (o = o >>> 0), !l)) {
        const uA = Math.pow(2, 8 * B - 1);
        j(this, r, o, B, uA - 1, -uA);
      }
      let y = 0,
        b = 1,
        Z = 0;
      for (this[o] = r & 255; ++y < B && (b *= 256); )
        r < 0 && Z === 0 && this[o + y - 1] !== 0 && (Z = 1),
          (this[o + y] = (((r / b) >> 0) - Z) & 255);
      return o + B;
    }),
    (a.prototype.writeIntBE = function (r, o, B, l) {
      if (((r = +r), (o = o >>> 0), !l)) {
        const uA = Math.pow(2, 8 * B - 1);
        j(this, r, o, B, uA - 1, -uA);
      }
      let y = B - 1,
        b = 1,
        Z = 0;
      for (this[o + y] = r & 255; --y >= 0 && (b *= 256); )
        r < 0 && Z === 0 && this[o + y + 1] !== 0 && (Z = 1),
          (this[o + y] = (((r / b) >> 0) - Z) & 255);
      return o + B;
    }),
    (a.prototype.writeInt8 = function (r, o, B) {
      return (
        (r = +r),
        (o = o >>> 0),
        B || j(this, r, o, 1, 127, -128),
        r < 0 && (r = 255 + r + 1),
        (this[o] = r & 255),
        o + 1
      );
    }),
    (a.prototype.writeInt16LE = function (r, o, B) {
      return (
        (r = +r),
        (o = o >>> 0),
        B || j(this, r, o, 2, 32767, -32768),
        (this[o] = r & 255),
        (this[o + 1] = r >>> 8),
        o + 2
      );
    }),
    (a.prototype.writeInt16BE = function (r, o, B) {
      return (
        (r = +r),
        (o = o >>> 0),
        B || j(this, r, o, 2, 32767, -32768),
        (this[o] = r >>> 8),
        (this[o + 1] = r & 255),
        o + 2
      );
    }),
    (a.prototype.writeInt32LE = function (r, o, B) {
      return (
        (r = +r),
        (o = o >>> 0),
        B || j(this, r, o, 4, 2147483647, -2147483648),
        (this[o] = r & 255),
        (this[o + 1] = r >>> 8),
        (this[o + 2] = r >>> 16),
        (this[o + 3] = r >>> 24),
        o + 4
      );
    }),
    (a.prototype.writeInt32BE = function (r, o, B) {
      return (
        (r = +r),
        (o = o >>> 0),
        B || j(this, r, o, 4, 2147483647, -2147483648),
        r < 0 && (r = 4294967295 + r + 1),
        (this[o] = r >>> 24),
        (this[o + 1] = r >>> 16),
        (this[o + 2] = r >>> 8),
        (this[o + 3] = r & 255),
        o + 4
      );
    }),
    (a.prototype.writeBigInt64LE = rA(function (r, o = 0) {
      return sA(
        this,
        r,
        o,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    })),
    (a.prototype.writeBigInt64BE = rA(function (r, o = 0) {
      return p(
        this,
        r,
        o,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    }));
  function pA(n, r, o, B, l, y) {
    if (o + B > n.length) throw new RangeError("Index out of range");
    if (o < 0) throw new RangeError("Index out of range");
  }
  function lA(n, r, o, B, l) {
    return (
      (r = +r),
      (o = o >>> 0),
      l || pA(n, r, o, 4),
      t.write(n, r, o, B, 23, 4),
      o + 4
    );
  }
  (a.prototype.writeFloatLE = function (r, o, B) {
    return lA(this, r, o, !0, B);
  }),
    (a.prototype.writeFloatBE = function (r, o, B) {
      return lA(this, r, o, !1, B);
    });
  function yA(n, r, o, B, l) {
    return (
      (r = +r),
      (o = o >>> 0),
      l || pA(n, r, o, 8),
      t.write(n, r, o, B, 52, 8),
      o + 8
    );
  }
  (a.prototype.writeDoubleLE = function (r, o, B) {
    return yA(this, r, o, !0, B);
  }),
    (a.prototype.writeDoubleBE = function (r, o, B) {
      return yA(this, r, o, !1, B);
    }),
    (a.prototype.copy = function (r, o, B, l) {
      if (!a.isBuffer(r)) throw new TypeError("argument should be a Buffer");
      if (
        (B || (B = 0),
        !l && l !== 0 && (l = this.length),
        o >= r.length && (o = r.length),
        o || (o = 0),
        l > 0 && l < B && (l = B),
        l === B || r.length === 0 || this.length === 0)
      )
        return 0;
      if (o < 0) throw new RangeError("targetStart out of bounds");
      if (B < 0 || B >= this.length) throw new RangeError("Index out of range");
      if (l < 0) throw new RangeError("sourceEnd out of bounds");
      l > this.length && (l = this.length),
        r.length - o < l - B && (l = r.length - o + B);
      const y = l - B;
      return (
        this === r && typeof Uint8Array.prototype.copyWithin == "function"
          ? this.copyWithin(o, B, l)
          : Uint8Array.prototype.set.call(r, this.subarray(B, l), o),
        y
      );
    }),
    (a.prototype.fill = function (r, o, B, l) {
      if (typeof r == "string") {
        if (
          (typeof o == "string"
            ? ((l = o), (o = 0), (B = this.length))
            : typeof B == "string" && ((l = B), (B = this.length)),
          l !== void 0 && typeof l != "string")
        )
          throw new TypeError("encoding must be a string");
        if (typeof l == "string" && !a.isEncoding(l))
          throw new TypeError("Unknown encoding: " + l);
        if (r.length === 1) {
          const b = r.charCodeAt(0);
          ((l === "utf8" && b < 128) || l === "latin1") && (r = b);
        }
      } else
        typeof r == "number"
          ? (r = r & 255)
          : typeof r == "boolean" && (r = Number(r));
      if (o < 0 || this.length < o || this.length < B)
        throw new RangeError("Out of range index");
      if (B <= o) return this;
      (o = o >>> 0), (B = B === void 0 ? this.length : B >>> 0), r || (r = 0);
      let y;
      if (typeof r == "number") for (y = o; y < B; ++y) this[y] = r;
      else {
        const b = a.isBuffer(r) ? r : a.from(r, l),
          Z = b.length;
        if (Z === 0)
          throw new TypeError(
            'The value "' + r + '" is invalid for argument "value"'
          );
        for (y = 0; y < B - o; ++y) this[y + o] = b[y % Z];
      }
      return this;
    });
  const K = {};
  function tA(n, r, o) {
    K[n] = class extends o {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: r.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${n}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return n;
      }
      set code(l) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: l,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${n}]: ${this.message}`;
      }
    };
  }
  tA(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (n) {
      return n
        ? `${n} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ),
    tA(
      "ERR_INVALID_ARG_TYPE",
      function (n, r) {
        return `The "${n}" argument must be of type number. Received type ${typeof r}`;
      },
      TypeError
    ),
    tA(
      "ERR_OUT_OF_RANGE",
      function (n, r, o) {
        let B = `The value of "${n}" is out of range.`,
          l = o;
        return (
          Number.isInteger(o) && Math.abs(o) > 2 ** 32
            ? (l = C(String(o)))
            : typeof o == "bigint" &&
              ((l = String(o)),
              (o > BigInt(2) ** BigInt(32) || o < -(BigInt(2) ** BigInt(32))) &&
                (l = C(l)),
              (l += "n")),
          (B += ` It must be ${r}. Received ${l}`),
          B
        );
      },
      RangeError
    );
  function C(n) {
    let r = "",
      o = n.length;
    const B = n[0] === "-" ? 1 : 0;
    for (; o >= B + 4; o -= 3) r = `_${n.slice(o - 3, o)}${r}`;
    return `${n.slice(0, o)}${r}`;
  }
  function w(n, r, o) {
    R(r, "offset"),
      (n[r] === void 0 || n[r + o] === void 0) && F(r, n.length - (o + 1));
  }
  function D(n, r, o, B, l, y) {
    if (n > o || n < r) {
      const b = typeof r == "bigint" ? "n" : "";
      let Z;
      throw (
        (y > 3
          ? r === 0 || r === BigInt(0)
            ? (Z = `>= 0${b} and < 2${b} ** ${(y + 1) * 8}${b}`)
            : (Z = `>= -(2${b} ** ${(y + 1) * 8 - 1}${b}) and < 2 ** ${
                (y + 1) * 8 - 1
              }${b}`)
          : (Z = `>= ${r}${b} and <= ${o}${b}`),
        new K.ERR_OUT_OF_RANGE("value", Z, n))
      );
    }
    w(B, l, y);
  }
  function R(n, r) {
    if (typeof n != "number") throw new K.ERR_INVALID_ARG_TYPE(r, "number", n);
  }
  function F(n, r, o) {
    throw Math.floor(n) !== n
      ? (R(n, o), new K.ERR_OUT_OF_RANGE(o || "offset", "an integer", n))
      : r < 0
      ? new K.ERR_BUFFER_OUT_OF_BOUNDS()
      : new K.ERR_OUT_OF_RANGE(o || "offset", `>= ${o ? 1 : 0} and <= ${r}`, n);
  }
  const U = /[^+/0-9A-Za-z-_]/g;
  function I(n) {
    if (((n = n.split("=")[0]), (n = n.trim().replace(U, "")), n.length < 2))
      return "";
    for (; n.length % 4 !== 0; ) n = n + "=";
    return n;
  }
  function c(n, r) {
    r = r || 1 / 0;
    let o;
    const B = n.length;
    let l = null;
    const y = [];
    for (let b = 0; b < B; ++b) {
      if (((o = n.charCodeAt(b)), o > 55295 && o < 57344)) {
        if (!l) {
          if (o > 56319) {
            (r -= 3) > -1 && y.push(239, 191, 189);
            continue;
          } else if (b + 1 === B) {
            (r -= 3) > -1 && y.push(239, 191, 189);
            continue;
          }
          l = o;
          continue;
        }
        if (o < 56320) {
          (r -= 3) > -1 && y.push(239, 191, 189), (l = o);
          continue;
        }
        o = (((l - 55296) << 10) | (o - 56320)) + 65536;
      } else l && (r -= 3) > -1 && y.push(239, 191, 189);
      if (((l = null), o < 128)) {
        if ((r -= 1) < 0) break;
        y.push(o);
      } else if (o < 2048) {
        if ((r -= 2) < 0) break;
        y.push((o >> 6) | 192, (o & 63) | 128);
      } else if (o < 65536) {
        if ((r -= 3) < 0) break;
        y.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (o & 63) | 128);
      } else if (o < 1114112) {
        if ((r -= 4) < 0) break;
        y.push(
          (o >> 18) | 240,
          ((o >> 12) & 63) | 128,
          ((o >> 6) & 63) | 128,
          (o & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return y;
  }
  function g(n) {
    const r = [];
    for (let o = 0; o < n.length; ++o) r.push(n.charCodeAt(o) & 255);
    return r;
  }
  function h(n, r) {
    let o, B, l;
    const y = [];
    for (let b = 0; b < n.length && !((r -= 2) < 0); ++b)
      (o = n.charCodeAt(b)), (B = o >> 8), (l = o % 256), y.push(l), y.push(B);
    return y;
  }
  function Q(n) {
    return A.toByteArray(I(n));
  }
  function S(n, r, o, B) {
    let l;
    for (l = 0; l < B && !(l + o >= r.length || l >= n.length); ++l)
      r[l + o] = n[l];
    return l;
  }
  function T(n, r) {
    return (
      n instanceof r ||
      (n != null &&
        n.constructor != null &&
        n.constructor.name != null &&
        n.constructor.name === r.name)
    );
  }
  function O(n) {
    return n !== n;
  }
  const eA = (function () {
    const n = "0123456789abcdef",
      r = new Array(256);
    for (let o = 0; o < 16; ++o) {
      const B = o * 16;
      for (let l = 0; l < 16; ++l) r[B + l] = n[o] + n[l];
    }
    return r;
  })();
  function rA(n) {
    return typeof BigInt > "u" ? hA : n;
  }
  function hA() {
    throw new Error("BigInt not supported");
  }
})(Ne);
var Qn;
(function (e) {
  (e[(e.SysFatal = 1)] = "SysFatal"),
    (e[(e.SysTransient = 2)] = "SysTransient"),
    (e[(e.DestinationInvalid = 3)] = "DestinationInvalid"),
    (e[(e.CanisterReject = 4)] = "CanisterReject"),
    (e[(e.CanisterError = 5)] = "CanisterError");
})(Qn || (Qn = {}));
const pr = "abcdefghijklmnopqrstuvwxyz234567",
  Ee = Object.create(null);
for (let e = 0; e < pr.length; e++) Ee[pr[e]] = e;
Ee[0] = Ee.o;
Ee[1] = Ee.i;
function xa(e) {
  let A = 0,
    t = 0,
    i = "";
  function s(u) {
    return (
      A < 0 ? (t |= u >> -A) : (t = (u << A) & 248),
      A > 3 ? ((A -= 8), 1) : (A < 4 && ((i += pr[t >> 3]), (A += 5)), 0)
    );
  }
  for (let u = 0; u < e.length; ) u += s(e[u]);
  return i + (A < 0 ? pr[t >> 3] : "");
}
function Na(e) {
  let A = 0,
    t = 0;
  const i = new Uint8Array(((e.length * 4) / 3) | 0);
  let s = 0;
  function u(f) {
    let a = Ee[f.toLowerCase()];
    if (a === void 0)
      throw new Error(`Invalid character: ${JSON.stringify(f)}`);
    (a <<= 3),
      (t |= a >>> A),
      (A += 5),
      A >= 8 &&
        ((i[s++] = t), (A -= 8), A > 0 ? (t = (a << (5 - A)) & 255) : (t = 0));
  }
  for (const f of e) u(f);
  return i.slice(0, s);
}
const _a = new Uint32Array([
  0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685,
  2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995,
  2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648,
  2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990,
  1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755,
  2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145,
  1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206,
  2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980,
  1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705,
  3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527,
  1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772,
  4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290,
  251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719,
  3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925,
  453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202,
  4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960,
  984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733,
  3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467,
  855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048,
  3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054,
  702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443,
  3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945,
  2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430,
  2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580,
  2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225,
  1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143,
  2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732,
  1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850,
  2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135,
  1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109,
  3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954,
  1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920,
  3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877,
  83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603,
  3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992,
  534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934,
  4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795,
  376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105,
  3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270,
  936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108,
  3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449,
  601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471,
  3272380065, 1510334235, 755167117,
]);
function Fa(e) {
  const A = new Uint8Array(e);
  let t = -1;
  for (let i = 0; i < A.length; i++) {
    const u = (A[i] ^ t) & 255;
    t = _a[u] ^ (t >>> 8);
  }
  return (t ^ -1) >>> 0;
}
function Ra(e) {
  return (
    e instanceof Uint8Array ||
    (e != null && typeof e == "object" && e.constructor.name === "Uint8Array")
  );
}
function Ta(e, ...A) {
  if (!Ra(e)) throw new Error("Expected Uint8Array");
  if (A.length > 0 && !A.includes(e.length))
    throw new Error(
      `Expected Uint8Array of length ${A}, not of length=${e.length}`
    );
}
function Ii(e, A = !0) {
  if (e.destroyed) throw new Error("Hash instance has been destroyed");
  if (A && e.finished) throw new Error("Hash#digest() has already been called");
}
function Ua(e, A) {
  Ta(e);
  const t = A.outputLen;
  if (e.length < t)
    throw new Error(
      `digestInto() expects output buffer of length at least ${t}`
    );
}
const Wr =
  typeof globalThis == "object" && "crypto" in globalThis
    ? globalThis.crypto
    : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function ao(
  e
) {
  return (
    e instanceof Uint8Array ||
    (e != null && typeof e == "object" && e.constructor.name === "Uint8Array")
  );
}
const jr = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
  Qt = (e, A) => (e << (32 - A)) | (e >>> A),
  Ma = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Ma) throw new Error("Non little-endian hardware is not supported");
function co(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function go(e) {
  if ((typeof e == "string" && (e = co(e)), !ao(e)))
    throw new Error(`expected Uint8Array, got ${typeof e}`);
  return e;
}
function Ga(...e) {
  let A = 0;
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (!ao(s)) throw new Error("Uint8Array expected");
    A += s.length;
  }
  const t = new Uint8Array(A);
  for (let i = 0, s = 0; i < e.length; i++) {
    const u = e[i];
    t.set(u, s), (s += u.length);
  }
  return t;
}
class ka {
  clone() {
    return this._cloneInto();
  }
}
function qn(e) {
  const A = (i) => e().update(go(i)).digest(),
    t = e();
  return (
    (A.outputLen = t.outputLen),
    (A.blockLen = t.blockLen),
    (A.create = () => e()),
    A
  );
}
function La(e = 32) {
  if (Wr && typeof Wr.getRandomValues == "function")
    return Wr.getRandomValues(new Uint8Array(e));
  throw new Error("crypto.getRandomValues must be defined");
}
function va(e, A, t, i) {
  if (typeof e.setBigUint64 == "function") return e.setBigUint64(A, t, i);
  const s = BigInt(32),
    u = BigInt(4294967295),
    f = Number((t >> s) & u),
    a = Number(t & u),
    E = i ? 4 : 0,
    d = i ? 0 : 4;
  e.setUint32(A + E, f, i), e.setUint32(A + d, a, i);
}
class uo extends ka {
  constructor(A, t, i, s) {
    super(),
      (this.blockLen = A),
      (this.outputLen = t),
      (this.padOffset = i),
      (this.isLE = s),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(A)),
      (this.view = jr(this.buffer));
  }
  update(A) {
    Ii(this);
    const { view: t, buffer: i, blockLen: s } = this;
    A = go(A);
    const u = A.length;
    for (let f = 0; f < u; ) {
      const a = Math.min(s - this.pos, u - f);
      if (a === s) {
        const E = jr(A);
        for (; s <= u - f; f += s) this.process(E, f);
        continue;
      }
      i.set(A.subarray(f, f + a), this.pos),
        (this.pos += a),
        (f += a),
        this.pos === s && (this.process(t, 0), (this.pos = 0));
    }
    return (this.length += A.length), this.roundClean(), this;
  }
  digestInto(A) {
    Ii(this), Ua(A, this), (this.finished = !0);
    const { buffer: t, view: i, blockLen: s, isLE: u } = this;
    let { pos: f } = this;
    (t[f++] = 128),
      this.buffer.subarray(f).fill(0),
      this.padOffset > s - f && (this.process(i, 0), (f = 0));
    for (let N = f; N < s; N++) t[N] = 0;
    va(i, s - 8, BigInt(this.length * 8), u), this.process(i, 0);
    const a = jr(A),
      E = this.outputLen;
    if (E % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const d = E / 4,
      m = this.get();
    if (d > m.length) throw new Error("_sha2: outputLen bigger than state");
    for (let N = 0; N < d; N++) a.setUint32(4 * N, m[N], u);
  }
  digest() {
    const { buffer: A, outputLen: t } = this;
    this.digestInto(A);
    const i = A.slice(0, t);
    return this.destroy(), i;
  }
  _cloneInto(A) {
    A || (A = new this.constructor()), A.set(...this.get());
    const {
      blockLen: t,
      buffer: i,
      length: s,
      finished: u,
      destroyed: f,
      pos: a,
    } = this;
    return (
      (A.length = s),
      (A.pos = a),
      (A.finished = u),
      (A.destroyed = f),
      s % t && A.buffer.set(i),
      A
    );
  }
}
const Ha = (e, A, t) => (e & A) ^ (~e & t),
  Oa = (e, A, t) => (e & A) ^ (e & t) ^ (A & t),
  Ya = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Mt = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  Gt = new Uint32Array(64);
class fo extends uo {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = Mt[0] | 0),
      (this.B = Mt[1] | 0),
      (this.C = Mt[2] | 0),
      (this.D = Mt[3] | 0),
      (this.E = Mt[4] | 0),
      (this.F = Mt[5] | 0),
      (this.G = Mt[6] | 0),
      (this.H = Mt[7] | 0);
  }
  get() {
    const { A, B: t, C: i, D: s, E: u, F: f, G: a, H: E } = this;
    return [A, t, i, s, u, f, a, E];
  }
  set(A, t, i, s, u, f, a, E) {
    (this.A = A | 0),
      (this.B = t | 0),
      (this.C = i | 0),
      (this.D = s | 0),
      (this.E = u | 0),
      (this.F = f | 0),
      (this.G = a | 0),
      (this.H = E | 0);
  }
  process(A, t) {
    for (let N = 0; N < 16; N++, t += 4) Gt[N] = A.getUint32(t, !1);
    for (let N = 16; N < 64; N++) {
      const k = Gt[N - 15],
        _ = Gt[N - 2],
        G = Qt(k, 7) ^ Qt(k, 18) ^ (k >>> 3),
        L = Qt(_, 17) ^ Qt(_, 19) ^ (_ >>> 10);
      Gt[N] = (L + Gt[N - 7] + G + Gt[N - 16]) | 0;
    }
    let { A: i, B: s, C: u, D: f, E: a, F: E, G: d, H: m } = this;
    for (let N = 0; N < 64; N++) {
      const k = Qt(a, 6) ^ Qt(a, 11) ^ Qt(a, 25),
        _ = (m + k + Ha(a, E, d) + Ya[N] + Gt[N]) | 0,
        L = ((Qt(i, 2) ^ Qt(i, 13) ^ Qt(i, 22)) + Oa(i, s, u)) | 0;
      (m = d),
        (d = E),
        (E = a),
        (a = (f + _) | 0),
        (f = u),
        (u = s),
        (s = i),
        (i = (_ + L) | 0);
    }
    (i = (i + this.A) | 0),
      (s = (s + this.B) | 0),
      (u = (u + this.C) | 0),
      (f = (f + this.D) | 0),
      (a = (a + this.E) | 0),
      (E = (E + this.F) | 0),
      (d = (d + this.G) | 0),
      (m = (m + this.H) | 0),
      this.set(i, s, u, f, a, E, d, m);
  }
  roundClean() {
    Gt.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class qa extends fo {
  constructor() {
    super(),
      (this.A = -1056596264),
      (this.B = 914150663),
      (this.C = 812702999),
      (this.D = -150054599),
      (this.E = -4191439),
      (this.F = 1750603025),
      (this.G = 1694076839),
      (this.H = -1090891868),
      (this.outputLen = 28);
  }
}
const Ja = qn(() => new fo()),
  Ka = qn(() => new qa());
function Pa(e) {
  return Ka.create().update(new Uint8Array(e)).digest();
}
const Ve = "__principal__",
  Wa = 2,
  hi = 4,
  ja = "aaaaa-aa",
  Va = (e) => {
    var A;
    return new Uint8Array(
      ((A = e.match(/.{1,2}/g)) !== null && A !== void 0 ? A : []).map((t) =>
        parseInt(t, 16)
      )
    );
  },
  za = (e) => e.reduce((A, t) => A + t.toString(16).padStart(2, "0"), "");
let xA = class cr {
  constructor(A) {
    (this._arr = A), (this._isPrincipal = !0);
  }
  static anonymous() {
    return new this(new Uint8Array([hi]));
  }
  static managementCanister() {
    return this.fromHex(ja);
  }
  static selfAuthenticating(A) {
    const t = Pa(A);
    return new this(new Uint8Array([...t, Wa]));
  }
  static from(A) {
    if (typeof A == "string") return cr.fromText(A);
    if (Object.getPrototypeOf(A) === Uint8Array.prototype) return new cr(A);
    if (typeof A == "object" && A !== null && A._isPrincipal === !0)
      return new cr(A._arr);
    throw new Error(`Impossible to convert ${JSON.stringify(A)} to Principal.`);
  }
  static fromHex(A) {
    return new this(Va(A));
  }
  static fromText(A) {
    let t = A;
    if (A.includes(Ve)) {
      const f = JSON.parse(A);
      Ve in f && (t = f[Ve]);
    }
    const i = t.toLowerCase().replace(/-/g, "");
    let s = Na(i);
    s = s.slice(4, s.length);
    const u = new this(s);
    if (u.toText() !== t)
      throw new Error(
        `Principal "${u.toText()}" does not have a valid checksum (original value "${t}" may not be a valid Principal ID).`
      );
    return u;
  }
  static fromUint8Array(A) {
    return new this(A);
  }
  isAnonymous() {
    return this._arr.byteLength === 1 && this._arr[0] === hi;
  }
  toUint8Array() {
    return this._arr;
  }
  toHex() {
    return za(this._arr).toUpperCase();
  }
  toText() {
    const A = new ArrayBuffer(4);
    new DataView(A).setUint32(0, Fa(this._arr));
    const i = new Uint8Array(A),
      s = Uint8Array.from(this._arr),
      u = new Uint8Array([...i, ...s]),
      a = xa(u).match(/.{1,5}/g);
    if (!a) throw new Error();
    return a.join("-");
  }
  toString() {
    return this.toText();
  }
  toJSON() {
    return { [Ve]: this.toText() };
  }
  compareTo(A) {
    for (let t = 0; t < Math.min(this._arr.length, A._arr.length); t++) {
      if (this._arr[t] < A._arr[t]) return "lt";
      if (this._arr[t] > A._arr[t]) return "gt";
    }
    return this._arr.length < A._arr.length
      ? "lt"
      : this._arr.length > A._arr.length
      ? "gt"
      : "eq";
  }
  ltEq(A) {
    const t = this.compareTo(A);
    return t == "lt" || t == "eq";
  }
  gtEq(A) {
    const t = this.compareTo(A);
    return t == "gt" || t == "eq";
  }
};
class Rt extends Error {
  constructor(A) {
    super(A), (this.message = A), Object.setPrototypeOf(this, Rt.prototype);
  }
}
function RA(...e) {
  const A = new Uint8Array(e.reduce((i, s) => i + s.byteLength, 0));
  let t = 0;
  for (const i of e) A.set(new Uint8Array(i), t), (t += i.byteLength);
  return A;
}
class Qe {
  constructor(A, t = A?.byteLength || 0) {
    (this._buffer = A || new ArrayBuffer(0)),
      (this._view = new Uint8Array(this._buffer, 0, t));
  }
  get buffer() {
    return this._view.slice();
  }
  get byteLength() {
    return this._view.byteLength;
  }
  read(A) {
    const t = this._view.subarray(0, A);
    return (this._view = this._view.subarray(A)), t.slice().buffer;
  }
  readUint8() {
    const A = this._view[0];
    return (this._view = this._view.subarray(1)), A;
  }
  write(A) {
    const t = new Uint8Array(A),
      i = this._view.byteLength;
    this._view.byteOffset + this._view.byteLength + t.byteLength >=
    this._buffer.byteLength
      ? this.alloc(t.byteLength)
      : (this._view = new Uint8Array(
          this._buffer,
          this._view.byteOffset,
          this._view.byteLength + t.byteLength
        )),
      this._view.set(t, i);
  }
  get end() {
    return this._view.byteLength === 0;
  }
  alloc(A) {
    const t = new ArrayBuffer(((this._buffer.byteLength + A) * 1.2) | 0),
      i = new Uint8Array(t, 0, this._view.byteLength + A);
    i.set(this._view), (this._buffer = t), (this._view = i);
  }
}
function $a(e) {
  const t = new TextEncoder().encode(e);
  let i = 0;
  for (const s of t) i = (i * 223 + s) % 2 ** 32;
  return i;
}
function yt(e) {
  if (/^_\d+_$/.test(e) || /^_0x[0-9a-fA-F]+_$/.test(e)) {
    const A = +e.slice(1, -1);
    if (Number.isSafeInteger(A) && A >= 0 && A < 2 ** 32) return A;
  }
  return $a(e);
}
function Bo() {
  throw new Error("unexpected end of buffer");
}
function re(e, A) {
  return e.byteLength < A && Bo(), e.read(A);
}
function ne(e) {
  const A = e.readUint8();
  return A === void 0 && Bo(), A;
}
function vA(e) {
  if ((typeof e == "number" && (e = BigInt(e)), e < BigInt(0)))
    throw new Error("Cannot leb encode negative values.");
  const A = (e === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(e)))) + 1,
    t = new Qe(new ArrayBuffer(A), 0);
  for (;;) {
    const i = Number(e & BigInt(127));
    if (((e /= BigInt(128)), e === BigInt(0))) {
      t.write(new Uint8Array([i]));
      break;
    } else t.write(new Uint8Array([i | 128]));
  }
  return t.buffer;
}
function jA(e) {
  let A = BigInt(1),
    t = BigInt(0),
    i;
  do (i = ne(e)), (t += BigInt(i & 127).valueOf() * A), (A *= BigInt(128));
  while (i >= 128);
  return t;
}
function JA(e) {
  typeof e == "number" && (e = BigInt(e));
  const A = e < BigInt(0);
  A && (e = -e - BigInt(1));
  const t = (e === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(e)))) + 1,
    i = new Qe(new ArrayBuffer(t), 0);
  for (;;) {
    const u = s(e);
    if (
      ((e /= BigInt(128)),
      (A && e === BigInt(0) && u & 64) || (!A && e === BigInt(0) && !(u & 64)))
    ) {
      i.write(new Uint8Array([u]));
      break;
    } else i.write(new Uint8Array([u | 128]));
  }
  function s(u) {
    const f = u % BigInt(128);
    return Number(A ? BigInt(128) - f - BigInt(1) : f);
  }
  return i.buffer;
}
function Yt(e) {
  const A = new Uint8Array(e.buffer);
  let t = 0;
  for (; t < A.byteLength; t++)
    if (A[t] < 128) {
      if (!(A[t] & 64)) return jA(e);
      break;
    }
  const i = new Uint8Array(re(e, t + 1));
  let s = BigInt(0);
  for (let u = i.byteLength - 1; u >= 0; u--)
    s = s * BigInt(128) + BigInt(128 - (i[u] & 127) - 1);
  return -s - BigInt(1);
}
function Za(e, A) {
  if (BigInt(e) < BigInt(0)) throw new Error("Cannot write negative values.");
  return Io(e, A);
}
function Io(e, A) {
  e = BigInt(e);
  const t = new Qe(new ArrayBuffer(Math.min(1, A)), 0);
  let i = 0,
    s = BigInt(256),
    u = BigInt(0),
    f = Number(e % s);
  for (t.write(new Uint8Array([f])); ++i < A; )
    e < 0 && u === BigInt(0) && f !== 0 && (u = BigInt(1)),
      (f = Number((e / s - u) % BigInt(256))),
      t.write(new Uint8Array([f])),
      (s *= BigInt(256));
  return t.buffer;
}
function ho(e, A) {
  let t = BigInt(ne(e)),
    i = BigInt(1),
    s = 0;
  for (; ++s < A; ) {
    i *= BigInt(256);
    const u = BigInt(ne(e));
    t = t + i * u;
  }
  return t;
}
function Xa(e, A) {
  let t = ho(e, A);
  const i = BigInt(2) ** (BigInt(8) * BigInt(A - 1) + BigInt(7));
  return t >= i && (t -= i * BigInt(2)), t;
}
function Cn(e) {
  const A = BigInt(e);
  if (e < 0) throw new RangeError("Input must be non-negative");
  return BigInt(1) << A;
}
const gr = "DIDL",
  Ei = 400;
function _e(e, A, t) {
  return e.map((i, s) => t(i, A[s]));
}
class Ac {
  constructor() {
    (this._typs = []), (this._idx = new Map());
  }
  has(A) {
    return this._idx.has(A.name);
  }
  add(A, t) {
    const i = this._typs.length;
    this._idx.set(A.name, i), this._typs.push(t);
  }
  merge(A, t) {
    const i = this._idx.get(A.name),
      s = this._idx.get(t);
    if (i === void 0) throw new Error("Missing type index for " + A);
    if (s === void 0) throw new Error("Missing type index for " + t);
    (this._typs[i] = this._typs[s]),
      this._typs.splice(s, 1),
      this._idx.delete(t);
  }
  encode() {
    const A = vA(this._typs.length),
      t = RA(...this._typs);
    return RA(A, t);
  }
  indexOf(A) {
    if (!this._idx.has(A)) throw new Error("Missing type index for " + A);
    return JA(this._idx.get(A) || 0);
  }
}
class tc {
  visitType(A, t) {
    throw new Error("Not implemented");
  }
  visitPrimitive(A, t) {
    return this.visitType(A, t);
  }
  visitEmpty(A, t) {
    return this.visitPrimitive(A, t);
  }
  visitBool(A, t) {
    return this.visitPrimitive(A, t);
  }
  visitNull(A, t) {
    return this.visitPrimitive(A, t);
  }
  visitReserved(A, t) {
    return this.visitPrimitive(A, t);
  }
  visitText(A, t) {
    return this.visitPrimitive(A, t);
  }
  visitNumber(A, t) {
    return this.visitPrimitive(A, t);
  }
  visitInt(A, t) {
    return this.visitNumber(A, t);
  }
  visitNat(A, t) {
    return this.visitNumber(A, t);
  }
  visitFloat(A, t) {
    return this.visitPrimitive(A, t);
  }
  visitFixedInt(A, t) {
    return this.visitNumber(A, t);
  }
  visitFixedNat(A, t) {
    return this.visitNumber(A, t);
  }
  visitPrincipal(A, t) {
    return this.visitPrimitive(A, t);
  }
  visitConstruct(A, t) {
    return this.visitType(A, t);
  }
  visitVec(A, t, i) {
    return this.visitConstruct(A, i);
  }
  visitOpt(A, t, i) {
    return this.visitConstruct(A, i);
  }
  visitRecord(A, t, i) {
    return this.visitConstruct(A, i);
  }
  visitTuple(A, t, i) {
    const s = t.map((u, f) => [`_${f}_`, u]);
    return this.visitRecord(A, s, i);
  }
  visitVariant(A, t, i) {
    return this.visitConstruct(A, i);
  }
  visitRec(A, t, i) {
    return this.visitConstruct(t, i);
  }
  visitFunc(A, t) {
    return this.visitConstruct(A, t);
  }
  visitService(A, t) {
    return this.visitConstruct(A, t);
  }
}
class Fr {
  display() {
    return this.name;
  }
  valueToString(A) {
    return OA(A);
  }
  buildTypeTable(A) {
    A.has(this) || this._buildTypeTableImpl(A);
  }
}
class ct extends Fr {
  checkType(A) {
    if (this.name !== A.name)
      throw new Error(
        `type mismatch: type on the wire ${A.name}, expect type ${this.name}`
      );
    return A;
  }
  _buildTypeTableImpl(A) {}
}
class $t extends Fr {
  checkType(A) {
    if (A instanceof Zt) {
      const t = A.getType();
      if (typeof t > "u")
        throw new Error("type mismatch with uninitialized type");
      return t;
    }
    throw new Error(
      `type mismatch: type on the wire ${A.name}, expect type ${this.name}`
    );
  }
  encodeType(A) {
    return A.indexOf(this.name);
  }
}
class Eo extends ct {
  accept(A, t) {
    return A.visitEmpty(this, t);
  }
  covariant(A) {
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue() {
    throw new Error("Empty cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Empty cannot appear as a value");
  }
  encodeType() {
    return JA(-17);
  }
  decodeValue() {
    throw new Error("Empty cannot appear as an output");
  }
  get name() {
    return "empty";
  }
}
class lo extends Fr {
  checkType(A) {
    throw new Error("Method not implemented for unknown.");
  }
  accept(A, t) {
    throw A.visitType(this, t);
  }
  covariant(A) {
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue() {
    throw new Error("Unknown cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Unknown cannot appear as a value");
  }
  encodeType() {
    throw new Error("Unknown cannot be serialized");
  }
  decodeValue(A, t) {
    let i = t.decodeValue(A, t);
    Object(i) !== i && (i = Object(i));
    let s;
    return (
      t instanceof Zt ? (s = () => t.getType()) : (s = () => t),
      Object.defineProperty(i, "type", {
        value: s,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      i
    );
  }
  _buildTypeTableImpl() {
    throw new Error("Unknown cannot be serialized");
  }
  get name() {
    return "Unknown";
  }
}
class Qo extends ct {
  accept(A, t) {
    return A.visitBool(this, t);
  }
  covariant(A) {
    if (typeof A == "boolean") return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    return new Uint8Array([A ? 1 : 0]);
  }
  encodeType() {
    return JA(-2);
  }
  decodeValue(A, t) {
    switch ((this.checkType(t), ne(A))) {
      case 0:
        return !1;
      case 1:
        return !0;
      default:
        throw new Error("Boolean value out of range");
    }
  }
  get name() {
    return "bool";
  }
}
class Co extends ct {
  accept(A, t) {
    return A.visitNull(this, t);
  }
  covariant(A) {
    if (A === null) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue() {
    return new ArrayBuffer(0);
  }
  encodeType() {
    return JA(-1);
  }
  decodeValue(A, t) {
    return this.checkType(t), null;
  }
  get name() {
    return "null";
  }
}
class wr extends ct {
  accept(A, t) {
    return A.visitReserved(this, t);
  }
  covariant(A) {
    return !0;
  }
  encodeValue() {
    return new ArrayBuffer(0);
  }
  encodeType() {
    return JA(-16);
  }
  decodeValue(A, t) {
    return t.name !== this.name && t.decodeValue(A, t), null;
  }
  get name() {
    return "reserved";
  }
}
class po extends ct {
  accept(A, t) {
    return A.visitText(this, t);
  }
  covariant(A) {
    if (typeof A == "string") return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    const t = new TextEncoder().encode(A),
      i = vA(t.byteLength);
    return RA(i, t);
  }
  encodeType() {
    return JA(-15);
  }
  decodeValue(A, t) {
    this.checkType(t);
    const i = jA(A),
      s = re(A, Number(i));
    return new TextDecoder("utf8", { fatal: !0 }).decode(s);
  }
  get name() {
    return "text";
  }
  valueToString(A) {
    return '"' + A + '"';
  }
}
class wo extends ct {
  accept(A, t) {
    return A.visitInt(this, t);
  }
  covariant(A) {
    if (typeof A == "bigint" || Number.isInteger(A)) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    return JA(A);
  }
  encodeType() {
    return JA(-4);
  }
  decodeValue(A, t) {
    return this.checkType(t), Yt(A);
  }
  get name() {
    return "int";
  }
  valueToString(A) {
    return A.toString();
  }
}
class yo extends ct {
  accept(A, t) {
    return A.visitNat(this, t);
  }
  covariant(A) {
    if (
      (typeof A == "bigint" && A >= BigInt(0)) ||
      (Number.isInteger(A) && A >= 0)
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    return vA(A);
  }
  encodeType() {
    return JA(-3);
  }
  decodeValue(A, t) {
    return this.checkType(t), jA(A);
  }
  get name() {
    return "nat";
  }
  valueToString(A) {
    return A.toString();
  }
}
class Jn extends ct {
  constructor(A) {
    if ((super(), (this._bits = A), A !== 32 && A !== 64))
      throw new Error("not a valid float type");
  }
  accept(A, t) {
    return A.visitFloat(this, t);
  }
  covariant(A) {
    if (typeof A == "number" || A instanceof Number) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    const t = new ArrayBuffer(this._bits / 8),
      i = new DataView(t);
    return (
      this._bits === 32 ? i.setFloat32(0, A, !0) : i.setFloat64(0, A, !0), t
    );
  }
  encodeType() {
    const A = this._bits === 32 ? -13 : -14;
    return JA(A);
  }
  decodeValue(A, t) {
    this.checkType(t);
    const i = re(A, this._bits / 8),
      s = new DataView(i);
    return this._bits === 32 ? s.getFloat32(0, !0) : s.getFloat64(0, !0);
  }
  get name() {
    return "float" + this._bits;
  }
  valueToString(A) {
    return A.toString();
  }
}
class ie extends ct {
  constructor(A) {
    super(), (this._bits = A);
  }
  accept(A, t) {
    return A.visitFixedInt(this, t);
  }
  covariant(A) {
    const t = Cn(this._bits - 1) * BigInt(-1),
      i = Cn(this._bits - 1) - BigInt(1);
    let s = !1;
    if (typeof A == "bigint") s = A >= t && A <= i;
    else if (Number.isInteger(A)) {
      const u = BigInt(A);
      s = u >= t && u <= i;
    } else s = !1;
    if (s) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    return Io(A, this._bits / 8);
  }
  encodeType() {
    const A = Math.log2(this._bits) - 3;
    return JA(-9 - A);
  }
  decodeValue(A, t) {
    this.checkType(t);
    const i = Xa(A, this._bits / 8);
    return this._bits <= 32 ? Number(i) : i;
  }
  get name() {
    return `int${this._bits}`;
  }
  valueToString(A) {
    return A.toString();
  }
}
class jt extends ct {
  constructor(A) {
    super(), (this._bits = A);
  }
  accept(A, t) {
    return A.visitFixedNat(this, t);
  }
  covariant(A) {
    const t = Cn(this._bits);
    let i = !1;
    if (
      (typeof A == "bigint" && A >= BigInt(0)
        ? (i = A < t)
        : Number.isInteger(A) && A >= 0
        ? (i = BigInt(A) < t)
        : (i = !1),
      i)
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    return Za(A, this._bits / 8);
  }
  encodeType() {
    const A = Math.log2(this._bits) - 3;
    return JA(-5 - A);
  }
  decodeValue(A, t) {
    this.checkType(t);
    const i = ho(A, this._bits / 8);
    return this._bits <= 32 ? Number(i) : i;
  }
  get name() {
    return `nat${this._bits}`;
  }
  valueToString(A) {
    return A.toString();
  }
}
class Rr extends $t {
  constructor(A) {
    super(),
      (this._type = A),
      (this._blobOptimization = !1),
      A instanceof jt && A._bits === 8 && (this._blobOptimization = !0);
  }
  accept(A, t) {
    return A.visitVec(this, this._type, t);
  }
  covariant(A) {
    const t =
      this._type instanceof jt
        ? this._type._bits
        : this._type instanceof ie
        ? this._type._bits
        : 0;
    if (
      (ArrayBuffer.isView(A) && t == A.BYTES_PER_ELEMENT * 8) ||
      (Array.isArray(A) &&
        A.every((i, s) => {
          try {
            return this._type.covariant(i);
          } catch (u) {
            throw new Error(`Invalid ${this.display()} argument: 

index ${s} -> ${u.message}`);
          }
        }))
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    const t = vA(A.length);
    if (this._blobOptimization) return RA(t, new Uint8Array(A));
    if (ArrayBuffer.isView(A)) return RA(t, new Uint8Array(A.buffer));
    const i = new Qe(new ArrayBuffer(t.byteLength + A.length), 0);
    i.write(t);
    for (const s of A) {
      const u = this._type.encodeValue(s);
      i.write(new Uint8Array(u));
    }
    return i.buffer;
  }
  _buildTypeTableImpl(A) {
    this._type.buildTypeTable(A);
    const t = JA(-19),
      i = this._type.encodeType(A);
    A.add(this, RA(t, i));
  }
  decodeValue(A, t) {
    const i = this.checkType(t);
    if (!(i instanceof Rr)) throw new Error("Not a vector type");
    const s = Number(jA(A));
    if (this._type instanceof jt) {
      if (this._type._bits == 8) return new Uint8Array(A.read(s));
      if (this._type._bits == 16) return new Uint16Array(A.read(s * 2));
      if (this._type._bits == 32) return new Uint32Array(A.read(s * 4));
      if (this._type._bits == 64) return new BigUint64Array(A.read(s * 8));
    }
    if (this._type instanceof ie) {
      if (this._type._bits == 8) return new Int8Array(A.read(s));
      if (this._type._bits == 16) return new Int16Array(A.read(s * 2));
      if (this._type._bits == 32) return new Int32Array(A.read(s * 4));
      if (this._type._bits == 64) return new BigInt64Array(A.read(s * 8));
    }
    const u = [];
    for (let f = 0; f < s; f++) u.push(this._type.decodeValue(A, i._type));
    return u;
  }
  get name() {
    return `vec ${this._type.name}`;
  }
  display() {
    return `vec ${this._type.display()}`;
  }
  valueToString(A) {
    return "vec {" + A.map((i) => this._type.valueToString(i)).join("; ") + "}";
  }
}
class le extends $t {
  constructor(A) {
    super(), (this._type = A);
  }
  accept(A, t) {
    return A.visitOpt(this, this._type, t);
  }
  covariant(A) {
    try {
      if (
        Array.isArray(A) &&
        (A.length === 0 || (A.length === 1 && this._type.covariant(A[0])))
      )
        return !0;
    } catch (t) {
      throw new Error(`Invalid ${this.display()} argument: ${OA(A)} 

-> ${t.message}`);
    }
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    return A.length === 0
      ? new Uint8Array([0])
      : RA(new Uint8Array([1]), this._type.encodeValue(A[0]));
  }
  _buildTypeTableImpl(A) {
    this._type.buildTypeTable(A);
    const t = JA(-18),
      i = this._type.encodeType(A);
    A.add(this, RA(t, i));
  }
  decodeValue(A, t) {
    const i = this.checkType(t);
    if (!(i instanceof le)) throw new Error("Not an option type");
    switch (ne(A)) {
      case 0:
        return [];
      case 1:
        return [this._type.decodeValue(A, i._type)];
      default:
        throw new Error("Not an option value");
    }
  }
  get name() {
    return `opt ${this._type.name}`;
  }
  display() {
    return `opt ${this._type.display()}`;
  }
  valueToString(A) {
    return A.length === 0 ? "null" : `opt ${this._type.valueToString(A[0])}`;
  }
}
class Le extends $t {
  constructor(A = {}) {
    super(),
      (this._fields = Object.entries(A).sort((t, i) => yt(t[0]) - yt(i[0])));
  }
  accept(A, t) {
    return A.visitRecord(this, this._fields, t);
  }
  tryAsTuple() {
    const A = [];
    for (let t = 0; t < this._fields.length; t++) {
      const [i, s] = this._fields[t];
      if (i !== `_${t}_`) return null;
      A.push(s);
    }
    return A;
  }
  covariant(A) {
    if (
      typeof A == "object" &&
      this._fields.every(([t, i]) => {
        if (!A.hasOwnProperty(t))
          throw new Error(`Record is missing key "${t}".`);
        try {
          return i.covariant(A[t]);
        } catch (s) {
          throw new Error(`Invalid ${this.display()} argument: 

field ${t} -> ${s.message}`);
        }
      })
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    const t = this._fields.map(([s]) => A[s]),
      i = _e(this._fields, t, ([, s], u) => s.encodeValue(u));
    return RA(...i);
  }
  _buildTypeTableImpl(A) {
    this._fields.forEach(([u, f]) => f.buildTypeTable(A));
    const t = JA(-20),
      i = vA(this._fields.length),
      s = this._fields.map(([u, f]) => RA(vA(yt(u)), f.encodeType(A)));
    A.add(this, RA(t, i, RA(...s)));
  }
  decodeValue(A, t) {
    const i = this.checkType(t);
    if (!(i instanceof Le)) throw new Error("Not a record type");
    const s = {};
    let u = 0,
      f = 0;
    for (; f < i._fields.length; ) {
      const [a, E] = i._fields[f];
      if (u >= this._fields.length) {
        E.decodeValue(A, E), f++;
        continue;
      }
      const [d, m] = this._fields[u],
        N = yt(this._fields[u][0]),
        k = yt(a);
      if (N === k) (s[d] = m.decodeValue(A, E)), u++, f++;
      else if (k > N)
        if (m instanceof le || m instanceof wr) (s[d] = []), u++;
        else throw new Error("Cannot find required field " + d);
      else E.decodeValue(A, E), f++;
    }
    for (const [a, E] of this._fields.slice(u))
      if (E instanceof le || E instanceof wr) s[a] = [];
      else throw new Error("Cannot find required field " + a);
    return s;
  }
  get name() {
    return `record {${this._fields
      .map(([t, i]) => t + ":" + i.name)
      .join("; ")}}`;
  }
  display() {
    return `record {${this._fields
      .map(([t, i]) => t + ":" + i.display())
      .join("; ")}}`;
  }
  valueToString(A) {
    const t = this._fields.map(([s]) => A[s]);
    return `record {${_e(
      this._fields,
      t,
      ([s, u], f) => s + "=" + u.valueToString(f)
    ).join("; ")}}`;
  }
}
class Tr extends Le {
  constructor(A) {
    const t = {};
    A.forEach((i, s) => (t["_" + s + "_"] = i)),
      super(t),
      (this._components = A);
  }
  accept(A, t) {
    return A.visitTuple(this, this._components, t);
  }
  covariant(A) {
    if (
      Array.isArray(A) &&
      A.length >= this._fields.length &&
      this._components.every((t, i) => {
        try {
          return t.covariant(A[i]);
        } catch (s) {
          throw new Error(`Invalid ${this.display()} argument: 

index ${i} -> ${s.message}`);
        }
      })
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    const t = _e(this._components, A, (i, s) => i.encodeValue(s));
    return RA(...t);
  }
  decodeValue(A, t) {
    const i = this.checkType(t);
    if (!(i instanceof Tr)) throw new Error("not a tuple type");
    if (i._components.length < this._components.length)
      throw new Error("tuple mismatch");
    const s = [];
    for (const [u, f] of i._components.entries())
      u >= this._components.length
        ? f.decodeValue(A, f)
        : s.push(this._components[u].decodeValue(A, f));
    return s;
  }
  display() {
    return `record {${this._components.map((t) => t.display()).join("; ")}}`;
  }
  valueToString(A) {
    return `record {${_e(this._components, A, (i, s) =>
      i.valueToString(s)
    ).join("; ")}}`;
  }
}
class Ur extends $t {
  constructor(A = {}) {
    super(),
      (this._fields = Object.entries(A).sort((t, i) => yt(t[0]) - yt(i[0])));
  }
  accept(A, t) {
    return A.visitVariant(this, this._fields, t);
  }
  covariant(A) {
    if (
      typeof A == "object" &&
      Object.entries(A).length === 1 &&
      this._fields.every(([t, i]) => {
        try {
          return !A.hasOwnProperty(t) || i.covariant(A[t]);
        } catch (s) {
          throw new Error(`Invalid ${this.display()} argument: 

variant ${t} -> ${s.message}`);
        }
      })
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    for (let t = 0; t < this._fields.length; t++) {
      const [i, s] = this._fields[t];
      if (A.hasOwnProperty(i)) {
        const u = vA(t),
          f = s.encodeValue(A[i]);
        return RA(u, f);
      }
    }
    throw Error("Variant has no data: " + A);
  }
  _buildTypeTableImpl(A) {
    this._fields.forEach(([, u]) => {
      u.buildTypeTable(A);
    });
    const t = JA(-21),
      i = vA(this._fields.length),
      s = this._fields.map(([u, f]) => RA(vA(yt(u)), f.encodeType(A)));
    A.add(this, RA(t, i, ...s));
  }
  decodeValue(A, t) {
    const i = this.checkType(t);
    if (!(i instanceof Ur)) throw new Error("Not a variant type");
    const s = Number(jA(A));
    if (s >= i._fields.length) throw Error("Invalid variant index: " + s);
    const [u, f] = i._fields[s];
    for (const [a, E] of this._fields)
      if (yt(u) === yt(a)) {
        const d = E.decodeValue(A, f);
        return { [a]: d };
      }
    throw new Error("Cannot find field hash " + u);
  }
  get name() {
    return `variant {${this._fields
      .map(([t, i]) => t + ":" + i.name)
      .join("; ")}}`;
  }
  display() {
    return `variant {${this._fields
      .map(([t, i]) => t + (i.name === "null" ? "" : `:${i.display()}`))
      .join("; ")}}`;
  }
  valueToString(A) {
    for (const [t, i] of this._fields)
      if (A.hasOwnProperty(t)) {
        const s = i.valueToString(A[t]);
        return s === "null" ? `variant {${t}}` : `variant {${t}=${s}}`;
      }
    throw new Error("Variant has no data: " + A);
  }
}
class Zt extends $t {
  constructor() {
    super(...arguments), (this._id = Zt._counter++), (this._type = void 0);
  }
  accept(A, t) {
    if (!this._type) throw Error("Recursive type uninitialized.");
    return A.visitRec(this, this._type, t);
  }
  fill(A) {
    this._type = A;
  }
  getType() {
    return this._type;
  }
  covariant(A) {
    if (this._type && this._type.covariant(A)) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    if (!this._type) throw Error("Recursive type uninitialized.");
    return this._type.encodeValue(A);
  }
  _buildTypeTableImpl(A) {
    if (!this._type) throw Error("Recursive type uninitialized.");
    A.add(this, new Uint8Array([])),
      this._type.buildTypeTable(A),
      A.merge(this, this._type.name);
  }
  decodeValue(A, t) {
    if (!this._type) throw Error("Recursive type uninitialized.");
    return this._type.decodeValue(A, t);
  }
  get name() {
    return `rec_${this._id}`;
  }
  display() {
    if (!this._type) throw Error("Recursive type uninitialized.");
    return `μ${this.name}.${this._type.name}`;
  }
  valueToString(A) {
    if (!this._type) throw Error("Recursive type uninitialized.");
    return this._type.valueToString(A);
  }
}
Zt._counter = 0;
function Kn(e) {
  if (ne(e) !== 1) throw new Error("Cannot decode principal");
  const t = Number(jA(e));
  return xA.fromUint8Array(new Uint8Array(re(e, t)));
}
class mo extends ct {
  accept(A, t) {
    return A.visitPrincipal(this, t);
  }
  covariant(A) {
    if (A && A._isPrincipal) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    const t = A.toUint8Array(),
      i = vA(t.byteLength);
    return RA(new Uint8Array([1]), i, t);
  }
  encodeType() {
    return JA(-24);
  }
  decodeValue(A, t) {
    return this.checkType(t), Kn(A);
  }
  get name() {
    return "principal";
  }
  valueToString(A) {
    return `${this.name} "${A.toText()}"`;
  }
}
class Pn extends $t {
  constructor(A, t, i = []) {
    super(), (this.argTypes = A), (this.retTypes = t), (this.annotations = i);
  }
  static argsToString(A, t) {
    if (A.length !== t.length) throw new Error("arity mismatch");
    return "(" + A.map((i, s) => i.valueToString(t[s])).join(", ") + ")";
  }
  accept(A, t) {
    return A.visitFunc(this, t);
  }
  covariant(A) {
    if (
      Array.isArray(A) &&
      A.length === 2 &&
      A[0] &&
      A[0]._isPrincipal &&
      typeof A[1] == "string"
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue([A, t]) {
    const i = A.toUint8Array(),
      s = vA(i.byteLength),
      u = RA(new Uint8Array([1]), s, i),
      f = new TextEncoder().encode(t),
      a = vA(f.byteLength);
    return RA(new Uint8Array([1]), u, a, f);
  }
  _buildTypeTableImpl(A) {
    this.argTypes.forEach((d) => d.buildTypeTable(A)),
      this.retTypes.forEach((d) => d.buildTypeTable(A));
    const t = JA(-22),
      i = vA(this.argTypes.length),
      s = RA(...this.argTypes.map((d) => d.encodeType(A))),
      u = vA(this.retTypes.length),
      f = RA(...this.retTypes.map((d) => d.encodeType(A))),
      a = vA(this.annotations.length),
      E = RA(...this.annotations.map((d) => this.encodeAnnotation(d)));
    A.add(this, RA(t, i, s, u, f, a, E));
  }
  decodeValue(A) {
    if (ne(A) !== 1) throw new Error("Cannot decode function reference");
    const i = Kn(A),
      s = Number(jA(A)),
      u = re(A, s),
      a = new TextDecoder("utf8", { fatal: !0 }).decode(u);
    return [i, a];
  }
  get name() {
    const A = this.argTypes.map((s) => s.name).join(", "),
      t = this.retTypes.map((s) => s.name).join(", "),
      i = " " + this.annotations.join(" ");
    return `(${A}) -> (${t})${i}`;
  }
  valueToString([A, t]) {
    return `func "${A.toText()}".${t}`;
  }
  display() {
    const A = this.argTypes.map((s) => s.display()).join(", "),
      t = this.retTypes.map((s) => s.display()).join(", "),
      i = " " + this.annotations.join(" ");
    return `(${A}) → (${t})${i}`;
  }
  encodeAnnotation(A) {
    if (A === "query") return new Uint8Array([1]);
    if (A === "oneway") return new Uint8Array([2]);
    if (A === "composite_query") return new Uint8Array([3]);
    throw new Error("Illegal function annotation");
  }
}
class So extends $t {
  constructor(A) {
    super(),
      (this._fields = Object.entries(A).sort((t, i) =>
        t[0] < i[0] ? -1 : t[0] > i[0] ? 1 : 0
      ));
  }
  accept(A, t) {
    return A.visitService(this, t);
  }
  covariant(A) {
    if (A && A._isPrincipal) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${OA(A)}`);
  }
  encodeValue(A) {
    const t = A.toUint8Array(),
      i = vA(t.length);
    return RA(new Uint8Array([1]), i, t);
  }
  _buildTypeTableImpl(A) {
    this._fields.forEach(([u, f]) => f.buildTypeTable(A));
    const t = JA(-23),
      i = vA(this._fields.length),
      s = this._fields.map(([u, f]) => {
        const a = new TextEncoder().encode(u),
          E = vA(a.length);
        return RA(E, a, f.encodeType(A));
      });
    A.add(this, RA(t, i, ...s));
  }
  decodeValue(A) {
    return Kn(A);
  }
  get name() {
    return `service {${this._fields
      .map(([t, i]) => t + ":" + i.name)
      .join("; ")}}`;
  }
  valueToString(A) {
    return `service "${A.toText()}"`;
  }
}
function OA(e) {
  const A = JSON.stringify(e, (t, i) =>
    typeof i == "bigint" ? `BigInt(${i})` : i
  );
  return A && A.length > Ei ? A.substring(0, Ei - 3) + "..." : A;
}
function dn(e, A) {
  if (A.length < e.length) throw Error("Wrong number of message arguments");
  const t = new Ac();
  e.forEach((E) => E.buildTypeTable(t));
  const i = new TextEncoder().encode(gr),
    s = t.encode(),
    u = vA(A.length),
    f = RA(...e.map((E) => E.encodeType(t))),
    a = RA(
      ..._e(e, A, (E, d) => {
        try {
          E.covariant(d);
        } catch (m) {
          throw new Error(
            m.message +
              `

`
          );
        }
        return E.encodeValue(d);
      })
    );
  return RA(i, s, u, f, a);
}
function bo(e, A) {
  const t = new Qe(A);
  if (A.byteLength < gr.length)
    throw new Error("Message length smaller than magic number");
  const i = re(t, gr.length),
    s = new TextDecoder().decode(i);
  if (s !== gr) throw new Error("Wrong magic number: " + JSON.stringify(s));
  function u(_) {
    const G = [],
      L = Number(jA(_));
    for (let z = 0; z < L; z++) {
      const q = Number(Yt(_));
      switch (q) {
        case -18:
        case -19: {
          const cA = Number(Yt(_));
          G.push([q, cA]);
          break;
        }
        case -20:
        case -21: {
          const cA = [];
          let P = Number(jA(_)),
            W;
          for (; P--; ) {
            const iA = Number(jA(_));
            if (iA >= Math.pow(2, 32))
              throw new Error("field id out of 32-bit range");
            if (typeof W == "number" && W >= iA)
              throw new Error("field id collision or not sorted");
            W = iA;
            const fA = Number(Yt(_));
            cA.push([iA, fA]);
          }
          G.push([q, cA]);
          break;
        }
        case -22: {
          const cA = [];
          let P = Number(jA(_));
          for (; P--; ) cA.push(Number(Yt(_)));
          const W = [];
          let iA = Number(jA(_));
          for (; iA--; ) W.push(Number(Yt(_)));
          const fA = [];
          let EA = Number(jA(_));
          for (; EA--; )
            switch (Number(jA(_))) {
              case 1: {
                fA.push("query");
                break;
              }
              case 2: {
                fA.push("oneway");
                break;
              }
              case 3: {
                fA.push("composite_query");
                break;
              }
              default:
                throw new Error("unknown annotation");
            }
          G.push([q, [cA, W, fA]]);
          break;
        }
        case -23: {
          let cA = Number(jA(_));
          const P = [];
          for (; cA--; ) {
            const W = Number(jA(_)),
              iA = new TextDecoder().decode(re(_, W)),
              fA = Yt(_);
            P.push([iA, fA]);
          }
          G.push([q, P]);
          break;
        }
        default:
          throw new Error("Illegal op_code: " + q);
      }
    }
    const J = [],
      X = Number(jA(_));
    for (let z = 0; z < X; z++) J.push(Number(Yt(_)));
    return [G, J];
  }
  const [f, a] = u(t);
  if (a.length < e.length) throw new Error("Wrong number of return values");
  const E = f.map((_) => zo());
  function d(_) {
    if (_ < -24) throw new Error("future value not supported");
    if (_ < 0)
      switch (_) {
        case -1:
          return _o;
        case -2:
          return No;
        case -3:
          return To;
        case -4:
          return Ro;
        case -5:
          return Ho;
        case -6:
          return Oo;
        case -7:
          return Yo;
        case -8:
          return qo;
        case -9:
          return Go;
        case -10:
          return ko;
        case -11:
          return Lo;
        case -12:
          return vo;
        case -13:
          return Uo;
        case -14:
          return Mo;
        case -15:
          return Fo;
        case -16:
          return xo;
        case -17:
          return Do;
        case -24:
          return Jo;
        default:
          throw new Error("Illegal op_code: " + _);
      }
    if (_ >= f.length) throw new Error("type index out of range");
    return E[_];
  }
  function m(_) {
    switch (_[0]) {
      case -19: {
        const G = d(_[1]);
        return Po(G);
      }
      case -18: {
        const G = d(_[1]);
        return Wo(G);
      }
      case -20: {
        const G = {};
        for (const [X, z] of _[1]) {
          const q = `_${X}_`;
          G[q] = d(z);
        }
        const L = jo(G),
          J = L.tryAsTuple();
        return Array.isArray(J) ? Ko(...J) : L;
      }
      case -21: {
        const G = {};
        for (const [L, J] of _[1]) {
          const X = `_${L}_`;
          G[X] = d(J);
        }
        return Vo(G);
      }
      case -22: {
        const [G, L, J] = _[1];
        return $o(
          G.map((X) => d(X)),
          L.map((X) => d(X)),
          J
        );
      }
      case -23: {
        const G = {},
          L = _[1];
        for (const [J, X] of L) {
          let z = d(X);
          if ((z instanceof Zt && (z = z.getType()), !(z instanceof Pn)))
            throw new Error(
              "Illegal service definition: services can only contain functions"
            );
          G[J] = z;
        }
        return Zo(G);
      }
      default:
        throw new Error("Illegal op_code: " + _[0]);
    }
  }
  f.forEach((_, G) => {
    if (_[0] === -22) {
      const L = m(_);
      E[G].fill(L);
    }
  }),
    f.forEach((_, G) => {
      if (_[0] !== -22) {
        const L = m(_);
        E[G].fill(L);
      }
    });
  const N = a.map((_) => d(_)),
    k = e.map((_, G) => _.decodeValue(t, N[G]));
  for (let _ = e.length; _ < N.length; _++) N[_].decodeValue(t, N[_]);
  if (t.byteLength > 0) throw new Error("decode: Left-over bytes");
  return k;
}
const Do = new Eo(),
  xo = new wr(),
  ec = new lo(),
  No = new Qo(),
  _o = new Co(),
  Fo = new po(),
  Ro = new wo(),
  To = new yo(),
  Uo = new Jn(32),
  Mo = new Jn(64),
  Go = new ie(8),
  ko = new ie(16),
  Lo = new ie(32),
  vo = new ie(64),
  Ho = new jt(8),
  Oo = new jt(16),
  Yo = new jt(32),
  qo = new jt(64),
  Jo = new mo();
function Ko(...e) {
  return new Tr(e);
}
function Po(e) {
  return new Rr(e);
}
function Wo(e) {
  return new le(e);
}
function jo(e) {
  return new Le(e);
}
function Vo(e) {
  return new Ur(e);
}
function zo() {
  return new Zt();
}
function $o(e, A, t = []) {
  return new Pn(e, A, t);
}
function Zo(e) {
  return new So(e);
}
const rc = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Bool: No,
      BoolClass: Qo,
      ConstructType: $t,
      Empty: Do,
      EmptyClass: Eo,
      FixedIntClass: ie,
      FixedNatClass: jt,
      Float32: Uo,
      Float64: Mo,
      FloatClass: Jn,
      Func: $o,
      FuncClass: Pn,
      Int: Ro,
      Int16: ko,
      Int32: Lo,
      Int64: vo,
      Int8: Go,
      IntClass: wo,
      Nat: To,
      Nat16: Oo,
      Nat32: Yo,
      Nat64: qo,
      Nat8: Ho,
      NatClass: yo,
      Null: _o,
      NullClass: Co,
      Opt: Wo,
      OptClass: le,
      PrimitiveType: ct,
      Principal: Jo,
      PrincipalClass: mo,
      Rec: zo,
      RecClass: Zt,
      Record: jo,
      RecordClass: Le,
      Reserved: xo,
      ReservedClass: wr,
      Service: Zo,
      ServiceClass: So,
      Text: Fo,
      TextClass: po,
      Tuple: Ko,
      TupleClass: Tr,
      Type: Fr,
      Unknown: ec,
      UnknownClass: lo,
      Variant: Vo,
      VariantClass: Ur,
      Vec: Po,
      VecClass: Rr,
      Visitor: tc,
      decode: bo,
      encode: dn,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var Xo = {},
  ve = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ (function (e) {
  var A = Ge,
    t = ke,
    i =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  (e.Buffer = a), (e.SlowBuffer = z), (e.INSPECT_MAX_BYTES = 50);
  var s = 2147483647;
  (e.kMaxLength = s),
    (a.TYPED_ARRAY_SUPPORT = u()),
    !a.TYPED_ARRAY_SUPPORT &&
      typeof console < "u" &&
      typeof console.error == "function" &&
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
  function u() {
    try {
      var I = new Uint8Array(1),
        c = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(c, Uint8Array.prototype),
        Object.setPrototypeOf(I, c),
        I.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (a.isBuffer(this)) return this.buffer;
    },
  }),
    Object.defineProperty(a.prototype, "offset", {
      enumerable: !0,
      get: function () {
        if (a.isBuffer(this)) return this.byteOffset;
      },
    });
  function f(I) {
    if (I > s)
      throw new RangeError(
        'The value "' + I + '" is invalid for option "size"'
      );
    var c = new Uint8Array(I);
    return Object.setPrototypeOf(c, a.prototype), c;
  }
  function a(I, c, g) {
    if (typeof I == "number") {
      if (typeof c == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return N(I);
    }
    return E(I, c, g);
  }
  a.poolSize = 8192;
  function E(I, c, g) {
    if (typeof I == "string") return k(I, c);
    if (ArrayBuffer.isView(I)) return G(I);
    if (I == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof I
      );
    if (
      R(I, ArrayBuffer) ||
      (I && R(I.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (R(I, SharedArrayBuffer) || (I && R(I.buffer, SharedArrayBuffer))))
    )
      return L(I, c, g);
    if (typeof I == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var h = I.valueOf && I.valueOf();
    if (h != null && h !== I) return a.from(h, c, g);
    var Q = J(I);
    if (Q) return Q;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof I[Symbol.toPrimitive] == "function"
    )
      return a.from(I[Symbol.toPrimitive]("string"), c, g);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof I
    );
  }
  (a.from = function (I, c, g) {
    return E(I, c, g);
  }),
    Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(a, Uint8Array);
  function d(I) {
    if (typeof I != "number")
      throw new TypeError('"size" argument must be of type number');
    if (I < 0)
      throw new RangeError(
        'The value "' + I + '" is invalid for option "size"'
      );
  }
  function m(I, c, g) {
    return (
      d(I),
      I <= 0
        ? f(I)
        : c !== void 0
        ? typeof g == "string"
          ? f(I).fill(c, g)
          : f(I).fill(c)
        : f(I)
    );
  }
  a.alloc = function (I, c, g) {
    return m(I, c, g);
  };
  function N(I) {
    return d(I), f(I < 0 ? 0 : X(I) | 0);
  }
  (a.allocUnsafe = function (I) {
    return N(I);
  }),
    (a.allocUnsafeSlow = function (I) {
      return N(I);
    });
  function k(I, c) {
    if (((typeof c != "string" || c === "") && (c = "utf8"), !a.isEncoding(c)))
      throw new TypeError("Unknown encoding: " + c);
    var g = q(I, c) | 0,
      h = f(g),
      Q = h.write(I, c);
    return Q !== g && (h = h.slice(0, Q)), h;
  }
  function _(I) {
    for (
      var c = I.length < 0 ? 0 : X(I.length) | 0, g = f(c), h = 0;
      h < c;
      h += 1
    )
      g[h] = I[h] & 255;
    return g;
  }
  function G(I) {
    if (R(I, Uint8Array)) {
      var c = new Uint8Array(I);
      return L(c.buffer, c.byteOffset, c.byteLength);
    }
    return _(I);
  }
  function L(I, c, g) {
    if (c < 0 || I.byteLength < c)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (I.byteLength < c + (g || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var h;
    return (
      c === void 0 && g === void 0
        ? (h = new Uint8Array(I))
        : g === void 0
        ? (h = new Uint8Array(I, c))
        : (h = new Uint8Array(I, c, g)),
      Object.setPrototypeOf(h, a.prototype),
      h
    );
  }
  function J(I) {
    if (a.isBuffer(I)) {
      var c = X(I.length) | 0,
        g = f(c);
      return g.length === 0 || I.copy(g, 0, 0, c), g;
    }
    if (I.length !== void 0)
      return typeof I.length != "number" || F(I.length) ? f(0) : _(I);
    if (I.type === "Buffer" && Array.isArray(I.data)) return _(I.data);
  }
  function X(I) {
    if (I >= s)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          s.toString(16) +
          " bytes"
      );
    return I | 0;
  }
  function z(I) {
    return +I != I && (I = 0), a.alloc(+I);
  }
  (a.isBuffer = function (c) {
    return c != null && c._isBuffer === !0 && c !== a.prototype;
  }),
    (a.compare = function (c, g) {
      if (
        (R(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)),
        R(g, Uint8Array) && (g = a.from(g, g.offset, g.byteLength)),
        !a.isBuffer(c) || !a.isBuffer(g))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (c === g) return 0;
      for (
        var h = c.length, Q = g.length, S = 0, T = Math.min(h, Q);
        S < T;
        ++S
      )
        if (c[S] !== g[S]) {
          (h = c[S]), (Q = g[S]);
          break;
        }
      return h < Q ? -1 : Q < h ? 1 : 0;
    }),
    (a.isEncoding = function (c) {
      switch (String(c).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }),
    (a.concat = function (c, g) {
      if (!Array.isArray(c))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (c.length === 0) return a.alloc(0);
      var h;
      if (g === void 0) for (g = 0, h = 0; h < c.length; ++h) g += c[h].length;
      var Q = a.allocUnsafe(g),
        S = 0;
      for (h = 0; h < c.length; ++h) {
        var T = c[h];
        if (R(T, Uint8Array))
          S + T.length > Q.length
            ? a.from(T).copy(Q, S)
            : Uint8Array.prototype.set.call(Q, T, S);
        else if (a.isBuffer(T)) T.copy(Q, S);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        S += T.length;
      }
      return Q;
    });
  function q(I, c) {
    if (a.isBuffer(I)) return I.length;
    if (ArrayBuffer.isView(I) || R(I, ArrayBuffer)) return I.byteLength;
    if (typeof I != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof I
      );
    var g = I.length,
      h = arguments.length > 2 && arguments[2] === !0;
    if (!h && g === 0) return 0;
    for (var Q = !1; ; )
      switch (c) {
        case "ascii":
        case "latin1":
        case "binary":
          return g;
        case "utf8":
        case "utf-8":
          return K(I).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return g * 2;
        case "hex":
          return g >>> 1;
        case "base64":
          return w(I).length;
        default:
          if (Q) return h ? -1 : K(I).length;
          (c = ("" + c).toLowerCase()), (Q = !0);
      }
  }
  a.byteLength = q;
  function cA(I, c, g) {
    var h = !1;
    if (
      ((c === void 0 || c < 0) && (c = 0),
      c > this.length ||
        ((g === void 0 || g > this.length) && (g = this.length), g <= 0) ||
        ((g >>>= 0), (c >>>= 0), g <= c))
    )
      return "";
    for (I || (I = "utf8"); ; )
      switch (I) {
        case "hex":
          return H(this, c, g);
        case "utf8":
        case "utf-8":
          return FA(this, c, g);
        case "ascii":
          return kA(this, c, g);
        case "latin1":
        case "binary":
          return $(this, c, g);
        case "base64":
          return QA(this, c, g);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return oA(this, c, g);
        default:
          if (h) throw new TypeError("Unknown encoding: " + I);
          (I = (I + "").toLowerCase()), (h = !0);
      }
  }
  a.prototype._isBuffer = !0;
  function P(I, c, g) {
    var h = I[c];
    (I[c] = I[g]), (I[g] = h);
  }
  (a.prototype.swap16 = function () {
    var c = this.length;
    if (c % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var g = 0; g < c; g += 2) P(this, g, g + 1);
    return this;
  }),
    (a.prototype.swap32 = function () {
      var c = this.length;
      if (c % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var g = 0; g < c; g += 4) P(this, g, g + 3), P(this, g + 1, g + 2);
      return this;
    }),
    (a.prototype.swap64 = function () {
      var c = this.length;
      if (c % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var g = 0; g < c; g += 8)
        P(this, g, g + 7),
          P(this, g + 1, g + 6),
          P(this, g + 2, g + 5),
          P(this, g + 3, g + 4);
      return this;
    }),
    (a.prototype.toString = function () {
      var c = this.length;
      return c === 0
        ? ""
        : arguments.length === 0
        ? FA(this, 0, c)
        : cA.apply(this, arguments);
    }),
    (a.prototype.toLocaleString = a.prototype.toString),
    (a.prototype.equals = function (c) {
      if (!a.isBuffer(c)) throw new TypeError("Argument must be a Buffer");
      return this === c ? !0 : a.compare(this, c) === 0;
    }),
    (a.prototype.inspect = function () {
      var c = "",
        g = e.INSPECT_MAX_BYTES;
      return (
        (c = this.toString("hex", 0, g)
          .replace(/(.{2})/g, "$1 ")
          .trim()),
        this.length > g && (c += " ... "),
        "<Buffer " + c + ">"
      );
    }),
    i && (a.prototype[i] = a.prototype.inspect),
    (a.prototype.compare = function (c, g, h, Q, S) {
      if (
        (R(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)),
        !a.isBuffer(c))
      )
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof c
        );
      if (
        (g === void 0 && (g = 0),
        h === void 0 && (h = c ? c.length : 0),
        Q === void 0 && (Q = 0),
        S === void 0 && (S = this.length),
        g < 0 || h > c.length || Q < 0 || S > this.length)
      )
        throw new RangeError("out of range index");
      if (Q >= S && g >= h) return 0;
      if (Q >= S) return -1;
      if (g >= h) return 1;
      if (((g >>>= 0), (h >>>= 0), (Q >>>= 0), (S >>>= 0), this === c))
        return 0;
      for (
        var T = S - Q,
          O = h - g,
          eA = Math.min(T, O),
          rA = this.slice(Q, S),
          hA = c.slice(g, h),
          n = 0;
        n < eA;
        ++n
      )
        if (rA[n] !== hA[n]) {
          (T = rA[n]), (O = hA[n]);
          break;
        }
      return T < O ? -1 : O < T ? 1 : 0;
    });
  function W(I, c, g, h, Q) {
    if (I.length === 0) return -1;
    if (
      (typeof g == "string"
        ? ((h = g), (g = 0))
        : g > 2147483647
        ? (g = 2147483647)
        : g < -2147483648 && (g = -2147483648),
      (g = +g),
      F(g) && (g = Q ? 0 : I.length - 1),
      g < 0 && (g = I.length + g),
      g >= I.length)
    ) {
      if (Q) return -1;
      g = I.length - 1;
    } else if (g < 0)
      if (Q) g = 0;
      else return -1;
    if ((typeof c == "string" && (c = a.from(c, h)), a.isBuffer(c)))
      return c.length === 0 ? -1 : iA(I, c, g, h, Q);
    if (typeof c == "number")
      return (
        (c = c & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? Q
            ? Uint8Array.prototype.indexOf.call(I, c, g)
            : Uint8Array.prototype.lastIndexOf.call(I, c, g)
          : iA(I, [c], g, h, Q)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function iA(I, c, g, h, Q) {
    var S = 1,
      T = I.length,
      O = c.length;
    if (
      h !== void 0 &&
      ((h = String(h).toLowerCase()),
      h === "ucs2" || h === "ucs-2" || h === "utf16le" || h === "utf-16le")
    ) {
      if (I.length < 2 || c.length < 2) return -1;
      (S = 2), (T /= 2), (O /= 2), (g /= 2);
    }
    function eA(o, B) {
      return S === 1 ? o[B] : o.readUInt16BE(B * S);
    }
    var rA;
    if (Q) {
      var hA = -1;
      for (rA = g; rA < T; rA++)
        if (eA(I, rA) === eA(c, hA === -1 ? 0 : rA - hA)) {
          if ((hA === -1 && (hA = rA), rA - hA + 1 === O)) return hA * S;
        } else hA !== -1 && (rA -= rA - hA), (hA = -1);
    } else
      for (g + O > T && (g = T - O), rA = g; rA >= 0; rA--) {
        for (var n = !0, r = 0; r < O; r++)
          if (eA(I, rA + r) !== eA(c, r)) {
            n = !1;
            break;
          }
        if (n) return rA;
      }
    return -1;
  }
  (a.prototype.includes = function (c, g, h) {
    return this.indexOf(c, g, h) !== -1;
  }),
    (a.prototype.indexOf = function (c, g, h) {
      return W(this, c, g, h, !0);
    }),
    (a.prototype.lastIndexOf = function (c, g, h) {
      return W(this, c, g, h, !1);
    });
  function fA(I, c, g, h) {
    g = Number(g) || 0;
    var Q = I.length - g;
    h ? ((h = Number(h)), h > Q && (h = Q)) : (h = Q);
    var S = c.length;
    h > S / 2 && (h = S / 2);
    for (var T = 0; T < h; ++T) {
      var O = parseInt(c.substr(T * 2, 2), 16);
      if (F(O)) return T;
      I[g + T] = O;
    }
    return T;
  }
  function EA(I, c, g, h) {
    return D(K(c, I.length - g), I, g, h);
  }
  function Y(I, c, g, h) {
    return D(tA(c), I, g, h);
  }
  function SA(I, c, g, h) {
    return D(w(c), I, g, h);
  }
  function dA(I, c, g, h) {
    return D(C(c, I.length - g), I, g, h);
  }
  (a.prototype.write = function (c, g, h, Q) {
    if (g === void 0) (Q = "utf8"), (h = this.length), (g = 0);
    else if (h === void 0 && typeof g == "string")
      (Q = g), (h = this.length), (g = 0);
    else if (isFinite(g))
      (g = g >>> 0),
        isFinite(h)
          ? ((h = h >>> 0), Q === void 0 && (Q = "utf8"))
          : ((Q = h), (h = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var S = this.length - g;
    if (
      ((h === void 0 || h > S) && (h = S),
      (c.length > 0 && (h < 0 || g < 0)) || g > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    Q || (Q = "utf8");
    for (var T = !1; ; )
      switch (Q) {
        case "hex":
          return fA(this, c, g, h);
        case "utf8":
        case "utf-8":
          return EA(this, c, g, h);
        case "ascii":
        case "latin1":
        case "binary":
          return Y(this, c, g, h);
        case "base64":
          return SA(this, c, g, h);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return dA(this, c, g, h);
        default:
          if (T) throw new TypeError("Unknown encoding: " + Q);
          (Q = ("" + Q).toLowerCase()), (T = !0);
      }
  }),
    (a.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function QA(I, c, g) {
    return c === 0 && g === I.length
      ? A.fromByteArray(I)
      : A.fromByteArray(I.slice(c, g));
  }
  function FA(I, c, g) {
    g = Math.min(I.length, g);
    for (var h = [], Q = c; Q < g; ) {
      var S = I[Q],
        T = null,
        O = S > 239 ? 4 : S > 223 ? 3 : S > 191 ? 2 : 1;
      if (Q + O <= g) {
        var eA, rA, hA, n;
        switch (O) {
          case 1:
            S < 128 && (T = S);
            break;
          case 2:
            (eA = I[Q + 1]),
              (eA & 192) === 128 &&
                ((n = ((S & 31) << 6) | (eA & 63)), n > 127 && (T = n));
            break;
          case 3:
            (eA = I[Q + 1]),
              (rA = I[Q + 2]),
              (eA & 192) === 128 &&
                (rA & 192) === 128 &&
                ((n = ((S & 15) << 12) | ((eA & 63) << 6) | (rA & 63)),
                n > 2047 && (n < 55296 || n > 57343) && (T = n));
            break;
          case 4:
            (eA = I[Q + 1]),
              (rA = I[Q + 2]),
              (hA = I[Q + 3]),
              (eA & 192) === 128 &&
                (rA & 192) === 128 &&
                (hA & 192) === 128 &&
                ((n =
                  ((S & 15) << 18) |
                  ((eA & 63) << 12) |
                  ((rA & 63) << 6) |
                  (hA & 63)),
                n > 65535 && n < 1114112 && (T = n));
        }
      }
      T === null
        ? ((T = 65533), (O = 1))
        : T > 65535 &&
          ((T -= 65536),
          h.push(((T >>> 10) & 1023) | 55296),
          (T = 56320 | (T & 1023))),
        h.push(T),
        (Q += O);
    }
    return YA(h);
  }
  var _A = 4096;
  function YA(I) {
    var c = I.length;
    if (c <= _A) return String.fromCharCode.apply(String, I);
    for (var g = "", h = 0; h < c; )
      g += String.fromCharCode.apply(String, I.slice(h, (h += _A)));
    return g;
  }
  function kA(I, c, g) {
    var h = "";
    g = Math.min(I.length, g);
    for (var Q = c; Q < g; ++Q) h += String.fromCharCode(I[Q] & 127);
    return h;
  }
  function $(I, c, g) {
    var h = "";
    g = Math.min(I.length, g);
    for (var Q = c; Q < g; ++Q) h += String.fromCharCode(I[Q]);
    return h;
  }
  function H(I, c, g) {
    var h = I.length;
    (!c || c < 0) && (c = 0), (!g || g < 0 || g > h) && (g = h);
    for (var Q = "", S = c; S < g; ++S) Q += U[I[S]];
    return Q;
  }
  function oA(I, c, g) {
    for (var h = I.slice(c, g), Q = "", S = 0; S < h.length - 1; S += 2)
      Q += String.fromCharCode(h[S] + h[S + 1] * 256);
    return Q;
  }
  a.prototype.slice = function (c, g) {
    var h = this.length;
    (c = ~~c),
      (g = g === void 0 ? h : ~~g),
      c < 0 ? ((c += h), c < 0 && (c = 0)) : c > h && (c = h),
      g < 0 ? ((g += h), g < 0 && (g = 0)) : g > h && (g = h),
      g < c && (g = c);
    var Q = this.subarray(c, g);
    return Object.setPrototypeOf(Q, a.prototype), Q;
  };
  function v(I, c, g) {
    if (I % 1 !== 0 || I < 0) throw new RangeError("offset is not uint");
    if (I + c > g)
      throw new RangeError("Trying to access beyond buffer length");
  }
  (a.prototype.readUintLE = a.prototype.readUIntLE =
    function (c, g, h) {
      (c = c >>> 0), (g = g >>> 0), h || v(c, g, this.length);
      for (var Q = this[c], S = 1, T = 0; ++T < g && (S *= 256); )
        Q += this[c + T] * S;
      return Q;
    }),
    (a.prototype.readUintBE = a.prototype.readUIntBE =
      function (c, g, h) {
        (c = c >>> 0), (g = g >>> 0), h || v(c, g, this.length);
        for (var Q = this[c + --g], S = 1; g > 0 && (S *= 256); )
          Q += this[c + --g] * S;
        return Q;
      }),
    (a.prototype.readUint8 = a.prototype.readUInt8 =
      function (c, g) {
        return (c = c >>> 0), g || v(c, 1, this.length), this[c];
      }),
    (a.prototype.readUint16LE = a.prototype.readUInt16LE =
      function (c, g) {
        return (
          (c = c >>> 0), g || v(c, 2, this.length), this[c] | (this[c + 1] << 8)
        );
      }),
    (a.prototype.readUint16BE = a.prototype.readUInt16BE =
      function (c, g) {
        return (
          (c = c >>> 0), g || v(c, 2, this.length), (this[c] << 8) | this[c + 1]
        );
      }),
    (a.prototype.readUint32LE = a.prototype.readUInt32LE =
      function (c, g) {
        return (
          (c = c >>> 0),
          g || v(c, 4, this.length),
          (this[c] | (this[c + 1] << 8) | (this[c + 2] << 16)) +
            this[c + 3] * 16777216
        );
      }),
    (a.prototype.readUint32BE = a.prototype.readUInt32BE =
      function (c, g) {
        return (
          (c = c >>> 0),
          g || v(c, 4, this.length),
          this[c] * 16777216 +
            ((this[c + 1] << 16) | (this[c + 2] << 8) | this[c + 3])
        );
      }),
    (a.prototype.readIntLE = function (c, g, h) {
      (c = c >>> 0), (g = g >>> 0), h || v(c, g, this.length);
      for (var Q = this[c], S = 1, T = 0; ++T < g && (S *= 256); )
        Q += this[c + T] * S;
      return (S *= 128), Q >= S && (Q -= Math.pow(2, 8 * g)), Q;
    }),
    (a.prototype.readIntBE = function (c, g, h) {
      (c = c >>> 0), (g = g >>> 0), h || v(c, g, this.length);
      for (var Q = g, S = 1, T = this[c + --Q]; Q > 0 && (S *= 256); )
        T += this[c + --Q] * S;
      return (S *= 128), T >= S && (T -= Math.pow(2, 8 * g)), T;
    }),
    (a.prototype.readInt8 = function (c, g) {
      return (
        (c = c >>> 0),
        g || v(c, 1, this.length),
        this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c]
      );
    }),
    (a.prototype.readInt16LE = function (c, g) {
      (c = c >>> 0), g || v(c, 2, this.length);
      var h = this[c] | (this[c + 1] << 8);
      return h & 32768 ? h | 4294901760 : h;
    }),
    (a.prototype.readInt16BE = function (c, g) {
      (c = c >>> 0), g || v(c, 2, this.length);
      var h = this[c + 1] | (this[c] << 8);
      return h & 32768 ? h | 4294901760 : h;
    }),
    (a.prototype.readInt32LE = function (c, g) {
      return (
        (c = c >>> 0),
        g || v(c, 4, this.length),
        this[c] | (this[c + 1] << 8) | (this[c + 2] << 16) | (this[c + 3] << 24)
      );
    }),
    (a.prototype.readInt32BE = function (c, g) {
      return (
        (c = c >>> 0),
        g || v(c, 4, this.length),
        (this[c] << 24) | (this[c + 1] << 16) | (this[c + 2] << 8) | this[c + 3]
      );
    }),
    (a.prototype.readFloatLE = function (c, g) {
      return (
        (c = c >>> 0), g || v(c, 4, this.length), t.read(this, c, !0, 23, 4)
      );
    }),
    (a.prototype.readFloatBE = function (c, g) {
      return (
        (c = c >>> 0), g || v(c, 4, this.length), t.read(this, c, !1, 23, 4)
      );
    }),
    (a.prototype.readDoubleLE = function (c, g) {
      return (
        (c = c >>> 0), g || v(c, 8, this.length), t.read(this, c, !0, 52, 8)
      );
    }),
    (a.prototype.readDoubleBE = function (c, g) {
      return (
        (c = c >>> 0), g || v(c, 8, this.length), t.read(this, c, !1, 52, 8)
      );
    });
  function j(I, c, g, h, Q, S) {
    if (!a.isBuffer(I))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (c > Q || c < S)
      throw new RangeError('"value" argument is out of bounds');
    if (g + h > I.length) throw new RangeError("Index out of range");
  }
  (a.prototype.writeUintLE = a.prototype.writeUIntLE =
    function (c, g, h, Q) {
      if (((c = +c), (g = g >>> 0), (h = h >>> 0), !Q)) {
        var S = Math.pow(2, 8 * h) - 1;
        j(this, c, g, h, S, 0);
      }
      var T = 1,
        O = 0;
      for (this[g] = c & 255; ++O < h && (T *= 256); )
        this[g + O] = (c / T) & 255;
      return g + h;
    }),
    (a.prototype.writeUintBE = a.prototype.writeUIntBE =
      function (c, g, h, Q) {
        if (((c = +c), (g = g >>> 0), (h = h >>> 0), !Q)) {
          var S = Math.pow(2, 8 * h) - 1;
          j(this, c, g, h, S, 0);
        }
        var T = h - 1,
          O = 1;
        for (this[g + T] = c & 255; --T >= 0 && (O *= 256); )
          this[g + T] = (c / O) & 255;
        return g + h;
      }),
    (a.prototype.writeUint8 = a.prototype.writeUInt8 =
      function (c, g, h) {
        return (
          (c = +c),
          (g = g >>> 0),
          h || j(this, c, g, 1, 255, 0),
          (this[g] = c & 255),
          g + 1
        );
      }),
    (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
      function (c, g, h) {
        return (
          (c = +c),
          (g = g >>> 0),
          h || j(this, c, g, 2, 65535, 0),
          (this[g] = c & 255),
          (this[g + 1] = c >>> 8),
          g + 2
        );
      }),
    (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
      function (c, g, h) {
        return (
          (c = +c),
          (g = g >>> 0),
          h || j(this, c, g, 2, 65535, 0),
          (this[g] = c >>> 8),
          (this[g + 1] = c & 255),
          g + 2
        );
      }),
    (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
      function (c, g, h) {
        return (
          (c = +c),
          (g = g >>> 0),
          h || j(this, c, g, 4, 4294967295, 0),
          (this[g + 3] = c >>> 24),
          (this[g + 2] = c >>> 16),
          (this[g + 1] = c >>> 8),
          (this[g] = c & 255),
          g + 4
        );
      }),
    (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
      function (c, g, h) {
        return (
          (c = +c),
          (g = g >>> 0),
          h || j(this, c, g, 4, 4294967295, 0),
          (this[g] = c >>> 24),
          (this[g + 1] = c >>> 16),
          (this[g + 2] = c >>> 8),
          (this[g + 3] = c & 255),
          g + 4
        );
      }),
    (a.prototype.writeIntLE = function (c, g, h, Q) {
      if (((c = +c), (g = g >>> 0), !Q)) {
        var S = Math.pow(2, 8 * h - 1);
        j(this, c, g, h, S - 1, -S);
      }
      var T = 0,
        O = 1,
        eA = 0;
      for (this[g] = c & 255; ++T < h && (O *= 256); )
        c < 0 && eA === 0 && this[g + T - 1] !== 0 && (eA = 1),
          (this[g + T] = (((c / O) >> 0) - eA) & 255);
      return g + h;
    }),
    (a.prototype.writeIntBE = function (c, g, h, Q) {
      if (((c = +c), (g = g >>> 0), !Q)) {
        var S = Math.pow(2, 8 * h - 1);
        j(this, c, g, h, S - 1, -S);
      }
      var T = h - 1,
        O = 1,
        eA = 0;
      for (this[g + T] = c & 255; --T >= 0 && (O *= 256); )
        c < 0 && eA === 0 && this[g + T + 1] !== 0 && (eA = 1),
          (this[g + T] = (((c / O) >> 0) - eA) & 255);
      return g + h;
    }),
    (a.prototype.writeInt8 = function (c, g, h) {
      return (
        (c = +c),
        (g = g >>> 0),
        h || j(this, c, g, 1, 127, -128),
        c < 0 && (c = 255 + c + 1),
        (this[g] = c & 255),
        g + 1
      );
    }),
    (a.prototype.writeInt16LE = function (c, g, h) {
      return (
        (c = +c),
        (g = g >>> 0),
        h || j(this, c, g, 2, 32767, -32768),
        (this[g] = c & 255),
        (this[g + 1] = c >>> 8),
        g + 2
      );
    }),
    (a.prototype.writeInt16BE = function (c, g, h) {
      return (
        (c = +c),
        (g = g >>> 0),
        h || j(this, c, g, 2, 32767, -32768),
        (this[g] = c >>> 8),
        (this[g + 1] = c & 255),
        g + 2
      );
    }),
    (a.prototype.writeInt32LE = function (c, g, h) {
      return (
        (c = +c),
        (g = g >>> 0),
        h || j(this, c, g, 4, 2147483647, -2147483648),
        (this[g] = c & 255),
        (this[g + 1] = c >>> 8),
        (this[g + 2] = c >>> 16),
        (this[g + 3] = c >>> 24),
        g + 4
      );
    }),
    (a.prototype.writeInt32BE = function (c, g, h) {
      return (
        (c = +c),
        (g = g >>> 0),
        h || j(this, c, g, 4, 2147483647, -2147483648),
        c < 0 && (c = 4294967295 + c + 1),
        (this[g] = c >>> 24),
        (this[g + 1] = c >>> 16),
        (this[g + 2] = c >>> 8),
        (this[g + 3] = c & 255),
        g + 4
      );
    });
  function sA(I, c, g, h, Q, S) {
    if (g + h > I.length) throw new RangeError("Index out of range");
    if (g < 0) throw new RangeError("Index out of range");
  }
  function p(I, c, g, h, Q) {
    return (
      (c = +c),
      (g = g >>> 0),
      Q || sA(I, c, g, 4),
      t.write(I, c, g, h, 23, 4),
      g + 4
    );
  }
  (a.prototype.writeFloatLE = function (c, g, h) {
    return p(this, c, g, !0, h);
  }),
    (a.prototype.writeFloatBE = function (c, g, h) {
      return p(this, c, g, !1, h);
    });
  function pA(I, c, g, h, Q) {
    return (
      (c = +c),
      (g = g >>> 0),
      Q || sA(I, c, g, 8),
      t.write(I, c, g, h, 52, 8),
      g + 8
    );
  }
  (a.prototype.writeDoubleLE = function (c, g, h) {
    return pA(this, c, g, !0, h);
  }),
    (a.prototype.writeDoubleBE = function (c, g, h) {
      return pA(this, c, g, !1, h);
    }),
    (a.prototype.copy = function (c, g, h, Q) {
      if (!a.isBuffer(c)) throw new TypeError("argument should be a Buffer");
      if (
        (h || (h = 0),
        !Q && Q !== 0 && (Q = this.length),
        g >= c.length && (g = c.length),
        g || (g = 0),
        Q > 0 && Q < h && (Q = h),
        Q === h || c.length === 0 || this.length === 0)
      )
        return 0;
      if (g < 0) throw new RangeError("targetStart out of bounds");
      if (h < 0 || h >= this.length) throw new RangeError("Index out of range");
      if (Q < 0) throw new RangeError("sourceEnd out of bounds");
      Q > this.length && (Q = this.length),
        c.length - g < Q - h && (Q = c.length - g + h);
      var S = Q - h;
      return (
        this === c && typeof Uint8Array.prototype.copyWithin == "function"
          ? this.copyWithin(g, h, Q)
          : Uint8Array.prototype.set.call(c, this.subarray(h, Q), g),
        S
      );
    }),
    (a.prototype.fill = function (c, g, h, Q) {
      if (typeof c == "string") {
        if (
          (typeof g == "string"
            ? ((Q = g), (g = 0), (h = this.length))
            : typeof h == "string" && ((Q = h), (h = this.length)),
          Q !== void 0 && typeof Q != "string")
        )
          throw new TypeError("encoding must be a string");
        if (typeof Q == "string" && !a.isEncoding(Q))
          throw new TypeError("Unknown encoding: " + Q);
        if (c.length === 1) {
          var S = c.charCodeAt(0);
          ((Q === "utf8" && S < 128) || Q === "latin1") && (c = S);
        }
      } else
        typeof c == "number"
          ? (c = c & 255)
          : typeof c == "boolean" && (c = Number(c));
      if (g < 0 || this.length < g || this.length < h)
        throw new RangeError("Out of range index");
      if (h <= g) return this;
      (g = g >>> 0), (h = h === void 0 ? this.length : h >>> 0), c || (c = 0);
      var T;
      if (typeof c == "number") for (T = g; T < h; ++T) this[T] = c;
      else {
        var O = a.isBuffer(c) ? c : a.from(c, Q),
          eA = O.length;
        if (eA === 0)
          throw new TypeError(
            'The value "' + c + '" is invalid for argument "value"'
          );
        for (T = 0; T < h - g; ++T) this[T + g] = O[T % eA];
      }
      return this;
    });
  var lA = /[^+/0-9A-Za-z-_]/g;
  function yA(I) {
    if (((I = I.split("=")[0]), (I = I.trim().replace(lA, "")), I.length < 2))
      return "";
    for (; I.length % 4 !== 0; ) I = I + "=";
    return I;
  }
  function K(I, c) {
    c = c || 1 / 0;
    for (var g, h = I.length, Q = null, S = [], T = 0; T < h; ++T) {
      if (((g = I.charCodeAt(T)), g > 55295 && g < 57344)) {
        if (!Q) {
          if (g > 56319) {
            (c -= 3) > -1 && S.push(239, 191, 189);
            continue;
          } else if (T + 1 === h) {
            (c -= 3) > -1 && S.push(239, 191, 189);
            continue;
          }
          Q = g;
          continue;
        }
        if (g < 56320) {
          (c -= 3) > -1 && S.push(239, 191, 189), (Q = g);
          continue;
        }
        g = (((Q - 55296) << 10) | (g - 56320)) + 65536;
      } else Q && (c -= 3) > -1 && S.push(239, 191, 189);
      if (((Q = null), g < 128)) {
        if ((c -= 1) < 0) break;
        S.push(g);
      } else if (g < 2048) {
        if ((c -= 2) < 0) break;
        S.push((g >> 6) | 192, (g & 63) | 128);
      } else if (g < 65536) {
        if ((c -= 3) < 0) break;
        S.push((g >> 12) | 224, ((g >> 6) & 63) | 128, (g & 63) | 128);
      } else if (g < 1114112) {
        if ((c -= 4) < 0) break;
        S.push(
          (g >> 18) | 240,
          ((g >> 12) & 63) | 128,
          ((g >> 6) & 63) | 128,
          (g & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return S;
  }
  function tA(I) {
    for (var c = [], g = 0; g < I.length; ++g) c.push(I.charCodeAt(g) & 255);
    return c;
  }
  function C(I, c) {
    for (var g, h, Q, S = [], T = 0; T < I.length && !((c -= 2) < 0); ++T)
      (g = I.charCodeAt(T)), (h = g >> 8), (Q = g % 256), S.push(Q), S.push(h);
    return S;
  }
  function w(I) {
    return A.toByteArray(yA(I));
  }
  function D(I, c, g, h) {
    for (var Q = 0; Q < h && !(Q + g >= c.length || Q >= I.length); ++Q)
      c[Q + g] = I[Q];
    return Q;
  }
  function R(I, c) {
    return (
      I instanceof c ||
      (I != null &&
        I.constructor != null &&
        I.constructor.name != null &&
        I.constructor.name === c.name)
    );
  }
  function F(I) {
    return I !== I;
  }
  var U = (function () {
    for (var I = "0123456789abcdef", c = new Array(256), g = 0; g < 16; ++g)
      for (var h = g * 16, Q = 0; Q < 16; ++Q) c[h + Q] = I[g] + I[Q];
    return c;
  })();
})(ve);
var As = { exports: {} };
(function (e) {
  (function (A) {
    var t,
      i = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
      s = Math.ceil,
      u = Math.floor,
      f = "[BigNumber Error] ",
      a = f + "Number primitive has more than 15 significant digits: ",
      E = 1e14,
      d = 14,
      m = 9007199254740991,
      N = [
        1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13,
      ],
      k = 1e7,
      _ = 1e9;
    function G(W) {
      var iA,
        fA,
        EA,
        Y = (p.prototype = { constructor: p, toString: null, valueOf: null }),
        SA = new p(1),
        dA = 20,
        QA = 4,
        FA = -7,
        _A = 21,
        YA = -1e7,
        kA = 1e7,
        $ = !1,
        H = 1,
        oA = 0,
        v = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: " ",
          suffix: "",
        },
        j = "0123456789abcdefghijklmnopqrstuvwxyz",
        sA = !0;
      function p(C, w) {
        var D,
          R,
          F,
          U,
          I,
          c,
          g,
          h,
          Q = this;
        if (!(Q instanceof p)) return new p(C, w);
        if (w == null) {
          if (C && C._isBigNumber === !0) {
            (Q.s = C.s),
              !C.c || C.e > kA
                ? (Q.c = Q.e = null)
                : C.e < YA
                ? (Q.c = [(Q.e = 0)])
                : ((Q.e = C.e), (Q.c = C.c.slice()));
            return;
          }
          if ((c = typeof C == "number") && C * 0 == 0) {
            if (((Q.s = 1 / C < 0 ? ((C = -C), -1) : 1), C === ~~C)) {
              for (U = 0, I = C; I >= 10; I /= 10, U++);
              U > kA ? (Q.c = Q.e = null) : ((Q.e = U), (Q.c = [C]));
              return;
            }
            h = String(C);
          } else {
            if (!i.test((h = String(C)))) return EA(Q, h, c);
            Q.s = h.charCodeAt(0) == 45 ? ((h = h.slice(1)), -1) : 1;
          }
          (U = h.indexOf(".")) > -1 && (h = h.replace(".", "")),
            (I = h.search(/e/i)) > 0
              ? (U < 0 && (U = I),
                (U += +h.slice(I + 1)),
                (h = h.substring(0, I)))
              : U < 0 && (U = h.length);
        } else {
          if ((z(w, 2, j.length, "Base"), w == 10 && sA))
            return (Q = new p(C)), K(Q, dA + Q.e + 1, QA);
          if (((h = String(C)), (c = typeof C == "number"))) {
            if (C * 0 != 0) return EA(Q, h, c, w);
            if (
              ((Q.s = 1 / C < 0 ? ((h = h.slice(1)), -1) : 1),
              p.DEBUG && h.replace(/^0\.0*|\./, "").length > 15)
            )
              throw Error(a + C);
          } else Q.s = h.charCodeAt(0) === 45 ? ((h = h.slice(1)), -1) : 1;
          for (D = j.slice(0, w), U = I = 0, g = h.length; I < g; I++)
            if (D.indexOf((R = h.charAt(I))) < 0) {
              if (R == ".") {
                if (I > U) {
                  U = g;
                  continue;
                }
              } else if (
                !F &&
                ((h == h.toUpperCase() && (h = h.toLowerCase())) ||
                  (h == h.toLowerCase() && (h = h.toUpperCase())))
              ) {
                (F = !0), (I = -1), (U = 0);
                continue;
              }
              return EA(Q, String(C), c, w);
            }
          (c = !1),
            (h = fA(h, w, 10, Q.s)),
            (U = h.indexOf(".")) > -1
              ? (h = h.replace(".", ""))
              : (U = h.length);
        }
        for (I = 0; h.charCodeAt(I) === 48; I++);
        for (g = h.length; h.charCodeAt(--g) === 48; );
        if ((h = h.slice(I, ++g))) {
          if (((g -= I), c && p.DEBUG && g > 15 && (C > m || C !== u(C))))
            throw Error(a + Q.s * C);
          if ((U = U - I - 1) > kA) Q.c = Q.e = null;
          else if (U < YA) Q.c = [(Q.e = 0)];
          else {
            if (
              ((Q.e = U),
              (Q.c = []),
              (I = (U + 1) % d),
              U < 0 && (I += d),
              I < g)
            ) {
              for (I && Q.c.push(+h.slice(0, I)), g -= d; I < g; )
                Q.c.push(+h.slice(I, (I += d)));
              I = d - (h = h.slice(I)).length;
            } else I -= g;
            for (; I--; h += "0");
            Q.c.push(+h);
          }
        } else Q.c = [(Q.e = 0)];
      }
      (p.clone = G),
        (p.ROUND_UP = 0),
        (p.ROUND_DOWN = 1),
        (p.ROUND_CEIL = 2),
        (p.ROUND_FLOOR = 3),
        (p.ROUND_HALF_UP = 4),
        (p.ROUND_HALF_DOWN = 5),
        (p.ROUND_HALF_EVEN = 6),
        (p.ROUND_HALF_CEIL = 7),
        (p.ROUND_HALF_FLOOR = 8),
        (p.EUCLID = 9),
        (p.config = p.set =
          function (C) {
            var w, D;
            if (C != null)
              if (typeof C == "object") {
                if (
                  (C.hasOwnProperty((w = "DECIMAL_PLACES")) &&
                    ((D = C[w]), z(D, 0, _, w), (dA = D)),
                  C.hasOwnProperty((w = "ROUNDING_MODE")) &&
                    ((D = C[w]), z(D, 0, 8, w), (QA = D)),
                  C.hasOwnProperty((w = "EXPONENTIAL_AT")) &&
                    ((D = C[w]),
                    D && D.pop
                      ? (z(D[0], -_, 0, w),
                        z(D[1], 0, _, w),
                        (FA = D[0]),
                        (_A = D[1]))
                      : (z(D, -_, _, w), (FA = -(_A = D < 0 ? -D : D)))),
                  C.hasOwnProperty((w = "RANGE")))
                )
                  if (((D = C[w]), D && D.pop))
                    z(D[0], -_, -1, w),
                      z(D[1], 1, _, w),
                      (YA = D[0]),
                      (kA = D[1]);
                  else if ((z(D, -_, _, w), D)) YA = -(kA = D < 0 ? -D : D);
                  else throw Error(f + w + " cannot be zero: " + D);
                if (C.hasOwnProperty((w = "CRYPTO")))
                  if (((D = C[w]), D === !!D))
                    if (D)
                      if (
                        typeof crypto < "u" &&
                        crypto &&
                        (crypto.getRandomValues || crypto.randomBytes)
                      )
                        $ = D;
                      else throw (($ = !D), Error(f + "crypto unavailable"));
                    else $ = D;
                  else throw Error(f + w + " not true or false: " + D);
                if (
                  (C.hasOwnProperty((w = "MODULO_MODE")) &&
                    ((D = C[w]), z(D, 0, 9, w), (H = D)),
                  C.hasOwnProperty((w = "POW_PRECISION")) &&
                    ((D = C[w]), z(D, 0, _, w), (oA = D)),
                  C.hasOwnProperty((w = "FORMAT")))
                )
                  if (((D = C[w]), typeof D == "object")) v = D;
                  else throw Error(f + w + " not an object: " + D);
                if (C.hasOwnProperty((w = "ALPHABET")))
                  if (
                    ((D = C[w]),
                    typeof D == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(D))
                  )
                    (sA = D.slice(0, 10) == "0123456789"), (j = D);
                  else throw Error(f + w + " invalid: " + D);
              } else throw Error(f + "Object expected: " + C);
            return {
              DECIMAL_PLACES: dA,
              ROUNDING_MODE: QA,
              EXPONENTIAL_AT: [FA, _A],
              RANGE: [YA, kA],
              CRYPTO: $,
              MODULO_MODE: H,
              POW_PRECISION: oA,
              FORMAT: v,
              ALPHABET: j,
            };
          }),
        (p.isBigNumber = function (C) {
          if (!C || C._isBigNumber !== !0) return !1;
          if (!p.DEBUG) return !0;
          var w,
            D,
            R = C.c,
            F = C.e,
            U = C.s;
          A: if ({}.toString.call(R) == "[object Array]") {
            if ((U === 1 || U === -1) && F >= -_ && F <= _ && F === u(F)) {
              if (R[0] === 0) {
                if (F === 0 && R.length === 1) return !0;
                break A;
              }
              if (
                ((w = (F + 1) % d), w < 1 && (w += d), String(R[0]).length == w)
              ) {
                for (w = 0; w < R.length; w++)
                  if (((D = R[w]), D < 0 || D >= E || D !== u(D))) break A;
                if (D !== 0) return !0;
              }
            }
          } else if (
            R === null &&
            F === null &&
            (U === null || U === 1 || U === -1)
          )
            return !0;
          throw Error(f + "Invalid BigNumber: " + C);
        }),
        (p.maximum = p.max =
          function () {
            return lA(arguments, -1);
          }),
        (p.minimum = p.min =
          function () {
            return lA(arguments, 1);
          }),
        (p.random = (function () {
          var C = 9007199254740992,
            w =
              (Math.random() * C) & 2097151
                ? function () {
                    return u(Math.random() * C);
                  }
                : function () {
                    return (
                      ((Math.random() * 1073741824) | 0) * 8388608 +
                      ((Math.random() * 8388608) | 0)
                    );
                  };
          return function (D) {
            var R,
              F,
              U,
              I,
              c,
              g = 0,
              h = [],
              Q = new p(SA);
            if ((D == null ? (D = dA) : z(D, 0, _), (I = s(D / d)), $))
              if (crypto.getRandomValues) {
                for (
                  R = crypto.getRandomValues(new Uint32Array((I *= 2)));
                  g < I;

                )
                  (c = R[g] * 131072 + (R[g + 1] >>> 11)),
                    c >= 9e15
                      ? ((F = crypto.getRandomValues(new Uint32Array(2))),
                        (R[g] = F[0]),
                        (R[g + 1] = F[1]))
                      : (h.push(c % 1e14), (g += 2));
                g = I / 2;
              } else if (crypto.randomBytes) {
                for (R = crypto.randomBytes((I *= 7)); g < I; )
                  (c =
                    (R[g] & 31) * 281474976710656 +
                    R[g + 1] * 1099511627776 +
                    R[g + 2] * 4294967296 +
                    R[g + 3] * 16777216 +
                    (R[g + 4] << 16) +
                    (R[g + 5] << 8) +
                    R[g + 6]),
                    c >= 9e15
                      ? crypto.randomBytes(7).copy(R, g)
                      : (h.push(c % 1e14), (g += 7));
                g = I / 7;
              } else throw (($ = !1), Error(f + "crypto unavailable"));
            if (!$) for (; g < I; ) (c = w()), c < 9e15 && (h[g++] = c % 1e14);
            for (
              I = h[--g],
                D %= d,
                I && D && ((c = N[d - D]), (h[g] = u(I / c) * c));
              h[g] === 0;
              h.pop(), g--
            );
            if (g < 0) h = [(U = 0)];
            else {
              for (U = -1; h[0] === 0; h.splice(0, 1), U -= d);
              for (g = 1, c = h[0]; c >= 10; c /= 10, g++);
              g < d && (U -= d - g);
            }
            return (Q.e = U), (Q.c = h), Q;
          };
        })()),
        (p.sum = function () {
          for (var C = 1, w = arguments, D = new p(w[0]); C < w.length; )
            D = D.plus(w[C++]);
          return D;
        }),
        (fA = (function () {
          var C = "0123456789";
          function w(D, R, F, U) {
            for (var I, c = [0], g, h = 0, Q = D.length; h < Q; ) {
              for (g = c.length; g--; c[g] *= R);
              for (c[0] += U.indexOf(D.charAt(h++)), I = 0; I < c.length; I++)
                c[I] > F - 1 &&
                  (c[I + 1] == null && (c[I + 1] = 0),
                  (c[I + 1] += (c[I] / F) | 0),
                  (c[I] %= F));
            }
            return c.reverse();
          }
          return function (D, R, F, U, I) {
            var c,
              g,
              h,
              Q,
              S,
              T,
              O,
              eA,
              rA = D.indexOf("."),
              hA = dA,
              n = QA;
            for (
              rA >= 0 &&
                ((Q = oA),
                (oA = 0),
                (D = D.replace(".", "")),
                (eA = new p(R)),
                (T = eA.pow(D.length - rA)),
                (oA = Q),
                (eA.c = w(P(J(T.c), T.e, "0"), 10, F, C)),
                (eA.e = eA.c.length)),
                O = w(D, R, F, I ? ((c = j), C) : ((c = C), j)),
                h = Q = O.length;
              O[--Q] == 0;
              O.pop()
            );
            if (!O[0]) return c.charAt(0);
            if (
              (rA < 0
                ? --h
                : ((T.c = O),
                  (T.e = h),
                  (T.s = U),
                  (T = iA(T, eA, hA, n, F)),
                  (O = T.c),
                  (S = T.r),
                  (h = T.e)),
              (g = h + hA + 1),
              (rA = O[g]),
              (Q = F / 2),
              (S = S || g < 0 || O[g + 1] != null),
              (S =
                n < 4
                  ? (rA != null || S) && (n == 0 || n == (T.s < 0 ? 3 : 2))
                  : rA > Q ||
                    (rA == Q &&
                      (n == 4 ||
                        S ||
                        (n == 6 && O[g - 1] & 1) ||
                        n == (T.s < 0 ? 8 : 7)))),
              g < 1 || !O[0])
            )
              D = S ? P(c.charAt(1), -hA, c.charAt(0)) : c.charAt(0);
            else {
              if (((O.length = g), S))
                for (--F; ++O[--g] > F; )
                  (O[g] = 0), g || (++h, (O = [1].concat(O)));
              for (Q = O.length; !O[--Q]; );
              for (rA = 0, D = ""; rA <= Q; D += c.charAt(O[rA++]));
              D = P(D, h, c.charAt(0));
            }
            return D;
          };
        })()),
        (iA = (function () {
          function C(R, F, U) {
            var I,
              c,
              g,
              h,
              Q = 0,
              S = R.length,
              T = F % k,
              O = (F / k) | 0;
            for (R = R.slice(); S--; )
              (g = R[S] % k),
                (h = (R[S] / k) | 0),
                (I = O * g + h * T),
                (c = T * g + (I % k) * k + Q),
                (Q = ((c / U) | 0) + ((I / k) | 0) + O * h),
                (R[S] = c % U);
            return Q && (R = [Q].concat(R)), R;
          }
          function w(R, F, U, I) {
            var c, g;
            if (U != I) g = U > I ? 1 : -1;
            else
              for (c = g = 0; c < U; c++)
                if (R[c] != F[c]) {
                  g = R[c] > F[c] ? 1 : -1;
                  break;
                }
            return g;
          }
          function D(R, F, U, I) {
            for (var c = 0; U--; )
              (R[U] -= c),
                (c = R[U] < F[U] ? 1 : 0),
                (R[U] = c * I + R[U] - F[U]);
            for (; !R[0] && R.length > 1; R.splice(0, 1));
          }
          return function (R, F, U, I, c) {
            var g,
              h,
              Q,
              S,
              T,
              O,
              eA,
              rA,
              hA,
              n,
              r,
              o,
              B,
              l,
              y,
              b,
              Z,
              uA = R.s == F.s ? 1 : -1,
              nA = R.c,
              AA = F.c;
            if (!nA || !nA[0] || !AA || !AA[0])
              return new p(
                !R.s || !F.s || (nA ? AA && nA[0] == AA[0] : !AA)
                  ? NaN
                  : (nA && nA[0] == 0) || !AA
                  ? uA * 0
                  : uA / 0
              );
            for (
              rA = new p(uA),
                hA = rA.c = [],
                h = R.e - F.e,
                uA = U + h + 1,
                c ||
                  ((c = E), (h = L(R.e / d) - L(F.e / d)), (uA = (uA / d) | 0)),
                Q = 0;
              AA[Q] == (nA[Q] || 0);
              Q++
            );
            if ((AA[Q] > (nA[Q] || 0) && h--, uA < 0)) hA.push(1), (S = !0);
            else {
              for (
                l = nA.length,
                  b = AA.length,
                  Q = 0,
                  uA += 2,
                  T = u(c / (AA[0] + 1)),
                  T > 1 &&
                    ((AA = C(AA, T, c)),
                    (nA = C(nA, T, c)),
                    (b = AA.length),
                    (l = nA.length)),
                  B = b,
                  n = nA.slice(0, b),
                  r = n.length;
                r < b;
                n[r++] = 0
              );
              (Z = AA.slice()),
                (Z = [0].concat(Z)),
                (y = AA[0]),
                AA[1] >= c / 2 && y++;
              do {
                if (((T = 0), (g = w(AA, n, b, r)), g < 0)) {
                  if (
                    ((o = n[0]),
                    b != r && (o = o * c + (n[1] || 0)),
                    (T = u(o / y)),
                    T > 1)
                  )
                    for (
                      T >= c && (T = c - 1),
                        O = C(AA, T, c),
                        eA = O.length,
                        r = n.length;
                      w(O, n, eA, r) == 1;

                    )
                      T--,
                        D(O, b < eA ? Z : AA, eA, c),
                        (eA = O.length),
                        (g = 1);
                  else T == 0 && (g = T = 1), (O = AA.slice()), (eA = O.length);
                  if (
                    (eA < r && (O = [0].concat(O)),
                    D(n, O, r, c),
                    (r = n.length),
                    g == -1)
                  )
                    for (; w(AA, n, b, r) < 1; )
                      T++, D(n, b < r ? Z : AA, r, c), (r = n.length);
                } else g === 0 && (T++, (n = [0]));
                (hA[Q++] = T),
                  n[0] ? (n[r++] = nA[B] || 0) : ((n = [nA[B]]), (r = 1));
              } while ((B++ < l || n[0] != null) && uA--);
              (S = n[0] != null), hA[0] || hA.splice(0, 1);
            }
            if (c == E) {
              for (Q = 1, uA = hA[0]; uA >= 10; uA /= 10, Q++);
              K(rA, U + (rA.e = Q + h * d - 1) + 1, I, S);
            } else (rA.e = h), (rA.r = +S);
            return rA;
          };
        })());
      function pA(C, w, D, R) {
        var F, U, I, c, g;
        if ((D == null ? (D = QA) : z(D, 0, 8), !C.c)) return C.toString();
        if (((F = C.c[0]), (I = C.e), w == null))
          (g = J(C.c)),
            (g =
              R == 1 || (R == 2 && (I <= FA || I >= _A))
                ? cA(g, I)
                : P(g, I, "0"));
        else if (
          ((C = K(new p(C), w, D)),
          (U = C.e),
          (g = J(C.c)),
          (c = g.length),
          R == 1 || (R == 2 && (w <= U || U <= FA)))
        ) {
          for (; c < w; g += "0", c++);
          g = cA(g, U);
        } else if (((w -= I), (g = P(g, U, "0")), U + 1 > c)) {
          if (--w > 0) for (g += "."; w--; g += "0");
        } else if (((w += U - c), w > 0))
          for (U + 1 == c && (g += "."); w--; g += "0");
        return C.s < 0 && F ? "-" + g : g;
      }
      function lA(C, w) {
        for (var D, R, F = 1, U = new p(C[0]); F < C.length; F++)
          (R = new p(C[F])),
            (!R.s || (D = X(U, R)) === w || (D === 0 && U.s === w)) && (U = R);
        return U;
      }
      function yA(C, w, D) {
        for (var R = 1, F = w.length; !w[--F]; w.pop());
        for (F = w[0]; F >= 10; F /= 10, R++);
        return (
          (D = R + D * d - 1) > kA
            ? (C.c = C.e = null)
            : D < YA
            ? (C.c = [(C.e = 0)])
            : ((C.e = D), (C.c = w)),
          C
        );
      }
      EA = (function () {
        var C = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
          w = /^([^.]+)\.$/,
          D = /^\.([^.]+)$/,
          R = /^-?(Infinity|NaN)$/,
          F = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function (U, I, c, g) {
          var h,
            Q = c ? I : I.replace(F, "");
          if (R.test(Q)) U.s = isNaN(Q) ? null : Q < 0 ? -1 : 1;
          else {
            if (
              !c &&
              ((Q = Q.replace(C, function (S, T, O) {
                return (
                  (h = (O = O.toLowerCase()) == "x" ? 16 : O == "b" ? 2 : 8),
                  !g || g == h ? T : S
                );
              })),
              g && ((h = g), (Q = Q.replace(w, "$1").replace(D, "0.$1"))),
              I != Q)
            )
              return new p(Q, h);
            if (p.DEBUG)
              throw Error(
                f + "Not a" + (g ? " base " + g : "") + " number: " + I
              );
            U.s = null;
          }
          U.c = U.e = null;
        };
      })();
      function K(C, w, D, R) {
        var F,
          U,
          I,
          c,
          g,
          h,
          Q,
          S = C.c,
          T = N;
        if (S) {
          A: {
            for (F = 1, c = S[0]; c >= 10; c /= 10, F++);
            if (((U = w - F), U < 0))
              (U += d),
                (I = w),
                (g = S[(h = 0)]),
                (Q = u((g / T[F - I - 1]) % 10));
            else if (((h = s((U + 1) / d)), h >= S.length))
              if (R) {
                for (; S.length <= h; S.push(0));
                (g = Q = 0), (F = 1), (U %= d), (I = U - d + 1);
              } else break A;
            else {
              for (g = c = S[h], F = 1; c >= 10; c /= 10, F++);
              (U %= d),
                (I = U - d + F),
                (Q = I < 0 ? 0 : u((g / T[F - I - 1]) % 10));
            }
            if (
              ((R =
                R ||
                w < 0 ||
                S[h + 1] != null ||
                (I < 0 ? g : g % T[F - I - 1])),
              (R =
                D < 4
                  ? (Q || R) && (D == 0 || D == (C.s < 0 ? 3 : 2))
                  : Q > 5 ||
                    (Q == 5 &&
                      (D == 4 ||
                        R ||
                        (D == 6 &&
                          (U > 0 ? (I > 0 ? g / T[F - I] : 0) : S[h - 1]) % 10 &
                            1) ||
                        D == (C.s < 0 ? 8 : 7)))),
              w < 1 || !S[0])
            )
              return (
                (S.length = 0),
                R
                  ? ((w -= C.e + 1),
                    (S[0] = T[(d - (w % d)) % d]),
                    (C.e = -w || 0))
                  : (S[0] = C.e = 0),
                C
              );
            if (
              (U == 0
                ? ((S.length = h), (c = 1), h--)
                : ((S.length = h + 1),
                  (c = T[d - U]),
                  (S[h] = I > 0 ? u((g / T[F - I]) % T[I]) * c : 0)),
              R)
            )
              for (;;)
                if (h == 0) {
                  for (U = 1, I = S[0]; I >= 10; I /= 10, U++);
                  for (I = S[0] += c, c = 1; I >= 10; I /= 10, c++);
                  U != c && (C.e++, S[0] == E && (S[0] = 1));
                  break;
                } else {
                  if (((S[h] += c), S[h] != E)) break;
                  (S[h--] = 0), (c = 1);
                }
            for (U = S.length; S[--U] === 0; S.pop());
          }
          C.e > kA ? (C.c = C.e = null) : C.e < YA && (C.c = [(C.e = 0)]);
        }
        return C;
      }
      function tA(C) {
        var w,
          D = C.e;
        return D === null
          ? C.toString()
          : ((w = J(C.c)),
            (w = D <= FA || D >= _A ? cA(w, D) : P(w, D, "0")),
            C.s < 0 ? "-" + w : w);
      }
      return (
        (Y.absoluteValue = Y.abs =
          function () {
            var C = new p(this);
            return C.s < 0 && (C.s = 1), C;
          }),
        (Y.comparedTo = function (C, w) {
          return X(this, new p(C, w));
        }),
        (Y.decimalPlaces = Y.dp =
          function (C, w) {
            var D,
              R,
              F,
              U = this;
            if (C != null)
              return (
                z(C, 0, _),
                w == null ? (w = QA) : z(w, 0, 8),
                K(new p(U), C + U.e + 1, w)
              );
            if (!(D = U.c)) return null;
            if (((R = ((F = D.length - 1) - L(this.e / d)) * d), (F = D[F])))
              for (; F % 10 == 0; F /= 10, R--);
            return R < 0 && (R = 0), R;
          }),
        (Y.dividedBy = Y.div =
          function (C, w) {
            return iA(this, new p(C, w), dA, QA);
          }),
        (Y.dividedToIntegerBy = Y.idiv =
          function (C, w) {
            return iA(this, new p(C, w), 0, 1);
          }),
        (Y.exponentiatedBy = Y.pow =
          function (C, w) {
            var D,
              R,
              F,
              U,
              I,
              c,
              g,
              h,
              Q,
              S = this;
            if (((C = new p(C)), C.c && !C.isInteger()))
              throw Error(f + "Exponent not an integer: " + tA(C));
            if (
              (w != null && (w = new p(w)),
              (c = C.e > 14),
              !S.c ||
                !S.c[0] ||
                (S.c[0] == 1 && !S.e && S.c.length == 1) ||
                !C.c ||
                !C.c[0])
            )
              return (
                (Q = new p(Math.pow(+tA(S), c ? C.s * (2 - q(C)) : +tA(C)))),
                w ? Q.mod(w) : Q
              );
            if (((g = C.s < 0), w)) {
              if (w.c ? !w.c[0] : !w.s) return new p(NaN);
              (R = !g && S.isInteger() && w.isInteger()), R && (S = S.mod(w));
            } else {
              if (
                C.e > 9 &&
                (S.e > 0 ||
                  S.e < -1 ||
                  (S.e == 0
                    ? S.c[0] > 1 || (c && S.c[1] >= 24e7)
                    : S.c[0] < 8e13 || (c && S.c[0] <= 9999975e7)))
              )
                return (
                  (U = S.s < 0 && q(C) ? -0 : 0),
                  S.e > -1 && (U = 1 / U),
                  new p(g ? 1 / U : U)
                );
              oA && (U = s(oA / d + 2));
            }
            for (
              c
                ? ((D = new p(0.5)), g && (C.s = 1), (h = q(C)))
                : ((F = Math.abs(+tA(C))), (h = F % 2)),
                Q = new p(SA);
              ;

            ) {
              if (h) {
                if (((Q = Q.times(S)), !Q.c)) break;
                U ? Q.c.length > U && (Q.c.length = U) : R && (Q = Q.mod(w));
              }
              if (F) {
                if (((F = u(F / 2)), F === 0)) break;
                h = F % 2;
              } else if (((C = C.times(D)), K(C, C.e + 1, 1), C.e > 14))
                h = q(C);
              else {
                if (((F = +tA(C)), F === 0)) break;
                h = F % 2;
              }
              (S = S.times(S)),
                U
                  ? S.c && S.c.length > U && (S.c.length = U)
                  : R && (S = S.mod(w));
            }
            return R
              ? Q
              : (g && (Q = SA.div(Q)), w ? Q.mod(w) : U ? K(Q, oA, QA, I) : Q);
          }),
        (Y.integerValue = function (C) {
          var w = new p(this);
          return C == null ? (C = QA) : z(C, 0, 8), K(w, w.e + 1, C);
        }),
        (Y.isEqualTo = Y.eq =
          function (C, w) {
            return X(this, new p(C, w)) === 0;
          }),
        (Y.isFinite = function () {
          return !!this.c;
        }),
        (Y.isGreaterThan = Y.gt =
          function (C, w) {
            return X(this, new p(C, w)) > 0;
          }),
        (Y.isGreaterThanOrEqualTo = Y.gte =
          function (C, w) {
            return (w = X(this, new p(C, w))) === 1 || w === 0;
          }),
        (Y.isInteger = function () {
          return !!this.c && L(this.e / d) > this.c.length - 2;
        }),
        (Y.isLessThan = Y.lt =
          function (C, w) {
            return X(this, new p(C, w)) < 0;
          }),
        (Y.isLessThanOrEqualTo = Y.lte =
          function (C, w) {
            return (w = X(this, new p(C, w))) === -1 || w === 0;
          }),
        (Y.isNaN = function () {
          return !this.s;
        }),
        (Y.isNegative = function () {
          return this.s < 0;
        }),
        (Y.isPositive = function () {
          return this.s > 0;
        }),
        (Y.isZero = function () {
          return !!this.c && this.c[0] == 0;
        }),
        (Y.minus = function (C, w) {
          var D,
            R,
            F,
            U,
            I = this,
            c = I.s;
          if (((C = new p(C, w)), (w = C.s), !c || !w)) return new p(NaN);
          if (c != w) return (C.s = -w), I.plus(C);
          var g = I.e / d,
            h = C.e / d,
            Q = I.c,
            S = C.c;
          if (!g || !h) {
            if (!Q || !S) return Q ? ((C.s = -w), C) : new p(S ? I : NaN);
            if (!Q[0] || !S[0])
              return S[0]
                ? ((C.s = -w), C)
                : new p(Q[0] ? I : QA == 3 ? -0 : 0);
          }
          if (((g = L(g)), (h = L(h)), (Q = Q.slice()), (c = g - h))) {
            for (
              (U = c < 0) ? ((c = -c), (F = Q)) : ((h = g), (F = S)),
                F.reverse(),
                w = c;
              w--;
              F.push(0)
            );
            F.reverse();
          } else
            for (
              R = (U = (c = Q.length) < (w = S.length)) ? c : w, c = w = 0;
              w < R;
              w++
            )
              if (Q[w] != S[w]) {
                U = Q[w] < S[w];
                break;
              }
          if (
            (U && ((F = Q), (Q = S), (S = F), (C.s = -C.s)),
            (w = (R = S.length) - (D = Q.length)),
            w > 0)
          )
            for (; w--; Q[D++] = 0);
          for (w = E - 1; R > c; ) {
            if (Q[--R] < S[R]) {
              for (D = R; D && !Q[--D]; Q[D] = w);
              --Q[D], (Q[R] += E);
            }
            Q[R] -= S[R];
          }
          for (; Q[0] == 0; Q.splice(0, 1), --h);
          return Q[0]
            ? yA(C, Q, h)
            : ((C.s = QA == 3 ? -1 : 1), (C.c = [(C.e = 0)]), C);
        }),
        (Y.modulo = Y.mod =
          function (C, w) {
            var D,
              R,
              F = this;
            return (
              (C = new p(C, w)),
              !F.c || !C.s || (C.c && !C.c[0])
                ? new p(NaN)
                : !C.c || (F.c && !F.c[0])
                ? new p(F)
                : (H == 9
                    ? ((R = C.s),
                      (C.s = 1),
                      (D = iA(F, C, 0, 3)),
                      (C.s = R),
                      (D.s *= R))
                    : (D = iA(F, C, 0, H)),
                  (C = F.minus(D.times(C))),
                  !C.c[0] && H == 1 && (C.s = F.s),
                  C)
            );
          }),
        (Y.multipliedBy = Y.times =
          function (C, w) {
            var D,
              R,
              F,
              U,
              I,
              c,
              g,
              h,
              Q,
              S,
              T,
              O,
              eA,
              rA,
              hA,
              n = this,
              r = n.c,
              o = (C = new p(C, w)).c;
            if (!r || !o || !r[0] || !o[0])
              return (
                !n.s || !C.s || (r && !r[0] && !o) || (o && !o[0] && !r)
                  ? (C.c = C.e = C.s = null)
                  : ((C.s *= n.s),
                    !r || !o ? (C.c = C.e = null) : ((C.c = [0]), (C.e = 0))),
                C
              );
            for (
              R = L(n.e / d) + L(C.e / d),
                C.s *= n.s,
                g = r.length,
                S = o.length,
                g < S &&
                  ((eA = r), (r = o), (o = eA), (F = g), (g = S), (S = F)),
                F = g + S,
                eA = [];
              F--;
              eA.push(0)
            );
            for (rA = E, hA = k, F = S; --F >= 0; ) {
              for (
                D = 0, T = o[F] % hA, O = (o[F] / hA) | 0, I = g, U = F + I;
                U > F;

              )
                (h = r[--I] % hA),
                  (Q = (r[I] / hA) | 0),
                  (c = O * h + Q * T),
                  (h = T * h + (c % hA) * hA + eA[U] + D),
                  (D = ((h / rA) | 0) + ((c / hA) | 0) + O * Q),
                  (eA[U--] = h % rA);
              eA[U] = D;
            }
            return D ? ++R : eA.splice(0, 1), yA(C, eA, R);
          }),
        (Y.negated = function () {
          var C = new p(this);
          return (C.s = -C.s || null), C;
        }),
        (Y.plus = function (C, w) {
          var D,
            R = this,
            F = R.s;
          if (((C = new p(C, w)), (w = C.s), !F || !w)) return new p(NaN);
          if (F != w) return (C.s = -w), R.minus(C);
          var U = R.e / d,
            I = C.e / d,
            c = R.c,
            g = C.c;
          if (!U || !I) {
            if (!c || !g) return new p(F / 0);
            if (!c[0] || !g[0]) return g[0] ? C : new p(c[0] ? R : F * 0);
          }
          if (((U = L(U)), (I = L(I)), (c = c.slice()), (F = U - I))) {
            for (
              F > 0 ? ((I = U), (D = g)) : ((F = -F), (D = c)), D.reverse();
              F--;
              D.push(0)
            );
            D.reverse();
          }
          for (
            F = c.length,
              w = g.length,
              F - w < 0 && ((D = g), (g = c), (c = D), (w = F)),
              F = 0;
            w;

          )
            (F = ((c[--w] = c[w] + g[w] + F) / E) | 0),
              (c[w] = E === c[w] ? 0 : c[w] % E);
          return F && ((c = [F].concat(c)), ++I), yA(C, c, I);
        }),
        (Y.precision = Y.sd =
          function (C, w) {
            var D,
              R,
              F,
              U = this;
            if (C != null && C !== !!C)
              return (
                z(C, 1, _), w == null ? (w = QA) : z(w, 0, 8), K(new p(U), C, w)
              );
            if (!(D = U.c)) return null;
            if (((F = D.length - 1), (R = F * d + 1), (F = D[F]))) {
              for (; F % 10 == 0; F /= 10, R--);
              for (F = D[0]; F >= 10; F /= 10, R++);
            }
            return C && U.e + 1 > R && (R = U.e + 1), R;
          }),
        (Y.shiftedBy = function (C) {
          return z(C, -m, m), this.times("1e" + C);
        }),
        (Y.squareRoot = Y.sqrt =
          function () {
            var C,
              w,
              D,
              R,
              F,
              U = this,
              I = U.c,
              c = U.s,
              g = U.e,
              h = dA + 4,
              Q = new p("0.5");
            if (c !== 1 || !I || !I[0])
              return new p(!c || (c < 0 && (!I || I[0])) ? NaN : I ? U : 1 / 0);
            if (
              ((c = Math.sqrt(+tA(U))),
              c == 0 || c == 1 / 0
                ? ((w = J(I)),
                  (w.length + g) % 2 == 0 && (w += "0"),
                  (c = Math.sqrt(+w)),
                  (g = L((g + 1) / 2) - (g < 0 || g % 2)),
                  c == 1 / 0
                    ? (w = "5e" + g)
                    : ((w = c.toExponential()),
                      (w = w.slice(0, w.indexOf("e") + 1) + g)),
                  (D = new p(w)))
                : (D = new p(c + "")),
              D.c[0])
            ) {
              for (g = D.e, c = g + h, c < 3 && (c = 0); ; )
                if (
                  ((F = D),
                  (D = Q.times(F.plus(iA(U, F, h, 1)))),
                  J(F.c).slice(0, c) === (w = J(D.c)).slice(0, c))
                )
                  if (
                    (D.e < g && --c,
                    (w = w.slice(c - 3, c + 1)),
                    w == "9999" || (!R && w == "4999"))
                  ) {
                    if (!R && (K(F, F.e + dA + 2, 0), F.times(F).eq(U))) {
                      D = F;
                      break;
                    }
                    (h += 4), (c += 4), (R = 1);
                  } else {
                    (!+w || (!+w.slice(1) && w.charAt(0) == "5")) &&
                      (K(D, D.e + dA + 2, 1), (C = !D.times(D).eq(U)));
                    break;
                  }
            }
            return K(D, D.e + dA + 1, QA, C);
          }),
        (Y.toExponential = function (C, w) {
          return C != null && (z(C, 0, _), C++), pA(this, C, w, 1);
        }),
        (Y.toFixed = function (C, w) {
          return (
            C != null && (z(C, 0, _), (C = C + this.e + 1)), pA(this, C, w)
          );
        }),
        (Y.toFormat = function (C, w, D) {
          var R,
            F = this;
          if (D == null)
            C != null && w && typeof w == "object"
              ? ((D = w), (w = null))
              : C && typeof C == "object"
              ? ((D = C), (C = w = null))
              : (D = v);
          else if (typeof D != "object")
            throw Error(f + "Argument not an object: " + D);
          if (((R = F.toFixed(C, w)), F.c)) {
            var U,
              I = R.split("."),
              c = +D.groupSize,
              g = +D.secondaryGroupSize,
              h = D.groupSeparator || "",
              Q = I[0],
              S = I[1],
              T = F.s < 0,
              O = T ? Q.slice(1) : Q,
              eA = O.length;
            if (
              (g && ((U = c), (c = g), (g = U), (eA -= U)), c > 0 && eA > 0)
            ) {
              for (U = eA % c || c, Q = O.substr(0, U); U < eA; U += c)
                Q += h + O.substr(U, c);
              g > 0 && (Q += h + O.slice(U)), T && (Q = "-" + Q);
            }
            R = S
              ? Q +
                (D.decimalSeparator || "") +
                ((g = +D.fractionGroupSize)
                  ? S.replace(
                      new RegExp("\\d{" + g + "}\\B", "g"),
                      "$&" + (D.fractionGroupSeparator || "")
                    )
                  : S)
              : Q;
          }
          return (D.prefix || "") + R + (D.suffix || "");
        }),
        (Y.toFraction = function (C) {
          var w,
            D,
            R,
            F,
            U,
            I,
            c,
            g,
            h,
            Q,
            S,
            T,
            O = this,
            eA = O.c;
          if (
            C != null &&
            ((c = new p(C)), (!c.isInteger() && (c.c || c.s !== 1)) || c.lt(SA))
          )
            throw Error(
              f +
                "Argument " +
                (c.isInteger() ? "out of range: " : "not an integer: ") +
                tA(c)
            );
          if (!eA) return new p(O);
          for (
            w = new p(SA),
              h = D = new p(SA),
              R = g = new p(SA),
              T = J(eA),
              U = w.e = T.length - O.e - 1,
              w.c[0] = N[(I = U % d) < 0 ? d + I : I],
              C = !C || c.comparedTo(w) > 0 ? (U > 0 ? w : h) : c,
              I = kA,
              kA = 1 / 0,
              c = new p(T),
              g.c[0] = 0;
            (Q = iA(c, w, 0, 1)),
              (F = D.plus(Q.times(R))),
              F.comparedTo(C) != 1;

          )
            (D = R),
              (R = F),
              (h = g.plus(Q.times((F = h)))),
              (g = F),
              (w = c.minus(Q.times((F = w)))),
              (c = F);
          return (
            (F = iA(C.minus(D), R, 0, 1)),
            (g = g.plus(F.times(h))),
            (D = D.plus(F.times(R))),
            (g.s = h.s = O.s),
            (U = U * 2),
            (S =
              iA(h, R, U, QA)
                .minus(O)
                .abs()
                .comparedTo(iA(g, D, U, QA).minus(O).abs()) < 1
                ? [h, R]
                : [g, D]),
            (kA = I),
            S
          );
        }),
        (Y.toNumber = function () {
          return +tA(this);
        }),
        (Y.toPrecision = function (C, w) {
          return C != null && z(C, 1, _), pA(this, C, w, 2);
        }),
        (Y.toString = function (C) {
          var w,
            D = this,
            R = D.s,
            F = D.e;
          return (
            F === null
              ? R
                ? ((w = "Infinity"), R < 0 && (w = "-" + w))
                : (w = "NaN")
              : (C == null
                  ? (w = F <= FA || F >= _A ? cA(J(D.c), F) : P(J(D.c), F, "0"))
                  : C === 10 && sA
                  ? ((D = K(new p(D), dA + F + 1, QA)),
                    (w = P(J(D.c), D.e, "0")))
                  : (z(C, 2, j.length, "Base"),
                    (w = fA(P(J(D.c), F, "0"), 10, C, R, !0))),
                R < 0 && D.c[0] && (w = "-" + w)),
            w
          );
        }),
        (Y.valueOf = Y.toJSON =
          function () {
            return tA(this);
          }),
        (Y._isBigNumber = !0),
        W != null && p.set(W),
        p
      );
    }
    function L(W) {
      var iA = W | 0;
      return W > 0 || W === iA ? iA : iA - 1;
    }
    function J(W) {
      for (var iA, fA, EA = 1, Y = W.length, SA = W[0] + ""; EA < Y; ) {
        for (iA = W[EA++] + "", fA = d - iA.length; fA--; iA = "0" + iA);
        SA += iA;
      }
      for (Y = SA.length; SA.charCodeAt(--Y) === 48; );
      return SA.slice(0, Y + 1 || 1);
    }
    function X(W, iA) {
      var fA,
        EA,
        Y = W.c,
        SA = iA.c,
        dA = W.s,
        QA = iA.s,
        FA = W.e,
        _A = iA.e;
      if (!dA || !QA) return null;
      if (((fA = Y && !Y[0]), (EA = SA && !SA[0]), fA || EA))
        return fA ? (EA ? 0 : -QA) : dA;
      if (dA != QA) return dA;
      if (((fA = dA < 0), (EA = FA == _A), !Y || !SA))
        return EA ? 0 : !Y ^ fA ? 1 : -1;
      if (!EA) return (FA > _A) ^ fA ? 1 : -1;
      for (
        QA = (FA = Y.length) < (_A = SA.length) ? FA : _A, dA = 0;
        dA < QA;
        dA++
      )
        if (Y[dA] != SA[dA]) return (Y[dA] > SA[dA]) ^ fA ? 1 : -1;
      return FA == _A ? 0 : (FA > _A) ^ fA ? 1 : -1;
    }
    function z(W, iA, fA, EA) {
      if (W < iA || W > fA || W !== u(W))
        throw Error(
          f +
            (EA || "Argument") +
            (typeof W == "number"
              ? W < iA || W > fA
                ? " out of range: "
                : " not an integer: "
              : " not a primitive number: ") +
            String(W)
        );
    }
    function q(W) {
      var iA = W.c.length - 1;
      return L(W.e / d) == iA && W.c[iA] % 2 != 0;
    }
    function cA(W, iA) {
      return (
        (W.length > 1 ? W.charAt(0) + "." + W.slice(1) : W) +
        (iA < 0 ? "e" : "e+") +
        iA
      );
    }
    function P(W, iA, fA) {
      var EA, Y;
      if (iA < 0) {
        for (Y = fA + "."; ++iA; Y += fA);
        W = Y + W;
      } else if (((EA = W.length), ++iA > EA)) {
        for (Y = fA, iA -= EA; --iA; Y += fA);
        W += Y;
      } else iA < EA && (W = W.slice(0, iA) + "." + W.slice(iA));
      return W;
    }
    (t = G()),
      (t.default = t.BigNumber = t),
      e.exports
        ? (e.exports = t)
        : (A || (A = typeof self < "u" && self ? self : window),
          (A.BigNumber = t));
  })(he);
})(As);
var Mr = As.exports,
  nc = function (A, t, i) {
    var s = new A.Uint8Array(i),
      u = t.pushInt,
      f = t.pushInt32,
      a = t.pushInt32Neg,
      E = t.pushInt64,
      d = t.pushInt64Neg,
      m = t.pushFloat,
      N = t.pushFloatSingle,
      k = t.pushFloatDouble,
      _ = t.pushTrue,
      G = t.pushFalse,
      L = t.pushUndefined,
      J = t.pushNull,
      X = t.pushInfinity,
      z = t.pushInfinityNeg,
      q = t.pushNaN,
      cA = t.pushNaNNeg,
      P = t.pushArrayStart,
      W = t.pushArrayStartFixed,
      iA = t.pushArrayStartFixed32,
      fA = t.pushArrayStartFixed64,
      EA = t.pushObjectStart,
      Y = t.pushObjectStartFixed,
      SA = t.pushObjectStartFixed32,
      dA = t.pushObjectStartFixed64,
      QA = t.pushByteString,
      FA = t.pushByteStringStart,
      _A = t.pushUtf8String,
      YA = t.pushUtf8StringStart,
      kA = t.pushSimpleUnassigned,
      $ = t.pushTagStart,
      H = t.pushTagStart4,
      oA = t.pushTagStart8,
      v = t.pushTagUnassigned,
      j = t.pushBreak,
      sA = A.Math.pow,
      p = 0,
      pA = 0,
      lA = 0;
    function yA(x) {
      for (
        x = x | 0, p = 0, pA = x;
        (p | 0) < (pA | 0) &&
        ((lA = zA[s[p] & 255](s[p] | 0) | 0), !((lA | 0) > 0));

      );
      return lA | 0;
    }
    function K(x) {
      return (x = x | 0), (((p | 0) + (x | 0)) | 0) < (pA | 0) ? 0 : 1;
    }
    function tA(x) {
      return (x = x | 0), (s[x | 0] << 8) | s[(x + 1) | 0] | 0;
    }
    function C(x) {
      return (
        (x = x | 0),
        (s[x | 0] << 24) |
          (s[(x + 1) | 0] << 16) |
          (s[(x + 2) | 0] << 8) |
          s[(x + 3) | 0] |
          0
      );
    }
    function w(x) {
      return (x = x | 0), u(x | 0), (p = (p + 1) | 0), 0;
    }
    function D(x) {
      return (
        (x = x | 0),
        K(1) | 0 ? 1 : (u(s[(p + 1) | 0] | 0), (p = (p + 2) | 0), 0)
      );
    }
    function R(x) {
      return (
        (x = x | 0),
        K(2) | 0 ? 1 : (u(tA((p + 1) | 0) | 0), (p = (p + 3) | 0), 0)
      );
    }
    function F(x) {
      return (
        (x = x | 0),
        K(4) | 0
          ? 1
          : (f(tA((p + 1) | 0) | 0, tA((p + 3) | 0) | 0), (p = (p + 5) | 0), 0)
      );
    }
    function U(x) {
      return (
        (x = x | 0),
        K(8) | 0
          ? 1
          : (E(
              tA((p + 1) | 0) | 0,
              tA((p + 3) | 0) | 0,
              tA((p + 5) | 0) | 0,
              tA((p + 7) | 0) | 0
            ),
            (p = (p + 9) | 0),
            0)
      );
    }
    function I(x) {
      return (x = x | 0), u((-1 - ((x - 32) | 0)) | 0), (p = (p + 1) | 0), 0;
    }
    function c(x) {
      return (
        (x = x | 0),
        K(1) | 0
          ? 1
          : (u((-1 - (s[(p + 1) | 0] | 0)) | 0), (p = (p + 2) | 0), 0)
      );
    }
    function g(x) {
      x = x | 0;
      var mA = 0;
      return K(2) | 0
        ? 1
        : ((mA = tA((p + 1) | 0) | 0),
          u((-1 - (mA | 0)) | 0),
          (p = (p + 3) | 0),
          0);
    }
    function h(x) {
      return (
        (x = x | 0),
        K(4) | 0
          ? 1
          : (a(tA((p + 1) | 0) | 0, tA((p + 3) | 0) | 0), (p = (p + 5) | 0), 0)
      );
    }
    function Q(x) {
      return (
        (x = x | 0),
        K(8) | 0
          ? 1
          : (d(
              tA((p + 1) | 0) | 0,
              tA((p + 3) | 0) | 0,
              tA((p + 5) | 0) | 0,
              tA((p + 7) | 0) | 0
            ),
            (p = (p + 9) | 0),
            0)
      );
    }
    function S(x) {
      x = x | 0;
      var mA = 0,
        IA = 0,
        DA = 0;
      return (
        (DA = (x - 64) | 0),
        K(DA | 0) | 0
          ? 1
          : ((mA = (p + 1) | 0),
            (IA = (((p + 1) | 0) + (DA | 0)) | 0),
            QA(mA | 0, IA | 0),
            (p = IA | 0),
            0)
      );
    }
    function T(x) {
      x = x | 0;
      var mA = 0,
        IA = 0,
        DA = 0;
      return K(1) | 0 ||
        ((DA = s[(p + 1) | 0] | 0),
        (mA = (p + 2) | 0),
        (IA = (((p + 2) | 0) + (DA | 0)) | 0),
        K((DA + 1) | 0) | 0)
        ? 1
        : (QA(mA | 0, IA | 0), (p = IA | 0), 0);
    }
    function O(x) {
      x = x | 0;
      var mA = 0,
        IA = 0,
        DA = 0;
      return K(2) | 0 ||
        ((DA = tA((p + 1) | 0) | 0),
        (mA = (p + 3) | 0),
        (IA = (((p + 3) | 0) + (DA | 0)) | 0),
        K((DA + 2) | 0) | 0)
        ? 1
        : (QA(mA | 0, IA | 0), (p = IA | 0), 0);
    }
    function eA(x) {
      x = x | 0;
      var mA = 0,
        IA = 0,
        DA = 0;
      return K(4) | 0 ||
        ((DA = C((p + 1) | 0) | 0),
        (mA = (p + 5) | 0),
        (IA = (((p + 5) | 0) + (DA | 0)) | 0),
        K((DA + 4) | 0) | 0)
        ? 1
        : (QA(mA | 0, IA | 0), (p = IA | 0), 0);
    }
    function rA(x) {
      return (x = x | 0), 1;
    }
    function hA(x) {
      return (x = x | 0), FA(), (p = (p + 1) | 0), 0;
    }
    function n(x) {
      x = x | 0;
      var mA = 0,
        IA = 0,
        DA = 0;
      return (
        (DA = (x - 96) | 0),
        K(DA | 0) | 0
          ? 1
          : ((mA = (p + 1) | 0),
            (IA = (((p + 1) | 0) + (DA | 0)) | 0),
            _A(mA | 0, IA | 0),
            (p = IA | 0),
            0)
      );
    }
    function r(x) {
      x = x | 0;
      var mA = 0,
        IA = 0,
        DA = 0;
      return K(1) | 0 ||
        ((DA = s[(p + 1) | 0] | 0),
        (mA = (p + 2) | 0),
        (IA = (((p + 2) | 0) + (DA | 0)) | 0),
        K((DA + 1) | 0) | 0)
        ? 1
        : (_A(mA | 0, IA | 0), (p = IA | 0), 0);
    }
    function o(x) {
      x = x | 0;
      var mA = 0,
        IA = 0,
        DA = 0;
      return K(2) | 0 ||
        ((DA = tA((p + 1) | 0) | 0),
        (mA = (p + 3) | 0),
        (IA = (((p + 3) | 0) + (DA | 0)) | 0),
        K((DA + 2) | 0) | 0)
        ? 1
        : (_A(mA | 0, IA | 0), (p = IA | 0), 0);
    }
    function B(x) {
      x = x | 0;
      var mA = 0,
        IA = 0,
        DA = 0;
      return K(4) | 0 ||
        ((DA = C((p + 1) | 0) | 0),
        (mA = (p + 5) | 0),
        (IA = (((p + 5) | 0) + (DA | 0)) | 0),
        K((DA + 4) | 0) | 0)
        ? 1
        : (_A(mA | 0, IA | 0), (p = IA | 0), 0);
    }
    function l(x) {
      return (x = x | 0), 1;
    }
    function y(x) {
      return (x = x | 0), YA(), (p = (p + 1) | 0), 0;
    }
    function b(x) {
      return (x = x | 0), W((x - 128) | 0), (p = (p + 1) | 0), 0;
    }
    function Z(x) {
      return (
        (x = x | 0),
        K(1) | 0 ? 1 : (W(s[(p + 1) | 0] | 0), (p = (p + 2) | 0), 0)
      );
    }
    function uA(x) {
      return (
        (x = x | 0),
        K(2) | 0 ? 1 : (W(tA((p + 1) | 0) | 0), (p = (p + 3) | 0), 0)
      );
    }
    function nA(x) {
      return (
        (x = x | 0),
        K(4) | 0
          ? 1
          : (iA(tA((p + 1) | 0) | 0, tA((p + 3) | 0) | 0), (p = (p + 5) | 0), 0)
      );
    }
    function AA(x) {
      return (
        (x = x | 0),
        K(8) | 0
          ? 1
          : (fA(
              tA((p + 1) | 0) | 0,
              tA((p + 3) | 0) | 0,
              tA((p + 5) | 0) | 0,
              tA((p + 7) | 0) | 0
            ),
            (p = (p + 9) | 0),
            0)
      );
    }
    function BA(x) {
      return (x = x | 0), P(), (p = (p + 1) | 0), 0;
    }
    function wA(x) {
      x = x | 0;
      var mA = 0;
      return (
        (mA = (x - 160) | 0),
        K(mA | 0) | 0 ? 1 : (Y(mA | 0), (p = (p + 1) | 0), 0)
      );
    }
    function Ut(x) {
      return (
        (x = x | 0),
        K(1) | 0 ? 1 : (Y(s[(p + 1) | 0] | 0), (p = (p + 2) | 0), 0)
      );
    }
    function vr(x) {
      return (
        (x = x | 0),
        K(2) | 0 ? 1 : (Y(tA((p + 1) | 0) | 0), (p = (p + 3) | 0), 0)
      );
    }
    function Ye(x) {
      return (
        (x = x | 0),
        K(4) | 0
          ? 1
          : (SA(tA((p + 1) | 0) | 0, tA((p + 3) | 0) | 0), (p = (p + 5) | 0), 0)
      );
    }
    function de(x) {
      return (
        (x = x | 0),
        K(8) | 0
          ? 1
          : (dA(
              tA((p + 1) | 0) | 0,
              tA((p + 3) | 0) | 0,
              tA((p + 5) | 0) | 0,
              tA((p + 7) | 0) | 0
            ),
            (p = (p + 9) | 0),
            0)
      );
    }
    function qe(x) {
      return (x = x | 0), EA(), (p = (p + 1) | 0), 0;
    }
    function St(x) {
      return (x = x | 0), $((x - 192) | 0 | 0), (p = (p + 1) | 0), 0;
    }
    function fi(x) {
      return (x = x | 0), $(x | 0), (p = (p + 1) | 0), 0;
    }
    function Hr(x) {
      return (x = x | 0), $(x | 0), (p = (p + 1) | 0), 0;
    }
    function Or(x) {
      return (x = x | 0), $(x | 0), (p = (p + 1) | 0), 0;
    }
    function Bi(x) {
      return (x = x | 0), $(x | 0), (p = (p + 1) | 0), 0;
    }
    function GA(x) {
      return (x = x | 0), $((x - 192) | 0 | 0), (p = (p + 1) | 0), 0;
    }
    function Je(x) {
      return (x = x | 0), $(x | 0), (p = (p + 1) | 0), 0;
    }
    function Yr(x) {
      return (x = x | 0), $(x | 0), (p = (p + 1) | 0), 0;
    }
    function qr(x) {
      return (x = x | 0), $(x | 0), (p = (p + 1) | 0), 0;
    }
    function Jr(x) {
      return (
        (x = x | 0),
        K(1) | 0 ? 1 : ($(s[(p + 1) | 0] | 0), (p = (p + 2) | 0), 0)
      );
    }
    function Ke(x) {
      return (
        (x = x | 0),
        K(2) | 0 ? 1 : ($(tA((p + 1) | 0) | 0), (p = (p + 3) | 0), 0)
      );
    }
    function gt(x) {
      return (
        (x = x | 0),
        K(4) | 0
          ? 1
          : (H(tA((p + 1) | 0) | 0, tA((p + 3) | 0) | 0), (p = (p + 5) | 0), 0)
      );
    }
    function Pe(x) {
      return (
        (x = x | 0),
        K(8) | 0
          ? 1
          : (oA(
              tA((p + 1) | 0) | 0,
              tA((p + 3) | 0) | 0,
              tA((p + 5) | 0) | 0,
              tA((p + 7) | 0) | 0
            ),
            (p = (p + 9) | 0),
            0)
      );
    }
    function LA(x) {
      return (x = x | 0), kA(((x | 0) - 224) | 0), (p = (p + 1) | 0), 0;
    }
    function We(x) {
      return (x = x | 0), G(), (p = (p + 1) | 0), 0;
    }
    function je(x) {
      return (x = x | 0), _(), (p = (p + 1) | 0), 0;
    }
    function Kr(x) {
      return (x = x | 0), J(), (p = (p + 1) | 0), 0;
    }
    function gA(x) {
      return (x = x | 0), L(), (p = (p + 1) | 0), 0;
    }
    function M(x) {
      return (
        (x = x | 0),
        K(1) | 0 ? 1 : (kA(s[(p + 1) | 0] | 0), (p = (p + 2) | 0), 0)
      );
    }
    function V(x) {
      x = x | 0;
      var mA = 0,
        IA = 0,
        DA = 1,
        Xt = 0,
        pe = 0,
        wB = 0;
      return K(2) | 0
        ? 1
        : ((mA = s[(p + 1) | 0] | 0),
          (IA = s[(p + 2) | 0] | 0),
          (mA | 0) & 128 && (DA = -1),
          (Xt = +(((mA | 0) & 124) >> 2)),
          (pe = +((((mA | 0) & 3) << 8) | IA)),
          +Xt == 0
            ? m(+(+DA * 5960464477539063e-23 * +pe))
            : +Xt == 31
            ? +DA == 1
              ? +pe > 0
                ? q()
                : X()
              : +pe > 0
              ? cA()
              : z()
            : m(+(+DA * sA(2, +(+Xt - 25)) * +(1024 + pe))),
          (p = (p + 3) | 0),
          0);
    }
    function aA(x) {
      return (
        (x = x | 0),
        K(4) | 0
          ? 1
          : (N(
              s[(p + 1) | 0] | 0,
              s[(p + 2) | 0] | 0,
              s[(p + 3) | 0] | 0,
              s[(p + 4) | 0] | 0
            ),
            (p = (p + 5) | 0),
            0)
      );
    }
    function TA(x) {
      return (
        (x = x | 0),
        K(8) | 0
          ? 1
          : (k(
              s[(p + 1) | 0] | 0,
              s[(p + 2) | 0] | 0,
              s[(p + 3) | 0] | 0,
              s[(p + 4) | 0] | 0,
              s[(p + 5) | 0] | 0,
              s[(p + 6) | 0] | 0,
              s[(p + 7) | 0] | 0,
              s[(p + 8) | 0] | 0
            ),
            (p = (p + 9) | 0),
            0)
      );
    }
    function CA(x) {
      return (x = x | 0), 1;
    }
    function PA(x) {
      return (x = x | 0), j(), (p = (p + 1) | 0), 0;
    }
    var zA = [
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      w,
      D,
      R,
      F,
      U,
      CA,
      CA,
      CA,
      CA,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      I,
      c,
      g,
      h,
      Q,
      CA,
      CA,
      CA,
      CA,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      S,
      T,
      O,
      eA,
      rA,
      CA,
      CA,
      CA,
      hA,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      n,
      r,
      o,
      B,
      l,
      CA,
      CA,
      CA,
      y,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      b,
      Z,
      uA,
      nA,
      AA,
      CA,
      CA,
      CA,
      BA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      wA,
      Ut,
      vr,
      Ye,
      de,
      CA,
      CA,
      CA,
      qe,
      St,
      St,
      St,
      St,
      St,
      St,
      GA,
      GA,
      GA,
      GA,
      GA,
      GA,
      GA,
      GA,
      GA,
      GA,
      GA,
      GA,
      GA,
      GA,
      GA,
      GA,
      GA,
      GA,
      Jr,
      Ke,
      gt,
      Pe,
      CA,
      CA,
      CA,
      CA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      LA,
      We,
      je,
      Kr,
      gA,
      M,
      V,
      aA,
      TA,
      CA,
      CA,
      CA,
      PA,
    ];
    return { parse: yA };
  },
  Gr = {},
  ZA = {};
const Wn = Mr.BigNumber;
ZA.MT = {
  POS_INT: 0,
  NEG_INT: 1,
  BYTE_STRING: 2,
  UTF8_STRING: 3,
  ARRAY: 4,
  MAP: 5,
  TAG: 6,
  SIMPLE_FLOAT: 7,
};
ZA.TAG = {
  DATE_STRING: 0,
  DATE_EPOCH: 1,
  POS_BIGINT: 2,
  NEG_BIGINT: 3,
  DECIMAL_FRAC: 4,
  BIGFLOAT: 5,
  BASE64URL_EXPECTED: 21,
  BASE64_EXPECTED: 22,
  BASE16_EXPECTED: 23,
  CBOR: 24,
  URI: 32,
  BASE64URL: 33,
  BASE64: 34,
  REGEXP: 35,
  MIME: 36,
};
ZA.NUMBYTES = {
  ZERO: 0,
  ONE: 24,
  TWO: 25,
  FOUR: 26,
  EIGHT: 27,
  INDEFINITE: 31,
};
ZA.SIMPLE = { FALSE: 20, TRUE: 21, NULL: 22, UNDEFINED: 23 };
ZA.SYMS = {
  NULL: Symbol("null"),
  UNDEFINED: Symbol("undef"),
  PARENT: Symbol("parent"),
  BREAK: Symbol("break"),
  STREAM: Symbol("stream"),
};
ZA.SHIFT32 = Math.pow(2, 32);
ZA.SHIFT16 = Math.pow(2, 16);
ZA.MAX_SAFE_HIGH = 2097151;
ZA.NEG_ONE = new Wn(-1);
ZA.TEN = new Wn(10);
ZA.TWO = new Wn(2);
ZA.PARENT = {
  ARRAY: 0,
  OBJECT: 1,
  MAP: 2,
  TAG: 3,
  BYTE_STRING: 4,
  UTF8_STRING: 5,
};
(function (e) {
  const { Buffer: A } = ve,
    t = Mr.BigNumber,
    i = ZA,
    s = i.SHIFT32,
    u = i.SHIFT16,
    f = 2097151;
  e.parseHalf = function (d) {
    var m, N, k;
    return (
      (k = d[0] & 128 ? -1 : 1),
      (m = (d[0] & 124) >> 2),
      (N = ((d[0] & 3) << 8) | d[1]),
      m
        ? m === 31
          ? k * (N ? 0 / 0 : 1 / 0)
          : k * Math.pow(2, m - 25) * (1024 + N)
        : k * 5960464477539063e-23 * N
    );
  };
  function a(E) {
    return E < 16 ? "0" + E.toString(16) : E.toString(16);
  }
  (e.arrayBufferToBignumber = function (E) {
    const d = E.byteLength;
    let m = "";
    for (let N = 0; N < d; N++) m += a(E[N]);
    return new t(m, 16);
  }),
    (e.buildMap = (E) => {
      const d = new Map(),
        m = Object.keys(E),
        N = m.length;
      for (let k = 0; k < N; k++) d.set(m[k], E[m[k]]);
      return d;
    }),
    (e.buildInt32 = (E, d) => E * u + d),
    (e.buildInt64 = (E, d, m, N) => {
      const k = e.buildInt32(E, d),
        _ = e.buildInt32(m, N);
      return k > f ? new t(k).times(s).plus(_) : k * s + _;
    }),
    (e.writeHalf = function (d, m) {
      const N = A.allocUnsafe(4);
      N.writeFloatBE(m, 0);
      const k = N.readUInt32BE(0);
      if (k & 8191) return !1;
      var _ = (k >> 16) & 32768;
      const G = (k >> 23) & 255,
        L = k & 8388607;
      if (G >= 113 && G <= 142) _ += ((G - 112) << 10) + (L >> 13);
      else if (G >= 103 && G < 113) {
        if (L & ((1 << (126 - G)) - 1)) return !1;
        _ += (L + 8388608) >> (126 - G);
      } else return !1;
      return d.writeUInt16BE(_, 0), !0;
    }),
    (e.keySorter = function (E, d) {
      var m = E[0].byteLength,
        N = d[0].byteLength;
      return m > N ? 1 : N > m ? -1 : E[0].compare(d[0]);
    }),
    (e.isNegativeZero = (E) => E === 0 && 1 / E < 0),
    (e.nextPowerOf2 = (E) => {
      let d = 0;
      if (E && !(E & (E - 1))) return E;
      for (; E !== 0; ) (E >>= 1), (d += 1);
      return 1 << d;
    });
})(Gr);
const jn = ZA,
  ic = jn.MT,
  ze = jn.SIMPLE,
  Vr = jn.SYMS;
let oc = class pn {
  constructor(A) {
    if (typeof A != "number")
      throw new Error("Invalid Simple type: " + typeof A);
    if (A < 0 || A > 255 || (A | 0) !== A)
      throw new Error("value must be a small positive integer: " + A);
    this.value = A;
  }
  toString() {
    return "simple(" + this.value + ")";
  }
  inspect() {
    return "simple(" + this.value + ")";
  }
  encodeCBOR(A) {
    return A._pushInt(this.value, ic.SIMPLE_FLOAT);
  }
  static isSimple(A) {
    return A instanceof pn;
  }
  static decode(A, t) {
    switch ((t == null && (t = !0), A)) {
      case ze.FALSE:
        return !1;
      case ze.TRUE:
        return !0;
      case ze.NULL:
        return t ? null : Vr.NULL;
      case ze.UNDEFINED:
        return t ? void 0 : Vr.UNDEFINED;
      case -1:
        if (!t) throw new Error("Invalid BREAK");
        return Vr.BREAK;
      default:
        return new pn(A);
    }
  }
};
var ts = oc;
let sc = class wn {
  constructor(A, t, i) {
    if (
      ((this.tag = A),
      (this.value = t),
      (this.err = i),
      typeof this.tag != "number")
    )
      throw new Error("Invalid tag type (" + typeof this.tag + ")");
    if (this.tag < 0 || (this.tag | 0) !== this.tag)
      throw new Error("Tag must be a positive integer: " + this.tag);
  }
  toString() {
    return `${this.tag}(${JSON.stringify(this.value)})`;
  }
  encodeCBOR(A) {
    return A._pushTag(this.tag), A.pushAny(this.value);
  }
  convert(A) {
    var t, i;
    if (
      ((i = A?.[this.tag]),
      typeof i != "function" &&
        ((i = wn["_tag" + this.tag]), typeof i != "function"))
    )
      return this;
    try {
      return i.call(wn, this.value);
    } catch (s) {
      return (t = s), (this.err = t), this;
    }
  }
};
var es = sc;
const rs = self.location
    ? self.location.protocol + "//" + self.location.host
    : "",
  yn = self.URL;
let ac = class {
  constructor(A = "", t = rs) {
    (this.super = new yn(A, t)),
      (this.path = this.pathname + this.search),
      (this.auth =
        this.username && this.password
          ? this.username + ":" + this.password
          : null),
      (this.query =
        this.search && this.search.startsWith("?")
          ? this.search.slice(1)
          : null);
  }
  get hash() {
    return this.super.hash;
  }
  get host() {
    return this.super.host;
  }
  get hostname() {
    return this.super.hostname;
  }
  get href() {
    return this.super.href;
  }
  get origin() {
    return this.super.origin;
  }
  get password() {
    return this.super.password;
  }
  get pathname() {
    return this.super.pathname;
  }
  get port() {
    return this.super.port;
  }
  get protocol() {
    return this.super.protocol;
  }
  get search() {
    return this.super.search;
  }
  get searchParams() {
    return this.super.searchParams;
  }
  get username() {
    return this.super.username;
  }
  set hash(A) {
    this.super.hash = A;
  }
  set host(A) {
    this.super.host = A;
  }
  set hostname(A) {
    this.super.hostname = A;
  }
  set href(A) {
    this.super.href = A;
  }
  set origin(A) {
    this.super.origin = A;
  }
  set password(A) {
    this.super.password = A;
  }
  set pathname(A) {
    this.super.pathname = A;
  }
  set port(A) {
    this.super.port = A;
  }
  set protocol(A) {
    this.super.protocol = A;
  }
  set search(A) {
    this.super.search = A;
  }
  set searchParams(A) {
    this.super.searchParams = A;
  }
  set username(A) {
    this.super.username = A;
  }
  createObjectURL(A) {
    return this.super.createObjectURL(A);
  }
  revokeObjectURL(A) {
    this.super.revokeObjectURL(A);
  }
  toJSON() {
    return this.super.toJSON();
  }
  toString() {
    return this.super.toString();
  }
  format() {
    return this.toString();
  }
};
function cc(e) {
  if (typeof e == "string") return new yn(e).toString();
  if (!(e instanceof yn)) {
    const A = e.username && e.password ? `${e.username}:${e.password}@` : "",
      t = e.auth ? e.auth + "@" : "",
      i = e.port ? ":" + e.port : "",
      s = e.protocol ? e.protocol + "//" : "",
      u = e.host || "",
      f = e.hostname || "",
      a = e.search || (e.query ? "?" + e.query : ""),
      E = e.hash || "",
      d = e.pathname || "",
      m = e.path || d + a;
    return `${s}${A || t}${u || f + i}${m}${E}`;
  }
}
var ns = {
  URLWithLegacySupport: ac,
  URLSearchParams: self.URLSearchParams,
  defaultBase: rs,
  format: cc,
};
const { URLWithLegacySupport: li, format: gc } = ns;
var uc = (e, A = {}, t = {}, i) => {
  let s = A.protocol ? A.protocol.replace(":", "") : "http";
  s = (t[s] || i || s) + ":";
  let u;
  try {
    u = new li(e);
  } catch {
    u = {};
  }
  const f = Object.assign({}, A, {
    protocol: s || u.protocol,
    host: A.host || u.host,
  });
  return new li(e, gc(f)).toString();
};
const {
    URLWithLegacySupport: fc,
    format: Bc,
    URLSearchParams: Ic,
    defaultBase: hc,
  } = ns,
  Ec = uc;
var is = {
  URL: fc,
  URLSearchParams: Ic,
  format: Bc,
  relative: Ec,
  defaultBase: hc,
};
const { Buffer: se } = ve,
  Qi = ke,
  lc = Mr.BigNumber,
  Qc = nc,
  XA = Gr,
  UA = ZA,
  Cc = ts,
  dc = es,
  { URL: pc } = is;
let mn = class Sn {
  constructor(A) {
    (A = A || {}),
      !A.size || A.size < 65536
        ? (A.size = 65536)
        : (A.size = XA.nextPowerOf2(A.size)),
      (this._heap = new ArrayBuffer(A.size)),
      (this._heap8 = new Uint8Array(this._heap)),
      (this._buffer = se.from(this._heap)),
      this._reset(),
      (this._knownTags = Object.assign(
        {
          0: (t) => new Date(t),
          1: (t) => new Date(t * 1e3),
          2: (t) => XA.arrayBufferToBignumber(t),
          3: (t) => UA.NEG_ONE.minus(XA.arrayBufferToBignumber(t)),
          4: (t) => UA.TEN.pow(t[0]).times(t[1]),
          5: (t) => UA.TWO.pow(t[0]).times(t[1]),
          32: (t) => new pc(t),
          35: (t) => new RegExp(t),
        },
        A.tags
      )),
      (this.parser = Qc(
        he,
        {
          log: console.log.bind(console),
          pushInt: this.pushInt.bind(this),
          pushInt32: this.pushInt32.bind(this),
          pushInt32Neg: this.pushInt32Neg.bind(this),
          pushInt64: this.pushInt64.bind(this),
          pushInt64Neg: this.pushInt64Neg.bind(this),
          pushFloat: this.pushFloat.bind(this),
          pushFloatSingle: this.pushFloatSingle.bind(this),
          pushFloatDouble: this.pushFloatDouble.bind(this),
          pushTrue: this.pushTrue.bind(this),
          pushFalse: this.pushFalse.bind(this),
          pushUndefined: this.pushUndefined.bind(this),
          pushNull: this.pushNull.bind(this),
          pushInfinity: this.pushInfinity.bind(this),
          pushInfinityNeg: this.pushInfinityNeg.bind(this),
          pushNaN: this.pushNaN.bind(this),
          pushNaNNeg: this.pushNaNNeg.bind(this),
          pushArrayStart: this.pushArrayStart.bind(this),
          pushArrayStartFixed: this.pushArrayStartFixed.bind(this),
          pushArrayStartFixed32: this.pushArrayStartFixed32.bind(this),
          pushArrayStartFixed64: this.pushArrayStartFixed64.bind(this),
          pushObjectStart: this.pushObjectStart.bind(this),
          pushObjectStartFixed: this.pushObjectStartFixed.bind(this),
          pushObjectStartFixed32: this.pushObjectStartFixed32.bind(this),
          pushObjectStartFixed64: this.pushObjectStartFixed64.bind(this),
          pushByteString: this.pushByteString.bind(this),
          pushByteStringStart: this.pushByteStringStart.bind(this),
          pushUtf8String: this.pushUtf8String.bind(this),
          pushUtf8StringStart: this.pushUtf8StringStart.bind(this),
          pushSimpleUnassigned: this.pushSimpleUnassigned.bind(this),
          pushTagUnassigned: this.pushTagUnassigned.bind(this),
          pushTagStart: this.pushTagStart.bind(this),
          pushTagStart4: this.pushTagStart4.bind(this),
          pushTagStart8: this.pushTagStart8.bind(this),
          pushBreak: this.pushBreak.bind(this),
        },
        this._heap
      ));
  }
  get _depth() {
    return this._parents.length;
  }
  get _currentParent() {
    return this._parents[this._depth - 1];
  }
  get _ref() {
    return this._currentParent.ref;
  }
  _closeParent() {
    var A = this._parents.pop();
    if (A.length > 0) throw new Error(`Missing ${A.length} elements`);
    switch (A.type) {
      case UA.PARENT.TAG:
        this._push(this.createTag(A.ref[0], A.ref[1]));
        break;
      case UA.PARENT.BYTE_STRING:
        this._push(this.createByteString(A.ref, A.length));
        break;
      case UA.PARENT.UTF8_STRING:
        this._push(this.createUtf8String(A.ref, A.length));
        break;
      case UA.PARENT.MAP:
        if (A.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createMap(A.ref, A.length));
        break;
      case UA.PARENT.OBJECT:
        if (A.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createObject(A.ref, A.length));
        break;
      case UA.PARENT.ARRAY:
        this._push(this.createArray(A.ref, A.length));
        break;
    }
    this._currentParent &&
      this._currentParent.type === UA.PARENT.TAG &&
      this._dec();
  }
  _dec() {
    const A = this._currentParent;
    A.length < 0 || (A.length--, A.length === 0 && this._closeParent());
  }
  _push(A, t) {
    const i = this._currentParent;
    switch ((i.values++, i.type)) {
      case UA.PARENT.ARRAY:
      case UA.PARENT.BYTE_STRING:
      case UA.PARENT.UTF8_STRING:
        i.length > -1
          ? (this._ref[this._ref.length - i.length] = A)
          : this._ref.push(A),
          this._dec();
        break;
      case UA.PARENT.OBJECT:
        i.tmpKey != null
          ? ((this._ref[i.tmpKey] = A), (i.tmpKey = null), this._dec())
          : ((i.tmpKey = A),
            typeof i.tmpKey != "string" &&
              ((i.type = UA.PARENT.MAP), (i.ref = XA.buildMap(i.ref))));
        break;
      case UA.PARENT.MAP:
        i.tmpKey != null
          ? (this._ref.set(i.tmpKey, A), (i.tmpKey = null), this._dec())
          : (i.tmpKey = A);
        break;
      case UA.PARENT.TAG:
        this._ref.push(A), t || this._dec();
        break;
      default:
        throw new Error("Unknown parent type");
    }
  }
  _createParent(A, t, i) {
    this._parents[this._depth] = {
      type: t,
      length: i,
      ref: A,
      values: 0,
      tmpKey: null,
    };
  }
  _reset() {
    (this._res = []),
      (this._parents = [
        {
          type: UA.PARENT.ARRAY,
          length: -1,
          ref: this._res,
          values: 0,
          tmpKey: null,
        },
      ]);
  }
  createTag(A, t) {
    const i = this._knownTags[A];
    return i ? i(t) : new dc(A, t);
  }
  createMap(A, t) {
    return A;
  }
  createObject(A, t) {
    return A;
  }
  createArray(A, t) {
    return A;
  }
  createByteString(A, t) {
    return se.concat(A);
  }
  createByteStringFromHeap(A, t) {
    return A === t ? se.alloc(0) : se.from(this._heap.slice(A, t));
  }
  createInt(A) {
    return A;
  }
  createInt32(A, t) {
    return XA.buildInt32(A, t);
  }
  createInt64(A, t, i, s) {
    return XA.buildInt64(A, t, i, s);
  }
  createFloat(A) {
    return A;
  }
  createFloatSingle(A, t, i, s) {
    return Qi.read([A, t, i, s], 0, !1, 23, 4);
  }
  createFloatDouble(A, t, i, s, u, f, a, E) {
    return Qi.read([A, t, i, s, u, f, a, E], 0, !1, 52, 8);
  }
  createInt32Neg(A, t) {
    return -1 - XA.buildInt32(A, t);
  }
  createInt64Neg(A, t, i, s) {
    const u = XA.buildInt32(A, t),
      f = XA.buildInt32(i, s);
    return u > UA.MAX_SAFE_HIGH
      ? UA.NEG_ONE.minus(new lc(u).times(UA.SHIFT32).plus(f))
      : -1 - (u * UA.SHIFT32 + f);
  }
  createTrue() {
    return !0;
  }
  createFalse() {
    return !1;
  }
  createNull() {
    return null;
  }
  createUndefined() {}
  createInfinity() {
    return 1 / 0;
  }
  createInfinityNeg() {
    return -1 / 0;
  }
  createNaN() {
    return NaN;
  }
  createNaNNeg() {
    return NaN;
  }
  createUtf8String(A, t) {
    return A.join("");
  }
  createUtf8StringFromHeap(A, t) {
    return A === t ? "" : this._buffer.toString("utf8", A, t);
  }
  createSimpleUnassigned(A) {
    return new Cc(A);
  }
  pushInt(A) {
    this._push(this.createInt(A));
  }
  pushInt32(A, t) {
    this._push(this.createInt32(A, t));
  }
  pushInt64(A, t, i, s) {
    this._push(this.createInt64(A, t, i, s));
  }
  pushFloat(A) {
    this._push(this.createFloat(A));
  }
  pushFloatSingle(A, t, i, s) {
    this._push(this.createFloatSingle(A, t, i, s));
  }
  pushFloatDouble(A, t, i, s, u, f, a, E) {
    this._push(this.createFloatDouble(A, t, i, s, u, f, a, E));
  }
  pushInt32Neg(A, t) {
    this._push(this.createInt32Neg(A, t));
  }
  pushInt64Neg(A, t, i, s) {
    this._push(this.createInt64Neg(A, t, i, s));
  }
  pushTrue() {
    this._push(this.createTrue());
  }
  pushFalse() {
    this._push(this.createFalse());
  }
  pushNull() {
    this._push(this.createNull());
  }
  pushUndefined() {
    this._push(this.createUndefined());
  }
  pushInfinity() {
    this._push(this.createInfinity());
  }
  pushInfinityNeg() {
    this._push(this.createInfinityNeg());
  }
  pushNaN() {
    this._push(this.createNaN());
  }
  pushNaNNeg() {
    this._push(this.createNaNNeg());
  }
  pushArrayStart() {
    this._createParent([], UA.PARENT.ARRAY, -1);
  }
  pushArrayStartFixed(A) {
    this._createArrayStartFixed(A);
  }
  pushArrayStartFixed32(A, t) {
    const i = XA.buildInt32(A, t);
    this._createArrayStartFixed(i);
  }
  pushArrayStartFixed64(A, t, i, s) {
    const u = XA.buildInt64(A, t, i, s);
    this._createArrayStartFixed(u);
  }
  pushObjectStart() {
    this._createObjectStartFixed(-1);
  }
  pushObjectStartFixed(A) {
    this._createObjectStartFixed(A);
  }
  pushObjectStartFixed32(A, t) {
    const i = XA.buildInt32(A, t);
    this._createObjectStartFixed(i);
  }
  pushObjectStartFixed64(A, t, i, s) {
    const u = XA.buildInt64(A, t, i, s);
    this._createObjectStartFixed(u);
  }
  pushByteStringStart() {
    this._parents[this._depth] = {
      type: UA.PARENT.BYTE_STRING,
      length: -1,
      ref: [],
      values: 0,
      tmpKey: null,
    };
  }
  pushByteString(A, t) {
    this._push(this.createByteStringFromHeap(A, t));
  }
  pushUtf8StringStart() {
    this._parents[this._depth] = {
      type: UA.PARENT.UTF8_STRING,
      length: -1,
      ref: [],
      values: 0,
      tmpKey: null,
    };
  }
  pushUtf8String(A, t) {
    this._push(this.createUtf8StringFromHeap(A, t));
  }
  pushSimpleUnassigned(A) {
    this._push(this.createSimpleUnassigned(A));
  }
  pushTagStart(A) {
    this._parents[this._depth] = { type: UA.PARENT.TAG, length: 1, ref: [A] };
  }
  pushTagStart4(A, t) {
    this.pushTagStart(XA.buildInt32(A, t));
  }
  pushTagStart8(A, t, i, s) {
    this.pushTagStart(XA.buildInt64(A, t, i, s));
  }
  pushTagUnassigned(A) {
    this._push(this.createTag(A));
  }
  pushBreak() {
    if (this._currentParent.length > -1) throw new Error("Unexpected break");
    this._closeParent();
  }
  _createObjectStartFixed(A) {
    if (A === 0) {
      this._push(this.createObject({}));
      return;
    }
    this._createParent({}, UA.PARENT.OBJECT, A);
  }
  _createArrayStartFixed(A) {
    if (A === 0) {
      this._push(this.createArray([]));
      return;
    }
    this._createParent(new Array(A), UA.PARENT.ARRAY, A);
  }
  _decode(A) {
    if (A.byteLength === 0) throw new Error("Input too short");
    this._reset(), this._heap8.set(A);
    const t = this.parser.parse(A.byteLength);
    if (this._depth > 1) {
      for (; this._currentParent.length === 0; ) this._closeParent();
      if (this._depth > 1) throw new Error("Undeterminated nesting");
    }
    if (t > 0) throw new Error("Failed to parse");
    if (this._res.length === 0) throw new Error("No valid result");
  }
  decodeFirst(A) {
    return this._decode(A), this._res[0];
  }
  decodeAll(A) {
    return this._decode(A), this._res;
  }
  static decode(A, t) {
    return (
      typeof A == "string" && (A = se.from(A, t || "hex")),
      new Sn({ size: A.length }).decodeFirst(A)
    );
  }
  static decodeAll(A, t) {
    return (
      typeof A == "string" && (A = se.from(A, t || "hex")),
      new Sn({ size: A.length }).decodeAll(A)
    );
  }
};
mn.decodeFirst = mn.decode;
var os = mn;
const { Buffer: zr } = ve,
  wc = os,
  yc = Gr;
class Vn extends wc {
  createTag(A, t) {
    return `${A}(${t})`;
  }
  createInt(A) {
    return super.createInt(A).toString();
  }
  createInt32(A, t) {
    return super.createInt32(A, t).toString();
  }
  createInt64(A, t, i, s) {
    return super.createInt64(A, t, i, s).toString();
  }
  createInt32Neg(A, t) {
    return super.createInt32Neg(A, t).toString();
  }
  createInt64Neg(A, t, i, s) {
    return super.createInt64Neg(A, t, i, s).toString();
  }
  createTrue() {
    return "true";
  }
  createFalse() {
    return "false";
  }
  createFloat(A) {
    const t = super.createFloat(A);
    return yc.isNegativeZero(A) ? "-0_1" : `${t}_1`;
  }
  createFloatSingle(A, t, i, s) {
    return `${super.createFloatSingle(A, t, i, s)}_2`;
  }
  createFloatDouble(A, t, i, s, u, f, a, E) {
    return `${super.createFloatDouble(A, t, i, s, u, f, a, E)}_3`;
  }
  createByteString(A, t) {
    const i = A.join(", ");
    return t === -1 ? `(_ ${i})` : `h'${i}`;
  }
  createByteStringFromHeap(A, t) {
    return `h'${zr
      .from(super.createByteStringFromHeap(A, t))
      .toString("hex")}'`;
  }
  createInfinity() {
    return "Infinity_1";
  }
  createInfinityNeg() {
    return "-Infinity_1";
  }
  createNaN() {
    return "NaN_1";
  }
  createNaNNeg() {
    return "-NaN_1";
  }
  createNull() {
    return "null";
  }
  createUndefined() {
    return "undefined";
  }
  createSimpleUnassigned(A) {
    return `simple(${A})`;
  }
  createArray(A, t) {
    const i = super.createArray(A, t);
    return t === -1 ? `[_ ${i.join(", ")}]` : `[${i.join(", ")}]`;
  }
  createMap(A, t) {
    const i = super.createMap(A),
      s = Array.from(i.keys()).reduce(Ci(i), "");
    return t === -1 ? `{_ ${s}}` : `{${s}}`;
  }
  createObject(A, t) {
    const i = super.createObject(A),
      s = Object.keys(i).reduce(Ci(i), "");
    return t === -1 ? `{_ ${s}}` : `{${s}}`;
  }
  createUtf8String(A, t) {
    const i = A.join(", ");
    return t === -1 ? `(_ ${i})` : `"${i}"`;
  }
  createUtf8StringFromHeap(A, t) {
    return `"${zr
      .from(super.createUtf8StringFromHeap(A, t))
      .toString("utf8")}"`;
  }
  static diagnose(A, t) {
    return (
      typeof A == "string" && (A = zr.from(A, t || "hex")),
      new Vn().decodeFirst(A)
    );
  }
}
var mc = Vn;
function Ci(e) {
  return (A, t) => (A ? `${A}, ${t}: ${e[t]}` : `${t}: ${e[t]}`);
}
const { Buffer: pt } = ve,
  { URL: Sc } = is,
  bn = Mr.BigNumber,
  $r = Gr,
  KA = ZA,
  ut = KA.MT,
  $e = KA.NUMBYTES,
  di = KA.SHIFT32,
  pi = KA.SYMS,
  ae = KA.TAG,
  bc = (KA.MT.SIMPLE_FLOAT << 5) | KA.NUMBYTES.TWO,
  Dc = (KA.MT.SIMPLE_FLOAT << 5) | KA.NUMBYTES.FOUR,
  xc = (KA.MT.SIMPLE_FLOAT << 5) | KA.NUMBYTES.EIGHT,
  Nc = (KA.MT.SIMPLE_FLOAT << 5) | KA.SIMPLE.TRUE,
  _c = (KA.MT.SIMPLE_FLOAT << 5) | KA.SIMPLE.FALSE,
  Fc = (KA.MT.SIMPLE_FLOAT << 5) | KA.SIMPLE.UNDEFINED,
  wi = (KA.MT.SIMPLE_FLOAT << 5) | KA.SIMPLE.NULL,
  Rc = new bn("0x20000000000000"),
  Tc = pt.from("f97e00", "hex"),
  Uc = pt.from("f9fc00", "hex"),
  Mc = pt.from("f97c00", "hex");
function Gc(e) {
  return {}.toString.call(e).slice(8, -1);
}
class yr {
  constructor(A) {
    (A = A || {}),
      (this.streaming = typeof A.stream == "function"),
      (this.onData = A.stream),
      (this.semanticTypes = [
        [Sc, this._pushUrl],
        [bn, this._pushBigNumber],
      ]);
    const t = A.genTypes || [],
      i = t.length;
    for (let s = 0; s < i; s++) this.addSemanticType(t[s][0], t[s][1]);
    this._reset();
  }
  addSemanticType(A, t) {
    const i = this.semanticTypes.length;
    for (let s = 0; s < i; s++)
      if (this.semanticTypes[s][0] === A) {
        const f = this.semanticTypes[s][1];
        return (this.semanticTypes[s][1] = t), f;
      }
    return this.semanticTypes.push([A, t]), null;
  }
  push(A) {
    return (
      A &&
        ((this.result[this.offset] = A),
        (this.resultMethod[this.offset] = 0),
        (this.resultLength[this.offset] = A.length),
        this.offset++,
        this.streaming && this.onData(this.finalize())),
      !0
    );
  }
  pushWrite(A, t, i) {
    return (
      (this.result[this.offset] = A),
      (this.resultMethod[this.offset] = t),
      (this.resultLength[this.offset] = i),
      this.offset++,
      this.streaming && this.onData(this.finalize()),
      !0
    );
  }
  _pushUInt8(A) {
    return this.pushWrite(A, 1, 1);
  }
  _pushUInt16BE(A) {
    return this.pushWrite(A, 2, 2);
  }
  _pushUInt32BE(A) {
    return this.pushWrite(A, 3, 4);
  }
  _pushDoubleBE(A) {
    return this.pushWrite(A, 4, 8);
  }
  _pushNaN() {
    return this.push(Tc);
  }
  _pushInfinity(A) {
    const t = A < 0 ? Uc : Mc;
    return this.push(t);
  }
  _pushFloat(A) {
    const t = pt.allocUnsafe(2);
    if ($r.writeHalf(t, A) && $r.parseHalf(t) === A)
      return this._pushUInt8(bc) && this.push(t);
    const i = pt.allocUnsafe(4);
    return (
      i.writeFloatBE(A, 0),
      i.readFloatBE(0) === A
        ? this._pushUInt8(Dc) && this.push(i)
        : this._pushUInt8(xc) && this._pushDoubleBE(A)
    );
  }
  _pushInt(A, t, i) {
    const s = t << 5;
    return A < 24
      ? this._pushUInt8(s | A)
      : A <= 255
      ? this._pushUInt8(s | $e.ONE) && this._pushUInt8(A)
      : A <= 65535
      ? this._pushUInt8(s | $e.TWO) && this._pushUInt16BE(A)
      : A <= 4294967295
      ? this._pushUInt8(s | $e.FOUR) && this._pushUInt32BE(A)
      : A <= Number.MAX_SAFE_INTEGER
      ? this._pushUInt8(s | $e.EIGHT) &&
        this._pushUInt32BE(Math.floor(A / di)) &&
        this._pushUInt32BE(A % di)
      : t === ut.NEG_INT
      ? this._pushFloat(i)
      : this._pushFloat(A);
  }
  _pushIntNum(A) {
    return A < 0
      ? this._pushInt(-A - 1, ut.NEG_INT, A)
      : this._pushInt(A, ut.POS_INT);
  }
  _pushNumber(A) {
    switch (!1) {
      case A === A:
        return this._pushNaN(A);
      case isFinite(A):
        return this._pushInfinity(A);
      case A % 1 !== 0:
        return this._pushIntNum(A);
      default:
        return this._pushFloat(A);
    }
  }
  _pushString(A) {
    const t = pt.byteLength(A, "utf8");
    return this._pushInt(t, ut.UTF8_STRING) && this.pushWrite(A, 5, t);
  }
  _pushBoolean(A) {
    return this._pushUInt8(A ? Nc : _c);
  }
  _pushUndefined(A) {
    return this._pushUInt8(Fc);
  }
  _pushArray(A, t) {
    const i = t.length;
    if (!A._pushInt(i, ut.ARRAY)) return !1;
    for (let s = 0; s < i; s++) if (!A.pushAny(t[s])) return !1;
    return !0;
  }
  _pushTag(A) {
    return this._pushInt(A, ut.TAG);
  }
  _pushDate(A, t) {
    return A._pushTag(ae.DATE_EPOCH) && A.pushAny(Math.round(t / 1e3));
  }
  _pushBuffer(A, t) {
    return A._pushInt(t.length, ut.BYTE_STRING) && A.push(t);
  }
  _pushNoFilter(A, t) {
    return A._pushBuffer(A, t.slice());
  }
  _pushRegexp(A, t) {
    return A._pushTag(ae.REGEXP) && A.pushAny(t.source);
  }
  _pushSet(A, t) {
    if (!A._pushInt(t.size, ut.ARRAY)) return !1;
    for (const i of t) if (!A.pushAny(i)) return !1;
    return !0;
  }
  _pushUrl(A, t) {
    return A._pushTag(ae.URI) && A.pushAny(t.format());
  }
  _pushBigint(A) {
    let t = ae.POS_BIGINT;
    A.isNegative() && ((A = A.negated().minus(1)), (t = ae.NEG_BIGINT));
    let i = A.toString(16);
    i.length % 2 && (i = "0" + i);
    const s = pt.from(i, "hex");
    return this._pushTag(t) && this._pushBuffer(this, s);
  }
  _pushBigNumber(A, t) {
    if (t.isNaN()) return A._pushNaN();
    if (!t.isFinite()) return A._pushInfinity(t.isNegative() ? -1 / 0 : 1 / 0);
    if (t.isInteger()) return A._pushBigint(t);
    if (!(A._pushTag(ae.DECIMAL_FRAC) && A._pushInt(2, ut.ARRAY))) return !1;
    const i = t.decimalPlaces(),
      s = t.multipliedBy(new bn(10).pow(i));
    return A._pushIntNum(-i)
      ? s.abs().isLessThan(Rc)
        ? A._pushIntNum(s.toNumber())
        : A._pushBigint(s)
      : !1;
  }
  _pushMap(A, t) {
    return A._pushInt(t.size, ut.MAP)
      ? this._pushRawMap(t.size, Array.from(t))
      : !1;
  }
  _pushObject(A) {
    if (!A) return this._pushUInt8(wi);
    for (var t = this.semanticTypes.length, i = 0; i < t; i++)
      if (A instanceof this.semanticTypes[i][0])
        return this.semanticTypes[i][1].call(A, this, A);
    var s = A.encodeCBOR;
    if (typeof s == "function") return s.call(A, this);
    var u = Object.keys(A),
      f = u.length;
    return this._pushInt(f, ut.MAP)
      ? this._pushRawMap(
          f,
          u.map((a) => [a, A[a]])
        )
      : !1;
  }
  _pushRawMap(A, t) {
    t = t
      .map(function (s) {
        return (s[0] = yr.encode(s[0])), s;
      })
      .sort($r.keySorter);
    for (var i = 0; i < A; i++)
      if (!this.push(t[i][0]) || !this.pushAny(t[i][1])) return !1;
    return !0;
  }
  write(A) {
    return this.pushAny(A);
  }
  pushAny(A) {
    var t = Gc(A);
    switch (t) {
      case "Number":
        return this._pushNumber(A);
      case "String":
        return this._pushString(A);
      case "Boolean":
        return this._pushBoolean(A);
      case "Object":
        return this._pushObject(A);
      case "Array":
        return this._pushArray(this, A);
      case "Uint8Array":
        return this._pushBuffer(this, pt.isBuffer(A) ? A : pt.from(A));
      case "Null":
        return this._pushUInt8(wi);
      case "Undefined":
        return this._pushUndefined(A);
      case "Map":
        return this._pushMap(this, A);
      case "Set":
        return this._pushSet(this, A);
      case "URL":
        return this._pushUrl(this, A);
      case "BigNumber":
        return this._pushBigNumber(this, A);
      case "Date":
        return this._pushDate(this, A);
      case "RegExp":
        return this._pushRegexp(this, A);
      case "Symbol":
        switch (A) {
          case pi.NULL:
            return this._pushObject(null);
          case pi.UNDEFINED:
            return this._pushUndefined(void 0);
          default:
            throw new Error("Unknown symbol: " + A.toString());
        }
      default:
        throw new Error(
          "Unknown type: " + typeof A + ", " + (A ? A.toString() : "")
        );
    }
  }
  finalize() {
    if (this.offset === 0) return null;
    for (
      var A = this.result,
        t = this.resultLength,
        i = this.resultMethod,
        s = this.offset,
        u = 0,
        f = 0;
      f < s;
      f++
    )
      u += t[f];
    var a = pt.allocUnsafe(u),
      E = 0,
      d = 0;
    for (f = 0; f < s; f++) {
      switch (((d = t[f]), i[f])) {
        case 0:
          A[f].copy(a, E);
          break;
        case 1:
          a.writeUInt8(A[f], E, !0);
          break;
        case 2:
          a.writeUInt16BE(A[f], E, !0);
          break;
        case 3:
          a.writeUInt32BE(A[f], E, !0);
          break;
        case 4:
          a.writeDoubleBE(A[f], E, !0);
          break;
        case 5:
          a.write(A[f], E, d, "utf8");
          break;
        default:
          throw new Error("unkown method");
      }
      E += d;
    }
    var m = a;
    return this._reset(), m;
  }
  _reset() {
    (this.result = []),
      (this.resultMethod = []),
      (this.resultLength = []),
      (this.offset = 0);
  }
  static encode(A) {
    const t = new yr();
    if (!t.pushAny(A)) throw new Error("Failed to encode input");
    return t.finalize();
  }
}
var kc = yr;
(function (e) {
  (e.Diagnose = mc),
    (e.Decoder = os),
    (e.Encoder = kc),
    (e.Simple = ts),
    (e.Tagged = es),
    (e.decodeAll = e.Decoder.decodeAll),
    (e.decodeFirst = e.Decoder.decodeFirst),
    (e.diagnose = e.Diagnose.diagnose),
    (e.encode = e.Encoder.encode),
    (e.decode = e.Decoder.decode),
    (e.leveldb = {
      decode: e.Decoder.decodeAll,
      encode: e.Encoder.encode,
      buffer: !0,
      name: "cbor",
    });
})(Xo);
const ss = Ba(Xo);
function ht(...e) {
  const A = new Uint8Array(e.reduce((i, s) => i + s.byteLength, 0));
  let t = 0;
  for (const i of e) A.set(new Uint8Array(i), t), (t += i.byteLength);
  return A.buffer;
}
function it(e) {
  return [...new Uint8Array(e)]
    .map((A) => A.toString(16).padStart(2, "0"))
    .join("");
}
const Lc = new RegExp(/^([0-9A-F]{2})*$/i);
function Vt(e) {
  if (!Lc.test(e)) throw new Error("Invalid hexadecimal string.");
  const A = [...e]
    .reduce((t, i, s) => ((t[(s / 2) | 0] = (t[(s / 2) | 0] || "") + i), t), [])
    .map((t) => Number.parseInt(t, 16));
  return new Uint8Array(A).buffer;
}
function as(e, A) {
  if (e.byteLength !== A.byteLength) return e.byteLength - A.byteLength;
  const t = new Uint8Array(e),
    i = new Uint8Array(A);
  for (let s = 0; s < t.length; s++) if (t[s] !== i[s]) return t[s] - i[s];
  return 0;
}
function vc(e, A) {
  return as(e, A) === 0;
}
function cs(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength).buffer;
}
function It(e) {
  return cs(Ja.create().update(new Uint8Array(e)).digest());
}
function ur(e) {
  if (e instanceof ss.Tagged) return ur(e.value);
  if (typeof e == "string") return gs(e);
  if (typeof e == "number") return It(vA(e));
  if (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) return It(e);
  if (Array.isArray(e)) {
    const A = e.map(ur);
    return It(ht(...A));
  } else {
    if (e && typeof e == "object" && e._isPrincipal)
      return It(e.toUint8Array());
    if (typeof e == "object" && e !== null && typeof e.toHash == "function")
      return ur(e.toHash());
    if (typeof e == "object") return mr(e);
    if (typeof e == "bigint") return It(vA(e));
  }
  throw Object.assign(
    new Error(`Attempt to hash a value of unsupported type: ${e}`),
    { value: e }
  );
}
const gs = (e) => {
  const A = new TextEncoder().encode(e);
  return It(A);
};
function Fe(e) {
  return mr(e);
}
function mr(e) {
  const i = Object.entries(e)
      .filter(([, f]) => f !== void 0)
      .map(([f, a]) => {
        const E = gs(f),
          d = ur(a);
        return [E, d];
      })
      .sort(([f], [a]) => as(f, a)),
    s = ht(...i.map((f) => ht(...f)));
  return It(s);
}
var Hc =
  (globalThis && globalThis.__rest) ||
  function (e, A) {
    var t = {};
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        A.indexOf(i) < 0 &&
        (t[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
        A.indexOf(i[s]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
          (t[i[s]] = e[i[s]]);
    return t;
  };
const Oc = new TextEncoder().encode(`
ic-request`);
class zn {
  getPrincipal() {
    return (
      this._principal ||
        (this._principal = xA.selfAuthenticating(
          new Uint8Array(this.getPublicKey().toDer())
        )),
      this._principal
    );
  }
  async transformRequest(A) {
    const { body: t } = A,
      i = Hc(A, ["body"]),
      s = await Fe(t);
    return Object.assign(Object.assign({}, i), {
      body: {
        content: t,
        sender_pubkey: this.getPublicKey().toDer(),
        sender_sig: await this.sign(ht(Oc, s)),
      },
    });
  }
}
class Sr {
  getPrincipal() {
    return xA.anonymous();
  }
  async transformRequest(A) {
    return Object.assign(Object.assign({}, A), { body: { content: A.body } });
  }
}
var et = {},
  Ce = {},
  MA = {};
Object.defineProperty(MA, "__esModule", { value: !0 });
const Yc = 9007199254740992;
function Tt(e, ...A) {
  const t = new Uint8Array(
    e.byteLength + A.reduce((s, u) => s + u.byteLength, 0)
  );
  t.set(new Uint8Array(e), 0);
  let i = e.byteLength;
  for (const s of A) t.set(new Uint8Array(s), i), (i += s.byteLength);
  return t.buffer;
}
function Et(e, A, t) {
  t = t.replace(/[^0-9a-fA-F]/g, "");
  const i = 2 ** (A - 24);
  t = t.slice(-i * 2).padStart(i * 2, "0");
  const s = [(e << 5) + A].concat(t.match(/../g).map((u) => parseInt(u, 16)));
  return new Uint8Array(s).buffer;
}
function kr(e, A) {
  if (A < 24) return new Uint8Array([(e << 5) + A]).buffer;
  {
    const t = A <= 255 ? 24 : A <= 65535 ? 25 : A <= 4294967295 ? 26 : 27;
    return Et(e, t, A.toString(16));
  }
}
function us(e) {
  const A = [];
  for (let t = 0; t < e.length; t++) {
    let i = e.charCodeAt(t);
    i < 128
      ? A.push(i)
      : i < 2048
      ? A.push(192 | (i >> 6), 128 | (i & 63))
      : i < 55296 || i >= 57344
      ? A.push(224 | (i >> 12), 128 | ((i >> 6) & 63), 128 | (i & 63))
      : (t++,
        (i = ((i & 1023) << 10) | (e.charCodeAt(t) & 1023)),
        A.push(
          240 | (i >> 18),
          128 | ((i >> 12) & 63),
          128 | ((i >> 6) & 63),
          128 | (i & 63)
        ));
  }
  return Tt(new Uint8Array(kr(3, e.length)), new Uint8Array(A));
}
function qc(e, A) {
  if (e == 14277111) return Tt(new Uint8Array([217, 217, 247]), A);
  if (e < 24) return Tt(new Uint8Array([192 + e]), A);
  {
    const t = e <= 255 ? 24 : e <= 65535 ? 25 : e <= 4294967295 ? 26 : 27,
      i = 2 ** (t - 24),
      s = e
        .toString(16)
        .slice(-i * 2)
        .padStart(i * 2, "0"),
      u = [192 + t].concat(s.match(/../g).map((f) => parseInt(f, 16)));
    return new Uint8Array(u).buffer;
  }
}
MA.tagged = qc;
function He(e) {
  return new Uint8Array(e).buffer;
}
MA.raw = He;
function $n(e) {
  if (isNaN(e)) throw new RangeError("Invalid number.");
  e = Math.min(Math.max(0, e), 23);
  const A = [0 + e];
  return new Uint8Array(A).buffer;
}
MA.uSmall = $n;
function fs(e, A) {
  if (((e = parseInt("" + e, A)), isNaN(e)))
    throw new RangeError("Invalid number.");
  return (
    (e = Math.min(Math.max(0, e), 255)), (e = e.toString(16)), Et(0, 24, e)
  );
}
MA.u8 = fs;
function Bs(e, A) {
  if (((e = parseInt("" + e, A)), isNaN(e)))
    throw new RangeError("Invalid number.");
  return (
    (e = Math.min(Math.max(0, e), 65535)), (e = e.toString(16)), Et(0, 25, e)
  );
}
MA.u16 = Bs;
function Is(e, A) {
  if (((e = parseInt("" + e, A)), isNaN(e)))
    throw new RangeError("Invalid number.");
  return (
    (e = Math.min(Math.max(0, e), 4294967295)),
    (e = e.toString(16)),
    Et(0, 26, e)
  );
}
MA.u32 = Is;
function Zn(e, A) {
  if (typeof e == "string" && A == 16) {
    if (e.match(/[^0-9a-fA-F]/)) throw new RangeError("Invalid number.");
    return Et(0, 27, e);
  }
  if (((e = parseInt("" + e, A)), isNaN(e)))
    throw new RangeError("Invalid number.");
  return (e = Math.min(Math.max(0, e), Yc)), (e = e.toString(16)), Et(0, 27, e);
}
MA.u64 = Zn;
function hs(e) {
  if (isNaN(e)) throw new RangeError("Invalid number.");
  if (e === 0) return $n(0);
  e = Math.min(Math.max(0, -e), 24) - 1;
  const A = [32 + e];
  return new Uint8Array(A).buffer;
}
MA.iSmall = hs;
function Es(e, A) {
  if (((e = parseInt("" + e, A)), isNaN(e)))
    throw new RangeError("Invalid number.");
  return (
    (e = Math.min(Math.max(0, -e - 1), 255)), (e = e.toString(16)), Et(1, 24, e)
  );
}
MA.i8 = Es;
function ls(e, A) {
  if (((e = parseInt("" + e, A)), isNaN(e)))
    throw new RangeError("Invalid number.");
  return (
    (e = Math.min(Math.max(0, -e - 1), 65535)),
    (e = e.toString(16)),
    Et(1, 25, e)
  );
}
MA.i16 = ls;
function Qs(e, A) {
  if (((e = parseInt("" + e, A)), isNaN(e)))
    throw new RangeError("Invalid number.");
  return (
    (e = Math.min(Math.max(0, -e - 1), 4294967295)),
    (e = e.toString(16)),
    Et(1, 26, e)
  );
}
MA.i32 = Qs;
function Cs(e, A) {
  if (typeof e == "string" && A == 16) {
    if (
      (e.startsWith("-") ? (e = e.slice(1)) : (e = "0"),
      e.match(/[^0-9a-fA-F]/) || e.length > 16)
    )
      throw new RangeError("Invalid number.");
    let t = !1,
      i = e.split("").reduceRight((s, u) => {
        if (t) return u + s;
        let f = parseInt(u, 16) - 1;
        return f >= 0 ? ((t = !0), f.toString(16) + s) : "f" + s;
      }, "");
    return t ? Et(1, 27, i) : Zn(0);
  }
  if (((e = parseInt("" + e, A)), isNaN(e)))
    throw new RangeError("Invalid number.");
  return (
    (e = Math.min(Math.max(0, -e - 1), 9007199254740992)),
    (e = e.toString(16)),
    Et(1, 27, e)
  );
}
MA.i64 = Cs;
function Jc(e) {
  return e >= 0
    ? e < 24
      ? $n(e)
      : e <= 255
      ? fs(e)
      : e <= 65535
      ? Bs(e)
      : e <= 4294967295
      ? Is(e)
      : Zn(e)
    : e >= -24
    ? hs(e)
    : e >= -255
    ? Es(e)
    : e >= -65535
    ? ls(e)
    : e >= -4294967295
    ? Qs(e)
    : Cs(e);
}
MA.number = Jc;
function Kc(e) {
  return Tt(kr(2, e.byteLength), e);
}
MA.bytes = Kc;
function Pc(e) {
  return us(e);
}
MA.string = Pc;
function Wc(e) {
  return Tt(kr(4, e.length), ...e);
}
MA.array = Wc;
function jc(e, A = !1) {
  e instanceof Map || (e = new Map(Object.entries(e)));
  let t = Array.from(e.entries());
  return (
    A && (t = t.sort(([i], [s]) => i.localeCompare(s))),
    Tt(kr(5, e.size), ...t.map(([i, s]) => Tt(us(i), s)))
  );
}
MA.map = jc;
function Vc(e) {
  const A = new Float32Array([e]);
  return Tt(new Uint8Array([224 + 26]), new Uint8Array(A.buffer));
}
MA.singleFloat = Vc;
function zc(e) {
  const A = new Float64Array([e]);
  return Tt(new Uint8Array([224 + 27]), new Uint8Array(A.buffer));
}
MA.doubleFloat = zc;
function $c(e) {
  return e ? ds() : ps();
}
MA.bool = $c;
function ds() {
  return He(new Uint8Array([224 + 21]));
}
MA.true_ = ds;
function ps() {
  return He(new Uint8Array([224 + 20]));
}
MA.false_ = ps;
function Zc() {
  return He(new Uint8Array([224 + 22]));
}
MA.null_ = Zc;
function Xc() {
  return He(new Uint8Array([224 + 23]));
}
MA.undefined_ = Xc;
var Ag =
  (he && he.__importStar) ||
  function (e) {
    if (e && e.__esModule) return e;
    var A = {};
    if (e != null)
      for (var t in e) Object.hasOwnProperty.call(e, t) && (A[t] = e[t]);
    return (A.default = e), A;
  };
Object.defineProperty(Ce, "__esModule", { value: !0 });
const Bt = Ag(MA),
  tg = [
    ArrayBuffer,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Int8Array,
    Int16Array,
    Int32Array,
    Float32Array,
    Float64Array,
  ];
class ws {
  constructor(A, t = !1) {
    (this._serializer = A),
      (this._stable = t),
      (this.name = "jsonDefault"),
      (this.priority = -100);
  }
  match(A) {
    return (
      ["undefined", "boolean", "number", "string", "object"].indexOf(
        typeof A
      ) != -1
    );
  }
  encode(A) {
    switch (typeof A) {
      case "undefined":
        return Bt.undefined_();
      case "boolean":
        return Bt.bool(A);
      case "number":
        return Math.floor(A) === A ? Bt.number(A) : Bt.doubleFloat(A);
      case "string":
        return Bt.string(A);
      case "object":
        if (A === null) return Bt.null_();
        if (Array.isArray(A))
          return Bt.array(A.map((t) => this._serializer.serializeValue(t)));
        if (tg.find((t) => A instanceof t)) return Bt.bytes(A.buffer);
        if (Object.getOwnPropertyNames(A).indexOf("toJSON") !== -1)
          return this.encode(A.toJSON());
        if (A instanceof Map) {
          const t = new Map();
          for (const [i, s] of A.entries())
            t.set(i, this._serializer.serializeValue(s));
          return Bt.map(t, this._stable);
        } else {
          const t = new Map();
          for (const [i, s] of Object.entries(A))
            t.set(i, this._serializer.serializeValue(s));
          return Bt.map(t, this._stable);
        }
      default:
        throw new Error("Invalid value.");
    }
  }
}
Ce.JsonDefaultCborEncoder = ws;
class ys {
  constructor() {
    (this.name = "cborEncoder"), (this.priority = -90);
  }
  match(A) {
    return typeof A == "object" && typeof A.toCBOR == "function";
  }
  encode(A) {
    return A.toCBOR();
  }
}
Ce.ToCborEncoder = ys;
class ms {
  constructor() {
    this._encoders = new Set();
  }
  static withDefaultEncoders(A = !1) {
    const t = new this();
    return t.addEncoder(new ws(t, A)), t.addEncoder(new ys()), t;
  }
  removeEncoder(A) {
    for (const t of this._encoders.values())
      t.name == A && this._encoders.delete(t);
  }
  addEncoder(A) {
    this._encoders.add(A);
  }
  getEncoderFor(A) {
    let t = null;
    for (const i of this._encoders)
      (!t || i.priority > t.priority) && i.match(A) && (t = i);
    if (t === null) throw new Error("Could not find an encoder for value.");
    return t;
  }
  serializeValue(A) {
    return this.getEncoderFor(A).encode(A);
  }
  serialize(A) {
    return this.serializeValue(A);
  }
}
Ce.CborSerializer = ms;
class eg extends ms {
  serialize(A) {
    return Bt.raw(
      new Uint8Array([
        ...new Uint8Array([217, 217, 247]),
        ...new Uint8Array(super.serializeValue(A)),
      ])
    );
  }
}
Ce.SelfDescribeCborSerializer = eg;
(function (e) {
  function A(s) {
    for (var u in s) e.hasOwnProperty(u) || (e[u] = s[u]);
  }
  var t =
    (he && he.__importStar) ||
    function (s) {
      if (s && s.__esModule) return s;
      var u = {};
      if (s != null)
        for (var f in s) Object.hasOwnProperty.call(s, f) && (u[f] = s[f]);
      return (u.default = s), u;
    };
  Object.defineProperty(e, "__esModule", { value: !0 }), A(Ce);
  const i = t(MA);
  e.value = i;
})(et);
class rg {
  get name() {
    return "Principal";
  }
  get priority() {
    return 0;
  }
  match(A) {
    return A && A._isPrincipal === !0;
  }
  encode(A) {
    return et.value.bytes(A.toUint8Array());
  }
}
class ng {
  get name() {
    return "Buffer";
  }
  get priority() {
    return 1;
  }
  match(A) {
    return A instanceof ArrayBuffer || ArrayBuffer.isView(A);
  }
  encode(A) {
    return et.value.bytes(new Uint8Array(A));
  }
}
class ig {
  get name() {
    return "BigInt";
  }
  get priority() {
    return 1;
  }
  match(A) {
    return typeof A == "bigint";
  }
  encode(A) {
    return A > BigInt(0)
      ? et.value.tagged(2, et.value.bytes(Vt(A.toString(16))))
      : et.value.tagged(3, et.value.bytes(Vt((BigInt("-1") * A).toString(16))));
  }
}
const Lr = et.SelfDescribeCborSerializer.withDefaultEncoders(!0);
Lr.addEncoder(new rg());
Lr.addEncoder(new ng());
Lr.addEncoder(new ig());
var Dn;
(function (e) {
  (e[(e.Uint64LittleEndian = 71)] = "Uint64LittleEndian"),
    (e[(e.Semantic = 55799)] = "Semantic");
})(Dn || (Dn = {}));
function Zr(e) {
  return Lr.serialize(e);
}
function yi(e) {
  const A = e.byteLength;
  let t = BigInt(0);
  for (let i = 0; i < A; i++) t = t * BigInt(256) + BigInt(e[i]);
  return t;
}
class og extends ss.Decoder {
  createByteString(A) {
    return ht(...A);
  }
  createByteStringFromHeap(A, t) {
    return A === t
      ? new ArrayBuffer(0)
      : new Uint8Array(this._heap.slice(A, t));
  }
}
function Pt(e) {
  const A = new Uint8Array(e);
  return new og({
    size: A.byteLength,
    tags: { 2: (i) => yi(i), 3: (i) => -yi(i), [Dn.Semantic]: (i) => i },
  }).decodeFirst(A);
}
const Ze = () => {
  if (typeof window < "u" && window.crypto && window.crypto.getRandomValues) {
    const e = new Uint32Array(1);
    return window.crypto.getRandomValues(e), e[0];
  }
  if (typeof crypto < "u" && crypto.getRandomValues) {
    const e = new Uint32Array(1);
    return crypto.getRandomValues(e), e[0];
  }
  return typeof crypto < "u" && crypto.randomInt
    ? crypto.randomInt(0, 4294967295)
    : Math.floor(Math.random() * 4294967295);
};
var xn;
(function (e) {
  e.Call = "call";
})(xn || (xn = {}));
function Nn() {
  const e = new ArrayBuffer(16),
    A = new DataView(e),
    t = Ze(),
    i = Ze(),
    s = Ze(),
    u = Ze();
  return (
    A.setUint32(0, t),
    A.setUint32(4, i),
    A.setUint32(8, s),
    A.setUint32(12, u),
    e
  );
}
const sg = BigInt(1e6),
  ag = 60 * 1e3;
class Xe {
  constructor(A) {
    const u =
      ((BigInt(Math.floor(Date.now() + A - ag)) * sg) /
        BigInt(1e9) /
        BigInt(60)) *
      BigInt(60) *
      BigInt(1e9);
    this._value = u;
  }
  toCBOR() {
    return et.value.u64(this._value.toString(16), 16);
  }
  toHash() {
    return vA(this._value);
  }
}
function mi(e = Nn) {
  return async (A) => {
    const t = A.request.headers;
    (A.request.headers = t), A.endpoint === "call" && (A.body.nonce = e());
  };
}
function Xr(e) {
  const A = [];
  return (
    e.forEach((t, i) => {
      A.push([i, t]);
    }),
    A
  );
}
class cg extends Error {
  constructor(A, t) {
    super(A),
      (this.response = t),
      (this.name = this.constructor.name),
      Object.setPrototypeOf(this, new.target.prototype);
  }
}
var Ss;
(function () {
  for (
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      A = new Uint8Array(256),
      t = 0;
    t < e.length;
    t++
  )
    A[e.charCodeAt(t)] = t;
  Ss = function (i) {
    var s = i.length * 0.75,
      u = i.length,
      f,
      a = 0,
      E,
      d,
      m,
      N;
    i[i.length - 1] === "=" && (s--, i[i.length - 2] === "=" && s--);
    var k = new ArrayBuffer(s),
      _ = new Uint8Array(k);
    for (f = 0; f < u; f += 4)
      (E = A[i.charCodeAt(f)]),
        (d = A[i.charCodeAt(f + 1)]),
        (m = A[i.charCodeAt(f + 2)]),
        (N = A[i.charCodeAt(f + 3)]),
        (_[a++] = (E << 2) | (d >> 4)),
        (_[a++] = ((d & 15) << 4) | (m >> 2)),
        (_[a++] = ((m & 3) << 6) | (N & 63));
    return k;
  };
})();
const gg =
  "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akE4ENABGiACQbgDakEBNgIAIAJBwANqQTgQ0AEaIAJB+ANqQQE2AgAgAkGABGpBOBDQARogAkEBNgK4BCACQcAEakE4ENABGiACQfgEakEBNgIAIAJBgAVqQTgQ0AEaIAJBuAVqQQE2AgAgAkHABWpBOBDQARogAkH4BWpBATYCACACQYAGakE4ENABGiACQQE2ArgGIAJBwAZqQTgQ0AEaIAJB+AZqQQE2AgAgAkGAB2pBOBDQARogAkG4B2pBATYCACACQcAHakE4ENABGiACQfgHakEBNgIAIAIgARAYAkAgASgCgAZBBEYNACAAKAKABkEERg0AIAJBgARqIgMgAEGAAmoQlgEgAyABQYACahAYDAYLIAJBwAxqIgdBOBDQARogAkEBNgL4DCACQYANakE4ENABGiACQbgNakEBNgIAIAJBgAhqIgRBOBDQARogAkEBNgK4CCACQcAIakE4ENABGiACQfgIakEBNgIAIAJBgApqIgMgAEGAA2oiBRBeIAQgAxCZASADIAFBgANqIgYQXiAEIAMQESAHELYBIAEoAoAGQQRHDQMMBAsgACABEAMMBgsgAkHADGoiAyABQYAFahBeIAJBgAxqIgQgA0HAABDRARogAkGABmogBBCnAQsgAkGABmoQZCACQYAIaiIDIAIQlgEgAxArIAJBgAJqIgQgAxCXASAGIAQQlgEgAkGABGoiByADEJYBIAMgABCWASADIAUQlwEgAxCwASACQYAKaiIEIAEQlgEgBCABQYAEahCXASAEELABIAMgBBAYIAcgAxCXASADIAUQlgECQCABKAKABkECRwRAIAJBwAxqIgMgAUGABWoQXiACQYAIaiADEKYBDAELIAJBwAxqIgMgAUGABWoQXiACQYAMaiIBIANBwAAQ0QEaIAJBgAhqIAEQpwELIAJBgAhqIgEQZCACQYAKaiIDIAEQlgEgAxArIAUgAkGABGoQlgEgBSADEJcBIAJBgAZqIgQgAxCXASABEGQgBiABEJcBIAQQsAEgBBBkIAAgAhCWASAAIAQQlwEMAwsgAkGACmoiAyAFEF4gAkHADGoiBCADEJkBIAMgAUGAAmoQXiAEIAMQEQsgACgCgAZBBEcEQCACQYAKaiIDIABBgAJqEF4gAkHADGoiBCADEJkBIAMgBhBeIAQgAxARCyACQYAEaiIDIAJB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AEHcu8AAKAIAQX4gA0EDdndxNgIACyAAIAEQoAEgAEH0vsAAKAIARw0BQey+wAAgATYCAAsPCyABQYACTwRAIAAgARAWDwsgAUEDdiICQQN0QeS7wABqIQECf0Hcu8AAKAIAIgNBASACdCICcQRAIAEoAggMAQtB3LvAACACIANyNgIAIAELIQIgASAANgIIIAIgADYCDCAAIAE2AgwgACACNgIIC+UDAQN/IwBB0CJrIgMkACADQcAWaiIEQcitwAAQSSADQcgcaiIFQYCuwAAQSSADQQhqIAQgBRBLIANBiAFqQTgQ0AEaIANBwAFqQTgQ0AEaIANB+AFqED0CQCACEIYBBEAgABBVDAELIANB+ARqIgQQPSAEIAEQfSAEEEcgA0H4B2oiARBnIAEgAhB4IAEQRiADQcgcaiICIAEQkAEgA0G4CWogAhCQASACIANBuAhqEJABIANB+AlqIAIQkAEgA0G4CmoiARA9IANBuA1qEFUgASAEEH0gA0HAE2oiARA9IAEgBBB9IAEQogEgA0HAAWogA0GIAWoQUEECayECA0AgAkEBakEBTQRAIANBuA1qIgEQngEgACABQYgGENEBGgUgA0G4DWoQGiADQcAWaiADQbgKaiADQbgJaiADQfgJahALAkACQAJAIANBwAFqIAIQUyADQYgBaiACEFNrQQFqDgMBAgACCyADQcgcaiIBIANBuApqIANB+ARqIANBuAlqIANB+AlqEAogA0HAFmogARADDAELIANByBxqIgEgA0G4CmogA0HAE2ogA0G4CWogA0H4CWoQCiADQcAWaiABEAMLIAJBAWshAiADQbgNaiADQcAWahABDAELCwsgA0HQImokAAvBAwEVfwNAIANBwAFGBEACQCAAQShqIQsgAEEUaigCACIMIQggAEEQaigCACINIQIgAEEMaigCACIOIQEgACgCCCIPIQMgAEEYaigCACIQIQogAEEcaigCACIRIQQgAEEgaigCACISIQcgAEEkaigCACITIQYDQCAHIQkgBCEHIAohBCAFQYACRg0BIAEgAnEhFCABIAJzIRUgBSALaigCACAFQcCiwABqKAIAIAkgBEF/c3EgBCAHcXIgBmogBEEadyAEQRV3cyAEQQd3c2pqaiIGIAhqIQogBUEEaiEFIAIhCCABIQIgAyIBQR53IAFBE3dzIAFBCndzIBQgASAVcXNqIAZqIQMgCSEGDAALAAsFIAAgA2oiAkHoAGogAkEoaigCACACQcwAaigCACACQeAAaigCACIBQQ93IAFBDXdzIAFBCnZzamogAkEsaigCACIBQRl3IAFBDndzIAFBA3ZzajYCACADQQRqIQMMAQsLIAAgBiATajYCJCAAIAkgEmo2AiAgACAHIBFqNgIcIAAgBCAQajYCGCAAIAggDGo2AhQgACACIA1qNgIQIAAgASAOajYCDCAAIAMgD2o2AggL5AEBAn8jAEGAA2siAyQAIAMQPSAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbyAAIAFBgANqIAJBAXNBAWtBH3YQbyAAIAFBgAZqIAJBAnNBAWtBH3YQbyAAIAFBgAlqIAJBA3NBAWtBH3YQbyAAIAFBgAxqIAJBBHNBAWtBH3YQbyAAIAFBgA9qIAJBBXNBAWtBH3YQbyAAIAFBgBJqIAJBBnNBAWtBH3YQbyAAIAFBgBVqIAJBB3NBAWtBH3YQbyADIAAQfSADEKIBIAAgAyAEQQFxEG8gA0GAA2okAAvlAwEIfyMAQZAGayICJAAgAEFAayEIAkAgAUH4AGooAgAgASgCOGqsIABB+ABqKAIAIgcgACgCOCIEaqx+Qv///w9XDQAgBEEBSgR/IAAQHiAAKAJ4BSAHC0EBTA0AIAgQHgsgAkHYpMAAEEkgAkE4aiIHQfAAENABGiACIQNBACECA0AgAkE4RgRAAkAgB0E4aiEEQQAhAgNAIAJBOEYNASACIARqIAIgA2opAwA3AwAgAkEIaiECDAALAAsFIAIgB2pCADcDACACQQhqIQIMAQsLIANBqAFqIgYgABBdIANB4AFqIgUgARBdIANBmAJqIgIgACABEAUgA0GIA2oiBCAIIAFBQGsiARAFIAYgCBBgIAYQQiAFIAEQYCAFEEIgA0H4A2oiCSAGIAUQBUEAIQEgA0HoBGoiBkHwABDQASEFA0AgAUHwAEcEQCABIAVqIAEgAmopAwA3AwAgAUEIaiEBDAELCyAGIAQQYkEAIQEDQCABQfAARwRAIAEgBGoiBSABIAdqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAiAEEGIgAhBIIAkgBhBjIAkQSCADQdgFaiIBIAIQayAAIAEQaiAAQQM2AjggASAJEGsgCCABEGogAEECNgJ4IANBkAZqJAALowIBCH8jAEGABmsiAiQAIAIgAEGAAWoiBxBeIAJBgAFqIgQgBxBeIAQQLSACQYACaiIFIAIQXiAFIABBgAJqIgMQESACQYADaiIBIAMQXiABEC0gAyAEEJkBIAMgBBCaASADEKkBIAMQuAEgAxC4ASADEKkBIAFBDBCrASABEHwgARCpASACQYAEaiIIIAEQXiAIIAMQESACQYAFaiIGIAQQXiAGIAEQmgEgBhCpASADIAUQESAFIAEQmQEgBSABEJoBIAEgBRCaASABEKkBIAQgARB7IAQQqQEgBiAEEBEgBiAIEJoBIAUgABCZASAFIAIQESAAIAQQmQEgABCpASAAIAUQESAAELgBIAAQqQEgByAGEJkBIAcQqQEgAkGABmokAAu8AgEGfyMAQYAIayIBJAAgASAAEIwBIAFBgAJqIgMgAEGABGoiBRCMASABQYAEaiIEIABBgAJqIgYQjAEgAUGABmoiAkE4ENABGiABQQE2ArgGIAFBwAZqQTgQ0AEaIAFB+AZqQQE2AgAgAUGAB2pBOBDQARogAUG4B2pBATYCACABQcAHakE4ENABGiABQfgHakEBNgIAIAAQISACIAAQlgEgAiAAEJcBIAAgAhCXASAAELABIAEQyQEgARCzASAAIAEQlwEgAxAhIAMQZCACIAMQlgEgAiADEJcBIAMgAhCXASADELABIAQQISACIAQQlgEgAiAEEJcBIAQgAhCXASAEELABIAYQsgEgBhCzASAFEMkBIAUQswEgBiADEJcBIAUgBBCXASAAQQU2AoAGIAAQnAEgAUGACGokAAv/AQEHfyMAQcACayIBJAAgASAAQUBrIgYQkAEgARBMIAFBQGsiAyAGEJABIAMgAEGAAWoiAhBKIAFBgAFqIgQgAhCQASAEEEwgAiABEK4BIAIgARB3IAIQQiACEIIBIAIQggEgAhBCIARBDBA0IAFBwAFqIgcgBBCQASAHIAIQSiABQYACaiIFIAEQkAEgBSAEEHcgBRBCIAIgAxBKIAMgBBCuASADIAQQdyAEIAMQdyABIAQQfiABEEIgBSABEEogBSAHEHcgAyAAEK4BIAMgBhBKIAAgARCuASAAEEIgACADEEogABCCASAAEEIgBiAFEK4BIAYQQiABQcACaiQAC84CAgd/An4CQAJAAkBBDSABQTpuIgJrIgRBDU0EQEEMIAJrIgNBDk8NASAAIAAgA0EDdGopAwBBOiABIAJBOmxrIgNrrSIKhyAAIARBA3RqKQMAIAOtIgmGhDcDaCAEQQ1rIQUgAEHgAGohBCACQQFqIQZBACACQQN0ayEHQQshAwNAAkAgA0ECaiAGTQRAIAFBrAZPDQEgACACQQN0aiAAKQMAIAmGQv//////////A4M3AwADQCACRQ0HIABCADcDACACQQFrIQIgAEEIaiEADAALAAsgAyAFakEOTw0EIAQgBCAHaiIIQQhrKQMAIAqHIAgpAwAgCYZC//////////8Dg4Q3AwAgA0EBayEDIARBCGshBAwBCwsgAkEOQYCywAAQOwALIARBDkHQscAAEDsACyADQQ5B4LHAABA7AAtBf0EOQfCxwAAQOwALC6cCAQR/IABCADcCECAAAn9BACABQYACSQ0AGkEfIAFB////B0sNABogAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+agsiBDYCHCAEQQJ0Qey9wABqIQMgACECAkACQAJAAkBB4LvAACgCACIAQQEgBHQiBXEEQCADKAIAIQMgBBCfASEAIAMQywEgAUcNASADIQAMAgtB4LvAACAAIAVyNgIAIAMgAjYCAAwDCyABIAB0IQQDQCADIARBHXZBBHFqQRBqIgUoAgAiAEUNAiAEQQF0IQQgACIDEMsBIAFHDQALCyAAKAIIIgEgAjYCDCAAIAI2AgggAiAANgIMIAIgATYCCCACQQA2AhgPCyAFIAI2AgALIAIgAzYCGCACIAI2AgggAiACNgIMC7YCAQV/IAAoAhghBAJAAkAgACAAKAIMRgRAIABBFEEQIABBFGoiASgCACIDG2ooAgAiAg0BQQAhAQwCCyAAKAIIIgIgACgCDCIBNgIMIAEgAjYCCAwBCyABIABBEGogAxshAwNAIAMhBSACIgFBFGoiAygCACICRQRAIAFBEGohAyABKAIQIQILIAINAAsgBUEANgIACwJAIARFDQACQCAAIAAoAhxBAnRB7L3AAGoiAigCAEcEQCAEQRBBFCAEKAIQIABGG2ogATYCACABDQEMAgsgAiABNgIAIAENAEHgu8AAQeC7wAAoAgBBfiAAKAIcd3E2AgAPCyABIAQ2AhggACgCECICBEAgASACNgIQIAIgATYCGAsgAEEUaigCACIARQ0AIAFBFGogADYCACAAIAE2AhgLC+UBAQZ/IwBBgARrIgIkACACIAAQXiACQYABaiIFIABBgAFqIgYQXiACQYACaiIDQTgQ0AEaIAJBATYCuAIgAkHAAmpBOBDQARogAkH4AmpBATYCACACQYADaiIEIAYQXiACIAEQESAFIAFBgAFqIgcQESADIAcQmQEgAyABEJoBIAQgABCaASADEKkBIAQQqQEgBCADEBEgAyACEJkBIAMQNiAEIAMQmgEgBBCpASADIAUQmQEgAxA2IAYgBBCZASAGIAMQmgEgBRB8IAAgBRCZASAAIAIQmgEgABCwASACQYAEaiQAC28BDH9BjL/AACgCACICRQRAQZy/wABB/x82AgBBAA8LQYS/wAAhBgNAIAIiASgCCCECIAEoAgQhAyABKAIAIQQgAUEMaigCABogASEGIAVBAWohBSACDQALQZy/wAAgBUH/HyAFQf8fSxs2AgBBAAuAAgEGfyMAQYAIayIBJAAgACgCgAZBAUcEQCABIAAQjAEgAUGAAmoiAiAAQYACaiIEEIwBIAFBgARqIgUgAEGABGoiAxCMASABQYAGaiIGIAAQjAEgARAhIAIgAxAYIAIQswEgAhCwASAFECEgBiAEEBggBhCzASADIAAQlwEgAyAEEJcBIAMQsAEgAxAhIAAgARCWASABIAIQlwEgARCwASABIAUQlwEgASAGEJcBIAEQsAEgARArIAIQZCAFEGQgACACEJcBIAQgBRCWASAEIAYQlwEgAyABEJcBIABBBEEFIAAoAoAGQX5xQQJGGzYCgAYgABCdAQsgAUGACGokAAuZAgEBfyMAQYANayIDJAAgAyABEGkgAxCdASADQYgGaiIBIAIQXSABEEIgA0HABmoiAiABEF0gAkEDECkaIAIQQiADQfgGaiADEGkCQCACEFdFBEAgA0HABmoQKkECayECA0AgAkEBakEBTQRAIANB+AZqIgEQnAEMAwUgA0H4BmoQEwJAAkACQCADQcAGaiACEFMgA0GIBmogAhBTa0EBag4DAQIAAgsgA0H4BmogAxAHDAELIAMQngEgA0H4BmogAxAHIAMQngELIAJBAWshAgwBCwALAAsgA0H4BmoiARC3ASABQYABahC2ASABQYACahCxASABQYAEahCxASABQQE2AoAGCyAAIAFBiAYQ0QEaIANBgA1qJAALhgICBH8BfiMAQTBrIgIkACABQQRqIQQgASgCBEUEQCABKAIAIQMgAkEQaiIFQQA2AgAgAkIBNwMIIAIgAkEIajYCFCACQShqIANBEGopAgA3AwAgAkEgaiADQQhqKQIANwMAIAIgAykCADcDGCACQRRqIAJBGGoQDBogBEEIaiAFKAIANgIAIAQgAikDCDcCAAsgAkEgaiIDIARBCGooAgA2AgAgAUEMakEANgIAIAQpAgAhBiABQgE3AgQgAiAGNwMYQQxBBBC5ASIBRQRAQQxBBBDPAQALIAEgAikDGDcCACABQQhqIAMoAgA2AgAgAEGEt8AANgIEIAAgATYCACACQTBqJAAL5AEBAn8jAEHAAWsiAyQAIAMQZyAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbiAAIAFBwAFqIAJBAXNBAWtBH3YQbiAAIAFBgANqIAJBAnNBAWtBH3YQbiAAIAFBwARqIAJBA3NBAWtBH3YQbiAAIAFBgAZqIAJBBHNBAWtBH3YQbiAAIAFBwAdqIAJBBXNBAWtBH3YQbiAAIAFBgAlqIAJBBnNBAWtBH3YQbiAAIAFBwApqIAJBB3NBAWtBH3YQbiADIAAQeCADEKQBIAAgAyAEQQFxEG4gA0HAAWokAAvDAwIGfwN+IwBB8ABrIgEkACABQcCywAAQSSABQThqIAEQXSAAEEICQAJAAkAgAQJ/IAAoAjgiAkEQTARAIAJBAWsQNQwBCyABKQMwIghCAXwiByAIVA0BIAApAzAiCEKAgICAgICAgIB/USAHQn9RcQ0CIAFBOGoiAiAIIAd/pxApIQcgASABKQNoIAdCOoZ8NwNoIAAgAhBhIAAQQkECCyIEECgDQCAERQ0DQQAhAyABIAEpAwgiCEI5hkKAgICAgICAgAKDIAEpAwBCAYeEIgc3AwAgACkDACAHfSEHIABBCGohBSAAIAFBOGoiAkEBA38gAiADaiAHQv//////////A4M3AwAgB0I6hyEHIANBKEYEfyABIAEpAzBCAYciCDcDMCACIAApAzAgCH0gB3wiBzcDMCAHQj+IpwUgASADaiIGQQhqIAhCAYcgBkEQaikDACIIQjmGQoCAgICAgICAAoOEIgk3AwAgAyAFaikDACAHfCAJfSEHIANBCGohAwwBCwtrEDAgBEEBayEEDAALAAtB4LPAAEEZQcSzwAAQWQALQYC0wABBH0HEs8AAEFkACyAAQQE2AjggAUHwAGokAAvuAQECfyMAQbABayIDJAAgA0EwENABIQMCQAJAA0AgAkEwRgRAIANBMGogAxBwIAFBMGohAUEAIQIDQCACQTBGDQMgAkEwRg0EIAIgA2ogASACai0AADoAACACQQFqIQIMAAsACyACQeAARwRAIAIgA2ogASACai0AADoAACACQQFqIQIMAQsLQeAAQeAAQYCmwAAQOwALIANB8ABqIgEgAxBwIABBOBDQASIAQQE2AjggAEFAa0E4ENABIABB+ABqQQE2AgAgACABEK4BIANBMGoQrgEgA0GwAWokAA8LIAJBMGpB4ABBkKbAABA7AAuPAgEDfyMAQSBrIgUkAEEBIQZB2LvAAEHYu8AAKAIAIgdBAWo2AgACQEGgv8AALQAABEBBpL/AACgCAEEBaiEGDAELQaC/wABBAToAAAtBpL/AACAGNgIAAkACQCAHQQBIIAZBAktyDQAgBSAEOgAYIAUgAzYCFCAFIAI2AhBBzLvAACgCACICQQBIDQBBzLvAACACQQFqIgI2AgBBzLvAAEHUu8AAKAIAIgMEf0HQu8AAKAIAIAUgACABKAIQEQAAIAUgBSkDADcDCCAFQQhqIAMoAhQRAABBzLvAACgCAAUgAgtBAWs2AgAgBkEBSw0AIAQNAQsACyMAQRBrIgIkACACIAE2AgwgAiAANgIIAAucAQEEfyMAQYADayICJAAgAiAAEF4gAkGAAWoiASAAQYABaiIEEF4gAkGAAmoiAyAAEF4gAyAEEBEgAiAEEJoBIAEQfCABIAAQmgEgAhCpASABEKkBIAAgAhCZASAAIAEQESABIAMQmQEgARB8IAEgAxCaASABEKkBIAEQNiAAIAEQmgEgAxC4ASAEIAMQmQEgABCwASACQYADaiQAC7kBAQJ/IwBBIGsiAyQAAkAgASABIAJqIgFLDQAgAEEEaigCACICQQF0IgQgASABIARJGyIBQQggAUEISxshAQJAIAIEQCADQRhqQQE2AgAgAyACNgIUIAMgACgCADYCEAwBCyADQQA2AhALIAMgASADQRBqECYgAygCAARAIANBCGooAgAiAEUNASADKAIEIAAQzwEACyADKAIEIQIgAEEEaiABNgIAIAAgAjYCACADQSBqJAAPCxBlAAusAQECfyMAQYADayIDJAAgA0EIaiABEJABAkAgAgRAIANBCGogAhCuAQwBCyADQQhqEDoLIANByABqIgJB8LTAABBJIANBgAFqIAIQjgEgA0HAAWoiAiADQQhqIgQQkAEgAhBMIAIgARBKIAAgARCQASAAIAQQSiADQYACaiACEJABIAAQViEBIANBwAJqIgIgABCQASACEEMgAhBCIAAgAiABEHIgA0GAA2okAAueAQEFfyMAQYABayICJAAgAkE4ENABIgJBATYCOCACQUBrIgNBOBDQARogAkEBNgJ4IAIgABCuASACIAFBgAFqIgUQSiADIAEQrgEgAyAAQYABaiIGEEoCQCACIAMQWEUNACACIABBQGsQrgEgAiAFEEogAkFAayIAIAFBQGsQrgEgACAGEEogAiAAEFhFDQBBASEECyACQYABaiQAIAQLpwEBA38jAEEwayICJAAgAUEEaiEDIAEoAgRFBEAgASgCACEBIAJBEGoiBEEANgIAIAJCATcDCCACIAJBCGo2AhQgAkEoaiABQRBqKQIANwMAIAJBIGogAUEIaikCADcDACACIAEpAgA3AxggAkEUaiACQRhqEAwaIANBCGogBCgCADYCACADIAIpAwg3AgALIABBhLfAADYCBCAAIAM2AgAgAkEwaiQAC5UBAQJ/AkACQAJAAkACfwJAAkACf0EBIgMgAUEASA0AGiACKAIAIgRFDQEgAigCBCICDQQgAQ0CQQEMAwshA0EAIQEMBgsgAQ0AQQEMAQsgAUEBELkBCyICRQ0BDAILIAQgARCsASICDQELIAAgATYCBEEBIQEMAQsgACACNgIEQQAhAwsgACADNgIAIABBCGogATYCAAvvMwISfwV+IwBBMGsiDiQAIA5BEGogACABEFsgDiAOKAIUIgA2AhwgDiAOKAIQIgg2AhggDkEIaiACIAMQWyAOIA4oAgwiATYCJCAOIA4oAggiAzYCICAOIAQgBRBbIA4gDigCBCIFNgIsIA4gDigCACINNgIoIAAhBCMAQZAVayICJAAjAEGwBmsiCiQAIApBEGpBOBDQARogCkHQAGpBOBDQASEVIApBiAFqQQE2AgAgCkEBNgJIIApBkAFqIgBB2KTAABBJIAAQKiEPIApByAFqIhNBgAIQ0AEaIApB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ABBJAkACQAJAAkADQAJAIAxBMEYEQCAAIAAtAABBH3E6AAAgAEHoAGogABC+ASAEDQFBAEEAQZiBwAAQOwALIAQgDEYNAiAAIAxqIAggDGotAAA6AAAgDEEBaiEMDAELC0EAIQwgCCwAACIJQQBIDQIgCEEwaiEDIARBMCAEQTBLG0EwayEIA0AgDEEwRgRAIABBoAFqIgQgABC+ASMAQYABayIDJAAgARBnIAEgAEHoAGoQwAEgAUFAayIIIAQQwAEgAUGAAWoQygEgARBCIAMgARBPIANBQGsiBCAIEJABIAQQTCAEIAMQWEUEQCABEJIBCyADQYABaiQADAULIAggDEYNAiAAIAxqIAMgDGotAAA6AAAgDEEBaiEMDAALAAsgBCAEQYiBwAAQOwALIAxBMGogBEGogcAAEDsACyMAQcABayIDJAAgAEGgAWoiBBBnIANBOBDQASIDQQE2AjggBCAAQegAahDAASAEEEIgBEGAAWoQygEgA0FAayIIIAQQTwJAAkACQCAIIAMQWkEBRgRAIANBgAFqIgggA0FAayADECMgCBBWDQEMAgsgBBCSAQwCCyADQYABaiIIEEMgCBBCCyAEQUBrIANBgAFqEK4BCyADQcABaiQAIAlBIHEiA0EAIABB4AFqEE0iBEEBRxtBASADIARBAUdyGwRAIABBoAFqEKQBCyABIABBoAFqQcABENEBGgsgAEHgAmokAAJ/QQAhAyMAQcAFayIAJAACQCABEIYBDQAgAEEIaiIIQZCtwAAQSSAAQYAEaiIEQbiuwAAQSSAAQUBrIgkgBBCOASAAQYABaiIEEGcgBCABEHggBCAJEEogAEHAAmoiBCABIAgQvQEgASAEECQNACAAQYAEaiIEIABBwAJqIgEgAEEIahC9ASABIARBwAEQ0QEaIAEQpAEgAEGAAWogARAkRQ0AQQEhAwsgAEHABWokAEF/IANFDQAaIAJBwAFqEKQBIAJBgANqIQhBACEAIwBB4ARrIgEkACABQeAAENABIQECQCAFBEADQCAAQeAARgRAIAEgAS0AAEEfcToAACABQeAAaiABEB9BACEAAkAgDSwAACILQQBOBEAgDUHgAGohAyAFQeAAIAVB4ABLG0HgAGshBANAIABB4ABGBEAgAUHgAWoiACABEB8gCCABQeAAaiAAED8MAwsgACAERwRA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AWoQmQEgACAEEBEgAEGAAWoiASAFQYABahCZASABIAgQESAAIAEQeg0BC0EADAELQQELIQEgAEGAAmokACANQcAHaiQAQX8gAUUNABojAEHgA2siACQAIABBgAFqIgFBwKjAABBJIABBuAFqIgNB+KjAABBJIAAgASADEEsgAEHwAmoiAUGwqcAAEEkgAEGoA2oiA0HoqcAAEEkgAEHwAWoiBCABIAMQSyACQYAGaiIBIAAgBBA/IABB4ANqJAAgAkGACWohByACQYADaiEIIwBBkDRrIgAkACAAQYAoaiIDQcitwAAQSSAAQYguaiIEQYCuwAAQSSAAIAMgBBBLIABBgAFqQTgQ0AEaIABBuAFqQTgQ0AEaIABB8AFqED0CQCACQcABaiIEEIYBRQRAIAIQhgEEQCAHIAEgBBAODAILIABB8ARqIgMQPSADIAEQfSADEEcgAEHwB2oiBRBnIAUgBBB4IAUQRiAAQbAJaiIEED0gBCAIEH0gBBBHIABBsAxqIggQZyAIIAIQeCAIEEYgAEGILmoiASAFEJABIABB8A1qIAEQkAEgASAAQbAIahCQASAAQbAOaiABEJABIAEgCBCQASAAQfAOaiABEJABIAEgAEHwDGoQkAEgAEGwD2ogARCQASAAQfAPaiIBED0gAEHwEmoiBRA9IABB8BVqEFUgASADEH0gBSAEEH0gAEH4G2oiARA9IAEgAxB9IAEQogEgAEH4HmoiARA9IAEgBBB9IAEQogEgAEG4AWogAEGAAWoQUEECayEBA0AgAUEBakEBTQRAIABB8BVqIgEQngEgByABQYgGENEBGgwDBSAAQfAVaiIEEBogAEH4IWoiAyAAQfAPaiAAQfANaiAAQbAOahALIABBgChqIgUgAEHwEmogAEHwDmogAEGwD2oQCyADIAUQAyAEIAMQAQJAAkACQCAAQbgBaiABEFMgAEGAAWogARBTa0EBag4DAQIAAgsgAEGILmoiAyAAQfAPaiAAQfAEaiAAQfANaiAAQbAOahAKIABB+CFqIgQgA0GIBhDRARogAyAAQfASaiAAQbAJaiAAQfAOaiAAQbAPahAKIAQgAxADIABB8BVqIAQQAQwBCyAAQYguaiIDIABB8A9qIABB+BtqIABB8A1qIABBsA5qEAogAEH4IWoiBCADQYgGENEBGiADIABB8BJqIABB+B5qIABB8A5qIABBsA9qEAogBCADEAMgAEHwFWogBBABCyABQQFrIQEMAQsACwALIAcgCCACEA4LIABBkDRqJAAjAEHgH2siCCQAIAhB0BNqIgFByK3AABBJIAhB2BlqIg1BgK7AABBJIAggASANEEsgCEGAAWoiC0GQrcAAEEkgAkGID2oiACAHEGkgCEG4AWoiBSAAEGkjAEGACGsiAyQAIAMgBRCMASADQYACaiIJIAVBgAJqIg8QjAEgA0GABGoiCiAFEIwBIANBgAZqIgRBOBDQARogA0EBNgK4BiADQcAGakE4ENABGiADQfgGakEBNgIAIANBgAdqQTgQ0AEaIANBuAdqQQE2AgAgA0HAB2pBOBDQARogA0H4B2pBATYCACAFEJ0BIAMQISAJIAVBgARqIgwQGCAJEGQgAyAJEHkgAxCwASAJIAwQlgEgCRAhIAkQZCAKIA8QGCAJIAoQeSAJELABIAogDxCWASAKECEgBCAFEJYBIAQgDBAYIAogBBB5IAoQsAEgBCAPEJYBIAQgChAYIAQQZCAFIAMQGCAEIAUQlwEgDCAJEBggDBBkIAQgDBCXASAEELABIwBBgAJrIgYkACAGIAQQXiAGQYABaiIQIARBgAFqIhIQXiAGEC0gEBAtIBAQfCAQEKkBIAYgEBB7IAYQPiAEIAYQESAGEDYgBhCpASASIAYQESAGQYACaiQAIAUgAxCWASAFIAQQGCAPIAkQlgEgDyAEEBggDCAKEJYBIAwgBBAYIAVBBTYCgAYgA0GACGokACAAEJ4BIAAgBRAHIAUgABBtIAAgCBAyIAAgCBAyIAAgBRAHIAhBwAdqIgQgABBpIAQQEyAEIAAQByANIAAgCxAbIAhByA1qIgMgDRBpIAMQngEgASAAEGkgARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gASAIEDIgACADEG0gACABEAcgDSAAIAsQGyADIA0QbSANIAMgCxAbIAMgDRBtIAEgABBtIAEgCBAyIAEgCBAyIAMgARAHIAEgABBtIAEQngEgACADEG0gACABEAcgACAEEAcgABCcASAIQeAfaiQAIAcgAEGIBhDRARpBACEAIwBBgAJrIgEkACABEGwCQCAHIAEQegR/IAdBgAFqIAFBgAFqEHoFQQALRQ0AIAdBgAJqEIcBRQ0AIAdBgARqEIcBIQALIAFBgAJqJABBACAADQAaQX8LIAJBkBVqJAAgDkEoahC0ASAOQSBqELQBIA5BGGoQtAEgDkEwaiQAC58BAgJ/BX4gAEEwaiICKQMAIAFBP3GtIgSGIQUgACkDKCIGQTogAWtBP3GtIgiHIQdBBiEBA38gAiAFIAeENwMAIAFBAU0EfyAAIAApAwAgBIZC//////////8DgzcDACAAKQMwQiSHpwUgAUEBayEBIAJBEGsiA0EIaiECIAYgBIZC//////////8DgyEHIAMpAwAiBiAIhyEFDAELCxoLiAECA34DfyMAQRBrIgUkAAN+IAZBOEYEfiAFQRBqJAAgAwUgBSAAIAZqIgcpAwAiAiACQj+HIAGsIgIgAkI/hxAvIAcgBSkDACIEIAN8IgJC//////////8DgzcDACACIARUrSAFQQhqKQMAIANCP4d8fEIGhiACQjqIhCEDIAZBCGohBgwBCwsLigECA38BfiMAQUBqIgIkACACQQhqIgEgABBdIAEQQiACQThqIQFBBiEDQdwCIQACQAJAA0AgA0EATgRAIAEpAwAiBEIAUg0CIAFBCGshASAAQTprIQAgA0EBayEDDAELC0EAIQAMAQsDQCAEUA0BIABBAWohACAEQgJ/IQQMAAsACyACQUBrJAAgAAuHAQEDfyMAQYACayIBJAAgABCwASABIAAQXiABQYABaiICQTgQ0AEaIAFBATYCuAEgAUHAAWpBOBDQARogAUH4AWpBATYCACABIABBgAFqIgMQmgEgARA2IAIgARCZASACIAMQmgEgAyABEJkBIAMgABCaASAAIAIQmQEgABCwASABQYACaiQAC30CBH4BfyABQT9xrSECQTogAWtBP3GtIQRBACEBIAApAwAiBSEDA38gAUEwRgR/IAAgACkDMCAChzcDMCAFQn8gAoZCf4WDpwUgACABaiIGIAMgAocgBkEIaikDACIDIASGQv//////////A4OENwMAIAFBCGohAQwBCwsaC2kBBH8jAEHAAWsiASQAIAEgABCQASABQUBrIgIgABCQASABQYABaiIDIABBQGsiBBCQASABIAQQdyACIAAQdyACEEIgBCACEEogAxBDIAAgAxB3IAEQQiAAEEIgACABEEogAUHAAWokAAuCAQIBfwF+IABB8AAQ0AEhAANAIAJBOEYEQAJAIAAgASkDMCIDQjqHNwM4IAAgA0L//////////wODNwMwIABBQGshAEEAIQIDQCACQTBGDQEgACACakIANwMAIAJBCGohAgwACwALBSAAIAJqIAEgAmopAwA3AwAgAkEIaiECDAELCwtuAQZ+IAAgA0L/////D4MiBSABQv////8PgyIGfiIHIAUgAUIgiCIIfiIJIAYgA0IgiCIGfnwiBUIghnwiCjcDACAAIAcgClatIAYgCH4gBSAJVK1CIIYgBUIgiIR8fCABIAR+IAIgA358fDcDCAtqAgF/BX4gASkDCCAAKQMAhSIGQgGGQgGHIQdBACACa6whCAN+IANBOEYEfiAFBSAAIANqIgIgAikDACIEIAaFIAEgA2opAwAgBIUgCIOFIgQgB4U3AwAgBCAFhSEFIANBCGohAwwBCwsaC18CAX8EfkIBIQNBMCECA38gAkF4RgR/IARCAYYgA3ynQQFrBSABIAJqKQMAIgUgACACaikDACIGfUI6hyADgyAEhCEEIAJBCGshAiAFIAaFQgF9QjqHIAODIQMMAQsLC2kBBH8jAEGAAmsiAiQAIAIgARBeIAJBgAFqIgMgARBeIAIQLSADIAIQESAAIAMQmAEgAEGAAmoiBCADEJgBIABBgARqIgUgAxCYASAEIAEQpgEgBSACEKYBIABBBTYCgAYgAkGAAmokAAtiAQJ/IwBBQGoiAiQAIAAQQiACIAAQkAECQCABBEAgACABEK4BDAELIAAQOgtBACEBA0AgA0UEQCAAEExBASABQQFqIAFBAUYiAxshAQwBCwsgACACEEogABAeIAJBQGskAAtnAQJ/IwBBQGoiAyQAAkAgASABQR91IgJqIAJzIgIgACgCOGxBgICAEE4EQCADIAIQOSAAIAMQSgwBCyAAIAIQKRogACAAKAI4IAJsNgI4CyABQQBIBEAgABBDIAAQQgsgA0FAayQAC2cAIABBAXYgAHIiAEECdiAAciIAQQR2IAByIgBBCHYgAHIiAEEQdiAAciIAIABBAXZB1arVqgVxayIAQQJ2QbPmzJkDcSAAQbPmzJkDcWoiAEEEdiAAakGPnrz4AHFBgYKECGxBGHYLYQEDfyMAQYABayIBJAAgASAAEJABIAFBQGsiAkE4ENABGiABQQE2AnggASAAQUBrIgMQdyABEEMgAiABEK4BIAIgAxB3IAMgARCuASADIAAQdyAAIAIQrgEgAUGAAWokAAtVAgJ/AX4jAEHwAGsiASQAIAFBwLLAABBJIAApAwAhAyABQThqIgIgABBdIABBARAsIAIgARBgIAIQQiACQQEQLCAAIAIgA0ICgacQMCABQfAAaiQAC5gBAQZ/IwBBwAFrIgMkACAAIAEQXiAAEC0gA0GIAWoiBkHop8AAEEkjAEFAaiIEJAAgA0EIaiICQTgQ0AEiBUEBNgI4IAVBQGtBOBDQASAFQfgAakEBNgIAIAQgBhCOASAFIAQQrgEQwQEgBEFAayQAIAIQqQEgAhB8IAIQqQEgACABEBEgACACEJoBIAAQtQEgA0HAAWokAAtZAQJ/IwBBQGoiAyQAIABBOBDQASIAQQE2AjgCQCABQQBOBEAgACABEJMBDAELIANBCGoiAkHAssAAEEkgAiABEJMBIAIQQiAAIAIQagsgABBUIANBQGskAAu9CAEKfyMAQYABayIHJAAgB0EIaiIDQcCywAAQSSADQQEQlAECQAJAA0AgAUEwRgRAIANBMGogAykDMEIBhzcDACADQThqIQEDQCACRQ0EIAFCADcDACACQQFrIQIgAUEIaiEBDAALAAsgAUE4Rg0BIAFBOEcEQCABIANqIAEgA2oiBEEIaikDAEI5hkL//////////wODIAQpAwBCAYeENwMAIAVBAWohBSABQQhqIQEMAQsLQQdBB0GEm8AAEDsACyAFQQdB9JrAABA7AAsgA0EBEJQBIANBARAsIAdBQGshBUEAIQIjAEGgCmsiASQAIAFBOBDQASIBQUBrQTgQ0AEhBiABQYABakE4ENABGiABQcABakE4ENABGiABQYACakE4ENABGiABQcACakE4ENABGiABQYADakE4ENABGiABQcADakE4ENABGiABQYAEakE4ENABGiABQcAEakE4ENABGiABQYAFakE4ENABGiABQcAFakE4ENABGiABQYAGakE4ENABGiABQcAGakE4ENABGiABQYAHakE4ENABGiABQcAHakE4ENABGiABQfgHakEBNgIAIAFBuAdqQQE2AgAgAUH4BmpBATYCACABQbgGakEBNgIAIAFB+AVqQQE2AgAgAUG4BWpBATYCACABQfgEakEBNgIAIAFBuARqQQE2AgAgAUH4A2pBATYCACABQbgDakEBNgIAIAFB+AJqQQE2AgAgAUG4AmpBATYCACABQfgBakEBNgIAIAFBuAFqQQE2AgAgAUH4AGpBATYCACABQQE2AjggAUGBCGpB5wAQ0AEaIAFB6AhqIgQgABCQASAEEEIgAUGoCWoiBCADEF0gBBBCIAQQKkEDaiIIQQJ2IgNBAWohCQJAA0AgAiAJRgRAIAEQygEgBiABQegIahCuASABQeAJakE4ENABGiABQQE2ApgKQYB5IQIMAgsgAUGoCWoiBCAEQQQQjwEiChCUASAEEEIgAkHnAEcEQCABQYEIaiACaiAKOgAAIAFBqAlqQQQQLCACQQFqIQIMAQsLQecAQecAQaC0wAAQOwALA0AgAgRAIAFB4AlqIgQgASACaiIGQcAHahCuASAGQYAIaiIGIAQQrgEgBiABQegIahBKIAJBQGshAgwBCwsCQAJAAkACQCAIQZwDSQRAIAFBgQhqIANqLAAAIgJBEE8NASAFIAEgAkEGdGoQkAEgA0EBayICQeYASyEEA0AgAkF/Rg0DIAUQTCAFEEwgBRBMIAUQTCAEDQQgAUGBCGogAmotAAAiA0EQSQRAIAUgASADQQZ0ahBKIAJBAWshAgwBCwsgA0EYdEEYdUEQQeC0wAAQOwALIANB5wBBsLTAABA7AAsgAkEQQcC0wAAQOwALIAUQHiABQaAKaiQADAELIAJB5wBB0LTAABA7AAsgACAFEK4BIAdBgAFqJAALbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYCACADQSxqQQE2AgAgA0ICNwIMIANB2LjAADYCCCADQQE2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEGYAC2UBAn8gACAAKAIAIgJBCGoiAzYCACAAIAJBA3ZBPHFqQShqIgIgAUH/AXEgAigCAEEIdHI2AgACQAJAIANFBEAgAEEANgIAIAAgACgCBEEBajYCBAwBCyADQf8DcQ0BCyAAEA8LC1wAIABBOBDQASIAQQE2AjggAEFAa0E4ENABGiAAQfgAakEBNgIAIABBgAFqEFEgAEGAAmpBOBDQARogAEG4AmpBATYCACAAQcACakE4ENABGiAAQfgCakEBNgIAC1sBA38jAEGAAWsiASQAIAAQqQEgASAAEJABIAFBQGsiAiAAQUBrIgMQkAEgARBMIAIQTCABIAIQdyABQQAQMyAAIAEQSiABEEMgARBCIAMgARBKIAFBgAFqJAALYQEBfyMAQYACayIDJAAgABA9IAAgARCZASAAQYABaiIBIAIQmQEgAEGAAmoQtwEgABCpASADIAAQOCADQYABaiICIAEQXiACEC0gAiADEHpFBEAgABCbAQsgA0GAAmokAAtUAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqIAJBCGoQDCACQSBqJAALZwAjAEEwayIBJABBpLvAAC0AAARAIAFBHGpBATYCACABQgI3AgwgAUGQtsAANgIIIAFBATYCJCABIAA2AiwgASABQSBqNgIYIAEgAUEsajYCICABQQhqQbi2wAAQZgALIAFBMGokAAtiAgF+An8gACkDACEBA34gACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkEoRgR+IAAgACkDMCABfCIBNwMwIAFCJIcFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLGgt8AQV/IwBBQGoiAyQAIANBCGoiAkHAssAAEEkgAiAAKAI4QQFrEDUiBBAoA0AgAUE4RwRAIAAgAWoiBSABIAJqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAEEBIARBAWp0IgI2AjggAkH///8PSgRAIAAQHgsgA0FAayQAC3sBAn8gAEEoaiECA0AgAUGAAkYEQCAAQufMp9DW0Ouzu383AgggAEIANwIAIABBIGpCq7OP/JGjs/DbADcCACAAQRhqQv+kuYjFkdqCm383AgAgAEEQakLy5rvjo6f9p6V/NwIABSABIAJqQQA2AgAgAUEEaiEBDAELCwtUACAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQARogAEH4AGpBATYCACAAQYABakE4ENABGiAAQbgBakEBNgIAIABBwAFqQTgQ0AEaIABB+AFqQQE2AgALWAECfyMAQUBqIgEkAAJAIAAQhgENACABQQEQOSAAQYABaiICIAEQWA0AIAJBABAzIAAgAhBKIAAQHiAAQUBrIgAgAhBKIAAQHiACIAEQrgELIAFBQGskAAtZAQJ/IwBBgAFrIgEkAAJAIAAQigENACABEFEgAEGAAmoiAiABEHoNACACED4gACACEBEgABC1ASAAQYABaiIAIAIQESAAELUBIAIgARCZAQsgAUGAAWokAAtbAgF+An8gACkDACEBA0AgACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkHgAEYEQCAAIAApA2ggAXw3A2gFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLC08BAX8gAEE4ENABGgJAA0AgAkEHRwRAIAJBB0YNAiAAIAEpAwA3AwAgAEEIaiEAIAFBCGohASACQQFqIQIMAQsLDwtBB0EHQeSawAAQOwALVAECfyMAQbABayICJAAgATQCOCAANAI4fkL///8PVQRAIAAQHgsgAkEIaiIDIAAgARAFIAJB+ABqIgEgAxBrIAAgARBqIABBAjYCOCACQbABaiQAC1EBAn8jAEFAaiIDJAAgAEE4ENABIgBBATYCOCAAQUBrQTgQ0AEgAEH4AGpBATYCACADIAEQjgEgACADEK4BIAMgAhCOASADEK4BIANBQGskAAvwDAIRfwh+IwBBsAFrIg8kACAANAI4IhIgEn5C////D1YEQCAAEB4LIwBB0AFrIgEkACAPQQhqIgZBCGpB0AAQ0AEaIAFBwAFqIAApAwAiFyAXQj+HIhYgFyAWEC8gBiABKQPAASISQv//////////A4M3AwAgAUHIAWopAwAiFUIGhiASQjqIhCETIBVCOoghGCAAQQhqIgwhDSAAIQlBASEKQQEhBwJAA0AgCkEERgRAIABBGGohCiAAQRBqIQkgAEEoaiEMIAApAzAhF0EHIQUgAUHIAGohCwNAIAVBC0kEQCABQUBrIAVBA3QiCCAAakEwaykDACISIBJCP4cgFyAXQj+HIhYQLyAFQQFqIg1BAXYhByALKQMAIRUgASkDQCESIAkhAiAMIQQgBUEFayIOIQMDQCADIAdJBEAgASACKQMAIhQgFEI/hyAEKQMAIhQgFEI/hxAvIAEpAwAiFCASfCISIBRUrSABQQhqKQMAIBV8fCEVIAJBCGohAiAEQQhrIQQgA0EBaiEDDAELCyAGIAhqIBJCAYYiFCATfCITQv//////////A4M3AwAgAUEwaiAAIA5BA3RqKQMAIhkgGUI/hyAXIBYQLyATIBRU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aikDADcDACACQQhqIQIMAQsLC4QJAg1/Cn4jAEFAaiILJAAgC0EIaiIJQcCywAAQSSMAQZACayICJAAgAEEwENABIQogAkHoAGpB8AAQ0AEaIAJB4AFqQTAQ0AEaIAoQcSACIAEiDCkDACIQQv3/8//P///5AX5C//////////8DgyISNwPYASACQdgAaiASQgAgCSkDACIXIBdCP4ciGBAvIBAgAikDWCIPfCITIA9UrSACQeAAaikDACAQQj+HfHwiEEI6hyABKQMIIg9CP4d8IA8gEEIGhiATQjqIhCITfCIQIBNUrXwhD0EBIQBCACETAkACQANAAkAgAEEHRgRAQQYhB0EAIQhBByEADAELIABBAXYiAUEBaiEGIAggAWshAyABQQN0IgFBCGohBCAHIAFrIQUgAkHIAGogCSAAQQN0Ig1qKQMAIhUgFUI/hyIWIBJCABAvIAJB0ABqKQMAIBAgECATfCIRVq0gDyAUfHx8IBEgAikDSHwiDyARVK18IRAgAEEBaiEBA0AgACAGTQRAIAJB2AFqIA1qIA9C/f/z/8////kBfkL//////////wODIhE3AwAgAkE4aiARQgAgFyAYEC8gAkEoaiARQgAgFSAWEC8gAkHoAGogAEEEdGoiACACQTBqKQMAIhE3AwggACACKQMoIhU3AwAgDyACKQM4IhZ8Ig8gFlStIAJBQGspAwAgEHx8IhBCOocgDCABQQN0aikDACIWQj+HfCAWIBBCBoYgD0I6iIQiD3wiECAPVK18IQ8gEyAVfCITIBVUrSARIBR8fCEUIAdBCGohByAIQQFqIQggASEADAMLIANBB08NAyACQRhqIAQgCWopAwAgBSAJaikDAH0iESARQj+HIAJB2AFqIg4gBWopAwAgBCAOaikDAH0iESARQj+HEC8gAikDGCIRIA98Ig8gEVStIAJBIGopAwAgEHx8IRAgBkEBaiEGIARBCGohBCAFQQhrIQUgA0EBayEDDAALAAsLA0ACQAJAIABBDUcEQCAHIABBAXYiBmshAyAIIAZBA3QiAWshBCABQQhqIQUgDyAUfCAQIBN8Ig8gEFStfCEQIABBAWohAQNAIAZBBUsNAyADQQdPDQIgAkEIaiAFIAlqKQMAIAQgCWpBMGopAwB9IhIgEkI/hyACIARqQYgCaikDACACQdgBaiAFaikDAH0iEiASQj+HEC8gAikDCCISIA98Ig8gElStIAJBEGopAwAgEHx8IRAgBkEBaiEGIARBCGshBCADQQFrIQMgBUEIaiEFDAALAAsgCiAQQv//////////A4M3AzAgAkGQAmokAAwECyADQQdBpJzAABA7AAsgAEEDdCAKakE4ayAPQv//////////A4M3AwAgEEI6hyAMIAFBA3RqKQMAIhJCP4d8IBIgEEIGhiAPQjqIhCIPfCIQIA9UrXwhDyAUIABBBHQgAmpBCGoiAEEIaikDAH0gEyAAKQMAIhJUrX0hFCAIQQhqIQggB0EBaiEHIBMgEn0hEyABIQAMAAsACyADQQdBlJzAABA7AAsgC0FAayQACy4BAX8jAEGAAWsiASQAIAAQRSABEFEgACABEJkBIABBgAFqELYBIAFBgAFqJAALMwAgACABEJYBIABBgAJqIAFBgAJqEJYBIABBgARqIAFBgARqEJYBIAAgASgCgAY2AoAGCygAIAAgASACEHIgAEFAayABQUBrIAIQciAAQYABaiABQYABaiACEHILLQAgACABIAIQjQEgAEGAAWogAUGAAWogAhCNASAAQYACaiABQYACaiACEI0BCycBAn8jAEFAaiICJAAgAkEIaiIDIAEQvgEgACADEI4BIAJBQGskAAsiAQF/A0AgAUE4RwRAIAAgAWpCADcDACABQQhqIQEMAQsLCyUAIAAgASACEDAgAEEAIAJrIAAoAjgiACABKAI4c3EgAHM2AjgLJwAgACAAKAIEQQFxIAFyQQJyNgIEIAAgAWoiACAAKAIEQQFyNgIECyMAA0AgAgRAIAAgAS0AABA8IAJBAWshAiABQQFqIQEMAQsLCywAIAAQiwEgACABEJYBIABBgAJqIAIQlgEgAEGABGogAxCWASAAQQU2AoAGCyMBAX8jAEFAaiIBJAAgASAAEJABIAEQHiABEFcgAUFAayQACykAIAAgARBgIAAgACgCOCABKAI4aiIBNgI4IAFB////D0oEQCAAEB4LCyUAIAAgARCuASAAQUBrIAFBQGsQrgEgAEGAAWogAUGAAWoQrgELKAEBfyMAQYACayICJAAgAiABEIwBIAIQKyAAIAIQlwEgAkGAAmokAAscAQF/IAAgARBYBH8gAEFAayABQUBrEFgFQQALCycBAX8jAEGAAWsiAiQAIAIg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DCELDQALCyAMpyICQeMASwRAIABBAmsiACAGQQlqaiAMpyICIAJB//8DcUHkAG4iAkHkAGxrQf//A3FBAXRB6LjAAGovAAA7AAALAkAgAkEKTwRAIABBAmsiACAGQQlqaiACQQF0Qei4wABqLwAAOwAADAELIABBAWsiACAGQQlqaiACQTBqOgAACwJ/IAZBCWogAGohCEErQYCAxAAgASgCACIDQQFxIgIbIQQgAkEnIABrIglqIQJBlLjAAEEAIANBBHEbIQUCQAJAIAEoAghFBEBBASEAIAEgBCAFEFINAQwCCwJAAkACQAJAIAIgAUEMaigCACIDSQRAIAEtAABBCHENBEEAIQAgAyACayICIQNBASABLQAgIgcgB0EDRhtBA3FBAWsOAgECAwtBASEAIAEgBCAFEFINBAwFC0EAIQMgAiEADAELIAJBAXYhACACQQFqQQF2IQMLIABBAWohACABQRxqKAIAIQcgASgCBCECIAEoAhghCgJAA0AgAEEBayIARQ0BIAogAiAHKAIQEQQARQ0AC0EBDAQLQQEhACACQYCAxABGDQEgASAEIAUQUg0BIAEoAhggCCAJIAEoAhwoAgwRBQANASABKAIcIQQgASgCGCEBQQAhAAJ/A0AgAyAAIANGDQEaIABBAWohACABIAIgBCgCEBEEAEUNAAsgAEEBawsgA0khAAwBCyABKAIEIQcgAUEwNgIEIAEtACAhCkEBIQAgAUEBOgAgIAEgBCAFEFINAEEAIQAgAyACayICIQMCQAJAAkBBASABLQAgIgQgBEEDRhtBA3FBAWsOAgABAgtBACEDIAIhAAwBCyACQQF2IQAgAkEBakEBdiEDCyAAQQFqIQAgAUEcaigCACECIAEoAgQhBCABKAIYIQUCQANAIABBAWsiAEUNASAFIAQgAigCEBEEAEUNAAtBAQwDC0EBIQAgBEGAgMQARg0AIAEoAhggCCAJIAEoAhwoAgwRBQANACABKAIcIQAgASgCGCEFQQAhAgJAA0AgAiADRg0BIAJBAWohAiAFIAQgACgCEBEEAEUNAAtBASEAIAJBAWsgA0kNAQsgASAKOgAgIAEgBzYCBEEADAILIAAMAQsgASgCGCAIIAkgAUEcaigCACgCDBEFAAsgBkEwaiQACwsAIAAQNiAAELABCysCAX8BfkIBIQIDQCAAIAFq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AAANAEHgs8AAC8EHYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAAAAAABhdHRlbXB0IHRvIGRpdmlkZSB3aXRoIG92ZXJmbG93ALAZEAASAAAADAIAAA0AAACwGRAAEgAAABgCAAAmAAAAsBkQABIAAAAYAgAAIwAAALAZEAASAAAAHgIAABcAAACwGRAAEgAAAB4CAAAUAAAAqqr//////gHu//9UrP//AupBYg9rDyoBw5z9ShTOEwJLd2TXrEtDAu3pxpKm+V8Cox4RoAEAAAADAAAABAAAAAQAAAAEAAAABQAAAAYAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlbWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAoAAOsaEAAVAAAAABsQAA4AAABsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnMgGxAAGAAAAEkBAAAJAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5yc0gbEAAcAAAARgIAAB8AAABIGxAAHAAAAEcCAAAeAAAABwAAAAwAAAAEAAAACAAAAAMAAAAIAAAABAAAAAkAAAAKAAAAEAAAAAQAAAALAAAADAAAAAMAAAAIAAAABAAAAA0AAAAOAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93AAAA6BsQABEAAADMGxAAHAAAAAUCAAAFAAAAEAAAAAAAAAABAAAAEQAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAAkHBAAIAAAAEQcEAASAAAAMDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5yc3JhbmdlIGVuZCBpbmRleCAAAABxHRAAEAAAADAdEAAiAAAAUh0QAB8AAABJAAAABQB7CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS42MS4wIChmZTViMTNkNjggMjAyMi0wNS0xOCkGd2FscnVzBjAuMTkuMAx3YXNtLWJpbmRnZW4SMC4yLjgxICgwNjJhYTVmNzAp";
let Nt;
const ug = Ss(gg);
function fg() {
  return Nt.bls_init();
}
let Ar = null;
function Bg() {
  return (
    (Ar === null || Ar.buffer !== Nt.memory.buffer) &&
      (Ar = new Uint8Array(Nt.memory.buffer)),
    Ar
  );
}
function An(e, A) {
  const t = A(e.length * 1);
  return Bg().set(e, t / 1), [t, e.length];
}
function Ig(e, A, t) {
  const [i, s] = An(e, Nt.__wbindgen_malloc),
    [u, f] = An(A, Nt.__wbindgen_malloc),
    [a, E] = An(t, Nt.__wbindgen_malloc);
  return Nt.bls_verify(i, s, u, f, a, E);
}
async function hg(e, A) {
  if (typeof Response == "function" && e instanceof Response) {
    const t = await e.arrayBuffer();
    return await WebAssembly.instantiate(t, A);
  } else {
    const t = await WebAssembly.instantiate(e, A);
    return t instanceof WebAssembly.Instance ? { instance: t, module: e } : t;
  }
}
async function bs() {
  const e = {},
    { instance: A, module: t } = await hg(ug, e);
  return (Nt = A.exports), (bs.__wbindgen_wasm_module = t), Nt;
}
let tn;
async function Eg(e, A, t) {
  if (!tn) {
    if ((await bs(), fg() !== 0)) throw new Error("Cannot initialize BLS");
    tn = (i, s, u) => Ig(s, u, i) === 0;
  }
  return tn(e, A, t);
}
const Ds = (e) => jA(new Qe(e)),
  xs = (e) => {
    const A = Ds(e);
    return new Date(Number(A) / 1e6);
  };
class xt extends Rt {
  constructor(A) {
    super(`Invalid certificate: ${A}`);
  }
}
const mt = { Empty: 0, Fork: 1, Labeled: 2, Leaf: 3, Pruned: 4 };
function Ns(e, A) {
  if (e.byteLength !== A.byteLength) return !1;
  const t = new Uint8Array(e),
    i = new Uint8Array(A);
  for (let s = 0; s < t.length; s++) if (t[s] !== i[s]) return !1;
  return !0;
}
class Re {
  constructor(A, t, i, s, u = 5) {
    (this._rootKey = t),
      (this._canisterId = i),
      (this._blsVerify = s),
      (this._maxAgeInMinutes = u),
      (this.cert = Pt(new Uint8Array(A)));
  }
  static async create(A) {
    let t = A.blsVerify;
    t || (t = Eg);
    const i = new Re(
      A.certificate,
      A.rootKey,
      A.canisterId,
      t,
      A.maxAgeInMinutes
    );
    return await i.verify(), i;
  }
  lookup(A) {
    return _s(Te(A, this.cert.tree));
  }
  lookup_label(A) {
    return this.lookup([A]);
  }
  async verify() {
    const A = await fr(this.cert.tree),
      t = await this._checkDelegationAndGetKey(this.cert.delegation),
      i = this.cert.signature,
      s = Qg(t),
      u = ht(be("ic-state-root"), A);
    let f = !1;
    const a = this.lookup(["time"]);
    if (!a) throw new xt("Certificate does not contain a time");
    const E = 5 * 60 * 1e3,
      d = this._maxAgeInMinutes * 60 * 1e3,
      m = Date.now(),
      N = m - d,
      k = m + E,
      _ = xs(a);
    if (_.getTime() < N)
      throw new xt(
        `Certificate is signed more than ${this._maxAgeInMinutes} minutes in the past. Certificate time: ` +
          _.toISOString() +
          " Current time: " +
          new Date(m).toISOString()
      );
    if (_.getTime() > k)
      throw new xt(
        "Certificate is signed more than 5 minutes in the future. Certificate time: " +
          _.toISOString() +
          " Current time: " +
          new Date(m).toISOString()
      );
    try {
      f = await this._blsVerify(
        new Uint8Array(s),
        new Uint8Array(i),
        new Uint8Array(u)
      );
    } catch {
      f = !1;
    }
    if (!f) throw new xt("Signature verification failed");
  }
  async _checkDelegationAndGetKey(A) {
    if (!A) return this._rootKey;
    const t = await Re.create({
      certificate: A.certificate,
      rootKey: this._rootKey,
      canisterId: this._canisterId,
      blsVerify: this._blsVerify,
      maxAgeInMinutes: 1 / 0,
    });
    if (
      !Fs({
        canisterId: this._canisterId,
        subnetId: xA.fromUint8Array(new Uint8Array(A.subnet_id)),
        tree: t.cert.tree,
      })
    )
      throw new xt(
        `Canister ${
          this._canisterId
        } not in range of delegations for subnet 0x${it(A.subnet_id)}`
      );
    const s = t.lookup(["subnet", A.subnet_id, "public_key"]);
    if (!s)
      throw new Error(
        `Could not find subnet key for subnet 0x${it(A.subnet_id)}`
      );
    return s;
  }
}
const we = Vt(
    "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100"
  ),
  lg = 96;
function Qg(e) {
  const A = we.byteLength + lg;
  if (e.byteLength !== A)
    throw new TypeError(`BLS DER-encoded public key must be ${A} bytes long`);
  const t = e.slice(0, we.byteLength);
  if (!Ns(t, we))
    throw new TypeError(
      `BLS DER-encoded public key is invalid. Expect the following prefix: ${we}, but get ${t}`
    );
  return e.slice(we.byteLength);
}
function _s(e) {
  if (e instanceof ArrayBuffer) return e;
  if (e instanceof Uint8Array) return e.buffer;
}
async function fr(e) {
  switch (e[0]) {
    case mt.Empty:
      return It(be("ic-hashtree-empty"));
    case mt.Pruned:
      return e[1];
    case mt.Leaf:
      return It(ht(be("ic-hashtree-leaf"), e[1]));
    case mt.Labeled:
      return It(ht(be("ic-hashtree-labeled"), e[1], await fr(e[2])));
    case mt.Fork:
      return It(ht(be("ic-hashtree-fork"), await fr(e[1]), await fr(e[2])));
    default:
      throw new Error("unreachable");
  }
}
function be(e) {
  const A = new Uint8Array([e.length]),
    t = new TextEncoder().encode(e);
  return ht(A, t);
}
function Te(e, A) {
  if (e.length === 0)
    switch (A[0]) {
      case mt.Leaf: {
        if (!A[1]) throw new Error("Invalid tree structure for leaf");
        return A[1] instanceof ArrayBuffer
          ? A[1]
          : A[1] instanceof Uint8Array
          ? A[1].buffer
          : A[1];
      }
      case mt.Fork:
        return A;
      default:
        return A;
    }
  const t = typeof e[0] == "string" ? new TextEncoder().encode(e[0]) : e[0],
    i = Cg(t, br(A));
  if (i) return Te(e.slice(1), i);
}
function br(e) {
  switch (e[0]) {
    case mt.Empty:
      return [];
    case mt.Fork:
      return br(e[1]).concat(br(e[2]));
    default:
      return [e];
  }
}
function Cg(e, A) {
  if (A.length !== 0) {
    for (const t of A)
      if (t[0] === mt.Labeled) {
        const i = t[1];
        if (Ns(e, i)) return t[2];
      }
  }
}
function Fs(e) {
  const { canisterId: A, subnetId: t, tree: i } = e,
    s = Te(["subnet", t.toUint8Array(), "canister_ranges"], i);
  if (!s || !(s instanceof ArrayBuffer))
    throw new Error(`Could not find canister ranges for subnet ${t}`);
  return Pt(s)
    .map((E) => [xA.fromUint8Array(E[0]), xA.fromUint8Array(E[1])])
    .some((E) => E[0].ltEq(A) && E[1].gtEq(A));
}
const Rs = async (e) => {
    const { agent: A, paths: t } = e,
      i = xA.from(e.canisterId),
      s = [...new Set(t)],
      u = s.map((E) => _n(E, i)),
      f = new Map(),
      a = s.map((E, d) =>
        (async () => {
          var m;
          try {
            const N = await A.readState(i, { paths: [u[d]] }),
              k = await Re.create({
                certificate: N.certificate,
                rootKey: A.rootKey,
                canisterId: i,
              }),
              _ = (J, X) => {
                if (X === "subnet") {
                  const z = Ts(N.certificate, i, A.rootKey);
                  return { path: X, data: z };
                } else return { path: X, data: _s(J.lookup(_n(X, i))) };
              },
              { path: G, data: L } = _(k, s[d]);
            if (!L)
              console.warn(
                `Expected to find result for path ${G}, but instead found nothing.`
              ),
                typeof G == "string" ? f.set(G, null) : f.set(G.key, null);
            else
              switch (G) {
                case "time": {
                  f.set(G, xs(L));
                  break;
                }
                case "controllers": {
                  f.set(G, pg(L));
                  break;
                }
                case "module_hash": {
                  f.set(G, Si(L));
                  break;
                }
                case "subnet": {
                  f.set(G, L);
                  break;
                }
                case "candid": {
                  f.set(G, new TextDecoder().decode(L));
                  break;
                }
                default:
                  if (typeof G != "string" && "key" in G && "path" in G)
                    switch (G.decodeStrategy) {
                      case "raw":
                        f.set(G.key, L);
                        break;
                      case "leb128": {
                        f.set(G.key, Ds(L));
                        break;
                      }
                      case "cbor": {
                        f.set(G.key, Us(L));
                        break;
                      }
                      case "hex": {
                        f.set(G.key, Si(L));
                        break;
                      }
                      case "utf-8":
                        f.set(G.key, dg(L));
                    }
              }
          } catch (N) {
            if (
              !((m = N?.message) === null || m === void 0) &&
              m.includes("Invalid certificate")
            )
              throw new Rt(N.message);
            typeof E != "string" && "key" in E && "path" in E
              ? f.set(E.key, null)
              : f.set(E, null),
              console.group(),
              console.warn(
                `Expected to find result for path ${E}, but instead found nothing.`
              ),
              console.warn(N),
              console.groupEnd();
          }
        })()
      );
    return await Promise.all(a), f;
  },
  Ts = (e, A, t) => {
    if (!A._isPrincipal) throw new Error("Invalid canisterId");
    const i = Pt(new Uint8Array(e)),
      s = i.tree;
    let u = i.delegation,
      f;
    if (
      (u && u.subnet_id
        ? (f = xA.fromUint8Array(new Uint8Array(u.subnet_id)))
        : !u && typeof t < "u"
        ? ((f = xA.selfAuthenticating(new Uint8Array(t))),
          (u = {
            subnet_id: f.toUint8Array(),
            certificate: new ArrayBuffer(0),
          }))
        : ((f = xA.selfAuthenticating(
            xA
              .fromText(
                "tdb26-jop6k-aogll-7ltgs-eruif-6kk7m-qpktf-gdiqx-mxtrf-vb5e6-eqe"
              )
              .toUint8Array()
          )),
          (u = {
            subnet_id: f.toUint8Array(),
            certificate: new ArrayBuffer(0),
          })),
      !Fs({ canisterId: A, subnetId: f, tree: s }))
    )
      throw new Error("Canister not in range");
    const E = Te(["subnet", u?.subnet_id, "node"], s),
      d = br(E);
    d.length;
    const m = new Map();
    return (
      d.forEach((N) => {
        Object.getPrototypeOf(new Uint8Array(N[1]));
        const k = xA.from(new Uint8Array(N[1])).toText(),
          _ = Te(["public_key"], N[2]);
        if (_.byteLength !== 44) throw new Error("Invalid public key length");
        m.set(k, _);
      }),
      {
        subnetId: xA.fromUint8Array(new Uint8Array(u.subnet_id)).toText(),
        nodeKeys: m,
      }
    );
  },
  _n = (e, A) => {
    const t = new TextEncoder(),
      i = (u) => new DataView(t.encode(u).buffer).buffer,
      s = new DataView(A.toUint8Array().buffer).buffer;
    switch (e) {
      case "time":
        return [i("time")];
      case "controllers":
        return [i("canister"), s, i("controllers")];
      case "module_hash":
        return [i("canister"), s, i("module_hash")];
      case "subnet":
        return [i("subnet")];
      case "candid":
        return [i("canister"), s, i("metadata"), i("candid:service")];
      default:
        if ("key" in e && "path" in e)
          if (typeof e.path == "string" || e.path instanceof ArrayBuffer) {
            const u = e.path,
              f = typeof u == "string" ? i(u) : u;
            return [i("canister"), s, i("metadata"), f];
          } else return e.path;
    }
    throw new Error(
      `An unexpeected error was encountered while encoding your path for canister status. Please ensure that your path, ${e} was formatted correctly.`
    );
  },
  Si = (e) => it(e),
  Us = (e) => Pt(e),
  dg = (e) => new TextDecoder().decode(e),
  pg = (e) => Us(e).map((t) => xA.fromUint8Array(new Uint8Array(t))),
  wg = Object.freeze(
    Object.defineProperty(
      { __proto__: null, encodePath: _n, fetchNodeKeys: Ts, request: Rs },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  tr = BigInt(2 ** 32 - 1),
  Fn = BigInt(32);
function Ms(e, A = !1) {
  return A
    ? { h: Number(e & tr), l: Number((e >> Fn) & tr) }
    : { h: Number((e >> Fn) & tr) | 0, l: Number(e & tr) | 0 };
}
function yg(e, A = !1) {
  let t = new Uint32Array(e.length),
    i = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: u, l: f } = Ms(e[s], A);
    [t[s], i[s]] = [u, f];
  }
  return [t, i];
}
const mg = (e, A) => (BigInt(e >>> 0) << Fn) | BigInt(A >>> 0),
  Sg = (e, A, t) => e >>> t,
  bg = (e, A, t) => (e << (32 - t)) | (A >>> t),
  Dg = (e, A, t) => (e >>> t) | (A << (32 - t)),
  xg = (e, A, t) => (e << (32 - t)) | (A >>> t),
  Ng = (e, A, t) => (e << (64 - t)) | (A >>> (t - 32)),
  _g = (e, A, t) => (e >>> (t - 32)) | (A << (64 - t)),
  Fg = (e, A) => A,
  Rg = (e, A) => e,
  Tg = (e, A, t) => (e << t) | (A >>> (32 - t)),
  Ug = (e, A, t) => (A << t) | (e >>> (32 - t)),
  Mg = (e, A, t) => (A << (t - 32)) | (e >>> (64 - t)),
  Gg = (e, A, t) => (e << (t - 32)) | (A >>> (64 - t));
function kg(e, A, t, i) {
  const s = (A >>> 0) + (i >>> 0);
  return { h: (e + t + ((s / 2 ** 32) | 0)) | 0, l: s | 0 };
}
const Lg = (e, A, t) => (e >>> 0) + (A >>> 0) + (t >>> 0),
  vg = (e, A, t, i) => (A + t + i + ((e / 2 ** 32) | 0)) | 0,
  Hg = (e, A, t, i) => (e >>> 0) + (A >>> 0) + (t >>> 0) + (i >>> 0),
  Og = (e, A, t, i, s) => (A + t + i + s + ((e / 2 ** 32) | 0)) | 0,
  Yg = (e, A, t, i, s) =>
    (e >>> 0) + (A >>> 0) + (t >>> 0) + (i >>> 0) + (s >>> 0),
  qg = (e, A, t, i, s, u) => (A + t + i + s + u + ((e / 2 ** 32) | 0)) | 0,
  Jg = {
    fromBig: Ms,
    split: yg,
    toBig: mg,
    shrSH: Sg,
    shrSL: bg,
    rotrSH: Dg,
    rotrSL: xg,
    rotrBH: Ng,
    rotrBL: _g,
    rotr32H: Fg,
    rotr32L: Rg,
    rotlSH: Tg,
    rotlSL: Ug,
    rotlBH: Mg,
    rotlBL: Gg,
    add: kg,
    add3L: Lg,
    add3H: vg,
    add4L: Hg,
    add4H: Og,
    add5H: qg,
    add5L: Yg,
  },
  bA = Jg,
  [Kg, Pg] = (() =>
    bA.split(
      [
        "0x428a2f98d728ae22",
        "0x7137449123ef65cd",
        "0xb5c0fbcfec4d3b2f",
        "0xe9b5dba58189dbbc",
        "0x3956c25bf348b538",
        "0x59f111f1b605d019",
        "0x923f82a4af194f9b",
        "0xab1c5ed5da6d8118",
        "0xd807aa98a3030242",
        "0x12835b0145706fbe",
        "0x243185be4ee4b28c",
        "0x550c7dc3d5ffb4e2",
        "0x72be5d74f27b896f",
        "0x80deb1fe3b1696b1",
        "0x9bdc06a725c71235",
        "0xc19bf174cf692694",
        "0xe49b69c19ef14ad2",
        "0xefbe4786384f25e3",
        "0x0fc19dc68b8cd5b5",
        "0x240ca1cc77ac9c65",
        "0x2de92c6f592b0275",
        "0x4a7484aa6ea6e483",
        "0x5cb0a9dcbd41fbd4",
        "0x76f988da831153b5",
        "0x983e5152ee66dfab",
        "0xa831c66d2db43210",
        "0xb00327c898fb213f",
        "0xbf597fc7beef0ee4",
        "0xc6e00bf33da88fc2",
        "0xd5a79147930aa725",
        "0x06ca6351e003826f",
        "0x142929670a0e6e70",
        "0x27b70a8546d22ffc",
        "0x2e1b21385c26c926",
        "0x4d2c6dfc5ac42aed",
        "0x53380d139d95b3df",
        "0x650a73548baf63de",
        "0x766a0abb3c77b2a8",
        "0x81c2c92e47edaee6",
        "0x92722c851482353b",
        "0xa2bfe8a14cf10364",
        "0xa81a664bbc423001",
        "0xc24b8b70d0f89791",
        "0xc76c51a30654be30",
        "0xd192e819d6ef5218",
        "0xd69906245565a910",
        "0xf40e35855771202a",
        "0x106aa07032bbd1b8",
        "0x19a4c116b8d2d0c8",
        "0x1e376c085141ab53",
        "0x2748774cdf8eeb99",
        "0x34b0bcb5e19b48a8",
        "0x391c0cb3c5c95a63",
        "0x4ed8aa4ae3418acb",
        "0x5b9cca4f7763e373",
        "0x682e6ff3d6b2b8a3",
        "0x748f82ee5defb2fc",
        "0x78a5636f43172f60",
        "0x84c87814a1f0ab72",
        "0x8cc702081a6439ec",
        "0x90befffa23631e28",
        "0xa4506cebde82bde9",
        "0xbef9a3f7b2c67915",
        "0xc67178f2e372532b",
        "0xca273eceea26619c",
        "0xd186b8c721c0c207",
        "0xeada7dd6cde0eb1e",
        "0xf57d4f7fee6ed178",
        "0x06f067aa72176fba",
        "0x0a637dc5a2c898a6",
        "0x113f9804bef90dae",
        "0x1b710b35131c471b",
        "0x28db77f523047d84",
        "0x32caab7b40c72493",
        "0x3c9ebe0a15c9bebc",
        "0x431d67c49c100d4c",
        "0x4cc5d4becb3e42b6",
        "0x597f299cfc657e2a",
        "0x5fcb6fab3ad6faec",
        "0x6c44198c4a475817",
      ].map((e) => BigInt(e))
    ))(),
  kt = new Uint32Array(80),
  Lt = new Uint32Array(80);
class Wg extends uo {
  constructor() {
    super(128, 64, 16, !1),
      (this.Ah = 1779033703),
      (this.Al = -205731576),
      (this.Bh = -1150833019),
      (this.Bl = -2067093701),
      (this.Ch = 1013904242),
      (this.Cl = -23791573),
      (this.Dh = -1521486534),
      (this.Dl = 1595750129),
      (this.Eh = 1359893119),
      (this.El = -1377402159),
      (this.Fh = -1694144372),
      (this.Fl = 725511199),
      (this.Gh = 528734635),
      (this.Gl = -79577749),
      (this.Hh = 1541459225),
      (this.Hl = 327033209);
  }
  get() {
    const {
      Ah: A,
      Al: t,
      Bh: i,
      Bl: s,
      Ch: u,
      Cl: f,
      Dh: a,
      Dl: E,
      Eh: d,
      El: m,
      Fh: N,
      Fl: k,
      Gh: _,
      Gl: G,
      Hh: L,
      Hl: J,
    } = this;
    return [A, t, i, s, u, f, a, E, d, m, N, k, _, G, L, J];
  }
  set(A, t, i, s, u, f, a, E, d, m, N, k, _, G, L, J) {
    (this.Ah = A | 0),
      (this.Al = t | 0),
      (this.Bh = i | 0),
      (this.Bl = s | 0),
      (this.Ch = u | 0),
      (this.Cl = f | 0),
      (this.Dh = a | 0),
      (this.Dl = E | 0),
      (this.Eh = d | 0),
      (this.El = m | 0),
      (this.Fh = N | 0),
      (this.Fl = k | 0),
      (this.Gh = _ | 0),
      (this.Gl = G | 0),
      (this.Hh = L | 0),
      (this.Hl = J | 0);
  }
  process(A, t) {
    for (let q = 0; q < 16; q++, t += 4)
      (kt[q] = A.getUint32(t)), (Lt[q] = A.getUint32((t += 4)));
    for (let q = 16; q < 80; q++) {
      const cA = kt[q - 15] | 0,
        P = Lt[q - 15] | 0,
        W = bA.rotrSH(cA, P, 1) ^ bA.rotrSH(cA, P, 8) ^ bA.shrSH(cA, P, 7),
        iA = bA.rotrSL(cA, P, 1) ^ bA.rotrSL(cA, P, 8) ^ bA.shrSL(cA, P, 7),
        fA = kt[q - 2] | 0,
        EA = Lt[q - 2] | 0,
        Y = bA.rotrSH(fA, EA, 19) ^ bA.rotrBH(fA, EA, 61) ^ bA.shrSH(fA, EA, 6),
        SA =
          bA.rotrSL(fA, EA, 19) ^ bA.rotrBL(fA, EA, 61) ^ bA.shrSL(fA, EA, 6),
        dA = bA.add4L(iA, SA, Lt[q - 7], Lt[q - 16]),
        QA = bA.add4H(dA, W, Y, kt[q - 7], kt[q - 16]);
      (kt[q] = QA | 0), (Lt[q] = dA | 0);
    }
    let {
      Ah: i,
      Al: s,
      Bh: u,
      Bl: f,
      Ch: a,
      Cl: E,
      Dh: d,
      Dl: m,
      Eh: N,
      El: k,
      Fh: _,
      Fl: G,
      Gh: L,
      Gl: J,
      Hh: X,
      Hl: z,
    } = this;
    for (let q = 0; q < 80; q++) {
      const cA =
          bA.rotrSH(N, k, 14) ^ bA.rotrSH(N, k, 18) ^ bA.rotrBH(N, k, 41),
        P = bA.rotrSL(N, k, 14) ^ bA.rotrSL(N, k, 18) ^ bA.rotrBL(N, k, 41),
        W = (N & _) ^ (~N & L),
        iA = (k & G) ^ (~k & J),
        fA = bA.add5L(z, P, iA, Pg[q], Lt[q]),
        EA = bA.add5H(fA, X, cA, W, Kg[q], kt[q]),
        Y = fA | 0,
        SA = bA.rotrSH(i, s, 28) ^ bA.rotrBH(i, s, 34) ^ bA.rotrBH(i, s, 39),
        dA = bA.rotrSL(i, s, 28) ^ bA.rotrBL(i, s, 34) ^ bA.rotrBL(i, s, 39),
        QA = (i & u) ^ (i & a) ^ (u & a),
        FA = (s & f) ^ (s & E) ^ (f & E);
      (X = L | 0),
        (z = J | 0),
        (L = _ | 0),
        (J = G | 0),
        (_ = N | 0),
        (G = k | 0),
        ({ h: N, l: k } = bA.add(d | 0, m | 0, EA | 0, Y | 0)),
        (d = a | 0),
        (m = E | 0),
        (a = u | 0),
        (E = f | 0),
        (u = i | 0),
        (f = s | 0);
      const _A = bA.add3L(Y, dA, FA);
      (i = bA.add3H(_A, EA, SA, QA)), (s = _A | 0);
    }
    ({ h: i, l: s } = bA.add(this.Ah | 0, this.Al | 0, i | 0, s | 0)),
      ({ h: u, l: f } = bA.add(this.Bh | 0, this.Bl | 0, u | 0, f | 0)),
      ({ h: a, l: E } = bA.add(this.Ch | 0, this.Cl | 0, a | 0, E | 0)),
      ({ h: d, l: m } = bA.add(this.Dh | 0, this.Dl | 0, d | 0, m | 0)),
      ({ h: N, l: k } = bA.add(this.Eh | 0, this.El | 0, N | 0, k | 0)),
      ({ h: _, l: G } = bA.add(this.Fh | 0, this.Fl | 0, _ | 0, G | 0)),
      ({ h: L, l: J } = bA.add(this.Gh | 0, this.Gl | 0, L | 0, J | 0)),
      ({ h: X, l: z } = bA.add(this.Hh | 0, this.Hl | 0, X | 0, z | 0)),
      this.set(i, s, u, f, a, E, d, m, N, k, _, G, L, J, X, z);
  }
  roundClean() {
    kt.fill(0), Lt.fill(0);
  }
  destroy() {
    this.buffer.fill(0),
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const Gs = qn(() => new Wg());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ BigInt(
  0
);
const jg = BigInt(1),
  Vg = BigInt(2);
function Oe(e) {
  return (
    e instanceof Uint8Array ||
    (e != null && typeof e == "object" && e.constructor.name === "Uint8Array")
  );
}
const zg = Array.from({ length: 256 }, (e, A) =>
  A.toString(16).padStart(2, "0")
);
function Xn(e) {
  if (!Oe(e)) throw new Error("Uint8Array expected");
  let A = "";
  for (let t = 0; t < e.length; t++) A += zg[e[t]];
  return A;
}
function ks(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  return BigInt(e === "" ? "0" : `0x${e}`);
}
const bt = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function bi(e) {
  if (e >= bt._0 && e <= bt._9) return e - bt._0;
  if (e >= bt._A && e <= bt._F) return e - (bt._A - 10);
  if (e >= bt._a && e <= bt._f) return e - (bt._a - 10);
}
function Ls(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  const A = e.length,
    t = A / 2;
  if (A % 2)
    throw new Error(
      "padded hex string expected, got unpadded hex of length " + A
    );
  const i = new Uint8Array(t);
  for (let s = 0, u = 0; s < t; s++, u += 2) {
    const f = bi(e.charCodeAt(u)),
      a = bi(e.charCodeAt(u + 1));
    if (f === void 0 || a === void 0) {
      const E = e[u] + e[u + 1];
      throw new Error(
        'hex string expected, got non-hex character "' + E + '" at index ' + u
      );
    }
    i[s] = f * 16 + a;
  }
  return i;
}
function $g(e) {
  return ks(Xn(e));
}
function Br(e) {
  if (!Oe(e)) throw new Error("Uint8Array expected");
  return ks(Xn(Uint8Array.from(e).reverse()));
}
function vs(e, A) {
  return Ls(e.toString(16).padStart(A * 2, "0"));
}
function Rn(e, A) {
  return vs(e, A).reverse();
}
function vt(e, A, t) {
  let i;
  if (typeof A == "string")
    try {
      i = Ls(A);
    } catch (u) {
      throw new Error(`${e} must be valid hex string, got "${A}". Cause: ${u}`);
    }
  else if (Oe(A)) i = Uint8Array.from(A);
  else throw new Error(`${e} must be hex string or Uint8Array`);
  const s = i.length;
  if (typeof t == "number" && s !== t)
    throw new Error(`${e} expected ${t} bytes, got ${s}`);
  return i;
}
function Di(...e) {
  let A = 0;
  for (let s = 0; s < e.length; s++) {
    const u = e[s];
    if (!Oe(u)) throw new Error("Uint8Array expected");
    A += u.length;
  }
  let t = new Uint8Array(A),
    i = 0;
  for (let s = 0; s < e.length; s++) {
    const u = e[s];
    t.set(u, i), (i += u.length);
  }
  return t;
}
const Zg = (e) => (Vg << BigInt(e - 1)) - jg,
  Xg = {
    bigint: (e) => typeof e == "bigint",
    function: (e) => typeof e == "function",
    boolean: (e) => typeof e == "boolean",
    string: (e) => typeof e == "string",
    stringOrUint8Array: (e) => typeof e == "string" || Oe(e),
    isSafeInteger: (e) => Number.isSafeInteger(e),
    array: (e) => Array.isArray(e),
    field: (e, A) => A.Fp.isValid(e),
    hash: (e) => typeof e == "function" && Number.isSafeInteger(e.outputLen),
  };
function Ai(e, A, t = {}) {
  const i = (s, u, f) => {
    const a = Xg[u];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${u}", expected function`);
    const E = e[s];
    if (!(f && E === void 0) && !a(E, e))
      throw new Error(
        `Invalid param ${String(s)}=${E} (${typeof E}), expected ${u}`
      );
  };
  for (const [s, u] of Object.entries(A)) i(s, u, !1);
  for (const [s, u] of Object.entries(t)) i(s, u, !0);
  return e;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const VA =
    BigInt(0),
  HA = BigInt(1),
  ee = BigInt(2),
  Au = BigInt(3),
  Tn = BigInt(4),
  xi = BigInt(5),
  Ni = BigInt(8);
BigInt(9);
BigInt(16);
function qA(e, A) {
  const t = e % A;
  return t >= VA ? t : A + t;
}
function tu(e, A, t) {
  if (t <= VA || A < VA) throw new Error("Expected power/modulo > 0");
  if (t === HA) return VA;
  let i = HA;
  for (; A > VA; ) A & HA && (i = (i * e) % t), (e = (e * e) % t), (A >>= HA);
  return i;
}
function Ct(e, A, t) {
  let i = e;
  for (; A-- > VA; ) (i *= i), (i %= t);
  return i;
}
function _i(e, A) {
  if (e === VA || A <= VA)
    throw new Error(`invert: expected positive integers, got n=${e} mod=${A}`);
  let t = qA(e, A),
    i = A,
    s = VA,
    u = HA;
  for (; t !== VA; ) {
    const a = i / t,
      E = i % t,
      d = s - u * a;
    (i = t), (t = E), (s = u), (u = d);
  }
  if (i !== HA) throw new Error("invert: does not exist");
  return qA(s, A);
}
function eu(e) {
  const A = (e - HA) / ee;
  let t, i, s;
  for (t = e - HA, i = 0; t % ee === VA; t /= ee, i++);
  for (s = ee; s < e && tu(s, A, e) !== e - HA; s++);
  if (i === 1) {
    const f = (e + HA) / Tn;
    return function (E, d) {
      const m = E.pow(d, f);
      if (!E.eql(E.sqr(m), d)) throw new Error("Cannot find square root");
      return m;
    };
  }
  const u = (t + HA) / ee;
  return function (a, E) {
    if (a.pow(E, A) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let d = i,
      m = a.pow(a.mul(a.ONE, s), t),
      N = a.pow(E, u),
      k = a.pow(E, t);
    for (; !a.eql(k, a.ONE); ) {
      if (a.eql(k, a.ZERO)) return a.ZERO;
      let _ = 1;
      for (let L = a.sqr(k); _ < d && !a.eql(L, a.ONE); _++) L = a.sqr(L);
      const G = a.pow(m, HA << BigInt(d - _ - 1));
      (m = a.sqr(G)), (N = a.mul(N, G)), (k = a.mul(k, m)), (d = _);
    }
    return N;
  };
}
function ru(e) {
  if (e % Tn === Au) {
    const A = (e + HA) / Tn;
    return function (i, s) {
      const u = i.pow(s, A);
      if (!i.eql(i.sqr(u), s)) throw new Error("Cannot find square root");
      return u;
    };
  }
  if (e % Ni === xi) {
    const A = (e - xi) / Ni;
    return function (i, s) {
      const u = i.mul(s, ee),
        f = i.pow(u, A),
        a = i.mul(s, f),
        E = i.mul(i.mul(a, ee), f),
        d = i.mul(a, i.sub(E, i.ONE));
      if (!i.eql(i.sqr(d), s)) throw new Error("Cannot find square root");
      return d;
    };
  }
  return eu(e);
}
const nu = (e, A) => (qA(e, A) & HA) === HA,
  iu = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN",
  ];
function ou(e) {
  const A = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger",
    },
    t = iu.reduce((i, s) => ((i[s] = "function"), i), A);
  return Ai(e, t);
}
function su(e, A, t) {
  if (t < VA) throw new Error("Expected power > 0");
  if (t === VA) return e.ONE;
  if (t === HA) return A;
  let i = e.ONE,
    s = A;
  for (; t > VA; ) t & HA && (i = e.mul(i, s)), (s = e.sqr(s)), (t >>= HA);
  return i;
}
function au(e, A) {
  const t = new Array(A.length),
    i = A.reduce(
      (u, f, a) => (e.is0(f) ? u : ((t[a] = u), e.mul(u, f))),
      e.ONE
    ),
    s = e.inv(i);
  return (
    A.reduceRight(
      (u, f, a) => (e.is0(f) ? u : ((t[a] = e.mul(u, t[a])), e.mul(u, f))),
      s
    ),
    t
  );
}
function Hs(e, A) {
  const t = A !== void 0 ? A : e.toString(2).length,
    i = Math.ceil(t / 8);
  return { nBitLength: t, nByteLength: i };
}
function cu(e, A, t = !1, i = {}) {
  if (e <= VA) throw new Error(`Expected Field ORDER > 0, got ${e}`);
  const { nBitLength: s, nByteLength: u } = Hs(e, A);
  if (u > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const f = ru(e),
    a = Object.freeze({
      ORDER: e,
      BITS: s,
      BYTES: u,
      MASK: Zg(s),
      ZERO: VA,
      ONE: HA,
      create: (E) => qA(E, e),
      isValid: (E) => {
        if (typeof E != "bigint")
          throw new Error(
            `Invalid field element: expected bigint, got ${typeof E}`
          );
        return VA <= E && E < e;
      },
      is0: (E) => E === VA,
      isOdd: (E) => (E & HA) === HA,
      neg: (E) => qA(-E, e),
      eql: (E, d) => E === d,
      sqr: (E) => qA(E * E, e),
      add: (E, d) => qA(E + d, e),
      sub: (E, d) => qA(E - d, e),
      mul: (E, d) => qA(E * d, e),
      pow: (E, d) => su(a, E, d),
      div: (E, d) => qA(E * _i(d, e), e),
      sqrN: (E) => E * E,
      addN: (E, d) => E + d,
      subN: (E, d) => E - d,
      mulN: (E, d) => E * d,
      inv: (E) => _i(E, e),
      sqrt: i.sqrt || ((E) => f(a, E)),
      invertBatch: (E) => au(a, E),
      cmov: (E, d, m) => (m ? d : E),
      toBytes: (E) => (t ? Rn(E, u) : vs(E, u)),
      fromBytes: (E) => {
        if (E.length !== u)
          throw new Error(`Fp.fromBytes: expected ${u}, got ${E.length}`);
        return t ? Br(E) : $g(E);
      },
    });
  return Object.freeze(a);
}
function gu(e, A) {
  if (!e.isOdd) throw new Error("Field doesn't have isOdd");
  const t = e.sqrt(A);
  return e.isOdd(t) ? e.neg(t) : t;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const uu =
    BigInt(0),
  en = BigInt(1);
function fu(e, A) {
  const t = (s, u) => {
      const f = u.negate();
      return s ? f : u;
    },
    i = (s) => {
      const u = Math.ceil(A / s) + 1,
        f = 2 ** (s - 1);
      return { windows: u, windowSize: f };
    };
  return {
    constTimeNegate: t,
    unsafeLadder(s, u) {
      let f = e.ZERO,
        a = s;
      for (; u > uu; ) u & en && (f = f.add(a)), (a = a.double()), (u >>= en);
      return f;
    },
    precomputeWindow(s, u) {
      const { windows: f, windowSize: a } = i(u),
        E = [];
      let d = s,
        m = d;
      for (let N = 0; N < f; N++) {
        (m = d), E.push(m);
        for (let k = 1; k < a; k++) (m = m.add(d)), E.push(m);
        d = m.double();
      }
      return E;
    },
    wNAF(s, u, f) {
      const { windows: a, windowSize: E } = i(s);
      let d = e.ZERO,
        m = e.BASE;
      const N = BigInt(2 ** s - 1),
        k = 2 ** s,
        _ = BigInt(s);
      for (let G = 0; G < a; G++) {
        const L = G * E;
        let J = Number(f & N);
        (f >>= _), J > E && ((J -= k), (f += en));
        const X = L,
          z = L + Math.abs(J) - 1,
          q = G % 2 !== 0,
          cA = J < 0;
        J === 0 ? (m = m.add(t(q, u[X]))) : (d = d.add(t(cA, u[z])));
      }
      return { p: d, f: m };
    },
    wNAFCached(s, u, f, a) {
      const E = s._WINDOW_SIZE || 1;
      let d = u.get(s);
      return (
        d || ((d = this.precomputeWindow(s, E)), E !== 1 && u.set(s, a(d))),
        this.wNAF(E, d, f)
      );
    },
  };
}
function Bu(e) {
  return (
    ou(e.Fp),
    Ai(
      e,
      { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
      { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
    ),
    Object.freeze({ ...Hs(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
  );
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const ft =
    BigInt(0),
  rt = BigInt(1),
  er = BigInt(2),
  Iu = BigInt(8),
  hu = { zip215: !0 };
function Eu(e) {
  const A = Bu(e);
  return (
    Ai(
      e,
      { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" },
      {
        adjustScalarBytes: "function",
        domain: "function",
        uvRatio: "function",
        mapToCurve: "function",
      }
    ),
    Object.freeze({ ...A })
  );
}
function ti(e) {
  const A = Eu(e),
    {
      Fp: t,
      n: i,
      prehash: s,
      hash: u,
      randomBytes: f,
      nByteLength: a,
      h: E,
    } = A,
    d = er << (BigInt(a * 8) - rt),
    m = t.create,
    N =
      A.uvRatio ||
      (($, H) => {
        try {
          return { isValid: !0, value: t.sqrt($ * t.inv(H)) };
        } catch {
          return { isValid: !1, value: ft };
        }
      }),
    k = A.adjustScalarBytes || (($) => $),
    _ =
      A.domain ||
      (($, H, oA) => {
        if (H.length || oA)
          throw new Error("Contexts/pre-hash are not supported");
        return $;
      }),
    G = ($) => typeof $ == "bigint" && ft < $,
    L = ($, H) => G($) && G(H) && $ < H,
    J = ($) => $ === ft || L($, d);
  function X($, H) {
    if (L($, H)) return $;
    throw new Error(`Expected valid scalar < ${H}, got ${typeof $} ${$}`);
  }
  function z($) {
    return $ === ft ? $ : X($, i);
  }
  const q = new Map();
  function cA($) {
    if (!($ instanceof P)) throw new Error("ExtendedPoint expected");
  }
  class P {
    constructor(H, oA, v, j) {
      if (((this.ex = H), (this.ey = oA), (this.ez = v), (this.et = j), !J(H)))
        throw new Error("x required");
      if (!J(oA)) throw new Error("y required");
      if (!J(v)) throw new Error("z required");
      if (!J(j)) throw new Error("t required");
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(H) {
      if (H instanceof P) throw new Error("extended point not allowed");
      const { x: oA, y: v } = H || {};
      if (!J(oA) || !J(v)) throw new Error("invalid affine point");
      return new P(oA, v, rt, m(oA * v));
    }
    static normalizeZ(H) {
      const oA = t.invertBatch(H.map((v) => v.ez));
      return H.map((v, j) => v.toAffine(oA[j])).map(P.fromAffine);
    }
    _setWindowSize(H) {
      (this._WINDOW_SIZE = H), q.delete(this);
    }
    assertValidity() {
      const { a: H, d: oA } = A;
      if (this.is0()) throw new Error("bad point: ZERO");
      const { ex: v, ey: j, ez: sA, et: p } = this,
        pA = m(v * v),
        lA = m(j * j),
        yA = m(sA * sA),
        K = m(yA * yA),
        tA = m(pA * H),
        C = m(yA * m(tA + lA)),
        w = m(K + m(oA * m(pA * lA)));
      if (C !== w) throw new Error("bad point: equation left != right (1)");
      const D = m(v * j),
        R = m(sA * p);
      if (D !== R) throw new Error("bad point: equation left != right (2)");
    }
    equals(H) {
      cA(H);
      const { ex: oA, ey: v, ez: j } = this,
        { ex: sA, ey: p, ez: pA } = H,
        lA = m(oA * pA),
        yA = m(sA * j),
        K = m(v * pA),
        tA = m(p * j);
      return lA === yA && K === tA;
    }
    is0() {
      return this.equals(P.ZERO);
    }
    negate() {
      return new P(m(-this.ex), this.ey, this.ez, m(-this.et));
    }
    double() {
      const { a: H } = A,
        { ex: oA, ey: v, ez: j } = this,
        sA = m(oA * oA),
        p = m(v * v),
        pA = m(er * m(j * j)),
        lA = m(H * sA),
        yA = oA + v,
        K = m(m(yA * yA) - sA - p),
        tA = lA + p,
        C = tA - pA,
        w = lA - p,
        D = m(K * C),
        R = m(tA * w),
        F = m(K * w),
        U = m(C * tA);
      return new P(D, R, U, F);
    }
    add(H) {
      cA(H);
      const { a: oA, d: v } = A,
        { ex: j, ey: sA, ez: p, et: pA } = this,
        { ex: lA, ey: yA, ez: K, et: tA } = H;
      if (oA === BigInt(-1)) {
        const T = m((sA - j) * (yA + lA)),
          O = m((sA + j) * (yA - lA)),
          eA = m(O - T);
        if (eA === ft) return this.double();
        const rA = m(p * er * tA),
          hA = m(pA * er * K),
          n = hA + rA,
          r = O + T,
          o = hA - rA,
          B = m(n * eA),
          l = m(r * o),
          y = m(n * o),
          b = m(eA * r);
        return new P(B, l, b, y);
      }
      const C = m(j * lA),
        w = m(sA * yA),
        D = m(pA * v * tA),
        R = m(p * K),
        F = m((j + sA) * (lA + yA) - C - w),
        U = R - D,
        I = R + D,
        c = m(w - oA * C),
        g = m(F * U),
        h = m(I * c),
        Q = m(F * c),
        S = m(U * I);
      return new P(g, h, S, Q);
    }
    subtract(H) {
      return this.add(H.negate());
    }
    wNAF(H) {
      return fA.wNAFCached(this, q, H, P.normalizeZ);
    }
    multiply(H) {
      const { p: oA, f: v } = this.wNAF(X(H, i));
      return P.normalizeZ([oA, v])[0];
    }
    multiplyUnsafe(H) {
      let oA = z(H);
      return oA === ft
        ? iA
        : this.equals(iA) || oA === rt
        ? this
        : this.equals(W)
        ? this.wNAF(oA).p
        : fA.unsafeLadder(this, oA);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(E).is0();
    }
    isTorsionFree() {
      return fA.unsafeLadder(this, i).is0();
    }
    toAffine(H) {
      const { ex: oA, ey: v, ez: j } = this,
        sA = this.is0();
      H == null && (H = sA ? Iu : t.inv(j));
      const p = m(oA * H),
        pA = m(v * H),
        lA = m(j * H);
      if (sA) return { x: ft, y: rt };
      if (lA !== rt) throw new Error("invZ was invalid");
      return { x: p, y: pA };
    }
    clearCofactor() {
      const { h: H } = A;
      return H === rt ? this : this.multiplyUnsafe(H);
    }
    static fromHex(H, oA = !1) {
      const { d: v, a: j } = A,
        sA = t.BYTES;
      H = vt("pointHex", H, sA);
      const p = H.slice(),
        pA = H[sA - 1];
      p[sA - 1] = pA & -129;
      const lA = Br(p);
      lA === ft || (oA ? X(lA, d) : X(lA, t.ORDER));
      const yA = m(lA * lA),
        K = m(yA - rt),
        tA = m(v * yA - j);
      let { isValid: C, value: w } = N(K, tA);
      if (!C) throw new Error("Point.fromHex: invalid y coordinate");
      const D = (w & rt) === rt,
        R = (pA & 128) !== 0;
      if (!oA && w === ft && R) throw new Error("Point.fromHex: x=0 and x_0=1");
      return R !== D && (w = m(-w)), P.fromAffine({ x: w, y: lA });
    }
    static fromPrivateKey(H) {
      return SA(H).point;
    }
    toRawBytes() {
      const { x: H, y: oA } = this.toAffine(),
        v = Rn(oA, t.BYTES);
      return (v[v.length - 1] |= H & rt ? 128 : 0), v;
    }
    toHex() {
      return Xn(this.toRawBytes());
    }
  }
  (P.BASE = new P(A.Gx, A.Gy, rt, m(A.Gx * A.Gy))),
    (P.ZERO = new P(ft, rt, rt, ft));
  const { BASE: W, ZERO: iA } = P,
    fA = fu(P, a * 8);
  function EA($) {
    return qA($, i);
  }
  function Y($) {
    return EA(Br($));
  }
  function SA($) {
    const H = a;
    $ = vt("private key", $, H);
    const oA = vt("hashed private key", u($), 2 * H),
      v = k(oA.slice(0, H)),
      j = oA.slice(H, 2 * H),
      sA = Y(v),
      p = W.multiply(sA),
      pA = p.toRawBytes();
    return { head: v, prefix: j, scalar: sA, point: p, pointBytes: pA };
  }
  function dA($) {
    return SA($).pointBytes;
  }
  function QA($ = new Uint8Array(), ...H) {
    const oA = Di(...H);
    return Y(u(_(oA, vt("context", $), !!s)));
  }
  function FA($, H, oA = {}) {
    ($ = vt("message", $)), s && ($ = s($));
    const { prefix: v, scalar: j, pointBytes: sA } = SA(H),
      p = QA(oA.context, v, $),
      pA = W.multiply(p).toRawBytes(),
      lA = QA(oA.context, pA, sA, $),
      yA = EA(p + lA * j);
    z(yA);
    const K = Di(pA, Rn(yA, t.BYTES));
    return vt("result", K, a * 2);
  }
  const _A = hu;
  function YA($, H, oA, v = _A) {
    const { context: j, zip215: sA } = v,
      p = t.BYTES;
    ($ = vt("signature", $, 2 * p)), (H = vt("message", H)), s && (H = s(H));
    const pA = Br($.slice(p, 2 * p));
    let lA, yA, K;
    try {
      (lA = P.fromHex(oA, sA)),
        (yA = P.fromHex($.slice(0, p), sA)),
        (K = W.multiplyUnsafe(pA));
    } catch {
      return !1;
    }
    if (!sA && lA.isSmallOrder()) return !1;
    const tA = QA(j, yA.toRawBytes(), lA.toRawBytes(), H);
    return yA
      .add(lA.multiplyUnsafe(tA))
      .subtract(K)
      .clearCofactor()
      .equals(P.ZERO);
  }
  return (
    W._setWindowSize(8),
    {
      CURVE: A,
      getPublicKey: dA,
      sign: FA,
      verify: YA,
      ExtendedPoint: P,
      utils: {
        getExtendedPublicKey: SA,
        randomPrivateKey: () => f(t.BYTES),
        precompute($ = 8, H = P.BASE) {
          return H._setWindowSize($), H.multiply(BigInt(3)), H;
        },
      },
    }
  );
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const ei =
    BigInt(
      "57896044618658097711785492504343953926634992332820282019728792003956564819949"
    ),
  Fi = BigInt(
    "19681161376707505956807079304988542015446066515923890162744021073123829784752"
  );
BigInt(0);
const lu = BigInt(1),
  Un = BigInt(2),
  Qu = BigInt(5),
  Ri = BigInt(10),
  Cu = BigInt(20),
  du = BigInt(40),
  Ti = BigInt(80);
function pu(e) {
  const A = ei,
    i = (((e * e) % A) * e) % A,
    s = (Ct(i, Un, A) * i) % A,
    u = (Ct(s, lu, A) * e) % A,
    f = (Ct(u, Qu, A) * u) % A,
    a = (Ct(f, Ri, A) * f) % A,
    E = (Ct(a, Cu, A) * a) % A,
    d = (Ct(E, du, A) * E) % A,
    m = (Ct(d, Ti, A) * d) % A,
    N = (Ct(m, Ti, A) * d) % A,
    k = (Ct(N, Ri, A) * f) % A;
  return { pow_p_5_8: (Ct(k, Un, A) * e) % A, b2: i };
}
function wu(e) {
  return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
}
function yu(e, A) {
  const t = ei,
    i = qA(A * A * A, t),
    s = qA(i * i * A, t),
    u = pu(e * s).pow_p_5_8;
  let f = qA(e * i * u, t);
  const a = qA(A * f * f, t),
    E = f,
    d = qA(f * Fi, t),
    m = a === e,
    N = a === qA(-e, t),
    k = a === qA(-e * Fi, t);
  return (
    m && (f = E),
    (N || k) && (f = d),
    nu(f, t) && (f = qA(-f, t)),
    { isValid: m || N, value: f }
  );
}
const Ft = cu(ei, void 0, !0),
  ri = {
    a: BigInt(-1),
    d: BigInt(
      "37095705934669439343138083508754565189542113879843219016388785533085940283555"
    ),
    Fp: Ft,
    n: BigInt(
      "7237005577332262213973186563042994240857116359379907606001950938285454250989"
    ),
    h: BigInt(8),
    Gx: BigInt(
      "15112221349535400772501151409588531511454012693041857206046113283949847762202"
    ),
    Gy: BigInt(
      "46316835694926478169428394003475163141307993866256225615783033603165251855960"
    ),
    hash: Gs,
    randomBytes: La,
    adjustScalarBytes: wu,
    uvRatio: yu,
  },
  ce = ti(ri);
function Os(e, A, t) {
  if (A.length > 255) throw new Error("Context is too big");
  return Ga(
    co("SigEd25519 no Ed25519 collisions"),
    new Uint8Array([t ? 1 : 0, A.length]),
    A,
    e
  );
}
({ ...ri });
({ ...ri });
const mu = (Ft.ORDER + BigInt(3)) / BigInt(8);
Ft.pow(Un, mu);
Ft.sqrt(Ft.neg(Ft.ONE));
(Ft.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
gu(Ft, Ft.neg(BigInt(486664)));
BigInt(
  "25063068953384623474111414158702152701244531502492656460079210482610430750235"
);
BigInt(
  "54469307008909316920995813868745141605393597292927456921205312896311721017578"
);
BigInt(
  "1159843021668779879193775521855586647937357759715417654439879720876111806838"
);
BigInt(
  "40440834346308536858101042469323190826248399146238708352240133220865137265952"
);
BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
var Ui =
    (globalThis && globalThis.__classPrivateFieldSet) ||
    function (e, A, t, i, s) {
      if (i === "m") throw new TypeError("Private method is not writable");
      if (i === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof A == "function" ? e !== A || !s : !A.has(e))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return i === "a" ? s.call(e, t) : s ? (s.value = t) : A.set(e, t), t;
    },
  At =
    (globalThis && globalThis.__classPrivateFieldGet) ||
    function (e, A, t, i) {
      if (t === "a" && !i)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof A == "function" ? e !== A || !i : !A.has(e))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return t === "m" ? i : t === "a" ? i.call(e) : i ? i.value : A.get(e);
    },
  $A,
  De,
  Ys,
  qs;
class Su {
  constructor(A = {}) {
    $A.set(this, void 0),
      De.set(this, void 0),
      (this[Ys] = this.entries.bind(this)),
      (this[qs] = "ExpirableMap");
    const { source: t = [], expirationTime: i = 10 * 60 * 1e3 } = A,
      s = Date.now();
    Ui(
      this,
      $A,
      new Map([...t].map(([u, f]) => [u, { value: f, timestamp: s }])),
      "f"
    ),
      Ui(this, De, i, "f");
  }
  prune() {
    const A = Date.now();
    for (const [t, i] of At(this, $A, "f").entries())
      A - i.timestamp > At(this, De, "f") && At(this, $A, "f").delete(t);
    return this;
  }
  set(A, t) {
    this.prune();
    const i = { value: t, timestamp: Date.now() };
    return At(this, $A, "f").set(A, i), this;
  }
  get(A) {
    const t = At(this, $A, "f").get(A);
    if (t !== void 0) {
      if (Date.now() - t.timestamp > At(this, De, "f")) {
        At(this, $A, "f").delete(A);
        return;
      }
      return t.value;
    }
  }
  clear() {
    At(this, $A, "f").clear();
  }
  entries() {
    const A = At(this, $A, "f").entries();
    return (function* () {
      for (const [i, s] of A) yield [i, s.value];
    })();
  }
  values() {
    const A = At(this, $A, "f").values();
    return (function* () {
      for (const i of A) yield i.value;
    })();
  }
  keys() {
    return At(this, $A, "f").keys();
  }
  forEach(A, t) {
    for (const [i, s] of At(this, $A, "f").entries())
      A.call(t, s.value, i, this);
  }
  has(A) {
    return At(this, $A, "f").has(A);
  }
  delete(A) {
    return At(this, $A, "f").delete(A);
  }
  get size() {
    return At(this, $A, "f").size;
  }
}
($A = new WeakMap()),
  (De = new WeakMap()),
  (Ys = Symbol.iterator),
  (qs = Symbol.toStringTag);
const Mi = (e) => {
    if (e <= 127) return 1;
    if (e <= 255) return 2;
    if (e <= 65535) return 3;
    if (e <= 16777215) return 4;
    throw new Error("Length too long (> 4 bytes)");
  },
  Gi = (e, A, t) => {
    if (t <= 127) return (e[A] = t), 1;
    if (t <= 255) return (e[A] = 129), (e[A + 1] = t), 2;
    if (t <= 65535) return (e[A] = 130), (e[A + 1] = t >> 8), (e[A + 2] = t), 3;
    if (t <= 16777215)
      return (
        (e[A] = 131),
        (e[A + 1] = t >> 16),
        (e[A + 2] = t >> 8),
        (e[A + 3] = t),
        4
      );
    throw new Error("Length too long (> 4 bytes)");
  },
  Mn = (e, A) => {
    if (e[A] < 128) return 1;
    if (e[A] === 128) throw new Error("Invalid length 0");
    if (e[A] === 129) return 2;
    if (e[A] === 130) return 3;
    if (e[A] === 131) return 4;
    throw new Error("Length too long (> 4 bytes)");
  },
  bu = (e, A) => {
    const t = Mn(e, A);
    if (t === 1) return e[A];
    if (t === 2) return e[A + 1];
    if (t === 3) return (e[A + 1] << 8) + e[A + 2];
    if (t === 4) return (e[A + 1] << 16) + (e[A + 2] << 8) + e[A + 3];
    throw new Error("Length too long (> 4 bytes)");
  };
Uint8Array.from([48, 12, 6, 10, 43, 6, 1, 4, 1, 131, 184, 67, 1, 1]);
const Dr = Uint8Array.from([48, 5, 6, 3, 43, 101, 112]);
Uint8Array.from([
  48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 10,
]);
function Js(e, A) {
  const t = 2 + Mi(e.byteLength + 1),
    i = A.byteLength + t + e.byteLength;
  let s = 0;
  const u = new Uint8Array(1 + Mi(i) + i);
  return (
    (u[s++] = 48),
    (s += Gi(u, s, i)),
    u.set(A, s),
    (s += A.byteLength),
    (u[s++] = 3),
    (s += Gi(u, s, e.byteLength + 1)),
    (u[s++] = 0),
    u.set(new Uint8Array(e), s),
    u
  );
}
const Ks = (e, A) => {
  let t = 0;
  const i = (a, E) => {
      if (s[t++] !== a) throw new Error("Expected: " + E);
    },
    s = new Uint8Array(e);
  if (
    (i(48, "sequence"), (t += Mn(s, t)), !vc(s.slice(t, t + A.byteLength), A))
  )
    throw new Error("Not the expected OID.");
  (t += A.byteLength), i(3, "bit string");
  const u = bu(s, t) - 1;
  (t += Mn(s, t)), i(0, "0 padding");
  const f = s.slice(t);
  if (u !== f.length)
    throw new Error(
      `DER payload mismatch: Expected length ${u} actual length ${f.length}`
    );
  return f;
};
var ki =
    (globalThis && globalThis.__classPrivateFieldSet) ||
    function (e, A, t, i, s) {
      if (i === "m") throw new TypeError("Private method is not writable");
      if (i === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof A == "function" ? e !== A || !s : !A.has(e))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return i === "a" ? s.call(e, t) : s ? (s.value = t) : A.set(e, t), t;
    },
  Li =
    (globalThis && globalThis.__classPrivateFieldGet) ||
    function (e, A, t, i) {
      if (t === "a" && !i)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof A == "function" ? e !== A || !i : !A.has(e))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return t === "m" ? i : t === "a" ? i.call(e) : i ? i.value : A.get(e);
    },
  Ir,
  hr;
let Ps = class xe {
  constructor(A) {
    if (
      (Ir.set(this, void 0),
      hr.set(this, void 0),
      A.byteLength !== xe.RAW_KEY_LENGTH)
    )
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    ki(this, Ir, A, "f"), ki(this, hr, xe.derEncode(A), "f");
  }
  static from(A) {
    return this.fromDer(A.toDer());
  }
  static fromRaw(A) {
    return new xe(A);
  }
  static fromDer(A) {
    return new xe(this.derDecode(A));
  }
  static derEncode(A) {
    return Js(A, Dr).buffer;
  }
  static derDecode(A) {
    const t = Ks(A, Dr);
    if (t.length !== this.RAW_KEY_LENGTH)
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    return t;
  }
  get rawKey() {
    return Li(this, Ir, "f");
  }
  get derKey() {
    return Li(this, hr, "f");
  }
  toDer() {
    return this.derKey;
  }
  toRaw() {
    return this.rawKey;
  }
};
(Ir = new WeakMap()), (hr = new WeakMap());
Ps.RAW_KEY_LENGTH = 32;
var Du =
    (globalThis && globalThis.__classPrivateFieldSet) ||
    function (e, A, t, i, s) {
      if (i === "m") throw new TypeError("Private method is not writable");
      if (i === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof A == "function" ? e !== A || !s : !A.has(e))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return i === "a" ? s.call(e, t) : s ? (s.value = t) : A.set(e, t), t;
    },
  WA =
    (globalThis && globalThis.__classPrivateFieldGet) ||
    function (e, A, t, i) {
      if (t === "a" && !i)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof A == "function" ? e !== A || !i : !A.has(e))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return t === "m" ? i : t === "a" ? i.call(e) : i ? i.value : A.get(e);
    },
  ge,
  ue,
  Ae,
  fe,
  Er,
  Dt;
(function (e) {
  (e.Received = "received"),
    (e.Processing = "processing"),
    (e.Replied = "replied"),
    (e.Rejected = "rejected"),
    (e.Unknown = "unknown"),
    (e.Done = "done");
})(Dt || (Dt = {}));
const rr = 5 * 60 * 1e3,
  xu =
    "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae",
  Nu = "ic0.app",
  _u = ".ic0.app",
  Fu = "icp0.io",
  Ru = ".icp0.io",
  Tu = "icp-api.io",
  Uu = ".icp-api.io";
class rn extends Rt {
  constructor(A) {
    super(A), (this.message = A);
  }
}
class nr extends Rt {
  constructor(A) {
    super(A), (this.message = A);
  }
}
function Mu() {
  let e;
  if (typeof window < "u")
    if (window.fetch) e = window.fetch.bind(window);
    else
      throw new rn(
        "Fetch implementation was not available. You appear to be in a browser context, but window.fetch was not present."
      );
  else if (typeof global < "u")
    if (global.fetch) e = global.fetch.bind(global);
    else
      throw new rn(
        "Fetch implementation was not available. You appear to be in a Node.js context, but global.fetch was not available."
      );
  else typeof self < "u" && self.fetch && (e = self.fetch.bind(self));
  if (e) return e;
  throw new rn(
    "Fetch implementation was not available. Please provide fetch to the HttpAgent constructor, or ensure it is available in the window or global context."
  );
}
class ni {
  constructor(A = {}) {
    if (
      ((this.rootKey = Vt(xu)),
      (this._timeDiffMsecs = 0),
      (this._rootKeyFetched = !1),
      (this._isAgent = !0),
      ge.set(this, []),
      ue.set(this, []),
      Ae.set(this, new Su({ expirationTime: 5 * 60 * 1e3 })),
      fe.set(this, !0),
      Er.set(this, (t, i) => {
        if (WA(this, fe, "f") === !1) return t;
        if (!i)
          throw new xt(
            "Invalid signature from replica signed query: no matching node key found."
          );
        const { status: s, signatures: u = [], requestId: f } = t,
          a = new TextEncoder().encode("\vic-response");
        for (const E of u) {
          const { timestamp: d, identity: m } = E,
            N = xA.fromUint8Array(m).toText();
          let k;
          if (s === "replied") {
            const { reply: X } = t;
            k = mr({
              status: s,
              reply: X,
              timestamp: BigInt(d),
              request_id: f,
            });
          } else if (s === "rejected") {
            const { reject_code: X, reject_message: z, error_code: q } = t;
            k = mr({
              status: s,
              reject_code: X,
              reject_message: z,
              error_code: q,
              timestamp: BigInt(d),
              request_id: f,
            });
          } else throw new Error(`Unknown status: ${s}`);
          const _ = ht(a, new Uint8Array(k)),
            G = i?.nodeKeys.get(N);
          if (!G)
            throw new xt(
              "Invalid signature from replica signed query: no matching node key found."
            );
          const L = Ps.fromDer(G).rawKey;
          if (ce.verify(E.signature, new Uint8Array(_), new Uint8Array(L)))
            return t;
          throw new xt(`Invalid signature from replica ${N} signed query.`);
        }
        return t;
      }),
      A.source)
    ) {
      if (!(A.source instanceof ni))
        throw new Error("An Agent's source can only be another HttpAgent");
      (this._identity = A.source._identity),
        (this._fetch = A.source._fetch),
        (this._host = A.source._host),
        (this._credentials = A.source._credentials);
    } else
      (this._fetch = A.fetch || Mu() || fetch.bind(global)),
        (this._fetchOptions = A.fetchOptions),
        (this._callOptions = A.callOptions);
    if (A.host !== void 0)
      !A.host.match(/^[a-z]+:/) && typeof window < "u"
        ? (this._host = new URL(window.location.protocol + "//" + A.host))
        : (this._host = new URL(A.host));
    else if (A.source !== void 0) this._host = A.source._host;
    else {
      const t = typeof window < "u" ? window.location : void 0;
      t ||
        ((this._host = new URL("https://icp-api.io")),
        console.warn(
          "Could not infer host from window.location, defaulting to mainnet gateway of https://icp-api.io. Please provide a host to the HttpAgent constructor to avoid this warning."
        ));
      const i = ["ic0.app", "icp0.io", "127.0.0.1", "localhost"],
        s = t?.hostname;
      let u;
      s && typeof s == "string" && (u = i.find((f) => s.endsWith(f))),
        t && u
          ? (this._host = new URL(
              `${t.protocol}//${u}${t.port ? ":" + t.port : ""}`
            ))
          : ((this._host = new URL("https://icp-api.io")),
            console.warn(
              "Could not infer host from window.location, defaulting to mainnet gateway of https://icp-api.io. Please provide a host to the HttpAgent constructor to avoid this warning."
            ));
    }
    if (
      (A.verifyQuerySignatures !== void 0 &&
        Du(this, fe, A.verifyQuerySignatures, "f"),
      (this._retryTimes =
        A.retryTimes !== void 0 && A.retryTimes >= 0 ? A.retryTimes : 3),
      this._host.hostname.endsWith(_u)
        ? (this._host.hostname = Nu)
        : this._host.hostname.endsWith(Ru)
        ? (this._host.hostname = Fu)
        : this._host.hostname.endsWith(Uu) && (this._host.hostname = Tu),
      A.credentials)
    ) {
      const { name: t, password: i } = A.credentials;
      this._credentials = `${t}${i ? ":" + i : ""}`;
    }
    (this._identity = Promise.resolve(A.identity || new Sr())),
      this.addTransform("update", mi(Nn)),
      A.useQueryNonces && this.addTransform("query", mi(Nn));
  }
  isLocal() {
    const A = this._host.hostname;
    return A === "127.0.0.1" || A.endsWith("127.0.0.1");
  }
  addTransform(A, t, i = t.priority || 0) {
    if (A === "update") {
      const s = WA(this, ue, "f").findIndex((u) => (u.priority || 0) < i);
      WA(this, ue, "f").splice(
        s >= 0 ? s : WA(this, ue, "f").length,
        0,
        Object.assign(t, { priority: i })
      );
    } else if (A === "query") {
      const s = WA(this, ge, "f").findIndex((u) => (u.priority || 0) < i);
      WA(this, ge, "f").splice(
        s >= 0 ? s : WA(this, ge, "f").length,
        0,
        Object.assign(t, { priority: i })
      );
    }
  }
  async getPrincipal() {
    if (!this._identity)
      throw new nr(
        "This identity has expired due this application's security policy. Please refresh your authentication."
      );
    return (await this._identity).getPrincipal();
  }
  async call(A, t, i) {
    const s = await (i !== void 0 ? await i : await this._identity);
    if (!s)
      throw new nr(
        "This identity has expired due this application's security policy. Please refresh your authentication."
      );
    const u = xA.from(A),
      f = t.effectiveCanisterId ? xA.from(t.effectiveCanisterId) : u,
      a = s.getPrincipal() || xA.anonymous();
    let E = new Xe(rr);
    Math.abs(this._timeDiffMsecs) > 1e3 * 30 &&
      (E = new Xe(rr + this._timeDiffMsecs));
    const d = {
      request_type: xn.Call,
      canister_id: u,
      method_name: t.methodName,
      arg: t.arg,
      sender: a,
      ingress_expiry: E,
    };
    let m = await this._transform({
      request: {
        body: null,
        method: "POST",
        headers: Object.assign(
          { "Content-Type": "application/cbor" },
          this._credentials
            ? { Authorization: "Basic " + btoa(this._credentials) }
            : {}
        ),
      },
      endpoint: "call",
      body: d,
    });
    m = await s.transformRequest(m);
    const N = Zr(m.body),
      k = this._requestAndRetry(() =>
        this._fetch(
          "" + new URL(`/api/v2/canister/${f.toText()}/call`, this._host),
          Object.assign(
            Object.assign(Object.assign({}, this._callOptions), m.request),
            { body: N }
          )
        )
      ),
      [_, G] = await Promise.all([k, Fe(d)]),
      L = await _.arrayBuffer(),
      J = _.status === 200 && L.byteLength > 0 ? Pt(L) : null;
    return {
      requestId: G,
      response: {
        ok: _.ok,
        status: _.status,
        statusText: _.statusText,
        body: J,
        headers: Xr(_.headers),
      },
    };
  }
  async _requestAndRetry(A, t = 0) {
    let i;
    try {
      i = await A();
    } catch (f) {
      if (this._retryTimes > t)
        return (
          console.warn(`Caught exception while attempting to make request:
  ${f}
  Retrying request.`),
          await this._requestAndRetry(A, t + 1)
        );
      throw f;
    }
    if (i.ok) return i;
    const s = await i.clone().text(),
      u = `Server returned an error:
  Code: ${i.status} (${i.statusText})
  Body: ${s}
`;
    if (this._retryTimes > t)
      return (
        console.warn(u + "  Retrying request."),
        await this._requestAndRetry(A, t + 1)
      );
    throw new cg(u, {
      ok: i.ok,
      status: i.status,
      statusText: i.statusText,
      headers: Xr(i.headers),
    });
  }
  async query(A, t, i) {
    const s = async () => {
        const E = await (i !== void 0 ? await i : await this._identity);
        if (!E)
          throw new nr(
            "This identity has expired due this application's security policy. Please refresh your authentication."
          );
        const d = xA.from(A),
          m = E?.getPrincipal() || xA.anonymous(),
          N = {
            request_type: "query",
            canister_id: d,
            method_name: t.methodName,
            arg: t.arg,
            sender: m,
            ingress_expiry: new Xe(rr),
          },
          k = await Fe(N);
        let _ = await this._transform({
          request: {
            method: "POST",
            headers: Object.assign(
              { "Content-Type": "application/cbor" },
              this._credentials
                ? { Authorization: "Basic " + btoa(this._credentials) }
                : {}
            ),
          },
          endpoint: "read",
          body: N,
        });
        _ = await E?.transformRequest(_);
        const G = Zr(_.body),
          L = await this._requestAndRetry(() =>
            this._fetch(
              "" + new URL(`/api/v2/canister/${d.toText()}/query`, this._host),
              Object.assign(
                Object.assign(Object.assign({}, this._fetchOptions), _.request),
                { body: G }
              )
            )
          ),
          J = Pt(await L.arrayBuffer());
        return Object.assign(Object.assign({}, J), {
          httpDetails: {
            ok: L.ok,
            status: L.status,
            statusText: L.statusText,
            headers: Xr(L.headers),
          },
          requestId: k,
        });
      },
      u = async () => {
        if (!WA(this, fe, "f")) return;
        const E = WA(this, Ae, "f").get(A.toString());
        return (
          E ||
          (await this.fetchSubnetKeys(A.toString()),
          WA(this, Ae, "f").get(A.toString()))
        );
      },
      [f, a] = await Promise.all([s(), u()]);
    if (!WA(this, fe, "f")) return f;
    try {
      return WA(this, Er, "f").call(this, f, a);
    } catch {
      console.warn(
        "Query response verification failed. Retrying with fresh subnet keys."
      ),
        WA(this, Ae, "f").delete(A.toString()),
        await this.fetchSubnetKeys(A.toString());
      const d = WA(this, Ae, "f").get(A.toString());
      if (!d)
        throw new xt(
          "Invalid signature from replica signed query: no matching node key found."
        );
      return WA(this, Er, "f").call(this, f, d);
    }
  }
  async createReadStateRequest(A, t) {
    const i = await (t !== void 0 ? await t : await this._identity);
    if (!i)
      throw new nr(
        "This identity has expired due this application's security policy. Please refresh your authentication."
      );
    const s = i?.getPrincipal() || xA.anonymous(),
      u = await this._transform({
        request: {
          method: "POST",
          headers: Object.assign(
            { "Content-Type": "application/cbor" },
            this._credentials
              ? { Authorization: "Basic " + btoa(this._credentials) }
              : {}
          ),
        },
        endpoint: "read_state",
        body: {
          request_type: "read_state",
          paths: A.paths,
          sender: s,
          ingress_expiry: new Xe(rr),
        },
      });
    return i?.transformRequest(u);
  }
  async readState(A, t, i, s) {
    const u = typeof A == "string" ? xA.fromText(A) : A,
      f = s ?? (await this.createReadStateRequest(t, i)),
      a = Zr(f.body),
      E = await this._requestAndRetry(() =>
        this._fetch(
          "" + new URL(`/api/v2/canister/${u}/read_state`, this._host),
          Object.assign(
            Object.assign(Object.assign({}, this._fetchOptions), f.request),
            { body: a }
          )
        )
      );
    if (!E.ok)
      throw new Error(`Server returned an error:
  Code: ${E.status} (${E.statusText})
  Body: ${await E.text()}
`);
    return Pt(await E.arrayBuffer());
  }
  async syncTime(A) {
    const t = await oo(
        () => Promise.resolve().then(() => wg),
        void 0,
        import.meta.url
      ),
      i = Date.now();
    try {
      A ||
        console.log(
          "Syncing time with the IC. No canisterId provided, so falling back to ryjl3-tyaaa-aaaaa-aaaba-cai"
        );
      const u = (
        await t.request({
          canisterId: A ?? xA.from("ryjl3-tyaaa-aaaaa-aaaba-cai"),
          agent: this,
          paths: ["time"],
        })
      ).get("time");
      u && (this._timeDiffMsecs = Number(u) - Number(i));
    } catch (s) {
      console.error("Caught exception while attempting to sync time:", s);
    }
  }
  async status() {
    const A = this._credentials
        ? { Authorization: "Basic " + btoa(this._credentials) }
        : {},
      t = await this._requestAndRetry(() =>
        this._fetch(
          "" + new URL("/api/v2/status", this._host),
          Object.assign({ headers: A }, this._fetchOptions)
        )
      );
    return Pt(await t.arrayBuffer());
  }
  async fetchRootKey() {
    return (
      this._rootKeyFetched ||
        ((this.rootKey = (await this.status()).root_key),
        (this._rootKeyFetched = !0)),
      this.rootKey
    );
  }
  invalidateIdentity() {
    this._identity = null;
  }
  replaceIdentity(A) {
    this._identity = Promise.resolve(A);
  }
  async fetchSubnetKeys(A) {
    const t = xA.from(A),
      s = (await Rs({ canisterId: t, paths: ["subnet"], agent: this })).get(
        "subnet"
      );
    if (s && typeof s == "object" && "nodeKeys" in s)
      return WA(this, Ae, "f").set(t.toText(), s), s;
  }
  _transform(A) {
    let t = Promise.resolve(A);
    if (A.endpoint === "call")
      for (const i of WA(this, ue, "f"))
        t = t.then((s) => i(s).then((u) => u || s));
    else
      for (const i of WA(this, ge, "f"))
        t = t.then((s) => i(s).then((u) => u || s));
    return t;
  }
}
(ge = new WeakMap()),
  (ue = new WeakMap()),
  (Ae = new WeakMap()),
  (fe = new WeakMap()),
  (Er = new WeakMap());
var vi;
(function (e) {
  (e.Error = "err"),
    (e.GetPrincipal = "gp"),
    (e.GetPrincipalResponse = "gpr"),
    (e.Query = "q"),
    (e.QueryResponse = "qr"),
    (e.Call = "c"),
    (e.CallResponse = "cr"),
    (e.ReadState = "rs"),
    (e.ReadStateResponse = "rsr"),
    (e.Status = "s"),
    (e.StatusResponse = "sr");
})(vi || (vi = {}));
function Hi() {
  const e =
    typeof window > "u"
      ? typeof global > "u"
        ? typeof self > "u"
          ? void 0
          : self.ic.agent
        : global.ic.agent
      : window.ic.agent;
  if (!e) throw new Error("No Agent could be found.");
  return e;
}
const Gu = 5 * 60 * 1e3;
function ku() {
  return Yu(vu(Lu(), 1e3), Ou(1e3, 1.2), Hu(Gu));
}
function Lu() {
  let e = !0;
  return async () => (e ? ((e = !1), !0) : !1);
}
function vu(e, A) {
  return async (t, i, s) => {
    if (await e(t, i, s)) return new Promise((u) => setTimeout(u, A));
  };
}
function Hu(e) {
  const A = Date.now() + e;
  return async (t, i, s) => {
    if (Date.now() > A)
      throw new Error(`Request timed out after ${e} msec:
  Request ID: ${it(i)}
  Request status: ${s}
`);
  };
}
function Ou(e, A) {
  let t = e;
  return () =>
    new Promise((i) =>
      setTimeout(() => {
        (t *= A), i();
      }, t)
    );
}
function Yu(...e) {
  return async (A, t, i) => {
    for (const s of e) await s(A, t, i);
  };
}
async function Ws(e, A, t, i, s, u) {
  var f;
  const a = [new TextEncoder().encode("request_status"), t],
    E =
      s ??
      (await ((f = e.createReadStateRequest) === null || f === void 0
        ? void 0
        : f.call(e, { paths: [a] }))),
    d = await e.readState(A, { paths: [a] }, void 0, E);
  if (e.rootKey == null)
    throw new Error("Agent root key not initialized before polling");
  const m = await Re.create({
      certificate: d.certificate,
      rootKey: e.rootKey,
      canisterId: A,
      blsVerify: u,
    }),
    N = m.lookup([...a, new TextEncoder().encode("status")]);
  let k;
  switch (
    (typeof N > "u" ? (k = Dt.Unknown) : (k = new TextDecoder().decode(N)), k)
  ) {
    case Dt.Replied:
      return m.lookup([...a, "reply"]);
    case Dt.Received:
    case Dt.Unknown:
    case Dt.Processing:
      return await i(A, t, k), Ws(e, A, t, i, E);
    case Dt.Rejected: {
      const _ = new Uint8Array(m.lookup([...a, "reject_code"]))[0],
        G = new TextDecoder().decode(m.lookup([...a, "reject_message"]));
      throw new Error(`Call was rejected:
  Request ID: ${it(t)}
  Reject code: ${_}
  Reject text: ${G}
`);
    }
    case Dt.Done:
      throw new Error(`Call was marked as done but we never saw the reply:
  Request ID: ${it(t)}
`);
  }
  throw new Error("unreachable");
}
const qu = ({ IDL: e }) => {
  const A = e.Principal,
    t = e.Record({
      controllers: e.Vec(e.Principal),
      freezing_threshold: e.Nat,
      memory_allocation: e.Nat,
      compute_allocation: e.Nat,
    }),
    i = e.Record({
      controllers: e.Opt(e.Vec(e.Principal)),
      freezing_threshold: e.Opt(e.Nat),
      memory_allocation: e.Opt(e.Nat),
      compute_allocation: e.Opt(e.Nat),
    }),
    s = e.Vec(e.Nat8);
  return e.Service({
    canister_status: e.Func(
      [e.Record({ canister_id: A })],
      [
        e.Record({
          status: e.Variant({
            stopped: e.Null,
            stopping: e.Null,
            running: e.Null,
          }),
          memory_size: e.Nat,
          cycles: e.Nat,
          settings: t,
          module_hash: e.Opt(e.Vec(e.Nat8)),
        }),
      ],
      []
    ),
    create_canister: e.Func(
      [e.Record({ settings: e.Opt(i) })],
      [e.Record({ canister_id: A })],
      []
    ),
    delete_canister: e.Func([e.Record({ canister_id: A })], [], []),
    deposit_cycles: e.Func([e.Record({ canister_id: A })], [], []),
    install_code: e.Func(
      [
        e.Record({
          arg: e.Vec(e.Nat8),
          wasm_module: s,
          mode: e.Variant({
            reinstall: e.Null,
            upgrade: e.Null,
            install: e.Null,
          }),
          canister_id: A,
        }),
      ],
      [],
      []
    ),
    provisional_create_canister_with_cycles: e.Func(
      [e.Record({ settings: e.Opt(i), amount: e.Opt(e.Nat) })],
      [e.Record({ canister_id: A })],
      []
    ),
    provisional_top_up_canister: e.Func(
      [e.Record({ canister_id: A, amount: e.Nat })],
      [],
      []
    ),
    raw_rand: e.Func([], [e.Vec(e.Nat8)], []),
    start_canister: e.Func([e.Record({ canister_id: A })], [], []),
    stop_canister: e.Func([e.Record({ canister_id: A })], [], []),
    uninstall_code: e.Func([e.Record({ canister_id: A })], [], []),
    update_settings: e.Func(
      [e.Record({ canister_id: e.Principal, settings: i })],
      [],
      []
    ),
  });
};
class js extends Rt {
  constructor(A, t, i, s) {
    super(
      [
        "Call failed:",
        `  Canister: ${A.toText()}`,
        `  Method: ${t} (${i})`,
        ...Object.getOwnPropertyNames(s).map(
          (u) => `  "${u}": ${JSON.stringify(s[u])}`
        ),
      ].join(`
`)
    ),
      (this.canisterId = A),
      (this.methodName = t),
      (this.type = i),
      (this.props = s);
  }
}
class Ju extends js {
  constructor(A, t, i) {
    var s;
    super(A, t, "query", {
      Status: i.status,
      Code:
        (s = Qn[i.reject_code]) !== null && s !== void 0
          ? s
          : `Unknown Code "${i.reject_code}"`,
      Message: i.reject_message,
    }),
      (this.result = i);
  }
}
class Ku extends js {
  constructor(A, t, i, s) {
    super(
      A,
      t,
      "update",
      Object.assign(
        { "Request ID": it(i) },
        s.body
          ? Object.assign(
              Object.assign(
                {},
                s.body.error_code ? { "Error code": s.body.error_code } : {}
              ),
              {
                "Reject code": String(s.body.reject_code),
                "Reject message": s.body.reject_message,
              }
            )
          : {
              "HTTP status code": s.status.toString(),
              "HTTP status text": s.statusText,
            }
      )
    ),
      (this.requestId = i),
      (this.response = s);
  }
}
var Gn;
(function (e) {
  (e.Install = "install"), (e.Reinstall = "reinstall"), (e.Upgrade = "upgrade");
})(Gn || (Gn = {}));
const st = Symbol.for("ic-agent-metadata");
class Ue {
  constructor(A) {
    this[st] = Object.freeze(A);
  }
  static agentOf(A) {
    return A[st].config.agent;
  }
  static interfaceOf(A) {
    return A[st].service;
  }
  static canisterIdOf(A) {
    return xA.from(A[st].config.canisterId);
  }
  static async install(A, t) {
    const i = A.mode === void 0 ? Gn.Install : A.mode,
      s = A.arg ? [...new Uint8Array(A.arg)] : [],
      u = [...new Uint8Array(A.module)],
      f =
        typeof t.canisterId == "string"
          ? xA.fromText(t.canisterId)
          : t.canisterId;
    await Oi(t).install_code({
      mode: { [i]: null },
      arg: s,
      wasm_module: u,
      canister_id: f,
    });
  }
  static async createCanister(A) {
    const { canister_id: t } = await Oi(
      A || {}
    ).provisional_create_canister_with_cycles({ amount: [], settings: [] });
    return t;
  }
  static async createAndInstallCanister(A, t, i) {
    const s = await this.createCanister(i);
    return (
      await this.install(
        Object.assign({}, t),
        Object.assign(Object.assign({}, i), { canisterId: s })
      ),
      this.createActor(
        A,
        Object.assign(Object.assign({}, i), { canisterId: s })
      )
    );
  }
  static createActorClass(A, t) {
    const i = A({ IDL: rc });
    class s extends Ue {
      constructor(f) {
        if (!f.canisterId)
          throw new Rt(
            `Canister ID is required, but received ${typeof f.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in {"OPENFPL_BACKEND_CANISTER_ID":"be2us-64aaa-aaaaa-qaabq-cai","OPENFPL_FRONTEND_CANISTER_ID":"br5f7-7uaaa-aaaaa-qaaca-cai","__CANDID_UI_CANISTER_ID":"bd3sg-teaaa-aaaaa-qaaba-cai","TOKEN_CANISTER_CANISTER_ID":"bkyz2-fmaaa-aaaaa-qaaaq-cai","DFX_NETWORK":"local"} correctly.`
          );
        const a =
          typeof f.canisterId == "string"
            ? xA.fromText(f.canisterId)
            : f.canisterId;
        super({
          config: Object.assign(Object.assign(Object.assign({}, Vs), f), {
            canisterId: a,
          }),
          service: i,
        });
        for (const [E, d] of i._fields)
          t?.httpDetails && d.annotations.push(kn),
            (this[E] = Pu(this, E, d, f.blsVerify));
      }
    }
    return s;
  }
  static createActor(A, t) {
    if (!t.canisterId)
      throw new Rt(
        `Canister ID is required, but received ${typeof t.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in {"OPENFPL_BACKEND_CANISTER_ID":"be2us-64aaa-aaaaa-qaabq-cai","OPENFPL_FRONTEND_CANISTER_ID":"br5f7-7uaaa-aaaaa-qaaca-cai","__CANDID_UI_CANISTER_ID":"bd3sg-teaaa-aaaaa-qaaba-cai","TOKEN_CANISTER_CANISTER_ID":"bkyz2-fmaaa-aaaaa-qaaaq-cai","DFX_NETWORK":"local"} correctly.`
      );
    return new (this.createActorClass(A))(t);
  }
  static createActorWithHttpDetails(A, t) {
    return new (this.createActorClass(A, { httpDetails: !0 }))(t);
  }
}
function ir(e, A) {
  const t = bo(e, Ne.Buffer.from(A));
  switch (t.length) {
    case 0:
      return;
    case 1:
      return t[0];
    default:
      return t;
  }
}
const Vs = { pollingStrategyFactory: ku },
  kn = "http-details";
function Pu(e, A, t, i) {
  let s;
  t.annotations.includes("query") || t.annotations.includes("composite_query")
    ? (s = async (f, ...a) => {
        var E, d;
        f = Object.assign(
          Object.assign({}, f),
          (d = (E = e[st].config).queryTransform) === null || d === void 0
            ? void 0
            : d.call(E, A, a, Object.assign(Object.assign({}, e[st].config), f))
        );
        const m = f.agent || e[st].config.agent || Hi(),
          N = xA.from(f.canisterId || e[st].config.canisterId),
          k = dn(t.argTypes, a),
          _ = await m.query(N, { methodName: A, arg: k });
        switch (_.status) {
          case "rejected":
            throw new Ju(N, A, _);
          case "replied":
            return t.annotations.includes(kn)
              ? {
                  httpDetails: _.httpDetails,
                  result: ir(t.retTypes, _.reply.arg),
                }
              : ir(t.retTypes, _.reply.arg);
        }
      })
    : (s = async (f, ...a) => {
        var E, d;
        f = Object.assign(
          Object.assign({}, f),
          (d = (E = e[st].config).callTransform) === null || d === void 0
            ? void 0
            : d.call(E, A, a, Object.assign(Object.assign({}, e[st].config), f))
        );
        const m = f.agent || e[st].config.agent || Hi(),
          {
            canisterId: N,
            effectiveCanisterId: k,
            pollingStrategyFactory: _,
          } = Object.assign(
            Object.assign(Object.assign({}, Vs), e[st].config),
            f
          ),
          G = xA.from(N),
          L = k !== void 0 ? xA.from(k) : G,
          J = dn(t.argTypes, a),
          { requestId: X, response: z } = await m.call(G, {
            methodName: A,
            arg: J,
            effectiveCanisterId: L,
          });
        if (!z.ok || z.body) throw new Ku(G, A, X, z);
        const q = _(),
          cA = await Ws(m, L, X, q, i),
          P = t.annotations.includes(kn);
        if (cA !== void 0)
          return P
            ? { httpDetails: z, result: ir(t.retTypes, cA) }
            : ir(t.retTypes, cA);
        if (t.retTypes.length === 0)
          return P ? { httpDetails: z, result: void 0 } : void 0;
        throw new Error(
          `Call was returned undefined, but type [${t.retTypes.join(",")}].`
        );
      });
  const u = (...f) => s({}, ...f);
  return (
    (u.withOptions =
      (f) =>
      (...a) =>
        s(f, ...a)),
    u
  );
}
function Oi(e) {
  function A(t, i, s) {
    const u = i[0];
    let f = xA.fromHex("");
    return (
      u &&
        typeof u == "object" &&
        u.canister_id &&
        (f = xA.from(u.canister_id)),
      { effectiveCanisterId: f }
    );
  }
  return Ue.createActor(
    qu,
    Object.assign(
      Object.assign(Object.assign({}, e), { canisterId: xA.fromHex("") }),
      { callTransform: A, queryTransform: A }
    )
  );
}
var xr =
    (globalThis && globalThis.__classPrivateFieldSet) ||
    function (e, A, t, i, s) {
      if (i === "m") throw new TypeError("Private method is not writable");
      if (i === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof A == "function" ? e !== A || !s : !A.has(e))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return i === "a" ? s.call(e, t) : s ? (s.value = t) : A.set(e, t), t;
    },
  qt =
    (globalThis && globalThis.__classPrivateFieldGet) ||
    function (e, A, t, i) {
      if (t === "a" && !i)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof A == "function" ? e !== A || !i : !A.has(e))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return t === "m" ? i : t === "a" ? i.call(e) : i ? i.value : A.get(e);
    },
  lr,
  Qr,
  Be,
  Ie;
class _t {
  constructor(A) {
    if (
      (lr.set(this, void 0),
      Qr.set(this, void 0),
      A.byteLength !== _t.RAW_KEY_LENGTH)
    )
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    xr(this, lr, A, "f"), xr(this, Qr, _t.derEncode(A), "f");
  }
  static from(A) {
    return this.fromDer(A.toDer());
  }
  static fromRaw(A) {
    return new _t(A);
  }
  static fromDer(A) {
    return new _t(this.derDecode(A));
  }
  static derEncode(A) {
    return Js(A, Dr).buffer;
  }
  static derDecode(A) {
    const t = Ks(A, Dr);
    if (t.length !== this.RAW_KEY_LENGTH)
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    return t;
  }
  get rawKey() {
    return qt(this, lr, "f");
  }
  get derKey() {
    return qt(this, Qr, "f");
  }
  toDer() {
    return this.derKey;
  }
  toRaw() {
    return this.rawKey;
  }
}
(lr = new WeakMap()), (Qr = new WeakMap());
_t.RAW_KEY_LENGTH = 32;
class Wt extends zn {
  constructor(A, t) {
    super(),
      Be.set(this, void 0),
      Ie.set(this, void 0),
      xr(this, Be, _t.from(A), "f"),
      xr(this, Ie, new Uint8Array(t), "f");
  }
  static generate(A = new Uint8Array(32)) {
    if (A && A.length !== 32)
      throw new Error("Ed25519 Seed needs to be 32 bytes long.");
    A || (A = ce.utils.randomPrivateKey());
    const t = new Uint8Array(32);
    for (let s = 0; s < 32; s++) t[s] = new Uint8Array(A)[s];
    const i = ce.getPublicKey(t);
    return Wt.fromKeyPair(i, t);
  }
  static fromParsedJson(A) {
    const [t, i] = A;
    return new Wt(_t.fromDer(Vt(t)), Vt(i));
  }
  static fromJSON(A) {
    const t = JSON.parse(A);
    if (Array.isArray(t)) {
      if (typeof t[0] == "string" && typeof t[1] == "string")
        return this.fromParsedJson([t[0], t[1]]);
      throw new Error(
        "Deserialization error: JSON must have at least 2 items."
      );
    }
    throw new Error(
      `Deserialization error: Invalid JSON type for string: ${JSON.stringify(
        A
      )}`
    );
  }
  static fromKeyPair(A, t) {
    return new Wt(_t.fromRaw(A), t);
  }
  static fromSecretKey(A) {
    const t = ce.getPublicKey(new Uint8Array(A));
    return Wt.fromKeyPair(t, A);
  }
  toJSON() {
    return [it(qt(this, Be, "f").toDer()), it(qt(this, Ie, "f"))];
  }
  getKeyPair() {
    return { secretKey: qt(this, Ie, "f"), publicKey: qt(this, Be, "f") };
  }
  getPublicKey() {
    return qt(this, Be, "f");
  }
  async sign(A) {
    const t = new Uint8Array(A),
      i = cs(ce.sign(t, qt(this, Ie, "f").slice(0, 32)));
    return (
      Object.defineProperty(i, "__signature__", {
        enumerable: !1,
        value: void 0,
      }),
      i
    );
  }
  static verify(A, t, i) {
    const [s, u, f] = [A, t, i].map(
      (a) => (
        typeof a == "string" && (a = Vt(a)),
        a instanceof Uint8Array && (a = a.buffer),
        new Uint8Array(a)
      )
    );
    return ce.verify(u, s, f);
  }
}
(Be = new WeakMap()), (Ie = new WeakMap());
class ii extends Error {
  constructor(A) {
    super(A), (this.message = A), Object.setPrototypeOf(this, ii.prototype);
  }
}
function Yi(e) {
  if (typeof global < "u" && global.crypto && global.crypto.subtle)
    return global.crypto.subtle;
  if (e) return e;
  if (typeof crypto < "u" && crypto.subtle) return crypto.subtle;
  throw new ii(
    "Global crypto was not available and none was provided. Please inlcude a SubtleCrypto implementation. See https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto"
  );
}
class Nr extends zn {
  constructor(A, t, i) {
    super(), (this._keyPair = A), (this._derKey = t), (this._subtleCrypto = i);
  }
  static async generate(A) {
    const {
        extractable: t = !1,
        keyUsages: i = ["sign", "verify"],
        subtleCrypto: s,
      } = A ?? {},
      u = Yi(s),
      f = await u.generateKey({ name: "ECDSA", namedCurve: "P-256" }, t, i),
      a = await u.exportKey("spki", f.publicKey);
    return new this(f, a, u);
  }
  static async fromKeyPair(A, t) {
    const i = Yi(t),
      s = await i.exportKey("spki", A.publicKey);
    return new Nr(A, s, i);
  }
  getKeyPair() {
    return this._keyPair;
  }
  getPublicKey() {
    const A = this._derKey,
      t = Object.create(this._keyPair.publicKey);
    return (
      (t.toDer = function () {
        return A;
      }),
      t
    );
  }
  async sign(A) {
    const t = { name: "ECDSA", hash: { name: "SHA-256" } };
    return (
      this._keyPair.privateKey,
      await this._subtleCrypto.sign(t, this._keyPair.privateKey, A)
    );
  }
}
var Wu =
  (globalThis && globalThis.__rest) ||
  function (e, A) {
    var t = {};
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        A.indexOf(i) < 0 &&
        (t[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
        A.indexOf(i[s]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
          (t[i[s]] = e[i[s]]);
    return t;
  };
const ju = new TextEncoder().encode("ic-request-auth-delegation"),
  Vu = new TextEncoder().encode(`
ic-request`);
function nn(e) {
  if (typeof e != "string" || e.length < 64)
    throw new Error("Invalid public key.");
  return Vt(e);
}
class oi {
  constructor(A, t, i) {
    (this.pubkey = A), (this.expiration = t), (this.targets = i);
  }
  toCBOR() {
    return et.value.map(
      Object.assign(
        {
          pubkey: et.value.bytes(this.pubkey),
          expiration: et.value.u64(this.expiration.toString(16), 16),
        },
        this.targets && {
          targets: et.value.array(
            this.targets.map((A) => et.value.bytes(A.toUint8Array()))
          ),
        }
      )
    );
  }
  toJSON() {
    return Object.assign(
      { expiration: this.expiration.toString(16), pubkey: it(this.pubkey) },
      this.targets && { targets: this.targets.map((A) => A.toHex()) }
    );
  }
}
async function zu(e, A, t, i) {
  const s = new oi(A.toDer(), BigInt(+t) * BigInt(1e6), i),
    u = new Uint8Array([...ju, ...new Uint8Array(Fe(s))]),
    f = await e.sign(u);
  return { delegation: s, signature: f };
}
class _r {
  constructor(A, t) {
    (this.delegations = A), (this.publicKey = t);
  }
  static async create(A, t, i = new Date(Date.now() + 15 * 60 * 1e3), s = {}) {
    var u, f;
    const a = await zu(A, t, i, s.targets);
    return new _r(
      [
        ...(((u = s.previous) === null || u === void 0
          ? void 0
          : u.delegations) || []),
        a,
      ],
      ((f = s.previous) === null || f === void 0 ? void 0 : f.publicKey) ||
        A.getPublicKey().toDer()
    );
  }
  static fromJSON(A) {
    const { publicKey: t, delegations: i } =
      typeof A == "string" ? JSON.parse(A) : A;
    if (!Array.isArray(i)) throw new Error("Invalid delegations.");
    const s = i.map((u) => {
      const { delegation: f, signature: a } = u,
        { pubkey: E, expiration: d, targets: m } = f;
      if (m !== void 0 && !Array.isArray(m))
        throw new Error("Invalid targets.");
      return {
        delegation: new oi(
          nn(E),
          BigInt("0x" + d),
          m &&
            m.map((N) => {
              if (typeof N != "string") throw new Error("Invalid target.");
              return xA.fromHex(N);
            })
        ),
        signature: nn(a),
      };
    });
    return new this(s, nn(t));
  }
  static fromDelegations(A, t) {
    return new this(A, t);
  }
  toJSON() {
    return {
      delegations: this.delegations.map((A) => {
        const { delegation: t, signature: i } = A,
          { targets: s } = t;
        return {
          delegation: Object.assign(
            { expiration: t.expiration.toString(16), pubkey: it(t.pubkey) },
            s && { targets: s.map((u) => u.toHex()) }
          ),
          signature: it(i),
        };
      }),
      publicKey: it(this.publicKey),
    };
  }
}
class qi extends zn {
  constructor(A, t) {
    super(), (this._inner = A), (this._delegation = t);
  }
  static fromDelegation(A, t) {
    return new this(A, t);
  }
  getDelegation() {
    return this._delegation;
  }
  getPublicKey() {
    return {
      derKey: this._delegation.publicKey,
      toDer: () => this._delegation.publicKey,
    };
  }
  sign(A) {
    return this._inner.sign(A);
  }
  async transformRequest(A) {
    const { body: t } = A,
      i = Wu(A, ["body"]),
      s = await Fe(t);
    return Object.assign(Object.assign({}, i), {
      body: {
        content: t,
        sender_sig: await this.sign(
          new Uint8Array([...Vu, ...new Uint8Array(s)])
        ),
        sender_delegation: this._delegation.delegations,
        sender_pubkey: this._delegation.publicKey,
      },
    });
  }
}
function $u(e, A) {
  for (const { delegation: s } of e.delegations)
    if (+new Date(Number(s.expiration / BigInt(1e6))) <= +Date.now()) return !1;
  const t = [],
    i = A?.scope;
  i &&
    (Array.isArray(i)
      ? t.push(...i.map((s) => (typeof s == "string" ? xA.fromText(s) : s)))
      : t.push(typeof i == "string" ? xA.fromText(i) : i));
  for (const s of t) {
    const u = s.toText();
    for (const { delegation: f } of e.delegations) {
      if (f.targets === void 0) continue;
      let a = !0;
      for (const E of f.targets)
        if (E.toText() === u) {
          a = !1;
          break;
        }
      if (a) return !1;
    }
  }
  return !0;
}
var Ji;
(function (e) {
  e[(e.ECDSA_WITH_SHA256 = -7)] = "ECDSA_WITH_SHA256";
})(Ji || (Ji = {}));
const Ki = ["mousedown", "mousemove", "keydown", "touchstart", "wheel"];
class Pi {
  constructor(A = {}) {
    var t;
    (this.callbacks = []),
      (this.idleTimeout = 10 * 60 * 1e3),
      (this.timeoutID = void 0);
    const { onIdle: i, idleTimeout: s = 10 * 60 * 1e3 } = A || {};
    (this.callbacks = i ? [i] : []), (this.idleTimeout = s);
    const u = this._resetTimer.bind(this);
    window.addEventListener("load", u, !0),
      Ki.forEach(function (a) {
        document.addEventListener(a, u, !0);
      });
    const f = (a, E) => {
      let d;
      return (...m) => {
        const N = this,
          k = function () {
            (d = void 0), a.apply(N, m);
          };
        clearTimeout(d), (d = window.setTimeout(k, E));
      };
    };
    if (A?.captureScroll) {
      const a = f(
        u,
        (t = A?.scrollDebounce) !== null && t !== void 0 ? t : 100
      );
      window.addEventListener("scroll", a, !0);
    }
    u();
  }
  static create(A = {}) {
    return new this(A);
  }
  registerCallback(A) {
    this.callbacks.push(A);
  }
  exit() {
    clearTimeout(this.timeoutID),
      window.removeEventListener("load", this._resetTimer, !0);
    const A = this._resetTimer.bind(this);
    Ki.forEach(function (t) {
      document.removeEventListener(t, A, !0);
    }),
      this.callbacks.forEach((t) => t());
  }
  _resetTimer() {
    const A = this.exit.bind(this);
    window.clearTimeout(this.timeoutID),
      (this.timeoutID = window.setTimeout(A, this.idleTimeout));
  }
}
const Zu = (e, A) => A.some((t) => e instanceof t);
let Wi, ji;
function Xu() {
  return (
    Wi ||
    (Wi = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function Af() {
  return (
    ji ||
    (ji = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const zs = new WeakMap(),
  Ln = new WeakMap(),
  $s = new WeakMap(),
  on = new WeakMap(),
  si = new WeakMap();
function tf(e) {
  const A = new Promise((t, i) => {
    const s = () => {
        e.removeEventListener("success", u), e.removeEventListener("error", f);
      },
      u = () => {
        t(zt(e.result)), s();
      },
      f = () => {
        i(e.error), s();
      };
    e.addEventListener("success", u), e.addEventListener("error", f);
  });
  return (
    A.then((t) => {
      t instanceof IDBCursor && zs.set(t, e);
    }).catch(() => {}),
    si.set(A, e),
    A
  );
}
function ef(e) {
  if (Ln.has(e)) return;
  const A = new Promise((t, i) => {
    const s = () => {
        e.removeEventListener("complete", u),
          e.removeEventListener("error", f),
          e.removeEventListener("abort", f);
      },
      u = () => {
        t(), s();
      },
      f = () => {
        i(e.error || new DOMException("AbortError", "AbortError")), s();
      };
    e.addEventListener("complete", u),
      e.addEventListener("error", f),
      e.addEventListener("abort", f);
  });
  Ln.set(e, A);
}
let vn = {
  get(e, A, t) {
    if (e instanceof IDBTransaction) {
      if (A === "done") return Ln.get(e);
      if (A === "objectStoreNames") return e.objectStoreNames || $s.get(e);
      if (A === "store")
        return t.objectStoreNames[1]
          ? void 0
          : t.objectStore(t.objectStoreNames[0]);
    }
    return zt(e[A]);
  },
  set(e, A, t) {
    return (e[A] = t), !0;
  },
  has(e, A) {
    return e instanceof IDBTransaction && (A === "done" || A === "store")
      ? !0
      : A in e;
  },
};
function rf(e) {
  vn = e(vn);
}
function nf(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (A, ...t) {
        const i = e.call(sn(this), A, ...t);
        return $s.set(i, A.sort ? A.sort() : [A]), zt(i);
      }
    : Af().includes(e)
    ? function (...A) {
        return e.apply(sn(this), A), zt(zs.get(this));
      }
    : function (...A) {
        return zt(e.apply(sn(this), A));
      };
}
function of(e) {
  return typeof e == "function"
    ? nf(e)
    : (e instanceof IDBTransaction && ef(e),
      Zu(e, Xu()) ? new Proxy(e, vn) : e);
}
function zt(e) {
  if (e instanceof IDBRequest) return tf(e);
  if (on.has(e)) return on.get(e);
  const A = of(e);
  return A !== e && (on.set(e, A), si.set(A, e)), A;
}
const sn = (e) => si.get(e);
function sf(e, A, { blocked: t, upgrade: i, blocking: s, terminated: u } = {}) {
  const f = indexedDB.open(e, A),
    a = zt(f);
  return (
    i &&
      f.addEventListener("upgradeneeded", (E) => {
        i(zt(f.result), E.oldVersion, E.newVersion, zt(f.transaction), E);
      }),
    t && f.addEventListener("blocked", (E) => t(E.oldVersion, E.newVersion, E)),
    a
      .then((E) => {
        u && E.addEventListener("close", () => u()),
          s &&
            E.addEventListener("versionchange", (d) =>
              s(d.oldVersion, d.newVersion, d)
            );
      })
      .catch(() => {}),
    a
  );
}
const af = ["get", "getKey", "getAll", "getAllKeys", "count"],
  cf = ["put", "add", "delete", "clear"],
  an = new Map();
function Vi(e, A) {
  if (!(e instanceof IDBDatabase && !(A in e) && typeof A == "string")) return;
  if (an.get(A)) return an.get(A);
  const t = A.replace(/FromIndex$/, ""),
    i = A !== t,
    s = cf.includes(t);
  if (
    !(t in (i ? IDBIndex : IDBObjectStore).prototype) ||
    !(s || af.includes(t))
  )
    return;
  const u = async function (f, ...a) {
    const E = this.transaction(f, s ? "readwrite" : "readonly");
    let d = E.store;
    return (
      i && (d = d.index(a.shift())),
      (await Promise.all([d[t](...a), s && E.done]))[0]
    );
  };
  return an.set(A, u), u;
}
rf((e) => ({
  ...e,
  get: (A, t, i) => Vi(A, t) || e.get(A, t, i),
  has: (A, t) => !!Vi(A, t) || e.has(A, t),
}));
const Zs = "auth-client-db",
  Xs = "ic-keyval",
  gf = async (e = Zs, A = Xs, t) => (
    Aa &&
      localStorage != null &&
      localStorage.getItem(Kt) &&
      (localStorage.removeItem(Kt), localStorage.removeItem(Jt)),
    await sf(e, t, {
      upgrade: (i) => {
        i.objectStoreNames,
          i.objectStoreNames.contains(A) && i.clear(A),
          i.createObjectStore(A);
      },
    })
  );
async function uf(e, A, t) {
  return await e.get(A, t);
}
async function ff(e, A, t, i) {
  return await e.put(A, i, t);
}
async function Bf(e, A, t) {
  return await e.delete(A, t);
}
class ai {
  constructor(A, t) {
    (this._db = A), (this._storeName = t);
  }
  static async create(A) {
    const { dbName: t = Zs, storeName: i = Xs, version: s = 1 } = A ?? {},
      u = await gf(t, i, s);
    return new ai(u, i);
  }
  async set(A, t) {
    return await ff(this._db, this._storeName, A, t);
  }
  async get(A) {
    var t;
    return (t = await uf(this._db, this._storeName, A)) !== null && t !== void 0
      ? t
      : null;
  }
  async remove(A) {
    return await Bf(this._db, this._storeName, A);
  }
}
const Jt = "identity",
  Kt = "delegation",
  If = "iv",
  hf = 1,
  Aa = typeof window < "u";
class Ef {
  constructor(A = "ic-", t) {
    (this.prefix = A), (this._localStorage = t);
  }
  get(A) {
    return Promise.resolve(this._getLocalStorage().getItem(this.prefix + A));
  }
  set(A, t) {
    return (
      this._getLocalStorage().setItem(this.prefix + A, t), Promise.resolve()
    );
  }
  remove(A) {
    return (
      this._getLocalStorage().removeItem(this.prefix + A), Promise.resolve()
    );
  }
  _getLocalStorage() {
    if (this._localStorage) return this._localStorage;
    const A =
      typeof window > "u"
        ? typeof global > "u"
          ? typeof self > "u"
            ? void 0
            : self.localStorage
          : global.localStorage
        : window.localStorage;
    if (!A) throw new Error("Could not find local storage.");
    return A;
  }
}
class lf {
  get _db() {
    return new Promise((A) => {
      if (this.initializedDb) {
        A(this.initializedDb);
        return;
      }
      ai.create({ version: hf }).then((t) => {
        (this.initializedDb = t), A(t);
      });
    });
  }
  async get(A) {
    return await (await this._db).get(A);
  }
  async set(A, t) {
    await (await this._db).set(A, t);
  }
  async remove(A) {
    await (await this._db).remove(A);
  }
}
const Qf = "https://identity.ic0.app",
  Cf = "#authorize",
  cn = "ECDSA",
  gn = "Ed25519",
  df = 500,
  pf = "UserInterrupt";
class DB {
  constructor(A, t, i, s, u, f, a, E) {
    var d;
    (this._identity = A),
      (this._key = t),
      (this._chain = i),
      (this._storage = s),
      (this.idleManager = u),
      (this._createOptions = f),
      (this._idpWindow = a),
      (this._eventHandler = E);
    const m = this.logout.bind(this),
      N = f?.idleOptions;
    !N?.onIdle &&
      !N?.disableDefaultIdleCallback &&
      ((d = this.idleManager) === null ||
        d === void 0 ||
        d.registerCallback(() => {
          m(), location.reload();
        }));
  }
  static async create(A = {}) {
    var t, i, s;
    const u = (t = A.storage) !== null && t !== void 0 ? t : new lf(),
      f = (i = A.keyType) !== null && i !== void 0 ? i : cn;
    let a = null;
    if (A.identity) a = A.identity;
    else {
      let N = await u.get(Jt);
      if (!N && Aa)
        try {
          const k = new Ef(),
            _ = await k.get(Kt),
            G = await k.get(Jt);
          _ &&
            G &&
            f === cn &&
            (console.log(
              "Discovered an identity stored in localstorage. Migrating to IndexedDB"
            ),
            await u.set(Kt, _),
            await u.set(Jt, G),
            (N = _),
            await k.remove(Kt),
            await k.remove(Jt));
        } catch (k) {
          console.error("error while attempting to recover localstorage: " + k);
        }
      if (N)
        try {
          typeof N == "object"
            ? f === gn && typeof N == "string"
              ? (a = await Wt.fromJSON(N))
              : (a = await Nr.fromKeyPair(N))
            : typeof N == "string" && (a = Wt.fromJSON(N));
        } catch {}
    }
    let E = new Sr(),
      d = null;
    if (a)
      try {
        const N = await u.get(Kt);
        if (typeof N == "object" && N !== null)
          throw new Error(
            "Delegation chain is incorrectly stored. A delegation chain should be stored as a string."
          );
        A.identity
          ? (E = A.identity)
          : N &&
            ((d = _r.fromJSON(N)),
            $u(d) ? (E = qi.fromDelegation(a, d)) : (await un(u), (a = null)));
      } catch (N) {
        console.error(N), await un(u), (a = null);
      }
    let m;
    return (
      !((s = A.idleOptions) === null || s === void 0) && s.disableIdle
        ? (m = void 0)
        : (d || A.identity) && (m = Pi.create(A.idleOptions)),
      a ||
        (f === gn
          ? ((a = await Wt.generate()),
            await u.set(Jt, JSON.stringify(a.toJSON())))
          : (A.storage &&
              f === cn &&
              console.warn(
                `You are using a custom storage provider that may not support CryptoKey storage. If you are using a custom storage provider that does not support CryptoKey storage, you should use '${gn}' as the key type, as it can serialize to a string`
              ),
            (a = await Nr.generate()),
            await u.set(Jt, a.getKeyPair()))),
      new this(E, a, d, u, m, A)
    );
  }
  async _handleSuccess(A, t) {
    var i, s, u;
    const f = A.delegations.map((d) => ({
        delegation: new oi(
          d.delegation.pubkey,
          d.delegation.expiration,
          d.delegation.targets
        ),
        signature: d.signature.buffer,
      })),
      a = _r.fromDelegations(f, A.userPublicKey.buffer),
      E = this._key;
    if (E) {
      if (
        ((this._chain = a),
        (this._identity = qi.fromDelegation(E, this._chain)),
        (i = this._idpWindow) === null || i === void 0 || i.close(),
        !this.idleManager)
      ) {
        const d =
          (s = this._createOptions) === null || s === void 0
            ? void 0
            : s.idleOptions;
        (this.idleManager = Pi.create(d)),
          !d?.onIdle &&
            !d?.disableDefaultIdleCallback &&
            ((u = this.idleManager) === null ||
              u === void 0 ||
              u.registerCallback(() => {
                this.logout(), location.reload();
              }));
      }
      this._removeEventListener(),
        delete this._idpWindow,
        this._chain &&
          (await this._storage.set(Kt, JSON.stringify(this._chain.toJSON()))),
        t?.();
    }
  }
  getIdentity() {
    return this._identity;
  }
  async isAuthenticated() {
    return (
      !this.getIdentity().getPrincipal().isAnonymous() && this._chain !== null
    );
  }
  async login(A) {
    var t, i, s, u;
    const f = BigInt(8) * BigInt(36e11),
      a = new URL(
        ((t = A?.identityProvider) === null || t === void 0
          ? void 0
          : t.toString()) || Qf
      );
    (a.hash = Cf),
      (i = this._idpWindow) === null || i === void 0 || i.close(),
      this._removeEventListener(),
      (this._eventHandler = this._getEventHandler(
        a,
        Object.assign(
          {
            maxTimeToLive:
              (s = A?.maxTimeToLive) !== null && s !== void 0 ? s : f,
          },
          A
        )
      )),
      window.addEventListener("message", this._eventHandler),
      (this._idpWindow =
        (u = window.open(
          a.toString(),
          "idpWindow",
          A?.windowOpenerFeatures
        )) !== null && u !== void 0
          ? u
          : void 0);
    const E = () => {
      this._idpWindow &&
        (this._idpWindow.closed
          ? this._handleFailure(pf, A?.onError)
          : setTimeout(E, df));
    };
    E();
  }
  _getEventHandler(A, t) {
    return async (i) => {
      var s, u, f;
      if (i.origin !== A.origin) {
        console.warn(
          `WARNING: expected origin '${A.origin}', got '${i.origin}' (ignoring)`
        );
        return;
      }
      const a = i.data;
      switch (a.kind) {
        case "authorize-ready": {
          const E = {
            kind: "authorize-client",
            sessionPublicKey: new Uint8Array(
              (s = this._key) === null || s === void 0
                ? void 0
                : s.getPublicKey().toDer()
            ),
            maxTimeToLive: t?.maxTimeToLive,
            derivationOrigin:
              (u = t?.derivationOrigin) === null || u === void 0
                ? void 0
                : u.toString(),
          };
          (f = this._idpWindow) === null ||
            f === void 0 ||
            f.postMessage(E, A.origin);
          break;
        }
        case "authorize-client-success":
          try {
            await this._handleSuccess(a, t?.onSuccess);
          } catch (E) {
            this._handleFailure(E.message, t?.onError);
          }
          break;
        case "authorize-client-failure":
          this._handleFailure(a.text, t?.onError);
          break;
      }
    };
  }
  _handleFailure(A, t) {
    var i;
    (i = this._idpWindow) === null || i === void 0 || i.close(),
      t?.(A),
      this._removeEventListener(),
      delete this._idpWindow;
  }
  _removeEventListener() {
    this._eventHandler &&
      window.removeEventListener("message", this._eventHandler),
      (this._eventHandler = void 0);
  }
  async logout(A = {}) {
    if (
      (await un(this._storage),
      (this._identity = new Sr()),
      (this._chain = null),
      A.returnTo)
    )
      try {
        window.history.pushState({}, "", A.returnTo);
      } catch {
        window.location.href = A.returnTo;
      }
  }
}
async function un(e) {
  await e.remove(Jt), await e.remove(Kt), await e.remove(If);
}
var wf = ((e) => (
  (e[(e.FractionalMoreThan8Decimals = 0)] = "FractionalMoreThan8Decimals"),
  (e[(e.InvalidFormat = 1)] = "InvalidFormat"),
  (e[(e.FractionalTooManyDecimals = 2)] = "FractionalTooManyDecimals"),
  e
))(wf || {});
BigInt(1e8);
var yf = () => new ni({ host: "https://icp-api.io", identity: new Sr() }),
  xB = ({
    options: {
      canisterId: e,
      serviceOverride: A,
      certifiedServiceOverride: t,
      agent: i,
      callTransform: s,
      queryTransform: u,
    },
    idlFactory: f,
    certifiedIdlFactory: a,
  }) => {
    let E = i ?? yf(),
      d =
        A ??
        Ue.createActor(f, {
          agent: E,
          canisterId: e,
          callTransform: s,
          queryTransform: u,
        }),
      m =
        t ??
        Ue.createActor(a, {
          agent: E,
          canisterId: e,
          callTransform: s,
          queryTransform: u,
        });
    return { service: d, certifiedService: m, agent: E, canisterId: e };
  },
  mf = class extends Error {},
  Sf = class extends Error {},
  bf = (e, A) => {
    if (e == null) throw new Sf(A);
  },
  _B = (e) => {
    if (e < 0 || e > 100)
      throw new mf(`${e} is not a valid percentage number.`);
  },
  FB = (e) => {
    let A = new DataView(e.buffer, e.byteOffset, e.byteLength);
    if (typeof A.getBigUint64 == "function") return A.getBigUint64(0);
    {
      let t = BigInt(A.getUint32(0)),
        i = BigInt(A.getUint32(4));
      return (t << BigInt(32)) + i;
    }
  },
  RB = (e) => new Uint8Array(e),
  TB = (e) => Array.from(e),
  ta = (e) => new Uint8Array(e),
  ea = (e) => Array.from(e).map((A) => A.charCodeAt(0)),
  ra = (e) => (
    e instanceof Uint8Array || (e = Uint8Array.from(e)),
    e.reduce((A, t) => A + t.toString(16).padStart(2, "0"), "")
  ),
  zi = "abcdefghijklmnopqrstuvwxyz234567",
  Me = Object.create(null);
for (let e = 0; e < zi.length; e++) Me[zi[e]] = e;
Me[0] = Me.o;
Me[1] = Me.i;
var Df = new Uint32Array([
    0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685,
    2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995,
    2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648,
    2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990,
    1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755,
    2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145,
    1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206,
    2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980,
    1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705,
    3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527,
    1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772,
    4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290,
    251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719,
    3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925,
    453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202,
    4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960,
    984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733,
    3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467,
    855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048,
    3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054,
    702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443,
    3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945,
    2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430,
    2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580,
    2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225,
    1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143,
    2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732,
    1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850,
    2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135,
    1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109,
    3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954,
    1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920,
    3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877,
    83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603,
    3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992,
    534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934,
    4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795,
    376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105,
    3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270,
    936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108,
    3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449,
    601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471,
    3272380065, 1510334235, 755167117,
  ]),
  xf = (e) => {
    let A = -1;
    for (let t = 0; t < e.length; t++) {
      let i = (e[t] ^ A) & 255;
      A = Df[i] ^ (A >>> 8);
    }
    return (A ^ -1) >>> 0;
  },
  ci = (e) => {
    let A = new ArrayBuffer(4);
    return new DataView(A).setUint32(0, xf(e), !1), new Uint8Array(A);
  },
  Nf = (e) => e == null,
  _f = (e) => !Nf(e),
  UB = (e) => (_f(e) ? [e] : []),
  Ff = (e) => e?.[0],
  MB = (e) => {
    let A = Ff(e);
    return bf(A), A;
  };
/*! @license DOMPurify 3.0.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.8/LICENSE */ const {
  entries: na,
  setPrototypeOf: $i,
  isFrozen: Rf,
  getPrototypeOf: Tf,
  getOwnPropertyDescriptor: gi,
} = Object;
let { freeze: tt, seal: lt, create: ia } = Object,
  { apply: Hn, construct: On } = typeof Reflect < "u" && Reflect;
tt ||
  (tt = function (A) {
    return A;
  });
lt ||
  (lt = function (A) {
    return A;
  });
Hn ||
  (Hn = function (A, t, i) {
    return A.apply(t, i);
  });
On ||
  (On = function (A, t) {
    return new A(...t);
  });
const or = at(Array.prototype.forEach),
  Zi = at(Array.prototype.pop),
  ye = at(Array.prototype.push),
  Cr = at(String.prototype.toLowerCase),
  fn = at(String.prototype.toString),
  Uf = at(String.prototype.match),
  me = at(String.prototype.replace),
  Mf = at(String.prototype.indexOf),
  Gf = at(String.prototype.trim),
  nt = at(RegExp.prototype.test),
  Se = kf(TypeError);
function at(e) {
  return function (A) {
    for (
      var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1;
      s < t;
      s++
    )
      i[s - 1] = arguments[s];
    return Hn(e, A, i);
  };
}
function kf(e) {
  return function () {
    for (var A = arguments.length, t = new Array(A), i = 0; i < A; i++)
      t[i] = arguments[i];
    return On(e, t);
  };
}
function NA(e, A) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Cr;
  $i && $i(e, null);
  let i = A.length;
  for (; i--; ) {
    let s = A[i];
    if (typeof s == "string") {
      const u = t(s);
      u !== s && (Rf(A) || (A[i] = u), (s = u));
    }
    e[s] = !0;
  }
  return e;
}
function Lf(e) {
  for (let A = 0; A < e.length; A++) gi(e, A) === void 0 && (e[A] = null);
  return e;
}
function te(e) {
  const A = ia(null);
  for (const [t, i] of na(e))
    gi(e, t) !== void 0 &&
      (Array.isArray(i)
        ? (A[t] = Lf(i))
        : i && typeof i == "object" && i.constructor === Object
        ? (A[t] = te(i))
        : (A[t] = i));
  return A;
}
function sr(e, A) {
  for (; e !== null; ) {
    const i = gi(e, A);
    if (i) {
      if (i.get) return at(i.get);
      if (typeof i.value == "function") return at(i.value);
    }
    e = Tf(e);
  }
  function t(i) {
    return console.warn("fallback value for", i), null;
  }
  return t;
}
const Xi = tt([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
  ]),
  Bn = tt([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern",
  ]),
  In = tt([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
  ]),
  vf = tt([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use",
  ]),
  hn = tt([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts",
  ]),
  Hf = tt([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none",
  ]),
  Ao = tt(["#text"]),
  to = tt([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "pattern",
    "placeholder",
    "playsinline",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "xmlns",
    "slot",
  ]),
  En = tt([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan",
  ]),
  eo = tt([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnsalign",
    "columnlines",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lspace",
    "lquote",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns",
  ]),
  ar = tt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  Of = lt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  Yf = lt(/<%[\w\W]*|[\w\W]*%>/gm),
  qf = lt(/\${[\w\W]*}/gm),
  Jf = lt(/^data-[\-\w.\u00B7-\uFFFF]/),
  Kf = lt(/^aria-[\-\w]+$/),
  oa = lt(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  ),
  Pf = lt(/^(?:\w+script|data):/i),
  Wf = lt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  sa = lt(/^html$/i);
var ro = Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: Of,
  ERB_EXPR: Yf,
  TMPLIT_EXPR: qf,
  DATA_ATTR: Jf,
  ARIA_ATTR: Kf,
  IS_ALLOWED_URI: oa,
  IS_SCRIPT_OR_DATA: Pf,
  ATTR_WHITESPACE: Wf,
  DOCTYPE_NAME: sa,
});
const jf = function () {
    return typeof window > "u" ? null : window;
  },
  Vf = function (A, t) {
    if (typeof A != "object" || typeof A.createPolicy != "function")
      return null;
    let i = null;
    const s = "data-tt-policy-suffix";
    t && t.hasAttribute(s) && (i = t.getAttribute(s));
    const u = "dompurify" + (i ? "#" + i : "");
    try {
      return A.createPolicy(u, {
        createHTML(f) {
          return f;
        },
        createScriptURL(f) {
          return f;
        },
      });
    } catch {
      return (
        console.warn("TrustedTypes policy " + u + " could not be created."),
        null
      );
    }
  };
function aa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : jf();
  const A = (gA) => aa(gA);
  if (
    ((A.version = "3.0.8"),
    (A.removed = []),
    !e || !e.document || e.document.nodeType !== 9)
  )
    return (A.isSupported = !1), A;
  let { document: t } = e;
  const i = t,
    s = i.currentScript,
    {
      DocumentFragment: u,
      HTMLTemplateElement: f,
      Node: a,
      Element: E,
      NodeFilter: d,
      NamedNodeMap: m = e.NamedNodeMap || e.MozNamedAttrMap,
      HTMLFormElement: N,
      DOMParser: k,
      trustedTypes: _,
    } = e,
    G = E.prototype,
    L = sr(G, "cloneNode"),
    J = sr(G, "nextSibling"),
    X = sr(G, "childNodes"),
    z = sr(G, "parentNode");
  if (typeof f == "function") {
    const gA = t.createElement("template");
    gA.content && gA.content.ownerDocument && (t = gA.content.ownerDocument);
  }
  let q,
    cA = "";
  const {
      implementation: P,
      createNodeIterator: W,
      createDocumentFragment: iA,
      getElementsByTagName: fA,
    } = t,
    { importNode: EA } = i;
  let Y = {};
  A.isSupported =
    typeof na == "function" &&
    typeof z == "function" &&
    P &&
    P.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: SA,
    ERB_EXPR: dA,
    TMPLIT_EXPR: QA,
    DATA_ATTR: FA,
    ARIA_ATTR: _A,
    IS_SCRIPT_OR_DATA: YA,
    ATTR_WHITESPACE: kA,
  } = ro;
  let { IS_ALLOWED_URI: $ } = ro,
    H = null;
  const oA = NA({}, [...Xi, ...Bn, ...In, ...hn, ...Ao]);
  let v = null;
  const j = NA({}, [...to, ...En, ...eo, ...ar]);
  let sA = Object.seal(
      ia(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1,
        },
      })
    ),
    p = null,
    pA = null,
    lA = !0,
    yA = !0,
    K = !1,
    tA = !0,
    C = !1,
    w = !1,
    D = !1,
    R = !1,
    F = !1,
    U = !1,
    I = !1,
    c = !0,
    g = !1;
  const h = "user-content-";
  let Q = !0,
    S = !1,
    T = {},
    O = null;
  const eA = NA({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp",
  ]);
  let rA = null;
  const hA = NA({}, ["audio", "video", "img", "source", "image", "track"]);
  let n = null;
  const r = NA({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns",
    ]),
    o = "http://www.w3.org/1998/Math/MathML",
    B = "http://www.w3.org/2000/svg",
    l = "http://www.w3.org/1999/xhtml";
  let y = l,
    b = !1,
    Z = null;
  const uA = NA({}, [o, B, l], fn);
  let nA = null;
  const AA = ["application/xhtml+xml", "text/html"],
    BA = "text/html";
  let wA = null,
    Ut = null;
  const vr = t.createElement("form"),
    Ye = function (M) {
      return M instanceof RegExp || M instanceof Function;
    },
    de = function () {
      let M =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(Ut && Ut === M)) {
        if (
          ((!M || typeof M != "object") && (M = {}),
          (M = te(M)),
          (nA =
            AA.indexOf(M.PARSER_MEDIA_TYPE) === -1 ? BA : M.PARSER_MEDIA_TYPE),
          (wA = nA === "application/xhtml+xml" ? fn : Cr),
          (H = "ALLOWED_TAGS" in M ? NA({}, M.ALLOWED_TAGS, wA) : oA),
          (v = "ALLOWED_ATTR" in M ? NA({}, M.ALLOWED_ATTR, wA) : j),
          (Z =
            "ALLOWED_NAMESPACES" in M ? NA({}, M.ALLOWED_NAMESPACES, fn) : uA),
          (n =
            "ADD_URI_SAFE_ATTR" in M ? NA(te(r), M.ADD_URI_SAFE_ATTR, wA) : r),
          (rA =
            "ADD_DATA_URI_TAGS" in M
              ? NA(te(hA), M.ADD_DATA_URI_TAGS, wA)
              : hA),
          (O = "FORBID_CONTENTS" in M ? NA({}, M.FORBID_CONTENTS, wA) : eA),
          (p = "FORBID_TAGS" in M ? NA({}, M.FORBID_TAGS, wA) : {}),
          (pA = "FORBID_ATTR" in M ? NA({}, M.FORBID_ATTR, wA) : {}),
          (T = "USE_PROFILES" in M ? M.USE_PROFILES : !1),
          (lA = M.ALLOW_ARIA_ATTR !== !1),
          (yA = M.ALLOW_DATA_ATTR !== !1),
          (K = M.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (tA = M.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
          (C = M.SAFE_FOR_TEMPLATES || !1),
          (w = M.WHOLE_DOCUMENT || !1),
          (F = M.RETURN_DOM || !1),
          (U = M.RETURN_DOM_FRAGMENT || !1),
          (I = M.RETURN_TRUSTED_TYPE || !1),
          (R = M.FORCE_BODY || !1),
          (c = M.SANITIZE_DOM !== !1),
          (g = M.SANITIZE_NAMED_PROPS || !1),
          (Q = M.KEEP_CONTENT !== !1),
          (S = M.IN_PLACE || !1),
          ($ = M.ALLOWED_URI_REGEXP || oa),
          (y = M.NAMESPACE || l),
          (sA = M.CUSTOM_ELEMENT_HANDLING || {}),
          M.CUSTOM_ELEMENT_HANDLING &&
            Ye(M.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
            (sA.tagNameCheck = M.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          M.CUSTOM_ELEMENT_HANDLING &&
            Ye(M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
            (sA.attributeNameCheck =
              M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          M.CUSTOM_ELEMENT_HANDLING &&
            typeof M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ==
              "boolean" &&
            (sA.allowCustomizedBuiltInElements =
              M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          C && (yA = !1),
          U && (F = !0),
          T &&
            ((H = NA({}, Ao)),
            (v = []),
            T.html === !0 && (NA(H, Xi), NA(v, to)),
            T.svg === !0 && (NA(H, Bn), NA(v, En), NA(v, ar)),
            T.svgFilters === !0 && (NA(H, In), NA(v, En), NA(v, ar)),
            T.mathMl === !0 && (NA(H, hn), NA(v, eo), NA(v, ar))),
          M.ADD_TAGS && (H === oA && (H = te(H)), NA(H, M.ADD_TAGS, wA)),
          M.ADD_ATTR && (v === j && (v = te(v)), NA(v, M.ADD_ATTR, wA)),
          M.ADD_URI_SAFE_ATTR && NA(n, M.ADD_URI_SAFE_ATTR, wA),
          M.FORBID_CONTENTS &&
            (O === eA && (O = te(O)), NA(O, M.FORBID_CONTENTS, wA)),
          Q && (H["#text"] = !0),
          w && NA(H, ["html", "head", "body"]),
          H.table && (NA(H, ["tbody"]), delete p.tbody),
          M.TRUSTED_TYPES_POLICY)
        ) {
          if (typeof M.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw Se(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
            );
          if (typeof M.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw Se(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
            );
          (q = M.TRUSTED_TYPES_POLICY), (cA = q.createHTML(""));
        } else
          q === void 0 && (q = Vf(_, s)),
            q !== null && typeof cA == "string" && (cA = q.createHTML(""));
        tt && tt(M), (Ut = M);
      }
    },
    qe = NA({}, ["mi", "mo", "mn", "ms", "mtext"]),
    St = NA({}, ["foreignobject", "desc", "title", "annotation-xml"]),
    fi = NA({}, ["title", "style", "font", "a", "script"]),
    Hr = NA({}, [...Bn, ...In, ...vf]),
    Or = NA({}, [...hn, ...Hf]),
    Bi = function (M) {
      let V = z(M);
      (!V || !V.tagName) && (V = { namespaceURI: y, tagName: "template" });
      const aA = Cr(M.tagName),
        TA = Cr(V.tagName);
      return Z[M.namespaceURI]
        ? M.namespaceURI === B
          ? V.namespaceURI === l
            ? aA === "svg"
            : V.namespaceURI === o
            ? aA === "svg" && (TA === "annotation-xml" || qe[TA])
            : !!Hr[aA]
          : M.namespaceURI === o
          ? V.namespaceURI === l
            ? aA === "math"
            : V.namespaceURI === B
            ? aA === "math" && St[TA]
            : !!Or[aA]
          : M.namespaceURI === l
          ? (V.namespaceURI === B && !St[TA]) ||
            (V.namespaceURI === o && !qe[TA])
            ? !1
            : !Or[aA] && (fi[aA] || !Hr[aA])
          : !!(nA === "application/xhtml+xml" && Z[M.namespaceURI])
        : !1;
    },
    GA = function (M) {
      ye(A.removed, { element: M });
      try {
        M.parentNode.removeChild(M);
      } catch {
        M.remove();
      }
    },
    Je = function (M, V) {
      try {
        ye(A.removed, { attribute: V.getAttributeNode(M), from: V });
      } catch {
        ye(A.removed, { attribute: null, from: V });
      }
      if ((V.removeAttribute(M), M === "is" && !v[M]))
        if (F || U)
          try {
            GA(V);
          } catch {}
        else
          try {
            V.setAttribute(M, "");
          } catch {}
    },
    Yr = function (M) {
      let V = null,
        aA = null;
      if (R) M = "<remove></remove>" + M;
      else {
        const PA = Uf(M, /^[\r\n\t ]+/);
        aA = PA && PA[0];
      }
      nA === "application/xhtml+xml" &&
        y === l &&
        (M =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          M +
          "</body></html>");
      const TA = q ? q.createHTML(M) : M;
      if (y === l)
        try {
          V = new k().parseFromString(TA, nA);
        } catch {}
      if (!V || !V.documentElement) {
        V = P.createDocument(y, "template", null);
        try {
          V.documentElement.innerHTML = b ? cA : TA;
        } catch {}
      }
      const CA = V.body || V.documentElement;
      return (
        M &&
          aA &&
          CA.insertBefore(t.createTextNode(aA), CA.childNodes[0] || null),
        y === l
          ? fA.call(V, w ? "html" : "body")[0]
          : w
          ? V.documentElement
          : CA
      );
    },
    qr = function (M) {
      return W.call(
        M.ownerDocument || M,
        M,
        d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT,
        null
      );
    },
    Jr = function (M) {
      return (
        M instanceof N &&
        (typeof M.nodeName != "string" ||
          typeof M.textContent != "string" ||
          typeof M.removeChild != "function" ||
          !(M.attributes instanceof m) ||
          typeof M.removeAttribute != "function" ||
          typeof M.setAttribute != "function" ||
          typeof M.namespaceURI != "string" ||
          typeof M.insertBefore != "function" ||
          typeof M.hasChildNodes != "function")
      );
    },
    Ke = function (M) {
      return typeof a == "function" && M instanceof a;
    },
    gt = function (M, V, aA) {
      Y[M] &&
        or(Y[M], (TA) => {
          TA.call(A, V, aA, Ut);
        });
    },
    Pe = function (M) {
      let V = null;
      if ((gt("beforeSanitizeElements", M, null), Jr(M))) return GA(M), !0;
      const aA = wA(M.nodeName);
      if (
        (gt("uponSanitizeElement", M, { tagName: aA, allowedTags: H }),
        M.hasChildNodes() &&
          !Ke(M.firstElementChild) &&
          nt(/<[/\w]/g, M.innerHTML) &&
          nt(/<[/\w]/g, M.textContent))
      )
        return GA(M), !0;
      if (!H[aA] || p[aA]) {
        if (
          !p[aA] &&
          We(aA) &&
          ((sA.tagNameCheck instanceof RegExp && nt(sA.tagNameCheck, aA)) ||
            (sA.tagNameCheck instanceof Function && sA.tagNameCheck(aA)))
        )
          return !1;
        if (Q && !O[aA]) {
          const TA = z(M) || M.parentNode,
            CA = X(M) || M.childNodes;
          if (CA && TA) {
            const PA = CA.length;
            for (let zA = PA - 1; zA >= 0; --zA)
              TA.insertBefore(L(CA[zA], !0), J(M));
          }
        }
        return GA(M), !0;
      }
      return (M instanceof E && !Bi(M)) ||
        ((aA === "noscript" || aA === "noembed" || aA === "noframes") &&
          nt(/<\/no(script|embed|frames)/i, M.innerHTML))
        ? (GA(M), !0)
        : (C &&
            M.nodeType === 3 &&
            ((V = M.textContent),
            or([SA, dA, QA], (TA) => {
              V = me(V, TA, " ");
            }),
            M.textContent !== V &&
              (ye(A.removed, { element: M.cloneNode() }), (M.textContent = V))),
          gt("afterSanitizeElements", M, null),
          !1);
    },
    LA = function (M, V, aA) {
      if (c && (V === "id" || V === "name") && (aA in t || aA in vr)) return !1;
      if (!(yA && !pA[V] && nt(FA, V))) {
        if (!(lA && nt(_A, V))) {
          if (!v[V] || pA[V]) {
            if (
              !(
                (We(M) &&
                  ((sA.tagNameCheck instanceof RegExp &&
                    nt(sA.tagNameCheck, M)) ||
                    (sA.tagNameCheck instanceof Function &&
                      sA.tagNameCheck(M))) &&
                  ((sA.attributeNameCheck instanceof RegExp &&
                    nt(sA.attributeNameCheck, V)) ||
                    (sA.attributeNameCheck instanceof Function &&
                      sA.attributeNameCheck(V)))) ||
                (V === "is" &&
                  sA.allowCustomizedBuiltInElements &&
                  ((sA.tagNameCheck instanceof RegExp &&
                    nt(sA.tagNameCheck, aA)) ||
                    (sA.tagNameCheck instanceof Function &&
                      sA.tagNameCheck(aA))))
              )
            )
              return !1;
          } else if (!n[V]) {
            if (!nt($, me(aA, kA, ""))) {
              if (
                !(
                  (V === "src" || V === "xlink:href" || V === "href") &&
                  M !== "script" &&
                  Mf(aA, "data:") === 0 &&
                  rA[M]
                )
              ) {
                if (!(K && !nt(YA, me(aA, kA, "")))) {
                  if (aA) return !1;
                }
              }
            }
          }
        }
      }
      return !0;
    },
    We = function (M) {
      return M.indexOf("-") > 0;
    },
    je = function (M) {
      gt("beforeSanitizeAttributes", M, null);
      const { attributes: V } = M;
      if (!V) return;
      const aA = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: v,
      };
      let TA = V.length;
      for (; TA--; ) {
        const CA = V[TA],
          { name: PA, namespaceURI: zA, value: x } = CA,
          mA = wA(PA);
        let IA = PA === "value" ? x : Gf(x);
        if (
          ((aA.attrName = mA),
          (aA.attrValue = IA),
          (aA.keepAttr = !0),
          (aA.forceKeepAttr = void 0),
          gt("uponSanitizeAttribute", M, aA),
          (IA = aA.attrValue),
          aA.forceKeepAttr || (Je(PA, M), !aA.keepAttr))
        )
          continue;
        if (!tA && nt(/\/>/i, IA)) {
          Je(PA, M);
          continue;
        }
        C &&
          or([SA, dA, QA], (Xt) => {
            IA = me(IA, Xt, " ");
          });
        const DA = wA(M.nodeName);
        if (LA(DA, mA, IA)) {
          if (
            (g && (mA === "id" || mA === "name") && (Je(PA, M), (IA = h + IA)),
            q &&
              typeof _ == "object" &&
              typeof _.getAttributeType == "function" &&
              !zA)
          )
            switch (_.getAttributeType(DA, mA)) {
              case "TrustedHTML": {
                IA = q.createHTML(IA);
                break;
              }
              case "TrustedScriptURL": {
                IA = q.createScriptURL(IA);
                break;
              }
            }
          try {
            zA ? M.setAttributeNS(zA, PA, IA) : M.setAttribute(PA, IA),
              Zi(A.removed);
          } catch {}
        }
      }
      gt("afterSanitizeAttributes", M, null);
    },
    Kr = function gA(M) {
      let V = null;
      const aA = qr(M);
      for (gt("beforeSanitizeShadowDOM", M, null); (V = aA.nextNode()); )
        gt("uponSanitizeShadowNode", V, null),
          !Pe(V) && (V.content instanceof u && gA(V.content), je(V));
      gt("afterSanitizeShadowDOM", M, null);
    };
  return (
    (A.sanitize = function (gA) {
      let M =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        V = null,
        aA = null,
        TA = null,
        CA = null;
      if (((b = !gA), b && (gA = "<!-->"), typeof gA != "string" && !Ke(gA)))
        if (typeof gA.toString == "function") {
          if (((gA = gA.toString()), typeof gA != "string"))
            throw Se("dirty is not a string, aborting");
        } else throw Se("toString is not a function");
      if (!A.isSupported) return gA;
      if (
        (D || de(M), (A.removed = []), typeof gA == "string" && (S = !1), S)
      ) {
        if (gA.nodeName) {
          const x = wA(gA.nodeName);
          if (!H[x] || p[x])
            throw Se("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (gA instanceof a)
        (V = Yr("<!---->")),
          (aA = V.ownerDocument.importNode(gA, !0)),
          (aA.nodeType === 1 && aA.nodeName === "BODY") ||
          aA.nodeName === "HTML"
            ? (V = aA)
            : V.appendChild(aA);
      else {
        if (!F && !C && !w && gA.indexOf("<") === -1)
          return q && I ? q.createHTML(gA) : gA;
        if (((V = Yr(gA)), !V)) return F ? null : I ? cA : "";
      }
      V && R && GA(V.firstChild);
      const PA = qr(S ? gA : V);
      for (; (TA = PA.nextNode()); )
        Pe(TA) || (TA.content instanceof u && Kr(TA.content), je(TA));
      if (S) return gA;
      if (F) {
        if (U)
          for (CA = iA.call(V.ownerDocument); V.firstChild; )
            CA.appendChild(V.firstChild);
        else CA = V;
        return (
          (v.shadowroot || v.shadowrootmode) && (CA = EA.call(i, CA, !0)), CA
        );
      }
      let zA = w ? V.outerHTML : V.innerHTML;
      return (
        w &&
          H["!doctype"] &&
          V.ownerDocument &&
          V.ownerDocument.doctype &&
          V.ownerDocument.doctype.name &&
          nt(sa, V.ownerDocument.doctype.name) &&
          (zA =
            "<!DOCTYPE " +
            V.ownerDocument.doctype.name +
            `>
` +
            zA),
        C &&
          or([SA, dA, QA], (x) => {
            zA = me(zA, x, " ");
          }),
        q && I ? q.createHTML(zA) : zA
      );
    }),
    (A.setConfig = function () {
      let gA =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      de(gA), (D = !0);
    }),
    (A.clearConfig = function () {
      (Ut = null), (D = !1);
    }),
    (A.isValidAttribute = function (gA, M, V) {
      Ut || de({});
      const aA = wA(gA),
        TA = wA(M);
      return LA(aA, TA, V);
    }),
    (A.addHook = function (gA, M) {
      typeof M == "function" && ((Y[gA] = Y[gA] || []), ye(Y[gA], M));
    }),
    (A.removeHook = function (gA) {
      if (Y[gA]) return Zi(Y[gA]);
    }),
    (A.removeHooks = function (gA) {
      Y[gA] && (Y[gA] = []);
    }),
    (A.removeAllHooks = function () {
      Y = {};
    }),
    A
  );
}
aa();
var zf = Object.create,
  ca = Object.defineProperty,
  $f = Object.getOwnPropertyDescriptor,
  Zf = Object.getOwnPropertyNames,
  Xf = Object.getPrototypeOf,
  AB = Object.prototype.hasOwnProperty,
  ui = (e, A) => () => (A || e((A = { exports: {} }).exports, A), A.exports),
  tB = (e, A, t, i) => {
    if ((A && typeof A == "object") || typeof A == "function")
      for (let s of Zf(A))
        !AB.call(e, s) &&
          s !== t &&
          ca(e, s, {
            get: () => A[s],
            enumerable: !(i = $f(A, s)) || i.enumerable,
          });
    return e;
  },
  eB = (e, A, t) => (
    (t = e != null ? zf(Xf(e)) : {}),
    tB(
      A || !e || !e.__esModule
        ? ca(t, "default", { value: e, enumerable: !0 })
        : t,
      e
    )
  );
function rB(e, ...A) {
  if (!(e instanceof Uint8Array)) throw new Error("Expected Uint8Array");
  if (A.length > 0 && !A.includes(e.length))
    throw new Error(
      `Expected Uint8Array of length ${A}, not of length=${e.length}`
    );
}
function no(e, A = !0) {
  if (e.destroyed) throw new Error("Hash instance has been destroyed");
  if (A && e.finished) throw new Error("Hash#digest() has already been called");
}
function nB(e, A) {
  rB(e);
  let t = A.outputLen;
  if (e.length < t)
    throw new Error(
      `digestInto() expects output buffer of length at least ${t}`
    );
}
var iB = (e) => e instanceof Uint8Array,
  ln = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
  dt = (e, A) => (e << (32 - A)) | (e >>> A),
  oB = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!oB) throw new Error("Non little-endian hardware is not supported");
function sB(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function ga(e) {
  if ((typeof e == "string" && (e = sB(e)), !iB(e)))
    throw new Error(`expected Uint8Array, got ${typeof e}`);
  return e;
}
var aB = class {
  clone() {
    return this._cloneInto();
  }
};
function cB(e) {
  let A = (i) => e().update(ga(i)).digest(),
    t = e();
  return (
    (A.outputLen = t.outputLen),
    (A.blockLen = t.blockLen),
    (A.create = () => e()),
    A
  );
}
function gB(e, A, t, i) {
  if (typeof e.setBigUint64 == "function") return e.setBigUint64(A, t, i);
  let s = BigInt(32),
    u = BigInt(4294967295),
    f = Number((t >> s) & u),
    a = Number(t & u),
    E = i ? 4 : 0,
    d = i ? 0 : 4;
  e.setUint32(A + E, f, i), e.setUint32(A + d, a, i);
}
var uB = class extends aB {
    constructor(e, A, t, i) {
      super(),
        (this.blockLen = e),
        (this.outputLen = A),
        (this.padOffset = t),
        (this.isLE = i),
        (this.finished = !1),
        (this.length = 0),
        (this.pos = 0),
        (this.destroyed = !1),
        (this.buffer = new Uint8Array(e)),
        (this.view = ln(this.buffer));
    }
    update(e) {
      no(this);
      let { view: A, buffer: t, blockLen: i } = this;
      e = ga(e);
      let s = e.length;
      for (let u = 0; u < s; ) {
        let f = Math.min(i - this.pos, s - u);
        if (f === i) {
          let a = ln(e);
          for (; i <= s - u; u += i) this.process(a, u);
          continue;
        }
        t.set(e.subarray(u, u + f), this.pos),
          (this.pos += f),
          (u += f),
          this.pos === i && (this.process(A, 0), (this.pos = 0));
      }
      return (this.length += e.length), this.roundClean(), this;
    }
    digestInto(e) {
      no(this), nB(e, this), (this.finished = !0);
      let { buffer: A, view: t, blockLen: i, isLE: s } = this,
        { pos: u } = this;
      (A[u++] = 128),
        this.buffer.subarray(u).fill(0),
        this.padOffset > i - u && (this.process(t, 0), (u = 0));
      for (let m = u; m < i; m++) A[m] = 0;
      gB(t, i - 8, BigInt(this.length * 8), s), this.process(t, 0);
      let f = ln(e),
        a = this.outputLen;
      if (a % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      let E = a / 4,
        d = this.get();
      if (E > d.length) throw new Error("_sha2: outputLen bigger than state");
      for (let m = 0; m < E; m++) f.setUint32(4 * m, d[m], s);
    }
    digest() {
      let { buffer: e, outputLen: A } = this;
      this.digestInto(e);
      let t = e.slice(0, A);
      return this.destroy(), t;
    }
    _cloneInto(e) {
      e || (e = new this.constructor()), e.set(...this.get());
      let {
        blockLen: A,
        buffer: t,
        length: i,
        finished: s,
        destroyed: u,
        pos: f,
      } = this;
      return (
        (e.length = i),
        (e.pos = f),
        (e.finished = s),
        (e.destroyed = u),
        i % A && e.buffer.set(t),
        e
      );
    }
  },
  fB = (e, A, t) => (e & A) ^ (~e & t),
  BB = (e, A, t) => (e & A) ^ (e & t) ^ (A & t),
  IB = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Ht = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  Ot = new Uint32Array(64),
  hB = class extends uB {
    constructor() {
      super(64, 32, 8, !1),
        (this.A = Ht[0] | 0),
        (this.B = Ht[1] | 0),
        (this.C = Ht[2] | 0),
        (this.D = Ht[3] | 0),
        (this.E = Ht[4] | 0),
        (this.F = Ht[5] | 0),
        (this.G = Ht[6] | 0),
        (this.H = Ht[7] | 0);
    }
    get() {
      let { A: e, B: A, C: t, D: i, E: s, F: u, G: f, H: a } = this;
      return [e, A, t, i, s, u, f, a];
    }
    set(e, A, t, i, s, u, f, a) {
      (this.A = e | 0),
        (this.B = A | 0),
        (this.C = t | 0),
        (this.D = i | 0),
        (this.E = s | 0),
        (this.F = u | 0),
        (this.G = f | 0),
        (this.H = a | 0);
    }
    process(e, A) {
      for (let m = 0; m < 16; m++, A += 4) Ot[m] = e.getUint32(A, !1);
      for (let m = 16; m < 64; m++) {
        let N = Ot[m - 15],
          k = Ot[m - 2],
          _ = dt(N, 7) ^ dt(N, 18) ^ (N >>> 3),
          G = dt(k, 17) ^ dt(k, 19) ^ (k >>> 10);
        Ot[m] = (G + Ot[m - 7] + _ + Ot[m - 16]) | 0;
      }
      let { A: t, B: i, C: s, D: u, E: f, F: a, G: E, H: d } = this;
      for (let m = 0; m < 64; m++) {
        let N = dt(f, 6) ^ dt(f, 11) ^ dt(f, 25),
          k = (d + N + fB(f, a, E) + IB[m] + Ot[m]) | 0,
          _ = ((dt(t, 2) ^ dt(t, 13) ^ dt(t, 22)) + BB(t, i, s)) | 0;
        (d = E),
          (E = a),
          (a = f),
          (f = (u + k) | 0),
          (u = s),
          (s = i),
          (i = t),
          (t = (k + _) | 0);
      }
      (t = (t + this.A) | 0),
        (i = (i + this.B) | 0),
        (s = (s + this.C) | 0),
        (u = (u + this.D) | 0),
        (f = (f + this.E) | 0),
        (a = (a + this.F) | 0),
        (E = (E + this.G) | 0),
        (d = (d + this.H) | 0),
        this.set(t, i, s, u, f, a, E, d);
    }
    roundClean() {
      Ot.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  },
  EB = class extends hB {
    constructor() {
      super(),
        (this.A = -1056596264),
        (this.B = 914150663),
        (this.C = 812702999),
        (this.D = -150054599),
        (this.E = -4191439),
        (this.F = 1750603025),
        (this.G = 1694076839),
        (this.H = -1090891868),
        (this.outputLen = 28);
    }
  },
  ua = cB(() => new EB()),
  lB = () =>
    oo(
      () => import("./lazy.94e471e8.js").then((e) => e.i),
      [
        "./lazy.94e471e8.js",
        "./index.5a19c9f4.js",
        "../assets/index.28121524.css",
      ],
      import.meta.url
    ),
  GB = class Yn {
    constructor(A) {
      this.bytes = A;
    }
    static fromHex(A) {
      return new Yn(Uint8Array.from(Ne.Buffer.from(A, "hex")));
    }
    static fromPrincipal({ principal: A, subAccount: t = QB.fromID(0) }) {
      let i = ea(`
account-id`),
        s = ua.create();
      s.update(ta([...i, ...A.toUint8Array(), ...t.toUint8Array()]));
      let u = s.digest(),
        f = ci(u),
        a = new Uint8Array([...f, ...u]);
      return new Yn(a);
    }
    async toProto() {
      let { AccountIdentifier: A } = await lB(),
        t = new A();
      return t.setHash(this.bytes), t;
    }
    toHex() {
      return ra(this.bytes);
    }
    toUint8Array() {
      return this.bytes;
    }
    toNumbers() {
      return Array.from(this.bytes);
    }
    toAccountIdentifierHash() {
      return { hash: this.toUint8Array() };
    }
  },
  QB = class dr {
    constructor(A) {
      this.bytes = A;
    }
    static fromBytes(A) {
      return A.length != 32
        ? Error("Subaccount length must be 32-bytes")
        : new dr(A);
    }
    static fromPrincipal(A) {
      let t = new Uint8Array(32).fill(0),
        i = A.toUint8Array();
      t[0] = i.length;
      for (let s = 0; s < i.length; s++) t[1 + s] = i[s];
      return new dr(t);
    }
    static fromID(A) {
      if (A < 0 || A > 255) throw "Subaccount ID must be >= 0 and <= 255";
      let t = new Uint8Array(32).fill(0);
      return (t[31] = A), new dr(t);
    }
    toUint8Array() {
      return this.bytes;
    }
  };
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/ xA.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai");
xA.fromText("qhbym-qaaaa-aaaaa-aaafq-cai");
BigInt(1095062083);
BigInt(1347768404);
BigInt(1e4);
BigInt(1e8);
var io = class extends Error {},
  CB = ui((e) => {
    (e.byteLength = E), (e.toByteArray = m), (e.fromByteArray = _);
    var A = [],
      t = [],
      i = typeof Uint8Array < "u" ? Uint8Array : Array,
      s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (u = 0, f = s.length; u < f; ++u)
      (A[u] = s[u]), (t[s.charCodeAt(u)] = u);
    var u, f;
    (t["-".charCodeAt(0)] = 62), (t["_".charCodeAt(0)] = 63);
    function a(G) {
      var L = G.length;
      if (L % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var J = G.indexOf("=");
      J === -1 && (J = L);
      var X = J === L ? 0 : 4 - (J % 4);
      return [J, X];
    }
    function E(G) {
      var L = a(G),
        J = L[0],
        X = L[1];
      return ((J + X) * 3) / 4 - X;
    }
    function d(G, L, J) {
      return ((L + J) * 3) / 4 - J;
    }
    function m(G) {
      var L,
        J = a(G),
        X = J[0],
        z = J[1],
        q = new i(d(G, X, z)),
        cA = 0,
        P = z > 0 ? X - 4 : X,
        W;
      for (W = 0; W < P; W += 4)
        (L =
          (t[G.charCodeAt(W)] << 18) |
          (t[G.charCodeAt(W + 1)] << 12) |
          (t[G.charCodeAt(W + 2)] << 6) |
          t[G.charCodeAt(W + 3)]),
          (q[cA++] = (L >> 16) & 255),
          (q[cA++] = (L >> 8) & 255),
          (q[cA++] = L & 255);
      return (
        z === 2 &&
          ((L = (t[G.charCodeAt(W)] << 2) | (t[G.charCodeAt(W + 1)] >> 4)),
          (q[cA++] = L & 255)),
        z === 1 &&
          ((L =
            (t[G.charCodeAt(W)] << 10) |
            (t[G.charCodeAt(W + 1)] << 4) |
            (t[G.charCodeAt(W + 2)] >> 2)),
          (q[cA++] = (L >> 8) & 255),
          (q[cA++] = L & 255)),
        q
      );
    }
    function N(G) {
      return (
        A[(G >> 18) & 63] + A[(G >> 12) & 63] + A[(G >> 6) & 63] + A[G & 63]
      );
    }
    function k(G, L, J) {
      for (var X, z = [], q = L; q < J; q += 3)
        (X =
          ((G[q] << 16) & 16711680) +
          ((G[q + 1] << 8) & 65280) +
          (G[q + 2] & 255)),
          z.push(N(X));
      return z.join("");
    }
    function _(G) {
      for (
        var L, J = G.length, X = J % 3, z = [], q = 16383, cA = 0, P = J - X;
        cA < P;
        cA += q
      )
        z.push(k(G, cA, cA + q > P ? P : cA + q));
      return (
        X === 1
          ? ((L = G[J - 1]), z.push(A[L >> 2] + A[(L << 4) & 63] + "=="))
          : X === 2 &&
            ((L = (G[J - 2] << 8) + G[J - 1]),
            z.push(A[L >> 10] + A[(L >> 4) & 63] + A[(L << 2) & 63] + "=")),
        z.join("")
      );
    }
  }),
  dB = ui((e) => {
    (e.read = function (A, t, i, s, u) {
      var f,
        a,
        E = u * 8 - s - 1,
        d = (1 << E) - 1,
        m = d >> 1,
        N = -7,
        k = i ? u - 1 : 0,
        _ = i ? -1 : 1,
        G = A[t + k];
      for (
        k += _, f = G & ((1 << -N) - 1), G >>= -N, N += E;
        N > 0;
        f = f * 256 + A[t + k], k += _, N -= 8
      );
      for (
        a = f & ((1 << -N) - 1), f >>= -N, N += s;
        N > 0;
        a = a * 256 + A[t + k], k += _, N -= 8
      );
      if (f === 0) f = 1 - m;
      else {
        if (f === d) return a ? NaN : (G ? -1 : 1) * (1 / 0);
        (a = a + Math.pow(2, s)), (f = f - m);
      }
      return (G ? -1 : 1) * a * Math.pow(2, f - s);
    }),
      (e.write = function (A, t, i, s, u, f) {
        var a,
          E,
          d,
          m = f * 8 - u - 1,
          N = (1 << m) - 1,
          k = N >> 1,
          _ = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          G = s ? 0 : f - 1,
          L = s ? 1 : -1,
          J = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((E = isNaN(t) ? 1 : 0), (a = N))
              : ((a = Math.floor(Math.log(t) / Math.LN2)),
                t * (d = Math.pow(2, -a)) < 1 && (a--, (d *= 2)),
                a + k >= 1 ? (t += _ / d) : (t += _ * Math.pow(2, 1 - k)),
                t * d >= 2 && (a++, (d /= 2)),
                a + k >= N
                  ? ((E = 0), (a = N))
                  : a + k >= 1
                  ? ((E = (t * d - 1) * Math.pow(2, u)), (a = a + k))
                  : ((E = t * Math.pow(2, k - 1) * Math.pow(2, u)), (a = 0)));
          u >= 8;
          A[i + G] = E & 255, G += L, E /= 256, u -= 8
        );
        for (
          a = (a << u) | E, m += u;
          m > 0;
          A[i + G] = a & 255, G += L, a /= 256, m -= 8
        );
        A[i + G - L] |= J * 128;
      });
  }),
  pB = ui((e) => {
    var A = CB(),
      t = dB(),
      i =
        typeof Symbol == "function" && typeof Symbol.for == "function"
          ? Symbol.for("nodejs.util.inspect.custom")
          : null;
    (e.Buffer = a), (e.SlowBuffer = z), (e.INSPECT_MAX_BYTES = 50);
    var s = 2147483647;
    (e.kMaxLength = s),
      (a.TYPED_ARRAY_SUPPORT = u()),
      !a.TYPED_ARRAY_SUPPORT &&
        typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
    function u() {
      try {
        let n = new Uint8Array(1),
          r = {
            foo: function () {
              return 42;
            },
          };
        return (
          Object.setPrototypeOf(r, Uint8Array.prototype),
          Object.setPrototypeOf(n, r),
          n.foo() === 42
        );
      } catch {
        return !1;
      }
    }
    Object.defineProperty(a.prototype, "parent", {
      enumerable: !0,
      get: function () {
        if (a.isBuffer(this)) return this.buffer;
      },
    }),
      Object.defineProperty(a.prototype, "offset", {
        enumerable: !0,
        get: function () {
          if (a.isBuffer(this)) return this.byteOffset;
        },
      });
    function f(n) {
      if (n > s)
        throw new RangeError(
          'The value "' + n + '" is invalid for option "size"'
        );
      let r = new Uint8Array(n);
      return Object.setPrototypeOf(r, a.prototype), r;
    }
    function a(n, r, o) {
      if (typeof n == "number") {
        if (typeof r == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return N(n);
      }
      return E(n, r, o);
    }
    a.poolSize = 8192;
    function E(n, r, o) {
      if (typeof n == "string") return k(n, r);
      if (ArrayBuffer.isView(n)) return G(n);
      if (n == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof n
        );
      if (
        T(n, ArrayBuffer) ||
        (n && T(n.buffer, ArrayBuffer)) ||
        (typeof SharedArrayBuffer < "u" &&
          (T(n, SharedArrayBuffer) || (n && T(n.buffer, SharedArrayBuffer))))
      )
        return L(n, r, o);
      if (typeof n == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      let B = n.valueOf && n.valueOf();
      if (B != null && B !== n) return a.from(B, r, o);
      let l = J(n);
      if (l) return l;
      if (
        typeof Symbol < "u" &&
        Symbol.toPrimitive != null &&
        typeof n[Symbol.toPrimitive] == "function"
      )
        return a.from(n[Symbol.toPrimitive]("string"), r, o);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof n
      );
    }
    (a.from = function (n, r, o) {
      return E(n, r, o);
    }),
      Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
      Object.setPrototypeOf(a, Uint8Array);
    function d(n) {
      if (typeof n != "number")
        throw new TypeError('"size" argument must be of type number');
      if (n < 0)
        throw new RangeError(
          'The value "' + n + '" is invalid for option "size"'
        );
    }
    function m(n, r, o) {
      return (
        d(n),
        n <= 0
          ? f(n)
          : r !== void 0
          ? typeof o == "string"
            ? f(n).fill(r, o)
            : f(n).fill(r)
          : f(n)
      );
    }
    a.alloc = function (n, r, o) {
      return m(n, r, o);
    };
    function N(n) {
      return d(n), f(n < 0 ? 0 : X(n) | 0);
    }
    (a.allocUnsafe = function (n) {
      return N(n);
    }),
      (a.allocUnsafeSlow = function (n) {
        return N(n);
      });
    function k(n, r) {
      if (
        ((typeof r != "string" || r === "") && (r = "utf8"), !a.isEncoding(r))
      )
        throw new TypeError("Unknown encoding: " + r);
      let o = q(n, r) | 0,
        B = f(o),
        l = B.write(n, r);
      return l !== o && (B = B.slice(0, l)), B;
    }
    function _(n) {
      let r = n.length < 0 ? 0 : X(n.length) | 0,
        o = f(r);
      for (let B = 0; B < r; B += 1) o[B] = n[B] & 255;
      return o;
    }
    function G(n) {
      if (T(n, Uint8Array)) {
        let r = new Uint8Array(n);
        return L(r.buffer, r.byteOffset, r.byteLength);
      }
      return _(n);
    }
    function L(n, r, o) {
      if (r < 0 || n.byteLength < r)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (n.byteLength < r + (o || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let B;
      return (
        r === void 0 && o === void 0
          ? (B = new Uint8Array(n))
          : o === void 0
          ? (B = new Uint8Array(n, r))
          : (B = new Uint8Array(n, r, o)),
        Object.setPrototypeOf(B, a.prototype),
        B
      );
    }
    function J(n) {
      if (a.isBuffer(n)) {
        let r = X(n.length) | 0,
          o = f(r);
        return o.length === 0 || n.copy(o, 0, 0, r), o;
      }
      if (n.length !== void 0)
        return typeof n.length != "number" || O(n.length) ? f(0) : _(n);
      if (n.type === "Buffer" && Array.isArray(n.data)) return _(n.data);
    }
    function X(n) {
      if (n >= s)
        throw new RangeError(
          "Attempt to allocate Buffer larger than maximum size: 0x" +
            s.toString(16) +
            " bytes"
        );
      return n | 0;
    }
    function z(n) {
      return +n != n && (n = 0), a.alloc(+n);
    }
    (a.isBuffer = function (n) {
      return n != null && n._isBuffer === !0 && n !== a.prototype;
    }),
      (a.compare = function (n, r) {
        if (
          (T(n, Uint8Array) && (n = a.from(n, n.offset, n.byteLength)),
          T(r, Uint8Array) && (r = a.from(r, r.offset, r.byteLength)),
          !a.isBuffer(n) || !a.isBuffer(r))
        )
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        if (n === r) return 0;
        let o = n.length,
          B = r.length;
        for (let l = 0, y = Math.min(o, B); l < y; ++l)
          if (n[l] !== r[l]) {
            (o = n[l]), (B = r[l]);
            break;
          }
        return o < B ? -1 : B < o ? 1 : 0;
      }),
      (a.isEncoding = function (n) {
        switch (String(n).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1;
        }
      }),
      (a.concat = function (n, r) {
        if (!Array.isArray(n))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (n.length === 0) return a.alloc(0);
        let o;
        if (r === void 0)
          for (r = 0, o = 0; o < n.length; ++o) r += n[o].length;
        let B = a.allocUnsafe(r),
          l = 0;
        for (o = 0; o < n.length; ++o) {
          let y = n[o];
          if (T(y, Uint8Array))
            l + y.length > B.length
              ? (a.isBuffer(y) || (y = a.from(y)), y.copy(B, l))
              : Uint8Array.prototype.set.call(B, y, l);
          else if (a.isBuffer(y)) y.copy(B, l);
          else
            throw new TypeError('"list" argument must be an Array of Buffers');
          l += y.length;
        }
        return B;
      });
    function q(n, r) {
      if (a.isBuffer(n)) return n.length;
      if (ArrayBuffer.isView(n) || T(n, ArrayBuffer)) return n.byteLength;
      if (typeof n != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
            typeof n
        );
      let o = n.length,
        B = arguments.length > 2 && arguments[2] === !0;
      if (!B && o === 0) return 0;
      let l = !1;
      for (;;)
        switch (r) {
          case "ascii":
          case "latin1":
          case "binary":
            return o;
          case "utf8":
          case "utf-8":
            return c(n).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return o * 2;
          case "hex":
            return o >>> 1;
          case "base64":
            return Q(n).length;
          default:
            if (l) return B ? -1 : c(n).length;
            (r = ("" + r).toLowerCase()), (l = !0);
        }
    }
    a.byteLength = q;
    function cA(n, r, o) {
      let B = !1;
      if (
        ((r === void 0 || r < 0) && (r = 0),
        r > this.length ||
          ((o === void 0 || o > this.length) && (o = this.length), o <= 0) ||
          ((o >>>= 0), (r >>>= 0), o <= r))
      )
        return "";
      for (n || (n = "utf8"); ; )
        switch (n) {
          case "hex":
            return H(this, r, o);
          case "utf8":
          case "utf-8":
            return FA(this, r, o);
          case "ascii":
            return kA(this, r, o);
          case "latin1":
          case "binary":
            return $(this, r, o);
          case "base64":
            return QA(this, r, o);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return oA(this, r, o);
          default:
            if (B) throw new TypeError("Unknown encoding: " + n);
            (n = (n + "").toLowerCase()), (B = !0);
        }
    }
    a.prototype._isBuffer = !0;
    function P(n, r, o) {
      let B = n[r];
      (n[r] = n[o]), (n[o] = B);
    }
    (a.prototype.swap16 = function () {
      let n = this.length;
      if (n % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let r = 0; r < n; r += 2) P(this, r, r + 1);
      return this;
    }),
      (a.prototype.swap32 = function () {
        let n = this.length;
        if (n % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let r = 0; r < n; r += 4) P(this, r, r + 3), P(this, r + 1, r + 2);
        return this;
      }),
      (a.prototype.swap64 = function () {
        let n = this.length;
        if (n % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let r = 0; r < n; r += 8)
          P(this, r, r + 7),
            P(this, r + 1, r + 6),
            P(this, r + 2, r + 5),
            P(this, r + 3, r + 4);
        return this;
      }),
      (a.prototype.toString = function () {
        let n = this.length;
        return n === 0
          ? ""
          : arguments.length === 0
          ? FA(this, 0, n)
          : cA.apply(this, arguments);
      }),
      (a.prototype.toLocaleString = a.prototype.toString),
      (a.prototype.equals = function (n) {
        if (!a.isBuffer(n)) throw new TypeError("Argument must be a Buffer");
        return this === n ? !0 : a.compare(this, n) === 0;
      }),
      (a.prototype.inspect = function () {
        let n = "",
          r = e.INSPECT_MAX_BYTES;
        return (
          (n = this.toString("hex", 0, r)
            .replace(/(.{2})/g, "$1 ")
            .trim()),
          this.length > r && (n += " ... "),
          "<Buffer " + n + ">"
        );
      }),
      i && (a.prototype[i] = a.prototype.inspect),
      (a.prototype.compare = function (n, r, o, B, l) {
        if (
          (T(n, Uint8Array) && (n = a.from(n, n.offset, n.byteLength)),
          !a.isBuffer(n))
        )
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
              typeof n
          );
        if (
          (r === void 0 && (r = 0),
          o === void 0 && (o = n ? n.length : 0),
          B === void 0 && (B = 0),
          l === void 0 && (l = this.length),
          r < 0 || o > n.length || B < 0 || l > this.length)
        )
          throw new RangeError("out of range index");
        if (B >= l && r >= o) return 0;
        if (B >= l) return -1;
        if (r >= o) return 1;
        if (((r >>>= 0), (o >>>= 0), (B >>>= 0), (l >>>= 0), this === n))
          return 0;
        let y = l - B,
          b = o - r,
          Z = Math.min(y, b),
          uA = this.slice(B, l),
          nA = n.slice(r, o);
        for (let AA = 0; AA < Z; ++AA)
          if (uA[AA] !== nA[AA]) {
            (y = uA[AA]), (b = nA[AA]);
            break;
          }
        return y < b ? -1 : b < y ? 1 : 0;
      });
    function W(n, r, o, B, l) {
      if (n.length === 0) return -1;
      if (
        (typeof o == "string"
          ? ((B = o), (o = 0))
          : o > 2147483647
          ? (o = 2147483647)
          : o < -2147483648 && (o = -2147483648),
        (o = +o),
        O(o) && (o = l ? 0 : n.length - 1),
        o < 0 && (o = n.length + o),
        o >= n.length)
      ) {
        if (l) return -1;
        o = n.length - 1;
      } else if (o < 0)
        if (l) o = 0;
        else return -1;
      if ((typeof r == "string" && (r = a.from(r, B)), a.isBuffer(r)))
        return r.length === 0 ? -1 : iA(n, r, o, B, l);
      if (typeof r == "number")
        return (
          (r = r & 255),
          typeof Uint8Array.prototype.indexOf == "function"
            ? l
              ? Uint8Array.prototype.indexOf.call(n, r, o)
              : Uint8Array.prototype.lastIndexOf.call(n, r, o)
            : iA(n, [r], o, B, l)
        );
      throw new TypeError("val must be string, number or Buffer");
    }
    function iA(n, r, o, B, l) {
      let y = 1,
        b = n.length,
        Z = r.length;
      if (
        B !== void 0 &&
        ((B = String(B).toLowerCase()),
        B === "ucs2" || B === "ucs-2" || B === "utf16le" || B === "utf-16le")
      ) {
        if (n.length < 2 || r.length < 2) return -1;
        (y = 2), (b /= 2), (Z /= 2), (o /= 2);
      }
      function uA(AA, BA) {
        return y === 1 ? AA[BA] : AA.readUInt16BE(BA * y);
      }
      let nA;
      if (l) {
        let AA = -1;
        for (nA = o; nA < b; nA++)
          if (uA(n, nA) === uA(r, AA === -1 ? 0 : nA - AA)) {
            if ((AA === -1 && (AA = nA), nA - AA + 1 === Z)) return AA * y;
          } else AA !== -1 && (nA -= nA - AA), (AA = -1);
      } else
        for (o + Z > b && (o = b - Z), nA = o; nA >= 0; nA--) {
          let AA = !0;
          for (let BA = 0; BA < Z; BA++)
            if (uA(n, nA + BA) !== uA(r, BA)) {
              AA = !1;
              break;
            }
          if (AA) return nA;
        }
      return -1;
    }
    (a.prototype.includes = function (n, r, o) {
      return this.indexOf(n, r, o) !== -1;
    }),
      (a.prototype.indexOf = function (n, r, o) {
        return W(this, n, r, o, !0);
      }),
      (a.prototype.lastIndexOf = function (n, r, o) {
        return W(this, n, r, o, !1);
      });
    function fA(n, r, o, B) {
      o = Number(o) || 0;
      let l = n.length - o;
      B ? ((B = Number(B)), B > l && (B = l)) : (B = l);
      let y = r.length;
      B > y / 2 && (B = y / 2);
      let b;
      for (b = 0; b < B; ++b) {
        let Z = parseInt(r.substr(b * 2, 2), 16);
        if (O(Z)) return b;
        n[o + b] = Z;
      }
      return b;
    }
    function EA(n, r, o, B) {
      return S(c(r, n.length - o), n, o, B);
    }
    function Y(n, r, o, B) {
      return S(g(r), n, o, B);
    }
    function SA(n, r, o, B) {
      return S(Q(r), n, o, B);
    }
    function dA(n, r, o, B) {
      return S(h(r, n.length - o), n, o, B);
    }
    (a.prototype.write = function (n, r, o, B) {
      if (r === void 0) (B = "utf8"), (o = this.length), (r = 0);
      else if (o === void 0 && typeof r == "string")
        (B = r), (o = this.length), (r = 0);
      else if (isFinite(r))
        (r = r >>> 0),
          isFinite(o)
            ? ((o = o >>> 0), B === void 0 && (B = "utf8"))
            : ((B = o), (o = void 0));
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      let l = this.length - r;
      if (
        ((o === void 0 || o > l) && (o = l),
        (n.length > 0 && (o < 0 || r < 0)) || r > this.length)
      )
        throw new RangeError("Attempt to write outside buffer bounds");
      B || (B = "utf8");
      let y = !1;
      for (;;)
        switch (B) {
          case "hex":
            return fA(this, n, r, o);
          case "utf8":
          case "utf-8":
            return EA(this, n, r, o);
          case "ascii":
          case "latin1":
          case "binary":
            return Y(this, n, r, o);
          case "base64":
            return SA(this, n, r, o);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return dA(this, n, r, o);
          default:
            if (y) throw new TypeError("Unknown encoding: " + B);
            (B = ("" + B).toLowerCase()), (y = !0);
        }
    }),
      (a.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0),
        };
      });
    function QA(n, r, o) {
      return r === 0 && o === n.length
        ? A.fromByteArray(n)
        : A.fromByteArray(n.slice(r, o));
    }
    function FA(n, r, o) {
      o = Math.min(n.length, o);
      let B = [],
        l = r;
      for (; l < o; ) {
        let y = n[l],
          b = null,
          Z = y > 239 ? 4 : y > 223 ? 3 : y > 191 ? 2 : 1;
        if (l + Z <= o) {
          let uA, nA, AA, BA;
          switch (Z) {
            case 1:
              y < 128 && (b = y);
              break;
            case 2:
              (uA = n[l + 1]),
                (uA & 192) === 128 &&
                  ((BA = ((y & 31) << 6) | (uA & 63)), BA > 127 && (b = BA));
              break;
            case 3:
              (uA = n[l + 1]),
                (nA = n[l + 2]),
                (uA & 192) === 128 &&
                  (nA & 192) === 128 &&
                  ((BA = ((y & 15) << 12) | ((uA & 63) << 6) | (nA & 63)),
                  BA > 2047 && (BA < 55296 || BA > 57343) && (b = BA));
              break;
            case 4:
              (uA = n[l + 1]),
                (nA = n[l + 2]),
                (AA = n[l + 3]),
                (uA & 192) === 128 &&
                  (nA & 192) === 128 &&
                  (AA & 192) === 128 &&
                  ((BA =
                    ((y & 15) << 18) |
                    ((uA & 63) << 12) |
                    ((nA & 63) << 6) |
                    (AA & 63)),
                  BA > 65535 && BA < 1114112 && (b = BA));
          }
        }
        b === null
          ? ((b = 65533), (Z = 1))
          : b > 65535 &&
            ((b -= 65536),
            B.push(((b >>> 10) & 1023) | 55296),
            (b = 56320 | (b & 1023))),
          B.push(b),
          (l += Z);
      }
      return YA(B);
    }
    var _A = 4096;
    function YA(n) {
      let r = n.length;
      if (r <= _A) return String.fromCharCode.apply(String, n);
      let o = "",
        B = 0;
      for (; B < r; )
        o += String.fromCharCode.apply(String, n.slice(B, (B += _A)));
      return o;
    }
    function kA(n, r, o) {
      let B = "";
      o = Math.min(n.length, o);
      for (let l = r; l < o; ++l) B += String.fromCharCode(n[l] & 127);
      return B;
    }
    function $(n, r, o) {
      let B = "";
      o = Math.min(n.length, o);
      for (let l = r; l < o; ++l) B += String.fromCharCode(n[l]);
      return B;
    }
    function H(n, r, o) {
      let B = n.length;
      (!r || r < 0) && (r = 0), (!o || o < 0 || o > B) && (o = B);
      let l = "";
      for (let y = r; y < o; ++y) l += eA[n[y]];
      return l;
    }
    function oA(n, r, o) {
      let B = n.slice(r, o),
        l = "";
      for (let y = 0; y < B.length - 1; y += 2)
        l += String.fromCharCode(B[y] + B[y + 1] * 256);
      return l;
    }
    a.prototype.slice = function (n, r) {
      let o = this.length;
      (n = ~~n),
        (r = r === void 0 ? o : ~~r),
        n < 0 ? ((n += o), n < 0 && (n = 0)) : n > o && (n = o),
        r < 0 ? ((r += o), r < 0 && (r = 0)) : r > o && (r = o),
        r < n && (r = n);
      let B = this.subarray(n, r);
      return Object.setPrototypeOf(B, a.prototype), B;
    };
    function v(n, r, o) {
      if (n % 1 !== 0 || n < 0) throw new RangeError("offset is not uint");
      if (n + r > o)
        throw new RangeError("Trying to access beyond buffer length");
    }
    (a.prototype.readUintLE = a.prototype.readUIntLE =
      function (n, r, o) {
        (n = n >>> 0), (r = r >>> 0), o || v(n, r, this.length);
        let B = this[n],
          l = 1,
          y = 0;
        for (; ++y < r && (l *= 256); ) B += this[n + y] * l;
        return B;
      }),
      (a.prototype.readUintBE = a.prototype.readUIntBE =
        function (n, r, o) {
          (n = n >>> 0), (r = r >>> 0), o || v(n, r, this.length);
          let B = this[n + --r],
            l = 1;
          for (; r > 0 && (l *= 256); ) B += this[n + --r] * l;
          return B;
        }),
      (a.prototype.readUint8 = a.prototype.readUInt8 =
        function (n, r) {
          return (n = n >>> 0), r || v(n, 1, this.length), this[n];
        }),
      (a.prototype.readUint16LE = a.prototype.readUInt16LE =
        function (n, r) {
          return (
            (n = n >>> 0),
            r || v(n, 2, this.length),
            this[n] | (this[n + 1] << 8)
          );
        }),
      (a.prototype.readUint16BE = a.prototype.readUInt16BE =
        function (n, r) {
          return (
            (n = n >>> 0),
            r || v(n, 2, this.length),
            (this[n] << 8) | this[n + 1]
          );
        }),
      (a.prototype.readUint32LE = a.prototype.readUInt32LE =
        function (n, r) {
          return (
            (n = n >>> 0),
            r || v(n, 4, this.length),
            (this[n] | (this[n + 1] << 8) | (this[n + 2] << 16)) +
              this[n + 3] * 16777216
          );
        }),
      (a.prototype.readUint32BE = a.prototype.readUInt32BE =
        function (n, r) {
          return (
            (n = n >>> 0),
            r || v(n, 4, this.length),
            this[n] * 16777216 +
              ((this[n + 1] << 16) | (this[n + 2] << 8) | this[n + 3])
          );
        }),
      (a.prototype.readBigUInt64LE = rA(function (n) {
        (n = n >>> 0), R(n, "offset");
        let r = this[n],
          o = this[n + 7];
        (r === void 0 || o === void 0) && F(n, this.length - 8);
        let B =
            r + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24,
          l =
            this[++n] + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + o * 2 ** 24;
        return BigInt(B) + (BigInt(l) << BigInt(32));
      })),
      (a.prototype.readBigUInt64BE = rA(function (n) {
        (n = n >>> 0), R(n, "offset");
        let r = this[n],
          o = this[n + 7];
        (r === void 0 || o === void 0) && F(n, this.length - 8);
        let B =
            r * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + this[++n],
          l =
            this[++n] * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + o;
        return (BigInt(B) << BigInt(32)) + BigInt(l);
      })),
      (a.prototype.readIntLE = function (n, r, o) {
        (n = n >>> 0), (r = r >>> 0), o || v(n, r, this.length);
        let B = this[n],
          l = 1,
          y = 0;
        for (; ++y < r && (l *= 256); ) B += this[n + y] * l;
        return (l *= 128), B >= l && (B -= Math.pow(2, 8 * r)), B;
      }),
      (a.prototype.readIntBE = function (n, r, o) {
        (n = n >>> 0), (r = r >>> 0), o || v(n, r, this.length);
        let B = r,
          l = 1,
          y = this[n + --B];
        for (; B > 0 && (l *= 256); ) y += this[n + --B] * l;
        return (l *= 128), y >= l && (y -= Math.pow(2, 8 * r)), y;
      }),
      (a.prototype.readInt8 = function (n, r) {
        return (
          (n = n >>> 0),
          r || v(n, 1, this.length),
          this[n] & 128 ? (255 - this[n] + 1) * -1 : this[n]
        );
      }),
      (a.prototype.readInt16LE = function (n, r) {
        (n = n >>> 0), r || v(n, 2, this.length);
        let o = this[n] | (this[n + 1] << 8);
        return o & 32768 ? o | 4294901760 : o;
      }),
      (a.prototype.readInt16BE = function (n, r) {
        (n = n >>> 0), r || v(n, 2, this.length);
        let o = this[n + 1] | (this[n] << 8);
        return o & 32768 ? o | 4294901760 : o;
      }),
      (a.prototype.readInt32LE = function (n, r) {
        return (
          (n = n >>> 0),
          r || v(n, 4, this.length),
          this[n] |
            (this[n + 1] << 8) |
            (this[n + 2] << 16) |
            (this[n + 3] << 24)
        );
      }),
      (a.prototype.readInt32BE = function (n, r) {
        return (
          (n = n >>> 0),
          r || v(n, 4, this.length),
          (this[n] << 24) |
            (this[n + 1] << 16) |
            (this[n + 2] << 8) |
            this[n + 3]
        );
      }),
      (a.prototype.readBigInt64LE = rA(function (n) {
        (n = n >>> 0), R(n, "offset");
        let r = this[n],
          o = this[n + 7];
        (r === void 0 || o === void 0) && F(n, this.length - 8);
        let B =
          this[n + 4] +
          this[n + 5] * 2 ** 8 +
          this[n + 6] * 2 ** 16 +
          (o << 24);
        return (
          (BigInt(B) << BigInt(32)) +
          BigInt(
            r + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24
          )
        );
      })),
      (a.prototype.readBigInt64BE = rA(function (n) {
        (n = n >>> 0), R(n, "offset");
        let r = this[n],
          o = this[n + 7];
        (r === void 0 || o === void 0) && F(n, this.length - 8);
        let B =
          (r << 24) + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + this[++n];
        return (
          (BigInt(B) << BigInt(32)) +
          BigInt(
            this[++n] * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + o
          )
        );
      })),
      (a.prototype.readFloatLE = function (n, r) {
        return (
          (n = n >>> 0), r || v(n, 4, this.length), t.read(this, n, !0, 23, 4)
        );
      }),
      (a.prototype.readFloatBE = function (n, r) {
        return (
          (n = n >>> 0), r || v(n, 4, this.length), t.read(this, n, !1, 23, 4)
        );
      }),
      (a.prototype.readDoubleLE = function (n, r) {
        return (
          (n = n >>> 0), r || v(n, 8, this.length), t.read(this, n, !0, 52, 8)
        );
      }),
      (a.prototype.readDoubleBE = function (n, r) {
        return (
          (n = n >>> 0), r || v(n, 8, this.length), t.read(this, n, !1, 52, 8)
        );
      });
    function j(n, r, o, B, l, y) {
      if (!a.isBuffer(n))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (r > l || r < y)
        throw new RangeError('"value" argument is out of bounds');
      if (o + B > n.length) throw new RangeError("Index out of range");
    }
    (a.prototype.writeUintLE = a.prototype.writeUIntLE =
      function (n, r, o, B) {
        if (((n = +n), (r = r >>> 0), (o = o >>> 0), !B)) {
          let b = Math.pow(2, 8 * o) - 1;
          j(this, n, r, o, b, 0);
        }
        let l = 1,
          y = 0;
        for (this[r] = n & 255; ++y < o && (l *= 256); )
          this[r + y] = (n / l) & 255;
        return r + o;
      }),
      (a.prototype.writeUintBE = a.prototype.writeUIntBE =
        function (n, r, o, B) {
          if (((n = +n), (r = r >>> 0), (o = o >>> 0), !B)) {
            let b = Math.pow(2, 8 * o) - 1;
            j(this, n, r, o, b, 0);
          }
          let l = o - 1,
            y = 1;
          for (this[r + l] = n & 255; --l >= 0 && (y *= 256); )
            this[r + l] = (n / y) & 255;
          return r + o;
        }),
      (a.prototype.writeUint8 = a.prototype.writeUInt8 =
        function (n, r, o) {
          return (
            (n = +n),
            (r = r >>> 0),
            o || j(this, n, r, 1, 255, 0),
            (this[r] = n & 255),
            r + 1
          );
        }),
      (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
        function (n, r, o) {
          return (
            (n = +n),
            (r = r >>> 0),
            o || j(this, n, r, 2, 65535, 0),
            (this[r] = n & 255),
            (this[r + 1] = n >>> 8),
            r + 2
          );
        }),
      (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
        function (n, r, o) {
          return (
            (n = +n),
            (r = r >>> 0),
            o || j(this, n, r, 2, 65535, 0),
            (this[r] = n >>> 8),
            (this[r + 1] = n & 255),
            r + 2
          );
        }),
      (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
        function (n, r, o) {
          return (
            (n = +n),
            (r = r >>> 0),
            o || j(this, n, r, 4, 4294967295, 0),
            (this[r + 3] = n >>> 24),
            (this[r + 2] = n >>> 16),
            (this[r + 1] = n >>> 8),
            (this[r] = n & 255),
            r + 4
          );
        }),
      (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
        function (n, r, o) {
          return (
            (n = +n),
            (r = r >>> 0),
            o || j(this, n, r, 4, 4294967295, 0),
            (this[r] = n >>> 24),
            (this[r + 1] = n >>> 16),
            (this[r + 2] = n >>> 8),
            (this[r + 3] = n & 255),
            r + 4
          );
        });
    function sA(n, r, o, B, l) {
      D(r, B, l, n, o, 7);
      let y = Number(r & BigInt(4294967295));
      (n[o++] = y),
        (y = y >> 8),
        (n[o++] = y),
        (y = y >> 8),
        (n[o++] = y),
        (y = y >> 8),
        (n[o++] = y);
      let b = Number((r >> BigInt(32)) & BigInt(4294967295));
      return (
        (n[o++] = b),
        (b = b >> 8),
        (n[o++] = b),
        (b = b >> 8),
        (n[o++] = b),
        (b = b >> 8),
        (n[o++] = b),
        o
      );
    }
    function p(n, r, o, B, l) {
      D(r, B, l, n, o, 7);
      let y = Number(r & BigInt(4294967295));
      (n[o + 7] = y),
        (y = y >> 8),
        (n[o + 6] = y),
        (y = y >> 8),
        (n[o + 5] = y),
        (y = y >> 8),
        (n[o + 4] = y);
      let b = Number((r >> BigInt(32)) & BigInt(4294967295));
      return (
        (n[o + 3] = b),
        (b = b >> 8),
        (n[o + 2] = b),
        (b = b >> 8),
        (n[o + 1] = b),
        (b = b >> 8),
        (n[o] = b),
        o + 8
      );
    }
    (a.prototype.writeBigUInt64LE = rA(function (n, r = 0) {
      return sA(this, n, r, BigInt(0), BigInt("0xffffffffffffffff"));
    })),
      (a.prototype.writeBigUInt64BE = rA(function (n, r = 0) {
        return p(this, n, r, BigInt(0), BigInt("0xffffffffffffffff"));
      })),
      (a.prototype.writeIntLE = function (n, r, o, B) {
        if (((n = +n), (r = r >>> 0), !B)) {
          let Z = Math.pow(2, 8 * o - 1);
          j(this, n, r, o, Z - 1, -Z);
        }
        let l = 0,
          y = 1,
          b = 0;
        for (this[r] = n & 255; ++l < o && (y *= 256); )
          n < 0 && b === 0 && this[r + l - 1] !== 0 && (b = 1),
            (this[r + l] = (((n / y) >> 0) - b) & 255);
        return r + o;
      }),
      (a.prototype.writeIntBE = function (n, r, o, B) {
        if (((n = +n), (r = r >>> 0), !B)) {
          let Z = Math.pow(2, 8 * o - 1);
          j(this, n, r, o, Z - 1, -Z);
        }
        let l = o - 1,
          y = 1,
          b = 0;
        for (this[r + l] = n & 255; --l >= 0 && (y *= 256); )
          n < 0 && b === 0 && this[r + l + 1] !== 0 && (b = 1),
            (this[r + l] = (((n / y) >> 0) - b) & 255);
        return r + o;
      }),
      (a.prototype.writeInt8 = function (n, r, o) {
        return (
          (n = +n),
          (r = r >>> 0),
          o || j(this, n, r, 1, 127, -128),
          n < 0 && (n = 255 + n + 1),
          (this[r] = n & 255),
          r + 1
        );
      }),
      (a.prototype.writeInt16LE = function (n, r, o) {
        return (
          (n = +n),
          (r = r >>> 0),
          o || j(this, n, r, 2, 32767, -32768),
          (this[r] = n & 255),
          (this[r + 1] = n >>> 8),
          r + 2
        );
      }),
      (a.prototype.writeInt16BE = function (n, r, o) {
        return (
          (n = +n),
          (r = r >>> 0),
          o || j(this, n, r, 2, 32767, -32768),
          (this[r] = n >>> 8),
          (this[r + 1] = n & 255),
          r + 2
        );
      }),
      (a.prototype.writeInt32LE = function (n, r, o) {
        return (
          (n = +n),
          (r = r >>> 0),
          o || j(this, n, r, 4, 2147483647, -2147483648),
          (this[r] = n & 255),
          (this[r + 1] = n >>> 8),
          (this[r + 2] = n >>> 16),
          (this[r + 3] = n >>> 24),
          r + 4
        );
      }),
      (a.prototype.writeInt32BE = function (n, r, o) {
        return (
          (n = +n),
          (r = r >>> 0),
          o || j(this, n, r, 4, 2147483647, -2147483648),
          n < 0 && (n = 4294967295 + n + 1),
          (this[r] = n >>> 24),
          (this[r + 1] = n >>> 16),
          (this[r + 2] = n >>> 8),
          (this[r + 3] = n & 255),
          r + 4
        );
      }),
      (a.prototype.writeBigInt64LE = rA(function (n, r = 0) {
        return sA(
          this,
          n,
          r,
          -BigInt("0x8000000000000000"),
          BigInt("0x7fffffffffffffff")
        );
      })),
      (a.prototype.writeBigInt64BE = rA(function (n, r = 0) {
        return p(
          this,
          n,
          r,
          -BigInt("0x8000000000000000"),
          BigInt("0x7fffffffffffffff")
        );
      }));
    function pA(n, r, o, B, l, y) {
      if (o + B > n.length) throw new RangeError("Index out of range");
      if (o < 0) throw new RangeError("Index out of range");
    }
    function lA(n, r, o, B, l) {
      return (
        (r = +r),
        (o = o >>> 0),
        l || pA(n, r, o, 4),
        t.write(n, r, o, B, 23, 4),
        o + 4
      );
    }
    (a.prototype.writeFloatLE = function (n, r, o) {
      return lA(this, n, r, !0, o);
    }),
      (a.prototype.writeFloatBE = function (n, r, o) {
        return lA(this, n, r, !1, o);
      });
    function yA(n, r, o, B, l) {
      return (
        (r = +r),
        (o = o >>> 0),
        l || pA(n, r, o, 8),
        t.write(n, r, o, B, 52, 8),
        o + 8
      );
    }
    (a.prototype.writeDoubleLE = function (n, r, o) {
      return yA(this, n, r, !0, o);
    }),
      (a.prototype.writeDoubleBE = function (n, r, o) {
        return yA(this, n, r, !1, o);
      }),
      (a.prototype.copy = function (n, r, o, B) {
        if (!a.isBuffer(n)) throw new TypeError("argument should be a Buffer");
        if (
          (o || (o = 0),
          !B && B !== 0 && (B = this.length),
          r >= n.length && (r = n.length),
          r || (r = 0),
          B > 0 && B < o && (B = o),
          B === o || n.length === 0 || this.length === 0)
        )
          return 0;
        if (r < 0) throw new RangeError("targetStart out of bounds");
        if (o < 0 || o >= this.length)
          throw new RangeError("Index out of range");
        if (B < 0) throw new RangeError("sourceEnd out of bounds");
        B > this.length && (B = this.length),
          n.length - r < B - o && (B = n.length - r + o);
        let l = B - o;
        return (
          this === n && typeof Uint8Array.prototype.copyWithin == "function"
            ? this.copyWithin(r, o, B)
            : Uint8Array.prototype.set.call(n, this.subarray(o, B), r),
          l
        );
      }),
      (a.prototype.fill = function (n, r, o, B) {
        if (typeof n == "string") {
          if (
            (typeof r == "string"
              ? ((B = r), (r = 0), (o = this.length))
              : typeof o == "string" && ((B = o), (o = this.length)),
            B !== void 0 && typeof B != "string")
          )
            throw new TypeError("encoding must be a string");
          if (typeof B == "string" && !a.isEncoding(B))
            throw new TypeError("Unknown encoding: " + B);
          if (n.length === 1) {
            let y = n.charCodeAt(0);
            ((B === "utf8" && y < 128) || B === "latin1") && (n = y);
          }
        } else
          typeof n == "number"
            ? (n = n & 255)
            : typeof n == "boolean" && (n = Number(n));
        if (r < 0 || this.length < r || this.length < o)
          throw new RangeError("Out of range index");
        if (o <= r) return this;
        (r = r >>> 0), (o = o === void 0 ? this.length : o >>> 0), n || (n = 0);
        let l;
        if (typeof n == "number") for (l = r; l < o; ++l) this[l] = n;
        else {
          let y = a.isBuffer(n) ? n : a.from(n, B),
            b = y.length;
          if (b === 0)
            throw new TypeError(
              'The value "' + n + '" is invalid for argument "value"'
            );
          for (l = 0; l < o - r; ++l) this[l + r] = y[l % b];
        }
        return this;
      });
    var K = {};
    function tA(n, r, o) {
      K[n] = class extends o {
        constructor() {
          super(),
            Object.defineProperty(this, "message", {
              value: r.apply(this, arguments),
              writable: !0,
              configurable: !0,
            }),
            (this.name = `${this.name} [${n}]`),
            this.stack,
            delete this.name;
        }
        get code() {
          return n;
        }
        set code(B) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: B,
            writable: !0,
          });
        }
        toString() {
          return `${this.name} [${n}]: ${this.message}`;
        }
      };
    }
    tA(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function (n) {
        return n
          ? `${n} is outside of buffer bounds`
          : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ),
      tA(
        "ERR_INVALID_ARG_TYPE",
        function (n, r) {
          return `The "${n}" argument must be of type number. Received type ${typeof r}`;
        },
        TypeError
      ),
      tA(
        "ERR_OUT_OF_RANGE",
        function (n, r, o) {
          let B = `The value of "${n}" is out of range.`,
            l = o;
          return (
            Number.isInteger(o) && Math.abs(o) > 2 ** 32
              ? (l = C(String(o)))
              : typeof o == "bigint" &&
                ((l = String(o)),
                (o > BigInt(2) ** BigInt(32) ||
                  o < -(BigInt(2) ** BigInt(32))) &&
                  (l = C(l)),
                (l += "n")),
            (B += ` It must be ${r}. Received ${l}`),
            B
          );
        },
        RangeError
      );
    function C(n) {
      let r = "",
        o = n.length,
        B = n[0] === "-" ? 1 : 0;
      for (; o >= B + 4; o -= 3) r = `_${n.slice(o - 3, o)}${r}`;
      return `${n.slice(0, o)}${r}`;
    }
    function w(n, r, o) {
      R(r, "offset"),
        (n[r] === void 0 || n[r + o] === void 0) && F(r, n.length - (o + 1));
    }
    function D(n, r, o, B, l, y) {
      if (n > o || n < r) {
        let b = typeof r == "bigint" ? "n" : "",
          Z;
        throw (
          (y > 3
            ? r === 0 || r === BigInt(0)
              ? (Z = `>= 0${b} and < 2${b} ** ${(y + 1) * 8}${b}`)
              : (Z = `>= -(2${b} ** ${(y + 1) * 8 - 1}${b}) and < 2 ** ${
                  (y + 1) * 8 - 1
                }${b}`)
            : (Z = `>= ${r}${b} and <= ${o}${b}`),
          new K.ERR_OUT_OF_RANGE("value", Z, n))
        );
      }
      w(B, l, y);
    }
    function R(n, r) {
      if (typeof n != "number")
        throw new K.ERR_INVALID_ARG_TYPE(r, "number", n);
    }
    function F(n, r, o) {
      throw Math.floor(n) !== n
        ? (R(n, o), new K.ERR_OUT_OF_RANGE(o || "offset", "an integer", n))
        : r < 0
        ? new K.ERR_BUFFER_OUT_OF_BOUNDS()
        : new K.ERR_OUT_OF_RANGE(
            o || "offset",
            `>= ${o ? 1 : 0} and <= ${r}`,
            n
          );
    }
    var U = /[^+/0-9A-Za-z-_]/g;
    function I(n) {
      if (((n = n.split("=")[0]), (n = n.trim().replace(U, "")), n.length < 2))
        return "";
      for (; n.length % 4 !== 0; ) n = n + "=";
      return n;
    }
    function c(n, r) {
      r = r || 1 / 0;
      let o,
        B = n.length,
        l = null,
        y = [];
      for (let b = 0; b < B; ++b) {
        if (((o = n.charCodeAt(b)), o > 55295 && o < 57344)) {
          if (!l) {
            if (o > 56319) {
              (r -= 3) > -1 && y.push(239, 191, 189);
              continue;
            } else if (b + 1 === B) {
              (r -= 3) > -1 && y.push(239, 191, 189);
              continue;
            }
            l = o;
            continue;
          }
          if (o < 56320) {
            (r -= 3) > -1 && y.push(239, 191, 189), (l = o);
            continue;
          }
          o = (((l - 55296) << 10) | (o - 56320)) + 65536;
        } else l && (r -= 3) > -1 && y.push(239, 191, 189);
        if (((l = null), o < 128)) {
          if ((r -= 1) < 0) break;
          y.push(o);
        } else if (o < 2048) {
          if ((r -= 2) < 0) break;
          y.push((o >> 6) | 192, (o & 63) | 128);
        } else if (o < 65536) {
          if ((r -= 3) < 0) break;
          y.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (o & 63) | 128);
        } else if (o < 1114112) {
          if ((r -= 4) < 0) break;
          y.push(
            (o >> 18) | 240,
            ((o >> 12) & 63) | 128,
            ((o >> 6) & 63) | 128,
            (o & 63) | 128
          );
        } else throw new Error("Invalid code point");
      }
      return y;
    }
    function g(n) {
      let r = [];
      for (let o = 0; o < n.length; ++o) r.push(n.charCodeAt(o) & 255);
      return r;
    }
    function h(n, r) {
      let o,
        B,
        l,
        y = [];
      for (let b = 0; b < n.length && !((r -= 2) < 0); ++b)
        (o = n.charCodeAt(b)),
          (B = o >> 8),
          (l = o % 256),
          y.push(l),
          y.push(B);
      return y;
    }
    function Q(n) {
      return A.toByteArray(I(n));
    }
    function S(n, r, o, B) {
      let l;
      for (l = 0; l < B && !(l + o >= r.length || l >= n.length); ++l)
        r[l + o] = n[l];
      return l;
    }
    function T(n, r) {
      return (
        n instanceof r ||
        (n != null &&
          n.constructor != null &&
          n.constructor.name != null &&
          n.constructor.name === r.name)
      );
    }
    function O(n) {
      return n !== n;
    }
    var eA = (function () {
      let n = "0123456789abcdef",
        r = new Array(256);
      for (let o = 0; o < 16; ++o) {
        let B = o * 16;
        for (let l = 0; l < 16; ++l) r[B + l] = n[o] + n[l];
      }
      return r;
    })();
    function rA(n) {
      return typeof BigInt > "u" ? hA : n;
    }
    function hA() {
      throw new Error("BigInt not supported");
    }
  }),
  fa = eB(pB()),
  kB = (e) => Uint8Array.from(fa.Buffer.from(e, "hex")).subarray(4),
  LB = (e) => fa.Buffer.from(e).toString("hex"),
  vB = (e, A) => {
    let t = ea(`
account-id`),
      i = ua.create();
    i.update(ta([...t, ...e.toUint8Array(), ...(A ?? Array(32).fill(0))]));
    let s = i.digest(),
      u = ci(s),
      f = new Uint8Array([...u, ...s]);
    return ra(f);
  },
  HB = (e) => {
    if (e.length != 64)
      throw new io(
        `Invalid account identifier ${e}. The account identifier must be 64 chars in length.`
      );
    let A = Ne.Buffer.from(e, "hex"),
      t = A.slice(0, 4),
      i = Ne.Buffer.from(ci(A.slice(4)));
    if (!i.equals(t))
      throw new io(`Account identifier ${e} has an invalid checksum. Are you sure the account identifier is correct?

Expected checksum: ${i.toString("hex")}
Found checksum: ${t.toString("hex")}`);
  };
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/ export {
  DB as A,
  GB as D,
  LB as E,
  ni as H,
  QB as I,
  Nf as K,
  UB as O,
  xA as P,
  HB as U,
  Ue as a,
  FB as b,
  ea as c,
  ku as d,
  Ne as e,
  ta as f,
  vB as g,
  TB as h,
  MB as k,
  kB as m,
  _B as n,
  Ws as p,
  _f as s,
  xB as t,
  mB as u,
  Ff as v,
  RB as x,
};
