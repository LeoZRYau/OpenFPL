import { authStore } from "$lib/stores/auth.store";
import { writable } from "svelte/store";
import { idlFactory } from "../../../../declarations/OpenFPL_backend";
import type {
  DataCacheDTO,
  FixtureDTO,
  SystemStateDTO,
  UpdateFixtureDTO,
} from "../../../../declarations/OpenFPL_backend/OpenFPL_backend.did";
import { ActorFactory } from "../../utils/ActorFactory";
import { isError, replacer } from "../utils/Helpers";
import { systemStore } from "./system-store";

function createFixtureStore() {
  const { subscribe, set } = writable<FixtureDTO[]>([]);

  let systemState: SystemStateDTO;
  systemStore.subscribe((value) => {
    systemState = value as SystemStateDTO;
  });

  let actor: any = ActorFactory.createActor(
    idlFactory,
    process.env.OPENFPL_BACKEND_CANISTER_ID
  );

  async function sync() {
    const category = "fixtures";
    const newHashValues = await actor.getDataHashes();

    let error = isError(newHashValues);
    if (error) {
      console.error("Error syncing fixture store");
      return;
    }

    let dataCacheValues: DataCacheDTO[] = newHashValues.ok;

    let categoryHash =
      dataCacheValues.find((x: DataCacheDTO) => x.category === category) ??
      null;
    
    const localHash = localStorage.getItem(`${category}_hash`);

    if (categoryHash?.hash != localHash) {
      const updatedFixturesData = await actor.getFixtures(
        systemState.calculationSeasonId
      );

      if (isError(updatedFixturesData)) {
        console.error("error syncing fixture store");
        return;
      }

      localStorage.setItem(
        category,
        JSON.stringify(updatedFixturesData.ok, replacer)
      );
      localStorage.setItem(`${category}_hash`, categoryHash?.hash ?? "");
      set(updatedFixturesData.ok);
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

    if (fixtures.length == 0) {
      return;
    }
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
