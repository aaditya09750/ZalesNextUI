const S = { fill: "none", stroke: "currentColor" } as const;

export function DiamondRound({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <g {...S} strokeWidth="1">
        <circle cx="32" cy="32" r="26" opacity="0.9" />
        <circle cx="32" cy="32" r="11" opacity="0.9" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4 + Math.PI / 8;
          return (
            <g key={i} opacity="0.75">
              <line
                x1={32 + Math.cos(a) * 11}
                y1={32 + Math.sin(a) * 11}
                x2={32 + Math.cos(a) * 26}
                y2={32 + Math.sin(a) * 26}
              />
              <line
                x1={32 + Math.cos(a + Math.PI / 8) * 11}
                y1={32 + Math.sin(a + Math.PI / 8) * 11}
                x2={32 + Math.cos(a) * 26}
                y2={32 + Math.sin(a) * 26}
              />
              <line
                x1={32 + Math.cos(a - Math.PI / 8) * 11}
                y1={32 + Math.sin(a - Math.PI / 8) * 11}
                x2={32 + Math.cos(a) * 26}
                y2={32 + Math.sin(a) * 26}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
