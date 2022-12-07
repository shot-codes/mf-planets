<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<h1>Login</h1>

<form use:enhance method="POST">
  <input name="email" type="email" />
  <input name="password" type="password" />
  <button>Log in</button>
</form>
