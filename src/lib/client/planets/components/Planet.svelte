<script lang="ts">
  import type { Planet } from "$lib/types";
  import { T, useFrame } from "@threlte/core";
  import { materials } from "$planets/utils/materials";

  export let planet: Planet;

  export let orbitRadius = 16;
  let stopwatch = 1;
  let material = materials[planet.material];

  function updateNoiseLayer(key: string, value: unknown): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    material.layers.find((l) => l.name === "noise")[key] = value;
    material = material;
  }

  useFrame(() => {
    stopwatch += 0.001;
    updateNoiseLayer("offset", [stopwatch, stopwatch, stopwatch]);
  });
</script>

<T.Group rotation.y={stopwatch / 5}>
  <!-- Planet -->
  <T.Mesh castShadow {material} rotation.y={-stopwatch * 0.75}>
    <T.SphereGeometry args={[planet.radius, 50, 50]} />
  </T.Mesh>

  <!-- Orbits -->
  {#each planet.children as p}
    <T.Group position.x={orbitRadius} rotation.y={stopwatch}>
      <svelte:self planet={p} orbitRadius={4} />
    </T.Group>
  {/each}
</T.Group>
