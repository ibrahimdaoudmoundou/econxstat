import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { toolStack } from '@/entities/service';
import { getImage } from '@/shared/config';
import { Link, type Locale } from '@/shared/i18n';
import { cn } from '@/shared/lib';
import { buttonVariants } from '@/shared/ui';

/** Barres décoratives qui rappellent les immeubles-graphiques du logo. */
const bars = [38, 56, 44, 72, 60, 88, 100];

export const Hero = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'Home.hero' });
  const image = getImage('heroAnalytics');

  return (
    <section className="relative isolate overflow-hidden bg-ink pt-32 pb-40 text-white sm:pt-40 lg:pt-44 lg:pb-48">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid text-white opacity-[0.12]" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 -z-10 size-[36rem] rounded-full bg-brand-500/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -left-40 -z-10 size-[28rem] rounded-full bg-brand-700/40 blur-3xl"
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-brand-300 uppercase">
            <span aria-hidden className="h-px w-8 bg-brand-400" />
            {t('eyebrow')}
          </p>
          <h1 className="text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-[3.6rem]">
            {t.rich('title', {
              hl: (chunks) => (
                <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                  {chunks}
                </span>
              ),
            })}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">{t('description')}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={cn(buttonVariants({ variant: 'light', size: 'lg' }))}>
              {t('ctaPrimary')}
              <ArrowRight aria-hidden />
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: 'ghostLight', size: 'lg' }))}
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl ring-1 shadow-black/40 ring-white/10">
            <Image
              src={image.src}
              alt={t('imageAlt')}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent"
            />
          </div>

          {/* Carte flottante : mini-graphique + outils */}
          <div
            aria-hidden
            className="absolute -bottom-10 left-4 w-56 rounded-2xl border border-white/10 bg-ink/80 p-5 shadow-2xl backdrop-blur-xl sm:-left-10 sm:w-60 lg:-left-10"
          >
            <div className="flex h-20 items-end gap-1.5">
              {bars.map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-700 to-brand-400"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <p className="mt-4 text-xs font-medium tracking-wide text-white/60">
              {toolStack.slice(0, 4).join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
