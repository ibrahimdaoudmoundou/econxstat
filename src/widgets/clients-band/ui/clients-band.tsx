import { getTranslations } from 'next-intl/server';
import { clients } from '@/entities/client';
import type { Locale } from '@/shared/i18n';

/** Bandeau défilant des organisations clientes (noms tirés des références). */
export const ClientsBand = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: 'Home.clients' });
  const names = clients.map((client) => client.name[locale]);

  return (
    <section aria-labelledby="clients-title" className="border-y border-border py-12">
      <div className="container-page">
        <h2
          id="clients-title"
          className="text-center font-sans text-xs font-semibold tracking-[0.18em] text-muted uppercase"
        >
          {t('title')}
        </h2>
      </div>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Liste lisible par les lecteurs d'écran */}
        <ul className="sr-only">
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <div aria-hidden className="flex w-max animate-marquee gap-14 motion-reduce:animate-none">
          {[...names, ...names].map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="font-display text-lg font-semibold whitespace-nowrap text-slate-brand/80 sm:text-xl dark:text-muted"
            >
              {name}
              <span className="ml-14 text-brand-500">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
