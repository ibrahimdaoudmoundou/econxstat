import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { ReactNode } from 'react';
import { SiteLayout } from '@/app';
import { siteConfig } from '@/shared/config';
import { routing } from '@/shared/i18n';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1d1e1e' },
  ],
};

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: t('siteTitle'), template: `%s | ${siteConfig.name}` },
    description: t('siteDescription'),
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    keywords: [
      'économie',
      'statistique',
      'économétrie',
      "évaluation d'impact",
      'science des données',
      'suivi-évaluation',
      'consultation',
      'formation',
      'Québec',
      'Afrique',
    ],
    icons: {
      icon: [{ url: '/icon.svg', type: 'image/svg+xml' }, { url: '/images/brand/logo.png' }],
      apple: '/images/brand/logo.png',
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      alternateLocale: locale === 'fr' ? 'en_CA' : 'fr_CA',
    },
    twitter: { card: 'summary_large_image' },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return <SiteLayout locale={locale}>{children}</SiteLayout>;
}
