import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

export default defineConfig([
  ...fsd.configs.recommended,
  {
    // Les pages Next.js (dossier racine /app) ne font que déléguer à la couche FSD « pages ».
    // Certaines slices ne sont utilisées qu'une fois : c'est voulu pour garder des pages lisibles.
    rules: {
      'fsd/insignificant-slice': 'off',
    },
  },
]);
