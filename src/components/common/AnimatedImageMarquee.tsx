import type { ReactElement } from 'react';

export interface MarqueeImage {
  alt: string;
  src?: string;
  icon?: ReactElement;
}

export interface MarqueeRow {
  id: string;
  direction: 'left' | 'right';
  speedSeconds: number;
  images: MarqueeImage[];
}

export interface AnimatedImageMarqueeProps {
  rows: MarqueeRow[];
  className?: string;
}

export default function AnimatedImageMarquee({ rows, className = '' }: AnimatedImageMarqueeProps): ReactElement {
  return (
    <div className={className}>
      <style>{`
        @keyframes systems-edge-marquee-left {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes systems-edge-marquee-right {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>

      <div className="space-y-4">
        {rows.map((row) => {
          const animationName = row.direction === 'left' ? 'systems-edge-marquee-left' : 'systems-edge-marquee-right';

          return (
            <div key={row.id} className="relative overflow-hidden rounded-[2rem]">
              <div className="overflow-hidden py-1">
                <div
                  className="flex w-max gap-4 hover:[animation-play-state:paused]"
                  style={{ animation: `${animationName} ${row.speedSeconds}s linear infinite` }}
                >
                  {[...row.images, ...row.images].map((image, index) => (
                    <article
                      key={`${row.id}-${image.alt}-${index}`}
                      className="group relative h-[6rem] w-[7rem] overflow-hidden rounded-[1.25rem] bg-white/80 p-3 shadow-xl shadow-black/10 ring-1 ring-black/5 transition-transform duration-500 hover:scale-[1.02] dark:bg-slate-900/80 dark:ring-white/10 sm:h-[7rem] sm:w-[8rem] sm:p-4 md:h-[8rem] md:w-[9rem] lg:h-[9rem] lg:w-[10rem]"
                    >
                      {image.icon ? (
                        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[0.9rem] bg-slate-50 p-2 dark:bg-slate-800">
                          {image.icon}
                        </div>
                      ) : (
                        <img
                          alt={image.alt}
                          className="h-full w-full rounded-[0.9rem] object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          src={image.src}
                        />
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
