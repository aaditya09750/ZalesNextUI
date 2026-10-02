import { useState } from "react";

export function useCarousel(length: number, initial = 0) {
  const [index, setIndex] = useState(initial);

  const prev = (index + length - 1) % length;
  const next = (index + 1) % length;

  const goToPrev = () => setIndex(prev);
  const goToNext = () => setIndex(next);
  const goTo = (i: number) => setIndex(i);

  return { index, prev, next, goToPrev, goToNext, goTo } as const;
}
