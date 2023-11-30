import { w as Oi } from "./index.8caf67b2.js";
import { _ as Ca } from "./preload-helper.a4192956.js";
const la = BigInt(60 * 60 * 1e3 * 1e3 * 1e3 * 24 * 14),
  da = 576,
  wa = 625;
var wt =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function pa(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function ya(t) {
  if (t.__esModule) return t;
  var A = t.default;
  if (typeof A == "function") {
    var e = function r() {
      return this instanceof r
        ? Reflect.construct(A, arguments, this.constructor)
        : A.apply(this, arguments);
    };
    e.prototype = A.prototype;
  } else e = {};
  return (
    Object.defineProperty(e, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (r) {
      var s = Object.getOwnPropertyDescriptor(t, r);
      Object.defineProperty(
        e,
        r,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }
      );
    }),
    e
  );
}
var xt = {},
  rr = {};
rr.byteLength = ma;
rr.toByteArray = _a;
rr.fromByteArray = Fa;
var Je = [],
  be = [],
  xa = typeof Uint8Array < "u" ? Uint8Array : Array,
  Cr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ut = 0, Sa = Cr.length; ut < Sa; ++ut)
  (Je[ut] = Cr[ut]), (be[Cr.charCodeAt(ut)] = ut);
be["-".charCodeAt(0)] = 62;
be["_".charCodeAt(0)] = 63;
function Hi(t) {
  var A = t.length;
  if (A % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = t.indexOf("=");
  e === -1 && (e = A);
  var r = e === A ? 0 : 4 - (e % 4);
  return [e, r];
}
function ma(t) {
  var A = Hi(t),
    e = A[0],
    r = A[1];
  return ((e + r) * 3) / 4 - r;
}
function Da(t, A, e) {
  return ((A + e) * 3) / 4 - e;
}
function _a(t) {
  var A,
    e = Hi(t),
    r = e[0],
    s = e[1],
    c = new xa(Da(t, r, s)),
    f = 0,
    h = s > 0 ? r - 4 : r,
    S;
  for (S = 0; S < h; S += 4)
    (A =
      (be[t.charCodeAt(S)] << 18) |
      (be[t.charCodeAt(S + 1)] << 12) |
      (be[t.charCodeAt(S + 2)] << 6) |
      be[t.charCodeAt(S + 3)]),
      (c[f++] = (A >> 16) & 255),
      (c[f++] = (A >> 8) & 255),
      (c[f++] = A & 255);
  return (
    s === 2 &&
      ((A = (be[t.charCodeAt(S)] << 2) | (be[t.charCodeAt(S + 1)] >> 4)),
      (c[f++] = A & 255)),
    s === 1 &&
      ((A =
        (be[t.charCodeAt(S)] << 10) |
        (be[t.charCodeAt(S + 1)] << 4) |
        (be[t.charCodeAt(S + 2)] >> 2)),
      (c[f++] = (A >> 8) & 255),
      (c[f++] = A & 255)),
    c
  );
}
function Na(t) {
  return (
    Je[(t >> 18) & 63] + Je[(t >> 12) & 63] + Je[(t >> 6) & 63] + Je[t & 63]
  );
}
function ba(t, A, e) {
  for (var r, s = [], c = A; c < e; c += 3)
    (r =
      ((t[c] << 16) & 16711680) + ((t[c + 1] << 8) & 65280) + (t[c + 2] & 255)),
      s.push(Na(r));
  return s.join("");
}
function Fa(t) {
  for (
    var A, e = t.length, r = e % 3, s = [], c = 16383, f = 0, h = e - r;
    f < h;
    f += c
  )
    s.push(ba(t, f, f + c > h ? h : f + c));
  return (
    r === 1
      ? ((A = t[e - 1]), s.push(Je[A >> 2] + Je[(A << 4) & 63] + "=="))
      : r === 2 &&
        ((A = (t[e - 2] << 8) + t[e - 1]),
        s.push(Je[A >> 10] + Je[(A >> 4) & 63] + Je[(A << 2) & 63] + "=")),
    s.join("")
  );
}
var ir = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ ir.read =
  function (t, A, e, r, s) {
    var c,
      f,
      h = s * 8 - r - 1,
      S = (1 << h) - 1,
      D = S >> 1,
      Y = -7,
      M = e ? s - 1 : 0,
      z = e ? -1 : 1,
      T = t[A + M];
    for (
      M += z, c = T & ((1 << -Y) - 1), T >>= -Y, Y += h;
      Y > 0;
      c = c * 256 + t[A + M], M += z, Y -= 8
    );
    for (
      f = c & ((1 << -Y) - 1), c >>= -Y, Y += r;
      Y > 0;
      f = f * 256 + t[A + M], M += z, Y -= 8
    );
    if (c === 0) c = 1 - D;
    else {
      if (c === S) return f ? NaN : (T ? -1 : 1) * (1 / 0);
      (f = f + Math.pow(2, r)), (c = c - D);
    }
    return (T ? -1 : 1) * f * Math.pow(2, c - r);
  };
ir.write = function (t, A, e, r, s, c) {
  var f,
    h,
    S,
    D = c * 8 - s - 1,
    Y = (1 << D) - 1,
    M = Y >> 1,
    z = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    T = r ? 0 : c - 1,
    nA = r ? 1 : -1,
    EA = A < 0 || (A === 0 && 1 / A < 0) ? 1 : 0;
  for (
    A = Math.abs(A),
      isNaN(A) || A === 1 / 0
        ? ((h = isNaN(A) ? 1 : 0), (f = Y))
        : ((f = Math.floor(Math.log(A) / Math.LN2)),
          A * (S = Math.pow(2, -f)) < 1 && (f--, (S *= 2)),
          f + M >= 1 ? (A += z / S) : (A += z * Math.pow(2, 1 - M)),
          A * S >= 2 && (f++, (S /= 2)),
          f + M >= Y
            ? ((h = 0), (f = Y))
            : f + M >= 1
            ? ((h = (A * S - 1) * Math.pow(2, s)), (f = f + M))
            : ((h = A * Math.pow(2, M - 1) * Math.pow(2, s)), (f = 0)));
    s >= 8;
    t[e + T] = h & 255, T += nA, h /= 256, s -= 8
  );
  for (
    f = (f << s) | h, D += s;
    D > 0;
    t[e + T] = f & 255, T += nA, f /= 256, D -= 8
  );
  t[e + T - nA] |= EA * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ (function (t) {
  var A = rr,
    e = ir,
    r =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  (t.Buffer = h), (t.SlowBuffer = uA), (t.INSPECT_MAX_BYTES = 50);
  var s = 2147483647;
  (t.kMaxLength = s),
    (h.TYPED_ARRAY_SUPPORT = c()),
    !h.TYPED_ARRAY_SUPPORT &&
      typeof console < "u" &&
      typeof console.error == "function" &&
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
  function c() {
    try {
      var g = new Uint8Array(1),
        i = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(i, Uint8Array.prototype),
        Object.setPrototypeOf(g, i),
        g.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(h.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (h.isBuffer(this)) return this.buffer;
    },
  }),
    Object.defineProperty(h.prototype, "offset", {
      enumerable: !0,
      get: function () {
        if (h.isBuffer(this)) return this.byteOffset;
      },
    });
  function f(g) {
    if (g > s)
      throw new RangeError(
        'The value "' + g + '" is invalid for option "size"'
      );
    var i = new Uint8Array(g);
    return Object.setPrototypeOf(i, h.prototype), i;
  }
  function h(g, i, a) {
    if (typeof g == "number") {
      if (typeof i == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return M(g);
    }
    return S(g, i, a);
  }
  h.poolSize = 8192;
  function S(g, i, a) {
    if (typeof g == "string") return z(g, i);
    if (ArrayBuffer.isView(g)) return nA(g);
    if (g == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof g
      );
    if (
      b(g, ArrayBuffer) ||
      (g && b(g.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (b(g, SharedArrayBuffer) || (g && b(g.buffer, SharedArrayBuffer))))
    )
      return EA(g, i, a);
    if (typeof g == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var I = g.valueOf && g.valueOf();
    if (I != null && I !== g) return h.from(I, i, a);
    var u = NA(g);
    if (u) return u;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof g[Symbol.toPrimitive] == "function"
    )
      return h.from(g[Symbol.toPrimitive]("string"), i, a);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof g
    );
  }
  (h.from = function (g, i, a) {
    return S(g, i, a);
  }),
    Object.setPrototypeOf(h.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(h, Uint8Array);
  function D(g) {
    if (typeof g != "number")
      throw new TypeError('"size" argument must be of type number');
    if (g < 0)
      throw new RangeError(
        'The value "' + g + '" is invalid for option "size"'
      );
  }
  function Y(g, i, a) {
    return (
      D(g),
      g <= 0
        ? f(g)
        : i !== void 0
        ? typeof a == "string"
          ? f(g).fill(i, a)
          : f(g).fill(i)
        : f(g)
    );
  }
  h.alloc = function (g, i, a) {
    return Y(g, i, a);
  };
  function M(g) {
    return D(g), f(g < 0 ? 0 : MA(g) | 0);
  }
  (h.allocUnsafe = function (g) {
    return M(g);
  }),
    (h.allocUnsafeSlow = function (g) {
      return M(g);
    });
  function z(g, i) {
    if (((typeof i != "string" || i === "") && (i = "utf8"), !h.isEncoding(i)))
      throw new TypeError("Unknown encoding: " + i);
    var a = te(g, i) | 0,
      I = f(a),
      u = I.write(g, i);
    return u !== a && (I = I.slice(0, u)), I;
  }
  function T(g) {
    for (
      var i = g.length < 0 ? 0 : MA(g.length) | 0, a = f(i), I = 0;
      I < i;
      I += 1
    )
      a[I] = g[I] & 255;
    return a;
  }
  function nA(g) {
    if (b(g, Uint8Array)) {
      var i = new Uint8Array(g);
      return EA(i.buffer, i.byteOffset, i.byteLength);
    }
    return T(g);
  }
  function EA(g, i, a) {
    if (i < 0 || g.byteLength < i)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (g.byteLength < i + (a || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var I;
    return (
      i === void 0 && a === void 0
        ? (I = new Uint8Array(g))
        : a === void 0
        ? (I = new Uint8Array(g, i))
        : (I = new Uint8Array(g, i, a)),
      Object.setPrototypeOf(I, h.prototype),
      I
    );
  }
  function NA(g) {
    if (h.isBuffer(g)) {
      var i = MA(g.length) | 0,
        a = f(i);
      return a.length === 0 || g.copy(a, 0, 0, i), a;
    }
    if (g.length !== void 0)
      return typeof g.length != "number" || _(g.length) ? f(0) : T(g);
    if (g.type === "Buffer" && Array.isArray(g.data)) return T(g.data);
  }
  function MA(g) {
    if (g >= s)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          s.toString(16) +
          " bytes"
      );
    return g | 0;
  }
  function uA(g) {
    return +g != g && (g = 0), h.alloc(+g);
  }
  (h.isBuffer = function (i) {
    return i != null && i._isBuffer === !0 && i !== h.prototype;
  }),
    (h.compare = function (i, a) {
      if (
        (b(i, Uint8Array) && (i = h.from(i, i.offset, i.byteLength)),
        b(a, Uint8Array) && (a = h.from(a, a.offset, a.byteLength)),
        !h.isBuffer(i) || !h.isBuffer(a))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (i === a) return 0;
      for (
        var I = i.length, u = a.length, y = 0, R = Math.min(I, u);
        y < R;
        ++y
      )
        if (i[y] !== a[y]) {
          (I = i[y]), (u = a[y]);
          break;
        }
      return I < u ? -1 : u < I ? 1 : 0;
    }),
    (h.isEncoding = function (i) {
      switch (String(i).toLowerCase()) {
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
    (h.concat = function (i, a) {
      if (!Array.isArray(i))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (i.length === 0) return h.alloc(0);
      var I;
      if (a === void 0) for (a = 0, I = 0; I < i.length; ++I) a += i[I].length;
      var u = h.allocUnsafe(a),
        y = 0;
      for (I = 0; I < i.length; ++I) {
        var R = i[I];
        if (b(R, Uint8Array))
          y + R.length > u.length
            ? h.from(R).copy(u, y)
            : Uint8Array.prototype.set.call(u, R, y);
        else if (h.isBuffer(R)) R.copy(u, y);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        y += R.length;
      }
      return u;
    });
  function te(g, i) {
    if (h.isBuffer(g)) return g.length;
    if (ArrayBuffer.isView(g) || b(g, ArrayBuffer)) return g.byteLength;
    if (typeof g != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof g
      );
    var a = g.length,
      I = arguments.length > 2 && arguments[2] === !0;
    if (!I && a === 0) return 0;
    for (var u = !1; ; )
      switch (i) {
        case "ascii":
        case "latin1":
        case "binary":
          return a;
        case "utf8":
        case "utf-8":
          return IA(g).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return a * 2;
        case "hex":
          return a >>> 1;
        case "base64":
          return d(g).length;
        default:
          if (u) return I ? -1 : IA(g).length;
          (i = ("" + i).toLowerCase()), (u = !0);
      }
  }
  h.byteLength = te;
  function WA(g, i, a) {
    var I = !1;
    if (
      ((i === void 0 || i < 0) && (i = 0),
      i > this.length ||
        ((a === void 0 || a > this.length) && (a = this.length), a <= 0) ||
        ((a >>>= 0), (i >>>= 0), a <= i))
    )
      return "";
    for (g || (g = "utf8"); ; )
      switch (g) {
        case "hex":
          return le(this, i, a);
        case "utf8":
        case "utf-8":
          return Ae(this, i, a);
        case "ascii":
          return Ee(this, i, a);
        case "latin1":
        case "binary":
          return KA(this, i, a);
        case "base64":
          return kA(this, i, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return xe(this, i, a);
        default:
          if (I) throw new TypeError("Unknown encoding: " + g);
          (g = (g + "").toLowerCase()), (I = !0);
      }
  }
  h.prototype._isBuffer = !0;
  function FA(g, i, a) {
    var I = g[i];
    (g[i] = g[a]), (g[a] = I);
  }
  (h.prototype.swap16 = function () {
    var i = this.length;
    if (i % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var a = 0; a < i; a += 2) FA(this, a, a + 1);
    return this;
  }),
    (h.prototype.swap32 = function () {
      var i = this.length;
      if (i % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var a = 0; a < i; a += 4) FA(this, a, a + 3), FA(this, a + 1, a + 2);
      return this;
    }),
    (h.prototype.swap64 = function () {
      var i = this.length;
      if (i % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var a = 0; a < i; a += 8)
        FA(this, a, a + 7),
          FA(this, a + 1, a + 6),
          FA(this, a + 2, a + 5),
          FA(this, a + 3, a + 4);
      return this;
    }),
    (h.prototype.toString = function () {
      var i = this.length;
      return i === 0
        ? ""
        : arguments.length === 0
        ? Ae(this, 0, i)
        : WA.apply(this, arguments);
    }),
    (h.prototype.toLocaleString = h.prototype.toString),
    (h.prototype.equals = function (i) {
      if (!h.isBuffer(i)) throw new TypeError("Argument must be a Buffer");
      return this === i ? !0 : h.compare(this, i) === 0;
    }),
    (h.prototype.inspect = function () {
      var i = "",
        a = t.INSPECT_MAX_BYTES;
      return (
        (i = this.toString("hex", 0, a)
          .replace(/(.{2})/g, "$1 ")
          .trim()),
        this.length > a && (i += " ... "),
        "<Buffer " + i + ">"
      );
    }),
    r && (h.prototype[r] = h.prototype.inspect),
    (h.prototype.compare = function (i, a, I, u, y) {
      if (
        (b(i, Uint8Array) && (i = h.from(i, i.offset, i.byteLength)),
        !h.isBuffer(i))
      )
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof i
        );
      if (
        (a === void 0 && (a = 0),
        I === void 0 && (I = i ? i.length : 0),
        u === void 0 && (u = 0),
        y === void 0 && (y = this.length),
        a < 0 || I > i.length || u < 0 || y > this.length)
      )
        throw new RangeError("out of range index");
      if (u >= y && a >= I) return 0;
      if (u >= y) return -1;
      if (a >= I) return 1;
      if (((a >>>= 0), (I >>>= 0), (u >>>= 0), (y >>>= 0), this === i))
        return 0;
      for (
        var R = y - u,
          J = I - a,
          tA = Math.min(R, J),
          cA = this.slice(u, y),
          dA = i.slice(a, I),
          P = 0;
        P < tA;
        ++P
      )
        if (cA[P] !== dA[P]) {
          (R = cA[P]), (J = dA[P]);
          break;
        }
      return R < J ? -1 : J < R ? 1 : 0;
    });
  function rA(g, i, a, I, u) {
    if (g.length === 0) return -1;
    if (
      (typeof a == "string"
        ? ((I = a), (a = 0))
        : a > 2147483647
        ? (a = 2147483647)
        : a < -2147483648 && (a = -2147483648),
      (a = +a),
      _(a) && (a = u ? 0 : g.length - 1),
      a < 0 && (a = g.length + a),
      a >= g.length)
    ) {
      if (u) return -1;
      a = g.length - 1;
    } else if (a < 0)
      if (u) a = 0;
      else return -1;
    if ((typeof i == "string" && (i = h.from(i, I)), h.isBuffer(i)))
      return i.length === 0 ? -1 : gA(g, i, a, I, u);
    if (typeof i == "number")
      return (
        (i = i & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? u
            ? Uint8Array.prototype.indexOf.call(g, i, a)
            : Uint8Array.prototype.lastIndexOf.call(g, i, a)
          : gA(g, [i], a, I, u)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function gA(g, i, a, I, u) {
    var y = 1,
      R = g.length,
      J = i.length;
    if (
      I !== void 0 &&
      ((I = String(I).toLowerCase()),
      I === "ucs2" || I === "ucs-2" || I === "utf16le" || I === "utf-16le")
    ) {
      if (g.length < 2 || i.length < 2) return -1;
      (y = 2), (R /= 2), (J /= 2), (a /= 2);
    }
    function tA($A, Ge) {
      return y === 1 ? $A[Ge] : $A.readUInt16BE(Ge * y);
    }
    var cA;
    if (u) {
      var dA = -1;
      for (cA = a; cA < R; cA++)
        if (tA(g, cA) === tA(i, dA === -1 ? 0 : cA - dA)) {
          if ((dA === -1 && (dA = cA), cA - dA + 1 === J)) return dA * y;
        } else dA !== -1 && (cA -= cA - dA), (dA = -1);
    } else
      for (a + J > R && (a = R - J), cA = a; cA >= 0; cA--) {
        for (var P = !0, DA = 0; DA < J; DA++)
          if (tA(g, cA + DA) !== tA(i, DA)) {
            P = !1;
            break;
          }
        if (P) return cA;
      }
    return -1;
  }
  (h.prototype.includes = function (i, a, I) {
    return this.indexOf(i, a, I) !== -1;
  }),
    (h.prototype.indexOf = function (i, a, I) {
      return rA(this, i, a, I, !0);
    }),
    (h.prototype.lastIndexOf = function (i, a, I) {
      return rA(this, i, a, I, !1);
    });
  function mA(g, i, a, I) {
    a = Number(a) || 0;
    var u = g.length - a;
    I ? ((I = Number(I)), I > u && (I = u)) : (I = u);
    var y = i.length;
    I > y / 2 && (I = y / 2);
    for (var R = 0; R < I; ++R) {
      var J = parseInt(i.substr(R * 2, 2), 16);
      if (_(J)) return R;
      g[a + R] = J;
    }
    return R;
  }
  function LA(g, i, a, I) {
    return x(IA(i, g.length - a), g, a, I);
  }
  function j(g, i, a, I) {
    return x(BA(i), g, a, I);
  }
  function JA(g, i, a, I) {
    return x(d(i), g, a, I);
  }
  function UA(g, i, a, I) {
    return x(C(i, g.length - a), g, a, I);
  }
  (h.prototype.write = function (i, a, I, u) {
    if (a === void 0) (u = "utf8"), (I = this.length), (a = 0);
    else if (I === void 0 && typeof a == "string")
      (u = a), (I = this.length), (a = 0);
    else if (isFinite(a))
      (a = a >>> 0),
        isFinite(I)
          ? ((I = I >>> 0), u === void 0 && (u = "utf8"))
          : ((u = I), (I = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var y = this.length - a;
    if (
      ((I === void 0 || I > y) && (I = y),
      (i.length > 0 && (I < 0 || a < 0)) || a > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    u || (u = "utf8");
    for (var R = !1; ; )
      switch (u) {
        case "hex":
          return mA(this, i, a, I);
        case "utf8":
        case "utf-8":
          return LA(this, i, a, I);
        case "ascii":
        case "latin1":
        case "binary":
          return j(this, i, a, I);
        case "base64":
          return JA(this, i, a, I);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return UA(this, i, a, I);
        default:
          if (R) throw new TypeError("Unknown encoding: " + u);
          (u = ("" + u).toLowerCase()), (R = !0);
      }
  }),
    (h.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function kA(g, i, a) {
    return i === 0 && a === g.length
      ? A.fromByteArray(g)
      : A.fromByteArray(g.slice(i, a));
  }
  function Ae(g, i, a) {
    a = Math.min(g.length, a);
    for (var I = [], u = i; u < a; ) {
      var y = g[u],
        R = null,
        J = y > 239 ? 4 : y > 223 ? 3 : y > 191 ? 2 : 1;
      if (u + J <= a) {
        var tA, cA, dA, P;
        switch (J) {
          case 1:
            y < 128 && (R = y);
            break;
          case 2:
            (tA = g[u + 1]),
              (tA & 192) === 128 &&
                ((P = ((y & 31) << 6) | (tA & 63)), P > 127 && (R = P));
            break;
          case 3:
            (tA = g[u + 1]),
              (cA = g[u + 2]),
              (tA & 192) === 128 &&
                (cA & 192) === 128 &&
                ((P = ((y & 15) << 12) | ((tA & 63) << 6) | (cA & 63)),
                P > 2047 && (P < 55296 || P > 57343) && (R = P));
            break;
          case 4:
            (tA = g[u + 1]),
              (cA = g[u + 2]),
              (dA = g[u + 3]),
              (tA & 192) === 128 &&
                (cA & 192) === 128 &&
                (dA & 192) === 128 &&
                ((P =
                  ((y & 15) << 18) |
                  ((tA & 63) << 12) |
                  ((cA & 63) << 6) |
                  (dA & 63)),
                P > 65535 && P < 1114112 && (R = P));
        }
      }
      R === null
        ? ((R = 65533), (J = 1))
        : R > 65535 &&
          ((R -= 65536),
          I.push(((R >>> 10) & 1023) | 55296),
          (R = 56320 | (R & 1023))),
        I.push(R),
        (u += J);
    }
    return se(I);
  }
  var ZA = 4096;
  function se(g) {
    var i = g.length;
    if (i <= ZA) return String.fromCharCode.apply(String, g);
    for (var a = "", I = 0; I < i; )
      a += String.fromCharCode.apply(String, g.slice(I, (I += ZA)));
    return a;
  }
  function Ee(g, i, a) {
    var I = "";
    a = Math.min(g.length, a);
    for (var u = i; u < a; ++u) I += String.fromCharCode(g[u] & 127);
    return I;
  }
  function KA(g, i, a) {
    var I = "";
    a = Math.min(g.length, a);
    for (var u = i; u < a; ++u) I += String.fromCharCode(g[u]);
    return I;
  }
  function le(g, i, a) {
    var I = g.length;
    (!i || i < 0) && (i = 0), (!a || a < 0 || a > I) && (a = I);
    for (var u = "", y = i; y < a; ++y) u += N[g[y]];
    return u;
  }
  function xe(g, i, a) {
    for (var I = g.slice(i, a), u = "", y = 0; y < I.length - 1; y += 2)
      u += String.fromCharCode(I[y] + I[y + 1] * 256);
    return u;
  }
  h.prototype.slice = function (i, a) {
    var I = this.length;
    (i = ~~i),
      (a = a === void 0 ? I : ~~a),
      i < 0 ? ((i += I), i < 0 && (i = 0)) : i > I && (i = I),
      a < 0 ? ((a += I), a < 0 && (a = 0)) : a > I && (a = I),
      a < i && (a = i);
    var u = this.subarray(i, a);
    return Object.setPrototypeOf(u, h.prototype), u;
  };
  function zA(g, i, a) {
    if (g % 1 !== 0 || g < 0) throw new RangeError("offset is not uint");
    if (g + i > a)
      throw new RangeError("Trying to access beyond buffer length");
  }
  (h.prototype.readUintLE = h.prototype.readUIntLE =
    function (i, a, I) {
      (i = i >>> 0), (a = a >>> 0), I || zA(i, a, this.length);
      for (var u = this[i], y = 1, R = 0; ++R < a && (y *= 256); )
        u += this[i + R] * y;
      return u;
    }),
    (h.prototype.readUintBE = h.prototype.readUIntBE =
      function (i, a, I) {
        (i = i >>> 0), (a = a >>> 0), I || zA(i, a, this.length);
        for (var u = this[i + --a], y = 1; a > 0 && (y *= 256); )
          u += this[i + --a] * y;
        return u;
      }),
    (h.prototype.readUint8 = h.prototype.readUInt8 =
      function (i, a) {
        return (i = i >>> 0), a || zA(i, 1, this.length), this[i];
      }),
    (h.prototype.readUint16LE = h.prototype.readUInt16LE =
      function (i, a) {
        return (
          (i = i >>> 0),
          a || zA(i, 2, this.length),
          this[i] | (this[i + 1] << 8)
        );
      }),
    (h.prototype.readUint16BE = h.prototype.readUInt16BE =
      function (i, a) {
        return (
          (i = i >>> 0),
          a || zA(i, 2, this.length),
          (this[i] << 8) | this[i + 1]
        );
      }),
    (h.prototype.readUint32LE = h.prototype.readUInt32LE =
      function (i, a) {
        return (
          (i = i >>> 0),
          a || zA(i, 4, this.length),
          (this[i] | (this[i + 1] << 8) | (this[i + 2] << 16)) +
            this[i + 3] * 16777216
        );
      }),
    (h.prototype.readUint32BE = h.prototype.readUInt32BE =
      function (i, a) {
        return (
          (i = i >>> 0),
          a || zA(i, 4, this.length),
          this[i] * 16777216 +
            ((this[i + 1] << 16) | (this[i + 2] << 8) | this[i + 3])
        );
      }),
    (h.prototype.readIntLE = function (i, a, I) {
      (i = i >>> 0), (a = a >>> 0), I || zA(i, a, this.length);
      for (var u = this[i], y = 1, R = 0; ++R < a && (y *= 256); )
        u += this[i + R] * y;
      return (y *= 128), u >= y && (u -= Math.pow(2, 8 * a)), u;
    }),
    (h.prototype.readIntBE = function (i, a, I) {
      (i = i >>> 0), (a = a >>> 0), I || zA(i, a, this.length);
      for (var u = a, y = 1, R = this[i + --u]; u > 0 && (y *= 256); )
        R += this[i + --u] * y;
      return (y *= 128), R >= y && (R -= Math.pow(2, 8 * a)), R;
    }),
    (h.prototype.readInt8 = function (i, a) {
      return (
        (i = i >>> 0),
        a || zA(i, 1, this.length),
        this[i] & 128 ? (255 - this[i] + 1) * -1 : this[i]
      );
    }),
    (h.prototype.readInt16LE = function (i, a) {
      (i = i >>> 0), a || zA(i, 2, this.length);
      var I = this[i] | (this[i + 1] << 8);
      return I & 32768 ? I | 4294901760 : I;
    }),
    (h.prototype.readInt16BE = function (i, a) {
      (i = i >>> 0), a || zA(i, 2, this.length);
      var I = this[i + 1] | (this[i] << 8);
      return I & 32768 ? I | 4294901760 : I;
    }),
    (h.prototype.readInt32LE = function (i, a) {
      return (
        (i = i >>> 0),
        a || zA(i, 4, this.length),
        this[i] | (this[i + 1] << 8) | (this[i + 2] << 16) | (this[i + 3] << 24)
      );
    }),
    (h.prototype.readInt32BE = function (i, a) {
      return (
        (i = i >>> 0),
        a || zA(i, 4, this.length),
        (this[i] << 24) | (this[i + 1] << 16) | (this[i + 2] << 8) | this[i + 3]
      );
    }),
    (h.prototype.readFloatLE = function (i, a) {
      return (
        (i = i >>> 0), a || zA(i, 4, this.length), e.read(this, i, !0, 23, 4)
      );
    }),
    (h.prototype.readFloatBE = function (i, a) {
      return (
        (i = i >>> 0), a || zA(i, 4, this.length), e.read(this, i, !1, 23, 4)
      );
    }),
    (h.prototype.readDoubleLE = function (i, a) {
      return (
        (i = i >>> 0), a || zA(i, 8, this.length), e.read(this, i, !0, 52, 8)
      );
    }),
    (h.prototype.readDoubleBE = function (i, a) {
      return (
        (i = i >>> 0), a || zA(i, 8, this.length), e.read(this, i, !1, 52, 8)
      );
    });
  function PA(g, i, a, I, u, y) {
    if (!h.isBuffer(g))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (i > u || i < y)
      throw new RangeError('"value" argument is out of bounds');
    if (a + I > g.length) throw new RangeError("Index out of range");
  }
  (h.prototype.writeUintLE = h.prototype.writeUIntLE =
    function (i, a, I, u) {
      if (((i = +i), (a = a >>> 0), (I = I >>> 0), !u)) {
        var y = Math.pow(2, 8 * I) - 1;
        PA(this, i, a, I, y, 0);
      }
      var R = 1,
        J = 0;
      for (this[a] = i & 255; ++J < I && (R *= 256); )
        this[a + J] = (i / R) & 255;
      return a + I;
    }),
    (h.prototype.writeUintBE = h.prototype.writeUIntBE =
      function (i, a, I, u) {
        if (((i = +i), (a = a >>> 0), (I = I >>> 0), !u)) {
          var y = Math.pow(2, 8 * I) - 1;
          PA(this, i, a, I, y, 0);
        }
        var R = I - 1,
          J = 1;
        for (this[a + R] = i & 255; --R >= 0 && (J *= 256); )
          this[a + R] = (i / J) & 255;
        return a + I;
      }),
    (h.prototype.writeUint8 = h.prototype.writeUInt8 =
      function (i, a, I) {
        return (
          (i = +i),
          (a = a >>> 0),
          I || PA(this, i, a, 1, 255, 0),
          (this[a] = i & 255),
          a + 1
        );
      }),
    (h.prototype.writeUint16LE = h.prototype.writeUInt16LE =
      function (i, a, I) {
        return (
          (i = +i),
          (a = a >>> 0),
          I || PA(this, i, a, 2, 65535, 0),
          (this[a] = i & 255),
          (this[a + 1] = i >>> 8),
          a + 2
        );
      }),
    (h.prototype.writeUint16BE = h.prototype.writeUInt16BE =
      function (i, a, I) {
        return (
          (i = +i),
          (a = a >>> 0),
          I || PA(this, i, a, 2, 65535, 0),
          (this[a] = i >>> 8),
          (this[a + 1] = i & 255),
          a + 2
        );
      }),
    (h.prototype.writeUint32LE = h.prototype.writeUInt32LE =
      function (i, a, I) {
        return (
          (i = +i),
          (a = a >>> 0),
          I || PA(this, i, a, 4, 4294967295, 0),
          (this[a + 3] = i >>> 24),
          (this[a + 2] = i >>> 16),
          (this[a + 1] = i >>> 8),
          (this[a] = i & 255),
          a + 4
        );
      }),
    (h.prototype.writeUint32BE = h.prototype.writeUInt32BE =
      function (i, a, I) {
        return (
          (i = +i),
          (a = a >>> 0),
          I || PA(this, i, a, 4, 4294967295, 0),
          (this[a] = i >>> 24),
          (this[a + 1] = i >>> 16),
          (this[a + 2] = i >>> 8),
          (this[a + 3] = i & 255),
          a + 4
        );
      }),
    (h.prototype.writeIntLE = function (i, a, I, u) {
      if (((i = +i), (a = a >>> 0), !u)) {
        var y = Math.pow(2, 8 * I - 1);
        PA(this, i, a, I, y - 1, -y);
      }
      var R = 0,
        J = 1,
        tA = 0;
      for (this[a] = i & 255; ++R < I && (J *= 256); )
        i < 0 && tA === 0 && this[a + R - 1] !== 0 && (tA = 1),
          (this[a + R] = (((i / J) >> 0) - tA) & 255);
      return a + I;
    }),
    (h.prototype.writeIntBE = function (i, a, I, u) {
      if (((i = +i), (a = a >>> 0), !u)) {
        var y = Math.pow(2, 8 * I - 1);
        PA(this, i, a, I, y - 1, -y);
      }
      var R = I - 1,
        J = 1,
        tA = 0;
      for (this[a + R] = i & 255; --R >= 0 && (J *= 256); )
        i < 0 && tA === 0 && this[a + R + 1] !== 0 && (tA = 1),
          (this[a + R] = (((i / J) >> 0) - tA) & 255);
      return a + I;
    }),
    (h.prototype.writeInt8 = function (i, a, I) {
      return (
        (i = +i),
        (a = a >>> 0),
        I || PA(this, i, a, 1, 127, -128),
        i < 0 && (i = 255 + i + 1),
        (this[a] = i & 255),
        a + 1
      );
    }),
    (h.prototype.writeInt16LE = function (i, a, I) {
      return (
        (i = +i),
        (a = a >>> 0),
        I || PA(this, i, a, 2, 32767, -32768),
        (this[a] = i & 255),
        (this[a + 1] = i >>> 8),
        a + 2
      );
    }),
    (h.prototype.writeInt16BE = function (i, a, I) {
      return (
        (i = +i),
        (a = a >>> 0),
        I || PA(this, i, a, 2, 32767, -32768),
        (this[a] = i >>> 8),
        (this[a + 1] = i & 255),
        a + 2
      );
    }),
    (h.prototype.writeInt32LE = function (i, a, I) {
      return (
        (i = +i),
        (a = a >>> 0),
        I || PA(this, i, a, 4, 2147483647, -2147483648),
        (this[a] = i & 255),
        (this[a + 1] = i >>> 8),
        (this[a + 2] = i >>> 16),
        (this[a + 3] = i >>> 24),
        a + 4
      );
    }),
    (h.prototype.writeInt32BE = function (i, a, I) {
      return (
        (i = +i),
        (a = a >>> 0),
        I || PA(this, i, a, 4, 2147483647, -2147483648),
        i < 0 && (i = 4294967295 + i + 1),
        (this[a] = i >>> 24),
        (this[a + 1] = i >>> 16),
        (this[a + 2] = i >>> 8),
        (this[a + 3] = i & 255),
        a + 4
      );
    });
  function ce(g, i, a, I, u, y) {
    if (a + I > g.length) throw new RangeError("Index out of range");
    if (a < 0) throw new RangeError("Index out of range");
  }
  function l(g, i, a, I, u) {
    return (
      (i = +i),
      (a = a >>> 0),
      u || ce(g, i, a, 4),
      e.write(g, i, a, I, 23, 4),
      a + 4
    );
  }
  (h.prototype.writeFloatLE = function (i, a, I) {
    return l(this, i, a, !0, I);
  }),
    (h.prototype.writeFloatBE = function (i, a, I) {
      return l(this, i, a, !1, I);
    });
  function QA(g, i, a, I, u) {
    return (
      (i = +i),
      (a = a >>> 0),
      u || ce(g, i, a, 8),
      e.write(g, i, a, I, 52, 8),
      a + 8
    );
  }
  (h.prototype.writeDoubleLE = function (i, a, I) {
    return QA(this, i, a, !0, I);
  }),
    (h.prototype.writeDoubleBE = function (i, a, I) {
      return QA(this, i, a, !1, I);
    }),
    (h.prototype.copy = function (i, a, I, u) {
      if (!h.isBuffer(i)) throw new TypeError("argument should be a Buffer");
      if (
        (I || (I = 0),
        !u && u !== 0 && (u = this.length),
        a >= i.length && (a = i.length),
        a || (a = 0),
        u > 0 && u < I && (u = I),
        u === I || i.length === 0 || this.length === 0)
      )
        return 0;
      if (a < 0) throw new RangeError("targetStart out of bounds");
      if (I < 0 || I >= this.length) throw new RangeError("Index out of range");
      if (u < 0) throw new RangeError("sourceEnd out of bounds");
      u > this.length && (u = this.length),
        i.length - a < u - I && (u = i.length - a + I);
      var y = u - I;
      return (
        this === i && typeof Uint8Array.prototype.copyWithin == "function"
          ? this.copyWithin(a, I, u)
          : Uint8Array.prototype.set.call(i, this.subarray(I, u), a),
        y
      );
    }),
    (h.prototype.fill = function (i, a, I, u) {
      if (typeof i == "string") {
        if (
          (typeof a == "string"
            ? ((u = a), (a = 0), (I = this.length))
            : typeof I == "string" && ((u = I), (I = this.length)),
          u !== void 0 && typeof u != "string")
        )
          throw new TypeError("encoding must be a string");
        if (typeof u == "string" && !h.isEncoding(u))
          throw new TypeError("Unknown encoding: " + u);
        if (i.length === 1) {
          var y = i.charCodeAt(0);
          ((u === "utf8" && y < 128) || u === "latin1") && (i = y);
        }
      } else
        typeof i == "number"
          ? (i = i & 255)
          : typeof i == "boolean" && (i = Number(i));
      if (a < 0 || this.length < a || this.length < I)
        throw new RangeError("Out of range index");
      if (I <= a) return this;
      (a = a >>> 0), (I = I === void 0 ? this.length : I >>> 0), i || (i = 0);
      var R;
      if (typeof i == "number") for (R = a; R < I; ++R) this[R] = i;
      else {
        var J = h.isBuffer(i) ? i : h.from(i, u),
          tA = J.length;
        if (tA === 0)
          throw new TypeError(
            'The value "' + i + '" is invalid for argument "value"'
          );
        for (R = 0; R < I - a; ++R) this[R + a] = J[R % tA];
      }
      return this;
    });
  var oe = /[^+/0-9A-Za-z-_]/g;
  function Ye(g) {
    if (((g = g.split("=")[0]), (g = g.trim().replace(oe, "")), g.length < 2))
      return "";
    for (; g.length % 4 !== 0; ) g = g + "=";
    return g;
  }
  function IA(g, i) {
    i = i || 1 / 0;
    for (var a, I = g.length, u = null, y = [], R = 0; R < I; ++R) {
      if (((a = g.charCodeAt(R)), a > 55295 && a < 57344)) {
        if (!u) {
          if (a > 56319) {
            (i -= 3) > -1 && y.push(239, 191, 189);
            continue;
          } else if (R + 1 === I) {
            (i -= 3) > -1 && y.push(239, 191, 189);
            continue;
          }
          u = a;
          continue;
        }
        if (a < 56320) {
          (i -= 3) > -1 && y.push(239, 191, 189), (u = a);
          continue;
        }
        a = (((u - 55296) << 10) | (a - 56320)) + 65536;
      } else u && (i -= 3) > -1 && y.push(239, 191, 189);
      if (((u = null), a < 128)) {
        if ((i -= 1) < 0) break;
        y.push(a);
      } else if (a < 2048) {
        if ((i -= 2) < 0) break;
        y.push((a >> 6) | 192, (a & 63) | 128);
      } else if (a < 65536) {
        if ((i -= 3) < 0) break;
        y.push((a >> 12) | 224, ((a >> 6) & 63) | 128, (a & 63) | 128);
      } else if (a < 1114112) {
        if ((i -= 4) < 0) break;
        y.push(
          (a >> 18) | 240,
          ((a >> 12) & 63) | 128,
          ((a >> 6) & 63) | 128,
          (a & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return y;
  }
  function BA(g) {
    for (var i = [], a = 0; a < g.length; ++a) i.push(g.charCodeAt(a) & 255);
    return i;
  }
  function C(g, i) {
    for (var a, I, u, y = [], R = 0; R < g.length && !((i -= 2) < 0); ++R)
      (a = g.charCodeAt(R)), (I = a >> 8), (u = a % 256), y.push(u), y.push(I);
    return y;
  }
  function d(g) {
    return A.toByteArray(Ye(g));
  }
  function x(g, i, a, I) {
    for (var u = 0; u < I && !(u + a >= i.length || u >= g.length); ++u)
      i[u + a] = g[u];
    return u;
  }
  function b(g, i) {
    return (
      g instanceof i ||
      (g != null &&
        g.constructor != null &&
        g.constructor.name != null &&
        g.constructor.name === i.name)
    );
  }
  function _(g) {
    return g !== g;
  }
  var N = (function () {
    for (var g = "0123456789abcdef", i = new Array(256), a = 0; a < 16; ++a)
      for (var I = a * 16, u = 0; u < 16; ++u) i[I + u] = g[a] + g[u];
    return i;
  })();
})(xt);
var Mr;
(function (t) {
  (t[(t.SysFatal = 1)] = "SysFatal"),
    (t[(t.SysTransient = 2)] = "SysTransient"),
    (t[(t.DestinationInvalid = 3)] = "DestinationInvalid"),
    (t[(t.CanisterReject = 4)] = "CanisterReject"),
    (t[(t.CanisterError = 5)] = "CanisterError");
})(Mr || (Mr = {}));
const zt = "abcdefghijklmnopqrstuvwxyz234567",
  pt = Object.create(null);
for (let t = 0; t < zt.length; t++) pt[zt[t]] = t;
pt[0] = pt.o;
pt[1] = pt.i;
function Ra(t) {
  let A = 0,
    e = 0,
    r = "";
  function s(c) {
    return (
      A < 0 ? (e |= c >> -A) : (e = (c << A) & 248),
      A > 3 ? ((A -= 8), 1) : (A < 4 && ((r += zt[e >> 3]), (A += 5)), 0)
    );
  }
  for (let c = 0; c < t.length; ) c += s(t[c]);
  return r + (A < 0 ? zt[e >> 3] : "");
}
function va(t) {
  let A = 0,
    e = 0;
  const r = new Uint8Array(((t.length * 4) / 3) | 0);
  let s = 0;
  function c(f) {
    let h = pt[f.toLowerCase()];
    if (h === void 0)
      throw new Error(`Invalid character: ${JSON.stringify(f)}`);
    (h <<= 3),
      (e |= h >>> A),
      (A += 5),
      A >= 8 &&
        ((r[s++] = e), (A -= 8), A > 0 ? (e = (h << (5 - A)) & 255) : (e = 0));
  }
  for (const f of t) c(f);
  return r.slice(0, s);
}
const Ga = new Uint32Array([
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
function Ta(t) {
  const A = new Uint8Array(t);
  let e = -1;
  for (let r = 0; r < A.length; r++) {
    const c = (A[r] ^ e) & 255;
    e = Ga[c] ^ (e >>> 8);
  }
  return (e ^ -1) >>> 0;
}
function Ma(t, ...A) {
  if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
  if (A.length > 0 && !A.includes(t.length))
    throw new Error(
      `Expected Uint8Array of length ${A}, not of length=${t.length}`
    );
}
function hi(t, A = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (A && t.finished) throw new Error("Hash#digest() has already been called");
}
function Ua(t, A) {
  Ma(t);
  const e = A.outputLen;
  if (t.length < e)
    throw new Error(
      `digestInto() expects output buffer of length at least ${e}`
    );
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const ka =
    (t) => t instanceof Uint8Array,
  lr = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
  qe = (t, A) => (t << (32 - A)) | (t >>> A),
  La = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!La) throw new Error("Non little-endian hardware is not supported");
function Ya(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Ji(t) {
  if ((typeof t == "string" && (t = Ya(t)), !ka(t)))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
class qa {
  clone() {
    return this._cloneInto();
  }
}
function Ki(t) {
  const A = (r) => t().update(Ji(r)).digest(),
    e = t();
  return (
    (A.outputLen = e.outputLen),
    (A.blockLen = e.blockLen),
    (A.create = () => t()),
    A
  );
}
function Oa(t, A, e, r) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(A, e, r);
  const s = BigInt(32),
    c = BigInt(4294967295),
    f = Number((e >> s) & c),
    h = Number(e & c),
    S = r ? 4 : 0,
    D = r ? 0 : 4;
  t.setUint32(A + S, f, r), t.setUint32(A + D, h, r);
}
class Ha extends qa {
  constructor(A, e, r, s) {
    super(),
      (this.blockLen = A),
      (this.outputLen = e),
      (this.padOffset = r),
      (this.isLE = s),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(A)),
      (this.view = lr(this.buffer));
  }
  update(A) {
    hi(this);
    const { view: e, buffer: r, blockLen: s } = this;
    A = Ji(A);
    const c = A.length;
    for (let f = 0; f < c; ) {
      const h = Math.min(s - this.pos, c - f);
      if (h === s) {
        const S = lr(A);
        for (; s <= c - f; f += s) this.process(S, f);
        continue;
      }
      r.set(A.subarray(f, f + h), this.pos),
        (this.pos += h),
        (f += h),
        this.pos === s && (this.process(e, 0), (this.pos = 0));
    }
    return (this.length += A.length), this.roundClean(), this;
  }
  digestInto(A) {
    hi(this), Ua(A, this), (this.finished = !0);
    const { buffer: e, view: r, blockLen: s, isLE: c } = this;
    let { pos: f } = this;
    (e[f++] = 128),
      this.buffer.subarray(f).fill(0),
      this.padOffset > s - f && (this.process(r, 0), (f = 0));
    for (let M = f; M < s; M++) e[M] = 0;
    Oa(r, s - 8, BigInt(this.length * 8), c), this.process(r, 0);
    const h = lr(A),
      S = this.outputLen;
    if (S % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const D = S / 4,
      Y = this.get();
    if (D > Y.length) throw new Error("_sha2: outputLen bigger than state");
    for (let M = 0; M < D; M++) h.setUint32(4 * M, Y[M], c);
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
      length: s,
      finished: c,
      destroyed: f,
      pos: h,
    } = this;
    return (
      (A.length = s),
      (A.pos = h),
      (A.finished = c),
      (A.destroyed = f),
      s % e && A.buffer.set(r),
      A
    );
  }
}
const Ja = (t, A, e) => (t & A) ^ (~t & e),
  Ka = (t, A, e) => (t & A) ^ (t & e) ^ (A & e),
  Pa = new Uint32Array([
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
  Xe = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  $e = new Uint32Array(64);
class Pi extends Ha {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = Xe[0] | 0),
      (this.B = Xe[1] | 0),
      (this.C = Xe[2] | 0),
      (this.D = Xe[3] | 0),
      (this.E = Xe[4] | 0),
      (this.F = Xe[5] | 0),
      (this.G = Xe[6] | 0),
      (this.H = Xe[7] | 0);
  }
  get() {
    const { A, B: e, C: r, D: s, E: c, F: f, G: h, H: S } = this;
    return [A, e, r, s, c, f, h, S];
  }
  set(A, e, r, s, c, f, h, S) {
    (this.A = A | 0),
      (this.B = e | 0),
      (this.C = r | 0),
      (this.D = s | 0),
      (this.E = c | 0),
      (this.F = f | 0),
      (this.G = h | 0),
      (this.H = S | 0);
  }
  process(A, e) {
    for (let M = 0; M < 16; M++, e += 4) $e[M] = A.getUint32(e, !1);
    for (let M = 16; M < 64; M++) {
      const z = $e[M - 15],
        T = $e[M - 2],
        nA = qe(z, 7) ^ qe(z, 18) ^ (z >>> 3),
        EA = qe(T, 17) ^ qe(T, 19) ^ (T >>> 10);
      $e[M] = (EA + $e[M - 7] + nA + $e[M - 16]) | 0;
    }
    let { A: r, B: s, C: c, D: f, E: h, F: S, G: D, H: Y } = this;
    for (let M = 0; M < 64; M++) {
      const z = qe(h, 6) ^ qe(h, 11) ^ qe(h, 25),
        T = (Y + z + Ja(h, S, D) + Pa[M] + $e[M]) | 0,
        EA = ((qe(r, 2) ^ qe(r, 13) ^ qe(r, 22)) + Ka(r, s, c)) | 0;
      (Y = D),
        (D = S),
        (S = h),
        (h = (f + T) | 0),
        (f = c),
        (c = s),
        (s = r),
        (r = (T + EA) | 0);
    }
    (r = (r + this.A) | 0),
      (s = (s + this.B) | 0),
      (c = (c + this.C) | 0),
      (f = (f + this.D) | 0),
      (h = (h + this.E) | 0),
      (S = (S + this.F) | 0),
      (D = (D + this.G) | 0),
      (Y = (Y + this.H) | 0),
      this.set(r, s, c, f, h, S, D, Y);
  }
  roundClean() {
    $e.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class ja extends Pi {
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
const Wa = Ki(() => new Pi()),
  Va = Ki(() => new ja());
function za(t) {
  return Va.create().update(new Uint8Array(t)).digest();
}
const Ut = "__principal__",
  Za = 2,
  Qi = 4,
  Xa = "aaaaa-aa",
  $a = (t) => {
    var A;
    return new Uint8Array(
      ((A = t.match(/.{1,2}/g)) !== null && A !== void 0 ? A : []).map((e) =>
        parseInt(e, 16)
      )
    );
  },
  As = (t) => t.reduce((A, e) => A + e.toString(16).padStart(2, "0"), "");
let XA = class Ur {
  constructor(A) {
    (this._arr = A), (this._isPrincipal = !0);
  }
  static anonymous() {
    return new this(new Uint8Array([Qi]));
  }
  static managementCanister() {
    return this.fromHex(Xa);
  }
  static selfAuthenticating(A) {
    const e = za(A);
    return new this(new Uint8Array([...e, Za]));
  }
  static from(A) {
    if (typeof A == "string") return Ur.fromText(A);
    if (typeof A == "object" && A !== null && A._isPrincipal === !0)
      return new Ur(A._arr);
    throw new Error(`Impossible to convert ${JSON.stringify(A)} to Principal.`);
  }
  static fromHex(A) {
    return new this($a(A));
  }
  static fromText(A) {
    let e = A;
    if (A.includes(Ut)) {
      const f = JSON.parse(A);
      Ut in f && (e = f[Ut]);
    }
    const r = e.toLowerCase().replace(/-/g, "");
    let s = va(r);
    s = s.slice(4, s.length);
    const c = new this(s);
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
    return this._arr.byteLength === 1 && this._arr[0] === Qi;
  }
  toUint8Array() {
    return this._arr;
  }
  toHex() {
    return As(this._arr).toUpperCase();
  }
  toText() {
    const A = new ArrayBuffer(4);
    new DataView(A).setUint32(0, Ta(this._arr));
    const r = new Uint8Array(A),
      s = Uint8Array.from(this._arr),
      c = new Uint8Array([...r, ...s]),
      h = Ra(c).match(/.{1,5}/g);
    if (!h) throw new Error();
    return h.join("-");
  }
  toString() {
    return this.toText();
  }
  toJSON() {
    return { [Ut]: this.toText() };
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
class nt extends Error {
  constructor(A) {
    super(A), (this.message = A), Object.setPrototypeOf(this, nt.prototype);
  }
}
function HA(...t) {
  const A = new Uint8Array(t.reduce((r, s) => r + s.byteLength, 0));
  let e = 0;
  for (const r of t) A.set(new Uint8Array(r), e), (e += r.byteLength);
  return A;
}
class St {
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
function es(t) {
  const e = new TextEncoder().encode(t);
  let r = 0;
  for (const s of e) r = (r * 223 + s) % 2 ** 32;
  return r;
}
function Re(t) {
  if (/^_\d+_$/.test(t) || /^_0x[0-9a-fA-F]+_$/.test(t)) {
    const A = +t.slice(1, -1);
    if (Number.isSafeInteger(A) && A >= 0 && A < 2 ** 32) return A;
  }
  return es(t);
}
function ji() {
  throw new Error("unexpected end of buffer");
}
function Et(t, A) {
  return t.byteLength < A && ji(), t.read(A);
}
function ct(t) {
  const A = t.readUint8();
  return A === void 0 && ji(), A;
}
function ae(t) {
  if ((typeof t == "number" && (t = BigInt(t)), t < BigInt(0)))
    throw new Error("Cannot leb encode negative values.");
  const A = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1,
    e = new St(new ArrayBuffer(A), 0);
  for (;;) {
    const r = Number(t & BigInt(127));
    if (((t /= BigInt(128)), t === BigInt(0))) {
      e.write(new Uint8Array([r]));
      break;
    } else e.write(new Uint8Array([r | 128]));
  }
  return e.buffer;
}
function Ce(t) {
  let A = BigInt(1),
    e = BigInt(0),
    r;
  do (r = ct(t)), (e += BigInt(r & 127).valueOf() * A), (A *= BigInt(128));
  while (r >= 128);
  return e;
}
function he(t) {
  typeof t == "number" && (t = BigInt(t));
  const A = t < BigInt(0);
  A && (t = -t - BigInt(1));
  const e = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1,
    r = new St(new ArrayBuffer(e), 0);
  for (;;) {
    const c = s(t);
    if (
      ((t /= BigInt(128)),
      (A && t === BigInt(0) && c & 64) || (!A && t === BigInt(0) && !(c & 64)))
    ) {
      r.write(new Uint8Array([c]));
      break;
    } else r.write(new Uint8Array([c | 128]));
  }
  function s(c) {
    const f = c % BigInt(128);
    return Number(A ? BigInt(128) - f - BigInt(1) : f);
  }
  return r.buffer;
}
function At(t) {
  const A = new Uint8Array(t.buffer);
  let e = 0;
  for (; e < A.byteLength; e++)
    if (A[e] < 128) {
      if (!(A[e] & 64)) return Ce(t);
      break;
    }
  const r = new Uint8Array(Et(t, e + 1));
  let s = BigInt(0);
  for (let c = r.byteLength - 1; c >= 0; c--)
    s = s * BigInt(128) + BigInt(128 - (r[c] & 127) - 1);
  return -s - BigInt(1);
}
function ts(t, A) {
  if (BigInt(t) < BigInt(0)) throw new Error("Cannot write negative values.");
  return Wi(t, A);
}
function Wi(t, A) {
  t = BigInt(t);
  const e = new St(new ArrayBuffer(Math.min(1, A)), 0);
  let r = 0,
    s = BigInt(256),
    c = BigInt(0),
    f = Number(t % s);
  for (e.write(new Uint8Array([f])); ++r < A; )
    t < 0 && c === BigInt(0) && f !== 0 && (c = BigInt(1)),
      (f = Number((t / s - c) % BigInt(256))),
      e.write(new Uint8Array([f])),
      (s *= BigInt(256));
  return e.buffer;
}
function Vi(t, A) {
  let e = BigInt(ct(t)),
    r = BigInt(1),
    s = 0;
  for (; ++s < A; ) {
    r *= BigInt(256);
    const c = BigInt(ct(t));
    e = e + r * c;
  }
  return e;
}
function rs(t, A) {
  let e = Vi(t, A);
  const r = BigInt(2) ** (BigInt(8) * BigInt(A - 1) + BigInt(7));
  return e >= r && (e -= r * BigInt(2)), e;
}
function kr(t) {
  const A = BigInt(t);
  if (t < 0) throw new RangeError("Input must be non-negative");
  return BigInt(1) << A;
}
const jt = "DIDL",
  Ci = 400;
function bt(t, A, e) {
  return t.map((r, s) => e(r, A[s]));
}
class is {
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
      s = this._idx.get(e);
    if (r === void 0) throw new Error("Missing type index for " + A);
    if (s === void 0) throw new Error("Missing type index for " + e);
    (this._typs[r] = this._typs[s]),
      this._typs.splice(s, 1),
      this._idx.delete(e);
  }
  encode() {
    const A = ae(this._typs.length),
      e = HA(...this._typs);
    return HA(A, e);
  }
  indexOf(A) {
    if (!this._idx.has(A)) throw new Error("Missing type index for " + A);
    return he(this._idx.get(A) || 0);
  }
}
class ns {
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
    const s = e.map((c, f) => [`_${f}_`, c]);
    return this.visitRecord(A, s, r);
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
class nr {
  display() {
    return this.name;
  }
  valueToString(A) {
    return Be(A);
  }
  buildTypeTable(A) {
    A.has(this) || this._buildTypeTableImpl(A);
  }
}
class ve extends nr {
  checkType(A) {
    if (this.name !== A.name)
      throw new Error(
        `type mismatch: type on the wire ${A.name}, expect type ${this.name}`
      );
    return A;
  }
  _buildTypeTableImpl(A) {}
}
class at extends nr {
  checkType(A) {
    if (A instanceof st) {
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
class zi extends ve {
  accept(A, e) {
    return A.visitEmpty(this, e);
  }
  covariant(A) {
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue() {
    throw new Error("Empty cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Empty cannot appear as a value");
  }
  encodeType() {
    return he(-17);
  }
  decodeValue() {
    throw new Error("Empty cannot appear as an output");
  }
  get name() {
    return "empty";
  }
}
class Zi extends nr {
  checkType(A) {
    throw new Error("Method not implemented for unknown.");
  }
  accept(A, e) {
    throw A.visitType(this, e);
  }
  covariant(A) {
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
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
    let s;
    return (
      e instanceof st ? (s = () => e.getType()) : (s = () => e),
      Object.defineProperty(r, "type", {
        value: s,
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
class Xi extends ve {
  accept(A, e) {
    return A.visitBool(this, e);
  }
  covariant(A) {
    if (typeof A == "boolean") return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue(A) {
    return new Uint8Array([A ? 1 : 0]);
  }
  encodeType() {
    return he(-2);
  }
  decodeValue(A, e) {
    switch ((this.checkType(e), ct(A))) {
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
class $i extends ve {
  accept(A, e) {
    return A.visitNull(this, e);
  }
  covariant(A) {
    if (A === null) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue() {
    return new ArrayBuffer(0);
  }
  encodeType() {
    return he(-1);
  }
  decodeValue(A, e) {
    return this.checkType(e), null;
  }
  get name() {
    return "null";
  }
}
class Zt extends ve {
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
    return he(-16);
  }
  decodeValue(A, e) {
    return e.name !== this.name && e.decodeValue(A, e), null;
  }
  get name() {
    return "reserved";
  }
}
class An extends ve {
  accept(A, e) {
    return A.visitText(this, e);
  }
  covariant(A) {
    if (typeof A == "string") return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue(A) {
    const e = new TextEncoder().encode(A),
      r = ae(e.byteLength);
    return HA(r, e);
  }
  encodeType() {
    return he(-15);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const r = Ce(A),
      s = Et(A, Number(r));
    return new TextDecoder("utf8", { fatal: !0 }).decode(s);
  }
  get name() {
    return "text";
  }
  valueToString(A) {
    return '"' + A + '"';
  }
}
class en extends ve {
  accept(A, e) {
    return A.visitInt(this, e);
  }
  covariant(A) {
    if (typeof A == "bigint" || Number.isInteger(A)) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue(A) {
    return he(A);
  }
  encodeType() {
    return he(-4);
  }
  decodeValue(A, e) {
    return this.checkType(e), At(A);
  }
  get name() {
    return "int";
  }
  valueToString(A) {
    return A.toString();
  }
}
class tn extends ve {
  accept(A, e) {
    return A.visitNat(this, e);
  }
  covariant(A) {
    if (
      (typeof A == "bigint" && A >= BigInt(0)) ||
      (Number.isInteger(A) && A >= 0)
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue(A) {
    return ae(A);
  }
  encodeType() {
    return he(-3);
  }
  decodeValue(A, e) {
    return this.checkType(e), Ce(A);
  }
  get name() {
    return "nat";
  }
  valueToString(A) {
    return A.toString();
  }
}
class ti extends ve {
  constructor(A) {
    if ((super(), (this._bits = A), A !== 32 && A !== 64))
      throw new Error("not a valid float type");
  }
  accept(A, e) {
    return A.visitFloat(this, e);
  }
  covariant(A) {
    if (typeof A == "number" || A instanceof Number) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
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
    return he(A);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const r = Et(A, this._bits / 8),
      s = new DataView(r);
    return this._bits === 32 ? s.getFloat32(0, !0) : s.getFloat64(0, !0);
  }
  get name() {
    return "float" + this._bits;
  }
  valueToString(A) {
    return A.toString();
  }
}
class ft extends ve {
  constructor(A) {
    super(), (this._bits = A);
  }
  accept(A, e) {
    return A.visitFixedInt(this, e);
  }
  covariant(A) {
    const e = kr(this._bits - 1) * BigInt(-1),
      r = kr(this._bits - 1) - BigInt(1);
    let s = !1;
    if (typeof A == "bigint") s = A >= e && A <= r;
    else if (Number.isInteger(A)) {
      const c = BigInt(A);
      s = c >= e && c <= r;
    } else s = !1;
    if (s) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue(A) {
    return Wi(A, this._bits / 8);
  }
  encodeType() {
    const A = Math.log2(this._bits) - 3;
    return he(-9 - A);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const r = rs(A, this._bits / 8);
    return this._bits <= 32 ? Number(r) : r;
  }
  get name() {
    return `int${this._bits}`;
  }
  valueToString(A) {
    return A.toString();
  }
}
class rt extends ve {
  constructor(A) {
    super(), (this._bits = A);
  }
  accept(A, e) {
    return A.visitFixedNat(this, e);
  }
  covariant(A) {
    const e = kr(this._bits);
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
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue(A) {
    return ts(A, this._bits / 8);
  }
  encodeType() {
    const A = Math.log2(this._bits) - 3;
    return he(-5 - A);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const r = Vi(A, this._bits / 8);
    return this._bits <= 32 ? Number(r) : r;
  }
  get name() {
    return `nat${this._bits}`;
  }
  valueToString(A) {
    return A.toString();
  }
}
class ar extends at {
  constructor(A) {
    super(),
      (this._type = A),
      (this._blobOptimization = !1),
      A instanceof rt && A._bits === 8 && (this._blobOptimization = !0);
  }
  accept(A, e) {
    return A.visitVec(this, this._type, e);
  }
  covariant(A) {
    const e =
      this._type instanceof rt
        ? this._type._bits
        : this._type instanceof ft
        ? this._type._bits
        : 0;
    if (
      (ArrayBuffer.isView(A) && e == A.BYTES_PER_ELEMENT * 8) ||
      (Array.isArray(A) &&
        A.every((r, s) => {
          try {
            return this._type.covariant(r);
          } catch (c) {
            throw new Error(`Invalid ${this.display()} argument: 

index ${s} -> ${c.message}`);
          }
        }))
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue(A) {
    const e = ae(A.length);
    if (this._blobOptimization) return HA(e, new Uint8Array(A));
    if (ArrayBuffer.isView(A)) return HA(e, new Uint8Array(A.buffer));
    const r = new St(new ArrayBuffer(e.byteLength + A.length), 0);
    r.write(e);
    for (const s of A) {
      const c = this._type.encodeValue(s);
      r.write(new Uint8Array(c));
    }
    return r.buffer;
  }
  _buildTypeTableImpl(A) {
    this._type.buildTypeTable(A);
    const e = he(-19),
      r = this._type.encodeType(A);
    A.add(this, HA(e, r));
  }
  decodeValue(A, e) {
    const r = this.checkType(e);
    if (!(r instanceof ar)) throw new Error("Not a vector type");
    const s = Number(Ce(A));
    if (this._type instanceof rt) {
      if (this._type._bits == 8) return new Uint8Array(A.read(s));
      if (this._type._bits == 16) return new Uint16Array(A.read(s * 2));
      if (this._type._bits == 32) return new Uint32Array(A.read(s * 4));
      if (this._type._bits == 64) return new BigUint64Array(A.read(s * 8));
    }
    if (this._type instanceof ft) {
      if (this._type._bits == 8) return new Int8Array(A.read(s));
      if (this._type._bits == 16) return new Int16Array(A.read(s * 2));
      if (this._type._bits == 32) return new Int32Array(A.read(s * 4));
      if (this._type._bits == 64) return new BigInt64Array(A.read(s * 8));
    }
    const c = [];
    for (let f = 0; f < s; f++) c.push(this._type.decodeValue(A, r._type));
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
class yt extends at {
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
      throw new Error(`Invalid ${this.display()} argument: ${Be(A)} 

-> ${e.message}`);
    }
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue(A) {
    return A.length === 0
      ? new Uint8Array([0])
      : HA(new Uint8Array([1]), this._type.encodeValue(A[0]));
  }
  _buildTypeTableImpl(A) {
    this._type.buildTypeTable(A);
    const e = he(-18),
      r = this._type.encodeType(A);
    A.add(this, HA(e, r));
  }
  decodeValue(A, e) {
    const r = this.checkType(e);
    if (!(r instanceof yt)) throw new Error("Not an option type");
    switch (ct(A)) {
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
class Rt extends at {
  constructor(A = {}) {
    super(),
      (this._fields = Object.entries(A).sort((e, r) => Re(e[0]) - Re(r[0])));
  }
  accept(A, e) {
    return A.visitRecord(this, this._fields, e);
  }
  tryAsTuple() {
    const A = [];
    for (let e = 0; e < this._fields.length; e++) {
      const [r, s] = this._fields[e];
      if (r !== `_${e}_`) return null;
      A.push(s);
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
        } catch (s) {
          throw new Error(`Invalid ${this.display()} argument: 

field ${e} -> ${s.message}`);
        }
      })
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue(A) {
    const e = this._fields.map(([s]) => A[s]),
      r = bt(this._fields, e, ([, s], c) => s.encodeValue(c));
    return HA(...r);
  }
  _buildTypeTableImpl(A) {
    this._fields.forEach(([c, f]) => f.buildTypeTable(A));
    const e = he(-20),
      r = ae(this._fields.length),
      s = this._fields.map(([c, f]) => HA(ae(Re(c)), f.encodeType(A)));
    A.add(this, HA(e, r, HA(...s)));
  }
  decodeValue(A, e) {
    const r = this.checkType(e);
    if (!(r instanceof Rt)) throw new Error("Not a record type");
    const s = {};
    let c = 0,
      f = 0;
    for (; f < r._fields.length; ) {
      const [h, S] = r._fields[f];
      if (c >= this._fields.length) {
        S.decodeValue(A, S), f++;
        continue;
      }
      const [D, Y] = this._fields[c],
        M = Re(this._fields[c][0]),
        z = Re(h);
      if (M === z) (s[D] = Y.decodeValue(A, S)), c++, f++;
      else if (z > M)
        if (Y instanceof yt || Y instanceof Zt) (s[D] = []), c++;
        else throw new Error("Cannot find required field " + D);
      else S.decodeValue(A, S), f++;
    }
    for (const [h, S] of this._fields.slice(c))
      if (S instanceof yt || S instanceof Zt) s[h] = [];
      else throw new Error("Cannot find required field " + h);
    return s;
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
    const e = this._fields.map(([s]) => A[s]);
    return `record {${bt(
      this._fields,
      e,
      ([s, c], f) => s + "=" + c.valueToString(f)
    ).join("; ")}}`;
  }
}
class sr extends Rt {
  constructor(A) {
    const e = {};
    A.forEach((r, s) => (e["_" + s + "_"] = r)),
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
        } catch (s) {
          throw new Error(`Invalid ${this.display()} argument: 

index ${r} -> ${s.message}`);
        }
      })
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue(A) {
    const e = bt(this._components, A, (r, s) => r.encodeValue(s));
    return HA(...e);
  }
  decodeValue(A, e) {
    const r = this.checkType(e);
    if (!(r instanceof sr)) throw new Error("not a tuple type");
    if (r._components.length < this._components.length)
      throw new Error("tuple mismatch");
    const s = [];
    for (const [c, f] of r._components.entries())
      c >= this._components.length
        ? f.decodeValue(A, f)
        : s.push(this._components[c].decodeValue(A, f));
    return s;
  }
  display() {
    return `record {${this._components.map((e) => e.display()).join("; ")}}`;
  }
  valueToString(A) {
    return `record {${bt(this._components, A, (r, s) =>
      r.valueToString(s)
    ).join("; ")}}`;
  }
}
class or extends at {
  constructor(A = {}) {
    super(),
      (this._fields = Object.entries(A).sort((e, r) => Re(e[0]) - Re(r[0])));
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
        } catch (s) {
          throw new Error(`Invalid ${this.display()} argument: 

variant ${e} -> ${s.message}`);
        }
      })
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue(A) {
    for (let e = 0; e < this._fields.length; e++) {
      const [r, s] = this._fields[e];
      if (A.hasOwnProperty(r)) {
        const c = ae(e),
          f = s.encodeValue(A[r]);
        return HA(c, f);
      }
    }
    throw Error("Variant has no data: " + A);
  }
  _buildTypeTableImpl(A) {
    this._fields.forEach(([, c]) => {
      c.buildTypeTable(A);
    });
    const e = he(-21),
      r = ae(this._fields.length),
      s = this._fields.map(([c, f]) => HA(ae(Re(c)), f.encodeType(A)));
    A.add(this, HA(e, r, ...s));
  }
  decodeValue(A, e) {
    const r = this.checkType(e);
    if (!(r instanceof or)) throw new Error("Not a variant type");
    const s = Number(Ce(A));
    if (s >= r._fields.length) throw Error("Invalid variant index: " + s);
    const [c, f] = r._fields[s];
    for (const [h, S] of this._fields)
      if (Re(c) === Re(h)) {
        const D = S.decodeValue(A, f);
        return { [h]: D };
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
        const s = r.valueToString(A[e]);
        return s === "null" ? `variant {${e}}` : `variant {${e}=${s}}`;
      }
    throw new Error("Variant has no data: " + A);
  }
}
class st extends at {
  constructor() {
    super(...arguments), (this._id = st._counter++), (this._type = void 0);
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
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
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
st._counter = 0;
function ri(t) {
  if (ct(t) !== 1) throw new Error("Cannot decode principal");
  const e = Number(Ce(t));
  return XA.fromUint8Array(new Uint8Array(Et(t, e)));
}
class rn extends ve {
  accept(A, e) {
    return A.visitPrincipal(this, e);
  }
  covariant(A) {
    if (A && A._isPrincipal) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue(A) {
    const e = A.toUint8Array(),
      r = ae(e.byteLength);
    return HA(new Uint8Array([1]), r, e);
  }
  encodeType() {
    return he(-24);
  }
  decodeValue(A, e) {
    return this.checkType(e), ri(A);
  }
  get name() {
    return "principal";
  }
  valueToString(A) {
    return `${this.name} "${A.toText()}"`;
  }
}
class ii extends at {
  constructor(A, e, r = []) {
    super(), (this.argTypes = A), (this.retTypes = e), (this.annotations = r);
  }
  static argsToString(A, e) {
    if (A.length !== e.length) throw new Error("arity mismatch");
    return "(" + A.map((r, s) => r.valueToString(e[s])).join(", ") + ")";
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
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue([A, e]) {
    const r = A.toUint8Array(),
      s = ae(r.byteLength),
      c = HA(new Uint8Array([1]), s, r),
      f = new TextEncoder().encode(e),
      h = ae(f.byteLength);
    return HA(new Uint8Array([1]), c, h, f);
  }
  _buildTypeTableImpl(A) {
    this.argTypes.forEach((D) => D.buildTypeTable(A)),
      this.retTypes.forEach((D) => D.buildTypeTable(A));
    const e = he(-22),
      r = ae(this.argTypes.length),
      s = HA(...this.argTypes.map((D) => D.encodeType(A))),
      c = ae(this.retTypes.length),
      f = HA(...this.retTypes.map((D) => D.encodeType(A))),
      h = ae(this.annotations.length),
      S = HA(...this.annotations.map((D) => this.encodeAnnotation(D)));
    A.add(this, HA(e, r, s, c, f, h, S));
  }
  decodeValue(A) {
    if (ct(A) !== 1) throw new Error("Cannot decode function reference");
    const r = ri(A),
      s = Number(Ce(A)),
      c = Et(A, s),
      h = new TextDecoder("utf8", { fatal: !0 }).decode(c);
    return [r, h];
  }
  get name() {
    const A = this.argTypes.map((s) => s.name).join(", "),
      e = this.retTypes.map((s) => s.name).join(", "),
      r = " " + this.annotations.join(" ");
    return `(${A}) -> (${e})${r}`;
  }
  valueToString([A, e]) {
    return `func "${A.toText()}".${e}`;
  }
  display() {
    const A = this.argTypes.map((s) => s.display()).join(", "),
      e = this.retTypes.map((s) => s.display()).join(", "),
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
class nn extends at {
  constructor(A) {
    super(),
      (this._fields = Object.entries(A).sort((e, r) => Re(e[0]) - Re(r[0])));
  }
  accept(A, e) {
    return A.visitService(this, e);
  }
  covariant(A) {
    if (A && A._isPrincipal) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Be(A)}`);
  }
  encodeValue(A) {
    const e = A.toUint8Array(),
      r = ae(e.length);
    return HA(new Uint8Array([1]), r, e);
  }
  _buildTypeTableImpl(A) {
    this._fields.forEach(([c, f]) => f.buildTypeTable(A));
    const e = he(-23),
      r = ae(this._fields.length),
      s = this._fields.map(([c, f]) => {
        const h = new TextEncoder().encode(c),
          S = ae(h.length);
        return HA(S, h, f.encodeType(A));
      });
    A.add(this, HA(e, r, ...s));
  }
  decodeValue(A) {
    return ri(A);
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
function Be(t) {
  const A = JSON.stringify(t, (e, r) =>
    typeof r == "bigint" ? `BigInt(${r})` : r
  );
  return A && A.length > Ci ? A.substring(0, Ci - 3) + "..." : A;
}
function Lr(t, A) {
  if (A.length < t.length) throw Error("Wrong number of message arguments");
  const e = new is();
  t.forEach((S) => S.buildTypeTable(e));
  const r = new TextEncoder().encode(jt),
    s = e.encode(),
    c = ae(A.length),
    f = HA(...t.map((S) => S.encodeType(e))),
    h = HA(
      ...bt(t, A, (S, D) => {
        try {
          S.covariant(D);
        } catch (Y) {
          throw new Error(
            Y.message +
              `

`
          );
        }
        return S.encodeValue(D);
      })
    );
  return HA(r, s, c, f, h);
}
function an(t, A) {
  const e = new St(A);
  if (A.byteLength < jt.length)
    throw new Error("Message length smaller than magic number");
  const r = Et(e, jt.length),
    s = new TextDecoder().decode(r);
  if (s !== jt) throw new Error("Wrong magic number: " + JSON.stringify(s));
  function c(T) {
    const nA = [],
      EA = Number(Ce(T));
    for (let uA = 0; uA < EA; uA++) {
      const te = Number(At(T));
      switch (te) {
        case -18:
        case -19: {
          const WA = Number(At(T));
          nA.push([te, WA]);
          break;
        }
        case -20:
        case -21: {
          const WA = [];
          let FA = Number(Ce(T)),
            rA;
          for (; FA--; ) {
            const gA = Number(Ce(T));
            if (gA >= Math.pow(2, 32))
              throw new Error("field id out of 32-bit range");
            if (typeof rA == "number" && rA >= gA)
              throw new Error("field id collision or not sorted");
            rA = gA;
            const mA = Number(At(T));
            WA.push([gA, mA]);
          }
          nA.push([te, WA]);
          break;
        }
        case -22: {
          const WA = [];
          let FA = Number(Ce(T));
          for (; FA--; ) WA.push(Number(At(T)));
          const rA = [];
          let gA = Number(Ce(T));
          for (; gA--; ) rA.push(Number(At(T)));
          const mA = [];
          let LA = Number(Ce(T));
          for (; LA--; )
            switch (Number(Ce(T))) {
              case 1: {
                mA.push("query");
                break;
              }
              case 2: {
                mA.push("oneway");
                break;
              }
              case 3: {
                mA.push("composite_query");
                break;
              }
              default:
                throw new Error("unknown annotation");
            }
          nA.push([te, [WA, rA, mA]]);
          break;
        }
        case -23: {
          let WA = Number(Ce(T));
          const FA = [];
          for (; WA--; ) {
            const rA = Number(Ce(T)),
              gA = new TextDecoder().decode(Et(T, rA)),
              mA = At(T);
            FA.push([gA, mA]);
          }
          nA.push([te, FA]);
          break;
        }
        default:
          throw new Error("Illegal op_code: " + te);
      }
    }
    const NA = [],
      MA = Number(Ce(T));
    for (let uA = 0; uA < MA; uA++) NA.push(Number(At(T)));
    return [nA, NA];
  }
  const [f, h] = c(e);
  if (h.length < t.length) throw new Error("Wrong number of return values");
  const S = f.map((T) => bn());
  function D(T) {
    if (T < -24) throw new Error("future value not supported");
    if (T < 0)
      switch (T) {
        case -1:
          return In;
        case -2:
          return gn;
        case -3:
          return cn;
        case -4:
          return En;
        case -5:
          return dn;
        case -6:
          return wn;
        case -7:
          return pn;
        case -8:
          return yn;
        case -9:
          return hn;
        case -10:
          return Qn;
        case -11:
          return Cn;
        case -12:
          return ln;
        case -13:
          return fn;
        case -14:
          return un;
        case -15:
          return Bn;
        case -16:
          return on;
        case -17:
          return sn;
        case -24:
          return xn;
        default:
          throw new Error("Illegal op_code: " + T);
      }
    if (T >= f.length) throw new Error("type index out of range");
    return S[T];
  }
  function Y(T) {
    switch (T[0]) {
      case -19: {
        const nA = D(T[1]);
        return mn(nA);
      }
      case -18: {
        const nA = D(T[1]);
        return Dn(nA);
      }
      case -20: {
        const nA = {};
        for (const [MA, uA] of T[1]) {
          const te = `_${MA}_`;
          nA[te] = D(uA);
        }
        const EA = _n(nA),
          NA = EA.tryAsTuple();
        return Array.isArray(NA) ? Sn(...NA) : EA;
      }
      case -21: {
        const nA = {};
        for (const [EA, NA] of T[1]) {
          const MA = `_${EA}_`;
          nA[MA] = D(NA);
        }
        return Nn(nA);
      }
      case -22: {
        const [nA, EA, NA] = T[1];
        return Fn(
          nA.map((MA) => D(MA)),
          EA.map((MA) => D(MA)),
          NA
        );
      }
      case -23: {
        const nA = {},
          EA = T[1];
        for (const [NA, MA] of EA) {
          let uA = D(MA);
          if ((uA instanceof st && (uA = uA.getType()), !(uA instanceof ii)))
            throw new Error(
              "Illegal service definition: services can only contain functions"
            );
          nA[NA] = uA;
        }
        return Rn(nA);
      }
      default:
        throw new Error("Illegal op_code: " + T[0]);
    }
  }
  f.forEach((T, nA) => {
    if (T[0] === -22) {
      const EA = Y(T);
      S[nA].fill(EA);
    }
  }),
    f.forEach((T, nA) => {
      if (T[0] !== -22) {
        const EA = Y(T);
        S[nA].fill(EA);
      }
    });
  const M = h.map((T) => D(T)),
    z = t.map((T, nA) => T.decodeValue(e, M[nA]));
  for (let T = t.length; T < M.length; T++) M[T].decodeValue(e, M[T]);
  if (e.byteLength > 0) throw new Error("decode: Left-over bytes");
  return z;
}
const sn = new zi(),
  on = new Zt(),
  as = new Zi(),
  gn = new Xi(),
  In = new $i(),
  Bn = new An(),
  En = new en(),
  cn = new tn(),
  fn = new ti(32),
  un = new ti(64),
  hn = new ft(8),
  Qn = new ft(16),
  Cn = new ft(32),
  ln = new ft(64),
  dn = new rt(8),
  wn = new rt(16),
  pn = new rt(32),
  yn = new rt(64),
  xn = new rn();
function Sn(...t) {
  return new sr(t);
}
function mn(t) {
  return new ar(t);
}
function Dn(t) {
  return new yt(t);
}
function _n(t) {
  return new Rt(t);
}
function Nn(t) {
  return new or(t);
}
function bn() {
  return new st();
}
function Fn(t, A, e = []) {
  return new ii(t, A, e);
}
function Rn(t) {
  return new nn(t);
}
const ss = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Bool: gn,
      BoolClass: Xi,
      ConstructType: at,
      Empty: sn,
      EmptyClass: zi,
      FixedIntClass: ft,
      FixedNatClass: rt,
      Float32: fn,
      Float64: un,
      FloatClass: ti,
      Func: Fn,
      FuncClass: ii,
      Int: En,
      Int16: Qn,
      Int32: Cn,
      Int64: ln,
      Int8: hn,
      IntClass: en,
      Nat: cn,
      Nat16: wn,
      Nat32: pn,
      Nat64: yn,
      Nat8: dn,
      NatClass: tn,
      Null: In,
      NullClass: $i,
      Opt: Dn,
      OptClass: yt,
      PrimitiveType: ve,
      Principal: xn,
      PrincipalClass: rn,
      Rec: bn,
      RecClass: st,
      Record: _n,
      RecordClass: Rt,
      Reserved: on,
      ReservedClass: Zt,
      Service: Rn,
      ServiceClass: nn,
      Text: Bn,
      TextClass: An,
      Tuple: Sn,
      TupleClass: sr,
      Type: nr,
      Unknown: as,
      UnknownClass: Zi,
      Variant: Nn,
      VariantClass: or,
      Vec: mn,
      VecClass: ar,
      Visitor: ns,
      decode: an,
      encode: Lr,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var vn = {},
  Gn = { exports: {} };
(function (t) {
  (function (A) {
    var e,
      r = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
      s = Math.ceil,
      c = Math.floor,
      f = "[BigNumber Error] ",
      h = f + "Number primitive has more than 15 significant digits: ",
      S = 1e14,
      D = 14,
      Y = 9007199254740991,
      M = [
        1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13,
      ],
      z = 1e7,
      T = 1e9;
    function nA(rA) {
      var gA,
        mA,
        LA,
        j = (l.prototype = { constructor: l, toString: null, valueOf: null }),
        JA = new l(1),
        UA = 20,
        kA = 4,
        Ae = -7,
        ZA = 21,
        se = -1e7,
        Ee = 1e7,
        KA = !1,
        le = 1,
        xe = 0,
        zA = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: " ",
          suffix: "",
        },
        PA = "0123456789abcdefghijklmnopqrstuvwxyz",
        ce = !0;
      function l(C, d) {
        var x,
          b,
          _,
          N,
          g,
          i,
          a,
          I,
          u = this;
        if (!(u instanceof l)) return new l(C, d);
        if (d == null) {
          if (C && C._isBigNumber === !0) {
            (u.s = C.s),
              !C.c || C.e > Ee
                ? (u.c = u.e = null)
                : C.e < se
                ? (u.c = [(u.e = 0)])
                : ((u.e = C.e), (u.c = C.c.slice()));
            return;
          }
          if ((i = typeof C == "number") && C * 0 == 0) {
            if (((u.s = 1 / C < 0 ? ((C = -C), -1) : 1), C === ~~C)) {
              for (N = 0, g = C; g >= 10; g /= 10, N++);
              N > Ee ? (u.c = u.e = null) : ((u.e = N), (u.c = [C]));
              return;
            }
            I = String(C);
          } else {
            if (!r.test((I = String(C)))) return LA(u, I, i);
            u.s = I.charCodeAt(0) == 45 ? ((I = I.slice(1)), -1) : 1;
          }
          (N = I.indexOf(".")) > -1 && (I = I.replace(".", "")),
            (g = I.search(/e/i)) > 0
              ? (N < 0 && (N = g),
                (N += +I.slice(g + 1)),
                (I = I.substring(0, g)))
              : N < 0 && (N = I.length);
        } else {
          if ((uA(d, 2, PA.length, "Base"), d == 10 && ce))
            return (u = new l(C)), IA(u, UA + u.e + 1, kA);
          if (((I = String(C)), (i = typeof C == "number"))) {
            if (C * 0 != 0) return LA(u, I, i, d);
            if (
              ((u.s = 1 / C < 0 ? ((I = I.slice(1)), -1) : 1),
              l.DEBUG && I.replace(/^0\.0*|\./, "").length > 15)
            )
              throw Error(h + C);
          } else u.s = I.charCodeAt(0) === 45 ? ((I = I.slice(1)), -1) : 1;
          for (x = PA.slice(0, d), N = g = 0, a = I.length; g < a; g++)
            if (x.indexOf((b = I.charAt(g))) < 0) {
              if (b == ".") {
                if (g > N) {
                  N = a;
                  continue;
                }
              } else if (
                !_ &&
                ((I == I.toUpperCase() && (I = I.toLowerCase())) ||
                  (I == I.toLowerCase() && (I = I.toUpperCase())))
              ) {
                (_ = !0), (g = -1), (N = 0);
                continue;
              }
              return LA(u, String(C), i, d);
            }
          (i = !1),
            (I = mA(I, d, 10, u.s)),
            (N = I.indexOf(".")) > -1
              ? (I = I.replace(".", ""))
              : (N = I.length);
        }
        for (g = 0; I.charCodeAt(g) === 48; g++);
        for (a = I.length; I.charCodeAt(--a) === 48; );
        if ((I = I.slice(g, ++a))) {
          if (((a -= g), i && l.DEBUG && a > 15 && (C > Y || C !== c(C))))
            throw Error(h + u.s * C);
          if ((N = N - g - 1) > Ee) u.c = u.e = null;
          else if (N < se) u.c = [(u.e = 0)];
          else {
            if (
              ((u.e = N),
              (u.c = []),
              (g = (N + 1) % D),
              N < 0 && (g += D),
              g < a)
            ) {
              for (g && u.c.push(+I.slice(0, g)), a -= D; g < a; )
                u.c.push(+I.slice(g, (g += D)));
              g = D - (I = I.slice(g)).length;
            } else g -= a;
            for (; g--; I += "0");
            u.c.push(+I);
          }
        } else u.c = [(u.e = 0)];
      }
      (l.clone = nA),
        (l.ROUND_UP = 0),
        (l.ROUND_DOWN = 1),
        (l.ROUND_CEIL = 2),
        (l.ROUND_FLOOR = 3),
        (l.ROUND_HALF_UP = 4),
        (l.ROUND_HALF_DOWN = 5),
        (l.ROUND_HALF_EVEN = 6),
        (l.ROUND_HALF_CEIL = 7),
        (l.ROUND_HALF_FLOOR = 8),
        (l.EUCLID = 9),
        (l.config = l.set =
          function (C) {
            var d, x;
            if (C != null)
              if (typeof C == "object") {
                if (
                  (C.hasOwnProperty((d = "DECIMAL_PLACES")) &&
                    ((x = C[d]), uA(x, 0, T, d), (UA = x)),
                  C.hasOwnProperty((d = "ROUNDING_MODE")) &&
                    ((x = C[d]), uA(x, 0, 8, d), (kA = x)),
                  C.hasOwnProperty((d = "EXPONENTIAL_AT")) &&
                    ((x = C[d]),
                    x && x.pop
                      ? (uA(x[0], -T, 0, d),
                        uA(x[1], 0, T, d),
                        (Ae = x[0]),
                        (ZA = x[1]))
                      : (uA(x, -T, T, d), (Ae = -(ZA = x < 0 ? -x : x)))),
                  C.hasOwnProperty((d = "RANGE")))
                )
                  if (((x = C[d]), x && x.pop))
                    uA(x[0], -T, -1, d),
                      uA(x[1], 1, T, d),
                      (se = x[0]),
                      (Ee = x[1]);
                  else if ((uA(x, -T, T, d), x)) se = -(Ee = x < 0 ? -x : x);
                  else throw Error(f + d + " cannot be zero: " + x);
                if (C.hasOwnProperty((d = "CRYPTO")))
                  if (((x = C[d]), x === !!x))
                    if (x)
                      if (
                        typeof crypto < "u" &&
                        crypto &&
                        (crypto.getRandomValues || crypto.randomBytes)
                      )
                        KA = x;
                      else throw ((KA = !x), Error(f + "crypto unavailable"));
                    else KA = x;
                  else throw Error(f + d + " not true or false: " + x);
                if (
                  (C.hasOwnProperty((d = "MODULO_MODE")) &&
                    ((x = C[d]), uA(x, 0, 9, d), (le = x)),
                  C.hasOwnProperty((d = "POW_PRECISION")) &&
                    ((x = C[d]), uA(x, 0, T, d), (xe = x)),
                  C.hasOwnProperty((d = "FORMAT")))
                )
                  if (((x = C[d]), typeof x == "object")) zA = x;
                  else throw Error(f + d + " not an object: " + x);
                if (C.hasOwnProperty((d = "ALPHABET")))
                  if (
                    ((x = C[d]),
                    typeof x == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(x))
                  )
                    (ce = x.slice(0, 10) == "0123456789"), (PA = x);
                  else throw Error(f + d + " invalid: " + x);
              } else throw Error(f + "Object expected: " + C);
            return {
              DECIMAL_PLACES: UA,
              ROUNDING_MODE: kA,
              EXPONENTIAL_AT: [Ae, ZA],
              RANGE: [se, Ee],
              CRYPTO: KA,
              MODULO_MODE: le,
              POW_PRECISION: xe,
              FORMAT: zA,
              ALPHABET: PA,
            };
          }),
        (l.isBigNumber = function (C) {
          if (!C || C._isBigNumber !== !0) return !1;
          if (!l.DEBUG) return !0;
          var d,
            x,
            b = C.c,
            _ = C.e,
            N = C.s;
          A: if ({}.toString.call(b) == "[object Array]") {
            if ((N === 1 || N === -1) && _ >= -T && _ <= T && _ === c(_)) {
              if (b[0] === 0) {
                if (_ === 0 && b.length === 1) return !0;
                break A;
              }
              if (
                ((d = (_ + 1) % D), d < 1 && (d += D), String(b[0]).length == d)
              ) {
                for (d = 0; d < b.length; d++)
                  if (((x = b[d]), x < 0 || x >= S || x !== c(x))) break A;
                if (x !== 0) return !0;
              }
            }
          } else if (
            b === null &&
            _ === null &&
            (N === null || N === 1 || N === -1)
          )
            return !0;
          throw Error(f + "Invalid BigNumber: " + C);
        }),
        (l.maximum = l.max =
          function () {
            return oe(arguments, -1);
          }),
        (l.minimum = l.min =
          function () {
            return oe(arguments, 1);
          }),
        (l.random = (function () {
          var C = 9007199254740992,
            d =
              (Math.random() * C) & 2097151
                ? function () {
                    return c(Math.random() * C);
                  }
                : function () {
                    return (
                      ((Math.random() * 1073741824) | 0) * 8388608 +
                      ((Math.random() * 8388608) | 0)
                    );
                  };
          return function (x) {
            var b,
              _,
              N,
              g,
              i,
              a = 0,
              I = [],
              u = new l(JA);
            if ((x == null ? (x = UA) : uA(x, 0, T), (g = s(x / D)), KA))
              if (crypto.getRandomValues) {
                for (
                  b = crypto.getRandomValues(new Uint32Array((g *= 2)));
                  a < g;

                )
                  (i = b[a] * 131072 + (b[a + 1] >>> 11)),
                    i >= 9e15
                      ? ((_ = crypto.getRandomValues(new Uint32Array(2))),
                        (b[a] = _[0]),
                        (b[a + 1] = _[1]))
                      : (I.push(i % 1e14), (a += 2));
                a = g / 2;
              } else if (crypto.randomBytes) {
                for (b = crypto.randomBytes((g *= 7)); a < g; )
                  (i =
                    (b[a] & 31) * 281474976710656 +
                    b[a + 1] * 1099511627776 +
                    b[a + 2] * 4294967296 +
                    b[a + 3] * 16777216 +
                    (b[a + 4] << 16) +
                    (b[a + 5] << 8) +
                    b[a + 6]),
                    i >= 9e15
                      ? crypto.randomBytes(7).copy(b, a)
                      : (I.push(i % 1e14), (a += 7));
                a = g / 7;
              } else throw ((KA = !1), Error(f + "crypto unavailable"));
            if (!KA) for (; a < g; ) (i = d()), i < 9e15 && (I[a++] = i % 1e14);
            for (
              g = I[--a],
                x %= D,
                g && x && ((i = M[D - x]), (I[a] = c(g / i) * i));
              I[a] === 0;
              I.pop(), a--
            );
            if (a < 0) I = [(N = 0)];
            else {
              for (N = -1; I[0] === 0; I.splice(0, 1), N -= D);
              for (a = 1, i = I[0]; i >= 10; i /= 10, a++);
              a < D && (N -= D - a);
            }
            return (u.e = N), (u.c = I), u;
          };
        })()),
        (l.sum = function () {
          for (var C = 1, d = arguments, x = new l(d[0]); C < d.length; )
            x = x.plus(d[C++]);
          return x;
        }),
        (mA = (function () {
          var C = "0123456789";
          function d(x, b, _, N) {
            for (var g, i = [0], a, I = 0, u = x.length; I < u; ) {
              for (a = i.length; a--; i[a] *= b);
              for (i[0] += N.indexOf(x.charAt(I++)), g = 0; g < i.length; g++)
                i[g] > _ - 1 &&
                  (i[g + 1] == null && (i[g + 1] = 0),
                  (i[g + 1] += (i[g] / _) | 0),
                  (i[g] %= _));
            }
            return i.reverse();
          }
          return function (x, b, _, N, g) {
            var i,
              a,
              I,
              u,
              y,
              R,
              J,
              tA,
              cA = x.indexOf("."),
              dA = UA,
              P = kA;
            for (
              cA >= 0 &&
                ((u = xe),
                (xe = 0),
                (x = x.replace(".", "")),
                (tA = new l(b)),
                (R = tA.pow(x.length - cA)),
                (xe = u),
                (tA.c = d(FA(NA(R.c), R.e, "0"), 10, _, C)),
                (tA.e = tA.c.length)),
                J = d(x, b, _, g ? ((i = PA), C) : ((i = C), PA)),
                I = u = J.length;
              J[--u] == 0;
              J.pop()
            );
            if (!J[0]) return i.charAt(0);
            if (
              (cA < 0
                ? --I
                : ((R.c = J),
                  (R.e = I),
                  (R.s = N),
                  (R = gA(R, tA, dA, P, _)),
                  (J = R.c),
                  (y = R.r),
                  (I = R.e)),
              (a = I + dA + 1),
              (cA = J[a]),
              (u = _ / 2),
              (y = y || a < 0 || J[a + 1] != null),
              (y =
                P < 4
                  ? (cA != null || y) && (P == 0 || P == (R.s < 0 ? 3 : 2))
                  : cA > u ||
                    (cA == u &&
                      (P == 4 ||
                        y ||
                        (P == 6 && J[a - 1] & 1) ||
                        P == (R.s < 0 ? 8 : 7)))),
              a < 1 || !J[0])
            )
              x = y ? FA(i.charAt(1), -dA, i.charAt(0)) : i.charAt(0);
            else {
              if (((J.length = a), y))
                for (--_; ++J[--a] > _; )
                  (J[a] = 0), a || (++I, (J = [1].concat(J)));
              for (u = J.length; !J[--u]; );
              for (cA = 0, x = ""; cA <= u; x += i.charAt(J[cA++]));
              x = FA(x, I, i.charAt(0));
            }
            return x;
          };
        })()),
        (gA = (function () {
          function C(b, _, N) {
            var g,
              i,
              a,
              I,
              u = 0,
              y = b.length,
              R = _ % z,
              J = (_ / z) | 0;
            for (b = b.slice(); y--; )
              (a = b[y] % z),
                (I = (b[y] / z) | 0),
                (g = J * a + I * R),
                (i = R * a + (g % z) * z + u),
                (u = ((i / N) | 0) + ((g / z) | 0) + J * I),
                (b[y] = i % N);
            return u && (b = [u].concat(b)), b;
          }
          function d(b, _, N, g) {
            var i, a;
            if (N != g) a = N > g ? 1 : -1;
            else
              for (i = a = 0; i < N; i++)
                if (b[i] != _[i]) {
                  a = b[i] > _[i] ? 1 : -1;
                  break;
                }
            return a;
          }
          function x(b, _, N, g) {
            for (var i = 0; N--; )
              (b[N] -= i),
                (i = b[N] < _[N] ? 1 : 0),
                (b[N] = i * g + b[N] - _[N]);
            for (; !b[0] && b.length > 1; b.splice(0, 1));
          }
          return function (b, _, N, g, i) {
            var a,
              I,
              u,
              y,
              R,
              J,
              tA,
              cA,
              dA,
              P,
              DA,
              $A,
              Ge,
              Pe,
              je,
              xA,
              Ne,
              ge = b.s == _.s ? 1 : -1,
              ee = b.c,
              qA = _.c;
            if (!ee || !ee[0] || !qA || !qA[0])
              return new l(
                !b.s || !_.s || (ee ? qA && ee[0] == qA[0] : !qA)
                  ? NaN
                  : (ee && ee[0] == 0) || !qA
                  ? ge * 0
                  : ge / 0
              );
            for (
              cA = new l(ge),
                dA = cA.c = [],
                I = b.e - _.e,
                ge = N + I + 1,
                i ||
                  ((i = S),
                  (I = EA(b.e / D) - EA(_.e / D)),
                  (ge = (ge / D) | 0)),
                u = 0;
              qA[u] == (ee[u] || 0);
              u++
            );
            if ((qA[u] > (ee[u] || 0) && I--, ge < 0)) dA.push(1), (y = !0);
            else {
              for (
                Pe = ee.length,
                  xA = qA.length,
                  u = 0,
                  ge += 2,
                  R = c(i / (qA[0] + 1)),
                  R > 1 &&
                    ((qA = C(qA, R, i)),
                    (ee = C(ee, R, i)),
                    (xA = qA.length),
                    (Pe = ee.length)),
                  Ge = xA,
                  P = ee.slice(0, xA),
                  DA = P.length;
                DA < xA;
                P[DA++] = 0
              );
              (Ne = qA.slice()),
                (Ne = [0].concat(Ne)),
                (je = qA[0]),
                qA[1] >= i / 2 && je++;
              do {
                if (((R = 0), (a = d(qA, P, xA, DA)), a < 0)) {
                  if (
                    (($A = P[0]),
                    xA != DA && ($A = $A * i + (P[1] || 0)),
                    (R = c($A / je)),
                    R > 1)
                  )
                    for (
                      R >= i && (R = i - 1),
                        J = C(qA, R, i),
                        tA = J.length,
                        DA = P.length;
                      d(J, P, tA, DA) == 1;

                    )
                      R--,
                        x(J, xA < tA ? Ne : qA, tA, i),
                        (tA = J.length),
                        (a = 1);
                  else R == 0 && (a = R = 1), (J = qA.slice()), (tA = J.length);
                  if (
                    (tA < DA && (J = [0].concat(J)),
                    x(P, J, DA, i),
                    (DA = P.length),
                    a == -1)
                  )
                    for (; d(qA, P, xA, DA) < 1; )
                      R++, x(P, xA < DA ? Ne : qA, DA, i), (DA = P.length);
                } else a === 0 && (R++, (P = [0]));
                (dA[u++] = R),
                  P[0] ? (P[DA++] = ee[Ge] || 0) : ((P = [ee[Ge]]), (DA = 1));
              } while ((Ge++ < Pe || P[0] != null) && ge--);
              (y = P[0] != null), dA[0] || dA.splice(0, 1);
            }
            if (i == S) {
              for (u = 1, ge = dA[0]; ge >= 10; ge /= 10, u++);
              IA(cA, N + (cA.e = u + I * D - 1) + 1, g, y);
            } else (cA.e = I), (cA.r = +y);
            return cA;
          };
        })());
      function QA(C, d, x, b) {
        var _, N, g, i, a;
        if ((x == null ? (x = kA) : uA(x, 0, 8), !C.c)) return C.toString();
        if (((_ = C.c[0]), (g = C.e), d == null))
          (a = NA(C.c)),
            (a =
              b == 1 || (b == 2 && (g <= Ae || g >= ZA))
                ? WA(a, g)
                : FA(a, g, "0"));
        else if (
          ((C = IA(new l(C), d, x)),
          (N = C.e),
          (a = NA(C.c)),
          (i = a.length),
          b == 1 || (b == 2 && (d <= N || N <= Ae)))
        ) {
          for (; i < d; a += "0", i++);
          a = WA(a, N);
        } else if (((d -= g), (a = FA(a, N, "0")), N + 1 > i)) {
          if (--d > 0) for (a += "."; d--; a += "0");
        } else if (((d += N - i), d > 0))
          for (N + 1 == i && (a += "."); d--; a += "0");
        return C.s < 0 && _ ? "-" + a : a;
      }
      function oe(C, d) {
        for (var x, b, _ = 1, N = new l(C[0]); _ < C.length; _++)
          (b = new l(C[_])),
            (!b.s || (x = MA(N, b)) === d || (x === 0 && N.s === d)) && (N = b);
        return N;
      }
      function Ye(C, d, x) {
        for (var b = 1, _ = d.length; !d[--_]; d.pop());
        for (_ = d[0]; _ >= 10; _ /= 10, b++);
        return (
          (x = b + x * D - 1) > Ee
            ? (C.c = C.e = null)
            : x < se
            ? (C.c = [(C.e = 0)])
            : ((C.e = x), (C.c = d)),
          C
        );
      }
      LA = (function () {
        var C = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
          d = /^([^.]+)\.$/,
          x = /^\.([^.]+)$/,
          b = /^-?(Infinity|NaN)$/,
          _ = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function (N, g, i, a) {
          var I,
            u = i ? g : g.replace(_, "");
          if (b.test(u)) N.s = isNaN(u) ? null : u < 0 ? -1 : 1;
          else {
            if (
              !i &&
              ((u = u.replace(C, function (y, R, J) {
                return (
                  (I = (J = J.toLowerCase()) == "x" ? 16 : J == "b" ? 2 : 8),
                  !a || a == I ? R : y
                );
              })),
              a && ((I = a), (u = u.replace(d, "$1").replace(x, "0.$1"))),
              g != u)
            )
              return new l(u, I);
            if (l.DEBUG)
              throw Error(
                f + "Not a" + (a ? " base " + a : "") + " number: " + g
              );
            N.s = null;
          }
          N.c = N.e = null;
        };
      })();
      function IA(C, d, x, b) {
        var _,
          N,
          g,
          i,
          a,
          I,
          u,
          y = C.c,
          R = M;
        if (y) {
          A: {
            for (_ = 1, i = y[0]; i >= 10; i /= 10, _++);
            if (((N = d - _), N < 0))
              (N += D),
                (g = d),
                (a = y[(I = 0)]),
                (u = c((a / R[_ - g - 1]) % 10));
            else if (((I = s((N + 1) / D)), I >= y.length))
              if (b) {
                for (; y.length <= I; y.push(0));
                (a = u = 0), (_ = 1), (N %= D), (g = N - D + 1);
              } else break A;
            else {
              for (a = i = y[I], _ = 1; i >= 10; i /= 10, _++);
              (N %= D),
                (g = N - D + _),
                (u = g < 0 ? 0 : c((a / R[_ - g - 1]) % 10));
            }
            if (
              ((b =
                b ||
                d < 0 ||
                y[I + 1] != null ||
                (g < 0 ? a : a % R[_ - g - 1])),
              (b =
                x < 4
                  ? (u || b) && (x == 0 || x == (C.s < 0 ? 3 : 2))
                  : u > 5 ||
                    (u == 5 &&
                      (x == 4 ||
                        b ||
                        (x == 6 &&
                          (N > 0 ? (g > 0 ? a / R[_ - g] : 0) : y[I - 1]) % 10 &
                            1) ||
                        x == (C.s < 0 ? 8 : 7)))),
              d < 1 || !y[0])
            )
              return (
                (y.length = 0),
                b
                  ? ((d -= C.e + 1),
                    (y[0] = R[(D - (d % D)) % D]),
                    (C.e = -d || 0))
                  : (y[0] = C.e = 0),
                C
              );
            if (
              (N == 0
                ? ((y.length = I), (i = 1), I--)
                : ((y.length = I + 1),
                  (i = R[D - N]),
                  (y[I] = g > 0 ? c((a / R[_ - g]) % R[g]) * i : 0)),
              b)
            )
              for (;;)
                if (I == 0) {
                  for (N = 1, g = y[0]; g >= 10; g /= 10, N++);
                  for (g = y[0] += i, i = 1; g >= 10; g /= 10, i++);
                  N != i && (C.e++, y[0] == S && (y[0] = 1));
                  break;
                } else {
                  if (((y[I] += i), y[I] != S)) break;
                  (y[I--] = 0), (i = 1);
                }
            for (N = y.length; y[--N] === 0; y.pop());
          }
          C.e > Ee ? (C.c = C.e = null) : C.e < se && (C.c = [(C.e = 0)]);
        }
        return C;
      }
      function BA(C) {
        var d,
          x = C.e;
        return x === null
          ? C.toString()
          : ((d = NA(C.c)),
            (d = x <= Ae || x >= ZA ? WA(d, x) : FA(d, x, "0")),
            C.s < 0 ? "-" + d : d);
      }
      return (
        (j.absoluteValue = j.abs =
          function () {
            var C = new l(this);
            return C.s < 0 && (C.s = 1), C;
          }),
        (j.comparedTo = function (C, d) {
          return MA(this, new l(C, d));
        }),
        (j.decimalPlaces = j.dp =
          function (C, d) {
            var x,
              b,
              _,
              N = this;
            if (C != null)
              return (
                uA(C, 0, T),
                d == null ? (d = kA) : uA(d, 0, 8),
                IA(new l(N), C + N.e + 1, d)
              );
            if (!(x = N.c)) return null;
            if (((b = ((_ = x.length - 1) - EA(this.e / D)) * D), (_ = x[_])))
              for (; _ % 10 == 0; _ /= 10, b--);
            return b < 0 && (b = 0), b;
          }),
        (j.dividedBy = j.div =
          function (C, d) {
            return gA(this, new l(C, d), UA, kA);
          }),
        (j.dividedToIntegerBy = j.idiv =
          function (C, d) {
            return gA(this, new l(C, d), 0, 1);
          }),
        (j.exponentiatedBy = j.pow =
          function (C, d) {
            var x,
              b,
              _,
              N,
              g,
              i,
              a,
              I,
              u,
              y = this;
            if (((C = new l(C)), C.c && !C.isInteger()))
              throw Error(f + "Exponent not an integer: " + BA(C));
            if (
              (d != null && (d = new l(d)),
              (i = C.e > 14),
              !y.c ||
                !y.c[0] ||
                (y.c[0] == 1 && !y.e && y.c.length == 1) ||
                !C.c ||
                !C.c[0])
            )
              return (
                (u = new l(Math.pow(+BA(y), i ? C.s * (2 - te(C)) : +BA(C)))),
                d ? u.mod(d) : u
              );
            if (((a = C.s < 0), d)) {
              if (d.c ? !d.c[0] : !d.s) return new l(NaN);
              (b = !a && y.isInteger() && d.isInteger()), b && (y = y.mod(d));
            } else {
              if (
                C.e > 9 &&
                (y.e > 0 ||
                  y.e < -1 ||
                  (y.e == 0
                    ? y.c[0] > 1 || (i && y.c[1] >= 24e7)
                    : y.c[0] < 8e13 || (i && y.c[0] <= 9999975e7)))
              )
                return (
                  (N = y.s < 0 && te(C) ? -0 : 0),
                  y.e > -1 && (N = 1 / N),
                  new l(a ? 1 / N : N)
                );
              xe && (N = s(xe / D + 2));
            }
            for (
              i
                ? ((x = new l(0.5)), a && (C.s = 1), (I = te(C)))
                : ((_ = Math.abs(+BA(C))), (I = _ % 2)),
                u = new l(JA);
              ;

            ) {
              if (I) {
                if (((u = u.times(y)), !u.c)) break;
                N ? u.c.length > N && (u.c.length = N) : b && (u = u.mod(d));
              }
              if (_) {
                if (((_ = c(_ / 2)), _ === 0)) break;
                I = _ % 2;
              } else if (((C = C.times(x)), IA(C, C.e + 1, 1), C.e > 14))
                I = te(C);
              else {
                if (((_ = +BA(C)), _ === 0)) break;
                I = _ % 2;
              }
              (y = y.times(y)),
                N
                  ? y.c && y.c.length > N && (y.c.length = N)
                  : b && (y = y.mod(d));
            }
            return b
              ? u
              : (a && (u = JA.div(u)), d ? u.mod(d) : N ? IA(u, xe, kA, g) : u);
          }),
        (j.integerValue = function (C) {
          var d = new l(this);
          return C == null ? (C = kA) : uA(C, 0, 8), IA(d, d.e + 1, C);
        }),
        (j.isEqualTo = j.eq =
          function (C, d) {
            return MA(this, new l(C, d)) === 0;
          }),
        (j.isFinite = function () {
          return !!this.c;
        }),
        (j.isGreaterThan = j.gt =
          function (C, d) {
            return MA(this, new l(C, d)) > 0;
          }),
        (j.isGreaterThanOrEqualTo = j.gte =
          function (C, d) {
            return (d = MA(this, new l(C, d))) === 1 || d === 0;
          }),
        (j.isInteger = function () {
          return !!this.c && EA(this.e / D) > this.c.length - 2;
        }),
        (j.isLessThan = j.lt =
          function (C, d) {
            return MA(this, new l(C, d)) < 0;
          }),
        (j.isLessThanOrEqualTo = j.lte =
          function (C, d) {
            return (d = MA(this, new l(C, d))) === -1 || d === 0;
          }),
        (j.isNaN = function () {
          return !this.s;
        }),
        (j.isNegative = function () {
          return this.s < 0;
        }),
        (j.isPositive = function () {
          return this.s > 0;
        }),
        (j.isZero = function () {
          return !!this.c && this.c[0] == 0;
        }),
        (j.minus = function (C, d) {
          var x,
            b,
            _,
            N,
            g = this,
            i = g.s;
          if (((C = new l(C, d)), (d = C.s), !i || !d)) return new l(NaN);
          if (i != d) return (C.s = -d), g.plus(C);
          var a = g.e / D,
            I = C.e / D,
            u = g.c,
            y = C.c;
          if (!a || !I) {
            if (!u || !y) return u ? ((C.s = -d), C) : new l(y ? g : NaN);
            if (!u[0] || !y[0])
              return y[0]
                ? ((C.s = -d), C)
                : new l(u[0] ? g : kA == 3 ? -0 : 0);
          }
          if (((a = EA(a)), (I = EA(I)), (u = u.slice()), (i = a - I))) {
            for (
              (N = i < 0) ? ((i = -i), (_ = u)) : ((I = a), (_ = y)),
                _.reverse(),
                d = i;
              d--;
              _.push(0)
            );
            _.reverse();
          } else
            for (
              b = (N = (i = u.length) < (d = y.length)) ? i : d, i = d = 0;
              d < b;
              d++
            )
              if (u[d] != y[d]) {
                N = u[d] < y[d];
                break;
              }
          if (
            (N && ((_ = u), (u = y), (y = _), (C.s = -C.s)),
            (d = (b = y.length) - (x = u.length)),
            d > 0)
          )
            for (; d--; u[x++] = 0);
          for (d = S - 1; b > i; ) {
            if (u[--b] < y[b]) {
              for (x = b; x && !u[--x]; u[x] = d);
              --u[x], (u[b] += S);
            }
            u[b] -= y[b];
          }
          for (; u[0] == 0; u.splice(0, 1), --I);
          return u[0]
            ? Ye(C, u, I)
            : ((C.s = kA == 3 ? -1 : 1), (C.c = [(C.e = 0)]), C);
        }),
        (j.modulo = j.mod =
          function (C, d) {
            var x,
              b,
              _ = this;
            return (
              (C = new l(C, d)),
              !_.c || !C.s || (C.c && !C.c[0])
                ? new l(NaN)
                : !C.c || (_.c && !_.c[0])
                ? new l(_)
                : (le == 9
                    ? ((b = C.s),
                      (C.s = 1),
                      (x = gA(_, C, 0, 3)),
                      (C.s = b),
                      (x.s *= b))
                    : (x = gA(_, C, 0, le)),
                  (C = _.minus(x.times(C))),
                  !C.c[0] && le == 1 && (C.s = _.s),
                  C)
            );
          }),
        (j.multipliedBy = j.times =
          function (C, d) {
            var x,
              b,
              _,
              N,
              g,
              i,
              a,
              I,
              u,
              y,
              R,
              J,
              tA,
              cA,
              dA,
              P = this,
              DA = P.c,
              $A = (C = new l(C, d)).c;
            if (!DA || !$A || !DA[0] || !$A[0])
              return (
                !P.s || !C.s || (DA && !DA[0] && !$A) || ($A && !$A[0] && !DA)
                  ? (C.c = C.e = C.s = null)
                  : ((C.s *= P.s),
                    !DA || !$A ? (C.c = C.e = null) : ((C.c = [0]), (C.e = 0))),
                C
              );
            for (
              b = EA(P.e / D) + EA(C.e / D),
                C.s *= P.s,
                a = DA.length,
                y = $A.length,
                a < y &&
                  ((tA = DA), (DA = $A), ($A = tA), (_ = a), (a = y), (y = _)),
                _ = a + y,
                tA = [];
              _--;
              tA.push(0)
            );
            for (cA = S, dA = z, _ = y; --_ >= 0; ) {
              for (
                x = 0, R = $A[_] % dA, J = ($A[_] / dA) | 0, g = a, N = _ + g;
                N > _;

              )
                (I = DA[--g] % dA),
                  (u = (DA[g] / dA) | 0),
                  (i = J * I + u * R),
                  (I = R * I + (i % dA) * dA + tA[N] + x),
                  (x = ((I / cA) | 0) + ((i / dA) | 0) + J * u),
                  (tA[N--] = I % cA);
              tA[N] = x;
            }
            return x ? ++b : tA.splice(0, 1), Ye(C, tA, b);
          }),
        (j.negated = function () {
          var C = new l(this);
          return (C.s = -C.s || null), C;
        }),
        (j.plus = function (C, d) {
          var x,
            b = this,
            _ = b.s;
          if (((C = new l(C, d)), (d = C.s), !_ || !d)) return new l(NaN);
          if (_ != d) return (C.s = -d), b.minus(C);
          var N = b.e / D,
            g = C.e / D,
            i = b.c,
            a = C.c;
          if (!N || !g) {
            if (!i || !a) return new l(_ / 0);
            if (!i[0] || !a[0]) return a[0] ? C : new l(i[0] ? b : _ * 0);
          }
          if (((N = EA(N)), (g = EA(g)), (i = i.slice()), (_ = N - g))) {
            for (
              _ > 0 ? ((g = N), (x = a)) : ((_ = -_), (x = i)), x.reverse();
              _--;
              x.push(0)
            );
            x.reverse();
          }
          for (
            _ = i.length,
              d = a.length,
              _ - d < 0 && ((x = a), (a = i), (i = x), (d = _)),
              _ = 0;
            d;

          )
            (_ = ((i[--d] = i[d] + a[d] + _) / S) | 0),
              (i[d] = S === i[d] ? 0 : i[d] % S);
          return _ && ((i = [_].concat(i)), ++g), Ye(C, i, g);
        }),
        (j.precision = j.sd =
          function (C, d) {
            var x,
              b,
              _,
              N = this;
            if (C != null && C !== !!C)
              return (
                uA(C, 1, T),
                d == null ? (d = kA) : uA(d, 0, 8),
                IA(new l(N), C, d)
              );
            if (!(x = N.c)) return null;
            if (((_ = x.length - 1), (b = _ * D + 1), (_ = x[_]))) {
              for (; _ % 10 == 0; _ /= 10, b--);
              for (_ = x[0]; _ >= 10; _ /= 10, b++);
            }
            return C && N.e + 1 > b && (b = N.e + 1), b;
          }),
        (j.shiftedBy = function (C) {
          return uA(C, -Y, Y), this.times("1e" + C);
        }),
        (j.squareRoot = j.sqrt =
          function () {
            var C,
              d,
              x,
              b,
              _,
              N = this,
              g = N.c,
              i = N.s,
              a = N.e,
              I = UA + 4,
              u = new l("0.5");
            if (i !== 1 || !g || !g[0])
              return new l(!i || (i < 0 && (!g || g[0])) ? NaN : g ? N : 1 / 0);
            if (
              ((i = Math.sqrt(+BA(N))),
              i == 0 || i == 1 / 0
                ? ((d = NA(g)),
                  (d.length + a) % 2 == 0 && (d += "0"),
                  (i = Math.sqrt(+d)),
                  (a = EA((a + 1) / 2) - (a < 0 || a % 2)),
                  i == 1 / 0
                    ? (d = "5e" + a)
                    : ((d = i.toExponential()),
                      (d = d.slice(0, d.indexOf("e") + 1) + a)),
                  (x = new l(d)))
                : (x = new l(i + "")),
              x.c[0])
            ) {
              for (a = x.e, i = a + I, i < 3 && (i = 0); ; )
                if (
                  ((_ = x),
                  (x = u.times(_.plus(gA(N, _, I, 1)))),
                  NA(_.c).slice(0, i) === (d = NA(x.c)).slice(0, i))
                )
                  if (
                    (x.e < a && --i,
                    (d = d.slice(i - 3, i + 1)),
                    d == "9999" || (!b && d == "4999"))
                  ) {
                    if (!b && (IA(_, _.e + UA + 2, 0), _.times(_).eq(N))) {
                      x = _;
                      break;
                    }
                    (I += 4), (i += 4), (b = 1);
                  } else {
                    (!+d || (!+d.slice(1) && d.charAt(0) == "5")) &&
                      (IA(x, x.e + UA + 2, 1), (C = !x.times(x).eq(N)));
                    break;
                  }
            }
            return IA(x, x.e + UA + 1, kA, C);
          }),
        (j.toExponential = function (C, d) {
          return C != null && (uA(C, 0, T), C++), QA(this, C, d, 1);
        }),
        (j.toFixed = function (C, d) {
          return (
            C != null && (uA(C, 0, T), (C = C + this.e + 1)), QA(this, C, d)
          );
        }),
        (j.toFormat = function (C, d, x) {
          var b,
            _ = this;
          if (x == null)
            C != null && d && typeof d == "object"
              ? ((x = d), (d = null))
              : C && typeof C == "object"
              ? ((x = C), (C = d = null))
              : (x = zA);
          else if (typeof x != "object")
            throw Error(f + "Argument not an object: " + x);
          if (((b = _.toFixed(C, d)), _.c)) {
            var N,
              g = b.split("."),
              i = +x.groupSize,
              a = +x.secondaryGroupSize,
              I = x.groupSeparator || "",
              u = g[0],
              y = g[1],
              R = _.s < 0,
              J = R ? u.slice(1) : u,
              tA = J.length;
            if (
              (a && ((N = i), (i = a), (a = N), (tA -= N)), i > 0 && tA > 0)
            ) {
              for (N = tA % i || i, u = J.substr(0, N); N < tA; N += i)
                u += I + J.substr(N, i);
              a > 0 && (u += I + J.slice(N)), R && (u = "-" + u);
            }
            b = y
              ? u +
                (x.decimalSeparator || "") +
                ((a = +x.fractionGroupSize)
                  ? y.replace(
                      new RegExp("\\d{" + a + "}\\B", "g"),
                      "$&" + (x.fractionGroupSeparator || "")
                    )
                  : y)
              : u;
          }
          return (x.prefix || "") + b + (x.suffix || "");
        }),
        (j.toFraction = function (C) {
          var d,
            x,
            b,
            _,
            N,
            g,
            i,
            a,
            I,
            u,
            y,
            R,
            J = this,
            tA = J.c;
          if (
            C != null &&
            ((i = new l(C)), (!i.isInteger() && (i.c || i.s !== 1)) || i.lt(JA))
          )
            throw Error(
              f +
                "Argument " +
                (i.isInteger() ? "out of range: " : "not an integer: ") +
                BA(i)
            );
          if (!tA) return new l(J);
          for (
            d = new l(JA),
              I = x = new l(JA),
              b = a = new l(JA),
              R = NA(tA),
              N = d.e = R.length - J.e - 1,
              d.c[0] = M[(g = N % D) < 0 ? D + g : g],
              C = !C || i.comparedTo(d) > 0 ? (N > 0 ? d : I) : i,
              g = Ee,
              Ee = 1 / 0,
              i = new l(R),
              a.c[0] = 0;
            (u = gA(i, d, 0, 1)),
              (_ = x.plus(u.times(b))),
              _.comparedTo(C) != 1;

          )
            (x = b),
              (b = _),
              (I = a.plus(u.times((_ = I)))),
              (a = _),
              (d = i.minus(u.times((_ = d)))),
              (i = _);
          return (
            (_ = gA(C.minus(x), b, 0, 1)),
            (a = a.plus(_.times(I))),
            (x = x.plus(_.times(b))),
            (a.s = I.s = J.s),
            (N = N * 2),
            (y =
              gA(I, b, N, kA)
                .minus(J)
                .abs()
                .comparedTo(gA(a, x, N, kA).minus(J).abs()) < 1
                ? [I, b]
                : [a, x]),
            (Ee = g),
            y
          );
        }),
        (j.toNumber = function () {
          return +BA(this);
        }),
        (j.toPrecision = function (C, d) {
          return C != null && uA(C, 1, T), QA(this, C, d, 2);
        }),
        (j.toString = function (C) {
          var d,
            x = this,
            b = x.s,
            _ = x.e;
          return (
            _ === null
              ? b
                ? ((d = "Infinity"), b < 0 && (d = "-" + d))
                : (d = "NaN")
              : (C == null
                  ? (d =
                      _ <= Ae || _ >= ZA ? WA(NA(x.c), _) : FA(NA(x.c), _, "0"))
                  : C === 10 && ce
                  ? ((x = IA(new l(x), UA + _ + 1, kA)),
                    (d = FA(NA(x.c), x.e, "0")))
                  : (uA(C, 2, PA.length, "Base"),
                    (d = mA(FA(NA(x.c), _, "0"), 10, C, b, !0))),
                b < 0 && x.c[0] && (d = "-" + d)),
            d
          );
        }),
        (j.valueOf = j.toJSON =
          function () {
            return BA(this);
          }),
        (j._isBigNumber = !0),
        rA != null && l.set(rA),
        l
      );
    }
    function EA(rA) {
      var gA = rA | 0;
      return rA > 0 || rA === gA ? gA : gA - 1;
    }
    function NA(rA) {
      for (var gA, mA, LA = 1, j = rA.length, JA = rA[0] + ""; LA < j; ) {
        for (gA = rA[LA++] + "", mA = D - gA.length; mA--; gA = "0" + gA);
        JA += gA;
      }
      for (j = JA.length; JA.charCodeAt(--j) === 48; );
      return JA.slice(0, j + 1 || 1);
    }
    function MA(rA, gA) {
      var mA,
        LA,
        j = rA.c,
        JA = gA.c,
        UA = rA.s,
        kA = gA.s,
        Ae = rA.e,
        ZA = gA.e;
      if (!UA || !kA) return null;
      if (((mA = j && !j[0]), (LA = JA && !JA[0]), mA || LA))
        return mA ? (LA ? 0 : -kA) : UA;
      if (UA != kA) return UA;
      if (((mA = UA < 0), (LA = Ae == ZA), !j || !JA))
        return LA ? 0 : !j ^ mA ? 1 : -1;
      if (!LA) return (Ae > ZA) ^ mA ? 1 : -1;
      for (
        kA = (Ae = j.length) < (ZA = JA.length) ? Ae : ZA, UA = 0;
        UA < kA;
        UA++
      )
        if (j[UA] != JA[UA]) return (j[UA] > JA[UA]) ^ mA ? 1 : -1;
      return Ae == ZA ? 0 : (Ae > ZA) ^ mA ? 1 : -1;
    }
    function uA(rA, gA, mA, LA) {
      if (rA < gA || rA > mA || rA !== c(rA))
        throw Error(
          f +
            (LA || "Argument") +
            (typeof rA == "number"
              ? rA < gA || rA > mA
                ? " out of range: "
                : " not an integer: "
              : " not a primitive number: ") +
            String(rA)
        );
    }
    function te(rA) {
      var gA = rA.c.length - 1;
      return EA(rA.e / D) == gA && rA.c[gA] % 2 != 0;
    }
    function WA(rA, gA) {
      return (
        (rA.length > 1 ? rA.charAt(0) + "." + rA.slice(1) : rA) +
        (gA < 0 ? "e" : "e+") +
        gA
      );
    }
    function FA(rA, gA, mA) {
      var LA, j;
      if (gA < 0) {
        for (j = mA + "."; ++gA; j += mA);
        rA = j + rA;
      } else if (((LA = rA.length), ++gA > LA)) {
        for (j = mA, gA -= LA; --gA; j += mA);
        rA += j;
      } else gA < LA && (rA = rA.slice(0, gA) + "." + rA.slice(gA));
      return rA;
    }
    (e = nA()),
      (e.default = e.BigNumber = e),
      t.exports
        ? (t.exports = e)
        : (A || (A = typeof self < "u" && self ? self : window),
          (A.BigNumber = e));
  })(wt);
})(Gn);
var gr = Gn.exports,
  os = function (A, e, r) {
    var s = new A.Uint8Array(r),
      c = e.pushInt,
      f = e.pushInt32,
      h = e.pushInt32Neg,
      S = e.pushInt64,
      D = e.pushInt64Neg,
      Y = e.pushFloat,
      M = e.pushFloatSingle,
      z = e.pushFloatDouble,
      T = e.pushTrue,
      nA = e.pushFalse,
      EA = e.pushUndefined,
      NA = e.pushNull,
      MA = e.pushInfinity,
      uA = e.pushInfinityNeg,
      te = e.pushNaN,
      WA = e.pushNaNNeg,
      FA = e.pushArrayStart,
      rA = e.pushArrayStartFixed,
      gA = e.pushArrayStartFixed32,
      mA = e.pushArrayStartFixed64,
      LA = e.pushObjectStart,
      j = e.pushObjectStartFixed,
      JA = e.pushObjectStartFixed32,
      UA = e.pushObjectStartFixed64,
      kA = e.pushByteString,
      Ae = e.pushByteStringStart,
      ZA = e.pushUtf8String,
      se = e.pushUtf8StringStart,
      Ee = e.pushSimpleUnassigned,
      KA = e.pushTagStart,
      le = e.pushTagStart4,
      xe = e.pushTagStart8,
      zA = e.pushTagUnassigned,
      PA = e.pushBreak,
      ce = A.Math.pow,
      l = 0,
      QA = 0,
      oe = 0;
    function Ye(w) {
      for (
        w = w | 0, l = 0, QA = w;
        (l | 0) < (QA | 0) &&
        ((oe = CA[s[l] & 255](s[l] | 0) | 0), !((oe | 0) > 0));

      );
      return oe | 0;
    }
    function IA(w) {
      return (w = w | 0), (((l | 0) + (w | 0)) | 0) < (QA | 0) ? 0 : 1;
    }
    function BA(w) {
      return (w = w | 0), (s[w | 0] << 8) | s[(w + 1) | 0] | 0;
    }
    function C(w) {
      return (
        (w = w | 0),
        (s[w | 0] << 24) |
          (s[(w + 1) | 0] << 16) |
          (s[(w + 2) | 0] << 8) |
          s[(w + 3) | 0] |
          0
      );
    }
    function d(w) {
      return (w = w | 0), c(w | 0), (l = (l + 1) | 0), 0;
    }
    function x(w) {
      return (
        (w = w | 0),
        IA(1) | 0 ? 1 : (c(s[(l + 1) | 0] | 0), (l = (l + 2) | 0), 0)
      );
    }
    function b(w) {
      return (
        (w = w | 0),
        IA(2) | 0 ? 1 : (c(BA((l + 1) | 0) | 0), (l = (l + 3) | 0), 0)
      );
    }
    function _(w) {
      return (
        (w = w | 0),
        IA(4) | 0
          ? 1
          : (f(BA((l + 1) | 0) | 0, BA((l + 3) | 0) | 0), (l = (l + 5) | 0), 0)
      );
    }
    function N(w) {
      return (
        (w = w | 0),
        IA(8) | 0
          ? 1
          : (S(
              BA((l + 1) | 0) | 0,
              BA((l + 3) | 0) | 0,
              BA((l + 5) | 0) | 0,
              BA((l + 7) | 0) | 0
            ),
            (l = (l + 9) | 0),
            0)
      );
    }
    function g(w) {
      return (w = w | 0), c((-1 - ((w - 32) | 0)) | 0), (l = (l + 1) | 0), 0;
    }
    function i(w) {
      return (
        (w = w | 0),
        IA(1) | 0
          ? 1
          : (c((-1 - (s[(l + 1) | 0] | 0)) | 0), (l = (l + 2) | 0), 0)
      );
    }
    function a(w) {
      w = w | 0;
      var W = 0;
      return IA(2) | 0
        ? 1
        : ((W = BA((l + 1) | 0) | 0),
          c((-1 - (W | 0)) | 0),
          (l = (l + 3) | 0),
          0);
    }
    function I(w) {
      return (
        (w = w | 0),
        IA(4) | 0
          ? 1
          : (h(BA((l + 1) | 0) | 0, BA((l + 3) | 0) | 0), (l = (l + 5) | 0), 0)
      );
    }
    function u(w) {
      return (
        (w = w | 0),
        IA(8) | 0
          ? 1
          : (D(
              BA((l + 1) | 0) | 0,
              BA((l + 3) | 0) | 0,
              BA((l + 5) | 0) | 0,
              BA((l + 7) | 0) | 0
            ),
            (l = (l + 9) | 0),
            0)
      );
    }
    function y(w) {
      w = w | 0;
      var W = 0,
        V = 0,
        q = 0;
      return (
        (q = (w - 64) | 0),
        IA(q | 0) | 0
          ? 1
          : ((W = (l + 1) | 0),
            (V = (((l + 1) | 0) + (q | 0)) | 0),
            kA(W | 0, V | 0),
            (l = V | 0),
            0)
      );
    }
    function R(w) {
      w = w | 0;
      var W = 0,
        V = 0,
        q = 0;
      return IA(1) | 0 ||
        ((q = s[(l + 1) | 0] | 0),
        (W = (l + 2) | 0),
        (V = (((l + 2) | 0) + (q | 0)) | 0),
        IA((q + 1) | 0) | 0)
        ? 1
        : (kA(W | 0, V | 0), (l = V | 0), 0);
    }
    function J(w) {
      w = w | 0;
      var W = 0,
        V = 0,
        q = 0;
      return IA(2) | 0 ||
        ((q = BA((l + 1) | 0) | 0),
        (W = (l + 3) | 0),
        (V = (((l + 3) | 0) + (q | 0)) | 0),
        IA((q + 2) | 0) | 0)
        ? 1
        : (kA(W | 0, V | 0), (l = V | 0), 0);
    }
    function tA(w) {
      w = w | 0;
      var W = 0,
        V = 0,
        q = 0;
      return IA(4) | 0 ||
        ((q = C((l + 1) | 0) | 0),
        (W = (l + 5) | 0),
        (V = (((l + 5) | 0) + (q | 0)) | 0),
        IA((q + 4) | 0) | 0)
        ? 1
        : (kA(W | 0, V | 0), (l = V | 0), 0);
    }
    function cA(w) {
      return (w = w | 0), 1;
    }
    function dA(w) {
      return (w = w | 0), Ae(), (l = (l + 1) | 0), 0;
    }
    function P(w) {
      w = w | 0;
      var W = 0,
        V = 0,
        q = 0;
      return (
        (q = (w - 96) | 0),
        IA(q | 0) | 0
          ? 1
          : ((W = (l + 1) | 0),
            (V = (((l + 1) | 0) + (q | 0)) | 0),
            ZA(W | 0, V | 0),
            (l = V | 0),
            0)
      );
    }
    function DA(w) {
      w = w | 0;
      var W = 0,
        V = 0,
        q = 0;
      return IA(1) | 0 ||
        ((q = s[(l + 1) | 0] | 0),
        (W = (l + 2) | 0),
        (V = (((l + 2) | 0) + (q | 0)) | 0),
        IA((q + 1) | 0) | 0)
        ? 1
        : (ZA(W | 0, V | 0), (l = V | 0), 0);
    }
    function $A(w) {
      w = w | 0;
      var W = 0,
        V = 0,
        q = 0;
      return IA(2) | 0 ||
        ((q = BA((l + 1) | 0) | 0),
        (W = (l + 3) | 0),
        (V = (((l + 3) | 0) + (q | 0)) | 0),
        IA((q + 2) | 0) | 0)
        ? 1
        : (ZA(W | 0, V | 0), (l = V | 0), 0);
    }
    function Ge(w) {
      w = w | 0;
      var W = 0,
        V = 0,
        q = 0;
      return IA(4) | 0 ||
        ((q = C((l + 1) | 0) | 0),
        (W = (l + 5) | 0),
        (V = (((l + 5) | 0) + (q | 0)) | 0),
        IA((q + 4) | 0) | 0)
        ? 1
        : (ZA(W | 0, V | 0), (l = V | 0), 0);
    }
    function Pe(w) {
      return (w = w | 0), 1;
    }
    function je(w) {
      return (w = w | 0), se(), (l = (l + 1) | 0), 0;
    }
    function xA(w) {
      return (w = w | 0), rA((w - 128) | 0), (l = (l + 1) | 0), 0;
    }
    function Ne(w) {
      return (
        (w = w | 0),
        IA(1) | 0 ? 1 : (rA(s[(l + 1) | 0] | 0), (l = (l + 2) | 0), 0)
      );
    }
    function ge(w) {
      return (
        (w = w | 0),
        IA(2) | 0 ? 1 : (rA(BA((l + 1) | 0) | 0), (l = (l + 3) | 0), 0)
      );
    }
    function ee(w) {
      return (
        (w = w | 0),
        IA(4) | 0
          ? 1
          : (gA(BA((l + 1) | 0) | 0, BA((l + 3) | 0) | 0), (l = (l + 5) | 0), 0)
      );
    }
    function qA(w) {
      return (
        (w = w | 0),
        IA(8) | 0
          ? 1
          : (mA(
              BA((l + 1) | 0) | 0,
              BA((l + 3) | 0) | 0,
              BA((l + 5) | 0) | 0,
              BA((l + 7) | 0) | 0
            ),
            (l = (l + 9) | 0),
            0)
      );
    }
    function ot(w) {
      return (w = w | 0), FA(), (l = (l + 1) | 0), 0;
    }
    function YA(w) {
      w = w | 0;
      var W = 0;
      return (
        (W = (w - 160) | 0),
        IA(W | 0) | 0 ? 1 : (j(W | 0), (l = (l + 1) | 0), 0)
      );
    }
    function Dt(w) {
      return (
        (w = w | 0),
        IA(1) | 0 ? 1 : (j(s[(l + 1) | 0] | 0), (l = (l + 2) | 0), 0)
      );
    }
    function Gt(w) {
      return (
        (w = w | 0),
        IA(2) | 0 ? 1 : (j(BA((l + 1) | 0) | 0), (l = (l + 3) | 0), 0)
      );
    }
    function fr(w) {
      return (
        (w = w | 0),
        IA(4) | 0
          ? 1
          : (JA(BA((l + 1) | 0) | 0, BA((l + 3) | 0) | 0), (l = (l + 5) | 0), 0)
      );
    }
    function ur(w) {
      return (
        (w = w | 0),
        IA(8) | 0
          ? 1
          : (UA(
              BA((l + 1) | 0) | 0,
              BA((l + 3) | 0) | 0,
              BA((l + 5) | 0) | 0,
              BA((l + 7) | 0) | 0
            ),
            (l = (l + 9) | 0),
            0)
      );
    }
    function Te(w) {
      return (w = w | 0), LA(), (l = (l + 1) | 0), 0;
    }
    function me(w) {
      return (w = w | 0), KA((w - 192) | 0 | 0), (l = (l + 1) | 0), 0;
    }
    function gt(w) {
      return (w = w | 0), KA(w | 0), (l = (l + 1) | 0), 0;
    }
    function Tt(w) {
      return (w = w | 0), KA(w | 0), (l = (l + 1) | 0), 0;
    }
    function Mt(w) {
      return (w = w | 0), KA(w | 0), (l = (l + 1) | 0), 0;
    }
    function hr(w) {
      return (w = w | 0), KA(w | 0), (l = (l + 1) | 0), 0;
    }
    function fe(w) {
      return (w = w | 0), KA((w - 192) | 0 | 0), (l = (l + 1) | 0), 0;
    }
    function De(w) {
      return (w = w | 0), KA(w | 0), (l = (l + 1) | 0), 0;
    }
    function Qr(w) {
      return (w = w | 0), KA(w | 0), (l = (l + 1) | 0), 0;
    }
    function o(w) {
      return (w = w | 0), KA(w | 0), (l = (l + 1) | 0), 0;
    }
    function E(w) {
      return (
        (w = w | 0),
        IA(1) | 0 ? 1 : (KA(s[(l + 1) | 0] | 0), (l = (l + 2) | 0), 0)
      );
    }
    function B(w) {
      return (
        (w = w | 0),
        IA(2) | 0 ? 1 : (KA(BA((l + 1) | 0) | 0), (l = (l + 3) | 0), 0)
      );
    }
    function n(w) {
      return (
        (w = w | 0),
        IA(4) | 0
          ? 1
          : (le(BA((l + 1) | 0) | 0, BA((l + 3) | 0) | 0), (l = (l + 5) | 0), 0)
      );
    }
    function Q(w) {
      return (
        (w = w | 0),
        IA(8) | 0
          ? 1
          : (xe(
              BA((l + 1) | 0) | 0,
              BA((l + 3) | 0) | 0,
              BA((l + 5) | 0) | 0,
              BA((l + 7) | 0) | 0
            ),
            (l = (l + 9) | 0),
            0)
      );
    }
    function m(w) {
      return (w = w | 0), Ee(((w | 0) - 224) | 0), (l = (l + 1) | 0), 0;
    }
    function F(w) {
      return (w = w | 0), nA(), (l = (l + 1) | 0), 0;
    }
    function U(w) {
      return (w = w | 0), T(), (l = (l + 1) | 0), 0;
    }
    function K(w) {
      return (w = w | 0), NA(), (l = (l + 1) | 0), 0;
    }
    function aA(w) {
      return (w = w | 0), EA(), (l = (l + 1) | 0), 0;
    }
    function X(w) {
      return (
        (w = w | 0),
        IA(1) | 0 ? 1 : (Ee(s[(l + 1) | 0] | 0), (l = (l + 2) | 0), 0)
      );
    }
    function bA(w) {
      w = w | 0;
      var W = 0,
        V = 0,
        q = 1,
        sA = 0,
        Z = 0,
        iA = 0;
      return IA(2) | 0
        ? 1
        : ((W = s[(l + 1) | 0] | 0),
          (V = s[(l + 2) | 0] | 0),
          (W | 0) & 128 && (q = -1),
          (sA = +(((W | 0) & 124) >> 2)),
          (Z = +((((W | 0) & 3) << 8) | V)),
          +sA == 0
            ? Y(+(+q * 5960464477539063e-23 * +Z))
            : +sA == 31
            ? +q == 1
              ? +Z > 0
                ? te()
                : MA()
              : +Z > 0
              ? WA()
              : uA()
            : Y(+(+q * ce(2, +(+sA - 25)) * +(1024 + Z))),
          (l = (l + 3) | 0),
          0);
    }
    function eA(w) {
      return (
        (w = w | 0),
        IA(4) | 0
          ? 1
          : (M(
              s[(l + 1) | 0] | 0,
              s[(l + 2) | 0] | 0,
              s[(l + 3) | 0] | 0,
              s[(l + 4) | 0] | 0
            ),
            (l = (l + 5) | 0),
            0)
      );
    }
    function hA(w) {
      return (
        (w = w | 0),
        IA(8) | 0
          ? 1
          : (z(
              s[(l + 1) | 0] | 0,
              s[(l + 2) | 0] | 0,
              s[(l + 3) | 0] | 0,
              s[(l + 4) | 0] | 0,
              s[(l + 5) | 0] | 0,
              s[(l + 6) | 0] | 0,
              s[(l + 7) | 0] | 0,
              s[(l + 8) | 0] | 0
            ),
            (l = (l + 9) | 0),
            0)
      );
    }
    function $(w) {
      return (w = w | 0), 1;
    }
    function lA(w) {
      return (w = w | 0), PA(), (l = (l + 1) | 0), 0;
    }
    var CA = [
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
      x,
      b,
      _,
      N,
      $,
      $,
      $,
      $,
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
      i,
      a,
      I,
      u,
      $,
      $,
      $,
      $,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      y,
      R,
      J,
      tA,
      cA,
      $,
      $,
      $,
      dA,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      P,
      DA,
      $A,
      Ge,
      Pe,
      $,
      $,
      $,
      je,
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
      Ne,
      ge,
      ee,
      qA,
      $,
      $,
      $,
      ot,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      YA,
      Dt,
      Gt,
      fr,
      ur,
      $,
      $,
      $,
      Te,
      me,
      me,
      me,
      me,
      me,
      me,
      fe,
      fe,
      fe,
      fe,
      fe,
      fe,
      fe,
      fe,
      fe,
      fe,
      fe,
      fe,
      fe,
      fe,
      fe,
      fe,
      fe,
      fe,
      E,
      B,
      n,
      Q,
      $,
      $,
      $,
      $,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      F,
      U,
      K,
      aA,
      X,
      bA,
      eA,
      hA,
      $,
      $,
      $,
      lA,
    ];
    return { parse: Ye };
  },
  Ir = {},
  ye = {};
const ni = gr.BigNumber;
ye.MT = {
  POS_INT: 0,
  NEG_INT: 1,
  BYTE_STRING: 2,
  UTF8_STRING: 3,
  ARRAY: 4,
  MAP: 5,
  TAG: 6,
  SIMPLE_FLOAT: 7,
};
ye.TAG = {
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
ye.NUMBYTES = {
  ZERO: 0,
  ONE: 24,
  TWO: 25,
  FOUR: 26,
  EIGHT: 27,
  INDEFINITE: 31,
};
ye.SIMPLE = { FALSE: 20, TRUE: 21, NULL: 22, UNDEFINED: 23 };
ye.SYMS = {
  NULL: Symbol("null"),
  UNDEFINED: Symbol("undef"),
  PARENT: Symbol("parent"),
  BREAK: Symbol("break"),
  STREAM: Symbol("stream"),
};
ye.SHIFT32 = Math.pow(2, 32);
ye.SHIFT16 = Math.pow(2, 16);
ye.MAX_SAFE_HIGH = 2097151;
ye.NEG_ONE = new ni(-1);
ye.TEN = new ni(10);
ye.TWO = new ni(2);
ye.PARENT = {
  ARRAY: 0,
  OBJECT: 1,
  MAP: 2,
  TAG: 3,
  BYTE_STRING: 4,
  UTF8_STRING: 5,
};
(function (t) {
  const { Buffer: A } = xt,
    e = gr.BigNumber,
    r = ye,
    s = r.SHIFT32,
    c = r.SHIFT16,
    f = 2097151;
  t.parseHalf = function (D) {
    var Y, M, z;
    return (
      (z = D[0] & 128 ? -1 : 1),
      (Y = (D[0] & 124) >> 2),
      (M = ((D[0] & 3) << 8) | D[1]),
      Y
        ? Y === 31
          ? z * (M ? 0 / 0 : 1 / 0)
          : z * Math.pow(2, Y - 25) * (1024 + M)
        : z * 5960464477539063e-23 * M
    );
  };
  function h(S) {
    return S < 16 ? "0" + S.toString(16) : S.toString(16);
  }
  (t.arrayBufferToBignumber = function (S) {
    const D = S.byteLength;
    let Y = "";
    for (let M = 0; M < D; M++) Y += h(S[M]);
    return new e(Y, 16);
  }),
    (t.buildMap = (S) => {
      const D = new Map(),
        Y = Object.keys(S),
        M = Y.length;
      for (let z = 0; z < M; z++) D.set(Y[z], S[Y[z]]);
      return D;
    }),
    (t.buildInt32 = (S, D) => S * c + D),
    (t.buildInt64 = (S, D, Y, M) => {
      const z = t.buildInt32(S, D),
        T = t.buildInt32(Y, M);
      return z > f ? new e(z).times(s).plus(T) : z * s + T;
    }),
    (t.writeHalf = function (D, Y) {
      const M = A.allocUnsafe(4);
      M.writeFloatBE(Y, 0);
      const z = M.readUInt32BE(0);
      if (z & 8191) return !1;
      var T = (z >> 16) & 32768;
      const nA = (z >> 23) & 255,
        EA = z & 8388607;
      if (nA >= 113 && nA <= 142) T += ((nA - 112) << 10) + (EA >> 13);
      else if (nA >= 103 && nA < 113) {
        if (EA & ((1 << (126 - nA)) - 1)) return !1;
        T += (EA + 8388608) >> (126 - nA);
      } else return !1;
      return D.writeUInt16BE(T, 0), !0;
    }),
    (t.keySorter = function (S, D) {
      var Y = S[0].byteLength,
        M = D[0].byteLength;
      return Y > M ? 1 : M > Y ? -1 : S[0].compare(D[0]);
    }),
    (t.isNegativeZero = (S) => S === 0 && 1 / S < 0),
    (t.nextPowerOf2 = (S) => {
      let D = 0;
      if (S && !(S & (S - 1))) return S;
      for (; S !== 0; ) (S >>= 1), (D += 1);
      return 1 << D;
    });
})(Ir);
const ai = ye,
  gs = ai.MT,
  kt = ai.SIMPLE,
  dr = ai.SYMS;
let Is = class Yr {
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
    return A._pushInt(this.value, gs.SIMPLE_FLOAT);
  }
  static isSimple(A) {
    return A instanceof Yr;
  }
  static decode(A, e) {
    switch ((e == null && (e = !0), A)) {
      case kt.FALSE:
        return !1;
      case kt.TRUE:
        return !0;
      case kt.NULL:
        return e ? null : dr.NULL;
      case kt.UNDEFINED:
        return e ? void 0 : dr.UNDEFINED;
      case -1:
        if (!e) throw new Error("Invalid BREAK");
        return dr.BREAK;
      default:
        return new Yr(A);
    }
  }
};
var Tn = Is;
let Bs = class qr {
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
        ((r = qr["_tag" + this.tag]), typeof r != "function"))
    )
      return this;
    try {
      return r.call(qr, this.value);
    } catch (s) {
      return (e = s), (this.err = e), this;
    }
  }
};
var Mn = Bs;
const Un = self.location
    ? self.location.protocol + "//" + self.location.host
    : "",
  Or = self.URL;
let Es = class {
  constructor(A = "", e = Un) {
    (this.super = new Or(A, e)),
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
function cs(t) {
  if (typeof t == "string") return new Or(t).toString();
  if (!(t instanceof Or)) {
    const A = t.username && t.password ? `${t.username}:${t.password}@` : "",
      e = t.auth ? t.auth + "@" : "",
      r = t.port ? ":" + t.port : "",
      s = t.protocol ? t.protocol + "//" : "",
      c = t.host || "",
      f = t.hostname || "",
      h = t.search || (t.query ? "?" + t.query : ""),
      S = t.hash || "",
      D = t.pathname || "",
      Y = t.path || D + h;
    return `${s}${A || e}${c || f + r}${Y}${S}`;
  }
}
var kn = {
  URLWithLegacySupport: Es,
  URLSearchParams: self.URLSearchParams,
  defaultBase: Un,
  format: cs,
};
const { URLWithLegacySupport: li, format: fs } = kn;
var us = (t, A = {}, e = {}, r) => {
  let s = A.protocol ? A.protocol.replace(":", "") : "http";
  s = (e[s] || r || s) + ":";
  let c;
  try {
    c = new li(t);
  } catch {
    c = {};
  }
  const f = Object.assign({}, A, {
    protocol: s || c.protocol,
    host: A.host || c.host,
  });
  return new li(t, fs(f)).toString();
};
const {
    URLWithLegacySupport: hs,
    format: Qs,
    URLSearchParams: Cs,
    defaultBase: ls,
  } = kn,
  ds = us;
var Ln = {
  URL: hs,
  URLSearchParams: Cs,
  format: Qs,
  relative: ds,
  defaultBase: ls,
};
const { Buffer: ht } = xt,
  di = ir,
  ws = gr.BigNumber,
  ps = os,
  Se = Ir,
  jA = ye,
  ys = Tn,
  xs = Mn,
  { URL: Ss } = Ln;
let Hr = class Jr {
  constructor(A) {
    (A = A || {}),
      !A.size || A.size < 65536
        ? (A.size = 65536)
        : (A.size = Se.nextPowerOf2(A.size)),
      (this._heap = new ArrayBuffer(A.size)),
      (this._heap8 = new Uint8Array(this._heap)),
      (this._buffer = ht.from(this._heap)),
      this._reset(),
      (this._knownTags = Object.assign(
        {
          0: (e) => new Date(e),
          1: (e) => new Date(e * 1e3),
          2: (e) => Se.arrayBufferToBignumber(e),
          3: (e) => jA.NEG_ONE.minus(Se.arrayBufferToBignumber(e)),
          4: (e) => jA.TEN.pow(e[0]).times(e[1]),
          5: (e) => jA.TWO.pow(e[0]).times(e[1]),
          32: (e) => new Ss(e),
          35: (e) => new RegExp(e),
        },
        A.tags
      )),
      (this.parser = ps(
        wt,
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
      case jA.PARENT.TAG:
        this._push(this.createTag(A.ref[0], A.ref[1]));
        break;
      case jA.PARENT.BYTE_STRING:
        this._push(this.createByteString(A.ref, A.length));
        break;
      case jA.PARENT.UTF8_STRING:
        this._push(this.createUtf8String(A.ref, A.length));
        break;
      case jA.PARENT.MAP:
        if (A.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createMap(A.ref, A.length));
        break;
      case jA.PARENT.OBJECT:
        if (A.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createObject(A.ref, A.length));
        break;
      case jA.PARENT.ARRAY:
        this._push(this.createArray(A.ref, A.length));
        break;
    }
    this._currentParent &&
      this._currentParent.type === jA.PARENT.TAG &&
      this._dec();
  }
  _dec() {
    const A = this._currentParent;
    A.length < 0 || (A.length--, A.length === 0 && this._closeParent());
  }
  _push(A, e) {
    const r = this._currentParent;
    switch ((r.values++, r.type)) {
      case jA.PARENT.ARRAY:
      case jA.PARENT.BYTE_STRING:
      case jA.PARENT.UTF8_STRING:
        r.length > -1
          ? (this._ref[this._ref.length - r.length] = A)
          : this._ref.push(A),
          this._dec();
        break;
      case jA.PARENT.OBJECT:
        r.tmpKey != null
          ? ((this._ref[r.tmpKey] = A), (r.tmpKey = null), this._dec())
          : ((r.tmpKey = A),
            typeof r.tmpKey != "string" &&
              ((r.type = jA.PARENT.MAP), (r.ref = Se.buildMap(r.ref))));
        break;
      case jA.PARENT.MAP:
        r.tmpKey != null
          ? (this._ref.set(r.tmpKey, A), (r.tmpKey = null), this._dec())
          : (r.tmpKey = A);
        break;
      case jA.PARENT.TAG:
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
          type: jA.PARENT.ARRAY,
          length: -1,
          ref: this._res,
          values: 0,
          tmpKey: null,
        },
      ]);
  }
  createTag(A, e) {
    const r = this._knownTags[A];
    return r ? r(e) : new xs(A, e);
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
    return ht.concat(A);
  }
  createByteStringFromHeap(A, e) {
    return A === e ? ht.alloc(0) : ht.from(this._heap.slice(A, e));
  }
  createInt(A) {
    return A;
  }
  createInt32(A, e) {
    return Se.buildInt32(A, e);
  }
  createInt64(A, e, r, s) {
    return Se.buildInt64(A, e, r, s);
  }
  createFloat(A) {
    return A;
  }
  createFloatSingle(A, e, r, s) {
    return di.read([A, e, r, s], 0, !1, 23, 4);
  }
  createFloatDouble(A, e, r, s, c, f, h, S) {
    return di.read([A, e, r, s, c, f, h, S], 0, !1, 52, 8);
  }
  createInt32Neg(A, e) {
    return -1 - Se.buildInt32(A, e);
  }
  createInt64Neg(A, e, r, s) {
    const c = Se.buildInt32(A, e),
      f = Se.buildInt32(r, s);
    return c > jA.MAX_SAFE_HIGH
      ? jA.NEG_ONE.minus(new ws(c).times(jA.SHIFT32).plus(f))
      : -1 - (c * jA.SHIFT32 + f);
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
    return new ys(A);
  }
  pushInt(A) {
    this._push(this.createInt(A));
  }
  pushInt32(A, e) {
    this._push(this.createInt32(A, e));
  }
  pushInt64(A, e, r, s) {
    this._push(this.createInt64(A, e, r, s));
  }
  pushFloat(A) {
    this._push(this.createFloat(A));
  }
  pushFloatSingle(A, e, r, s) {
    this._push(this.createFloatSingle(A, e, r, s));
  }
  pushFloatDouble(A, e, r, s, c, f, h, S) {
    this._push(this.createFloatDouble(A, e, r, s, c, f, h, S));
  }
  pushInt32Neg(A, e) {
    this._push(this.createInt32Neg(A, e));
  }
  pushInt64Neg(A, e, r, s) {
    this._push(this.createInt64Neg(A, e, r, s));
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
    this._createParent([], jA.PARENT.ARRAY, -1);
  }
  pushArrayStartFixed(A) {
    this._createArrayStartFixed(A);
  }
  pushArrayStartFixed32(A, e) {
    const r = Se.buildInt32(A, e);
    this._createArrayStartFixed(r);
  }
  pushArrayStartFixed64(A, e, r, s) {
    const c = Se.buildInt64(A, e, r, s);
    this._createArrayStartFixed(c);
  }
  pushObjectStart() {
    this._createObjectStartFixed(-1);
  }
  pushObjectStartFixed(A) {
    this._createObjectStartFixed(A);
  }
  pushObjectStartFixed32(A, e) {
    const r = Se.buildInt32(A, e);
    this._createObjectStartFixed(r);
  }
  pushObjectStartFixed64(A, e, r, s) {
    const c = Se.buildInt64(A, e, r, s);
    this._createObjectStartFixed(c);
  }
  pushByteStringStart() {
    this._parents[this._depth] = {
      type: jA.PARENT.BYTE_STRING,
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
      type: jA.PARENT.UTF8_STRING,
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
    this._parents[this._depth] = { type: jA.PARENT.TAG, length: 1, ref: [A] };
  }
  pushTagStart4(A, e) {
    this.pushTagStart(Se.buildInt32(A, e));
  }
  pushTagStart8(A, e, r, s) {
    this.pushTagStart(Se.buildInt64(A, e, r, s));
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
    this._createParent({}, jA.PARENT.OBJECT, A);
  }
  _createArrayStartFixed(A) {
    if (A === 0) {
      this._push(this.createArray([]));
      return;
    }
    this._createParent(new Array(A), jA.PARENT.ARRAY, A);
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
      typeof A == "string" && (A = ht.from(A, e || "hex")),
      new Jr({ size: A.length }).decodeFirst(A)
    );
  }
  static decodeAll(A, e) {
    return (
      typeof A == "string" && (A = ht.from(A, e || "hex")),
      new Jr({ size: A.length }).decodeAll(A)
    );
  }
};
Hr.decodeFirst = Hr.decode;
var Yn = Hr;
const { Buffer: wr } = xt,
  ms = Yn,
  Ds = Ir;
class si extends ms {
  createTag(A, e) {
    return `${A}(${e})`;
  }
  createInt(A) {
    return super.createInt(A).toString();
  }
  createInt32(A, e) {
    return super.createInt32(A, e).toString();
  }
  createInt64(A, e, r, s) {
    return super.createInt64(A, e, r, s).toString();
  }
  createInt32Neg(A, e) {
    return super.createInt32Neg(A, e).toString();
  }
  createInt64Neg(A, e, r, s) {
    return super.createInt64Neg(A, e, r, s).toString();
  }
  createTrue() {
    return "true";
  }
  createFalse() {
    return "false";
  }
  createFloat(A) {
    const e = super.createFloat(A);
    return Ds.isNegativeZero(A) ? "-0_1" : `${e}_1`;
  }
  createFloatSingle(A, e, r, s) {
    return `${super.createFloatSingle(A, e, r, s)}_2`;
  }
  createFloatDouble(A, e, r, s, c, f, h, S) {
    return `${super.createFloatDouble(A, e, r, s, c, f, h, S)}_3`;
  }
  createByteString(A, e) {
    const r = A.join(", ");
    return e === -1 ? `(_ ${r})` : `h'${r}`;
  }
  createByteStringFromHeap(A, e) {
    return `h'${wr
      .from(super.createByteStringFromHeap(A, e))
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
  createArray(A, e) {
    const r = super.createArray(A, e);
    return e === -1 ? `[_ ${r.join(", ")}]` : `[${r.join(", ")}]`;
  }
  createMap(A, e) {
    const r = super.createMap(A),
      s = Array.from(r.keys()).reduce(wi(r), "");
    return e === -1 ? `{_ ${s}}` : `{${s}}`;
  }
  createObject(A, e) {
    const r = super.createObject(A),
      s = Object.keys(r).reduce(wi(r), "");
    return e === -1 ? `{_ ${s}}` : `{${s}}`;
  }
  createUtf8String(A, e) {
    const r = A.join(", ");
    return e === -1 ? `(_ ${r})` : `"${r}"`;
  }
  createUtf8StringFromHeap(A, e) {
    return `"${wr
      .from(super.createUtf8StringFromHeap(A, e))
      .toString("utf8")}"`;
  }
  static diagnose(A, e) {
    return (
      typeof A == "string" && (A = wr.from(A, e || "hex")),
      new si().decodeFirst(A)
    );
  }
}
var _s = si;
function wi(t) {
  return (A, e) => (A ? `${A}, ${e}: ${t[e]}` : `${e}: ${t[e]}`);
}
const { Buffer: He } = xt,
  { URL: Ns } = Ln,
  Kr = gr.BigNumber,
  pr = Ir,
  Qe = ye,
  Me = Qe.MT,
  Lt = Qe.NUMBYTES,
  pi = Qe.SHIFT32,
  yi = Qe.SYMS,
  Qt = Qe.TAG,
  bs = (Qe.MT.SIMPLE_FLOAT << 5) | Qe.NUMBYTES.TWO,
  Fs = (Qe.MT.SIMPLE_FLOAT << 5) | Qe.NUMBYTES.FOUR,
  Rs = (Qe.MT.SIMPLE_FLOAT << 5) | Qe.NUMBYTES.EIGHT,
  vs = (Qe.MT.SIMPLE_FLOAT << 5) | Qe.SIMPLE.TRUE,
  Gs = (Qe.MT.SIMPLE_FLOAT << 5) | Qe.SIMPLE.FALSE,
  Ts = (Qe.MT.SIMPLE_FLOAT << 5) | Qe.SIMPLE.UNDEFINED,
  xi = (Qe.MT.SIMPLE_FLOAT << 5) | Qe.SIMPLE.NULL,
  Ms = new Kr("0x20000000000000"),
  Us = He.from("f97e00", "hex"),
  ks = He.from("f9fc00", "hex"),
  Ls = He.from("f97c00", "hex");
function Ys(t) {
  return {}.toString.call(t).slice(8, -1);
}
class Xt {
  constructor(A) {
    (A = A || {}),
      (this.streaming = typeof A.stream == "function"),
      (this.onData = A.stream),
      (this.semanticTypes = [
        [Ns, this._pushUrl],
        [Kr, this._pushBigNumber],
      ]);
    const e = A.genTypes || [],
      r = e.length;
    for (let s = 0; s < r; s++) this.addSemanticType(e[s][0], e[s][1]);
    this._reset();
  }
  addSemanticType(A, e) {
    const r = this.semanticTypes.length;
    for (let s = 0; s < r; s++)
      if (this.semanticTypes[s][0] === A) {
        const f = this.semanticTypes[s][1];
        return (this.semanticTypes[s][1] = e), f;
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
    return this.push(Us);
  }
  _pushInfinity(A) {
    const e = A < 0 ? ks : Ls;
    return this.push(e);
  }
  _pushFloat(A) {
    const e = He.allocUnsafe(2);
    if (pr.writeHalf(e, A) && pr.parseHalf(e) === A)
      return this._pushUInt8(bs) && this.push(e);
    const r = He.allocUnsafe(4);
    return (
      r.writeFloatBE(A, 0),
      r.readFloatBE(0) === A
        ? this._pushUInt8(Fs) && this.push(r)
        : this._pushUInt8(Rs) && this._pushDoubleBE(A)
    );
  }
  _pushInt(A, e, r) {
    const s = e << 5;
    return A < 24
      ? this._pushUInt8(s | A)
      : A <= 255
      ? this._pushUInt8(s | Lt.ONE) && this._pushUInt8(A)
      : A <= 65535
      ? this._pushUInt8(s | Lt.TWO) && this._pushUInt16BE(A)
      : A <= 4294967295
      ? this._pushUInt8(s | Lt.FOUR) && this._pushUInt32BE(A)
      : A <= Number.MAX_SAFE_INTEGER
      ? this._pushUInt8(s | Lt.EIGHT) &&
        this._pushUInt32BE(Math.floor(A / pi)) &&
        this._pushUInt32BE(A % pi)
      : e === Me.NEG_INT
      ? this._pushFloat(r)
      : this._pushFloat(A);
  }
  _pushIntNum(A) {
    return A < 0
      ? this._pushInt(-A - 1, Me.NEG_INT, A)
      : this._pushInt(A, Me.POS_INT);
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
    const e = He.byteLength(A, "utf8");
    return this._pushInt(e, Me.UTF8_STRING) && this.pushWrite(A, 5, e);
  }
  _pushBoolean(A) {
    return this._pushUInt8(A ? vs : Gs);
  }
  _pushUndefined(A) {
    return this._pushUInt8(Ts);
  }
  _pushArray(A, e) {
    const r = e.length;
    if (!A._pushInt(r, Me.ARRAY)) return !1;
    for (let s = 0; s < r; s++) if (!A.pushAny(e[s])) return !1;
    return !0;
  }
  _pushTag(A) {
    return this._pushInt(A, Me.TAG);
  }
  _pushDate(A, e) {
    return A._pushTag(Qt.DATE_EPOCH) && A.pushAny(Math.round(e / 1e3));
  }
  _pushBuffer(A, e) {
    return A._pushInt(e.length, Me.BYTE_STRING) && A.push(e);
  }
  _pushNoFilter(A, e) {
    return A._pushBuffer(A, e.slice());
  }
  _pushRegexp(A, e) {
    return A._pushTag(Qt.REGEXP) && A.pushAny(e.source);
  }
  _pushSet(A, e) {
    if (!A._pushInt(e.size, Me.ARRAY)) return !1;
    for (const r of e) if (!A.pushAny(r)) return !1;
    return !0;
  }
  _pushUrl(A, e) {
    return A._pushTag(Qt.URI) && A.pushAny(e.format());
  }
  _pushBigint(A) {
    let e = Qt.POS_BIGINT;
    A.isNegative() && ((A = A.negated().minus(1)), (e = Qt.NEG_BIGINT));
    let r = A.toString(16);
    r.length % 2 && (r = "0" + r);
    const s = He.from(r, "hex");
    return this._pushTag(e) && this._pushBuffer(this, s);
  }
  _pushBigNumber(A, e) {
    if (e.isNaN()) return A._pushNaN();
    if (!e.isFinite()) return A._pushInfinity(e.isNegative() ? -1 / 0 : 1 / 0);
    if (e.isInteger()) return A._pushBigint(e);
    if (!(A._pushTag(Qt.DECIMAL_FRAC) && A._pushInt(2, Me.ARRAY))) return !1;
    const r = e.decimalPlaces(),
      s = e.multipliedBy(new Kr(10).pow(r));
    return A._pushIntNum(-r)
      ? s.abs().isLessThan(Ms)
        ? A._pushIntNum(s.toNumber())
        : A._pushBigint(s)
      : !1;
  }
  _pushMap(A, e) {
    return A._pushInt(e.size, Me.MAP)
      ? this._pushRawMap(e.size, Array.from(e))
      : !1;
  }
  _pushObject(A) {
    if (!A) return this._pushUInt8(xi);
    for (var e = this.semanticTypes.length, r = 0; r < e; r++)
      if (A instanceof this.semanticTypes[r][0])
        return this.semanticTypes[r][1].call(A, this, A);
    var s = A.encodeCBOR;
    if (typeof s == "function") return s.call(A, this);
    var c = Object.keys(A),
      f = c.length;
    return this._pushInt(f, Me.MAP)
      ? this._pushRawMap(
          f,
          c.map((h) => [h, A[h]])
        )
      : !1;
  }
  _pushRawMap(A, e) {
    e = e
      .map(function (s) {
        return (s[0] = Xt.encode(s[0])), s;
      })
      .sort(pr.keySorter);
    for (var r = 0; r < A; r++)
      if (!this.push(e[r][0]) || !this.pushAny(e[r][1])) return !1;
    return !0;
  }
  write(A) {
    return this.pushAny(A);
  }
  pushAny(A) {
    var e = Ys(A);
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
        return this._pushBuffer(this, He.isBuffer(A) ? A : He.from(A));
      case "Null":
        return this._pushUInt8(xi);
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
          case yi.NULL:
            return this._pushObject(null);
          case yi.UNDEFINED:
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
        s = this.offset,
        c = 0,
        f = 0;
      f < s;
      f++
    )
      c += e[f];
    var h = He.allocUnsafe(c),
      S = 0,
      D = 0;
    for (f = 0; f < s; f++) {
      switch (((D = e[f]), r[f])) {
        case 0:
          A[f].copy(h, S);
          break;
        case 1:
          h.writeUInt8(A[f], S, !0);
          break;
        case 2:
          h.writeUInt16BE(A[f], S, !0);
          break;
        case 3:
          h.writeUInt32BE(A[f], S, !0);
          break;
        case 4:
          h.writeDoubleBE(A[f], S, !0);
          break;
        case 5:
          h.write(A[f], S, D, "utf8");
          break;
        default:
          throw new Error("unkown method");
      }
      S += D;
    }
    var Y = h;
    return this._reset(), Y;
  }
  _reset() {
    (this.result = []),
      (this.resultMethod = []),
      (this.resultLength = []),
      (this.offset = 0);
  }
  static encode(A) {
    const e = new Xt();
    if (!e.pushAny(A)) throw new Error("Failed to encode input");
    return e.finalize();
  }
}
var qs = Xt;
(function (t) {
  (t.Diagnose = _s),
    (t.Decoder = Yn),
    (t.Encoder = qs),
    (t.Simple = Tn),
    (t.Tagged = Mn),
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
})(vn);
const qn = pa(vn);
function Ke(...t) {
  const A = new Uint8Array(t.reduce((r, s) => r + s.byteLength, 0));
  let e = 0;
  for (const r of t) A.set(new Uint8Array(r), e), (e += r.byteLength);
  return A.buffer;
}
function It(t) {
  return [...new Uint8Array(t)]
    .map((A) => A.toString(16).padStart(2, "0"))
    .join("");
}
const Os = new RegExp(/^([0-9A-F]{2})*$/i);
function $t(t) {
  if (!Os.test(t)) throw new Error("Invalid hexadecimal string.");
  const A = [...t]
    .reduce((e, r, s) => ((e[(s / 2) | 0] = (e[(s / 2) | 0] || "") + r), e), [])
    .map((e) => Number.parseInt(e, 16));
  return new Uint8Array(A).buffer;
}
function Hs(t, A) {
  if (t.byteLength !== A.byteLength) return t.byteLength - A.byteLength;
  const e = new Uint8Array(t),
    r = new Uint8Array(A);
  for (let s = 0; s < e.length; s++) if (e[s] !== r[s]) return e[s] - r[s];
  return 0;
}
function Js(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength).buffer;
}
function ke(t) {
  return Js(Wa.create().update(new Uint8Array(t)).digest());
}
function Wt(t) {
  if (t instanceof qn.Tagged) return Wt(t.value);
  if (typeof t == "string") return On(t);
  if (typeof t == "number") return ke(ae(t));
  if (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) return ke(t);
  if (Array.isArray(t)) {
    const A = t.map(Wt);
    return ke(Ke(...A));
  } else {
    if (t && typeof t == "object" && t._isPrincipal)
      return ke(t.toUint8Array());
    if (typeof t == "object" && t !== null && typeof t.toHash == "function")
      return Wt(t.toHash());
    if (typeof t == "bigint") return ke(ae(t));
  }
  throw Object.assign(
    new Error(`Attempt to hash a value of unsupported type: ${t}`),
    { value: t }
  );
}
const On = (t) => {
  const A = new TextEncoder().encode(t);
  return ke(A);
};
function Br(t) {
  const r = Object.entries(t)
      .filter(([, f]) => f !== void 0)
      .map(([f, h]) => {
        const S = On(f),
          D = Wt(h);
        return [S, D];
      })
      .sort(([f], [h]) => Hs(f, h)),
    s = Ke(...r.map((f) => Ke(...f)));
  return ke(s);
}
var Ks =
  (globalThis && globalThis.__rest) ||
  function (t, A) {
    var e = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        A.indexOf(r) < 0 &&
        (e[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
        A.indexOf(r[s]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[s]) &&
          (e[r[s]] = t[r[s]]);
    return e;
  };
const Ps = new TextEncoder().encode(`
ic-request`);
class oi {
  getPrincipal() {
    return (
      this._principal ||
        (this._principal = XA.selfAuthenticating(
          new Uint8Array(this.getPublicKey().toDer())
        )),
      this._principal
    );
  }
  async transformRequest(A) {
    const { body: e } = A,
      r = Ks(A, ["body"]),
      s = await Br(e);
    return Object.assign(Object.assign({}, r), {
      body: {
        content: e,
        sender_pubkey: this.getPublicKey().toDer(),
        sender_sig: await this.sign(Ke(Ps, s)),
      },
    });
  }
}
class Pr {
  getPrincipal() {
    return XA.anonymous();
  }
  async transformRequest(A) {
    return Object.assign(Object.assign({}, A), { body: { content: A.body } });
  }
}
var _e = {},
  mt = {},
  VA = {};
Object.defineProperty(VA, "__esModule", { value: !0 });
const js = 9007199254740992;
function Ze(t, ...A) {
  const e = new Uint8Array(
    t.byteLength + A.reduce((s, c) => s + c.byteLength, 0)
  );
  e.set(new Uint8Array(t), 0);
  let r = t.byteLength;
  for (const s of A) e.set(new Uint8Array(s), r), (r += s.byteLength);
  return e.buffer;
}
function Le(t, A, e) {
  e = e.replace(/[^0-9a-fA-F]/g, "");
  const r = 2 ** (A - 24);
  e = e.slice(-r * 2).padStart(r * 2, "0");
  const s = [(t << 5) + A].concat(e.match(/../g).map((c) => parseInt(c, 16)));
  return new Uint8Array(s).buffer;
}
function Er(t, A) {
  if (A < 24) return new Uint8Array([(t << 5) + A]).buffer;
  {
    const e = A <= 255 ? 24 : A <= 65535 ? 25 : A <= 4294967295 ? 26 : 27;
    return Le(t, e, A.toString(16));
  }
}
function Hn(t) {
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
  return Ze(new Uint8Array(Er(3, t.length)), new Uint8Array(A));
}
function Ws(t, A) {
  if (t == 14277111) return Ze(new Uint8Array([217, 217, 247]), A);
  if (t < 24) return Ze(new Uint8Array([192 + t]), A);
  {
    const e = t <= 255 ? 24 : t <= 65535 ? 25 : t <= 4294967295 ? 26 : 27,
      r = 2 ** (e - 24),
      s = t
        .toString(16)
        .slice(-r * 2)
        .padStart(r * 2, "0"),
      c = [192 + e].concat(s.match(/../g).map((f) => parseInt(f, 16)));
    return new Uint8Array(c).buffer;
  }
}
VA.tagged = Ws;
function vt(t) {
  return new Uint8Array(t).buffer;
}
VA.raw = vt;
function gi(t) {
  if (isNaN(t)) throw new RangeError("Invalid number.");
  t = Math.min(Math.max(0, t), 23);
  const A = [0 + t];
  return new Uint8Array(A).buffer;
}
VA.uSmall = gi;
function Jn(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, t), 255)), (t = t.toString(16)), Le(0, 24, t)
  );
}
VA.u8 = Jn;
function Kn(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, t), 65535)), (t = t.toString(16)), Le(0, 25, t)
  );
}
VA.u16 = Kn;
function Pn(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, t), 4294967295)),
    (t = t.toString(16)),
    Le(0, 26, t)
  );
}
VA.u32 = Pn;
function Ii(t, A) {
  if (typeof t == "string" && A == 16) {
    if (t.match(/[^0-9a-fA-F]/)) throw new RangeError("Invalid number.");
    return Le(0, 27, t);
  }
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (t = Math.min(Math.max(0, t), js)), (t = t.toString(16)), Le(0, 27, t);
}
VA.u64 = Ii;
function jn(t) {
  if (isNaN(t)) throw new RangeError("Invalid number.");
  if (t === 0) return gi(0);
  t = Math.min(Math.max(0, -t), 24) - 1;
  const A = [32 + t];
  return new Uint8Array(A).buffer;
}
VA.iSmall = jn;
function Wn(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 255)), (t = t.toString(16)), Le(1, 24, t)
  );
}
VA.i8 = Wn;
function Vn(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 65535)),
    (t = t.toString(16)),
    Le(1, 25, t)
  );
}
VA.i16 = Vn;
function zn(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 4294967295)),
    (t = t.toString(16)),
    Le(1, 26, t)
  );
}
VA.i32 = zn;
function Zn(t, A) {
  if (typeof t == "string" && A == 16) {
    if (
      (t.startsWith("-") ? (t = t.slice(1)) : (t = "0"),
      t.match(/[^0-9a-fA-F]/) || t.length > 16)
    )
      throw new RangeError("Invalid number.");
    let e = !1,
      r = t.split("").reduceRight((s, c) => {
        if (e) return c + s;
        let f = parseInt(c, 16) - 1;
        return f >= 0 ? ((e = !0), f.toString(16) + s) : "f" + s;
      }, "");
    return e ? Le(1, 27, r) : Ii(0);
  }
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 9007199254740992)),
    (t = t.toString(16)),
    Le(1, 27, t)
  );
}
VA.i64 = Zn;
function Vs(t) {
  return t >= 0
    ? t < 24
      ? gi(t)
      : t <= 255
      ? Jn(t)
      : t <= 65535
      ? Kn(t)
      : t <= 4294967295
      ? Pn(t)
      : Ii(t)
    : t >= -24
    ? jn(t)
    : t >= -255
    ? Wn(t)
    : t >= -65535
    ? Vn(t)
    : t >= -4294967295
    ? zn(t)
    : Zn(t);
}
VA.number = Vs;
function zs(t) {
  return Ze(Er(2, t.byteLength), t);
}
VA.bytes = zs;
function Zs(t) {
  return Hn(t);
}
VA.string = Zs;
function Xs(t) {
  return Ze(Er(4, t.length), ...t);
}
VA.array = Xs;
function $s(t, A = !1) {
  t instanceof Map || (t = new Map(Object.entries(t)));
  let e = Array.from(t.entries());
  return (
    A && (e = e.sort(([r], [s]) => r.localeCompare(s))),
    Ze(Er(5, t.size), ...e.map(([r, s]) => Ze(Hn(r), s)))
  );
}
VA.map = $s;
function Ao(t) {
  const A = new Float32Array([t]);
  return Ze(new Uint8Array([224 + 26]), new Uint8Array(A.buffer));
}
VA.singleFloat = Ao;
function eo(t) {
  const A = new Float64Array([t]);
  return Ze(new Uint8Array([224 + 27]), new Uint8Array(A.buffer));
}
VA.doubleFloat = eo;
function to(t) {
  return t ? Xn() : $n();
}
VA.bool = to;
function Xn() {
  return vt(new Uint8Array([224 + 21]));
}
VA.true_ = Xn;
function $n() {
  return vt(new Uint8Array([224 + 20]));
}
VA.false_ = $n;
function ro() {
  return vt(new Uint8Array([224 + 22]));
}
VA.null_ = ro;
function io() {
  return vt(new Uint8Array([224 + 23]));
}
VA.undefined_ = io;
var no =
  (wt && wt.__importStar) ||
  function (t) {
    if (t && t.__esModule) return t;
    var A = {};
    if (t != null)
      for (var e in t) Object.hasOwnProperty.call(t, e) && (A[e] = t[e]);
    return (A.default = t), A;
  };
Object.defineProperty(mt, "__esModule", { value: !0 });
const Ue = no(VA),
  ao = [
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
class Aa {
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
        return Ue.undefined_();
      case "boolean":
        return Ue.bool(A);
      case "number":
        return Math.floor(A) === A ? Ue.number(A) : Ue.doubleFloat(A);
      case "string":
        return Ue.string(A);
      case "object":
        if (A === null) return Ue.null_();
        if (Array.isArray(A))
          return Ue.array(A.map((e) => this._serializer.serializeValue(e)));
        if (ao.find((e) => A instanceof e)) return Ue.bytes(A.buffer);
        if (Object.getOwnPropertyNames(A).indexOf("toJSON") !== -1)
          return this.encode(A.toJSON());
        if (A instanceof Map) {
          const e = new Map();
          for (const [r, s] of A.entries())
            e.set(r, this._serializer.serializeValue(s));
          return Ue.map(e, this._stable);
        } else {
          const e = new Map();
          for (const [r, s] of Object.entries(A))
            e.set(r, this._serializer.serializeValue(s));
          return Ue.map(e, this._stable);
        }
      default:
        throw new Error("Invalid value.");
    }
  }
}
mt.JsonDefaultCborEncoder = Aa;
class ea {
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
mt.ToCborEncoder = ea;
class ta {
  constructor() {
    this._encoders = new Set();
  }
  static withDefaultEncoders(A = !1) {
    const e = new this();
    return e.addEncoder(new Aa(e, A)), e.addEncoder(new ea()), e;
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
mt.CborSerializer = ta;
class so extends ta {
  serialize(A) {
    return Ue.raw(
      new Uint8Array([
        ...new Uint8Array([217, 217, 247]),
        ...new Uint8Array(super.serializeValue(A)),
      ])
    );
  }
}
mt.SelfDescribeCborSerializer = so;
(function (t) {
  function A(s) {
    for (var c in s) t.hasOwnProperty(c) || (t[c] = s[c]);
  }
  var e =
    (wt && wt.__importStar) ||
    function (s) {
      if (s && s.__esModule) return s;
      var c = {};
      if (s != null)
        for (var f in s) Object.hasOwnProperty.call(s, f) && (c[f] = s[f]);
      return (c.default = s), c;
    };
  Object.defineProperty(t, "__esModule", { value: !0 }), A(mt);
  const r = e(VA);
  t.value = r;
})(_e);
class oo {
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
    return _e.value.bytes(A.toUint8Array());
  }
}
class go {
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
    return _e.value.bytes(new Uint8Array(A));
  }
}
class Io {
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
      ? _e.value.tagged(2, _e.value.bytes($t(A.toString(16))))
      : _e.value.tagged(3, _e.value.bytes($t((BigInt("-1") * A).toString(16))));
  }
}
const cr = _e.SelfDescribeCborSerializer.withDefaultEncoders(!0);
cr.addEncoder(new oo());
cr.addEncoder(new go());
cr.addEncoder(new Io());
var jr;
(function (t) {
  (t[(t.Uint64LittleEndian = 71)] = "Uint64LittleEndian"),
    (t[(t.Semantic = 55799)] = "Semantic");
})(jr || (jr = {}));
function yr(t) {
  return cr.serialize(t);
}
function Si(t) {
  const A = t.byteLength;
  let e = BigInt(0);
  for (let r = 0; r < A; r++) e = e * BigInt(256) + BigInt(t[r]);
  return e;
}
class Bo extends qn.Decoder {
  createByteString(A) {
    return Ke(...A);
  }
  createByteStringFromHeap(A, e) {
    return A === e
      ? new ArrayBuffer(0)
      : new Uint8Array(this._heap.slice(A, e));
  }
}
function lt(t) {
  const A = new Uint8Array(t);
  return new Bo({
    size: A.byteLength,
    tags: { 2: (r) => Si(r), 3: (r) => -Si(r), [jr.Semantic]: (r) => r },
  }).decodeFirst(A);
}
const Yt = () => {
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
var Wr;
(function (t) {
  t.Call = "call";
})(Wr || (Wr = {}));
function ra() {
  const t = new ArrayBuffer(16),
    A = new DataView(t),
    e = Yt(),
    r = Yt(),
    s = Yt(),
    c = Yt();
  return (
    A.setUint32(0, e),
    A.setUint32(4, r),
    A.setUint32(8, s),
    A.setUint32(12, c),
    t
  );
}
const Eo = BigInt(1e6),
  co = BigInt(60 * 1e3);
class qt {
  constructor(A) {
    this._value = (BigInt(Date.now()) + BigInt(A) - co) * Eo;
  }
  toCBOR() {
    return _e.value.u64(this._value.toString(16), 16);
  }
  toHash() {
    return ae(this._value);
  }
}
function fo(t = ra) {
  return async (A) => {
    t();
    const e = A.request.headers;
    (A.request.headers = e), A.endpoint === "call" && (A.body.nonce = t());
  };
}
function xr(t) {
  const A = [];
  return (
    t.forEach((e, r) => {
      A.push([r, e]);
    }),
    A
  );
}
class uo extends Error {
  constructor(A, e) {
    super(A),
      (this.response = e),
      (this.name = this.constructor.name),
      Object.setPrototypeOf(this, new.target.prototype);
  }
}
var We;
(function (t) {
  (t.Received = "received"),
    (t.Processing = "processing"),
    (t.Replied = "replied"),
    (t.Rejected = "rejected"),
    (t.Unknown = "unknown"),
    (t.Done = "done");
})(We || (We = {}));
const Ot = 5 * 60 * 1e3,
  ho =
    "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae",
  Qo = "ic0.app",
  Co = ".ic0.app",
  lo = "icp0.io",
  wo = ".icp0.io",
  po = "icp-api.io",
  yo = ".icp-api.io";
class Sr extends nt {
  constructor(A) {
    super(A), (this.message = A);
  }
}
class Ht extends nt {
  constructor(A) {
    super(A), (this.message = A);
  }
}
function xo() {
  let t;
  if (typeof window < "u")
    if (window.fetch) t = window.fetch.bind(window);
    else
      throw new Sr(
        "Fetch implementation was not available. You appear to be in a browser context, but window.fetch was not present."
      );
  else if (typeof global < "u")
    if (global.fetch) t = global.fetch.bind(global);
    else
      throw new Sr(
        "Fetch implementation was not available. You appear to be in a Node.js context, but global.fetch was not available."
      );
  else typeof self < "u" && self.fetch && (t = self.fetch.bind(self));
  if (t) return t;
  throw new Sr(
    "Fetch implementation was not available. Please provide fetch to the HttpAgent constructor, or ensure it is available in the window or global context."
  );
}
class ia {
  constructor(A = {}) {
    if (
      ((this.rootKey = $t(ho)),
      (this._pipeline = []),
      (this._timeDiffMsecs = 0),
      (this._rootKeyFetched = !1),
      (this._isAgent = !0),
      A.source)
    ) {
      if (!(A.source instanceof ia))
        throw new Error("An Agent's source can only be another HttpAgent");
      (this._pipeline = [...A.source._pipeline]),
        (this._identity = A.source._identity),
        (this._fetch = A.source._fetch),
        (this._host = A.source._host),
        (this._credentials = A.source._credentials);
    } else
      (this._fetch = A.fetch || xo() || fetch.bind(global)),
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
        s = e?.hostname;
      let c;
      s && typeof s == "string" && (c = r.find((f) => s.endsWith(f))),
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
      this._host.hostname.endsWith(Co)
        ? (this._host.hostname = Qo)
        : this._host.hostname.endsWith(wo)
        ? (this._host.hostname = lo)
        : this._host.hostname.endsWith(yo) && (this._host.hostname = po),
      A.credentials)
    ) {
      const { name: e, password: r } = A.credentials;
      this._credentials = `${e}${r ? ":" + r : ""}`;
    }
    (this._identity = Promise.resolve(A.identity || new Pr())),
      A.disableNonce || this.addTransform(fo(ra));
  }
  isLocal() {
    const A = this._host.hostname;
    return A === "127.0.0.1" || A.endsWith("localhost");
  }
  addTransform(A, e = A.priority || 0) {
    const r = this._pipeline.findIndex((s) => (s.priority || 0) < e);
    this._pipeline.splice(
      r >= 0 ? r : this._pipeline.length,
      0,
      Object.assign(A, { priority: e })
    );
  }
  async getPrincipal() {
    if (!this._identity)
      throw new Ht(
        "This identity has expired due this application's security policy. Please refresh your authentication."
      );
    return (await this._identity).getPrincipal();
  }
  async call(A, e, r) {
    const s = await (r !== void 0 ? await r : await this._identity);
    if (!s)
      throw new Ht(
        "This identity has expired due this application's security policy. Please refresh your authentication."
      );
    const c = XA.from(A),
      f = e.effectiveCanisterId ? XA.from(e.effectiveCanisterId) : c,
      h = s.getPrincipal() || XA.anonymous();
    let S = new qt(Ot);
    Math.abs(this._timeDiffMsecs) > 1e3 * 30 &&
      (S = new qt(Ot + this._timeDiffMsecs));
    const D = {
      request_type: Wr.Call,
      canister_id: c,
      method_name: e.methodName,
      arg: e.arg,
      sender: h,
      ingress_expiry: S,
    };
    let Y = await this._transform({
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
      body: D,
    });
    Y = await s.transformRequest(Y);
    const M = yr(Y.body),
      z = this._requestAndRetry(() =>
        this._fetch(
          "" + new URL(`/api/v2/canister/${f.toText()}/call`, this._host),
          Object.assign(
            Object.assign(Object.assign({}, this._callOptions), Y.request),
            { body: M }
          )
        )
      ),
      [T, nA] = await Promise.all([z, Br(D)]),
      EA = await T.arrayBuffer(),
      NA = T.status === 200 && EA.byteLength > 0 ? lt(EA) : null;
    return {
      requestId: nA,
      response: {
        ok: T.ok,
        status: T.status,
        statusText: T.statusText,
        body: NA,
        headers: xr(T.headers),
      },
    };
  }
  async _requestAndRetry(A, e = 0) {
    const r = await A();
    if (r.ok) return r;
    const s = await r.clone().text(),
      c = `Server returned an error:
  Code: ${r.status} (${r.statusText})
  Body: ${s}
`;
    if (this._retryTimes > e)
      return (
        console.warn(c + "  Retrying request."),
        await this._requestAndRetry(A, e + 1)
      );
    throw new uo(c, {
      ok: r.ok,
      status: r.status,
      statusText: r.statusText,
      headers: xr(r.headers),
    });
  }
  async query(A, e, r) {
    const s = await (r !== void 0 ? await r : await this._identity);
    if (!s)
      throw new Ht(
        "This identity has expired due this application's security policy. Please refresh your authentication."
      );
    const c = typeof A == "string" ? XA.fromText(A) : A,
      f = s?.getPrincipal() || XA.anonymous(),
      h = {
        request_type: "query",
        canister_id: c,
        method_name: e.methodName,
        arg: e.arg,
        sender: f,
        ingress_expiry: new qt(Ot),
      };
    let S = await this._transform({
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
      body: h,
    });
    S = await s?.transformRequest(S);
    const D = yr(S.body),
      Y = await this._requestAndRetry(() =>
        this._fetch(
          "" + new URL(`/api/v2/canister/${c.toText()}/query`, this._host),
          Object.assign(
            Object.assign(Object.assign({}, this._fetchOptions), S.request),
            { body: D }
          )
        )
      ),
      M = lt(await Y.arrayBuffer());
    return Object.assign(Object.assign({}, M), {
      httpDetails: {
        ok: Y.ok,
        status: Y.status,
        statusText: Y.statusText,
        headers: xr(Y.headers),
      },
    });
  }
  async createReadStateRequest(A, e) {
    const r = await (e !== void 0 ? await e : await this._identity);
    if (!r)
      throw new Ht(
        "This identity has expired due this application's security policy. Please refresh your authentication."
      );
    const s = r?.getPrincipal() || XA.anonymous(),
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
          sender: s,
          ingress_expiry: new qt(Ot),
        },
      });
    return r?.transformRequest(c);
  }
  async readState(A, e, r, s) {
    const c = typeof A == "string" ? XA.fromText(A) : A,
      f = s ?? (await this.createReadStateRequest(e, r)),
      h = yr(f.body),
      S = await this._requestAndRetry(() =>
        this._fetch(
          "" + new URL(`/api/v2/canister/${c}/read_state`, this._host),
          Object.assign(
            Object.assign(Object.assign({}, this._fetchOptions), f.request),
            { body: h }
          )
        )
      );
    if (!S.ok)
      throw new Error(`Server returned an error:
  Code: ${S.status} (${S.statusText})
  Body: ${await S.text()}
`);
    return lt(await S.arrayBuffer());
  }
  async syncTime(A) {
    const e = await Ca(
        () => import("./index.62c4172e.js"),
        [],
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
          canisterId: A ?? XA.from("ryjl3-tyaaa-aaaaa-aaaba-cai"),
          agent: this,
          paths: ["time"],
        })
      ).get("time");
      c && (this._timeDiffMsecs = Number(c) - Number(r));
    } catch (s) {
      console.error("Caught exception while attempting to sync time:", s);
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
    return lt(await e.arrayBuffer());
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
    for (const r of this._pipeline) e = e.then((s) => r(s).then((c) => c || s));
    return e;
  }
}
var mi;
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
})(mi || (mi = {}));
function Di() {
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
var na;
(function () {
  for (
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      A = new Uint8Array(256),
      e = 0;
    e < t.length;
    e++
  )
    A[t.charCodeAt(e)] = e;
  na = function (r) {
    var s = r.length * 0.75,
      c = r.length,
      f,
      h = 0,
      S,
      D,
      Y,
      M;
    r[r.length - 1] === "=" && (s--, r[r.length - 2] === "=" && s--);
    var z = new ArrayBuffer(s),
      T = new Uint8Array(z);
    for (f = 0; f < c; f += 4)
      (S = A[r.charCodeAt(f)]),
        (D = A[r.charCodeAt(f + 1)]),
        (Y = A[r.charCodeAt(f + 2)]),
        (M = A[r.charCodeAt(f + 3)]),
        (T[h++] = (S << 2) | (D >> 4)),
        (T[h++] = ((D & 15) << 4) | (Y >> 2)),
        (T[h++] = ((Y & 3) << 6) | (M & 63));
    return z;
  };
})();
const So =
  "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akE4ENABGiACQbgDakEBNgIAIAJBwANqQTgQ0AEaIAJB+ANqQQE2AgAgAkGABGpBOBDQARogAkEBNgK4BCACQcAEakE4ENABGiACQfgEakEBNgIAIAJBgAVqQTgQ0AEaIAJBuAVqQQE2AgAgAkHABWpBOBDQARogAkH4BWpBATYCACACQYAGakE4ENABGiACQQE2ArgGIAJBwAZqQTgQ0AEaIAJB+AZqQQE2AgAgAkGAB2pBOBDQARogAkG4B2pBATYCACACQcAHakE4ENABGiACQfgHakEBNgIAIAIgARAYAkAgASgCgAZBBEYNACAAKAKABkEERg0AIAJBgARqIgMgAEGAAmoQlgEgAyABQYACahAYDAYLIAJBwAxqIgdBOBDQARogAkEBNgL4DCACQYANakE4ENABGiACQbgNakEBNgIAIAJBgAhqIgRBOBDQARogAkEBNgK4CCACQcAIakE4ENABGiACQfgIakEBNgIAIAJBgApqIgMgAEGAA2oiBRBeIAQgAxCZASADIAFBgANqIgYQXiAEIAMQESAHELYBIAEoAoAGQQRHDQMMBAsgACABEAMMBgsgAkHADGoiAyABQYAFahBeIAJBgAxqIgQgA0HAABDRARogAkGABmogBBCnAQsgAkGABmoQZCACQYAIaiIDIAIQlgEgAxArIAJBgAJqIgQgAxCXASAGIAQQlgEgAkGABGoiByADEJYBIAMgABCWASADIAUQlwEgAxCwASACQYAKaiIEIAEQlgEgBCABQYAEahCXASAEELABIAMgBBAYIAcgAxCXASADIAUQlgECQCABKAKABkECRwRAIAJBwAxqIgMgAUGABWoQXiACQYAIaiADEKYBDAELIAJBwAxqIgMgAUGABWoQXiACQYAMaiIBIANBwAAQ0QEaIAJBgAhqIAEQpwELIAJBgAhqIgEQZCACQYAKaiIDIAEQlgEgAxArIAUgAkGABGoQlgEgBSADEJcBIAJBgAZqIgQgAxCXASABEGQgBiABEJcBIAQQsAEgBBBkIAAgAhCWASAAIAQQlwEMAwsgAkGACmoiAyAFEF4gAkHADGoiBCADEJkBIAMgAUGAAmoQXiAEIAMQEQsgACgCgAZBBEcEQCACQYAKaiIDIABBgAJqEF4gAkHADGoiBCADEJkBIAMgBhBeIAQgAxARCyACQYAEaiIDIAJB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AEHcu8AAKAIAQX4gA0EDdndxNgIACyAAIAEQoAEgAEH0vsAAKAIARw0BQey+wAAgATYCAAsPCyABQYACTwRAIAAgARAWDwsgAUEDdiICQQN0QeS7wABqIQECf0Hcu8AAKAIAIgNBASACdCICcQRAIAEoAggMAQtB3LvAACACIANyNgIAIAELIQIgASAANgIIIAIgADYCDCAAIAE2AgwgACACNgIIC+UDAQN/IwBB0CJrIgMkACADQcAWaiIEQcitwAAQSSADQcgcaiIFQYCuwAAQSSADQQhqIAQgBRBLIANBiAFqQTgQ0AEaIANBwAFqQTgQ0AEaIANB+AFqED0CQCACEIYBBEAgABBVDAELIANB+ARqIgQQPSAEIAEQfSAEEEcgA0H4B2oiARBnIAEgAhB4IAEQRiADQcgcaiICIAEQkAEgA0G4CWogAhCQASACIANBuAhqEJABIANB+AlqIAIQkAEgA0G4CmoiARA9IANBuA1qEFUgASAEEH0gA0HAE2oiARA9IAEgBBB9IAEQogEgA0HAAWogA0GIAWoQUEECayECA0AgAkEBakEBTQRAIANBuA1qIgEQngEgACABQYgGENEBGgUgA0G4DWoQGiADQcAWaiADQbgKaiADQbgJaiADQfgJahALAkACQAJAIANBwAFqIAIQUyADQYgBaiACEFNrQQFqDgMBAgACCyADQcgcaiIBIANBuApqIANB+ARqIANBuAlqIANB+AlqEAogA0HAFmogARADDAELIANByBxqIgEgA0G4CmogA0HAE2ogA0G4CWogA0H4CWoQCiADQcAWaiABEAMLIAJBAWshAiADQbgNaiADQcAWahABDAELCwsgA0HQImokAAvBAwEVfwNAIANBwAFGBEACQCAAQShqIQsgAEEUaigCACIMIQggAEEQaigCACINIQIgAEEMaigCACIOIQEgACgCCCIPIQMgAEEYaigCACIQIQogAEEcaigCACIRIQQgAEEgaigCACISIQcgAEEkaigCACITIQYDQCAHIQkgBCEHIAohBCAFQYACRg0BIAEgAnEhFCABIAJzIRUgBSALaigCACAFQcCiwABqKAIAIAkgBEF/c3EgBCAHcXIgBmogBEEadyAEQRV3cyAEQQd3c2pqaiIGIAhqIQogBUEEaiEFIAIhCCABIQIgAyIBQR53IAFBE3dzIAFBCndzIBQgASAVcXNqIAZqIQMgCSEGDAALAAsFIAAgA2oiAkHoAGogAkEoaigCACACQcwAaigCACACQeAAaigCACIBQQ93IAFBDXdzIAFBCnZzamogAkEsaigCACIBQRl3IAFBDndzIAFBA3ZzajYCACADQQRqIQMMAQsLIAAgBiATajYCJCAAIAkgEmo2AiAgACAHIBFqNgIcIAAgBCAQajYCGCAAIAggDGo2AhQgACACIA1qNgIQIAAgASAOajYCDCAAIAMgD2o2AggL5AEBAn8jAEGAA2siAyQAIAMQPSAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbyAAIAFBgANqIAJBAXNBAWtBH3YQbyAAIAFBgAZqIAJBAnNBAWtBH3YQbyAAIAFBgAlqIAJBA3NBAWtBH3YQbyAAIAFBgAxqIAJBBHNBAWtBH3YQbyAAIAFBgA9qIAJBBXNBAWtBH3YQbyAAIAFBgBJqIAJBBnNBAWtBH3YQbyAAIAFBgBVqIAJBB3NBAWtBH3YQbyADIAAQfSADEKIBIAAgAyAEQQFxEG8gA0GAA2okAAvlAwEIfyMAQZAGayICJAAgAEFAayEIAkAgAUH4AGooAgAgASgCOGqsIABB+ABqKAIAIgcgACgCOCIEaqx+Qv///w9XDQAgBEEBSgR/IAAQHiAAKAJ4BSAHC0EBTA0AIAgQHgsgAkHYpMAAEEkgAkE4aiIHQfAAENABGiACIQNBACECA0AgAkE4RgRAAkAgB0E4aiEEQQAhAgNAIAJBOEYNASACIARqIAIgA2opAwA3AwAgAkEIaiECDAALAAsFIAIgB2pCADcDACACQQhqIQIMAQsLIANBqAFqIgYgABBdIANB4AFqIgUgARBdIANBmAJqIgIgACABEAUgA0GIA2oiBCAIIAFBQGsiARAFIAYgCBBgIAYQQiAFIAEQYCAFEEIgA0H4A2oiCSAGIAUQBUEAIQEgA0HoBGoiBkHwABDQASEFA0AgAUHwAEcEQCABIAVqIAEgAmopAwA3AwAgAUEIaiEBDAELCyAGIAQQYkEAIQEDQCABQfAARwRAIAEgBGoiBSABIAdqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAiAEEGIgAhBIIAkgBhBjIAkQSCADQdgFaiIBIAIQayAAIAEQaiAAQQM2AjggASAJEGsgCCABEGogAEECNgJ4IANBkAZqJAALowIBCH8jAEGABmsiAiQAIAIgAEGAAWoiBxBeIAJBgAFqIgQgBxBeIAQQLSACQYACaiIFIAIQXiAFIABBgAJqIgMQESACQYADaiIBIAMQXiABEC0gAyAEEJkBIAMgBBCaASADEKkBIAMQuAEgAxC4ASADEKkBIAFBDBCrASABEHwgARCpASACQYAEaiIIIAEQXiAIIAMQESACQYAFaiIGIAQQXiAGIAEQmgEgBhCpASADIAUQESAFIAEQmQEgBSABEJoBIAEgBRCaASABEKkBIAQgARB7IAQQqQEgBiAEEBEgBiAIEJoBIAUgABCZASAFIAIQESAAIAQQmQEgABCpASAAIAUQESAAELgBIAAQqQEgByAGEJkBIAcQqQEgAkGABmokAAu8AgEGfyMAQYAIayIBJAAgASAAEIwBIAFBgAJqIgMgAEGABGoiBRCMASABQYAEaiIEIABBgAJqIgYQjAEgAUGABmoiAkE4ENABGiABQQE2ArgGIAFBwAZqQTgQ0AEaIAFB+AZqQQE2AgAgAUGAB2pBOBDQARogAUG4B2pBATYCACABQcAHakE4ENABGiABQfgHakEBNgIAIAAQISACIAAQlgEgAiAAEJcBIAAgAhCXASAAELABIAEQyQEgARCzASAAIAEQlwEgAxAhIAMQZCACIAMQlgEgAiADEJcBIAMgAhCXASADELABIAQQISACIAQQlgEgAiAEEJcBIAQgAhCXASAEELABIAYQsgEgBhCzASAFEMkBIAUQswEgBiADEJcBIAUgBBCXASAAQQU2AoAGIAAQnAEgAUGACGokAAv/AQEHfyMAQcACayIBJAAgASAAQUBrIgYQkAEgARBMIAFBQGsiAyAGEJABIAMgAEGAAWoiAhBKIAFBgAFqIgQgAhCQASAEEEwgAiABEK4BIAIgARB3IAIQQiACEIIBIAIQggEgAhBCIARBDBA0IAFBwAFqIgcgBBCQASAHIAIQSiABQYACaiIFIAEQkAEgBSAEEHcgBRBCIAIgAxBKIAMgBBCuASADIAQQdyAEIAMQdyABIAQQfiABEEIgBSABEEogBSAHEHcgAyAAEK4BIAMgBhBKIAAgARCuASAAEEIgACADEEogABCCASAAEEIgBiAFEK4BIAYQQiABQcACaiQAC84CAgd/An4CQAJAAkBBDSABQTpuIgJrIgRBDU0EQEEMIAJrIgNBDk8NASAAIAAgA0EDdGopAwBBOiABIAJBOmxrIgNrrSIKhyAAIARBA3RqKQMAIAOtIgmGhDcDaCAEQQ1rIQUgAEHgAGohBCACQQFqIQZBACACQQN0ayEHQQshAwNAAkAgA0ECaiAGTQRAIAFBrAZPDQEgACACQQN0aiAAKQMAIAmGQv//////////A4M3AwADQCACRQ0HIABCADcDACACQQFrIQIgAEEIaiEADAALAAsgAyAFakEOTw0EIAQgBCAHaiIIQQhrKQMAIAqHIAgpAwAgCYZC//////////8Dg4Q3AwAgA0EBayEDIARBCGshBAwBCwsgAkEOQYCywAAQOwALIARBDkHQscAAEDsACyADQQ5B4LHAABA7AAtBf0EOQfCxwAAQOwALC6cCAQR/IABCADcCECAAAn9BACABQYACSQ0AGkEfIAFB////B0sNABogAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+agsiBDYCHCAEQQJ0Qey9wABqIQMgACECAkACQAJAAkBB4LvAACgCACIAQQEgBHQiBXEEQCADKAIAIQMgBBCfASEAIAMQywEgAUcNASADIQAMAgtB4LvAACAAIAVyNgIAIAMgAjYCAAwDCyABIAB0IQQDQCADIARBHXZBBHFqQRBqIgUoAgAiAEUNAiAEQQF0IQQgACIDEMsBIAFHDQALCyAAKAIIIgEgAjYCDCAAIAI2AgggAiAANgIMIAIgATYCCCACQQA2AhgPCyAFIAI2AgALIAIgAzYCGCACIAI2AgggAiACNgIMC7YCAQV/IAAoAhghBAJAAkAgACAAKAIMRgRAIABBFEEQIABBFGoiASgCACIDG2ooAgAiAg0BQQAhAQwCCyAAKAIIIgIgACgCDCIBNgIMIAEgAjYCCAwBCyABIABBEGogAxshAwNAIAMhBSACIgFBFGoiAygCACICRQRAIAFBEGohAyABKAIQIQILIAINAAsgBUEANgIACwJAIARFDQACQCAAIAAoAhxBAnRB7L3AAGoiAigCAEcEQCAEQRBBFCAEKAIQIABGG2ogATYCACABDQEMAgsgAiABNgIAIAENAEHgu8AAQeC7wAAoAgBBfiAAKAIcd3E2AgAPCyABIAQ2AhggACgCECICBEAgASACNgIQIAIgATYCGAsgAEEUaigCACIARQ0AIAFBFGogADYCACAAIAE2AhgLC+UBAQZ/IwBBgARrIgIkACACIAAQXiACQYABaiIFIABBgAFqIgYQXiACQYACaiIDQTgQ0AEaIAJBATYCuAIgAkHAAmpBOBDQARogAkH4AmpBATYCACACQYADaiIEIAYQXiACIAEQESAFIAFBgAFqIgcQESADIAcQmQEgAyABEJoBIAQgABCaASADEKkBIAQQqQEgBCADEBEgAyACEJkBIAMQNiAEIAMQmgEgBBCpASADIAUQmQEgAxA2IAYgBBCZASAGIAMQmgEgBRB8IAAgBRCZASAAIAIQmgEgABCwASACQYAEaiQAC28BDH9BjL/AACgCACICRQRAQZy/wABB/x82AgBBAA8LQYS/wAAhBgNAIAIiASgCCCECIAEoAgQhAyABKAIAIQQgAUEMaigCABogASEGIAVBAWohBSACDQALQZy/wAAgBUH/HyAFQf8fSxs2AgBBAAuAAgEGfyMAQYAIayIBJAAgACgCgAZBAUcEQCABIAAQjAEgAUGAAmoiAiAAQYACaiIEEIwBIAFBgARqIgUgAEGABGoiAxCMASABQYAGaiIGIAAQjAEgARAhIAIgAxAYIAIQswEgAhCwASAFECEgBiAEEBggBhCzASADIAAQlwEgAyAEEJcBIAMQsAEgAxAhIAAgARCWASABIAIQlwEgARCwASABIAUQlwEgASAGEJcBIAEQsAEgARArIAIQZCAFEGQgACACEJcBIAQgBRCWASAEIAYQlwEgAyABEJcBIABBBEEFIAAoAoAGQX5xQQJGGzYCgAYgABCdAQsgAUGACGokAAuZAgEBfyMAQYANayIDJAAgAyABEGkgAxCdASADQYgGaiIBIAIQXSABEEIgA0HABmoiAiABEF0gAkEDECkaIAIQQiADQfgGaiADEGkCQCACEFdFBEAgA0HABmoQKkECayECA0AgAkEBakEBTQRAIANB+AZqIgEQnAEMAwUgA0H4BmoQEwJAAkACQCADQcAGaiACEFMgA0GIBmogAhBTa0EBag4DAQIAAgsgA0H4BmogAxAHDAELIAMQngEgA0H4BmogAxAHIAMQngELIAJBAWshAgwBCwALAAsgA0H4BmoiARC3ASABQYABahC2ASABQYACahCxASABQYAEahCxASABQQE2AoAGCyAAIAFBiAYQ0QEaIANBgA1qJAALhgICBH8BfiMAQTBrIgIkACABQQRqIQQgASgCBEUEQCABKAIAIQMgAkEQaiIFQQA2AgAgAkIBNwMIIAIgAkEIajYCFCACQShqIANBEGopAgA3AwAgAkEgaiADQQhqKQIANwMAIAIgAykCADcDGCACQRRqIAJBGGoQDBogBEEIaiAFKAIANgIAIAQgAikDCDcCAAsgAkEgaiIDIARBCGooAgA2AgAgAUEMakEANgIAIAQpAgAhBiABQgE3AgQgAiAGNwMYQQxBBBC5ASIBRQRAQQxBBBDPAQALIAEgAikDGDcCACABQQhqIAMoAgA2AgAgAEGEt8AANgIEIAAgATYCACACQTBqJAAL5AEBAn8jAEHAAWsiAyQAIAMQZyAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbiAAIAFBwAFqIAJBAXNBAWtBH3YQbiAAIAFBgANqIAJBAnNBAWtBH3YQbiAAIAFBwARqIAJBA3NBAWtBH3YQbiAAIAFBgAZqIAJBBHNBAWtBH3YQbiAAIAFBwAdqIAJBBXNBAWtBH3YQbiAAIAFBgAlqIAJBBnNBAWtBH3YQbiAAIAFBwApqIAJBB3NBAWtBH3YQbiADIAAQeCADEKQBIAAgAyAEQQFxEG4gA0HAAWokAAvDAwIGfwN+IwBB8ABrIgEkACABQcCywAAQSSABQThqIAEQXSAAEEICQAJAAkAgAQJ/IAAoAjgiAkEQTARAIAJBAWsQNQwBCyABKQMwIghCAXwiByAIVA0BIAApAzAiCEKAgICAgICAgIB/USAHQn9RcQ0CIAFBOGoiAiAIIAd/pxApIQcgASABKQNoIAdCOoZ8NwNoIAAgAhBhIAAQQkECCyIEECgDQCAERQ0DQQAhAyABIAEpAwgiCEI5hkKAgICAgICAgAKDIAEpAwBCAYeEIgc3AwAgACkDACAHfSEHIABBCGohBSAAIAFBOGoiAkEBA38gAiADaiAHQv//////////A4M3AwAgB0I6hyEHIANBKEYEfyABIAEpAzBCAYciCDcDMCACIAApAzAgCH0gB3wiBzcDMCAHQj+IpwUgASADaiIGQQhqIAhCAYcgBkEQaikDACIIQjmGQoCAgICAgICAAoOEIgk3AwAgAyAFaikDACAHfCAJfSEHIANBCGohAwwBCwtrEDAgBEEBayEEDAALAAtB4LPAAEEZQcSzwAAQWQALQYC0wABBH0HEs8AAEFkACyAAQQE2AjggAUHwAGokAAvuAQECfyMAQbABayIDJAAgA0EwENABIQMCQAJAA0AgAkEwRgRAIANBMGogAxBwIAFBMGohAUEAIQIDQCACQTBGDQMgAkEwRg0EIAIgA2ogASACai0AADoAACACQQFqIQIMAAsACyACQeAARwRAIAIgA2ogASACai0AADoAACACQQFqIQIMAQsLQeAAQeAAQYCmwAAQOwALIANB8ABqIgEgAxBwIABBOBDQASIAQQE2AjggAEFAa0E4ENABIABB+ABqQQE2AgAgACABEK4BIANBMGoQrgEgA0GwAWokAA8LIAJBMGpB4ABBkKbAABA7AAuPAgEDfyMAQSBrIgUkAEEBIQZB2LvAAEHYu8AAKAIAIgdBAWo2AgACQEGgv8AALQAABEBBpL/AACgCAEEBaiEGDAELQaC/wABBAToAAAtBpL/AACAGNgIAAkACQCAHQQBIIAZBAktyDQAgBSAEOgAYIAUgAzYCFCAFIAI2AhBBzLvAACgCACICQQBIDQBBzLvAACACQQFqIgI2AgBBzLvAAEHUu8AAKAIAIgMEf0HQu8AAKAIAIAUgACABKAIQEQAAIAUgBSkDADcDCCAFQQhqIAMoAhQRAABBzLvAACgCAAUgAgtBAWs2AgAgBkEBSw0AIAQNAQsACyMAQRBrIgIkACACIAE2AgwgAiAANgIIAAucAQEEfyMAQYADayICJAAgAiAAEF4gAkGAAWoiASAAQYABaiIEEF4gAkGAAmoiAyAAEF4gAyAEEBEgAiAEEJoBIAEQfCABIAAQmgEgAhCpASABEKkBIAAgAhCZASAAIAEQESABIAMQmQEgARB8IAEgAxCaASABEKkBIAEQNiAAIAEQmgEgAxC4ASAEIAMQmQEgABCwASACQYADaiQAC7kBAQJ/IwBBIGsiAyQAAkAgASABIAJqIgFLDQAgAEEEaigCACICQQF0IgQgASABIARJGyIBQQggAUEISxshAQJAIAIEQCADQRhqQQE2AgAgAyACNgIUIAMgACgCADYCEAwBCyADQQA2AhALIAMgASADQRBqECYgAygCAARAIANBCGooAgAiAEUNASADKAIEIAAQzwEACyADKAIEIQIgAEEEaiABNgIAIAAgAjYCACADQSBqJAAPCxBlAAusAQECfyMAQYADayIDJAAgA0EIaiABEJABAkAgAgRAIANBCGogAhCuAQwBCyADQQhqEDoLIANByABqIgJB8LTAABBJIANBgAFqIAIQjgEgA0HAAWoiAiADQQhqIgQQkAEgAhBMIAIgARBKIAAgARCQASAAIAQQSiADQYACaiACEJABIAAQViEBIANBwAJqIgIgABCQASACEEMgAhBCIAAgAiABEHIgA0GAA2okAAueAQEFfyMAQYABayICJAAgAkE4ENABIgJBATYCOCACQUBrIgNBOBDQARogAkEBNgJ4IAIgABCuASACIAFBgAFqIgUQSiADIAEQrgEgAyAAQYABaiIGEEoCQCACIAMQWEUNACACIABBQGsQrgEgAiAFEEogAkFAayIAIAFBQGsQrgEgACAGEEogAiAAEFhFDQBBASEECyACQYABaiQAIAQLpwEBA38jAEEwayICJAAgAUEEaiEDIAEoAgRFBEAgASgCACEBIAJBEGoiBEEANgIAIAJCATcDCCACIAJBCGo2AhQgAkEoaiABQRBqKQIANwMAIAJBIGogAUEIaikCADcDACACIAEpAgA3AxggAkEUaiACQRhqEAwaIANBCGogBCgCADYCACADIAIpAwg3AgALIABBhLfAADYCBCAAIAM2AgAgAkEwaiQAC5UBAQJ/AkACQAJAAkACfwJAAkACf0EBIgMgAUEASA0AGiACKAIAIgRFDQEgAigCBCICDQQgAQ0CQQEMAwshA0EAIQEMBgsgAQ0AQQEMAQsgAUEBELkBCyICRQ0BDAILIAQgARCsASICDQELIAAgATYCBEEBIQEMAQsgACACNgIEQQAhAwsgACADNgIAIABBCGogATYCAAvvMwISfwV+IwBBMGsiDiQAIA5BEGogACABEFsgDiAOKAIUIgA2AhwgDiAOKAIQIgg2AhggDkEIaiACIAMQWyAOIA4oAgwiATYCJCAOIA4oAggiAzYCICAOIAQgBRBbIA4gDigCBCIFNgIsIA4gDigCACINNgIoIAAhBCMAQZAVayICJAAjAEGwBmsiCiQAIApBEGpBOBDQARogCkHQAGpBOBDQASEVIApBiAFqQQE2AgAgCkEBNgJIIApBkAFqIgBB2KTAABBJIAAQKiEPIApByAFqIhNBgAIQ0AEaIApB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ABBJAkACQAJAAkADQAJAIAxBMEYEQCAAIAAtAABBH3E6AAAgAEHoAGogABC+ASAEDQFBAEEAQZiBwAAQOwALIAQgDEYNAiAAIAxqIAggDGotAAA6AAAgDEEBaiEMDAELC0EAIQwgCCwAACIJQQBIDQIgCEEwaiEDIARBMCAEQTBLG0EwayEIA0AgDEEwRgRAIABBoAFqIgQgABC+ASMAQYABayIDJAAgARBnIAEgAEHoAGoQwAEgAUFAayIIIAQQwAEgAUGAAWoQygEgARBCIAMgARBPIANBQGsiBCAIEJABIAQQTCAEIAMQWEUEQCABEJIBCyADQYABaiQADAULIAggDEYNAiAAIAxqIAMgDGotAAA6AAAgDEEBaiEMDAALAAsgBCAEQYiBwAAQOwALIAxBMGogBEGogcAAEDsACyMAQcABayIDJAAgAEGgAWoiBBBnIANBOBDQASIDQQE2AjggBCAAQegAahDAASAEEEIgBEGAAWoQygEgA0FAayIIIAQQTwJAAkACQCAIIAMQWkEBRgRAIANBgAFqIgggA0FAayADECMgCBBWDQEMAgsgBBCSAQwCCyADQYABaiIIEEMgCBBCCyAEQUBrIANBgAFqEK4BCyADQcABaiQAIAlBIHEiA0EAIABB4AFqEE0iBEEBRxtBASADIARBAUdyGwRAIABBoAFqEKQBCyABIABBoAFqQcABENEBGgsgAEHgAmokAAJ/QQAhAyMAQcAFayIAJAACQCABEIYBDQAgAEEIaiIIQZCtwAAQSSAAQYAEaiIEQbiuwAAQSSAAQUBrIgkgBBCOASAAQYABaiIEEGcgBCABEHggBCAJEEogAEHAAmoiBCABIAgQvQEgASAEECQNACAAQYAEaiIEIABBwAJqIgEgAEEIahC9ASABIARBwAEQ0QEaIAEQpAEgAEGAAWogARAkRQ0AQQEhAwsgAEHABWokAEF/IANFDQAaIAJBwAFqEKQBIAJBgANqIQhBACEAIwBB4ARrIgEkACABQeAAENABIQECQCAFBEADQCAAQeAARgRAIAEgAS0AAEEfcToAACABQeAAaiABEB9BACEAAkAgDSwAACILQQBOBEAgDUHgAGohAyAFQeAAIAVB4ABLG0HgAGshBANAIABB4ABGBEAgAUHgAWoiACABEB8gCCABQeAAaiAAED8MAwsgACAERwRA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AWoQmQEgACAEEBEgAEGAAWoiASAFQYABahCZASABIAgQESAAIAEQeg0BC0EADAELQQELIQEgAEGAAmokACANQcAHaiQAQX8gAUUNABojAEHgA2siACQAIABBgAFqIgFBwKjAABBJIABBuAFqIgNB+KjAABBJIAAgASADEEsgAEHwAmoiAUGwqcAAEEkgAEGoA2oiA0HoqcAAEEkgAEHwAWoiBCABIAMQSyACQYAGaiIBIAAgBBA/IABB4ANqJAAgAkGACWohByACQYADaiEIIwBBkDRrIgAkACAAQYAoaiIDQcitwAAQSSAAQYguaiIEQYCuwAAQSSAAIAMgBBBLIABBgAFqQTgQ0AEaIABBuAFqQTgQ0AEaIABB8AFqED0CQCACQcABaiIEEIYBRQRAIAIQhgEEQCAHIAEgBBAODAILIABB8ARqIgMQPSADIAEQfSADEEcgAEHwB2oiBRBnIAUgBBB4IAUQRiAAQbAJaiIEED0gBCAIEH0gBBBHIABBsAxqIggQZyAIIAIQeCAIEEYgAEGILmoiASAFEJABIABB8A1qIAEQkAEgASAAQbAIahCQASAAQbAOaiABEJABIAEgCBCQASAAQfAOaiABEJABIAEgAEHwDGoQkAEgAEGwD2ogARCQASAAQfAPaiIBED0gAEHwEmoiBRA9IABB8BVqEFUgASADEH0gBSAEEH0gAEH4G2oiARA9IAEgAxB9IAEQogEgAEH4HmoiARA9IAEgBBB9IAEQogEgAEG4AWogAEGAAWoQUEECayEBA0AgAUEBakEBTQRAIABB8BVqIgEQngEgByABQYgGENEBGgwDBSAAQfAVaiIEEBogAEH4IWoiAyAAQfAPaiAAQfANaiAAQbAOahALIABBgChqIgUgAEHwEmogAEHwDmogAEGwD2oQCyADIAUQAyAEIAMQAQJAAkACQCAAQbgBaiABEFMgAEGAAWogARBTa0EBag4DAQIAAgsgAEGILmoiAyAAQfAPaiAAQfAEaiAAQfANaiAAQbAOahAKIABB+CFqIgQgA0GIBhDRARogAyAAQfASaiAAQbAJaiAAQfAOaiAAQbAPahAKIAQgAxADIABB8BVqIAQQAQwBCyAAQYguaiIDIABB8A9qIABB+BtqIABB8A1qIABBsA5qEAogAEH4IWoiBCADQYgGENEBGiADIABB8BJqIABB+B5qIABB8A5qIABBsA9qEAogBCADEAMgAEHwFWogBBABCyABQQFrIQEMAQsACwALIAcgCCACEA4LIABBkDRqJAAjAEHgH2siCCQAIAhB0BNqIgFByK3AABBJIAhB2BlqIg1BgK7AABBJIAggASANEEsgCEGAAWoiC0GQrcAAEEkgAkGID2oiACAHEGkgCEG4AWoiBSAAEGkjAEGACGsiAyQAIAMgBRCMASADQYACaiIJIAVBgAJqIg8QjAEgA0GABGoiCiAFEIwBIANBgAZqIgRBOBDQARogA0EBNgK4BiADQcAGakE4ENABGiADQfgGakEBNgIAIANBgAdqQTgQ0AEaIANBuAdqQQE2AgAgA0HAB2pBOBDQARogA0H4B2pBATYCACAFEJ0BIAMQISAJIAVBgARqIgwQGCAJEGQgAyAJEHkgAxCwASAJIAwQlgEgCRAhIAkQZCAKIA8QGCAJIAoQeSAJELABIAogDxCWASAKECEgBCAFEJYBIAQgDBAYIAogBBB5IAoQsAEgBCAPEJYBIAQgChAYIAQQZCAFIAMQGCAEIAUQlwEgDCAJEBggDBBkIAQgDBCXASAEELABIwBBgAJrIgYkACAGIAQQXiAGQYABaiIQIARBgAFqIhIQXiAGEC0gEBAtIBAQfCAQEKkBIAYgEBB7IAYQPiAEIAYQESAGEDYgBhCpASASIAYQESAGQYACaiQAIAUgAxCWASAFIAQQGCAPIAkQlgEgDyAEEBggDCAKEJYBIAwgBBAYIAVBBTYCgAYgA0GACGokACAAEJ4BIAAgBRAHIAUgABBtIAAgCBAyIAAgCBAyIAAgBRAHIAhBwAdqIgQgABBpIAQQEyAEIAAQByANIAAgCxAbIAhByA1qIgMgDRBpIAMQngEgASAAEGkgARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gASAIEDIgACADEG0gACABEAcgDSAAIAsQGyADIA0QbSANIAMgCxAbIAMgDRBtIAEgABBtIAEgCBAyIAEgCBAyIAMgARAHIAEgABBtIAEQngEgACADEG0gACABEAcgACAEEAcgABCcASAIQeAfaiQAIAcgAEGIBhDRARpBACEAIwBBgAJrIgEkACABEGwCQCAHIAEQegR/IAdBgAFqIAFBgAFqEHoFQQALRQ0AIAdBgAJqEIcBRQ0AIAdBgARqEIcBIQALIAFBgAJqJABBACAADQAaQX8LIAJBkBVqJAAgDkEoahC0ASAOQSBqELQBIA5BGGoQtAEgDkEwaiQAC58BAgJ/BX4gAEEwaiICKQMAIAFBP3GtIgSGIQUgACkDKCIGQTogAWtBP3GtIgiHIQdBBiEBA38gAiAFIAeENwMAIAFBAU0EfyAAIAApAwAgBIZC//////////8DgzcDACAAKQMwQiSHpwUgAUEBayEBIAJBEGsiA0EIaiECIAYgBIZC//////////8DgyEHIAMpAwAiBiAIhyEFDAELCxoLiAECA34DfyMAQRBrIgUkAAN+IAZBOEYEfiAFQRBqJAAgAwUgBSAAIAZqIgcpAwAiAiACQj+HIAGsIgIgAkI/hxAvIAcgBSkDACIEIAN8IgJC//////////8DgzcDACACIARUrSAFQQhqKQMAIANCP4d8fEIGhiACQjqIhCEDIAZBCGohBgwBCwsLigECA38BfiMAQUBqIgIkACACQQhqIgEgABBdIAEQQiACQThqIQFBBiEDQdwCIQACQAJAA0AgA0EATgRAIAEpAwAiBEIAUg0CIAFBCGshASAAQTprIQAgA0EBayEDDAELC0EAIQAMAQsDQCAEUA0BIABBAWohACAEQgJ/IQQMAAsACyACQUBrJAAgAAuHAQEDfyMAQYACayIBJAAgABCwASABIAAQXiABQYABaiICQTgQ0AEaIAFBATYCuAEgAUHAAWpBOBDQARogAUH4AWpBATYCACABIABBgAFqIgMQmgEgARA2IAIgARCZASACIAMQmgEgAyABEJkBIAMgABCaASAAIAIQmQEgABCwASABQYACaiQAC30CBH4BfyABQT9xrSECQTogAWtBP3GtIQRBACEBIAApAwAiBSEDA38gAUEwRgR/IAAgACkDMCAChzcDMCAFQn8gAoZCf4WDpwUgACABaiIGIAMgAocgBkEIaikDACIDIASGQv//////////A4OENwMAIAFBCGohAQwBCwsaC2kBBH8jAEHAAWsiASQAIAEgABCQASABQUBrIgIgABCQASABQYABaiIDIABBQGsiBBCQASABIAQQdyACIAAQdyACEEIgBCACEEogAxBDIAAgAxB3IAEQQiAAEEIgACABEEogAUHAAWokAAuCAQIBfwF+IABB8AAQ0AEhAANAIAJBOEYEQAJAIAAgASkDMCIDQjqHNwM4IAAgA0L//////////wODNwMwIABBQGshAEEAIQIDQCACQTBGDQEgACACakIANwMAIAJBCGohAgwACwALBSAAIAJqIAEgAmopAwA3AwAgAkEIaiECDAELCwtuAQZ+IAAgA0L/////D4MiBSABQv////8PgyIGfiIHIAUgAUIgiCIIfiIJIAYgA0IgiCIGfnwiBUIghnwiCjcDACAAIAcgClatIAYgCH4gBSAJVK1CIIYgBUIgiIR8fCABIAR+IAIgA358fDcDCAtqAgF/BX4gASkDCCAAKQMAhSIGQgGGQgGHIQdBACACa6whCAN+IANBOEYEfiAFBSAAIANqIgIgAikDACIEIAaFIAEgA2opAwAgBIUgCIOFIgQgB4U3AwAgBCAFhSEFIANBCGohAwwBCwsaC18CAX8EfkIBIQNBMCECA38gAkF4RgR/IARCAYYgA3ynQQFrBSABIAJqKQMAIgUgACACaikDACIGfUI6hyADgyAEhCEEIAJBCGshAiAFIAaFQgF9QjqHIAODIQMMAQsLC2kBBH8jAEGAAmsiAiQAIAIgARBeIAJBgAFqIgMgARBeIAIQLSADIAIQESAAIAMQmAEgAEGAAmoiBCADEJgBIABBgARqIgUgAxCYASAEIAEQpgEgBSACEKYBIABBBTYCgAYgAkGAAmokAAtiAQJ/IwBBQGoiAiQAIAAQQiACIAAQkAECQCABBEAgACABEK4BDAELIAAQOgtBACEBA0AgA0UEQCAAEExBASABQQFqIAFBAUYiAxshAQwBCwsgACACEEogABAeIAJBQGskAAtnAQJ/IwBBQGoiAyQAAkAgASABQR91IgJqIAJzIgIgACgCOGxBgICAEE4EQCADIAIQOSAAIAMQSgwBCyAAIAIQKRogACAAKAI4IAJsNgI4CyABQQBIBEAgABBDIAAQQgsgA0FAayQAC2cAIABBAXYgAHIiAEECdiAAciIAQQR2IAByIgBBCHYgAHIiAEEQdiAAciIAIABBAXZB1arVqgVxayIAQQJ2QbPmzJkDcSAAQbPmzJkDcWoiAEEEdiAAakGPnrz4AHFBgYKECGxBGHYLYQEDfyMAQYABayIBJAAgASAAEJABIAFBQGsiAkE4ENABGiABQQE2AnggASAAQUBrIgMQdyABEEMgAiABEK4BIAIgAxB3IAMgARCuASADIAAQdyAAIAIQrgEgAUGAAWokAAtVAgJ/AX4jAEHwAGsiASQAIAFBwLLAABBJIAApAwAhAyABQThqIgIgABBdIABBARAsIAIgARBgIAIQQiACQQEQLCAAIAIgA0ICgacQMCABQfAAaiQAC5gBAQZ/IwBBwAFrIgMkACAAIAEQXiAAEC0gA0GIAWoiBkHop8AAEEkjAEFAaiIEJAAgA0EIaiICQTgQ0AEiBUEBNgI4IAVBQGtBOBDQASAFQfgAakEBNgIAIAQgBhCOASAFIAQQrgEQwQEgBEFAayQAIAIQqQEgAhB8IAIQqQEgACABEBEgACACEJoBIAAQtQEgA0HAAWokAAtZAQJ/IwBBQGoiAyQAIABBOBDQASIAQQE2AjgCQCABQQBOBEAgACABEJMBDAELIANBCGoiAkHAssAAEEkgAiABEJMBIAIQQiAAIAIQagsgABBUIANBQGskAAu9CAEKfyMAQYABayIHJAAgB0EIaiIDQcCywAAQSSADQQEQlAECQAJAA0AgAUEwRgRAIANBMGogAykDMEIBhzcDACADQThqIQEDQCACRQ0EIAFCADcDACACQQFrIQIgAUEIaiEBDAALAAsgAUE4Rg0BIAFBOEcEQCABIANqIAEgA2oiBEEIaikDAEI5hkL//////////wODIAQpAwBCAYeENwMAIAVBAWohBSABQQhqIQEMAQsLQQdBB0GEm8AAEDsACyAFQQdB9JrAABA7AAsgA0EBEJQBIANBARAsIAdBQGshBUEAIQIjAEGgCmsiASQAIAFBOBDQASIBQUBrQTgQ0AEhBiABQYABakE4ENABGiABQcABakE4ENABGiABQYACakE4ENABGiABQcACakE4ENABGiABQYADakE4ENABGiABQcADakE4ENABGiABQYAEakE4ENABGiABQcAEakE4ENABGiABQYAFakE4ENABGiABQcAFakE4ENABGiABQYAGakE4ENABGiABQcAGakE4ENABGiABQYAHakE4ENABGiABQcAHakE4ENABGiABQfgHakEBNgIAIAFBuAdqQQE2AgAgAUH4BmpBATYCACABQbgGakEBNgIAIAFB+AVqQQE2AgAgAUG4BWpBATYCACABQfgEakEBNgIAIAFBuARqQQE2AgAgAUH4A2pBATYCACABQbgDakEBNgIAIAFB+AJqQQE2AgAgAUG4AmpBATYCACABQfgBakEBNgIAIAFBuAFqQQE2AgAgAUH4AGpBATYCACABQQE2AjggAUGBCGpB5wAQ0AEaIAFB6AhqIgQgABCQASAEEEIgAUGoCWoiBCADEF0gBBBCIAQQKkEDaiIIQQJ2IgNBAWohCQJAA0AgAiAJRgRAIAEQygEgBiABQegIahCuASABQeAJakE4ENABGiABQQE2ApgKQYB5IQIMAgsgAUGoCWoiBCAEQQQQjwEiChCUASAEEEIgAkHnAEcEQCABQYEIaiACaiAKOgAAIAFBqAlqQQQQLCACQQFqIQIMAQsLQecAQecAQaC0wAAQOwALA0AgAgRAIAFB4AlqIgQgASACaiIGQcAHahCuASAGQYAIaiIGIAQQrgEgBiABQegIahBKIAJBQGshAgwBCwsCQAJAAkACQCAIQZwDSQRAIAFBgQhqIANqLAAAIgJBEE8NASAFIAEgAkEGdGoQkAEgA0EBayICQeYASyEEA0AgAkF/Rg0DIAUQTCAFEEwgBRBMIAUQTCAEDQQgAUGBCGogAmotAAAiA0EQSQRAIAUgASADQQZ0ahBKIAJBAWshAgwBCwsgA0EYdEEYdUEQQeC0wAAQOwALIANB5wBBsLTAABA7AAsgAkEQQcC0wAAQOwALIAUQHiABQaAKaiQADAELIAJB5wBB0LTAABA7AAsgACAFEK4BIAdBgAFqJAALbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYCACADQSxqQQE2AgAgA0ICNwIMIANB2LjAADYCCCADQQE2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEGYAC2UBAn8gACAAKAIAIgJBCGoiAzYCACAAIAJBA3ZBPHFqQShqIgIgAUH/AXEgAigCAEEIdHI2AgACQAJAIANFBEAgAEEANgIAIAAgACgCBEEBajYCBAwBCyADQf8DcQ0BCyAAEA8LC1wAIABBOBDQASIAQQE2AjggAEFAa0E4ENABGiAAQfgAakEBNgIAIABBgAFqEFEgAEGAAmpBOBDQARogAEG4AmpBATYCACAAQcACakE4ENABGiAAQfgCakEBNgIAC1sBA38jAEGAAWsiASQAIAAQqQEgASAAEJABIAFBQGsiAiAAQUBrIgMQkAEgARBMIAIQTCABIAIQdyABQQAQMyAAIAEQSiABEEMgARBCIAMgARBKIAFBgAFqJAALYQEBfyMAQYACayIDJAAgABA9IAAgARCZASAAQYABaiIBIAIQmQEgAEGAAmoQtwEgABCpASADIAAQOCADQYABaiICIAEQXiACEC0gAiADEHpFBEAgABCbAQsgA0GAAmokAAtUAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqIAJBCGoQDCACQSBqJAALZwAjAEEwayIBJABBpLvAAC0AAARAIAFBHGpBATYCACABQgI3AgwgAUGQtsAANgIIIAFBATYCJCABIAA2AiwgASABQSBqNgIYIAEgAUEsajYCICABQQhqQbi2wAAQZgALIAFBMGokAAtiAgF+An8gACkDACEBA34gACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkEoRgR+IAAgACkDMCABfCIBNwMwIAFCJIcFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLGgt8AQV/IwBBQGoiAyQAIANBCGoiAkHAssAAEEkgAiAAKAI4QQFrEDUiBBAoA0AgAUE4RwRAIAAgAWoiBSABIAJqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAEEBIARBAWp0IgI2AjggAkH///8PSgRAIAAQHgsgA0FAayQAC3sBAn8gAEEoaiECA0AgAUGAAkYEQCAAQufMp9DW0Ouzu383AgggAEIANwIAIABBIGpCq7OP/JGjs/DbADcCACAAQRhqQv+kuYjFkdqCm383AgAgAEEQakLy5rvjo6f9p6V/NwIABSABIAJqQQA2AgAgAUEEaiEBDAELCwtUACAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQARogAEH4AGpBATYCACAAQYABakE4ENABGiAAQbgBakEBNgIAIABBwAFqQTgQ0AEaIABB+AFqQQE2AgALWAECfyMAQUBqIgEkAAJAIAAQhgENACABQQEQOSAAQYABaiICIAEQWA0AIAJBABAzIAAgAhBKIAAQHiAAQUBrIgAgAhBKIAAQHiACIAEQrgELIAFBQGskAAtZAQJ/IwBBgAFrIgEkAAJAIAAQigENACABEFEgAEGAAmoiAiABEHoNACACED4gACACEBEgABC1ASAAQYABaiIAIAIQESAAELUBIAIgARCZAQsgAUGAAWokAAtbAgF+An8gACkDACEBA0AgACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkHgAEYEQCAAIAApA2ggAXw3A2gFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLC08BAX8gAEE4ENABGgJAA0AgAkEHRwRAIAJBB0YNAiAAIAEpAwA3AwAgAEEIaiEAIAFBCGohASACQQFqIQIMAQsLDwtBB0EHQeSawAAQOwALVAECfyMAQbABayICJAAgATQCOCAANAI4fkL///8PVQRAIAAQHgsgAkEIaiIDIAAgARAFIAJB+ABqIgEgAxBrIAAgARBqIABBAjYCOCACQbABaiQAC1EBAn8jAEFAaiIDJAAgAEE4ENABIgBBATYCOCAAQUBrQTgQ0AEgAEH4AGpBATYCACADIAEQjgEgACADEK4BIAMgAhCOASADEK4BIANBQGskAAvwDAIRfwh+IwBBsAFrIg8kACAANAI4IhIgEn5C////D1YEQCAAEB4LIwBB0AFrIgEkACAPQQhqIgZBCGpB0AAQ0AEaIAFBwAFqIAApAwAiFyAXQj+HIhYgFyAWEC8gBiABKQPAASISQv//////////A4M3AwAgAUHIAWopAwAiFUIGhiASQjqIhCETIBVCOoghGCAAQQhqIgwhDSAAIQlBASEKQQEhBwJAA0AgCkEERgRAIABBGGohCiAAQRBqIQkgAEEoaiEMIAApAzAhF0EHIQUgAUHIAGohCwNAIAVBC0kEQCABQUBrIAVBA3QiCCAAakEwaykDACISIBJCP4cgFyAXQj+HIhYQLyAFQQFqIg1BAXYhByALKQMAIRUgASkDQCESIAkhAiAMIQQgBUEFayIOIQMDQCADIAdJBEAgASACKQMAIhQgFEI/hyAEKQMAIhQgFEI/hxAvIAEpAwAiFCASfCISIBRUrSABQQhqKQMAIBV8fCEVIAJBCGohAiAEQQhrIQQgA0EBaiEDDAELCyAGIAhqIBJCAYYiFCATfCITQv//////////A4M3AwAgAUEwaiAAIA5BA3RqKQMAIhkgGUI/hyAXIBYQLyATIBRU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aikDADcDACACQQhqIQIMAQsLC4QJAg1/Cn4jAEFAaiILJAAgC0EIaiIJQcCywAAQSSMAQZACayICJAAgAEEwENABIQogAkHoAGpB8AAQ0AEaIAJB4AFqQTAQ0AEaIAoQcSACIAEiDCkDACIQQv3/8//P///5AX5C//////////8DgyISNwPYASACQdgAaiASQgAgCSkDACIXIBdCP4ciGBAvIBAgAikDWCIPfCITIA9UrSACQeAAaikDACAQQj+HfHwiEEI6hyABKQMIIg9CP4d8IA8gEEIGhiATQjqIhCITfCIQIBNUrXwhD0EBIQBCACETAkACQANAAkAgAEEHRgRAQQYhB0EAIQhBByEADAELIABBAXYiAUEBaiEGIAggAWshAyABQQN0IgFBCGohBCAHIAFrIQUgAkHIAGogCSAAQQN0Ig1qKQMAIhUgFUI/hyIWIBJCABAvIAJB0ABqKQMAIBAgECATfCIRVq0gDyAUfHx8IBEgAikDSHwiDyARVK18IRAgAEEBaiEBA0AgACAGTQRAIAJB2AFqIA1qIA9C/f/z/8////kBfkL//////////wODIhE3AwAgAkE4aiARQgAgFyAYEC8gAkEoaiARQgAgFSAWEC8gAkHoAGogAEEEdGoiACACQTBqKQMAIhE3AwggACACKQMoIhU3AwAgDyACKQM4IhZ8Ig8gFlStIAJBQGspAwAgEHx8IhBCOocgDCABQQN0aikDACIWQj+HfCAWIBBCBoYgD0I6iIQiD3wiECAPVK18IQ8gEyAVfCITIBVUrSARIBR8fCEUIAdBCGohByAIQQFqIQggASEADAMLIANBB08NAyACQRhqIAQgCWopAwAgBSAJaikDAH0iESARQj+HIAJB2AFqIg4gBWopAwAgBCAOaikDAH0iESARQj+HEC8gAikDGCIRIA98Ig8gEVStIAJBIGopAwAgEHx8IRAgBkEBaiEGIARBCGohBCAFQQhrIQUgA0EBayEDDAALAAsLA0ACQAJAIABBDUcEQCAHIABBAXYiBmshAyAIIAZBA3QiAWshBCABQQhqIQUgDyAUfCAQIBN8Ig8gEFStfCEQIABBAWohAQNAIAZBBUsNAyADQQdPDQIgAkEIaiAFIAlqKQMAIAQgCWpBMGopAwB9IhIgEkI/hyACIARqQYgCaikDACACQdgBaiAFaikDAH0iEiASQj+HEC8gAikDCCISIA98Ig8gElStIAJBEGopAwAgEHx8IRAgBkEBaiEGIARBCGshBCADQQFrIQMgBUEIaiEFDAALAAsgCiAQQv//////////A4M3AzAgAkGQAmokAAwECyADQQdBpJzAABA7AAsgAEEDdCAKakE4ayAPQv//////////A4M3AwAgEEI6hyAMIAFBA3RqKQMAIhJCP4d8IBIgEEIGhiAPQjqIhCIPfCIQIA9UrXwhDyAUIABBBHQgAmpBCGoiAEEIaikDAH0gEyAAKQMAIhJUrX0hFCAIQQhqIQggB0EBaiEHIBMgEn0hEyABIQAMAAsACyADQQdBlJzAABA7AAsgC0FAayQACy4BAX8jAEGAAWsiASQAIAAQRSABEFEgACABEJkBIABBgAFqELYBIAFBgAFqJAALMwAgACABEJYBIABBgAJqIAFBgAJqEJYBIABBgARqIAFBgARqEJYBIAAgASgCgAY2AoAGCygAIAAgASACEHIgAEFAayABQUBrIAIQciAAQYABaiABQYABaiACEHILLQAgACABIAIQjQEgAEGAAWogAUGAAWogAhCNASAAQYACaiABQYACaiACEI0BCycBAn8jAEFAaiICJAAgAkEIaiIDIAEQvgEgACADEI4BIAJBQGskAAsiAQF/A0AgAUE4RwRAIAAgAWpCADcDACABQQhqIQEMAQsLCyUAIAAgASACEDAgAEEAIAJrIAAoAjgiACABKAI4c3EgAHM2AjgLJwAgACAAKAIEQQFxIAFyQQJyNgIEIAAgAWoiACAAKAIEQQFyNgIECyMAA0AgAgRAIAAgAS0AABA8IAJBAWshAiABQQFqIQEMAQsLCywAIAAQiwEgACABEJYBIABBgAJqIAIQlgEgAEGABGogAxCWASAAQQU2AoAGCyMBAX8jAEFAaiIBJAAgASAAEJABIAEQHiABEFcgAUFAayQACykAIAAgARBgIAAgACgCOCABKAI4aiIBNgI4IAFB////D0oEQCAAEB4LCyUAIAAgARCuASAAQUBrIAFBQGsQrgEgAEGAAWogAUGAAWoQrgELKAEBfyMAQYACayICJAAgAiABEIwBIAIQKyAAIAIQlwEgAkGAAmokAAscAQF/IAAgARBYBH8gAEFAayABQUBrEFgFQQALCycBAX8jAEGAAWsiAiQAIAIg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DCELDQALCyAMpyICQeMASwRAIABBAmsiACAGQQlqaiAMpyICIAJB//8DcUHkAG4iAkHkAGxrQf//A3FBAXRB6LjAAGovAAA7AAALAkAgAkEKTwRAIABBAmsiACAGQQlqaiACQQF0Qei4wABqLwAAOwAADAELIABBAWsiACAGQQlqaiACQTBqOgAACwJ/IAZBCWogAGohCEErQYCAxAAgASgCACIDQQFxIgIbIQQgAkEnIABrIglqIQJBlLjAAEEAIANBBHEbIQUCQAJAIAEoAghFBEBBASEAIAEgBCAFEFINAQwCCwJAAkACQAJAIAIgAUEMaigCACIDSQRAIAEtAABBCHENBEEAIQAgAyACayICIQNBASABLQAgIgcgB0EDRhtBA3FBAWsOAgECAwtBASEAIAEgBCAFEFINBAwFC0EAIQMgAiEADAELIAJBAXYhACACQQFqQQF2IQMLIABBAWohACABQRxqKAIAIQcgASgCBCECIAEoAhghCgJAA0AgAEEBayIARQ0BIAogAiAHKAIQEQQARQ0AC0EBDAQLQQEhACACQYCAxABGDQEgASAEIAUQUg0BIAEoAhggCCAJIAEoAhwoAgwRBQANASABKAIcIQQgASgCGCEBQQAhAAJ/A0AgAyAAIANGDQEaIABBAWohACABIAIgBCgCEBEEAEUNAAsgAEEBawsgA0khAAwBCyABKAIEIQcgAUEwNgIEIAEtACAhCkEBIQAgAUEBOgAgIAEgBCAFEFINAEEAIQAgAyACayICIQMCQAJAAkBBASABLQAgIgQgBEEDRhtBA3FBAWsOAgABAgtBACEDIAIhAAwBCyACQQF2IQAgAkEBakEBdiEDCyAAQQFqIQAgAUEcaigCACECIAEoAgQhBCABKAIYIQUCQANAIABBAWsiAEUNASAFIAQgAigCEBEEAEUNAAtBAQwDC0EBIQAgBEGAgMQARg0AIAEoAhggCCAJIAEoAhwoAgwRBQANACABKAIcIQAgASgCGCEFQQAhAgJAA0AgAiADRg0BIAJBAWohAiAFIAQgACgCEBEEAEUNAAtBASEAIAJBAWsgA0kNAQsgASAKOgAgIAEgBzYCBEEADAILIAAMAQsgASgCGCAIIAkgAUEcaigCACgCDBEFAAsgBkEwaiQACwsAIAAQNiAAELABCysCAX8BfkIBIQIDQCAAIAFq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AAANAEHgs8AAC8EHYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAAAAAABhdHRlbXB0IHRvIGRpdmlkZSB3aXRoIG92ZXJmbG93ALAZEAASAAAADAIAAA0AAACwGRAAEgAAABgCAAAmAAAAsBkQABIAAAAYAgAAIwAAALAZEAASAAAAHgIAABcAAACwGRAAEgAAAB4CAAAUAAAAqqr//////gHu//9UrP//AupBYg9rDyoBw5z9ShTOEwJLd2TXrEtDAu3pxpKm+V8Cox4RoAEAAAADAAAABAAAAAQAAAAEAAAABQAAAAYAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlbWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAoAAOsaEAAVAAAAABsQAA4AAABsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnMgGxAAGAAAAEkBAAAJAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5yc0gbEAAcAAAARgIAAB8AAABIGxAAHAAAAEcCAAAeAAAABwAAAAwAAAAEAAAACAAAAAMAAAAIAAAABAAAAAkAAAAKAAAAEAAAAAQAAAALAAAADAAAAAMAAAAIAAAABAAAAA0AAAAOAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93AAAA6BsQABEAAADMGxAAHAAAAAUCAAAFAAAAEAAAAAAAAAABAAAAEQAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAAkHBAAIAAAAEQcEAASAAAAMDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5yc3JhbmdlIGVuZCBpbmRleCAAAABxHRAAEAAAADAdEAAiAAAAUh0QAB8AAABJAAAABQB7CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS42MS4wIChmZTViMTNkNjggMjAyMi0wNS0xOCkGd2FscnVzBjAuMTkuMAx3YXNtLWJpbmRnZW4SMC4yLjgxICgwNjJhYTVmNzAp";
let Ve;
const mo = na(So);
function Do() {
  return Ve.bls_init();
}
let Jt = null;
function _o() {
  return (
    (Jt === null || Jt.buffer !== Ve.memory.buffer) &&
      (Jt = new Uint8Array(Ve.memory.buffer)),
    Jt
  );
}
function mr(t, A) {
  const e = A(t.length * 1);
  return _o().set(t, e / 1), [e, t.length];
}
function No(t, A, e) {
  const [r, s] = mr(t, Ve.__wbindgen_malloc),
    [c, f] = mr(A, Ve.__wbindgen_malloc),
    [h, S] = mr(e, Ve.__wbindgen_malloc);
  return Ve.bls_verify(r, s, c, f, h, S);
}
async function bo(t, A) {
  if (typeof Response == "function" && t instanceof Response) {
    const e = await t.arrayBuffer();
    return await WebAssembly.instantiate(e, A);
  } else {
    const e = await WebAssembly.instantiate(t, A);
    return e instanceof WebAssembly.Instance ? { instance: e, module: t } : e;
  }
}
async function aa() {
  const t = {},
    { instance: A, module: e } = await bo(mo, t);
  return (Ve = A.exports), (aa.__wbindgen_wasm_module = e), Ve;
}
let Dr;
async function Fo(t, A, e) {
  if (!Dr) {
    if ((await aa(), Do() !== 0)) throw new Error("Cannot initialize BLS");
    Dr = (r, s, c) => No(s, c, r) === 0;
  }
  return Dr(t, A, e);
}
const Ro = (t) => Ce(new St(t)),
  vo = (t) => {
    const A = Ro(t);
    return new Date(Number(A) / 1e6);
  };
class Ct extends nt {
  constructor(A) {
    super(`Invalid certificate: ${A}`);
  }
}
function sa(t, A) {
  if (t.byteLength !== A.byteLength) return !1;
  const e = new Uint8Array(t),
    r = new Uint8Array(A);
  for (let s = 0; s < e.length; s++) if (e[s] !== r[s]) return !1;
  return !0;
}
class Ar {
  constructor(A, e, r, s, c = 5) {
    (this._rootKey = e),
      (this._canisterId = r),
      (this._blsVerify = s),
      (this._maxAgeInMinutes = c),
      (this.cert = lt(new Uint8Array(A)));
  }
  static async create(A) {
    let e = A.blsVerify;
    e || (e = Fo);
    const r = new Ar(
      A.certificate,
      A.rootKey,
      A.canisterId,
      e,
      A.maxAgeInMinutes
    );
    return await r.verify(), r;
  }
  lookup(A) {
    return oa(A, this.cert.tree);
  }
  async verify() {
    const A = await Vt(this.cert.tree),
      e = await this._checkDelegationAndGetKey(this.cert.delegation),
      r = this.cert.signature,
      s = To(e),
      c = Ke(Nt("ic-state-root"), A);
    let f = !1;
    const h = this.lookup(["time"]);
    if (!h) throw new Ct("Certificate does not contain a time");
    const S = 5 * 60 * 1e3,
      D = this._maxAgeInMinutes * 60 * 1e3,
      Y = Date.now(),
      M = Y - D,
      z = Y + S,
      T = vo(h);
    if (T.getTime() < M)
      throw new Ct(
        `Certificate is signed more than ${this._maxAgeInMinutes} minutes in the past. Certificate time: ` +
          T.toISOString() +
          " Current time: " +
          new Date(Y).toISOString()
      );
    if (T.getTime() > z)
      throw new Ct(
        "Certificate is signed more than 5 minutes in the future. Certificate time: " +
          T.toISOString() +
          " Current time: " +
          new Date(Y).toISOString()
      );
    try {
      f = await this._blsVerify(
        new Uint8Array(s),
        new Uint8Array(r),
        new Uint8Array(c)
      );
    } catch {
      f = !1;
    }
    if (!f) throw new Ct("Signature verification failed");
  }
  async _checkDelegationAndGetKey(A) {
    if (!A) return this._rootKey;
    const e = await Ar.create({
        certificate: A.certificate,
        rootKey: this._rootKey,
        canisterId: this._canisterId,
        blsVerify: this._blsVerify,
        maxAgeInMinutes: 60 * 24 * 30,
      }),
      r = e.lookup(["subnet", A.subnet_id, "canister_ranges"]);
    if (!r)
      throw new Ct(
        `Could not find canister ranges for subnet 0x${It(A.subnet_id)}`
      );
    if (
      !lt(r)
        .map((S) => [XA.fromUint8Array(S[0]), XA.fromUint8Array(S[1])])
        .some((S) => S[0].ltEq(this._canisterId) && S[1].gtEq(this._canisterId))
    )
      throw new Ct(
        `Canister ${
          this._canisterId
        } not in range of delegations for subnet 0x${It(A.subnet_id)}`
      );
    const h = e.lookup(["subnet", A.subnet_id, "public_key"]);
    if (!h)
      throw new Error(
        `Could not find subnet key for subnet 0x${It(A.subnet_id)}`
      );
    return h;
  }
}
const _t = $t(
    "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100"
  ),
  Go = 96;
function To(t) {
  const A = _t.byteLength + Go;
  if (t.byteLength !== A)
    throw new TypeError(`BLS DER-encoded public key must be ${A} bytes long`);
  const e = t.slice(0, _t.byteLength);
  if (!sa(e, _t))
    throw new TypeError(
      `BLS DER-encoded public key is invalid. Expect the following prefix: ${_t}, but get ${e}`
    );
  return t.slice(_t.byteLength);
}
async function Vt(t) {
  switch (t[0]) {
    case 0:
      return ke(Nt("ic-hashtree-empty"));
    case 4:
      return t[1];
    case 3:
      return ke(Ke(Nt("ic-hashtree-leaf"), t[1]));
    case 2:
      return ke(Ke(Nt("ic-hashtree-labeled"), t[1], await Vt(t[2])));
    case 1:
      return ke(Ke(Nt("ic-hashtree-fork"), await Vt(t[1]), await Vt(t[2])));
    default:
      throw new Error("unreachable");
  }
}
function Nt(t) {
  const A = new Uint8Array([t.length]),
    e = new TextEncoder().encode(t);
  return Ke(A, e);
}
function oa(t, A) {
  if (t.length === 0)
    switch (A[0]) {
      case 3:
        return new Uint8Array(A[1]).buffer;
      default:
        return;
    }
  const e = typeof t[0] == "string" ? new TextEncoder().encode(t[0]) : t[0],
    r = Mo(e, Vr(A));
  if (r) return oa(t.slice(1), r);
}
function Vr(t) {
  switch (t[0]) {
    case 0:
      return [];
    case 1:
      return Vr(t[1]).concat(Vr(t[2]));
    default:
      return [t];
  }
}
function Mo(t, A) {
  if (A.length !== 0) {
    for (const e of A)
      if (e[0] === 2) {
        const r = e[1];
        if (sa(t, r)) return e[2];
      }
  }
}
const Uo = 5 * 60 * 1e3;
function ko() {
  return Ho(Yo(Lo(), 1e3), Oo(1e3, 1.2), qo(Uo));
}
function Lo() {
  let t = !0;
  return async () => (t ? ((t = !1), !0) : !1);
}
function Yo(t, A) {
  return async (e, r, s) => {
    if (await t(e, r, s)) return new Promise((c) => setTimeout(c, A));
  };
}
function qo(t) {
  const A = Date.now() + t;
  return async (e, r, s) => {
    if (Date.now() > A)
      throw new Error(`Request timed out after ${t} msec:
  Request ID: ${It(r)}
  Request status: ${s}
`);
  };
}
function Oo(t, A) {
  let e = t;
  return () =>
    new Promise((r) =>
      setTimeout(() => {
        (e *= A), r();
      }, e)
    );
}
function Ho(...t) {
  return async (A, e, r) => {
    for (const s of t) await s(A, e, r);
  };
}
async function ga(t, A, e, r, s, c) {
  var f;
  const h = [new TextEncoder().encode("request_status"), e],
    S =
      s ??
      (await ((f = t.createReadStateRequest) === null || f === void 0
        ? void 0
        : f.call(t, { paths: [h] }))),
    D = await t.readState(A, { paths: [h] }, void 0, S);
  if (t.rootKey == null)
    throw new Error("Agent root key not initialized before polling");
  const Y = await Ar.create({
      certificate: D.certificate,
      rootKey: t.rootKey,
      canisterId: A,
      blsVerify: c,
    }),
    M = Y.lookup([...h, new TextEncoder().encode("status")]);
  let z;
  switch (
    (typeof M > "u" ? (z = We.Unknown) : (z = new TextDecoder().decode(M)), z)
  ) {
    case We.Replied:
      return Y.lookup([...h, "reply"]);
    case We.Received:
    case We.Unknown:
    case We.Processing:
      return await r(A, e, z), ga(t, A, e, r, S);
    case We.Rejected: {
      const T = new Uint8Array(Y.lookup([...h, "reject_code"]))[0],
        nA = new TextDecoder().decode(Y.lookup([...h, "reject_message"]));
      throw new Error(`Call was rejected:
  Request ID: ${It(e)}
  Reject code: ${T}
  Reject text: ${nA}
`);
    }
    case We.Done:
      throw new Error(`Call was marked as done but we never saw the reply:
  Request ID: ${It(e)}
`);
  }
  throw new Error("unreachable");
}
const Jo = ({ IDL: t }) => {
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
    s = t.Vec(t.Nat8);
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
          wasm_module: s,
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
class Ia extends nt {
  constructor(A, e, r, s) {
    super(
      [
        "Call failed:",
        `  Canister: ${A.toText()}`,
        `  Method: ${e} (${r})`,
        ...Object.getOwnPropertyNames(s).map(
          (c) => `  "${c}": ${JSON.stringify(s[c])}`
        ),
      ].join(`
`)
    ),
      (this.canisterId = A),
      (this.methodName = e),
      (this.type = r),
      (this.props = s);
  }
}
class Ko extends Ia {
  constructor(A, e, r) {
    var s;
    super(A, e, "query", {
      Status: r.status,
      Code:
        (s = Mr[r.reject_code]) !== null && s !== void 0
          ? s
          : `Unknown Code "${r.reject_code}"`,
      Message: r.reject_message,
    }),
      (this.result = r);
  }
}
class Po extends Ia {
  constructor(A, e, r, s) {
    super(
      A,
      e,
      "update",
      Object.assign(
        { "Request ID": It(r) },
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
      (this.requestId = r),
      (this.response = s);
  }
}
var zr;
(function (t) {
  (t.Install = "install"), (t.Reinstall = "reinstall"), (t.Upgrade = "upgrade");
})(zr || (zr = {}));
const Fe = Symbol.for("ic-agent-metadata");
class Bi {
  constructor(A) {
    this[Fe] = Object.freeze(A);
  }
  static agentOf(A) {
    return A[Fe].config.agent;
  }
  static interfaceOf(A) {
    return A[Fe].service;
  }
  static canisterIdOf(A) {
    return XA.from(A[Fe].config.canisterId);
  }
  static async install(A, e) {
    const r = A.mode === void 0 ? zr.Install : A.mode,
      s = A.arg ? [...new Uint8Array(A.arg)] : [],
      c = [...new Uint8Array(A.module)],
      f =
        typeof e.canisterId == "string"
          ? XA.fromText(e.canisterId)
          : e.canisterId;
    await _i(e).install_code({
      mode: { [r]: null },
      arg: s,
      wasm_module: c,
      canister_id: f,
    });
  }
  static async createCanister(A) {
    const { canister_id: e } = await _i(
      A || {}
    ).provisional_create_canister_with_cycles({ amount: [], settings: [] });
    return e;
  }
  static async createAndInstallCanister(A, e, r) {
    const s = await this.createCanister(r);
    return (
      await this.install(
        Object.assign({}, e),
        Object.assign(Object.assign({}, r), { canisterId: s })
      ),
      this.createActor(
        A,
        Object.assign(Object.assign({}, r), { canisterId: s })
      )
    );
  }
  static createActorClass(A, e) {
    const r = A({ IDL: ss });
    class s extends Bi {
      constructor(f) {
        if (!f.canisterId)
          throw new nt(
            `Canister ID is required, but recieved ${typeof f.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in {"DFX_VERSION":"0.14.4","DFX_NETWORK":"ic","CANISTER_CANDID_PATH_OpenFPL_backend":"/home/james/OpenFPL/.dfx/ic/canisters/OpenFPL_backend/OpenFPL_backend.did","CANISTER_CANDID_PATH_OPENFPL_BACKEND":"/home/james/OpenFPL/.dfx/ic/canisters/OpenFPL_backend/OpenFPL_backend.did","CANISTER_CANDID_PATH_player_canister":"/home/james/OpenFPL/.dfx/ic/canisters/player_canister/player_canister.did","CANISTER_CANDID_PATH_PLAYER_CANISTER":"/home/james/OpenFPL/.dfx/ic/canisters/player_canister/player_canister.did","TOKEN_CANISTER_CANISTER_ID":"hwd4h-eyaaa-aaaal-qb6ra-cai","CANISTER_ID_TOKEN_CANISTER":"hwd4h-eyaaa-aaaal-qb6ra-cai","CANISTER_ID_token_canister":"hwd4h-eyaaa-aaaal-qb6ra-cai","PLAYER_CANISTER_CANISTER_ID":"pec6o-uqaaa-aaaal-qb7eq-cai","CANISTER_ID_PLAYER_CANISTER":"pec6o-uqaaa-aaaal-qb7eq-cai","CANISTER_ID_player_canister":"pec6o-uqaaa-aaaal-qb7eq-cai","NNS_SNS_WASM_CANISTER_ID":"qaa6y-5yaaa-aaaaa-aaafa-cai","CANISTER_ID_NNS_SNS_WASM":"qaa6y-5yaaa-aaaaa-aaafa-cai","CANISTER_ID_nns_sns_wasm":"qaa6y-5yaaa-aaaaa-aaafa-cai","NNS_ROOT_CANISTER_ID":"r7inp-6aaaa-aaaaa-aaabq-cai","CANISTER_ID_NNS_ROOT":"r7inp-6aaaa-aaaaa-aaabq-cai","CANISTER_ID_nns_root":"r7inp-6aaaa-aaaaa-aaabq-cai","NNS_REGISTRY_CANISTER_ID":"rwlgt-iiaaa-aaaaa-aaaaa-cai","CANISTER_ID_NNS_REGISTRY":"rwlgt-iiaaa-aaaaa-aaaaa-cai","CANISTER_ID_nns_registry":"rwlgt-iiaaa-aaaaa-aaaaa-cai","NNS_LIFELINE_CANISTER_ID":"rno2w-sqaaa-aaaaa-aaacq-cai","CANISTER_ID_NNS_LIFELINE":"rno2w-sqaaa-aaaaa-aaacq-cai","CANISTER_ID_nns_lifeline":"rno2w-sqaaa-aaaaa-aaacq-cai","NNS_LEDGER_CANISTER_ID":"ryjl3-tyaaa-aaaaa-aaaba-cai","CANISTER_ID_NNS_LEDGER":"ryjl3-tyaaa-aaaaa-aaaba-cai","CANISTER_ID_nns_ledger":"ryjl3-tyaaa-aaaaa-aaaba-cai","NNS_GOVERNANCE_CANISTER_ID":"rrkah-fqaaa-aaaaa-aaaaq-cai","CANISTER_ID_NNS_GOVERNANCE":"rrkah-fqaaa-aaaaa-aaaaq-cai","CANISTER_ID_nns_governance":"rrkah-fqaaa-aaaaa-aaaaq-cai","NNS_GENESIS_TOKEN_CANISTER_ID":"renrk-eyaaa-aaaaa-aaada-cai","CANISTER_ID_NNS_GENESIS_TOKEN":"renrk-eyaaa-aaaaa-aaada-cai","CANISTER_ID_nns_genesis_token":"renrk-eyaaa-aaaaa-aaada-cai","NNS_CYCLES_MINTING_CANISTER_ID":"rkp4c-7iaaa-aaaaa-aaaca-cai","CANISTER_ID_NNS_CYCLES_MINTING":"rkp4c-7iaaa-aaaaa-aaaca-cai","CANISTER_ID_nns_cycles_minting":"rkp4c-7iaaa-aaaaa-aaaca-cai","INTERNET_IDENTITY_CANISTER_ID":"rdmx6-jaaaa-aaaaa-aaadq-cai","CANISTER_ID_INTERNET_IDENTITY":"rdmx6-jaaaa-aaaaa-aaadq-cai","CANISTER_ID_internet_identity":"rdmx6-jaaaa-aaaaa-aaadq-cai","OPENFPL_FRONTEND_CANISTER_ID":"bgpwv-eqaaa-aaaal-qb6eq-cai","CANISTER_ID_OPENFPL_FRONTEND":"bgpwv-eqaaa-aaaal-qb6eq-cai","CANISTER_ID_OpenFPL_frontend":"bgpwv-eqaaa-aaaal-qb6eq-cai","OPENFPL_BACKEND_CANISTER_ID":"bboqb-jiaaa-aaaal-qb6ea-cai","CANISTER_ID_OPENFPL_BACKEND":"bboqb-jiaaa-aaaal-qb6ea-cai","CANISTER_ID_OpenFPL_backend":"bboqb-jiaaa-aaaal-qb6ea-cai","CANISTER_ID":"bgpwv-eqaaa-aaaal-qb6eq-cai","CANISTER_CANDID_PATH":"/home/james/OpenFPL/.dfx/ic/canisters/OpenFPL_frontend/assetstorage.did","VITE_AUTH_PROVIDER_URL":"https://identity.ic0.app","LESSOPEN":"| /usr/bin/lesspipe %s","USER":"james","npm_config_user_agent":"npm/9.5.0 node/v18.15.0 linux x64 workspaces/false","GIT_ASKPASS":"/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/extensions/git/dist/askpass.sh","npm_node_execpath":"/home/james/.nvm/versions/node/v18.15.0/bin/node","SHLVL":"1","npm_config_noproxy":"","MOTD_SHOWN":"update-motd","HOME":"/home/james","TERM_PROGRAM_VERSION":"1.84.2","NVM_BIN":"/home/james/.nvm/versions/node/v18.15.0/bin","VSCODE_IPC_HOOK_CLI":"/tmp/vscode-ipc-55e74069-e243-4d5e-85c2-180e79128070.sock","npm_package_json":"/home/james/OpenFPL/package.json","NVM_INC":"/home/james/.nvm/versions/node/v18.15.0/include/node","VSCODE_GIT_ASKPASS_MAIN":"/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/extensions/git/dist/askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/node","npm_config_userconfig":"/home/james/.npmrc","npm_config_local_prefix":"/home/james/OpenFPL","COLORTERM":"truecolor","WSL_DISTRO_NAME":"Ubuntu","COLOR":"1","NVM_DIR":"/home/james/.nvm","npm_config_metrics_registry":"https://registry.npmjs.org/","LOGNAME":"james","NAME":"DESKTOP-UV8C3VI","WSL_INTEROP":"/run/WSL/12_interop","_":"/home/james/.nvm/versions/node/v18.15.0/bin/npm","npm_config_prefix":"/home/james/.nvm/versions/node/v18.15.0","TERM":"xterm-256color","npm_config_cache":"/home/james/.npm","npm_config_node_gyp":"/home/james/.nvm/versions/node/v18.15.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/james/OpenFPL/node_modules/.bin:/home/james/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/james/.nvm/versions/node/v18.15.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/bin/remote-cli:/home/james/bin:/home/james/.nvm/versions/node/v18.15.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:/mnt/c/Program Files/Microsoft/jdk-11.0.16.101-hotspot/bin:/mnt/c/Program Files (x86)/Common Files/Oracle/Java/javapath:/mnt/c/Program Files (x86)/Microsoft SDKs/Azure/CLI2/wbin:/mnt/c/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v11.0/bin:/mnt/c/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v11.0/libnvvp:/mnt/c/Program Files (x86)/Common Files/Intel/Shared Libraries/redist/intel64/compiler:/mnt/c/Windows/system32:/mnt/c/Windows:/mnt/c/Windows/System32/Wbem:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/:/mnt/c/Windows/System32/OpenSSH/:/mnt/c/Program Files (x86)/NVIDIA Corporation/PhysX/Common:/mnt/c/Program Files/NVIDIA Corporation/NVIDIA NvDLISR:/mnt/c/Program Files/Microsoft SQL Server/130/Tools/Binn/:/mnt/c/Program Files/Microsoft SQL Server/Client SDK/ODBC/170/Tools/Binn/:/mnt/c/Program Files/NVIDIA Corporation/Nsight Compute 2020.1.2/:/mnt/c/Program Files (x86)/Microsoft SQL Server/150/DTS/Binn/:/mnt/c/WINDOWS/system32:/mnt/c/WINDOWS:/mnt/c/WINDOWS/System32/Wbem:/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/:/mnt/c/WINDOWS/System32/OpenSSH/:/mnt/c/Program Files/Git LFS:/mnt/c/Program Files/Microsoft SQL Server/150/Tools/Binn/:/mnt/c/Program Files (x86)/Microsoft SQL Server/150/Tools/Binn/:/mnt/c/Program Files/Microsoft SQL Server/150/DTS/Binn/:/mnt/c/Program Files/Docker/Docker/resources/bin:/mnt/c/ProgramData/DockerDesktop/version-bin:/mnt/c/WINDOWS/system32:/mnt/c/WINDOWS:/mnt/c/WINDOWS/System32/Wbem:/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/:/mnt/c/WINDOWS/System32/OpenSSH/:/mnt/c/Program Files (x86)/ZED SDK/dependencies/freeglut_2.8/x64:/mnt/c/Program Files (x86)/ZED SDK/dependencies/glew-1.12.0/x64:/mnt/c/Program Files (x86)/ZED SDK/dependencies/opencv_3.1.0/x64:/mnt/c/Program Files (x86)/ZED SDK/bin:/mnt/c/Program Files/nodejs/:/mnt/c/Program Files/dotnet/:/mnt/c/Program Files/Git/cmd:/mnt/c/Users/james/AppData/Local/Programs/Python/Python37/Scripts/:/mnt/c/Users/james/AppData/Local/Programs/Python/Python37/:/mnt/c/Users/james/AppData/Local/Microsoft/WindowsApps:/mnt/c/Users/james/.dotnet/tools:/mnt/c/Users/james/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/c/Users/james/AppData/Local/Microsoft/WindowsApps:/mnt/c/Program Files/heroku/bin:/mnt/c/Users/james/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin:/mnt/c/Program Files/MongoDB/Server/4.4/bin/:/mnt/c/Users/james/AppData/Roaming/npm:/mnt/c/Users/james/.dotnet/tools:/snap/bin","NODE":"/home/james/.nvm/versions/node/v18.15.0/bin/node","npm_package_name":"open_fpl_frontend","LANG":"C.UTF-8","LS_COLORS":"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:","VSCODE_GIT_IPC_HANDLE":"/tmp/vscode-git-ec8aec957c.sock","TERM_PROGRAM":"vscode","npm_lifecycle_script":"vite build","SHELL":"/bin/bash","npm_package_version":"0.1.0","npm_lifecycle_event":"build","LESSCLOSE":"/usr/bin/lesspipe %s %s","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"","npm_config_globalconfig":"/home/james/.nvm/versions/node/v18.15.0/etc/npmrc","npm_config_init_module":"/home/james/.npm-init.js","PWD":"/home/james/OpenFPL","npm_execpath":"/home/james/.nvm/versions/node/v18.15.0/lib/node_modules/npm/bin/npm-cli.js","NVM_CD_FLAGS":"","XDG_DATA_DIRS":"/usr/local/share:/usr/share:/var/lib/snapd/desktop","npm_config_global_prefix":"/home/james/.nvm/versions/node/v18.15.0","npm_command":"run-script","HOSTTYPE":"x86_64","WSLENV":"VSCODE_WSL_EXT_LOCATION/up","INIT_CWD":"/home/james/OpenFPL","EDITOR":"vi","NODE_ENV":"production","VITE_OPENFPL_BACKEND_CANISTER_ID":"bkyz2-fmaaa-aaaaa-qaaaq-cai","VITE_OPENFPL_FRONTEND_CANISTER_ID":"bd3sg-teaaa-aaaaa-qaaba-cai","VITE___CANDID_UI_CANISTER_ID":"bw4dl-smaaa-aaaaa-qaacq-cai","VITE_PLAYER_CANISTER_CANISTER_ID":"be2us-64aaa-aaaaa-qaabq-cai","VITE_TOKEN_CANISTER_CANISTER_ID":"br5f7-7uaaa-aaaaa-qaaca-cai","VITE_DFX_NETWORK":"local","VITE_HOST":"http://localhost:8000"} correctly.`
          );
        const h =
          typeof f.canisterId == "string"
            ? XA.fromText(f.canisterId)
            : f.canisterId;
        super({
          config: Object.assign(Object.assign(Object.assign({}, Ba), f), {
            canisterId: h,
          }),
          service: r,
        });
        for (const [S, D] of r._fields)
          e?.httpDetails && D.annotations.push(Zr),
            (this[S] = jo(this, S, D, f.blsVerify));
      }
    }
    return s;
  }
  static createActor(A, e) {
    if (!e.canisterId)
      throw new nt(
        `Canister ID is required, but recieved ${typeof e.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in {"DFX_VERSION":"0.14.4","DFX_NETWORK":"ic","CANISTER_CANDID_PATH_OpenFPL_backend":"/home/james/OpenFPL/.dfx/ic/canisters/OpenFPL_backend/OpenFPL_backend.did","CANISTER_CANDID_PATH_OPENFPL_BACKEND":"/home/james/OpenFPL/.dfx/ic/canisters/OpenFPL_backend/OpenFPL_backend.did","CANISTER_CANDID_PATH_player_canister":"/home/james/OpenFPL/.dfx/ic/canisters/player_canister/player_canister.did","CANISTER_CANDID_PATH_PLAYER_CANISTER":"/home/james/OpenFPL/.dfx/ic/canisters/player_canister/player_canister.did","TOKEN_CANISTER_CANISTER_ID":"hwd4h-eyaaa-aaaal-qb6ra-cai","CANISTER_ID_TOKEN_CANISTER":"hwd4h-eyaaa-aaaal-qb6ra-cai","CANISTER_ID_token_canister":"hwd4h-eyaaa-aaaal-qb6ra-cai","PLAYER_CANISTER_CANISTER_ID":"pec6o-uqaaa-aaaal-qb7eq-cai","CANISTER_ID_PLAYER_CANISTER":"pec6o-uqaaa-aaaal-qb7eq-cai","CANISTER_ID_player_canister":"pec6o-uqaaa-aaaal-qb7eq-cai","NNS_SNS_WASM_CANISTER_ID":"qaa6y-5yaaa-aaaaa-aaafa-cai","CANISTER_ID_NNS_SNS_WASM":"qaa6y-5yaaa-aaaaa-aaafa-cai","CANISTER_ID_nns_sns_wasm":"qaa6y-5yaaa-aaaaa-aaafa-cai","NNS_ROOT_CANISTER_ID":"r7inp-6aaaa-aaaaa-aaabq-cai","CANISTER_ID_NNS_ROOT":"r7inp-6aaaa-aaaaa-aaabq-cai","CANISTER_ID_nns_root":"r7inp-6aaaa-aaaaa-aaabq-cai","NNS_REGISTRY_CANISTER_ID":"rwlgt-iiaaa-aaaaa-aaaaa-cai","CANISTER_ID_NNS_REGISTRY":"rwlgt-iiaaa-aaaaa-aaaaa-cai","CANISTER_ID_nns_registry":"rwlgt-iiaaa-aaaaa-aaaaa-cai","NNS_LIFELINE_CANISTER_ID":"rno2w-sqaaa-aaaaa-aaacq-cai","CANISTER_ID_NNS_LIFELINE":"rno2w-sqaaa-aaaaa-aaacq-cai","CANISTER_ID_nns_lifeline":"rno2w-sqaaa-aaaaa-aaacq-cai","NNS_LEDGER_CANISTER_ID":"ryjl3-tyaaa-aaaaa-aaaba-cai","CANISTER_ID_NNS_LEDGER":"ryjl3-tyaaa-aaaaa-aaaba-cai","CANISTER_ID_nns_ledger":"ryjl3-tyaaa-aaaaa-aaaba-cai","NNS_GOVERNANCE_CANISTER_ID":"rrkah-fqaaa-aaaaa-aaaaq-cai","CANISTER_ID_NNS_GOVERNANCE":"rrkah-fqaaa-aaaaa-aaaaq-cai","CANISTER_ID_nns_governance":"rrkah-fqaaa-aaaaa-aaaaq-cai","NNS_GENESIS_TOKEN_CANISTER_ID":"renrk-eyaaa-aaaaa-aaada-cai","CANISTER_ID_NNS_GENESIS_TOKEN":"renrk-eyaaa-aaaaa-aaada-cai","CANISTER_ID_nns_genesis_token":"renrk-eyaaa-aaaaa-aaada-cai","NNS_CYCLES_MINTING_CANISTER_ID":"rkp4c-7iaaa-aaaaa-aaaca-cai","CANISTER_ID_NNS_CYCLES_MINTING":"rkp4c-7iaaa-aaaaa-aaaca-cai","CANISTER_ID_nns_cycles_minting":"rkp4c-7iaaa-aaaaa-aaaca-cai","INTERNET_IDENTITY_CANISTER_ID":"rdmx6-jaaaa-aaaaa-aaadq-cai","CANISTER_ID_INTERNET_IDENTITY":"rdmx6-jaaaa-aaaaa-aaadq-cai","CANISTER_ID_internet_identity":"rdmx6-jaaaa-aaaaa-aaadq-cai","OPENFPL_FRONTEND_CANISTER_ID":"bgpwv-eqaaa-aaaal-qb6eq-cai","CANISTER_ID_OPENFPL_FRONTEND":"bgpwv-eqaaa-aaaal-qb6eq-cai","CANISTER_ID_OpenFPL_frontend":"bgpwv-eqaaa-aaaal-qb6eq-cai","OPENFPL_BACKEND_CANISTER_ID":"bboqb-jiaaa-aaaal-qb6ea-cai","CANISTER_ID_OPENFPL_BACKEND":"bboqb-jiaaa-aaaal-qb6ea-cai","CANISTER_ID_OpenFPL_backend":"bboqb-jiaaa-aaaal-qb6ea-cai","CANISTER_ID":"bgpwv-eqaaa-aaaal-qb6eq-cai","CANISTER_CANDID_PATH":"/home/james/OpenFPL/.dfx/ic/canisters/OpenFPL_frontend/assetstorage.did","VITE_AUTH_PROVIDER_URL":"https://identity.ic0.app","LESSOPEN":"| /usr/bin/lesspipe %s","USER":"james","npm_config_user_agent":"npm/9.5.0 node/v18.15.0 linux x64 workspaces/false","GIT_ASKPASS":"/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/extensions/git/dist/askpass.sh","npm_node_execpath":"/home/james/.nvm/versions/node/v18.15.0/bin/node","SHLVL":"1","npm_config_noproxy":"","MOTD_SHOWN":"update-motd","HOME":"/home/james","TERM_PROGRAM_VERSION":"1.84.2","NVM_BIN":"/home/james/.nvm/versions/node/v18.15.0/bin","VSCODE_IPC_HOOK_CLI":"/tmp/vscode-ipc-55e74069-e243-4d5e-85c2-180e79128070.sock","npm_package_json":"/home/james/OpenFPL/package.json","NVM_INC":"/home/james/.nvm/versions/node/v18.15.0/include/node","VSCODE_GIT_ASKPASS_MAIN":"/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/extensions/git/dist/askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/node","npm_config_userconfig":"/home/james/.npmrc","npm_config_local_prefix":"/home/james/OpenFPL","COLORTERM":"truecolor","WSL_DISTRO_NAME":"Ubuntu","COLOR":"1","NVM_DIR":"/home/james/.nvm","npm_config_metrics_registry":"https://registry.npmjs.org/","LOGNAME":"james","NAME":"DESKTOP-UV8C3VI","WSL_INTEROP":"/run/WSL/12_interop","_":"/home/james/.nvm/versions/node/v18.15.0/bin/npm","npm_config_prefix":"/home/james/.nvm/versions/node/v18.15.0","TERM":"xterm-256color","npm_config_cache":"/home/james/.npm","npm_config_node_gyp":"/home/james/.nvm/versions/node/v18.15.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/james/OpenFPL/node_modules/.bin:/home/james/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/james/.nvm/versions/node/v18.15.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/bin/remote-cli:/home/james/bin:/home/james/.nvm/versions/node/v18.15.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:/mnt/c/Program Files/Microsoft/jdk-11.0.16.101-hotspot/bin:/mnt/c/Program Files (x86)/Common Files/Oracle/Java/javapath:/mnt/c/Program Files (x86)/Microsoft SDKs/Azure/CLI2/wbin:/mnt/c/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v11.0/bin:/mnt/c/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v11.0/libnvvp:/mnt/c/Program Files (x86)/Common Files/Intel/Shared Libraries/redist/intel64/compiler:/mnt/c/Windows/system32:/mnt/c/Windows:/mnt/c/Windows/System32/Wbem:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/:/mnt/c/Windows/System32/OpenSSH/:/mnt/c/Program Files (x86)/NVIDIA Corporation/PhysX/Common:/mnt/c/Program Files/NVIDIA Corporation/NVIDIA NvDLISR:/mnt/c/Program Files/Microsoft SQL Server/130/Tools/Binn/:/mnt/c/Program Files/Microsoft SQL Server/Client SDK/ODBC/170/Tools/Binn/:/mnt/c/Program Files/NVIDIA Corporation/Nsight Compute 2020.1.2/:/mnt/c/Program Files (x86)/Microsoft SQL Server/150/DTS/Binn/:/mnt/c/WINDOWS/system32:/mnt/c/WINDOWS:/mnt/c/WINDOWS/System32/Wbem:/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/:/mnt/c/WINDOWS/System32/OpenSSH/:/mnt/c/Program Files/Git LFS:/mnt/c/Program Files/Microsoft SQL Server/150/Tools/Binn/:/mnt/c/Program Files (x86)/Microsoft SQL Server/150/Tools/Binn/:/mnt/c/Program Files/Microsoft SQL Server/150/DTS/Binn/:/mnt/c/Program Files/Docker/Docker/resources/bin:/mnt/c/ProgramData/DockerDesktop/version-bin:/mnt/c/WINDOWS/system32:/mnt/c/WINDOWS:/mnt/c/WINDOWS/System32/Wbem:/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/:/mnt/c/WINDOWS/System32/OpenSSH/:/mnt/c/Program Files (x86)/ZED SDK/dependencies/freeglut_2.8/x64:/mnt/c/Program Files (x86)/ZED SDK/dependencies/glew-1.12.0/x64:/mnt/c/Program Files (x86)/ZED SDK/dependencies/opencv_3.1.0/x64:/mnt/c/Program Files (x86)/ZED SDK/bin:/mnt/c/Program Files/nodejs/:/mnt/c/Program Files/dotnet/:/mnt/c/Program Files/Git/cmd:/mnt/c/Users/james/AppData/Local/Programs/Python/Python37/Scripts/:/mnt/c/Users/james/AppData/Local/Programs/Python/Python37/:/mnt/c/Users/james/AppData/Local/Microsoft/WindowsApps:/mnt/c/Users/james/.dotnet/tools:/mnt/c/Users/james/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/c/Users/james/AppData/Local/Microsoft/WindowsApps:/mnt/c/Program Files/heroku/bin:/mnt/c/Users/james/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin:/mnt/c/Program Files/MongoDB/Server/4.4/bin/:/mnt/c/Users/james/AppData/Roaming/npm:/mnt/c/Users/james/.dotnet/tools:/snap/bin","NODE":"/home/james/.nvm/versions/node/v18.15.0/bin/node","npm_package_name":"open_fpl_frontend","LANG":"C.UTF-8","LS_COLORS":"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:","VSCODE_GIT_IPC_HANDLE":"/tmp/vscode-git-ec8aec957c.sock","TERM_PROGRAM":"vscode","npm_lifecycle_script":"vite build","SHELL":"/bin/bash","npm_package_version":"0.1.0","npm_lifecycle_event":"build","LESSCLOSE":"/usr/bin/lesspipe %s %s","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"","npm_config_globalconfig":"/home/james/.nvm/versions/node/v18.15.0/etc/npmrc","npm_config_init_module":"/home/james/.npm-init.js","PWD":"/home/james/OpenFPL","npm_execpath":"/home/james/.nvm/versions/node/v18.15.0/lib/node_modules/npm/bin/npm-cli.js","NVM_CD_FLAGS":"","XDG_DATA_DIRS":"/usr/local/share:/usr/share:/var/lib/snapd/desktop","npm_config_global_prefix":"/home/james/.nvm/versions/node/v18.15.0","npm_command":"run-script","HOSTTYPE":"x86_64","WSLENV":"VSCODE_WSL_EXT_LOCATION/up","INIT_CWD":"/home/james/OpenFPL","EDITOR":"vi","NODE_ENV":"production","VITE_OPENFPL_BACKEND_CANISTER_ID":"bkyz2-fmaaa-aaaaa-qaaaq-cai","VITE_OPENFPL_FRONTEND_CANISTER_ID":"bd3sg-teaaa-aaaaa-qaaba-cai","VITE___CANDID_UI_CANISTER_ID":"bw4dl-smaaa-aaaaa-qaacq-cai","VITE_PLAYER_CANISTER_CANISTER_ID":"be2us-64aaa-aaaaa-qaabq-cai","VITE_TOKEN_CANISTER_CANISTER_ID":"br5f7-7uaaa-aaaaa-qaaca-cai","VITE_DFX_NETWORK":"local","VITE_HOST":"http://localhost:8000"} correctly.`
      );
    return new (this.createActorClass(A))(e);
  }
  static createActorWithHttpDetails(A, e) {
    return new (this.createActorClass(A, { httpDetails: !0 }))(e);
  }
}
function Kt(t, A) {
  const e = an(t, xt.Buffer.from(A));
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0];
    default:
      return e;
  }
}
const Ba = { pollingStrategyFactory: ko },
  Zr = "http-details";
function jo(t, A, e, r) {
  let s;
  e.annotations.includes("query") || e.annotations.includes("composite_query")
    ? (s = async (f, ...h) => {
        var S, D;
        f = Object.assign(
          Object.assign({}, f),
          (D = (S = t[Fe].config).queryTransform) === null || D === void 0
            ? void 0
            : D.call(S, A, h, Object.assign(Object.assign({}, t[Fe].config), f))
        );
        const Y = f.agent || t[Fe].config.agent || Di(),
          M = XA.from(f.canisterId || t[Fe].config.canisterId),
          z = Lr(e.argTypes, h),
          T = await Y.query(M, { methodName: A, arg: z });
        switch (T.status) {
          case "rejected":
            throw new Ko(M, A, T);
          case "replied":
            return e.annotations.includes(Zr)
              ? {
                  httpDetails: T.httpDetails,
                  result: Kt(e.retTypes, T.reply.arg),
                }
              : Kt(e.retTypes, T.reply.arg);
        }
      })
    : (s = async (f, ...h) => {
        var S, D;
        f = Object.assign(
          Object.assign({}, f),
          (D = (S = t[Fe].config).callTransform) === null || D === void 0
            ? void 0
            : D.call(S, A, h, Object.assign(Object.assign({}, t[Fe].config), f))
        );
        const Y = f.agent || t[Fe].config.agent || Di(),
          {
            canisterId: M,
            effectiveCanisterId: z,
            pollingStrategyFactory: T,
          } = Object.assign(
            Object.assign(Object.assign({}, Ba), t[Fe].config),
            f
          ),
          nA = XA.from(M),
          EA = z !== void 0 ? XA.from(z) : nA,
          NA = Lr(e.argTypes, h),
          { requestId: MA, response: uA } = await Y.call(nA, {
            methodName: A,
            arg: NA,
            effectiveCanisterId: EA,
          });
        if (!uA.ok || uA.body) throw new Po(nA, A, MA, uA);
        const te = T(),
          WA = await ga(Y, EA, MA, te, r),
          FA = e.annotations.includes(Zr);
        if (WA !== void 0)
          return FA
            ? { httpDetails: uA, result: Kt(e.retTypes, WA) }
            : Kt(e.retTypes, WA);
        if (e.retTypes.length === 0)
          return FA ? { httpDetails: uA, result: void 0 } : void 0;
        throw new Error(
          `Call was returned undefined, but type [${e.retTypes.join(",")}].`
        );
      });
  const c = (...f) => s({}, ...f);
  return (
    (c.withOptions =
      (f) =>
      (...h) =>
        s(f, ...h)),
    c
  );
}
function _i(t) {
  function A(e, r, s) {
    const c = r[0];
    let f = XA.fromHex("");
    return (
      c &&
        typeof c == "object" &&
        c.canister_id &&
        (f = XA.from(c.canister_id)),
      { effectiveCanisterId: f }
    );
  }
  return Bi.createActor(
    Jo,
    Object.assign(
      Object.assign(Object.assign({}, t), { canisterId: XA.fromHex("") }),
      { callTransform: A, queryTransform: A }
    )
  );
}
function Wo(t) {
  throw new Error(
    'Could not dynamically require "' +
      t +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var Ea = { exports: {} };
const Vo = {},
  zo = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Vo },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Zo = ya(zo);
(function (t) {
  (function (A) {
    var e = function (o) {
        var E,
          B = new Float64Array(16);
        if (o) for (E = 0; E < o.length; E++) B[E] = o[E];
        return B;
      },
      r = function () {
        throw new Error("no PRNG");
      },
      s = new Uint8Array(16),
      c = new Uint8Array(32);
    c[0] = 9;
    var f = e(),
      h = e([1]),
      S = e([56129, 1]),
      D = e([
        30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
        36039, 65139, 11119, 27886, 20995,
      ]),
      Y = e([
        61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
        6542, 64743, 22239, 55772, 9222,
      ]),
      M = e([
        54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
        57905, 49316, 21502, 52590, 14035, 8553,
      ]),
      z = e([
        26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
        26214, 26214, 26214, 26214, 26214, 26214,
      ]),
      T = e([
        41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
        11085, 57099, 20417, 9344, 11139,
      ]);
    function nA(o, E, B, n) {
      (o[E] = (B >> 24) & 255),
        (o[E + 1] = (B >> 16) & 255),
        (o[E + 2] = (B >> 8) & 255),
        (o[E + 3] = B & 255),
        (o[E + 4] = (n >> 24) & 255),
        (o[E + 5] = (n >> 16) & 255),
        (o[E + 6] = (n >> 8) & 255),
        (o[E + 7] = n & 255);
    }
    function EA(o, E, B, n, Q) {
      var m,
        F = 0;
      for (m = 0; m < Q; m++) F |= o[E + m] ^ B[n + m];
      return (1 & ((F - 1) >>> 8)) - 1;
    }
    function NA(o, E, B, n) {
      return EA(o, E, B, n, 16);
    }
    function MA(o, E, B, n) {
      return EA(o, E, B, n, 32);
    }
    function uA(o, E, B, n) {
      for (
        var Q =
            (n[0] & 255) |
            ((n[1] & 255) << 8) |
            ((n[2] & 255) << 16) |
            ((n[3] & 255) << 24),
          m =
            (B[0] & 255) |
            ((B[1] & 255) << 8) |
            ((B[2] & 255) << 16) |
            ((B[3] & 255) << 24),
          F =
            (B[4] & 255) |
            ((B[5] & 255) << 8) |
            ((B[6] & 255) << 16) |
            ((B[7] & 255) << 24),
          U =
            (B[8] & 255) |
            ((B[9] & 255) << 8) |
            ((B[10] & 255) << 16) |
            ((B[11] & 255) << 24),
          K =
            (B[12] & 255) |
            ((B[13] & 255) << 8) |
            ((B[14] & 255) << 16) |
            ((B[15] & 255) << 24),
          aA =
            (n[4] & 255) |
            ((n[5] & 255) << 8) |
            ((n[6] & 255) << 16) |
            ((n[7] & 255) << 24),
          X =
            (E[0] & 255) |
            ((E[1] & 255) << 8) |
            ((E[2] & 255) << 16) |
            ((E[3] & 255) << 24),
          bA =
            (E[4] & 255) |
            ((E[5] & 255) << 8) |
            ((E[6] & 255) << 16) |
            ((E[7] & 255) << 24),
          eA =
            (E[8] & 255) |
            ((E[9] & 255) << 8) |
            ((E[10] & 255) << 16) |
            ((E[11] & 255) << 24),
          hA =
            (E[12] & 255) |
            ((E[13] & 255) << 8) |
            ((E[14] & 255) << 16) |
            ((E[15] & 255) << 24),
          $ =
            (n[8] & 255) |
            ((n[9] & 255) << 8) |
            ((n[10] & 255) << 16) |
            ((n[11] & 255) << 24),
          lA =
            (B[16] & 255) |
            ((B[17] & 255) << 8) |
            ((B[18] & 255) << 16) |
            ((B[19] & 255) << 24),
          CA =
            (B[20] & 255) |
            ((B[21] & 255) << 8) |
            ((B[22] & 255) << 16) |
            ((B[23] & 255) << 24),
          w =
            (B[24] & 255) |
            ((B[25] & 255) << 8) |
            ((B[26] & 255) << 16) |
            ((B[27] & 255) << 24),
          W =
            (B[28] & 255) |
            ((B[29] & 255) << 8) |
            ((B[30] & 255) << 16) |
            ((B[31] & 255) << 24),
          V =
            (n[12] & 255) |
            ((n[13] & 255) << 8) |
            ((n[14] & 255) << 16) |
            ((n[15] & 255) << 24),
          q = Q,
          sA = m,
          Z = F,
          iA = U,
          oA = K,
          AA = aA,
          v = X,
          G = bA,
          O = eA,
          k = hA,
          L = $,
          H = lA,
          fA = CA,
          wA = w,
          yA = W,
          pA = V,
          p,
          _A = 0;
        _A < 20;
        _A += 2
      )
        (p = (q + fA) | 0),
          (oA ^= (p << 7) | (p >>> (32 - 7))),
          (p = (oA + q) | 0),
          (O ^= (p << 9) | (p >>> (32 - 9))),
          (p = (O + oA) | 0),
          (fA ^= (p << 13) | (p >>> (32 - 13))),
          (p = (fA + O) | 0),
          (q ^= (p << 18) | (p >>> (32 - 18))),
          (p = (AA + sA) | 0),
          (k ^= (p << 7) | (p >>> (32 - 7))),
          (p = (k + AA) | 0),
          (wA ^= (p << 9) | (p >>> (32 - 9))),
          (p = (wA + k) | 0),
          (sA ^= (p << 13) | (p >>> (32 - 13))),
          (p = (sA + wA) | 0),
          (AA ^= (p << 18) | (p >>> (32 - 18))),
          (p = (L + v) | 0),
          (yA ^= (p << 7) | (p >>> (32 - 7))),
          (p = (yA + L) | 0),
          (Z ^= (p << 9) | (p >>> (32 - 9))),
          (p = (Z + yA) | 0),
          (v ^= (p << 13) | (p >>> (32 - 13))),
          (p = (v + Z) | 0),
          (L ^= (p << 18) | (p >>> (32 - 18))),
          (p = (pA + H) | 0),
          (iA ^= (p << 7) | (p >>> (32 - 7))),
          (p = (iA + pA) | 0),
          (G ^= (p << 9) | (p >>> (32 - 9))),
          (p = (G + iA) | 0),
          (H ^= (p << 13) | (p >>> (32 - 13))),
          (p = (H + G) | 0),
          (pA ^= (p << 18) | (p >>> (32 - 18))),
          (p = (q + iA) | 0),
          (sA ^= (p << 7) | (p >>> (32 - 7))),
          (p = (sA + q) | 0),
          (Z ^= (p << 9) | (p >>> (32 - 9))),
          (p = (Z + sA) | 0),
          (iA ^= (p << 13) | (p >>> (32 - 13))),
          (p = (iA + Z) | 0),
          (q ^= (p << 18) | (p >>> (32 - 18))),
          (p = (AA + oA) | 0),
          (v ^= (p << 7) | (p >>> (32 - 7))),
          (p = (v + AA) | 0),
          (G ^= (p << 9) | (p >>> (32 - 9))),
          (p = (G + v) | 0),
          (oA ^= (p << 13) | (p >>> (32 - 13))),
          (p = (oA + G) | 0),
          (AA ^= (p << 18) | (p >>> (32 - 18))),
          (p = (L + k) | 0),
          (H ^= (p << 7) | (p >>> (32 - 7))),
          (p = (H + L) | 0),
          (O ^= (p << 9) | (p >>> (32 - 9))),
          (p = (O + H) | 0),
          (k ^= (p << 13) | (p >>> (32 - 13))),
          (p = (k + O) | 0),
          (L ^= (p << 18) | (p >>> (32 - 18))),
          (p = (pA + yA) | 0),
          (fA ^= (p << 7) | (p >>> (32 - 7))),
          (p = (fA + pA) | 0),
          (wA ^= (p << 9) | (p >>> (32 - 9))),
          (p = (wA + fA) | 0),
          (yA ^= (p << 13) | (p >>> (32 - 13))),
          (p = (yA + wA) | 0),
          (pA ^= (p << 18) | (p >>> (32 - 18)));
      (q = (q + Q) | 0),
        (sA = (sA + m) | 0),
        (Z = (Z + F) | 0),
        (iA = (iA + U) | 0),
        (oA = (oA + K) | 0),
        (AA = (AA + aA) | 0),
        (v = (v + X) | 0),
        (G = (G + bA) | 0),
        (O = (O + eA) | 0),
        (k = (k + hA) | 0),
        (L = (L + $) | 0),
        (H = (H + lA) | 0),
        (fA = (fA + CA) | 0),
        (wA = (wA + w) | 0),
        (yA = (yA + W) | 0),
        (pA = (pA + V) | 0),
        (o[0] = (q >>> 0) & 255),
        (o[1] = (q >>> 8) & 255),
        (o[2] = (q >>> 16) & 255),
        (o[3] = (q >>> 24) & 255),
        (o[4] = (sA >>> 0) & 255),
        (o[5] = (sA >>> 8) & 255),
        (o[6] = (sA >>> 16) & 255),
        (o[7] = (sA >>> 24) & 255),
        (o[8] = (Z >>> 0) & 255),
        (o[9] = (Z >>> 8) & 255),
        (o[10] = (Z >>> 16) & 255),
        (o[11] = (Z >>> 24) & 255),
        (o[12] = (iA >>> 0) & 255),
        (o[13] = (iA >>> 8) & 255),
        (o[14] = (iA >>> 16) & 255),
        (o[15] = (iA >>> 24) & 255),
        (o[16] = (oA >>> 0) & 255),
        (o[17] = (oA >>> 8) & 255),
        (o[18] = (oA >>> 16) & 255),
        (o[19] = (oA >>> 24) & 255),
        (o[20] = (AA >>> 0) & 255),
        (o[21] = (AA >>> 8) & 255),
        (o[22] = (AA >>> 16) & 255),
        (o[23] = (AA >>> 24) & 255),
        (o[24] = (v >>> 0) & 255),
        (o[25] = (v >>> 8) & 255),
        (o[26] = (v >>> 16) & 255),
        (o[27] = (v >>> 24) & 255),
        (o[28] = (G >>> 0) & 255),
        (o[29] = (G >>> 8) & 255),
        (o[30] = (G >>> 16) & 255),
        (o[31] = (G >>> 24) & 255),
        (o[32] = (O >>> 0) & 255),
        (o[33] = (O >>> 8) & 255),
        (o[34] = (O >>> 16) & 255),
        (o[35] = (O >>> 24) & 255),
        (o[36] = (k >>> 0) & 255),
        (o[37] = (k >>> 8) & 255),
        (o[38] = (k >>> 16) & 255),
        (o[39] = (k >>> 24) & 255),
        (o[40] = (L >>> 0) & 255),
        (o[41] = (L >>> 8) & 255),
        (o[42] = (L >>> 16) & 255),
        (o[43] = (L >>> 24) & 255),
        (o[44] = (H >>> 0) & 255),
        (o[45] = (H >>> 8) & 255),
        (o[46] = (H >>> 16) & 255),
        (o[47] = (H >>> 24) & 255),
        (o[48] = (fA >>> 0) & 255),
        (o[49] = (fA >>> 8) & 255),
        (o[50] = (fA >>> 16) & 255),
        (o[51] = (fA >>> 24) & 255),
        (o[52] = (wA >>> 0) & 255),
        (o[53] = (wA >>> 8) & 255),
        (o[54] = (wA >>> 16) & 255),
        (o[55] = (wA >>> 24) & 255),
        (o[56] = (yA >>> 0) & 255),
        (o[57] = (yA >>> 8) & 255),
        (o[58] = (yA >>> 16) & 255),
        (o[59] = (yA >>> 24) & 255),
        (o[60] = (pA >>> 0) & 255),
        (o[61] = (pA >>> 8) & 255),
        (o[62] = (pA >>> 16) & 255),
        (o[63] = (pA >>> 24) & 255);
    }
    function te(o, E, B, n) {
      for (
        var Q =
            (n[0] & 255) |
            ((n[1] & 255) << 8) |
            ((n[2] & 255) << 16) |
            ((n[3] & 255) << 24),
          m =
            (B[0] & 255) |
            ((B[1] & 255) << 8) |
            ((B[2] & 255) << 16) |
            ((B[3] & 255) << 24),
          F =
            (B[4] & 255) |
            ((B[5] & 255) << 8) |
            ((B[6] & 255) << 16) |
            ((B[7] & 255) << 24),
          U =
            (B[8] & 255) |
            ((B[9] & 255) << 8) |
            ((B[10] & 255) << 16) |
            ((B[11] & 255) << 24),
          K =
            (B[12] & 255) |
            ((B[13] & 255) << 8) |
            ((B[14] & 255) << 16) |
            ((B[15] & 255) << 24),
          aA =
            (n[4] & 255) |
            ((n[5] & 255) << 8) |
            ((n[6] & 255) << 16) |
            ((n[7] & 255) << 24),
          X =
            (E[0] & 255) |
            ((E[1] & 255) << 8) |
            ((E[2] & 255) << 16) |
            ((E[3] & 255) << 24),
          bA =
            (E[4] & 255) |
            ((E[5] & 255) << 8) |
            ((E[6] & 255) << 16) |
            ((E[7] & 255) << 24),
          eA =
            (E[8] & 255) |
            ((E[9] & 255) << 8) |
            ((E[10] & 255) << 16) |
            ((E[11] & 255) << 24),
          hA =
            (E[12] & 255) |
            ((E[13] & 255) << 8) |
            ((E[14] & 255) << 16) |
            ((E[15] & 255) << 24),
          $ =
            (n[8] & 255) |
            ((n[9] & 255) << 8) |
            ((n[10] & 255) << 16) |
            ((n[11] & 255) << 24),
          lA =
            (B[16] & 255) |
            ((B[17] & 255) << 8) |
            ((B[18] & 255) << 16) |
            ((B[19] & 255) << 24),
          CA =
            (B[20] & 255) |
            ((B[21] & 255) << 8) |
            ((B[22] & 255) << 16) |
            ((B[23] & 255) << 24),
          w =
            (B[24] & 255) |
            ((B[25] & 255) << 8) |
            ((B[26] & 255) << 16) |
            ((B[27] & 255) << 24),
          W =
            (B[28] & 255) |
            ((B[29] & 255) << 8) |
            ((B[30] & 255) << 16) |
            ((B[31] & 255) << 24),
          V =
            (n[12] & 255) |
            ((n[13] & 255) << 8) |
            ((n[14] & 255) << 16) |
            ((n[15] & 255) << 24),
          q = Q,
          sA = m,
          Z = F,
          iA = U,
          oA = K,
          AA = aA,
          v = X,
          G = bA,
          O = eA,
          k = hA,
          L = $,
          H = lA,
          fA = CA,
          wA = w,
          yA = W,
          pA = V,
          p,
          _A = 0;
        _A < 20;
        _A += 2
      )
        (p = (q + fA) | 0),
          (oA ^= (p << 7) | (p >>> (32 - 7))),
          (p = (oA + q) | 0),
          (O ^= (p << 9) | (p >>> (32 - 9))),
          (p = (O + oA) | 0),
          (fA ^= (p << 13) | (p >>> (32 - 13))),
          (p = (fA + O) | 0),
          (q ^= (p << 18) | (p >>> (32 - 18))),
          (p = (AA + sA) | 0),
          (k ^= (p << 7) | (p >>> (32 - 7))),
          (p = (k + AA) | 0),
          (wA ^= (p << 9) | (p >>> (32 - 9))),
          (p = (wA + k) | 0),
          (sA ^= (p << 13) | (p >>> (32 - 13))),
          (p = (sA + wA) | 0),
          (AA ^= (p << 18) | (p >>> (32 - 18))),
          (p = (L + v) | 0),
          (yA ^= (p << 7) | (p >>> (32 - 7))),
          (p = (yA + L) | 0),
          (Z ^= (p << 9) | (p >>> (32 - 9))),
          (p = (Z + yA) | 0),
          (v ^= (p << 13) | (p >>> (32 - 13))),
          (p = (v + Z) | 0),
          (L ^= (p << 18) | (p >>> (32 - 18))),
          (p = (pA + H) | 0),
          (iA ^= (p << 7) | (p >>> (32 - 7))),
          (p = (iA + pA) | 0),
          (G ^= (p << 9) | (p >>> (32 - 9))),
          (p = (G + iA) | 0),
          (H ^= (p << 13) | (p >>> (32 - 13))),
          (p = (H + G) | 0),
          (pA ^= (p << 18) | (p >>> (32 - 18))),
          (p = (q + iA) | 0),
          (sA ^= (p << 7) | (p >>> (32 - 7))),
          (p = (sA + q) | 0),
          (Z ^= (p << 9) | (p >>> (32 - 9))),
          (p = (Z + sA) | 0),
          (iA ^= (p << 13) | (p >>> (32 - 13))),
          (p = (iA + Z) | 0),
          (q ^= (p << 18) | (p >>> (32 - 18))),
          (p = (AA + oA) | 0),
          (v ^= (p << 7) | (p >>> (32 - 7))),
          (p = (v + AA) | 0),
          (G ^= (p << 9) | (p >>> (32 - 9))),
          (p = (G + v) | 0),
          (oA ^= (p << 13) | (p >>> (32 - 13))),
          (p = (oA + G) | 0),
          (AA ^= (p << 18) | (p >>> (32 - 18))),
          (p = (L + k) | 0),
          (H ^= (p << 7) | (p >>> (32 - 7))),
          (p = (H + L) | 0),
          (O ^= (p << 9) | (p >>> (32 - 9))),
          (p = (O + H) | 0),
          (k ^= (p << 13) | (p >>> (32 - 13))),
          (p = (k + O) | 0),
          (L ^= (p << 18) | (p >>> (32 - 18))),
          (p = (pA + yA) | 0),
          (fA ^= (p << 7) | (p >>> (32 - 7))),
          (p = (fA + pA) | 0),
          (wA ^= (p << 9) | (p >>> (32 - 9))),
          (p = (wA + fA) | 0),
          (yA ^= (p << 13) | (p >>> (32 - 13))),
          (p = (yA + wA) | 0),
          (pA ^= (p << 18) | (p >>> (32 - 18)));
      (o[0] = (q >>> 0) & 255),
        (o[1] = (q >>> 8) & 255),
        (o[2] = (q >>> 16) & 255),
        (o[3] = (q >>> 24) & 255),
        (o[4] = (AA >>> 0) & 255),
        (o[5] = (AA >>> 8) & 255),
        (o[6] = (AA >>> 16) & 255),
        (o[7] = (AA >>> 24) & 255),
        (o[8] = (L >>> 0) & 255),
        (o[9] = (L >>> 8) & 255),
        (o[10] = (L >>> 16) & 255),
        (o[11] = (L >>> 24) & 255),
        (o[12] = (pA >>> 0) & 255),
        (o[13] = (pA >>> 8) & 255),
        (o[14] = (pA >>> 16) & 255),
        (o[15] = (pA >>> 24) & 255),
        (o[16] = (v >>> 0) & 255),
        (o[17] = (v >>> 8) & 255),
        (o[18] = (v >>> 16) & 255),
        (o[19] = (v >>> 24) & 255),
        (o[20] = (G >>> 0) & 255),
        (o[21] = (G >>> 8) & 255),
        (o[22] = (G >>> 16) & 255),
        (o[23] = (G >>> 24) & 255),
        (o[24] = (O >>> 0) & 255),
        (o[25] = (O >>> 8) & 255),
        (o[26] = (O >>> 16) & 255),
        (o[27] = (O >>> 24) & 255),
        (o[28] = (k >>> 0) & 255),
        (o[29] = (k >>> 8) & 255),
        (o[30] = (k >>> 16) & 255),
        (o[31] = (k >>> 24) & 255);
    }
    function WA(o, E, B, n) {
      uA(o, E, B, n);
    }
    function FA(o, E, B, n) {
      te(o, E, B, n);
    }
    var rA = new Uint8Array([
      101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107,
    ]);
    function gA(o, E, B, n, Q, m, F) {
      var U = new Uint8Array(16),
        K = new Uint8Array(64),
        aA,
        X;
      for (X = 0; X < 16; X++) U[X] = 0;
      for (X = 0; X < 8; X++) U[X] = m[X];
      for (; Q >= 64; ) {
        for (WA(K, U, F, rA), X = 0; X < 64; X++) o[E + X] = B[n + X] ^ K[X];
        for (aA = 1, X = 8; X < 16; X++)
          (aA = (aA + (U[X] & 255)) | 0), (U[X] = aA & 255), (aA >>>= 8);
        (Q -= 64), (E += 64), (n += 64);
      }
      if (Q > 0)
        for (WA(K, U, F, rA), X = 0; X < Q; X++) o[E + X] = B[n + X] ^ K[X];
      return 0;
    }
    function mA(o, E, B, n, Q) {
      var m = new Uint8Array(16),
        F = new Uint8Array(64),
        U,
        K;
      for (K = 0; K < 16; K++) m[K] = 0;
      for (K = 0; K < 8; K++) m[K] = n[K];
      for (; B >= 64; ) {
        for (WA(F, m, Q, rA), K = 0; K < 64; K++) o[E + K] = F[K];
        for (U = 1, K = 8; K < 16; K++)
          (U = (U + (m[K] & 255)) | 0), (m[K] = U & 255), (U >>>= 8);
        (B -= 64), (E += 64);
      }
      if (B > 0) for (WA(F, m, Q, rA), K = 0; K < B; K++) o[E + K] = F[K];
      return 0;
    }
    function LA(o, E, B, n, Q) {
      var m = new Uint8Array(32);
      FA(m, n, Q, rA);
      for (var F = new Uint8Array(8), U = 0; U < 8; U++) F[U] = n[U + 16];
      return mA(o, E, B, F, m);
    }
    function j(o, E, B, n, Q, m, F) {
      var U = new Uint8Array(32);
      FA(U, m, F, rA);
      for (var K = new Uint8Array(8), aA = 0; aA < 8; aA++) K[aA] = m[aA + 16];
      return gA(o, E, B, n, Q, K, U);
    }
    var JA = function (o) {
      (this.buffer = new Uint8Array(16)),
        (this.r = new Uint16Array(10)),
        (this.h = new Uint16Array(10)),
        (this.pad = new Uint16Array(8)),
        (this.leftover = 0),
        (this.fin = 0);
      var E, B, n, Q, m, F, U, K;
      (E = (o[0] & 255) | ((o[1] & 255) << 8)),
        (this.r[0] = E & 8191),
        (B = (o[2] & 255) | ((o[3] & 255) << 8)),
        (this.r[1] = ((E >>> 13) | (B << 3)) & 8191),
        (n = (o[4] & 255) | ((o[5] & 255) << 8)),
        (this.r[2] = ((B >>> 10) | (n << 6)) & 7939),
        (Q = (o[6] & 255) | ((o[7] & 255) << 8)),
        (this.r[3] = ((n >>> 7) | (Q << 9)) & 8191),
        (m = (o[8] & 255) | ((o[9] & 255) << 8)),
        (this.r[4] = ((Q >>> 4) | (m << 12)) & 255),
        (this.r[5] = (m >>> 1) & 8190),
        (F = (o[10] & 255) | ((o[11] & 255) << 8)),
        (this.r[6] = ((m >>> 14) | (F << 2)) & 8191),
        (U = (o[12] & 255) | ((o[13] & 255) << 8)),
        (this.r[7] = ((F >>> 11) | (U << 5)) & 8065),
        (K = (o[14] & 255) | ((o[15] & 255) << 8)),
        (this.r[8] = ((U >>> 8) | (K << 8)) & 8191),
        (this.r[9] = (K >>> 5) & 127),
        (this.pad[0] = (o[16] & 255) | ((o[17] & 255) << 8)),
        (this.pad[1] = (o[18] & 255) | ((o[19] & 255) << 8)),
        (this.pad[2] = (o[20] & 255) | ((o[21] & 255) << 8)),
        (this.pad[3] = (o[22] & 255) | ((o[23] & 255) << 8)),
        (this.pad[4] = (o[24] & 255) | ((o[25] & 255) << 8)),
        (this.pad[5] = (o[26] & 255) | ((o[27] & 255) << 8)),
        (this.pad[6] = (o[28] & 255) | ((o[29] & 255) << 8)),
        (this.pad[7] = (o[30] & 255) | ((o[31] & 255) << 8));
    };
    (JA.prototype.blocks = function (o, E, B) {
      for (
        var n = this.fin ? 0 : 2048,
          Q,
          m,
          F,
          U,
          K,
          aA,
          X,
          bA,
          eA,
          hA,
          $,
          lA,
          CA,
          w,
          W,
          V,
          q,
          sA,
          Z,
          iA = this.h[0],
          oA = this.h[1],
          AA = this.h[2],
          v = this.h[3],
          G = this.h[4],
          O = this.h[5],
          k = this.h[6],
          L = this.h[7],
          H = this.h[8],
          fA = this.h[9],
          wA = this.r[0],
          yA = this.r[1],
          pA = this.r[2],
          p = this.r[3],
          _A = this.r[4],
          GA = this.r[5],
          TA = this.r[6],
          SA = this.r[7],
          RA = this.r[8],
          vA = this.r[9];
        B >= 16;

      )
        (Q = (o[E + 0] & 255) | ((o[E + 1] & 255) << 8)),
          (iA += Q & 8191),
          (m = (o[E + 2] & 255) | ((o[E + 3] & 255) << 8)),
          (oA += ((Q >>> 13) | (m << 3)) & 8191),
          (F = (o[E + 4] & 255) | ((o[E + 5] & 255) << 8)),
          (AA += ((m >>> 10) | (F << 6)) & 8191),
          (U = (o[E + 6] & 255) | ((o[E + 7] & 255) << 8)),
          (v += ((F >>> 7) | (U << 9)) & 8191),
          (K = (o[E + 8] & 255) | ((o[E + 9] & 255) << 8)),
          (G += ((U >>> 4) | (K << 12)) & 8191),
          (O += (K >>> 1) & 8191),
          (aA = (o[E + 10] & 255) | ((o[E + 11] & 255) << 8)),
          (k += ((K >>> 14) | (aA << 2)) & 8191),
          (X = (o[E + 12] & 255) | ((o[E + 13] & 255) << 8)),
          (L += ((aA >>> 11) | (X << 5)) & 8191),
          (bA = (o[E + 14] & 255) | ((o[E + 15] & 255) << 8)),
          (H += ((X >>> 8) | (bA << 8)) & 8191),
          (fA += (bA >>> 5) | n),
          (eA = 0),
          (hA = eA),
          (hA += iA * wA),
          (hA += oA * (5 * vA)),
          (hA += AA * (5 * RA)),
          (hA += v * (5 * SA)),
          (hA += G * (5 * TA)),
          (eA = hA >>> 13),
          (hA &= 8191),
          (hA += O * (5 * GA)),
          (hA += k * (5 * _A)),
          (hA += L * (5 * p)),
          (hA += H * (5 * pA)),
          (hA += fA * (5 * yA)),
          (eA += hA >>> 13),
          (hA &= 8191),
          ($ = eA),
          ($ += iA * yA),
          ($ += oA * wA),
          ($ += AA * (5 * vA)),
          ($ += v * (5 * RA)),
          ($ += G * (5 * SA)),
          (eA = $ >>> 13),
          ($ &= 8191),
          ($ += O * (5 * TA)),
          ($ += k * (5 * GA)),
          ($ += L * (5 * _A)),
          ($ += H * (5 * p)),
          ($ += fA * (5 * pA)),
          (eA += $ >>> 13),
          ($ &= 8191),
          (lA = eA),
          (lA += iA * pA),
          (lA += oA * yA),
          (lA += AA * wA),
          (lA += v * (5 * vA)),
          (lA += G * (5 * RA)),
          (eA = lA >>> 13),
          (lA &= 8191),
          (lA += O * (5 * SA)),
          (lA += k * (5 * TA)),
          (lA += L * (5 * GA)),
          (lA += H * (5 * _A)),
          (lA += fA * (5 * p)),
          (eA += lA >>> 13),
          (lA &= 8191),
          (CA = eA),
          (CA += iA * p),
          (CA += oA * pA),
          (CA += AA * yA),
          (CA += v * wA),
          (CA += G * (5 * vA)),
          (eA = CA >>> 13),
          (CA &= 8191),
          (CA += O * (5 * RA)),
          (CA += k * (5 * SA)),
          (CA += L * (5 * TA)),
          (CA += H * (5 * GA)),
          (CA += fA * (5 * _A)),
          (eA += CA >>> 13),
          (CA &= 8191),
          (w = eA),
          (w += iA * _A),
          (w += oA * p),
          (w += AA * pA),
          (w += v * yA),
          (w += G * wA),
          (eA = w >>> 13),
          (w &= 8191),
          (w += O * (5 * vA)),
          (w += k * (5 * RA)),
          (w += L * (5 * SA)),
          (w += H * (5 * TA)),
          (w += fA * (5 * GA)),
          (eA += w >>> 13),
          (w &= 8191),
          (W = eA),
          (W += iA * GA),
          (W += oA * _A),
          (W += AA * p),
          (W += v * pA),
          (W += G * yA),
          (eA = W >>> 13),
          (W &= 8191),
          (W += O * wA),
          (W += k * (5 * vA)),
          (W += L * (5 * RA)),
          (W += H * (5 * SA)),
          (W += fA * (5 * TA)),
          (eA += W >>> 13),
          (W &= 8191),
          (V = eA),
          (V += iA * TA),
          (V += oA * GA),
          (V += AA * _A),
          (V += v * p),
          (V += G * pA),
          (eA = V >>> 13),
          (V &= 8191),
          (V += O * yA),
          (V += k * wA),
          (V += L * (5 * vA)),
          (V += H * (5 * RA)),
          (V += fA * (5 * SA)),
          (eA += V >>> 13),
          (V &= 8191),
          (q = eA),
          (q += iA * SA),
          (q += oA * TA),
          (q += AA * GA),
          (q += v * _A),
          (q += G * p),
          (eA = q >>> 13),
          (q &= 8191),
          (q += O * pA),
          (q += k * yA),
          (q += L * wA),
          (q += H * (5 * vA)),
          (q += fA * (5 * RA)),
          (eA += q >>> 13),
          (q &= 8191),
          (sA = eA),
          (sA += iA * RA),
          (sA += oA * SA),
          (sA += AA * TA),
          (sA += v * GA),
          (sA += G * _A),
          (eA = sA >>> 13),
          (sA &= 8191),
          (sA += O * p),
          (sA += k * pA),
          (sA += L * yA),
          (sA += H * wA),
          (sA += fA * (5 * vA)),
          (eA += sA >>> 13),
          (sA &= 8191),
          (Z = eA),
          (Z += iA * vA),
          (Z += oA * RA),
          (Z += AA * SA),
          (Z += v * TA),
          (Z += G * GA),
          (eA = Z >>> 13),
          (Z &= 8191),
          (Z += O * _A),
          (Z += k * p),
          (Z += L * pA),
          (Z += H * yA),
          (Z += fA * wA),
          (eA += Z >>> 13),
          (Z &= 8191),
          (eA = ((eA << 2) + eA) | 0),
          (eA = (eA + hA) | 0),
          (hA = eA & 8191),
          (eA = eA >>> 13),
          ($ += eA),
          (iA = hA),
          (oA = $),
          (AA = lA),
          (v = CA),
          (G = w),
          (O = W),
          (k = V),
          (L = q),
          (H = sA),
          (fA = Z),
          (E += 16),
          (B -= 16);
      (this.h[0] = iA),
        (this.h[1] = oA),
        (this.h[2] = AA),
        (this.h[3] = v),
        (this.h[4] = G),
        (this.h[5] = O),
        (this.h[6] = k),
        (this.h[7] = L),
        (this.h[8] = H),
        (this.h[9] = fA);
    }),
      (JA.prototype.finish = function (o, E) {
        var B = new Uint16Array(10),
          n,
          Q,
          m,
          F;
        if (this.leftover) {
          for (F = this.leftover, this.buffer[F++] = 1; F < 16; F++)
            this.buffer[F] = 0;
          (this.fin = 1), this.blocks(this.buffer, 0, 16);
        }
        for (n = this.h[1] >>> 13, this.h[1] &= 8191, F = 2; F < 10; F++)
          (this.h[F] += n), (n = this.h[F] >>> 13), (this.h[F] &= 8191);
        for (
          this.h[0] += n * 5,
            n = this.h[0] >>> 13,
            this.h[0] &= 8191,
            this.h[1] += n,
            n = this.h[1] >>> 13,
            this.h[1] &= 8191,
            this.h[2] += n,
            B[0] = this.h[0] + 5,
            n = B[0] >>> 13,
            B[0] &= 8191,
            F = 1;
          F < 10;
          F++
        )
          (B[F] = this.h[F] + n), (n = B[F] >>> 13), (B[F] &= 8191);
        for (B[9] -= 8192, Q = (n ^ 1) - 1, F = 0; F < 10; F++) B[F] &= Q;
        for (Q = ~Q, F = 0; F < 10; F++) this.h[F] = (this.h[F] & Q) | B[F];
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
            m = this.h[0] + this.pad[0],
            this.h[0] = m & 65535,
            F = 1;
          F < 8;
          F++
        )
          (m = (((this.h[F] + this.pad[F]) | 0) + (m >>> 16)) | 0),
            (this.h[F] = m & 65535);
        (o[E + 0] = (this.h[0] >>> 0) & 255),
          (o[E + 1] = (this.h[0] >>> 8) & 255),
          (o[E + 2] = (this.h[1] >>> 0) & 255),
          (o[E + 3] = (this.h[1] >>> 8) & 255),
          (o[E + 4] = (this.h[2] >>> 0) & 255),
          (o[E + 5] = (this.h[2] >>> 8) & 255),
          (o[E + 6] = (this.h[3] >>> 0) & 255),
          (o[E + 7] = (this.h[3] >>> 8) & 255),
          (o[E + 8] = (this.h[4] >>> 0) & 255),
          (o[E + 9] = (this.h[4] >>> 8) & 255),
          (o[E + 10] = (this.h[5] >>> 0) & 255),
          (o[E + 11] = (this.h[5] >>> 8) & 255),
          (o[E + 12] = (this.h[6] >>> 0) & 255),
          (o[E + 13] = (this.h[6] >>> 8) & 255),
          (o[E + 14] = (this.h[7] >>> 0) & 255),
          (o[E + 15] = (this.h[7] >>> 8) & 255);
      }),
      (JA.prototype.update = function (o, E, B) {
        var n, Q;
        if (this.leftover) {
          for (Q = 16 - this.leftover, Q > B && (Q = B), n = 0; n < Q; n++)
            this.buffer[this.leftover + n] = o[E + n];
          if (((B -= Q), (E += Q), (this.leftover += Q), this.leftover < 16))
            return;
          this.blocks(this.buffer, 0, 16), (this.leftover = 0);
        }
        if (
          (B >= 16 &&
            ((Q = B - (B % 16)), this.blocks(o, E, Q), (E += Q), (B -= Q)),
          B)
        ) {
          for (n = 0; n < B; n++) this.buffer[this.leftover + n] = o[E + n];
          this.leftover += B;
        }
      });
    function UA(o, E, B, n, Q, m) {
      var F = new JA(m);
      return F.update(B, n, Q), F.finish(o, E), 0;
    }
    function kA(o, E, B, n, Q, m) {
      var F = new Uint8Array(16);
      return UA(F, 0, B, n, Q, m), NA(o, E, F, 0);
    }
    function Ae(o, E, B, n, Q) {
      var m;
      if (B < 32) return -1;
      for (
        j(o, 0, E, 0, B, n, Q), UA(o, 16, o, 32, B - 32, o), m = 0;
        m < 16;
        m++
      )
        o[m] = 0;
      return 0;
    }
    function ZA(o, E, B, n, Q) {
      var m,
        F = new Uint8Array(32);
      if (B < 32 || (LA(F, 0, 32, n, Q), kA(E, 16, E, 32, B - 32, F) !== 0))
        return -1;
      for (j(o, 0, E, 0, B, n, Q), m = 0; m < 32; m++) o[m] = 0;
      return 0;
    }
    function se(o, E) {
      var B;
      for (B = 0; B < 16; B++) o[B] = E[B] | 0;
    }
    function Ee(o) {
      var E,
        B,
        n = 1;
      for (E = 0; E < 16; E++)
        (B = o[E] + n + 65535),
          (n = Math.floor(B / 65536)),
          (o[E] = B - n * 65536);
      o[0] += n - 1 + 37 * (n - 1);
    }
    function KA(o, E, B) {
      for (var n, Q = ~(B - 1), m = 0; m < 16; m++)
        (n = Q & (o[m] ^ E[m])), (o[m] ^= n), (E[m] ^= n);
    }
    function le(o, E) {
      var B,
        n,
        Q,
        m = e(),
        F = e();
      for (B = 0; B < 16; B++) F[B] = E[B];
      for (Ee(F), Ee(F), Ee(F), n = 0; n < 2; n++) {
        for (m[0] = F[0] - 65517, B = 1; B < 15; B++)
          (m[B] = F[B] - 65535 - ((m[B - 1] >> 16) & 1)), (m[B - 1] &= 65535);
        (m[15] = F[15] - 32767 - ((m[14] >> 16) & 1)),
          (Q = (m[15] >> 16) & 1),
          (m[14] &= 65535),
          KA(F, m, 1 - Q);
      }
      for (B = 0; B < 16; B++)
        (o[2 * B] = F[B] & 255), (o[2 * B + 1] = F[B] >> 8);
    }
    function xe(o, E) {
      var B = new Uint8Array(32),
        n = new Uint8Array(32);
      return le(B, o), le(n, E), MA(B, 0, n, 0);
    }
    function zA(o) {
      var E = new Uint8Array(32);
      return le(E, o), E[0] & 1;
    }
    function PA(o, E) {
      var B;
      for (B = 0; B < 16; B++) o[B] = E[2 * B] + (E[2 * B + 1] << 8);
      o[15] &= 32767;
    }
    function ce(o, E, B) {
      for (var n = 0; n < 16; n++) o[n] = E[n] + B[n];
    }
    function l(o, E, B) {
      for (var n = 0; n < 16; n++) o[n] = E[n] - B[n];
    }
    function QA(o, E, B) {
      var n,
        Q,
        m = 0,
        F = 0,
        U = 0,
        K = 0,
        aA = 0,
        X = 0,
        bA = 0,
        eA = 0,
        hA = 0,
        $ = 0,
        lA = 0,
        CA = 0,
        w = 0,
        W = 0,
        V = 0,
        q = 0,
        sA = 0,
        Z = 0,
        iA = 0,
        oA = 0,
        AA = 0,
        v = 0,
        G = 0,
        O = 0,
        k = 0,
        L = 0,
        H = 0,
        fA = 0,
        wA = 0,
        yA = 0,
        pA = 0,
        p = B[0],
        _A = B[1],
        GA = B[2],
        TA = B[3],
        SA = B[4],
        RA = B[5],
        vA = B[6],
        Ie = B[7],
        OA = B[8],
        re = B[9],
        ie = B[10],
        ne = B[11],
        ue = B[12],
        de = B[13],
        we = B[14],
        pe = B[15];
      (n = E[0]),
        (m += n * p),
        (F += n * _A),
        (U += n * GA),
        (K += n * TA),
        (aA += n * SA),
        (X += n * RA),
        (bA += n * vA),
        (eA += n * Ie),
        (hA += n * OA),
        ($ += n * re),
        (lA += n * ie),
        (CA += n * ne),
        (w += n * ue),
        (W += n * de),
        (V += n * we),
        (q += n * pe),
        (n = E[1]),
        (F += n * p),
        (U += n * _A),
        (K += n * GA),
        (aA += n * TA),
        (X += n * SA),
        (bA += n * RA),
        (eA += n * vA),
        (hA += n * Ie),
        ($ += n * OA),
        (lA += n * re),
        (CA += n * ie),
        (w += n * ne),
        (W += n * ue),
        (V += n * de),
        (q += n * we),
        (sA += n * pe),
        (n = E[2]),
        (U += n * p),
        (K += n * _A),
        (aA += n * GA),
        (X += n * TA),
        (bA += n * SA),
        (eA += n * RA),
        (hA += n * vA),
        ($ += n * Ie),
        (lA += n * OA),
        (CA += n * re),
        (w += n * ie),
        (W += n * ne),
        (V += n * ue),
        (q += n * de),
        (sA += n * we),
        (Z += n * pe),
        (n = E[3]),
        (K += n * p),
        (aA += n * _A),
        (X += n * GA),
        (bA += n * TA),
        (eA += n * SA),
        (hA += n * RA),
        ($ += n * vA),
        (lA += n * Ie),
        (CA += n * OA),
        (w += n * re),
        (W += n * ie),
        (V += n * ne),
        (q += n * ue),
        (sA += n * de),
        (Z += n * we),
        (iA += n * pe),
        (n = E[4]),
        (aA += n * p),
        (X += n * _A),
        (bA += n * GA),
        (eA += n * TA),
        (hA += n * SA),
        ($ += n * RA),
        (lA += n * vA),
        (CA += n * Ie),
        (w += n * OA),
        (W += n * re),
        (V += n * ie),
        (q += n * ne),
        (sA += n * ue),
        (Z += n * de),
        (iA += n * we),
        (oA += n * pe),
        (n = E[5]),
        (X += n * p),
        (bA += n * _A),
        (eA += n * GA),
        (hA += n * TA),
        ($ += n * SA),
        (lA += n * RA),
        (CA += n * vA),
        (w += n * Ie),
        (W += n * OA),
        (V += n * re),
        (q += n * ie),
        (sA += n * ne),
        (Z += n * ue),
        (iA += n * de),
        (oA += n * we),
        (AA += n * pe),
        (n = E[6]),
        (bA += n * p),
        (eA += n * _A),
        (hA += n * GA),
        ($ += n * TA),
        (lA += n * SA),
        (CA += n * RA),
        (w += n * vA),
        (W += n * Ie),
        (V += n * OA),
        (q += n * re),
        (sA += n * ie),
        (Z += n * ne),
        (iA += n * ue),
        (oA += n * de),
        (AA += n * we),
        (v += n * pe),
        (n = E[7]),
        (eA += n * p),
        (hA += n * _A),
        ($ += n * GA),
        (lA += n * TA),
        (CA += n * SA),
        (w += n * RA),
        (W += n * vA),
        (V += n * Ie),
        (q += n * OA),
        (sA += n * re),
        (Z += n * ie),
        (iA += n * ne),
        (oA += n * ue),
        (AA += n * de),
        (v += n * we),
        (G += n * pe),
        (n = E[8]),
        (hA += n * p),
        ($ += n * _A),
        (lA += n * GA),
        (CA += n * TA),
        (w += n * SA),
        (W += n * RA),
        (V += n * vA),
        (q += n * Ie),
        (sA += n * OA),
        (Z += n * re),
        (iA += n * ie),
        (oA += n * ne),
        (AA += n * ue),
        (v += n * de),
        (G += n * we),
        (O += n * pe),
        (n = E[9]),
        ($ += n * p),
        (lA += n * _A),
        (CA += n * GA),
        (w += n * TA),
        (W += n * SA),
        (V += n * RA),
        (q += n * vA),
        (sA += n * Ie),
        (Z += n * OA),
        (iA += n * re),
        (oA += n * ie),
        (AA += n * ne),
        (v += n * ue),
        (G += n * de),
        (O += n * we),
        (k += n * pe),
        (n = E[10]),
        (lA += n * p),
        (CA += n * _A),
        (w += n * GA),
        (W += n * TA),
        (V += n * SA),
        (q += n * RA),
        (sA += n * vA),
        (Z += n * Ie),
        (iA += n * OA),
        (oA += n * re),
        (AA += n * ie),
        (v += n * ne),
        (G += n * ue),
        (O += n * de),
        (k += n * we),
        (L += n * pe),
        (n = E[11]),
        (CA += n * p),
        (w += n * _A),
        (W += n * GA),
        (V += n * TA),
        (q += n * SA),
        (sA += n * RA),
        (Z += n * vA),
        (iA += n * Ie),
        (oA += n * OA),
        (AA += n * re),
        (v += n * ie),
        (G += n * ne),
        (O += n * ue),
        (k += n * de),
        (L += n * we),
        (H += n * pe),
        (n = E[12]),
        (w += n * p),
        (W += n * _A),
        (V += n * GA),
        (q += n * TA),
        (sA += n * SA),
        (Z += n * RA),
        (iA += n * vA),
        (oA += n * Ie),
        (AA += n * OA),
        (v += n * re),
        (G += n * ie),
        (O += n * ne),
        (k += n * ue),
        (L += n * de),
        (H += n * we),
        (fA += n * pe),
        (n = E[13]),
        (W += n * p),
        (V += n * _A),
        (q += n * GA),
        (sA += n * TA),
        (Z += n * SA),
        (iA += n * RA),
        (oA += n * vA),
        (AA += n * Ie),
        (v += n * OA),
        (G += n * re),
        (O += n * ie),
        (k += n * ne),
        (L += n * ue),
        (H += n * de),
        (fA += n * we),
        (wA += n * pe),
        (n = E[14]),
        (V += n * p),
        (q += n * _A),
        (sA += n * GA),
        (Z += n * TA),
        (iA += n * SA),
        (oA += n * RA),
        (AA += n * vA),
        (v += n * Ie),
        (G += n * OA),
        (O += n * re),
        (k += n * ie),
        (L += n * ne),
        (H += n * ue),
        (fA += n * de),
        (wA += n * we),
        (yA += n * pe),
        (n = E[15]),
        (q += n * p),
        (sA += n * _A),
        (Z += n * GA),
        (iA += n * TA),
        (oA += n * SA),
        (AA += n * RA),
        (v += n * vA),
        (G += n * Ie),
        (O += n * OA),
        (k += n * re),
        (L += n * ie),
        (H += n * ne),
        (fA += n * ue),
        (wA += n * de),
        (yA += n * we),
        (pA += n * pe),
        (m += 38 * sA),
        (F += 38 * Z),
        (U += 38 * iA),
        (K += 38 * oA),
        (aA += 38 * AA),
        (X += 38 * v),
        (bA += 38 * G),
        (eA += 38 * O),
        (hA += 38 * k),
        ($ += 38 * L),
        (lA += 38 * H),
        (CA += 38 * fA),
        (w += 38 * wA),
        (W += 38 * yA),
        (V += 38 * pA),
        (Q = 1),
        (n = m + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (m = n - Q * 65536),
        (n = F + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (F = n - Q * 65536),
        (n = U + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (U = n - Q * 65536),
        (n = K + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (K = n - Q * 65536),
        (n = aA + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (aA = n - Q * 65536),
        (n = X + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (X = n - Q * 65536),
        (n = bA + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (bA = n - Q * 65536),
        (n = eA + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (eA = n - Q * 65536),
        (n = hA + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (hA = n - Q * 65536),
        (n = $ + Q + 65535),
        (Q = Math.floor(n / 65536)),
        ($ = n - Q * 65536),
        (n = lA + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (lA = n - Q * 65536),
        (n = CA + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (CA = n - Q * 65536),
        (n = w + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (w = n - Q * 65536),
        (n = W + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (W = n - Q * 65536),
        (n = V + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (V = n - Q * 65536),
        (n = q + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (q = n - Q * 65536),
        (m += Q - 1 + 37 * (Q - 1)),
        (Q = 1),
        (n = m + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (m = n - Q * 65536),
        (n = F + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (F = n - Q * 65536),
        (n = U + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (U = n - Q * 65536),
        (n = K + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (K = n - Q * 65536),
        (n = aA + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (aA = n - Q * 65536),
        (n = X + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (X = n - Q * 65536),
        (n = bA + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (bA = n - Q * 65536),
        (n = eA + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (eA = n - Q * 65536),
        (n = hA + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (hA = n - Q * 65536),
        (n = $ + Q + 65535),
        (Q = Math.floor(n / 65536)),
        ($ = n - Q * 65536),
        (n = lA + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (lA = n - Q * 65536),
        (n = CA + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (CA = n - Q * 65536),
        (n = w + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (w = n - Q * 65536),
        (n = W + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (W = n - Q * 65536),
        (n = V + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (V = n - Q * 65536),
        (n = q + Q + 65535),
        (Q = Math.floor(n / 65536)),
        (q = n - Q * 65536),
        (m += Q - 1 + 37 * (Q - 1)),
        (o[0] = m),
        (o[1] = F),
        (o[2] = U),
        (o[3] = K),
        (o[4] = aA),
        (o[5] = X),
        (o[6] = bA),
        (o[7] = eA),
        (o[8] = hA),
        (o[9] = $),
        (o[10] = lA),
        (o[11] = CA),
        (o[12] = w),
        (o[13] = W),
        (o[14] = V),
        (o[15] = q);
    }
    function oe(o, E) {
      QA(o, E, E);
    }
    function Ye(o, E) {
      var B = e(),
        n;
      for (n = 0; n < 16; n++) B[n] = E[n];
      for (n = 253; n >= 0; n--) oe(B, B), n !== 2 && n !== 4 && QA(B, B, E);
      for (n = 0; n < 16; n++) o[n] = B[n];
    }
    function IA(o, E) {
      var B = e(),
        n;
      for (n = 0; n < 16; n++) B[n] = E[n];
      for (n = 250; n >= 0; n--) oe(B, B), n !== 1 && QA(B, B, E);
      for (n = 0; n < 16; n++) o[n] = B[n];
    }
    function BA(o, E, B) {
      var n = new Uint8Array(32),
        Q = new Float64Array(80),
        m,
        F,
        U = e(),
        K = e(),
        aA = e(),
        X = e(),
        bA = e(),
        eA = e();
      for (F = 0; F < 31; F++) n[F] = E[F];
      for (
        n[31] = (E[31] & 127) | 64, n[0] &= 248, PA(Q, B), F = 0;
        F < 16;
        F++
      )
        (K[F] = Q[F]), (X[F] = U[F] = aA[F] = 0);
      for (U[0] = X[0] = 1, F = 254; F >= 0; --F)
        (m = (n[F >>> 3] >>> (F & 7)) & 1),
          KA(U, K, m),
          KA(aA, X, m),
          ce(bA, U, aA),
          l(U, U, aA),
          ce(aA, K, X),
          l(K, K, X),
          oe(X, bA),
          oe(eA, U),
          QA(U, aA, U),
          QA(aA, K, bA),
          ce(bA, U, aA),
          l(U, U, aA),
          oe(K, U),
          l(aA, X, eA),
          QA(U, aA, S),
          ce(U, U, X),
          QA(aA, aA, U),
          QA(U, X, eA),
          QA(X, K, Q),
          oe(K, bA),
          KA(U, K, m),
          KA(aA, X, m);
      for (F = 0; F < 16; F++)
        (Q[F + 16] = U[F]),
          (Q[F + 32] = aA[F]),
          (Q[F + 48] = K[F]),
          (Q[F + 64] = X[F]);
      var hA = Q.subarray(32),
        $ = Q.subarray(16);
      return Ye(hA, hA), QA($, $, hA), le(o, $), 0;
    }
    function C(o, E) {
      return BA(o, E, c);
    }
    function d(o, E) {
      return r(E, 32), C(o, E);
    }
    function x(o, E, B) {
      var n = new Uint8Array(32);
      return BA(n, B, E), FA(o, s, n, rA);
    }
    var b = Ae,
      _ = ZA;
    function N(o, E, B, n, Q, m) {
      var F = new Uint8Array(32);
      return x(F, Q, m), b(o, E, B, n, F);
    }
    function g(o, E, B, n, Q, m) {
      var F = new Uint8Array(32);
      return x(F, Q, m), _(o, E, B, n, F);
    }
    var i = [
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
    function a(o, E, B, n) {
      for (
        var Q = new Int32Array(16),
          m = new Int32Array(16),
          F,
          U,
          K,
          aA,
          X,
          bA,
          eA,
          hA,
          $,
          lA,
          CA,
          w,
          W,
          V,
          q,
          sA,
          Z,
          iA,
          oA,
          AA,
          v,
          G,
          O,
          k,
          L,
          H,
          fA = o[0],
          wA = o[1],
          yA = o[2],
          pA = o[3],
          p = o[4],
          _A = o[5],
          GA = o[6],
          TA = o[7],
          SA = E[0],
          RA = E[1],
          vA = E[2],
          Ie = E[3],
          OA = E[4],
          re = E[5],
          ie = E[6],
          ne = E[7],
          ue = 0;
        n >= 128;

      ) {
        for (oA = 0; oA < 16; oA++)
          (AA = 8 * oA + ue),
            (Q[oA] =
              (B[AA + 0] << 24) |
              (B[AA + 1] << 16) |
              (B[AA + 2] << 8) |
              B[AA + 3]),
            (m[oA] =
              (B[AA + 4] << 24) |
              (B[AA + 5] << 16) |
              (B[AA + 6] << 8) |
              B[AA + 7]);
        for (oA = 0; oA < 80; oA++)
          if (
            ((F = fA),
            (U = wA),
            (K = yA),
            (aA = pA),
            (X = p),
            (bA = _A),
            (eA = GA),
            (hA = TA),
            ($ = SA),
            (lA = RA),
            (CA = vA),
            (w = Ie),
            (W = OA),
            (V = re),
            (q = ie),
            (sA = ne),
            (v = TA),
            (G = ne),
            (O = G & 65535),
            (k = G >>> 16),
            (L = v & 65535),
            (H = v >>> 16),
            (v =
              ((p >>> 14) | (OA << (32 - 14))) ^
              ((p >>> 18) | (OA << (32 - 18))) ^
              ((OA >>> (41 - 32)) | (p << (32 - (41 - 32))))),
            (G =
              ((OA >>> 14) | (p << (32 - 14))) ^
              ((OA >>> 18) | (p << (32 - 18))) ^
              ((p >>> (41 - 32)) | (OA << (32 - (41 - 32))))),
            (O += G & 65535),
            (k += G >>> 16),
            (L += v & 65535),
            (H += v >>> 16),
            (v = (p & _A) ^ (~p & GA)),
            (G = (OA & re) ^ (~OA & ie)),
            (O += G & 65535),
            (k += G >>> 16),
            (L += v & 65535),
            (H += v >>> 16),
            (v = i[oA * 2]),
            (G = i[oA * 2 + 1]),
            (O += G & 65535),
            (k += G >>> 16),
            (L += v & 65535),
            (H += v >>> 16),
            (v = Q[oA % 16]),
            (G = m[oA % 16]),
            (O += G & 65535),
            (k += G >>> 16),
            (L += v & 65535),
            (H += v >>> 16),
            (k += O >>> 16),
            (L += k >>> 16),
            (H += L >>> 16),
            (Z = (L & 65535) | (H << 16)),
            (iA = (O & 65535) | (k << 16)),
            (v = Z),
            (G = iA),
            (O = G & 65535),
            (k = G >>> 16),
            (L = v & 65535),
            (H = v >>> 16),
            (v =
              ((fA >>> 28) | (SA << (32 - 28))) ^
              ((SA >>> (34 - 32)) | (fA << (32 - (34 - 32)))) ^
              ((SA >>> (39 - 32)) | (fA << (32 - (39 - 32))))),
            (G =
              ((SA >>> 28) | (fA << (32 - 28))) ^
              ((fA >>> (34 - 32)) | (SA << (32 - (34 - 32)))) ^
              ((fA >>> (39 - 32)) | (SA << (32 - (39 - 32))))),
            (O += G & 65535),
            (k += G >>> 16),
            (L += v & 65535),
            (H += v >>> 16),
            (v = (fA & wA) ^ (fA & yA) ^ (wA & yA)),
            (G = (SA & RA) ^ (SA & vA) ^ (RA & vA)),
            (O += G & 65535),
            (k += G >>> 16),
            (L += v & 65535),
            (H += v >>> 16),
            (k += O >>> 16),
            (L += k >>> 16),
            (H += L >>> 16),
            (hA = (L & 65535) | (H << 16)),
            (sA = (O & 65535) | (k << 16)),
            (v = aA),
            (G = w),
            (O = G & 65535),
            (k = G >>> 16),
            (L = v & 65535),
            (H = v >>> 16),
            (v = Z),
            (G = iA),
            (O += G & 65535),
            (k += G >>> 16),
            (L += v & 65535),
            (H += v >>> 16),
            (k += O >>> 16),
            (L += k >>> 16),
            (H += L >>> 16),
            (aA = (L & 65535) | (H << 16)),
            (w = (O & 65535) | (k << 16)),
            (wA = F),
            (yA = U),
            (pA = K),
            (p = aA),
            (_A = X),
            (GA = bA),
            (TA = eA),
            (fA = hA),
            (RA = $),
            (vA = lA),
            (Ie = CA),
            (OA = w),
            (re = W),
            (ie = V),
            (ne = q),
            (SA = sA),
            oA % 16 === 15)
          )
            for (AA = 0; AA < 16; AA++)
              (v = Q[AA]),
                (G = m[AA]),
                (O = G & 65535),
                (k = G >>> 16),
                (L = v & 65535),
                (H = v >>> 16),
                (v = Q[(AA + 9) % 16]),
                (G = m[(AA + 9) % 16]),
                (O += G & 65535),
                (k += G >>> 16),
                (L += v & 65535),
                (H += v >>> 16),
                (Z = Q[(AA + 1) % 16]),
                (iA = m[(AA + 1) % 16]),
                (v =
                  ((Z >>> 1) | (iA << (32 - 1))) ^
                  ((Z >>> 8) | (iA << (32 - 8))) ^
                  (Z >>> 7)),
                (G =
                  ((iA >>> 1) | (Z << (32 - 1))) ^
                  ((iA >>> 8) | (Z << (32 - 8))) ^
                  ((iA >>> 7) | (Z << (32 - 7)))),
                (O += G & 65535),
                (k += G >>> 16),
                (L += v & 65535),
                (H += v >>> 16),
                (Z = Q[(AA + 14) % 16]),
                (iA = m[(AA + 14) % 16]),
                (v =
                  ((Z >>> 19) | (iA << (32 - 19))) ^
                  ((iA >>> (61 - 32)) | (Z << (32 - (61 - 32)))) ^
                  (Z >>> 6)),
                (G =
                  ((iA >>> 19) | (Z << (32 - 19))) ^
                  ((Z >>> (61 - 32)) | (iA << (32 - (61 - 32)))) ^
                  ((iA >>> 6) | (Z << (32 - 6)))),
                (O += G & 65535),
                (k += G >>> 16),
                (L += v & 65535),
                (H += v >>> 16),
                (k += O >>> 16),
                (L += k >>> 16),
                (H += L >>> 16),
                (Q[AA] = (L & 65535) | (H << 16)),
                (m[AA] = (O & 65535) | (k << 16));
        (v = fA),
          (G = SA),
          (O = G & 65535),
          (k = G >>> 16),
          (L = v & 65535),
          (H = v >>> 16),
          (v = o[0]),
          (G = E[0]),
          (O += G & 65535),
          (k += G >>> 16),
          (L += v & 65535),
          (H += v >>> 16),
          (k += O >>> 16),
          (L += k >>> 16),
          (H += L >>> 16),
          (o[0] = fA = (L & 65535) | (H << 16)),
          (E[0] = SA = (O & 65535) | (k << 16)),
          (v = wA),
          (G = RA),
          (O = G & 65535),
          (k = G >>> 16),
          (L = v & 65535),
          (H = v >>> 16),
          (v = o[1]),
          (G = E[1]),
          (O += G & 65535),
          (k += G >>> 16),
          (L += v & 65535),
          (H += v >>> 16),
          (k += O >>> 16),
          (L += k >>> 16),
          (H += L >>> 16),
          (o[1] = wA = (L & 65535) | (H << 16)),
          (E[1] = RA = (O & 65535) | (k << 16)),
          (v = yA),
          (G = vA),
          (O = G & 65535),
          (k = G >>> 16),
          (L = v & 65535),
          (H = v >>> 16),
          (v = o[2]),
          (G = E[2]),
          (O += G & 65535),
          (k += G >>> 16),
          (L += v & 65535),
          (H += v >>> 16),
          (k += O >>> 16),
          (L += k >>> 16),
          (H += L >>> 16),
          (o[2] = yA = (L & 65535) | (H << 16)),
          (E[2] = vA = (O & 65535) | (k << 16)),
          (v = pA),
          (G = Ie),
          (O = G & 65535),
          (k = G >>> 16),
          (L = v & 65535),
          (H = v >>> 16),
          (v = o[3]),
          (G = E[3]),
          (O += G & 65535),
          (k += G >>> 16),
          (L += v & 65535),
          (H += v >>> 16),
          (k += O >>> 16),
          (L += k >>> 16),
          (H += L >>> 16),
          (o[3] = pA = (L & 65535) | (H << 16)),
          (E[3] = Ie = (O & 65535) | (k << 16)),
          (v = p),
          (G = OA),
          (O = G & 65535),
          (k = G >>> 16),
          (L = v & 65535),
          (H = v >>> 16),
          (v = o[4]),
          (G = E[4]),
          (O += G & 65535),
          (k += G >>> 16),
          (L += v & 65535),
          (H += v >>> 16),
          (k += O >>> 16),
          (L += k >>> 16),
          (H += L >>> 16),
          (o[4] = p = (L & 65535) | (H << 16)),
          (E[4] = OA = (O & 65535) | (k << 16)),
          (v = _A),
          (G = re),
          (O = G & 65535),
          (k = G >>> 16),
          (L = v & 65535),
          (H = v >>> 16),
          (v = o[5]),
          (G = E[5]),
          (O += G & 65535),
          (k += G >>> 16),
          (L += v & 65535),
          (H += v >>> 16),
          (k += O >>> 16),
          (L += k >>> 16),
          (H += L >>> 16),
          (o[5] = _A = (L & 65535) | (H << 16)),
          (E[5] = re = (O & 65535) | (k << 16)),
          (v = GA),
          (G = ie),
          (O = G & 65535),
          (k = G >>> 16),
          (L = v & 65535),
          (H = v >>> 16),
          (v = o[6]),
          (G = E[6]),
          (O += G & 65535),
          (k += G >>> 16),
          (L += v & 65535),
          (H += v >>> 16),
          (k += O >>> 16),
          (L += k >>> 16),
          (H += L >>> 16),
          (o[6] = GA = (L & 65535) | (H << 16)),
          (E[6] = ie = (O & 65535) | (k << 16)),
          (v = TA),
          (G = ne),
          (O = G & 65535),
          (k = G >>> 16),
          (L = v & 65535),
          (H = v >>> 16),
          (v = o[7]),
          (G = E[7]),
          (O += G & 65535),
          (k += G >>> 16),
          (L += v & 65535),
          (H += v >>> 16),
          (k += O >>> 16),
          (L += k >>> 16),
          (H += L >>> 16),
          (o[7] = TA = (L & 65535) | (H << 16)),
          (E[7] = ne = (O & 65535) | (k << 16)),
          (ue += 128),
          (n -= 128);
      }
      return n;
    }
    function I(o, E, B) {
      var n = new Int32Array(8),
        Q = new Int32Array(8),
        m = new Uint8Array(256),
        F,
        U = B;
      for (
        n[0] = 1779033703,
          n[1] = 3144134277,
          n[2] = 1013904242,
          n[3] = 2773480762,
          n[4] = 1359893119,
          n[5] = 2600822924,
          n[6] = 528734635,
          n[7] = 1541459225,
          Q[0] = 4089235720,
          Q[1] = 2227873595,
          Q[2] = 4271175723,
          Q[3] = 1595750129,
          Q[4] = 2917565137,
          Q[5] = 725511199,
          Q[6] = 4215389547,
          Q[7] = 327033209,
          a(n, Q, E, B),
          B %= 128,
          F = 0;
        F < B;
        F++
      )
        m[F] = E[U - B + F];
      for (
        m[B] = 128,
          B = 256 - 128 * (B < 112 ? 1 : 0),
          m[B - 9] = 0,
          nA(m, B - 8, (U / 536870912) | 0, U << 3),
          a(n, Q, m, B),
          F = 0;
        F < 8;
        F++
      )
        nA(o, 8 * F, n[F], Q[F]);
      return 0;
    }
    function u(o, E) {
      var B = e(),
        n = e(),
        Q = e(),
        m = e(),
        F = e(),
        U = e(),
        K = e(),
        aA = e(),
        X = e();
      l(B, o[1], o[0]),
        l(X, E[1], E[0]),
        QA(B, B, X),
        ce(n, o[0], o[1]),
        ce(X, E[0], E[1]),
        QA(n, n, X),
        QA(Q, o[3], E[3]),
        QA(Q, Q, Y),
        QA(m, o[2], E[2]),
        ce(m, m, m),
        l(F, n, B),
        l(U, m, Q),
        ce(K, m, Q),
        ce(aA, n, B),
        QA(o[0], F, U),
        QA(o[1], aA, K),
        QA(o[2], K, U),
        QA(o[3], F, aA);
    }
    function y(o, E, B) {
      var n;
      for (n = 0; n < 4; n++) KA(o[n], E[n], B);
    }
    function R(o, E) {
      var B = e(),
        n = e(),
        Q = e();
      Ye(Q, E[2]),
        QA(B, E[0], Q),
        QA(n, E[1], Q),
        le(o, n),
        (o[31] ^= zA(B) << 7);
    }
    function J(o, E, B) {
      var n, Q;
      for (
        se(o[0], f), se(o[1], h), se(o[2], h), se(o[3], f), Q = 255;
        Q >= 0;
        --Q
      )
        (n = (B[(Q / 8) | 0] >> (Q & 7)) & 1),
          y(o, E, n),
          u(E, o),
          u(o, o),
          y(o, E, n);
    }
    function tA(o, E) {
      var B = [e(), e(), e(), e()];
      se(B[0], M), se(B[1], z), se(B[2], h), QA(B[3], M, z), J(o, B, E);
    }
    function cA(o, E, B) {
      var n = new Uint8Array(64),
        Q = [e(), e(), e(), e()],
        m;
      for (
        B || r(E, 32),
          I(n, E, 32),
          n[0] &= 248,
          n[31] &= 127,
          n[31] |= 64,
          tA(Q, n),
          R(o, Q),
          m = 0;
        m < 32;
        m++
      )
        E[m + 32] = o[m];
      return 0;
    }
    var dA = new Float64Array([
      237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
    ]);
    function P(o, E) {
      var B, n, Q, m;
      for (n = 63; n >= 32; --n) {
        for (B = 0, Q = n - 32, m = n - 12; Q < m; ++Q)
          (E[Q] += B - 16 * E[n] * dA[Q - (n - 32)]),
            (B = Math.floor((E[Q] + 128) / 256)),
            (E[Q] -= B * 256);
        (E[Q] += B), (E[n] = 0);
      }
      for (B = 0, Q = 0; Q < 32; Q++)
        (E[Q] += B - (E[31] >> 4) * dA[Q]), (B = E[Q] >> 8), (E[Q] &= 255);
      for (Q = 0; Q < 32; Q++) E[Q] -= B * dA[Q];
      for (n = 0; n < 32; n++) (E[n + 1] += E[n] >> 8), (o[n] = E[n] & 255);
    }
    function DA(o) {
      var E = new Float64Array(64),
        B;
      for (B = 0; B < 64; B++) E[B] = o[B];
      for (B = 0; B < 64; B++) o[B] = 0;
      P(o, E);
    }
    function $A(o, E, B, n) {
      var Q = new Uint8Array(64),
        m = new Uint8Array(64),
        F = new Uint8Array(64),
        U,
        K,
        aA = new Float64Array(64),
        X = [e(), e(), e(), e()];
      I(Q, n, 32), (Q[0] &= 248), (Q[31] &= 127), (Q[31] |= 64);
      var bA = B + 64;
      for (U = 0; U < B; U++) o[64 + U] = E[U];
      for (U = 0; U < 32; U++) o[32 + U] = Q[32 + U];
      for (
        I(F, o.subarray(32), B + 32), DA(F), tA(X, F), R(o, X), U = 32;
        U < 64;
        U++
      )
        o[U] = n[U];
      for (I(m, o, B + 64), DA(m), U = 0; U < 64; U++) aA[U] = 0;
      for (U = 0; U < 32; U++) aA[U] = F[U];
      for (U = 0; U < 32; U++)
        for (K = 0; K < 32; K++) aA[U + K] += m[U] * Q[K];
      return P(o.subarray(32), aA), bA;
    }
    function Ge(o, E) {
      var B = e(),
        n = e(),
        Q = e(),
        m = e(),
        F = e(),
        U = e(),
        K = e();
      return (
        se(o[2], h),
        PA(o[1], E),
        oe(Q, o[1]),
        QA(m, Q, D),
        l(Q, Q, o[2]),
        ce(m, o[2], m),
        oe(F, m),
        oe(U, F),
        QA(K, U, F),
        QA(B, K, Q),
        QA(B, B, m),
        IA(B, B),
        QA(B, B, Q),
        QA(B, B, m),
        QA(B, B, m),
        QA(o[0], B, m),
        oe(n, o[0]),
        QA(n, n, m),
        xe(n, Q) && QA(o[0], o[0], T),
        oe(n, o[0]),
        QA(n, n, m),
        xe(n, Q)
          ? -1
          : (zA(o[0]) === E[31] >> 7 && l(o[0], f, o[0]),
            QA(o[3], o[0], o[1]),
            0)
      );
    }
    function Pe(o, E, B, n) {
      var Q,
        m = new Uint8Array(32),
        F = new Uint8Array(64),
        U = [e(), e(), e(), e()],
        K = [e(), e(), e(), e()];
      if (B < 64 || Ge(K, n)) return -1;
      for (Q = 0; Q < B; Q++) o[Q] = E[Q];
      for (Q = 0; Q < 32; Q++) o[Q + 32] = n[Q];
      if (
        (I(F, o, B),
        DA(F),
        J(U, K, F),
        tA(K, E.subarray(32)),
        u(U, K),
        R(m, U),
        (B -= 64),
        MA(E, 0, m, 0))
      ) {
        for (Q = 0; Q < B; Q++) o[Q] = 0;
        return -1;
      }
      for (Q = 0; Q < B; Q++) o[Q] = E[Q + 64];
      return B;
    }
    var je = 32,
      xA = 24,
      Ne = 32,
      ge = 16,
      ee = 32,
      qA = 32,
      ot = 32,
      YA = 32,
      Dt = 32,
      Gt = xA,
      fr = Ne,
      ur = ge,
      Te = 64,
      me = 32,
      gt = 64,
      Tt = 32,
      Mt = 64;
    A.lowlevel = {
      crypto_core_hsalsa20: FA,
      crypto_stream_xor: j,
      crypto_stream: LA,
      crypto_stream_salsa20_xor: gA,
      crypto_stream_salsa20: mA,
      crypto_onetimeauth: UA,
      crypto_onetimeauth_verify: kA,
      crypto_verify_16: NA,
      crypto_verify_32: MA,
      crypto_secretbox: Ae,
      crypto_secretbox_open: ZA,
      crypto_scalarmult: BA,
      crypto_scalarmult_base: C,
      crypto_box_beforenm: x,
      crypto_box_afternm: b,
      crypto_box: N,
      crypto_box_open: g,
      crypto_box_keypair: d,
      crypto_hash: I,
      crypto_sign: $A,
      crypto_sign_keypair: cA,
      crypto_sign_open: Pe,
      crypto_secretbox_KEYBYTES: je,
      crypto_secretbox_NONCEBYTES: xA,
      crypto_secretbox_ZEROBYTES: Ne,
      crypto_secretbox_BOXZEROBYTES: ge,
      crypto_scalarmult_BYTES: ee,
      crypto_scalarmult_SCALARBYTES: qA,
      crypto_box_PUBLICKEYBYTES: ot,
      crypto_box_SECRETKEYBYTES: YA,
      crypto_box_BEFORENMBYTES: Dt,
      crypto_box_NONCEBYTES: Gt,
      crypto_box_ZEROBYTES: fr,
      crypto_box_BOXZEROBYTES: ur,
      crypto_sign_BYTES: Te,
      crypto_sign_PUBLICKEYBYTES: me,
      crypto_sign_SECRETKEYBYTES: gt,
      crypto_sign_SEEDBYTES: Tt,
      crypto_hash_BYTES: Mt,
      gf: e,
      D,
      L: dA,
      pack25519: le,
      unpack25519: PA,
      M: QA,
      A: ce,
      S: oe,
      Z: l,
      pow2523: IA,
      add: u,
      set25519: se,
      modL: P,
      scalarmult: J,
      scalarbase: tA,
    };
    function hr(o, E) {
      if (o.length !== je) throw new Error("bad key size");
      if (E.length !== xA) throw new Error("bad nonce size");
    }
    function fe(o, E) {
      if (o.length !== ot) throw new Error("bad public key size");
      if (E.length !== YA) throw new Error("bad secret key size");
    }
    function De() {
      for (var o = 0; o < arguments.length; o++)
        if (!(arguments[o] instanceof Uint8Array))
          throw new TypeError("unexpected type, use Uint8Array");
    }
    function Qr(o) {
      for (var E = 0; E < o.length; E++) o[E] = 0;
    }
    (A.randomBytes = function (o) {
      var E = new Uint8Array(o);
      return r(E, o), E;
    }),
      (A.secretbox = function (o, E, B) {
        De(o, E, B), hr(B, E);
        for (
          var n = new Uint8Array(Ne + o.length),
            Q = new Uint8Array(n.length),
            m = 0;
          m < o.length;
          m++
        )
          n[m + Ne] = o[m];
        return Ae(Q, n, n.length, E, B), Q.subarray(ge);
      }),
      (A.secretbox.open = function (o, E, B) {
        De(o, E, B), hr(B, E);
        for (
          var n = new Uint8Array(ge + o.length),
            Q = new Uint8Array(n.length),
            m = 0;
          m < o.length;
          m++
        )
          n[m + ge] = o[m];
        return n.length < 32 || ZA(Q, n, n.length, E, B) !== 0
          ? null
          : Q.subarray(Ne);
      }),
      (A.secretbox.keyLength = je),
      (A.secretbox.nonceLength = xA),
      (A.secretbox.overheadLength = ge),
      (A.scalarMult = function (o, E) {
        if ((De(o, E), o.length !== qA)) throw new Error("bad n size");
        if (E.length !== ee) throw new Error("bad p size");
        var B = new Uint8Array(ee);
        return BA(B, o, E), B;
      }),
      (A.scalarMult.base = function (o) {
        if ((De(o), o.length !== qA)) throw new Error("bad n size");
        var E = new Uint8Array(ee);
        return C(E, o), E;
      }),
      (A.scalarMult.scalarLength = qA),
      (A.scalarMult.groupElementLength = ee),
      (A.box = function (o, E, B, n) {
        var Q = A.box.before(B, n);
        return A.secretbox(o, E, Q);
      }),
      (A.box.before = function (o, E) {
        De(o, E), fe(o, E);
        var B = new Uint8Array(Dt);
        return x(B, o, E), B;
      }),
      (A.box.after = A.secretbox),
      (A.box.open = function (o, E, B, n) {
        var Q = A.box.before(B, n);
        return A.secretbox.open(o, E, Q);
      }),
      (A.box.open.after = A.secretbox.open),
      (A.box.keyPair = function () {
        var o = new Uint8Array(ot),
          E = new Uint8Array(YA);
        return d(o, E), { publicKey: o, secretKey: E };
      }),
      (A.box.keyPair.fromSecretKey = function (o) {
        if ((De(o), o.length !== YA)) throw new Error("bad secret key size");
        var E = new Uint8Array(ot);
        return C(E, o), { publicKey: E, secretKey: new Uint8Array(o) };
      }),
      (A.box.publicKeyLength = ot),
      (A.box.secretKeyLength = YA),
      (A.box.sharedKeyLength = Dt),
      (A.box.nonceLength = Gt),
      (A.box.overheadLength = A.secretbox.overheadLength),
      (A.sign = function (o, E) {
        if ((De(o, E), E.length !== gt)) throw new Error("bad secret key size");
        var B = new Uint8Array(Te + o.length);
        return $A(B, o, o.length, E), B;
      }),
      (A.sign.open = function (o, E) {
        if ((De(o, E), E.length !== me)) throw new Error("bad public key size");
        var B = new Uint8Array(o.length),
          n = Pe(B, o, o.length, E);
        if (n < 0) return null;
        for (var Q = new Uint8Array(n), m = 0; m < Q.length; m++) Q[m] = B[m];
        return Q;
      }),
      (A.sign.detached = function (o, E) {
        for (
          var B = A.sign(o, E), n = new Uint8Array(Te), Q = 0;
          Q < n.length;
          Q++
        )
          n[Q] = B[Q];
        return n;
      }),
      (A.sign.detached.verify = function (o, E, B) {
        if ((De(o, E, B), E.length !== Te))
          throw new Error("bad signature size");
        if (B.length !== me) throw new Error("bad public key size");
        var n = new Uint8Array(Te + o.length),
          Q = new Uint8Array(Te + o.length),
          m;
        for (m = 0; m < Te; m++) n[m] = E[m];
        for (m = 0; m < o.length; m++) n[m + Te] = o[m];
        return Pe(Q, n, n.length, B) >= 0;
      }),
      (A.sign.keyPair = function () {
        var o = new Uint8Array(me),
          E = new Uint8Array(gt);
        return cA(o, E), { publicKey: o, secretKey: E };
      }),
      (A.sign.keyPair.fromSecretKey = function (o) {
        if ((De(o), o.length !== gt)) throw new Error("bad secret key size");
        for (var E = new Uint8Array(me), B = 0; B < E.length; B++)
          E[B] = o[32 + B];
        return { publicKey: E, secretKey: new Uint8Array(o) };
      }),
      (A.sign.keyPair.fromSeed = function (o) {
        if ((De(o), o.length !== Tt)) throw new Error("bad seed size");
        for (
          var E = new Uint8Array(me), B = new Uint8Array(gt), n = 0;
          n < 32;
          n++
        )
          B[n] = o[n];
        return cA(E, B, !0), { publicKey: E, secretKey: B };
      }),
      (A.sign.publicKeyLength = me),
      (A.sign.secretKeyLength = gt),
      (A.sign.seedLength = Tt),
      (A.sign.signatureLength = Te),
      (A.hash = function (o) {
        De(o);
        var E = new Uint8Array(Mt);
        return I(E, o, o.length), E;
      }),
      (A.hash.hashLength = Mt),
      (A.verify = function (o, E) {
        return (
          De(o, E),
          o.length === 0 || E.length === 0 || o.length !== E.length
            ? !1
            : EA(o, 0, E, 0, o.length) === 0
        );
      }),
      (A.setPRNG = function (o) {
        r = o;
      }),
      (function () {
        var o = typeof self < "u" ? self.crypto || self.msCrypto : null;
        if (o && o.getRandomValues) {
          var E = 65536;
          A.setPRNG(function (B, n) {
            var Q,
              m = new Uint8Array(n);
            for (Q = 0; Q < n; Q += E)
              o.getRandomValues(m.subarray(Q, Q + Math.min(n - Q, E)));
            for (Q = 0; Q < n; Q++) B[Q] = m[Q];
            Qr(m);
          });
        } else
          typeof Wo < "u" &&
            ((o = Zo),
            o &&
              o.randomBytes &&
              A.setPRNG(function (B, n) {
                var Q,
                  m = o.randomBytes(n);
                for (Q = 0; Q < n; Q++) B[Q] = m[Q];
                Qr(m);
              }));
      })();
  })(t.exports ? t.exports : (self.nacl = self.nacl || {}));
})(Ea);
var Pt = Ea.exports;
function Xr(t) {
  var A;
  return new Uint8Array(
    ((A = t.match(/.{1,2}/g)) !== null && A !== void 0 ? A : []).map((e) =>
      parseInt(e, 16)
    )
  ).buffer;
}
function dt(t) {
  return new Uint8Array(t).reduce(
    (A, e) => A + e.toString(16).padStart(2, "0"),
    ""
  );
}
const Xo = (t, A) => {
    if (t.byteLength !== A.byteLength) return !1;
    const e = new Uint8Array(t),
      r = new Uint8Array(A);
    for (let s = 0; s < e.length; s++) if (e[s] !== r[s]) return !1;
    return !0;
  },
  Ni = (t) => {
    if (t <= 127) return 1;
    if (t <= 255) return 2;
    if (t <= 65535) return 3;
    if (t <= 16777215) return 4;
    throw new Error("Length too long (> 4 bytes)");
  },
  bi = (t, A, e) => {
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
  $r = (t, A) => {
    if (t[A] < 128) return 1;
    if (t[A] === 128) throw new Error("Invalid length 0");
    if (t[A] === 129) return 2;
    if (t[A] === 130) return 3;
    if (t[A] === 131) return 4;
    throw new Error("Length too long (> 4 bytes)");
  },
  $o = (t, A) => {
    const e = $r(t, A);
    if (e === 1) return t[A];
    if (e === 2) return t[A + 1];
    if (e === 3) return (t[A + 1] << 8) + t[A + 2];
    if (e === 4) return (t[A + 1] << 16) + (t[A + 2] << 8) + t[A + 3];
    throw new Error("Length too long (> 4 bytes)");
  };
Uint8Array.from([48, 12, 6, 10, 43, 6, 1, 4, 1, 131, 184, 67, 1, 1]);
const Fi = Uint8Array.from([48, 5, 6, 3, 43, 101, 112]);
Uint8Array.from([
  48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 10,
]);
function Ag(t, A) {
  const e = 2 + Ni(t.byteLength + 1),
    r = A.byteLength + e + t.byteLength;
  let s = 0;
  const c = new Uint8Array(1 + Ni(r) + r);
  return (
    (c[s++] = 48),
    (s += bi(c, s, r)),
    c.set(A, s),
    (s += A.byteLength),
    (c[s++] = 3),
    (s += bi(c, s, t.byteLength + 1)),
    (c[s++] = 0),
    c.set(new Uint8Array(t), s),
    c
  );
}
const eg = (t, A) => {
  let e = 0;
  const r = (h, S) => {
      if (s[e++] !== h) throw new Error("Expected: " + S);
    },
    s = new Uint8Array(t);
  if (
    (r(48, "sequence"), (e += $r(s, e)), !Xo(s.slice(e, e + A.byteLength), A))
  )
    throw new Error("Not the expected OID.");
  (e += A.byteLength), r(3, "bit string");
  const c = $o(s, e) - 1;
  (e += $r(s, e)), r(0, "0 padding");
  const f = s.slice(e);
  if (c !== f.length)
    throw new Error(
      `DER payload mismatch: Expected length ${c} actual length ${f.length}`
    );
  return f;
};
class ze {
  constructor(A) {
    (this.rawKey = A), (this.derKey = ze.derEncode(A));
  }
  static from(A) {
    return this.fromDer(A.toDer());
  }
  static fromRaw(A) {
    return new ze(A);
  }
  static fromDer(A) {
    return new ze(this.derDecode(A));
  }
  static derEncode(A) {
    return Ag(A, Fi).buffer;
  }
  static derDecode(A) {
    const e = eg(A, Fi);
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
ze.RAW_KEY_LENGTH = 32;
class Bt extends oi {
  constructor(A, e) {
    super(), (this._privateKey = e), (this._publicKey = ze.from(A));
  }
  static generate(A) {
    if (A && A.length !== 32)
      throw new Error("Ed25519 Seed needs to be 32 bytes long.");
    const { publicKey: e, secretKey: r } =
      A === void 0 ? Pt.sign.keyPair() : Pt.sign.keyPair.fromSeed(A);
    return new this(ze.fromRaw(e), r);
  }
  static fromParsedJson(A) {
    const [e, r] = A;
    return new Bt(ze.fromDer(Xr(e)), Xr(r));
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
    return new Bt(ze.fromRaw(A), e);
  }
  static fromSecretKey(A) {
    const e = Pt.sign.keyPair.fromSecretKey(new Uint8Array(A));
    return Bt.fromKeyPair(e.publicKey, e.secretKey);
  }
  toJSON() {
    return [dt(this._publicKey.toDer()), dt(this._privateKey)];
  }
  getKeyPair() {
    return { secretKey: this._privateKey, publicKey: this._publicKey };
  }
  getPublicKey() {
    return this._publicKey;
  }
  async sign(A) {
    const e = new Uint8Array(A);
    return Pt.sign.detached(e, new Uint8Array(this._privateKey)).buffer;
  }
}
class Ei extends Error {
  constructor(A) {
    super(A), (this.message = A), Object.setPrototypeOf(this, Ei.prototype);
  }
}
function Ri(t) {
  if (t) return t;
  if (typeof crypto < "u" && crypto.subtle) return crypto.subtle;
  throw new Ei(
    "Global crypto was not available and none was provided. Please inlcude a SubtleCrypto implementation. See https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto"
  );
}
class er extends oi {
  constructor(A, e, r) {
    super(), (this._keyPair = A), (this._derKey = e), (this._subtleCrypto = r);
  }
  static async generate(A) {
    const {
        extractable: e = !1,
        keyUsages: r = ["sign", "verify"],
        subtleCrypto: s,
      } = A ?? {},
      c = Ri(s),
      f = await c.generateKey({ name: "ECDSA", namedCurve: "P-256" }, e, r),
      h = await c.exportKey("spki", f.publicKey);
    return new this(f, h, c);
  }
  static async fromKeyPair(A, e) {
    const r = Ri(e),
      s = await r.exportKey("spki", A.publicKey);
    return new er(A, s, r);
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
var tg =
  (globalThis && globalThis.__rest) ||
  function (t, A) {
    var e = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        A.indexOf(r) < 0 &&
        (e[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
        A.indexOf(r[s]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[s]) &&
          (e[r[s]] = t[r[s]]);
    return e;
  };
const rg = new TextEncoder().encode("ic-request-auth-delegation"),
  ig = new TextEncoder().encode(`
ic-request`);
function _r(t) {
  if (typeof t != "string" || t.length < 64)
    throw new Error("Invalid public key.");
  return Xr(t);
}
class ci {
  constructor(A, e, r) {
    (this.pubkey = A), (this.expiration = e), (this.targets = r);
  }
  toCBOR() {
    return _e.value.map(
      Object.assign(
        {
          pubkey: _e.value.bytes(this.pubkey),
          expiration: _e.value.u64(this.expiration.toString(16), 16),
        },
        this.targets && {
          targets: _e.value.array(
            this.targets.map((A) => _e.value.bytes(A.toUint8Array()))
          ),
        }
      )
    );
  }
  toJSON() {
    return Object.assign(
      { expiration: this.expiration.toString(16), pubkey: dt(this.pubkey) },
      this.targets && { targets: this.targets.map((A) => A.toHex()) }
    );
  }
}
async function ng(t, A, e, r) {
  const s = new ci(A.toDer(), BigInt(+e) * BigInt(1e6), r),
    c = new Uint8Array([...rg, ...new Uint8Array(Br(s))]),
    f = await t.sign(c);
  return { delegation: s, signature: f };
}
class tr {
  constructor(A, e) {
    (this.delegations = A), (this.publicKey = e);
  }
  static async create(A, e, r = new Date(Date.now() + 15 * 60 * 1e3), s = {}) {
    var c, f;
    const h = await ng(A, e, r, s.targets);
    return new tr(
      [
        ...(((c = s.previous) === null || c === void 0
          ? void 0
          : c.delegations) || []),
        h,
      ],
      ((f = s.previous) === null || f === void 0 ? void 0 : f.publicKey) ||
        A.getPublicKey().toDer()
    );
  }
  static fromJSON(A) {
    const { publicKey: e, delegations: r } =
      typeof A == "string" ? JSON.parse(A) : A;
    if (!Array.isArray(r)) throw new Error("Invalid delegations.");
    const s = r.map((c) => {
      const { delegation: f, signature: h } = c,
        { pubkey: S, expiration: D, targets: Y } = f;
      if (Y !== void 0 && !Array.isArray(Y))
        throw new Error("Invalid targets.");
      return {
        delegation: new ci(
          _r(S),
          BigInt(`0x${D}`),
          Y &&
            Y.map((M) => {
              if (typeof M != "string") throw new Error("Invalid target.");
              return XA.fromHex(M);
            })
        ),
        signature: _r(h),
      };
    });
    return new this(s, _r(e));
  }
  static fromDelegations(A, e) {
    return new this(A, e);
  }
  toJSON() {
    return {
      delegations: this.delegations.map((A) => {
        const { delegation: e, signature: r } = A,
          { targets: s } = e;
        return {
          delegation: Object.assign(
            { expiration: e.expiration.toString(16), pubkey: dt(e.pubkey) },
            s && { targets: s.map((c) => c.toHex()) }
          ),
          signature: dt(r),
        };
      }),
      publicKey: dt(this.publicKey),
    };
  }
}
class vi extends oi {
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
      r = tg(A, ["body"]),
      s = await Br(e);
    return Object.assign(Object.assign({}, r), {
      body: {
        content: e,
        sender_sig: await this.sign(
          new Uint8Array([...ig, ...new Uint8Array(s)])
        ),
        sender_delegation: this._delegation.delegations,
        sender_pubkey: this._delegation.publicKey,
      },
    });
  }
}
function ag(t, A) {
  for (const { delegation: s } of t.delegations)
    if (+new Date(Number(s.expiration / BigInt(1e6))) <= +Date.now()) return !1;
  const e = [],
    r = A?.scope;
  r &&
    (Array.isArray(r)
      ? e.push(...r.map((s) => (typeof s == "string" ? XA.fromText(s) : s)))
      : e.push(typeof r == "string" ? XA.fromText(r) : r));
  for (const s of e) {
    const c = s.toText();
    for (const { delegation: f } of t.delegations) {
      if (f.targets === void 0) continue;
      let h = !0;
      for (const S of f.targets)
        if (S.toText() === c) {
          h = !1;
          break;
        }
      if (h) return !1;
    }
  }
  return !0;
}
var Gi;
(function (t) {
  t[(t.ECDSA_WITH_SHA256 = -7)] = "ECDSA_WITH_SHA256";
})(Gi || (Gi = {}));
const Ti = ["mousedown", "mousemove", "keydown", "touchstart", "wheel"];
class Mi {
  constructor(A = {}) {
    var e;
    (this.callbacks = []),
      (this.idleTimeout = 10 * 60 * 1e3),
      (this.timeoutID = void 0);
    const { onIdle: r, idleTimeout: s = 10 * 60 * 1e3 } = A || {};
    (this.callbacks = r ? [r] : []), (this.idleTimeout = s);
    const c = this._resetTimer.bind(this);
    window.addEventListener("load", c, !0),
      Ti.forEach(function (h) {
        document.addEventListener(h, c, !0);
      });
    const f = (h, S) => {
      let D;
      return (...Y) => {
        const M = this,
          z = function () {
            (D = void 0), h.apply(M, Y);
          };
        clearTimeout(D), (D = window.setTimeout(z, S));
      };
    };
    if (A?.captureScroll) {
      const h = f(
        c,
        (e = A?.scrollDebounce) !== null && e !== void 0 ? e : 100
      );
      window.addEventListener("scroll", h, !0);
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
    Ti.forEach(function (e) {
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
const sg = (t, A) => A.some((e) => t instanceof e);
let Ui, ki;
function og() {
  return (
    Ui ||
    (Ui = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function gg() {
  return (
    ki ||
    (ki = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const ca = new WeakMap(),
  Ai = new WeakMap(),
  fa = new WeakMap(),
  Nr = new WeakMap(),
  fi = new WeakMap();
function Ig(t) {
  const A = new Promise((e, r) => {
    const s = () => {
        t.removeEventListener("success", c), t.removeEventListener("error", f);
      },
      c = () => {
        e(it(t.result)), s();
      },
      f = () => {
        r(t.error), s();
      };
    t.addEventListener("success", c), t.addEventListener("error", f);
  });
  return (
    A.then((e) => {
      e instanceof IDBCursor && ca.set(e, t);
    }).catch(() => {}),
    fi.set(A, t),
    A
  );
}
function Bg(t) {
  if (Ai.has(t)) return;
  const A = new Promise((e, r) => {
    const s = () => {
        t.removeEventListener("complete", c),
          t.removeEventListener("error", f),
          t.removeEventListener("abort", f);
      },
      c = () => {
        e(), s();
      },
      f = () => {
        r(t.error || new DOMException("AbortError", "AbortError")), s();
      };
    t.addEventListener("complete", c),
      t.addEventListener("error", f),
      t.addEventListener("abort", f);
  });
  Ai.set(t, A);
}
let ei = {
  get(t, A, e) {
    if (t instanceof IDBTransaction) {
      if (A === "done") return Ai.get(t);
      if (A === "objectStoreNames") return t.objectStoreNames || fa.get(t);
      if (A === "store")
        return e.objectStoreNames[1]
          ? void 0
          : e.objectStore(e.objectStoreNames[0]);
    }
    return it(t[A]);
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
function Eg(t) {
  ei = t(ei);
}
function cg(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (A, ...e) {
        const r = t.call(br(this), A, ...e);
        return fa.set(r, A.sort ? A.sort() : [A]), it(r);
      }
    : gg().includes(t)
    ? function (...A) {
        return t.apply(br(this), A), it(ca.get(this));
      }
    : function (...A) {
        return it(t.apply(br(this), A));
      };
}
function fg(t) {
  return typeof t == "function"
    ? cg(t)
    : (t instanceof IDBTransaction && Bg(t),
      sg(t, og()) ? new Proxy(t, ei) : t);
}
function it(t) {
  if (t instanceof IDBRequest) return Ig(t);
  if (Nr.has(t)) return Nr.get(t);
  const A = fg(t);
  return A !== t && (Nr.set(t, A), fi.set(A, t)), A;
}
const br = (t) => fi.get(t);
function ug(t, A, { blocked: e, upgrade: r, blocking: s, terminated: c } = {}) {
  const f = indexedDB.open(t, A),
    h = it(f);
  return (
    r &&
      f.addEventListener("upgradeneeded", (S) => {
        r(it(f.result), S.oldVersion, S.newVersion, it(f.transaction), S);
      }),
    e && f.addEventListener("blocked", (S) => e(S.oldVersion, S.newVersion, S)),
    h
      .then((S) => {
        c && S.addEventListener("close", () => c()),
          s &&
            S.addEventListener("versionchange", (D) =>
              s(D.oldVersion, D.newVersion, D)
            );
      })
      .catch(() => {}),
    h
  );
}
const hg = ["get", "getKey", "getAll", "getAllKeys", "count"],
  Qg = ["put", "add", "delete", "clear"],
  Fr = new Map();
function Li(t, A) {
  if (!(t instanceof IDBDatabase && !(A in t) && typeof A == "string")) return;
  if (Fr.get(A)) return Fr.get(A);
  const e = A.replace(/FromIndex$/, ""),
    r = A !== e,
    s = Qg.includes(e);
  if (
    !(e in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(s || hg.includes(e))
  )
    return;
  const c = async function (f, ...h) {
    const S = this.transaction(f, s ? "readwrite" : "readonly");
    let D = S.store;
    return (
      r && (D = D.index(h.shift())),
      (await Promise.all([D[e](...h), s && S.done]))[0]
    );
  };
  return Fr.set(A, c), c;
}
Eg((t) => ({
  ...t,
  get: (A, e, r) => Li(A, e) || t.get(A, e, r),
  has: (A, e) => !!Li(A, e) || t.has(A, e),
}));
const ua = "auth-client-db",
  ha = "ic-keyval",
  Cg = async (t = ua, A = ha, e) => (
    Qa &&
      localStorage != null &&
      localStorage.getItem(tt) &&
      (localStorage.removeItem(tt), localStorage.removeItem(et)),
    await ug(t, e, {
      upgrade: (r) => {
        r.objectStoreNames,
          r.objectStoreNames.contains(A) && r.clear(A),
          r.createObjectStore(A);
      },
    })
  );
async function lg(t, A, e) {
  return await t.get(A, e);
}
async function dg(t, A, e, r) {
  return await t.put(A, r, e);
}
async function wg(t, A, e) {
  return await t.delete(A, e);
}
class ui {
  constructor(A, e) {
    (this._db = A), (this._storeName = e);
  }
  static async create(A) {
    const { dbName: e = ua, storeName: r = ha, version: s = 1 } = A ?? {},
      c = await Cg(e, r, s);
    return new ui(c, r);
  }
  async set(A, e) {
    return await dg(this._db, this._storeName, A, e);
  }
  async get(A) {
    var e;
    return (e = await lg(this._db, this._storeName, A)) !== null && e !== void 0
      ? e
      : null;
  }
  async remove(A) {
    return await wg(this._db, this._storeName, A);
  }
}
const et = "identity",
  tt = "delegation",
  pg = "iv",
  yg = 1,
  Qa = typeof window < "u";
class xg {
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
class Sg {
  get _db() {
    return new Promise((A) => {
      if (this.initializedDb) {
        A(this.initializedDb);
        return;
      }
      ui.create({ version: yg }).then((e) => {
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
const mg = "https://identity.ic0.app",
  Dg = "#authorize",
  Rr = "ECDSA",
  vr = "Ed25519",
  _g = 500,
  Ng = "UserInterrupt";
class bg {
  constructor(A, e, r, s, c, f, h, S) {
    var D;
    (this._identity = A),
      (this._key = e),
      (this._chain = r),
      (this._storage = s),
      (this.idleManager = c),
      (this._createOptions = f),
      (this._idpWindow = h),
      (this._eventHandler = S);
    const Y = this.logout.bind(this),
      M = f?.idleOptions;
    !M?.onIdle &&
      !M?.disableDefaultIdleCallback &&
      ((D = this.idleManager) === null ||
        D === void 0 ||
        D.registerCallback(() => {
          Y(), location.reload();
        }));
  }
  static async create(A = {}) {
    var e, r, s;
    const c = (e = A.storage) !== null && e !== void 0 ? e : new Sg(),
      f = (r = A.keyType) !== null && r !== void 0 ? r : Rr;
    let h = null;
    if (A.identity) h = A.identity;
    else {
      let M = await c.get(et);
      if (!M && Qa)
        try {
          const z = new xg(),
            T = await z.get(tt),
            nA = await z.get(et);
          T &&
            nA &&
            f === Rr &&
            (console.log(
              "Discovered an identity stored in localstorage. Migrating to IndexedDB"
            ),
            await c.set(tt, T),
            await c.set(et, nA),
            (M = T),
            await z.remove(tt),
            await z.remove(et));
        } catch (z) {
          console.error("error while attempting to recover localstorage: " + z);
        }
      if (M)
        try {
          typeof M == "object"
            ? f === vr && typeof M == "string"
              ? (h = await Bt.fromJSON(M))
              : (h = await er.fromKeyPair(M))
            : typeof M == "string" && (h = Bt.fromJSON(M));
        } catch {}
    }
    let S = new Pr(),
      D = null;
    if (h)
      try {
        const M = await c.get(tt);
        if (typeof M == "object" && M !== null)
          throw new Error(
            "Delegation chain is incorrectly stored. A delegation chain should be stored as a string."
          );
        A.identity
          ? (S = A.identity)
          : M &&
            ((D = tr.fromJSON(M)),
            ag(D) ? (S = vi.fromDelegation(h, D)) : (await Gr(c), (h = null)));
      } catch (M) {
        console.error(M), await Gr(c), (h = null);
      }
    let Y;
    return (
      !((s = A.idleOptions) === null || s === void 0) && s.disableIdle
        ? (Y = void 0)
        : (D || A.identity) && (Y = Mi.create(A.idleOptions)),
      h ||
        (f === vr
          ? ((h = await Bt.generate()),
            await c.set(et, JSON.stringify(h.toJSON())))
          : (A.storage &&
              f === Rr &&
              console.warn(
                `You are using a custom storage provider that may not support CryptoKey storage. If you are using a custom storage provider that does not support CryptoKey storage, you should use '${vr}' as the key type, as it can serialize to a string`
              ),
            (h = await er.generate()),
            await c.set(et, h.getKeyPair()))),
      new this(S, h, D, c, Y, A)
    );
  }
  async _handleSuccess(A, e) {
    var r, s, c;
    const f = A.delegations.map((D) => ({
        delegation: new ci(
          D.delegation.pubkey,
          D.delegation.expiration,
          D.delegation.targets
        ),
        signature: D.signature.buffer,
      })),
      h = tr.fromDelegations(f, A.userPublicKey.buffer),
      S = this._key;
    if (S) {
      if (
        ((this._chain = h),
        (this._identity = vi.fromDelegation(S, this._chain)),
        (r = this._idpWindow) === null || r === void 0 || r.close(),
        !this.idleManager)
      ) {
        const D =
          (s = this._createOptions) === null || s === void 0
            ? void 0
            : s.idleOptions;
        (this.idleManager = Mi.create(D)),
          !D?.onIdle &&
            !D?.disableDefaultIdleCallback &&
            ((c = this.idleManager) === null ||
              c === void 0 ||
              c.registerCallback(() => {
                this.logout(), location.reload();
              }));
      }
      this._removeEventListener(),
        delete this._idpWindow,
        this._chain &&
          (await this._storage.set(tt, JSON.stringify(this._chain.toJSON()))),
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
    var e, r, s, c;
    const f = BigInt(8) * BigInt(36e11),
      h = new URL(
        ((e = A?.identityProvider) === null || e === void 0
          ? void 0
          : e.toString()) || mg
      );
    (h.hash = Dg),
      (r = this._idpWindow) === null || r === void 0 || r.close(),
      this._removeEventListener(),
      (this._eventHandler = this._getEventHandler(
        h,
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
        (c = window.open(
          h.toString(),
          "idpWindow",
          A?.windowOpenerFeatures
        )) !== null && c !== void 0
          ? c
          : void 0);
    const S = () => {
      this._idpWindow &&
        (this._idpWindow.closed
          ? this._handleFailure(Ng, A?.onError)
          : setTimeout(S, _g));
    };
    S();
  }
  _getEventHandler(A, e) {
    return async (r) => {
      var s, c, f;
      if (r.origin !== A.origin) {
        console.warn(
          `WARNING: expected origin '${A.origin}', got '${r.origin}' (ignoring)`
        );
        return;
      }
      const h = r.data;
      switch (h.kind) {
        case "authorize-ready": {
          const S = {
            kind: "authorize-client",
            sessionPublicKey: new Uint8Array(
              (s = this._key) === null || s === void 0
                ? void 0
                : s.getPublicKey().toDer()
            ),
            maxTimeToLive: e?.maxTimeToLive,
            derivationOrigin:
              (c = e?.derivationOrigin) === null || c === void 0
                ? void 0
                : c.toString(),
          };
          (f = this._idpWindow) === null ||
            f === void 0 ||
            f.postMessage(S, A.origin);
          break;
        }
        case "authorize-client-success":
          try {
            await this._handleSuccess(h, e?.onSuccess);
          } catch (S) {
            this._handleFailure(S.message, e?.onError);
          }
          break;
        case "authorize-client-failure":
          this._handleFailure(h.text, e?.onError);
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
      (await Gr(this._storage),
      (this._identity = new Pr()),
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
async function Gr(t) {
  await t.remove(et), await t.remove(tt), await t.remove(pg);
}
const Tr = () =>
  bg.create({
    idleOptions: { disableIdle: !0, disableDefaultIdleCallback: !0 },
  });
var Fg = ((t) => (
  (t[(t.FractionalMoreThan8Decimals = 0)] = "FractionalMoreThan8Decimals"),
  (t[(t.InvalidFormat = 1)] = "InvalidFormat"),
  t
))(Fg || {});
BigInt(1e8);
var Yi = "abcdefghijklmnopqrstuvwxyz234567",
  Ft = Object.create(null);
for (let t = 0; t < Yi.length; t++) Ft[Yi[t]] = t;
Ft[0] = Ft.o;
Ft[1] = Ft.i;
var qi = (t) => t == null;
const Rg = ({ width: t, height: A }) => {
  if (qi(window) || qi(window.top)) return;
  const {
      top: { innerWidth: e, innerHeight: r },
    } = window,
    s = r / 2 + screenY - A / 2,
    c = e / 2 + screenX - t / 2;
  return `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${t}, height=${A}, top=${s}, left=${c}`;
};
let Oe;
const vg = () => {
    const { subscribe: t, set: A, update: e } = Oi({ identity: void 0 });
    return {
      subscribe: t,
      sync: async () => {
        Oe = Oe ?? (await Tr());
        const r = await Oe.isAuthenticated();
        A({ identity: r ? Oe.getIdentity() : null });
      },
      signIn: ({ domain: r }) =>
        new Promise(async (s, c) => {
          Oe = Oe ?? (await Tr());
          const f = "https://identity.ic0.app";
          await Oe?.login({
            maxTimeToLive: la,
            onSuccess: () => {
              e((h) => ({ ...h, identity: Oe?.getIdentity() })), s();
            },
            onError: c,
            identityProvider: f,
            windowOpenerFeatures: Rg({ width: da, height: wa }),
          });
        }),
      signOut: async () => {
        await (Oe ?? (await Tr())).logout(),
          (Oe = null),
          e((s) => ({ ...s, identity: null }));
      },
    };
  },
  kg = vg();
function Gg() {
  const {
    subscribe: t,
    set: A,
    update: e,
  } = Oi({ visible: !1, message: "", type: "success" });
  function r(s, c = "success") {
    e(() => ({ visible: !0, message: s, type: c })),
      setTimeout(() => A({ visible: !1, message: "", type: "success" }), 3e3);
  }
  return { subscribe: t, show: r };
}
const Lg = Gg();
export {
  Bi as A,
  Ar as C,
  ia as H,
  XA as P,
  kg as a,
  vo as b,
  nt as c,
  Ro as d,
  It as e,
  lt as f,
  Lg as t,
};
