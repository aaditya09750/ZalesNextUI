import type { ComponentType } from "react";
import { cn } from "@/utils/cn";

export function ShapeButton({
  id,
  label,
  Icon,
  isActive,
  onClick,
}: {
  id: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button key={id} onClick={onClick} className="group relative flex flex-col items-center gap-5">
      <span
        className={cn(
          "bg-ink-2 grid place-items-center rounded-full border transition-all duration-500",
          isActive
            ? "border-tan/70 text-cream size-28 shadow-[0_0_70px_rgba(183,140,108,0.28)]"
            : "border-line text-mute group-hover:border-cream/40 group-hover:text-cream/80 size-24",
        )}
      >
        <Icon className={cn("transition-all duration-500", isActive ? "size-16" : "size-11")} />
      </span>
      <span
        className={cn(
          "text-sm tracking-wide transition-colors duration-300",
          isActive ? "text-cream font-medium" : "text-mute group-hover:text-cream/70",
        )}
      >
        {label}
      </span>
    </button>
  );
}
