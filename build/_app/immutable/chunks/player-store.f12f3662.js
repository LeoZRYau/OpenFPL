import { f as y } from "./fixture-store.880a736f.js";
import { A as _, n as I, r as N } from "./Layout.3f9368f3.js";
import { w as S } from "./singletons.e655d5e5.js";
import { s as n } from "./team-store.583260fe.js";
function E() {
  const { subscribe: c, set: r } = S([]);
  n.subscribe((a) => {}), y.subscribe((a) => a);
  let s = _.createActor(I, "pec6o-uqaaa-aaaal-qb7eq-cai");
  async function o() {
    let a = "players",
      l = (await s.getDataHashes()).find((e) => e.category === a) ?? null;
    const i = localStorage.getItem(a);
    if (l?.hash != i) {
      let e = await s.getAllPlayers();
      localStorage.setItem("players_data", JSON.stringify(e, N)),
        localStorage.setItem(a, l?.hash ?? ""),
        r(e);
    } else {
      const e = localStorage.getItem("players_data");
      let t = [];
      try {
        t = JSON.parse(e || "[]");
      } catch {
        t = [];
      }
      r(t);
    }
  }
  return { subscribe: c, sync: o };
}
const g = E();
export { g as p };
