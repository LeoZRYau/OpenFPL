import { w as S } from "./index.8caf67b2.js";
import { A as l, i as I, r as N } from "./team-store.90511bc6.js";
import "./toast-store.58fa49f6.js";
function p() {
  const { subscribe: s, set: o } = S(null);
  let m = l.createActor(I, "bboqb-jiaaa-aaaal-qb6ea-cai");
  async function r() {
    let a = "system_state",
      t = (await m.getDataHashes()).find((e) => e.category === a) ?? null;
    const c = localStorage.getItem(a);
    if (t?.hash != c) {
      let e = await m.getSystemState();
      localStorage.setItem("system_state_data", JSON.stringify(e, N)),
        localStorage.setItem(a, t?.hash ?? ""),
        o(e);
    } else {
      const e = localStorage.getItem("system_state_data");
      let n = null;
      try {
        n = JSON.parse(e || "{}");
      } catch {
        n = null;
      }
      o(n);
    }
  }
  async function _() {
    let a;
    return (
      s((i) => {
        a = i;
      })(),
      a
    );
  }
  return { subscribe: s, sync: r, getSystemState: _ };
}
const T = p();
export { T as s };
