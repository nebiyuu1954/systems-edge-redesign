import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop(): null {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scrollTo = (location.state as any)?.scrollTo as string | undefined;

    // Jump to top first on navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    if (scrollTo) {
      // Try to find the element and scroll to it. Retry a few times in case content is still rendering.
      const attemptScroll = (tries = 6, delay = 80) => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        if (tries > 0) setTimeout(() => attemptScroll(tries - 1, delay), delay);
      };

      setTimeout(() => attemptScroll(), 50);
    }
  }, [location]);

  return null;
}
