export enum Texture {
  Marble = "marble",
  Glass = "glass",
}

export interface Planet {
  text: string,
  radius: number,
  texture: Texture,
  children: Planet[],
}

export interface System {
  root: Planet
}