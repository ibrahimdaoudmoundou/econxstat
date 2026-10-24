import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ServicesPage } from '@/pages/services';
import type { Locale } from '@/shared/i18n';
import { buildPageMetadata } from '@/shared/i18n/server';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, 'services', '/services');
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesPage locale={locale} />;
}
