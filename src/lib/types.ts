import type { LayerMaterial } from "lamina/vanilla";
import type { Color } from "three";

export enum MaterialKey {
  Marble = "marble",
  Core = "core",
}

export enum BackgroundKey {
  Purple = "purple",
  Green = "green",
}

export interface Material {
  key: MaterialKey;
  offsetRate: number;
  scale: number;
  material: NewLayerMaterial;
}

export interface Background {
  fogColor: Color;
  lightColor: Color;
  material: LayerMaterial;
}

export type NewLayerMaterial = () => LayerMaterial;

export type Materials = {
  [key in MaterialKey]: Material;
};

export type Backgrounds = {
  [key in BackgroundKey]: Background;
};

export interface Config {
  name: string;
  background: BackgroundKey;
  system: PlanetSystem;
}

export interface Planet {
  name: string;
  radius: number;
  material: Material;
}

export interface PlanetSystem {
  planet: Planet;
  orbitRadius: number;
  orbitSpeed: number;
  children: PlanetSystem[];
}
