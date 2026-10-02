export function Sunburst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" className={className} aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        const x1 = 24 + Math.cos(a) * 7;
        const y1 = 24 + Math.sin(a) * 7;
        const x2 = 24 + Math.cos(a) * (i % 2 ? 15 : 20);
        const y2 = 24 + Math.sin(a) * (i % 2 ? 15 : 20);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1.6" strokeLinecap="round" />
        );
      })}
      <circle cx="24" cy="24" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
