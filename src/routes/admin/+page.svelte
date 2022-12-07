<script lang="ts">
  import type { PageData, ActionData } from "./$types";
  import { someValue, someFunction } from "$cms/utils/someUtility";
  import { enhance } from "$app/forms";

  console.log(someValue, someFunction(42));

  export let form: ActionData;
  export let data: PageData;
</script>

<div class="grid h-full w-full place-content-center">
  <div
    class="relative grid w-[500px] space-y-4 rounded border border-neutral-300 bg-neutral-50 p-5 shadow dark:border-neutral-600 dark:bg-neutral-800"
  >
    <h1 class="text-lg">Admin</h1>

    {#if form?.success}
      <div
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
      class="h-32 rounded border border-neutral-300 p-1 dark:border-neutral-600 dark:bg-neutral-900"
      value={JSON.stringify(data)}
    />

    <form use:enhance method="POST" action="?/update" class="flex space-x-2">
      <input
        name="config"
        type="text"
        class="flex-grow rounded rounded border border-neutral-300 p-1 dark:border-neutral-500 dark:bg-neutral-700"
      />
      <button
        class="rounded border border-neutral-400 bg-neutral-200 p-1 px-4 dark:border-neutral-600 dark:bg-neutral-800"
        >Update</button
      >
    </form>

    <form use:enhance method="POST" action="?/logout" class="grid">
      <button
        class="rounded border border-neutral-400 bg-neutral-200 p-1 dark:border-neutral-600 dark:bg-neutral-800"
        >Log out</button
      >
    </form>
  </div>
</div>
