<script lang="ts">
  import type { Planet } from "$lib/types";
  import { T, useFrame } from "@threlte/core";
  import { Text } from "@threlte/extras";
  import { materials, updateMaterialLayers } from "$planets/utils/materials";
  import { cloneDeep } from "lodash";

  export let planet: Planet;
  export let orbitRadius: number;
  let stopwatch = 1;
  let material = cloneDeep(materials[planet.material.key]);

  material.material = updateMaterialLayers(
    material.material,
    "scale",
    planet.material.scale
  );

  useFrame(() => {
    stopwatch += 0.001;
    let offsetRate = stopwatch * planet.material.offsetRate; // TODO: validate this is working
    material.material = updateMaterialLayers(material.material, "offset", [
      offsetRate,
      offsetRate,
      offsetRate,
    ]);
  });
</script>

<T.Group rotation.y={stopwatch / 5}>
  <!-- Planet -->
  <T.Mesh
    castShadow
    material={material.material}
    rotation.y={-stopwatch * 0.75}
  >
    <T.SphereGeometry args={[planet.radius, 200, 200]} />
  </T.Mesh>

  <!-- Orbits -->
  {#each planet.children as p, i}
    <T.Group
      position.x={orbitRadius *
        Math.cos((i * 2 * Math.PI) / planet.children.length)}
      position.z={orbitRadius *
        Math.sin((i * 2 * Math.PI) / planet.children.length)}
      rotation.y={stopwatch}
    >
      <Text text={p.text} scale={5} position={{ y: 2.5 }} />
      <svelte:self planet={p} orbitRadius={4} />
    </T.Group>
  {/each}
</T.Group>
