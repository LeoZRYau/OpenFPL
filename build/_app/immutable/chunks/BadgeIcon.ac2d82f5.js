import {
  a1 as C,
  s as _,
  G as c,
  S as d,
  n as e,
  a2 as f,
  i as g,
  m as h,
  H as m,
  h as u,
  b as v,
} from "./index.a8c54947.js";
function y(n) {
  let l, t, o, s;
  return {
    c() {
      (l = C("svg")),
        (t = C("path")),
        (o = C("path")),
        (s = C("path")),
        this.h();
    },
    l(r) {
      l = f(r, "svg", { xmlns: !0, class: !0, fill: !0, viewBox: !0 });
      var a = h(l);
      (t = f(a, "path", { d: !0, fill: !0 })),
        h(t).forEach(u),
        (o = f(a, "path", { d: !0, fill: !0 })),
        h(o).forEach(u),
        (s = f(a, "path", { d: !0, fill: !0 })),
        h(s).forEach(u),
        a.forEach(u),
        this.h();
    },
    h() {
      e(
        t,
        "d",
        "M407 33.9165C295.984 33.9165 135.667 118.708 135.667 118.708V508.75C135.667 508.75 141.044 561.82 152.625 593.541C194.871 709.259 407 780.083 407 780.083C407 780.083 619.129 709.259 661.375 593.541C672.956 561.82 678.333 508.75 678.333 508.75V118.708C678.333 118.708 518.016 33.9165 407 33.9165Z"
      ),
        e(t, "fill", n[1]),
        e(
          o,
          "d",
          "M712.25 101.75V493.013C712.25 649.097 603.581 689.831 407 814C210.419 689.831 101.75 649.063 101.75 493.013V101.75C167.718 45.2448 282.729 0 407 0C531.271 0 646.282 45.2448 712.25 101.75ZM644.417 135.361C585.775 96.052 496.506 67.8333 407.237 67.8333C317.223 67.8333 228.124 96.1198 169.583 135.361V492.979C169.583 595.712 225.817 622.235 407 734.025C587.979 622.337 644.417 595.814 644.417 492.979V135.361Z"
        ),
        e(o, "fill", n[3]),
        e(
          s,
          "d",
          "M407.237 135.667C464.862 135.667 527.811 150.42 576.583 174.467V493.012C576.583 547.347 562.542 558.539 407 654.422L407.237 135.667Z"
        ),
        e(s, "fill", n[2]),
        e(l, "xmlns", "http://www.w3.org/2000/svg"),
        e(l, "class", n[0]),
        e(l, "fill", "currentColor"),
        e(l, "viewBox", "0 0 814 814");
    },
    m(r, a) {
      v(r, l, a), c(l, t), c(l, o), c(l, s);
    },
    p(r, [a]) {
      a & 2 && e(t, "fill", r[1]),
        a & 8 && e(o, "fill", r[3]),
        a & 4 && e(s, "fill", r[2]),
        a & 1 && e(l, "class", r[0]);
    },
    i: m,
    o: m,
    d(r) {
      r && u(l);
    },
  };
}
function V(n, l, t) {
  let { className: o = "" } = l,
    { primaryColour: s = "" } = l,
    { secondaryColour: r = "" } = l,
    { thirdColour: a = "" } = l;
  return (
    (n.$$set = (i) => {
      "className" in i && t(0, (o = i.className)),
        "primaryColour" in i && t(1, (s = i.primaryColour)),
        "secondaryColour" in i && t(2, (r = i.secondaryColour)),
        "thirdColour" in i && t(3, (a = i.thirdColour));
    }),
    [o, s, r, a]
  );
}
class B extends d {
  constructor(l) {
    super(),
      g(this, l, V, y, _, {
        className: 0,
        primaryColour: 1,
        secondaryColour: 2,
        thirdColour: 3,
      });
  }
}
export { B };
