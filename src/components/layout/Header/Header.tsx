import { useState, useEffect, type ReactElement, type ReactNode } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      if (typeof window === 'undefined') return false;
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      // Default to light mode when no stored preference is present
      return false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (isDark) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      /* ignore */
    }
  }, [isDark]);

  const isRouteLink = (href: string): boolean => href.startsWith('/') && !href.includes('#');

  const navigate = useNavigate();
  const location = useLocation();

  const parsePathAndAnchor = (href: string): { path: string; anchor: string } | null => {
    const idx = href.indexOf('#');
    if (idx === -1) return null;
    const path = href.slice(0, idx) || '/';
    const anchor = href.slice(idx + 1);
    return { path, anchor };
  };

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    const parsed = parsePathAndAnchor(href);
    if (!parsed) return;
    e.preventDefault();

    const { path, anchor } = parsed;

    // If the target path matches the current location, attempt to scroll on-page
    if (path === location.pathname) {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.location.hash = `#${anchor}`;
      setIsMobileMenuOpen(false);
      return;
    }

    // Otherwise navigate to the target path and pass the anchor as state so the destination can scroll to it
    navigate(path || '/', { state: { scrollTo: anchor } });
    setIsMobileMenuOpen(false);
  };

  const renderNavLink = (href: string, className: string, children: ReactNode): ReactElement => {
    if (isRouteLink(href)) {
      return (
        <Link className={className} to={href}>
          {children}
        </Link>
      );
    }

    const parsed = parsePathAndAnchor(href);
    if (parsed) {
      return (
        <a className={className} href={href} onClick={(e) => handleAnchorClick(e, href)}>
          {children}
        </a>
      );
    }

    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-solid border-slate-200 bg-white/90 px-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90 sm:px-6 lg:px-12">
      <div className="flex h-20 items-center justify-between">
        <div className="flex h-full items-center text-primary dark:text-white">
          <div className="flex h-full items-center overflow-visible">
            <Link to="/" aria-label="Home" className="block">
              <img src={systemEdgeLogo} alt="Systems Edge logo" className={`${logoSizeClass} w-auto object-contain`} />
            </Link>
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
          <nav className="flex items-center gap-8" aria-label="Primary">
            {navItems.map((item) => (
              <span key={item.id}>
                {renderNavLink(
                  item.href,
                  "h4-settings pb-2 font-medium leading-normal text-slate-700 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-white relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-1 before:w-full before:bg-secondary before:rounded-full before:scale-x-0 before:origin-left before:transition-transform before:duration-200 hover:before:scale-x-100",
                  item.label,
                )}
              </span>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsDark((v) => !v)}
            aria-pressed={isDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-2 mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-primary shadow-sm transition-colors hover:bg-slate-200 dark:bg-backgroundDarkOne dark:text-white dark:hover:bg-slate-700"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36l-1.42 1.42M7.05 16.95l-1.42 1.42m12.02 0l-1.42-1.42M7.05 7.05L5.63 5.63" />
                <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
              </svg>
            )}
          </button>

          {renderNavLink(
            ctaHref,
            'flex h-10 cursor-pointer items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold leading-normal tracking-wide text-white transition-colors duration-200 hover:bg-secondary',
            <span className="truncate">{ctaLabel}</span>,
          )}
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
              <span key={item.id} className="w-full">
                {isRouteLink(item.href) ? (
                  <Link
                    to={item.href}
                    className="h3-settings block w-full text-center rounded-md px-2 py-1.5 pb-3 font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-1 before:w-full before:bg-secondary before:rounded-full before:scale-x-0 before:origin-left before:transition-transform before:duration-200 hover:before:scale-x-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="h3-settings block w-full text-center rounded-md px-2 py-1.5 pb-3 font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-1 before:w-full before:bg-secondary before:rounded-full before:scale-x-0 before:origin-left before:transition-transform before:duration-200 hover:before:scale-x-100"
                    onClick={(e) => handleAnchorClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                )}
              </span>
            ))}
          </nav>

          <div className="mt-4 flex flex-col items-center gap-3 px-2">
            <button
              type="button"
              onClick={() => setIsDark((v) => !v)}
              aria-pressed={isDark}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-primary shadow-sm transition-colors hover:bg-slate-200 dark:bg-backgroundDarkOne dark:text-white dark:hover:bg-slate-700"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36l-1.42 1.42M7.05 16.95l-1.42 1.42m12.02 0l-1.42-1.42M7.05 7.05L5.63 5.63" />
                  <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
                </svg>
              )}
            </button>

            {isRouteLink(ctaHref) ? (
              <Link
                to={ctaHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="button-2-settings w-full inline-flex items-center justify-center bg-primary text-white transition-colors duration-200 hover:bg-secondary"
              >
                {ctaLabel}
              </Link>
            ) : (
              <a
                href={ctaHref}
                onClick={(e) => handleAnchorClick(e, ctaHref)}
                className="button-2-settings w-full inline-flex items-center justify-center bg-primary text-white transition-colors duration-200 hover:bg-secondary"
              >
                {ctaLabel}
              </a>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
