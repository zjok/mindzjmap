<h1 align="center">
  <span style="font-size:58px;">🗺️</span>
</h1>

<h1 align="center">MindZJMap — Plugin de mapa mental para MandZJ & Obsidian</h1>

<p align="center">
  <em>Un plugin de mapas mentales rico en funciones y totalmente personalizable, desarrollado nativamente para <a href="https://obsidian.md">Obsidian</a>.</em>
</p>

<p align="center">
  <a href="#características">Características</a> •
  <a href="#instalación">Instalación</a> •
  <a href="#inicio-rápido">Inicio rápido</a> •
  <a href="#atajos-de-teclado">Atajos</a> •
  <a href="#personalización">Personalización</a> •
  <a href="#desarrollo">Desarrollo</a> •
  <a href="#licencia">Licencia</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/versión-0.1.0-blue" alt="Versión" />
  <img src="https://img.shields.io/badge/licencia-AGPL--3.0-green" alt="Licencia" />
  <img src="https://img.shields.io/badge/Obsidian-1.11.7+-purple" alt="Obsidian" />
  <img src="https://img.shields.io/badge/plataforma-Escritorio-orange" alt="Plataforma" />
</p>

<p align="center">
  <strong>🌐 README disponible en:</strong>
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

<p align="center">Si MindZJMap te resulta útil, considera apoyar el proyecto</p>

---

## Vista previa

<p align="center">
  <img src="../docs/assets/mindzj_0.gif" alt="Interfaz principal de MindZJMap" width="800" />
  <br/>
  <em>Creación de nodos, edición de texto, arrastrar y soltar, y conexiones arcoíris en acción</em>
</p>

<p align="center">
  <img src="../docs/assets/mindzj_2.jpg" alt="Demostración de MindZJMap" width="800" />
  <br/>
  <em>Interfaz principal de MindZJMap — crea, edita y estiliza mapas mentales directamente en Obsidian</em>
</p>

<p align="center">
  <img src="../docs/assets/mindzj_3.jpg" alt="Personalización de estilos" width="800" />
  <br/>
  <em>Panel de estilo global — ajusta cada detalle visual de tu mapa mental</em>
</p>

---

## Características

### Núcleo

- **Formato de archivo nativo `.mindzj`** — los archivos residen en tu bóveda y se sincronizan con el sistema de archivos de Obsidian
- **Nodos raíz ilimitados** — crea múltiples árboles independientes en un solo lienzo
- **Diseño bidireccional** — coloca nodos hijos a la derecha, a la izquierda o a ambos lados de la raíz
- **Modo Markdown** — alterna entre la vista visual del mapa y la edición de texto Markdown en bruto
- **Deshacer / Rehacer** — pila de historial completa para experimentar con seguridad

### Edición

- **Edición de texto en línea** — haz doble clic o pulsa Espacio para editar un nodo en el lugar
- **Teclear para editar** — empieza a escribir mientras un nodo está seleccionado para entrar directamente en el modo de edición
- **Soporte multilínea** — Shift+Enter para saltos de línea dentro de un solo nodo
- **Flujo de trabajo por teclado** — Enter para añadir un hermano, Tab para añadir un hijo, teclas de dirección para navegar
- **Selección múltiple** — Shift/Ctrl-clic o selección por recuadro para operar con varios nodos a la vez
- **Copiar / Cortar / Pegar** — soporte completo del portapapeles para árboles de nodos, incluyendo pegado entre mapas
- **Editar al crear** — opcionalmente entra en modo de edición inmediatamente al crear nuevos nodos

### Visual

- **6 estilos de líneas de conexión** — Bézier, Recta, Curva, Escalón, Corchete y Suelta
- **9 paletas arcoíris integradas** — Clásica, Pastel, Neón, Tierra, Océano, Atardecer, Bosque, Caramelo, Monocromo
- **Paletas arcoíris personalizadas** — define tus propias secuencias de colores para las líneas de conexión
- **Estilos individuales por nodo** — cambia el fondo, color del texto, fuente, borde y radio de borde en nodos individuales
- **Color y grosor de conexión por nodo** — anula el color de conexión global para cualquier rama
- **10 opciones de fuentes** — incluyendo fuentes del sistema, serif, sans-serif y monoespaciada
- **5 estilos de borde** — sólido, discontinuo, punteado, doble, ninguno
- **Color de fondo del lienzo** — combínalo con tu tema o establece un fondo personalizado

### Interacción

