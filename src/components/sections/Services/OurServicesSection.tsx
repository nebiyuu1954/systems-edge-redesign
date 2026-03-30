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
    <section id="services" className="w-full bg-background px-6 py-16 lg:px-12 lg:py-24 dark:bg-backgroundDark" aria-labelledby="our-services-heading">
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
                        ? 'bg-primary text-white shadow-md'
                          : 'border border-slate-200 bg-background text-slate-700 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary dark:border-slate-700 dark:bg-backgroundDarkOne bg-backgroundOne  dark:text-slate-300 dark:hover:text-white'
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
                className={`flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-servicesCardLight p-6 shadow-md dark:border-slate-800 dark:bg-servicesCardDark md:p-0 ${
                  activeService.reversedOnDesktop ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                <div className="min-h-[280px] w-full md:w-[40%]">
                  <img alt={activeService.imageAlt} className="h-full w-full object-cover" src={activeService.imageSrc} loading="lazy" />
                </div>
                <div className="flex w-full flex-col justify-center p-8 md:w-[60%] lg:p-12 bg-backgroundOne dark:bg-backgroundDarkOne text-white">
                  <FadeInOnScroll delayMs={80}>
                    <h2 className="card-2-title-settings mb-4 text-black dark:text-white text-center md:text-left">{activeService.title}</h2>
                  </FadeInOnScroll>
                  <FadeInOnScroll delayMs={160}>
                    <p className="card-1-tittle-settings text-black dark:text-white text-center md:text-left">{activeService.description}</p>
                  </FadeInOnScroll>

                  <FadeInOnScroll delayMs={240}>
                    <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start md:gap-3">
                      <button
                        type="button"
                        className="button-2-settings inline-flex items-center bg-primary text-white shadow-sm transform transition duration-150 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/40"
                        aria-label={`Get started with ${activeService.title}`}
                      >
                        {`Get started`}
                      </button>

                      {activeService.learnMoreHref ? (
                        activeService.learnMoreHref.startsWith('/') ? (
                          <Link
                            to={activeService.learnMoreHref}
                            className="button-2-settings inline-flex items-center border border-slate-200 bg-secondary text-white shadow-sm transform transition duration-150 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-secondary dark:text-white"
                            aria-label={`Learn more about ${activeService.title}`}
                          >
                            Learn More
                          </Link>
                        ) : (
                          <a
                            href={activeService.learnMoreHref}
                            className="button-2-settings inline-flex items-center border border-slate-200 bg-secondary text-white shadow-sm transform transition duration-150 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-secondary dark:text-white"
                            aria-label={`Learn more about ${activeService.title}`}
                          >
                            Learn More
                          </a>
                        )
                      ) : (
                        <button
                          type="button"
                          className="button-2-settings inline-flex items-center border border-slate-200 bg-secondary text-white shadow-sm transform transition duration-150 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-secondary dark:text-white"
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
