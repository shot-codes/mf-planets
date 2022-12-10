<script lang="ts">
  import { Canvas } from "@threlte/core";
  import type { PageData } from "./$types";
  import Scene from "$planets/components/Scene.svelte";
  import Navbar from "$planets/components/Navbar.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>Zibra</title>
</svelte:head>

<Navbar />

<div class="absolute top-0 left-0 h-full w-full">
  <Canvas>
    <Scene system={data.config} />
  </Canvas>
</div>
