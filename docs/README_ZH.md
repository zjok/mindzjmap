<h1 align="center">
  🗺️<br><br>
  MindZJ — Mind Map Plugin for Obsidian
</h1>

<p align="center">
  <em>一款功能丰富、高度可定制的思维导图插件，为 <a href="https://obsidian.md">Obsidian</a> 原生打造。</em>
</p>

<p align="center">
  <a href="#功能特性">功能特性</a> •
  <a href="#安装方式">安装</a> •
  <a href="#快速开始">快速开始</a> •
  <a href="#快捷键">快捷键</a> •
  <a href="#自定义样式">自定义</a> •
  <a href="#开发指南">开发</a> •
  <a href="#许可证">许可证</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/版本-0.1.0-blue" alt="Version" />
  <img src="https://img.shields.io/badge/许可证-AGPL--3.0-green" alt="License" />
  <img src="https://img.shields.io/badge/Obsidian-1.11.7+-purple" alt="Obsidian" />
  <img src="https://img.shields.io/badge/平台-桌面端-orange" alt="Platform" />
</p>

<p align="center">
  <strong>🌐 其他语言：</strong>
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

<p align="center">如果 MindZJ 对你有帮助，欢迎支持本项目</p>

---

## 预览

<p align="center">
  <img src="../docs/assets/mindzj_0.gif" alt="MindZJ 主界面" width="800" />
  <br/>
  <em>创建节点、编辑文本、拖放操作、彩虹连线效果展示</em>
</p>

<p align="center">
  <img src="../docs/assets/mindzj_2.jpg" alt="MindZJ 演示" width="800" />
  <br/>
  <em>MindZJ 主界面 — 在 Obsidian 中直接创建、编辑和美化思维导图</em>
</p>

<p align="center">
  <img src="../docs/assets/mindzj_3.jpg" alt="样式自定义" width="800" />
  <br/>
  <em>全局样式面板 — 精细调控思维导图的每一个视觉细节</em>
</p>

---

## 功能特性

### 核心功能

- **原生 `.mindzj` 文件格式** — 文件存放在你的 Vault 中，与 Obsidian 文件系统无缝集成
- **无限主节点** — 在同一画布上创建多棵独立的思维导图树
- **双向布局** — 子节点可排列在主节点的右侧、左侧或两侧
- **Markdown 模式** — 在可视化导图视图和原始 Markdown 文本编辑之间自由切换
- **撤销 / 重做** — 完整的历史记录栈，放心尝试任何操作

### 编辑功能

- **行内文本编辑** — 双击节点或按空格键即可原地编辑
- **按键编辑** — 选中节点后直接打字即可进入编辑模式
- **多行支持** — 在节点内使用 Shift+Enter 换行
- **键盘驱动流程** — Enter 添加兄弟节点、Tab 添加子节点、方向键导航
- **多选操作** — Shift/Ctrl 点击或框选来批量操作多个节点
- **复制 / 剪切 / 粘贴** — 完整的剪贴板支持，包括跨文件粘贴节点树
- **创建即编辑** — 可选在创建新节点时立即进入编辑模式

### 视觉效果

- **6 种连线样式** — 贝塞尔曲线、直线、弧线、阶梯线、括号线、松散曲线
- **9 套内置彩虹调色板** — 经典、柔和、霓虹、大地、海洋、日落、森林、糖果、单色
- **自定义彩虹调色板** — 为连线定义最多 12 种颜色的自定义序列
- **单节点样式覆盖** — 单独修改任意节点的背景色、文字颜色、字体、边框和圆角
- **单节点连线颜色与宽度** — 为任意分支覆盖全局连线颜色
- **10 种字体选择** — 包括系统字体、衬线体、无衬线体和等宽字体
- **5 种边框样式** — 实线、虚线、点线、双线、无边框
- **画布背景色** — 匹配你的主题或设置自定义背景色

### 交互操作

