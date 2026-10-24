import { Check } from 'lucide-react';
import type { Locale } from '@/shared/i18n';
import { cn } from '@/shared/lib';
import type { ServiceGroup } from '../model/services';
import { ServiceIcon } from './service-icon';

type ServiceCardProps = {
  service: ServiceGroup;
  locale: Locale;
  /** `compact` = résumé seul (accueil), `full` = liste détaillée (page Services). */
  variant?: 'compact' | 'full';
  className?: string;
};

export const ServiceCard = ({ service, locale, variant = 'full', className }: ServiceCardProps) => (
  <article
    id={service.id}
    className={cn(
      'flex h-full scroll-mt-28 flex-col rounded-3xl border border-border bg-background p-7 sm:p-8',
      className,
    )}
  >
    <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 dark:bg-brand-950 dark:text-brand-300 dark:ring-brand-900">
      <ServiceIcon name={service.icon} className="size-6" />
    </span>
    <h3 className="mt-6 text-xl font-semibold">{service.title[locale]}</h3>
    <p className="mt-2 leading-relaxed text-muted">{service.summary[locale]}</p>
    {variant === 'full' && (
      <ul className="mt-6 space-y-3 border-t border-border pt-6">
        {service.items[locale].map((item) => (
          <li key={item} className="flex gap-3 text-[0.95rem] leading-snug">
            <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </article>
);
