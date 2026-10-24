import createMiddleware from 'next-intl/middleware';
import { routing } from './src/shared/i18n/routing';

/** Détection de la langue et réécriture des URL localisées (/a-propos ↔ /en/about). */
export default createMiddleware(routing);

export const config = {
  // Toutes les routes sauf API, fichiers internes de Next.js et fichiers statiques (avec extension).
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
