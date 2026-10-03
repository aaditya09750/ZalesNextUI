import { Sparkle } from "@/components/icons";
import { Reveal } from "@/components/atoms";

export function QuoteLogos() {
  return (
    <section className="w-full px-4 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="font-display text-cream mx-auto max-w-3xl text-center text-2xl leading-snug font-medium sm:text-3xl">
          Trends come and go 🤞 and style evolves 💎 It&apos;s important to have pieces of jewelry
          that are timeless and look chic despite ever 🍂 changing fashions
        </p>
      </Reveal>

      <Reveal delay={140}>
        <div className="border-line/70 mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 border-y py-9 md:justify-between">
          <span className="text-cream/90 font-serif text-2xl tracking-wide italic">Annoushka</span>
          <Sparkle className="text-cream size-6" />
          <span className="text-center">
            <span className="text-cream block font-serif text-xl tracking-[0.22em]">
              TIFFANY &amp; CO.
            </span>
            <span className="text-mute mt-1 block text-[8px] tracking-[0.34em]">
              NEW YORK SINCE 1837
            </span>
          </span>
          <Sparkle className="text-cream size-6" />
          <span className="text-cream/90 text-sm tracking-[0.5em]">KERING</span>
        </div>
      </Reveal>
    </section>
  );
}
