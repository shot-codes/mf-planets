<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<div class="grid h-full w-full place-content-center">
  <div
    class="grid space-y-4 rounded border border-neutral-300 bg-neutral-50 p-5 shadow dark:border-neutral-600 dark:bg-neutral-800"
  >
    <h1 class="text-lg">Login</h1>

    <form use:enhance method="POST" class="grid">
      <input
        name="email"
        type="email"
        class="mb-2 rounded rounded border border-neutral-300 p-1 dark:border-neutral-500 dark:bg-neutral-700"
      />
      <input
        name="password"
        type="password"
        class="mb-3 rounded border border-neutral-300 p-1 dark:border-neutral-500 dark:bg-neutral-700"
      />
      <button
        class="rounded border border-neutral-400 bg-neutral-200 p-1 dark:border-neutral-600 dark:bg-neutral-800"
        >Log in</button
      >
    </form>
  </div>
</div>
