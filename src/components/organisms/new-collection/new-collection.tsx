"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { COLLECTION_TAGS } from "@/constants/showcase";
import { Sparkle } from "@/components/icons";
import { ArrowCircle, Reveal } from "@/components/atoms";

export function NewCollection() {
  const [activeTag, setActiveTag] = useState("Our Design");

  return (
    <section id="collection" className="w-full px-4 pb-20 sm:px-8 sm:pb-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-start gap-x-8 gap-y-2">
            <h2 className="font-display text-cream text-5xl font-semibold sm:text-8xl">NEW</h2>
            <p className="text-mute mt-3 max-w-[260px] text-[12px] leading-relaxed italic sm:mt-4">
              zales&apos;s combination of statement and simplistic style helps create a look
              that&apos;s as unique as you are.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <h2 className="font-display text-cream text-5xl font-semibold sm:text-8xl">
              COLLECTION
            </h2>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="border-line bg-ink-2 relative mt-12 grid overflow-hidden rounded-[2rem] border lg:grid-cols-2">
            <div className="relative h-80 lg:h-auto">
              <img
                src="https://images.pexels.com/photos/24815712/pexels-photo-24815712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200"
                alt="The Lesedi La Rona diamond necklace"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="to-ink-2/60 absolute inset-0 bg-gradient-to-r from-transparent" />
            </div>

            <div className="relative p-8 lg:p-12">
              <div className="flex items-start justify-between gap-4">
                <p className="text-mute flex items-center gap-2 text-[11px] tracking-wide">
                  <Sparkle className="text-tan size-3" /> From : Classic Set 2023
                </p>
                <ArrowCircle dir="right" />
              </div>

              <h3 className="font-display text-cream mt-8 text-2xl leading-snug font-medium sm:text-3xl">
                Introducing The
                <br />
                zales Lesedi La Rona
              </h3>
              <p className="text-tan mt-3 text-[10px] tracking-[0.24em] uppercase">
                A record breaking jewel
              </p>
              <p className="text-cream/55 mt-5 text-[13px] leading-relaxed">
                The 302.37 Carat Zales Lesedi La Rona Is The Biggest, Highest Colour, Highest
                Clarity Diamond Ever Certified By The GIA, And The World&apos;s Largest Square
                Emerald Cut Diamond, Expertly Cut And Polished By Graff&apos;s World Leading Team Of
                Gemmologists And Master Polishers. This Rare Marvel Required Over 18 Months Of
                Meticulous Craftsmanship, And...{" "}
                <a
                  href="#"
                  className="text-cream hover:text-tan underline underline-offset-4 transition-colors"
                >
                  Read More
                </a>
              </p>

              <ul className="border-line mt-8 space-y-3 border-t pt-6">
                {["Expert Analysis", "A Sensational Result"].map((b) => (
                  <li key={b} className="text-cream/80 flex items-center gap-3 text-sm">
                    <Sparkle className="text-tan size-3" /> {b}
                  </li>
                ))}
              </ul>

              <span className="bg-line absolute bottom-0 left-1/2 h-[3px] w-44 -translate-x-1/2 overflow-hidden rounded-full">
                <span className="bg-cream block h-full w-1/2" />
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex items-start gap-3">
              <Sparkle className="shimmer text-cream mt-0.5 size-5 shrink-0" />
              <p className="text-mute max-w-[250px] text-[12px] leading-relaxed italic">
                zales&apos;s combination of statement and simplistic style helps create a look
                that&apos;s as unique as you are.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 lg:justify-end">
              {[...COLLECTION_TAGS, "Our Design"].map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTag(t)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-[12px] transition-all duration-300",
                    activeTag === t
                      ? "bg-cream text-ink font-medium"
                      : "border-line text-cream/70 hover:border-tan hover:text-tan border",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
