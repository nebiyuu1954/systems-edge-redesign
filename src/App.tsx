import type { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HeroSection, ObjectivesSection, OurServicesSection, TrustedBySection, TestimonialsSection, NumbersSection } from './components/sections';
import GlobalLocationsSections from './components/sections/Global-Locations/GlobalLocationsSections';
import FinalCTASection from './components/sections/FinalCTA/FinalCTASection';
import Footer from './components/layout/Footer/Footer';
import ERPSection from './components/sections/Services/ERP/ERPSection';
import OutsourcingSection from './components/sections/Services/Outsourcing/OutsourcingSection';
import SupportedSection from './components/sections/Services/Supported/SupportedSection';
import SoftwareDevelopmentSection from './components/sections/Services/Software-Development/SoftwareDevelopmentSection';
import { TestingSection } from './components/sections/Services/Testing';
import IdentitySection from './components/sections/Services/Identity';
import UIUXSection from './components/sections/Services/ui-ux/UIUXSection';
import ScrollToTop from './components/common/ScrollToTop';
import FadeInOnScroll from './components/common/FadeInOnScroll';
import AboutUsPage from './components/pages/About-us';
import CareersPage from './components/pages/Careers';
import insaLogo from './assets/logos/Insa.webp';
import investmentLogo from './assets/logos/investment.webp';
import poessaLogo from './assets/logos/Poessa.webp';
import pssaLogo from './assets/logos/pssa.webp';

