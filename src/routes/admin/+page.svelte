<script lang="ts">
  import type { PageData, ActionData } from "./$types";
  import PlanetViewer from "$lib/client/cms/components/PlanetViewer.svelte";
  import { someValue, someFunction } from "$cms/utils/someUtility";
  import { enhance } from "$app/forms";
  import { fade } from "svelte/transition";

  console.log(someValue, someFunction(42));

  export let form: ActionData;
  export let data: PageData;

  let recentlyUpdated = false;

  $: if (form?.success) {
    recentlyUpdated = true;
    setTimeout(() => {
      recentlyUpdated = false;
    }, 3000);
  }
</script>

<svelte:head>
  <title>Zibra - Admin</title>
</svelte:head>

<div class="container mx-auto flex h-[calc(100vh-66px)] p-4">
  <div class="flex-grow">Config</div>
  <div class="h-full w-[300px]">
    <PlanetViewer />
  </div>
</div>

<!-- 
<div class="grid h-full w-full place-content-center">
  <div
    class="relative grid w-[500px] space-y-4 rounded border border-base-300 bg-base-50 p-5 shadow dark:border-base-600 dark:bg-base-800"
  >
    <h1 class="text-lg">Configuration</h1>

    {#if recentlyUpdated}
      <div
        transition:fade={{ duration: 200 }}
        class="absolute right-0 top-0 mr-6 flex place-items-center space-x-1 text-green-600"
      >
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
        <p>config updated</p>
      </div>
    {/if}

    <textarea
      class="h-32 rounded border border-base-300 p-1 dark:border-base-600 dark:bg-base-900"
      value={JSON.stringify(data)}
    />

    <form use:enhance method="POST" action="?/update" class="flex space-x-2">
      <input
        name="config"
        type="text"
        class="flex-grow rounded rounded border border-base-300 p-1 dark:border-base-500 dark:bg-base-700"
      />
      <button
        class="rounded border border-base-300 bg-base-200 p-1 px-4 dark:border-base-600 dark:bg-base-800"
        >Update</button
      >
    </form>
  </div>
</div> -->
