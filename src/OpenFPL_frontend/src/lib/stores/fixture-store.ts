import { authStore } from "$lib/stores/auth.store";
import { writable } from "svelte/store";
import { idlFactory } from "../../../../declarations/OpenFPL_backend";
import type {
  DataCacheDTO,
  FixtureDTO,
  UpdateFixtureDTO,
} from "../../../../declarations/OpenFPL_backend/OpenFPL_backend.did";
import { ActorFactory } from "../../utils/ActorFactory";
import { isSuccess, replacer } from "../utils/Helpers";

function createFixtureStore() {
  const { subscribe, set } = writable<FixtureDTO[]>([]);

  let actor: any = ActorFactory.createActor(
    idlFactory,
    process.env.OPENFPL_BACKEND_CANISTER_ID
  );

  async function sync() {
    let category = "fixtures";
    const newHashValues = await actor.getDataHashes();

    let error = isSuccess(newHashValues);
    if (error) {
      console.error("Error syncing fixture store");
      return;
    }

    let dataCacheValues: DataCacheDTO[] = newHashValues.ok;

    let categoryHash =
      dataCacheValues.find((x: DataCacheDTO) => x.category === category) ??
      null;
    const localHash = localStorage.getItem(category);

    if (categoryHash?.hash != localHash) {
      let updatedFixturesData = (await actor.getFixtures()) as FixtureDTO[];
      localStorage.setItem(
        category,
        JSON.stringify(updatedFixturesData, replacer)
      );
      localStorage.setItem(category, categoryHash?.hash ?? "");
      set(updatedFixturesData);
    } else {
      const cachedFixturesData = localStorage.getItem(category);
      let cachedFixtures: FixtureDTO[] = [];
      try {
        cachedFixtures = JSON.parse(cachedFixturesData || "[]");
      } catch (e) {
        cachedFixtures = [];
      }
      set(cachedFixtures);
    }
  }

  async function getNextFixture(): Promise<FixtureDTO | undefined> {
    let fixtures: FixtureDTO[] = [];
    await sync();
    await subscribe((value) => {
      fixtures = value;
    })();
    const now = new Date();
    return fixtures.find(
      (fixture) => new Date(Number(fixture.kickOff) / 1000000) > now
    );
  }

  async function updateFixture(
    updatedFixture: UpdateFixtureDTO
  ): Promise<void> {
    try {
      const identityActor = await ActorFactory.createIdentityActor(
        authStore,
        process.env.OPENFPL_BACKEND_CANISTER_ID ?? ""
      );
      await identityActor.updateFixture(updatedFixture);
    } catch (error) {
      console.error("Error updating fixtures:", error);
      throw error;
    }
  }

  return {
    subscribe,
    sync,
    getNextFixture,
    updateFixture,
  };
}

export const fixtureStore = createFixtureStore();
