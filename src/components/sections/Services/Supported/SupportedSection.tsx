import type { ReactElement, SVGProps } from 'react';
import SectionHeading from '../../../common/SectionHeading';
import FadeInOnScroll from '../../../common/FadeInOnScroll';
import ServicesDescriptionCard from '../components/ServicesDescriptionCard';

const TerminalIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LaunchIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
    <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SpeedIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DesignIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SupportedSection = (): ReactElement => {
  return (
    <main>
      <section id="overview" className="bg-background dark:bg-backgroundDark px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="mb-6 inline-block rounded-full border border-secondary px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary dark:text-secondary">
                Support, Managed Services &amp; DevOps
              </span>
              <h1 className="mb-8 text-4xl font-extrabold leading-tight text-primary dark:text-white lg:text-6xl">
                24/7 reliability, automated infrastructure, and
                <br />
                <span className="text-secondary">continuous optimization</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300 lg:text-xl lg:max-w-none">
                At Systems Edge Solutions, we bridge the gap between development and operations. Our managed services ensure your mission-critical applications remain online, secure, and
                performing at peak efficiency while our DevOps culture accelerates your release cycles.
              </p>

              <ul className="mb-10 space-y-4">
                <FadeInOnScroll key="supported-point-1" delayMs={0} className="block">
                  <li className="flex items-start">
                    <span className="mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                        <path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-medium text-slate-700 dark:text-white">99.99% Uptime SLA for critical infrastructure</span>
                  </li>
                </FadeInOnScroll>

                <FadeInOnScroll key="supported-point-2" delayMs={80} className="block">
                  <li className="flex items-start">
                    <span className="mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                        <path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-medium text-slate-700 dark:text-white">Zero-downtime deployment pipelines (CI/CD)</span>
                  </li>
                </FadeInOnScroll>

                <FadeInOnScroll key="supported-point-3" delayMs={160} className="block">
                  <li className="flex items-start">
                    <span className="mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                        <path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-medium text-slate-700 dark:text-white">Proactive security patching and vulnerability monitoring</span>
                  </li>
                </FadeInOnScroll>
              </ul>
            </div>

            <div className="relative hidden md:block lg:col-span-5 self-start">
              <div className="absolute -inset-4 rounded-3xl bg-secondary/10 blur-2xl" aria-hidden="true" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_4PFq2_6HGZta1VEKTYtJXTkvXJ5prqWVKBy2N7-D7pt83q6bxJH-cfZInbSk1S-xOdA04eJ4U0ga-U0mAMOeKXfpLw5s2is4HBXfgoXDMsGQvmioYLn9gUwTws0LXH3L4k_Hsvhdcj76Czkp8bAFg3X-gXY75IjGXw6eOZdRSxGNHMcNcMndktlOritA0AIPAVWBOqnlo_LghNj7XoZBN0fIeOb5jryoeA-aO8Fk9pqxJ2nd5cpZgPwCAKoAhS9PBuXLq17IyV_f"
                alt="Engineers collaborating on high-tech cloud infrastructure"
                className="relative h-[500px] w-full rounded-2xl border-4 border-slate-100 dark:border-slate-700 object-cover shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-backgroundOne dark:bg-backgroundDarkOne">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            id="supported-capabilities"
            heading="Core Capabilities"
            description="Capabilities that keep your operations resilient and scalable."
            headingClassName="mb-4 text-3xl font-extrabold lg:text-4xl"
            descriptionClassName="max-w-xl mb-4"
          />
          <div className="w-20 h-1.5 bg-secondary mx-auto mt-2 mb-8 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServicesDescriptionCard
              title={"24/7 \nMonitoring"}
              description="Full-stack observability with real-time alerting and automated incident response protocols to catch issues before they affect users."
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDCdvBkYBabs7WI3kC8F43aA7iPD0HZ7Fy0ccw-c4_4e52zuOD_vojd5v6OT_IMcAnwDXLGXRG3A1SRZPxB5vc82pPrd-HAMWmIczkRL8reAX_mX6lZTdu1YYtCKzIe1bDvMaTu6xGHs07v6w_oQbJCXrSttzLCjnjnAQE7n6WkAQzdmRI0bWUmBRRznMw7qDMRJmznYxBKc9Lcnu8AFcm4my-Ic7cTEsG8nGkF_P5maWngjcYThM_nXyfljEfAFNk0Kb64KD1GO59O"
              delayMs={0}
              Icon={TerminalIcon}
            />

            <ServicesDescriptionCard
              title={"CI/CD \nAutomation"}
              description="Automate testing, building, and deployment phases to reduce human error and increase release frequency and software quality."
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB51-SKjaGQktotNbzDSM31zjlGqA0sIW37tvkWZRcy7bCpxwl2Jj21t-xiesWg60JP9-hB5OgE35x4p4rC1IyCP3EjWxHpWnr5ltum0rEzaXvU3xcJEnBulsVYd8D1qLLMd61N2QQCk3GXRFkDhRD2hRHSWFcnNZSIX9xrJlKeL0363HY5VNdcnKre4JLqGsV-SiXThHUQTTEurrPAnXMqgMyZ2ELVXYZNX6cFctZEki1MjR1sXITSiE0yss9P3xY8KKOI1GXA23p6"
              delayMs={80}
              Icon={LaunchIcon}
            />

            <ServicesDescriptionCard
              title={"Cloud \nManagement"}
              description="Expert management of AWS, Azure, and GCP environments focusing on scalability, security, and high availability architecture."
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuABLApqLPW8aHfv63X7S3i4B8GYHHoRTNg7nHTwdin-sW1j3t18wKpAenDsMlvwl1K1Lw7jjQwtIVUyztq0Lfay_O5KhaJcGl5OOHQJ0HkS9qerqMIauqRS3O43LX8-QDhNCnse1OcIoGh8F8O2Km1gzxTi1VrChjWFhWMqZu5Wo_Hxc01SdDfYWOH7zA-V5Lx2HbnBuDEFbR-KQompLdKFzwSTSkqF34rOeQVBgvIqzNAdu78En47qAiE01TYOQp_qeVjRYOghnJ0G"
              delayMs={160}
              Icon={SpeedIcon}
            />

            <ServicesDescriptionCard
              title={"Kubernetes \n & Containers"}
              description="Production-grade container orchestration to handle microservices scaling and dynamic traffic patterns seamlessly."
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuD639FQtbWM47IwKL7ctU8Y1Gw_1-aswt8dxCRe-qAym3gqxEjgZblOAKWpfwIbrUzxSVy7UpK-kK8fTwsWMrszBuAKu3M-rloOKC_1Pvi8DQSuCMLn4erzUW3mkS4PnXtoK2yyrh6Z20S9QVLHOR6R_3FVh82FS8poYgm_XFrudfMkMxmneRi72vSoPTi0X2uGZ-rs0TD-ICfnGjfChwlXbnSrAyZD09xskmFkyR-qFs6VvF4I-mtGewMaDf2bDcOtv_G5DWb6DxHy"
              delayMs={240}
              Icon={DesignIcon}
            />

            <ServicesDescriptionCard
              title={"Incident \nManagement"}
              description="Dedicated response teams and Root Cause Analysis (RCA) processes to ensure long-term stability and system hardening."
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDARwdBU5qgjc08hgxQSXr5pxg2t_zvK_0fXf1RJK3cfb6T09ltbs0NIGHFJ5cP1wG4KnnYg9W8hkXCAURIoA-uJfrxX4Sv-bJT--e2H0LdJPZbnLR780lShJGwuBcdhCH_aTnMzjqe-8T1D1pGPB1rDMZEkWV8IjYgUw-B0Ot26_4L5jnUSNDPROoCr-qhDHGUNXYtppD7snnD-oF-f7GgbengCg31G_iZiLrOY9byQXL0CBFXxBNVF-ZFTRsm4sOZ7pJ1HVZ2zVF4"
              delayMs={320}
              Icon={ShieldIcon}
            />

            <ServicesDescriptionCard
              title={"Cost \nOptimization"}
              description="Continuous cloud spend analysis and rightsizing of resources to ensure you only pay for the infrastructure you actually use."
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDQEJWuPaQnLOzIl3Cgs4twUe3lZwOVfBGtXxHX5EoF7wNJMFT11FyPggYSX0WzXiGP66P2bz5RCFlfkWA3MCzepo0uxya-xn5y4sGVfZJXeS03jAl6Ri3LxGjUQ3Vgp9fI8Wz1Fb8qd-tQjArN1UDFjMACDgVVWjrV5pMHsxkBBHJWIGDlKoS40CKy_gfviCjmBJp7PclDk5-CY0h-efsax85lldK9AeVbWuj7Iy8anYD0qX0F9LbRKlTETLayUeTzQwEUmRVs6DDt"
              delayMs={400}
              Icon={LaunchIcon}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background dark:bg-backgroundDark overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary">Methodology</h2>
            <p className="text-gray-500 mt-4">A proven journey from audit to continuous evolution</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-secondary to-primary opacity-20" />
            <FadeInOnScroll delayMs={0} className="relative">
              <div className="relative mb-12 md:mb-24 flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h4 className="text-xl font-bold text-primary dark:text-white">Discovery &amp; Audit</h4>
                  <p className="text-gray-600 dark:text-slate-300 mt-2">Deep dive into current tech stack, pain points, and existing bottlenecks.</p>
                </div>
                <div className="z-10 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg ring-4 ring-background">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delayMs={80} className="relative">
              <div className="relative mb-12 md:mb-24 flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="z-10 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg ring-4 ring-background">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                  <h4 className="text-xl font-bold text-primary dark:text-white">Strategy &amp; IaC</h4>
                  <p className="text-gray-600 dark:text-slate-300 mt-2">Designing Infrastructure as Code templates for repeatable, reliable environment management.</p>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delayMs={160} className="relative">
              <div className="relative mb-12 md:mb-24 flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h4 className="text-xl font-bold text-primary dark:text-white">Deployment &amp; CI/CD</h4>
                  <p className="text-gray-600 dark:text-slate-300 mt-2">Implementation of automated pipelines and migration to modernized infra.</p>
                </div>
                <div className="z-10 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg ring-4 ring-background">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delayMs={240} className="relative">
              <div className="relative mb-6 flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="z-10 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg ring-4 ring-background">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                  <h4 className="text-xl font-bold text-primary dark:text-white">24/7 Managed Ops</h4>
                  <p className="text-gray-600 dark:text-slate-300 mt-2">Continuous monitoring, security updates, and performance optimization for life.</p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <section className="p-6 md:p-12 lg:p-24 bg-backgroundOne dark:bg-backgroundDarkOne">
        <div className="bg-primary max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="px-8 py-16 md:py-20 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-3xl mx-auto">Scale your infrastructure with expert management.</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto opacity-80">Ready to eliminate downtime and accelerate your delivery? Our team is standing by to take the operational burden off your shoulders.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a className="inline-block bg-secondary hover:bg-teal-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-xl text-lg" href="#">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupportedSection;
