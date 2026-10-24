import type { MetadataRoute } from 'next';
import { routing, type AppPathname } from '@/shared/i18n';
import { absoluteUrl } from '@/shared/i18n/server';

const pages: { href: AppPathname; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
  { href: '/', priority: 1, changeFrequency: 'monthly' },
  { href: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { href: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { href: '/projects', priority: 0.8, changeFrequency: 'monthly' },
  { href: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { href: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.flatMap(({ href, priority, changeFrequency }) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(href, locale),
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, absoluteUrl(href, l)])),
      },
    })),
  );
}
