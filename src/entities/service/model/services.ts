import type { Localized } from '@/shared/i18n';

export type ServiceArea = 'consulting' | 'training';
export type ServiceIcon =
  'statistics' | 'economics' | 'econometrics' | 'computing' | 'tutoring' | 'software' | 'capacity';

export type ServiceGroup = {
  id: string;
  area: ServiceArea;
  icon: ServiceIcon;
  title: Localized;
  summary: Localized;
  items: Localized<string[]>;
};

/** Offre de services — reprise de la page « Services » du site d'origine. */
export const serviceGroups: ServiceGroup[] = [
  {
    id: 'statistics',
    area: 'consulting',
    icon: 'statistics',
    title: { fr: 'Statistiques', en: 'Statistics' },
    summary: {
      fr: 'Des données fiables, collectées et structurées pour éclairer la décision.',
      en: 'Reliable data, collected and structured to inform decisions.',
    },
    items: {
      fr: [
        'Conception de bases de données',
        'Enquêtes et analyse statistique',
        'Collecte et traitement de données satellitaires',
        'Ciblage',
        'Suivi-évaluation',
      ],
      en: [
        'Database design',
        'Surveys and statistical analysis',
        'Satellite data collection and processing',
        'Targeting',
        'Monitoring & evaluation',
      ],
    },
  },
  {
    id: 'economics',
    area: 'consulting',
    icon: 'economics',
    title: { fr: 'Économie', en: 'Economics' },
    summary: {
      fr: 'Comprendre les dynamiques socio-économiques et mesurer le bien-être.',
      en: 'Understanding socio-economic dynamics and measuring well-being.',
    },
    items: {
      fr: [
        'Analyse socio-économique',
        'Analyse de la pauvreté, des inégalités et du bien-être',
        'Modélisation macroéconomique et microéconomique',
      ],
      en: [
        'Socio-economic analysis',
        'Poverty, inequality and well-being analysis',
        'Macroeconomic and microeconomic modelling',
      ],
    },
  },
  {
    id: 'econometrics',
    area: 'consulting',
    icon: 'econometrics',
    title: { fr: 'Économétrie', en: 'Econometrics' },
    summary: {
      fr: "Mesurer l'effet réel des programmes et des politiques publiques.",
      en: 'Measuring the real effect of programmes and public policies.',
    },
    items: {
      fr: [
        'Études expérimentales et quasi-expérimentales',
        'Analyse économétrique',
        'Science des données',
        'Modélisation économétrique',
        "Évaluation de programmes (analyse d'impact)",
      ],
      en: [
        'Experimental and quasi-experimental studies',
        'Econometric analysis',
        'Data science',
        'Econometric modelling',
        'Programme evaluation (impact analysis)',
      ],
    },
  },
  {
    id: 'computing',
    area: 'consulting',
    icon: 'computing',
    title: { fr: 'Informatique', en: 'Computing' },
    summary: {
      fr: 'Des outils numériques modernes au service de vos données.',
      en: 'Modern digital tools that put your data to work.',
    },
    items: {
      fr: [
        'Business Intelligence',
        'Intelligence artificielle appliquée',
        "Analyse spatiale et systèmes d'information géographique (SIG)",
        'Protection des données et bonnes pratiques numériques',
      ],
      en: [
        'Business Intelligence',
        'Applied artificial intelligence',
        'Spatial analysis and geographic information systems (GIS)',
        'Data protection and digital best practices',
      ],
    },
  },
  {
    id: 'tutoring',
    area: 'training',
    icon: 'tutoring',
    title: { fr: 'Soutien scolaire', en: 'Academic support' },
    summary: {
      fr: 'Un accompagnement de proximité pour la réussite des étudiants.',
      en: 'Close, personalised support for student success.',
    },
    items: {
      fr: [
        'Révision des notions de cours',
        'Aide aux travaux pratiques',
        'Aide aux travaux dirigés',
        "Correction d'anciens examens",
        'Accompagnement aux examens de synthèse',
        'Accompagnement en analyse statistique et économétrique pour la rédaction de mémoire',
      ],
      en: [
        'Course concept reviews',
        'Help with lab assignments',
        'Help with tutorial exercises',
        'Past exam corrections',
        'Comprehensive exam preparation',
        'Statistical and econometric support for thesis writing',
      ],
    },
  },
  {
    id: 'software',
    area: 'training',
    icon: 'software',
    title: { fr: 'Formation en logiciels', en: 'Software training' },
    summary: {
      fr: 'Maîtriser les outils de référence en analyse de données.',
      en: 'Master the reference tools for data analysis.',
    },
    items: {
      fr: [
        'Logiciels de conception de bases de données',
        'Programmation sur Stata, R, Python et SAS',
        'Cartographie : ArcGIS, QGIS, ArcView',
        'Reporting et visualisation de données : Power BI, Tableau',
      ],
      en: [
        'Database design software',
        'Programming in Stata, R, Python and SAS',
        'Mapping: ArcGIS, QGIS, ArcView',
        'Reporting and data visualisation: Power BI, Tableau',
      ],
    },
  },
  {
    id: 'capacity',
    area: 'training',
    icon: 'capacity',
    title: { fr: 'Renforcement de capacités', en: 'Capacity building' },
    summary: {
      fr: 'Des formations ciblées pour les équipes et les institutions.',
      en: 'Targeted training for teams and institutions.',
    },
    items: {
      fr: [
        'Évaluation de politiques publiques sur Stata',
        'Économétrie paramétrique sur R et Stata',
        'Économétrie non paramétrique sur R',
        'Science des données avec Python',
      ],
      en: [
        'Public policy evaluation with Stata',
        'Parametric econometrics with R and Stata',
        'Non-parametric econometrics with R',
        'Data science with Python',
      ],
    },
  },
];

/** Logiciels et langages cités dans l'offre de formation. */
export const toolStack = ['Stata', 'R', 'Python', 'SAS', 'ArcGIS', 'QGIS', 'Power BI', 'Tableau'];
