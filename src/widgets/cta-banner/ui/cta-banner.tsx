import { ArrowRight, Mail } from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { getImage, siteConfig } from '@/shared/config';
import { Link, type Locale } from '@/shared/i18n';
import { cn } from '@/shared/lib';
import { buttonVariants } from '@/shared/ui';

export const CtaBanner = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'Cta' });
  const background = getImage('glassBuilding');

  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-950 px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
          <Image
            src={background.src}
            alt=""
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="-z-20 object-cover opacity-25"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950 via-brand-900/95 to-brand-700/70"
          />
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl">{t('title')}</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">{t('text')}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: 'light', size: 'lg' }))}
              >
                {t('primary')}
                <ArrowRight aria-hidden />
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className={cn(buttonVariants({ variant: 'ghostLight', size: 'lg' }))}
              >
                <Mail aria-hidden />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