- **Arrastrar y soltar** — reordena hermanos y cambia el padre de los nodos arrastrándolos
- **Arrastre de nodos raíz** — reposiciona libremente los nodos raíz en el lienzo
- **Zoom y desplazamiento** — desplázate para mover el lienzo, Shift+desplazamiento o pellizco para zoom, con inversión configurable
- **Enfocar nodo** — pulsa `F` para centrar el nodo seleccionado en la ventana
- **Búsqueda** — Ctrl+F para buscar en todos los nodos por texto, con resaltado de resultados y navegación

### Barra de herramientas y panel de estilos

- **Barra de herramientas personalizable** — posición (arriba / abajo), relleno, fondo, colores de botones y estilo de borde
- **Panel de estilos dedicado** — un panel lateral derecho con cada ajuste de estilo organizado en secciones plegables
- **Modal de estilo en el mapa** — clic derecho en el lienzo → Estilo global para ajustes rápidos sin salir del mapa
- **Mostrar / ocultar barra de herramientas** — alterna desde los ajustes, el menú contextual o el panel de estilos

### Internacionalización

- **19 idiomas** — English, 中文, 日本語, Français, Deutsch, Español, Русский, Svenska, हिन्दी, 한국어, Português, Suomi, Norsk, Nederlands, Liechtensteinisch, Dansk, עברית, Italiano, العربية
- **Nombres de nodos personalizados** — renombra las etiquetas predeterminadas «Raíz» e «Hijo» por idioma

### Ajustes

- **Atajos de teclado totalmente personalizables** — reasigna cada acción con un grabador de teclas visual
- **Inversión de desplazamiento y zoom** — interruptores independientes para desplazamiento vertical, horizontal y dirección de zoom
- **Modo desarrollador** — superposición que muestra el estado interno (selección, desplazamiento, zoom, cantidad de nodos)

---

## Instalación

### Desde los plugins de la comunidad de Obsidian (recomendado)

> _Próximamente — el plugin está actualmente en desarrollo._

1. Abre **Ajustes → Plugins de la comunidad → Explorar**
2. Busca **MindZJ**
3. Haz clic en **Instalar** y luego en **Activar**

### Instalación manual

