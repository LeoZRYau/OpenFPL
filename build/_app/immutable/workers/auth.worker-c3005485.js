BigInt(60 * 60 * 1e3 * 1e3 * 1e3 * 24 * 14);
const ki = 1e3;
var ze =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Li(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function mi(t) {
  if (t.__esModule) return t;
  var A = t.default;
  if (typeof A == "function") {
    var e = function B() {
      return this instanceof B
        ? Reflect.construct(A, arguments, this.constructor)
        : A.apply(this, arguments);
    };
    e.prototype = A.prototype;
  } else e = {};
  return (
    Object.defineProperty(e, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (B) {
      var a = Object.getOwnPropertyDescriptor(t, B);
      Object.defineProperty(
        e,
        B,
        a.get
          ? a
          : {
              enumerable: !0,
              get: function () {
                return t[B];
              },
            }
      );
    }),
    e
  );
}
var it = {},
  lt = {};
lt.byteLength = _i;
lt.toByteArray = Ji;
lt.fromByteArray = Ki;
var Re = [],
  pe = [],
  Yi = typeof Uint8Array < "u" ? Uint8Array : Array,
  bt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var je = 0, vi = bt.length; je < vi; ++je)
  (Re[je] = bt[je]), (pe[bt.charCodeAt(je)] = je);
pe["-".charCodeAt(0)] = 62;
pe["_".charCodeAt(0)] = 63;
function Or(t) {
  var A = t.length;
  if (A % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = t.indexOf("=");
  e === -1 && (e = A);
  var B = e === A ? 0 : 4 - (e % 4);
  return [e, B];
}
function _i(t) {
  var A = Or(t),
    e = A[0],
    B = A[1];
  return ((e + B) * 3) / 4 - B;
}
function Ti(t, A, e) {
  return ((A + e) * 3) / 4 - e;
}
function Ji(t) {
  var A,
    e = Or(t),
    B = e[0],
    a = e[1],
    w = new Yi(Ti(t, B, a)),
    p = 0,
    u = a > 0 ? B - 4 : B,
    b;
  for (b = 0; b < u; b += 4)
    (A =
      (pe[t.charCodeAt(b)] << 18) |
      (pe[t.charCodeAt(b + 1)] << 12) |
      (pe[t.charCodeAt(b + 2)] << 6) |
      pe[t.charCodeAt(b + 3)]),
      (w[p++] = (A >> 16) & 255),
      (w[p++] = (A >> 8) & 255),
      (w[p++] = A & 255);
  return (
    a === 2 &&
      ((A = (pe[t.charCodeAt(b)] << 2) | (pe[t.charCodeAt(b + 1)] >> 4)),
      (w[p++] = A & 255)),
    a === 1 &&
      ((A =
        (pe[t.charCodeAt(b)] << 10) |
        (pe[t.charCodeAt(b + 1)] << 4) |
        (pe[t.charCodeAt(b + 2)] >> 2)),
      (w[p++] = (A >> 8) & 255),
      (w[p++] = A & 255)),
    w
  );
}
function Hi(t) {
  return (
    Re[(t >> 18) & 63] + Re[(t >> 12) & 63] + Re[(t >> 6) & 63] + Re[t & 63]
  );
}
function qi(t, A, e) {
  for (var B, a = [], w = A; w < e; w += 3)
    (B =
      ((t[w] << 16) & 16711680) + ((t[w + 1] << 8) & 65280) + (t[w + 2] & 255)),
      a.push(Hi(B));
  return a.join("");
}
function Ki(t) {
  for (
    var A, e = t.length, B = e % 3, a = [], w = 16383, p = 0, u = e - B;
    p < u;
    p += w
  )
    a.push(qi(t, p, p + w > u ? u : p + w));
  return (
    B === 1
      ? ((A = t[e - 1]), a.push(Re[A >> 2] + Re[(A << 4) & 63] + "=="))
      : B === 2 &&
        ((A = (t[e - 2] << 8) + t[e - 1]),
        a.push(Re[A >> 10] + Re[(A >> 4) & 63] + Re[(A << 2) & 63] + "=")),
    a.join("")
  );
}
var wt = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ wt.read =
  function (t, A, e, B, a) {
    var w,
      p,
      u = a * 8 - B - 1,
      b = (1 << u) - 1,
      U = b >> 1,
      Z = -7,
      v = e ? a - 1 : 0,
      nA = e ? -1 : 1,
      gA = t[A + v];
    for (
      v += nA, w = gA & ((1 << -Z) - 1), gA >>= -Z, Z += u;
      Z > 0;
      w = w * 256 + t[A + v], v += nA, Z -= 8
    );
    for (
      p = w & ((1 << -Z) - 1), w >>= -Z, Z += B;
      Z > 0;
      p = p * 256 + t[A + v], v += nA, Z -= 8
    );
    if (w === 0) w = 1 - U;
    else {
      if (w === b) return p ? NaN : (gA ? -1 : 1) * (1 / 0);
      (p = p + Math.pow(2, B)), (w = w - U);
    }
    return (gA ? -1 : 1) * p * Math.pow(2, w - B);
  };
wt.write = function (t, A, e, B, a, w) {
  var p,
    u,
    b,
    U = w * 8 - a - 1,
    Z = (1 << U) - 1,
    v = Z >> 1,
    nA = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    gA = B ? 0 : w - 1,
    qA = B ? 1 : -1,
    MA = A < 0 || (A === 0 && 1 / A < 0) ? 1 : 0;
  for (
    A = Math.abs(A),
      isNaN(A) || A === 1 / 0
        ? ((u = isNaN(A) ? 1 : 0), (p = Z))
        : ((p = Math.floor(Math.log(A) / Math.LN2)),
          A * (b = Math.pow(2, -p)) < 1 && (p--, (b *= 2)),
          p + v >= 1 ? (A += nA / b) : (A += nA * Math.pow(2, 1 - v)),
          A * b >= 2 && (p++, (b /= 2)),
          p + v >= Z
            ? ((u = 0), (p = Z))
            : p + v >= 1
            ? ((u = (A * b - 1) * Math.pow(2, a)), (p = p + v))
            : ((u = A * Math.pow(2, v - 1) * Math.pow(2, a)), (p = 0)));
    a >= 8;
    t[e + gA] = u & 255, gA += qA, u /= 256, a -= 8
  );
  for (
    p = (p << a) | u, U += a;
    U > 0;
    t[e + gA] = p & 255, gA += qA, p /= 256, U -= 8
  );
  t[e + gA - qA] |= MA * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ (function (t) {
  var A = lt,
    e = wt,
    B =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  (t.Buffer = u), (t.SlowBuffer = LA), (t.INSPECT_MAX_BYTES = 50);
  var a = 2147483647;
  (t.kMaxLength = a),
    (u.TYPED_ARRAY_SUPPORT = w()),
    !u.TYPED_ARRAY_SUPPORT &&
      typeof console < "u" &&
      typeof console.error == "function" &&
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
  function w() {
    try {
      var I = new Uint8Array(1),
        r = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(r, Uint8Array.prototype),
        Object.setPrototypeOf(I, r),
        I.foo() === 42
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
  function p(I) {
    if (I > a)
      throw new RangeError(
        'The value "' + I + '" is invalid for option "size"'
      );
    var r = new Uint8Array(I);
    return Object.setPrototypeOf(r, u.prototype), r;
  }
  function u(I, r, n) {
    if (typeof I == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return v(I);
    }
    return b(I, r, n);
  }
  u.poolSize = 8192;
  function b(I, r, n) {
    if (typeof I == "string") return nA(I, r);
    if (ArrayBuffer.isView(I)) return qA(I);
    if (I == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof I
      );
    if (
      F(I, ArrayBuffer) ||
      (I && F(I.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (F(I, SharedArrayBuffer) || (I && F(I.buffer, SharedArrayBuffer))))
    )
      return MA(I, r, n);
    if (typeof I == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var E = I.valueOf && I.valueOf();
    if (E != null && E !== I) return u.from(E, r, n);
    var f = Be(I);
    if (f) return f;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof I[Symbol.toPrimitive] == "function"
    )
      return u.from(I[Symbol.toPrimitive]("string"), r, n);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof I
    );
  }
  (u.from = function (I, r, n) {
    return b(I, r, n);
  }),
    Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(u, Uint8Array);
  function U(I) {
    if (typeof I != "number")
      throw new TypeError('"size" argument must be of type number');
    if (I < 0)
      throw new RangeError(
        'The value "' + I + '" is invalid for option "size"'
      );
  }
  function Z(I, r, n) {
    return (
      U(I),
      I <= 0
        ? p(I)
        : r !== void 0
        ? typeof n == "string"
          ? p(I).fill(r, n)
          : p(I).fill(r)
        : p(I)
    );
  }
  u.alloc = function (I, r, n) {
    return Z(I, r, n);
  };
  function v(I) {
    return U(I), p(I < 0 ? 0 : ae(I) | 0);
  }
  (u.allocUnsafe = function (I) {
    return v(I);
  }),
    (u.allocUnsafeSlow = function (I) {
      return v(I);
    });
  function nA(I, r) {
    if (((typeof r != "string" || r === "") && (r = "utf8"), !u.isEncoding(r)))
      throw new TypeError("Unknown encoding: " + r);
    var n = de(I, r) | 0,
      E = p(n),
      f = E.write(I, r);
    return f !== n && (E = E.slice(0, f)), E;
  }
  function gA(I) {
    for (
      var r = I.length < 0 ? 0 : ae(I.length) | 0, n = p(r), E = 0;
      E < r;
      E += 1
    )
      n[E] = I[E] & 255;
    return n;
  }
  function qA(I) {
    if (F(I, Uint8Array)) {
      var r = new Uint8Array(I);
      return MA(r.buffer, r.byteOffset, r.byteLength);
    }
    return gA(I);
  }
  function MA(I, r, n) {
    if (r < 0 || I.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (I.byteLength < r + (n || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var E;
    return (
      r === void 0 && n === void 0
        ? (E = new Uint8Array(I))
        : n === void 0
        ? (E = new Uint8Array(I, r))
        : (E = new Uint8Array(I, r, n)),
      Object.setPrototypeOf(E, u.prototype),
      E
    );
  }
  function Be(I) {
    if (u.isBuffer(I)) {
      var r = ae(I.length) | 0,
        n = p(r);
      return n.length === 0 || I.copy(n, 0, 0, r), n;
    }
    if (I.length !== void 0)
      return typeof I.length != "number" || S(I.length) ? p(0) : gA(I);
    if (I.type === "Buffer" && Array.isArray(I.data)) return gA(I.data);
  }
  function ae(I) {
    if (I >= a)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          a.toString(16) +
          " bytes"
      );
    return I | 0;
  }
  function LA(I) {
    return +I != I && (I = 0), u.alloc(+I);
  }
  (u.isBuffer = function (r) {
    return r != null && r._isBuffer === !0 && r !== u.prototype;
  }),
    (u.compare = function (r, n) {
      if (
        (F(r, Uint8Array) && (r = u.from(r, r.offset, r.byteLength)),
        F(n, Uint8Array) && (n = u.from(n, n.offset, n.byteLength)),
        !u.isBuffer(r) || !u.isBuffer(n))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (r === n) return 0;
      for (
        var E = r.length, f = n.length, y = 0, M = Math.min(E, f);
        y < M;
        ++y
      )
        if (r[y] !== n[y]) {
          (E = r[y]), (f = n[y]);
          break;
        }
      return E < f ? -1 : f < E ? 1 : 0;
    }),
    (u.isEncoding = function (r) {
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
    (u.concat = function (r, n) {
      if (!Array.isArray(r))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (r.length === 0) return u.alloc(0);
      var E;
      if (n === void 0) for (n = 0, E = 0; E < r.length; ++E) n += r[E].length;
      var f = u.allocUnsafe(n),
        y = 0;
      for (E = 0; E < r.length; ++E) {
        var M = r[E];
        if (F(M, Uint8Array))
          y + M.length > f.length
            ? u.from(M).copy(f, y)
            : Uint8Array.prototype.set.call(f, M, y);
        else if (u.isBuffer(M)) M.copy(f, y);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        y += M.length;
      }
      return f;
    });
  function de(I, r) {
    if (u.isBuffer(I)) return I.length;
    if (ArrayBuffer.isView(I) || F(I, ArrayBuffer)) return I.byteLength;
    if (typeof I != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof I
      );
    var n = I.length,
      E = arguments.length > 2 && arguments[2] === !0;
    if (!E && n === 0) return 0;
    for (var f = !1; ; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
          return BA(I).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return n * 2;
        case "hex":
          return n >>> 1;
        case "base64":
          return c(I).length;
        default:
          if (f) return E ? -1 : BA(I).length;
          (r = ("" + r).toLowerCase()), (f = !0);
      }
  }
  u.byteLength = de;
  function we(I, r, n) {
    var E = !1;
    if (
      ((r === void 0 || r < 0) && (r = 0),
      r > this.length ||
        ((n === void 0 || n > this.length) && (n = this.length), n <= 0) ||
        ((n >>>= 0), (r >>>= 0), n <= r))
    )
      return "";
    for (I || (I = "utf8"); ; )
      switch (I) {
        case "hex":
          return se(this, r, n);
        case "utf8":
        case "utf-8":
          return ZA(this, r, n);
        case "ascii":
          return ie(this, r, n);
        case "latin1":
        case "binary":
          return TA(this, r, n);
        case "base64":
          return UA(this, r, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return he(this, r, n);
        default:
          if (E) throw new TypeError("Unknown encoding: " + I);
          (I = (I + "").toLowerCase()), (E = !0);
      }
  }
  u.prototype._isBuffer = !0;
  function PA(I, r, n) {
    var E = I[r];
    (I[r] = I[n]), (I[n] = E);
  }
  (u.prototype.swap16 = function () {
    var r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var n = 0; n < r; n += 2) PA(this, n, n + 1);
    return this;
  }),
    (u.prototype.swap32 = function () {
      var r = this.length;
      if (r % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var n = 0; n < r; n += 4) PA(this, n, n + 3), PA(this, n + 1, n + 2);
      return this;
    }),
    (u.prototype.swap64 = function () {
      var r = this.length;
      if (r % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var n = 0; n < r; n += 8)
        PA(this, n, n + 7),
          PA(this, n + 1, n + 6),
          PA(this, n + 2, n + 5),
          PA(this, n + 3, n + 4);
      return this;
    }),
    (u.prototype.toString = function () {
      var r = this.length;
      return r === 0
        ? ""
        : arguments.length === 0
        ? ZA(this, 0, r)
        : we.apply(this, arguments);
    }),
    (u.prototype.toLocaleString = u.prototype.toString),
    (u.prototype.equals = function (r) {
      if (!u.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
      return this === r ? !0 : u.compare(this, r) === 0;
    }),
    (u.prototype.inspect = function () {
      var r = "",
        n = t.INSPECT_MAX_BYTES;
      return (
        (r = this.toString("hex", 0, n)
          .replace(/(.{2})/g, "$1 ")
          .trim()),
        this.length > n && (r += " ... "),
        "<Buffer " + r + ">"
      );
    }),
    B && (u.prototype[B] = u.prototype.inspect),
    (u.prototype.compare = function (r, n, E, f, y) {
      if (
        (F(r, Uint8Array) && (r = u.from(r, r.offset, r.byteLength)),
        !u.isBuffer(r))
      )
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof r
        );
      if (
        (n === void 0 && (n = 0),
        E === void 0 && (E = r ? r.length : 0),
        f === void 0 && (f = 0),
        y === void 0 && (y = this.length),
        n < 0 || E > r.length || f < 0 || y > this.length)
      )
        throw new RangeError("out of range index");
      if (f >= y && n >= E) return 0;
      if (f >= y) return -1;
      if (n >= E) return 1;
      if (((n >>>= 0), (E >>>= 0), (f >>>= 0), (y >>>= 0), this === r))
        return 0;
      for (
        var M = y - f,
          H = E - n,
          AA = Math.min(M, H),
          aA = this.slice(f, y),
          cA = r.slice(n, E),
          K = 0;
        K < AA;
        ++K
      )
        if (aA[K] !== cA[K]) {
          (M = aA[K]), (H = cA[K]);
          break;
        }
      return M < H ? -1 : H < M ? 1 : 0;
    });
  function IA(I, r, n, E, f) {
    if (I.length === 0) return -1;
    if (
      (typeof n == "string"
        ? ((E = n), (n = 0))
        : n > 2147483647
        ? (n = 2147483647)
        : n < -2147483648 && (n = -2147483648),
      (n = +n),
      S(n) && (n = f ? 0 : I.length - 1),
      n < 0 && (n = I.length + n),
      n >= I.length)
    ) {
      if (f) return -1;
      n = I.length - 1;
    } else if (n < 0)
      if (f) n = 0;
      else return -1;
    if ((typeof r == "string" && (r = u.from(r, E)), u.isBuffer(r)))
      return r.length === 0 ? -1 : QA(I, r, n, E, f);
    if (typeof r == "number")
      return (
        (r = r & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? f
            ? Uint8Array.prototype.indexOf.call(I, r, n)
            : Uint8Array.prototype.lastIndexOf.call(I, r, n)
          : QA(I, [r], n, E, f)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function QA(I, r, n, E, f) {
    var y = 1,
      M = I.length,
      H = r.length;
    if (
      E !== void 0 &&
      ((E = String(E).toLowerCase()),
      E === "ucs2" || E === "ucs-2" || E === "utf16le" || E === "utf-16le")
    ) {
      if (I.length < 2 || r.length < 2) return -1;
      (y = 2), (M /= 2), (H /= 2), (n /= 2);
    }
    function AA(jA, De) {
      return y === 1 ? jA[De] : jA.readUInt16BE(De * y);
    }
    var aA;
    if (f) {
      var cA = -1;
      for (aA = n; aA < M; aA++)
        if (AA(I, aA) === AA(r, cA === -1 ? 0 : aA - cA)) {
          if ((cA === -1 && (cA = aA), aA - cA + 1 === H)) return cA * y;
        } else cA !== -1 && (aA -= aA - cA), (cA = -1);
    } else
      for (n + H > M && (n = M - H), aA = n; aA >= 0; aA--) {
        for (var K = !0, pA = 0; pA < H; pA++)
          if (AA(I, aA + pA) !== AA(r, pA)) {
            K = !1;
            break;
          }
        if (K) return aA;
      }
    return -1;
  }
  (u.prototype.includes = function (r, n, E) {
    return this.indexOf(r, n, E) !== -1;
  }),
    (u.prototype.indexOf = function (r, n, E) {
      return IA(this, r, n, E, !0);
    }),
    (u.prototype.lastIndexOf = function (r, n, E) {
      return IA(this, r, n, E, !1);
    });
  function RA(I, r, n, E) {
    n = Number(n) || 0;
    var f = I.length - n;
    E ? ((E = Number(E)), E > f && (E = f)) : (E = f);
    var y = r.length;
    E > y / 2 && (E = y / 2);
    for (var M = 0; M < E; ++M) {
      var H = parseInt(r.substr(M * 2, 2), 16);
      if (S(H)) return M;
      I[n + M] = H;
    }
    return M;
  }
  function vA(I, r, n, E) {
    return d(BA(r, I.length - n), I, n, E);
  }
  function P(I, r, n, E) {
    return d(EA(r), I, n, E);
  }
  function _A(I, r, n, E) {
    return d(c(r), I, n, E);
  }
  function bA(I, r, n, E) {
    return d(C(r, I.length - n), I, n, E);
  }
  (u.prototype.write = function (r, n, E, f) {
    if (n === void 0) (f = "utf8"), (E = this.length), (n = 0);
    else if (E === void 0 && typeof n == "string")
      (f = n), (E = this.length), (n = 0);
    else if (isFinite(n))
      (n = n >>> 0),
        isFinite(E)
          ? ((E = E >>> 0), f === void 0 && (f = "utf8"))
          : ((f = E), (E = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var y = this.length - n;
    if (
      ((E === void 0 || E > y) && (E = y),
      (r.length > 0 && (E < 0 || n < 0)) || n > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    f || (f = "utf8");
    for (var M = !1; ; )
      switch (f) {
        case "hex":
          return RA(this, r, n, E);
        case "utf8":
        case "utf-8":
          return vA(this, r, n, E);
        case "ascii":
        case "latin1":
        case "binary":
          return P(this, r, n, E);
        case "base64":
          return _A(this, r, n, E);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return bA(this, r, n, E);
        default:
          if (M) throw new TypeError("Unknown encoding: " + f);
          (f = ("" + f).toLowerCase()), (M = !0);
      }
  }),
    (u.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function UA(I, r, n) {
    return r === 0 && n === I.length
      ? A.fromByteArray(I)
      : A.fromByteArray(I.slice(r, n));
  }
  function ZA(I, r, n) {
    n = Math.min(I.length, n);
    for (var E = [], f = r; f < n; ) {
      var y = I[f],
        M = null,
        H = y > 239 ? 4 : y > 223 ? 3 : y > 191 ? 2 : 1;
      if (f + H <= n) {
        var AA, aA, cA, K;
        switch (H) {
          case 1:
            y < 128 && (M = y);
            break;
          case 2:
            (AA = I[f + 1]),
              (AA & 192) === 128 &&
                ((K = ((y & 31) << 6) | (AA & 63)), K > 127 && (M = K));
            break;
          case 3:
            (AA = I[f + 1]),
              (aA = I[f + 2]),
              (AA & 192) === 128 &&
                (aA & 192) === 128 &&
                ((K = ((y & 15) << 12) | ((AA & 63) << 6) | (aA & 63)),
                K > 2047 && (K < 55296 || K > 57343) && (M = K));
            break;
          case 4:
            (AA = I[f + 1]),
              (aA = I[f + 2]),
              (cA = I[f + 3]),
              (AA & 192) === 128 &&
                (aA & 192) === 128 &&
                (cA & 192) === 128 &&
                ((K =
                  ((y & 15) << 18) |
                  ((AA & 63) << 12) |
                  ((aA & 63) << 6) |
                  (cA & 63)),
                K > 65535 && K < 1114112 && (M = K));
        }
      }
      M === null
        ? ((M = 65533), (H = 1))
        : M > 65535 &&
          ((M -= 65536),
          E.push(((M >>> 10) & 1023) | 55296),
          (M = 56320 | (M & 1023))),
        E.push(M),
        (f += H);
    }
    return Ae(E);
  }
  var WA = 4096;
  function Ae(I) {
    var r = I.length;
    if (r <= WA) return String.fromCharCode.apply(String, I);
    for (var n = "", E = 0; E < r; )
      n += String.fromCharCode.apply(String, I.slice(E, (E += WA)));
    return n;
  }
  function ie(I, r, n) {
    var E = "";
    n = Math.min(I.length, n);
    for (var f = r; f < n; ++f) E += String.fromCharCode(I[f] & 127);
    return E;
  }
  function TA(I, r, n) {
    var E = "";
    n = Math.min(I.length, n);
    for (var f = r; f < n; ++f) E += String.fromCharCode(I[f]);
    return E;
  }
  function se(I, r, n) {
    var E = I.length;
    (!r || r < 0) && (r = 0), (!n || n < 0 || n > E) && (n = E);
    for (var f = "", y = r; y < n; ++y) f += N[I[y]];
    return f;
  }
  function he(I, r, n) {
    for (var E = I.slice(r, n), f = "", y = 0; y < E.length - 1; y += 2)
      f += String.fromCharCode(E[y] + E[y + 1] * 256);
    return f;
  }
  u.prototype.slice = function (r, n) {
    var E = this.length;
    (r = ~~r),
      (n = n === void 0 ? E : ~~n),
      r < 0 ? ((r += E), r < 0 && (r = 0)) : r > E && (r = E),
      n < 0 ? ((n += E), n < 0 && (n = 0)) : n > E && (n = E),
      n < r && (n = r);
    var f = this.subarray(r, n);
    return Object.setPrototypeOf(f, u.prototype), f;
  };
  function OA(I, r, n) {
    if (I % 1 !== 0 || I < 0) throw new RangeError("offset is not uint");
    if (I + r > n)
      throw new RangeError("Trying to access beyond buffer length");
  }
  (u.prototype.readUintLE = u.prototype.readUIntLE =
    function (r, n, E) {
      (r = r >>> 0), (n = n >>> 0), E || OA(r, n, this.length);
      for (var f = this[r], y = 1, M = 0; ++M < n && (y *= 256); )
        f += this[r + M] * y;
      return f;
    }),
    (u.prototype.readUintBE = u.prototype.readUIntBE =
      function (r, n, E) {
        (r = r >>> 0), (n = n >>> 0), E || OA(r, n, this.length);
        for (var f = this[r + --n], y = 1; n > 0 && (y *= 256); )
          f += this[r + --n] * y;
        return f;
      }),
    (u.prototype.readUint8 = u.prototype.readUInt8 =
      function (r, n) {
        return (r = r >>> 0), n || OA(r, 1, this.length), this[r];
      }),
    (u.prototype.readUint16LE = u.prototype.readUInt16LE =
      function (r, n) {
        return (
          (r = r >>> 0),
          n || OA(r, 2, this.length),
          this[r] | (this[r + 1] << 8)
        );
      }),
    (u.prototype.readUint16BE = u.prototype.readUInt16BE =
      function (r, n) {
        return (
          (r = r >>> 0),
          n || OA(r, 2, this.length),
          (this[r] << 8) | this[r + 1]
        );
      }),
    (u.prototype.readUint32LE = u.prototype.readUInt32LE =
      function (r, n) {
        return (
          (r = r >>> 0),
          n || OA(r, 4, this.length),
          (this[r] | (this[r + 1] << 8) | (this[r + 2] << 16)) +
            this[r + 3] * 16777216
        );
      }),
    (u.prototype.readUint32BE = u.prototype.readUInt32BE =
      function (r, n) {
        return (
          (r = r >>> 0),
          n || OA(r, 4, this.length),
          this[r] * 16777216 +
            ((this[r + 1] << 16) | (this[r + 2] << 8) | this[r + 3])
        );
      }),
    (u.prototype.readIntLE = function (r, n, E) {
      (r = r >>> 0), (n = n >>> 0), E || OA(r, n, this.length);
      for (var f = this[r], y = 1, M = 0; ++M < n && (y *= 256); )
        f += this[r + M] * y;
      return (y *= 128), f >= y && (f -= Math.pow(2, 8 * n)), f;
    }),
    (u.prototype.readIntBE = function (r, n, E) {
      (r = r >>> 0), (n = n >>> 0), E || OA(r, n, this.length);
      for (var f = n, y = 1, M = this[r + --f]; f > 0 && (y *= 256); )
        M += this[r + --f] * y;
      return (y *= 128), M >= y && (M -= Math.pow(2, 8 * n)), M;
    }),
    (u.prototype.readInt8 = function (r, n) {
      return (
        (r = r >>> 0),
        n || OA(r, 1, this.length),
        this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r]
      );
    }),
    (u.prototype.readInt16LE = function (r, n) {
      (r = r >>> 0), n || OA(r, 2, this.length);
      var E = this[r] | (this[r + 1] << 8);
      return E & 32768 ? E | 4294901760 : E;
    }),
    (u.prototype.readInt16BE = function (r, n) {
      (r = r >>> 0), n || OA(r, 2, this.length);
      var E = this[r + 1] | (this[r] << 8);
      return E & 32768 ? E | 4294901760 : E;
    }),
    (u.prototype.readInt32LE = function (r, n) {
      return (
        (r = r >>> 0),
        n || OA(r, 4, this.length),
        this[r] | (this[r + 1] << 8) | (this[r + 2] << 16) | (this[r + 3] << 24)
      );
    }),
    (u.prototype.readInt32BE = function (r, n) {
      return (
        (r = r >>> 0),
        n || OA(r, 4, this.length),
        (this[r] << 24) | (this[r + 1] << 16) | (this[r + 2] << 8) | this[r + 3]
      );
    }),
    (u.prototype.readFloatLE = function (r, n) {
      return (
        (r = r >>> 0), n || OA(r, 4, this.length), e.read(this, r, !0, 23, 4)
      );
    }),
    (u.prototype.readFloatBE = function (r, n) {
      return (
        (r = r >>> 0), n || OA(r, 4, this.length), e.read(this, r, !1, 23, 4)
      );
    }),
    (u.prototype.readDoubleLE = function (r, n) {
      return (
        (r = r >>> 0), n || OA(r, 8, this.length), e.read(this, r, !0, 52, 8)
      );
    }),
    (u.prototype.readDoubleBE = function (r, n) {
      return (
        (r = r >>> 0), n || OA(r, 8, this.length), e.read(this, r, !1, 52, 8)
      );
    });
  function JA(I, r, n, E, f, y) {
    if (!u.isBuffer(I))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > f || r < y)
      throw new RangeError('"value" argument is out of bounds');
    if (n + E > I.length) throw new RangeError("Index out of range");
  }
  (u.prototype.writeUintLE = u.prototype.writeUIntLE =
    function (r, n, E, f) {
      if (((r = +r), (n = n >>> 0), (E = E >>> 0), !f)) {
        var y = Math.pow(2, 8 * E) - 1;
        JA(this, r, n, E, y, 0);
      }
      var M = 1,
        H = 0;
      for (this[n] = r & 255; ++H < E && (M *= 256); )
        this[n + H] = (r / M) & 255;
      return n + E;
    }),
    (u.prototype.writeUintBE = u.prototype.writeUIntBE =
      function (r, n, E, f) {
        if (((r = +r), (n = n >>> 0), (E = E >>> 0), !f)) {
          var y = Math.pow(2, 8 * E) - 1;
          JA(this, r, n, E, y, 0);
        }
        var M = E - 1,
          H = 1;
        for (this[n + M] = r & 255; --M >= 0 && (H *= 256); )
          this[n + M] = (r / H) & 255;
        return n + E;
      }),
    (u.prototype.writeUint8 = u.prototype.writeUInt8 =
      function (r, n, E) {
        return (
          (r = +r),
          (n = n >>> 0),
          E || JA(this, r, n, 1, 255, 0),
          (this[n] = r & 255),
          n + 1
        );
      }),
    (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
      function (r, n, E) {
        return (
          (r = +r),
          (n = n >>> 0),
          E || JA(this, r, n, 2, 65535, 0),
          (this[n] = r & 255),
          (this[n + 1] = r >>> 8),
          n + 2
        );
      }),
    (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
      function (r, n, E) {
        return (
          (r = +r),
          (n = n >>> 0),
          E || JA(this, r, n, 2, 65535, 0),
          (this[n] = r >>> 8),
          (this[n + 1] = r & 255),
          n + 2
        );
      }),
    (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
      function (r, n, E) {
        return (
          (r = +r),
          (n = n >>> 0),
          E || JA(this, r, n, 4, 4294967295, 0),
          (this[n + 3] = r >>> 24),
          (this[n + 2] = r >>> 16),
          (this[n + 1] = r >>> 8),
          (this[n] = r & 255),
          n + 4
        );
      }),
    (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
      function (r, n, E) {
        return (
          (r = +r),
          (n = n >>> 0),
          E || JA(this, r, n, 4, 4294967295, 0),
          (this[n] = r >>> 24),
          (this[n + 1] = r >>> 16),
          (this[n + 2] = r >>> 8),
          (this[n + 3] = r & 255),
          n + 4
        );
      }),
    (u.prototype.writeIntLE = function (r, n, E, f) {
      if (((r = +r), (n = n >>> 0), !f)) {
        var y = Math.pow(2, 8 * E - 1);
        JA(this, r, n, E, y - 1, -y);
      }
      var M = 0,
        H = 1,
        AA = 0;
      for (this[n] = r & 255; ++M < E && (H *= 256); )
        r < 0 && AA === 0 && this[n + M - 1] !== 0 && (AA = 1),
          (this[n + M] = (((r / H) >> 0) - AA) & 255);
      return n + E;
    }),
    (u.prototype.writeIntBE = function (r, n, E, f) {
      if (((r = +r), (n = n >>> 0), !f)) {
        var y = Math.pow(2, 8 * E - 1);
        JA(this, r, n, E, y - 1, -y);
      }
      var M = E - 1,
        H = 1,
        AA = 0;
      for (this[n + M] = r & 255; --M >= 0 && (H *= 256); )
        r < 0 && AA === 0 && this[n + M + 1] !== 0 && (AA = 1),
          (this[n + M] = (((r / H) >> 0) - AA) & 255);
      return n + E;
    }),
    (u.prototype.writeInt8 = function (r, n, E) {
      return (
        (r = +r),
        (n = n >>> 0),
        E || JA(this, r, n, 1, 127, -128),
        r < 0 && (r = 255 + r + 1),
        (this[n] = r & 255),
        n + 1
      );
    }),
    (u.prototype.writeInt16LE = function (r, n, E) {
      return (
        (r = +r),
        (n = n >>> 0),
        E || JA(this, r, n, 2, 32767, -32768),
        (this[n] = r & 255),
        (this[n + 1] = r >>> 8),
        n + 2
      );
    }),
    (u.prototype.writeInt16BE = function (r, n, E) {
      return (
        (r = +r),
        (n = n >>> 0),
        E || JA(this, r, n, 2, 32767, -32768),
        (this[n] = r >>> 8),
        (this[n + 1] = r & 255),
        n + 2
      );
    }),
    (u.prototype.writeInt32LE = function (r, n, E) {
      return (
        (r = +r),
        (n = n >>> 0),
        E || JA(this, r, n, 4, 2147483647, -2147483648),
        (this[n] = r & 255),
        (this[n + 1] = r >>> 8),
        (this[n + 2] = r >>> 16),
        (this[n + 3] = r >>> 24),
        n + 4
      );
    }),
    (u.prototype.writeInt32BE = function (r, n, E) {
      return (
        (r = +r),
        (n = n >>> 0),
        E || JA(this, r, n, 4, 2147483647, -2147483648),
        r < 0 && (r = 4294967295 + r + 1),
        (this[n] = r >>> 24),
        (this[n + 1] = r >>> 16),
        (this[n + 2] = r >>> 8),
        (this[n + 3] = r & 255),
        n + 4
      );
    });
  function ne(I, r, n, E, f, y) {
    if (n + E > I.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("Index out of range");
  }
  function h(I, r, n, E, f) {
    return (
      (r = +r),
      (n = n >>> 0),
      f || ne(I, r, n, 4),
      e.write(I, r, n, E, 23, 4),
      n + 4
    );
  }
  (u.prototype.writeFloatLE = function (r, n, E) {
    return h(this, r, n, !0, E);
  }),
    (u.prototype.writeFloatBE = function (r, n, E) {
      return h(this, r, n, !1, E);
    });
  function oA(I, r, n, E, f) {
    return (
      (r = +r),
      (n = n >>> 0),
      f || ne(I, r, n, 8),
      e.write(I, r, n, E, 52, 8),
      n + 8
    );
  }
  (u.prototype.writeDoubleLE = function (r, n, E) {
    return oA(this, r, n, !0, E);
  }),
    (u.prototype.writeDoubleBE = function (r, n, E) {
      return oA(this, r, n, !1, E);
    }),
    (u.prototype.copy = function (r, n, E, f) {
      if (!u.isBuffer(r)) throw new TypeError("argument should be a Buffer");
      if (
        (E || (E = 0),
        !f && f !== 0 && (f = this.length),
        n >= r.length && (n = r.length),
        n || (n = 0),
        f > 0 && f < E && (f = E),
        f === E || r.length === 0 || this.length === 0)
      )
        return 0;
      if (n < 0) throw new RangeError("targetStart out of bounds");
      if (E < 0 || E >= this.length) throw new RangeError("Index out of range");
      if (f < 0) throw new RangeError("sourceEnd out of bounds");
      f > this.length && (f = this.length),
        r.length - n < f - E && (f = r.length - n + E);
      var y = f - E;
      return (
        this === r && typeof Uint8Array.prototype.copyWithin == "function"
          ? this.copyWithin(n, E, f)
          : Uint8Array.prototype.set.call(r, this.subarray(E, f), n),
        y
      );
    }),
    (u.prototype.fill = function (r, n, E, f) {
      if (typeof r == "string") {
        if (
          (typeof n == "string"
            ? ((f = n), (n = 0), (E = this.length))
            : typeof E == "string" && ((f = E), (E = this.length)),
          f !== void 0 && typeof f != "string")
        )
          throw new TypeError("encoding must be a string");
        if (typeof f == "string" && !u.isEncoding(f))
          throw new TypeError("Unknown encoding: " + f);
        if (r.length === 1) {
          var y = r.charCodeAt(0);
          ((f === "utf8" && y < 128) || f === "latin1") && (r = y);
        }
      } else
        typeof r == "number"
          ? (r = r & 255)
          : typeof r == "boolean" && (r = Number(r));
      if (n < 0 || this.length < n || this.length < E)
        throw new RangeError("Out of range index");
      if (E <= n) return this;
      (n = n >>> 0), (E = E === void 0 ? this.length : E >>> 0), r || (r = 0);
      var M;
      if (typeof r == "number") for (M = n; M < E; ++M) this[M] = r;
      else {
        var H = u.isBuffer(r) ? r : u.from(r, f),
          AA = H.length;
        if (AA === 0)
          throw new TypeError(
            'The value "' + r + '" is invalid for argument "value"'
          );
        for (M = 0; M < E - n; ++M) this[M + n] = H[M % AA];
      }
      return this;
    });
  var ee = /[^+/0-9A-Za-z-_]/g;
  function Me(I) {
    if (((I = I.split("=")[0]), (I = I.trim().replace(ee, "")), I.length < 2))
      return "";
    for (; I.length % 4 !== 0; ) I = I + "=";
    return I;
  }
  function BA(I, r) {
    r = r || 1 / 0;
    for (var n, E = I.length, f = null, y = [], M = 0; M < E; ++M) {
      if (((n = I.charCodeAt(M)), n > 55295 && n < 57344)) {
        if (!f) {
          if (n > 56319) {
            (r -= 3) > -1 && y.push(239, 191, 189);
            continue;
          } else if (M + 1 === E) {
            (r -= 3) > -1 && y.push(239, 191, 189);
            continue;
          }
          f = n;
          continue;
        }
        if (n < 56320) {
          (r -= 3) > -1 && y.push(239, 191, 189), (f = n);
          continue;
        }
        n = (((f - 55296) << 10) | (n - 56320)) + 65536;
      } else f && (r -= 3) > -1 && y.push(239, 191, 189);
      if (((f = null), n < 128)) {
        if ((r -= 1) < 0) break;
        y.push(n);
      } else if (n < 2048) {
        if ((r -= 2) < 0) break;
        y.push((n >> 6) | 192, (n & 63) | 128);
      } else if (n < 65536) {
        if ((r -= 3) < 0) break;
        y.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (n & 63) | 128);
      } else if (n < 1114112) {
        if ((r -= 4) < 0) break;
        y.push(
          (n >> 18) | 240,
          ((n >> 12) & 63) | 128,
          ((n >> 6) & 63) | 128,
          (n & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return y;
  }
  function EA(I) {
    for (var r = [], n = 0; n < I.length; ++n) r.push(I.charCodeAt(n) & 255);
    return r;
  }
  function C(I, r) {
    for (var n, E, f, y = [], M = 0; M < I.length && !((r -= 2) < 0); ++M)
      (n = I.charCodeAt(M)), (E = n >> 8), (f = n % 256), y.push(f), y.push(E);
    return y;
  }
  function c(I) {
    return A.toByteArray(Me(I));
  }
  function d(I, r, n, E) {
    for (var f = 0; f < E && !(f + n >= r.length || f >= I.length); ++f)
      r[f + n] = I[f];
    return f;
  }
  function F(I, r) {
    return (
      I instanceof r ||
      (I != null &&
        I.constructor != null &&
        I.constructor.name != null &&
        I.constructor.name === r.name)
    );
  }
  function S(I) {
    return I !== I;
  }
  var N = (function () {
    for (var I = "0123456789abcdef", r = new Array(256), n = 0; n < 16; ++n)
      for (var E = n * 16, f = 0; f < 16; ++f) r[E + f] = I[n] + I[f];
    return r;
  })();
})(it);
var hr;
(function (t) {
  (t[(t.SysFatal = 1)] = "SysFatal"),
    (t[(t.SysTransient = 2)] = "SysTransient"),
    (t[(t.DestinationInvalid = 3)] = "DestinationInvalid"),
    (t[(t.CanisterReject = 4)] = "CanisterReject"),
    (t[(t.CanisterError = 5)] = "CanisterError");
})(hr || (hr = {}));
const ht = "abcdefghijklmnopqrstuvwxyz234567",
  $e = Object.create(null);
for (let t = 0; t < ht.length; t++) $e[ht[t]] = t;
$e[0] = $e.o;
$e[1] = $e.i;
function Oi(t) {
  let A = 0,
    e = 0,
    B = "";
  function a(w) {
    return (
      A < 0 ? (e |= w >> -A) : (e = (w << A) & 248),
      A > 3 ? ((A -= 8), 1) : (A < 4 && ((B += ht[e >> 3]), (A += 5)), 0)
    );
  }
  for (let w = 0; w < t.length; ) w += a(t[w]);
  return B + (A < 0 ? ht[e >> 3] : "");
}
function Wi(t) {
  let A = 0,
    e = 0;
  const B = new Uint8Array(((t.length * 4) / 3) | 0);
  let a = 0;
  function w(p) {
    let u = $e[p.toLowerCase()];
    if (u === void 0)
      throw new Error(`Invalid character: ${JSON.stringify(p)}`);
    (u <<= 3),
      (e |= u >>> A),
      (A += 5),
      A >= 8 &&
        ((B[a++] = e), (A -= 8), A > 0 ? (e = (u << (5 - A)) & 255) : (e = 0));
  }
  for (const p of t) w(p);
  return B.slice(0, a);
}
const Pi = new Uint32Array([
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
function ji(t) {
  const A = new Uint8Array(t);
  let e = -1;
  for (let B = 0; B < A.length; B++) {
    const w = (A[B] ^ e) & 255;
    e = Pi[w] ^ (e >>> 8);
  }
  return (e ^ -1) >>> 0;
}
function Zi(t, ...A) {
  if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
  if (A.length > 0 && !A.includes(t.length))
    throw new Error(
      `Expected Uint8Array of length ${A}, not of length=${t.length}`
    );
}
function cr(t, A = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (A && t.finished) throw new Error("Hash#digest() has already been called");
}
function Vi(t, A) {
  Zi(t);
  const e = A.outputLen;
  if (t.length < e)
    throw new Error(
      `digestInto() expects output buffer of length at least ${e}`
    );
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Xi =
    (t) => t instanceof Uint8Array,
  Ut = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
  be = (t, A) => (t << (32 - A)) | (t >>> A),
  zi = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!zi) throw new Error("Non little-endian hardware is not supported");
function $i(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Wr(t) {
  if ((typeof t == "string" && (t = $i(t)), !Xi(t)))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
class An {
  clone() {
    return this._cloneInto();
  }
}
function Pr(t) {
  const A = (B) => t().update(Wr(B)).digest(),
    e = t();
  return (
    (A.outputLen = e.outputLen),
    (A.blockLen = e.blockLen),
    (A.create = () => t()),
    A
  );
}
function en(t, A, e, B) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(A, e, B);
  const a = BigInt(32),
    w = BigInt(4294967295),
    p = Number((e >> a) & w),
    u = Number(e & w),
    b = B ? 4 : 0,
    U = B ? 0 : 4;
  t.setUint32(A + b, p, B), t.setUint32(A + U, u, B);
}
class tn extends An {
  constructor(A, e, B, a) {
    super(),
      (this.blockLen = A),
      (this.outputLen = e),
      (this.padOffset = B),
      (this.isLE = a),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(A)),
      (this.view = Ut(this.buffer));
  }
  update(A) {
    cr(this);
    const { view: e, buffer: B, blockLen: a } = this;
    A = Wr(A);
    const w = A.length;
    for (let p = 0; p < w; ) {
      const u = Math.min(a - this.pos, w - p);
      if (u === a) {
        const b = Ut(A);
        for (; a <= w - p; p += a) this.process(b, p);
        continue;
      }
      B.set(A.subarray(p, p + u), this.pos),
        (this.pos += u),
        (p += u),
        this.pos === a && (this.process(e, 0), (this.pos = 0));
    }
    return (this.length += A.length), this.roundClean(), this;
  }
  digestInto(A) {
    cr(this), Vi(A, this), (this.finished = !0);
    const { buffer: e, view: B, blockLen: a, isLE: w } = this;
    let { pos: p } = this;
    (e[p++] = 128),
      this.buffer.subarray(p).fill(0),
      this.padOffset > a - p && (this.process(B, 0), (p = 0));
    for (let v = p; v < a; v++) e[v] = 0;
    en(B, a - 8, BigInt(this.length * 8), w), this.process(B, 0);
    const u = Ut(A),
      b = this.outputLen;
    if (b % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const U = b / 4,
      Z = this.get();
    if (U > Z.length) throw new Error("_sha2: outputLen bigger than state");
    for (let v = 0; v < U; v++) u.setUint32(4 * v, Z[v], w);
  }
  digest() {
    const { buffer: A, outputLen: e } = this;
    this.digestInto(A);
    const B = A.slice(0, e);
    return this.destroy(), B;
  }
  _cloneInto(A) {
    A || (A = new this.constructor()), A.set(...this.get());
    const {
      blockLen: e,
      buffer: B,
      length: a,
      finished: w,
      destroyed: p,
      pos: u,
    } = this;
    return (
      (A.length = a),
      (A.pos = u),
      (A.finished = w),
      (A.destroyed = p),
      a % e && A.buffer.set(B),
      A
    );
  }
}
const rn = (t, A, e) => (t & A) ^ (~t & e),
  nn = (t, A, e) => (t & A) ^ (t & e) ^ (A & e),
  gn = new Uint32Array([
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
  _e = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  Te = new Uint32Array(64);
class jr extends tn {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = _e[0] | 0),
      (this.B = _e[1] | 0),
      (this.C = _e[2] | 0),
      (this.D = _e[3] | 0),
      (this.E = _e[4] | 0),
      (this.F = _e[5] | 0),
      (this.G = _e[6] | 0),
      (this.H = _e[7] | 0);
  }
  get() {
    const { A, B: e, C: B, D: a, E: w, F: p, G: u, H: b } = this;
    return [A, e, B, a, w, p, u, b];
  }
  set(A, e, B, a, w, p, u, b) {
    (this.A = A | 0),
      (this.B = e | 0),
      (this.C = B | 0),
      (this.D = a | 0),
      (this.E = w | 0),
      (this.F = p | 0),
      (this.G = u | 0),
      (this.H = b | 0);
  }
  process(A, e) {
    for (let v = 0; v < 16; v++, e += 4) Te[v] = A.getUint32(e, !1);
    for (let v = 16; v < 64; v++) {
      const nA = Te[v - 15],
        gA = Te[v - 2],
        qA = be(nA, 7) ^ be(nA, 18) ^ (nA >>> 3),
        MA = be(gA, 17) ^ be(gA, 19) ^ (gA >>> 10);
      Te[v] = (MA + Te[v - 7] + qA + Te[v - 16]) | 0;
    }
    let { A: B, B: a, C: w, D: p, E: u, F: b, G: U, H: Z } = this;
    for (let v = 0; v < 64; v++) {
      const nA = be(u, 6) ^ be(u, 11) ^ be(u, 25),
        gA = (Z + nA + rn(u, b, U) + gn[v] + Te[v]) | 0,
        MA = ((be(B, 2) ^ be(B, 13) ^ be(B, 22)) + nn(B, a, w)) | 0;
      (Z = U),
        (U = b),
        (b = u),
        (u = (p + gA) | 0),
        (p = w),
        (w = a),
        (a = B),
        (B = (gA + MA) | 0);
    }
    (B = (B + this.A) | 0),
      (a = (a + this.B) | 0),
      (w = (w + this.C) | 0),
      (p = (p + this.D) | 0),
      (u = (u + this.E) | 0),
      (b = (b + this.F) | 0),
      (U = (U + this.G) | 0),
      (Z = (Z + this.H) | 0),
      this.set(B, a, w, p, u, b, U, Z);
  }
  roundClean() {
    Te.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class Bn extends jr {
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
const In = Pr(() => new jr()),
  En = Pr(() => new Bn());
function an(t) {
  return En.create().update(new Uint8Array(t)).digest();
}
const at = "__principal__",
  sn = 2,
  ur = 4,
  Qn = "aaaaa-aa",
  fn = (t) => {
    var A;
    return new Uint8Array(
      ((A = t.match(/.{1,2}/g)) !== null && A !== void 0 ? A : []).map((e) =>
        parseInt(e, 16)
      )
    );
  },
  on = (t) => t.reduce((A, e) => A + e.toString(16).padStart(2, "0"), "");
class qe {
  constructor(A) {
    (this._arr = A), (this._isPrincipal = !0);
  }
  static anonymous() {
    return new this(new Uint8Array([ur]));
  }
  static managementCanister() {
    return this.fromHex(Qn);
  }
  static selfAuthenticating(A) {
    const e = an(A);
    return new this(new Uint8Array([...e, sn]));
  }
  static from(A) {
    if (typeof A == "string") return qe.fromText(A);
    if (typeof A == "object" && A !== null && A._isPrincipal === !0)
      return new qe(A._arr);
    throw new Error(`Impossible to convert ${JSON.stringify(A)} to Principal.`);
  }
  static fromHex(A) {
    return new this(fn(A));
  }
  static fromText(A) {
    let e = A;
    if (A.includes(at)) {
      const p = JSON.parse(A);
      at in p && (e = p[at]);
    }
    const B = e.toLowerCase().replace(/-/g, "");
    let a = Wi(B);
    a = a.slice(4, a.length);
    const w = new this(a);
    if (w.toText() !== e)
      throw new Error(
        `Principal "${w.toText()}" does not have a valid checksum (original value "${e}" may not be a valid Principal ID).`
      );
    return w;
  }
  static fromUint8Array(A) {
    return new this(A);
  }
  isAnonymous() {
    return this._arr.byteLength === 1 && this._arr[0] === ur;
  }
  toUint8Array() {
    return this._arr;
  }
  toHex() {
    return on(this._arr).toUpperCase();
  }
  toText() {
    const A = new ArrayBuffer(4);
    new DataView(A).setUint32(0, ji(this._arr));
    const B = new Uint8Array(A),
      a = Uint8Array.from(this._arr),
      w = new Uint8Array([...B, ...a]),
      u = Oi(w).match(/.{1,5}/g);
    if (!u) throw new Error();
    return u.join("-");
  }
  toString() {
    return this.toText();
  }
  toJSON() {
    return { [at]: this.toText() };
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
}
class er {
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
      B = this._view.byteLength;
    this._view.byteOffset + this._view.byteLength + e.byteLength >=
    this._buffer.byteLength
      ? this.alloc(e.byteLength)
      : (this._view = new Uint8Array(
          this._buffer,
          this._view.byteOffset,
          this._view.byteLength + e.byteLength
        )),
      this._view.set(e, B);
  }
  get end() {
    return this._view.byteLength === 0;
  }
  alloc(A) {
    const e = new ArrayBuffer(((this._buffer.byteLength + A) * 1.2) | 0),
      B = new Uint8Array(e, 0, this._view.byteLength + A);
    B.set(this._view), (this._buffer = e), (this._view = B);
  }
}
function Zr() {
  throw new Error("unexpected end of buffer");
}
function Cn(t, A) {
  return t.byteLength < A && Zr(), t.read(A);
}
function lr(t) {
  const A = t.readUint8();
  return A === void 0 && Zr(), A;
}
function wr(t) {
  if ((typeof t == "number" && (t = BigInt(t)), t < BigInt(0)))
    throw new Error("Cannot leb encode negative values.");
  const A = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1,
    e = new er(new ArrayBuffer(A), 0);
  for (;;) {
    const B = Number(t & BigInt(127));
    if (((t /= BigInt(128)), t === BigInt(0))) {
      e.write(new Uint8Array([B]));
      break;
    } else e.write(new Uint8Array([B | 128]));
  }
  return e.buffer;
}
function tr(t) {
  typeof t == "number" && (t = BigInt(t));
  const A = t < BigInt(0);
  A && (t = -t - BigInt(1));
  const e = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1,
    B = new er(new ArrayBuffer(e), 0);
  for (;;) {
    const w = a(t);
    if (
      ((t /= BigInt(128)),
      (A && t === BigInt(0) && w & 64) || (!A && t === BigInt(0) && !(w & 64)))
    ) {
      B.write(new Uint8Array([w]));
      break;
    } else B.write(new Uint8Array([w | 128]));
  }
  function a(w) {
    const p = w % BigInt(128);
    return Number(A ? BigInt(128) - p - BigInt(1) : p);
  }
  return B.buffer;
}
function hn(t, A) {
  if (BigInt(t) < BigInt(0)) throw new Error("Cannot write negative values.");
  return Vr(t, A);
}
function Vr(t, A) {
  t = BigInt(t);
  const e = new er(new ArrayBuffer(Math.min(1, A)), 0);
  let B = 0,
    a = BigInt(256),
    w = BigInt(0),
    p = Number(t % a);
  for (e.write(new Uint8Array([p])); ++B < A; )
    t < 0 && w === BigInt(0) && p !== 0 && (w = BigInt(1)),
      (p = Number((t / a - w) % BigInt(256))),
      e.write(new Uint8Array([p])),
      (a *= BigInt(256));
  return e.buffer;
}
function Xr(t, A) {
  let e = BigInt(lr(t)),
    B = BigInt(1),
    a = 0;
  for (; ++a < A; ) {
    B *= BigInt(256);
    const w = BigInt(lr(t));
    e = e + B * w;
  }
  return e;
}
function cn(t, A) {
  let e = Xr(t, A);
  const B = BigInt(2) ** (BigInt(8) * BigInt(A - 1) + BigInt(7));
  return e >= B && (e -= B * BigInt(2)), e;
}
function qt(t) {
  const A = BigInt(t);
  if (t < 0) throw new RangeError("Input must be non-negative");
  return BigInt(1) << A;
}
const xr = 400;
class zr {
  display() {
    return this.name;
  }
  valueToString(A) {
    return nt(A);
  }
  buildTypeTable(A) {
    A.has(this) || this._buildTypeTableImpl(A);
  }
}
class rr extends zr {
  checkType(A) {
    if (this.name !== A.name)
      throw new Error(
        `type mismatch: type on the wire ${A.name}, expect type ${this.name}`
      );
    return A;
  }
  _buildTypeTableImpl(A) {}
}
class un extends zr {
  checkType(A) {
    if (A instanceof pt) {
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
class $r extends rr {
  constructor(A) {
    if ((super(), (this._bits = A), A !== 32 && A !== 64))
      throw new Error("not a valid float type");
  }
  accept(A, e) {
    return A.visitFloat(this, e);
  }
  covariant(A) {
    if (typeof A == "number" || A instanceof Number) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${nt(A)}`);
  }
  encodeValue(A) {
    const e = new ArrayBuffer(this._bits / 8),
      B = new DataView(e);
    return (
      this._bits === 32 ? B.setFloat32(0, A, !0) : B.setFloat64(0, A, !0), e
    );
  }
  encodeType() {
    const A = this._bits === 32 ? -13 : -14;
    return tr(A);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const B = Cn(A, this._bits / 8),
      a = new DataView(B);
    return this._bits === 32 ? a.getFloat32(0, !0) : a.getFloat64(0, !0);
  }
  get name() {
    return "float" + this._bits;
  }
  valueToString(A) {
    return A.toString();
  }
}
class xt extends rr {
  constructor(A) {
    super(), (this._bits = A);
  }
  accept(A, e) {
    return A.visitFixedInt(this, e);
  }
  covariant(A) {
    const e = qt(this._bits - 1) * BigInt(-1),
      B = qt(this._bits - 1) - BigInt(1);
    let a = !1;
    if (typeof A == "bigint") a = A >= e && A <= B;
    else if (Number.isInteger(A)) {
      const w = BigInt(A);
      a = w >= e && w <= B;
    } else a = !1;
    if (a) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${nt(A)}`);
  }
  encodeValue(A) {
    return Vr(A, this._bits / 8);
  }
  encodeType() {
    const A = Math.log2(this._bits) - 3;
    return tr(-9 - A);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const B = cn(A, this._bits / 8);
    return this._bits <= 32 ? Number(B) : B;
  }
  get name() {
    return `int${this._bits}`;
  }
  valueToString(A) {
    return A.toString();
  }
}
class yt extends rr {
  constructor(A) {
    super(), (this._bits = A);
  }
  accept(A, e) {
    return A.visitFixedNat(this, e);
  }
  covariant(A) {
    const e = qt(this._bits);
    let B = !1;
    if (
      (typeof A == "bigint" && A >= BigInt(0)
        ? (B = A < e)
        : Number.isInteger(A) && A >= 0
        ? (B = BigInt(A) < e)
        : (B = !1),
      B)
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${nt(A)}`);
  }
  encodeValue(A) {
    return hn(A, this._bits / 8);
  }
  encodeType() {
    const A = Math.log2(this._bits) - 3;
    return tr(-5 - A);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const B = Xr(A, this._bits / 8);
    return this._bits <= 32 ? Number(B) : B;
  }
  get name() {
    return `nat${this._bits}`;
  }
  valueToString(A) {
    return A.toString();
  }
}
class pt extends un {
  constructor() {
    super(...arguments), (this._id = pt._counter++), (this._type = void 0);
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
    throw new Error(`Invalid ${this.display()} argument: ${nt(A)}`);
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
pt._counter = 0;
function nt(t) {
  const A = JSON.stringify(t, (e, B) =>
    typeof B == "bigint" ? `BigInt(${B})` : B
  );
  return A && A.length > xr ? A.substring(0, xr - 3) + "..." : A;
}
new $r(32);
new $r(64);
new xt(8);
new xt(16);
new xt(32);
new xt(64);
new yt(8);
new yt(16);
new yt(32);
new yt(64);
var Ai = {},
  ei = { exports: {} };
(function (t) {
  (function (A) {
    var e,
      B = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
      a = Math.ceil,
      w = Math.floor,
      p = "[BigNumber Error] ",
      u = p + "Number primitive has more than 15 significant digits: ",
      b = 1e14,
      U = 14,
      Z = 9007199254740991,
      v = [
        1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13,
      ],
      nA = 1e7,
      gA = 1e9;
    function qA(IA) {
      var QA,
        RA,
        vA,
        P = (h.prototype = { constructor: h, toString: null, valueOf: null }),
        _A = new h(1),
        bA = 20,
        UA = 4,
        ZA = -7,
        WA = 21,
        Ae = -1e7,
        ie = 1e7,
        TA = !1,
        se = 1,
        he = 0,
        OA = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: " ",
          suffix: "",
        },
        JA = "0123456789abcdefghijklmnopqrstuvwxyz",
        ne = !0;
      function h(C, c) {
        var d,
          F,
          S,
          N,
          I,
          r,
          n,
          E,
          f = this;
        if (!(f instanceof h)) return new h(C, c);
        if (c == null) {
          if (C && C._isBigNumber === !0) {
            (f.s = C.s),
              !C.c || C.e > ie
                ? (f.c = f.e = null)
                : C.e < Ae
                ? (f.c = [(f.e = 0)])
                : ((f.e = C.e), (f.c = C.c.slice()));
            return;
          }
          if ((r = typeof C == "number") && C * 0 == 0) {
            if (((f.s = 1 / C < 0 ? ((C = -C), -1) : 1), C === ~~C)) {
              for (N = 0, I = C; I >= 10; I /= 10, N++);
              N > ie ? (f.c = f.e = null) : ((f.e = N), (f.c = [C]));
              return;
            }
            E = String(C);
          } else {
            if (!B.test((E = String(C)))) return vA(f, E, r);
            f.s = E.charCodeAt(0) == 45 ? ((E = E.slice(1)), -1) : 1;
          }
          (N = E.indexOf(".")) > -1 && (E = E.replace(".", "")),
            (I = E.search(/e/i)) > 0
              ? (N < 0 && (N = I),
                (N += +E.slice(I + 1)),
                (E = E.substring(0, I)))
              : N < 0 && (N = E.length);
        } else {
          if ((LA(c, 2, JA.length, "Base"), c == 10 && ne))
            return (f = new h(C)), BA(f, bA + f.e + 1, UA);
          if (((E = String(C)), (r = typeof C == "number"))) {
            if (C * 0 != 0) return vA(f, E, r, c);
            if (
              ((f.s = 1 / C < 0 ? ((E = E.slice(1)), -1) : 1),
              h.DEBUG && E.replace(/^0\.0*|\./, "").length > 15)
            )
              throw Error(u + C);
          } else f.s = E.charCodeAt(0) === 45 ? ((E = E.slice(1)), -1) : 1;
          for (d = JA.slice(0, c), N = I = 0, n = E.length; I < n; I++)
            if (d.indexOf((F = E.charAt(I))) < 0) {
              if (F == ".") {
                if (I > N) {
                  N = n;
                  continue;
                }
              } else if (
                !S &&
                ((E == E.toUpperCase() && (E = E.toLowerCase())) ||
                  (E == E.toLowerCase() && (E = E.toUpperCase())))
              ) {
                (S = !0), (I = -1), (N = 0);
                continue;
              }
              return vA(f, String(C), r, c);
            }
          (r = !1),
            (E = RA(E, c, 10, f.s)),
            (N = E.indexOf(".")) > -1
              ? (E = E.replace(".", ""))
              : (N = E.length);
        }
        for (I = 0; E.charCodeAt(I) === 48; I++);
        for (n = E.length; E.charCodeAt(--n) === 48; );
        if ((E = E.slice(I, ++n))) {
          if (((n -= I), r && h.DEBUG && n > 15 && (C > Z || C !== w(C))))
            throw Error(u + f.s * C);
          if ((N = N - I - 1) > ie) f.c = f.e = null;
          else if (N < Ae) f.c = [(f.e = 0)];
          else {
            if (
              ((f.e = N),
              (f.c = []),
              (I = (N + 1) % U),
              N < 0 && (I += U),
              I < n)
            ) {
              for (I && f.c.push(+E.slice(0, I)), n -= U; I < n; )
                f.c.push(+E.slice(I, (I += U)));
              I = U - (E = E.slice(I)).length;
            } else I -= n;
            for (; I--; E += "0");
            f.c.push(+E);
          }
        } else f.c = [(f.e = 0)];
      }
      (h.clone = qA),
        (h.ROUND_UP = 0),
        (h.ROUND_DOWN = 1),
        (h.ROUND_CEIL = 2),
        (h.ROUND_FLOOR = 3),
        (h.ROUND_HALF_UP = 4),
        (h.ROUND_HALF_DOWN = 5),
        (h.ROUND_HALF_EVEN = 6),
        (h.ROUND_HALF_CEIL = 7),
        (h.ROUND_HALF_FLOOR = 8),
        (h.EUCLID = 9),
        (h.config = h.set =
          function (C) {
            var c, d;
            if (C != null)
              if (typeof C == "object") {
                if (
                  (C.hasOwnProperty((c = "DECIMAL_PLACES")) &&
                    ((d = C[c]), LA(d, 0, gA, c), (bA = d)),
                  C.hasOwnProperty((c = "ROUNDING_MODE")) &&
                    ((d = C[c]), LA(d, 0, 8, c), (UA = d)),
                  C.hasOwnProperty((c = "EXPONENTIAL_AT")) &&
                    ((d = C[c]),
                    d && d.pop
                      ? (LA(d[0], -gA, 0, c),
                        LA(d[1], 0, gA, c),
                        (ZA = d[0]),
                        (WA = d[1]))
                      : (LA(d, -gA, gA, c), (ZA = -(WA = d < 0 ? -d : d)))),
                  C.hasOwnProperty((c = "RANGE")))
                )
                  if (((d = C[c]), d && d.pop))
                    LA(d[0], -gA, -1, c),
                      LA(d[1], 1, gA, c),
                      (Ae = d[0]),
                      (ie = d[1]);
                  else if ((LA(d, -gA, gA, c), d)) Ae = -(ie = d < 0 ? -d : d);
                  else throw Error(p + c + " cannot be zero: " + d);
                if (C.hasOwnProperty((c = "CRYPTO")))
                  if (((d = C[c]), d === !!d))
                    if (d)
                      if (
                        typeof crypto < "u" &&
                        crypto &&
                        (crypto.getRandomValues || crypto.randomBytes)
                      )
                        TA = d;
                      else throw ((TA = !d), Error(p + "crypto unavailable"));
                    else TA = d;
                  else throw Error(p + c + " not true or false: " + d);
                if (
                  (C.hasOwnProperty((c = "MODULO_MODE")) &&
                    ((d = C[c]), LA(d, 0, 9, c), (se = d)),
                  C.hasOwnProperty((c = "POW_PRECISION")) &&
                    ((d = C[c]), LA(d, 0, gA, c), (he = d)),
                  C.hasOwnProperty((c = "FORMAT")))
                )
                  if (((d = C[c]), typeof d == "object")) OA = d;
                  else throw Error(p + c + " not an object: " + d);
                if (C.hasOwnProperty((c = "ALPHABET")))
                  if (
                    ((d = C[c]),
                    typeof d == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(d))
                  )
                    (ne = d.slice(0, 10) == "0123456789"), (JA = d);
                  else throw Error(p + c + " invalid: " + d);
              } else throw Error(p + "Object expected: " + C);
            return {
              DECIMAL_PLACES: bA,
              ROUNDING_MODE: UA,
              EXPONENTIAL_AT: [ZA, WA],
              RANGE: [Ae, ie],
              CRYPTO: TA,
              MODULO_MODE: se,
              POW_PRECISION: he,
              FORMAT: OA,
              ALPHABET: JA,
            };
          }),
        (h.isBigNumber = function (C) {
          if (!C || C._isBigNumber !== !0) return !1;
          if (!h.DEBUG) return !0;
          var c,
            d,
            F = C.c,
            S = C.e,
            N = C.s;
          A: if ({}.toString.call(F) == "[object Array]") {
            if ((N === 1 || N === -1) && S >= -gA && S <= gA && S === w(S)) {
              if (F[0] === 0) {
                if (S === 0 && F.length === 1) return !0;
                break A;
              }
              if (
                ((c = (S + 1) % U), c < 1 && (c += U), String(F[0]).length == c)
              ) {
                for (c = 0; c < F.length; c++)
                  if (((d = F[c]), d < 0 || d >= b || d !== w(d))) break A;
                if (d !== 0) return !0;
              }
            }
          } else if (
            F === null &&
            S === null &&
            (N === null || N === 1 || N === -1)
          )
            return !0;
          throw Error(p + "Invalid BigNumber: " + C);
        }),
        (h.maximum = h.max =
          function () {
            return ee(arguments, -1);
          }),
        (h.minimum = h.min =
          function () {
            return ee(arguments, 1);
          }),
        (h.random = (function () {
          var C = 9007199254740992,
            c =
              (Math.random() * C) & 2097151
                ? function () {
                    return w(Math.random() * C);
                  }
                : function () {
                    return (
                      ((Math.random() * 1073741824) | 0) * 8388608 +
                      ((Math.random() * 8388608) | 0)
                    );
                  };
          return function (d) {
            var F,
              S,
              N,
              I,
              r,
              n = 0,
              E = [],
              f = new h(_A);
            if ((d == null ? (d = bA) : LA(d, 0, gA), (I = a(d / U)), TA))
              if (crypto.getRandomValues) {
                for (
                  F = crypto.getRandomValues(new Uint32Array((I *= 2)));
                  n < I;

                )
                  (r = F[n] * 131072 + (F[n + 1] >>> 11)),
                    r >= 9e15
                      ? ((S = crypto.getRandomValues(new Uint32Array(2))),
                        (F[n] = S[0]),
                        (F[n + 1] = S[1]))
                      : (E.push(r % 1e14), (n += 2));
                n = I / 2;
              } else if (crypto.randomBytes) {
                for (F = crypto.randomBytes((I *= 7)); n < I; )
                  (r =
                    (F[n] & 31) * 281474976710656 +
                    F[n + 1] * 1099511627776 +
                    F[n + 2] * 4294967296 +
                    F[n + 3] * 16777216 +
                    (F[n + 4] << 16) +
                    (F[n + 5] << 8) +
                    F[n + 6]),
                    r >= 9e15
                      ? crypto.randomBytes(7).copy(F, n)
                      : (E.push(r % 1e14), (n += 7));
                n = I / 7;
              } else throw ((TA = !1), Error(p + "crypto unavailable"));
            if (!TA) for (; n < I; ) (r = c()), r < 9e15 && (E[n++] = r % 1e14);
            for (
              I = E[--n],
                d %= U,
                I && d && ((r = v[U - d]), (E[n] = w(I / r) * r));
              E[n] === 0;
              E.pop(), n--
            );
            if (n < 0) E = [(N = 0)];
            else {
              for (N = -1; E[0] === 0; E.splice(0, 1), N -= U);
              for (n = 1, r = E[0]; r >= 10; r /= 10, n++);
              n < U && (N -= U - n);
            }
            return (f.e = N), (f.c = E), f;
          };
        })()),
        (h.sum = function () {
          for (var C = 1, c = arguments, d = new h(c[0]); C < c.length; )
            d = d.plus(c[C++]);
          return d;
        }),
        (RA = (function () {
          var C = "0123456789";
          function c(d, F, S, N) {
            for (var I, r = [0], n, E = 0, f = d.length; E < f; ) {
              for (n = r.length; n--; r[n] *= F);
              for (r[0] += N.indexOf(d.charAt(E++)), I = 0; I < r.length; I++)
                r[I] > S - 1 &&
                  (r[I + 1] == null && (r[I + 1] = 0),
                  (r[I + 1] += (r[I] / S) | 0),
                  (r[I] %= S));
            }
            return r.reverse();
          }
          return function (d, F, S, N, I) {
            var r,
              n,
              E,
              f,
              y,
              M,
              H,
              AA,
              aA = d.indexOf("."),
              cA = bA,
              K = UA;
            for (
              aA >= 0 &&
                ((f = he),
                (he = 0),
                (d = d.replace(".", "")),
                (AA = new h(F)),
                (M = AA.pow(d.length - aA)),
                (he = f),
                (AA.c = c(PA(Be(M.c), M.e, "0"), 10, S, C)),
                (AA.e = AA.c.length)),
                H = c(d, F, S, I ? ((r = JA), C) : ((r = C), JA)),
                E = f = H.length;
              H[--f] == 0;
              H.pop()
            );
            if (!H[0]) return r.charAt(0);
            if (
              (aA < 0
                ? --E
                : ((M.c = H),
                  (M.e = E),
                  (M.s = N),
                  (M = QA(M, AA, cA, K, S)),
                  (H = M.c),
                  (y = M.r),
                  (E = M.e)),
              (n = E + cA + 1),
              (aA = H[n]),
              (f = S / 2),
              (y = y || n < 0 || H[n + 1] != null),
              (y =
                K < 4
                  ? (aA != null || y) && (K == 0 || K == (M.s < 0 ? 3 : 2))
                  : aA > f ||
                    (aA == f &&
                      (K == 4 ||
                        y ||
                        (K == 6 && H[n - 1] & 1) ||
                        K == (M.s < 0 ? 8 : 7)))),
              n < 1 || !H[0])
            )
              d = y ? PA(r.charAt(1), -cA, r.charAt(0)) : r.charAt(0);
            else {
              if (((H.length = n), y))
                for (--S; ++H[--n] > S; )
                  (H[n] = 0), n || (++E, (H = [1].concat(H)));
              for (f = H.length; !H[--f]; );
              for (aA = 0, d = ""; aA <= f; d += r.charAt(H[aA++]));
              d = PA(d, E, r.charAt(0));
            }
            return d;
          };
        })()),
        (QA = (function () {
          function C(F, S, N) {
            var I,
              r,
              n,
              E,
              f = 0,
              y = F.length,
              M = S % nA,
              H = (S / nA) | 0;
            for (F = F.slice(); y--; )
              (n = F[y] % nA),
                (E = (F[y] / nA) | 0),
                (I = H * n + E * M),
                (r = M * n + (I % nA) * nA + f),
                (f = ((r / N) | 0) + ((I / nA) | 0) + H * E),
                (F[y] = r % N);
            return f && (F = [f].concat(F)), F;
          }
          function c(F, S, N, I) {
            var r, n;
            if (N != I) n = N > I ? 1 : -1;
            else
              for (r = n = 0; r < N; r++)
                if (F[r] != S[r]) {
                  n = F[r] > S[r] ? 1 : -1;
                  break;
                }
            return n;
          }
          function d(F, S, N, I) {
            for (var r = 0; N--; )
              (F[N] -= r),
                (r = F[N] < S[N] ? 1 : 0),
                (F[N] = r * I + F[N] - S[N]);
            for (; !F[0] && F.length > 1; F.splice(0, 1));
          }
          return function (F, S, N, I, r) {
            var n,
              E,
              f,
              y,
              M,
              H,
              AA,
              aA,
              cA,
              K,
              pA,
              jA,
              De,
              ke,
              Le,
              xA,
              xe,
              te = F.s == S.s ? 1 : -1,
              VA = F.c,
              mA = S.c;
            if (!VA || !VA[0] || !mA || !mA[0])
              return new h(
                !F.s || !S.s || (VA ? mA && VA[0] == mA[0] : !mA)
                  ? NaN
                  : (VA && VA[0] == 0) || !mA
                  ? te * 0
                  : te / 0
              );
            for (
              aA = new h(te),
                cA = aA.c = [],
                E = F.e - S.e,
                te = N + E + 1,
                r ||
                  ((r = b),
                  (E = MA(F.e / U) - MA(S.e / U)),
                  (te = (te / U) | 0)),
                f = 0;
              mA[f] == (VA[f] || 0);
              f++
            );
            if ((mA[f] > (VA[f] || 0) && E--, te < 0)) cA.push(1), (y = !0);
            else {
              for (
                ke = VA.length,
                  xA = mA.length,
                  f = 0,
                  te += 2,
                  M = w(r / (mA[0] + 1)),
                  M > 1 &&
                    ((mA = C(mA, M, r)),
                    (VA = C(VA, M, r)),
                    (xA = mA.length),
                    (ke = VA.length)),
                  De = xA,
                  K = VA.slice(0, xA),
                  pA = K.length;
                pA < xA;
                K[pA++] = 0
              );
              (xe = mA.slice()),
                (xe = [0].concat(xe)),
                (Le = mA[0]),
                mA[1] >= r / 2 && Le++;
              do {
                if (((M = 0), (n = c(mA, K, xA, pA)), n < 0)) {
                  if (
                    ((jA = K[0]),
                    xA != pA && (jA = jA * r + (K[1] || 0)),
                    (M = w(jA / Le)),
                    M > 1)
                  )
                    for (
                      M >= r && (M = r - 1),
                        H = C(mA, M, r),
                        AA = H.length,
                        pA = K.length;
                      c(H, K, AA, pA) == 1;

                    )
                      M--,
                        d(H, xA < AA ? xe : mA, AA, r),
                        (AA = H.length),
                        (n = 1);
                  else M == 0 && (n = M = 1), (H = mA.slice()), (AA = H.length);
                  if (
                    (AA < pA && (H = [0].concat(H)),
                    d(K, H, pA, r),
                    (pA = K.length),
                    n == -1)
                  )
                    for (; c(mA, K, xA, pA) < 1; )
                      M++, d(K, xA < pA ? xe : mA, pA, r), (pA = K.length);
                } else n === 0 && (M++, (K = [0]));
                (cA[f++] = M),
                  K[0] ? (K[pA++] = VA[De] || 0) : ((K = [VA[De]]), (pA = 1));
              } while ((De++ < ke || K[0] != null) && te--);
              (y = K[0] != null), cA[0] || cA.splice(0, 1);
            }
            if (r == b) {
              for (f = 1, te = cA[0]; te >= 10; te /= 10, f++);
              BA(aA, N + (aA.e = f + E * U - 1) + 1, I, y);
            } else (aA.e = E), (aA.r = +y);
            return aA;
          };
        })());
      function oA(C, c, d, F) {
        var S, N, I, r, n;
        if ((d == null ? (d = UA) : LA(d, 0, 8), !C.c)) return C.toString();
        if (((S = C.c[0]), (I = C.e), c == null))
          (n = Be(C.c)),
            (n =
              F == 1 || (F == 2 && (I <= ZA || I >= WA))
                ? we(n, I)
                : PA(n, I, "0"));
        else if (
          ((C = BA(new h(C), c, d)),
          (N = C.e),
          (n = Be(C.c)),
          (r = n.length),
          F == 1 || (F == 2 && (c <= N || N <= ZA)))
        ) {
          for (; r < c; n += "0", r++);
          n = we(n, N);
        } else if (((c -= I), (n = PA(n, N, "0")), N + 1 > r)) {
          if (--c > 0) for (n += "."; c--; n += "0");
        } else if (((c += N - r), c > 0))
          for (N + 1 == r && (n += "."); c--; n += "0");
        return C.s < 0 && S ? "-" + n : n;
      }
      function ee(C, c) {
        for (var d, F, S = 1, N = new h(C[0]); S < C.length; S++)
          (F = new h(C[S])),
            (!F.s || (d = ae(N, F)) === c || (d === 0 && N.s === c)) && (N = F);
        return N;
      }
      function Me(C, c, d) {
        for (var F = 1, S = c.length; !c[--S]; c.pop());
        for (S = c[0]; S >= 10; S /= 10, F++);
        return (
          (d = F + d * U - 1) > ie
            ? (C.c = C.e = null)
            : d < Ae
            ? (C.c = [(C.e = 0)])
            : ((C.e = d), (C.c = c)),
          C
        );
      }
      vA = (function () {
        var C = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
          c = /^([^.]+)\.$/,
          d = /^\.([^.]+)$/,
          F = /^-?(Infinity|NaN)$/,
          S = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function (N, I, r, n) {
          var E,
            f = r ? I : I.replace(S, "");
          if (F.test(f)) N.s = isNaN(f) ? null : f < 0 ? -1 : 1;
          else {
            if (
              !r &&
              ((f = f.replace(C, function (y, M, H) {
                return (
                  (E = (H = H.toLowerCase()) == "x" ? 16 : H == "b" ? 2 : 8),
                  !n || n == E ? M : y
                );
              })),
              n && ((E = n), (f = f.replace(c, "$1").replace(d, "0.$1"))),
              I != f)
            )
              return new h(f, E);
            if (h.DEBUG)
              throw Error(
                p + "Not a" + (n ? " base " + n : "") + " number: " + I
              );
            N.s = null;
          }
          N.c = N.e = null;
        };
      })();
      function BA(C, c, d, F) {
        var S,
          N,
          I,
          r,
          n,
          E,
          f,
          y = C.c,
          M = v;
        if (y) {
          A: {
            for (S = 1, r = y[0]; r >= 10; r /= 10, S++);
            if (((N = c - S), N < 0))
              (N += U),
                (I = c),
                (n = y[(E = 0)]),
                (f = w((n / M[S - I - 1]) % 10));
            else if (((E = a((N + 1) / U)), E >= y.length))
              if (F) {
                for (; y.length <= E; y.push(0));
                (n = f = 0), (S = 1), (N %= U), (I = N - U + 1);
              } else break A;
            else {
              for (n = r = y[E], S = 1; r >= 10; r /= 10, S++);
              (N %= U),
                (I = N - U + S),
                (f = I < 0 ? 0 : w((n / M[S - I - 1]) % 10));
            }
            if (
              ((F =
                F ||
                c < 0 ||
                y[E + 1] != null ||
                (I < 0 ? n : n % M[S - I - 1])),
              (F =
                d < 4
                  ? (f || F) && (d == 0 || d == (C.s < 0 ? 3 : 2))
                  : f > 5 ||
                    (f == 5 &&
                      (d == 4 ||
                        F ||
                        (d == 6 &&
                          (N > 0 ? (I > 0 ? n / M[S - I] : 0) : y[E - 1]) % 10 &
                            1) ||
                        d == (C.s < 0 ? 8 : 7)))),
              c < 1 || !y[0])
            )
              return (
                (y.length = 0),
                F
                  ? ((c -= C.e + 1),
                    (y[0] = M[(U - (c % U)) % U]),
                    (C.e = -c || 0))
                  : (y[0] = C.e = 0),
                C
              );
            if (
              (N == 0
                ? ((y.length = E), (r = 1), E--)
                : ((y.length = E + 1),
                  (r = M[U - N]),
                  (y[E] = I > 0 ? w((n / M[S - I]) % M[I]) * r : 0)),
              F)
            )
              for (;;)
                if (E == 0) {
                  for (N = 1, I = y[0]; I >= 10; I /= 10, N++);
                  for (I = y[0] += r, r = 1; I >= 10; I /= 10, r++);
                  N != r && (C.e++, y[0] == b && (y[0] = 1));
                  break;
                } else {
                  if (((y[E] += r), y[E] != b)) break;
                  (y[E--] = 0), (r = 1);
                }
            for (N = y.length; y[--N] === 0; y.pop());
          }
          C.e > ie ? (C.c = C.e = null) : C.e < Ae && (C.c = [(C.e = 0)]);
        }
        return C;
      }
      function EA(C) {
        var c,
          d = C.e;
        return d === null
          ? C.toString()
          : ((c = Be(C.c)),
            (c = d <= ZA || d >= WA ? we(c, d) : PA(c, d, "0")),
            C.s < 0 ? "-" + c : c);
      }
      return (
        (P.absoluteValue = P.abs =
          function () {
            var C = new h(this);
            return C.s < 0 && (C.s = 1), C;
          }),
        (P.comparedTo = function (C, c) {
          return ae(this, new h(C, c));
        }),
        (P.decimalPlaces = P.dp =
          function (C, c) {
            var d,
              F,
              S,
              N = this;
            if (C != null)
              return (
                LA(C, 0, gA),
                c == null ? (c = UA) : LA(c, 0, 8),
                BA(new h(N), C + N.e + 1, c)
              );
            if (!(d = N.c)) return null;
            if (((F = ((S = d.length - 1) - MA(this.e / U)) * U), (S = d[S])))
              for (; S % 10 == 0; S /= 10, F--);
            return F < 0 && (F = 0), F;
          }),
        (P.dividedBy = P.div =
          function (C, c) {
            return QA(this, new h(C, c), bA, UA);
          }),
        (P.dividedToIntegerBy = P.idiv =
          function (C, c) {
            return QA(this, new h(C, c), 0, 1);
          }),
        (P.exponentiatedBy = P.pow =
          function (C, c) {
            var d,
              F,
              S,
              N,
              I,
              r,
              n,
              E,
              f,
              y = this;
            if (((C = new h(C)), C.c && !C.isInteger()))
              throw Error(p + "Exponent not an integer: " + EA(C));
            if (
              (c != null && (c = new h(c)),
              (r = C.e > 14),
              !y.c ||
                !y.c[0] ||
                (y.c[0] == 1 && !y.e && y.c.length == 1) ||
                !C.c ||
                !C.c[0])
            )
              return (
                (f = new h(Math.pow(+EA(y), r ? C.s * (2 - de(C)) : +EA(C)))),
                c ? f.mod(c) : f
              );
            if (((n = C.s < 0), c)) {
              if (c.c ? !c.c[0] : !c.s) return new h(NaN);
              (F = !n && y.isInteger() && c.isInteger()), F && (y = y.mod(c));
            } else {
              if (
                C.e > 9 &&
                (y.e > 0 ||
                  y.e < -1 ||
                  (y.e == 0
                    ? y.c[0] > 1 || (r && y.c[1] >= 24e7)
                    : y.c[0] < 8e13 || (r && y.c[0] <= 9999975e7)))
              )
                return (
                  (N = y.s < 0 && de(C) ? -0 : 0),
                  y.e > -1 && (N = 1 / N),
                  new h(n ? 1 / N : N)
                );
              he && (N = a(he / U + 2));
            }
            for (
              r
                ? ((d = new h(0.5)), n && (C.s = 1), (E = de(C)))
                : ((S = Math.abs(+EA(C))), (E = S % 2)),
                f = new h(_A);
              ;

            ) {
              if (E) {
                if (((f = f.times(y)), !f.c)) break;
                N ? f.c.length > N && (f.c.length = N) : F && (f = f.mod(c));
              }
              if (S) {
                if (((S = w(S / 2)), S === 0)) break;
                E = S % 2;
              } else if (((C = C.times(d)), BA(C, C.e + 1, 1), C.e > 14))
                E = de(C);
              else {
                if (((S = +EA(C)), S === 0)) break;
                E = S % 2;
              }
              (y = y.times(y)),
                N
                  ? y.c && y.c.length > N && (y.c.length = N)
                  : F && (y = y.mod(c));
            }
            return F
              ? f
              : (n && (f = _A.div(f)), c ? f.mod(c) : N ? BA(f, he, UA, I) : f);
          }),
        (P.integerValue = function (C) {
          var c = new h(this);
          return C == null ? (C = UA) : LA(C, 0, 8), BA(c, c.e + 1, C);
        }),
        (P.isEqualTo = P.eq =
          function (C, c) {
            return ae(this, new h(C, c)) === 0;
          }),
        (P.isFinite = function () {
          return !!this.c;
        }),
        (P.isGreaterThan = P.gt =
          function (C, c) {
            return ae(this, new h(C, c)) > 0;
          }),
        (P.isGreaterThanOrEqualTo = P.gte =
          function (C, c) {
            return (c = ae(this, new h(C, c))) === 1 || c === 0;
          }),
        (P.isInteger = function () {
          return !!this.c && MA(this.e / U) > this.c.length - 2;
        }),
        (P.isLessThan = P.lt =
          function (C, c) {
            return ae(this, new h(C, c)) < 0;
          }),
        (P.isLessThanOrEqualTo = P.lte =
          function (C, c) {
            return (c = ae(this, new h(C, c))) === -1 || c === 0;
          }),
        (P.isNaN = function () {
          return !this.s;
        }),
        (P.isNegative = function () {
          return this.s < 0;
        }),
        (P.isPositive = function () {
          return this.s > 0;
        }),
        (P.isZero = function () {
          return !!this.c && this.c[0] == 0;
        }),
        (P.minus = function (C, c) {
          var d,
            F,
            S,
            N,
            I = this,
            r = I.s;
          if (((C = new h(C, c)), (c = C.s), !r || !c)) return new h(NaN);
          if (r != c) return (C.s = -c), I.plus(C);
          var n = I.e / U,
            E = C.e / U,
            f = I.c,
            y = C.c;
          if (!n || !E) {
            if (!f || !y) return f ? ((C.s = -c), C) : new h(y ? I : NaN);
            if (!f[0] || !y[0])
              return y[0]
                ? ((C.s = -c), C)
                : new h(f[0] ? I : UA == 3 ? -0 : 0);
          }
          if (((n = MA(n)), (E = MA(E)), (f = f.slice()), (r = n - E))) {
            for (
              (N = r < 0) ? ((r = -r), (S = f)) : ((E = n), (S = y)),
                S.reverse(),
                c = r;
              c--;
              S.push(0)
            );
            S.reverse();
          } else
            for (
              F = (N = (r = f.length) < (c = y.length)) ? r : c, r = c = 0;
              c < F;
              c++
            )
              if (f[c] != y[c]) {
                N = f[c] < y[c];
                break;
              }
          if (
            (N && ((S = f), (f = y), (y = S), (C.s = -C.s)),
            (c = (F = y.length) - (d = f.length)),
            c > 0)
          )
            for (; c--; f[d++] = 0);
          for (c = b - 1; F > r; ) {
            if (f[--F] < y[F]) {
              for (d = F; d && !f[--d]; f[d] = c);
              --f[d], (f[F] += b);
            }
            f[F] -= y[F];
          }
          for (; f[0] == 0; f.splice(0, 1), --E);
          return f[0]
            ? Me(C, f, E)
            : ((C.s = UA == 3 ? -1 : 1), (C.c = [(C.e = 0)]), C);
        }),
        (P.modulo = P.mod =
          function (C, c) {
            var d,
              F,
              S = this;
            return (
              (C = new h(C, c)),
              !S.c || !C.s || (C.c && !C.c[0])
                ? new h(NaN)
                : !C.c || (S.c && !S.c[0])
                ? new h(S)
                : (se == 9
                    ? ((F = C.s),
                      (C.s = 1),
                      (d = QA(S, C, 0, 3)),
                      (C.s = F),
                      (d.s *= F))
                    : (d = QA(S, C, 0, se)),
                  (C = S.minus(d.times(C))),
                  !C.c[0] && se == 1 && (C.s = S.s),
                  C)
            );
          }),
        (P.multipliedBy = P.times =
          function (C, c) {
            var d,
              F,
              S,
              N,
              I,
              r,
              n,
              E,
              f,
              y,
              M,
              H,
              AA,
              aA,
              cA,
              K = this,
              pA = K.c,
              jA = (C = new h(C, c)).c;
            if (!pA || !jA || !pA[0] || !jA[0])
              return (
                !K.s || !C.s || (pA && !pA[0] && !jA) || (jA && !jA[0] && !pA)
                  ? (C.c = C.e = C.s = null)
                  : ((C.s *= K.s),
                    !pA || !jA ? (C.c = C.e = null) : ((C.c = [0]), (C.e = 0))),
                C
              );
            for (
              F = MA(K.e / U) + MA(C.e / U),
                C.s *= K.s,
                n = pA.length,
                y = jA.length,
                n < y &&
                  ((AA = pA), (pA = jA), (jA = AA), (S = n), (n = y), (y = S)),
                S = n + y,
                AA = [];
              S--;
              AA.push(0)
            );
            for (aA = b, cA = nA, S = y; --S >= 0; ) {
              for (
                d = 0, M = jA[S] % cA, H = (jA[S] / cA) | 0, I = n, N = S + I;
                N > S;

              )
                (E = pA[--I] % cA),
                  (f = (pA[I] / cA) | 0),
                  (r = H * E + f * M),
                  (E = M * E + (r % cA) * cA + AA[N] + d),
                  (d = ((E / aA) | 0) + ((r / cA) | 0) + H * f),
                  (AA[N--] = E % aA);
              AA[N] = d;
            }
            return d ? ++F : AA.splice(0, 1), Me(C, AA, F);
          }),
        (P.negated = function () {
          var C = new h(this);
          return (C.s = -C.s || null), C;
        }),
        (P.plus = function (C, c) {
          var d,
            F = this,
            S = F.s;
          if (((C = new h(C, c)), (c = C.s), !S || !c)) return new h(NaN);
          if (S != c) return (C.s = -c), F.minus(C);
          var N = F.e / U,
            I = C.e / U,
            r = F.c,
            n = C.c;
          if (!N || !I) {
            if (!r || !n) return new h(S / 0);
            if (!r[0] || !n[0]) return n[0] ? C : new h(r[0] ? F : S * 0);
          }
          if (((N = MA(N)), (I = MA(I)), (r = r.slice()), (S = N - I))) {
            for (
              S > 0 ? ((I = N), (d = n)) : ((S = -S), (d = r)), d.reverse();
              S--;
              d.push(0)
            );
            d.reverse();
          }
          for (
            S = r.length,
              c = n.length,
              S - c < 0 && ((d = n), (n = r), (r = d), (c = S)),
              S = 0;
            c;

          )
            (S = ((r[--c] = r[c] + n[c] + S) / b) | 0),
              (r[c] = b === r[c] ? 0 : r[c] % b);
          return S && ((r = [S].concat(r)), ++I), Me(C, r, I);
        }),
        (P.precision = P.sd =
          function (C, c) {
            var d,
              F,
              S,
              N = this;
            if (C != null && C !== !!C)
              return (
                LA(C, 1, gA),
                c == null ? (c = UA) : LA(c, 0, 8),
                BA(new h(N), C, c)
              );
            if (!(d = N.c)) return null;
            if (((S = d.length - 1), (F = S * U + 1), (S = d[S]))) {
              for (; S % 10 == 0; S /= 10, F--);
              for (S = d[0]; S >= 10; S /= 10, F++);
            }
            return C && N.e + 1 > F && (F = N.e + 1), F;
          }),
        (P.shiftedBy = function (C) {
          return LA(C, -Z, Z), this.times("1e" + C);
        }),
        (P.squareRoot = P.sqrt =
          function () {
            var C,
              c,
              d,
              F,
              S,
              N = this,
              I = N.c,
              r = N.s,
              n = N.e,
              E = bA + 4,
              f = new h("0.5");
            if (r !== 1 || !I || !I[0])
              return new h(!r || (r < 0 && (!I || I[0])) ? NaN : I ? N : 1 / 0);
            if (
              ((r = Math.sqrt(+EA(N))),
              r == 0 || r == 1 / 0
                ? ((c = Be(I)),
                  (c.length + n) % 2 == 0 && (c += "0"),
                  (r = Math.sqrt(+c)),
                  (n = MA((n + 1) / 2) - (n < 0 || n % 2)),
                  r == 1 / 0
                    ? (c = "5e" + n)
                    : ((c = r.toExponential()),
                      (c = c.slice(0, c.indexOf("e") + 1) + n)),
                  (d = new h(c)))
                : (d = new h(r + "")),
              d.c[0])
            ) {
              for (n = d.e, r = n + E, r < 3 && (r = 0); ; )
                if (
                  ((S = d),
                  (d = f.times(S.plus(QA(N, S, E, 1)))),
                  Be(S.c).slice(0, r) === (c = Be(d.c)).slice(0, r))
                )
                  if (
                    (d.e < n && --r,
                    (c = c.slice(r - 3, r + 1)),
                    c == "9999" || (!F && c == "4999"))
                  ) {
                    if (!F && (BA(S, S.e + bA + 2, 0), S.times(S).eq(N))) {
                      d = S;
                      break;
                    }
                    (E += 4), (r += 4), (F = 1);
                  } else {
                    (!+c || (!+c.slice(1) && c.charAt(0) == "5")) &&
                      (BA(d, d.e + bA + 2, 1), (C = !d.times(d).eq(N)));
                    break;
                  }
            }
            return BA(d, d.e + bA + 1, UA, C);
          }),
        (P.toExponential = function (C, c) {
          return C != null && (LA(C, 0, gA), C++), oA(this, C, c, 1);
        }),
        (P.toFixed = function (C, c) {
          return (
            C != null && (LA(C, 0, gA), (C = C + this.e + 1)), oA(this, C, c)
          );
        }),
        (P.toFormat = function (C, c, d) {
          var F,
            S = this;
          if (d == null)
            C != null && c && typeof c == "object"
              ? ((d = c), (c = null))
              : C && typeof C == "object"
              ? ((d = C), (C = c = null))
              : (d = OA);
          else if (typeof d != "object")
            throw Error(p + "Argument not an object: " + d);
          if (((F = S.toFixed(C, c)), S.c)) {
            var N,
              I = F.split("."),
              r = +d.groupSize,
              n = +d.secondaryGroupSize,
              E = d.groupSeparator || "",
              f = I[0],
              y = I[1],
              M = S.s < 0,
              H = M ? f.slice(1) : f,
              AA = H.length;
            if (
              (n && ((N = r), (r = n), (n = N), (AA -= N)), r > 0 && AA > 0)
            ) {
              for (N = AA % r || r, f = H.substr(0, N); N < AA; N += r)
                f += E + H.substr(N, r);
              n > 0 && (f += E + H.slice(N)), M && (f = "-" + f);
            }
            F = y
              ? f +
                (d.decimalSeparator || "") +
                ((n = +d.fractionGroupSize)
                  ? y.replace(
                      new RegExp("\\d{" + n + "}\\B", "g"),
                      "$&" + (d.fractionGroupSeparator || "")
                    )
                  : y)
              : f;
          }
          return (d.prefix || "") + F + (d.suffix || "");
        }),
        (P.toFraction = function (C) {
          var c,
            d,
            F,
            S,
            N,
            I,
            r,
            n,
            E,
            f,
            y,
            M,
            H = this,
            AA = H.c;
          if (
            C != null &&
            ((r = new h(C)), (!r.isInteger() && (r.c || r.s !== 1)) || r.lt(_A))
          )
            throw Error(
              p +
                "Argument " +
                (r.isInteger() ? "out of range: " : "not an integer: ") +
                EA(r)
            );
          if (!AA) return new h(H);
          for (
            c = new h(_A),
              E = d = new h(_A),
              F = n = new h(_A),
              M = Be(AA),
              N = c.e = M.length - H.e - 1,
              c.c[0] = v[(I = N % U) < 0 ? U + I : I],
              C = !C || r.comparedTo(c) > 0 ? (N > 0 ? c : E) : r,
              I = ie,
              ie = 1 / 0,
              r = new h(M),
              n.c[0] = 0;
            (f = QA(r, c, 0, 1)),
              (S = d.plus(f.times(F))),
              S.comparedTo(C) != 1;

          )
            (d = F),
              (F = S),
              (E = n.plus(f.times((S = E)))),
              (n = S),
              (c = r.minus(f.times((S = c)))),
              (r = S);
          return (
            (S = QA(C.minus(d), F, 0, 1)),
            (n = n.plus(S.times(E))),
            (d = d.plus(S.times(F))),
            (n.s = E.s = H.s),
            (N = N * 2),
            (y =
              QA(E, F, N, UA)
                .minus(H)
                .abs()
                .comparedTo(QA(n, d, N, UA).minus(H).abs()) < 1
                ? [E, F]
                : [n, d]),
            (ie = I),
            y
          );
        }),
        (P.toNumber = function () {
          return +EA(this);
        }),
        (P.toPrecision = function (C, c) {
          return C != null && LA(C, 1, gA), oA(this, C, c, 2);
        }),
        (P.toString = function (C) {
          var c,
            d = this,
            F = d.s,
            S = d.e;
          return (
            S === null
              ? F
                ? ((c = "Infinity"), F < 0 && (c = "-" + c))
                : (c = "NaN")
              : (C == null
                  ? (c =
                      S <= ZA || S >= WA ? we(Be(d.c), S) : PA(Be(d.c), S, "0"))
                  : C === 10 && ne
                  ? ((d = BA(new h(d), bA + S + 1, UA)),
                    (c = PA(Be(d.c), d.e, "0")))
                  : (LA(C, 2, JA.length, "Base"),
                    (c = RA(PA(Be(d.c), S, "0"), 10, C, F, !0))),
                F < 0 && d.c[0] && (c = "-" + c)),
            c
          );
        }),
        (P.valueOf = P.toJSON =
          function () {
            return EA(this);
          }),
        (P._isBigNumber = !0),
        IA != null && h.set(IA),
        h
      );
    }
    function MA(IA) {
      var QA = IA | 0;
      return IA > 0 || IA === QA ? QA : QA - 1;
    }
    function Be(IA) {
      for (var QA, RA, vA = 1, P = IA.length, _A = IA[0] + ""; vA < P; ) {
        for (QA = IA[vA++] + "", RA = U - QA.length; RA--; QA = "0" + QA);
        _A += QA;
      }
      for (P = _A.length; _A.charCodeAt(--P) === 48; );
      return _A.slice(0, P + 1 || 1);
    }
    function ae(IA, QA) {
      var RA,
        vA,
        P = IA.c,
        _A = QA.c,
        bA = IA.s,
        UA = QA.s,
        ZA = IA.e,
        WA = QA.e;
      if (!bA || !UA) return null;
      if (((RA = P && !P[0]), (vA = _A && !_A[0]), RA || vA))
        return RA ? (vA ? 0 : -UA) : bA;
      if (bA != UA) return bA;
      if (((RA = bA < 0), (vA = ZA == WA), !P || !_A))
        return vA ? 0 : !P ^ RA ? 1 : -1;
      if (!vA) return (ZA > WA) ^ RA ? 1 : -1;
      for (
        UA = (ZA = P.length) < (WA = _A.length) ? ZA : WA, bA = 0;
        bA < UA;
        bA++
      )
        if (P[bA] != _A[bA]) return (P[bA] > _A[bA]) ^ RA ? 1 : -1;
      return ZA == WA ? 0 : (ZA > WA) ^ RA ? 1 : -1;
    }
    function LA(IA, QA, RA, vA) {
      if (IA < QA || IA > RA || IA !== w(IA))
        throw Error(
          p +
            (vA || "Argument") +
            (typeof IA == "number"
              ? IA < QA || IA > RA
                ? " out of range: "
                : " not an integer: "
              : " not a primitive number: ") +
            String(IA)
        );
    }
    function de(IA) {
      var QA = IA.c.length - 1;
      return MA(IA.e / U) == QA && IA.c[QA] % 2 != 0;
    }
    function we(IA, QA) {
      return (
        (IA.length > 1 ? IA.charAt(0) + "." + IA.slice(1) : IA) +
        (QA < 0 ? "e" : "e+") +
        QA
      );
    }
    function PA(IA, QA, RA) {
      var vA, P;
      if (QA < 0) {
        for (P = RA + "."; ++QA; P += RA);
        IA = P + IA;
      } else if (((vA = IA.length), ++QA > vA)) {
        for (P = RA, QA -= vA; --QA; P += RA);
        IA += P;
      } else QA < vA && (IA = IA.slice(0, QA) + "." + IA.slice(QA));
      return IA;
    }
    (e = qA()),
      (e.default = e.BigNumber = e),
      t.exports
        ? (t.exports = e)
        : (A || (A = typeof self < "u" && self ? self : window),
          (A.BigNumber = e));
  })(ze);
})(ei);
var dt = ei.exports,
  ln = function (A, e, B) {
    var a = new A.Uint8Array(B),
      w = e.pushInt,
      p = e.pushInt32,
      u = e.pushInt32Neg,
      b = e.pushInt64,
      U = e.pushInt64Neg,
      Z = e.pushFloat,
      v = e.pushFloatSingle,
      nA = e.pushFloatDouble,
      gA = e.pushTrue,
      qA = e.pushFalse,
      MA = e.pushUndefined,
      Be = e.pushNull,
      ae = e.pushInfinity,
      LA = e.pushInfinityNeg,
      de = e.pushNaN,
      we = e.pushNaNNeg,
      PA = e.pushArrayStart,
      IA = e.pushArrayStartFixed,
      QA = e.pushArrayStartFixed32,
      RA = e.pushArrayStartFixed64,
      vA = e.pushObjectStart,
      P = e.pushObjectStartFixed,
      _A = e.pushObjectStartFixed32,
      bA = e.pushObjectStartFixed64,
      UA = e.pushByteString,
      ZA = e.pushByteStringStart,
      WA = e.pushUtf8String,
      Ae = e.pushUtf8StringStart,
      ie = e.pushSimpleUnassigned,
      TA = e.pushTagStart,
      se = e.pushTagStart4,
      he = e.pushTagStart8,
      OA = e.pushTagUnassigned,
      JA = e.pushBreak,
      ne = A.Math.pow,
      h = 0,
      oA = 0,
      ee = 0;
    function Me(l) {
      for (
        l = l | 0, h = 0, oA = l;
        (h | 0) < (oA | 0) &&
        ((ee = CA[a[h] & 255](a[h] | 0) | 0), !((ee | 0) > 0));

      );
      return ee | 0;
    }
    function BA(l) {
      return (l = l | 0), (((h | 0) + (l | 0)) | 0) < (oA | 0) ? 0 : 1;
    }
    function EA(l) {
      return (l = l | 0), (a[l | 0] << 8) | a[(l + 1) | 0] | 0;
    }
    function C(l) {
      return (
        (l = l | 0),
        (a[l | 0] << 24) |
          (a[(l + 1) | 0] << 16) |
          (a[(l + 2) | 0] << 8) |
          a[(l + 3) | 0] |
          0
      );
    }
    function c(l) {
      return (l = l | 0), w(l | 0), (h = (h + 1) | 0), 0;
    }
    function d(l) {
      return (
        (l = l | 0),
        BA(1) | 0 ? 1 : (w(a[(h + 1) | 0] | 0), (h = (h + 2) | 0), 0)
      );
    }
    function F(l) {
      return (
        (l = l | 0),
        BA(2) | 0 ? 1 : (w(EA((h + 1) | 0) | 0), (h = (h + 3) | 0), 0)
      );
    }
    function S(l) {
      return (
        (l = l | 0),
        BA(4) | 0
          ? 1
          : (p(EA((h + 1) | 0) | 0, EA((h + 3) | 0) | 0), (h = (h + 5) | 0), 0)
      );
    }
    function N(l) {
      return (
        (l = l | 0),
        BA(8) | 0
          ? 1
          : (b(
              EA((h + 1) | 0) | 0,
              EA((h + 3) | 0) | 0,
              EA((h + 5) | 0) | 0,
              EA((h + 7) | 0) | 0
            ),
            (h = (h + 9) | 0),
            0)
      );
    }
    function I(l) {
      return (l = l | 0), w((-1 - ((l - 32) | 0)) | 0), (h = (h + 1) | 0), 0;
    }
    function r(l) {
      return (
        (l = l | 0),
        BA(1) | 0
          ? 1
          : (w((-1 - (a[(h + 1) | 0] | 0)) | 0), (h = (h + 2) | 0), 0)
      );
    }
    function n(l) {
      l = l | 0;
      var O = 0;
      return BA(2) | 0
        ? 1
        : ((O = EA((h + 1) | 0) | 0),
          w((-1 - (O | 0)) | 0),
          (h = (h + 3) | 0),
          0);
    }
    function E(l) {
      return (
        (l = l | 0),
        BA(4) | 0
          ? 1
          : (u(EA((h + 1) | 0) | 0, EA((h + 3) | 0) | 0), (h = (h + 5) | 0), 0)
      );
    }
    function f(l) {
      return (
        (l = l | 0),
        BA(8) | 0
          ? 1
          : (U(
              EA((h + 1) | 0) | 0,
              EA((h + 3) | 0) | 0,
              EA((h + 5) | 0) | 0,
              EA((h + 7) | 0) | 0
            ),
            (h = (h + 9) | 0),
            0)
      );
    }
    function y(l) {
      l = l | 0;
      var O = 0,
        W = 0,
        _ = 0;
      return (
        (_ = (l - 64) | 0),
        BA(_ | 0) | 0
          ? 1
          : ((O = (h + 1) | 0),
            (W = (((h + 1) | 0) + (_ | 0)) | 0),
            UA(O | 0, W | 0),
            (h = W | 0),
            0)
      );
    }
    function M(l) {
      l = l | 0;
      var O = 0,
        W = 0,
        _ = 0;
      return BA(1) | 0 ||
        ((_ = a[(h + 1) | 0] | 0),
        (O = (h + 2) | 0),
        (W = (((h + 2) | 0) + (_ | 0)) | 0),
        BA((_ + 1) | 0) | 0)
        ? 1
        : (UA(O | 0, W | 0), (h = W | 0), 0);
    }
    function H(l) {
      l = l | 0;
      var O = 0,
        W = 0,
        _ = 0;
      return BA(2) | 0 ||
        ((_ = EA((h + 1) | 0) | 0),
        (O = (h + 3) | 0),
        (W = (((h + 3) | 0) + (_ | 0)) | 0),
        BA((_ + 2) | 0) | 0)
        ? 1
        : (UA(O | 0, W | 0), (h = W | 0), 0);
    }
    function AA(l) {
      l = l | 0;
      var O = 0,
        W = 0,
        _ = 0;
      return BA(4) | 0 ||
        ((_ = C((h + 1) | 0) | 0),
        (O = (h + 5) | 0),
        (W = (((h + 5) | 0) + (_ | 0)) | 0),
        BA((_ + 4) | 0) | 0)
        ? 1
        : (UA(O | 0, W | 0), (h = W | 0), 0);
    }
    function aA(l) {
      return (l = l | 0), 1;
    }
    function cA(l) {
      return (l = l | 0), ZA(), (h = (h + 1) | 0), 0;
    }
    function K(l) {
      l = l | 0;
      var O = 0,
        W = 0,
        _ = 0;
      return (
        (_ = (l - 96) | 0),
        BA(_ | 0) | 0
          ? 1
          : ((O = (h + 1) | 0),
            (W = (((h + 1) | 0) + (_ | 0)) | 0),
            WA(O | 0, W | 0),
            (h = W | 0),
            0)
      );
    }
    function pA(l) {
      l = l | 0;
      var O = 0,
        W = 0,
        _ = 0;
      return BA(1) | 0 ||
        ((_ = a[(h + 1) | 0] | 0),
        (O = (h + 2) | 0),
        (W = (((h + 2) | 0) + (_ | 0)) | 0),
        BA((_ + 1) | 0) | 0)
        ? 1
        : (WA(O | 0, W | 0), (h = W | 0), 0);
    }
    function jA(l) {
      l = l | 0;
      var O = 0,
        W = 0,
        _ = 0;
      return BA(2) | 0 ||
        ((_ = EA((h + 1) | 0) | 0),
        (O = (h + 3) | 0),
        (W = (((h + 3) | 0) + (_ | 0)) | 0),
        BA((_ + 2) | 0) | 0)
        ? 1
        : (WA(O | 0, W | 0), (h = W | 0), 0);
    }
    function De(l) {
      l = l | 0;
      var O = 0,
        W = 0,
        _ = 0;
      return BA(4) | 0 ||
        ((_ = C((h + 1) | 0) | 0),
        (O = (h + 5) | 0),
        (W = (((h + 5) | 0) + (_ | 0)) | 0),
        BA((_ + 4) | 0) | 0)
        ? 1
        : (WA(O | 0, W | 0), (h = W | 0), 0);
    }
    function ke(l) {
      return (l = l | 0), 1;
    }
    function Le(l) {
      return (l = l | 0), Ae(), (h = (h + 1) | 0), 0;
    }
    function xA(l) {
      return (l = l | 0), IA((l - 128) | 0), (h = (h + 1) | 0), 0;
    }
    function xe(l) {
      return (
        (l = l | 0),
        BA(1) | 0 ? 1 : (IA(a[(h + 1) | 0] | 0), (h = (h + 2) | 0), 0)
      );
    }
    function te(l) {
      return (
        (l = l | 0),
        BA(2) | 0 ? 1 : (IA(EA((h + 1) | 0) | 0), (h = (h + 3) | 0), 0)
      );
    }
    function VA(l) {
      return (
        (l = l | 0),
        BA(4) | 0
          ? 1
          : (QA(EA((h + 1) | 0) | 0, EA((h + 3) | 0) | 0), (h = (h + 5) | 0), 0)
      );
    }
    function mA(l) {
      return (
        (l = l | 0),
        BA(8) | 0
          ? 1
          : (RA(
              EA((h + 1) | 0) | 0,
              EA((h + 3) | 0) | 0,
              EA((h + 5) | 0) | 0,
              EA((h + 7) | 0) | 0
            ),
            (h = (h + 9) | 0),
            0)
      );
    }
    function Ke(l) {
      return (l = l | 0), PA(), (h = (h + 1) | 0), 0;
    }
    function kA(l) {
      l = l | 0;
      var O = 0;
      return (
        (O = (l - 160) | 0),
        BA(O | 0) | 0 ? 1 : (P(O | 0), (h = (h + 1) | 0), 0)
      );
    }
    function et(l) {
      return (
        (l = l | 0),
        BA(1) | 0 ? 1 : (P(a[(h + 1) | 0] | 0), (h = (h + 2) | 0), 0)
      );
    }
    function Bt(l) {
      return (
        (l = l | 0),
        BA(2) | 0 ? 1 : (P(EA((h + 1) | 0) | 0), (h = (h + 3) | 0), 0)
      );
    }
    function Nt(l) {
      return (
        (l = l | 0),
        BA(4) | 0
          ? 1
          : (_A(EA((h + 1) | 0) | 0, EA((h + 3) | 0) | 0), (h = (h + 5) | 0), 0)
      );
    }
    function Ft(l) {
      return (
        (l = l | 0),
        BA(8) | 0
          ? 1
          : (bA(
              EA((h + 1) | 0) | 0,
              EA((h + 3) | 0) | 0,
              EA((h + 5) | 0) | 0,
              EA((h + 7) | 0) | 0
            ),
            (h = (h + 9) | 0),
            0)
      );
    }
    function Se(l) {
      return (l = l | 0), vA(), (h = (h + 1) | 0), 0;
    }
    function ue(l) {
      return (l = l | 0), TA((l - 192) | 0 | 0), (h = (h + 1) | 0), 0;
    }
    function Oe(l) {
      return (l = l | 0), TA(l | 0), (h = (h + 1) | 0), 0;
    }
    function It(l) {
      return (l = l | 0), TA(l | 0), (h = (h + 1) | 0), 0;
    }
    function Et(l) {
      return (l = l | 0), TA(l | 0), (h = (h + 1) | 0), 0;
    }
    function Gt(l) {
      return (l = l | 0), TA(l | 0), (h = (h + 1) | 0), 0;
    }
    function ge(l) {
      return (l = l | 0), TA((l - 192) | 0 | 0), (h = (h + 1) | 0), 0;
    }
    function le(l) {
      return (l = l | 0), TA(l | 0), (h = (h + 1) | 0), 0;
    }
    function Mt(l) {
      return (l = l | 0), TA(l | 0), (h = (h + 1) | 0), 0;
    }
    function g(l) {
      return (l = l | 0), TA(l | 0), (h = (h + 1) | 0), 0;
    }
    function Q(l) {
      return (
        (l = l | 0),
        BA(1) | 0 ? 1 : (TA(a[(h + 1) | 0] | 0), (h = (h + 2) | 0), 0)
      );
    }
    function s(l) {
      return (
        (l = l | 0),
        BA(2) | 0 ? 1 : (TA(EA((h + 1) | 0) | 0), (h = (h + 3) | 0), 0)
      );
    }
    function i(l) {
      return (
        (l = l | 0),
        BA(4) | 0
          ? 1
          : (se(EA((h + 1) | 0) | 0, EA((h + 3) | 0) | 0), (h = (h + 5) | 0), 0)
      );
    }
    function o(l) {
      return (
        (l = l | 0),
        BA(8) | 0
          ? 1
          : (he(
              EA((h + 1) | 0) | 0,
              EA((h + 3) | 0) | 0,
              EA((h + 5) | 0) | 0,
              EA((h + 7) | 0) | 0
            ),
            (h = (h + 9) | 0),
            0)
      );
    }
    function D(l) {
      return (l = l | 0), ie(((l | 0) - 224) | 0), (h = (h + 1) | 0), 0;
    }
    function G(l) {
      return (l = l | 0), qA(), (h = (h + 1) | 0), 0;
    }
    function L(l) {
      return (l = l | 0), gA(), (h = (h + 1) | 0), 0;
    }
    function q(l) {
      return (l = l | 0), Be(), (h = (h + 1) | 0), 0;
    }
    function tA(l) {
      return (l = l | 0), MA(), (h = (h + 1) | 0), 0;
    }
    function V(l) {
      return (
        (l = l | 0),
        BA(1) | 0 ? 1 : (ie(a[(h + 1) | 0] | 0), (h = (h + 2) | 0), 0)
      );
    }
    function DA(l) {
      l = l | 0;
      var O = 0,
        W = 0,
        _ = 1,
        rA = 0,
        j = 0,
        eA = 0;
      return BA(2) | 0
        ? 1
        : ((O = a[(h + 1) | 0] | 0),
          (W = a[(h + 2) | 0] | 0),
          (O | 0) & 128 && (_ = -1),
          (rA = +(((O | 0) & 124) >> 2)),
          (j = +((((O | 0) & 3) << 8) | W)),
          +rA == 0
            ? Z(+(+_ * 5960464477539063e-23 * +j))
            : +rA == 31
            ? +_ == 1
              ? +j > 0
                ? de()
                : ae()
              : +j > 0
              ? we()
              : LA()
            : Z(+(+_ * ne(2, +(+rA - 25)) * +(1024 + j))),
          (h = (h + 3) | 0),
          0);
    }
    function $(l) {
      return (
        (l = l | 0),
        BA(4) | 0
          ? 1
          : (v(
              a[(h + 1) | 0] | 0,
              a[(h + 2) | 0] | 0,
              a[(h + 3) | 0] | 0,
              a[(h + 4) | 0] | 0
            ),
            (h = (h + 5) | 0),
            0)
      );
    }
    function fA(l) {
      return (
        (l = l | 0),
        BA(8) | 0
          ? 1
          : (nA(
              a[(h + 1) | 0] | 0,
              a[(h + 2) | 0] | 0,
              a[(h + 3) | 0] | 0,
              a[(h + 4) | 0] | 0,
              a[(h + 5) | 0] | 0,
              a[(h + 6) | 0] | 0,
              a[(h + 7) | 0] | 0,
              a[(h + 8) | 0] | 0
            ),
            (h = (h + 9) | 0),
            0)
      );
    }
    function X(l) {
      return (l = l | 0), 1;
    }
    function hA(l) {
      return (l = l | 0), JA(), (h = (h + 1) | 0), 0;
    }
    var CA = [
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      d,
      F,
      S,
      N,
      X,
      X,
      X,
      X,
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
      r,
      n,
      E,
      f,
      X,
      X,
      X,
      X,
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
      M,
      H,
      AA,
      aA,
      X,
      X,
      X,
      cA,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      K,
      pA,
      jA,
      De,
      ke,
      X,
      X,
      X,
      Le,
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
      te,
      VA,
      mA,
      X,
      X,
      X,
      Ke,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      kA,
      et,
      Bt,
      Nt,
      Ft,
      X,
      X,
      X,
      Se,
      ue,
      ue,
      ue,
      ue,
      ue,
      ue,
      ge,
      ge,
      ge,
      ge,
      ge,
      ge,
      ge,
      ge,
      ge,
      ge,
      ge,
      ge,
      ge,
      ge,
      ge,
      ge,
      ge,
      ge,
      Q,
      s,
      i,
      o,
      X,
      X,
      X,
      X,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      D,
      G,
      L,
      q,
      tA,
      V,
      DA,
      $,
      fA,
      X,
      X,
      X,
      hA,
    ];
    return { parse: Me };
  },
  Dt = {},
  Ce = {};
const ir = dt.BigNumber;
Ce.MT = {
  POS_INT: 0,
  NEG_INT: 1,
  BYTE_STRING: 2,
  UTF8_STRING: 3,
  ARRAY: 4,
  MAP: 5,
  TAG: 6,
  SIMPLE_FLOAT: 7,
};
Ce.TAG = {
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
Ce.NUMBYTES = {
  ZERO: 0,
  ONE: 24,
  TWO: 25,
  FOUR: 26,
  EIGHT: 27,
  INDEFINITE: 31,
};
Ce.SIMPLE = { FALSE: 20, TRUE: 21, NULL: 22, UNDEFINED: 23 };
Ce.SYMS = {
  NULL: Symbol("null"),
  UNDEFINED: Symbol("undef"),
  PARENT: Symbol("parent"),
  BREAK: Symbol("break"),
  STREAM: Symbol("stream"),
};
Ce.SHIFT32 = Math.pow(2, 32);
Ce.SHIFT16 = Math.pow(2, 16);
Ce.MAX_SAFE_HIGH = 2097151;
Ce.NEG_ONE = new ir(-1);
Ce.TEN = new ir(10);
Ce.TWO = new ir(2);
Ce.PARENT = {
  ARRAY: 0,
  OBJECT: 1,
  MAP: 2,
  TAG: 3,
  BYTE_STRING: 4,
  UTF8_STRING: 5,
};
(function (t) {
  const { Buffer: A } = it,
    e = dt.BigNumber,
    B = Ce,
    a = B.SHIFT32,
    w = B.SHIFT16,
    p = 2097151;
  t.parseHalf = function (U) {
    var Z, v, nA;
    return (
      (nA = U[0] & 128 ? -1 : 1),
      (Z = (U[0] & 124) >> 2),
      (v = ((U[0] & 3) << 8) | U[1]),
      Z
        ? Z === 31
          ? nA * (v ? 0 / 0 : 1 / 0)
          : nA * Math.pow(2, Z - 25) * (1024 + v)
        : nA * 5960464477539063e-23 * v
    );
  };
  function u(b) {
    return b < 16 ? "0" + b.toString(16) : b.toString(16);
  }
  (t.arrayBufferToBignumber = function (b) {
    const U = b.byteLength;
    let Z = "";
    for (let v = 0; v < U; v++) Z += u(b[v]);
    return new e(Z, 16);
  }),
    (t.buildMap = (b) => {
      const U = new Map(),
        Z = Object.keys(b),
        v = Z.length;
      for (let nA = 0; nA < v; nA++) U.set(Z[nA], b[Z[nA]]);
      return U;
    }),
    (t.buildInt32 = (b, U) => b * w + U),
    (t.buildInt64 = (b, U, Z, v) => {
      const nA = t.buildInt32(b, U),
        gA = t.buildInt32(Z, v);
      return nA > p ? new e(nA).times(a).plus(gA) : nA * a + gA;
    }),
    (t.writeHalf = function (U, Z) {
      const v = A.allocUnsafe(4);
      v.writeFloatBE(Z, 0);
      const nA = v.readUInt32BE(0);
      if (nA & 8191) return !1;
      var gA = (nA >> 16) & 32768;
      const qA = (nA >> 23) & 255,
        MA = nA & 8388607;
      if (qA >= 113 && qA <= 142) gA += ((qA - 112) << 10) + (MA >> 13);
      else if (qA >= 103 && qA < 113) {
        if (MA & ((1 << (126 - qA)) - 1)) return !1;
        gA += (MA + 8388608) >> (126 - qA);
      } else return !1;
      return U.writeUInt16BE(gA, 0), !0;
    }),
    (t.keySorter = function (b, U) {
      var Z = b[0].byteLength,
        v = U[0].byteLength;
      return Z > v ? 1 : v > Z ? -1 : b[0].compare(U[0]);
    }),
    (t.isNegativeZero = (b) => b === 0 && 1 / b < 0),
    (t.nextPowerOf2 = (b) => {
      let U = 0;
      if (b && !(b & (b - 1))) return b;
      for (; b !== 0; ) (b >>= 1), (U += 1);
      return 1 << U;
    });
})(Dt);
const nr = Ce,
  wn = nr.MT,
  st = nr.SIMPLE,
  Rt = nr.SYMS;
let xn = class Kt {
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
    return A._pushInt(this.value, wn.SIMPLE_FLOAT);
  }
  static isSimple(A) {
    return A instanceof Kt;
  }
  static decode(A, e) {
    switch ((e == null && (e = !0), A)) {
      case st.FALSE:
        return !1;
      case st.TRUE:
        return !0;
      case st.NULL:
        return e ? null : Rt.NULL;
      case st.UNDEFINED:
        return e ? void 0 : Rt.UNDEFINED;
      case -1:
        if (!e) throw new Error("Invalid BREAK");
        return Rt.BREAK;
      default:
        return new Kt(A);
    }
  }
};
var ti = xn;
let yn = class Ot {
  constructor(A, e, B) {
    if (
      ((this.tag = A),
      (this.value = e),
      (this.err = B),
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
    var e, B;
    if (
      ((B = A?.[this.tag]),
      typeof B != "function" &&
        ((B = Ot["_tag" + this.tag]), typeof B != "function"))
    )
      return this;
    try {
      return B.call(Ot, this.value);
    } catch (a) {
      return (e = a), (this.err = e), this;
    }
  }
};
var ri = yn;
const ii = self.location
    ? self.location.protocol + "//" + self.location.host
    : "",
  Wt = self.URL;
let pn = class {
  constructor(A = "", e = ii) {
    (this.super = new Wt(A, e)),
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
function dn(t) {
  if (typeof t == "string") return new Wt(t).toString();
  if (!(t instanceof Wt)) {
    const A = t.username && t.password ? `${t.username}:${t.password}@` : "",
      e = t.auth ? t.auth + "@" : "",
      B = t.port ? ":" + t.port : "",
      a = t.protocol ? t.protocol + "//" : "",
      w = t.host || "",
      p = t.hostname || "",
      u = t.search || (t.query ? "?" + t.query : ""),
      b = t.hash || "",
      U = t.pathname || "",
      Z = t.path || U + u;
    return `${a}${A || e}${w || p + B}${Z}${b}`;
  }
}
var ni = {
  URLWithLegacySupport: pn,
  URLSearchParams: self.URLSearchParams,
  defaultBase: ii,
  format: dn,
};
const { URLWithLegacySupport: yr, format: Dn } = ni;
var Sn = (t, A = {}, e = {}, B) => {
  let a = A.protocol ? A.protocol.replace(":", "") : "http";
  a = (e[a] || B || a) + ":";
  let w;
  try {
    w = new yr(t);
  } catch {
    w = {};
  }
  const p = Object.assign({}, A, {
    protocol: a || w.protocol,
    host: A.host || w.host,
  });
  return new yr(t, Dn(p)).toString();
};
const {
    URLWithLegacySupport: Nn,
    format: Fn,
    URLSearchParams: Gn,
    defaultBase: Mn,
  } = ni,
  bn = Sn;
var gi = {
  URL: Nn,
  URLSearchParams: Gn,
  format: Fn,
  relative: bn,
  defaultBase: Mn,
};
const { Buffer: Ze } = it,
  pr = wt,
  Un = dt.BigNumber,
  Rn = ln,
  ce = Dt,
  HA = Ce,
  kn = ti,
  Ln = ri,
  { URL: mn } = gi;
let Pt = class jt {
  constructor(A) {
    (A = A || {}),
      !A.size || A.size < 65536
        ? (A.size = 65536)
        : (A.size = ce.nextPowerOf2(A.size)),
      (this._heap = new ArrayBuffer(A.size)),
      (this._heap8 = new Uint8Array(this._heap)),
      (this._buffer = Ze.from(this._heap)),
      this._reset(),
      (this._knownTags = Object.assign(
        {
          0: (e) => new Date(e),
          1: (e) => new Date(e * 1e3),
          2: (e) => ce.arrayBufferToBignumber(e),
          3: (e) => HA.NEG_ONE.minus(ce.arrayBufferToBignumber(e)),
          4: (e) => HA.TEN.pow(e[0]).times(e[1]),
          5: (e) => HA.TWO.pow(e[0]).times(e[1]),
          32: (e) => new mn(e),
          35: (e) => new RegExp(e),
        },
        A.tags
      )),
      (this.parser = Rn(
        ze,
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
      case HA.PARENT.TAG:
        this._push(this.createTag(A.ref[0], A.ref[1]));
        break;
      case HA.PARENT.BYTE_STRING:
        this._push(this.createByteString(A.ref, A.length));
        break;
      case HA.PARENT.UTF8_STRING:
        this._push(this.createUtf8String(A.ref, A.length));
        break;
      case HA.PARENT.MAP:
        if (A.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createMap(A.ref, A.length));
        break;
      case HA.PARENT.OBJECT:
        if (A.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createObject(A.ref, A.length));
        break;
      case HA.PARENT.ARRAY:
        this._push(this.createArray(A.ref, A.length));
        break;
    }
    this._currentParent &&
      this._currentParent.type === HA.PARENT.TAG &&
      this._dec();
  }
  _dec() {
    const A = this._currentParent;
    A.length < 0 || (A.length--, A.length === 0 && this._closeParent());
  }
  _push(A, e) {
    const B = this._currentParent;
    switch ((B.values++, B.type)) {
      case HA.PARENT.ARRAY:
      case HA.PARENT.BYTE_STRING:
      case HA.PARENT.UTF8_STRING:
        B.length > -1
          ? (this._ref[this._ref.length - B.length] = A)
          : this._ref.push(A),
          this._dec();
        break;
      case HA.PARENT.OBJECT:
        B.tmpKey != null
          ? ((this._ref[B.tmpKey] = A), (B.tmpKey = null), this._dec())
          : ((B.tmpKey = A),
            typeof B.tmpKey != "string" &&
              ((B.type = HA.PARENT.MAP), (B.ref = ce.buildMap(B.ref))));
        break;
      case HA.PARENT.MAP:
        B.tmpKey != null
          ? (this._ref.set(B.tmpKey, A), (B.tmpKey = null), this._dec())
          : (B.tmpKey = A);
        break;
      case HA.PARENT.TAG:
        this._ref.push(A), e || this._dec();
        break;
      default:
        throw new Error("Unknown parent type");
    }
  }
  _createParent(A, e, B) {
    this._parents[this._depth] = {
      type: e,
      length: B,
      ref: A,
      values: 0,
      tmpKey: null,
    };
  }
  _reset() {
    (this._res = []),
      (this._parents = [
        {
          type: HA.PARENT.ARRAY,
          length: -1,
          ref: this._res,
          values: 0,
          tmpKey: null,
        },
      ]);
  }
  createTag(A, e) {
    const B = this._knownTags[A];
    return B ? B(e) : new Ln(A, e);
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
    return Ze.concat(A);
  }
  createByteStringFromHeap(A, e) {
    return A === e ? Ze.alloc(0) : Ze.from(this._heap.slice(A, e));
  }
  createInt(A) {
    return A;
  }
  createInt32(A, e) {
    return ce.buildInt32(A, e);
  }
  createInt64(A, e, B, a) {
    return ce.buildInt64(A, e, B, a);
  }
  createFloat(A) {
    return A;
  }
  createFloatSingle(A, e, B, a) {
    return pr.read([A, e, B, a], 0, !1, 23, 4);
  }
  createFloatDouble(A, e, B, a, w, p, u, b) {
    return pr.read([A, e, B, a, w, p, u, b], 0, !1, 52, 8);
  }
  createInt32Neg(A, e) {
    return -1 - ce.buildInt32(A, e);
  }
  createInt64Neg(A, e, B, a) {
    const w = ce.buildInt32(A, e),
      p = ce.buildInt32(B, a);
    return w > HA.MAX_SAFE_HIGH
      ? HA.NEG_ONE.minus(new Un(w).times(HA.SHIFT32).plus(p))
      : -1 - (w * HA.SHIFT32 + p);
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
    return new kn(A);
  }
  pushInt(A) {
    this._push(this.createInt(A));
  }
  pushInt32(A, e) {
    this._push(this.createInt32(A, e));
  }
  pushInt64(A, e, B, a) {
    this._push(this.createInt64(A, e, B, a));
  }
  pushFloat(A) {
    this._push(this.createFloat(A));
  }
  pushFloatSingle(A, e, B, a) {
    this._push(this.createFloatSingle(A, e, B, a));
  }
  pushFloatDouble(A, e, B, a, w, p, u, b) {
    this._push(this.createFloatDouble(A, e, B, a, w, p, u, b));
  }
  pushInt32Neg(A, e) {
    this._push(this.createInt32Neg(A, e));
  }
  pushInt64Neg(A, e, B, a) {
    this._push(this.createInt64Neg(A, e, B, a));
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
    this._createParent([], HA.PARENT.ARRAY, -1);
  }
  pushArrayStartFixed(A) {
    this._createArrayStartFixed(A);
  }
  pushArrayStartFixed32(A, e) {
    const B = ce.buildInt32(A, e);
    this._createArrayStartFixed(B);
  }
  pushArrayStartFixed64(A, e, B, a) {
    const w = ce.buildInt64(A, e, B, a);
    this._createArrayStartFixed(w);
  }
  pushObjectStart() {
    this._createObjectStartFixed(-1);
  }
  pushObjectStartFixed(A) {
    this._createObjectStartFixed(A);
  }
  pushObjectStartFixed32(A, e) {
    const B = ce.buildInt32(A, e);
    this._createObjectStartFixed(B);
  }
  pushObjectStartFixed64(A, e, B, a) {
    const w = ce.buildInt64(A, e, B, a);
    this._createObjectStartFixed(w);
  }
  pushByteStringStart() {
    this._parents[this._depth] = {
      type: HA.PARENT.BYTE_STRING,
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
      type: HA.PARENT.UTF8_STRING,
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
    this._parents[this._depth] = { type: HA.PARENT.TAG, length: 1, ref: [A] };
  }
  pushTagStart4(A, e) {
    this.pushTagStart(ce.buildInt32(A, e));
  }
  pushTagStart8(A, e, B, a) {
    this.pushTagStart(ce.buildInt64(A, e, B, a));
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
    this._createParent({}, HA.PARENT.OBJECT, A);
  }
  _createArrayStartFixed(A) {
    if (A === 0) {
      this._push(this.createArray([]));
      return;
    }
    this._createParent(new Array(A), HA.PARENT.ARRAY, A);
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
      typeof A == "string" && (A = Ze.from(A, e || "hex")),
      new jt({ size: A.length }).decodeFirst(A)
    );
  }
  static decodeAll(A, e) {
    return (
      typeof A == "string" && (A = Ze.from(A, e || "hex")),
      new jt({ size: A.length }).decodeAll(A)
    );
  }
};
Pt.decodeFirst = Pt.decode;
var Bi = Pt;
const { Buffer: kt } = it,
  Yn = Bi,
  vn = Dt;
class gr extends Yn {
  createTag(A, e) {
    return `${A}(${e})`;
  }
  createInt(A) {
    return super.createInt(A).toString();
  }
  createInt32(A, e) {
    return super.createInt32(A, e).toString();
  }
  createInt64(A, e, B, a) {
    return super.createInt64(A, e, B, a).toString();
  }
  createInt32Neg(A, e) {
    return super.createInt32Neg(A, e).toString();
  }
  createInt64Neg(A, e, B, a) {
    return super.createInt64Neg(A, e, B, a).toString();
  }
  createTrue() {
    return "true";
  }
  createFalse() {
    return "false";
  }
  createFloat(A) {
    const e = super.createFloat(A);
    return vn.isNegativeZero(A) ? "-0_1" : `${e}_1`;
  }
  createFloatSingle(A, e, B, a) {
    return `${super.createFloatSingle(A, e, B, a)}_2`;
  }
  createFloatDouble(A, e, B, a, w, p, u, b) {
    return `${super.createFloatDouble(A, e, B, a, w, p, u, b)}_3`;
  }
  createByteString(A, e) {
    const B = A.join(", ");
    return e === -1 ? `(_ ${B})` : `h'${B}`;
  }
  createByteStringFromHeap(A, e) {
    return `h'${kt
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
    const B = super.createArray(A, e);
    return e === -1 ? `[_ ${B.join(", ")}]` : `[${B.join(", ")}]`;
  }
  createMap(A, e) {
    const B = super.createMap(A),
      a = Array.from(B.keys()).reduce(dr(B), "");
    return e === -1 ? `{_ ${a}}` : `{${a}}`;
  }
  createObject(A, e) {
    const B = super.createObject(A),
      a = Object.keys(B).reduce(dr(B), "");
    return e === -1 ? `{_ ${a}}` : `{${a}}`;
  }
  createUtf8String(A, e) {
    const B = A.join(", ");
    return e === -1 ? `(_ ${B})` : `"${B}"`;
  }
  createUtf8StringFromHeap(A, e) {
    return `"${kt
      .from(super.createUtf8StringFromHeap(A, e))
      .toString("utf8")}"`;
  }
  static diagnose(A, e) {
    return (
      typeof A == "string" && (A = kt.from(A, e || "hex")),
      new gr().decodeFirst(A)
    );
  }
}
var _n = gr;
function dr(t) {
  return (A, e) => (A ? `${A}, ${e}: ${t[e]}` : `${e}: ${t[e]}`);
}
const { Buffer: Ue } = it,
  { URL: Tn } = gi,
  Zt = dt.BigNumber,
  Lt = Dt,
  Ee = Ce,
  Ne = Ee.MT,
  Qt = Ee.NUMBYTES,
  Dr = Ee.SHIFT32,
  Sr = Ee.SYMS,
  Ve = Ee.TAG,
  Jn = (Ee.MT.SIMPLE_FLOAT << 5) | Ee.NUMBYTES.TWO,
  Hn = (Ee.MT.SIMPLE_FLOAT << 5) | Ee.NUMBYTES.FOUR,
  qn = (Ee.MT.SIMPLE_FLOAT << 5) | Ee.NUMBYTES.EIGHT,
  Kn = (Ee.MT.SIMPLE_FLOAT << 5) | Ee.SIMPLE.TRUE,
  On = (Ee.MT.SIMPLE_FLOAT << 5) | Ee.SIMPLE.FALSE,
  Wn = (Ee.MT.SIMPLE_FLOAT << 5) | Ee.SIMPLE.UNDEFINED,
  Nr = (Ee.MT.SIMPLE_FLOAT << 5) | Ee.SIMPLE.NULL,
  Pn = new Zt("0x20000000000000"),
  jn = Ue.from("f97e00", "hex"),
  Zn = Ue.from("f9fc00", "hex"),
  Vn = Ue.from("f97c00", "hex");
function Xn(t) {
  return {}.toString.call(t).slice(8, -1);
}
class ct {
  constructor(A) {
    (A = A || {}),
      (this.streaming = typeof A.stream == "function"),
      (this.onData = A.stream),
      (this.semanticTypes = [
        [Tn, this._pushUrl],
        [Zt, this._pushBigNumber],
      ]);
    const e = A.genTypes || [],
      B = e.length;
    for (let a = 0; a < B; a++) this.addSemanticType(e[a][0], e[a][1]);
    this._reset();
  }
  addSemanticType(A, e) {
    const B = this.semanticTypes.length;
    for (let a = 0; a < B; a++)
      if (this.semanticTypes[a][0] === A) {
        const p = this.semanticTypes[a][1];
        return (this.semanticTypes[a][1] = e), p;
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
  pushWrite(A, e, B) {
    return (
      (this.result[this.offset] = A),
      (this.resultMethod[this.offset] = e),
      (this.resultLength[this.offset] = B),
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
    return this.push(jn);
  }
  _pushInfinity(A) {
    const e = A < 0 ? Zn : Vn;
    return this.push(e);
  }
  _pushFloat(A) {
    const e = Ue.allocUnsafe(2);
    if (Lt.writeHalf(e, A) && Lt.parseHalf(e) === A)
      return this._pushUInt8(Jn) && this.push(e);
    const B = Ue.allocUnsafe(4);
    return (
      B.writeFloatBE(A, 0),
      B.readFloatBE(0) === A
        ? this._pushUInt8(Hn) && this.push(B)
        : this._pushUInt8(qn) && this._pushDoubleBE(A)
    );
  }
  _pushInt(A, e, B) {
    const a = e << 5;
    return A < 24
      ? this._pushUInt8(a | A)
      : A <= 255
      ? this._pushUInt8(a | Qt.ONE) && this._pushUInt8(A)
      : A <= 65535
      ? this._pushUInt8(a | Qt.TWO) && this._pushUInt16BE(A)
      : A <= 4294967295
      ? this._pushUInt8(a | Qt.FOUR) && this._pushUInt32BE(A)
      : A <= Number.MAX_SAFE_INTEGER
      ? this._pushUInt8(a | Qt.EIGHT) &&
        this._pushUInt32BE(Math.floor(A / Dr)) &&
        this._pushUInt32BE(A % Dr)
      : e === Ne.NEG_INT
      ? this._pushFloat(B)
      : this._pushFloat(A);
  }
  _pushIntNum(A) {
    return A < 0
      ? this._pushInt(-A - 1, Ne.NEG_INT, A)
      : this._pushInt(A, Ne.POS_INT);
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
    const e = Ue.byteLength(A, "utf8");
    return this._pushInt(e, Ne.UTF8_STRING) && this.pushWrite(A, 5, e);
  }
  _pushBoolean(A) {
    return this._pushUInt8(A ? Kn : On);
  }
  _pushUndefined(A) {
    return this._pushUInt8(Wn);
  }
  _pushArray(A, e) {
    const B = e.length;
    if (!A._pushInt(B, Ne.ARRAY)) return !1;
    for (let a = 0; a < B; a++) if (!A.pushAny(e[a])) return !1;
    return !0;
  }
  _pushTag(A) {
    return this._pushInt(A, Ne.TAG);
  }
  _pushDate(A, e) {
    return A._pushTag(Ve.DATE_EPOCH) && A.pushAny(Math.round(e / 1e3));
  }
  _pushBuffer(A, e) {
    return A._pushInt(e.length, Ne.BYTE_STRING) && A.push(e);
  }
  _pushNoFilter(A, e) {
    return A._pushBuffer(A, e.slice());
  }
  _pushRegexp(A, e) {
    return A._pushTag(Ve.REGEXP) && A.pushAny(e.source);
  }
  _pushSet(A, e) {
    if (!A._pushInt(e.size, Ne.ARRAY)) return !1;
    for (const B of e) if (!A.pushAny(B)) return !1;
    return !0;
  }
  _pushUrl(A, e) {
    return A._pushTag(Ve.URI) && A.pushAny(e.format());
  }
  _pushBigint(A) {
    let e = Ve.POS_BIGINT;
    A.isNegative() && ((A = A.negated().minus(1)), (e = Ve.NEG_BIGINT));
    let B = A.toString(16);
    B.length % 2 && (B = "0" + B);
    const a = Ue.from(B, "hex");
    return this._pushTag(e) && this._pushBuffer(this, a);
  }
  _pushBigNumber(A, e) {
    if (e.isNaN()) return A._pushNaN();
    if (!e.isFinite()) return A._pushInfinity(e.isNegative() ? -1 / 0 : 1 / 0);
    if (e.isInteger()) return A._pushBigint(e);
    if (!(A._pushTag(Ve.DECIMAL_FRAC) && A._pushInt(2, Ne.ARRAY))) return !1;
    const B = e.decimalPlaces(),
      a = e.multipliedBy(new Zt(10).pow(B));
    return A._pushIntNum(-B)
      ? a.abs().isLessThan(Pn)
        ? A._pushIntNum(a.toNumber())
        : A._pushBigint(a)
      : !1;
  }
  _pushMap(A, e) {
    return A._pushInt(e.size, Ne.MAP)
      ? this._pushRawMap(e.size, Array.from(e))
      : !1;
  }
  _pushObject(A) {
    if (!A) return this._pushUInt8(Nr);
    for (var e = this.semanticTypes.length, B = 0; B < e; B++)
      if (A instanceof this.semanticTypes[B][0])
        return this.semanticTypes[B][1].call(A, this, A);
    var a = A.encodeCBOR;
    if (typeof a == "function") return a.call(A, this);
    var w = Object.keys(A),
      p = w.length;
    return this._pushInt(p, Ne.MAP)
      ? this._pushRawMap(
          p,
          w.map((u) => [u, A[u]])
        )
      : !1;
  }
  _pushRawMap(A, e) {
    e = e
      .map(function (a) {
        return (a[0] = ct.encode(a[0])), a;
      })
      .sort(Lt.keySorter);
    for (var B = 0; B < A; B++)
      if (!this.push(e[B][0]) || !this.pushAny(e[B][1])) return !1;
    return !0;
  }
  write(A) {
    return this.pushAny(A);
  }
  pushAny(A) {
    var e = Xn(A);
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
        return this._pushBuffer(this, Ue.isBuffer(A) ? A : Ue.from(A));
      case "Null":
        return this._pushUInt8(Nr);
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
          case Sr.NULL:
            return this._pushObject(null);
          case Sr.UNDEFINED:
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
        B = this.resultMethod,
        a = this.offset,
        w = 0,
        p = 0;
      p < a;
      p++
    )
      w += e[p];
    var u = Ue.allocUnsafe(w),
      b = 0,
      U = 0;
    for (p = 0; p < a; p++) {
      switch (((U = e[p]), B[p])) {
        case 0:
          A[p].copy(u, b);
          break;
        case 1:
          u.writeUInt8(A[p], b, !0);
          break;
        case 2:
          u.writeUInt16BE(A[p], b, !0);
          break;
        case 3:
          u.writeUInt32BE(A[p], b, !0);
          break;
        case 4:
          u.writeDoubleBE(A[p], b, !0);
          break;
        case 5:
          u.write(A[p], b, U, "utf8");
          break;
        default:
          throw new Error("unkown method");
      }
      b += U;
    }
    var Z = u;
    return this._reset(), Z;
  }
  _reset() {
    (this.result = []),
      (this.resultMethod = []),
      (this.resultLength = []),
      (this.offset = 0);
  }
  static encode(A) {
    const e = new ct();
    if (!e.pushAny(A)) throw new Error("Failed to encode input");
    return e.finalize();
  }
}
var zn = ct;
(function (t) {
  (t.Diagnose = _n),
    (t.Decoder = Bi),
    (t.Encoder = zn),
    (t.Simple = ti),
    (t.Tagged = ri),
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
})(Ai);
var Ii = Li(Ai);
function tt(...t) {
  const A = new Uint8Array(t.reduce((B, a) => B + a.byteLength, 0));
  let e = 0;
  for (const B of t) A.set(new Uint8Array(B), e), (e += B.byteLength);
  return A.buffer;
}
const $n = new RegExp(/^([0-9A-F]{2})*$/i);
function Vt(t) {
  if (!$n.test(t)) throw new Error("Invalid hexadecimal string.");
  const A = [...t]
    .reduce((e, B, a) => ((e[(a / 2) | 0] = (e[(a / 2) | 0] || "") + B), e), [])
    .map((e) => Number.parseInt(e, 16));
  return new Uint8Array(A).buffer;
}
function Ag(t, A) {
  if (t.byteLength !== A.byteLength) return t.byteLength - A.byteLength;
  const e = new Uint8Array(t),
    B = new Uint8Array(A);
  for (let a = 0; a < e.length; a++) if (e[a] !== B[a]) return e[a] - B[a];
  return 0;
}
function eg(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength).buffer;
}
function We(t) {
  return eg(In.create().update(new Uint8Array(t)).digest());
}
function ot(t) {
  if (t instanceof Ii.Tagged) return ot(t.value);
  if (typeof t == "string") return Ei(t);
  if (typeof t == "number") return We(wr(t));
  if (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) return We(t);
  if (Array.isArray(t)) {
    const A = t.map(ot);
    return We(tt(...A));
  } else {
    if (t && typeof t == "object" && t._isPrincipal)
      return We(t.toUint8Array());
    if (typeof t == "object" && t !== null && typeof t.toHash == "function")
      return ot(t.toHash());
    if (typeof t == "bigint") return We(wr(t));
  }
  throw Object.assign(
    new Error(`Attempt to hash a value of unsupported type: ${t}`),
    { value: t }
  );
}
const Ei = (t) => {
  const A = new TextEncoder().encode(t);
  return We(A);
};
function Br(t) {
  const B = Object.entries(t)
      .filter(([, p]) => p !== void 0)
      .map(([p, u]) => {
        const b = Ei(p),
          U = ot(u);
        return [b, U];
      })
      .sort(([p], [u]) => Ag(p, u)),
    a = tt(...B.map((p) => tt(...p)));
  return We(a);
}
var tg = function (t, A) {
  var e = {};
  for (var B in t)
    Object.prototype.hasOwnProperty.call(t, B) &&
      A.indexOf(B) < 0 &&
      (e[B] = t[B]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, B = Object.getOwnPropertySymbols(t); a < B.length; a++)
      A.indexOf(B[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, B[a]) &&
        (e[B[a]] = t[B[a]]);
  return e;
};
const rg = new TextEncoder().encode(`
ic-request`);
class Ir {
  getPrincipal() {
    return (
      this._principal ||
        (this._principal = qe.selfAuthenticating(
          new Uint8Array(this.getPublicKey().toDer())
        )),
      this._principal
    );
  }
  async transformRequest(A) {
    const { body: e } = A,
      B = tg(A, ["body"]),
      a = await Br(e);
    return Object.assign(Object.assign({}, B), {
      body: {
        content: e,
        sender_pubkey: this.getPublicKey().toDer(),
        sender_sig: await this.sign(tt(rg, a)),
      },
    });
  }
}
class Fr {
  getPrincipal() {
    return qe.anonymous();
  }
  async transformRequest(A) {
    return Object.assign(Object.assign({}, A), { body: { content: A.body } });
  }
}
var ye = {},
  At = {},
  KA = {};
Object.defineProperty(KA, "__esModule", { value: !0 });
const ig = 9007199254740992;
function ve(t, ...A) {
  const e = new Uint8Array(
    t.byteLength + A.reduce((a, w) => a + w.byteLength, 0)
  );
  e.set(new Uint8Array(t), 0);
  let B = t.byteLength;
  for (const a of A) e.set(new Uint8Array(a), B), (B += a.byteLength);
  return e.buffer;
}
function Ge(t, A, e) {
  e = e.replace(/[^0-9a-fA-F]/g, "");
  const B = 2 ** (A - 24);
  e = e.slice(-B * 2).padStart(B * 2, "0");
  const a = [(t << 5) + A].concat(e.match(/../g).map((w) => parseInt(w, 16)));
  return new Uint8Array(a).buffer;
}
function St(t, A) {
  if (A < 24) return new Uint8Array([(t << 5) + A]).buffer;
  {
    const e = A <= 255 ? 24 : A <= 65535 ? 25 : A <= 4294967295 ? 26 : 27;
    return Ge(t, e, A.toString(16));
  }
}
function ai(t) {
  const A = [];
  for (let e = 0; e < t.length; e++) {
    let B = t.charCodeAt(e);
    B < 128
      ? A.push(B)
      : B < 2048
      ? A.push(192 | (B >> 6), 128 | (B & 63))
      : B < 55296 || B >= 57344
      ? A.push(224 | (B >> 12), 128 | ((B >> 6) & 63), 128 | (B & 63))
      : (e++,
        (B = ((B & 1023) << 10) | (t.charCodeAt(e) & 1023)),
        A.push(
          240 | (B >> 18),
          128 | ((B >> 12) & 63),
          128 | ((B >> 6) & 63),
          128 | (B & 63)
        ));
  }
  return ve(new Uint8Array(St(3, t.length)), new Uint8Array(A));
}
function ng(t, A) {
  if (t == 14277111) return ve(new Uint8Array([217, 217, 247]), A);
  if (t < 24) return ve(new Uint8Array([192 + t]), A);
  {
    const e = t <= 255 ? 24 : t <= 65535 ? 25 : t <= 4294967295 ? 26 : 27,
      B = 2 ** (e - 24),
      a = t
        .toString(16)
        .slice(-B * 2)
        .padStart(B * 2, "0"),
      w = [192 + e].concat(a.match(/../g).map((p) => parseInt(p, 16)));
    return new Uint8Array(w).buffer;
  }
}
KA.tagged = ng;
function gt(t) {
  return new Uint8Array(t).buffer;
}
KA.raw = gt;
function Er(t) {
  if (isNaN(t)) throw new RangeError("Invalid number.");
  t = Math.min(Math.max(0, t), 23);
  const A = [0 + t];
  return new Uint8Array(A).buffer;
}
KA.uSmall = Er;
function si(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, t), 255)), (t = t.toString(16)), Ge(0, 24, t)
  );
}
KA.u8 = si;
function Qi(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, t), 65535)), (t = t.toString(16)), Ge(0, 25, t)
  );
}
KA.u16 = Qi;
function fi(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, t), 4294967295)),
    (t = t.toString(16)),
    Ge(0, 26, t)
  );
}
KA.u32 = fi;
function ar(t, A) {
  if (typeof t == "string" && A == 16) {
    if (t.match(/[^0-9a-fA-F]/)) throw new RangeError("Invalid number.");
    return Ge(0, 27, t);
  }
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (t = Math.min(Math.max(0, t), ig)), (t = t.toString(16)), Ge(0, 27, t);
}
KA.u64 = ar;
function oi(t) {
  if (isNaN(t)) throw new RangeError("Invalid number.");
  if (t === 0) return Er(0);
  t = Math.min(Math.max(0, -t), 24) - 1;
  const A = [32 + t];
  return new Uint8Array(A).buffer;
}
KA.iSmall = oi;
function Ci(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 255)), (t = t.toString(16)), Ge(1, 24, t)
  );
}
KA.i8 = Ci;
function hi(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 65535)),
    (t = t.toString(16)),
    Ge(1, 25, t)
  );
}
KA.i16 = hi;
function ci(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 4294967295)),
    (t = t.toString(16)),
    Ge(1, 26, t)
  );
}
KA.i32 = ci;
function ui(t, A) {
  if (typeof t == "string" && A == 16) {
    if (
      (t.startsWith("-") ? (t = t.slice(1)) : (t = "0"),
      t.match(/[^0-9a-fA-F]/) || t.length > 16)
    )
      throw new RangeError("Invalid number.");
    let e = !1,
      B = t.split("").reduceRight((a, w) => {
        if (e) return w + a;
        let p = parseInt(w, 16) - 1;
        return p >= 0 ? ((e = !0), p.toString(16) + a) : "f" + a;
      }, "");
    return e ? Ge(1, 27, B) : ar(0);
  }
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 9007199254740992)),
    (t = t.toString(16)),
    Ge(1, 27, t)
  );
}
KA.i64 = ui;
function gg(t) {
  return t >= 0
    ? t < 24
      ? Er(t)
      : t <= 255
      ? si(t)
      : t <= 65535
      ? Qi(t)
      : t <= 4294967295
      ? fi(t)
      : ar(t)
    : t >= -24
    ? oi(t)
    : t >= -255
    ? Ci(t)
    : t >= -65535
    ? hi(t)
    : t >= -4294967295
    ? ci(t)
    : ui(t);
}
KA.number = gg;
function Bg(t) {
  return ve(St(2, t.byteLength), t);
}
KA.bytes = Bg;
function Ig(t) {
  return ai(t);
}
KA.string = Ig;
function Eg(t) {
  return ve(St(4, t.length), ...t);
}
KA.array = Eg;
function ag(t, A = !1) {
  t instanceof Map || (t = new Map(Object.entries(t)));
  let e = Array.from(t.entries());
  return (
    A && (e = e.sort(([B], [a]) => B.localeCompare(a))),
    ve(St(5, t.size), ...e.map(([B, a]) => ve(ai(B), a)))
  );
}
KA.map = ag;
function sg(t) {
  const A = new Float32Array([t]);
  return ve(new Uint8Array([224 + 26]), new Uint8Array(A.buffer));
}
KA.singleFloat = sg;
function Qg(t) {
  const A = new Float64Array([t]);
  return ve(new Uint8Array([224 + 27]), new Uint8Array(A.buffer));
}
KA.doubleFloat = Qg;
function fg(t) {
  return t ? li() : wi();
}
KA.bool = fg;
function li() {
  return gt(new Uint8Array([224 + 21]));
}
KA.true_ = li;
function wi() {
  return gt(new Uint8Array([224 + 20]));
}
KA.false_ = wi;
function og() {
  return gt(new Uint8Array([224 + 22]));
}
KA.null_ = og;
function Cg() {
  return gt(new Uint8Array([224 + 23]));
}
KA.undefined_ = Cg;
var hg =
  (ze && ze.__importStar) ||
  function (t) {
    if (t && t.__esModule) return t;
    var A = {};
    if (t != null)
      for (var e in t) Object.hasOwnProperty.call(t, e) && (A[e] = t[e]);
    return (A.default = t), A;
  };
Object.defineProperty(At, "__esModule", { value: !0 });
const Fe = hg(KA),
  cg = [
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
class xi {
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
        return Fe.undefined_();
      case "boolean":
        return Fe.bool(A);
      case "number":
        return Math.floor(A) === A ? Fe.number(A) : Fe.doubleFloat(A);
      case "string":
        return Fe.string(A);
      case "object":
        if (A === null) return Fe.null_();
        if (Array.isArray(A))
          return Fe.array(A.map((e) => this._serializer.serializeValue(e)));
        if (cg.find((e) => A instanceof e)) return Fe.bytes(A.buffer);
        if (Object.getOwnPropertyNames(A).indexOf("toJSON") !== -1)
          return this.encode(A.toJSON());
        if (A instanceof Map) {
          const e = new Map();
          for (const [B, a] of A.entries())
            e.set(B, this._serializer.serializeValue(a));
          return Fe.map(e, this._stable);
        } else {
          const e = new Map();
          for (const [B, a] of Object.entries(A))
            e.set(B, this._serializer.serializeValue(a));
          return Fe.map(e, this._stable);
        }
      default:
        throw new Error("Invalid value.");
    }
  }
}
At.JsonDefaultCborEncoder = xi;
class yi {
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
At.ToCborEncoder = yi;
class pi {
  constructor() {
    this._encoders = new Set();
  }
  static withDefaultEncoders(A = !1) {
    const e = new this();
    return e.addEncoder(new xi(e, A)), e.addEncoder(new yi()), e;
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
    for (const B of this._encoders)
      (!e || B.priority > e.priority) && B.match(A) && (e = B);
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
At.CborSerializer = pi;
class ug extends pi {
  serialize(A) {
    return Fe.raw(
      new Uint8Array([
        ...new Uint8Array([217, 217, 247]),
        ...new Uint8Array(super.serializeValue(A)),
      ])
    );
  }
}
At.SelfDescribeCborSerializer = ug;
(function (t) {
  function A(a) {
    for (var w in a) t.hasOwnProperty(w) || (t[w] = a[w]);
  }
  var e =
    (ze && ze.__importStar) ||
    function (a) {
      if (a && a.__esModule) return a;
      var w = {};
      if (a != null)
        for (var p in a) Object.hasOwnProperty.call(a, p) && (w[p] = a[p]);
      return (w.default = a), w;
    };
  Object.defineProperty(t, "__esModule", { value: !0 }), A(At);
  const B = e(KA);
  t.value = B;
})(ye);
class lg {
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
    return ye.value.bytes(A.toUint8Array());
  }
}
class wg {
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
    return ye.value.bytes(new Uint8Array(A));
  }
}
class xg {
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
      ? ye.value.tagged(2, ye.value.bytes(Vt(A.toString(16))))
      : ye.value.tagged(3, ye.value.bytes(Vt((BigInt("-1") * A).toString(16))));
  }
}
const sr = ye.SelfDescribeCborSerializer.withDefaultEncoders(!0);
sr.addEncoder(new lg());
sr.addEncoder(new wg());
sr.addEncoder(new xg());
var Gr;
(function (t) {
  (t[(t.Uint64LittleEndian = 71)] = "Uint64LittleEndian"),
    (t[(t.Semantic = 55799)] = "Semantic");
})(Gr || (Gr = {}));
class QB extends Ii.Decoder {
  createByteString(A) {
    return tt(...A);
  }
  createByteStringFromHeap(A, e) {
    return A === e
      ? new ArrayBuffer(0)
      : new Uint8Array(this._heap.slice(A, e));
  }
}
var Mr;
(function (t) {
  t.Call = "call";
})(Mr || (Mr = {}));
BigInt(1e6);
BigInt(60 * 1e3);
var br;
(function (t) {
  (t.Received = "received"),
    (t.Processing = "processing"),
    (t.Replied = "replied"),
    (t.Rejected = "rejected"),
    (t.Unknown = "unknown"),
    (t.Done = "done");
})(br || (br = {}));
var Ur;
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
})(Ur || (Ur = {}));
var di;
(function () {
  for (
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      A = new Uint8Array(256),
      e = 0;
    e < t.length;
    e++
  )
    A[t.charCodeAt(e)] = e;
  di = function (B) {
    var a = B.length * 0.75,
      w = B.length,
      p,
      u = 0,
      b,
      U,
      Z,
      v;
    B[B.length - 1] === "=" && (a--, B[B.length - 2] === "=" && a--);
    var nA = new ArrayBuffer(a),
      gA = new Uint8Array(nA);
    for (p = 0; p < w; p += 4)
      (b = A[B.charCodeAt(p)]),
        (U = A[B.charCodeAt(p + 1)]),
        (Z = A[B.charCodeAt(p + 2)]),
        (v = A[B.charCodeAt(p + 3)]),
        (gA[u++] = (b << 2) | (U >> 4)),
        (gA[u++] = ((U & 15) << 4) | (Z >> 2)),
        (gA[u++] = ((Z & 3) << 6) | (v & 63));
    return nA;
  };
})();
const yg =
  "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akE4ENABGiACQbgDakEBNgIAIAJBwANqQTgQ0AEaIAJB+ANqQQE2AgAgAkGABGpBOBDQARogAkEBNgK4BCACQcAEakE4ENABGiACQfgEakEBNgIAIAJBgAVqQTgQ0AEaIAJBuAVqQQE2AgAgAkHABWpBOBDQARogAkH4BWpBATYCACACQYAGakE4ENABGiACQQE2ArgGIAJBwAZqQTgQ0AEaIAJB+AZqQQE2AgAgAkGAB2pBOBDQARogAkG4B2pBATYCACACQcAHakE4ENABGiACQfgHakEBNgIAIAIgARAYAkAgASgCgAZBBEYNACAAKAKABkEERg0AIAJBgARqIgMgAEGAAmoQlgEgAyABQYACahAYDAYLIAJBwAxqIgdBOBDQARogAkEBNgL4DCACQYANakE4ENABGiACQbgNakEBNgIAIAJBgAhqIgRBOBDQARogAkEBNgK4CCACQcAIakE4ENABGiACQfgIakEBNgIAIAJBgApqIgMgAEGAA2oiBRBeIAQgAxCZASADIAFBgANqIgYQXiAEIAMQESAHELYBIAEoAoAGQQRHDQMMBAsgACABEAMMBgsgAkHADGoiAyABQYAFahBeIAJBgAxqIgQgA0HAABDRARogAkGABmogBBCnAQsgAkGABmoQZCACQYAIaiIDIAIQlgEgAxArIAJBgAJqIgQgAxCXASAGIAQQlgEgAkGABGoiByADEJYBIAMgABCWASADIAUQlwEgAxCwASACQYAKaiIEIAEQlgEgBCABQYAEahCXASAEELABIAMgBBAYIAcgAxCXASADIAUQlgECQCABKAKABkECRwRAIAJBwAxqIgMgAUGABWoQXiACQYAIaiADEKYBDAELIAJBwAxqIgMgAUGABWoQXiACQYAMaiIBIANBwAAQ0QEaIAJBgAhqIAEQpwELIAJBgAhqIgEQZCACQYAKaiIDIAEQlgEgAxArIAUgAkGABGoQlgEgBSADEJcBIAJBgAZqIgQgAxCXASABEGQgBiABEJcBIAQQsAEgBBBkIAAgAhCWASAAIAQQlwEMAwsgAkGACmoiAyAFEF4gAkHADGoiBCADEJkBIAMgAUGAAmoQXiAEIAMQEQsgACgCgAZBBEcEQCACQYAKaiIDIABBgAJqEF4gAkHADGoiBCADEJkBIAMgBhBeIAQgAxARCyACQYAEaiIDIAJB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AEHcu8AAKAIAQX4gA0EDdndxNgIACyAAIAEQoAEgAEH0vsAAKAIARw0BQey+wAAgATYCAAsPCyABQYACTwRAIAAgARAWDwsgAUEDdiICQQN0QeS7wABqIQECf0Hcu8AAKAIAIgNBASACdCICcQRAIAEoAggMAQtB3LvAACACIANyNgIAIAELIQIgASAANgIIIAIgADYCDCAAIAE2AgwgACACNgIIC+UDAQN/IwBB0CJrIgMkACADQcAWaiIEQcitwAAQSSADQcgcaiIFQYCuwAAQSSADQQhqIAQgBRBLIANBiAFqQTgQ0AEaIANBwAFqQTgQ0AEaIANB+AFqED0CQCACEIYBBEAgABBVDAELIANB+ARqIgQQPSAEIAEQfSAEEEcgA0H4B2oiARBnIAEgAhB4IAEQRiADQcgcaiICIAEQkAEgA0G4CWogAhCQASACIANBuAhqEJABIANB+AlqIAIQkAEgA0G4CmoiARA9IANBuA1qEFUgASAEEH0gA0HAE2oiARA9IAEgBBB9IAEQogEgA0HAAWogA0GIAWoQUEECayECA0AgAkEBakEBTQRAIANBuA1qIgEQngEgACABQYgGENEBGgUgA0G4DWoQGiADQcAWaiADQbgKaiADQbgJaiADQfgJahALAkACQAJAIANBwAFqIAIQUyADQYgBaiACEFNrQQFqDgMBAgACCyADQcgcaiIBIANBuApqIANB+ARqIANBuAlqIANB+AlqEAogA0HAFmogARADDAELIANByBxqIgEgA0G4CmogA0HAE2ogA0G4CWogA0H4CWoQCiADQcAWaiABEAMLIAJBAWshAiADQbgNaiADQcAWahABDAELCwsgA0HQImokAAvBAwEVfwNAIANBwAFGBEACQCAAQShqIQsgAEEUaigCACIMIQggAEEQaigCACINIQIgAEEMaigCACIOIQEgACgCCCIPIQMgAEEYaigCACIQIQogAEEcaigCACIRIQQgAEEgaigCACISIQcgAEEkaigCACITIQYDQCAHIQkgBCEHIAohBCAFQYACRg0BIAEgAnEhFCABIAJzIRUgBSALaigCACAFQcCiwABqKAIAIAkgBEF/c3EgBCAHcXIgBmogBEEadyAEQRV3cyAEQQd3c2pqaiIGIAhqIQogBUEEaiEFIAIhCCABIQIgAyIBQR53IAFBE3dzIAFBCndzIBQgASAVcXNqIAZqIQMgCSEGDAALAAsFIAAgA2oiAkHoAGogAkEoaigCACACQcwAaigCACACQeAAaigCACIBQQ93IAFBDXdzIAFBCnZzamogAkEsaigCACIBQRl3IAFBDndzIAFBA3ZzajYCACADQQRqIQMMAQsLIAAgBiATajYCJCAAIAkgEmo2AiAgACAHIBFqNgIcIAAgBCAQajYCGCAAIAggDGo2AhQgACACIA1qNgIQIAAgASAOajYCDCAAIAMgD2o2AggL5AEBAn8jAEGAA2siAyQAIAMQPSAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbyAAIAFBgANqIAJBAXNBAWtBH3YQbyAAIAFBgAZqIAJBAnNBAWtBH3YQbyAAIAFBgAlqIAJBA3NBAWtBH3YQbyAAIAFBgAxqIAJBBHNBAWtBH3YQbyAAIAFBgA9qIAJBBXNBAWtBH3YQbyAAIAFBgBJqIAJBBnNBAWtBH3YQbyAAIAFBgBVqIAJBB3NBAWtBH3YQbyADIAAQfSADEKIBIAAgAyAEQQFxEG8gA0GAA2okAAvlAwEIfyMAQZAGayICJAAgAEFAayEIAkAgAUH4AGooAgAgASgCOGqsIABB+ABqKAIAIgcgACgCOCIEaqx+Qv///w9XDQAgBEEBSgR/IAAQHiAAKAJ4BSAHC0EBTA0AIAgQHgsgAkHYpMAAEEkgAkE4aiIHQfAAENABGiACIQNBACECA0AgAkE4RgRAAkAgB0E4aiEEQQAhAgNAIAJBOEYNASACIARqIAIgA2opAwA3AwAgAkEIaiECDAALAAsFIAIgB2pCADcDACACQQhqIQIMAQsLIANBqAFqIgYgABBdIANB4AFqIgUgARBdIANBmAJqIgIgACABEAUgA0GIA2oiBCAIIAFBQGsiARAFIAYgCBBgIAYQQiAFIAEQYCAFEEIgA0H4A2oiCSAGIAUQBUEAIQEgA0HoBGoiBkHwABDQASEFA0AgAUHwAEcEQCABIAVqIAEgAmopAwA3AwAgAUEIaiEBDAELCyAGIAQQYkEAIQEDQCABQfAARwRAIAEgBGoiBSABIAdqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAiAEEGIgAhBIIAkgBhBjIAkQSCADQdgFaiIBIAIQayAAIAEQaiAAQQM2AjggASAJEGsgCCABEGogAEECNgJ4IANBkAZqJAALowIBCH8jAEGABmsiAiQAIAIgAEGAAWoiBxBeIAJBgAFqIgQgBxBeIAQQLSACQYACaiIFIAIQXiAFIABBgAJqIgMQESACQYADaiIBIAMQXiABEC0gAyAEEJkBIAMgBBCaASADEKkBIAMQuAEgAxC4ASADEKkBIAFBDBCrASABEHwgARCpASACQYAEaiIIIAEQXiAIIAMQESACQYAFaiIGIAQQXiAGIAEQmgEgBhCpASADIAUQESAFIAEQmQEgBSABEJoBIAEgBRCaASABEKkBIAQgARB7IAQQqQEgBiAEEBEgBiAIEJoBIAUgABCZASAFIAIQESAAIAQQmQEgABCpASAAIAUQESAAELgBIAAQqQEgByAGEJkBIAcQqQEgAkGABmokAAu8AgEGfyMAQYAIayIBJAAgASAAEIwBIAFBgAJqIgMgAEGABGoiBRCMASABQYAEaiIEIABBgAJqIgYQjAEgAUGABmoiAkE4ENABGiABQQE2ArgGIAFBwAZqQTgQ0AEaIAFB+AZqQQE2AgAgAUGAB2pBOBDQARogAUG4B2pBATYCACABQcAHakE4ENABGiABQfgHakEBNgIAIAAQISACIAAQlgEgAiAAEJcBIAAgAhCXASAAELABIAEQyQEgARCzASAAIAEQlwEgAxAhIAMQZCACIAMQlgEgAiADEJcBIAMgAhCXASADELABIAQQISACIAQQlgEgAiAEEJcBIAQgAhCXASAEELABIAYQsgEgBhCzASAFEMkBIAUQswEgBiADEJcBIAUgBBCXASAAQQU2AoAGIAAQnAEgAUGACGokAAv/AQEHfyMAQcACayIBJAAgASAAQUBrIgYQkAEgARBMIAFBQGsiAyAGEJABIAMgAEGAAWoiAhBKIAFBgAFqIgQgAhCQASAEEEwgAiABEK4BIAIgARB3IAIQQiACEIIBIAIQggEgAhBCIARBDBA0IAFBwAFqIgcgBBCQASAHIAIQSiABQYACaiIFIAEQkAEgBSAEEHcgBRBCIAIgAxBKIAMgBBCuASADIAQQdyAEIAMQdyABIAQQfiABEEIgBSABEEogBSAHEHcgAyAAEK4BIAMgBhBKIAAgARCuASAAEEIgACADEEogABCCASAAEEIgBiAFEK4BIAYQQiABQcACaiQAC84CAgd/An4CQAJAAkBBDSABQTpuIgJrIgRBDU0EQEEMIAJrIgNBDk8NASAAIAAgA0EDdGopAwBBOiABIAJBOmxrIgNrrSIKhyAAIARBA3RqKQMAIAOtIgmGhDcDaCAEQQ1rIQUgAEHgAGohBCACQQFqIQZBACACQQN0ayEHQQshAwNAAkAgA0ECaiAGTQRAIAFBrAZPDQEgACACQQN0aiAAKQMAIAmGQv//////////A4M3AwADQCACRQ0HIABCADcDACACQQFrIQIgAEEIaiEADAALAAsgAyAFakEOTw0EIAQgBCAHaiIIQQhrKQMAIAqHIAgpAwAgCYZC//////////8Dg4Q3AwAgA0EBayEDIARBCGshBAwBCwsgAkEOQYCywAAQOwALIARBDkHQscAAEDsACyADQQ5B4LHAABA7AAtBf0EOQfCxwAAQOwALC6cCAQR/IABCADcCECAAAn9BACABQYACSQ0AGkEfIAFB////B0sNABogAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+agsiBDYCHCAEQQJ0Qey9wABqIQMgACECAkACQAJAAkBB4LvAACgCACIAQQEgBHQiBXEEQCADKAIAIQMgBBCfASEAIAMQywEgAUcNASADIQAMAgtB4LvAACAAIAVyNgIAIAMgAjYCAAwDCyABIAB0IQQDQCADIARBHXZBBHFqQRBqIgUoAgAiAEUNAiAEQQF0IQQgACIDEMsBIAFHDQALCyAAKAIIIgEgAjYCDCAAIAI2AgggAiAANgIMIAIgATYCCCACQQA2AhgPCyAFIAI2AgALIAIgAzYCGCACIAI2AgggAiACNgIMC7YCAQV/IAAoAhghBAJAAkAgACAAKAIMRgRAIABBFEEQIABBFGoiASgCACIDG2ooAgAiAg0BQQAhAQwCCyAAKAIIIgIgACgCDCIBNgIMIAEgAjYCCAwBCyABIABBEGogAxshAwNAIAMhBSACIgFBFGoiAygCACICRQRAIAFBEGohAyABKAIQIQILIAINAAsgBUEANgIACwJAIARFDQACQCAAIAAoAhxBAnRB7L3AAGoiAigCAEcEQCAEQRBBFCAEKAIQIABGG2ogATYCACABDQEMAgsgAiABNgIAIAENAEHgu8AAQeC7wAAoAgBBfiAAKAIcd3E2AgAPCyABIAQ2AhggACgCECICBEAgASACNgIQIAIgATYCGAsgAEEUaigCACIARQ0AIAFBFGogADYCACAAIAE2AhgLC+UBAQZ/IwBBgARrIgIkACACIAAQXiACQYABaiIFIABBgAFqIgYQXiACQYACaiIDQTgQ0AEaIAJBATYCuAIgAkHAAmpBOBDQARogAkH4AmpBATYCACACQYADaiIEIAYQXiACIAEQESAFIAFBgAFqIgcQESADIAcQmQEgAyABEJoBIAQgABCaASADEKkBIAQQqQEgBCADEBEgAyACEJkBIAMQNiAEIAMQmgEgBBCpASADIAUQmQEgAxA2IAYgBBCZASAGIAMQmgEgBRB8IAAgBRCZASAAIAIQmgEgABCwASACQYAEaiQAC28BDH9BjL/AACgCACICRQRAQZy/wABB/x82AgBBAA8LQYS/wAAhBgNAIAIiASgCCCECIAEoAgQhAyABKAIAIQQgAUEMaigCABogASEGIAVBAWohBSACDQALQZy/wAAgBUH/HyAFQf8fSxs2AgBBAAuAAgEGfyMAQYAIayIBJAAgACgCgAZBAUcEQCABIAAQjAEgAUGAAmoiAiAAQYACaiIEEIwBIAFBgARqIgUgAEGABGoiAxCMASABQYAGaiIGIAAQjAEgARAhIAIgAxAYIAIQswEgAhCwASAFECEgBiAEEBggBhCzASADIAAQlwEgAyAEEJcBIAMQsAEgAxAhIAAgARCWASABIAIQlwEgARCwASABIAUQlwEgASAGEJcBIAEQsAEgARArIAIQZCAFEGQgACACEJcBIAQgBRCWASAEIAYQlwEgAyABEJcBIABBBEEFIAAoAoAGQX5xQQJGGzYCgAYgABCdAQsgAUGACGokAAuZAgEBfyMAQYANayIDJAAgAyABEGkgAxCdASADQYgGaiIBIAIQXSABEEIgA0HABmoiAiABEF0gAkEDECkaIAIQQiADQfgGaiADEGkCQCACEFdFBEAgA0HABmoQKkECayECA0AgAkEBakEBTQRAIANB+AZqIgEQnAEMAwUgA0H4BmoQEwJAAkACQCADQcAGaiACEFMgA0GIBmogAhBTa0EBag4DAQIAAgsgA0H4BmogAxAHDAELIAMQngEgA0H4BmogAxAHIAMQngELIAJBAWshAgwBCwALAAsgA0H4BmoiARC3ASABQYABahC2ASABQYACahCxASABQYAEahCxASABQQE2AoAGCyAAIAFBiAYQ0QEaIANBgA1qJAALhgICBH8BfiMAQTBrIgIkACABQQRqIQQgASgCBEUEQCABKAIAIQMgAkEQaiIFQQA2AgAgAkIBNwMIIAIgAkEIajYCFCACQShqIANBEGopAgA3AwAgAkEgaiADQQhqKQIANwMAIAIgAykCADcDGCACQRRqIAJBGGoQDBogBEEIaiAFKAIANgIAIAQgAikDCDcCAAsgAkEgaiIDIARBCGooAgA2AgAgAUEMakEANgIAIAQpAgAhBiABQgE3AgQgAiAGNwMYQQxBBBC5ASIBRQRAQQxBBBDPAQALIAEgAikDGDcCACABQQhqIAMoAgA2AgAgAEGEt8AANgIEIAAgATYCACACQTBqJAAL5AEBAn8jAEHAAWsiAyQAIAMQZyAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbiAAIAFBwAFqIAJBAXNBAWtBH3YQbiAAIAFBgANqIAJBAnNBAWtBH3YQbiAAIAFBwARqIAJBA3NBAWtBH3YQbiAAIAFBgAZqIAJBBHNBAWtBH3YQbiAAIAFBwAdqIAJBBXNBAWtBH3YQbiAAIAFBgAlqIAJBBnNBAWtBH3YQbiAAIAFBwApqIAJBB3NBAWtBH3YQbiADIAAQeCADEKQBIAAgAyAEQQFxEG4gA0HAAWokAAvDAwIGfwN+IwBB8ABrIgEkACABQcCywAAQSSABQThqIAEQXSAAEEICQAJAAkAgAQJ/IAAoAjgiAkEQTARAIAJBAWsQNQwBCyABKQMwIghCAXwiByAIVA0BIAApAzAiCEKAgICAgICAgIB/USAHQn9RcQ0CIAFBOGoiAiAIIAd/pxApIQcgASABKQNoIAdCOoZ8NwNoIAAgAhBhIAAQQkECCyIEECgDQCAERQ0DQQAhAyABIAEpAwgiCEI5hkKAgICAgICAgAKDIAEpAwBCAYeEIgc3AwAgACkDACAHfSEHIABBCGohBSAAIAFBOGoiAkEBA38gAiADaiAHQv//////////A4M3AwAgB0I6hyEHIANBKEYEfyABIAEpAzBCAYciCDcDMCACIAApAzAgCH0gB3wiBzcDMCAHQj+IpwUgASADaiIGQQhqIAhCAYcgBkEQaikDACIIQjmGQoCAgICAgICAAoOEIgk3AwAgAyAFaikDACAHfCAJfSEHIANBCGohAwwBCwtrEDAgBEEBayEEDAALAAtB4LPAAEEZQcSzwAAQWQALQYC0wABBH0HEs8AAEFkACyAAQQE2AjggAUHwAGokAAvuAQECfyMAQbABayIDJAAgA0EwENABIQMCQAJAA0AgAkEwRgRAIANBMGogAxBwIAFBMGohAUEAIQIDQCACQTBGDQMgAkEwRg0EIAIgA2ogASACai0AADoAACACQQFqIQIMAAsACyACQeAARwRAIAIgA2ogASACai0AADoAACACQQFqIQIMAQsLQeAAQeAAQYCmwAAQOwALIANB8ABqIgEgAxBwIABBOBDQASIAQQE2AjggAEFAa0E4ENABIABB+ABqQQE2AgAgACABEK4BIANBMGoQrgEgA0GwAWokAA8LIAJBMGpB4ABBkKbAABA7AAuPAgEDfyMAQSBrIgUkAEEBIQZB2LvAAEHYu8AAKAIAIgdBAWo2AgACQEGgv8AALQAABEBBpL/AACgCAEEBaiEGDAELQaC/wABBAToAAAtBpL/AACAGNgIAAkACQCAHQQBIIAZBAktyDQAgBSAEOgAYIAUgAzYCFCAFIAI2AhBBzLvAACgCACICQQBIDQBBzLvAACACQQFqIgI2AgBBzLvAAEHUu8AAKAIAIgMEf0HQu8AAKAIAIAUgACABKAIQEQAAIAUgBSkDADcDCCAFQQhqIAMoAhQRAABBzLvAACgCAAUgAgtBAWs2AgAgBkEBSw0AIAQNAQsACyMAQRBrIgIkACACIAE2AgwgAiAANgIIAAucAQEEfyMAQYADayICJAAgAiAAEF4gAkGAAWoiASAAQYABaiIEEF4gAkGAAmoiAyAAEF4gAyAEEBEgAiAEEJoBIAEQfCABIAAQmgEgAhCpASABEKkBIAAgAhCZASAAIAEQESABIAMQmQEgARB8IAEgAxCaASABEKkBIAEQNiAAIAEQmgEgAxC4ASAEIAMQmQEgABCwASACQYADaiQAC7kBAQJ/IwBBIGsiAyQAAkAgASABIAJqIgFLDQAgAEEEaigCACICQQF0IgQgASABIARJGyIBQQggAUEISxshAQJAIAIEQCADQRhqQQE2AgAgAyACNgIUIAMgACgCADYCEAwBCyADQQA2AhALIAMgASADQRBqECYgAygCAARAIANBCGooAgAiAEUNASADKAIEIAAQzwEACyADKAIEIQIgAEEEaiABNgIAIAAgAjYCACADQSBqJAAPCxBlAAusAQECfyMAQYADayIDJAAgA0EIaiABEJABAkAgAgRAIANBCGogAhCuAQwBCyADQQhqEDoLIANByABqIgJB8LTAABBJIANBgAFqIAIQjgEgA0HAAWoiAiADQQhqIgQQkAEgAhBMIAIgARBKIAAgARCQASAAIAQQSiADQYACaiACEJABIAAQViEBIANBwAJqIgIgABCQASACEEMgAhBCIAAgAiABEHIgA0GAA2okAAueAQEFfyMAQYABayICJAAgAkE4ENABIgJBATYCOCACQUBrIgNBOBDQARogAkEBNgJ4IAIgABCuASACIAFBgAFqIgUQSiADIAEQrgEgAyAAQYABaiIGEEoCQCACIAMQWEUNACACIABBQGsQrgEgAiAFEEogAkFAayIAIAFBQGsQrgEgACAGEEogAiAAEFhFDQBBASEECyACQYABaiQAIAQLpwEBA38jAEEwayICJAAgAUEEaiEDIAEoAgRFBEAgASgCACEBIAJBEGoiBEEANgIAIAJCATcDCCACIAJBCGo2AhQgAkEoaiABQRBqKQIANwMAIAJBIGogAUEIaikCADcDACACIAEpAgA3AxggAkEUaiACQRhqEAwaIANBCGogBCgCADYCACADIAIpAwg3AgALIABBhLfAADYCBCAAIAM2AgAgAkEwaiQAC5UBAQJ/AkACQAJAAkACfwJAAkACf0EBIgMgAUEASA0AGiACKAIAIgRFDQEgAigCBCICDQQgAQ0CQQEMAwshA0EAIQEMBgsgAQ0AQQEMAQsgAUEBELkBCyICRQ0BDAILIAQgARCsASICDQELIAAgATYCBEEBIQEMAQsgACACNgIEQQAhAwsgACADNgIAIABBCGogATYCAAvvMwISfwV+IwBBMGsiDiQAIA5BEGogACABEFsgDiAOKAIUIgA2AhwgDiAOKAIQIgg2AhggDkEIaiACIAMQWyAOIA4oAgwiATYCJCAOIA4oAggiAzYCICAOIAQgBRBbIA4gDigCBCIFNgIsIA4gDigCACINNgIoIAAhBCMAQZAVayICJAAjAEGwBmsiCiQAIApBEGpBOBDQARogCkHQAGpBOBDQASEVIApBiAFqQQE2AgAgCkEBNgJIIApBkAFqIgBB2KTAABBJIAAQKiEPIApByAFqIhNBgAIQ0AEaIApB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ABBJAkACQAJAAkADQAJAIAxBMEYEQCAAIAAtAABBH3E6AAAgAEHoAGogABC+ASAEDQFBAEEAQZiBwAAQOwALIAQgDEYNAiAAIAxqIAggDGotAAA6AAAgDEEBaiEMDAELC0EAIQwgCCwAACIJQQBIDQIgCEEwaiEDIARBMCAEQTBLG0EwayEIA0AgDEEwRgRAIABBoAFqIgQgABC+ASMAQYABayIDJAAgARBnIAEgAEHoAGoQwAEgAUFAayIIIAQQwAEgAUGAAWoQygEgARBCIAMgARBPIANBQGsiBCAIEJABIAQQTCAEIAMQWEUEQCABEJIBCyADQYABaiQADAULIAggDEYNAiAAIAxqIAMgDGotAAA6AAAgDEEBaiEMDAALAAsgBCAEQYiBwAAQOwALIAxBMGogBEGogcAAEDsACyMAQcABayIDJAAgAEGgAWoiBBBnIANBOBDQASIDQQE2AjggBCAAQegAahDAASAEEEIgBEGAAWoQygEgA0FAayIIIAQQTwJAAkACQCAIIAMQWkEBRgRAIANBgAFqIgggA0FAayADECMgCBBWDQEMAgsgBBCSAQwCCyADQYABaiIIEEMgCBBCCyAEQUBrIANBgAFqEK4BCyADQcABaiQAIAlBIHEiA0EAIABB4AFqEE0iBEEBRxtBASADIARBAUdyGwRAIABBoAFqEKQBCyABIABBoAFqQcABENEBGgsgAEHgAmokAAJ/QQAhAyMAQcAFayIAJAACQCABEIYBDQAgAEEIaiIIQZCtwAAQSSAAQYAEaiIEQbiuwAAQSSAAQUBrIgkgBBCOASAAQYABaiIEEGcgBCABEHggBCAJEEogAEHAAmoiBCABIAgQvQEgASAEECQNACAAQYAEaiIEIABBwAJqIgEgAEEIahC9ASABIARBwAEQ0QEaIAEQpAEgAEGAAWogARAkRQ0AQQEhAwsgAEHABWokAEF/IANFDQAaIAJBwAFqEKQBIAJBgANqIQhBACEAIwBB4ARrIgEkACABQeAAENABIQECQCAFBEADQCAAQeAARgRAIAEgAS0AAEEfcToAACABQeAAaiABEB9BACEAAkAgDSwAACILQQBOBEAgDUHgAGohAyAFQeAAIAVB4ABLG0HgAGshBANAIABB4ABGBEAgAUHgAWoiACABEB8gCCABQeAAaiAAED8MAwsgACAERwRA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AWoQmQEgACAEEBEgAEGAAWoiASAFQYABahCZASABIAgQESAAIAEQeg0BC0EADAELQQELIQEgAEGAAmokACANQcAHaiQAQX8gAUUNABojAEHgA2siACQAIABBgAFqIgFBwKjAABBJIABBuAFqIgNB+KjAABBJIAAgASADEEsgAEHwAmoiAUGwqcAAEEkgAEGoA2oiA0HoqcAAEEkgAEHwAWoiBCABIAMQSyACQYAGaiIBIAAgBBA/IABB4ANqJAAgAkGACWohByACQYADaiEIIwBBkDRrIgAkACAAQYAoaiIDQcitwAAQSSAAQYguaiIEQYCuwAAQSSAAIAMgBBBLIABBgAFqQTgQ0AEaIABBuAFqQTgQ0AEaIABB8AFqED0CQCACQcABaiIEEIYBRQRAIAIQhgEEQCAHIAEgBBAODAILIABB8ARqIgMQPSADIAEQfSADEEcgAEHwB2oiBRBnIAUgBBB4IAUQRiAAQbAJaiIEED0gBCAIEH0gBBBHIABBsAxqIggQZyAIIAIQeCAIEEYgAEGILmoiASAFEJABIABB8A1qIAEQkAEgASAAQbAIahCQASAAQbAOaiABEJABIAEgCBCQASAAQfAOaiABEJABIAEgAEHwDGoQkAEgAEGwD2ogARCQASAAQfAPaiIBED0gAEHwEmoiBRA9IABB8BVqEFUgASADEH0gBSAEEH0gAEH4G2oiARA9IAEgAxB9IAEQogEgAEH4HmoiARA9IAEgBBB9IAEQogEgAEG4AWogAEGAAWoQUEECayEBA0AgAUEBakEBTQRAIABB8BVqIgEQngEgByABQYgGENEBGgwDBSAAQfAVaiIEEBogAEH4IWoiAyAAQfAPaiAAQfANaiAAQbAOahALIABBgChqIgUgAEHwEmogAEHwDmogAEGwD2oQCyADIAUQAyAEIAMQAQJAAkACQCAAQbgBaiABEFMgAEGAAWogARBTa0EBag4DAQIAAgsgAEGILmoiAyAAQfAPaiAAQfAEaiAAQfANaiAAQbAOahAKIABB+CFqIgQgA0GIBhDRARogAyAAQfASaiAAQbAJaiAAQfAOaiAAQbAPahAKIAQgAxADIABB8BVqIAQQAQwBCyAAQYguaiIDIABB8A9qIABB+BtqIABB8A1qIABBsA5qEAogAEH4IWoiBCADQYgGENEBGiADIABB8BJqIABB+B5qIABB8A5qIABBsA9qEAogBCADEAMgAEHwFWogBBABCyABQQFrIQEMAQsACwALIAcgCCACEA4LIABBkDRqJAAjAEHgH2siCCQAIAhB0BNqIgFByK3AABBJIAhB2BlqIg1BgK7AABBJIAggASANEEsgCEGAAWoiC0GQrcAAEEkgAkGID2oiACAHEGkgCEG4AWoiBSAAEGkjAEGACGsiAyQAIAMgBRCMASADQYACaiIJIAVBgAJqIg8QjAEgA0GABGoiCiAFEIwBIANBgAZqIgRBOBDQARogA0EBNgK4BiADQcAGakE4ENABGiADQfgGakEBNgIAIANBgAdqQTgQ0AEaIANBuAdqQQE2AgAgA0HAB2pBOBDQARogA0H4B2pBATYCACAFEJ0BIAMQISAJIAVBgARqIgwQGCAJEGQgAyAJEHkgAxCwASAJIAwQlgEgCRAhIAkQZCAKIA8QGCAJIAoQeSAJELABIAogDxCWASAKECEgBCAFEJYBIAQgDBAYIAogBBB5IAoQsAEgBCAPEJYBIAQgChAYIAQQZCAFIAMQGCAEIAUQlwEgDCAJEBggDBBkIAQgDBCXASAEELABIwBBgAJrIgYkACAGIAQQXiAGQYABaiIQIARBgAFqIhIQXiAGEC0gEBAtIBAQfCAQEKkBIAYgEBB7IAYQPiAEIAYQESAGEDYgBhCpASASIAYQESAGQYACaiQAIAUgAxCWASAFIAQQGCAPIAkQlgEgDyAEEBggDCAKEJYBIAwgBBAYIAVBBTYCgAYgA0GACGokACAAEJ4BIAAgBRAHIAUgABBtIAAgCBAyIAAgCBAyIAAgBRAHIAhBwAdqIgQgABBpIAQQEyAEIAAQByANIAAgCxAbIAhByA1qIgMgDRBpIAMQngEgASAAEGkgARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gASAIEDIgACADEG0gACABEAcgDSAAIAsQGyADIA0QbSANIAMgCxAbIAMgDRBtIAEgABBtIAEgCBAyIAEgCBAyIAMgARAHIAEgABBtIAEQngEgACADEG0gACABEAcgACAEEAcgABCcASAIQeAfaiQAIAcgAEGIBhDRARpBACEAIwBBgAJrIgEkACABEGwCQCAHIAEQegR/IAdBgAFqIAFBgAFqEHoFQQALRQ0AIAdBgAJqEIcBRQ0AIAdBgARqEIcBIQALIAFBgAJqJABBACAADQAaQX8LIAJBkBVqJAAgDkEoahC0ASAOQSBqELQBIA5BGGoQtAEgDkEwaiQAC58BAgJ/BX4gAEEwaiICKQMAIAFBP3GtIgSGIQUgACkDKCIGQTogAWtBP3GtIgiHIQdBBiEBA38gAiAFIAeENwMAIAFBAU0EfyAAIAApAwAgBIZC//////////8DgzcDACAAKQMwQiSHpwUgAUEBayEBIAJBEGsiA0EIaiECIAYgBIZC//////////8DgyEHIAMpAwAiBiAIhyEFDAELCxoLiAECA34DfyMAQRBrIgUkAAN+IAZBOEYEfiAFQRBqJAAgAwUgBSAAIAZqIgcpAwAiAiACQj+HIAGsIgIgAkI/hxAvIAcgBSkDACIEIAN8IgJC//////////8DgzcDACACIARUrSAFQQhqKQMAIANCP4d8fEIGhiACQjqIhCEDIAZBCGohBgwBCwsLigECA38BfiMAQUBqIgIkACACQQhqIgEgABBdIAEQQiACQThqIQFBBiEDQdwCIQACQAJAA0AgA0EATgRAIAEpAwAiBEIAUg0CIAFBCGshASAAQTprIQAgA0EBayEDDAELC0EAIQAMAQsDQCAEUA0BIABBAWohACAEQgJ/IQQMAAsACyACQUBrJAAgAAuHAQEDfyMAQYACayIBJAAgABCwASABIAAQXiABQYABaiICQTgQ0AEaIAFBATYCuAEgAUHAAWpBOBDQARogAUH4AWpBATYCACABIABBgAFqIgMQmgEgARA2IAIgARCZASACIAMQmgEgAyABEJkBIAMgABCaASAAIAIQmQEgABCwASABQYACaiQAC30CBH4BfyABQT9xrSECQTogAWtBP3GtIQRBACEBIAApAwAiBSEDA38gAUEwRgR/IAAgACkDMCAChzcDMCAFQn8gAoZCf4WDpwUgACABaiIGIAMgAocgBkEIaikDACIDIASGQv//////////A4OENwMAIAFBCGohAQwBCwsaC2kBBH8jAEHAAWsiASQAIAEgABCQASABQUBrIgIgABCQASABQYABaiIDIABBQGsiBBCQASABIAQQdyACIAAQdyACEEIgBCACEEogAxBDIAAgAxB3IAEQQiAAEEIgACABEEogAUHAAWokAAuCAQIBfwF+IABB8AAQ0AEhAANAIAJBOEYEQAJAIAAgASkDMCIDQjqHNwM4IAAgA0L//////////wODNwMwIABBQGshAEEAIQIDQCACQTBGDQEgACACakIANwMAIAJBCGohAgwACwALBSAAIAJqIAEgAmopAwA3AwAgAkEIaiECDAELCwtuAQZ+IAAgA0L/////D4MiBSABQv////8PgyIGfiIHIAUgAUIgiCIIfiIJIAYgA0IgiCIGfnwiBUIghnwiCjcDACAAIAcgClatIAYgCH4gBSAJVK1CIIYgBUIgiIR8fCABIAR+IAIgA358fDcDCAtqAgF/BX4gASkDCCAAKQMAhSIGQgGGQgGHIQdBACACa6whCAN+IANBOEYEfiAFBSAAIANqIgIgAikDACIEIAaFIAEgA2opAwAgBIUgCIOFIgQgB4U3AwAgBCAFhSEFIANBCGohAwwBCwsaC18CAX8EfkIBIQNBMCECA38gAkF4RgR/IARCAYYgA3ynQQFrBSABIAJqKQMAIgUgACACaikDACIGfUI6hyADgyAEhCEEIAJBCGshAiAFIAaFQgF9QjqHIAODIQMMAQsLC2kBBH8jAEGAAmsiAiQAIAIgARBeIAJBgAFqIgMgARBeIAIQLSADIAIQESAAIAMQmAEgAEGAAmoiBCADEJgBIABBgARqIgUgAxCYASAEIAEQpgEgBSACEKYBIABBBTYCgAYgAkGAAmokAAtiAQJ/IwBBQGoiAiQAIAAQQiACIAAQkAECQCABBEAgACABEK4BDAELIAAQOgtBACEBA0AgA0UEQCAAEExBASABQQFqIAFBAUYiAxshAQwBCwsgACACEEogABAeIAJBQGskAAtnAQJ/IwBBQGoiAyQAAkAgASABQR91IgJqIAJzIgIgACgCOGxBgICAEE4EQCADIAIQOSAAIAMQSgwBCyAAIAIQKRogACAAKAI4IAJsNgI4CyABQQBIBEAgABBDIAAQQgsgA0FAayQAC2cAIABBAXYgAHIiAEECdiAAciIAQQR2IAByIgBBCHYgAHIiAEEQdiAAciIAIABBAXZB1arVqgVxayIAQQJ2QbPmzJkDcSAAQbPmzJkDcWoiAEEEdiAAakGPnrz4AHFBgYKECGxBGHYLYQEDfyMAQYABayIBJAAgASAAEJABIAFBQGsiAkE4ENABGiABQQE2AnggASAAQUBrIgMQdyABEEMgAiABEK4BIAIgAxB3IAMgARCuASADIAAQdyAAIAIQrgEgAUGAAWokAAtVAgJ/AX4jAEHwAGsiASQAIAFBwLLAABBJIAApAwAhAyABQThqIgIgABBdIABBARAsIAIgARBgIAIQQiACQQEQLCAAIAIgA0ICgacQMCABQfAAaiQAC5gBAQZ/IwBBwAFrIgMkACAAIAEQXiAAEC0gA0GIAWoiBkHop8AAEEkjAEFAaiIEJAAgA0EIaiICQTgQ0AEiBUEBNgI4IAVBQGtBOBDQASAFQfgAakEBNgIAIAQgBhCOASAFIAQQrgEQwQEgBEFAayQAIAIQqQEgAhB8IAIQqQEgACABEBEgACACEJoBIAAQtQEgA0HAAWokAAtZAQJ/IwBBQGoiAyQAIABBOBDQASIAQQE2AjgCQCABQQBOBEAgACABEJMBDAELIANBCGoiAkHAssAAEEkgAiABEJMBIAIQQiAAIAIQagsgABBUIANBQGskAAu9CAEKfyMAQYABayIHJAAgB0EIaiIDQcCywAAQSSADQQEQlAECQAJAA0AgAUEwRgRAIANBMGogAykDMEIBhzcDACADQThqIQEDQCACRQ0EIAFCADcDACACQQFrIQIgAUEIaiEBDAALAAsgAUE4Rg0BIAFBOEcEQCABIANqIAEgA2oiBEEIaikDAEI5hkL//////////wODIAQpAwBCAYeENwMAIAVBAWohBSABQQhqIQEMAQsLQQdBB0GEm8AAEDsACyAFQQdB9JrAABA7AAsgA0EBEJQBIANBARAsIAdBQGshBUEAIQIjAEGgCmsiASQAIAFBOBDQASIBQUBrQTgQ0AEhBiABQYABakE4ENABGiABQcABakE4ENABGiABQYACakE4ENABGiABQcACakE4ENABGiABQYADakE4ENABGiABQcADakE4ENABGiABQYAEakE4ENABGiABQcAEakE4ENABGiABQYAFakE4ENABGiABQcAFakE4ENABGiABQYAGakE4ENABGiABQcAGakE4ENABGiABQYAHakE4ENABGiABQcAHakE4ENABGiABQfgHakEBNgIAIAFBuAdqQQE2AgAgAUH4BmpBATYCACABQbgGakEBNgIAIAFB+AVqQQE2AgAgAUG4BWpBATYCACABQfgEakEBNgIAIAFBuARqQQE2AgAgAUH4A2pBATYCACABQbgDakEBNgIAIAFB+AJqQQE2AgAgAUG4AmpBATYCACABQfgBakEBNgIAIAFBuAFqQQE2AgAgAUH4AGpBATYCACABQQE2AjggAUGBCGpB5wAQ0AEaIAFB6AhqIgQgABCQASAEEEIgAUGoCWoiBCADEF0gBBBCIAQQKkEDaiIIQQJ2IgNBAWohCQJAA0AgAiAJRgRAIAEQygEgBiABQegIahCuASABQeAJakE4ENABGiABQQE2ApgKQYB5IQIMAgsgAUGoCWoiBCAEQQQQjwEiChCUASAEEEIgAkHnAEcEQCABQYEIaiACaiAKOgAAIAFBqAlqQQQQLCACQQFqIQIMAQsLQecAQecAQaC0wAAQOwALA0AgAgRAIAFB4AlqIgQgASACaiIGQcAHahCuASAGQYAIaiIGIAQQrgEgBiABQegIahBKIAJBQGshAgwBCwsCQAJAAkACQCAIQZwDSQRAIAFBgQhqIANqLAAAIgJBEE8NASAFIAEgAkEGdGoQkAEgA0EBayICQeYASyEEA0AgAkF/Rg0DIAUQTCAFEEwgBRBMIAUQTCAEDQQgAUGBCGogAmotAAAiA0EQSQRAIAUgASADQQZ0ahBKIAJBAWshAgwBCwsgA0EYdEEYdUEQQeC0wAAQOwALIANB5wBBsLTAABA7AAsgAkEQQcC0wAAQOwALIAUQHiABQaAKaiQADAELIAJB5wBB0LTAABA7AAsgACAFEK4BIAdBgAFqJAALbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYCACADQSxqQQE2AgAgA0ICNwIMIANB2LjAADYCCCADQQE2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEGYAC2UBAn8gACAAKAIAIgJBCGoiAzYCACAAIAJBA3ZBPHFqQShqIgIgAUH/AXEgAigCAEEIdHI2AgACQAJAIANFBEAgAEEANgIAIAAgACgCBEEBajYCBAwBCyADQf8DcQ0BCyAAEA8LC1wAIABBOBDQASIAQQE2AjggAEFAa0E4ENABGiAAQfgAakEBNgIAIABBgAFqEFEgAEGAAmpBOBDQARogAEG4AmpBATYCACAAQcACakE4ENABGiAAQfgCakEBNgIAC1sBA38jAEGAAWsiASQAIAAQqQEgASAAEJABIAFBQGsiAiAAQUBrIgMQkAEgARBMIAIQTCABIAIQdyABQQAQMyAAIAEQSiABEEMgARBCIAMgARBKIAFBgAFqJAALYQEBfyMAQYACayIDJAAgABA9IAAgARCZASAAQYABaiIBIAIQmQEgAEGAAmoQtwEgABCpASADIAAQOCADQYABaiICIAEQXiACEC0gAiADEHpFBEAgABCbAQsgA0GAAmokAAtUAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqIAJBCGoQDCACQSBqJAALZwAjAEEwayIBJABBpLvAAC0AAARAIAFBHGpBATYCACABQgI3AgwgAUGQtsAANgIIIAFBATYCJCABIAA2AiwgASABQSBqNgIYIAEgAUEsajYCICABQQhqQbi2wAAQZgALIAFBMGokAAtiAgF+An8gACkDACEBA34gACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkEoRgR+IAAgACkDMCABfCIBNwMwIAFCJIcFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLGgt8AQV/IwBBQGoiAyQAIANBCGoiAkHAssAAEEkgAiAAKAI4QQFrEDUiBBAoA0AgAUE4RwRAIAAgAWoiBSABIAJqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAEEBIARBAWp0IgI2AjggAkH///8PSgRAIAAQHgsgA0FAayQAC3sBAn8gAEEoaiECA0AgAUGAAkYEQCAAQufMp9DW0Ouzu383AgggAEIANwIAIABBIGpCq7OP/JGjs/DbADcCACAAQRhqQv+kuYjFkdqCm383AgAgAEEQakLy5rvjo6f9p6V/NwIABSABIAJqQQA2AgAgAUEEaiEBDAELCwtUACAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQARogAEH4AGpBATYCACAAQYABakE4ENABGiAAQbgBakEBNgIAIABBwAFqQTgQ0AEaIABB+AFqQQE2AgALWAECfyMAQUBqIgEkAAJAIAAQhgENACABQQEQOSAAQYABaiICIAEQWA0AIAJBABAzIAAgAhBKIAAQHiAAQUBrIgAgAhBKIAAQHiACIAEQrgELIAFBQGskAAtZAQJ/IwBBgAFrIgEkAAJAIAAQigENACABEFEgAEGAAmoiAiABEHoNACACED4gACACEBEgABC1ASAAQYABaiIAIAIQESAAELUBIAIgARCZAQsgAUGAAWokAAtbAgF+An8gACkDACEBA0AgACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkHgAEYEQCAAIAApA2ggAXw3A2gFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLC08BAX8gAEE4ENABGgJAA0AgAkEHRwRAIAJBB0YNAiAAIAEpAwA3AwAgAEEIaiEAIAFBCGohASACQQFqIQIMAQsLDwtBB0EHQeSawAAQOwALVAECfyMAQbABayICJAAgATQCOCAANAI4fkL///8PVQRAIAAQHgsgAkEIaiIDIAAgARAFIAJB+ABqIgEgAxBrIAAgARBqIABBAjYCOCACQbABaiQAC1EBAn8jAEFAaiIDJAAgAEE4ENABIgBBATYCOCAAQUBrQTgQ0AEgAEH4AGpBATYCACADIAEQjgEgACADEK4BIAMgAhCOASADEK4BIANBQGskAAvwDAIRfwh+IwBBsAFrIg8kACAANAI4IhIgEn5C////D1YEQCAAEB4LIwBB0AFrIgEkACAPQQhqIgZBCGpB0AAQ0AEaIAFBwAFqIAApAwAiFyAXQj+HIhYgFyAWEC8gBiABKQPAASISQv//////////A4M3AwAgAUHIAWopAwAiFUIGhiASQjqIhCETIBVCOoghGCAAQQhqIgwhDSAAIQlBASEKQQEhBwJAA0AgCkEERgRAIABBGGohCiAAQRBqIQkgAEEoaiEMIAApAzAhF0EHIQUgAUHIAGohCwNAIAVBC0kEQCABQUBrIAVBA3QiCCAAakEwaykDACISIBJCP4cgFyAXQj+HIhYQLyAFQQFqIg1BAXYhByALKQMAIRUgASkDQCESIAkhAiAMIQQgBUEFayIOIQMDQCADIAdJBEAgASACKQMAIhQgFEI/hyAEKQMAIhQgFEI/hxAvIAEpAwAiFCASfCISIBRUrSABQQhqKQMAIBV8fCEVIAJBCGohAiAEQQhrIQQgA0EBaiEDDAELCyAGIAhqIBJCAYYiFCATfCITQv//////////A4M3AwAgAUEwaiAAIA5BA3RqKQMAIhkgGUI/hyAXIBYQLyATIBRUrSAVQgGGIBJCP4iEIBh8fCEYIAVBBGshAyAFQQJqIgVBAXYhCCABQThqKQMAIRUgASkDMCESIAohAiAMIQQDQCADIAhPBEAgAUEgaiAAIAdBA3RqKQMAIhYgFkI/hyIUIBYgFBAvIAYgDUEDdGogEkIBhiIUIBhCBoYgE0I6iIR8IhMgASkDIHwiFkL//////////wODNwMAIBMgFlatIAFBKGopAwAgEyAUVK0gFUIBhiASQj+IhCAYQjqHfHx8fCISQjqHIRggEkIGhiAWQjqIhCETIApBEGohCiAJQRBqIQkMAwUgAUEQaiACKQMAIhYgFkI/hyAEKQMAIhYgFkI/hxAvIAEpAxAiFiASfCISIBZUrSABQRhqKQMAIBV8fCEVIAJBCGohAiAEQQhrIQQgA0EBaiEDDAELAAsACwsgAUHQAGogFyAXQj+HIhIgACkDKCIVIBVCP4cQLyAGIBMgASkDUCIWQgGGIhR8IhVC//////////8DgzcDWCABQeAAaiAXIBIgFyASEC8gBiAUIBVWrSABQdgAaikDAEIBhiAWQj+IhCAYfHwiF0IGhiAVQjqIhCIVIAEpA2B8IhJC//////////8DgzcDYCAGIBIgFVStIAFB6ABqKQMAIBdCOod8fEIGhiASQjqIhDcDaCABQdABaiQADAILIAFBsAFqIAAgB0EDdCIOaikDACISIBJCP4cgFyAWEC8gB0EBaiIQQQF2IREgAUG4AWopAwAhFSABKQOwASESIAUhAyAMIQQgCSELIAghAgNAIANFBEAgBiAOaiASQgGGIhQgE3wiE0L//////////wODNwMAIAFBkAFqIAAgEEEDdCIOaikDACIZIBlCP4cgFyAWEC8gEyAUVK0gFUIBhiASQj+IhCAYfHwiEkI6hyEYIBJCBoYgE0I6iIQhFCAHQQJqIQsgAUGYAWopAwAhFUEAIQMgASkDkAEhEiAMIQIgDSEEA0AgAyAFakUEQCABQfAAaiAAIBFBA3RqKQMAIhMgE0I/hyIZIBMgGRAvIAYgDmogEkIBhiIZIBR8IhMgASkDcHwiFEL//////////wODNwMAIBMgFFatIAFB+ABqKQMAIBMgGVStIBVCAYYgEkI/iIQgGHx8fHwiEkI6hyEYIBJCBoYgFEI6iIQhEyANQRBqIQ0gBUEBaiEFIAlBEGohCSAIQQJqIQggCkEBaiEKIAshBwwECyADIAdqIhBBB0kEQCABQYABaiACKQMAIhMgE0I/hyAEKQMAIhMgE0I/hxAvIAEpA4ABIhMgEnwiEiATVK0gAUGIAWopAwAgFXx8IRUgAkEIaiECIARBCGshBCADQQFrIQMMAQsLIBBBB0GEnMAAEDsACyACQQdJBEAgAUGgAWogBCkDACIUIBRCP4cgCykDACIUIBRCP4cQLyABKQOgASIUIBJ8IhIgFFStIAFBqAFqKQMAIBV8fCEVIANBAWshAyAEQQhqIQQgC0EIayELIAJBAWshAgwBCwsLIAJBB0H0m8AAEDsACyAPQfgAaiICIAYQayAAIAIQaiAAQQI2AjggD0GwAWokAAtHAQJ/IwBB8ABrIgEkACAAEHZFBEAgAUHAssAAEEkgAUE4aiICIAAQhAEgASACEGEgARBCIAIgARAxIQILIAFB8ABqJAAgAgtPAQJ/IAIgACgCACIDQQRqKAIAIANBCGoiBCgCACIAa0sEQCADIAAgAhAiIAQoAgAhAAsgAygCACAAaiABIAIQ0QEaIAQgACACajYCAEEAC0wBA38jAEGAAWsiAiQAIAAgARCQASAAEEwgAkHIAGoiA0GAgMAAEEkgAkEIaiIEIAMQjgEgACABEEogACAEEHcgABAeIAJBgAFqJAALQQECfyMAQUBqIgIkACACQQhqIgNBkK3AABBJIAEgAxBqIAEQQiAAIAEQaiAAQQMQKRogABBCIAAQKiACQUBrJAALRwECfyMAQUBqIgEkACAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQASAAQfgAakEBNgIAIAFBARA5IAAgARCuARDBASABQUBrJAALSwACQAJ/IAFBgIDEAEcEQEEBIAAoAhggASAAQRxqKAIAKAIQEQQADQEaCyACDQFBAAsPCyAAKAIYIAJBACAAQRxqKAIAKAIMEQUAC0MCAX8BfiABQTpuIQIgAUGVA00EQCAAIAJBA3RqKQMAQgEgAUH//wNxQTpwrSIDhoMgA4inDwsgAkEHQbSbwAAQOwALRQEDfyMAQeABayIBJAAgAUH4ssAAEEkgAUE4aiICIAAgARAFIAFBqAFqIgMgAhBrIAAgAxBqIABBAjYCOCABQeABaiQAC0ABAX8jAEGAAmsiASQAIAAQiwEgARBsIAAgARCWASAAQYACahCxASAAQYAEahCxASAAQQE2AoAGIAFBgAJqJAALPAICfwF+IwBBgAFrIgEkACABQQhqIgIgABCQASACEB4gAUHIAGogAhCEASABKQNIIAFBgAFqJABCAoGnCzwCAX8BfgN/IAFBOEYEfyACQgF9QoCAgICAgICABINCOoinBSAAIAFqKQMAIAKEIQIgAUEIaiEBDAELCws4AQF/IwBBgAFrIgIkACACIAAQkAEgAkFAayIAIAEQkAEgAhAeIAAQHiACIAAQMSACQYABaiQARQtHAQF/IwBBIGsiAyQAIANBFGpBADYCACADQZS4wAA2AhAgA0IBNwIEIAMgATYCHCADIAA2AhggAyADQRhqNgIAIAMgAhBmAAukAQICfwF+IwBBQGoiAiQAIAIgABCQASACEDogAQRAIAEgAhCuAQsgAhBMIAIgABBKIwBBgAFrIgEkACABQQhqIgAgAhCQASAAEB4gAUHIAGoiAyAAEIQBQQghAAN/IABBOEYEfyAEQgF9IAMpAwBCAYVCAX2DQjqIp0EBcQUgACADaikDACAEhCEEIABBCGohAAwBCwsgAUGAAWokACACQUBrJAALxQMBBn8jAEEgayIGJAAgBiACNgIYIAYgAjYCFCAGIAE2AhAgBkEQaiICKAIIIgEgAigCBEkEQAJAIwBBEGsiBSQAIwBBIGsiBCQAAkACQCABIAIoAgRNBEAgBEEIaiEDAkAgAigCBCIHBEAgAyAHNgIEIANBCGpBATYCACADIAIoAgA2AgAMAQsgA0EANgIACwJAAkAgBCgCCCIIBEAgBEEQaigCACEDIAQoAgwhBwJAAkAgAUUEQEEBIQMMAQsgA0EBRg0DIAFBARC5ASIDRQ0BIAMgCCABENEBGgsgCCAHEKgBDAULDAILIAVBADYCAAwECyAIIAEQrAEiAw0CCyAFIAE2AgQgBUEBNgIAIAVBCGpBATYCAAwCCyAEQRxqQQA2AgAgBEG0nMAANgIYIARCATcCDCAEQdicwAA2AgggBEEIakGsncAAEGYACyACIAE2AgQgAiADNgIAIAVBADYCAAsgBEEgaiQAAkAgBSgCAARAIAVBCGooAgAiAEUNASAFKAIEIAAQzwEACyAFQRBqJAAMAQsQZQALCyAGQQhqIgEgAigCCDYCBCABIAIoAgA2AgAgACAGKQMINwMAIAZBIGokAAtGAQJ/IAEoAgQhAiABKAIAIQNBCEEEELkBIgFFBEBBCEEEEM8BAAsgASACNgIEIAEgAzYCACAAQZS3wAA2AgQgACABNgIACzEBAX8gAEE4ENABIQADQCACQThHBEAgACACaiABIAJqKQMANwMAIAJBCGohAgwBCwsLNgEBfyAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQASAAQfgAakEBNgIAIAAgARCuASABQUBrEK4BCzsBAX8jAEEQayIDJAAgA0EIaiABQYQCIAIQgQEgAygCDCEBIAAgAygCCDYCACAAIAE2AgQgA0EQaiQACwsAIAAgAUE4ENsBCwsAIAAgAUE4ENwBCwwAIAAgAUHwABDbAQsMACAAIAFB8AAQ3AELOQECfyMAQYABayIBJAAgASAAQYABaiICEF4gAiAAEJkBIAEQfCAAIAEQmQEgABCwASABQYABaiQACz8BAX8jAEEgayIAJAAgAEEcakEANgIAIABBzLfAADYCGCAAQgE3AgwgAEH8t8AANgIIIABBCGpBhLjAABBmAAu8AgEDfyMAQSBrIgIkACACQQE6ABggAiABNgIUIAIgADYCECACQZS4wAA2AgwgAkGUuMAANgIIIwBBEGsiACQAIAJBCGoiASgCDCICRQRAQcC1wABBK0HktsAAEFkACyABKAIIIgRFBEBBwLXAAEErQfS2wAAQWQALIAAgAjYCCCAAIAE2AgQgACAENgIAIAAoAgAhASAAKAIEIQIgACgCCCEEIwBBEGsiACQAIAFBFGooAgAhAwJAAn8CQAJAIAFBBGooAgAOAgABAwsgAw0CQQAhAUHAtcAADAELIAMNASABKAIAIgMoAgQhASADKAIACyEDIAAgATYCBCAAIAM2AgAgAEG4t8AAIAIoAgggBCACLQAQECAACyAAQQA2AgQgACABNgIAIABBpLfAACACKAIIIAQgAi0AEBAgAAswACAAQTgQ0AEiAEEBNgI4IABBQGtBARA5IABBgAFqQTgQ0AEaIABBuAFqQQE2AgALKwACQCAAQXxLDQAgAEUEQEEEDwsgACAAQX1JQQJ0ELkBIgBFDQAgAA8LAAs4ACAAEIsBIAAgARCWASAAQYACaiABQYACahCWASAAQYAEaiABQYAEahCWASAAIAEoAoAGNgKABgsoAQF/A0AgAkE4RwRAIAAgAmogASACaikDADcDACACQQhqIQIMAQsLC4QJAg1/Cn4jAEFAaiILJAAgC0EIaiIJQcCywAAQSSMAQZACayICJAAgAEEwENABIQogAkHoAGpB8AAQ0AEaIAJB4AFqQTAQ0AEaIAoQcSACIAEiDCkDACIQQv3/8//P///5AX5C//////////8DgyISNwPYASACQdgAaiASQgAgCSkDACIXIBdCP4ciGBAvIBAgAikDWCIPfCITIA9UrSACQeAAaikDACAQQj+HfHwiEEI6hyABKQMIIg9CP4d8IA8gEEIGhiATQjqIhCITfCIQIBNUrXwhD0EBIQBCACETAkACQANAAkAgAEEHRgRAQQYhB0EAIQhBByEADAELIABBAXYiAUEBaiEGIAggAWshAyABQQN0IgFBCGohBCAHIAFrIQUgAkHIAGogCSAAQQN0Ig1qKQMAIhUgFUI/hyIWIBJCABAvIAJB0ABqKQMAIBAgECATfCIRVq0gDyAUfHx8IBEgAikDSHwiDyARVK18IRAgAEEBaiEBA0AgACAGTQRAIAJB2AFqIA1qIA9C/f/z/8////kBfkL//////////wODIhE3AwAgAkE4aiARQgAgFyAYEC8gAkEoaiARQgAgFSAWEC8gAkHoAGogAEEEdGoiACACQTBqKQMAIhE3AwggACACKQMoIhU3AwAgDyACKQM4IhZ8Ig8gFlStIAJBQGspAwAgEHx8IhBCOocgDCABQQN0aikDACIWQj+HfCAWIBBCBoYgD0I6iIQiD3wiECAPVK18IQ8gEyAVfCITIBVUrSARIBR8fCEUIAdBCGohByAIQQFqIQggASEADAMLIANBB08NAyACQRhqIAQgCWopAwAgBSAJaikDAH0iESARQj+HIAJB2AFqIg4gBWopAwAgBCAOaikDAH0iESARQj+HEC8gAikDGCIRIA98Ig8gEVStIAJBIGopAwAgEHx8IRAgBkEBaiEGIARBCGohBCAFQQhrIQUgA0EBayEDDAALAAsLA0ACQAJAIABBDUcEQCAHIABBAXYiBmshAyAIIAZBA3QiAWshBCABQQhqIQUgDyAUfCAQIBN8Ig8gEFStfCEQIABBAWohAQNAIAZBBUsNAyADQQdPDQIgAkEIaiAFIAlqKQMAIAQgCWpBMGopAwB9IhIgEkI/hyACIARqQYgCaikDACACQdgBaiAFaikDAH0iEiASQj+HEC8gAikDCCISIA98Ig8gElStIAJBEGopAwAgEHx8IRAgBkEBaiEGIARBCGshBCADQQFrIQMgBUEIaiEFDAALAAsgCiAQQv//////////A4M3AzAgAkGQAmokAAwECyADQQdBpJzAABA7AAsgAEEDdCAKakE4ayAPQv//////////A4M3AwAgEEI6hyAMIAFBA3RqKQMAIhJCP4d8IBIgEEIGhiAPQjqIhCIPfCIQIA9UrXwhDyAUIABBBHQgAmpBCGoiAEEIaikDAH0gEyAAKQMAIhJUrX0hFCAIQQhqIQggB0EBaiEHIBMgEn0hEyABIQAMAAsACyADQQdBlJzAABA7AAsgC0FAayQACy4BAX8jAEGAAWsiASQAIAAQRSABEFEgACABEJkBIABBgAFqELYBIAFBgAFqJAALMwAgACABEJYBIABBgAJqIAFBgAJqEJYBIABBgARqIAFBgARqEJYBIAAgASgCgAY2AoAGCygAIAAgASACEHIgAEFAayABQUBrIAIQciAAQYABaiABQYABaiACEHILLQAgACABIAIQjQEgAEGAAWogAUGAAWogAhCNASAAQYACaiABQYACaiACEI0BCycBAn8jAEFAaiICJAAgAkEIaiIDIAEQvgEgACADEI4BIAJBQGskAAsiAQF/A0AgAUE4RwRAIAAgAWpCADcDACABQQhqIQEMAQsLCyUAIAAgASACEDAgAEEAIAJrIAAoAjgiACABKAI4c3EgAHM2AjgLJwAgACAAKAIEQQFxIAFyQQJyNgIEIAAgAWoiACAAKAIEQQFyNgIECyMAA0AgAgRAIAAgAS0AABA8IAJBAWshAiABQQFqIQEMAQsLCywAIAAQiwEgACABEJYBIABBgAJqIAIQlgEgAEGABGogAxCWASAAQQU2AoAGCyMBAX8jAEFAaiIBJAAgASAAEJABIAEQHiABEFcgAUFAayQACykAIAAgARBgIAAgACgCOCABKAI4aiIBNgI4IAFB////D0oEQCAAEB4LCyUAIAAgARCuASAAQUBrIAFBQGsQrgEgAEGAAWogAUGAAWoQrgELKAEBfyMAQYACayICJAAgAiABEIwBIAIQKyAAIAIQlwEgAkGAAmokAAscAQF/IAAgARBYBH8gAEFAayABQUBrEFgFQQALCycBAX8jAEGAAWsiAiQAIAIg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DCELDQALCyAMpyICQeMASwRAIABBAmsiACAGQQlqaiAMpyICIAJB//8DcUHkAG4iAkHkAGxrQf//A3FBAXRB6LjAAGovAAA7AAALAkAgAkEKTwRAIABBAmsiACAGQQlqaiACQQF0Qei4wABqLwAAOwAADAELIABBAWsiACAGQQlqaiACQTBqOgAACwJ/IAZBCWogAGohCEErQYCAxAAgASgCACIDQQFxIgIbIQQgAkEnIABrIglqIQJBlLjAAEEAIANBBHEbIQUCQAJAIAEoAghFBEBBASEAIAEgBCAFEFINAQwCCwJAAkACQAJAIAIgAUEMaigCACIDSQRAIAEtAABBCHENBEEAIQAgAyACayICIQNBASABLQAgIgcgB0EDRhtBA3FBAWsOAgECAwtBASEAIAEgBCAFEFINBAwFC0EAIQMgAiEADAELIAJBAXYhACACQQFqQQF2IQMLIABBAWohACABQRxqKAIAIQcgASgCBCECIAEoAhghCgJAA0AgAEEBayIARQ0BIAogAiAHKAIQEQQARQ0AC0EBDAQLQQEhACACQYCAxABGDQEgASAEIAUQUg0BIAEoAhggCCAJIAEoAhwoAgwRBQANASABKAIcIQQgASgCGCEBQQAhAAJ/A0AgAyAAIANGDQEaIABBAWohACABIAIgBCgCEBEEAEUNAAsgAEEBawsgA0khAAwBCyABKAIEIQcgAUEwNgIEIAEtACAhCkEBIQAgAUEBOgAgIAEgBCAFEFINAEEAIQAgAyACayICIQMCQAJAAkBBASABLQAgIgQgBEEDRhtBA3FBAWsOAgABAgtBACEDIAIhAAwBCyACQQF2IQAgAkEBakEBdiEDCyAAQQFqIQAgAUEcaigCACECIAEoAgQhBCABKAIYIQUCQANAIABBAWsiAEUNASAFIAQgAigCEBEEAEUNAAtBAQwDC0EBIQAgBEGAgMQARg0AIAEoAhggCCAJIAEoAhwoAgwRBQANACABKAIcIQAgASgCGCEFQQAhAgJAA0AgAiADRg0BIAJBAWohAiAFIAQgACgCEBEEAEUNAAtBASEAIAJBAWsgA0kNAQsgASAKOgAgIAEgBzYCBEEADAILIAAMAQsgASgCGCAIIAkgAUEcaigCACgCDBEFAAsgBkEwaiQACwsAIAAQNiAAELABCysCAX8BfkIBIQIDQCAAIAFq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AAANAEHgs8AAC8EHYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAAAAAABhdHRlbXB0IHRvIGRpdmlkZSB3aXRoIG92ZXJmbG93ALAZEAASAAAADAIAAA0AAACwGRAAEgAAABgCAAAmAAAAsBkQABIAAAAYAgAAIwAAALAZEAASAAAAHgIAABcAAACwGRAAEgAAAB4CAAAUAAAAqqr//////gHu//9UrP//AupBYg9rDyoBw5z9ShTOEwJLd2TXrEtDAu3pxpKm+V8Cox4RoAEAAAADAAAABAAAAAQAAAAEAAAABQAAAAYAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlbWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAoAAOsaEAAVAAAAABsQAA4AAABsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnMgGxAAGAAAAEkBAAAJAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5yc0gbEAAcAAAARgIAAB8AAABIGxAAHAAAAEcCAAAeAAAABwAAAAwAAAAEAAAACAAAAAMAAAAIAAAABAAAAAkAAAAKAAAAEAAAAAQAAAALAAAADAAAAAMAAAAIAAAABAAAAA0AAAAOAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93AAAA6BsQABEAAADMGxAAHAAAAAUCAAAFAAAAEAAAAAAAAAABAAAAEQAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAAkHBAAIAAAAEQcEAASAAAAMDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5yc3JhbmdlIGVuZCBpbmRleCAAAABxHRAAEAAAADAdEAAiAAAAUh0QAB8AAABJAAAABQB7CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS42MS4wIChmZTViMTNkNjggMjAyMi0wNS0xOCkGd2FscnVzBjAuMTkuMAx3YXNtLWJpbmRnZW4SMC4yLjgxICgwNjJhYTVmNzAp";
di(yg);
Vt(
  "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100"
);
var Rr;
(function (t) {
  (t.Install = "install"), (t.Reinstall = "reinstall"), (t.Upgrade = "upgrade");
})(Rr || (Rr = {}));
function pg(t) {
  throw new Error(
    'Could not dynamically require "' +
      t +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var Di = { exports: {} },
  dg = {},
  Dg = Object.freeze({ __proto__: null, default: dg }),
  Sg = mi(Dg);
(function (t) {
  (function (A) {
    var e = function (g) {
        var Q,
          s = new Float64Array(16);
        if (g) for (Q = 0; Q < g.length; Q++) s[Q] = g[Q];
        return s;
      },
      B = function () {
        throw new Error("no PRNG");
      },
      a = new Uint8Array(16),
      w = new Uint8Array(32);
    w[0] = 9;
    var p = e(),
      u = e([1]),
      b = e([56129, 1]),
      U = e([
        30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
        36039, 65139, 11119, 27886, 20995,
      ]),
      Z = e([
        61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
        6542, 64743, 22239, 55772, 9222,
      ]),
      v = e([
        54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
        57905, 49316, 21502, 52590, 14035, 8553,
      ]),
      nA = e([
        26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
        26214, 26214, 26214, 26214, 26214, 26214,
      ]),
      gA = e([
        41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
        11085, 57099, 20417, 9344, 11139,
      ]);
    function qA(g, Q, s, i) {
      (g[Q] = (s >> 24) & 255),
        (g[Q + 1] = (s >> 16) & 255),
        (g[Q + 2] = (s >> 8) & 255),
        (g[Q + 3] = s & 255),
        (g[Q + 4] = (i >> 24) & 255),
        (g[Q + 5] = (i >> 16) & 255),
        (g[Q + 6] = (i >> 8) & 255),
        (g[Q + 7] = i & 255);
    }
    function MA(g, Q, s, i, o) {
      var D,
        G = 0;
      for (D = 0; D < o; D++) G |= g[Q + D] ^ s[i + D];
      return (1 & ((G - 1) >>> 8)) - 1;
    }
    function Be(g, Q, s, i) {
      return MA(g, Q, s, i, 16);
    }
    function ae(g, Q, s, i) {
      return MA(g, Q, s, i, 32);
    }
    function LA(g, Q, s, i) {
      for (
        var o =
            (i[0] & 255) |
            ((i[1] & 255) << 8) |
            ((i[2] & 255) << 16) |
            ((i[3] & 255) << 24),
          D =
            (s[0] & 255) |
            ((s[1] & 255) << 8) |
            ((s[2] & 255) << 16) |
            ((s[3] & 255) << 24),
          G =
            (s[4] & 255) |
            ((s[5] & 255) << 8) |
            ((s[6] & 255) << 16) |
            ((s[7] & 255) << 24),
          L =
            (s[8] & 255) |
            ((s[9] & 255) << 8) |
            ((s[10] & 255) << 16) |
            ((s[11] & 255) << 24),
          q =
            (s[12] & 255) |
            ((s[13] & 255) << 8) |
            ((s[14] & 255) << 16) |
            ((s[15] & 255) << 24),
          tA =
            (i[4] & 255) |
            ((i[5] & 255) << 8) |
            ((i[6] & 255) << 16) |
            ((i[7] & 255) << 24),
          V =
            (Q[0] & 255) |
            ((Q[1] & 255) << 8) |
            ((Q[2] & 255) << 16) |
            ((Q[3] & 255) << 24),
          DA =
            (Q[4] & 255) |
            ((Q[5] & 255) << 8) |
            ((Q[6] & 255) << 16) |
            ((Q[7] & 255) << 24),
          $ =
            (Q[8] & 255) |
            ((Q[9] & 255) << 8) |
            ((Q[10] & 255) << 16) |
            ((Q[11] & 255) << 24),
          fA =
            (Q[12] & 255) |
            ((Q[13] & 255) << 8) |
            ((Q[14] & 255) << 16) |
            ((Q[15] & 255) << 24),
          X =
            (i[8] & 255) |
            ((i[9] & 255) << 8) |
            ((i[10] & 255) << 16) |
            ((i[11] & 255) << 24),
          hA =
            (s[16] & 255) |
            ((s[17] & 255) << 8) |
            ((s[18] & 255) << 16) |
            ((s[19] & 255) << 24),
          CA =
            (s[20] & 255) |
            ((s[21] & 255) << 8) |
            ((s[22] & 255) << 16) |
            ((s[23] & 255) << 24),
          l =
            (s[24] & 255) |
            ((s[25] & 255) << 8) |
            ((s[26] & 255) << 16) |
            ((s[27] & 255) << 24),
          O =
            (s[28] & 255) |
            ((s[29] & 255) << 8) |
            ((s[30] & 255) << 16) |
            ((s[31] & 255) << 24),
          W =
            (i[12] & 255) |
            ((i[13] & 255) << 8) |
            ((i[14] & 255) << 16) |
            ((i[15] & 255) << 24),
          _ = o,
          rA = D,
          j = G,
          eA = L,
          iA = q,
          z = tA,
          R = V,
          k = DA,
          T = $,
          m = fA,
          Y = X,
          J = hA,
          sA = CA,
          uA = l,
          wA = O,
          lA = W,
          x,
          dA = 0;
        dA < 20;
        dA += 2
      )
        (x = (_ + sA) | 0),
          (iA ^= (x << 7) | (x >>> (32 - 7))),
          (x = (iA + _) | 0),
          (T ^= (x << 9) | (x >>> (32 - 9))),
          (x = (T + iA) | 0),
          (sA ^= (x << 13) | (x >>> (32 - 13))),
          (x = (sA + T) | 0),
          (_ ^= (x << 18) | (x >>> (32 - 18))),
          (x = (z + rA) | 0),
          (m ^= (x << 7) | (x >>> (32 - 7))),
          (x = (m + z) | 0),
          (uA ^= (x << 9) | (x >>> (32 - 9))),
          (x = (uA + m) | 0),
          (rA ^= (x << 13) | (x >>> (32 - 13))),
          (x = (rA + uA) | 0),
          (z ^= (x << 18) | (x >>> (32 - 18))),
          (x = (Y + R) | 0),
          (wA ^= (x << 7) | (x >>> (32 - 7))),
          (x = (wA + Y) | 0),
          (j ^= (x << 9) | (x >>> (32 - 9))),
          (x = (j + wA) | 0),
          (R ^= (x << 13) | (x >>> (32 - 13))),
          (x = (R + j) | 0),
          (Y ^= (x << 18) | (x >>> (32 - 18))),
          (x = (lA + J) | 0),
          (eA ^= (x << 7) | (x >>> (32 - 7))),
          (x = (eA + lA) | 0),
          (k ^= (x << 9) | (x >>> (32 - 9))),
          (x = (k + eA) | 0),
          (J ^= (x << 13) | (x >>> (32 - 13))),
          (x = (J + k) | 0),
          (lA ^= (x << 18) | (x >>> (32 - 18))),
          (x = (_ + eA) | 0),
          (rA ^= (x << 7) | (x >>> (32 - 7))),
          (x = (rA + _) | 0),
          (j ^= (x << 9) | (x >>> (32 - 9))),
          (x = (j + rA) | 0),
          (eA ^= (x << 13) | (x >>> (32 - 13))),
          (x = (eA + j) | 0),
          (_ ^= (x << 18) | (x >>> (32 - 18))),
          (x = (z + iA) | 0),
          (R ^= (x << 7) | (x >>> (32 - 7))),
          (x = (R + z) | 0),
          (k ^= (x << 9) | (x >>> (32 - 9))),
          (x = (k + R) | 0),
          (iA ^= (x << 13) | (x >>> (32 - 13))),
          (x = (iA + k) | 0),
          (z ^= (x << 18) | (x >>> (32 - 18))),
          (x = (Y + m) | 0),
          (J ^= (x << 7) | (x >>> (32 - 7))),
          (x = (J + Y) | 0),
          (T ^= (x << 9) | (x >>> (32 - 9))),
          (x = (T + J) | 0),
          (m ^= (x << 13) | (x >>> (32 - 13))),
          (x = (m + T) | 0),
          (Y ^= (x << 18) | (x >>> (32 - 18))),
          (x = (lA + wA) | 0),
          (sA ^= (x << 7) | (x >>> (32 - 7))),
          (x = (sA + lA) | 0),
          (uA ^= (x << 9) | (x >>> (32 - 9))),
          (x = (uA + sA) | 0),
          (wA ^= (x << 13) | (x >>> (32 - 13))),
          (x = (wA + uA) | 0),
          (lA ^= (x << 18) | (x >>> (32 - 18)));
      (_ = (_ + o) | 0),
        (rA = (rA + D) | 0),
        (j = (j + G) | 0),
        (eA = (eA + L) | 0),
        (iA = (iA + q) | 0),
        (z = (z + tA) | 0),
        (R = (R + V) | 0),
        (k = (k + DA) | 0),
        (T = (T + $) | 0),
        (m = (m + fA) | 0),
        (Y = (Y + X) | 0),
        (J = (J + hA) | 0),
        (sA = (sA + CA) | 0),
        (uA = (uA + l) | 0),
        (wA = (wA + O) | 0),
        (lA = (lA + W) | 0),
        (g[0] = (_ >>> 0) & 255),
        (g[1] = (_ >>> 8) & 255),
        (g[2] = (_ >>> 16) & 255),
        (g[3] = (_ >>> 24) & 255),
        (g[4] = (rA >>> 0) & 255),
        (g[5] = (rA >>> 8) & 255),
        (g[6] = (rA >>> 16) & 255),
        (g[7] = (rA >>> 24) & 255),
        (g[8] = (j >>> 0) & 255),
        (g[9] = (j >>> 8) & 255),
        (g[10] = (j >>> 16) & 255),
        (g[11] = (j >>> 24) & 255),
        (g[12] = (eA >>> 0) & 255),
        (g[13] = (eA >>> 8) & 255),
        (g[14] = (eA >>> 16) & 255),
        (g[15] = (eA >>> 24) & 255),
        (g[16] = (iA >>> 0) & 255),
        (g[17] = (iA >>> 8) & 255),
        (g[18] = (iA >>> 16) & 255),
        (g[19] = (iA >>> 24) & 255),
        (g[20] = (z >>> 0) & 255),
        (g[21] = (z >>> 8) & 255),
        (g[22] = (z >>> 16) & 255),
        (g[23] = (z >>> 24) & 255),
        (g[24] = (R >>> 0) & 255),
        (g[25] = (R >>> 8) & 255),
        (g[26] = (R >>> 16) & 255),
        (g[27] = (R >>> 24) & 255),
        (g[28] = (k >>> 0) & 255),
        (g[29] = (k >>> 8) & 255),
        (g[30] = (k >>> 16) & 255),
        (g[31] = (k >>> 24) & 255),
        (g[32] = (T >>> 0) & 255),
        (g[33] = (T >>> 8) & 255),
        (g[34] = (T >>> 16) & 255),
        (g[35] = (T >>> 24) & 255),
        (g[36] = (m >>> 0) & 255),
        (g[37] = (m >>> 8) & 255),
        (g[38] = (m >>> 16) & 255),
        (g[39] = (m >>> 24) & 255),
        (g[40] = (Y >>> 0) & 255),
        (g[41] = (Y >>> 8) & 255),
        (g[42] = (Y >>> 16) & 255),
        (g[43] = (Y >>> 24) & 255),
        (g[44] = (J >>> 0) & 255),
        (g[45] = (J >>> 8) & 255),
        (g[46] = (J >>> 16) & 255),
        (g[47] = (J >>> 24) & 255),
        (g[48] = (sA >>> 0) & 255),
        (g[49] = (sA >>> 8) & 255),
        (g[50] = (sA >>> 16) & 255),
        (g[51] = (sA >>> 24) & 255),
        (g[52] = (uA >>> 0) & 255),
        (g[53] = (uA >>> 8) & 255),
        (g[54] = (uA >>> 16) & 255),
        (g[55] = (uA >>> 24) & 255),
        (g[56] = (wA >>> 0) & 255),
        (g[57] = (wA >>> 8) & 255),
        (g[58] = (wA >>> 16) & 255),
        (g[59] = (wA >>> 24) & 255),
        (g[60] = (lA >>> 0) & 255),
        (g[61] = (lA >>> 8) & 255),
        (g[62] = (lA >>> 16) & 255),
        (g[63] = (lA >>> 24) & 255);
    }
    function de(g, Q, s, i) {
      for (
        var o =
            (i[0] & 255) |
            ((i[1] & 255) << 8) |
            ((i[2] & 255) << 16) |
            ((i[3] & 255) << 24),
          D =
            (s[0] & 255) |
            ((s[1] & 255) << 8) |
            ((s[2] & 255) << 16) |
            ((s[3] & 255) << 24),
          G =
            (s[4] & 255) |
            ((s[5] & 255) << 8) |
            ((s[6] & 255) << 16) |
            ((s[7] & 255) << 24),
          L =
            (s[8] & 255) |
            ((s[9] & 255) << 8) |
            ((s[10] & 255) << 16) |
            ((s[11] & 255) << 24),
          q =
            (s[12] & 255) |
            ((s[13] & 255) << 8) |
            ((s[14] & 255) << 16) |
            ((s[15] & 255) << 24),
          tA =
            (i[4] & 255) |
            ((i[5] & 255) << 8) |
            ((i[6] & 255) << 16) |
            ((i[7] & 255) << 24),
          V =
            (Q[0] & 255) |
            ((Q[1] & 255) << 8) |
            ((Q[2] & 255) << 16) |
            ((Q[3] & 255) << 24),
          DA =
            (Q[4] & 255) |
            ((Q[5] & 255) << 8) |
            ((Q[6] & 255) << 16) |
            ((Q[7] & 255) << 24),
          $ =
            (Q[8] & 255) |
            ((Q[9] & 255) << 8) |
            ((Q[10] & 255) << 16) |
            ((Q[11] & 255) << 24),
          fA =
            (Q[12] & 255) |
            ((Q[13] & 255) << 8) |
            ((Q[14] & 255) << 16) |
            ((Q[15] & 255) << 24),
          X =
            (i[8] & 255) |
            ((i[9] & 255) << 8) |
            ((i[10] & 255) << 16) |
            ((i[11] & 255) << 24),
          hA =
            (s[16] & 255) |
            ((s[17] & 255) << 8) |
            ((s[18] & 255) << 16) |
            ((s[19] & 255) << 24),
          CA =
            (s[20] & 255) |
            ((s[21] & 255) << 8) |
            ((s[22] & 255) << 16) |
            ((s[23] & 255) << 24),
          l =
            (s[24] & 255) |
            ((s[25] & 255) << 8) |
            ((s[26] & 255) << 16) |
            ((s[27] & 255) << 24),
          O =
            (s[28] & 255) |
            ((s[29] & 255) << 8) |
            ((s[30] & 255) << 16) |
            ((s[31] & 255) << 24),
          W =
            (i[12] & 255) |
            ((i[13] & 255) << 8) |
            ((i[14] & 255) << 16) |
            ((i[15] & 255) << 24),
          _ = o,
          rA = D,
          j = G,
          eA = L,
          iA = q,
          z = tA,
          R = V,
          k = DA,
          T = $,
          m = fA,
          Y = X,
          J = hA,
          sA = CA,
          uA = l,
          wA = O,
          lA = W,
          x,
          dA = 0;
        dA < 20;
        dA += 2
      )
        (x = (_ + sA) | 0),
          (iA ^= (x << 7) | (x >>> (32 - 7))),
          (x = (iA + _) | 0),
          (T ^= (x << 9) | (x >>> (32 - 9))),
          (x = (T + iA) | 0),
          (sA ^= (x << 13) | (x >>> (32 - 13))),
          (x = (sA + T) | 0),
          (_ ^= (x << 18) | (x >>> (32 - 18))),
          (x = (z + rA) | 0),
          (m ^= (x << 7) | (x >>> (32 - 7))),
          (x = (m + z) | 0),
          (uA ^= (x << 9) | (x >>> (32 - 9))),
          (x = (uA + m) | 0),
          (rA ^= (x << 13) | (x >>> (32 - 13))),
          (x = (rA + uA) | 0),
          (z ^= (x << 18) | (x >>> (32 - 18))),
          (x = (Y + R) | 0),
          (wA ^= (x << 7) | (x >>> (32 - 7))),
          (x = (wA + Y) | 0),
          (j ^= (x << 9) | (x >>> (32 - 9))),
          (x = (j + wA) | 0),
          (R ^= (x << 13) | (x >>> (32 - 13))),
          (x = (R + j) | 0),
          (Y ^= (x << 18) | (x >>> (32 - 18))),
          (x = (lA + J) | 0),
          (eA ^= (x << 7) | (x >>> (32 - 7))),
          (x = (eA + lA) | 0),
          (k ^= (x << 9) | (x >>> (32 - 9))),
          (x = (k + eA) | 0),
          (J ^= (x << 13) | (x >>> (32 - 13))),
          (x = (J + k) | 0),
          (lA ^= (x << 18) | (x >>> (32 - 18))),
          (x = (_ + eA) | 0),
          (rA ^= (x << 7) | (x >>> (32 - 7))),
          (x = (rA + _) | 0),
          (j ^= (x << 9) | (x >>> (32 - 9))),
          (x = (j + rA) | 0),
          (eA ^= (x << 13) | (x >>> (32 - 13))),
          (x = (eA + j) | 0),
          (_ ^= (x << 18) | (x >>> (32 - 18))),
          (x = (z + iA) | 0),
          (R ^= (x << 7) | (x >>> (32 - 7))),
          (x = (R + z) | 0),
          (k ^= (x << 9) | (x >>> (32 - 9))),
          (x = (k + R) | 0),
          (iA ^= (x << 13) | (x >>> (32 - 13))),
          (x = (iA + k) | 0),
          (z ^= (x << 18) | (x >>> (32 - 18))),
          (x = (Y + m) | 0),
          (J ^= (x << 7) | (x >>> (32 - 7))),
          (x = (J + Y) | 0),
          (T ^= (x << 9) | (x >>> (32 - 9))),
          (x = (T + J) | 0),
          (m ^= (x << 13) | (x >>> (32 - 13))),
          (x = (m + T) | 0),
          (Y ^= (x << 18) | (x >>> (32 - 18))),
          (x = (lA + wA) | 0),
          (sA ^= (x << 7) | (x >>> (32 - 7))),
          (x = (sA + lA) | 0),
          (uA ^= (x << 9) | (x >>> (32 - 9))),
          (x = (uA + sA) | 0),
          (wA ^= (x << 13) | (x >>> (32 - 13))),
          (x = (wA + uA) | 0),
          (lA ^= (x << 18) | (x >>> (32 - 18)));
      (g[0] = (_ >>> 0) & 255),
        (g[1] = (_ >>> 8) & 255),
        (g[2] = (_ >>> 16) & 255),
        (g[3] = (_ >>> 24) & 255),
        (g[4] = (z >>> 0) & 255),
        (g[5] = (z >>> 8) & 255),
        (g[6] = (z >>> 16) & 255),
        (g[7] = (z >>> 24) & 255),
        (g[8] = (Y >>> 0) & 255),
        (g[9] = (Y >>> 8) & 255),
        (g[10] = (Y >>> 16) & 255),
        (g[11] = (Y >>> 24) & 255),
        (g[12] = (lA >>> 0) & 255),
        (g[13] = (lA >>> 8) & 255),
        (g[14] = (lA >>> 16) & 255),
        (g[15] = (lA >>> 24) & 255),
        (g[16] = (R >>> 0) & 255),
        (g[17] = (R >>> 8) & 255),
        (g[18] = (R >>> 16) & 255),
        (g[19] = (R >>> 24) & 255),
        (g[20] = (k >>> 0) & 255),
        (g[21] = (k >>> 8) & 255),
        (g[22] = (k >>> 16) & 255),
        (g[23] = (k >>> 24) & 255),
        (g[24] = (T >>> 0) & 255),
        (g[25] = (T >>> 8) & 255),
        (g[26] = (T >>> 16) & 255),
        (g[27] = (T >>> 24) & 255),
        (g[28] = (m >>> 0) & 255),
        (g[29] = (m >>> 8) & 255),
        (g[30] = (m >>> 16) & 255),
        (g[31] = (m >>> 24) & 255);
    }
    function we(g, Q, s, i) {
      LA(g, Q, s, i);
    }
    function PA(g, Q, s, i) {
      de(g, Q, s, i);
    }
    var IA = new Uint8Array([
      101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107,
    ]);
    function QA(g, Q, s, i, o, D, G) {
      var L = new Uint8Array(16),
        q = new Uint8Array(64),
        tA,
        V;
      for (V = 0; V < 16; V++) L[V] = 0;
      for (V = 0; V < 8; V++) L[V] = D[V];
      for (; o >= 64; ) {
        for (we(q, L, G, IA), V = 0; V < 64; V++) g[Q + V] = s[i + V] ^ q[V];
        for (tA = 1, V = 8; V < 16; V++)
          (tA = (tA + (L[V] & 255)) | 0), (L[V] = tA & 255), (tA >>>= 8);
        (o -= 64), (Q += 64), (i += 64);
      }
      if (o > 0)
        for (we(q, L, G, IA), V = 0; V < o; V++) g[Q + V] = s[i + V] ^ q[V];
      return 0;
    }
    function RA(g, Q, s, i, o) {
      var D = new Uint8Array(16),
        G = new Uint8Array(64),
        L,
        q;
      for (q = 0; q < 16; q++) D[q] = 0;
      for (q = 0; q < 8; q++) D[q] = i[q];
      for (; s >= 64; ) {
        for (we(G, D, o, IA), q = 0; q < 64; q++) g[Q + q] = G[q];
        for (L = 1, q = 8; q < 16; q++)
          (L = (L + (D[q] & 255)) | 0), (D[q] = L & 255), (L >>>= 8);
        (s -= 64), (Q += 64);
      }
      if (s > 0) for (we(G, D, o, IA), q = 0; q < s; q++) g[Q + q] = G[q];
      return 0;
    }
    function vA(g, Q, s, i, o) {
      var D = new Uint8Array(32);
      PA(D, i, o, IA);
      for (var G = new Uint8Array(8), L = 0; L < 8; L++) G[L] = i[L + 16];
      return RA(g, Q, s, G, D);
    }
    function P(g, Q, s, i, o, D, G) {
      var L = new Uint8Array(32);
      PA(L, D, G, IA);
      for (var q = new Uint8Array(8), tA = 0; tA < 8; tA++) q[tA] = D[tA + 16];
      return QA(g, Q, s, i, o, q, L);
    }
    var _A = function (g) {
      (this.buffer = new Uint8Array(16)),
        (this.r = new Uint16Array(10)),
        (this.h = new Uint16Array(10)),
        (this.pad = new Uint16Array(8)),
        (this.leftover = 0),
        (this.fin = 0);
      var Q, s, i, o, D, G, L, q;
      (Q = (g[0] & 255) | ((g[1] & 255) << 8)),
        (this.r[0] = Q & 8191),
        (s = (g[2] & 255) | ((g[3] & 255) << 8)),
        (this.r[1] = ((Q >>> 13) | (s << 3)) & 8191),
        (i = (g[4] & 255) | ((g[5] & 255) << 8)),
        (this.r[2] = ((s >>> 10) | (i << 6)) & 7939),
        (o = (g[6] & 255) | ((g[7] & 255) << 8)),
        (this.r[3] = ((i >>> 7) | (o << 9)) & 8191),
        (D = (g[8] & 255) | ((g[9] & 255) << 8)),
        (this.r[4] = ((o >>> 4) | (D << 12)) & 255),
        (this.r[5] = (D >>> 1) & 8190),
        (G = (g[10] & 255) | ((g[11] & 255) << 8)),
        (this.r[6] = ((D >>> 14) | (G << 2)) & 8191),
        (L = (g[12] & 255) | ((g[13] & 255) << 8)),
        (this.r[7] = ((G >>> 11) | (L << 5)) & 8065),
        (q = (g[14] & 255) | ((g[15] & 255) << 8)),
        (this.r[8] = ((L >>> 8) | (q << 8)) & 8191),
        (this.r[9] = (q >>> 5) & 127),
        (this.pad[0] = (g[16] & 255) | ((g[17] & 255) << 8)),
        (this.pad[1] = (g[18] & 255) | ((g[19] & 255) << 8)),
        (this.pad[2] = (g[20] & 255) | ((g[21] & 255) << 8)),
        (this.pad[3] = (g[22] & 255) | ((g[23] & 255) << 8)),
        (this.pad[4] = (g[24] & 255) | ((g[25] & 255) << 8)),
        (this.pad[5] = (g[26] & 255) | ((g[27] & 255) << 8)),
        (this.pad[6] = (g[28] & 255) | ((g[29] & 255) << 8)),
        (this.pad[7] = (g[30] & 255) | ((g[31] & 255) << 8));
    };
    (_A.prototype.blocks = function (g, Q, s) {
      for (
        var i = this.fin ? 0 : 2048,
          o,
          D,
          G,
          L,
          q,
          tA,
          V,
          DA,
          $,
          fA,
          X,
          hA,
          CA,
          l,
          O,
          W,
          _,
          rA,
          j,
          eA = this.h[0],
          iA = this.h[1],
          z = this.h[2],
          R = this.h[3],
          k = this.h[4],
          T = this.h[5],
          m = this.h[6],
          Y = this.h[7],
          J = this.h[8],
          sA = this.h[9],
          uA = this.r[0],
          wA = this.r[1],
          lA = this.r[2],
          x = this.r[3],
          dA = this.r[4],
          FA = this.r[5],
          GA = this.r[6],
          yA = this.r[7],
          SA = this.r[8],
          NA = this.r[9];
        s >= 16;

      )
        (o = (g[Q + 0] & 255) | ((g[Q + 1] & 255) << 8)),
          (eA += o & 8191),
          (D = (g[Q + 2] & 255) | ((g[Q + 3] & 255) << 8)),
          (iA += ((o >>> 13) | (D << 3)) & 8191),
          (G = (g[Q + 4] & 255) | ((g[Q + 5] & 255) << 8)),
          (z += ((D >>> 10) | (G << 6)) & 8191),
          (L = (g[Q + 6] & 255) | ((g[Q + 7] & 255) << 8)),
          (R += ((G >>> 7) | (L << 9)) & 8191),
          (q = (g[Q + 8] & 255) | ((g[Q + 9] & 255) << 8)),
          (k += ((L >>> 4) | (q << 12)) & 8191),
          (T += (q >>> 1) & 8191),
          (tA = (g[Q + 10] & 255) | ((g[Q + 11] & 255) << 8)),
          (m += ((q >>> 14) | (tA << 2)) & 8191),
          (V = (g[Q + 12] & 255) | ((g[Q + 13] & 255) << 8)),
          (Y += ((tA >>> 11) | (V << 5)) & 8191),
          (DA = (g[Q + 14] & 255) | ((g[Q + 15] & 255) << 8)),
          (J += ((V >>> 8) | (DA << 8)) & 8191),
          (sA += (DA >>> 5) | i),
          ($ = 0),
          (fA = $),
          (fA += eA * uA),
          (fA += iA * (5 * NA)),
          (fA += z * (5 * SA)),
          (fA += R * (5 * yA)),
          (fA += k * (5 * GA)),
          ($ = fA >>> 13),
          (fA &= 8191),
          (fA += T * (5 * FA)),
          (fA += m * (5 * dA)),
          (fA += Y * (5 * x)),
          (fA += J * (5 * lA)),
          (fA += sA * (5 * wA)),
          ($ += fA >>> 13),
          (fA &= 8191),
          (X = $),
          (X += eA * wA),
          (X += iA * uA),
          (X += z * (5 * NA)),
          (X += R * (5 * SA)),
          (X += k * (5 * yA)),
          ($ = X >>> 13),
          (X &= 8191),
          (X += T * (5 * GA)),
          (X += m * (5 * FA)),
          (X += Y * (5 * dA)),
          (X += J * (5 * x)),
          (X += sA * (5 * lA)),
          ($ += X >>> 13),
          (X &= 8191),
          (hA = $),
          (hA += eA * lA),
          (hA += iA * wA),
          (hA += z * uA),
          (hA += R * (5 * NA)),
          (hA += k * (5 * SA)),
          ($ = hA >>> 13),
          (hA &= 8191),
          (hA += T * (5 * yA)),
          (hA += m * (5 * GA)),
          (hA += Y * (5 * FA)),
          (hA += J * (5 * dA)),
          (hA += sA * (5 * x)),
          ($ += hA >>> 13),
          (hA &= 8191),
          (CA = $),
          (CA += eA * x),
          (CA += iA * lA),
          (CA += z * wA),
          (CA += R * uA),
          (CA += k * (5 * NA)),
          ($ = CA >>> 13),
          (CA &= 8191),
          (CA += T * (5 * SA)),
          (CA += m * (5 * yA)),
          (CA += Y * (5 * GA)),
          (CA += J * (5 * FA)),
          (CA += sA * (5 * dA)),
          ($ += CA >>> 13),
          (CA &= 8191),
          (l = $),
          (l += eA * dA),
          (l += iA * x),
          (l += z * lA),
          (l += R * wA),
          (l += k * uA),
          ($ = l >>> 13),
          (l &= 8191),
          (l += T * (5 * NA)),
          (l += m * (5 * SA)),
          (l += Y * (5 * yA)),
          (l += J * (5 * GA)),
          (l += sA * (5 * FA)),
          ($ += l >>> 13),
          (l &= 8191),
          (O = $),
          (O += eA * FA),
          (O += iA * dA),
          (O += z * x),
          (O += R * lA),
          (O += k * wA),
          ($ = O >>> 13),
          (O &= 8191),
          (O += T * uA),
          (O += m * (5 * NA)),
          (O += Y * (5 * SA)),
          (O += J * (5 * yA)),
          (O += sA * (5 * GA)),
          ($ += O >>> 13),
          (O &= 8191),
          (W = $),
          (W += eA * GA),
          (W += iA * FA),
          (W += z * dA),
          (W += R * x),
          (W += k * lA),
          ($ = W >>> 13),
          (W &= 8191),
          (W += T * wA),
          (W += m * uA),
          (W += Y * (5 * NA)),
          (W += J * (5 * SA)),
          (W += sA * (5 * yA)),
          ($ += W >>> 13),
          (W &= 8191),
          (_ = $),
          (_ += eA * yA),
          (_ += iA * GA),
          (_ += z * FA),
          (_ += R * dA),
          (_ += k * x),
          ($ = _ >>> 13),
          (_ &= 8191),
          (_ += T * lA),
          (_ += m * wA),
          (_ += Y * uA),
          (_ += J * (5 * NA)),
          (_ += sA * (5 * SA)),
          ($ += _ >>> 13),
          (_ &= 8191),
          (rA = $),
          (rA += eA * SA),
          (rA += iA * yA),
          (rA += z * GA),
          (rA += R * FA),
          (rA += k * dA),
          ($ = rA >>> 13),
          (rA &= 8191),
          (rA += T * x),
          (rA += m * lA),
          (rA += Y * wA),
          (rA += J * uA),
          (rA += sA * (5 * NA)),
          ($ += rA >>> 13),
          (rA &= 8191),
          (j = $),
          (j += eA * NA),
          (j += iA * SA),
          (j += z * yA),
          (j += R * GA),
          (j += k * FA),
          ($ = j >>> 13),
          (j &= 8191),
          (j += T * dA),
          (j += m * x),
          (j += Y * lA),
          (j += J * wA),
          (j += sA * uA),
          ($ += j >>> 13),
          (j &= 8191),
          ($ = (($ << 2) + $) | 0),
          ($ = ($ + fA) | 0),
          (fA = $ & 8191),
          ($ = $ >>> 13),
          (X += $),
          (eA = fA),
          (iA = X),
          (z = hA),
          (R = CA),
          (k = l),
          (T = O),
          (m = W),
          (Y = _),
          (J = rA),
          (sA = j),
          (Q += 16),
          (s -= 16);
      (this.h[0] = eA),
        (this.h[1] = iA),
        (this.h[2] = z),
        (this.h[3] = R),
        (this.h[4] = k),
        (this.h[5] = T),
        (this.h[6] = m),
        (this.h[7] = Y),
        (this.h[8] = J),
        (this.h[9] = sA);
    }),
      (_A.prototype.finish = function (g, Q) {
        var s = new Uint16Array(10),
          i,
          o,
          D,
          G;
        if (this.leftover) {
          for (G = this.leftover, this.buffer[G++] = 1; G < 16; G++)
            this.buffer[G] = 0;
          (this.fin = 1), this.blocks(this.buffer, 0, 16);
        }
        for (i = this.h[1] >>> 13, this.h[1] &= 8191, G = 2; G < 10; G++)
          (this.h[G] += i), (i = this.h[G] >>> 13), (this.h[G] &= 8191);
        for (
          this.h[0] += i * 5,
            i = this.h[0] >>> 13,
            this.h[0] &= 8191,
            this.h[1] += i,
            i = this.h[1] >>> 13,
            this.h[1] &= 8191,
            this.h[2] += i,
            s[0] = this.h[0] + 5,
            i = s[0] >>> 13,
            s[0] &= 8191,
            G = 1;
          G < 10;
          G++
        )
          (s[G] = this.h[G] + i), (i = s[G] >>> 13), (s[G] &= 8191);
        for (s[9] -= 8192, o = (i ^ 1) - 1, G = 0; G < 10; G++) s[G] &= o;
        for (o = ~o, G = 0; G < 10; G++) this.h[G] = (this.h[G] & o) | s[G];
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
            D = this.h[0] + this.pad[0],
            this.h[0] = D & 65535,
            G = 1;
          G < 8;
          G++
        )
          (D = (((this.h[G] + this.pad[G]) | 0) + (D >>> 16)) | 0),
            (this.h[G] = D & 65535);
        (g[Q + 0] = (this.h[0] >>> 0) & 255),
          (g[Q + 1] = (this.h[0] >>> 8) & 255),
          (g[Q + 2] = (this.h[1] >>> 0) & 255),
          (g[Q + 3] = (this.h[1] >>> 8) & 255),
          (g[Q + 4] = (this.h[2] >>> 0) & 255),
          (g[Q + 5] = (this.h[2] >>> 8) & 255),
          (g[Q + 6] = (this.h[3] >>> 0) & 255),
          (g[Q + 7] = (this.h[3] >>> 8) & 255),
          (g[Q + 8] = (this.h[4] >>> 0) & 255),
          (g[Q + 9] = (this.h[4] >>> 8) & 255),
          (g[Q + 10] = (this.h[5] >>> 0) & 255),
          (g[Q + 11] = (this.h[5] >>> 8) & 255),
          (g[Q + 12] = (this.h[6] >>> 0) & 255),
          (g[Q + 13] = (this.h[6] >>> 8) & 255),
          (g[Q + 14] = (this.h[7] >>> 0) & 255),
          (g[Q + 15] = (this.h[7] >>> 8) & 255);
      }),
      (_A.prototype.update = function (g, Q, s) {
        var i, o;
        if (this.leftover) {
          for (o = 16 - this.leftover, o > s && (o = s), i = 0; i < o; i++)
            this.buffer[this.leftover + i] = g[Q + i];
          if (((s -= o), (Q += o), (this.leftover += o), this.leftover < 16))
            return;
          this.blocks(this.buffer, 0, 16), (this.leftover = 0);
        }
        if (
          (s >= 16 &&
            ((o = s - (s % 16)), this.blocks(g, Q, o), (Q += o), (s -= o)),
          s)
        ) {
          for (i = 0; i < s; i++) this.buffer[this.leftover + i] = g[Q + i];
          this.leftover += s;
        }
      });
    function bA(g, Q, s, i, o, D) {
      var G = new _A(D);
      return G.update(s, i, o), G.finish(g, Q), 0;
    }
    function UA(g, Q, s, i, o, D) {
      var G = new Uint8Array(16);
      return bA(G, 0, s, i, o, D), Be(g, Q, G, 0);
    }
    function ZA(g, Q, s, i, o) {
      var D;
      if (s < 32) return -1;
      for (
        P(g, 0, Q, 0, s, i, o), bA(g, 16, g, 32, s - 32, g), D = 0;
        D < 16;
        D++
      )
        g[D] = 0;
      return 0;
    }
    function WA(g, Q, s, i, o) {
      var D,
        G = new Uint8Array(32);
      if (s < 32 || (vA(G, 0, 32, i, o), UA(Q, 16, Q, 32, s - 32, G) !== 0))
        return -1;
      for (P(g, 0, Q, 0, s, i, o), D = 0; D < 32; D++) g[D] = 0;
      return 0;
    }
    function Ae(g, Q) {
      var s;
      for (s = 0; s < 16; s++) g[s] = Q[s] | 0;
    }
    function ie(g) {
      var Q,
        s,
        i = 1;
      for (Q = 0; Q < 16; Q++)
        (s = g[Q] + i + 65535),
          (i = Math.floor(s / 65536)),
          (g[Q] = s - i * 65536);
      g[0] += i - 1 + 37 * (i - 1);
    }
    function TA(g, Q, s) {
      for (var i, o = ~(s - 1), D = 0; D < 16; D++)
        (i = o & (g[D] ^ Q[D])), (g[D] ^= i), (Q[D] ^= i);
    }
    function se(g, Q) {
      var s,
        i,
        o,
        D = e(),
        G = e();
      for (s = 0; s < 16; s++) G[s] = Q[s];
      for (ie(G), ie(G), ie(G), i = 0; i < 2; i++) {
        for (D[0] = G[0] - 65517, s = 1; s < 15; s++)
          (D[s] = G[s] - 65535 - ((D[s - 1] >> 16) & 1)), (D[s - 1] &= 65535);
        (D[15] = G[15] - 32767 - ((D[14] >> 16) & 1)),
          (o = (D[15] >> 16) & 1),
          (D[14] &= 65535),
          TA(G, D, 1 - o);
      }
      for (s = 0; s < 16; s++)
        (g[2 * s] = G[s] & 255), (g[2 * s + 1] = G[s] >> 8);
    }
    function he(g, Q) {
      var s = new Uint8Array(32),
        i = new Uint8Array(32);
      return se(s, g), se(i, Q), ae(s, 0, i, 0);
    }
    function OA(g) {
      var Q = new Uint8Array(32);
      return se(Q, g), Q[0] & 1;
    }
    function JA(g, Q) {
      var s;
      for (s = 0; s < 16; s++) g[s] = Q[2 * s] + (Q[2 * s + 1] << 8);
      g[15] &= 32767;
    }
    function ne(g, Q, s) {
      for (var i = 0; i < 16; i++) g[i] = Q[i] + s[i];
    }
    function h(g, Q, s) {
      for (var i = 0; i < 16; i++) g[i] = Q[i] - s[i];
    }
    function oA(g, Q, s) {
      var i,
        o,
        D = 0,
        G = 0,
        L = 0,
        q = 0,
        tA = 0,
        V = 0,
        DA = 0,
        $ = 0,
        fA = 0,
        X = 0,
        hA = 0,
        CA = 0,
        l = 0,
        O = 0,
        W = 0,
        _ = 0,
        rA = 0,
        j = 0,
        eA = 0,
        iA = 0,
        z = 0,
        R = 0,
        k = 0,
        T = 0,
        m = 0,
        Y = 0,
        J = 0,
        sA = 0,
        uA = 0,
        wA = 0,
        lA = 0,
        x = s[0],
        dA = s[1],
        FA = s[2],
        GA = s[3],
        yA = s[4],
        SA = s[5],
        NA = s[6],
        re = s[7],
        YA = s[8],
        XA = s[9],
        zA = s[10],
        $A = s[11],
        Ie = s[12],
        Qe = s[13],
        fe = s[14],
        oe = s[15];
      (i = Q[0]),
        (D += i * x),
        (G += i * dA),
        (L += i * FA),
        (q += i * GA),
        (tA += i * yA),
        (V += i * SA),
        (DA += i * NA),
        ($ += i * re),
        (fA += i * YA),
        (X += i * XA),
        (hA += i * zA),
        (CA += i * $A),
        (l += i * Ie),
        (O += i * Qe),
        (W += i * fe),
        (_ += i * oe),
        (i = Q[1]),
        (G += i * x),
        (L += i * dA),
        (q += i * FA),
        (tA += i * GA),
        (V += i * yA),
        (DA += i * SA),
        ($ += i * NA),
        (fA += i * re),
        (X += i * YA),
        (hA += i * XA),
        (CA += i * zA),
        (l += i * $A),
        (O += i * Ie),
        (W += i * Qe),
        (_ += i * fe),
        (rA += i * oe),
        (i = Q[2]),
        (L += i * x),
        (q += i * dA),
        (tA += i * FA),
        (V += i * GA),
        (DA += i * yA),
        ($ += i * SA),
        (fA += i * NA),
        (X += i * re),
        (hA += i * YA),
        (CA += i * XA),
        (l += i * zA),
        (O += i * $A),
        (W += i * Ie),
        (_ += i * Qe),
        (rA += i * fe),
        (j += i * oe),
        (i = Q[3]),
        (q += i * x),
        (tA += i * dA),
        (V += i * FA),
        (DA += i * GA),
        ($ += i * yA),
        (fA += i * SA),
        (X += i * NA),
        (hA += i * re),
        (CA += i * YA),
        (l += i * XA),
        (O += i * zA),
        (W += i * $A),
        (_ += i * Ie),
        (rA += i * Qe),
        (j += i * fe),
        (eA += i * oe),
        (i = Q[4]),
        (tA += i * x),
        (V += i * dA),
        (DA += i * FA),
        ($ += i * GA),
        (fA += i * yA),
        (X += i * SA),
        (hA += i * NA),
        (CA += i * re),
        (l += i * YA),
        (O += i * XA),
        (W += i * zA),
        (_ += i * $A),
        (rA += i * Ie),
        (j += i * Qe),
        (eA += i * fe),
        (iA += i * oe),
        (i = Q[5]),
        (V += i * x),
        (DA += i * dA),
        ($ += i * FA),
        (fA += i * GA),
        (X += i * yA),
        (hA += i * SA),
        (CA += i * NA),
        (l += i * re),
        (O += i * YA),
        (W += i * XA),
        (_ += i * zA),
        (rA += i * $A),
        (j += i * Ie),
        (eA += i * Qe),
        (iA += i * fe),
        (z += i * oe),
        (i = Q[6]),
        (DA += i * x),
        ($ += i * dA),
        (fA += i * FA),
        (X += i * GA),
        (hA += i * yA),
        (CA += i * SA),
        (l += i * NA),
        (O += i * re),
        (W += i * YA),
        (_ += i * XA),
        (rA += i * zA),
        (j += i * $A),
        (eA += i * Ie),
        (iA += i * Qe),
        (z += i * fe),
        (R += i * oe),
        (i = Q[7]),
        ($ += i * x),
        (fA += i * dA),
        (X += i * FA),
        (hA += i * GA),
        (CA += i * yA),
        (l += i * SA),
        (O += i * NA),
        (W += i * re),
        (_ += i * YA),
        (rA += i * XA),
        (j += i * zA),
        (eA += i * $A),
        (iA += i * Ie),
        (z += i * Qe),
        (R += i * fe),
        (k += i * oe),
        (i = Q[8]),
        (fA += i * x),
        (X += i * dA),
        (hA += i * FA),
        (CA += i * GA),
        (l += i * yA),
        (O += i * SA),
        (W += i * NA),
        (_ += i * re),
        (rA += i * YA),
        (j += i * XA),
        (eA += i * zA),
        (iA += i * $A),
        (z += i * Ie),
        (R += i * Qe),
        (k += i * fe),
        (T += i * oe),
        (i = Q[9]),
        (X += i * x),
        (hA += i * dA),
        (CA += i * FA),
        (l += i * GA),
        (O += i * yA),
        (W += i * SA),
        (_ += i * NA),
        (rA += i * re),
        (j += i * YA),
        (eA += i * XA),
        (iA += i * zA),
        (z += i * $A),
        (R += i * Ie),
        (k += i * Qe),
        (T += i * fe),
        (m += i * oe),
        (i = Q[10]),
        (hA += i * x),
        (CA += i * dA),
        (l += i * FA),
        (O += i * GA),
        (W += i * yA),
        (_ += i * SA),
        (rA += i * NA),
        (j += i * re),
        (eA += i * YA),
        (iA += i * XA),
        (z += i * zA),
        (R += i * $A),
        (k += i * Ie),
        (T += i * Qe),
        (m += i * fe),
        (Y += i * oe),
        (i = Q[11]),
        (CA += i * x),
        (l += i * dA),
        (O += i * FA),
        (W += i * GA),
        (_ += i * yA),
        (rA += i * SA),
        (j += i * NA),
        (eA += i * re),
        (iA += i * YA),
        (z += i * XA),
        (R += i * zA),
        (k += i * $A),
        (T += i * Ie),
        (m += i * Qe),
        (Y += i * fe),
        (J += i * oe),
        (i = Q[12]),
        (l += i * x),
        (O += i * dA),
        (W += i * FA),
        (_ += i * GA),
        (rA += i * yA),
        (j += i * SA),
        (eA += i * NA),
        (iA += i * re),
        (z += i * YA),
        (R += i * XA),
        (k += i * zA),
        (T += i * $A),
        (m += i * Ie),
        (Y += i * Qe),
        (J += i * fe),
        (sA += i * oe),
        (i = Q[13]),
        (O += i * x),
        (W += i * dA),
        (_ += i * FA),
        (rA += i * GA),
        (j += i * yA),
        (eA += i * SA),
        (iA += i * NA),
        (z += i * re),
        (R += i * YA),
        (k += i * XA),
        (T += i * zA),
        (m += i * $A),
        (Y += i * Ie),
        (J += i * Qe),
        (sA += i * fe),
        (uA += i * oe),
        (i = Q[14]),
        (W += i * x),
        (_ += i * dA),
        (rA += i * FA),
        (j += i * GA),
        (eA += i * yA),
        (iA += i * SA),
        (z += i * NA),
        (R += i * re),
        (k += i * YA),
        (T += i * XA),
        (m += i * zA),
        (Y += i * $A),
        (J += i * Ie),
        (sA += i * Qe),
        (uA += i * fe),
        (wA += i * oe),
        (i = Q[15]),
        (_ += i * x),
        (rA += i * dA),
        (j += i * FA),
        (eA += i * GA),
        (iA += i * yA),
        (z += i * SA),
        (R += i * NA),
        (k += i * re),
        (T += i * YA),
        (m += i * XA),
        (Y += i * zA),
        (J += i * $A),
        (sA += i * Ie),
        (uA += i * Qe),
        (wA += i * fe),
        (lA += i * oe),
        (D += 38 * rA),
        (G += 38 * j),
        (L += 38 * eA),
        (q += 38 * iA),
        (tA += 38 * z),
        (V += 38 * R),
        (DA += 38 * k),
        ($ += 38 * T),
        (fA += 38 * m),
        (X += 38 * Y),
        (hA += 38 * J),
        (CA += 38 * sA),
        (l += 38 * uA),
        (O += 38 * wA),
        (W += 38 * lA),
        (o = 1),
        (i = D + o + 65535),
        (o = Math.floor(i / 65536)),
        (D = i - o * 65536),
        (i = G + o + 65535),
        (o = Math.floor(i / 65536)),
        (G = i - o * 65536),
        (i = L + o + 65535),
        (o = Math.floor(i / 65536)),
        (L = i - o * 65536),
        (i = q + o + 65535),
        (o = Math.floor(i / 65536)),
        (q = i - o * 65536),
        (i = tA + o + 65535),
        (o = Math.floor(i / 65536)),
        (tA = i - o * 65536),
        (i = V + o + 65535),
        (o = Math.floor(i / 65536)),
        (V = i - o * 65536),
        (i = DA + o + 65535),
        (o = Math.floor(i / 65536)),
        (DA = i - o * 65536),
        (i = $ + o + 65535),
        (o = Math.floor(i / 65536)),
        ($ = i - o * 65536),
        (i = fA + o + 65535),
        (o = Math.floor(i / 65536)),
        (fA = i - o * 65536),
        (i = X + o + 65535),
        (o = Math.floor(i / 65536)),
        (X = i - o * 65536),
        (i = hA + o + 65535),
        (o = Math.floor(i / 65536)),
        (hA = i - o * 65536),
        (i = CA + o + 65535),
        (o = Math.floor(i / 65536)),
        (CA = i - o * 65536),
        (i = l + o + 65535),
        (o = Math.floor(i / 65536)),
        (l = i - o * 65536),
        (i = O + o + 65535),
        (o = Math.floor(i / 65536)),
        (O = i - o * 65536),
        (i = W + o + 65535),
        (o = Math.floor(i / 65536)),
        (W = i - o * 65536),
        (i = _ + o + 65535),
        (o = Math.floor(i / 65536)),
        (_ = i - o * 65536),
        (D += o - 1 + 37 * (o - 1)),
        (o = 1),
        (i = D + o + 65535),
        (o = Math.floor(i / 65536)),
        (D = i - o * 65536),
        (i = G + o + 65535),
        (o = Math.floor(i / 65536)),
        (G = i - o * 65536),
        (i = L + o + 65535),
        (o = Math.floor(i / 65536)),
        (L = i - o * 65536),
        (i = q + o + 65535),
        (o = Math.floor(i / 65536)),
        (q = i - o * 65536),
        (i = tA + o + 65535),
        (o = Math.floor(i / 65536)),
        (tA = i - o * 65536),
        (i = V + o + 65535),
        (o = Math.floor(i / 65536)),
        (V = i - o * 65536),
        (i = DA + o + 65535),
        (o = Math.floor(i / 65536)),
        (DA = i - o * 65536),
        (i = $ + o + 65535),
        (o = Math.floor(i / 65536)),
        ($ = i - o * 65536),
        (i = fA + o + 65535),
        (o = Math.floor(i / 65536)),
        (fA = i - o * 65536),
        (i = X + o + 65535),
        (o = Math.floor(i / 65536)),
        (X = i - o * 65536),
        (i = hA + o + 65535),
        (o = Math.floor(i / 65536)),
        (hA = i - o * 65536),
        (i = CA + o + 65535),
        (o = Math.floor(i / 65536)),
        (CA = i - o * 65536),
        (i = l + o + 65535),
        (o = Math.floor(i / 65536)),
        (l = i - o * 65536),
        (i = O + o + 65535),
        (o = Math.floor(i / 65536)),
        (O = i - o * 65536),
        (i = W + o + 65535),
        (o = Math.floor(i / 65536)),
        (W = i - o * 65536),
        (i = _ + o + 65535),
        (o = Math.floor(i / 65536)),
        (_ = i - o * 65536),
        (D += o - 1 + 37 * (o - 1)),
        (g[0] = D),
        (g[1] = G),
        (g[2] = L),
        (g[3] = q),
        (g[4] = tA),
        (g[5] = V),
        (g[6] = DA),
        (g[7] = $),
        (g[8] = fA),
        (g[9] = X),
        (g[10] = hA),
        (g[11] = CA),
        (g[12] = l),
        (g[13] = O),
        (g[14] = W),
        (g[15] = _);
    }
    function ee(g, Q) {
      oA(g, Q, Q);
    }
    function Me(g, Q) {
      var s = e(),
        i;
      for (i = 0; i < 16; i++) s[i] = Q[i];
      for (i = 253; i >= 0; i--) ee(s, s), i !== 2 && i !== 4 && oA(s, s, Q);
      for (i = 0; i < 16; i++) g[i] = s[i];
    }
    function BA(g, Q) {
      var s = e(),
        i;
      for (i = 0; i < 16; i++) s[i] = Q[i];
      for (i = 250; i >= 0; i--) ee(s, s), i !== 1 && oA(s, s, Q);
      for (i = 0; i < 16; i++) g[i] = s[i];
    }
    function EA(g, Q, s) {
      var i = new Uint8Array(32),
        o = new Float64Array(80),
        D,
        G,
        L = e(),
        q = e(),
        tA = e(),
        V = e(),
        DA = e(),
        $ = e();
      for (G = 0; G < 31; G++) i[G] = Q[G];
      for (
        i[31] = (Q[31] & 127) | 64, i[0] &= 248, JA(o, s), G = 0;
        G < 16;
        G++
      )
        (q[G] = o[G]), (V[G] = L[G] = tA[G] = 0);
      for (L[0] = V[0] = 1, G = 254; G >= 0; --G)
        (D = (i[G >>> 3] >>> (G & 7)) & 1),
          TA(L, q, D),
          TA(tA, V, D),
          ne(DA, L, tA),
          h(L, L, tA),
          ne(tA, q, V),
          h(q, q, V),
          ee(V, DA),
          ee($, L),
          oA(L, tA, L),
          oA(tA, q, DA),
          ne(DA, L, tA),
          h(L, L, tA),
          ee(q, L),
          h(tA, V, $),
          oA(L, tA, b),
          ne(L, L, V),
          oA(tA, tA, L),
          oA(L, V, $),
          oA(V, q, o),
          ee(q, DA),
          TA(L, q, D),
          TA(tA, V, D);
      for (G = 0; G < 16; G++)
        (o[G + 16] = L[G]),
          (o[G + 32] = tA[G]),
          (o[G + 48] = q[G]),
          (o[G + 64] = V[G]);
      var fA = o.subarray(32),
        X = o.subarray(16);
      return Me(fA, fA), oA(X, X, fA), se(g, X), 0;
    }
    function C(g, Q) {
      return EA(g, Q, w);
    }
    function c(g, Q) {
      return B(Q, 32), C(g, Q);
    }
    function d(g, Q, s) {
      var i = new Uint8Array(32);
      return EA(i, s, Q), PA(g, a, i, IA);
    }
    var F = ZA,
      S = WA;
    function N(g, Q, s, i, o, D) {
      var G = new Uint8Array(32);
      return d(G, o, D), F(g, Q, s, i, G);
    }
    function I(g, Q, s, i, o, D) {
      var G = new Uint8Array(32);
      return d(G, o, D), S(g, Q, s, i, G);
    }
    var r = [
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
    function n(g, Q, s, i) {
      for (
        var o = new Int32Array(16),
          D = new Int32Array(16),
          G,
          L,
          q,
          tA,
          V,
          DA,
          $,
          fA,
          X,
          hA,
          CA,
          l,
          O,
          W,
          _,
          rA,
          j,
          eA,
          iA,
          z,
          R,
          k,
          T,
          m,
          Y,
          J,
          sA = g[0],
          uA = g[1],
          wA = g[2],
          lA = g[3],
          x = g[4],
          dA = g[5],
          FA = g[6],
          GA = g[7],
          yA = Q[0],
          SA = Q[1],
          NA = Q[2],
          re = Q[3],
          YA = Q[4],
          XA = Q[5],
          zA = Q[6],
          $A = Q[7],
          Ie = 0;
        i >= 128;

      ) {
        for (iA = 0; iA < 16; iA++)
          (z = 8 * iA + Ie),
            (o[iA] =
              (s[z + 0] << 24) | (s[z + 1] << 16) | (s[z + 2] << 8) | s[z + 3]),
            (D[iA] =
              (s[z + 4] << 24) | (s[z + 5] << 16) | (s[z + 6] << 8) | s[z + 7]);
        for (iA = 0; iA < 80; iA++)
          if (
            ((G = sA),
            (L = uA),
            (q = wA),
            (tA = lA),
            (V = x),
            (DA = dA),
            ($ = FA),
            (fA = GA),
            (X = yA),
            (hA = SA),
            (CA = NA),
            (l = re),
            (O = YA),
            (W = XA),
            (_ = zA),
            (rA = $A),
            (R = GA),
            (k = $A),
            (T = k & 65535),
            (m = k >>> 16),
            (Y = R & 65535),
            (J = R >>> 16),
            (R =
              ((x >>> 14) | (YA << (32 - 14))) ^
              ((x >>> 18) | (YA << (32 - 18))) ^
              ((YA >>> (41 - 32)) | (x << (32 - (41 - 32))))),
            (k =
              ((YA >>> 14) | (x << (32 - 14))) ^
              ((YA >>> 18) | (x << (32 - 18))) ^
              ((x >>> (41 - 32)) | (YA << (32 - (41 - 32))))),
            (T += k & 65535),
            (m += k >>> 16),
            (Y += R & 65535),
            (J += R >>> 16),
            (R = (x & dA) ^ (~x & FA)),
            (k = (YA & XA) ^ (~YA & zA)),
            (T += k & 65535),
            (m += k >>> 16),
            (Y += R & 65535),
            (J += R >>> 16),
            (R = r[iA * 2]),
            (k = r[iA * 2 + 1]),
            (T += k & 65535),
            (m += k >>> 16),
            (Y += R & 65535),
            (J += R >>> 16),
            (R = o[iA % 16]),
            (k = D[iA % 16]),
            (T += k & 65535),
            (m += k >>> 16),
            (Y += R & 65535),
            (J += R >>> 16),
            (m += T >>> 16),
            (Y += m >>> 16),
            (J += Y >>> 16),
            (j = (Y & 65535) | (J << 16)),
            (eA = (T & 65535) | (m << 16)),
            (R = j),
            (k = eA),
            (T = k & 65535),
            (m = k >>> 16),
            (Y = R & 65535),
            (J = R >>> 16),
            (R =
              ((sA >>> 28) | (yA << (32 - 28))) ^
              ((yA >>> (34 - 32)) | (sA << (32 - (34 - 32)))) ^
              ((yA >>> (39 - 32)) | (sA << (32 - (39 - 32))))),
            (k =
              ((yA >>> 28) | (sA << (32 - 28))) ^
              ((sA >>> (34 - 32)) | (yA << (32 - (34 - 32)))) ^
              ((sA >>> (39 - 32)) | (yA << (32 - (39 - 32))))),
            (T += k & 65535),
            (m += k >>> 16),
            (Y += R & 65535),
            (J += R >>> 16),
            (R = (sA & uA) ^ (sA & wA) ^ (uA & wA)),
            (k = (yA & SA) ^ (yA & NA) ^ (SA & NA)),
            (T += k & 65535),
            (m += k >>> 16),
            (Y += R & 65535),
            (J += R >>> 16),
            (m += T >>> 16),
            (Y += m >>> 16),
            (J += Y >>> 16),
            (fA = (Y & 65535) | (J << 16)),
            (rA = (T & 65535) | (m << 16)),
            (R = tA),
            (k = l),
            (T = k & 65535),
            (m = k >>> 16),
            (Y = R & 65535),
            (J = R >>> 16),
            (R = j),
            (k = eA),
            (T += k & 65535),
            (m += k >>> 16),
            (Y += R & 65535),
            (J += R >>> 16),
            (m += T >>> 16),
            (Y += m >>> 16),
            (J += Y >>> 16),
            (tA = (Y & 65535) | (J << 16)),
            (l = (T & 65535) | (m << 16)),
            (uA = G),
            (wA = L),
            (lA = q),
            (x = tA),
            (dA = V),
            (FA = DA),
            (GA = $),
            (sA = fA),
            (SA = X),
            (NA = hA),
            (re = CA),
            (YA = l),
            (XA = O),
            (zA = W),
            ($A = _),
            (yA = rA),
            iA % 16 === 15)
          )
            for (z = 0; z < 16; z++)
              (R = o[z]),
                (k = D[z]),
                (T = k & 65535),
                (m = k >>> 16),
                (Y = R & 65535),
                (J = R >>> 16),
                (R = o[(z + 9) % 16]),
                (k = D[(z + 9) % 16]),
                (T += k & 65535),
                (m += k >>> 16),
                (Y += R & 65535),
                (J += R >>> 16),
                (j = o[(z + 1) % 16]),
                (eA = D[(z + 1) % 16]),
                (R =
                  ((j >>> 1) | (eA << (32 - 1))) ^
                  ((j >>> 8) | (eA << (32 - 8))) ^
                  (j >>> 7)),
                (k =
                  ((eA >>> 1) | (j << (32 - 1))) ^
                  ((eA >>> 8) | (j << (32 - 8))) ^
                  ((eA >>> 7) | (j << (32 - 7)))),
                (T += k & 65535),
                (m += k >>> 16),
                (Y += R & 65535),
                (J += R >>> 16),
                (j = o[(z + 14) % 16]),
                (eA = D[(z + 14) % 16]),
                (R =
                  ((j >>> 19) | (eA << (32 - 19))) ^
                  ((eA >>> (61 - 32)) | (j << (32 - (61 - 32)))) ^
                  (j >>> 6)),
                (k =
                  ((eA >>> 19) | (j << (32 - 19))) ^
                  ((j >>> (61 - 32)) | (eA << (32 - (61 - 32)))) ^
                  ((eA >>> 6) | (j << (32 - 6)))),
                (T += k & 65535),
                (m += k >>> 16),
                (Y += R & 65535),
                (J += R >>> 16),
                (m += T >>> 16),
                (Y += m >>> 16),
                (J += Y >>> 16),
                (o[z] = (Y & 65535) | (J << 16)),
                (D[z] = (T & 65535) | (m << 16));
        (R = sA),
          (k = yA),
          (T = k & 65535),
          (m = k >>> 16),
          (Y = R & 65535),
          (J = R >>> 16),
          (R = g[0]),
          (k = Q[0]),
          (T += k & 65535),
          (m += k >>> 16),
          (Y += R & 65535),
          (J += R >>> 16),
          (m += T >>> 16),
          (Y += m >>> 16),
          (J += Y >>> 16),
          (g[0] = sA = (Y & 65535) | (J << 16)),
          (Q[0] = yA = (T & 65535) | (m << 16)),
          (R = uA),
          (k = SA),
          (T = k & 65535),
          (m = k >>> 16),
          (Y = R & 65535),
          (J = R >>> 16),
          (R = g[1]),
          (k = Q[1]),
          (T += k & 65535),
          (m += k >>> 16),
          (Y += R & 65535),
          (J += R >>> 16),
          (m += T >>> 16),
          (Y += m >>> 16),
          (J += Y >>> 16),
          (g[1] = uA = (Y & 65535) | (J << 16)),
          (Q[1] = SA = (T & 65535) | (m << 16)),
          (R = wA),
          (k = NA),
          (T = k & 65535),
          (m = k >>> 16),
          (Y = R & 65535),
          (J = R >>> 16),
          (R = g[2]),
          (k = Q[2]),
          (T += k & 65535),
          (m += k >>> 16),
          (Y += R & 65535),
          (J += R >>> 16),
          (m += T >>> 16),
          (Y += m >>> 16),
          (J += Y >>> 16),
          (g[2] = wA = (Y & 65535) | (J << 16)),
          (Q[2] = NA = (T & 65535) | (m << 16)),
          (R = lA),
          (k = re),
          (T = k & 65535),
          (m = k >>> 16),
          (Y = R & 65535),
          (J = R >>> 16),
          (R = g[3]),
          (k = Q[3]),
          (T += k & 65535),
          (m += k >>> 16),
          (Y += R & 65535),
          (J += R >>> 16),
          (m += T >>> 16),
          (Y += m >>> 16),
          (J += Y >>> 16),
          (g[3] = lA = (Y & 65535) | (J << 16)),
          (Q[3] = re = (T & 65535) | (m << 16)),
          (R = x),
          (k = YA),
          (T = k & 65535),
          (m = k >>> 16),
          (Y = R & 65535),
          (J = R >>> 16),
          (R = g[4]),
          (k = Q[4]),
          (T += k & 65535),
          (m += k >>> 16),
          (Y += R & 65535),
          (J += R >>> 16),
          (m += T >>> 16),
          (Y += m >>> 16),
          (J += Y >>> 16),
          (g[4] = x = (Y & 65535) | (J << 16)),
          (Q[4] = YA = (T & 65535) | (m << 16)),
          (R = dA),
          (k = XA),
          (T = k & 65535),
          (m = k >>> 16),
          (Y = R & 65535),
          (J = R >>> 16),
          (R = g[5]),
          (k = Q[5]),
          (T += k & 65535),
          (m += k >>> 16),
          (Y += R & 65535),
          (J += R >>> 16),
          (m += T >>> 16),
          (Y += m >>> 16),
          (J += Y >>> 16),
          (g[5] = dA = (Y & 65535) | (J << 16)),
          (Q[5] = XA = (T & 65535) | (m << 16)),
          (R = FA),
          (k = zA),
          (T = k & 65535),
          (m = k >>> 16),
          (Y = R & 65535),
          (J = R >>> 16),
          (R = g[6]),
          (k = Q[6]),
          (T += k & 65535),
          (m += k >>> 16),
          (Y += R & 65535),
          (J += R >>> 16),
          (m += T >>> 16),
          (Y += m >>> 16),
          (J += Y >>> 16),
          (g[6] = FA = (Y & 65535) | (J << 16)),
          (Q[6] = zA = (T & 65535) | (m << 16)),
          (R = GA),
          (k = $A),
          (T = k & 65535),
          (m = k >>> 16),
          (Y = R & 65535),
          (J = R >>> 16),
          (R = g[7]),
          (k = Q[7]),
          (T += k & 65535),
          (m += k >>> 16),
          (Y += R & 65535),
          (J += R >>> 16),
          (m += T >>> 16),
          (Y += m >>> 16),
          (J += Y >>> 16),
          (g[7] = GA = (Y & 65535) | (J << 16)),
          (Q[7] = $A = (T & 65535) | (m << 16)),
          (Ie += 128),
          (i -= 128);
      }
      return i;
    }
    function E(g, Q, s) {
      var i = new Int32Array(8),
        o = new Int32Array(8),
        D = new Uint8Array(256),
        G,
        L = s;
      for (
        i[0] = 1779033703,
          i[1] = 3144134277,
          i[2] = 1013904242,
          i[3] = 2773480762,
          i[4] = 1359893119,
          i[5] = 2600822924,
          i[6] = 528734635,
          i[7] = 1541459225,
          o[0] = 4089235720,
          o[1] = 2227873595,
          o[2] = 4271175723,
          o[3] = 1595750129,
          o[4] = 2917565137,
          o[5] = 725511199,
          o[6] = 4215389547,
          o[7] = 327033209,
          n(i, o, Q, s),
          s %= 128,
          G = 0;
        G < s;
        G++
      )
        D[G] = Q[L - s + G];
      for (
        D[s] = 128,
          s = 256 - 128 * (s < 112 ? 1 : 0),
          D[s - 9] = 0,
          qA(D, s - 8, (L / 536870912) | 0, L << 3),
          n(i, o, D, s),
          G = 0;
        G < 8;
        G++
      )
        qA(g, 8 * G, i[G], o[G]);
      return 0;
    }
    function f(g, Q) {
      var s = e(),
        i = e(),
        o = e(),
        D = e(),
        G = e(),
        L = e(),
        q = e(),
        tA = e(),
        V = e();
      h(s, g[1], g[0]),
        h(V, Q[1], Q[0]),
        oA(s, s, V),
        ne(i, g[0], g[1]),
        ne(V, Q[0], Q[1]),
        oA(i, i, V),
        oA(o, g[3], Q[3]),
        oA(o, o, Z),
        oA(D, g[2], Q[2]),
        ne(D, D, D),
        h(G, i, s),
        h(L, D, o),
        ne(q, D, o),
        ne(tA, i, s),
        oA(g[0], G, L),
        oA(g[1], tA, q),
        oA(g[2], q, L),
        oA(g[3], G, tA);
    }
    function y(g, Q, s) {
      var i;
      for (i = 0; i < 4; i++) TA(g[i], Q[i], s);
    }
    function M(g, Q) {
      var s = e(),
        i = e(),
        o = e();
      Me(o, Q[2]),
        oA(s, Q[0], o),
        oA(i, Q[1], o),
        se(g, i),
        (g[31] ^= OA(s) << 7);
    }
    function H(g, Q, s) {
      var i, o;
      for (
        Ae(g[0], p), Ae(g[1], u), Ae(g[2], u), Ae(g[3], p), o = 255;
        o >= 0;
        --o
      )
        (i = (s[(o / 8) | 0] >> (o & 7)) & 1),
          y(g, Q, i),
          f(Q, g),
          f(g, g),
          y(g, Q, i);
    }
    function AA(g, Q) {
      var s = [e(), e(), e(), e()];
      Ae(s[0], v), Ae(s[1], nA), Ae(s[2], u), oA(s[3], v, nA), H(g, s, Q);
    }
    function aA(g, Q, s) {
      var i = new Uint8Array(64),
        o = [e(), e(), e(), e()],
        D;
      for (
        s || B(Q, 32),
          E(i, Q, 32),
          i[0] &= 248,
          i[31] &= 127,
          i[31] |= 64,
          AA(o, i),
          M(g, o),
          D = 0;
        D < 32;
        D++
      )
        Q[D + 32] = g[D];
      return 0;
    }
    var cA = new Float64Array([
      237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
    ]);
    function K(g, Q) {
      var s, i, o, D;
      for (i = 63; i >= 32; --i) {
        for (s = 0, o = i - 32, D = i - 12; o < D; ++o)
          (Q[o] += s - 16 * Q[i] * cA[o - (i - 32)]),
            (s = Math.floor((Q[o] + 128) / 256)),
            (Q[o] -= s * 256);
        (Q[o] += s), (Q[i] = 0);
      }
      for (s = 0, o = 0; o < 32; o++)
        (Q[o] += s - (Q[31] >> 4) * cA[o]), (s = Q[o] >> 8), (Q[o] &= 255);
      for (o = 0; o < 32; o++) Q[o] -= s * cA[o];
      for (i = 0; i < 32; i++) (Q[i + 1] += Q[i] >> 8), (g[i] = Q[i] & 255);
    }
    function pA(g) {
      var Q = new Float64Array(64),
        s;
      for (s = 0; s < 64; s++) Q[s] = g[s];
      for (s = 0; s < 64; s++) g[s] = 0;
      K(g, Q);
    }
    function jA(g, Q, s, i) {
      var o = new Uint8Array(64),
        D = new Uint8Array(64),
        G = new Uint8Array(64),
        L,
        q,
        tA = new Float64Array(64),
        V = [e(), e(), e(), e()];
      E(o, i, 32), (o[0] &= 248), (o[31] &= 127), (o[31] |= 64);
      var DA = s + 64;
      for (L = 0; L < s; L++) g[64 + L] = Q[L];
      for (L = 0; L < 32; L++) g[32 + L] = o[32 + L];
      for (
        E(G, g.subarray(32), s + 32), pA(G), AA(V, G), M(g, V), L = 32;
        L < 64;
        L++
      )
        g[L] = i[L];
      for (E(D, g, s + 64), pA(D), L = 0; L < 64; L++) tA[L] = 0;
      for (L = 0; L < 32; L++) tA[L] = G[L];
      for (L = 0; L < 32; L++)
        for (q = 0; q < 32; q++) tA[L + q] += D[L] * o[q];
      return K(g.subarray(32), tA), DA;
    }
    function De(g, Q) {
      var s = e(),
        i = e(),
        o = e(),
        D = e(),
        G = e(),
        L = e(),
        q = e();
      return (
        Ae(g[2], u),
        JA(g[1], Q),
        ee(o, g[1]),
        oA(D, o, U),
        h(o, o, g[2]),
        ne(D, g[2], D),
        ee(G, D),
        ee(L, G),
        oA(q, L, G),
        oA(s, q, o),
        oA(s, s, D),
        BA(s, s),
        oA(s, s, o),
        oA(s, s, D),
        oA(s, s, D),
        oA(g[0], s, D),
        ee(i, g[0]),
        oA(i, i, D),
        he(i, o) && oA(g[0], g[0], gA),
        ee(i, g[0]),
        oA(i, i, D),
        he(i, o)
          ? -1
          : (OA(g[0]) === Q[31] >> 7 && h(g[0], p, g[0]),
            oA(g[3], g[0], g[1]),
            0)
      );
    }
    function ke(g, Q, s, i) {
      var o,
        D = new Uint8Array(32),
        G = new Uint8Array(64),
        L = [e(), e(), e(), e()],
        q = [e(), e(), e(), e()];
      if (s < 64 || De(q, i)) return -1;
      for (o = 0; o < s; o++) g[o] = Q[o];
      for (o = 0; o < 32; o++) g[o + 32] = i[o];
      if (
        (E(G, g, s),
        pA(G),
        H(L, q, G),
        AA(q, Q.subarray(32)),
        f(L, q),
        M(D, L),
        (s -= 64),
        ae(Q, 0, D, 0))
      ) {
        for (o = 0; o < s; o++) g[o] = 0;
        return -1;
      }
      for (o = 0; o < s; o++) g[o] = Q[o + 64];
      return s;
    }
    var Le = 32,
      xA = 24,
      xe = 32,
      te = 16,
      VA = 32,
      mA = 32,
      Ke = 32,
      kA = 32,
      et = 32,
      Bt = xA,
      Nt = xe,
      Ft = te,
      Se = 64,
      ue = 32,
      Oe = 64,
      It = 32,
      Et = 64;
    A.lowlevel = {
      crypto_core_hsalsa20: PA,
      crypto_stream_xor: P,
      crypto_stream: vA,
      crypto_stream_salsa20_xor: QA,
      crypto_stream_salsa20: RA,
      crypto_onetimeauth: bA,
      crypto_onetimeauth_verify: UA,
      crypto_verify_16: Be,
      crypto_verify_32: ae,
      crypto_secretbox: ZA,
      crypto_secretbox_open: WA,
      crypto_scalarmult: EA,
      crypto_scalarmult_base: C,
      crypto_box_beforenm: d,
      crypto_box_afternm: F,
      crypto_box: N,
      crypto_box_open: I,
      crypto_box_keypair: c,
      crypto_hash: E,
      crypto_sign: jA,
      crypto_sign_keypair: aA,
      crypto_sign_open: ke,
      crypto_secretbox_KEYBYTES: Le,
      crypto_secretbox_NONCEBYTES: xA,
      crypto_secretbox_ZEROBYTES: xe,
      crypto_secretbox_BOXZEROBYTES: te,
      crypto_scalarmult_BYTES: VA,
      crypto_scalarmult_SCALARBYTES: mA,
      crypto_box_PUBLICKEYBYTES: Ke,
      crypto_box_SECRETKEYBYTES: kA,
      crypto_box_BEFORENMBYTES: et,
      crypto_box_NONCEBYTES: Bt,
      crypto_box_ZEROBYTES: Nt,
      crypto_box_BOXZEROBYTES: Ft,
      crypto_sign_BYTES: Se,
      crypto_sign_PUBLICKEYBYTES: ue,
      crypto_sign_SECRETKEYBYTES: Oe,
      crypto_sign_SEEDBYTES: It,
      crypto_hash_BYTES: Et,
      gf: e,
      D: U,
      L: cA,
      pack25519: se,
      unpack25519: JA,
      M: oA,
      A: ne,
      S: ee,
      Z: h,
      pow2523: BA,
      add: f,
      set25519: Ae,
      modL: K,
      scalarmult: H,
      scalarbase: AA,
    };
    function Gt(g, Q) {
      if (g.length !== Le) throw new Error("bad key size");
      if (Q.length !== xA) throw new Error("bad nonce size");
    }
    function ge(g, Q) {
      if (g.length !== Ke) throw new Error("bad public key size");
      if (Q.length !== kA) throw new Error("bad secret key size");
    }
    function le() {
      for (var g = 0; g < arguments.length; g++)
        if (!(arguments[g] instanceof Uint8Array))
          throw new TypeError("unexpected type, use Uint8Array");
    }
    function Mt(g) {
      for (var Q = 0; Q < g.length; Q++) g[Q] = 0;
    }
    (A.randomBytes = function (g) {
      var Q = new Uint8Array(g);
      return B(Q, g), Q;
    }),
      (A.secretbox = function (g, Q, s) {
        le(g, Q, s), Gt(s, Q);
        for (
          var i = new Uint8Array(xe + g.length),
            o = new Uint8Array(i.length),
            D = 0;
          D < g.length;
          D++
        )
          i[D + xe] = g[D];
        return ZA(o, i, i.length, Q, s), o.subarray(te);
      }),
      (A.secretbox.open = function (g, Q, s) {
        le(g, Q, s), Gt(s, Q);
        for (
          var i = new Uint8Array(te + g.length),
            o = new Uint8Array(i.length),
            D = 0;
          D < g.length;
          D++
        )
          i[D + te] = g[D];
        return i.length < 32 || WA(o, i, i.length, Q, s) !== 0
          ? null
          : o.subarray(xe);
      }),
      (A.secretbox.keyLength = Le),
      (A.secretbox.nonceLength = xA),
      (A.secretbox.overheadLength = te),
      (A.scalarMult = function (g, Q) {
        if ((le(g, Q), g.length !== mA)) throw new Error("bad n size");
        if (Q.length !== VA) throw new Error("bad p size");
        var s = new Uint8Array(VA);
        return EA(s, g, Q), s;
      }),
      (A.scalarMult.base = function (g) {
        if ((le(g), g.length !== mA)) throw new Error("bad n size");
        var Q = new Uint8Array(VA);
        return C(Q, g), Q;
      }),
      (A.scalarMult.scalarLength = mA),
      (A.scalarMult.groupElementLength = VA),
      (A.box = function (g, Q, s, i) {
        var o = A.box.before(s, i);
        return A.secretbox(g, Q, o);
      }),
      (A.box.before = function (g, Q) {
        le(g, Q), ge(g, Q);
        var s = new Uint8Array(et);
        return d(s, g, Q), s;
      }),
      (A.box.after = A.secretbox),
      (A.box.open = function (g, Q, s, i) {
        var o = A.box.before(s, i);
        return A.secretbox.open(g, Q, o);
      }),
      (A.box.open.after = A.secretbox.open),
      (A.box.keyPair = function () {
        var g = new Uint8Array(Ke),
          Q = new Uint8Array(kA);
        return c(g, Q), { publicKey: g, secretKey: Q };
      }),
      (A.box.keyPair.fromSecretKey = function (g) {
        if ((le(g), g.length !== kA)) throw new Error("bad secret key size");
        var Q = new Uint8Array(Ke);
        return C(Q, g), { publicKey: Q, secretKey: new Uint8Array(g) };
      }),
      (A.box.publicKeyLength = Ke),
      (A.box.secretKeyLength = kA),
      (A.box.sharedKeyLength = et),
      (A.box.nonceLength = Bt),
      (A.box.overheadLength = A.secretbox.overheadLength),
      (A.sign = function (g, Q) {
        if ((le(g, Q), Q.length !== Oe)) throw new Error("bad secret key size");
        var s = new Uint8Array(Se + g.length);
        return jA(s, g, g.length, Q), s;
      }),
      (A.sign.open = function (g, Q) {
        if ((le(g, Q), Q.length !== ue)) throw new Error("bad public key size");
        var s = new Uint8Array(g.length),
          i = ke(s, g, g.length, Q);
        if (i < 0) return null;
        for (var o = new Uint8Array(i), D = 0; D < o.length; D++) o[D] = s[D];
        return o;
      }),
      (A.sign.detached = function (g, Q) {
        for (
          var s = A.sign(g, Q), i = new Uint8Array(Se), o = 0;
          o < i.length;
          o++
        )
          i[o] = s[o];
        return i;
      }),
      (A.sign.detached.verify = function (g, Q, s) {
        if ((le(g, Q, s), Q.length !== Se))
          throw new Error("bad signature size");
        if (s.length !== ue) throw new Error("bad public key size");
        var i = new Uint8Array(Se + g.length),
          o = new Uint8Array(Se + g.length),
          D;
        for (D = 0; D < Se; D++) i[D] = Q[D];
        for (D = 0; D < g.length; D++) i[D + Se] = g[D];
        return ke(o, i, i.length, s) >= 0;
      }),
      (A.sign.keyPair = function () {
        var g = new Uint8Array(ue),
          Q = new Uint8Array(Oe);
        return aA(g, Q), { publicKey: g, secretKey: Q };
      }),
      (A.sign.keyPair.fromSecretKey = function (g) {
        if ((le(g), g.length !== Oe)) throw new Error("bad secret key size");
        for (var Q = new Uint8Array(ue), s = 0; s < Q.length; s++)
          Q[s] = g[32 + s];
        return { publicKey: Q, secretKey: new Uint8Array(g) };
      }),
      (A.sign.keyPair.fromSeed = function (g) {
        if ((le(g), g.length !== It)) throw new Error("bad seed size");
        for (
          var Q = new Uint8Array(ue), s = new Uint8Array(Oe), i = 0;
          i < 32;
          i++
        )
          s[i] = g[i];
        return aA(Q, s, !0), { publicKey: Q, secretKey: s };
      }),
      (A.sign.publicKeyLength = ue),
      (A.sign.secretKeyLength = Oe),
      (A.sign.seedLength = It),
      (A.sign.signatureLength = Se),
      (A.hash = function (g) {
        le(g);
        var Q = new Uint8Array(Et);
        return E(Q, g, g.length), Q;
      }),
      (A.hash.hashLength = Et),
      (A.verify = function (g, Q) {
        return (
          le(g, Q),
          g.length === 0 || Q.length === 0 || g.length !== Q.length
            ? !1
            : MA(g, 0, Q, 0, g.length) === 0
        );
      }),
      (A.setPRNG = function (g) {
        B = g;
      }),
      (function () {
        var g = typeof self < "u" ? self.crypto || self.msCrypto : null;
        if (g && g.getRandomValues) {
          var Q = 65536;
          A.setPRNG(function (s, i) {
            var o,
              D = new Uint8Array(i);
            for (o = 0; o < i; o += Q)
              g.getRandomValues(D.subarray(o, o + Math.min(i - o, Q)));
            for (o = 0; o < i; o++) s[o] = D[o];
            Mt(D);
          });
        } else
          typeof pg < "u" &&
            ((g = Sg),
            g &&
              g.randomBytes &&
              A.setPRNG(function (s, i) {
                var o,
                  D = g.randomBytes(i);
                for (o = 0; o < i; o++) s[o] = D[o];
                Mt(D);
              }));
      })();
  })(t.exports ? t.exports : (self.nacl = self.nacl || {}));
})(Di);
var ft = Di.exports;
function Xt(t) {
  var A;
  return new Uint8Array(
    ((A = t.match(/.{1,2}/g)) !== null && A !== void 0 ? A : []).map((e) =>
      parseInt(e, 16)
    )
  ).buffer;
}
function Xe(t) {
  return new Uint8Array(t).reduce(
    (A, e) => A + e.toString(16).padStart(2, "0"),
    ""
  );
}
const Ng = (t, A) => {
    if (t.byteLength !== A.byteLength) return !1;
    const e = new Uint8Array(t),
      B = new Uint8Array(A);
    for (let a = 0; a < e.length; a++) if (e[a] !== B[a]) return !1;
    return !0;
  },
  kr = (t) => {
    if (t <= 127) return 1;
    if (t <= 255) return 2;
    if (t <= 65535) return 3;
    if (t <= 16777215) return 4;
    throw new Error("Length too long (> 4 bytes)");
  },
  Lr = (t, A, e) => {
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
  zt = (t, A) => {
    if (t[A] < 128) return 1;
    if (t[A] === 128) throw new Error("Invalid length 0");
    if (t[A] === 129) return 2;
    if (t[A] === 130) return 3;
    if (t[A] === 131) return 4;
    throw new Error("Length too long (> 4 bytes)");
  },
  Fg = (t, A) => {
    const e = zt(t, A);
    if (e === 1) return t[A];
    if (e === 2) return t[A + 1];
    if (e === 3) return (t[A + 1] << 8) + t[A + 2];
    if (e === 4) return (t[A + 1] << 16) + (t[A + 2] << 8) + t[A + 3];
    throw new Error("Length too long (> 4 bytes)");
  };
Uint8Array.from([48, 12, 6, 10, 43, 6, 1, 4, 1, 131, 184, 67, 1, 1]);
const mr = Uint8Array.from([48, 5, 6, 3, 43, 101, 112]);
Uint8Array.from([
  48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 10,
]);
function Gg(t, A) {
  const e = 2 + kr(t.byteLength + 1),
    B = A.byteLength + e + t.byteLength;
  let a = 0;
  const w = new Uint8Array(1 + kr(B) + B);
  return (
    (w[a++] = 48),
    (a += Lr(w, a, B)),
    w.set(A, a),
    (a += A.byteLength),
    (w[a++] = 3),
    (a += Lr(w, a, t.byteLength + 1)),
    (w[a++] = 0),
    w.set(new Uint8Array(t), a),
    w
  );
}
const Mg = (t, A) => {
  let e = 0;
  const B = (u, b) => {
      if (a[e++] !== u) throw new Error("Expected: " + b);
    },
    a = new Uint8Array(t);
  if (
    (B(48, "sequence"), (e += zt(a, e)), !Ng(a.slice(e, e + A.byteLength), A))
  )
    throw new Error("Not the expected OID.");
  (e += A.byteLength), B(3, "bit string");
  const w = Fg(a, e) - 1;
  (e += zt(a, e)), B(0, "0 padding");
  const p = a.slice(e);
  if (w !== p.length)
    throw new Error(
      `DER payload mismatch: Expected length ${w} actual length ${p.length}`
    );
  return p;
};
class Ye {
  constructor(A) {
    (this.rawKey = A), (this.derKey = Ye.derEncode(A));
  }
  static from(A) {
    return this.fromDer(A.toDer());
  }
  static fromRaw(A) {
    return new Ye(A);
  }
  static fromDer(A) {
    return new Ye(this.derDecode(A));
  }
  static derEncode(A) {
    return Gg(A, mr).buffer;
  }
  static derDecode(A) {
    const e = Mg(A, mr);
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
Ye.RAW_KEY_LENGTH = 32;
class Pe extends Ir {
  constructor(A, e) {
    super(), (this._privateKey = e), (this._publicKey = Ye.from(A));
  }
  static generate(A) {
    if (A && A.length !== 32)
      throw new Error("Ed25519 Seed needs to be 32 bytes long.");
    const { publicKey: e, secretKey: B } =
      A === void 0 ? ft.sign.keyPair() : ft.sign.keyPair.fromSeed(A);
    return new this(Ye.fromRaw(e), B);
  }
  static fromParsedJson(A) {
    const [e, B] = A;
    return new Pe(Ye.fromDer(Xt(e)), Xt(B));
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
    return new Pe(Ye.fromRaw(A), e);
  }
  static fromSecretKey(A) {
    const e = ft.sign.keyPair.fromSecretKey(new Uint8Array(A));
    return Pe.fromKeyPair(e.publicKey, e.secretKey);
  }
  toJSON() {
    return [Xe(this._publicKey.toDer()), Xe(this._privateKey)];
  }
  getKeyPair() {
    return { secretKey: this._privateKey, publicKey: this._publicKey };
  }
  getPublicKey() {
    return this._publicKey;
  }
  async sign(A) {
    const e = new Uint8Array(A);
    return ft.sign.detached(e, new Uint8Array(this._privateKey)).buffer;
  }
}
class Qr extends Error {
  constructor(A) {
    super(A), (this.message = A), Object.setPrototypeOf(this, Qr.prototype);
  }
}
function Yr(t) {
  if (t) return t;
  if (typeof crypto < "u" && crypto.subtle) return crypto.subtle;
  throw new Qr(
    "Global crypto was not available and none was provided. Please inlcude a SubtleCrypto implementation. See https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto"
  );
}
class ut extends Ir {
  constructor(A, e, B) {
    super(), (this._keyPair = A), (this._derKey = e), (this._subtleCrypto = B);
  }
  static async generate(A) {
    const {
        extractable: e = !1,
        keyUsages: B = ["sign", "verify"],
        subtleCrypto: a,
      } = A ?? {},
      w = Yr(a),
      p = await w.generateKey({ name: "ECDSA", namedCurve: "P-256" }, e, B),
      u = await w.exportKey("spki", p.publicKey);
    return new this(p, u, w);
  }
  static async fromKeyPair(A, e) {
    const B = Yr(e),
      a = await B.exportKey("spki", A.publicKey);
    return new ut(A, a, B);
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
var bg = function (t, A) {
  var e = {};
  for (var B in t)
    Object.prototype.hasOwnProperty.call(t, B) &&
      A.indexOf(B) < 0 &&
      (e[B] = t[B]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, B = Object.getOwnPropertySymbols(t); a < B.length; a++)
      A.indexOf(B[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, B[a]) &&
        (e[B[a]] = t[B[a]]);
  return e;
};
const Ug = new TextEncoder().encode("ic-request-auth-delegation"),
  Rg = new TextEncoder().encode(`
ic-request`);
function mt(t) {
  if (typeof t != "string" || t.length < 64)
    throw new Error("Invalid public key.");
  return Xt(t);
}
class fr {
  constructor(A, e, B) {
    (this.pubkey = A), (this.expiration = e), (this.targets = B);
  }
  toCBOR() {
    return ye.value.map(
      Object.assign(
        {
          pubkey: ye.value.bytes(this.pubkey),
          expiration: ye.value.u64(this.expiration.toString(16), 16),
        },
        this.targets && {
          targets: ye.value.array(
            this.targets.map((A) => ye.value.bytes(A.toUint8Array()))
          ),
        }
      )
    );
  }
  toJSON() {
    return Object.assign(
      { expiration: this.expiration.toString(16), pubkey: Xe(this.pubkey) },
      this.targets && { targets: this.targets.map((A) => A.toHex()) }
    );
  }
}
async function kg(t, A, e, B) {
  const a = new fr(A.toDer(), BigInt(+e) * BigInt(1e6), B),
    w = new Uint8Array([...Ug, ...new Uint8Array(Br(a))]),
    p = await t.sign(w);
  return { delegation: a, signature: p };
}
class rt {
  constructor(A, e) {
    (this.delegations = A), (this.publicKey = e);
  }
  static async create(A, e, B = new Date(Date.now() + 15 * 60 * 1e3), a = {}) {
    var w, p;
    const u = await kg(A, e, B, a.targets);
    return new rt(
      [
        ...(((w = a.previous) === null || w === void 0
          ? void 0
          : w.delegations) || []),
        u,
      ],
      ((p = a.previous) === null || p === void 0 ? void 0 : p.publicKey) ||
        A.getPublicKey().toDer()
    );
  }
  static fromJSON(A) {
    const { publicKey: e, delegations: B } =
      typeof A == "string" ? JSON.parse(A) : A;
    if (!Array.isArray(B)) throw new Error("Invalid delegations.");
    const a = B.map((w) => {
      const { delegation: p, signature: u } = w,
        { pubkey: b, expiration: U, targets: Z } = p;
      if (Z !== void 0 && !Array.isArray(Z))
        throw new Error("Invalid targets.");
      return {
        delegation: new fr(
          mt(b),
          BigInt(`0x${U}`),
          Z &&
            Z.map((v) => {
              if (typeof v != "string") throw new Error("Invalid target.");
              return qe.fromHex(v);
            })
        ),
        signature: mt(u),
      };
    });
    return new this(a, mt(e));
  }
  static fromDelegations(A, e) {
    return new this(A, e);
  }
  toJSON() {
    return {
      delegations: this.delegations.map((A) => {
        const { delegation: e, signature: B } = A,
          { targets: a } = e;
        return {
          delegation: Object.assign(
            { expiration: e.expiration.toString(16), pubkey: Xe(e.pubkey) },
            a && { targets: a.map((w) => w.toHex()) }
          ),
          signature: Xe(B),
        };
      }),
      publicKey: Xe(this.publicKey),
    };
  }
}
class vr extends Ir {
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
      B = bg(A, ["body"]),
      a = await Br(e);
    return Object.assign(Object.assign({}, B), {
      body: {
        content: e,
        sender_sig: await this.sign(
          new Uint8Array([...Rg, ...new Uint8Array(a)])
        ),
        sender_delegation: this._delegation.delegations,
        sender_pubkey: this._delegation.publicKey,
      },
    });
  }
}
function Si(t, A) {
  for (const { delegation: a } of t.delegations)
    if (+new Date(Number(a.expiration / BigInt(1e6))) <= +Date.now()) return !1;
  const e = [],
    B = A?.scope;
  B &&
    (Array.isArray(B)
      ? e.push(...B.map((a) => (typeof a == "string" ? qe.fromText(a) : a)))
      : e.push(typeof B == "string" ? qe.fromText(B) : B));
  for (const a of e) {
    const w = a.toText();
    for (const { delegation: p } of t.delegations) {
      if (p.targets === void 0) continue;
      let u = !0;
      for (const b of p.targets)
        if (b.toText() === w) {
          u = !1;
          break;
        }
      if (u) return !1;
    }
  }
  return !0;
}
var _r;
(function (t) {
  t[(t.ECDSA_WITH_SHA256 = -7)] = "ECDSA_WITH_SHA256";
})(_r || (_r = {}));
const Tr = ["mousedown", "mousemove", "keydown", "touchstart", "wheel"];
class Jr {
  constructor(A = {}) {
    var e;
    (this.callbacks = []),
      (this.idleTimeout = 10 * 60 * 1e3),
      (this.timeoutID = void 0);
    const { onIdle: B, idleTimeout: a = 10 * 60 * 1e3 } = A || {};
    (this.callbacks = B ? [B] : []), (this.idleTimeout = a);
    const w = this._resetTimer.bind(this);
    window.addEventListener("load", w, !0),
      Tr.forEach(function (u) {
        document.addEventListener(u, w, !0);
      });
    const p = (u, b) => {
      let U;
      return (...Z) => {
        const v = this,
          nA = function () {
            (U = void 0), u.apply(v, Z);
          };
        clearTimeout(U), (U = window.setTimeout(nA, b));
      };
    };
    if (A?.captureScroll) {
      const u = p(
        w,
        (e = A?.scrollDebounce) !== null && e !== void 0 ? e : 100
      );
      window.addEventListener("scroll", u, !0);
    }
    w();
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
    Tr.forEach(function (e) {
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
const Lg = (t, A) => A.some((e) => t instanceof e);
let Hr, qr;
function mg() {
  return (
    Hr ||
    (Hr = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function Yg() {
  return (
    qr ||
    (qr = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Ni = new WeakMap(),
  $t = new WeakMap(),
  Fi = new WeakMap(),
  Yt = new WeakMap(),
  or = new WeakMap();
function vg(t) {
  const A = new Promise((e, B) => {
    const a = () => {
        t.removeEventListener("success", w), t.removeEventListener("error", p);
      },
      w = () => {
        e(He(t.result)), a();
      },
      p = () => {
        B(t.error), a();
      };
    t.addEventListener("success", w), t.addEventListener("error", p);
  });
  return (
    A.then((e) => {
      e instanceof IDBCursor && Ni.set(e, t);
    }).catch(() => {}),
    or.set(A, t),
    A
  );
}
function _g(t) {
  if ($t.has(t)) return;
  const A = new Promise((e, B) => {
    const a = () => {
        t.removeEventListener("complete", w),
          t.removeEventListener("error", p),
          t.removeEventListener("abort", p);
      },
      w = () => {
        e(), a();
      },
      p = () => {
        B(t.error || new DOMException("AbortError", "AbortError")), a();
      };
    t.addEventListener("complete", w),
      t.addEventListener("error", p),
      t.addEventListener("abort", p);
  });
  $t.set(t, A);
}
let Ar = {
  get(t, A, e) {
    if (t instanceof IDBTransaction) {
      if (A === "done") return $t.get(t);
      if (A === "objectStoreNames") return t.objectStoreNames || Fi.get(t);
      if (A === "store")
        return e.objectStoreNames[1]
          ? void 0
          : e.objectStore(e.objectStoreNames[0]);
    }
    return He(t[A]);
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
function Tg(t) {
  Ar = t(Ar);
}
function Jg(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (A, ...e) {
        const B = t.call(vt(this), A, ...e);
        return Fi.set(B, A.sort ? A.sort() : [A]), He(B);
      }
    : Yg().includes(t)
    ? function (...A) {
        return t.apply(vt(this), A), He(Ni.get(this));
      }
    : function (...A) {
        return He(t.apply(vt(this), A));
      };
}
function Hg(t) {
  return typeof t == "function"
    ? Jg(t)
    : (t instanceof IDBTransaction && _g(t),
      Lg(t, mg()) ? new Proxy(t, Ar) : t);
}
function He(t) {
  if (t instanceof IDBRequest) return vg(t);
  if (Yt.has(t)) return Yt.get(t);
  const A = Hg(t);
  return A !== t && (Yt.set(t, A), or.set(A, t)), A;
}
const vt = (t) => or.get(t);
function qg(t, A, { blocked: e, upgrade: B, blocking: a, terminated: w } = {}) {
  const p = indexedDB.open(t, A),
    u = He(p);
  return (
    B &&
      p.addEventListener("upgradeneeded", (b) => {
        B(He(p.result), b.oldVersion, b.newVersion, He(p.transaction), b);
      }),
    e && p.addEventListener("blocked", (b) => e(b.oldVersion, b.newVersion, b)),
    u
      .then((b) => {
        w && b.addEventListener("close", () => w()),
          a &&
            b.addEventListener("versionchange", (U) =>
              a(U.oldVersion, U.newVersion, U)
            );
      })
      .catch(() => {}),
    u
  );
}
const Kg = ["get", "getKey", "getAll", "getAllKeys", "count"],
  Og = ["put", "add", "delete", "clear"],
  _t = new Map();
function Kr(t, A) {
  if (!(t instanceof IDBDatabase && !(A in t) && typeof A == "string")) return;
  if (_t.get(A)) return _t.get(A);
  const e = A.replace(/FromIndex$/, ""),
    B = A !== e,
    a = Og.includes(e);
  if (
    !(e in (B ? IDBIndex : IDBObjectStore).prototype) ||
    !(a || Kg.includes(e))
  )
    return;
  const w = async function (p, ...u) {
    const b = this.transaction(p, a ? "readwrite" : "readonly");
    let U = b.store;
    return (
      B && (U = U.index(u.shift())),
      (await Promise.all([U[e](...u), a && b.done]))[0]
    );
  };
  return _t.set(A, w), w;
}
Tg((t) => ({
  ...t,
  get: (A, e, B) => Kr(A, e) || t.get(A, e, B),
  has: (A, e) => !!Kr(A, e) || t.has(A, e),
}));
const Gi = "auth-client-db",
  Mi = "ic-keyval",
  Wg = async (t = Gi, A = Mi, e) => (
    bi &&
      localStorage != null &&
      localStorage.getItem(me) &&
      (localStorage.removeItem(me), localStorage.removeItem(Je)),
    await qg(t, e, {
      upgrade: (B) => {
        B.objectStoreNames,
          B.objectStoreNames.contains(A) && B.clear(A),
          B.createObjectStore(A);
      },
    })
  );
async function Pg(t, A, e) {
  return await t.get(A, e);
}
async function jg(t, A, e, B) {
  return await t.put(A, B, e);
}
async function Zg(t, A, e) {
  return await t.delete(A, e);
}
class Cr {
  constructor(A, e) {
    (this._db = A), (this._storeName = e);
  }
  static async create(A) {
    const { dbName: e = Gi, storeName: B = Mi, version: a = 1 } = A ?? {},
      w = await Wg(e, B, a);
    return new Cr(w, B);
  }
  async set(A, e) {
    return await jg(this._db, this._storeName, A, e);
  }
  async get(A) {
    var e;
    return (e = await Pg(this._db, this._storeName, A)) !== null && e !== void 0
      ? e
      : null;
  }
  async remove(A) {
    return await Zg(this._db, this._storeName, A);
  }
}
const Je = "identity",
  me = "delegation",
  Vg = "iv",
  Xg = 1,
  bi = typeof window < "u";
class zg {
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
class Ui {
  get _db() {
    return new Promise((A) => {
      if (this.initializedDb) {
        A(this.initializedDb);
        return;
      }
      Cr.create({ version: Xg }).then((e) => {
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
const $g = "https://identity.ic0.app",
  AB = "#authorize",
  Tt = "ECDSA",
  Jt = "Ed25519",
  eB = 500,
  tB = "UserInterrupt";
class rB {
  constructor(A, e, B, a, w, p, u, b) {
    var U;
    (this._identity = A),
      (this._key = e),
      (this._chain = B),
      (this._storage = a),
      (this.idleManager = w),
      (this._createOptions = p),
      (this._idpWindow = u),
      (this._eventHandler = b);
    const Z = this.logout.bind(this),
      v = p?.idleOptions;
    !v?.onIdle &&
      !v?.disableDefaultIdleCallback &&
      ((U = this.idleManager) === null ||
        U === void 0 ||
        U.registerCallback(() => {
          Z(), location.reload();
        }));
  }
  static async create(A = {}) {
    var e, B, a;
    const w = (e = A.storage) !== null && e !== void 0 ? e : new Ui(),
      p = (B = A.keyType) !== null && B !== void 0 ? B : Tt;
    let u = null;
    if (A.identity) u = A.identity;
    else {
      let v = await w.get(Je);
      if (!v && bi)
        try {
          const nA = new zg(),
            gA = await nA.get(me),
            qA = await nA.get(Je);
          gA &&
            qA &&
            p === Tt &&
            (console.log(
              "Discovered an identity stored in localstorage. Migrating to IndexedDB"
            ),
            await w.set(me, gA),
            await w.set(Je, qA),
            (v = gA),
            await nA.remove(me),
            await nA.remove(Je));
        } catch (nA) {
          console.error(
            "error while attempting to recover localstorage: " + nA
          );
        }
      if (v)
        try {
          typeof v == "object"
            ? p === Jt && typeof v == "string"
              ? (u = await Pe.fromJSON(v))
              : (u = await ut.fromKeyPair(v))
            : typeof v == "string" && (u = Pe.fromJSON(v));
        } catch {}
    }
    let b = new Fr(),
      U = null;
    if (u)
      try {
        const v = await w.get(me);
        if (typeof v == "object" && v !== null)
          throw new Error(
            "Delegation chain is incorrectly stored. A delegation chain should be stored as a string."
          );
        A.identity
          ? (b = A.identity)
          : v &&
            ((U = rt.fromJSON(v)),
            Si(U) ? (b = vr.fromDelegation(u, U)) : (await Ht(w), (u = null)));
      } catch (v) {
        console.error(v), await Ht(w), (u = null);
      }
    let Z;
    return (
      !((a = A.idleOptions) === null || a === void 0) && a.disableIdle
        ? (Z = void 0)
        : (U || A.identity) && (Z = Jr.create(A.idleOptions)),
      u ||
        (p === Jt
          ? ((u = await Pe.generate()),
            await w.set(Je, JSON.stringify(u.toJSON())))
          : (A.storage &&
              p === Tt &&
              console.warn(
                `You are using a custom storage provider that may not support CryptoKey storage. If you are using a custom storage provider that does not support CryptoKey storage, you should use '${Jt}' as the key type, as it can serialize to a string`
              ),
            (u = await ut.generate()),
            await w.set(Je, u.getKeyPair()))),
      new this(b, u, U, w, Z, A)
    );
  }
  async _handleSuccess(A, e) {
    var B, a, w;
    const p = A.delegations.map((U) => ({
        delegation: new fr(
          U.delegation.pubkey,
          U.delegation.expiration,
          U.delegation.targets
        ),
        signature: U.signature.buffer,
      })),
      u = rt.fromDelegations(p, A.userPublicKey.buffer),
      b = this._key;
    if (b) {
      if (
        ((this._chain = u),
        (this._identity = vr.fromDelegation(b, this._chain)),
        (B = this._idpWindow) === null || B === void 0 || B.close(),
        !this.idleManager)
      ) {
        const U =
          (a = this._createOptions) === null || a === void 0
            ? void 0
            : a.idleOptions;
        (this.idleManager = Jr.create(U)),
          !U?.onIdle &&
            !U?.disableDefaultIdleCallback &&
            ((w = this.idleManager) === null ||
              w === void 0 ||
              w.registerCallback(() => {
                this.logout(), location.reload();
              }));
      }
      this._removeEventListener(),
        delete this._idpWindow,
        this._chain &&
          (await this._storage.set(me, JSON.stringify(this._chain.toJSON()))),
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
    var e, B, a, w;
    const p = BigInt(8) * BigInt(36e11),
      u = new URL(
        ((e = A?.identityProvider) === null || e === void 0
          ? void 0
          : e.toString()) || $g
      );
    (u.hash = AB),
      (B = this._idpWindow) === null || B === void 0 || B.close(),
      this._removeEventListener(),
      (this._eventHandler = this._getEventHandler(
        u,
        Object.assign(
          {
            maxTimeToLive:
              (a = A?.maxTimeToLive) !== null && a !== void 0 ? a : p,
          },
          A
        )
      )),
      window.addEventListener("message", this._eventHandler),
      (this._idpWindow =
        (w = window.open(
          u.toString(),
          "idpWindow",
          A?.windowOpenerFeatures
        )) !== null && w !== void 0
          ? w
          : void 0);
    const b = () => {
      this._idpWindow &&
        (this._idpWindow.closed
          ? this._handleFailure(tB, A?.onError)
          : setTimeout(b, eB));
    };
    b();
  }
  _getEventHandler(A, e) {
    return async (B) => {
      var a, w, p;
      if (B.origin !== A.origin) {
        console.warn(
          `WARNING: expected origin '${A.origin}', got '${B.origin}' (ignoring)`
        );
        return;
      }
      const u = B.data;
      switch (u.kind) {
        case "authorize-ready": {
          const b = {
            kind: "authorize-client",
            sessionPublicKey: new Uint8Array(
              (a = this._key) === null || a === void 0
                ? void 0
                : a.getPublicKey().toDer()
            ),
            maxTimeToLive: e?.maxTimeToLive,
            derivationOrigin:
              (w = e?.derivationOrigin) === null || w === void 0
                ? void 0
                : w.toString(),
          };
          (p = this._idpWindow) === null ||
            p === void 0 ||
            p.postMessage(b, A.origin);
          break;
        }
        case "authorize-client-success":
          try {
            await this._handleSuccess(u, e?.onSuccess);
          } catch (b) {
            this._handleFailure(b.message, e?.onError);
          }
          break;
        case "authorize-client-failure":
          this._handleFailure(u.text, e?.onError);
          break;
      }
    };
  }
  _handleFailure(A, e) {
    var B;
    (B = this._idpWindow) === null || B === void 0 || B.close(),
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
      (await Ht(this._storage),
      (this._identity = new Fr()),
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
async function Ht(t) {
  await t.remove(Je), await t.remove(me), await t.remove(Vg);
}
const iB = () =>
  rB.create({
    idleOptions: { disableIdle: !0, disableDefaultIdleCallback: !0 },
  });
onmessage = ({ data: t }) => {
  const { msg: A } = t;
  switch (A) {
    case "startIdleTimer":
      nB();
      return;
    case "stopIdleTimer":
      Ri();
      return;
  }
};
let Ct;
const nB = () => (Ct = setInterval(async () => await gB(), ki)),
  Ri = () => {
    Ct && (clearInterval(Ct), (Ct = void 0));
  },
  gB = async () => {
    const [t, A] = await Promise.all([BB(), IB()]);
    if (t && A.valid && A.delegation !== null) {
      aB(A.delegation);
      return;
    }
    EB();
  },
  BB = async () => (await iB()).isAuthenticated(),
  IB = async () => {
    const A = await new Ui().get(me),
      e = A !== null ? rt.fromJSON(A) : null;
    return { valid: e !== null && Si(e), delegation: e };
  },
  EB = () => {
    Ri(), postMessage({ msg: "signOutIdleTimer" });
  },
  aB = (t) => {
    const A = t.delegations[0]?.delegation.expiration;
    if (A === void 0) return;
    const e = new Date(Number(A / BigInt(1e6))).getTime() - Date.now();
    postMessage({
      msg: "delegationRemainingTime",
      data: { authRemainingTime: e },
    });
  };
