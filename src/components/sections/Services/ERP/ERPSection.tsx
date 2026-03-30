import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { ReactElement, SVGProps } from 'react';
import SectionHeading from '../../../common/SectionHeading';
import FadeInOnScroll from '../../../common/FadeInOnScroll';
import ServicesDescriptionCard from '../components/ServicesDescriptionCard';
import { erpOverviewLayoutConfig, overviewSlotIds } from '../components/overviewLayout';

export interface ERPValuePoint {
  id: string;
  text: string;
}

export interface ERPCapability {
  id: string;
  title: string;
  description: string;
  bgIconLabel: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

export interface ERPMethodologyPhase {
  id: string;
  phaseLabel: string;
  stageLabel: string;
  title: string;
  desktopSubtitle: string;
  mobileTitle: string;
  description: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

export interface ERPSectionProps {
}

const CheckIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M5 13l4 4L19 7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArchitectureIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SyncIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GroupsIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SpeedIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TerminalIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DesignIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path
      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LaunchIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const valuePoints: ERPValuePoint[] = [
  {
    id: 'unified-ecosystem',
    text: 'Unified data ecosystem for real-time visibility',
  },
  {
    id: 'custom-automation',
    text: 'Custom automation logic tailored to your industry',
  },
  {
    id: 'seamless-migration',
    text: 'Seamless migration with zero data loss guarantee',
  },
];

const capabilities: ERPCapability[] = [
  {
    id: 'system-design',
    title: 'System Design\n& Architecture',
    description:
      'Scaling infrastructure with precision blueprints that align technology with your specific business goals. We produce integration-ready architectures, module-level specifications, and API contracts to keep future development predictable and maintainable. Architecture reviews, capacity planning and CI/CD readiness are part of our standard deliverables.',
    bgIconLabel: 'architecture',
    Icon: ArchitectureIcon,
  },
  {
    id: 'migration-integration',
    title: 'Data Migration\n& Integration',
    description:
      'Seamlessly transition legacy data and connect siloed systems into a unified source of truth. We design ETL pipelines, validation routines and reconciliations to ensure data fidelity during cutover, and build secure connectors to common ERP, CRM, and financial systems. Post-migration verification and monitoring are included to reduce risk.',
    bgIconLabel: 'sync_alt',
    Icon: SyncIcon,
  },
  {
    id: 'change-management',
    title: 'Change Management\n& Training',
    description:
      'Ensuring organizational adoption through tailored training programs and ongoing technical support. We craft role-based curricula, hands-on workshops, and documentation to accelerate user proficiency, plus metrics to measure adoption and targeted remediation where needed. Ongoing support and knowledge transfer are embedded in our delivery model.',
    bgIconLabel: 'groups',
    Icon: GroupsIcon,
  },
  {
    id: 'security-compliance',
    title: 'Security\n& Compliance',
    description:
      'Hardening your enterprise infrastructure with robust protocols and ensuring alignment with industry regulatory standards. We perform security assessments, threat modelling, and implement controls such as encryption-at-rest/in-transit, RBAC/IAM, and audit logging. Our teams help map controls to standards like ISO, SOC2 or sector-specific regulations as required.',
    bgIconLabel: 'admin_panel_settings',
    Icon: ShieldIcon,
  },
  {
    id: 'optimization',
    title: 'Performance\nOptimization',
    description:
      'Enhancing system speed and resource allocation through advanced analytics and continuous database fine-tuning. We profile bottlenecks, recommend indexing and caching strategies, and tune query plans and infrastructure to meet SLAs. Observability and automated alerts help keep performance stable as usage grows.',
    bgIconLabel: 'speed',
    Icon: SpeedIcon,
  },
  {
    id: 'custom-development',
    title: 'Custom Software\nDevelopment',
    description:
      'Building bespoke modules and features that bridge the gap between standard ERP functionality and your unique processes. We deliver well-tested, API-first components, automated test suites, and CI/CD pipelines so customizations remain maintainable. Modular design keeps upgrades easier while preserving critical business logic.',
    bgIconLabel: 'terminal',
    Icon: TerminalIcon,
  },
];

const capabilityImages: string[] = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBRLJbkWkhpkNg6TS0-Oms5gsTC37mgxlF4nH7ssR0jEhSf2inYOkR1RhCkGNrLUysgt4s0sYAXgn7j2V2FvEAEt2W2Ku888qR_WM-rPGXC31wvtC9wh2uNxD5UtCsSzD0kiJS7_IHey_dIAHQkyJyPm8j_I9XwLyCEswWOvH_M3NBMaOKmHScmR6apNTwKyNhq-hGflv8x48s_7vx664cIs-eb3MxfZm6KjLlvm83GWQtu6JjGnlaRw9qeKyQqlSzclxw2BoMAKppA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBNfNi4dMGrmivre4PPQ1UBr_o-LLcKtE1IdUIMJISlwCfFIzsPtqr7Ipr_I64sc4DpiUMJ4GW7KNlQUERVjqzkhj3FBIIrOIkDcWAHEP_Y9_moWdiGufNbSW8INyWOtXmFV3YwrcYLuoEVNxJgRfJQg-IjzbOnpHQ6V0EiVObdi_Oapk4o1xy7o_q1A9UlPkGK1Clw5AhxuREvX17EemKCoNIUi6k_I1_3mxnIrVpTHRFpu8DXoGE3ioOBxO9J4ywM-iKjAopWb83c',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAgMZoWvxQASsjzBB-XftHCvQZ-jFK9SNznSY6Rz4hkt51T85bxA1Hr1yoglQLvcqyfLtaezoqwm1mjNGFFZwvtRY6WJWD4eUrb2lhvCwsixy3IvD_KGphx9wY9CgkYUhNANacNoFa8C5WyI29MImyhUFEo0Lo3vbUkC5Z2oo7OteJjamYiCwdINGcjjq1ew8QHk1r-DET7ozuVKXrc-5E4w1XTNnCUJ4HmlhuTAj4_DylSuAYnWZxvO2e8DVUKUB24nrF7aL5oZ7Vk',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBx6Bd-9ye1gITEMNckRRWTpA-rhBkjYZfillzBfxO0A7566JHhXkgoOuq7UDPdXI1_y_5U4o8LzR-xzydcGl96MywMSEYUYn8m6pB2XvC6kN2lHiSupYfLHyU1B7NzIJUPh4CVmRoqGVWgOb-Icsf4auzx21Q0EocJUAQl_uzKQ7kAhCiXIp6-FQd7oxqBq-H8ClDa4hQ-u--S7pYCM1sCBD6-XL4LVnBr2LHgp1SmH4NGHNti43xgb2KIpFQPPbWxc6fAxF4MHTXQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBvS-Lga_Rh2WDRxZrnCvxoRcuQgNgUFqYRIyVo6RHCymDxbEw4iJR_pnpSqW8AUJTo77diwbjQYdM6NuFUfmgkNf3qotF1S2TRTxkffDJ4pBgUeM7aj6L5fykHzHNVh0DEepcHQSbQsAjmZmZK5sk2AzPVlkuRhPjsFeSuAhqyC44hou1fjv34BV0tH7ZhHdVN9qHzYOejIk4o3yP7nrvoHj6qoA81JiMex-iEGdWhn3rLxO2s9V_j4Md8RcvC6mRhg7sEBsqy4DXX',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDOgcaPT1nUTGecwEjxnSQPN7QmoI4hVNIfM9sYxUkr0sLCzLdWP9nYJwk6mb5cEhfbRRqFeq9YxOUgtwEClp1biS5pl4wNygGp1_EhwBGk-NgEwS_npIIIzY0bTI-ykFKmE6_ydFyhJSWYRyhmHe0I8reATAzrWUalDjNfVv_PWUMS8pJVLm6lbILx2fN1YGSxce55fxZdXFRT9fMSM_mC92f2TnN02lVZN253motsHlCPEp9hQ56LURcIt_8lXgNq8f4ki7kSi4wO',
];

const methodologyPhases: ERPMethodologyPhase[] = [
  {
    id: 'phase-discovery',
    phaseLabel: 'Phase 01',
    stageLabel: 'Analysis Stage',
    title: 'Discovery',
    desktopSubtitle: 'Comprehensive audit of current systems and requirement gathering.',
    mobileTitle: 'Discovery',
    description: 'Deep-dive interviews with stakeholders to identify operational bottlenecks and future-state goals.',
    Icon: SearchIcon,
  },
  {
    id: 'phase-design',
    phaseLabel: 'Phase 02',
    stageLabel: 'Architecture Stage',
    title: 'Design',
    desktopSubtitle: 'Strategic architecture and solution mapping based on findings.',
    mobileTitle: 'Design',
    description: 'Blueprint creation for custom integrations, database schema, and user interface workflows.',
    Icon: DesignIcon,
  },
  {
    id: 'phase-migration',
    phaseLabel: 'Phase 03',
    stageLabel: 'Transformation Stage',
    title: 'Migration',
    desktopSubtitle: 'Secure data extraction, cleaning, and loading into the new environment.',
    mobileTitle: 'Migration',
    description: 'Automated ETL processes to ensure data integrity and minimal downtime during transition.',
    Icon: SyncIcon,
  },
  {
    id: 'phase-deploy',
    phaseLabel: 'Phase 04',
    stageLabel: 'Launch Stage',
    title: 'Deploy',
    desktopSubtitle: 'Full rollout with post-launch hyper-care support.',
    mobileTitle: 'Deploy',
    description: 'Go-live support, user training sessions, and continuous optimization monitoring.',
    Icon: LaunchIcon,
  },
];

const ERPSection = (): ReactElement => {
  const overview = erpOverviewLayoutConfig;

  const [methodVisible, setMethodVisible] = useState<boolean[]>(() => methodologyPhases.map(() => false));
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prevTopRef = useRef<number | null>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const cleanupTimers = () => {
      timersRef.current.forEach((t) => clearTimeout(t as unknown as number));
      timersRef.current = [];
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const top = entry.boundingClientRect.top;
        const prevTop = prevTopRef.current ?? top;
        const isScrollingDown = top < prevTop;
        prevTopRef.current = top;

        cleanupTimers();

        if (entry.isIntersecting) {
          // Stagger in forward or reverse depending on scroll direction
          const len = methodologyPhases.length;
          if (isScrollingDown) {
            for (let i = 0; i < len; i++) {
              const t = setTimeout(() => {
                setMethodVisible((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, i * 140);
              timersRef.current.push(t);
            }
          } else {
            for (let i = methodologyPhases.length - 1; i >= 0; i--) {
              const delay = (methodologyPhases.length - 1 - i) * 140;
              const t = setTimeout(() => {
                setMethodVisible((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, delay);
              timersRef.current.push(t);
            }
          }
        } else {
          // leave: reset visibility so animations can replay
          setMethodVisible(methodologyPhases.map(() => false));
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cleanupTimers();
    };
  }, []);
  return (
    <>
      <section id="overview" className={overview.section}>
        <div className={overview.container}>
          <div className={overview.grid}>
            <div className={overview.textColumn}>
              <h1 className={`${overview.title} h1-settings`} data-slot={overviewSlotIds.title}>
                Next-Generation <br />
                <span className={overview.titleAccent}>ERP &amp; Enterprise</span> Systems
              </h1>

              <p className={`${overview.description} h3-settings`} data-slot={overviewSlotIds.description}>
                Revolutionize your organizational workflow with end-to-end ERP solutions. Systems Edge Solutions bridges the gap between complex data silos and seamless business operations, ensuring your enterprise scales with precision and clarity.
              </p>

                <ul className={`${overview.list} card-1-title-settings`} data-slot={overviewSlotIds.list}>
                  {valuePoints.map((point, idx) => (
                    <FadeInOnScroll key={point.id} delayMs={idx * 80} className="block">
                      <li className={overview.listItem}>
                        <span className={overview.listBullet}>
                          <CheckIcon className="h-4 w-4" />
                        </span>
                        <span className={overview.listText}>{point.text}</span>
                      </li>
                    </FadeInOnScroll>
                  ))}
                </ul>
            </div>

            <div className={overview.imageColumn} data-slot={overviewSlotIds.image}>
              <div className={overview.imageGlow} aria-hidden="true" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsEaKdXk97T98RRXtdcPPkj1rJoe9eIDB1463S7QSKn08yrVGrqGbzbE2rHrJRe4ub0gRmppOXKBSLFcZoKrzrZnM4-_nDHtqOzz0YvYJB1uOWsZTB3c7DAZ-OjlKMU7F8eLFdkttr1fEnxrgr8TvP3C3Yv_wUPVeysvtq25i81cLCg0pkDe4-rQZVEtG8qErCeqpT1QxSm4QDUuFQy5qaxExurVY_9qxMb9fayAMiBVYRLZ5Xv3ZL99sY6Ep3tFAYkkxslc2y8vfx"
                alt="High-impact enterprise command center visual"
                className={overview.image}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-backgroundOne dark:bg-backgroundDarkOne py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <SectionHeading
            id="erp-services"
            heading="ERP Services"
            description="Comprehensive solutions designed to modernize your core business infrastructure and enhance operational visibility."
            headingClassName="h1-settings"
            descriptionClassName="h3-settings max-w-xl !mb-4"
          />
          <div className="w-20 h-1.5 bg-secondary mx-auto mt-2 mb-8 rounded-full" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {capabilities.map(({ id, title, description, Icon }, idx) => (
              <ServicesDescriptionCard
                key={id}
                title={title}
                description={description}
                imageSrc={capabilityImages[idx]}
                Icon={Icon}
                delayMs={idx * 80}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="methodology" className="bg-background dark:bg-backgroundDark py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <SectionHeading
              heading="Methodology"
              description="A structured, proven approach to enterprise transformation."
              headingClassName="h2-settings"
              descriptionClassName="h3-settings max-w-2xl !mb-4"
            />
          </div>

          <div
            ref={containerRef}
            className="relative space-y-12 before:content-[''] before:hidden md:before:block md:before:absolute md:before:bottom-0 md:before:left-5 md:before:top-0 md:before:w-0.5 md:before:bg-secondary/30 md:before:md:left-1/2 md:before:-translate-x-1/2"
          >
            {methodologyPhases.map((phase, index) => {
              const isEven = index % 2 === 0;
              const Icon = phase.Icon;
              const visible = methodVisible[index];

              return (
                <div
                  key={phase.id}
                  className={`relative flex flex-col items-center md:flex-row md:justify-between transform transition-all duration-700 will-change-transform ${
                    visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                  style={{ transitionDelay: visible ? `${index * 120}ms` : '0ms' }}
                >
                  <div
                    className={`hidden w-5/12 md:block ${isEven ? 'pr-12 text-right' : 'order-3 pl-12 text-left'}`}
                  >
                      <div className={`${isEven ? 'ml-auto max-w-[420px] text-right' : 'mr-auto max-w-[420px] text-left'}`}>
                        <div className="inline-block rounded-2xl bg-primary px-6 py-4">
                          <h4 className="card-1-title-settings text-white">{`${phase.phaseLabel}: ${phase.title}`}</h4>
                          <p className="card-1-description-settings mt-2 text-white/90">{phase.desktopSubtitle}</p>
                        </div>
                      </div>
                  </div>

                  <div
                    className={`z-30 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-white ring-8 ring-background dark:ring-slate-900 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2`}
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className={`mt-4 w-full md:mt-0 md:w-5/12 ${isEven ? 'md:pl-12' : 'md:order-1 md:pr-12 md:text-right'}`}>
                    {/* Mobile: stacked, centered layout (no small bg badge) */}
                    <div className="md:hidden w-full text-center">
                      <h4 className="card-1-title-settings text-primary">{`${phase.phaseLabel}: ${phase.title}`}</h4>
                      <p className="card-1-description-settings mt-2 mb-[15px] text-slate-600 dark:text-slate-300">{phase.desktopSubtitle}</p>
                    </div>

                    <div className={`mb-2 flex items-center gap-4 text-secondary justify-center md:justify-start ${isEven ? '' : 'md:justify-end'}`}>
                      <span className="h3-settings uppercase tracking-wider">{phase.stageLabel}</span>
                      <Icon className="h-6 w-6" />
                    </div>

                    <p className="h4-settings text-center text-slate-600 dark:text-slate-300 md:text-left md:dark:text-slate-300">{phase.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="p-6 md:p-12 lg:p-24 bg-background dark:bg-backgroundDarkOne">
        <div className="bg-primary max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="px-8 py-16 md:py-20 text-center relative z-10">
            <h2 className="h2-settings mb-6 mx-auto max-w-3xl text-white">Ready to Scale Your Enterprise?</h2>
            <p className="h3-settings mb-10 max-w-2xl mx-auto text-blue-100 opacity-80">Join the organizations already leveraging Systems Edge for their digital backbone. Let&apos;s build your future today.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link className="button-1-settings mx-auto w-fit bg-secondary text-white shadow-xl transition duration-300 hover:bg-teal-600 sm:mx-0" to="/contact-us">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ERPSection;
