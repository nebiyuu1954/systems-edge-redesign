import type { ReactElement } from 'react';

export interface SatelliteOrbitImage {
  id: string;
  imageSrc: string;
  imageAlt: string;
}

export type OrbitImageSizeClassById = Record<string, string>;
export type OrbitImagePositionClassById = Record<string, string>;

export interface SatelliteStaffingSectionProps {
  sectionId?: string;
  heading?: string;
  highlightText?: string;
  sectionTopSpacingClassName?: string;
  sectionBottomSpacingClassName?: string;
  contentMinHeightClassName?: string;
  highlightTextContainerSizeClassName?: string;
  highlightTextFontSizeClassName?: string;
  differentiators?: string[];
  orbitImages?: SatelliteOrbitImage[];
  centerIconSrc?: string;
  centerIconAlt?: string;
  centerIconSizeClassName?: string;
  orbitImageSizeClassById?: OrbitImageSizeClassById;
  orbitImagePositionClassById?: OrbitImagePositionClassById;
  highlightTextXPositionClassName?: string;
  highlightTextYPositionClassName?: string;
  className?: string;
}

const DEFAULT_DIFFERENTIATORS: string[] = [
  'Years of hands‑on experience in ERP, cloud, and enterprise software',
  'Deep knowledge of global delivery models and local regulatory requirements',
  '24/7 managed services and real‑time support',
  'Transparent engagement from discovery to post‑go‑live',
  'Long‑term partnerships focused on measurable business outcomes',
];

const DEFAULT_ORBIT_IMAGES: SatelliteOrbitImage[] = [
  {
    id: 'orbit-global-connectivity',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTHv9QLOAAXjWYz2zmDGwK6cssNMa0dPnssHDERm8a8nfhTy3PFJXcjhd7Q9Fy1d2IP6fYXOvSAXibSyfOY0aZvdwcDTQyaU5T3UjrdmyH9XOEIjM2MY30DLE9zavMHnum1FwbGv8BXBGSJ9EwgYULGEbjFoh9wS2RegchU_fAkJeARgBvLQadr1JJzkxxBBg29vuHu-YEdaYsnpBsz0x5tlXcm_k_3ov8o_Y_cweTC6vzgCqYb0WdHFuu-bQLGNOuC-E1MzcctcI8',
    imageAlt: '3D abstract rendering of a glowing wireframe globe representing global connectivity',
  },
  {
    id: 'orbit-connectivity-nodes',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiQUllcZjL-kuZ63EQ4eYAfrfNIqHTav9ZXo50ipF5RusJHvZwKgCF_x18XJ1H-iPNS-Zdpxtckg35-yLNELJv4CPd93ZF62WHc1HsM7twBKHnez4QLfhP7xFqoajov6CL0-4virXbC0GMSsL36UAIUd0jHAID0wwVht5MfjHViPQ6jj4I79-nYy1mCGjEYGHKmCx7JQDcdNY9LBs1sPxB30q_nHC5FVuIuYWWj42jPMO28NFE64477TegGxagKpe84TVschYfIgAv',
    imageAlt: '3D rendering of sophisticated blue and gold connectivity nodes and data lines',
  },
  {
    id: 'orbit-signal-pulses',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpM4peB20c5O51Tqr9tUiccggdfic-XM7_CvhQU56ndEuvvD08EPgtlXwjt7m3oFtx5KOn5Ryx_FzkRHR4F7amEdhH5RE4aQX5uG38iuvS9a3BIjr0EGMTGtMEXvaJOyvSSwrEFWNPEpUyexBB_wBXqCYj1muBzyr-fueWLH3ZzFVQ271EyAt7406_KN_8-ddA8VKuIL-oXXV4Fsy3HhLnnM55PO6wSD90oth7x6tn_QP_dQfNEYIA4N9SokF1rMdCG82hJ0MW_IlP',
    imageAlt: 'Abstract 3D digital signal waves and communication pulses',
  },
  {
    id: 'orbit-operations-gears',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCrGotj6d56saZp1WahhPGGPULGHg6F0G_g98FBt0eMci7mFaGWohZVhqTYUN8LAfMZsj6_yb85onPJZzJEmw9eem1L-ikA-3B3j9QNEREjXcoZ-I1Wo7Ou57j9P3VwvLw3jiyH77IZMJ3v9pfQftfVGJeUoJpm_MI_dFXqrwrDgS7yWqRW_edR9se09RKNoL8Dah0SVWqRepPsSM_Jq8ApKl3ijckepustDThxK06bBhGtOnJSs9r5LogX78gLua11RbUu2hA3NZut',
    imageAlt: 'Macro view of stylized golden gears representing complex team structures and operational infrastructure',
  },
  {
    id: 'orbit-data-blocks',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3PCbfJdKBE-z1TXF1BzM9FMxyLyUEx9RmdxXkFxc1LBof-nke5BeEXNqN_baafZzmK0xid5GKJoBCwlcC3kzmmgeDpYI-bnbYKufLzphZ79mmJxqIln3cdlxcsLexPj34JvAsMr5Bc8Yb_7G0SZeKHPL_RFAhiKRG69G8KZHwkbHUbGuNto1ahnwzJNvPhfzXqqhK0MPxPcTgG5Sbh4LC3j13vz3G9jESgdQKUaoa_CdviSGrB04SyOiW2H_FN5eVTfPcw-Z1ix2',
    imageAlt: '3D visualization of transparent data blocks and connectivity nodes',
  },
];

