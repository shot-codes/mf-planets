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

export interface Background {
  fogColor: Color;
  lightColor: Color;
  material: LayerMaterial;
}

export type Materials = {
  [key in MaterialKey]: LayerMaterial;
};

export type Backgrounds = {
  [key in BackgroundKey]: Background;
};

export interface Planet {
  text: string;
  radius: number;
  materialAnimationRate: number;
  material: MaterialKey;
  children: Planet[];
}

export interface Config {
  name: string;
  background: BackgroundKey;
  planets: Planet;
}
