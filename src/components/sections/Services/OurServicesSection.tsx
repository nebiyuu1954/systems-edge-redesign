import { useEffect, useRef, useState } from 'react';
import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import FadeInOnScroll from '../../common/FadeInOnScroll';
import SectionHeading from '../../common/SectionHeading';

export interface ServiceItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  reversedOnDesktop?: boolean;
  learnMoreHref?: string;
}

export interface OurServicesSectionProps {
  heading: string;
  description: string;
  services: ServiceItem[];
}

const OurServicesSection = ({ heading, description, services }: OurServicesSectionProps): ReactElement => {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const activeService = services[activeServiceIndex];
  const AUTO_ROTATE_MS = 4200;
  const timerRef = useRef<number | null>(null);

  const startTimer = () => {
    if (timerRef.current != null) return;
    if (services.length <= 1) return;
    timerRef.current = window.setInterval(() => {
      setActiveServiceIndex((currentIndex) => (currentIndex + 1) % services.length);
    }, AUTO_ROTATE_MS) as unknown as number;
  };

  const stopTimer = () => {
    if (timerRef.current != null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    // start timer when component mounts or services length changes
    startTimer();
    return () => stopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services.length]);

  return (
    <section id="services" className="w-full bg-backgroundOne px-6 py-16 lg:px-12 lg:py-24 dark:bg-backgroundDark" aria-labelledby="our-services-heading">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <SectionHeading
          id="our-services-heading"
          heading={heading}
          description={description}
          headingClassName="h2-settings"
          descriptionClassName="h3-settings"
        />

        <div className="flex w-full max-w-6xl flex-col gap-8">
          <FadeInOnScroll delayMs={80}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4" role="tablist" aria-label="Service categories">
              {services.map((service, index) => {
                const isActive = index === activeServiceIndex;

                return (
                  <button
                    key={service.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`service-panel-${service.id}`}
                    id={`service-tab-${service.id}`}
                    onClick={() => setActiveServiceIndex(index)}
                    className={`h4-settings rounded-full px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 sm:px-5 sm:py-2.5 ${
                      isActive
                        ? 'border border-primary bg-white text-primary shadow-md'
                        : 'border border-primary bg-primary text-white hover:-translate-y-0.5 hover:bg-white hover:text-primary dark:border-primary dark:bg-primary dark:text-white dark:hover:bg-white dark:hover:text-primary'
                    }`}
                  >
                    {service.title}
                  </button>
                );
              })}
            </div>
          </FadeInOnScroll>
          
          {activeService ? (
            <FadeInOnScroll key={activeService.id} delayMs={120}>
              <article
                role="tabpanel"
                id={`service-panel-${activeService.id}`}
                aria-labelledby={`service-tab-${activeService.id}`}
                onMouseEnter={() => stopTimer()}
                onMouseLeave={() => startTimer()}
                className="relative flex flex-col items-center overflow-hidden rounded-3xl border border-slate-200/50 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 md:flex-row md:items-stretch"
              >
                <div
                  className={`relative min-h-[350px] w-full overflow-hidden md:w-[55%] ${
                    activeService.reversedOnDesktop ? 'md:order-last' : ''
                  }`}
                >
                  <img
                    alt={activeService.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    src={activeService.imageSrc}
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 hidden from-black/20 to-transparent md:block ${
                      activeService.reversedOnDesktop ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
                    }`}
                  />
                </div>
                <div
                  className={`z-10 -mt-12 flex w-[92%] flex-col justify-center rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-black/5 dark:border-slate-700 dark:bg-slate-900 md:mt-0 md:w-[50%] md:p-12 lg:p-16 ${
                    activeService.reversedOnDesktop
                      ? 'md:-mr-12 md:ml-0 md:rounded-r-[3rem] md:rounded-l-2xl'
                      : 'md:-ml-12 md:mr-0 md:rounded-l-[3rem] md:rounded-r-2xl'
                  }`}
                >
                  <FadeInOnScroll delayMs={80}>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-4xl">{activeService.title}</h2>
                  </FadeInOnScroll>
                  <FadeInOnScroll delayMs={160}>
                    <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{activeService.description}</p>
                  </FadeInOnScroll>

                  <FadeInOnScroll delayMs={240}>
                    <div className="mt-10 flex flex-wrap gap-4">
                      <Link
                        to="/contact-us"
                        className="inline-flex items-center rounded-full border-2 border-transparent bg-primary px-8 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:border-primary hover:scale-105 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 dark:hover:border-white dark:hover:bg-background dark:hover:text-white"
                        aria-label={`Get started with ${activeService.title}`}
                      >
                        Get started
                      </Link>

                      {activeService.learnMoreHref ? (
                        activeService.learnMoreHref.startsWith('/') ? (
                          <Link
                            to={activeService.learnMoreHref}
                            className="inline-flex items-center rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition duration-300 hover:bg-white hover:border-secondary hover:text-secondary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:text-white dark:hover:border-white dark:hover:bg-background"
                            aria-label={`Learn more about ${activeService.title}`}
                          >
                            Learn More
                          </Link>
                        ) : (
                          <a
                            href={activeService.learnMoreHref}
                            className="inline-flex items-center rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition duration-300 hover:bg-white hover:border-secondary hover:text-secondary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:text-white dark:hover:border-white dark:hover:bg-background"
                            aria-label={`Learn more about ${activeService.title}`}
                          >
                            Learn More
                          </a>
                        )
                      ) : (
                        <button
                          type="button"
                          className="inline-flex items-center rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition duration-300 hover:bg-white hover:border-secondary hover:text-secondary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:text-white dark:hover:border-white dark:hover:bg-background"
                          aria-label={`Learn more about ${activeService.title}`}
                        >
                          Learn More
                        </button>
                      )}
                    </div>
                  </FadeInOnScroll>
                </div>
              </article>
            </FadeInOnScroll>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
