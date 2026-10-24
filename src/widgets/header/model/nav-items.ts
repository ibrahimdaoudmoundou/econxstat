import type { AppPathname } from '@/shared/i18n';

export const navItems = [
  { href: '/', key: 'home' },
  { href: '/services', key: 'services' },
  { href: '/about', key: 'about' },
  { href: '/projects', key: 'projects' },
  { href: '/contact', key: 'contact' },
] as const satisfies ReadonlyArray<{ href: AppPathname; key: string }>;
