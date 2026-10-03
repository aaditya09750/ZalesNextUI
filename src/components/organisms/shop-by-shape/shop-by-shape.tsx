"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { ArrowCircle, Reveal } from "@/components/atoms";
import { Sparkle } from "@/components/icons";
import { DIAMOND_SHAPES } from "@/constants";

export function ShopByShape() {
  const [active, setActive] = useState("round");

  const currentIndex = DIAMOND_SHAPES.findIndex((s) => s.id === active);
  const currentShape = DIAMOND_SHAPES[currentIndex] ?? DIAMOND_SHAPES[2];

  const handlePrev = () => {
    const nextIndex = (currentIndex - 1 + DIAMOND_SHAPES.length) % DIAMOND_SHAPES.length;
    setActive(DIAMOND_SHAPES[nextIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % DIAMOND_SHAPES.length;
    setActive(DIAMOND_SHAPES[nextIndex].id);
  };

  return (
    <section
      id="shop"
      className="w-full scroll-mt-28 px-4 pt-24 pb-16 sm:scroll-mt-36 sm:px-8 sm:pt-32 sm:pb-24 lg:px-12"
    >
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
          <div className="mt-4 flex flex-col justify-between gap-4 sm:mt-5 sm:flex-row sm:items-end">
            <p className="text-mute max-w-[280px] text-[11px] leading-relaxed tracking-[0.14em] uppercase italic">
              Explore the possibilities of tailored craftsmanship and unlimited capabilities
            </p>
            <div className="text-mute/80 flex items-center gap-2 text-xs">
              <span className="bg-tan inline-block size-1.5 animate-pulse rounded-full" />
              <span className="font-mono text-[11px] tracking-wider uppercase">
                Interactive Silhouette Dock
              </span>
            </div>
          </div>
        </Reveal>

        {/* Enhanced Diamond Dock / Track */}
        <Reveal delay={150}>
          <div className="no-scrollbar relative mt-16 overflow-x-auto pb-4 sm:mt-20">
            <div className="relative mx-auto flex max-w-4xl min-w-[680px] items-center justify-between px-10">
              {/* Dual-layered jewelry rail */}
              <span
                className="from-line/80 absolute top-[51px] right-10 left-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                aria-hidden
              />
              <span
                className="via-tan/35 absolute top-[52px] right-14 left-14 h-px bg-gradient-to-r from-transparent to-transparent"
                aria-hidden
              />

              {/* Clickable Navigation Controls */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous diamond shape"
                className="group border-line bg-ink-2/90 text-mute hover:border-tan/60 hover:bg-ink-3 hover:text-cream absolute top-[52px] left-0 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(183,140,108,0.25)]"
              >
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next diamond shape"
                className="group border-line bg-ink-2/90 text-mute hover:border-tan/60 hover:bg-ink-3 hover:text-cream absolute top-[52px] right-0 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(183,140,108,0.25)]"
              >
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              {DIAMOND_SHAPES.map(({ id, label, facets, Icon }) => {
                const isActive = id === active;
                return (
                  <button
                    key={id}
                    onClick={() => setActive(id)}
                    type="button"
                    aria-label={`Select ${label} diamond shape`}
                    aria-pressed={isActive}
                    className="group relative flex flex-col items-center gap-4 focus:outline-none"
                  >
                    {/* Bezel Ring */}
                    <div
                      className={cn(
                        "relative flex items-center justify-center rounded-full transition-all duration-500",
                        isActive
                          ? "size-28 bg-gradient-to-tr from-[#d4af83] via-[#f7e7d0] to-[#9c7553] p-[2px] shadow-[0_0_55px_rgba(212,175,131,0.38),0_12px_40px_rgba(0,0,0,0.85)] sm:size-32"
                          : "from-cream/15 via-line hover:from-tan/40 hover:via-line size-22 rounded-full bg-gradient-to-b to-transparent p-[1px] group-hover:scale-105 sm:size-24",
                      )}
                    >
                      {/* Inner Gem Capsule */}
                      <div
                        className={cn(
                          "relative flex size-full items-center justify-center overflow-hidden rounded-full transition-all duration-500",
                          isActive
                            ? "bg-gradient-to-b from-[#251d16] via-[#1a140f] to-[#100d0a]"
                            : "bg-gradient-to-b from-[#191410] to-[#0f0c0a] group-hover:from-[#211a14]",
                        )}
                      >
                        {/* Specular glass reflection on top arc */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/10 to-transparent" />

                        {/* Ambient radial glow when active */}
                        {isActive && (
                          <div className="from-tan/30 pointer-events-none absolute inset-0 bg-radial via-transparent to-transparent" />
                        )}

                        {/* Diamond Icon */}
                        <Icon
                          className={cn(
                            "relative z-10 transition-all duration-500",
                            isActive
                              ? "text-cream size-14 drop-shadow-[0_2px_14px_rgba(212,175,131,0.65)] sm:size-16"
                              : "text-mute group-hover:text-cream/80 size-10 sm:size-11",
                          )}
                        />

                        {/* Sparkle glint on active gem */}
                        {isActive && (
                          <div className="pointer-events-none absolute top-2.5 right-2.5">
                            <Sparkle className="text-tan size-3.5 animate-pulse drop-shadow-[0_0_8px_rgba(247,231,208,0.9)]" />
                          </div>
                        )}
                      </div>

                      {/* Active indicator pip */}
                      {isActive && (
                        <span className="bg-tan absolute -bottom-2 size-2 rounded-full shadow-[0_0_10px_#d4af83]" />
                      )}
                    </div>

                    {/* Shape Label and Facets Badge */}
                    <div className="flex flex-col items-center gap-1">
                      <span
                        className={cn(
                          "text-sm tracking-wide transition-colors duration-300",
                          isActive
                            ? "text-cream font-semibold"
                            : "text-mute group-hover:text-cream/80 font-normal",
                        )}
                      >
                        {label}
                      </span>
                      <span
                        className={cn(
                          "font-mono text-[10px] tracking-wider uppercase transition-colors duration-300",
                          isActive ? "text-tan" : "text-mute/60 group-hover:text-mute",
                        )}
                      >
                        {facets} Facets
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Dynamic Cut Inspection Console */}
        <Reveal delay={200}>
          <div className="border-tan/25 relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border bg-gradient-to-b from-[#1a140f]/90 via-[#120e0a]/95 to-[#0b0907]/95 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:mt-18 sm:p-10">
            {/* Subtle ambient gem backlight */}
            <div
              className="bg-tan/12 pointer-events-none absolute -top-24 left-1/2 h-44 w-80 -translate-x-1/2 rounded-full blur-3xl"
              aria-hidden
            />

            <div className="relative z-10 flex flex-col gap-8">
              {/* Header row */}
              <div className="border-line/60 flex flex-col justify-between gap-4 border-b pb-6 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="border-tan/30 bg-tan/10 text-tan inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
                      ✦ {currentShape.badge}
                    </span>
                    <span className="text-mute text-[11px] tracking-wider uppercase">
                      Silhouette 0{currentIndex + 1} / 0{DIAMOND_SHAPES.length}
                    </span>
                  </div>
                  <h3 className="font-display text-cream mt-2 text-2xl font-semibold sm:text-3xl lg:text-4xl">
                    {currentShape.fullName}
                  </h3>
                </div>

                <p className="text-mute max-w-xs text-xs leading-relaxed italic sm:text-right sm:text-sm">
                  &ldquo;{currentShape.tagline}&rdquo;
                </p>
              </div>

              {/* 4 Precision Spec Pillars */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                <div className="border-line/60 bg-ink-2/60 rounded-2xl border p-4 backdrop-blur-sm">
                  <span className="text-mute block text-[10px] tracking-wider uppercase">
                    Facet Geometry
                  </span>
                  <span className="text-cream mt-1 block text-sm font-semibold sm:text-base">
                    {currentShape.facets} Facets
                  </span>
                  <span className="text-tan/80 mt-0.5 block text-[10px]">Precision cut</span>
                </div>

                <div className="border-line/60 bg-ink-2/60 rounded-2xl border p-4 backdrop-blur-sm">
                  <span className="text-mute block text-[10px] tracking-wider uppercase">
                    Optical Fire
                  </span>
                  <span className="text-cream mt-1 block text-sm font-semibold sm:text-base">
                    {currentShape.fireRating}
                  </span>
                  <span className="text-tan/80 mt-0.5 block text-[10px]">Light return index</span>
                </div>

                <div className="border-line/60 bg-ink-2/60 rounded-2xl border p-4 backdrop-blur-sm">
                  <span className="text-mute block text-[10px] tracking-wider uppercase">
                    Length / Width
                  </span>
                  <span className="text-cream mt-1 block text-sm font-semibold sm:text-base">
                    {currentShape.ratio}
                  </span>
                  <span className="text-tan/80 mt-0.5 block text-[10px]">Optimal proportion</span>
                </div>

                <div className="border-line/60 bg-ink-2/60 rounded-2xl border p-4 backdrop-blur-sm">
                  <span className="text-mute block text-[10px] tracking-wider uppercase">
                    Signature Mount
                  </span>
                  <span className="text-cream mt-1 block truncate text-sm font-semibold sm:text-base">
                    {currentShape.setting}
                  </span>
                  <span className="text-tan/80 mt-0.5 block text-[10px]">Recommended setting</span>
                </div>
              </div>

              {/* Curated Description & Action CTA */}
              <div className="flex flex-col items-start justify-between gap-6 pt-2 sm:flex-row sm:items-center">
                <p className="text-cream/70 max-w-xl text-xs leading-relaxed sm:text-sm">
                  {currentShape.characteristics}
                </p>

                <a
                  href="#works"
                  className="group bg-cream text-ink hover:bg-tan inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3.5 text-xs font-semibold transition-all duration-300 hover:shadow-[0_8px_30px_rgba(183,140,108,0.35)] sm:text-sm"
                >
                  Explore {currentShape.label} Jewelry
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
