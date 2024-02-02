BigInt(60 * 60 * 1e3 * 1e3 * 1e3 * 24 * 14);
const Xi = 1e3;
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
function zi(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var $i = {},
  Ft = {};
Ft.byteLength = en;
Ft.toByteArray = nn;
Ft.fromByteArray = In;
var ZA = [],
  _A = [],
  An = typeof Uint8Array < "u" ? Uint8Array : Array,
  Ae = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ct = 0, tn = Ae.length; ct < tn; ++ct)
  (ZA[ct] = Ae[ct]), (_A[Ae.charCodeAt(ct)] = ct);
_A["-".charCodeAt(0)] = 62;
_A["_".charCodeAt(0)] = 63;
function Rr(t) {
  var A = t.length;
  if (A % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = t.indexOf("=");
  e === -1 && (e = A);
  var g = e === A ? 0 : 4 - (e % 4);
  return [e, g];
}
function en(t) {
  var A = Rr(t),
    e = A[0],
    g = A[1];
  return ((e + g) * 3) / 4 - g;
}
function rn(t, A, e) {
  return ((A + e) * 3) / 4 - e;
}
function nn(t) {
  var A,
    e = Rr(t),
    g = e[0],
    I = e[1],
    Q = new An(rn(t, g, I)),
    h = 0,
    o = I > 0 ? g - 4 : g,
    w;
  for (w = 0; w < o; w += 4)
    (A =
      (_A[t.charCodeAt(w)] << 18) |
      (_A[t.charCodeAt(w + 1)] << 12) |
      (_A[t.charCodeAt(w + 2)] << 6) |
      _A[t.charCodeAt(w + 3)]),
      (Q[h++] = (A >> 16) & 255),
      (Q[h++] = (A >> 8) & 255),
      (Q[h++] = A & 255);
  return (
    I === 2 &&
      ((A = (_A[t.charCodeAt(w)] << 2) | (_A[t.charCodeAt(w + 1)] >> 4)),
      (Q[h++] = A & 255)),
    I === 1 &&
      ((A =
        (_A[t.charCodeAt(w)] << 10) |
        (_A[t.charCodeAt(w + 1)] << 4) |
        (_A[t.charCodeAt(w + 2)] >> 2)),
      (Q[h++] = (A >> 8) & 255),
      (Q[h++] = A & 255)),
    Q
  );
}
function gn(t) {
  return (
    ZA[(t >> 18) & 63] + ZA[(t >> 12) & 63] + ZA[(t >> 6) & 63] + ZA[t & 63]
  );
}
function Bn(t, A, e) {
  for (var g, I = [], Q = A; Q < e; Q += 3)
    (g =
      ((t[Q] << 16) & 16711680) + ((t[Q + 1] << 8) & 65280) + (t[Q + 2] & 255)),
      I.push(gn(g));
  return I.join("");
}
function In(t) {
  for (
    var A, e = t.length, g = e % 3, I = [], Q = 16383, h = 0, o = e - g;
    h < o;
    h += Q
  )
    I.push(Bn(t, h, h + Q > o ? o : h + Q));
  return (
    g === 1
      ? ((A = t[e - 1]), I.push(ZA[A >> 2] + ZA[(A << 4) & 63] + "=="))
      : g === 2 &&
        ((A = (t[e - 2] << 8) + t[e - 1]),
        I.push(ZA[A >> 10] + ZA[(A >> 4) & 63] + ZA[(A << 2) & 63] + "=")),
    I.join("")
  );
}
var Nt = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ Nt.read =
  function (t, A, e, g, I) {
    var Q,
      h,
      o = I * 8 - g - 1,
      w = (1 << o) - 1,
      D = w >> 1,
      G = -7,
      M = e ? I - 1 : 0,
      k = e ? -1 : 1,
      Y = t[A + M];
    for (
      M += k, Q = Y & ((1 << -G) - 1), Y >>= -G, G += o;
      G > 0;
      Q = Q * 256 + t[A + M], M += k, G -= 8
    );
    for (
      h = Q & ((1 << -G) - 1), Q >>= -G, G += g;
      G > 0;
      h = h * 256 + t[A + M], M += k, G -= 8
    );
    if (Q === 0) Q = 1 - D;
    else {
      if (Q === w) return h ? NaN : (Y ? -1 : 1) * (1 / 0);
      (h = h + Math.pow(2, g)), (Q = Q - D);
    }
    return (Y ? -1 : 1) * h * Math.pow(2, Q - g);
  };
Nt.write = function (t, A, e, g, I, Q) {
  var h,
    o,
    w,
    D = Q * 8 - I - 1,
    G = (1 << D) - 1,
    M = G >> 1,
    k = I === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    Y = g ? 0 : Q - 1,
    X = g ? 1 : -1,
    V = A < 0 || (A === 0 && 1 / A < 0) ? 1 : 0;
  for (
    A = Math.abs(A),
      isNaN(A) || A === 1 / 0
        ? ((o = isNaN(A) ? 1 : 0), (h = G))
        : ((h = Math.floor(Math.log(A) / Math.LN2)),
          A * (w = Math.pow(2, -h)) < 1 && (h--, (w *= 2)),
          h + M >= 1 ? (A += k / w) : (A += k * Math.pow(2, 1 - M)),
          A * w >= 2 && (h++, (w /= 2)),
          h + M >= G
            ? ((o = 0), (h = G))
            : h + M >= 1
            ? ((o = (A * w - 1) * Math.pow(2, I)), (h = h + M))
            : ((o = A * Math.pow(2, M - 1) * Math.pow(2, I)), (h = 0)));
    I >= 8;
    t[e + Y] = o & 255, Y += X, o /= 256, I -= 8
  );
  for (
    h = (h << I) | o, D += I;
    D > 0;
    t[e + Y] = h & 255, Y += X, h /= 256, D -= 8
  );
  t[e + Y - X] |= V * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ (function (t) {
  const A = Ft,
    e = Nt,
    g =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  (t.Buffer = o), (t.SlowBuffer = gA), (t.INSPECT_MAX_BYTES = 50);
  const I = 2147483647;
  (t.kMaxLength = I),
    (o.TYPED_ARRAY_SUPPORT = Q()),
    !o.TYPED_ARRAY_SUPPORT &&
      typeof console < "u" &&
      typeof console.error == "function" &&
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
  function Q() {
    try {
      const E = new Uint8Array(1),
        n = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(n, Uint8Array.prototype),
        Object.setPrototypeOf(E, n),
        E.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(o.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (o.isBuffer(this)) return this.buffer;
    },
  }),
    Object.defineProperty(o.prototype, "offset", {
      enumerable: !0,
      get: function () {
        if (o.isBuffer(this)) return this.byteOffset;
      },
    });
  function h(E) {
    if (E > I)
      throw new RangeError(
        'The value "' + E + '" is invalid for option "size"'
      );
    const n = new Uint8Array(E);
    return Object.setPrototypeOf(n, o.prototype), n;
  }
  function o(E, n, B) {
    if (typeof E == "number") {
      if (typeof n == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return M(E);
    }
    return w(E, n, B);
  }
  o.poolSize = 8192;
  function w(E, n, B) {
    if (typeof E == "string") return k(E, n);
    if (ArrayBuffer.isView(E)) return X(E);
    if (E == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof E
      );
    if (
      m(E, ArrayBuffer) ||
      (E && m(E.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (m(E, SharedArrayBuffer) || (E && m(E.buffer, SharedArrayBuffer))))
    )
      return V(E, n, B);
    if (typeof E == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const l = E.valueOf && E.valueOf();
    if (l != null && l !== E) return o.from(l, n, B);
    const S = eA(E);
    if (S) return S;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof E[Symbol.toPrimitive] == "function"
    )
      return o.from(E[Symbol.toPrimitive]("string"), n, B);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof E
    );
  }
  (o.from = function (E, n, B) {
    return w(E, n, B);
  }),
    Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(o, Uint8Array);
  function D(E) {
    if (typeof E != "number")
      throw new TypeError('"size" argument must be of type number');
    if (E < 0)
      throw new RangeError(
        'The value "' + E + '" is invalid for option "size"'
      );
  }
  function G(E, n, B) {
    return (
      D(E),
      E <= 0
        ? h(E)
        : n !== void 0
        ? typeof B == "string"
          ? h(E).fill(n, B)
          : h(E).fill(n)
        : h(E)
    );
  }
  o.alloc = function (E, n, B) {
    return G(E, n, B);
  };
  function M(E) {
    return D(E), h(E < 0 ? 0 : lA(E) | 0);
  }
  (o.allocUnsafe = function (E) {
    return M(E);
  }),
    (o.allocUnsafeSlow = function (E) {
      return M(E);
    });
  function k(E, n) {
    if (((typeof n != "string" || n === "") && (n = "utf8"), !o.isEncoding(n)))
      throw new TypeError("Unknown encoding: " + n);
    const B = rA(E, n) | 0;
    let l = h(B);
    const S = l.write(E, n);
    return S !== B && (l = l.slice(0, S)), l;
  }
  function Y(E) {
    const n = E.length < 0 ? 0 : lA(E.length) | 0,
      B = h(n);
    for (let l = 0; l < n; l += 1) B[l] = E[l] & 255;
    return B;
  }
  function X(E) {
    if (m(E, Uint8Array)) {
      const n = new Uint8Array(E);
      return V(n.buffer, n.byteOffset, n.byteLength);
    }
    return Y(E);
  }
  function V(E, n, B) {
    if (n < 0 || E.byteLength < n)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (E.byteLength < n + (B || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let l;
    return (
      n === void 0 && B === void 0
        ? (l = new Uint8Array(E))
        : B === void 0
        ? (l = new Uint8Array(E, n))
        : (l = new Uint8Array(E, n, B)),
      Object.setPrototypeOf(l, o.prototype),
      l
    );
  }
  function eA(E) {
    if (o.isBuffer(E)) {
      const n = lA(E.length) | 0,
        B = h(n);
      return B.length === 0 || E.copy(B, 0, 0, n), B;
    }
    if (E.length !== void 0)
      return typeof E.length != "number" || b(E.length) ? h(0) : Y(E);
    if (E.type === "Buffer" && Array.isArray(E.data)) return Y(E.data);
  }
  function lA(E) {
    if (E >= I)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          I.toString(16) +
          " bytes"
      );
    return E | 0;
  }
  function gA(E) {
    return +E != E && (E = 0), o.alloc(+E);
  }
  (o.isBuffer = function (n) {
    return n != null && n._isBuffer === !0 && n !== o.prototype;
  }),
    (o.compare = function (n, B) {
      if (
        (m(n, Uint8Array) && (n = o.from(n, n.offset, n.byteLength)),
        m(B, Uint8Array) && (B = o.from(B, B.offset, B.byteLength)),
        !o.isBuffer(n) || !o.isBuffer(B))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (n === B) return 0;
      let l = n.length,
        S = B.length;
      for (let R = 0, U = Math.min(l, S); R < U; ++R)
        if (n[R] !== B[R]) {
          (l = n[R]), (S = B[R]);
          break;
        }
      return l < S ? -1 : S < l ? 1 : 0;
    }),
    (o.isEncoding = function (n) {
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
    (o.concat = function (n, B) {
      if (!Array.isArray(n))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (n.length === 0) return o.alloc(0);
      let l;
      if (B === void 0) for (B = 0, l = 0; l < n.length; ++l) B += n[l].length;
      const S = o.allocUnsafe(B);
      let R = 0;
      for (l = 0; l < n.length; ++l) {
        let U = n[l];
        if (m(U, Uint8Array))
          R + U.length > S.length
            ? (o.isBuffer(U) || (U = o.from(U)), U.copy(S, R))
            : Uint8Array.prototype.set.call(S, U, R);
        else if (o.isBuffer(U)) U.copy(S, R);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        R += U.length;
      }
      return S;
    });
  function rA(E, n) {
    if (o.isBuffer(E)) return E.length;
    if (ArrayBuffer.isView(E) || m(E, ArrayBuffer)) return E.byteLength;
    if (typeof E != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof E
      );
    const B = E.length,
      l = arguments.length > 2 && arguments[2] === !0;
    if (!l && B === 0) return 0;
    let S = !1;
    for (;;)
      switch (n) {
        case "ascii":
        case "latin1":
        case "binary":
          return B;
        case "utf8":
        case "utf-8":
          return r(E).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return B * 2;
        case "hex":
          return B >>> 1;
        case "base64":
          return c(E).length;
        default:
          if (S) return l ? -1 : r(E).length;
          (n = ("" + n).toLowerCase()), (S = !0);
      }
  }
  o.byteLength = rA;
  function xA(E, n, B) {
    let l = !1;
    if (
      ((n === void 0 || n < 0) && (n = 0),
      n > this.length ||
        ((B === void 0 || B > this.length) && (B = this.length), B <= 0) ||
        ((B >>>= 0), (n >>>= 0), B <= n))
    )
      return "";
    for (E || (E = "utf8"); ; )
      switch (E) {
        case "hex":
          return L(this, n, B);
        case "utf8":
        case "utf-8":
          return SA(this, n, B);
        case "ascii":
          return mA(this, n, B);
        case "latin1":
        case "binary":
          return J(this, n, B);
        case "base64":
          return sA(this, n, B);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return P(this, n, B);
        default:
          if (l) throw new TypeError("Unknown encoding: " + E);
          (E = (E + "").toLowerCase()), (l = !0);
      }
  }
  o.prototype._isBuffer = !0;
  function O(E, n, B) {
    const l = E[n];
    (E[n] = E[B]), (E[B] = l);
  }
  (o.prototype.swap16 = function () {
    const n = this.length;
    if (n % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let B = 0; B < n; B += 2) O(this, B, B + 1);
    return this;
  }),
    (o.prototype.swap32 = function () {
      const n = this.length;
      if (n % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let B = 0; B < n; B += 4) O(this, B, B + 3), O(this, B + 1, B + 2);
      return this;
    }),
    (o.prototype.swap64 = function () {
      const n = this.length;
      if (n % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let B = 0; B < n; B += 8)
        O(this, B, B + 7),
          O(this, B + 1, B + 6),
          O(this, B + 2, B + 5),
          O(this, B + 3, B + 4);
      return this;
    }),
    (o.prototype.toString = function () {
      const n = this.length;
      return n === 0
        ? ""
        : arguments.length === 0
        ? SA(this, 0, n)
        : xA.apply(this, arguments);
    }),
    (o.prototype.toLocaleString = o.prototype.toString),
    (o.prototype.equals = function (n) {
      if (!o.isBuffer(n)) throw new TypeError("Argument must be a Buffer");
      return this === n ? !0 : o.compare(this, n) === 0;
    }),
    (o.prototype.inspect = function () {
      let n = "";
      const B = t.INSPECT_MAX_BYTES;
      return (
        (n = this.toString("hex", 0, B)
          .replace(/(.{2})/g, "$1 ")
          .trim()),
        this.length > B && (n += " ... "),
        "<Buffer " + n + ">"
      );
    }),
    g && (o.prototype[g] = o.prototype.inspect),
    (o.prototype.compare = function (n, B, l, S, R) {
      if (
        (m(n, Uint8Array) && (n = o.from(n, n.offset, n.byteLength)),
        !o.isBuffer(n))
      )
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof n
        );
      if (
        (B === void 0 && (B = 0),
        l === void 0 && (l = n ? n.length : 0),
        S === void 0 && (S = 0),
        R === void 0 && (R = this.length),
        B < 0 || l > n.length || S < 0 || R > this.length)
      )
        throw new RangeError("out of range index");
      if (S >= R && B >= l) return 0;
      if (S >= R) return -1;
      if (B >= l) return 1;
      if (((B >>>= 0), (l >>>= 0), (S >>>= 0), (R >>>= 0), this === n))
        return 0;
      let U = R - S,
        $ = l - B;
      const aA = Math.min(U, $),
        iA = this.slice(S, R),
        z = n.slice(B, l);
      for (let pA = 0; pA < aA; ++pA)
        if (iA[pA] !== z[pA]) {
          (U = iA[pA]), ($ = z[pA]);
          break;
        }
      return U < $ ? -1 : $ < U ? 1 : 0;
    });
  function W(E, n, B, l, S) {
    if (E.length === 0) return -1;
    if (
      (typeof B == "string"
        ? ((l = B), (B = 0))
        : B > 2147483647
        ? (B = 2147483647)
        : B < -2147483648 && (B = -2147483648),
      (B = +B),
      b(B) && (B = S ? 0 : E.length - 1),
      B < 0 && (B = E.length + B),
      B >= E.length)
    ) {
      if (S) return -1;
      B = E.length - 1;
    } else if (B < 0)
      if (S) B = 0;
      else return -1;
    if ((typeof n == "string" && (n = o.from(n, l)), o.isBuffer(n)))
      return n.length === 0 ? -1 : j(E, n, B, l, S);
    if (typeof n == "number")
      return (
        (n = n & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? S
            ? Uint8Array.prototype.indexOf.call(E, n, B)
            : Uint8Array.prototype.lastIndexOf.call(E, n, B)
          : j(E, [n], B, l, S)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function j(E, n, B, l, S) {
    let R = 1,
      U = E.length,
      $ = n.length;
    if (
      l !== void 0 &&
      ((l = String(l).toLowerCase()),
      l === "ucs2" || l === "ucs-2" || l === "utf16le" || l === "utf-16le")
    ) {
      if (E.length < 2 || n.length < 2) return -1;
      (R = 2), (U /= 2), ($ /= 2), (B /= 2);
    }
    function aA(z, pA) {
      return R === 1 ? z[pA] : z.readUInt16BE(pA * R);
    }
    let iA;
    if (S) {
      let z = -1;
      for (iA = B; iA < U; iA++)
        if (aA(E, iA) === aA(n, z === -1 ? 0 : iA - z)) {
          if ((z === -1 && (z = iA), iA - z + 1 === $)) return z * R;
        } else z !== -1 && (iA -= iA - z), (z = -1);
    } else
      for (B + $ > U && (B = U - $), iA = B; iA >= 0; iA--) {
        let z = !0;
        for (let pA = 0; pA < $; pA++)
          if (aA(E, iA + pA) !== aA(n, pA)) {
            z = !1;
            break;
          }
        if (z) return iA;
      }
    return -1;
  }
  (o.prototype.includes = function (n, B, l) {
    return this.indexOf(n, B, l) !== -1;
  }),
    (o.prototype.indexOf = function (n, B, l) {
      return W(this, n, B, l, !0);
    }),
    (o.prototype.lastIndexOf = function (n, B, l) {
      return W(this, n, B, l, !1);
    });
  function AA(E, n, B, l) {
    B = Number(B) || 0;
    const S = E.length - B;
    l ? ((l = Number(l)), l > S && (l = S)) : (l = S);
    const R = n.length;
    l > R / 2 && (l = R / 2);
    let U;
    for (U = 0; U < l; ++U) {
      const $ = parseInt(n.substr(U * 2, 2), 16);
      if (b($)) return U;
      E[B + U] = $;
    }
    return U;
  }
  function BA(E, n, B, l) {
    return p(r(n, E.length - B), E, B, l);
  }
  function T(E, n, B, l) {
    return p(i(n), E, B, l);
  }
  function hA(E, n, B, l) {
    return p(c(n), E, B, l);
  }
  function EA(E, n, B, l) {
    return p(a(n, E.length - B), E, B, l);
  }
  (o.prototype.write = function (n, B, l, S) {
    if (B === void 0) (S = "utf8"), (l = this.length), (B = 0);
    else if (l === void 0 && typeof B == "string")
      (S = B), (l = this.length), (B = 0);
    else if (isFinite(B))
      (B = B >>> 0),
        isFinite(l)
          ? ((l = l >>> 0), S === void 0 && (S = "utf8"))
          : ((S = l), (l = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const R = this.length - B;
    if (
      ((l === void 0 || l > R) && (l = R),
      (n.length > 0 && (l < 0 || B < 0)) || B > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    S || (S = "utf8");
    let U = !1;
    for (;;)
      switch (S) {
        case "hex":
          return AA(this, n, B, l);
        case "utf8":
        case "utf-8":
          return BA(this, n, B, l);
        case "ascii":
        case "latin1":
        case "binary":
          return T(this, n, B, l);
        case "base64":
          return hA(this, n, B, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return EA(this, n, B, l);
        default:
          if (U) throw new TypeError("Unknown encoding: " + S);
          (S = ("" + S).toLowerCase()), (U = !0);
      }
  }),
    (o.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function sA(E, n, B) {
    return n === 0 && B === E.length
      ? A.fromByteArray(E)
      : A.fromByteArray(E.slice(n, B));
  }
  function SA(E, n, B) {
    B = Math.min(E.length, B);
    const l = [];
    let S = n;
    for (; S < B; ) {
      const R = E[S];
      let U = null,
        $ = R > 239 ? 4 : R > 223 ? 3 : R > 191 ? 2 : 1;
      if (S + $ <= B) {
        let aA, iA, z, pA;
        switch ($) {
          case 1:
            R < 128 && (U = R);
            break;
          case 2:
            (aA = E[S + 1]),
              (aA & 192) === 128 &&
                ((pA = ((R & 31) << 6) | (aA & 63)), pA > 127 && (U = pA));
            break;
          case 3:
            (aA = E[S + 1]),
              (iA = E[S + 2]),
              (aA & 192) === 128 &&
                (iA & 192) === 128 &&
                ((pA = ((R & 15) << 12) | ((aA & 63) << 6) | (iA & 63)),
                pA > 2047 && (pA < 55296 || pA > 57343) && (U = pA));
            break;
          case 4:
            (aA = E[S + 1]),
              (iA = E[S + 2]),
              (z = E[S + 3]),
              (aA & 192) === 128 &&
                (iA & 192) === 128 &&
                (z & 192) === 128 &&
                ((pA =
                  ((R & 15) << 18) |
                  ((aA & 63) << 12) |
                  ((iA & 63) << 6) |
                  (z & 63)),
                pA > 65535 && pA < 1114112 && (U = pA));
        }
      }
      U === null
        ? ((U = 65533), ($ = 1))
        : U > 65535 &&
          ((U -= 65536),
          l.push(((U >>> 10) & 1023) | 55296),
          (U = 56320 | (U & 1023))),
        l.push(U),
        (S += $);
    }
    return LA(l);
  }
  const wA = 4096;
  function LA(E) {
    const n = E.length;
    if (n <= wA) return String.fromCharCode.apply(String, E);
    let B = "",
      l = 0;
    for (; l < n; )
      B += String.fromCharCode.apply(String, E.slice(l, (l += wA)));
    return B;
  }
  function mA(E, n, B) {
    let l = "";
    B = Math.min(E.length, B);
    for (let S = n; S < B; ++S) l += String.fromCharCode(E[S] & 127);
    return l;
  }
  function J(E, n, B) {
    let l = "";
    B = Math.min(E.length, B);
    for (let S = n; S < B; ++S) l += String.fromCharCode(E[S]);
    return l;
  }
  function L(E, n, B) {
    const l = E.length;
    (!n || n < 0) && (n = 0), (!B || B < 0 || B > l) && (B = l);
    let S = "";
    for (let R = n; R < B; ++R) S += K[E[R]];
    return S;
  }
  function P(E, n, B) {
    const l = E.slice(n, B);
    let S = "";
    for (let R = 0; R < l.length - 1; R += 2)
      S += String.fromCharCode(l[R] + l[R + 1] * 256);
    return S;
  }
  o.prototype.slice = function (n, B) {
    const l = this.length;
    (n = ~~n),
      (B = B === void 0 ? l : ~~B),
      n < 0 ? ((n += l), n < 0 && (n = 0)) : n > l && (n = l),
      B < 0 ? ((B += l), B < 0 && (B = 0)) : B > l && (B = l),
      B < n && (B = n);
    const S = this.subarray(n, B);
    return Object.setPrototypeOf(S, o.prototype), S;
  };
  function H(E, n, B) {
    if (E % 1 !== 0 || E < 0) throw new RangeError("offset is not uint");
    if (E + n > B)
      throw new RangeError("Trying to access beyond buffer length");
  }
  (o.prototype.readUintLE = o.prototype.readUIntLE =
    function (n, B, l) {
      (n = n >>> 0), (B = B >>> 0), l || H(n, B, this.length);
      let S = this[n],
        R = 1,
        U = 0;
      for (; ++U < B && (R *= 256); ) S += this[n + U] * R;
      return S;
    }),
    (o.prototype.readUintBE = o.prototype.readUIntBE =
      function (n, B, l) {
        (n = n >>> 0), (B = B >>> 0), l || H(n, B, this.length);
        let S = this[n + --B],
          R = 1;
        for (; B > 0 && (R *= 256); ) S += this[n + --B] * R;
        return S;
      }),
    (o.prototype.readUint8 = o.prototype.readUInt8 =
      function (n, B) {
        return (n = n >>> 0), B || H(n, 1, this.length), this[n];
      }),
    (o.prototype.readUint16LE = o.prototype.readUInt16LE =
      function (n, B) {
        return (
          (n = n >>> 0), B || H(n, 2, this.length), this[n] | (this[n + 1] << 8)
        );
      }),
    (o.prototype.readUint16BE = o.prototype.readUInt16BE =
      function (n, B) {
        return (
          (n = n >>> 0), B || H(n, 2, this.length), (this[n] << 8) | this[n + 1]
        );
      }),
    (o.prototype.readUint32LE = o.prototype.readUInt32LE =
      function (n, B) {
        return (
          (n = n >>> 0),
          B || H(n, 4, this.length),
          (this[n] | (this[n + 1] << 8) | (this[n + 2] << 16)) +
            this[n + 3] * 16777216
        );
      }),
    (o.prototype.readUint32BE = o.prototype.readUInt32BE =
      function (n, B) {
        return (
          (n = n >>> 0),
          B || H(n, 4, this.length),
          this[n] * 16777216 +
            ((this[n + 1] << 16) | (this[n + 2] << 8) | this[n + 3])
        );
      }),
    (o.prototype.readBigUInt64LE = Z(function (n) {
      (n = n >>> 0), F(n, "offset");
      const B = this[n],
        l = this[n + 7];
      (B === void 0 || l === void 0) && x(n, this.length - 8);
      const S =
          B + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24,
        R = this[++n] + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + l * 2 ** 24;
      return BigInt(S) + (BigInt(R) << BigInt(32));
    })),
    (o.prototype.readBigUInt64BE = Z(function (n) {
      (n = n >>> 0), F(n, "offset");
      const B = this[n],
        l = this[n + 7];
      (B === void 0 || l === void 0) && x(n, this.length - 8);
      const S =
          B * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + this[++n],
        R = this[++n] * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + l;
      return (BigInt(S) << BigInt(32)) + BigInt(R);
    })),
    (o.prototype.readIntLE = function (n, B, l) {
      (n = n >>> 0), (B = B >>> 0), l || H(n, B, this.length);
      let S = this[n],
        R = 1,
        U = 0;
      for (; ++U < B && (R *= 256); ) S += this[n + U] * R;
      return (R *= 128), S >= R && (S -= Math.pow(2, 8 * B)), S;
    }),
    (o.prototype.readIntBE = function (n, B, l) {
      (n = n >>> 0), (B = B >>> 0), l || H(n, B, this.length);
      let S = B,
        R = 1,
        U = this[n + --S];
      for (; S > 0 && (R *= 256); ) U += this[n + --S] * R;
      return (R *= 128), U >= R && (U -= Math.pow(2, 8 * B)), U;
    }),
    (o.prototype.readInt8 = function (n, B) {
      return (
        (n = n >>> 0),
        B || H(n, 1, this.length),
        this[n] & 128 ? (255 - this[n] + 1) * -1 : this[n]
      );
    }),
    (o.prototype.readInt16LE = function (n, B) {
      (n = n >>> 0), B || H(n, 2, this.length);
      const l = this[n] | (this[n + 1] << 8);
      return l & 32768 ? l | 4294901760 : l;
    }),
    (o.prototype.readInt16BE = function (n, B) {
      (n = n >>> 0), B || H(n, 2, this.length);
      const l = this[n + 1] | (this[n] << 8);
      return l & 32768 ? l | 4294901760 : l;
    }),
    (o.prototype.readInt32LE = function (n, B) {
      return (
        (n = n >>> 0),
        B || H(n, 4, this.length),
        this[n] | (this[n + 1] << 8) | (this[n + 2] << 16) | (this[n + 3] << 24)
      );
    }),
    (o.prototype.readInt32BE = function (n, B) {
      return (
        (n = n >>> 0),
        B || H(n, 4, this.length),
        (this[n] << 24) | (this[n + 1] << 16) | (this[n + 2] << 8) | this[n + 3]
      );
    }),
    (o.prototype.readBigInt64LE = Z(function (n) {
      (n = n >>> 0), F(n, "offset");
      const B = this[n],
        l = this[n + 7];
      (B === void 0 || l === void 0) && x(n, this.length - 8);
      const S =
        this[n + 4] + this[n + 5] * 2 ** 8 + this[n + 6] * 2 ** 16 + (l << 24);
      return (
        (BigInt(S) << BigInt(32)) +
        BigInt(
          B + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24
        )
      );
    })),
    (o.prototype.readBigInt64BE = Z(function (n) {
      (n = n >>> 0), F(n, "offset");
      const B = this[n],
        l = this[n + 7];
      (B === void 0 || l === void 0) && x(n, this.length - 8);
      const S =
        (B << 24) + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + this[++n];
      return (
        (BigInt(S) << BigInt(32)) +
        BigInt(
          this[++n] * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + l
        )
      );
    })),
    (o.prototype.readFloatLE = function (n, B) {
      return (
        (n = n >>> 0), B || H(n, 4, this.length), e.read(this, n, !0, 23, 4)
      );
    }),
    (o.prototype.readFloatBE = function (n, B) {
      return (
        (n = n >>> 0), B || H(n, 4, this.length), e.read(this, n, !1, 23, 4)
      );
    }),
    (o.prototype.readDoubleLE = function (n, B) {
      return (
        (n = n >>> 0), B || H(n, 8, this.length), e.read(this, n, !0, 52, 8)
      );
    }),
    (o.prototype.readDoubleBE = function (n, B) {
      return (
        (n = n >>> 0), B || H(n, 8, this.length), e.read(this, n, !1, 52, 8)
      );
    });
  function q(E, n, B, l, S, R) {
    if (!o.isBuffer(E))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (n > S || n < R)
      throw new RangeError('"value" argument is out of bounds');
    if (B + l > E.length) throw new RangeError("Index out of range");
  }
  (o.prototype.writeUintLE = o.prototype.writeUIntLE =
    function (n, B, l, S) {
      if (((n = +n), (B = B >>> 0), (l = l >>> 0), !S)) {
        const $ = Math.pow(2, 8 * l) - 1;
        q(this, n, B, l, $, 0);
      }
      let R = 1,
        U = 0;
      for (this[B] = n & 255; ++U < l && (R *= 256); )
        this[B + U] = (n / R) & 255;
      return B + l;
    }),
    (o.prototype.writeUintBE = o.prototype.writeUIntBE =
      function (n, B, l, S) {
        if (((n = +n), (B = B >>> 0), (l = l >>> 0), !S)) {
          const $ = Math.pow(2, 8 * l) - 1;
          q(this, n, B, l, $, 0);
        }
        let R = l - 1,
          U = 1;
        for (this[B + R] = n & 255; --R >= 0 && (U *= 256); )
          this[B + R] = (n / U) & 255;
        return B + l;
      }),
    (o.prototype.writeUint8 = o.prototype.writeUInt8 =
      function (n, B, l) {
        return (
          (n = +n),
          (B = B >>> 0),
          l || q(this, n, B, 1, 255, 0),
          (this[B] = n & 255),
          B + 1
        );
      }),
    (o.prototype.writeUint16LE = o.prototype.writeUInt16LE =
      function (n, B, l) {
        return (
          (n = +n),
          (B = B >>> 0),
          l || q(this, n, B, 2, 65535, 0),
          (this[B] = n & 255),
          (this[B + 1] = n >>> 8),
          B + 2
        );
      }),
    (o.prototype.writeUint16BE = o.prototype.writeUInt16BE =
      function (n, B, l) {
        return (
          (n = +n),
          (B = B >>> 0),
          l || q(this, n, B, 2, 65535, 0),
          (this[B] = n >>> 8),
          (this[B + 1] = n & 255),
          B + 2
        );
      }),
    (o.prototype.writeUint32LE = o.prototype.writeUInt32LE =
      function (n, B, l) {
        return (
          (n = +n),
          (B = B >>> 0),
          l || q(this, n, B, 4, 4294967295, 0),
          (this[B + 3] = n >>> 24),
          (this[B + 2] = n >>> 16),
          (this[B + 1] = n >>> 8),
          (this[B] = n & 255),
          B + 4
        );
      }),
    (o.prototype.writeUint32BE = o.prototype.writeUInt32BE =
      function (n, B, l) {
        return (
          (n = +n),
          (B = B >>> 0),
          l || q(this, n, B, 4, 4294967295, 0),
          (this[B] = n >>> 24),
          (this[B + 1] = n >>> 16),
          (this[B + 2] = n >>> 8),
          (this[B + 3] = n & 255),
          B + 4
        );
      });
  function nA(E, n, B, l, S) {
    y(n, l, S, E, B, 7);
    let R = Number(n & BigInt(4294967295));
    (E[B++] = R),
      (R = R >> 8),
      (E[B++] = R),
      (R = R >> 8),
      (E[B++] = R),
      (R = R >> 8),
      (E[B++] = R);
    let U = Number((n >> BigInt(32)) & BigInt(4294967295));
    return (
      (E[B++] = U),
      (U = U >> 8),
      (E[B++] = U),
      (U = U >> 8),
      (E[B++] = U),
      (U = U >> 8),
      (E[B++] = U),
      B
    );
  }
  function C(E, n, B, l, S) {
    y(n, l, S, E, B, 7);
    let R = Number(n & BigInt(4294967295));
    (E[B + 7] = R),
      (R = R >> 8),
      (E[B + 6] = R),
      (R = R >> 8),
      (E[B + 5] = R),
      (R = R >> 8),
      (E[B + 4] = R);
    let U = Number((n >> BigInt(32)) & BigInt(4294967295));
    return (
      (E[B + 3] = U),
      (U = U >> 8),
      (E[B + 2] = U),
      (U = U >> 8),
      (E[B + 1] = U),
      (U = U >> 8),
      (E[B] = U),
      B + 8
    );
  }
  (o.prototype.writeBigUInt64LE = Z(function (n, B = 0) {
    return nA(this, n, B, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
    (o.prototype.writeBigUInt64BE = Z(function (n, B = 0) {
      return C(this, n, B, BigInt(0), BigInt("0xffffffffffffffff"));
    })),
    (o.prototype.writeIntLE = function (n, B, l, S) {
      if (((n = +n), (B = B >>> 0), !S)) {
        const aA = Math.pow(2, 8 * l - 1);
        q(this, n, B, l, aA - 1, -aA);
      }
      let R = 0,
        U = 1,
        $ = 0;
      for (this[B] = n & 255; ++R < l && (U *= 256); )
        n < 0 && $ === 0 && this[B + R - 1] !== 0 && ($ = 1),
          (this[B + R] = (((n / U) >> 0) - $) & 255);
      return B + l;
    }),
    (o.prototype.writeIntBE = function (n, B, l, S) {
      if (((n = +n), (B = B >>> 0), !S)) {
        const aA = Math.pow(2, 8 * l - 1);
        q(this, n, B, l, aA - 1, -aA);
      }
      let R = l - 1,
        U = 1,
        $ = 0;
      for (this[B + R] = n & 255; --R >= 0 && (U *= 256); )
        n < 0 && $ === 0 && this[B + R + 1] !== 0 && ($ = 1),
          (this[B + R] = (((n / U) >> 0) - $) & 255);
      return B + l;
    }),
    (o.prototype.writeInt8 = function (n, B, l) {
      return (
        (n = +n),
        (B = B >>> 0),
        l || q(this, n, B, 1, 127, -128),
        n < 0 && (n = 255 + n + 1),
        (this[B] = n & 255),
        B + 1
      );
    }),
    (o.prototype.writeInt16LE = function (n, B, l) {
      return (
        (n = +n),
        (B = B >>> 0),
        l || q(this, n, B, 2, 32767, -32768),
        (this[B] = n & 255),
        (this[B + 1] = n >>> 8),
        B + 2
      );
    }),
    (o.prototype.writeInt16BE = function (n, B, l) {
      return (
        (n = +n),
        (B = B >>> 0),
        l || q(this, n, B, 2, 32767, -32768),
        (this[B] = n >>> 8),
        (this[B + 1] = n & 255),
        B + 2
      );
    }),
    (o.prototype.writeInt32LE = function (n, B, l) {
      return (
        (n = +n),
        (B = B >>> 0),
        l || q(this, n, B, 4, 2147483647, -2147483648),
        (this[B] = n & 255),
        (this[B + 1] = n >>> 8),
        (this[B + 2] = n >>> 16),
        (this[B + 3] = n >>> 24),
        B + 4
      );
    }),
    (o.prototype.writeInt32BE = function (n, B, l) {
      return (
        (n = +n),
        (B = B >>> 0),
        l || q(this, n, B, 4, 2147483647, -2147483648),
        n < 0 && (n = 4294967295 + n + 1),
        (this[B] = n >>> 24),
        (this[B + 1] = n >>> 16),
        (this[B + 2] = n >>> 8),
        (this[B + 3] = n & 255),
        B + 4
      );
    }),
    (o.prototype.writeBigInt64LE = Z(function (n, B = 0) {
      return nA(
        this,
        n,
        B,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    })),
    (o.prototype.writeBigInt64BE = Z(function (n, B = 0) {
      return C(
        this,
        n,
        B,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    }));
  function QA(E, n, B, l, S, R) {
    if (B + l > E.length) throw new RangeError("Index out of range");
    if (B < 0) throw new RangeError("Index out of range");
  }
  function IA(E, n, B, l, S) {
    return (
      (n = +n),
      (B = B >>> 0),
      S || QA(E, n, B, 4),
      e.write(E, n, B, l, 23, 4),
      B + 4
    );
  }
  (o.prototype.writeFloatLE = function (n, B, l) {
    return IA(this, n, B, !0, l);
  }),
    (o.prototype.writeFloatBE = function (n, B, l) {
      return IA(this, n, B, !1, l);
    });
  function CA(E, n, B, l, S) {
    return (
      (n = +n),
      (B = B >>> 0),
      S || QA(E, n, B, 8),
      e.write(E, n, B, l, 52, 8),
      B + 8
    );
  }
  (o.prototype.writeDoubleLE = function (n, B, l) {
    return CA(this, n, B, !0, l);
  }),
    (o.prototype.writeDoubleBE = function (n, B, l) {
      return CA(this, n, B, !1, l);
    }),
    (o.prototype.copy = function (n, B, l, S) {
      if (!o.isBuffer(n)) throw new TypeError("argument should be a Buffer");
      if (
        (l || (l = 0),
        !S && S !== 0 && (S = this.length),
        B >= n.length && (B = n.length),
        B || (B = 0),
        S > 0 && S < l && (S = l),
        S === l || n.length === 0 || this.length === 0)
      )
        return 0;
      if (B < 0) throw new RangeError("targetStart out of bounds");
      if (l < 0 || l >= this.length) throw new RangeError("Index out of range");
      if (S < 0) throw new RangeError("sourceEnd out of bounds");
      S > this.length && (S = this.length),
        n.length - B < S - l && (S = n.length - B + l);
      const R = S - l;
      return (
        this === n && typeof Uint8Array.prototype.copyWithin == "function"
          ? this.copyWithin(B, l, S)
          : Uint8Array.prototype.set.call(n, this.subarray(l, S), B),
        R
      );
    }),
    (o.prototype.fill = function (n, B, l, S) {
      if (typeof n == "string") {
        if (
          (typeof B == "string"
            ? ((S = B), (B = 0), (l = this.length))
            : typeof l == "string" && ((S = l), (l = this.length)),
          S !== void 0 && typeof S != "string")
        )
          throw new TypeError("encoding must be a string");
        if (typeof S == "string" && !o.isEncoding(S))
          throw new TypeError("Unknown encoding: " + S);
        if (n.length === 1) {
          const U = n.charCodeAt(0);
          ((S === "utf8" && U < 128) || S === "latin1") && (n = U);
        }
      } else
        typeof n == "number"
          ? (n = n & 255)
          : typeof n == "boolean" && (n = Number(n));
      if (B < 0 || this.length < B || this.length < l)
        throw new RangeError("Out of range index");
      if (l <= B) return this;
      (B = B >>> 0), (l = l === void 0 ? this.length : l >>> 0), n || (n = 0);
      let R;
      if (typeof n == "number") for (R = B; R < l; ++R) this[R] = n;
      else {
        const U = o.isBuffer(n) ? n : o.from(n, S),
          $ = U.length;
        if ($ === 0)
          throw new TypeError(
            'The value "' + n + '" is invalid for argument "value"'
          );
        for (R = 0; R < l - B; ++R) this[R + B] = U[R % $];
      }
      return this;
    });
  const _ = {};
  function v(E, n, B) {
    _[E] = class extends B {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: n.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${E}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return E;
      }
      set code(S) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: S,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${E}]: ${this.message}`;
      }
    };
  }
  v(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (E) {
      return E
        ? `${E} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ),
    v(
      "ERR_INVALID_ARG_TYPE",
      function (E, n) {
        return `The "${E}" argument must be of type number. Received type ${typeof n}`;
      },
      TypeError
    ),
    v(
      "ERR_OUT_OF_RANGE",
      function (E, n, B) {
        let l = `The value of "${E}" is out of range.`,
          S = B;
        return (
          Number.isInteger(B) && Math.abs(B) > 2 ** 32
            ? (S = u(String(B)))
            : typeof B == "bigint" &&
              ((S = String(B)),
              (B > BigInt(2) ** BigInt(32) || B < -(BigInt(2) ** BigInt(32))) &&
                (S = u(S)),
              (S += "n")),
          (l += ` It must be ${n}. Received ${S}`),
          l
        );
      },
      RangeError
    );
  function u(E) {
    let n = "",
      B = E.length;
    const l = E[0] === "-" ? 1 : 0;
    for (; B >= l + 4; B -= 3) n = `_${E.slice(B - 3, B)}${n}`;
    return `${E.slice(0, B)}${n}`;
  }
  function f(E, n, B) {
    F(n, "offset"),
      (E[n] === void 0 || E[n + B] === void 0) && x(n, E.length - (B + 1));
  }
  function y(E, n, B, l, S, R) {
    if (E > B || E < n) {
      const U = typeof n == "bigint" ? "n" : "";
      let $;
      throw (
        (R > 3
          ? n === 0 || n === BigInt(0)
            ? ($ = `>= 0${U} and < 2${U} ** ${(R + 1) * 8}${U}`)
            : ($ = `>= -(2${U} ** ${(R + 1) * 8 - 1}${U}) and < 2 ** ${
                (R + 1) * 8 - 1
              }${U}`)
          : ($ = `>= ${n}${U} and <= ${B}${U}`),
        new _.ERR_OUT_OF_RANGE("value", $, E))
      );
    }
    f(l, S, R);
  }
  function F(E, n) {
    if (typeof E != "number") throw new _.ERR_INVALID_ARG_TYPE(n, "number", E);
  }
  function x(E, n, B) {
    throw Math.floor(E) !== E
      ? (F(E, B), new _.ERR_OUT_OF_RANGE(B || "offset", "an integer", E))
      : n < 0
      ? new _.ERR_BUFFER_OUT_OF_BOUNDS()
      : new _.ERR_OUT_OF_RANGE(B || "offset", `>= ${B ? 1 : 0} and <= ${n}`, E);
  }
  const N = /[^+/0-9A-Za-z-_]/g;
  function s(E) {
    if (((E = E.split("=")[0]), (E = E.trim().replace(N, "")), E.length < 2))
      return "";
    for (; E.length % 4 !== 0; ) E = E + "=";
    return E;
  }
  function r(E, n) {
    n = n || 1 / 0;
    let B;
    const l = E.length;
    let S = null;
    const R = [];
    for (let U = 0; U < l; ++U) {
      if (((B = E.charCodeAt(U)), B > 55295 && B < 57344)) {
        if (!S) {
          if (B > 56319) {
            (n -= 3) > -1 && R.push(239, 191, 189);
            continue;
          } else if (U + 1 === l) {
            (n -= 3) > -1 && R.push(239, 191, 189);
            continue;
          }
          S = B;
          continue;
        }
        if (B < 56320) {
          (n -= 3) > -1 && R.push(239, 191, 189), (S = B);
          continue;
        }
        B = (((S - 55296) << 10) | (B - 56320)) + 65536;
      } else S && (n -= 3) > -1 && R.push(239, 191, 189);
      if (((S = null), B < 128)) {
        if ((n -= 1) < 0) break;
        R.push(B);
      } else if (B < 2048) {
        if ((n -= 2) < 0) break;
        R.push((B >> 6) | 192, (B & 63) | 128);
      } else if (B < 65536) {
        if ((n -= 3) < 0) break;
        R.push((B >> 12) | 224, ((B >> 6) & 63) | 128, (B & 63) | 128);
      } else if (B < 1114112) {
        if ((n -= 4) < 0) break;
        R.push(
          (B >> 18) | 240,
          ((B >> 12) & 63) | 128,
          ((B >> 6) & 63) | 128,
          (B & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return R;
  }
  function i(E) {
    const n = [];
    for (let B = 0; B < E.length; ++B) n.push(E.charCodeAt(B) & 255);
    return n;
  }
  function a(E, n) {
    let B, l, S;
    const R = [];
    for (let U = 0; U < E.length && !((n -= 2) < 0); ++U)
      (B = E.charCodeAt(U)), (l = B >> 8), (S = B % 256), R.push(S), R.push(l);
    return R;
  }
  function c(E) {
    return A.toByteArray(s(E));
  }
  function p(E, n, B, l) {
    let S;
    for (S = 0; S < l && !(S + B >= n.length || S >= E.length); ++S)
      n[S + B] = E[S];
    return S;
  }
  function m(E, n) {
    return (
      E instanceof n ||
      (E != null &&
        E.constructor != null &&
        E.constructor.name != null &&
        E.constructor.name === n.name)
    );
  }
  function b(E) {
    return E !== E;
  }
  const K = (function () {
    const E = "0123456789abcdef",
      n = new Array(256);
    for (let B = 0; B < 16; ++B) {
      const l = B * 16;
      for (let S = 0; S < 16; ++S) n[l + S] = E[B] + E[S];
    }
    return n;
  })();
  function Z(E) {
    return typeof BigInt > "u" ? tA : E;
  }
  function tA() {
    throw new Error("BigInt not supported");
  }
})($i);
var je;
(function (t) {
  (t[(t.SysFatal = 1)] = "SysFatal"),
    (t[(t.SysTransient = 2)] = "SysTransient"),
    (t[(t.DestinationInvalid = 3)] = "DestinationInvalid"),
    (t[(t.CanisterReject = 4)] = "CanisterReject"),
    (t[(t.CanisterError = 5)] = "CanisterError");
})(je || (je = {}));
const Kt = "abcdefghijklmnopqrstuvwxyz234567",
  pt = Object.create(null);
for (let t = 0; t < Kt.length; t++) pt[Kt[t]] = t;
pt[0] = pt.o;
pt[1] = pt.i;
function on(t) {
  let A = 0,
    e = 0,
    g = "";
  function I(Q) {
    return (
      A < 0 ? (e |= Q >> -A) : (e = (Q << A) & 248),
      A > 3 ? ((A -= 8), 1) : (A < 4 && ((g += Kt[e >> 3]), (A += 5)), 0)
    );
  }
  for (let Q = 0; Q < t.length; ) Q += I(t[Q]);
  return g + (A < 0 ? Kt[e >> 3] : "");
}
function sn(t) {
  let A = 0,
    e = 0;
  const g = new Uint8Array(((t.length * 4) / 3) | 0);
  let I = 0;
  function Q(h) {
    let o = pt[h.toLowerCase()];
    if (o === void 0)
      throw new Error(`Invalid character: ${JSON.stringify(h)}`);
    (o <<= 3),
      (e |= o >>> A),
      (A += 5),
      A >= 8 &&
        ((g[I++] = e), (A -= 8), A > 0 ? (e = (o << (5 - A)) & 255) : (e = 0));
  }
  for (const h of t) Q(h);
  return g.slice(0, I);
}
const En = new Uint32Array([
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
function an(t) {
  const A = new Uint8Array(t);
  let e = -1;
  for (let g = 0; g < A.length; g++) {
    const Q = (A[g] ^ e) & 255;
    e = En[Q] ^ (e >>> 8);
  }
  return (e ^ -1) >>> 0;
}
function Qn(t) {
  return (
    t instanceof Uint8Array ||
    (t != null && typeof t == "object" && t.constructor.name === "Uint8Array")
  );
}
function cn(t, ...A) {
  if (!Qn(t)) throw new Error("Expected Uint8Array");
  if (A.length > 0 && !A.includes(t.length))
    throw new Error(
      `Expected Uint8Array of length ${A}, not of length=${t.length}`
    );
}
function Ve(t, A = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (A && t.finished) throw new Error("Hash#digest() has already been called");
}
function un(t, A) {
  cn(t);
  const e = A.outputLen;
  if (t.length < e)
    throw new Error(
      `digestInto() expects output buffer of length at least ${e}`
    );
}
const te =
  typeof globalThis == "object" && "crypto" in globalThis
    ? globalThis.crypto
    : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function Mr(
  t
) {
  return (
    t instanceof Uint8Array ||
    (t != null && typeof t == "object" && t.constructor.name === "Uint8Array")
  );
}
const ee = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
  OA = (t, A) => (t << (32 - A)) | (t >>> A),
  hn = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!hn) throw new Error("Non little-endian hardware is not supported");
function br(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function kr(t) {
  if ((typeof t == "string" && (t = br(t)), !Mr(t)))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
function Cn(...t) {
  let A = 0;
  for (let g = 0; g < t.length; g++) {
    const I = t[g];
    if (!Mr(I)) throw new Error("Uint8Array expected");
    A += I.length;
  }
  const e = new Uint8Array(A);
  for (let g = 0, I = 0; g < t.length; g++) {
    const Q = t[g];
    e.set(Q, I), (I += Q.length);
  }
  return e;
}
class fn {
  clone() {
    return this._cloneInto();
  }
}
function Ne(t) {
  const A = (g) => t().update(kr(g)).digest(),
    e = t();
  return (
    (A.outputLen = e.outputLen),
    (A.blockLen = e.blockLen),
    (A.create = () => t()),
    A
  );
}
function ln(t = 32) {
  if (te && typeof te.getRandomValues == "function")
    return te.getRandomValues(new Uint8Array(t));
  throw new Error("crypto.getRandomValues must be defined");
}
function wn(t, A, e, g) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(A, e, g);
  const I = BigInt(32),
    Q = BigInt(4294967295),
    h = Number((e >> I) & Q),
    o = Number(e & Q),
    w = g ? 4 : 0,
    D = g ? 0 : 4;
  t.setUint32(A + w, h, g), t.setUint32(A + D, o, g);
}
class Lr extends fn {
  constructor(A, e, g, I) {
    super(),
      (this.blockLen = A),
      (this.outputLen = e),
      (this.padOffset = g),
      (this.isLE = I),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(A)),
      (this.view = ee(this.buffer));
  }
  update(A) {
    Ve(this);
    const { view: e, buffer: g, blockLen: I } = this;
    A = kr(A);
    const Q = A.length;
    for (let h = 0; h < Q; ) {
      const o = Math.min(I - this.pos, Q - h);
      if (o === I) {
        const w = ee(A);
        for (; I <= Q - h; h += I) this.process(w, h);
        continue;
      }
      g.set(A.subarray(h, h + o), this.pos),
        (this.pos += o),
        (h += o),
        this.pos === I && (this.process(e, 0), (this.pos = 0));
    }
    return (this.length += A.length), this.roundClean(), this;
  }
  digestInto(A) {
    Ve(this), un(A, this), (this.finished = !0);
    const { buffer: e, view: g, blockLen: I, isLE: Q } = this;
    let { pos: h } = this;
    (e[h++] = 128),
      this.buffer.subarray(h).fill(0),
      this.padOffset > I - h && (this.process(g, 0), (h = 0));
    for (let M = h; M < I; M++) e[M] = 0;
    wn(g, I - 8, BigInt(this.length * 8), Q), this.process(g, 0);
    const o = ee(A),
      w = this.outputLen;
    if (w % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const D = w / 4,
      G = this.get();
    if (D > G.length) throw new Error("_sha2: outputLen bigger than state");
    for (let M = 0; M < D; M++) o.setUint32(4 * M, G[M], Q);
  }
  digest() {
    const { buffer: A, outputLen: e } = this;
    this.digestInto(A);
    const g = A.slice(0, e);
    return this.destroy(), g;
  }
  _cloneInto(A) {
    A || (A = new this.constructor()), A.set(...this.get());
    const {
      blockLen: e,
      buffer: g,
      length: I,
      finished: Q,
      destroyed: h,
      pos: o,
    } = this;
    return (
      (A.length = I),
      (A.pos = o),
      (A.finished = Q),
      (A.destroyed = h),
      I % e && A.buffer.set(g),
      A
    );
  }
}
const pn = (t, A, e) => (t & A) ^ (~t & e),
  yn = (t, A, e) => (t & A) ^ (t & e) ^ (A & e),
  dn = new Uint32Array([
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
  tt = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  et = new Uint32Array(64);
class Tr extends Lr {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = tt[0] | 0),
      (this.B = tt[1] | 0),
      (this.C = tt[2] | 0),
      (this.D = tt[3] | 0),
      (this.E = tt[4] | 0),
      (this.F = tt[5] | 0),
      (this.G = tt[6] | 0),
      (this.H = tt[7] | 0);
  }
  get() {
    const { A, B: e, C: g, D: I, E: Q, F: h, G: o, H: w } = this;
    return [A, e, g, I, Q, h, o, w];
  }
  set(A, e, g, I, Q, h, o, w) {
    (this.A = A | 0),
      (this.B = e | 0),
      (this.C = g | 0),
      (this.D = I | 0),
      (this.E = Q | 0),
      (this.F = h | 0),
      (this.G = o | 0),
      (this.H = w | 0);
  }
  process(A, e) {
    for (let M = 0; M < 16; M++, e += 4) et[M] = A.getUint32(e, !1);
    for (let M = 16; M < 64; M++) {
      const k = et[M - 15],
        Y = et[M - 2],
        X = OA(k, 7) ^ OA(k, 18) ^ (k >>> 3),
        V = OA(Y, 17) ^ OA(Y, 19) ^ (Y >>> 10);
      et[M] = (V + et[M - 7] + X + et[M - 16]) | 0;
    }
    let { A: g, B: I, C: Q, D: h, E: o, F: w, G: D, H: G } = this;
    for (let M = 0; M < 64; M++) {
      const k = OA(o, 6) ^ OA(o, 11) ^ OA(o, 25),
        Y = (G + k + pn(o, w, D) + dn[M] + et[M]) | 0,
        V = ((OA(g, 2) ^ OA(g, 13) ^ OA(g, 22)) + yn(g, I, Q)) | 0;
      (G = D),
        (D = w),
        (w = o),
        (o = (h + Y) | 0),
        (h = Q),
        (Q = I),
        (I = g),
        (g = (Y + V) | 0);
    }
    (g = (g + this.A) | 0),
      (I = (I + this.B) | 0),
      (Q = (Q + this.C) | 0),
      (h = (h + this.D) | 0),
      (o = (o + this.E) | 0),
      (w = (w + this.F) | 0),
      (D = (D + this.G) | 0),
      (G = (G + this.H) | 0),
      this.set(g, I, Q, h, o, w, D, G);
  }
  roundClean() {
    et.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class Dn extends Tr {
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
const Sn = Ne(() => new Tr()),
  xn = Ne(() => new Dn());
function Fn(t) {
  return xn.create().update(new Uint8Array(t)).digest();
}
const bt = "__principal__",
  Nn = 2,
  Xe = 4,
  Gn = "aaaaa-aa",
  mn = (t) => {
    var A;
    return new Uint8Array(
      ((A = t.match(/.{1,2}/g)) !== null && A !== void 0 ? A : []).map((e) =>
        parseInt(e, 16)
      )
    );
  },
  Un = (t) => t.reduce((A, e) => A + e.toString(16).padStart(2, "0"), "");
class zA {
  constructor(A) {
    (this._arr = A), (this._isPrincipal = !0);
  }
  static anonymous() {
    return new this(new Uint8Array([Xe]));
  }
  static managementCanister() {
    return this.fromHex(Gn);
  }
  static selfAuthenticating(A) {
    const e = Fn(A);
    return new this(new Uint8Array([...e, Nn]));
  }
  static from(A) {
    if (typeof A == "string") return zA.fromText(A);
    if (Object.getPrototypeOf(A) === Uint8Array.prototype) return new zA(A);
    if (typeof A == "object" && A !== null && A._isPrincipal === !0)
      return new zA(A._arr);
    throw new Error(`Impossible to convert ${JSON.stringify(A)} to Principal.`);
  }
  static fromHex(A) {
    return new this(mn(A));
  }
  static fromText(A) {
    let e = A;
    if (A.includes(bt)) {
      const h = JSON.parse(A);
      bt in h && (e = h[bt]);
    }
    const g = e.toLowerCase().replace(/-/g, "");
    let I = sn(g);
    I = I.slice(4, I.length);
    const Q = new this(I);
    if (Q.toText() !== e)
      throw new Error(
        `Principal "${Q.toText()}" does not have a valid checksum (original value "${e}" may not be a valid Principal ID).`
      );
    return Q;
  }
  static fromUint8Array(A) {
    return new this(A);
  }
  isAnonymous() {
    return this._arr.byteLength === 1 && this._arr[0] === Xe;
  }
  toUint8Array() {
    return this._arr;
  }
  toHex() {
    return Un(this._arr).toUpperCase();
  }
  toText() {
    const A = new ArrayBuffer(4);
    new DataView(A).setUint32(0, an(this._arr));
    const g = new Uint8Array(A),
      I = Uint8Array.from(this._arr),
      Q = new Uint8Array([...g, ...I]),
      o = on(Q).match(/.{1,5}/g);
    if (!o) throw new Error();
    return o.join("-");
  }
  toString() {
    return this.toText();
  }
  toJSON() {
    return { [bt]: this.toText() };
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
class Ge {
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
      g = this._view.byteLength;
    this._view.byteOffset + this._view.byteLength + e.byteLength >=
    this._buffer.byteLength
      ? this.alloc(e.byteLength)
      : (this._view = new Uint8Array(
          this._buffer,
          this._view.byteOffset,
          this._view.byteLength + e.byteLength
        )),
      this._view.set(e, g);
  }
  get end() {
    return this._view.byteLength === 0;
  }
  alloc(A) {
    const e = new ArrayBuffer(((this._buffer.byteLength + A) * 1.2) | 0),
      g = new Uint8Array(e, 0, this._view.byteLength + A);
    g.set(this._view), (this._buffer = e), (this._view = g);
  }
}
function Yr() {
  throw new Error("unexpected end of buffer");
}
function Rn(t, A) {
  return t.byteLength < A && Yr(), t.read(A);
}
function ze(t) {
  const A = t.readUint8();
  return A === void 0 && Yr(), A;
}
function $e(t) {
  if ((typeof t == "number" && (t = BigInt(t)), t < BigInt(0)))
    throw new Error("Cannot leb encode negative values.");
  const A = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1,
    e = new Ge(new ArrayBuffer(A), 0);
  for (;;) {
    const g = Number(t & BigInt(127));
    if (((t /= BigInt(128)), t === BigInt(0))) {
      e.write(new Uint8Array([g]));
      break;
    } else e.write(new Uint8Array([g | 128]));
  }
  return e.buffer;
}
function me(t) {
  typeof t == "number" && (t = BigInt(t));
  const A = t < BigInt(0);
  A && (t = -t - BigInt(1));
  const e = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1,
    g = new Ge(new ArrayBuffer(e), 0);
  for (;;) {
    const Q = I(t);
    if (
      ((t /= BigInt(128)),
      (A && t === BigInt(0) && Q & 64) || (!A && t === BigInt(0) && !(Q & 64)))
    ) {
      g.write(new Uint8Array([Q]));
      break;
    } else g.write(new Uint8Array([Q | 128]));
  }
  function I(Q) {
    const h = Q % BigInt(128);
    return Number(A ? BigInt(128) - h - BigInt(1) : h);
  }
  return g.buffer;
}
function Mn(t, A) {
  if (BigInt(t) < BigInt(0)) throw new Error("Cannot write negative values.");
  return Hr(t, A);
}
function Hr(t, A) {
  t = BigInt(t);
  const e = new Ge(new ArrayBuffer(Math.min(1, A)), 0);
  let g = 0,
    I = BigInt(256),
    Q = BigInt(0),
    h = Number(t % I);
  for (e.write(new Uint8Array([h])); ++g < A; )
    t < 0 && Q === BigInt(0) && h !== 0 && (Q = BigInt(1)),
      (h = Number((t / I - Q) % BigInt(256))),
      e.write(new Uint8Array([h])),
      (I *= BigInt(256));
  return e.buffer;
}
function _r(t, A) {
  let e = BigInt(ze(t)),
    g = BigInt(1),
    I = 0;
  for (; ++I < A; ) {
    g *= BigInt(256);
    const Q = BigInt(ze(t));
    e = e + g * Q;
  }
  return e;
}
function bn(t, A) {
  let e = _r(t, A);
  const g = BigInt(2) ** (BigInt(8) * BigInt(A - 1) + BigInt(7));
  return e >= g && (e -= g * BigInt(2)), e;
}
function ce(t) {
  const A = BigInt(t);
  if (t < 0) throw new RangeError("Input must be non-negative");
  return BigInt(1) << A;
}
const Ar = 400;
class Jr {
  display() {
    return this.name;
  }
  valueToString(A) {
    return Gt(A);
  }
  buildTypeTable(A) {
    A.has(this) || this._buildTypeTableImpl(A);
  }
}
class Ue extends Jr {
  checkType(A) {
    if (this.name !== A.name)
      throw new Error(
        `type mismatch: type on the wire ${A.name}, expect type ${this.name}`
      );
    return A;
  }
  _buildTypeTableImpl(A) {}
}
class kn extends Jr {
  checkType(A) {
    if (A instanceof Vt) {
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
class qr extends Ue {
  constructor(A) {
    if ((super(), (this._bits = A), A !== 32 && A !== 64))
      throw new Error("not a valid float type");
  }
  accept(A, e) {
    return A.visitFloat(this, e);
  }
  covariant(A) {
    if (typeof A == "number" || A instanceof Number) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Gt(A)}`);
  }
  encodeValue(A) {
    const e = new ArrayBuffer(this._bits / 8),
      g = new DataView(e);
    return (
      this._bits === 32 ? g.setFloat32(0, A, !0) : g.setFloat64(0, A, !0), e
    );
  }
  encodeType() {
    const A = this._bits === 32 ? -13 : -14;
    return me(A);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const g = Rn(A, this._bits / 8),
      I = new DataView(g);
    return this._bits === 32 ? I.getFloat32(0, !0) : I.getFloat64(0, !0);
  }
  get name() {
    return "float" + this._bits;
  }
  valueToString(A) {
    return A.toString();
  }
}
class Zt extends Ue {
  constructor(A) {
    super(), (this._bits = A);
  }
  accept(A, e) {
    return A.visitFixedInt(this, e);
  }
  covariant(A) {
    const e = ce(this._bits - 1) * BigInt(-1),
      g = ce(this._bits - 1) - BigInt(1);
    let I = !1;
    if (typeof A == "bigint") I = A >= e && A <= g;
    else if (Number.isInteger(A)) {
      const Q = BigInt(A);
      I = Q >= e && Q <= g;
    } else I = !1;
    if (I) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Gt(A)}`);
  }
  encodeValue(A) {
    return Hr(A, this._bits / 8);
  }
  encodeType() {
    const A = Math.log2(this._bits) - 3;
    return me(-9 - A);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const g = bn(A, this._bits / 8);
    return this._bits <= 32 ? Number(g) : g;
  }
  get name() {
    return `int${this._bits}`;
  }
  valueToString(A) {
    return A.toString();
  }
}
class jt extends Ue {
  constructor(A) {
    super(), (this._bits = A);
  }
  accept(A, e) {
    return A.visitFixedNat(this, e);
  }
  covariant(A) {
    const e = ce(this._bits);
    let g = !1;
    if (
      (typeof A == "bigint" && A >= BigInt(0)
        ? (g = A < e)
        : Number.isInteger(A) && A >= 0
        ? (g = BigInt(A) < e)
        : (g = !1),
      g)
    )
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Gt(A)}`);
  }
  encodeValue(A) {
    return Mn(A, this._bits / 8);
  }
  encodeType() {
    const A = Math.log2(this._bits) - 3;
    return me(-5 - A);
  }
  decodeValue(A, e) {
    this.checkType(e);
    const g = _r(A, this._bits / 8);
    return this._bits <= 32 ? Number(g) : g;
  }
  get name() {
    return `nat${this._bits}`;
  }
  valueToString(A) {
    return A.toString();
  }
}
class Vt extends kn {
  constructor() {
    super(...arguments), (this._id = Vt._counter++), (this._type = void 0);
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
    throw new Error(`Invalid ${this.display()} argument: ${Gt(A)}`);
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
Vt._counter = 0;
function Gt(t) {
  const A = JSON.stringify(t, (e, g) =>
    typeof g == "bigint" ? `BigInt(${g})` : g
  );
  return A && A.length > Ar ? A.substring(0, Ar - 3) + "..." : A;
}
new qr(32);
new qr(64);
new Zt(8);
new Zt(16);
new Zt(32);
new Zt(64);
new jt(8);
new jt(16);
new jt(32);
new jt(64);
var vr = {},
  mt = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ (function (t) {
  var A = Ft,
    e = Nt,
    g =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  (t.Buffer = o), (t.SlowBuffer = gA), (t.INSPECT_MAX_BYTES = 50);
  var I = 2147483647;
  (t.kMaxLength = I),
    (o.TYPED_ARRAY_SUPPORT = Q()),
    !o.TYPED_ARRAY_SUPPORT &&
      typeof console < "u" &&
      typeof console.error == "function" &&
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
  function Q() {
    try {
      var s = new Uint8Array(1),
        r = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(r, Uint8Array.prototype),
        Object.setPrototypeOf(s, r),
        s.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(o.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (o.isBuffer(this)) return this.buffer;
    },
  }),
    Object.defineProperty(o.prototype, "offset", {
      enumerable: !0,
      get: function () {
        if (o.isBuffer(this)) return this.byteOffset;
      },
    });
  function h(s) {
    if (s > I)
      throw new RangeError(
        'The value "' + s + '" is invalid for option "size"'
      );
    var r = new Uint8Array(s);
    return Object.setPrototypeOf(r, o.prototype), r;
  }
  function o(s, r, i) {
    if (typeof s == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return M(s);
    }
    return w(s, r, i);
  }
  o.poolSize = 8192;
  function w(s, r, i) {
    if (typeof s == "string") return k(s, r);
    if (ArrayBuffer.isView(s)) return X(s);
    if (s == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof s
      );
    if (
      F(s, ArrayBuffer) ||
      (s && F(s.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (F(s, SharedArrayBuffer) || (s && F(s.buffer, SharedArrayBuffer))))
    )
      return V(s, r, i);
    if (typeof s == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var a = s.valueOf && s.valueOf();
    if (a != null && a !== s) return o.from(a, r, i);
    var c = eA(s);
    if (c) return c;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof s[Symbol.toPrimitive] == "function"
    )
      return o.from(s[Symbol.toPrimitive]("string"), r, i);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof s
    );
  }
  (o.from = function (s, r, i) {
    return w(s, r, i);
  }),
    Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(o, Uint8Array);
  function D(s) {
    if (typeof s != "number")
      throw new TypeError('"size" argument must be of type number');
    if (s < 0)
      throw new RangeError(
        'The value "' + s + '" is invalid for option "size"'
      );
  }
  function G(s, r, i) {
    return (
      D(s),
      s <= 0
        ? h(s)
        : r !== void 0
        ? typeof i == "string"
          ? h(s).fill(r, i)
          : h(s).fill(r)
        : h(s)
    );
  }
  o.alloc = function (s, r, i) {
    return G(s, r, i);
  };
  function M(s) {
    return D(s), h(s < 0 ? 0 : lA(s) | 0);
  }
  (o.allocUnsafe = function (s) {
    return M(s);
  }),
    (o.allocUnsafeSlow = function (s) {
      return M(s);
    });
  function k(s, r) {
    if (((typeof r != "string" || r === "") && (r = "utf8"), !o.isEncoding(r)))
      throw new TypeError("Unknown encoding: " + r);
    var i = rA(s, r) | 0,
      a = h(i),
      c = a.write(s, r);
    return c !== i && (a = a.slice(0, c)), a;
  }
  function Y(s) {
    for (
      var r = s.length < 0 ? 0 : lA(s.length) | 0, i = h(r), a = 0;
      a < r;
      a += 1
    )
      i[a] = s[a] & 255;
    return i;
  }
  function X(s) {
    if (F(s, Uint8Array)) {
      var r = new Uint8Array(s);
      return V(r.buffer, r.byteOffset, r.byteLength);
    }
    return Y(s);
  }
  function V(s, r, i) {
    if (r < 0 || s.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (s.byteLength < r + (i || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var a;
    return (
      r === void 0 && i === void 0
        ? (a = new Uint8Array(s))
        : i === void 0
        ? (a = new Uint8Array(s, r))
        : (a = new Uint8Array(s, r, i)),
      Object.setPrototypeOf(a, o.prototype),
      a
    );
  }
  function eA(s) {
    if (o.isBuffer(s)) {
      var r = lA(s.length) | 0,
        i = h(r);
      return i.length === 0 || s.copy(i, 0, 0, r), i;
    }
    if (s.length !== void 0)
      return typeof s.length != "number" || x(s.length) ? h(0) : Y(s);
    if (s.type === "Buffer" && Array.isArray(s.data)) return Y(s.data);
  }
  function lA(s) {
    if (s >= I)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          I.toString(16) +
          " bytes"
      );
    return s | 0;
  }
  function gA(s) {
    return +s != s && (s = 0), o.alloc(+s);
  }
  (o.isBuffer = function (r) {
    return r != null && r._isBuffer === !0 && r !== o.prototype;
  }),
    (o.compare = function (r, i) {
      if (
        (F(r, Uint8Array) && (r = o.from(r, r.offset, r.byteLength)),
        F(i, Uint8Array) && (i = o.from(i, i.offset, i.byteLength)),
        !o.isBuffer(r) || !o.isBuffer(i))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (r === i) return 0;
      for (
        var a = r.length, c = i.length, p = 0, m = Math.min(a, c);
        p < m;
        ++p
      )
        if (r[p] !== i[p]) {
          (a = r[p]), (c = i[p]);
          break;
        }
      return a < c ? -1 : c < a ? 1 : 0;
    }),
    (o.isEncoding = function (r) {
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
    (o.concat = function (r, i) {
      if (!Array.isArray(r))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (r.length === 0) return o.alloc(0);
      var a;
      if (i === void 0) for (i = 0, a = 0; a < r.length; ++a) i += r[a].length;
      var c = o.allocUnsafe(i),
        p = 0;
      for (a = 0; a < r.length; ++a) {
        var m = r[a];
        if (F(m, Uint8Array))
          p + m.length > c.length
            ? o.from(m).copy(c, p)
            : Uint8Array.prototype.set.call(c, m, p);
        else if (o.isBuffer(m)) m.copy(c, p);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        p += m.length;
      }
      return c;
    });
  function rA(s, r) {
    if (o.isBuffer(s)) return s.length;
    if (ArrayBuffer.isView(s) || F(s, ArrayBuffer)) return s.byteLength;
    if (typeof s != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof s
      );
    var i = s.length,
      a = arguments.length > 2 && arguments[2] === !0;
    if (!a && i === 0) return 0;
    for (var c = !1; ; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return i;
        case "utf8":
        case "utf-8":
          return _(s).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return i * 2;
        case "hex":
          return i >>> 1;
        case "base64":
          return f(s).length;
        default:
          if (c) return a ? -1 : _(s).length;
          (r = ("" + r).toLowerCase()), (c = !0);
      }
  }
  o.byteLength = rA;
  function xA(s, r, i) {
    var a = !1;
    if (
      ((r === void 0 || r < 0) && (r = 0),
      r > this.length ||
        ((i === void 0 || i > this.length) && (i = this.length), i <= 0) ||
        ((i >>>= 0), (r >>>= 0), i <= r))
    )
      return "";
    for (s || (s = "utf8"); ; )
      switch (s) {
        case "hex":
          return L(this, r, i);
        case "utf8":
        case "utf-8":
          return SA(this, r, i);
        case "ascii":
          return mA(this, r, i);
        case "latin1":
        case "binary":
          return J(this, r, i);
        case "base64":
          return sA(this, r, i);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return P(this, r, i);
        default:
          if (a) throw new TypeError("Unknown encoding: " + s);
          (s = (s + "").toLowerCase()), (a = !0);
      }
  }
  o.prototype._isBuffer = !0;
  function O(s, r, i) {
    var a = s[r];
    (s[r] = s[i]), (s[i] = a);
  }
  (o.prototype.swap16 = function () {
    var r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var i = 0; i < r; i += 2) O(this, i, i + 1);
    return this;
  }),
    (o.prototype.swap32 = function () {
      var r = this.length;
      if (r % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var i = 0; i < r; i += 4) O(this, i, i + 3), O(this, i + 1, i + 2);
      return this;
    }),
    (o.prototype.swap64 = function () {
      var r = this.length;
      if (r % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var i = 0; i < r; i += 8)
        O(this, i, i + 7),
          O(this, i + 1, i + 6),
          O(this, i + 2, i + 5),
          O(this, i + 3, i + 4);
      return this;
    }),
    (o.prototype.toString = function () {
      var r = this.length;
      return r === 0
        ? ""
        : arguments.length === 0
        ? SA(this, 0, r)
        : xA.apply(this, arguments);
    }),
    (o.prototype.toLocaleString = o.prototype.toString),
    (o.prototype.equals = function (r) {
      if (!o.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
      return this === r ? !0 : o.compare(this, r) === 0;
    }),
    (o.prototype.inspect = function () {
      var r = "",
        i = t.INSPECT_MAX_BYTES;
      return (
        (r = this.toString("hex", 0, i)
          .replace(/(.{2})/g, "$1 ")
          .trim()),
        this.length > i && (r += " ... "),
        "<Buffer " + r + ">"
      );
    }),
    g && (o.prototype[g] = o.prototype.inspect),
    (o.prototype.compare = function (r, i, a, c, p) {
      if (
        (F(r, Uint8Array) && (r = o.from(r, r.offset, r.byteLength)),
        !o.isBuffer(r))
      )
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof r
        );
      if (
        (i === void 0 && (i = 0),
        a === void 0 && (a = r ? r.length : 0),
        c === void 0 && (c = 0),
        p === void 0 && (p = this.length),
        i < 0 || a > r.length || c < 0 || p > this.length)
      )
        throw new RangeError("out of range index");
      if (c >= p && i >= a) return 0;
      if (c >= p) return -1;
      if (i >= a) return 1;
      if (((i >>>= 0), (a >>>= 0), (c >>>= 0), (p >>>= 0), this === r))
        return 0;
      for (
        var m = p - c,
          b = a - i,
          K = Math.min(m, b),
          Z = this.slice(c, p),
          tA = r.slice(i, a),
          E = 0;
        E < K;
        ++E
      )
        if (Z[E] !== tA[E]) {
          (m = Z[E]), (b = tA[E]);
          break;
        }
      return m < b ? -1 : b < m ? 1 : 0;
    });
  function W(s, r, i, a, c) {
    if (s.length === 0) return -1;
    if (
      (typeof i == "string"
        ? ((a = i), (i = 0))
        : i > 2147483647
        ? (i = 2147483647)
        : i < -2147483648 && (i = -2147483648),
      (i = +i),
      x(i) && (i = c ? 0 : s.length - 1),
      i < 0 && (i = s.length + i),
      i >= s.length)
    ) {
      if (c) return -1;
      i = s.length - 1;
    } else if (i < 0)
      if (c) i = 0;
      else return -1;
    if ((typeof r == "string" && (r = o.from(r, a)), o.isBuffer(r)))
      return r.length === 0 ? -1 : j(s, r, i, a, c);
    if (typeof r == "number")
      return (
        (r = r & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? c
            ? Uint8Array.prototype.indexOf.call(s, r, i)
            : Uint8Array.prototype.lastIndexOf.call(s, r, i)
          : j(s, [r], i, a, c)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function j(s, r, i, a, c) {
    var p = 1,
      m = s.length,
      b = r.length;
    if (
      a !== void 0 &&
      ((a = String(a).toLowerCase()),
      a === "ucs2" || a === "ucs-2" || a === "utf16le" || a === "utf-16le")
    ) {
      if (s.length < 2 || r.length < 2) return -1;
      (p = 2), (m /= 2), (b /= 2), (i /= 2);
    }
    function K(B, l) {
      return p === 1 ? B[l] : B.readUInt16BE(l * p);
    }
    var Z;
    if (c) {
      var tA = -1;
      for (Z = i; Z < m; Z++)
        if (K(s, Z) === K(r, tA === -1 ? 0 : Z - tA)) {
          if ((tA === -1 && (tA = Z), Z - tA + 1 === b)) return tA * p;
        } else tA !== -1 && (Z -= Z - tA), (tA = -1);
    } else
      for (i + b > m && (i = m - b), Z = i; Z >= 0; Z--) {
        for (var E = !0, n = 0; n < b; n++)
          if (K(s, Z + n) !== K(r, n)) {
            E = !1;
            break;
          }
        if (E) return Z;
      }
    return -1;
  }
  (o.prototype.includes = function (r, i, a) {
    return this.indexOf(r, i, a) !== -1;
  }),
    (o.prototype.indexOf = function (r, i, a) {
      return W(this, r, i, a, !0);
    }),
    (o.prototype.lastIndexOf = function (r, i, a) {
      return W(this, r, i, a, !1);
    });
  function AA(s, r, i, a) {
    i = Number(i) || 0;
    var c = s.length - i;
    a ? ((a = Number(a)), a > c && (a = c)) : (a = c);
    var p = r.length;
    a > p / 2 && (a = p / 2);
    for (var m = 0; m < a; ++m) {
      var b = parseInt(r.substr(m * 2, 2), 16);
      if (x(b)) return m;
      s[i + m] = b;
    }
    return m;
  }
  function BA(s, r, i, a) {
    return y(_(r, s.length - i), s, i, a);
  }
  function T(s, r, i, a) {
    return y(v(r), s, i, a);
  }
  function hA(s, r, i, a) {
    return y(f(r), s, i, a);
  }
  function EA(s, r, i, a) {
    return y(u(r, s.length - i), s, i, a);
  }
  (o.prototype.write = function (r, i, a, c) {
    if (i === void 0) (c = "utf8"), (a = this.length), (i = 0);
    else if (a === void 0 && typeof i == "string")
      (c = i), (a = this.length), (i = 0);
    else if (isFinite(i))
      (i = i >>> 0),
        isFinite(a)
          ? ((a = a >>> 0), c === void 0 && (c = "utf8"))
          : ((c = a), (a = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var p = this.length - i;
    if (
      ((a === void 0 || a > p) && (a = p),
      (r.length > 0 && (a < 0 || i < 0)) || i > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    c || (c = "utf8");
    for (var m = !1; ; )
      switch (c) {
        case "hex":
          return AA(this, r, i, a);
        case "utf8":
        case "utf-8":
          return BA(this, r, i, a);
        case "ascii":
        case "latin1":
        case "binary":
          return T(this, r, i, a);
        case "base64":
          return hA(this, r, i, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return EA(this, r, i, a);
        default:
          if (m) throw new TypeError("Unknown encoding: " + c);
          (c = ("" + c).toLowerCase()), (m = !0);
      }
  }),
    (o.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function sA(s, r, i) {
    return r === 0 && i === s.length
      ? A.fromByteArray(s)
      : A.fromByteArray(s.slice(r, i));
  }
  function SA(s, r, i) {
    i = Math.min(s.length, i);
    for (var a = [], c = r; c < i; ) {
      var p = s[c],
        m = null,
        b = p > 239 ? 4 : p > 223 ? 3 : p > 191 ? 2 : 1;
      if (c + b <= i) {
        var K, Z, tA, E;
        switch (b) {
          case 1:
            p < 128 && (m = p);
            break;
          case 2:
            (K = s[c + 1]),
              (K & 192) === 128 &&
                ((E = ((p & 31) << 6) | (K & 63)), E > 127 && (m = E));
            break;
          case 3:
            (K = s[c + 1]),
              (Z = s[c + 2]),
              (K & 192) === 128 &&
                (Z & 192) === 128 &&
                ((E = ((p & 15) << 12) | ((K & 63) << 6) | (Z & 63)),
                E > 2047 && (E < 55296 || E > 57343) && (m = E));
            break;
          case 4:
            (K = s[c + 1]),
              (Z = s[c + 2]),
              (tA = s[c + 3]),
              (K & 192) === 128 &&
                (Z & 192) === 128 &&
                (tA & 192) === 128 &&
                ((E =
                  ((p & 15) << 18) |
                  ((K & 63) << 12) |
                  ((Z & 63) << 6) |
                  (tA & 63)),
                E > 65535 && E < 1114112 && (m = E));
        }
      }
      m === null
        ? ((m = 65533), (b = 1))
        : m > 65535 &&
          ((m -= 65536),
          a.push(((m >>> 10) & 1023) | 55296),
          (m = 56320 | (m & 1023))),
        a.push(m),
        (c += b);
    }
    return LA(a);
  }
  var wA = 4096;
  function LA(s) {
    var r = s.length;
    if (r <= wA) return String.fromCharCode.apply(String, s);
    for (var i = "", a = 0; a < r; )
      i += String.fromCharCode.apply(String, s.slice(a, (a += wA)));
    return i;
  }
  function mA(s, r, i) {
    var a = "";
    i = Math.min(s.length, i);
    for (var c = r; c < i; ++c) a += String.fromCharCode(s[c] & 127);
    return a;
  }
  function J(s, r, i) {
    var a = "";
    i = Math.min(s.length, i);
    for (var c = r; c < i; ++c) a += String.fromCharCode(s[c]);
    return a;
  }
  function L(s, r, i) {
    var a = s.length;
    (!r || r < 0) && (r = 0), (!i || i < 0 || i > a) && (i = a);
    for (var c = "", p = r; p < i; ++p) c += N[s[p]];
    return c;
  }
  function P(s, r, i) {
    for (var a = s.slice(r, i), c = "", p = 0; p < a.length - 1; p += 2)
      c += String.fromCharCode(a[p] + a[p + 1] * 256);
    return c;
  }
  o.prototype.slice = function (r, i) {
    var a = this.length;
    (r = ~~r),
      (i = i === void 0 ? a : ~~i),
      r < 0 ? ((r += a), r < 0 && (r = 0)) : r > a && (r = a),
      i < 0 ? ((i += a), i < 0 && (i = 0)) : i > a && (i = a),
      i < r && (i = r);
    var c = this.subarray(r, i);
    return Object.setPrototypeOf(c, o.prototype), c;
  };
  function H(s, r, i) {
    if (s % 1 !== 0 || s < 0) throw new RangeError("offset is not uint");
    if (s + r > i)
      throw new RangeError("Trying to access beyond buffer length");
  }
  (o.prototype.readUintLE = o.prototype.readUIntLE =
    function (r, i, a) {
      (r = r >>> 0), (i = i >>> 0), a || H(r, i, this.length);
      for (var c = this[r], p = 1, m = 0; ++m < i && (p *= 256); )
        c += this[r + m] * p;
      return c;
    }),
    (o.prototype.readUintBE = o.prototype.readUIntBE =
      function (r, i, a) {
        (r = r >>> 0), (i = i >>> 0), a || H(r, i, this.length);
        for (var c = this[r + --i], p = 1; i > 0 && (p *= 256); )
          c += this[r + --i] * p;
        return c;
      }),
    (o.prototype.readUint8 = o.prototype.readUInt8 =
      function (r, i) {
        return (r = r >>> 0), i || H(r, 1, this.length), this[r];
      }),
    (o.prototype.readUint16LE = o.prototype.readUInt16LE =
      function (r, i) {
        return (
          (r = r >>> 0), i || H(r, 2, this.length), this[r] | (this[r + 1] << 8)
        );
      }),
    (o.prototype.readUint16BE = o.prototype.readUInt16BE =
      function (r, i) {
        return (
          (r = r >>> 0), i || H(r, 2, this.length), (this[r] << 8) | this[r + 1]
        );
      }),
    (o.prototype.readUint32LE = o.prototype.readUInt32LE =
      function (r, i) {
        return (
          (r = r >>> 0),
          i || H(r, 4, this.length),
          (this[r] | (this[r + 1] << 8) | (this[r + 2] << 16)) +
            this[r + 3] * 16777216
        );
      }),
    (o.prototype.readUint32BE = o.prototype.readUInt32BE =
      function (r, i) {
        return (
          (r = r >>> 0),
          i || H(r, 4, this.length),
          this[r] * 16777216 +
            ((this[r + 1] << 16) | (this[r + 2] << 8) | this[r + 3])
        );
      }),
    (o.prototype.readIntLE = function (r, i, a) {
      (r = r >>> 0), (i = i >>> 0), a || H(r, i, this.length);
      for (var c = this[r], p = 1, m = 0; ++m < i && (p *= 256); )
        c += this[r + m] * p;
      return (p *= 128), c >= p && (c -= Math.pow(2, 8 * i)), c;
    }),
    (o.prototype.readIntBE = function (r, i, a) {
      (r = r >>> 0), (i = i >>> 0), a || H(r, i, this.length);
      for (var c = i, p = 1, m = this[r + --c]; c > 0 && (p *= 256); )
        m += this[r + --c] * p;
      return (p *= 128), m >= p && (m -= Math.pow(2, 8 * i)), m;
    }),
    (o.prototype.readInt8 = function (r, i) {
      return (
        (r = r >>> 0),
        i || H(r, 1, this.length),
        this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r]
      );
    }),
    (o.prototype.readInt16LE = function (r, i) {
      (r = r >>> 0), i || H(r, 2, this.length);
      var a = this[r] | (this[r + 1] << 8);
      return a & 32768 ? a | 4294901760 : a;
    }),
    (o.prototype.readInt16BE = function (r, i) {
      (r = r >>> 0), i || H(r, 2, this.length);
      var a = this[r + 1] | (this[r] << 8);
      return a & 32768 ? a | 4294901760 : a;
    }),
    (o.prototype.readInt32LE = function (r, i) {
      return (
        (r = r >>> 0),
        i || H(r, 4, this.length),
        this[r] | (this[r + 1] << 8) | (this[r + 2] << 16) | (this[r + 3] << 24)
      );
    }),
    (o.prototype.readInt32BE = function (r, i) {
      return (
        (r = r >>> 0),
        i || H(r, 4, this.length),
        (this[r] << 24) | (this[r + 1] << 16) | (this[r + 2] << 8) | this[r + 3]
      );
    }),
    (o.prototype.readFloatLE = function (r, i) {
      return (
        (r = r >>> 0), i || H(r, 4, this.length), e.read(this, r, !0, 23, 4)
      );
    }),
    (o.prototype.readFloatBE = function (r, i) {
      return (
        (r = r >>> 0), i || H(r, 4, this.length), e.read(this, r, !1, 23, 4)
      );
    }),
    (o.prototype.readDoubleLE = function (r, i) {
      return (
        (r = r >>> 0), i || H(r, 8, this.length), e.read(this, r, !0, 52, 8)
      );
    }),
    (o.prototype.readDoubleBE = function (r, i) {
      return (
        (r = r >>> 0), i || H(r, 8, this.length), e.read(this, r, !1, 52, 8)
      );
    });
  function q(s, r, i, a, c, p) {
    if (!o.isBuffer(s))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > c || r < p)
      throw new RangeError('"value" argument is out of bounds');
    if (i + a > s.length) throw new RangeError("Index out of range");
  }
  (o.prototype.writeUintLE = o.prototype.writeUIntLE =
    function (r, i, a, c) {
      if (((r = +r), (i = i >>> 0), (a = a >>> 0), !c)) {
        var p = Math.pow(2, 8 * a) - 1;
        q(this, r, i, a, p, 0);
      }
      var m = 1,
        b = 0;
      for (this[i] = r & 255; ++b < a && (m *= 256); )
        this[i + b] = (r / m) & 255;
      return i + a;
    }),
    (o.prototype.writeUintBE = o.prototype.writeUIntBE =
      function (r, i, a, c) {
        if (((r = +r), (i = i >>> 0), (a = a >>> 0), !c)) {
          var p = Math.pow(2, 8 * a) - 1;
          q(this, r, i, a, p, 0);
        }
        var m = a - 1,
          b = 1;
        for (this[i + m] = r & 255; --m >= 0 && (b *= 256); )
          this[i + m] = (r / b) & 255;
        return i + a;
      }),
    (o.prototype.writeUint8 = o.prototype.writeUInt8 =
      function (r, i, a) {
        return (
          (r = +r),
          (i = i >>> 0),
          a || q(this, r, i, 1, 255, 0),
          (this[i] = r & 255),
          i + 1
        );
      }),
    (o.prototype.writeUint16LE = o.prototype.writeUInt16LE =
      function (r, i, a) {
        return (
          (r = +r),
          (i = i >>> 0),
          a || q(this, r, i, 2, 65535, 0),
          (this[i] = r & 255),
          (this[i + 1] = r >>> 8),
          i + 2
        );
      }),
    (o.prototype.writeUint16BE = o.prototype.writeUInt16BE =
      function (r, i, a) {
        return (
          (r = +r),
          (i = i >>> 0),
          a || q(this, r, i, 2, 65535, 0),
          (this[i] = r >>> 8),
          (this[i + 1] = r & 255),
          i + 2
        );
      }),
    (o.prototype.writeUint32LE = o.prototype.writeUInt32LE =
      function (r, i, a) {
        return (
          (r = +r),
          (i = i >>> 0),
          a || q(this, r, i, 4, 4294967295, 0),
          (this[i + 3] = r >>> 24),
          (this[i + 2] = r >>> 16),
          (this[i + 1] = r >>> 8),
          (this[i] = r & 255),
          i + 4
        );
      }),
    (o.prototype.writeUint32BE = o.prototype.writeUInt32BE =
      function (r, i, a) {
        return (
          (r = +r),
          (i = i >>> 0),
          a || q(this, r, i, 4, 4294967295, 0),
          (this[i] = r >>> 24),
          (this[i + 1] = r >>> 16),
          (this[i + 2] = r >>> 8),
          (this[i + 3] = r & 255),
          i + 4
        );
      }),
    (o.prototype.writeIntLE = function (r, i, a, c) {
      if (((r = +r), (i = i >>> 0), !c)) {
        var p = Math.pow(2, 8 * a - 1);
        q(this, r, i, a, p - 1, -p);
      }
      var m = 0,
        b = 1,
        K = 0;
      for (this[i] = r & 255; ++m < a && (b *= 256); )
        r < 0 && K === 0 && this[i + m - 1] !== 0 && (K = 1),
          (this[i + m] = (((r / b) >> 0) - K) & 255);
      return i + a;
    }),
    (o.prototype.writeIntBE = function (r, i, a, c) {
      if (((r = +r), (i = i >>> 0), !c)) {
        var p = Math.pow(2, 8 * a - 1);
        q(this, r, i, a, p - 1, -p);
      }
      var m = a - 1,
        b = 1,
        K = 0;
      for (this[i + m] = r & 255; --m >= 0 && (b *= 256); )
        r < 0 && K === 0 && this[i + m + 1] !== 0 && (K = 1),
          (this[i + m] = (((r / b) >> 0) - K) & 255);
      return i + a;
    }),
    (o.prototype.writeInt8 = function (r, i, a) {
      return (
        (r = +r),
        (i = i >>> 0),
        a || q(this, r, i, 1, 127, -128),
        r < 0 && (r = 255 + r + 1),
        (this[i] = r & 255),
        i + 1
      );
    }),
    (o.prototype.writeInt16LE = function (r, i, a) {
      return (
        (r = +r),
        (i = i >>> 0),
        a || q(this, r, i, 2, 32767, -32768),
        (this[i] = r & 255),
        (this[i + 1] = r >>> 8),
        i + 2
      );
    }),
    (o.prototype.writeInt16BE = function (r, i, a) {
      return (
        (r = +r),
        (i = i >>> 0),
        a || q(this, r, i, 2, 32767, -32768),
        (this[i] = r >>> 8),
        (this[i + 1] = r & 255),
        i + 2
      );
    }),
    (o.prototype.writeInt32LE = function (r, i, a) {
      return (
        (r = +r),
        (i = i >>> 0),
        a || q(this, r, i, 4, 2147483647, -2147483648),
        (this[i] = r & 255),
        (this[i + 1] = r >>> 8),
        (this[i + 2] = r >>> 16),
        (this[i + 3] = r >>> 24),
        i + 4
      );
    }),
    (o.prototype.writeInt32BE = function (r, i, a) {
      return (
        (r = +r),
        (i = i >>> 0),
        a || q(this, r, i, 4, 2147483647, -2147483648),
        r < 0 && (r = 4294967295 + r + 1),
        (this[i] = r >>> 24),
        (this[i + 1] = r >>> 16),
        (this[i + 2] = r >>> 8),
        (this[i + 3] = r & 255),
        i + 4
      );
    });
  function nA(s, r, i, a, c, p) {
    if (i + a > s.length) throw new RangeError("Index out of range");
    if (i < 0) throw new RangeError("Index out of range");
  }
  function C(s, r, i, a, c) {
    return (
      (r = +r),
      (i = i >>> 0),
      c || nA(s, r, i, 4),
      e.write(s, r, i, a, 23, 4),
      i + 4
    );
  }
  (o.prototype.writeFloatLE = function (r, i, a) {
    return C(this, r, i, !0, a);
  }),
    (o.prototype.writeFloatBE = function (r, i, a) {
      return C(this, r, i, !1, a);
    });
  function QA(s, r, i, a, c) {
    return (
      (r = +r),
      (i = i >>> 0),
      c || nA(s, r, i, 8),
      e.write(s, r, i, a, 52, 8),
      i + 8
    );
  }
  (o.prototype.writeDoubleLE = function (r, i, a) {
    return QA(this, r, i, !0, a);
  }),
    (o.prototype.writeDoubleBE = function (r, i, a) {
      return QA(this, r, i, !1, a);
    }),
    (o.prototype.copy = function (r, i, a, c) {
      if (!o.isBuffer(r)) throw new TypeError("argument should be a Buffer");
      if (
        (a || (a = 0),
        !c && c !== 0 && (c = this.length),
        i >= r.length && (i = r.length),
        i || (i = 0),
        c > 0 && c < a && (c = a),
        c === a || r.length === 0 || this.length === 0)
      )
        return 0;
      if (i < 0) throw new RangeError("targetStart out of bounds");
      if (a < 0 || a >= this.length) throw new RangeError("Index out of range");
      if (c < 0) throw new RangeError("sourceEnd out of bounds");
      c > this.length && (c = this.length),
        r.length - i < c - a && (c = r.length - i + a);
      var p = c - a;
      return (
        this === r && typeof Uint8Array.prototype.copyWithin == "function"
          ? this.copyWithin(i, a, c)
          : Uint8Array.prototype.set.call(r, this.subarray(a, c), i),
        p
      );
    }),
    (o.prototype.fill = function (r, i, a, c) {
      if (typeof r == "string") {
        if (
          (typeof i == "string"
            ? ((c = i), (i = 0), (a = this.length))
            : typeof a == "string" && ((c = a), (a = this.length)),
          c !== void 0 && typeof c != "string")
        )
          throw new TypeError("encoding must be a string");
        if (typeof c == "string" && !o.isEncoding(c))
          throw new TypeError("Unknown encoding: " + c);
        if (r.length === 1) {
          var p = r.charCodeAt(0);
          ((c === "utf8" && p < 128) || c === "latin1") && (r = p);
        }
      } else
        typeof r == "number"
          ? (r = r & 255)
          : typeof r == "boolean" && (r = Number(r));
      if (i < 0 || this.length < i || this.length < a)
        throw new RangeError("Out of range index");
      if (a <= i) return this;
      (i = i >>> 0), (a = a === void 0 ? this.length : a >>> 0), r || (r = 0);
      var m;
      if (typeof r == "number") for (m = i; m < a; ++m) this[m] = r;
      else {
        var b = o.isBuffer(r) ? r : o.from(r, c),
          K = b.length;
        if (K === 0)
          throw new TypeError(
            'The value "' + r + '" is invalid for argument "value"'
          );
        for (m = 0; m < a - i; ++m) this[m + i] = b[m % K];
      }
      return this;
    });
  var IA = /[^+/0-9A-Za-z-_]/g;
  function CA(s) {
    if (((s = s.split("=")[0]), (s = s.trim().replace(IA, "")), s.length < 2))
      return "";
    for (; s.length % 4 !== 0; ) s = s + "=";
    return s;
  }
  function _(s, r) {
    r = r || 1 / 0;
    for (var i, a = s.length, c = null, p = [], m = 0; m < a; ++m) {
      if (((i = s.charCodeAt(m)), i > 55295 && i < 57344)) {
        if (!c) {
          if (i > 56319) {
            (r -= 3) > -1 && p.push(239, 191, 189);
            continue;
          } else if (m + 1 === a) {
            (r -= 3) > -1 && p.push(239, 191, 189);
            continue;
          }
          c = i;
          continue;
        }
        if (i < 56320) {
          (r -= 3) > -1 && p.push(239, 191, 189), (c = i);
          continue;
        }
        i = (((c - 55296) << 10) | (i - 56320)) + 65536;
      } else c && (r -= 3) > -1 && p.push(239, 191, 189);
      if (((c = null), i < 128)) {
        if ((r -= 1) < 0) break;
        p.push(i);
      } else if (i < 2048) {
        if ((r -= 2) < 0) break;
        p.push((i >> 6) | 192, (i & 63) | 128);
      } else if (i < 65536) {
        if ((r -= 3) < 0) break;
        p.push((i >> 12) | 224, ((i >> 6) & 63) | 128, (i & 63) | 128);
      } else if (i < 1114112) {
        if ((r -= 4) < 0) break;
        p.push(
          (i >> 18) | 240,
          ((i >> 12) & 63) | 128,
          ((i >> 6) & 63) | 128,
          (i & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return p;
  }
  function v(s) {
    for (var r = [], i = 0; i < s.length; ++i) r.push(s.charCodeAt(i) & 255);
    return r;
  }
  function u(s, r) {
    for (var i, a, c, p = [], m = 0; m < s.length && !((r -= 2) < 0); ++m)
      (i = s.charCodeAt(m)), (a = i >> 8), (c = i % 256), p.push(c), p.push(a);
    return p;
  }
  function f(s) {
    return A.toByteArray(CA(s));
  }
  function y(s, r, i, a) {
    for (var c = 0; c < a && !(c + i >= r.length || c >= s.length); ++c)
      r[c + i] = s[c];
    return c;
  }
  function F(s, r) {
    return (
      s instanceof r ||
      (s != null &&
        s.constructor != null &&
        s.constructor.name != null &&
        s.constructor.name === r.name)
    );
  }
  function x(s) {
    return s !== s;
  }
  var N = (function () {
    for (var s = "0123456789abcdef", r = new Array(256), i = 0; i < 16; ++i)
      for (var a = i * 16, c = 0; c < 16; ++c) r[a + c] = s[i] + s[c];
    return r;
  })();
})(mt);
var Kr = { exports: {} };
(function (t) {
  (function (A) {
    var e,
      g = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
      I = Math.ceil,
      Q = Math.floor,
      h = "[BigNumber Error] ",
      o = h + "Number primitive has more than 15 significant digits: ",
      w = 1e14,
      D = 14,
      G = 9007199254740991,
      M = [
        1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13,
      ],
      k = 1e7,
      Y = 1e9;
    function X(W) {
      var j,
        AA,
        BA,
        T = (C.prototype = { constructor: C, toString: null, valueOf: null }),
        hA = new C(1),
        EA = 20,
        sA = 4,
        SA = -7,
        wA = 21,
        LA = -1e7,
        mA = 1e7,
        J = !1,
        L = 1,
        P = 0,
        H = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: " ",
          suffix: "",
        },
        q = "0123456789abcdefghijklmnopqrstuvwxyz",
        nA = !0;
      function C(u, f) {
        var y,
          F,
          x,
          N,
          s,
          r,
          i,
          a,
          c = this;
        if (!(c instanceof C)) return new C(u, f);
        if (f == null) {
          if (u && u._isBigNumber === !0) {
            (c.s = u.s),
              !u.c || u.e > mA
                ? (c.c = c.e = null)
                : u.e < LA
                ? (c.c = [(c.e = 0)])
                : ((c.e = u.e), (c.c = u.c.slice()));
            return;
          }
          if ((r = typeof u == "number") && u * 0 == 0) {
            if (((c.s = 1 / u < 0 ? ((u = -u), -1) : 1), u === ~~u)) {
              for (N = 0, s = u; s >= 10; s /= 10, N++);
              N > mA ? (c.c = c.e = null) : ((c.e = N), (c.c = [u]));
              return;
            }
            a = String(u);
          } else {
            if (!g.test((a = String(u)))) return BA(c, a, r);
            c.s = a.charCodeAt(0) == 45 ? ((a = a.slice(1)), -1) : 1;
          }
          (N = a.indexOf(".")) > -1 && (a = a.replace(".", "")),
            (s = a.search(/e/i)) > 0
              ? (N < 0 && (N = s),
                (N += +a.slice(s + 1)),
                (a = a.substring(0, s)))
              : N < 0 && (N = a.length);
        } else {
          if ((gA(f, 2, q.length, "Base"), f == 10 && nA))
            return (c = new C(u)), _(c, EA + c.e + 1, sA);
          if (((a = String(u)), (r = typeof u == "number"))) {
            if (u * 0 != 0) return BA(c, a, r, f);
            if (
              ((c.s = 1 / u < 0 ? ((a = a.slice(1)), -1) : 1),
              C.DEBUG && a.replace(/^0\.0*|\./, "").length > 15)
            )
              throw Error(o + u);
          } else c.s = a.charCodeAt(0) === 45 ? ((a = a.slice(1)), -1) : 1;
          for (y = q.slice(0, f), N = s = 0, i = a.length; s < i; s++)
            if (y.indexOf((F = a.charAt(s))) < 0) {
              if (F == ".") {
                if (s > N) {
                  N = i;
                  continue;
                }
              } else if (
                !x &&
                ((a == a.toUpperCase() && (a = a.toLowerCase())) ||
                  (a == a.toLowerCase() && (a = a.toUpperCase())))
              ) {
                (x = !0), (s = -1), (N = 0);
                continue;
              }
              return BA(c, String(u), r, f);
            }
          (r = !1),
            (a = AA(a, f, 10, c.s)),
            (N = a.indexOf(".")) > -1
              ? (a = a.replace(".", ""))
              : (N = a.length);
        }
        for (s = 0; a.charCodeAt(s) === 48; s++);
        for (i = a.length; a.charCodeAt(--i) === 48; );
        if ((a = a.slice(s, ++i))) {
          if (((i -= s), r && C.DEBUG && i > 15 && (u > G || u !== Q(u))))
            throw Error(o + c.s * u);
          if ((N = N - s - 1) > mA) c.c = c.e = null;
          else if (N < LA) c.c = [(c.e = 0)];
          else {
            if (
              ((c.e = N),
              (c.c = []),
              (s = (N + 1) % D),
              N < 0 && (s += D),
              s < i)
            ) {
              for (s && c.c.push(+a.slice(0, s)), i -= D; s < i; )
                c.c.push(+a.slice(s, (s += D)));
              s = D - (a = a.slice(s)).length;
            } else s -= i;
            for (; s--; a += "0");
            c.c.push(+a);
          }
        } else c.c = [(c.e = 0)];
      }
      (C.clone = X),
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
          function (u) {
            var f, y;
            if (u != null)
              if (typeof u == "object") {
                if (
                  (u.hasOwnProperty((f = "DECIMAL_PLACES")) &&
                    ((y = u[f]), gA(y, 0, Y, f), (EA = y)),
                  u.hasOwnProperty((f = "ROUNDING_MODE")) &&
                    ((y = u[f]), gA(y, 0, 8, f), (sA = y)),
                  u.hasOwnProperty((f = "EXPONENTIAL_AT")) &&
                    ((y = u[f]),
                    y && y.pop
                      ? (gA(y[0], -Y, 0, f),
                        gA(y[1], 0, Y, f),
                        (SA = y[0]),
                        (wA = y[1]))
                      : (gA(y, -Y, Y, f), (SA = -(wA = y < 0 ? -y : y)))),
                  u.hasOwnProperty((f = "RANGE")))
                )
                  if (((y = u[f]), y && y.pop))
                    gA(y[0], -Y, -1, f),
                      gA(y[1], 1, Y, f),
                      (LA = y[0]),
                      (mA = y[1]);
                  else if ((gA(y, -Y, Y, f), y)) LA = -(mA = y < 0 ? -y : y);
                  else throw Error(h + f + " cannot be zero: " + y);
                if (u.hasOwnProperty((f = "CRYPTO")))
                  if (((y = u[f]), y === !!y))
                    if (y)
                      if (
                        typeof crypto < "u" &&
                        crypto &&
                        (crypto.getRandomValues || crypto.randomBytes)
                      )
                        J = y;
                      else throw ((J = !y), Error(h + "crypto unavailable"));
                    else J = y;
                  else throw Error(h + f + " not true or false: " + y);
                if (
                  (u.hasOwnProperty((f = "MODULO_MODE")) &&
                    ((y = u[f]), gA(y, 0, 9, f), (L = y)),
                  u.hasOwnProperty((f = "POW_PRECISION")) &&
                    ((y = u[f]), gA(y, 0, Y, f), (P = y)),
                  u.hasOwnProperty((f = "FORMAT")))
                )
                  if (((y = u[f]), typeof y == "object")) H = y;
                  else throw Error(h + f + " not an object: " + y);
                if (u.hasOwnProperty((f = "ALPHABET")))
                  if (
                    ((y = u[f]),
                    typeof y == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(y))
                  )
                    (nA = y.slice(0, 10) == "0123456789"), (q = y);
                  else throw Error(h + f + " invalid: " + y);
              } else throw Error(h + "Object expected: " + u);
            return {
              DECIMAL_PLACES: EA,
              ROUNDING_MODE: sA,
              EXPONENTIAL_AT: [SA, wA],
              RANGE: [LA, mA],
              CRYPTO: J,
              MODULO_MODE: L,
              POW_PRECISION: P,
              FORMAT: H,
              ALPHABET: q,
            };
          }),
        (C.isBigNumber = function (u) {
          if (!u || u._isBigNumber !== !0) return !1;
          if (!C.DEBUG) return !0;
          var f,
            y,
            F = u.c,
            x = u.e,
            N = u.s;
          A: if ({}.toString.call(F) == "[object Array]") {
            if ((N === 1 || N === -1) && x >= -Y && x <= Y && x === Q(x)) {
              if (F[0] === 0) {
                if (x === 0 && F.length === 1) return !0;
                break A;
              }
              if (
                ((f = (x + 1) % D), f < 1 && (f += D), String(F[0]).length == f)
              ) {
                for (f = 0; f < F.length; f++)
                  if (((y = F[f]), y < 0 || y >= w || y !== Q(y))) break A;
                if (y !== 0) return !0;
              }
            }
          } else if (
            F === null &&
            x === null &&
            (N === null || N === 1 || N === -1)
          )
            return !0;
          throw Error(h + "Invalid BigNumber: " + u);
        }),
        (C.maximum = C.max =
          function () {
            return IA(arguments, -1);
          }),
        (C.minimum = C.min =
          function () {
            return IA(arguments, 1);
          }),
        (C.random = (function () {
          var u = 9007199254740992,
            f =
              (Math.random() * u) & 2097151
                ? function () {
                    return Q(Math.random() * u);
                  }
                : function () {
                    return (
                      ((Math.random() * 1073741824) | 0) * 8388608 +
                      ((Math.random() * 8388608) | 0)
                    );
                  };
          return function (y) {
            var F,
              x,
              N,
              s,
              r,
              i = 0,
              a = [],
              c = new C(hA);
            if ((y == null ? (y = EA) : gA(y, 0, Y), (s = I(y / D)), J))
              if (crypto.getRandomValues) {
                for (
                  F = crypto.getRandomValues(new Uint32Array((s *= 2)));
                  i < s;

                )
                  (r = F[i] * 131072 + (F[i + 1] >>> 11)),
                    r >= 9e15
                      ? ((x = crypto.getRandomValues(new Uint32Array(2))),
                        (F[i] = x[0]),
                        (F[i + 1] = x[1]))
                      : (a.push(r % 1e14), (i += 2));
                i = s / 2;
              } else if (crypto.randomBytes) {
                for (F = crypto.randomBytes((s *= 7)); i < s; )
                  (r =
                    (F[i] & 31) * 281474976710656 +
                    F[i + 1] * 1099511627776 +
                    F[i + 2] * 4294967296 +
                    F[i + 3] * 16777216 +
                    (F[i + 4] << 16) +
                    (F[i + 5] << 8) +
                    F[i + 6]),
                    r >= 9e15
                      ? crypto.randomBytes(7).copy(F, i)
                      : (a.push(r % 1e14), (i += 7));
                i = s / 7;
              } else throw ((J = !1), Error(h + "crypto unavailable"));
            if (!J) for (; i < s; ) (r = f()), r < 9e15 && (a[i++] = r % 1e14);
            for (
              s = a[--i],
                y %= D,
                s && y && ((r = M[D - y]), (a[i] = Q(s / r) * r));
              a[i] === 0;
              a.pop(), i--
            );
            if (i < 0) a = [(N = 0)];
            else {
              for (N = -1; a[0] === 0; a.splice(0, 1), N -= D);
              for (i = 1, r = a[0]; r >= 10; r /= 10, i++);
              i < D && (N -= D - i);
            }
            return (c.e = N), (c.c = a), c;
          };
        })()),
        (C.sum = function () {
          for (var u = 1, f = arguments, y = new C(f[0]); u < f.length; )
            y = y.plus(f[u++]);
          return y;
        }),
        (AA = (function () {
          var u = "0123456789";
          function f(y, F, x, N) {
            for (var s, r = [0], i, a = 0, c = y.length; a < c; ) {
              for (i = r.length; i--; r[i] *= F);
              for (r[0] += N.indexOf(y.charAt(a++)), s = 0; s < r.length; s++)
                r[s] > x - 1 &&
                  (r[s + 1] == null && (r[s + 1] = 0),
                  (r[s + 1] += (r[s] / x) | 0),
                  (r[s] %= x));
            }
            return r.reverse();
          }
          return function (y, F, x, N, s) {
            var r,
              i,
              a,
              c,
              p,
              m,
              b,
              K,
              Z = y.indexOf("."),
              tA = EA,
              E = sA;
            for (
              Z >= 0 &&
                ((c = P),
                (P = 0),
                (y = y.replace(".", "")),
                (K = new C(F)),
                (m = K.pow(y.length - Z)),
                (P = c),
                (K.c = f(O(eA(m.c), m.e, "0"), 10, x, u)),
                (K.e = K.c.length)),
                b = f(y, F, x, s ? ((r = q), u) : ((r = u), q)),
                a = c = b.length;
              b[--c] == 0;
              b.pop()
            );
            if (!b[0]) return r.charAt(0);
            if (
              (Z < 0
                ? --a
                : ((m.c = b),
                  (m.e = a),
                  (m.s = N),
                  (m = j(m, K, tA, E, x)),
                  (b = m.c),
                  (p = m.r),
                  (a = m.e)),
              (i = a + tA + 1),
              (Z = b[i]),
              (c = x / 2),
              (p = p || i < 0 || b[i + 1] != null),
              (p =
                E < 4
                  ? (Z != null || p) && (E == 0 || E == (m.s < 0 ? 3 : 2))
                  : Z > c ||
                    (Z == c &&
                      (E == 4 ||
                        p ||
                        (E == 6 && b[i - 1] & 1) ||
                        E == (m.s < 0 ? 8 : 7)))),
              i < 1 || !b[0])
            )
              y = p ? O(r.charAt(1), -tA, r.charAt(0)) : r.charAt(0);
            else {
              if (((b.length = i), p))
                for (--x; ++b[--i] > x; )
                  (b[i] = 0), i || (++a, (b = [1].concat(b)));
              for (c = b.length; !b[--c]; );
              for (Z = 0, y = ""; Z <= c; y += r.charAt(b[Z++]));
              y = O(y, a, r.charAt(0));
            }
            return y;
          };
        })()),
        (j = (function () {
          function u(F, x, N) {
            var s,
              r,
              i,
              a,
              c = 0,
              p = F.length,
              m = x % k,
              b = (x / k) | 0;
            for (F = F.slice(); p--; )
              (i = F[p] % k),
                (a = (F[p] / k) | 0),
                (s = b * i + a * m),
                (r = m * i + (s % k) * k + c),
                (c = ((r / N) | 0) + ((s / k) | 0) + b * a),
                (F[p] = r % N);
            return c && (F = [c].concat(F)), F;
          }
          function f(F, x, N, s) {
            var r, i;
            if (N != s) i = N > s ? 1 : -1;
            else
              for (r = i = 0; r < N; r++)
                if (F[r] != x[r]) {
                  i = F[r] > x[r] ? 1 : -1;
                  break;
                }
            return i;
          }
          function y(F, x, N, s) {
            for (var r = 0; N--; )
              (F[N] -= r),
                (r = F[N] < x[N] ? 1 : 0),
                (F[N] = r * s + F[N] - x[N]);
            for (; !F[0] && F.length > 1; F.splice(0, 1));
          }
          return function (F, x, N, s, r) {
            var i,
              a,
              c,
              p,
              m,
              b,
              K,
              Z,
              tA,
              E,
              n,
              B,
              l,
              S,
              R,
              U,
              $,
              aA = F.s == x.s ? 1 : -1,
              iA = F.c,
              z = x.c;
            if (!iA || !iA[0] || !z || !z[0])
              return new C(
                !F.s || !x.s || (iA ? z && iA[0] == z[0] : !z)
                  ? NaN
                  : (iA && iA[0] == 0) || !z
                  ? aA * 0
                  : aA / 0
              );
            for (
              Z = new C(aA),
                tA = Z.c = [],
                a = F.e - x.e,
                aA = N + a + 1,
                r ||
                  ((r = w), (a = V(F.e / D) - V(x.e / D)), (aA = (aA / D) | 0)),
                c = 0;
              z[c] == (iA[c] || 0);
              c++
            );
            if ((z[c] > (iA[c] || 0) && a--, aA < 0)) tA.push(1), (p = !0);
            else {
              for (
                S = iA.length,
                  U = z.length,
                  c = 0,
                  aA += 2,
                  m = Q(r / (z[0] + 1)),
                  m > 1 &&
                    ((z = u(z, m, r)),
                    (iA = u(iA, m, r)),
                    (U = z.length),
                    (S = iA.length)),
                  l = U,
                  E = iA.slice(0, U),
                  n = E.length;
                n < U;
                E[n++] = 0
              );
              ($ = z.slice()),
                ($ = [0].concat($)),
                (R = z[0]),
                z[1] >= r / 2 && R++;
              do {
                if (((m = 0), (i = f(z, E, U, n)), i < 0)) {
                  if (
                    ((B = E[0]),
                    U != n && (B = B * r + (E[1] || 0)),
                    (m = Q(B / R)),
                    m > 1)
                  )
                    for (
                      m >= r && (m = r - 1),
                        b = u(z, m, r),
                        K = b.length,
                        n = E.length;
                      f(b, E, K, n) == 1;

                    )
                      m--, y(b, U < K ? $ : z, K, r), (K = b.length), (i = 1);
                  else m == 0 && (i = m = 1), (b = z.slice()), (K = b.length);
                  if (
                    (K < n && (b = [0].concat(b)),
                    y(E, b, n, r),
                    (n = E.length),
                    i == -1)
                  )
                    for (; f(z, E, U, n) < 1; )
                      m++, y(E, U < n ? $ : z, n, r), (n = E.length);
                } else i === 0 && (m++, (E = [0]));
                (tA[c++] = m),
                  E[0] ? (E[n++] = iA[l] || 0) : ((E = [iA[l]]), (n = 1));
              } while ((l++ < S || E[0] != null) && aA--);
              (p = E[0] != null), tA[0] || tA.splice(0, 1);
            }
            if (r == w) {
              for (c = 1, aA = tA[0]; aA >= 10; aA /= 10, c++);
              _(Z, N + (Z.e = c + a * D - 1) + 1, s, p);
            } else (Z.e = a), (Z.r = +p);
            return Z;
          };
        })());
      function QA(u, f, y, F) {
        var x, N, s, r, i;
        if ((y == null ? (y = sA) : gA(y, 0, 8), !u.c)) return u.toString();
        if (((x = u.c[0]), (s = u.e), f == null))
          (i = eA(u.c)),
            (i =
              F == 1 || (F == 2 && (s <= SA || s >= wA))
                ? xA(i, s)
                : O(i, s, "0"));
        else if (
          ((u = _(new C(u), f, y)),
          (N = u.e),
          (i = eA(u.c)),
          (r = i.length),
          F == 1 || (F == 2 && (f <= N || N <= SA)))
        ) {
          for (; r < f; i += "0", r++);
          i = xA(i, N);
        } else if (((f -= s), (i = O(i, N, "0")), N + 1 > r)) {
          if (--f > 0) for (i += "."; f--; i += "0");
        } else if (((f += N - r), f > 0))
          for (N + 1 == r && (i += "."); f--; i += "0");
        return u.s < 0 && x ? "-" + i : i;
      }
      function IA(u, f) {
        for (var y, F, x = 1, N = new C(u[0]); x < u.length; x++)
          (F = new C(u[x])),
            (!F.s || (y = lA(N, F)) === f || (y === 0 && N.s === f)) && (N = F);
        return N;
      }
      function CA(u, f, y) {
        for (var F = 1, x = f.length; !f[--x]; f.pop());
        for (x = f[0]; x >= 10; x /= 10, F++);
        return (
          (y = F + y * D - 1) > mA
            ? (u.c = u.e = null)
            : y < LA
            ? (u.c = [(u.e = 0)])
            : ((u.e = y), (u.c = f)),
          u
        );
      }
      BA = (function () {
        var u = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
          f = /^([^.]+)\.$/,
          y = /^\.([^.]+)$/,
          F = /^-?(Infinity|NaN)$/,
          x = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function (N, s, r, i) {
          var a,
            c = r ? s : s.replace(x, "");
          if (F.test(c)) N.s = isNaN(c) ? null : c < 0 ? -1 : 1;
          else {
            if (
              !r &&
              ((c = c.replace(u, function (p, m, b) {
                return (
                  (a = (b = b.toLowerCase()) == "x" ? 16 : b == "b" ? 2 : 8),
                  !i || i == a ? m : p
                );
              })),
              i && ((a = i), (c = c.replace(f, "$1").replace(y, "0.$1"))),
              s != c)
            )
              return new C(c, a);
            if (C.DEBUG)
              throw Error(
                h + "Not a" + (i ? " base " + i : "") + " number: " + s
              );
            N.s = null;
          }
          N.c = N.e = null;
        };
      })();
      function _(u, f, y, F) {
        var x,
          N,
          s,
          r,
          i,
          a,
          c,
          p = u.c,
          m = M;
        if (p) {
          A: {
            for (x = 1, r = p[0]; r >= 10; r /= 10, x++);
            if (((N = f - x), N < 0))
              (N += D),
                (s = f),
                (i = p[(a = 0)]),
                (c = Q((i / m[x - s - 1]) % 10));
            else if (((a = I((N + 1) / D)), a >= p.length))
              if (F) {
                for (; p.length <= a; p.push(0));
                (i = c = 0), (x = 1), (N %= D), (s = N - D + 1);
              } else break A;
            else {
              for (i = r = p[a], x = 1; r >= 10; r /= 10, x++);
              (N %= D),
                (s = N - D + x),
                (c = s < 0 ? 0 : Q((i / m[x - s - 1]) % 10));
            }
            if (
              ((F =
                F ||
                f < 0 ||
                p[a + 1] != null ||
                (s < 0 ? i : i % m[x - s - 1])),
              (F =
                y < 4
                  ? (c || F) && (y == 0 || y == (u.s < 0 ? 3 : 2))
                  : c > 5 ||
                    (c == 5 &&
                      (y == 4 ||
                        F ||
                        (y == 6 &&
                          (N > 0 ? (s > 0 ? i / m[x - s] : 0) : p[a - 1]) % 10 &
                            1) ||
                        y == (u.s < 0 ? 8 : 7)))),
              f < 1 || !p[0])
            )
              return (
                (p.length = 0),
                F
                  ? ((f -= u.e + 1),
                    (p[0] = m[(D - (f % D)) % D]),
                    (u.e = -f || 0))
                  : (p[0] = u.e = 0),
                u
              );
            if (
              (N == 0
                ? ((p.length = a), (r = 1), a--)
                : ((p.length = a + 1),
                  (r = m[D - N]),
                  (p[a] = s > 0 ? Q((i / m[x - s]) % m[s]) * r : 0)),
              F)
            )
              for (;;)
                if (a == 0) {
                  for (N = 1, s = p[0]; s >= 10; s /= 10, N++);
                  for (s = p[0] += r, r = 1; s >= 10; s /= 10, r++);
                  N != r && (u.e++, p[0] == w && (p[0] = 1));
                  break;
                } else {
                  if (((p[a] += r), p[a] != w)) break;
                  (p[a--] = 0), (r = 1);
                }
            for (N = p.length; p[--N] === 0; p.pop());
          }
          u.e > mA ? (u.c = u.e = null) : u.e < LA && (u.c = [(u.e = 0)]);
        }
        return u;
      }
      function v(u) {
        var f,
          y = u.e;
        return y === null
          ? u.toString()
          : ((f = eA(u.c)),
            (f = y <= SA || y >= wA ? xA(f, y) : O(f, y, "0")),
            u.s < 0 ? "-" + f : f);
      }
      return (
        (T.absoluteValue = T.abs =
          function () {
            var u = new C(this);
            return u.s < 0 && (u.s = 1), u;
          }),
        (T.comparedTo = function (u, f) {
          return lA(this, new C(u, f));
        }),
        (T.decimalPlaces = T.dp =
          function (u, f) {
            var y,
              F,
              x,
              N = this;
            if (u != null)
              return (
                gA(u, 0, Y),
                f == null ? (f = sA) : gA(f, 0, 8),
                _(new C(N), u + N.e + 1, f)
              );
            if (!(y = N.c)) return null;
            if (((F = ((x = y.length - 1) - V(this.e / D)) * D), (x = y[x])))
              for (; x % 10 == 0; x /= 10, F--);
            return F < 0 && (F = 0), F;
          }),
        (T.dividedBy = T.div =
          function (u, f) {
            return j(this, new C(u, f), EA, sA);
          }),
        (T.dividedToIntegerBy = T.idiv =
          function (u, f) {
            return j(this, new C(u, f), 0, 1);
          }),
        (T.exponentiatedBy = T.pow =
          function (u, f) {
            var y,
              F,
              x,
              N,
              s,
              r,
              i,
              a,
              c,
              p = this;
            if (((u = new C(u)), u.c && !u.isInteger()))
              throw Error(h + "Exponent not an integer: " + v(u));
            if (
              (f != null && (f = new C(f)),
              (r = u.e > 14),
              !p.c ||
                !p.c[0] ||
                (p.c[0] == 1 && !p.e && p.c.length == 1) ||
                !u.c ||
                !u.c[0])
            )
              return (
                (c = new C(Math.pow(+v(p), r ? u.s * (2 - rA(u)) : +v(u)))),
                f ? c.mod(f) : c
              );
            if (((i = u.s < 0), f)) {
              if (f.c ? !f.c[0] : !f.s) return new C(NaN);
              (F = !i && p.isInteger() && f.isInteger()), F && (p = p.mod(f));
            } else {
              if (
                u.e > 9 &&
                (p.e > 0 ||
                  p.e < -1 ||
                  (p.e == 0
                    ? p.c[0] > 1 || (r && p.c[1] >= 24e7)
                    : p.c[0] < 8e13 || (r && p.c[0] <= 9999975e7)))
              )
                return (
                  (N = p.s < 0 && rA(u) ? -0 : 0),
                  p.e > -1 && (N = 1 / N),
                  new C(i ? 1 / N : N)
                );
              P && (N = I(P / D + 2));
            }
            for (
              r
                ? ((y = new C(0.5)), i && (u.s = 1), (a = rA(u)))
                : ((x = Math.abs(+v(u))), (a = x % 2)),
                c = new C(hA);
              ;

            ) {
              if (a) {
                if (((c = c.times(p)), !c.c)) break;
                N ? c.c.length > N && (c.c.length = N) : F && (c = c.mod(f));
              }
              if (x) {
                if (((x = Q(x / 2)), x === 0)) break;
                a = x % 2;
              } else if (((u = u.times(y)), _(u, u.e + 1, 1), u.e > 14))
                a = rA(u);
              else {
                if (((x = +v(u)), x === 0)) break;
                a = x % 2;
              }
              (p = p.times(p)),
                N
                  ? p.c && p.c.length > N && (p.c.length = N)
                  : F && (p = p.mod(f));
            }
            return F
              ? c
              : (i && (c = hA.div(c)), f ? c.mod(f) : N ? _(c, P, sA, s) : c);
          }),
        (T.integerValue = function (u) {
          var f = new C(this);
          return u == null ? (u = sA) : gA(u, 0, 8), _(f, f.e + 1, u);
        }),
        (T.isEqualTo = T.eq =
          function (u, f) {
            return lA(this, new C(u, f)) === 0;
          }),
        (T.isFinite = function () {
          return !!this.c;
        }),
        (T.isGreaterThan = T.gt =
          function (u, f) {
            return lA(this, new C(u, f)) > 0;
          }),
        (T.isGreaterThanOrEqualTo = T.gte =
          function (u, f) {
            return (f = lA(this, new C(u, f))) === 1 || f === 0;
          }),
        (T.isInteger = function () {
          return !!this.c && V(this.e / D) > this.c.length - 2;
        }),
        (T.isLessThan = T.lt =
          function (u, f) {
            return lA(this, new C(u, f)) < 0;
          }),
        (T.isLessThanOrEqualTo = T.lte =
          function (u, f) {
            return (f = lA(this, new C(u, f))) === -1 || f === 0;
          }),
        (T.isNaN = function () {
          return !this.s;
        }),
        (T.isNegative = function () {
          return this.s < 0;
        }),
        (T.isPositive = function () {
          return this.s > 0;
        }),
        (T.isZero = function () {
          return !!this.c && this.c[0] == 0;
        }),
        (T.minus = function (u, f) {
          var y,
            F,
            x,
            N,
            s = this,
            r = s.s;
          if (((u = new C(u, f)), (f = u.s), !r || !f)) return new C(NaN);
          if (r != f) return (u.s = -f), s.plus(u);
          var i = s.e / D,
            a = u.e / D,
            c = s.c,
            p = u.c;
          if (!i || !a) {
            if (!c || !p) return c ? ((u.s = -f), u) : new C(p ? s : NaN);
            if (!c[0] || !p[0])
              return p[0]
                ? ((u.s = -f), u)
                : new C(c[0] ? s : sA == 3 ? -0 : 0);
          }
          if (((i = V(i)), (a = V(a)), (c = c.slice()), (r = i - a))) {
            for (
              (N = r < 0) ? ((r = -r), (x = c)) : ((a = i), (x = p)),
                x.reverse(),
                f = r;
              f--;
              x.push(0)
            );
            x.reverse();
          } else
            for (
              F = (N = (r = c.length) < (f = p.length)) ? r : f, r = f = 0;
              f < F;
              f++
            )
              if (c[f] != p[f]) {
                N = c[f] < p[f];
                break;
              }
          if (
            (N && ((x = c), (c = p), (p = x), (u.s = -u.s)),
            (f = (F = p.length) - (y = c.length)),
            f > 0)
          )
            for (; f--; c[y++] = 0);
          for (f = w - 1; F > r; ) {
            if (c[--F] < p[F]) {
              for (y = F; y && !c[--y]; c[y] = f);
              --c[y], (c[F] += w);
            }
            c[F] -= p[F];
          }
          for (; c[0] == 0; c.splice(0, 1), --a);
          return c[0]
            ? CA(u, c, a)
            : ((u.s = sA == 3 ? -1 : 1), (u.c = [(u.e = 0)]), u);
        }),
        (T.modulo = T.mod =
          function (u, f) {
            var y,
              F,
              x = this;
            return (
              (u = new C(u, f)),
              !x.c || !u.s || (u.c && !u.c[0])
                ? new C(NaN)
                : !u.c || (x.c && !x.c[0])
                ? new C(x)
                : (L == 9
                    ? ((F = u.s),
                      (u.s = 1),
                      (y = j(x, u, 0, 3)),
                      (u.s = F),
                      (y.s *= F))
                    : (y = j(x, u, 0, L)),
                  (u = x.minus(y.times(u))),
                  !u.c[0] && L == 1 && (u.s = x.s),
                  u)
            );
          }),
        (T.multipliedBy = T.times =
          function (u, f) {
            var y,
              F,
              x,
              N,
              s,
              r,
              i,
              a,
              c,
              p,
              m,
              b,
              K,
              Z,
              tA,
              E = this,
              n = E.c,
              B = (u = new C(u, f)).c;
            if (!n || !B || !n[0] || !B[0])
              return (
                !E.s || !u.s || (n && !n[0] && !B) || (B && !B[0] && !n)
                  ? (u.c = u.e = u.s = null)
                  : ((u.s *= E.s),
                    !n || !B ? (u.c = u.e = null) : ((u.c = [0]), (u.e = 0))),
                u
              );
            for (
              F = V(E.e / D) + V(u.e / D),
                u.s *= E.s,
                i = n.length,
                p = B.length,
                i < p && ((K = n), (n = B), (B = K), (x = i), (i = p), (p = x)),
                x = i + p,
                K = [];
              x--;
              K.push(0)
            );
            for (Z = w, tA = k, x = p; --x >= 0; ) {
              for (
                y = 0, m = B[x] % tA, b = (B[x] / tA) | 0, s = i, N = x + s;
                N > x;

              )
                (a = n[--s] % tA),
                  (c = (n[s] / tA) | 0),
                  (r = b * a + c * m),
                  (a = m * a + (r % tA) * tA + K[N] + y),
                  (y = ((a / Z) | 0) + ((r / tA) | 0) + b * c),
                  (K[N--] = a % Z);
              K[N] = y;
            }
            return y ? ++F : K.splice(0, 1), CA(u, K, F);
          }),
        (T.negated = function () {
          var u = new C(this);
          return (u.s = -u.s || null), u;
        }),
        (T.plus = function (u, f) {
          var y,
            F = this,
            x = F.s;
          if (((u = new C(u, f)), (f = u.s), !x || !f)) return new C(NaN);
          if (x != f) return (u.s = -f), F.minus(u);
          var N = F.e / D,
            s = u.e / D,
            r = F.c,
            i = u.c;
          if (!N || !s) {
            if (!r || !i) return new C(x / 0);
            if (!r[0] || !i[0]) return i[0] ? u : new C(r[0] ? F : x * 0);
          }
          if (((N = V(N)), (s = V(s)), (r = r.slice()), (x = N - s))) {
            for (
              x > 0 ? ((s = N), (y = i)) : ((x = -x), (y = r)), y.reverse();
              x--;
              y.push(0)
            );
            y.reverse();
          }
          for (
            x = r.length,
              f = i.length,
              x - f < 0 && ((y = i), (i = r), (r = y), (f = x)),
              x = 0;
            f;

          )
            (x = ((r[--f] = r[f] + i[f] + x) / w) | 0),
              (r[f] = w === r[f] ? 0 : r[f] % w);
          return x && ((r = [x].concat(r)), ++s), CA(u, r, s);
        }),
        (T.precision = T.sd =
          function (u, f) {
            var y,
              F,
              x,
              N = this;
            if (u != null && u !== !!u)
              return (
                gA(u, 1, Y),
                f == null ? (f = sA) : gA(f, 0, 8),
                _(new C(N), u, f)
              );
            if (!(y = N.c)) return null;
            if (((x = y.length - 1), (F = x * D + 1), (x = y[x]))) {
              for (; x % 10 == 0; x /= 10, F--);
              for (x = y[0]; x >= 10; x /= 10, F++);
            }
            return u && N.e + 1 > F && (F = N.e + 1), F;
          }),
        (T.shiftedBy = function (u) {
          return gA(u, -G, G), this.times("1e" + u);
        }),
        (T.squareRoot = T.sqrt =
          function () {
            var u,
              f,
              y,
              F,
              x,
              N = this,
              s = N.c,
              r = N.s,
              i = N.e,
              a = EA + 4,
              c = new C("0.5");
            if (r !== 1 || !s || !s[0])
              return new C(!r || (r < 0 && (!s || s[0])) ? NaN : s ? N : 1 / 0);
            if (
              ((r = Math.sqrt(+v(N))),
              r == 0 || r == 1 / 0
                ? ((f = eA(s)),
                  (f.length + i) % 2 == 0 && (f += "0"),
                  (r = Math.sqrt(+f)),
                  (i = V((i + 1) / 2) - (i < 0 || i % 2)),
                  r == 1 / 0
                    ? (f = "5e" + i)
                    : ((f = r.toExponential()),
                      (f = f.slice(0, f.indexOf("e") + 1) + i)),
                  (y = new C(f)))
                : (y = new C(r + "")),
              y.c[0])
            ) {
              for (i = y.e, r = i + a, r < 3 && (r = 0); ; )
                if (
                  ((x = y),
                  (y = c.times(x.plus(j(N, x, a, 1)))),
                  eA(x.c).slice(0, r) === (f = eA(y.c)).slice(0, r))
                )
                  if (
                    (y.e < i && --r,
                    (f = f.slice(r - 3, r + 1)),
                    f == "9999" || (!F && f == "4999"))
                  ) {
                    if (!F && (_(x, x.e + EA + 2, 0), x.times(x).eq(N))) {
                      y = x;
                      break;
                    }
                    (a += 4), (r += 4), (F = 1);
                  } else {
                    (!+f || (!+f.slice(1) && f.charAt(0) == "5")) &&
                      (_(y, y.e + EA + 2, 1), (u = !y.times(y).eq(N)));
                    break;
                  }
            }
            return _(y, y.e + EA + 1, sA, u);
          }),
        (T.toExponential = function (u, f) {
          return u != null && (gA(u, 0, Y), u++), QA(this, u, f, 1);
        }),
        (T.toFixed = function (u, f) {
          return (
            u != null && (gA(u, 0, Y), (u = u + this.e + 1)), QA(this, u, f)
          );
        }),
        (T.toFormat = function (u, f, y) {
          var F,
            x = this;
          if (y == null)
            u != null && f && typeof f == "object"
              ? ((y = f), (f = null))
              : u && typeof u == "object"
              ? ((y = u), (u = f = null))
              : (y = H);
          else if (typeof y != "object")
            throw Error(h + "Argument not an object: " + y);
          if (((F = x.toFixed(u, f)), x.c)) {
            var N,
              s = F.split("."),
              r = +y.groupSize,
              i = +y.secondaryGroupSize,
              a = y.groupSeparator || "",
              c = s[0],
              p = s[1],
              m = x.s < 0,
              b = m ? c.slice(1) : c,
              K = b.length;
            if ((i && ((N = r), (r = i), (i = N), (K -= N)), r > 0 && K > 0)) {
              for (N = K % r || r, c = b.substr(0, N); N < K; N += r)
                c += a + b.substr(N, r);
              i > 0 && (c += a + b.slice(N)), m && (c = "-" + c);
            }
            F = p
              ? c +
                (y.decimalSeparator || "") +
                ((i = +y.fractionGroupSize)
                  ? p.replace(
                      new RegExp("\\d{" + i + "}\\B", "g"),
                      "$&" + (y.fractionGroupSeparator || "")
                    )
                  : p)
              : c;
          }
          return (y.prefix || "") + F + (y.suffix || "");
        }),
        (T.toFraction = function (u) {
          var f,
            y,
            F,
            x,
            N,
            s,
            r,
            i,
            a,
            c,
            p,
            m,
            b = this,
            K = b.c;
          if (
            u != null &&
            ((r = new C(u)), (!r.isInteger() && (r.c || r.s !== 1)) || r.lt(hA))
          )
            throw Error(
              h +
                "Argument " +
                (r.isInteger() ? "out of range: " : "not an integer: ") +
                v(r)
            );
          if (!K) return new C(b);
          for (
            f = new C(hA),
              a = y = new C(hA),
              F = i = new C(hA),
              m = eA(K),
              N = f.e = m.length - b.e - 1,
              f.c[0] = M[(s = N % D) < 0 ? D + s : s],
              u = !u || r.comparedTo(f) > 0 ? (N > 0 ? f : a) : r,
              s = mA,
              mA = 1 / 0,
              r = new C(m),
              i.c[0] = 0;
            (c = j(r, f, 0, 1)), (x = y.plus(c.times(F))), x.comparedTo(u) != 1;

          )
            (y = F),
              (F = x),
              (a = i.plus(c.times((x = a)))),
              (i = x),
              (f = r.minus(c.times((x = f)))),
              (r = x);
          return (
            (x = j(u.minus(y), F, 0, 1)),
            (i = i.plus(x.times(a))),
            (y = y.plus(x.times(F))),
            (i.s = a.s = b.s),
            (N = N * 2),
            (p =
              j(a, F, N, sA)
                .minus(b)
                .abs()
                .comparedTo(j(i, y, N, sA).minus(b).abs()) < 1
                ? [a, F]
                : [i, y]),
            (mA = s),
            p
          );
        }),
        (T.toNumber = function () {
          return +v(this);
        }),
        (T.toPrecision = function (u, f) {
          return u != null && gA(u, 1, Y), QA(this, u, f, 2);
        }),
        (T.toString = function (u) {
          var f,
            y = this,
            F = y.s,
            x = y.e;
          return (
            x === null
              ? F
                ? ((f = "Infinity"), F < 0 && (f = "-" + f))
                : (f = "NaN")
              : (u == null
                  ? (f =
                      x <= SA || x >= wA ? xA(eA(y.c), x) : O(eA(y.c), x, "0"))
                  : u === 10 && nA
                  ? ((y = _(new C(y), EA + x + 1, sA)),
                    (f = O(eA(y.c), y.e, "0")))
                  : (gA(u, 2, q.length, "Base"),
                    (f = AA(O(eA(y.c), x, "0"), 10, u, F, !0))),
                F < 0 && y.c[0] && (f = "-" + f)),
            f
          );
        }),
        (T.valueOf = T.toJSON =
          function () {
            return v(this);
          }),
        (T._isBigNumber = !0),
        W != null && C.set(W),
        C
      );
    }
    function V(W) {
      var j = W | 0;
      return W > 0 || W === j ? j : j - 1;
    }
    function eA(W) {
      for (var j, AA, BA = 1, T = W.length, hA = W[0] + ""; BA < T; ) {
        for (j = W[BA++] + "", AA = D - j.length; AA--; j = "0" + j);
        hA += j;
      }
      for (T = hA.length; hA.charCodeAt(--T) === 48; );
      return hA.slice(0, T + 1 || 1);
    }
    function lA(W, j) {
      var AA,
        BA,
        T = W.c,
        hA = j.c,
        EA = W.s,
        sA = j.s,
        SA = W.e,
        wA = j.e;
      if (!EA || !sA) return null;
      if (((AA = T && !T[0]), (BA = hA && !hA[0]), AA || BA))
        return AA ? (BA ? 0 : -sA) : EA;
      if (EA != sA) return EA;
      if (((AA = EA < 0), (BA = SA == wA), !T || !hA))
        return BA ? 0 : !T ^ AA ? 1 : -1;
      if (!BA) return (SA > wA) ^ AA ? 1 : -1;
      for (
        sA = (SA = T.length) < (wA = hA.length) ? SA : wA, EA = 0;
        EA < sA;
        EA++
      )
        if (T[EA] != hA[EA]) return (T[EA] > hA[EA]) ^ AA ? 1 : -1;
      return SA == wA ? 0 : (SA > wA) ^ AA ? 1 : -1;
    }
    function gA(W, j, AA, BA) {
      if (W < j || W > AA || W !== Q(W))
        throw Error(
          h +
            (BA || "Argument") +
            (typeof W == "number"
              ? W < j || W > AA
                ? " out of range: "
                : " not an integer: "
              : " not a primitive number: ") +
            String(W)
        );
    }
    function rA(W) {
      var j = W.c.length - 1;
      return V(W.e / D) == j && W.c[j] % 2 != 0;
    }
    function xA(W, j) {
      return (
        (W.length > 1 ? W.charAt(0) + "." + W.slice(1) : W) +
        (j < 0 ? "e" : "e+") +
        j
      );
    }
    function O(W, j, AA) {
      var BA, T;
      if (j < 0) {
        for (T = AA + "."; ++j; T += AA);
        W = T + W;
      } else if (((BA = W.length), ++j > BA)) {
        for (T = AA, j -= BA; --j; T += AA);
        W += T;
      } else j < BA && (W = W.slice(0, j) + "." + W.slice(j));
      return W;
    }
    (e = X()),
      (e.default = e.BigNumber = e),
      t.exports
        ? (t.exports = e)
        : (A || (A = typeof self < "u" && self ? self : window),
          (A.BigNumber = e));
  })(wt);
})(Kr);
var Xt = Kr.exports,
  Ln = function (A, e, g) {
    var I = new A.Uint8Array(g),
      Q = e.pushInt,
      h = e.pushInt32,
      o = e.pushInt32Neg,
      w = e.pushInt64,
      D = e.pushInt64Neg,
      G = e.pushFloat,
      M = e.pushFloatSingle,
      k = e.pushFloatDouble,
      Y = e.pushTrue,
      X = e.pushFalse,
      V = e.pushUndefined,
      eA = e.pushNull,
      lA = e.pushInfinity,
      gA = e.pushInfinityNeg,
      rA = e.pushNaN,
      xA = e.pushNaNNeg,
      O = e.pushArrayStart,
      W = e.pushArrayStartFixed,
      j = e.pushArrayStartFixed32,
      AA = e.pushArrayStartFixed64,
      BA = e.pushObjectStart,
      T = e.pushObjectStartFixed,
      hA = e.pushObjectStartFixed32,
      EA = e.pushObjectStartFixed64,
      sA = e.pushByteString,
      SA = e.pushByteStringStart,
      wA = e.pushUtf8String,
      LA = e.pushUtf8StringStart,
      mA = e.pushSimpleUnassigned,
      J = e.pushTagStart,
      L = e.pushTagStart4,
      P = e.pushTagStart8,
      H = e.pushTagUnassigned,
      q = e.pushBreak,
      nA = A.Math.pow,
      C = 0,
      QA = 0,
      IA = 0;
    function CA(d) {
      for (
        d = d | 0, C = 0, QA = d;
        (C | 0) < (QA | 0) &&
        ((IA = Vi[I[C] & 255](I[C] | 0) | 0), !((IA | 0) > 0));

      );
      return IA | 0;
    }
    function _(d) {
      return (d = d | 0), (((C | 0) + (d | 0)) | 0) < (QA | 0) ? 0 : 1;
    }
    function v(d) {
      return (d = d | 0), (I[d | 0] << 8) | I[(d + 1) | 0] | 0;
    }
    function u(d) {
      return (
        (d = d | 0),
        (I[d | 0] << 24) |
          (I[(d + 1) | 0] << 16) |
          (I[(d + 2) | 0] << 8) |
          I[(d + 3) | 0] |
          0
      );
    }
    function f(d) {
      return (d = d | 0), Q(d | 0), (C = (C + 1) | 0), 0;
    }
    function y(d) {
      return (
        (d = d | 0),
        _(1) | 0 ? 1 : (Q(I[(C + 1) | 0] | 0), (C = (C + 2) | 0), 0)
      );
    }
    function F(d) {
      return (
        (d = d | 0),
        _(2) | 0 ? 1 : (Q(v((C + 1) | 0) | 0), (C = (C + 3) | 0), 0)
      );
    }
    function x(d) {
      return (
        (d = d | 0),
        _(4) | 0
          ? 1
          : (h(v((C + 1) | 0) | 0, v((C + 3) | 0) | 0), (C = (C + 5) | 0), 0)
      );
    }
    function N(d) {
      return (
        (d = d | 0),
        _(8) | 0
          ? 1
          : (w(
              v((C + 1) | 0) | 0,
              v((C + 3) | 0) | 0,
              v((C + 5) | 0) | 0,
              v((C + 7) | 0) | 0
            ),
            (C = (C + 9) | 0),
            0)
      );
    }
    function s(d) {
      return (d = d | 0), Q((-1 - ((d - 32) | 0)) | 0), (C = (C + 1) | 0), 0;
    }
    function r(d) {
      return (
        (d = d | 0),
        _(1) | 0
          ? 1
          : (Q((-1 - (I[(C + 1) | 0] | 0)) | 0), (C = (C + 2) | 0), 0)
      );
    }
    function i(d) {
      d = d | 0;
      var uA = 0;
      return _(2) | 0
        ? 1
        : ((uA = v((C + 1) | 0) | 0),
          Q((-1 - (uA | 0)) | 0),
          (C = (C + 3) | 0),
          0);
    }
    function a(d) {
      return (
        (d = d | 0),
        _(4) | 0
          ? 1
          : (o(v((C + 1) | 0) | 0, v((C + 3) | 0) | 0), (C = (C + 5) | 0), 0)
      );
    }
    function c(d) {
      return (
        (d = d | 0),
        _(8) | 0
          ? 1
          : (D(
              v((C + 1) | 0) | 0,
              v((C + 3) | 0) | 0,
              v((C + 5) | 0) | 0,
              v((C + 7) | 0) | 0
            ),
            (C = (C + 9) | 0),
            0)
      );
    }
    function p(d) {
      d = d | 0;
      var uA = 0,
        fA = 0,
        cA = 0;
      return (
        (cA = (d - 64) | 0),
        _(cA | 0) | 0
          ? 1
          : ((uA = (C + 1) | 0),
            (fA = (((C + 1) | 0) + (cA | 0)) | 0),
            sA(uA | 0, fA | 0),
            (C = fA | 0),
            0)
      );
    }
    function m(d) {
      d = d | 0;
      var uA = 0,
        fA = 0,
        cA = 0;
      return _(1) | 0 ||
        ((cA = I[(C + 1) | 0] | 0),
        (uA = (C + 2) | 0),
        (fA = (((C + 2) | 0) + (cA | 0)) | 0),
        _((cA + 1) | 0) | 0)
        ? 1
        : (sA(uA | 0, fA | 0), (C = fA | 0), 0);
    }
    function b(d) {
      d = d | 0;
      var uA = 0,
        fA = 0,
        cA = 0;
      return _(2) | 0 ||
        ((cA = v((C + 1) | 0) | 0),
        (uA = (C + 3) | 0),
        (fA = (((C + 3) | 0) + (cA | 0)) | 0),
        _((cA + 2) | 0) | 0)
        ? 1
        : (sA(uA | 0, fA | 0), (C = fA | 0), 0);
    }
    function K(d) {
      d = d | 0;
      var uA = 0,
        fA = 0,
        cA = 0;
      return _(4) | 0 ||
        ((cA = u((C + 1) | 0) | 0),
        (uA = (C + 5) | 0),
        (fA = (((C + 5) | 0) + (cA | 0)) | 0),
        _((cA + 4) | 0) | 0)
        ? 1
        : (sA(uA | 0, fA | 0), (C = fA | 0), 0);
    }
    function Z(d) {
      return (d = d | 0), 1;
    }
    function tA(d) {
      return (d = d | 0), SA(), (C = (C + 1) | 0), 0;
    }
    function E(d) {
      d = d | 0;
      var uA = 0,
        fA = 0,
        cA = 0;
      return (
        (cA = (d - 96) | 0),
        _(cA | 0) | 0
          ? 1
          : ((uA = (C + 1) | 0),
            (fA = (((C + 1) | 0) + (cA | 0)) | 0),
            wA(uA | 0, fA | 0),
            (C = fA | 0),
            0)
      );
    }
    function n(d) {
      d = d | 0;
      var uA = 0,
        fA = 0,
        cA = 0;
      return _(1) | 0 ||
        ((cA = I[(C + 1) | 0] | 0),
        (uA = (C + 2) | 0),
        (fA = (((C + 2) | 0) + (cA | 0)) | 0),
        _((cA + 1) | 0) | 0)
        ? 1
        : (wA(uA | 0, fA | 0), (C = fA | 0), 0);
    }
    function B(d) {
      d = d | 0;
      var uA = 0,
        fA = 0,
        cA = 0;
      return _(2) | 0 ||
        ((cA = v((C + 1) | 0) | 0),
        (uA = (C + 3) | 0),
        (fA = (((C + 3) | 0) + (cA | 0)) | 0),
        _((cA + 2) | 0) | 0)
        ? 1
        : (wA(uA | 0, fA | 0), (C = fA | 0), 0);
    }
    function l(d) {
      d = d | 0;
      var uA = 0,
        fA = 0,
        cA = 0;
      return _(4) | 0 ||
        ((cA = u((C + 1) | 0) | 0),
        (uA = (C + 5) | 0),
        (fA = (((C + 5) | 0) + (cA | 0)) | 0),
        _((cA + 4) | 0) | 0)
        ? 1
        : (wA(uA | 0, fA | 0), (C = fA | 0), 0);
    }
    function S(d) {
      return (d = d | 0), 1;
    }
    function R(d) {
      return (d = d | 0), LA(), (C = (C + 1) | 0), 0;
    }
    function U(d) {
      return (d = d | 0), W((d - 128) | 0), (C = (C + 1) | 0), 0;
    }
    function $(d) {
      return (
        (d = d | 0),
        _(1) | 0 ? 1 : (W(I[(C + 1) | 0] | 0), (C = (C + 2) | 0), 0)
      );
    }
    function aA(d) {
      return (
        (d = d | 0),
        _(2) | 0 ? 1 : (W(v((C + 1) | 0) | 0), (C = (C + 3) | 0), 0)
      );
    }
    function iA(d) {
      return (
        (d = d | 0),
        _(4) | 0
          ? 1
          : (j(v((C + 1) | 0) | 0, v((C + 3) | 0) | 0), (C = (C + 5) | 0), 0)
      );
    }
    function z(d) {
      return (
        (d = d | 0),
        _(8) | 0
          ? 1
          : (AA(
              v((C + 1) | 0) | 0,
              v((C + 3) | 0) | 0,
              v((C + 5) | 0) | 0,
              v((C + 7) | 0) | 0
            ),
            (C = (C + 9) | 0),
            0)
      );
    }
    function pA(d) {
      return (d = d | 0), O(), (C = (C + 1) | 0), 0;
    }
    function FA(d) {
      d = d | 0;
      var uA = 0;
      return (
        (uA = (d - 160) | 0),
        _(uA | 0) | 0 ? 1 : (T(uA | 0), (C = (C + 1) | 0), 0)
      );
    }
    function Ri(d) {
      return (
        (d = d | 0),
        _(1) | 0 ? 1 : (T(I[(C + 1) | 0] | 0), (C = (C + 2) | 0), 0)
      );
    }
    function Mi(d) {
      return (
        (d = d | 0),
        _(2) | 0 ? 1 : (T(v((C + 1) | 0) | 0), (C = (C + 3) | 0), 0)
      );
    }
    function bi(d) {
      return (
        (d = d | 0),
        _(4) | 0
          ? 1
          : (hA(v((C + 1) | 0) | 0, v((C + 3) | 0) | 0), (C = (C + 5) | 0), 0)
      );
    }
    function ki(d) {
      return (
        (d = d | 0),
        _(8) | 0
          ? 1
          : (EA(
              v((C + 1) | 0) | 0,
              v((C + 3) | 0) | 0,
              v((C + 5) | 0) | 0,
              v((C + 7) | 0) | 0
            ),
            (C = (C + 9) | 0),
            0)
      );
    }
    function Li(d) {
      return (d = d | 0), BA(), (C = (C + 1) | 0), 0;
    }
    function Qt(d) {
      return (d = d | 0), J((d - 192) | 0 | 0), (C = (C + 1) | 0), 0;
    }
    function DI(d) {
      return (d = d | 0), J(d | 0), (C = (C + 1) | 0), 0;
    }
    function SI(d) {
      return (d = d | 0), J(d | 0), (C = (C + 1) | 0), 0;
    }
    function xI(d) {
      return (d = d | 0), J(d | 0), (C = (C + 1) | 0), 0;
    }
    function FI(d) {
      return (d = d | 0), J(d | 0), (C = (C + 1) | 0), 0;
    }
    function MA(d) {
      return (d = d | 0), J((d - 192) | 0 | 0), (C = (C + 1) | 0), 0;
    }
    function NI(d) {
      return (d = d | 0), J(d | 0), (C = (C + 1) | 0), 0;
    }
    function GI(d) {
      return (d = d | 0), J(d | 0), (C = (C + 1) | 0), 0;
    }
    function mI(d) {
      return (d = d | 0), J(d | 0), (C = (C + 1) | 0), 0;
    }
    function Ti(d) {
      return (
        (d = d | 0),
        _(1) | 0 ? 1 : (J(I[(C + 1) | 0] | 0), (C = (C + 2) | 0), 0)
      );
    }
    function Yi(d) {
      return (
        (d = d | 0),
        _(2) | 0 ? 1 : (J(v((C + 1) | 0) | 0), (C = (C + 3) | 0), 0)
      );
    }
    function Hi(d) {
      return (
        (d = d | 0),
        _(4) | 0
          ? 1
          : (L(v((C + 1) | 0) | 0, v((C + 3) | 0) | 0), (C = (C + 5) | 0), 0)
      );
    }
    function _i(d) {
      return (
        (d = d | 0),
        _(8) | 0
          ? 1
          : (P(
              v((C + 1) | 0) | 0,
              v((C + 3) | 0) | 0,
              v((C + 5) | 0) | 0,
              v((C + 7) | 0) | 0
            ),
            (C = (C + 9) | 0),
            0)
      );
    }
    function GA(d) {
      return (d = d | 0), mA(((d | 0) - 224) | 0), (C = (C + 1) | 0), 0;
    }
    function Ji(d) {
      return (d = d | 0), X(), (C = (C + 1) | 0), 0;
    }
    function qi(d) {
      return (d = d | 0), Y(), (C = (C + 1) | 0), 0;
    }
    function vi(d) {
      return (d = d | 0), eA(), (C = (C + 1) | 0), 0;
    }
    function Ki(d) {
      return (d = d | 0), V(), (C = (C + 1) | 0), 0;
    }
    function Oi(d) {
      return (
        (d = d | 0),
        _(1) | 0 ? 1 : (mA(I[(C + 1) | 0] | 0), (C = (C + 2) | 0), 0)
      );
    }
    function Wi(d) {
      d = d | 0;
      var uA = 0,
        fA = 0,
        cA = 1,
        Mt = 0,
        dt = 0,
        UI = 0;
      return _(2) | 0
        ? 1
        : ((uA = I[(C + 1) | 0] | 0),
          (fA = I[(C + 2) | 0] | 0),
          (uA | 0) & 128 && (cA = -1),
          (Mt = +(((uA | 0) & 124) >> 2)),
          (dt = +((((uA | 0) & 3) << 8) | fA)),
          +Mt == 0
            ? G(+(+cA * 5960464477539063e-23 * +dt))
            : +Mt == 31
            ? +cA == 1
              ? +dt > 0
                ? rA()
                : lA()
              : +dt > 0
              ? xA()
              : gA()
            : G(+(+cA * nA(2, +(+Mt - 25)) * +(1024 + dt))),
          (C = (C + 3) | 0),
          0);
    }
    function Pi(d) {
      return (
        (d = d | 0),
        _(4) | 0
          ? 1
          : (M(
              I[(C + 1) | 0] | 0,
              I[(C + 2) | 0] | 0,
              I[(C + 3) | 0] | 0,
              I[(C + 4) | 0] | 0
            ),
            (C = (C + 5) | 0),
            0)
      );
    }
    function Zi(d) {
      return (
        (d = d | 0),
        _(8) | 0
          ? 1
          : (k(
              I[(C + 1) | 0] | 0,
              I[(C + 2) | 0] | 0,
              I[(C + 3) | 0] | 0,
              I[(C + 4) | 0] | 0,
              I[(C + 5) | 0] | 0,
              I[(C + 6) | 0] | 0,
              I[(C + 7) | 0] | 0,
              I[(C + 8) | 0] | 0
            ),
            (C = (C + 9) | 0),
            0)
      );
    }
    function dA(d) {
      return (d = d | 0), 1;
    }
    function ji(d) {
      return (d = d | 0), q(), (C = (C + 1) | 0), 0;
    }
    var Vi = [
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      f,
      y,
      F,
      x,
      N,
      dA,
      dA,
      dA,
      dA,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      s,
      r,
      i,
      a,
      c,
      dA,
      dA,
      dA,
      dA,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      p,
      m,
      b,
      K,
      Z,
      dA,
      dA,
      dA,
      tA,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      E,
      n,
      B,
      l,
      S,
      dA,
      dA,
      dA,
      R,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      U,
      $,
      aA,
      iA,
      z,
      dA,
      dA,
      dA,
      pA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      FA,
      Ri,
      Mi,
      bi,
      ki,
      dA,
      dA,
      dA,
      Li,
      Qt,
      Qt,
      Qt,
      Qt,
      Qt,
      Qt,
      MA,
      MA,
      MA,
      MA,
      MA,
      MA,
      MA,
      MA,
      MA,
      MA,
      MA,
      MA,
      MA,
      MA,
      MA,
      MA,
      MA,
      MA,
      Ti,
      Yi,
      Hi,
      _i,
      dA,
      dA,
      dA,
      dA,
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
      GA,
      GA,
      Ji,
      qi,
      vi,
      Ki,
      Oi,
      Wi,
      Pi,
      Zi,
      dA,
      dA,
      dA,
      ji,
    ];
    return { parse: CA };
  },
  zt = {},
  kA = {};
const Re = Xt.BigNumber;
kA.MT = {
  POS_INT: 0,
  NEG_INT: 1,
  BYTE_STRING: 2,
  UTF8_STRING: 3,
  ARRAY: 4,
  MAP: 5,
  TAG: 6,
  SIMPLE_FLOAT: 7,
};
kA.TAG = {
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
kA.NUMBYTES = {
  ZERO: 0,
  ONE: 24,
  TWO: 25,
  FOUR: 26,
  EIGHT: 27,
  INDEFINITE: 31,
};
kA.SIMPLE = { FALSE: 20, TRUE: 21, NULL: 22, UNDEFINED: 23 };
kA.SYMS = {
  NULL: Symbol("null"),
  UNDEFINED: Symbol("undef"),
  PARENT: Symbol("parent"),
  BREAK: Symbol("break"),
  STREAM: Symbol("stream"),
};
kA.SHIFT32 = Math.pow(2, 32);
kA.SHIFT16 = Math.pow(2, 16);
kA.MAX_SAFE_HIGH = 2097151;
kA.NEG_ONE = new Re(-1);
kA.TEN = new Re(10);
kA.TWO = new Re(2);
kA.PARENT = {
  ARRAY: 0,
  OBJECT: 1,
  MAP: 2,
  TAG: 3,
  BYTE_STRING: 4,
  UTF8_STRING: 5,
};
(function (t) {
  const { Buffer: A } = mt,
    e = Xt.BigNumber,
    g = kA,
    I = g.SHIFT32,
    Q = g.SHIFT16,
    h = 2097151;
  t.parseHalf = function (D) {
    var G, M, k;
    return (
      (k = D[0] & 128 ? -1 : 1),
      (G = (D[0] & 124) >> 2),
      (M = ((D[0] & 3) << 8) | D[1]),
      G
        ? G === 31
          ? k * (M ? 0 / 0 : 1 / 0)
          : k * Math.pow(2, G - 25) * (1024 + M)
        : k * 5960464477539063e-23 * M
    );
  };
  function o(w) {
    return w < 16 ? "0" + w.toString(16) : w.toString(16);
  }
  (t.arrayBufferToBignumber = function (w) {
    const D = w.byteLength;
    let G = "";
    for (let M = 0; M < D; M++) G += o(w[M]);
    return new e(G, 16);
  }),
    (t.buildMap = (w) => {
      const D = new Map(),
        G = Object.keys(w),
        M = G.length;
      for (let k = 0; k < M; k++) D.set(G[k], w[G[k]]);
      return D;
    }),
    (t.buildInt32 = (w, D) => w * Q + D),
    (t.buildInt64 = (w, D, G, M) => {
      const k = t.buildInt32(w, D),
        Y = t.buildInt32(G, M);
      return k > h ? new e(k).times(I).plus(Y) : k * I + Y;
    }),
    (t.writeHalf = function (D, G) {
      const M = A.allocUnsafe(4);
      M.writeFloatBE(G, 0);
      const k = M.readUInt32BE(0);
      if (k & 8191) return !1;
      var Y = (k >> 16) & 32768;
      const X = (k >> 23) & 255,
        V = k & 8388607;
      if (X >= 113 && X <= 142) Y += ((X - 112) << 10) + (V >> 13);
      else if (X >= 103 && X < 113) {
        if (V & ((1 << (126 - X)) - 1)) return !1;
        Y += (V + 8388608) >> (126 - X);
      } else return !1;
      return D.writeUInt16BE(Y, 0), !0;
    }),
    (t.keySorter = function (w, D) {
      var G = w[0].byteLength,
        M = D[0].byteLength;
      return G > M ? 1 : M > G ? -1 : w[0].compare(D[0]);
    }),
    (t.isNegativeZero = (w) => w === 0 && 1 / w < 0),
    (t.nextPowerOf2 = (w) => {
      let D = 0;
      if (w && !(w & (w - 1))) return w;
      for (; w !== 0; ) (w >>= 1), (D += 1);
      return 1 << D;
    });
})(zt);
const Me = kA,
  Tn = Me.MT,
  kt = Me.SIMPLE,
  re = Me.SYMS;
let Yn = class ue {
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
    return A._pushInt(this.value, Tn.SIMPLE_FLOAT);
  }
  static isSimple(A) {
    return A instanceof ue;
  }
  static decode(A, e) {
    switch ((e == null && (e = !0), A)) {
      case kt.FALSE:
        return !1;
      case kt.TRUE:
        return !0;
      case kt.NULL:
        return e ? null : re.NULL;
      case kt.UNDEFINED:
        return e ? void 0 : re.UNDEFINED;
      case -1:
        if (!e) throw new Error("Invalid BREAK");
        return re.BREAK;
      default:
        return new ue(A);
    }
  }
};
var Or = Yn;
let Hn = class he {
  constructor(A, e, g) {
    if (
      ((this.tag = A),
      (this.value = e),
      (this.err = g),
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
    var e, g;
    if (
      ((g = A?.[this.tag]),
      typeof g != "function" &&
        ((g = he["_tag" + this.tag]), typeof g != "function"))
    )
      return this;
    try {
      return g.call(he, this.value);
    } catch (I) {
      return (e = I), (this.err = e), this;
    }
  }
};
var Wr = Hn;
const Pr = self.location
    ? self.location.protocol + "//" + self.location.host
    : "",
  Ce = self.URL;
let _n = class {
  constructor(A = "", e = Pr) {
    (this.super = new Ce(A, e)),
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
function Jn(t) {
  if (typeof t == "string") return new Ce(t).toString();
  if (!(t instanceof Ce)) {
    const A = t.username && t.password ? `${t.username}:${t.password}@` : "",
      e = t.auth ? t.auth + "@" : "",
      g = t.port ? ":" + t.port : "",
      I = t.protocol ? t.protocol + "//" : "",
      Q = t.host || "",
      h = t.hostname || "",
      o = t.search || (t.query ? "?" + t.query : ""),
      w = t.hash || "",
      D = t.pathname || "",
      G = t.path || D + o;
    return `${I}${A || e}${Q || h + g}${G}${w}`;
  }
}
var Zr = {
  URLWithLegacySupport: _n,
  URLSearchParams: self.URLSearchParams,
  defaultBase: Pr,
  format: Jn,
};
const { URLWithLegacySupport: tr, format: qn } = Zr;
var vn = (t, A = {}, e = {}, g) => {
  let I = A.protocol ? A.protocol.replace(":", "") : "http";
  I = (e[I] || g || I) + ":";
  let Q;
  try {
    Q = new tr(t);
  } catch {
    Q = {};
  }
  const h = Object.assign({}, A, {
    protocol: I || Q.protocol,
    host: A.host || Q.host,
  });
  return new tr(t, qn(h)).toString();
};
const {
    URLWithLegacySupport: Kn,
    format: On,
    URLSearchParams: Wn,
    defaultBase: Pn,
  } = Zr,
  Zn = vn;
var jr = {
  URL: Kn,
  URLSearchParams: Wn,
  format: On,
  relative: Zn,
  defaultBase: Pn,
};
const { Buffer: ut } = mt,
  er = Nt,
  jn = Xt.BigNumber,
  Vn = Ln,
  TA = zt,
  yA = kA,
  Xn = Or,
  zn = Wr,
  { URL: $n } = jr;
let fe = class le {
  constructor(A) {
    (A = A || {}),
      !A.size || A.size < 65536
        ? (A.size = 65536)
        : (A.size = TA.nextPowerOf2(A.size)),
      (this._heap = new ArrayBuffer(A.size)),
      (this._heap8 = new Uint8Array(this._heap)),
      (this._buffer = ut.from(this._heap)),
      this._reset(),
      (this._knownTags = Object.assign(
        {
          0: (e) => new Date(e),
          1: (e) => new Date(e * 1e3),
          2: (e) => TA.arrayBufferToBignumber(e),
          3: (e) => yA.NEG_ONE.minus(TA.arrayBufferToBignumber(e)),
          4: (e) => yA.TEN.pow(e[0]).times(e[1]),
          5: (e) => yA.TWO.pow(e[0]).times(e[1]),
          32: (e) => new $n(e),
          35: (e) => new RegExp(e),
        },
        A.tags
      )),
      (this.parser = Vn(
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
      case yA.PARENT.TAG:
        this._push(this.createTag(A.ref[0], A.ref[1]));
        break;
      case yA.PARENT.BYTE_STRING:
        this._push(this.createByteString(A.ref, A.length));
        break;
      case yA.PARENT.UTF8_STRING:
        this._push(this.createUtf8String(A.ref, A.length));
        break;
      case yA.PARENT.MAP:
        if (A.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createMap(A.ref, A.length));
        break;
      case yA.PARENT.OBJECT:
        if (A.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createObject(A.ref, A.length));
        break;
      case yA.PARENT.ARRAY:
        this._push(this.createArray(A.ref, A.length));
        break;
    }
    this._currentParent &&
      this._currentParent.type === yA.PARENT.TAG &&
      this._dec();
  }
  _dec() {
    const A = this._currentParent;
    A.length < 0 || (A.length--, A.length === 0 && this._closeParent());
  }
  _push(A, e) {
    const g = this._currentParent;
    switch ((g.values++, g.type)) {
      case yA.PARENT.ARRAY:
      case yA.PARENT.BYTE_STRING:
      case yA.PARENT.UTF8_STRING:
        g.length > -1
          ? (this._ref[this._ref.length - g.length] = A)
          : this._ref.push(A),
          this._dec();
        break;
      case yA.PARENT.OBJECT:
        g.tmpKey != null
          ? ((this._ref[g.tmpKey] = A), (g.tmpKey = null), this._dec())
          : ((g.tmpKey = A),
            typeof g.tmpKey != "string" &&
              ((g.type = yA.PARENT.MAP), (g.ref = TA.buildMap(g.ref))));
        break;
      case yA.PARENT.MAP:
        g.tmpKey != null
          ? (this._ref.set(g.tmpKey, A), (g.tmpKey = null), this._dec())
          : (g.tmpKey = A);
        break;
      case yA.PARENT.TAG:
        this._ref.push(A), e || this._dec();
        break;
      default:
        throw new Error("Unknown parent type");
    }
  }
  _createParent(A, e, g) {
    this._parents[this._depth] = {
      type: e,
      length: g,
      ref: A,
      values: 0,
      tmpKey: null,
    };
  }
  _reset() {
    (this._res = []),
      (this._parents = [
        {
          type: yA.PARENT.ARRAY,
          length: -1,
          ref: this._res,
          values: 0,
          tmpKey: null,
        },
      ]);
  }
  createTag(A, e) {
    const g = this._knownTags[A];
    return g ? g(e) : new zn(A, e);
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
    return ut.concat(A);
  }
  createByteStringFromHeap(A, e) {
    return A === e ? ut.alloc(0) : ut.from(this._heap.slice(A, e));
  }
  createInt(A) {
    return A;
  }
  createInt32(A, e) {
    return TA.buildInt32(A, e);
  }
  createInt64(A, e, g, I) {
    return TA.buildInt64(A, e, g, I);
  }
  createFloat(A) {
    return A;
  }
  createFloatSingle(A, e, g, I) {
    return er.read([A, e, g, I], 0, !1, 23, 4);
  }
  createFloatDouble(A, e, g, I, Q, h, o, w) {
    return er.read([A, e, g, I, Q, h, o, w], 0, !1, 52, 8);
  }
  createInt32Neg(A, e) {
    return -1 - TA.buildInt32(A, e);
  }
  createInt64Neg(A, e, g, I) {
    const Q = TA.buildInt32(A, e),
      h = TA.buildInt32(g, I);
    return Q > yA.MAX_SAFE_HIGH
      ? yA.NEG_ONE.minus(new jn(Q).times(yA.SHIFT32).plus(h))
      : -1 - (Q * yA.SHIFT32 + h);
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
    return new Xn(A);
  }
  pushInt(A) {
    this._push(this.createInt(A));
  }
  pushInt32(A, e) {
    this._push(this.createInt32(A, e));
  }
  pushInt64(A, e, g, I) {
    this._push(this.createInt64(A, e, g, I));
  }
  pushFloat(A) {
    this._push(this.createFloat(A));
  }
  pushFloatSingle(A, e, g, I) {
    this._push(this.createFloatSingle(A, e, g, I));
  }
  pushFloatDouble(A, e, g, I, Q, h, o, w) {
    this._push(this.createFloatDouble(A, e, g, I, Q, h, o, w));
  }
  pushInt32Neg(A, e) {
    this._push(this.createInt32Neg(A, e));
  }
  pushInt64Neg(A, e, g, I) {
    this._push(this.createInt64Neg(A, e, g, I));
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
    this._createParent([], yA.PARENT.ARRAY, -1);
  }
  pushArrayStartFixed(A) {
    this._createArrayStartFixed(A);
  }
  pushArrayStartFixed32(A, e) {
    const g = TA.buildInt32(A, e);
    this._createArrayStartFixed(g);
  }
  pushArrayStartFixed64(A, e, g, I) {
    const Q = TA.buildInt64(A, e, g, I);
    this._createArrayStartFixed(Q);
  }
  pushObjectStart() {
    this._createObjectStartFixed(-1);
  }
  pushObjectStartFixed(A) {
    this._createObjectStartFixed(A);
  }
  pushObjectStartFixed32(A, e) {
    const g = TA.buildInt32(A, e);
    this._createObjectStartFixed(g);
  }
  pushObjectStartFixed64(A, e, g, I) {
    const Q = TA.buildInt64(A, e, g, I);
    this._createObjectStartFixed(Q);
  }
  pushByteStringStart() {
    this._parents[this._depth] = {
      type: yA.PARENT.BYTE_STRING,
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
      type: yA.PARENT.UTF8_STRING,
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
    this._parents[this._depth] = { type: yA.PARENT.TAG, length: 1, ref: [A] };
  }
  pushTagStart4(A, e) {
    this.pushTagStart(TA.buildInt32(A, e));
  }
  pushTagStart8(A, e, g, I) {
    this.pushTagStart(TA.buildInt64(A, e, g, I));
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
    this._createParent({}, yA.PARENT.OBJECT, A);
  }
  _createArrayStartFixed(A) {
    if (A === 0) {
      this._push(this.createArray([]));
      return;
    }
    this._createParent(new Array(A), yA.PARENT.ARRAY, A);
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
      typeof A == "string" && (A = ut.from(A, e || "hex")),
      new le({ size: A.length }).decodeFirst(A)
    );
  }
  static decodeAll(A, e) {
    return (
      typeof A == "string" && (A = ut.from(A, e || "hex")),
      new le({ size: A.length }).decodeAll(A)
    );
  }
};
fe.decodeFirst = fe.decode;
var Vr = fe;
const { Buffer: ie } = mt,
  Ag = Vr,
  tg = zt;
class be extends Ag {
  createTag(A, e) {
    return `${A}(${e})`;
  }
  createInt(A) {
    return super.createInt(A).toString();
  }
  createInt32(A, e) {
    return super.createInt32(A, e).toString();
  }
  createInt64(A, e, g, I) {
    return super.createInt64(A, e, g, I).toString();
  }
  createInt32Neg(A, e) {
    return super.createInt32Neg(A, e).toString();
  }
  createInt64Neg(A, e, g, I) {
    return super.createInt64Neg(A, e, g, I).toString();
  }
  createTrue() {
    return "true";
  }
  createFalse() {
    return "false";
  }
  createFloat(A) {
    const e = super.createFloat(A);
    return tg.isNegativeZero(A) ? "-0_1" : `${e}_1`;
  }
  createFloatSingle(A, e, g, I) {
    return `${super.createFloatSingle(A, e, g, I)}_2`;
  }
  createFloatDouble(A, e, g, I, Q, h, o, w) {
    return `${super.createFloatDouble(A, e, g, I, Q, h, o, w)}_3`;
  }
  createByteString(A, e) {
    const g = A.join(", ");
    return e === -1 ? `(_ ${g})` : `h'${g}`;
  }
  createByteStringFromHeap(A, e) {
    return `h'${ie
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
    const g = super.createArray(A, e);
    return e === -1 ? `[_ ${g.join(", ")}]` : `[${g.join(", ")}]`;
  }
  createMap(A, e) {
    const g = super.createMap(A),
      I = Array.from(g.keys()).reduce(rr(g), "");
    return e === -1 ? `{_ ${I}}` : `{${I}}`;
  }
  createObject(A, e) {
    const g = super.createObject(A),
      I = Object.keys(g).reduce(rr(g), "");
    return e === -1 ? `{_ ${I}}` : `{${I}}`;
  }
  createUtf8String(A, e) {
    const g = A.join(", ");
    return e === -1 ? `(_ ${g})` : `"${g}"`;
  }
  createUtf8StringFromHeap(A, e) {
    return `"${ie
      .from(super.createUtf8StringFromHeap(A, e))
      .toString("utf8")}"`;
  }
  static diagnose(A, e) {
    return (
      typeof A == "string" && (A = ie.from(A, e || "hex")),
      new be().decodeFirst(A)
    );
  }
}
var eg = be;
function rr(t) {
  return (A, e) => (A ? `${A}, ${e}: ${t[e]}` : `${e}: ${t[e]}`);
}
const { Buffer: PA } = mt,
  { URL: rg } = jr,
  we = Xt.BigNumber,
  ne = zt,
  RA = kA,
  JA = RA.MT,
  Lt = RA.NUMBYTES,
  ir = RA.SHIFT32,
  nr = RA.SYMS,
  ht = RA.TAG,
  ig = (RA.MT.SIMPLE_FLOAT << 5) | RA.NUMBYTES.TWO,
  ng = (RA.MT.SIMPLE_FLOAT << 5) | RA.NUMBYTES.FOUR,
  gg = (RA.MT.SIMPLE_FLOAT << 5) | RA.NUMBYTES.EIGHT,
  Bg = (RA.MT.SIMPLE_FLOAT << 5) | RA.SIMPLE.TRUE,
  Ig = (RA.MT.SIMPLE_FLOAT << 5) | RA.SIMPLE.FALSE,
  og = (RA.MT.SIMPLE_FLOAT << 5) | RA.SIMPLE.UNDEFINED,
  gr = (RA.MT.SIMPLE_FLOAT << 5) | RA.SIMPLE.NULL,
  sg = new we("0x20000000000000"),
  Eg = PA.from("f97e00", "hex"),
  ag = PA.from("f9fc00", "hex"),
  Qg = PA.from("f97c00", "hex");
function cg(t) {
  return {}.toString.call(t).slice(8, -1);
}
class Ot {
  constructor(A) {
    (A = A || {}),
      (this.streaming = typeof A.stream == "function"),
      (this.onData = A.stream),
      (this.semanticTypes = [
        [rg, this._pushUrl],
        [we, this._pushBigNumber],
      ]);
    const e = A.genTypes || [],
      g = e.length;
    for (let I = 0; I < g; I++) this.addSemanticType(e[I][0], e[I][1]);
    this._reset();
  }
  addSemanticType(A, e) {
    const g = this.semanticTypes.length;
    for (let I = 0; I < g; I++)
      if (this.semanticTypes[I][0] === A) {
        const h = this.semanticTypes[I][1];
        return (this.semanticTypes[I][1] = e), h;
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
  pushWrite(A, e, g) {
    return (
      (this.result[this.offset] = A),
      (this.resultMethod[this.offset] = e),
      (this.resultLength[this.offset] = g),
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
    return this.push(Eg);
  }
  _pushInfinity(A) {
    const e = A < 0 ? ag : Qg;
    return this.push(e);
  }
  _pushFloat(A) {
    const e = PA.allocUnsafe(2);
    if (ne.writeHalf(e, A) && ne.parseHalf(e) === A)
      return this._pushUInt8(ig) && this.push(e);
    const g = PA.allocUnsafe(4);
    return (
      g.writeFloatBE(A, 0),
      g.readFloatBE(0) === A
        ? this._pushUInt8(ng) && this.push(g)
        : this._pushUInt8(gg) && this._pushDoubleBE(A)
    );
  }
  _pushInt(A, e, g) {
    const I = e << 5;
    return A < 24
      ? this._pushUInt8(I | A)
      : A <= 255
      ? this._pushUInt8(I | Lt.ONE) && this._pushUInt8(A)
      : A <= 65535
      ? this._pushUInt8(I | Lt.TWO) && this._pushUInt16BE(A)
      : A <= 4294967295
      ? this._pushUInt8(I | Lt.FOUR) && this._pushUInt32BE(A)
      : A <= Number.MAX_SAFE_INTEGER
      ? this._pushUInt8(I | Lt.EIGHT) &&
        this._pushUInt32BE(Math.floor(A / ir)) &&
        this._pushUInt32BE(A % ir)
      : e === JA.NEG_INT
      ? this._pushFloat(g)
      : this._pushFloat(A);
  }
  _pushIntNum(A) {
    return A < 0
      ? this._pushInt(-A - 1, JA.NEG_INT, A)
      : this._pushInt(A, JA.POS_INT);
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
    const e = PA.byteLength(A, "utf8");
    return this._pushInt(e, JA.UTF8_STRING) && this.pushWrite(A, 5, e);
  }
  _pushBoolean(A) {
    return this._pushUInt8(A ? Bg : Ig);
  }
  _pushUndefined(A) {
    return this._pushUInt8(og);
  }
  _pushArray(A, e) {
    const g = e.length;
    if (!A._pushInt(g, JA.ARRAY)) return !1;
    for (let I = 0; I < g; I++) if (!A.pushAny(e[I])) return !1;
    return !0;
  }
  _pushTag(A) {
    return this._pushInt(A, JA.TAG);
  }
  _pushDate(A, e) {
    return A._pushTag(ht.DATE_EPOCH) && A.pushAny(Math.round(e / 1e3));
  }
  _pushBuffer(A, e) {
    return A._pushInt(e.length, JA.BYTE_STRING) && A.push(e);
  }
  _pushNoFilter(A, e) {
    return A._pushBuffer(A, e.slice());
  }
  _pushRegexp(A, e) {
    return A._pushTag(ht.REGEXP) && A.pushAny(e.source);
  }
  _pushSet(A, e) {
    if (!A._pushInt(e.size, JA.ARRAY)) return !1;
    for (const g of e) if (!A.pushAny(g)) return !1;
    return !0;
  }
  _pushUrl(A, e) {
    return A._pushTag(ht.URI) && A.pushAny(e.format());
  }
  _pushBigint(A) {
    let e = ht.POS_BIGINT;
    A.isNegative() && ((A = A.negated().minus(1)), (e = ht.NEG_BIGINT));
    let g = A.toString(16);
    g.length % 2 && (g = "0" + g);
    const I = PA.from(g, "hex");
    return this._pushTag(e) && this._pushBuffer(this, I);
  }
  _pushBigNumber(A, e) {
    if (e.isNaN()) return A._pushNaN();
    if (!e.isFinite()) return A._pushInfinity(e.isNegative() ? -1 / 0 : 1 / 0);
    if (e.isInteger()) return A._pushBigint(e);
    if (!(A._pushTag(ht.DECIMAL_FRAC) && A._pushInt(2, JA.ARRAY))) return !1;
    const g = e.decimalPlaces(),
      I = e.multipliedBy(new we(10).pow(g));
    return A._pushIntNum(-g)
      ? I.abs().isLessThan(sg)
        ? A._pushIntNum(I.toNumber())
        : A._pushBigint(I)
      : !1;
  }
  _pushMap(A, e) {
    return A._pushInt(e.size, JA.MAP)
      ? this._pushRawMap(e.size, Array.from(e))
      : !1;
  }
  _pushObject(A) {
    if (!A) return this._pushUInt8(gr);
    for (var e = this.semanticTypes.length, g = 0; g < e; g++)
      if (A instanceof this.semanticTypes[g][0])
        return this.semanticTypes[g][1].call(A, this, A);
    var I = A.encodeCBOR;
    if (typeof I == "function") return I.call(A, this);
    var Q = Object.keys(A),
      h = Q.length;
    return this._pushInt(h, JA.MAP)
      ? this._pushRawMap(
          h,
          Q.map((o) => [o, A[o]])
        )
      : !1;
  }
  _pushRawMap(A, e) {
    e = e
      .map(function (I) {
        return (I[0] = Ot.encode(I[0])), I;
      })
      .sort(ne.keySorter);
    for (var g = 0; g < A; g++)
      if (!this.push(e[g][0]) || !this.pushAny(e[g][1])) return !1;
    return !0;
  }
  write(A) {
    return this.pushAny(A);
  }
  pushAny(A) {
    var e = cg(A);
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
        return this._pushBuffer(this, PA.isBuffer(A) ? A : PA.from(A));
      case "Null":
        return this._pushUInt8(gr);
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
          case nr.NULL:
            return this._pushObject(null);
          case nr.UNDEFINED:
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
        g = this.resultMethod,
        I = this.offset,
        Q = 0,
        h = 0;
      h < I;
      h++
    )
      Q += e[h];
    var o = PA.allocUnsafe(Q),
      w = 0,
      D = 0;
    for (h = 0; h < I; h++) {
      switch (((D = e[h]), g[h])) {
        case 0:
          A[h].copy(o, w);
          break;
        case 1:
          o.writeUInt8(A[h], w, !0);
          break;
        case 2:
          o.writeUInt16BE(A[h], w, !0);
          break;
        case 3:
          o.writeUInt32BE(A[h], w, !0);
          break;
        case 4:
          o.writeDoubleBE(A[h], w, !0);
          break;
        case 5:
          o.write(A[h], w, D, "utf8");
          break;
        default:
          throw new Error("unkown method");
      }
      w += D;
    }
    var G = o;
    return this._reset(), G;
  }
  _reset() {
    (this.result = []),
      (this.resultMethod = []),
      (this.resultLength = []),
      (this.offset = 0);
  }
  static encode(A) {
    const e = new Ot();
    if (!e.pushAny(A)) throw new Error("Failed to encode input");
    return e.finalize();
  }
}
var ug = Ot;
(function (t) {
  (t.Diagnose = eg),
    (t.Decoder = Vr),
    (t.Encoder = ug),
    (t.Simple = Or),
    (t.Tagged = Wr),
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
})(vr);
var Xr = zi(vr);
function St(...t) {
  const A = new Uint8Array(t.reduce((g, I) => g + I.byteLength, 0));
  let e = 0;
  for (const g of t) A.set(new Uint8Array(g), e), (e += g.byteLength);
  return A.buffer;
}
function lt(t) {
  return [...new Uint8Array(t)]
    .map((A) => A.toString(16).padStart(2, "0"))
    .join("");
}
const hg = new RegExp(/^([0-9A-F]{2})*$/i);
function at(t) {
  if (!hg.test(t)) throw new Error("Invalid hexadecimal string.");
  const A = [...t]
    .reduce((e, g, I) => ((e[(I / 2) | 0] = (e[(I / 2) | 0] || "") + g), e), [])
    .map((e) => Number.parseInt(e, 16));
  return new Uint8Array(A).buffer;
}
function zr(t, A) {
  if (t.byteLength !== A.byteLength) return t.byteLength - A.byteLength;
  const e = new Uint8Array(t),
    g = new Uint8Array(A);
  for (let I = 0; I < e.length; I++) if (e[I] !== g[I]) return e[I] - g[I];
  return 0;
}
function Cg(t, A) {
  return zr(t, A) === 0;
}
function $r(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength).buffer;
}
function st(t) {
  return $r(Sn.create().update(new Uint8Array(t)).digest());
}
function Ht(t) {
  if (t instanceof Xr.Tagged) return Ht(t.value);
  if (typeof t == "string") return Ai(t);
  if (typeof t == "number") return st($e(t));
  if (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) return st(t);
  if (Array.isArray(t)) {
    const A = t.map(Ht);
    return st(St(...A));
  } else {
    if (t && typeof t == "object" && t._isPrincipal)
      return st(t.toUint8Array());
    if (typeof t == "object" && t !== null && typeof t.toHash == "function")
      return Ht(t.toHash());
    if (typeof t == "object") return ti(t);
    if (typeof t == "bigint") return st($e(t));
  }
  throw Object.assign(
    new Error(`Attempt to hash a value of unsupported type: ${t}`),
    { value: t }
  );
}
const Ai = (t) => {
  const A = new TextEncoder().encode(t);
  return st(A);
};
function ke(t) {
  return ti(t);
}
function ti(t) {
  const g = Object.entries(t)
      .filter(([, h]) => h !== void 0)
      .map(([h, o]) => {
        const w = Ai(h),
          D = Ht(o);
        return [w, D];
      })
      .sort(([h], [o]) => zr(h, o)),
    I = St(...g.map((h) => St(...h)));
  return st(I);
}
var fg = function (t, A) {
  var e = {};
  for (var g in t)
    Object.prototype.hasOwnProperty.call(t, g) &&
      A.indexOf(g) < 0 &&
      (e[g] = t[g]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var I = 0, g = Object.getOwnPropertySymbols(t); I < g.length; I++)
      A.indexOf(g[I]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, g[I]) &&
        (e[g[I]] = t[g[I]]);
  return e;
};
const lg = new TextEncoder().encode(`
ic-request`);
class Le {
  getPrincipal() {
    return (
      this._principal ||
        (this._principal = zA.selfAuthenticating(
          new Uint8Array(this.getPublicKey().toDer())
        )),
      this._principal
    );
  }
  async transformRequest(A) {
    const { body: e } = A,
      g = fg(A, ["body"]),
      I = await ke(e);
    return Object.assign(Object.assign({}, g), {
      body: {
        content: e,
        sender_pubkey: this.getPublicKey().toDer(),
        sender_sig: await this.sign(St(lg, I)),
      },
    });
  }
}
class Br {
  getPrincipal() {
    return zA.anonymous();
  }
  async transformRequest(A) {
    return Object.assign(Object.assign({}, A), { body: { content: A.body } });
  }
}
var HA = {},
  yt = {},
  DA = {};
Object.defineProperty(DA, "__esModule", { value: !0 });
const wg = 9007199254740992;
function At(t, ...A) {
  const e = new Uint8Array(
    t.byteLength + A.reduce((I, Q) => I + Q.byteLength, 0)
  );
  e.set(new Uint8Array(t), 0);
  let g = t.byteLength;
  for (const I of A) e.set(new Uint8Array(I), g), (g += I.byteLength);
  return e.buffer;
}
function KA(t, A, e) {
  e = e.replace(/[^0-9a-fA-F]/g, "");
  const g = 2 ** (A - 24);
  e = e.slice(-g * 2).padStart(g * 2, "0");
  const I = [(t << 5) + A].concat(e.match(/../g).map((Q) => parseInt(Q, 16)));
  return new Uint8Array(I).buffer;
}
function $t(t, A) {
  if (A < 24) return new Uint8Array([(t << 5) + A]).buffer;
  {
    const e = A <= 255 ? 24 : A <= 65535 ? 25 : A <= 4294967295 ? 26 : 27;
    return KA(t, e, A.toString(16));
  }
}
function ei(t) {
  const A = [];
  for (let e = 0; e < t.length; e++) {
    let g = t.charCodeAt(e);
    g < 128
      ? A.push(g)
      : g < 2048
      ? A.push(192 | (g >> 6), 128 | (g & 63))
      : g < 55296 || g >= 57344
      ? A.push(224 | (g >> 12), 128 | ((g >> 6) & 63), 128 | (g & 63))
      : (e++,
        (g = ((g & 1023) << 10) | (t.charCodeAt(e) & 1023)),
        A.push(
          240 | (g >> 18),
          128 | ((g >> 12) & 63),
          128 | ((g >> 6) & 63),
          128 | (g & 63)
        ));
  }
  return At(new Uint8Array($t(3, t.length)), new Uint8Array(A));
}
function pg(t, A) {
  if (t == 14277111) return At(new Uint8Array([217, 217, 247]), A);
  if (t < 24) return At(new Uint8Array([192 + t]), A);
  {
    const e = t <= 255 ? 24 : t <= 65535 ? 25 : t <= 4294967295 ? 26 : 27,
      g = 2 ** (e - 24),
      I = t
        .toString(16)
        .slice(-g * 2)
        .padStart(g * 2, "0"),
      Q = [192 + e].concat(I.match(/../g).map((h) => parseInt(h, 16)));
    return new Uint8Array(Q).buffer;
  }
}
DA.tagged = pg;
function Ut(t) {
  return new Uint8Array(t).buffer;
}
DA.raw = Ut;
function Te(t) {
  if (isNaN(t)) throw new RangeError("Invalid number.");
  t = Math.min(Math.max(0, t), 23);
  const A = [0 + t];
  return new Uint8Array(A).buffer;
}
DA.uSmall = Te;
function ri(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, t), 255)), (t = t.toString(16)), KA(0, 24, t)
  );
}
DA.u8 = ri;
function ii(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, t), 65535)), (t = t.toString(16)), KA(0, 25, t)
  );
}
DA.u16 = ii;
function ni(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, t), 4294967295)),
    (t = t.toString(16)),
    KA(0, 26, t)
  );
}
DA.u32 = ni;
function Ye(t, A) {
  if (typeof t == "string" && A == 16) {
    if (t.match(/[^0-9a-fA-F]/)) throw new RangeError("Invalid number.");
    return KA(0, 27, t);
  }
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (t = Math.min(Math.max(0, t), wg)), (t = t.toString(16)), KA(0, 27, t);
}
DA.u64 = Ye;
function gi(t) {
  if (isNaN(t)) throw new RangeError("Invalid number.");
  if (t === 0) return Te(0);
  t = Math.min(Math.max(0, -t), 24) - 1;
  const A = [32 + t];
  return new Uint8Array(A).buffer;
}
DA.iSmall = gi;
function Bi(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 255)), (t = t.toString(16)), KA(1, 24, t)
  );
}
DA.i8 = Bi;
function Ii(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 65535)),
    (t = t.toString(16)),
    KA(1, 25, t)
  );
}
DA.i16 = Ii;
function oi(t, A) {
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 4294967295)),
    (t = t.toString(16)),
    KA(1, 26, t)
  );
}
DA.i32 = oi;
function si(t, A) {
  if (typeof t == "string" && A == 16) {
    if (
      (t.startsWith("-") ? (t = t.slice(1)) : (t = "0"),
      t.match(/[^0-9a-fA-F]/) || t.length > 16)
    )
      throw new RangeError("Invalid number.");
    let e = !1,
      g = t.split("").reduceRight((I, Q) => {
        if (e) return Q + I;
        let h = parseInt(Q, 16) - 1;
        return h >= 0 ? ((e = !0), h.toString(16) + I) : "f" + I;
      }, "");
    return e ? KA(1, 27, g) : Ye(0);
  }
  if (((t = parseInt("" + t, A)), isNaN(t)))
    throw new RangeError("Invalid number.");
  return (
    (t = Math.min(Math.max(0, -t - 1), 9007199254740992)),
    (t = t.toString(16)),
    KA(1, 27, t)
  );
}
DA.i64 = si;
function yg(t) {
  return t >= 0
    ? t < 24
      ? Te(t)
      : t <= 255
      ? ri(t)
      : t <= 65535
      ? ii(t)
      : t <= 4294967295
      ? ni(t)
      : Ye(t)
    : t >= -24
    ? gi(t)
    : t >= -255
    ? Bi(t)
    : t >= -65535
    ? Ii(t)
    : t >= -4294967295
    ? oi(t)
    : si(t);
}
DA.number = yg;
function dg(t) {
  return At($t(2, t.byteLength), t);
}
DA.bytes = dg;
function Dg(t) {
  return ei(t);
}
DA.string = Dg;
function Sg(t) {
  return At($t(4, t.length), ...t);
}
DA.array = Sg;
function xg(t, A = !1) {
  t instanceof Map || (t = new Map(Object.entries(t)));
  let e = Array.from(t.entries());
  return (
    A && (e = e.sort(([g], [I]) => g.localeCompare(I))),
    At($t(5, t.size), ...e.map(([g, I]) => At(ei(g), I)))
  );
}
DA.map = xg;
function Fg(t) {
  const A = new Float32Array([t]);
  return At(new Uint8Array([224 + 26]), new Uint8Array(A.buffer));
}
DA.singleFloat = Fg;
function Ng(t) {
  const A = new Float64Array([t]);
  return At(new Uint8Array([224 + 27]), new Uint8Array(A.buffer));
}
DA.doubleFloat = Ng;
function Gg(t) {
  return t ? Ei() : ai();
}
DA.bool = Gg;
function Ei() {
  return Ut(new Uint8Array([224 + 21]));
}
DA.true_ = Ei;
function ai() {
  return Ut(new Uint8Array([224 + 20]));
}
DA.false_ = ai;
function mg() {
  return Ut(new Uint8Array([224 + 22]));
}
DA.null_ = mg;
function Ug() {
  return Ut(new Uint8Array([224 + 23]));
}
DA.undefined_ = Ug;
var Rg =
  (wt && wt.__importStar) ||
  function (t) {
    if (t && t.__esModule) return t;
    var A = {};
    if (t != null)
      for (var e in t) Object.hasOwnProperty.call(t, e) && (A[e] = t[e]);
    return (A.default = t), A;
  };
Object.defineProperty(yt, "__esModule", { value: !0 });
const vA = Rg(DA),
  Mg = [
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
class Qi {
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
        return vA.undefined_();
      case "boolean":
        return vA.bool(A);
      case "number":
        return Math.floor(A) === A ? vA.number(A) : vA.doubleFloat(A);
      case "string":
        return vA.string(A);
      case "object":
        if (A === null) return vA.null_();
        if (Array.isArray(A))
          return vA.array(A.map((e) => this._serializer.serializeValue(e)));
        if (Mg.find((e) => A instanceof e)) return vA.bytes(A.buffer);
        if (Object.getOwnPropertyNames(A).indexOf("toJSON") !== -1)
          return this.encode(A.toJSON());
        if (A instanceof Map) {
          const e = new Map();
          for (const [g, I] of A.entries())
            e.set(g, this._serializer.serializeValue(I));
          return vA.map(e, this._stable);
        } else {
          const e = new Map();
          for (const [g, I] of Object.entries(A))
            e.set(g, this._serializer.serializeValue(I));
          return vA.map(e, this._stable);
        }
      default:
        throw new Error("Invalid value.");
    }
  }
}
yt.JsonDefaultCborEncoder = Qi;
class ci {
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
yt.ToCborEncoder = ci;
class ui {
  constructor() {
    this._encoders = new Set();
  }
  static withDefaultEncoders(A = !1) {
    const e = new this();
    return e.addEncoder(new Qi(e, A)), e.addEncoder(new ci()), e;
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
    for (const g of this._encoders)
      (!e || g.priority > e.priority) && g.match(A) && (e = g);
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
yt.CborSerializer = ui;
class bg extends ui {
  serialize(A) {
    return vA.raw(
      new Uint8Array([
        ...new Uint8Array([217, 217, 247]),
        ...new Uint8Array(super.serializeValue(A)),
      ])
    );
  }
}
yt.SelfDescribeCborSerializer = bg;
(function (t) {
  function A(I) {
    for (var Q in I) t.hasOwnProperty(Q) || (t[Q] = I[Q]);
  }
  var e =
    (wt && wt.__importStar) ||
    function (I) {
      if (I && I.__esModule) return I;
      var Q = {};
      if (I != null)
        for (var h in I) Object.hasOwnProperty.call(I, h) && (Q[h] = I[h]);
      return (Q.default = I), Q;
    };
  Object.defineProperty(t, "__esModule", { value: !0 }), A(yt);
  const g = e(DA);
  t.value = g;
})(HA);
class kg {
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
    return HA.value.bytes(A.toUint8Array());
  }
}
class Lg {
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
    return HA.value.bytes(new Uint8Array(A));
  }
}
class Tg {
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
      ? HA.value.tagged(2, HA.value.bytes(at(A.toString(16))))
      : HA.value.tagged(3, HA.value.bytes(at((BigInt("-1") * A).toString(16))));
  }
}
const He = HA.SelfDescribeCborSerializer.withDefaultEncoders(!0);
He.addEncoder(new kg());
He.addEncoder(new Lg());
He.addEncoder(new Tg());
var Ir;
(function (t) {
  (t[(t.Uint64LittleEndian = 71)] = "Uint64LittleEndian"),
    (t[(t.Semantic = 55799)] = "Semantic");
})(Ir || (Ir = {}));
class bI extends Xr.Decoder {
  createByteString(A) {
    return St(...A);
  }
  createByteStringFromHeap(A, e) {
    return A === e
      ? new ArrayBuffer(0)
      : new Uint8Array(this._heap.slice(A, e));
  }
}
var or;
(function (t) {
  t.Call = "call";
})(or || (or = {}));
BigInt(1e6);
var hi;
(function () {
  for (
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      A = new Uint8Array(256),
      e = 0;
    e < t.length;
    e++
  )
    A[t.charCodeAt(e)] = e;
  hi = function (g) {
    var I = g.length * 0.75,
      Q = g.length,
      h,
      o = 0,
      w,
      D,
      G,
      M;
    g[g.length - 1] === "=" && (I--, g[g.length - 2] === "=" && I--);
    var k = new ArrayBuffer(I),
      Y = new Uint8Array(k);
    for (h = 0; h < Q; h += 4)
      (w = A[g.charCodeAt(h)]),
        (D = A[g.charCodeAt(h + 1)]),
        (G = A[g.charCodeAt(h + 2)]),
        (M = A[g.charCodeAt(h + 3)]),
        (Y[o++] = (w << 2) | (D >> 4)),
        (Y[o++] = ((D & 15) << 4) | (G >> 2)),
        (Y[o++] = ((G & 3) << 6) | (M & 63));
    return k;
  };
})();
const Yg =
  "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akE4ENABGiACQbgDakEBNgIAIAJBwANqQTgQ0AEaIAJB+ANqQQE2AgAgAkGABGpBOBDQARogAkEBNgK4BCACQcAEakE4ENABGiACQfgEakEBNgIAIAJBgAVqQTgQ0AEaIAJBuAVqQQE2AgAgAkHABWpBOBDQARogAkH4BWpBATYCACACQYAGakE4ENABGiACQQE2ArgGIAJBwAZqQTgQ0AEaIAJB+AZqQQE2AgAgAkGAB2pBOBDQARogAkG4B2pBATYCACACQcAHakE4ENABGiACQfgHakEBNgIAIAIgARAYAkAgASgCgAZBBEYNACAAKAKABkEERg0AIAJBgARqIgMgAEGAAmoQlgEgAyABQYACahAYDAYLIAJBwAxqIgdBOBDQARogAkEBNgL4DCACQYANakE4ENABGiACQbgNakEBNgIAIAJBgAhqIgRBOBDQARogAkEBNgK4CCACQcAIakE4ENABGiACQfgIakEBNgIAIAJBgApqIgMgAEGAA2oiBRBeIAQgAxCZASADIAFBgANqIgYQXiAEIAMQESAHELYBIAEoAoAGQQRHDQMMBAsgACABEAMMBgsgAkHADGoiAyABQYAFahBeIAJBgAxqIgQgA0HAABDRARogAkGABmogBBCnAQsgAkGABmoQZCACQYAIaiIDIAIQlgEgAxArIAJBgAJqIgQgAxCXASAGIAQQlgEgAkGABGoiByADEJYBIAMgABCWASADIAUQlwEgAxCwASACQYAKaiIEIAEQlgEgBCABQYAEahCXASAEELABIAMgBBAYIAcgAxCXASADIAUQlgECQCABKAKABkECRwRAIAJBwAxqIgMgAUGABWoQXiACQYAIaiADEKYBDAELIAJBwAxqIgMgAUGABWoQXiACQYAMaiIBIANBwAAQ0QEaIAJBgAhqIAEQpwELIAJBgAhqIgEQZCACQYAKaiIDIAEQlgEgAxArIAUgAkGABGoQlgEgBSADEJcBIAJBgAZqIgQgAxCXASABEGQgBiABEJcBIAQQsAEgBBBkIAAgAhCWASAAIAQQlwEMAwsgAkGACmoiAyAFEF4gAkHADGoiBCADEJkBIAMgAUGAAmoQXiAEIAMQEQsgACgCgAZBBEcEQCACQYAKaiIDIABBgAJqEF4gAkHADGoiBCADEJkBIAMgBhBeIAQgAxARCyACQYAEaiIDIAJB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AEHcu8AAKAIAQX4gA0EDdndxNgIACyAAIAEQoAEgAEH0vsAAKAIARw0BQey+wAAgATYCAAsPCyABQYACTwRAIAAgARAWDwsgAUEDdiICQQN0QeS7wABqIQECf0Hcu8AAKAIAIgNBASACdCICcQRAIAEoAggMAQtB3LvAACACIANyNgIAIAELIQIgASAANgIIIAIgADYCDCAAIAE2AgwgACACNgIIC+UDAQN/IwBB0CJrIgMkACADQcAWaiIEQcitwAAQSSADQcgcaiIFQYCuwAAQSSADQQhqIAQgBRBLIANBiAFqQTgQ0AEaIANBwAFqQTgQ0AEaIANB+AFqED0CQCACEIYBBEAgABBVDAELIANB+ARqIgQQPSAEIAEQfSAEEEcgA0H4B2oiARBnIAEgAhB4IAEQRiADQcgcaiICIAEQkAEgA0G4CWogAhCQASACIANBuAhqEJABIANB+AlqIAIQkAEgA0G4CmoiARA9IANBuA1qEFUgASAEEH0gA0HAE2oiARA9IAEgBBB9IAEQogEgA0HAAWogA0GIAWoQUEECayECA0AgAkEBakEBTQRAIANBuA1qIgEQngEgACABQYgGENEBGgUgA0G4DWoQGiADQcAWaiADQbgKaiADQbgJaiADQfgJahALAkACQAJAIANBwAFqIAIQUyADQYgBaiACEFNrQQFqDgMBAgACCyADQcgcaiIBIANBuApqIANB+ARqIANBuAlqIANB+AlqEAogA0HAFmogARADDAELIANByBxqIgEgA0G4CmogA0HAE2ogA0G4CWogA0H4CWoQCiADQcAWaiABEAMLIAJBAWshAiADQbgNaiADQcAWahABDAELCwsgA0HQImokAAvBAwEVfwNAIANBwAFGBEACQCAAQShqIQsgAEEUaigCACIMIQggAEEQaigCACINIQIgAEEMaigCACIOIQEgACgCCCIPIQMgAEEYaigCACIQIQogAEEcaigCACIRIQQgAEEgaigCACISIQcgAEEkaigCACITIQYDQCAHIQkgBCEHIAohBCAFQYACRg0BIAEgAnEhFCABIAJzIRUgBSALaigCACAFQcCiwABqKAIAIAkgBEF/c3EgBCAHcXIgBmogBEEadyAEQRV3cyAEQQd3c2pqaiIGIAhqIQogBUEEaiEFIAIhCCABIQIgAyIBQR53IAFBE3dzIAFBCndzIBQgASAVcXNqIAZqIQMgCSEGDAALAAsFIAAgA2oiAkHoAGogAkEoaigCACACQcwAaigCACACQeAAaigCACIBQQ93IAFBDXdzIAFBCnZzamogAkEsaigCACIBQRl3IAFBDndzIAFBA3ZzajYCACADQQRqIQMMAQsLIAAgBiATajYCJCAAIAkgEmo2AiAgACAHIBFqNgIcIAAgBCAQajYCGCAAIAggDGo2AhQgACACIA1qNgIQIAAgASAOajYCDCAAIAMgD2o2AggL5AEBAn8jAEGAA2siAyQAIAMQPSAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbyAAIAFBgANqIAJBAXNBAWtBH3YQbyAAIAFBgAZqIAJBAnNBAWtBH3YQbyAAIAFBgAlqIAJBA3NBAWtBH3YQbyAAIAFBgAxqIAJBBHNBAWtBH3YQbyAAIAFBgA9qIAJBBXNBAWtBH3YQbyAAIAFBgBJqIAJBBnNBAWtBH3YQbyAAIAFBgBVqIAJBB3NBAWtBH3YQbyADIAAQfSADEKIBIAAgAyAEQQFxEG8gA0GAA2okAAvlAwEIfyMAQZAGayICJAAgAEFAayEIAkAgAUH4AGooAgAgASgCOGqsIABB+ABqKAIAIgcgACgCOCIEaqx+Qv///w9XDQAgBEEBSgR/IAAQHiAAKAJ4BSAHC0EBTA0AIAgQHgsgAkHYpMAAEEkgAkE4aiIHQfAAENABGiACIQNBACECA0AgAkE4RgRAAkAgB0E4aiEEQQAhAgNAIAJBOEYNASACIARqIAIgA2opAwA3AwAgAkEIaiECDAALAAsFIAIgB2pCADcDACACQQhqIQIMAQsLIANBqAFqIgYgABBdIANB4AFqIgUgARBdIANBmAJqIgIgACABEAUgA0GIA2oiBCAIIAFBQGsiARAFIAYgCBBgIAYQQiAFIAEQYCAFEEIgA0H4A2oiCSAGIAUQBUEAIQEgA0HoBGoiBkHwABDQASEFA0AgAUHwAEcEQCABIAVqIAEgAmopAwA3AwAgAUEIaiEBDAELCyAGIAQQYkEAIQEDQCABQfAARwRAIAEgBGoiBSABIAdqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAiAEEGIgAhBIIAkgBhBjIAkQSCADQdgFaiIBIAIQayAAIAEQaiAAQQM2AjggASAJEGsgCCABEGogAEECNgJ4IANBkAZqJAALowIBCH8jAEGABmsiAiQAIAIgAEGAAWoiBxBeIAJBgAFqIgQgBxBeIAQQLSACQYACaiIFIAIQXiAFIABBgAJqIgMQESACQYADaiIBIAMQXiABEC0gAyAEEJkBIAMgBBCaASADEKkBIAMQuAEgAxC4ASADEKkBIAFBDBCrASABEHwgARCpASACQYAEaiIIIAEQXiAIIAMQESACQYAFaiIGIAQQXiAGIAEQmgEgBhCpASADIAUQESAFIAEQmQEgBSABEJoBIAEgBRCaASABEKkBIAQgARB7IAQQqQEgBiAEEBEgBiAIEJoBIAUgABCZASAFIAIQESAAIAQQmQEgABCpASAAIAUQESAAELgBIAAQqQEgByAGEJkBIAcQqQEgAkGABmokAAu8AgEGfyMAQYAIayIBJAAgASAAEIwBIAFBgAJqIgMgAEGABGoiBRCMASABQYAEaiIEIABBgAJqIgYQjAEgAUGABmoiAkE4ENABGiABQQE2ArgGIAFBwAZqQTgQ0AEaIAFB+AZqQQE2AgAgAUGAB2pBOBDQARogAUG4B2pBATYCACABQcAHakE4ENABGiABQfgHakEBNgIAIAAQISACIAAQlgEgAiAAEJcBIAAgAhCXASAAELABIAEQyQEgARCzASAAIAEQlwEgAxAhIAMQZCACIAMQlgEgAiADEJcBIAMgAhCXASADELABIAQQISACIAQQlgEgAiAEEJcBIAQgAhCXASAEELABIAYQsgEgBhCzASAFEMkBIAUQswEgBiADEJcBIAUgBBCXASAAQQU2AoAGIAAQnAEgAUGACGokAAv/AQEHfyMAQcACayIBJAAgASAAQUBrIgYQkAEgARBMIAFBQGsiAyAGEJABIAMgAEGAAWoiAhBKIAFBgAFqIgQgAhCQASAEEEwgAiABEK4BIAIgARB3IAIQQiACEIIBIAIQggEgAhBCIARBDBA0IAFBwAFqIgcgBBCQASAHIAIQSiABQYACaiIFIAEQkAEgBSAEEHcgBRBCIAIgAxBKIAMgBBCuASADIAQQdyAEIAMQdyABIAQQfiABEEIgBSABEEogBSAHEHcgAyAAEK4BIAMgBhBKIAAgARCuASAAEEIgACADEEogABCCASAAEEIgBiAFEK4BIAYQQiABQcACaiQAC84CAgd/An4CQAJAAkBBDSABQTpuIgJrIgRBDU0EQEEMIAJrIgNBDk8NASAAIAAgA0EDdGopAwBBOiABIAJBOmxrIgNrrSIKhyAAIARBA3RqKQMAIAOtIgmGhDcDaCAEQQ1rIQUgAEHgAGohBCACQQFqIQZBACACQQN0ayEHQQshAwNAAkAgA0ECaiAGTQRAIAFBrAZPDQEgACACQQN0aiAAKQMAIAmGQv//////////A4M3AwADQCACRQ0HIABCADcDACACQQFrIQIgAEEIaiEADAALAAsgAyAFakEOTw0EIAQgBCAHaiIIQQhrKQMAIAqHIAgpAwAgCYZC//////////8Dg4Q3AwAgA0EBayEDIARBCGshBAwBCwsgAkEOQYCywAAQOwALIARBDkHQscAAEDsACyADQQ5B4LHAABA7AAtBf0EOQfCxwAAQOwALC6cCAQR/IABCADcCECAAAn9BACABQYACSQ0AGkEfIAFB////B0sNABogAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+agsiBDYCHCAEQQJ0Qey9wABqIQMgACECAkACQAJAAkBB4LvAACgCACIAQQEgBHQiBXEEQCADKAIAIQMgBBCfASEAIAMQywEgAUcNASADIQAMAgtB4LvAACAAIAVyNgIAIAMgAjYCAAwDCyABIAB0IQQDQCADIARBHXZBBHFqQRBqIgUoAgAiAEUNAiAEQQF0IQQgACIDEMsBIAFHDQALCyAAKAIIIgEgAjYCDCAAIAI2AgggAiAANgIMIAIgATYCCCACQQA2AhgPCyAFIAI2AgALIAIgAzYCGCACIAI2AgggAiACNgIMC7YCAQV/IAAoAhghBAJAAkAgACAAKAIMRgRAIABBFEEQIABBFGoiASgCACIDG2ooAgAiAg0BQQAhAQwCCyAAKAIIIgIgACgCDCIBNgIMIAEgAjYCCAwBCyABIABBEGogAxshAwNAIAMhBSACIgFBFGoiAygCACICRQRAIAFBEGohAyABKAIQIQILIAINAAsgBUEANgIACwJAIARFDQACQCAAIAAoAhxBAnRB7L3AAGoiAigCAEcEQCAEQRBBFCAEKAIQIABGG2ogATYCACABDQEMAgsgAiABNgIAIAENAEHgu8AAQeC7wAAoAgBBfiAAKAIcd3E2AgAPCyABIAQ2AhggACgCECICBEAgASACNgIQIAIgATYCGAsgAEEUaigCACIARQ0AIAFBFGogADYCACAAIAE2AhgLC+UBAQZ/IwBBgARrIgIkACACIAAQXiACQYABaiIFIABBgAFqIgYQXiACQYACaiIDQTgQ0AEaIAJBATYCuAIgAkHAAmpBOBDQARogAkH4AmpBATYCACACQYADaiIEIAYQXiACIAEQESAFIAFBgAFqIgcQESADIAcQmQEgAyABEJoBIAQgABCaASADEKkBIAQQqQEgBCADEBEgAyACEJkBIAMQNiAEIAMQmgEgBBCpASADIAUQmQEgAxA2IAYgBBCZASAGIAMQmgEgBRB8IAAgBRCZASAAIAIQmgEgABCwASACQYAEaiQAC28BDH9BjL/AACgCACICRQRAQZy/wABB/x82AgBBAA8LQYS/wAAhBgNAIAIiASgCCCECIAEoAgQhAyABKAIAIQQgAUEMaigCABogASEGIAVBAWohBSACDQALQZy/wAAgBUH/HyAFQf8fSxs2AgBBAAuAAgEGfyMAQYAIayIBJAAgACgCgAZBAUcEQCABIAAQjAEgAUGAAmoiAiAAQYACaiIEEIwBIAFBgARqIgUgAEGABGoiAxCMASABQYAGaiIGIAAQjAEgARAhIAIgAxAYIAIQswEgAhCwASAFECEgBiAEEBggBhCzASADIAAQlwEgAyAEEJcBIAMQsAEgAxAhIAAgARCWASABIAIQlwEgARCwASABIAUQlwEgASAGEJcBIAEQsAEgARArIAIQZCAFEGQgACACEJcBIAQgBRCWASAEIAYQlwEgAyABEJcBIABBBEEFIAAoAoAGQX5xQQJGGzYCgAYgABCdAQsgAUGACGokAAuZAgEBfyMAQYANayIDJAAgAyABEGkgAxCdASADQYgGaiIBIAIQXSABEEIgA0HABmoiAiABEF0gAkEDECkaIAIQQiADQfgGaiADEGkCQCACEFdFBEAgA0HABmoQKkECayECA0AgAkEBakEBTQRAIANB+AZqIgEQnAEMAwUgA0H4BmoQEwJAAkACQCADQcAGaiACEFMgA0GIBmogAhBTa0EBag4DAQIAAgsgA0H4BmogAxAHDAELIAMQngEgA0H4BmogAxAHIAMQngELIAJBAWshAgwBCwALAAsgA0H4BmoiARC3ASABQYABahC2ASABQYACahCxASABQYAEahCxASABQQE2AoAGCyAAIAFBiAYQ0QEaIANBgA1qJAALhgICBH8BfiMAQTBrIgIkACABQQRqIQQgASgCBEUEQCABKAIAIQMgAkEQaiIFQQA2AgAgAkIBNwMIIAIgAkEIajYCFCACQShqIANBEGopAgA3AwAgAkEgaiADQQhqKQIANwMAIAIgAykCADcDGCACQRRqIAJBGGoQDBogBEEIaiAFKAIANgIAIAQgAikDCDcCAAsgAkEgaiIDIARBCGooAgA2AgAgAUEMakEANgIAIAQpAgAhBiABQgE3AgQgAiAGNwMYQQxBBBC5ASIBRQRAQQxBBBDPAQALIAEgAikDGDcCACABQQhqIAMoAgA2AgAgAEGEt8AANgIEIAAgATYCACACQTBqJAAL5AEBAn8jAEHAAWsiAyQAIAMQZyAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbiAAIAFBwAFqIAJBAXNBAWtBH3YQbiAAIAFBgANqIAJBAnNBAWtBH3YQbiAAIAFBwARqIAJBA3NBAWtBH3YQbiAAIAFBgAZqIAJBBHNBAWtBH3YQbiAAIAFBwAdqIAJBBXNBAWtBH3YQbiAAIAFBgAlqIAJBBnNBAWtBH3YQbiAAIAFBwApqIAJBB3NBAWtBH3YQbiADIAAQeCADEKQBIAAgAyAEQQFxEG4gA0HAAWokAAvDAwIGfwN+IwBB8ABrIgEkACABQcCywAAQSSABQThqIAEQXSAAEEICQAJAAkAgAQJ/IAAoAjgiAkEQTARAIAJBAWsQNQwBCyABKQMwIghCAXwiByAIVA0BIAApAzAiCEKAgICAgICAgIB/USAHQn9RcQ0CIAFBOGoiAiAIIAd/pxApIQcgASABKQNoIAdCOoZ8NwNoIAAgAhBhIAAQQkECCyIEECgDQCAERQ0DQQAhAyABIAEpAwgiCEI5hkKAgICAgICAgAKDIAEpAwBCAYeEIgc3AwAgACkDACAHfSEHIABBCGohBSAAIAFBOGoiAkEBA38gAiADaiAHQv//////////A4M3AwAgB0I6hyEHIANBKEYEfyABIAEpAzBCAYciCDcDMCACIAApAzAgCH0gB3wiBzcDMCAHQj+IpwUgASADaiIGQQhqIAhCAYcgBkEQaikDACIIQjmGQoCAgICAgICAAoOEIgk3AwAgAyAFaikDACAHfCAJfSEHIANBCGohAwwBCwtrEDAgBEEBayEEDAALAAtB4LPAAEEZQcSzwAAQWQALQYC0wABBH0HEs8AAEFkACyAAQQE2AjggAUHwAGokAAvuAQECfyMAQbABayIDJAAgA0EwENABIQMCQAJAA0AgAkEwRgRAIANBMGogAxBwIAFBMGohAUEAIQIDQCACQTBGDQMgAkEwRg0EIAIgA2ogASACai0AADoAACACQQFqIQIMAAsACyACQeAARwRAIAIgA2ogASACai0AADoAACACQQFqIQIMAQsLQeAAQeAAQYCmwAAQOwALIANB8ABqIgEgAxBwIABBOBDQASIAQQE2AjggAEFAa0E4ENABIABB+ABqQQE2AgAgACABEK4BIANBMGoQrgEgA0GwAWokAA8LIAJBMGpB4ABBkKbAABA7AAuPAgEDfyMAQSBrIgUkAEEBIQZB2LvAAEHYu8AAKAIAIgdBAWo2AgACQEGgv8AALQAABEBBpL/AACgCAEEBaiEGDAELQaC/wABBAToAAAtBpL/AACAGNgIAAkACQCAHQQBIIAZBAktyDQAgBSAEOgAYIAUgAzYCFCAFIAI2AhBBzLvAACgCACICQQBIDQBBzLvAACACQQFqIgI2AgBBzLvAAEHUu8AAKAIAIgMEf0HQu8AAKAIAIAUgACABKAIQEQAAIAUgBSkDADcDCCAFQQhqIAMoAhQRAABBzLvAACgCAAUgAgtBAWs2AgAgBkEBSw0AIAQNAQsACyMAQRBrIgIkACACIAE2AgwgAiAANgIIAAucAQEEfyMAQYADayICJAAgAiAAEF4gAkGAAWoiASAAQYABaiIEEF4gAkGAAmoiAyAAEF4gAyAEEBEgAiAEEJoBIAEQfCABIAAQmgEgAhCpASABEKkBIAAgAhCZASAAIAEQESABIAMQmQEgARB8IAEgAxCaASABEKkBIAEQNiAAIAEQmgEgAxC4ASAEIAMQmQEgABCwASACQYADaiQAC7kBAQJ/IwBBIGsiAyQAAkAgASABIAJqIgFLDQAgAEEEaigCACICQQF0IgQgASABIARJGyIBQQggAUEISxshAQJAIAIEQCADQRhqQQE2AgAgAyACNgIUIAMgACgCADYCEAwBCyADQQA2AhALIAMgASADQRBqECYgAygCAARAIANBCGooAgAiAEUNASADKAIEIAAQzwEACyADKAIEIQIgAEEEaiABNgIAIAAgAjYCACADQSBqJAAPCxBlAAusAQECfyMAQYADayIDJAAgA0EIaiABEJABAkAgAgRAIANBCGogAhCuAQwBCyADQQhqEDoLIANByABqIgJB8LTAABBJIANBgAFqIAIQjgEgA0HAAWoiAiADQQhqIgQQkAEgAhBMIAIgARBKIAAgARCQASAAIAQQSiADQYACaiACEJABIAAQViEBIANBwAJqIgIgABCQASACEEMgAhBCIAAgAiABEHIgA0GAA2okAAueAQEFfyMAQYABayICJAAgAkE4ENABIgJBATYCOCACQUBrIgNBOBDQARogAkEBNgJ4IAIgABCuASACIAFBgAFqIgUQSiADIAEQrgEgAyAAQYABaiIGEEoCQCACIAMQWEUNACACIABBQGsQrgEgAiAFEEogAkFAayIAIAFBQGsQrgEgACAGEEogAiAAEFhFDQBBASEECyACQYABaiQAIAQLpwEBA38jAEEwayICJAAgAUEEaiEDIAEoAgRFBEAgASgCACEBIAJBEGoiBEEANgIAIAJCATcDCCACIAJBCGo2AhQgAkEoaiABQRBqKQIANwMAIAJBIGogAUEIaikCADcDACACIAEpAgA3AxggAkEUaiACQRhqEAwaIANBCGogBCgCADYCACADIAIpAwg3AgALIABBhLfAADYCBCAAIAM2AgAgAkEwaiQAC5UBAQJ/AkACQAJAAkACfwJAAkACf0EBIgMgAUEASA0AGiACKAIAIgRFDQEgAigCBCICDQQgAQ0CQQEMAwshA0EAIQEMBgsgAQ0AQQEMAQsgAUEBELkBCyICRQ0BDAILIAQgARCsASICDQELIAAgATYCBEEBIQEMAQsgACACNgIEQQAhAwsgACADNgIAIABBCGogATYCAAvvMwISfwV+IwBBMGsiDiQAIA5BEGogACABEFsgDiAOKAIUIgA2AhwgDiAOKAIQIgg2AhggDkEIaiACIAMQWyAOIA4oAgwiATYCJCAOIA4oAggiAzYCICAOIAQgBRBbIA4gDigCBCIFNgIsIA4gDigCACINNgIoIAAhBCMAQZAVayICJAAjAEGwBmsiCiQAIApBEGpBOBDQARogCkHQAGpBOBDQASEVIApBiAFqQQE2AgAgCkEBNgJIIApBkAFqIgBB2KTAABBJIAAQKiEPIApByAFqIhNBgAIQ0AEaIApB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ABBJAkACQAJAAkADQAJAIAxBMEYEQCAAIAAtAABBH3E6AAAgAEHoAGogABC+ASAEDQFBAEEAQZiBwAAQOwALIAQgDEYNAiAAIAxqIAggDGotAAA6AAAgDEEBaiEMDAELC0EAIQwgCCwAACIJQQBIDQIgCEEwaiEDIARBMCAEQTBLG0EwayEIA0AgDEEwRgRAIABBoAFqIgQgABC+ASMAQYABayIDJAAgARBnIAEgAEHoAGoQwAEgAUFAayIIIAQQwAEgAUGAAWoQygEgARBCIAMgARBPIANBQGsiBCAIEJABIAQQTCAEIAMQWEUEQCABEJIBCyADQYABaiQADAULIAggDEYNAiAAIAxqIAMgDGotAAA6AAAgDEEBaiEMDAALAAsgBCAEQYiBwAAQOwALIAxBMGogBEGogcAAEDsACyMAQcABayIDJAAgAEGgAWoiBBBnIANBOBDQASIDQQE2AjggBCAAQegAahDAASAEEEIgBEGAAWoQygEgA0FAayIIIAQQTwJAAkACQCAIIAMQWkEBRgRAIANBgAFqIgggA0FAayADECMgCBBWDQEMAgsgBBCSAQwCCyADQYABaiIIEEMgCBBCCyAEQUBrIANBgAFqEK4BCyADQcABaiQAIAlBIHEiA0EAIABB4AFqEE0iBEEBRxtBASADIARBAUdyGwRAIABBoAFqEKQBCyABIABBoAFqQcABENEBGgsgAEHgAmokAAJ/QQAhAyMAQcAFayIAJAACQCABEIYBDQAgAEEIaiIIQZCtwAAQSSAAQYAEaiIEQbiuwAAQSSAAQUBrIgkgBBCOASAAQYABaiIEEGcgBCABEHggBCAJEEogAEHAAmoiBCABIAgQvQEgASAEECQNACAAQYAEaiIEIABBwAJqIgEgAEEIahC9ASABIARBwAEQ0QEaIAEQpAEgAEGAAWogARAkRQ0AQQEhAwsgAEHABWokAEF/IANFDQAaIAJBwAFqEKQBIAJBgANqIQhBACEAIwBB4ARrIgEkACABQeAAENABIQECQCAFBEADQCAAQeAARgRAIAEgAS0AAEEfcToAACABQeAAaiABEB9BACEAAkAgDSwAACILQQBOBEAgDUHgAGohAyAFQeAAIAVB4ABLG0HgAGshBANAIABB4ABGBEAgAUHgAWoiACABEB8gCCABQeAAaiAAED8MAwsgACAERwRA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AWoQmQEgACAEEBEgAEGAAWoiASAFQYABahCZASABIAgQESAAIAEQeg0BC0EADAELQQELIQEgAEGAAmokACANQcAHaiQAQX8gAUUNABojAEHgA2siACQAIABBgAFqIgFBwKjAABBJIABBuAFqIgNB+KjAABBJIAAgASADEEsgAEHwAmoiAUGwqcAAEEkgAEGoA2oiA0HoqcAAEEkgAEHwAWoiBCABIAMQSyACQYAGaiIBIAAgBBA/IABB4ANqJAAgAkGACWohByACQYADaiEIIwBBkDRrIgAkACAAQYAoaiIDQcitwAAQSSAAQYguaiIEQYCuwAAQSSAAIAMgBBBLIABBgAFqQTgQ0AEaIABBuAFqQTgQ0AEaIABB8AFqED0CQCACQcABaiIEEIYBRQRAIAIQhgEEQCAHIAEgBBAODAILIABB8ARqIgMQPSADIAEQfSADEEcgAEHwB2oiBRBnIAUgBBB4IAUQRiAAQbAJaiIEED0gBCAIEH0gBBBHIABBsAxqIggQZyAIIAIQeCAIEEYgAEGILmoiASAFEJABIABB8A1qIAEQkAEgASAAQbAIahCQASAAQbAOaiABEJABIAEgCBCQASAAQfAOaiABEJABIAEgAEHwDGoQkAEgAEGwD2ogARCQASAAQfAPaiIBED0gAEHwEmoiBRA9IABB8BVqEFUgASADEH0gBSAEEH0gAEH4G2oiARA9IAEgAxB9IAEQogEgAEH4HmoiARA9IAEgBBB9IAEQogEgAEG4AWogAEGAAWoQUEECayEBA0AgAUEBakEBTQRAIABB8BVqIgEQngEgByABQYgGENEBGgwDBSAAQfAVaiIEEBogAEH4IWoiAyAAQfAPaiAAQfANaiAAQbAOahALIABBgChqIgUgAEHwEmogAEHwDmogAEGwD2oQCyADIAUQAyAEIAMQAQJAAkACQCAAQbgBaiABEFMgAEGAAWogARBTa0EBag4DAQIAAgsgAEGILmoiAyAAQfAPaiAAQfAEaiAAQfANaiAAQbAOahAKIABB+CFqIgQgA0GIBhDRARogAyAAQfASaiAAQbAJaiAAQfAOaiAAQbAPahAKIAQgAxADIABB8BVqIAQQAQwBCyAAQYguaiIDIABB8A9qIABB+BtqIABB8A1qIABBsA5qEAogAEH4IWoiBCADQYgGENEBGiADIABB8BJqIABB+B5qIABB8A5qIABBsA9qEAogBCADEAMgAEHwFWogBBABCyABQQFrIQEMAQsACwALIAcgCCACEA4LIABBkDRqJAAjAEHgH2siCCQAIAhB0BNqIgFByK3AABBJIAhB2BlqIg1BgK7AABBJIAggASANEEsgCEGAAWoiC0GQrcAAEEkgAkGID2oiACAHEGkgCEG4AWoiBSAAEGkjAEGACGsiAyQAIAMgBRCMASADQYACaiIJIAVBgAJqIg8QjAEgA0GABGoiCiAFEIwBIANBgAZqIgRBOBDQARogA0EBNgK4BiADQcAGakE4ENABGiADQfgGakEBNgIAIANBgAdqQTgQ0AEaIANBuAdqQQE2AgAgA0HAB2pBOBDQARogA0H4B2pBATYCACAFEJ0BIAMQISAJIAVBgARqIgwQGCAJEGQgAyAJEHkgAxCwASAJIAwQlgEgCRAhIAkQZCAKIA8QGCAJIAoQeSAJELABIAogDxCWASAKECEgBCAFEJYBIAQgDBAYIAogBBB5IAoQsAEgBCAPEJYBIAQgChAYIAQQZCAFIAMQGCAEIAUQlwEgDCAJEBggDBBkIAQgDBCXASAEELABIwBBgAJrIgYkACAGIAQQXiAGQYABaiIQIARBgAFqIhIQXiAGEC0gEBAtIBAQfCAQEKkBIAYgEBB7IAYQPiAEIAYQESAGEDYgBhCpASASIAYQESAGQYACaiQAIAUgAxCWASAFIAQQGCAPIAkQlgEgDyAEEBggDCAKEJYBIAwgBBAYIAVBBTYCgAYgA0GACGokACAAEJ4BIAAgBRAHIAUgABBtIAAgCBAyIAAgCBAyIAAgBRAHIAhBwAdqIgQgABBpIAQQEyAEIAAQByANIAAgCxAbIAhByA1qIgMgDRBpIAMQngEgASAAEGkgARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gASAIEDIgACADEG0gACABEAcgDSAAIAsQGyADIA0QbSANIAMgCxAbIAMgDRBtIAEgABBtIAEgCBAyIAEgCBAyIAMgARAHIAEgABBtIAEQngEgACADEG0gACABEAcgACAEEAcgABCcASAIQeAfaiQAIAcgAEGIBhDRARpBACEAIwBBgAJrIgEkACABEGwCQCAHIAEQegR/IAdBgAFqIAFBgAFqEHoFQQALRQ0AIAdBgAJqEIcBRQ0AIAdBgARqEIcBIQALIAFBgAJqJABBACAADQAaQX8LIAJBkBVqJAAgDkEoahC0ASAOQSBqELQBIA5BGGoQtAEgDkEwaiQAC58BAgJ/BX4gAEEwaiICKQMAIAFBP3GtIgSGIQUgACkDKCIGQTogAWtBP3GtIgiHIQdBBiEBA38gAiAFIAeENwMAIAFBAU0EfyAAIAApAwAgBIZC//////////8DgzcDACAAKQMwQiSHpwUgAUEBayEBIAJBEGsiA0EIaiECIAYgBIZC//////////8DgyEHIAMpAwAiBiAIhyEFDAELCxoLiAECA34DfyMAQRBrIgUkAAN+IAZBOEYEfiAFQRBqJAAgAwUgBSAAIAZqIgcpAwAiAiACQj+HIAGsIgIgAkI/hxAvIAcgBSkDACIEIAN8IgJC//////////8DgzcDACACIARUrSAFQQhqKQMAIANCP4d8fEIGhiACQjqIhCEDIAZBCGohBgwBCwsLigECA38BfiMAQUBqIgIkACACQQhqIgEgABBdIAEQQiACQThqIQFBBiEDQdwCIQACQAJAA0AgA0EATgRAIAEpAwAiBEIAUg0CIAFBCGshASAAQTprIQAgA0EBayEDDAELC0EAIQAMAQsDQCAEUA0BIABBAWohACAEQgJ/IQQMAAsACyACQUBrJAAgAAuHAQEDfyMAQYACayIBJAAgABCwASABIAAQXiABQYABaiICQTgQ0AEaIAFBATYCuAEgAUHAAWpBOBDQARogAUH4AWpBATYCACABIABBgAFqIgMQmgEgARA2IAIgARCZASACIAMQmgEgAyABEJkBIAMgABCaASAAIAIQmQEgABCwASABQYACaiQAC30CBH4BfyABQT9xrSECQTogAWtBP3GtIQRBACEBIAApAwAiBSEDA38gAUEwRgR/IAAgACkDMCAChzcDMCAFQn8gAoZCf4WDpwUgACABaiIGIAMgAocgBkEIaikDACIDIASGQv//////////A4OENwMAIAFBCGohAQwBCwsaC2kBBH8jAEHAAWsiASQAIAEgABCQASABQUBrIgIgABCQASABQYABaiIDIABBQGsiBBCQASABIAQQdyACIAAQdyACEEIgBCACEEogAxBDIAAgAxB3IAEQQiAAEEIgACABEEogAUHAAWokAAuCAQIBfwF+IABB8AAQ0AEhAANAIAJBOEYEQAJAIAAgASkDMCIDQjqHNwM4IAAgA0L//////////wODNwMwIABBQGshAEEAIQIDQCACQTBGDQEgACACakIANwMAIAJBCGohAgwACwALBSAAIAJqIAEgAmopAwA3AwAgAkEIaiECDAELCwtuAQZ+IAAgA0L/////D4MiBSABQv////8PgyIGfiIHIAUgAUIgiCIIfiIJIAYgA0IgiCIGfnwiBUIghnwiCjcDACAAIAcgClatIAYgCH4gBSAJVK1CIIYgBUIgiIR8fCABIAR+IAIgA358fDcDCAtqAgF/BX4gASkDCCAAKQMAhSIGQgGGQgGHIQdBACACa6whCAN+IANBOEYEfiAFBSAAIANqIgIgAikDACIEIAaFIAEgA2opAwAgBIUgCIOFIgQgB4U3AwAgBCAFhSEFIANBCGohAwwBCwsaC18CAX8EfkIBIQNBMCECA38gAkF4RgR/IARCAYYgA3ynQQFrBSABIAJqKQMAIgUgACACaikDACIGfUI6hyADgyAEhCEEIAJBCGshAiAFIAaFQgF9QjqHIAODIQMMAQsLC2kBBH8jAEGAAmsiAiQAIAIgARBeIAJBgAFqIgMgARBeIAIQLSADIAIQESAAIAMQmAEgAEGAAmoiBCADEJgBIABBgARqIgUgAxCYASAEIAEQpgEgBSACEKYBIABBBTYCgAYgAkGAAmokAAtiAQJ/IwBBQGoiAiQAIAAQQiACIAAQkAECQCABBEAgACABEK4BDAELIAAQOgtBACEBA0AgA0UEQCAAEExBASABQQFqIAFBAUYiAxshAQwBCwsgACACEEogABAeIAJBQGskAAtnAQJ/IwBBQGoiAyQAAkAgASABQR91IgJqIAJzIgIgACgCOGxBgICAEE4EQCADIAIQOSAAIAMQSgwBCyAAIAIQKRogACAAKAI4IAJsNgI4CyABQQBIBEAgABBDIAAQQgsgA0FAayQAC2cAIABBAXYgAHIiAEECdiAAciIAQQR2IAByIgBBCHYgAHIiAEEQdiAAciIAIABBAXZB1arVqgVxayIAQQJ2QbPmzJkDcSAAQbPmzJkDcWoiAEEEdiAAakGPnrz4AHFBgYKECGxBGHYLYQEDfyMAQYABayIBJAAgASAAEJABIAFBQGsiAkE4ENABGiABQQE2AnggASAAQUBrIgMQdyABEEMgAiABEK4BIAIgAxB3IAMgARCuASADIAAQdyAAIAIQrgEgAUGAAWokAAtVAgJ/AX4jAEHwAGsiASQAIAFBwLLAABBJIAApAwAhAyABQThqIgIgABBdIABBARAsIAIgARBgIAIQQiACQQEQLCAAIAIgA0ICgacQMCABQfAAaiQAC5gBAQZ/IwBBwAFrIgMkACAAIAEQXiAAEC0gA0GIAWoiBkHop8AAEEkjAEFAaiIEJAAgA0EIaiICQTgQ0AEiBUEBNgI4IAVBQGtBOBDQASAFQfgAakEBNgIAIAQgBhCOASAFIAQQrgEQwQEgBEFAayQAIAIQqQEgAhB8IAIQqQEgACABEBEgACACEJoBIAAQtQEgA0HAAWokAAtZAQJ/IwBBQGoiAyQAIABBOBDQASIAQQE2AjgCQCABQQBOBEAgACABEJMBDAELIANBCGoiAkHAssAAEEkgAiABEJMBIAIQQiAAIAIQagsgABBUIANBQGskAAu9CAEKfyMAQYABayIHJAAgB0EIaiIDQcCywAAQSSADQQEQlAECQAJAA0AgAUEwRgRAIANBMGogAykDMEIBhzcDACADQThqIQEDQCACRQ0EIAFCADcDACACQQFrIQIgAUEIaiEBDAALAAsgAUE4Rg0BIAFBOEcEQCABIANqIAEgA2oiBEEIaikDAEI5hkL//////////wODIAQpAwBCAYeENwMAIAVBAWohBSABQQhqIQEMAQsLQQdBB0GEm8AAEDsACyAFQQdB9JrAABA7AAsgA0EBEJQBIANBARAsIAdBQGshBUEAIQIjAEGgCmsiASQAIAFBOBDQASIBQUBrQTgQ0AEhBiABQYABakE4ENABGiABQcABakE4ENABGiABQYACakE4ENABGiABQcACakE4ENABGiABQYADakE4ENABGiABQcADakE4ENABGiABQYAEakE4ENABGiABQcAEakE4ENABGiABQYAFakE4ENABGiABQcAFakE4ENABGiABQYAGakE4ENABGiABQcAGakE4ENABGiABQYAHakE4ENABGiABQcAHakE4ENABGiABQfgHakEBNgIAIAFBuAdqQQE2AgAgAUH4BmpBATYCACABQbgGakEBNgIAIAFB+AVqQQE2AgAgAUG4BWpBATYCACABQfgEakEBNgIAIAFBuARqQQE2AgAgAUH4A2pBATYCACABQbgDakEBNgIAIAFB+AJqQQE2AgAgAUG4AmpBATYCACABQfgBakEBNgIAIAFBuAFqQQE2AgAgAUH4AGpBATYCACABQQE2AjggAUGBCGpB5wAQ0AEaIAFB6AhqIgQgABCQASAEEEIgAUGoCWoiBCADEF0gBBBCIAQQKkEDaiIIQQJ2IgNBAWohCQJAA0AgAiAJRgRAIAEQygEgBiABQegIahCuASABQeAJakE4ENABGiABQQE2ApgKQYB5IQIMAgsgAUGoCWoiBCAEQQQQjwEiChCUASAEEEIgAkHnAEcEQCABQYEIaiACaiAKOgAAIAFBqAlqQQQQLCACQQFqIQIMAQsLQecAQecAQaC0wAAQOwALA0AgAgRAIAFB4AlqIgQgASACaiIGQcAHahCuASAGQYAIaiIGIAQQrgEgBiABQegIahBKIAJBQGshAgwBCwsCQAJAAkACQCAIQZwDSQRAIAFBgQhqIANqLAAAIgJBEE8NASAFIAEgAkEGdGoQkAEgA0EBayICQeYASyEEA0AgAkF/Rg0DIAUQTCAFEEwgBRBMIAUQTCAEDQQgAUGBCGogAmotAAAiA0EQSQRAIAUgASADQQZ0ahBKIAJBAWshAgwBCwsgA0EYdEEYdUEQQeC0wAAQOwALIANB5wBBsLTAABA7AAsgAkEQQcC0wAAQOwALIAUQHiABQaAKaiQADAELIAJB5wBB0LTAABA7AAsgACAFEK4BIAdBgAFqJAALbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYCACADQSxqQQE2AgAgA0ICNwIMIANB2LjAADYCCCADQQE2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEGYAC2UBAn8gACAAKAIAIgJBCGoiAzYCACAAIAJBA3ZBPHFqQShqIgIgAUH/AXEgAigCAEEIdHI2AgACQAJAIANFBEAgAEEANgIAIAAgACgCBEEBajYCBAwBCyADQf8DcQ0BCyAAEA8LC1wAIABBOBDQASIAQQE2AjggAEFAa0E4ENABGiAAQfgAakEBNgIAIABBgAFqEFEgAEGAAmpBOBDQARogAEG4AmpBATYCACAAQcACakE4ENABGiAAQfgCakEBNgIAC1sBA38jAEGAAWsiASQAIAAQqQEgASAAEJABIAFBQGsiAiAAQUBrIgMQkAEgARBMIAIQTCABIAIQdyABQQAQMyAAIAEQSiABEEMgARBCIAMgARBKIAFBgAFqJAALYQEBfyMAQYACayIDJAAgABA9IAAgARCZASAAQYABaiIBIAIQmQEgAEGAAmoQtwEgABCpASADIAAQOCADQYABaiICIAEQXiACEC0gAiADEHpFBEAgABCbAQsgA0GAAmokAAtUAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqIAJBCGoQDCACQSBqJAALZwAjAEEwayIBJABBpLvAAC0AAARAIAFBHGpBATYCACABQgI3AgwgAUGQtsAANgIIIAFBATYCJCABIAA2AiwgASABQSBqNgIYIAEgAUEsajYCICABQQhqQbi2wAAQZgALIAFBMGokAAtiAgF+An8gACkDACEBA34gACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkEoRgR+IAAgACkDMCABfCIBNwMwIAFCJIcFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLGgt8AQV/IwBBQGoiAyQAIANBCGoiAkHAssAAEEkgAiAAKAI4QQFrEDUiBBAoA0AgAUE4RwRAIAAgAWoiBSABIAJqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAEEBIARBAWp0IgI2AjggAkH///8PSgRAIAAQHgsgA0FAayQAC3sBAn8gAEEoaiECA0AgAUGAAkYEQCAAQufMp9DW0Ouzu383AgggAEIANwIAIABBIGpCq7OP/JGjs/DbADcCACAAQRhqQv+kuYjFkdqCm383AgAgAEEQakLy5rvjo6f9p6V/NwIABSABIAJqQQA2AgAgAUEEaiEBDAELCwtUACAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQARogAEH4AGpBATYCACAAQYABakE4ENABGiAAQbgBakEBNgIAIABBwAFqQTgQ0AEaIABB+AFqQQE2AgALWAECfyMAQUBqIgEkAAJAIAAQhgENACABQQEQOSAAQYABaiICIAEQWA0AIAJBABAzIAAgAhBKIAAQHiAAQUBrIgAgAhBKIAAQHiACIAEQrgELIAFBQGskAAtZAQJ/IwBBgAFrIgEkAAJAIAAQigENACABEFEgAEGAAmoiAiABEHoNACACED4gACACEBEgABC1ASAAQYABaiIAIAIQESAAELUBIAIgARCZAQsgAUGAAWokAAtbAgF+An8gACkDACEBA0AgACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkHgAEYEQCAAIAApA2ggAXw3A2gFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLC08BAX8gAEE4ENABGgJAA0AgAkEHRwRAIAJBB0YNAiAAIAEpAwA3AwAgAEEIaiEAIAFBCGohASACQQFqIQIMAQsLDwtBB0EHQeSawAAQOwALVAECfyMAQbABayICJAAgATQCOCAANAI4fkL///8PVQRAIAAQHgsgAkEIaiIDIAAgARAFIAJB+ABqIgEgAxBrIAAgARBqIABBAjYCOCACQbABaiQAC1EBAn8jAEFAaiIDJAAgAEE4ENABIgBBATYCOCAAQUBrQTgQ0AEgAEH4AGpBATYCACADIAEQjgEgACADEK4BIAMgAhCOASADEK4BIANBQGskAAvwDAIRfwh+IwBBsAFrIg8kACAANAI4IhIgEn5C////D1YEQCAAEB4LIwBB0AFrIgEkACAPQQhqIgZBCGpB0AAQ0AEaIAFBwAFqIAApAwAiFyAXQj+HIhYgFyAWEC8gBiABKQPAASISQv//////////A4M3AwAgAUHIAWopAwAiFUIGhiASQjqIhCETIBVCOoghGCAAQQhqIgwhDSAAIQlBASEKQQEhBwJAA0AgCkEERgRAIABBGGohCiAAQRBqIQkgAEEoaiEMIAApAzAhF0EHIQUgAUHIAGohCwNAIAVBC0kEQCABQUBrIAVBA3QiCCAAakEwaykDACISIBJCP4cgFyAXQj+HIhYQLyAFQQFqIg1BAXYhByALKQMAIRUgASkDQCESIAkhAiAMIQQgBUEFayIOIQMDQCADIAdJBEAgASACKQMAIhQgFEI/hyAEKQMAIhQgFEI/hxAvIAEpAwAiFCASfCISIBRUrSABQQhqKQMAIBV8fCEVIAJBCGohAiAEQQhrIQQgA0EBaiEDDAELCyAGIAhqIBJCAYYiFCATfCITQv//////////A4M3AwAgAUEwaiAAIA5BA3RqKQMAIhkgGUI/hyAXIBYQLyATIBRUrSAVQgGGIBJCP4iEIBh8fCEYIAVBBGshAyAFQQJqIgVBAXYhCCABQThqKQMAIRUgASkDMCESIAohAiAMIQQDQCADIAhPBEAgAUEgaiAAIAdBA3RqKQMAIhYgFkI/hyIUIBYgFBAvIAYgDUEDdGogEkIBhiIUIBhCBoYgE0I6iIR8IhMgASkDIHwiFkL//////////wODNwMAIBMgFlatIAFBKGopAwAgEyAUVK0gFUIBhiASQj+IhCAYQjqHfHx8fCISQjqHIRggEkIGhiAWQjqIhCETIApBEGohCiAJQRBqIQkMAwUgAUEQaiACKQMAIhYgFkI/hyAEKQMAIhYgFkI/hxAvIAEpAxAiFiASfCISIBZUrSABQRhqKQMAIBV8fCEVIAJBCGohAiAEQQhrIQQgA0EBaiEDDAELAAsACwsgAUHQAGogFyAXQj+HIhIgACkDKCIVIBVCP4cQLyAGIBMgASkDUCIWQgGGIhR8IhVC//////////8DgzcDWCABQeAAaiAXIBIgFyASEC8gBiAUIBVWrSABQdgAaikDAEIBhiAWQj+IhCAYfHwiF0IGhiAVQjqIhCIVIAEpA2B8IhJC//////////8DgzcDYCAGIBIgFVStIAFB6ABqKQMAIBdCOod8fEIGhiASQjqIhDcDaCABQdABaiQADAILIAFBsAFqIAAgB0EDdCIOaikDACISIBJCP4cgFyAWEC8gB0EBaiIQQQF2IREgAUG4AWopAwAhFSABKQOwASESIAUhAyAMIQQgCSELIAghAgNAIANFBEAgBiAOaiASQgGGIhQgE3wiE0L//////////wODNwMAIAFBkAFqIAAgEEEDdCIOaikDACIZIBlCP4cgFyAWEC8gEyAUVK0gFUIBhiASQj+IhCAYfHwiEkI6hyEYIBJCBoYgE0I6iIQhFCAHQQJqIQsgAUGYAWopAwAhFUEAIQMgASkDkAEhEiAMIQIgDSEEA0AgAyAFakUEQCABQfAAaiAAIBFBA3RqKQMAIhMgE0I/hyIZIBMgGRAvIAYgDmogEkIBhiIZIBR8IhMgASkDcHwiFEL//////////wODNwMAIBMgFFatIAFB+ABqKQMAIBMgGVStIBVCAYYgEkI/iIQgGHx8fHwiEkI6hyEYIBJCBoYgFEI6iIQhEyANQRBqIQ0gBUEBaiEFIAlBEGohCSAIQQJqIQggCkEBaiEKIAshBwwECyADIAdqIhBBB0kEQCABQYABaiACKQMAIhMgE0I/hyAEKQMAIhMgE0I/hxAvIAEpA4ABIhMgEnwiEiATVK0gAUGIAWopAwAgFXx8IRUgAkEIaiECIARBCGshBCADQQFrIQMMAQsLIBBBB0GEnMAAEDsACyACQQdJBEAgAUGgAWogBCkDACIUIBRCP4cgCykDACIUIBRCP4cQLyABKQOgASIUIBJ8IhIgFFStIAFBqAFqKQMAIBV8fCEVIANBAWshAyAEQQhqIQQgC0EIayELIAJBAWshAgwBCwsLIAJBB0H0m8AAEDsACyAPQfgAaiICIAYQayAAIAIQaiAAQQI2AjggD0GwAWokAAtHAQJ/IwBB8ABrIgEkACAAEHZFBEAgAUHAssAAEEkgAUE4aiICIAAQhAEgASACEGEgARBCIAIgARAxIQILIAFB8ABqJAAgAgtPAQJ/IAIgACgCACIDQQRqKAIAIANBCGoiBCgCACIAa0sEQCADIAAgAhAiIAQoAgAhAAsgAygCACAAaiABIAIQ0QEaIAQgACACajYCAEEAC0wBA38jAEGAAWsiAiQAIAAgARCQASAAEEwgAkHIAGoiA0GAgMAAEEkgAkEIaiIEIAMQjgEgACABEEogACAEEHcgABAeIAJBgAFqJAALQQECfyMAQUBqIgIkACACQQhqIgNBkK3AABBJIAEgAxBqIAEQQiAAIAEQaiAAQQMQKRogABBCIAAQKiACQUBrJAALRwECfyMAQUBqIgEkACAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQASAAQfgAakEBNgIAIAFBARA5IAAgARCuARDBASABQUBrJAALSwACQAJ/IAFBgIDEAEcEQEEBIAAoAhggASAAQRxqKAIAKAIQEQQADQEaCyACDQFBAAsPCyAAKAIYIAJBACAAQRxqKAIAKAIMEQUAC0MCAX8BfiABQTpuIQIgAUGVA00EQCAAIAJBA3RqKQMAQgEgAUH//wNxQTpwrSIDhoMgA4inDwsgAkEHQbSbwAAQOwALRQEDfyMAQeABayIBJAAgAUH4ssAAEEkgAUE4aiICIAAgARAFIAFBqAFqIgMgAhBrIAAgAxBqIABBAjYCOCABQeABaiQAC0ABAX8jAEGAAmsiASQAIAAQiwEgARBsIAAgARCWASAAQYACahCxASAAQYAEahCxASAAQQE2AoAGIAFBgAJqJAALPAICfwF+IwBBgAFrIgEkACABQQhqIgIgABCQASACEB4gAUHIAGogAhCEASABKQNIIAFBgAFqJABCAoGnCzwCAX8BfgN/IAFBOEYEfyACQgF9QoCAgICAgICABINCOoinBSAAIAFqKQMAIAKEIQIgAUEIaiEBDAELCws4AQF/IwBBgAFrIgIkACACIAAQkAEgAkFAayIAIAEQkAEgAhAeIAAQHiACIAAQMSACQYABaiQARQtHAQF/IwBBIGsiAyQAIANBFGpBADYCACADQZS4wAA2AhAgA0IBNwIEIAMgATYCHCADIAA2AhggAyADQRhqNgIAIAMgAhBmAAukAQICfwF+IwBBQGoiAiQAIAIgABCQASACEDogAQRAIAEgAhCuAQsgAhBMIAIgABBKIwBBgAFrIgEkACABQQhqIgAgAhCQASAAEB4gAUHIAGoiAyAAEIQBQQghAAN/IABBOEYEfyAEQgF9IAMpAwBCAYVCAX2DQjqIp0EBcQUgACADaikDACAEhCEEIABBCGohAAwBCwsgAUGAAWokACACQUBrJAALxQMBBn8jAEEgayIGJAAgBiACNgIYIAYgAjYCFCAGIAE2AhAgBkEQaiICKAIIIgEgAigCBEkEQAJAIwBBEGsiBSQAIwBBIGsiBCQAAkACQCABIAIoAgRNBEAgBEEIaiEDAkAgAigCBCIHBEAgAyAHNgIEIANBCGpBATYCACADIAIoAgA2AgAMAQsgA0EANgIACwJAAkAgBCgCCCIIBEAgBEEQaigCACEDIAQoAgwhBwJAAkAgAUUEQEEBIQMMAQsgA0EBRg0DIAFBARC5ASIDRQ0BIAMgCCABENEBGgsgCCAHEKgBDAULDAILIAVBADYCAAwECyAIIAEQrAEiAw0CCyAFIAE2AgQgBUEBNgIAIAVBCGpBATYCAAwCCyAEQRxqQQA2AgAgBEG0nMAANgIYIARCATcCDCAEQdicwAA2AgggBEEIakGsncAAEGYACyACIAE2AgQgAiADNgIAIAVBADYCAAsgBEEgaiQAAkAgBSgCAARAIAVBCGooAgAiAEUNASAFKAIEIAAQzwEACyAFQRBqJAAMAQsQZQALCyAGQQhqIgEgAigCCDYCBCABIAIoAgA2AgAgACAGKQMINwMAIAZBIGokAAtGAQJ/IAEoAgQhAiABKAIAIQNBCEEEELkBIgFFBEBBCEEEEM8BAAsgASACNgIEIAEgAzYCACAAQZS3wAA2AgQgACABNgIACzEBAX8gAEE4ENABIQADQCACQThHBEAgACACaiABIAJqKQMANwMAIAJBCGohAgwBCwsLNgEBfyAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQASAAQfgAakEBNgIAIAAgARCuASABQUBrEK4BCzsBAX8jAEEQayIDJAAgA0EIaiABQYQCIAIQgQEgAygCDCEBIAAgAygCCDYCACAAIAE2AgQgA0EQaiQACwsAIAAgAUE4ENsBCwsAIAAgAUE4ENwBCwwAIAAgAUHwABDbAQsMACAAIAFB8AAQ3AELOQECfyMAQYABayIBJAAgASAAQYABaiICEF4gAiAAEJkBIAEQfCAAIAEQmQEgABCwASABQYABaiQACz8BAX8jAEEgayIAJAAgAEEcakEANgIAIABBzLfAADYCGCAAQgE3AgwgAEH8t8AANgIIIABBCGpBhLjAABBmAAu8AgEDfyMAQSBrIgIkACACQQE6ABggAiABNgIUIAIgADYCECACQZS4wAA2AgwgAkGUuMAANgIIIwBBEGsiACQAIAJBCGoiASgCDCICRQRAQcC1wABBK0HktsAAEFkACyABKAIIIgRFBEBBwLXAAEErQfS2wAAQWQALIAAgAjYCCCAAIAE2AgQgACAENgIAIAAoAgAhASAAKAIEIQIgACgCCCEEIwBBEGsiACQAIAFBFGooAgAhAwJAAn8CQAJAIAFBBGooAgAOAgABAwsgAw0CQQAhAUHAtcAADAELIAMNASABKAIAIgMoAgQhASADKAIACyEDIAAgATYCBCAAIAM2AgAgAEG4t8AAIAIoAgggBCACLQAQECAACyAAQQA2AgQgACABNgIAIABBpLfAACACKAIIIAQgAi0AEBAgAAswACAAQTgQ0AEiAEEBNgI4IABBQGtBARA5IABBgAFqQTgQ0AEaIABBuAFqQQE2AgALKwACQCAAQXxLDQAgAEUEQEEEDwsgACAAQX1JQQJ0ELkBIgBFDQAgAA8LAAs4ACAAEIsBIAAgARCWASAAQYACaiABQYACahCWASAAQYAEaiABQYAEahCWASAAIAEoAoAGNgKABgsoAQF/A0AgAkE4RwRAIAAgAmogASACaikDADcDACACQQhqIQIMAQsLC4QJAg1/Cn4jAEFAaiILJAAgC0EIaiIJQcCywAAQSSMAQZACayICJAAgAEEwENABIQogAkHoAGpB8AAQ0AEaIAJB4AFqQTAQ0AEaIAoQcSACIAEiDCkDACIQQv3/8//P///5AX5C//////////8DgyISNwPYASACQdgAaiASQgAgCSkDACIXIBdCP4ciGBAvIBAgAikDWCIPfCITIA9UrSACQeAAaikDACAQQj+HfHwiEEI6hyABKQMIIg9CP4d8IA8gEEIGhiATQjqIhCITfCIQIBNUrXwhD0EBIQBCACETAkACQANAAkAgAEEHRgRAQQYhB0EAIQhBByEADAELIABBAXYiAUEBaiEGIAggAWshAyABQQN0IgFBCGohBCAHIAFrIQUgAkHIAGogCSAAQQN0Ig1qKQMAIhUgFUI/hyIWIBJCABAvIAJB0ABqKQMAIBAgECATfCIRVq0gDyAUfHx8IBEgAikDSHwiDyARVK18IRAgAEEBaiEBA0AgACAGTQRAIAJB2AFqIA1qIA9C/f/z/8////kBfkL//////////wODIhE3AwAgAkE4aiARQgAgFyAYEC8gAkEoaiARQgAgFSAWEC8gAkHoAGogAEEEdGoiACACQTBqKQMAIhE3AwggACACKQMoIhU3AwAgDyACKQM4IhZ8Ig8gFlStIAJBQGspAwAgEHx8IhBCOocgDCABQQN0aikDACIWQj+HfCAWIBBCBoYgD0I6iIQiD3wiECAPVK18IQ8gEyAVfCITIBVUrSARIBR8fCEUIAdBCGohByAIQQFqIQggASEADAMLIANBB08NAyACQRhqIAQgCWopAwAgBSAJaikDAH0iESARQj+HIAJB2AFqIg4gBWopAwAgBCAOaikDAH0iESARQj+HEC8gAikDGCIRIA98Ig8gEVStIAJBIGopAwAgEHx8IRAgBkEBaiEGIARBCGohBCAFQQhrIQUgA0EBayEDDAALAAsLA0ACQAJAIABBDUcEQCAHIABBAXYiBmshAyAIIAZBA3QiAWshBCABQQhqIQUgDyAUfCAQIBN8Ig8gEFStfCEQIABBAWohAQNAIAZBBUsNAyADQQdPDQIgAkEIaiAFIAlqKQMAIAQgCWpBMGopAwB9IhIgEkI/hyACIARqQYgCaikDACACQdgBaiAFaikDAH0iEiASQj+HEC8gAikDCCISIA98Ig8gElStIAJBEGopAwAgEHx8IRAgBkEBaiEGIARBCGshBCADQQFrIQMgBUEIaiEFDAALAAsgCiAQQv//////////A4M3AzAgAkGQAmokAAwECyADQQdBpJzAABA7AAsgAEEDdCAKakE4ayAPQv//////////A4M3AwAgEEI6hyAMIAFBA3RqKQMAIhJCP4d8IBIgEEIGhiAPQjqIhCIPfCIQIA9UrXwhDyAUIABBBHQgAmpBCGoiAEEIaikDAH0gEyAAKQMAIhJUrX0hFCAIQQhqIQggB0EBaiEHIBMgEn0hEyABIQAMAAsACyADQQdBlJzAABA7AAsgC0FAayQACy4BAX8jAEGAAWsiASQAIAAQRSABEFEgACABEJkBIABBgAFqELYBIAFBgAFqJAALMwAgACABEJYBIABBgAJqIAFBgAJqEJYBIABBgARqIAFBgARqEJYBIAAgASgCgAY2AoAGCygAIAAgASACEHIgAEFAayABQUBrIAIQciAAQYABaiABQYABaiACEHILLQAgACABIAIQjQEgAEGAAWogAUGAAWogAhCNASAAQYACaiABQYACaiACEI0BCycBAn8jAEFAaiICJAAgAkEIaiIDIAEQvgEgACADEI4BIAJBQGskAAsiAQF/A0AgAUE4RwRAIAAgAWpCADcDACABQQhqIQEMAQsLCyUAIAAgASACEDAgAEEAIAJrIAAoAjgiACABKAI4c3EgAHM2AjgLJwAgACAAKAIEQQFxIAFyQQJyNgIEIAAgAWoiACAAKAIEQQFyNgIECyMAA0AgAgRAIAAgAS0AABA8IAJBAWshAiABQQFqIQEMAQsLCywAIAAQiwEgACABEJYBIABBgAJqIAIQlgEgAEGABGogAxCWASAAQQU2AoAGCyMBAX8jAEFAaiIBJAAgASAAEJABIAEQHiABEFcgAUFAayQACykAIAAgARBgIAAgACgCOCABKAI4aiIBNgI4IAFB////D0oEQCAAEB4LCyUAIAAgARCuASAAQUBrIAFBQGsQrgEgAEGAAWogAUGAAWoQrgELKAEBfyMAQYACayICJAAgAiABEIwBIAIQKyAAIAIQlwEgAkGAAmokAAscAQF/IAAgARBYBH8gAEFAayABQUBrEFgFQQALCycBAX8jAEGAAWsiAiQAIAIg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DCELDQALCyAMpyICQeMASwRAIABBAmsiACAGQQlqaiAMpyICIAJB//8DcUHkAG4iAkHkAGxrQf//A3FBAXRB6LjAAGovAAA7AAALAkAgAkEKTwRAIABBAmsiACAGQQlqaiACQQF0Qei4wABqLwAAOwAADAELIABBAWsiACAGQQlqaiACQTBqOgAACwJ/IAZBCWogAGohCEErQYCAxAAgASgCACIDQQFxIgIbIQQgAkEnIABrIglqIQJBlLjAAEEAIANBBHEbIQUCQAJAIAEoAghFBEBBASEAIAEgBCAFEFINAQwCCwJAAkACQAJAIAIgAUEMaigCACIDSQRAIAEtAABBCHENBEEAIQAgAyACayICIQNBASABLQAgIgcgB0EDRhtBA3FBAWsOAgECAwtBASEAIAEgBCAFEFINBAwFC0EAIQMgAiEADAELIAJBAXYhACACQQFqQQF2IQMLIABBAWohACABQRxqKAIAIQcgASgCBCECIAEoAhghCgJAA0AgAEEBayIARQ0BIAogAiAHKAIQEQQARQ0AC0EBDAQLQQEhACACQYCAxABGDQEgASAEIAUQUg0BIAEoAhggCCAJIAEoAhwoAgwRBQANASABKAIcIQQgASgCGCEBQQAhAAJ/A0AgAyAAIANGDQEaIABBAWohACABIAIgBCgCEBEEAEUNAAsgAEEBawsgA0khAAwBCyABKAIEIQcgAUEwNgIEIAEtACAhCkEBIQAgAUEBOgAgIAEgBCAFEFINAEEAIQAgAyACayICIQMCQAJAAkBBASABLQAgIgQgBEEDRhtBA3FBAWsOAgABAgtBACEDIAIhAAwBCyACQQF2IQAgAkEBakEBdiEDCyAAQQFqIQAgAUEcaigCACECIAEoAgQhBCABKAIYIQUCQANAIABBAWsiAEUNASAFIAQgAigCEBEEAEUNAAtBAQwDC0EBIQAgBEGAgMQARg0AIAEoAhggCCAJIAEoAhwoAgwRBQANACABKAIcIQAgASgCGCEFQQAhAgJAA0AgAiADRg0BIAJBAWohAiAFIAQgACgCEBEEAEUNAAtBASEAIAJBAWsgA0kNAQsgASAKOgAgIAEgBzYCBEEADAILIAAMAQsgASgCGCAIIAkgAUEcaigCACgCDBEFAAsgBkEwaiQACwsAIAAQNiAAELABCysCAX8BfkIBIQIDQCAAIAFq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AAANAEHgs8AAC8EHYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAAAAAABhdHRlbXB0IHRvIGRpdmlkZSB3aXRoIG92ZXJmbG93ALAZEAASAAAADAIAAA0AAACwGRAAEgAAABgCAAAmAAAAsBkQABIAAAAYAgAAIwAAALAZEAASAAAAHgIAABcAAACwGRAAEgAAAB4CAAAUAAAAqqr//////gHu//9UrP//AupBYg9rDyoBw5z9ShTOEwJLd2TXrEtDAu3pxpKm+V8Cox4RoAEAAAADAAAABAAAAAQAAAAEAAAABQAAAAYAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlbWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAoAAOsaEAAVAAAAABsQAA4AAABsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnMgGxAAGAAAAEkBAAAJAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5yc0gbEAAcAAAARgIAAB8AAABIGxAAHAAAAEcCAAAeAAAABwAAAAwAAAAEAAAACAAAAAMAAAAIAAAABAAAAAkAAAAKAAAAEAAAAAQAAAALAAAADAAAAAMAAAAIAAAABAAAAA0AAAAOAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93AAAA6BsQABEAAADMGxAAHAAAAAUCAAAFAAAAEAAAAAAAAAABAAAAEQAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAAkHBAAIAAAAEQcEAASAAAAMDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5yc3JhbmdlIGVuZCBpbmRleCAAAABxHRAAEAAAADAdEAAiAAAAUh0QAB8AAABJAAAABQB7CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS42MS4wIChmZTViMTNkNjggMjAyMi0wNS0xOCkGd2FscnVzBjAuMTkuMAx3YXNtLWJpbmRnZW4SMC4yLjgxICgwNjJhYTVmNzAp";
hi(Yg);
at(
  "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100"
);
const Tt = BigInt(2 ** 32 - 1),
  pe = BigInt(32);
function Ci(t, A = !1) {
  return A
    ? { h: Number(t & Tt), l: Number((t >> pe) & Tt) }
    : { h: Number((t >> pe) & Tt) | 0, l: Number(t & Tt) | 0 };
}
function Hg(t, A = !1) {
  let e = new Uint32Array(t.length),
    g = new Uint32Array(t.length);
  for (let I = 0; I < t.length; I++) {
    const { h: Q, l: h } = Ci(t[I], A);
    [e[I], g[I]] = [Q, h];
  }
  return [e, g];
}
const _g = (t, A) => (BigInt(t >>> 0) << pe) | BigInt(A >>> 0),
  Jg = (t, A, e) => t >>> e,
  qg = (t, A, e) => (t << (32 - e)) | (A >>> e),
  vg = (t, A, e) => (t >>> e) | (A << (32 - e)),
  Kg = (t, A, e) => (t << (32 - e)) | (A >>> e),
  Og = (t, A, e) => (t << (64 - e)) | (A >>> (e - 32)),
  Wg = (t, A, e) => (t >>> (e - 32)) | (A << (64 - e)),
  Pg = (t, A) => A,
  Zg = (t, A) => t,
  jg = (t, A, e) => (t << e) | (A >>> (32 - e)),
  Vg = (t, A, e) => (A << e) | (t >>> (32 - e)),
  Xg = (t, A, e) => (A << (e - 32)) | (t >>> (64 - e)),
  zg = (t, A, e) => (t << (e - 32)) | (A >>> (64 - e));
function $g(t, A, e, g) {
  const I = (A >>> 0) + (g >>> 0);
  return { h: (t + e + ((I / 2 ** 32) | 0)) | 0, l: I | 0 };
}
const AB = (t, A, e) => (t >>> 0) + (A >>> 0) + (e >>> 0),
  tB = (t, A, e, g) => (A + e + g + ((t / 2 ** 32) | 0)) | 0,
  eB = (t, A, e, g) => (t >>> 0) + (A >>> 0) + (e >>> 0) + (g >>> 0),
  rB = (t, A, e, g, I) => (A + e + g + I + ((t / 2 ** 32) | 0)) | 0,
  iB = (t, A, e, g, I) =>
    (t >>> 0) + (A >>> 0) + (e >>> 0) + (g >>> 0) + (I >>> 0),
  nB = (t, A, e, g, I, Q) => (A + e + g + I + Q + ((t / 2 ** 32) | 0)) | 0,
  gB = {
    fromBig: Ci,
    split: Hg,
    toBig: _g,
    shrSH: Jg,
    shrSL: qg,
    rotrSH: vg,
    rotrSL: Kg,
    rotrBH: Og,
    rotrBL: Wg,
    rotr32H: Pg,
    rotr32L: Zg,
    rotlSH: jg,
    rotlSL: Vg,
    rotlBH: Xg,
    rotlBL: zg,
    add: $g,
    add3L: AB,
    add3H: tB,
    add4L: eB,
    add4H: rB,
    add5H: nB,
    add5L: iB,
  };
var oA = gB;
const [BB, IB] = (() =>
    oA.split(
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
      ].map((t) => BigInt(t))
    ))(),
  rt = new Uint32Array(80),
  it = new Uint32Array(80);
class oB extends Lr {
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
      Al: e,
      Bh: g,
      Bl: I,
      Ch: Q,
      Cl: h,
      Dh: o,
      Dl: w,
      Eh: D,
      El: G,
      Fh: M,
      Fl: k,
      Gh: Y,
      Gl: X,
      Hh: V,
      Hl: eA,
    } = this;
    return [A, e, g, I, Q, h, o, w, D, G, M, k, Y, X, V, eA];
  }
  set(A, e, g, I, Q, h, o, w, D, G, M, k, Y, X, V, eA) {
    (this.Ah = A | 0),
      (this.Al = e | 0),
      (this.Bh = g | 0),
      (this.Bl = I | 0),
      (this.Ch = Q | 0),
      (this.Cl = h | 0),
      (this.Dh = o | 0),
      (this.Dl = w | 0),
      (this.Eh = D | 0),
      (this.El = G | 0),
      (this.Fh = M | 0),
      (this.Fl = k | 0),
      (this.Gh = Y | 0),
      (this.Gl = X | 0),
      (this.Hh = V | 0),
      (this.Hl = eA | 0);
  }
  process(A, e) {
    for (let rA = 0; rA < 16; rA++, e += 4)
      (rt[rA] = A.getUint32(e)), (it[rA] = A.getUint32((e += 4)));
    for (let rA = 16; rA < 80; rA++) {
      const xA = rt[rA - 15] | 0,
        O = it[rA - 15] | 0,
        W = oA.rotrSH(xA, O, 1) ^ oA.rotrSH(xA, O, 8) ^ oA.shrSH(xA, O, 7),
        j = oA.rotrSL(xA, O, 1) ^ oA.rotrSL(xA, O, 8) ^ oA.shrSL(xA, O, 7),
        AA = rt[rA - 2] | 0,
        BA = it[rA - 2] | 0,
        T = oA.rotrSH(AA, BA, 19) ^ oA.rotrBH(AA, BA, 61) ^ oA.shrSH(AA, BA, 6),
        hA =
          oA.rotrSL(AA, BA, 19) ^ oA.rotrBL(AA, BA, 61) ^ oA.shrSL(AA, BA, 6),
        EA = oA.add4L(j, hA, it[rA - 7], it[rA - 16]),
        sA = oA.add4H(EA, W, T, rt[rA - 7], rt[rA - 16]);
      (rt[rA] = sA | 0), (it[rA] = EA | 0);
    }
    let {
      Ah: g,
      Al: I,
      Bh: Q,
      Bl: h,
      Ch: o,
      Cl: w,
      Dh: D,
      Dl: G,
      Eh: M,
      El: k,
      Fh: Y,
      Fl: X,
      Gh: V,
      Gl: eA,
      Hh: lA,
      Hl: gA,
    } = this;
    for (let rA = 0; rA < 80; rA++) {
      const xA =
          oA.rotrSH(M, k, 14) ^ oA.rotrSH(M, k, 18) ^ oA.rotrBH(M, k, 41),
        O = oA.rotrSL(M, k, 14) ^ oA.rotrSL(M, k, 18) ^ oA.rotrBL(M, k, 41),
        W = (M & Y) ^ (~M & V),
        j = (k & X) ^ (~k & eA),
        AA = oA.add5L(gA, O, j, IB[rA], it[rA]),
        BA = oA.add5H(AA, lA, xA, W, BB[rA], rt[rA]),
        T = AA | 0,
        hA = oA.rotrSH(g, I, 28) ^ oA.rotrBH(g, I, 34) ^ oA.rotrBH(g, I, 39),
        EA = oA.rotrSL(g, I, 28) ^ oA.rotrBL(g, I, 34) ^ oA.rotrBL(g, I, 39),
        sA = (g & Q) ^ (g & o) ^ (Q & o),
        SA = (I & h) ^ (I & w) ^ (h & w);
      (lA = V | 0),
        (gA = eA | 0),
        (V = Y | 0),
        (eA = X | 0),
        (Y = M | 0),
        (X = k | 0),
        ({ h: M, l: k } = oA.add(D | 0, G | 0, BA | 0, T | 0)),
        (D = o | 0),
        (G = w | 0),
        (o = Q | 0),
        (w = h | 0),
        (Q = g | 0),
        (h = I | 0);
      const wA = oA.add3L(T, EA, SA);
      (g = oA.add3H(wA, BA, hA, sA)), (I = wA | 0);
    }
    ({ h: g, l: I } = oA.add(this.Ah | 0, this.Al | 0, g | 0, I | 0)),
      ({ h: Q, l: h } = oA.add(this.Bh | 0, this.Bl | 0, Q | 0, h | 0)),
      ({ h: o, l: w } = oA.add(this.Ch | 0, this.Cl | 0, o | 0, w | 0)),
      ({ h: D, l: G } = oA.add(this.Dh | 0, this.Dl | 0, D | 0, G | 0)),
      ({ h: M, l: k } = oA.add(this.Eh | 0, this.El | 0, M | 0, k | 0)),
      ({ h: Y, l: X } = oA.add(this.Fh | 0, this.Fl | 0, Y | 0, X | 0)),
      ({ h: V, l: eA } = oA.add(this.Gh | 0, this.Gl | 0, V | 0, eA | 0)),
      ({ h: lA, l: gA } = oA.add(this.Hh | 0, this.Hl | 0, lA | 0, gA | 0)),
      this.set(g, I, Q, h, o, w, D, G, M, k, Y, X, V, eA, lA, gA);
  }
  roundClean() {
    rt.fill(0), it.fill(0);
  }
  destroy() {
    this.buffer.fill(0),
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const fi = Ne(() => new oB());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ BigInt(
  0
);
const sB = BigInt(1),
  EB = BigInt(2);
function Rt(t) {
  return (
    t instanceof Uint8Array ||
    (t != null && typeof t == "object" && t.constructor.name === "Uint8Array")
  );
}
const aB = Array.from({ length: 256 }, (t, A) =>
  A.toString(16).padStart(2, "0")
);
function _e(t) {
  if (!Rt(t)) throw new Error("Uint8Array expected");
  let A = "";
  for (let e = 0; e < t.length; e++) A += aB[t[e]];
  return A;
}
function li(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
const jA = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function sr(t) {
  if (t >= jA._0 && t <= jA._9) return t - jA._0;
  if (t >= jA._A && t <= jA._F) return t - (jA._A - 10);
  if (t >= jA._a && t <= jA._f) return t - (jA._a - 10);
}
function wi(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const A = t.length,
    e = A / 2;
  if (A % 2)
    throw new Error(
      "padded hex string expected, got unpadded hex of length " + A
    );
  const g = new Uint8Array(e);
  for (let I = 0, Q = 0; I < e; I++, Q += 2) {
    const h = sr(t.charCodeAt(Q)),
      o = sr(t.charCodeAt(Q + 1));
    if (h === void 0 || o === void 0) {
      const w = t[Q] + t[Q + 1];
      throw new Error(
        'hex string expected, got non-hex character "' + w + '" at index ' + Q
      );
    }
    g[I] = h * 16 + o;
  }
  return g;
}
function QB(t) {
  return li(_e(t));
}
function _t(t) {
  if (!Rt(t)) throw new Error("Uint8Array expected");
  return li(_e(Uint8Array.from(t).reverse()));
}
function pi(t, A) {
  return wi(t.toString(16).padStart(A * 2, "0"));
}
function ye(t, A) {
  return pi(t, A).reverse();
}
function nt(t, A, e) {
  let g;
  if (typeof A == "string")
    try {
      g = wi(A);
    } catch (Q) {
      throw new Error(`${t} must be valid hex string, got "${A}". Cause: ${Q}`);
    }
  else if (Rt(A)) g = Uint8Array.from(A);
  else throw new Error(`${t} must be hex string or Uint8Array`);
  const I = g.length;
  if (typeof e == "number" && I !== e)
    throw new Error(`${t} expected ${e} bytes, got ${I}`);
  return g;
}
function Er(...t) {
  let A = 0;
  for (let I = 0; I < t.length; I++) {
    const Q = t[I];
    if (!Rt(Q)) throw new Error("Uint8Array expected");
    A += Q.length;
  }
  let e = new Uint8Array(A),
    g = 0;
  for (let I = 0; I < t.length; I++) {
    const Q = t[I];
    e.set(Q, g), (g += Q.length);
  }
  return e;
}
const cB = (t) => (EB << BigInt(t - 1)) - sB,
  uB = {
    bigint: (t) => typeof t == "bigint",
    function: (t) => typeof t == "function",
    boolean: (t) => typeof t == "boolean",
    string: (t) => typeof t == "string",
    stringOrUint8Array: (t) => typeof t == "string" || Rt(t),
    isSafeInteger: (t) => Number.isSafeInteger(t),
    array: (t) => Array.isArray(t),
    field: (t, A) => A.Fp.isValid(t),
    hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen),
  };
function Je(t, A, e = {}) {
  const g = (I, Q, h) => {
    const o = uB[Q];
    if (typeof o != "function")
      throw new Error(`Invalid validator "${Q}", expected function`);
    const w = t[I];
    if (!(h && w === void 0) && !o(w, t))
      throw new Error(
        `Invalid param ${String(I)}=${w} (${typeof w}), expected ${Q}`
      );
  };
  for (const [I, Q] of Object.entries(A)) g(I, Q, !1);
  for (const [I, Q] of Object.entries(e)) g(I, Q, !0);
  return t;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const bA =
    BigInt(0),
  NA = BigInt(1),
  Et = BigInt(2),
  hB = BigInt(3),
  de = BigInt(4),
  ar = BigInt(5),
  Qr = BigInt(8);
BigInt(9);
BigInt(16);
function UA(t, A) {
  const e = t % A;
  return e >= bA ? e : A + e;
}
function CB(t, A, e) {
  if (e <= bA || A < bA) throw new Error("Expected power/modulo > 0");
  if (e === NA) return bA;
  let g = NA;
  for (; A > bA; ) A & NA && (g = (g * t) % e), (t = (t * t) % e), (A >>= NA);
  return g;
}
function WA(t, A, e) {
  let g = t;
  for (; A-- > bA; ) (g *= g), (g %= e);
  return g;
}
function cr(t, A) {
  if (t === bA || A <= bA)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${A}`);
  let e = UA(t, A),
    g = A,
    I = bA,
    Q = NA;
  for (; e !== bA; ) {
    const o = g / e,
      w = g % e,
      D = I - Q * o;
    (g = e), (e = w), (I = Q), (Q = D);
  }
  if (g !== NA) throw new Error("invert: does not exist");
  return UA(I, A);
}
function fB(t) {
  const A = (t - NA) / Et;
  let e, g, I;
  for (e = t - NA, g = 0; e % Et === bA; e /= Et, g++);
  for (I = Et; I < t && CB(I, A, t) !== t - NA; I++);
  if (g === 1) {
    const h = (t + NA) / de;
    return function (w, D) {
      const G = w.pow(D, h);
      if (!w.eql(w.sqr(G), D)) throw new Error("Cannot find square root");
      return G;
    };
  }
  const Q = (e + NA) / Et;
  return function (o, w) {
    if (o.pow(w, A) === o.neg(o.ONE))
      throw new Error("Cannot find square root");
    let D = g,
      G = o.pow(o.mul(o.ONE, I), e),
      M = o.pow(w, Q),
      k = o.pow(w, e);
    for (; !o.eql(k, o.ONE); ) {
      if (o.eql(k, o.ZERO)) return o.ZERO;
      let Y = 1;
      for (let V = o.sqr(k); Y < D && !o.eql(V, o.ONE); Y++) V = o.sqr(V);
      const X = o.pow(G, NA << BigInt(D - Y - 1));
      (G = o.sqr(X)), (M = o.mul(M, X)), (k = o.mul(k, G)), (D = Y);
    }
    return M;
  };
}
function lB(t) {
  if (t % de === hB) {
    const A = (t + NA) / de;
    return function (g, I) {
      const Q = g.pow(I, A);
      if (!g.eql(g.sqr(Q), I)) throw new Error("Cannot find square root");
      return Q;
    };
  }
  if (t % Qr === ar) {
    const A = (t - ar) / Qr;
    return function (g, I) {
      const Q = g.mul(I, Et),
        h = g.pow(Q, A),
        o = g.mul(I, h),
        w = g.mul(g.mul(o, Et), h),
        D = g.mul(o, g.sub(w, g.ONE));
      if (!g.eql(g.sqr(D), I)) throw new Error("Cannot find square root");
      return D;
    };
  }
  return fB(t);
}
const wB = (t, A) => (UA(t, A) & NA) === NA,
  pB = [
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
function yB(t) {
  const A = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger",
    },
    e = pB.reduce((g, I) => ((g[I] = "function"), g), A);
  return Je(t, e);
}
function dB(t, A, e) {
  if (e < bA) throw new Error("Expected power > 0");
  if (e === bA) return t.ONE;
  if (e === NA) return A;
  let g = t.ONE,
    I = A;
  for (; e > bA; ) e & NA && (g = t.mul(g, I)), (I = t.sqr(I)), (e >>= NA);
  return g;
}
function DB(t, A) {
  const e = new Array(A.length),
    g = A.reduce(
      (Q, h, o) => (t.is0(h) ? Q : ((e[o] = Q), t.mul(Q, h))),
      t.ONE
    ),
    I = t.inv(g);
  return (
    A.reduceRight(
      (Q, h, o) => (t.is0(h) ? Q : ((e[o] = t.mul(Q, e[o])), t.mul(Q, h))),
      I
    ),
    e
  );
}
function yi(t, A) {
  const e = A !== void 0 ? A : t.toString(2).length,
    g = Math.ceil(e / 8);
  return { nBitLength: e, nByteLength: g };
}
function SB(t, A, e = !1, g = {}) {
  if (t <= bA) throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: I, nByteLength: Q } = yi(t, A);
  if (Q > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const h = lB(t),
    o = Object.freeze({
      ORDER: t,
      BITS: I,
      BYTES: Q,
      MASK: cB(I),
      ZERO: bA,
      ONE: NA,
      create: (w) => UA(w, t),
      isValid: (w) => {
        if (typeof w != "bigint")
          throw new Error(
            `Invalid field element: expected bigint, got ${typeof w}`
          );
        return bA <= w && w < t;
      },
      is0: (w) => w === bA,
      isOdd: (w) => (w & NA) === NA,
      neg: (w) => UA(-w, t),
      eql: (w, D) => w === D,
      sqr: (w) => UA(w * w, t),
      add: (w, D) => UA(w + D, t),
      sub: (w, D) => UA(w - D, t),
      mul: (w, D) => UA(w * D, t),
      pow: (w, D) => dB(o, w, D),
      div: (w, D) => UA(w * cr(D, t), t),
      sqrN: (w) => w * w,
      addN: (w, D) => w + D,
      subN: (w, D) => w - D,
      mulN: (w, D) => w * D,
      inv: (w) => cr(w, t),
      sqrt: g.sqrt || ((w) => h(o, w)),
      invertBatch: (w) => DB(o, w),
      cmov: (w, D, G) => (G ? D : w),
      toBytes: (w) => (e ? ye(w, Q) : pi(w, Q)),
      fromBytes: (w) => {
        if (w.length !== Q)
          throw new Error(`Fp.fromBytes: expected ${Q}, got ${w.length}`);
        return e ? _t(w) : QB(w);
      },
    });
  return Object.freeze(o);
}
function xB(t, A) {
  if (!t.isOdd) throw new Error("Field doesn't have isOdd");
  const e = t.sqrt(A);
  return t.isOdd(e) ? t.neg(e) : e;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const FB =
    BigInt(0),
  ge = BigInt(1);
function NB(t, A) {
  const e = (I, Q) => {
      const h = Q.negate();
      return I ? h : Q;
    },
    g = (I) => {
      const Q = Math.ceil(A / I) + 1,
        h = 2 ** (I - 1);
      return { windows: Q, windowSize: h };
    };
  return {
    constTimeNegate: e,
    unsafeLadder(I, Q) {
      let h = t.ZERO,
        o = I;
      for (; Q > FB; ) Q & ge && (h = h.add(o)), (o = o.double()), (Q >>= ge);
      return h;
    },
    precomputeWindow(I, Q) {
      const { windows: h, windowSize: o } = g(Q),
        w = [];
      let D = I,
        G = D;
      for (let M = 0; M < h; M++) {
        (G = D), w.push(G);
        for (let k = 1; k < o; k++) (G = G.add(D)), w.push(G);
        D = G.double();
      }
      return w;
    },
    wNAF(I, Q, h) {
      const { windows: o, windowSize: w } = g(I);
      let D = t.ZERO,
        G = t.BASE;
      const M = BigInt(2 ** I - 1),
        k = 2 ** I,
        Y = BigInt(I);
      for (let X = 0; X < o; X++) {
        const V = X * w;
        let eA = Number(h & M);
        (h >>= Y), eA > w && ((eA -= k), (h += ge));
        const lA = V,
          gA = V + Math.abs(eA) - 1,
          rA = X % 2 !== 0,
          xA = eA < 0;
        eA === 0 ? (G = G.add(e(rA, Q[lA]))) : (D = D.add(e(xA, Q[gA])));
      }
      return { p: D, f: G };
    },
    wNAFCached(I, Q, h, o) {
      const w = I._WINDOW_SIZE || 1;
      let D = Q.get(I);
      return (
        D || ((D = this.precomputeWindow(I, w)), w !== 1 && Q.set(I, o(D))),
        this.wNAF(w, D, h)
      );
    },
  };
}
function GB(t) {
  return (
    yB(t.Fp),
    Je(
      t,
      { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
      { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
    ),
    Object.freeze({ ...yi(t.n, t.nBitLength), ...t, p: t.Fp.ORDER })
  );
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const qA =
    BigInt(0),
  YA = BigInt(1),
  Yt = BigInt(2),
  mB = BigInt(8),
  UB = { zip215: !0 };
function RB(t) {
  const A = GB(t);
  return (
    Je(
      t,
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
function qe(t) {
  const A = RB(t),
    {
      Fp: e,
      n: g,
      prehash: I,
      hash: Q,
      randomBytes: h,
      nByteLength: o,
      h: w,
    } = A,
    D = Yt << (BigInt(o * 8) - YA),
    G = e.create,
    M =
      A.uvRatio ||
      ((J, L) => {
        try {
          return { isValid: !0, value: e.sqrt(J * e.inv(L)) };
        } catch {
          return { isValid: !1, value: qA };
        }
      }),
    k = A.adjustScalarBytes || ((J) => J),
    Y =
      A.domain ||
      ((J, L, P) => {
        if (L.length || P)
          throw new Error("Contexts/pre-hash are not supported");
        return J;
      }),
    X = (J) => typeof J == "bigint" && qA < J,
    V = (J, L) => X(J) && X(L) && J < L,
    eA = (J) => J === qA || V(J, D);
  function lA(J, L) {
    if (V(J, L)) return J;
    throw new Error(`Expected valid scalar < ${L}, got ${typeof J} ${J}`);
  }
  function gA(J) {
    return J === qA ? J : lA(J, g);
  }
  const rA = new Map();
  function xA(J) {
    if (!(J instanceof O)) throw new Error("ExtendedPoint expected");
  }
  class O {
    constructor(L, P, H, q) {
      if (((this.ex = L), (this.ey = P), (this.ez = H), (this.et = q), !eA(L)))
        throw new Error("x required");
      if (!eA(P)) throw new Error("y required");
      if (!eA(H)) throw new Error("z required");
      if (!eA(q)) throw new Error("t required");
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(L) {
      if (L instanceof O) throw new Error("extended point not allowed");
      const { x: P, y: H } = L || {};
      if (!eA(P) || !eA(H)) throw new Error("invalid affine point");
      return new O(P, H, YA, G(P * H));
    }
    static normalizeZ(L) {
      const P = e.invertBatch(L.map((H) => H.ez));
      return L.map((H, q) => H.toAffine(P[q])).map(O.fromAffine);
    }
    _setWindowSize(L) {
      (this._WINDOW_SIZE = L), rA.delete(this);
    }
    assertValidity() {
      const { a: L, d: P } = A;
      if (this.is0()) throw new Error("bad point: ZERO");
      const { ex: H, ey: q, ez: nA, et: C } = this,
        QA = G(H * H),
        IA = G(q * q),
        CA = G(nA * nA),
        _ = G(CA * CA),
        v = G(QA * L),
        u = G(CA * G(v + IA)),
        f = G(_ + G(P * G(QA * IA)));
      if (u !== f) throw new Error("bad point: equation left != right (1)");
      const y = G(H * q),
        F = G(nA * C);
      if (y !== F) throw new Error("bad point: equation left != right (2)");
    }
    equals(L) {
      xA(L);
      const { ex: P, ey: H, ez: q } = this,
        { ex: nA, ey: C, ez: QA } = L,
        IA = G(P * QA),
        CA = G(nA * q),
        _ = G(H * QA),
        v = G(C * q);
      return IA === CA && _ === v;
    }
    is0() {
      return this.equals(O.ZERO);
    }
    negate() {
      return new O(G(-this.ex), this.ey, this.ez, G(-this.et));
    }
    double() {
      const { a: L } = A,
        { ex: P, ey: H, ez: q } = this,
        nA = G(P * P),
        C = G(H * H),
        QA = G(Yt * G(q * q)),
        IA = G(L * nA),
        CA = P + H,
        _ = G(G(CA * CA) - nA - C),
        v = IA + C,
        u = v - QA,
        f = IA - C,
        y = G(_ * u),
        F = G(v * f),
        x = G(_ * f),
        N = G(u * v);
      return new O(y, F, N, x);
    }
    add(L) {
      xA(L);
      const { a: P, d: H } = A,
        { ex: q, ey: nA, ez: C, et: QA } = this,
        { ex: IA, ey: CA, ez: _, et: v } = L;
      if (P === BigInt(-1)) {
        const m = G((nA - q) * (CA + IA)),
          b = G((nA + q) * (CA - IA)),
          K = G(b - m);
        if (K === qA) return this.double();
        const Z = G(C * Yt * v),
          tA = G(QA * Yt * _),
          E = tA + Z,
          n = b + m,
          B = tA - Z,
          l = G(E * K),
          S = G(n * B),
          R = G(E * B),
          U = G(K * n);
        return new O(l, S, U, R);
      }
      const u = G(q * IA),
        f = G(nA * CA),
        y = G(QA * H * v),
        F = G(C * _),
        x = G((q + nA) * (IA + CA) - u - f),
        N = F - y,
        s = F + y,
        r = G(f - P * u),
        i = G(x * N),
        a = G(s * r),
        c = G(x * r),
        p = G(N * s);
      return new O(i, a, p, c);
    }
    subtract(L) {
      return this.add(L.negate());
    }
    wNAF(L) {
      return AA.wNAFCached(this, rA, L, O.normalizeZ);
    }
    multiply(L) {
      const { p: P, f: H } = this.wNAF(lA(L, g));
      return O.normalizeZ([P, H])[0];
    }
    multiplyUnsafe(L) {
      let P = gA(L);
      return P === qA
        ? j
        : this.equals(j) || P === YA
        ? this
        : this.equals(W)
        ? this.wNAF(P).p
        : AA.unsafeLadder(this, P);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(w).is0();
    }
    isTorsionFree() {
      return AA.unsafeLadder(this, g).is0();
    }
    toAffine(L) {
      const { ex: P, ey: H, ez: q } = this,
        nA = this.is0();
      L == null && (L = nA ? mB : e.inv(q));
      const C = G(P * L),
        QA = G(H * L),
        IA = G(q * L);
      if (nA) return { x: qA, y: YA };
      if (IA !== YA) throw new Error("invZ was invalid");
      return { x: C, y: QA };
    }
    clearCofactor() {
      const { h: L } = A;
      return L === YA ? this : this.multiplyUnsafe(L);
    }
    static fromHex(L, P = !1) {
      const { d: H, a: q } = A,
        nA = e.BYTES;
      L = nt("pointHex", L, nA);
      const C = L.slice(),
        QA = L[nA - 1];
      C[nA - 1] = QA & -129;
      const IA = _t(C);
      IA === qA || (P ? lA(IA, D) : lA(IA, e.ORDER));
      const CA = G(IA * IA),
        _ = G(CA - YA),
        v = G(H * CA - q);
      let { isValid: u, value: f } = M(_, v);
      if (!u) throw new Error("Point.fromHex: invalid y coordinate");
      const y = (f & YA) === YA,
        F = (QA & 128) !== 0;
      if (!P && f === qA && F) throw new Error("Point.fromHex: x=0 and x_0=1");
      return F !== y && (f = G(-f)), O.fromAffine({ x: f, y: IA });
    }
    static fromPrivateKey(L) {
      return hA(L).point;
    }
    toRawBytes() {
      const { x: L, y: P } = this.toAffine(),
        H = ye(P, e.BYTES);
      return (H[H.length - 1] |= L & YA ? 128 : 0), H;
    }
    toHex() {
      return _e(this.toRawBytes());
    }
  }
  (O.BASE = new O(A.Gx, A.Gy, YA, G(A.Gx * A.Gy))),
    (O.ZERO = new O(qA, YA, YA, qA));
  const { BASE: W, ZERO: j } = O,
    AA = NB(O, o * 8);
  function BA(J) {
    return UA(J, g);
  }
  function T(J) {
    return BA(_t(J));
  }
  function hA(J) {
    const L = o;
    J = nt("private key", J, L);
    const P = nt("hashed private key", Q(J), 2 * L),
      H = k(P.slice(0, L)),
      q = P.slice(L, 2 * L),
      nA = T(H),
      C = W.multiply(nA),
      QA = C.toRawBytes();
    return { head: H, prefix: q, scalar: nA, point: C, pointBytes: QA };
  }
  function EA(J) {
    return hA(J).pointBytes;
  }
  function sA(J = new Uint8Array(), ...L) {
    const P = Er(...L);
    return T(Q(Y(P, nt("context", J), !!I)));
  }
  function SA(J, L, P = {}) {
    (J = nt("message", J)), I && (J = I(J));
    const { prefix: H, scalar: q, pointBytes: nA } = hA(L),
      C = sA(P.context, H, J),
      QA = W.multiply(C).toRawBytes(),
      IA = sA(P.context, QA, nA, J),
      CA = BA(C + IA * q);
    gA(CA);
    const _ = Er(QA, ye(CA, e.BYTES));
    return nt("result", _, o * 2);
  }
  const wA = UB;
  function LA(J, L, P, H = wA) {
    const { context: q, zip215: nA } = H,
      C = e.BYTES;
    (J = nt("signature", J, 2 * C)), (L = nt("message", L)), I && (L = I(L));
    const QA = _t(J.slice(C, 2 * C));
    let IA, CA, _;
    try {
      (IA = O.fromHex(P, nA)),
        (CA = O.fromHex(J.slice(0, C), nA)),
        (_ = W.multiplyUnsafe(QA));
    } catch {
      return !1;
    }
    if (!nA && IA.isSmallOrder()) return !1;
    const v = sA(q, CA.toRawBytes(), IA.toRawBytes(), L);
    return CA.add(IA.multiplyUnsafe(v))
      .subtract(_)
      .clearCofactor()
      .equals(O.ZERO);
  }
  return (
    W._setWindowSize(8),
    {
      CURVE: A,
      getPublicKey: EA,
      sign: SA,
      verify: LA,
      ExtendedPoint: O,
      utils: {
        getExtendedPublicKey: hA,
        randomPrivateKey: () => h(e.BYTES),
        precompute(J = 8, L = O.BASE) {
          return L._setWindowSize(J), L.multiply(BigInt(3)), L;
        },
      },
    }
  );
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const ve =
    BigInt(
      "57896044618658097711785492504343953926634992332820282019728792003956564819949"
    ),
  ur = BigInt(
    "19681161376707505956807079304988542015446066515923890162744021073123829784752"
  );
BigInt(0);
const MB = BigInt(1),
  De = BigInt(2),
  bB = BigInt(5),
  hr = BigInt(10),
  kB = BigInt(20),
  LB = BigInt(40),
  Cr = BigInt(80);
function TB(t) {
  const A = ve,
    g = (((t * t) % A) * t) % A,
    I = (WA(g, De, A) * g) % A,
    Q = (WA(I, MB, A) * t) % A,
    h = (WA(Q, bB, A) * Q) % A,
    o = (WA(h, hr, A) * h) % A,
    w = (WA(o, kB, A) * o) % A,
    D = (WA(w, LB, A) * w) % A,
    G = (WA(D, Cr, A) * D) % A,
    M = (WA(G, Cr, A) * D) % A,
    k = (WA(M, hr, A) * h) % A;
  return { pow_p_5_8: (WA(k, De, A) * t) % A, b2: g };
}
function YB(t) {
  return (t[0] &= 248), (t[31] &= 127), (t[31] |= 64), t;
}
function HB(t, A) {
  const e = ve,
    g = UA(A * A * A, e),
    I = UA(g * g * A, e),
    Q = TB(t * I).pow_p_5_8;
  let h = UA(t * g * Q, e);
  const o = UA(A * h * h, e),
    w = h,
    D = UA(h * ur, e),
    G = o === t,
    M = o === UA(-t, e),
    k = o === UA(-t * ur, e);
  return (
    G && (h = w),
    (M || k) && (h = D),
    wB(h, e) && (h = UA(-h, e)),
    { isValid: G || M, value: h }
  );
}
const $A = SB(ve, void 0, !0),
  Ke = {
    a: BigInt(-1),
    d: BigInt(
      "37095705934669439343138083508754565189542113879843219016388785533085940283555"
    ),
    Fp: $A,
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
    hash: fi,
    randomBytes: ln,
    adjustScalarBytes: YB,
    uvRatio: HB,
  },
  Dt = qe(Ke);
function di(t, A, e) {
  if (A.length > 255) throw new Error("Context is too big");
  return Cn(
    br("SigEd25519 no Ed25519 collisions"),
    new Uint8Array([e ? 1 : 0, A.length]),
    A,
    t
  );
}
({ ...Ke });
({ ...Ke });
const _B = ($A.ORDER + BigInt(3)) / BigInt(8);
$A.pow(De, _B);
$A.sqrt($A.neg($A.ONE));
($A.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
xB($A, $A.neg(BigInt(486664)));
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
const fr = (t) => {
    if (t <= 127) return 1;
    if (t <= 255) return 2;
    if (t <= 65535) return 3;
    if (t <= 16777215) return 4;
    throw new Error("Length too long (> 4 bytes)");
  },
  lr = (t, A, e) => {
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
  Se = (t, A) => {
    if (t[A] < 128) return 1;
    if (t[A] === 128) throw new Error("Invalid length 0");
    if (t[A] === 129) return 2;
    if (t[A] === 130) return 3;
    if (t[A] === 131) return 4;
    throw new Error("Length too long (> 4 bytes)");
  },
  JB = (t, A) => {
    const e = Se(t, A);
    if (e === 1) return t[A];
    if (e === 2) return t[A + 1];
    if (e === 3) return (t[A + 1] << 8) + t[A + 2];
    if (e === 4) return (t[A + 1] << 16) + (t[A + 2] << 8) + t[A + 3];
    throw new Error("Length too long (> 4 bytes)");
  };
Uint8Array.from([48, 12, 6, 10, 43, 6, 1, 4, 1, 131, 184, 67, 1, 1]);
const wr = Uint8Array.from([48, 5, 6, 3, 43, 101, 112]);
Uint8Array.from([
  48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 10,
]);
function qB(t, A) {
  const e = 2 + fr(t.byteLength + 1),
    g = A.byteLength + e + t.byteLength;
  let I = 0;
  const Q = new Uint8Array(1 + fr(g) + g);
  return (
    (Q[I++] = 48),
    (I += lr(Q, I, g)),
    Q.set(A, I),
    (I += A.byteLength),
    (Q[I++] = 3),
    (I += lr(Q, I, t.byteLength + 1)),
    (Q[I++] = 0),
    Q.set(new Uint8Array(t), I),
    Q
  );
}
const vB = (t, A) => {
  let e = 0;
  const g = (o, w) => {
      if (I[e++] !== o) throw new Error("Expected: " + w);
    },
    I = new Uint8Array(t);
  if (
    (g(48, "sequence"), (e += Se(I, e)), !Cg(I.slice(e, e + A.byteLength), A))
  )
    throw new Error("Not the expected OID.");
  (e += A.byteLength), g(3, "bit string");
  const Q = JB(I, e) - 1;
  (e += Se(I, e)), g(0, "0 padding");
  const h = I.slice(e);
  if (Q !== h.length)
    throw new Error(
      `DER payload mismatch: Expected length ${Q} actual length ${h.length}`
    );
  return h;
};
var pr;
(function (t) {
  (t.Received = "received"),
    (t.Processing = "processing"),
    (t.Replied = "replied"),
    (t.Rejected = "rejected"),
    (t.Unknown = "unknown"),
    (t.Done = "done");
})(pr || (pr = {}));
var yr;
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
})(yr || (yr = {}));
var dr;
(function (t) {
  (t.Install = "install"), (t.Reinstall = "reinstall"), (t.Upgrade = "upgrade");
})(dr || (dr = {}));
var Wt = function (t, A, e, g, I) {
    if (g === "m") throw new TypeError("Private method is not writable");
    if (g === "a" && !I)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof A == "function" ? t !== A || !I : !A.has(t))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it"
      );
    return g === "a" ? I.call(t, e) : I ? (I.value = e) : A.set(t, e), e;
  },
  gt = function (t, A, e, g) {
    if (e === "a" && !g)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof A == "function" ? t !== A || !g : !A.has(t))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it"
      );
    return e === "m" ? g : e === "a" ? g.call(t) : g ? g.value : A.get(t);
  },
  Jt,
  qt,
  Ct,
  ft;
class XA {
  constructor(A) {
    if (
      (Jt.set(this, void 0),
      qt.set(this, void 0),
      A.byteLength !== XA.RAW_KEY_LENGTH)
    )
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    Wt(this, Jt, A, "f"), Wt(this, qt, XA.derEncode(A), "f");
  }
  static from(A) {
    return this.fromDer(A.toDer());
  }
  static fromRaw(A) {
    return new XA(A);
  }
  static fromDer(A) {
    return new XA(this.derDecode(A));
  }
  static derEncode(A) {
    return qB(A, wr).buffer;
  }
  static derDecode(A) {
    const e = vB(A, wr);
    if (e.length !== this.RAW_KEY_LENGTH)
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    return e;
  }
  get rawKey() {
    return gt(this, Jt, "f");
  }
  get derKey() {
    return gt(this, qt, "f");
  }
  toDer() {
    return this.derKey;
  }
  toRaw() {
    return this.rawKey;
  }
}
(Jt = new WeakMap()), (qt = new WeakMap());
XA.RAW_KEY_LENGTH = 32;
class It extends Le {
  constructor(A, e) {
    super(),
      Ct.set(this, void 0),
      ft.set(this, void 0),
      Wt(this, Ct, XA.from(A), "f"),
      Wt(this, ft, new Uint8Array(e), "f");
  }
  static generate(A = new Uint8Array(32)) {
    if (A && A.length !== 32)
      throw new Error("Ed25519 Seed needs to be 32 bytes long.");
    A || (A = Dt.utils.randomPrivateKey());
    const e = new Uint8Array(32);
    for (let I = 0; I < 32; I++) e[I] = new Uint8Array(A)[I];
    const g = Dt.getPublicKey(e);
    return It.fromKeyPair(g, e);
  }
  static fromParsedJson(A) {
    const [e, g] = A;
    return new It(XA.fromDer(at(e)), at(g));
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
    return new It(XA.fromRaw(A), e);
  }
  static fromSecretKey(A) {
    const e = Dt.getPublicKey(new Uint8Array(A));
    return It.fromKeyPair(e, A);
  }
  toJSON() {
    return [lt(gt(this, Ct, "f").toDer()), lt(gt(this, ft, "f"))];
  }
  getKeyPair() {
    return { secretKey: gt(this, ft, "f"), publicKey: gt(this, Ct, "f") };
  }
  getPublicKey() {
    return gt(this, Ct, "f");
  }
  async sign(A) {
    const e = new Uint8Array(A),
      g = $r(Dt.sign(e, gt(this, ft, "f").slice(0, 32)));
    return (
      Object.defineProperty(g, "__signature__", {
        enumerable: !1,
        value: void 0,
      }),
      g
    );
  }
  static verify(A, e, g) {
    const [I, Q, h] = [A, e, g].map(
      (o) => (
        typeof o == "string" && (o = at(o)),
        o instanceof Uint8Array && (o = o.buffer),
        new Uint8Array(o)
      )
    );
    return Dt.verify(Q, I, h);
  }
}
(Ct = new WeakMap()), (ft = new WeakMap());
class Oe extends Error {
  constructor(A) {
    super(A), (this.message = A), Object.setPrototypeOf(this, Oe.prototype);
  }
}
function Dr(t) {
  if (typeof global < "u" && global.crypto && global.crypto.subtle)
    return global.crypto.subtle;
  if (t) return t;
  if (typeof crypto < "u" && crypto.subtle) return crypto.subtle;
  throw new Oe(
    "Global crypto was not available and none was provided. Please inlcude a SubtleCrypto implementation. See https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto"
  );
}
class Pt extends Le {
  constructor(A, e, g) {
    super(), (this._keyPair = A), (this._derKey = e), (this._subtleCrypto = g);
  }
  static async generate(A) {
    const {
        extractable: e = !1,
        keyUsages: g = ["sign", "verify"],
        subtleCrypto: I,
      } = A ?? {},
      Q = Dr(I),
      h = await Q.generateKey({ name: "ECDSA", namedCurve: "P-256" }, e, g),
      o = await Q.exportKey("spki", h.publicKey);
    return new this(h, o, Q);
  }
  static async fromKeyPair(A, e) {
    const g = Dr(e),
      I = await g.exportKey("spki", A.publicKey);
    return new Pt(A, I, g);
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
var KB = function (t, A) {
  var e = {};
  for (var g in t)
    Object.prototype.hasOwnProperty.call(t, g) &&
      A.indexOf(g) < 0 &&
      (e[g] = t[g]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var I = 0, g = Object.getOwnPropertySymbols(t); I < g.length; I++)
      A.indexOf(g[I]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, g[I]) &&
        (e[g[I]] = t[g[I]]);
  return e;
};
const OB = new TextEncoder().encode("ic-request-auth-delegation"),
  WB = new TextEncoder().encode(`
ic-request`);
function Be(t) {
  if (typeof t != "string" || t.length < 64)
    throw new Error("Invalid public key.");
  return at(t);
}
class We {
  constructor(A, e, g) {
    (this.pubkey = A), (this.expiration = e), (this.targets = g);
  }
  toCBOR() {
    return HA.value.map(
      Object.assign(
        {
          pubkey: HA.value.bytes(this.pubkey),
          expiration: HA.value.u64(this.expiration.toString(16), 16),
        },
        this.targets && {
          targets: HA.value.array(
            this.targets.map((A) => HA.value.bytes(A.toUint8Array()))
          ),
        }
      )
    );
  }
  toJSON() {
    return Object.assign(
      { expiration: this.expiration.toString(16), pubkey: lt(this.pubkey) },
      this.targets && { targets: this.targets.map((A) => A.toHex()) }
    );
  }
}
async function PB(t, A, e, g) {
  const I = new We(A.toDer(), BigInt(+e) * BigInt(1e6), g),
    Q = new Uint8Array([...OB, ...new Uint8Array(ke(I))]),
    h = await t.sign(Q);
  return { delegation: I, signature: h };
}
class xt {
  constructor(A, e) {
    (this.delegations = A), (this.publicKey = e);
  }
  static async create(A, e, g = new Date(Date.now() + 15 * 60 * 1e3), I = {}) {
    var Q, h;
    const o = await PB(A, e, g, I.targets);
    return new xt(
      [
        ...(((Q = I.previous) === null || Q === void 0
          ? void 0
          : Q.delegations) || []),
        o,
      ],
      ((h = I.previous) === null || h === void 0 ? void 0 : h.publicKey) ||
        A.getPublicKey().toDer()
    );
  }
  static fromJSON(A) {
    const { publicKey: e, delegations: g } =
      typeof A == "string" ? JSON.parse(A) : A;
    if (!Array.isArray(g)) throw new Error("Invalid delegations.");
    const I = g.map((Q) => {
      const { delegation: h, signature: o } = Q,
        { pubkey: w, expiration: D, targets: G } = h;
      if (G !== void 0 && !Array.isArray(G))
        throw new Error("Invalid targets.");
      return {
        delegation: new We(
          Be(w),
          BigInt("0x" + D),
          G &&
            G.map((M) => {
              if (typeof M != "string") throw new Error("Invalid target.");
              return zA.fromHex(M);
            })
        ),
        signature: Be(o),
      };
    });
    return new this(I, Be(e));
  }
  static fromDelegations(A, e) {
    return new this(A, e);
  }
  toJSON() {
    return {
      delegations: this.delegations.map((A) => {
        const { delegation: e, signature: g } = A,
          { targets: I } = e;
        return {
          delegation: Object.assign(
            { expiration: e.expiration.toString(16), pubkey: lt(e.pubkey) },
            I && { targets: I.map((Q) => Q.toHex()) }
          ),
          signature: lt(g),
        };
      }),
      publicKey: lt(this.publicKey),
    };
  }
}
class Sr extends Le {
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
    return {
      derKey: this._delegation.publicKey,
      toDer: () => this._delegation.publicKey,
    };
  }
  sign(A) {
    return this._inner.sign(A);
  }
  async transformRequest(A) {
    const { body: e } = A,
      g = KB(A, ["body"]),
      I = await ke(e);
    return Object.assign(Object.assign({}, g), {
      body: {
        content: e,
        sender_sig: await this.sign(
          new Uint8Array([...WB, ...new Uint8Array(I)])
        ),
        sender_delegation: this._delegation.delegations,
        sender_pubkey: this._delegation.publicKey,
      },
    });
  }
}
function Di(t, A) {
  for (const { delegation: I } of t.delegations)
    if (+new Date(Number(I.expiration / BigInt(1e6))) <= +Date.now()) return !1;
  const e = [],
    g = A?.scope;
  g &&
    (Array.isArray(g)
      ? e.push(...g.map((I) => (typeof I == "string" ? zA.fromText(I) : I)))
      : e.push(typeof g == "string" ? zA.fromText(g) : g));
  for (const I of e) {
    const Q = I.toText();
    for (const { delegation: h } of t.delegations) {
      if (h.targets === void 0) continue;
      let o = !0;
      for (const w of h.targets)
        if (w.toText() === Q) {
          o = !1;
          break;
        }
      if (o) return !1;
    }
  }
  return !0;
}
var xr;
(function (t) {
  t[(t.ECDSA_WITH_SHA256 = -7)] = "ECDSA_WITH_SHA256";
})(xr || (xr = {}));
const Fr = ["mousedown", "mousemove", "keydown", "touchstart", "wheel"];
class Nr {
  constructor(A = {}) {
    var e;
    (this.callbacks = []),
      (this.idleTimeout = 10 * 60 * 1e3),
      (this.timeoutID = void 0);
    const { onIdle: g, idleTimeout: I = 10 * 60 * 1e3 } = A || {};
    (this.callbacks = g ? [g] : []), (this.idleTimeout = I);
    const Q = this._resetTimer.bind(this);
    window.addEventListener("load", Q, !0),
      Fr.forEach(function (o) {
        document.addEventListener(o, Q, !0);
      });
    const h = (o, w) => {
      let D;
      return (...G) => {
        const M = this,
          k = function () {
            (D = void 0), o.apply(M, G);
          };
        clearTimeout(D), (D = window.setTimeout(k, w));
      };
    };
    if (A?.captureScroll) {
      const o = h(
        Q,
        (e = A?.scrollDebounce) !== null && e !== void 0 ? e : 100
      );
      window.addEventListener("scroll", o, !0);
    }
    Q();
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
    Fr.forEach(function (e) {
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
const ZB = (t, A) => A.some((e) => t instanceof e);
let Gr, mr;
function jB() {
  return (
    Gr ||
    (Gr = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function VB() {
  return (
    mr ||
    (mr = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Si = new WeakMap(),
  xe = new WeakMap(),
  xi = new WeakMap(),
  Ie = new WeakMap(),
  Pe = new WeakMap();
function XB(t) {
  const A = new Promise((e, g) => {
    const I = () => {
        t.removeEventListener("success", Q), t.removeEventListener("error", h);
      },
      Q = () => {
        e(ot(t.result)), I();
      },
      h = () => {
        g(t.error), I();
      };
    t.addEventListener("success", Q), t.addEventListener("error", h);
  });
  return (
    A.then((e) => {
      e instanceof IDBCursor && Si.set(e, t);
    }).catch(() => {}),
    Pe.set(A, t),
    A
  );
}
function zB(t) {
  if (xe.has(t)) return;
  const A = new Promise((e, g) => {
    const I = () => {
        t.removeEventListener("complete", Q),
          t.removeEventListener("error", h),
          t.removeEventListener("abort", h);
      },
      Q = () => {
        e(), I();
      },
      h = () => {
        g(t.error || new DOMException("AbortError", "AbortError")), I();
      };
    t.addEventListener("complete", Q),
      t.addEventListener("error", h),
      t.addEventListener("abort", h);
  });
  xe.set(t, A);
}
let Fe = {
  get(t, A, e) {
    if (t instanceof IDBTransaction) {
      if (A === "done") return xe.get(t);
      if (A === "objectStoreNames") return t.objectStoreNames || xi.get(t);
      if (A === "store")
        return e.objectStoreNames[1]
          ? void 0
          : e.objectStore(e.objectStoreNames[0]);
    }
    return ot(t[A]);
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
function $B(t) {
  Fe = t(Fe);
}
function AI(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (A, ...e) {
        const g = t.call(oe(this), A, ...e);
        return xi.set(g, A.sort ? A.sort() : [A]), ot(g);
      }
    : VB().includes(t)
    ? function (...A) {
        return t.apply(oe(this), A), ot(Si.get(this));
      }
    : function (...A) {
        return ot(t.apply(oe(this), A));
      };
}
function tI(t) {
  return typeof t == "function"
    ? AI(t)
    : (t instanceof IDBTransaction && zB(t),
      ZB(t, jB()) ? new Proxy(t, Fe) : t);
}
function ot(t) {
  if (t instanceof IDBRequest) return XB(t);
  if (Ie.has(t)) return Ie.get(t);
  const A = tI(t);
  return A !== t && (Ie.set(t, A), Pe.set(A, t)), A;
}
const oe = (t) => Pe.get(t);
function eI(t, A, { blocked: e, upgrade: g, blocking: I, terminated: Q } = {}) {
  const h = indexedDB.open(t, A),
    o = ot(h);
  return (
    g &&
      h.addEventListener("upgradeneeded", (w) => {
        g(ot(h.result), w.oldVersion, w.newVersion, ot(h.transaction), w);
      }),
    e && h.addEventListener("blocked", (w) => e(w.oldVersion, w.newVersion, w)),
    o
      .then((w) => {
        Q && w.addEventListener("close", () => Q()),
          I &&
            w.addEventListener("versionchange", (D) =>
              I(D.oldVersion, D.newVersion, D)
            );
      })
      .catch(() => {}),
    o
  );
}
const rI = ["get", "getKey", "getAll", "getAllKeys", "count"],
  iI = ["put", "add", "delete", "clear"],
  se = new Map();
function Ur(t, A) {
  if (!(t instanceof IDBDatabase && !(A in t) && typeof A == "string")) return;
  if (se.get(A)) return se.get(A);
  const e = A.replace(/FromIndex$/, ""),
    g = A !== e,
    I = iI.includes(e);
  if (
    !(e in (g ? IDBIndex : IDBObjectStore).prototype) ||
    !(I || rI.includes(e))
  )
    return;
  const Q = async function (h, ...o) {
    const w = this.transaction(h, I ? "readwrite" : "readonly");
    let D = w.store;
    return (
      g && (D = D.index(o.shift())),
      (await Promise.all([D[e](...o), I && w.done]))[0]
    );
  };
  return se.set(A, Q), Q;
}
$B((t) => ({
  ...t,
  get: (A, e, g) => Ur(A, e) || t.get(A, e, g),
  has: (A, e) => !!Ur(A, e) || t.has(A, e),
}));
const Fi = "auth-client-db",
  Ni = "ic-keyval",
  nI = async (t = Fi, A = Ni, e) => (
    Gi &&
      localStorage != null &&
      localStorage.getItem(VA) &&
      (localStorage.removeItem(VA), localStorage.removeItem(Bt)),
    await eI(t, e, {
      upgrade: (g) => {
        g.objectStoreNames,
          g.objectStoreNames.contains(A) && g.clear(A),
          g.createObjectStore(A);
      },
    })
  );
async function gI(t, A, e) {
  return await t.get(A, e);
}
async function BI(t, A, e, g) {
  return await t.put(A, g, e);
}
async function II(t, A, e) {
  return await t.delete(A, e);
}
class Ze {
  constructor(A, e) {
    (this._db = A), (this._storeName = e);
  }
  static async create(A) {
    const { dbName: e = Fi, storeName: g = Ni, version: I = 1 } = A ?? {},
      Q = await nI(e, g, I);
    return new Ze(Q, g);
  }
  async set(A, e) {
    return await BI(this._db, this._storeName, A, e);
  }
  async get(A) {
    var e;
    return (e = await gI(this._db, this._storeName, A)) !== null && e !== void 0
      ? e
      : null;
  }
  async remove(A) {
    return await II(this._db, this._storeName, A);
  }
}
const Bt = "identity",
  VA = "delegation",
  oI = "iv",
  sI = 1,
  Gi = typeof window < "u";
class EI {
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
class mi {
  get _db() {
    return new Promise((A) => {
      if (this.initializedDb) {
        A(this.initializedDb);
        return;
      }
      Ze.create({ version: sI }).then((e) => {
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
const aI = "https://identity.ic0.app",
  QI = "#authorize",
  Ee = "ECDSA",
  ae = "Ed25519",
  cI = 500,
  uI = "UserInterrupt";
class hI {
  constructor(A, e, g, I, Q, h, o, w) {
    var D;
    (this._identity = A),
      (this._key = e),
      (this._chain = g),
      (this._storage = I),
      (this.idleManager = Q),
      (this._createOptions = h),
      (this._idpWindow = o),
      (this._eventHandler = w);
    const G = this.logout.bind(this),
      M = h?.idleOptions;
    !M?.onIdle &&
      !M?.disableDefaultIdleCallback &&
      ((D = this.idleManager) === null ||
        D === void 0 ||
        D.registerCallback(() => {
          G(), location.reload();
        }));
  }
  static async create(A = {}) {
    var e, g, I;
    const Q = (e = A.storage) !== null && e !== void 0 ? e : new mi(),
      h = (g = A.keyType) !== null && g !== void 0 ? g : Ee;
    let o = null;
    if (A.identity) o = A.identity;
    else {
      let M = await Q.get(Bt);
      if (!M && Gi)
        try {
          const k = new EI(),
            Y = await k.get(VA),
            X = await k.get(Bt);
          Y &&
            X &&
            h === Ee &&
            (console.log(
              "Discovered an identity stored in localstorage. Migrating to IndexedDB"
            ),
            await Q.set(VA, Y),
            await Q.set(Bt, X),
            (M = Y),
            await k.remove(VA),
            await k.remove(Bt));
        } catch (k) {
          console.error("error while attempting to recover localstorage: " + k);
        }
      if (M)
        try {
          typeof M == "object"
            ? h === ae && typeof M == "string"
              ? (o = await It.fromJSON(M))
              : (o = await Pt.fromKeyPair(M))
            : typeof M == "string" && (o = It.fromJSON(M));
        } catch {}
    }
    let w = new Br(),
      D = null;
    if (o)
      try {
        const M = await Q.get(VA);
        if (typeof M == "object" && M !== null)
          throw new Error(
            "Delegation chain is incorrectly stored. A delegation chain should be stored as a string."
          );
        A.identity
          ? (w = A.identity)
          : M &&
            ((D = xt.fromJSON(M)),
            Di(D) ? (w = Sr.fromDelegation(o, D)) : (await Qe(Q), (o = null)));
      } catch (M) {
        console.error(M), await Qe(Q), (o = null);
      }
    let G;
    return (
      !((I = A.idleOptions) === null || I === void 0) && I.disableIdle
        ? (G = void 0)
        : (D || A.identity) && (G = Nr.create(A.idleOptions)),
      o ||
        (h === ae
          ? ((o = await It.generate()),
            await Q.set(Bt, JSON.stringify(o.toJSON())))
          : (A.storage &&
              h === Ee &&
              console.warn(
                `You are using a custom storage provider that may not support CryptoKey storage. If you are using a custom storage provider that does not support CryptoKey storage, you should use '${ae}' as the key type, as it can serialize to a string`
              ),
            (o = await Pt.generate()),
            await Q.set(Bt, o.getKeyPair()))),
      new this(w, o, D, Q, G, A)
    );
  }
  async _handleSuccess(A, e) {
    var g, I, Q;
    const h = A.delegations.map((D) => ({
        delegation: new We(
          D.delegation.pubkey,
          D.delegation.expiration,
          D.delegation.targets
        ),
        signature: D.signature.buffer,
      })),
      o = xt.fromDelegations(h, A.userPublicKey.buffer),
      w = this._key;
    if (w) {
      if (
        ((this._chain = o),
        (this._identity = Sr.fromDelegation(w, this._chain)),
        (g = this._idpWindow) === null || g === void 0 || g.close(),
        !this.idleManager)
      ) {
        const D =
          (I = this._createOptions) === null || I === void 0
            ? void 0
            : I.idleOptions;
        (this.idleManager = Nr.create(D)),
          !D?.onIdle &&
            !D?.disableDefaultIdleCallback &&
            ((Q = this.idleManager) === null ||
              Q === void 0 ||
              Q.registerCallback(() => {
                this.logout(), location.reload();
              }));
      }
      this._removeEventListener(),
        delete this._idpWindow,
        this._chain &&
          (await this._storage.set(VA, JSON.stringify(this._chain.toJSON()))),
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
    var e, g, I, Q;
    const h = BigInt(8) * BigInt(36e11),
      o = new URL(
        ((e = A?.identityProvider) === null || e === void 0
          ? void 0
          : e.toString()) || aI
      );
    (o.hash = QI),
      (g = this._idpWindow) === null || g === void 0 || g.close(),
      this._removeEventListener(),
      (this._eventHandler = this._getEventHandler(
        o,
        Object.assign(
          {
            maxTimeToLive:
              (I = A?.maxTimeToLive) !== null && I !== void 0 ? I : h,
          },
          A
        )
      )),
      window.addEventListener("message", this._eventHandler),
      (this._idpWindow =
        (Q = window.open(
          o.toString(),
          "idpWindow",
          A?.windowOpenerFeatures
        )) !== null && Q !== void 0
          ? Q
          : void 0);
    const w = () => {
      this._idpWindow &&
        (this._idpWindow.closed
          ? this._handleFailure(uI, A?.onError)
          : setTimeout(w, cI));
    };
    w();
  }
  _getEventHandler(A, e) {
    return async (g) => {
      var I, Q, h;
      if (g.origin !== A.origin) {
        console.warn(
          `WARNING: expected origin '${A.origin}', got '${g.origin}' (ignoring)`
        );
        return;
      }
      const o = g.data;
      switch (o.kind) {
        case "authorize-ready": {
          const w = {
            kind: "authorize-client",
            sessionPublicKey: new Uint8Array(
              (I = this._key) === null || I === void 0
                ? void 0
                : I.getPublicKey().toDer()
            ),
            maxTimeToLive: e?.maxTimeToLive,
            derivationOrigin:
              (Q = e?.derivationOrigin) === null || Q === void 0
                ? void 0
                : Q.toString(),
          };
          (h = this._idpWindow) === null ||
            h === void 0 ||
            h.postMessage(w, A.origin);
          break;
        }
        case "authorize-client-success":
          try {
            await this._handleSuccess(o, e?.onSuccess);
          } catch (w) {
            this._handleFailure(w.message, e?.onError);
          }
          break;
        case "authorize-client-failure":
          this._handleFailure(o.text, e?.onError);
          break;
      }
    };
  }
  _handleFailure(A, e) {
    var g;
    (g = this._idpWindow) === null || g === void 0 || g.close(),
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
      (await Qe(this._storage),
      (this._identity = new Br()),
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
async function Qe(t) {
  await t.remove(Bt), await t.remove(VA), await t.remove(oI);
}
const CI = () =>
  hI.create({
    idleOptions: { disableIdle: !0, disableDefaultIdleCallback: !0 },
  });
onmessage = ({ data: t }) => {
  const { msg: A } = t;
  switch (A) {
    case "startIdleTimer":
      fI();
      return;
    case "stopIdleTimer":
      Ui();
      return;
  }
};
let vt;
const fI = () => (vt = setInterval(async () => await lI(), Xi)),
  Ui = () => {
    vt && (clearInterval(vt), (vt = void 0));
  },
  lI = async () => {
    const [t, A] = await Promise.all([wI(), pI()]);
    if (t && A.valid && A.delegation !== null) {
      dI(A.delegation);
      return;
    }
    yI();
  },
  wI = async () => (await CI()).isAuthenticated(),
  pI = async () => {
    const A = await new mi().get(VA),
      e = A !== null ? xt.fromJSON(A) : null;
    return { valid: e !== null && Di(e), delegation: e };
  },
  yI = () => {
    Ui(), postMessage({ msg: "signOutIdleTimer" });
  },
  dI = (t) => {
    const A = t.delegations[0]?.delegation.expiration;
    if (A === void 0) return;
    const e = new Date(Number(A / BigInt(1e6))).getTime() - Date.now();
    postMessage({
      msg: "delegationRemainingTime",
      data: { authRemainingTime: e },
    });
  };
