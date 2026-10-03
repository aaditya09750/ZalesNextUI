import { Reveal } from "@/components/atoms";

export function CustomCTA() {
  return (
    <section className="w-full px-4 py-4 sm:px-8 sm:py-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative h-[340px] overflow-hidden rounded-2xl sm:h-[400px] sm:rounded-[2.5rem] lg:h-[440px]">
            <img
              src="https://images.pexels.com/photos/6979584/pexels-photo-6979584.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400"
              alt="Woman holding a pendant necklace"
              className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
            />
            <div className="from-ink/30 to-ink/50 absolute inset-0 bg-gradient-to-b via-transparent" />
            <span className="font-display text-cream/10 pointer-events-none absolute inset-0 grid place-items-center text-[20vw] leading-none font-semibold select-none sm:text-[11rem]">
              ZALES
            </span>
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-4 text-center sm:gap-7">
              <h2 className="font-display text-cream text-2xl leading-tight font-medium sm:text-3xl lg:text-4xl">
                Want to Design For own?
                <br />
                Calm, we can do it!
              </h2>
              <a
                href="#newsletter"
                className="border-cream/60 text-cream hover:bg-cream hover:text-ink rounded-full border px-7 py-3 text-xs backdrop-blur-sm transition-all duration-300 sm:px-8 sm:py-3.5 sm:text-sm"
              >
                Order Now!
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
