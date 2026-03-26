import { useEffect, useMemo, useState, type ReactElement } from 'react';
import { Header } from '../../layout/Header';
import Footer from '../../layout/Footer/Footer';

export interface CareersPageProps {}

type CultureCard = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

type CareerStage = {
  id: string;
  icon: string;
  title: string;
  phase: string;
  description: string;
};

type OpeningCard = {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  highlighted?: boolean;
};

type EvolutionOption = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  quote: string;
};

const cultureCards: CultureCard[] = [
  {
    id: 'rfc-culture',
    icon: 'architecture',
    title: 'RFC-Driven Culture',
    description: 'Design first. Every major feature starts with an RFC and peer review before implementation.',
  },
  {
    id: 'stack-autonomy',
    icon: 'settings_suggest',
    title: 'Stack Autonomy',
    description: 'Choose the right tool for the problem, not the familiar one, and justify the tradeoff clearly.',
  },
  {
    id: 'code-health',
    icon: 'verified',
    title: 'Code Health Ownership',
    description: 'Fast delivery without technical debt. We invest in refactoring, tooling, and maintainability.',
  },
  {
    id: 'chapter-leadership',
    icon: 'diversity_3',
    title: 'Chapter Leadership',
    description: 'Lead Chapters in Performance, Security, or UX to shape standards and mentor others.',
  },
];

const careerStages: CareerStage[] = [
  {
    id: 'explorer',
    icon: 'rocket_launch',
    title: 'The Explorer',
    phase: 'Junior to Mid-Level',
    description:
      'Mastering the stack and shipping clean code. You have a massive safety net to fail, learn, and absorb our architectural mental models.',
  },
  {
    id: 'navigator',
    icon: 'explore',
    title: 'The Navigator',
    phase: 'Mid-Level to Senior',
    description:
      'The training wheels are off. You own features end-to-end, mentor peers, and define how we build. You move at the speed of your own curiosity.',
  },
  {
    id: 'wayfinder',
    icon: 'insights',
    title: 'The Wayfinder',
    phase: 'Senior to Principal',
    description:
      'Defining the path for others. You solve problems we have not encountered yet and act as a force multiplier for the entire engineering organization.',
  },
];

const advantageCards: CultureCard[] = [
  {
    id: 'architectural-freedom',
    icon: 'architecture',
    title: 'Architectural Freedom',
    description:
      'Work with complete autonomy over your stack. We value results over process and trust our experts to make the right technical decisions.',
  },
  {
    id: 'continuous-mastery',
    icon: 'trending_up',
    title: 'Continuous Mastery',
    description:
      'Dedicated budget for certifications, conferences, and advanced degrees. We invest in your evolution as a top-tier professional.',
  },
  {
    id: 'balanced-intensity',
    icon: 'balance',
    title: 'Balanced Intensity',
    description:
      'High-impact work does not require burnout. We offer flexible remote policies and a focus on deep work periods over long hours.',
  },
];

const openings: OpeningCard[] = [
  {
    id: 'principal-architect',
    icon: 'architecture',
    title: 'Principal Systems Architect',
    description: 'Leading the architectural design for high-concurrency cloud infrastructure.',
    tags: ['Infrastructure Design', 'Cloud Strategy'],
  },
  {
    id: 'senior-product-designer',
    icon: 'dashboard',
    title: 'Senior Product Designer',
    description: 'Crafting complex analytical dashboards and design systems for enterprise users.',
    tags: ['Design Systems', 'Enterprise UX'],
    highlighted: true,
  },
  {
    id: 'technical-product-lead',
    icon: 'hub',
    title: 'Technical Product Lead',
    description: 'Bridging the gap between stakeholder vision and engineering execution.',
    tags: ['Product Strategy', 'Engineering Sync'],
  },
];

const evolutionOptions: EvolutionOption[] = [
  {
    id: 'option-2',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDYCxsvmxwTXx99dBlD3awoKHUoGe9Q5zjKlsLQM3nRqrE_MNVJ3C6Of8c0IIgRaA_MAC7QGZCxlMZzlbZa3BAn0b-V9buoTGrKnnGvRxh-K67lLwkW5iDU9ppSmMgPlfSwWZRi739dJ3ydnVeKGVd9eDoJv5hokSej46GD3_x7-hsx2Pa1jdmIyikxCGtcpfeOtOo_TMhMz0xtYZTgpzq3XCeFOZ_sOaEZ3TVDJMp-G6SUE6z419Wwt_ALZUimtl9-kiJxBEAceaTN',
    imageAlt: 'Sophisticated version control visualization',
    quote:
      '"Continuous integration is not just a pipeline; it is a philosophy of constant evolution. We iterate on our systems with the same rigor we apply to our mission-critical code."',
  },
];

