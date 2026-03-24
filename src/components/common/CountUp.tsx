import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  from?: number;
  to: number;
  durationMs?: number;
  delayMs?: number;
  className?: string;
}

export default function CountUp({ from = 0, to, durationMs = 1200, delayMs = 0, className }: CountUpProps) {
  const [value, setValue] = useState<number>(from);
  const nodeRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // start animation
            if (!startedRef.current) {
              startedRef.current = true;
              const start = performance.now() + delayMs;

              const step = (now: number) => {
                const elapsed = Math.max(0, now - start);
                const progress = Math.min(1, elapsed / durationMs);
                const eased = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress; // subtle ease
                const current = Math.round(from + (to - from) * eased);
                setValue(current);

                if (progress < 1) {
                  rafRef.current = requestAnimationFrame(step);
                }
              };

              rafRef.current = requestAnimationFrame(step);
            }
          } else {
            // when scrolled out, reset so it can run again when re-entering
            if (rafRef.current) {
              cancelAnimationFrame(rafRef.current);
              rafRef.current = null;
            }
            startedRef.current = false;
            setValue(from);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [from, to, durationMs, delayMs]);

  return (
    <span ref={(n) => {
      nodeRef.current = n;
    }} className={className}>
      {value}
    </span>
  );
}