const DEFAULT_ORBIT_IMAGE_SIZE_CLASS_BY_ID: OrbitImageSizeClassById = {
  'orbit-global-connectivity': 'h-36 w-36',
  'orbit-connectivity-nodes': 'h-32 w-32',
  'orbit-signal-pulses': 'h-40 w-40',
  'orbit-operations-gears': 'h-48 w-48',
  'orbit-data-blocks': 'h-24 w-24',
};

const DEFAULT_ORBIT_IMAGE_POSITION_CLASS_BY_ID: OrbitImagePositionClassById = {
  'orbit-global-connectivity': 'top-[10%] left-[10%]',
  'orbit-connectivity-nodes': 'top-[10%] right-[10%]',
  'orbit-signal-pulses': 'top-1/2 right-[2%] -translate-y-1/2',
  'orbit-operations-gears': 'bottom-[15%] left-[2%]',
  'orbit-data-blocks': 'bottom-[15%] right-[10%]',
};

const DEFAULT_HIGHLIGHT_TEXT_CONTAINER_SIZE_CLASS_NAME = 'w-[112%] max-w-[420px] p-6 lg:max-w-[420px] lg:p-8';
const DEFAULT_HIGHLIGHT_TEXT_FONT_SIZE_CLASS_NAME = 'text-base lg:text-lg';
const DEFAULT_HIGHLIGHT_TEXT_X_POSITION_CLASS_NAME = 'left-1/2 -translate-x-1/2';
const DEFAULT_HIGHLIGHT_TEXT_Y_POSITION_CLASS_NAME = '-bottom-10 lg:-bottom-16';
const DEFAULT_SECTION_TOP_SPACING_CLASS_NAME = 'pt-2 sm:pt-3 lg:pt-4';
const DEFAULT_SECTION_BOTTOM_SPACING_CLASS_NAME = 'pb-16 md:pb-20 lg:pb-24';
const DEFAULT_CONTENT_MIN_HEIGHT_CLASS_NAME = 'min-h-[500px] sm:min-h-[560px] xl:min-h-[620px]';
const DEFAULT_CENTER_ICON_SRC = '/favicon.jpg';
const DEFAULT_CENTER_ICON_ALT = 'Systems Edge browser tab icon';
const DEFAULT_CENTER_ICON_SIZE_CLASS_NAME = 'h-14 w-14';

const ORBIT_IMAGE_BASE_CLASS =
  'absolute z-20 overflow-hidden rounded-full border-4 border-surface-container-lowest bg-primary/5 shadow-[0px_12px_32px_rgba(40,41,115,0.06)] dark:border-slate-900';

