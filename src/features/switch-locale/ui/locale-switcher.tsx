'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { routing, usePathname, useRouter, type Locale } from '@/shared/i18n';
import { cn } from '@/shared/lib';

type LocaleSwitcherProps = {
  tone?: 'default' | 'light';
  className?: string;
};

export const LocaleSwitcher = ({ tone = 'default', className }: LocaleSwitcherProps) => {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    startTransition(() => router.replace(pathname, { locale: next, scroll: false }));
  };

  return (
    <div
      role="group"
      aria-label={t('label')}
      className={cn(
        'inline-flex items-center rounded-full border p-0.5 text-xs font-semibold',
        tone === 'light' ? 'border-white/30' : 'border-border',
        isPending && 'opacity-60',
        className,
      )}
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            onClick={() => switchTo(code)}
            aria-pressed={active}
            aria-label={t(code)}
            className={cn(
              'rounded-full px-2.5 py-1 uppercase transition-colors',
              active
                ? tone === 'light'
                  ? 'bg-white text-ink'
                  : 'bg-ink text-white dark:bg-white dark:text-ink'
                : tone === 'light'
                  ? 'text-white/80 hover:text-white'
                  : 'text-muted hover:text-foreground',
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
};
