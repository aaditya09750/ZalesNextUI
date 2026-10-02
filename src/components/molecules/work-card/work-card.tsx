import { cn } from "@/utils/cn";

export function WorkCard({
  title,
  tag,
  img,
  isCenter,
}: {
  title: string;
  tag?: string;
  img: string;
  isCenter: boolean;
}) {
  return (
    <article
      className={cn(
        "group border-line relative shrink-0 overflow-hidden rounded-2xl border transition-all duration-500",
        isCenter
          ? "h-[400px] w-[240px] sm:h-[440px] sm:w-[260px]"
          : "h-[320px] w-[200px] opacity-90 sm:h-[350px] sm:w-[210px]",
      )}
    >
      <img
        src={img}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="from-ink/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      {isCenter && tag && (
        <span className="bg-cream/90 text-ink absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-medium">
          {tag}
        </span>
      )}
      <h3
        className={cn(
          "text-cream absolute",
          isCenter
            ? "bottom-5 left-1/2 w-full -translate-x-1/2 text-center text-sm"
            : "bottom-4 left-4 text-[10px] tracking-[0.18em] uppercase",
        )}
      >
        {isCenter ? title : `THE ${title.replace("The ", "").toUpperCase()}`}
      </h3>
    </article>
  );
}
