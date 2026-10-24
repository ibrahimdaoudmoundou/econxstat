import { getTranslations } from 'next-intl/server';
import { FilterableProjects } from '@/features/filter-projects';
import type { Locale } from '@/shared/i18n';
import { PageHero, Section } from '@/shared/ui';
import { ClientsBand } from '@/widgets/clients-band';
import { CtaBanner } from '@/widgets/cta-banner';
import { StatsBand } from '@/widgets/stats-band';

export const ProjectsPage = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return (
    <>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
        image="worldMap"
      />
      <StatsBand locale={locale} className="-mt-12" />
      <Section className="pt-16 sm:pt-20 lg:pt-20">
        <FilterableProjects />
      </Section>
      <ClientsBand locale={locale} />
      <CtaBanner locale={locale} />
    </>
  );
};
