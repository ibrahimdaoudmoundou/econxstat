import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/shared/i18n/request.ts');

const isDev = process.env.NODE_ENV !== 'production';

/**
 * Content-Security-Policy.
 * 'unsafe-inline' reste nécessaire pour les scripts d'hydratation de Next.js
 * et le script anti-flash de next-themes (pas de nonce sur un site statique).
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
];

const nextConfig: NextConfig = {
  // Build autonome : permet le déploiement sur serveur dédié (Docker / Node).
  // Vercel l'ignore et utilise son propre format de sortie.
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  // Anciennes URL WordPress → nouvelles URL (conserve le référencement acquis).
  async redirects() {
    return [
      { source: '/354-2', destination: '/services', permanent: true },
      { source: '/projet', destination: '/projets', permanent: true },
      { source: '/home', destination: '/en', permanent: true },
      { source: '/service', destination: '/en/services', permanent: true },
      { source: '/about', destination: '/en/about', permanent: true },
      { source: '/projects', destination: '/en/projects', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
