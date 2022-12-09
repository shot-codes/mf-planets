export enum Material {
  Marble = "marble",
  Glass = "background",
}

export interface Planet {
  text: string;
  radius: number;
  materialAnimationRate: number;
  material: Material;
  children: Planet[];
}
