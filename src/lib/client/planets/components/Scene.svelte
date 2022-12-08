<script lang="ts">
  import type { System } from "$lib/types";
  import {
    OrbitControls,
    type PerspectiveCamera,
    type ThreltePointerEvent,
    T,
    TransformableObject,
    useFrame,
    useThrelte,
  } from "@threlte/core";
  import { degToRad } from "three/src/math/MathUtils";
  import { backgroundMaterial } from "$planets/utils/materials";
  import Planet from "$planets/components/Planet.svelte";
  import { Vector3, Mesh } from "three";
  import { spring, tweened } from "svelte/motion";
  import { get } from "svelte/store";

  export let system: System;

  const { pointer } = useThrelte();
  let cameraOrigin = new Vector3(50, 15, 0);
  let mesh: Mesh;

  let pointerSpring = spring($pointer);
  let cameraPositionSpring = tweened(cameraOrigin);
  $: {
    pointerSpring.set($pointer);
    const newPosition = new Vector3(
      $cameraPositionSpring.x,
      $cameraPositionSpring.y + 8 * $pointerSpring.y,
      $cameraPositionSpring.z - 8 * $pointerSpring.x
    );
    cameraPositionSpring.set(newPosition);
  }

  let backgroundRotation = 0;
  useFrame(() => {
    backgroundRotation += 0.002;
    // get(camera).position.set(cameraOrigin.x, cameraOrigin.y+8*$dampenedPointer.y, cameraOrigin.z-8*$dampenedPointer.x)
  });
</script>

<T.Group interactive rotation.y={backgroundRotation}>
  <T.Mesh material={backgroundMaterial} scale={100}>
    <T.SphereGeometry />
  </T.Mesh>
  <T.DirectionalLight castShadow position={[-100, 10, 10]} />
  <T.DirectionalLight position={[-100, 10, -10]} intensity={0.2} />
</T.Group>
<T.AmbientLight intensity={0.15} />

<T.Mesh bind:ref={mesh} scale={0.1} position={[0, 0, 0]}>
  <T.SphereGeometry />
</T.Mesh>

<T.PerspectiveCamera let:ref makeDefault fov={40}>
  <TransformableObject
    object={ref}
    lookAt={mesh}
    position={$cameraPositionSpring}
  />
  <OrbitControls
    enableDamping
    maxPolarAngle={degToRad(150)}
    enablePan={false}
  />
</T.PerspectiveCamera>

<Planet planet={system.root} />
