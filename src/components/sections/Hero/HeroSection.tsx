import type { ReactElement } from 'react';

export interface HeroAction {
  id: string;
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface HeroSectionProps {
  badgeText: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  actions: HeroAction[];
}

const HeroSection = ({
  badgeText,
  title,
  description,
  imageSrc,
  imageAlt,
  actions,
}: HeroSectionProps): ReactElement => {
  return (
    <section className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-12" aria-labelledby="hero-heading">
      <div className="relative flex min-h-[500px] items-center overflow-hidden rounded-2xl bg-[#282971] sm:min-h-[560px] xl:min-h-[620px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#282971] via-[#282971]/90 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />
          <img alt={imageAlt} className="h-full w-full object-cover opacity-60" src={imageSrc} />
        </div>

        <div className="relative z-20 flex max-w-3xl flex-col gap-5 px-5 py-10 sm:gap-6 sm:px-6 sm:py-12 lg:px-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#20c997]" />
            {badgeText}
          </div>

          <h1
            id="hero-heading"
            className="text-3xl font-black leading-tight tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            {title}
          </h1>

          <p className="max-w-xl text-base font-normal leading-relaxed text-slate-200 sm:text-lg">{description}</p>

          <div className="mt-4 flex flex-wrap gap-4">
            {actions.map((action) => (
              <a
                key={action.id}
                href={action.href}
                className={
                  action.variant === 'primary'
                    ? 'flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-bold text-[#282971] shadow-lg transition-colors hover:bg-slate-100 sm:h-12 sm:px-8 sm:text-base'
                    : 'flex h-11 items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:h-12 sm:px-8 sm:text-base'
                }
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
