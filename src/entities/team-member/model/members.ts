import type { TeamMember } from './types';

/** Équipe — contenu repris de la page « À propos » du site d'origine. */
export const teamMembers: TeamMember[] = [
  {
    id: 'aboubacar-sani-bachir',
    name: 'Aboubacar Sani Bachir',
    photo: 'aboubacar',
    founder: true,
    role: {
      fr: 'Économiste principal, Président',
      en: 'Principal Economist, President',
    },
    bio: {
      fr: [
        "Doctorant en économie à l'Université Laval (Québec), il est titulaire d'un master en économétrie de l'Aix-Marseille School of Economics, d'un master en statistique de l'Université Cheikh Anta Diop de Dakar et d'une maîtrise en analyse et politique économique de l'Université Abdou Moumouni de Niamey.",
        "Sur le plan professionnel, il totalise cinq ans d'expérience comme directeur du Cabinet d'expertise statistique, suivi-évaluation et conseil agricole (CESSE-ACA).",
      ],
      en: [
        'A PhD candidate in economics at Université Laval (Québec), he holds a master’s in econometrics from the Aix-Marseille School of Economics, a master’s in statistics from Université Cheikh Anta Diop in Dakar and a master’s degree in economic analysis and policy from Université Abdou Moumouni in Niamey.',
        'Professionally, he has five years of experience as Director of the CESSE-ACA statistical expertise, monitoring & evaluation and agricultural advisory firm.',
      ],
    },
    expertise: {
      fr: [
        'Économie de la santé',
        "Économie de l'éducation",
        'Bien-être',
        'Économétrie appliquée',
        'Évaluation de politiques publiques',
      ],
      en: [
        'Health economics',
        'Education economics',
        'Welfare',
        'Applied econometrics',
        'Public policy evaluation',
      ],
    },
  },
  {
    id: 'moubarak-moundou-megna',
    name: 'Moubarak Moundou Megna',
    photo: 'moubarak',
    founder: true,
    role: {
      fr: 'Économiste modélisateur, Secrétaire général',
      en: 'Modelling Economist, Secretary General',
    },
    bio: {
      fr: [
        "Doctorant en économie à l'Université Laval (Québec). Originaire du Cameroun, il détient une licence en mathématiques de l'Université de Yaoundé I et un diplôme d'ingénieur statisticien économiste de l'Institut sous-régional de statistique et d'économie appliquée (ISSEA).",
        "Spécialisé en économie de l'environnement, il travaille sur les politiques économiques de lutte contre les changements climatiques : taxe carbone, adoption de biens moins polluants par des consommateurs soucieux de leur empreinte environnementale, et politiques stimulant l'innovation verte.",
      ],
      en: [
        'A PhD candidate in economics at Université Laval (Québec). Originally from Cameroon, he holds a bachelor’s degree in mathematics from the University of Yaoundé I and a statistician-economist engineering degree from the Sub-Regional Institute of Statistics and Applied Economics (ISSEA).',
        'Specialised in environmental economics, he works on economic policies to fight climate change: carbon taxation, the adoption of cleaner goods by environmentally conscious consumers, and policies that stimulate green innovation.',
      ],
    },
    expertise: {
      fr: [
        'Modélisation théorique',
        'Modèles dynamiques',
        "Économie de l'environnement",
        'Taxe carbone',
      ],
      en: ['Theoretical modelling', 'Dynamic models', 'Environmental economics', 'Carbon tax'],
    },
  },
  {
    id: 'horace-gninafon',
    name: 'Horace Gninafon',
    photo: 'horace',
    founder: true,
    role: { fr: 'Conseiller technique', en: 'Technical Advisor' },
    bio: {
      fr: [
        "Doctorant en économie à l'Université Laval. Ses recherches se situent à l'intersection de l'économie du développement, de l'économie de l'éducation et de la santé, de l'évaluation des politiques et de l'impact des revenus et des chocs naturels.",
        'Il a travaillé sur plusieurs études expérimentales et quasi-expérimentales dans les pays en développement. Ses travaux ont été publiés dans des revues telles que Population and Development Review.',
      ],
      en: [
        'A PhD candidate in economics at Université Laval. His research lies at the intersection of development economics, education and health economics, policy evaluation, and the impact of income and natural shocks.',
        'He has worked on several experimental and quasi-experimental studies in developing countries. His work has been published in journals such as Population and Development Review.',
      ],
    },
    expertise: {
      fr: [
        'Économie du développement',
        'Santé et éducation',
        'Études expérimentales',
        'Évaluation de politiques',
      ],
      en: [
        'Development economics',
        'Health & education',
        'Experimental studies',
        'Policy evaluation',
      ],
    },
  },
  {
    id: 'blaise-boton',
    name: 'Blaise Boton',
    photo: 'blaise',
    role: { fr: 'Économiste senior', en: 'Senior Economist' },
    bio: {
      fr: [
        "Doctorant en économie à l'Université Laval (Québec). Originaire du Bénin, il est titulaire d'un master de recherche en économie numérique de l'Université Paris-Dauphine et d'un master professionnel en analyse économique et développement international (CERDI – Université d'Auvergne).",
        "Il totalise une douzaine d'années d'expérience dans des organismes gouvernementaux et internationaux, notamment comme conseiller technique à l'économie et au suivi-évaluation chez Swisscontact au Bénin, et comme planificateur à la cellule de suivi-évaluation du ministère de l'Économie numérique et de la Communication du Bénin.",
      ],
      en: [
        'A PhD candidate in economics at Université Laval (Québec). Originally from Benin, he holds a research master’s in digital economics from Université Paris-Dauphine and a professional master’s in economic analysis and international development (CERDI – Université d’Auvergne).',
        'He has around twelve years of experience with government and international organisations, notably as technical advisor for economics and M&E at Swisscontact in Benin, and as planner in the M&E unit of Benin’s Ministry of Digital Economy and Communication.',
      ],
    },
    expertise: {
      fr: [
        'Économétrie appliquée',
        'Économie du travail',
        'Économie numérique',
        'Suivi-évaluation',
      ],
      en: [
        'Applied econometrics',
        'Labour economics',
        'Digital economics',
        'Monitoring & evaluation',
      ],
    },
  },
  {
    id: 'dieudonne-tamfutu-munsi',
    name: 'Dieudonné Tamfutu Munsi',
    honorific: 'Dr',
    photo: 'dieudonne',
    role: { fr: 'Économiste principal', en: 'Principal Economist' },
    bio: {
      fr: [
        "Chercheur postdoctoral en disciplines émergentes aux départements de management et d'économie de la Sobey School of Business depuis avril 2022. Il a obtenu son doctorat en économie à l'Université du Danemark du Sud, un Master of Arts de la Louvain School of Economics (UCLouvain) et un baccalauréat en finance et comptabilité de l'Université de Kinshasa.",
        "Ses recherches portent sur l'estimation des effets causaux des politiques publiques et des événements globaux sur la vie des populations des pays en développement, en particulier en Afrique subsaharienne.",
      ],
      en: [
        'Postdoctoral fellow in emerging disciplines in the management and economics departments of the Sobey School of Business since April 2022. He earned his PhD in economics from the University of Southern Denmark, a Master of Arts from the Louvain School of Economics (UCLouvain) and a bachelor’s in finance and accounting from the University of Kinshasa.',
        'His research estimates the causal effects of public policies and global events on the lives of people in developing countries, particularly in sub-Saharan Africa.',
      ],
    },
    expertise: {
      fr: [
        'Économie du développement',
        'Économie du travail',
        'Économie de la santé',
        'Croissance économique',
      ],
      en: ['Development economics', 'Labour economics', 'Health economics', 'Economic growth'],
    },
  },
  {
    id: 'idrissa-abdou',
    name: 'Idrissa Abdou',
    honorific: 'Dr',
    photo: 'idrissa',
    role: { fr: 'Informaticien', en: 'Computer Scientist' },
    bio: {
      fr: [
        "Doctorant en informatique au département d'informatique et de génie logiciel de l'Université Laval, après un passage accéléré depuis la maîtrise. Il est titulaire d'un master en informatique et d'un master en sciences économiques de l'Université de Caen, ainsi que d'une MIAGE de l'Institut africain d'informatique de Libreville.",
        "Auxiliaire d'enseignement à l'Université Laval et enseignant permanent à l'Université de Tahoua (Niger), il s'intéresse à l'intelligence artificielle et à la cybersécurité, notamment à l'orchestration automatique de la réponse aux cyberattaques.",
      ],
      en: [
        'A PhD candidate in computer science in the Department of Computer Science and Software Engineering at Université Laval, after a fast-track from the master’s programme. He holds master’s degrees in computer science and in economics from the University of Caen, and an MIAGE from the African Institute of Computer Science in Libreville.',
        'A teaching assistant at Université Laval and a permanent lecturer at the University of Tahoua (Niger), he focuses on artificial intelligence and cybersecurity, notably automated orchestration of responses to cyberattacks.',
      ],
    },
    expertise: {
      fr: ['Intelligence artificielle', 'Cybersécurité', 'Bases de données', 'Programmation'],
      en: ['Artificial intelligence', 'Cybersecurity', 'Databases', 'Programming'],
    },
  },
  {
    id: 'naimi-abdelmonem',
    name: 'Naimi Abdelmonem',
    photo: 'naimi',
    role: {
      fr: "Économiste principal, Représentant d'ÉconXStat en Tunisie",
      en: 'Principal Economist, ÉconXStat Representative in Tunisia',
    },
    bio: {
      fr: [
        "Titulaire d'un doctorat en sciences économiques de la Faculté des sciences économiques et de gestion de Tunis, il possède une solide expertise en statistique et en analyse de données.",
        "Fort de plusieurs années d'expérience dans l'enseignement supérieur, l'analyse statistique et l'accompagnement de projets agricoles, il a participé à des travaux de terrain sur l'efficacité des exploitations céréalières.",
      ],
      en: [
        'He holds a PhD in economics from the Faculty of Economic Sciences and Management of Tunis and has strong expertise in statistics and data analysis.',
        'With several years of experience in higher education, statistical analysis and support for agricultural projects, he has taken part in field studies on the efficiency of cereal farms.',
      ],
    },
    expertise: {
      fr: [
        'Économétrie appliquée',
        'Efficacité agricole',
        'Suivi-évaluation',
        'Politiques agricoles',
      ],
      en: [
        'Applied econometrics',
        'Farm efficiency',
        'Monitoring & evaluation',
        'Agricultural policy',
      ],
    },
  },
  {
    id: 'bintou-ball',
    name: 'Bintou Ball',
    photo: 'bintou',
    photoPosition: 'left center',
    role: {
      fr: 'Consultante en économie et analyse de données',
      en: 'Economics & Data Analysis Consultant',
    },
    bio: {
      fr: [
        "Titulaire d'un doctorat en sciences économiques de l'Université Laval, elle possède une solide formation en statistique et en économétrie. Elle a notamment effectué un séjour de recherche à l'Université d'Oxford.",
        "Elle est spécialisée dans l'analyse quantitative des problématiques économiques et sociales, notamment en microéconométrie, en économie du développement, en économie de la santé et en économie publique.",
      ],
      en: [
        'She holds a PhD in economics from Université Laval and has a strong background in statistics and econometrics, including a research visit at the University of Oxford.',
        'She specialises in the quantitative analysis of economic and social issues, notably microeconometrics, development economics, health economics and public economics.',
      ],
    },
    expertise: {
      fr: [
        'Microéconométrie appliquée',
        'Évaluation de politiques publiques',
        'Anticipations économiques',
        'Analyse statistique',
      ],
      en: [
        'Applied microeconometrics',
        'Public policy evaluation',
        'Economic expectations',
        'Statistical analysis',
      ],
    },
  },
  {
    id: 'josette-rosine-aniwuvi-gbeto',
    name: 'Josette Rosine Aniwuvi Gbeto',
    photo: 'josette',
    role: {
      fr: 'Économiste, chercheuse en économie de la santé et politiques publiques',
      en: 'Economist, Health Economics & Public Policy Researcher',
    },
    bio: {
      fr: [
        "Titulaire d'un doctorat en sciences économiques de l'Université Laval, elle a poursuivi ses recherches comme chercheuse postdoctorale à l'Université Western.",
        "Ses travaux portent sur l'économie de la santé, les interactions sociales et l'évaluation des politiques publiques, en particulier l'organisation des systèmes de santé, l'accès aux soins et les comportements économiques et sociaux.",
      ],
      en: [
        'She holds a PhD in economics from Université Laval and continued her research as a postdoctoral fellow at Western University.',
        'Her work focuses on health economics, social interactions and public policy evaluation, especially health system organisation, access to care, and economic and social behaviour.',
      ],
    },
    expertise: {
      fr: [
        'Économie de la santé',
        "Évaluation d'impact",
        'Modélisation économétrique',
        'Interactions sociales',
      ],
      en: ['Health economics', 'Impact evaluation', 'Econometric modelling', 'Social interactions'],
    },
  },
];

export const founders = teamMembers.filter((member) => member.founder);

/** Membres présentés sur l'accueil (comme sur l'ancien site : co-fondateurs + partenaire). */
export const featuredMembers = teamMembers.slice(0, 4);
