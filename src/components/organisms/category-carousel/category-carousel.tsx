"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { CATEGORIES } from "@/constants/shop";
import { HalfDisc } from "@/components/icons";
import { ArrowCircle, Reveal } from "@/components/atoms";

export function CategoryCarousel() {
  const [index, setIndex] = useState(1);
  const prev = (index + CATEGORIES.length - 1) % CATEGORIES.length;
  const next = (index + 1) % CATEGORIES.length;

  return (
    <section className="bg-ink-2 relative overflow-hidden py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 45%, rgba(183,140,108,0.10), transparent 70%)",
        }}
        aria-hidden
      />
      <Reveal>
        <h2 className="font-display text-cream flex flex-wrap items-center justify-center gap-4 px-4 text-center text-5xl font-medium sm:text-7xl lg:text-8xl">
          Category
          <HalfDisc className="size-10 sm:size-14" />
          View
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-14 h-[420px] max-w-5xl sm:h-[470px]">
        {[
          { i: prev, side: "left" as const },
          { i: next, side: "right" as const },
        ].map(({ i, side }) => (
          <div
            key={side}
            className={cn(
              "border-line absolute top-1/2 hidden h-[360px] w-[260px] -translate-y-1/2 overflow-hidden rounded-3xl border sm:block",
              side === "left" ? "left-4 -rotate-6 md:left-16" : "right-4 rotate-6 md:right-16",
            )}
          >
            <img
              src={CATEGORIES[i]?.img}
              alt=""
              className="h-full w-full object-cover brightness-[0.35] saturate-50"
            />
          </div>
        ))}

        <div
          key={index}
          className="cardin absolute top-1/2 left-1/2 h-[380px] w-[280px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:h-[440px] sm:w-[340px]"
        >
          <img
            src={CATEGORIES[index]?.img}
            alt={`${CATEGORIES[index]?.name} collection`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2 sm:left-6">
          <ArrowCircle variant="light" dir="left" onClick={() => setIndex(prev)} />
        </div>
        <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2 sm:right-6">
          <ArrowCircle dir="right" onClick={() => setIndex(next)} />
        </div>
      </div>

      <Reveal delay={100}>
        <div className="mt-12 flex flex-wrap items-end justify-center gap-x-10 gap-y-2 px-4">
          {CATEGORIES.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setIndex(i)}
              className={cn(
                "font-display transition-all duration-300",
                i === index
                  ? "text-cream text-2xl font-medium sm:text-3xl"
                  : "text-mute hover:text-cream/60 text-lg",
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
        <p className="text-mute mt-3 text-center text-sm italic">{CATEGORIES[index]?.items}</p>
      </Reveal>
    </section>
  );
}
