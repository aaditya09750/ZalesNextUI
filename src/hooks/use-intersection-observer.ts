import { useEffect, useRef } from "react";

export function useIntersectionObserver(
  options: IntersectionObserverInit = { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        el.classList.add("in");
        io.disconnect();
      }
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
