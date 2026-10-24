import type { MetadataRoute } from 'next';
import { siteConfig } from '@/shared/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: 'Conseil en économie, statistique et science des données.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1d1e1e',
    lang: 'fr-CA',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/images/brand/logo.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
