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
  return (
    <section id="services" className="w-full bg-background px-6 py-16 lg:px-12 lg:py-24" aria-labelledby="our-services-heading">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <SectionHeading id="our-services-heading" heading={heading} description={description} />

        <div className="flex w-full max-w-6xl flex-col gap-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900 md:p-0 ${
                service.reversedOnDesktop ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="min-h-[280px] w-full md:w-[40%]">
                <img alt={service.imageAlt} className="h-full w-full object-cover" src={service.imageSrc} loading="lazy" />
              </div>
              <div className="flex w-full flex-col justify-center p-8 md:w-[60%] lg:p-12">
                <FadeInOnScroll delayMs={index * 80}>
                  <h3 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">{service.title}</h3>
                </FadeInOnScroll>
                <FadeInOnScroll delayMs={index * 80 + 120}>
                  <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">{service.description}</p>
                </FadeInOnScroll>

                <FadeInOnScroll delayMs={index * 80 + 240}>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transform transition duration-150 ease-out hover:scale-105 hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      aria-label={`Get started with ${service.title}`}
                    >
                      {`Get started`}
                    </button>

                    {service.learnMoreHref ? (
                      service.learnMoreHref.startsWith('/') ? (
                        <Link
                          to={service.learnMoreHref}
                          className="inline-flex items-center rounded-md border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm transform transition duration-150 ease-out hover:scale-105 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-slate-800 dark:text-white"
                          aria-label={`Learn more about ${service.title}`}
                        >
                          Learn More
                        </Link>
                      ) : (
                        <a
                          href={service.learnMoreHref}
                          className="inline-flex items-center rounded-md border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm transform transition duration-150 ease-out hover:scale-105 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-slate-800 dark:text-white"
                          aria-label={`Learn more about ${service.title}`}
                        >
                          Learn More
                        </a>
                      )
                    ) : (
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm transform transition duration-150 ease-out hover:scale-105 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-slate-800 dark:text-white"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Learn More
                      </button>
                    )}
                  </div>
                </FadeInOnScroll>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
