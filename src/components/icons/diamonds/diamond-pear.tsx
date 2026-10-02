const S = { fill: "none", stroke: "currentColor" } as const;

export function DiamondPear({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <g {...S} strokeWidth="1">
        <path d="M32 6c4 10 16 16 16 30a16 16 0 0 1-32 0C16 22 28 16 32 6Z" opacity="0.9" />
        <path d="M32 22c2 5 7 8 7 14a7 7 0 0 1-14 0c0-6 5-9 7-14Z" opacity="0.9" />
        <line x1="32" y1="6" x2="32" y2="22" opacity="0.7" />
        <line x1="25" y1="29" x2="17" y2="32" opacity="0.7" />
        <line x1="39" y1="29" x2="47" y2="32" opacity="0.7" />
        <line x1="27" y1="42" x2="22" y2="49" opacity="0.7" />
        <line x1="37" y1="42" x2="42" y2="49" opacity="0.7" />
      </g>
    </svg>
  );
}
