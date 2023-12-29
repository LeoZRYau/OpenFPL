import {
  _ as $s,
  a as Aa,
  c as Tt,
  g as Xs,
  r as ea,
} from "./index.a68ad35c.js";
const ta = -1,
  ra = -2,
  na = -3,
  ia = -4,
  sa = -5,
  aa = -6;
function Tf(t, A) {
  if (typeof t == "number") return a(t, !0);
  if (!Array.isArray(t) || t.length === 0) throw new Error("Invalid input");
  const e = t,
    r = Array(e.length);
  function a(c, E = !1) {
    if (c === ta) return;
    if (c === na) return NaN;
    if (c === ia) return 1 / 0;
    if (c === sa) return -1 / 0;
    if (c === aa) return -0;
    if (E) throw new Error("Invalid input");
    if (c in r) return r[c];
    const u = e[c];
    if (!u || typeof u != "object") r[c] = u;
    else if (Array.isArray(u))
      if (typeof u[0] == "string") {
        const y = u[0],
          m = A?.[y];
        if (m) return (r[c] = m(a(u[1])));
        switch (y) {
          case "Date":
            r[c] = new Date(u[1]);
            break;
          case "Set":
            const L = new Set();
            r[c] = L;
            for (let T = 1; T < u.length; T += 1) L.add(a(u[T]));
            break;
          case "Map":
            const U = new Map();
            r[c] = U;
            for (let T = 1; T < u.length; T += 2) U.set(a(u[T]), a(u[T + 1]));
            break;
          case "RegExp":
            r[c] = new RegExp(u[1], u[2]);
            break;
          case "Object":
            r[c] = Object(u[1]);
            break;
          case "BigInt":
            r[c] = BigInt(u[1]);
            break;
          case "null":
            const eA = Object.create(null);
            r[c] = eA;
            for (let T = 1; T < u.length; T += 2) eA[u[T]] = a(u[T + 1]);
            break;
          default:
            throw new Error(`Unknown type ${y}`);
        }
      } else {
        const y = new Array(u.length);
        r[c] = y;
        for (let m = 0; m < u.length; m += 1) {
          const L = u[m];
          L !== ra && (y[m] = a(L));
        }
      }
    else {
      const y = {};
      r[c] = y;
      for (const m in u) {
        const L = u[m];
        y[m] = a(L);
      }
    }
    return r[c];
  }
  return a(0);
}
var Ut = {},
  Cr = {};
Cr.byteLength = fa;
Cr.toByteArray = Ia;
Cr.fromByteArray = ua;
var Ze = [],
  Le = [],
  oa = typeof Uint8Array < "u" ? Uint8Array : Array,
  _r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var mt = 0, ga = _r.length; mt < ga; ++mt)
  (Ze[mt] = _r[mt]), (Le[_r.charCodeAt(mt)] = mt);
Le["-".charCodeAt(0)] = 62;
Le["_".charCodeAt(0)] = 63;
function ui(t) {
  var A = t.length;
  if (A % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = t.indexOf("=");
  e === -1 && (e = A);
  var r = e === A ? 0 : 4 - (e % 4);
  return [e, r];
}
function fa(t) {
  var A = ui(t),
    e = A[0],
    r = A[1];
  return ((e + r) * 3) / 4 - r;
}
function ca(t, A, e) {
  return ((A + e) * 3) / 4 - e;
}
function Ia(t) {
  var A,
    e = ui(t),
    r = e[0],
    a = e[1],
    c = new oa(ca(t, r, a)),
    E = 0,
    u = a > 0 ? r - 4 : r,
    y;
  for (y = 0; y < u; y += 4)
    (A =
      (Le[t.charCodeAt(y)] << 18) |
      (Le[t.charCodeAt(y + 1)] << 12) |
      (Le[t.charCodeAt(y + 2)] << 6) |
      Le[t.charCodeAt(y + 3)]),
      (c[E++] = (A >> 16) & 255),
      (c[E++] = (A >> 8) & 255),
      (c[E++] = A & 255);
  return (
    a === 2 &&
      ((A = (Le[t.charCodeAt(y)] << 2) | (Le[t.charCodeAt(y + 1)] >> 4)),
      (c[E++] = A & 255)),
    a === 1 &&
      ((A =
        (Le[t.charCodeAt(y)] << 10) |
        (Le[t.charCodeAt(y + 1)] << 4) |
        (Le[t.charCodeAt(y + 2)] >> 2)),
      (c[E++] = (A >> 8) & 255),
      (c[E++] = A & 255)),
    c
  );
}
function Ba(t) {
  return (
    Ze[(t >> 18) & 63] + Ze[(t >> 12) & 63] + Ze[(t >> 6) & 63] + Ze[t & 63]
  );
}
function Ea(t, A, e) {
  for (var r, a = [], c = A; c < e; c += 3)
    (r =
      ((t[c] << 16) & 16711680) + ((t[c + 1] << 8) & 65280) + (t[c + 2] & 255)),
      a.push(Ba(r));
  return a.join("");
}
function ua(t) {
  for (
    var A, e = t.length, r = e % 3, a = [], c = 16383, E = 0, u = e - r;
    E < u;
    E += c
  )
    a.push(Ea(t, E, E + c > u ? u : E + c));
  return (
    r === 1
      ? ((A = t[e - 1]), a.push(Ze[A >> 2] + Ze[(A << 4) & 63] + "=="))
      : r === 2 &&
        ((A = (t[e - 2] << 8) + t[e - 1]),
        a.push(Ze[A >> 10] + Ze[(A >> 4) & 63] + Ze[(A << 2) & 63] + "=")),
    a.join("")
  );
}
var dr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ dr.read =
  function (t, A, e, r, a) {
    var c,
      E,
      u = a * 8 - r - 1,
      y = (1 << u) - 1,
      m = y >> 1,
      L = -7,
      U = e ? a - 1 : 0,
      eA = e ? -1 : 1,
      T = t[A + U];
    for (
      U += eA, c = T & ((1 << -L) - 1), T >>= -L, L += u;
      L > 0;
      c = c * 256 + t[A + U], U += eA, L -= 8
    );
    for (
      E = c & ((1 << -L) - 1), c >>= -L, L += r;
      L > 0;
      E = E * 256 + t[A + U], U += eA, L -= 8
    );
    if (c === 0) c = 1 - m;
    else {
      if (c === y) return E ? NaN : (T ? -1 : 1) * (1 / 0);
      (E = E + Math.pow(2, r)), (c = c - m);
    }
    return (T ? -1 : 1) * E * Math.pow(2, c - r);
  };
dr.write = function (t, A, e, r, a, c) {
  var E,
    u,
    y,
    m = c * 8 - a - 1,
    L = (1 << m) - 1,
    U = L >> 1,
    eA = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    T = r ? 0 : c - 1,
    sA = r ? 1 : -1,
    QA = A < 0 || (A === 0 && 1 / A < 0) ? 1 : 0;
  for (
    A = Math.abs(A),
      isNaN(A) || A === 1 / 0
        ? ((u = isNaN(A) ? 1 : 0), (E = L))
        : ((E = Math.floor(Math.log(A) / Math.LN2)),
          A * (y = Math.pow(2, -E)) < 1 && (E--, (y *= 2)),
          E + U >= 1 ? (A += eA / y) : (A += eA * Math.pow(2, 1 - U)),
          A * y >= 2 && (E++, (y /= 2)),
          E + U >= L
            ? ((u = 0), (E = L))
            : E + U >= 1
            ? ((u = (A * y - 1) * Math.pow(2, a)), (E = E + U))
            : ((u = A * Math.pow(2, U - 1) * Math.pow(2, a)), (E = 0)));
    a >= 8;
    t[e + T] = u & 255, T += sA, u /= 256, a -= 8
  );
  for (
    E = (E << a) | u, m += a;
    m > 0;
    t[e + T] = E & 255, T += sA, E /= 256, m -= 8
  );
  t[e + T - sA] |= QA * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ (function (t) {
  var A = Cr,
    e = dr,
    r =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  (t.Buffer = u), (t.SlowBuffer = lA), (t.INSPECT_MAX_BYTES = 50);
  var a = 2147483647;
  (t.kMaxLength = a),
    (u.TYPED_ARRAY_SUPPORT = c()),
    !u.TYPED_ARRAY_SUPPORT &&
      typeof console < "u" &&
      typeof console.error == "function" &&
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
  function c() {
    try {
      var g = new Uint8Array(1),
        n = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(n, Uint8Array.prototype),
        Object.setPrototypeOf(g, n),
        g.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (u.isBuffer(this)) return this.buffer;
    },
  }),
    Object.defineProperty(u.prototype, "offset", {
      enumerable: !0,
      get: function () {
        if (u.isBuffer(this)) return this.byteOffset;
      },
    });
  function E(g) {
    if (g > a)
      throw new RangeError(
        'The value "' + g + '" is invalid for option "size"'
      );
    var n = new Uint8Array(g);
    return Object.setPrototypeOf(n, u.prototype), n;
  }
  function u(g, n, s) {
    if (typeof g == "number") {
      if (typeof n == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return U(g);
    }
    return y(g, n, s);
  }
  u.poolSize = 8192;
  function y(g, n, s) {
    if (typeof g == "string") return eA(g, n);
    if (ArrayBuffer.isView(g)) return sA(g);
    if (g == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof g
      );
    if (
      F(g, ArrayBuffer) ||
      (g && F(g.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (F(g, SharedArrayBuffer) || (g && F(g.buffer, SharedArrayBuffer))))
    )
      return QA(g, n, s);
    if (typeof g == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var f = g.valueOf && g.valueOf();
    if (f != null && f !== g) return u.from(f, n, s);
    var h = UA(g);
    if (h) return h;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof g[Symbol.toPrimitive] == "function"
    )
      return u.from(g[Symbol.toPrimitive]("string"), n, s);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof g
    );
  }
  (u.from = function (g, n, s) {
    return y(g, n, s);
  }),
    Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(u, Uint8Array);
  function m(g) {
    if (typeof g != "number")
      throw new TypeError('"size" argument must be of type number');
    if (g < 0)
      throw new RangeError(
        'The value "' + g + '" is invalid for option "size"'
      );
  }
  function L(g, n, s) {
    return (
      m(g),
      g <= 0
        ? E(g)
        : n !== void 0
        ? typeof s == "string"
          ? E(g).fill(n, s)
          : E(g).fill(n)
        : E(g)
    );
  }
  u.alloc = function (g, n, s) {
    return L(g, n, s);
  };
  function U(g) {
    return m(g), E(g < 0 ? 0 : YA(g) | 0);
  }
  (u.allocUnsafe = function (g) {
    return U(g);
  }),
    (u.allocUnsafeSlow = function (g) {
      return U(g);
    });
  function eA(g, n) {
    if (((typeof n != "string" || n === "") && (n = "utf8"), !u.isEncoding(n)))
      throw new TypeError("Unknown encoding: " + n);
    var s = MA(g, n) | 0,
      f = E(s),
      h = f.write(g, n);
    return h !== s && (f = f.slice(0, h)), f;
  }
  function T(g) {
    for (
      var n = g.length < 0 ? 0 : YA(g.length) | 0, s = E(n), f = 0;
      f < n;
      f += 1
    )
      s[f] = g[f] & 255;
    return s;
  }
  function sA(g) {
    if (F(g, Uint8Array)) {
      var n = new Uint8Array(g);
      return QA(n.buffer, n.byteOffset, n.byteLength);
    }
    return T(g);
  }
  function QA(g, n, s) {
    if (n < 0 || g.byteLength < n)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (g.byteLength < n + (s || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var f;
    return (
      n === void 0 && s === void 0
        ? (f = new Uint8Array(g))
        : s === void 0
        ? (f = new Uint8Array(g, n))
        : (f = new Uint8Array(g, n, s)),
      Object.setPrototypeOf(f, u.prototype),
      f
    );
  }
  function UA(g) {
    if (u.isBuffer(g)) {
      var n = YA(g.length) | 0,
        s = E(n);
      return s.length === 0 || g.copy(s, 0, 0, n), s;
    }
    if (g.length !== void 0)
      return typeof g.length != "number" || N(g.length) ? E(0) : T(g);
    if (g.type === "Buffer" && Array.isArray(g.data)) return T(g.data);
  }
  function YA(g) {
    if (g >= a)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          a.toString(16) +
          " bytes"
      );
    return g | 0;
  }
  function lA(g) {
    return +g != g && (g = 0), u.alloc(+g);
  }
  (u.isBuffer = function (n) {
    return n != null && n._isBuffer === !0 && n !== u.prototype;
  }),
    (u.compare = function (n, s) {
      if (
        (F(n, Uint8Array) && (n = u.from(n, n.offset, n.byteLength)),
        F(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)),
        !u.isBuffer(n) || !u.isBuffer(s))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (n === s) return 0;
      for (
        var f = n.length, h = s.length, x = 0, M = Math.min(f, h);
        x < M;
        ++x
      )
        if (n[x] !== s[x]) {
          (f = n[x]), (h = s[x]);
          break;
        }
      return f < h ? -1 : h < f ? 1 : 0;
    }),
    (u.isEncoding = function (n) {
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
    (u.concat = function (n, s) {
      if (!Array.isArray(n))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (n.length === 0) return u.alloc(0);
      var f;
      if (s === void 0) for (s = 0, f = 0; f < n.length; ++f) s += n[f].length;
      var h = u.allocUnsafe(s),
        x = 0;
      for (f = 0; f < n.length; ++f) {
        var M = n[f];
        if (F(M, Uint8Array))
          x + M.length > h.length
            ? u.from(M).copy(h, x)
            : Uint8Array.prototype.set.call(h, M, x);
        else if (u.isBuffer(M)) M.copy(h, x);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        x += M.length;
      }
      return h;
    });
  function MA(g, n) {
    if (u.isBuffer(g)) return g.length;
    if (ArrayBuffer.isView(g) || F(g, ArrayBuffer)) return g.byteLength;
    if (typeof g != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof g
      );
    var s = g.length,
      f = arguments.length > 2 && arguments[2] === !0;
    if (!f && s === 0) return 0;
    for (var h = !1; ; )
      switch (n) {
        case "ascii":
        case "latin1":
        case "binary":
          return s;
        case "utf8":
        case "utf-8":
          return cA(g).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return s * 2;
        case "hex":
          return s >>> 1;
        case "base64":
          return d(g).length;
        default:
          if (h) return f ? -1 : cA(g).length;
          (n = ("" + n).toLowerCase()), (h = !0);
      }
  }
  u.byteLength = MA;
  function qA(g, n, s) {
    var f = !1;
    if (
      ((n === void 0 || n < 0) && (n = 0),
      n > this.length ||
        ((s === void 0 || s > this.length) && (s = this.length), s <= 0) ||
        ((s >>>= 0), (n >>>= 0), s <= n))
    )
      return "";
    for (g || (g = "utf8"); ; )
      switch (g) {
        case "hex":
          return LA(this, n, s);
        case "utf8":
        case "utf-8":
          return se(this, n, s);
        case "ascii":
          return ge(this, n, s);
        case "latin1":
        case "binary":
          return jA(this, n, s);
        case "base64":
          return kA(this, n, s);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return we(this, n, s);
        default:
          if (f) throw new TypeError("Unknown encoding: " + g);
          (g = (g + "").toLowerCase()), (f = !0);
      }
  }
  u.prototype._isBuffer = !0;
  function GA(g, n, s) {
    var f = g[n];
    (g[n] = g[s]), (g[s] = f);
  }
  (u.prototype.swap16 = function () {
    var n = this.length;
    if (n % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var s = 0; s < n; s += 2) GA(this, s, s + 1);
    return this;
  }),
    (u.prototype.swap32 = function () {
      var n = this.length;
      if (n % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var s = 0; s < n; s += 4) GA(this, s, s + 3), GA(this, s + 1, s + 2);
      return this;
    }),
    (u.prototype.swap64 = function () {
      var n = this.length;
      if (n % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var s = 0; s < n; s += 8)
        GA(this, s, s + 7),
          GA(this, s + 1, s + 6),
          GA(this, s + 2, s + 5),
          GA(this, s + 3, s + 4);
      return this;
    }),
    (u.prototype.toString = function () {
      var n = this.length;
      return n === 0
        ? ""
        : arguments.length === 0
        ? se(this, 0, n)
        : qA.apply(this, arguments);
    }),
    (u.prototype.toLocaleString = u.prototype.toString),
    (u.prototype.equals = function (n) {
      if (!u.isBuffer(n)) throw new TypeError("Argument must be a Buffer");
      return this === n ? !0 : u.compare(this, n) === 0;
    }),
    (u.prototype.inspect = function () {
      var n = "",
        s = t.INSPECT_MAX_BYTES;
      return (
        (n = this.toString("hex", 0, s)
          .replace(/(.{2})/g, "$1 ")
          .trim()),
        this.length > s && (n += " ... "),
        "<Buffer " + n + ">"
      );
    }),
    r && (u.prototype[r] = u.prototype.inspect),
    (u.prototype.compare = function (n, s, f, h, x) {
      if (
        (F(n, Uint8Array) && (n = u.from(n, n.offset, n.byteLength)),
        !u.isBuffer(n))
      )
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof n
        );
      if (
        (s === void 0 && (s = 0),
        f === void 0 && (f = n ? n.length : 0),
        h === void 0 && (h = 0),
        x === void 0 && (x = this.length),
        s < 0 || f > n.length || h < 0 || x > this.length)
      )
        throw new RangeError("out of range index");
      if (h >= x && s >= f) return 0;
      if (h >= x) return -1;
      if (s >= f) return 1;
      if (((s >>>= 0), (f >>>= 0), (h >>>= 0), (x >>>= 0), this === n))
        return 0;
      for (
        var M = x - h,
          W = f - s,
          iA = Math.min(M, W),
          hA = this.slice(h, x),
          pA = n.slice(s, f),
          $ = 0;
        $ < iA;
        ++$
      )
        if (hA[$] !== pA[$]) {
          (M = hA[$]), (W = pA[$]);
          break;
        }
      return M < W ? -1 : W < M ? 1 : 0;
    });
  function aA(g, n, s, f, h) {
    if (g.length === 0) return -1;
    if (
      (typeof s == "string"
        ? ((f = s), (s = 0))
        : s > 2147483647
        ? (s = 2147483647)
        : s < -2147483648 && (s = -2147483648),
      (s = +s),
      N(s) && (s = h ? 0 : g.length - 1),
      s < 0 && (s = g.length + s),
      s >= g.length)
    ) {
      if (h) return -1;
      s = g.length - 1;
    } else if (s < 0)
      if (h) s = 0;
      else return -1;
    if ((typeof n == "string" && (n = u.from(n, f)), u.isBuffer(n)))
      return n.length === 0 ? -1 : fA(g, n, s, f, h);
    if (typeof n == "number")
      return (
        (n = n & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? h
            ? Uint8Array.prototype.indexOf.call(g, n, s)
            : Uint8Array.prototype.lastIndexOf.call(g, n, s)
          : fA(g, [n], s, f, h)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function fA(g, n, s, f, h) {
    var x = 1,
      M = g.length,
      W = n.length;
    if (
      f !== void 0 &&
      ((f = String(f).toLowerCase()),
      f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le")
    ) {
      if (g.length < 2 || n.length < 2) return -1;
      (x = 2), (M /= 2), (W /= 2), (s /= 2);
    }
    function iA(XA, De) {
      return x === 1 ? XA[De] : XA.readUInt16BE(De * x);
    }
    var hA;
    if (h) {
      var pA = -1;
      for (hA = s; hA < M; hA++)
        if (iA(g, hA) === iA(n, pA === -1 ? 0 : hA - pA)) {
          if ((pA === -1 && (pA = hA), hA - pA + 1 === W)) return pA * x;
        } else pA !== -1 && (hA -= hA - pA), (pA = -1);
    } else
      for (s + W > M && (s = M - W), hA = s; hA >= 0; hA--) {
        for (var $ = !0, DA = 0; DA < W; DA++)
          if (iA(g, hA + DA) !== iA(n, DA)) {
            $ = !1;
            break;
          }
        if ($) return hA;
      }
    return -1;
  }
  (u.prototype.includes = function (n, s, f) {
    return this.indexOf(n, s, f) !== -1;
  }),
    (u.prototype.indexOf = function (n, s, f) {
      return aA(this, n, s, f, !0);
    }),
    (u.prototype.lastIndexOf = function (n, s, f) {
      return aA(this, n, s, f, !1);
    });
  function NA(g, n, s, f) {
    s = Number(s) || 0;
    var h = g.length - s;
    f ? ((f = Number(f)), f > h && (f = h)) : (f = h);
    var x = n.length;
    f > x / 2 && (f = x / 2);
    for (var M = 0; M < f; ++M) {
      var W = parseInt(n.substr(M * 2, 2), 16);
      if (N(W)) return M;
      g[s + M] = W;
    }
    return M;
  }
  function PA(g, n, s, f) {
    return D(cA(n, g.length - s), g, s, f);
  }
  function Z(g, n, s, f) {
    return D(uA(n), g, s, f);
  }
  function WA(g, n, s, f) {
    return D(d(n), g, s, f);
  }
  function vA(g, n, s, f) {
    return D(l(n, g.length - s), g, s, f);
  }
  (u.prototype.write = function (n, s, f, h) {
    if (s === void 0) (h = "utf8"), (f = this.length), (s = 0);
    else if (f === void 0 && typeof s == "string")
      (h = s), (f = this.length), (s = 0);
    else if (isFinite(s))
      (s = s >>> 0),
        isFinite(f)
          ? ((f = f >>> 0), h === void 0 && (h = "utf8"))
          : ((h = f), (f = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var x = this.length - s;
    if (
      ((f === void 0 || f > x) && (f = x),
      (n.length > 0 && (f < 0 || s < 0)) || s > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    h || (h = "utf8");
    for (var M = !1; ; )
      switch (h) {
        case "hex":
          return NA(this, n, s, f);
        case "utf8":
        case "utf-8":
          return PA(this, n, s, f);
        case "ascii":
        case "latin1":
        case "binary":
          return Z(this, n, s, f);
        case "base64":
          return WA(this, n, s, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return vA(this, n, s, f);
        default:
          if (M) throw new TypeError("Unknown encoding: " + h);
          (h = ("" + h).toLowerCase()), (M = !0);
      }
  }),
    (u.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function kA(g, n, s) {
    return n === 0 && s === g.length
      ? A.fromByteArray(g)
      : A.fromByteArray(g.slice(n, s));
  }
  function se(g, n, s) {
    s = Math.min(g.length, s);
    for (var f = [], h = n; h < s; ) {
      var x = g[h],
        M = null,
        W = x > 239 ? 4 : x > 223 ? 3 : x > 191 ? 2 : 1;
      if (h + W <= s) {
        var iA, hA, pA, $;
        switch (W) {
          case 1:
            x < 128 && (M = x);
            break;
          case 2:
            (iA = g[h + 1]),
              (iA & 192) === 128 &&
                (($ = ((x & 31) << 6) | (iA & 63)), $ > 127 && (M = $));
            break;
          case 3:
            (iA = g[h + 1]),
              (hA = g[h + 2]),
              (iA & 192) === 128 &&
                (hA & 192) === 128 &&
                (($ = ((x & 15) << 12) | ((iA & 63) << 6) | (hA & 63)),
                $ > 2047 && ($ < 55296 || $ > 57343) && (M = $));
            break;
          case 4:
            (iA = g[h + 1]),
              (hA = g[h + 2]),
              (pA = g[h + 3]),
              (iA & 192) === 128 &&
                (hA & 192) === 128 &&
                (pA & 192) === 128 &&
                (($ =
                  ((x & 15) << 18) |
                  ((iA & 63) << 12) |
                  ((hA & 63) << 6) |
                  (pA & 63)),
                $ > 65535 && $ < 1114112 && (M = $));
        }
      }
      M === null
        ? ((M = 65533), (W = 1))
        : M > 65535 &&
          ((M -= 65536),
          f.push(((M >>> 10) & 1023) | 55296),
          (M = 56320 | (M & 1023))),
        f.push(M),
        (h += W);
    }
    return oe(f);
  }
  var re = 4096;
  function oe(g) {
    var n = g.length;
    if (n <= re) return String.fromCharCode.apply(String, g);
    for (var s = "", f = 0; f < n; )
      s += String.fromCharCode.apply(String, g.slice(f, (f += re)));
    return s;
  }
  function ge(g, n, s) {
    var f = "";
    s = Math.min(g.length, s);
    for (var h = n; h < s; ++h) f += String.fromCharCode(g[h] & 127);
    return f;
  }
  function jA(g, n, s) {
    var f = "";
    s = Math.min(g.length, s);
    for (var h = n; h < s; ++h) f += String.fromCharCode(g[h]);
    return f;
  }
  function LA(g, n, s) {
    var f = g.length;
    (!n || n < 0) && (n = 0), (!s || s < 0 || s > f) && (s = f);
    for (var h = "", x = n; x < s; ++x) h += _[g[x]];
    return h;
  }
  function we(g, n, s) {
    for (var f = g.slice(n, s), h = "", x = 0; x < f.length - 1; x += 2)
      h += String.fromCharCode(f[x] + f[x + 1] * 256);
    return h;
  }
  u.prototype.slice = function (n, s) {
    var f = this.length;
    (n = ~~n),
      (s = s === void 0 ? f : ~~s),
      n < 0 ? ((n += f), n < 0 && (n = 0)) : n > f && (n = f),
      s < 0 ? ((s += f), s < 0 && (s = 0)) : s > f && (s = f),
      s < n && (s = n);
    var h = this.subarray(n, s);
    return Object.setPrototypeOf(h, u.prototype), h;
  };
  function yA(g, n, s) {
    if (g % 1 !== 0 || g < 0) throw new RangeError("offset is not uint");
    if (g + n > s)
      throw new RangeError("Trying to access beyond buffer length");
  }
  (u.prototype.readUintLE = u.prototype.readUIntLE =
    function (n, s, f) {
      (n = n >>> 0), (s = s >>> 0), f || yA(n, s, this.length);
      for (var h = this[n], x = 1, M = 0; ++M < s && (x *= 256); )
        h += this[n + M] * x;
      return h;
    }),
    (u.prototype.readUintBE = u.prototype.readUIntBE =
      function (n, s, f) {
        (n = n >>> 0), (s = s >>> 0), f || yA(n, s, this.length);
        for (var h = this[n + --s], x = 1; s > 0 && (x *= 256); )
          h += this[n + --s] * x;
        return h;
      }),
    (u.prototype.readUint8 = u.prototype.readUInt8 =
      function (n, s) {
        return (n = n >>> 0), s || yA(n, 1, this.length), this[n];
      }),
    (u.prototype.readUint16LE = u.prototype.readUInt16LE =
      function (n, s) {
        return (
          (n = n >>> 0),
          s || yA(n, 2, this.length),
          this[n] | (this[n + 1] << 8)
        );
      }),
    (u.prototype.readUint16BE = u.prototype.readUInt16BE =
      function (n, s) {
        return (
          (n = n >>> 0),
          s || yA(n, 2, this.length),
          (this[n] << 8) | this[n + 1]
        );
      }),
    (u.prototype.readUint32LE = u.prototype.readUInt32LE =
      function (n, s) {
        return (
          (n = n >>> 0),
          s || yA(n, 4, this.length),
          (this[n] | (this[n + 1] << 8) | (this[n + 2] << 16)) +
            this[n + 3] * 16777216
        );
      }),
    (u.prototype.readUint32BE = u.prototype.readUInt32BE =
      function (n, s) {
        return (
          (n = n >>> 0),
          s || yA(n, 4, this.length),
          this[n] * 16777216 +
            ((this[n + 1] << 16) | (this[n + 2] << 8) | this[n + 3])
        );
      }),
    (u.prototype.readIntLE = function (n, s, f) {
      (n = n >>> 0), (s = s >>> 0), f || yA(n, s, this.length);
      for (var h = this[n], x = 1, M = 0; ++M < s && (x *= 256); )
        h += this[n + M] * x;
      return (x *= 128), h >= x && (h -= Math.pow(2, 8 * s)), h;
    }),
    (u.prototype.readIntBE = function (n, s, f) {
      (n = n >>> 0), (s = s >>> 0), f || yA(n, s, this.length);
      for (var h = s, x = 1, M = this[n + --h]; h > 0 && (x *= 256); )
        M += this[n + --h] * x;
      return (x *= 128), M >= x && (M -= Math.pow(2, 8 * s)), M;
    }),
    (u.prototype.readInt8 = function (n, s) {
      return (
        (n = n >>> 0),
        s || yA(n, 1, this.length),
        this[n] & 128 ? (255 - this[n] + 1) * -1 : this[n]
      );
    }),
    (u.prototype.readInt16LE = function (n, s) {
      (n = n >>> 0), s || yA(n, 2, this.length);
      var f = this[n] | (this[n + 1] << 8);
      return f & 32768 ? f | 4294901760 : f;
    }),
    (u.prototype.readInt16BE = function (n, s) {
      (n = n >>> 0), s || yA(n, 2, this.length);
      var f = this[n + 1] | (this[n] << 8);
      return f & 32768 ? f | 4294901760 : f;
    }),
    (u.prototype.readInt32LE = function (n, s) {
      return (
        (n = n >>> 0),
        s || yA(n, 4, this.length),
        this[n] | (this[n + 1] << 8) | (this[n + 2] << 16) | (this[n + 3] << 24)
      );
    }),
    (u.prototype.readInt32BE = function (n, s) {
      return (
        (n = n >>> 0),
        s || yA(n, 4, this.length),
        (this[n] << 24) | (this[n + 1] << 16) | (this[n + 2] << 8) | this[n + 3]
      );
    }),
    (u.prototype.readFloatLE = function (n, s) {
      return (
        (n = n >>> 0), s || yA(n, 4, this.length), e.read(this, n, !0, 23, 4)
      );
    }),
    (u.prototype.readFloatBE = function (n, s) {
      return (
        (n = n >>> 0), s || yA(n, 4, this.length), e.read(this, n, !1, 23, 4)
      );
    }),
    (u.prototype.readDoubleLE = function (n, s) {
      return (
        (n = n >>> 0), s || yA(n, 8, this.length), e.read(this, n, !0, 52, 8)
      );
    }),
    (u.prototype.readDoubleBE = function (n, s) {
      return (
        (n = n >>> 0), s || yA(n, 8, this.length), e.read(this, n, !1, 52, 8)
      );
    });
  function VA(g, n, s, f, h, x) {
    if (!u.isBuffer(g))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (n > h || n < x)
      throw new RangeError('"value" argument is out of bounds');
    if (s + f > g.length) throw new RangeError("Index out of range");
  }
  (u.prototype.writeUintLE = u.prototype.writeUIntLE =
    function (n, s, f, h) {
      if (((n = +n), (s = s >>> 0), (f = f >>> 0), !h)) {
        var x = Math.pow(2, 8 * f) - 1;
        VA(this, n, s, f, x, 0);
      }
      var M = 1,
        W = 0;
      for (this[s] = n & 255; ++W < f && (M *= 256); )
        this[s + W] = (n / M) & 255;
      return s + f;
    }),
    (u.prototype.writeUintBE = u.prototype.writeUIntBE =
      function (n, s, f, h) {
        if (((n = +n), (s = s >>> 0), (f = f >>> 0), !h)) {
          var x = Math.pow(2, 8 * f) - 1;
          VA(this, n, s, f, x, 0);
        }
        var M = f - 1,
          W = 1;
        for (this[s + M] = n & 255; --M >= 0 && (W *= 256); )
          this[s + M] = (n / W) & 255;
        return s + f;
      }),
    (u.prototype.writeUint8 = u.prototype.writeUInt8 =
      function (n, s, f) {
        return (
          (n = +n),
          (s = s >>> 0),
          f || VA(this, n, s, 1, 255, 0),
          (this[s] = n & 255),
          s + 1
        );
      }),
    (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
      function (n, s, f) {
        return (
          (n = +n),
          (s = s >>> 0),
          f || VA(this, n, s, 2, 65535, 0),
          (this[s] = n & 255),
          (this[s + 1] = n >>> 8),
          s + 2
        );
      }),
    (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
      function (n, s, f) {
        return (
          (n = +n),
          (s = s >>> 0),
          f || VA(this, n, s, 2, 65535, 0),
          (this[s] = n >>> 8),
          (this[s + 1] = n & 255),
          s + 2
        );
      }),
    (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
      function (n, s, f) {
        return (
          (n = +n),
          (s = s >>> 0),
          f || VA(this, n, s, 4, 4294967295, 0),
          (this[s + 3] = n >>> 24),
          (this[s + 2] = n >>> 16),
          (this[s + 1] = n >>> 8),
          (this[s] = n & 255),
          s + 4
        );
      }),
    (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
      function (n, s, f) {
        return (
          (n = +n),
          (s = s >>> 0),
          f || VA(this, n, s, 4, 4294967295, 0),
          (this[s] = n >>> 24),
          (this[s + 1] = n >>> 16),
          (this[s + 2] = n >>> 8),
          (this[s + 3] = n & 255),
          s + 4
        );
      }),
    (u.prototype.writeIntLE = function (n, s, f, h) {
      if (((n = +n), (s = s >>> 0), !h)) {
        var x = Math.pow(2, 8 * f - 1);
        VA(this, n, s, f, x - 1, -x);
      }
      var M = 0,
        W = 1,
        iA = 0;
      for (this[s] = n & 255; ++M < f && (W *= 256); )
        n < 0 && iA === 0 && this[s + M - 1] !== 0 && (iA = 1),
          (this[s + M] = (((n / W) >> 0) - iA) & 255);
      return s + f;
    }),
    (u.prototype.writeIntBE = function (n, s, f, h) {
      if (((n = +n), (s = s >>> 0), !h)) {
        var x = Math.pow(2, 8 * f - 1);
        VA(this, n, s, f, x - 1, -x);
      }
      var M = f - 1,
        W = 1,
        iA = 0;
      for (this[s + M] = n & 255; --M >= 0 && (W *= 256); )
        n < 0 && iA === 0 && this[s + M + 1] !== 0 && (iA = 1),
          (this[s + M] = (((n / W) >> 0) - iA) & 255);
      return s + f;
    }),
    (u.prototype.writeInt8 = function (n, s, f) {
      return (
        (n = +n),
        (s = s >>> 0),
        f || VA(this, n, s, 1, 127, -128),
        n < 0 && (n = 255 + n + 1),
        (this[s] = n & 255),
        s + 1
      );
    }),
    (u.prototype.writeInt16LE = function (n, s, f) {
      return (
        (n = +n),
        (s = s >>> 0),
        f || VA(this, n, s, 2, 32767, -32768),
        (this[s] = n & 255),
        (this[s + 1] = n >>> 8),
        s + 2
      );
    }),
    (u.prototype.writeInt16BE = function (n, s, f) {
      return (
        (n = +n),
        (s = s >>> 0),
        f || VA(this, n, s, 2, 32767, -32768),
        (this[s] = n >>> 8),
        (this[s + 1] = n & 255),
        s + 2
      );
    }),
    (u.prototype.writeInt32LE = function (n, s, f) {
      return (
        (n = +n),
        (s = s >>> 0),
        f || VA(this, n, s, 4, 2147483647, -2147483648),
        (this[s] = n & 255),
        (this[s + 1] = n >>> 8),
        (this[s + 2] = n >>> 16),
        (this[s + 3] = n >>> 24),
        s + 4
      );
    }),
    (u.prototype.writeInt32BE = function (n, s, f) {
      return (
        (n = +n),
        (s = s >>> 0),
        f || VA(this, n, s, 4, 2147483647, -2147483648),
        n < 0 && (n = 4294967295 + n + 1),
        (this[s] = n >>> 24),
        (this[s + 1] = n >>> 16),
        (this[s + 2] = n >>> 8),
        (this[s + 3] = n & 255),
        s + 4
      );
    });
  function SA(g, n, s, f, h, x) {
    if (s + f > g.length) throw new RangeError("Index out of range");
    if (s < 0) throw new RangeError("Index out of range");
  }
  function C(g, n, s, f, h) {
    return (
      (n = +n),
      (s = s >>> 0),
      h || SA(g, n, s, 4),
      e.write(g, n, s, f, 23, 4),
      s + 4
    );
  }
  (u.prototype.writeFloatLE = function (n, s, f) {
    return C(this, n, s, !0, f);
  }),
    (u.prototype.writeFloatBE = function (n, s, f) {
      return C(this, n, s, !1, f);
    });
  function dA(g, n, s, f, h) {
    return (
      (n = +n),
      (s = s >>> 0),
      h || SA(g, n, s, 8),
      e.write(g, n, s, f, 52, 8),
      s + 8
    );
  }
  (u.prototype.writeDoubleLE = function (n, s, f) {
    return dA(this, n, s, !0, f);
  }),
    (u.prototype.writeDoubleBE = function (n, s, f) {
      return dA(this, n, s, !1, f);
    }),
    (u.prototype.copy = function (n, s, f, h) {
      if (!u.isBuffer(n)) throw new TypeError("argument should be a Buffer");
      if (
        (f || (f = 0),
        !h && h !== 0 && (h = this.length),
        s >= n.length && (s = n.length),
        s || (s = 0),
        h > 0 && h < f && (h = f),
        h === f || n.length === 0 || this.length === 0)
      )
        return 0;
      if (s < 0) throw new RangeError("targetStart out of bounds");
      if (f < 0 || f >= this.length) throw new RangeError("Index out of range");
      if (h < 0) throw new RangeError("sourceEnd out of bounds");
      h > this.length && (h = this.length),
        n.length - s < h - f && (h = n.length - s + f);
      var x = h - f;
      return (
        this === n && typeof Uint8Array.prototype.copyWithin == "function"
          ? this.copyWithin(s, f, h)
          : Uint8Array.prototype.set.call(n, this.subarray(f, h), s),
        x
      );
    }),
    (u.prototype.fill = function (n, s, f, h) {
      if (typeof n == "string") {
        if (
          (typeof s == "string"
            ? ((h = s), (s = 0), (f = this.length))
            : typeof f == "string" && ((h = f), (f = this.length)),
          h !== void 0 && typeof h != "string")
        )
          throw new TypeError("encoding must be a string");
        if (typeof h == "string" && !u.isEncoding(h))
          throw new TypeError("Unknown encoding: " + h);
        if (n.length === 1) {
          var x = n.charCodeAt(0);
          ((h === "utf8" && x < 128) || h === "latin1") && (n = x);
        }
      } else
        typeof n == "number"
          ? (n = n & 255)
          : typeof n == "boolean" && (n = Number(n));
      if (s < 0 || this.length < s || this.length < f)
        throw new RangeError("Out of range index");
      if (f <= s) return this;
      (s = s >>> 0), (f = f === void 0 ? this.length : f >>> 0), n || (n = 0);
      var M;
      if (typeof n == "number") for (M = s; M < f; ++M) this[M] = n;
      else {
        var W = u.isBuffer(n) ? n : u.from(n, h),
          iA = W.length;
        if (iA === 0)
          throw new TypeError(
            'The value "' + n + '" is invalid for argument "value"'
          );
        for (M = 0; M < f - s; ++M) this[M + s] = W[M % iA];
      }
      return this;
    });
  var ae = /[^+/0-9A-Za-z-_]/g;
  function Me(g) {
    if (((g = g.split("=")[0]), (g = g.trim().replace(ae, "")), g.length < 2))
      return "";
    for (; g.length % 4 !== 0; ) g = g + "=";
    return g;
  }
  function cA(g, n) {
    n = n || 1 / 0;
    for (var s, f = g.length, h = null, x = [], M = 0; M < f; ++M) {
      if (((s = g.charCodeAt(M)), s > 55295 && s < 57344)) {
        if (!h) {
          if (s > 56319) {
            (n -= 3) > -1 && x.push(239, 191, 189);
            continue;
          } else if (M + 1 === f) {
            (n -= 3) > -1 && x.push(239, 191, 189);
            continue;
          }
          h = s;
          continue;
        }
        if (s < 56320) {
          (n -= 3) > -1 && x.push(239, 191, 189), (h = s);
          continue;
        }
        s = (((h - 55296) << 10) | (s - 56320)) + 65536;
      } else h && (n -= 3) > -1 && x.push(239, 191, 189);
      if (((h = null), s < 128)) {
        if ((n -= 1) < 0) break;
        x.push(s);
      } else if (s < 2048) {
        if ((n -= 2) < 0) break;
        x.push((s >> 6) | 192, (s & 63) | 128);
      } else if (s < 65536) {
        if ((n -= 3) < 0) break;
        x.push((s >> 12) | 224, ((s >> 6) & 63) | 128, (s & 63) | 128);
      } else if (s < 1114112) {
        if ((n -= 4) < 0) break;
        x.push(
          (s >> 18) | 240,
          ((s >> 12) & 63) | 128,
          ((s >> 6) & 63) | 128,
          (s & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return x;
  }
  function uA(g) {
    for (var n = [], s = 0; s < g.length; ++s) n.push(g.charCodeAt(s) & 255);
    return n;
  }
  function l(g, n) {
    for (var s, f, h, x = [], M = 0; M < g.length && !((n -= 2) < 0); ++M)
      (s = g.charCodeAt(M)), (f = s >> 8), (h = s % 256), x.push(h), x.push(f);
    return x;
  }
  function d(g) {
    return A.toByteArray(Me(g));
  }
  function D(g, n, s, f) {
    for (var h = 0; h < f && !(h + s >= n.length || h >= g.length); ++h)
      n[h + s] = g[h];
    return h;
  }
  function F(g, n) {
    return (
      g instanceof n ||
      (g != null &&
        g.constructor != null &&
        g.constructor.name != null &&
        g.constructor.name === n.name)
    );
  }
  function N(g) {
    return g !== g;
  }
  var _ = (function () {
    for (var g = "0123456789abcdef", n = new Array(256), s = 0; s < 16; ++s)
      for (var f = s * 16, h = 0; h < 16; ++h) n[f + h] = g[s] + g[h];
    return n;
  })();
})(Ut);
var Xr;
(function (t) {
  (t[(t.SysFatal = 1)] = "SysFatal"),
    (t[(t.SysTransient = 2)] = "SysTransient"),
    (t[(t.DestinationInvalid = 3)] = "DestinationInvalid"),
    (t[(t.CanisterReject = 4)] = "CanisterReject"),
    (t[(t.CanisterError = 5)] = "CanisterError");
})(Xr || (Xr = {}));
const Br = "abcdefghijklmnopqrstuvwxyz234567",
  Mt = Object.create(null);
for (let t = 0; t < Br.length; t++) Mt[Br[t]] = t;
Mt[0] = Mt.o;
Mt[1] = Mt.i;
function ha(t) {
  let A = 0,
    e = 0,
    r = "";
  function a(c) {
    return (
      A < 0 ? (e |= c >> -A) : (e = (c << A) & 248),
      A > 3 ? ((A -= 8), 1) : (A < 4 && ((r += Br[e >> 3]), (A += 5)), 0)
    );
  }
  for (let c = 0; c < t.length; ) c += a(t[c]);
  return r + (A < 0 ? Br[e >> 3] : "");
}
function Qa(t) {
  let A = 0,
    e = 0;
  const r = new Uint8Array(((t.length * 4) / 3) | 0);
  let a = 0;
  function c(E) {
    let u = Mt[E.toLowerCase()];
    if (u === void 0)
      throw new Error(`Invalid character: ${JSON.stringify(E)}`);
    (u <<= 3),
      (e |= u >>> A),
      (A += 5),
      A >= 8 &&
        ((r[a++] = e), (A -= 8), A > 0 ? (e = (u << (5 - A)) & 255) : (e = 0));
  }
  for (const E of t) c(E);
  return r.slice(0, a);
}
const la = new Uint32Array([
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
function Ca(t) {
  const A = new Uint8Array(t);
  let e = -1;
  for (let r = 0; r < A.length; r++) {
    const c = (A[r] ^ e) & 255;
    e = la[c] ^ (e >>> 8);
  }
  return (e ^ -1) >>> 0;
}
function da(t, ...A) {
  if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
  if (A.length > 0 && !A.includes(t.length))
    throw new Error(
      `Expected Uint8Array of length ${A}, not of length=${t.length}`
    );
}
function Un(t, A = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (A && t.finished) throw new Error("Hash#digest() has already been called");
}
function wa(t, A) {
  da(t);
  const e = A.outputLen;
  if (t.length < e)
    throw new Error(
      `digestInto() expects output buffer of length at least ${e}`
    );
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const pa =
    (t) => t instanceof Uint8Array,
  Fr = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
  Ve = (t, A) => (t << (32 - A)) | (t >>> A),
  ya = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!ya) throw new Error("Non little-endian hardware is not supported");
function xa(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function hi(t) {
  if ((typeof t == "string" && (t = xa(t)), !pa(t)))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
class Sa {
  clone() {
    return this._cloneInto();
  }
}
function Qi(t) {
  const A = (r) => t().update(hi(r)).digest(),
    e = t();
  return (
    (A.outputLen = e.outputLen),
    (A.blockLen = e.blockLen),
    (A.create = () => t()),
    A
  );
}
function Da(t, A, e, r) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(A, e, r);
  const a = BigInt(32),
    c = BigInt(4294967295),
    E = Number((e >> a) & c),
    u = Number(e & c),
    y = r ? 4 : 0,
    m = r ? 0 : 4;
  t.setUint32(A + y, E, r), t.setUint32(A + m, u, r);
}
class ma extends Sa {
  constructor(A, e, r, a) {
    super(),
      (this.blockLen = A),
      (this.outputLen = e),
      (this.padOffset = r),
      (this.isLE = a),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(A)),
      (this.view = Fr(this.buffer));
  }
  update(A) {
    Un(this);
    const { view: e, buffer: r, blockLen: a } = this;
    A = hi(A);
    const c = A.length;
    for (let E = 0; E < c; ) {
      const u = Math.min(a - this.pos, c - E);
      if (u === a) {
        const y = Fr(A);
        for (; a <= c - E; E += a) this.process(y, E);
        continue;
      }
      r.set(A.subarray(E, E + u), this.pos),
        (this.pos += u),
        (E += u),
        this.pos === a && (this.process(e, 0), (this.pos = 0));
    }
    return (this.length += A.length), this.roundClean(), this;
  }
  digestInto(A) {
    Un(this), wa(A, this), (this.finished = !0);
    const { buffer: e, view: r, blockLen: a, isLE: c } = this;
    let { pos: E } = this;
    (e[E++] = 128),
      this.buffer.subarray(E).fill(0),
      this.padOffset > a - E && (this.process(r, 0), (E = 0));
    for (let U = E; U < a; U++) e[U] = 0;
    Da(r, a - 8, BigInt(this.length * 8), c), this.process(r, 0);
    const u = Fr(A),
      y = this.outputLen;
    if (y % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const m = y / 4,
      L = this.get();
    if (m > L.length) throw new Error("_sha2: outputLen bigger than state");
    for (let U = 0; U < m; U++) u.setUint32(4 * U, L[U], c);
  }
  digest() {
    const { buffer: A, outputLen: e } = this;
    this.digestInto(A);
    const r = A.slice(0, e);
    return this.destroy(), r;
  }
  _cloneInto(A) {
    A || (A = new this.constructor()), A.set(...this.get());
    const {
      blockLen: e,
      buffer: r,
      length: a,
      finished: c,
      destroyed: E,
      pos: u,
    } = this;
    return (
      (A.length = a),
      (A.pos = u),
      (A.finished = c),
      (A.destroyed = E),
      a % e && A.buffer.set(r),
      A
    );
  }
}
const ba = (t, A, e) => (t & A) ^ (~t & e),
  Na = (t, A, e) => (t & A) ^ (t & e) ^ (A & e),
  _a = new Uint32Array([
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
  ot = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  gt = new Uint32Array(64);
class li extends ma {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = ot[0] | 0),
      (this.B = ot[1] | 0),
      (this.C = ot[2] | 0),
      (this.D = ot[3] | 0),
      (this.E = ot[4] | 0),
      (this.F = ot[5] | 0),
      (this.G = ot[6] | 0),
      (this.H = ot[7] | 0);
  }
  get() {
    const { A, B: e, C: r, D: a, E: c, F: E, G: u, H: y } = this;
    return [A, e, r, a, c, E, u, y];
  }
  set(A, e, r, a, c, E, u, y) {
    (this.A = A | 0),
      (this.B = e | 0),
      (this.C = r | 0),
      (this.D = a | 0),
      (this.E = c | 0),
      (this.F = E | 0),
      (this.G = u | 0),
      (this.H = y | 0);
  }
  process(A, e) {
    for (let U = 0; U < 16; U++, e += 4) gt[U] = A.getUint32(e, !1);
    for (let U = 16; U < 64; U++) {
      const eA = gt[U - 15],
        T = gt[U - 2],
        sA = Ve(eA, 7) ^ Ve(eA, 18) ^ (eA >>> 3),
        QA = Ve(T, 17) ^ Ve(T, 19) ^ (T >>> 10);
      gt[U] = (QA + gt[U - 7] + sA + gt[U - 16]) | 0;
    }
    let { A: r, B: a, C: c, D: E, E: u, F: y, G: m, H: L } = this;
    for (let U = 0; U < 64; U++) {
      const eA = Ve(u, 6) ^ Ve(u, 11) ^ Ve(u, 25),
        T = (L + eA + ba(u, y, m) + _a[U] + gt[U]) | 0,
        QA = ((Ve(r, 2) ^ Ve(r, 13) ^ Ve(r, 22)) + Na(r, a, c)) | 0;
      (L = m),
        (m = y),
        (y = u),
        (u = (E + T) | 0),
        (E = c),
        (c = a),
        (a = r),
        (r = (T + QA) | 0);
    }
    (r = (r + this.A) | 0),
      (a = (a + this.B) | 0),
      (c = (c + this.C) | 0),
      (E = (E + this.D) | 0),
      (u = (u + this.E) | 0),
      (y = (y + this.F) | 0),
      (m = (m + this.G) | 0),
      (L = (L + this.H) | 0),
      this.set(r, a, c, E, u, y, m, L);
  }
  roundClean() {
    gt.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class Fa extends li {
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
const Ra = Qi(() => new li()),
  Ta = Qi(() => new Fa());
function Ma(t) {
  return Ta.create().update(new Uint8Array(t)).digest();
}
const zt = "__principal__",
  Ga = 2,
  vn = 4,
  Ua = "aaaaa-aa",
  va = (t) => {
    var A;
    return new Uint8Array(
      ((A = t.match(/.{1,2}/g)) !== null && A !== void 0 ? A : []).map((e) =>
        parseInt(e, 16)
      )
    );
  },
  ka = (t) => t.reduce((A, e) => A + e.toString(16).padStart(2, "0"), "");
let ie = class $r {
  constructor(A) {
    (this._arr = A), (this._isPrincipal = !0);
  }
  static anonymous() {
    return new this(new Uint8Array([vn]));
  }
  static managementCanister() {
    return this.fromHex(Ua);
  }
  static selfAuthenticating(A) {
    const e = Ma(A);
    return new this(new Uint8Array([...e, Ga]));
  }
  static from(A) {
    if (typeof A == "string") return $r.fromText(A);
    if (typeof A == "object" && A !== null && A._isPrincipal === !0)
      return new $r(A._arr);
    throw new Error(`Impossible to convert ${JSON.stringify(A)} to Principal.`);
  }
  static fromHex(A) {
    return new this(va(A));
  }
  static fromText(A) {
    let e = A;
    if (A.includes(zt)) {
      const E = JSON.parse(A);
      zt in E && (e = E[zt]);
    }
    const r = e.toLowerCase().replace(/-/g, "");
    let a = Qa(r);
    a = a.slice(4, a.length);
    const c = new this(a);
    if (c.toText() !== e)
      throw new Error(
        `Principal "${c.toText()}" does not have a valid checksum (original value "${e}" may not be a valid Principal ID).`
      );
    return c;
  }
  static fromUint8Array(A) {
    return new this(A);
  }
  isAnonymous() {
    return this._arr.byteLength === 1 && this._arr[0] === vn;
  }
  toUint8Array() {
    return this._arr;
  }
  toHex() {
    return ka(this._arr).toUpperCase();
  }
  toText() {
    const A = new ArrayBuffer(4);
    new DataView(A).setUint32(0, Ca(this._arr));
    const r = new Uint8Array(A),
      a = Uint8Array.from(this._arr),
      c = new Uint8Array([...r, ...a]),
      u = ha(c).match(/.{1,5}/g);
    if (!u) throw new Error();
    return u.join("-");
  }
  toString() {
    return this.toText();
  }
  toJSON() {
    return { [zt]: this.toText() };
  }
  compareTo(A) {
    for (let e = 0; e < Math.min(this._arr.length, A._arr.length); e++) {
      if (this._arr[e] < A._arr[e]) return "lt";
      if (this._arr[e] > A._arr[e]) return "gt";
    }
    return this._arr.length < A._arr.length
      ? "lt"
      : this._arr.length > A._arr.length
      ? "gt"
      : "eq";
  }
  ltEq(A) {
    const e = this.compareTo(A);
    return e == "lt" || e == "eq";
  }
  gtEq(A) {
    const e = this.compareTo(A);
    return e == "gt" || e == "eq";
  }
};
class it extends Error {
  constructor(A) {
    super(A), (this.message = A), Object.setPrototypeOf(this, it.prototype);
  }
}
function Ae(...t) {
  const A = new Uint8Array(t.reduce((r, a) => r + a.byteLength, 0));
  let e = 0;
  for (const r of t) A.set(new Uint8Array(r), e), (e += r.byteLength);
  return A;
}
class vt {
  constructor(A, e = A?.byteLength || 0) {
    (this._buffer = A || new ArrayBuffer(0)),
      (this._view = new Uint8Array(this._buffer, 0, e));
  }
  get buffer() {
    return this._view.slice();
  }
  get byteLength() {
    return this._view.byteLength;
  }
  read(A) {
    const e = this._view.subarray(0, A);
    return (this._view = this._view.subarray(A)), e.slice().buffer;
  }
  readUint8() {
    const A = this._view[0];
    return (this._view = this._view.subarray(1)), A;
  }
  write(A) {
    const e = new Uint8Array(A),
      r = this._view.byteLength;
    this._view.byteOffset + this._view.byteLength + e.byteLength >=
    this._buffer.byteLength
      ? this.alloc(e.byteLength)
      : (this._view = new Uint8Array(
          this._buffer,
          this._view.byteOffset,
          this._view.byteLength + e.byteLength
        )),
      this._view.set(e, r);
  }
  get end() {
    return this._view.byteLength === 0;
  }
  alloc(A) {
    const e = new ArrayBuffer(((this._buffer.byteLength + A) * 1.2) | 0),
      r = new Uint8Array(e, 0, this._view.byteLength + A);
    r.set(this._view), (this._buffer = e), (this._view = r);
  }
}
function La(t) {
  const e = new TextEncoder().encode(t);
  let r = 0;
  for (const a of e) r = (r * 223 + a) % 2 ** 32;
  return r;
}
function He(t) {
  if (/^_\d+_$/.test(t) || /^_0x[0-9a-fA-F]+_$/.test(t)) {
    const A = +t.slice(1, -1);
    if (Number.isSafeInteger(A) && A >= 0 && A < 2 ** 32) return A;
  }
  return La(t);
}
function Ci() {
  throw new Error("unexpected end of buffer");
}
function wt(t, A) {
  return t.byteLength < A && Ci(), t.read(A);
}
function pt(t) {
  const A = t.readUint8();
  return A === void 0 && Ci(), A;
}
function Ee(t) {
  if ((typeof t == "number" && (t = BigInt(t)), t < BigInt(0)))
    throw new Error("Cannot leb encode negative values.");
  const A = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1,
    e = new vt(new ArrayBuffer(A), 0);
  for (;;) {
    const r = Number(t & BigInt(127));
    if (((t /= BigInt(128)), t === BigInt(0))) {
      e.write(new Uint8Array([r]));
      break;
    } else e.write(new Uint8Array([r | 128]));
  }
  return e.buffer;
}
function ye(t) {
  let A = BigInt(1),
    e = BigInt(0),
    r;
  do (r = pt(t)), (e += BigInt(r & 127).valueOf() * A), (A *= BigInt(128));
  while (r >= 128);
  return e;
}
function Ce(t) {
  typeof t == "number" && (t = BigInt(t));
  const A = t < BigInt(0);
  A && (t = -t - BigInt(1));
  const e = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1,
    r = new vt(new ArrayBuffer(e), 0);
  for (;;) {
    const c = a(t);
    if (
      ((t /= BigInt(128)),
      (A && t === BigInt(0) && c & 64) || (!A && t === BigInt(0) && !(c & 64)))
    ) {
      r.write(new Uint8Array([c]));
      break;
    } else r.write(new Uint8Array([c | 128]));
  }
  function a(c) {
    const E = c % BigInt(128);
    return Number(A ? BigInt(128) - E - BigInt(1) : E);
  }
  return r.buffer;
}
function ft(t) {
  const A = new Uint8Array(t.buffer);
  let e = 0;
  for (; e < A.byteLength; e++)
    if (A[e] < 128) {
      if (!(A[e] & 64)) return ye(t);
      break;
    }
  const r = new Uint8Array(wt(t, e + 1));
  let a = BigInt(0);
  for (let c = r.byteLength - 1; c >= 0; c--)
    a = a * BigInt(128) + BigInt(128 - (r[c] & 127) - 1);
  return -a - BigInt(1);
}
function Ya(t, A) {
  if (BigInt(t) < BigInt(0)) throw new Error("Cannot write negative values.");
  return di(t, A);
}
function di(t, A) {
  t = BigInt(t);
  const e = new vt(new ArrayBuffer(Math.min(1, A)), 0);
  let r = 0,
    a = BigInt(256),
    c = BigInt(0),
    E = Number(t % a);
  for (e.write(new Uint8Array([E])); ++r < A; )
    t < 0 && c === BigInt(0) && E !== 0 && (c = BigInt(1)),
      (E = Number((t / a - c) % BigInt(256))),
      e.write(new Uint8Array([E])),
      (a *= BigInt(256));
  return e.buffer;
}
function wi(t, A) {
  let e = BigInt(pt(t)),
    r = BigInt(1),
    a = 0;
  for (; ++a < A; ) {
    r *= BigInt(256);
    const c = BigInt(pt(t));
    e = e + r * c;
  }
  return e;
}
function Ha(t, A) {
  let e = wi(t, A);
  const r = BigInt(2) ** (BigInt(8) * BigInt(A - 1) + BigInt(7));
  return e >= r && (e -= r * BigInt(2)), e;
}
function An(t) {
  const A = BigInt(t);
  if (t < 0) throw new RangeError("Input must be non-negative");
  return BigInt(1) << A;
}
const gr = "DIDL",
  kn = 400;
function Kt(t, A, e) {
  return t.map((r, a) => e(r, A[a]));
}
class Oa {
  constructor() {
    (this._typs = []), (this._idx = new Map());
  }
  has(A) {
    return this._idx.has(A.name);
  }
  add(A, e) {
    const r = this._typs.length;
    this._idx.set(A.name, r), this._typs.push(e);
  }
  merge(A, e) {
    const r = this._idx.get(A.name),
      a = this._idx.get(e);
    if (r === void 0) throw new Error("Missing type index for " + A);
    if (a === void 0) throw new Error("Missing type index for " + e);
    (this._typs[r] = this._typs[a]),
      this._typs.splice(a, 1),
      this._idx.delete(e);
  }
  encode() {
    const A = Ee(this._typs.length),
      e = Ae(...this._typs);
    return Ae(A, e);
  }
  indexOf(A) {
    if (!this._idx.has(A)) throw new Error("Missing type index for " + A);
    return Ce(this._idx.get(A) || 0);
  }
}
class qa {
  visitType(A, e) {
    throw new Error("Not implemented");
  }
  visitPrimitive(A, e) {
    return this.visitType(A, e);
  }
  visitEmpty(A, e) {
    return this.visitPrimitive(A, e);
  }
  visitBool(A, e) {
    return this.visitPrimitive(A, e);
  }
  visitNull(A, e) {
    return this.visitPrimitive(A, e);
  }
  visitReserved(A, e) {
    return this.visitPrimitive(A, e);
  }
  visitText(A, e) {
    return this.visitPrimitive(A, e);
  }
  visitNumber(A, e) {
    return this.visitPrimitive(A, e);
  }
  visitInt(A, e) {
    return this.visitNumber(A, e);
  }
  visitNat(A, e) {
    return this.visitNumber(A, e);
  }
  visitFloat(A, e) {
    return this.visitPrimitive(A, e);
  }
  visitFixedInt(A, e) {
    return this.visitNumber(A, e);
  }
  visitFixedNat(A, e) {
    return this.visitNumber(A, e);
  }
  visitPrincipal(A, e) {
    return this.visitPrimitive(A, e);
  }
  visitConstruct(A, e) {
    return this.visitType(A, e);
  }
  visitVec(A, e, r) {
    return this.visitConstruct(A, r);
  }
  visitOpt(A, e, r) {
    return this.visitConstruct(A, r);
  }
  visitRecord(A, e, r) {
    return this.visitConstruct(A, r);
  }
  visitTuple(A, e, r) {
    const a = e.map((c, E) => [`_${E}_`, c]);
    return this.visitRecord(A, a, r);
  }
  visitVariant(A, e, r) {
    return this.visitConstruct(A, r);
  }
  visitRec(A, e, r) {
    return this.visitConstruct(e, r);
  }
  visitFunc(A, e) {
    return this.visitConstruct(A, e);
  }
  visitService(A, e) {
    return this.visitConstruct(A, e);
  }
}
class wr {
  display() {
    return this.name;
  }
  valueToString(A) {
    return he(A);
  }
  buildTypeTable(A) {
    A.has(this) || this._buildTypeTableImpl(A);
  }
}
class qe extends wr {
  checkType(A) {
    if (this.name !== A.name)
      throw new Error(
        `type mismatch: type on the wire ${A.name}, expect type ${this.name}`
      );
    return A;
  }
  _buildTypeTableImpl(A) {}
}
class ht extends wr {
  checkType(A) {
    if (A instanceof Qt) {
      const e = A.getType();
      if (typeof e > "u")
        throw new Error("type mismatch with uninitialized type");
      return e;
    }
    throw new Error(
      `type mismatch: type on the wire ${A.name}, expect type ${this.name}`
    );
  }
  encodeType(A) {
    return A.indexOf(this.name);
  }
}
class pi extends qe {
  accept(A, e) {
    return A.visitEmpty(this, e);
  }
  covariant(A) {
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue() {
    throw new Error("Empty cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Empty cannot appear as a value");
  }
  encodeType() {
    return Ce(-17);
  }
  decodeValue() {
    throw new Error("Empty cannot appear as an output");
  }
  get name() {
    return "empty";
  }
}
class yi extends wr {
  checkType(A) {
    throw new Error("Method not implemented for unknown.");
  }
  accept(A, e) {
    throw A.visitType(this, e);
  }
  covariant(A) {
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
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
  decodeValue(A, e) {
    let r = e.decodeValue(A, e);
    Object(r) !== r && (r = Object(r));
    let a;
    return (
      e instanceof Qt ? (a = () => e.getType()) : (a = () => e),
      Object.defineProperty(r, "type", {
        value: a,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      r
    );
  }
  _buildTypeTableImpl() {
    throw new Error("Unknown cannot be serialized");
  }
  get name() {
    return "Unknown";
  }
}
class xi extends qe {
  accept(A, e) {
    return A.visitBool(this, e);
  }
  covariant(A) {
    if (typeof A == "boolean") return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    return new Uint8Array([A ? 1 : 0]);
  }
  encodeType() {
    return Ce(-2);
  }
  decodeValue(A, e) {
    switch ((this.checkType(e), pt(A))) {
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
class Si extends qe {
  accept(A, e) {
    return A.visitNull(this, e);
  }
  covariant(A) {
    if (A === null) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue() {
    return new ArrayBuffer(0);
  }
  encodeType() {
    return Ce(-1);
  }
  decodeValue(A, e) {
    return this.checkType(e), null;
  }
  get name() {
    return "null";
  }
}
class Er extends qe {
  accept(A, e) {
    return A.visitReserved(this, e);
  }
  covariant(A) {
    return !0;
  }
  encodeValue() {
    return new ArrayBuffer(0);
  }
  encodeType() {
    return Ce(-16);
  }
  decodeValue(A, e) {
    return e.name !== this.name && e.decodeValue(A, e), null;
  }
  get name() {
    return "reserved";
  }
}
class Di extends qe {
  accept(A, e) {
    return A.visitText(this, e);
  }
  covariant(A) {
    if (typeof A == "string") return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    const e = new TextEncoder().encode(A),
      r = Ee(e.byteLength);
    return Ae(r, e);
  }
  encodeType() {
    return Ce(-15);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const r = ye(A),
      a = wt(A, Number(r));
    return new TextDecoder("utf8", { fatal: !0 }).decode(a);
  }
  get name() {
    return "text";
  }
  valueToString(A) {
    return '"' + A + '"';
  }
}
class mi extends qe {
  accept(A, e) {
    return A.visitInt(this, e);
  }
  covariant(A) {
    if (typeof A == "bigint" || Number.isInteger(A)) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    return Ce(A);
  }
  encodeType() {
    return Ce(-4);
  }
  decodeValue(A, e) {
    return this.checkType(e), ft(A);
  }
  get name() {
    return "int";
  }
  valueToString(A) {
    return A.toString();
  }
}
class bi extends qe {
  accept(A, e) {
    return A.visitNat(this, e);
  }
  covariant(A) {
    if (
      (typeof A == "bigint" && A >= BigInt(0)) ||
      (Number.isInteger(A) && A >= 0)
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    return Ee(A);
  }
  encodeType() {
    return Ce(-3);
  }
  decodeValue(A, e) {
    return this.checkType(e), ye(A);
  }
  get name() {
    return "nat";
  }
  valueToString(A) {
    return A.toString();
  }
}
class pn extends qe {
  constructor(A) {
    if ((super(), (this._bits = A), A !== 32 && A !== 64))
      throw new Error("not a valid float type");
  }
  accept(A, e) {
    return A.visitFloat(this, e);
  }
  covariant(A) {
    if (typeof A == "number" || A instanceof Number) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    const e = new ArrayBuffer(this._bits / 8),
      r = new DataView(e);
    return (
      this._bits === 32 ? r.setFloat32(0, A, !0) : r.setFloat64(0, A, !0), e
    );
  }
  encodeType() {
    const A = this._bits === 32 ? -13 : -14;
    return Ce(A);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const r = wt(A, this._bits / 8),
      a = new DataView(r);
    return this._bits === 32 ? a.getFloat32(0, !0) : a.getFloat64(0, !0);
  }
  get name() {
    return "float" + this._bits;
  }
  valueToString(A) {
    return A.toString();
  }
}
class yt extends qe {
  constructor(A) {
    super(), (this._bits = A);
  }
  accept(A, e) {
    return A.visitFixedInt(this, e);
  }
  covariant(A) {
    const e = An(this._bits - 1) * BigInt(-1),
      r = An(this._bits - 1) - BigInt(1);
    let a = !1;
    if (typeof A == "bigint") a = A >= e && A <= r;
    else if (Number.isInteger(A)) {
      const c = BigInt(A);
      a = c >= e && c <= r;
    } else a = !1;
    if (a) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    return di(A, this._bits / 8);
  }
  encodeType() {
    const A = Math.log2(this._bits) - 3;
    return Ce(-9 - A);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const r = Ha(A, this._bits / 8);
    return this._bits <= 32 ? Number(r) : r;
  }
  get name() {
    return `int${this._bits}`;
  }
  valueToString(A) {
    return A.toString();
  }
}
class Bt extends qe {
  constructor(A) {
    super(), (this._bits = A);
  }
  accept(A, e) {
    return A.visitFixedNat(this, e);
  }
  covariant(A) {
    const e = An(this._bits);
    let r = !1;
    if (
      (typeof A == "bigint" && A >= BigInt(0)
        ? (r = A < e)
        : Number.isInteger(A) && A >= 0
        ? (r = BigInt(A) < e)
        : (r = !1),
      r)
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    return Ya(A, this._bits / 8);
  }
  encodeType() {
    const A = Math.log2(this._bits) - 3;
    return Ce(-5 - A);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const r = wi(A, this._bits / 8);
    return this._bits <= 32 ? Number(r) : r;
  }
  get name() {
    return `nat${this._bits}`;
  }
  valueToString(A) {
    return A.toString();
  }
}
class pr extends ht {
  constructor(A) {
    super(),
      (this._type = A),
      (this._blobOptimization = !1),
      A instanceof Bt && A._bits === 8 && (this._blobOptimization = !0);
  }
  accept(A, e) {
    return A.visitVec(this, this._type, e);
  }
  covariant(A) {
    const e =
      this._type instanceof Bt
        ? this._type._bits
        : this._type instanceof yt
        ? this._type._bits
        : 0;
    if (
      (ArrayBuffer.isView(A) && e == A.BYTES_PER_ELEMENT * 8) ||
      (Array.isArray(A) &&
        A.every((r, a) => {
          try {
            return this._type.covariant(r);
          } catch (c) {
            throw new Error(`Invalid ${this.display()} argument: 

index ${a} -> ${c.message}`);
          }
        }))
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    const e = Ee(A.length);
    if (this._blobOptimization) return Ae(e, new Uint8Array(A));
    if (ArrayBuffer.isView(A)) return Ae(e, new Uint8Array(A.buffer));
    const r = new vt(new ArrayBuffer(e.byteLength + A.length), 0);
    r.write(e);
    for (const a of A) {
      const c = this._type.encodeValue(a);
      r.write(new Uint8Array(c));
    }
    return r.buffer;
  }
  _buildTypeTableImpl(A) {
    this._type.buildTypeTable(A);
    const e = Ce(-19),
      r = this._type.encodeType(A);
    A.add(this, Ae(e, r));
  }
  decodeValue(A, e) {
    const r = this.checkType(e);
    if (!(r instanceof pr)) throw new Error("Not a vector type");
    const a = Number(ye(A));
    if (this._type instanceof Bt) {
      if (this._type._bits == 8) return new Uint8Array(A.read(a));
      if (this._type._bits == 16) return new Uint16Array(A.read(a * 2));
      if (this._type._bits == 32) return new Uint32Array(A.read(a * 4));
      if (this._type._bits == 64) return new BigUint64Array(A.read(a * 8));
    }
    if (this._type instanceof yt) {
      if (this._type._bits == 8) return new Int8Array(A.read(a));
      if (this._type._bits == 16) return new Int16Array(A.read(a * 2));
      if (this._type._bits == 32) return new Int32Array(A.read(a * 4));
      if (this._type._bits == 64) return new BigInt64Array(A.read(a * 8));
    }
    const c = [];
    for (let E = 0; E < a; E++) c.push(this._type.decodeValue(A, r._type));
    return c;
  }
  get name() {
    return `vec ${this._type.name}`;
  }
  display() {
    return `vec ${this._type.display()}`;
  }
  valueToString(A) {
    return "vec {" + A.map((r) => this._type.valueToString(r)).join("; ") + "}";
  }
}
class Gt extends ht {
  constructor(A) {
    super(), (this._type = A);
  }
  accept(A, e) {
    return A.visitOpt(this, this._type, e);
  }
  covariant(A) {
    try {
      if (
        Array.isArray(A) &&
        (A.length === 0 || (A.length === 1 && this._type.covariant(A[0])))
      )
        return !0;
    } catch (e) {
      throw new Error(`Invalid ${this.display()} argument: ${he(A)} 

-> ${e.message}`);
    }
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    return A.length === 0
      ? new Uint8Array([0])
      : Ae(new Uint8Array([1]), this._type.encodeValue(A[0]));
  }
  _buildTypeTableImpl(A) {
    this._type.buildTypeTable(A);
    const e = Ce(-18),
      r = this._type.encodeType(A);
    A.add(this, Ae(e, r));
  }
  decodeValue(A, e) {
    const r = this.checkType(e);
    if (!(r instanceof Gt)) throw new Error("Not an option type");
    switch (pt(A)) {
      case 0:
        return [];
      case 1:
        return [this._type.decodeValue(A, r._type)];
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
class jt extends ht {
  constructor(A = {}) {
    super(),
      (this._fields = Object.entries(A).sort((e, r) => He(e[0]) - He(r[0])));
  }
  accept(A, e) {
    return A.visitRecord(this, this._fields, e);
  }
  tryAsTuple() {
    const A = [];
    for (let e = 0; e < this._fields.length; e++) {
      const [r, a] = this._fields[e];
      if (r !== `_${e}_`) return null;
      A.push(a);
    }
    return A;
  }
  covariant(A) {
    if (
      typeof A == "object" &&
      this._fields.every(([e, r]) => {
        if (!A.hasOwnProperty(e))
          throw new Error(`Record is missing key "${e}".`);
        try {
          return r.covariant(A[e]);
        } catch (a) {
          throw new Error(`Invalid ${this.display()} argument: 

field ${e} -> ${a.message}`);
        }
      })
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    const e = this._fields.map(([a]) => A[a]),
      r = Kt(this._fields, e, ([, a], c) => a.encodeValue(c));
    return Ae(...r);
  }
  _buildTypeTableImpl(A) {
    this._fields.forEach(([c, E]) => E.buildTypeTable(A));
    const e = Ce(-20),
      r = Ee(this._fields.length),
      a = this._fields.map(([c, E]) => Ae(Ee(He(c)), E.encodeType(A)));
    A.add(this, Ae(e, r, Ae(...a)));
  }
  decodeValue(A, e) {
    const r = this.checkType(e);
    if (!(r instanceof jt)) throw new Error("Not a record type");
    const a = {};
    let c = 0,
      E = 0;
    for (; E < r._fields.length; ) {
      const [u, y] = r._fields[E];
      if (c >= this._fields.length) {
        y.decodeValue(A, y), E++;
        continue;
      }
      const [m, L] = this._fields[c],
        U = He(this._fields[c][0]),
        eA = He(u);
      if (U === eA) (a[m] = L.decodeValue(A, y)), c++, E++;
      else if (eA > U)
        if (L instanceof Gt || L instanceof Er) (a[m] = []), c++;
        else throw new Error("Cannot find required field " + m);
      else y.decodeValue(A, y), E++;
    }
    for (const [u, y] of this._fields.slice(c))
      if (y instanceof Gt || y instanceof Er) a[u] = [];
      else throw new Error("Cannot find required field " + u);
    return a;
  }
  get name() {
    return `record {${this._fields
      .map(([e, r]) => e + ":" + r.name)
      .join("; ")}}`;
  }
  display() {
    return `record {${this._fields
      .map(([e, r]) => e + ":" + r.display())
      .join("; ")}}`;
  }
  valueToString(A) {
    const e = this._fields.map(([a]) => A[a]);
    return `record {${Kt(
      this._fields,
      e,
      ([a, c], E) => a + "=" + c.valueToString(E)
    ).join("; ")}}`;
  }
}
class yr extends jt {
  constructor(A) {
    const e = {};
    A.forEach((r, a) => (e["_" + a + "_"] = r)),
      super(e),
      (this._components = A);
  }
  accept(A, e) {
    return A.visitTuple(this, this._components, e);
  }
  covariant(A) {
    if (
      Array.isArray(A) &&
      A.length >= this._fields.length &&
      this._components.every((e, r) => {
        try {
          return e.covariant(A[r]);
        } catch (a) {
          throw new Error(`Invalid ${this.display()} argument: 

index ${r} -> ${a.message}`);
        }
      })
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    const e = Kt(this._components, A, (r, a) => r.encodeValue(a));
    return Ae(...e);
  }
  decodeValue(A, e) {
    const r = this.checkType(e);
    if (!(r instanceof yr)) throw new Error("not a tuple type");
    if (r._components.length < this._components.length)
      throw new Error("tuple mismatch");
    const a = [];
    for (const [c, E] of r._components.entries())
      c >= this._components.length
        ? E.decodeValue(A, E)
        : a.push(this._components[c].decodeValue(A, E));
    return a;
  }
  display() {
    return `record {${this._components.map((e) => e.display()).join("; ")}}`;
  }
  valueToString(A) {
    return `record {${Kt(this._components, A, (r, a) =>
      r.valueToString(a)
    ).join("; ")}}`;
  }
}
class xr extends ht {
  constructor(A = {}) {
    super(),
      (this._fields = Object.entries(A).sort((e, r) => He(e[0]) - He(r[0])));
  }
  accept(A, e) {
    return A.visitVariant(this, this._fields, e);
  }
  covariant(A) {
    if (
      typeof A == "object" &&
      Object.entries(A).length === 1 &&
      this._fields.every(([e, r]) => {
        try {
          return !A.hasOwnProperty(e) || r.covariant(A[e]);
        } catch (a) {
          throw new Error(`Invalid ${this.display()} argument: 

variant ${e} -> ${a.message}`);
        }
      })
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    for (let e = 0; e < this._fields.length; e++) {
      const [r, a] = this._fields[e];
      if (A.hasOwnProperty(r)) {
        const c = Ee(e),
          E = a.encodeValue(A[r]);
        return Ae(c, E);
      }
    }
    throw Error("Variant has no data: " + A);
  }
  _buildTypeTableImpl(A) {
    this._fields.forEach(([, c]) => {
      c.buildTypeTable(A);
    });
    const e = Ce(-21),
      r = Ee(this._fields.length),
      a = this._fields.map(([c, E]) => Ae(Ee(He(c)), E.encodeType(A)));
    A.add(this, Ae(e, r, ...a));
  }
  decodeValue(A, e) {
    const r = this.checkType(e);
    if (!(r instanceof xr)) throw new Error("Not a variant type");
    const a = Number(ye(A));
    if (a >= r._fields.length) throw Error("Invalid variant index: " + a);
    const [c, E] = r._fields[a];
    for (const [u, y] of this._fields)
      if (He(c) === He(u)) {
        const m = y.decodeValue(A, E);
        return { [u]: m };
      }
    throw new Error("Cannot find field hash " + c);
  }
  get name() {
    return `variant {${this._fields
      .map(([e, r]) => e + ":" + r.name)
      .join("; ")}}`;
  }
  display() {
    return `variant {${this._fields
      .map(([e, r]) => e + (r.name === "null" ? "" : `:${r.display()}`))
      .join("; ")}}`;
  }
  valueToString(A) {
    for (const [e, r] of this._fields)
      if (A.hasOwnProperty(e)) {
        const a = r.valueToString(A[e]);
        return a === "null" ? `variant {${e}}` : `variant {${e}=${a}}`;
      }
    throw new Error("Variant has no data: " + A);
  }
}
class Qt extends ht {
  constructor() {
    super(...arguments), (this._id = Qt._counter++), (this._type = void 0);
  }
  accept(A, e) {
    if (!this._type) throw Error("Recursive type uninitialized.");
    return A.visitRec(this, this._type, e);
  }
  fill(A) {
    this._type = A;
  }
  getType() {
    return this._type;
  }
  covariant(A) {
    if (this._type && this._type.covariant(A)) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
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
  decodeValue(A, e) {
    if (!this._type) throw Error("Recursive type uninitialized.");
    return this._type.decodeValue(A, e);
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
Qt._counter = 0;
function yn(t) {
  if (pt(t) !== 1) throw new Error("Cannot decode principal");
  const e = Number(ye(t));
  return ie.fromUint8Array(new Uint8Array(wt(t, e)));
}
class Ni extends qe {
  accept(A, e) {
    return A.visitPrincipal(this, e);
  }
  covariant(A) {
    if (A && A._isPrincipal) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    const e = A.toUint8Array(),
      r = Ee(e.byteLength);
    return Ae(new Uint8Array([1]), r, e);
  }
  encodeType() {
    return Ce(-24);
  }
  decodeValue(A, e) {
    return this.checkType(e), yn(A);
  }
  get name() {
    return "principal";
  }
  valueToString(A) {
    return `${this.name} "${A.toText()}"`;
  }
}
class xn extends ht {
  constructor(A, e, r = []) {
    super(), (this.argTypes = A), (this.retTypes = e), (this.annotations = r);
  }
  static argsToString(A, e) {
    if (A.length !== e.length) throw new Error("arity mismatch");
    return "(" + A.map((r, a) => r.valueToString(e[a])).join(", ") + ")";
  }
  accept(A, e) {
    return A.visitFunc(this, e);
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
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue([A, e]) {
    const r = A.toUint8Array(),
      a = Ee(r.byteLength),
      c = Ae(new Uint8Array([1]), a, r),
      E = new TextEncoder().encode(e),
      u = Ee(E.byteLength);
    return Ae(new Uint8Array([1]), c, u, E);
  }
  _buildTypeTableImpl(A) {
    this.argTypes.forEach((m) => m.buildTypeTable(A)),
      this.retTypes.forEach((m) => m.buildTypeTable(A));
    const e = Ce(-22),
      r = Ee(this.argTypes.length),
      a = Ae(...this.argTypes.map((m) => m.encodeType(A))),
      c = Ee(this.retTypes.length),
      E = Ae(...this.retTypes.map((m) => m.encodeType(A))),
      u = Ee(this.annotations.length),
      y = Ae(...this.annotations.map((m) => this.encodeAnnotation(m)));
    A.add(this, Ae(e, r, a, c, E, u, y));
  }
  decodeValue(A) {
    if (pt(A) !== 1) throw new Error("Cannot decode function reference");
    const r = yn(A),
      a = Number(ye(A)),
      c = wt(A, a),
      u = new TextDecoder("utf8", { fatal: !0 }).decode(c);
    return [r, u];
  }
  get name() {
    const A = this.argTypes.map((a) => a.name).join(", "),
      e = this.retTypes.map((a) => a.name).join(", "),
      r = " " + this.annotations.join(" ");
    return `(${A}) -> (${e})${r}`;
  }
  valueToString([A, e]) {
    return `func "${A.toText()}".${e}`;
  }
  display() {
    const A = this.argTypes.map((a) => a.display()).join(", "),
      e = this.retTypes.map((a) => a.display()).join(", "),
      r = " " + this.annotations.join(" ");
    return `(${A}) → (${e})${r}`;
  }
  encodeAnnotation(A) {
    if (A === "query") return new Uint8Array([1]);
    if (A === "oneway") return new Uint8Array([2]);
    if (A === "composite_query") return new Uint8Array([3]);
    throw new Error("Illegal function annotation");
  }
}
class _i extends ht {
  constructor(A) {
    super(),
      (this._fields = Object.entries(A).sort((e, r) => He(e[0]) - He(r[0])));
  }
  accept(A, e) {
    return A.visitService(this, e);
  }
  covariant(A) {
    if (A && A._isPrincipal) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${he(A)}`);
  }
  encodeValue(A) {
    const e = A.toUint8Array(),
      r = Ee(e.length);
    return Ae(new Uint8Array([1]), r, e);
  }
  _buildTypeTableImpl(A) {
    this._fields.forEach(([c, E]) => E.buildTypeTable(A));
    const e = Ce(-23),
      r = Ee(this._fields.length),
      a = this._fields.map(([c, E]) => {
        const u = new TextEncoder().encode(c),
          y = Ee(u.length);
        return Ae(y, u, E.encodeType(A));
      });
    A.add(this, Ae(e, r, ...a));
  }
  decodeValue(A) {
    return yn(A);
  }
  get name() {
    return `service {${this._fields
      .map(([e, r]) => e + ":" + r.name)
      .join("; ")}}`;
  }
  valueToString(A) {
    return `service "${A.toText()}"`;
  }
}
function he(t) {
  const A = JSON.stringify(t, (e, r) =>
    typeof r == "bigint" ? `BigInt(${r})` : r
  );
  return A && A.length > kn ? A.substring(0, kn - 3) + "..." : A;
}
function en(t, A) {
  if (A.length < t.length) throw Error("Wrong number of message arguments");
  const e = new Oa();
  t.forEach((y) => y.buildTypeTable(e));
  const r = new TextEncoder().encode(gr),
    a = e.encode(),
    c = Ee(A.length),
    E = Ae(...t.map((y) => y.encodeType(e))),
    u = Ae(
      ...Kt(t, A, (y, m) => {
        try {
          y.covariant(m);
        } catch (L) {
          throw new Error(
            L.message +
              `

`
          );
        }
        return y.encodeValue(m);
      })
    );
  return Ae(r, a, c, E, u);
}
function Fi(t, A) {
  const e = new vt(A);
  if (A.byteLength < gr.length)
    throw new Error("Message length smaller than magic number");
  const r = wt(e, gr.length),
    a = new TextDecoder().decode(r);
  if (a !== gr) throw new Error("Wrong magic number: " + JSON.stringify(a));
  function c(T) {
    const sA = [],
      QA = Number(ye(T));
    for (let lA = 0; lA < QA; lA++) {
      const MA = Number(ft(T));
      switch (MA) {
        case -18:
        case -19: {
          const qA = Number(ft(T));
          sA.push([MA, qA]);
          break;
        }
        case -20:
        case -21: {
          const qA = [];
          let GA = Number(ye(T)),
            aA;
          for (; GA--; ) {
            const fA = Number(ye(T));
            if (fA >= Math.pow(2, 32))
              throw new Error("field id out of 32-bit range");
            if (typeof aA == "number" && aA >= fA)
              throw new Error("field id collision or not sorted");
            aA = fA;
            const NA = Number(ft(T));
            qA.push([fA, NA]);
          }
          sA.push([MA, qA]);
          break;
        }
        case -22: {
          const qA = [];
          let GA = Number(ye(T));
          for (; GA--; ) qA.push(Number(ft(T)));
          const aA = [];
          let fA = Number(ye(T));
          for (; fA--; ) aA.push(Number(ft(T)));
          const NA = [];
          let PA = Number(ye(T));
          for (; PA--; )
            switch (Number(ye(T))) {
              case 1: {
                NA.push("query");
                break;
              }
              case 2: {
                NA.push("oneway");
                break;
              }
              case 3: {
                NA.push("composite_query");
                break;
              }
              default:
                throw new Error("unknown annotation");
            }
          sA.push([MA, [qA, aA, NA]]);
          break;
        }
        case -23: {
          let qA = Number(ye(T));
          const GA = [];
          for (; qA--; ) {
            const aA = Number(ye(T)),
              fA = new TextDecoder().decode(wt(T, aA)),
              NA = ft(T);
            GA.push([fA, NA]);
          }
          sA.push([MA, GA]);
          break;
        }
        default:
          throw new Error("Illegal op_code: " + MA);
      }
    }
    const UA = [],
      YA = Number(ye(T));
    for (let lA = 0; lA < YA; lA++) UA.push(Number(ft(T)));
    return [sA, UA];
  }
  const [E, u] = c(e);
  if (u.length < t.length) throw new Error("Wrong number of return values");
  const y = E.map((T) => es());
  function m(T) {
    if (T < -24) throw new Error("future value not supported");
    if (T < 0)
      switch (T) {
        case -1:
          return Gi;
        case -2:
          return Mi;
        case -3:
          return ki;
        case -4:
          return vi;
        case -5:
          return Ki;
        case -6:
          return Pi;
        case -7:
          return Wi;
        case -8:
          return ji;
        case -9:
          return Hi;
        case -10:
          return Oi;
        case -11:
          return qi;
        case -12:
          return Ji;
        case -13:
          return Li;
        case -14:
          return Yi;
        case -15:
          return Ui;
        case -16:
          return Ti;
        case -17:
          return Ri;
        case -24:
          return Vi;
        default:
          throw new Error("Illegal op_code: " + T);
      }
    if (T >= E.length) throw new Error("type index out of range");
    return y[T];
  }
  function L(T) {
    switch (T[0]) {
      case -19: {
        const sA = m(T[1]);
        return Zi(sA);
      }
      case -18: {
        const sA = m(T[1]);
        return Xi(sA);
      }
      case -20: {
        const sA = {};
        for (const [YA, lA] of T[1]) {
          const MA = `_${YA}_`;
          sA[MA] = m(lA);
        }
        const QA = $i(sA),
          UA = QA.tryAsTuple();
        return Array.isArray(UA) ? zi(...UA) : QA;
      }
      case -21: {
        const sA = {};
        for (const [QA, UA] of T[1]) {
          const YA = `_${QA}_`;
          sA[YA] = m(UA);
        }
        return As(sA);
      }
      case -22: {
        const [sA, QA, UA] = T[1];
        return ts(
          sA.map((YA) => m(YA)),
          QA.map((YA) => m(YA)),
          UA
        );
      }
      case -23: {
        const sA = {},
          QA = T[1];
        for (const [UA, YA] of QA) {
          let lA = m(YA);
          if ((lA instanceof Qt && (lA = lA.getType()), !(lA instanceof xn)))
            throw new Error(
              "Illegal service definition: services can only contain functions"
            );
          sA[UA] = lA;
        }
        return rs(sA);
      }
      default:
        throw new Error("Illegal op_code: " + T[0]);
    }
  }
  E.forEach((T, sA) => {
    if (T[0] === -22) {
      const QA = L(T);
      y[sA].fill(QA);
    }
  }),
    E.forEach((T, sA) => {
      if (T[0] !== -22) {
        const QA = L(T);
        y[sA].fill(QA);
      }
    });
  const U = u.map((T) => m(T)),
    eA = t.map((T, sA) => T.decodeValue(e, U[sA]));
  for (let T = t.length; T < U.length; T++) U[T].decodeValue(e, U[T]);
  if (e.byteLength > 0) throw new Error("decode: Left-over bytes");
  return eA;
}
const Ri = new pi(),
  Ti = new Er(),
  Ja = new yi(),
  Mi = new xi(),
  Gi = new Si(),
  Ui = new Di(),
  vi = new mi(),
  ki = new bi(),
  Li = new pn(32),
  Yi = new pn(64),
  Hi = new yt(8),
  Oi = new yt(16),
  qi = new yt(32),
  Ji = new yt(64),
  Ki = new Bt(8),
  Pi = new Bt(16),
  Wi = new Bt(32),
  ji = new Bt(64),
  Vi = new Ni();
function zi(...t) {
  return new yr(t);
}
function Zi(t) {
  return new pr(t);
}
function Xi(t) {
  return new Gt(t);
}
function $i(t) {
  return new jt(t);
}
function As(t) {
  return new xr(t);
}
function es() {
  return new Qt();
}
function ts(t, A, e = []) {
  return new xn(t, A, e);
}
function rs(t) {
  return new _i(t);
}
const Ka = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Bool: Mi,
      BoolClass: xi,
      ConstructType: ht,
      Empty: Ri,
      EmptyClass: pi,
      FixedIntClass: yt,
      FixedNatClass: Bt,
      Float32: Li,
      Float64: Yi,
      FloatClass: pn,
      Func: ts,
      FuncClass: xn,
      Int: vi,
      Int16: Oi,
      Int32: qi,
      Int64: Ji,
      Int8: Hi,
      IntClass: mi,
      Nat: ki,
      Nat16: Pi,
      Nat32: Wi,
      Nat64: ji,
      Nat8: Ki,
      NatClass: bi,
      Null: Gi,
      NullClass: Si,
      Opt: Xi,
      OptClass: Gt,
      PrimitiveType: qe,
      Principal: Vi,
      PrincipalClass: Ni,
      Rec: es,
      RecClass: Qt,
      Record: $i,
      RecordClass: jt,
      Reserved: Ti,
      ReservedClass: Er,
      Service: rs,
      ServiceClass: _i,
      Text: Ui,
      TextClass: Di,
      Tuple: zi,
      TupleClass: yr,
      Type: wr,
      Unknown: Ja,
      UnknownClass: yi,
      Variant: As,
      VariantClass: xr,
      Vec: Zi,
      VecClass: pr,
      Visitor: qa,
      decode: Fi,
      encode: en,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var ns = {},
  is = { exports: {} };
(function (t) {
  (function (A) {
    var e,
      r = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
      a = Math.ceil,
      c = Math.floor,
      E = "[BigNumber Error] ",
      u = E + "Number primitive has more than 15 significant digits: ",
      y = 1e14,
      m = 14,
      L = 9007199254740991,
      U = [
        1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13,
      ],
      eA = 1e7,
      T = 1e9;
    function sA(aA) {
      var fA,
        NA,
        PA,
        Z = (C.prototype = { constructor: C, toString: null, valueOf: null }),
        WA = new C(1),
        vA = 20,
        kA = 4,
        se = -7,
        re = 21,
        oe = -1e7,
        ge = 1e7,
        jA = !1,
        LA = 1,
        we = 0,
        yA = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: " ",
          suffix: "",
        },
        VA = "0123456789abcdefghijklmnopqrstuvwxyz",
        SA = !0;
      function C(l, d) {
        var D,
          F,
          N,
          _,
          g,
          n,
          s,
          f,
          h = this;
        if (!(h instanceof C)) return new C(l, d);
        if (d == null) {
          if (l && l._isBigNumber === !0) {
            (h.s = l.s),
              !l.c || l.e > ge
                ? (h.c = h.e = null)
                : l.e < oe
                ? (h.c = [(h.e = 0)])
                : ((h.e = l.e), (h.c = l.c.slice()));
            return;
          }
          if ((n = typeof l == "number") && l * 0 == 0) {
            if (((h.s = 1 / l < 0 ? ((l = -l), -1) : 1), l === ~~l)) {
              for (_ = 0, g = l; g >= 10; g /= 10, _++);
              _ > ge ? (h.c = h.e = null) : ((h.e = _), (h.c = [l]));
              return;
            }
            f = String(l);
          } else {
            if (!r.test((f = String(l)))) return PA(h, f, n);
            h.s = f.charCodeAt(0) == 45 ? ((f = f.slice(1)), -1) : 1;
          }
          (_ = f.indexOf(".")) > -1 && (f = f.replace(".", "")),
            (g = f.search(/e/i)) > 0
              ? (_ < 0 && (_ = g),
                (_ += +f.slice(g + 1)),
                (f = f.substring(0, g)))
              : _ < 0 && (_ = f.length);
        } else {
          if ((lA(d, 2, VA.length, "Base"), d == 10 && SA))
            return (h = new C(l)), cA(h, vA + h.e + 1, kA);
          if (((f = String(l)), (n = typeof l == "number"))) {
            if (l * 0 != 0) return PA(h, f, n, d);
            if (
              ((h.s = 1 / l < 0 ? ((f = f.slice(1)), -1) : 1),
              C.DEBUG && f.replace(/^0\.0*|\./, "").length > 15)
            )
              throw Error(u + l);
          } else h.s = f.charCodeAt(0) === 45 ? ((f = f.slice(1)), -1) : 1;
          for (D = VA.slice(0, d), _ = g = 0, s = f.length; g < s; g++)
            if (D.indexOf((F = f.charAt(g))) < 0) {
              if (F == ".") {
                if (g > _) {
                  _ = s;
                  continue;
                }
              } else if (
                !N &&
                ((f == f.toUpperCase() && (f = f.toLowerCase())) ||
                  (f == f.toLowerCase() && (f = f.toUpperCase())))
              ) {
                (N = !0), (g = -1), (_ = 0);
                continue;
              }
              return PA(h, String(l), n, d);
            }
          (n = !1),
            (f = NA(f, d, 10, h.s)),
            (_ = f.indexOf(".")) > -1
              ? (f = f.replace(".", ""))
              : (_ = f.length);
        }
        for (g = 0; f.charCodeAt(g) === 48; g++);
        for (s = f.length; f.charCodeAt(--s) === 48; );
        if ((f = f.slice(g, ++s))) {
          if (((s -= g), n && C.DEBUG && s > 15 && (l > L || l !== c(l))))
            throw Error(u + h.s * l);
          if ((_ = _ - g - 1) > ge) h.c = h.e = null;
          else if (_ < oe) h.c = [(h.e = 0)];
          else {
            if (
              ((h.e = _),
              (h.c = []),
              (g = (_ + 1) % m),
              _ < 0 && (g += m),
              g < s)
            ) {
              for (g && h.c.push(+f.slice(0, g)), s -= m; g < s; )
                h.c.push(+f.slice(g, (g += m)));
              g = m - (f = f.slice(g)).length;
            } else g -= s;
            for (; g--; f += "0");
            h.c.push(+f);
          }
        } else h.c = [(h.e = 0)];
      }
      (C.clone = sA),
        (C.ROUND_UP = 0),
        (C.ROUND_DOWN = 1),
        (C.ROUND_CEIL = 2),
        (C.ROUND_FLOOR = 3),
        (C.ROUND_HALF_UP = 4),
        (C.ROUND_HALF_DOWN = 5),
        (C.ROUND_HALF_EVEN = 6),
        (C.ROUND_HALF_CEIL = 7),
        (C.ROUND_HALF_FLOOR = 8),
        (C.EUCLID = 9),
        (C.config = C.set =
          function (l) {
            var d, D;
            if (l != null)
              if (typeof l == "object") {
                if (
                  (l.hasOwnProperty((d = "DECIMAL_PLACES")) &&
                    ((D = l[d]), lA(D, 0, T, d), (vA = D)),
                  l.hasOwnProperty((d = "ROUNDING_MODE")) &&
                    ((D = l[d]), lA(D, 0, 8, d), (kA = D)),
                  l.hasOwnProperty((d = "EXPONENTIAL_AT")) &&
                    ((D = l[d]),
                    D && D.pop
                      ? (lA(D[0], -T, 0, d),
                        lA(D[1], 0, T, d),
                        (se = D[0]),
                        (re = D[1]))
                      : (lA(D, -T, T, d), (se = -(re = D < 0 ? -D : D)))),
                  l.hasOwnProperty((d = "RANGE")))
                )
                  if (((D = l[d]), D && D.pop))
                    lA(D[0], -T, -1, d),
                      lA(D[1], 1, T, d),
                      (oe = D[0]),
                      (ge = D[1]);
                  else if ((lA(D, -T, T, d), D)) oe = -(ge = D < 0 ? -D : D);
                  else throw Error(E + d + " cannot be zero: " + D);
                if (l.hasOwnProperty((d = "CRYPTO")))
                  if (((D = l[d]), D === !!D))
                    if (D)
                      if (
                        typeof crypto < "u" &&
                        crypto &&
                        (crypto.getRandomValues || crypto.randomBytes)
                      )
                        jA = D;
                      else throw ((jA = !D), Error(E + "crypto unavailable"));
                    else jA = D;
                  else throw Error(E + d + " not true or false: " + D);
                if (
                  (l.hasOwnProperty((d = "MODULO_MODE")) &&
                    ((D = l[d]), lA(D, 0, 9, d), (LA = D)),
                  l.hasOwnProperty((d = "POW_PRECISION")) &&
                    ((D = l[d]), lA(D, 0, T, d), (we = D)),
                  l.hasOwnProperty((d = "FORMAT")))
                )
                  if (((D = l[d]), typeof D == "object")) yA = D;
                  else throw Error(E + d + " not an object: " + D);
                if (l.hasOwnProperty((d = "ALPHABET")))
                  if (
                    ((D = l[d]),
                    typeof D == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(D))
                  )
                    (SA = D.slice(0, 10) == "0123456789"), (VA = D);
                  else throw Error(E + d + " invalid: " + D);
              } else throw Error(E + "Object expected: " + l);
            return {
              DECIMAL_PLACES: vA,
              ROUNDING_MODE: kA,
              EXPONENTIAL_AT: [se, re],
              RANGE: [oe, ge],
              CRYPTO: jA,
              MODULO_MODE: LA,
              POW_PRECISION: we,
              FORMAT: yA,
              ALPHABET: VA,
            };
          }),
        (C.isBigNumber = function (l) {
          if (!l || l._isBigNumber !== !0) return !1;
          if (!C.DEBUG) return !0;
          var d,
            D,
            F = l.c,
            N = l.e,
            _ = l.s;
          A: if ({}.toString.call(F) == "[object Array]") {
            if ((_ === 1 || _ === -1) && N >= -T && N <= T && N === c(N)) {
              if (F[0] === 0) {
                if (N === 0 && F.length === 1) return !0;
                break A;
              }
              if (
                ((d = (N + 1) % m), d < 1 && (d += m), String(F[0]).length == d)
              ) {
                for (d = 0; d < F.length; d++)
                  if (((D = F[d]), D < 0 || D >= y || D !== c(D))) break A;
                if (D !== 0) return !0;
              }
            }
          } else if (
            F === null &&
            N === null &&
            (_ === null || _ === 1 || _ === -1)
          )
            return !0;
          throw Error(E + "Invalid BigNumber: " + l);
        }),
        (C.maximum = C.max =
          function () {
            return ae(arguments, -1);
          }),
        (C.minimum = C.min =
          function () {
            return ae(arguments, 1);
          }),
        (C.random = (function () {
          var l = 9007199254740992,
            d =
              (Math.random() * l) & 2097151
                ? function () {
                    return c(Math.random() * l);
                  }
                : function () {
                    return (
                      ((Math.random() * 1073741824) | 0) * 8388608 +
                      ((Math.random() * 8388608) | 0)
                    );
                  };
          return function (D) {
            var F,
              N,
              _,
              g,
              n,
              s = 0,
              f = [],
              h = new C(WA);
            if ((D == null ? (D = vA) : lA(D, 0, T), (g = a(D / m)), jA))
              if (crypto.getRandomValues) {
                for (
                  F = crypto.getRandomValues(new Uint32Array((g *= 2)));
                  s < g;

                )
                  (n = F[s] * 131072 + (F[s + 1] >>> 11)),
                    n >= 9e15
                      ? ((N = crypto.getRandomValues(new Uint32Array(2))),
                        (F[s] = N[0]),
                        (F[s + 1] = N[1]))
                      : (f.push(n % 1e14), (s += 2));
                s = g / 2;
              } else if (crypto.randomBytes) {
                for (F = crypto.randomBytes((g *= 7)); s < g; )
                  (n =
                    (F[s] & 31) * 281474976710656 +
                    F[s + 1] * 1099511627776 +
                    F[s + 2] * 4294967296 +
                    F[s + 3] * 16777216 +
                    (F[s + 4] << 16) +
                    (F[s + 5] << 8) +
                    F[s + 6]),
                    n >= 9e15
                      ? crypto.randomBytes(7).copy(F, s)
                      : (f.push(n % 1e14), (s += 7));
                s = g / 7;
              } else throw ((jA = !1), Error(E + "crypto unavailable"));
            if (!jA) for (; s < g; ) (n = d()), n < 9e15 && (f[s++] = n % 1e14);
            for (
              g = f[--s],
                D %= m,
                g && D && ((n = U[m - D]), (f[s] = c(g / n) * n));
              f[s] === 0;
              f.pop(), s--
            );
            if (s < 0) f = [(_ = 0)];
            else {
              for (_ = -1; f[0] === 0; f.splice(0, 1), _ -= m);
              for (s = 1, n = f[0]; n >= 10; n /= 10, s++);
              s < m && (_ -= m - s);
            }
            return (h.e = _), (h.c = f), h;
          };
        })()),
        (C.sum = function () {
          for (var l = 1, d = arguments, D = new C(d[0]); l < d.length; )
            D = D.plus(d[l++]);
          return D;
        }),
        (NA = (function () {
          var l = "0123456789";
          function d(D, F, N, _) {
            for (var g, n = [0], s, f = 0, h = D.length; f < h; ) {
              for (s = n.length; s--; n[s] *= F);
              for (n[0] += _.indexOf(D.charAt(f++)), g = 0; g < n.length; g++)
                n[g] > N - 1 &&
                  (n[g + 1] == null && (n[g + 1] = 0),
                  (n[g + 1] += (n[g] / N) | 0),
                  (n[g] %= N));
            }
            return n.reverse();
          }
          return function (D, F, N, _, g) {
            var n,
              s,
              f,
              h,
              x,
              M,
              W,
              iA,
              hA = D.indexOf("."),
              pA = vA,
              $ = kA;
            for (
              hA >= 0 &&
                ((h = we),
                (we = 0),
                (D = D.replace(".", "")),
                (iA = new C(F)),
                (M = iA.pow(D.length - hA)),
                (we = h),
                (iA.c = d(GA(UA(M.c), M.e, "0"), 10, N, l)),
                (iA.e = iA.c.length)),
                W = d(D, F, N, g ? ((n = VA), l) : ((n = l), VA)),
                f = h = W.length;
              W[--h] == 0;
              W.pop()
            );
            if (!W[0]) return n.charAt(0);
            if (
              (hA < 0
                ? --f
                : ((M.c = W),
                  (M.e = f),
                  (M.s = _),
                  (M = fA(M, iA, pA, $, N)),
                  (W = M.c),
                  (x = M.r),
                  (f = M.e)),
              (s = f + pA + 1),
              (hA = W[s]),
              (h = N / 2),
              (x = x || s < 0 || W[s + 1] != null),
              (x =
                $ < 4
                  ? (hA != null || x) && ($ == 0 || $ == (M.s < 0 ? 3 : 2))
                  : hA > h ||
                    (hA == h &&
                      ($ == 4 ||
                        x ||
                        ($ == 6 && W[s - 1] & 1) ||
                        $ == (M.s < 0 ? 8 : 7)))),
              s < 1 || !W[0])
            )
              D = x ? GA(n.charAt(1), -pA, n.charAt(0)) : n.charAt(0);
            else {
              if (((W.length = s), x))
                for (--N; ++W[--s] > N; )
                  (W[s] = 0), s || (++f, (W = [1].concat(W)));
              for (h = W.length; !W[--h]; );
              for (hA = 0, D = ""; hA <= h; D += n.charAt(W[hA++]));
              D = GA(D, f, n.charAt(0));
            }
            return D;
          };
        })()),
        (fA = (function () {
          function l(F, N, _) {
            var g,
              n,
              s,
              f,
              h = 0,
              x = F.length,
              M = N % eA,
              W = (N / eA) | 0;
            for (F = F.slice(); x--; )
              (s = F[x] % eA),
                (f = (F[x] / eA) | 0),
                (g = W * s + f * M),
                (n = M * s + (g % eA) * eA + h),
                (h = ((n / _) | 0) + ((g / eA) | 0) + W * f),
                (F[x] = n % _);
            return h && (F = [h].concat(F)), F;
          }
          function d(F, N, _, g) {
            var n, s;
            if (_ != g) s = _ > g ? 1 : -1;
            else
              for (n = s = 0; n < _; n++)
                if (F[n] != N[n]) {
                  s = F[n] > N[n] ? 1 : -1;
                  break;
                }
            return s;
          }
          function D(F, N, _, g) {
            for (var n = 0; _--; )
              (F[_] -= n),
                (n = F[_] < N[_] ? 1 : 0),
                (F[_] = n * g + F[_] - N[_]);
            for (; !F[0] && F.length > 1; F.splice(0, 1));
          }
          return function (F, N, _, g, n) {
            var s,
              f,
              h,
              x,
              M,
              W,
              iA,
              hA,
              pA,
              $,
              DA,
              XA,
              De,
              Qe,
              me,
              xA,
              xe,
              fe = F.s == N.s ? 1 : -1,
              zA = F.c,
              ZA = N.c;
            if (!zA || !zA[0] || !ZA || !ZA[0])
              return new C(
                !F.s || !N.s || (zA ? ZA && zA[0] == ZA[0] : !ZA)
                  ? NaN
                  : (zA && zA[0] == 0) || !ZA
                  ? fe * 0
                  : fe / 0
              );
            for (
              hA = new C(fe),
                pA = hA.c = [],
                f = F.e - N.e,
                fe = _ + f + 1,
                n ||
                  ((n = y),
                  (f = QA(F.e / m) - QA(N.e / m)),
                  (fe = (fe / m) | 0)),
                h = 0;
              ZA[h] == (zA[h] || 0);
              h++
            );
            if ((ZA[h] > (zA[h] || 0) && f--, fe < 0)) pA.push(1), (x = !0);
            else {
              for (
                Qe = zA.length,
                  xA = ZA.length,
                  h = 0,
                  fe += 2,
                  M = c(n / (ZA[0] + 1)),
                  M > 1 &&
                    ((ZA = l(ZA, M, n)),
                    (zA = l(zA, M, n)),
                    (xA = ZA.length),
                    (Qe = zA.length)),
                  De = xA,
                  $ = zA.slice(0, xA),
                  DA = $.length;
                DA < xA;
                $[DA++] = 0
              );
              (xe = ZA.slice()),
                (xe = [0].concat(xe)),
                (me = ZA[0]),
                ZA[1] >= n / 2 && me++;
              do {
                if (((M = 0), (s = d(ZA, $, xA, DA)), s < 0)) {
                  if (
                    ((XA = $[0]),
                    xA != DA && (XA = XA * n + ($[1] || 0)),
                    (M = c(XA / me)),
                    M > 1)
                  )
                    for (
                      M >= n && (M = n - 1),
                        W = l(ZA, M, n),
                        iA = W.length,
                        DA = $.length;
                      d(W, $, iA, DA) == 1;

                    )
                      M--,
                        D(W, xA < iA ? xe : ZA, iA, n),
                        (iA = W.length),
                        (s = 1);
                  else M == 0 && (s = M = 1), (W = ZA.slice()), (iA = W.length);
                  if (
                    (iA < DA && (W = [0].concat(W)),
                    D($, W, DA, n),
                    (DA = $.length),
                    s == -1)
                  )
                    for (; d(ZA, $, xA, DA) < 1; )
                      M++, D($, xA < DA ? xe : ZA, DA, n), (DA = $.length);
                } else s === 0 && (M++, ($ = [0]));
                (pA[h++] = M),
                  $[0] ? ($[DA++] = zA[De] || 0) : (($ = [zA[De]]), (DA = 1));
              } while ((De++ < Qe || $[0] != null) && fe--);
              (x = $[0] != null), pA[0] || pA.splice(0, 1);
            }
            if (n == y) {
              for (h = 1, fe = pA[0]; fe >= 10; fe /= 10, h++);
              cA(hA, _ + (hA.e = h + f * m - 1) + 1, g, x);
            } else (hA.e = f), (hA.r = +x);
            return hA;
          };
        })());
      function dA(l, d, D, F) {
        var N, _, g, n, s;
        if ((D == null ? (D = kA) : lA(D, 0, 8), !l.c)) return l.toString();
        if (((N = l.c[0]), (g = l.e), d == null))
          (s = UA(l.c)),
            (s =
              F == 1 || (F == 2 && (g <= se || g >= re))
                ? qA(s, g)
                : GA(s, g, "0"));
        else if (
          ((l = cA(new C(l), d, D)),
          (_ = l.e),
          (s = UA(l.c)),
          (n = s.length),
          F == 1 || (F == 2 && (d <= _ || _ <= se)))
        ) {
          for (; n < d; s += "0", n++);
          s = qA(s, _);
        } else if (((d -= g), (s = GA(s, _, "0")), _ + 1 > n)) {
          if (--d > 0) for (s += "."; d--; s += "0");
        } else if (((d += _ - n), d > 0))
          for (_ + 1 == n && (s += "."); d--; s += "0");
        return l.s < 0 && N ? "-" + s : s;
      }
      function ae(l, d) {
        for (var D, F, N = 1, _ = new C(l[0]); N < l.length; N++)
          (F = new C(l[N])),
            (!F.s || (D = YA(_, F)) === d || (D === 0 && _.s === d)) && (_ = F);
        return _;
      }
      function Me(l, d, D) {
        for (var F = 1, N = d.length; !d[--N]; d.pop());
        for (N = d[0]; N >= 10; N /= 10, F++);
        return (
          (D = F + D * m - 1) > ge
            ? (l.c = l.e = null)
            : D < oe
            ? (l.c = [(l.e = 0)])
            : ((l.e = D), (l.c = d)),
          l
        );
      }
      PA = (function () {
        var l = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
          d = /^([^.]+)\.$/,
          D = /^\.([^.]+)$/,
          F = /^-?(Infinity|NaN)$/,
          N = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function (_, g, n, s) {
          var f,
            h = n ? g : g.replace(N, "");
          if (F.test(h)) _.s = isNaN(h) ? null : h < 0 ? -1 : 1;
          else {
            if (
              !n &&
              ((h = h.replace(l, function (x, M, W) {
                return (
                  (f = (W = W.toLowerCase()) == "x" ? 16 : W == "b" ? 2 : 8),
                  !s || s == f ? M : x
                );
              })),
              s && ((f = s), (h = h.replace(d, "$1").replace(D, "0.$1"))),
              g != h)
            )
              return new C(h, f);
            if (C.DEBUG)
              throw Error(
                E + "Not a" + (s ? " base " + s : "") + " number: " + g
              );
            _.s = null;
          }
          _.c = _.e = null;
        };
      })();
      function cA(l, d, D, F) {
        var N,
          _,
          g,
          n,
          s,
          f,
          h,
          x = l.c,
          M = U;
        if (x) {
          A: {
            for (N = 1, n = x[0]; n >= 10; n /= 10, N++);
            if (((_ = d - N), _ < 0))
              (_ += m),
                (g = d),
                (s = x[(f = 0)]),
                (h = c((s / M[N - g - 1]) % 10));
            else if (((f = a((_ + 1) / m)), f >= x.length))
              if (F) {
                for (; x.length <= f; x.push(0));
                (s = h = 0), (N = 1), (_ %= m), (g = _ - m + 1);
              } else break A;
            else {
              for (s = n = x[f], N = 1; n >= 10; n /= 10, N++);
              (_ %= m),
                (g = _ - m + N),
                (h = g < 0 ? 0 : c((s / M[N - g - 1]) % 10));
            }
            if (
              ((F =
                F ||
                d < 0 ||
                x[f + 1] != null ||
                (g < 0 ? s : s % M[N - g - 1])),
              (F =
                D < 4
                  ? (h || F) && (D == 0 || D == (l.s < 0 ? 3 : 2))
                  : h > 5 ||
                    (h == 5 &&
                      (D == 4 ||
                        F ||
                        (D == 6 &&
                          (_ > 0 ? (g > 0 ? s / M[N - g] : 0) : x[f - 1]) % 10 &
                            1) ||
                        D == (l.s < 0 ? 8 : 7)))),
              d < 1 || !x[0])
            )
              return (
                (x.length = 0),
                F
                  ? ((d -= l.e + 1),
                    (x[0] = M[(m - (d % m)) % m]),
                    (l.e = -d || 0))
                  : (x[0] = l.e = 0),
                l
              );
            if (
              (_ == 0
                ? ((x.length = f), (n = 1), f--)
                : ((x.length = f + 1),
                  (n = M[m - _]),
                  (x[f] = g > 0 ? c((s / M[N - g]) % M[g]) * n : 0)),
              F)
            )
              for (;;)
                if (f == 0) {
                  for (_ = 1, g = x[0]; g >= 10; g /= 10, _++);
                  for (g = x[0] += n, n = 1; g >= 10; g /= 10, n++);
                  _ != n && (l.e++, x[0] == y && (x[0] = 1));
                  break;
                } else {
                  if (((x[f] += n), x[f] != y)) break;
                  (x[f--] = 0), (n = 1);
                }
            for (_ = x.length; x[--_] === 0; x.pop());
          }
          l.e > ge ? (l.c = l.e = null) : l.e < oe && (l.c = [(l.e = 0)]);
        }
        return l;
      }
      function uA(l) {
        var d,
          D = l.e;
        return D === null
          ? l.toString()
          : ((d = UA(l.c)),
            (d = D <= se || D >= re ? qA(d, D) : GA(d, D, "0")),
            l.s < 0 ? "-" + d : d);
      }
      return (
        (Z.absoluteValue = Z.abs =
          function () {
            var l = new C(this);
            return l.s < 0 && (l.s = 1), l;
          }),
        (Z.comparedTo = function (l, d) {
          return YA(this, new C(l, d));
        }),
        (Z.decimalPlaces = Z.dp =
          function (l, d) {
            var D,
              F,
              N,
              _ = this;
            if (l != null)
              return (
                lA(l, 0, T),
                d == null ? (d = kA) : lA(d, 0, 8),
                cA(new C(_), l + _.e + 1, d)
              );
            if (!(D = _.c)) return null;
            if (((F = ((N = D.length - 1) - QA(this.e / m)) * m), (N = D[N])))
              for (; N % 10 == 0; N /= 10, F--);
            return F < 0 && (F = 0), F;
          }),
        (Z.dividedBy = Z.div =
          function (l, d) {
            return fA(this, new C(l, d), vA, kA);
          }),
        (Z.dividedToIntegerBy = Z.idiv =
          function (l, d) {
            return fA(this, new C(l, d), 0, 1);
          }),
        (Z.exponentiatedBy = Z.pow =
          function (l, d) {
            var D,
              F,
              N,
              _,
              g,
              n,
              s,
              f,
              h,
              x = this;
            if (((l = new C(l)), l.c && !l.isInteger()))
              throw Error(E + "Exponent not an integer: " + uA(l));
            if (
              (d != null && (d = new C(d)),
              (n = l.e > 14),
              !x.c ||
                !x.c[0] ||
                (x.c[0] == 1 && !x.e && x.c.length == 1) ||
                !l.c ||
                !l.c[0])
            )
              return (
                (h = new C(Math.pow(+uA(x), n ? l.s * (2 - MA(l)) : +uA(l)))),
                d ? h.mod(d) : h
              );
            if (((s = l.s < 0), d)) {
              if (d.c ? !d.c[0] : !d.s) return new C(NaN);
              (F = !s && x.isInteger() && d.isInteger()), F && (x = x.mod(d));
            } else {
              if (
                l.e > 9 &&
                (x.e > 0 ||
                  x.e < -1 ||
                  (x.e == 0
                    ? x.c[0] > 1 || (n && x.c[1] >= 24e7)
                    : x.c[0] < 8e13 || (n && x.c[0] <= 9999975e7)))
              )
                return (
                  (_ = x.s < 0 && MA(l) ? -0 : 0),
                  x.e > -1 && (_ = 1 / _),
                  new C(s ? 1 / _ : _)
                );
              we && (_ = a(we / m + 2));
            }
            for (
              n
                ? ((D = new C(0.5)), s && (l.s = 1), (f = MA(l)))
                : ((N = Math.abs(+uA(l))), (f = N % 2)),
                h = new C(WA);
              ;

            ) {
              if (f) {
                if (((h = h.times(x)), !h.c)) break;
                _ ? h.c.length > _ && (h.c.length = _) : F && (h = h.mod(d));
              }
              if (N) {
                if (((N = c(N / 2)), N === 0)) break;
                f = N % 2;
              } else if (((l = l.times(D)), cA(l, l.e + 1, 1), l.e > 14))
                f = MA(l);
              else {
                if (((N = +uA(l)), N === 0)) break;
                f = N % 2;
              }
              (x = x.times(x)),
                _
                  ? x.c && x.c.length > _ && (x.c.length = _)
                  : F && (x = x.mod(d));
            }
            return F
              ? h
              : (s && (h = WA.div(h)), d ? h.mod(d) : _ ? cA(h, we, kA, g) : h);
          }),
        (Z.integerValue = function (l) {
          var d = new C(this);
          return l == null ? (l = kA) : lA(l, 0, 8), cA(d, d.e + 1, l);
        }),
        (Z.isEqualTo = Z.eq =
          function (l, d) {
            return YA(this, new C(l, d)) === 0;
          }),
        (Z.isFinite = function () {
          return !!this.c;
        }),
        (Z.isGreaterThan = Z.gt =
          function (l, d) {
            return YA(this, new C(l, d)) > 0;
          }),
        (Z.isGreaterThanOrEqualTo = Z.gte =
          function (l, d) {
            return (d = YA(this, new C(l, d))) === 1 || d === 0;
          }),
        (Z.isInteger = function () {
          return !!this.c && QA(this.e / m) > this.c.length - 2;
        }),
        (Z.isLessThan = Z.lt =
          function (l, d) {
            return YA(this, new C(l, d)) < 0;
          }),
        (Z.isLessThanOrEqualTo = Z.lte =
          function (l, d) {
            return (d = YA(this, new C(l, d))) === -1 || d === 0;
          }),
        (Z.isNaN = function () {
          return !this.s;
        }),
        (Z.isNegative = function () {
          return this.s < 0;
        }),
        (Z.isPositive = function () {
          return this.s > 0;
        }),
        (Z.isZero = function () {
          return !!this.c && this.c[0] == 0;
        }),
        (Z.minus = function (l, d) {
          var D,
            F,
            N,
            _,
            g = this,
            n = g.s;
          if (((l = new C(l, d)), (d = l.s), !n || !d)) return new C(NaN);
          if (n != d) return (l.s = -d), g.plus(l);
          var s = g.e / m,
            f = l.e / m,
            h = g.c,
            x = l.c;
          if (!s || !f) {
            if (!h || !x) return h ? ((l.s = -d), l) : new C(x ? g : NaN);
            if (!h[0] || !x[0])
              return x[0]
                ? ((l.s = -d), l)
                : new C(h[0] ? g : kA == 3 ? -0 : 0);
          }
          if (((s = QA(s)), (f = QA(f)), (h = h.slice()), (n = s - f))) {
            for (
              (_ = n < 0) ? ((n = -n), (N = h)) : ((f = s), (N = x)),
                N.reverse(),
                d = n;
              d--;
              N.push(0)
            );
            N.reverse();
          } else
            for (
              F = (_ = (n = h.length) < (d = x.length)) ? n : d, n = d = 0;
              d < F;
              d++
            )
              if (h[d] != x[d]) {
                _ = h[d] < x[d];
                break;
              }
          if (
            (_ && ((N = h), (h = x), (x = N), (l.s = -l.s)),
            (d = (F = x.length) - (D = h.length)),
            d > 0)
          )
            for (; d--; h[D++] = 0);
          for (d = y - 1; F > n; ) {
            if (h[--F] < x[F]) {
              for (D = F; D && !h[--D]; h[D] = d);
              --h[D], (h[F] += y);
            }
            h[F] -= x[F];
          }
          for (; h[0] == 0; h.splice(0, 1), --f);
          return h[0]
            ? Me(l, h, f)
            : ((l.s = kA == 3 ? -1 : 1), (l.c = [(l.e = 0)]), l);
        }),
        (Z.modulo = Z.mod =
          function (l, d) {
            var D,
              F,
              N = this;
            return (
              (l = new C(l, d)),
              !N.c || !l.s || (l.c && !l.c[0])
                ? new C(NaN)
                : !l.c || (N.c && !N.c[0])
                ? new C(N)
                : (LA == 9
                    ? ((F = l.s),
                      (l.s = 1),
                      (D = fA(N, l, 0, 3)),
                      (l.s = F),
                      (D.s *= F))
                    : (D = fA(N, l, 0, LA)),
                  (l = N.minus(D.times(l))),
                  !l.c[0] && LA == 1 && (l.s = N.s),
                  l)
            );
          }),
        (Z.multipliedBy = Z.times =
          function (l, d) {
            var D,
              F,
              N,
              _,
              g,
              n,
              s,
              f,
              h,
              x,
              M,
              W,
              iA,
              hA,
              pA,
              $ = this,
              DA = $.c,
              XA = (l = new C(l, d)).c;
            if (!DA || !XA || !DA[0] || !XA[0])
              return (
                !$.s || !l.s || (DA && !DA[0] && !XA) || (XA && !XA[0] && !DA)
                  ? (l.c = l.e = l.s = null)
                  : ((l.s *= $.s),
                    !DA || !XA ? (l.c = l.e = null) : ((l.c = [0]), (l.e = 0))),
                l
              );
            for (
              F = QA($.e / m) + QA(l.e / m),
                l.s *= $.s,
                s = DA.length,
                x = XA.length,
                s < x &&
                  ((iA = DA), (DA = XA), (XA = iA), (N = s), (s = x), (x = N)),
                N = s + x,
                iA = [];
              N--;
              iA.push(0)
            );
            for (hA = y, pA = eA, N = x; --N >= 0; ) {
              for (
                D = 0, M = XA[N] % pA, W = (XA[N] / pA) | 0, g = s, _ = N + g;
                _ > N;

              )
                (f = DA[--g] % pA),
                  (h = (DA[g] / pA) | 0),
                  (n = W * f + h * M),
                  (f = M * f + (n % pA) * pA + iA[_] + D),
                  (D = ((f / hA) | 0) + ((n / pA) | 0) + W * h),
                  (iA[_--] = f % hA);
              iA[_] = D;
            }
            return D ? ++F : iA.splice(0, 1), Me(l, iA, F);
          }),
        (Z.negated = function () {
          var l = new C(this);
          return (l.s = -l.s || null), l;
        }),
        (Z.plus = function (l, d) {
          var D,
            F = this,
            N = F.s;
          if (((l = new C(l, d)), (d = l.s), !N || !d)) return new C(NaN);
          if (N != d) return (l.s = -d), F.minus(l);
          var _ = F.e / m,
            g = l.e / m,
            n = F.c,
            s = l.c;
          if (!_ || !g) {
            if (!n || !s) return new C(N / 0);
            if (!n[0] || !s[0]) return s[0] ? l : new C(n[0] ? F : N * 0);
          }
          if (((_ = QA(_)), (g = QA(g)), (n = n.slice()), (N = _ - g))) {
            for (
              N > 0 ? ((g = _), (D = s)) : ((N = -N), (D = n)), D.reverse();
              N--;
              D.push(0)
            );
            D.reverse();
          }
          for (
            N = n.length,
              d = s.length,
              N - d < 0 && ((D = s), (s = n), (n = D), (d = N)),
              N = 0;
            d;

          )
            (N = ((n[--d] = n[d] + s[d] + N) / y) | 0),
              (n[d] = y === n[d] ? 0 : n[d] % y);
          return N && ((n = [N].concat(n)), ++g), Me(l, n, g);
        }),
        (Z.precision = Z.sd =
          function (l, d) {
            var D,
              F,
              N,
              _ = this;
            if (l != null && l !== !!l)
              return (
                lA(l, 1, T),
                d == null ? (d = kA) : lA(d, 0, 8),
                cA(new C(_), l, d)
              );
            if (!(D = _.c)) return null;
            if (((N = D.length - 1), (F = N * m + 1), (N = D[N]))) {
              for (; N % 10 == 0; N /= 10, F--);
              for (N = D[0]; N >= 10; N /= 10, F++);
            }
            return l && _.e + 1 > F && (F = _.e + 1), F;
          }),
        (Z.shiftedBy = function (l) {
          return lA(l, -L, L), this.times("1e" + l);
        }),
        (Z.squareRoot = Z.sqrt =
          function () {
            var l,
              d,
              D,
              F,
              N,
              _ = this,
              g = _.c,
              n = _.s,
              s = _.e,
              f = vA + 4,
              h = new C("0.5");
            if (n !== 1 || !g || !g[0])
              return new C(!n || (n < 0 && (!g || g[0])) ? NaN : g ? _ : 1 / 0);
            if (
              ((n = Math.sqrt(+uA(_))),
              n == 0 || n == 1 / 0
                ? ((d = UA(g)),
                  (d.length + s) % 2 == 0 && (d += "0"),
                  (n = Math.sqrt(+d)),
                  (s = QA((s + 1) / 2) - (s < 0 || s % 2)),
                  n == 1 / 0
                    ? (d = "5e" + s)
                    : ((d = n.toExponential()),
                      (d = d.slice(0, d.indexOf("e") + 1) + s)),
                  (D = new C(d)))
                : (D = new C(n + "")),
              D.c[0])
            ) {
              for (s = D.e, n = s + f, n < 3 && (n = 0); ; )
                if (
                  ((N = D),
                  (D = h.times(N.plus(fA(_, N, f, 1)))),
                  UA(N.c).slice(0, n) === (d = UA(D.c)).slice(0, n))
                )
                  if (
                    (D.e < s && --n,
                    (d = d.slice(n - 3, n + 1)),
                    d == "9999" || (!F && d == "4999"))
                  ) {
                    if (!F && (cA(N, N.e + vA + 2, 0), N.times(N).eq(_))) {
                      D = N;
                      break;
                    }
                    (f += 4), (n += 4), (F = 1);
                  } else {
                    (!+d || (!+d.slice(1) && d.charAt(0) == "5")) &&
                      (cA(D, D.e + vA + 2, 1), (l = !D.times(D).eq(_)));
                    break;
                  }
            }
            return cA(D, D.e + vA + 1, kA, l);
          }),
        (Z.toExponential = function (l, d) {
          return l != null && (lA(l, 0, T), l++), dA(this, l, d, 1);
        }),
        (Z.toFixed = function (l, d) {
          return (
            l != null && (lA(l, 0, T), (l = l + this.e + 1)), dA(this, l, d)
          );
        }),
        (Z.toFormat = function (l, d, D) {
          var F,
            N = this;
          if (D == null)
            l != null && d && typeof d == "object"
              ? ((D = d), (d = null))
              : l && typeof l == "object"
              ? ((D = l), (l = d = null))
              : (D = yA);
          else if (typeof D != "object")
            throw Error(E + "Argument not an object: " + D);
          if (((F = N.toFixed(l, d)), N.c)) {
            var _,
              g = F.split("."),
              n = +D.groupSize,
              s = +D.secondaryGroupSize,
              f = D.groupSeparator || "",
              h = g[0],
              x = g[1],
              M = N.s < 0,
              W = M ? h.slice(1) : h,
              iA = W.length;
            if (
              (s && ((_ = n), (n = s), (s = _), (iA -= _)), n > 0 && iA > 0)
            ) {
              for (_ = iA % n || n, h = W.substr(0, _); _ < iA; _ += n)
                h += f + W.substr(_, n);
              s > 0 && (h += f + W.slice(_)), M && (h = "-" + h);
            }
            F = x
              ? h +
                (D.decimalSeparator || "") +
                ((s = +D.fractionGroupSize)
                  ? x.replace(
                      new RegExp("\\d{" + s + "}\\B", "g"),
                      "$&" + (D.fractionGroupSeparator || "")
                    )
                  : x)
              : h;
          }
          return (D.prefix || "") + F + (D.suffix || "");
        }),
        (Z.toFraction = function (l) {
          var d,
            D,
            F,
            N,
            _,
            g,
            n,
            s,
            f,
            h,
            x,
            M,
            W = this,
            iA = W.c;
          if (
            l != null &&
            ((n = new C(l)), (!n.isInteger() && (n.c || n.s !== 1)) || n.lt(WA))
          )
            throw Error(
              E +
                "Argument " +
                (n.isInteger() ? "out of range: " : "not an integer: ") +
                uA(n)
            );
          if (!iA) return new C(W);
          for (
            d = new C(WA),
              f = D = new C(WA),
              F = s = new C(WA),
              M = UA(iA),
              _ = d.e = M.length - W.e - 1,
              d.c[0] = U[(g = _ % m) < 0 ? m + g : g],
              l = !l || n.comparedTo(d) > 0 ? (_ > 0 ? d : f) : n,
              g = ge,
              ge = 1 / 0,
              n = new C(M),
              s.c[0] = 0;
            (h = fA(n, d, 0, 1)),
              (N = D.plus(h.times(F))),
              N.comparedTo(l) != 1;

          )
            (D = F),
              (F = N),
              (f = s.plus(h.times((N = f)))),
              (s = N),
              (d = n.minus(h.times((N = d)))),
              (n = N);
          return (
            (N = fA(l.minus(D), F, 0, 1)),
            (s = s.plus(N.times(f))),
            (D = D.plus(N.times(F))),
            (s.s = f.s = W.s),
            (_ = _ * 2),
            (x =
              fA(f, F, _, kA)
                .minus(W)
                .abs()
                .comparedTo(fA(s, D, _, kA).minus(W).abs()) < 1
                ? [f, F]
                : [s, D]),
            (ge = g),
            x
          );
        }),
        (Z.toNumber = function () {
          return +uA(this);
        }),
        (Z.toPrecision = function (l, d) {
          return l != null && lA(l, 1, T), dA(this, l, d, 2);
        }),
        (Z.toString = function (l) {
          var d,
            D = this,
            F = D.s,
            N = D.e;
          return (
            N === null
              ? F
                ? ((d = "Infinity"), F < 0 && (d = "-" + d))
                : (d = "NaN")
              : (l == null
                  ? (d =
                      N <= se || N >= re ? qA(UA(D.c), N) : GA(UA(D.c), N, "0"))
                  : l === 10 && SA
                  ? ((D = cA(new C(D), vA + N + 1, kA)),
                    (d = GA(UA(D.c), D.e, "0")))
                  : (lA(l, 2, VA.length, "Base"),
                    (d = NA(GA(UA(D.c), N, "0"), 10, l, F, !0))),
                F < 0 && D.c[0] && (d = "-" + d)),
            d
          );
        }),
        (Z.valueOf = Z.toJSON =
          function () {
            return uA(this);
          }),
        (Z._isBigNumber = !0),
        aA != null && C.set(aA),
        C
      );
    }
    function QA(aA) {
      var fA = aA | 0;
      return aA > 0 || aA === fA ? fA : fA - 1;
    }
    function UA(aA) {
      for (var fA, NA, PA = 1, Z = aA.length, WA = aA[0] + ""; PA < Z; ) {
        for (fA = aA[PA++] + "", NA = m - fA.length; NA--; fA = "0" + fA);
        WA += fA;
      }
      for (Z = WA.length; WA.charCodeAt(--Z) === 48; );
      return WA.slice(0, Z + 1 || 1);
    }
    function YA(aA, fA) {
      var NA,
        PA,
        Z = aA.c,
        WA = fA.c,
        vA = aA.s,
        kA = fA.s,
        se = aA.e,
        re = fA.e;
      if (!vA || !kA) return null;
      if (((NA = Z && !Z[0]), (PA = WA && !WA[0]), NA || PA))
        return NA ? (PA ? 0 : -kA) : vA;
      if (vA != kA) return vA;
      if (((NA = vA < 0), (PA = se == re), !Z || !WA))
        return PA ? 0 : !Z ^ NA ? 1 : -1;
      if (!PA) return (se > re) ^ NA ? 1 : -1;
      for (
        kA = (se = Z.length) < (re = WA.length) ? se : re, vA = 0;
        vA < kA;
        vA++
      )
        if (Z[vA] != WA[vA]) return (Z[vA] > WA[vA]) ^ NA ? 1 : -1;
      return se == re ? 0 : (se > re) ^ NA ? 1 : -1;
    }
    function lA(aA, fA, NA, PA) {
      if (aA < fA || aA > NA || aA !== c(aA))
        throw Error(
          E +
            (PA || "Argument") +
            (typeof aA == "number"
              ? aA < fA || aA > NA
                ? " out of range: "
                : " not an integer: "
              : " not a primitive number: ") +
            String(aA)
        );
    }
    function MA(aA) {
      var fA = aA.c.length - 1;
      return QA(aA.e / m) == fA && aA.c[fA] % 2 != 0;
    }
    function qA(aA, fA) {
      return (
        (aA.length > 1 ? aA.charAt(0) + "." + aA.slice(1) : aA) +
        (fA < 0 ? "e" : "e+") +
        fA
      );
    }
    function GA(aA, fA, NA) {
      var PA, Z;
      if (fA < 0) {
        for (Z = NA + "."; ++fA; Z += NA);
        aA = Z + aA;
      } else if (((PA = aA.length), ++fA > PA)) {
        for (Z = NA, fA -= PA; --fA; Z += NA);
        aA += Z;
      } else fA < PA && (aA = aA.slice(0, fA) + "." + aA.slice(fA));
      return aA;
    }
    (e = sA()),
      (e.default = e.BigNumber = e),
      t.exports
        ? (t.exports = e)
        : (A || (A = typeof self < "u" && self ? self : window),
          (A.BigNumber = e));
  })(Tt);
})(is);
var Sr = is.exports,
  Pa = function (A, e, r) {
    var a = new A.Uint8Array(r),
      c = e.pushInt,
      E = e.pushInt32,
      u = e.pushInt32Neg,
      y = e.pushInt64,
      m = e.pushInt64Neg,
      L = e.pushFloat,
      U = e.pushFloatSingle,
      eA = e.pushFloatDouble,
      T = e.pushTrue,
      sA = e.pushFalse,
      QA = e.pushUndefined,
      UA = e.pushNull,
      YA = e.pushInfinity,
      lA = e.pushInfinityNeg,
      MA = e.pushNaN,
      qA = e.pushNaNNeg,
      GA = e.pushArrayStart,
      aA = e.pushArrayStartFixed,
      fA = e.pushArrayStartFixed32,
      NA = e.pushArrayStartFixed64,
      PA = e.pushObjectStart,
      Z = e.pushObjectStartFixed,
      WA = e.pushObjectStartFixed32,
      vA = e.pushObjectStartFixed64,
      kA = e.pushByteString,
      se = e.pushByteStringStart,
      re = e.pushUtf8String,
      oe = e.pushUtf8StringStart,
      ge = e.pushSimpleUnassigned,
      jA = e.pushTagStart,
      LA = e.pushTagStart4,
      we = e.pushTagStart8,
      yA = e.pushTagUnassigned,
      VA = e.pushBreak,
      SA = A.Math.pow,
      C = 0,
      dA = 0,
      ae = 0;
    function Me(w) {
      for (
        w = w | 0, C = 0, dA = w;
        (C | 0) < (dA | 0) &&
        ((ae = EA[a[C] & 255](a[C] | 0) | 0), !((ae | 0) > 0));

      );
      return ae | 0;
    }
    function cA(w) {
      return (w = w | 0), (((C | 0) + (w | 0)) | 0) < (dA | 0) ? 0 : 1;
    }
    function uA(w) {
      return (w = w | 0), (a[w | 0] << 8) | a[(w + 1) | 0] | 0;
    }
    function l(w) {
      return (
        (w = w | 0),
        (a[w | 0] << 24) |
          (a[(w + 1) | 0] << 16) |
          (a[(w + 2) | 0] << 8) |
          a[(w + 3) | 0] |
          0
      );
    }
    function d(w) {
      return (w = w | 0), c(w | 0), (C = (C + 1) | 0), 0;
    }
    function D(w) {
      return (
        (w = w | 0),
        cA(1) | 0 ? 1 : (c(a[(C + 1) | 0] | 0), (C = (C + 2) | 0), 0)
      );
    }
    function F(w) {
      return (
        (w = w | 0),
        cA(2) | 0 ? 1 : (c(uA((C + 1) | 0) | 0), (C = (C + 3) | 0), 0)
      );
    }
    function N(w) {
      return (
        (w = w | 0),
        cA(4) | 0
          ? 1
          : (E(uA((C + 1) | 0) | 0, uA((C + 3) | 0) | 0), (C = (C + 5) | 0), 0)
      );
    }
    function _(w) {
      return (
        (w = w | 0),
        cA(8) | 0
          ? 1
          : (y(
              uA((C + 1) | 0) | 0,
              uA((C + 3) | 0) | 0,
              uA((C + 5) | 0) | 0,
              uA((C + 7) | 0) | 0
            ),
            (C = (C + 9) | 0),
            0)
      );
    }
    function g(w) {
      return (w = w | 0), c((-1 - ((w - 32) | 0)) | 0), (C = (C + 1) | 0), 0;
    }
    function n(w) {
      return (
        (w = w | 0),
        cA(1) | 0
          ? 1
          : (c((-1 - (a[(C + 1) | 0] | 0)) | 0), (C = (C + 2) | 0), 0)
      );
    }
    function s(w) {
      w = w | 0;
      var AA = 0;
      return cA(2) | 0
        ? 1
        : ((AA = uA((C + 1) | 0) | 0),
          c((-1 - (AA | 0)) | 0),
          (C = (C + 3) | 0),
          0);
    }
    function f(w) {
      return (
        (w = w | 0),
        cA(4) | 0
          ? 1
          : (u(uA((C + 1) | 0) | 0, uA((C + 3) | 0) | 0), (C = (C + 5) | 0), 0)
      );
    }
    function h(w) {
      return (
        (w = w | 0),
        cA(8) | 0
          ? 1
          : (m(
              uA((C + 1) | 0) | 0,
              uA((C + 3) | 0) | 0,
              uA((C + 5) | 0) | 0,
              uA((C + 7) | 0) | 0
            ),
            (C = (C + 9) | 0),
            0)
      );
    }
    function x(w) {
      w = w | 0;
      var AA = 0,
        j = 0,
        K = 0;
      return (
        (K = (w - 64) | 0),
        cA(K | 0) | 0
          ? 1
          : ((AA = (C + 1) | 0),
            (j = (((C + 1) | 0) + (K | 0)) | 0),
            kA(AA | 0, j | 0),
            (C = j | 0),
            0)
      );
    }
    function M(w) {
      w = w | 0;
      var AA = 0,
        j = 0,
        K = 0;
      return cA(1) | 0 ||
        ((K = a[(C + 1) | 0] | 0),
        (AA = (C + 2) | 0),
        (j = (((C + 2) | 0) + (K | 0)) | 0),
        cA((K + 1) | 0) | 0)
        ? 1
        : (kA(AA | 0, j | 0), (C = j | 0), 0);
    }
    function W(w) {
      w = w | 0;
      var AA = 0,
        j = 0,
        K = 0;
      return cA(2) | 0 ||
        ((K = uA((C + 1) | 0) | 0),
        (AA = (C + 3) | 0),
        (j = (((C + 3) | 0) + (K | 0)) | 0),
        cA((K + 2) | 0) | 0)
        ? 1
        : (kA(AA | 0, j | 0), (C = j | 0), 0);
    }
    function iA(w) {
      w = w | 0;
      var AA = 0,
        j = 0,
        K = 0;
      return cA(4) | 0 ||
        ((K = l((C + 1) | 0) | 0),
        (AA = (C + 5) | 0),
        (j = (((C + 5) | 0) + (K | 0)) | 0),
        cA((K + 4) | 0) | 0)
        ? 1
        : (kA(AA | 0, j | 0), (C = j | 0), 0);
    }
    function hA(w) {
      return (w = w | 0), 1;
    }
    function pA(w) {
      return (w = w | 0), se(), (C = (C + 1) | 0), 0;
    }
    function $(w) {
      w = w | 0;
      var AA = 0,
        j = 0,
        K = 0;
      return (
        (K = (w - 96) | 0),
        cA(K | 0) | 0
          ? 1
          : ((AA = (C + 1) | 0),
            (j = (((C + 1) | 0) + (K | 0)) | 0),
            re(AA | 0, j | 0),
            (C = j | 0),
            0)
      );
    }
    function DA(w) {
      w = w | 0;
      var AA = 0,
        j = 0,
        K = 0;
      return cA(1) | 0 ||
        ((K = a[(C + 1) | 0] | 0),
        (AA = (C + 2) | 0),
        (j = (((C + 2) | 0) + (K | 0)) | 0),
        cA((K + 1) | 0) | 0)
        ? 1
        : (re(AA | 0, j | 0), (C = j | 0), 0);
    }
    function XA(w) {
      w = w | 0;
      var AA = 0,
        j = 0,
        K = 0;
      return cA(2) | 0 ||
        ((K = uA((C + 1) | 0) | 0),
        (AA = (C + 3) | 0),
        (j = (((C + 3) | 0) + (K | 0)) | 0),
        cA((K + 2) | 0) | 0)
        ? 1
        : (re(AA | 0, j | 0), (C = j | 0), 0);
    }
    function De(w) {
      w = w | 0;
      var AA = 0,
        j = 0,
        K = 0;
      return cA(4) | 0 ||
        ((K = l((C + 1) | 0) | 0),
        (AA = (C + 5) | 0),
        (j = (((C + 5) | 0) + (K | 0)) | 0),
        cA((K + 4) | 0) | 0)
        ? 1
        : (re(AA | 0, j | 0), (C = j | 0), 0);
    }
    function Qe(w) {
      return (w = w | 0), 1;
    }
    function me(w) {
      return (w = w | 0), oe(), (C = (C + 1) | 0), 0;
    }
    function xA(w) {
      return (w = w | 0), aA((w - 128) | 0), (C = (C + 1) | 0), 0;
    }
    function xe(w) {
      return (
        (w = w | 0),
        cA(1) | 0 ? 1 : (aA(a[(C + 1) | 0] | 0), (C = (C + 2) | 0), 0)
      );
    }
    function fe(w) {
      return (
        (w = w | 0),
        cA(2) | 0 ? 1 : (aA(uA((C + 1) | 0) | 0), (C = (C + 3) | 0), 0)
      );
    }
    function zA(w) {
      return (
        (w = w | 0),
        cA(4) | 0
          ? 1
          : (fA(uA((C + 1) | 0) | 0, uA((C + 3) | 0) | 0), (C = (C + 5) | 0), 0)
      );
    }
    function ZA(w) {
      return (
        (w = w | 0),
        cA(8) | 0
          ? 1
          : (NA(
              uA((C + 1) | 0) | 0,
              uA((C + 3) | 0) | 0,
              uA((C + 5) | 0) | 0,
              uA((C + 7) | 0) | 0
            ),
            (C = (C + 9) | 0),
            0)
      );
    }
    function $e(w) {
      return (w = w | 0), GA(), (C = (C + 1) | 0), 0;
    }
    function wA(w) {
      w = w | 0;
      var AA = 0;
      return (
        (AA = (w - 160) | 0),
        cA(AA | 0) | 0 ? 1 : (Z(AA | 0), (C = (C + 1) | 0), 0)
      );
    }
    function ke(w) {
      return (
        (w = w | 0),
        cA(1) | 0 ? 1 : (Z(a[(C + 1) | 0] | 0), (C = (C + 2) | 0), 0)
      );
    }
    function xt(w) {
      return (
        (w = w | 0),
        cA(2) | 0 ? 1 : (Z(uA((C + 1) | 0) | 0), (C = (C + 3) | 0), 0)
      );
    }
    function St(w) {
      return (
        (w = w | 0),
        cA(4) | 0
          ? 1
          : (WA(uA((C + 1) | 0) | 0, uA((C + 3) | 0) | 0), (C = (C + 5) | 0), 0)
      );
    }
    function lt(w) {
      return (
        (w = w | 0),
        cA(8) | 0
          ? 1
          : (vA(
              uA((C + 1) | 0) | 0,
              uA((C + 3) | 0) | 0,
              uA((C + 5) | 0) | 0,
              uA((C + 7) | 0) | 0
            ),
            (C = (C + 9) | 0),
            0)
      );
    }
    function Ge(w) {
      return (w = w | 0), PA(), (C = (C + 1) | 0), 0;
    }
    function Se(w) {
      return (w = w | 0), jA((w - 192) | 0 | 0), (C = (C + 1) | 0), 0;
    }
    function At(w) {
      return (w = w | 0), jA(w | 0), (C = (C + 1) | 0), 0;
    }
    function et(w) {
      return (w = w | 0), jA(w | 0), (C = (C + 1) | 0), 0;
    }
    function at(w) {
      return (w = w | 0), jA(w | 0), (C = (C + 1) | 0), 0;
    }
    function Lt(w) {
      return (w = w | 0), jA(w | 0), (C = (C + 1) | 0), 0;
    }
    function ee(w) {
      return (w = w | 0), jA((w - 192) | 0 | 0), (C = (C + 1) | 0), 0;
    }
    function pe(w) {
      return (w = w | 0), jA(w | 0), (C = (C + 1) | 0), 0;
    }
    function Dt(w) {
      return (w = w | 0), jA(w | 0), (C = (C + 1) | 0), 0;
    }
    function o(w) {
      return (w = w | 0), jA(w | 0), (C = (C + 1) | 0), 0;
    }
    function B(w) {
      return (
        (w = w | 0),
        cA(1) | 0 ? 1 : (jA(a[(C + 1) | 0] | 0), (C = (C + 2) | 0), 0)
      );
    }
    function I(w) {
      return (
        (w = w | 0),
        cA(2) | 0 ? 1 : (jA(uA((C + 1) | 0) | 0), (C = (C + 3) | 0), 0)
      );
    }
    function i(w) {
      return (
        (w = w | 0),
        cA(4) | 0
          ? 1
          : (LA(uA((C + 1) | 0) | 0, uA((C + 3) | 0) | 0), (C = (C + 5) | 0), 0)
      );
    }
    function Q(w) {
      return (
        (w = w | 0),
        cA(8) | 0
          ? 1
          : (we(
              uA((C + 1) | 0) | 0,
              uA((C + 3) | 0) | 0,
              uA((C + 5) | 0) | 0,
              uA((C + 7) | 0) | 0
            ),
            (C = (C + 9) | 0),
            0)
      );
    }
    function b(w) {
      return (w = w | 0), ge(((w | 0) - 224) | 0), (C = (C + 1) | 0), 0;
    }
    function R(w) {
      return (w = w | 0), sA(), (C = (C + 1) | 0), 0;
    }
    function O(w) {
      return (w = w | 0), T(), (C = (C + 1) | 0), 0;
    }
    function z(w) {
      return (w = w | 0), UA(), (C = (C + 1) | 0), 0;
    }
    function H(w) {
      return (w = w | 0), QA(), (C = (C + 1) | 0), 0;
    }
    function p(w) {
      return (
        (w = w | 0),
        cA(1) | 0 ? 1 : (ge(a[(C + 1) | 0] | 0), (C = (C + 2) | 0), 0)
      );
    }
    function Y(w) {
      w = w | 0;
      var AA = 0,
        j = 0,
        K = 1,
        oA = 0,
        rA = 0,
        gA = 0;
      return cA(2) | 0
        ? 1
        : ((AA = a[(C + 1) | 0] | 0),
          (j = a[(C + 2) | 0] | 0),
          (AA | 0) & 128 && (K = -1),
          (oA = +(((AA | 0) & 124) >> 2)),
          (rA = +((((AA | 0) & 3) << 8) | j)),
          +oA == 0
            ? L(+(+K * 5960464477539063e-23 * +rA))
            : +oA == 31
            ? +K == 1
              ? +rA > 0
                ? MA()
                : YA()
              : +rA > 0
              ? qA()
              : lA()
            : L(+(+K * SA(2, +(+oA - 25)) * +(1024 + rA))),
          (C = (C + 3) | 0),
          0);
    }
    function k(w) {
      return (
        (w = w | 0),
        cA(4) | 0
          ? 1
          : (U(
              a[(C + 1) | 0] | 0,
              a[(C + 2) | 0] | 0,
              a[(C + 3) | 0] | 0,
              a[(C + 4) | 0] | 0
            ),
            (C = (C + 5) | 0),
            0)
      );
    }
    function tA(w) {
      return (
        (w = w | 0),
        cA(8) | 0
          ? 1
          : (eA(
              a[(C + 1) | 0] | 0,
              a[(C + 2) | 0] | 0,
              a[(C + 3) | 0] | 0,
              a[(C + 4) | 0] | 0,
              a[(C + 5) | 0] | 0,
              a[(C + 6) | 0] | 0,
              a[(C + 7) | 0] | 0,
              a[(C + 8) | 0] | 0
            ),
            (C = (C + 9) | 0),
            0)
      );
    }
    function X(w) {
      return (w = w | 0), 1;
    }
    function BA(w) {
      return (w = w | 0), VA(), (C = (C + 1) | 0), 0;
    }
    var EA = [
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      D,
      F,
      N,
      _,
      X,
      X,
      X,
      X,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      g,
      n,
      s,
      f,
      h,
      X,
      X,
      X,
      X,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      x,
      M,
      W,
      iA,
      hA,
      X,
      X,
      X,
      pA,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      $,
      DA,
      XA,
      De,
      Qe,
      X,
      X,
      X,
      me,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xA,
      xe,
      fe,
      zA,
      ZA,
      X,
      X,
      X,
      $e,
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
      ke,
      xt,
      St,
      lt,
      X,
      X,
      X,
      Ge,
      Se,
      Se,
      Se,
      Se,
      Se,
      Se,
      ee,
      ee,
      ee,
      ee,
      ee,
      ee,
      ee,
      ee,
      ee,
      ee,
      ee,
      ee,
      ee,
      ee,
      ee,
      ee,
      ee,
      ee,
      B,
      I,
      i,
      Q,
      X,
      X,
      X,
      X,
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
      R,
      O,
      z,
      H,
      p,
      Y,
      k,
      tA,
      X,
      X,
      X,
      BA,
    ];
    return { parse: Me };
  },
  Dr = {},
  Fe = {};
const Sn = Sr.BigNumber;
Fe.MT = {
  POS_INT: 0,
  NEG_INT: 1,
  BYTE_STRING: 2,
  UTF8_STRING: 3,
  ARRAY: 4,
  MAP: 5,
  TAG: 6,
  SIMPLE_FLOAT: 7,
};
Fe.TAG = {
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
Fe.NUMBYTES = {
  ZERO: 0,
  ONE: 24,
  TWO: 25,
  FOUR: 26,
  EIGHT: 27,
  INDEFINITE: 31,
};
Fe.SIMPLE = { FALSE: 20, TRUE: 21, NULL: 22, UNDEFINED: 23 };
Fe.SYMS = {
  NULL: Symbol("null"),
  UNDEFINED: Symbol("undef"),
  PARENT: Symbol("parent"),
  BREAK: Symbol("break"),
  STREAM: Symbol("stream"),
};
Fe.SHIFT32 = Math.pow(2, 32);
Fe.SHIFT16 = Math.pow(2, 16);
Fe.MAX_SAFE_HIGH = 2097151;
Fe.NEG_ONE = new Sn(-1);
Fe.TEN = new Sn(10);
Fe.TWO = new Sn(2);
Fe.PARENT = {
  ARRAY: 0,
  OBJECT: 1,
  MAP: 2,
  TAG: 3,
  BYTE_STRING: 4,
  UTF8_STRING: 5,
};
(function (t) {
  const { Buffer: A } = Ut,
    e = Sr.BigNumber,
    r = Fe,
    a = r.SHIFT32,
    c = r.SHIFT16,
    E = 2097151;
  t.parseHalf = function (m) {
    var L, U, eA;
    return (
      (eA = m[0] & 128 ? -1 : 1),
      (L = (m[0] & 124) >> 2),
      (U = ((m[0] & 3) << 8) | m[1]),
      L
        ? L === 31
          ? eA * (U ? 0 / 0 : 1 / 0)
          : eA * Math.pow(2, L - 25) * (1024 + U)
        : eA * 5960464477539063e-23 * U
    );
  };
  function u(y) {
    return y < 16 ? "0" + y.toString(16) : y.toString(16);
  }
  (t.arrayBufferToBignumber = function (y) {
    const m = y.byteLength;
    let L = "";
    for (let U = 0; U < m; U++) L += u(y[U]);
    return new e(L, 16);
  }),
    (t.buildMap = (y) => {
      const m = new Map(),
        L = Object.keys(y),
        U = L.length;
      for (let eA = 0; eA < U; eA++) m.set(L[eA], y[L[eA]]);
      return m;
    }),
    (t.buildInt32 = (y, m) => y * c + m),
    (t.buildInt64 = (y, m, L, U) => {
      const eA = t.buildInt32(y, m),
        T = t.buildInt32(L, U);
      return eA > E ? new e(eA).times(a).plus(T) : eA * a + T;
    }),
    (t.writeHalf = function (m, L) {
      const U = A.allocUnsafe(4);
      U.writeFloatBE(L, 0);
      const eA = U.readUInt32BE(0);
      if (eA & 8191) return !1;
      var T = (eA >> 16) & 32768;
      const sA = (eA >> 23) & 255,
        QA = eA & 8388607;
      if (sA >= 113 && sA <= 142) T += ((sA - 112) << 10) + (QA >> 13);
      else if (sA >= 103 && sA < 113) {
        if (QA & ((1 << (126 - sA)) - 1)) return !1;
        T += (QA + 8388608) >> (126 - sA);
      } else return !1;
      return m.writeUInt16BE(T, 0), !0;
    }),
    (t.keySorter = function (y, m) {
      var L = y[0].byteLength,
        U = m[0].byteLength;
      return L > U ? 1 : U > L ? -1 : y[0].compare(m[0]);
    }),
    (t.isNegativeZero = (y) => y === 0 && 1 / y < 0),
    (t.nextPowerOf2 = (y) => {
      let m = 0;
      if (y && !(y & (y - 1))) return y;
      for (; y !== 0; ) (y >>= 1), (m += 1);
      return 1 << m;
    });
})(Dr);
const Dn = Fe,
  Wa = Dn.MT,
  Zt = Dn.SIMPLE,
  Rr = Dn.SYMS;
let ja = class tn {
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
    return A._pushInt(this.value, Wa.SIMPLE_FLOAT);
  }
  static isSimple(A) {
    return A instanceof tn;
  }
  static decode(A, e) {
    switch ((e == null && (e = !0), A)) {
      case Zt.FALSE:
        return !1;
      case Zt.TRUE:
        return !0;
      case Zt.NULL:
        return e ? null : Rr.NULL;
      case Zt.UNDEFINED:
        return e ? void 0 : Rr.UNDEFINED;
      case -1:
        if (!e) throw new Error("Invalid BREAK");
        return Rr.BREAK;
      default:
        return new tn(A);
    }
  }
};
var ss = ja;
let Va = class rn {
  constructor(A, e, r) {
    if (
      ((this.tag = A),
      (this.value = e),
      (this.err = r),
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
    var e, r;
    if (
      ((r = A?.[this.tag]),
      typeof r != "function" &&
        ((r = rn["_tag" + this.tag]), typeof r != "function"))
    )
      return this;
    try {
      return r.call(rn, this.value);
    } catch (a) {
      return (e = a), (this.err = e), this;
    }
  }
};
var as = Va;
const os = self.location
    ? self.location.protocol + "//" + self.location.host
    : "",
  nn = self.URL;
let za = class {
  constructor(A = "", e = os) {
    (this.super = new nn(A, e)),
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
function Za(t) {
  if (typeof t == "string") return new nn(t).toString();
  if (!(t instanceof nn)) {
    const A = t.username && t.password ? `${t.username}:${t.password}@` : "",
      e = t.auth ? t.auth + "@" : "",
      r = t.port ? ":" + t.port : "",
      a = t.protocol ? t.protocol + "//" : "",
      c = t.host || "",
      E = t.hostname || "",
      u = t.search || (t.query ? "?" + t.query : ""),
      y = t.hash || "",
      m = t.pathname || "",
      L = t.path || m + u;
    return `${a}${A || e}${c || E + r}${L}${y}`;
  }
}
var gs = {
  URLWithLegacySupport: za,
  URLSearchParams: self.URLSearchParams,
  defaultBase: os,
  format: Za,
};
const { URLWithLegacySupport: Ln, format: Xa } = gs;
var $a = (t, A = {}, e = {}, r) => {
  let a = A.protocol ? A.protocol.replace(":", "") : "http";
  a = (e[a] || r || a) + ":";
  let c;
  try {
    c = new Ln(t);
  } catch {
    c = {};
  }
  const E = Object.assign({}, A, {
    protocol: a || c.protocol,
    host: A.host || c.host,
  });
  return new Ln(t, Xa(E)).toString();
};
const {
    URLWithLegacySupport: Ao,
    format: eo,
    URLSearchParams: to,
    defaultBase: ro,
  } = gs,
  no = $a;
var fs = {
  URL: Ao,
  URLSearchParams: to,
  format: eo,
  relative: no,
  defaultBase: ro,
};
const { Buffer: bt } = Ut,
  Yn = dr,
  io = Sr.BigNumber,
  so = Pa,
  Re = Dr,
  te = Fe,
  ao = ss,
  oo = as,
  { URL: go } = fs;
let sn = class an {
  constructor(A) {
    (A = A || {}),
      !A.size || A.size < 65536
        ? (A.size = 65536)
        : (A.size = Re.nextPowerOf2(A.size)),
      (this._heap = new ArrayBuffer(A.size)),
      (this._heap8 = new Uint8Array(this._heap)),
      (this._buffer = bt.from(this._heap)),
      this._reset(),
      (this._knownTags = Object.assign(
        {
          0: (e) => new Date(e),
          1: (e) => new Date(e * 1e3),
          2: (e) => Re.arrayBufferToBignumber(e),
          3: (e) => te.NEG_ONE.minus(Re.arrayBufferToBignumber(e)),
          4: (e) => te.TEN.pow(e[0]).times(e[1]),
          5: (e) => te.TWO.pow(e[0]).times(e[1]),
          32: (e) => new go(e),
          35: (e) => new RegExp(e),
        },
        A.tags
      )),
      (this.parser = so(
        Tt,
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
      case te.PARENT.TAG:
        this._push(this.createTag(A.ref[0], A.ref[1]));
        break;
      case te.PARENT.BYTE_STRING:
        this._push(this.createByteString(A.ref, A.length));
        break;
      case te.PARENT.UTF8_STRING:
        this._push(this.createUtf8String(A.ref, A.length));
        break;
      case te.PARENT.MAP:
        if (A.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createMap(A.ref, A.length));
        break;
      case te.PARENT.OBJECT:
        if (A.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createObject(A.ref, A.length));
        break;
      case te.PARENT.ARRAY:
        this._push(this.createArray(A.ref, A.length));
        break;
    }
    this._currentParent &&
      this._currentParent.type === te.PARENT.TAG &&
      this._dec();
  }
  _dec() {
    const A = this._currentParent;
    A.length < 0 || (A.length--, A.length === 0 && this._closeParent());
  }
  _push(A, e) {
    const r = this._currentParent;
    switch ((r.values++, r.type)) {
      case te.PARENT.ARRAY:
      case te.PARENT.BYTE_STRING:
      case te.PARENT.UTF8_STRING:
        r.length > -1
          ? (this._ref[this._ref.length - r.length] = A)
          : this._ref.push(A),
          this._dec();
        break;
      case te.PARENT.OBJECT:
        r.tmpKey != null
          ? ((this._ref[r.tmpKey] = A), (r.tmpKey = null), this._dec())
          : ((r.tmpKey = A),
            typeof r.tmpKey != "string" &&
              ((r.type = te.PARENT.MAP), (r.ref = Re.buildMap(r.ref))));
        break;
      case te.PARENT.MAP:
        r.tmpKey != null
          ? (this._ref.set(r.tmpKey, A), (r.tmpKey = null), this._dec())
          : (r.tmpKey = A);
        break;
      case te.PARENT.TAG:
        this._ref.push(A), e || this._dec();
        break;
      default:
        throw new Error("Unknown parent type");
    }
  }
  _createParent(A, e, r) {
    this._parents[this._depth] = {
      type: e,
      length: r,
      ref: A,
      values: 0,
      tmpKey: null,
    };
  }
  _reset() {
    (this._res = []),
      (this._parents = [
        {
          type: te.PARENT.ARRAY,
          length: -1,
          ref: this._res,
          values: 0,
          tmpKey: null,
        },
      ]);
  }
  createTag(A, e) {
    const r = this._knownTags[A];
    return r ? r(e) : new oo(A, e);
  }
  createMap(A, e) {
    return A;
  }
  createObject(A, e) {
    return A;
  }
  createArray(A, e) {
    return A;
  }
  createByteString(A, e) {
    return bt.concat(A);
  }
  createByteStringFromHeap(A, e) {
    return A === e ? bt.alloc(0) : bt.from(this._heap.slice(A, e));
  }
  createInt(A) {
    return A;
  }
  createInt32(A, e) {
    return Re.buildInt32(A, e);
  }
  createInt64(A, e, r, a) {
    return Re.buildInt64(A, e, r, a);
  }
  createFloat(A) {
    return A;
  }
  createFloatSingle(A, e, r, a) {
    return Yn.read([A, e, r, a], 0, !1, 23, 4);
  }
  createFloatDouble(A, e, r, a, c, E, u, y) {
    return Yn.read([A, e, r, a, c, E, u, y], 0, !1, 52, 8);
  }
  createInt32Neg(A, e) {
    return -1 - Re.buildInt32(A, e);
  }
  createInt64Neg(A, e, r, a) {
    const c = Re.buildInt32(A, e),
      E = Re.buildInt32(r, a);
    return c > te.MAX_SAFE_HIGH
      ? te.NEG_ONE.minus(new io(c).times(te.SHIFT32).plus(E))
      : -1 - (c * te.SHIFT32 + E);
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
  createUtf8String(A, e) {
    return A.join("");
  }
  createUtf8StringFromHeap(A, e) {
    return A === e ? "" : this._buffer.toString("utf8", A, e);
  }
  createSimpleUnassigned(A) {
    return new ao(A);
  }
  pushInt(A) {
    this._push(this.createInt(A));
  }
  pushInt32(A, e) {
    this._push(this.createInt32(A, e));
  }
  pushInt64(A, e, r, a) {
    this._push(this.createInt64(A, e, r, a));
  }
  pushFloat(A) {
    this._push(this.createFloat(A));
  }
  pushFloatSingle(A, e, r, a) {
    this._push(this.createFloatSingle(A, e, r, a));
  }
  pushFloatDouble(A, e, r, a, c, E, u, y) {
    this._push(this.createFloatDouble(A, e, r, a, c, E, u, y));
  }
  pushInt32Neg(A, e) {
    this._push(this.createInt32Neg(A, e));
  }
  pushInt64Neg(A, e, r, a) {
    this._push(this.createInt64Neg(A, e, r, a));
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
    this._createParent([], te.PARENT.ARRAY, -1);
  }
  pushArrayStartFixed(A) {
    this._createArrayStartFixed(A);
  }
  pushArrayStartFixed32(A, e) {
    const r = Re.buildInt32(A, e);
    this._createArrayStartFixed(r);
  }
  pushArrayStartFixed64(A, e, r, a) {
    const c = Re.buildInt64(A, e, r, a);
    this._createArrayStartFixed(c);
  }
  pushObjectStart() {
    this._createObjectStartFixed(-1);
  }
  pushObjectStartFixed(A) {
    this._createObjectStartFixed(A);
  }
  pushObjectStartFixed32(A, e) {
    const r = Re.buildInt32(A, e);
    this._createObjectStartFixed(r);
  }
  pushObjectStartFixed64(A, e, r, a) {
    const c = Re.buildInt64(A, e, r, a);
    this._createObjectStartFixed(c);
  }
  pushByteStringStart() {
    this._parents[this._depth] = {
      type: te.PARENT.BYTE_STRING,
      length: -1,
      ref: [],
      values: 0,
      tmpKey: null,
    };
  }
  pushByteString(A, e) {
    this._push(this.createByteStringFromHeap(A, e));
  }
  pushUtf8StringStart() {
    this._parents[this._depth] = {
      type: te.PARENT.UTF8_STRING,
      length: -1,
      ref: [],
      values: 0,
      tmpKey: null,
    };
  }
  pushUtf8String(A, e) {
    this._push(this.createUtf8StringFromHeap(A, e));
  }
  pushSimpleUnassigned(A) {
    this._push(this.createSimpleUnassigned(A));
  }
  pushTagStart(A) {
    this._parents[this._depth] = { type: te.PARENT.TAG, length: 1, ref: [A] };
  }
  pushTagStart4(A, e) {
    this.pushTagStart(Re.buildInt32(A, e));
  }
  pushTagStart8(A, e, r, a) {
    this.pushTagStart(Re.buildInt64(A, e, r, a));
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
    this._createParent({}, te.PARENT.OBJECT, A);
  }
  _createArrayStartFixed(A) {
    if (A === 0) {
      this._push(this.createArray([]));
      return;
    }
    this._createParent(new Array(A), te.PARENT.ARRAY, A);
  }
  _decode(A) {
    if (A.byteLength === 0) throw new Error("Input too short");
    this._reset(), this._heap8.set(A);
    const e = this.parser.parse(A.byteLength);
    if (this._depth > 1) {
      for (; this._currentParent.length === 0; ) this._closeParent();
      if (this._depth > 1) throw new Error("Undeterminated nesting");
    }
    if (e > 0) throw new Error("Failed to parse");
    if (this._res.length === 0) throw new Error("No valid result");
  }
  decodeFirst(A) {
    return this._decode(A), this._res[0];
  }
  decodeAll(A) {
    return this._decode(A), this._res;
  }
  static decode(A, e) {
    return (
      typeof A == "string" && (A = bt.from(A, e || "hex")),
      new an({ size: A.length }).decodeFirst(A)
    );
  }
  static decodeAll(A, e) {
    return (
      typeof A == "string" && (A = bt.from(A, e || "hex")),
      new an({ size: A.length }).decodeAll(A)
    );
  }
};
sn.decodeFirst = sn.decode;
var cs = sn;
const { Buffer: Tr } = Ut,
  fo = cs,
  co = Dr;
class mn extends fo {
  createTag(A, e) {
    return `${A}(${e})`;
  }
  createInt(A) {
    return super.createInt(A).toString();
  }
  createInt32(A, e) {
    return super.createInt32(A, e).toString();
  }
  createInt64(A, e, r, a) {
    return super.createInt64(A, e, r, a).toString();
  }
  createInt32Neg(A, e) {
    return super.createInt32Neg(A, e).toString();
  }
  createInt64Neg(A, e, r, a) {
    return super.createInt64Neg(A, e, r, a).toString();
  }
  createTrue() {
    return "true";
  }
  createFalse() {
    return "false";
  }
  createFloat(A) {
    const e = super.createFloat(A);
    return co.isNegativeZero(A) ? "-0_1" : `${e}_1`;
  }
  createFloatSingle(A, e, r, a) {
    return `${super.createFloatSingle(A, e, r, a)}_2`;
  }
  createFloatDouble(A, e, r, a, c, E, u, y) {
    return `${super.createFloatDouble(A, e, r, a, c, E, u, y)}_3`;
  }
  createByteString(A, e) {
    const r = A.join(", ");
    return e === -1 ? `(_ ${r})` : `h'${r}`;
  }
  createByteStringFromHeap(A, e) {
    return `h'${Tr.from(super.createByteStringFromHeap(A, e)).toString(
      "hex"
    )}'`;
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
  createArray(A, e) {
    const r = super.createArray(A, e);
    return e === -1 ? `[_ ${r.join(", ")}]` : `[${r.join(", ")}]`;
  }
  createMap(A, e) {
    const r = super.createMap(A),
      a = Array.from(r.keys()).reduce(Hn(r), "");
    return e === -1 ? `{_ ${a}}` : `{${a}}`;
  }
  createObject(A, e) {
    const r = super.createObject(A),
      a = Object.keys(r).reduce(Hn(r), "");
    return e === -1 ? `{_ ${a}}` : `{${a}}`;
  }
  createUtf8String(A, e) {
    const r = A.join(", ");
    return e === -1 ? `(_ ${r})` : `"${r}"`;
  }
  createUtf8StringFromHeap(A, e) {
    return `"${Tr.from(super.createUtf8StringFromHeap(A, e)).toString(
      "utf8"
    )}"`;
  }
  static diagnose(A, e) {
    return (
      typeof A == "string" && (A = Tr.from(A, e || "hex")),
      new mn().decodeFirst(A)
    );
  }
}
var Io = mn;
function Hn(t) {
  return (A, e) => (A ? `${A}, ${e}: ${t[e]}` : `${e}: ${t[e]}`);
}
const { Buffer: ze } = Ut,
  { URL: Bo } = fs,
  on = Sr.BigNumber,
  Mr = Dr,
  de = Fe,
  Je = de.MT,
  Xt = de.NUMBYTES,
  On = de.SHIFT32,
  qn = de.SYMS,
  Nt = de.TAG,
  Eo = (de.MT.SIMPLE_FLOAT << 5) | de.NUMBYTES.TWO,
  uo = (de.MT.SIMPLE_FLOAT << 5) | de.NUMBYTES.FOUR,
  ho = (de.MT.SIMPLE_FLOAT << 5) | de.NUMBYTES.EIGHT,
  Qo = (de.MT.SIMPLE_FLOAT << 5) | de.SIMPLE.TRUE,
  lo = (de.MT.SIMPLE_FLOAT << 5) | de.SIMPLE.FALSE,
  Co = (de.MT.SIMPLE_FLOAT << 5) | de.SIMPLE.UNDEFINED,
  Jn = (de.MT.SIMPLE_FLOAT << 5) | de.SIMPLE.NULL,
  wo = new on("0x20000000000000"),
  po = ze.from("f97e00", "hex"),
  yo = ze.from("f9fc00", "hex"),
  xo = ze.from("f97c00", "hex");
function So(t) {
  return {}.toString.call(t).slice(8, -1);
}
class ur {
  constructor(A) {
    (A = A || {}),
      (this.streaming = typeof A.stream == "function"),
      (this.onData = A.stream),
      (this.semanticTypes = [
        [Bo, this._pushUrl],
        [on, this._pushBigNumber],
      ]);
    const e = A.genTypes || [],
      r = e.length;
    for (let a = 0; a < r; a++) this.addSemanticType(e[a][0], e[a][1]);
    this._reset();
  }
  addSemanticType(A, e) {
    const r = this.semanticTypes.length;
    for (let a = 0; a < r; a++)
      if (this.semanticTypes[a][0] === A) {
        const E = this.semanticTypes[a][1];
        return (this.semanticTypes[a][1] = e), E;
      }
    return this.semanticTypes.push([A, e]), null;
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
  pushWrite(A, e, r) {
    return (
      (this.result[this.offset] = A),
      (this.resultMethod[this.offset] = e),
      (this.resultLength[this.offset] = r),
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
    return this.push(po);
  }
  _pushInfinity(A) {
    const e = A < 0 ? yo : xo;
    return this.push(e);
  }
  _pushFloat(A) {
    const e = ze.allocUnsafe(2);
    if (Mr.writeHalf(e, A) && Mr.parseHalf(e) === A)
      return this._pushUInt8(Eo) && this.push(e);
    const r = ze.allocUnsafe(4);
    return (
      r.writeFloatBE(A, 0),
      r.readFloatBE(0) === A
        ? this._pushUInt8(uo) && this.push(r)
        : this._pushUInt8(ho) && this._pushDoubleBE(A)
    );
  }
  _pushInt(A, e, r) {
    const a = e << 5;
    return A < 24
      ? this._pushUInt8(a | A)
      : A <= 255
      ? this._pushUInt8(a | Xt.ONE) && this._pushUInt8(A)
      : A <= 65535
      ? this._pushUInt8(a | Xt.TWO) && this._pushUInt16BE(A)
      : A <= 4294967295
      ? this._pushUInt8(a | Xt.FOUR) && this._pushUInt32BE(A)
      : A <= Number.MAX_SAFE_INTEGER
      ? this._pushUInt8(a | Xt.EIGHT) &&
        this._pushUInt32BE(Math.floor(A / On)) &&
        this._pushUInt32BE(A % On)
      : e === Je.NEG_INT
      ? this._pushFloat(r)
      : this._pushFloat(A);
  }
  _pushIntNum(A) {
    return A < 0
      ? this._pushInt(-A - 1, Je.NEG_INT, A)
      : this._pushInt(A, Je.POS_INT);
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
    const e = ze.byteLength(A, "utf8");
    return this._pushInt(e, Je.UTF8_STRING) && this.pushWrite(A, 5, e);
  }
  _pushBoolean(A) {
    return this._pushUInt8(A ? Qo : lo);
  }
  _pushUndefined(A) {
    return this._pushUInt8(Co);
  }
  _pushArray(A, e) {
    const r = e.length;
    if (!A._pushInt(r, Je.ARRAY)) return !1;
    for (let a = 0; a < r; a++) if (!A.pushAny(e[a])) return !1;
    return !0;
  }
  _pushTag(A) {
    return this._pushInt(A, Je.TAG);
  }
  _pushDate(A, e) {
    return A._pushTag(Nt.DATE_EPOCH) && A.pushAny(Math.round(e / 1e3));
  }
  _pushBuffer(A, e) {
    return A._pushInt(e.length, Je.BYTE_STRING) && A.push(e);
  }
  _pushNoFilter(A, e) {
    return A._pushBuffer(A, e.slice());
  }
  _pushRegexp(A, e) {
    return A._pushTag(Nt.REGEXP) && A.pushAny(e.source);
  }
  _pushSet(A, e) {
    if (!A._pushInt(e.size, Je.ARRAY)) return !1;
    for (const r of e) if (!A.pushAny(r)) return !1;
    return !0;
  }
  _pushUrl(A, e) {
    return A._pushTag(Nt.URI) && A.pushAny(e.format());
  }
  _pushBigint(A) {
    let e = Nt.POS_BIGINT;
    A.isNegative() && ((A = A.negated().minus(1)), (e = Nt.NEG_BIGINT));
    let r = A.toString(16);
    r.length % 2 && (r = "0" + r);
    const a = ze.from(r, "hex");
    return this._pushTag(e) && this._pushBuffer(this, a);
  }
  _pushBigNumber(A, e) {
    if (e.isNaN()) return A._pushNaN();
    if (!e.isFinite()) return A._pushInfinity(e.isNegative() ? -1 / 0 : 1 / 0);
    if (e.isInteger()) return A._pushBigint(e);
    if (!(A._pushTag(Nt.DECIMAL_FRAC) && A._pushInt(2, Je.ARRAY))) return !1;
    const r = e.decimalPlaces(),
      a = e.multipliedBy(new on(10).pow(r));
    return A._pushIntNum(-r)
      ? a.abs().isLessThan(wo)
        ? A._pushIntNum(a.toNumber())
        : A._pushBigint(a)
      : !1;
  }
  _pushMap(A, e) {
    return A._pushInt(e.size, Je.MAP)
      ? this._pushRawMap(e.size, Array.from(e))
      : !1;
  }
  _pushObject(A) {
    if (!A) return this._pushUInt8(Jn);
    for (var e = this.semanticTypes.length, r = 0; r < e; r++)
      if (A instanceof this.semanticTypes[r][0])
        return this.semanticTypes[r][1].call(A, this, A);
    var a = A.encodeCBOR;
    if (typeof a == "function") return a.call(A, this);
    var c = Object.keys(A),
      E = c.length;
    return this._pushInt(E, Je.MAP)
      ? this._pushRawMap(
          E,
          c.map((u) => [u, A[u]])
        )
      : !1;
  }
  _pushRawMap(A, e) {
    e = e
      .map(function (a) {
        return (a[0] = ur.encode(a[0])), a;
      })
      .sort(Mr.keySorter);
    for (var r = 0; r < A; r++)
      if (!this.push(e[r][0]) || !this.pushAny(e[r][1])) return !1;
    return !0;
  }
  write(A) {
    return this.pushAny(A);
  }
  pushAny(A) {
    var e = So(A);
    switch (e) {
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
        return this._pushBuffer(this, ze.isBuffer(A) ? A : ze.from(A));
      case "Null":
        return this._pushUInt8(Jn);
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
          case qn.NULL:
            return this._pushObject(null);
          case qn.UNDEFINED:
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
        e = this.resultLength,
        r = this.resultMethod,
        a = this.offset,
        c = 0,
        E = 0;
      E < a;
      E++
    )
      c += e[E];
    var u = ze.allocUnsafe(c),
      y = 0,
      m = 0;
    for (E = 0; E < a; E++) {
      switch (((m = e[E]), r[E])) {
        case 0:
          A[E].copy(u, y);
          break;
        case 1:
          u.writeUInt8(A[E], y, !0);
          break;
        case 2:
          u.writeUInt16BE(A[E], y, !0);
          break;
        case 3:
          u.writeUInt32BE(A[E], y, !0);
          break;
        case 4:
          u.writeDoubleBE(A[E], y, !0);
          break;
        case 5:
          u.write(A[E], y, m, "utf8");
          break;
        default:
          throw new Error("unkown method");
      }
      y += m;
    }
    var L = u;
    return this._reset(), L;
  }
  _reset() {
    (this.result = []),
      (this.resultMethod = []),
      (this.resultLength = []),
      (this.offset = 0);
  }
  static encode(A) {
    const e = new ur();
    if (!e.pushAny(A)) throw new Error("Failed to encode input");
    return e.finalize();
  }
}
var Do = ur;
(function (t) {
  (t.Diagnose = Io),
    (t.Decoder = cs),
    (t.Encoder = Do),
    (t.Simple = ss),
    (t.Tagged = as),
    (t.decodeAll = t.Decoder.decodeAll),
    (t.decodeFirst = t.Decoder.decodeFirst),
    (t.diagnose = t.Diagnose.diagnose),
    (t.encode = t.Encoder.encode),
    (t.decode = t.Decoder.decode),
    (t.leveldb = {
      decode: t.Decoder.decodeAll,
      encode: t.Encoder.encode,
      buffer: !0,
      name: "cbor",
    });
})(ns);
const Is = Xs(ns);
function Xe(...t) {
  const A = new Uint8Array(t.reduce((r, a) => r + a.byteLength, 0));
  let e = 0;
  for (const r of t) A.set(new Uint8Array(r), e), (e += r.byteLength);
  return A.buffer;
}
function Et(t) {
  return [...new Uint8Array(t)]
    .map((A) => A.toString(16).padStart(2, "0"))
    .join("");
}
const mo = new RegExp(/^([0-9A-F]{2})*$/i);
function hr(t) {
  if (!mo.test(t)) throw new Error("Invalid hexadecimal string.");
  const A = [...t]
    .reduce((e, r, a) => ((e[(a / 2) | 0] = (e[(a / 2) | 0] || "") + r), e), [])
    .map((e) => Number.parseInt(e, 16));
  return new Uint8Array(A).buffer;
}
function bo(t, A) {
  if (t.byteLength !== A.byteLength) return t.byteLength - A.byteLength;
  const e = new Uint8Array(t),
    r = new Uint8Array(A);
  for (let a = 0; a < e.length; a++) if (e[a] !== r[a]) return e[a] - r[a];
  return 0;
}
function No(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength).buffer;
}
function Pe(t) {
  return No(Ra.create().update(new Uint8Array(t)).digest());
}
function fr(t) {
  if (t instanceof Is.Tagged) return fr(t.value);
  if (typeof t == "string") return Bs(t);
  if (typeof t == "number") return Pe(Ee(t));
  if (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) return Pe(t);
  if (Array.isArray(t)) {
    const A = t.map(fr);
    return Pe(Xe(...A));
  } else {
    if (t && typeof t == "object" && t._isPrincipal)
      return Pe(t.toUint8Array());
    if (typeof t == "object" && t !== null && typeof t.toHash == "function")
      return fr(t.toHash());
    if (typeof t == "bigint") return Pe(Ee(t));
  }
  throw Object.assign(
    new Error(`Attempt to hash a value of unsupported type: ${t}`),
    { value: t }
  );
}
const Bs = (t) => {
  const A = new TextEncoder().encode(t);
  return Pe(A);
};
function mr(t) {
  const r = Object.entries(t)
      .filter(([, E]) => E !== void 0)
      .map(([E, u]) => {
        const y = Bs(E),
          m = fr(u);
        return [y, m];
      })
      .sort(([E], [u]) => bo(E, u)),
    a = Xe(...r.map((E) => Xe(...E)));
  return Pe(a);
}
var _o =
  (globalThis && globalThis.__rest) ||
  function (t, A) {
    var e = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        A.indexOf(r) < 0 &&
        (e[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
        A.indexOf(r[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[a]) &&
          (e[r[a]] = t[r[a]]);
    return e;
  };
const Fo = new TextEncoder().encode(`
ic-request`);
class bn {
  getPrincipal() {
    return (
      this._principal ||
        (this._principal = ie.selfAuthenticating(
          new Uint8Array(this.getPublicKey().toDer())
        )),
      this._principal
    );
  }
  async transformRequest(A) {
    const { body: e } = A,
      r = _o(A, ["body"]),
      a = await mr(e);
    return Object.assign(Object.assign({}, r), {
      body: {
        content: e,
        sender_pubkey: this.getPublicKey().toDer(),
        sender_sig: await this.sign(Xe(Fo, a)),
      },
    });
  }
}
class gn {
  getPrincipal() {
    return ie.anonymous();
  }
  async transformRequest(A) {
    return Object.assign(Object.assign({}, A), { body: { content: A.body } });
  }
}
var Ue = {},
  kt = {},
  ne = {};
Object.defineProperty(ne, "__esModule", { value: !0 });
const Ro = 9007199254740992;
function st(t, ...A) {
  const e = new Uint8Array(
    t.byteLength + A.reduce((a, c) => a + c.byteLength, 0)
  );
  e.set(new Uint8Array(t), 0);
  let r = t.byteLength;
  for (const a of A) e.set(new Uint8Array(a), r), (r += a.byteLength);
  return e.buffer;
}
function We(t, A, e) {
  e = e.replace(/[^0-9a-fA-F]/g, "");
  const r = 2 ** (A - 24);
  e = e.slice(-r * 2).padStart(r * 2, "0");
  const a = [(t << 5) + A].concat(e.match(/../g).map((c) => parseInt(c, 16)));
  return new Uint8Array(a).buffer;
}
function br(t, A) {
  if (A < 24) return new Uint8Array([(t << 5) + A]).buffer;
  {
    const e = A <= 255 ? 24 : A <= 65535 ? 25 : A <= 4294967295 ? 26 : 27;
    return We(t, e, A.toString(16));
  }
}
function Es(t) {
  const A = [];
  for (let e = 0; e < t.length; e++) {
    let r = t.charCodeAt(e);
    r < 128
      ? A.push(r)
      : r < 2048
      ? A.push(192 | (r >> 6), 128 | (r & 63))
      : r < 55296 || r >= 57344
      ? A.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (r & 63))
      : (e++,
        (r = ((r & 1023) << 10) | (t.charCodeAt(e) & 1023)),
        A.push(
          240 | (r >> 18),
          128 | ((r >> 12) & 63),
          128 | ((r >> 6) & 63),
          128 | (r & 63)
        ));
  }
  return st(new Uint8Array(br(3, t.length)), new Uint8Array(A));
}
function To(t, A) {
  if (t == 14277111) return st(new Uint8Array([217, 217, 247]), A);
  if (t < 24) return st(new Uint8Array([192 + t]), A);
  {
    const e = t <= 255 ? 24 : t <= 65535 ? 25 : t <= 4294967295 ? 26 : 27,
      r = 2 ** (e - 24),
      a = t
        .toString(16)
        .slice(-r * 2)
        .padStart(r * 2, "0"),
      c = [192 + e].concat(a.match(/../g).map((E) => parseInt(E, 16)));
    return new Uint8Array(c).buffer;
  }
}
ne.tagged = To;
function Vt(t) {
  return new Uint8Array(t).buffer;
}
ne.raw = Vt;
function Nn(t) {
  if (isNaN(t)) throw new RangeError("Invalid number.");
  t = Math.min(Math.max(0, t), 23);
  const A = [0 + t];
  return new Uint8Array(A).buffer;
}
ne.uSmall = Nn;
function us(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, t), 255)), (t = t.toString(16)), We(0, 24, t)
  );
}
ne.u8 = us;
function hs(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, t), 65535)), (t = t.toString(16)), We(0, 25, t)
  );
}
ne.u16 = hs;
function Qs(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, t), 4294967295)),
    (t = t.toString(16)),
    We(0, 26, t)
  );
}
ne.u32 = Qs;
function _n(t, A) {
  if (typeof t == "string" && A == 16) {
    if (t.match(/[^0-9a-fA-F]/)) throw new RangeError("Invalid number.");
    return We(0, 27, t);
  }
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (t = Math.min(Math.max(0, t), Ro)), (t = t.toString(16)), We(0, 27, t);
}
ne.u64 = _n;
function ls(t) {
  if (isNaN(t)) throw new RangeError("Invalid number.");
  if (t === 0) return Nn(0);
  t = Math.min(Math.max(0, -t), 24) - 1;
  const A = [32 + t];
  return new Uint8Array(A).buffer;
}
ne.iSmall = ls;
function Cs(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 255)), (t = t.toString(16)), We(1, 24, t)
  );
}
ne.i8 = Cs;
function ds(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 65535)),
    (t = t.toString(16)),
    We(1, 25, t)
  );
}
ne.i16 = ds;
function ws(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 4294967295)),
    (t = t.toString(16)),
    We(1, 26, t)
  );
}
ne.i32 = ws;
function ps(t, A) {
  if (typeof t == "string" && A == 16) {
    if (
      (t.startsWith("-") ? (t = t.slice(1)) : (t = "0"),
      t.match(/[^0-9a-fA-F]/) || t.length > 16)
    )
      throw new RangeError("Invalid number.");
    let e = !1,
      r = t.split("").reduceRight((a, c) => {
        if (e) return c + a;
        let E = parseInt(c, 16) - 1;
        return E >= 0 ? ((e = !0), E.toString(16) + a) : "f" + a;
      }, "");
    return e ? We(1, 27, r) : _n(0);
  }
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 9007199254740992)),
    (t = t.toString(16)),
    We(1, 27, t)
  );
}
ne.i64 = ps;
function Mo(t) {
  return t >= 0
    ? t < 24
      ? Nn(t)
      : t <= 255
      ? us(t)
      : t <= 65535
      ? hs(t)
      : t <= 4294967295
      ? Qs(t)
      : _n(t)
    : t >= -24
    ? ls(t)
    : t >= -255
    ? Cs(t)
    : t >= -65535
    ? ds(t)
    : t >= -4294967295
    ? ws(t)
    : ps(t);
}
ne.number = Mo;
function Go(t) {
  return st(br(2, t.byteLength), t);
}
ne.bytes = Go;
function Uo(t) {
  return Es(t);
}
ne.string = Uo;
function vo(t) {
  return st(br(4, t.length), ...t);
}
ne.array = vo;
function ko(t, A = !1) {
  t instanceof Map || (t = new Map(Object.entries(t)));
  let e = Array.from(t.entries());
  return (
    A && (e = e.sort(([r], [a]) => r.localeCompare(a))),
    st(br(5, t.size), ...e.map(([r, a]) => st(Es(r), a)))
  );
}
ne.map = ko;
function Lo(t) {
  const A = new Float32Array([t]);
  return st(new Uint8Array([224 + 26]), new Uint8Array(A.buffer));
}
ne.singleFloat = Lo;
function Yo(t) {
  const A = new Float64Array([t]);
  return st(new Uint8Array([224 + 27]), new Uint8Array(A.buffer));
}
ne.doubleFloat = Yo;
function Ho(t) {
  return t ? ys() : xs();
}
ne.bool = Ho;
function ys() {
  return Vt(new Uint8Array([224 + 21]));
}
ne.true_ = ys;
function xs() {
  return Vt(new Uint8Array([224 + 20]));
}
ne.false_ = xs;
function Oo() {
  return Vt(new Uint8Array([224 + 22]));
}
ne.null_ = Oo;
function qo() {
  return Vt(new Uint8Array([224 + 23]));
}
ne.undefined_ = qo;
var Jo =
  (Tt && Tt.__importStar) ||
  function (t) {
    if (t && t.__esModule) return t;
    var A = {};
    if (t != null)
      for (var e in t) Object.hasOwnProperty.call(t, e) && (A[e] = t[e]);
    return (A.default = t), A;
  };
Object.defineProperty(kt, "__esModule", { value: !0 });
const Ke = Jo(ne),
  Ko = [
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
class Ss {
  constructor(A, e = !1) {
    (this._serializer = A),
      (this._stable = e),
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
        return Ke.undefined_();
      case "boolean":
        return Ke.bool(A);
      case "number":
        return Math.floor(A) === A ? Ke.number(A) : Ke.doubleFloat(A);
      case "string":
        return Ke.string(A);
      case "object":
        if (A === null) return Ke.null_();
        if (Array.isArray(A))
          return Ke.array(A.map((e) => this._serializer.serializeValue(e)));
        if (Ko.find((e) => A instanceof e)) return Ke.bytes(A.buffer);
        if (Object.getOwnPropertyNames(A).indexOf("toJSON") !== -1)
          return this.encode(A.toJSON());
        if (A instanceof Map) {
          const e = new Map();
          for (const [r, a] of A.entries())
            e.set(r, this._serializer.serializeValue(a));
          return Ke.map(e, this._stable);
        } else {
          const e = new Map();
          for (const [r, a] of Object.entries(A))
            e.set(r, this._serializer.serializeValue(a));
          return Ke.map(e, this._stable);
        }
      default:
        throw new Error("Invalid value.");
    }
  }
}
kt.JsonDefaultCborEncoder = Ss;
class Ds {
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
kt.ToCborEncoder = Ds;
class ms {
  constructor() {
    this._encoders = new Set();
  }
  static withDefaultEncoders(A = !1) {
    const e = new this();
    return e.addEncoder(new Ss(e, A)), e.addEncoder(new Ds()), e;
  }
  removeEncoder(A) {
    for (const e of this._encoders.values())
      e.name == A && this._encoders.delete(e);
  }
  addEncoder(A) {
    this._encoders.add(A);
  }
  getEncoderFor(A) {
    let e = null;
    for (const r of this._encoders)
      (!e || r.priority > e.priority) && r.match(A) && (e = r);
    if (e === null) throw new Error("Could not find an encoder for value.");
    return e;
  }
  serializeValue(A) {
    return this.getEncoderFor(A).encode(A);
  }
  serialize(A) {
    return this.serializeValue(A);
  }
}
kt.CborSerializer = ms;
class Po extends ms {
  serialize(A) {
    return Ke.raw(
      new Uint8Array([
        ...new Uint8Array([217, 217, 247]),
        ...new Uint8Array(super.serializeValue(A)),
      ])
    );
  }
}
kt.SelfDescribeCborSerializer = Po;
(function (t) {
  function A(a) {
    for (var c in a) t.hasOwnProperty(c) || (t[c] = a[c]);
  }
  var e =
    (Tt && Tt.__importStar) ||
    function (a) {
      if (a && a.__esModule) return a;
      var c = {};
      if (a != null)
        for (var E in a) Object.hasOwnProperty.call(a, E) && (c[E] = a[E]);
      return (c.default = a), c;
    };
  Object.defineProperty(t, "__esModule", { value: !0 }), A(kt);
  const r = e(ne);
  t.value = r;
})(Ue);
class Wo {
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
    return Ue.value.bytes(A.toUint8Array());
  }
}
class jo {
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
    return Ue.value.bytes(new Uint8Array(A));
  }
}
class Vo {
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
      ? Ue.value.tagged(2, Ue.value.bytes(hr(A.toString(16))))
      : Ue.value.tagged(3, Ue.value.bytes(hr((BigInt("-1") * A).toString(16))));
  }
}
const Nr = Ue.SelfDescribeCborSerializer.withDefaultEncoders(!0);
Nr.addEncoder(new Wo());
Nr.addEncoder(new jo());
Nr.addEncoder(new Vo());
var fn;
(function (t) {
  (t[(t.Uint64LittleEndian = 71)] = "Uint64LittleEndian"),
    (t[(t.Semantic = 55799)] = "Semantic");
})(fn || (fn = {}));
function Gr(t) {
  return Nr.serialize(t);
}
function Kn(t) {
  const A = t.byteLength;
  let e = BigInt(0);
  for (let r = 0; r < A; r++) e = e * BigInt(256) + BigInt(t[r]);
  return e;
}
class zo extends Is.Decoder {
  createByteString(A) {
    return Xe(...A);
  }
  createByteStringFromHeap(A, e) {
    return A === e
      ? new ArrayBuffer(0)
      : new Uint8Array(this._heap.slice(A, e));
  }
}
function Ct(t) {
  const A = new Uint8Array(t);
  return new zo({
    size: A.byteLength,
    tags: { 2: (r) => Kn(r), 3: (r) => -Kn(r), [fn.Semantic]: (r) => r },
  }).decodeFirst(A);
}
const $t = () => {
  if (typeof window < "u" && window.crypto && window.crypto.getRandomValues) {
    const t = new Uint32Array(1);
    return window.crypto.getRandomValues(t), t[0];
  }
  if (typeof crypto < "u" && crypto.getRandomValues) {
    const t = new Uint32Array(1);
    return crypto.getRandomValues(t), t[0];
  }
  return typeof crypto < "u" && crypto.randomInt
    ? crypto.randomInt(0, 4294967295)
    : Math.floor(Math.random() * 4294967295);
};
var cn;
(function (t) {
  t.Call = "call";
})(cn || (cn = {}));
function bs() {
  const t = new ArrayBuffer(16),
    A = new DataView(t),
    e = $t(),
    r = $t(),
    a = $t(),
    c = $t();
  return (
    A.setUint32(0, e),
    A.setUint32(4, r),
    A.setUint32(8, a),
    A.setUint32(12, c),
    t
  );
}
const Zo = BigInt(1e6),
  Xo = BigInt(60 * 1e3);
class Ar {
  constructor(A) {
    this._value = (BigInt(Date.now()) + BigInt(A) - Xo) * Zo;
  }
  toCBOR() {
    return Ue.value.u64(this._value.toString(16), 16);
  }
  toHash() {
    return Ee(this._value);
  }
}
function $o(t = bs) {
  return async (A) => {
    t();
    const e = A.request.headers;
    (A.request.headers = e), A.endpoint === "call" && (A.body.nonce = t());
  };
}
function Ur(t) {
  const A = [];
  return (
    t.forEach((e, r) => {
      A.push([r, e]);
    }),
    A
  );
}
class Ag extends Error {
  constructor(A, e) {
    super(A),
      (this.response = e),
      (this.name = this.constructor.name),
      Object.setPrototypeOf(this, new.target.prototype);
  }
}
var tt;
(function (t) {
  (t.Received = "received"),
    (t.Processing = "processing"),
    (t.Replied = "replied"),
    (t.Rejected = "rejected"),
    (t.Unknown = "unknown"),
    (t.Done = "done");
})(tt || (tt = {}));
const er = 5 * 60 * 1e3,
  eg =
    "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae",
  tg = "ic0.app",
  rg = ".ic0.app",
  ng = "icp0.io",
  ig = ".icp0.io",
  sg = "icp-api.io",
  ag = ".icp-api.io";
class vr extends it {
  constructor(A) {
    super(A), (this.message = A);
  }
}
class tr extends it {
  constructor(A) {
    super(A), (this.message = A);
  }
}
function og() {
  let t;
  if (typeof window < "u")
    if (window.fetch) t = window.fetch.bind(window);
    else
      throw new vr(
        "Fetch implementation was not available. You appear to be in a browser context, but window.fetch was not present."
      );
  else if (typeof global < "u")
    if (global.fetch) t = global.fetch.bind(global);
    else
      throw new vr(
        "Fetch implementation was not available. You appear to be in a Node.js context, but global.fetch was not available."
      );
  else typeof self < "u" && self.fetch && (t = self.fetch.bind(self));
  if (t) return t;
  throw new vr(
    "Fetch implementation was not available. Please provide fetch to the HttpAgent constructor, or ensure it is available in the window or global context."
  );
}
class Ns {
  constructor(A = {}) {
    if (
      ((this.rootKey = hr(eg)),
      (this._pipeline = []),
      (this._timeDiffMsecs = 0),
      (this._rootKeyFetched = !1),
      (this._isAgent = !0),
      A.source)
    ) {
      if (!(A.source instanceof Ns))
        throw new Error("An Agent's source can only be another HttpAgent");
      (this._pipeline = [...A.source._pipeline]),
        (this._identity = A.source._identity),
        (this._fetch = A.source._fetch),
        (this._host = A.source._host),
        (this._credentials = A.source._credentials);
    } else
      (this._fetch = A.fetch || og() || fetch.bind(global)),
        (this._fetchOptions = A.fetchOptions),
        (this._callOptions = A.callOptions);
    if (A.host !== void 0)
      !A.host.match(/^[a-z]+:/) && typeof window < "u"
        ? (this._host = new URL(window.location.protocol + "//" + A.host))
        : (this._host = new URL(A.host));
    else if (A.source !== void 0) this._host = A.source._host;
    else {
      const e = typeof window < "u" ? window.location : void 0;
      e ||
        ((this._host = new URL("https://icp-api.io")),
        console.warn(
          "Could not infer host from window.location, defaulting to mainnet gateway of https://icp-api.io. Please provide a host to the HttpAgent constructor to avoid this warning."
        ));
      const r = ["ic0.app", "icp0.io", "localhost", "127.0.0.1"],
        a = e?.hostname;
      let c;
      a && typeof a == "string" && (c = r.find((E) => a.endsWith(E))),
        e && c
          ? (this._host = new URL(
              `${e.protocol}//${c}${e.port ? ":" + e.port : ""}`
            ))
          : ((this._host = new URL("https://icp-api.io")),
            console.warn(
              "Could not infer host from window.location, defaulting to mainnet gateway of https://icp-api.io. Please provide a host to the HttpAgent constructor to avoid this warning."
            ));
    }
    if (
      ((this._retryTimes =
        A.retryTimes !== void 0 && A.retryTimes >= 0 ? A.retryTimes : 3),
      this._host.hostname.endsWith(rg)
        ? (this._host.hostname = tg)
        : this._host.hostname.endsWith(ig)
        ? (this._host.hostname = ng)
        : this._host.hostname.endsWith(ag) && (this._host.hostname = sg),
      A.credentials)
    ) {
      const { name: e, password: r } = A.credentials;
      this._credentials = `${e}${r ? ":" + r : ""}`;
    }
    (this._identity = Promise.resolve(A.identity || new gn())),
      A.disableNonce || this.addTransform($o(bs));
  }
  isLocal() {
    const A = this._host.hostname;
    return A === "127.0.0.1" || A.endsWith("localhost");
  }
  addTransform(A, e = A.priority || 0) {
    const r = this._pipeline.findIndex((a) => (a.priority || 0) < e);
    this._pipeline.splice(
      r >= 0 ? r : this._pipeline.length,
      0,
      Object.assign(A, { priority: e })
    );
  }
  async getPrincipal() {
    if (!this._identity)
      throw new tr(
        "This identity has expired due this application's security policy. Please refresh your authentication."
      );
    return (await this._identity).getPrincipal();
  }
  async call(A, e, r) {
    const a = await (r !== void 0 ? await r : await this._identity);
    if (!a)
      throw new tr(
        "This identity has expired due this application's security policy. Please refresh your authentication."
      );
    const c = ie.from(A),
      E = e.effectiveCanisterId ? ie.from(e.effectiveCanisterId) : c,
      u = a.getPrincipal() || ie.anonymous();
    let y = new Ar(er);
    Math.abs(this._timeDiffMsecs) > 1e3 * 30 &&
      (y = new Ar(er + this._timeDiffMsecs));
    const m = {
      request_type: cn.Call,
      canister_id: c,
      method_name: e.methodName,
      arg: e.arg,
      sender: u,
      ingress_expiry: y,
    };
    let L = await this._transform({
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
      body: m,
    });
    L = await a.transformRequest(L);
    const U = Gr(L.body),
      eA = this._requestAndRetry(() =>
        this._fetch(
          "" + new URL(`/api/v2/canister/${E.toText()}/call`, this._host),
          Object.assign(
            Object.assign(Object.assign({}, this._callOptions), L.request),
            { body: U }
          )
        )
      ),
      [T, sA] = await Promise.all([eA, mr(m)]),
      QA = await T.arrayBuffer(),
      UA = T.status === 200 && QA.byteLength > 0 ? Ct(QA) : null;
    return {
      requestId: sA,
      response: {
        ok: T.ok,
        status: T.status,
        statusText: T.statusText,
        body: UA,
        headers: Ur(T.headers),
      },
    };
  }
  async _requestAndRetry(A, e = 0) {
    const r = await A();
    if (r.ok) return r;
    const a = await r.clone().text(),
      c = `Server returned an error:
  Code: ${r.status} (${r.statusText})
  Body: ${a}
`;
    if (this._retryTimes > e)
      return (
        console.warn(c + "  Retrying request."),
        await this._requestAndRetry(A, e + 1)
      );
    throw new Ag(c, {
      ok: r.ok,
      status: r.status,
      statusText: r.statusText,
      headers: Ur(r.headers),
    });
  }
  async query(A, e, r) {
    const a = await (r !== void 0 ? await r : await this._identity);
    if (!a)
      throw new tr(
        "This identity has expired due this application's security policy. Please refresh your authentication."
      );
    const c = typeof A == "string" ? ie.fromText(A) : A,
      E = a?.getPrincipal() || ie.anonymous(),
      u = {
        request_type: "query",
        canister_id: c,
        method_name: e.methodName,
        arg: e.arg,
        sender: E,
        ingress_expiry: new Ar(er),
      };
    let y = await this._transform({
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
      body: u,
    });
    y = await a?.transformRequest(y);
    const m = Gr(y.body),
      L = await this._requestAndRetry(() =>
        this._fetch(
          "" + new URL(`/api/v2/canister/${c.toText()}/query`, this._host),
          Object.assign(
            Object.assign(Object.assign({}, this._fetchOptions), y.request),
            { body: m }
          )
        )
      ),
      U = Ct(await L.arrayBuffer());
    return Object.assign(Object.assign({}, U), {
      httpDetails: {
        ok: L.ok,
        status: L.status,
        statusText: L.statusText,
        headers: Ur(L.headers),
      },
    });
  }
  async createReadStateRequest(A, e) {
    const r = await (e !== void 0 ? await e : await this._identity);
    if (!r)
      throw new tr(
        "This identity has expired due this application's security policy. Please refresh your authentication."
      );
    const a = r?.getPrincipal() || ie.anonymous(),
      c = await this._transform({
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
          sender: a,
          ingress_expiry: new Ar(er),
        },
      });
    return r?.transformRequest(c);
  }
  async readState(A, e, r, a) {
    const c = typeof A == "string" ? ie.fromText(A) : A,
      E = a ?? (await this.createReadStateRequest(e, r)),
      u = Gr(E.body),
      y = await this._requestAndRetry(() =>
        this._fetch(
          "" + new URL(`/api/v2/canister/${c}/read_state`, this._host),
          Object.assign(
            Object.assign(Object.assign({}, this._fetchOptions), E.request),
            { body: u }
          )
        )
      );
    if (!y.ok)
      throw new Error(`Server returned an error:
  Code: ${y.status} (${y.statusText})
  Body: ${await y.text()}
`);
    return Ct(await y.arrayBuffer());
  }
  async syncTime(A) {
    const e = await $s(
        () => Promise.resolve().then(() => Tg),
        void 0,
        import.meta.url
      ),
      r = Date.now();
    try {
      A ||
        console.log(
          "Syncing time with the IC. No canisterId provided, so falling back to ryjl3-tyaaa-aaaaa-aaaba-cai"
        );
      const c = (
        await e.request({
          canisterId: A ?? ie.from("ryjl3-tyaaa-aaaaa-aaaba-cai"),
          agent: this,
          paths: ["time"],
        })
      ).get("time");
      c && (this._timeDiffMsecs = Number(c) - Number(r));
    } catch (a) {
      console.error("Caught exception while attempting to sync time:", a);
    }
  }
  async status() {
    const A = this._credentials
        ? { Authorization: "Basic " + btoa(this._credentials) }
        : {},
      e = await this._requestAndRetry(() =>
        this._fetch(
          "" + new URL("/api/v2/status", this._host),
          Object.assign({ headers: A }, this._fetchOptions)
        )
      );
    return Ct(await e.arrayBuffer());
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
  _transform(A) {
    let e = Promise.resolve(A);
    for (const r of this._pipeline) e = e.then((a) => r(a).then((c) => c || a));
    return e;
  }
}
var Pn;
(function (t) {
  (t.Error = "err"),
    (t.GetPrincipal = "gp"),
    (t.GetPrincipalResponse = "gpr"),
    (t.Query = "q"),
    (t.QueryResponse = "qr"),
    (t.Call = "c"),
    (t.CallResponse = "cr"),
    (t.ReadState = "rs"),
    (t.ReadStateResponse = "rsr"),
    (t.Status = "s"),
    (t.StatusResponse = "sr");
})(Pn || (Pn = {}));
function Wn() {
  const t =
    typeof window > "u"
      ? typeof global > "u"
        ? typeof self > "u"
          ? void 0
          : self.ic.agent
        : global.ic.agent
      : window.ic.agent;
  if (!t) throw new Error("No Agent could be found.");
  return t;
}
var _s;
(function () {
  for (
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      A = new Uint8Array(256),
      e = 0;
    e < t.length;
    e++
  )
    A[t.charCodeAt(e)] = e;
  _s = function (r) {
    var a = r.length * 0.75,
      c = r.length,
      E,
      u = 0,
      y,
      m,
      L,
      U;
    r[r.length - 1] === "=" && (a--, r[r.length - 2] === "=" && a--);
    var eA = new ArrayBuffer(a),
      T = new Uint8Array(eA);
    for (E = 0; E < c; E += 4)
      (y = A[r.charCodeAt(E)]),
        (m = A[r.charCodeAt(E + 1)]),
        (L = A[r.charCodeAt(E + 2)]),
        (U = A[r.charCodeAt(E + 3)]),
        (T[u++] = (y << 2) | (m >> 4)),
        (T[u++] = ((m & 15) << 4) | (L >> 2)),
        (T[u++] = ((L & 3) << 6) | (U & 63));
    return eA;
  };
})();
const gg =
  "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akE4ENABGiACQbgDakEBNgIAIAJBwANqQTgQ0AEaIAJB+ANqQQE2AgAgAkGABGpBOBDQARogAkEBNgK4BCACQcAEakE4ENABGiACQfgEakEBNgIAIAJBgAVqQTgQ0AEaIAJBuAVqQQE2AgAgAkHABWpBOBDQARogAkH4BWpBATYCACACQYAGakE4ENABGiACQQE2ArgGIAJBwAZqQTgQ0AEaIAJB+AZqQQE2AgAgAkGAB2pBOBDQARogAkG4B2pBATYCACACQcAHakE4ENABGiACQfgHakEBNgIAIAIgARAYAkAgASgCgAZBBEYNACAAKAKABkEERg0AIAJBgARqIgMgAEGAAmoQlgEgAyABQYACahAYDAYLIAJBwAxqIgdBOBDQARogAkEBNgL4DCACQYANakE4ENABGiACQbgNakEBNgIAIAJBgAhqIgRBOBDQARogAkEBNgK4CCACQcAIakE4ENABGiACQfgIakEBNgIAIAJBgApqIgMgAEGAA2oiBRBeIAQgAxCZASADIAFBgANqIgYQXiAEIAMQESAHELYBIAEoAoAGQQRHDQMMBAsgACABEAMMBgsgAkHADGoiAyABQYAFahBeIAJBgAxqIgQgA0HAABDRARogAkGABmogBBCnAQsgAkGABmoQZCACQYAIaiIDIAIQlgEgAxArIAJBgAJqIgQgAxCXASAGIAQQlgEgAkGABGoiByADEJYBIAMgABCWASADIAUQlwEgAxCwASACQYAKaiIEIAEQlgEgBCABQYAEahCXASAEELABIAMgBBAYIAcgAxCXASADIAUQlgECQCABKAKABkECRwRAIAJBwAxqIgMgAUGABWoQXiACQYAIaiADEKYBDAELIAJBwAxqIgMgAUGABWoQXiACQYAMaiIBIANBwAAQ0QEaIAJBgAhqIAEQpwELIAJBgAhqIgEQZCACQYAKaiIDIAEQlgEgAxArIAUgAkGABGoQlgEgBSADEJcBIAJBgAZqIgQgAxCXASABEGQgBiABEJcBIAQQsAEgBBBkIAAgAhCWASAAIAQQlwEMAwsgAkGACmoiAyAFEF4gAkHADGoiBCADEJkBIAMgAUGAAmoQXiAEIAMQEQsgACgCgAZBBEcEQCACQYAKaiIDIABBgAJqEF4gAkHADGoiBCADEJkBIAMgBhBeIAQgAxARCyACQYAEaiIDIAJB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AEHcu8AAKAIAQX4gA0EDdndxNgIACyAAIAEQoAEgAEH0vsAAKAIARw0BQey+wAAgATYCAAsPCyABQYACTwRAIAAgARAWDwsgAUEDdiICQQN0QeS7wABqIQECf0Hcu8AAKAIAIgNBASACdCICcQRAIAEoAggMAQtB3LvAACACIANyNgIAIAELIQIgASAANgIIIAIgADYCDCAAIAE2AgwgACACNgIIC+UDAQN/IwBB0CJrIgMkACADQcAWaiIEQcitwAAQSSADQcgcaiIFQYCuwAAQSSADQQhqIAQgBRBLIANBiAFqQTgQ0AEaIANBwAFqQTgQ0AEaIANB+AFqED0CQCACEIYBBEAgABBVDAELIANB+ARqIgQQPSAEIAEQfSAEEEcgA0H4B2oiARBnIAEgAhB4IAEQRiADQcgcaiICIAEQkAEgA0G4CWogAhCQASACIANBuAhqEJABIANB+AlqIAIQkAEgA0G4CmoiARA9IANBuA1qEFUgASAEEH0gA0HAE2oiARA9IAEgBBB9IAEQogEgA0HAAWogA0GIAWoQUEECayECA0AgAkEBakEBTQRAIANBuA1qIgEQngEgACABQYgGENEBGgUgA0G4DWoQGiADQcAWaiADQbgKaiADQbgJaiADQfgJahALAkACQAJAIANBwAFqIAIQUyADQYgBaiACEFNrQQFqDgMBAgACCyADQcgcaiIBIANBuApqIANB+ARqIANBuAlqIANB+AlqEAogA0HAFmogARADDAELIANByBxqIgEgA0G4CmogA0HAE2ogA0G4CWogA0H4CWoQCiADQcAWaiABEAMLIAJBAWshAiADQbgNaiADQcAWahABDAELCwsgA0HQImokAAvBAwEVfwNAIANBwAFGBEACQCAAQShqIQsgAEEUaigCACIMIQggAEEQaigCACINIQIgAEEMaigCACIOIQEgACgCCCIPIQMgAEEYaigCACIQIQogAEEcaigCACIRIQQgAEEgaigCACISIQcgAEEkaigCACITIQYDQCAHIQkgBCEHIAohBCAFQYACRg0BIAEgAnEhFCABIAJzIRUgBSALaigCACAFQcCiwABqKAIAIAkgBEF/c3EgBCAHcXIgBmogBEEadyAEQRV3cyAEQQd3c2pqaiIGIAhqIQogBUEEaiEFIAIhCCABIQIgAyIBQR53IAFBE3dzIAFBCndzIBQgASAVcXNqIAZqIQMgCSEGDAALAAsFIAAgA2oiAkHoAGogAkEoaigCACACQcwAaigCACACQeAAaigCACIBQQ93IAFBDXdzIAFBCnZzamogAkEsaigCACIBQRl3IAFBDndzIAFBA3ZzajYCACADQQRqIQMMAQsLIAAgBiATajYCJCAAIAkgEmo2AiAgACAHIBFqNgIcIAAgBCAQajYCGCAAIAggDGo2AhQgACACIA1qNgIQIAAgASAOajYCDCAAIAMgD2o2AggL5AEBAn8jAEGAA2siAyQAIAMQPSAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbyAAIAFBgANqIAJBAXNBAWtBH3YQbyAAIAFBgAZqIAJBAnNBAWtBH3YQbyAAIAFBgAlqIAJBA3NBAWtBH3YQbyAAIAFBgAxqIAJBBHNBAWtBH3YQbyAAIAFBgA9qIAJBBXNBAWtBH3YQbyAAIAFBgBJqIAJBBnNBAWtBH3YQbyAAIAFBgBVqIAJBB3NBAWtBH3YQbyADIAAQfSADEKIBIAAgAyAEQQFxEG8gA0GAA2okAAvlAwEIfyMAQZAGayICJAAgAEFAayEIAkAgAUH4AGooAgAgASgCOGqsIABB+ABqKAIAIgcgACgCOCIEaqx+Qv///w9XDQAgBEEBSgR/IAAQHiAAKAJ4BSAHC0EBTA0AIAgQHgsgAkHYpMAAEEkgAkE4aiIHQfAAENABGiACIQNBACECA0AgAkE4RgRAAkAgB0E4aiEEQQAhAgNAIAJBOEYNASACIARqIAIgA2opAwA3AwAgAkEIaiECDAALAAsFIAIgB2pCADcDACACQQhqIQIMAQsLIANBqAFqIgYgABBdIANB4AFqIgUgARBdIANBmAJqIgIgACABEAUgA0GIA2oiBCAIIAFBQGsiARAFIAYgCBBgIAYQQiAFIAEQYCAFEEIgA0H4A2oiCSAGIAUQBUEAIQEgA0HoBGoiBkHwABDQASEFA0AgAUHwAEcEQCABIAVqIAEgAmopAwA3AwAgAUEIaiEBDAELCyAGIAQQYkEAIQEDQCABQfAARwRAIAEgBGoiBSABIAdqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAiAEEGIgAhBIIAkgBhBjIAkQSCADQdgFaiIBIAIQayAAIAEQaiAAQQM2AjggASAJEGsgCCABEGogAEECNgJ4IANBkAZqJAALowIBCH8jAEGABmsiAiQAIAIgAEGAAWoiBxBeIAJBgAFqIgQgBxBeIAQQLSACQYACaiIFIAIQXiAFIABBgAJqIgMQESACQYADaiIBIAMQXiABEC0gAyAEEJkBIAMgBBCaASADEKkBIAMQuAEgAxC4ASADEKkBIAFBDBCrASABEHwgARCpASACQYAEaiIIIAEQXiAIIAMQESACQYAFaiIGIAQQXiAGIAEQmgEgBhCpASADIAUQESAFIAEQmQEgBSABEJoBIAEgBRCaASABEKkBIAQgARB7IAQQqQEgBiAEEBEgBiAIEJoBIAUgABCZASAFIAIQESAAIAQQmQEgABCpASAAIAUQESAAELgBIAAQqQEgByAGEJkBIAcQqQEgAkGABmokAAu8AgEGfyMAQYAIayIBJAAgASAAEIwBIAFBgAJqIgMgAEGABGoiBRCMASABQYAEaiIEIABBgAJqIgYQjAEgAUGABmoiAkE4ENABGiABQQE2ArgGIAFBwAZqQTgQ0AEaIAFB+AZqQQE2AgAgAUGAB2pBOBDQARogAUG4B2pBATYCACABQcAHakE4ENABGiABQfgHakEBNgIAIAAQISACIAAQlgEgAiAAEJcBIAAgAhCXASAAELABIAEQyQEgARCzASAAIAEQlwEgAxAhIAMQZCACIAMQlgEgAiADEJcBIAMgAhCXASADELABIAQQISACIAQQlgEgAiAEEJcBIAQgAhCXASAEELABIAYQsgEgBhCzASAFEMkBIAUQswEgBiADEJcBIAUgBBCXASAAQQU2AoAGIAAQnAEgAUGACGokAAv/AQEHfyMAQcACayIBJAAgASAAQUBrIgYQkAEgARBMIAFBQGsiAyAGEJABIAMgAEGAAWoiAhBKIAFBgAFqIgQgAhCQASAEEEwgAiABEK4BIAIgARB3IAIQQiACEIIBIAIQggEgAhBCIARBDBA0IAFBwAFqIgcgBBCQASAHIAIQSiABQYACaiIFIAEQkAEgBSAEEHcgBRBCIAIgAxBKIAMgBBCuASADIAQQdyAEIAMQdyABIAQQfiABEEIgBSABEEogBSAHEHcgAyAAEK4BIAMgBhBKIAAgARCuASAAEEIgACADEEogABCCASAAEEIgBiAFEK4BIAYQQiABQcACaiQAC84CAgd/An4CQAJAAkBBDSABQTpuIgJrIgRBDU0EQEEMIAJrIgNBDk8NASAAIAAgA0EDdGopAwBBOiABIAJBOmxrIgNrrSIKhyAAIARBA3RqKQMAIAOtIgmGhDcDaCAEQQ1rIQUgAEHgAGohBCACQQFqIQZBACACQQN0ayEHQQshAwNAAkAgA0ECaiAGTQRAIAFBrAZPDQEgACACQQN0aiAAKQMAIAmGQv//////////A4M3AwADQCACRQ0HIABCADcDACACQQFrIQIgAEEIaiEADAALAAsgAyAFakEOTw0EIAQgBCAHaiIIQQhrKQMAIAqHIAgpAwAgCYZC//////////8Dg4Q3AwAgA0EBayEDIARBCGshBAwBCwsgAkEOQYCywAAQOwALIARBDkHQscAAEDsACyADQQ5B4LHAABA7AAtBf0EOQfCxwAAQOwALC6cCAQR/IABCADcCECAAAn9BACABQYACSQ0AGkEfIAFB////B0sNABogAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+agsiBDYCHCAEQQJ0Qey9wABqIQMgACECAkACQAJAAkBB4LvAACgCACIAQQEgBHQiBXEEQCADKAIAIQMgBBCfASEAIAMQywEgAUcNASADIQAMAgtB4LvAACAAIAVyNgIAIAMgAjYCAAwDCyABIAB0IQQDQCADIARBHXZBBHFqQRBqIgUoAgAiAEUNAiAEQQF0IQQgACIDEMsBIAFHDQALCyAAKAIIIgEgAjYCDCAAIAI2AgggAiAANgIMIAIgATYCCCACQQA2AhgPCyAFIAI2AgALIAIgAzYCGCACIAI2AgggAiACNgIMC7YCAQV/IAAoAhghBAJAAkAgACAAKAIMRgRAIABBFEEQIABBFGoiASgCACIDG2ooAgAiAg0BQQAhAQwCCyAAKAIIIgIgACgCDCIBNgIMIAEgAjYCCAwBCyABIABBEGogAxshAwNAIAMhBSACIgFBFGoiAygCACICRQRAIAFBEGohAyABKAIQIQILIAINAAsgBUEANgIACwJAIARFDQACQCAAIAAoAhxBAnRB7L3AAGoiAigCAEcEQCAEQRBBFCAEKAIQIABGG2ogATYCACABDQEMAgsgAiABNgIAIAENAEHgu8AAQeC7wAAoAgBBfiAAKAIcd3E2AgAPCyABIAQ2AhggACgCECICBEAgASACNgIQIAIgATYCGAsgAEEUaigCACIARQ0AIAFBFGogADYCACAAIAE2AhgLC+UBAQZ/IwBBgARrIgIkACACIAAQXiACQYABaiIFIABBgAFqIgYQXiACQYACaiIDQTgQ0AEaIAJBATYCuAIgAkHAAmpBOBDQARogAkH4AmpBATYCACACQYADaiIEIAYQXiACIAEQESAFIAFBgAFqIgcQESADIAcQmQEgAyABEJoBIAQgABCaASADEKkBIAQQqQEgBCADEBEgAyACEJkBIAMQNiAEIAMQmgEgBBCpASADIAUQmQEgAxA2IAYgBBCZASAGIAMQmgEgBRB8IAAgBRCZASAAIAIQmgEgABCwASACQYAEaiQAC28BDH9BjL/AACgCACICRQRAQZy/wABB/x82AgBBAA8LQYS/wAAhBgNAIAIiASgCCCECIAEoAgQhAyABKAIAIQQgAUEMaigCABogASEGIAVBAWohBSACDQALQZy/wAAgBUH/HyAFQf8fSxs2AgBBAAuAAgEGfyMAQYAIayIBJAAgACgCgAZBAUcEQCABIAAQjAEgAUGAAmoiAiAAQYACaiIEEIwBIAFBgARqIgUgAEGABGoiAxCMASABQYAGaiIGIAAQjAEgARAhIAIgAxAYIAIQswEgAhCwASAFECEgBiAEEBggBhCzASADIAAQlwEgAyAEEJcBIAMQsAEgAxAhIAAgARCWASABIAIQlwEgARCwASABIAUQlwEgASAGEJcBIAEQsAEgARArIAIQZCAFEGQgACACEJcBIAQgBRCWASAEIAYQlwEgAyABEJcBIABBBEEFIAAoAoAGQX5xQQJGGzYCgAYgABCdAQsgAUGACGokAAuZAgEBfyMAQYANayIDJAAgAyABEGkgAxCdASADQYgGaiIBIAIQXSABEEIgA0HABmoiAiABEF0gAkEDECkaIAIQQiADQfgGaiADEGkCQCACEFdFBEAgA0HABmoQKkECayECA0AgAkEBakEBTQRAIANB+AZqIgEQnAEMAwUgA0H4BmoQEwJAAkACQCADQcAGaiACEFMgA0GIBmogAhBTa0EBag4DAQIAAgsgA0H4BmogAxAHDAELIAMQngEgA0H4BmogAxAHIAMQngELIAJBAWshAgwBCwALAAsgA0H4BmoiARC3ASABQYABahC2ASABQYACahCxASABQYAEahCxASABQQE2AoAGCyAAIAFBiAYQ0QEaIANBgA1qJAALhgICBH8BfiMAQTBrIgIkACABQQRqIQQgASgCBEUEQCABKAIAIQMgAkEQaiIFQQA2AgAgAkIBNwMIIAIgAkEIajYCFCACQShqIANBEGopAgA3AwAgAkEgaiADQQhqKQIANwMAIAIgAykCADcDGCACQRRqIAJBGGoQDBogBEEIaiAFKAIANgIAIAQgAikDCDcCAAsgAkEgaiIDIARBCGooAgA2AgAgAUEMakEANgIAIAQpAgAhBiABQgE3AgQgAiAGNwMYQQxBBBC5ASIBRQRAQQxBBBDPAQALIAEgAikDGDcCACABQQhqIAMoAgA2AgAgAEGEt8AANgIEIAAgATYCACACQTBqJAAL5AEBAn8jAEHAAWsiAyQAIAMQZyAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbiAAIAFBwAFqIAJBAXNBAWtBH3YQbiAAIAFBgANqIAJBAnNBAWtBH3YQbiAAIAFBwARqIAJBA3NBAWtBH3YQbiAAIAFBgAZqIAJBBHNBAWtBH3YQbiAAIAFBwAdqIAJBBXNBAWtBH3YQbiAAIAFBgAlqIAJBBnNBAWtBH3YQbiAAIAFBwApqIAJBB3NBAWtBH3YQbiADIAAQeCADEKQBIAAgAyAEQQFxEG4gA0HAAWokAAvDAwIGfwN+IwBB8ABrIgEkACABQcCywAAQSSABQThqIAEQXSAAEEICQAJAAkAgAQJ/IAAoAjgiAkEQTARAIAJBAWsQNQwBCyABKQMwIghCAXwiByAIVA0BIAApAzAiCEKAgICAgICAgIB/USAHQn9RcQ0CIAFBOGoiAiAIIAd/pxApIQcgASABKQNoIAdCOoZ8NwNoIAAgAhBhIAAQQkECCyIEECgDQCAERQ0DQQAhAyABIAEpAwgiCEI5hkKAgICAgICAgAKDIAEpAwBCAYeEIgc3AwAgACkDACAHfSEHIABBCGohBSAAIAFBOGoiAkEBA38gAiADaiAHQv//////////A4M3AwAgB0I6hyEHIANBKEYEfyABIAEpAzBCAYciCDcDMCACIAApAzAgCH0gB3wiBzcDMCAHQj+IpwUgASADaiIGQQhqIAhCAYcgBkEQaikDACIIQjmGQoCAgICAgICAAoOEIgk3AwAgAyAFaikDACAHfCAJfSEHIANBCGohAwwBCwtrEDAgBEEBayEEDAALAAtB4LPAAEEZQcSzwAAQWQALQYC0wABBH0HEs8AAEFkACyAAQQE2AjggAUHwAGokAAvuAQECfyMAQbABayIDJAAgA0EwENABIQMCQAJAA0AgAkEwRgRAIANBMGogAxBwIAFBMGohAUEAIQIDQCACQTBGDQMgAkEwRg0EIAIgA2ogASACai0AADoAACACQQFqIQIMAAsACyACQeAARwRAIAIgA2ogASACai0AADoAACACQQFqIQIMAQsLQeAAQeAAQYCmwAAQOwALIANB8ABqIgEgAxBwIABBOBDQASIAQQE2AjggAEFAa0E4ENABIABB+ABqQQE2AgAgACABEK4BIANBMGoQrgEgA0GwAWokAA8LIAJBMGpB4ABBkKbAABA7AAuPAgEDfyMAQSBrIgUkAEEBIQZB2LvAAEHYu8AAKAIAIgdBAWo2AgACQEGgv8AALQAABEBBpL/AACgCAEEBaiEGDAELQaC/wABBAToAAAtBpL/AACAGNgIAAkACQCAHQQBIIAZBAktyDQAgBSAEOgAYIAUgAzYCFCAFIAI2AhBBzLvAACgCACICQQBIDQBBzLvAACACQQFqIgI2AgBBzLvAAEHUu8AAKAIAIgMEf0HQu8AAKAIAIAUgACABKAIQEQAAIAUgBSkDADcDCCAFQQhqIAMoAhQRAABBzLvAACgCAAUgAgtBAWs2AgAgBkEBSw0AIAQNAQsACyMAQRBrIgIkACACIAE2AgwgAiAANgIIAAucAQEEfyMAQYADayICJAAgAiAAEF4gAkGAAWoiASAAQYABaiIEEF4gAkGAAmoiAyAAEF4gAyAEEBEgAiAEEJoBIAEQfCABIAAQmgEgAhCpASABEKkBIAAgAhCZASAAIAEQESABIAMQmQEgARB8IAEgAxCaASABEKkBIAEQNiAAIAEQmgEgAxC4ASAEIAMQmQEgABCwASACQYADaiQAC7kBAQJ/IwBBIGsiAyQAAkAgASABIAJqIgFLDQAgAEEEaigCACICQQF0IgQgASABIARJGyIBQQggAUEISxshAQJAIAIEQCADQRhqQQE2AgAgAyACNgIUIAMgACgCADYCEAwBCyADQQA2AhALIAMgASADQRBqECYgAygCAARAIANBCGooAgAiAEUNASADKAIEIAAQzwEACyADKAIEIQIgAEEEaiABNgIAIAAgAjYCACADQSBqJAAPCxBlAAusAQECfyMAQYADayIDJAAgA0EIaiABEJABAkAgAgRAIANBCGogAhCuAQwBCyADQQhqEDoLIANByABqIgJB8LTAABBJIANBgAFqIAIQjgEgA0HAAWoiAiADQQhqIgQQkAEgAhBMIAIgARBKIAAgARCQASAAIAQQSiADQYACaiACEJABIAAQViEBIANBwAJqIgIgABCQASACEEMgAhBCIAAgAiABEHIgA0GAA2okAAueAQEFfyMAQYABayICJAAgAkE4ENABIgJBATYCOCACQUBrIgNBOBDQARogAkEBNgJ4IAIgABCuASACIAFBgAFqIgUQSiADIAEQrgEgAyAAQYABaiIGEEoCQCACIAMQWEUNACACIABBQGsQrgEgAiAFEEogAkFAayIAIAFBQGsQrgEgACAGEEogAiAAEFhFDQBBASEECyACQYABaiQAIAQLpwEBA38jAEEwayICJAAgAUEEaiEDIAEoAgRFBEAgASgCACEBIAJBEGoiBEEANgIAIAJCATcDCCACIAJBCGo2AhQgAkEoaiABQRBqKQIANwMAIAJBIGogAUEIaikCADcDACACIAEpAgA3AxggAkEUaiACQRhqEAwaIANBCGogBCgCADYCACADIAIpAwg3AgALIABBhLfAADYCBCAAIAM2AgAgAkEwaiQAC5UBAQJ/AkACQAJAAkACfwJAAkACf0EBIgMgAUEASA0AGiACKAIAIgRFDQEgAigCBCICDQQgAQ0CQQEMAwshA0EAIQEMBgsgAQ0AQQEMAQsgAUEBELkBCyICRQ0BDAILIAQgARCsASICDQELIAAgATYCBEEBIQEMAQsgACACNgIEQQAhAwsgACADNgIAIABBCGogATYCAAvvMwISfwV+IwBBMGsiDiQAIA5BEGogACABEFsgDiAOKAIUIgA2AhwgDiAOKAIQIgg2AhggDkEIaiACIAMQWyAOIA4oAgwiATYCJCAOIA4oAggiAzYCICAOIAQgBRBbIA4gDigCBCIFNgIsIA4gDigCACINNgIoIAAhBCMAQZAVayICJAAjAEGwBmsiCiQAIApBEGpBOBDQARogCkHQAGpBOBDQASEVIApBiAFqQQE2AgAgCkEBNgJIIApBkAFqIgBB2KTAABBJIAAQKiEPIApByAFqIhNBgAIQ0AEaIApB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ABBJAkACQAJAAkADQAJAIAxBMEYEQCAAIAAtAABBH3E6AAAgAEHoAGogABC+ASAEDQFBAEEAQZiBwAAQOwALIAQgDEYNAiAAIAxqIAggDGotAAA6AAAgDEEBaiEMDAELC0EAIQwgCCwAACIJQQBIDQIgCEEwaiEDIARBMCAEQTBLG0EwayEIA0AgDEEwRgRAIABBoAFqIgQgABC+ASMAQYABayIDJAAgARBnIAEgAEHoAGoQwAEgAUFAayIIIAQQwAEgAUGAAWoQygEgARBCIAMgARBPIANBQGsiBCAIEJABIAQQTCAEIAMQWEUEQCABEJIBCyADQYABaiQADAULIAggDEYNAiAAIAxqIAMgDGotAAA6AAAgDEEBaiEMDAALAAsgBCAEQYiBwAAQOwALIAxBMGogBEGogcAAEDsACyMAQcABayIDJAAgAEGgAWoiBBBnIANBOBDQASIDQQE2AjggBCAAQegAahDAASAEEEIgBEGAAWoQygEgA0FAayIIIAQQTwJAAkACQCAIIAMQWkEBRgRAIANBgAFqIgggA0FAayADECMgCBBWDQEMAgsgBBCSAQwCCyADQYABaiIIEEMgCBBCCyAEQUBrIANBgAFqEK4BCyADQcABaiQAIAlBIHEiA0EAIABB4AFqEE0iBEEBRxtBASADIARBAUdyGwRAIABBoAFqEKQBCyABIABBoAFqQcABENEBGgsgAEHgAmokAAJ/QQAhAyMAQcAFayIAJAACQCABEIYBDQAgAEEIaiIIQZCtwAAQSSAAQYAEaiIEQbiuwAAQSSAAQUBrIgkgBBCOASAAQYABaiIEEGcgBCABEHggBCAJEEogAEHAAmoiBCABIAgQvQEgASAEECQNACAAQYAEaiIEIABBwAJqIgEgAEEIahC9ASABIARBwAEQ0QEaIAEQpAEgAEGAAWogARAkRQ0AQQEhAwsgAEHABWokAEF/IANFDQAaIAJBwAFqEKQBIAJBgANqIQhBACEAIwBB4ARrIgEkACABQeAAENABIQECQCAFBEADQCAAQeAARgRAIAEgAS0AAEEfcToAACABQeAAaiABEB9BACEAAkAgDSwAACILQQBOBEAgDUHgAGohAyAFQeAAIAVB4ABLG0HgAGshBANAIABB4ABGBEAgAUHgAWoiACABEB8gCCABQeAAaiAAED8MAwsgACAERwRA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AWoQmQEgACAEEBEgAEGAAWoiASAFQYABahCZASABIAgQESAAIAEQeg0BC0EADAELQQELIQEgAEGAAmokACANQcAHaiQAQX8gAUUNABojAEHgA2siACQAIABBgAFqIgFBwKjAABBJIABBuAFqIgNB+KjAABBJIAAgASADEEsgAEHwAmoiAUGwqcAAEEkgAEGoA2oiA0HoqcAAEEkgAEHwAWoiBCABIAMQSyACQYAGaiIBIAAgBBA/IABB4ANqJAAgAkGACWohByACQYADaiEIIwBBkDRrIgAkACAAQYAoaiIDQcitwAAQSSAAQYguaiIEQYCuwAAQSSAAIAMgBBBLIABBgAFqQTgQ0AEaIABBuAFqQTgQ0AEaIABB8AFqED0CQCACQcABaiIEEIYBRQRAIAIQhgEEQCAHIAEgBBAODAILIABB8ARqIgMQPSADIAEQfSADEEcgAEHwB2oiBRBnIAUgBBB4IAUQRiAAQbAJaiIEED0gBCAIEH0gBBBHIABBsAxqIggQZyAIIAIQeCAIEEYgAEGILmoiASAFEJABIABB8A1qIAEQkAEgASAAQbAIahCQASAAQbAOaiABEJABIAEgCBCQASAAQfAOaiABEJABIAEgAEHwDGoQkAEgAEGwD2ogARCQASAAQfAPaiIBED0gAEHwEmoiBRA9IABB8BVqEFUgASADEH0gBSAEEH0gAEH4G2oiARA9IAEgAxB9IAEQogEgAEH4HmoiARA9IAEgBBB9IAEQogEgAEG4AWogAEGAAWoQUEECayEBA0AgAUEBakEBTQRAIABB8BVqIgEQngEgByABQYgGENEBGgwDBSAAQfAVaiIEEBogAEH4IWoiAyAAQfAPaiAAQfANaiAAQbAOahALIABBgChqIgUgAEHwEmogAEHwDmogAEGwD2oQCyADIAUQAyAEIAMQAQJAAkACQCAAQbgBaiABEFMgAEGAAWogARBTa0EBag4DAQIAAgsgAEGILmoiAyAAQfAPaiAAQfAEaiAAQfANaiAAQbAOahAKIABB+CFqIgQgA0GIBhDRARogAyAAQfASaiAAQbAJaiAAQfAOaiAAQbAPahAKIAQgAxADIABB8BVqIAQQAQwBCyAAQYguaiIDIABB8A9qIABB+BtqIABB8A1qIABBsA5qEAogAEH4IWoiBCADQYgGENEBGiADIABB8BJqIABB+B5qIABB8A5qIABBsA9qEAogBCADEAMgAEHwFWogBBABCyABQQFrIQEMAQsACwALIAcgCCACEA4LIABBkDRqJAAjAEHgH2siCCQAIAhB0BNqIgFByK3AABBJIAhB2BlqIg1BgK7AABBJIAggASANEEsgCEGAAWoiC0GQrcAAEEkgAkGID2oiACAHEGkgCEG4AWoiBSAAEGkjAEGACGsiAyQAIAMgBRCMASADQYACaiIJIAVBgAJqIg8QjAEgA0GABGoiCiAFEIwBIANBgAZqIgRBOBDQARogA0EBNgK4BiADQcAGakE4ENABGiADQfgGakEBNgIAIANBgAdqQTgQ0AEaIANBuAdqQQE2AgAgA0HAB2pBOBDQARogA0H4B2pBATYCACAFEJ0BIAMQISAJIAVBgARqIgwQGCAJEGQgAyAJEHkgAxCwASAJIAwQlgEgCRAhIAkQZCAKIA8QGCAJIAoQeSAJELABIAogDxCWASAKECEgBCAFEJYBIAQgDBAYIAogBBB5IAoQsAEgBCAPEJYBIAQgChAYIAQQZCAFIAMQGCAEIAUQlwEgDCAJEBggDBBkIAQgDBCXASAEELABIwBBgAJrIgYkACAGIAQQXiAGQYABaiIQIARBgAFqIhIQXiAGEC0gEBAtIBAQfCAQEKkBIAYgEBB7IAYQPiAEIAYQESAGEDYgBhCpASASIAYQESAGQYACaiQAIAUgAxCWASAFIAQQGCAPIAkQlgEgDyAEEBggDCAKEJYBIAwgBBAYIAVBBTYCgAYgA0GACGokACAAEJ4BIAAgBRAHIAUgABBtIAAgCBAyIAAgCBAyIAAgBRAHIAhBwAdqIgQgABBpIAQQEyAEIAAQByANIAAgCxAbIAhByA1qIgMgDRBpIAMQngEgASAAEGkgARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gASAIEDIgACADEG0gACABEAcgDSAAIAsQGyADIA0QbSANIAMgCxAbIAMgDRBtIAEgABBtIAEgCBAyIAEgCBAyIAMgARAHIAEgABBtIAEQngEgACADEG0gACABEAcgACAEEAcgABCcASAIQeAfaiQAIAcgAEGIBhDRARpBACEAIwBBgAJrIgEkACABEGwCQCAHIAEQegR/IAdBgAFqIAFBgAFqEHoFQQALRQ0AIAdBgAJqEIcBRQ0AIAdBgARqEIcBIQALIAFBgAJqJABBACAADQAaQX8LIAJBkBVqJAAgDkEoahC0ASAOQSBqELQBIA5BGGoQtAEgDkEwaiQAC58BAgJ/BX4gAEEwaiICKQMAIAFBP3GtIgSGIQUgACkDKCIGQTogAWtBP3GtIgiHIQdBBiEBA38gAiAFIAeENwMAIAFBAU0EfyAAIAApAwAgBIZC//////////8DgzcDACAAKQMwQiSHpwUgAUEBayEBIAJBEGsiA0EIaiECIAYgBIZC//////////8DgyEHIAMpAwAiBiAIhyEFDAELCxoLiAECA34DfyMAQRBrIgUkAAN+IAZBOEYEfiAFQRBqJAAgAwUgBSAAIAZqIgcpAwAiAiACQj+HIAGsIgIgAkI/hxAvIAcgBSkDACIEIAN8IgJC//////////8DgzcDACACIARUrSAFQQhqKQMAIANCP4d8fEIGhiACQjqIhCEDIAZBCGohBgwBCwsLigECA38BfiMAQUBqIgIkACACQQhqIgEgABBdIAEQQiACQThqIQFBBiEDQdwCIQACQAJAA0AgA0EATgRAIAEpAwAiBEIAUg0CIAFBCGshASAAQTprIQAgA0EBayEDDAELC0EAIQAMAQsDQCAEUA0BIABBAWohACAEQgJ/IQQMAAsACyACQUBrJAAgAAuHAQEDfyMAQYACayIBJAAgABCwASABIAAQXiABQYABaiICQTgQ0AEaIAFBATYCuAEgAUHAAWpBOBDQARogAUH4AWpBATYCACABIABBgAFqIgMQmgEgARA2IAIgARCZASACIAMQmgEgAyABEJkBIAMgABCaASAAIAIQmQEgABCwASABQYACaiQAC30CBH4BfyABQT9xrSECQTogAWtBP3GtIQRBACEBIAApAwAiBSEDA38gAUEwRgR/IAAgACkDMCAChzcDMCAFQn8gAoZCf4WDpwUgACABaiIGIAMgAocgBkEIaikDACIDIASGQv//////////A4OENwMAIAFBCGohAQwBCwsaC2kBBH8jAEHAAWsiASQAIAEgABCQASABQUBrIgIgABCQASABQYABaiIDIABBQGsiBBCQASABIAQQdyACIAAQdyACEEIgBCACEEogAxBDIAAgAxB3IAEQQiAAEEIgACABEEogAUHAAWokAAuCAQIBfwF+IABB8AAQ0AEhAANAIAJBOEYEQAJAIAAgASkDMCIDQjqHNwM4IAAgA0L//////////wODNwMwIABBQGshAEEAIQIDQCACQTBGDQEgACACakIANwMAIAJBCGohAgwACwALBSAAIAJqIAEgAmopAwA3AwAgAkEIaiECDAELCwtuAQZ+IAAgA0L/////D4MiBSABQv////8PgyIGfiIHIAUgAUIgiCIIfiIJIAYgA0IgiCIGfnwiBUIghnwiCjcDACAAIAcgClatIAYgCH4gBSAJVK1CIIYgBUIgiIR8fCABIAR+IAIgA358fDcDCAtqAgF/BX4gASkDCCAAKQMAhSIGQgGGQgGHIQdBACACa6whCAN+IANBOEYEfiAFBSAAIANqIgIgAikDACIEIAaFIAEgA2opAwAgBIUgCIOFIgQgB4U3AwAgBCAFhSEFIANBCGohAwwBCwsaC18CAX8EfkIBIQNBMCECA38gAkF4RgR/IARCAYYgA3ynQQFrBSABIAJqKQMAIgUgACACaikDACIGfUI6hyADgyAEhCEEIAJBCGshAiAFIAaFQgF9QjqHIAODIQMMAQsLC2kBBH8jAEGAAmsiAiQAIAIgARBeIAJBgAFqIgMgARBeIAIQLSADIAIQESAAIAMQmAEgAEGAAmoiBCADEJgBIABBgARqIgUgAxCYASAEIAEQpgEgBSACEKYBIABBBTYCgAYgAkGAAmokAAtiAQJ/IwBBQGoiAiQAIAAQQiACIAAQkAECQCABBEAgACABEK4BDAELIAAQOgtBACEBA0AgA0UEQCAAEExBASABQQFqIAFBAUYiAxshAQwBCwsgACACEEogABAeIAJBQGskAAtnAQJ/IwBBQGoiAyQAAkAgASABQR91IgJqIAJzIgIgACgCOGxBgICAEE4EQCADIAIQOSAAIAMQSgwBCyAAIAIQKRogACAAKAI4IAJsNgI4CyABQQBIBEAgABBDIAAQQgsgA0FAayQAC2cAIABBAXYgAHIiAEECdiAAciIAQQR2IAByIgBBCHYgAHIiAEEQdiAAciIAIABBAXZB1arVqgVxayIAQQJ2QbPmzJkDcSAAQbPmzJkDcWoiAEEEdiAAakGPnrz4AHFBgYKECGxBGHYLYQEDfyMAQYABayIBJAAgASAAEJABIAFBQGsiAkE4ENABGiABQQE2AnggASAAQUBrIgMQdyABEEMgAiABEK4BIAIgAxB3IAMgARCuASADIAAQdyAAIAIQrgEgAUGAAWokAAtVAgJ/AX4jAEHwAGsiASQAIAFBwLLAABBJIAApAwAhAyABQThqIgIgABBdIABBARAsIAIgARBgIAIQQiACQQEQLCAAIAIgA0ICgacQMCABQfAAaiQAC5gBAQZ/IwBBwAFrIgMkACAAIAEQXiAAEC0gA0GIAWoiBkHop8AAEEkjAEFAaiIEJAAgA0EIaiICQTgQ0AEiBUEBNgI4IAVBQGtBOBDQASAFQfgAakEBNgIAIAQgBhCOASAFIAQQrgEQwQEgBEFAayQAIAIQqQEgAhB8IAIQqQEgACABEBEgACACEJoBIAAQtQEgA0HAAWokAAtZAQJ/IwBBQGoiAyQAIABBOBDQASIAQQE2AjgCQCABQQBOBEAgACABEJMBDAELIANBCGoiAkHAssAAEEkgAiABEJMBIAIQQiAAIAIQagsgABBUIANBQGskAAu9CAEKfyMAQYABayIHJAAgB0EIaiIDQcCywAAQSSADQQEQlAECQAJAA0AgAUEwRgRAIANBMGogAykDMEIBhzcDACADQThqIQEDQCACRQ0EIAFCADcDACACQQFrIQIgAUEIaiEBDAALAAsgAUE4Rg0BIAFBOEcEQCABIANqIAEgA2oiBEEIaikDAEI5hkL//////////wODIAQpAwBCAYeENwMAIAVBAWohBSABQQhqIQEMAQsLQQdBB0GEm8AAEDsACyAFQQdB9JrAABA7AAsgA0EBEJQBIANBARAsIAdBQGshBUEAIQIjAEGgCmsiASQAIAFBOBDQASIBQUBrQTgQ0AEhBiABQYABakE4ENABGiABQcABakE4ENABGiABQYACakE4ENABGiABQcACakE4ENABGiABQYADakE4ENABGiABQcADakE4ENABGiABQYAEakE4ENABGiABQcAEakE4ENABGiABQYAFakE4ENABGiABQcAFakE4ENABGiABQYAGakE4ENABGiABQcAGakE4ENABGiABQYAHakE4ENABGiABQcAHakE4ENABGiABQfgHakEBNgIAIAFBuAdqQQE2AgAgAUH4BmpBATYCACABQbgGakEBNgIAIAFB+AVqQQE2AgAgAUG4BWpBATYCACABQfgEakEBNgIAIAFBuARqQQE2AgAgAUH4A2pBATYCACABQbgDakEBNgIAIAFB+AJqQQE2AgAgAUG4AmpBATYCACABQfgBakEBNgIAIAFBuAFqQQE2AgAgAUH4AGpBATYCACABQQE2AjggAUGBCGpB5wAQ0AEaIAFB6AhqIgQgABCQASAEEEIgAUGoCWoiBCADEF0gBBBCIAQQKkEDaiIIQQJ2IgNBAWohCQJAA0AgAiAJRgRAIAEQygEgBiABQegIahCuASABQeAJakE4ENABGiABQQE2ApgKQYB5IQIMAgsgAUGoCWoiBCAEQQQQjwEiChCUASAEEEIgAkHnAEcEQCABQYEIaiACaiAKOgAAIAFBqAlqQQQQLCACQQFqIQIMAQsLQecAQecAQaC0wAAQOwALA0AgAgRAIAFB4AlqIgQgASACaiIGQcAHahCuASAGQYAIaiIGIAQQrgEgBiABQegIahBKIAJBQGshAgwBCwsCQAJAAkACQCAIQZwDSQRAIAFBgQhqIANqLAAAIgJBEE8NASAFIAEgAkEGdGoQkAEgA0EBayICQeYASyEEA0AgAkF/Rg0DIAUQTCAFEEwgBRBMIAUQTCAEDQQgAUGBCGogAmotAAAiA0EQSQRAIAUgASADQQZ0ahBKIAJBAWshAgwBCwsgA0EYdEEYdUEQQeC0wAAQOwALIANB5wBBsLTAABA7AAsgAkEQQcC0wAAQOwALIAUQHiABQaAKaiQADAELIAJB5wBB0LTAABA7AAsgACAFEK4BIAdBgAFqJAALbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYCACADQSxqQQE2AgAgA0ICNwIMIANB2LjAADYCCCADQQE2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEGYAC2UBAn8gACAAKAIAIgJBCGoiAzYCACAAIAJBA3ZBPHFqQShqIgIgAUH/AXEgAigCAEEIdHI2AgACQAJAIANFBEAgAEEANgIAIAAgACgCBEEBajYCBAwBCyADQf8DcQ0BCyAAEA8LC1wAIABBOBDQASIAQQE2AjggAEFAa0E4ENABGiAAQfgAakEBNgIAIABBgAFqEFEgAEGAAmpBOBDQARogAEG4AmpBATYCACAAQcACakE4ENABGiAAQfgCakEBNgIAC1sBA38jAEGAAWsiASQAIAAQqQEgASAAEJABIAFBQGsiAiAAQUBrIgMQkAEgARBMIAIQTCABIAIQdyABQQAQMyAAIAEQSiABEEMgARBCIAMgARBKIAFBgAFqJAALYQEBfyMAQYACayIDJAAgABA9IAAgARCZASAAQYABaiIBIAIQmQEgAEGAAmoQtwEgABCpASADIAAQOCADQYABaiICIAEQXiACEC0gAiADEHpFBEAgABCbAQsgA0GAAmokAAtUAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqIAJBCGoQDCACQSBqJAALZwAjAEEwayIBJABBpLvAAC0AAARAIAFBHGpBATYCACABQgI3AgwgAUGQtsAANgIIIAFBATYCJCABIAA2AiwgASABQSBqNgIYIAEgAUEsajYCICABQQhqQbi2wAAQZgALIAFBMGokAAtiAgF+An8gACkDACEBA34gACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkEoRgR+IAAgACkDMCABfCIBNwMwIAFCJIcFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLGgt8AQV/IwBBQGoiAyQAIANBCGoiAkHAssAAEEkgAiAAKAI4QQFrEDUiBBAoA0AgAUE4RwRAIAAgAWoiBSABIAJqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAEEBIARBAWp0IgI2AjggAkH///8PSgRAIAAQHgsgA0FAayQAC3sBAn8gAEEoaiECA0AgAUGAAkYEQCAAQufMp9DW0Ouzu383AgggAEIANwIAIABBIGpCq7OP/JGjs/DbADcCACAAQRhqQv+kuYjFkdqCm383AgAgAEEQakLy5rvjo6f9p6V/NwIABSABIAJqQQA2AgAgAUEEaiEBDAELCwtUACAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQARogAEH4AGpBATYCACAAQYABakE4ENABGiAAQbgBakEBNgIAIABBwAFqQTgQ0AEaIABB+AFqQQE2AgALWAECfyMAQUBqIgEkAAJAIAAQhgENACABQQEQOSAAQYABaiICIAEQWA0AIAJBABAzIAAgAhBKIAAQHiAAQUBrIgAgAhBKIAAQHiACIAEQrgELIAFBQGskAAtZAQJ/IwBBgAFrIgEkAAJAIAAQigENACABEFEgAEGAAmoiAiABEHoNACACED4gACACEBEgABC1ASAAQYABaiIAIAIQESAAELUBIAIgARCZAQsgAUGAAWokAAtbAgF+An8gACkDACEBA0AgACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkHgAEYEQCAAIAApA2ggAXw3A2gFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLC08BAX8gAEE4ENABGgJAA0AgAkEHRwRAIAJBB0YNAiAAIAEpAwA3AwAgAEEIaiEAIAFBCGohASACQQFqIQIMAQsLDwtBB0EHQeSawAAQOwALVAECfyMAQbABayICJAAgATQCOCAANAI4fkL///8PVQRAIAAQHgsgAkEIaiIDIAAgARAFIAJB+ABqIgEgAxBrIAAgARBqIABBAjYCOCACQbABaiQAC1EBAn8jAEFAaiIDJAAgAEE4ENABIgBBATYCOCAAQUBrQTgQ0AEgAEH4AGpBATYCACADIAEQjgEgACADEK4BIAMgAhCOASADEK4BIANBQGskAAvwDAIRfwh+IwBBsAFrIg8kACAANAI4IhIgEn5C////D1YEQCAAEB4LIwBB0AFrIgEkACAPQQhqIgZBCGpB0AAQ0AEaIAFBwAFqIAApAwAiFyAXQj+HIhYgFyAWEC8gBiABKQPAASISQv//////////A4M3AwAgAUHIAWopAwAiFUIGhiASQjqIhCETIBVCOoghGCAAQQhqIgwhDSAAIQlBASEKQQEhBwJAA0AgCkEERgRAIABBGGohCiAAQRBqIQkgAEEoaiEMIAApAzAhF0EHIQUgAUHIAGohCwNAIAVBC0kEQCABQUBrIAVBA3QiCCAAakEwaykDACISIBJCP4cgFyAXQj+HIhYQLyAFQQFqIg1BAXYhByALKQMAIRUgASkDQCESIAkhAiAMIQQgBUEFayIOIQMDQCADIAdJBEAgASACKQMAIhQgFEI/hyAEKQMAIhQgFEI/hxAvIAEpAwAiFCASfCISIBRUrSABQQhqKQMAIBV8fCEVIAJBCGohAiAEQQhrIQQgA0EBaiEDDAELCyAGIAhqIBJCAYYiFCATfCITQv//////////A4M3AwAgAUEwaiAAIA5BA3RqKQMAIhkgGUI/hyAXIBYQLyATIBRU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aikDADcDACACQQhqIQIMAQsLC4QJAg1/Cn4jAEFAaiILJAAgC0EIaiIJQcCywAAQSSMAQZACayICJAAgAEEwENABIQogAkHoAGpB8AAQ0AEaIAJB4AFqQTAQ0AEaIAoQcSACIAEiDCkDACIQQv3/8//P///5AX5C//////////8DgyISNwPYASACQdgAaiASQgAgCSkDACIXIBdCP4ciGBAvIBAgAikDWCIPfCITIA9UrSACQeAAaikDACAQQj+HfHwiEEI6hyABKQMIIg9CP4d8IA8gEEIGhiATQjqIhCITfCIQIBNUrXwhD0EBIQBCACETAkACQANAAkAgAEEHRgRAQQYhB0EAIQhBByEADAELIABBAXYiAUEBaiEGIAggAWshAyABQQN0IgFBCGohBCAHIAFrIQUgAkHIAGogCSAAQQN0Ig1qKQMAIhUgFUI/hyIWIBJCABAvIAJB0ABqKQMAIBAgECATfCIRVq0gDyAUfHx8IBEgAikDSHwiDyARVK18IRAgAEEBaiEBA0AgACAGTQRAIAJB2AFqIA1qIA9C/f/z/8////kBfkL//////////wODIhE3AwAgAkE4aiARQgAgFyAYEC8gAkEoaiARQgAgFSAWEC8gAkHoAGogAEEEdGoiACACQTBqKQMAIhE3AwggACACKQMoIhU3AwAgDyACKQM4IhZ8Ig8gFlStIAJBQGspAwAgEHx8IhBCOocgDCABQQN0aikDACIWQj+HfCAWIBBCBoYgD0I6iIQiD3wiECAPVK18IQ8gEyAVfCITIBVUrSARIBR8fCEUIAdBCGohByAIQQFqIQggASEADAMLIANBB08NAyACQRhqIAQgCWopAwAgBSAJaikDAH0iESARQj+HIAJB2AFqIg4gBWopAwAgBCAOaikDAH0iESARQj+HEC8gAikDGCIRIA98Ig8gEVStIAJBIGopAwAgEHx8IRAgBkEBaiEGIARBCGohBCAFQQhrIQUgA0EBayEDDAALAAsLA0ACQAJAIABBDUcEQCAHIABBAXYiBmshAyAIIAZBA3QiAWshBCABQQhqIQUgDyAUfCAQIBN8Ig8gEFStfCEQIABBAWohAQNAIAZBBUsNAyADQQdPDQIgAkEIaiAFIAlqKQMAIAQgCWpBMGopAwB9IhIgEkI/hyACIARqQYgCaikDACACQdgBaiAFaikDAH0iEiASQj+HEC8gAikDCCISIA98Ig8gElStIAJBEGopAwAgEHx8IRAgBkEBaiEGIARBCGshBCADQQFrIQMgBUEIaiEFDAALAAsgCiAQQv//////////A4M3AzAgAkGQAmokAAwECyADQQdBpJzAABA7AAsgAEEDdCAKakE4ayAPQv//////////A4M3AwAgEEI6hyAMIAFBA3RqKQMAIhJCP4d8IBIgEEIGhiAPQjqIhCIPfCIQIA9UrXwhDyAUIABBBHQgAmpBCGoiAEEIaikDAH0gEyAAKQMAIhJUrX0hFCAIQQhqIQggB0EBaiEHIBMgEn0hEyABIQAMAAsACyADQQdBlJzAABA7AAsgC0FAayQACy4BAX8jAEGAAWsiASQAIAAQRSABEFEgACABEJkBIABBgAFqELYBIAFBgAFqJAALMwAgACABEJYBIABBgAJqIAFBgAJqEJYBIABBgARqIAFBgARqEJYBIAAgASgCgAY2AoAGCygAIAAgASACEHIgAEFAayABQUBrIAIQciAAQYABaiABQYABaiACEHILLQAgACABIAIQjQEgAEGAAWogAUGAAWogAhCNASAAQYACaiABQYACaiACEI0BCycBAn8jAEFAaiICJAAgAkEIaiIDIAEQvgEgACADEI4BIAJBQGskAAsiAQF/A0AgAUE4RwRAIAAgAWpCADcDACABQQhqIQEMAQsLCyUAIAAgASACEDAgAEEAIAJrIAAoAjgiACABKAI4c3EgAHM2AjgLJwAgACAAKAIEQQFxIAFyQQJyNgIEIAAgAWoiACAAKAIEQQFyNgIECyMAA0AgAgRAIAAgAS0AABA8IAJBAWshAiABQQFqIQEMAQsLCywAIAAQiwEgACABEJYBIABBgAJqIAIQlgEgAEGABGogAxCWASAAQQU2AoAGCyMBAX8jAEFAaiIBJAAgASAAEJABIAEQHiABEFcgAUFAayQACykAIAAgARBgIAAgACgCOCABKAI4aiIBNgI4IAFB////D0oEQCAAEB4LCyUAIAAgARCuASAAQUBrIAFBQGsQrgEgAEGAAWogAUGAAWoQrgELKAEBfyMAQYACayICJAAgAiABEIwBIAIQKyAAIAIQlwEgAkGAAmokAAscAQF/IAAgARBYBH8gAEFAayABQUBrEFgFQQALCycBAX8jAEGAAWsiAiQAIAIg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DCELDQALCyAMpyICQeMASwRAIABBAmsiACAGQQlqaiAMpyICIAJB//8DcUHkAG4iAkHkAGxrQf//A3FBAXRB6LjAAGovAAA7AAALAkAgAkEKTwRAIABBAmsiACAGQQlqaiACQQF0Qei4wABqLwAAOwAADAELIABBAWsiACAGQQlqaiACQTBqOgAACwJ/IAZBCWogAGohCEErQYCAxAAgASgCACIDQQFxIgIbIQQgAkEnIABrIglqIQJBlLjAAEEAIANBBHEbIQUCQAJAIAEoAghFBEBBASEAIAEgBCAFEFINAQwCCwJAAkACQAJAIAIgAUEMaigCACIDSQRAIAEtAABBCHENBEEAIQAgAyACayICIQNBASABLQAgIgcgB0EDRhtBA3FBAWsOAgECAwtBASEAIAEgBCAFEFINBAwFC0EAIQMgAiEADAELIAJBAXYhACACQQFqQQF2IQMLIABBAWohACABQRxqKAIAIQcgASgCBCECIAEoAhghCgJAA0AgAEEBayIARQ0BIAogAiAHKAIQEQQARQ0AC0EBDAQLQQEhACACQYCAxABGDQEgASAEIAUQUg0BIAEoAhggCCAJIAEoAhwoAgwRBQANASABKAIcIQQgASgCGCEBQQAhAAJ/A0AgAyAAIANGDQEaIABBAWohACABIAIgBCgCEBEEAEUNAAsgAEEBawsgA0khAAwBCyABKAIEIQcgAUEwNgIEIAEtACAhCkEBIQAgAUEBOgAgIAEgBCAFEFINAEEAIQAgAyACayICIQMCQAJAAkBBASABLQAgIgQgBEEDRhtBA3FBAWsOAgABAgtBACEDIAIhAAwBCyACQQF2IQAgAkEBakEBdiEDCyAAQQFqIQAgAUEcaigCACECIAEoAgQhBCABKAIYIQUCQANAIABBAWsiAEUNASAFIAQgAigCEBEEAEUNAAtBAQwDC0EBIQAgBEGAgMQARg0AIAEoAhggCCAJIAEoAhwoAgwRBQANACABKAIcIQAgASgCGCEFQQAhAgJAA0AgAiADRg0BIAJBAWohAiAFIAQgACgCEBEEAEUNAAtBASEAIAJBAWsgA0kNAQsgASAKOgAgIAEgBzYCBEEADAILIAAMAQsgASgCGCAIIAkgAUEcaigCACgCDBEFAAsgBkEwaiQACwsAIAAQNiAAELABCysCAX8BfkIBIQIDQCAAIAFq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AAANAEHgs8AAC8EHYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAAAAAABhdHRlbXB0IHRvIGRpdmlkZSB3aXRoIG92ZXJmbG93ALAZEAASAAAADAIAAA0AAACwGRAAEgAAABgCAAAmAAAAsBkQABIAAAAYAgAAIwAAALAZEAASAAAAHgIAABcAAACwGRAAEgAAAB4CAAAUAAAAqqr//////gHu//9UrP//AupBYg9rDyoBw5z9ShTOEwJLd2TXrEtDAu3pxpKm+V8Cox4RoAEAAAADAAAABAAAAAQAAAAEAAAABQAAAAYAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlbWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAoAAOsaEAAVAAAAABsQAA4AAABsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnMgGxAAGAAAAEkBAAAJAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5yc0gbEAAcAAAARgIAAB8AAABIGxAAHAAAAEcCAAAeAAAABwAAAAwAAAAEAAAACAAAAAMAAAAIAAAABAAAAAkAAAAKAAAAEAAAAAQAAAALAAAADAAAAAMAAAAIAAAABAAAAA0AAAAOAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93AAAA6BsQABEAAADMGxAAHAAAAAUCAAAFAAAAEAAAAAAAAAABAAAAEQAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAAkHBAAIAAAAEQcEAASAAAAMDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5yc3JhbmdlIGVuZCBpbmRleCAAAABxHRAAEAAAADAdEAAiAAAAUh0QAB8AAABJAAAABQB7CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS42MS4wIChmZTViMTNkNjggMjAyMi0wNS0xOCkGd2FscnVzBjAuMTkuMAx3YXNtLWJpbmRnZW4SMC4yLjgxICgwNjJhYTVmNzAp";
let rt;
const fg = _s(gg);
function cg() {
  return rt.bls_init();
}
let rr = null;
function Ig() {
  return (
    (rr === null || rr.buffer !== rt.memory.buffer) &&
      (rr = new Uint8Array(rt.memory.buffer)),
    rr
  );
}
function kr(t, A) {
  const e = A(t.length * 1);
  return Ig().set(t, e / 1), [e, t.length];
}
function Bg(t, A, e) {
  const [r, a] = kr(t, rt.__wbindgen_malloc),
    [c, E] = kr(A, rt.__wbindgen_malloc),
    [u, y] = kr(e, rt.__wbindgen_malloc);
  return rt.bls_verify(r, a, c, E, u, y);
}
async function Eg(t, A) {
  if (typeof Response == "function" && t instanceof Response) {
    const e = await t.arrayBuffer();
    return await WebAssembly.instantiate(e, A);
  } else {
    const e = await WebAssembly.instantiate(t, A);
    return e instanceof WebAssembly.Instance ? { instance: e, module: t } : e;
  }
}
async function Fs() {
  const t = {},
    { instance: A, module: e } = await Eg(fg, t);
  return (rt = A.exports), (Fs.__wbindgen_wasm_module = e), rt;
}
let Lr;
async function ug(t, A, e) {
  if (!Lr) {
    if ((await Fs(), cg() !== 0)) throw new Error("Cannot initialize BLS");
    Lr = (r, a, c) => Bg(a, c, r) === 0;
  }
  return Lr(t, A, e);
}
const Rs = (t) => ye(new vt(t)),
  Ts = (t) => {
    const A = Rs(t);
    return new Date(Number(A) / 1e6);
  };
class _t extends it {
  constructor(A) {
    super(`Invalid certificate: ${A}`);
  }
}
function Ms(t, A) {
  if (t.byteLength !== A.byteLength) return !1;
  const e = new Uint8Array(t),
    r = new Uint8Array(A);
  for (let a = 0; a < e.length; a++) if (e[a] !== r[a]) return !1;
  return !0;
}
class Pt {
  constructor(A, e, r, a, c = 5) {
    (this._rootKey = e),
      (this._canisterId = r),
      (this._blsVerify = a),
      (this._maxAgeInMinutes = c),
      (this.cert = Ct(new Uint8Array(A)));
  }
  static async create(A) {
    let e = A.blsVerify;
    e || (e = ug);
    const r = new Pt(
      A.certificate,
      A.rootKey,
      A.canisterId,
      e,
      A.maxAgeInMinutes
    );
    return await r.verify(), r;
  }
  lookup(A) {
    return Gs(A, this.cert.tree);
  }
  async verify() {
    const A = await cr(this.cert.tree),
      e = await this._checkDelegationAndGetKey(this.cert.delegation),
      r = this.cert.signature,
      a = Qg(e),
      c = Xe(Jt("ic-state-root"), A);
    let E = !1;
    const u = this.lookup(["time"]);
    if (!u) throw new _t("Certificate does not contain a time");
    const y = 5 * 60 * 1e3,
      m = this._maxAgeInMinutes * 60 * 1e3,
      L = Date.now(),
      U = L - m,
      eA = L + y,
      T = Ts(u);
    if (T.getTime() < U)
      throw new _t(
        `Certificate is signed more than ${this._maxAgeInMinutes} minutes in the past. Certificate time: ` +
          T.toISOString() +
          " Current time: " +
          new Date(L).toISOString()
      );
    if (T.getTime() > eA)
      throw new _t(
        "Certificate is signed more than 5 minutes in the future. Certificate time: " +
          T.toISOString() +
          " Current time: " +
          new Date(L).toISOString()
      );
    try {
      E = await this._blsVerify(
        new Uint8Array(a),
        new Uint8Array(r),
        new Uint8Array(c)
      );
    } catch {
      E = !1;
    }
    if (!E) throw new _t("Signature verification failed");
  }
  async _checkDelegationAndGetKey(A) {
    if (!A) return this._rootKey;
    const e = await Pt.create({
        certificate: A.certificate,
        rootKey: this._rootKey,
        canisterId: this._canisterId,
        blsVerify: this._blsVerify,
        maxAgeInMinutes: 60 * 24 * 30,
      }),
      r = e.lookup(["subnet", A.subnet_id, "canister_ranges"]);
    if (!r)
      throw new _t(
        `Could not find canister ranges for subnet 0x${Et(A.subnet_id)}`
      );
    if (
      !Ct(r)
        .map((y) => [ie.fromUint8Array(y[0]), ie.fromUint8Array(y[1])])
        .some((y) => y[0].ltEq(this._canisterId) && y[1].gtEq(this._canisterId))
    )
      throw new _t(
        `Canister ${
          this._canisterId
        } not in range of delegations for subnet 0x${Et(A.subnet_id)}`
      );
    const u = e.lookup(["subnet", A.subnet_id, "public_key"]);
    if (!u)
      throw new Error(
        `Could not find subnet key for subnet 0x${Et(A.subnet_id)}`
      );
    return u;
  }
}
const Yt = hr(
    "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100"
  ),
  hg = 96;
function Qg(t) {
  const A = Yt.byteLength + hg;
  if (t.byteLength !== A)
    throw new TypeError(`BLS DER-encoded public key must be ${A} bytes long`);
  const e = t.slice(0, Yt.byteLength);
  if (!Ms(e, Yt))
    throw new TypeError(
      `BLS DER-encoded public key is invalid. Expect the following prefix: ${Yt}, but get ${e}`
    );
  return t.slice(Yt.byteLength);
}
async function cr(t) {
  switch (t[0]) {
    case 0:
      return Pe(Jt("ic-hashtree-empty"));
    case 4:
      return t[1];
    case 3:
      return Pe(Xe(Jt("ic-hashtree-leaf"), t[1]));
    case 2:
      return Pe(Xe(Jt("ic-hashtree-labeled"), t[1], await cr(t[2])));
    case 1:
      return Pe(Xe(Jt("ic-hashtree-fork"), await cr(t[1]), await cr(t[2])));
    default:
      throw new Error("unreachable");
  }
}
function Jt(t) {
  const A = new Uint8Array([t.length]),
    e = new TextEncoder().encode(t);
  return Xe(A, e);
}
function Gs(t, A) {
  if (t.length === 0)
    switch (A[0]) {
      case 3:
        return new Uint8Array(A[1]).buffer;
      default:
        return;
    }
  const e = typeof t[0] == "string" ? new TextEncoder().encode(t[0]) : t[0],
    r = lg(e, In(A));
  if (r) return Gs(t.slice(1), r);
}
function In(t) {
  switch (t[0]) {
    case 0:
      return [];
    case 1:
      return In(t[1]).concat(In(t[2]));
    default:
      return [t];
  }
}
function lg(t, A) {
  if (A.length !== 0) {
    for (const e of A)
      if (e[0] === 2) {
        const r = e[1];
        if (Ms(t, r)) return e[2];
      }
  }
}
const Cg = 5 * 60 * 1e3;
function dg() {
  return Sg(pg(wg(), 1e3), xg(1e3, 1.2), yg(Cg));
}
function wg() {
  let t = !0;
  return async () => (t ? ((t = !1), !0) : !1);
}
function pg(t, A) {
  return async (e, r, a) => {
    if (await t(e, r, a)) return new Promise((c) => setTimeout(c, A));
  };
}
function yg(t) {
  const A = Date.now() + t;
  return async (e, r, a) => {
    if (Date.now() > A)
      throw new Error(`Request timed out after ${t} msec:
  Request ID: ${Et(r)}
  Request status: ${a}
`);
  };
}
function xg(t, A) {
  let e = t;
  return () =>
    new Promise((r) =>
      setTimeout(() => {
        (e *= A), r();
      }, e)
    );
}
function Sg(...t) {
  return async (A, e, r) => {
    for (const a of t) await a(A, e, r);
  };
}
async function Us(t, A, e, r, a, c) {
  var E;
  const u = [new TextEncoder().encode("request_status"), e],
    y =
      a ??
      (await ((E = t.createReadStateRequest) === null || E === void 0
        ? void 0
        : E.call(t, { paths: [u] }))),
    m = await t.readState(A, { paths: [u] }, void 0, y);
  if (t.rootKey == null)
    throw new Error("Agent root key not initialized before polling");
  const L = await Pt.create({
      certificate: m.certificate,
      rootKey: t.rootKey,
      canisterId: A,
      blsVerify: c,
    }),
    U = L.lookup([...u, new TextEncoder().encode("status")]);
  let eA;
  switch (
    (typeof U > "u" ? (eA = tt.Unknown) : (eA = new TextDecoder().decode(U)),
    eA)
  ) {
    case tt.Replied:
      return L.lookup([...u, "reply"]);
    case tt.Received:
    case tt.Unknown:
    case tt.Processing:
      return await r(A, e, eA), Us(t, A, e, r, y);
    case tt.Rejected: {
      const T = new Uint8Array(L.lookup([...u, "reject_code"]))[0],
        sA = new TextDecoder().decode(L.lookup([...u, "reject_message"]));
      throw new Error(`Call was rejected:
  Request ID: ${Et(e)}
  Reject code: ${T}
  Reject text: ${sA}
`);
    }
    case tt.Done:
      throw new Error(`Call was marked as done but we never saw the reply:
  Request ID: ${Et(e)}
`);
  }
  throw new Error("unreachable");
}
const Dg = ({ IDL: t }) => {
  const A = t.Principal,
    e = t.Record({
      controllers: t.Vec(t.Principal),
      freezing_threshold: t.Nat,
      memory_allocation: t.Nat,
      compute_allocation: t.Nat,
    }),
    r = t.Record({
      controllers: t.Opt(t.Vec(t.Principal)),
      freezing_threshold: t.Opt(t.Nat),
      memory_allocation: t.Opt(t.Nat),
      compute_allocation: t.Opt(t.Nat),
    }),
    a = t.Vec(t.Nat8);
  return t.Service({
    canister_status: t.Func(
      [t.Record({ canister_id: A })],
      [
        t.Record({
          status: t.Variant({
            stopped: t.Null,
            stopping: t.Null,
            running: t.Null,
          }),
          memory_size: t.Nat,
          cycles: t.Nat,
          settings: e,
          module_hash: t.Opt(t.Vec(t.Nat8)),
        }),
      ],
      []
    ),
    create_canister: t.Func(
      [t.Record({ settings: t.Opt(r) })],
      [t.Record({ canister_id: A })],
      []
    ),
    delete_canister: t.Func([t.Record({ canister_id: A })], [], []),
    deposit_cycles: t.Func([t.Record({ canister_id: A })], [], []),
    install_code: t.Func(
      [
        t.Record({
          arg: t.Vec(t.Nat8),
          wasm_module: a,
          mode: t.Variant({
            reinstall: t.Null,
            upgrade: t.Null,
            install: t.Null,
          }),
          canister_id: A,
        }),
      ],
      [],
      []
    ),
    provisional_create_canister_with_cycles: t.Func(
      [t.Record({ settings: t.Opt(r), amount: t.Opt(t.Nat) })],
      [t.Record({ canister_id: A })],
      []
    ),
    provisional_top_up_canister: t.Func(
      [t.Record({ canister_id: A, amount: t.Nat })],
      [],
      []
    ),
    raw_rand: t.Func([], [t.Vec(t.Nat8)], []),
    start_canister: t.Func([t.Record({ canister_id: A })], [], []),
    stop_canister: t.Func([t.Record({ canister_id: A })], [], []),
    uninstall_code: t.Func([t.Record({ canister_id: A })], [], []),
    update_settings: t.Func(
      [t.Record({ canister_id: t.Principal, settings: r })],
      [],
      []
    ),
  });
};
class vs extends it {
  constructor(A, e, r, a) {
    super(
      [
        "Call failed:",
        `  Canister: ${A.toText()}`,
        `  Method: ${e} (${r})`,
        ...Object.getOwnPropertyNames(a).map(
          (c) => `  "${c}": ${JSON.stringify(a[c])}`
        ),
      ].join(`
`)
    ),
      (this.canisterId = A),
      (this.methodName = e),
      (this.type = r),
      (this.props = a);
  }
}
class mg extends vs {
  constructor(A, e, r) {
    var a;
    super(A, e, "query", {
      Status: r.status,
      Code:
        (a = Xr[r.reject_code]) !== null && a !== void 0
          ? a
          : `Unknown Code "${r.reject_code}"`,
      Message: r.reject_message,
    }),
      (this.result = r);
  }
}
class bg extends vs {
  constructor(A, e, r, a) {
    super(
      A,
      e,
      "update",
      Object.assign(
        { "Request ID": Et(r) },
        a.body
          ? Object.assign(
              Object.assign(
                {},
                a.body.error_code ? { "Error code": a.body.error_code } : {}
              ),
              {
                "Reject code": String(a.body.reject_code),
                "Reject message": a.body.reject_message,
              }
            )
          : {
              "HTTP status code": a.status.toString(),
              "HTTP status text": a.statusText,
            }
      )
    ),
      (this.requestId = r),
      (this.response = a);
  }
}
var Bn;
(function (t) {
  (t.Install = "install"), (t.Reinstall = "reinstall"), (t.Upgrade = "upgrade");
})(Bn || (Bn = {}));
const Ye = Symbol.for("ic-agent-metadata");
class Fn {
  constructor(A) {
    this[Ye] = Object.freeze(A);
  }
  static agentOf(A) {
    return A[Ye].config.agent;
  }
  static interfaceOf(A) {
    return A[Ye].service;
  }
  static canisterIdOf(A) {
    return ie.from(A[Ye].config.canisterId);
  }
  static async install(A, e) {
    const r = A.mode === void 0 ? Bn.Install : A.mode,
      a = A.arg ? [...new Uint8Array(A.arg)] : [],
      c = [...new Uint8Array(A.module)],
      E =
        typeof e.canisterId == "string"
          ? ie.fromText(e.canisterId)
          : e.canisterId;
    await jn(e).install_code({
      mode: { [r]: null },
      arg: a,
      wasm_module: c,
      canister_id: E,
    });
  }
  static async createCanister(A) {
    const { canister_id: e } = await jn(
      A || {}
    ).provisional_create_canister_with_cycles({ amount: [], settings: [] });
    return e;
  }
  static async createAndInstallCanister(A, e, r) {
    const a = await this.createCanister(r);
    return (
      await this.install(
        Object.assign({}, e),
        Object.assign(Object.assign({}, r), { canisterId: a })
      ),
      this.createActor(
        A,
        Object.assign(Object.assign({}, r), { canisterId: a })
      )
    );
  }
  static createActorClass(A, e) {
    const r = A({ IDL: Ka });
    class a extends Fn {
      constructor(E) {
        if (!E.canisterId)
          throw new it(
            `Canister ID is required, but recieved ${typeof E.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in {"OPENFPL_BACKEND_CANISTER_ID":"gl6nx-5maaa-aaaaa-qaaqq-cai","OPENFPL_FRONTEND_CANISTER_ID":"gc5gl-leaaa-aaaaa-qaara-cai","__CANDID_UI_CANISTER_ID":"gx2xg-kmaaa-aaaaa-qaasq-cai","PLAYER_CANISTER_CANISTER_ID":"gf4a7-g4aaa-aaaaa-qaarq-cai","TOKEN_CANISTER_CANISTER_ID":"gq3rs-huaaa-aaaaa-qaasa-cai","DFX_NETWORK":"local"} correctly.`
          );
        const u =
          typeof E.canisterId == "string"
            ? ie.fromText(E.canisterId)
            : E.canisterId;
        super({
          config: Object.assign(Object.assign(Object.assign({}, ks), E), {
            canisterId: u,
          }),
          service: r,
        });
        for (const [y, m] of r._fields)
          e?.httpDetails && m.annotations.push(En),
            (this[y] = Ng(this, y, m, E.blsVerify));
      }
    }
    return a;
  }
  static createActor(A, e) {
    if (!e.canisterId)
      throw new it(
        `Canister ID is required, but recieved ${typeof e.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in {"OPENFPL_BACKEND_CANISTER_ID":"gl6nx-5maaa-aaaaa-qaaqq-cai","OPENFPL_FRONTEND_CANISTER_ID":"gc5gl-leaaa-aaaaa-qaara-cai","__CANDID_UI_CANISTER_ID":"gx2xg-kmaaa-aaaaa-qaasq-cai","PLAYER_CANISTER_CANISTER_ID":"gf4a7-g4aaa-aaaaa-qaarq-cai","TOKEN_CANISTER_CANISTER_ID":"gq3rs-huaaa-aaaaa-qaasa-cai","DFX_NETWORK":"local"} correctly.`
      );
    return new (this.createActorClass(A))(e);
  }
  static createActorWithHttpDetails(A, e) {
    return new (this.createActorClass(A, { httpDetails: !0 }))(e);
  }
}
function nr(t, A) {
  const e = Fi(t, Ut.Buffer.from(A));
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0];
    default:
      return e;
  }
}
const ks = { pollingStrategyFactory: dg },
  En = "http-details";
function Ng(t, A, e, r) {
  let a;
  e.annotations.includes("query") || e.annotations.includes("composite_query")
    ? (a = async (E, ...u) => {
        var y, m;
        E = Object.assign(
          Object.assign({}, E),
          (m = (y = t[Ye].config).queryTransform) === null || m === void 0
            ? void 0
            : m.call(y, A, u, Object.assign(Object.assign({}, t[Ye].config), E))
        );
        const L = E.agent || t[Ye].config.agent || Wn(),
          U = ie.from(E.canisterId || t[Ye].config.canisterId),
          eA = en(e.argTypes, u),
          T = await L.query(U, { methodName: A, arg: eA });
        switch (T.status) {
          case "rejected":
            throw new mg(U, A, T);
          case "replied":
            return e.annotations.includes(En)
              ? {
                  httpDetails: T.httpDetails,
                  result: nr(e.retTypes, T.reply.arg),
                }
              : nr(e.retTypes, T.reply.arg);
        }
      })
    : (a = async (E, ...u) => {
        var y, m;
        E = Object.assign(
          Object.assign({}, E),
          (m = (y = t[Ye].config).callTransform) === null || m === void 0
            ? void 0
            : m.call(y, A, u, Object.assign(Object.assign({}, t[Ye].config), E))
        );
        const L = E.agent || t[Ye].config.agent || Wn(),
          {
            canisterId: U,
            effectiveCanisterId: eA,
            pollingStrategyFactory: T,
          } = Object.assign(
            Object.assign(Object.assign({}, ks), t[Ye].config),
            E
          ),
          sA = ie.from(U),
          QA = eA !== void 0 ? ie.from(eA) : sA,
          UA = en(e.argTypes, u),
          { requestId: YA, response: lA } = await L.call(sA, {
            methodName: A,
            arg: UA,
            effectiveCanisterId: QA,
          });
        if (!lA.ok || lA.body) throw new bg(sA, A, YA, lA);
        const MA = T(),
          qA = await Us(L, QA, YA, MA, r),
          GA = e.annotations.includes(En);
        if (qA !== void 0)
          return GA
            ? { httpDetails: lA, result: nr(e.retTypes, qA) }
            : nr(e.retTypes, qA);
        if (e.retTypes.length === 0)
          return GA ? { httpDetails: lA, result: void 0 } : void 0;
        throw new Error(
          `Call was returned undefined, but type [${e.retTypes.join(",")}].`
        );
      });
  const c = (...E) => a({}, ...E);
  return (
    (c.withOptions =
      (E) =>
      (...u) =>
        a(E, ...u)),
    c
  );
}
function jn(t) {
  function A(e, r, a) {
    const c = r[0];
    let E = ie.fromHex("");
    return (
      c &&
        typeof c == "object" &&
        c.canister_id &&
        (E = ie.from(c.canister_id)),
      { effectiveCanisterId: E }
    );
  }
  return Fn.createActor(
    Dg,
    Object.assign(
      Object.assign(Object.assign({}, t), { canisterId: ie.fromHex("") }),
      { callTransform: A, queryTransform: A }
    )
  );
}
const _g = async (t) => {
    const { canisterId: A, agent: e, paths: r } = t,
      a = [...new Set(r)],
      c = a.map((y) => un(y, A)),
      E = new Map(),
      u = a.map((y, m) =>
        (async () => {
          var L;
          try {
            const U = await e.readState(A, { paths: [c[m]] }),
              T = (
                await Pt.create({
                  certificate: U.certificate,
                  rootKey: e.rootKey,
                  canisterId: A,
                })
              ).lookup(un(a[m], A));
            if (!T)
              console.warn(
                `Expected to find result for path ${y}, but instead found nothing.`
              ),
                typeof y == "string" ? E.set(y, null) : E.set(y.key, null);
            else
              switch (y) {
                case "time": {
                  E.set(y, Ts(T));
                  break;
                }
                case "controllers": {
                  E.set(y, Rg(T));
                  break;
                }
                case "module_hash": {
                  E.set(y, Vn(T));
                  break;
                }
                case "candid": {
                  E.set(y, new TextDecoder().decode(T));
                  break;
                }
                default:
                  if (typeof y != "string" && "key" in y && "path" in y)
                    switch (y.decodeStrategy) {
                      case "raw":
                        E.set(y.key, T);
                        break;
                      case "leb128": {
                        E.set(y.key, Rs(T));
                        break;
                      }
                      case "cbor": {
                        E.set(y.key, Ls(T));
                        break;
                      }
                      case "hex": {
                        E.set(y.key, Vn(T));
                        break;
                      }
                      case "utf-8":
                        E.set(y.key, Fg(T));
                    }
              }
          } catch (U) {
            if (
              !((L = U?.message) === null || L === void 0) &&
              L.includes("Invalid certificate")
            )
              throw new it(U.message);
            typeof y != "string" && "key" in y && "path" in y
              ? E.set(y.key, null)
              : E.set(y, null),
              console.group(),
              console.warn(
                `Expected to find result for path ${y}, but instead found nothing.`
              ),
              console.warn(U),
              console.groupEnd();
          }
        })()
      );
    return await Promise.all(u), E;
  },
  un = (t, A) => {
    const e = new TextEncoder(),
      r = (c) => new DataView(e.encode(c).buffer).buffer,
      a = new DataView(A.toUint8Array().buffer).buffer;
    switch (t) {
      case "time":
        return [r("time")];
      case "controllers":
        return [r("canister"), a, r("controllers")];
      case "module_hash":
        return [r("canister"), a, r("module_hash")];
      case "subnet":
        return [r("subnet")];
      case "candid":
        return [r("canister"), a, r("metadata"), r("candid:service")];
      default:
        if ("key" in t && "path" in t)
          if (typeof t.path == "string" || t.path instanceof ArrayBuffer) {
            const c = t.path,
              E = typeof c == "string" ? r(c) : c;
            return [r("canister"), a, r("metadata"), E];
          } else return t.path;
    }
    throw new Error(
      `An unexpeected error was encountered while encoding your path for canister status. Please ensure that your path, ${t} was formatted correctly.`
    );
  },
  Vn = (t) => Et(t),
  Ls = (t) => Ct(t),
  Fg = (t) => new TextDecoder().decode(t),
  Rg = (t) => {
    const [A, ...e] = Ls(t);
    return e.map((r) => ie.fromUint8Array(new Uint8Array(r)));
  },
  Tg = Object.freeze(
    Object.defineProperty(
      { __proto__: null, encodePath: un, request: _g },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
var Ys = { exports: {} };
(function (t) {
  (function (A) {
    var e = function (o) {
        var B,
          I = new Float64Array(16);
        if (o) for (B = 0; B < o.length; B++) I[B] = o[B];
        return I;
      },
      r = function () {
        throw new Error("no PRNG");
      },
      a = new Uint8Array(16),
      c = new Uint8Array(32);
    c[0] = 9;
    var E = e(),
      u = e([1]),
      y = e([56129, 1]),
      m = e([
        30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
        36039, 65139, 11119, 27886, 20995,
      ]),
      L = e([
        61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
        6542, 64743, 22239, 55772, 9222,
      ]),
      U = e([
        54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
        57905, 49316, 21502, 52590, 14035, 8553,
      ]),
      eA = e([
        26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
        26214, 26214, 26214, 26214, 26214, 26214,
      ]),
      T = e([
        41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
        11085, 57099, 20417, 9344, 11139,
      ]);
    function sA(o, B, I, i) {
      (o[B] = (I >> 24) & 255),
        (o[B + 1] = (I >> 16) & 255),
        (o[B + 2] = (I >> 8) & 255),
        (o[B + 3] = I & 255),
        (o[B + 4] = (i >> 24) & 255),
        (o[B + 5] = (i >> 16) & 255),
        (o[B + 6] = (i >> 8) & 255),
        (o[B + 7] = i & 255);
    }
    function QA(o, B, I, i, Q) {
      var b,
        R = 0;
      for (b = 0; b < Q; b++) R |= o[B + b] ^ I[i + b];
      return (1 & ((R - 1) >>> 8)) - 1;
    }
    function UA(o, B, I, i) {
      return QA(o, B, I, i, 16);
    }
    function YA(o, B, I, i) {
      return QA(o, B, I, i, 32);
    }
    function lA(o, B, I, i) {
      for (
        var Q =
            (i[0] & 255) |
            ((i[1] & 255) << 8) |
            ((i[2] & 255) << 16) |
            ((i[3] & 255) << 24),
          b =
            (I[0] & 255) |
            ((I[1] & 255) << 8) |
            ((I[2] & 255) << 16) |
            ((I[3] & 255) << 24),
          R =
            (I[4] & 255) |
            ((I[5] & 255) << 8) |
            ((I[6] & 255) << 16) |
            ((I[7] & 255) << 24),
          O =
            (I[8] & 255) |
            ((I[9] & 255) << 8) |
            ((I[10] & 255) << 16) |
            ((I[11] & 255) << 24),
          z =
            (I[12] & 255) |
            ((I[13] & 255) << 8) |
            ((I[14] & 255) << 16) |
            ((I[15] & 255) << 24),
          H =
            (i[4] & 255) |
            ((i[5] & 255) << 8) |
            ((i[6] & 255) << 16) |
            ((i[7] & 255) << 24),
          p =
            (B[0] & 255) |
            ((B[1] & 255) << 8) |
            ((B[2] & 255) << 16) |
            ((B[3] & 255) << 24),
          Y =
            (B[4] & 255) |
            ((B[5] & 255) << 8) |
            ((B[6] & 255) << 16) |
            ((B[7] & 255) << 24),
          k =
            (B[8] & 255) |
            ((B[9] & 255) << 8) |
            ((B[10] & 255) << 16) |
            ((B[11] & 255) << 24),
          tA =
            (B[12] & 255) |
            ((B[13] & 255) << 8) |
            ((B[14] & 255) << 16) |
            ((B[15] & 255) << 24),
          X =
            (i[8] & 255) |
            ((i[9] & 255) << 8) |
            ((i[10] & 255) << 16) |
            ((i[11] & 255) << 24),
          BA =
            (I[16] & 255) |
            ((I[17] & 255) << 8) |
            ((I[18] & 255) << 16) |
            ((I[19] & 255) << 24),
          EA =
            (I[20] & 255) |
            ((I[21] & 255) << 8) |
            ((I[22] & 255) << 16) |
            ((I[23] & 255) << 24),
          w =
            (I[24] & 255) |
            ((I[25] & 255) << 8) |
            ((I[26] & 255) << 16) |
            ((I[27] & 255) << 24),
          AA =
            (I[28] & 255) |
            ((I[29] & 255) << 8) |
            ((I[30] & 255) << 16) |
            ((I[31] & 255) << 24),
          j =
            (i[12] & 255) |
            ((i[13] & 255) << 8) |
            ((i[14] & 255) << 16) |
            ((i[15] & 255) << 24),
          K = Q,
          oA = b,
          rA = R,
          gA = O,
          IA = z,
          nA = H,
          G = p,
          v = Y,
          P = k,
          q = tA,
          J = X,
          V = BA,
          CA = EA,
          mA = w,
          _A = AA,
          bA = j,
          S,
          TA = 0;
        TA < 20;
        TA += 2
      )
        (S = (K + CA) | 0),
          (IA ^= (S << 7) | (S >>> (32 - 7))),
          (S = (IA + K) | 0),
          (P ^= (S << 9) | (S >>> (32 - 9))),
          (S = (P + IA) | 0),
          (CA ^= (S << 13) | (S >>> (32 - 13))),
          (S = (CA + P) | 0),
          (K ^= (S << 18) | (S >>> (32 - 18))),
          (S = (nA + oA) | 0),
          (q ^= (S << 7) | (S >>> (32 - 7))),
          (S = (q + nA) | 0),
          (mA ^= (S << 9) | (S >>> (32 - 9))),
          (S = (mA + q) | 0),
          (oA ^= (S << 13) | (S >>> (32 - 13))),
          (S = (oA + mA) | 0),
          (nA ^= (S << 18) | (S >>> (32 - 18))),
          (S = (J + G) | 0),
          (_A ^= (S << 7) | (S >>> (32 - 7))),
          (S = (_A + J) | 0),
          (rA ^= (S << 9) | (S >>> (32 - 9))),
          (S = (rA + _A) | 0),
          (G ^= (S << 13) | (S >>> (32 - 13))),
          (S = (G + rA) | 0),
          (J ^= (S << 18) | (S >>> (32 - 18))),
          (S = (bA + V) | 0),
          (gA ^= (S << 7) | (S >>> (32 - 7))),
          (S = (gA + bA) | 0),
          (v ^= (S << 9) | (S >>> (32 - 9))),
          (S = (v + gA) | 0),
          (V ^= (S << 13) | (S >>> (32 - 13))),
          (S = (V + v) | 0),
          (bA ^= (S << 18) | (S >>> (32 - 18))),
          (S = (K + gA) | 0),
          (oA ^= (S << 7) | (S >>> (32 - 7))),
          (S = (oA + K) | 0),
          (rA ^= (S << 9) | (S >>> (32 - 9))),
          (S = (rA + oA) | 0),
          (gA ^= (S << 13) | (S >>> (32 - 13))),
          (S = (gA + rA) | 0),
          (K ^= (S << 18) | (S >>> (32 - 18))),
          (S = (nA + IA) | 0),
          (G ^= (S << 7) | (S >>> (32 - 7))),
          (S = (G + nA) | 0),
          (v ^= (S << 9) | (S >>> (32 - 9))),
          (S = (v + G) | 0),
          (IA ^= (S << 13) | (S >>> (32 - 13))),
          (S = (IA + v) | 0),
          (nA ^= (S << 18) | (S >>> (32 - 18))),
          (S = (J + q) | 0),
          (V ^= (S << 7) | (S >>> (32 - 7))),
          (S = (V + J) | 0),
          (P ^= (S << 9) | (S >>> (32 - 9))),
          (S = (P + V) | 0),
          (q ^= (S << 13) | (S >>> (32 - 13))),
          (S = (q + P) | 0),
          (J ^= (S << 18) | (S >>> (32 - 18))),
          (S = (bA + _A) | 0),
          (CA ^= (S << 7) | (S >>> (32 - 7))),
          (S = (CA + bA) | 0),
          (mA ^= (S << 9) | (S >>> (32 - 9))),
          (S = (mA + CA) | 0),
          (_A ^= (S << 13) | (S >>> (32 - 13))),
          (S = (_A + mA) | 0),
          (bA ^= (S << 18) | (S >>> (32 - 18)));
      (K = (K + Q) | 0),
        (oA = (oA + b) | 0),
        (rA = (rA + R) | 0),
        (gA = (gA + O) | 0),
        (IA = (IA + z) | 0),
        (nA = (nA + H) | 0),
        (G = (G + p) | 0),
        (v = (v + Y) | 0),
        (P = (P + k) | 0),
        (q = (q + tA) | 0),
        (J = (J + X) | 0),
        (V = (V + BA) | 0),
        (CA = (CA + EA) | 0),
        (mA = (mA + w) | 0),
        (_A = (_A + AA) | 0),
        (bA = (bA + j) | 0),
        (o[0] = (K >>> 0) & 255),
        (o[1] = (K >>> 8) & 255),
        (o[2] = (K >>> 16) & 255),
        (o[3] = (K >>> 24) & 255),
        (o[4] = (oA >>> 0) & 255),
        (o[5] = (oA >>> 8) & 255),
        (o[6] = (oA >>> 16) & 255),
        (o[7] = (oA >>> 24) & 255),
        (o[8] = (rA >>> 0) & 255),
        (o[9] = (rA >>> 8) & 255),
        (o[10] = (rA >>> 16) & 255),
        (o[11] = (rA >>> 24) & 255),
        (o[12] = (gA >>> 0) & 255),
        (o[13] = (gA >>> 8) & 255),
        (o[14] = (gA >>> 16) & 255),
        (o[15] = (gA >>> 24) & 255),
        (o[16] = (IA >>> 0) & 255),
        (o[17] = (IA >>> 8) & 255),
        (o[18] = (IA >>> 16) & 255),
        (o[19] = (IA >>> 24) & 255),
        (o[20] = (nA >>> 0) & 255),
        (o[21] = (nA >>> 8) & 255),
        (o[22] = (nA >>> 16) & 255),
        (o[23] = (nA >>> 24) & 255),
        (o[24] = (G >>> 0) & 255),
        (o[25] = (G >>> 8) & 255),
        (o[26] = (G >>> 16) & 255),
        (o[27] = (G >>> 24) & 255),
        (o[28] = (v >>> 0) & 255),
        (o[29] = (v >>> 8) & 255),
        (o[30] = (v >>> 16) & 255),
        (o[31] = (v >>> 24) & 255),
        (o[32] = (P >>> 0) & 255),
        (o[33] = (P >>> 8) & 255),
        (o[34] = (P >>> 16) & 255),
        (o[35] = (P >>> 24) & 255),
        (o[36] = (q >>> 0) & 255),
        (o[37] = (q >>> 8) & 255),
        (o[38] = (q >>> 16) & 255),
        (o[39] = (q >>> 24) & 255),
        (o[40] = (J >>> 0) & 255),
        (o[41] = (J >>> 8) & 255),
        (o[42] = (J >>> 16) & 255),
        (o[43] = (J >>> 24) & 255),
        (o[44] = (V >>> 0) & 255),
        (o[45] = (V >>> 8) & 255),
        (o[46] = (V >>> 16) & 255),
        (o[47] = (V >>> 24) & 255),
        (o[48] = (CA >>> 0) & 255),
        (o[49] = (CA >>> 8) & 255),
        (o[50] = (CA >>> 16) & 255),
        (o[51] = (CA >>> 24) & 255),
        (o[52] = (mA >>> 0) & 255),
        (o[53] = (mA >>> 8) & 255),
        (o[54] = (mA >>> 16) & 255),
        (o[55] = (mA >>> 24) & 255),
        (o[56] = (_A >>> 0) & 255),
        (o[57] = (_A >>> 8) & 255),
        (o[58] = (_A >>> 16) & 255),
        (o[59] = (_A >>> 24) & 255),
        (o[60] = (bA >>> 0) & 255),
        (o[61] = (bA >>> 8) & 255),
        (o[62] = (bA >>> 16) & 255),
        (o[63] = (bA >>> 24) & 255);
    }
    function MA(o, B, I, i) {
      for (
        var Q =
            (i[0] & 255) |
            ((i[1] & 255) << 8) |
            ((i[2] & 255) << 16) |
            ((i[3] & 255) << 24),
          b =
            (I[0] & 255) |
            ((I[1] & 255) << 8) |
            ((I[2] & 255) << 16) |
            ((I[3] & 255) << 24),
          R =
            (I[4] & 255) |
            ((I[5] & 255) << 8) |
            ((I[6] & 255) << 16) |
            ((I[7] & 255) << 24),
          O =
            (I[8] & 255) |
            ((I[9] & 255) << 8) |
            ((I[10] & 255) << 16) |
            ((I[11] & 255) << 24),
          z =
            (I[12] & 255) |
            ((I[13] & 255) << 8) |
            ((I[14] & 255) << 16) |
            ((I[15] & 255) << 24),
          H =
            (i[4] & 255) |
            ((i[5] & 255) << 8) |
            ((i[6] & 255) << 16) |
            ((i[7] & 255) << 24),
          p =
            (B[0] & 255) |
            ((B[1] & 255) << 8) |
            ((B[2] & 255) << 16) |
            ((B[3] & 255) << 24),
          Y =
            (B[4] & 255) |
            ((B[5] & 255) << 8) |
            ((B[6] & 255) << 16) |
            ((B[7] & 255) << 24),
          k =
            (B[8] & 255) |
            ((B[9] & 255) << 8) |
            ((B[10] & 255) << 16) |
            ((B[11] & 255) << 24),
          tA =
            (B[12] & 255) |
            ((B[13] & 255) << 8) |
            ((B[14] & 255) << 16) |
            ((B[15] & 255) << 24),
          X =
            (i[8] & 255) |
            ((i[9] & 255) << 8) |
            ((i[10] & 255) << 16) |
            ((i[11] & 255) << 24),
          BA =
            (I[16] & 255) |
            ((I[17] & 255) << 8) |
            ((I[18] & 255) << 16) |
            ((I[19] & 255) << 24),
          EA =
            (I[20] & 255) |
            ((I[21] & 255) << 8) |
            ((I[22] & 255) << 16) |
            ((I[23] & 255) << 24),
          w =
            (I[24] & 255) |
            ((I[25] & 255) << 8) |
            ((I[26] & 255) << 16) |
            ((I[27] & 255) << 24),
          AA =
            (I[28] & 255) |
            ((I[29] & 255) << 8) |
            ((I[30] & 255) << 16) |
            ((I[31] & 255) << 24),
          j =
            (i[12] & 255) |
            ((i[13] & 255) << 8) |
            ((i[14] & 255) << 16) |
            ((i[15] & 255) << 24),
          K = Q,
          oA = b,
          rA = R,
          gA = O,
          IA = z,
          nA = H,
          G = p,
          v = Y,
          P = k,
          q = tA,
          J = X,
          V = BA,
          CA = EA,
          mA = w,
          _A = AA,
          bA = j,
          S,
          TA = 0;
        TA < 20;
        TA += 2
      )
        (S = (K + CA) | 0),
          (IA ^= (S << 7) | (S >>> (32 - 7))),
          (S = (IA + K) | 0),
          (P ^= (S << 9) | (S >>> (32 - 9))),
          (S = (P + IA) | 0),
          (CA ^= (S << 13) | (S >>> (32 - 13))),
          (S = (CA + P) | 0),
          (K ^= (S << 18) | (S >>> (32 - 18))),
          (S = (nA + oA) | 0),
          (q ^= (S << 7) | (S >>> (32 - 7))),
          (S = (q + nA) | 0),
          (mA ^= (S << 9) | (S >>> (32 - 9))),
          (S = (mA + q) | 0),
          (oA ^= (S << 13) | (S >>> (32 - 13))),
          (S = (oA + mA) | 0),
          (nA ^= (S << 18) | (S >>> (32 - 18))),
          (S = (J + G) | 0),
          (_A ^= (S << 7) | (S >>> (32 - 7))),
          (S = (_A + J) | 0),
          (rA ^= (S << 9) | (S >>> (32 - 9))),
          (S = (rA + _A) | 0),
          (G ^= (S << 13) | (S >>> (32 - 13))),
          (S = (G + rA) | 0),
          (J ^= (S << 18) | (S >>> (32 - 18))),
          (S = (bA + V) | 0),
          (gA ^= (S << 7) | (S >>> (32 - 7))),
          (S = (gA + bA) | 0),
          (v ^= (S << 9) | (S >>> (32 - 9))),
          (S = (v + gA) | 0),
          (V ^= (S << 13) | (S >>> (32 - 13))),
          (S = (V + v) | 0),
          (bA ^= (S << 18) | (S >>> (32 - 18))),
          (S = (K + gA) | 0),
          (oA ^= (S << 7) | (S >>> (32 - 7))),
          (S = (oA + K) | 0),
          (rA ^= (S << 9) | (S >>> (32 - 9))),
          (S = (rA + oA) | 0),
          (gA ^= (S << 13) | (S >>> (32 - 13))),
          (S = (gA + rA) | 0),
          (K ^= (S << 18) | (S >>> (32 - 18))),
          (S = (nA + IA) | 0),
          (G ^= (S << 7) | (S >>> (32 - 7))),
          (S = (G + nA) | 0),
          (v ^= (S << 9) | (S >>> (32 - 9))),
          (S = (v + G) | 0),
          (IA ^= (S << 13) | (S >>> (32 - 13))),
          (S = (IA + v) | 0),
          (nA ^= (S << 18) | (S >>> (32 - 18))),
          (S = (J + q) | 0),
          (V ^= (S << 7) | (S >>> (32 - 7))),
          (S = (V + J) | 0),
          (P ^= (S << 9) | (S >>> (32 - 9))),
          (S = (P + V) | 0),
          (q ^= (S << 13) | (S >>> (32 - 13))),
          (S = (q + P) | 0),
          (J ^= (S << 18) | (S >>> (32 - 18))),
          (S = (bA + _A) | 0),
          (CA ^= (S << 7) | (S >>> (32 - 7))),
          (S = (CA + bA) | 0),
          (mA ^= (S << 9) | (S >>> (32 - 9))),
          (S = (mA + CA) | 0),
          (_A ^= (S << 13) | (S >>> (32 - 13))),
          (S = (_A + mA) | 0),
          (bA ^= (S << 18) | (S >>> (32 - 18)));
      (o[0] = (K >>> 0) & 255),
        (o[1] = (K >>> 8) & 255),
        (o[2] = (K >>> 16) & 255),
        (o[3] = (K >>> 24) & 255),
        (o[4] = (nA >>> 0) & 255),
        (o[5] = (nA >>> 8) & 255),
        (o[6] = (nA >>> 16) & 255),
        (o[7] = (nA >>> 24) & 255),
        (o[8] = (J >>> 0) & 255),
        (o[9] = (J >>> 8) & 255),
        (o[10] = (J >>> 16) & 255),
        (o[11] = (J >>> 24) & 255),
        (o[12] = (bA >>> 0) & 255),
        (o[13] = (bA >>> 8) & 255),
        (o[14] = (bA >>> 16) & 255),
        (o[15] = (bA >>> 24) & 255),
        (o[16] = (G >>> 0) & 255),
        (o[17] = (G >>> 8) & 255),
        (o[18] = (G >>> 16) & 255),
        (o[19] = (G >>> 24) & 255),
        (o[20] = (v >>> 0) & 255),
        (o[21] = (v >>> 8) & 255),
        (o[22] = (v >>> 16) & 255),
        (o[23] = (v >>> 24) & 255),
        (o[24] = (P >>> 0) & 255),
        (o[25] = (P >>> 8) & 255),
        (o[26] = (P >>> 16) & 255),
        (o[27] = (P >>> 24) & 255),
        (o[28] = (q >>> 0) & 255),
        (o[29] = (q >>> 8) & 255),
        (o[30] = (q >>> 16) & 255),
        (o[31] = (q >>> 24) & 255);
    }
    function qA(o, B, I, i) {
      lA(o, B, I, i);
    }
    function GA(o, B, I, i) {
      MA(o, B, I, i);
    }
    var aA = new Uint8Array([
      101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107,
    ]);
    function fA(o, B, I, i, Q, b, R) {
      var O = new Uint8Array(16),
        z = new Uint8Array(64),
        H,
        p;
      for (p = 0; p < 16; p++) O[p] = 0;
      for (p = 0; p < 8; p++) O[p] = b[p];
      for (; Q >= 64; ) {
        for (qA(z, O, R, aA), p = 0; p < 64; p++) o[B + p] = I[i + p] ^ z[p];
        for (H = 1, p = 8; p < 16; p++)
          (H = (H + (O[p] & 255)) | 0), (O[p] = H & 255), (H >>>= 8);
        (Q -= 64), (B += 64), (i += 64);
      }
      if (Q > 0)
        for (qA(z, O, R, aA), p = 0; p < Q; p++) o[B + p] = I[i + p] ^ z[p];
      return 0;
    }
    function NA(o, B, I, i, Q) {
      var b = new Uint8Array(16),
        R = new Uint8Array(64),
        O,
        z;
      for (z = 0; z < 16; z++) b[z] = 0;
      for (z = 0; z < 8; z++) b[z] = i[z];
      for (; I >= 64; ) {
        for (qA(R, b, Q, aA), z = 0; z < 64; z++) o[B + z] = R[z];
        for (O = 1, z = 8; z < 16; z++)
          (O = (O + (b[z] & 255)) | 0), (b[z] = O & 255), (O >>>= 8);
        (I -= 64), (B += 64);
      }
      if (I > 0) for (qA(R, b, Q, aA), z = 0; z < I; z++) o[B + z] = R[z];
      return 0;
    }
    function PA(o, B, I, i, Q) {
      var b = new Uint8Array(32);
      GA(b, i, Q, aA);
      for (var R = new Uint8Array(8), O = 0; O < 8; O++) R[O] = i[O + 16];
      return NA(o, B, I, R, b);
    }
    function Z(o, B, I, i, Q, b, R) {
      var O = new Uint8Array(32);
      GA(O, b, R, aA);
      for (var z = new Uint8Array(8), H = 0; H < 8; H++) z[H] = b[H + 16];
      return fA(o, B, I, i, Q, z, O);
    }
    var WA = function (o) {
      (this.buffer = new Uint8Array(16)),
        (this.r = new Uint16Array(10)),
        (this.h = new Uint16Array(10)),
        (this.pad = new Uint16Array(8)),
        (this.leftover = 0),
        (this.fin = 0);
      var B, I, i, Q, b, R, O, z;
      (B = (o[0] & 255) | ((o[1] & 255) << 8)),
        (this.r[0] = B & 8191),
        (I = (o[2] & 255) | ((o[3] & 255) << 8)),
        (this.r[1] = ((B >>> 13) | (I << 3)) & 8191),
        (i = (o[4] & 255) | ((o[5] & 255) << 8)),
        (this.r[2] = ((I >>> 10) | (i << 6)) & 7939),
        (Q = (o[6] & 255) | ((o[7] & 255) << 8)),
        (this.r[3] = ((i >>> 7) | (Q << 9)) & 8191),
        (b = (o[8] & 255) | ((o[9] & 255) << 8)),
        (this.r[4] = ((Q >>> 4) | (b << 12)) & 255),
        (this.r[5] = (b >>> 1) & 8190),
        (R = (o[10] & 255) | ((o[11] & 255) << 8)),
        (this.r[6] = ((b >>> 14) | (R << 2)) & 8191),
        (O = (o[12] & 255) | ((o[13] & 255) << 8)),
        (this.r[7] = ((R >>> 11) | (O << 5)) & 8065),
        (z = (o[14] & 255) | ((o[15] & 255) << 8)),
        (this.r[8] = ((O >>> 8) | (z << 8)) & 8191),
        (this.r[9] = (z >>> 5) & 127),
        (this.pad[0] = (o[16] & 255) | ((o[17] & 255) << 8)),
        (this.pad[1] = (o[18] & 255) | ((o[19] & 255) << 8)),
        (this.pad[2] = (o[20] & 255) | ((o[21] & 255) << 8)),
        (this.pad[3] = (o[22] & 255) | ((o[23] & 255) << 8)),
        (this.pad[4] = (o[24] & 255) | ((o[25] & 255) << 8)),
        (this.pad[5] = (o[26] & 255) | ((o[27] & 255) << 8)),
        (this.pad[6] = (o[28] & 255) | ((o[29] & 255) << 8)),
        (this.pad[7] = (o[30] & 255) | ((o[31] & 255) << 8));
    };
    (WA.prototype.blocks = function (o, B, I) {
      for (
        var i = this.fin ? 0 : 2048,
          Q,
          b,
          R,
          O,
          z,
          H,
          p,
          Y,
          k,
          tA,
          X,
          BA,
          EA,
          w,
          AA,
          j,
          K,
          oA,
          rA,
          gA = this.h[0],
          IA = this.h[1],
          nA = this.h[2],
          G = this.h[3],
          v = this.h[4],
          P = this.h[5],
          q = this.h[6],
          J = this.h[7],
          V = this.h[8],
          CA = this.h[9],
          mA = this.r[0],
          _A = this.r[1],
          bA = this.r[2],
          S = this.r[3],
          TA = this.r[4],
          JA = this.r[5],
          KA = this.r[6],
          FA = this.r[7],
          HA = this.r[8],
          OA = this.r[9];
        I >= 16;

      )
        (Q = (o[B + 0] & 255) | ((o[B + 1] & 255) << 8)),
          (gA += Q & 8191),
          (b = (o[B + 2] & 255) | ((o[B + 3] & 255) << 8)),
          (IA += ((Q >>> 13) | (b << 3)) & 8191),
          (R = (o[B + 4] & 255) | ((o[B + 5] & 255) << 8)),
          (nA += ((b >>> 10) | (R << 6)) & 8191),
          (O = (o[B + 6] & 255) | ((o[B + 7] & 255) << 8)),
          (G += ((R >>> 7) | (O << 9)) & 8191),
          (z = (o[B + 8] & 255) | ((o[B + 9] & 255) << 8)),
          (v += ((O >>> 4) | (z << 12)) & 8191),
          (P += (z >>> 1) & 8191),
          (H = (o[B + 10] & 255) | ((o[B + 11] & 255) << 8)),
          (q += ((z >>> 14) | (H << 2)) & 8191),
          (p = (o[B + 12] & 255) | ((o[B + 13] & 255) << 8)),
          (J += ((H >>> 11) | (p << 5)) & 8191),
          (Y = (o[B + 14] & 255) | ((o[B + 15] & 255) << 8)),
          (V += ((p >>> 8) | (Y << 8)) & 8191),
          (CA += (Y >>> 5) | i),
          (k = 0),
          (tA = k),
          (tA += gA * mA),
          (tA += IA * (5 * OA)),
          (tA += nA * (5 * HA)),
          (tA += G * (5 * FA)),
          (tA += v * (5 * KA)),
          (k = tA >>> 13),
          (tA &= 8191),
          (tA += P * (5 * JA)),
          (tA += q * (5 * TA)),
          (tA += J * (5 * S)),
          (tA += V * (5 * bA)),
          (tA += CA * (5 * _A)),
          (k += tA >>> 13),
          (tA &= 8191),
          (X = k),
          (X += gA * _A),
          (X += IA * mA),
          (X += nA * (5 * OA)),
          (X += G * (5 * HA)),
          (X += v * (5 * FA)),
          (k = X >>> 13),
          (X &= 8191),
          (X += P * (5 * KA)),
          (X += q * (5 * JA)),
          (X += J * (5 * TA)),
          (X += V * (5 * S)),
          (X += CA * (5 * bA)),
          (k += X >>> 13),
          (X &= 8191),
          (BA = k),
          (BA += gA * bA),
          (BA += IA * _A),
          (BA += nA * mA),
          (BA += G * (5 * OA)),
          (BA += v * (5 * HA)),
          (k = BA >>> 13),
          (BA &= 8191),
          (BA += P * (5 * FA)),
          (BA += q * (5 * KA)),
          (BA += J * (5 * JA)),
          (BA += V * (5 * TA)),
          (BA += CA * (5 * S)),
          (k += BA >>> 13),
          (BA &= 8191),
          (EA = k),
          (EA += gA * S),
          (EA += IA * bA),
          (EA += nA * _A),
          (EA += G * mA),
          (EA += v * (5 * OA)),
          (k = EA >>> 13),
          (EA &= 8191),
          (EA += P * (5 * HA)),
          (EA += q * (5 * FA)),
          (EA += J * (5 * KA)),
          (EA += V * (5 * JA)),
          (EA += CA * (5 * TA)),
          (k += EA >>> 13),
          (EA &= 8191),
          (w = k),
          (w += gA * TA),
          (w += IA * S),
          (w += nA * bA),
          (w += G * _A),
          (w += v * mA),
          (k = w >>> 13),
          (w &= 8191),
          (w += P * (5 * OA)),
          (w += q * (5 * HA)),
          (w += J * (5 * FA)),
          (w += V * (5 * KA)),
          (w += CA * (5 * JA)),
          (k += w >>> 13),
          (w &= 8191),
          (AA = k),
          (AA += gA * JA),
          (AA += IA * TA),
          (AA += nA * S),
          (AA += G * bA),
          (AA += v * _A),
          (k = AA >>> 13),
          (AA &= 8191),
          (AA += P * mA),
          (AA += q * (5 * OA)),
          (AA += J * (5 * HA)),
          (AA += V * (5 * FA)),
          (AA += CA * (5 * KA)),
          (k += AA >>> 13),
          (AA &= 8191),
          (j = k),
          (j += gA * KA),
          (j += IA * JA),
          (j += nA * TA),
          (j += G * S),
          (j += v * bA),
          (k = j >>> 13),
          (j &= 8191),
          (j += P * _A),
          (j += q * mA),
          (j += J * (5 * OA)),
          (j += V * (5 * HA)),
          (j += CA * (5 * FA)),
          (k += j >>> 13),
          (j &= 8191),
          (K = k),
          (K += gA * FA),
          (K += IA * KA),
          (K += nA * JA),
          (K += G * TA),
          (K += v * S),
          (k = K >>> 13),
          (K &= 8191),
          (K += P * bA),
          (K += q * _A),
          (K += J * mA),
          (K += V * (5 * OA)),
          (K += CA * (5 * HA)),
          (k += K >>> 13),
          (K &= 8191),
          (oA = k),
          (oA += gA * HA),
          (oA += IA * FA),
          (oA += nA * KA),
          (oA += G * JA),
          (oA += v * TA),
          (k = oA >>> 13),
          (oA &= 8191),
          (oA += P * S),
          (oA += q * bA),
          (oA += J * _A),
          (oA += V * mA),
          (oA += CA * (5 * OA)),
          (k += oA >>> 13),
          (oA &= 8191),
          (rA = k),
          (rA += gA * OA),
          (rA += IA * HA),
          (rA += nA * FA),
          (rA += G * KA),
          (rA += v * JA),
          (k = rA >>> 13),
          (rA &= 8191),
          (rA += P * TA),
          (rA += q * S),
          (rA += J * bA),
          (rA += V * _A),
          (rA += CA * mA),
          (k += rA >>> 13),
          (rA &= 8191),
          (k = ((k << 2) + k) | 0),
          (k = (k + tA) | 0),
          (tA = k & 8191),
          (k = k >>> 13),
          (X += k),
          (gA = tA),
          (IA = X),
          (nA = BA),
          (G = EA),
          (v = w),
          (P = AA),
          (q = j),
          (J = K),
          (V = oA),
          (CA = rA),
          (B += 16),
          (I -= 16);
      (this.h[0] = gA),
        (this.h[1] = IA),
        (this.h[2] = nA),
        (this.h[3] = G),
        (this.h[4] = v),
        (this.h[5] = P),
        (this.h[6] = q),
        (this.h[7] = J),
        (this.h[8] = V),
        (this.h[9] = CA);
    }),
      (WA.prototype.finish = function (o, B) {
        var I = new Uint16Array(10),
          i,
          Q,
          b,
          R;
        if (this.leftover) {
          for (R = this.leftover, this.buffer[R++] = 1; R < 16; R++)
            this.buffer[R] = 0;
          (this.fin = 1), this.blocks(this.buffer, 0, 16);
        }
        for (i = this.h[1] >>> 13, this.h[1] &= 8191, R = 2; R < 10; R++)
          (this.h[R] += i), (i = this.h[R] >>> 13), (this.h[R] &= 8191);
        for (
          this.h[0] += i * 5,
            i = this.h[0] >>> 13,
            this.h[0] &= 8191,
            this.h[1] += i,
            i = this.h[1] >>> 13,
            this.h[1] &= 8191,
            this.h[2] += i,
            I[0] = this.h[0] + 5,
            i = I[0] >>> 13,
            I[0] &= 8191,
            R = 1;
          R < 10;
          R++
        )
          (I[R] = this.h[R] + i), (i = I[R] >>> 13), (I[R] &= 8191);
        for (I[9] -= 8192, Q = (i ^ 1) - 1, R = 0; R < 10; R++) I[R] &= Q;
        for (Q = ~Q, R = 0; R < 10; R++) this.h[R] = (this.h[R] & Q) | I[R];
        for (
          this.h[0] = (this.h[0] | (this.h[1] << 13)) & 65535,
            this.h[1] = ((this.h[1] >>> 3) | (this.h[2] << 10)) & 65535,
            this.h[2] = ((this.h[2] >>> 6) | (this.h[3] << 7)) & 65535,
            this.h[3] = ((this.h[3] >>> 9) | (this.h[4] << 4)) & 65535,
            this.h[4] =
              ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)) &
              65535,
            this.h[5] = ((this.h[6] >>> 2) | (this.h[7] << 11)) & 65535,
            this.h[6] = ((this.h[7] >>> 5) | (this.h[8] << 8)) & 65535,
            this.h[7] = ((this.h[8] >>> 8) | (this.h[9] << 5)) & 65535,
            b = this.h[0] + this.pad[0],
            this.h[0] = b & 65535,
            R = 1;
          R < 8;
          R++
        )
          (b = (((this.h[R] + this.pad[R]) | 0) + (b >>> 16)) | 0),
            (this.h[R] = b & 65535);
        (o[B + 0] = (this.h[0] >>> 0) & 255),
          (o[B + 1] = (this.h[0] >>> 8) & 255),
          (o[B + 2] = (this.h[1] >>> 0) & 255),
          (o[B + 3] = (this.h[1] >>> 8) & 255),
          (o[B + 4] = (this.h[2] >>> 0) & 255),
          (o[B + 5] = (this.h[2] >>> 8) & 255),
          (o[B + 6] = (this.h[3] >>> 0) & 255),
          (o[B + 7] = (this.h[3] >>> 8) & 255),
          (o[B + 8] = (this.h[4] >>> 0) & 255),
          (o[B + 9] = (this.h[4] >>> 8) & 255),
          (o[B + 10] = (this.h[5] >>> 0) & 255),
          (o[B + 11] = (this.h[5] >>> 8) & 255),
          (o[B + 12] = (this.h[6] >>> 0) & 255),
          (o[B + 13] = (this.h[6] >>> 8) & 255),
          (o[B + 14] = (this.h[7] >>> 0) & 255),
          (o[B + 15] = (this.h[7] >>> 8) & 255);
      }),
      (WA.prototype.update = function (o, B, I) {
        var i, Q;
        if (this.leftover) {
          for (Q = 16 - this.leftover, Q > I && (Q = I), i = 0; i < Q; i++)
            this.buffer[this.leftover + i] = o[B + i];
          if (((I -= Q), (B += Q), (this.leftover += Q), this.leftover < 16))
            return;
          this.blocks(this.buffer, 0, 16), (this.leftover = 0);
        }
        if (
          (I >= 16 &&
            ((Q = I - (I % 16)), this.blocks(o, B, Q), (B += Q), (I -= Q)),
          I)
        ) {
          for (i = 0; i < I; i++) this.buffer[this.leftover + i] = o[B + i];
          this.leftover += I;
        }
      });
    function vA(o, B, I, i, Q, b) {
      var R = new WA(b);
      return R.update(I, i, Q), R.finish(o, B), 0;
    }
    function kA(o, B, I, i, Q, b) {
      var R = new Uint8Array(16);
      return vA(R, 0, I, i, Q, b), UA(o, B, R, 0);
    }
    function se(o, B, I, i, Q) {
      var b;
      if (I < 32) return -1;
      for (
        Z(o, 0, B, 0, I, i, Q), vA(o, 16, o, 32, I - 32, o), b = 0;
        b < 16;
        b++
      )
        o[b] = 0;
      return 0;
    }
    function re(o, B, I, i, Q) {
      var b,
        R = new Uint8Array(32);
      if (I < 32 || (PA(R, 0, 32, i, Q), kA(B, 16, B, 32, I - 32, R) !== 0))
        return -1;
      for (Z(o, 0, B, 0, I, i, Q), b = 0; b < 32; b++) o[b] = 0;
      return 0;
    }
    function oe(o, B) {
      var I;
      for (I = 0; I < 16; I++) o[I] = B[I] | 0;
    }
    function ge(o) {
      var B,
        I,
        i = 1;
      for (B = 0; B < 16; B++)
        (I = o[B] + i + 65535),
          (i = Math.floor(I / 65536)),
          (o[B] = I - i * 65536);
      o[0] += i - 1 + 37 * (i - 1);
    }
    function jA(o, B, I) {
      for (var i, Q = ~(I - 1), b = 0; b < 16; b++)
        (i = Q & (o[b] ^ B[b])), (o[b] ^= i), (B[b] ^= i);
    }
    function LA(o, B) {
      var I,
        i,
        Q,
        b = e(),
        R = e();
      for (I = 0; I < 16; I++) R[I] = B[I];
      for (ge(R), ge(R), ge(R), i = 0; i < 2; i++) {
        for (b[0] = R[0] - 65517, I = 1; I < 15; I++)
          (b[I] = R[I] - 65535 - ((b[I - 1] >> 16) & 1)), (b[I - 1] &= 65535);
        (b[15] = R[15] - 32767 - ((b[14] >> 16) & 1)),
          (Q = (b[15] >> 16) & 1),
          (b[14] &= 65535),
          jA(R, b, 1 - Q);
      }
      for (I = 0; I < 16; I++)
        (o[2 * I] = R[I] & 255), (o[2 * I + 1] = R[I] >> 8);
    }
    function we(o, B) {
      var I = new Uint8Array(32),
        i = new Uint8Array(32);
      return LA(I, o), LA(i, B), YA(I, 0, i, 0);
    }
    function yA(o) {
      var B = new Uint8Array(32);
      return LA(B, o), B[0] & 1;
    }
    function VA(o, B) {
      var I;
      for (I = 0; I < 16; I++) o[I] = B[2 * I] + (B[2 * I + 1] << 8);
      o[15] &= 32767;
    }
    function SA(o, B, I) {
      for (var i = 0; i < 16; i++) o[i] = B[i] + I[i];
    }
    function C(o, B, I) {
      for (var i = 0; i < 16; i++) o[i] = B[i] - I[i];
    }
    function dA(o, B, I) {
      var i,
        Q,
        b = 0,
        R = 0,
        O = 0,
        z = 0,
        H = 0,
        p = 0,
        Y = 0,
        k = 0,
        tA = 0,
        X = 0,
        BA = 0,
        EA = 0,
        w = 0,
        AA = 0,
        j = 0,
        K = 0,
        oA = 0,
        rA = 0,
        gA = 0,
        IA = 0,
        nA = 0,
        G = 0,
        v = 0,
        P = 0,
        q = 0,
        J = 0,
        V = 0,
        CA = 0,
        mA = 0,
        _A = 0,
        bA = 0,
        S = I[0],
        TA = I[1],
        JA = I[2],
        KA = I[3],
        FA = I[4],
        HA = I[5],
        OA = I[6],
        ue = I[7],
        $A = I[8],
        ce = I[9],
        Ie = I[10],
        Be = I[11],
        le = I[12],
        be = I[13],
        Ne = I[14],
        _e = I[15];
      (i = B[0]),
        (b += i * S),
        (R += i * TA),
        (O += i * JA),
        (z += i * KA),
        (H += i * FA),
        (p += i * HA),
        (Y += i * OA),
        (k += i * ue),
        (tA += i * $A),
        (X += i * ce),
        (BA += i * Ie),
        (EA += i * Be),
        (w += i * le),
        (AA += i * be),
        (j += i * Ne),
        (K += i * _e),
        (i = B[1]),
        (R += i * S),
        (O += i * TA),
        (z += i * JA),
        (H += i * KA),
        (p += i * FA),
        (Y += i * HA),
        (k += i * OA),
        (tA += i * ue),
        (X += i * $A),
        (BA += i * ce),
        (EA += i * Ie),
        (w += i * Be),
        (AA += i * le),
        (j += i * be),
        (K += i * Ne),
        (oA += i * _e),
        (i = B[2]),
        (O += i * S),
        (z += i * TA),
        (H += i * JA),
        (p += i * KA),
        (Y += i * FA),
        (k += i * HA),
        (tA += i * OA),
        (X += i * ue),
        (BA += i * $A),
        (EA += i * ce),
        (w += i * Ie),
        (AA += i * Be),
        (j += i * le),
        (K += i * be),
        (oA += i * Ne),
        (rA += i * _e),
        (i = B[3]),
        (z += i * S),
        (H += i * TA),
        (p += i * JA),
        (Y += i * KA),
        (k += i * FA),
        (tA += i * HA),
        (X += i * OA),
        (BA += i * ue),
        (EA += i * $A),
        (w += i * ce),
        (AA += i * Ie),
        (j += i * Be),
        (K += i * le),
        (oA += i * be),
        (rA += i * Ne),
        (gA += i * _e),
        (i = B[4]),
        (H += i * S),
        (p += i * TA),
        (Y += i * JA),
        (k += i * KA),
        (tA += i * FA),
        (X += i * HA),
        (BA += i * OA),
        (EA += i * ue),
        (w += i * $A),
        (AA += i * ce),
        (j += i * Ie),
        (K += i * Be),
        (oA += i * le),
        (rA += i * be),
        (gA += i * Ne),
        (IA += i * _e),
        (i = B[5]),
        (p += i * S),
        (Y += i * TA),
        (k += i * JA),
        (tA += i * KA),
        (X += i * FA),
        (BA += i * HA),
        (EA += i * OA),
        (w += i * ue),
        (AA += i * $A),
        (j += i * ce),
        (K += i * Ie),
        (oA += i * Be),
        (rA += i * le),
        (gA += i * be),
        (IA += i * Ne),
        (nA += i * _e),
        (i = B[6]),
        (Y += i * S),
        (k += i * TA),
        (tA += i * JA),
        (X += i * KA),
        (BA += i * FA),
        (EA += i * HA),
        (w += i * OA),
        (AA += i * ue),
        (j += i * $A),
        (K += i * ce),
        (oA += i * Ie),
        (rA += i * Be),
        (gA += i * le),
        (IA += i * be),
        (nA += i * Ne),
        (G += i * _e),
        (i = B[7]),
        (k += i * S),
        (tA += i * TA),
        (X += i * JA),
        (BA += i * KA),
        (EA += i * FA),
        (w += i * HA),
        (AA += i * OA),
        (j += i * ue),
        (K += i * $A),
        (oA += i * ce),
        (rA += i * Ie),
        (gA += i * Be),
        (IA += i * le),
        (nA += i * be),
        (G += i * Ne),
        (v += i * _e),
        (i = B[8]),
        (tA += i * S),
        (X += i * TA),
        (BA += i * JA),
        (EA += i * KA),
        (w += i * FA),
        (AA += i * HA),
        (j += i * OA),
        (K += i * ue),
        (oA += i * $A),
        (rA += i * ce),
        (gA += i * Ie),
        (IA += i * Be),
        (nA += i * le),
        (G += i * be),
        (v += i * Ne),
        (P += i * _e),
        (i = B[9]),
        (X += i * S),
        (BA += i * TA),
        (EA += i * JA),
        (w += i * KA),
        (AA += i * FA),
        (j += i * HA),
        (K += i * OA),
        (oA += i * ue),
        (rA += i * $A),
        (gA += i * ce),
        (IA += i * Ie),
        (nA += i * Be),
        (G += i * le),
        (v += i * be),
        (P += i * Ne),
        (q += i * _e),
        (i = B[10]),
        (BA += i * S),
        (EA += i * TA),
        (w += i * JA),
        (AA += i * KA),
        (j += i * FA),
        (K += i * HA),
        (oA += i * OA),
        (rA += i * ue),
        (gA += i * $A),
        (IA += i * ce),
        (nA += i * Ie),
        (G += i * Be),
        (v += i * le),
        (P += i * be),
        (q += i * Ne),
        (J += i * _e),
        (i = B[11]),
        (EA += i * S),
        (w += i * TA),
        (AA += i * JA),
        (j += i * KA),
        (K += i * FA),
        (oA += i * HA),
        (rA += i * OA),
        (gA += i * ue),
        (IA += i * $A),
        (nA += i * ce),
        (G += i * Ie),
        (v += i * Be),
        (P += i * le),
        (q += i * be),
        (J += i * Ne),
        (V += i * _e),
        (i = B[12]),
        (w += i * S),
        (AA += i * TA),
        (j += i * JA),
        (K += i * KA),
        (oA += i * FA),
        (rA += i * HA),
        (gA += i * OA),
        (IA += i * ue),
        (nA += i * $A),
        (G += i * ce),
        (v += i * Ie),
        (P += i * Be),
        (q += i * le),
        (J += i * be),
        (V += i * Ne),
        (CA += i * _e),
        (i = B[13]),
        (AA += i * S),
        (j += i * TA),
        (K += i * JA),
        (oA += i * KA),
        (rA += i * FA),
        (gA += i * HA),
        (IA += i * OA),
        (nA += i * ue),
        (G += i * $A),
        (v += i * ce),
        (P += i * Ie),
        (q += i * Be),
        (J += i * le),
        (V += i * be),
        (CA += i * Ne),
        (mA += i * _e),
        (i = B[14]),
        (j += i * S),
        (K += i * TA),
        (oA += i * JA),
        (rA += i * KA),
        (gA += i * FA),
        (IA += i * HA),
        (nA += i * OA),
        (G += i * ue),
        (v += i * $A),
        (P += i * ce),
        (q += i * Ie),
        (J += i * Be),
        (V += i * le),
        (CA += i * be),
        (mA += i * Ne),
        (_A += i * _e),
        (i = B[15]),
        (K += i * S),
        (oA += i * TA),
        (rA += i * JA),
        (gA += i * KA),
        (IA += i * FA),
        (nA += i * HA),
        (G += i * OA),
        (v += i * ue),
        (P += i * $A),
        (q += i * ce),
        (J += i * Ie),
        (V += i * Be),
        (CA += i * le),
        (mA += i * be),
        (_A += i * Ne),
        (bA += i * _e),
        (b += 38 * oA),
        (R += 38 * rA),
        (O += 38 * gA),
        (z += 38 * IA),
        (H += 38 * nA),
        (p += 38 * G),
        (Y += 38 * v),
        (k += 38 * P),
        (tA += 38 * q),
        (X += 38 * J),
        (BA += 38 * V),
        (EA += 38 * CA),
        (w += 38 * mA),
        (AA += 38 * _A),
        (j += 38 * bA),
        (Q = 1),
        (i = b + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (b = i - Q * 65536),
        (i = R + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (R = i - Q * 65536),
        (i = O + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (O = i - Q * 65536),
        (i = z + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (z = i - Q * 65536),
        (i = H + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (H = i - Q * 65536),
        (i = p + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (p = i - Q * 65536),
        (i = Y + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (Y = i - Q * 65536),
        (i = k + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (k = i - Q * 65536),
        (i = tA + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (tA = i - Q * 65536),
        (i = X + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (X = i - Q * 65536),
        (i = BA + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (BA = i - Q * 65536),
        (i = EA + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (EA = i - Q * 65536),
        (i = w + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (w = i - Q * 65536),
        (i = AA + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (AA = i - Q * 65536),
        (i = j + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (j = i - Q * 65536),
        (i = K + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (K = i - Q * 65536),
        (b += Q - 1 + 37 * (Q - 1)),
        (Q = 1),
        (i = b + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (b = i - Q * 65536),
        (i = R + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (R = i - Q * 65536),
        (i = O + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (O = i - Q * 65536),
        (i = z + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (z = i - Q * 65536),
        (i = H + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (H = i - Q * 65536),
        (i = p + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (p = i - Q * 65536),
        (i = Y + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (Y = i - Q * 65536),
        (i = k + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (k = i - Q * 65536),
        (i = tA + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (tA = i - Q * 65536),
        (i = X + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (X = i - Q * 65536),
        (i = BA + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (BA = i - Q * 65536),
        (i = EA + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (EA = i - Q * 65536),
        (i = w + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (w = i - Q * 65536),
        (i = AA + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (AA = i - Q * 65536),
        (i = j + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (j = i - Q * 65536),
        (i = K + Q + 65535),
        (Q = Math.floor(i / 65536)),
        (K = i - Q * 65536),
        (b += Q - 1 + 37 * (Q - 1)),
        (o[0] = b),
        (o[1] = R),
        (o[2] = O),
        (o[3] = z),
        (o[4] = H),
        (o[5] = p),
        (o[6] = Y),
        (o[7] = k),
        (o[8] = tA),
        (o[9] = X),
        (o[10] = BA),
        (o[11] = EA),
        (o[12] = w),
        (o[13] = AA),
        (o[14] = j),
        (o[15] = K);
    }
    function ae(o, B) {
      dA(o, B, B);
    }
    function Me(o, B) {
      var I = e(),
        i;
      for (i = 0; i < 16; i++) I[i] = B[i];
      for (i = 253; i >= 0; i--) ae(I, I), i !== 2 && i !== 4 && dA(I, I, B);
      for (i = 0; i < 16; i++) o[i] = I[i];
    }
    function cA(o, B) {
      var I = e(),
        i;
      for (i = 0; i < 16; i++) I[i] = B[i];
      for (i = 250; i >= 0; i--) ae(I, I), i !== 1 && dA(I, I, B);
      for (i = 0; i < 16; i++) o[i] = I[i];
    }
    function uA(o, B, I) {
      var i = new Uint8Array(32),
        Q = new Float64Array(80),
        b,
        R,
        O = e(),
        z = e(),
        H = e(),
        p = e(),
        Y = e(),
        k = e();
      for (R = 0; R < 31; R++) i[R] = B[R];
      for (
        i[31] = (B[31] & 127) | 64, i[0] &= 248, VA(Q, I), R = 0;
        R < 16;
        R++
      )
        (z[R] = Q[R]), (p[R] = O[R] = H[R] = 0);
      for (O[0] = p[0] = 1, R = 254; R >= 0; --R)
        (b = (i[R >>> 3] >>> (R & 7)) & 1),
          jA(O, z, b),
          jA(H, p, b),
          SA(Y, O, H),
          C(O, O, H),
          SA(H, z, p),
          C(z, z, p),
          ae(p, Y),
          ae(k, O),
          dA(O, H, O),
          dA(H, z, Y),
          SA(Y, O, H),
          C(O, O, H),
          ae(z, O),
          C(H, p, k),
          dA(O, H, y),
          SA(O, O, p),
          dA(H, H, O),
          dA(O, p, k),
          dA(p, z, Q),
          ae(z, Y),
          jA(O, z, b),
          jA(H, p, b);
      for (R = 0; R < 16; R++)
        (Q[R + 16] = O[R]),
          (Q[R + 32] = H[R]),
          (Q[R + 48] = z[R]),
          (Q[R + 64] = p[R]);
      var tA = Q.subarray(32),
        X = Q.subarray(16);
      return Me(tA, tA), dA(X, X, tA), LA(o, X), 0;
    }
    function l(o, B) {
      return uA(o, B, c);
    }
    function d(o, B) {
      return r(B, 32), l(o, B);
    }
    function D(o, B, I) {
      var i = new Uint8Array(32);
      return uA(i, I, B), GA(o, a, i, aA);
    }
    var F = se,
      N = re;
    function _(o, B, I, i, Q, b) {
      var R = new Uint8Array(32);
      return D(R, Q, b), F(o, B, I, i, R);
    }
    function g(o, B, I, i, Q, b) {
      var R = new Uint8Array(32);
      return D(R, Q, b), N(o, B, I, i, R);
    }
    var n = [
      1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
      3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
      2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
      310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
      1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
      3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
      264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
      1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
      2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
      3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
      113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
      773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
      1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
      2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
      3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
      3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
      430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
      883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
      1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
      2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
      2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
      3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
      3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
      174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
      685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
      1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
      1607167915, 987167468, 1816402316, 1246189591,
    ];
    function s(o, B, I, i) {
      for (
        var Q = new Int32Array(16),
          b = new Int32Array(16),
          R,
          O,
          z,
          H,
          p,
          Y,
          k,
          tA,
          X,
          BA,
          EA,
          w,
          AA,
          j,
          K,
          oA,
          rA,
          gA,
          IA,
          nA,
          G,
          v,
          P,
          q,
          J,
          V,
          CA = o[0],
          mA = o[1],
          _A = o[2],
          bA = o[3],
          S = o[4],
          TA = o[5],
          JA = o[6],
          KA = o[7],
          FA = B[0],
          HA = B[1],
          OA = B[2],
          ue = B[3],
          $A = B[4],
          ce = B[5],
          Ie = B[6],
          Be = B[7],
          le = 0;
        i >= 128;

      ) {
        for (IA = 0; IA < 16; IA++)
          (nA = 8 * IA + le),
            (Q[IA] =
              (I[nA + 0] << 24) |
              (I[nA + 1] << 16) |
              (I[nA + 2] << 8) |
              I[nA + 3]),
            (b[IA] =
              (I[nA + 4] << 24) |
              (I[nA + 5] << 16) |
              (I[nA + 6] << 8) |
              I[nA + 7]);
        for (IA = 0; IA < 80; IA++)
          if (
            ((R = CA),
            (O = mA),
            (z = _A),
            (H = bA),
            (p = S),
            (Y = TA),
            (k = JA),
            (tA = KA),
            (X = FA),
            (BA = HA),
            (EA = OA),
            (w = ue),
            (AA = $A),
            (j = ce),
            (K = Ie),
            (oA = Be),
            (G = KA),
            (v = Be),
            (P = v & 65535),
            (q = v >>> 16),
            (J = G & 65535),
            (V = G >>> 16),
            (G =
              ((S >>> 14) | ($A << (32 - 14))) ^
              ((S >>> 18) | ($A << (32 - 18))) ^
              (($A >>> (41 - 32)) | (S << (32 - (41 - 32))))),
            (v =
              (($A >>> 14) | (S << (32 - 14))) ^
              (($A >>> 18) | (S << (32 - 18))) ^
              ((S >>> (41 - 32)) | ($A << (32 - (41 - 32))))),
            (P += v & 65535),
            (q += v >>> 16),
            (J += G & 65535),
            (V += G >>> 16),
            (G = (S & TA) ^ (~S & JA)),
            (v = ($A & ce) ^ (~$A & Ie)),
            (P += v & 65535),
            (q += v >>> 16),
            (J += G & 65535),
            (V += G >>> 16),
            (G = n[IA * 2]),
            (v = n[IA * 2 + 1]),
            (P += v & 65535),
            (q += v >>> 16),
            (J += G & 65535),
            (V += G >>> 16),
            (G = Q[IA % 16]),
            (v = b[IA % 16]),
            (P += v & 65535),
            (q += v >>> 16),
            (J += G & 65535),
            (V += G >>> 16),
            (q += P >>> 16),
            (J += q >>> 16),
            (V += J >>> 16),
            (rA = (J & 65535) | (V << 16)),
            (gA = (P & 65535) | (q << 16)),
            (G = rA),
            (v = gA),
            (P = v & 65535),
            (q = v >>> 16),
            (J = G & 65535),
            (V = G >>> 16),
            (G =
              ((CA >>> 28) | (FA << (32 - 28))) ^
              ((FA >>> (34 - 32)) | (CA << (32 - (34 - 32)))) ^
              ((FA >>> (39 - 32)) | (CA << (32 - (39 - 32))))),
            (v =
              ((FA >>> 28) | (CA << (32 - 28))) ^
              ((CA >>> (34 - 32)) | (FA << (32 - (34 - 32)))) ^
              ((CA >>> (39 - 32)) | (FA << (32 - (39 - 32))))),
            (P += v & 65535),
            (q += v >>> 16),
            (J += G & 65535),
            (V += G >>> 16),
            (G = (CA & mA) ^ (CA & _A) ^ (mA & _A)),
            (v = (FA & HA) ^ (FA & OA) ^ (HA & OA)),
            (P += v & 65535),
            (q += v >>> 16),
            (J += G & 65535),
            (V += G >>> 16),
            (q += P >>> 16),
            (J += q >>> 16),
            (V += J >>> 16),
            (tA = (J & 65535) | (V << 16)),
            (oA = (P & 65535) | (q << 16)),
            (G = H),
            (v = w),
            (P = v & 65535),
            (q = v >>> 16),
            (J = G & 65535),
            (V = G >>> 16),
            (G = rA),
            (v = gA),
            (P += v & 65535),
            (q += v >>> 16),
            (J += G & 65535),
            (V += G >>> 16),
            (q += P >>> 16),
            (J += q >>> 16),
            (V += J >>> 16),
            (H = (J & 65535) | (V << 16)),
            (w = (P & 65535) | (q << 16)),
            (mA = R),
            (_A = O),
            (bA = z),
            (S = H),
            (TA = p),
            (JA = Y),
            (KA = k),
            (CA = tA),
            (HA = X),
            (OA = BA),
            (ue = EA),
            ($A = w),
            (ce = AA),
            (Ie = j),
            (Be = K),
            (FA = oA),
            IA % 16 === 15)
          )
            for (nA = 0; nA < 16; nA++)
              (G = Q[nA]),
                (v = b[nA]),
                (P = v & 65535),
                (q = v >>> 16),
                (J = G & 65535),
                (V = G >>> 16),
                (G = Q[(nA + 9) % 16]),
                (v = b[(nA + 9) % 16]),
                (P += v & 65535),
                (q += v >>> 16),
                (J += G & 65535),
                (V += G >>> 16),
                (rA = Q[(nA + 1) % 16]),
                (gA = b[(nA + 1) % 16]),
                (G =
                  ((rA >>> 1) | (gA << (32 - 1))) ^
                  ((rA >>> 8) | (gA << (32 - 8))) ^
                  (rA >>> 7)),
                (v =
                  ((gA >>> 1) | (rA << (32 - 1))) ^
                  ((gA >>> 8) | (rA << (32 - 8))) ^
                  ((gA >>> 7) | (rA << (32 - 7)))),
                (P += v & 65535),
                (q += v >>> 16),
                (J += G & 65535),
                (V += G >>> 16),
                (rA = Q[(nA + 14) % 16]),
                (gA = b[(nA + 14) % 16]),
                (G =
                  ((rA >>> 19) | (gA << (32 - 19))) ^
                  ((gA >>> (61 - 32)) | (rA << (32 - (61 - 32)))) ^
                  (rA >>> 6)),
                (v =
                  ((gA >>> 19) | (rA << (32 - 19))) ^
                  ((rA >>> (61 - 32)) | (gA << (32 - (61 - 32)))) ^
                  ((gA >>> 6) | (rA << (32 - 6)))),
                (P += v & 65535),
                (q += v >>> 16),
                (J += G & 65535),
                (V += G >>> 16),
                (q += P >>> 16),
                (J += q >>> 16),
                (V += J >>> 16),
                (Q[nA] = (J & 65535) | (V << 16)),
                (b[nA] = (P & 65535) | (q << 16));
        (G = CA),
          (v = FA),
          (P = v & 65535),
          (q = v >>> 16),
          (J = G & 65535),
          (V = G >>> 16),
          (G = o[0]),
          (v = B[0]),
          (P += v & 65535),
          (q += v >>> 16),
          (J += G & 65535),
          (V += G >>> 16),
          (q += P >>> 16),
          (J += q >>> 16),
          (V += J >>> 16),
          (o[0] = CA = (J & 65535) | (V << 16)),
          (B[0] = FA = (P & 65535) | (q << 16)),
          (G = mA),
          (v = HA),
          (P = v & 65535),
          (q = v >>> 16),
          (J = G & 65535),
          (V = G >>> 16),
          (G = o[1]),
          (v = B[1]),
          (P += v & 65535),
          (q += v >>> 16),
          (J += G & 65535),
          (V += G >>> 16),
          (q += P >>> 16),
          (J += q >>> 16),
          (V += J >>> 16),
          (o[1] = mA = (J & 65535) | (V << 16)),
          (B[1] = HA = (P & 65535) | (q << 16)),
          (G = _A),
          (v = OA),
          (P = v & 65535),
          (q = v >>> 16),
          (J = G & 65535),
          (V = G >>> 16),
          (G = o[2]),
          (v = B[2]),
          (P += v & 65535),
          (q += v >>> 16),
          (J += G & 65535),
          (V += G >>> 16),
          (q += P >>> 16),
          (J += q >>> 16),
          (V += J >>> 16),
          (o[2] = _A = (J & 65535) | (V << 16)),
          (B[2] = OA = (P & 65535) | (q << 16)),
          (G = bA),
          (v = ue),
          (P = v & 65535),
          (q = v >>> 16),
          (J = G & 65535),
          (V = G >>> 16),
          (G = o[3]),
          (v = B[3]),
          (P += v & 65535),
          (q += v >>> 16),
          (J += G & 65535),
          (V += G >>> 16),
          (q += P >>> 16),
          (J += q >>> 16),
          (V += J >>> 16),
          (o[3] = bA = (J & 65535) | (V << 16)),
          (B[3] = ue = (P & 65535) | (q << 16)),
          (G = S),
          (v = $A),
          (P = v & 65535),
          (q = v >>> 16),
          (J = G & 65535),
          (V = G >>> 16),
          (G = o[4]),
          (v = B[4]),
          (P += v & 65535),
          (q += v >>> 16),
          (J += G & 65535),
          (V += G >>> 16),
          (q += P >>> 16),
          (J += q >>> 16),
          (V += J >>> 16),
          (o[4] = S = (J & 65535) | (V << 16)),
          (B[4] = $A = (P & 65535) | (q << 16)),
          (G = TA),
          (v = ce),
          (P = v & 65535),
          (q = v >>> 16),
          (J = G & 65535),
          (V = G >>> 16),
          (G = o[5]),
          (v = B[5]),
          (P += v & 65535),
          (q += v >>> 16),
          (J += G & 65535),
          (V += G >>> 16),
          (q += P >>> 16),
          (J += q >>> 16),
          (V += J >>> 16),
          (o[5] = TA = (J & 65535) | (V << 16)),
          (B[5] = ce = (P & 65535) | (q << 16)),
          (G = JA),
          (v = Ie),
          (P = v & 65535),
          (q = v >>> 16),
          (J = G & 65535),
          (V = G >>> 16),
          (G = o[6]),
          (v = B[6]),
          (P += v & 65535),
          (q += v >>> 16),
          (J += G & 65535),
          (V += G >>> 16),
          (q += P >>> 16),
          (J += q >>> 16),
          (V += J >>> 16),
          (o[6] = JA = (J & 65535) | (V << 16)),
          (B[6] = Ie = (P & 65535) | (q << 16)),
          (G = KA),
          (v = Be),
          (P = v & 65535),
          (q = v >>> 16),
          (J = G & 65535),
          (V = G >>> 16),
          (G = o[7]),
          (v = B[7]),
          (P += v & 65535),
          (q += v >>> 16),
          (J += G & 65535),
          (V += G >>> 16),
          (q += P >>> 16),
          (J += q >>> 16),
          (V += J >>> 16),
          (o[7] = KA = (J & 65535) | (V << 16)),
          (B[7] = Be = (P & 65535) | (q << 16)),
          (le += 128),
          (i -= 128);
      }
      return i;
    }
    function f(o, B, I) {
      var i = new Int32Array(8),
        Q = new Int32Array(8),
        b = new Uint8Array(256),
        R,
        O = I;
      for (
        i[0] = 1779033703,
          i[1] = 3144134277,
          i[2] = 1013904242,
          i[3] = 2773480762,
          i[4] = 1359893119,
          i[5] = 2600822924,
          i[6] = 528734635,
          i[7] = 1541459225,
          Q[0] = 4089235720,
          Q[1] = 2227873595,
          Q[2] = 4271175723,
          Q[3] = 1595750129,
          Q[4] = 2917565137,
          Q[5] = 725511199,
          Q[6] = 4215389547,
          Q[7] = 327033209,
          s(i, Q, B, I),
          I %= 128,
          R = 0;
        R < I;
        R++
      )
        b[R] = B[O - I + R];
      for (
        b[I] = 128,
          I = 256 - 128 * (I < 112 ? 1 : 0),
          b[I - 9] = 0,
          sA(b, I - 8, (O / 536870912) | 0, O << 3),
          s(i, Q, b, I),
          R = 0;
        R < 8;
        R++
      )
        sA(o, 8 * R, i[R], Q[R]);
      return 0;
    }
    function h(o, B) {
      var I = e(),
        i = e(),
        Q = e(),
        b = e(),
        R = e(),
        O = e(),
        z = e(),
        H = e(),
        p = e();
      C(I, o[1], o[0]),
        C(p, B[1], B[0]),
        dA(I, I, p),
        SA(i, o[0], o[1]),
        SA(p, B[0], B[1]),
        dA(i, i, p),
        dA(Q, o[3], B[3]),
        dA(Q, Q, L),
        dA(b, o[2], B[2]),
        SA(b, b, b),
        C(R, i, I),
        C(O, b, Q),
        SA(z, b, Q),
        SA(H, i, I),
        dA(o[0], R, O),
        dA(o[1], H, z),
        dA(o[2], z, O),
        dA(o[3], R, H);
    }
    function x(o, B, I) {
      var i;
      for (i = 0; i < 4; i++) jA(o[i], B[i], I);
    }
    function M(o, B) {
      var I = e(),
        i = e(),
        Q = e();
      Me(Q, B[2]),
        dA(I, B[0], Q),
        dA(i, B[1], Q),
        LA(o, i),
        (o[31] ^= yA(I) << 7);
    }
    function W(o, B, I) {
      var i, Q;
      for (
        oe(o[0], E), oe(o[1], u), oe(o[2], u), oe(o[3], E), Q = 255;
        Q >= 0;
        --Q
      )
        (i = (I[(Q / 8) | 0] >> (Q & 7)) & 1),
          x(o, B, i),
          h(B, o),
          h(o, o),
          x(o, B, i);
    }
    function iA(o, B) {
      var I = [e(), e(), e(), e()];
      oe(I[0], U), oe(I[1], eA), oe(I[2], u), dA(I[3], U, eA), W(o, I, B);
    }
    function hA(o, B, I) {
      var i = new Uint8Array(64),
        Q = [e(), e(), e(), e()],
        b;
      for (
        I || r(B, 32),
          f(i, B, 32),
          i[0] &= 248,
          i[31] &= 127,
          i[31] |= 64,
          iA(Q, i),
          M(o, Q),
          b = 0;
        b < 32;
        b++
      )
        B[b + 32] = o[b];
      return 0;
    }
    var pA = new Float64Array([
      237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
    ]);
    function $(o, B) {
      var I, i, Q, b;
      for (i = 63; i >= 32; --i) {
        for (I = 0, Q = i - 32, b = i - 12; Q < b; ++Q)
          (B[Q] += I - 16 * B[i] * pA[Q - (i - 32)]),
            (I = Math.floor((B[Q] + 128) / 256)),
            (B[Q] -= I * 256);
        (B[Q] += I), (B[i] = 0);
      }
      for (I = 0, Q = 0; Q < 32; Q++)
        (B[Q] += I - (B[31] >> 4) * pA[Q]), (I = B[Q] >> 8), (B[Q] &= 255);
      for (Q = 0; Q < 32; Q++) B[Q] -= I * pA[Q];
      for (i = 0; i < 32; i++) (B[i + 1] += B[i] >> 8), (o[i] = B[i] & 255);
    }
    function DA(o) {
      var B = new Float64Array(64),
        I;
      for (I = 0; I < 64; I++) B[I] = o[I];
      for (I = 0; I < 64; I++) o[I] = 0;
      $(o, B);
    }
    function XA(o, B, I, i) {
      var Q = new Uint8Array(64),
        b = new Uint8Array(64),
        R = new Uint8Array(64),
        O,
        z,
        H = new Float64Array(64),
        p = [e(), e(), e(), e()];
      f(Q, i, 32), (Q[0] &= 248), (Q[31] &= 127), (Q[31] |= 64);
      var Y = I + 64;
      for (O = 0; O < I; O++) o[64 + O] = B[O];
      for (O = 0; O < 32; O++) o[32 + O] = Q[32 + O];
      for (
        f(R, o.subarray(32), I + 32), DA(R), iA(p, R), M(o, p), O = 32;
        O < 64;
        O++
      )
        o[O] = i[O];
      for (f(b, o, I + 64), DA(b), O = 0; O < 64; O++) H[O] = 0;
      for (O = 0; O < 32; O++) H[O] = R[O];
      for (O = 0; O < 32; O++) for (z = 0; z < 32; z++) H[O + z] += b[O] * Q[z];
      return $(o.subarray(32), H), Y;
    }
    function De(o, B) {
      var I = e(),
        i = e(),
        Q = e(),
        b = e(),
        R = e(),
        O = e(),
        z = e();
      return (
        oe(o[2], u),
        VA(o[1], B),
        ae(Q, o[1]),
        dA(b, Q, m),
        C(Q, Q, o[2]),
        SA(b, o[2], b),
        ae(R, b),
        ae(O, R),
        dA(z, O, R),
        dA(I, z, Q),
        dA(I, I, b),
        cA(I, I),
        dA(I, I, Q),
        dA(I, I, b),
        dA(I, I, b),
        dA(o[0], I, b),
        ae(i, o[0]),
        dA(i, i, b),
        we(i, Q) && dA(o[0], o[0], T),
        ae(i, o[0]),
        dA(i, i, b),
        we(i, Q)
          ? -1
          : (yA(o[0]) === B[31] >> 7 && C(o[0], E, o[0]),
            dA(o[3], o[0], o[1]),
            0)
      );
    }
    function Qe(o, B, I, i) {
      var Q,
        b = new Uint8Array(32),
        R = new Uint8Array(64),
        O = [e(), e(), e(), e()],
        z = [e(), e(), e(), e()];
      if (I < 64 || De(z, i)) return -1;
      for (Q = 0; Q < I; Q++) o[Q] = B[Q];
      for (Q = 0; Q < 32; Q++) o[Q + 32] = i[Q];
      if (
        (f(R, o, I),
        DA(R),
        W(O, z, R),
        iA(z, B.subarray(32)),
        h(O, z),
        M(b, O),
        (I -= 64),
        YA(B, 0, b, 0))
      ) {
        for (Q = 0; Q < I; Q++) o[Q] = 0;
        return -1;
      }
      for (Q = 0; Q < I; Q++) o[Q] = B[Q + 64];
      return I;
    }
    var me = 32,
      xA = 24,
      xe = 32,
      fe = 16,
      zA = 32,
      ZA = 32,
      $e = 32,
      wA = 32,
      ke = 32,
      xt = xA,
      St = xe,
      lt = fe,
      Ge = 64,
      Se = 32,
      At = 64,
      et = 32,
      at = 64;
    A.lowlevel = {
      crypto_core_hsalsa20: GA,
      crypto_stream_xor: Z,
      crypto_stream: PA,
      crypto_stream_salsa20_xor: fA,
      crypto_stream_salsa20: NA,
      crypto_onetimeauth: vA,
      crypto_onetimeauth_verify: kA,
      crypto_verify_16: UA,
      crypto_verify_32: YA,
      crypto_secretbox: se,
      crypto_secretbox_open: re,
      crypto_scalarmult: uA,
      crypto_scalarmult_base: l,
      crypto_box_beforenm: D,
      crypto_box_afternm: F,
      crypto_box: _,
      crypto_box_open: g,
      crypto_box_keypair: d,
      crypto_hash: f,
      crypto_sign: XA,
      crypto_sign_keypair: hA,
      crypto_sign_open: Qe,
      crypto_secretbox_KEYBYTES: me,
      crypto_secretbox_NONCEBYTES: xA,
      crypto_secretbox_ZEROBYTES: xe,
      crypto_secretbox_BOXZEROBYTES: fe,
      crypto_scalarmult_BYTES: zA,
      crypto_scalarmult_SCALARBYTES: ZA,
      crypto_box_PUBLICKEYBYTES: $e,
      crypto_box_SECRETKEYBYTES: wA,
      crypto_box_BEFORENMBYTES: ke,
      crypto_box_NONCEBYTES: xt,
      crypto_box_ZEROBYTES: St,
      crypto_box_BOXZEROBYTES: lt,
      crypto_sign_BYTES: Ge,
      crypto_sign_PUBLICKEYBYTES: Se,
      crypto_sign_SECRETKEYBYTES: At,
      crypto_sign_SEEDBYTES: et,
      crypto_hash_BYTES: at,
      gf: e,
      D: m,
      L: pA,
      pack25519: LA,
      unpack25519: VA,
      M: dA,
      A: SA,
      S: ae,
      Z: C,
      pow2523: cA,
      add: h,
      set25519: oe,
      modL: $,
      scalarmult: W,
      scalarbase: iA,
    };
    function Lt(o, B) {
      if (o.length !== me) throw new Error("bad key size");
      if (B.length !== xA) throw new Error("bad nonce size");
    }
    function ee(o, B) {
      if (o.length !== $e) throw new Error("bad public key size");
      if (B.length !== wA) throw new Error("bad secret key size");
    }
    function pe() {
      for (var o = 0; o < arguments.length; o++)
        if (!(arguments[o] instanceof Uint8Array))
          throw new TypeError("unexpected type, use Uint8Array");
    }
    function Dt(o) {
      for (var B = 0; B < o.length; B++) o[B] = 0;
    }
    (A.randomBytes = function (o) {
      var B = new Uint8Array(o);
      return r(B, o), B;
    }),
      (A.secretbox = function (o, B, I) {
        pe(o, B, I), Lt(I, B);
        for (
          var i = new Uint8Array(xe + o.length),
            Q = new Uint8Array(i.length),
            b = 0;
          b < o.length;
          b++
        )
          i[b + xe] = o[b];
        return se(Q, i, i.length, B, I), Q.subarray(fe);
      }),
      (A.secretbox.open = function (o, B, I) {
        pe(o, B, I), Lt(I, B);
        for (
          var i = new Uint8Array(fe + o.length),
            Q = new Uint8Array(i.length),
            b = 0;
          b < o.length;
          b++
        )
          i[b + fe] = o[b];
        return i.length < 32 || re(Q, i, i.length, B, I) !== 0
          ? null
          : Q.subarray(xe);
      }),
      (A.secretbox.keyLength = me),
      (A.secretbox.nonceLength = xA),
      (A.secretbox.overheadLength = fe),
      (A.scalarMult = function (o, B) {
        if ((pe(o, B), o.length !== ZA)) throw new Error("bad n size");
        if (B.length !== zA) throw new Error("bad p size");
        var I = new Uint8Array(zA);
        return uA(I, o, B), I;
      }),
      (A.scalarMult.base = function (o) {
        if ((pe(o), o.length !== ZA)) throw new Error("bad n size");
        var B = new Uint8Array(zA);
        return l(B, o), B;
      }),
      (A.scalarMult.scalarLength = ZA),
      (A.scalarMult.groupElementLength = zA),
      (A.box = function (o, B, I, i) {
        var Q = A.box.before(I, i);
        return A.secretbox(o, B, Q);
      }),
      (A.box.before = function (o, B) {
        pe(o, B), ee(o, B);
        var I = new Uint8Array(ke);
        return D(I, o, B), I;
      }),
      (A.box.after = A.secretbox),
      (A.box.open = function (o, B, I, i) {
        var Q = A.box.before(I, i);
        return A.secretbox.open(o, B, Q);
      }),
      (A.box.open.after = A.secretbox.open),
      (A.box.keyPair = function () {
        var o = new Uint8Array($e),
          B = new Uint8Array(wA);
        return d(o, B), { publicKey: o, secretKey: B };
      }),
      (A.box.keyPair.fromSecretKey = function (o) {
        if ((pe(o), o.length !== wA)) throw new Error("bad secret key size");
        var B = new Uint8Array($e);
        return l(B, o), { publicKey: B, secretKey: new Uint8Array(o) };
      }),
      (A.box.publicKeyLength = $e),
      (A.box.secretKeyLength = wA),
      (A.box.sharedKeyLength = ke),
      (A.box.nonceLength = xt),
      (A.box.overheadLength = A.secretbox.overheadLength),
      (A.sign = function (o, B) {
        if ((pe(o, B), B.length !== At)) throw new Error("bad secret key size");
        var I = new Uint8Array(Ge + o.length);
        return XA(I, o, o.length, B), I;
      }),
      (A.sign.open = function (o, B) {
        if ((pe(o, B), B.length !== Se)) throw new Error("bad public key size");
        var I = new Uint8Array(o.length),
          i = Qe(I, o, o.length, B);
        if (i < 0) return null;
        for (var Q = new Uint8Array(i), b = 0; b < Q.length; b++) Q[b] = I[b];
        return Q;
      }),
      (A.sign.detached = function (o, B) {
        for (
          var I = A.sign(o, B), i = new Uint8Array(Ge), Q = 0;
          Q < i.length;
          Q++
        )
          i[Q] = I[Q];
        return i;
      }),
      (A.sign.detached.verify = function (o, B, I) {
        if ((pe(o, B, I), B.length !== Ge))
          throw new Error("bad signature size");
        if (I.length !== Se) throw new Error("bad public key size");
        var i = new Uint8Array(Ge + o.length),
          Q = new Uint8Array(Ge + o.length),
          b;
        for (b = 0; b < Ge; b++) i[b] = B[b];
        for (b = 0; b < o.length; b++) i[b + Ge] = o[b];
        return Qe(Q, i, i.length, I) >= 0;
      }),
      (A.sign.keyPair = function () {
        var o = new Uint8Array(Se),
          B = new Uint8Array(At);
        return hA(o, B), { publicKey: o, secretKey: B };
      }),
      (A.sign.keyPair.fromSecretKey = function (o) {
        if ((pe(o), o.length !== At)) throw new Error("bad secret key size");
        for (var B = new Uint8Array(Se), I = 0; I < B.length; I++)
          B[I] = o[32 + I];
        return { publicKey: B, secretKey: new Uint8Array(o) };
      }),
      (A.sign.keyPair.fromSeed = function (o) {
        if ((pe(o), o.length !== et)) throw new Error("bad seed size");
        for (
          var B = new Uint8Array(Se), I = new Uint8Array(At), i = 0;
          i < 32;
          i++
        )
          I[i] = o[i];
        return hA(B, I, !0), { publicKey: B, secretKey: I };
      }),
      (A.sign.publicKeyLength = Se),
      (A.sign.secretKeyLength = At),
      (A.sign.seedLength = et),
      (A.sign.signatureLength = Ge),
      (A.hash = function (o) {
        pe(o);
        var B = new Uint8Array(at);
        return f(B, o, o.length), B;
      }),
      (A.hash.hashLength = at),
      (A.verify = function (o, B) {
        return (
          pe(o, B),
          o.length === 0 || B.length === 0 || o.length !== B.length
            ? !1
            : QA(o, 0, B, 0, o.length) === 0
        );
      }),
      (A.setPRNG = function (o) {
        r = o;
      }),
      (function () {
        var o = typeof self < "u" ? self.crypto || self.msCrypto : null;
        if (o && o.getRandomValues) {
          var B = 65536;
          A.setPRNG(function (I, i) {
            var Q,
              b = new Uint8Array(i);
            for (Q = 0; Q < i; Q += B)
              o.getRandomValues(b.subarray(Q, Q + Math.min(i - Q, B)));
            for (Q = 0; Q < i; Q++) I[Q] = b[Q];
            Dt(b);
          });
        } else
          typeof Aa < "u" &&
            ((o = ea),
            o &&
              o.randomBytes &&
              A.setPRNG(function (I, i) {
                var Q,
                  b = o.randomBytes(i);
                for (Q = 0; Q < i; Q++) I[Q] = b[Q];
                Dt(b);
              }));
      })();
  })(t.exports ? t.exports : (self.nacl = self.nacl || {}));
})(Ys);
var ir = Ys.exports;
function hn(t) {
  var A;
  return new Uint8Array(
    ((A = t.match(/.{1,2}/g)) !== null && A !== void 0 ? A : []).map((e) =>
      parseInt(e, 16)
    )
  ).buffer;
}
function Rt(t) {
  return new Uint8Array(t).reduce(
    (A, e) => A + e.toString(16).padStart(2, "0"),
    ""
  );
}
const Mg = (t, A) => {
    if (t.byteLength !== A.byteLength) return !1;
    const e = new Uint8Array(t),
      r = new Uint8Array(A);
    for (let a = 0; a < e.length; a++) if (e[a] !== r[a]) return !1;
    return !0;
  },
  zn = (t) => {
    if (t <= 127) return 1;
    if (t <= 255) return 2;
    if (t <= 65535) return 3;
    if (t <= 16777215) return 4;
    throw new Error("Length too long (> 4 bytes)");
  },
  Zn = (t, A, e) => {
    if (e <= 127) return (t[A] = e), 1;
    if (e <= 255) return (t[A] = 129), (t[A + 1] = e), 2;
    if (e <= 65535) return (t[A] = 130), (t[A + 1] = e >> 8), (t[A + 2] = e), 3;
    if (e <= 16777215)
      return (
        (t[A] = 131),
        (t[A + 1] = e >> 16),
        (t[A + 2] = e >> 8),
        (t[A + 3] = e),
        4
      );
    throw new Error("Length too long (> 4 bytes)");
  },
  Qn = (t, A) => {
    if (t[A] < 128) return 1;
    if (t[A] === 128) throw new Error("Invalid length 0");
    if (t[A] === 129) return 2;
    if (t[A] === 130) return 3;
    if (t[A] === 131) return 4;
    throw new Error("Length too long (> 4 bytes)");
  },
  Gg = (t, A) => {
    const e = Qn(t, A);
    if (e === 1) return t[A];
    if (e === 2) return t[A + 1];
    if (e === 3) return (t[A + 1] << 8) + t[A + 2];
    if (e === 4) return (t[A + 1] << 16) + (t[A + 2] << 8) + t[A + 3];
    throw new Error("Length too long (> 4 bytes)");
  };
Uint8Array.from([48, 12, 6, 10, 43, 6, 1, 4, 1, 131, 184, 67, 1, 1]);
const Xn = Uint8Array.from([48, 5, 6, 3, 43, 101, 112]);
Uint8Array.from([
  48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 10,
]);
function Ug(t, A) {
  const e = 2 + zn(t.byteLength + 1),
    r = A.byteLength + e + t.byteLength;
  let a = 0;
  const c = new Uint8Array(1 + zn(r) + r);
  return (
    (c[a++] = 48),
    (a += Zn(c, a, r)),
    c.set(A, a),
    (a += A.byteLength),
    (c[a++] = 3),
    (a += Zn(c, a, t.byteLength + 1)),
    (c[a++] = 0),
    c.set(new Uint8Array(t), a),
    c
  );
}
const vg = (t, A) => {
  let e = 0;
  const r = (u, y) => {
      if (a[e++] !== u) throw new Error("Expected: " + y);
    },
    a = new Uint8Array(t);
  if (
    (r(48, "sequence"), (e += Qn(a, e)), !Mg(a.slice(e, e + A.byteLength), A))
  )
    throw new Error("Not the expected OID.");
  (e += A.byteLength), r(3, "bit string");
  const c = Gg(a, e) - 1;
  (e += Qn(a, e)), r(0, "0 padding");
  const E = a.slice(e);
  if (c !== E.length)
    throw new Error(
      `DER payload mismatch: Expected length ${c} actual length ${E.length}`
    );
  return E;
};
class nt {
  constructor(A) {
    (this.rawKey = A), (this.derKey = nt.derEncode(A));
  }
  static from(A) {
    return this.fromDer(A.toDer());
  }
  static fromRaw(A) {
    return new nt(A);
  }
  static fromDer(A) {
    return new nt(this.derDecode(A));
  }
  static derEncode(A) {
    return Ug(A, Xn).buffer;
  }
  static derDecode(A) {
    const e = vg(A, Xn);
    if (e.length !== this.RAW_KEY_LENGTH)
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    return e;
  }
  toDer() {
    return this.derKey;
  }
  toRaw() {
    return this.rawKey;
  }
}
nt.RAW_KEY_LENGTH = 32;
class dt extends bn {
  constructor(A, e) {
    super(), (this._privateKey = e), (this._publicKey = nt.from(A));
  }
  static generate(A) {
    if (A && A.length !== 32)
      throw new Error("Ed25519 Seed needs to be 32 bytes long.");
    const { publicKey: e, secretKey: r } =
      A === void 0 ? ir.sign.keyPair() : ir.sign.keyPair.fromSeed(A);
    return new this(nt.fromRaw(e), r);
  }
  static fromParsedJson(A) {
    const [e, r] = A;
    return new dt(nt.fromDer(hn(e)), hn(r));
  }
  static fromJSON(A) {
    const e = JSON.parse(A);
    if (Array.isArray(e)) {
      if (typeof e[0] == "string" && typeof e[1] == "string")
        return this.fromParsedJson([e[0], e[1]]);
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
  static fromKeyPair(A, e) {
    return new dt(nt.fromRaw(A), e);
  }
  static fromSecretKey(A) {
    const e = ir.sign.keyPair.fromSecretKey(new Uint8Array(A));
    return dt.fromKeyPair(e.publicKey, e.secretKey);
  }
  toJSON() {
    return [Rt(this._publicKey.toDer()), Rt(this._privateKey)];
  }
  getKeyPair() {
    return { secretKey: this._privateKey, publicKey: this._publicKey };
  }
  getPublicKey() {
    return this._publicKey;
  }
  async sign(A) {
    const e = new Uint8Array(A);
    return ir.sign.detached(e, new Uint8Array(this._privateKey)).buffer;
  }
}
class Rn extends Error {
  constructor(A) {
    super(A), (this.message = A), Object.setPrototypeOf(this, Rn.prototype);
  }
}
function $n(t) {
  if (t) return t;
  if (typeof crypto < "u" && crypto.subtle) return crypto.subtle;
  throw new Rn(
    "Global crypto was not available and none was provided. Please inlcude a SubtleCrypto implementation. See https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto"
  );
}
class Qr extends bn {
  constructor(A, e, r) {
    super(), (this._keyPair = A), (this._derKey = e), (this._subtleCrypto = r);
  }
  static async generate(A) {
    const {
        extractable: e = !1,
        keyUsages: r = ["sign", "verify"],
        subtleCrypto: a,
      } = A ?? {},
      c = $n(a),
      E = await c.generateKey({ name: "ECDSA", namedCurve: "P-256" }, e, r),
      u = await c.exportKey("spki", E.publicKey);
    return new this(E, u, c);
  }
  static async fromKeyPair(A, e) {
    const r = $n(e),
      a = await r.exportKey("spki", A.publicKey);
    return new Qr(A, a, r);
  }
  getKeyPair() {
    return this._keyPair;
  }
  getPublicKey() {
    const A = this._derKey,
      e = Object.create(this._keyPair.publicKey);
    return (
      (e.toDer = function () {
        return A;
      }),
      e
    );
  }
  async sign(A) {
    const e = { name: "ECDSA", hash: { name: "SHA-256" } };
    return (
      this._keyPair.privateKey,
      await this._subtleCrypto.sign(e, this._keyPair.privateKey, A)
    );
  }
}
var kg =
  (globalThis && globalThis.__rest) ||
  function (t, A) {
    var e = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        A.indexOf(r) < 0 &&
        (e[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
        A.indexOf(r[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[a]) &&
          (e[r[a]] = t[r[a]]);
    return e;
  };
const Lg = new TextEncoder().encode("ic-request-auth-delegation"),
  Yg = new TextEncoder().encode(`
ic-request`);
function Yr(t) {
  if (typeof t != "string" || t.length < 64)
    throw new Error("Invalid public key.");
  return hn(t);
}
class Tn {
  constructor(A, e, r) {
    (this.pubkey = A), (this.expiration = e), (this.targets = r);
  }
  toCBOR() {
    return Ue.value.map(
      Object.assign(
        {
          pubkey: Ue.value.bytes(this.pubkey),
          expiration: Ue.value.u64(this.expiration.toString(16), 16),
        },
        this.targets && {
          targets: Ue.value.array(
            this.targets.map((A) => Ue.value.bytes(A.toUint8Array()))
          ),
        }
      )
    );
  }
  toJSON() {
    return Object.assign(
      { expiration: this.expiration.toString(16), pubkey: Rt(this.pubkey) },
      this.targets && { targets: this.targets.map((A) => A.toHex()) }
    );
  }
}
async function Hg(t, A, e, r) {
  const a = new Tn(A.toDer(), BigInt(+e) * BigInt(1e6), r),
    c = new Uint8Array([...Lg, ...new Uint8Array(mr(a))]),
    E = await t.sign(c);
  return { delegation: a, signature: E };
}
class lr {
  constructor(A, e) {
    (this.delegations = A), (this.publicKey = e);
  }
  static async create(A, e, r = new Date(Date.now() + 15 * 60 * 1e3), a = {}) {
    var c, E;
    const u = await Hg(A, e, r, a.targets);
    return new lr(
      [
        ...(((c = a.previous) === null || c === void 0
          ? void 0
          : c.delegations) || []),
        u,
      ],
      ((E = a.previous) === null || E === void 0 ? void 0 : E.publicKey) ||
        A.getPublicKey().toDer()
    );
  }
  static fromJSON(A) {
    const { publicKey: e, delegations: r } =
      typeof A == "string" ? JSON.parse(A) : A;
    if (!Array.isArray(r)) throw new Error("Invalid delegations.");
    const a = r.map((c) => {
      const { delegation: E, signature: u } = c,
        { pubkey: y, expiration: m, targets: L } = E;
      if (L !== void 0 && !Array.isArray(L))
        throw new Error("Invalid targets.");
      return {
        delegation: new Tn(
          Yr(y),
          BigInt(`0x${m}`),
          L &&
            L.map((U) => {
              if (typeof U != "string") throw new Error("Invalid target.");
              return ie.fromHex(U);
            })
        ),
        signature: Yr(u),
      };
    });
    return new this(a, Yr(e));
  }
  static fromDelegations(A, e) {
    return new this(A, e);
  }
  toJSON() {
    return {
      delegations: this.delegations.map((A) => {
        const { delegation: e, signature: r } = A,
          { targets: a } = e;
        return {
          delegation: Object.assign(
            { expiration: e.expiration.toString(16), pubkey: Rt(e.pubkey) },
            a && { targets: a.map((c) => c.toHex()) }
          ),
          signature: Rt(r),
        };
      }),
      publicKey: Rt(this.publicKey),
    };
  }
}
class Ai extends bn {
  constructor(A, e) {
    super(), (this._inner = A), (this._delegation = e);
  }
  static fromDelegation(A, e) {
    return new this(A, e);
  }
  getDelegation() {
    return this._delegation;
  }
  getPublicKey() {
    return { toDer: () => this._delegation.publicKey };
  }
  sign(A) {
    return this._inner.sign(A);
  }
  async transformRequest(A) {
    const { body: e } = A,
      r = kg(A, ["body"]),
      a = await mr(e);
    return Object.assign(Object.assign({}, r), {
      body: {
        content: e,
        sender_sig: await this.sign(
          new Uint8Array([...Yg, ...new Uint8Array(a)])
        ),
        sender_delegation: this._delegation.delegations,
        sender_pubkey: this._delegation.publicKey,
      },
    });
  }
}
function Og(t, A) {
  for (const { delegation: a } of t.delegations)
    if (+new Date(Number(a.expiration / BigInt(1e6))) <= +Date.now()) return !1;
  const e = [],
    r = A?.scope;
  r &&
    (Array.isArray(r)
      ? e.push(...r.map((a) => (typeof a == "string" ? ie.fromText(a) : a)))
      : e.push(typeof r == "string" ? ie.fromText(r) : r));
  for (const a of e) {
    const c = a.toText();
    for (const { delegation: E } of t.delegations) {
      if (E.targets === void 0) continue;
      let u = !0;
      for (const y of E.targets)
        if (y.toText() === c) {
          u = !1;
          break;
        }
      if (u) return !1;
    }
  }
  return !0;
}
var ei;
(function (t) {
  t[(t.ECDSA_WITH_SHA256 = -7)] = "ECDSA_WITH_SHA256";
})(ei || (ei = {}));
const ti = ["mousedown", "mousemove", "keydown", "touchstart", "wheel"];
class ri {
  constructor(A = {}) {
    var e;
    (this.callbacks = []),
      (this.idleTimeout = 10 * 60 * 1e3),
      (this.timeoutID = void 0);
    const { onIdle: r, idleTimeout: a = 10 * 60 * 1e3 } = A || {};
    (this.callbacks = r ? [r] : []), (this.idleTimeout = a);
    const c = this._resetTimer.bind(this);
    window.addEventListener("load", c, !0),
      ti.forEach(function (u) {
        document.addEventListener(u, c, !0);
      });
    const E = (u, y) => {
      let m;
      return (...L) => {
        const U = this,
          eA = function () {
            (m = void 0), u.apply(U, L);
          };
        clearTimeout(m), (m = window.setTimeout(eA, y));
      };
    };
    if (A?.captureScroll) {
      const u = E(
        c,
        (e = A?.scrollDebounce) !== null && e !== void 0 ? e : 100
      );
      window.addEventListener("scroll", u, !0);
    }
    c();
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
    ti.forEach(function (e) {
      document.removeEventListener(e, A, !0);
    }),
      this.callbacks.forEach((e) => e());
  }
  _resetTimer() {
    const A = this.exit.bind(this);
    window.clearTimeout(this.timeoutID),
      (this.timeoutID = window.setTimeout(A, this.idleTimeout));
  }
}
const qg = (t, A) => A.some((e) => t instanceof e);
let ni, ii;
function Jg() {
  return (
    ni ||
    (ni = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function Kg() {
  return (
    ii ||
    (ii = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Hs = new WeakMap(),
  ln = new WeakMap(),
  Os = new WeakMap(),
  Hr = new WeakMap(),
  Mn = new WeakMap();
function Pg(t) {
  const A = new Promise((e, r) => {
    const a = () => {
        t.removeEventListener("success", c), t.removeEventListener("error", E);
      },
      c = () => {
        e(ut(t.result)), a();
      },
      E = () => {
        r(t.error), a();
      };
    t.addEventListener("success", c), t.addEventListener("error", E);
  });
  return (
    A.then((e) => {
      e instanceof IDBCursor && Hs.set(e, t);
    }).catch(() => {}),
    Mn.set(A, t),
    A
  );
}
function Wg(t) {
  if (ln.has(t)) return;
  const A = new Promise((e, r) => {
    const a = () => {
        t.removeEventListener("complete", c),
          t.removeEventListener("error", E),
          t.removeEventListener("abort", E);
      },
      c = () => {
        e(), a();
      },
      E = () => {
        r(t.error || new DOMException("AbortError", "AbortError")), a();
      };
    t.addEventListener("complete", c),
      t.addEventListener("error", E),
      t.addEventListener("abort", E);
  });
  ln.set(t, A);
}
let Cn = {
  get(t, A, e) {
    if (t instanceof IDBTransaction) {
      if (A === "done") return ln.get(t);
      if (A === "objectStoreNames") return t.objectStoreNames || Os.get(t);
      if (A === "store")
        return e.objectStoreNames[1]
          ? void 0
          : e.objectStore(e.objectStoreNames[0]);
    }
    return ut(t[A]);
  },
  set(t, A, e) {
    return (t[A] = e), !0;
  },
  has(t, A) {
    return t instanceof IDBTransaction && (A === "done" || A === "store")
      ? !0
      : A in t;
  },
};
function jg(t) {
  Cn = t(Cn);
}
function Vg(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (A, ...e) {
        const r = t.call(Or(this), A, ...e);
        return Os.set(r, A.sort ? A.sort() : [A]), ut(r);
      }
    : Kg().includes(t)
    ? function (...A) {
        return t.apply(Or(this), A), ut(Hs.get(this));
      }
    : function (...A) {
        return ut(t.apply(Or(this), A));
      };
}
function zg(t) {
  return typeof t == "function"
    ? Vg(t)
    : (t instanceof IDBTransaction && Wg(t),
      qg(t, Jg()) ? new Proxy(t, Cn) : t);
}
function ut(t) {
  if (t instanceof IDBRequest) return Pg(t);
  if (Hr.has(t)) return Hr.get(t);
  const A = zg(t);
  return A !== t && (Hr.set(t, A), Mn.set(A, t)), A;
}
const Or = (t) => Mn.get(t);
function Zg(t, A, { blocked: e, upgrade: r, blocking: a, terminated: c } = {}) {
  const E = indexedDB.open(t, A),
    u = ut(E);
  return (
    r &&
      E.addEventListener("upgradeneeded", (y) => {
        r(ut(E.result), y.oldVersion, y.newVersion, ut(E.transaction), y);
      }),
    e && E.addEventListener("blocked", (y) => e(y.oldVersion, y.newVersion, y)),
    u
      .then((y) => {
        c && y.addEventListener("close", () => c()),
          a &&
            y.addEventListener("versionchange", (m) =>
              a(m.oldVersion, m.newVersion, m)
            );
      })
      .catch(() => {}),
    u
  );
}
const Xg = ["get", "getKey", "getAll", "getAllKeys", "count"],
  $g = ["put", "add", "delete", "clear"],
  qr = new Map();
function si(t, A) {
  if (!(t instanceof IDBDatabase && !(A in t) && typeof A == "string")) return;
  if (qr.get(A)) return qr.get(A);
  const e = A.replace(/FromIndex$/, ""),
    r = A !== e,
    a = $g.includes(e);
  if (
    !(e in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(a || Xg.includes(e))
  )
    return;
  const c = async function (E, ...u) {
    const y = this.transaction(E, a ? "readwrite" : "readonly");
    let m = y.store;
    return (
      r && (m = m.index(u.shift())),
      (await Promise.all([m[e](...u), a && y.done]))[0]
    );
  };
  return qr.set(A, c), c;
}
jg((t) => ({
  ...t,
  get: (A, e, r) => si(A, e) || t.get(A, e, r),
  has: (A, e) => !!si(A, e) || t.has(A, e),
}));
const qs = "auth-client-db",
  Js = "ic-keyval",
  Af = async (t = qs, A = Js, e) => (
    Ks &&
      localStorage != null &&
      localStorage.getItem(It) &&
      (localStorage.removeItem(It), localStorage.removeItem(ct)),
    await Zg(t, e, {
      upgrade: (r) => {
        r.objectStoreNames,
          r.objectStoreNames.contains(A) && r.clear(A),
          r.createObjectStore(A);
      },
    })
  );
async function ef(t, A, e) {
  return await t.get(A, e);
}
async function tf(t, A, e, r) {
  return await t.put(A, r, e);
}
async function rf(t, A, e) {
  return await t.delete(A, e);
}
class Gn {
  constructor(A, e) {
    (this._db = A), (this._storeName = e);
  }
  static async create(A) {
    const { dbName: e = qs, storeName: r = Js, version: a = 1 } = A ?? {},
      c = await Af(e, r, a);
    return new Gn(c, r);
  }
  async set(A, e) {
    return await tf(this._db, this._storeName, A, e);
  }
  async get(A) {
    var e;
    return (e = await ef(this._db, this._storeName, A)) !== null && e !== void 0
      ? e
      : null;
  }
  async remove(A) {
    return await rf(this._db, this._storeName, A);
  }
}
const ct = "identity",
  It = "delegation",
  nf = "iv",
  sf = 1,
  Ks = typeof window < "u";
class af {
  constructor(A = "ic-", e) {
    (this.prefix = A), (this._localStorage = e);
  }
  get(A) {
    return Promise.resolve(this._getLocalStorage().getItem(this.prefix + A));
  }
  set(A, e) {
    return (
      this._getLocalStorage().setItem(this.prefix + A, e), Promise.resolve()
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
class of {
  get _db() {
    return new Promise((A) => {
      if (this.initializedDb) {
        A(this.initializedDb);
        return;
      }
      Gn.create({ version: sf }).then((e) => {
        (this.initializedDb = e), A(e);
      });
    });
  }
  async get(A) {
    return await (await this._db).get(A);
  }
  async set(A, e) {
    await (await this._db).set(A, e);
  }
  async remove(A) {
    await (await this._db).remove(A);
  }
}
const gf = "https://identity.ic0.app",
  ff = "#authorize",
  Jr = "ECDSA",
  Kr = "Ed25519",
  cf = 500,
  If = "UserInterrupt";
class Gf {
  constructor(A, e, r, a, c, E, u, y) {
    var m;
    (this._identity = A),
      (this._key = e),
      (this._chain = r),
      (this._storage = a),
      (this.idleManager = c),
      (this._createOptions = E),
      (this._idpWindow = u),
      (this._eventHandler = y);
    const L = this.logout.bind(this),
      U = E?.idleOptions;
    !U?.onIdle &&
      !U?.disableDefaultIdleCallback &&
      ((m = this.idleManager) === null ||
        m === void 0 ||
        m.registerCallback(() => {
          L(), location.reload();
        }));
  }
  static async create(A = {}) {
    var e, r, a;
    const c = (e = A.storage) !== null && e !== void 0 ? e : new of(),
      E = (r = A.keyType) !== null && r !== void 0 ? r : Jr;
    let u = null;
    if (A.identity) u = A.identity;
    else {
      let U = await c.get(ct);
      if (!U && Ks)
        try {
          const eA = new af(),
            T = await eA.get(It),
            sA = await eA.get(ct);
          T &&
            sA &&
            E === Jr &&
            (console.log(
              "Discovered an identity stored in localstorage. Migrating to IndexedDB"
            ),
            await c.set(It, T),
            await c.set(ct, sA),
            (U = T),
            await eA.remove(It),
            await eA.remove(ct));
        } catch (eA) {
          console.error(
            "error while attempting to recover localstorage: " + eA
          );
        }
      if (U)
        try {
          typeof U == "object"
            ? E === Kr && typeof U == "string"
              ? (u = await dt.fromJSON(U))
              : (u = await Qr.fromKeyPair(U))
            : typeof U == "string" && (u = dt.fromJSON(U));
        } catch {}
    }
    let y = new gn(),
      m = null;
    if (u)
      try {
        const U = await c.get(It);
        if (typeof U == "object" && U !== null)
          throw new Error(
            "Delegation chain is incorrectly stored. A delegation chain should be stored as a string."
          );
        A.identity
          ? (y = A.identity)
          : U &&
            ((m = lr.fromJSON(U)),
            Og(m) ? (y = Ai.fromDelegation(u, m)) : (await Pr(c), (u = null)));
      } catch (U) {
        console.error(U), await Pr(c), (u = null);
      }
    let L;
    return (
      !((a = A.idleOptions) === null || a === void 0) && a.disableIdle
        ? (L = void 0)
        : (m || A.identity) && (L = ri.create(A.idleOptions)),
      u ||
        (E === Kr
          ? ((u = await dt.generate()),
            await c.set(ct, JSON.stringify(u.toJSON())))
          : (A.storage &&
              E === Jr &&
              console.warn(
                `You are using a custom storage provider that may not support CryptoKey storage. If you are using a custom storage provider that does not support CryptoKey storage, you should use '${Kr}' as the key type, as it can serialize to a string`
              ),
            (u = await Qr.generate()),
            await c.set(ct, u.getKeyPair()))),
      new this(y, u, m, c, L, A)
    );
  }
  async _handleSuccess(A, e) {
    var r, a, c;
    const E = A.delegations.map((m) => ({
        delegation: new Tn(
          m.delegation.pubkey,
          m.delegation.expiration,
          m.delegation.targets
        ),
        signature: m.signature.buffer,
      })),
      u = lr.fromDelegations(E, A.userPublicKey.buffer),
      y = this._key;
    if (y) {
      if (
        ((this._chain = u),
        (this._identity = Ai.fromDelegation(y, this._chain)),
        (r = this._idpWindow) === null || r === void 0 || r.close(),
        !this.idleManager)
      ) {
        const m =
          (a = this._createOptions) === null || a === void 0
            ? void 0
            : a.idleOptions;
        (this.idleManager = ri.create(m)),
          !m?.onIdle &&
            !m?.disableDefaultIdleCallback &&
            ((c = this.idleManager) === null ||
              c === void 0 ||
              c.registerCallback(() => {
                this.logout(), location.reload();
              }));
      }
      this._removeEventListener(),
        delete this._idpWindow,
        this._chain &&
          (await this._storage.set(It, JSON.stringify(this._chain.toJSON()))),
        e?.();
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
    var e, r, a, c;
    const E = BigInt(8) * BigInt(36e11),
      u = new URL(
        ((e = A?.identityProvider) === null || e === void 0
          ? void 0
          : e.toString()) || gf
      );
    (u.hash = ff),
      (r = this._idpWindow) === null || r === void 0 || r.close(),
      this._removeEventListener(),
      (this._eventHandler = this._getEventHandler(
        u,
        Object.assign(
          {
            maxTimeToLive:
              (a = A?.maxTimeToLive) !== null && a !== void 0 ? a : E,
          },
          A
        )
      )),
      window.addEventListener("message", this._eventHandler),
      (this._idpWindow =
        (c = window.open(
          u.toString(),
          "idpWindow",
          A?.windowOpenerFeatures
        )) !== null && c !== void 0
          ? c
          : void 0);
    const y = () => {
      this._idpWindow &&
        (this._idpWindow.closed
          ? this._handleFailure(If, A?.onError)
          : setTimeout(y, cf));
    };
    y();
  }
  _getEventHandler(A, e) {
    return async (r) => {
      var a, c, E;
      if (r.origin !== A.origin) {
        console.warn(
          `WARNING: expected origin '${A.origin}', got '${r.origin}' (ignoring)`
        );
        return;
      }
      const u = r.data;
      switch (u.kind) {
        case "authorize-ready": {
          const y = {
            kind: "authorize-client",
            sessionPublicKey: new Uint8Array(
              (a = this._key) === null || a === void 0
                ? void 0
                : a.getPublicKey().toDer()
            ),
            maxTimeToLive: e?.maxTimeToLive,
            derivationOrigin:
              (c = e?.derivationOrigin) === null || c === void 0
                ? void 0
                : c.toString(),
          };
          (E = this._idpWindow) === null ||
            E === void 0 ||
            E.postMessage(y, A.origin);
          break;
        }
        case "authorize-client-success":
          try {
            await this._handleSuccess(u, e?.onSuccess);
          } catch (y) {
            this._handleFailure(y.message, e?.onError);
          }
          break;
        case "authorize-client-failure":
          this._handleFailure(u.text, e?.onError);
          break;
      }
    };
  }
  _handleFailure(A, e) {
    var r;
    (r = this._idpWindow) === null || r === void 0 || r.close(),
      e?.(A),
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
      (await Pr(this._storage),
      (this._identity = new gn()),
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
async function Pr(t) {
  await t.remove(ct), await t.remove(It), await t.remove(nf);
}
var Bf = ((t) => (
  (t[(t.FractionalMoreThan8Decimals = 0)] = "FractionalMoreThan8Decimals"),
  (t[(t.InvalidFormat = 1)] = "InvalidFormat"),
  t
))(Bf || {});
BigInt(1e8);
var ai = "abcdefghijklmnopqrstuvwxyz234567",
  Wt = Object.create(null);
for (let t = 0; t < ai.length; t++) Wt[ai[t]] = t;
Wt[0] = Wt.o;
Wt[1] = Wt.i;
var Ef = (t) => t == null,
  Uf = (t) => !Ef(t);
/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */ const {
  entries: Ps,
  setPrototypeOf: oi,
  isFrozen: uf,
  getPrototypeOf: hf,
  getOwnPropertyDescriptor: Ws,
} = Object;
let { freeze: Te, seal: je, create: js } = Object,
  { apply: dn, construct: wn } = typeof Reflect < "u" && Reflect;
Te ||
  (Te = function (A) {
    return A;
  });
je ||
  (je = function (A) {
    return A;
  });
dn ||
  (dn = function (A, e, r) {
    return A.apply(e, r);
  });
wn ||
  (wn = function (A, e) {
    return new A(...e);
  });
const sr = Oe(Array.prototype.forEach),
  gi = Oe(Array.prototype.pop),
  Ht = Oe(Array.prototype.push),
  Ir = Oe(String.prototype.toLowerCase),
  Wr = Oe(String.prototype.toString),
  Qf = Oe(String.prototype.match),
  Ot = Oe(String.prototype.replace),
  lf = Oe(String.prototype.indexOf),
  Cf = Oe(String.prototype.trim),
  ve = Oe(RegExp.prototype.test),
  qt = df(TypeError);
function Oe(t) {
  return function (A) {
    for (
      var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), a = 1;
      a < e;
      a++
    )
      r[a - 1] = arguments[a];
    return dn(t, A, r);
  };
}
function df(t) {
  return function () {
    for (var A = arguments.length, e = new Array(A), r = 0; r < A; r++)
      e[r] = arguments[r];
    return wn(t, e);
  };
}
function RA(t, A) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ir;
  oi && oi(t, null);
  let r = A.length;
  for (; r--; ) {
    let a = A[r];
    if (typeof a == "string") {
      const c = e(a);
      c !== a && (uf(A) || (A[r] = c), (a = c));
    }
    t[a] = !0;
  }
  return t;
}
function Ft(t) {
  const A = js(null);
  for (const [e, r] of Ps(t)) Ws(t, e) !== void 0 && (A[e] = r);
  return A;
}
function ar(t, A) {
  for (; t !== null; ) {
    const r = Ws(t, A);
    if (r) {
      if (r.get) return Oe(r.get);
      if (typeof r.value == "function") return Oe(r.value);
    }
    t = hf(t);
  }
  function e(r) {
    return console.warn("fallback value for", r), null;
  }
  return e;
}
const fi = Te([
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
  jr = Te([
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
  Vr = Te([
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
  wf = Te([
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
  zr = Te([
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
  pf = Te([
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
  ci = Te(["#text"]),
  Ii = Te([
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
  Zr = Te([
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
  Bi = Te([
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
  or = Te(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  yf = je(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  xf = je(/<%[\w\W]*|[\w\W]*%>/gm),
  Sf = je(/\${[\w\W]*}/gm),
  Df = je(/^data-[\-\w.\u00B7-\uFFFF]/),
  mf = je(/^aria-[\-\w]+$/),
  Vs = je(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  ),
  bf = je(/^(?:\w+script|data):/i),
  Nf = je(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  zs = je(/^html$/i);
var Ei = Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: yf,
  ERB_EXPR: xf,
  TMPLIT_EXPR: Sf,
  DATA_ATTR: Df,
  ARIA_ATTR: mf,
  IS_ALLOWED_URI: Vs,
  IS_SCRIPT_OR_DATA: bf,
  ATTR_WHITESPACE: Nf,
  DOCTYPE_NAME: zs,
});
const _f = function () {
    return typeof window > "u" ? null : window;
  },
  Ff = function (A, e) {
    if (typeof A != "object" || typeof A.createPolicy != "function")
      return null;
    let r = null;
    const a = "data-tt-policy-suffix";
    e && e.hasAttribute(a) && (r = e.getAttribute(a));
    const c = "dompurify" + (r ? "#" + r : "");
    try {
      return A.createPolicy(c, {
        createHTML(E) {
          return E;
        },
        createScriptURL(E) {
          return E;
        },
      });
    } catch {
      return (
        console.warn("TrustedTypes policy " + c + " could not be created."),
        null
      );
    }
  };
function Zs() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _f();
  const A = (H) => Zs(H);
  if (
    ((A.version = "3.0.6"),
    (A.removed = []),
    !t || !t.document || t.document.nodeType !== 9)
  )
    return (A.isSupported = !1), A;
  let { document: e } = t;
  const r = e,
    a = r.currentScript,
    {
      DocumentFragment: c,
      HTMLTemplateElement: E,
      Node: u,
      Element: y,
      NodeFilter: m,
      NamedNodeMap: L = t.NamedNodeMap || t.MozNamedAttrMap,
      HTMLFormElement: U,
      DOMParser: eA,
      trustedTypes: T,
    } = t,
    sA = y.prototype,
    QA = ar(sA, "cloneNode"),
    UA = ar(sA, "nextSibling"),
    YA = ar(sA, "childNodes"),
    lA = ar(sA, "parentNode");
  if (typeof E == "function") {
    const H = e.createElement("template");
    H.content && H.content.ownerDocument && (e = H.content.ownerDocument);
  }
  let MA,
    qA = "";
  const {
      implementation: GA,
      createNodeIterator: aA,
      createDocumentFragment: fA,
      getElementsByTagName: NA,
    } = e,
    { importNode: PA } = r;
  let Z = {};
  A.isSupported =
    typeof Ps == "function" &&
    typeof lA == "function" &&
    GA &&
    GA.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: WA,
    ERB_EXPR: vA,
    TMPLIT_EXPR: kA,
    DATA_ATTR: se,
    ARIA_ATTR: re,
    IS_SCRIPT_OR_DATA: oe,
    ATTR_WHITESPACE: ge,
  } = Ei;
  let { IS_ALLOWED_URI: jA } = Ei,
    LA = null;
  const we = RA({}, [...fi, ...jr, ...Vr, ...zr, ...ci]);
  let yA = null;
  const VA = RA({}, [...Ii, ...Zr, ...Bi, ...or]);
  let SA = Object.seal(
      js(null, {
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
    C = null,
    dA = null,
    ae = !0,
    Me = !0,
    cA = !1,
    uA = !0,
    l = !1,
    d = !1,
    D = !1,
    F = !1,
    N = !1,
    _ = !1,
    g = !1,
    n = !0,
    s = !1;
  const f = "user-content-";
  let h = !0,
    x = !1,
    M = {},
    W = null;
  const iA = RA({}, [
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
  let hA = null;
  const pA = RA({}, ["audio", "video", "img", "source", "image", "track"]);
  let $ = null;
  const DA = RA({}, [
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
    XA = "http://www.w3.org/1998/Math/MathML",
    De = "http://www.w3.org/2000/svg",
    Qe = "http://www.w3.org/1999/xhtml";
  let me = Qe,
    xA = !1,
    xe = null;
  const fe = RA({}, [XA, De, Qe], Wr);
  let zA = null;
  const ZA = ["application/xhtml+xml", "text/html"],
    $e = "text/html";
  let wA = null,
    ke = null;
  const xt = e.createElement("form"),
    St = function (p) {
      return p instanceof RegExp || p instanceof Function;
    },
    lt = function () {
      let p =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(ke && ke === p)) {
        if (
          ((!p || typeof p != "object") && (p = {}),
          (p = Ft(p)),
          (zA =
            ZA.indexOf(p.PARSER_MEDIA_TYPE) === -1
              ? (zA = $e)
              : (zA = p.PARSER_MEDIA_TYPE)),
          (wA = zA === "application/xhtml+xml" ? Wr : Ir),
          (LA = "ALLOWED_TAGS" in p ? RA({}, p.ALLOWED_TAGS, wA) : we),
          (yA = "ALLOWED_ATTR" in p ? RA({}, p.ALLOWED_ATTR, wA) : VA),
          (xe =
            "ALLOWED_NAMESPACES" in p ? RA({}, p.ALLOWED_NAMESPACES, Wr) : fe),
          ($ =
            "ADD_URI_SAFE_ATTR" in p
              ? RA(Ft(DA), p.ADD_URI_SAFE_ATTR, wA)
              : DA),
          (hA =
            "ADD_DATA_URI_TAGS" in p
              ? RA(Ft(pA), p.ADD_DATA_URI_TAGS, wA)
              : pA),
          (W = "FORBID_CONTENTS" in p ? RA({}, p.FORBID_CONTENTS, wA) : iA),
          (C = "FORBID_TAGS" in p ? RA({}, p.FORBID_TAGS, wA) : {}),
          (dA = "FORBID_ATTR" in p ? RA({}, p.FORBID_ATTR, wA) : {}),
          (M = "USE_PROFILES" in p ? p.USE_PROFILES : !1),
          (ae = p.ALLOW_ARIA_ATTR !== !1),
          (Me = p.ALLOW_DATA_ATTR !== !1),
          (cA = p.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (uA = p.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
          (l = p.SAFE_FOR_TEMPLATES || !1),
          (d = p.WHOLE_DOCUMENT || !1),
          (N = p.RETURN_DOM || !1),
          (_ = p.RETURN_DOM_FRAGMENT || !1),
          (g = p.RETURN_TRUSTED_TYPE || !1),
          (F = p.FORCE_BODY || !1),
          (n = p.SANITIZE_DOM !== !1),
          (s = p.SANITIZE_NAMED_PROPS || !1),
          (h = p.KEEP_CONTENT !== !1),
          (x = p.IN_PLACE || !1),
          (jA = p.ALLOWED_URI_REGEXP || Vs),
          (me = p.NAMESPACE || Qe),
          (SA = p.CUSTOM_ELEMENT_HANDLING || {}),
          p.CUSTOM_ELEMENT_HANDLING &&
            St(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
            (SA.tagNameCheck = p.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          p.CUSTOM_ELEMENT_HANDLING &&
            St(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
            (SA.attributeNameCheck =
              p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          p.CUSTOM_ELEMENT_HANDLING &&
            typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ==
              "boolean" &&
            (SA.allowCustomizedBuiltInElements =
              p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          l && (Me = !1),
          _ && (N = !0),
          M &&
            ((LA = RA({}, [...ci])),
            (yA = []),
            M.html === !0 && (RA(LA, fi), RA(yA, Ii)),
            M.svg === !0 && (RA(LA, jr), RA(yA, Zr), RA(yA, or)),
            M.svgFilters === !0 && (RA(LA, Vr), RA(yA, Zr), RA(yA, or)),
            M.mathMl === !0 && (RA(LA, zr), RA(yA, Bi), RA(yA, or))),
          p.ADD_TAGS && (LA === we && (LA = Ft(LA)), RA(LA, p.ADD_TAGS, wA)),
          p.ADD_ATTR && (yA === VA && (yA = Ft(yA)), RA(yA, p.ADD_ATTR, wA)),
          p.ADD_URI_SAFE_ATTR && RA($, p.ADD_URI_SAFE_ATTR, wA),
          p.FORBID_CONTENTS &&
            (W === iA && (W = Ft(W)), RA(W, p.FORBID_CONTENTS, wA)),
          h && (LA["#text"] = !0),
          d && RA(LA, ["html", "head", "body"]),
          LA.table && (RA(LA, ["tbody"]), delete C.tbody),
          p.TRUSTED_TYPES_POLICY)
        ) {
          if (typeof p.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw qt(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
            );
          if (typeof p.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw qt(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
            );
          (MA = p.TRUSTED_TYPES_POLICY), (qA = MA.createHTML(""));
        } else
          MA === void 0 && (MA = Ff(T, a)),
            MA !== null && typeof qA == "string" && (qA = MA.createHTML(""));
        Te && Te(p), (ke = p);
      }
    },
    Ge = RA({}, ["mi", "mo", "mn", "ms", "mtext"]),
    Se = RA({}, ["foreignobject", "desc", "title", "annotation-xml"]),
    At = RA({}, ["title", "style", "font", "a", "script"]),
    et = RA({}, jr);
  RA(et, Vr), RA(et, wf);
  const at = RA({}, zr);
  RA(at, pf);
  const Lt = function (p) {
      let Y = lA(p);
      (!Y || !Y.tagName) && (Y = { namespaceURI: me, tagName: "template" });
      const k = Ir(p.tagName),
        tA = Ir(Y.tagName);
      return xe[p.namespaceURI]
        ? p.namespaceURI === De
          ? Y.namespaceURI === Qe
            ? k === "svg"
            : Y.namespaceURI === XA
            ? k === "svg" && (tA === "annotation-xml" || Ge[tA])
            : !!et[k]
          : p.namespaceURI === XA
          ? Y.namespaceURI === Qe
            ? k === "math"
            : Y.namespaceURI === De
            ? k === "math" && Se[tA]
            : !!at[k]
          : p.namespaceURI === Qe
          ? (Y.namespaceURI === De && !Se[tA]) ||
            (Y.namespaceURI === XA && !Ge[tA])
            ? !1
            : !at[k] && (At[k] || !et[k])
          : !!(zA === "application/xhtml+xml" && xe[p.namespaceURI])
        : !1;
    },
    ee = function (p) {
      Ht(A.removed, { element: p });
      try {
        p.parentNode.removeChild(p);
      } catch {
        p.remove();
      }
    },
    pe = function (p, Y) {
      try {
        Ht(A.removed, { attribute: Y.getAttributeNode(p), from: Y });
      } catch {
        Ht(A.removed, { attribute: null, from: Y });
      }
      if ((Y.removeAttribute(p), p === "is" && !yA[p]))
        if (N || _)
          try {
            ee(Y);
          } catch {}
        else
          try {
            Y.setAttribute(p, "");
          } catch {}
    },
    Dt = function (p) {
      let Y = null,
        k = null;
      if (F) p = "<remove></remove>" + p;
      else {
        const BA = Qf(p, /^[\r\n\t ]+/);
        k = BA && BA[0];
      }
      zA === "application/xhtml+xml" &&
        me === Qe &&
        (p =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          p +
          "</body></html>");
      const tA = MA ? MA.createHTML(p) : p;
      if (me === Qe)
        try {
          Y = new eA().parseFromString(tA, zA);
        } catch {}
      if (!Y || !Y.documentElement) {
        Y = GA.createDocument(me, "template", null);
        try {
          Y.documentElement.innerHTML = xA ? qA : tA;
        } catch {}
      }
      const X = Y.body || Y.documentElement;
      return (
        p && k && X.insertBefore(e.createTextNode(k), X.childNodes[0] || null),
        me === Qe
          ? NA.call(Y, d ? "html" : "body")[0]
          : d
          ? Y.documentElement
          : X
      );
    },
    o = function (p) {
      return aA.call(
        p.ownerDocument || p,
        p,
        m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT,
        null
      );
    },
    B = function (p) {
      return (
        p instanceof U &&
        (typeof p.nodeName != "string" ||
          typeof p.textContent != "string" ||
          typeof p.removeChild != "function" ||
          !(p.attributes instanceof L) ||
          typeof p.removeAttribute != "function" ||
          typeof p.setAttribute != "function" ||
          typeof p.namespaceURI != "string" ||
          typeof p.insertBefore != "function" ||
          typeof p.hasChildNodes != "function")
      );
    },
    I = function (p) {
      return typeof u == "function" && p instanceof u;
    },
    i = function (p, Y, k) {
      Z[p] &&
        sr(Z[p], (tA) => {
          tA.call(A, Y, k, ke);
        });
    },
    Q = function (p) {
      let Y = null;
      if ((i("beforeSanitizeElements", p, null), B(p))) return ee(p), !0;
      const k = wA(p.nodeName);
      if (
        (i("uponSanitizeElement", p, { tagName: k, allowedTags: LA }),
        p.hasChildNodes() &&
          !I(p.firstElementChild) &&
          ve(/<[/\w]/g, p.innerHTML) &&
          ve(/<[/\w]/g, p.textContent))
      )
        return ee(p), !0;
      if (!LA[k] || C[k]) {
        if (
          !C[k] &&
          R(k) &&
          ((SA.tagNameCheck instanceof RegExp && ve(SA.tagNameCheck, k)) ||
            (SA.tagNameCheck instanceof Function && SA.tagNameCheck(k)))
        )
          return !1;
        if (h && !W[k]) {
          const tA = lA(p) || p.parentNode,
            X = YA(p) || p.childNodes;
          if (X && tA) {
            const BA = X.length;
            for (let EA = BA - 1; EA >= 0; --EA)
              tA.insertBefore(QA(X[EA], !0), UA(p));
          }
        }
        return ee(p), !0;
      }
      return (p instanceof y && !Lt(p)) ||
        ((k === "noscript" || k === "noembed" || k === "noframes") &&
          ve(/<\/no(script|embed|frames)/i, p.innerHTML))
        ? (ee(p), !0)
        : (l &&
            p.nodeType === 3 &&
            ((Y = p.textContent),
            sr([WA, vA, kA], (tA) => {
              Y = Ot(Y, tA, " ");
            }),
            p.textContent !== Y &&
              (Ht(A.removed, { element: p.cloneNode() }), (p.textContent = Y))),
          i("afterSanitizeElements", p, null),
          !1);
    },
    b = function (p, Y, k) {
      if (n && (Y === "id" || Y === "name") && (k in e || k in xt)) return !1;
      if (!(Me && !dA[Y] && ve(se, Y))) {
        if (!(ae && ve(re, Y))) {
          if (!yA[Y] || dA[Y]) {
            if (
              !(
                (R(p) &&
                  ((SA.tagNameCheck instanceof RegExp &&
                    ve(SA.tagNameCheck, p)) ||
                    (SA.tagNameCheck instanceof Function &&
                      SA.tagNameCheck(p))) &&
                  ((SA.attributeNameCheck instanceof RegExp &&
                    ve(SA.attributeNameCheck, Y)) ||
                    (SA.attributeNameCheck instanceof Function &&
                      SA.attributeNameCheck(Y)))) ||
                (Y === "is" &&
                  SA.allowCustomizedBuiltInElements &&
                  ((SA.tagNameCheck instanceof RegExp &&
                    ve(SA.tagNameCheck, k)) ||
                    (SA.tagNameCheck instanceof Function &&
                      SA.tagNameCheck(k))))
              )
            )
              return !1;
          } else if (!$[Y]) {
            if (!ve(jA, Ot(k, ge, ""))) {
              if (
                !(
                  (Y === "src" || Y === "xlink:href" || Y === "href") &&
                  p !== "script" &&
                  lf(k, "data:") === 0 &&
                  hA[p]
                )
              ) {
                if (!(cA && !ve(oe, Ot(k, ge, "")))) {
                  if (k) return !1;
                }
              }
            }
          }
        }
      }
      return !0;
    },
    R = function (p) {
      return p.indexOf("-") > 0;
    },
    O = function (p) {
      i("beforeSanitizeAttributes", p, null);
      const { attributes: Y } = p;
      if (!Y) return;
      const k = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: yA,
      };
      let tA = Y.length;
      for (; tA--; ) {
        const X = Y[tA],
          { name: BA, namespaceURI: EA, value: w } = X,
          AA = wA(BA);
        let j = BA === "value" ? w : Cf(w);
        if (
          ((k.attrName = AA),
          (k.attrValue = j),
          (k.keepAttr = !0),
          (k.forceKeepAttr = void 0),
          i("uponSanitizeAttribute", p, k),
          (j = k.attrValue),
          k.forceKeepAttr || (pe(BA, p), !k.keepAttr))
        )
          continue;
        if (!uA && ve(/\/>/i, j)) {
          pe(BA, p);
          continue;
        }
        l &&
          sr([WA, vA, kA], (oA) => {
            j = Ot(j, oA, " ");
          });
        const K = wA(p.nodeName);
        if (b(K, AA, j)) {
          if (
            (s && (AA === "id" || AA === "name") && (pe(BA, p), (j = f + j)),
            MA &&
              typeof T == "object" &&
              typeof T.getAttributeType == "function" &&
              !EA)
          )
            switch (T.getAttributeType(K, AA)) {
              case "TrustedHTML": {
                j = MA.createHTML(j);
                break;
              }
              case "TrustedScriptURL": {
                j = MA.createScriptURL(j);
                break;
              }
            }
          try {
            EA ? p.setAttributeNS(EA, BA, j) : p.setAttribute(BA, j),
              gi(A.removed);
          } catch {}
        }
      }
      i("afterSanitizeAttributes", p, null);
    },
    z = function H(p) {
      let Y = null;
      const k = o(p);
      for (i("beforeSanitizeShadowDOM", p, null); (Y = k.nextNode()); )
        i("uponSanitizeShadowNode", Y, null),
          !Q(Y) && (Y.content instanceof c && H(Y.content), O(Y));
      i("afterSanitizeShadowDOM", p, null);
    };
  return (
    (A.sanitize = function (H) {
      let p =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        Y = null,
        k = null,
        tA = null,
        X = null;
      if (((xA = !H), xA && (H = "<!-->"), typeof H != "string" && !I(H)))
        if (typeof H.toString == "function") {
          if (((H = H.toString()), typeof H != "string"))
            throw qt("dirty is not a string, aborting");
        } else throw qt("toString is not a function");
      if (!A.isSupported) return H;
      if ((D || lt(p), (A.removed = []), typeof H == "string" && (x = !1), x)) {
        if (H.nodeName) {
          const w = wA(H.nodeName);
          if (!LA[w] || C[w])
            throw qt("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (H instanceof u)
        (Y = Dt("<!---->")),
          (k = Y.ownerDocument.importNode(H, !0)),
          (k.nodeType === 1 && k.nodeName === "BODY") || k.nodeName === "HTML"
            ? (Y = k)
            : Y.appendChild(k);
      else {
        if (!N && !l && !d && H.indexOf("<") === -1)
          return MA && g ? MA.createHTML(H) : H;
        if (((Y = Dt(H)), !Y)) return N ? null : g ? qA : "";
      }
      Y && F && ee(Y.firstChild);
      const BA = o(x ? H : Y);
      for (; (tA = BA.nextNode()); )
        Q(tA) || (tA.content instanceof c && z(tA.content), O(tA));
      if (x) return H;
      if (N) {
        if (_)
          for (X = fA.call(Y.ownerDocument); Y.firstChild; )
            X.appendChild(Y.firstChild);
        else X = Y;
        return (
          (yA.shadowroot || yA.shadowrootmode) && (X = PA.call(r, X, !0)), X
        );
      }
      let EA = d ? Y.outerHTML : Y.innerHTML;
      return (
        d &&
          LA["!doctype"] &&
          Y.ownerDocument &&
          Y.ownerDocument.doctype &&
          Y.ownerDocument.doctype.name &&
          ve(zs, Y.ownerDocument.doctype.name) &&
          (EA =
            "<!DOCTYPE " +
            Y.ownerDocument.doctype.name +
            `>
` +
            EA),
        l &&
          sr([WA, vA, kA], (w) => {
            EA = Ot(EA, w, " ");
          }),
        MA && g ? MA.createHTML(EA) : EA
      );
    }),
    (A.setConfig = function () {
      let H =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      lt(H), (D = !0);
    }),
    (A.clearConfig = function () {
      (ke = null), (D = !1);
    }),
    (A.isValidAttribute = function (H, p, Y) {
      ke || lt({});
      const k = wA(H),
        tA = wA(p);
      return b(k, tA, Y);
    }),
    (A.addHook = function (H, p) {
      typeof p == "function" && ((Z[H] = Z[H] || []), Ht(Z[H], p));
    }),
    (A.removeHook = function (H) {
      if (Z[H]) return gi(Z[H]);
    }),
    (A.removeHooks = function (H) {
      Z[H] && (Z[H] = []);
    }),
    (A.removeAllHooks = function () {
      Z = {};
    }),
    A
  );
}
Zs();
export { Gf as A, Ns as H, Ef as Y, Fn as a, Uf as c, Tf as u };
