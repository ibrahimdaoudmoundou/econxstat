# ÉconXStat — site web

Refonte du site [econxstat.ca](https://econxstat.ca) (anciennement WordPress) : cabinet de conseil en
économie, statistique et science des données.

Même identité visuelle (logo, couleurs charbon / ardoise / bleus du logo, typographies Poppins et Inter,
photos d'origine), avec une base technique moderne, bilingue et maintenable.

## Stack

| Domaine      | Choix                                                               |
| ------------ | ------------------------------------------------------------------- |
| Framework    | Next.js 16 (App Router, React 19, Turbopack, Server Actions)        |
| Langage      | TypeScript strict                                                   |
| Styles       | Tailwind CSS 4 (jetons de design, thème clair / sombre)             |
| i18n         | next-intl 4 — français (par défaut, à la racine) et anglais (`/en`) |
| Architecture | Feature-Sliced Design, vérifiée par Steiger et ESLint               |
| Formulaire   | Server Action + Zod + Nodemailer (SMTP), pot de miel, limitation    |
| Animations   | Motion (désactivées si « réduire les animations » est activé)       |
| Qualité      | ESLint, Prettier, Vitest, GitHub Actions                            |
| Déploiement  | Vercel **ou** serveur dédié (build `standalone`, Docker)            |

## Démarrage

```bash
npm install
cp .env.example .env.local   # puis compléter les variables
npm run images:fetch         # récupère les images de l'ancien site (si absentes)
npm run dev                  # http://localhost:3000
```

Scripts utiles :

```bash
npm run check        # types + ESLint + architecture FSD + tests
npm run build        # build de production
npm run start        # serveur de production
npm run format       # formatage Prettier
```

## Architecture (Feature-Sliced Design)

```
app/                    Routage Next.js uniquement (délègue aux pages FSD)
  [locale]/             Pages localisées, métadonnées SEO, image Open Graph
  sitemap.ts, robots.ts, manifest.ts
proxy.ts                Détection de langue et URL localisées (next-intl)
pages/                  Dossier vide volontaire (évite le conflit avec src/pages)
src/
  app/                  Gabarit global, fournisseurs, styles, données structurées
  pages/                home, services, about, projects, contact, privacy, not-found
  widgets/              header, footer, stats-band, clients-band, cta-banner, team-grid
  features/             switch-locale, toggle-theme, contact-form, filter-projects, view-member-profile
  entities/             team-member, project, service, client  (contenus + cartes)
  shared/               ui, config (site, images), i18n (routage, messages FR/EN), lib
```

Règle d'import : une couche n'utilise que les couches inférieures
(`app → pages → widgets → features → entities → shared`), et toujours via l'`index.ts` d'une slice.
`npm run lint` et `npm run lint:fsd` font échouer la CI en cas d'écart.

## Modifier le contenu

| Contenu               | Fichier                                            |
| --------------------- | -------------------------------------------------- |
| Textes de l'interface | `src/shared/i18n/messages/fr.json` et `en.json`    |
| Membres de l'équipe   | `src/entities/team-member/model/members.ts`        |
| Projets / références  | `src/entities/project/model/projects.ts`           |
| Services              | `src/entities/service/model/services.ts`           |
| Clients               | `src/entities/client/model/clients.ts`             |
| Images                | `src/shared/config/images.json` + `public/images/` |
| Courriel, URL du site | `src/shared/config/site.ts`                        |

Les chiffres clés (projets, pays, experts) sont calculés automatiquement à partir de ces fichiers.
La section **Témoignages** affiche « Bientôt disponible » en attendant de vrais témoignages.

## Images

Les photos de l'ancien site sont versionnées dans `public/images/` (déjà optimisées :
1400–1600 px pour les photos, 800 px pour les portraits). Le site ne dépend donc plus de WordPress.

Pour ajouter ou remplacer une image : déposez le fichier dans `public/images/…`, puis déclarez-le
dans `src/shared/config/images.json`. Le script `npm run images:fetch` (lancé aussi avant chaque build)
ne retélécharge que les images manquantes depuis l'ancien site, tant que celui-ci est en ligne.

## Formulaire de contact

Le formulaire envoie un courriel via SMTP. Variables à définir (voir `.env.example`) :
`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_TO_EMAIL`,
`CONTACT_FROM_EMAIL`. En développement sans SMTP, le message est simplement affiché dans la console.

## Déploiement

### Vercel

1. Importer le dépôt dans Vercel (framework détecté automatiquement).
2. Ajouter les variables d'environnement ci-dessus et `NEXT_PUBLIC_SITE_URL`.
3. Pointer le domaine `econxstat.ca` vers Vercel.

### Serveur dédié (Docker)

```bash
cp .env.example .env      # compléter les variables
docker compose up -d --build
```

Le conteneur écoute sur `127.0.0.1:3000` ; placez-le derrière un reverse proxy (Nginx, Caddy…)
qui gère HTTPS. Sans Docker : `npm ci && npm run build && node .next/standalone/server.js`
(copier au préalable `public/` et `.next/static/` dans `.next/standalone/`).

## SEO, accessibilité, sécurité

- URL de l'ancien site redirigées en 301 (`/354-2` → `/services`, `/projet` → `/projets`, `/home` → `/en`…).
- Balises canonical et `hreflang` FR/EN, sitemap multilingue, données structurées schema.org,
  image Open Graph générée par page.
- Pages statiques pré-rendues, images AVIF/WebP, polices auto-hébergées (aucun appel externe).
- Accessibilité visée : WCAG 2.2 AA (lien d'évitement, navigation clavier, contrastes, `aria-*`,
  animations réduites sur demande).
- En-têtes de sécurité (CSP, HSTS, X-Frame-Options…), aucun témoin de suivi :
  conforme à la Loi 25 (Québec) et à la LPRPDE sans bannière de consentement.
