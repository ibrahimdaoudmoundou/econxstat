import { Compass, Handshake, Scale, Target } from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { getImage } from '@/shared/config';
import type { Locale } from '@/shared/i18n';
import { PageHero, Reveal, Section, SectionHeading } from '@/shared/ui';
import { ClientsBand } from '@/widgets/clients-band';
import { CtaBanner } from '@/widgets/cta-banner';
import { TeamGrid } from '@/widgets/team-grid';

const values = [
  { key: 'rigor', icon: Scale },
  { key: 'independence', icon: Compass },
  { key: 'proximity', icon: Handshake },
  { key: 'impact', icon: Target },
] as const;

export const AboutPage = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'About' });
  const paragraphs = t.raw('mission.paragraphs') as string[];
  const teamPhoto = getImage('teamPhoto');
  const mission = getImage('mission');

  return (
    <>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
        image="network"
      />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow={t('mission.eyebrow')} title={t('mission.title')} />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src={teamPhoto.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 hidden size-36 overflow-hidden rounded-3xl border-8 border-background bg-background shadow-xl sm:block lg:-left-10">
              <Image
                src={mission.src}
                alt={t('mission.imageAlt')}
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow={t('values.eyebrow')} title={t('values.title')} align="center" />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ key, icon: Icon }, index) => (
            <li key={key}>
              <Reveal delay={index * 0.06} className="h-full">
                <div className="h-full rounded-3xl border border-border bg-background p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold">{t(`values.items.${key}.title`)}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{t(`values.items.${key}.text`)}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="equipe">
        <SectionHeading
          eyebrow={t('team.eyebrow')}
          title={t('team.title')}
          description={t('team.description')}
        />
        <div className="mt-14">
          <TeamGrid locale={locale} />
        </div>
      </Section>

      <Section tone="dark" className="pb-0 sm:pb-0 lg:pb-0">
        <div className="max-w-3xl pb-16">
          <SectionHeading eyebrow={t('network.eyebrow')} title={t('network.title')} />
          <p className="mt-6 text-lg leading-relaxed text-muted">{t('network.text')}</p>
        </div>
      </Section>
      <div className="dark bg-ink text-foreground">
        <ClientsBand locale={locale} />
      </div>

      <CtaBanner locale={locale} />
    </>
  );
};
