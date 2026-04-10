<h1 align="center">
  <span style="font-size:58px;">🗺️</span>
</h1>

<h1 align="center">MindZJMap — Plugin de carte mentale pour MindZJ & Obsidian</h1>

<p align="center">
  <em>Un plugin de carte mentale riche en fonctionnalités et entièrement personnalisable, conçu nativement pour <a href="https://obsidian.md">Obsidian</a>.</em>
</p>

<p align="center">
  <a href="#fonctionnalités">Fonctionnalités</a> •
  <a href="#installation">Installation</a> •
  <a href="#démarrage-rapide">Démarrage rapide</a> •
  <a href="#raccourcis-clavier">Raccourcis</a> •
  <a href="#personnalisation">Personnalisation</a> •
  <a href="#développement">Développement</a> •
  <a href="#licence">Licence</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue" alt="Version" />
  <img src="https://img.shields.io/badge/licence-AGPL--3.0-green" alt="Licence" />
  <img src="https://img.shields.io/badge/Obsidian-1.11.7+-purple" alt="Obsidian" />
  <img src="https://img.shields.io/badge/Platform-Windows%20%26%20macOS%20%26%20Linux-orange" alt="Platform" />
</p>

<p align="center">
  <strong>🌐 README disponible en :</strong>
  <a href="../README.md">English</a> |
  <a href="README_ZH.md">中文</a> |
  <a href="README_JA.md">日本語</a> |
  <a href="README_FR.md">Français</a> |
  <a href="README_DE.md">Deutsch</a> |
  <a href="README_ES.md">Español</a>
</p>

---

<p align="center">
  <a href="https://www.buymeacoffee.com/superjohn">
    <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me A Coffee" />
  </a>
  &nbsp;
  <a href="https://ko-fi.com/superjohn">
    <img src="https://img.shields.io/badge/Ko--fi-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white" alt="Ko-fi" />
  </a>
  &nbsp;
  <a href="https://paypal.me/TanCat997">
    <img src="https://img.shields.io/badge/PayPal-0070ba?style=for-the-badge&logo=paypal&logoColor=white" alt="PayPal" />
  </a>
</p>

<p align="center">Si vous trouvez MindZJMap utile, pensez à soutenir le projet</p>

---

## Aperçu

<p align="center">
  <img src="../docs/assets/mindzj_0.gif" alt="Interface principale de MindZJ" width="800" />
  <br/>
  <em>Création de nœuds, édition de texte, glisser-déposer et connexions arc-en-ciel en action</em>
</p>

<p align="center">
  <img src="../docs/assets/mindzj_2.jpg" alt="Démonstration de MindZJ" width="800" />
  <br/>
  <em>Interface principale de MindZJ — créez, modifiez et stylisez vos cartes mentales directement dans Obsidian</em>
</p>

<p align="center">
  <img src="../docs/assets/mindzj_3.jpg" alt="Personnalisation des styles" width="800" />
  <br/>
  <em>Panneau de style global — ajustez chaque détail visuel de votre carte mentale</em>
</p>

---

## Fonctionnalités

### Cœur

- **Format de fichier natif `.mindzj`** — les fichiers résident dans votre coffre-fort et se synchronisent avec le système de fichiers d'Obsidian
- **Nœuds racines illimités** — créez plusieurs arbres indépendants sur un seul canevas
- **Disposition bidirectionnelle** — placez les nœuds enfants à droite, à gauche ou des deux côtés de la racine
- **Mode Markdown** — basculez entre la vue carte visuelle et l'édition de texte Markdown brut
- **Annuler / Refaire** — pile d'historique complète pour expérimenter en toute sécurité

### Édition

