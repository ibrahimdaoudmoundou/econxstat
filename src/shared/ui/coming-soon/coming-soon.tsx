import { Clock3 } from 'lucide-react';
import { cn } from '../../lib';

type ComingSoonProps = {
  label: string;
  description?: string;
  className?: string;
};

/** Emplacement réservé pour un contenu à venir (témoignages, publications…). */
export const ComingSoon = ({ label, description, className }: ComingSoonProps) => (
  <div
    className={cn(
      'flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border bg-surface px-6 py-14 text-center',
      className,
    )}
  >
    <span className="grid size-12 place-items-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300">
      <Clock3 aria-hidden className="size-5" />
    </span>
    <p className="font-display text-lg font-semibold">{label}</p>
    {description && <p className="max-w-md text-sm leading-relaxed text-muted">{description}</p>}
  </div>
);
