import { Building2, MapPin } from 'lucide-react';
import type { Locale } from '@/shared/i18n';
import { Badge } from '@/shared/ui';
import { cn } from '@/shared/lib';
import type { Project } from '../model/types';

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  categoryLabel: string;
  inPublicationLabel: string;
  labels: { country: string; client: string };
  className?: string;
};

export const ProjectCard = ({
  project,
  locale,
  categoryLabel,
  inPublicationLabel,
  labels,
  className,
}: ProjectCardProps) => (
  <article
    className={cn(
      'group relative flex h-full flex-col rounded-3xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-xl hover:shadow-black/5',
      className,
    )}
  >
    <div className="flex items-center justify-between gap-4">
      <Badge>{categoryLabel}</Badge>
      <span className="font-display text-sm font-semibold text-brand-700 tabular-nums dark:text-brand-300">
        {project.year}
      </span>
    </div>
    <h3 className="mt-6 mb-8 text-lg leading-snug font-semibold">{project.title[locale]}</h3>
    <dl className="mt-auto space-y-2 border-t border-border pt-5 text-sm text-muted">
      <div className="flex items-start gap-2">
        <dt className="sr-only">{labels.country}</dt>
        <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-500" />
        <dd>{project.country[locale]}</dd>
      </div>
      <div className="flex items-start gap-2">
        <dt className="sr-only">{labels.client}</dt>
        <Building2 aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-500" />
        <dd className={cn(!project.client && 'italic')}>
          {project.client ? project.client[locale] : inPublicationLabel}
        </dd>
      </div>
    </dl>
  </article>
);
