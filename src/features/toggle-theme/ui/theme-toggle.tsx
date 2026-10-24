'use client';

import { Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { cn } from '@/shared/lib';

type ThemeToggleProps = {
  tone?: 'default' | 'light';
  className?: string;
};

/**
 * Bascule clair / sombre. Les icônes et libellés sont pilotés en CSS (classe `dark`)
 * pour éviter tout décalage d'hydratation.
 */
export const ThemeToggle = ({ tone = 'default', className }: ThemeToggleProps) => {
  const t = useTranslations('ThemeToggle');
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'grid size-9 place-items-center rounded-full border transition-colors',
        tone === 'light'
          ? 'border-white/30 text-white hover:bg-white/10'
          : 'border-border text-foreground hover:bg-surface',
        className,
      )}
    >
      <Moon aria-hidden className="size-4 dark:hidden" />
      <Sun aria-hidden className="hidden size-4 dark:block" />
      <span className="sr-only dark:hidden">{t('toDark')}</span>
      <span className="sr-only hidden dark:inline">{t('toLight')}</span>
    </button>
  );
};
