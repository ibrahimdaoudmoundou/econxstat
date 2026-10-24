import { ArrowRight, Globe2 } from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { getImage } from '@/shared/config';
import { Link, type Locale } from '@/shared/i18n';
import { cn } from '@/shared/lib';
import { buttonVariants, Reveal, Section, SectionHeading } from '@/shared/ui';

export const AboutTeaser = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'Home.about' });
  const handshake = getImage('handshake');
  const team = getImage('teamMeeting');

  return (
    <Section>
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={handshake.src}
              alt={t('imageAlt')}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-10 hidden aspect-square w-44 overflow-hidden rounded-3xl border-8 border-background shadow-xl sm:block lg:-right-10">
            <Image src={team.src} alt="" fill sizes="176px" className="object-cover" />
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
          <p className="mt-6 text-lg leading-relaxed text-muted">{t('text')}</p>
          <div className="mt-8 flex gap-4 rounded-2xl border border-border bg-surface p-5">
            <Globe2
              aria-hidden
              className="mt-0.5 size-6 shrink-0 text-brand-600 dark:text-brand-300"
            />
            <p className="leading-relaxed">{t('network')}</p>
          </div>
          <Link href="/about" className={cn(buttonVariants(), 'mt-10')}>
            {t('cta')}
            <ArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </Section>
  );
};
