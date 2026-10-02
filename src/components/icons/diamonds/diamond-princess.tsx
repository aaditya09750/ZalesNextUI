const S = { fill: "none", stroke: "currentColor" } as const;

export function DiamondPrincess({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <g {...S} strokeWidth="1">
        <rect x="12" y="12" width="40" height="40" opacity="0.9" />
        <rect x="24" y="24" width="16" height="16" opacity="0.9" />
        <line x1="12" y1="12" x2="24" y2="24" opacity="0.7" />
        <line x1="52" y1="12" x2="40" y2="24" opacity="0.7" />
        <line x1="12" y1="52" x2="24" y2="40" opacity="0.7" />
        <line x1="52" y1="52" x2="40" y2="40" opacity="0.7" />
        <line x1="24" y1="24" x2="40" y2="40" opacity="0.55" />
        <line x1="40" y1="24" x2="24" y2="40" opacity="0.55" />
      </g>
    </svg>
  );
}
