"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { HERO_IMG } from "@/constants/hero";
import { ArrowCircle } from "@/components/atoms";
import { Reveal } from "@/components/atoms";

export function Hero() {
  const [slide, setSlide] = useState(0);

  return (
    <div className="relative mt-3 h-[72vh] max-h-[720px] min-h-[540px] overflow-hidden rounded-[2rem] sm:mt-4">
      <img
        src={HERO_IMG}
        alt="Woman wearing ornate gold earrings in dramatic light"
        className={cn(
          "absolute inset-0 h-full w-full object-cover object-[70%_20%] transition-transform duration-[1400ms] ease-out",
          slide % 2 ? "scale-110" : "scale-100",
        )}
      />
      <div className="from-ink via-ink/40 to-ink/10 absolute inset-0 bg-gradient-to-t" />
      <div className="from-ink/70 absolute inset-0 bg-gradient-to-r via-transparent to-transparent" />

      <div className="text-cream/70 absolute top-1/2 right-7 hidden -translate-y-1/2 flex-col items-center gap-3 text-[11px] tracking-widest md:flex">
        <span>0{slide + 1}</span>
        <span className="bg-cream/30 h-24 w-px" />
        <span className="text-cream/40">04</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-12">
        <Reveal y={18}>
          <p className="text-cream/75 max-w-xs text-[13px] leading-relaxed italic">
            Our young and expert designers design the most exquisite jewelry for you to shine in a
            special way in the world
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-display text-cream mt-5 max-w-2xl text-4xl leading-[1.05] font-medium sm:text-5xl lg:text-6xl">
            You deserve the most unique jewelry
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#works"
              className="bg-cream text-ink hover:bg-tan rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:shadow-[0_8px_30px_rgba(183,140,108,0.35)]"
            >
              Order Now!
            </a>
            <a
              href="#collection"
              className="border-cream/40 text-cream hover:border-cream hover:bg-cream/10 rounded-full border px-7 py-3.5 text-sm transition-colors duration-300"
            >
              See Collection
            </a>
            <div className="ml-auto hidden items-center gap-2 sm:flex">
              <ArrowCircle
                dir="left"
                label="Previous slide"
                onClick={() => setSlide((s) => (s + 3) % 4)}
              />
              <ArrowCircle
                dir="right"
                variant="tan"
                label="Next slide"
                onClick={() => setSlide((s) => (s + 1) % 4)}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
