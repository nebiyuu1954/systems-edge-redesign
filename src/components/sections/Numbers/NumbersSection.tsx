import { useEffect, useRef, useState, type ReactElement } from 'react';
import FadeInOnScroll from '../../common/FadeInOnScroll';

export interface NumbersSectionProps {}

const NumbersSection = (_props: NumbersSectionProps): ReactElement => {
  // Targets
  const USERS_TARGET = 6_800_000; // changed from 10M to 6.8M
  const SUPPORT_TARGET = 24; // will display as "24/7"
  const UPTIME_TARGET = 99.9;
  const CENTERS_TARGET = 3;

  const [usersValue, setUsersValue] = useState<number>(0);
  const [supportValue, setSupportValue] = useState<number>(0);
  const [uptimeValue, setUptimeValue] = useState<number>(0);
  const [centersValue, setCentersValue] = useState<number>(0);

  const startedRef = useRef(false);
  const animCancelRef = useRef<Array<() => void>>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  const formatUsers = (v: number) => {
    try {
      if (v >= 1_000_000) {
        return new Intl.NumberFormat('en', { notation: 'compact', compactDisplay: 'short', maximumFractionDigits: 1 }).format(v);
      }
      return new Intl.NumberFormat('en', { maximumFractionDigits: 0 }).format(Math.round(v));
    } catch {
      return Math.round(v).toString();
    }
  };

  const animate = (
    start: number,
    end: number,
    duration: number,
    onUpdate: (val: number) => void,
    decimals = 0,
    onComplete?: () => void
  ) => {
    let rafId = 0;
    const startTime = performance.now();
    const diff = end - start;
    const step = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = start + diff * eased;
      onUpdate(parseFloat(current.toFixed(decimals)));
      if (t < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        if (onComplete) onComplete();
      }
    };
    rafId = requestAnimationFrame(step);
    // return cancel function
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  };

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof window === 'undefined') return;

    // Use a slightly lower threshold and a small negative bottom rootMargin so
    // the section triggers reliably on small viewports (mobile) where the
    // section height can exceed the viewport height.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // start/ restart animations
            // clear any previous cancels
            animCancelRef.current.forEach((c) => c());
            animCancelRef.current = [];
            startedRef.current = true;
            // Two-phase animation with coordinated slow phase end time.
            // Midpoints (when slow phase starts)
            const MID_USERS = 5_800_000; // users slow start at 5.8M
            const MID_SUPPORT = 12; // support slow start at 12 (of 24)
            const MID_UPTIME = 89.9; // uptime slow start at 89.9%
            const MID_CENTERS = 1; // centers slow start at 1

            // Fast durations (ms) for the first phase
            const FAST_USERS = 1200;
            const FAST_SUPPORT = 500;
            const FAST_UPTIME = 1000;
            const FAST_CENTERS = 1000;

            // Total time from start -> when all slow phases should finish (ms)
            const TOTAL_FINISH_MS = 4000;

            const slowDurationFor = (fastDur: number) => Math.max(300, TOTAL_FINISH_MS - fastDur);

            // Users two-phase
            const cancelFastUsers = animate(0, MID_USERS, FAST_USERS, setUsersValue, 0, () => {
              const cancelSlowUsers = animate(MID_USERS, USERS_TARGET, slowDurationFor(FAST_USERS), setUsersValue, 0);
              animCancelRef.current.push(cancelSlowUsers);
            });

            // Support two-phase
            const cancelFastSupport = animate(0, MID_SUPPORT, FAST_SUPPORT, setSupportValue, 0, () => {
              const cancelSlowSupport = animate(MID_SUPPORT, SUPPORT_TARGET, slowDurationFor(FAST_SUPPORT), setSupportValue, 0);
              animCancelRef.current.push(cancelSlowSupport);
            });

            // Uptime two-phase
            const cancelFastUptime = animate(0, MID_UPTIME, FAST_UPTIME, setUptimeValue, 1, () => {
              const cancelSlowUptime = animate(MID_UPTIME, UPTIME_TARGET, slowDurationFor(FAST_UPTIME), setUptimeValue, 1);
              animCancelRef.current.push(cancelSlowUptime);
            });

            // Centers two-phase
            const cancelFastCenters = animate(0, MID_CENTERS, FAST_CENTERS, setCentersValue, 0, () => {
              const cancelSlowCenters = animate(MID_CENTERS, CENTERS_TARGET, slowDurationFor(FAST_CENTERS), setCentersValue, 0);
              animCancelRef.current.push(cancelSlowCenters);
            });

            animCancelRef.current.push(cancelFastUsers, cancelFastSupport, cancelFastUptime, cancelFastCenters);
          } else {
            // left the viewport - cancel animations and reset values so they re-run on re-entry
            animCancelRef.current.forEach((c) => c());
            animCancelRef.current = [];
            startedRef.current = false;
            setUsersValue(0);
            setSupportValue(0);
            setUptimeValue(0);
            setCentersValue(0);
          }
        });
      },
      { threshold: [0.25, 0.5], rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      animCancelRef.current.forEach((c) => c());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-background dark:bg-backgroundDark " data-purpose="impact-numbers-section" aria-labelledby="numbers-heading">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col items-center mb-20 text-center">
          <FadeInOnScroll>
              <h1 id="numbers-heading" className="h2-settings text-brand-navy mb-4 dark:text-white">
              Our Impact in Numbers
              </h1>
          </FadeInOnScroll>

          <div className="w-12 h-0.5 bg-brand-teal" aria-hidden />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Users */}
          <div className="flex flex-col items-center text-center" data-purpose="stat-block">
            <div className="relative -top-5 mb-6 text-brand-teal">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span className="card-1-title-settings text-[56px] md:text-[80px] font-bold text-brand-navy block mb-4">
              {formatUsers(usersValue)}{usersValue >= 1_000_000 ? '+' : ''}
            </span>
            <p className="h3-settings mt-5 text-gray-600 text-lg font-normal dark:text-slate-400">Total Users Supported Systems</p>
          </div>

          {/* Managed Support */}
          <div className="flex flex-col items-center text-center" data-purpose="stat-block">
            <div className="relative -top-5 mb-6 text-brand-teal">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span className="card-1-title-settings text-[56px] md:text-[80px] font-bold text-brand-navy block mb-4">{Math.round(supportValue)}/7</span>
            <p className="h3-settings mt-5 text-gray-600 text-lg font-normal dark:text-slate-400">Managed Support</p>
          </div>

          {/* System Uptime */}
          <div className="flex flex-col items-center text-center" data-purpose="stat-block">
            <div className="relative -top-5 mb-6 text-brand-teal">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="m12 14 4-4" />
                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
              </svg>
            </div>
            <span className="card-1-title-settings text-[56px] md:text-[80px] font-bold text-brand-navy block mb-4">{uptimeValue.toFixed(1)}%</span>
            <p className="h3-settings mt-5 text-gray-600 text-lg font-normal dark:text-slate-400">System Uptime</p>
          </div>

          {/* Delivery Centers */}
          <div className="flex flex-col items-center text-center" data-purpose="stat-block">
            <div className="relative -top-5 mb-6 text-brand-teal">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <line x1="2" x2="22" y1="12" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <span className="card-1-title-settings text-[56px] md:text-[80px] font-bold text-brand-navy block mb-4">{Math.round(centersValue)}</span>
            <p className="h3-settings mt-5 text-gray-600 text-lg font-normal dark:text-slate-400">Global Delivery Centers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
