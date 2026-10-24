import { getTranslations } from 'next-intl/server';
import type { ReactNode } from 'react';
import type { Locale } from '@/shared/i18n';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Providers } from './providers';
import { StructuredData } from '../seo/structured-data';

/** Gabarit commun à toutes les pages : document HTML, fournisseurs, en-tête et pied de page. */
export const SiteLayout = async ({ locale, children }: { locale: Locale; children: ReactNode }) => {
  const t = await getTranslations({ locale, namespace: 'Nav' });
  const meta = await getTranslations({ locale, namespace: 'Metadata' });

  return (
    <html lang={locale === 'fr' ? 'fr-CA' : 'en-CA'} suppressHydrationWarning>
      <body id="top">
        <Providers>
          <a
            href="#contenu"
            className="sr-only z-50 rounded-full bg-ink px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
          >
            {t('skipToContent')}
          </a>
          <Header />
          <main id="contenu" tabIndex={-1} className="focus:outline-none">
            {children}
          </main>
          <Footer locale={locale} />
        </Providers>
        <StructuredData locale={locale} description={meta('siteDescription')} />
      </body>
    </html>
  );
};
