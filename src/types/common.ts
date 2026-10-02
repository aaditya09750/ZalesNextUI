import type { ReactNode } from "react";

export type Direction = "left" | "right";

export type Variant = "dark" | "light" | "tan";

export interface ChildrenProps {
  children: ReactNode;
  className?: string;
}
