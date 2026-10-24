'use client';

import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { LocaleSwitcher } from '@/features/switch-locale';
import { ThemeToggle } from '@/features/toggle-theme';
import { Link, usePathname } from '@/shared/i18n';
import { cn } from '@/shared/lib';
import { buttonVariants, Logo } from '@/shared/ui';
import { navItems } from '../model/nav-items';
import { MobileNav } from './mobile-nav';

/**
 * En-tête fixe : transparent au-dessus des bandeaux photo (texte blanc),
 * puis opaque avec flou dès que l'on défile.
 */
export const Header = () => {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const tone = scrolled ? 'default' : 'light';

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,padding] duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/85 py-3 shadow-sm backdrop-blur-xl'
          : 'bg-transparent py-5',
      )}
    >
      <div className="container-page flex items-center justify-between gap-6">
        <Link href="/" aria-label={t('home_link')} className="shrink-0 rounded-xl">
          <Logo tone={tone} />
        </Link>

        <nav aria-label={t('primary')} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map(({ href, key }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <li key={key}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                      tone === 'light'
                        ? 'text-white/80 hover:text-white'
                        : 'text-slate-brand hover:text-foreground dark:text-muted dark:hover:text-foreground',
                      active && (tone === 'light' ? 'text-white' : 'text-foreground'),
                    )}
                  >
                    {t(key)}
                    {active && (
                      <span
                        aria-hidden
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher tone={tone} className="hidden sm:inline-flex" />
          <ThemeToggle tone={tone} className="hidden sm:grid" />
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: tone === 'light' ? 'light' : 'primary', size: 'sm' }),
              'ml-2 hidden xl:inline-flex',
            )}
          >
            {t('cta')}
            <ArrowRight aria-hidden />
          </Link>
          <MobileNav tone={tone} />
        </div>
      </div>
    </header>
  );
};
