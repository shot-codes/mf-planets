<script lang="ts">
  import Navbar from "$cms/components/Navbar.svelte";
</script>

<Navbar />

<!-- This element fills the space of the fixed navbar -->
<div class="h-[66px]" />

<slot />
