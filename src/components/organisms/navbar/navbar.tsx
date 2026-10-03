"use client";

import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { NAV_LINKS } from "@/constants/navigation";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-line/80 bg-ink-2/95 relative z-40 flex w-full items-center justify-between gap-3 rounded-full border py-2 pr-2 pl-4 shadow-2xl backdrop-blur-xl sm:gap-4 sm:py-2.5 sm:pr-2.5 sm:pl-6">
      <a href="#" className="font-display text-cream text-lg font-semibold tracking-wide">
        ZALES
      </a>

      <ul className="hidden items-center gap-1 lg:flex">
        {NAV_LINKS.map((item, i) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-[13px] transition-colors duration-300",
                i === 0
                  ? "bg-cream/10 text-cream"
                  : "text-cream/60 hover:bg-cream/5 hover:text-cream",
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <button
          aria-label="Search"
          className="border-line text-cream/70 hover:border-tan hover:text-tan grid size-10 place-items-center rounded-full border transition-colors"
        >
          <Search className="size-4" />
        </button>
        <a
          href="#shop"
          className="border-line text-cream hover:border-tan hover:text-tan hidden rounded-full border px-5 py-2.5 text-[13px] transition-colors sm:block"
        >
          Shop
        </a>
        <a
          href="#newsletter"
          className="bg-cream text-ink hover:bg-tan rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors"
        >
          Login
        </a>
        <button
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="border-line text-cream grid size-10 place-items-center rounded-full border lg:hidden"
        >
          {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-line bg-ink-2 absolute inset-x-0 top-full mt-2 rounded-3xl border p-4 lg:hidden">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-cream/80 hover:bg-cream/5 hover:text-cream block rounded-xl px-4 py-3 text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
