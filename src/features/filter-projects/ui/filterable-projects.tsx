'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { ProjectCard, projectCategories, projects } from '@/entities/project';
import { cn } from '@/shared/lib';
import { filterProjects, type ProjectFilter } from '../model/filter';

export const FilterableProjects = () => {
  const t = useTranslations('Projects');
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const visible = filterProjects(projects, filter);
  const options: ProjectFilter[] = ['all', ...projectCategories];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label={t('filter.label')} className="-mx-1 flex flex-wrap gap-2">
          {options.map((option) => {
            const active = option === filter;
            return (
              <button
                key={option}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(option)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-ink'
                    : 'border-border text-muted hover:border-brand-500 hover:text-foreground',
                )}
              >
                {option === 'all' ? t('filter.all') : t(`categories.${option}`)}
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="text-sm text-muted tabular-nums">
          {t('filter.results', { count: visible.length })}
        </p>
      </div>

      <motion.ul layout={!reduceMotion} className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.id}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard
                project={project}
                locale={locale}
                categoryLabel={t(`categories.${project.category}`)}
                inPublicationLabel={t('inPublication')}
                labels={{ country: t('labels.country'), client: t('labels.client') }}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};
