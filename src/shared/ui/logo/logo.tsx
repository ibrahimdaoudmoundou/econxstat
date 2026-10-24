import Image from 'next/image';
import { getImage } from '../../config';
import { cn } from '../../lib';

type LogoProps = {
  className?: string;
  /** Affiche le nom à côté du symbole. */
  withWordmark?: boolean;
  tone?: 'default' | 'light';
};

export const Logo = ({ className, withWordmark = true, tone = 'default' }: LogoProps) => {
  const logo = getImage('logo');

  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-border/60">
        <Image
          src={logo.src}
          alt=""
          width={44}
          height={44}
          className="size-11 object-contain"
          priority
        />
      </span>
      {withWordmark && (
        <span
          className={cn(
            'font-display text-xl font-bold tracking-tight',
            tone === 'light' ? 'text-white' : 'text-foreground',
          )}
        >
          Écon<span className="text-brand-500">X</span>Stat
        </span>
      )}
    </span>
  );
};
