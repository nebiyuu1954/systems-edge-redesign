import type { ReactElement } from 'react';

export interface SatelliteOrbitImage {
  id: string;
  imageSrc: string;
  imageAlt: string;
}

export interface SatelliteOrbitConnectorLine {
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;
}

export type OrbitImageSizeClassById = Record<string, string>;
export type OrbitImagePositionClassById = Record<string, string>;
export type OrbitConnectorLinePointsById = Readonly<Record<string, SatelliteOrbitConnectorLine>>;

export interface SatelliteStaffingSectionProps {
  sectionId?: string;
  heading?: string;
  highlightText?: string;
  sectionTopSpacingClassName?: string;
  sectionBottomSpacingClassName?: string;
  contentMinHeightClassName?: string;
  differentiators?: string[];
  orbitImages?: SatelliteOrbitImage[];
  centerIconSrc?: string;
  centerIconAlt?: string;
  centerIconSizeClassName?: string;
  orbitImageSizeClassById?: OrbitImageSizeClassById;
  orbitImageMobileSizeClassById?: OrbitImageSizeClassById;
  orbitImagePositionClassById?: OrbitImagePositionClassById;
  orbitImageMobilePositionClassById?: OrbitImagePositionClassById;
  orbitConnectorLinePointsMobileById?: OrbitConnectorLinePointsById;
  className?: string;
}

const DEFAULT_DIFFERENTIATORS: string[] = [
  'Strategic partnership with NTT DATA – Enterprise-grade ERP implementation with global best practices',
  'Quality‑first delivery: rigorous testing, continuous improvement, and measurable excellence at every stage.',
  'Years of hands‑on experience in ERP, cloud, and enterprise software',
  'Deep knowledge of global delivery models and local regulatory requirements',
  '24/7 managed services and real‑time support',
  'Long‑term partnerships focused on measurable business outcomes',
];

