import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/shared/i18n';
import { Reveal, Section, SectionHeading } from '@/shared/ui';

const steps = ['scope', 'data', 'analysis', 'delivery'] as const;

export const Approach = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'Home.approach' });

  return (
    <Section tone="dark" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid text-white opacity-[0.06]"
      />
      <div className="relative">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step} className="bg-ink">
              <Reveal delay={index * 0.08} className="flex h-full flex-col p-8">
                <span className="font-display text-sm font-semibold text-brand-400 tabular-nums">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {t(`steps.${step}.title`)}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{t(`steps.${step}.text`)}</p>
                <span aria-hidden className="mt-8 h-0.5 w-10 rounded-full bg-brand-500" />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};
