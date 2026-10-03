"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import {
  DiamondOval,
  DiamondCushion,
  DiamondRound,
  DiamondPrincess,
  DiamondPear,
} from "@/components/icons";
import { ArrowCircle, Reveal } from "@/components/atoms";
import type { ShapeItem } from "@/types/shop";

const DIAMOND_SHAPES: ShapeItem[] = [
  { id: "oval", label: "Oval", Icon: DiamondOval },
  { id: "cushion", label: "Cushion", Icon: DiamondCushion },
  { id: "round", label: "Round", Icon: DiamondRound },
  { id: "princess", label: "Princess", Icon: DiamondPrincess },
  { id: "pear", label: "Pear", Icon: DiamondPear },
];

export function ShopByShape() {
  const [active, setActive] = useState("round");

  return (
    <section id="shop" className="w-full px-4 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <h2 className="font-display text-cream text-4xl font-medium sm:text-6xl lg:text-7xl">
              Shop Diamond
            </h2>
            <ArrowCircle variant="light" label="Explore shapes" />
            <span className="border-line text-cream/80 rounded-full border px-5 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm">
              try it now!
            </span>
          </div>
          <div className="mt-1 flex justify-end">
            <h2 className="font-display text-cream text-4xl font-medium sm:text-6xl lg:text-7xl">
              by Shape
            </h2>
          </div>
          <p className="text-mute mt-4 max-w-[240px] text-[11px] leading-relaxed tracking-[0.14em] uppercase italic sm:mt-5">
            Explore the possibilities of tailored craftsmanship and unlimited capabilities
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="no-scrollbar relative mt-14 overflow-x-auto pb-2">
            <div className="relative mx-auto flex max-w-4xl min-w-[640px] items-center justify-between px-6">
              <span className="bg-line absolute top-[52px] right-6 left-6 h-px" aria-hidden />
              <ArrowLeft className="text-mute absolute top-[46px] left-0 size-3" aria-hidden />
              <ArrowRight className="text-mute absolute top-[46px] right-0 size-3" aria-hidden />

              {DIAMOND_SHAPES.map(({ id, label, Icon }) => {
                const isActive = id === active;
                return (
                  <button
                    key={id}
                    onClick={() => setActive(id)}
                    className="group relative flex flex-col items-center gap-5"
                  >
                    <span
                      className={cn(
                        "bg-ink-2 grid place-items-center rounded-full border transition-all duration-500",
                        isActive
                          ? "border-tan/70 text-cream size-28 shadow-[0_0_70px_rgba(183,140,108,0.28)]"
                          : "border-line text-mute group-hover:border-cream/40 group-hover:text-cream/80 size-24",
                      )}
                    >
                      <Icon
                        className={cn(
                          "transition-all duration-500",
                          isActive ? "size-16" : "size-11",
                        )}
                      />
                    </span>
                    <span
                      className={cn(
                        "text-sm tracking-wide transition-colors duration-300",
                        isActive ? "text-cream font-medium" : "text-mute group-hover:text-cream/70",
                      )}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
