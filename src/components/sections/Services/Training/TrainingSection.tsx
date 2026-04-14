import type { ReactElement, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import FadeInOnScroll from '../../../common/FadeInOnScroll';
import SectionHeading from '../../../common/SectionHeading';
import { erpOverviewLayoutConfig, overviewSlotIds } from '../components/overviewLayout';

export interface TrainingSectionProps {
  ctaLabel?: string;
}

interface TrainingCapability {
  id: string;
  title: string;
  description: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

interface TrainingMethodologyStep {
  id: string;
  phaseLabel: string;
  stageLabel: string;
  title: string;
  desktopSubtitle: string;
  mobileTitle: string;
  description: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

const CheckIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M5 13l4 4L19 7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloudIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M12 3l7 4v6c0 5-3.5 9.7-7 10-3.5-.3-7-5-7-10V7l7-4z" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AnalyticsIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M5 19V9m7 10V5m7 14v-7M3 19h18" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NetworkIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M12 3v4m0 10v4M4 12h4m8 0h4" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3" strokeWidth={1.75} />
    <circle cx="12" cy="3" r="1.5" strokeWidth={1.75} />
    <circle cx="12" cy="21" r="1.5" strokeWidth={1.75} />
    <circle cx="3" cy="12" r="1.5" strokeWidth={1.75} />
    <circle cx="21" cy="12" r="1.5" strokeWidth={1.75} />
  </svg>
);

const DevOpsIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M7 8l-4 4 4 4m10-8l4 4-4 4M14 4l-4 16" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AgileIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M12 21a9 9 0 10-9-9" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 3v6h6" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8v4l3 2" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AssessmentIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M9 7h10M9 12h10M9 17h10M5 7h.01M5 12h.01M5 17h.01" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CurriculumIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M4 6a2 2 0 012-2h10a2 2 0 012 2v12l-7-3-7 3V6z" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DeliveryIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M4 5h16v11H4z" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 20h8M12 16v4" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 9h8" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CertificationIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M9 12l2 2 4-4" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="8" strokeWidth={1.75} />
  </svg>
);

const heroHighlights = [
  { id: 'scalable-learning', text: 'Scalable learning frameworks' },
  { id: 'expert-immersion', text: 'Expert-led technical immersion' },
  { id: 'global-accreditation', text: 'Global industry accreditation' },
] as const;

const capabilities: TrainingCapability[] = [
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture',
    description: 'Advanced systems design for scalable enterprise infrastructure and global-ready deployment models.',
    Icon: CloudIcon,
  },
  {
    id: 'cyber-defense',
    title: 'Cyber Defense',
    description: 'Practical security training focused on modern threats, prevention workflows, and rapid incident response.',
    Icon: ShieldIcon,
  },
  {
    id: 'data-mastery',
    title: 'Data Mastery',
    description: 'From BI foundations to applied AI, we help teams turn complex datasets into strategic decisions.',
    Icon: AnalyticsIcon,
  },
  {
    id: 'network-resilience',
    title: 'Network Resilience',
    description: 'Robust connectivity and reliability patterns for mission-critical systems with high availability demands.',
    Icon: NetworkIcon,
  },
  {
    id: 'devops-mastery',
    title: 'DevOps Mastery',
    description: 'CI/CD automation, observability, and release engineering practices that shorten delivery cycles.',
    Icon: DevOpsIcon,
  },
  {
    id: 'agile-leadership',
    title: 'Agile Leadership',
    description: 'Leadership playbooks that build adaptive teams, improve execution speed, and sustain quality at scale.',
    Icon: AgileIcon,
  },
];

