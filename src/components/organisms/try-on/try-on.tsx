import type { CSSProperties } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GRID_IMGS } from "@/constants/showcase";
import { Reveal } from "@/components/atoms";

export function TryOn() {
  return (
    <section className="pb-10">
      <div className="px-6 sm:px-10 lg:px-14">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <h2 className="font-display text-cream text-5xl font-medium sm:text-6xl lg:text-7xl">
              Watch on
            </h2>
            <span className="flex -space-x-3">
              <span className="border-line bg-ink-2 text-cream grid size-12 place-items-center rounded-full border">
                <ArrowLeft className="size-4" />
              </span>
              <span className="bg-cream text-ink grid size-12 place-items-center rounded-full">
                <ArrowRight className="size-4" />
              </span>
            </span>
            <span className="border-line text-cream/80 rounded-full border px-6 py-3 text-sm">
              try it now!
            </span>
          </div>
          <div className="mt-1 flex justify-end">
            <h2 className="font-display text-cream text-5xl font-medium sm:text-6xl lg:text-7xl">
              your hands!
            </h2>
          </div>
          <p className="text-mute mt-5 max-w-[260px] text-[11px] leading-relaxed tracking-[0.12em] uppercase italic">
            With the help of AI, you can upload a photo of your hand and see your ring on your hand
            before buying
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="relative mt-12 h-[520px] overflow-hidden sm:h-[600px]">
          <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-25 sm:grid-cols-6">
            {Array.from({ length: 18 }).map((_, i) => (
              <img
                key={i}
                src={GRID_IMGS[i % GRID_IMGS.length]}
                alt=""
                className="h-full w-full object-cover brightness-[0.45] grayscale"
              />
            ))}
          </div>
          <div className="from-ink via-ink/55 to-ink absolute inset-0 bg-gradient-to-b" />

          <span className="font-display text-tan/70 pointer-events-none absolute inset-0 grid place-items-center text-[26vw] leading-none font-semibold select-none sm:text-[19rem]">
            ZALES
          </span>

          <img
            src="/images/marble-hand.jpg"
            alt="Marble hand sculpture wearing a gold ring"
            className="absolute bottom-0 left-1/2 h-[400px] -translate-x-1/2 object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)] sm:h-[520px]"
            style={{ mixBlendMode: "lighten" }}
          />

          <div
            className="floaty border-cream absolute top-[24%] left-[6%] w-36 overflow-hidden rounded-2xl border-4 shadow-[0_25px_60px_rgba(0,0,0,0.6)] sm:w-48"
            style={{ "--rot": "-8deg" } as CSSProperties}
          >
            <img
              src="https://images.pexels.com/photos/8433476/pexels-photo-8433476.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400"
              alt="Hand preview with stacked gold rings"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="floaty border-cream absolute top-[12%] right-[7%] w-32 overflow-hidden rounded-2xl border-4 shadow-[0_25px_60px_rgba(0,0,0,0.6)] sm:w-44"
            style={{ "--rot": "9deg", animationDelay: "1.4s" } as CSSProperties}
          >
            <img
              src="https://images.pexels.com/photos/8433597/pexels-photo-8433597.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400"
              alt="Hand preview with delicate gold rings"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
