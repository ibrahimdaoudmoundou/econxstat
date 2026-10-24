import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '../config';
import { getPathname } from './navigation';
import { routing, type AppPathname, type Locale } from './routing';

const hreflang: Record<Locale, string> = { fr: 'fr-CA', en: 'en-CA' };

/** URL absolue d'une page dans une langue donnée. */
export const absoluteUrl = (href: AppPathname, locale: Locale) => {
  const path = getPathname({ href, locale });
  return path === '/' ? siteConfig.url : `${siteConfig.url}${path}`;
};

/** Balises canonical + hreflang pour une page. */
export const buildAlternates = (href: AppPathname, locale: Locale): Metadata['alternates'] => ({
  canonical: absoluteUrl(href, locale),
  languages: {
    ...Object.fromEntries(routing.locales.map((l) => [hreflang[l], absoluteUrl(href, l)])),
    'x-default': absoluteUrl(href, routing.defaultLocale),
  },
});

type PageKey = 'home' | 'services' | 'about' | 'projects' | 'contact' | 'privacy';

/** Métadonnées SEO complètes d'une page (titre, description, canonical, hreflang, Open Graph). */
export const buildPageMetadata = async (
  locale: Locale,
  page: PageKey,
  href: AppPathname,
): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const title = t(`${page}.title`);
  const description = t(`${page}.description`);

  return {
    title: page === 'home' ? { absolute: t('siteTitle') } : title,
    description,
    alternates: buildAlternates(href, locale),
    openGraph: {
      title: page === 'home' ? t('siteTitle') : `${title} | ${siteConfig.name}`,
      description,
      url: absoluteUrl(href, locale),
    },
  };
};