const methodologySteps: TrainingMethodologyStep[] = [
  {
    id: 'assessment',
    phaseLabel: 'Phase 01',
    stageLabel: 'Assessment Stage',
    title: 'Assessment',
    desktopSubtitle: 'Diagnostic deep-dive into current capabilities, role gaps, and operational constraints.',
    mobileTitle: 'Assessment',
    description: 'Diagnostic deep-dive into current capabilities, role gaps, and operational constraints.',
    Icon: AssessmentIcon,
  },
  {
    id: 'curriculum',
    phaseLabel: 'Phase 02',
    stageLabel: 'Curriculum Stage',
    title: 'Curriculum',
    desktopSubtitle: 'Bespoke learning pathways engineered around your technology stack and business priorities.',
    mobileTitle: 'Curriculum',
    description: 'Bespoke learning pathways engineered around your technology stack and business priorities.',
    Icon: CurriculumIcon,
  },
  {
    id: 'delivery',
    phaseLabel: 'Phase 03',
    stageLabel: 'Delivery Stage',
    title: 'Delivery',
    desktopSubtitle: 'Immersive expert-led sessions with real-world labs and collaborative implementation sprints.',
    mobileTitle: 'Delivery',
    description: 'Immersive expert-led sessions with real-world labs and collaborative implementation sprints.',
    Icon: DeliveryIcon,
  },
  {
    id: 'certification',
    phaseLabel: 'Phase 04',
    stageLabel: 'Certification Stage',
    title: 'Certification',
    desktopSubtitle: 'Structured validation of skill mastery with practical assessments and accreditation pathways.',
    mobileTitle: 'Certification',
    description: 'Structured validation of skill mastery with practical assessments and accreditation pathways.',
    Icon: CertificationIcon,
  },
];

