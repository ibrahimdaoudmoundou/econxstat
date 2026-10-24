import { NotFoundPage } from '@/pages/not-found';
import { SiteLayout } from '@/app';
import { routing } from '@/shared/i18n';

/** 404 hors du segment de langue (cas rare : la langue par défaut est utilisée). */
export default function GlobalNotFound() {
  const locale = routing.defaultLocale;
  return (
    <SiteLayout locale={locale}>
      <NotFoundPage locale={locale} />
    </SiteLayout>
  );
}
