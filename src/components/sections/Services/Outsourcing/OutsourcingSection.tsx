import type { ReactElement, SVGProps } from 'react';
import SectionHeading from '../../../common/SectionHeading';
import FadeInOnScroll from '../../../common/FadeInOnScroll';
import { Link } from 'react-router-dom';
import ServicesDescriptionCard from '../components/ServicesDescriptionCard';
import { erpOverviewLayoutConfig, overviewSlotIds } from '../components/overviewLayout';

const OutsourcingSection = (): ReactElement => {
  const overview = erpOverviewLayoutConfig;

  const TerminalIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const SearchIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const ShieldIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const SpeedIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const LaunchIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const DesignIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const overviewPoints: string[] = [
    'Rapid deployment of pre-vetted senior developers',
    'Flexible engagement models: Project-based or T&M',
    'Rigorous technical screening and cultural alignment',
  ];

  return (
    <main>
      <section id="outsourcing-overview" className={overview.section}>
        <div className={overview.container}>
          <div className={overview.grid}>
            <div className={overview.textColumn}>
              <h1 className={`${overview.title} h1-settings`} data-slot={overviewSlotIds.title}>
                Access top-tier technical talent, <br />
                <span className={overview.titleAccent}>scaled</span> to your needs
              </h1>

              <p className={`${overview.description} h3-settings`} data-slot={overviewSlotIds.description}>
                Bridge the talent gap with Systems Edge Solutions through high-impact engineering teams and specialized professionals who integrate seamlessly into your workflows and accelerate product delivery.
              </p>

              <ul className={`${overview.list} card-1-title-settings`} data-slot={overviewSlotIds.list}>
                {overviewPoints.map((point, index) => (
                  <FadeInOnScroll key={point} delayMs={index * 80} className="block">
                    <li className={overview.listItem}>
                      <span className={overview.listBullet}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden className="h-4 w-4">
                          <path d="M5 13l4 4L19 7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className={overview.listText}>{point}</span>
                    </li>
                  </FadeInOnScroll>
                ))}
              </ul>
            </div>

            <div className={overview.imageColumn} data-slot={overviewSlotIds.image}>
              <div className={overview.imageGlow} aria-hidden="true" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbZxHRpd9SEGymsKlqZiOkEZOZ1egvDMMho3FhUjwNLaJLIcNatu9OR98rn1ZxbzQCyUHcc3QNUswbyATZlB12cBCKvWegpKMU3xa9LNZmHrFn__2REbAEnRrXtNVcwe6mzEPNvDxf3rOCdo_Fr-XLC88BIVIzyioOiaxfPCgCx-vc2B9chkEUfA2AG1xUtb5iKGbwdMqxdIIcUu3LtF3aIZtXnnZiKRI-AvbMV-74iq8th_Z7KOykqc6Ps-YbPcY_06gSZxJa3Yb5"
                alt="A diverse, professional engineering team collaborating in a modern tech office environment"
                className={overview.image}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-backgroundOne dark:bg-backgroundDarkOne py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <div className="text-center mb-8">
            <SectionHeading
              id="outsourcing-services"
              heading="IT outsourcing & staffing services"
              description="High-impact engineering teams and staffing solutions that integrate with your workflows to accelerate delivery and reduce time-to-hire."
              headingClassName="h2-settings"
              descriptionClassName="h3-settings max-w-xl !mb-4"
            />
            <div className="w-20 h-1.5 bg-secondary mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServicesDescriptionCard
              title={"Full-Stack\nDevelopment"}
              description="End-to-end web and mobile application development using modern frameworks like React, Node.js, and Python."
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDwc72JpDcpd-H1G1AO6YEO9oiExRHQpWCXpMph2g4I6FJzytAW7BNDhK7b4a_1lq20cP930Mh5h-lgMinVtj7bpOqYh6phzj2Fc46bS8iBZD5F4mfrjsfcSqTK_7amWr8twNi_myicBRNzWsJFQ6Q6gcNb9I9M9uT_rRFFFwuRgzcjfwYq_MRuRvqo12C10yGg_IH9BIUORWOXtsVRhJQXOQzl0OphFcReah3HNuItpZkR_dnEJnbvb2peLTdpbuSGNMQke3O1yTgk"
              delayMs={0}
              Icon={TerminalIcon}
            />

            <ServicesDescriptionCard
              title={"Data Science\n& AI"}
              description="Specialized talent for machine learning, big data analytics, and implementing business intelligence solutions."
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDzgmQNigsRa__OjER_ul4BPK9G5TfbztuIc_TzUUjhYF3OD-geywETNydJVf-AMV3AI-n-F7Ru5cVw9s1ohHU-EuL4pc84ny6j7wW4QeXvlTUWvEK7cynWXN3ZQ8LCXb8sT85gsloR-UpOYD7NsW7Gpxg_zjcTxpJqZ-dtIUqOnzedxaMfeB5X0c2ulQHKay6scrlfsXnx-R7qV03KzpIH4PFdhqtO9QMsOvZmbq6U5hWQYnbao-Wz7QV_TbMjcqePjALf-9FqQZ1W"
              delayMs={80}
              Icon={SearchIcon}
            />

            <ServicesDescriptionCard
              title={"Cyber\nsecurity"}
              description="Expert security consultants for penetration testing, compliance audits, and architectural risk assessments."
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAraNuOT9uRlSwrtx7hR7etUlYO9tpVYbrP3qIVepHokJlvh-avjKlV6Er6TZai3eL1eRrC9mWGk9QdQ88O0x5xkNUIG7MrzPETdbN0tkIqHJoOoTyBizLMxdny1O24meBfGc8M5voFCrL5UTvFyA-7h2F7cIzsH0SI3oR2uyCfqOzFTb8YzHBWwBtYAvzUDC6e07mTooXA-RUUW6zXoJ_2hz3ERrzpk0w3B5hEzzPE1ZXkRK8_NIhQsECM7OPL8SoH4ITMYWWtQCv8"
              delayMs={160}
              Icon={ShieldIcon}
            />
            <ServicesDescriptionCard
              title={"DevOps \n& Cloud"}
              description="Architects and engineers skilled in AWS, Azure, GCP, Kubernetes, and CI/CD pipeline automation."
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCUi_MN69CFfIuetcVGi6dcC_ksszbqrBlr9bqZ79mWuFqyE3U7XjZzXP7R4S-pv64KRynwxP1Ycg614lJbbLJfG5BBJoLzxPCztOVs0NoM9lcPXU03u_cSgcNuxfGIVM3Z83_TxRgfSCqgXTZ47Ug9JVYuLhKn78Kq3LGi01keWDqRljBLdlrbHyqNaQKD21fd81V2VeYb9MzLEZEtVgRoFr927UdHW3v2H3j5Zi2So3vza7kH2i0qVSc_113unHYR0EiQhSnl7WbF"
              delayMs={240}
              Icon={SpeedIcon}
            />

            <ServicesDescriptionCard
              title={"QA \n& Testing"}
              description="Automated and manual testing experts ensuring high-quality software releases and zero-defect deployments."
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAIUsmmekR640fHL9bf95GQuQ688sAZivmRO_EFgWHPho-VxK13FhO_MCHbv6puD_g8QyaN6IP63GHSAqq4Acz1BbvkI_DqoGVtzg_bOZtyQqLF1cf96Oh8edWpqXev4Xevv0_S8nZnfXhqlcWz3oWmzdoqWxxyUvB74NZSbnGMnxOqz5g8qUCb4eWgFlqr5Wachn0I2ktc_bIGqLDDn4uqU8wDtYJ5ROFUcEAiDhGIXoWM7GNGyYrtR9GbxL3_jpD7rHKNQkjnYOoc"
              delayMs={320}
              Icon={LaunchIcon}
            />

            <ServicesDescriptionCard
              title={"UI/UX \nDesign"}
              description="Creative designers focused on user-centric product experiences and modern interface systems."
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAtMZfNWj9TkTI4fPV2q_W9HjycaL6SIFsTT-mcol3DJWPfFAfzCPMCJ2olEbuXYiyOVa8z1oXt0ChdsNAb6xGEfzXeVddywNaTOI2og8oLWQU-qGkOrvUvq0nMq2f8jvNglCNVUh56cERupa2Heg5_DBMcElsp8GoToyfZ06TQcRVEBMbMoks29JFGRvxDMDZ4-Y4dU_ptdYn5aNtpi_KzLLIr01X60Gg1Qsf-9nIMWdmKqEV_V0Cn5yigMBKx72cm5sUhGquT2Hob"
              delayMs={400}
              Icon={DesignIcon}
            />
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-backgroundDark py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <SectionHeading
              id="how-we-build-your-teams"
              heading="How we build your teams"
              description="Our Strategic Integration Process"
              headingClassName="h2-settings"
              descriptionClassName="h3-settings max-w-xl !mb-4"
            />
            <div className="w-20 h-1.5 bg-secondary mx-auto mt-2 rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto">
            <FadeInOnScroll delayMs={0} className="relative">
              <div className="relative flex items-start mb-16">
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-secondary/30" aria-hidden />
                <div className="relative z-10 w-12 h-12 flex-shrink-0 bg-secondary text-white flex items-center justify-center rounded-full font-bold text-xl shadow-lg">1</div>
                <div className="ml-10">
                  <h4 className="card-1-title-settings mb-2 text-primary">Discovery &amp; Analysis</h4>
                  <p className="card-1-description-settings text-primary/70 dark:text-white leading-relaxed">We conduct a deep dive into your technical stack, project roadmap, and team culture to define the exact skill sets required for success.</p>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delayMs={80} className="relative">
              <div className="relative flex items-start mb-16">
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-secondary/30" aria-hidden />
                <div className="relative z-10 w-12 h-12 flex-shrink-0 bg-secondary text-white flex items-center justify-center rounded-full font-bold text-xl shadow-lg">2</div>
                <div className="ml-10">
                  <h4 className="card-1-title-settings mb-2 text-primary">Sourcing &amp; Screening</h4>
                  <p className="card-1-description-settings text-primary/70 dark:text-white leading-relaxed">Our global network is activated. Candidates undergo rigorous technical evaluations and live coding sessions curated by our domain experts.</p>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delayMs={160} className="relative">
              <div className="relative flex items-start mb-16">
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-secondary/30" aria-hidden />
                <div className="relative z-10 w-12 h-12 flex-shrink-0 bg-secondary text-white flex items-center justify-center rounded-full font-bold text-xl shadow-lg">3</div>
                <div className="ml-10">
                  <h4 className="card-1-title-settings mb-2 text-primary">Precise Matching</h4>
                  <p className="card-1-description-settings text-primary/70 dark:text-white leading-relaxed">We present a shortlist of the top 3% of talent. You interview and select the candidates who best fit your team dynamics and technical needs.</p>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delayMs={240} className="relative">
              <div className="relative flex items-start">
                <div className="relative z-10 w-12 h-12 flex-shrink-0 bg-secondary text-white flex items-center justify-center rounded-full font-bold text-xl shadow-lg">4</div>
                <div className="ml-10">
                  <h4 className="card-1-title-settings mb-2 text-primary">Seamless Integration</h4>
                  <p className="card-1-description-settings text-primary/70 dark:text-white leading-relaxed">Onboarding begins immediately. We handle the administrative heavy lifting while you focus on leading your newly expanded engineering force.</p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <section className="p-6 md:p-12 lg:p-24 bg-backgroundOne dark:bg-backgroundDarkOne">
        <div className="bg-primary max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="px-8 py-16 md:py-20 text-center relative z-10">
            <h1 className="h2-settings mb-6 mx-auto max-w-3xl text-white">Ready to scale your engineering capacity?</h1>

            <p className="h3-settings mb-10 max-w-2xl mx-auto text-blue-100 opacity-80">Get the elite technical talent your project deserves. Let's discuss your requirements today.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link className="button-1-settings mx-auto w-fit bg-secondary text-white shadow-xl transition duration-300 hover:bg-teal-600 sm:mx-0" to="/contact-us">
                Request Staffing Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OutsourcingSection;
