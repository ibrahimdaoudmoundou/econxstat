import type { Project } from './types';

/** Références — reprises du tableau de la page « Projets » du site d'origine. */
export const projects: Project[] = [
  {
    id: 'niger-3n-irrigation',
    title: {
      fr: "Utilisation de données satellitaires pour évaluer l'impact du programme d'irrigation (3N) du Niger sur les conditions de vie des ménages",
      en: 'Using satellite data to assess the impact of Niger’s 3N irrigation programme on household living conditions',
    },
    country: { fr: 'Niger', en: 'Niger' },
    year: 2024,
    category: 'impact',
    client: { fr: 'Cabinet Apexmachina (Québec)', en: 'Apexmachina (Québec)' },
  },
  {
    id: 'senegal-reproductive-health',
    title: {
      fr: 'Normes socioculturelles et santé reproductive des femmes : données probantes du Sénégal',
      en: 'Socio-cultural norms and women’s reproductive health: evidence from Senegal',
    },
    country: { fr: 'Sénégal', en: 'Senegal' },
    year: 2024,
    category: 'health',
    client: null,
  },
  {
    id: 'quebec-roulez-vert',
    title: {
      fr: 'Adoption des véhicules zéro émission au Québec : impact du programme Roulez vert',
      en: 'Zero-emission vehicle adoption in Québec: impact of the Roulez vert programme',
    },
    country: { fr: 'Canada (Québec)', en: 'Canada (Québec)' },
    year: 2023,
    category: 'environment',
    client: {
      fr: 'Ministère de la Lutte contre les changements climatiques, de la Faune et des Parcs',
      en: 'Québec Ministry of the Fight against Climate Change, Wildlife and Parks',
    },
  },
  {
    id: 'green-rnd-incentives',
    title: {
      fr: 'Réduction des incitatifs des firmes à faire de la R-D verte : rôle de la taxe environnementale, de la concurrence et de la demande verte',
      en: 'Reduced incentives for firms to invest in green R&D: the role of environmental taxation, competition and green demand',
    },
    country: { fr: 'Canada (Québec)', en: 'Canada (Québec)' },
    year: 2023,
    category: 'environment',
    client: null,
  },
  {
    id: 'zimbabwe-education-health',
    title: {
      fr: "L'accès à l'enseignement secondaire améliore la santé génésique des femmes : données probantes du Zimbabwe",
      en: 'Access to secondary education improves women’s reproductive health: evidence from Zimbabwe',
    },
    country: { fr: 'Zimbabwe', en: 'Zimbabwe' },
    year: 2023,
    category: 'health',
    client: null,
  },
  {
    id: 'pigouvian-tax',
    title: {
      fr: 'La taxe pigouvienne face aux habitudes de consommation et aux préférences vertes',
      en: 'The Pigouvian tax in the face of consumption habits and green preferences',
    },
    country: { fr: 'Canada (Québec)', en: 'Canada (Québec)' },
    year: 2022,
    category: 'environment',
    client: null,
  },
  {
    id: 'gabon-targeting',
    title: { fr: 'Ciblage', en: 'Targeting' },
    country: { fr: 'Gabon', en: 'Gabon' },
    year: 2021,
    category: 'data',
    client: { fr: 'Banque mondiale', en: 'World Bank' },
  },
  {
    id: 'oif-covid-measures',
    title: {
      fr: "Collecte et compilation d'informations sur les mesures sanitaires et économiques de gestion de la pandémie de COVID-19 dans les pays membres de l'Organisation internationale de la Francophonie",
      en: 'Collection and compilation of health and economic measures taken to manage the COVID-19 pandemic in member countries of the International Organisation of La Francophonie',
    },
    country: { fr: 'Canada (Québec)', en: 'Canada (Québec)' },
    year: 2020,
    category: 'data',
    client: { fr: 'OIF (Canada)', en: 'OIF (Canada)' },
  },
  {
    id: 'sahel-women-empowerment',
    title: {
      fr: "Projet d'autonomisation des femmes et de dividende démographique au Sahel",
      en: 'Sahel Women’s Empowerment and Demographic Dividend project',
    },
    country: { fr: 'Mauritanie et Tchad', en: 'Mauritania & Chad' },
    year: 2019,
    category: 'development',
    client: { fr: 'Banque mondiale', en: 'World Bank' },
  },
  {
    id: 'guinea-mobile-cinema',
    title: {
      fr: "L'impact des événements cinématographiques mobiles sur les migrants potentiels",
      en: 'The impact of mobile cinema events on potential migrants',
    },
    country: { fr: 'Guinée', en: 'Guinea' },
    year: 2019,
    category: 'development',
    client: { fr: 'OIM', en: 'IOM' },
  },
];

/** Pays distincts couverts par les projets (Mauritanie et Tchad comptent pour deux). */
export const projectCountries = [
  'Niger',
  'Sénégal',
  'Canada',
  'Zimbabwe',
  'Gabon',
  'Mauritanie',
  'Tchad',
  'Guinée',
];
