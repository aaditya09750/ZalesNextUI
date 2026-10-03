import { Reveal } from "@/components/atoms";
import { MarqueeRow } from "@/components/molecules";

export function Testimonials() {
  return (
    <section className="w-full overflow-hidden pt-4 pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-2">
            <h2 className="font-display text-cream text-4xl font-medium sm:text-7xl">Customers</h2>
            <h2 className="font-display text-cream text-4xl font-medium sm:text-7xl">
              Experiences
            </h2>
          </div>
          <p className="text-mute mt-4 max-w-[240px] text-[12px] leading-relaxed italic sm:mt-5">
            Our regular customers helped us reach the best with their good and useful comments and
            suggestions.
          </p>
        </Reveal>
      </div>

      <Reveal delay={140} className="mt-12">
        <MarqueeRow />
        <MarqueeRow reverse offset />
      </Reveal>
    </section>
  );
}
