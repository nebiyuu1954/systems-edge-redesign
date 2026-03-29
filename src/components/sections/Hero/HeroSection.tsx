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
    <section className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-12 dark:bg-backgroundDark" aria-labelledby="hero-heading">
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
            className="h1-settings text-white drop-shadow-sm"
          >
            {title}
          </h1>

          <p className="h3-settings max-w-xl text-slate-200">{description}</p>

          <div className="mt-4 flex flex-wrap gap-4">
            {actions.map((action) => (
              <a
                key={action.id}
                href={action.href}
                className={
                    action.variant === 'primary'
                      ? 'button-1-settings inline-flex items-center justify-center bg-white text-[#282971] shadow-lg ring-1 ring-white/10 transition-colors hover:bg-slate-100'
                    : 'button-1-settings inline-flex items-center justify-center border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20'
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
