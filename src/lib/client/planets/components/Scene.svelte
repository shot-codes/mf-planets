<script lang="ts">
  import type { Planet as PlanetType } from "$lib/types";
  import {
    OrbitControls,
    T,
    TransformableObject,
    useFrame,
    useThrelte,
  } from "@threlte/core";
  import { degToRad } from "three/src/math/MathUtils";
  import { backgroundMaterial } from "$planets/utils/materials";
  import Planet from "$planets/components/Planet.svelte";
  import { Vector3, Mesh } from "three";
  import { spring } from "svelte/motion";
  import { Fog } from "@threlte/core";
  import { get } from "svelte/store";

  export let system: PlanetType;

  const { pointer } = useThrelte();
  let cameraOrigin = new Vector3(60, 15, 0);
  let cameraPosition = new Vector3(60, 15, 0);
  let mesh: Mesh;

  const cameraPositionSpring = spring([60, 15, 0]);
  $: {
    cameraPositionSpring.set([
      cameraOrigin.x,
      cameraOrigin.y + 8 * $pointer.y,
      cameraOrigin.z - 8 * $pointer.x,
    ]);
  }
  $: {
    cameraPosition.set(
      $cameraPositionSpring[0],
      $cameraPositionSpring[1],
      $cameraPositionSpring[2]
    );
    console.log(cameraPosition);
  }
  useFrame(({ camera }) => {
    get(camera).position.set(
      cameraPosition.x,
      cameraPosition.y,
      cameraPosition.z
    );
  });

  // Oscillate background back and forth. This keeps the grain texture live.
  let backgroundRotation = degToRad(130);
  let reverseBackgroundRotation = false;
  useFrame(() => {
    if (!reverseBackgroundRotation && backgroundRotation <= degToRad(150)) {
      backgroundRotation += 0.002;
    } else {
      reverseBackgroundRotation = true;
    }
    if (reverseBackgroundRotation && backgroundRotation >= degToRad(110)) {
      backgroundRotation -= 0.002;
    } else {
      reverseBackgroundRotation = false;
    }
  });
</script>

<Fog color={"#ff0000"} near={50} far={120} />

<T.Group interactive rotation.y={backgroundRotation}>
  <T.Mesh material={backgroundMaterial} scale={100}>
    <T.SphereGeometry />
  </T.Mesh>
  <T.DirectionalLight castShadow position={[-100, 10, 10]} color={"#ff7070"} />
  <T.DirectionalLight position={[-100, 10, -10]} intensity={0.2} />
</T.Group>
<T.AmbientLight intensity={0.15} />

<T.Mesh bind:ref={mesh} scale={0.1} position={[0, 0, 0]}>
  <T.SphereGeometry />
</T.Mesh>

<T.PerspectiveCamera let:ref makeDefault fov={30}>
  <TransformableObject object={ref} lookAt={mesh} />
  <!-- <OrbitControls
    enableDamping
    maxPolarAngle={degToRad(150)}
    enablePan={false}
  /> -->
</T.PerspectiveCamera>

<Planet planet={system} />
