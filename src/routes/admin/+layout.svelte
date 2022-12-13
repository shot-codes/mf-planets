<script lang="ts">
  import Navbar from "$cms/components/Navbar.svelte";
</script>

<Navbar />

<!-- This element fills the space of the fixed navbar -->
<div class="h-[66px]" />
<div class="h-[calc(100vh-66px)]">
  <slot />
</div>
