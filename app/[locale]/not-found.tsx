import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { NotFoundPage } from '@/pages/not-found';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata.notFound');
  return { title: t('title'), robots: { index: false } };
}

export default async function LocaleNotFound() {
  const locale = await getLocale();
  return <NotFoundPage locale={locale} />;
}
