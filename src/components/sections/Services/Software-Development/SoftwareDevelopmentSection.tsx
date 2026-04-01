import type { ReactElement, SVGProps } from 'react';
import FadeInOnScroll from '../../../common/FadeInOnScroll';
import { Link } from 'react-router-dom';
import SectionHeading from '../../../common/SectionHeading';
import ServicesDescriptionCard from '../components/ServicesDescriptionCard';
import { erpOverviewLayoutConfig, overviewSlotIds } from '../components/overviewLayout';

const TerminalIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloudIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ApiIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M8 9l3 3-3 3m5 0h3" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GlobeIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MobileIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SyncIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IntegrationIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DotNetLogo = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 256 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <rect width="256" height="96" rx="12" fill="#512BD4" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="44" fill="white">.NET</text>
  </svg>
);

const AzureLogo = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path d="M10 80 L40 20 L70 80 Z" fill="#0078D4" />
    <path d="M40 20 L70 80 L90 60 L60 20 Z" fill="#00A4EF" opacity="0.9" />
  </svg>
);

const AngularLogo = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path d="M125 12 L236 66 L205 208 L125 238 L45 208 L14 66 Z" fill="#DD0031" />
    <path d="M80 170 L100 80 L125 102 L150 80 L170 170" stroke="#ffffff" strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M110 140 L140 140" stroke="#ffffff" strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const capabilities = [
  {
    id: 'custom-web-apps',
    title: 'Custom\nWeb Apps',
    description: 'Dynamic, responsive, and secure web applications built with modern frameworks and scalable architecture.',
    Icon: GlobeIcon,
  },
  {
    id: 'mobile-solutions',
    title: 'Mobile\nSolutions',
    description: 'Native and cross-platform mobile apps that provide a seamless user experience across iOS and Android devices.',
    Icon: MobileIcon,
  },
  {
    id: 'api-development',
    title: 'API\nDevelopment',
    description: 'Robust and scalable APIs that allow your systems to communicate efficiently and securely with the world.',
    Icon: ApiIcon,
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy\nModernization',
    description: 'Transforming outdated systems into modern, high-performance assets without disrupting your operations.',
    Icon: SyncIcon,
  },
  {
    id: 'cloud-native',
    title: 'Cloud-Native\nApps',
    description: 'Scalable applications built specifically for the cloud, leveraging microservices and containerization.',
    Icon: CloudIcon,
  },
  {
    id: 'enterprise-integration',
    title: 'Enterprise\nIntegration',
    description: 'Connecting CRM, ERP, and BI tools into a unified ecosystem to streamline your entire business workflow.',
    Icon: IntegrationIcon,
  },
];

const images = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDX-_yakPclUEu1QuzbIaD8-fWjqY2M_C_5rp8kYw7zimtttXhpqVapMHgLL303FF5YIl7Dp57BbB8wnmPL4A2p-c7aealcBvb_6LrMKnKHDOEMXSRUO0_47CKEgyyo9Y8oJkfYt5weKjXkDhsNrbmcjXLcb0YSgSOFj2QlJtGZ7t4PsrJ9c3H85plStWvoELbFPN4dchQNn0Q-7df98OmfpcXh9HSpo2IPheOwqab0tilgkBVkOygOEPQIXPVBfQPLnp31X4pweOA8',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Rzlpsp8EUc-flWcWo2J2xtKcspVmcZQwv5Spqsbk5SAs7QBxfJIxrkYeaLF23o4N18jdWi-LBjp6PZPVz7KlkhNQq8VMha6avwTvhZacc3vekptLM7zAgiWpMC07vDcXCqVq9R6DSRxBU2XP5DQXgLgXSc_ehUzwSN2UDUPTkfP1J0b6jVaEiticY3UI1hPiGi_Ee63DP2SKRItbLI4isl_YyGadaiQguFwzmQIlgi0GaG_c53pVysw0B7EK1sYAQcEcSCiOghb2',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCD9dwebVGGFjLMxh4vdqxocLlj5TGpElBk1eH6c1dzuChOLYzw6kgSM-y6T_7waqO0ckOdjrjXvplroCpej9CsZuyBJb3Rucz9NqjNzUV8TeWwoNbdMmYR23iElk_fN7nUauo1dfN-V-st7OuiYYZDvv9bsexBF9UONGnweUs3ixP7S-eg3oLFtUHUvnS-MyFed_XtRXECXKnL8p_M8EOTxaswfN5HV0u8iiFYcHGkw1Zp1xtqqVlDC74Ao3TMPSoAv7y2yyFL7RdP',
];

const CheckIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M5 13l4 4L19 7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const softwareDevelopmentPoints = [
  { id: 'custom-architecture', text: 'Fully customized enterprise-grade architecture' },
  { id: 'integration', text: 'Seamless integration with legacy and 3rd-party APIs' },
  { id: 'cloud-ready', text: 'High-performance, secure, and cloud-ready deployments' },
];

const desktopIconAlignmentClass = 'ml-36 md:ml-auto md:mr-24';

const SoftwareDevelopmentSection = (): ReactElement => {
  const overview = erpOverviewLayoutConfig;

  return (
    <>
      <section id="overview" className={overview.section}>
        <div className={overview.container}>
          <div className={overview.grid}>
            <div className={overview.textColumn}>
              <h1 className={`${overview.title} h1-settings`} data-slot={overviewSlotIds.title}>
                Custom software that 
                <span className={overview.titleAccent}> scales, integrates & performs</span>
              </h1>

              <p className={`${overview.description} h3-settings`} data-slot={overviewSlotIds.description}>
                Unlock operational excellence with bespoke software solutions tailored to your unique business logic. We bridge the gap between disparate systems and build future-proof
                platforms that drive growth.
              </p>

              <ul className={`${overview.list} card-1-title-settings`} data-slot={overviewSlotIds.list}>
                {softwareDevelopmentPoints.map((point, idx) => (
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
              <img src={images[0]} alt="Developers collaborating" className={overview.image} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-backgroundOne dark:bg-backgroundDarkOne">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <SectionHeading
              heading="Software development & Integration capabilities"
              description="Capabilities built for enterprise scale"
              headingClassName="h2-settings"
              descriptionClassName="h3-settings max-w-xl !mb-4"
            />
            <div className="w-20 h-1.5 bg-secondary mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <FadeInOnScroll key={cap.id} delayMs={idx * 80}>
                <ServicesDescriptionCard
                  title={cap.title}
                  description={cap.description}
                  Icon={cap.Icon}
                  imageSrc={images[idx % images.length]}
                  delayMs={idx * 80}
                />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background dark:bg-backgroundDark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <SectionHeading
              heading="Our Technology Stack"
              description="Tools and platforms we use to build reliable systems"
              headingClassName="h2-settings"
              descriptionClassName="h3-settings max-w-xl !mb-4"
            />
            <div className="w-20 h-1.5 bg-secondary mx-auto mt-2 rounded-full" />
          </div>

          <style>{`
            .tech-marquee { overflow: hidden; }
            .tech-track { display: flex; gap: 1.25rem; align-items: center; }
            .tech-item { flex: 0 0 auto; min-width: 140px; transition: transform 180ms ease, box-shadow 180ms ease; }
            .tech-item:hover { transform: scale(1.06); z-index: 20; box-shadow: 0 10px 20px rgba(2,6,23,0.12); }
            .tech-marquee:hover .tech-track { animation-play-state: paused; }
            .tech-track.animate { animation: scroll-left 28s linear infinite; animation-play-state: running; }
            @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          `}</style>

          <div className="tech-marquee">
            <div className="tech-track animate">
              {(() => {
                const baseTechs: { name: string; src?: string; Icon?: (p: SVGProps<SVGSVGElement>) => ReactElement }[] = [
                  { name: '.NET', Icon: DotNetLogo, src: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Microsoft_.NET_logo.svg' },
                  { name: 'Node.js', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
                  { name: 'Java', src: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
                  { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
                  { name: 'Angular', Icon: AngularLogo, src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' },
                  { name: 'Flutter', src: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png' },
                  { name: 'AWS', src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
                  { name: 'Azure', Icon: AzureLogo, src: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Microsoft_Azure_Logo.svg' },
                  { name: 'Figma', src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
                ];

                const techs = baseTechs.concat(baseTechs);

                return techs.map((tech, idx) => (
                  <div key={`${tech.name}-${idx}`} className="tech-item flex flex-col items-center p-3 bg-a rounded-2xl shadow-sm transition border border-slate-100 group">
                    <div className="w-20 h-20 flex items-center justify-center bg-slate-50 rounded-xl mb-2 overflow-hidden">
                      {tech.Icon ? (
                        tech.name === '.NET' ? (
                          <tech.Icon className="w-24 h-16" />
                        ) : (
                          <tech.Icon className="w-12 h-12" />
                        )
                      ) : (
                        <img src={tech.src} alt={`${tech.name} logo`} className="max-h-12 max-w-full object-contain" loading="lazy" />
                      )}
                    </div>
                    <span className="font-semibold text-sm text-primary">{tech.name}</span>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 mesh-bg dark:bg-backgroundDarkOne bg-backgroundOne">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="text-center mb-8">
            <SectionHeading
              heading="Methodical Approach"
              description="A structured engineering process that ensures precision, quality, and timely delivery for every project."
              headingClassName="h2-settings"
              descriptionClassName="h3-settings max-w-2xl mx-auto !mb-4"
            />
          </div>

          <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4">
            <div className="hidden md:block absolute top-[2.25rem] left-0 w-full h-0.5 bg-background dark:bg-slate-700/30 z-0" />

            {[
              { id: 'discovery', title: 'Discovery & Architecture', desc: 'Analyzing requirements and mapping the blueprint for a scalable system.', Icon: TerminalIcon },
              { id: 'design', title: 'Design & Prototyping', desc: 'Iterative UI/UX design and architectural prototypes for early validation.', Icon: GlobeIcon },
              { id: 'development', title: 'Development & Testing', desc: 'Agile coding sprints combined with rigorous automated and manual QA.', Icon: TerminalIcon },
              { id: 'deployment', title: 'Deployment & Integration', desc: 'Seamless rollouts and system synchronization for immediate impact.', Icon: CheckIcon },
            ].map((step, idx) => (
              <div key={step.id} className="flex-1 flex flex-col items-center text-center px-4">
                <FadeInOnScroll delayMs={idx * 80} className="w-full">
                  <div className={`w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-secondary/20 ring-4 ring-white z-10 ${desktopIconAlignmentClass}`}>
                    <step.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="card-1-title-settings mb-2 text-primary">{step.title}</h4>
                  <p className="card-1-description-settings text-slate-500 leading-relaxed">{step.desc}</p>
                </FadeInOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-6 md:p-12 lg:p-24 bg-background dark:bg-backgroundDark">
        <div className="bg-primary max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="px-8 py-16 md:py-20 text-center relative z-10">
            <h2 className="h2-settings mb-6 mx-auto max-w-3xl text-white">Ready to Scale Your Enterprise?</h2>
            <p className="h3-settings mb-10 max-w-2xl mx-auto text-blue-100 opacity-80">Join the organizations already leveraging Systems Edge for their digital backbone. Let&apos;s build your future today.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link className="button-1-settings mx-auto w-fit bg-secondary text-white shadow-xl border-2 border-transparent transition duration-300 hover:bg-primary hover:border-white hover:scale-105 sm:mx-0" to="/contact-us">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareDevelopmentSection;
