import { useEffect, useRef, useState, type ReactElement } from 'react';
import FadeInOnScroll from '../../common/FadeInOnScroll';

const leaders = [
  {
    id: 'leader-michael',
    name: 'Michael Chen',
    position: 'Chief Executive Officer',
    description:
      'Michael leads strategy and corporate growth, guiding global delivery and partnerships to drive measurable business outcomes.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpSONM_grHJ1Nt_zP4h5600qTlLhazCsgVh0S31uU6aVHM2y-kdv1ouhIcGLQ6z2A7P-hnKk4Rif-ys2w0wzEN1ERUXQmdw2zVM9N6t2mQSjncbD4zW20DOHvz_p-eHaMtHxN2fP8vk4MV_YCs1Esh_Psi6xcAnG5jegPXbU-qh1eyC9N_reEsRRrJInYM51qgvxGli690YUEiAW0cdcP6083B0NPJvI37EvEMYCWj1ZsOYPK0C5SiY-m_I_UIx9rTIr1OSHXUNnjp',
    imageAlt: 'Michael Chen - CEO',
  },
  {
    id: 'leader-sarah',
    name: 'Sarah Johnson',
    position: 'Chief Technology Officer',
    description:
      'Sarah directs our technology roadmap, ensuring platform reliability, security, and engineering excellence across programs.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQrG4FH_L5IJRWs47iNwFyaI7k6FH8k37gHAhu9Ob9By7U_-XzgP83qpLrQCwChbc1mB1c5FObVMRxbLXrSzdSUtgB3R4yNogpmbILQ2uQY2mk0bq80HxmQlFZ2TjdjcK4ij0qMA2seE1w56bnLLLkpl16r2qj-leZqwUxxg9ERtXEYgB2y4JnbeSaetuuh6Sn0nFMMQoSVBJwnFrgt2dgZa6ApnwoacwpOkfGK8mYxZPFGizeycQjGaPoqAXjqWWqhfCGNQ8C-qy5',
    imageAlt: 'Sarah Johnson - CTO',
  },
  {
    id: 'leader-david',
    name: 'David Okafor',
    position: 'VP of Engineering',
    description:
      'David oversees delivery teams and engineering practices, focusing on scalable architectures and high-performing teams.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOpr2DzKDhAa4ujx2yg8T1KhQaI8mh4gPLS5GroPKixmVEv49nHTFLP9El-4K1OEUT2bltWoYpK4yJDnFeWmjIlRAu2a2Ks6Wj2dz89s8cWqUGDRfZjiIl4HJUWmYOWgESULOZn1cSpBxLer0KWy7jZ0kj5BSsPQzKLSwwqeFiEBdrLIurGR3kTmOIm9d0tftP_TMZFUQkZ7Q0cAke0sW23d55-seW2NJkxfbkOCAAa71m9C_ziDrTeFyQg_9p7uqOAii7Xr6X_jGU',
    imageAlt: 'David Okafor - VP of Engineering',
  },
];

const LeadershipSection = (): ReactElement => {
  // Heights (tweak these values to control mobile rendering)
  const COLLAPSED_HEIGHT = '120px'; // collapsed overlay height
  const EXPANDED_HEIGHT = '35%'; // expanded overlay height (can be px or %)
  const EXPANDED_TEXT_MAXHEIGHT = '200px'; // max height for hidden description when expanded
    // Transition control (tweak to change reveal speed/easing)
    const TRANSITION_MS = 800; // duration in milliseconds
    const TRANSITION_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [expandedById, setExpandedById] = useState<Record<string, boolean>>({});

  const isMobile = (): boolean => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-id');
          if (!id) return;
          // only auto-expand on small screens
          if (isMobile()) {
            setExpandedById((prev) => ({ ...prev, [id]: entry.isIntersecting }));
          }
        });
      },
      { threshold: 0.6 }
    );

    // observe current refs
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    const onResize = () => {
      // collapse all when switching to desktop
      if (!isMobile()) setExpandedById({});
    };

    window.addEventListener('resize', onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const toggleExpand = (id: string) => {
    if (!isMobile()) return; // keep desktop hover behavior
    setExpandedById((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="leadership" className="w-full bg-background flex items-center justify-center py-12 mt-12" aria-labelledby="leadership-heading">
      <div className="w-[90%] max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <FadeInOnScroll>
            <h2 id="leadership-heading" className="text-deep-blue text-2xl md:text-3xl font-bold uppercase tracking-widest dark:text-white">
              Our Leadership
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll delayMs={120}>
            <p className="mt-4 mb-8 max-w-[800px] mx-auto text-center text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Our leadership team combines deep domain expertise with global delivery experience to help organizations transform with confidence.
            </p>
          </FadeInOnScroll>
        </header>

        <div className="flex flex-wrap justify-center gap-6">
          {leaders.map((l, idx) => {
            const expanded = Boolean(expandedById[l.id]);
            return (
              <article
                key={l.id}
                data-id={l.id}
                      ref={(el) => { cardRefs.current[idx] = el; }}
                onClick={() => toggleExpand(l.id)}
                className="group relative w-[360px] md:w-[380px] bg-white leadership-card rounded-lg shadow-md overflow-hidden h-[600px]"
              >
                <div className="absolute inset-0 h-full w-full bg-gray-100 portrait-container">
                  <img alt={l.imageAlt} src={l.imageSrc} className="w-full h-full object-cover" />
                </div>

                {/* Info overlay: absolute, expands on hover to 50% (h-1/2) without pushing image */}
                <div
                  className={`absolute left-0 right-0 bottom-0 ease-out overflow-hidden flex flex-col items-center px-4 bg-primary text-white group-hover:h-1/2 group-focus-within:h-1/2`}
                  style={{
                    height: expanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT,
                    transition: `height ${TRANSITION_MS}ms ${TRANSITION_EASING}, opacity ${TRANSITION_MS}ms ${TRANSITION_EASING}`,
                  }}
                >
                  <div className="w-full flex flex-col items-center justify-center pt-6 transition-all duration-300">
                    <span className="text-[20px] md:text-[22px] font-bold leading-tight text-center transition-all duration-200 group-hover:text-[22px] md:group-hover:text-[24px]">
                      {l.name}
                    </span>
                    <span className="text-[13px] md:text-[14px] opacity-90 text-center mt-1 transition-all duration-200 group-hover:text-[14px] md:group-hover:text-[15px]">
                      {l.position}
                    </span>
                    <p
                      className={`mt-3 text-sm md:text-base text-white/95 max-w-[88%] text-center transition-all duration-300 overflow-hidden group-hover:opacity-100 group-hover:mt-3 group-hover:text-base md:group-hover:text-lg`}
                      style={{
                          opacity: expanded ? 1 : 0,
                        maxHeight: expanded ? EXPANDED_TEXT_MAXHEIGHT : 0,
                          transition: `max-height ${TRANSITION_MS}ms ${TRANSITION_EASING}, opacity ${TRANSITION_MS}ms ${TRANSITION_EASING}`,
                      }}
                    >
                      {l.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