const SatelliteStaffingSection = ({
  sectionId = 'satellite-staffing',
  heading = 'Who We Are',
  highlightText = "We've created a satellite staffing model that is an improvement upon the previous generation's outsourcing model.",
  sectionTopSpacingClassName = DEFAULT_SECTION_TOP_SPACING_CLASS_NAME,
  sectionBottomSpacingClassName = DEFAULT_SECTION_BOTTOM_SPACING_CLASS_NAME,
  contentMinHeightClassName = DEFAULT_CONTENT_MIN_HEIGHT_CLASS_NAME,
  highlightTextContainerSizeClassName = DEFAULT_HIGHLIGHT_TEXT_CONTAINER_SIZE_CLASS_NAME,
  highlightTextFontSizeClassName = DEFAULT_HIGHLIGHT_TEXT_FONT_SIZE_CLASS_NAME,
  differentiators = DEFAULT_DIFFERENTIATORS,
  orbitImages = DEFAULT_ORBIT_IMAGES,
  centerIconSrc = DEFAULT_CENTER_ICON_SRC,
  centerIconAlt = DEFAULT_CENTER_ICON_ALT,
  centerIconSizeClassName = DEFAULT_CENTER_ICON_SIZE_CLASS_NAME,
  orbitImageSizeClassById = DEFAULT_ORBIT_IMAGE_SIZE_CLASS_BY_ID,
  orbitImagePositionClassById = DEFAULT_ORBIT_IMAGE_POSITION_CLASS_BY_ID,
  highlightTextXPositionClassName = DEFAULT_HIGHLIGHT_TEXT_X_POSITION_CLASS_NAME,
  highlightTextYPositionClassName = DEFAULT_HIGHLIGHT_TEXT_Y_POSITION_CLASS_NAME,
  className,
}: SatelliteStaffingSectionProps): ReactElement => {
  const headingId = `${sectionId}-heading`;
  const sectionClassName = `w-full bg-backgroundOne px-6 lg:px-12 dark:bg-backgroundDark ${sectionTopSpacingClassName} ${sectionBottomSpacingClassName} ${className ?? ''}`.trim();

  return (
    <section id={sectionId} className={sectionClassName} aria-labelledby={headingId}>
      <div className={`mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24 ${contentMinHeightClassName}`}>
        <div className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center pb-24 lg:mx-0 lg:pb-0">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <svg className="h-full w-full text-outline-variant opacity-30" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
              <line x1="50" y1="50" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="90" y2="60" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="20" y2="80" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-surface-container-lowest ring-4 ring-surface-container-low shadow-[0px_12px_32px_rgba(40,41,115,0.06)] dark:bg-white dark:ring-slate-800">
              <img
                src={centerIconSrc}
                alt={centerIconAlt}
                className={`${centerIconSizeClassName} object-contain`}
                loading="eager"
              />
            </div>
          </div>

          {orbitImages.map((orbitImage) => {
            const imagePositionClassName = orbitImagePositionClassById[orbitImage.id] ?? 'top-[10%] left-[10%]';
            const imageSizeClassName = orbitImageSizeClassById[orbitImage.id] ?? 'h-24 w-24';

            return (
              <div
                key={orbitImage.id}
                className={`${ORBIT_IMAGE_BASE_CLASS} ${imagePositionClassName} ${imageSizeClassName}`}
              >
                <img
                  src={orbitImage.imageSrc}
                  alt={orbitImage.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            );
          })}

          <div className={`absolute z-30 rounded-xl border border-primary/40 bg-primary dark:bg-secondary text-center shadow-[0px_12px_32px_rgba(40,41,115,0.18)] ${highlightTextContainerSizeClassName} ${highlightTextXPositionClassName} ${highlightTextYPositionClassName}`}>
            <p className={`font-semibold leading-relaxed tracking-tight text-on-primary ${highlightTextFontSizeClassName}`}>
              {highlightText}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-8 pt-10 lg:pt-0">
          <h2 id={headingId} className="h2-settings text-on-surface dark:text-white">
            {heading}
          </h2>

          <ul className="space-y-6">
            {differentiators.map((item, index) => (
              <li key={`${item}-${index}`} className="group flex items-start">
                <div className="mt-1 shrink-0">
                  <span className="material-symbols-outlined text-2xl text-primary dark:text-secondary transition-transform duration-200 group-hover:scale-110" aria-hidden>
                    check_circle
                  </span>
                </div>
                <p className="ml-4 text-lg leading-relaxed text-on-surface-variant dark:text-slate-300">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SatelliteStaffingSection;