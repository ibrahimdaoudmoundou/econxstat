'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, X } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import type { TeamMember } from '@/entities/team-member';
import { getImage } from '@/shared/config';
import { Badge } from '@/shared/ui';

/** Bouton « Voir le profil » ouvrant la biographie complète d'un membre. */
export const MemberProfileDialog = ({ member }: { member: TeamMember }) => {
  const t = useTranslations('About.team');
  const locale = useLocale();
  const photo = getImage(member.photo);

  return (
    <Dialog.Root>
      <Dialog.Trigger className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline">
        {t('viewProfile')}
        <ArrowUpRight aria-hidden className="size-4" />
        <span className="sr-only">— {member.name}</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-x-4 top-1/2 z-50 mx-auto max-h-[88vh] max-w-3xl -translate-y-1/2 overflow-y-auto rounded-3xl border border-border bg-background shadow-2xl focus:outline-none">
          <div className="grid gap-0 md:grid-cols-[240px_1fr]">
            <div className="relative aspect-square bg-surface-strong md:aspect-auto md:min-h-full">
              <Image
                src={photo.src}
                alt={member.name}
                fill
                sizes="(min-width: 768px) 240px, 90vw"
                className="object-cover object-top md:rounded-l-3xl"
              />
            </div>
            <div className="p-7 sm:p-9">
              <Dialog.Title className="font-display text-2xl font-bold">
                {member.honorific && (
                  <span className="font-semibold text-muted">{member.honorific} </span>
                )}
                {member.name}
              </Dialog.Title>
              <Dialog.Description className="mt-1 font-medium text-accent">
                {member.role[locale]}
              </Dialog.Description>
              <div className="mt-6 space-y-4 leading-relaxed text-muted">
                {member.bio[locale].map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <h3 className="mt-7 text-sm font-semibold tracking-wide uppercase">
                {t('expertise')}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {member.expertise[locale].map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Dialog.Close
            className="absolute top-4 right-4 grid size-10 place-items-center rounded-full border bg-background/90 text-foreground shadow-sm backdrop-blur hover:bg-surface"
            aria-label={t('close')}
          >
            <X aria-hidden className="size-5" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
