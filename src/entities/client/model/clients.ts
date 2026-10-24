import type { Localized } from '@/shared/i18n';

export type Client = {
  id: string;
  name: Localized;
};

/** Clients (références) et partenaires cités sur le site d'origine. */
export const clients: Client[] = [
  { id: 'world-bank', name: { fr: 'Banque mondiale', en: 'World Bank' } },
  {
    id: 'oif',
    name: {
      fr: 'Organisation internationale de la Francophonie',
      en: 'International Organisation of La Francophonie',
    },
  },
  {
    id: 'iom',
    name: {
      fr: 'Organisation internationale pour les migrations',
      en: 'International Organization for Migration',
    },
  },
  {
    id: 'melccfp',
    name: {
      fr: 'Ministère de la Lutte contre les changements climatiques (Québec)',
      en: 'Québec Ministry of the Fight against Climate Change',
    },
  },
  { id: 'apexmachina', name: { fr: 'Cabinet Apexmachina', en: 'Apexmachina' } },
  {
    id: 'bcep',
    name: {
      fr: 'BCEP — Bureau de consultants en évaluation de programmes',
      en: 'BCEP — Programme Evaluation Consultants',
    },
  },
];
