import type { ReactElement } from 'react';
import FadeInOnScroll from '../../common/FadeInOnScroll';

const leaders = [
  {
    id: 'leader-michael',
    name: 'Michael Chen',
    position: 'Chief Executive Officer',
    description:
      'Michael leads strategy and corporate growth, guiding global delivery and partnerships to drive measurable business outcomes.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpSONM_grHJ1Nt_zP4h5600qTlLhazCsgVh0S31uU6aVHM2y-kdv1ouhIcGLQ6z2A7P-hnKk4Rif-ys2w0wzEN1ERUXQmdw2zVM9N6t2mQSjncbD4zW20DOHvz_p-eHaMtHxN2fP8vk4MV_YCs1Esh_Psi6xcAnG5jegPXbU-qh1eyC9N_reEsRRrJInYM51qgvxGli690YUEiAW0cdcP6083B0NPJvI37EvEMYCWj1ZsOYPK0C5SiY-m_I_UIx9rTIr1OSHXUNnjp',
    imageAlt: 'Michael Chen - CEO',
  },
  {
    id: 'leader-sarah',
    name: 'Sarah Johnson',
    position: 'Chief Technology Officer',
    description:
      'Sarah directs our technology roadmap, ensuring platform reliability, security, and engineering excellence across programs.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQrG4FH_L5IJRWs47iNwFyaI7k6FH8k37gHAhu9Ob9By7U_-XzgP83qpLrQCwChbc1mB1c5FObVMRxbLXrSzdSUtgB3R4yNogpmbILQ2uQY2mk0bq80HxmQlFZ2TjdjcK4ij0qMA2seE1w56bnLLLkpl16r2qj-leZqwUxxg9ERtXEYgB2y4JnbeSaetuuh6Sn0nFMMQoSVBJwnFrgt2dgZa6ApnwoacwpOkfGK8mYxZPFGizeycQjGaPoqAXjqWWqhfCGNQ8C-qy5',
    imageAlt: 'Sarah Johnson - CTO',
  },
  {
    id: 'leader-david',
    name: 'David Okafor',
    position: 'VP of Engineering',
    description:
      'David oversees delivery teams and engineering practices, focusing on scalable architectures and high-performing teams.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOpr2DzKDhAa4ujx2yg8T1KhQaI8mh4gPLS5GroPKixmVEv49nHTFLP9El-4K1OEUT2bltWoYpK4yJDnFeWmjIlRAu2a2Ks6Wj2dz89s8cWqUGDRfZjiIl4HJUWmYOWgESULOZn1cSpBxLer0KWy7jZ0kj5BSsPQzKLSwwqeFiEBdrLIurGR3kTmOIm9d0tftP_TMZFUQkZ7Q0cAke0sW23d55-seW2NJkxfbkOCAAa71m9C_ziDrTeFyQg_9p7uqOAii7Xr6X_jGU',
    imageAlt: 'David Okafor - VP of Engineering',
  },
];

const LeadershipSection = (): ReactElement => {
  return (
    <section id="leadership" className="w-full bg-background flex items-center justify-center py-12 mt-12" aria-labelledby="leadership-heading">
      <div className="w-[90%] max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <FadeInOnScroll>
            <h2 id="leadership-heading" className="text-deep-blue text-2xl md:text-3xl font-bold uppercase tracking-widest">
              Our Leadership
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll delayMs={120}>
            <p className="mt-4 mb-8 max-w-[800px] mx-auto text-center text-lg leading-relaxed text-slate-600">
              Our leadership team combines deep domain expertise with global delivery experience to help organizations transform with confidence.
            </p>
          </FadeInOnScroll>
        </header>

        <div className="flex flex-wrap justify-center gap-6">
          {leaders.map((l) => (
            <article
              key={l.id}
              className="group relative w-[360px] md:w-[380px] bg-white leadership-card rounded-lg shadow-md overflow-hidden h-[600px]"
            >
              <div className="absolute inset-0 h-full w-full bg-gray-100 portrait-container">
                <img alt={l.imageAlt} src={l.imageSrc} className="w-full h-full object-cover" />
              </div>

              {/* Info overlay: absolute, expands on hover to 50% (h-1/2) without pushing image */}
              <div className="absolute left-0 right-0 bottom-0 h-[120px] bg-primary text-white flex flex-col items-center px-4 transition-all duration-300 ease-out overflow-hidden group-hover:h-1/2 group-focus-within:h-1/2">
                <div className="w-full flex flex-col items-center justify-center pt-6 transition-all duration-300">
                  <span className="text-[20px] md:text-[22px] font-bold leading-tight text-center transition-all duration-200 group-hover:text-[22px] md:group-hover:text-[24px]">
                    {l.name}
                  </span>
                  <span className="text-[13px] md:text-[14px] opacity-90 text-center mt-1 transition-all duration-200 group-hover:text-[14px] md:group-hover:text-[15px]">
                    {l.position}
                  </span>
                  <p className="mt-3 text-sm md:text-base text-white/95 max-w-[88%] text-center opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-[200px] group-hover:mt-3 group-hover:text-base md:group-hover:text-lg">
                    {l.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
