import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { ProjectCard, projects } from '@/entities/project';
import { Link, type Locale } from '@/shared/i18n';
import { cn } from '@/shared/lib';
import { buttonVariants, Reveal, Section, SectionHeading } from '@/shared/ui';

/** Mandats clients récents (on met en avant les projets avec un commanditaire). */
const featured = projects.filter((project) => project.client).slice(0, 3);

export const ProjectsPreview = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'Home.projects' });
  const p = await getTranslations({ locale, namespace: 'Projects' });

  return (
    <Section tone="muted">
      <div className="grid items-end gap-10 lg:grid-cols-2">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />
        <div className="lg:justify-self-end">
          <Link href="/projects" className={cn(buttonVariants({ variant: 'secondary' }))}>
            {t('cta')}
            <ArrowRight aria-hidden />
          </Link>
        </div>
      </div>
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {featured.map((project, index) => (
          <li key={project.id}>
            <Reveal delay={index * 0.08} className="h-full">
              <ProjectCard
                project={project}
                locale={locale}
                categoryLabel={p(`categories.${project.category}`)}
                inPublicationLabel={p('inPublication')}
                labels={{ country: p('labels.country'), client: p('labels.client') }}
              />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
};
