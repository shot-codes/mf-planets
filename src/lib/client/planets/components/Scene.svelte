<script lang="ts">
  import type { Config } from "$lib/types";
  import {
    OrbitControls,
    T,
    TransformableObject,
    useFrame,
    useThrelte,
  } from "@threlte/core";
  import { degToRad } from "three/src/math/MathUtils";
  import { backgrounds } from "$planets/utils/materials";
  import Planet from "$planets/components/Planet.svelte";
  import { Vector3, Mesh } from "three";
  import { spring } from "svelte/motion";
  import { Fog } from "@threlte/core";
  import { get } from "svelte/store";

  export let system: Config;

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
  }
  // useFrame(({ camera }) => {
  //   get(camera).position.set(
  //     cameraPosition.x,
  //     cameraPosition.y,
  //     cameraPosition.z
  //   );
  // });

  // Pan the background back and forth. This keeps the grain texture live.
  let backgroundRotation = degToRad(130);
  const maxDegree = degToRad(150);
  const minDegree = degToRad(110);
  let reverseBackgroundRotation = false;
  useFrame(() => {
    if (!reverseBackgroundRotation && backgroundRotation <= maxDegree) {
      backgroundRotation += 0.002;
    } else {
      reverseBackgroundRotation = true;
    }
    if (reverseBackgroundRotation && backgroundRotation >= minDegree) {
      backgroundRotation -= 0.002;
    } else {
      reverseBackgroundRotation = false;
    }
  });
</script>

<Fog color={backgrounds[system.background].fogColor} near={50} far={120} />

<T.Group interactive rotation.y={backgroundRotation}>
  <T.Mesh material={backgrounds[system.background].material} scale={100}>
    <T.SphereGeometry />
  </T.Mesh>
  <T.DirectionalLight
    castShadow
    position={[-100, 10, 10]}
    color={backgrounds[system.background].lightColor}
  />
  <T.DirectionalLight position={[-100, 10, -10]} intensity={0.2} />
</T.Group>
<T.AmbientLight intensity={0.15} />

<T.Mesh bind:ref={mesh} scale={0.1} position={[0, 0, 0]}>
  <T.SphereGeometry />
</T.Mesh>

<T.PerspectiveCamera let:ref makeDefault fov={30}>
  <TransformableObject object={ref} lookAt={mesh} position={cameraPosition} />
  <OrbitControls enableDamping maxPolarAngle={degToRad(150)} />
</T.PerspectiveCamera>

<Planet planet={system.planets} orbitRadius={16} />
