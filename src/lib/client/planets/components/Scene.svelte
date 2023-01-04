<script lang="ts">
  import type { Config } from "$lib/types";
  import { backgrounds } from "$planets/utils/materials";
  import { Fog } from "@threlte/core";
  import Planet from "$planets/components/Planet.svelte";
  import Camera from "$planets/components/Camera.svelte";
  import Background from "./Background.svelte";

  export let systemConfig: Config;
</script>

<Fog
  color={backgrounds[systemConfig.background].fogColor}
  near={50}
  far={120}
/>

<Background background={systemConfig.background} />

<Camera />

<Planet planetSystem={systemConfig.system} orbitRadius={16} />
