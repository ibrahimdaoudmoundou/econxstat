import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

/**
 * Règles d'architecture Feature-Sliced Design :
 * une couche ne peut importer que les couches situées en dessous d'elle,
 * et uniquement via l'API publique (index.ts) d'une slice.
 *   app → pages → widgets → features → entities → shared
 */
const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];

const fsdBoundaries = layers.slice(1).map((layer, index) => {
  const higherLayers = layers.slice(0, index + 1);
  return {
    files: [`src/${layer}/**/*.{ts,tsx}`],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: higherLayers.map((higher) => `@/${higher}/*`),
              message: `FSD : la couche « ${layer} » ne peut pas importer une couche supérieure.`,
            },
            {
              group: ['@/pages/*/*', '@/widgets/*/*', '@/features/*/*', '@/entities/*/*'],
              message: 'FSD : importez une slice uniquement via son API publique (index.ts).',
            },
          ],
        },
      ],
    },
  };
});

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  ...fsdBoundaries,
  {
    files: ['app/**/*.{ts,tsx}', 'src/app/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/pages/*/*', '@/widgets/*/*', '@/features/*/*', '@/entities/*/*'],
              message: 'FSD : importez une slice uniquement via son API publique (index.ts).',
            },
          ],
        },
      ],
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'node_modules/**']),
]);