- **拖放排序** — 拖动节点重新排列兄弟顺序或移动到新的父节点下
- **主节点拖动** — 在画布上自由移动主节点的位置
- **缩放与平移** — 滚轮平移，Shift+滚轮或双指捏合缩放，支持方向反转设置
- **定位节点** — 按 `F` 将选中节点居中显示在视口中
- **搜索功能** — Ctrl+F 全文搜索节点，支持结果高亮和逐条导航

### 工具栏与样式面板

- **可定制工具栏** — 位置（顶部/底部）、内边距、背景色、按钮颜色和边框样式
- **专属样式面板** — 右侧面板，所有样式设置按可折叠分区整理
- **导图内样式弹窗** — 右键画布 → 全局样式，无需离开导图即可快速调整
- **显示/隐藏工具栏** — 通过设置、右键菜单或样式面板切换

### 国际化

- **19 种语言** — English、中文、日本語、Français、Deutsch、Español、Русский、Svenska、हिन्दी、한국어、Português、Suomi、Norsk、Nederlands、Liechtensteinisch、Dansk、עברית、Italiano、العربية
- **自定义节点名称** — 为每种语言分别自定义默认的"主节点"和"子节点"名称

### 设置选项

- **完全可自定义快捷键** — 通过可视化按键录制器重新绑定每个操作
- **滚动与缩放反转** — 垂直滚动、水平滚动和缩放方向可独立切换
- **开发者模式** — 显示内部状态叠加层（选中项、平移、缩放、节点数）

---

## 安装方式

### 通过 Obsidian 社区插件安装（推荐）

> _即将上线 — 插件目前处于开发阶段。_

1. 打开 **设置 → 第三方插件 → 浏览**
2. 搜索 **MindZJ**
3. 点击 **安装**，然后点击 **启用**

### 手动安装