const DEFAULT_ORBIT_IMAGES: SatelliteOrbitImage[] = [
  {
    id: 'orbit-global-connectivity',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC60FGq1INhcVNEHjYCWkR4BNE4Qzs3dBtp0_41_wsoshxjjaMb5T8-jEXzHB2Khf0lUKIaLu2_KOCUmWCZMO1EFMDxkd1CGw1IWjMI3waPTAOQMhkH5UkcRcizfkpUlhOZJrFzcPQ_In_K2p_XQ5tLTImhSASr9JOJJDa1XehpokSqLEC-IQjRm0jJAMPV8Cu2Qhrd-uBqtRCqIZkUp5-SHqtfHwoNI6xD8Qh8WM3zh6Xo_dEM5GVlE2SKG-6KHsaZsNDyjJvbXvew',
    imageAlt: '3D abstract rendering of a glowing wireframe globe representing global connectivity',
  },
  {
    id: 'orbit-connectivity-nodes',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqGFtS2MTQQAKDL1hNZ-ZEdr85QG89D9pYbNq0lrYyZoj_qFpt2YpNKMibwLlm1jFomJwyHA3qfqf15gTifxEhhjHzLy-1uuEkFGtlxRYocISXBrX9gf_QwRjUPLzoxbpwVbNN4s1GUqxUbc7KcnJaASg3NaYgWepABx6p5Jm1Vw4Kmf-hyrphxvUDb01Dwsiqv1ry6UgwFl4DgxodAQrsZzwkk9ScjzOC6YBYbwh73otkhG-TNElUYd_UdM8xiTZapOFTv65Czve7',
    imageAlt: '3D rendering of sophisticated blue and gold connectivity nodes and data lines',
  },
  {
    id: 'orbit-signal-pulses',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKeLITBsJ-emGISI5macHa7-fvSzyhrutnox16AZ37LwFDLnoBH3VAjieN_qgkbbgp1z5FmSATk5twG656gyidJoa9bCqThOvbrFZZaoAdeZLhVHG49xDLPz_jorCDOG2pQdUM3aCQflcVzVAbVn7CN91iBh0KnSljjb8x2dP7ZDEfHwy_2ewsUcQkM7FxxketMXxwL4uXvBhAsgIebBu-SMZVQH8mH5RXusFZJeKFU5YcLPWS7N1Qr2YjaMk7E4HK-z_eljrwecpe',
    imageAlt: 'Abstract 3D digital signal waves and communication pulses',
  },
  {
    id: 'orbit-operations-gears',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBquephsLuOlmiIpR4oOT4DlSv4Av0fCRYNVY9Z3p_MD72WRravemcM8jk-NIs2aHoYq4OobpQTyjxUUdqTIXe1EXT8uPNxPqaABCZ5lepUSF5a0wezNaJhEQlK_OFOczh9cKydyqUm0WiW16VOK1cgYMSLzNCtFizXzivsogstPgORmvDG-oD1iK8eiUm6nRKJpWmQSt3mSM_6eR6tqPGuoqiJg4_L0USyiBwrXRdoARGzkvgo4g4pfocFohq9QO4ZCgzw_6O_Ohpv',
    imageAlt: 'Macro view of stylized golden gears representing complex team structures and operational infrastructure',
  },
  {
    id: 'orbit-data-blocks',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3PCbfJdKBE-z1TXF1BzM9FMxyLyUEx9RmdxXkFxc1LBof-nke5BeEXNqN_baafZzmK0xid5GKJoBCwlcC3kzmmgeDpYI-bnbYKufLzphZ79mmJxqIln3cdlxcsLexPj34JvAsMr5Bc8Yb_7G0SZeKHPL_RFAhiKRG69G8KZHwkbHUbGuNto1ahnwzJNvPhfzXqqhK0MPxPcTgG5Sbh4LC3j13vz3G9jESgdQKUaoa_CdviSGrB04SyOiW2H_FN5eVTfPcw-Z1ix2',
    imageAlt: '3D visualization of transparent data blocks and connectivity nodes',
  },
  {
    id: 'orbit-poessa',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz4nPPnx9x05AAs83257oTy0jjaA_kKi3QOBvrFj8QgMDgfqg3tmeL5iwbP634cNQp6nk9VAvFWFs1VUfXkRQOIXKeheBlagI4NYYIQYn_CbUpi9-Aojv9--60uLAHIrFoYcrVrMRApmSrIWubiwRIpLlq-MFK9h-dMngafUe3qJQ2xf3UsKVUW6Ngj4RZ0rfLUe419dl1GHbN3h87x1-pbmQZQjIh-bNvoIgkVmApY1Ib_kyAIlywXsyfO7t6NvHWZ9Jy8_orIDt4',
    imageAlt: 'POESSA circular logo representing a trusted partner',
  },
  {
    id: 'orbit-pssa',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5JSDM-TW1ZLGEu7ayLYXUI61F0uuW4LAzEsKLYqWB8Z2Jnu8q-KzWAqppYP87j1w5Re3CCyIdy7pVy3v2unEHsornvUiNltqQCkaW3dxt8U1aH4FZH_K8ZL_9a5ajaDlF_NtQWYvY59Q4kmpEMnh5fCjZRwUGEfPv-aKYUMT0HvAzlkPDge0MMUt4O5Gl4ZvlfvCOe6jdxHYFUfnfMrsBCTvLawEfWYh_LHxWzD5osAY4ZatjnlbwGc2HDlER9qiFeHDjj9lYRjuy',
    imageAlt: 'PSSA circular logo representing a trusted partner',
  },
];

const DEFAULT_ORBIT_IMAGE_SIZE_CLASS_BY_ID: OrbitImageSizeClassById = {
  'orbit-global-connectivity': 'h-36 w-36',
  'orbit-connectivity-nodes': 'h-32 w-32',
  'orbit-signal-pulses': 'h-40 w-40',
  'orbit-operations-gears': 'h-48 w-48',
  'orbit-data-blocks': 'h-24 w-24',
  'orbit-poessa': 'h-28 w-28',
  'orbit-pssa': 'h-32 w-32',
};

