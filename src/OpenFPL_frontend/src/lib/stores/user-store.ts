import { authStore } from "$lib/stores/auth.store";
import { isError, replacer } from "$lib/utils/Helpers";
import { writable } from "svelte/store";
import { ActorFactory } from "../../utils/ActorFactory";

function createUserStore() {
  const { subscribe, set } = writable<any>(null);

  function uint8ArrayToBase64(bytes: Uint8Array): string {
    const binary = Array.from(bytes)
      .map((byte) => String.fromCharCode(byte))
      .join("");
    return btoa(binary);
  }

  async function sync() {
    let localStorageString = localStorage.getItem("user_profile_data");
    if (localStorageString) {
      const localProfile = JSON.parse(localStorageString);
      set(localProfile);
      return;
    }

    try {
      const identityActor: any = await ActorFactory.createIdentityActor(
        authStore,
        process.env.OPENFPL_BACKEND_CANISTER_ID ?? ""
      );

      let getProfileResponse = await identityActor.getProfile();
      let error = isError(getProfileResponse);
      if (error) {
        if (getProfileResponse.err.NotFound !== undefined) {
          return;
        } else {
          console.error("Error syncing user store");
        }
        return;
      }

      let profileData = getProfileResponse.ok;
      let byteArray;
      if (profileData && profileData.profilePicture) {
        let base64Picture;
        if (
          Array.isArray(profileData.profilePicture) &&
          profileData.profilePicture[0] instanceof Uint8Array
        ) {
          byteArray = profileData.profilePicture[0];
          base64Picture = uint8ArrayToBase64(byteArray);
        } else if (profileData.profilePicture instanceof Uint8Array) {
          base64Picture = uint8ArrayToBase64(profileData.profilePicture);
        } else {
          base64Picture = "/profile_placeholder.png";
        }

        localStorage.setItem(
          "user_profile_data",
          JSON.stringify(
            {
              ...profileData,
              profilePicture: base64Picture,
            },
            replacer
          )
        );
      } else {
        localStorage.setItem(
          "user_profile_data",
          JSON.stringify(profileData, replacer)
        );
      }

      set(profileData);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
    }
  }

  async function createProfile(): Promise<any> {
    try {
      const identityActor = await ActorFactory.createIdentityActor(
        authStore,
        process.env.OPENFPL_BACKEND_CANISTER_ID ?? ""
      );
      const result = await identityActor.createProfile();
      if (isError(result)) {
        console.error("Error creating profile");
        return;
      }
      return result;
    } catch (error) {
      console.error("Error updating username:", error);
      throw error;
    }
  }

  async function updateUsername(username: string): Promise<any> {
    try {
      const identityActor = await ActorFactory.createIdentityActor(
        authStore,
        process.env.OPENFPL_BACKEND_CANISTER_ID ?? ""
      );
      const result = await identityActor.updateUsername(username);
      if (isError(result)) {
        console.error("Error updating username");
        return;
      }
      await cacheProfile();
      return result;
    } catch (error) {
      console.error("Error updating username:", error);
      throw error;
    }
  }

  async function updateFavouriteTeam(favouriteTeamId: number): Promise<any> {
    try {
      const identityActor = await ActorFactory.createIdentityActor(
        authStore,
        process.env.OPENFPL_BACKEND_CANISTER_ID ?? ""
      );
      const result = await identityActor.updateFavouriteClub(favouriteTeamId);
      if (isError(result)) {
        console.error("Error updating favourite team");
        return;
      }
      await cacheProfile();
      return result;
    } catch (error) {
      console.error("Error updating favourite team:", error);
      throw error;
    }
  }

  async function getProfile(): Promise<any> {
    try {
      console.log("getting proile")
      const identityActor: any = await ActorFactory.createIdentityActor(
        authStore,
        process.env.OPENFPL_BACKEND_CANISTER_ID ?? ""
      );
      const result = await identityActor.getProfile();
      if (isError(result)) {
        console.error("Error fetching profile");
        return;
      }
      let profile = result.ok;
      set(profile);
      return profile;
    } catch (error) {
      console.error("Error getting profile:", error);
      throw error;
    }
  }

  async function updateProfilePicture(picture: File): Promise<any> {
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
          const identityActor = await ActorFactory.createIdentityActor(
            authStore,
            process.env.OPENFPL_BACKEND_CANISTER_ID ?? ""
          );
          const result = await identityActor.updateProfilePicture(uint8Array);
          console.log(result);
          if (isError(result)) {
            console.error("Error updating profile picture");
            return;
          }

          await cacheProfile();
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

  async function isUsernameAvailable(username: string): Promise<boolean> {
    const identityActor: any = await ActorFactory.createIdentityActor(
      authStore,
      process.env.OPENFPL_BACKEND_CANISTER_ID ?? ""
    );
    return await identityActor.isUsernameValid(username);
  }

  async function cacheProfile() {
    const identityActor: any = await ActorFactory.createIdentityActor(
      authStore,
      process.env.OPENFPL_BACKEND_CANISTER_ID ?? ""
    );

    let getProfileResponse = await identityActor.getProfile();
    let error = isError(getProfileResponse);
    if (error) {
      console.error("Error fetching user profile");
      return;
    }

    let profileData = getProfileResponse.ok;
    let byteArray;
    console.log(profileData);
    if (profileData && profileData.profilePicture) {
      let base64Picture;
      if (
        Array.isArray(profileData.profilePicture) &&
        profileData.profilePicture[0] instanceof Uint8Array
      ) {
        byteArray = profileData.profilePicture[0];
        base64Picture = uint8ArrayToBase64(byteArray);
      } else if (profileData.profilePicture instanceof Uint8Array) {
        base64Picture = uint8ArrayToBase64(profileData.profilePicture);
      } else {
        base64Picture = "/profile_placeholder.png";
      }
      profileData = 
      {
        ...profileData,
        profilePicture: base64Picture,
      };
      localStorage.setItem(
        "user_profile_data",
        JSON.stringify(profileData,
          replacer
        )
      );
    } else {
      localStorage.setItem(
        "user_profile_data",
        JSON.stringify(profileData, replacer)
      );
    }

    set(profileData);
  }

  return {
    subscribe,
    sync,
    updateUsername,
    updateFavouriteTeam,
    getProfile,
    updateProfilePicture,
    createProfile,
    isUsernameAvailable,
  };
}

export const userStore = createUserStore();