function HomePage(): ReactElement {
  return (
    <main>
      <Header
        navItems={[
          { id: 'services', label: 'Services', href: '#services' },
          { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
          { id: 'locations', label: 'Locations', href: '#locations' },
          { id: 'careers', label: 'Careers', href: '/careers' },
          { id: 'about', label: 'About Us', href: '/about-us' },
        ]}
        ctaLabel="Get Consultation"
        ctaHref="#contact"
        logoSizeClass="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44"
      />
      <HeroSection
        badgeText="Enterprise Grade Solutions"
        title="Enterprise IT & ERP Solutions Delivered by Global-Grade Teams"
        description="Systems Edge Solutions delivers software development, IT outsourcing, and ERP implementation services for enterprises and institutions-combining global delivery standards with strong local execution."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAN51Y3Ugac-GYWdywVgWJPohaROAOGmQnJfpPHmDeOGZWZG15tLGeUxLTiJqzEpyFXGTB_Itbd09t_cMQzHKT6vMFrx3BtrUOMWe5eTrbtaTBNkdeaV4nXnhJHhFQ48hvwWfScSAr0DYpopIiGyXmVjLWcMqRv9ivWf6jLLxrAsn42WGJbsivplNbJEh5IqFDVWbCeoC_KaKNzziOpq5vbUvoFfQVKsH0fKlok053s6gYSdguGjBtkbDNaQTxLhz3BOV1Nbyk7gBix"
        imageAlt="Diverse global team working in modern office"
        actions={[
          { id: 'explore-services', label: 'Explore Services', href: '#services', variant: 'primary' },
          { id: 'contact-sales', label: 'Contact Sales', href: '#contact', variant: 'secondary' },
        ]}
      />
      <TrustedBySection
        heading="Trusted by partners and institutions including"
        partnerLogos={[
          {
            id: 'institution-insa',
            logoSrc: insaLogo,
            logoAlt: 'INSA partner logo',
            message: 'INSA partnered with us to modernize core ERP processes across manufacturing lines.',
            personName: 'Mina Lopez',
            personRole: 'Head of IT, INSA',
          },
          {
            id: 'institution-investment',
            logoSrc: investmentLogo,
            logoAlt: 'Investment partner logo',
            message: 'Our investment partners rely on us for secure, auditable financial integrations.',
            personName: 'Harold Chung',
            personRole: 'Finance Director, Investment Co.',
          },
          {
            id: 'institution-poessa',
            logoSrc: poessaLogo,
            logoAlt: 'Poessa partner logo',
            message: 'Poessa used our delivery model to deploy a global HR and payroll platform.',
            personName: 'Aisha Khan',
            personRole: 'CIO, Poessa',
          },
          {
            id: 'institution-pssa',
            logoSrc: pssaLogo,
            logoAlt: 'PSSA partner logo',
            message: 'PSSA credits our phased rollout approach for minimal disruption during migration.',
            personName: 'Carlos Mendes',
            personRole: 'CTO, PSSA',
          },
        ]}
        fallbackMessage="Systems Edge Solutions brought real expertise and local insight to our global ERP rollout."
        fallbackPersonName="Alex Rivera"
        fallbackPersonRole="CIO, Global Manufacturing Corp."
        visibleCount={3}
        autoPlay={true}
        intervalMs={3800}
        slideDurationMs={1200}
        transitionEasing="cubic-bezier(0.22, 1, 0.36, 1)"
      />
      <ObjectivesSection
        blocks={[
          {
            id: 'delivery-model',
            imageSrc:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDj1sJwR4nVYH0K59FXCdUdJ3F3D_nTkgstBE2OpxvBKLtlgEePAS_7ecoVQADag2_jOw1ZFrcX6E-Aw_azryJBg-8Nw5FAk2bhIvdL1Zd3gjzrhEYp0FwZwlQc173o8qJt_bQvaAqzeu1ES6YP52JCvxHr9pwhlI8SIYPwxTig6VdtFL52q7FfWqE1RixjO-8GL1Tp6ZzDLjaXg5e9c7wqvNlbNLLyot1YRZJg_OdXmYTntK1BhrIiQzIG1EAx-kYjtoq1l-ylrQQ5',
            imageAlt: 'Hybrid global team collaborating in a modern office',
            title: 'A Delivery Model Designed for Reliability and Scale',
            description:
              'Our hybrid delivery model combines local domain expertise with globally aligned engineering practices, ensuring high-quality results and seamless scalability for your enterprise projects.',
            details:
              'This model blends local program leadership with globally distributed engineering squads to keep delivery predictable while scaling faster across parallel workstreams.',
            detailPoints: [
              'Regional engagement leads for domain alignment and stakeholder visibility',
              'Globally standardized delivery governance and quality controls',
              'Elastic team scaling based on sprint load and release milestones',
            ],
            dataPurpose: 'delivery-model-section',
          },
          {
            id: 'high-performance-software',
            imageSrc:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAqYNdYACn3nn7QopbFidINBYMi1s0yf9gtb9Dwy0Y8lwQOMFrn9QYDvPPDYXe3SBEgnJlGjG0ibMZNT8VRdS3ZeNuy3wJF1Z43K0GgXsHLrP9AAq23SkDetgrNkQYehnzZjvxRfCULPdXCqbrydygQLwMPE6h-YGEEPryjbU-Kyt7oCJbBH_8BHKTOUeYgB2eu-zjhsI-jEcDiyMxlwHFJ744T2O-eOFtTxdvV-iZ0H_uuOD9x4Zgnaw_M0lTyWMKTHRmg5pxDPSCE',
            imageAlt: 'Modern data center with servers and glowing lights',
            title: 'High-Performing Software Used by Millions',
            description:
              'We build national-scale software that serves millions of users, focusing on performance, security, and the robustness required for mission-critical applications.',
            details:
              'Our architecture patterns are optimized for sustained high throughput, low-latency response times, and strong operational observability in production.',
            detailPoints: [
              'Performance benchmarking integrated into CI and release gates',
              'Security-first engineering practices for public-scale platforms',
              'Resilience patterns for fault isolation and rapid recovery',
            ],
            dataPurpose: 'software-performance-section',
          },
          {
            id: 'enterprise-erp',
            imageSrc:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAEjcOzcWA2xL-FZT7uDIJlOUk4vA6AsJigOMZA3vya9mf8mLf22_ypI17D7ZQ2FtcE8rhOxBUQS5leFcGoJd67fY1UyBkyFvOyA5EPooLYztdXFUGdnzuB4O3ux3SBQlfr1Kav4Suh7GeVRCc5DbvsAjTNVJcpFSFTT9A1j1bKwXhk47noiAJB6PvXSQpDKoki5Ae1P2ZWnubXwdE1np1bP85BEN5BPncXc9JpmHUyw1InPkmDJHiu4Z0pGj9AEZRLW-1ri6yvFBVz',
            imageAlt: 'Professional server room and enterprise hardware',
            title: 'Enterprise-Grade ERP Implementation, Delivered with Confidence',
            description:
              'Systems Edge Solutions provides ERP implementation and enterprise system services in partnership with NTT DATA, delivering industry-leading solutions with technical excellence.',
            details:
              'We execute ERP programs from discovery to post-go-live optimization with structured rollout, data migration assurance, and measurable business adoption support.',
            detailPoints: [
              'Phased deployment strategy to minimize business disruption',
              'Integration blueprints for finance, HR, procurement, and operations',
              'Governance model with risk checkpoints and executive reporting',
            ],
            dataPurpose: 'erp-implementation-section',
          },
        ]}
      />
      <OurServicesSection
        heading="Our Services"
        description="From enterprise ERP implementations to full-cycle software development and managed IT services, we support organizations across the entire technology lifecycle."
        services={[
          {
            id: 'service-erp-enterprise',
            imageSrc:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuA35cFMKOXIWaHq-wwKkJnafJw8-7kKhX77aic3e3A9UdrIo2WWvsCVYg25hAbwVtw3t7JCesqewCYkFlotrpxulXqlmEgVfn616F7uatRyQi0EBYWOoMvDxtIu-8myKD0VhMEcSeCzVtrApnj9_pJHqZgiW7qWUriEDv9Ovby2GIPbNA5GUxRbb1cZhC8au_gs2xyWEcapmclMy7wLcA8UY7hIQ9gG69GVfP5z9bQSyp8syVDcmvt7Q5HCjrL1cdeXEy5xB3Z4_S-L',
            imageAlt: 'Server room and enterprise dashboard',
            title: 'ERP Implementation & Enterprise Systems',
            description:
              'End-to-end ERP implementation and enterprise system integration for global organizations. We ensure seamless data flow across your entire business architecture with industry-leading platforms.',
            learnMoreHref: '/services/erp',
          },
          {
            id: 'service-outsourcing-staffing',
            imageSrc:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuA9YxF5vR-G64fVEbIre8dyJ0pKFgEFLaFB6HW2RN5s_ZhpCxqsCrc9aF0xdmLoHWCfhwPsu5r2IeKMzOV1Sh-ompRuw5neUwdsO9ehuGHNwwNB_-tHFjqBNGEydAr75A3KvYzstZTRBBg00ckcf5uCvaxblqGwXQPrPYFIy4hy6n_m9tpog4tFm-6v2CmQjX1zO4r7OxnLv4tfOFlz9z1Hhvdh7yjUawb-7O9gco8ojXbHEgOLboBfjswtNvcqnWNwLcz639J546ao',
            imageAlt: 'Global team and handshake',
            title: 'IT Outsourcing & Professional Staffing',
            description:
              'Access top-tier technical talent and strategic outsourcing solutions. We bridge the talent gap by providing expert engineers and project managers tailored to your specific organizational goals.',
            reversedOnDesktop: true,
            learnMoreHref: '/services/outsourcing',
          },
          {
            id: 'service-managed-devops',
            imageSrc:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuASz_vZUfQF1bo4qw5uCecYcjAFl4Doudhb2VcojMXjmdKsNq2mLAR-UI8lWPPmatCy2Sl5L6Invw73eUJ3P29AegYiuM8Nw400Oq0MtvSy7FU0Wm__AYkncjT63TQ_ge_5f55IUJB2u3xPW9EE3KOWrUWEPc5cLbbnhJPirb0FlE0_gMegSbtxNrJX-F594HxSNN5yeevyAgFAfiqQ-1DLlE5nNxiNCRHwoZSiXvZLlEqcphWPJs7R9VbZF1oUoSuk39HOuKffbtWO',
            imageAlt: 'Cloud infrastructure and engineers',
            title: 'Support, Managed Services and DevOps',
            description:
              'Continuous support and automated infrastructure management. Our DevOps specialists optimize your deployment pipelines and ensure 24/7 reliability for your mission-critical applications.',
            learnMoreHref: '/services/supported',
          },
          {
            id: 'service-software-integration',
            imageSrc:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAa8R5586cHHHMkItk2sEPi93CO4ZdgaH0_FwtD9836N1usaqqutrEIEkxFkygRxxKkAbCENMafQP6y1Ij765d_j7HhoRiU5IoxSSrJetPG0IMyFbzTbTVPWe_vDkN0X7SOfIxrrYfasMavTQCH6YxDmZ-7i8RhRqTwoHexLSKXMsQj3J78J4Ze0OPLVLSiweWcaS7eVJ4fE5LUPCMcK4hH2a8XoFOq-YIK1kRc9k43SSlWZ2BfFpilZ0-eQzEnxKcktKyojSdzF3-A',
            imageAlt: 'Developers coding on dual monitors',
            title: 'Software Development & System Integration',
            description:
              'Custom software solutions designed for scalability and performance. We build robust web and mobile applications that integrate perfectly with your existing legacy systems and modern APIs.',
            reversedOnDesktop: true,
            learnMoreHref: '/services/software-development',
          },
          {
            id: 'service-ux-ui',
            imageSrc:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuC0VDhcy_Jx8hD0bMhGZJrBF5GTHSv857vytt0cswT-obe6fgmkbkLoY6YVgJcwGc2kVbaDyLbvSGVVUVOUW6qRRiDOBt6cxFn8yxLE93JW5da5d0_A6uaklql68iM5JchAUOM2_bZQaV_iFsGlk3Gs_J1YTOvt3AyCzIIHNcSvoP9NS6f1RspWuj_5f9OK8G-gucNlsKhpfVvFKAjOozhaeJnyRnZiHcUiqemnp4n1B6rMG0G5Sv0WK0fVcmB0PEo6gTA05IJsogZ_',
            imageAlt: 'Designers sketching wireframes',
            title: 'UX/UI Design',
            description:
              "Human-centric design that drives engagement and productivity. Our design team focuses on creating intuitive interfaces and seamless user journeys that reflect your brand's enterprise excellence.",
            learnMoreHref: '/services/ui-ux',
          },
          {
            id: 'service-testing',
            imageSrc:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCjk5lrFuhG-3uUB9GgpKkryjGljjkwCg3IdrTryilj-ATmvS-VByNV57o4DHkIdLMYDDHkSRIr8ZcU_PV-FMXPa2TL5g22quolt1F3rTrW21zh_mtv3ILIrEFtOXhNF2O2OqaEnSPb9a_GjjlTeQdKcSKCUdvEYS2DsWGuuvvZxqIHoUwhN4vpO8axi-M8FO2x6Csi-aV8QeJ-JbR89mzDCR-TCQ9ZPX0Xf64IbI0rJU8eDujaVCMXtRUFBmSMpyfTDmDRXNrqDOLA',
            imageAlt: 'QA engineer with test charts',
            title: 'Software Testing',
            description:
              'Rigorous quality assurance to ensure zero-defect deployments. From automated regression tests to manual penetration testing, we ensure your software is secure, fast, and reliable.',
            reversedOnDesktop: true,
            learnMoreHref: '/services/testing',
          },
          {
            id: 'service-iam',
            imageSrc:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDbqt5dryNPoWOkyQpzjGzCxmiLKNFOVHfAbsFm4MeRoyWTm1uAcVO4zBHorJXV41KqEEJoS6sIjwPKd2BprWv1Vx--JE549JWifvmaM1OkNuufEjd-80j63g7wdNpVxpNNnablTk3fdvklPKXhfPl6kRAKVMGk5rdTUrB9IE_-DTrHUDW4e3s8gQMQORfn5l-vxsvxq8lPG5Hw6TpwDbilzwT_CJq6dUIxTIhn75vE4p-k7HFsRmT-b53Szpba8nB0scdO3tk2BuZS',
            imageAlt: 'Cyber security and identity management',
            title: 'Identity & Access Management',
            description:
              'Secure your enterprise perimeter with advanced IAM solutions. We implement multi-factor authentication, single sign-on, and rigorous access control policies to protect your digital assets.',
            learnMoreHref: '/services/identity',
          },
        ]}
      />
      <TestimonialsSection />
      <NumbersSection />
      <FinalCTASection />
      <GlobalLocationsSections
        className="bg-backgroundOne dark:bg-backgroundDark"
        contentClassName="py-8 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        headerNode={(
          <div className="mx-auto mb-12 max-w-7xl px-6 text-center lg:px-12">
            <FadeInOnScroll>
              <h1 id="locations-heading" className="mb-6 text-center text-4xl font-bold text-primary dark:text-white md:text-5xl">
                Global Locations
              </h1>
            </FadeInOnScroll>

            <FadeInOnScroll delayMs={120}>
              <p className="mb-20 max-w-[800px] mx-auto text-center text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Our offices and delivery centers around the world.
              </p>
            </FadeInOnScroll>
          </div>
        )}
      />
      <Footer />
    </main>
  );
}

