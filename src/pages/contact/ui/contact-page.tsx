import { Clock, Languages, Mail } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { ContactForm } from '@/features/contact-form';
import { siteConfig } from '@/shared/config';
import type { Locale } from '@/shared/i18n';
import { PageHero, Section } from '@/shared/ui';

export const ContactPage = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'Contact' });

  const details = [
    {
      icon: Mail,
      label: t('info.email'),
      value: (
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-semibold text-accent hover:underline"
        >
          {siteConfig.email}
        </a>
      ),
    },
    { icon: Clock, label: t('info.response'), value: t('info.responseValue') },
    { icon: Languages, label: t('info.languages'), value: t('info.languagesValue') },
  ];

  return (
    <>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
        image="handshake"
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
          <aside>
            <h2 className="text-2xl font-bold">{t('info.title')}</h2>
            <dl className="mt-8 space-y-4">
              {details.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex gap-4 rounded-2xl border border-border bg-surface p-5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-background text-brand-700 dark:text-brand-300">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <div>
                    <dt className="text-sm text-muted">{label}</dt>
                    <dd className="mt-0.5 font-medium">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>
          <div className="rounded-[2rem] border border-border bg-background p-6 shadow-xl shadow-black/5 sm:p-10">
            <h2 className="mb-8 text-2xl font-bold">{t('form.title')}</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
};
