import type { ReactElement, ReactNode } from 'react';
import FadeInOnScroll from './FadeInOnScroll';

export interface SectionHeadingProps {
  id?: string;
  heading: ReactNode;
  label?: ReactNode;
  description?: ReactNode;
  center?: boolean;
  headingClassName?: string;
  descriptionClassName?: string;
  delayMsHeading?: number;
  delayMsDescription?: number;
  compact?: boolean;
}

/**
 * Reusable section heading that wraps heading + description with consistent
 * typography and FadeInOnScroll animation so sections share the same styles.
 */
export default function SectionHeading({
  id,
  heading,
  description,
  center = true,
  headingClassName = '',
  descriptionClassName = '',
  delayMsHeading = 0,
  delayMsDescription = 120,
  compact = false,
}: SectionHeadingProps): ReactElement {
  const headingAlignment = center ? 'text-center' : 'text-left';
  const headingMarginClass = compact ? 'mb-0' : 'mb-6';
  const descriptionMarginClass = compact ? 'mb-6' : 'mb-20';

  return (
    <div className="w-full">
      {/** Optional small label above the heading (e.g., "Methodology") */}
      {('label' in arguments[0] || undefined) && (
        <FadeInOnScroll delayMs={0}>
          <p className={`mb-4 block text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-white ${center ? 'text-center' : 'text-left'}`}>
            {arguments[0].label}
          </p>
        </FadeInOnScroll>
      )}

      <FadeInOnScroll delayMs={delayMsHeading}>
        <h2
          id={id}
          className={`${headingMarginClass} text-4xl font-bold text-primary dark:text-white md:text-5xl ${headingAlignment} ${headingClassName}`}
        >
          {heading}
        </h2>
      </FadeInOnScroll>

      {description ? (
        <FadeInOnScroll delayMs={delayMsDescription}>
          <p
            className={`${descriptionMarginClass} max-w-[800px] ${center ? 'mx-auto text-center' : 'text-left'} text-lg leading-relaxed text-slate-600 dark:text-slate-400 ${descriptionClassName}`}
          >
            {description}
          </p>
        </FadeInOnScroll>
      ) : null}
    </div>
  );
}
