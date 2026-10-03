import { RING_IMG, AVATAR_URLS } from "@/constants/hero";
import { Sunburst } from "@/components/icons";
import { Reveal } from "@/components/atoms";

export function InfoCards() {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-[1.55fr_1fr]">
      <Reveal className="h-full">
        <div className="group bg-ink-2 flex h-full flex-col items-start gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:gap-6 sm:rounded-[1.75rem] sm:p-7">
          <div className="flex shrink-0 -space-x-4 sm:-space-x-5">
            <span className="bg-tan text-ink grid size-20 place-items-center rounded-full sm:size-24 lg:size-28">
              <Sunburst className="spin-slow size-9 sm:size-11" />
            </span>
            <span className="border-ink-2 size-20 overflow-hidden rounded-full border-4 sm:size-24 lg:size-28">
              <img
                src={RING_IMG}
                alt="Hand wearing a crafted gold ring"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </span>
          </div>
          <div>
            <p className="text-cream/60 text-xs italic sm:text-[13px]">
              Make your ring in just 4 steps
            </p>
            <h3 className="font-display text-cream mt-1.5 text-lg leading-snug font-medium sm:text-2xl">
              Design your own
              <br className="hidden sm:inline" /> gemstone ring
            </h3>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} className="h-full">
        <div className="bg-tan text-ink flex h-full flex-col justify-between gap-6 rounded-[1.75rem] p-6 sm:p-7">
          <p className="text-ink/70 text-[13px] leading-snug italic">
            Users and Supportive
            <br />
            Community
          </p>
          <div className="flex items-end justify-between">
            <span className="font-display text-4xl font-semibold sm:text-5xl">4.8K</span>
            <div className="flex -space-x-3">
              {AVATAR_URLS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Community member ${i + 1}`}
                  className="border-tan size-11 rounded-full border-2 object-cover transition-transform duration-300 hover:-translate-y-1"
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
