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
  const [expandedById, setExpandedById] = useState<Record<string, boolean>>({});

  const toggleExpanded = (blockId: string): void => {
    setExpandedById((prev) => ({ ...prev, [blockId]: !prev[blockId] }));
  };

  return (
    <section id={sectionId} className="w-full py-[72px] sm:py-[100px]" aria-label="Objectives section">
      <div className="relative w-full">
        <div className="mx-auto mb-12 max-w-7xl px-6 text-center lg:px-12">
          <FadeInOnScroll>
            <h1 id="why-us-heading" className="mb-6 text-center text-4xl font-bold text-primary dark:text-white md:text-5xl">
              Why us
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll delayMs={120} className="mx-auto">
            <p className="mb-20 mx-auto max-w-[800px] text-center text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              We translate strategic objectives into scalable, measurable solutions that reduce risk and accelerate business value.
            </p>
          </FadeInOnScroll>
        </div>
        {blocks.map((block, index) => {
          const isExpanded = Boolean(expandedById[block.id]);
          const detailsId = `${block.id}-details`;
          return (
            <section
              key={block.id}
              className="relative isolate h-[560px] w-full overflow-hidden bg-black md:h-[640px] lg:sticky lg:top-0 lg:h-screen lg:min-h-[600px]"
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
                <h2 id={`${block.id}-heading`} className="mb-5 text-3xl font-bold leading-tight text-white sm:mb-6 sm:text-4xl lg:text-[48px]">
                  {block.title}
                </h2>

                <FadeInOnScroll delayMs={120} className="max-w-3xl">
                  <p className="text-base leading-relaxed text-white sm:text-lg lg:text-[20px]">{block.description}</p>
                </FadeInOnScroll>

                <FadeInOnScroll delayMs={220}>
                  <button
                    type="button"
                    onClick={() => toggleExpanded(block.id)}
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    className="mt-8 inline-flex items-center justify-center rounded-lg border border-white/50 bg-black/40 px-7 py-3 text-sm font-bold tracking-wide !text-white transition-all duration-300 hover:bg-black/60 hover:!text-white"
                  >
                    {isExpanded ? 'Hide Details' : block.learnMoreLabel ?? 'Learn More'}
                  </button>
                </FadeInOnScroll>

                <div
                  id={detailsId}
                  className={`mt-6 w-full max-w-3xl overflow-hidden rounded-xl border border-white/25 bg-black/75 text-center !text-white transition-all duration-700 ${
                    isExpanded ? 'max-h-72 translate-y-0 opacity-100' : 'max-h-0 translate-y-2 opacity-0'
                  }`}
                >
                  <div className="px-6 py-5">
                    <p className="text-base leading-relaxed !text-white text-center">{block.details ?? block.description}</p>
                    {block.detailPoints && block.detailPoints.length > 0 ? (
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed !text-white marker:text-white mx-auto text-left">
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
