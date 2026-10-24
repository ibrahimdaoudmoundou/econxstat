'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { LocaleSwitcher } from '@/features/switch-locale';
import { ThemeToggle } from '@/features/toggle-theme';
import { siteConfig } from '@/shared/config';
import { Link, usePathname } from '@/shared/i18n';
import { cn } from '@/shared/lib';
import { buttonVariants, Logo } from '@/shared/ui';
import { navItems } from '../model/nav-items';

export const MobileNav = ({ tone }: { tone: 'default' | 'light' }) => {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        aria-label={t('openMenu')}
        className={cn(
          'grid size-10 place-items-center rounded-full border lg:hidden',
          tone === 'light' ? 'border-white/30 text-white' : 'border-border text-foreground',
        )}
      >
        <Menu aria-hidden className="size-5" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm lg:hidden" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-background p-6 shadow-2xl focus:outline-none lg:hidden">
          <div className="flex items-center justify-between">
            <Dialog.Title className="sr-only">{t('primary')}</Dialog.Title>
            <Logo />
            <Dialog.Close
              aria-label={t('closeMenu')}
              className="grid size-10 place-items-center rounded-full border border-border"
            >
              <X aria-hidden className="size-5" />
            </Dialog.Close>
          </div>
          <nav aria-label={t('primary')} className="mt-10">
            <ul className="space-y-1">
              {navItems.map(({ href, key }) => {
                const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
                return (
                  <li key={key}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg font-semibold transition-colors',
                        active
                          ? 'bg-surface text-foreground'
                          : 'text-muted hover:bg-surface hover:text-foreground',
                      )}
                    >
                      {t(key)}
                      {active && <span aria-hidden className="size-2 rounded-full bg-brand-500" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-auto space-y-6">
            <div className="flex items-center gap-3">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ size: 'lg' }), 'w-full')}
            >
              {t('cta')}
              <ArrowRight aria-hidden />
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="block text-center text-sm text-muted">
              {siteConfig.email}
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
