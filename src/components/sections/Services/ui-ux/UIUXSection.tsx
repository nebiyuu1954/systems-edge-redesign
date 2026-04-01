import { useEffect, useRef, useState } from 'react';
import type { ReactElement, SVGProps } from 'react';
import FadeInOnScroll from '../../../common/FadeInOnScroll';
import SectionHeading from '../../../common/SectionHeading';
import ServicesDescriptionCard from '../components/ServicesDescriptionCard';

export interface UIUXSectionProps {
}

interface CapabilityItem {
  id: string;
  iconLabel: string;
  title: string;
  description: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

interface CyclePoint {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  labelClassName: string;
  nodeClassName: string;
}

const CheckIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M5 13l4 4L19 7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LayersIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M12 4l8 4-8 4-8-4 8-4z" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 12l8 4 8-4" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 16l8 4 8-4" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GridIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M4 4h7v7H4V4zM13 4h7v7h-7V4zM4 13h7v7H4v-7zM13 13h7v7h-7v-7z" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PolylineIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M4 16l5-6 4 3 7-9" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 4h-4v4" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SparklesIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M12 3l1.8 4.4L18 9l-4.2 1.6L12 15l-1.8-4.4L6 9l4.2-1.6L12 3z" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DevicesIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M4 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 8h3a1 1 0 011 1v8a1 1 0 01-1 1h-3" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 18h4" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SpeedIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M13 2L4 13h6v9l10-13h-6V2z" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const valuePoints = [
  { id: 'cognitive-load', text: 'Cognitive Load Optimization' },
  { id: 'atomic-system', text: 'Atomic Design System Architecture' },
  { id: 'prototyping-testing', text: 'High-Fidelity Prototyping & Testing' },
];

const capabilities: CapabilityItem[] = [
  {
    id: 'user-research',
    iconLabel: 'layers',
    title: 'User Research',
    description: 'In-depth qualitative analysis to uncover hidden pain points and behavioral patterns within your user base.',
    Icon: LayersIcon,
  },
  {
    id: 'information-architecture',
    iconLabel: 'grid_view',
    title: 'Information Architecture',
    description: 'Mapping complex data flows into logical, hierarchical structures that empower user navigation.',
    Icon: GridIcon,
  },
  {
    id: 'interaction-design',
    iconLabel: 'polyline',
    title: 'Interaction Design',
    description: 'Creating meaningful transitions and micro-interactions that provide clear feedback and delight.',
    Icon: PolylineIcon,
  },
  {
    id: 'visual-identity',
    iconLabel: 'auto_awesome',
    title: 'Visual Identity',
    description: 'Establishing a cohesive aesthetic language that aligns with your brand\'s core values and enterprise authority.',
    Icon: SparklesIcon,
  },
  {
    id: 'responsive-frameworks',
    iconLabel: 'devices',
    title: 'Responsive Frameworks',
    description: 'Developing adaptable design systems that maintain consistency across mobile, web, and internal portals.',
    Icon: DevicesIcon,
  },
  {
    id: 'usability-testing',
    iconLabel: 'speed',
    title: 'Usability Testing',
    description: 'Iterative testing cycles to validate design decisions against real-world performance metrics.',
    Icon: SpeedIcon,
  },
];

const capabilityImages: string[] = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCmSlKgeIO9Y_ymtcMXBPkowhgalJ-UAijy1K42QtvrW6NTJQGIfD4AZ4tqATL30Q0PBc2DxNhsFaDWXmAX946qKMQbRYFw__mTzN3LYWeQckmX2jm_5SCRzJqpN3pmUgo037ydJ2u-DOM3xWFQL8ZcEMzx0c90J0ZvZoZV4TlDfJU4rWDE1qHzSg4tZhDz482w43uDfDEhBrgTZQ76WgCivbAg3JuFrDi0YvDEZTm181MrertL0zqe8qtpChPHFP16S4_nRgBDy6M3',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDD15qxSb_88j3Iz_Ws4XZ3fOjuLpkEEKa7_MVHCT6iHWBVkNWIztRbHcfBUNFjO9ki09WJC3aQw8rv1IeJjwb-l0p-XpgQWqNGFFUlCGfmtBgvSkW5vm79P5MRl2eYIZ1ZR89NbAVevR_YDtlYFEurFINRL2O9sPVnQbi1kT1G162eh_gHEbQGnL3ta8HOqGpgTcOaMdGm1CpwZ5ixhwuvX4k7Iw-_oj_yhtOmVlEYs7dyQy66uzyWGOVcgy-DVWch9z1AilLSzqYA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBWzlyCe3cbppZOrp4YeM5oCBme49RluT9BDf85ah-TJ0uO_1LF-b95trqTGGwVvmsHW8wvsNftgO49XrKo5Rcw55ErjvzRi7PcEeZ919QtAB2yWa0NIbI-8__hO4tUsjpERRGlMPihWy_1PQg3loU-tk9_vfyegtvIKL5w9Bt1VGg49SqBQJnxV24yFeXA69-zuH04egUCMB_eI-teVAxb82DHaHXKwt4HjJc2uaPhPVXS8ttg8G1pXIs8b9svm7A87Vd-pQ33V5Da',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA2509FE3XGrYb9ZXi_6Bkyu5dpZRVZsQcWE3mg5Ps3PjFtxZVJoOzUWJjqjJ8NOKd-JiMOtvjZpOqQkp5_Sm8xUwcv8ndeQt7K60SIzlZZ-ZmGCSJiVdqwrrsGtxUSUxtKU1LjYp_6I5CiG7kHYLlcfs3g-V65jL-bMOIM8LS3ieQ3OzWbqdBvtnYb0sPQg7B2XdrZFxt7lBuf-G9fXTWbZcJShDdGL8XCpUNFQeOHbUupec78Kavtrb9zQnZvVhvAQZA3ngCNoSsT',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAOhi2YwSCuLxxi_Fwbar1ve2BK9Z05rGayawuv3Q0RNnG0iRvOEmZtwx5qUGZmF-BmrQCZskykNS2eC6FOiNSHAkIwP9Y58YVdiC4VeQ4Z6AeJBGM_uIVOWWkcbAj28nD_fJZsM67JTKy7pKSjCFVP3O2q8lYHzV_JHu8y6vGtp8LovTzDAtlH-BcUaY3V1P9ggZWLoW7umnDCuTbR67tLXyJbAXabJcah83dLgLuuaeNKL7-Y8EbO3oitfoDfwj8_DCGOmRtePgjV',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCqIxupEMMEUudIMQJmUoP1rl1A_7YW2ECJaZU-aNSmWM8r4wfeR2rDWugdpBiusPQZ996qcVpBl8HvNCpMuaR3Ke-nceP8MT3rwoQqGkiaKk2NH0NUxIe24V1-wkTkiNvezBV3M9E5wGKcdi6AcaJZFbqiB5Bd5NDcpiCamLByxu4FselDFK4vvmvF93Nl0DYi7Mz3N3uHMxb4n1o6r9xLX_OshzpXzuhwo22q9llwieFZZ0Q3jojt3qH45g7nUnGgxEASwTLwTiDS',
];

