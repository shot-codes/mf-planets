<script lang="ts">
  import { Canvas } from "@threlte/core";
  import type { PageData } from "./$types";
  import Scene from "$lib/client/three/components/Scene.svelte";

  export let data: PageData;
</script>

<div id="overlay">
  <p>{JSON.stringify(data)}</p>
</div>

<div id="threlte_wrapper">
  <Canvas>
    <Scene />
  </Canvas>
</div>

<style>
  #overlay {
    position: absolute;
  }
  #threlte_wrapper {
    width: 100vw;
    height: 100vh;
  }
</style>
