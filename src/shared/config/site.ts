export const siteConfig = {
  name: 'ÉconXStat',
  legalName: 'ÉconXStat',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://econxstat.ca').replace(/\/$/, ''),
  email: 'info@econxstat.ca',
  /** Année du premier projet référencé sur le site. */
  firstProjectYear: 2019,
} as const;
