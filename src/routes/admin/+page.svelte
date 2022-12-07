<script lang="ts">
  import type { PageData, ActionData } from "./$types";
  import { enhance } from "$app/forms";

  export let form: ActionData;
  export let data: PageData;
</script>

<h1>Admin</h1>

<p>current config:</p>
{JSON.stringify(data)}

{#if form?.success}
  <p>Successfully Updated!</p>
{/if}

<form use:enhance method="POST" action="?/update">
  <input name="config" type="text" />
  <button>Update</button>
</form>

<form use:enhance method="POST" action="?/logout">
  <button>Log out</button>
</form>
