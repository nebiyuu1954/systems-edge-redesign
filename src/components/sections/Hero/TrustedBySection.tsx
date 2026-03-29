import { useEffect, useRef, useState, type ReactElement, type TransitionEvent } from 'react';

export interface TrustedPartnerLogo {
  id: string;
  logoSrc: string;
  logoAlt: string;
  // optional message and institution info shown when this logo is centered
  message?: string;
  personName?: string;
  institution?: string;
}

export interface TrustedBySectionProps {
  heading: string;
  partnerLogos: TrustedPartnerLogo[];
  // fallback message/institution when the centered logo has no message
  fallbackMessage?: string;
  fallbackPersonName?: string;
  fallbackInstitution?: string;
  // carousel settings
  visibleCount?: number; // default 3
  autoPlay?: boolean; // default true
  intervalMs?: number; // default 3000
  slideDurationMs?: number; // default 900
  transitionEasing?: string; // default cubic-bezier(0.22, 1, 0.36, 1)
}

const TrustedBySection = ({
  heading,
  partnerLogos,
  fallbackMessage,
  fallbackInstitution,
  visibleCount = 3,
  autoPlay = true,
  intervalMs = 3000,
  slideDurationMs = 900,
  transitionEasing = 'cubic-bezier(0.22, 1, 0.36, 1)',
}: TrustedBySectionProps): ReactElement => {
  const n = partnerLogos.length;
  const [effectiveVisibleCount, setEffectiveVisibleCount] = useState(visibleCount);
  const safeVisibleCount = Math.max(1, effectiveVisibleCount);
  const [trackIndex, setTrackIndex] = useState(safeVisibleCount); // starts at first real slide window
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const isResettingRef = useRef(false);
  const autoplayRef = useRef<number | null>(null);

  const centerOffset = Math.floor(safeVisibleCount / 2);
  const isScrollable = n > safeVisibleCount;

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.matchMedia('(max-width: 767px)').matches) {
        setEffectiveVisibleCount(1);
        return;
      }

      if (window.matchMedia('(max-width: 1023px)').matches) {
        setEffectiveVisibleCount(Math.min(2, visibleCount));
        return;
      }

      setEffectiveVisibleCount(visibleCount);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => {
      window.removeEventListener('resize', updateVisibleCount);
    };
  }, [visibleCount]);

  const leftClones = n > 0 ? partnerLogos.slice(-safeVisibleCount) : [];
  const rightClones = n > 0 ? partnerLogos.slice(0, safeVisibleCount) : [];
  const trackLogos = [...leftClones, ...partnerLogos, ...rightClones];

  const clearAutoplay = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const startAutoplay = () => {
    if (!autoPlay || !isScrollable || isPaused || isResettingRef.current) return;
    clearAutoplay();
    autoplayRef.current = window.setInterval(() => {
      setTrackIndex((prev) => prev + 1);
    }, intervalMs);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      clearAutoplay();
    };
  }, [autoPlay, intervalMs, isPaused, isScrollable]);

  // keep start position aligned when visible count or list changes
  useEffect(() => {
    setIsTransitionEnabled(true);
    setTrackIndex(safeVisibleCount);
  }, [n, safeVisibleCount]);

  const handleTrackTransitionEnd = (event: TransitionEvent<HTMLDivElement>): void => {
    // Ignore bubbled transition events from child cards/images.
    if (event.target !== event.currentTarget) return;
    if (!isScrollable) return;

    // Some browsers report vendor-prefixed names or slightly different property strings.
    const prop = event.propertyName || '';
    if (!prop.toLowerCase().includes('transform') && prop !== '') return;

    // If we've advanced past the last real slide window, reset back to the real start.
    // Use >= to guard against skipped transitionend events that let the index grow past the boundary.
    if (trackIndex >= n + safeVisibleCount) {
      isResettingRef.current = true;
      clearAutoplay();
      setIsTransitionEnabled(false);
      setTrackIndex(safeVisibleCount);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          isResettingRef.current = false;
          setIsTransitionEnabled(true);
          startAutoplay();
        });
      });
    }
  };

  // centered logo is based on real index, even while moving across clones
  const centeredRealIndex = n === 0 ? -1 : ((trackIndex - safeVisibleCount + centerOffset) % n + n) % n;
  const centered = centeredRealIndex >= 0 ? partnerLogos[centeredRealIndex] : null;
  const centeredTrackIndex = n === 0 ? -1 : trackIndex + centerOffset;

  // layout calculations
  const trackItemWidthPercent = trackLogos.length > 0 ? 100 / trackLogos.length : 100;
  const translateStepPercent = trackLogos.length > 0 ? 100 / trackLogos.length : 0;
  const translatePercent = -(trackIndex * translateStepPercent);

  return (
    <section className="w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-24 bg-backgroundOne dark:bg-backgroundDarkOne" aria-labelledby="trusted-by-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="hidden sm:block lg:col-span-7">
            <h3 id="trusted-by-heading" className="h2-settings mb-6 text-primary dark:text-white">
              {heading}
            </h3>

            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className={isTransitionEnabled ? 'flex transition-transform' : 'flex'}
                style={{
                  width: `${(trackLogos.length * 100) / safeVisibleCount}%`,
                  transform: `translateX(${translatePercent}%)`,
                  transitionDuration: `${slideDurationMs}ms`,
                  transitionTimingFunction: transitionEasing,
                }}
                onTransitionEnd={handleTrackTransitionEnd}
                aria-live="off"
              >
                {trackLogos.map((partner, i) => {
                  const isCentered = i === centeredTrackIndex;
                  return (
                    <div
                      key={`${partner.id}-${i}`}
                      style={{ width: `${trackItemWidthPercent}%` }}
                      className="flex flex-none items-center justify-center px-2 sm:px-3"
                    >
                      <div
                        className={
                          `transform transition-all duration-500 flex min-h-[120px] w-full items-center justify-center rounded-xl bg-white px-4 py-6 opacity-90 shadow-sm dark:bg-backgroundDark sm:min-h-[132px] sm:px-6 sm:py-8 ` +
                          (isCentered
                            ? 'z-10 scale-105 border-2 border-secondary ring-4 ring-secondary/40 ring-offset-2 ring-offset-white dark:ring-offset-slate-900'
                            : 'scale-100 border border-slate-100 dark:border-slate-700')
                        }
                        aria-hidden={!isCentered}
                      >
                        <img
                          src={partner.logoSrc}
                          alt={partner.logoAlt}
                          className={
                            isCentered
                              ? 'h-20 w-auto max-w-[90%] shrink-0 object-contain sm:h-24'
                              : 'h-16 w-auto max-w-[90%] shrink-0 object-contain sm:h-20'
                          }
                          loading="lazy"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:mt-16">
            <div className="relative ml-0 rounded-2xl border-l-4 border-secondary bg-white p-6 shadow-md dark:bg-backgroundDark sm:p-8 md:ml-4 md:p-12">
              <div className="absolute -left-[14px] top-1/2 hidden h-0 w-0 -translate-y-1/2 border-y-[12px] border-y-transparent border-r-[12px] border-r-secondary md:block" />
              <div className="absolute -left-[10px] top-1/2 z-10 hidden h-0 w-0 -translate-y-1/2 border-y-[10px] border-y-transparent border-r-[10px] border-r-white dark:border-r-slate-800 md:block" />

              {/* Mobile-only: show the centered partner logo above the message so content stacks in one column */}
              {centered ? (
                <div className="block sm:hidden mb-4">
                  <img
                    src={centered.logoSrc}
                    alt={centered.logoAlt}
                    loading="lazy"
                    className="mx-auto h-20 w-auto object-contain"
                  />
                </div>
              ) : null}

              <p className="h3-settings mb-8 text-slate-600 dark:text-slate-300">
                "{centered?.message ?? fallbackMessage ?? ''}"
              </p>

              {centered?.institution ?? fallbackInstitution ? (
                <p className="-mt-4 text-sm font-semibold text-secondary">
                  {centered?.institution ?? fallbackInstitution}
                </p>
              ) : null}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
