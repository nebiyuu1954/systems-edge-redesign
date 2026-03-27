import { useEffect, useRef, useState, type CSSProperties, type ReactElement, type ReactNode } from 'react';

export interface FadeInOnScrollProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  style?: CSSProperties;
  onVisibleChange?: (isVisible: boolean) => void;
}

const FadeInOnScroll = ({ children, delayMs = 300, className = '', style, onVisibleChange }: FadeInOnScrollProps): ReactElement => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (typeof onVisibleChange === 'function') onVisibleChange(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    observer.observe(node);

    // Fallback: if the element is already within the viewport (above the fold)
    // some browsers may not trigger the observer immediately. Check its
    // bounding rect and mark visible if it's reasonably within view.
    const rect = node.getBoundingClientRect();
    const viewportThreshold = window.innerHeight * 0.92; // similar to rootMargin
    if (rect.top <= viewportThreshold) {
      setIsVisible(true);
      if (typeof onVisibleChange === 'function') onVisibleChange(true);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${delayMs}ms`, ...style }}
      className={`transform transition-all duration-700 ease-out will-change-transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
