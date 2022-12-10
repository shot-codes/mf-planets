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
  offsetRate: number;
  material: LayerMaterial;
}

export interface Background {
  fogColor: Color;
  lightColor: Color;
  material: LayerMaterial;
}

export type Materials = {
  [key in MaterialKey]: Material;
};

export type Backgrounds = {
  [key in BackgroundKey]: Background;
};

export interface Planet {
  text: string;
  radius: number;
  material: MaterialKey;
  children: Planet[];
}

export interface Config {
  name: string;
  background: BackgroundKey;
  planets: Planet;
}
