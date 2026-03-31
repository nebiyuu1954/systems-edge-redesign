import { useEffect, useState, type ReactElement, type ReactNode } from 'react';
import SectionHeading from '../../common/SectionHeading';

import dubaiImg from '../../../assets/city images/dubai.jpg';
import addisImg from '../../../assets/city images/Addis abeba.jpeg';
import arlingtonImg from '../../../assets/city images/Arlington, VA.jpg';

interface LocationItem {
  id: string;
  country: string;
  city: string;
  tagline: string;
  address: string;
  email: string;
  officeHours: string;
  imageSrc: string;
  imageAlt: string;
  mapX: number;
  mapY: number;
}

export interface GlobalLocationsSections2Props {
  autoSwitchMs?: number;
  className?: string;
  heading?: ReactNode;
  label?: ReactNode;
  center?: boolean;
  headingClassName?: string;
  delayMsHeading?: number;
  contentClassName?: string;
  headerNode?: ReactNode;
}

/*
  Control variables (change these to fine-tune pin placement responsively):
  - MAP_BASE_WIDTH / MAP_BASE_HEIGHT: the reference pixel size used to author pin coordinates (default in this file is 800x400)
  - PIN_BASE_PX: base pin size in pixels (used for scaling active vs idle)

  Workflow: keep each location's `nx`/`ny` as normalized coordinates (0..1).
  This ensures the pin positions scale correctly on all screen sizes without changing the switching logic.
*/
export const MAP_BASE_WIDTH = 800;
export const MAP_BASE_HEIGHT = 400;
// Change this value to grow/shrink pins globally (pixels)
export const PIN_BASE_PX = 15;

const LOCATIONS: (LocationItem & { nx: number; ny: number })[] = [
  {
    id: 'dubai',
    country: 'United Arab Emirates',
    city: 'Dubai',
    tagline: 'Middle East Business & Connectivity Hub',
    address: 'Office DMC-BLD05-DQ-F03-030, Dubai Media City Building 5 - Al Sufouh, Internet City',
    email: 'Info@systemedgesolutions.com',
    officeHours: 'Sun-Thu, 8am-6pm',
    imageSrc: dubaiImg,
    imageAlt: 'Dubai skyline',
    mapX: 452,
    mapY: 168,
    nx: 500 / MAP_BASE_WIDTH,
    ny: 173 / MAP_BASE_HEIGHT,
  },
  {
    id: 'addis-ababa',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    tagline: 'East Africa Region & Hub Delivery center',
    address: 'Bole Kefle Ketema, Woreda 05, Megenagna (Near Lancet Hospital), Addis Ababa',
    email: 'Info@systemedgesolutions.com',
    officeHours: 'Mon-Fri, 8:30am-5pm',
    imageSrc: addisImg,
    imageAlt: 'Addis Ababa skyline',
    mapX: 478,
    mapY: 216,
    nx: 490 / MAP_BASE_WIDTH,
    ny: 200 / MAP_BASE_HEIGHT,
  },
  {
    id: 'arlington',
    country: 'United States of America',
    city: 'Arlington, VA',
    tagline: 'North America Outsourcing Hub',
    address: '1530 Wilson Boulevard Office number 636, Arlington, VA 222091',
    email: 'Info@systemedgesolutions.com',
    officeHours: 'Mon-Fri, 8:30am-5pm',
    imageSrc: arlingtonImg,
    imageAlt: 'Arlington skyline',
    mapX: 228,
    mapY: 145,
    nx: 140 / MAP_BASE_WIDTH,
    ny: 130 / MAP_BASE_HEIGHT,
  },
];

const WORLD_MAP_IMAGE_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png';

