"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { HERO_IMG } from "@/constants/hero";
import { ArrowCircle } from "@/components/atoms";
import { Reveal } from "@/components/atoms";

export function Hero() {
  const [slide, setSlide] = useState(0);

  return (
    <div className="relative mt-3 h-[75vh] max-h-[800px] min-h-[520px] w-full overflow-hidden rounded-2xl sm:mt-4 sm:h-[80vh] sm:rounded-[2.5rem] lg:h-[84vh] lg:rounded-[3rem]">
      <img
        src={HERO_IMG}
        alt="Woman wearing ornate gold earrings in dramatic light"
        className={cn(
          "absolute inset-0 h-full w-full object-cover object-[70%_20%] transition-transform duration-[1400ms] ease-out",
          slide % 2 ? "scale-110" : "scale-100",
        )}
      />
      <div className="from-ink via-ink/45 to-ink/10 absolute inset-0 bg-gradient-to-t" />
      <div className="from-ink/75 absolute inset-0 bg-gradient-to-r via-transparent to-transparent" />

      <div className="text-cream/70 absolute top-1/2 right-6 hidden -translate-y-1/2 flex-col items-center gap-3 text-[11px] tracking-widest sm:flex lg:right-10">
        <span>0{slide + 1}</span>
        <span className="bg-cream/30 h-24 w-px" />
        <span className="text-cream/40">04</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-10 lg:p-14">
        <Reveal y={18}>
          <p className="text-cream/80 max-w-xs text-[12px] leading-relaxed italic sm:text-[13px]">
            Our young and expert designers design the most exquisite jewelry for you to shine in a
            special way in the world
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-display text-cream mt-4 max-w-3xl text-3xl leading-[1.08] font-medium sm:mt-5 sm:text-5xl lg:text-6xl xl:text-7xl">
            You deserve the most unique jewelry
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
            <a
              href="#works"
              className="bg-cream text-ink hover:bg-tan rounded-full px-6 py-3 text-xs font-medium transition-all duration-300 hover:shadow-[0_8px_30px_rgba(183,140,108,0.35)] sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Order Now!
            </a>
            <a
              href="#collection"
              className="border-cream/40 text-cream hover:border-cream hover:bg-cream/10 rounded-full border px-6 py-3 text-xs transition-colors duration-300 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              See Collection
            </a>
            <div className="ml-auto flex items-center gap-2">
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
