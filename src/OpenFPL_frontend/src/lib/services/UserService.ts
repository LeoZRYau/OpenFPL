import { authStore } from "$lib/stores/auth";
import type { OptionIdentity } from "$lib/types/Identity";
import type { Unsubscriber } from "svelte/store";
import { idlFactory } from "../../../../declarations/OpenFPL_backend";
import { ActorFactory } from "../../utils/ActorFactory";

export class UserService {
  private actor: any;

  constructor() {
    this.actor = ActorFactory.createActor(
      idlFactory,
      process.env.OPENFPL_BACKEND_CANISTER_ID
    );
  }

  async actorFromIdentity() {
    let unsubscribe: Unsubscriber;
    return new Promise<OptionIdentity>((resolve, reject) => {
      unsubscribe = authStore.subscribe((store) => {
        if (store.identity) {
          resolve(store.identity);
        }
      });
    }).then((identity) => {
      unsubscribe();
      return ActorFactory.createActor(
        idlFactory,
        process.env.OPENFPL_BACKEND_CANISTER_ID,
        identity
      );
    });
  }

  async updateUsername(username: string): Promise<any> {
    try {
      const identityActor = await this.actorFromIdentity();
      const result = await identityActor.updateDisplayName(username);
      return result;
    } catch (error) {
      console.error("Error updating username:", error);
      throw error;
    }
  }

  async updateFavouriteTeam(favouriteTeamId: number): Promise<any> {
    try {
      const identityActor = await this.actorFromIdentity();
      const result = await identityActor.updateFavouriteTeam(favouriteTeamId);
      return result;
    } catch (error) {
      console.error("Error updating favourite team:", error);
      throw error;
    }
  }

  async getProfile(): Promise<any> {
    try {
      const identityActor = await this.actorFromIdentity();
      const result = await identityActor.getProfileDTO();
      return result;
    } catch (error) {
      console.error("Error updating username:", error);
      throw error;
    }
  }

  async updateProfilePicture(picture: File): Promise<any> {
    try {
      const maxPictureSize = 1000; 

      if (picture.size > maxPictureSize * 1024) {
        return null;
      }
      const reader = new FileReader();
      reader.readAsArrayBuffer(picture);
      reader.onloadend = async () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const uint8Array = new Uint8Array(arrayBuffer);
        try {
          const identityActor = await this.actorFromIdentity();
          const result = await identityActor.updateProfilePicture(uint8Array);
          return result;
        } catch (error) {
          console.error(error);
        }
      };
    } catch (error) {
      console.error("Error updating username:", error);
      throw error;
    }
  }
}