1. 从 [GitHub Releases](https://github.com/zjok/mindzj/releases) 下载最新版本的 `main.js` 和 `manifest.json`
2. 在你的 Vault 中创建文件夹：`.obsidian/plugins/mindzj/`
3. 将 `main.js` 和 `manifest.json` 复制到该文件夹
4. 重启 Obsidian，然后在 设置 → 第三方插件 中启用 **MindZJ**

---

## 快速开始

1. 点击左侧功能区的 **🗺️ 网络图标**，或执行命令 **"New MindZJ"**
2. 自动创建并打开一个新的 `.mindzj` 文件
3. **双击**节点或按**空格键**编辑文本内容
4. 按 **Tab** 添加子节点，按 **Enter** 添加兄弟节点
5. 右键画布打开全局样式弹窗，或点击工具栏的 🎨 **样式** 打开样式面板

<p align="center">
  <img src="../docs/assets/mindzj_0.gif" alt="快速开始" width="800" />
  <br/>
  <em>30 秒内从零开始创建一张带样式的思维导图</em>
</p>

---

## 快捷键

所有快捷键均可在 设置 → MindZJ → 快捷键设置 中重新绑定。

| 操作           | 默认快捷键             |
| -------------- | ---------------------- |
| 编辑节点       | `空格 或 Ctrl + Enter` |
| 添加兄弟节点   | `Enter`                |
| 添加子节点     | `Tab`                  |
| 添加左侧子节点 | `Shift + Tab`          |
| 定位/居中节点  | `F`                    |
| 撤销           | `Ctrl + Z`             |
| 重做           | `Ctrl + Shift + Z`     |
| 搜索节点       | `Ctrl + F`             |
| 复制节点       | `Ctrl + C`             |
| 剪切节点       | `Ctrl + X`             |
| 粘贴节点       | `Ctrl + V`             |
| 删除节点       | `Delete` / `Backspace` |
| 导航           | `↑` `↓` `←` `→`        |
| 换行（编辑中） | `Shift + Enter`        |
| 放大           | `Shift + =`            |
| 缩小           | `Shift + -`            |
| 重置缩放       | `Shift + 0`            |
| 拖动画布       | 按住 `空格` + 鼠标拖动 |

---

## 自定义样式

### 全局样式

全局样式面板控制所有节点和连线的默认外观。访问方式：

- **工具栏** → 🎨 样式按钮 → 打开右侧面板
- **右键画布** → 🎨 全局样式 → 打开导图内弹窗
- **设置** → MindZJ → 基本样式选项（画布背景色、主题）

可用样式选项：

| 分类       | 属性                                                                              |
| ---------- | --------------------------------------------------------------------------------- |
| **子节点** | 背景色、文字颜色、字体大小、字体、边框（样式/颜色/宽度/圆角）、最小宽度、最小高度 |
| **主节点** | 与子节点相同，拥有独立的默认值                                                    |
| **连线**   | 样式（6种）、颜色、宽度、长度、方向、彩虹开关与调色板                             |
| **选中**   | 选中框颜色、宽度、偏移；编辑框颜色与宽度                                          |
| **文字**   | 对齐方式（左/中/右）、内边距、行高                                                |
| **画布**   | 背景色                                                                            |
| **工具栏** | 位置、内边距（上/右/下/左）、背景色、按钮背景色/边框/文字颜色                     |

### 单节点样式

右键任意节点 → 🎨 样式，可覆盖其个别外观：

- 背景色、文字颜色、字体大小、字体
- 边框样式、颜色、宽度、圆角
- 连线颜色和宽度（该节点所在分支的连线）

### 彩虹连线

启用彩虹模式后，每条分支会自动着以不同色彩。可从 9 套内置调色板中选择，或自定义最多 12 种颜色的组合。

---

## 文件格式

MindZJ 使用自定义的 `.mindzj` 文件扩展名。文件内容为纯 JSON：

```json
{
    "rootNodes": [
        {
            "id": "uuid",
            "text": "主节点",
            "x": 0,
            "y": 0,
            "width": 100,
            "height": 44,
            "children": [
                {
                    "id": "uuid",
                    "text": "子节点",
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

文件可读性强，适合版本控制。通过 Obsidian Sync、iCloud、Git 或任何基于文件的同步工具均可无缝跨设备同步。

---

## 开发指南

### 前置要求

- [Node.js](https://nodejs.org/) 16+
- npm

### 初始化

```bash
git clone https://github.com/zjok/mindzj.git
cd mindzj
npm install
```

### 构建

```bash
# 开发模式（监听模式 — 文件变更时自动重新构建）
npm run dev

# 生产模式（单次构建，无 sourcemap，经过 tree-shaking）
npm run build
```

### 项目结构

```
mindzj/
├── src/
│   ├── main.ts            # 插件入口，命令注册，生命周期
│   ├── MindMapView.ts     # 核心导图视图：渲染、编辑、交互
│   ├── StylePanelView.ts  # 右侧样式面板视图
│   ├── SettingsTab.ts     # 插件设置选项卡
│   ├── types.ts           # TypeScript 接口、默认值、常量
│   └── i18n.ts            # 19 种语言翻译系统
├── manifest.json          # Obsidian 插件清单
├── package.json           # npm 依赖与脚本
├── tsconfig.json          # TypeScript 配置
├── esbuild.config.mjs     # 构建配置
└── main.js                # 编译产物（自动生成）
```

### 技术栈

- **TypeScript** — 严格类型保障可靠性
- **esbuild** — 快速打包与 tree-shaking
- **Obsidian API** — 原生插件集成（视图、设置、命令、文件系统）
- **SVG + foreignObject** — 硬件加速渲染，在 SVG 节点内嵌入 HTML 内容

---

## 支持项目

如果 MindZJ 对你有帮助，欢迎支持本项目：

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

## 许可证

本项目基于 [GNU Affero 通用公共许可证 v3.0](LICENSE)（AGPL-3.0-or-later）发布。

---

<p align="center">
  由 <strong>SuperJohn</strong> 开发 ❤️ 2026.03
</p>

