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
  const titleNode = (() => {
    if (typeof title !== 'string') return title;

    const titleWords = title.trim().split(/\s+/);
    if (titleWords.length !== 2) return title;

    return (
      <>
        <span className="block">{titleWords[0]}</span>
        <span className="block">{titleWords[1]}</span>
      </>
    );
  })();

  const card = (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white text-left shadow-[0px_12px_32px_rgba(40,41,115,0.04)] transition-transform hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
      <div className="absolute bottom-0 left-0 top-0 z-20 h-0 w-1 bg-secondary transition-all duration-500 ease-out group-hover:h-full" />
      {imageSrc ? (
        <div className="overflow-hidden">
          <img alt={altText} className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105" src={imageSrc} />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-6 p-8">
        <div className="flex items-start gap-4">
          {Icon ? (
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#f7f3ee] dark:bg-slate-800">
              <Icon className="h-8 w-8 text-secondary" />
            </div>
          ) : null}

          <div className="min-w-0 flex-1">
            <FadeInOnScroll delayMs={baseDelay + 120} className="block">
              <h3 className={`whitespace-pre-line text-xl font-bold text-primary dark:text-white ${titleClassName ?? ''}`.trim()}>{titleNode}</h3>
            </FadeInOnScroll>
          </div>
        </div>

        <FadeInOnScroll delayMs={baseDelay + 260} className="block">
          <p className={`text-base leading-relaxed text-slate-600 dark:text-slate-300 ${descriptionClassName ?? ''}`.trim()}>{description}</p>
        </FadeInOnScroll>

        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </article>
  );

  return (
    <FadeInOnScroll delayMs={delayMs} className="w-full">
      {card}
    </FadeInOnScroll>
  );
}
