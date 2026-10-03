import type { ComponentType } from "react";

export interface ShapeItem {
  id: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
}

export interface CategoryItem {
  name: string;
  items: string;
  img: string;
}
