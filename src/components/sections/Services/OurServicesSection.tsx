import type { ReactElement } from 'react';
import FadeInOnScroll from '../../common/FadeInOnScroll';

export interface ServiceItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  reversedOnDesktop?: boolean;
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
        <FadeInOnScroll>
          <h2 id="our-services-heading" className="mb-6 text-center text-4xl font-bold text-primary dark:text-white md:text-5xl">
            {heading}
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <p className="mb-20 max-w-[800px] text-center text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </FadeInOnScroll>

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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
