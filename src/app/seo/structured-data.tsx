import { serviceGroups } from '@/entities/service';
import { teamMembers } from '@/entities/team-member';
import { siteConfig } from '@/shared/config';
import type { Locale } from '@/shared/i18n';

/** Données structurées schema.org (ProfessionalService) pour les moteurs de recherche. */
export const StructuredData = ({
  locale,
  description,
}: {
  locale: Locale;
  description: string;
}) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/logo.png`,
    image: `${siteConfig.url}/images/site/hero-analytics.jpg`,
    email: siteConfig.email,
    description,
    inLanguage: locale === 'fr' ? 'fr-CA' : 'en-CA',
    areaServed: ['CA', 'Africa'],
    knowsLanguage: ['fr', 'en'],
    knowsAbout: serviceGroups.flatMap((group) => group.items[locale]),
    member: teamMembers.map((member) => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role[locale],
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Contenu statique généré à partir des données du site (aucune saisie utilisateur).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
};
