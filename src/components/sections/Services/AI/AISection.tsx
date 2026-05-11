import type { ReactElement, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import FadeInOnScroll from '../../../common/FadeInOnScroll';

export interface AICapability {
  id: string;
  iconName: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface AIMethodologyStep {
  id: string;
  title: string;
  description: string;
  stepLabel: string;
}

export type AISectionProps = Record<string, never>;

const MaterialSymbol = ({ name, className = '', filled = false }: { name: string; className?: string; filled?: boolean }): ReactElement => (
  <span
    className={`material-symbols-outlined ${className}`.trim()}
    aria-hidden="true"
    style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
  >
    {name}
  </span>
);

const CheckIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path d="M5 13l4 4L19 7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const capabilities: AICapability[] = [
  {
    id: 'document-extraction',
    iconName: 'document_scanner',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCau9QsJPDtctDy3ouuuQa9aZpcDZH8nfNDoTU93tPnKNIGR4XUGSQaIz_aNZSawouWg5Ihy5_gs_xfdiIOV9zFr07vzS69-kfaAk-2bfr6XfyhxlpCFEC5IcF0RFiaCNV5ayMkruZN6SHsFFp86rvN-T_00sN5_v7Nzat4-pHKyBMC2YFWUVwk5B0Lt_2cJA1vkkUUFCj2RljS_rjhz6QxCu81SD3Av-hf0LeK7oJngg9GBcf8iaB8W8Wol6qqV_lKNHS-yIv-QDgg',
    imageAlt: 'Document extraction infrastructure for enterprise automation',
    title: 'Document Extraction',
    description:
      'Automated ingestion and structuring of unstructured data formats into queryable databases using advanced OCR and NLP models.',
  },
  {
    id: 'workflow-triggers',
    iconName: 'account_tree',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGxUMd1hV7dhVXbbLpQMaoJD2p1pWyTgIUgHgEIDVOsaRsCSkK6R8aNGptiaMMf9ne7UarMua2Z_P5k_DRW-IZhSEK0FU2ohTFpyQ5MmUgvWth5gse3_7TLH5zYWG8ZjRMNnPUbOKV_TxKhkTl_ABfh9raX6-J7WfUHEwmVPzXQ-X3E_eiD5CuPtIgdu4oGfh_cbH-lKIzuZC4e4jdYG1nZ7kKxaF78PR2m1XmYZnIdjk_vD18kPsR5HIVGp8Yd5YNBVRJ1U_-UgQZ',
    imageAlt: 'Workflow triggers and orchestration infrastructure',
    title: 'Workflow Triggers',
    description:
      'Event-driven orchestration logic that responds instantly to system state changes, initiating complex multi-step processes.',
  },
  {
    id: 'nl-search',
    iconName: 'search_insights',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDl4BoMxLSj6Ryie1_eBN8dcmbdygTVE5YDpb-K-Nns2GNvm1fAIkMY_lT2eGqlDQWHOddlU24mXxiT6Oh3_WAPMUcY6nfGnR9DHJq7SDXkTuJ97sUAFz99iAi1i_rn1-2yRyQ29JDmIepiouABQjMvCfeyiRq1voeOaegrvbPKY3T3LH2gLGFXBsErbqVYc_d9NEJ_aqi8JUpL1Ma-TMwsyT0dhbSxA1Hhzj70kkOmsek6s9XOyJb2M0Ehcp4C_fxvMXvaCiK8E7M',
    imageAlt: 'Natural language search system for enterprise data',
    title: 'Natural Language Search',
    description:
      'Semantic search capabilities embedded across your proprietary datasets, allowing intuitive data retrieval via natural language queries.',
  },
  {
    id: 'predictive-alerts',
    iconName: 'notifications_active',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4KOl0j7BLZfn1ujPE61aCi0AAxhh_LqoQzRRDiaKHPCI4wIvVm1Rzjq4wdzGuTRgdSbGX696fz1TgOoqZjPlUQgmmF3cauVAgM09V3kavBnEM5zqBGWQ9oB86PLFswYBrTbvygJ6Wx2wkNRr6Mt31yoBkP1hOP92zcfm4lFEQbx8raYrHV7XlVlfjWOqFse78zVf8nJnhQVHJhUvnbm7OARcQ8GS4i5QO_MZoPSd2ZZITKmmBOrof-ll72SgHWkhLXUwRkjsxPz81',
    imageAlt: 'Predictive alerting infrastructure with AI monitoring',
    title: 'Predictive Alerts',
    description:
      'Machine learning models analyzing historical data to anticipate anomalies and generate proactive notifications before issues occur.',
  },
  {
    id: 'api-monitoring',
    iconName: 'api',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMZycXDp3t4cjjt0FON1Vz6WHqfVMNSRVNv4ASe474EzmGr-sjeiiw4fiB2YorS9UK7Vh5azYMnF8qGpwJ8P_LL6h-0nShHUqv5N1GbkvaCK-ClgV4-CiTN7jjv3PdY_rtnvwyXAMRQIB2d84uVEh3x8bLXhTzLY5m-oMfVacqSRVDyRo7fGrJXaMx77YOAaQBNGYrSmfsKJmvQPHLIbNaeMDuY8GEskG_E30icQmUtF1yMdx4o24h-aXnaqi-zzHyTgP0s-TS_kHB',
    imageAlt: 'API monitoring and AI endpoint observability',
    title: 'API Monitoring',
    description:
      'Continuous health checks and performance tracking of third-party AI endpoints to ensure high availability and optimal response times.',
  },
  {
    id: 'approval-loops',
    iconName: 'verified',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDJnxtqKVGH3l-o8Xa4RedMBPaunsaLi_LnkcNvH1pPrfAPsKwuefm1xyKL-_m0RypiU-CQhpglnzvo47aKjKO3ItZBq9Fk5yyoxvu3Q128efoITUabZzGiXZ6zUm_Y-gDuTO0CPWvQrikwbOhbs5P_eB_FCYSy0KLrYt-59bevpdQr-Fkvt0KVkP85ga9BsnuHICbjlOOnuTKYo-Bpht_Nbm9GzCLJ4OI030ycfx2WO8nWO03rWr58KZFCKDocpzMjeJ7jSOw7bv3l',
    imageAlt: 'Approval loops for human-in-the-loop automation',
    title: 'Approval Loops',
    description:
      'Human-in-the-loop (HITL) integration mechanisms for critical decisions, maintaining oversight while automating rote tasks.',
  },
];

const methodologySteps: AIMethodologyStep[] = [
  {
    id: 'discover-prioritise',
    stepLabel: '01',
    title: 'Discover & prioritise',
    description: 'Auditing current workflows to identify high-friction bottlenecks ripe for AI intervention.',
  },
  {
    id: 'design-pipeline',
    stepLabel: '02',
    title: 'Design the pipeline',
    description: 'Architecting robust, scalable integration patterns and selecting appropriate models.',
  },
  {
    id: 'build-integrate',
    stepLabel: '03',
    title: 'Build & integrate',
    description: 'Developing and securely deploying the connective tissue between systems.',
  },
  {
    id: 'run-refine',
    stepLabel: '04',
    title: 'Run & refine',
    description: 'Ongoing monitoring, optimization, and refinement of the automated loops.',
  },
];

const AISection = (): ReactElement => {
  const heroHighlights = [
    'Secure integrations across legacy and modern systems',
    'Maintainable automation with predictable operating controls',
    'Enterprise-grade AI workflows designed to scale reliably',
  ];

  return (
    <main className="bg-background dark:bg-backgroundDark">
      <section id="overview" className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="h1-settings mb-8 text-primary lg:text-6xl">
                Intelligent <br />
                <span className="text-secondary">AI-Powered</span> Automation
              </h1>

              <p className="h3-settings mb-8 text-slate-600 dark:text-slate-300">
                We design and deploy secure, maintainable integrations connecting your legacy infrastructure with leading AI platforms, enabling autonomous workflows that scale reliably.
              </p>

              <ul className="card-1-title-settings mb-10 space-y-4">
                {heroHighlights.map((highlight, index) => (
                  <FadeInOnScroll key={highlight} delayMs={index * 90} className="block">
                    <li className="flex items-start">
                      <span className="mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">{highlight}</span>
                    </li>
                  </FadeInOnScroll>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 w-full relative">
              <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl bg-secondary/5" aria-hidden="true" />
              <img
                alt="Enterprise office setting"
                className="relative z-10 aspect-[4/3] h-auto w-full rounded-2xl object-cover shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDTgt1Px3ZfZdUfAAYtTvVUjF9ADhLJkPx43mOpTNSXR1for1nHylF2K9lcCmqDo37x_722gVVwq-TJiiPEPIRBQui83Pydhv89-XmKy7Wp3ECrzxV1IIcI3YdT_TDqfp1Yeza6oVkCaIk5hF895RpQQ8iHUzbiiWX_HVy4AjmkYniZOJYjLMBOz1vMD_9aVJ9GShjIWCdLE5SKF7hm3arshDGfvIBtDuZLhDFg1fASM3X79KEDJ_wvYWg2cc8IqvZ85FqJ2MrWKYx"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-backgroundOne py-24 dark:bg-backgroundDarkOne">
        <div className="mx-auto mb-40 w-full max-w-7xl px-6 md:px-12">
        <h2 className="mb-16 text-center text-4xl font-black tracking-tight text-primary lg:text-left">Core Capabilities</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <FadeInOnScroll key={capability.id} delayMs={index * 80} className="block">
              <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-[0px_12px_32px_rgba(40,41,115,0.04)] transition-transform hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
                <div className="absolute bottom-0 left-0 top-0 z-20 h-0 w-1 bg-secondary transition-all duration-500 ease-out group-hover:h-full" />
                <img alt={capability.imageAlt} className="h-48 w-full object-cover" src={capability.imageSrc} loading="lazy" />
                <div className="flex flex-1 flex-col gap-6 p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f7f3ee]">
                    <MaterialSymbol name={capability.iconName} className="text-3xl text-secondary" filled />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-primary dark:text-white">{capability.title}</h3>
                    <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{capability.description}</p>
                  </div>
                </div>
              </article>
            </FadeInOnScroll>
          ))}
        </div>
        </div>
      </section>

      <section className="mt-20 mb-20 mx-auto mb-40 max-w-4xl rounded-3xl bg-backgroundOne p-12 md:p-20 dark:bg-slate-800/60">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl font-black tracking-tight text-primary dark:text-white">How we automate</h2>
        </div>

        <div className="relative space-y-16 border-l-2 border-outline-variant/30 pl-6 md:pl-10">
          {methodologySteps.map((step, index) => (
            <FadeInOnScroll key={step.id} delayMs={index * 80} className="block">
              <div className="group relative">
                <div className="absolute -left-[43px] top-1 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-outline-variant/20 bg-surface-container-lowest shadow-md transition-colors group-hover:border-secondary md:-left-[59px] dark:bg-slate-900">
                  <span className="text-lg font-black text-secondary">{step.stepLabel}</span>
                </div>
                <div className="pl-8 md:pl-12">
                  <h3 className="mb-3 text-2xl font-bold text-primary dark:text-white">{step.title}</h3>
                  <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">{step.description}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      <section className="p-6 md:p-12 lg:p-24 bg-backgroundOne dark:bg-backgroundDarkOne">
        <div className="bg-primary max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute -right-20 -bottom-20 h-[30rem] w-[30rem] rounded-full bg-secondary/10 blur-[100px]" aria-hidden="true" />
          <div className="px-8 py-16 md:py-20 text-center relative z-10">
            <h2 className="h2-settings mb-6 mx-auto max-w-3xl text-white">Ready to streamline your operations?</h2>

            <p className="h3-settings mb-10 max-w-2xl mx-auto text-blue-100 opacity-80">
              Get the elite technical talent and automation strategy your project deserves. Let&apos;s discuss your requirements today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link className="button-1-settings mx-auto w-fit bg-secondary text-white shadow-xl border-2 border-transparent transition duration-300 hover:bg-primary hover:border-white hover:scale-105 sm:mx-0" to="/contact-us">
                Initiate Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AISection;