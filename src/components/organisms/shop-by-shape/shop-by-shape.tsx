"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { cn } from "@/utils/cn";
import {
  DiamondOval,
  DiamondCushion,
  DiamondRound,
  DiamondPrincess,
  DiamondPear,
  Sparkle,
} from "@/components/icons";
import { Reveal } from "@/components/atoms";
import { DIAMOND_SHAPES } from "@/constants/shop";

const SHAPE_ICONS: Record<string, typeof DiamondRound> = {
  round: DiamondRound,
  oval: DiamondOval,
  cushion: DiamondCushion,
  princess: DiamondPrincess,
  pear: DiamondPear,
};

export function ShopByShape() {
  const [active, setActive] = useState("round");
  const currentShape = DIAMOND_SHAPES.find((s) => s.id === active) ?? DIAMOND_SHAPES[0]!;
  const ActiveIcon = SHAPE_ICONS[currentShape.id] ?? DiamondRound;

  return (
    <section
      id="shop"
      className="relative w-full px-4 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-28 lg:px-12"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 30%, rgba(183,140,108,0.12), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl">
        {/* Editorial Header */}
        <Reveal>
          <div className="border-line/70 flex flex-col items-start justify-between gap-6 border-b pb-10 lg:flex-row lg:items-end">
            <div>
              <span className="border-tan/40 bg-tan/10 text-tan inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase backdrop-blur-sm">
                <Sparkle className="text-tan size-3" />
                Signature Cut Studio
              </span>
              <h2 className="font-display text-cream mt-4 text-4xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
                Shop Diamonds{" "}
                <span className="text-tan font-serif font-normal italic">by Shape</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-mute text-xs leading-relaxed italic sm:text-sm">
                Every stone is hand-selected and cut to maximize internal light refraction. Select
                your preferred silhouette below to inspect precision geometry, fire, and custom
                settings.
              </p>
              <div className="text-cream/70 mt-4 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs">
                <span className="border-line bg-ink-2/60 flex items-center gap-1.5 rounded-full border px-3 py-1">
                  <ShieldCheck className="text-tan size-3" /> GIA &amp; IGI Certified
                </span>
                <span className="border-line bg-ink-2/60 flex items-center gap-1.5 rounded-full border px-3 py-1">
                  <Sparkles className="text-tan size-3" /> 100% Conflict-Free
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Shape Selector Bar */}
        <Reveal delay={120}>
          <div className="no-scrollbar mt-10 overflow-x-auto pb-2">
            <div className="grid min-w-[640px] grid-cols-5 gap-3 sm:min-w-0 sm:gap-4">
              {DIAMOND_SHAPES.map((shape) => {
                const isActive = shape.id === active;
                const Icon = SHAPE_ICONS[shape.id] ?? DiamondRound;

                return (
                  <button
                    key={shape.id}
                    onClick={() => setActive(shape.id)}
                    className={cn(
                      "group relative flex flex-col items-center gap-3 rounded-2xl border p-4 text-center transition-all duration-300 sm:rounded-3xl sm:p-5",
                      isActive
                        ? "border-tan/80 from-ink-3 to-ink-2 text-cream ring-tan/40 bg-gradient-to-b shadow-[0_0_35px_rgba(183,140,108,0.25)] ring-1"
                        : "border-line bg-ink-2/50 text-mute hover:border-cream/30 hover:bg-ink-2 hover:text-cream",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-14 place-items-center rounded-full border transition-all duration-300 sm:size-16",
                        isActive
                          ? "border-tan/60 bg-tan/15 text-cream shadow-[0_0_20px_rgba(183,140,108,0.3)]"
                          : "border-line/60 bg-ink group-hover:border-cream/40 group-hover:text-cream",
                      )}
                    >
                      <Icon
                        className={cn(
                          "transition-transform duration-300",
                          isActive ? "size-9 scale-110" : "size-8 group-hover:scale-105",
                        )}
                      />
                    </span>

                    <div>
                      <span
                        className={cn(
                          "block text-sm font-medium tracking-wide transition-colors duration-200 sm:text-base",
                          isActive ? "text-cream" : "text-cream/70 group-hover:text-cream",
                        )}
                      >
                        {shape.label}
                      </span>
                      <span className="text-mute block text-[11px] tracking-wider uppercase">
                        {shape.facets} Facets
                      </span>
                    </div>

                    {isActive && (
                      <span className="bg-tan absolute -top-1.5 size-2 rounded-full shadow-[0_0_8px_rgba(183,140,108,0.8)]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Interactive Shape Spotlight Showcase */}
        <Reveal delay={200}>
          <div className="border-line bg-ink-2/90 relative mt-8 grid overflow-hidden rounded-[2rem] border shadow-2xl backdrop-blur-md lg:grid-cols-12">
            {/* Visual Column */}
            <div className="relative min-h-[320px] overflow-hidden lg:col-span-5 lg:min-h-[460px]">
              <img
                key={currentShape.id}
                src={currentShape.img}
                alt={`${currentShape.label} cut diamond jewelry`}
                className="cardin absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="from-ink/80 via-ink/20 absolute inset-0 bg-gradient-to-t to-transparent" />

              {/* Floating Shape Badge */}
              <div className="border-cream/20 bg-ink-2/80 text-cream absolute top-4 left-4 flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-md">
                <ActiveIcon className="text-tan size-4" />
                <span>{currentShape.label} Silhouette</span>
              </div>

              {/* Price Pill */}
              <div className="border-line bg-ink/85 absolute bottom-4 left-4 rounded-xl border px-4 py-2 backdrop-blur-md">
                <span className="text-mute block text-[10px] tracking-wider uppercase">
                  Starting Price
                </span>
                <span className="font-display text-cream text-lg font-semibold sm:text-xl">
                  {currentShape.startingPrice}
                </span>
              </div>
            </div>

            {/* Cut Anatomy & Specs Column */}
            <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-7 lg:p-12">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-tan text-[11px] font-semibold tracking-[0.24em] uppercase">
                    Precision Cut Anatomy
                  </span>
                  <span className="border-line text-cream/70 rounded-full border px-3 py-1 text-[11px]">
                    ✦ Master Grade
                  </span>
                </div>

                <h3 className="font-display text-cream mt-3 text-2xl font-semibold sm:text-4xl">
                  {currentShape.label} Brilliant Cut
                </h3>
                <p className="text-tan mt-1 font-serif text-sm italic sm:text-base">
                  &ldquo;{currentShape.tagline}&rdquo;
                </p>
                <p className="text-cream/65 mt-4 text-xs leading-relaxed sm:text-sm">
                  {currentShape.description}
                </p>

                {/* Specs Matrix */}
                <div className="border-line mt-6 grid grid-cols-2 gap-3 border-t pt-6 sm:gap-4">
                  <div className="border-line/60 bg-ink/50 rounded-2xl border p-3.5 sm:p-4">
                    <span className="text-mute block text-[10px] tracking-wider uppercase">
                      Facet Geometry
                    </span>
                    <span className="text-cream mt-1 block text-xs font-medium sm:text-sm">
                      {currentShape.facets} Precision Facets
                    </span>
                  </div>
                  <div className="border-line/60 bg-ink/50 rounded-2xl border p-3.5 sm:p-4">
                    <span className="text-mute block text-[10px] tracking-wider uppercase">
                      Optical Fire
                    </span>
                    <span className="text-cream mt-1 block text-xs font-medium sm:text-sm">
                      {currentShape.fireRating}
                    </span>
                  </div>
                  <div className="border-line/60 bg-ink/50 rounded-2xl border p-3.5 sm:p-4">
                    <span className="text-mute block text-[10px] tracking-wider uppercase">
                      Ideal Length/Width
                    </span>
                    <span className="text-cream mt-1 block text-xs font-medium sm:text-sm">
                      {currentShape.ratio}
                    </span>
                  </div>
                  <div className="border-line/60 bg-ink/50 rounded-2xl border p-3.5 sm:p-4">
                    <span className="text-mute block text-[10px] tracking-wider uppercase">
                      Recommended Setting
                    </span>
                    <span className="text-cream mt-1 block truncate text-xs font-medium sm:text-sm">
                      {currentShape.popularSetting}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="#works"
                  className="bg-cream text-ink hover:bg-tan flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-medium transition-all duration-300 hover:shadow-[0_8px_30px_rgba(183,140,108,0.35)] sm:text-sm"
                >
                  Explore {currentShape.label} Rings
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#newsletter"
                  className="border-cream/40 text-cream hover:border-cream hover:bg-cream/10 rounded-full border px-6 py-3.5 text-xs transition-colors duration-300 sm:text-sm"
                >
                  Custom Ring Builder
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
