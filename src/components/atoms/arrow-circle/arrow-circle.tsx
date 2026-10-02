import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import type { Direction, Variant } from "@/types";

export function ArrowCircle({
  dir = "right",
  variant = "dark",
  onClick,
  className,
  label,
}: {
  dir?: Direction;
  variant?: Variant;
  onClick?: () => void;
  className?: string;
  label?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label ?? (dir === "right" ? "Next" : "Previous")}
      onClick={onClick}
      className={cn(
        "group grid size-11 shrink-0 place-items-center rounded-full transition-all duration-300 active:scale-90",
        variant === "dark" &&
          "border-line bg-ink-2/60 text-cream hover:bg-tan hover:text-ink hover:border-tan border",
        variant === "light" && "bg-cream text-ink hover:bg-tan hover:text-ink",
        variant === "tan" && "bg-tan text-ink hover:bg-cream",
        className,
      )}
    >
      {dir === "right" ? (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      ) : (
        <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
    </button>
  );
}
