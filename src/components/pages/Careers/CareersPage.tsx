import { useEffect, useMemo, useRef, useState, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../layout/Header';
import Footer from '../../layout/Footer/Footer';
import FadeInOnScroll from '../../common/FadeInOnScroll';
import jobs from '../All-jobs/jobsData';

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


type EvolutionOption = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  quote: string;
};

const cultureCards: CultureCard[] = [
  {
    id: 'collaborative-architecture',
    icon: 'architecture',
    title: 'Collaborative Architecture',
    description: 'Every major initiative starts with an open RFC and peer review. We design together, ensuring clarity and alignment before writing a single line of code.',
  },
  {
    id: 'technology-freedom',
    icon: 'settings_suggest',
    title: 'Technology Freedom',
    description: 'Choose the best tool for the challenge. We trust your expertise and encourage you to explore modern stacks, backed by clear reasoning and shared learning.',
  },
  {
    id: 'quality-craftsmanship',
    icon: 'verified',
    title: 'Quality Crafts',
    description: 'We deliver at pace without sacrificing long-term health. Continuous refactoring, robust testing, and tooling investments keep our codebase agile and resilient.',
  },
  {
    id: 'mentorship-chapters',
    icon: 'diversity_3',
    title: 'Mentorship & Chapters',
    description: 'Lead communities of practice in Performance, Security, UX, or any domain you’re passionate about. Shape standards and grow alongside peers.',
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

// 'openings' sample removed; Careers now uses randomized jobs from the shared jobs dataset.

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
const heroHeadingText = 'Engineer the Future\nof Enterprise\nSystems';
const heroHeadingTextMobile = 'Engineer the Future of Enterprise\nSystems';
const heroTypewriterStartDelayMs = 120;
const heroTypewriterCharDelayMs = 45;

// Precise vertical positioning for the Engineer-First Philosophy card.
// Increase to push the card down (e.g. '16px' or '1rem'), use negative values to move it up.
const engineerFirstCardOffsetY = '70px';

const heroActionButtonBaseClasses =
  'button-1-settings !w-52 sm:!w-fit shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-100';

const heroActionButtonVariantClasses = {
  openRoles: 'bg-primary text-white hover:bg-white hover:text-primary',
  ourCulture:
    'border-2 border-outline-variant/20 bg-background text-primary hover:bg-primary hover:text-background dark:bg-backgroundDarkOne dark:text-white dark:hover:bg-white dark:hover:text-backgroundDarkOne',
} as const;

const mobileCultureSwapDelayMs = 220;
const randomCultureSwapDurationMs = 5000;

function CareersPage(_props: CareersPageProps): ReactElement {
  const navigate = useNavigate();
  const animatedQuote = useMemo(() => {
    const selected = evolutionOptions.find((option) => option.id === quoteTypewriterTargetId);
    return selected?.quote ?? '';
  }, []);

  const [typedQuoteLength, setTypedQuoteLength] = useState(0);
  const [typedHeroHeadingLength, setTypedHeroHeadingLength] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [activeMobileCultureCardId, setActiveMobileCultureCardId] = useState<string | null>(null);
  const [activeRandomCultureCardId, setActiveRandomCultureCardId] = useState<string | null>(null);
  const heroTypeIntervalRef = useRef<number | null>(null);
  const heroStartTimeoutRef = useRef<number | null>(null);
  const quoteTypeIntervalRef = useRef<number | null>(null);
  const quoteStartTimeoutRef = useRef<number | null>(null);
  const cultureRevealTimeoutsRef = useRef<Record<string, number>>({});
  const cultureCardsInViewRef = useRef<Record<string, boolean>>({});
  const activeMobileCultureCardIdRef = useRef<string | null>(null);
  const activeRandomCultureCardIdRef = useRef<string | null>(null);
  const randomCultureTimeoutRef = useRef<number | null>(null);
  const cultureCardsGridRef = useRef<HTMLDivElement | null>(null);
  const wasCultureCardsGridVisibleRef = useRef(false);
  const activeHeroHeadingText = isMobileViewport ? heroHeadingTextMobile : heroHeadingText;

  const setActiveMobileCultureCard = (cardId: string | null) => {
    activeMobileCultureCardIdRef.current = cardId;
    setActiveMobileCultureCardId(cardId);
  };

  const setActiveRandomCultureCard = (cardId: string | null) => {
    activeRandomCultureCardIdRef.current = cardId;
    setActiveRandomCultureCardId(cardId);
  };

  const getFirstVisibleCultureCardId = () => {
    return cultureCards.find((card) => cultureCardsInViewRef.current[card.id])?.id ?? null;
  };

  const triggerRandomCultureCard = () => {
    const currentActiveId = activeRandomCultureCardIdRef.current;
    const availableCards = cultureCards.filter((card) => card.id !== currentActiveId);
    const randomPool = availableCards.length > 0 ? availableCards : cultureCards;
    const nextCard = randomPool[Math.floor(Math.random() * randomPool.length)];
    if (!nextCard) return;

    if (randomCultureTimeoutRef.current) {
      window.clearTimeout(randomCultureTimeoutRef.current);
      randomCultureTimeoutRef.current = null;
    }

    setActiveRandomCultureCard(nextCard.id);

    randomCultureTimeoutRef.current = window.setTimeout(() => {
      setActiveRandomCultureCard(null);
      randomCultureTimeoutRef.current = null;
    }, randomCultureSwapDurationMs) as unknown as number;
  };

  const startQuoteTyping = () => {
    if (quoteStartTimeoutRef.current) {
      window.clearTimeout(quoteStartTimeoutRef.current);
      quoteStartTimeoutRef.current = null;
    }
    if (quoteTypeIntervalRef.current) {
      window.clearInterval(quoteTypeIntervalRef.current);
      quoteTypeIntervalRef.current = null;
    }

    setTypedQuoteLength(0);

    quoteStartTimeoutRef.current = window.setTimeout(() => {
      quoteTypeIntervalRef.current = window.setInterval(() => {
        setTypedQuoteLength((currentLength) => {
          if (currentLength >= animatedQuote.length) {
            if (quoteTypeIntervalRef.current) {
              window.clearInterval(quoteTypeIntervalRef.current);
              quoteTypeIntervalRef.current = null;
            }
            return currentLength;
          }

          return currentLength + 1;
        });
      }, quoteTypewriterCharDelayMs) as unknown as number;
    }, quoteTypewriterStartDelayMs) as unknown as number;
  };

  const resetQuoteTyping = () => {
    if (quoteStartTimeoutRef.current) {
      window.clearTimeout(quoteStartTimeoutRef.current);
      quoteStartTimeoutRef.current = null;
    }
    if (quoteTypeIntervalRef.current) {
      window.clearInterval(quoteTypeIntervalRef.current);
      quoteTypeIntervalRef.current = null;
    }

    setTypedQuoteLength(0);
  };

  const setCultureCardVisibility = (cardId: string, isVisible: boolean) => {
    cultureCardsInViewRef.current[cardId] = isVisible;

    const activeTimeout = cultureRevealTimeoutsRef.current[cardId];
    if (activeTimeout) {
      window.clearTimeout(activeTimeout);
      delete cultureRevealTimeoutsRef.current[cardId];
    }

    if (!isVisible) {
      if (activeMobileCultureCardIdRef.current === cardId) {
        setActiveMobileCultureCard(null);

        const nextCardId = getFirstVisibleCultureCardId();
        if (nextCardId) {
          cultureRevealTimeoutsRef.current[nextCardId] = window.setTimeout(() => {
            if (activeMobileCultureCardIdRef.current !== null) return;
            if (!cultureCardsInViewRef.current[nextCardId]) return;

            setActiveMobileCultureCard(nextCardId);
            delete cultureRevealTimeoutsRef.current[nextCardId];
          }, mobileCultureSwapDelayMs) as unknown as number;
        }
      }

      return;
    }

    if (activeMobileCultureCardIdRef.current !== null) return;

    const firstVisibleCardId = getFirstVisibleCultureCardId();
    if (firstVisibleCardId !== cardId) return;

    cultureRevealTimeoutsRef.current[cardId] = window.setTimeout(() => {
      if (activeMobileCultureCardIdRef.current !== null) return;
      if (!cultureCardsInViewRef.current[cardId]) return;

      setActiveMobileCultureCard(cardId);
      delete cultureRevealTimeoutsRef.current[cardId];
    }, mobileCultureSwapDelayMs) as unknown as number;
  };

  // Start/restart the hero typing. Call this whenever the heading becomes visible.
  const startHeroTyping = () => {
    // Clear any existing timers
    if (heroStartTimeoutRef.current) {
      window.clearTimeout(heroStartTimeoutRef.current);
      heroStartTimeoutRef.current = null;
    }
    if (heroTypeIntervalRef.current) {
      window.clearInterval(heroTypeIntervalRef.current);
      heroTypeIntervalRef.current = null;
    }

    setTypedHeroHeadingLength(0);

    heroStartTimeoutRef.current = window.setTimeout(() => {
      heroTypeIntervalRef.current = window.setInterval(() => {
        setTypedHeroHeadingLength((currentLength) => {
          if (currentLength >= activeHeroHeadingText.length) {
            if (heroTypeIntervalRef.current) {
              window.clearInterval(heroTypeIntervalRef.current);
              heroTypeIntervalRef.current = null;
            }
            return currentLength;
          }
          return currentLength + 1;
        });
      }, heroTypewriterCharDelayMs) as unknown as number;
    }, heroTypewriterStartDelayMs) as unknown as number;
  };

  useEffect(() => {
    return () => {
      if (heroStartTimeoutRef.current) window.clearTimeout(heroStartTimeoutRef.current);
      if (heroTypeIntervalRef.current) window.clearInterval(heroTypeIntervalRef.current);

      if (quoteStartTimeoutRef.current) window.clearTimeout(quoteStartTimeoutRef.current);
      if (quoteTypeIntervalRef.current) window.clearInterval(quoteTypeIntervalRef.current);

      Object.values(cultureRevealTimeoutsRef.current).forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });
      cultureRevealTimeoutsRef.current = {};
      cultureCardsInViewRef.current = {};
      activeMobileCultureCardIdRef.current = null;

      if (randomCultureTimeoutRef.current) {
        window.clearTimeout(randomCultureTimeoutRef.current);
        randomCultureTimeoutRef.current = null;
      }
      activeRandomCultureCardIdRef.current = null;
      wasCultureCardsGridVisibleRef.current = false;
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const applyViewportMode = (matches: boolean) => {
      if (!matches) {
        Object.values(cultureRevealTimeoutsRef.current).forEach((timeoutId) => {
          window.clearTimeout(timeoutId);
        });
        cultureRevealTimeoutsRef.current = {};
        cultureCardsInViewRef.current = {};
        setActiveMobileCultureCard(null);
      }

      if (matches) {
        if (randomCultureTimeoutRef.current) {
          window.clearTimeout(randomCultureTimeoutRef.current);
          randomCultureTimeoutRef.current = null;
        }
        setActiveRandomCultureCard(null);
        wasCultureCardsGridVisibleRef.current = false;
      }

      setIsMobileViewport(matches);
    };

    applyViewportMode(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      applyViewportMode(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (isMobileViewport) return;

    const node = cultureCardsGridRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;

        if (isVisible && !wasCultureCardsGridVisibleRef.current) {
          wasCultureCardsGridVisibleRef.current = true;
          triggerRandomCultureCard();
          return;
        }

        if (!isVisible && wasCultureCardsGridVisibleRef.current) {
          wasCultureCardsGridVisibleRef.current = false;

          if (randomCultureTimeoutRef.current) {
            window.clearTimeout(randomCultureTimeoutRef.current);
            randomCultureTimeoutRef.current = null;
          }
          setActiveRandomCultureCard(null);
        }
      },
      {
        threshold: 0.75,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isMobileViewport]);

  // Pick a small random sample of jobs to display as "Current Openings".
  const randomOpenings = useMemo(() => {
    const count = Math.min(3, jobs.length);
    const pool = jobs.slice();
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, count);
  }, [jobs]);

  return (
    <main className="bg-background text-black dark:bg-backgroundDark dark:text-white">
      <Header
        navItems={navItems}
        ctaLabel="Get Consultation"
        ctaHref="/#contact"
        logoSizeClass="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44"
      />

      <section className="bg-backgroundOne dark:bg-backgroundDark relative flex min-h-[716px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-surface/40 dark:bg-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
          <span className="mb-6 block text-sm font-bold uppercase tracking-widest text-backgroundDark dark:text-slate-300">Join Systems Edge Solutions</span>
          <FadeInOnScroll onVisibleChange={(visible) => visible && startHeroTyping()}>
            <h1 className="h1-settings mx-auto mb-8 max-w-4xl whitespace-pre-line text-balance overflow-anywhere text-primary dark:text-primary sm:max-w-5xl">
              {activeHeroHeadingText.slice(0, typedHeroHeadingLength)}
              {typedHeroHeadingLength < activeHeroHeadingText.length ? (
                <span aria-hidden="true" className="ml-0.5 inline-block animate-pulse">
                  _
                </span>
              ) : null}
            </h1>
          </FadeInOnScroll>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate('/all-jobs')}
              className={[heroActionButtonBaseClasses, heroActionButtonVariantClasses.openRoles].join(' ')}
            >
              View Open Roles
            </button>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('culture');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  return;
                }
                navigate('/careers#culture');
              }}
              className={[heroActionButtonBaseClasses, heroActionButtonVariantClasses.ourCulture].join(' ')}
            >
              Our Culture
            </button>
          </div>
        </div>
      </section>

      {evolutionOptions.map((option) => (
        <section key={option.id} className="bg-background border-b border-outline-variant/10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-8 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h2-settings mb-4 text-balance text-black dark:text-white">
              <span className="text-secondary">Growth,</span> <br />Mentorship &amp; Technical Excellence
            </h2>
            <FadeInOnScroll onVisibleChange={(visible) => (visible ? startQuoteTyping() : resetQuoteTyping())}>
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  alt={option.imageAlt}
                  className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={option.imageSrc}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-8">
                  <p className="h3-settings italic text-white">
                    {option.id === quoteTypewriterTargetId ? option.quote.slice(0, typedQuoteLength) : option.quote}
                    {option.id === quoteTypewriterTargetId && typedQuoteLength < option.quote.length ? (
                      <span aria-hidden="true" className="ml-0.5 inline-block animate-pulse">
                        _
                      </span>
                    ) : null}
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>

          <div className="space-y-8 lg:col-span-7">
            <div
              ref={cultureCardsGridRef}
              className={[
                'grid grid-cols-1 gap-8 md:grid-cols-2',
                !isMobileViewport && activeRandomCultureCardId !== null ? 'pointer-events-none' : '',
              ].join(' ')}
            >
              {cultureCards.map((card) => {
                const isVisibleOnMobile = isMobileViewport && activeMobileCultureCardId === card.id;
                const isRandomlyActiveOnDesktop = !isMobileViewport && activeRandomCultureCardId === card.id;
                const isCardEffectActive = isVisibleOnMobile || isRandomlyActiveOnDesktop;

                const cardContent = (
                  <article
                    key={card.id}
                    onMouseEnter={() => {
                      if (isMobileViewport) return;
                      if (activeRandomCultureCardIdRef.current === null) return;

                      if (randomCultureTimeoutRef.current) {
                        window.clearTimeout(randomCultureTimeoutRef.current);
                        randomCultureTimeoutRef.current = null;
                      }

                      setActiveRandomCultureCard(null);
                    }}
                    className={[
                      'group overflow-hidden rounded-2xl border border-outline-variant/10 bg-backgroundOne p-6 shadow-sm transition-colors transition-shadow duration-700 hover:bg-secondary hover:shadow-md sm:p-7 dark:border-slate-700 dark:bg-backgroundDarkOne dark:hover:bg-secondary',
                      isCardEffectActive ? 'bg-secondary shadow-md dark:bg-secondary' : '',
                    ].join(' ')}
                  >
                    <div
                      className={[
                        'mb-4 mx-auto flex h-11 w-11 translate-y-9 items-center justify-center rounded-xl bg-primary text-on-primary transition-opacity duration-700 group-hover:hidden sm:mb-5 sm:mx-0 sm:h-12 sm:w-12 sm:translate-y-0',
                        isCardEffectActive ? 'hidden' : '',
                      ].join(' ')}
                    >
                      <span aria-hidden="true" className="material-symbols-outlined">
                        {card.icon}
                      </span>
                    </div>
                    <div className="relative min-h-48 sm:min-h-40 lg:min-h-32">
                      <h3
                        className={[
                          'absolute inset-0 flex items-center justify-center text-center big-card-tittle-settings sm:block sm:text-left text-black transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:opacity-0 dark:text-white',
                          isCardEffectActive ? '-translate-y-1 opacity-0' : '',
                        ].join(' ')}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={[
                          'absolute inset-0 card-1-description-settings flex items-center py-2 sm:items-start sm:py-0 translate-y-2 text-black opacity-0 transition-all duration-0 delay-50 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-white group-hover:duration-500 group-hover:delay-100 dark:text-slate-300 dark:group-hover:text-white',
                          isCardEffectActive ? 'translate-y-0 opacity-100 text-white' : '',
                        ].join(' ')}
                      >
                        {card.description}
                      </p>
                    </div>
                  </article>
                );

                if (!isMobileViewport) return cardContent;

                return (
                  <FadeInOnScroll
                    key={card.id}
                    delayMs={220}
                    onVisibleChange={(isVisible) => setCultureCardVisibility(card.id, isVisible)}
                  >
                    {cardContent}
                  </FadeInOnScroll>
                );
              })}
            </div>

            <div
              className="relative overflow-hidden rounded-2xl bg-primary p-10 text-on-primary"
              style={{ marginTop: engineerFirstCardOffsetY }}
            >
              <div className="relative z-10">
                <h4 className="h3-settings mb-4 text-white dark:text-white">Engineer-First Philosophy</h4>
                <p className="card-1-description-settings mb-6 text-slate-300 dark:text-slate-300">
                  We do not just hire for what you know today; we invest in what you will build tomorrow. Our culture is built by engineers, for
                  engineers.
                </p>
                <button
                  type="button"
                  onClick={() => navigate('/all-jobs')}
                  className="button-1-settings bg-secondary text-on-secondary transition-all hover:bg-secondary-fixed hover:text-slate-700 dark:hover:text-slate-300"
                >
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
        </div>
        </section>
      ))}

      <section className="bg-backgroundOne dark:bg-backgroundDarkOne">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <div className="mb-16 text-center lg:text-left">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Non-Linear Career Flow</span>
            <h2 className="h2-settings mb-4 text-balance text-black dark:text-white">The Evolution Path</h2>
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
                <h3 className="h3-settings mb-4 text-black dark:text-white">{stage.title}</h3>
                <span className="mb-4 block text-sm font-bold uppercase text-secondary">{stage.phase}</span>
                <p className="card-1-description-settings text-center text-slate-600 dark:text-slate-300 lg:text-left">{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="bg-background py-24 dark:bg-backgroundDark">
        <div className="mx-auto max-w-screen-2xl px-8 lg:px-12">
          <div className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-24 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-secondary">Careers at Systems Edge</p>
              <h2 className="h2-settings mb-4 text-balance text-primary dark:text-white">
                Culture is a Structural Requirement
              </h2>
              <div className="mt-6 h-1 w-32 bg-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[320px_320px]">
            <article className="group relative overflow-hidden rounded-xl md:col-span-1 lg:col-span-4 lg:row-span-1">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />
              <img
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7qcxf_7u2pVkD5G250-EE1A1bNff9_QmKa0Qhiea7VRgY7xn5kttlf48nSG9sOPT7Q-x7vED-djQHzhsD0xthE83s17SxjJfDg10vuKFXVtKHZE03cmSR6v3ocVHfe2EtzbxhGSUEAu8jjNdC54Mp1yWSuCQXgKZaA7tNuGG_9KaY8vOKXeoT22gEhz0hKKJRDKuzUwYDdCdL8V51uyVUmQyGQGqB9RjZS0ijkol2ESl-OzMzS2Y_JQAfEumyfOYU7F7-1T4160ER"
                alt="Minimalist home office with desk and forest view"
              />
              <div className="relative z-20 flex h-full flex-col justify-between p-8">
                <div className="flex justify-end">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white backdrop-blur-md">
                    <span aria-hidden="true" className="material-symbols-outlined">add</span>
                  </div>
                </div>
                <h3 className="big-card-tittle-settings text-white">Live and Work Anywhere</h3>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-xl bg-primary-container p-8 md:col-span-1 lg:col-span-3 lg:row-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span aria-hidden="true" className="material-symbols-outlined text-4xl text-secondary-container">work</span>
                  <button
                    type="button"
                    onClick={() => navigate('/all-jobs')}
                    aria-label="View all jobs"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-white"
                  >
                    <span aria-hidden="true" className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <div>
                  <div className="h2-settings text-white">20</div>
                  <div className="h3-settings text-white/70">Open Positions</div>
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-backgroundOne p-10 md:col-span-2 lg:col-span-5 lg:row-span-2 dark:bg-backgroundDarkOne">
              <h3 className="card-1-title-settings mb-8 text-primary dark:text-white">Global Departments</h3>
              <ul className="space-y-1">
                  {useMemo(() => {
                    const order = [
                      'Engineering',
                      'Product Management',
                      'Sales / Business Development',
                      'Marketing',
                      'Human Resources',
                      'Finance',
                      'Product Design',
                    ];
                    const unique = Array.from(new Set(jobs.map((j) => j.department)));
                    const ordered = order.filter((d) => unique.includes(d));
                    const extras = unique.filter((d) => !order.includes(d));
                    return [...ordered, ...extras];
                  }, []).map((department) => (
                  <li
                    key={department}
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(`/all-jobs?dept=${encodeURIComponent(department)}`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') navigate(`/all-jobs?dept=${encodeURIComponent(department)}`);
                    }}
                    className="cursor-pointer group -mx-4 flex items-center justify-between rounded-lg border-b border-outline-variant/20 px-4 py-4 transition-colors last:border-b-0 hover:bg-surface-container-high dark:hover:bg-slate-800"
                  >
                    <span className="h3-settings text-backgroundDark transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-secondary">
                      {department}
                    </span>
                    <span aria-hidden="true" className="material-symbols-outlined text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                      arrow_forward
                    </span>
                  </li>
                ))}
              </ul>
                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => navigate('/all-jobs')}
                    className="button-1-settings group flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-on-primary transition-colors hover:bg-primary-container"
                  >
                    View All Roles
                    <span aria-hidden="true" className="material-symbols-outlined text-sm">open_in_new</span>
                  </button>
                </div>
            </article>

            <article className="relative overflow-hidden rounded-xl bg-primary-container p-8 md:col-span-1 lg:col-span-3 lg:row-span-1">
              <div className="absolute left-0 top-0 h-1 w-full bg-secondary" />
              <div className="flex h-full flex-col justify-end">
                <div className="h2-settings text-secondary">24</div>
                <div className="h3-settings text-white">Specialized Teams</div>
                <div className="mt-3 h-1 w-8 bg-secondary" />
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-xl md:col-span-2 lg:col-span-4 lg:row-span-1">
              <div className="absolute inset-0 z-10 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />
              <img
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBPEUGvUg_IvgalRDzQk6PsOuKaQ9IwWBhrJZntYIaUzAM0efKsnHBwimXfx5oDOifd-5QBUYlgUiVuJYdbklVF0BBPHIlQrOwTnOmZfwgotOaY-CZHIHh3cUfaP6q-sUt1hhm1AKr_QqPcglnLT5nfDW7YKkmPPvtIwLENmcGdHgNwE-8JFtiQXViM4vvW5TmcT0cYBJuNGHzL4MuUltu67sn4OJ9ivIo6JEqmEssMUlbRCX6wIXAwU7d7j_VgmvBLySR5Zj3gXhU"
                alt="Collaborative creative team in studio"
              />
              <div className="relative z-20 flex h-full flex-col justify-end p-8">
                <div className="max-w-[80%] rounded-lg bg-surface/90 p-6 shadow-lg backdrop-blur-md">
                  <h3 className="h3-settings text-primary dark:text-primary">Do the most amazing work of your career.</h3>
                </div>
              </div>
            </article>
          </div>

        </div>
      </section>

      <section className="bg-backgroundOne py-24 dark:bg-backgroundDark">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">The Systems Edge Advantage</span>
            <h2 className="h2-settings mb-4 text-balance text-black dark:text-white">
              Professional
              
              Excellence
             
          
              Starts Here
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {advantageCards.map((advantage) => (
              <article
                key={advantage.id}
                className="rounded-xl bg-background p-10 shadow-[0px_12px_32px_rgba(40,41,115,0.06)] transition-transform hover:-translate-y-1 dark:border dark:border-slate-700 dark:bg-backgroundDarkOne"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <span aria-hidden="true" className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {advantage.icon}
                  </span>
                </div>
                <h3 className="card-1-settings mb-4 text-black dark:text-white">{advantage.title}</h3>
                <p className="card-1-description-settings text-slate-600 dark:text-slate-300">{advantage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>



      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h3 className="h2-settings mb-6 text-white">Equal Opportunity Employment</h3>
          <p className="h3-settings text-white">
            Systems Edge Solutions is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all
            employees. All employment is decided on the basis of qualifications, merit, and business need. We do not discriminate based on race, religion,
            color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.
          </p>
        </div>
      </section>




      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 py-24 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
          {/* Hide the large-screen image on mobile; show only on lg+ */}
          <div className="hidden lg:block overflow-hidden rounded-xl shadow-xl">
            <img
              className="aspect-square h-auto w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoNXv1_azbI_BVCbEEy3SpI0Lgt5VVi0cIyM6ys3WC_Ies_MzUIr0t6efrzyffzz2KwsIduktNNhO-0Cfpdt9JcwP3tdoS8GqpB110v4xM8etEAyrIaI_Gi2lDJfWx-Yt1ZSac_2nrAXRM0tHnsC0W8pR5hAEeJZ46Ntn_ZRO1jdDW9Tk-MUVKeoww4GuvewchmeOxcAOQG7wGdOyJ9n3oNN2bzSKb3NWRmiiqtxKxyv3s7Hksdmf_lwjStJBMeVRmXbFZTgDPAOoT"
              alt="Overhead shot of a clean desk"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <h2 className="h2-settings mb-4 text-balance text-black dark:text-white">Our Selection Process</h2>
          {/* Mobile-only image placed between heading and choices */}
          <div className="mb-6 block lg:hidden overflow-hidden rounded-xl shadow-xl">
            <img
              className="aspect-square h-auto w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoNXv1_azbI_BVCbEEy3SpI0Lgt5VVi0cIyM6ys3WC_Ies_MzUIr0t6efrzyffzz2KwsIduktNNhO-0Cfpdt9JcwP3tdoS8GqpB110v4xM8etEAyrIaI_Gi2lDJfWx-Yt1ZSac_2nrAXRM0tHnsC0W8pR5hAEeJZ46Ntn_ZRO1jdDW9Tk-MUVKeoww4GuvewchmeOxcAOQG7wGdOyJ9n3oNN2bzSKb3NWRmiiqtxKxyv3s7Hksdmf_lwjStJBMeVRmXbFZTgDPAOoT"
              alt="Overhead shot of a clean desk"
            />
          </div>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-on-primary">01</div>
              <div>
                <h4 className="card-1-title-settings mb-2 text-black dark:text-white">Technical Review</h4>
                <p className="card-1-description-settings text-slate-600 dark:text-slate-300">
                  Submit your CV and portfolio. Our senior architects personally review every application for alignment with our core technical values.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-on-primary">02</div>
              <div>
                <h4 className="card-1-title-settings mb-2 text-black dark:text-white">Architectural Dialogue</h4>
                <p className="card-1-description-settings text-slate-600 dark:text-slate-300">
                  Instead of standard interviews, we engage in technical discussions about systems design and problem-solving methodologies.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-on-primary">03</div>
              <div>
                <h4 className="card-1-title-settings mb-2 text-black dark:text-white">Collaborative Trial</h4>
                <p className="card-1-description-settings text-slate-600 dark:text-slate-300">
                  Work with our team on a real-world simulation to see how we tackle complex challenges together.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="bg-backgroundOne py-24 dark:bg-backgroundDark">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="h2-settings mb-4 text-balance text-black dark:text-white">Current Openings</h2>
              <p className="h3-settings max-w-xl text-slate-600 dark:text-slate-300">Every journey at Systems Edge is bespoke. Find your alignment within our architectural tiers.</p>
            </div>
            <button type="button" onClick={() => navigate('/all-jobs')} className="button-2-settings !mb-0 bg-secondary text-on-secondary shadow-md transition-all hover:brightness-110 md:!mb-0">
              See Open Roles
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {randomOpenings.map((job) => {
              const tagsToShow: string[] = [];
              if (job.flex && job.flex.length) tagsToShow.push(job.flex.join(' / '));
              if (job.skills && job.skills.length) tagsToShow.push(job.skills.slice(0, 3).join(', '));
              if (job.deadline) tagsToShow.push(job.deadline);

              return (
                <article
                  key={job.id}
                  className="group flex flex-col justify-between rounded-xl border border-outline-variant/10 bg-background p-10 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-backgroundDarkOne"
                >
                  <div>
                    <span aria-hidden="true" className="material-symbols-outlined mb-6 text-4xl text-secondary">
                      {job.icon ?? 'work'}
                    </span>
                    <h3 className="card-1-title-settings mb-4 text-black dark:text-white">{job.title}</h3>
                    <p className="card-1-description-settings mb-8 text-backgroundDarkOne dark:text-background">{job.description ?? ''}</p>
                  </div>

                  <ul className="mb-8 space-y-3">
                    {tagsToShow.map((t, i) => (
                      <li key={i} className="h4-settings flex items-center gap-2 text-backgroundDarkOne dark:text-background">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        {t}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => navigate(`/all-jobs?job=${encodeURIComponent(job.title)}&q=${encodeURIComponent(job.title)}`)}
                    className="h3-settings flex items-center gap-2 text-primary transition-all group-hover:gap-4 dark:text-secondary"
                  >
                    View Details
                    <span aria-hidden="true" className="material-symbols-outlined h3-settings">
                      trending_flat
                    </span>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>



      <section className="bg-background p-6 md:p-12 lg:p-24 dark:bg-backgroundDarkOne">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary shadow-2xl">
          <div className="relative z-10 px-8 py-16 text-center md:py-20">
            <h2 className="h2-settings mx-auto mb-6 max-w-3xl text-white">Ready to build the edge?</h2>
            <p className="h3-settings mx-auto mb-10 max-w-2xl text-blue-100 opacity-80">
              Explore our current openings and <br /> find your place in an elite engineering culture.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button type="button" onClick={() => navigate('/all-jobs')} className="button-1-settings bg-secondary text-on-secondary shadow-xl transition-all hover:brightness-110">
                Open Roles
              </button>
              <button
                type="button"
                className="button-1-settings border border-white/20 bg-white/10 text-on-primary backdrop-blur-md transition-all hover:bg-white/20"
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
