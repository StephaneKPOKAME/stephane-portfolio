# Portfolio — Stéphane Kpokame

Site personnel présentant mes projets : conception d'applications, d'interfaces et de visualisations 3D.

**En ligne : [stephane-kpokame.vercel.app](https://stephane-kpokame.vercel.app)**

## Contenu

- **Projets** : une page détaillée par projet (contexte, démarche, résultat).
- **Étude de cas — échangeur du carrefour IITA** : de l'étude terrain à la maquette 3D explorable en ligne.
- **Tutoriels BSIC Net** : conception des parcours d'une application bancaire.
- Site **bilingue français / anglais** et **responsive**.

## Stack

- React + Vite (JavaScript)
- Polices auto-hébergées (Anton, Hanken Grotesk)
- Images optimisées en WebP via un script Node (`sharp`)
- Déploiement sur Vercel

## Lancer le projet

```bash
npm install
npm run dev      # serveur de développement
npm run build    # version de production dans dist/
npm run lint     # vérification du code (oxlint)
```

## Organisation

```
src/
├── components/   composants de l'interface
├── data/         contenu des projets, séparé de l'affichage
└── i18n/         textes et gestion du français / anglais
public/           images, vidéos et CV
scripts/          optimisation des images
```

Le contenu des projets est séparé des composants : mettre à jour un projet ne demande de modifier que les données.

## Contact

Stéphane Kpokame — étudiant en L3 Informatique, Université Marie et Louis Pasteur
skpokame@gmail.com