const cyclePoints: CyclePoint[] = [
  {
    id: 'empathize',
    icon: 'psychology',
    title: '01. Empathize',
    subtitle: 'User Interviews & Data',
    labelClassName: 'left-1/2 top-20 -translate-x-1/2 text-center md:top-24',
    nodeClassName: 'left-1/2 top-2 -translate-x-1/2 -translate-y-1/2 md:top-0',
  },
  {
    id: 'ideate',
    icon: 'lightbulb',
    title: '02. Ideate',
    subtitle: 'Wireframing & Mapping',
    labelClassName: 'right-16 top-1/2 -translate-y-1/2 text-right md:right-24',
    nodeClassName: 'right-2 top-1/2 translate-x-1/2 -translate-y-1/2 md:right-0',
  },
  {
    id: 'test',
    icon: 'biotech',
    title: '03. Test',
    subtitle: 'Usability Lab & Prototypes',
    labelClassName: 'bottom-20 left-1/2 -translate-x-1/2 text-center md:bottom-24',
    nodeClassName: 'bottom-2 left-1/2 -translate-x-1/2 translate-y-1/2 md:bottom-0',
  },
  {
    id: 'deliver',
    icon: 'check_circle',
    title: '04. Deliver',
    subtitle: 'Production Ready Assets',
    labelClassName: 'left-20 top-1/2 -translate-y-1/2 text-left md:left-28',
    nodeClassName: 'left-[20px] top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-0',
  },
];

