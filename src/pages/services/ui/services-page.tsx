import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { ServiceCard, serviceGroups, ServiceIcon, toolStack } from '@/entities/service';
import { getImage } from '@/shared/config';
import type { Locale } from '@/shared/i18n';
import { PageHero, Reveal, Section, SectionHeading } from '@/shared/ui';
import { CtaBanner } from '@/widgets/cta-banner';

export const ServicesPage = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'Services' });
  const consulting = serviceGroups.filter((group) => group.area === 'consulting');
  const training = serviceGroups.filter((group) => group.area === 'training');
  const trainingImage = getImage('training');

  return (
    <>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
        image="consultingHero"
      >
        <nav aria-label={t('nav')}>
          <ul className="flex flex-wrap gap-2">
            {serviceGroups.map((group) => (
              <li key={group.id}>
                <a
                  href={`#${group.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur transition-colors hover:border-brand-300"
                >
                  <ServiceIcon name={group.icon} className="size-4 text-brand-300" />
                  {group.title[locale]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <Section id="consultation">
        <SectionHeading
          eyebrow={t('consulting.eyebrow')}
          title={t('consulting.title')}
          description={t('consulting.description')}
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {consulting.map((service, index) => (
            <li key={service.id}>
              <Reveal delay={(index % 2) * 0.08} className="h-full">
                <ServiceCard service={service} locale={locale} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="formation" tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow={t('training.eyebrow')}
            title={t('training.title')}
            description={t('training.description')}
          />
          <Reveal className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
            <Image
              src={trainingImage.src}
              alt={t('training.imageAlt')}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {training.map((service, index) => (
            <li key={service.id}>
              <Reveal delay={index * 0.08} className="h-full">
                <ServiceCard service={service} locale={locale} />
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-14 text-center">
          <h3 className="font-sans text-xs font-semibold tracking-[0.18em] text-muted uppercase">
            {t('tools.title')}
          </h3>
          <ul className="mt-5 flex flex-wrap justify-center gap-3">
            {toolStack.map((tool) => (
              <li
                key={tool}
                className="rounded-xl border border-border bg-background px-5 py-2.5 font-display text-sm font-semibold"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBanner locale={locale} />
    </>
  );
};