const DEFAULT_ORBIT_IMAGE_MOBILE_SIZE_CLASS_BY_ID: OrbitImageSizeClassById = {
  'orbit-global-connectivity': 'max-[1049px]:h-24 max-[1049px]:w-24',
  'orbit-connectivity-nodes': 'max-[1049px]:h-20 max-[1049px]:w-20',
  'orbit-signal-pulses': 'max-[1049px]:h-24 max-[1049px]:w-24',
  'orbit-operations-gears': 'max-[1049px]:h-28 max-[1049px]:w-28',
  'orbit-data-blocks': 'max-[1049px]:h-16 max-[1049px]:w-16',
  'orbit-poessa': 'max-[1049px]:h-20 max-[1049px]:w-20',
  'orbit-pssa': 'max-[1049px]:h-20 max-[1049px]:w-20',
};

const DEFAULT_ORBIT_IMAGE_MOBILE_POSITION_CLASS_BY_ID: OrbitImagePositionClassById = {
  'orbit-global-connectivity': 'max-[1049px]:top-[8%] max-[1049px]:left-[5%]',
  'orbit-connectivity-nodes': 'max-[1049px]:top-[8%] max-[1049px]:right-[5%]',
  'orbit-signal-pulses': 'max-[1049px]:top-[48%] max-[1049px]:right-[-2%] max-[1049px]:-translate-y-1/2',
  'orbit-operations-gears': 'max-[1049px]:bottom-[-6%] max-[1049px]:left-[5%]',
  'orbit-data-blocks': 'max-[1049px]:bottom-[17%] max-[1049px]:right-[2%]',
  'orbit-poessa': 'max-[1049px]:top-[50%] max-[1049px]:left-[7%]',
  'orbit-pssa': 'max-[1049px]:bottom-[1%] max-[1049px]:right-[26%]',
};

const DEFAULT_ORBIT_IMAGE_POSITION_CLASS_BY_ID: OrbitImagePositionClassById = {
  'orbit-global-connectivity': 'top-[-1%] left-[10%]',
  'orbit-connectivity-nodes': 'top-[10%] right-[10%]',
  'orbit-signal-pulses': 'top-1/2 right-[-15%] -translate-y-1/2',
  'orbit-operations-gears': 'bottom-[-8%] left-[2%]',
  'orbit-data-blocks': 'bottom-[10%] right-[-10%]',
  'orbit-poessa': 'top-[38%] left-[-1%]',
  'orbit-pssa': 'bottom-[-10%] right-[22%]',
};

const DEFAULT_ORBIT_CONNECTOR_LINE_POINTS_BY_ID: OrbitConnectorLinePointsById = {
  'orbit-global-connectivity': { x1: 50, y1: 50, x2: 28, y2: 20 },
  'orbit-connectivity-nodes': { x1: 50, y1: 50, x2: 74, y2: 26 },
  'orbit-signal-pulses': { x1: 50, y1: 50, x2: 94, y2: 50 },
  'orbit-operations-gears': { x1: 50, y1: 50, x2: 26, y2: 84 },
  'orbit-data-blocks': { x1: 50, y1: 50, x2: 94, y2: 78 },
  'orbit-poessa': { x1: 50, y1: 50, x2: 10, y2: 50 },
  'orbit-pssa': { x1: 50, y1: 50, x2: 62, y2: 94 },
};

const DEFAULT_ORBIT_CONNECTOR_LINE_POINTS_MOBILE_BY_ID: OrbitConnectorLinePointsById = {
  'orbit-global-connectivity': { x1: 50, y1: 50, x2: 25, y2: 25 },
  'orbit-connectivity-nodes': { x1: 50, y1: 50, x2: 85, y2: 20 },
  'orbit-signal-pulses': { x1: 50, y1: 50, x2: 110, y2: 50 },
  'orbit-operations-gears': { x1: 50, y1: 50, x2: 10, y2: 110 },
  'orbit-data-blocks': { x1: 50, y1: 50, x2: 89, y2: 75 },
  'orbit-poessa': { x1: 50, y1: 50, x2: 25, y2: 57 },
  'orbit-pssa': { x1: 50, y1: 50, x2: 64, y2: 88 },
};

