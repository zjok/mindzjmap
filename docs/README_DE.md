<p align="center">
  <span style="font-size:58px;">🗺️</span>
</p>

<h1 align="center">MindZJ — Mindmap-Plugin für Obsidian</h1>

<p align="center">
  <em>Ein funktionsreiches, vollständig anpassbares Mindmap-Plugin, nativ entwickelt für <a href="https://obsidian.md">Obsidian</a>.</em>
</p>

<p align="center">
  <a href="#funktionen">Funktionen</a> •
  <a href="#installation">Installation</a> •
  <a href="#schnellstart">Schnellstart</a> •
  <a href="#tastenkombinationen">Tastenkombinationen</a> •
  <a href="#anpassung">Anpassung</a> •
  <a href="#entwicklung">Entwicklung</a> •
  <a href="#lizenz">Lizenz</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-0.1.0-blue" alt="Version" />
  <img src="https://img.shields.io/badge/Lizenz-AGPL--3.0-green" alt="Lizenz" />
  <img src="https://img.shields.io/badge/Obsidian-1.0.0+-purple" alt="Obsidian" />
  <img src="https://img.shields.io/badge/Plattform-Desktop%20%26%20Mobil-orange" alt="Plattform" />
</p>

<p align="center">
  <strong>🌐 README verfügbar in:</strong>
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

<p align="center">Wenn Sie MindZJ nützlich finden, unterstützen Sie bitte das Projekt</p>

---

## Vorschau

<p align="center">
  <img src="../docs/assets/mindzj_0.gif" alt="MindZJ Hauptoberfläche" width="800" />
  <br/>
  <em>Knoten erstellen, Text bearbeiten, Drag & Drop und Regenbogen-Verbindungen in Aktion</em>
</p>

<p align="center">
  <img src="../docs/assets/mindzj_2.jpg" alt="MindZJ Demo" width="800" />
  <br/>
  <em>MindZJ Hauptoberfläche — Mindmaps direkt in Obsidian erstellen, bearbeiten und gestalten</em>
</p>

<p align="center">
  <img src="../docs/assets/mindzj_3.jpg" alt="Stil-Anpassung" width="800" />
  <br/>
  <em>Globales Stil-Panel — jedes visuelle Detail Ihrer Mindmap feinjustieren</em>
</p>

---

## Funktionen

### Kern

- **Natives `.mindzj`-Dateiformat** — Dateien befinden sich in Ihrem Vault und synchronisieren mit dem Dateisystem von Obsidian
- **Unbegrenzte Wurzelknoten** — erstellen Sie mehrere unabhängige Bäume auf einer einzigen Leinwand
- **Bidirektionales Layout** — Kindknoten rechts, links oder beidseitig der Wurzel anordnen
- **Markdown-Modus** — zwischen visueller Kartenansicht und Markdown-Textbearbeitung umschalten
- **Rückgängig / Wiederholen** — vollständiger Verlaufsstapel für sicheres Experimentieren

### Bearbeitung

- **Inline-Textbearbeitung** — Doppelklick oder Leertaste drücken, um einen Knoten an Ort und Stelle zu bearbeiten
- **Tippen zum Bearbeiten** — bei ausgewähltem Knoten einfach lostippen, um direkt in den Bearbeitungsmodus zu wechseln
- **Mehrzeilenunterstützung** — Shift+Enter für Zeilenumbrüche innerhalb eines Knotens
- **Tastaturgesteuerter Workflow** — Enter für Geschwisterknoten, Tab für Kindknoten, Pfeiltasten zur Navigation
- **Mehrfachauswahl** — Shift/Ctrl-Klick oder Rahmenauswahl für Operationen auf mehreren Knoten gleichzeitig
- **Kopieren / Ausschneiden / Einfügen** — vollständige Zwischenablage-Unterstützung für Knotenbäume, einschließlich kartenübergreifendem Einfügen
- **Bei Erstellung bearbeiten** — optional sofort in den Bearbeitungsmodus wechseln, wenn neue Knoten erstellt werden

