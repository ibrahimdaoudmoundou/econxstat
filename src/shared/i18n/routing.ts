import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  // Le français reste à la racine (/services, /a-propos…) comme sur l'ancien site.
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/services': '/services',
    '/about': { fr: '/a-propos', en: '/about' },
    '/projects': { fr: '/projets', en: '/projects' },
    '/contact': '/contact',
    '/privacy': { fr: '/confidentialite', en: '/privacy' },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;

/** Valeur traduite dans chaque langue du site. */
export type Localized<T = string> = Record<Locale, T>;
