import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import FadeInOnScroll from '../../common/FadeInOnScroll';
import SectionHeading from '../../common/SectionHeading';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  heading?: string;
  description?: string;
  items: FAQItem[];
  className?: string;
  contentClassName?: string;
}

const FAQSection = ({
  heading = 'Frequently Asked Questions',
  description = 'Quick answers to common questions about our delivery model and services.',
  items,
  className,
  contentClassName,
}: FAQSectionProps): ReactElement => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) {
      setOpenItemId(null);
      return;
    }

    if (openItemId && !items.some((item) => item.id === openItemId)) {
      setOpenItemId(null);
    }
  }, [items, openItemId]);

  const handleToggle = (itemId: string) => {
    setOpenItemId((currentItemId) => (currentItemId === itemId ? null : itemId));
  };

  return (
    <section
      id="faq"
      className={`w-full bg-backgroundOne px-6 py-16 lg:px-12 lg:py-24 dark:bg-backgroundDark ${className ?? ''}`}
      aria-labelledby="faq-heading"
    >
      <div className={contentClassName ?? 'mx-auto flex w-full max-w-7xl flex-col items-center'}>
        <SectionHeading
          id="faq-heading"
          heading={heading}
          description={description}
          headingClassName="h2-settings text-center"
          descriptionClassName="h3-settings text-center"
        />

        <div className="mt-4 flex w-full max-w-[57.6rem] flex-col gap-4">
          {items.map((item, index) => {
            const isOpen = openItemId === item.id;
            const triggerId = `faq-trigger-${item.id}`;
            const contentId = `faq-content-${item.id}`;

            return (
              <FadeInOnScroll key={item.id} delayMs={80 + index * 60}>
                <article className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
                  <h3 className="w-full">
                    <button
                      type="button"
                      id={triggerId}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => handleToggle(item.id)}
                      className="relative flex w-full items-center justify-center gap-6 px-6 py-5 text-center transition-colors duration-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/40 md:px-8 md:py-6 dark:hover:bg-slate-800"
                    >
                      <span className="h3-settings w-full pr-10 text-center text-slate-900 dark:text-white">{item.question}</span>
                      <span
                        aria-hidden
                        className={`absolute right-6 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 md:right-8 ${
                          isOpen
                            ? 'rotate-180 bg-primary text-white'
                            : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                        }`}
                      >
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-100 px-6 py-5 md:px-8 dark:border-slate-800">
                        <p className="h3-settings text-center text-slate-600 dark:text-slate-300">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
