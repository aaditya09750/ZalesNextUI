import { cn } from "@/utils/cn";

export function NavLink({
  label,
  href,
  isActive,
}: {
  label: string;
  href: string;
  isActive?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "rounded-full px-4 py-2 text-[13px] transition-colors duration-300",
        isActive ? "bg-cream/10 text-cream" : "text-cream/60 hover:bg-cream/5 hover:text-cream",
      )}
    >
      {label}
    </a>
  );
}
