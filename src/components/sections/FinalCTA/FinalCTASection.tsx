import type { ReactElement } from 'react';
import FadeInOnScroll from '../../common/FadeInOnScroll';

const FinalCTASection = (): ReactElement => {
  return (
    <section className="relative w-full bg-primary overflow-hidden" id="final-cta" aria-labelledby="final-cta-title">
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><rect width=\'1\' height=\'40\' fill=\'%23ffffff0c\' /><rect width=\'40\' height=\'1\' fill=\'%23ffffff0c\' /></svg>')] bg-repeat" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/100 mix-blend-overlay" />

      <div className="relative z-10 mx-auto px-6 py-24 md:py-32 lg:py-36 flex flex-col items-center justify-center text-center max-w-7xl">
        <FadeInOnScroll>
          <h2 id="final-cta-title" className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Let's Build Systems That Scale
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-[640px]">
            Get in touch with our team to discuss your enterprise needs.
          </p>
        </FadeInOnScroll>

        <div>
          <a
            href="#contact"
            role="button"
            className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 md:py-5 md:px-10 rounded-lg transition-colors duration-200 shadow-lg text-lg"
          >
            Request Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
