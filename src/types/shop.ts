import type { ComponentType } from "react";

export interface ShapeItem {
  id: string;
  label: string;
  fullName: string;
  badge: string;
  tagline: string;
  facets: number;
  fireRating: string;
  ratio: string;
  setting: string;
  characteristics: string;
  Icon: ComponentType<{ className?: string }>;
}

export interface CategoryItem {
  name: string;
  items: string;
  img: string;
}
