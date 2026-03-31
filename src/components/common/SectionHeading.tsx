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
}: SectionHeadingProps): ReactElement {
  const headingAlignment = center ? 'text-center' : 'text-left';

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
          className={`mb-6 text-4xl font-bold text-primary dark:text-white md:text-5xl ${headingAlignment} ${headingClassName}`}
        >
          {heading}
        </h2>
      </FadeInOnScroll>

      {description ? (
        <FadeInOnScroll delayMs={delayMsDescription}>
          <p
            className={`mb-20 max-w-[800px] mx-auto text-lg leading-relaxed text-slate-600 dark:text-slate-400 ${
              center ? 'text-center' : 'text-left'
            } ${descriptionClassName}`}
          >
            {description}
          </p>
        </FadeInOnScroll>
      ) : null}
    </div>
  );
}
