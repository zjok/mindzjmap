<p align="center">
  <span style="font-size:58px;">🗺️</span>
</p>

<h1 align="center">MindZJ — Mind Map Plugin for Obsidian</h1>

<p align="center">
  <em>A feature-rich, fully customizable mind mapping plugin built natively for <a href="https://obsidian.md">Obsidian</a>.</em>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#keyboard-shortcuts">Shortcuts</a> •
  <a href="#customization">Customization</a> •
  <a href="#development">Development</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue" alt="Version" />
  <img src="https://img.shields.io/badge/license-AGPL--3.0-green" alt="License" />
  <img src="https://img.shields.io/badge/Obsidian-1.0.0+-purple" alt="Obsidian" />
  <img src="https://img.shields.io/badge/platform-Desktop%20%26%20Mobile-orange" alt="Platform" />
</p>

<p align="center">
  <strong>🌐 README available in:</strong>
  <a href="README.md">English</a> |
  <a href="docs/README_ZH.md">中文</a> |
  <a href="docs/README_JA.md">日本語</a> |
  <a href="docs/README_FR.md">Français</a> |
  <a href="docs/README_DE.md">Deutsch</a>
  <a href="docs/README_ES.md">Español</a>
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

<p align="center">If you find MindZJ useful, consider supporting the project</p>

---

## Preview

<p align="center">
  <img src="docs/assets/mindzj_0.gif" alt="MindZJ Main Interface" width="800" />
  <br/>
  <em>Creating nodes, editing text, drag & drop, and rainbow connections in action</em>

</p>

<p align="center">
  <img src="docs/assets/mindzj_2.jpg" alt="MindZJ Demo" width="800" />
  <br/>
  <em>MindZJ main interface — create, edit, and style mind maps directly inside Obsidian</em>
</p>

<p align="center">
  <img src="docs/assets/mindzj_3.jpg" alt="Style Customization" width="800" />
  <br/>
  <em>Global Style Panel — fine-tune every visual detail of your mind map</em>
</p>

---

## Features

### Core

- **Native `.mindzj` file format** — files live in your vault and sync with Obsidian's file system
- **Unlimited root nodes** — create multiple independent trees on a single canvas
- **Bidirectional layout** — place child nodes to the right, left, or both sides of a root
- **Markdown mode** — toggle between visual map view and raw Markdown text editing
- **Undo / Redo** — full history stack for safe experimentation

### Editing

- **Inline text editing** — double-click or press Space to edit a node in place
- **Type-to-edit** — start typing while a node is selected to enter edit mode directly
- **Multi-line support** — Shift+Enter for line breaks within a single node
- **Keyboard-driven workflow** — Enter to add a sibling, Tab to add a child, arrow keys to navigate
- **Multi-select** — Shift/Ctrl-click or box-select to operate on multiple nodes at once
- **Copy / Cut / Paste** — full clipboard support for node trees, including cross-map paste
- **Edit on create** — optionally enter edit mode immediately when creating new nodes

### Visual

- **6 connection line styles** — Bezier, Straight, Curved, Step, Bracket, and Loose
- **9 built-in rainbow palettes** — Classic, Pastel, Neon, Earth, Ocean, Sunset, Forest, Candy, Monochrome
- **Custom rainbow palettes** — define your own color sequences for connection lines
- **Per-node style overrides** — change background, text color, font, border, and border radius on individual nodes
- **Per-node connection color & width** — override the global connection color for any branch
- **10 font choices** — including system fonts, serif, sans-serif, and monospace
- **5 border styles** — solid, dashed, dotted, double, none
- **Canvas background color** — match your theme or set a custom background

### Interaction

- **Drag & drop** — reorder siblings and reparent nodes by dragging
- **Root node dragging** — freely reposition root nodes on the canvas
- **Zoom & pan** — scroll to pan, Shift+scroll or pinch to zoom, with configurable inversion
- **Focus node** — press `F` to center the selected node in the viewport
- **Search** — Ctrl+F to search all nodes by text, with result highlighting and navigation

### Toolbar & Style Panel

- **Customizable toolbar** — position (top / bottom), padding, background, button colors, and border style
- **Dedicated Style Panel** — a right-side panel with every style setting organized into collapsible sections
- **In-map style modal** — right-click the canvas → Global Style for quick adjustments without leaving the map
- **Show / hide toolbar** — toggle from settings, right-click menu, or the style panel

### Internationalization

- **19 languages** — English, 中文, 日本語, Français, Deutsch, Español, Русский, Svenska, हिन्दी, 한국어, Português, Suomi, Norsk, Nederlands, Liechtensteinisch, Dansk, עברית, Italiano, العربية
- **Custom node names** — rename the default "Root" and "Child" labels per language

### Settings

- **Fully customizable keyboard shortcuts** — rebind every action with a visual key recorder
- **Scroll & zoom inversion** — independent toggles for vertical scroll, horizontal scroll, and zoom direction
- **Developer mode** — overlay showing internal state (selection, pan, zoom, node count)

---

## Installation

### From Obsidian Community Plugins (Recommended)

> _Coming soon — the plugin is currently in development._

1. Open **Settings → Community Plugins → Browse**
2. Search for **MindZJ**
3. Click **Install**, then **Enable**

### Manual Installation