- **Édition de texte en ligne** — double-cliquez ou appuyez sur Espace pour modifier un nœud sur place
- **Saisie pour éditer** — commencez à taper pendant qu'un nœud est sélectionné pour entrer directement en mode édition
- **Support multi-ligne** — Shift+Entrée pour les retours à la ligne dans un nœud
- **Flux de travail au clavier** — Entrée pour ajouter un frère, Tab pour ajouter un enfant, touches fléchées pour naviguer
- **Sélection multiple** — Shift/Ctrl-clic ou sélection par rectangle pour opérer sur plusieurs nœuds à la fois
- **Copier / Couper / Coller** — support complet du presse-papiers pour les arborescences de nœuds, y compris le collage entre cartes
- **Éditer à la création** — option pour entrer en mode édition immédiatement lors de la création de nouveaux nœuds

### Visuel

- **6 styles de lignes de connexion** — Bézier, Droite, Courbe, Escalier, Crochet et Lâche
- **9 palettes arc-en-ciel intégrées** — Classique, Pastel, Néon, Terre, Océan, Coucher de soleil, Forêt, Bonbon, Monochrome
- **Palettes arc-en-ciel personnalisées** — définissez vos propres séquences de couleurs pour les lignes de connexion
- **Surcharge de style par nœud** — modifiez l'arrière-plan, la couleur du texte, la police, la bordure et le rayon de bordure sur des nœuds individuels
- **Couleur et largeur de connexion par nœud** — surchargez la couleur de connexion globale pour n'importe quelle branche
- **10 choix de polices** — y compris polices système, avec empattement, sans empattement et à chasse fixe
- **5 styles de bordure** — plein, tirets, pointillés, double, aucun
- **Couleur de fond du canevas** — assortie à votre thème ou personnalisée

### Interaction

- **Glisser-déposer** — réorganisez les frères et changez le parent des nœuds par glissement
- **Déplacement des nœuds racines** — repositionnez librement les nœuds racines sur le canevas
- **Zoom et panoramique** — défilement pour le panoramique, Shift+défilement ou pincement pour le zoom, avec inversion configurable
- **Focaliser un nœud** — appuyez sur `F` pour centrer le nœud sélectionné dans la vue
- **Recherche** — Ctrl+F pour rechercher tous les nœuds par texte, avec mise en surbrillance et navigation des résultats

### Barre d'outils et panneau de style

- **Barre d'outils personnalisable** — position (haut/bas), marges intérieures, arrière-plan, couleurs des boutons et style de bordure
- **Panneau de style dédié** — un panneau latéral droit avec tous les paramètres de style organisés en sections repliables
- **Fenêtre modale de style dans la carte** — clic droit sur le canevas → Style global pour des ajustements rapides sans quitter la carte
- **Afficher / masquer la barre d'outils** — basculez depuis les paramètres, le menu contextuel ou le panneau de style

### Internationalisation

- **19 langues** — English, 中文, 日本語, Français, Deutsch, Español, Русский, Svenska, हिन्दी, 한국어, Português, Suomi, Norsk, Nederlands, Liechtensteinisch, Dansk, עברית, Italiano, العربية
- **Noms de nœuds personnalisés** — renommez les libellés par défaut « Racine » et « Enfant » pour chaque langue

### Paramètres

- **Raccourcis clavier entièrement personnalisables** — réattribuez chaque action avec un enregistreur de touches visuel
- **Inversion du défilement et du zoom** — bascules indépendantes pour le défilement vertical, horizontal et la direction du zoom
- **Mode développeur** — superposition affichant l'état interne (sélection, panoramique, zoom, nombre de nœuds)

---

## Installation

### Depuis les plugins communautaires Obsidian (recommandé)

> _Bientôt disponible — le plugin est actuellement en développement._

1. Ouvrez **Paramètres → Plugins communautaires → Parcourir**
2. Recherchez **MindZJ**
3. Cliquez sur **Installer**, puis **Activer**

### Installation manuelle

