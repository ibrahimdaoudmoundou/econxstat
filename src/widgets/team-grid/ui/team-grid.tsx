import { getTranslations } from 'next-intl/server';
import { MemberCard, teamMembers, type TeamMember } from '@/entities/team-member';
import { MemberProfileDialog } from '@/features/view-member-profile';
import type { Locale } from '@/shared/i18n';
import { Reveal } from '@/shared/ui';

type TeamGridProps = {
  locale: Locale;
  /** Membres à afficher (toute l'équipe par défaut). */
  members?: TeamMember[];
};

export const TeamGrid = async ({ locale, members = teamMembers }: TeamGridProps) => {
  const t = await getTranslations({ locale, namespace: 'About.team' });

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {members.map((member, index) => (
        <li key={member.id}>
          <Reveal delay={(index % 4) * 0.06} className="h-full">
            <MemberCard
              member={member}
              locale={locale}
              founderLabel={t('founder')}
              className="h-full"
              action={<MemberProfileDialog member={member} />}
            />
          </Reveal>
        </li>
      ))}
    </ul>
  );
};