const TrainingSection = ({
  ctaLabel = 'Consult an Expert',
}: TrainingSectionProps): ReactElement => {
  const overview = erpOverviewLayoutConfig;

  return (
    <>
      <section id="overview" className={overview.section}>
        <div className={overview.container}>
          <div className={overview.grid}>
            <div className={overview.textColumn}>
              <h1 className={`${overview.title} h1-settings`} data-slot={overviewSlotIds.title}>
                Architecture of <br />
                <span className={overview.titleAccent}>Evolution.</span>
              </h1>

              <p className={`${overview.description} h3-settings`} data-slot={overviewSlotIds.description}>
                Elevating enterprise intelligence through a rigorous and minimalist approach to professional development. We build precision-engineered training programs for the modern technical
                workforce.
              </p>

              <ul className={`${overview.list} card-1-title-settings`} data-slot={overviewSlotIds.list}>
                {heroHighlights.map((highlight, index) => (
                  <FadeInOnScroll key={highlight.id} delayMs={index * 90} className="block">
                    <li className={overview.listItem}>
                      <span className={overview.listBullet}>
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <span className={overview.listText}>{highlight.text}</span>
                    </li>
                  </FadeInOnScroll>
                ))}
              </ul>
            </div>

            <div className={overview.imageColumn} data-slot={overviewSlotIds.image}>
              <div className={overview.imageGlow} aria-hidden="true" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUQOo7IvKes2IC_eXdnQOajq5xYNzI5ZnelqNLriXX43AiLd27Voa2h2WvDE1exSHH4SKcf0A9XX7PxnbsS8bw6uotMfQCDRyvtPQ37KsV9tGYCUwJ8K-aVMUiucovdO590V8NyKNKYjarqGgUIRAThAGyhQexG8LZbdy8G8G8EWt_mK1-gFcLYMq7NXxl_8iCHrvqLLvVkO9QpSRRKWQ43J7nYCJG7cPwO2lvWNes07p6AyBwZtvB5UWAGVhfNAT16BWGIltzQqHe"
                alt="Modern minimalist skyscraper representing enterprise growth"
                className={overview.image}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-backgroundOne px-6 py-24 dark:bg-backgroundDarkOne">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <SectionHeading
                id="training-capabilities"
                heading="Strategic Capabilities"
                description="Precision-engineered curricula designed for the modern technical workforce."
                center={false}
                headingClassName="h1-settings"
                descriptionClassName="h3-settings max-w-xl !mb-4"
              />
              <div className="h-1.5 w-20 rounded-full bg-secondary" />
            </div>

            <div className="hidden text-right md:block">
              <span className="block text-6xl font-bold leading-none text-primary dark:text-white">06</span>
              <span className="h4-settings mt-2 block uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">Core Disciplines</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <FadeInOnScroll key={capability.id} delayMs={index * 80}>
                <article className="group h-full rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-8 transition-colors duration-500 hover:bg-primary dark:border-slate-700 dark:bg-slate-900">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary transition-colors duration-500 group-hover:bg-white/15 group-hover:text-secondary-fixed">
                    <capability.Icon className="h-6 w-6" />
                  </div>

                  <h3 className="card-1-title-settings mb-4 text-primary transition-colors duration-500 group-hover:text-white">
                    {capability.title}
                  </h3>

                  <p className="card-1-description-settings leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-blue-100 dark:text-slate-300">
                    {capability.description}
                  </p>
                </article>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="methodology" className="bg-background dark:bg-backgroundDark py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <SectionHeading
              heading="The Success Loop"
              description="Our iterative training methodology"
              headingClassName="h2-settings"
              descriptionClassName="h3-settings max-w-2xl !mb-4"
            />
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-secondary/25 lg:block" aria-hidden="true" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {methodologySteps.map((phase, index) => {
              const Icon = phase.Icon;
              const isAltToneCard =
                index === 2
                  ? true
                  : index === 3
                    ? false
                    : index % 2 === 1;
              const cardBackgroundClass =
                isAltToneCard
                  ? 'bg-backgroundOne/70 dark:bg-slate-900/80'
                  : 'bg-surface-container-lowest dark:bg-slate-900';
              const cardHoverClass =
                isAltToneCard
                  ? 'hover:bg-backgroundOne dark:hover:bg-slate-800/90'
                  : 'hover:bg-surface-container-high dark:hover:bg-slate-800';
              const cardOffsetClass = index % 2 === 1 ? 'md:translate-y-10' : '';

              return (
                <FadeInOnScroll
                  key={phase.id}
                  delayMs={index * 100}
                >
                  <article
                    className={`relative h-full rounded-2xl border border-outline-variant/40 p-6 shadow-sm transition-all duration-300 dark:border-slate-700 hover:shadow-xl hover:border-secondary/40 dark:hover:border-secondary/50 md:p-8 ${cardBackgroundClass} ${cardHoverClass} ${cardOffsetClass}`}
                  >
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-white shadow-md">
                        <Icon className="h-6 w-6" />
                      </span>

                      <div className="text-right">
                        <p className="h4-settings uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300">{phase.phaseLabel}</p>
                        <p className="h4-settings text-secondary">{phase.stageLabel}</p>
                      </div>
                    </div>

                    <h3 className="card-1-title-settings mb-2 text-primary dark:text-white">{phase.mobileTitle}</h3>
                    <p className="card-1-description-settings mb-4 text-slate-600 dark:text-slate-300">{phase.desktopSubtitle}</p>

                    <div className="rounded-xl border border-outline-variant/40 bg-secondary p-4 dark:border-slate-700 dark:bg-secondary">
                      <p className="card-1-description-settings text-white dark:text-slate-200">{phase.description}</p>
                    </div>

                    <div className="pointer-events-none absolute -bottom-3 right-6 h-1.5 w-16 rounded-full bg-secondary" aria-hidden="true" />
                  </article>
                </FadeInOnScroll>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 md:p-12 lg:p-24 bg-background dark:bg-backgroundDarkOne">
        <div className="bg-primary max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="px-8 py-16 md:py-20 text-center relative z-10">
            <h2 className="h2-settings mb-6 mx-auto max-w-3xl text-white">
              Ready to build your edge?
            </h2>

            <p className="h3-settings mb-10 max-w-2xl mx-auto text-blue-100 opacity-80">
              Join global enterprises that trust Systems Edge for mission-critical professional development and technical upskilling.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact-us"
                className="button-1-settings mx-auto w-fit bg-secondary text-white shadow-xl border-2 border-transparent transition duration-300 hover:bg-primary hover:border-white hover:scale-105 sm:mx-0"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingSection;
