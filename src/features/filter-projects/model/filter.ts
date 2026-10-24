import type { Project, ProjectCategory } from '@/entities/project';

export type ProjectFilter = ProjectCategory | 'all';

/** Projets du filtre choisi, du plus récent au plus ancien. */
export const filterProjects = (items: Project[], filter: ProjectFilter) =>
  items
    .filter((project) => filter === 'all' || project.category === filter)
    .toSorted((a, b) => b.year - a.year);
