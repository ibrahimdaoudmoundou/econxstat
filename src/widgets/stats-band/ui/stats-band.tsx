import { getTranslations } from 'next-intl/server';
import { projectCountries, projects } from '@/entities/project';
import { teamMembers } from '@/entities/team-member';
import { siteConfig } from '@/shared/config';
import type { Locale } from '@/shared/i18n';
import { cn } from '@/shared/lib';

/** Chiffres clés — calculés à partir des contenus réels du site (projets, équipe). */
export const StatsBand = async ({ locale, className }: { locale: Locale; className?: string }) => {
  const t = await getTranslations({ locale, namespace: 'Home.stats' });

  const stats = [
    { value: projects.length, label: t('projects') },
    { value: projectCountries.length, label: t('countries') },
    { value: teamMembers.length, label: t('experts') },
    { value: siteConfig.firstProjectYear, label: t('since') },
  ];

  return (
    <section aria-label={t('label')} className={cn('relative z-10', className)}>
      <div className="container-page">
        <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-black/5 lg:grid-cols-4">
          {stats.map(({ value, label }, index) => (
            <div
              key={label}
              className={cn(
                'flex flex-col gap-1 border-border p-6 sm:p-8',
                index % 2 === 0 && 'border-r',
                index < 2 && 'border-b lg:border-b-0',
                index === 1 && 'lg:border-r',
                index === 2 && 'lg:border-r',
              )}
            >
              <dt className="order-2 text-sm leading-snug text-muted">{label}</dt>
              <dd className="order-1 font-display text-3xl font-bold text-foreground tabular-nums sm:text-4xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
