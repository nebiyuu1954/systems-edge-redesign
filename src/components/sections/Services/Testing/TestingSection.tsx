import type { ReactElement, SVGProps } from 'react';
import FadeInOnScroll from '../../../common/FadeInOnScroll';
import SectionHeading from '../../../common/SectionHeading';
import ServicesDescriptionCard from '../components/ServicesDescriptionCard';
import { erpOverviewLayoutConfig, overviewSlotIds } from '../components/overviewLayout';

export interface TestingSectionProps {
  ctaLabel?: string;
}

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  iconName: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

interface MethodologyStep {
  id: string;
  title: string;
  description: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  accent: 'primary' | 'secondary';
}

const CheckIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M5 13l4 4L19 7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SmartToyIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M9 9V6a3 3 0 016 0v3m-8 0h10a2 2 0 012 2v5a4 4 0 01-4 4H9a4 4 0 01-4-4v-5a2 2 0 012-2z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 14h.01M15 14h.01M8 18c1.5 1 6.5 1 8 0" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BoltIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M13 2L4 14h6v8l10-14h-7l0-6z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SecurityIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2l7 4v6c0 5-3.5 9.7-7 10-3.5-.3-7-5-7-10V6l7-4z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TroubleshootIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M4 4h16v16H4z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 8l8 8M16 8l-8 8" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HubIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M8 6h8M8 18h8M6 8v8M18 8v8M9 9h6v6H9z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AccessibilityIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M12 3a2 2 0 110 4 2 2 0 010-4zM4 9h16M8 21l2-6 2-2 2 2 2 6M9 12h6" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PageInfoIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M9 11h6M9 15h4M7 3h7l5 5v13H7a2 2 0 01-2-2V5a2 2 0 012-2z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlayCircleIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChangesIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M4 12h10m0 0l-4-4m4 4l-4 4M20 12H12m0 0l4-4m-4 4l4 4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const capabilities: CapabilityItem[] = [
  {
    id: 'automated-testing',
    title: 'Automated Testing',
    description: 'CI/CD integrated automated suites ensuring rapid feedback loops and stable deployments across all environments.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBDgFF551avu5MbZvCf-Q-CubL-_Hl4Ksf4K_Sk0k0akm8zrKewgNxdGl5fmwMrLG-LXBQTZ8U6E1r4LVIYN4yedDd1kY_5RuS6lm17KBGtIof5RVBiFKRsOLyKLFnD2oTLQmTjhX9C_WwsMFdkykXsDyIfwpjk0iOPvcM1LMIXscHUpiu7x6D5YV_hZL1lYDKx-WMnV-9AaAkK7rvTa0loPMbv8qvOGGej_GqeYcOcG6Hgffm3e_4jJoKO--uNOlNK_4EFpk4Svaw0',
    imageAlt: 'Automated testing dashboard with green checks and test metrics',
    iconName: 'smart_toy',
    Icon: SmartToyIcon,
  },
  {
    id: 'performance-load-testing',
    title: 'Performance & Load Testing',
    description: 'Simulating extreme user traffic to identify bottlenecks and ensure system scalability under pressure.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoUJxTo0cu13JHMhok77XdARw4fYC5Ct3KKneGw5izDYgunR3NFYuk0csrVLpGqcnX2kBuD6IxDMkYGWB6_Xq8kAx4_aMWt-fyAHJnxsPmpD2WoL1uzyQ7eGG7XimYWLPA55_aTgjFt7HN50gpVGCf20RFcsliesVLPjnNV7-D9g_qBy8qIDI3tu5v8wmud5j41pO3f3ukB0jIvmb5KIcfXEmt4j5a7SuafGE0IPJCwauZF4d5jS6ujnNH4kuqTMmXxDtImUqpapH_',
    imageAlt: 'Performance and load testing visualizations on screen',
    iconName: 'bolt',
    Icon: BoltIcon,
  },
  {
    id: 'security-penetration',
    title: 'Security & Penetration',
    description: 'Rigorous vulnerability assessments and ethical hacking to protect your infrastructure from modern threats.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBywWLFxXeQoJT7um6PBcKI2tEiBSEmU5-tfA0TZstHMv_5mgPzFIuiqWHn-_3veq-O8a0I3LE00Qk5c0im709-XFMG28BxfB-i3KgnXS2sZEyKBIhwWSmGFP96HP0BgGgGEPJPuzaC1xNx0j7ZKOAFCuEZ0a982rI3dlseV16tcUVWwbVynhsBVn1GOzraBE9L9PDIU9rpbL_1APGPkw2X2qAxgopW7HoPnBcDmgNc8BKw_3GAjeZQyVTwA5SvsdQBo-YKTsZKelff',
    imageAlt: 'Security testing and penetration analysis dashboard',
    iconName: 'security',
    Icon: SecurityIcon,
  },
  {
    id: 'manual-exploratory',
    title: 'Manual & Exploratory',
    description: 'Human-centric testing focusing on edge cases, user experience, and complex logic that automation might miss.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCY-33sPb2fnJkzGwQYZr7rOTksLMaxIuePD8gSD4QAQVhVgKi44mmd8b00UkgPHSU8osuhALbD4LCANUOmae60Rq2AsCeDEEV4Y0VLPDj7T7wNIq-Nu2n9WWmzuL2OmeL1iVW9KvdzyoecdhTjWNKIMKQ94n5OP8djf_0ZnnznDHgbsT91cukKIe64Nl0dtdS6JH9j4iz4dY2x9E21cc_mjwZzB_TT7bSpQfj1gpXzyVBjPhl0XAkyIUjGhVnX5p70EeuXbZQD11Mz',
    imageAlt: 'Manual and exploratory testing session',
    iconName: 'troubleshoot',
    Icon: TroubleshootIcon,
  },
  {
    id: 'api-integration-testing',
    title: 'API & Integration Testing',
    description: 'Validating the seamless communication between microservices and external third-party integrations.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLxpznc8LQnaGyhdRk6dkjhXFj-_7GtJoKCCu14NRU3IrxgmEQ9c0GScqrxe_1Gp9zxb6-quCyHGW43YrcrALTjMN-2uxDWJdEiyv18POrqvTxtIZubcHnb62Qc3Dpgx9Ol-VtzHWZhiMSWDWcPwAzNWUFyaS0A4OB9DUk5WLpDJyj-Z2o1xmikAui3082UL-84X5z3mRnKGj8AXVpYUFlISYFMaIHx8zOdOkNFV_XnQ6QdzgMu5FF5nJW2133Yn6m-FDd50asfy7m',
    imageAlt: 'API integration testing interface',
    iconName: 'hub',
    Icon: HubIcon,
  },
  {
    id: 'usability-accessibility',
    title: 'Usability & Accessibility',
    description: 'Ensuring your software is WCAG compliant and provides a frictionless experience for every user segment.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ZQHWaEBHUuqZNTf8Oo8K601N-Lm3UD1cmUzhvyVGJT3I6C0PgJmi9eTZFzGm-MVCkgNpquDUUV9dBQXQuN3t8cPwI4oWTWr27x8trunfn6CHz9-AIHvj_yAmwWuS5g67dNIeIx-URmqe2UFe1GW5cyZpdrK88UzBbuRmAbBLs5lTZfUUlaU5r2c_5pLzLvydfCiHwQBbkSitk-nvekWvTpyLRMmx-J1WJzN7yNju0PtdHRiNwCH9yD7bbukfTNDD9qnOo0SjTOhC',
    imageAlt: 'Accessibility and usability assessment session',
    iconName: 'accessibility_new',
    Icon: AccessibilityIcon,
  },
];

