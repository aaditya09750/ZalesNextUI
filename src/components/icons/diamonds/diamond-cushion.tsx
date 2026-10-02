const S = { fill: "none", stroke: "currentColor" } as const;

export function DiamondCushion({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <g {...S} strokeWidth="1">
        <rect x="10" y="10" width="44" height="44" rx="12" opacity="0.9" />
        <rect x="23" y="23" width="18" height="18" rx="4" opacity="0.9" />
        <line x1="23" y1="23" x2="12" y2="12" opacity="0.7" />
        <line x1="41" y1="23" x2="52" y2="12" opacity="0.7" />
        <line x1="23" y1="41" x2="12" y2="52" opacity="0.7" />
        <line x1="41" y1="41" x2="52" y2="52" opacity="0.7" />
        <line x1="32" y1="23" x2="32" y2="10" opacity="0.7" />
        <line x1="32" y1="41" x2="32" y2="54" opacity="0.7" />
        <line x1="23" y1="32" x2="10" y2="32" opacity="0.7" />
        <line x1="41" y1="32" x2="54" y2="32" opacity="0.7" />
      </g>
    </svg>
  );
}
