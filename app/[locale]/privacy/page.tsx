import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { PrivacyPage } from '@/pages/privacy';
import type { Locale } from '@/shared/i18n';
import { buildPageMetadata } from '@/shared/i18n/server';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, 'privacy', '/privacy');
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyPage locale={locale} />;
}
