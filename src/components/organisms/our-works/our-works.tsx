"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { WORKS } from "@/constants/showcase";
import { ArrowCircle, Reveal } from "@/components/atoms";

export function OurWorks() {
  const [featured, setFeatured] = useState(2);
  const ordered = WORKS.map((_, i) => WORKS[(featured - 2 + i + WORKS.length) % WORKS.length]!);

  return (
    <section id="works" className="w-full px-4 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="border-line/70 flex flex-col items-start justify-between gap-6 border-b pb-8 md:flex-row md:items-end">
            <div>
              <span className="text-tan border-tan/30 bg-tan/10 mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-[11px] font-medium tracking-[0.2em] uppercase backdrop-blur-sm">
                ✦ Master Crafts
              </span>
              <h2 className="font-display text-cream mt-2 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Our Signature Works
              </h2>
            </div>
            <p className="text-mute max-w-sm text-xs leading-relaxed italic sm:text-sm">
              Zales combination of statement design and simplistic style helps create a look
              that&apos;s as unique as you are.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="no-scrollbar mt-14 flex items-center justify-start gap-3 overflow-x-auto pb-2 md:justify-center md:gap-4">
            {ordered.map((w, i) => {
              const isCenter = i === 2;
              return (
                <article
                  key={w.title}
                  className={cn(
                    "group border-line relative shrink-0 overflow-hidden rounded-2xl border transition-all duration-500",
                    isCenter
                      ? "h-[400px] w-[240px] sm:h-[440px] sm:w-[260px]"
                      : "h-[320px] w-[200px] opacity-90 sm:h-[350px] sm:w-[210px]",
                  )}
                >
                  <img
                    src={w.img}
                    alt={w.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="from-ink/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                  {isCenter && w.tag && (
                    <span className="bg-cream/90 text-ink absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-medium">
                      {w.tag}
                    </span>
                  )}
                  <h3
                    className={cn(
                      "text-cream absolute",
                      isCenter
                        ? "bottom-5 left-1/2 w-full -translate-x-1/2 text-center text-sm"
                        : "bottom-4 left-4 text-[10px] tracking-[0.18em] uppercase",
                    )}
                  >
                    {isCenter ? w.title : `THE ${w.title.replace("The ", "").toUpperCase()}`}
                  </h3>
                </article>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 flex items-center justify-center gap-3">
          <ArrowCircle dir="left" onClick={() => setFeatured((f) => (f + 4) % 5)} />
          <ArrowCircle dir="right" variant="tan" onClick={() => setFeatured((f) => (f + 1) % 5)} />
        </div>
      </div>
    </section>
  );
}
