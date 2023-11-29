import {
  A as eo,
  a as o,
  b as Ql,
  B as to,
  c as i,
  d as Ss,
  f as qg,
  g as $s,
  G as e,
  H as Jt,
  h as t,
  i as zl,
  k as a,
  L as ei,
  l as n,
  m as s,
  N as Bg,
  n as c,
  q as r,
  r as l,
  S as Kl,
  s as Xl,
  v as Mg,
  y as Yl,
  z as Zl,
} from "../chunks/index.c7b38e5e.js";
import { a as Wg } from "../chunks/Layout.39e2a716.js";
function Ug(x) {
  let h,
    d,
    u,
    w,
    he,
    T,
    $,
    le,
    P,
    Ie,
    Te,
    g,
    ue,
    fe,
    L,
    pe,
    xe,
    A,
    me,
    ve,
    F,
    oe,
    Ae,
    C,
    ie,
    Y,
    O,
    k,
    Z,
    U,
    Ce,
    de,
    y,
    ye,
    Pe,
    S,
    _e,
    Le,
    j,
    Ee,
    Ue,
    ee,
    K,
    ge,
    J,
    Re,
    ke,
    te,
    $e,
    p,
    D,
    we,
    Ne,
    ae,
    Q,
    N,
    R,
    M,
    z,
    ne,
    Ge,
    De,
    se,
    E,
    H,
    G,
    X,
    Fe,
    I,
    Ke,
    Me,
    re,
    ze,
    Oe,
    ce,
    f,
    Se,
    V,
    Qe,
    He,
    qe;
  return {
    c() {
      (h = a("div")),
        (d = a("div")),
        (u = a("h1")),
        (w = r("System Architecture")),
        (he = o()),
        (T = a("p")),
        ($ =
          r(`OpenFPL is being built as a progressive web application, it's curernt
      frontend is React but will be moved over to Svelte for the start of 2024.
      The OpenFPL backend is developed in Motoko. The Github is publicly
      available at github.com/jamesbeadle/openfpl. OpenFPL's architecture is
      designed for scalability and efficiency, ensuring robust performance even
      as user numbers grow. Here's how the system is structured:`)),
        (le = o()),
        (P = a("h2")),
        (Ie = r("Profile Data")),
        (Te = o()),
        (g = a("p")),
        (ue =
          r(`OpenFPL allocates approximately 254 bytes for a profile record. This means
      that a single Profile Canister could hold more than 16m profiles, scaling
      to a size larger than the market leader.`)),
        (fe = o()),
        (L = a("p")),
        (pe =
          r(`Each profile record will hold a reference to the Profile Picture canister
      where their pfp is stored. We limit the size of profile pictures to 500KB,
      meaning you can store 8,000 images per Profile Picture canister. When the
      canister is full, a new Profile Picture canister is created to store the
      images.`)),
        (xe = o()),
        (A = a("h2")),
        (me = r("Fantasy Teams Data")),
        (ve = o()),
        (F = a("p")),
        (oe =
          r(`OpenFPL allocates approximately 913 KB for a fantasy team with a lifetime
      of seasons history. Therefore we can store over 4,000 fantasy teams in
      each canister. When this limit is reached, a new canister is created. A
      reference to the user’s Fantasy Team canister is stored in the user
      profile record.`)),
        (Ae = o()),
        (C = a("h2")),
        (ie = r("Leaderboard Data")),
        (Y = o()),
        (O = a("p")),
        (k =
          r(`The size of the leaderboard data is very much dependent on the number of
      users on the site as each will create an entry in each leaderboard.
      Therefore we will create a new canister for each leaderboard. For each
      season there will be a Season Leaderboard canister, 38 Gameweek
      Leaderboard canisters and 12 Monthly Leaderboard canisters. This
      architecture will scale to 25m+ users, more than double the players of the
      market leading platform.`)),
        (Z = o()),
        (U = a("h2")),
        (Ce = r("Main Canister & Central Data Management")),
        (de = o()),
        (y = a("p")),
        (ye =
          r(`Our system estimates the size of the main canister containing data for 100
      seasons as around 44MB. With around 1% of the 4GB canister being used,
      substantial room is available for additional growth and functionalities.
      The Main canister will contain the following key pieces of information:`)),
        (Pe = o()),
        (S = a("ul")),
        (_e = a("li")),
        (Le = r("Data Cache Hashes")),
        (j = o()),
        (Ee = a("li")),
        (Ue = r("Teams Data")),
        (ee = o()),
        (K = a("li")),
        (ge = r("Seasons Data")),
        (J = o()),
        (Re = a("li")),
        (ke = r("Canister References")),
        (te = o()),
        ($e = a("h2")),
        (p = r("Player Canisters")),
        (D = o()),
        (we = a("p")),
        (Ne =
          r(`The player canisters container information on all Premier League football
      players. OpenFPL allocates approximately 30 KB for each Player record.
      With a single canister on the Internet Computer boasting a 4GB capacity,
      it will be able to store 100.000+ Premier League player entries. Each
      Premier League team could theoretically introduce up to 50 new players per
      team annually. However, this number implies a complete change of a team's
      squad, an eventuality that's exceedingly uncommon in the Premier League.
      Therefore, our projection of 1,000 new players across the league each year
      offers a deliberately conservative overestimation. Given these
      calculations, the following 3 canisters will be able to manage all the
      Premier League players for well over 100 years:`)),
        (ae = o()),
        (Q = a("ul")),
        (N = a("li")),
        (R = r("Live Players Canister")),
        (M = o()),
        (z = a("li")),
        (ne = r("Former Players Canister")),
        (Ge = o()),
        (De = a("li")),
        (se = r("Retired Players Canister")),
        (E = o()),
        (H = a("p")),
        (G =
          r(`Players will move from the live canister to and from the Former or Retired
      players canister when required.`)),
        (X = o()),
        (Fe = a("h2")),
        (I = r("Cycle Dispenser")),
        (Ke = o()),
        (Me = a("p")),
        (re =
          r(`The cycle dispenser canister watches each canister in the OpenFPL
      ecosystem and tops it up with cycles when it reaches 20% of its top up
      value.`)),
        (ze = o()),
        (Oe = a("h2")),
        (ce = r("Note on Architecture Evolution and Whitepaper Updates")),
        (f = o()),
        (Se = a("p")),
        (V =
          r(`As OpenFPL progresses through the SNS testflight phase, our architecture
      may undergo changes to optimize performance and scalability. We are
      committed to staying at the forefront of technological advancements,
      ensuring that our platform remains robust and efficient.`)),
        (Qe = o()),
        (He = a("p")),
        (qe =
          r(`To keep our community and stakeholders informed, any significant changes
      to the architecture will be reflected in updated versions of this
      whitepaper. Each new version will be clearly marked to ensure transparency
      and ease of reference, maintaining our commitment to openness and
      communication with our users.`)),
        this.h();
    },
    l(je) {
      h = n(je, "DIV", { class: !0 });
      var Be = s(h);
      d = n(Be, "DIV", { class: !0 });
      var b = s(d);
      u = n(b, "H1", { class: !0 });
      var at = s(u);
      (w = l(at, "System Architecture")),
        at.forEach(t),
        (he = i(b)),
        (T = n(b, "P", { class: !0 }));
      var nt = s(T);
      ($ = l(
        nt,
        `OpenFPL is being built as a progressive web application, it's curernt
      frontend is React but will be moved over to Svelte for the start of 2024.
      The OpenFPL backend is developed in Motoko. The Github is publicly
      available at github.com/jamesbeadle/openfpl. OpenFPL's architecture is
      designed for scalability and efficiency, ensuring robust performance even
      as user numbers grow. Here's how the system is structured:`
      )),
        nt.forEach(t),
        (le = i(b)),
        (P = n(b, "H2", { class: !0 }));
      var Ye = s(P);
      (Ie = l(Ye, "Profile Data")),
        Ye.forEach(t),
        (Te = i(b)),
        (g = n(b, "P", { class: !0 }));
      var ft = s(g);
      (ue = l(
        ft,
        `OpenFPL allocates approximately 254 bytes for a profile record. This means
      that a single Profile Canister could hold more than 16m profiles, scaling
      to a size larger than the market leader.`
      )),
        ft.forEach(t),
        (fe = i(b)),
        (L = n(b, "P", { class: !0 }));
      var B = s(L);
      (pe = l(
        B,
        `Each profile record will hold a reference to the Profile Picture canister
      where their pfp is stored. We limit the size of profile pictures to 500KB,
      meaning you can store 8,000 images per Profile Picture canister. When the
      canister is full, a new Profile Picture canister is created to store the
      images.`
      )),
        B.forEach(t),
        (xe = i(b)),
        (A = n(b, "H2", { class: !0 }));
      var Ze = s(A);
      (me = l(Ze, "Fantasy Teams Data")),
        Ze.forEach(t),
        (ve = i(b)),
        (F = n(b, "P", { class: !0 }));
      var v = s(F);
      (oe = l(
        v,
        `OpenFPL allocates approximately 913 KB for a fantasy team with a lifetime
      of seasons history. Therefore we can store over 4,000 fantasy teams in
      each canister. When this limit is reached, a new canister is created. A
      reference to the user’s Fantasy Team canister is stored in the user
      profile record.`
      )),
        v.forEach(t),
        (Ae = i(b)),
        (C = n(b, "H2", { class: !0 }));
      var ot = s(C);
      (ie = l(ot, "Leaderboard Data")),
        ot.forEach(t),
        (Y = i(b)),
        (O = n(b, "P", { class: !0 }));
      var pt = s(O);
      (k = l(
        pt,
        `The size of the leaderboard data is very much dependent on the number of
      users on the site as each will create an entry in each leaderboard.
      Therefore we will create a new canister for each leaderboard. For each
      season there will be a Season Leaderboard canister, 38 Gameweek
      Leaderboard canisters and 12 Monthly Leaderboard canisters. This
      architecture will scale to 25m+ users, more than double the players of the
      market leading platform.`
      )),
        pt.forEach(t),
        (Z = i(b)),
        (U = n(b, "H2", { class: !0 }));
      var m = s(U);
      (Ce = l(m, "Main Canister & Central Data Management")),
        m.forEach(t),
        (de = i(b)),
        (y = n(b, "P", { class: !0 }));
      var Lt = s(y);
      (ye = l(
        Lt,
        `Our system estimates the size of the main canister containing data for 100
      seasons as around 44MB. With around 1% of the 4GB canister being used,
      substantial room is available for additional growth and functionalities.
      The Main canister will contain the following key pieces of information:`
      )),
        Lt.forEach(t),
        (Pe = i(b)),
        (S = n(b, "UL", { class: !0 }));
      var et = s(S);
      _e = n(et, "LI", {});
      var Ve = s(_e);
      (Le = l(Ve, "Data Cache Hashes")),
        Ve.forEach(t),
        (j = i(et)),
        (Ee = n(et, "LI", {}));
      var mt = s(Ee);
      (Ue = l(mt, "Teams Data")),
        mt.forEach(t),
        (ee = i(et)),
        (K = n(et, "LI", {}));
      var kt = s(K);
      (ge = l(kt, "Seasons Data")),
        kt.forEach(t),
        (J = i(et)),
        (Re = n(et, "LI", {}));
      var Dt = s(Re);
      (ke = l(Dt, "Canister References")),
        Dt.forEach(t),
        et.forEach(t),
        (te = i(b)),
        ($e = n(b, "H2", { class: !0 }));
      var be = s($e);
      (p = l(be, "Player Canisters")),
        be.forEach(t),
        (D = i(b)),
        (we = n(b, "P", { class: !0 }));
      var It = s(we);
      (Ne = l(
        It,
        `The player canisters container information on all Premier League football
      players. OpenFPL allocates approximately 30 KB for each Player record.
      With a single canister on the Internet Computer boasting a 4GB capacity,
      it will be able to store 100.000+ Premier League player entries. Each
      Premier League team could theoretically introduce up to 50 new players per
      team annually. However, this number implies a complete change of a team's
      squad, an eventuality that's exceedingly uncommon in the Premier League.
      Therefore, our projection of 1,000 new players across the league each year
      offers a deliberately conservative overestimation. Given these
      calculations, the following 3 canisters will be able to manage all the
      Premier League players for well over 100 years:`
      )),
        It.forEach(t),
        (ae = i(b)),
        (Q = n(b, "UL", { class: !0 }));
      var xt = s(Q);
      N = n(xt, "LI", {});
      var Zt = s(N);
      (R = l(Zt, "Live Players Canister")),
        Zt.forEach(t),
        (M = i(xt)),
        (z = n(xt, "LI", {}));
      var At = s(z);
      (ne = l(At, "Former Players Canister")),
        At.forEach(t),
        (Ge = i(xt)),
        (De = n(xt, "LI", {}));
      var ia = s(De);
      (se = l(ia, "Retired Players Canister")),
        ia.forEach(t),
        xt.forEach(t),
        (E = i(b)),
        (H = n(b, "P", { class: !0 }));
      var ea = s(H);
      (G = l(
        ea,
        `Players will move from the live canister to and from the Former or Retired
      players canister when required.`
      )),
        ea.forEach(t),
        (X = i(b)),
        (Fe = n(b, "H2", { class: !0 }));
      var Ct = s(Fe);
      (I = l(Ct, "Cycle Dispenser")),
        Ct.forEach(t),
        (Ke = i(b)),
        (Me = n(b, "P", { class: !0 }));
      var da = s(Me);
      (re = l(
        da,
        `The cycle dispenser canister watches each canister in the OpenFPL
      ecosystem and tops it up with cycles when it reaches 20% of its top up
      value.`
      )),
        da.forEach(t),
        (ze = i(b)),
        (Oe = n(b, "H2", { class: !0 }));
      var ta = s(Oe);
      (ce = l(ta, "Note on Architecture Evolution and Whitepaper Updates")),
        ta.forEach(t),
        (f = i(b)),
        (Se = n(b, "P", { class: !0 }));
      var $t = s(Se);
      (V = l(
        $t,
        `As OpenFPL progresses through the SNS testflight phase, our architecture
      may undergo changes to optimize performance and scalability. We are
      committed to staying at the forefront of technological advancements,
      ensuring that our platform remains robust and efficient.`
      )),
        $t.forEach(t),
        (Qe = i(b)),
        (He = n(b, "P", { class: !0 }));
      var ca = s(He);
      (qe = l(
        ca,
        `To keep our community and stakeholders informed, any significant changes
      to the architecture will be reflected in updated versions of this
      whitepaper. Each new version will be clearly marked to ensure transparency
      and ease of reference, maintaining our commitment to openness and
      communication with our users.`
      )),
        ca.forEach(t),
        b.forEach(t),
        Be.forEach(t),
        this.h();
    },
    h() {
      c(u, "class", "text-3xl font-bold my-4"),
        c(T, "class", "my-2"),
        c(P, "class", "text-lg font-bold mt-4"),
        c(g, "class", "my-2"),
        c(L, "class", "my-2"),
        c(A, "class", "text-lg font-bold mt-4"),
        c(F, "class", "my-2"),
        c(C, "class", "text-lg font-bold mt-4"),
        c(O, "class", "my-2"),
        c(U, "class", "text-lg font-bold mt-4"),
        c(y, "class", "my-2"),
        c(S, "class", "list-disc ml-4"),
        c($e, "class", "text-lg font-bold mt-4"),
        c(we, "class", "my-2"),
        c(Q, "class", "list-disc ml-4"),
        c(H, "class", "my-2"),
        c(Fe, "class", "text-lg font-bold mt-4"),
        c(Me, "class", "my-2"),
        c(Oe, "class", "text-lg font-bold mt-4"),
        c(Se, "class", "my-2"),
        c(He, "class", "my-2"),
        c(d, "class", "m-4"),
        c(h, "class", "container-fluid mx-auto p-4");
    },
    m(je, Be) {
      Ql(je, h, Be),
        e(h, d),
        e(d, u),
        e(u, w),
        e(d, he),
        e(d, T),
        e(T, $),
        e(d, le),
        e(d, P),
        e(P, Ie),
        e(d, Te),
        e(d, g),
        e(g, ue),
        e(d, fe),
        e(d, L),
        e(L, pe),
        e(d, xe),
        e(d, A),
        e(A, me),
        e(d, ve),
        e(d, F),
        e(F, oe),
        e(d, Ae),
        e(d, C),
        e(C, ie),
        e(d, Y),
        e(d, O),
        e(O, k),
        e(d, Z),
        e(d, U),
        e(U, Ce),
        e(d, de),
        e(d, y),
        e(y, ye),
        e(d, Pe),
        e(d, S),
        e(S, _e),
        e(_e, Le),
        e(S, j),
        e(S, Ee),
        e(Ee, Ue),
        e(S, ee),
        e(S, K),
        e(K, ge),
        e(S, J),
        e(S, Re),
        e(Re, ke),
        e(d, te),
        e(d, $e),
        e($e, p),
        e(d, D),
        e(d, we),
        e(we, Ne),
        e(d, ae),
        e(d, Q),
        e(Q, N),
        e(N, R),
        e(Q, M),
        e(Q, z),
        e(z, ne),
        e(Q, Ge),
        e(Q, De),
        e(De, se),
        e(d, E),
        e(d, H),
        e(H, G),
        e(d, X),
        e(d, Fe),
        e(Fe, I),
        e(d, Ke),
        e(d, Me),
        e(Me, re),
        e(d, ze),
        e(d, Oe),
        e(Oe, ce),
        e(d, f),
        e(d, Se),
        e(Se, V),
        e(d, Qe),
        e(d, He),
        e(He, qe);
    },
    p: Jt,
    i: Jt,
    o: Jt,
    d(je) {
      je && t(h);
    },
  };
}
class Ng extends Kl {
  constructor(h) {
    super(), zl(this, h, null, Ug, Xl, {});
  }
}
function Gg(x) {
  let h,
    d,
    u,
    w,
    he,
    T,
    $,
    le,
    P,
    Ie,
    Te,
    g,
    ue,
    fe,
    L,
    pe,
    xe,
    A,
    me,
    ve,
    F,
    oe,
    Ae,
    C,
    ie,
    Y,
    O,
    k,
    Z,
    U,
    Ce,
    de,
    y,
    ye,
    Pe,
    S,
    _e,
    Le,
    j,
    Ee,
    Ue,
    ee,
    K,
    ge,
    J,
    Re,
    ke,
    te,
    $e,
    p,
    D,
    we,
    Ne,
    ae,
    Q,
    N,
    R,
    M,
    z,
    ne,
    Ge,
    De,
    se,
    E,
    H,
    G,
    X,
    Fe,
    I,
    Ke,
    Me,
    re,
    ze,
    Oe,
    ce,
    f,
    Se,
    V,
    Qe,
    He,
    qe,
    je,
    Be,
    b,
    at,
    nt,
    Ye,
    ft,
    B,
    Ze,
    v,
    ot,
    pt,
    m,
    Lt,
    et,
    Ve,
    mt,
    kt,
    Dt,
    be,
    It,
    xt,
    Zt,
    At,
    ia,
    ea,
    Ct,
    da,
    ta,
    $t,
    ca,
    ha,
    ra,
    ya,
    ua,
    la,
    _a,
    gt,
    St,
    Xa,
    Qa,
    oa,
    Ya,
    as,
    Je,
    on,
    dn,
    Za,
    W,
    Hs,
    cn,
    mn,
    Rs,
    We,
    tt,
    hn,
    Ms,
    vn,
    gn,
    it,
    bn,
    yn,
    qs,
    _n,
    En,
    Bs,
    wn,
    Tn,
    Ws,
    vt,
    en,
    va,
    Us,
    tn,
    Ns,
    Gs,
    an,
    Vs,
    js,
    Xe,
    Js,
    Ks,
    za,
    un,
    ns,
    Pn,
    lt,
    fn,
    Ln,
    zs,
    kn,
    Dn,
    Xs,
    pr,
    Ht,
    mr,
    vr,
    ti,
    gr,
    br,
    ai,
    yr,
    _r,
    ni,
    Er,
    wr,
    si,
    Tr,
    Pr,
    ri,
    Lr,
    kr,
    li,
    Dr,
    Qs,
    Ys,
    Zs,
    oi,
    er,
    dt,
    Fr,
    ii,
    bt,
    Fn,
    di,
    ci,
    ss,
    hi,
    ui,
    rs,
    fi,
    pi,
    ls,
    mi,
    vi,
    os,
    gi,
    bi,
    is,
    yi,
    _i,
    ds,
    Ei,
    wi,
    yt,
    Or,
    Ti,
    Ir,
    xr,
    Pi,
    _t,
    On,
    Li,
    ki,
    cs,
    Di,
    Fi,
    hs,
    Oi,
    Ii,
    us,
    xi,
    Ai,
    fs,
    Ci,
    $i,
    ps,
    Si,
    Hi,
    Et,
    Ar,
    Ri,
    Cr,
    $r,
    Mi,
    Sr,
    Hr,
    qi,
    wt,
    In,
    Bi,
    Wi,
    ms,
    Ui,
    Ni,
    vs,
    Gi,
    Vi,
    gs,
    ji,
    Ji,
    bs,
    Ki,
    zi,
    Tt,
    Rr,
    Xi,
    Mr,
    qr,
    Qi,
    Br,
    Wr,
    Yi,
    Ur,
    Nr,
    Zi,
    tr,
    pn,
    ao,
    ed,
    ct,
    ar,
    td,
    Gr,
    Vr,
    ad,
    jr,
    Jr,
    nd,
    Rt,
    ys,
    sd,
    rd,
    _s,
    ld,
    od,
    Es,
    id,
    dd,
    ws,
    cd,
    hd,
    Ts,
    ud,
    fd,
    Ps,
    pd,
    md,
    xn,
    Ls,
    no,
    Kr,
    An,
    ks,
    Mt,
    zr,
    Xr,
    vd,
    Qr,
    nr,
    gd,
    Yr,
    ht,
    Cn,
    Ds,
    bd,
    yd,
    Fs,
    _d,
    Ed,
    $n,
    sr,
    so,
    Zr,
    Sn,
    el,
    tl,
    wd,
    al,
    qt,
    nl,
    Hn,
    sl,
    rl,
    Td,
    ll,
    ol,
    Pd,
    Rn,
    Os,
    Ld,
    kd,
    Is,
    Dd,
    Fd,
    nn,
    il,
    Od,
    dl,
    cl,
    Id,
    hl,
    Mn,
    ul,
    Bt,
    fl,
    pl,
    xd,
    ml,
    qn,
    vl,
    gl,
    Ad,
    bl,
    yl,
    Cd,
    Bn,
    xs,
    $d,
    Sd,
    As,
    Hd,
    Rd,
    sn,
    _l,
    Md,
    El,
    wl,
    qd,
    Wt,
    Wn,
    Bd,
    Wd,
    Un,
    Ud,
    Nd,
    Nn,
    Gd,
    Vd,
    ga,
    Tl,
    jd,
    Pl,
    Ll,
    Jd,
    kl,
    Dl,
    Kd,
    Fl,
    Ol,
    zd,
    Il,
    rr,
    Xd,
    Ut,
    Gn,
    Qd,
    Yd,
    Vn,
    Zd,
    ec,
    jn,
    tc,
    ac,
    Jn,
    nc,
    sc,
    Kn,
    rc,
    lc,
    ba,
    xl,
    oc,
    Al,
    Cl,
    ic,
    $l,
    Sl,
    dc,
    Nt,
    Cs,
    cc,
    hc,
    zn,
    uc,
    fc,
    fa,
    Hl,
    pc,
    Rl,
    Ml,
    mc,
    ql,
    Bl,
    vc,
    Wl,
    Ul,
    gc,
    Nl,
    Gl,
    bc,
    Vl,
    Xn,
    yc,
    ut,
    jl,
    _c,
    Jl,
    lr,
    _,
    Ec,
    ro,
    wc,
    pa,
    lo,
    Tc,
    Pc,
    oo,
    Lc,
    kc,
    io,
    Dc,
    Fc,
    co,
    Qn,
    Oc,
    ho,
    Ic,
    xc,
    Kt,
    Ea,
    Ac,
    Cc,
    uo,
    $c,
    Sc,
    fo,
    rn,
    Hc,
    po,
    Rc,
    Mc,
    mo,
    qc,
    ln,
    vo,
    Bc,
    Wc,
    go,
    Uc,
    Nc,
    bo,
    Yn,
    Gc,
    zt,
    yo,
    Vc,
    jc,
    st,
    aa,
    Jc,
    _o,
    Kc,
    zc,
    Eo,
    Xc,
    Qc,
    wo,
    Yc,
    Zc,
    To,
    na,
    eh,
    Po,
    th,
    ah,
    Lo,
    nh,
    sh,
    Xt,
    ko,
    rh,
    lh,
    Do,
    oh,
    sa,
    Fo,
    ih,
    dh,
    Oo,
    ch,
    hh,
    Io,
    uh,
    fh,
    Gt,
    ph,
    mh,
    xo,
    vh,
    gh,
    Ao,
    bh,
    yh,
    Qt,
    Vt,
    _h,
    Eh,
    Co,
    wh,
    Th,
    $o,
    Ph,
    Lh,
    So,
    kh,
    Dh,
    jt,
    Fh,
    Oh,
    Ho,
    Ih,
    xh,
    Ro,
    Ah,
    Ch,
    Mo,
    $h,
    Sh,
    Ft,
    qo,
    Hh,
    Rh,
    Pt,
    Bo,
    Mh,
    Wo,
    qh,
    Bh,
    or,
    Wh,
    Uh,
    ir,
    Nh,
    Gh,
    dr,
    Vh,
    jh,
    cr,
    Jh,
    Kh,
    hr,
    zh,
    Xh,
    Ot,
    Uo,
    Qh,
    No,
    Go,
    Yh,
    Vo,
    jo,
    Zh,
    eu,
    Jo,
    tu,
    Zn,
    Ko,
    au,
    nu,
    zo,
    su,
    ru,
    Xo,
    lu,
    ou,
    Qo,
    es,
    iu,
    Yt,
    Yo,
    du,
    cu,
    wa,
    hu,
    uu,
    Zo,
    fu,
    pu,
    ur,
    mu,
    qu,
    Eu,
    Bu,
    Wu,
    wu,
    Uu,
    Nu,
    Tu,
    Gu,
    Vu,
    Pu,
    ju,
    Ju,
    ma,
    Lu,
    Ku,
    zu,
    ku,
    Xu,
    Qu,
    Du,
    Yu,
    Zu,
    Fu,
    ef,
    tf,
    Ou,
    af,
    nf,
    Iu,
    sf,
    rf,
    xu,
    lf,
    of,
    Au,
    df,
    cf,
    vu,
    hf,
    uf,
    fr,
    Cu,
    ff,
    pf,
    $u,
    mf,
    vf,
    Su,
    gf,
    bf,
    gu,
    yf,
    _f,
    bu,
    Ef,
    wf,
    yu,
    Tf;
  return {
    c() {
      (h = a("div")),
        (d = a("div")),
        (u = a("h1")),
        (w = r("OpenFPL DAO")),
        (he = o()),
        (T = a("p")),
        ($ =
          r(`OpenFPL functions entirely on-chain as a DAO, aspiring to operate under
      the Internet Computer’s Service Nervous System. The DAO is structured to
      run in parallel with the Premier League season, relying on input from its
      neuron holders who are rewarded for maintaining independence from
      third-party services.`)),
        (le = o()),
        (P = a("h2")),
        (Ie = r("DAO Reward Structure")),
        (Te = o()),
        (g = a("p")),
        (ue =
          r(`The DAO incentivizes participation through monthly minting of new FPL
      tokens, calculated annually as 2.5% of the total $FPL supply as of August
      1st. These tokens are allocated to:`)),
        (fe = o()),
        (L = a("ul")),
        (pe = a("li")),
        (xe = r("Gameplay Rewards (75%)")),
        (A = o()),
        (me = a("li")),
        (ve = r("Governance Rewards (25%)")),
        (F = o()),
        (oe = a("h2")),
        (Ae = r("Gameplay Rewards (75%)")),
        (C = o()),
        (ie = a("p")),
        (Y =
          r(`The DAO is designed to reward users for their expertise in fantasy
      football, with rewards distributed weekly, monthly, and annually based on
      performance. The rewards are tiered to encourage ongoing engagement.
      Here’s the breakdown:`)),
        (O = o()),
        (k = a("ul")),
        (Z = a("li")),
        (U =
          r(`Global Season Leaderboard Rewards: 30% for the top 100 global season
        positions.`)),
        (Ce = o()),
        (de = a("li")),
        (y =
          r(`Club Monthly Leaderboard Rewards: 20% for the top 100 in each monthly
        club leaderboard, adjusted for the number of fans in each club.`)),
        (ye = o()),
        (Pe = a("li")),
        (S = r(
          "Global Weekly Leaderboard Rewards: 15% for the top 100 weekly positions."
        )),
        (_e = o()),
        (Le = a("li")),
        (j =
          r(`Most Valuable Team Rewards: 10% for the top 100 most valuable teams at
        season's end.`)),
        (Ee = o()),
        (Ue = a("li")),
        (ee =
          r(`Highest Scoring Match Player Rewards: 10% split among managers selecting
        the highest-scoring player in a fixture.`)),
        (K = o()),
        (ge = a("li")),
        (J =
          r(`Weekly/Monthly/Season ATH Score Rewards: 5% each, reserved for breaking
        all-time high scores in respective categories.`)),
        (Re = o()),
        (ke = a("p")),
        (te =
          r(`A user is rewarded for their leaderboard position across the top 100
      positions. The following is a breakdown of the reward share for each
      position:`)),
        ($e = o()),
        (p = a("table")),
        (D = a("tr")),
        (we = a("th")),
        (Ne = r("Pos")),
        (ae = o()),
        (Q = a("th")),
        (N = r("Share")),
        (R = o()),
        (M = a("th")),
        (z = r("Pos")),
        (ne = o()),
        (Ge = a("th")),
        (De = r("Share")),
        (se = o()),
        (E = a("th")),
        (H = r("Pos")),
        (G = o()),
        (X = a("th")),
        (Fe = r("Share")),
        (I = o()),
        (Ke = a("th")),
        (Me = r("Pos")),
        (re = o()),
        (ze = a("th")),
        (Oe = r("Share")),
        (ce = o()),
        (f = a("tr")),
        (Se = a("td")),
        (V = r("1")),
        (Qe = o()),
        (He = a("td")),
        (qe = r("36.09%")),
        (je = o()),
        (Be = a("td")),
        (b = r("26")),
        (at = o()),
        (nt = a("td")),
        (Ye = r("0.391%")),
        (ft = o()),
        (B = a("td")),
        (Ze = r("51")),
        (v = o()),
        (ot = a("td")),
        (pt = r("0.0662%")),
        (m = o()),
        (Lt = a("td")),
        (et = r("76")),
        (Ve = o()),
        (mt = a("td")),
        (kt = r("0.012%")),
        (Dt = o()),
        (be = a("tr")),
        (It = a("td")),
        (xt = r("2")),
        (Zt = o()),
        (At = a("td")),
        (ia = r("18.91%")),
        (ea = o()),
        (Ct = a("td")),
        (da = r("27")),
        (ta = o()),
        ($t = a("td")),
        (ca = r("0.365%")),
        (ha = o()),
        (ra = a("td")),
        (ya = r("52")),
        (ua = o()),
        (la = a("td")),
        (_a = r("0.0627%")),
        (gt = o()),
        (St = a("td")),
        (Xa = r("77")),
        (Qa = o()),
        (oa = a("td")),
        (Ya = r("0.0112%")),
        (as = o()),
        (Je = a("tr")),
        (on = a("td")),
        (dn = r("3")),
        (Za = o()),
        (W = a("td")),
        (Hs = r("10.32%")),
        (cn = o()),
        (mn = a("td")),
        (Rs = r("28")),
        (We = o()),
        (tt = a("td")),
        (hn = r("0.339%")),
        (Ms = o()),
        (vn = a("td")),
        (gn = r("53")),
        (it = o()),
        (bn = a("td")),
        (yn = r("0.0593%")),
        (qs = o()),
        (_n = a("td")),
        (En = r("78")),
        (Bs = o()),
        (wn = a("td")),
        (Tn = r("0.0103%")),
        (Ws = o()),
        (vt = a("tr")),
        (en = a("td")),
        (va = r("4")),
        (Us = o()),
        (tn = a("td")),
        (Ns = r("6.02%")),
        (Gs = o()),
        (an = a("td")),
        (Vs = r("29")),
        (js = o()),
        (Xe = a("td")),
        (Js = r("0.314%")),
        (Ks = o()),
        (za = a("td")),
        (un = r("54")),
        (ns = o()),
        (Pn = a("td")),
        (lt = r("0.0558%")),
        (fn = o()),
        (Ln = a("td")),
        (zs = r("79")),
        (kn = o()),
        (Dn = a("td")),
        (Xs = r("0.0095%")),
        (pr = o()),
        (Ht = a("tr")),
        (mr = a("td")),
        (vr = r("5")),
        (ti = o()),
        (gr = a("td")),
        (br = r("3.87%")),
        (ai = o()),
        (yr = a("td")),
        (_r = r("30")),
        (ni = o()),
        (Er = a("td")),
        (wr = r("0.288%")),
        (si = o()),
        (Tr = a("td")),
        (Pr = r("55")),
        (ri = o()),
        (Lr = a("td")),
        (kr = r("0.0524%")),
        (li = o()),
        (Dr = a("td")),
        (Qs = r("80")),
        (Ys = o()),
        (Zs = a("td")),
        (oi = r("0.0086%")),
        (er = o()),
        (dt = a("tr")),
        (Fr = a("td")),
        (ii = r("6")),
        (bt = o()),
        (Fn = a("td")),
        (di = r("2.80%")),
        (ci = o()),
        (ss = a("td")),
        (hi = r("31")),
        (ui = o()),
        (rs = a("td")),
        (fi = r("0.262%")),
        (pi = o()),
        (ls = a("td")),
        (mi = r("56")),
        (vi = o()),
        (os = a("td")),
        (gi = r("0.0490%")),
        (bi = o()),
        (is = a("td")),
        (yi = r("81")),
        (_i = o()),
        (ds = a("td")),
        (Ei = r("0.0082%")),
        (wi = o()),
        (yt = a("tr")),
        (Or = a("td")),
        (Ti = r("7")),
        (Ir = o()),
        (xr = a("td")),
        (Pi = r("2.26%")),
        (_t = o()),
        (On = a("td")),
        (Li = r("32")),
        (ki = o()),
        (cs = a("td")),
        (Di = r("0.248%")),
        (Fi = o()),
        (hs = a("td")),
        (Oi = r("57")),
        (Ii = o()),
        (us = a("td")),
        (xi = r("0.0455%")),
        (Ai = o()),
        (fs = a("td")),
        (Ci = r("82")),
        ($i = o()),
        (ps = a("td")),
        (Si = r("0.0077%")),
        (Hi = o()),
        (Et = a("tr")),
        (Ar = a("td")),
        (Ri = r("8")),
        (Cr = o()),
        ($r = a("td")),
        (Mi = r("1.83%")),
        (Sr = o()),
        (Hr = a("td")),
        (qi = r("33")),
        (wt = o()),
        (In = a("td")),
        (Bi = r("0.235%")),
        (Wi = o()),
        (ms = a("td")),
        (Ui = r("58")),
        (Ni = o()),
        (vs = a("td")),
        (Gi = r("0.0421%")),
        (Vi = o()),
        (gs = a("td")),
        (ji = r("83")),
        (Ji = o()),
        (bs = a("td")),
        (Ki = r("0.0073%")),
        (zi = o()),
        (Tt = a("tr")),
        (Rr = a("td")),
        (Xi = r("9")),
        (Mr = o()),
        (qr = a("td")),
        (Qi = r("1.51%")),
        (Br = o()),
        (Wr = a("td")),
        (Yi = r("34")),
        (Ur = o()),
        (Nr = a("td")),
        (Zi = r("0.221%")),
        (tr = o()),
        (pn = a("td")),
        (ao = r("59")),
        (ed = o()),
        (ct = a("td")),
        (ar = r("0.0387%")),
        (td = o()),
        (Gr = a("td")),
        (Vr = r("84")),
        (ad = o()),
        (jr = a("td")),
        (Jr = r("0.0069%")),
        (nd = o()),
        (Rt = a("tr")),
        (ys = a("td")),
        (sd = r("10")),
        (rd = o()),
        (_s = a("td")),
        (ld = r("1.30%")),
        (od = o()),
        (Es = a("td")),
        (id = r("35")),
        (dd = o()),
        (ws = a("td")),
        (cd = r("0.207%")),
        (hd = o()),
        (Ts = a("td")),
        (ud = r("60")),
        (fd = o()),
        (Ps = a("td")),
        (pd = r("0.0352%")),
        (md = o()),
        (xn = a("td")),
        (Ls = r("85")),
        (no = o()),
        (Kr = a("td")),
        (An = r("0.0064%")),
        (ks = o()),
        (Mt = a("tr")),
        (zr = a("td")),
        (Xr = r("11")),
        (vd = o()),
        (Qr = a("td")),
        (nr = r("1.19%")),
        (gd = o()),
        (Yr = a("td")),
        (ht = r("36")),
        (Cn = o()),
        (Ds = a("td")),
        (bd = r("0.193%")),
        (yd = o()),
        (Fs = a("td")),
        (_d = r("61")),
        (Ed = o()),
        ($n = a("td")),
        (sr = r("0.0335%")),
        (so = o()),
        (Zr = a("td")),
        (Sn = r("86")),
        (el = o()),
        (tl = a("td")),
        (wd = r("0.0060%")),
        (al = o()),
        (qt = a("tr")),
        (nl = a("td")),
        (Hn = r("12")),
        (sl = o()),
        (rl = a("td")),
        (Td = r("1.08%")),
        (ll = o()),
        (ol = a("td")),
        (Pd = r("37")),
        (Rn = o()),
        (Os = a("td")),
        (Ld = r("0.180%")),
        (kd = o()),
        (Is = a("td")),
        (Dd = r("62")),
        (Fd = o()),
        (nn = a("td")),
        (il = r("0.0318%")),
        (Od = o()),
        (dl = a("td")),
        (cl = r("87")),
        (Id = o()),
        (hl = a("td")),
        (Mn = r("0.0056%")),
        (ul = o()),
        (Bt = a("tr")),
        (fl = a("td")),
        (pl = r("13")),
        (xd = o()),
        (ml = a("td")),
        (qn = r("0.98%")),
        (vl = o()),
        (gl = a("td")),
        (Ad = r("38")),
        (bl = o()),
        (yl = a("td")),
        (Cd = r("0.166%")),
        (Bn = o()),
        (xs = a("td")),
        ($d = r("63")),
        (Sd = o()),
        (As = a("td")),
        (Hd = r("0.0301%")),
        (Rd = o()),
        (sn = a("td")),
        (_l = r("88")),
        (Md = o()),
        (El = a("td")),
        (wl = r("0.0052%")),
        (qd = o()),
        (Wt = a("tr")),
        (Wn = a("td")),
        (Bd = r("14")),
        (Wd = o()),
        (Un = a("td")),
        (Ud = r("0.87%")),
        (Nd = o()),
        (Nn = a("td")),
        (Gd = r("39")),
        (Vd = o()),
        (ga = a("td")),
        (Tl = r("0.152%")),
        (jd = o()),
        (Pl = a("td")),
        (Ll = r("64")),
        (Jd = o()),
        (kl = a("td")),
        (Dl = r("0.0284%")),
        (Kd = o()),
        (Fl = a("td")),
        (Ol = r("89")),
        (zd = o()),
        (Il = a("td")),
        (rr = r("0.0047%")),
        (Xd = o()),
        (Ut = a("tr")),
        (Gn = a("td")),
        (Qd = r("15")),
        (Yd = o()),
        (Vn = a("td")),
        (Zd = r("0.76%")),
        (ec = o()),
        (jn = a("td")),
        (tc = r("40")),
        (ac = o()),
        (Jn = a("td")),
        (nc = r("0.138%")),
        (sc = o()),
        (Kn = a("td")),
        (rc = r("65")),
        (lc = o()),
        (ba = a("td")),
        (xl = r("0.0266%")),
        (oc = o()),
        (Al = a("td")),
        (Cl = r("90")),
        (ic = o()),
        ($l = a("td")),
        (Sl = r("0.0043%")),
        (dc = o()),
        (Nt = a("tr")),
        (Cs = a("td")),
        (cc = r("16")),
        (hc = o()),
        (zn = a("td")),
        (uc = r("0.72%")),
        (fc = o()),
        (fa = a("td")),
        (Hl = r("41")),
        (pc = o()),
        (Rl = a("td")),
        (Ml = r("0.131%")),
        (mc = o()),
        (ql = a("td")),
        (Bl = r("66")),
        (vc = o()),
        (Wl = a("td")),
        (Ul = r("0.0249%")),
        (gc = o()),
        (Nl = a("td")),
        (Gl = r("91")),
        (bc = o()),
        (Vl = a("td")),
        (Xn = r("0.0041%")),
        (yc = o()),
        (ut = a("tr")),
        (jl = a("td")),
        (_c = r("17")),
        (Jl = o()),
        (lr = a("td")),
        (_ = r("0.67%")),
        (Ec = o()),
        (ro = a("td")),
        (wc = r("42")),
        (pa = o()),
        (lo = a("td")),
        (Tc = r("0.125%")),
        (Pc = o()),
        (oo = a("td")),
        (Lc = r("67")),
        (kc = o()),
        (io = a("td")),
        (Dc = r("0.0232%")),
        (Fc = o()),
        (co = a("td")),
        (Qn = r("92")),
        (Oc = o()),
        (ho = a("td")),
        (Ic = r("0.0039%")),
        (xc = o()),
        (Kt = a("tr")),
        (Ea = a("td")),
        (Ac = r("18")),
        (Cc = o()),
        (uo = a("td")),
        ($c = r("0.63%")),
        (Sc = o()),
        (fo = a("td")),
        (rn = r("43")),
        (Hc = o()),
        (po = a("td")),
        (Rc = r("0.118%")),
        (Mc = o()),
        (mo = a("td")),
        (qc = r("68")),
        (ln = o()),
        (vo = a("td")),
        (Bc = r("0.0215%")),
        (Wc = o()),
        (go = a("td")),
        (Uc = r("93")),
        (Nc = o()),
        (bo = a("td")),
        (Yn = r("0.0037%")),
        (Gc = o()),
        (zt = a("tr")),
        (yo = a("td")),
        (Vc = r("19")),
        (jc = o()),
        (st = a("td")),
        (aa = r("0.59%")),
        (Jc = o()),
        (_o = a("td")),
        (Kc = r("44")),
        (zc = o()),
        (Eo = a("td")),
        (Xc = r("0.111%")),
        (Qc = o()),
        (wo = a("td")),
        (Yc = r("69")),
        (Zc = o()),
        (To = a("td")),
        (na = r("0.0198%")),
        (eh = o()),
        (Po = a("td")),
        (th = r("94")),
        (ah = o()),
        (Lo = a("td")),
        (nh = r("0.0034%")),
        (sh = o()),
        (Xt = a("tr")),
        (ko = a("td")),
        (rh = r("20")),
        (lh = o()),
        (Do = a("td")),
        (oh = r("0.55%")),
        (sa = o()),
        (Fo = a("td")),
        (ih = r("45")),
        (dh = o()),
        (Oo = a("td")),
        (ch = r("0.104%")),
        (hh = o()),
        (Io = a("td")),
        (uh = r("70")),
        (fh = o()),
        (Gt = a("td")),
        (ph = r("0.0180%")),
        (mh = o()),
        (xo = a("td")),
        (vh = r("95")),
        (gh = o()),
        (Ao = a("td")),
        (bh = r("0.0032%")),
        (yh = o()),
        (Qt = a("tr")),
        (Vt = a("td")),
        (_h = r("21")),
        (Eh = o()),
        (Co = a("td")),
        (wh = r("0.52%")),
        (Th = o()),
        ($o = a("td")),
        (Ph = r("46")),
        (Lh = o()),
        (So = a("td")),
        (kh = r("0.097%")),
        (Dh = o()),
        (jt = a("td")),
        (Fh = r("71")),
        (Oh = o()),
        (Ho = a("td")),
        (Ih = r("0.0172%")),
        (xh = o()),
        (Ro = a("td")),
        (Ah = r("96")),
        (Ch = o()),
        (Mo = a("td")),
        ($h = r("0.0030%")),
        (Sh = o()),
        (Ft = a("tr")),
        (qo = a("td")),
        (Hh = r("22")),
        (Rh = o()),
        (Pt = a("td")),
        (Bo = r("0.49%")),
        (Mh = o()),
        (Wo = a("td")),
        (qh = r("47")),
        (Bh = o()),
        (or = a("td")),
        (Wh = r("0.090%")),
        (Uh = o()),
        (ir = a("td")),
        (Nh = r("72")),
        (Gh = o()),
        (dr = a("td")),
        (Vh = r("0.0155%")),
        (jh = o()),
        (cr = a("td")),
        (Jh = r("97")),
        (Kh = o()),
        (hr = a("td")),
        (zh = r("0.0028%")),
        (Xh = o()),
        (Ot = a("tr")),
        (Uo = a("td")),
        (Qh = r("23")),
        (No = o()),
        (Go = a("td")),
        (Yh = r("0.47%")),
        (Vo = o()),
        (jo = a("td")),
        (Zh = r("48")),
        (eu = o()),
        (Jo = a("td")),
        (tu = r("0.083%")),
        (Zn = o()),
        (Ko = a("td")),
        (au = r("73")),
        (nu = o()),
        (zo = a("td")),
        (su = r("0.0146%")),
        (ru = o()),
        (Xo = a("td")),
        (lu = r("98")),
        (ou = o()),
        (Qo = a("td")),
        (es = r("0.0026%")),
        (iu = o()),
        (Yt = a("tr")),
        (Yo = a("td")),
        (du = r("24")),
        (cu = o()),
        (wa = a("td")),
        (hu = r("0.44%")),
        (uu = o()),
        (Zo = a("td")),
        (fu = r("49")),
        (pu = o()),
        (ur = a("td")),
        (mu = r("0.076%")),
        (qu = o()),
        (Eu = a("td")),
        (Bu = r("74")),
        (Wu = o()),
        (wu = a("td")),
        (Uu = r("0.0137%")),
        (Nu = o()),
        (Tu = a("td")),
        (Gu = r("99")),
        (Vu = o()),
        (Pu = a("td")),
        (ju = r("0.0024%")),
        (Ju = o()),
        (ma = a("tr")),
        (Lu = a("td")),
        (Ku = r("25")),
        (zu = o()),
        (ku = a("td")),
        (Xu = r("0.42%")),
        (Qu = o()),
        (Du = a("td")),
        (Yu = r("50")),
        (Zu = o()),
        (Fu = a("td")),
        (ef = r("0.070%")),
        (tf = o()),
        (Ou = a("td")),
        (af = r("75")),
        (nf = o()),
        (Iu = a("td")),
        (sf = r("0.0129%")),
        (rf = o()),
        (xu = a("td")),
        (lf = r("100")),
        (of = o()),
        (Au = a("td")),
        (df = r("0.0021%")),
        (cf = o()),
        (vu = a("p")),
        (hf =
          r(`To ensure rewards are paid for active participation, a user would need to
      do the following to qualify for the following OpenFPL gameplay rewards:`)),
        (uf = o()),
        (fr = a("ul")),
        (Cu = a("li")),
        (ff =
          r(`A user must have made at least 2 changes in a month to qualify for that
        month's club leaderboard rewards and monthly ATH record rewards.`)),
        (pf = o()),
        ($u = a("li")),
        (mf =
          r(`A user must have made at least 1 change in a gameweek to qualify for
        that week's leaderboard rewards, highest-scoring match player rewards
        and weekly ATH record rewards.`)),
        (vf = o()),
        (Su = a("li")),
        (gf =
          r(`Rewards for the season total, most valuable team have and annual ATH
        have no entry restrictions as it is based on the cumulative action of
        managers transfers throughout the season.`)),
        (bf = o()),
        (gu = a("h2")),
        (yf = r("Governance Rewards (25%)")),
        (_f = o()),
        (bu = a("p")),
        (Ef =
          r(`OpenFPL values neuron holders' contributions to maintaining up-to-date
      Premier League data. Rewards are given for raising and voting on essential
      proposals, such as scheduling, player transfers, and updating player
      information. Failed proposals incur a 10 $FPL cost, contributing to the
      DAO’s treasury.`)),
        (wf = o()),
        (yu = a("p")),
        (Tf =
          r(`The OpenFPL DAO is an innovative approach to fantasy football, combining
      real-time data accuracy with rewarding community involvement. By aligning
      rewards with active participation, OpenFPL ensures a vibrant, informed,
      and engaged user base.`)),
        this.h();
    },
    l(Hu) {
      h = n(Hu, "DIV", { class: !0 });
      var Ru = s(h);
      d = n(Ru, "DIV", { class: !0 });
      var rt = s(d);
      u = n(rt, "H1", { class: !0 });
      var Pf = s(u);
      (w = l(Pf, "OpenFPL DAO")),
        Pf.forEach(t),
        (he = i(rt)),
        (T = n(rt, "P", { class: !0 }));
      var Lf = s(T);
      ($ = l(
        Lf,
        `OpenFPL functions entirely on-chain as a DAO, aspiring to operate under
      the Internet Computer’s Service Nervous System. The DAO is structured to
      run in parallel with the Premier League season, relying on input from its
      neuron holders who are rewarded for maintaining independence from
      third-party services.`
      )),
        Lf.forEach(t),
        (le = i(rt)),
        (P = n(rt, "H2", { class: !0 }));
      var kf = s(P);
      (Ie = l(kf, "DAO Reward Structure")),
        kf.forEach(t),
        (Te = i(rt)),
        (g = n(rt, "P", { class: !0 }));
      var Df = s(g);
      (ue = l(
        Df,
        `The DAO incentivizes participation through monthly minting of new FPL
      tokens, calculated annually as 2.5% of the total $FPL supply as of August
      1st. These tokens are allocated to:`
      )),
        Df.forEach(t),
        (fe = i(rt)),
        (L = n(rt, "UL", { class: !0 }));
      var Mu = s(L);
      pe = n(Mu, "LI", {});
      var Ff = s(pe);
      (xe = l(Ff, "Gameplay Rewards (75%)")),
        Ff.forEach(t),
        (A = i(Mu)),
        (me = n(Mu, "LI", {}));
      var Of = s(me);
      (ve = l(Of, "Governance Rewards (25%)")),
        Of.forEach(t),
        Mu.forEach(t),
        (F = i(rt)),
        (oe = n(rt, "H2", { class: !0 }));
      var If = s(oe);
      (Ae = l(If, "Gameplay Rewards (75%)")),
        If.forEach(t),
        (C = i(rt)),
        (ie = n(rt, "P", { class: !0 }));
      var xf = s(ie);
      (Y = l(
        xf,
        `The DAO is designed to reward users for their expertise in fantasy
      football, with rewards distributed weekly, monthly, and annually based on
      performance. The rewards are tiered to encourage ongoing engagement.
      Here’s the breakdown:`
      )),
        xf.forEach(t),
        (O = i(rt)),
        (k = n(rt, "UL", { class: !0 }));
      var ts = s(k);
      Z = n(ts, "LI", {});
      var Af = s(Z);
      (U = l(
        Af,
        `Global Season Leaderboard Rewards: 30% for the top 100 global season
        positions.`
      )),
        Af.forEach(t),
        (Ce = i(ts)),
        (de = n(ts, "LI", {}));
      var Cf = s(de);
      (y = l(
        Cf,
        `Club Monthly Leaderboard Rewards: 20% for the top 100 in each monthly
        club leaderboard, adjusted for the number of fans in each club.`
      )),
        Cf.forEach(t),
        (ye = i(ts)),
        (Pe = n(ts, "LI", {}));
      var $f = s(Pe);
      (S = l(
        $f,
        "Global Weekly Leaderboard Rewards: 15% for the top 100 weekly positions."
      )),
        $f.forEach(t),
        (_e = i(ts)),
        (Le = n(ts, "LI", {}));
      var Sf = s(Le);
      (j = l(
        Sf,
        `Most Valuable Team Rewards: 10% for the top 100 most valuable teams at
        season's end.`
      )),
        Sf.forEach(t),
        (Ee = i(ts)),
        (Ue = n(ts, "LI", {}));
      var Hf = s(Ue);
      (ee = l(
        Hf,
        `Highest Scoring Match Player Rewards: 10% split among managers selecting
        the highest-scoring player in a fixture.`
      )),
        Hf.forEach(t),
        (K = i(ts)),
        (ge = n(ts, "LI", {}));
      var Rf = s(ge);
      (J = l(
        Rf,
        `Weekly/Monthly/Season ATH Score Rewards: 5% each, reserved for breaking
        all-time high scores in respective categories.`
      )),
        Rf.forEach(t),
        ts.forEach(t),
        (Re = i(rt)),
        (ke = n(rt, "P", { class: !0 }));
      var Mf = s(ke);
      (te = l(
        Mf,
        `A user is rewarded for their leaderboard position across the top 100
      positions. The following is a breakdown of the reward share for each
      position:`
      )),
        Mf.forEach(t),
        ($e = i(rt)),
        (p = n(rt, "TABLE", { class: !0 }));
      var q = s(p);
      D = n(q, "TR", { class: !0 });
      var Ta = s(D);
      we = n(Ta, "TH", {});
      var qf = s(we);
      (Ne = l(qf, "Pos")), qf.forEach(t), (ae = i(Ta)), (Q = n(Ta, "TH", {}));
      var Bf = s(Q);
      (N = l(Bf, "Share")), Bf.forEach(t), (R = i(Ta)), (M = n(Ta, "TH", {}));
      var Wf = s(M);
      (z = l(Wf, "Pos")), Wf.forEach(t), (ne = i(Ta)), (Ge = n(Ta, "TH", {}));
      var Uf = s(Ge);
      (De = l(Uf, "Share")), Uf.forEach(t), (se = i(Ta)), (E = n(Ta, "TH", {}));
      var Nf = s(E);
      (H = l(Nf, "Pos")), Nf.forEach(t), (G = i(Ta)), (X = n(Ta, "TH", {}));
      var Gf = s(X);
      (Fe = l(Gf, "Share")), Gf.forEach(t), (I = i(Ta)), (Ke = n(Ta, "TH", {}));
      var Vf = s(Ke);
      (Me = l(Vf, "Pos")), Vf.forEach(t), (re = i(Ta)), (ze = n(Ta, "TH", {}));
      var jf = s(ze);
      (Oe = l(jf, "Share")),
        jf.forEach(t),
        Ta.forEach(t),
        (ce = i(q)),
        (f = n(q, "TR", { class: !0 }));
      var Pa = s(f);
      Se = n(Pa, "TD", {});
      var Jf = s(Se);
      (V = l(Jf, "1")), Jf.forEach(t), (Qe = i(Pa)), (He = n(Pa, "TD", {}));
      var Kf = s(He);
      (qe = l(Kf, "36.09%")),
        Kf.forEach(t),
        (je = i(Pa)),
        (Be = n(Pa, "TD", {}));
      var zf = s(Be);
      (b = l(zf, "26")), zf.forEach(t), (at = i(Pa)), (nt = n(Pa, "TD", {}));
      var Xf = s(nt);
      (Ye = l(Xf, "0.391%")),
        Xf.forEach(t),
        (ft = i(Pa)),
        (B = n(Pa, "TD", {}));
      var Qf = s(B);
      (Ze = l(Qf, "51")), Qf.forEach(t), (v = i(Pa)), (ot = n(Pa, "TD", {}));
      var Yf = s(ot);
      (pt = l(Yf, "0.0662%")),
        Yf.forEach(t),
        (m = i(Pa)),
        (Lt = n(Pa, "TD", {}));
      var Zf = s(Lt);
      (et = l(Zf, "76")), Zf.forEach(t), (Ve = i(Pa)), (mt = n(Pa, "TD", {}));
      var ep = s(mt);
      (kt = l(ep, "0.012%")),
        ep.forEach(t),
        Pa.forEach(t),
        (Dt = i(q)),
        (be = n(q, "TR", { class: !0 }));
      var La = s(be);
      It = n(La, "TD", {});
      var tp = s(It);
      (xt = l(tp, "2")), tp.forEach(t), (Zt = i(La)), (At = n(La, "TD", {}));
      var ap = s(At);
      (ia = l(ap, "18.91%")),
        ap.forEach(t),
        (ea = i(La)),
        (Ct = n(La, "TD", {}));
      var np = s(Ct);
      (da = l(np, "27")), np.forEach(t), (ta = i(La)), ($t = n(La, "TD", {}));
      var sp = s($t);
      (ca = l(sp, "0.365%")),
        sp.forEach(t),
        (ha = i(La)),
        (ra = n(La, "TD", {}));
      var rp = s(ra);
      (ya = l(rp, "52")), rp.forEach(t), (ua = i(La)), (la = n(La, "TD", {}));
      var lp = s(la);
      (_a = l(lp, "0.0627%")),
        lp.forEach(t),
        (gt = i(La)),
        (St = n(La, "TD", {}));
      var op = s(St);
      (Xa = l(op, "77")), op.forEach(t), (Qa = i(La)), (oa = n(La, "TD", {}));
      var ip = s(oa);
      (Ya = l(ip, "0.0112%")),
        ip.forEach(t),
        La.forEach(t),
        (as = i(q)),
        (Je = n(q, "TR", { class: !0 }));
      var ka = s(Je);
      on = n(ka, "TD", {});
      var dp = s(on);
      (dn = l(dp, "3")), dp.forEach(t), (Za = i(ka)), (W = n(ka, "TD", {}));
      var cp = s(W);
      (Hs = l(cp, "10.32%")),
        cp.forEach(t),
        (cn = i(ka)),
        (mn = n(ka, "TD", {}));
      var hp = s(mn);
      (Rs = l(hp, "28")), hp.forEach(t), (We = i(ka)), (tt = n(ka, "TD", {}));
      var up = s(tt);
      (hn = l(up, "0.339%")),
        up.forEach(t),
        (Ms = i(ka)),
        (vn = n(ka, "TD", {}));
      var fp = s(vn);
      (gn = l(fp, "53")), fp.forEach(t), (it = i(ka)), (bn = n(ka, "TD", {}));
      var pp = s(bn);
      (yn = l(pp, "0.0593%")),
        pp.forEach(t),
        (qs = i(ka)),
        (_n = n(ka, "TD", {}));
      var mp = s(_n);
      (En = l(mp, "78")), mp.forEach(t), (Bs = i(ka)), (wn = n(ka, "TD", {}));
      var vp = s(wn);
      (Tn = l(vp, "0.0103%")),
        vp.forEach(t),
        ka.forEach(t),
        (Ws = i(q)),
        (vt = n(q, "TR", { class: !0 }));
      var Da = s(vt);
      en = n(Da, "TD", {});
      var gp = s(en);
      (va = l(gp, "4")), gp.forEach(t), (Us = i(Da)), (tn = n(Da, "TD", {}));
      var bp = s(tn);
      (Ns = l(bp, "6.02%")),
        bp.forEach(t),
        (Gs = i(Da)),
        (an = n(Da, "TD", {}));
      var yp = s(an);
      (Vs = l(yp, "29")), yp.forEach(t), (js = i(Da)), (Xe = n(Da, "TD", {}));
      var _p = s(Xe);
      (Js = l(_p, "0.314%")),
        _p.forEach(t),
        (Ks = i(Da)),
        (za = n(Da, "TD", {}));
      var Ep = s(za);
      (un = l(Ep, "54")), Ep.forEach(t), (ns = i(Da)), (Pn = n(Da, "TD", {}));
      var wp = s(Pn);
      (lt = l(wp, "0.0558%")),
        wp.forEach(t),
        (fn = i(Da)),
        (Ln = n(Da, "TD", {}));
      var Tp = s(Ln);
      (zs = l(Tp, "79")), Tp.forEach(t), (kn = i(Da)), (Dn = n(Da, "TD", {}));
      var Pp = s(Dn);
      (Xs = l(Pp, "0.0095%")),
        Pp.forEach(t),
        Da.forEach(t),
        (pr = i(q)),
        (Ht = n(q, "TR", { class: !0 }));
      var Fa = s(Ht);
      mr = n(Fa, "TD", {});
      var Lp = s(mr);
      (vr = l(Lp, "5")), Lp.forEach(t), (ti = i(Fa)), (gr = n(Fa, "TD", {}));
      var kp = s(gr);
      (br = l(kp, "3.87%")),
        kp.forEach(t),
        (ai = i(Fa)),
        (yr = n(Fa, "TD", {}));
      var Dp = s(yr);
      (_r = l(Dp, "30")), Dp.forEach(t), (ni = i(Fa)), (Er = n(Fa, "TD", {}));
      var Fp = s(Er);
      (wr = l(Fp, "0.288%")),
        Fp.forEach(t),
        (si = i(Fa)),
        (Tr = n(Fa, "TD", {}));
      var Op = s(Tr);
      (Pr = l(Op, "55")), Op.forEach(t), (ri = i(Fa)), (Lr = n(Fa, "TD", {}));
      var Ip = s(Lr);
      (kr = l(Ip, "0.0524%")),
        Ip.forEach(t),
        (li = i(Fa)),
        (Dr = n(Fa, "TD", {}));
      var xp = s(Dr);
      (Qs = l(xp, "80")), xp.forEach(t), (Ys = i(Fa)), (Zs = n(Fa, "TD", {}));
      var Ap = s(Zs);
      (oi = l(Ap, "0.0086%")),
        Ap.forEach(t),
        Fa.forEach(t),
        (er = i(q)),
        (dt = n(q, "TR", { class: !0 }));
      var Oa = s(dt);
      Fr = n(Oa, "TD", {});
      var Cp = s(Fr);
      (ii = l(Cp, "6")), Cp.forEach(t), (bt = i(Oa)), (Fn = n(Oa, "TD", {}));
      var $p = s(Fn);
      (di = l($p, "2.80%")),
        $p.forEach(t),
        (ci = i(Oa)),
        (ss = n(Oa, "TD", {}));
      var Sp = s(ss);
      (hi = l(Sp, "31")), Sp.forEach(t), (ui = i(Oa)), (rs = n(Oa, "TD", {}));
      var Hp = s(rs);
      (fi = l(Hp, "0.262%")),
        Hp.forEach(t),
        (pi = i(Oa)),
        (ls = n(Oa, "TD", {}));
      var Rp = s(ls);
      (mi = l(Rp, "56")), Rp.forEach(t), (vi = i(Oa)), (os = n(Oa, "TD", {}));
      var Mp = s(os);
      (gi = l(Mp, "0.0490%")),
        Mp.forEach(t),
        (bi = i(Oa)),
        (is = n(Oa, "TD", {}));
      var qp = s(is);
      (yi = l(qp, "81")), qp.forEach(t), (_i = i(Oa)), (ds = n(Oa, "TD", {}));
      var Bp = s(ds);
      (Ei = l(Bp, "0.0082%")),
        Bp.forEach(t),
        Oa.forEach(t),
        (wi = i(q)),
        (yt = n(q, "TR", { class: !0 }));
      var Ia = s(yt);
      Or = n(Ia, "TD", {});
      var Wp = s(Or);
      (Ti = l(Wp, "7")), Wp.forEach(t), (Ir = i(Ia)), (xr = n(Ia, "TD", {}));
      var Up = s(xr);
      (Pi = l(Up, "2.26%")),
        Up.forEach(t),
        (_t = i(Ia)),
        (On = n(Ia, "TD", {}));
      var Np = s(On);
      (Li = l(Np, "32")), Np.forEach(t), (ki = i(Ia)), (cs = n(Ia, "TD", {}));
      var Gp = s(cs);
      (Di = l(Gp, "0.248%")),
        Gp.forEach(t),
        (Fi = i(Ia)),
        (hs = n(Ia, "TD", {}));
      var Vp = s(hs);
      (Oi = l(Vp, "57")), Vp.forEach(t), (Ii = i(Ia)), (us = n(Ia, "TD", {}));
      var jp = s(us);
      (xi = l(jp, "0.0455%")),
        jp.forEach(t),
        (Ai = i(Ia)),
        (fs = n(Ia, "TD", {}));
      var Jp = s(fs);
      (Ci = l(Jp, "82")), Jp.forEach(t), ($i = i(Ia)), (ps = n(Ia, "TD", {}));
      var Kp = s(ps);
      (Si = l(Kp, "0.0077%")),
        Kp.forEach(t),
        Ia.forEach(t),
        (Hi = i(q)),
        (Et = n(q, "TR", { class: !0 }));
      var xa = s(Et);
      Ar = n(xa, "TD", {});
      var zp = s(Ar);
      (Ri = l(zp, "8")), zp.forEach(t), (Cr = i(xa)), ($r = n(xa, "TD", {}));
      var Xp = s($r);
      (Mi = l(Xp, "1.83%")),
        Xp.forEach(t),
        (Sr = i(xa)),
        (Hr = n(xa, "TD", {}));
      var Qp = s(Hr);
      (qi = l(Qp, "33")), Qp.forEach(t), (wt = i(xa)), (In = n(xa, "TD", {}));
      var Yp = s(In);
      (Bi = l(Yp, "0.235%")),
        Yp.forEach(t),
        (Wi = i(xa)),
        (ms = n(xa, "TD", {}));
      var Zp = s(ms);
      (Ui = l(Zp, "58")), Zp.forEach(t), (Ni = i(xa)), (vs = n(xa, "TD", {}));
      var em = s(vs);
      (Gi = l(em, "0.0421%")),
        em.forEach(t),
        (Vi = i(xa)),
        (gs = n(xa, "TD", {}));
      var tm = s(gs);
      (ji = l(tm, "83")), tm.forEach(t), (Ji = i(xa)), (bs = n(xa, "TD", {}));
      var am = s(bs);
      (Ki = l(am, "0.0073%")),
        am.forEach(t),
        xa.forEach(t),
        (zi = i(q)),
        (Tt = n(q, "TR", { class: !0 }));
      var Aa = s(Tt);
      Rr = n(Aa, "TD", {});
      var nm = s(Rr);
      (Xi = l(nm, "9")), nm.forEach(t), (Mr = i(Aa)), (qr = n(Aa, "TD", {}));
      var sm = s(qr);
      (Qi = l(sm, "1.51%")),
        sm.forEach(t),
        (Br = i(Aa)),
        (Wr = n(Aa, "TD", {}));
      var rm = s(Wr);
      (Yi = l(rm, "34")), rm.forEach(t), (Ur = i(Aa)), (Nr = n(Aa, "TD", {}));
      var lm = s(Nr);
      (Zi = l(lm, "0.221%")),
        lm.forEach(t),
        (tr = i(Aa)),
        (pn = n(Aa, "TD", {}));
      var om = s(pn);
      (ao = l(om, "59")), om.forEach(t), (ed = i(Aa)), (ct = n(Aa, "TD", {}));
      var im = s(ct);
      (ar = l(im, "0.0387%")),
        im.forEach(t),
        (td = i(Aa)),
        (Gr = n(Aa, "TD", {}));
      var dm = s(Gr);
      (Vr = l(dm, "84")), dm.forEach(t), (ad = i(Aa)), (jr = n(Aa, "TD", {}));
      var cm = s(jr);
      (Jr = l(cm, "0.0069%")),
        cm.forEach(t),
        Aa.forEach(t),
        (nd = i(q)),
        (Rt = n(q, "TR", { class: !0 }));
      var Ca = s(Rt);
      ys = n(Ca, "TD", {});
      var hm = s(ys);
      (sd = l(hm, "10")), hm.forEach(t), (rd = i(Ca)), (_s = n(Ca, "TD", {}));
      var um = s(_s);
      (ld = l(um, "1.30%")),
        um.forEach(t),
        (od = i(Ca)),
        (Es = n(Ca, "TD", {}));
      var fm = s(Es);
      (id = l(fm, "35")), fm.forEach(t), (dd = i(Ca)), (ws = n(Ca, "TD", {}));
      var pm = s(ws);
      (cd = l(pm, "0.207%")),
        pm.forEach(t),
        (hd = i(Ca)),
        (Ts = n(Ca, "TD", {}));
      var mm = s(Ts);
      (ud = l(mm, "60")), mm.forEach(t), (fd = i(Ca)), (Ps = n(Ca, "TD", {}));
      var vm = s(Ps);
      (pd = l(vm, "0.0352%")),
        vm.forEach(t),
        (md = i(Ca)),
        (xn = n(Ca, "TD", {}));
      var gm = s(xn);
      (Ls = l(gm, "85")), gm.forEach(t), (no = i(Ca)), (Kr = n(Ca, "TD", {}));
      var bm = s(Kr);
      (An = l(bm, "0.0064%")),
        bm.forEach(t),
        Ca.forEach(t),
        (ks = i(q)),
        (Mt = n(q, "TR", { class: !0 }));
      var $a = s(Mt);
      zr = n($a, "TD", {});
      var ym = s(zr);
      (Xr = l(ym, "11")), ym.forEach(t), (vd = i($a)), (Qr = n($a, "TD", {}));
      var _m = s(Qr);
      (nr = l(_m, "1.19%")),
        _m.forEach(t),
        (gd = i($a)),
        (Yr = n($a, "TD", {}));
      var Em = s(Yr);
      (ht = l(Em, "36")), Em.forEach(t), (Cn = i($a)), (Ds = n($a, "TD", {}));
      var wm = s(Ds);
      (bd = l(wm, "0.193%")),
        wm.forEach(t),
        (yd = i($a)),
        (Fs = n($a, "TD", {}));
      var Tm = s(Fs);
      (_d = l(Tm, "61")), Tm.forEach(t), (Ed = i($a)), ($n = n($a, "TD", {}));
      var Pm = s($n);
      (sr = l(Pm, "0.0335%")),
        Pm.forEach(t),
        (so = i($a)),
        (Zr = n($a, "TD", {}));
      var Lm = s(Zr);
      (Sn = l(Lm, "86")), Lm.forEach(t), (el = i($a)), (tl = n($a, "TD", {}));
      var km = s(tl);
      (wd = l(km, "0.0060%")),
        km.forEach(t),
        $a.forEach(t),
        (al = i(q)),
        (qt = n(q, "TR", { class: !0 }));
      var Sa = s(qt);
      nl = n(Sa, "TD", {});
      var Dm = s(nl);
      (Hn = l(Dm, "12")), Dm.forEach(t), (sl = i(Sa)), (rl = n(Sa, "TD", {}));
      var Fm = s(rl);
      (Td = l(Fm, "1.08%")),
        Fm.forEach(t),
        (ll = i(Sa)),
        (ol = n(Sa, "TD", {}));
      var Om = s(ol);
      (Pd = l(Om, "37")), Om.forEach(t), (Rn = i(Sa)), (Os = n(Sa, "TD", {}));
      var Im = s(Os);
      (Ld = l(Im, "0.180%")),
        Im.forEach(t),
        (kd = i(Sa)),
        (Is = n(Sa, "TD", {}));
      var xm = s(Is);
      (Dd = l(xm, "62")), xm.forEach(t), (Fd = i(Sa)), (nn = n(Sa, "TD", {}));
      var Am = s(nn);
      (il = l(Am, "0.0318%")),
        Am.forEach(t),
        (Od = i(Sa)),
        (dl = n(Sa, "TD", {}));
      var Cm = s(dl);
      (cl = l(Cm, "87")), Cm.forEach(t), (Id = i(Sa)), (hl = n(Sa, "TD", {}));
      var $m = s(hl);
      (Mn = l($m, "0.0056%")),
        $m.forEach(t),
        Sa.forEach(t),
        (ul = i(q)),
        (Bt = n(q, "TR", { class: !0 }));
      var Ha = s(Bt);
      fl = n(Ha, "TD", {});
      var Sm = s(fl);
      (pl = l(Sm, "13")), Sm.forEach(t), (xd = i(Ha)), (ml = n(Ha, "TD", {}));
      var Hm = s(ml);
      (qn = l(Hm, "0.98%")),
        Hm.forEach(t),
        (vl = i(Ha)),
        (gl = n(Ha, "TD", {}));
      var Rm = s(gl);
      (Ad = l(Rm, "38")), Rm.forEach(t), (bl = i(Ha)), (yl = n(Ha, "TD", {}));
      var Mm = s(yl);
      (Cd = l(Mm, "0.166%")),
        Mm.forEach(t),
        (Bn = i(Ha)),
        (xs = n(Ha, "TD", {}));
      var qm = s(xs);
      ($d = l(qm, "63")), qm.forEach(t), (Sd = i(Ha)), (As = n(Ha, "TD", {}));
      var Bm = s(As);
      (Hd = l(Bm, "0.0301%")),
        Bm.forEach(t),
        (Rd = i(Ha)),
        (sn = n(Ha, "TD", {}));
      var Wm = s(sn);
      (_l = l(Wm, "88")), Wm.forEach(t), (Md = i(Ha)), (El = n(Ha, "TD", {}));
      var Um = s(El);
      (wl = l(Um, "0.0052%")),
        Um.forEach(t),
        Ha.forEach(t),
        (qd = i(q)),
        (Wt = n(q, "TR", { class: !0 }));
      var Ra = s(Wt);
      Wn = n(Ra, "TD", {});
      var Nm = s(Wn);
      (Bd = l(Nm, "14")), Nm.forEach(t), (Wd = i(Ra)), (Un = n(Ra, "TD", {}));
      var Gm = s(Un);
      (Ud = l(Gm, "0.87%")),
        Gm.forEach(t),
        (Nd = i(Ra)),
        (Nn = n(Ra, "TD", {}));
      var Vm = s(Nn);
      (Gd = l(Vm, "39")), Vm.forEach(t), (Vd = i(Ra)), (ga = n(Ra, "TD", {}));
      var jm = s(ga);
      (Tl = l(jm, "0.152%")),
        jm.forEach(t),
        (jd = i(Ra)),
        (Pl = n(Ra, "TD", {}));
      var Jm = s(Pl);
      (Ll = l(Jm, "64")), Jm.forEach(t), (Jd = i(Ra)), (kl = n(Ra, "TD", {}));
      var Km = s(kl);
      (Dl = l(Km, "0.0284%")),
        Km.forEach(t),
        (Kd = i(Ra)),
        (Fl = n(Ra, "TD", {}));
      var zm = s(Fl);
      (Ol = l(zm, "89")), zm.forEach(t), (zd = i(Ra)), (Il = n(Ra, "TD", {}));
      var Xm = s(Il);
      (rr = l(Xm, "0.0047%")),
        Xm.forEach(t),
        Ra.forEach(t),
        (Xd = i(q)),
        (Ut = n(q, "TR", { class: !0 }));
      var Ma = s(Ut);
      Gn = n(Ma, "TD", {});
      var Qm = s(Gn);
      (Qd = l(Qm, "15")), Qm.forEach(t), (Yd = i(Ma)), (Vn = n(Ma, "TD", {}));
      var Ym = s(Vn);
      (Zd = l(Ym, "0.76%")),
        Ym.forEach(t),
        (ec = i(Ma)),
        (jn = n(Ma, "TD", {}));
      var Zm = s(jn);
      (tc = l(Zm, "40")), Zm.forEach(t), (ac = i(Ma)), (Jn = n(Ma, "TD", {}));
      var ev = s(Jn);
      (nc = l(ev, "0.138%")),
        ev.forEach(t),
        (sc = i(Ma)),
        (Kn = n(Ma, "TD", {}));
      var tv = s(Kn);
      (rc = l(tv, "65")), tv.forEach(t), (lc = i(Ma)), (ba = n(Ma, "TD", {}));
      var av = s(ba);
      (xl = l(av, "0.0266%")),
        av.forEach(t),
        (oc = i(Ma)),
        (Al = n(Ma, "TD", {}));
      var nv = s(Al);
      (Cl = l(nv, "90")), nv.forEach(t), (ic = i(Ma)), ($l = n(Ma, "TD", {}));
      var sv = s($l);
      (Sl = l(sv, "0.0043%")),
        sv.forEach(t),
        Ma.forEach(t),
        (dc = i(q)),
        (Nt = n(q, "TR", { class: !0 }));
      var qa = s(Nt);
      Cs = n(qa, "TD", {});
      var rv = s(Cs);
      (cc = l(rv, "16")), rv.forEach(t), (hc = i(qa)), (zn = n(qa, "TD", {}));
      var lv = s(zn);
      (uc = l(lv, "0.72%")),
        lv.forEach(t),
        (fc = i(qa)),
        (fa = n(qa, "TD", {}));
      var ov = s(fa);
      (Hl = l(ov, "41")), ov.forEach(t), (pc = i(qa)), (Rl = n(qa, "TD", {}));
      var iv = s(Rl);
      (Ml = l(iv, "0.131%")),
        iv.forEach(t),
        (mc = i(qa)),
        (ql = n(qa, "TD", {}));
      var dv = s(ql);
      (Bl = l(dv, "66")), dv.forEach(t), (vc = i(qa)), (Wl = n(qa, "TD", {}));
      var cv = s(Wl);
      (Ul = l(cv, "0.0249%")),
        cv.forEach(t),
        (gc = i(qa)),
        (Nl = n(qa, "TD", {}));
      var hv = s(Nl);
      (Gl = l(hv, "91")), hv.forEach(t), (bc = i(qa)), (Vl = n(qa, "TD", {}));
      var uv = s(Vl);
      (Xn = l(uv, "0.0041%")),
        uv.forEach(t),
        qa.forEach(t),
        (yc = i(q)),
        (ut = n(q, "TR", { class: !0 }));
      var Ba = s(ut);
      jl = n(Ba, "TD", {});
      var fv = s(jl);
      (_c = l(fv, "17")), fv.forEach(t), (Jl = i(Ba)), (lr = n(Ba, "TD", {}));
      var pv = s(lr);
      (_ = l(pv, "0.67%")), pv.forEach(t), (Ec = i(Ba)), (ro = n(Ba, "TD", {}));
      var mv = s(ro);
      (wc = l(mv, "42")), mv.forEach(t), (pa = i(Ba)), (lo = n(Ba, "TD", {}));
      var vv = s(lo);
      (Tc = l(vv, "0.125%")),
        vv.forEach(t),
        (Pc = i(Ba)),
        (oo = n(Ba, "TD", {}));
      var gv = s(oo);
      (Lc = l(gv, "67")), gv.forEach(t), (kc = i(Ba)), (io = n(Ba, "TD", {}));
      var bv = s(io);
      (Dc = l(bv, "0.0232%")),
        bv.forEach(t),
        (Fc = i(Ba)),
        (co = n(Ba, "TD", {}));
      var yv = s(co);
      (Qn = l(yv, "92")), yv.forEach(t), (Oc = i(Ba)), (ho = n(Ba, "TD", {}));
      var _v = s(ho);
      (Ic = l(_v, "0.0039%")),
        _v.forEach(t),
        Ba.forEach(t),
        (xc = i(q)),
        (Kt = n(q, "TR", { class: !0 }));
      var Wa = s(Kt);
      Ea = n(Wa, "TD", {});
      var Ev = s(Ea);
      (Ac = l(Ev, "18")), Ev.forEach(t), (Cc = i(Wa)), (uo = n(Wa, "TD", {}));
      var wv = s(uo);
      ($c = l(wv, "0.63%")),
        wv.forEach(t),
        (Sc = i(Wa)),
        (fo = n(Wa, "TD", {}));
      var Tv = s(fo);
      (rn = l(Tv, "43")), Tv.forEach(t), (Hc = i(Wa)), (po = n(Wa, "TD", {}));
      var Pv = s(po);
      (Rc = l(Pv, "0.118%")),
        Pv.forEach(t),
        (Mc = i(Wa)),
        (mo = n(Wa, "TD", {}));
      var Lv = s(mo);
      (qc = l(Lv, "68")), Lv.forEach(t), (ln = i(Wa)), (vo = n(Wa, "TD", {}));
      var kv = s(vo);
      (Bc = l(kv, "0.0215%")),
        kv.forEach(t),
        (Wc = i(Wa)),
        (go = n(Wa, "TD", {}));
      var Dv = s(go);
      (Uc = l(Dv, "93")), Dv.forEach(t), (Nc = i(Wa)), (bo = n(Wa, "TD", {}));
      var Fv = s(bo);
      (Yn = l(Fv, "0.0037%")),
        Fv.forEach(t),
        Wa.forEach(t),
        (Gc = i(q)),
        (zt = n(q, "TR", { class: !0 }));
      var Ua = s(zt);
      yo = n(Ua, "TD", {});
      var Ov = s(yo);
      (Vc = l(Ov, "19")), Ov.forEach(t), (jc = i(Ua)), (st = n(Ua, "TD", {}));
      var Iv = s(st);
      (aa = l(Iv, "0.59%")),
        Iv.forEach(t),
        (Jc = i(Ua)),
        (_o = n(Ua, "TD", {}));
      var xv = s(_o);
      (Kc = l(xv, "44")), xv.forEach(t), (zc = i(Ua)), (Eo = n(Ua, "TD", {}));
      var Av = s(Eo);
      (Xc = l(Av, "0.111%")),
        Av.forEach(t),
        (Qc = i(Ua)),
        (wo = n(Ua, "TD", {}));
      var Cv = s(wo);
      (Yc = l(Cv, "69")), Cv.forEach(t), (Zc = i(Ua)), (To = n(Ua, "TD", {}));
      var $v = s(To);
      (na = l($v, "0.0198%")),
        $v.forEach(t),
        (eh = i(Ua)),
        (Po = n(Ua, "TD", {}));
      var Sv = s(Po);
      (th = l(Sv, "94")), Sv.forEach(t), (ah = i(Ua)), (Lo = n(Ua, "TD", {}));
      var Hv = s(Lo);
      (nh = l(Hv, "0.0034%")),
        Hv.forEach(t),
        Ua.forEach(t),
        (sh = i(q)),
        (Xt = n(q, "TR", { class: !0 }));
      var Na = s(Xt);
      ko = n(Na, "TD", {});
      var Rv = s(ko);
      (rh = l(Rv, "20")), Rv.forEach(t), (lh = i(Na)), (Do = n(Na, "TD", {}));
      var Mv = s(Do);
      (oh = l(Mv, "0.55%")),
        Mv.forEach(t),
        (sa = i(Na)),
        (Fo = n(Na, "TD", {}));
      var qv = s(Fo);
      (ih = l(qv, "45")), qv.forEach(t), (dh = i(Na)), (Oo = n(Na, "TD", {}));
      var Bv = s(Oo);
      (ch = l(Bv, "0.104%")),
        Bv.forEach(t),
        (hh = i(Na)),
        (Io = n(Na, "TD", {}));
      var Wv = s(Io);
      (uh = l(Wv, "70")), Wv.forEach(t), (fh = i(Na)), (Gt = n(Na, "TD", {}));
      var Uv = s(Gt);
      (ph = l(Uv, "0.0180%")),
        Uv.forEach(t),
        (mh = i(Na)),
        (xo = n(Na, "TD", {}));
      var Nv = s(xo);
      (vh = l(Nv, "95")), Nv.forEach(t), (gh = i(Na)), (Ao = n(Na, "TD", {}));
      var Gv = s(Ao);
      (bh = l(Gv, "0.0032%")),
        Gv.forEach(t),
        Na.forEach(t),
        (yh = i(q)),
        (Qt = n(q, "TR", { class: !0 }));
      var Ga = s(Qt);
      Vt = n(Ga, "TD", {});
      var Vv = s(Vt);
      (_h = l(Vv, "21")), Vv.forEach(t), (Eh = i(Ga)), (Co = n(Ga, "TD", {}));
      var jv = s(Co);
      (wh = l(jv, "0.52%")),
        jv.forEach(t),
        (Th = i(Ga)),
        ($o = n(Ga, "TD", {}));
      var Jv = s($o);
      (Ph = l(Jv, "46")), Jv.forEach(t), (Lh = i(Ga)), (So = n(Ga, "TD", {}));
      var Kv = s(So);
      (kh = l(Kv, "0.097%")),
        Kv.forEach(t),
        (Dh = i(Ga)),
        (jt = n(Ga, "TD", {}));
      var zv = s(jt);
      (Fh = l(zv, "71")), zv.forEach(t), (Oh = i(Ga)), (Ho = n(Ga, "TD", {}));
      var Xv = s(Ho);
      (Ih = l(Xv, "0.0172%")),
        Xv.forEach(t),
        (xh = i(Ga)),
        (Ro = n(Ga, "TD", {}));
      var Qv = s(Ro);
      (Ah = l(Qv, "96")), Qv.forEach(t), (Ch = i(Ga)), (Mo = n(Ga, "TD", {}));
      var Yv = s(Mo);
      ($h = l(Yv, "0.0030%")),
        Yv.forEach(t),
        Ga.forEach(t),
        (Sh = i(q)),
        (Ft = n(q, "TR", { class: !0 }));
      var Va = s(Ft);
      qo = n(Va, "TD", {});
      var Zv = s(qo);
      (Hh = l(Zv, "22")), Zv.forEach(t), (Rh = i(Va)), (Pt = n(Va, "TD", {}));
      var eg = s(Pt);
      (Bo = l(eg, "0.49%")),
        eg.forEach(t),
        (Mh = i(Va)),
        (Wo = n(Va, "TD", {}));
      var tg = s(Wo);
      (qh = l(tg, "47")), tg.forEach(t), (Bh = i(Va)), (or = n(Va, "TD", {}));
      var ag = s(or);
      (Wh = l(ag, "0.090%")),
        ag.forEach(t),
        (Uh = i(Va)),
        (ir = n(Va, "TD", {}));
      var ng = s(ir);
      (Nh = l(ng, "72")), ng.forEach(t), (Gh = i(Va)), (dr = n(Va, "TD", {}));
      var sg = s(dr);
      (Vh = l(sg, "0.0155%")),
        sg.forEach(t),
        (jh = i(Va)),
        (cr = n(Va, "TD", {}));
      var rg = s(cr);
      (Jh = l(rg, "97")), rg.forEach(t), (Kh = i(Va)), (hr = n(Va, "TD", {}));
      var lg = s(hr);
      (zh = l(lg, "0.0028%")),
        lg.forEach(t),
        Va.forEach(t),
        (Xh = i(q)),
        (Ot = n(q, "TR", { class: !0 }));
      var ja = s(Ot);
      Uo = n(ja, "TD", {});
      var og = s(Uo);
      (Qh = l(og, "23")), og.forEach(t), (No = i(ja)), (Go = n(ja, "TD", {}));
      var ig = s(Go);
      (Yh = l(ig, "0.47%")),
        ig.forEach(t),
        (Vo = i(ja)),
        (jo = n(ja, "TD", {}));
      var dg = s(jo);
      (Zh = l(dg, "48")), dg.forEach(t), (eu = i(ja)), (Jo = n(ja, "TD", {}));
      var cg = s(Jo);
      (tu = l(cg, "0.083%")),
        cg.forEach(t),
        (Zn = i(ja)),
        (Ko = n(ja, "TD", {}));
      var hg = s(Ko);
      (au = l(hg, "73")), hg.forEach(t), (nu = i(ja)), (zo = n(ja, "TD", {}));
      var ug = s(zo);
      (su = l(ug, "0.0146%")),
        ug.forEach(t),
        (ru = i(ja)),
        (Xo = n(ja, "TD", {}));
      var fg = s(Xo);
      (lu = l(fg, "98")), fg.forEach(t), (ou = i(ja)), (Qo = n(ja, "TD", {}));
      var pg = s(Qo);
      (es = l(pg, "0.0026%")),
        pg.forEach(t),
        ja.forEach(t),
        (iu = i(q)),
        (Yt = n(q, "TR", { class: !0 }));
      var Ja = s(Yt);
      Yo = n(Ja, "TD", {});
      var mg = s(Yo);
      (du = l(mg, "24")), mg.forEach(t), (cu = i(Ja)), (wa = n(Ja, "TD", {}));
      var vg = s(wa);
      (hu = l(vg, "0.44%")),
        vg.forEach(t),
        (uu = i(Ja)),
        (Zo = n(Ja, "TD", {}));
      var gg = s(Zo);
      (fu = l(gg, "49")), gg.forEach(t), (pu = i(Ja)), (ur = n(Ja, "TD", {}));
      var bg = s(ur);
      (mu = l(bg, "0.076%")),
        bg.forEach(t),
        (qu = i(Ja)),
        (Eu = n(Ja, "TD", {}));
      var yg = s(Eu);
      (Bu = l(yg, "74")), yg.forEach(t), (Wu = i(Ja)), (wu = n(Ja, "TD", {}));
      var _g = s(wu);
      (Uu = l(_g, "0.0137%")),
        _g.forEach(t),
        (Nu = i(Ja)),
        (Tu = n(Ja, "TD", {}));
      var Eg = s(Tu);
      (Gu = l(Eg, "99")), Eg.forEach(t), (Vu = i(Ja)), (Pu = n(Ja, "TD", {}));
      var wg = s(Pu);
      (ju = l(wg, "0.0024%")),
        wg.forEach(t),
        Ja.forEach(t),
        (Ju = i(q)),
        (ma = n(q, "TR", { class: !0 }));
      var Ka = s(ma);
      Lu = n(Ka, "TD", {});
      var Tg = s(Lu);
      (Ku = l(Tg, "25")), Tg.forEach(t), (zu = i(Ka)), (ku = n(Ka, "TD", {}));
      var Pg = s(ku);
      (Xu = l(Pg, "0.42%")),
        Pg.forEach(t),
        (Qu = i(Ka)),
        (Du = n(Ka, "TD", {}));
      var Lg = s(Du);
      (Yu = l(Lg, "50")), Lg.forEach(t), (Zu = i(Ka)), (Fu = n(Ka, "TD", {}));
      var kg = s(Fu);
      (ef = l(kg, "0.070%")),
        kg.forEach(t),
        (tf = i(Ka)),
        (Ou = n(Ka, "TD", {}));
      var Dg = s(Ou);
      (af = l(Dg, "75")), Dg.forEach(t), (nf = i(Ka)), (Iu = n(Ka, "TD", {}));
      var Fg = s(Iu);
      (sf = l(Fg, "0.0129%")),
        Fg.forEach(t),
        (rf = i(Ka)),
        (xu = n(Ka, "TD", {}));
      var Og = s(xu);
      (lf = l(Og, "100")), Og.forEach(t), (of = i(Ka)), (Au = n(Ka, "TD", {}));
      var Ig = s(Au);
      (df = l(Ig, "0.0021%")),
        Ig.forEach(t),
        Ka.forEach(t),
        q.forEach(t),
        (cf = i(rt)),
        (vu = n(rt, "P", { class: !0 }));
      var xg = s(vu);
      (hf = l(
        xg,
        `To ensure rewards are paid for active participation, a user would need to
      do the following to qualify for the following OpenFPL gameplay rewards:`
      )),
        xg.forEach(t),
        (uf = i(rt)),
        (fr = n(rt, "UL", { class: !0 }));
      var _u = s(fr);
      Cu = n(_u, "LI", {});
      var Ag = s(Cu);
      (ff = l(
        Ag,
        `A user must have made at least 2 changes in a month to qualify for that
        month's club leaderboard rewards and monthly ATH record rewards.`
      )),
        Ag.forEach(t),
        (pf = i(_u)),
        ($u = n(_u, "LI", {}));
      var Cg = s($u);
      (mf = l(
        Cg,
        `A user must have made at least 1 change in a gameweek to qualify for
        that week's leaderboard rewards, highest-scoring match player rewards
        and weekly ATH record rewards.`
      )),
        Cg.forEach(t),
        (vf = i(_u)),
        (Su = n(_u, "LI", {}));
      var $g = s(Su);
      (gf = l(
        $g,
        `Rewards for the season total, most valuable team have and annual ATH
        have no entry restrictions as it is based on the cumulative action of
        managers transfers throughout the season.`
      )),
        $g.forEach(t),
        _u.forEach(t),
        (bf = i(rt)),
        (gu = n(rt, "H2", { class: !0 }));
      var Sg = s(gu);
      (yf = l(Sg, "Governance Rewards (25%)")),
        Sg.forEach(t),
        (_f = i(rt)),
        (bu = n(rt, "P", { class: !0 }));
      var Hg = s(bu);
      (Ef = l(
        Hg,
        `OpenFPL values neuron holders' contributions to maintaining up-to-date
      Premier League data. Rewards are given for raising and voting on essential
      proposals, such as scheduling, player transfers, and updating player
      information. Failed proposals incur a 10 $FPL cost, contributing to the
      DAO’s treasury.`
      )),
        Hg.forEach(t),
        (wf = i(rt)),
        (yu = n(rt, "P", { class: !0 }));
      var Rg = s(yu);
      (Tf = l(
        Rg,
        `The OpenFPL DAO is an innovative approach to fantasy football, combining
      real-time data accuracy with rewarding community involvement. By aligning
      rewards with active participation, OpenFPL ensures a vibrant, informed,
      and engaged user base.`
      )),
        Rg.forEach(t),
        rt.forEach(t),
        Ru.forEach(t),
        this.h();
    },
    h() {
      c(u, "class", "text-3xl font-bold"),
        c(T, "class", "my-4"),
        c(P, "class", "text-xl font-bold"),
        c(g, "class", "my-2"),
        c(L, "class", "list-disc ml-4"),
        c(oe, "class", "text-lg font-bold mt-4"),
        c(ie, "class", "my-2"),
        c(k, "class", "list-disc ml-4"),
        c(ke, "class", "my-2"),
        c(D, "class", "svelte-a09ql9"),
        c(f, "class", "svelte-a09ql9"),
        c(be, "class", "svelte-a09ql9"),
        c(Je, "class", "svelte-a09ql9"),
        c(vt, "class", "svelte-a09ql9"),
        c(Ht, "class", "svelte-a09ql9"),
        c(dt, "class", "svelte-a09ql9"),
        c(yt, "class", "svelte-a09ql9"),
        c(Et, "class", "svelte-a09ql9"),
        c(Tt, "class", "svelte-a09ql9"),
        c(Rt, "class", "svelte-a09ql9"),
        c(Mt, "class", "svelte-a09ql9"),
        c(qt, "class", "svelte-a09ql9"),
        c(Bt, "class", "svelte-a09ql9"),
        c(Wt, "class", "svelte-a09ql9"),
        c(Ut, "class", "svelte-a09ql9"),
        c(Nt, "class", "svelte-a09ql9"),
        c(ut, "class", "svelte-a09ql9"),
        c(Kt, "class", "svelte-a09ql9"),
        c(zt, "class", "svelte-a09ql9"),
        c(Xt, "class", "svelte-a09ql9"),
        c(Qt, "class", "svelte-a09ql9"),
        c(Ft, "class", "svelte-a09ql9"),
        c(Ot, "class", "svelte-a09ql9"),
        c(Yt, "class", "svelte-a09ql9"),
        c(ma, "class", "svelte-a09ql9"),
        c(
          p,
          "class",
          "w-full text-center border-collapse striped mb-8 mt-8 svelte-a09ql9"
        ),
        c(vu, "class", "my-2"),
        c(fr, "class", "list-disc ml-4"),
        c(gu, "class", "text-lg font-bold mt-4"),
        c(bu, "class", "my-2"),
        c(yu, "class", "my-4"),
        c(d, "class", "m-4"),
        c(h, "class", "container-fluid mx-auto p-4");
    },
    m(Hu, Ru) {
      Ql(Hu, h, Ru),
        e(h, d),
        e(d, u),
        e(u, w),
        e(d, he),
        e(d, T),
        e(T, $),
        e(d, le),
        e(d, P),
        e(P, Ie),
        e(d, Te),
        e(d, g),
        e(g, ue),
        e(d, fe),
        e(d, L),
        e(L, pe),
        e(pe, xe),
        e(L, A),
        e(L, me),
        e(me, ve),
        e(d, F),
        e(d, oe),
        e(oe, Ae),
        e(d, C),
        e(d, ie),
        e(ie, Y),
        e(d, O),
        e(d, k),
        e(k, Z),
        e(Z, U),
        e(k, Ce),
        e(k, de),
        e(de, y),
        e(k, ye),
        e(k, Pe),
        e(Pe, S),
        e(k, _e),
        e(k, Le),
        e(Le, j),
        e(k, Ee),
        e(k, Ue),
        e(Ue, ee),
        e(k, K),
        e(k, ge),
        e(ge, J),
        e(d, Re),
        e(d, ke),
        e(ke, te),
        e(d, $e),
        e(d, p),
        e(p, D),
        e(D, we),
        e(we, Ne),
        e(D, ae),
        e(D, Q),
        e(Q, N),
        e(D, R),
        e(D, M),
        e(M, z),
        e(D, ne),
        e(D, Ge),
        e(Ge, De),
        e(D, se),
        e(D, E),
        e(E, H),
        e(D, G),
        e(D, X),
        e(X, Fe),
        e(D, I),
        e(D, Ke),
        e(Ke, Me),
        e(D, re),
        e(D, ze),
        e(ze, Oe),
        e(p, ce),
        e(p, f),
        e(f, Se),
        e(Se, V),
        e(f, Qe),
        e(f, He),
        e(He, qe),
        e(f, je),
        e(f, Be),
        e(Be, b),
        e(f, at),
        e(f, nt),
        e(nt, Ye),
        e(f, ft),
        e(f, B),
        e(B, Ze),
        e(f, v),
        e(f, ot),
        e(ot, pt),
        e(f, m),
        e(f, Lt),
        e(Lt, et),
        e(f, Ve),
        e(f, mt),
        e(mt, kt),
        e(p, Dt),
        e(p, be),
        e(be, It),
        e(It, xt),
        e(be, Zt),
        e(be, At),
        e(At, ia),
        e(be, ea),
        e(be, Ct),
        e(Ct, da),
        e(be, ta),
        e(be, $t),
        e($t, ca),
        e(be, ha),
        e(be, ra),
        e(ra, ya),
        e(be, ua),
        e(be, la),
        e(la, _a),
        e(be, gt),
        e(be, St),
        e(St, Xa),
        e(be, Qa),
        e(be, oa),
        e(oa, Ya),
        e(p, as),
        e(p, Je),
        e(Je, on),
        e(on, dn),
        e(Je, Za),
        e(Je, W),
        e(W, Hs),
        e(Je, cn),
        e(Je, mn),
        e(mn, Rs),
        e(Je, We),
        e(Je, tt),
        e(tt, hn),
        e(Je, Ms),
        e(Je, vn),
        e(vn, gn),
        e(Je, it),
        e(Je, bn),
        e(bn, yn),
        e(Je, qs),
        e(Je, _n),
        e(_n, En),
        e(Je, Bs),
        e(Je, wn),
        e(wn, Tn),
        e(p, Ws),
        e(p, vt),
        e(vt, en),
        e(en, va),
        e(vt, Us),
        e(vt, tn),
        e(tn, Ns),
        e(vt, Gs),
        e(vt, an),
        e(an, Vs),
        e(vt, js),
        e(vt, Xe),
        e(Xe, Js),
        e(vt, Ks),
        e(vt, za),
        e(za, un),
        e(vt, ns),
        e(vt, Pn),
        e(Pn, lt),
        e(vt, fn),
        e(vt, Ln),
        e(Ln, zs),
        e(vt, kn),
        e(vt, Dn),
        e(Dn, Xs),
        e(p, pr),
        e(p, Ht),
        e(Ht, mr),
        e(mr, vr),
        e(Ht, ti),
        e(Ht, gr),
        e(gr, br),
        e(Ht, ai),
        e(Ht, yr),
        e(yr, _r),
        e(Ht, ni),
        e(Ht, Er),
        e(Er, wr),
        e(Ht, si),
        e(Ht, Tr),
        e(Tr, Pr),
        e(Ht, ri),
        e(Ht, Lr),
        e(Lr, kr),
        e(Ht, li),
        e(Ht, Dr),
        e(Dr, Qs),
        e(Ht, Ys),
        e(Ht, Zs),
        e(Zs, oi),
        e(p, er),
        e(p, dt),
        e(dt, Fr),
        e(Fr, ii),
        e(dt, bt),
        e(dt, Fn),
        e(Fn, di),
        e(dt, ci),
        e(dt, ss),
        e(ss, hi),
        e(dt, ui),
        e(dt, rs),
        e(rs, fi),
        e(dt, pi),
        e(dt, ls),
        e(ls, mi),
        e(dt, vi),
        e(dt, os),
        e(os, gi),
        e(dt, bi),
        e(dt, is),
        e(is, yi),
        e(dt, _i),
        e(dt, ds),
        e(ds, Ei),
        e(p, wi),
        e(p, yt),
        e(yt, Or),
        e(Or, Ti),
        e(yt, Ir),
        e(yt, xr),
        e(xr, Pi),
        e(yt, _t),
        e(yt, On),
        e(On, Li),
        e(yt, ki),
        e(yt, cs),
        e(cs, Di),
        e(yt, Fi),
        e(yt, hs),
        e(hs, Oi),
        e(yt, Ii),
        e(yt, us),
        e(us, xi),
        e(yt, Ai),
        e(yt, fs),
        e(fs, Ci),
        e(yt, $i),
        e(yt, ps),
        e(ps, Si),
        e(p, Hi),
        e(p, Et),
        e(Et, Ar),
        e(Ar, Ri),
        e(Et, Cr),
        e(Et, $r),
        e($r, Mi),
        e(Et, Sr),
        e(Et, Hr),
        e(Hr, qi),
        e(Et, wt),
        e(Et, In),
        e(In, Bi),
        e(Et, Wi),
        e(Et, ms),
        e(ms, Ui),
        e(Et, Ni),
        e(Et, vs),
        e(vs, Gi),
        e(Et, Vi),
        e(Et, gs),
        e(gs, ji),
        e(Et, Ji),
        e(Et, bs),
        e(bs, Ki),
        e(p, zi),
        e(p, Tt),
        e(Tt, Rr),
        e(Rr, Xi),
        e(Tt, Mr),
        e(Tt, qr),
        e(qr, Qi),
        e(Tt, Br),
        e(Tt, Wr),
        e(Wr, Yi),
        e(Tt, Ur),
        e(Tt, Nr),
        e(Nr, Zi),
        e(Tt, tr),
        e(Tt, pn),
        e(pn, ao),
        e(Tt, ed),
        e(Tt, ct),
        e(ct, ar),
        e(Tt, td),
        e(Tt, Gr),
        e(Gr, Vr),
        e(Tt, ad),
        e(Tt, jr),
        e(jr, Jr),
        e(p, nd),
        e(p, Rt),
        e(Rt, ys),
        e(ys, sd),
        e(Rt, rd),
        e(Rt, _s),
        e(_s, ld),
        e(Rt, od),
        e(Rt, Es),
        e(Es, id),
        e(Rt, dd),
        e(Rt, ws),
        e(ws, cd),
        e(Rt, hd),
        e(Rt, Ts),
        e(Ts, ud),
        e(Rt, fd),
        e(Rt, Ps),
        e(Ps, pd),
        e(Rt, md),
        e(Rt, xn),
        e(xn, Ls),
        e(Rt, no),
        e(Rt, Kr),
        e(Kr, An),
        e(p, ks),
        e(p, Mt),
        e(Mt, zr),
        e(zr, Xr),
        e(Mt, vd),
        e(Mt, Qr),
        e(Qr, nr),
        e(Mt, gd),
        e(Mt, Yr),
        e(Yr, ht),
        e(Mt, Cn),
        e(Mt, Ds),
        e(Ds, bd),
        e(Mt, yd),
        e(Mt, Fs),
        e(Fs, _d),
        e(Mt, Ed),
        e(Mt, $n),
        e($n, sr),
        e(Mt, so),
        e(Mt, Zr),
        e(Zr, Sn),
        e(Mt, el),
        e(Mt, tl),
        e(tl, wd),
        e(p, al),
        e(p, qt),
        e(qt, nl),
        e(nl, Hn),
        e(qt, sl),
        e(qt, rl),
        e(rl, Td),
        e(qt, ll),
        e(qt, ol),
        e(ol, Pd),
        e(qt, Rn),
        e(qt, Os),
        e(Os, Ld),
        e(qt, kd),
        e(qt, Is),
        e(Is, Dd),
        e(qt, Fd),
        e(qt, nn),
        e(nn, il),
        e(qt, Od),
        e(qt, dl),
        e(dl, cl),
        e(qt, Id),
        e(qt, hl),
        e(hl, Mn),
        e(p, ul),
        e(p, Bt),
        e(Bt, fl),
        e(fl, pl),
        e(Bt, xd),
        e(Bt, ml),
        e(ml, qn),
        e(Bt, vl),
        e(Bt, gl),
        e(gl, Ad),
        e(Bt, bl),
        e(Bt, yl),
        e(yl, Cd),
        e(Bt, Bn),
        e(Bt, xs),
        e(xs, $d),
        e(Bt, Sd),
        e(Bt, As),
        e(As, Hd),
        e(Bt, Rd),
        e(Bt, sn),
        e(sn, _l),
        e(Bt, Md),
        e(Bt, El),
        e(El, wl),
        e(p, qd),
        e(p, Wt),
        e(Wt, Wn),
        e(Wn, Bd),
        e(Wt, Wd),
        e(Wt, Un),
        e(Un, Ud),
        e(Wt, Nd),
        e(Wt, Nn),
        e(Nn, Gd),
        e(Wt, Vd),
        e(Wt, ga),
        e(ga, Tl),
        e(Wt, jd),
        e(Wt, Pl),
        e(Pl, Ll),
        e(Wt, Jd),
        e(Wt, kl),
        e(kl, Dl),
        e(Wt, Kd),
        e(Wt, Fl),
        e(Fl, Ol),
        e(Wt, zd),
        e(Wt, Il),
        e(Il, rr),
        e(p, Xd),
        e(p, Ut),
        e(Ut, Gn),
        e(Gn, Qd),
        e(Ut, Yd),
        e(Ut, Vn),
        e(Vn, Zd),
        e(Ut, ec),
        e(Ut, jn),
        e(jn, tc),
        e(Ut, ac),
        e(Ut, Jn),
        e(Jn, nc),
        e(Ut, sc),
        e(Ut, Kn),
        e(Kn, rc),
        e(Ut, lc),
        e(Ut, ba),
        e(ba, xl),
        e(Ut, oc),
        e(Ut, Al),
        e(Al, Cl),
        e(Ut, ic),
        e(Ut, $l),
        e($l, Sl),
        e(p, dc),
        e(p, Nt),
        e(Nt, Cs),
        e(Cs, cc),
        e(Nt, hc),
        e(Nt, zn),
        e(zn, uc),
        e(Nt, fc),
        e(Nt, fa),
        e(fa, Hl),
        e(Nt, pc),
        e(Nt, Rl),
        e(Rl, Ml),
        e(Nt, mc),
        e(Nt, ql),
        e(ql, Bl),
        e(Nt, vc),
        e(Nt, Wl),
        e(Wl, Ul),
        e(Nt, gc),
        e(Nt, Nl),
        e(Nl, Gl),
        e(Nt, bc),
        e(Nt, Vl),
        e(Vl, Xn),
        e(p, yc),
        e(p, ut),
        e(ut, jl),
        e(jl, _c),
        e(ut, Jl),
        e(ut, lr),
        e(lr, _),
        e(ut, Ec),
        e(ut, ro),
        e(ro, wc),
        e(ut, pa),
        e(ut, lo),
        e(lo, Tc),
        e(ut, Pc),
        e(ut, oo),
        e(oo, Lc),
        e(ut, kc),
        e(ut, io),
        e(io, Dc),
        e(ut, Fc),
        e(ut, co),
        e(co, Qn),
        e(ut, Oc),
        e(ut, ho),
        e(ho, Ic),
        e(p, xc),
        e(p, Kt),
        e(Kt, Ea),
        e(Ea, Ac),
        e(Kt, Cc),
        e(Kt, uo),
        e(uo, $c),
        e(Kt, Sc),
        e(Kt, fo),
        e(fo, rn),
        e(Kt, Hc),
        e(Kt, po),
        e(po, Rc),
        e(Kt, Mc),
        e(Kt, mo),
        e(mo, qc),
        e(Kt, ln),
        e(Kt, vo),
        e(vo, Bc),
        e(Kt, Wc),
        e(Kt, go),
        e(go, Uc),
        e(Kt, Nc),
        e(Kt, bo),
        e(bo, Yn),
        e(p, Gc),
        e(p, zt),
        e(zt, yo),
        e(yo, Vc),
        e(zt, jc),
        e(zt, st),
        e(st, aa),
        e(zt, Jc),
        e(zt, _o),
        e(_o, Kc),
        e(zt, zc),
        e(zt, Eo),
        e(Eo, Xc),
        e(zt, Qc),
        e(zt, wo),
        e(wo, Yc),
        e(zt, Zc),
        e(zt, To),
        e(To, na),
        e(zt, eh),
        e(zt, Po),
        e(Po, th),
        e(zt, ah),
        e(zt, Lo),
        e(Lo, nh),
        e(p, sh),
        e(p, Xt),
        e(Xt, ko),
        e(ko, rh),
        e(Xt, lh),
        e(Xt, Do),
        e(Do, oh),
        e(Xt, sa),
        e(Xt, Fo),
        e(Fo, ih),
        e(Xt, dh),
        e(Xt, Oo),
        e(Oo, ch),
        e(Xt, hh),
        e(Xt, Io),
        e(Io, uh),
        e(Xt, fh),
        e(Xt, Gt),
        e(Gt, ph),
        e(Xt, mh),
        e(Xt, xo),
        e(xo, vh),
        e(Xt, gh),
        e(Xt, Ao),
        e(Ao, bh),
        e(p, yh),
        e(p, Qt),
        e(Qt, Vt),
        e(Vt, _h),
        e(Qt, Eh),
        e(Qt, Co),
        e(Co, wh),
        e(Qt, Th),
        e(Qt, $o),
        e($o, Ph),
        e(Qt, Lh),
        e(Qt, So),
        e(So, kh),
        e(Qt, Dh),
        e(Qt, jt),
        e(jt, Fh),
        e(Qt, Oh),
        e(Qt, Ho),
        e(Ho, Ih),
        e(Qt, xh),
        e(Qt, Ro),
        e(Ro, Ah),
        e(Qt, Ch),
        e(Qt, Mo),
        e(Mo, $h),
        e(p, Sh),
        e(p, Ft),
        e(Ft, qo),
        e(qo, Hh),
        e(Ft, Rh),
        e(Ft, Pt),
        e(Pt, Bo),
        e(Ft, Mh),
        e(Ft, Wo),
        e(Wo, qh),
        e(Ft, Bh),
        e(Ft, or),
        e(or, Wh),
        e(Ft, Uh),
        e(Ft, ir),
        e(ir, Nh),
        e(Ft, Gh),
        e(Ft, dr),
        e(dr, Vh),
        e(Ft, jh),
        e(Ft, cr),
        e(cr, Jh),
        e(Ft, Kh),
        e(Ft, hr),
        e(hr, zh),
        e(p, Xh),
        e(p, Ot),
        e(Ot, Uo),
        e(Uo, Qh),
        e(Ot, No),
        e(Ot, Go),
        e(Go, Yh),
        e(Ot, Vo),
        e(Ot, jo),
        e(jo, Zh),
        e(Ot, eu),
        e(Ot, Jo),
        e(Jo, tu),
        e(Ot, Zn),
        e(Ot, Ko),
        e(Ko, au),
        e(Ot, nu),
        e(Ot, zo),
        e(zo, su),
        e(Ot, ru),
        e(Ot, Xo),
        e(Xo, lu),
        e(Ot, ou),
        e(Ot, Qo),
        e(Qo, es),
        e(p, iu),
        e(p, Yt),
        e(Yt, Yo),
        e(Yo, du),
        e(Yt, cu),
        e(Yt, wa),
        e(wa, hu),
        e(Yt, uu),
        e(Yt, Zo),
        e(Zo, fu),
        e(Yt, pu),
        e(Yt, ur),
        e(ur, mu),
        e(Yt, qu),
        e(Yt, Eu),
        e(Eu, Bu),
        e(Yt, Wu),
        e(Yt, wu),
        e(wu, Uu),
        e(Yt, Nu),
        e(Yt, Tu),
        e(Tu, Gu),
        e(Yt, Vu),
        e(Yt, Pu),
        e(Pu, ju),
        e(p, Ju),
        e(p, ma),
        e(ma, Lu),
        e(Lu, Ku),
        e(ma, zu),
        e(ma, ku),
        e(ku, Xu),
        e(ma, Qu),
        e(ma, Du),
        e(Du, Yu),
        e(ma, Zu),
        e(ma, Fu),
        e(Fu, ef),
        e(ma, tf),
        e(ma, Ou),
        e(Ou, af),
        e(ma, nf),
        e(ma, Iu),
        e(Iu, sf),
        e(ma, rf),
        e(ma, xu),
        e(xu, lf),
        e(ma, of),
        e(ma, Au),
        e(Au, df),
        e(d, cf),
        e(d, vu),
        e(vu, hf),
        e(d, uf),
        e(d, fr),
        e(fr, Cu),
        e(Cu, ff),
        e(fr, pf),
        e(fr, $u),
        e($u, mf),
        e(fr, vf),
        e(fr, Su),
        e(Su, gf),
        e(d, bf),
        e(d, gu),
        e(gu, yf),
        e(d, _f),
        e(d, bu),
        e(bu, Ef),
        e(d, wf),
        e(d, yu),
        e(yu, Tf);
    },
    p: Jt,
    i: Jt,
    o: Jt,
    d(Hu) {
      Hu && t(h);
    },
  };
}
class Vg extends Kl {
  constructor(h) {
    super(), zl(this, h, null, Gg, Xl, {});
  }
}
function jg(x) {
  let h,
    d,
    u,
    w,
    he,
    T,
    $,
    le,
    P,
    Ie,
    Te,
    g,
    ue,
    fe,
    L,
    pe,
    xe,
    A,
    me,
    ve,
    F,
    oe,
    Ae,
    C,
    ie,
    Y,
    O,
    k,
    Z,
    U,
    Ce,
    de,
    y,
    ye,
    Pe,
    S,
    _e,
    Le,
    j,
    Ee,
    Ue,
    ee,
    K,
    ge,
    J,
    Re,
    ke,
    te,
    $e,
    p,
    D,
    we,
    Ne,
    ae,
    Q,
    N,
    R,
    M,
    z,
    ne,
    Ge,
    De,
    se,
    E,
    H,
    G,
    X,
    Fe,
    I,
    Ke,
    Me,
    re,
    ze,
    Oe,
    ce,
    f,
    Se,
    V,
    Qe,
    He,
    qe,
    je,
    Be,
    b,
    at,
    nt,
    Ye,
    ft,
    B,
    Ze,
    v,
    ot,
    pt,
    m,
    Lt,
    et,
    Ve,
    mt,
    kt,
    Dt,
    be,
    It,
    xt,
    Zt,
    At,
    ia,
    ea,
    Ct,
    da,
    ta,
    $t,
    ca,
    ha,
    ra,
    ya,
    ua,
    la,
    _a,
    gt,
    St,
    Xa,
    Qa,
    oa,
    Ya,
    as,
    Je,
    on;
  return {
    c() {
      (h = a("div")),
        (d = a("div")),
        (u = a("h1")),
        (w = r("OpenFPL Gameplay")),
        (he = o()),
        (T = a("p")),
        ($ =
          r(`At OpenFPL, our gameplay rules are designed to create an immersive,
      engaging, and unique fantasy football experience. We understand the
      passion and strategy that goes into fantasy football, and our gameplay
      rules are crafted to reflect this, enhancing the fun and competitiveness
      of each gameweek.`)),
        (le = o()),
        (P = a("h2")),
        (Ie = r("Starting Funds and Team Composition")),
        (Te = o()),
        (g = a("p")),
        (ue =
          r(`Each user begins their journey with £300m, a budget to strategically build
      their dream team. The value of players fluctuates based on community
      ratings within the DAO. If a player's performance garners enough votes,
      their value can either increase or decrease by £0.25m each gameweek.`)),
        (fe = o()),
        (L = a("p")),
        (pe =
          r(`In terms of team structure, each user's team consists of 11 players.
      Picking from a range of clubs is key, so a maximum of two players from any
      single club can be selected. Teams must adhere to a valid formation: 1
      goalkeeper, 3-5 defenders, 3-5 midfielders, and 1-3 strikers.`)),
        (xe = o()),
        (A = a("h2")),
        (me = r("Transfers and Team Management")),
        (ve = o()),
        (F = a("p")),
        (oe =
          r(`Flexibility is a cornerstone of our gameplay. Users can make up to three
      transfers per week, allowing for dynamic team management and adaptation to
      the ever-changing football landscape. These transfers don't roll over,
      encouraging active participation each week. There are no substitutes in
      our game, eliminating the frustration of unused bench points.`)),
        (Ae = o()),
        (C = a("p")),
        (ie =
          r(`Each January, users can overhaul their team completely once, adding
      another strategic layer to the game reflecting the January transfer
      window.`)),
        (Y = o()),
        (O = a("h2")),
        (k = r("Scoring System")),
        (Z = o()),
        (U = a("p")),
        (Ce = r(
          "Our scoring system rewards players for key contributions on the field:"
        )),
        (de = o()),
        (y = a("ul")),
        (ye = a("li")),
        (Pe = r("Appearing in the game: +5 points")),
        (S = o()),
        (_e = a("li")),
        (Le = r("Every 3 saves a goalkeeper makes: +5 points")),
        (j = o()),
        (Ee = a("li")),
        (Ue = r("Goalkeeper or defender cleansheet: +10 points")),
        (ee = o()),
        (K = a("li")),
        (ge = r("Forward scores a goal: +10 points")),
        (J = o()),
        (Re = a("li")),
        (ke = r("Midfielder or Forward assists a goal: +10 points")),
        (te = o()),
        ($e = a("li")),
        (p = r("Midfielder scores a goal: +15 points")),
        (D = o()),
        (we = a("li")),
        (Ne = r("Goalkeeper or defender assists a goal: +15 points")),
        (ae = o()),
        (Q = a("li")),
        (N = r("Goalkeeper or defender scores a goal: +20 points")),
        (R = o()),
        (M = a("li")),
        (z = r("Goalkeeper saves a penalty: +20 points")),
        (ne = o()),
        (Ge = a("li")),
        (De = r("Player is highest scoring player in match: +25 points")),
        (se = o()),
        (E = a("p")),
        (H = r("Points are also deducted for the following on field events:")),
        (G = o()),
        (X = a("ul")),
        (Fe = a("li")),
        (I = r("Player receives a red card: -20 points")),
        (Ke = o()),
        (Me = a("li")),
        (re = r("Player misses a penalty: -15 points")),
        (ze = o()),
        (Oe = a("li")),
        (ce = r(
          "Each time a goalkeeper or defender concedes 2 goals: -15 points"
        )),
        (f = o()),
        (Se = a("li")),
        (V = r("A player scores an own goal: -10 points")),
        (Qe = o()),
        (He = a("li")),
        (qe = r("A player receives a yellow card: -5 points")),
        (je = o()),
        (Be = a("h2")),
        (b = r("Bonuses")),
        (at = o()),
        (nt = a("p")),
        (Ye =
          r(`OpenFPL elevates the gameplay with a diverse set of bonuses. These bonuses
      play a pivotal role in keeping OpenFPL's gameplay both fresh and
      exhilarating. Their strategic implementation allows for significant shifts
      in the leaderboard, ensuring that the competition remains open and
      dynamic. With these bonuses, any user, regardless of their position, has
      the potential to make a substantial leap in the rankings. This
      unpredictability means that victory is within reach for every participant,
      fostering a thrilling environment where every gameweek holds the promise
      of a shake-up at the top of the leaderboard. Our bonuses are as follows:`)),
        (ft = o()),
        (B = a("ul")),
        (Ze = a("li")),
        (v = r(
          "Goal Getter: X3 multiplier for each goal scored by a selected player."
        )),
        (ot = o()),
        (pt = a("li")),
        (m = r(
          "Pass Master: X3 multiplier for each assist by a selected player."
        )),
        (Lt = o()),
        (et = a("li")),
        (Ve =
          r(`No Entry: X3 multiplier for a selected goalkeeper/defender for a clean
        sheet.`)),
        (mt = o()),
        (kt = a("li")),
        (Dt = r("Safe Hands: X3 multiplier for a goalkeeper making 5 saves.")),
        (be = o()),
        (It = a("li")),
        (xt =
          r(`Captain Fantastic: X2 multiplier on the captain’s score for scoring a
        goal.`)),
        (Zt = o()),
        (At = a("li")),
        (ia = r(
          "Team Boost: X2 multiplier for all players from a single club."
        )),
        (ea = o()),
        (Ct = a("li")),
        (da = r("Brace Bonus: X2 multiplier for any player scoring 2+ goals.")),
        (ta = o()),
        ($t = a("li")),
        (ca = r(
          "Hat-Trick Hero: X3 multiplier for any player scoring 3+ goals."
        )),
        (ha = o()),
        (ra = a("li")),
        (ya = r(
          "Countrymen: Double points for players of a selected nationality."
        )),
        (ua = o()),
        (la = a("li")),
        (_a = r("Youth Prospects: Double points for players under 21.")),
        (gt = o()),
        (St = a("h2")),
        (Xa = r("Star Player")),
        (Qa = o()),
        (oa = a("p")),
        (Ya =
          r(`Each week a user can select a star player. This player will receive double
      points for the gameweek. If one is not set by the start of the gameweek it
      will automatically be set to the most valuable player in your team.`)),
        (as = o()),
        (Je = a("p")),
        (on =
          r(`OpenFPL's gameplay combines strategic team management, a dynamic scoring
      system, and diverse bonuses, offering a unique and competitive fantasy
      football experience. Each decision impacts your journey through the
      Premier League season, where football knowledge and strategy lead to
      rewarding outcomes.`)),
        this.h();
    },
    l(dn) {
      h = n(dn, "DIV", { class: !0 });
      var Za = s(h);
      d = n(Za, "DIV", { class: !0 });
      var W = s(d);
      u = n(W, "H1", { class: !0 });
      var Hs = s(u);
      (w = l(Hs, "OpenFPL Gameplay")),
        Hs.forEach(t),
        (he = i(W)),
        (T = n(W, "P", { class: !0 }));
      var cn = s(T);
      ($ = l(
        cn,
        `At OpenFPL, our gameplay rules are designed to create an immersive,
      engaging, and unique fantasy football experience. We understand the
      passion and strategy that goes into fantasy football, and our gameplay
      rules are crafted to reflect this, enhancing the fun and competitiveness
      of each gameweek.`
      )),
        cn.forEach(t),
        (le = i(W)),
        (P = n(W, "H2", { class: !0 }));
      var mn = s(P);
      (Ie = l(mn, "Starting Funds and Team Composition")),
        mn.forEach(t),
        (Te = i(W)),
        (g = n(W, "P", { class: !0 }));
      var Rs = s(g);
      (ue = l(
        Rs,
        `Each user begins their journey with £300m, a budget to strategically build
      their dream team. The value of players fluctuates based on community
      ratings within the DAO. If a player's performance garners enough votes,
      their value can either increase or decrease by £0.25m each gameweek.`
      )),
        Rs.forEach(t),
        (fe = i(W)),
        (L = n(W, "P", { class: !0 }));
      var We = s(L);
      (pe = l(
        We,
        `In terms of team structure, each user's team consists of 11 players.
      Picking from a range of clubs is key, so a maximum of two players from any
      single club can be selected. Teams must adhere to a valid formation: 1
      goalkeeper, 3-5 defenders, 3-5 midfielders, and 1-3 strikers.`
      )),
        We.forEach(t),
        (xe = i(W)),
        (A = n(W, "H2", { class: !0 }));
      var tt = s(A);
      (me = l(tt, "Transfers and Team Management")),
        tt.forEach(t),
        (ve = i(W)),
        (F = n(W, "P", { class: !0 }));
      var hn = s(F);
      (oe = l(
        hn,
        `Flexibility is a cornerstone of our gameplay. Users can make up to three
      transfers per week, allowing for dynamic team management and adaptation to
      the ever-changing football landscape. These transfers don't roll over,
      encouraging active participation each week. There are no substitutes in
      our game, eliminating the frustration of unused bench points.`
      )),
        hn.forEach(t),
        (Ae = i(W)),
        (C = n(W, "P", { class: !0 }));
      var Ms = s(C);
      (ie = l(
        Ms,
        `Each January, users can overhaul their team completely once, adding
      another strategic layer to the game reflecting the January transfer
      window.`
      )),
        Ms.forEach(t),
        (Y = i(W)),
        (O = n(W, "H2", { class: !0 }));
      var vn = s(O);
      (k = l(vn, "Scoring System")),
        vn.forEach(t),
        (Z = i(W)),
        (U = n(W, "P", { class: !0 }));
      var gn = s(U);
      (Ce = l(
        gn,
        "Our scoring system rewards players for key contributions on the field:"
      )),
        gn.forEach(t),
        (de = i(W)),
        (y = n(W, "UL", { class: !0 }));
      var it = s(y);
      ye = n(it, "LI", {});
      var bn = s(ye);
      (Pe = l(bn, "Appearing in the game: +5 points")),
        bn.forEach(t),
        (S = i(it)),
        (_e = n(it, "LI", {}));
      var yn = s(_e);
      (Le = l(yn, "Every 3 saves a goalkeeper makes: +5 points")),
        yn.forEach(t),
        (j = i(it)),
        (Ee = n(it, "LI", {}));
      var qs = s(Ee);
      (Ue = l(qs, "Goalkeeper or defender cleansheet: +10 points")),
        qs.forEach(t),
        (ee = i(it)),
        (K = n(it, "LI", {}));
      var _n = s(K);
      (ge = l(_n, "Forward scores a goal: +10 points")),
        _n.forEach(t),
        (J = i(it)),
        (Re = n(it, "LI", {}));
      var En = s(Re);
      (ke = l(En, "Midfielder or Forward assists a goal: +10 points")),
        En.forEach(t),
        (te = i(it)),
        ($e = n(it, "LI", {}));
      var Bs = s($e);
      (p = l(Bs, "Midfielder scores a goal: +15 points")),
        Bs.forEach(t),
        (D = i(it)),
        (we = n(it, "LI", {}));
      var wn = s(we);
      (Ne = l(wn, "Goalkeeper or defender assists a goal: +15 points")),
        wn.forEach(t),
        (ae = i(it)),
        (Q = n(it, "LI", {}));
      var Tn = s(Q);
      (N = l(Tn, "Goalkeeper or defender scores a goal: +20 points")),
        Tn.forEach(t),
        (R = i(it)),
        (M = n(it, "LI", {}));
      var Ws = s(M);
      (z = l(Ws, "Goalkeeper saves a penalty: +20 points")),
        Ws.forEach(t),
        (ne = i(it)),
        (Ge = n(it, "LI", {}));
      var vt = s(Ge);
      (De = l(vt, "Player is highest scoring player in match: +25 points")),
        vt.forEach(t),
        it.forEach(t),
        (se = i(W)),
        (E = n(W, "P", { class: !0 }));
      var en = s(E);
      (H = l(
        en,
        "Points are also deducted for the following on field events:"
      )),
        en.forEach(t),
        (G = i(W)),
        (X = n(W, "UL", { class: !0 }));
      var va = s(X);
      Fe = n(va, "LI", {});
      var Us = s(Fe);
      (I = l(Us, "Player receives a red card: -20 points")),
        Us.forEach(t),
        (Ke = i(va)),
        (Me = n(va, "LI", {}));
      var tn = s(Me);
      (re = l(tn, "Player misses a penalty: -15 points")),
        tn.forEach(t),
        (ze = i(va)),
        (Oe = n(va, "LI", {}));
      var Ns = s(Oe);
      (ce = l(
        Ns,
        "Each time a goalkeeper or defender concedes 2 goals: -15 points"
      )),
        Ns.forEach(t),
        (f = i(va)),
        (Se = n(va, "LI", {}));
      var Gs = s(Se);
      (V = l(Gs, "A player scores an own goal: -10 points")),
        Gs.forEach(t),
        (Qe = i(va)),
        (He = n(va, "LI", {}));
      var an = s(He);
      (qe = l(an, "A player receives a yellow card: -5 points")),
        an.forEach(t),
        va.forEach(t),
        (je = i(W)),
        (Be = n(W, "H2", { class: !0 }));
      var Vs = s(Be);
      (b = l(Vs, "Bonuses")),
        Vs.forEach(t),
        (at = i(W)),
        (nt = n(W, "P", { class: !0 }));
      var js = s(nt);
      (Ye = l(
        js,
        `OpenFPL elevates the gameplay with a diverse set of bonuses. These bonuses
      play a pivotal role in keeping OpenFPL's gameplay both fresh and
      exhilarating. Their strategic implementation allows for significant shifts
      in the leaderboard, ensuring that the competition remains open and
      dynamic. With these bonuses, any user, regardless of their position, has
      the potential to make a substantial leap in the rankings. This
      unpredictability means that victory is within reach for every participant,
      fostering a thrilling environment where every gameweek holds the promise
      of a shake-up at the top of the leaderboard. Our bonuses are as follows:`
      )),
        js.forEach(t),
        (ft = i(W)),
        (B = n(W, "UL", { class: !0 }));
      var Xe = s(B);
      Ze = n(Xe, "LI", {});
      var Js = s(Ze);
      (v = l(
        Js,
        "Goal Getter: X3 multiplier for each goal scored by a selected player."
      )),
        Js.forEach(t),
        (ot = i(Xe)),
        (pt = n(Xe, "LI", {}));
      var Ks = s(pt);
      (m = l(
        Ks,
        "Pass Master: X3 multiplier for each assist by a selected player."
      )),
        Ks.forEach(t),
        (Lt = i(Xe)),
        (et = n(Xe, "LI", {}));
      var za = s(et);
      (Ve = l(
        za,
        `No Entry: X3 multiplier for a selected goalkeeper/defender for a clean
        sheet.`
      )),
        za.forEach(t),
        (mt = i(Xe)),
        (kt = n(Xe, "LI", {}));
      var un = s(kt);
      (Dt = l(
        un,
        "Safe Hands: X3 multiplier for a goalkeeper making 5 saves."
      )),
        un.forEach(t),
        (be = i(Xe)),
        (It = n(Xe, "LI", {}));
      var ns = s(It);
      (xt = l(
        ns,
        `Captain Fantastic: X2 multiplier on the captain’s score for scoring a
        goal.`
      )),
        ns.forEach(t),
        (Zt = i(Xe)),
        (At = n(Xe, "LI", {}));
      var Pn = s(At);
      (ia = l(
        Pn,
        "Team Boost: X2 multiplier for all players from a single club."
      )),
        Pn.forEach(t),
        (ea = i(Xe)),
        (Ct = n(Xe, "LI", {}));
      var lt = s(Ct);
      (da = l(
        lt,
        "Brace Bonus: X2 multiplier for any player scoring 2+ goals."
      )),
        lt.forEach(t),
        (ta = i(Xe)),
        ($t = n(Xe, "LI", {}));
      var fn = s($t);
      (ca = l(
        fn,
        "Hat-Trick Hero: X3 multiplier for any player scoring 3+ goals."
      )),
        fn.forEach(t),
        (ha = i(Xe)),
        (ra = n(Xe, "LI", {}));
      var Ln = s(ra);
      (ya = l(
        Ln,
        "Countrymen: Double points for players of a selected nationality."
      )),
        Ln.forEach(t),
        (ua = i(Xe)),
        (la = n(Xe, "LI", {}));
      var zs = s(la);
      (_a = l(zs, "Youth Prospects: Double points for players under 21.")),
        zs.forEach(t),
        Xe.forEach(t),
        (gt = i(W)),
        (St = n(W, "H2", { class: !0 }));
      var kn = s(St);
      (Xa = l(kn, "Star Player")),
        kn.forEach(t),
        (Qa = i(W)),
        (oa = n(W, "P", { class: !0 }));
      var Dn = s(oa);
      (Ya = l(
        Dn,
        `Each week a user can select a star player. This player will receive double
      points for the gameweek. If one is not set by the start of the gameweek it
      will automatically be set to the most valuable player in your team.`
      )),
        Dn.forEach(t),
        (as = i(W)),
        (Je = n(W, "P", { class: !0 }));
      var Xs = s(Je);
      (on = l(
        Xs,
        `OpenFPL's gameplay combines strategic team management, a dynamic scoring
      system, and diverse bonuses, offering a unique and competitive fantasy
      football experience. Each decision impacts your journey through the
      Premier League season, where football knowledge and strategy lead to
      rewarding outcomes.`
      )),
        Xs.forEach(t),
        W.forEach(t),
        Za.forEach(t),
        this.h();
    },
    h() {
      c(u, "class", "text-3xl font-bold"),
        c(T, "class", "my-4"),
        c(P, "class", "text-lg font-bold"),
        c(g, "class", "my-2"),
        c(L, "class", "my-2"),
        c(A, "class", "text-lg font-bold mt-4"),
        c(F, "class", "my-2"),
        c(C, "class", "my-2"),
        c(O, "class", "text-lg font-bold mt-4"),
        c(U, "class", "my-2"),
        c(y, "class", "list-disc ml-4"),
        c(E, "class", "my-2"),
        c(X, "class", "list-disc ml-4"),
        c(Be, "class", "text-lg font-bold mt-4"),
        c(nt, "class", "my-2"),
        c(B, "class", "list-disc ml-4"),
        c(St, "class", "text-lg font-bold mt-4"),
        c(oa, "class", "my-2"),
        c(Je, "class", "my-4"),
        c(d, "class", "m-4"),
        c(h, "class", "container-fluid mx-auto p-4");
    },
    m(dn, Za) {
      Ql(dn, h, Za),
        e(h, d),
        e(d, u),
        e(u, w),
        e(d, he),
        e(d, T),
        e(T, $),
        e(d, le),
        e(d, P),
        e(P, Ie),
        e(d, Te),
        e(d, g),
        e(g, ue),
        e(d, fe),
        e(d, L),
        e(L, pe),
        e(d, xe),
        e(d, A),
        e(A, me),
        e(d, ve),
        e(d, F),
        e(F, oe),
        e(d, Ae),
        e(d, C),
        e(C, ie),
        e(d, Y),
        e(d, O),
        e(O, k),
        e(d, Z),
        e(d, U),
        e(U, Ce),
        e(d, de),
        e(d, y),
        e(y, ye),
        e(ye, Pe),
        e(y, S),
        e(y, _e),
        e(_e, Le),
        e(y, j),
        e(y, Ee),
        e(Ee, Ue),
        e(y, ee),
        e(y, K),
        e(K, ge),
        e(y, J),
        e(y, Re),
        e(Re, ke),
        e(y, te),
        e(y, $e),
        e($e, p),
        e(y, D),
        e(y, we),
        e(we, Ne),
        e(y, ae),
        e(y, Q),
        e(Q, N),
        e(y, R),
        e(y, M),
        e(M, z),
        e(y, ne),
        e(y, Ge),
        e(Ge, De),
        e(d, se),
        e(d, E),
        e(E, H),
        e(d, G),
        e(d, X),
        e(X, Fe),
        e(Fe, I),
        e(X, Ke),
        e(X, Me),
        e(Me, re),
        e(X, ze),
        e(X, Oe),
        e(Oe, ce),
        e(X, f),
        e(X, Se),
        e(Se, V),
        e(X, Qe),
        e(X, He),
        e(He, qe),
        e(d, je),
        e(d, Be),
        e(Be, b),
        e(d, at),
        e(d, nt),
        e(nt, Ye),
        e(d, ft),
        e(d, B),
        e(B, Ze),
        e(Ze, v),
        e(B, ot),
        e(B, pt),
        e(pt, m),
        e(B, Lt),
        e(B, et),
        e(et, Ve),
        e(B, mt),
        e(B, kt),
        e(kt, Dt),
        e(B, be),
        e(B, It),
        e(It, xt),
        e(B, Zt),
        e(B, At),
        e(At, ia),
        e(B, ea),
        e(B, Ct),
        e(Ct, da),
        e(B, ta),
        e(B, $t),
        e($t, ca),
        e(B, ha),
        e(B, ra),
        e(ra, ya),
        e(B, ua),
        e(B, la),
        e(la, _a),
        e(d, gt),
        e(d, St),
        e(St, Xa),
        e(d, Qa),
        e(d, oa),
        e(oa, Ya),
        e(d, as),
        e(d, Je),
        e(Je, on);
    },
    p: Jt,
    i: Jt,
    o: Jt,
    d(dn) {
      dn && t(h);
    },
  };
}
class Jg extends Kl {
  constructor(h) {
    super(), zl(this, h, null, jg, Xl, {});
  }
}
function Kg(x) {
  let h,
    d,
    u,
    w,
    he,
    T,
    $,
    le,
    P,
    Ie,
    Te,
    g,
    ue,
    fe,
    L,
    pe,
    xe,
    A,
    me,
    ve,
    F,
    oe,
    Ae,
    C,
    ie,
    Y,
    O,
    k,
    Z,
    U,
    Ce,
    de,
    y,
    ye,
    Pe,
    S,
    _e,
    Le,
    j,
    Ee,
    Ue,
    ee,
    K,
    ge,
    J,
    Re,
    ke,
    te,
    $e,
    p,
    D,
    we,
    Ne,
    ae,
    Q,
    N,
    R,
    M,
    z,
    ne,
    Ge,
    De,
    se,
    E,
    H,
    G,
    X,
    Fe,
    I,
    Ke,
    Me,
    re,
    ze;
  return {
    c() {
      (h = a("div")),
        (d = a("div")),
        (u = a("h1")),
        (w = r("Marketing")),
        (he = o()),
        (T = a("p")),
        ($ =
          r(`We will be marketing both online and in-person, taking advantage of being
      based in the UK and having access to millions of Premier League fans.`)),
        (le = o()),
        (P = a("h2")),
        (Ie = r("Online Marketing Strategy")),
        (Te = o()),
        (g = a("h2")),
        (ue = r("Collaboration with Digitial Marketing Agency")),
        (fe = o()),
        (L = a("p")),
        (pe =
          r(`We are engaging with a digital marketing agency known for their experience
      working with startups in the digital space. This agency is in the process
      of finalising plans for a comprehensive online marketing campaign. The
      campaign will focus on PPC (Pay-Per-Click) and SEO (Search Engine
      Optimisation) strategies, with an emphasis on reaching specific user
      groups effectively.`)),
        (xe = o()),
        (A = a("h2")),
        (me = r("Initial Strategy and Goals")),
        (ve = o()),
        (F = a("p")),
        (oe =
          r(`We will have a particular focus on the UK market for initial traction.
      Tracking success through KPIs, focusing on manager sign-ups and event
      attendance.`)),
        (Ae = o()),
        (C = a("h2")),
        (ie = r("OpenFPL's Initiatives")),
        (Y = o()),
        (O = a("p")),
        (k =
          r(`Our approach is to seamlessly integrate OpenFPL's online marketing
      campaigns with our broader initiatives. A key focus will be on targeted
      local advertising, aiming to highlight the distribution of 200 junior
      football club kits to grassroots football causes across the UK.
      Additionally, we've created a return on investment (ROI) leaderboard for
      each of our NFT collections. This leaderboard will highlight and market
      the clubs that are the most active and supportive in our network. The aim
      is to boost purchases through the ICPFA shop.`)),
        (Z = o()),
        (U = a("p")),
        (Ce =
          r(`In November 2023, a proposal was passed in the OpenChat DAO for them to
      become the official sponsor of OpenFPL. They will appear on our pick team
      advertising boards along with the football apparel given to grassroots
      football causes and sold through the ICPFA shop. We feel this partnership
      is important as promoting the wide arrange of apps available on the IC
      ecosytem will increase the pace at which the world adopts Internet
      Computer services.`)),
        (de = o()),
        (y = a("h2")),
        (ye = r("Future Considerations")),
        (Pe = o()),
        (S = a("p")),
        (_e =
          r(`Outside of traditional digital marketing we plan to explore additional
      areas, such as influencer marketing.`)),
        (Le = o()),
        (j = a("h2")),
        (Ee = r("In-Person Event Marketing Strategy")),
        (Ue = o()),
        (ee = a("p")),
        (K =
          r(`As part of our comprehensive marketing plan, OpenFPL is preparing to
      launch a series of in-person, interactive events in cities home to Premier
      League clubs. These events, expected to start from Q2 2024, are inspired
      by the successful engagement strategies of major UK brands like IBM, Ford
      and Coca-Cola.`)),
        (ge = o()),
        (J = a("h2")),
        (Re = r("Event Planning and Execution")),
        (ke = o()),
        (te = a("p")),
        ($e =
          r(`We are in discussions with experienced interactive hardware providers and
      event management professionals to assist in creating immersive event
      experiences. We will utilise the expertise of OpenFPL founder, James
      Beadle, in developing and delivering these interactive experiences.`)),
        (p = o()),
        (D = a("h2")),
        (we = r("Event Objectives and Content")),
        (Ne = o()),
        (ae = a("p")),
        (Q =
          r(`We would like to teach attendees about OpenFPL and the broader Internet
      Computer ecosystem, including Internet Identity and a variety of IC dApps.
      Facilitating hands-on interactions and demonstrations will provide a
      deeper understanding of OpenFPL's features and benefits.`)),
        (N = o()),
        (R = a("h2")),
        (M = r("Promotion and Community Engagement")),
        (z = o()),
        (ne = a("p")),
        (Ge =
          r(`We plan to promote these events through targeted local advertising, social
      media campaigns, and collaborations with local football clubs and
      communities. We will encouraging participants to share their experiences
      on social media through various reward scheme, amplifying our reach and
      impact.`)),
        (De = o()),
        (se = a("h2")),
        (E = r("Long-Term Vision")),
        (H = o()),
        (G = a("p")),
        (X =
          r(`We will be exploring opportunities to replicate this event model in other
      regions, expanding OpenFPL's global footprint.`)),
        (Fe = o()),
        (I = a("h2")),
        (Ke = r("Overall Approach")),
        (Me = o()),
        (re = a("p")),
        (ze =
          r(`The marketing plan aims to be dynamic, adapting to the evolving needs of
      OpenFPL and the response from the target audience. The digital agency and
      OpenFPL will work closely to ensure that the campaigns are coherent,
      data-driven, and aligned with OpenFPL’s overall branding and objectives.`)),
        this.h();
    },
    l(Oe) {
      h = n(Oe, "DIV", { class: !0 });
      var ce = s(h);
      d = n(ce, "DIV", { class: !0 });
      var f = s(d);
      u = n(f, "H1", { class: !0 });
      var Se = s(u);
      (w = l(Se, "Marketing")),
        Se.forEach(t),
        (he = i(f)),
        (T = n(f, "P", { class: !0 }));
      var V = s(T);
      ($ = l(
        V,
        `We will be marketing both online and in-person, taking advantage of being
      based in the UK and having access to millions of Premier League fans.`
      )),
        V.forEach(t),
        (le = i(f)),
        (P = n(f, "H2", { class: !0 }));
      var Qe = s(P);
      (Ie = l(Qe, "Online Marketing Strategy")),
        Qe.forEach(t),
        (Te = i(f)),
        (g = n(f, "H2", { class: !0 }));
      var He = s(g);
      (ue = l(He, "Collaboration with Digitial Marketing Agency")),
        He.forEach(t),
        (fe = i(f)),
        (L = n(f, "P", { class: !0 }));
      var qe = s(L);
      (pe = l(
        qe,
        `We are engaging with a digital marketing agency known for their experience
      working with startups in the digital space. This agency is in the process
      of finalising plans for a comprehensive online marketing campaign. The
      campaign will focus on PPC (Pay-Per-Click) and SEO (Search Engine
      Optimisation) strategies, with an emphasis on reaching specific user
      groups effectively.`
      )),
        qe.forEach(t),
        (xe = i(f)),
        (A = n(f, "H2", { class: !0 }));
      var je = s(A);
      (me = l(je, "Initial Strategy and Goals")),
        je.forEach(t),
        (ve = i(f)),
        (F = n(f, "P", { class: !0 }));
      var Be = s(F);
      (oe = l(
        Be,
        `We will have a particular focus on the UK market for initial traction.
      Tracking success through KPIs, focusing on manager sign-ups and event
      attendance.`
      )),
        Be.forEach(t),
        (Ae = i(f)),
        (C = n(f, "H2", { class: !0 }));
      var b = s(C);
      (ie = l(b, "OpenFPL's Initiatives")),
        b.forEach(t),
        (Y = i(f)),
        (O = n(f, "P", { class: !0 }));
      var at = s(O);
      (k = l(
        at,
        `Our approach is to seamlessly integrate OpenFPL's online marketing
      campaigns with our broader initiatives. A key focus will be on targeted
      local advertising, aiming to highlight the distribution of 200 junior
      football club kits to grassroots football causes across the UK.
      Additionally, we've created a return on investment (ROI) leaderboard for
      each of our NFT collections. This leaderboard will highlight and market
      the clubs that are the most active and supportive in our network. The aim
      is to boost purchases through the ICPFA shop.`
      )),
        at.forEach(t),
        (Z = i(f)),
        (U = n(f, "P", { class: !0 }));
      var nt = s(U);
      (Ce = l(
        nt,
        `In November 2023, a proposal was passed in the OpenChat DAO for them to
      become the official sponsor of OpenFPL. They will appear on our pick team
      advertising boards along with the football apparel given to grassroots
      football causes and sold through the ICPFA shop. We feel this partnership
      is important as promoting the wide arrange of apps available on the IC
      ecosytem will increase the pace at which the world adopts Internet
      Computer services.`
      )),
        nt.forEach(t),
        (de = i(f)),
        (y = n(f, "H2", { class: !0 }));
      var Ye = s(y);
      (ye = l(Ye, "Future Considerations")),
        Ye.forEach(t),
        (Pe = i(f)),
        (S = n(f, "P", { class: !0 }));
      var ft = s(S);
      (_e = l(
        ft,
        `Outside of traditional digital marketing we plan to explore additional
      areas, such as influencer marketing.`
      )),
        ft.forEach(t),
        (Le = i(f)),
        (j = n(f, "H2", { class: !0 }));
      var B = s(j);
      (Ee = l(B, "In-Person Event Marketing Strategy")),
        B.forEach(t),
        (Ue = i(f)),
        (ee = n(f, "P", { class: !0 }));
      var Ze = s(ee);
      (K = l(
        Ze,
        `As part of our comprehensive marketing plan, OpenFPL is preparing to
      launch a series of in-person, interactive events in cities home to Premier
      League clubs. These events, expected to start from Q2 2024, are inspired
      by the successful engagement strategies of major UK brands like IBM, Ford
      and Coca-Cola.`
      )),
        Ze.forEach(t),
        (ge = i(f)),
        (J = n(f, "H2", { class: !0 }));
      var v = s(J);
      (Re = l(v, "Event Planning and Execution")),
        v.forEach(t),
        (ke = i(f)),
        (te = n(f, "P", { class: !0 }));
      var ot = s(te);
      ($e = l(
        ot,
        `We are in discussions with experienced interactive hardware providers and
      event management professionals to assist in creating immersive event
      experiences. We will utilise the expertise of OpenFPL founder, James
      Beadle, in developing and delivering these interactive experiences.`
      )),
        ot.forEach(t),
        (p = i(f)),
        (D = n(f, "H2", { class: !0 }));
      var pt = s(D);
      (we = l(pt, "Event Objectives and Content")),
        pt.forEach(t),
        (Ne = i(f)),
        (ae = n(f, "P", { class: !0 }));
      var m = s(ae);
      (Q = l(
        m,
        `We would like to teach attendees about OpenFPL and the broader Internet
      Computer ecosystem, including Internet Identity and a variety of IC dApps.
      Facilitating hands-on interactions and demonstrations will provide a
      deeper understanding of OpenFPL's features and benefits.`
      )),
        m.forEach(t),
        (N = i(f)),
        (R = n(f, "H2", { class: !0 }));
      var Lt = s(R);
      (M = l(Lt, "Promotion and Community Engagement")),
        Lt.forEach(t),
        (z = i(f)),
        (ne = n(f, "P", { class: !0 }));
      var et = s(ne);
      (Ge = l(
        et,
        `We plan to promote these events through targeted local advertising, social
      media campaigns, and collaborations with local football clubs and
      communities. We will encouraging participants to share their experiences
      on social media through various reward scheme, amplifying our reach and
      impact.`
      )),
        et.forEach(t),
        (De = i(f)),
        (se = n(f, "H2", { class: !0 }));
      var Ve = s(se);
      (E = l(Ve, "Long-Term Vision")),
        Ve.forEach(t),
        (H = i(f)),
        (G = n(f, "P", { class: !0 }));
      var mt = s(G);
      (X = l(
        mt,
        `We will be exploring opportunities to replicate this event model in other
      regions, expanding OpenFPL's global footprint.`
      )),
        mt.forEach(t),
        (Fe = i(f)),
        (I = n(f, "H2", { class: !0 }));
      var kt = s(I);
      (Ke = l(kt, "Overall Approach")),
        kt.forEach(t),
        (Me = i(f)),
        (re = n(f, "P", { class: !0 }));
      var Dt = s(re);
      (ze = l(
        Dt,
        `The marketing plan aims to be dynamic, adapting to the evolving needs of
      OpenFPL and the response from the target audience. The digital agency and
      OpenFPL will work closely to ensure that the campaigns are coherent,
      data-driven, and aligned with OpenFPL’s overall branding and objectives.`
      )),
        Dt.forEach(t),
        f.forEach(t),
        ce.forEach(t),
        this.h();
    },
    h() {
      c(u, "class", "text-3xl font-bold"),
        c(T, "class", "my-4"),
        c(P, "class", "text-xl font-bold mb-4"),
        c(g, "class", "text-lg font-bold"),
        c(L, "class", "my-2"),
        c(A, "class", "text-lg font-bold mt-4"),
        c(F, "class", "my-2"),
        c(C, "class", "text-lg font-bold mt-4"),
        c(O, "class", "my-2"),
        c(U, "class", "my-2"),
        c(y, "class", "text-lg font-bold mt-4"),
        c(S, "class", "my-2"),
        c(j, "class", "text-xl font-bold"),
        c(ee, "class", "my-2"),
        c(J, "class", "text-lg font-bold mt-4"),
        c(te, "class", "my-2"),
        c(D, "class", "text-lg font-bold mt-4"),
        c(ae, "class", "my-2"),
        c(R, "class", "text-lg font-bold mt-4"),
        c(ne, "class", "my-2"),
        c(se, "class", "text-lg font-bold mt-4"),
        c(G, "class", "my-2"),
        c(I, "class", "text-xl font-bold mt-4"),
        c(re, "class", "my-2"),
        c(d, "class", "m-4"),
        c(h, "class", "container-fluid mx-auto p-4");
    },
    m(Oe, ce) {
      Ql(Oe, h, ce),
        e(h, d),
        e(d, u),
        e(u, w),
        e(d, he),
        e(d, T),
        e(T, $),
        e(d, le),
        e(d, P),
        e(P, Ie),
        e(d, Te),
        e(d, g),
        e(g, ue),
        e(d, fe),
        e(d, L),
        e(L, pe),
        e(d, xe),
        e(d, A),
        e(A, me),
        e(d, ve),
        e(d, F),
        e(F, oe),
        e(d, Ae),
        e(d, C),
        e(C, ie),
        e(d, Y),
        e(d, O),
        e(O, k),
        e(d, Z),
        e(d, U),
        e(U, Ce),
        e(d, de),
        e(d, y),
        e(y, ye),
        e(d, Pe),
        e(d, S),
        e(S, _e),
        e(d, Le),
        e(d, j),
        e(j, Ee),
        e(d, Ue),
        e(d, ee),
        e(ee, K),
        e(d, ge),
        e(d, J),
        e(J, Re),
        e(d, ke),
        e(d, te),
        e(te, $e),
        e(d, p),
        e(d, D),
        e(D, we),
        e(d, Ne),
        e(d, ae),
        e(ae, Q),
        e(d, N),
        e(d, R),
        e(R, M),
        e(d, z),
        e(d, ne),
        e(ne, Ge),
        e(d, De),
        e(d, se),
        e(se, E),
        e(d, H),
        e(d, G),
        e(G, X),
        e(d, Fe),
        e(d, I),
        e(I, Ke),
        e(d, Me),
        e(d, re),
        e(re, ze);
    },
    p: Jt,
    i: Jt,
    o: Jt,
    d(Oe) {
      Oe && t(h);
    },
  };
}
class zg extends Kl {
  constructor(h) {
    super(), zl(this, h, null, Kg, Xl, {});
  }
}
function Xg(x) {
  let h,
    d,
    u,
    w,
    he,
    T,
    $,
    le,
    P,
    Ie,
    Te,
    g,
    ue,
    fe,
    L,
    pe,
    xe,
    A,
    me,
    ve,
    F,
    oe,
    Ae,
    C,
    ie,
    Y,
    O,
    k,
    Z,
    U,
    Ce,
    de,
    y,
    ye,
    Pe,
    S,
    _e,
    Le,
    j,
    Ee,
    Ue,
    ee,
    K,
    ge,
    J,
    Re,
    ke,
    te,
    $e,
    p,
    D,
    we,
    Ne,
    ae,
    Q,
    N,
    R,
    M,
    z,
    ne,
    Ge,
    De,
    se,
    E,
    H,
    G,
    X,
    Fe,
    I,
    Ke,
    Me,
    re,
    ze,
    Oe,
    ce,
    f,
    Se,
    V,
    Qe,
    He,
    qe,
    je,
    Be,
    b,
    at,
    nt,
    Ye,
    ft;
  return {
    c() {
      (h = a("div")),
        (d = a("div")),
        (u = a("h1")),
        (w = r("OpenFPL Revenue Streams")),
        (he = o()),
        (T = a("p")),
        ($ =
          r(`OpenFPL's revenue model is thoughtfully designed to sustain and grow the
      DAO while ensuring practical utility and value for its users.`)),
        (le = o()),
        (P = a("h2")),
        (Ie = r("Diversified Revenue Model")),
        (Te = o()),
        (g = a("p")),
        (ue =
          r(`To avoid creating a supply shock by pegging services to a fixed token
      amount, OpenFPL's revenue streams are diversified. This approach mitigates
      the risk of reduced service usage due to infeasibility, ensuring long-term
      stability and utility.`)),
        (fe = o()),
        (L = a("p")),
        (pe =
          r(`Revenue streams include Private Leagues, Site Sponsorship, Content
      Creators, Podcasts, and Merchandise. These channels provide a balanced mix
      of $FPL and $ICP revenue, enhancing the DAO's financial resilience.`)),
        (xe = o()),
        (A = a("h2")),
        (me = r("Private Leagues")),
        (ve = o()),
        (F = a("p")),
        (oe =
          r(`Private league fees in OpenFPL are charged in ICP to establish a stable
      revenue base. This approach aligns the revenue directly with the number of
      managers, ensuring it scales with user engagement.`)),
        (Ae = o()),
        (C = a("h2")),
        (ie = r("Merchandise")),
        (Y = o()),
        (O = a("p")),
        (k = r("We have setup a shop at ")),
        (Z = a("a")),
        (U = r("icpfa.org/shop")),
        (Ce =
          r(` where you will be able to purchase OpenFPL merchandise in FPL or ICP. All
      profits after the promotion, marketing and production of this merchandise will
      be deposited into the DAO's treasury.`)),
        (de = o()),
        (y = a("h2")),
        (ye = r("Podcasts")),
        (Pe = o()),
        (S = a("p")),
        (_e =
          r(`OpenFPL is expanding into podcasting with a main podcast and then various
      club-specific satellite podcasts. Initially hosted off-chain, our
      long-term goal is to transition these to on-chain hosting as services
      become available.`)),
        (Le = o()),
        (j = a("p")),
        (Ee =
          r(`The main podcast will cover general OpenFPL and football topics, while the
      satellite podcasts will target fans of specific clubs.`)),
        (Ue = o()),
        (ee = a("p")),
        (K =
          r(`Revenue will be generated from sponsorships and advertising. As our
      listener base grows, these podcasts are expected to become increasingly
      lucrative. All profits, after production costs, will be deposited into the
      DAO's treasury. Beyond revenue, these podcasts are a strategic move to
      bolster community engagement and enhance the OpenFPL brand, providing
      valuable content to our audience.`)),
        (ge = o()),
        (J = a("h2")),
        (Re = r("Site Sponsorship")),
        (ke = o()),
        (te = a("p")),
        ($e =
          r(`Starting from August 2025, following the conclusion of the sponsorship
      deal with OpenChat, OpenFPL will offer the site sponsorship rights for
      bidding through the DAO. This will open opportunities for interested
      parties to become the named sponsor for an entire season.`)),
        (p = o()),
        (D = a("p")),
        (we =
          r(`Each year, sponsors can submit their bids to become the main site sponsor
      for the upcoming season, offering any ICRC-1 currency. Once a sponsor is
      selected, their exclusive rights will be secure for the entirety of that
      season. The DAO will not allow further proposals for site sponsorship
      until the subsequent preseason, ensuring the sponsor's exclusive
      visibility and association with OpenFPL.`)),
        (Ne = o()),
        (ae = a("p")),
        (Q =
          r(`All sponsorship revenue will be directed into the DAO's treasury,
      contributing to the financial health and sustainability of OpenFPL.`)),
        (N = o()),
        (R = a("h2")),
        (M = r("Content Creators")),
        (z = o()),
        (ne = a("p")),
        (Ge =
          r(`OpenFPL will create a platform for content creators that is designed to
      both empower creators and enhance the utility of the FPL token. Creators
      will produce fantasy football-related content and share it on OpenFPL.
      This content will be available through a video reel format accessible to
      all users.`)),
        (De = o()),
        (se = a("p")),
        (E =
          r(`For general reel content, creators earn from a pool of FPL tokens,
      allocated based on user likes. Creators can also offer exclusive content
      for subscribers. They will receive 95% of the FPL tokens from these
      subscriptions.`)),
        (H = o()),
        (G = a("p")),
        (X =
          r(`Subscriptions are purchased exclusively with FPL tokens, enhancing their
      utility. The remaining 5% from subscriptions remains in the DAO's
      treasury. This approach aligns with OpenFPL's commitment to supporting
      content creators, increasing FPL token utility, and rewarding its
      community of neuron holders.`)),
        (Fe = o()),
        (I = a("h2")),
        (Ke = r("Revenue Redistribution Plan")),
        (Me = o()),
        (re = a("p")),
        (ze =
          r(`In line with our commitment to directly benefit neuron holders, OpenFPL
      will allocate 50% of any ICRC-1 token received by the DAO each month to
      neuron holders.`)),
        (Oe = o()),
        (ce = a("p")),
        (f =
          r(`Distribution to neuron holders will be proportional to each neuron's total
      $FPL value and its remaining duration. This ensures a fair and equitable
      redistribution of revenue.`)),
        (Se = o()),
        (V = a("p")),
        (Qe =
          r(`Calculation for this distribution will be based on the status of FPL
      neurons as at the end of each month, aligning with the DAO's transparent
      and community-focused ethos.`)),
        (He = o()),
        (qe = a("h2")),
        (je = r("Overall Revenue Philosophy")),
        (Be = o()),
        (b = a("p")),
        (at =
          r(`OpenFPL’s revenue philosophy is rooted in creating a sustainable ecosystem
      where the utility token maintains its value and relevance.`)),
        (nt = o()),
        (Ye = a("p")),
        (ft =
          r(`The reinvestment of revenues into the DAO and direct distribution to
      neuron holders are designed to foster a cycle of growth, user engagement,
      and shared prosperity.`)),
        this.h();
    },
    l(B) {
      h = n(B, "DIV", { class: !0 });
      var Ze = s(h);
      d = n(Ze, "DIV", { class: !0 });
      var v = s(d);
      u = n(v, "H1", { class: !0 });
      var ot = s(u);
      (w = l(ot, "OpenFPL Revenue Streams")),
        ot.forEach(t),
        (he = i(v)),
        (T = n(v, "P", { class: !0 }));
      var pt = s(T);
      ($ = l(
        pt,
        `OpenFPL's revenue model is thoughtfully designed to sustain and grow the
      DAO while ensuring practical utility and value for its users.`
      )),
        pt.forEach(t),
        (le = i(v)),
        (P = n(v, "H2", { class: !0 }));
      var m = s(P);
      (Ie = l(m, "Diversified Revenue Model")),
        m.forEach(t),
        (Te = i(v)),
        (g = n(v, "P", { class: !0 }));
      var Lt = s(g);
      (ue = l(
        Lt,
        `To avoid creating a supply shock by pegging services to a fixed token
      amount, OpenFPL's revenue streams are diversified. This approach mitigates
      the risk of reduced service usage due to infeasibility, ensuring long-term
      stability and utility.`
      )),
        Lt.forEach(t),
        (fe = i(v)),
        (L = n(v, "P", { class: !0 }));
      var et = s(L);
      (pe = l(
        et,
        `Revenue streams include Private Leagues, Site Sponsorship, Content
      Creators, Podcasts, and Merchandise. These channels provide a balanced mix
      of $FPL and $ICP revenue, enhancing the DAO's financial resilience.`
      )),
        et.forEach(t),
        (xe = i(v)),
        (A = n(v, "H2", { class: !0 }));
      var Ve = s(A);
      (me = l(Ve, "Private Leagues")),
        Ve.forEach(t),
        (ve = i(v)),
        (F = n(v, "P", { class: !0 }));
      var mt = s(F);
      (oe = l(
        mt,
        `Private league fees in OpenFPL are charged in ICP to establish a stable
      revenue base. This approach aligns the revenue directly with the number of
      managers, ensuring it scales with user engagement.`
      )),
        mt.forEach(t),
        (Ae = i(v)),
        (C = n(v, "H2", { class: !0 }));
      var kt = s(C);
      (ie = l(kt, "Merchandise")),
        kt.forEach(t),
        (Y = i(v)),
        (O = n(v, "P", { class: !0 }));
      var Dt = s(O);
      (k = l(Dt, "We have setup a shop at ")),
        (Z = n(Dt, "A", { class: !0, href: !0 }));
      var be = s(Z);
      (U = l(be, "icpfa.org/shop")),
        be.forEach(t),
        (Ce = l(
          Dt,
          ` where you will be able to purchase OpenFPL merchandise in FPL or ICP. All
      profits after the promotion, marketing and production of this merchandise will
      be deposited into the DAO's treasury.`
        )),
        Dt.forEach(t),
        (de = i(v)),
        (y = n(v, "H2", { class: !0 }));
      var It = s(y);
      (ye = l(It, "Podcasts")),
        It.forEach(t),
        (Pe = i(v)),
        (S = n(v, "P", { class: !0 }));
      var xt = s(S);
      (_e = l(
        xt,
        `OpenFPL is expanding into podcasting with a main podcast and then various
      club-specific satellite podcasts. Initially hosted off-chain, our
      long-term goal is to transition these to on-chain hosting as services
      become available.`
      )),
        xt.forEach(t),
        (Le = i(v)),
        (j = n(v, "P", { class: !0 }));
      var Zt = s(j);
      (Ee = l(
        Zt,
        `The main podcast will cover general OpenFPL and football topics, while the
      satellite podcasts will target fans of specific clubs.`
      )),
        Zt.forEach(t),
        (Ue = i(v)),
        (ee = n(v, "P", { class: !0 }));
      var At = s(ee);
      (K = l(
        At,
        `Revenue will be generated from sponsorships and advertising. As our
      listener base grows, these podcasts are expected to become increasingly
      lucrative. All profits, after production costs, will be deposited into the
      DAO's treasury. Beyond revenue, these podcasts are a strategic move to
      bolster community engagement and enhance the OpenFPL brand, providing
      valuable content to our audience.`
      )),
        At.forEach(t),
        (ge = i(v)),
        (J = n(v, "H2", { class: !0 }));
      var ia = s(J);
      (Re = l(ia, "Site Sponsorship")),
        ia.forEach(t),
        (ke = i(v)),
        (te = n(v, "P", { class: !0 }));
      var ea = s(te);
      ($e = l(
        ea,
        `Starting from August 2025, following the conclusion of the sponsorship
      deal with OpenChat, OpenFPL will offer the site sponsorship rights for
      bidding through the DAO. This will open opportunities for interested
      parties to become the named sponsor for an entire season.`
      )),
        ea.forEach(t),
        (p = i(v)),
        (D = n(v, "P", { class: !0 }));
      var Ct = s(D);
      (we = l(
        Ct,
        `Each year, sponsors can submit their bids to become the main site sponsor
      for the upcoming season, offering any ICRC-1 currency. Once a sponsor is
      selected, their exclusive rights will be secure for the entirety of that
      season. The DAO will not allow further proposals for site sponsorship
      until the subsequent preseason, ensuring the sponsor's exclusive
      visibility and association with OpenFPL.`
      )),
        Ct.forEach(t),
        (Ne = i(v)),
        (ae = n(v, "P", { class: !0 }));
      var da = s(ae);
      (Q = l(
        da,
        `All sponsorship revenue will be directed into the DAO's treasury,
      contributing to the financial health and sustainability of OpenFPL.`
      )),
        da.forEach(t),
        (N = i(v)),
        (R = n(v, "H2", { class: !0 }));
      var ta = s(R);
      (M = l(ta, "Content Creators")),
        ta.forEach(t),
        (z = i(v)),
        (ne = n(v, "P", { class: !0 }));
      var $t = s(ne);
      (Ge = l(
        $t,
        `OpenFPL will create a platform for content creators that is designed to
      both empower creators and enhance the utility of the FPL token. Creators
      will produce fantasy football-related content and share it on OpenFPL.
      This content will be available through a video reel format accessible to
      all users.`
      )),
        $t.forEach(t),
        (De = i(v)),
        (se = n(v, "P", { class: !0 }));
      var ca = s(se);
      (E = l(
        ca,
        `For general reel content, creators earn from a pool of FPL tokens,
      allocated based on user likes. Creators can also offer exclusive content
      for subscribers. They will receive 95% of the FPL tokens from these
      subscriptions.`
      )),
        ca.forEach(t),
        (H = i(v)),
        (G = n(v, "P", { class: !0 }));
      var ha = s(G);
      (X = l(
        ha,
        `Subscriptions are purchased exclusively with FPL tokens, enhancing their
      utility. The remaining 5% from subscriptions remains in the DAO's
      treasury. This approach aligns with OpenFPL's commitment to supporting
      content creators, increasing FPL token utility, and rewarding its
      community of neuron holders.`
      )),
        ha.forEach(t),
        (Fe = i(v)),
        (I = n(v, "H2", { class: !0 }));
      var ra = s(I);
      (Ke = l(ra, "Revenue Redistribution Plan")),
        ra.forEach(t),
        (Me = i(v)),
        (re = n(v, "P", { class: !0 }));
      var ya = s(re);
      (ze = l(
        ya,
        `In line with our commitment to directly benefit neuron holders, OpenFPL
      will allocate 50% of any ICRC-1 token received by the DAO each month to
      neuron holders.`
      )),
        ya.forEach(t),
        (Oe = i(v)),
        (ce = n(v, "P", { class: !0 }));
      var ua = s(ce);
      (f = l(
        ua,
        `Distribution to neuron holders will be proportional to each neuron's total
      $FPL value and its remaining duration. This ensures a fair and equitable
      redistribution of revenue.`
      )),
        ua.forEach(t),
        (Se = i(v)),
        (V = n(v, "P", { class: !0 }));
      var la = s(V);
      (Qe = l(
        la,
        `Calculation for this distribution will be based on the status of FPL
      neurons as at the end of each month, aligning with the DAO's transparent
      and community-focused ethos.`
      )),
        la.forEach(t),
        (He = i(v)),
        (qe = n(v, "H2", { class: !0 }));
      var _a = s(qe);
      (je = l(_a, "Overall Revenue Philosophy")),
        _a.forEach(t),
        (Be = i(v)),
        (b = n(v, "P", { class: !0 }));
      var gt = s(b);
      (at = l(
        gt,
        `OpenFPL’s revenue philosophy is rooted in creating a sustainable ecosystem
      where the utility token maintains its value and relevance.`
      )),
        gt.forEach(t),
        (nt = i(v)),
        (Ye = n(v, "P", { class: !0 }));
      var St = s(Ye);
      (ft = l(
        St,
        `The reinvestment of revenues into the DAO and direct distribution to
      neuron holders are designed to foster a cycle of growth, user engagement,
      and shared prosperity.`
      )),
        St.forEach(t),
        v.forEach(t),
        Ze.forEach(t),
        this.h();
    },
    h() {
      c(u, "class", "text-3xl font-bold"),
        c(T, "class", "my-4"),
        c(P, "class", "text-lg font-bold"),
        c(g, "class", "my-2"),
        c(L, "class", "my-2"),
        c(A, "class", "text-lg font-bold mt-4"),
        c(F, "class", "my-2"),
        c(C, "class", "text-lg font-bold mt-4"),
        c(Z, "class", "text-blue-500"),
        c(Z, "href", "https://icpga.org/shop"),
        c(O, "class", "my-2"),
        c(y, "class", "text-xl font-bold"),
        c(S, "class", "my-2"),
        c(j, "class", "my-2"),
        c(ee, "class", "my-2"),
        c(J, "class", "text-lg font-bold mt-4"),
        c(te, "class", "my-2"),
        c(D, "class", "my-2"),
        c(ae, "class", "my-2"),
        c(R, "class", "text-lg font-bold mt-4"),
        c(ne, "class", "my-2"),
        c(se, "class", "my-2"),
        c(G, "class", "my-2"),
        c(I, "class", "text-lg font-bold mt-4"),
        c(re, "class", "my-2"),
        c(ce, "class", "my-2"),
        c(V, "class", "my-2"),
        c(qe, "class", "text-xl font-bold mt-4"),
        c(b, "class", "my-2"),
        c(Ye, "class", "my-2"),
        c(d, "class", "m-4"),
        c(h, "class", "container-fluid mx-auto p-4");
    },
    m(B, Ze) {
      Ql(B, h, Ze),
        e(h, d),
        e(d, u),
        e(u, w),
        e(d, he),
        e(d, T),
        e(T, $),
        e(d, le),
        e(d, P),
        e(P, Ie),
        e(d, Te),
        e(d, g),
        e(g, ue),
        e(d, fe),
        e(d, L),
        e(L, pe),
        e(d, xe),
        e(d, A),
        e(A, me),
        e(d, ve),
        e(d, F),
        e(F, oe),
        e(d, Ae),
        e(d, C),
        e(C, ie),
        e(d, Y),
        e(d, O),
        e(O, k),
        e(O, Z),
        e(Z, U),
        e(O, Ce),
        e(d, de),
        e(d, y),
        e(y, ye),
        e(d, Pe),
        e(d, S),
        e(S, _e),
        e(d, Le),
        e(d, j),
        e(j, Ee),
        e(d, Ue),
        e(d, ee),
        e(ee, K),
        e(d, ge),
        e(d, J),
        e(J, Re),
        e(d, ke),
        e(d, te),
        e(te, $e),
        e(d, p),
        e(d, D),
        e(D, we),
        e(d, Ne),
        e(d, ae),
        e(ae, Q),
        e(d, N),
        e(d, R),
        e(R, M),
        e(d, z),
        e(d, ne),
        e(ne, Ge),
        e(d, De),
        e(d, se),
        e(se, E),
        e(d, H),
        e(d, G),
        e(G, X),
        e(d, Fe),
        e(d, I),
        e(I, Ke),
        e(d, Me),
        e(d, re),
        e(re, ze),
        e(d, Oe),
        e(d, ce),
        e(ce, f),
        e(d, Se),
        e(d, V),
        e(V, Qe),
        e(d, He),
        e(d, qe),
        e(qe, je),
        e(d, Be),
        e(d, b),
        e(b, at),
        e(d, nt),
        e(d, Ye),
        e(Ye, ft);
    },
    p: Jt,
    i: Jt,
    o: Jt,
    d(B) {
      B && t(h);
    },
  };
}
class Qg extends Kl {
  constructor(h) {
    super(), zl(this, h, null, Xg, Xl, {});
  }
}
function Yg(x) {
  let h,
    d,
    u,
    w,
    he,
    T,
    $,
    le,
    P,
    Ie,
    Te,
    g,
    ue,
    fe,
    L,
    pe,
    xe,
    A,
    me,
    ve,
    F,
    oe,
    Ae,
    C,
    ie,
    Y,
    O,
    k,
    Z,
    U,
    Ce,
    de,
    y,
    ye,
    Pe,
    S,
    _e,
    Le,
    j,
    Ee,
    Ue,
    ee,
    K,
    ge,
    J,
    Re,
    ke,
    te,
    $e,
    p,
    D,
    we,
    Ne,
    ae,
    Q,
    N,
    R,
    M,
    z,
    ne,
    Ge,
    De,
    se,
    E,
    H,
    G,
    X,
    Fe,
    I,
    Ke,
    Me,
    re,
    ze,
    Oe,
    ce,
    f,
    Se,
    V,
    Qe,
    He,
    qe,
    je,
    Be,
    b,
    at,
    nt,
    Ye,
    ft,
    B,
    Ze,
    v;
  return {
    c() {
      (h = a("div")),
        (d = a("div")),
        (u = a("h1")),
        (w = r("Roadmap")),
        (he = o()),
        (T = a("p")),
        ($ = r("We have an ambitious roadmap of features we aim to release:")),
        (le = o()),
        (P = a("h2")),
        (Ie = r("November 2023: Investment NFTs Launch")),
        (Te = o()),
        (g = a("p")),
        (ue =
          r(`We will be launching 2 NFT collections in November 2024 to give the
      opportunity for users to share in OpenFPL merchandise and podcast revenue.
      These NFTs will be used to fund the production of OpenFPL merchandise
      along with promotion of the OpenFPL platform in the run up to the genesis
      season. Further information can be found in the marketing section of this
      whitepaper.`)),
        (fe = o()),
        (L = a("h2")),
        (pe = r("December 2023: Svelte Frontend Upgrade")),
        (xe = o()),
        (A = a("p")),
        (me =
          r(`We're aligning OpenFPL with flagship IC apps like the NNS, OpenChat & Juno
      by adopting Svelte. This upgrade ensures a consistent user experience and
      leverages Svelte’s server-side rendering for faster load times.`)),
        (ve = o()),
        (F = a("h2")),
        (oe = r("Jan - Feb 2024: SNS Testflight Testing")),
        (Ae = o()),
        (C = a("p")),
        (ie =
          r(`We will perform comprehensive testing of the OpenFPL gameplay and
      governance features. Detailed descriptions and outcomes of various use
      case tests, demonstrating how gameplay and governance features perform in
      different situations.`)),
        (Y = o()),
        (O = a("h2")),
        (k = r("January 2024: 'The OpenFPL Podcast' Launch")),
        (Z = o()),
        (U = a("p")),
        (Ce =
          r(`Starting with a main podcast, we aim to expand into fan-focused podcasts,
      emulating the model of successful platforms like Arsenal Fan TV. Initially
      audio-based, these podcasts will eventually include video content, adding
      another dimension to our engagement strategy.`)),
        (de = o()),
        (y = a("h2")),
        (ye = r("January 2024: Shirt Production Begins")),
        (Pe = o()),
        (S = a("p")),
        (_e =
          r(`We are actively engaged in shirt production for OpenFPL, moving beyond
      mere concepts to tangible products. Our collaboration with a UK supplier
      is set to kit out 200 junior clubs with OpenFPL-branded shirts for
      charity, marking our first foray into merging style with the spirit of the
      game. This initiative is further elevated by a successful partnership with
      OpenChat. A recent proposal in the OpenChat DAO has been passed, resulting
      in OpenChat sponsoring half of these shirts, a testament to our
      collaborative efforts and shared vision. Concurrently, we are in advanced
      talks with a manufacturer in India, having already developed a promising
      prototype. We are fine-tuning the details to perfect the shirts, with
      production anticipated to commence in just a few months. Additionally,
      these shirts will be available for sale in the ICPFA shop, with a portion
      of each sale benefiting our NFT holders. This dual approach not only
      strengthens our brand presence but also underscores our commitment to
      supporting grassroots football communities and providing value to our NFT
      investors.`)),
        (Le = o()),
        (j = a("h2")),
        (Ee = r("February 2024: Online Marketing Campaigns")),
        (Ue = o()),
        (ee = a("p")),
        (K =
          r(`We are actively in discussions with a digital marketing agency, preparing
      to launch campaigns aimed at organically growing our base of genuine
      managers. The strategy being formulated focuses on SEO and PPC methods
      aligned with OpenFPL's objectives. These deliberations include choosing
      the most suitable online platforms and crafting a strategy that resonates
      with our ethos. The direction of these campaigns is geared towards
      measurable outcomes, especially in attracting genuine manager sign-ups and
      naturally expanding our online footprint. This approach is designed to
      cultivate a genuine and engaged community, enhancing OpenFPL's presence in
      a manner that's both authentic and impactful.`)),
        (ge = o()),
        (J = a("h2")),
        (Re = r("March 1st 2024: OpenFPL SNS Decentralisation Sale")),
        (ke = o()),
        (te = a("p")),
        ($e =
          r(`We aim to begin our decentralisation sale on 1st March 2024, selling 25
      million $FPL tokens (25%).`)),
        (p = o()),
        (D = a("h2")),
        (we = r("April 2024: Private Leagues")),
        (Ne = o()),
        (ae = a("p")),
        (Q =
          r(`The Private Leagues feature is the start of building your own OpenFPL
      community within the DAO. Managers will be able to create a Private League
      for a fee of 1 $ICP. Managers will have full control over their rewards
      structure, with features such as: Deciding on the entry fee, if any. Any
      entry fee can be in $FPL, $ICP or ckBTC. Deciding on the rewards structure
      currency, amount and percentage payouts per finishing position.`)),
        (N = o()),
        (R = a("h2")),
        (M = r("April 2024: OpenFPL Events")),
        (z = o()),
        (ne = a("p")),
        (Ge =
          r(`OpenFPL is set to create a series of interactive experiences at event
      locations in Premier League club cities, drawing inspiration from major UK
      brands like IBM, Ford and Coca-Cola. Planned from Q2 2024 onwards, these
      events will leverage the expertise of OpenFPL founder James Beadle. With
      his experience in creating successful and engaging interactive
      experiences, James aims to play a key role in educating attendees about
      OpenFPL, Internet Identity and the range of other IC dApps available.`)),
        (De = o()),
        (se = a("h2")),
        (E = r("July 2024: Mobile App Launch")),
        (H = o()),
        (G = a("p")),
        (X =
          r(`We will release a mobile app shortly before the genesis season begins to
      make OpenFPL more accessible and convenient for users on the go.`)),
        (Fe = o()),
        (I = a("h2")),
        (Ke = r("August 2024: OpenFPL Genesis Season Begins")),
        (Me = o()),
        (re = a("p")),
        (ze =
          r(`In August 2024, we launch our inaugural season, where fantasy teams start
      competing for $FPL rewards on a weekly, monthly and annual basis to
      maximise user engagment.`)),
        (Oe = o()),
        (ce = a("h2")),
        (f = r("November 2024: Content Subscription Launch")),
        (Se = o()),
        (V = a("p")),
        (Qe =
          r(`Partnering with Premier League content creators to offer exclusive
      insights, with a unique monetization model for both free and
      subscription-based content.`)),
        (He = o()),
        (qe = a("h2")),
        (je = r("March 2025: OpenChat Integration")),
        (Be = o()),
        (b = a("p")),
        (at =
          r(`Integrating OpenChat for seamless communication within the OpenFPL
      community, providing updates and increasing engagement through group
      channels.`)),
        (nt = o()),
        (Ye = a("h2")),
        (ft = r("Future: 100% On-Chain AI")),
        (B = o()),
        (Ze = a("p")),
        (v =
          r(`At OpenFPL, we are exploring the deployment of a 100% on-chain AI model
      within a dedicated canister. Our initial use case for this AI would be to
      integrate a feature within the team selection interface, allowing users to
      receive AI-recommended changes. Users will then have the option to review
      and decide whether to implement these AI suggestions in their team
      management decisions. However, given that the Internet Computer's
      infrastructure is still evolving, especially in terms of on-chain training
      capabilities, our immediate strategy involves training the model
      off-chain. As the IC infrastructure evolves we would look to transition to
      real-time, continual learning for the AI model directly on the IC. Looking
      ahead, we're excited about the potential to develop new models using our
      constantly expanding on-chain dataset, opening up more innovative
      possibilities for OpenFPL.`)),
        this.h();
    },
    l(ot) {
      h = n(ot, "DIV", { class: !0 });
      var pt = s(h);
      d = n(pt, "DIV", { class: !0 });
      var m = s(d);
      u = n(m, "H1", { class: !0 });
      var Lt = s(u);
      (w = l(Lt, "Roadmap")),
        Lt.forEach(t),
        (he = i(m)),
        (T = n(m, "P", { class: !0 }));
      var et = s(T);
      ($ = l(
        et,
        "We have an ambitious roadmap of features we aim to release:"
      )),
        et.forEach(t),
        (le = i(m)),
        (P = n(m, "H2", { class: !0 }));
      var Ve = s(P);
      (Ie = l(Ve, "November 2023: Investment NFTs Launch")),
        Ve.forEach(t),
        (Te = i(m)),
        (g = n(m, "P", { class: !0 }));
      var mt = s(g);
      (ue = l(
        mt,
        `We will be launching 2 NFT collections in November 2024 to give the
      opportunity for users to share in OpenFPL merchandise and podcast revenue.
      These NFTs will be used to fund the production of OpenFPL merchandise
      along with promotion of the OpenFPL platform in the run up to the genesis
      season. Further information can be found in the marketing section of this
      whitepaper.`
      )),
        mt.forEach(t),
        (fe = i(m)),
        (L = n(m, "H2", { class: !0 }));
      var kt = s(L);
      (pe = l(kt, "December 2023: Svelte Frontend Upgrade")),
        kt.forEach(t),
        (xe = i(m)),
        (A = n(m, "P", { class: !0 }));
      var Dt = s(A);
      (me = l(
        Dt,
        `We're aligning OpenFPL with flagship IC apps like the NNS, OpenChat & Juno
      by adopting Svelte. This upgrade ensures a consistent user experience and
      leverages Svelte’s server-side rendering for faster load times.`
      )),
        Dt.forEach(t),
        (ve = i(m)),
        (F = n(m, "H2", { class: !0 }));
      var be = s(F);
      (oe = l(be, "Jan - Feb 2024: SNS Testflight Testing")),
        be.forEach(t),
        (Ae = i(m)),
        (C = n(m, "P", { class: !0 }));
      var It = s(C);
      (ie = l(
        It,
        `We will perform comprehensive testing of the OpenFPL gameplay and
      governance features. Detailed descriptions and outcomes of various use
      case tests, demonstrating how gameplay and governance features perform in
      different situations.`
      )),
        It.forEach(t),
        (Y = i(m)),
        (O = n(m, "H2", { class: !0 }));
      var xt = s(O);
      (k = l(xt, "January 2024: 'The OpenFPL Podcast' Launch")),
        xt.forEach(t),
        (Z = i(m)),
        (U = n(m, "P", { class: !0 }));
      var Zt = s(U);
      (Ce = l(
        Zt,
        `Starting with a main podcast, we aim to expand into fan-focused podcasts,
      emulating the model of successful platforms like Arsenal Fan TV. Initially
      audio-based, these podcasts will eventually include video content, adding
      another dimension to our engagement strategy.`
      )),
        Zt.forEach(t),
        (de = i(m)),
        (y = n(m, "H2", { class: !0 }));
      var At = s(y);
      (ye = l(At, "January 2024: Shirt Production Begins")),
        At.forEach(t),
        (Pe = i(m)),
        (S = n(m, "P", { class: !0 }));
      var ia = s(S);
      (_e = l(
        ia,
        `We are actively engaged in shirt production for OpenFPL, moving beyond
      mere concepts to tangible products. Our collaboration with a UK supplier
      is set to kit out 200 junior clubs with OpenFPL-branded shirts for
      charity, marking our first foray into merging style with the spirit of the
      game. This initiative is further elevated by a successful partnership with
      OpenChat. A recent proposal in the OpenChat DAO has been passed, resulting
      in OpenChat sponsoring half of these shirts, a testament to our
      collaborative efforts and shared vision. Concurrently, we are in advanced
      talks with a manufacturer in India, having already developed a promising
      prototype. We are fine-tuning the details to perfect the shirts, with
      production anticipated to commence in just a few months. Additionally,
      these shirts will be available for sale in the ICPFA shop, with a portion
      of each sale benefiting our NFT holders. This dual approach not only
      strengthens our brand presence but also underscores our commitment to
      supporting grassroots football communities and providing value to our NFT
      investors.`
      )),
        ia.forEach(t),
        (Le = i(m)),
        (j = n(m, "H2", { class: !0 }));
      var ea = s(j);
      (Ee = l(ea, "February 2024: Online Marketing Campaigns")),
        ea.forEach(t),
        (Ue = i(m)),
        (ee = n(m, "P", { class: !0 }));
      var Ct = s(ee);
      (K = l(
        Ct,
        `We are actively in discussions with a digital marketing agency, preparing
      to launch campaigns aimed at organically growing our base of genuine
      managers. The strategy being formulated focuses on SEO and PPC methods
      aligned with OpenFPL's objectives. These deliberations include choosing
      the most suitable online platforms and crafting a strategy that resonates
      with our ethos. The direction of these campaigns is geared towards
      measurable outcomes, especially in attracting genuine manager sign-ups and
      naturally expanding our online footprint. This approach is designed to
      cultivate a genuine and engaged community, enhancing OpenFPL's presence in
      a manner that's both authentic and impactful.`
      )),
        Ct.forEach(t),
        (ge = i(m)),
        (J = n(m, "H2", { class: !0 }));
      var da = s(J);
      (Re = l(da, "March 1st 2024: OpenFPL SNS Decentralisation Sale")),
        da.forEach(t),
        (ke = i(m)),
        (te = n(m, "P", { class: !0 }));
      var ta = s(te);
      ($e = l(
        ta,
        `We aim to begin our decentralisation sale on 1st March 2024, selling 25
      million $FPL tokens (25%).`
      )),
        ta.forEach(t),
        (p = i(m)),
        (D = n(m, "H2", { class: !0 }));
      var $t = s(D);
      (we = l($t, "April 2024: Private Leagues")),
        $t.forEach(t),
        (Ne = i(m)),
        (ae = n(m, "P", { class: !0 }));
      var ca = s(ae);
      (Q = l(
        ca,
        `The Private Leagues feature is the start of building your own OpenFPL
      community within the DAO. Managers will be able to create a Private League
      for a fee of 1 $ICP. Managers will have full control over their rewards
      structure, with features such as: Deciding on the entry fee, if any. Any
      entry fee can be in $FPL, $ICP or ckBTC. Deciding on the rewards structure
      currency, amount and percentage payouts per finishing position.`
      )),
        ca.forEach(t),
        (N = i(m)),
        (R = n(m, "H2", { class: !0 }));
      var ha = s(R);
      (M = l(ha, "April 2024: OpenFPL Events")),
        ha.forEach(t),
        (z = i(m)),
        (ne = n(m, "P", { class: !0 }));
      var ra = s(ne);
      (Ge = l(
        ra,
        `OpenFPL is set to create a series of interactive experiences at event
      locations in Premier League club cities, drawing inspiration from major UK
      brands like IBM, Ford and Coca-Cola. Planned from Q2 2024 onwards, these
      events will leverage the expertise of OpenFPL founder James Beadle. With
      his experience in creating successful and engaging interactive
      experiences, James aims to play a key role in educating attendees about
      OpenFPL, Internet Identity and the range of other IC dApps available.`
      )),
        ra.forEach(t),
        (De = i(m)),
        (se = n(m, "H2", { class: !0 }));
      var ya = s(se);
      (E = l(ya, "July 2024: Mobile App Launch")),
        ya.forEach(t),
        (H = i(m)),
        (G = n(m, "P", { class: !0 }));
      var ua = s(G);
      (X = l(
        ua,
        `We will release a mobile app shortly before the genesis season begins to
      make OpenFPL more accessible and convenient for users on the go.`
      )),
        ua.forEach(t),
        (Fe = i(m)),
        (I = n(m, "H2", { class: !0 }));
      var la = s(I);
      (Ke = l(la, "August 2024: OpenFPL Genesis Season Begins")),
        la.forEach(t),
        (Me = i(m)),
        (re = n(m, "P", { class: !0 }));
      var _a = s(re);
      (ze = l(
        _a,
        `In August 2024, we launch our inaugural season, where fantasy teams start
      competing for $FPL rewards on a weekly, monthly and annual basis to
      maximise user engagment.`
      )),
        _a.forEach(t),
        (Oe = i(m)),
        (ce = n(m, "H2", { class: !0 }));
      var gt = s(ce);
      (f = l(gt, "November 2024: Content Subscription Launch")),
        gt.forEach(t),
        (Se = i(m)),
        (V = n(m, "P", { class: !0 }));
      var St = s(V);
      (Qe = l(
        St,
        `Partnering with Premier League content creators to offer exclusive
      insights, with a unique monetization model for both free and
      subscription-based content.`
      )),
        St.forEach(t),
        (He = i(m)),
        (qe = n(m, "H2", { class: !0 }));
      var Xa = s(qe);
      (je = l(Xa, "March 2025: OpenChat Integration")),
        Xa.forEach(t),
        (Be = i(m)),
        (b = n(m, "P", { class: !0 }));
      var Qa = s(b);
      (at = l(
        Qa,
        `Integrating OpenChat for seamless communication within the OpenFPL
      community, providing updates and increasing engagement through group
      channels.`
      )),
        Qa.forEach(t),
        (nt = i(m)),
        (Ye = n(m, "H2", { class: !0 }));
      var oa = s(Ye);
      (ft = l(oa, "Future: 100% On-Chain AI")),
        oa.forEach(t),
        (B = i(m)),
        (Ze = n(m, "P", { class: !0 }));
      var Ya = s(Ze);
      (v = l(
        Ya,
        `At OpenFPL, we are exploring the deployment of a 100% on-chain AI model
      within a dedicated canister. Our initial use case for this AI would be to
      integrate a feature within the team selection interface, allowing users to
      receive AI-recommended changes. Users will then have the option to review
      and decide whether to implement these AI suggestions in their team
      management decisions. However, given that the Internet Computer's
      infrastructure is still evolving, especially in terms of on-chain training
      capabilities, our immediate strategy involves training the model
      off-chain. As the IC infrastructure evolves we would look to transition to
      real-time, continual learning for the AI model directly on the IC. Looking
      ahead, we're excited about the potential to develop new models using our
      constantly expanding on-chain dataset, opening up more innovative
      possibilities for OpenFPL.`
      )),
        Ya.forEach(t),
        m.forEach(t),
        pt.forEach(t),
        this.h();
    },
    h() {
      c(u, "class", "text-3xl font-bold"),
        c(T, "class", "my-4"),
        c(P, "class", "text-lg font-bold"),
        c(g, "class", "my-2"),
        c(L, "class", "text-lg font-bold mt-4"),
        c(A, "class", "my-2"),
        c(F, "class", "text-lg font-bold mt-4"),
        c(C, "class", "my-2"),
        c(O, "class", "text-lg font-bold mt-4"),
        c(U, "class", "my-2"),
        c(y, "class", "text-lg font-bold mt-4"),
        c(S, "class", "my-2"),
        c(j, "class", "text-lg font-bold mt-4"),
        c(ee, "class", "my-2"),
        c(J, "class", "text-lg font-bold mt-4"),
        c(te, "class", "my-2"),
        c(D, "class", "text-lg font-bold mt-4"),
        c(ae, "class", "my-2"),
        c(R, "class", "text-lg font-bold mt-4"),
        c(ne, "class", "my-2"),
        c(se, "class", "text-lg font-bold mt-4"),
        c(G, "class", "my-2"),
        c(I, "class", "text-lg font-bold mt-4"),
        c(re, "class", "my-2"),
        c(ce, "class", "text-lg font-bold mt-4"),
        c(V, "class", "my-2"),
        c(qe, "class", "text-lg font-bold mt-4"),
        c(b, "class", "my-2"),
        c(Ye, "class", "text-lg font-bold mt-4"),
        c(Ze, "class", "my-2"),
        c(d, "class", "m-4"),
        c(h, "class", "container-fluid mx-auto p-4");
    },
    m(ot, pt) {
      Ql(ot, h, pt),
        e(h, d),
        e(d, u),
        e(u, w),
        e(d, he),
        e(d, T),
        e(T, $),
        e(d, le),
        e(d, P),
        e(P, Ie),
        e(d, Te),
        e(d, g),
        e(g, ue),
        e(d, fe),
        e(d, L),
        e(L, pe),
        e(d, xe),
        e(d, A),
        e(A, me),
        e(d, ve),
        e(d, F),
        e(F, oe),
        e(d, Ae),
        e(d, C),
        e(C, ie),
        e(d, Y),
        e(d, O),
        e(O, k),
        e(d, Z),
        e(d, U),
        e(U, Ce),
        e(d, de),
        e(d, y),
        e(y, ye),
        e(d, Pe),
        e(d, S),
        e(S, _e),
        e(d, Le),
        e(d, j),
        e(j, Ee),
        e(d, Ue),
        e(d, ee),
        e(ee, K),
        e(d, ge),
        e(d, J),
        e(J, Re),
        e(d, ke),
        e(d, te),
        e(te, $e),
        e(d, p),
        e(d, D),
        e(D, we),
        e(d, Ne),
        e(d, ae),
        e(ae, Q),
        e(d, N),
        e(d, R),
        e(R, M),
        e(d, z),
        e(d, ne),
        e(ne, Ge),
        e(d, De),
        e(d, se),
        e(se, E),
        e(d, H),
        e(d, G),
        e(G, X),
        e(d, Fe),
        e(d, I),
        e(I, Ke),
        e(d, Me),
        e(d, re),
        e(re, ze),
        e(d, Oe),
        e(d, ce),
        e(ce, f),
        e(d, Se),
        e(d, V),
        e(V, Qe),
        e(d, He),
        e(d, qe),
        e(qe, je),
        e(d, Be),
        e(d, b),
        e(b, at),
        e(d, nt),
        e(d, Ye),
        e(Ye, ft),
        e(d, B),
        e(d, Ze),
        e(Ze, v);
    },
    p: Jt,
    i: Jt,
    o: Jt,
    d(ot) {
      ot && t(h);
    },
  };
}
class Zg extends Kl {
  constructor(h) {
    super(), zl(this, h, null, Yg, Xl, {});
  }
}
function e1(x) {
  let h,
    d,
    u,
    w,
    he,
    T,
    $,
    le,
    P,
    Ie,
    Te,
    g,
    ue,
    fe,
    L,
    pe,
    xe,
    A,
    me,
    ve,
    F,
    oe,
    Ae,
    C,
    ie,
    Y,
    O,
    k,
    Z,
    U,
    Ce,
    de,
    y,
    ye,
    Pe,
    S,
    _e,
    Le,
    j,
    Ee,
    Ue,
    ee,
    K,
    ge,
    J,
    Re,
    ke,
    te,
    $e,
    p,
    D,
    we,
    Ne,
    ae,
    Q,
    N,
    R,
    M,
    z,
    ne,
    Ge,
    De,
    se,
    E,
    H,
    G,
    X,
    Fe,
    I,
    Ke,
    Me,
    re,
    ze,
    Oe,
    ce,
    f,
    Se,
    V,
    Qe,
    He,
    qe,
    je,
    Be,
    b,
    at,
    nt,
    Ye,
    ft,
    B,
    Ze,
    v,
    ot,
    pt,
    m,
    Lt,
    et,
    Ve,
    mt,
    kt,
    Dt,
    be,
    It,
    xt,
    Zt,
    At,
    ia,
    ea,
    Ct,
    da,
    ta,
    $t,
    ca,
    ha,
    ra,
    ya,
    ua,
    la,
    _a,
    gt,
    St,
    Xa,
    Qa,
    oa,
    Ya,
    as,
    Je,
    on,
    dn,
    Za,
    W,
    Hs,
    cn,
    mn,
    Rs,
    We,
    tt,
    hn,
    Ms,
    vn,
    gn,
    it,
    bn,
    yn,
    qs,
    _n,
    En,
    Bs,
    wn,
    Tn,
    Ws,
    vt,
    en,
    va,
    Us,
    tn,
    Ns,
    Gs,
    an,
    Vs,
    js,
    Xe,
    Js,
    Ks,
    za,
    un,
    ns,
    Pn,
    lt,
    fn,
    Ln,
    zs,
    kn,
    Dn,
    Xs,
    pr,
    Ht,
    mr,
    vr,
    ti,
    gr,
    br,
    ai,
    yr,
    _r,
    ni,
    Er,
    wr,
    si,
    Tr,
    Pr,
    ri,
    Lr,
    kr,
    li,
    Dr,
    Qs,
    Ys,
    Zs,
    oi,
    er,
    dt,
    Fr,
    ii,
    bt,
    Fn,
    di,
    ci,
    ss,
    hi,
    ui,
    rs,
    fi,
    pi,
    ls,
    mi,
    vi,
    os,
    gi,
    bi,
    is,
    yi,
    _i,
    ds,
    Ei,
    wi,
    yt,
    Or,
    Ti,
    Ir,
    xr,
    Pi,
    _t,
    On,
    Li,
    ki,
    cs,
    Di,
    Fi,
    hs,
    Oi,
    Ii,
    us,
    xi,
    Ai,
    fs,
    Ci,
    $i,
    ps,
    Si,
    Hi,
    Et,
    Ar,
    Ri,
    Cr,
    $r,
    Mi,
    Sr,
    Hr,
    qi,
    wt,
    In,
    Bi,
    Wi,
    ms,
    Ui,
    Ni,
    vs,
    Gi,
    Vi,
    gs,
    ji,
    Ji,
    bs,
    Ki,
    zi,
    Tt,
    Rr,
    Xi,
    Mr,
    qr,
    Qi,
    Br,
    Wr,
    Yi,
    Ur,
    Nr,
    Zi,
    tr,
    pn,
    ao,
    ed,
    ct,
    ar,
    td,
    Gr,
    Vr,
    ad,
    jr,
    Jr,
    nd,
    Rt,
    ys,
    sd,
    rd,
    _s,
    ld,
    od,
    Es,
    id,
    dd,
    ws,
    cd,
    hd,
    Ts,
    ud,
    fd,
    Ps,
    pd,
    md,
    xn,
    Ls,
    no,
    Kr,
    An,
    ks,
    Mt,
    zr,
    Xr,
    vd,
    Qr,
    nr,
    gd,
    Yr,
    ht,
    Cn,
    Ds,
    bd,
    yd,
    Fs,
    _d,
    Ed,
    $n,
    sr,
    so,
    Zr,
    Sn,
    el,
    tl,
    wd,
    al,
    qt,
    nl,
    Hn,
    sl,
    rl,
    Td,
    ll,
    ol,
    Pd,
    Rn,
    Os,
    Ld,
    kd,
    Is,
    Dd,
    Fd,
    nn,
    il,
    Od,
    dl,
    cl,
    Id,
    hl,
    Mn,
    ul,
    Bt,
    fl,
    pl,
    xd,
    ml,
    qn,
    vl,
    gl,
    Ad,
    bl,
    yl,
    Cd,
    Bn,
    xs,
    $d,
    Sd,
    As,
    Hd,
    Rd,
    sn,
    _l,
    Md,
    El,
    wl,
    qd,
    Wt,
    Wn,
    Bd,
    Wd,
    Un,
    Ud,
    Nd,
    Nn,
    Gd,
    Vd,
    ga,
    Tl,
    jd,
    Pl,
    Ll,
    Jd,
    kl,
    Dl,
    Kd,
    Fl,
    Ol,
    zd,
    Il,
    rr,
    Xd,
    Ut,
    Gn,
    Qd,
    Yd,
    Vn,
    Zd,
    ec,
    jn,
    tc,
    ac,
    Jn,
    nc,
    sc,
    Kn,
    rc,
    lc,
    ba,
    xl,
    oc,
    Al,
    Cl,
    ic,
    $l,
    Sl,
    dc,
    Nt,
    Cs,
    cc,
    hc,
    zn,
    uc,
    fc,
    fa,
    Hl,
    pc,
    Rl,
    Ml,
    mc,
    ql,
    Bl,
    vc,
    Wl,
    Ul,
    gc,
    Nl,
    Gl,
    bc,
    Vl,
    Xn,
    yc,
    ut,
    jl,
    _c;
  return {
    c() {
      (h = a("div")),
        (d = a("div")),
        (u = a("h1")),
        (w = r("$FPL Utility Token")),
        (he = o()),
        (T = a("h2")),
        ($ = r("Utility and Functionality")),
        (le = o()),
        (P = a("p")),
        (Ie =
          r(`OpenFPL will be revenue generating, the most important role of the Utility
      token is to manage the OpenFPL treasury. The token is also used throughout
      the OpenFPL ecosystem:`)),
        (Te = o()),
        (g = a("ul")),
        (ue = a("li")),
        (fe =
          r(`Rewarding users for gameplay achievements on weekly, monthly, and annual
        bases.`)),
        (L = o()),
        (pe = a("li")),
        (xe =
          r(`Facilitating participation in DAO governance, like raising proposals for
        player revaluation and team detail updates.`)),
        (A = o()),
        (me = a("li")),
        (ve = r("Rewarding neuron holders upon maturity.")),
        (F = o()),
        (oe = a("li")),
        (Ae = r(
          "Accepting bids for season site sponsorship from organisations."
        )),
        (C = o()),
        (ie = a("li")),
        (Y = r(`Used for customisable entry fee (along with any ICRC-1 token)
        requirements for private leagues.`)),
        (O = o()),
        (k = a("li")),
        (Z = r("Purchase of Merchandise from the ICPFA shop.")),
        (U = o()),
        (Ce = a("li")),
        (de = r(
          "Reward content creators for engagement on a football video reel."
        )),
        (y = o()),
        (ye = a("li")),
        (Pe =
          r(`Facilitate subscriptions to access premium football content from
        creators.`)),
        (S = o()),
        (_e = a("h2")),
        (Le = r("Genesis Token Allocation")),
        (j = o()),
        (Ee = a("p")),
        (Ue = r(
          "At the outset, OpenFPL's token allocation will be as follows:"
        )),
        (ee = o()),
        (K = a("ul")),
        (ge = a("li")),
        (J = r("ICPFA: 12%")),
        (Re = o()),
        (ke = a("li")),
        (te = r("Funded NFT Holders: 12%")),
        ($e = o()),
        (p = a("li")),
        (D = r("SNS Decentralisation Sale: 25%")),
        (we = o()),
        (Ne = a("li")),
        (ae = r("DAO Treasury: 51%")),
        (Q = o()),
        (N = a("p")),
        (R =
          r(`The ICPFA team members will receive their $FPL within 5 baskets of equal
      neurons. The neurons will contain the following configuration:`)),
        (M = o()),
        (z = a("ul")),
        (ne = a("li")),
        (Ge = r(
          "Basket 1: Locked for 3 months with a 3 month dissolve delay."
        )),
        (De = o()),
        (se = a("li")),
        (E = r("Basket 2: Locked for 6 months with a 3 month dissolve delay.")),
        (H = o()),
        (G = a("li")),
        (X = r(
          "Basket 3: Locked for 12 months with a 3 month dissolve delay."
        )),
        (Fe = o()),
        (I = a("li")),
        (Ke = r(
          "Basket 4: Locked for 18 months with a 3 month dissolve delay."
        )),
        (Me = o()),
        (re = a("li")),
        (ze = r(
          "Basket 5: Locked for 24 months with a 3 month dissolve delay."
        )),
        (Oe = o()),
        (ce = a("p")),
        (f =
          r(`Each Funded NFT holder will receive their $FPL within 5 baskets of equal
      neurons. The neurons will contain the following configuration:`)),
        (Se = o()),
        (V = a("ul")),
        (Qe = a("li")),
        (He = r("Basket 1: Unlocked with a dissolve delay of 30 days.")),
        (qe = o()),
        (je = a("li")),
        (Be = r(
          "Basket 2: Locked for 6 months with a 1 month dissolve delay."
        )),
        (b = o()),
        (at = a("li")),
        (nt = r(
          "Basket 3: Locked for 12 months with a 1 month dissolve delay."
        )),
        (Ye = o()),
        (ft = a("li")),
        (B = r(
          "Basket 4: Locked for 18 months with a 1 month dissolve delay."
        )),
        (Ze = o()),
        (v = a("li")),
        (ot = r(
          "Basket 5: Locked for 24 months with a 1 month dissolve delay."
        )),
        (pt = o()),
        (m = a("p")),
        (Lt =
          r(`Each SNS decentralisation swap participant will receive their $FPL within
      5 baskets of equal neurons. The neurons will contain the following
      configuration:`)),
        (et = o()),
        (Ve = a("ul")),
        (mt = a("li")),
        (kt = r("Basket 1: Unlocked with zero dissolve delay.")),
        (Dt = o()),
        (be = a("li")),
        (It = r("Basket 2: Unlocked with 3 months dissolve delay.")),
        (xt = o()),
        (Zt = a("li")),
        (At = r("Basket 3: Unlocked with 6 months dissolve delay.")),
        (ia = o()),
        (ea = a("li")),
        (Ct = r("Basket 4: Unlocked with 9 months dissolve delay.")),
        (da = o()),
        (ta = a("li")),
        ($t = r("Basket 5: Unlocked with 12 months dissolve delay.")),
        (ca = o()),
        (ha = a("h2")),
        (ra = r("DAO Valuation")),
        (ya = o()),
        (ua = a("p")),
        (la =
          r(`We have used the discounted cashflow method to value the DAO. The
      following assumptions have been made:`)),
        (_a = o()),
        (gt = a("ul")),
        (St = a("li")),
        (Xa = r(
          "We can grow to the size of our Web2 competitor over 8 years."
        )),
        (Qa = o()),
        (oa = a("li")),
        (Ya = r(
          "Assumed 10% user conversion, each setting up a league at 1 ICP."
        )),
        (as = o()),
        (Je = a("li")),
        (on =
          r(`Estimated 5% user content subscription rate at 5 ICP/month with 5% of
        this revenue going to the DAO.`)),
        (dn = o()),
        (Za = a("li")),
        (W = r("Estimated 5% users spend 10ICP per year.")),
        (Hs = o()),
        (cn = a("p")),
        (mn = r("The financials below are in ICP:")),
        (Rs = o()),
        (We = a("table")),
        (tt = a("tr")),
        (hn = a("th")),
        (Ms = r("Year")),
        (vn = o()),
        (gn = a("th")),
        (it = r("1")),
        (bn = o()),
        (yn = a("th")),
        (qs = r("2")),
        (_n = o()),
        (En = a("th")),
        (Bs = r("3")),
        (wn = o()),
        (Tn = a("th")),
        (Ws = r("4")),
        (vt = o()),
        (en = a("th")),
        (va = r("5")),
        (Us = o()),
        (tn = a("th")),
        (Ns = r("6")),
        (Gs = o()),
        (an = a("th")),
        (Vs = r("7")),
        (js = o()),
        (Xe = a("th")),
        (Js = r("8")),
        (Ks = o()),
        (za = a("tr")),
        (un = a("td")),
        (ns = a("span")),
        (Pn = o()),
        (lt = a("tr")),
        (fn = a("td")),
        (Ln = r("Managers")),
        (zs = o()),
        (kn = a("td")),
        (Dn = r("10,000")),
        (Xs = o()),
        (pr = a("td")),
        (Ht = r("50,000")),
        (mr = o()),
        (vr = a("td")),
        (ti = r("250,000")),
        (gr = o()),
        (br = a("td")),
        (ai = r("1,000,000")),
        (yr = o()),
        (_r = a("td")),
        (ni = r("2,500,000")),
        (Er = o()),
        (wr = a("td")),
        (si = r("5,000,000")),
        (Tr = o()),
        (Pr = a("td")),
        (ri = r("7,500,000")),
        (Lr = o()),
        (kr = a("td")),
        (li = r("10,000,000")),
        (Dr = o()),
        (Qs = a("tr")),
        (Ys = a("td")),
        (Zs = a("span")),
        (oi = o()),
        (er = a("tr")),
        (dt = a("td")),
        (Fr = r("Revenue:")),
        (ii = o()),
        (bt = a("tr")),
        (Fn = a("td")),
        (di = r("Private Leagues")),
        (ci = o()),
        (ss = a("td")),
        (hi = r("1,000")),
        (ui = o()),
        (rs = a("td")),
        (fi = r("5,000")),
        (pi = o()),
        (ls = a("td")),
        (mi = r("25,000")),
        (vi = o()),
        (os = a("td")),
        (gi = r("100,000")),
        (bi = o()),
        (is = a("td")),
        (yi = r("250,000")),
        (_i = o()),
        (ds = a("td")),
        (Ei = r("500,000")),
        (wi = o()),
        (yt = a("td")),
        (Or = r("750,000")),
        (Ti = o()),
        (Ir = a("td")),
        (xr = r("1,000,000")),
        (Pi = o()),
        (_t = a("tr")),
        (On = a("td")),
        (Li = r("Merchandising")),
        (ki = o()),
        (cs = a("td")),
        (Di = r("5,000")),
        (Fi = o()),
        (hs = a("td")),
        (Oi = r("25,000")),
        (Ii = o()),
        (us = a("td")),
        (xi = r("125,000")),
        (Ai = o()),
        (fs = a("td")),
        (Ci = r("500,000")),
        ($i = o()),
        (ps = a("td")),
        (Si = r("1,250,000")),
        (Hi = o()),
        (Et = a("td")),
        (Ar = r("2,500,000")),
        (Ri = o()),
        (Cr = a("td")),
        ($r = r("3,750,000")),
        (Mi = o()),
        (Sr = a("td")),
        (Hr = r("5,000,000")),
        (qi = o()),
        (wt = a("tr")),
        (In = a("td")),
        (Bi = r("Content Subscriptions")),
        (Wi = o()),
        (ms = a("td")),
        (Ui = r("125")),
        (Ni = o()),
        (vs = a("td")),
        (Gi = r("625")),
        (Vi = o()),
        (gs = a("td")),
        (ji = r("3,125")),
        (Ji = o()),
        (bs = a("td")),
        (Ki = r("12,500")),
        (zi = o()),
        (Tt = a("td")),
        (Rr = r("31,250")),
        (Xi = o()),
        (Mr = a("td")),
        (qr = r("62,500")),
        (Qi = o()),
        (Br = a("td")),
        (Wr = r("93,750")),
        (Yi = o()),
        (Ur = a("td")),
        (Nr = r("125,000")),
        (Zi = o()),
        (tr = a("tr")),
        (pn = a("td")),
        (ao = a("span")),
        (ed = o()),
        (ct = a("tr")),
        (ar = a("td")),
        (td = r("Total")),
        (Gr = o()),
        (Vr = a("td")),
        (ad = r("6,125")),
        (jr = o()),
        (Jr = a("td")),
        (nd = r("30,625")),
        (Rt = o()),
        (ys = a("td")),
        (sd = r("153,125")),
        (rd = o()),
        (_s = a("td")),
        (ld = r("612,500")),
        (od = o()),
        (Es = a("td")),
        (id = r("1,531,250")),
        (dd = o()),
        (ws = a("td")),
        (cd = r("3,062,500")),
        (hd = o()),
        (Ts = a("td")),
        (ud = r("4,593,750")),
        (fd = o()),
        (Ps = a("td")),
        (pd = r("6,125,000")),
        (md = o()),
        (xn = a("tr")),
        (Ls = a("td")),
        (no = a("span")),
        (Kr = o()),
        (An = a("tr")),
        (ks = a("td")),
        (Mt = r("SNS Value (25%)")),
        (zr = o()),
        (Xr = a("td")),
        (vd = r("1,531,250")),
        (Qr = o()),
        (nr = a("h2")),
        (gd = r("SNS Decentralisation Sale Configuration")),
        (Yr = o()),
        (ht = a("table")),
        (Cn = a("tr")),
        (Ds = a("th")),
        (bd = r("Configuration")),
        (yd = o()),
        (Fs = a("th")),
        (_d = r("Value")),
        (Ed = o()),
        ($n = a("tr")),
        (sr = a("td")),
        (so = a("span")),
        (Zr = o()),
        (Sn = a("tr")),
        (el = a("td")),
        (tl = r("The total number of FPL tokens to be sold.")),
        (wd = o()),
        (al = a("td")),
        (qt = r("25,000,000 (25%)")),
        (nl = o()),
        (Hn = a("tr")),
        (sl = a("td")),
        (rl = r("The maximum ICP to be raised.")),
        (Td = o()),
        (ll = a("td")),
        (ol = r("2,000,000")),
        (Pd = o()),
        (Rn = a("tr")),
        (Os = a("td")),
        (Ld = r(
          "The minimum ICP to be raised (otherwise sale fails and ICP returned)."
        )),
        (kd = o()),
        (Is = a("td")),
        (Dd = r("1,000,000")),
        (Fd = o()),
        (nn = a("tr")),
        (il = a("td")),
        (Od = r("The ICP from the Community Fund.")),
        (dl = o()),
        (cl = a("td")),
        (Id = r("Matched Funding Enabled")),
        (hl = o()),
        (Mn = a("tr")),
        (ul = a("td")),
        (Bt = r("Sale start date.")),
        (fl = o()),
        (pl = a("td")),
        (xd = r("1st March 2024")),
        (ml = o()),
        (qn = a("tr")),
        (vl = a("td")),
        (gl = r("Minimum number of sale participants.")),
        (Ad = o()),
        (bl = a("td")),
        (yl = r("500")),
        (Cd = o()),
        (Bn = a("tr")),
        (xs = a("td")),
        ($d = r("Minimum ICP per buyer.")),
        (Sd = o()),
        (As = a("td")),
        (Hd = r("10")),
        (Rd = o()),
        (sn = a("tr")),
        (_l = a("td")),
        (Md = r("Maximum ICP per buyer.")),
        (El = o()),
        (wl = a("td")),
        (qd = r("150,000")),
        (Wt = o()),
        (Wn = a("h2")),
        (Bd = r("Mitigation against a 51% Attack")),
        (Wd = o()),
        (Un = a("p")),
        (Ud =
          r(`There is a danger that the OpenFPL SNS treasury could be the target of an
      attack. One possible scenario is for an attacker to buy a large proportion
      of the FPL tokens in the decentralisation sale and immediately increase
      the dissolve delay of all of their neurons to the maximum 4 year in an
      attempt to gain more than 50% of the SNS voting power. If successful they
      could force through a proposal to transfer the entire ICP and FPL treasury
      to themselves. The Community Fund actually provides a great deal of
      mitigation against this scenario because it limits the proportion of
      voting power an attacker would be able to acquire.`)),
        (Nd = o()),
        (Nn = a("p")),
        (Gd = r(
          "The amount raised in the decentralisation will be used as follows:"
        )),
        (Vd = o()),
        (ga = a("ul")),
        (Tl = a("li")),
        (jd =
          r(`80% will be staked in an 8 year neuron with the maturity interest paid
        to the ICPFA.`)),
        (Pl = o()),
        (Ll = a("li")),
        (Jd =
          r(`10% will be available for exchange liquidity to enable trading of the
        FPL token.`)),
        (kl = o()),
        (Dl = a("li")),
        (Kd = r(
          "5% will be paid directly to the ICPFA after the decentralisation sale."
        )),
        (Fl = o()),
        (Ol = a("li")),
        (zd =
          r(`5% will be held in reserve for cycles to run OpenFPL, likely to be
        unused as OpenFPL begins generating revenue.`)),
        (Il = o()),
        (rr = a("p")),
        (Xd =
          r(`This treasury balance will be topped up with the DAO's revenue, with 50%
      being paid to neuron holders. Any excess balance can be utilised where the
      DAO sees fit.`)),
        (Ut = o()),
        (Gn = a("h2")),
        (Qd = r("Tokenomics")),
        (Yd = o()),
        (Vn = a("p")),
        (Zd =
          r(`Each season, 2.5% of the total $FPL supply will be minted for DAO rewards.
      There is no mechanism to automatically burn $FPL as we anticipate the user
      growth to be faster than the supply increase, thus increasing the price of
      $FPL. However a proposal can always be made to burn $FPL if required. If
      the DAO’s treasury is ever 60% or more of the total supply of $FPL, it
      will be ICP FA policy to raise a proposal to burn 5% of the total supply
      from the DAO’s treasury.`)),
        (ec = o()),
        (jn = a("h2")),
        (tc = r("ICP FA Overview")),
        (ac = o()),
        (Jn = a("p")),
        (nc =
          r(`Managed by founder James Beadle, the ICP FA oversees the development,
      marketing, and management of OpenFPL. The aim is to build a strong team to
      guide OpenFPL's growth and bring new users to the ICP blockchain.
      Additionally, 25% of James' staked maturity earnings will contribute to
      the ICP FA Community Fund, supporting grassroots football projects.`)),
        (sc = o()),
        (Kn = a("p")),
        (rc =
          r(`The ICPFA will receive 5% of the decentralisation sale along with the
      maturity interest from the staked neuron. These funds will be use for the
      following:`)),
        (lc = o()),
        (ba = a("ul")),
        (xl = a("li")),
        (oc = r(
          "The ongoing promotion and marketing of OpenFPL both online and offline."
        )),
        (Al = o()),
        (Cl = a("li")),
        (ic =
          r(`Hiring of a frontend and backend developer to assist the founder with
        the day to day development workload.`)),
        ($l = o()),
        (Sl = a("li")),
        (dc =
          r(`Hiring of a UAT Test Engineer to ensure all ICPFA products are of the
        highest quality.`)),
        (Nt = o()),
        (Cs = a("li")),
        (cc = r("Hiring of a Marketing Manager.")),
        (hc = o()),
        (zn = a("p")),
        (uc = r("Along with paying the founding team members:")),
        (fc = o()),
        (fa = a("ul")),
        (Hl = a("li")),
        (pc = r("James Beadle - Founder, Lead Developer")),
        (Rl = o()),
        (Ml = a("li")),
        (mc = r("DfinityDesigner - Designer")),
        (ql = o()),
        (Bl = a("li")),
        (vc = r("George - Community Manager")),
        (Wl = o()),
        (Ul = a("li")),
        (gc = r("ICP_Insider - Blockchain Promoter")),
        (Nl = o()),
        (Gl = a("li")),
        (bc = r("MadMaxIC - Gameplay Designer")),
        (Vl = o()),
        (Xn = a("p")),
        (yc = r(
          "More details about the ICP FA and its members can be found at "
        )),
        (ut = a("a")),
        (jl = r("icpfa.org/team")),
        (_c = r(".")),
        this.h();
    },
    l(Jl) {
      h = n(Jl, "DIV", { class: !0 });
      var lr = s(h);
      d = n(lr, "DIV", { class: !0 });
      var _ = s(d);
      u = n(_, "H1", { class: !0 });
      var Ec = s(u);
      (w = l(Ec, "$FPL Utility Token")),
        Ec.forEach(t),
        (he = i(_)),
        (T = n(_, "H2", { class: !0 }));
      var ro = s(T);
      ($ = l(ro, "Utility and Functionality")),
        ro.forEach(t),
        (le = i(_)),
        (P = n(_, "P", { class: !0 }));
      var wc = s(P);
      (Ie = l(
        wc,
        `OpenFPL will be revenue generating, the most important role of the Utility
      token is to manage the OpenFPL treasury. The token is also used throughout
      the OpenFPL ecosystem:`
      )),
        wc.forEach(t),
        (Te = i(_)),
        (g = n(_, "UL", { class: !0 }));
      var pa = s(g);
      ue = n(pa, "LI", {});
      var lo = s(ue);
      (fe = l(
        lo,
        `Rewarding users for gameplay achievements on weekly, monthly, and annual
        bases.`
      )),
        lo.forEach(t),
        (L = i(pa)),
        (pe = n(pa, "LI", {}));
      var Tc = s(pe);
      (xe = l(
        Tc,
        `Facilitating participation in DAO governance, like raising proposals for
        player revaluation and team detail updates.`
      )),
        Tc.forEach(t),
        (A = i(pa)),
        (me = n(pa, "LI", {}));
      var Pc = s(me);
      (ve = l(Pc, "Rewarding neuron holders upon maturity.")),
        Pc.forEach(t),
        (F = i(pa)),
        (oe = n(pa, "LI", {}));
      var oo = s(oe);
      (Ae = l(
        oo,
        "Accepting bids for season site sponsorship from organisations."
      )),
        oo.forEach(t),
        (C = i(pa)),
        (ie = n(pa, "LI", {}));
      var Lc = s(ie);
      (Y = l(
        Lc,
        `Used for customisable entry fee (along with any ICRC-1 token)
        requirements for private leagues.`
      )),
        Lc.forEach(t),
        (O = i(pa)),
        (k = n(pa, "LI", {}));
      var kc = s(k);
      (Z = l(kc, "Purchase of Merchandise from the ICPFA shop.")),
        kc.forEach(t),
        (U = i(pa)),
        (Ce = n(pa, "LI", {}));
      var io = s(Ce);
      (de = l(
        io,
        "Reward content creators for engagement on a football video reel."
      )),
        io.forEach(t),
        (y = i(pa)),
        (ye = n(pa, "LI", {}));
      var Dc = s(ye);
      (Pe = l(
        Dc,
        `Facilitate subscriptions to access premium football content from
        creators.`
      )),
        Dc.forEach(t),
        pa.forEach(t),
        (S = i(_)),
        (_e = n(_, "H2", { class: !0 }));
      var Fc = s(_e);
      (Le = l(Fc, "Genesis Token Allocation")),
        Fc.forEach(t),
        (j = i(_)),
        (Ee = n(_, "P", { class: !0 }));
      var co = s(Ee);
      (Ue = l(
        co,
        "At the outset, OpenFPL's token allocation will be as follows:"
      )),
        co.forEach(t),
        (ee = i(_)),
        (K = n(_, "UL", { class: !0 }));
      var Qn = s(K);
      ge = n(Qn, "LI", {});
      var Oc = s(ge);
      (J = l(Oc, "ICPFA: 12%")),
        Oc.forEach(t),
        (Re = i(Qn)),
        (ke = n(Qn, "LI", {}));
      var ho = s(ke);
      (te = l(ho, "Funded NFT Holders: 12%")),
        ho.forEach(t),
        ($e = i(Qn)),
        (p = n(Qn, "LI", {}));
      var Ic = s(p);
      (D = l(Ic, "SNS Decentralisation Sale: 25%")),
        Ic.forEach(t),
        (we = i(Qn)),
        (Ne = n(Qn, "LI", {}));
      var xc = s(Ne);
      (ae = l(xc, "DAO Treasury: 51%")),
        xc.forEach(t),
        Qn.forEach(t),
        (Q = i(_)),
        (N = n(_, "P", { class: !0 }));
      var Kt = s(N);
      (R = l(
        Kt,
        `The ICPFA team members will receive their $FPL within 5 baskets of equal
      neurons. The neurons will contain the following configuration:`
      )),
        Kt.forEach(t),
        (M = i(_)),
        (z = n(_, "UL", { class: !0 }));
      var Ea = s(z);
      ne = n(Ea, "LI", {});
      var Ac = s(ne);
      (Ge = l(
        Ac,
        "Basket 1: Locked for 3 months with a 3 month dissolve delay."
      )),
        Ac.forEach(t),
        (De = i(Ea)),
        (se = n(Ea, "LI", {}));
      var Cc = s(se);
      (E = l(
        Cc,
        "Basket 2: Locked for 6 months with a 3 month dissolve delay."
      )),
        Cc.forEach(t),
        (H = i(Ea)),
        (G = n(Ea, "LI", {}));
      var uo = s(G);
      (X = l(
        uo,
        "Basket 3: Locked for 12 months with a 3 month dissolve delay."
      )),
        uo.forEach(t),
        (Fe = i(Ea)),
        (I = n(Ea, "LI", {}));
      var $c = s(I);
      (Ke = l(
        $c,
        "Basket 4: Locked for 18 months with a 3 month dissolve delay."
      )),
        $c.forEach(t),
        (Me = i(Ea)),
        (re = n(Ea, "LI", {}));
      var Sc = s(re);
      (ze = l(
        Sc,
        "Basket 5: Locked for 24 months with a 3 month dissolve delay."
      )),
        Sc.forEach(t),
        Ea.forEach(t),
        (Oe = i(_)),
        (ce = n(_, "P", { class: !0 }));
      var fo = s(ce);
      (f = l(
        fo,
        `Each Funded NFT holder will receive their $FPL within 5 baskets of equal
      neurons. The neurons will contain the following configuration:`
      )),
        fo.forEach(t),
        (Se = i(_)),
        (V = n(_, "UL", { class: !0 }));
      var rn = s(V);
      Qe = n(rn, "LI", {});
      var Hc = s(Qe);
      (He = l(Hc, "Basket 1: Unlocked with a dissolve delay of 30 days.")),
        Hc.forEach(t),
        (qe = i(rn)),
        (je = n(rn, "LI", {}));
      var po = s(je);
      (Be = l(
        po,
        "Basket 2: Locked for 6 months with a 1 month dissolve delay."
      )),
        po.forEach(t),
        (b = i(rn)),
        (at = n(rn, "LI", {}));
      var Rc = s(at);
      (nt = l(
        Rc,
        "Basket 3: Locked for 12 months with a 1 month dissolve delay."
      )),
        Rc.forEach(t),
        (Ye = i(rn)),
        (ft = n(rn, "LI", {}));
      var Mc = s(ft);
      (B = l(
        Mc,
        "Basket 4: Locked for 18 months with a 1 month dissolve delay."
      )),
        Mc.forEach(t),
        (Ze = i(rn)),
        (v = n(rn, "LI", {}));
      var mo = s(v);
      (ot = l(
        mo,
        "Basket 5: Locked for 24 months with a 1 month dissolve delay."
      )),
        mo.forEach(t),
        rn.forEach(t),
        (pt = i(_)),
        (m = n(_, "P", { class: !0 }));
      var qc = s(m);
      (Lt = l(
        qc,
        `Each SNS decentralisation swap participant will receive their $FPL within
      5 baskets of equal neurons. The neurons will contain the following
      configuration:`
      )),
        qc.forEach(t),
        (et = i(_)),
        (Ve = n(_, "UL", { class: !0 }));
      var ln = s(Ve);
      mt = n(ln, "LI", {});
      var vo = s(mt);
      (kt = l(vo, "Basket 1: Unlocked with zero dissolve delay.")),
        vo.forEach(t),
        (Dt = i(ln)),
        (be = n(ln, "LI", {}));
      var Bc = s(be);
      (It = l(Bc, "Basket 2: Unlocked with 3 months dissolve delay.")),
        Bc.forEach(t),
        (xt = i(ln)),
        (Zt = n(ln, "LI", {}));
      var Wc = s(Zt);
      (At = l(Wc, "Basket 3: Unlocked with 6 months dissolve delay.")),
        Wc.forEach(t),
        (ia = i(ln)),
        (ea = n(ln, "LI", {}));
      var go = s(ea);
      (Ct = l(go, "Basket 4: Unlocked with 9 months dissolve delay.")),
        go.forEach(t),
        (da = i(ln)),
        (ta = n(ln, "LI", {}));
      var Uc = s(ta);
      ($t = l(Uc, "Basket 5: Unlocked with 12 months dissolve delay.")),
        Uc.forEach(t),
        ln.forEach(t),
        (ca = i(_)),
        (ha = n(_, "H2", { class: !0 }));
      var Nc = s(ha);
      (ra = l(Nc, "DAO Valuation")),
        Nc.forEach(t),
        (ya = i(_)),
        (ua = n(_, "P", { class: !0 }));
      var bo = s(ua);
      (la = l(
        bo,
        `We have used the discounted cashflow method to value the DAO. The
      following assumptions have been made:`
      )),
        bo.forEach(t),
        (_a = i(_)),
        (gt = n(_, "UL", { class: !0 }));
      var Yn = s(gt);
      St = n(Yn, "LI", {});
      var Gc = s(St);
      (Xa = l(
        Gc,
        "We can grow to the size of our Web2 competitor over 8 years."
      )),
        Gc.forEach(t),
        (Qa = i(Yn)),
        (oa = n(Yn, "LI", {}));
      var zt = s(oa);
      (Ya = l(
        zt,
        "Assumed 10% user conversion, each setting up a league at 1 ICP."
      )),
        zt.forEach(t),
        (as = i(Yn)),
        (Je = n(Yn, "LI", {}));
      var yo = s(Je);
      (on = l(
        yo,
        `Estimated 5% user content subscription rate at 5 ICP/month with 5% of
        this revenue going to the DAO.`
      )),
        yo.forEach(t),
        (dn = i(Yn)),
        (Za = n(Yn, "LI", {}));
      var Vc = s(Za);
      (W = l(Vc, "Estimated 5% users spend 10ICP per year.")),
        Vc.forEach(t),
        Yn.forEach(t),
        (Hs = i(_)),
        (cn = n(_, "P", { class: !0 }));
      var jc = s(cn);
      (mn = l(jc, "The financials below are in ICP:")),
        jc.forEach(t),
        (Rs = i(_)),
        (We = n(_, "TABLE", { class: !0 }));
      var st = s(We);
      tt = n(st, "TR", { class: !0 });
      var aa = s(tt);
      hn = n(aa, "TH", { class: !0 });
      var Jc = s(hn);
      (Ms = l(Jc, "Year")), Jc.forEach(t), (vn = i(aa)), (gn = n(aa, "TH", {}));
      var _o = s(gn);
      (it = l(_o, "1")), _o.forEach(t), (bn = i(aa)), (yn = n(aa, "TH", {}));
      var Kc = s(yn);
      (qs = l(Kc, "2")), Kc.forEach(t), (_n = i(aa)), (En = n(aa, "TH", {}));
      var zc = s(En);
      (Bs = l(zc, "3")), zc.forEach(t), (wn = i(aa)), (Tn = n(aa, "TH", {}));
      var Eo = s(Tn);
      (Ws = l(Eo, "4")), Eo.forEach(t), (vt = i(aa)), (en = n(aa, "TH", {}));
      var Xc = s(en);
      (va = l(Xc, "5")), Xc.forEach(t), (Us = i(aa)), (tn = n(aa, "TH", {}));
      var Qc = s(tn);
      (Ns = l(Qc, "6")), Qc.forEach(t), (Gs = i(aa)), (an = n(aa, "TH", {}));
      var wo = s(an);
      (Vs = l(wo, "7")), wo.forEach(t), (js = i(aa)), (Xe = n(aa, "TH", {}));
      var Yc = s(Xe);
      (Js = l(Yc, "8")),
        Yc.forEach(t),
        aa.forEach(t),
        (Ks = i(st)),
        (za = n(st, "TR", { class: !0 }));
      var Zc = s(za);
      un = n(Zc, "TD", { class: !0 });
      var To = s(un);
      (ns = n(To, "SPAN", {})),
        s(ns).forEach(t),
        To.forEach(t),
        Zc.forEach(t),
        (Pn = i(st)),
        (lt = n(st, "TR", { class: !0 }));
      var na = s(lt);
      fn = n(na, "TD", { class: !0 });
      var eh = s(fn);
      (Ln = l(eh, "Managers")),
        eh.forEach(t),
        (zs = i(na)),
        (kn = n(na, "TD", {}));
      var Po = s(kn);
      (Dn = l(Po, "10,000")),
        Po.forEach(t),
        (Xs = i(na)),
        (pr = n(na, "TD", {}));
      var th = s(pr);
      (Ht = l(th, "50,000")),
        th.forEach(t),
        (mr = i(na)),
        (vr = n(na, "TD", {}));
      var ah = s(vr);
      (ti = l(ah, "250,000")),
        ah.forEach(t),
        (gr = i(na)),
        (br = n(na, "TD", {}));
      var Lo = s(br);
      (ai = l(Lo, "1,000,000")),
        Lo.forEach(t),
        (yr = i(na)),
        (_r = n(na, "TD", {}));
      var nh = s(_r);
      (ni = l(nh, "2,500,000")),
        nh.forEach(t),
        (Er = i(na)),
        (wr = n(na, "TD", {}));
      var sh = s(wr);
      (si = l(sh, "5,000,000")),
        sh.forEach(t),
        (Tr = i(na)),
        (Pr = n(na, "TD", {}));
      var Xt = s(Pr);
      (ri = l(Xt, "7,500,000")),
        Xt.forEach(t),
        (Lr = i(na)),
        (kr = n(na, "TD", {}));
      var ko = s(kr);
      (li = l(ko, "10,000,000")),
        ko.forEach(t),
        na.forEach(t),
        (Dr = i(st)),
        (Qs = n(st, "TR", { class: !0 }));
      var rh = s(Qs);
      Ys = n(rh, "TD", { class: !0 });
      var lh = s(Ys);
      (Zs = n(lh, "SPAN", {})),
        s(Zs).forEach(t),
        lh.forEach(t),
        rh.forEach(t),
        (oi = i(st)),
        (er = n(st, "TR", { class: !0 }));
      var Do = s(er);
      dt = n(Do, "TD", { class: !0, colspan: !0 });
      var oh = s(dt);
      (Fr = l(oh, "Revenue:")),
        oh.forEach(t),
        Do.forEach(t),
        (ii = i(st)),
        (bt = n(st, "TR", { class: !0 }));
      var sa = s(bt);
      Fn = n(sa, "TD", { class: !0 });
      var Fo = s(Fn);
      (di = l(Fo, "Private Leagues")),
        Fo.forEach(t),
        (ci = i(sa)),
        (ss = n(sa, "TD", {}));
      var ih = s(ss);
      (hi = l(ih, "1,000")),
        ih.forEach(t),
        (ui = i(sa)),
        (rs = n(sa, "TD", {}));
      var dh = s(rs);
      (fi = l(dh, "5,000")),
        dh.forEach(t),
        (pi = i(sa)),
        (ls = n(sa, "TD", {}));
      var Oo = s(ls);
      (mi = l(Oo, "25,000")),
        Oo.forEach(t),
        (vi = i(sa)),
        (os = n(sa, "TD", {}));
      var ch = s(os);
      (gi = l(ch, "100,000")),
        ch.forEach(t),
        (bi = i(sa)),
        (is = n(sa, "TD", {}));
      var hh = s(is);
      (yi = l(hh, "250,000")),
        hh.forEach(t),
        (_i = i(sa)),
        (ds = n(sa, "TD", {}));
      var Io = s(ds);
      (Ei = l(Io, "500,000")),
        Io.forEach(t),
        (wi = i(sa)),
        (yt = n(sa, "TD", {}));
      var uh = s(yt);
      (Or = l(uh, "750,000")),
        uh.forEach(t),
        (Ti = i(sa)),
        (Ir = n(sa, "TD", {}));
      var fh = s(Ir);
      (xr = l(fh, "1,000,000")),
        fh.forEach(t),
        sa.forEach(t),
        (Pi = i(st)),
        (_t = n(st, "TR", { class: !0 }));
      var Gt = s(_t);
      On = n(Gt, "TD", { class: !0 });
      var ph = s(On);
      (Li = l(ph, "Merchandising")),
        ph.forEach(t),
        (ki = i(Gt)),
        (cs = n(Gt, "TD", {}));
      var mh = s(cs);
      (Di = l(mh, "5,000")),
        mh.forEach(t),
        (Fi = i(Gt)),
        (hs = n(Gt, "TD", {}));
      var xo = s(hs);
      (Oi = l(xo, "25,000")),
        xo.forEach(t),
        (Ii = i(Gt)),
        (us = n(Gt, "TD", {}));
      var vh = s(us);
      (xi = l(vh, "125,000")),
        vh.forEach(t),
        (Ai = i(Gt)),
        (fs = n(Gt, "TD", {}));
      var gh = s(fs);
      (Ci = l(gh, "500,000")),
        gh.forEach(t),
        ($i = i(Gt)),
        (ps = n(Gt, "TD", {}));
      var Ao = s(ps);
      (Si = l(Ao, "1,250,000")),
        Ao.forEach(t),
        (Hi = i(Gt)),
        (Et = n(Gt, "TD", {}));
      var bh = s(Et);
      (Ar = l(bh, "2,500,000")),
        bh.forEach(t),
        (Ri = i(Gt)),
        (Cr = n(Gt, "TD", {}));
      var yh = s(Cr);
      ($r = l(yh, "3,750,000")),
        yh.forEach(t),
        (Mi = i(Gt)),
        (Sr = n(Gt, "TD", {}));
      var Qt = s(Sr);
      (Hr = l(Qt, "5,000,000")),
        Qt.forEach(t),
        Gt.forEach(t),
        (qi = i(st)),
        (wt = n(st, "TR", { class: !0 }));
      var Vt = s(wt);
      In = n(Vt, "TD", { class: !0 });
      var _h = s(In);
      (Bi = l(_h, "Content Subscriptions")),
        _h.forEach(t),
        (Wi = i(Vt)),
        (ms = n(Vt, "TD", {}));
      var Eh = s(ms);
      (Ui = l(Eh, "125")), Eh.forEach(t), (Ni = i(Vt)), (vs = n(Vt, "TD", {}));
      var Co = s(vs);
      (Gi = l(Co, "625")), Co.forEach(t), (Vi = i(Vt)), (gs = n(Vt, "TD", {}));
      var wh = s(gs);
      (ji = l(wh, "3,125")),
        wh.forEach(t),
        (Ji = i(Vt)),
        (bs = n(Vt, "TD", {}));
      var Th = s(bs);
      (Ki = l(Th, "12,500")),
        Th.forEach(t),
        (zi = i(Vt)),
        (Tt = n(Vt, "TD", {}));
      var $o = s(Tt);
      (Rr = l($o, "31,250")),
        $o.forEach(t),
        (Xi = i(Vt)),
        (Mr = n(Vt, "TD", {}));
      var Ph = s(Mr);
      (qr = l(Ph, "62,500")),
        Ph.forEach(t),
        (Qi = i(Vt)),
        (Br = n(Vt, "TD", {}));
      var Lh = s(Br);
      (Wr = l(Lh, "93,750")),
        Lh.forEach(t),
        (Yi = i(Vt)),
        (Ur = n(Vt, "TD", {}));
      var So = s(Ur);
      (Nr = l(So, "125,000")),
        So.forEach(t),
        Vt.forEach(t),
        (Zi = i(st)),
        (tr = n(st, "TR", { class: !0 }));
      var kh = s(tr);
      pn = n(kh, "TD", { colspan: !0, class: !0 });
      var Dh = s(pn);
      (ao = n(Dh, "SPAN", {})),
        s(ao).forEach(t),
        Dh.forEach(t),
        kh.forEach(t),
        (ed = i(st)),
        (ct = n(st, "TR", { class: !0 }));
      var jt = s(ct);
      ar = n(jt, "TD", { class: !0 });
      var Fh = s(ar);
      (td = l(Fh, "Total")),
        Fh.forEach(t),
        (Gr = i(jt)),
        (Vr = n(jt, "TD", {}));
      var Oh = s(Vr);
      (ad = l(Oh, "6,125")),
        Oh.forEach(t),
        (jr = i(jt)),
        (Jr = n(jt, "TD", {}));
      var Ho = s(Jr);
      (nd = l(Ho, "30,625")),
        Ho.forEach(t),
        (Rt = i(jt)),
        (ys = n(jt, "TD", {}));
      var Ih = s(ys);
      (sd = l(Ih, "153,125")),
        Ih.forEach(t),
        (rd = i(jt)),
        (_s = n(jt, "TD", {}));
      var xh = s(_s);
      (ld = l(xh, "612,500")),
        xh.forEach(t),
        (od = i(jt)),
        (Es = n(jt, "TD", {}));
      var Ro = s(Es);
      (id = l(Ro, "1,531,250")),
        Ro.forEach(t),
        (dd = i(jt)),
        (ws = n(jt, "TD", {}));
      var Ah = s(ws);
      (cd = l(Ah, "3,062,500")),
        Ah.forEach(t),
        (hd = i(jt)),
        (Ts = n(jt, "TD", {}));
      var Ch = s(Ts);
      (ud = l(Ch, "4,593,750")),
        Ch.forEach(t),
        (fd = i(jt)),
        (Ps = n(jt, "TD", {}));
      var Mo = s(Ps);
      (pd = l(Mo, "6,125,000")),
        Mo.forEach(t),
        jt.forEach(t),
        (md = i(st)),
        (xn = n(st, "TR", { class: !0 }));
      var $h = s(xn);
      Ls = n($h, "TD", { colspan: !0, class: !0 });
      var Sh = s(Ls);
      (no = n(Sh, "SPAN", {})),
        s(no).forEach(t),
        Sh.forEach(t),
        $h.forEach(t),
        (Kr = i(st)),
        (An = n(st, "TR", { class: !0 }));
      var Ft = s(An);
      ks = n(Ft, "TD", { class: !0, colspan: !0 });
      var qo = s(ks);
      (Mt = l(qo, "SNS Value (25%)")),
        qo.forEach(t),
        (zr = i(Ft)),
        (Xr = n(Ft, "TD", {}));
      var Hh = s(Xr);
      (vd = l(Hh, "1,531,250")),
        Hh.forEach(t),
        Ft.forEach(t),
        st.forEach(t),
        (Qr = i(_)),
        (nr = n(_, "H2", { class: !0 }));
      var Rh = s(nr);
      (gd = l(Rh, "SNS Decentralisation Sale Configuration")),
        Rh.forEach(t),
        (Yr = i(_)),
        (ht = n(_, "TABLE", { class: !0 }));
      var Pt = s(ht);
      Cn = n(Pt, "TR", { class: !0 });
      var Bo = s(Cn);
      Ds = n(Bo, "TH", {});
      var Mh = s(Ds);
      (bd = l(Mh, "Configuration")),
        Mh.forEach(t),
        (yd = i(Bo)),
        (Fs = n(Bo, "TH", {}));
      var Wo = s(Fs);
      (_d = l(Wo, "Value")),
        Wo.forEach(t),
        Bo.forEach(t),
        (Ed = i(Pt)),
        ($n = n(Pt, "TR", { class: !0 }));
      var qh = s($n);
      sr = n(qh, "TD", { class: !0 });
      var Bh = s(sr);
      (so = n(Bh, "SPAN", {})),
        s(so).forEach(t),
        Bh.forEach(t),
        qh.forEach(t),
        (Zr = i(Pt)),
        (Sn = n(Pt, "TR", { class: !0 }));
      var or = s(Sn);
      el = n(or, "TD", {});
      var Wh = s(el);
      (tl = l(Wh, "The total number of FPL tokens to be sold.")),
        Wh.forEach(t),
        (wd = i(or)),
        (al = n(or, "TD", {}));
      var Uh = s(al);
      (qt = l(Uh, "25,000,000 (25%)")),
        Uh.forEach(t),
        or.forEach(t),
        (nl = i(Pt)),
        (Hn = n(Pt, "TR", { class: !0 }));
      var ir = s(Hn);
      sl = n(ir, "TD", {});
      var Nh = s(sl);
      (rl = l(Nh, "The maximum ICP to be raised.")),
        Nh.forEach(t),
        (Td = i(ir)),
        (ll = n(ir, "TD", {}));
      var Gh = s(ll);
      (ol = l(Gh, "2,000,000")),
        Gh.forEach(t),
        ir.forEach(t),
        (Pd = i(Pt)),
        (Rn = n(Pt, "TR", { class: !0 }));
      var dr = s(Rn);
      Os = n(dr, "TD", {});
      var Vh = s(Os);
      (Ld = l(
        Vh,
        "The minimum ICP to be raised (otherwise sale fails and ICP returned)."
      )),
        Vh.forEach(t),
        (kd = i(dr)),
        (Is = n(dr, "TD", {}));
      var jh = s(Is);
      (Dd = l(jh, "1,000,000")),
        jh.forEach(t),
        dr.forEach(t),
        (Fd = i(Pt)),
        (nn = n(Pt, "TR", { class: !0 }));
      var cr = s(nn);
      il = n(cr, "TD", {});
      var Jh = s(il);
      (Od = l(Jh, "The ICP from the Community Fund.")),
        Jh.forEach(t),
        (dl = i(cr)),
        (cl = n(cr, "TD", {}));
      var Kh = s(cl);
      (Id = l(Kh, "Matched Funding Enabled")),
        Kh.forEach(t),
        cr.forEach(t),
        (hl = i(Pt)),
        (Mn = n(Pt, "TR", { class: !0 }));
      var hr = s(Mn);
      ul = n(hr, "TD", {});
      var zh = s(ul);
      (Bt = l(zh, "Sale start date.")),
        zh.forEach(t),
        (fl = i(hr)),
        (pl = n(hr, "TD", {}));
      var Xh = s(pl);
      (xd = l(Xh, "1st March 2024")),
        Xh.forEach(t),
        hr.forEach(t),
        (ml = i(Pt)),
        (qn = n(Pt, "TR", { class: !0 }));
      var Ot = s(qn);
      vl = n(Ot, "TD", {});
      var Uo = s(vl);
      (gl = l(Uo, "Minimum number of sale participants.")),
        Uo.forEach(t),
        (Ad = i(Ot)),
        (bl = n(Ot, "TD", {}));
      var Qh = s(bl);
      (yl = l(Qh, "500")),
        Qh.forEach(t),
        Ot.forEach(t),
        (Cd = i(Pt)),
        (Bn = n(Pt, "TR", { class: !0 }));
      var No = s(Bn);
      xs = n(No, "TD", {});
      var Go = s(xs);
      ($d = l(Go, "Minimum ICP per buyer.")),
        Go.forEach(t),
        (Sd = i(No)),
        (As = n(No, "TD", {}));
      var Yh = s(As);
      (Hd = l(Yh, "10")),
        Yh.forEach(t),
        No.forEach(t),
        (Rd = i(Pt)),
        (sn = n(Pt, "TR", { class: !0 }));
      var Vo = s(sn);
      _l = n(Vo, "TD", {});
      var jo = s(_l);
      (Md = l(jo, "Maximum ICP per buyer.")),
        jo.forEach(t),
        (El = i(Vo)),
        (wl = n(Vo, "TD", {}));
      var Zh = s(wl);
      (qd = l(Zh, "150,000")),
        Zh.forEach(t),
        Vo.forEach(t),
        Pt.forEach(t),
        (Wt = i(_)),
        (Wn = n(_, "H2", { class: !0 }));
      var eu = s(Wn);
      (Bd = l(eu, "Mitigation against a 51% Attack")),
        eu.forEach(t),
        (Wd = i(_)),
        (Un = n(_, "P", { class: !0 }));
      var Jo = s(Un);
      (Ud = l(
        Jo,
        `There is a danger that the OpenFPL SNS treasury could be the target of an
      attack. One possible scenario is for an attacker to buy a large proportion
      of the FPL tokens in the decentralisation sale and immediately increase
      the dissolve delay of all of their neurons to the maximum 4 year in an
      attempt to gain more than 50% of the SNS voting power. If successful they
      could force through a proposal to transfer the entire ICP and FPL treasury
      to themselves. The Community Fund actually provides a great deal of
      mitigation against this scenario because it limits the proportion of
      voting power an attacker would be able to acquire.`
      )),
        Jo.forEach(t),
        (Nd = i(_)),
        (Nn = n(_, "P", { class: !0 }));
      var tu = s(Nn);
      (Gd = l(
        tu,
        "The amount raised in the decentralisation will be used as follows:"
      )),
        tu.forEach(t),
        (Vd = i(_)),
        (ga = n(_, "UL", { class: !0 }));
      var Zn = s(ga);
      Tl = n(Zn, "LI", {});
      var Ko = s(Tl);
      (jd = l(
        Ko,
        `80% will be staked in an 8 year neuron with the maturity interest paid
        to the ICPFA.`
      )),
        Ko.forEach(t),
        (Pl = i(Zn)),
        (Ll = n(Zn, "LI", {}));
      var au = s(Ll);
      (Jd = l(
        au,
        `10% will be available for exchange liquidity to enable trading of the
        FPL token.`
      )),
        au.forEach(t),
        (kl = i(Zn)),
        (Dl = n(Zn, "LI", {}));
      var nu = s(Dl);
      (Kd = l(
        nu,
        "5% will be paid directly to the ICPFA after the decentralisation sale."
      )),
        nu.forEach(t),
        (Fl = i(Zn)),
        (Ol = n(Zn, "LI", {}));
      var zo = s(Ol);
      (zd = l(
        zo,
        `5% will be held in reserve for cycles to run OpenFPL, likely to be
        unused as OpenFPL begins generating revenue.`
      )),
        zo.forEach(t),
        Zn.forEach(t),
        (Il = i(_)),
        (rr = n(_, "P", { class: !0 }));
      var su = s(rr);
      (Xd = l(
        su,
        `This treasury balance will be topped up with the DAO's revenue, with 50%
      being paid to neuron holders. Any excess balance can be utilised where the
      DAO sees fit.`
      )),
        su.forEach(t),
        (Ut = i(_)),
        (Gn = n(_, "H2", { class: !0 }));
      var ru = s(Gn);
      (Qd = l(ru, "Tokenomics")),
        ru.forEach(t),
        (Yd = i(_)),
        (Vn = n(_, "P", { class: !0 }));
      var Xo = s(Vn);
      (Zd = l(
        Xo,
        `Each season, 2.5% of the total $FPL supply will be minted for DAO rewards.
      There is no mechanism to automatically burn $FPL as we anticipate the user
      growth to be faster than the supply increase, thus increasing the price of
      $FPL. However a proposal can always be made to burn $FPL if required. If
      the DAO’s treasury is ever 60% or more of the total supply of $FPL, it
      will be ICP FA policy to raise a proposal to burn 5% of the total supply
      from the DAO’s treasury.`
      )),
        Xo.forEach(t),
        (ec = i(_)),
        (jn = n(_, "H2", { class: !0 }));
      var lu = s(jn);
      (tc = l(lu, "ICP FA Overview")),
        lu.forEach(t),
        (ac = i(_)),
        (Jn = n(_, "P", { class: !0 }));
      var ou = s(Jn);
      (nc = l(
        ou,
        `Managed by founder James Beadle, the ICP FA oversees the development,
      marketing, and management of OpenFPL. The aim is to build a strong team to
      guide OpenFPL's growth and bring new users to the ICP blockchain.
      Additionally, 25% of James' staked maturity earnings will contribute to
      the ICP FA Community Fund, supporting grassroots football projects.`
      )),
        ou.forEach(t),
        (sc = i(_)),
        (Kn = n(_, "P", { class: !0 }));
      var Qo = s(Kn);
      (rc = l(
        Qo,
        `The ICPFA will receive 5% of the decentralisation sale along with the
      maturity interest from the staked neuron. These funds will be use for the
      following:`
      )),
        Qo.forEach(t),
        (lc = i(_)),
        (ba = n(_, "UL", { class: !0 }));
      var es = s(ba);
      xl = n(es, "LI", {});
      var iu = s(xl);
      (oc = l(
        iu,
        "The ongoing promotion and marketing of OpenFPL both online and offline."
      )),
        iu.forEach(t),
        (Al = i(es)),
        (Cl = n(es, "LI", {}));
      var Yt = s(Cl);
      (ic = l(
        Yt,
        `Hiring of a frontend and backend developer to assist the founder with
        the day to day development workload.`
      )),
        Yt.forEach(t),
        ($l = i(es)),
        (Sl = n(es, "LI", {}));
      var Yo = s(Sl);
      (dc = l(
        Yo,
        `Hiring of a UAT Test Engineer to ensure all ICPFA products are of the
        highest quality.`
      )),
        Yo.forEach(t),
        (Nt = i(es)),
        (Cs = n(es, "LI", {}));
      var du = s(Cs);
      (cc = l(du, "Hiring of a Marketing Manager.")),
        du.forEach(t),
        es.forEach(t),
        (hc = i(_)),
        (zn = n(_, "P", { class: !0 }));
      var cu = s(zn);
      (uc = l(cu, "Along with paying the founding team members:")),
        cu.forEach(t),
        (fc = i(_)),
        (fa = n(_, "UL", { class: !0 }));
      var wa = s(fa);
      Hl = n(wa, "LI", {});
      var hu = s(Hl);
      (pc = l(hu, "James Beadle - Founder, Lead Developer")),
        hu.forEach(t),
        (Rl = i(wa)),
        (Ml = n(wa, "LI", {}));
      var uu = s(Ml);
      (mc = l(uu, "DfinityDesigner - Designer")),
        uu.forEach(t),
        (ql = i(wa)),
        (Bl = n(wa, "LI", {}));
      var Zo = s(Bl);
      (vc = l(Zo, "George - Community Manager")),
        Zo.forEach(t),
        (Wl = i(wa)),
        (Ul = n(wa, "LI", {}));
      var fu = s(Ul);
      (gc = l(fu, "ICP_Insider - Blockchain Promoter")),
        fu.forEach(t),
        (Nl = i(wa)),
        (Gl = n(wa, "LI", {}));
      var pu = s(Gl);
      (bc = l(pu, "MadMaxIC - Gameplay Designer")),
        pu.forEach(t),
        wa.forEach(t),
        (Vl = i(_)),
        (Xn = n(_, "P", { class: !0 }));
      var ur = s(Xn);
      (yc = l(
        ur,
        "More details about the ICP FA and its members can be found at "
      )),
        (ut = n(ur, "A", { class: !0, href: !0 }));
      var mu = s(ut);
      (jl = l(mu, "icpfa.org/team")),
        mu.forEach(t),
        (_c = l(ur, ".")),
        ur.forEach(t),
        _.forEach(t),
        lr.forEach(t),
        this.h();
    },
    h() {
      c(u, "class", "text-3xl font-bold my-4"),
        c(T, "class", "text-xl font-bold"),
        c(P, "class", "my-2"),
        c(g, "class", "list-disc ml-4"),
        c(_e, "class", "text-lg font-bold mt-4"),
        c(Ee, "class", "my-2"),
        c(K, "class", "list-disc ml-4"),
        c(N, "class", "my-2"),
        c(z, "class", "list-disc ml-4"),
        c(ce, "class", "my-2"),
        c(V, "class", "list-disc ml-4"),
        c(m, "class", "my-2"),
        c(Ve, "class", "list-disc ml-4"),
        c(ha, "class", "text-lg font-bold mt-4"),
        c(ua, "class", "my-2"),
        c(gt, "class", "list-disc ml-4"),
        c(cn, "class", "mt-8"),
        c(hn, "class", "text-left px-4"),
        c(tt, "class", "text-right svelte-a09ql9"),
        c(un, "class", "h-6"),
        c(za, "class", "svelte-a09ql9"),
        c(fn, "class", "text-left px-4"),
        c(lt, "class", "svelte-a09ql9"),
        c(Ys, "class", "h-6"),
        c(Qs, "class", "svelte-a09ql9"),
        c(dt, "class", "text-left px-4"),
        c(dt, "colspan", "9"),
        c(er, "class", "svelte-a09ql9"),
        c(Fn, "class", "text-left px-4"),
        c(bt, "class", "svelte-a09ql9"),
        c(On, "class", "text-left px-4"),
        c(_t, "class", "svelte-a09ql9"),
        c(In, "class", "text-left px-4"),
        c(wt, "class", "svelte-a09ql9"),
        c(pn, "colspan", "9"),
        c(pn, "class", "h-6"),
        c(tr, "class", "svelte-a09ql9"),
        c(ar, "class", "text-left px-4"),
        c(ct, "class", "font-bold svelte-a09ql9"),
        c(Ls, "colspan", "9"),
        c(Ls, "class", "h-6"),
        c(xn, "class", "svelte-a09ql9"),
        c(ks, "class", "text-left px-4"),
        c(ks, "colspan", "8"),
        c(An, "class", "font-bold svelte-a09ql9"),
        c(
          We,
          "class",
          "w-full text-right border-collapse striped mb-8 mt-4 svelte-a09ql9"
        ),
        c(nr, "class", "text-lg font-bold mt-4"),
        c(Cn, "class", "svelte-a09ql9"),
        c(sr, "class", "h-6"),
        c($n, "class", "svelte-a09ql9"),
        c(Sn, "class", "svelte-a09ql9"),
        c(Hn, "class", "svelte-a09ql9"),
        c(Rn, "class", "svelte-a09ql9"),
        c(nn, "class", "svelte-a09ql9"),
        c(Mn, "class", "svelte-a09ql9"),
        c(qn, "class", "svelte-a09ql9"),
        c(Bn, "class", "svelte-a09ql9"),
        c(sn, "class", "svelte-a09ql9"),
        c(
          ht,
          "class",
          "w-full text-left border-collapse striped mb-8 mt-4 svelte-a09ql9"
        ),
        c(Wn, "class", "text-lg font-bold mt-4"),
        c(Un, "class", "my-2"),
        c(Nn, "class", "my-2"),
        c(ga, "class", "list-disc ml-4"),
        c(rr, "class", "my-2"),
        c(Gn, "class", "text-lg font-bold mt-4"),
        c(Vn, "class", "my-2"),
        c(jn, "class", "text-lg font-bold mt-4"),
        c(Jn, "class", "my-2"),
        c(Kn, "class", "my-2"),
        c(ba, "class", "list-disc ml-4"),
        c(zn, "class", "my-2"),
        c(fa, "class", "list-disc ml-4"),
        c(ut, "class", "text-blue-500"),
        c(ut, "href", "https://icpfa.org/team"),
        c(Xn, "class", "my-2"),
        c(d, "class", "m-4"),
        c(h, "class", "container-fluid mx-auto p-4");
    },
    m(Jl, lr) {
      Ql(Jl, h, lr),
        e(h, d),
        e(d, u),
        e(u, w),
        e(d, he),
        e(d, T),
        e(T, $),
        e(d, le),
        e(d, P),
        e(P, Ie),
        e(d, Te),
        e(d, g),
        e(g, ue),
        e(ue, fe),
        e(g, L),
        e(g, pe),
        e(pe, xe),
        e(g, A),
        e(g, me),
        e(me, ve),
        e(g, F),
        e(g, oe),
        e(oe, Ae),
        e(g, C),
        e(g, ie),
        e(ie, Y),
        e(g, O),
        e(g, k),
        e(k, Z),
        e(g, U),
        e(g, Ce),
        e(Ce, de),
        e(g, y),
        e(g, ye),
        e(ye, Pe),
        e(d, S),
        e(d, _e),
        e(_e, Le),
        e(d, j),
        e(d, Ee),
        e(Ee, Ue),
        e(d, ee),
        e(d, K),
        e(K, ge),
        e(ge, J),
        e(K, Re),
        e(K, ke),
        e(ke, te),
        e(K, $e),
        e(K, p),
        e(p, D),
        e(K, we),
        e(K, Ne),
        e(Ne, ae),
        e(d, Q),
        e(d, N),
        e(N, R),
        e(d, M),
        e(d, z),
        e(z, ne),
        e(ne, Ge),
        e(z, De),
        e(z, se),
        e(se, E),
        e(z, H),
        e(z, G),
        e(G, X),
        e(z, Fe),
        e(z, I),
        e(I, Ke),
        e(z, Me),
        e(z, re),
        e(re, ze),
        e(d, Oe),
        e(d, ce),
        e(ce, f),
        e(d, Se),
        e(d, V),
        e(V, Qe),
        e(Qe, He),
        e(V, qe),
        e(V, je),
        e(je, Be),
        e(V, b),
        e(V, at),
        e(at, nt),
        e(V, Ye),
        e(V, ft),
        e(ft, B),
        e(V, Ze),
        e(V, v),
        e(v, ot),
        e(d, pt),
        e(d, m),
        e(m, Lt),
        e(d, et),
        e(d, Ve),
        e(Ve, mt),
        e(mt, kt),
        e(Ve, Dt),
        e(Ve, be),
        e(be, It),
        e(Ve, xt),
        e(Ve, Zt),
        e(Zt, At),
        e(Ve, ia),
        e(Ve, ea),
        e(ea, Ct),
        e(Ve, da),
        e(Ve, ta),
        e(ta, $t),
        e(d, ca),
        e(d, ha),
        e(ha, ra),
        e(d, ya),
        e(d, ua),
        e(ua, la),
        e(d, _a),
        e(d, gt),
        e(gt, St),
        e(St, Xa),
        e(gt, Qa),
        e(gt, oa),
        e(oa, Ya),
        e(gt, as),
        e(gt, Je),
        e(Je, on),
        e(gt, dn),
        e(gt, Za),
        e(Za, W),
        e(d, Hs),
        e(d, cn),
        e(cn, mn),
        e(d, Rs),
        e(d, We),
        e(We, tt),
        e(tt, hn),
        e(hn, Ms),
        e(tt, vn),
        e(tt, gn),
        e(gn, it),
        e(tt, bn),
        e(tt, yn),
        e(yn, qs),
        e(tt, _n),
        e(tt, En),
        e(En, Bs),
        e(tt, wn),
        e(tt, Tn),
        e(Tn, Ws),
        e(tt, vt),
        e(tt, en),
        e(en, va),
        e(tt, Us),
        e(tt, tn),
        e(tn, Ns),
        e(tt, Gs),
        e(tt, an),
        e(an, Vs),
        e(tt, js),
        e(tt, Xe),
        e(Xe, Js),
        e(We, Ks),
        e(We, za),
        e(za, un),
        e(un, ns),
        e(We, Pn),
        e(We, lt),
        e(lt, fn),
        e(fn, Ln),
        e(lt, zs),
        e(lt, kn),
        e(kn, Dn),
        e(lt, Xs),
        e(lt, pr),
        e(pr, Ht),
        e(lt, mr),
        e(lt, vr),
        e(vr, ti),
        e(lt, gr),
        e(lt, br),
        e(br, ai),
        e(lt, yr),
        e(lt, _r),
        e(_r, ni),
        e(lt, Er),
        e(lt, wr),
        e(wr, si),
        e(lt, Tr),
        e(lt, Pr),
        e(Pr, ri),
        e(lt, Lr),
        e(lt, kr),
        e(kr, li),
        e(We, Dr),
        e(We, Qs),
        e(Qs, Ys),
        e(Ys, Zs),
        e(We, oi),
        e(We, er),
        e(er, dt),
        e(dt, Fr),
        e(We, ii),
        e(We, bt),
        e(bt, Fn),
        e(Fn, di),
        e(bt, ci),
        e(bt, ss),
        e(ss, hi),
        e(bt, ui),
        e(bt, rs),
        e(rs, fi),
        e(bt, pi),
        e(bt, ls),
        e(ls, mi),
        e(bt, vi),
        e(bt, os),
        e(os, gi),
        e(bt, bi),
        e(bt, is),
        e(is, yi),
        e(bt, _i),
        e(bt, ds),
        e(ds, Ei),
        e(bt, wi),
        e(bt, yt),
        e(yt, Or),
        e(bt, Ti),
        e(bt, Ir),
        e(Ir, xr),
        e(We, Pi),
        e(We, _t),
        e(_t, On),
        e(On, Li),
        e(_t, ki),
        e(_t, cs),
        e(cs, Di),
        e(_t, Fi),
        e(_t, hs),
        e(hs, Oi),
        e(_t, Ii),
        e(_t, us),
        e(us, xi),
        e(_t, Ai),
        e(_t, fs),
        e(fs, Ci),
        e(_t, $i),
        e(_t, ps),
        e(ps, Si),
        e(_t, Hi),
        e(_t, Et),
        e(Et, Ar),
        e(_t, Ri),
        e(_t, Cr),
        e(Cr, $r),
        e(_t, Mi),
        e(_t, Sr),
        e(Sr, Hr),
        e(We, qi),
        e(We, wt),
        e(wt, In),
        e(In, Bi),
        e(wt, Wi),
        e(wt, ms),
        e(ms, Ui),
        e(wt, Ni),
        e(wt, vs),
        e(vs, Gi),
        e(wt, Vi),
        e(wt, gs),
        e(gs, ji),
        e(wt, Ji),
        e(wt, bs),
        e(bs, Ki),
        e(wt, zi),
        e(wt, Tt),
        e(Tt, Rr),
        e(wt, Xi),
        e(wt, Mr),
        e(Mr, qr),
        e(wt, Qi),
        e(wt, Br),
        e(Br, Wr),
        e(wt, Yi),
        e(wt, Ur),
        e(Ur, Nr),
        e(We, Zi),
        e(We, tr),
        e(tr, pn),
        e(pn, ao),
        e(We, ed),
        e(We, ct),
        e(ct, ar),
        e(ar, td),
        e(ct, Gr),
        e(ct, Vr),
        e(Vr, ad),
        e(ct, jr),
        e(ct, Jr),
        e(Jr, nd),
        e(ct, Rt),
        e(ct, ys),
        e(ys, sd),
        e(ct, rd),
        e(ct, _s),
        e(_s, ld),
        e(ct, od),
        e(ct, Es),
        e(Es, id),
        e(ct, dd),
        e(ct, ws),
        e(ws, cd),
        e(ct, hd),
        e(ct, Ts),
        e(Ts, ud),
        e(ct, fd),
        e(ct, Ps),
        e(Ps, pd),
        e(We, md),
        e(We, xn),
        e(xn, Ls),
        e(Ls, no),
        e(We, Kr),
        e(We, An),
        e(An, ks),
        e(ks, Mt),
        e(An, zr),
        e(An, Xr),
        e(Xr, vd),
        e(d, Qr),
        e(d, nr),
        e(nr, gd),
        e(d, Yr),
        e(d, ht),
        e(ht, Cn),
        e(Cn, Ds),
        e(Ds, bd),
        e(Cn, yd),
        e(Cn, Fs),
        e(Fs, _d),
        e(ht, Ed),
        e(ht, $n),
        e($n, sr),
        e(sr, so),
        e(ht, Zr),
        e(ht, Sn),
        e(Sn, el),
        e(el, tl),
        e(Sn, wd),
        e(Sn, al),
        e(al, qt),
        e(ht, nl),
        e(ht, Hn),
        e(Hn, sl),
        e(sl, rl),
        e(Hn, Td),
        e(Hn, ll),
        e(ll, ol),
        e(ht, Pd),
        e(ht, Rn),
        e(Rn, Os),
        e(Os, Ld),
        e(Rn, kd),
        e(Rn, Is),
        e(Is, Dd),
        e(ht, Fd),
        e(ht, nn),
        e(nn, il),
        e(il, Od),
        e(nn, dl),
        e(nn, cl),
        e(cl, Id),
        e(ht, hl),
        e(ht, Mn),
        e(Mn, ul),
        e(ul, Bt),
        e(Mn, fl),
        e(Mn, pl),
        e(pl, xd),
        e(ht, ml),
        e(ht, qn),
        e(qn, vl),
        e(vl, gl),
        e(qn, Ad),
        e(qn, bl),
        e(bl, yl),
        e(ht, Cd),
        e(ht, Bn),
        e(Bn, xs),
        e(xs, $d),
        e(Bn, Sd),
        e(Bn, As),
        e(As, Hd),
        e(ht, Rd),
        e(ht, sn),
        e(sn, _l),
        e(_l, Md),
        e(sn, El),
        e(sn, wl),
        e(wl, qd),
        e(d, Wt),
        e(d, Wn),
        e(Wn, Bd),
        e(d, Wd),
        e(d, Un),
        e(Un, Ud),
        e(d, Nd),
        e(d, Nn),
        e(Nn, Gd),
        e(d, Vd),
        e(d, ga),
        e(ga, Tl),
        e(Tl, jd),
        e(ga, Pl),
        e(ga, Ll),
        e(Ll, Jd),
        e(ga, kl),
        e(ga, Dl),
        e(Dl, Kd),
        e(ga, Fl),
        e(ga, Ol),
        e(Ol, zd),
        e(d, Il),
        e(d, rr),
        e(rr, Xd),
        e(d, Ut),
        e(d, Gn),
        e(Gn, Qd),
        e(d, Yd),
        e(d, Vn),
        e(Vn, Zd),
        e(d, ec),
        e(d, jn),
        e(jn, tc),
        e(d, ac),
        e(d, Jn),
        e(Jn, nc),
        e(d, sc),
        e(d, Kn),
        e(Kn, rc),
        e(d, lc),
        e(d, ba),
        e(ba, xl),
        e(xl, oc),
        e(ba, Al),
        e(ba, Cl),
        e(Cl, ic),
        e(ba, $l),
        e(ba, Sl),
        e(Sl, dc),
        e(ba, Nt),
        e(ba, Cs),
        e(Cs, cc),
        e(d, hc),
        e(d, zn),
        e(zn, uc),
        e(d, fc),
        e(d, fa),
        e(fa, Hl),
        e(Hl, pc),
        e(fa, Rl),
        e(fa, Ml),
        e(Ml, mc),
        e(fa, ql),
        e(fa, Bl),
        e(Bl, vc),
        e(fa, Wl),
        e(fa, Ul),
        e(Ul, gc),
        e(fa, Nl),
        e(fa, Gl),
        e(Gl, bc),
        e(d, Vl),
        e(d, Xn),
        e(Xn, yc),
        e(Xn, ut),
        e(ut, jl),
        e(Xn, _c);
    },
    p: Jt,
    i: Jt,
    o: Jt,
    d(Jl) {
      Jl && t(h);
    },
  };
}
class t1 extends Kl {
  constructor(h) {
    super(), zl(this, h, null, e1, Xl, {});
  }
}
function a1(x) {
  let h,
    d,
    u,
    w,
    he,
    T,
    $,
    le,
    P,
    Ie,
    Te,
    g,
    ue,
    fe,
    L,
    pe,
    xe,
    A,
    me,
    ve,
    F,
    oe,
    Ae,
    C,
    ie;
  return {
    c() {
      (h = a("div")),
        (d = a("div")),
        (u = a("h1")),
        (w = r("Our Vision")),
        (he = o()),
        (T = a("p")),
        ($ =
          r(`In an evolving landscape where blockchain technology is still unlocking
      its potential, the Internet Computer offers a promising platform for
      innovative applications. OpenFPL is one such initiative, aiming to
      transform fantasy Premier League football into a more engaging and
      decentralised experience.`)),
        (le = o()),
        (P = a("p")),
        (Ie =
          r(`Our goal is to develop this popular service into a decentralised
      autonomous organisation (DAO), rewarding fans for their insight and
      participation in football.`)),
        (Te = o()),
        (g = a("p")),
        (ue =
          r(`Our vision for OpenFPL encompasses a commitment to societal impact,
      specifically through meaningful contributions to the ICPFA community fund.
      This effort is focused on supporting grassroots football initiatives,
      demonstrating our belief in OpenFPL's ability to bring about positive
      change in the football community.`)),
        (fe = o()),
        (L = a("p")),
        (pe =
          r(`OpenFPL aims to be recognised as more than just a digital platform; we
      aspire to build a brand that creates diverse revenue opportunities. Our
      economic model is designed to directly benefit our token holders,
      particularly those with staked neurons, through a fair distribution of
      rewards. This ensures that the value generated by the platform is shared
      within our community.`)),
        (xe = o()),
        (A = a("p")),
        (me =
          r(`Central to OpenFPL is our community focus. We strive to create a space
      where Premier League fans feel at home, with their input shaping the
      service. Our features, including community-based player valuations,
      customisable private leagues, and collaborations with football content
      creators, are all aimed at enhancing user engagement. As we attract more
      users, we expect an increased demand for our services, which will
      contribute to the growth and value of our governance token, $FPL.`)),
        (ve = o()),
        (F = a("p")),
        (oe =
          r(`In essence, OpenFPL represents a unique blend of football passion and
      blockchain innovation. Our approach is about more than just reinventing
      fantasy sports; it's about building a vibrant community, pushing
      technological boundaries, and generating new economic opportunities.
      OpenFPL seeks to redefine the way fans engage with the sport they love,
      making a real impact in the football world.`)),
        (Ae = o()),
        (C = a("p")),
        (ie =
          r(`Innovation is at the heart of OpenFPL. We are excited about exploring the
      possibilities of integrating on-chain AI to assist managers with team
      selection. This endeavor is not just about enhancing the user experience;
      it's about exploring new frontiers for blockchain technology in sports.`)),
        this.h();
    },
    l(Y) {
      h = n(Y, "DIV", { class: !0 });
      var O = s(h);
      d = n(O, "DIV", { class: !0 });
      var k = s(d);
      u = n(k, "H1", { class: !0 });
      var Z = s(u);
      (w = l(Z, "Our Vision")),
        Z.forEach(t),
        (he = i(k)),
        (T = n(k, "P", { class: !0 }));
      var U = s(T);
      ($ = l(
        U,
        `In an evolving landscape where blockchain technology is still unlocking
      its potential, the Internet Computer offers a promising platform for
      innovative applications. OpenFPL is one such initiative, aiming to
      transform fantasy Premier League football into a more engaging and
      decentralised experience.`
      )),
        U.forEach(t),
        (le = i(k)),
        (P = n(k, "P", { class: !0 }));
      var Ce = s(P);
      (Ie = l(
        Ce,
        `Our goal is to develop this popular service into a decentralised
      autonomous organisation (DAO), rewarding fans for their insight and
      participation in football.`
      )),
        Ce.forEach(t),
        (Te = i(k)),
        (g = n(k, "P", { class: !0 }));
      var de = s(g);
      (ue = l(
        de,
        `Our vision for OpenFPL encompasses a commitment to societal impact,
      specifically through meaningful contributions to the ICPFA community fund.
      This effort is focused on supporting grassroots football initiatives,
      demonstrating our belief in OpenFPL's ability to bring about positive
      change in the football community.`
      )),
        de.forEach(t),
        (fe = i(k)),
        (L = n(k, "P", { class: !0 }));
      var y = s(L);
      (pe = l(
        y,
        `OpenFPL aims to be recognised as more than just a digital platform; we
      aspire to build a brand that creates diverse revenue opportunities. Our
      economic model is designed to directly benefit our token holders,
      particularly those with staked neurons, through a fair distribution of
      rewards. This ensures that the value generated by the platform is shared
      within our community.`
      )),
        y.forEach(t),
        (xe = i(k)),
        (A = n(k, "P", { class: !0 }));
      var ye = s(A);
      (me = l(
        ye,
        `Central to OpenFPL is our community focus. We strive to create a space
      where Premier League fans feel at home, with their input shaping the
      service. Our features, including community-based player valuations,
      customisable private leagues, and collaborations with football content
      creators, are all aimed at enhancing user engagement. As we attract more
      users, we expect an increased demand for our services, which will
      contribute to the growth and value of our governance token, $FPL.`
      )),
        ye.forEach(t),
        (ve = i(k)),
        (F = n(k, "P", { class: !0 }));
      var Pe = s(F);
      (oe = l(
        Pe,
        `In essence, OpenFPL represents a unique blend of football passion and
      blockchain innovation. Our approach is about more than just reinventing
      fantasy sports; it's about building a vibrant community, pushing
      technological boundaries, and generating new economic opportunities.
      OpenFPL seeks to redefine the way fans engage with the sport they love,
      making a real impact in the football world.`
      )),
        Pe.forEach(t),
        (Ae = i(k)),
        (C = n(k, "P", { class: !0 }));
      var S = s(C);
      (ie = l(
        S,
        `Innovation is at the heart of OpenFPL. We are excited about exploring the
      possibilities of integrating on-chain AI to assist managers with team
      selection. This endeavor is not just about enhancing the user experience;
      it's about exploring new frontiers for blockchain technology in sports.`
      )),
        S.forEach(t),
        k.forEach(t),
        O.forEach(t),
        this.h();
    },
    h() {
      c(u, "class", "text-3xl font-bold"),
        c(T, "class", "my-4"),
        c(P, "class", "my-4"),
        c(g, "class", "my-4"),
        c(L, "class", "my-4"),
        c(A, "class", "my-4"),
        c(F, "class", "my-4"),
        c(C, "class", "my-4"),
        c(d, "class", "m-4"),
        c(h, "class", "container-fluid mx-auto p-4");
    },
    m(Y, O) {
      Ql(Y, h, O),
        e(h, d),
        e(d, u),
        e(u, w),
        e(d, he),
        e(d, T),
        e(T, $),
        e(d, le),
        e(d, P),
        e(P, Ie),
        e(d, Te),
        e(d, g),
        e(g, ue),
        e(d, fe),
        e(d, L),
        e(L, pe),
        e(d, xe),
        e(d, A),
        e(A, me),
        e(d, ve),
        e(d, F),
        e(F, oe),
        e(d, Ae),
        e(d, C),
        e(C, ie);
    },
    p: Jt,
    i: Jt,
    o: Jt,
    d(Y) {
      Y && t(h);
    },
  };
}
class n1 extends Kl {
  constructor(h) {
    super(), zl(this, h, null, a1, Xl, {});
  }
}
function s1(x) {
  let h, d;
  return (
    (h = new Ng({})),
    {
      c() {
        Yl(h.$$.fragment);
      },
      l(u) {
        Zl(h.$$.fragment, u);
      },
      m(u, w) {
        eo(h, u, w), (d = !0);
      },
      i(u) {
        d || ($s(h.$$.fragment, u), (d = !0));
      },
      o(u) {
        Ss(h.$$.fragment, u), (d = !1);
      },
      d(u) {
        to(h, u);
      },
    }
  );
}
function r1(x) {
  let h, d;
  return (
    (h = new t1({})),
    {
      c() {
        Yl(h.$$.fragment);
      },
      l(u) {
        Zl(h.$$.fragment, u);
      },
      m(u, w) {
        eo(h, u, w), (d = !0);
      },
      i(u) {
        d || ($s(h.$$.fragment, u), (d = !0));
      },
      o(u) {
        Ss(h.$$.fragment, u), (d = !1);
      },
      d(u) {
        to(h, u);
      },
    }
  );
}
function l1(x) {
  let h, d;
  return (
    (h = new Vg({})),
    {
      c() {
        Yl(h.$$.fragment);
      },
      l(u) {
        Zl(h.$$.fragment, u);
      },
      m(u, w) {
        eo(h, u, w), (d = !0);
      },
      i(u) {
        d || ($s(h.$$.fragment, u), (d = !0));
      },
      o(u) {
        Ss(h.$$.fragment, u), (d = !1);
      },
      d(u) {
        to(h, u);
      },
    }
  );
}
function o1(x) {
  let h, d;
  return (
    (h = new Qg({})),
    {
      c() {
        Yl(h.$$.fragment);
      },
      l(u) {
        Zl(h.$$.fragment, u);
      },
      m(u, w) {
        eo(h, u, w), (d = !0);
      },
      i(u) {
        d || ($s(h.$$.fragment, u), (d = !0));
      },
      o(u) {
        Ss(h.$$.fragment, u), (d = !1);
      },
      d(u) {
        to(h, u);
      },
    }
  );
}
function i1(x) {
  let h, d;
  return (
    (h = new zg({})),
    {
      c() {
        Yl(h.$$.fragment);
      },
      l(u) {
        Zl(h.$$.fragment, u);
      },
      m(u, w) {
        eo(h, u, w), (d = !0);
      },
      i(u) {
        d || ($s(h.$$.fragment, u), (d = !0));
      },
      o(u) {
        Ss(h.$$.fragment, u), (d = !1);
      },
      d(u) {
        to(h, u);
      },
    }
  );
}
function d1(x) {
  let h, d;
  return (
    (h = new Zg({})),
    {
      c() {
        Yl(h.$$.fragment);
      },
      l(u) {
        Zl(h.$$.fragment, u);
      },
      m(u, w) {
        eo(h, u, w), (d = !0);
      },
      i(u) {
        d || ($s(h.$$.fragment, u), (d = !0));
      },
      o(u) {
        Ss(h.$$.fragment, u), (d = !1);
      },
      d(u) {
        to(h, u);
      },
    }
  );
}
function c1(x) {
  let h, d;
  return (
    (h = new Jg({})),
    {
      c() {
        Yl(h.$$.fragment);
      },
      l(u) {
        Zl(h.$$.fragment, u);
      },
      m(u, w) {
        eo(h, u, w), (d = !0);
      },
      i(u) {
        d || ($s(h.$$.fragment, u), (d = !0));
      },
      o(u) {
        Ss(h.$$.fragment, u), (d = !1);
      },
      d(u) {
        to(h, u);
      },
    }
  );
}
function h1(x) {
  let h, d;
  return (
    (h = new n1({})),
    {
      c() {
        Yl(h.$$.fragment);
      },
      l(u) {
        Zl(h.$$.fragment, u);
      },
      m(u, w) {
        eo(h, u, w), (d = !0);
      },
      i(u) {
        d || ($s(h.$$.fragment, u), (d = !0));
      },
      o(u) {
        Ss(h.$$.fragment, u), (d = !1);
      },
      d(u) {
        to(h, u);
      },
    }
  );
}
function u1(x) {
  let h,
    d,
    u,
    w,
    he,
    T,
    $,
    le,
    P,
    Ie,
    Te,
    g,
    ue,
    fe,
    L,
    pe,
    xe,
    A,
    me,
    ve,
    F,
    oe,
    Ae,
    C,
    ie,
    Y,
    O,
    k,
    Z,
    U,
    Ce,
    de,
    y,
    ye,
    Pe,
    S,
    _e,
    Le,
    j,
    Ee,
    Ue,
    ee,
    K,
    ge,
    J,
    Re,
    ke,
    te,
    $e,
    p,
    D,
    we,
    Ne,
    ae,
    Q,
    N,
    R,
    M,
    z,
    ne;
  const Ge = [h1, c1, d1, i1, o1, l1, r1, s1],
    De = [];
  function se(E, H) {
    return E[0] === "vision"
      ? 0
      : E[0] === "gameplay"
      ? 1
      : E[0] === "roadmap"
      ? 2
      : E[0] === "marketing"
      ? 3
      : E[0] === "revenue"
      ? 4
      : E[0] === "dao"
      ? 5
      : E[0] === "tokenomics"
      ? 6
      : E[0] === "architecture"
      ? 7
      : -1;
  }
  return (
    ~(N = se(x)) && (R = De[N] = Ge[N](x)),
    {
      c() {
        (h = a("div")),
          (d = a("div")),
          (u = a("h1")),
          (w = r("OpenFPL Whitepaper")),
          (he = o()),
          (T = a("div")),
          ($ = a("ul")),
          (le = a("li")),
          (P = a("button")),
          (Ie = r("Vision")),
          (ue = o()),
          (fe = a("li")),
          (L = a("button")),
          (pe = r("Gameplay")),
          (me = o()),
          (ve = a("li")),
          (F = a("button")),
          (oe = r("Roadmap")),
          (ie = o()),
          (Y = a("li")),
          (O = a("button")),
          (k = r("Marketing")),
          (Ce = o()),
          (de = a("li")),
          (y = a("button")),
          (ye = r("Revenue")),
          (_e = o()),
          (Le = a("li")),
          (j = a("button")),
          (Ee = r("DAO")),
          (K = o()),
          (ge = a("li")),
          (J = a("button")),
          (Re = r("Tokenomics")),
          ($e = o()),
          (p = a("li")),
          (D = a("button")),
          (we = r("Architecture")),
          (Q = o()),
          R && R.c(),
          this.h();
      },
      l(E) {
        h = n(E, "DIV", { class: !0 });
        var H = s(h);
        d = n(H, "DIV", { class: !0 });
        var G = s(d);
        u = n(G, "H1", { class: !0 });
        var X = s(u);
        (w = l(X, "OpenFPL Whitepaper")),
          X.forEach(t),
          (he = i(G)),
          (T = n(G, "DIV", { class: !0 }));
        var Fe = s(T);
        $ = n(Fe, "UL", { class: !0 });
        var I = s($);
        le = n(I, "LI", { class: !0 });
        var Ke = s(le);
        P = n(Ke, "BUTTON", { class: !0 });
        var Me = s(P);
        (Ie = l(Me, "Vision")),
          Me.forEach(t),
          Ke.forEach(t),
          (ue = i(I)),
          (fe = n(I, "LI", { class: !0 }));
        var re = s(fe);
        L = n(re, "BUTTON", { class: !0 });
        var ze = s(L);
        (pe = l(ze, "Gameplay")),
          ze.forEach(t),
          re.forEach(t),
          (me = i(I)),
          (ve = n(I, "LI", { class: !0 }));
        var Oe = s(ve);
        F = n(Oe, "BUTTON", { class: !0 });
        var ce = s(F);
        (oe = l(ce, "Roadmap")),
          ce.forEach(t),
          Oe.forEach(t),
          (ie = i(I)),
          (Y = n(I, "LI", { class: !0 }));
        var f = s(Y);
        O = n(f, "BUTTON", { class: !0 });
        var Se = s(O);
        (k = l(Se, "Marketing")),
          Se.forEach(t),
          f.forEach(t),
          (Ce = i(I)),
          (de = n(I, "LI", { class: !0 }));
        var V = s(de);
        y = n(V, "BUTTON", { class: !0 });
        var Qe = s(y);
        (ye = l(Qe, "Revenue")),
          Qe.forEach(t),
          V.forEach(t),
          (_e = i(I)),
          (Le = n(I, "LI", { class: !0 }));
        var He = s(Le);
        j = n(He, "BUTTON", { class: !0 });
        var qe = s(j);
        (Ee = l(qe, "DAO")),
          qe.forEach(t),
          He.forEach(t),
          (K = i(I)),
          (ge = n(I, "LI", { class: !0 }));
        var je = s(ge);
        J = n(je, "BUTTON", { class: !0 });
        var Be = s(J);
        (Re = l(Be, "Tokenomics")),
          Be.forEach(t),
          je.forEach(t),
          ($e = i(I)),
          (p = n(I, "LI", { class: !0 }));
        var b = s(p);
        D = n(b, "BUTTON", { class: !0 });
        var at = s(D);
        (we = l(at, "Architecture")),
          at.forEach(t),
          b.forEach(t),
          I.forEach(t),
          (Q = i(Fe)),
          R && R.l(Fe),
          Fe.forEach(t),
          G.forEach(t),
          H.forEach(t),
          this.h();
      },
      h() {
        c(u, "class", "p-4 mx-1 text-2xl"),
          c(
            P,
            "class",
            (Te = `p-2 ${x[0] === "vision" ? "text-white" : "text-gray-400"}`)
          ),
          c(
            le,
            "class",
            (g = `mr-4 text-xs md:text-lg ${
              x[0] === "vision" ? "active-tab" : ""
            }`)
          ),
          c(
            L,
            "class",
            (xe = `p-2 ${x[0] === "gameplay" ? "text-white" : "text-gray-400"}`)
          ),
          c(
            fe,
            "class",
            (A = `mr-4 text-xs md:text-lg ${
              x[0] === "gameplay" ? "active-tab" : ""
            }`)
          ),
          c(
            F,
            "class",
            (Ae = `p-2 ${x[0] === "roadmap" ? "text-white" : "text-gray-400"}`)
          ),
          c(
            ve,
            "class",
            (C = `mr-4 text-xs md:text-lg ${
              x[0] === "roadmap" ? "active-tab" : ""
            }`)
          ),
          c(
            O,
            "class",
            (Z = `p-2 ${x[0] === "marketing" ? "text-white" : "text-gray-400"}`)
          ),
          c(
            Y,
            "class",
            (U = `mr-4 text-xs md:text-lg ${
              x[0] === "marketing" ? "active-tab" : ""
            }`)
          ),
          c(
            y,
            "class",
            (Pe = `p-2 ${x[0] === "revenue" ? "text-white" : "text-gray-400"}`)
          ),
          c(
            de,
            "class",
            (S = `mr-4 text-xs md:text-lg ${
              x[0] === "revenue" ? "active-tab" : ""
            }`)
          ),
          c(
            j,
            "class",
            (Ue = `p-2 ${x[0] === "dao" ? "text-white" : "text-gray-400"}`)
          ),
          c(
            Le,
            "class",
            (ee = `mr-4 text-xs md:text-lg ${
              x[0] === "dao" ? "active-tab" : ""
            }`)
          ),
          c(
            J,
            "class",
            (ke = `p-2 ${
              x[0] === "tokenomics" ? "text-white" : "text-gray-400"
            }`)
          ),
          c(
            ge,
            "class",
            (te = `mr-4 text-xs md:text-lg ${
              x[0] === "tokenomics" ? "active-tab" : ""
            }`)
          ),
          c(
            D,
            "class",
            (Ne = `p-2 ${
              x[0] === "architecture" ? "text-white" : "text-gray-400"
            }`)
          ),
          c(
            p,
            "class",
            (ae = `mr-4 text-xs md:text-lg ${
              x[0] === "architecture" ? "active-tab" : ""
            }`)
          ),
          c($, "class", "flex rounded-lg bg-light-gray px-4 pt-2"),
          c(T, "class", "bg-panel rounded-lg m-4"),
          c(d, "class", "bg-panel rounded-lg m-4 p-4"),
          c(h, "class", "m-4");
      },
      m(E, H) {
        Ql(E, h, H),
          e(h, d),
          e(d, u),
          e(u, w),
          e(d, he),
          e(d, T),
          e(T, $),
          e($, le),
          e(le, P),
          e(P, Ie),
          e($, ue),
          e($, fe),
          e(fe, L),
          e(L, pe),
          e($, me),
          e($, ve),
          e(ve, F),
          e(F, oe),
          e($, ie),
          e($, Y),
          e(Y, O),
          e(O, k),
          e($, Ce),
          e($, de),
          e(de, y),
          e(y, ye),
          e($, _e),
          e($, Le),
          e(Le, j),
          e(j, Ee),
          e($, K),
          e($, ge),
          e(ge, J),
          e(J, Re),
          e($, $e),
          e($, p),
          e(p, D),
          e(D, we),
          e(T, Q),
          ~N && De[N].m(T, null),
          (M = !0),
          z ||
            ((ne = [
              ei(P, "click", x[2]),
              ei(L, "click", x[3]),
              ei(F, "click", x[4]),
              ei(O, "click", x[5]),
              ei(y, "click", x[6]),
              ei(j, "click", x[7]),
              ei(J, "click", x[8]),
              ei(D, "click", x[9]),
            ]),
            (z = !0));
      },
      p(E, H) {
        (!M ||
          (H & 1 &&
            Te !==
              (Te = `p-2 ${
                E[0] === "vision" ? "text-white" : "text-gray-400"
              }`))) &&
          c(P, "class", Te),
          (!M ||
            (H & 1 &&
              g !==
                (g = `mr-4 text-xs md:text-lg ${
                  E[0] === "vision" ? "active-tab" : ""
                }`))) &&
            c(le, "class", g),
          (!M ||
            (H & 1 &&
              xe !==
                (xe = `p-2 ${
                  E[0] === "gameplay" ? "text-white" : "text-gray-400"
                }`))) &&
            c(L, "class", xe),
          (!M ||
            (H & 1 &&
              A !==
                (A = `mr-4 text-xs md:text-lg ${
                  E[0] === "gameplay" ? "active-tab" : ""
                }`))) &&
            c(fe, "class", A),
          (!M ||
            (H & 1 &&
              Ae !==
                (Ae = `p-2 ${
                  E[0] === "roadmap" ? "text-white" : "text-gray-400"
                }`))) &&
            c(F, "class", Ae),
          (!M ||
            (H & 1 &&
              C !==
                (C = `mr-4 text-xs md:text-lg ${
                  E[0] === "roadmap" ? "active-tab" : ""
                }`))) &&
            c(ve, "class", C),
          (!M ||
            (H & 1 &&
              Z !==
                (Z = `p-2 ${
                  E[0] === "marketing" ? "text-white" : "text-gray-400"
                }`))) &&
            c(O, "class", Z),
          (!M ||
            (H & 1 &&
              U !==
                (U = `mr-4 text-xs md:text-lg ${
                  E[0] === "marketing" ? "active-tab" : ""
                }`))) &&
            c(Y, "class", U),
          (!M ||
            (H & 1 &&
              Pe !==
                (Pe = `p-2 ${
                  E[0] === "revenue" ? "text-white" : "text-gray-400"
                }`))) &&
            c(y, "class", Pe),
          (!M ||
            (H & 1 &&
              S !==
                (S = `mr-4 text-xs md:text-lg ${
                  E[0] === "revenue" ? "active-tab" : ""
                }`))) &&
            c(de, "class", S),
          (!M ||
            (H & 1 &&
              Ue !==
                (Ue = `p-2 ${
                  E[0] === "dao" ? "text-white" : "text-gray-400"
                }`))) &&
            c(j, "class", Ue),
          (!M ||
            (H & 1 &&
              ee !==
                (ee = `mr-4 text-xs md:text-lg ${
                  E[0] === "dao" ? "active-tab" : ""
                }`))) &&
            c(Le, "class", ee),
          (!M ||
            (H & 1 &&
              ke !==
                (ke = `p-2 ${
                  E[0] === "tokenomics" ? "text-white" : "text-gray-400"
                }`))) &&
            c(J, "class", ke),
          (!M ||
            (H & 1 &&
              te !==
                (te = `mr-4 text-xs md:text-lg ${
                  E[0] === "tokenomics" ? "active-tab" : ""
                }`))) &&
            c(ge, "class", te),
          (!M ||
            (H & 1 &&
              Ne !==
                (Ne = `p-2 ${
                  E[0] === "architecture" ? "text-white" : "text-gray-400"
                }`))) &&
            c(D, "class", Ne),
          (!M ||
            (H & 1 &&
              ae !==
                (ae = `mr-4 text-xs md:text-lg ${
                  E[0] === "architecture" ? "active-tab" : ""
                }`))) &&
            c(p, "class", ae);
        let G = N;
        (N = se(E)),
          N !== G &&
            (R &&
              (Mg(),
              Ss(De[G], 1, 1, () => {
                De[G] = null;
              }),
              qg()),
            ~N
              ? ((R = De[N]),
                R || ((R = De[N] = Ge[N](E)), R.c()),
                $s(R, 1),
                R.m(T, null))
              : (R = null));
      },
      i(E) {
        M || ($s(R), (M = !0));
      },
      o(E) {
        Ss(R), (M = !1);
      },
      d(E) {
        E && t(h), ~N && De[N].d(), (z = !1), Bg(ne);
      },
    }
  );
}
function f1(x) {
  let h, d;
  return (
    (h = new Wg({
      props: { $$slots: { default: [u1] }, $$scope: { ctx: x } },
    })),
    {
      c() {
        Yl(h.$$.fragment);
      },
      l(u) {
        Zl(h.$$.fragment, u);
      },
      m(u, w) {
        eo(h, u, w), (d = !0);
      },
      p(u, [w]) {
        const he = {};
        w & 1025 && (he.$$scope = { dirty: w, ctx: u }), h.$set(he);
      },
      i(u) {
        d || ($s(h.$$.fragment, u), (d = !0));
      },
      o(u) {
        Ss(h.$$.fragment, u), (d = !1);
      },
      d(u) {
        to(h, u);
      },
    }
  );
}
function p1(x, h, d) {
  let u = "vision";
  function w(ue) {
    d(0, (u = ue));
  }
  return [
    u,
    w,
    () => w("vision"),
    () => w("gameplay"),
    () => w("roadmap"),
    () => w("marketing"),
    () => w("revenue"),
    () => w("dao"),
    () => w("tokenomics"),
    () => w("architecture"),
  ];
}
class g1 extends Kl {
  constructor(h) {
    super(), zl(this, h, p1, f1, Xl, {});
  }
}
export { g1 as component };
