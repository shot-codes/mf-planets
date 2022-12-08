export enum Material {
  Marble = "marble",
  Glass = "background",
}

export interface Planet {
  text: string;
  radius: number;
  material: Material;
  children: Planet[];
}

export interface System {
  root: Planet;
}