1. Téléchargez la dernière version (`main.js`, `manifest.json`) depuis les [Releases GitHub](https://github.com/zjok/mindzj/releases)
2. Créez un dossier dans votre coffre-fort : `.obsidian/plugins/mindzj/`
3. Copiez `main.js` et `manifest.json` dans ce dossier
4. Redémarrez Obsidian, puis activez **MindZJ** dans Paramètres → Plugins communautaires

---

## Démarrage rapide

1. Cliquez sur l'**icône réseau 🗺️** dans le ruban gauche, ou exécutez la commande **« New MindZJ »**
2. Un nouveau fichier `.mindzj` est créé et ouvert en vue carte
3. **Double-cliquez** sur un nœud ou appuyez sur **Espace** pour modifier son texte
4. Appuyez sur **Tab** pour ajouter un enfant, **Entrée** pour ajouter un frère
5. Faites un clic droit sur le canevas pour accéder à la fenêtre modale de style global, ou cliquez sur 🎨 **Style** dans la barre d'outils pour ouvrir le panneau de style

<p align="center">
  <img src="../docs/assets/mindzj_0.gif" alt="Démarrage rapide" width="800" />
  <br/>
  <em>De zéro à une carte mentale stylisée en moins de 30 secondes</em>
</p>

---

## Raccourcis clavier

Tous les raccourcis sont modifiables dans Paramètres → MindZJ → Raccourcis clavier.

| Action                         | Raccourci par défaut         |
| ------------------------------ | ---------------------------- |
| Modifier le nœud               | `Espace ou Ctrl + Entrée`    |
| Ajouter un frère               | `Entrée`                     |
| Ajouter un enfant              | `Tab`                        |
| Ajouter un enfant à gauche     | `Shift + Tab`                |
| Focaliser / centrer le nœud    | `F`                          |
| Annuler                        | `Ctrl + Z`                   |
| Refaire                        | `Ctrl + Shift + Z`           |
| Rechercher des nœuds           | `Ctrl + F`                   |
| Copier le nœud                 | `Ctrl + C`                   |
| Couper le nœud                 | `Ctrl + X`                   |
| Coller le nœud                 | `Ctrl + V`                   |
| Supprimer le nœud              | `Suppr` / `Retour arrière`   |
| Naviguer                       | `↑` `↓` `←` `→`              |
| Retour à la ligne (en édition) | `Shift + Entrée`             |
| Zoom avant                     | `Shift + =`                  |
| Zoom arrière                   | `Shift + -`                  |
| Réinitialiser le zoom          | `Shift + 0`                  |
| Déplacer le canevas            | Maintenir `Espace` + glisser |

---

## Personnalisation

### Style global

Le panneau de style global contrôle l'apparence par défaut de tous les nœuds et connexions. Accédez-y via :

- **Barre d'outils** → bouton 🎨 Style → ouvre le panneau latéral droit
- **Clic droit sur le canevas** → 🎨 Style global → ouvre une fenêtre modale dans la carte
- **Paramètres** → MindZJ → options de style de base (fond du canevas, thème)

Les options de style disponibles comprennent :

| Catégorie          | Propriétés                                                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Nœud enfant**    | Arrière-plan, couleur du texte, taille de police, famille de police, bordure (style/couleur/largeur/rayon), largeur min., hauteur min. |
| **Nœud racine**    | Identique au nœud enfant, avec des valeurs par défaut indépendantes                                                                    |
| **Connexion**      | Style (6 types), couleur, largeur, longueur, direction, activation arc-en-ciel et palette                                              |
| **Sélection**      | Couleur du contour de sélection, largeur, décalage ; couleur et largeur du contour d'édition                                           |
| **Texte**          | Alignement (gauche/centré/droite), marge intérieure, hauteur de ligne                                                                  |
| **Canevas**        | Couleur de fond                                                                                                                        |
| **Barre d'outils** | Position, marges (haut/droite/bas/gauche), arrière-plan, arrière-plan des boutons/bordure/couleur du texte                             |

### Style par nœud

Faites un clic droit sur n'importe quel nœud → 🎨 Style pour surcharger son apparence individuelle :

- Couleur de fond, couleur du texte, taille de police, famille de police
- Style, couleur, largeur et rayon de bordure
- Couleur et largeur de la ligne de connexion (pour la branche menant à ce nœud)

### Connexions arc-en-ciel

Activez le mode arc-en-ciel pour colorer automatiquement chaque branche avec une teinte distincte. Choisissez parmi 9 palettes intégrées ou définissez une palette personnalisée avec jusqu'à 12 couleurs.

---

## Format de fichier

MindZJ utilise une extension de fichier personnalisée `.mindzj`. Le contenu du fichier est du JSON pur :

```json
{
    "rootNodes": [
        {
            "id": "uuid",
            "text": "Racine",
            "x": 0,
            "y": 0,
            "width": 100,
            "height": 44,
            "children": [
                {
                    "id": "uuid",
                    "text": "Enfant",
                    "x": 0,
                    "y": 0,
                    "width": 80,
                    "height": 32,
                    "children": []
                }
            ],
            "isRoot": true
        }
    ]
}
```

Les fichiers sont lisibles par l'homme et compatibles avec le contrôle de version. Ils se synchronisent parfaitement entre les appareils via Obsidian Sync, iCloud, Git ou tout autre outil de synchronisation basé sur les fichiers.

---

## Développement

### Prérequis

- [Node.js](https://nodejs.org/) 16+
- npm

### Configuration

```bash
git clone https://github.com/zjok/mindzj.git
cd mindzj
npm install
```

### Compilation

```bash
# Développement (mode surveillance — recompilation automatique lors des modifications de fichiers)
npm run dev

# Production (compilation unique, sans sourcemap, avec tree-shaking)
npm run build
```

### Structure du projet

```
mindzj/
├── src/
│   ├── main.ts            # Point d'entrée du plugin, commandes, cycle de vie
│   ├── MindMapView.ts     # Vue principale de la carte mentale : rendu, édition, interaction
│   ├── StylePanelView.ts  # Vue du panneau de style latéral droit
│   ├── SettingsTab.ts     # Onglet des paramètres du plugin
│   ├── types.ts           # Interfaces TypeScript, valeurs par défaut, constantes
│   └── i18n.ts            # Système de traduction en 19 langues
├── manifest.json          # Manifeste du plugin Obsidian
├── package.json           # Dépendances et scripts npm
├── tsconfig.json          # Configuration TypeScript
├── esbuild.config.mjs     # Configuration de compilation
└── main.js                # Sortie compilée (générée automatiquement)
```

### Pile technologique

- **TypeScript** — typage strict pour la fiabilité
- **esbuild** — empaquetage rapide avec tree-shaking
- **API Obsidian** — intégration native du plugin (vues, paramètres, commandes, système de fichiers)
- **SVG + foreignObject** — rendu accéléré par le matériel avec du contenu HTML à l'intérieur des nœuds SVG

---

## Soutenir le projet

Si vous trouvez MindZJMap utile, pensez à soutenir le projet :

<p align="center">
  <a href="https://www.buymeacoffee.com/superjohn">
    <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me A Coffee" />
  </a>
  &nbsp;
  <a href="https://ko-fi.com/superjohn">
    <img src="https://img.shields.io/badge/Ko--fi-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white" alt="Ko-fi" />
  </a>
  &nbsp;
  <a href="https://paypal.me/TanCat997">
    <img src="https://img.shields.io/badge/PayPal-0070ba?style=for-the-badge&logo=paypal&logoColor=white" alt="PayPal" />
  </a>
</p>

---

## Licence

Ce projet est distribué sous la [Licence publique générale GNU Affero v3.0](LICENSE) (AGPL-3.0-or-later).

---

<p align="center">
  Fait avec ❤️ par <strong>SuperJohn</strong> 2026.03
</p>
