import { w as c } from "./index.8caf67b2.js";
import { A as o } from "./team-store.a9afdac8.js";
import { a as s } from "./toast-store.64ad2768.js";
function t() {
  const { subscribe: i, set: m } = c([]);
  async function _() {
    const a = await (
      await o.createIdentityActor(s, "bkyz2-fmaaa-aaaaa-qaaaq-cai")
    ).getValidatableFixtures();
    return m(a), a;
  }
  async function r(n, a) {
    try {
      await (
        await o.createIdentityActor(s, "bkyz2-fmaaa-aaaaa-qaaaq-cai")
      ).submitFixtureData(n, a);
    } catch (e) {
      throw (console.error("Error submitting fixture data:", e), e);
    }
  }
  return { subscribe: i, getValidatableFixtures: _, submitFixtureData: r };
}
const p = t();
export { p as g };
