import type { ReactElement } from 'react';
import Header from './Header';

export interface ServicesHeaderProps {
  logoSizeClass?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ServicesHeader({
  logoSizeClass = 'h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44',
  ctaLabel = 'Get Consultation',
  ctaHref = '/contact-us',
}: ServicesHeaderProps): ReactElement {
  return (
    <Header
      navItems={[
        { id: 'services', label: 'Services', href: '#services' },
        { id: 'locations', label: 'Locations', href: '#locations-heading' },
        { id: 'careers', label: 'Careers', href: '/careers' },
        { id: 'about', label: 'About Us', href: '/about-us' },
      ]}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
      logoSizeClass={logoSizeClass}
    />
  );
}