1. Descarga la última versión (`main.js`, `manifest.json`) desde [GitHub Releases](https://github.com/zjok/mindzj/releases)
2. Crea una carpeta en tu bóveda: `.obsidian/plugins/mindzj/`
3. Copia `main.js` y `manifest.json` en esa carpeta
4. Reinicia Obsidian y luego activa **MindZJ** en Ajustes → Plugins de la comunidad

---

## Inicio rápido

1. Haz clic en el **icono de red 🗺️** en la cinta lateral izquierda, o ejecuta el comando **«New MindZJ»**
2. Se crea un nuevo archivo `.mindzj` y se abre en la vista de mapa
3. **Haz doble clic** en un nodo o pulsa **Espacio** para editar su texto
4. Pulsa **Tab** para añadir un nodo hijo, **Enter** para añadir un hermano
5. Haz clic derecho en el lienzo para acceder al modal de estilo global, o haz clic en 🎨 **Estilo** en la barra de herramientas para abrir el panel de estilos

<p align="center">
  <img src="../docs/assets/mindzj_0.gif" alt="Inicio rápido" width="800" />
  <br/>
  <em>De cero a un mapa mental con estilo en menos de 30 segundos</em>
</p>

---

## Atajos de teclado

Todos los atajos se pueden reasignar en Ajustes → MindZJ → Atajos de teclado.

| Acción                      | Atajo predeterminado                 |
| --------------------------- | ------------------------------------ |
| Editar nodo                 | `Espacio o Ctrl + Enter`             |
| Añadir hermano              | `Enter`                              |
| Añadir hijo                 | `Tab`                                |
| Añadir hijo izquierdo       | `Shift + Tab`                        |
| Enfocar / centrar nodo      | `F`                                  |
| Deshacer                    | `Ctrl + Z`                           |
| Rehacer                     | `Ctrl + Shift + Z`                   |
| Buscar nodos                | `Ctrl + F`                           |
| Copiar nodo                 | `Ctrl + C`                           |
| Cortar nodo                 | `Ctrl + X`                           |
| Pegar nodo                  | `Ctrl + V`                           |
| Eliminar nodo               | `Supr` / `Retroceso`                 |
| Navegar                     | `↑` `↓` `←` `→`                      |
| Salto de línea (en edición) | `Shift + Enter`                      |
| Acercar                     | `Shift + =`                          |
| Alejar                      | `Shift + -`                          |
| Restablecer zoom            | `Shift + 0`                          |
| Desplazar lienzo            | Mantener `Espacio` + arrastrar ratón |

---

## Personalización

### Estilo global

El panel de estilo global controla la apariencia predeterminada de todos los nodos y conexiones. Accede a él a través de:

- **Barra de herramientas** → botón 🎨 Estilo → abre el panel lateral derecho
- **Clic derecho en el lienzo** → 🎨 Estilo global → abre un modal dentro del mapa
- **Ajustes** → MindZJ → opciones básicas de estilo (fondo del lienzo, tema)

Las opciones de estilo disponibles incluyen:

| Categoría     | Propiedades                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Nodo hijo** | Fondo, color del texto, tamaño de fuente, familia tipográfica, borde (estilo/color/grosor/radio), ancho mín., alto mín. |
| **Nodo raíz** | Igual que el nodo hijo, con valores predeterminados independientes                                                      |
| **Conexión**  | Estilo (6 tipos), color, grosor, longitud, dirección, activar arcoíris y paleta                                         |
| **Selección** | Color del contorno de selección, grosor, desplazamiento; color y grosor del contorno de edición                         |
| **Texto**     | Alineación (izquierda/centro/derecha), relleno, altura de línea                                                         |
| **Lienzo**    | Color de fondo                                                                                                          |
| **Barra**     | Posición, relleno (arriba/derecha/abajo/izquierda), fondo, fondo/borde/color de texto de botones                        |

### Estilo individual por nodo

Haz clic derecho en cualquier nodo → 🎨 Estilo para anular su apariencia individual:

- Color de fondo, color del texto, tamaño de fuente, familia tipográfica
- Estilo de borde, color, grosor, radio
- Color y grosor de la línea de conexión (para la rama que conduce a este nodo)

### Conexiones arcoíris

Activa el modo arcoíris para colorear automáticamente cada rama con un tono distinto. Elige entre 9 paletas integradas o define una personalizada con hasta 12 colores.

---

## Formato de archivo

MindZJ utiliza una extensión de archivo personalizada `.mindzj`. El contenido del archivo es JSON puro:

```json
{
    "rootNodes": [
        {
            "id": "uuid",
            "text": "Raíz",
            "x": 0,
            "y": 0,
            "width": 100,
            "height": 44,
            "children": [
                {
                    "id": "uuid",
                    "text": "Hijo",
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

Los archivos son legibles por humanos y compatibles con el control de versiones. Se sincronizan perfectamente entre dispositivos a través de Obsidian Sync, iCloud, Git o cualquier herramienta de sincronización basada en archivos.

---

## Desarrollo

### Requisitos previos

- [Node.js](https://nodejs.org/) 16+
- npm

### Configuración

```bash
git clone https://github.com/zjok/mindzj.git
cd mindzj
npm install
```

### Compilación

```bash
# Desarrollo (modo vigilancia — recompilación automática al cambiar archivos)
npm run dev

# Producción (compilación única, sin sourcemap, con tree-shaking)
npm run build
```

### Estructura del proyecto

```
mindzj/
├── src/
│   ├── main.ts            # Punto de entrada del plugin, comandos, ciclo de vida
│   ├── MindMapView.ts     # Vista principal del mapa mental: renderizado, edición, interacción
│   ├── StylePanelView.ts  # Vista del panel de estilos lateral
│   ├── SettingsTab.ts     # Pestaña de ajustes del plugin
│   ├── types.ts           # Interfaces TypeScript, valores predeterminados, constantes
│   └── i18n.ts            # Sistema de traducción en 19 idiomas
├── manifest.json          # Manifiesto del plugin de Obsidian
├── package.json           # Dependencias y scripts de npm
├── tsconfig.json          # Configuración de TypeScript
├── esbuild.config.mjs     # Configuración de compilación
└── main.js                # Salida compilada (generada)
```

### Pila tecnológica

- **TypeScript** — tipado estricto para mayor fiabilidad
- **esbuild** — empaquetado rápido con tree-shaking
- **API de Obsidian** — integración nativa del plugin (vistas, ajustes, comandos, sistema de archivos)
- **SVG + foreignObject** — renderizado acelerado por hardware con contenido HTML dentro de nodos SVG

---

## Apoyo al proyecto

Si MindZJMap te resulta útil, considera apoyar el proyecto:

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

## Licencia

Este proyecto está licenciado bajo la [Licencia Pública General GNU Affero v3.0](LICENSE) (AGPL-3.0-or-later).

---

<p align="center">
  Hecho con ❤️ por <strong>SuperJohn</strong> 2026.03
</p>
