import { useState, type ReactElement } from 'react';
import FadeInOnScroll from '../../common/FadeInOnScroll';

export interface ObjectiveBlock {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  details?: string;
  detailPoints?: string[];
  learnMoreLabel?: string;
  dataPurpose?: string;
}

export interface ObjectivesSectionProps {
  blocks: ObjectiveBlock[];
  sectionId?: string;
}

const ObjectivesSection = ({ blocks, sectionId = 'objectives' }: ObjectivesSectionProps): ReactElement => {
  // Change this value to increase/decrease the gap between
  // the first and second line of the title (line-height).
  // Example: '1.0' = tight, '1.25' = more space.
  const TITLE_LINE_HEIGHT = '1.35';

  const [expandedById, setExpandedById] = useState<Record<string, boolean>>({});

  const toggleExpanded = (blockId: string): void => {
    setExpandedById((prev) => {
      const isOpen = Boolean(prev[blockId]);
      // If already open, close it. Otherwise open this one and close others.
      return isOpen ? {} : { [blockId]: true };
    });
  };

  return (
    <section id={sectionId} className="w-full py-[72px] sm:py-[100px] dark:bg-backgroundDark" aria-label="Objectives section">
      <div className="relative w-full">
        <div className="mx-auto mb-12 max-w-7xl px-6 text-center lg:px-12">
          <FadeInOnScroll>
            <h1 id="why-us-heading" className="h2-settings sm:h1-settings mb-6 text-center text-primary dark:text-white">
              Why us
            </h1>
          </FadeInOnScroll>

          {/* <FadeInOnScroll delayMs={120} className="mx-auto">
            <p className="h3-settings mb-20 mx-auto max-w-[800px] text-center text-slate-600 dark:text-slate-400">
              We translate strategic objectives into scalable, measurable solutions that reduce risk and accelerate business value.
            </p>
          </FadeInOnScroll> */}
        </div>
        {blocks.map((block, index) => {
          const isExpanded = Boolean(expandedById[block.id]);
          const detailsId = `${block.id}-details`;
          return (
            <section
              key={block.id}
              id={block.id}
              className={`relative isolate ${isExpanded ? 'h-auto' : 'h-[560px]'} w-full ${
                isExpanded ? '' : 'overflow-hidden'
              } bg-black md:h-[640px] lg:sticky lg:top-0 lg:h-screen lg:min-h-[600px] py-8 md:py-12 lg:py-0 mb-8 lg:mb-0`}
              style={{ zIndex: index + 1 }}
              data-purpose={block.dataPurpose}
              aria-labelledby={`${block.id}-heading`}
            >
              <div className="absolute inset-0 z-0 bg-black">
                <img
                  alt={block.imageAlt}
                  className={`h-full w-full object-cover transition-opacity duration-700 ${isExpanded ? 'opacity-25' : 'opacity-100'}`}
                  src={block.imageSrc}
                  loading="lazy"
                />
                <div className={`absolute inset-0 transition-colors duration-700 ${isExpanded ? 'bg-black/70' : 'bg-black/40'}`} />
              </div>

              <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center text-white sm:px-6">
                <h2
                  id={`${block.id}-heading`}
                  style={{ lineHeight: TITLE_LINE_HEIGHT }}
                  className="big-card-tittle-settings  sm:h2-settings mb-5 text-white sm:mb-6"
                >
                  {block.title}
                </h2>

                <FadeInOnScroll delayMs={120} className="max-w-3xl">
                  <p className="h3-settings text-white">{block.description}</p>
                </FadeInOnScroll>

                <FadeInOnScroll delayMs={220}>
                  <button
                    type="button"
                    onClick={() => toggleExpanded(block.id)}
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    className="button-1-settings mt-8 bg-secondary text-white transition-all duration-300 hover:bg-white hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-secondary dark:text-white"
                  >
                    {isExpanded ? 'Hide Details' : block.learnMoreLabel ?? 'Learn More'}
                  </button>
                </FadeInOnScroll>

                <div
                  id={detailsId}
                  className={`mt-6 w-full max-w-3xl overflow-hidden rounded-xl border border-white/25 bg-black/75 text-center !text-white transition-all duration-700 ${
                    isExpanded ? 'max-h-[1000px] sm:max-h-72 translate-y-0 opacity-100' : 'max-h-0 translate-y-2 opacity-0'
                  }`}
                  aria-hidden={!isExpanded}
                >
                  <div className="px-6 py-5">
                    <p className="h3-settings text-center !text-white">{block.details ?? block.description}</p>
                    {block.detailPoints && block.detailPoints.length > 0 ? (
                      <ul className="card-1-description-settings mt-4 list-disc space-y-2 pl-5 !text-white marker:text-white mx-auto text-left">
                        {block.detailPoints.map((point) => (
                          <li key={`${block.id}-${point}`} className="!text-white">
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default ObjectivesSection;
