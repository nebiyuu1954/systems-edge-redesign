import type { ReactElement, ReactNode, SVGProps } from 'react';
import FadeInOnScroll from '../../../common/FadeInOnScroll';

export interface ServicesDescriptionCardProps {
  title: ReactNode;
  description: string;
  imageSrc?: string;
  delayMs?: number;
  Icon?: (props: SVGProps<SVGSVGElement>) => ReactElement;
  children?: ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function ServicesDescriptionCard({
  title,
  description,
  imageSrc,
  delayMs,
  Icon,
  children,
  titleClassName,
  descriptionClassName,
}: ServicesDescriptionCardProps): ReactElement {
  const baseDelay = delayMs ?? 0;

  const altText = typeof title === 'string' ? title : undefined;

  const card = (
    <article className="relative overflow-hidden bg-background dark:bg-servicesCardDark rounded-2xl shadow-xl shadow-primary/5 dark:shadow-black/40 border border-slate-100 dark:border-slate-700 text-left hover:shadow-md transition-shadow">
      {imageSrc ? <img alt={altText} className="w-full h-48 object-cover" src={imageSrc} /> : null}
      <div className="p-10 pt-6">
        {Icon ? (
              <div className="mb-6">
            <div className="flex items-start gap-4">
              <div className="relative z-10 w-14 h-14 bg-backgroundOne dark:bg-backgroundDarkOne text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-8 h-8 dark:text-white text-black " />
              </div>

              <div className="flex-1">
                <FadeInOnScroll delayMs={baseDelay + 120} className="block">
                  <h3 className={`card-1-title-settings relative z-10 mb-0 whitespace-pre-line ${titleClassName ?? 'text-black dark:text-white'}`}>{title}</h3>
                </FadeInOnScroll>
              </div>
            </div>

            <div className="mt-4">
              <FadeInOnScroll delayMs={baseDelay + 260} className="block">
                <p className={`card-1-description-settings relative z-10 leading-relaxed ${descriptionClassName ?? 'text-slate-600 dark:text-slate-300'}`}>{description}</p>
              </FadeInOnScroll>
            </div>
          </div>
        ) : (
          <>
            <FadeInOnScroll delayMs={baseDelay + 120} className="block">
              <h3 className={`card-1-title-settings relative z-10 mb-4 whitespace-pre-line ${titleClassName ?? 'text-primary dark:text-white'}`}>{title}</h3>
            </FadeInOnScroll>

            <FadeInOnScroll delayMs={baseDelay + 260} className="block">
              <p className={`card-1-description-settings relative z-10 leading-relaxed ${descriptionClassName ?? 'text-slate-600 dark:text-slate-300'}`}>{description}</p>
            </FadeInOnScroll>

            {children ? <div className="relative z-10 mt-6">{children}</div> : null}
          </>
        )}
      </div>
    </article>
  );

  return (
    <FadeInOnScroll delayMs={delayMs} className="w-full">
      {card}
    </FadeInOnScroll>
  );
}
