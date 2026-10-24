import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/shared/i18n';
import { PageHero, Section } from '@/shared/ui';

type PolicySection = { title: string; body: string };

export const PrivacyPage = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'Privacy' });
  const sections = t.raw('sections') as PolicySection[];

  return (
    <>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
        image="network"
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-muted">{t('updated')}</p>
          <div className="mt-10 space-y-10">
            {sections.map((section, index) => (
              <section key={section.title} aria-labelledby={`policy-${index}`}>
                <h2 id={`policy-${index}`} className="flex gap-3 text-xl font-semibold">
                  <span className="text-brand-600 tabular-nums dark:text-brand-300">
                    {index + 1}.
                  </span>
                  {section.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};
