"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { useIntersectionObserver } from "@/hooks";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms`, "--ry": `${y}px` } as CSSProperties}
    >
      {children}
    </div>
  );
}
