import { Reveal } from "@/components/atoms";

export function CustomCTA() {
  return (
    <section className="px-6 sm:px-10">
      <Reveal>
        <div className="relative h-[380px] overflow-hidden rounded-[2rem] sm:h-[420px]">
          <img
            src="https://images.pexels.com/photos/6979584/pexels-photo-6979584.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400"
            alt="Woman holding a pendant necklace"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
          />
          <div className="from-ink/30 to-ink/50 absolute inset-0 bg-gradient-to-b via-transparent" />
          <span className="font-display text-cream/10 pointer-events-none absolute inset-0 grid place-items-center text-[20vw] leading-none font-semibold select-none sm:text-[11rem]">
            ZALES
          </span>
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-7 px-6 text-center">
            <h2 className="font-display text-cream text-3xl leading-tight font-medium sm:text-4xl">
              Want to Design For own?
              <br />
              Calm, we can do it!
            </h2>
            <a
              href="#newsletter"
              className="border-cream/60 text-cream hover:bg-cream hover:text-ink rounded-full border px-8 py-3.5 text-sm backdrop-blur-sm transition-all duration-300"
            >
              Order Now!
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
