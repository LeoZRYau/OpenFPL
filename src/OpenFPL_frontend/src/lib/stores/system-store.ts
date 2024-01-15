import { authStore } from "$lib/stores/auth.store";
import { writable } from "svelte/store";
import { idlFactory } from "../../../../declarations/OpenFPL_backend";
import type {
  DataCacheDTO,
  SystemStateDTO,
  UpdateSystemStateDTO,
} from "../../../../declarations/OpenFPL_backend/OpenFPL_backend.did";
import { ActorFactory } from "../../utils/ActorFactory";
import { isError, replacer } from "../utils/Helpers";

function createSystemStore() {
  const { subscribe, set } = writable<SystemStateDTO | null>(null);

  let actor: any = ActorFactory.createActor(
    idlFactory,
    process.env.OPENFPL_BACKEND_CANISTER_ID
  );

  async function sync() {
    let category = "system_state";
    const newHashValues = await actor.getDataHashes();

    let error = isError(newHashValues);
    if (error) {
      console.error("Error syncing system store");
      return;
    }

    let dataCacheValues: DataCacheDTO[] = newHashValues.ok;

    let categoryHash =
      dataCacheValues.find((x: DataCacheDTO) => x.category === category) ??
      null;

    const localHash = localStorage.getItem(`${category}_hash`);

    console.log(categoryHash?.hash != localHash);
    if (categoryHash?.hash != localHash) {
      let result = await actor.getSystemState();
      console.log("result");
      console.log(result);
      if (isError(result)) {
        console.error("Error syncing system store");
        return;
      }

      let updatedSystemStateData = result.ok;

      localStorage.setItem(
        category,
        JSON.stringify(updatedSystemStateData, replacer)
      );
      localStorage.setItem(`${category}_hash`, categoryHash?.hash ?? "");
      set(updatedSystemStateData);
    } else {
      const cachedSystemStateData = localStorage.getItem(category);
      let cachedSystemState: SystemStateDTO | null = null;
      try {
        cachedSystemState = JSON.parse(cachedSystemStateData || "{}");
      } catch (e) {
        cachedSystemState = null;
      }
      set(cachedSystemState);
    }
  }

  async function getSystemState(): Promise<SystemStateDTO | undefined> {
    let systemState;
    subscribe((value) => {
      systemState = value!;
    })();
    return systemState;
  }

  async function updateSystemState(
    systemState: UpdateSystemStateDTO
  ): Promise<any> {
    try {
      const identityActor = await ActorFactory.createIdentityActor(
        authStore,
        process.env.OPENFPL_BACKEND_CANISTER_ID ?? ""
      );
      const result = await identityActor.updateSystemState(systemState);

      if (isError(result)) {
        console.error("Error fetching system state.");
      }

      sync();
      return result;
    } catch (error) {
      console.error("Error updating system state:", error);
      throw error;
    }
  }

  return {
    subscribe,
    sync,
    getSystemState,
    updateSystemState,
  };
}

export const systemStore = createSystemStore();
