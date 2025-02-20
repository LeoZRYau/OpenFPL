<script lang="ts">
  import { onMount } from "svelte";
  import { teamStore } from "$lib/stores/team-store";
  import { playerStore } from "$lib/stores/player-store";
  import { governanceStore } from "$lib/stores/governance-store";
  import { Modal } from "@dfinity/gix-components";
  import LocalSpinner from "$lib/components/local-spinner.svelte";
  import type { PlayerDTO } from "../../../../../../declarations/OpenFPL_backend/OpenFPL_backend.did";
  import { isError } from "$lib/utils/Helpers";
  import { toastsError } from "$lib/stores/toasts-store";

  export let visible: boolean;
  export let closeModal: () => void;

  let selectedClubId: number = 0;
  let selectedPlayerId: number = 0;
  let description = "";
  let injuryEndDate = "";
  let clubPlayers: PlayerDTO[] = [];

  let isLoading = true;
  let showConfirm = false;

  $: isSubmitDisabled =
    selectedPlayerId <= 0 || injuryEndDate == "" || description.length == 0;

  $: if (selectedClubId) {
    getClubPlayers();
  }

  $: if (isSubmitDisabled && showConfirm) {
    showConfirm = false;
  }

  onMount(async () => {
    try {
      await teamStore.sync();
      await playerStore.sync();
      isLoading = false;
    } catch (error) {
      toastsError({
        msg: { text: "Error syncing proposal data." },
        err: error,
      });
      console.error("Error syncing proposal data.", error);
    } finally {
      isLoading = false;
    }
  });

  async function getClubPlayers() {
    clubPlayers = $playerStore.filter((x) => x.clubId == selectedClubId);
  }

  function raiseProposal() {
    showConfirm = true;
  }

  async function confirmProposal() {
    isLoading = true;
    let result = await governanceStore.setPlayerInjury(
      selectedPlayerId,
      description,
      injuryEndDate
    );
    if (isError(result)) {
      isLoading = false;
      toastsError({
        msg: { text: "Error submitting proposal." },
      });
      console.error("Error submitting proposal");
      return;
    }
    isLoading = false;
    resetForm();
    closeModal();
  }

  function resetForm() {
    selectedClubId = 0;
    selectedPlayerId = 0;
    description = "";
    injuryEndDate = "";
    showConfirm = false;
    clubPlayers = [];
  }

  function cancelModal() {
    resetForm();
    closeModal();
  }
</script>

<Modal {visible} on:nnsClose={cancelModal}>
  <div class="mx-4 p-4">
    <div class="flex justify-between items-center my-2">
      <h3 class="default-header">Set Player Injury</h3>
      <button class="times-button" on:click={cancelModal}>&times;</button>
    </div>

    <div class="flex justify-start items-center w-full">
      <div class="w-full flex-col space-y-4 mb-2">
        <p>Select the player's club:</p>

        <select
          class="p-2 fpl-dropdown min-w-[100px]"
          bind:value={selectedClubId}
        >
          <option value={0}>Select Club</option>
          {#each $teamStore as club}
            <option value={club.id}>{club.friendlyName}</option>
          {/each}
        </select>

        {#if selectedClubId > 0}
          <p>Select a player to set as injured:</p>

          <select
            class="p-2 fpl-dropdown my-4 min-w-[100px]"
            bind:value={selectedPlayerId}
          >
            <option value={0}>Select Player</option>
            {#each clubPlayers as player}
              <option value={player.id}
                >{player.firstName} {player.lastName}</option
              >
            {/each}
          </select>

          <p>Enter the injury description:</p>

          <input
            type="text"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Injury Description"
            bind:value={description}
          />

          <p>Enter the expected return date of the player:</p>

          <input
            type="date"
            bind:value={injuryEndDate}
            class="input input-bordered"
          />
        {/if}

        <div class="border-b border-gray-200" />

        <div class="items-center flex space-x-4">
          <button
            class="px-4 py-2 default-button fpl-cancel-btn min-w-[150px]"
            type="button"
            on:click={cancelModal}
          >
            Cancel
          </button>
          <button
            class={`${isSubmitDisabled ? "bg-gray-500" : "fpl-purple-btn"} 
                        px-4 py-2 default-button min-w-[150px]`}
            on:click={raiseProposal}
            disabled={isSubmitDisabled}
          >
            Raise Proposal
          </button>
        </div>

        {#if showConfirm}
          <div class="items-center flex">
            <p class="text-orange-400">
              Failed proposals will cost the proposer 10 $FPL tokens.
            </p>
          </div>
          <div class="items-center flex">
            <button
              class={`${isSubmitDisabled ? "bg-gray-500" : "fpl-purple-btn"} 
                            px-4 py-2 default-button w-full`}
              on:click={confirmProposal}
              disabled={isSubmitDisabled}
            >
              Confirm Submit Proposal
            </button>
          </div>
        {/if}
      </div>
    </div>

    {#if isLoading}
      <LocalSpinner />
    {/if}
  </div>
</Modal>
