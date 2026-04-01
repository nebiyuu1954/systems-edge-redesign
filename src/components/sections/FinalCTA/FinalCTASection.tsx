import type { ReactElement } from 'react';
import FadeInOnScroll from '../../common/FadeInOnScroll';
import { Link } from 'react-router-dom';

const FinalCTASection = (): ReactElement => {
  return (
    <section className="relative w-full bg-primary overflow-hidden" id="final-cta" aria-labelledby="final-cta-title">
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><rect width=\'1\' height=\'40\' fill=\'%23ffffff0c\' /><rect width=\'40\' height=\'1\' fill=\'%23ffffff0c\' /></svg>')] bg-repeat" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/100 mix-blend-overlay" />

      <div className="relative z-10 mx-auto px-6 py-24 md:py-32 lg:py-36 flex flex-col items-center justify-center text-center max-w-7xl">
        <FadeInOnScroll>
          <h2 id="final-cta-title" className="h2-settings mb-4 text-white">
            Let's Build Systems That Scale
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <p className="h3-settings mb-8 max-w-[640px] text-white/90">
            Get in touch with our team to discuss your enterprise needs.
          </p>
        </FadeInOnScroll>

        <div>
          <Link
            to="/contact-us"
            role="button"
            className="button-1-settings mx-auto w-fit bg-secondary text-white shadow-xl border-2 border-transparent transition duration-300 hover:bg-primary hover:border-white hover:scale-105 sm:mx-0"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
