import { cn } from "@/utils/cn";

export function TestimonialCard({ name, img, flip }: { name: string; img: string; flip: boolean }) {
  return (
    <article
      className={cn(
        "border-line bg-ink-2 hover:border-tan/50 flex w-[320px] shrink-0 items-center gap-5 rounded-[2rem] border p-3 pr-7 transition-colors duration-300 sm:w-[360px]",
        flip && "flex-row-reverse pr-3 pl-7",
      )}
    >
      <img src={img} alt={name} className="size-20 shrink-0 rounded-full object-cover" />
      <div>
        <p className="text-cream/85 text-[13px] leading-relaxed">
          &ldquo;The quality of the jewelry is excellent, I&apos;ll buy again&rdquo;
        </p>
        <p className="text-mute mt-1.5 text-xs italic">{name}</p>
      </div>
    </article>
  );
}
