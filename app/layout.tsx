import type { ReactNode } from 'react';

/**
 * Le document HTML est rendu par app/[locale]/layout.tsx (attribut lang par langue).
 * Ce gabarit racine sert uniquement de point d'entrée requis par Next.js.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
