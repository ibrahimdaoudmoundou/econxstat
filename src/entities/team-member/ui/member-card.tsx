import Image from 'next/image';
import type { ReactNode } from 'react';
import { getImage } from '@/shared/config';
import type { Locale } from '@/shared/i18n';
import { cn } from '@/shared/lib';
import type { TeamMember } from '../model/types';

type MemberCardProps = {
  member: TeamMember;
  locale: Locale;
  founderLabel?: string;
  /** Zone d'action (ex. bouton « Voir le profil »). */
  action?: ReactNode;
  className?: string;
};

export const MemberCard = ({
  member,
  locale,
  founderLabel,
  action,
  className,
}: MemberCardProps) => {
  const photo = getImage(member.photo);

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-background transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5',
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-strong">
        <Image
          src={photo.src}
          alt={member.name}
          fill
          style={{ objectPosition: member.photoPosition }}
          sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 90vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {member.founder && founderLabel && (
          <span className="absolute top-4 left-4 rounded-full bg-ink/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {founderLabel}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-6">
        <h3 className="text-lg leading-snug font-semibold">
          {member.honorific && <span className="font-medium text-muted">{member.honorific} </span>}
          {member.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{member.role[locale]}</p>
        {action && <div className="mt-auto pt-4">{action}</div>}
      </div>
    </article>
  );
};