const GlobalLocationsSections2 = ({
  autoSwitchMs = 4200,
  className,
  heading,
  label,
  center = true,
  headingClassName,
  delayMsHeading,
  contentClassName,
  headerNode,
}: GlobalLocationsSections2Props): ReactElement => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (LOCATIONS.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % LOCATIONS.length);
    }, autoSwitchMs);

    return () => window.clearInterval(timer);
  }, [autoSwitchMs]);

  const activeLocation = LOCATIONS[activeIndex];

  return (
    <section className={`w-full dark:bg-backgroundDark ${className ?? ''}`} data-purpose="locations-section-variant-two">
      <div className={contentClassName ?? 'py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'}>
        {/* Optional heading injected by parent (e.g., About page). If the parent passes a full `headerNode`, render it instead. */}
        {headerNode ? (
          headerNode
        ) : (
          <div className="mb-16">
            <SectionHeading
              {...(label ? { label } : {})}
              heading={heading ?? 'Global Locations'}
              description={'Our offices and delivery centers around the world.'}
              center={center}
              headingClassName={`${headingClassName ?? ''} h2-settings`}
              descriptionClassName="h3-settings"
              delayMsHeading={delayMsHeading}
            />
            <div className={`w-80 h-1.5 bg-secondary mt-2 rounded-full ${center ? 'mx-auto' : ''}`} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-servicesCardLight relative order-1 lg:order-1" data-purpose="map-visualization">
          <div className="relative w-full min-h-[440px] overflow-hidden rounded-3xl border border-slate-200">
            <img
              src={WORLD_MAP_IMAGE_URL}
              alt="World map"
              className="absolute inset-0 h-full w-full object-cover object-center saturate-0 contrast-125 opacity-90"
            />

            <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:9px_9px] opacity-25" />

            {LOCATIONS.map((location, index) => {
              const isActive = index === activeIndex;
              // use normalized coords (nx, ny) multiplied by the MAP_BASE_* constants
              // and rendered as percentages so pins align correctly at any map size
              const leftPercent = (location.nx || location.mapX / MAP_BASE_WIDTH) * 100;
              const topPercent = (location.ny || location.mapY / MAP_BASE_HEIGHT) * 100;

              const basePx = PIN_BASE_PX;
              const sizePx = isActive ? basePx * 1.4 : basePx * 0.85;

              return (
                <div
                  key={location.id}
                  className="absolute"
                  style={{ left: `${leftPercent}%`, top: `${topPercent}%`, transform: 'translate(-50%, -50%)' }}
                  aria-hidden
                >
                  <span
                    style={{ width: `${sizePx}px`, height: `${sizePx}px` }}
                    className={`block rounded-full ${isActive ? 'bg-secondary animate-pulse shadow-[0_0_12px_rgba(0,128,128,0.6)]' : 'bg-slate-500/80'}`}
                  />
                  {isActive ? (
                    <span
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      style={{ width: `${Math.max(36, basePx * 4.5)}px`, height: `${Math.max(36, basePx * 4.5)}px`, border: '1px solid rgba(0,128,128,0.35)' }}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="order-2 lg:order-2 flex flex-col justify-center items-center lg:items-start" data-purpose="office-details-card">
          <div className="bg-servicesCardLight dark:bg-slate-900 rounded-3xl shadow-lg dark:shadow-none overflow-hidden w-full max-w-md border border-slate-100 dark:border-slate-800 transition-all duration-500">
            <div className="h-48 w-full relative">
              <img alt={activeLocation.imageAlt} className="w-full h-full object-cover transition-opacity duration-500" src={activeLocation.imageSrc} />
            </div>

            <div className="p-8">
              <header className="mb-6">
                <h2 className="card-1-title-settings text-secondary mb-1">{activeLocation.city}</h2>
                <p className="card-1-description-settings text-secondary uppercase tracking-wide">{activeLocation.country}</p>
                <p className="h4-settings mt-2 text-slate-600 dark:text-slate-300">{activeLocation.tagline}</p>
              </header>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="h4-settings text-slate-600 leading-relaxed dark:text-slate-300">{activeLocation.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <a className="h4-settings text-slate-600 hover:text-secondary transition-colors dark:text-slate-300" href={`mailto:${activeLocation.email}`}>
                    {activeLocation.email}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <p className="h4-settings text-slate-600 dark:text-slate-300">{activeLocation.officeHours}</p>
                </div>
              </div>

              <div className="mt-10 flex justify-center gap-2" data-purpose="carousel-pagination" aria-hidden>
                {LOCATIONS.map((location, index) => (
                  <span
                    key={location.id}
                    className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-6 bg-secondary' : 'w-2 bg-slate-200 dark:bg-slate-700'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalLocationsSections2;