function ERPPage(): ReactElement {
  return (
    <main>
      <Header
        navItems={[
          { id: 'services', label: 'Services', href: '/#services' },
          { id: 'erp', label: 'ERP Solutions', href: '/#enterprise-erp' },
          { id: 'industries', label: 'Industries', href: '/#services' },
          { id: 'testimonials', label: 'Testimonials', href: '/#testimonials' },
          { id: 'leadership', label: 'Leadership', href: '/#leadership' },
          { id: 'locations', label: 'Locations', href: '/#locations' },
          { id: 'careers', label: 'Careers', href: '/careers' },
          { id: 'about', label: 'About Us', href: '/about-us' },
        ]}
        ctaLabel="Get Consultation"
        ctaHref="/#contact"
        logoSizeClass="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44"
      />
      <ERPSection />
      <Footer />
    </main>
  );
}

function OutsourcingPage(): ReactElement {
  return (
    <main>
      <Header
        navItems={[
          { id: 'services', label: 'Services', href: '/#services' },
          { id: 'erp', label: 'ERP Solutions', href: '/#enterprise-erp' },
          { id: 'industries', label: 'Industries', href: '/#services' },
          { id: 'testimonials', label: 'Testimonials', href: '/#testimonials' },
          { id: 'leadership', label: 'Leadership', href: '/#leadership' },
          { id: 'locations', label: 'Locations', href: '/#locations' },
          { id: 'careers', label: 'Careers', href: '/careers' },
          { id: 'about', label: 'About Us', href: '/about-us' },
        ]}
        ctaLabel="Get Consultation"
        ctaHref="/#contact"
        logoSizeClass="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44"
      />
      <OutsourcingSection />
      <Footer />
    </main>
  );
}