### Visuell

- **6 Verbindungslinienstile** — Bézier, Gerade, Kurve, Stufe, Klammer und Locker
- **9 integrierte Regenbogen-Paletten** — Klassisch, Pastell, Neon, Erde, Ozean, Sonnenuntergang, Wald, Bonbon, Monochrom
- **Eigene Regenbogen-Paletten** — definieren Sie Ihre eigenen Farbsequenzen für Verbindungslinien
- **Knotenindividuelle Stil-Überschreibung** — Hintergrund, Textfarbe, Schriftart, Rahmen und Eckenradius einzelner Knoten ändern
- **Knotenindividuelle Verbindungsfarbe und -breite** — die globale Verbindungsfarbe für jeden Zweig überschreiben
- **10 Schriftarten zur Auswahl** — einschließlich Systemschriften, Serifenschriften, serifenlose Schriften und Monospace-Schriften
- **5 Rahmenstile** — durchgezogen, gestrichelt, gepunktet, doppelt, keiner
- **Leinwand-Hintergrundfarbe** — passend zum Theme oder individuell einstellbar

### Interaktion

- **Drag & Drop** — Geschwister neu anordnen und Knoten per Ziehen umhängen
- **Wurzelknoten-Ziehen** — Wurzelknoten frei auf der Leinwand positionieren
- **Zoom und Schwenken** — Scrollen zum Schwenken, Shift+Scrollen oder Pinch zum Zoomen, mit konfigurierbarer Invertierung
- **Knoten fokussieren** — `F` drücken, um den ausgewählten Knoten im Ansichtsfenster zu zentrieren
- **Suche** — Ctrl+F zum Durchsuchen aller Knoten nach Text, mit Hervorhebung und Navigation der Ergebnisse

### Werkzeugleiste und Stil-Panel

- **Anpassbare Werkzeugleiste** — Position (oben/unten), Innenabstände, Hintergrund, Schaltflächenfarben und Rahmenstil
- **Dediziertes Stil-Panel** — ein rechtes Seitenpanel mit allen Stileinstellungen, organisiert in einklappbaren Abschnitten
- **Stil-Modal in der Karte** — Rechtsklick auf die Leinwand → Globaler Stil für schnelle Anpassungen, ohne die Karte zu verlassen
- **Werkzeugleiste ein-/ausblenden** — umschalten über Einstellungen, Kontextmenü oder das Stil-Panel

### Internationalisierung

- **19 Sprachen** — English, 中文, 日本語, Français, Deutsch, Español, Русский, Svenska, हिन्दी, 한국어, Português, Suomi, Norsk, Nederlands, Liechtensteinisch, Dansk, עברית, Italiano, العربية
- **Benutzerdefinierte Knotennamen** — die Standard-Bezeichnungen „Wurzel" und „Kind" pro Sprache umbenennen

### Einstellungen

- **Vollständig anpassbare Tastenkombinationen** — jede Aktion mit einem visuellen Tastenrekorder neu zuweisen
- **Scroll- und Zoom-Invertierung** — unabhängige Umschalter für vertikales Scrollen, horizontales Scrollen und Zoomrichtung
- **Entwicklermodus** — Overlay mit internem Status (Auswahl, Schwenken, Zoom, Knotenanzahl)

---

## Installation

### Über Obsidian Community Plugins (empfohlen)

> _Demnächst verfügbar — das Plugin befindet sich derzeit in der Entwicklung._

1. Öffnen Sie **Einstellungen → Community-Plugins → Durchsuchen**
2. Suchen Sie nach **MindZJ**
3. Klicken Sie auf **Installieren**, dann **Aktivieren**

### Manuelle Installation

