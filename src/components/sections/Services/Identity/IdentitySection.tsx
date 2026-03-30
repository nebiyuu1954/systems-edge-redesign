import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import FadeInOnScroll from '../../../common/FadeInOnScroll';
import SectionHeading from '../../../common/SectionHeading';
import ServicesDescriptionCard from '../components/ServicesDescriptionCard';
import { erpOverviewLayoutConfig, overviewSlotIds } from '../components/overviewLayout';

export interface IdentitySectionProps {
  ctaLabel?: string;
}

interface CapabilityCard {
  id: string;
  iconName: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

interface MethodologyStep {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

const MaterialSymbol = ({ name, filled = false, className = '' }: { name: string; filled?: boolean; className?: string }): ReactElement => (
  <span
    className={`material-symbols-outlined ${className}`.trim()}
    aria-hidden="true"
    style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
  >
    {name}
  </span>
);

const CheckIcon = (props: React.SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M5 13l4 4L19 7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const overviewPoints = [
  'Zero-trust architecture alignment',
  'Seamless multi-cloud integration',
  'Compliance-focused governance',
];

const capabilityCards: CapabilityCard[] = [
  {
    id: 'single-sign-on',
    iconName: 'key',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJyD8jDW9POwmh7pK2ub0___0h4VWMHgGnC2spAy2sO5E26p5cYGsUfA5IE31Tt3WjW8vwpeLTItaqbNrtBqnTrBtooydjpXtk5Qu124rVqwhmc3_fF10Mm9LwV2sgLxr6YNYyldw42MmlvHFPPZ1oG88migc7jLkjITmG-zaQj4NAhv6nmYScz0lDZtAIIVD9jsP5Dmdo3cBP_vUvqzMXnu-gnOQLruGRTNwOOoI0LoYu0YdtPb8j3l3PZ1Gk60uAG-q3BcKsL-0o',
    imageAlt: 'Single sign-on concept for enterprise users',
    title: 'Single Sign-On (SSO)',
    description: 'Centralize access to all enterprise applications with unified authentication protocols.',
  },
  {
    id: 'multi-factor-auth',
    iconName: 'verified_user',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6zRbTlllAmvj8oznRD6w4JkVmvguWdwDg6hIE6FCzRMcF1sAr0lCkW3tbyf-A8R36Zy0aXoY3GWmAcQSpeLxSJvIwY2dIp0uV7EbKu75BCMgz9_1b0ZkaUjYwYSy9ImzEwpeyXa2DzyA6K4_I9UlvaXmYe6vwOUV7zdh__slUb3fCqiW9RPprkCj-SpsW2p_4gMxGM0NXHwt5dnlDd7shJGJ4uSVtukLeHrxMWGd2ICPwRjifS_yawqrCn3vuRSkfgP4M_6GsefG3',
    imageAlt: 'Multi-factor authentication concept for secure access',
    title: 'Multi-Factor Auth',
    description: 'Implement adaptive authentication layers including biometrics and hardware keys.',
  },
  {
    id: 'identity-governance',
    iconName: 'gavel',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuADdWea-SC0N-aUVmNqUJkam7Hsk9NZalNQrFBcaA3qGJKVIs5gLFbknfbSBW3VwaPVT17_zzFu3pJ7KXJ5KWGX6CTpgo25LFFqZ5JoslbUpe-yPUWxtMLon2zwUc3FtFaBHMjayyD13sSCM6xBXFTK65MgCER-EgBv_eK_JJLhZa-SY6d-DPyMiW-UJKmEMTcft1GEJOPgqeheS-xbvMsTK1MWNbRLEtqwqJEE9QDbBnJlrYVY7cqV2v4MO9w4CCvyAwLlPWY_bsCv',
    imageAlt: 'Identity governance and access review concept',
    title: 'Identity Governance',
    description: 'Automated lifecycle management and periodic access reviews for zero-drift security.',
  },
  {
    id: 'privileged-access',
    iconName: 'admin_panel_settings',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDkxZ0XM9gRqCDmsGMr0Mh_MDsBW-xZ772e7xkX7hpmnAmF9huRIAd1RRFaWof3tPpSb3CvdF5w0TuwfKQB-2G-SmQUGO-lg3H2TVWD4vrJow7Fep4qZ-NFyoRVizNFVSQV4reGp3z6w2I2IBHlfA63aSj84c9dcCQbZ267Fzo_bseHXLnDz9vSSYKGIt5BQQzVJQza39IOoqx58UqiCDKogA0fBwFzaPCLF0wmOA8wq1jTZ-dyTs3Jnyeu_tjtiYaFW9nh5GwI7Fqt',
    imageAlt: 'Privileged access management for administrators',
    title: 'Privileged Access',
    description: 'Secure high-risk administrative accounts with just-in-time elevation and session logging.',
  },
  {
    id: 'directory-integration',
    iconName: 'account_tree',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAS6rNMGVjZL_-eqTIRtKZqnbN7hkBIRtKFaLH2m8wsfMo0gYyPIL6xWAzRbOvBdK-_MtR1HyGRWuXYrfl_DTRm1UrBj_wA1fEVlkYFaMHc6PIgO7HBS1Bl_GjpMXLcUPS11tFoZM2aBQTFMn3D9Btlszl7NtoUQHxHIUOJBaMO2dTPAn2URrIZ4C2_c3cDuZYPg896-f6N8DJVJeHk0vGwrWZZ99dLbFtnp_z7V1IX1OW-kRXbRU5aiqkh6JtmJnZqj8Y2WrBmDFPA',
    imageAlt: 'Directory integration across enterprise systems',
    title: 'Directory Integration',
    description: 'Seamlessly sync AD, LDAP, and cloud directories into a single source of truth.',
  },
  {
    id: 'compliance-reporting',
    iconName: 'assignment_turned_in',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBakq2ciFCZ8o7-BJqKpOvq6xWsQJCZRX_hcUdbThHghFn6YwD5zFAdhlxBywyPRb6odewT0SA7rumw7Ez3dIU51vBa2RUfT8shSU7xcsujiaXos6Z6KVL14-a1wjcEXs37MvB1OqqcdeHg_84B_xaIytLsNMgfw-Zzc9OjVCE7CqXE0qzKWYHlIpDiDel5ot89dBT73y3-u1Tl_Jcdak9M3hpa3MeqRNxPpLHD2Ia8fGpLO90gCypjopS_uYNFDs1wza8sFGGOkeq-',
    imageAlt: 'Compliance reporting dashboard for audits',
    title: 'Compliance Reporting',
    description: 'Real-time audit trails and reporting for SOX, HIPAA, and GDPR regulatory standards.',
  },
];

const methodologySteps: MethodologyStep[] = [
  {
    id: 'strategy',
    iconName: 'insights',
    title: 'Strategy',
    description: 'Comprehensive audit of current identity landscape and risk assessment.',
  },
  {
    id: 'design',
    iconName: 'architecture',
    title: 'Design',
    description: 'Architecting a zero-trust roadmap tailored to your tech stack.',
  },
  {
    id: 'implementation',
    iconName: 'settings_input_component',
    title: 'Implementation',
    description: 'Configuration, integration, and iterative pilot testing of components.',
  },
  {
    id: 'transition',
    iconName: 'swap_horiz',
    title: 'Transition',
    description: 'Full-scale deployment, training, and 24/7 hypercare support.',
  },
];

const IdentitySection = ({
  ctaLabel = 'Request IAM Consultation',
}: IdentitySectionProps): ReactElement => {
  const overview = erpOverviewLayoutConfig;

  return (
    <>
      <section id="overview" className={overview.section}>
        <div className={overview.container}>
          <div className={overview.grid}>
            <div className={overview.textColumn}>
              <h1 className={`${overview.title} h1-settings`} data-slot={overviewSlotIds.title}>
                Secure your enterprise <br />
                <span className={overview.titleAccent}>Identity &amp; Access</span> Perimeter
              </h1>

              <p className={`${overview.description} h3-settings`} data-slot={overviewSlotIds.description}>
                Deploy resilient security frameworks that balance ironclad protection with seamless user experiences. Our MFA and SSO integrations ensure that only the right people access the
                right resources at the right time.
              </p>

              <ul className={`${overview.list} card-1-title-settings`} data-slot={overviewSlotIds.list}>
                {overviewPoints.map((point, idx) => (
                  <FadeInOnScroll key={point} delayMs={idx * 80} className="block">
                    <li className={overview.listItem}>
                      <span className={overview.listBullet}>
                        <CheckIcon className="h-4 w-4" />
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
                alt="Enterprise security login interface"
                className={overview.image}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsRiUqx2X6Xv4HwrSqxXbfjhjrcNxz636M0sc_I69_R_Svfq0E-OhMFw8rhSwrauNfiP7ZtqS-6mLexhftdkPy6GXalL17aWJhxE3sxFSAKloq-nx34TEkqcpMjC00JfE-iwJC1nMKfrDMeo0LLW7hpmhGmgpHL7SLUBoHz7P7vP8WAS1f-ZngoxdL3BTcrph9S74fz-qMdJmIoY36XQEexMIQV6rpHihvMpaSWWGZGJW1IUdA_8J8jCp5LI24RRxX1RhlYwkUJbGN"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-lg md:block">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container text-secondary">
                    <MaterialSymbol name="fingerprint" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Identity Verified</p>
                    <p className="text-sm font-semibold text-primary">99.9% Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-backgroundOne dark:bg-backgroundDarkOne py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <SectionHeading
            id="identity-services"
            heading="IAM Services"
            description="Modular security components designed to scale with your organization's complexity."
            headingClassName="h2-settings"
            descriptionClassName="h3-settings max-w-xl mb-4"
          />

          <div className="w-20 h-1.5 bg-secondary mx-auto mt-2 mb-8 rounded-full" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {capabilityCards.map((card, idx) => {
              const Icon = (props: React.SVGProps<SVGSVGElement>) => (
                <span className={props.className} aria-hidden="true">
                  <MaterialSymbol name={card.iconName} />
                </span>
              );

              return (
                <ServicesDescriptionCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  imageSrc={card.imageSrc}
                  Icon={Icon}
                  delayMs={idx * 80}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24" aria-labelledby="identity-methodology-heading">
        <div className="mb-20 text-center">
          <h2 id="identity-methodology-heading" className="h2-settings mb-4 text-primary">
            How we secure your identities
          </h2>
          <p className="h3-settings text-slate-600">A systematic approach to identity modernization.</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 hidden h-px w-full bg-surface-container-highest lg:block transform -translate-y-1/2" />
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {methodologySteps.map((step, index) => (
              <FadeInOnScroll key={step.id} delayMs={index * 120} className="block">
                <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-secondary bg-surface-container-lowest shadow-sm">
                    <span className="text-3xl text-secondary">
                      <MaterialSymbol name={step.iconName} />
                    </span>
                  </div>
                  <h4 className="card-1-title-settings mb-4 text-primary">{step.title}</h4>
                  <p className="card-1-description-settings text-slate-600">{step.description}</p>
                  {index < methodologySteps.length - 1 ? <span className="sr-only">Next step follows</span> : null}
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="p-6 md:p-12 lg:p-24 bg-background dark:bg-backgroundDarkOne">
        <div className="bg-primary max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="px-8 py-16 md:py-20 text-center relative z-10">
            <h2 className="h2-settings mb-6 mx-auto max-w-3xl text-white">Ready to strengthen your identity security?</h2>

            <p className="h3-settings mb-10 max-w-2xl mx-auto text-blue-100 opacity-80">Schedule a diagnostic session with our IAM specialists and discover how to eliminate credential-based vulnerabilities.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link className="button-1-settings mx-auto w-fit bg-secondary text-white shadow-xl transition duration-300 hover:bg-teal-600" to="/contact-us">
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IdentitySection;