1. Download the latest release (`main.js`, `manifest.json`) from [GitHub Releases](https://github.com/zjok/mindzj/releases)
2. Create a folder in your vault: `.obsidian/plugins/mindzj/`
3. Copy `main.js` and `manifest.json` into that folder
4. Restart Obsidian, then enable **MindZJ** in Settings → Community Plugins

---

## Quick Start

1. Click the **🗺️ network icon** in the left ribbon, or run the command **"New MindZJ"**
2. A new `.mindzj` file is created and opened in map view
3. **Double-click** a node or press **Space** to edit its text
4. Press **Tab** to add a child node, **Enter** to add a sibling
5. Right-click the canvas to access the global style modal, or click 🎨 **Style** in the toolbar to open the style panel

<p align="center">
  <img src="docs/assets/mindzj_0.gif" alt="Quick Start" width="800" />
  <br/>
  <em>From zero to a styled mind map in under 30 seconds</em>
</p>

---

## Keyboard Shortcuts

All shortcuts are rebindable in Settings → MindZJ → Keyboard Shortcuts.

| Action               | Default Shortcut          |
| -------------------- | ------------------------- |
| Edit node            | `Space or Ctrl + Enter`   |
| Add sibling          | `Enter`                   |
| Add child            | `Tab`                     |
| Add left child       | `Shift+Tab`               |
| Focus / center node  | `F`                       |
| Undo                 | `Ctrl + Z`                |
| Redo                 | `Ctrl + Shift + Z`        |
| Search nodes         | `Ctrl + F`                |
| Copy node            | `Ctrl + C`                |
| Cut node             | `Ctrl + X`                |
| Paste node           | `Ctrl + V`                |
| Delete node          | `Delete` / `Backspace`    |
| Navigate             | `↑` `↓` `←` `→`           |
| Line break (in edit) | `Shift + Enter`           |
| Zoom in              | `Shift + =`               |
| Zoom out             | `Shift + -`               |
| Reset zoom           | `Shift + 0`               |
| Pan canvas           | Hold `Space` + mouse drag |

---

## Customization

### Global Style

The Global Style panel controls the default appearance of all nodes and connections. Access it via:

- **Toolbar** → 🎨 Style button → opens the right-side panel
- **Right-click canvas** → 🎨 Global Style → opens an in-map modal
- **Settings** → MindZJ → basic style options (canvas background, theme)

Available style options include:

| Category       | Properties                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| **Child Node** | Background, text color, font size, font family, border (style/color/width/radius), min width, min height |
| **Root Node**  | Same as child node, with independent defaults                                                            |
| **Connection** | Style (6 types), color, width, length, direction, rainbow toggle & palette                               |
| **Selection**  | Selection outline color, width, offset; edit outline color & width                                       |
| **Text**       | Alignment (left/center/right), padding, line height                                                      |
| **Canvas**     | Background color                                                                                         |
| **Toolbar**    | Position, padding (top/right/bottom/left), background, button background/border/text colors              |

### Per-Node Style

Right-click any node → 🎨 Style to override its individual appearance:

- Background color, text color, font size, font family
- Border style, color, width, radius
- Connection line color and width (for the branch leading to this node)

### Rainbow Connections

Enable rainbow mode to automatically color each branch with a distinct hue. Choose from 9 built-in palettes or define a custom one with up to 12 colors.

---

## File Format

MindZJ uses a custom `.mindzj` file extension. The file content is plain JSON:

```json
{
    "rootNodes": [
        {
            "id": "uuid",
            "text": "Root",
            "x": 0,
            "y": 0,
            "width": 100,
            "height": 44,
            "children": [
                {
                    "id": "uuid",
                    "text": "Child",
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

Files are human-readable and version-control friendly. They sync seamlessly across devices via Obsidian Sync, iCloud, Git, or any file-based sync tool.

---

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) 16+
- npm

### Setup

```bash
git clone https://github.com/zjok/mindzj.git
cd mindzj
npm install
```

### Build

```bash
# Development (watch mode — auto-rebuilds on file changes)
npm run dev

# Production (single build, no sourcemap, tree-shaken)
npm run build
```

### Project Structure

```
mindzj/
├── src/
│   ├── main.ts            # Plugin entry point, commands, lifecycle
│   ├── MindMapView.ts     # Core mind map view: rendering, editing, interaction
│   ├── StylePanelView.ts  # Right-side style panel view
│   ├── SettingsTab.ts     # Plugin settings tab
│   ├── types.ts           # TypeScript interfaces, defaults, constants
│   └── i18n.ts            # 19-language translation system
├── manifest.json          # Obsidian plugin manifest
├── package.json           # npm dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── esbuild.config.mjs     # Build configuration
└── main.js                # Compiled output (generated)
```

### Technology Stack

- **TypeScript** — strict typing for reliability
- **esbuild** — fast bundling with tree-shaking
- **Obsidian API** — native plugin integration (views, settings, commands, file system)
- **SVG + foreignObject** — hardware-accelerated rendering with HTML content inside SVG nodes

---

## Support

If you find MindZJ useful, consider supporting the project:

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

## License

This project is licensed under the [GNU Affero General Public License v3.0](LICENSE) (AGPL-3.0-or-later).

---

<p align="center">
  Made with ❤️ by <strong>SuperJohn</strong> 2026.03
</p>
