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

  export let system: PlanetType;

  const { pointer } = useThrelte();
  let cameraOrigin = new Vector3(60, 15, 0);
  let newPosition = new Vector3(60, 15, 0);
  let mesh: Mesh;

  const pointerSpring = spring($pointer);
  $: {
    // console.log($pointerSpring)
    pointerSpring.set($pointer);
  }

  const cameraPositionSpring = spring(cameraOrigin);
  $: {
    let whatever = $pointerSpring;
    console.log(whatever);
    newPosition = new Vector3(
      cameraOrigin.x,
      cameraOrigin.y + 5 * $pointerSpring.y,
      cameraOrigin.z - 5 * $pointerSpring.x
    );
    console.log(newPosition);
    // console.log($cameraPositionSpring)
    cameraPositionSpring.set(newPosition);
  }

  let backgroundRotation = 0;
  useFrame(() => {
    backgroundRotation += 0.002;
    // get(camera).position.set(cameraOrigin.x, cameraOrigin.y+8*$pointer.y, cameraOrigin.z-8*$pointer.x)
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
  <TransformableObject object={ref} lookAt={mesh} position={newPosition} />
  <OrbitControls
    enableDamping
    maxPolarAngle={degToRad(150)}
    enablePan={false}
  />
</T.PerspectiveCamera>

<Planet planet={system} />
