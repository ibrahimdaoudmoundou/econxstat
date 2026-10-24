import type { Localized } from '@/shared/i18n';

export const projectCategories = [
  'impact',
  'environment',
  'health',
  'data',
  'development',
] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  id: string;
  title: Localized;
  country: Localized;
  year: number;
  category: ProjectCategory;
  /** Client / commanditaire. `null` = travail de recherche en voie de publication. */
  client: Localized | null;
};
