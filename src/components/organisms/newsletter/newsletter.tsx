"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { SOCIAL_LINKS } from "@/constants/community";
import { HalfDisc } from "@/components/icons";
import { Reveal } from "@/components/atoms";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <section id="newsletter" className="w-full px-4 pt-20 pb-8 sm:px-8 sm:pt-28 sm:pb-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-cream flex flex-wrap items-center gap-3 text-3xl font-medium sm:gap-4 sm:text-5xl">
            GET The Last Information From US <HalfDisc className="size-8 sm:size-11" />
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="w-full max-w-xl">
              <form
                onSubmit={submit}
                className="border-line bg-ink-2 focus-within:border-tan/60 flex items-center rounded-full border py-1.5 pr-1.5 pl-6 transition-colors"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSent(false);
                  }}
                  placeholder="Your Email Here"
                  className="text-cream placeholder:text-mute w-full bg-transparent py-3 text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="group bg-cream text-ink hover:bg-tan grid size-12 shrink-0 place-items-center rounded-full transition-colors duration-300"
                >
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </form>
              <p
                className={cn(
                  "text-tan mt-3 pl-6 text-xs italic transition-opacity duration-500",
                  sent ? "opacity-100" : "opacity-0",
                )}
              >
                Thank you — you&apos;re on the list. ✦
              </p>
            </div>
            <p className="text-mute max-w-xs text-[13px] leading-relaxed italic">
              Be the first to know about exciting new designs, special events, store openings and
              much more.
            </p>
          </div>
        </Reveal>

        <footer className="border-line text-mute mt-16 flex flex-col items-center justify-between gap-5 border-t pt-7 text-[11px] md:flex-row">
          <p>©2023 All Right Reserved.</p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {SOCIAL_LINKS.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="border-line hover:border-tan hover:text-cream block rounded-full border px-4 py-2 transition-colors duration-300"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  );
}
