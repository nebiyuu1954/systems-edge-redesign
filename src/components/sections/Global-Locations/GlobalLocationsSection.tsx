import { useEffect, useState, type ReactElement } from 'react';
import FadeInOnScroll from '../../common/FadeInOnScroll';

import dubaiImg from '../../../assets/city images/dubai.jpg';
import addisImg from '../../../assets/city images/Addis abeba.jpeg';
import arlingtonImg from '../../../assets/city images/Arlington, VA.jpg';

const GlobalLocationsSection = (): ReactElement => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    if (typeof window === 'undefined') return;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (!isMobile) return;
    setExpandedId((prev) => (prev === idx ? null : idx));
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 767px)');
    if (!mq.matches) return; // only active on small screens

    const grid = document.querySelector('[data-purpose="locations-grid"]');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>('article'));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = cards.indexOf(entry.target as HTMLElement);
          if (idx === -1) return;
          // Only expand when the card is fully visible (or very close to it)
          const ratio = entry.intersectionRatio ?? 0;
          if (entry.isIntersecting && ratio >= 0.99) {
            setExpandedId(idx);
          }
        });
      },
      { threshold: 1.0 }
    );

    cards.forEach((c) => observer.observe(c));

    // Collapse overlays while the user is actively scrolling on mobile.
    let scrollTimeout: number | null = null;
    const onScroll = () => {
      // collapse immediately while scrolling
      setExpandedId(null);

      if (scrollTimeout) window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        // scrolling stopped; pick a fully-visible card (if any)
        const vh = window.innerHeight || document.documentElement.clientHeight;
        let found: number | null = null;
        cards.forEach((c, idx) => {
          const rect = (c as Element).getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= vh) found = idx;
        });
        if (found !== null) setExpandedId(found);
      }, 150);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <section id="locations" className="py-24 px-4 sm:px-6 lg:px-8 bg-background text-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-purpose="section-header">
          <FadeInOnScroll>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 dark:text-white">Global Locations</h2>
          </FadeInOnScroll>

          <FadeInOnScroll delayMs={120}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed dark:text-slate-400">
              Connecting industries across continents with a robust mesh of high-performance data centers.
            </p>
          </FadeInOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end" data-purpose="locations-grid">
          {/* Dubai */}
          <article
            onClick={() => toggleExpand(0)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleExpand(0); } }}
            tabIndex={0}
            aria-expanded={expandedId === 0}
            className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer md:cursor-auto"
          >
            <div className="h-64 overflow-hidden relative">
              <img alt="Dubai skyline" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={dubaiImg} />

              <div className={`absolute inset-0 flex items-start justify-start p-6 text-left text-white transition-all duration-300 ${expandedId === 0 ? 'bg-black/60 opacity-100' : 'bg-black/0 opacity-0'} group-hover:bg-black/60 group-hover:opacity-100`}>
                <div className="max-w-[420px] space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                    </svg>
                    <div>
                      <p className="text-base font-bold text-white">Address</p>
                      <p className="text-sm font-semibold text-white">Office DMC-BLD05-DQ-F03-030, Dubai Media City Building 5 - Al Sufouh, Internet City</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <div>
                      <p className="text-base font-bold text-white">Email</p>
                      <p className="text-sm font-semibold text-white">Info@systemedgesolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 1a11 11 0 1 0 .001 22.001A11 11 0 0 0 12 1zm1 12.59V7h-2v6.59l5.15 3.06.99-1.62L13 13.59z" />
                    </svg>
                    <div>
                      <p className="text-base font-bold text-white">Office hours</p>
                      <p className="text-sm font-semibold text-white">Sun–Thu, 8am–6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-2 dark:text-white">United Arab Emirates</span>
              <h3 className="text-2xl font-bold text-primary mb-2 dark:text-white">Dubai</h3>
              <p className="text-gray-500 text-sm dark:text-slate-400">Regional Business &amp; Connectivity Hub</p>
            </div>
          </article>

          {/* Addis Ababa (Featured/Center) */}
          <article
            onClick={() => toggleExpand(1)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleExpand(1); } }}
            tabIndex={0}
            aria-expanded={expandedId === 1}
            className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl transform md:scale-105 z-10 transition-transform hover:-translate-y-3 cursor-pointer md:cursor-auto"
          >
            <div className="h-72 overflow-hidden relative">
              <img alt="Addis Ababa skyline" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={addisImg} />

              <div className={`absolute inset-0 flex items-start justify-start p-6 text-left text-white transition-all duration-300 ${expandedId === 1 ? 'bg-black/60 opacity-100' : 'bg-black/0 opacity-0'} group-hover:bg-black/60 group-hover:opacity-100`}>
                <div className="max-w-[480px] space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                    </svg>
                    <div>
                      <p className="text-base font-bold text-white">Address</p>
                      <p className="text-sm font-semibold text-white">Bole Kefle Ketema, Woreda 05, Megenagna (Near Lancet Hospital), Addis Ababa</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <div>
                      <p className="text-base font-bold text-white">Email</p>
                      <p className="text-sm font-semibold text-white">Info@systemedgesolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 1a11 11 0 1 0 .001 22.001A11 11 0 0 0 12 1zm1 12.59V7h-2v6.59l5.15 3.06.99-1.62L13 13.59z" />
                    </svg>
                    <div>
                      <p className="text-base font-bold text-white">Office hours</p>
                      <p className="text-sm font-semibold text-white">Mon–Fri, 8:30am–5pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10">
              <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-2 dark:text-white">Ethiopia</span>
              <h3 className="text-3xl font-bold text-primary mb-2 dark:text-white">Addis Ababa</h3>
              <p className="text-gray-500 text-base dark:text-slate-400">East Africa Regional Hub</p>
            </div>
          </article>

          {/* Arlington, VA */}
          <article
            onClick={() => toggleExpand(2)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleExpand(2); } }}
            tabIndex={0}
            aria-expanded={expandedId === 2}
            className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer md:cursor-auto"
          >
            <div className="h-64 overflow-hidden relative">
              <img alt="Arlington skyline" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={arlingtonImg} />

              <div className={`absolute inset-0 flex items-start justify-start p-6 text-left text-white transition-all duration-300 ${expandedId === 2 ? 'bg-black/60 opacity-100' : 'bg-black/0 opacity-0'} group-hover:bg-black/60 group-hover:opacity-100`}>
                <div className="max-w-[420px] space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                    </svg>
                    <div>
                      <p className="text-base font-bold text-white">Address</p>
                      <p className="text-sm font-semibold text-white">1530 Wilson Boulevard Office number 636, Arlington, VA 222091</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <div>
                      <p className="text-base font-bold text-white">Email</p>
                      <p className="text-sm font-semibold text-white">Info@systemedgesolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 1a11 11 0 1 0 .001 22.001A11 11 0 0 0 12 1zm1 12.59V7h-2v6.59l5.15 3.06.99-1.62L13 13.59z" />
                    </svg>
                    <div>
                      <p className="text-base font-bold text-white">Office hours</p>
                      <p className="text-sm font-semibold text-white">Mon–Fri, 8:30am–5pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-2 dark:text-white">United States of America</span>
              <h3 className="text-2xl font-bold text-primary mb-2 dark:text-white">Arlington, VA</h3>
              <p className="text-gray-500 text-sm dark:text-slate-400">Government &amp; Federal Technology Corridor</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default GlobalLocationsSection;