function SupportedPage(): ReactElement {
  return (
    <main>
      <Header
        navItems={[
          { id: 'services', label: 'Services', href: '/#services' },
          { id: 'erp', label: 'ERP Solutions', href: '/#enterprise-erp' },
          { id: 'industries', label: 'Industries', href: '/#services' },
          { id: 'testimonials', label: 'Testimonials', href: '/#testimonials' },
          { id: 'leadership', label: 'Leadership', href: '/#leadership' },
          { id: 'locations', label: 'Locations', href: '/#locations' },
          { id: 'careers', label: 'Careers', href: '/careers' },
          { id: 'about', label: 'About Us', href: '/about-us' },
        ]}
        ctaLabel="Get Consultation"
        ctaHref="/#contact"
        logoSizeClass="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44"
      />
      <SupportedSection />
      <Footer />
    </main>
  );
}

function SoftwareDevPage(): ReactElement {
  return (
    <main>
      <Header
        navItems={[
          { id: 'services', label: 'Services', href: '/#services' },
          { id: 'erp', label: 'ERP Solutions', href: '/#enterprise-erp' },
          { id: 'industries', label: 'Industries', href: '/#services' },
          { id: 'testimonials', label: 'Testimonials', href: '/#testimonials' },
          { id: 'leadership', label: 'Leadership', href: '/#leadership' },
          { id: 'locations', label: 'Locations', href: '/#locations' },
          { id: 'careers', label: 'Careers', href: '/careers' },
          { id: 'about', label: 'About Us', href: '/about-us' },
        ]}
        ctaLabel="Get Consultation"
        ctaHref="/#contact"
        logoSizeClass="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44"
      />
      <SoftwareDevelopmentSection />
      <Footer />
    </main>
  );
}

