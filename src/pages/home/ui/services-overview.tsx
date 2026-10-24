import { ArrowRight, Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { serviceGroups, ServiceIcon } from '@/entities/service';
import { getImage } from '@/shared/config';
import { Link, type Locale } from '@/shared/i18n';
import { cn } from '@/shared/lib';
import { buttonVariants, Reveal, Section, SectionHeading } from '@/shared/ui';

export const ServicesOverview = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'Home' });
  const consulting = serviceGroups.filter((group) => group.area === 'consulting');
  const training = serviceGroups.filter((group) => group.area === 'training');
  const meeting = getImage('teamMeeting');
  const domains = t.raw('domains.items') as string[];

  const pillars = [
    { key: 'consulting', icon: Briefcase, groups: consulting },
    { key: 'training', icon: GraduationCap, groups: training },
  ] as const;

  return (
    <Section className="pt-16 sm:pt-20 lg:pt-24">
      <div className="grid items-end gap-10 lg:grid-cols-2">
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          description={t('services.description')}
        />
        <div className="lg:justify-self-end">
          <Link href="/services" className={cn(buttonVariants({ variant: 'secondary' }))}>
            {t('services.more')}
            <ArrowRight aria-hidden />
          </Link>
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
        {pillars.map(({ key, icon: Icon, groups }, index) => (
          <Reveal key={key} delay={index * 0.08}>
            <article className="flex h-full flex-col rounded-3xl border border-border bg-surface p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-ink text-white dark:bg-white dark:text-ink">
                <Icon aria-hidden className="size-6" />
              </span>
              <h3 className="mt-6 text-2xl font-semibold">{t(`services.${key}.title`)}</h3>
              <p className="mt-3 leading-relaxed text-muted">{t(`services.${key}.text`)}</p>
              <ul className="mt-8 grid gap-2">
                {groups.map((group) => (
                  <li key={group.id}>
                    <Link
                      href={{ pathname: '/services', hash: group.id }}
                      className="group flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 transition-colors hover:border-brand-500/60"
                    >
                      <ServiceIcon
                        name={group.icon}
                        className="size-5 text-brand-600 dark:text-brand-300"
                      />
                      <span className="flex-1 font-medium">{group.title[locale]}</span>
                      <ArrowRight
                        aria-hidden
                        className="size-4 text-muted transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}

        <Reveal delay={0.16}>
          <div className="relative h-full min-h-80 overflow-hidden rounded-3xl">
            <Image
              src={meeting.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <h3 className="font-sans text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
                {t('domains.label')}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {domains.map((domain) => (
                  <li
                    key={domain}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur"
                  >
                    {domain}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
