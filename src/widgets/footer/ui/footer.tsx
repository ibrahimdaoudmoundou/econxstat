import { ArrowUp, Mail } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { serviceGroups } from '@/entities/service';
import { siteConfig } from '@/shared/config';
import { Link, type Locale } from '@/shared/i18n';
import { Logo } from '@/shared/ui';

export const Footer = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'Footer' });
  const nav = await getTranslations({ locale, namespace: 'Nav' });
  const year = new Date().getFullYear();

  const explore = [
    { href: '/', label: nav('home') },
    { href: '/about', label: nav('about') },
    { href: '/projects', label: nav('projects') },
    { href: '/contact', label: nav('contact') },
  ] as const;

  return (
    <footer className="dark relative overflow-hidden bg-ink text-foreground">
      <div aria-hidden className="absolute inset-0 bg-grid text-white opacity-[0.07]" />
      <div className="relative container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm leading-relaxed text-muted">{t('tagline')}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-brand-400"
            >
              <Mail aria-hidden className="size-4 text-brand-400" />
              {siteConfig.email}
            </a>
          </div>

          <nav aria-label={t('explore')} className="lg:col-span-2 lg:col-start-6">
            <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
              {t('explore')}
            </h2>
            <ul className="mt-5 space-y-3">
              {explore.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t('services')} className="lg:col-span-3">
            <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
              {t('services')}
            </h2>
            <ul className="mt-5 space-y-3">
              {serviceGroups.map((service) => (
                <li key={service.id}>
                  <Link
                    href={{ pathname: '/services', hash: service.id }}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {service.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
              {t('contact')}
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  {nav('cta')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. {t('rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              {t('privacy')}
            </Link>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              {t('backToTop')}
              <ArrowUp aria-hidden className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