const navItems = [
  { id: 'services', label: 'Services', href: '/#services' },
  { id: 'testimonials', label: 'Testimonials', href: '/#testimonials' },
  { id: 'locations', label: 'Locations', href: '/#locations' },
  { id: 'about', label: 'About Us', href: '/about-us' },
  { id: 'careers', label: 'Careers', href: '/careers' },
];

// Typewriter controls for the quote in the image overlay.
const quoteTypewriterTargetId = 'option-2';
const quoteTypewriterStartDelayMs = 550;
const quoteTypewriterCharDelayMs = 22;

// Typewriter controls for the hero heading text.
const heroHeadingText = 'Engineer the Future of Enterprise Systems';
const heroTypewriterStartDelayMs = 120;
const heroTypewriterCharDelayMs = 45;

// Precise vertical positioning for the Engineer-First Philosophy card.
// Increase to push the card down (e.g. '16px' or '1rem'), use negative values to move it up.
const engineerFirstCardOffsetY = '70px';

function CareersPage(_props: CareersPageProps): ReactElement {
  const animatedQuote = useMemo(() => {
    const selected = evolutionOptions.find((option) => option.id === quoteTypewriterTargetId);
    return selected?.quote ?? '';
  }, []);

  const [typedQuoteLength, setTypedQuoteLength] = useState(0);
  const [typedHeroHeadingLength, setTypedHeroHeadingLength] = useState(0);

  useEffect(() => {
    const startTimeout = window.setTimeout(() => {
      const typeInterval = window.setInterval(() => {
        setTypedHeroHeadingLength((currentLength) => {
          if (currentLength >= heroHeadingText.length) {
            window.clearInterval(typeInterval);
            return currentLength;
          }

          return currentLength + 1;
        });
      }, heroTypewriterCharDelayMs);
    }, heroTypewriterStartDelayMs);

    return () => {
      window.clearTimeout(startTimeout);
    };
  }, []);

  useEffect(() => {
    if (!animatedQuote) return;

    const startTimeout = window.setTimeout(() => {
      const typeInterval = window.setInterval(() => {
        setTypedQuoteLength((currentLength) => {
          if (currentLength >= animatedQuote.length) {
            window.clearInterval(typeInterval);
            return currentLength;
          }

          return currentLength + 1;
        });
      }, quoteTypewriterCharDelayMs);
    }, quoteTypewriterStartDelayMs);

    return () => {
      window.clearTimeout(startTimeout);
    };
  }, [animatedQuote]);

  return (
    <main className="bg-background text-black dark:bg-backgroundDark dark:text-white">
      <Header
        navItems={navItems}
        ctaLabel="Get Consultation"
        ctaHref="/#contact"
        logoSizeClass="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44"
      />

      <section className="relative flex min-h-[716px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover opacity-20 grayscale brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYCxsvmxwTXx99dBlD3awoKHUoGe9Q5zjKlsLQM3nRqrE_MNVJ3C6Of8c0IIgRaA_MAC7QGZCxlMZzlbZa3BAn0b-V9buoTGrKnnGvRxh-K67lLwkW5iDU9ppSmMgPlfSwWZRi739dJ3ydnVeKGVd9eDoJv5hokSej46GD3_x7-hsx2Pa1jdmIyikxCGtcpfeOtOo_TMhMz0xtYZTgpzq3XCeFOZ_sOaEZ3TVDJMp-G6SUE6z419Wwt_ALZUimtl9-kiJxBEAceaTN"
            alt="Modern bright corporate office"
          />
          <div className="absolute inset-0 bg-surface/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
          <span className="mb-6 block text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Join Systems Edge Solutions</span>
          <h1 className="mx-auto mb-8 max-w-4xl text-5xl font-extrabold tracking-tighter text-primary dark:text-white md:text-7xl">
            {heroHeadingText.slice(0, typedHeroHeadingLength)}
            {typedHeroHeadingLength < heroHeadingText.length ? (
              <span aria-hidden="true" className="ml-0.5 inline-block animate-pulse">
                _
              </span>
            ) : null}
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-300 md:text-2xl">
            We are looking for visionary thinkers and disciplined creators to help us solve the most complex architectural challenges in global business.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <button
              type="button"
              className="rounded-xl bg-gradient-to-br from-[#110f5e] to-primary px-10 py-5 text-lg font-bold text-on-primary shadow-lg transition-all hover:opacity-90"
            >
              View Open Roles
            </button>
            <button
              type="button"
              className="rounded-xl border-2 border-outline-variant/20 bg-surface-container-lowest px-10 py-5 text-lg font-bold text-primary transition-all hover:bg-surface-container dark:bg-backgroundDarkOne dark:text-white dark:hover:bg-slate-800"
            >
              Our Culture
            </button>
          </div>
        </div>
      </section>

      {evolutionOptions.map((option) => (
        <section
          key={option.id}
          className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 border-b border-outline-variant/10 px-8 py-24 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-black dark:text-white">Growth, Mentorship &amp; Technical Excellence</h2>
            <p className="mb-10 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              At Systems Edge, we believe your growth is our collective success. We provide an ecosystem designed for high-performing engineers to master
              their craft and define the industry&apos;s next chapter.
            </p>
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                alt={option.imageAlt}
                className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={option.imageSrc}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-8">
                <p className="font-medium italic text-white">
                  {option.id === quoteTypewriterTargetId ? option.quote.slice(0, typedQuoteLength) : option.quote}
                  {option.id === quoteTypewriterTargetId && typedQuoteLength < option.quote.length ? (
                    <span aria-hidden="true" className="ml-0.5 inline-block animate-pulse">
                      _
                    </span>
                  ) : null}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-7">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {cultureCards.map((card) => (
                <article key={card.id} className="rounded-2xl border border-outline-variant/10 bg-backgroundOne p-8 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-backgroundDarkOne">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-on-primary">
                    <span aria-hidden="true" className="material-symbols-outlined">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{card.title}</h3>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-300">{card.description}</p>
                </article>
              ))}
            </div>

            <div
              className="relative overflow-hidden rounded-2xl bg-primary p-10 text-on-primary"
              style={{ marginTop: engineerFirstCardOffsetY }}
            >
              <div className="relative z-10">
                <h4 className="mb-4 text-2xl font-bold text-white dark:text-white">Engineer-First Philosophy</h4>
                <p className="mb-6 leading-relaxed text-slate-300 dark:text-slate-300">
                  We do not just hire for what you know today; we invest in what you will build tomorrow. Our culture is built by engineers, for
                  engineers.
                </p>
                <button type="button" className="rounded-lg bg-secondary px-8 py-3 font-bold text-on-secondary transition-all hover:bg-secondary-fixed hover:text-slate-700 dark:hover:text-slate-300">
                  Explore Career Paths
                </button>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-10">
                <span aria-hidden="true" className="material-symbols-outlined text-[160px]">
                  architecture
                </span>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-backgroundOne dark:bg-backgroundDarkOne">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <div className="mb-16 text-center lg:text-left">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Non-Linear Career Flow</span>
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white">The Evolution Path</h2>
          </div>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="pointer-events-none absolute inset-x-0 top-[42%] z-20 hidden -translate-y-1/2 md:block">
              <div className="absolute left-1/3 -translate-x-1/2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-sm dark:border-outline-variant/40 dark:bg-backgroundDark dark:text-slate-300">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">trending_flat</span>
                </div>
              </div>
              <div className="absolute left-2/3 -translate-x-1/2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-sm dark:border-outline-variant/40 dark:bg-backgroundDark dark:text-slate-300">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">trending_flat</span>
                </div>
              </div>
            </div>
            {careerStages.map((stage) => (
              <article
                key={stage.id}
                className="relative z-10 flex flex-col items-center rounded-2xl border border-outline-variant/20 bg-surface p-10 shadow-[0px_12px_32px_rgba(40,41,115,0.06)] lg:items-start dark:border-slate-700 dark:bg-backgroundDark"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-on-primary shadow-lg">
                  <span aria-hidden="true" className="material-symbols-outlined">
                    {stage.icon}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">{stage.title}</h3>
                <span className="mb-4 block text-sm font-bold uppercase text-secondary">{stage.phase}</span>
                <p className="text-center leading-relaxed text-slate-600 dark:text-slate-300 lg:text-left">{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 dark:bg-backgroundDark">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">The Systems Edge Advantage</span>
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white">Why Professional Excellence Starts Here</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {advantageCards.map((advantage) => (
              <article
                key={advantage.id}
                className="rounded-xl bg-surface-container-lowest p-10 shadow-[0px_12px_32px_rgba(40,41,115,0.06)] transition-transform hover:-translate-y-1 dark:border dark:border-slate-700 dark:bg-backgroundDarkOne"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <span aria-hidden="true" className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {advantage.icon}
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{advantage.title}</h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">{advantage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-backgroundOne mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 py-24 lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              className="aspect-square h-auto w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoNXv1_azbI_BVCbEEy3SpI0Lgt5VVi0cIyM6ys3WC_Ies_MzUIr0t6efrzyffzz2KwsIduktNNhO-0Cfpdt9JcwP3tdoS8GqpB110v4xM8etEAyrIaI_Gi2lDJfWx-Yt1ZSac_2nrAXRM0tHnsC0W8pR5hAEeJZ46Ntn_ZRO1jdDW9Tk-MUVKeoww4GuvewchmeOxcAOQG7wGdOyJ9n3oNN2bzSKb3NWRmiiqtxKxyv3s7Hksdmf_lwjStJBMeVRmXbFZTgDPAOoT"
              alt="Overhead shot of a clean desk"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <h2 className="mb-10 text-4xl font-bold tracking-tight text-black dark:text-white">Our Selection Process</h2>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-on-primary">01</div>
              <div>
                <h4 className="mb-2 text-xl font-bold text-black dark:text-white">Technical Review</h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Submit your CV and portfolio. Our senior architects personally review every application for alignment with our core technical values.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-on-primary">02</div>
              <div>
                <h4 className="mb-2 text-xl font-bold text-black dark:text-white">Architectural Dialogue</h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Instead of standard interviews, we engage in technical discussions about systems design and problem-solving methodologies.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-on-primary">03</div>
              <div>
                <h4 className="mb-2 text-xl font-bold text-black dark:text-white">Collaborative Trial</h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Work with our team on a real-world simulation to see how we tackle complex challenges together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 dark:bg-backgroundDark">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <h2 className="mb-4 text-4xl font-extrabold uppercase tracking-tight text-black dark:text-white">Current Openings</h2>
              <p className="max-w-xl text-slate-600 dark:text-slate-300">Every journey at Systems Edge is bespoke. Find your alignment within our architectural tiers.</p>
            </div>
            <button type="button" className="rounded-lg bg-secondary px-8 py-3 text-sm font-bold text-on-secondary shadow-md transition-all hover:brightness-110">
              See Open Roles
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {openings.map((opening) => (
              <article
                key={opening.id}
                className={[
                  'group flex flex-col justify-between rounded-xl p-10 transition-all duration-300',
                  opening.highlighted
                    ? 'bg-gradient-to-br from-[#110f5e] to-primary text-on-primary shadow-lg'
                    : 'border border-outline-variant/10 bg-surface-container-lowest shadow-sm hover:shadow-xl dark:border-slate-700 dark:bg-backgroundDarkOne',
                ].join(' ')}
              >
                <div>
                  <span
                    aria-hidden="true"
                    className={[
                      'material-symbols-outlined mb-6 text-4xl',
                      opening.highlighted ? 'text-secondary-fixed' : 'text-secondary',
                    ].join(' ')}
                  >
                    {opening.icon}
                  </span>
                  <h3 className={['mb-4 text-2xl font-bold', opening.highlighted ? 'text-on-primary' : 'text-black dark:text-white'].join(' ')}>{opening.title}</h3>
                  <p className={['mb-8 leading-relaxed', opening.highlighted ? 'text-on-primary-fixed-variant' : 'text-slate-600 dark:text-slate-300'].join(' ')}>{opening.description}</p>
                </div>

                <ul className="mb-8 space-y-3">
                  {opening.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-2 text-sm font-medium">
                      <span className={['h-1.5 w-1.5 rounded-full', opening.highlighted ? 'bg-secondary-fixed' : 'bg-secondary'].join(' ')} />
                      {tag}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={[
                    'flex items-center gap-2 font-bold transition-all group-hover:gap-4',
                    opening.highlighted ? 'text-secondary-fixed' : 'text-primary dark:text-secondary',
                  ].join(' ')}
                >
                  View Details
                  <span aria-hidden="true" className="material-symbols-outlined">
                    trending_flat
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-20 dark:bg-backgroundDarkOne">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">Equal Opportunity Employment</h3>
          <p className="leading-relaxed text-slate-600 dark:text-slate-300">
            Systems Edge Solutions is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all
            employees. All employment is decided on the basis of qualifications, merit, and business need. We do not discriminate based on race, religion,
            color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.
          </p>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#110f5e] to-primary p-16 text-center text-on-primary md:p-24">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary/10" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/10" />
          <div className="relative z-10">
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight md:text-5xl">Ready to build the edge?</h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl opacity-90 md:text-2xl text-on-primary-container">
              Explore our current openings and find your place in an elite engineering culture.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <button type="button" className="rounded-xl bg-secondary px-12 py-5 text-lg font-bold text-on-secondary shadow-xl transition-all hover:brightness-110">
                Open Roles
              </button>
              <button
                type="button"
                className="rounded-xl border border-white/20 bg-white/10 px-12 py-5 text-lg font-bold text-on-primary backdrop-blur-md transition-all hover:bg-white/20"
              >
                Contact HR
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default CareersPage;
