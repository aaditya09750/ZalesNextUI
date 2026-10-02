import { Reveal } from "@/components/atoms";
import { MarqueeRow } from "@/components/molecules";

export function Testimonials() {
  return (
    <section className="overflow-hidden pt-4 pb-24">
      <div className="px-6 sm:px-10 lg:px-14">
        <Reveal>
          <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-2">
            <h2 className="font-display text-cream text-5xl font-medium sm:text-7xl">Customers</h2>
            <h2 className="font-display text-cream text-5xl font-medium sm:text-7xl">
              Experiences
            </h2>
          </div>
          <p className="text-mute mt-5 max-w-[230px] text-[12px] leading-relaxed italic">
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