function UIUXPage(): ReactElement {
  return (
    <main>
      <Header
        navItems={[
          { id: 'services', label: 'Services', href: '/#services' },
          { id: 'erp', label: 'ERP Solutions', href: '/#enterprise-erp' },
          { id: 'industries', label: 'Industries', href: '/#services' },
          { id: 'testimonials', label: 'Testimonials', href: '/#testimonials' },
          { id: 'leadership', label: 'Leadership', href: '/#leadership' },
          { id: 'locations', label: 'Locations', href: '/#locations' },
          { id: 'careers', label: 'Careers', href: '/careers' },
          { id: 'about', label: 'About Us', href: '/about-us' },
        ]}
        ctaLabel="Get Consultation"
        ctaHref="/#contact"
        logoSizeClass="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44"
      />
      <UIUXSection />
      <Footer />
    </main>
  );
}

function TestingPage(): ReactElement {
  return (
    <main>
      <Header
        navItems={[
          { id: 'services', label: 'Services', href: '/#services' },
          { id: 'erp', label: 'ERP Solutions', href: '/#enterprise-erp' },
          { id: 'industries', label: 'Industries', href: '/#services' },
          { id: 'testimonials', label: 'Testimonials', href: '/#testimonials' },
          { id: 'leadership', label: 'Leadership', href: '/#leadership' },
          { id: 'locations', label: 'Locations', href: '/#locations' },
          { id: 'careers', label: 'Careers', href: '/careers' },
          { id: 'about', label: 'About Us', href: '/about-us' },
        ]}
        ctaLabel="Get Consultation"
        ctaHref="/#contact"
        logoSizeClass="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44"
      />
      <TestingSection />
      <Footer />
    </main>
  );
}