const methodologySteps: MethodologyStep[] = [
  {
    id: 'test-strategy',
    title: 'Test Strategy',
    description: 'We define the scope, technical approach, and resource allocation to align testing with business objectives from day one.',
    Icon: PageInfoIcon,
    accent: 'primary',
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Developing robust scripted scenarios using Playwright, Selenium, and Jest to cover critical paths and data-driven testing.',
    Icon: SmartToyIcon,
    accent: 'secondary',
  },
  {
    id: 'execution',
    title: 'Execution',
    description: 'Rigorous parallel testing across browsers, OS, and mobile devices to ensure complete architectural compatibility.',
    Icon: PlayCircleIcon,
    accent: 'primary',
  },
  {
    id: 'continuous-improvement',
    title: 'Continuous Improvement',
    description: 'Real-time reporting and feedback loops that inform development cycles and prevent defect regression.',
    Icon: ChangesIcon,
    accent: 'secondary',
  },
];

const overviewPoints = [
  { id: 'production-uptime', text: '99.9% Production Uptime Reliability' },
  { id: 'regression-coverage', text: 'Automated Regression Coverage up to 95%' },
  { id: 'stress-testing', text: 'Cloud-Scale Performance Stress Testing' },
];

const TestingSection = ({ ctaLabel = 'Discuss Your Testing Needs' }: TestingSectionProps): ReactElement => {
  const overview = erpOverviewLayoutConfig;

  return (
    <>
      <style>{`
        .circuit-pattern {
          background-image: radial-gradient(circle at 2px 2px, rgba(0, 128, 128, 0.1) 1px, transparent 0);
          background-size: 24px 24px;
        }
      `}</style>

      <section id="overview" className={overview.section}>
        <div className={overview.container}>
          <div className={overview.grid}>
            <div className={overview.textColumn}>
              <h1 className={`${overview.title} h1-settings`} data-slot={overviewSlotIds.title}>
                Software testing that <br />
                <span className={overview.titleAccent}>scales</span>, validates, and protects
              </h1>

              <p className={`${overview.description} h3-settings`} data-slot={overviewSlotIds.description}>
                Systems Edge Solutions delivers end-to-end testing services that reduce risk, improve performance, and ensure every release meets enterprise-grade standards.
              </p>

              <ul className={`${overview.list} card-1-title-settings`} data-slot={overviewSlotIds.list}>
                {overviewPoints.map((point, index) => (
                  <FadeInOnScroll key={point.id} delayMs={index * 80} className="block">
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyYyoSXdfKVOyps0ps7aXSPYSyBWY2wdFgslLI3hyKLiXr_rdkissmcM5vvCaGsc8bxhXbXzjZUookQiM8r4S3zuUauBDXPirlBi1V2L7cjeiPxSpBDvgv8K7sw6ryV3XTcSdlxVs_fSgZzzIieL0-hT73d7L3AHThUju4dAP1D_wTb5PmTQlCE0gj1Tw2zrnHeqIvlneIrULnSbhbcVafWLIQH57x9iOVSQ6cLW4r-dOWM405vyLTRGDjSP4HvRKwvYp3f4ZJckCN"
                alt="High-fidelity quality assurance dashboard showing automated testing metrics and green checkmarks"
                className={overview.image}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-backgroundOne py-24 dark:bg-backgroundDarkOne">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <SectionHeading
            id="testing-capabilities-heading"
            heading="Our software testing capabilities"
            description="Capabilities built to protect releases, performance, and user experience."
            headingClassName="mb-4 text-3xl font-extrabold lg:text-4xl"
            descriptionClassName="max-w-xl mb-4"
          />
          <div className="mx-auto mb-8 mt-2 h-1.5 w-20 rounded-full bg-secondary" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {capabilities.map(({ id, title, description, imageSrc, Icon }, index) => (
              <ServicesDescriptionCard key={id} title={title} description={description} imageSrc={imageSrc} Icon={Icon} delayMs={index * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-32 dark:bg-backgroundDark lg:px-12" aria-labelledby="testing-methodology-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-24 text-center">
            <FadeInOnScroll delayMs={0}>
              <h2 id="testing-methodology-heading" className="text-4xl font-bold tracking-tight text-primary md:text-5xl dark:text-white">
                How we ensure quality
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll delayMs={120}>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">A systematic approach to excellence.</p>
            </FadeInOnScroll>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 hidden w-1 -translate-x-1/2 bg-slate-200 dark:bg-slate-700 md:block" aria-hidden="true" />

            <div className="space-y-24">
              {methodologySteps.map((step, index) => {
                const alignRight = step.id === 'automation' || step.id === 'continuous-improvement';

                return (
                  <FadeInOnScroll key={step.id} delayMs={index * 100}>
                    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-0">
                      <div className={`flex-1 ${alignRight ? 'md:order-3 md:pl-16' : 'md:order-1 md:pr-16 md:text-right'}`}>
                        <h3 className="mb-3 text-2xl font-bold text-primary dark:text-white">{step.title}</h3>
                        <p className="leading-relaxed text-slate-600 dark:text-slate-300">{step.description}</p>
                      </div>

                      <div className="relative z-10 flex items-center justify-center order-1 md:order-2">
                        <div className={`flex h-16 w-16 items-center justify-center rounded-full shadow-lg ${step.accent === 'primary' ? 'bg-primary' : 'bg-secondary'} text-white`}>
                          <step.Icon className="h-8 w-8" />
                        </div>
                      </div>

                      <div className={`flex-1 hidden md:block ${alignRight ? 'md:order-1' : 'md:order-3'}`} />
                    </div>
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-3xl mx-auto">Ready to deliver flawless software?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto opacity-80">Partner with Systems Edge to build a culture of quality. Let&apos;s engineer a testing strategy that scales with your ambition.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button type="button" className="inline-block bg-secondary hover:bg-teal-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-xl text-lg">
                {ctaLabel}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestingSection;