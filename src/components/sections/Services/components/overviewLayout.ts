export interface ServiceOverviewLayoutConfig {
  section: string;
  container: string;
  grid: string;
  textColumn: string;
  badge: string;
  title: string;
  titleAccent: string;
  description: string;
  list: string;
  listItem: string;
  listBullet: string;
  listText: string;
  imageColumn: string;
  imageGlow: string;
  image: string;
}

export const overviewSlotIds = {
  badge: 'overview-badge',
  title: 'overview-title',
  description: 'overview-description',
  list: 'overview-list',
  image: 'overview-image',
} as const;

export const erpOverviewLayoutConfig: ServiceOverviewLayoutConfig = {
  section: 'bg-background dark:bg-backgroundDark px-6 py-20 lg:px-12',
  container: 'mx-auto max-w-7xl',
  grid: 'grid grid-cols-1 items-center gap-12 lg:grid-cols-12',
  textColumn: 'lg:col-span-7',
  badge: 'mb-6 inline-block rounded-full border border-secondary px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary dark:text-secondary',
  title: 'mb-8 text-4xl font-extrabold leading-tight text-primary lg:text-6xl',
  titleAccent: 'text-secondary',
  description: 'mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300 lg:text-xl',
  list: 'mb-10 space-y-4',
  listItem: 'flex items-start',
  listBullet: 'mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-white',
  listText: 'font-medium text-slate-700 dark:text-white',
  imageColumn: 'relative hidden md:block lg:col-span-5',
  imageGlow: 'absolute -inset-4 rounded-3xl bg-secondary/10 blur-2xl',
  image: 'relative h-[500px] w-full rounded-2xl border-4 border-white dark:border-slate-700 object-cover shadow-2xl',
};
