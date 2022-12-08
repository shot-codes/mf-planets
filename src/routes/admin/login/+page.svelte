<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<svelte:head>
  <title>Zibra - Login</title>
</svelte:head>

<div class="grid h-full w-full place-content-center">
  <div
    class="grid space-y-4 rounded border border-base-300 bg-base-50 p-5 shadow dark:border-base-600 dark:bg-base-800"
  >
    <h1 class="text-lg">Login</h1>

    <form use:enhance method="POST" class="grid">
      <input
        name="email"
        type="email"
        placeholder="email"
        class="mb-2 rounded rounded border border-base-300 p-1 dark:border-base-500 dark:bg-base-700"
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        class="mb-3 rounded border border-base-300 p-1 dark:border-base-500 dark:bg-base-700"
      />
      <button
        class="rounded border border-base-300 bg-base-200 p-1 dark:border-base-600 dark:bg-base-800"
        >Log in</button
      >
    </form>
  </div>
</div>
