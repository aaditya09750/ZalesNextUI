import { cn } from "@/utils/cn";
import { Sparkle } from "./sparkle";

export function HalfDisc({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "bg-tan relative inline-grid size-9 shrink-0 place-items-center overflow-hidden rounded-full",
        className,
      )}
      aria-hidden
    >
      <span className="bg-cream absolute inset-y-0 left-1/2 w-1/2" />
      <Sparkle className="text-ink relative z-10 size-4" />
    </span>
  );
}
