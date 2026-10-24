import type { ImageKey } from '@/shared/config';
import type { Localized } from '@/shared/i18n';

export type TeamMember = {
  id: string;
  name: string;
  /** Titre honorifique affiché devant le nom (ex. « Dr »). */
  honorific?: string;
  photo: ImageKey;
  /** Cadrage CSS (object-position) si le visage n'est pas centré, ex. « left center ». */
  photoPosition?: string;
  role: Localized;
  /** Co-fondateur du cabinet. */
  founder?: boolean;
  bio: Localized<string[]>;
  expertise: Localized<string[]>;
};