const UIUXSection = (): ReactElement => {
  const [cycleVisible, setCycleVisible] = useState<boolean[]>(() => cyclePoints.map(() => false));
  const cycleSectionRef = useRef<HTMLElement | null>(null);
  const cyclePrevTopRef = useRef<number | null>(null);
  const cycleTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const node = cycleSectionRef.current;
    if (!node) return;

    const clearTimers = () => {
      cycleTimersRef.current.forEach((timer) => clearTimeout(timer));
      cycleTimersRef.current = [];
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const top = entry.boundingClientRect.top;
        const previousTop = cyclePrevTopRef.current ?? top;
        const isScrollingDown = top < previousTop;
        cyclePrevTopRef.current = top;

        clearTimers();

        if (entry.isIntersecting) {
          const order = isScrollingDown ? [...cyclePoints.keys()] : [...cyclePoints.keys()].reverse();

          order.forEach((pointIndex, staggerIndex) => {
            const timer = setTimeout(() => {
              setCycleVisible((previous) => {
                const next = [...previous];
                next[pointIndex] = true;
                return next;
              });
            }, staggerIndex * 140);

            cycleTimersRef.current.push(timer);
          });
        } else {
          setCycleVisible(cyclePoints.map(() => false));
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, []);

  return (
    <>
      <section id="ux-ui-overview" className="bg-background dark:bg-backgroundDark px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="h1-settings mb-8 text-primary lg:text-6xl">
                Architecting the <br />
                <span className="text-secondary">Digital Future</span>.
              </h1>
              <p className="h3-settings mb-8 text-slate-600 dark:text-slate-300">
                We bridge the gap between complex enterprise systems and intuitive human experiences. Our methodology prioritizes structural integrity and high-fidelity precision to ensure your
                product scales without friction.
              </p>
              <ul className="card-1-title-settings mb-10 space-y-4">
                {valuePoints.map((point, idx) => (
                  <FadeInOnScroll key={point.id} delayMs={idx * 80} className="block">
                    <li className="flex items-start">
                      <span className="mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <span className="font-medium text-slate-700  dark:text-white">{point.text}</span>
                    </li>
                  </FadeInOnScroll>
                ))}
              </ul>
            </div>

            <div className="relative hidden md:block lg:col-span-5">
              <div className="absolute -inset-4 rounded-3xl bg-secondary/10 blur-2xl" aria-hidden="true" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn-JnT2dcz-J9bb1hum4KVC4uQlCr9UirntxQ2rnaVTAOKoo1OFVZDYCtF9Bw492V8lNKILdeUQN7R8783w89L9WVOSBYJA3C5kKSnfKtR6JbRwb74-hy0er4mVu_Vf5BXjW6KZrHNl56kgaSL39YJPObRfqxMFGp_lB7PLgBXuG8ya5fVLTXeZpuOMtrlbckg7gy1uC7TLHrmsp56y9PB0VTdkTX0V05AcEckhYozx6uDRlYFidFgHS9QKSbitnE_v8AFMrS6h0s2"
                alt="Designer working on high-fidelity prototype"
                className="relative h-[500px] w-full rounded-2xl border-4 border-white dark:border-slate-700 object-cover shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-backgroundOne py-24 dark:bg-backgroundDarkOne">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12">
            <SectionHeading
              id="ux-ui-capabilities"
              heading="Core Capabilities"
              description="Capabilities built to translate enterprise complexity into clear, usable experiences."
              headingClassName="h2-settings"
              descriptionClassName="h3-settings max-w-xl !mb-4"
            />
            <div className="w-20 h-1.5 bg-secondary mx-auto mt-2 mb-8 rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <ServicesDescriptionCard
                key={capability.id}
                title={capability.title}
                description={capability.description}
                imageSrc={capabilityImages[index]}
                Icon={capability.Icon}
                delayMs={index * 80}
              />
            ))}
          </div>
        </div>
      </section>

      <section ref={cycleSectionRef} className="overflow-hidden bg-surface px-4 py-20 sm:px-6 sm:py-24 dark:bg-backgroundDark">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center sm:mb-20 lg:mb-24">
            <h2 className="h2-settings mb-6 text-primary">The Iterative Cycle</h2>
            <p className="h3-settings mx-auto max-w-2xl text-on-surface-variant dark:text-slate-300">
              We believe great design isn&apos;t a destination, but a continuous loop of refinement. Our &apos;Cycle&apos; methodology ensures your product evolves with your users.
            </p>
          </div>

          <div className="relative flex items-center justify-center py-10 sm:py-16">
            <div className="relative flex aspect-square w-[min(92vw,360px)] items-center justify-center sm:w-[min(90vw,440px)] md:w-full md:max-w-4xl">
              <div className="absolute inset-0 rounded-full border-[18px] border-surface-container-low sm:border-[24px] md:border-[40px] dark:border-slate-700" />
              <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
                <defs>
                  <linearGradient id="gradient-loop" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="#110f5e" stopOpacity="1" />
                    <stop offset="100%" stopColor="#006a6a" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient-loop)" strokeWidth="0.5" className="infinite-loop-path opacity-40" />
              </svg>

              <div
                className={`z-10 flex h-48 w-48 flex-col items-center justify-center rounded-full bg-primary p-5 text-center text-on-primary shadow-2xl transition-all duration-700 ease-out will-change-transform sm:h-56 sm:w-56 sm:p-6 md:h-64 md:w-64 md:p-8 ${
                  cycleVisible.some(Boolean) ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
                }`}
              >
                <span className="mb-2 text-xs font-bold uppercase tracking-[0.2em] opacity-60">Core Focus</span>
                <div className="h3-settings md:card-1-tittle-settings text-2xl font-black leading-tight sm:text-3xl">
                  RESEARCH
                  <br />
                  DESIGN
                  <br />
                  TEST
                </div>
                <div className="mt-4 h-1 w-8 bg-secondary" />
              </div>

              {cyclePoints.map((point, index) => {
                const visible = cycleVisible[index];
                const isDeliver = point.id === 'deliver';

                return (
                  <div
                    key={point.id}
                    className={`group absolute flex flex-col items-center transition-all duration-700 ease-out will-change-transform ${point.nodeClassName} ${
                      visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                    }`}
                  >
                    {isDeliver ? (
                      <div className="relative">
                        <div className="absolute right-full top-1/2 h-1 w-10 -translate-y-1/2 bg-gradient-to-r from-transparent to-surface-container-low sm:w-16 dark:to-slate-700" />
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-secondary text-on-secondary shadow-2xl transition-transform duration-500 group-hover:scale-110 sm:h-24 sm:w-24 dark:border-slate-900">
                          <span className="material-symbols-outlined text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                            {point.icon}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-surface-container-low bg-white shadow-xl transition-transform duration-500 group-hover:scale-110 sm:h-20 sm:w-20 dark:border-slate-700 dark:bg-backgroundDark">
                        <span className="material-symbols-outlined text-2xl text-primary sm:text-3xl">{point.icon}</span>
                      </div>
                    )}

                    <div className="mt-3 text-center whitespace-nowrap">
                      <span
                        className={`h4-settings md:card-1-title-settings block text-[10px] font-black uppercase tracking-widest sm:text-sm ${
                          isDeliver ? 'text-secondary' : 'text-primary'
                        }`}
                      >
                        {point.title}
                      </span>
                      <span className="h4-settings md:card-1-description-settings hidden text-[10px] text-on-surface-variant dark:text-slate-300 sm:block sm:text-xs">
                        {point.subtitle}
                      </span>
                      {isDeliver ? <span className="mt-1 hidden text-[9px] font-bold italic text-secondary sm:block sm:text-[10px]">Continuous Loop Maintained</span> : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest px-8 py-24 bg-backgroundOne dark:bg-backgroundDarkOne">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h2-settings mb-6 text-primary dark:text-background">Built for Scalability</h2>
            <div className="mb-8 space-y-4 md:hidden">
              <div className="overflow-hidden rounded-xl bg-surface-container shadow-sm">
                <img
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbZxHRpd9SEGymsKlqZiOkEZOZ1egvDMMho3FhUjwNLaJLIcNatu9OR98rn1ZxbzQCyUHcc3QNUswbyATZlB12cBCKvWegpKMU3xa9LNZmHrFn__2REbAEnRrXtNVcwe6mzEPNvDxf3rOCdo_Fr-XLC88BIVIzyioOiaxfPCgCx-vc2B9chkEUfA2AG1xUtb5iKGbwdMqxdIIcUu3LtF3aIZtXnnZiKRI-AvbMV-74iq8th_Z7KOykqc6Ps-YbPcY_06gSZxJa3Yb5"
                  alt="A diverse, professional engineering team collaborating in a modern tech office environment"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="h3-settings mb-8 text-on-surface-variant dark:text-slate-300">
              Our design systems are built to grow. We provide comprehensive documentation and component libraries that empower your development team to build faster and more consistently.
            </p>
            <div className="mb-8 space-y-4 md:hidden">
              <div className="overflow-hidden rounded-xl bg-surface-container-low shadow-sm">
                <img
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO2DihZNRsNvmzO2gS8NKl-P3Weq_Tn1jSC2zWzt2R5dL7loK7XaJcx2TCiRmZ3KYHwbA2KaNmMpadgLmhRL5rig4v6riWk9jx80ySqa1hmLk3bh2kgwr4blkfI2YuxQ916n9EdGxs0LvfScNUTvfiYwOWUEodyNpT1IzvDQaVK74sdk2PvD9cHKD0-KESRKw5ThgWtNZMjJJ33vuBKJHm1q-MtbOsbHMjW1DpSjIdhh69R_viI36VhC-3kGmahQAe_iJriWVGJK__"
                  alt="Close up of a well organized design system library"
                  loading="lazy"
                />
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 font-medium dark:text-white texttext-slate-300">
                <span className="material-symbols-outlined text-secondary">token</span>
                Design Tokens &amp; Variables
              </li>
              <li className="flex items-center gap-4 font-medium dark:text-white text-text-slate-300">
                <span className="material-symbols-outlined text-secondary">menu_book</span>
                Documentation Hub
              </li>
              <li className="flex items-center gap-4 font-medium dark:text-white text-text-slate-300">
                <span className="material-symbols-outlined text-secondary">sync</span>
                Cross-platform Consistency
              </li>
            </ul>
          </div>

          <div className="hidden gap-4 md:grid lg:col-span-7 lg:grid-cols-2">
            <div className="space-y-4 pt-12">
              <div className="aspect-video overflow-hidden rounded-xl bg-surface-container shadow-sm">
                <img
                  className="h-full w-full object-cover"
                  data-alt="Close up of a well organized design system library"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO2DihZNRsNvmzO2gS8NKl-P3Weq_Tn1jSC2zWzt2R5dL7loK7XaJcx2TCiRmZ3KYHwbA2KaNmMpadgLmhRL5rig4v6riWk9jx80ySqa1hmLk3bh2kgwr4blkfI2YuxQ916n9EdGxs0LvfScNUTvfiYwOWUEodyNpT1IzvDQaVK74sdk2PvD9cHKD0-KESRKw5ThgWtNZMjJJ33vuBKJHm1q-MtbOsbHMjW1DpSjIdhh69R_viI36VhC-3kGmahQAe_iJriWVGJK__"
                  alt="Close up of a well organized design system library"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl bg-surface-container-low shadow-sm">
                <img
                  className="h-full w-full object-cover"
                  data-alt="Team collaborating on a large digital whiteboard"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLqp6B2X79Wc06YrceUaN3kMLKxjfRUj6lSIkPIxQ1wHDp9Dajdk7UKLJu9CGOrNlkt2UV-Akd4_KmK_pzkUDpc8SdoGh22IfGfD1UTK_eNt_nzqybTJeH7Vx56J2QdBhnyMsCZUbxHIFdCUlmsPaowpxuiOYH52HSCQqjWrfbioqrwcpwcHE31r9CoFtT9KZf3HmImeNBgIEmcB3bfSTu2lgd-X7pDfaUMUjRcBAaxA6F7oVC1Ghwjmvpqh-k5gJho3b8f1rSMxQl"
                  alt="Team collaborating on a large digital whiteboard"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-xl bg-primary-container shadow-sm">
                <img
                  className="h-full w-full object-cover opacity-80"
                  data-alt="Data visualization dashboard on a high res screen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdHKRwt8fZiULcoDpueRNLWu8_RGEy3M0_KPkMIEaJMl4JdLnw9ZsU8wLhkticTCla9mWdH-Sg3saLlFWFEd6EGnpYMeaacyGqgcPZNuRluSWK8LPGf1Ytmx1rAuRAzSDtoB_fFa0h3EUzGT7LaD02zN7YHnX-Dlxs_Ct_vqUR3-kXHCgkFVeRugt2pEmLAl6gnck6lxOcbLH4LQJBFvqqmV2MkC1jLGUoJiMahDxTIo4mcMhyZcaS57cUguKZIZv9_saEl14bvLAU"
                  alt="Data visualization dashboard on a high res screen"
                  loading="lazy"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-xl bg-surface-container shadow-sm">
                <img
                  className="h-full w-full object-cover"
                  data-alt="Macro shot of a high end smartphone screen showing UI detail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB-SuGOK_GMIClvOXo8JcOGoB5QwKUl5h-cHvgMbLWGxoW_jRk9h4kIu_HuTn3H0XsoPLp16n_0zzsZbvxsE5Pjf4mCON-lX1myvWawK4pozCHQf4hpJUaTKJtdLhvJayY182ie1QdyJzJJ42Vm4XIA29nuBrEnO0mP2FK3zKuppC-jlEhd_HA_U9HWi39BjOrXRn9QpjPWp-7gBwiL5v3TDoMoEyQ1FgPgsixyLXMCW8UBJ1qCGww1-_U66nFW1qG5yTfHRoZjwuW"
                  alt="Macro shot of a high end smartphone screen showing UI detail"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 md:p-12 lg:p-24 bg-background dark:bg-backgroundDark">
        <div className="bg-primary max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="px-8 py-16 md:py-20 text-center relative z-10">
            <h2 className="h2-settings mb-6 mx-auto max-w-3xl text-white">Ready to elevate your enterprise experience?</h2>
            <p className="h3-settings mb-10 max-w-2xl mx-auto text-blue-100 opacity-80">Partner with Systems Edge to transform your complex workflows into high-performing and visually appealing solutions.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a className="button-1-settings mx-auto w-fit bg-secondary text-white shadow-xl border-2 border-transparent transition duration-300 hover:bg-primary hover:border-white hover:scale-105 sm:mx-0" href="/#contact">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UIUXSection;