const DEFAULT_ORBIT_CONNECTOR_LINE_POINTS: SatelliteOrbitConnectorLine = {
  x1: 50,
  y1: 50,
  x2: 50,
  y2: 50,
};

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
  differentiators = DEFAULT_DIFFERENTIATORS,
  orbitImages = DEFAULT_ORBIT_IMAGES,
  centerIconSrc = DEFAULT_CENTER_ICON_SRC,
  centerIconAlt = DEFAULT_CENTER_ICON_ALT,
  centerIconSizeClassName = DEFAULT_CENTER_ICON_SIZE_CLASS_NAME,
  orbitImageSizeClassById = DEFAULT_ORBIT_IMAGE_SIZE_CLASS_BY_ID,
  orbitImageMobileSizeClassById = DEFAULT_ORBIT_IMAGE_MOBILE_SIZE_CLASS_BY_ID,
  orbitImagePositionClassById = DEFAULT_ORBIT_IMAGE_POSITION_CLASS_BY_ID,
  orbitImageMobilePositionClassById = DEFAULT_ORBIT_IMAGE_MOBILE_POSITION_CLASS_BY_ID,
  orbitConnectorLinePointsMobileById = DEFAULT_ORBIT_CONNECTOR_LINE_POINTS_MOBILE_BY_ID,
  className,
}: SatelliteStaffingSectionProps): ReactElement => {
  const headingId = `${sectionId}-heading`;
  const sectionClassName = `w-full bg-backgroundOne px-6 lg:px-12 dark:bg-backgroundDark ${sectionTopSpacingClassName} ${sectionBottomSpacingClassName} ${className ?? ''}`.trim();

  return (
    <section id={sectionId} className={sectionClassName} aria-labelledby={headingId} data-highlight-text={highlightText}>
      <div className={`mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24 ${contentMinHeightClassName}`}>
        <div className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center pb-24 lg:mx-0 lg:pb-0">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <svg className="hidden h-full w-full text-primary/25 dark:text-primary/20 max-[1049px]:block" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
              {orbitImages.map((orbitImage) => {
                const connectorLine = orbitConnectorLinePointsMobileById[orbitImage.id] ?? DEFAULT_ORBIT_CONNECTOR_LINE_POINTS;

                return (
                  <line
                    key={`${orbitImage.id}-connector-line`}
                    x1={connectorLine.x1}
                    y1={connectorLine.y1}
                    x2={connectorLine.x2}
                    y2={connectorLine.y2}
                    stroke="currentColor"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>
            <svg className="block h-full w-full text-primary/25 dark:text-primary/20 max-[1049px]:hidden" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
              {orbitImages.map((orbitImage) => {
                const connectorLine = DEFAULT_ORBIT_CONNECTOR_LINE_POINTS_BY_ID[orbitImage.id] ?? DEFAULT_ORBIT_CONNECTOR_LINE_POINTS;

                return (
                  <line
                    key={`${orbitImage.id}-connector-line-desktop`}
                    x1={connectorLine.x1}
                    y1={connectorLine.y1}
                    x2={connectorLine.x2}
                    y2={connectorLine.y2}
                    stroke="currentColor"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                  />
                );
              })}
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
            const imageMobilePositionClassName = orbitImageMobilePositionClassById[orbitImage.id] ?? 'max-[1049px]:top-[10%] max-[1049px]:left-[10%]';
            const imageSizeClassName = orbitImageSizeClassById[orbitImage.id] ?? 'h-24 w-24';
            const imageMobileSizeClassName = orbitImageMobileSizeClassById[orbitImage.id] ?? 'max-[1049px]:h-16 max-[1049px]:w-16';

            return (
              <div
                key={orbitImage.id}
                className={`${ORBIT_IMAGE_BASE_CLASS} ${imagePositionClassName} ${imageMobilePositionClassName} ${imageSizeClassName} ${imageMobileSizeClassName}`}
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

          {/* Highlight quote intentionally disabled per request.
          <div className={`absolute z-30 rounded-xl border border-primary/40 bg-primary dark:bg-secondary text-center shadow-[0px_12px_32px_rgba(40,41,115,0.18)] ${highlightTextContainerSizeClassName} ${highlightTextXPositionClassName} ${highlightTextYPositionClassName}`}>
            <p className={`font-semibold leading-relaxed tracking-tight text-on-primary ${highlightTextFontSizeClassName}`}>
              {highlightText}
            </p>
          </div>
          */}
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