import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { featuredMembers } from '@/entities/team-member';
import type { Locale } from '@/shared/i18n';
import { Link } from '@/shared/i18n';
import { cn } from '@/shared/lib';
import { buttonVariants, ComingSoon, Section, SectionHeading } from '@/shared/ui';
import { ClientsBand } from '@/widgets/clients-band';
import { CtaBanner } from '@/widgets/cta-banner';
import { StatsBand } from '@/widgets/stats-band';
import { TeamGrid } from '@/widgets/team-grid';
import { AboutTeaser } from './about-teaser';
import { Approach } from './approach';
import { Hero } from './hero';
import { ProjectsPreview } from './projects-preview';
import { ServicesOverview } from './services-overview';

export const HomePage = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'Home' });

  return (
    <>
      <Hero locale={locale} />
      <StatsBand locale={locale} className="-mt-24 sm:-mt-20" />
      <ServicesOverview locale={locale} />
      <Approach locale={locale} />
      <AboutTeaser locale={locale} />
      <ClientsBand locale={locale} />
      <ProjectsPreview locale={locale} />

      <Section>
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow={t('team.eyebrow')}
            title={t('team.title')}
            description={t('team.description')}
          />
          <div className="lg:justify-self-end">
            <Link href="/about" className={cn(buttonVariants({ variant: 'secondary' }))}>
              {t('team.cta')}
              <ArrowRight aria-hidden />
            </Link>
          </div>
        </div>
        <div className="mt-14">
          <TeamGrid locale={locale} members={featuredMembers} />
        </div>
      </Section>

      <Section tone="muted" className="py-16 sm:py-20 lg:py-20">
        <SectionHeading
          eyebrow={t('testimonials.eyebrow')}
          title={t('testimonials.title')}
          align="center"
        />
        <ComingSoon
          className="mx-auto mt-10 max-w-2xl"
          label={t('testimonials.comingSoon')}
          description={t('testimonials.comingSoonText')}
        />
      </Section>

      <CtaBanner locale={locale} />
    </>
  );
};
