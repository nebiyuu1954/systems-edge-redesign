import type { ReactElement } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = (): ReactElement => {
  const navigate = useNavigate();
  const location = useLocation();

  const getAnchorId = (href: string): string | null => {
    const idx = href.indexOf('#');
    if (idx === -1) return null;
    return href.slice(idx + 1);
  };

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    const anchor = getAnchorId(href);
    if (!anchor) return;
    e.preventDefault();

    if (location.pathname === '/') {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.location.hash = `#${anchor}`;
      return;
    }

    navigate('/', { state: { scrollTo: anchor } });
  };
  return (
    <footer className="bg-primary border-t border-gray-200 pt-16 pb-8" data-purpose="main-footer">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16" data-purpose="footer-navigation-grid">
          <div data-purpose="footer-column-services">
            <h3 className="text-white font-bold text-[18px] mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-white/90">
              <li>
                <Link className="text-white/90 hover:text-white transition-colors" to="/services/erp">
                  ERP Implementation &amp; Enterprise Systems
                </Link>
              </li>
              <li>
                <Link className="text-white/90 hover:text-white transition-colors" to="/services/outsourcing">
                  IT Outsourcing &amp; Professional Staffing
                </Link>
              </li>
              <li>
                <Link className="text-white/90 hover:text-white transition-colors" to="/services/supported">
                  Support, Managed Services and DevOps
                </Link>
              </li>
              <li>
                <Link className="text-white/90 hover:text-white transition-colors" to="/services/software-development">
                  Software Development &amp; System Integration
                </Link>
              </li>
              <li>
                <Link className="text-white/90 hover:text-white transition-colors" to="/services/ui-ux">
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link className="text-white/90 hover:text-white transition-colors" to="/services/testing">
                  Software Testing
                </Link>
              </li>
              <li>
                <Link className="text-white/90 hover:text-white transition-colors" to="/services/identity">
                  Identity &amp; Access Management
                </Link>
              </li>
            </ul>
          </div>

          <div data-purpose="footer-column-pages">
            <h3 className="text-white font-bold text-[18px] mb-6">Pages</h3>
            <ul className="space-y-4 text-sm text-white/90">
              <li>
                <Link className="text-white/90 hover:text-white transition-colors" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-white/90 hover:text-white transition-colors" to="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  className="text-white/90 hover:text-white transition-colors"
                  href="/#services"
                  onClick={(e) => handleAnchorClick(e, '/#services')}
                >
                  Services
                </a>
              </li>
              <li>
                <Link className="text-white/90 hover:text-white transition-colors" to="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="text-white/90 hover:text-white transition-colors" to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div data-purpose="footer-column-careers">
            <h3 className="text-white font-bold text-[18px] mb-6">Careers</h3>
            <ul className="space-y-4 text-sm text-white/90">
              <li>
                <Link className="text-white/90 hover:text-white transition-colors" to="/all-jobs">
                  Open Positions
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col" data-purpose="footer-column-branding">
            <div className="text-white font-bold text-[22px] tracking-tight mb-6">Systems Edge Solutions</div>
            <div className="flex items-center space-x-4" data-purpose="social-links">
              <a aria-label="LinkedIn" className="text-white/90 hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a aria-label="Twitter" className="text-white/90 hover:text-white" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-white/90 text-[14px]">Copyright © 2026 Systems Edge Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
