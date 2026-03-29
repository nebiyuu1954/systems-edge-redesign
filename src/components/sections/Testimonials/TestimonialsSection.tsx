import { useState } from 'react';
import type { ReactElement } from 'react';
import FadeInOnScroll from '../../common/FadeInOnScroll';

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
};

const TestimonialsSection = (): ReactElement => {
  const testimonials: Testimonial[] = [
    {
      id: 't-anya',
      quote:
        'Systems Edge Solutions revolutionized our data infrastructure. Their profound understanding of complex datasets and secure implementation allowed us to accelerate research, ensuring both compliance and groundbreaking scientific progress.',
      name: 'Dr. Anya Sharma',
      role: 'Chief Data Officer, Innovate Pharma Inc., Basel',
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB6zox2r8LtD2DpubDPnPWFFM6Ou4CkYItt7nK_SjtRc0xj3d5bdwz21VlEFD0n_UKKtmtA90zkpRWlgcwJwbx7o4pY5-t_E0GyBY0XwcbiGFcfpnXDpAmRqZVH-VSG91Z3HAHJgVNe-VovkTy9ZGf-A5-I2b4VjW8RfbUwBkQRNvJvTRKqFFQ5Eh90BiOB1c9XqNNHQqC6kliu4NXJJ05I-2myJNXrzhENdrMGPp97OOj8n1er2-l6l5pzmnH7UOlG9DGhtjcqp9bX',
      imageAlt: 'Professional portrait of Dr. Anya Sharma',
    },
    {
      id: 't-david',
      quote:
        'Our operations were transformed by Systems Edge Solutions. Their strategic insights and seamless integration of new systems significantly boosted our efficiency and delivered substantial cost savings, exceeding all our expectations.',
      name: 'David Miller',
      role: 'Head of Operations, Apex Logistics Group, Chicago',
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB3Mse3HBoHzZ3t-Uy7ayrx4b2rBQrBIDIhUTaP1REh9aX6DNuquRkqqfngETKhwktMQk3ltmxnS8udkMaSu7iF8TRHANUu4-uBZLzsD91KQIdy1efbezwOfgK3EfzhMkLLaWq3uc3IN2hKDhOIShHwp5bAF4GumCVGkT3FLCwZLCbaVTsAiCv0vBOuj4bkAlAP3SDl3WDtsYrDst9tifKZxowqxMFbUAkgXCeNgObarmknCRY5GHj_CAwW4O738sHKgQ0SIisUH3Ej',
      imageAlt: 'Professional Head of Operations portrait',
    },
    {
      id: 't-elena',
      quote:
        'Systems Edge Solutions was pivotal in our latest product launch. Their expertise in scalable cloud architecture allowed us to deploy with unprecedented speed and stability, directly contributing to our market success and user satisfaction.',
      name: 'Elena Petrova',
      role: 'VP of Product Development, Nexus Gaming Studios, Tokyo',
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCumujmexnZGvGFZ1XYS_t1Js_WPH3f6cKzS8nnd4z-jaD5_pvHF2q2M7nVGEXobZtU7oudkY3oljQZ1LkEf5eovqC-hDy_nydAE0zD596wUfnNz4J5MmCXEaYOnyMemhBOYH8Qw3UI6AG6-2fZ4s04Q28NYrEm038JlgeEmEth12ddbHKkDI2PuY7tWf_B685n5A7yw6JBe9CcpoU5ZU6U5_jbwGGW-nFr1C5IW3ixOuff5UD5E4wIyY1Nz4XGxTsx_fhQzeSS3Pdx',
      imageAlt: 'Professional portrait of Elena Petrova',
    },
  ];

  const [current, setCurrent] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const [phase, setPhase] = useState<'idle' | 'exit' | 'enter'>('idle');
  const [dir, setDir] = useState<'next' | 'prev' | null>(null);
  const [enterActive, setEnterActive] = useState<boolean>(false);

  const ANIMATION_DURATION = 300; // ms - matches Tailwind duration-300

  const prev = () => {
    if (animating) return;
    const nextIndex = (current - 1 + testimonials.length) % testimonials.length;
    setAnimating(true);
    setPhase('exit');
    setDir('prev');

    window.setTimeout(() => {
      setCurrent(nextIndex);
      setPhase('enter');
      setEnterActive(false);

      // trigger enter animation on next frame
      requestAnimationFrame(() => requestAnimationFrame(() => setEnterActive(true)));

      window.setTimeout(() => {
        setPhase('idle');
        setDir(null);
        setAnimating(false);
        setEnterActive(false);
      }, ANIMATION_DURATION);
    }, ANIMATION_DURATION);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = (current + 1) % testimonials.length;
    setAnimating(true);
    setPhase('exit');
    setDir('next');

    window.setTimeout(() => {
      setCurrent(nextIndex);
      setPhase('enter');
      setEnterActive(false);

      requestAnimationFrame(() => requestAnimationFrame(() => setEnterActive(true)));

      window.setTimeout(() => {
        setPhase('idle');
        setDir(null);
        setAnimating(false);
        setEnterActive(false);
      }, ANIMATION_DURATION);
    }, ANIMATION_DURATION);
  };

  const t = testimonials[current];

  const textTransitionClass = (): string => {
    const base = 'transition-transform duration-300 ease-out';
    if (phase === 'idle') return `${base} translate-x-0 opacity-100`;
    if (phase === 'exit') {
      // when exiting, move current out opposite to incoming direction
      return dir === 'next' ? `${base} -translate-x-6 opacity-0` : `${base} translate-x-6 opacity-0`;
    }

    // enter: if moving to 'next', incoming should come from left (-translate-x),
    // if moving to 'prev', incoming should come from right (+translate-x)
    if (dir === 'next') {
      return enterActive ? `${base} translate-x-0 opacity-100` : `${base} -translate-x-6 opacity-0`;
    }
    return enterActive ? `${base} translate-x-0 opacity-100` : `${base} translate-x-6 opacity-0`;
  };

  const imageTransitionClass = (): string => {
    const base = 'transition-transform duration-300 ease-out';
    if (phase === 'idle') return `${base} translate-x-0 opacity-100`;
    if (phase === 'exit') {
      return dir === 'next' ? `${base} -translate-x-6 opacity-0` : `${base} translate-x-6 opacity-0`;
    }

    if (dir === 'next') {
      return enterActive ? `${base} translate-x-0 opacity-100` : `${base} -translate-x-6 opacity-0`;
    }
    return enterActive ? `${base} translate-x-0 opacity-100` : `${base} translate-x-6 opacity-0`;
  };

  return (
    <section id="testimonials" className="w-full bg-background dark:bg-backgroundDark flex flex-col items-center justify-center py-12" aria-labelledby="testimonials-heading">
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center lg:px-12">
        <FadeInOnScroll>
          <h1 id="testimonials-heading" className="h2-settings mb-6 text-center text-primary dark:text-white md:text-5xl">
            Our Testimonials
          </h1>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <p className="h3-settings mb-20 max-w-[800px] mx-auto text-center text-slate-600 dark:text-slate-400">
            Real-world outcomes from clients who rely on our expertise to deliver secure, scalable systems and measurable business impact.
          </p>
        </FadeInOnScroll>
      </div>

      <div className="relative w-[90%] mx-auto flex items-center flex-nowrap">

        {/* Controls positioned under the testimonial block */}
        <FadeInOnScroll delayMs={120} className="absolute left-1/2 bottom-[-20px] sm:bottom-[-24px] md:bottom-[-32px] z-30 transform -translate-x-1/2">
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className={
                `h-12 w-12 rounded-full bg-white dark:bg-backgroundDark text-primary dark:text-white border border-primary flex items-center justify-center shadow-sm transition-colors transform duration-150 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/40 ${animating ? 'opacity-50 cursor-not-allowed' : ''}`
              }
              disabled={animating}
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className={
                `h-12 w-12 rounded-full bg-white dark:bg-backgroundDark text-primary dark:text-white border border-primary flex items-center justify-center shadow-sm transition-colors transform duration-150 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/40 ${animating ? 'opacity-50 cursor-not-allowed' : ''}`
              }
              disabled={animating}
            >
              &gt;
            </button>
          </div>
        </FadeInOnScroll>

        <div className="bg-primary w-full h-auto sm:h-[320px] md:h-[400px] flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-6 md:px-20 relative z-10 rounded-lg">
          <FadeInOnScroll>
            {/* Mobile/tablet inline image: portrait above text on small screens */}
            <FadeInOnScroll delayMs={150} className={"w-full block sm:hidden mt-4 mb-4 " + imageTransitionClass()}>
              <img
                alt={t.imageAlt}
                className="w-full h-[320px] sm:h-[320px] md:h-[400px] object-cover object-center rounded-sm"
                src={t.imageSrc}
              />
            </FadeInOnScroll>

            <div className={"w-full sm:max-w-[60%] md:max-w-[50%] text-white " + textTransitionClass()}>
              <blockquote className="h3-settings mb-4 sm:mb-6 italic text-white">{t.quote}</blockquote>

              <div className="flex items-center">
                <div className="flex flex-col mb-8 sm:mb-0">
                  <span className="card-1-title-settings mb-1 text-white">{t.name}</span>
                  <span className="card-1-description-settings text-white/80 uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>

        <div className="hidden sm:block absolute right-3 sm:right-6 md:right-16 z-20 h-[160px] w-[120px] sm:h-[260px] sm:w-[180px] md:h-[600px] md:w-[400px] shadow-2xl overflow-hidden rounded-sm">
          <FadeInOnScroll delayMs={200} className={"h-full w-full " + imageTransitionClass()}>
            <img alt={t.imageAlt} className="w-full h-full object-cover grayscale-[20%]" src={t.imageSrc} />
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
