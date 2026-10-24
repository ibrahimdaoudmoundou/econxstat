import { ArrowLeft } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link, type Locale } from '@/shared/i18n';
import { cn } from '@/shared/lib';
import { buttonVariants } from '@/shared/ui';

export const NotFoundPage = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'NotFound' });

  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-ink text-white">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid text-white opacity-[0.1]" />
      <div className="container-page py-40 text-center">
        <p className="text-xs font-semibold tracking-[0.18em] text-brand-300 uppercase">
          {t('eyebrow')}
        </p>
        <h1 className="mt-5 text-4xl font-bold sm:text-5xl">{t('title')}</h1>
        <p className="mx-auto mt-5 max-w-lg text-lg text-white/75">{t('text')}</p>
        <Link href="/" className={cn(buttonVariants({ variant: 'light', size: 'lg' }), 'mt-10')}>
          <ArrowLeft aria-hidden />
          {t('back')}
        </Link>
      </div>
    </section>
  );
};
