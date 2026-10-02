const S = { fill: "none", stroke: "currentColor" } as const;

export function DiamondOval({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <g {...S} strokeWidth="1">
        <ellipse cx="32" cy="32" rx="15" ry="26" opacity="0.9" />
        <ellipse cx="32" cy="32" rx="6.5" ry="11" opacity="0.9" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          return (
            <line
              key={i}
              opacity="0.7"
              x1={32 + Math.cos(a) * 6.5}
              y1={32 + Math.sin(a) * 11}
              x2={32 + Math.cos(a) * 15}
              y2={32 + Math.sin(a) * 26}
            />
          );
        })}
      </g>
    </svg>
  );
}
