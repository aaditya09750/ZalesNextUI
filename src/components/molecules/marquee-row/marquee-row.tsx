import type { CSSProperties } from "react";
import { cn } from "@/utils/cn";
import { TESTIMONIAL_PEOPLE } from "@/constants/community";
import { TestimonialCard } from "@/components/molecules/testimonial-card";

export function MarqueeRow({ reverse, offset }: { reverse?: boolean; offset?: boolean }) {
  return (
    <div
      className={cn("marquee-hover overflow-hidden", offset && "-ml-24 w-[calc(100%+6rem)]")}
      style={{
        maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div
        className={cn("marquee-track flex w-max py-2.5", reverse && "reverse")}
        style={{ "--speed": reverse ? "54s" : "46s" } as CSSProperties}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 gap-5 pr-5">
            {TESTIMONIAL_PEOPLE.map((p, i) => (
              <TestimonialCard
                key={i}
                name={p.name}
                img={p.img}
                flip={(i + half + (reverse ? 1 : 0)) % 2 === 0}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