1. Laden Sie die neueste Version (`main.js`, `manifest.json`) von den [GitHub Releases](https://github.com/zjok/mindzj/releases) herunter
2. Erstellen Sie einen Ordner in Ihrem Vault: `.obsidian/plugins/mindzj/`
3. Kopieren Sie `main.js` und `manifest.json` in diesen Ordner
4. Starten Sie Obsidian neu und aktivieren Sie **MindZJ** unter Einstellungen → Community-Plugins

---

## Schnellstart

1. Klicken Sie auf das **🗺️ Netzwerk-Symbol** im linken Ribbon, oder führen Sie den Befehl **„New MindZJ"** aus
2. Eine neue `.mindzj`-Datei wird erstellt und in der Kartenansicht geöffnet
3. **Doppelklicken** Sie auf einen Knoten oder drücken Sie die **Leertaste**, um den Text zu bearbeiten
4. Drücken Sie **Tab** für einen Kindknoten, **Enter** für einen Geschwisterknoten
5. Rechtsklick auf die Leinwand für das globale Stil-Modal, oder klicken Sie auf 🎨 **Stil** in der Werkzeugleiste, um das Stil-Panel zu öffnen

<p align="center">
  <img src="../docs/assets/mindzj_0.gif" alt="Schnellstart" width="800" />
  <br/>
  <em>In unter 30 Sekunden von null zur gestalteten Mindmap</em>
</p>

---

## Tastenkombinationen

Alle Tastenkombinationen können unter Einstellungen → MindZJ → Tastenkombinationen neu zugewiesen werden.

| Aktion                          | Standard-Tastenkombination       |
| ------------------------------- | -------------------------------- |
| Knoten bearbeiten               | `Leertaste oder Ctrl + Enter`    |
| Geschwister hinzufügen          | `Enter`                          |
| Kind hinzufügen                 | `Tab`                            |
| Linkes Kind hinzufügen          | `Shift + Tab`                    |
| Knoten fokussieren / zentrieren | `F`                              |
| Rückgängig                      | `Ctrl + Z`                       |
| Wiederholen                     | `Ctrl + Shift + Z`               |
| Knoten suchen                   | `Ctrl + F`                       |
| Knoten kopieren                 | `Ctrl + C`                       |
| Knoten ausschneiden             | `Ctrl + X`                       |
| Knoten einfügen                 | `Ctrl + V`                       |
| Knoten löschen                  | `Entf` / `Rücktaste`             |
| Navigieren                      | `↑` `↓` `←` `→`                  |
| Zeilenumbruch (beim Bearbeiten) | `Shift + Enter`                  |
| Vergrößern                      | `Shift + =`                      |
| Verkleinern                     | `Shift + -`                      |
| Zoom zurücksetzen               | `Shift + 0`                      |
| Leinwand ziehen                 | `Leertaste` halten + Maus ziehen |

---

## Anpassung

### Globaler Stil

Das globale Stil-Panel steuert das Standardaussehen aller Knoten und Verbindungen. Zugriff über:

- **Werkzeugleiste** → 🎨 Stil-Schaltfläche → öffnet das rechte Seitenpanel
- **Rechtsklick auf Leinwand** → 🎨 Globaler Stil → öffnet ein Modal in der Karte
- **Einstellungen** → MindZJ → grundlegende Stiloptionen (Leinwand-Hintergrund, Theme)

Verfügbare Stiloptionen:

| Kategorie          | Eigenschaften                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Kindknoten**     | Hintergrund, Textfarbe, Schriftgröße, Schriftart, Rahmen (Stil/Farbe/Breite/Radius), min. Breite, min. Höhe  |
| **Wurzelknoten**   | Identisch mit Kindknoten, mit unabhängigen Standardwerten                                                    |
| **Verbindung**     | Stil (6 Typen), Farbe, Breite, Länge, Richtung, Regenbogen-Aktivierung und Palette                           |
| **Auswahl**        | Auswahlkonturfarbe, Breite, Versatz; Bearbeitungskonturfarbe und -breite                                     |
| **Text**           | Ausrichtung (links/zentriert/rechts), Innenabstand, Zeilenhöhe                                               |
| **Leinwand**       | Hintergrundfarbe                                                                                             |
| **Werkzeugleiste** | Position, Innenabstände (oben/rechts/unten/links), Hintergrund, Schaltflächen-Hintergrund/-Rahmen/-Textfarbe |

### Knotenindividueller Stil

Rechtsklick auf einen beliebigen Knoten → 🎨 Stil, um dessen individuelles Erscheinungsbild zu überschreiben:

- Hintergrundfarbe, Textfarbe, Schriftgröße, Schriftart
- Rahmenstil, -farbe, -breite, -radius
- Verbindungslinienfarbe und -breite (für den zu diesem Knoten führenden Zweig)

### Regenbogen-Verbindungen

Aktivieren Sie den Regenbogen-Modus, um jeden Zweig automatisch mit einem eigenen Farbton einzufärben. Wählen Sie aus 9 integrierten Paletten oder definieren Sie eine eigene Palette mit bis zu 12 Farben.

---

## Dateiformat

MindZJ verwendet die benutzerdefinierte Dateierweiterung `.mindzj`. Der Dateiinhalt ist reines JSON:

```json
{
    "rootNodes": [
        {
            "id": "uuid",
            "text": "Wurzel",
            "x": 0,
            "y": 0,
            "width": 100,
            "height": 44,
            "children": [
                {
                    "id": "uuid",
                    "text": "Kind",
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

Die Dateien sind für Menschen lesbar und versionskontrollfreundlich. Sie synchronisieren nahtlos über Obsidian Sync, iCloud, Git oder jedes andere dateibasierte Synchronisierungswerkzeug.

---

## Entwicklung

### Voraussetzungen

- [Node.js](https://nodejs.org/) 16+
- npm

### Einrichtung

```bash
git clone https://github.com/zjok/mindzj.git
cd mindzj
npm install
```

### Kompilieren

```bash
# Entwicklungsmodus (Watch-Modus — automatische Neukompilierung bei Dateiänderungen)
npm run dev

# Produktionsmodus (einmalige Kompilierung, ohne Sourcemap, mit Tree-Shaking)
npm run build
```

### Projektstruktur

```
mindzj/
├── src/
│   ├── main.ts            # Plugin-Einstiegspunkt, Befehle, Lebenszyklus
│   ├── MindMapView.ts     # Kern-Mindmap-Ansicht: Rendering, Bearbeitung, Interaktion
│   ├── StylePanelView.ts  # Seitliches Stil-Panel rechts
│   ├── SettingsTab.ts     # Plugin-Einstellungen-Tab
│   ├── types.ts           # TypeScript-Interfaces, Standardwerte, Konstanten
│   └── i18n.ts            # 19-Sprachen-Übersetzungssystem
├── manifest.json          # Obsidian-Plugin-Manifest
├── package.json           # npm-Abhängigkeiten und -Skripte
├── tsconfig.json          # TypeScript-Konfiguration
├── esbuild.config.mjs     # Build-Konfiguration
└── main.js                # Kompilierte Ausgabe (automatisch generiert)
```

### Technologie-Stack

- **TypeScript** — strenge Typisierung für Zuverlässigkeit
- **esbuild** — schnelles Bundling mit Tree-Shaking
- **Obsidian API** — native Plugin-Integration (Views, Einstellungen, Befehle, Dateisystem)
- **SVG + foreignObject** — hardwarebeschleunigtes Rendering mit HTML-Inhalten in SVG-Knoten

---

## Unterstützung

Wenn Sie MindZJ nützlich finden, erwägen Sie bitte eine Unterstützung des Projekts:

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

## Lizenz

Dieses Projekt steht unter der [GNU Affero General Public License v3.0](LICENSE) (AGPL-3.0-or-later).

---

<p align="center">
  Mit ❤️ entwickelt von <strong>SuperJohn</strong> 2026.03
</p>