function IdentityPage(): ReactElement {
  return (
    <main>
      <Header
        navItems={[
          { id: 'services', label: 'Services', href: '/#services' },
          { id: 'erp', label: 'ERP Solutions', href: '/#enterprise-erp' },
          { id: 'industries', label: 'Industries', href: '/#services' },
          { id: 'testimonials', label: 'Testimonials', href: '/#testimonials' },
          { id: 'leadership', label: 'Leadership', href: '/#leadership' },
          { id: 'locations', label: 'Locations', href: '/#locations' },
          { id: 'careers', label: 'Careers', href: '/careers' },
          { id: 'about', label: 'About Us', href: '/#why-us-heading' },
        ]}
        ctaLabel="Get Consultation"
        ctaHref="/#contact"
        logoSizeClass="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44"
      />
      <IdentitySection />
      <Footer />
    </main>
  );
}

function App(): ReactElement {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/erp" element={<ERPPage />} />
      <Route path="/services/outsourcing" element={<OutsourcingPage />} />
      <Route path="/services/software-development" element={<SoftwareDevPage />} />
      <Route path="/services/ui-ux" element={<UIUXPage />} />
      <Route path="/services/testing" element={<TestingPage />} />
      <Route path="/services/identity" element={<IdentityPage />} />
      <Route path="/services/supported" element={<SupportedPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
