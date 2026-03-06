import { useState, type ReactElement } from 'react';
import systemEdgeLogo from '../../../assets/logos/system edge logo.png';

export interface HeaderNavItem {
  id: string;
  label: string;
  href: string;
}

export interface HeaderProps {
  navItems: HeaderNavItem[];
  ctaLabel: string;
  ctaHref: string;
  logoSizeClass?: string;
}

const Header = ({ navItems, ctaLabel, ctaHref, logoSizeClass = 'h-12' }: HeaderProps): ReactElement => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-solid border-slate-200 bg-white/90 px-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90 sm:px-6 lg:px-12">
      <div className="flex h-20 items-center justify-between">
        <div className="flex h-full items-center text-primary dark:text-white">
          <div className="flex h-full items-center overflow-visible">
            <a href="/" aria-label="Home" className="block">
              <img src={systemEdgeLogo} alt="Systems Edge logo" className={`${logoSizeClass} w-auto object-contain`} />
            </a>
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
          <nav className="flex items-center gap-8" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                className="text-sm font-medium leading-normal text-slate-700 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={ctaHref}
            className="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-sm font-bold leading-normal tracking-wide text-white shadow-lg shadow-primary/20 transition-colors hover:bg-[#3d3e91]"
          >
            <span className="truncate">{ctaLabel}</span>
          </a>
        </div>

        <button
          type="button"
          className="text-primary dark:text-white md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-slate-200 py-4 dark:border-slate-800 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-md px-2 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={ctaHref}
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#3d3e91]"
          >
            {ctaLabel}
          </a>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
