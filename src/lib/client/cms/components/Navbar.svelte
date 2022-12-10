<script lang="ts">
  import { page } from "$app/stores";
</script>

<nav
  class="absolute z-10 flex h-[66px] w-full items-center justify-between border-b bg-base-200 p-3 px-6 shadow dark:border-base-700 dark:bg-base-800 dark:shadow-lg"
>
  <ul class="m-2 flex space-x-4">
    <li>
      <a href="/" class:font-bold={$page.url.pathname === "/"}> Planets </a>
    </li>
    <li>
      <a
        href="/admin"
        class:font-bold={$page.url.pathname.startsWith("/admin")}
      >
        Admin
      </a>
    </li>
  </ul>
  {#if $page.url.pathname === "/admin"}
    <form method="POST" action="/admin?/logout" class="m-0">
      <button
        class="rounded border border-base-300 bg-base-100 p-1 px-3 dark:border-base-600 dark:bg-base-800"
        >Log out</button
      >
    </form>
  {/if}
</nav>
