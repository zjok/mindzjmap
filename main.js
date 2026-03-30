var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MindNodePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian4 = require("obsidian");

// src/MindMapView.ts
var import_obsidian = require("obsidian");

// src/types.ts
var DEFAULT_TOOLBAR_LIGHT = {
  toolbarBgColor: "#f5f5f5",
  toolbarBtnBgColor: "#ffffff",
  toolbarBtnBorderStyle: "solid",
  toolbarBtnBorderColor: "#d1d5db",
  toolbarBtnTextColor: "#333333",
  toolbarBorderColor: "#e0e0e0",
  toolbarBorderWidth: 1
};
var DEFAULT_TOOLBAR_DARK = {
  toolbarBgColor: "#2b2b2b",
  toolbarBtnBgColor: "#3c3c3c",
  toolbarBtnBorderStyle: "solid",
  toolbarBtnBorderColor: "#555555",
  toolbarBtnTextColor: "#e0e0e0",
  toolbarBorderColor: "#505050",
  toolbarBorderWidth: 1
};
var RAINBOW_PALETTES = {
  classic: [
    "#11cd3c",
    "#3498db",
    "#f4250e",
    "#f88d2f",
    "#1ad5ed",
    "#989898",
    "#a657c5",
    "#40cdb1",
    "#6b99f6",
    "#fb3997d8",
    "#6d5de8",
    "#910fcd"
  ],
  pastel: [
    "#baffc9",
    "#bae1ff",
    "#ffb3ba",
    "#ffdfba",
    "#ffffba",
    "#e8baff",
    "#ffc9de",
    "#c9ffe5",
    "#c9d6ff",
    "#ffe8c9",
    "#d4baff",
    "#baffea"
  ],
  forest: [
    "#27ae60",
    "#2ecc71",
    "#1abc9c",
    "#16a085",
    "#006400",
    "#228B22",
    "#32CD32",
    "#3CB371",
    "#2E8B57",
    "#66CDAA",
    "#8FBC8F",
    "#90EE90"
  ],
  candy: [
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871",
    "#D65DB1",
    "#845EC2",
    "#2C73D2",
    "#0089BA",
    "#008E9B",
    "#008F7A",
    "#B0A8B9",
    "#C34A36"
  ],
  neon: [
    "#ff0055",
    "#ff6600",
    "#ffcc00",
    "#00ff88",
    "#0088ff",
    "#aa00ff",
    "#ff0099",
    "#00ffcc",
    "#00ccff",
    "#ffff00",
    "#ff00ff",
    "#00ff00"
  ],
  earth: [
    "#8B4513",
    "#A0522D",
    "#CD853F",
    "#DEB887",
    "#D2B48C",
    "#BC8F8F",
    "#F4A460",
    "#DAA520",
    "#B8860B",
    "#808000",
    "#6B8E23",
    "#556B2F"
  ],
  ocean: [
    "#001f3f",
    "#003366",
    "#004080",
    "#0059b3",
    "#0073e6",
    "#1a8cff",
    "#4da6ff",
    "#80bfff",
    "#99ccff",
    "#b3d9ff",
    "#cce5ff",
    "#e6f2ff"
  ],
  sunset: [
    "#ff6b6b",
    "#ee5a24",
    "#f0932b",
    "#f6e58d",
    "#ffbe76",
    "#ff7979",
    "#e056fd",
    "#be2edd",
    "#686de0",
    "#4834d4",
    "#30336b",
    "#130f40"
  ],
  monochrome: [
    "#000000",
    "#1a1a1a",
    "#333333",
    "#4d4d4d",
    "#666666",
    "#808080",
    "#999999",
    "#b3b3b3",
    "#cccccc",
    "#e6e6e6",
    "#f2f2f2",
    "#ffffff"
  ]
};
var FONT_LIST = [
  "inherit",
  "Arial",
  "Helvetica Neue",
  "Georgia",
  "Times New Roman",
  "Courier New",
  "Verdana",
  "monospace",
  "sans-serif",
  "serif"
];
var CONNECTION_STYLES = [
  "bezier",
  "straight",
  "curved",
  "step",
  "bracket",
  "loose"
];
var DEFAULT_KEYBINDINGS = {
  editNode: "Space",
  addSibling: "Enter",
  addChild: "Tab",
  focusNode: "f",
  undo: "ctrl+z",
  redo: "ctrl+shift+z",
  lineBreak: "shift+Enter",
  dragCanvas: "Space",
  zoomIn: "shift+=",
  zoomOut: "shift+-",
  zoomReset: "shift+0",
  navUp: "ArrowUp",
  navDown: "ArrowDown",
  navLeft: "ArrowLeft",
  navRight: "ArrowRight",
  invertScrollY: false,
  invertScrollX: false,
  invertZoom: false
};
var DEFAULT_STYLE = {
  nodeBgColor: "#ffffff",
  nodeTextColor: "#333333",
  nodeFontSize: 14,
  nodeFontFamily: "inherit",
  nodeBorderStyle: "solid",
  nodeBorderColor: "#d1d5db",
  nodeBorderWidth: 1,
  nodeBorderRadius: 5,
  nodeMinWidth: 60,
  nodeMinHeight: 32,
  rootBgColor: "#ffffff",
  rootTextColor: "#171717",
  rootFontSize: 16,
  rootFontFamily: "inherit",
  rootBorderStyle: "solid",
  rootBorderColor: "#858585",
  rootBorderWidth: 1,
  rootBorderRadius: 5,
  rootMinWidth: 80,
  rootMinHeight: 40,
  connectionStyle: "bezier",
  connectionColor: "#94a3b8",
  connectionWidth: 1.5,
  connectionLength: 80,
  connectionRainbow: true,
  rainbowPalette: "classic",
  customRainbows: {},
  nodeDirection: "right",
  selectionColor: "#44d331",
  selectionWidth: 3,
  selectionOutlineOffset: 2,
  editOutlineColor: "#3bfb2d",
  editOutlineWidth: 4,
  textAlign: "center",
  nodePadX: 10,
  nodeLineHeight: 1.5,
  nodeGapY: 24,
  canvasBg: "#ffffff",
  toolbarPadTop: 0,
  toolbarPadRight: 12,
  toolbarPadBottom: 0,
  toolbarPadLeft: 12,
  toolbarPosition: "top",
  toolbarBgColor: "#f5f5f5",
  toolbarBtnBgColor: "#ffffff",
  toolbarBtnBorderStyle: "solid",
  toolbarBtnBorderColor: "#d1d5db",
  toolbarBtnTextColor: "#333333",
  toolbarBorderColor: "#e0e0e0",
  toolbarBorderWidth: 1
};
var DEFAULT_SETTINGS = {
  style: { ...DEFAULT_STYLE },
  language: "en",
  theme: "light",
  showToolbar: true,
  keyBindings: { ...DEFAULT_KEYBINDINGS },
  developerMode: false,
  editOnCreate: false,
  typeToEdit: true,
  customNodeNames: {}
};
var VIEW_TYPE_MINDMAP = "mindzj-view";
var VIEW_TYPE_MINDMAP_STYLE = "mindzj-style-panel";
var MINDMAP_FILE_EXTENSION = "mindzj";

// src/i18n.ts
var LANGUAGES = [
  { value: "en", label: "English" },
  { value: "zh", label: "\u4E2D\u6587" },
  { value: "ja", label: "\u65E5\u672C\u8A9E" },
  { value: "fr", label: "Fran\xE7ais" },
  { value: "de", label: "Deutsch" },
  { value: "es", label: "Espa\xF1ol" },
  { value: "ru", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" },
  { value: "sv", label: "Svenska" },
  { value: "hi", label: "\u0939\u093F\u0928\u094D\u0926\u0940" },
  { value: "ko", label: "\uD55C\uAD6D\uC5B4" },
  { value: "pt", label: "Portugu\xEAs" },
  { value: "fi", label: "Suomi" },
  { value: "no", label: "Norsk" },
  { value: "nl", label: "Nederlands" },
  { value: "li", label: "Liechtenstein" },
  { value: "it", label: "Italiano" },
  { value: "da", label: "Dansk" },
  { value: "he", label: "\u05E2\u05D1\u05E8\u05D9\u05EA" },
  { value: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }
];
var _en = {
  "tb.root": "\u2795 Root",
  "tb.undo": "\u21A9 Undo",
  "tb.redo": "\u21AA Redo",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F Map",
  "tb.style": "\u{1F3A8} Style",
  "tb.focus": "Focus",
  "tb.search": "Search",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:Search | Space:Edit | Ctrl+C/V/X",
  "tb.newRoot": "New root",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Markdown mode",
  "tb.tipStyle": "Style panel",
  "tb.tipFocus": "Focus node",
  "tb.tipSearch": "Search nodes",
  "tb.tipSettings": "Settings",
  "tb.zoomIn": "Zoom In",
  "tb.zoomOut": "Zoom Out",
  "sm.customRainbow": "+ Custom",
  "ctx.batchDel": "\u{1F5D1}\uFE0F Batch Delete",
  "ctx.editStyle": "\u{1F3A8} Edit Style",
  "ctx.newRoot": "\u2795 New Root",
  "ctx.undo": "\u21A9 Undo",
  "ctx.redo": "\u21AA Redo",
  "ctx.globalStyle": "\u{1F3A8} Global Style",
  "ctx.edit": "\u270F\uFE0F Edit",
  "ctx.style": "\u{1F3A8} Style",
  "ctx.copy": "\u{1F4CB} Copy",
  "ctx.cut": "\u2702\uFE0F Cut",
  "ctx.paste": "\u{1F4CC} Paste",
  "ctx.child": "\u2795 Child",
  "ctx.leftChild": "\u2B05 Left Child",
  "ctx.sibling": "\u2795 Sibling",
  "ctx.delete": "\u{1F5D1}\uFE0F Delete",
  "ctx.hideToolbar": "Hide Toolbar",
  "sm.title": "\u{1F3A8} Global Style",
  "sm.child": "Child Node",
  "sm.root": "Root Node",
  "sm.bg": "Background",
  "sm.text": "Text Color",
  "sm.fontSize": "Font Size",
  "sm.font": "Font",
  "sm.borderStyle": "Border Style",
  "sm.borderColor": "Border Color",
  "sm.borderWidth": "Border Width",
  "sm.borderRadius": "Border Radius",
  "sm.minWidth": "Min Width",
  "sm.minHeight": "Min Height",
  "sm.conn": "Connection",
  "sm.type": "Type",
  "sm.color": "Color",
  "sm.width": "Width",
  "sm.connLength": "Length",
  "sm.rainbow": "\u{1F308} Rainbow",
  "sm.nodeDir": "Node Direction",
  "sm.dirRight": "Right",
  "sm.dirLeft": "Left",
  "sm.dirBoth": "Both",
  "sm.rainbowPalette": "Palette",
  "sm.sel": "Selection",
  "sm.selColor": "Selection Color",
  "sm.selWidth": "Selection Width",
  "sm.selOffset": "Outline Offset",
  "sm.editOutline": "Edit Outline Color",
  "sm.editOutlineWidth": "Edit Outline Width",
  "sm.textAlign": "Text Align",
  "sm.nodePadX": "Text Padding",
  "sm.nodeLineHeight": "Line Height",
  "sm.canvasBg": "Canvas Background",
  "sm.reset": "Reset",
  "sm.close": "Close",
  "sm.showToolbar": "Show Toolbar",
  "sm.tbPad": "Toolbar Padding",
  "sm.tbPadT": "Top",
  "sm.tbPadR": "Right",
  "sm.tbPadB": "Bottom",
  "sm.tbPadL": "Left",
  "sm.tbPos": "Toolbar Position",
  "sm.tbPosTop": "Top",
  "sm.tbPosBottom": "Bottom",
  "sm.tbBg": "Toolbar Background",
  "sm.tbBtnBg": "Button Background",
  "sm.tbBtnBorder": "Button Border Style",
  "sm.tbBtnBorderColor": "Button Border Color",
  "sm.tbBtnText": "Button Text Color",
  "sm.tbResetDefault": "Reset Toolbar",
  "ns.title": "\u{1F3A8} Node Style",
  "ns.connColor": "Line Color",
  "ns.connWidth": "Line Width",
  "ns.clear": "Clear Custom",
  "ns.borderRadius": "Border Radius",
  "search.placeholder": "Search nodes...",
  "def.root": "Root",
  "def.newRoot": "New Root",
  "def.child": "Child",
  "set.title": "MindZJ Settings",
  "set.lang": "Language",
  "set.langDesc": "Interface language",
  "set.theme": "Theme",
  "set.themeDesc": "Color theme",
  "set.light": "Light",
  "set.dark": "Dark",
  "set.toolbar": "Show Toolbar",
  "set.toolbarDesc": "Show toolbar",
  "set.canvasBg": "Canvas Background",
  "set.canvasBgDesc": "Background color",
  "set.about": "About",
  "set.version": "Version",
  "set.author": "Author",
  "set.desc": "A feature-rich open source mind map app for Obsidian with custom styles, rainbow connections, multi-select, drag & drop, and Markdown import/export.",
  "set.updated": "Updated",
  "set.github": "GitHub Repository",
  "set.donate": "Support Open Source Author",
  "set.keys": "Keyboard Shortcuts",
  "set.keysDesc": "Customize shortcuts",
  "set.key.edit": "Edit node",
  "set.key.sibling": "Add sibling",
  "set.key.child": "Add child",
  "set.key.focus": "Focus node",
  "set.key.undo": "Undo",
  "set.key.redo": "Redo",
  "set.key.lineBreak": "Line break (in edit)",
  "set.key.dragCanvas": "Drag canvas",
  "set.key.zoomIn": "Zoom in",
  "set.key.zoomOut": "Zoom out",
  "set.key.zoomReset": "Reset zoom",
  "set.key.up": "Navigate up",
  "set.key.down": "Navigate down",
  "set.key.left": "Navigate left",
  "set.key.right": "Navigate right",
  "set.key.press": "Press key...",
  "set.scroll": "Scroll & Zoom",
  "set.invertY": "Invert vertical scroll",
  "set.invertX": "Invert horizontal scroll",
  "set.invertZoom": "Invert zoom direction",
  "set.editOnCreate": "Edit on create",
  "set.editOnCreateDesc": "Enter edit mode when creating new nodes",
  "set.rootName": "Root node name",
  "set.rootNameDesc": "Default name for new root nodes",
  "set.childName": "Child node name",
  "set.childNameDesc": "Default name for new child nodes",
  "set.typeToEdit": "Type to edit",
  "set.typeToEditDesc": "Press any key to enter edit mode when a node is selected"
};
var _zh = {
  "tb.root": "\u2795 \u4E3B\u8282\u70B9",
  "tb.undo": "\u21A9 \u64A4\u9500",
  "tb.redo": "\u21AA \u91CD\u505A",
  "tb.md": "\u{1F4C4} MD\u6A21\u5F0F",
  "tb.map": "\u{1F5FA}\uFE0F \u5BFC\u56FE",
  "tb.style": "\u{1F3A8} \u6837\u5F0F",
  "tb.focus": "\u5B9A\u4F4D",
  "tb.search": "\u641C\u7D22",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:\u641C\u7D22 | Space:\u7F16\u8F91 | Ctrl+C/V/X",
  "tb.newRoot": "\u65B0\u5EFA\u4E3B\u8282\u70B9",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Markdown\u6A21\u5F0F",
  "tb.tipStyle": "\u6837\u5F0F\u9762\u677F",
  "tb.tipFocus": "\u5B9A\u4F4D\u8282\u70B9",
  "tb.tipSearch": "\u641C\u7D22\u8282\u70B9",
  "tb.tipSettings": "\u8BBE\u7F6E",
  "tb.zoomIn": "\u653E\u5927",
  "tb.zoomOut": "\u7F29\u5C0F",
  "sm.customRainbow": "+ \u81EA\u5B9A\u4E49",
  "ctx.batchDel": "\u{1F5D1}\uFE0F \u6279\u91CF\u5220\u9664",
  "ctx.editStyle": "\u{1F3A8} \u7F16\u8F91\u6837\u5F0F",
  "ctx.newRoot": "\u2795 \u65B0\u5EFA\u4E3B\u8282\u70B9",
  "ctx.undo": "\u21A9 \u64A4\u9500",
  "ctx.redo": "\u21AA \u91CD\u505A",
  "ctx.globalStyle": "\u{1F3A8} \u5168\u5C40\u6837\u5F0F",
  "ctx.edit": "\u270F\uFE0F \u7F16\u8F91",
  "ctx.style": "\u{1F3A8} \u6837\u5F0F",
  "ctx.copy": "\u{1F4CB} \u590D\u5236",
  "ctx.cut": "\u2702\uFE0F \u526A\u5207",
  "ctx.paste": "\u{1F4CC} \u7C98\u8D34",
  "ctx.child": "\u2795 \u5B50\u8282\u70B9",
  "ctx.leftChild": "\u2B05 \u5DE6\u4FA7\u5B50\u8282\u70B9",
  "ctx.sibling": "\u2795 \u5144\u5F1F\u8282\u70B9",
  "ctx.delete": "\u{1F5D1}\uFE0F \u5220\u9664",
  "ctx.hideToolbar": "\u9690\u85CF\u5DE5\u5177\u680F",
  "sm.title": "\u{1F3A8} \u5168\u5C40\u6837\u5F0F",
  "sm.child": "\u5B50\u8282\u70B9",
  "sm.root": "\u4E3B\u8282\u70B9",
  "sm.bg": "\u80CC\u666F\u8272",
  "sm.text": "\u6587\u5B57\u8272",
  "sm.fontSize": "\u5B57\u4F53\u5927\u5C0F",
  "sm.font": "\u5B57\u4F53",
  "sm.borderStyle": "\u8FB9\u6846\u6837\u5F0F",
  "sm.borderColor": "\u8FB9\u6846\u989C\u8272",
  "sm.borderWidth": "\u8FB9\u6846\u5BBD\u5EA6",
  "sm.borderRadius": "\u5706\u89D2",
  "sm.minWidth": "\u6700\u5C0F\u5BBD\u5EA6",
  "sm.minHeight": "\u6700\u5C0F\u9AD8\u5EA6",
  "sm.conn": "\u8FDE\u7EBF",
  "sm.type": "\u7C7B\u578B",
  "sm.color": "\u989C\u8272",
  "sm.width": "\u5BBD\u5EA6",
  "sm.connLength": "\u957F\u5EA6",
  "sm.rainbow": "\u{1F308} \u5F69\u8679",
  "sm.nodeDir": "\u8282\u70B9\u65B9\u5411",
  "sm.dirRight": "\u53F3\u4FA7",
  "sm.dirLeft": "\u5DE6\u4FA7",
  "sm.dirBoth": "\u5DE6\u53F3",
  "sm.rainbowPalette": "\u8C03\u8272\u677F",
  "sm.sel": "\u9009\u4E2D",
  "sm.selColor": "\u9009\u4E2D\u989C\u8272",
  "sm.selWidth": "\u9009\u4E2D\u6846\u5BBD\u5EA6",
  "sm.selOffset": "\u9009\u4E2D\u6846\u504F\u79FB",
  "sm.editOutline": "\u7F16\u8F91\u6846\u989C\u8272",
  "sm.editOutlineWidth": "\u7F16\u8F91\u6846\u5BBD\u5EA6",
  "sm.textAlign": "\u6587\u5B57\u5BF9\u9F50",
  "sm.nodePadX": "\u6587\u5B57\u95F4\u8DDD",
  "sm.nodeLineHeight": "\u884C\u95F4\u8DDD",
  "sm.canvasBg": "\u753B\u5E03\u80CC\u666F\u8272",
  "sm.reset": "\u91CD\u7F6E",
  "sm.close": "\u5173\u95ED",
  "sm.showToolbar": "\u663E\u793A\u5DE5\u5177\u680F",
  "sm.tbPad": "\u5DE5\u5177\u680F\u5185\u8FB9\u8DDD",
  "sm.tbPadT": "\u4E0A",
  "sm.tbPadR": "\u53F3",
  "sm.tbPadB": "\u4E0B",
  "sm.tbPadL": "\u5DE6",
  "sm.tbPos": "\u5DE5\u5177\u680F\u4F4D\u7F6E",
  "sm.tbPosTop": "\u9876\u90E8",
  "sm.tbPosBottom": "\u5E95\u90E8",
  "sm.tbBg": "\u5DE5\u5177\u680F\u80CC\u666F\u8272",
  "sm.tbBtnBg": "\u6309\u94AE\u80CC\u666F\u8272",
  "sm.tbBtnBorder": "\u6309\u94AE\u8FB9\u6846\u6837\u5F0F",
  "sm.tbBtnBorderColor": "\u6309\u94AE\u8FB9\u6846\u989C\u8272",
  "sm.tbBtnText": "\u6309\u94AE\u5B57\u4F53\u989C\u8272",
  "sm.tbResetDefault": "\u91CD\u7F6E\u5DE5\u5177\u680F",
  "ns.title": "\u{1F3A8} \u8282\u70B9\u6837\u5F0F",
  "ns.connColor": "\u8FDE\u7EBF\u989C\u8272",
  "ns.connWidth": "\u8FDE\u7EBF\u5BBD\u5EA6",
  "ns.clear": "\u6E05\u9664\u81EA\u5B9A\u4E49",
  "ns.borderRadius": "\u5706\u89D2",
  "search.placeholder": "\u641C\u7D22\u8282\u70B9...",
  "def.root": "\u4E3B\u8282\u70B9",
  "def.newRoot": "\u65B0\u4E3B\u8282\u70B9",
  "def.child": "\u5B50\u8282\u70B9",
  "set.title": "MindZJ \u8BBE\u7F6E",
  "set.lang": "\u8BED\u8A00",
  "set.langDesc": "\u754C\u9762\u8BED\u8A00",
  "set.theme": "\u4E3B\u9898",
  "set.themeDesc": "\u989C\u8272\u4E3B\u9898",
  "set.light": "\u4EAE\u8272",
  "set.dark": "\u6697\u8272",
  "set.toolbar": "\u663E\u793A\u5DE5\u5177\u680F",
  "set.toolbarDesc": "\u663E\u793A\u9876\u90E8\u5DE5\u5177\u680F",
  "set.canvasBg": "\u753B\u5E03\u80CC\u666F\u8272",
  "set.canvasBgDesc": "\u753B\u5E03\u80CC\u666F\u989C\u8272",
  "set.about": "\u5173\u4E8E",
  "set.version": "\u7248\u672C",
  "set.author": "\u4F5C\u8005",
  "set.desc": "\u4E00\u6B3E\u529F\u80FD\u4E30\u5BCC\u7684Obsidian\u601D\u7EF4\u5BFC\u56FE\u5F00\u6E90\u5E94\u7528\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6837\u5F0F\u3001\u5F69\u8679\u8FDE\u7EBF\u3001\u591A\u9009\u3001\u62D6\u653E\u548CMarkdown\u7F16\u8F91\u5BFC\u5165\u5BFC\u51FA\u3002",
  "set.updated": "\u66F4\u65B0\u65E5\u671F",
  "set.github": "GitHub \u4ED3\u5E93",
  "set.donate": "\u652F\u6301\u5F00\u6E90\u9879\u76EE\u4F5C\u8005",
  "set.keys": "\u5FEB\u6377\u952E\u8BBE\u7F6E",
  "set.keysDesc": "\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E",
  "set.key.edit": "\u7F16\u8F91\u8282\u70B9",
  "set.key.sibling": "\u65B0\u5EFA\u5144\u5F1F\u8282\u70B9",
  "set.key.child": "\u65B0\u5EFA\u5B50\u8282\u70B9",
  "set.key.focus": "\u5B9A\u4F4D\u8282\u70B9",
  "set.key.undo": "\u64A4\u9500",
  "set.key.redo": "\u91CD\u505A",
  "set.key.lineBreak": "\u6362\u884C(\u7F16\u8F91\u4E2D)",
  "set.key.dragCanvas": "\u62D6\u52A8\u753B\u5E03",
  "set.key.zoomIn": "\u653E\u5927",
  "set.key.zoomOut": "\u7F29\u5C0F",
  "set.key.zoomReset": "\u91CD\u7F6E\u7F29\u653E",
  "set.key.up": "\u5411\u4E0A\u5BFC\u822A",
  "set.key.down": "\u5411\u4E0B\u5BFC\u822A",
  "set.key.left": "\u5411\u5DE6\u5BFC\u822A",
  "set.key.right": "\u5411\u53F3\u5BFC\u822A",
  "set.key.press": "\u6309\u4E0B\u6309\u952E...",
  "set.scroll": "\u6EDA\u52A8\u4E0E\u7F29\u653E",
  "set.invertY": "\u53CD\u8F6C\u5782\u76F4\u6EDA\u52A8",
  "set.invertX": "\u53CD\u8F6C\u6C34\u5E73\u6EDA\u52A8",
  "set.invertZoom": "\u53CD\u8F6C\u7F29\u653E\u65B9\u5411",
  "set.editOnCreate": "\u521B\u5EFA\u65F6\u7F16\u8F91",
  "set.editOnCreateDesc": "\u521B\u5EFA\u65B0\u8282\u70B9\u65F6\u81EA\u52A8\u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F",
  "set.rootName": "\u4E3B\u8282\u70B9\u540D\u79F0",
  "set.rootNameDesc": "\u65B0\u4E3B\u8282\u70B9\u7684\u9ED8\u8BA4\u540D\u79F0",
  "set.childName": "\u5B50\u8282\u70B9\u540D\u79F0",
  "set.childNameDesc": "\u65B0\u5B50\u8282\u70B9\u7684\u9ED8\u8BA4\u540D\u79F0",
  "set.typeToEdit": "\u6309\u952E\u7F16\u8F91",
  "set.typeToEditDesc": "\u9009\u4E2D\u8282\u70B9\u65F6\u6309\u4EFB\u610F\u952E\u76F4\u63A5\u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F"
};
var _ja = {
  "tb.root": "\u2795 \u30EB\u30FC\u30C8",
  "tb.undo": "\u21A9 \u5143\u306B\u623B\u3059",
  "tb.redo": "\u21AA \u3084\u308A\u76F4\u3059",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F \u30DE\u30C3\u30D7",
  "tb.style": "\u{1F3A8} \u30B9\u30BF\u30A4\u30EB",
  "tb.focus": "\u30D5\u30A9\u30FC\u30AB\u30B9",
  "tb.search": "\u691C\u7D22",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:\u691C\u7D22 | Space:\u7DE8\u96C6 | Ctrl+C/V/X",
  "tb.newRoot": "\u65B0\u898F\u30EB\u30FC\u30C8",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Markdown\u30E2\u30FC\u30C9",
  "tb.tipStyle": "\u30B9\u30BF\u30A4\u30EB\u30D1\u30CD\u30EB",
  "tb.tipFocus": "\u30CE\u30FC\u30C9\u306B\u30D5\u30A9\u30FC\u30AB\u30B9",
  "tb.tipSearch": "\u30CE\u30FC\u30C9\u691C\u7D22",
  "tb.tipSettings": "\u8A2D\u5B9A",
  "tb.zoomIn": "\u62E1\u5927",
  "tb.zoomOut": "\u7E2E\u5C0F",
  "sm.customRainbow": "+ \u30AB\u30B9\u30BF\u30E0",
  "ctx.batchDel": "\u{1F5D1}\uFE0F \u4E00\u62EC\u524A\u9664",
  "ctx.editStyle": "\u{1F3A8} \u30B9\u30BF\u30A4\u30EB\u7DE8\u96C6",
  "ctx.newRoot": "\u2795 \u65B0\u898F\u30EB\u30FC\u30C8",
  "ctx.undo": "\u21A9 \u5143\u306B\u623B\u3059",
  "ctx.redo": "\u21AA \u3084\u308A\u76F4\u3059",
  "ctx.globalStyle": "\u{1F3A8} \u5168\u4F53\u30B9\u30BF\u30A4\u30EB",
  "ctx.edit": "\u270F\uFE0F \u7DE8\u96C6",
  "ctx.style": "\u{1F3A8} \u30B9\u30BF\u30A4\u30EB",
  "ctx.copy": "\u{1F4CB} \u30B3\u30D4\u30FC",
  "ctx.cut": "\u2702\uFE0F \u30AB\u30C3\u30C8",
  "ctx.paste": "\u{1F4CC} \u8CBC\u308A\u4ED8\u3051",
  "ctx.child": "\u2795 \u5B50\u30CE\u30FC\u30C9",
  "ctx.leftChild": "\u2B05 \u5DE6\u5B50\u30CE\u30FC\u30C9",
  "ctx.sibling": "\u2795 \u5144\u5F1F\u30CE\u30FC\u30C9",
  "ctx.delete": "\u{1F5D1}\uFE0F \u524A\u9664",
  "ctx.hideToolbar": "\u30C4\u30FC\u30EB\u30D0\u30FC\u3092\u975E\u8868\u793A",
  "sm.title": "\u{1F3A8} \u5168\u4F53\u30B9\u30BF\u30A4\u30EB",
  "sm.child": "\u5B50\u30CE\u30FC\u30C9",
  "sm.root": "\u30EB\u30FC\u30C8\u30CE\u30FC\u30C9",
  "sm.bg": "\u80CC\u666F\u8272",
  "sm.text": "\u6587\u5B57\u8272",
  "sm.fontSize": "\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA",
  "sm.font": "\u30D5\u30A9\u30F3\u30C8",
  "sm.borderStyle": "\u67A0\u7DDA\u30B9\u30BF\u30A4\u30EB",
  "sm.borderColor": "\u67A0\u7DDA\u306E\u8272",
  "sm.borderWidth": "\u67A0\u7DDA\u306E\u5E45",
  "sm.borderRadius": "\u89D2\u4E38",
  "sm.minWidth": "\u6700\u5C0F\u5E45",
  "sm.minHeight": "\u6700\u5C0F\u9AD8\u3055",
  "sm.conn": "\u63A5\u7D9A\u7DDA",
  "sm.type": "\u30BF\u30A4\u30D7",
  "sm.color": "\u8272",
  "sm.width": "\u5E45",
  "sm.connLength": "\u9577\u3055",
  "sm.rainbow": "\u{1F308} \u30EC\u30A4\u30F3\u30DC\u30FC",
  "sm.nodeDir": "\u30CE\u30FC\u30C9\u65B9\u5411",
  "sm.dirRight": "\u53F3",
  "sm.dirLeft": "\u5DE6",
  "sm.dirBoth": "\u4E21\u65B9",
  "sm.rainbowPalette": "\u30D1\u30EC\u30C3\u30C8",
  "sm.sel": "\u9078\u629E",
  "sm.selColor": "\u9078\u629E\u8272",
  "sm.selWidth": "\u9078\u629E\u67A0\u306E\u5E45",
  "sm.selOffset": "\u30A2\u30A6\u30C8\u30E9\u30A4\u30F3\u30AA\u30D5\u30BB\u30C3\u30C8",
  "sm.editOutline": "\u7DE8\u96C6\u67A0\u306E\u8272",
  "sm.editOutlineWidth": "\u7DE8\u96C6\u67A0\u306E\u5E45",
  "sm.textAlign": "\u30C6\u30AD\u30B9\u30C8\u914D\u7F6E",
  "sm.nodePadX": "\u30C6\u30AD\u30B9\u30C8\u4F59\u767D",
  "sm.nodeLineHeight": "\u884C\u306E\u9AD8\u3055",
  "sm.canvasBg": "\u30AD\u30E3\u30F3\u30D0\u30B9\u80CC\u666F",
  "sm.reset": "\u30EA\u30BB\u30C3\u30C8",
  "sm.close": "\u9589\u3058\u308B",
  "sm.showToolbar": "\u30C4\u30FC\u30EB\u30D0\u30FC\u8868\u793A",
  "sm.tbPad": "\u30C4\u30FC\u30EB\u30D0\u30FC\u4F59\u767D",
  "sm.tbPadT": "\u4E0A",
  "sm.tbPadR": "\u53F3",
  "sm.tbPadB": "\u4E0B",
  "sm.tbPadL": "\u5DE6",
  "sm.tbPos": "\u30C4\u30FC\u30EB\u30D0\u30FC\u4F4D\u7F6E",
  "sm.tbPosTop": "\u4E0A\u90E8",
  "sm.tbPosBottom": "\u4E0B\u90E8",
  "sm.tbBg": "\u30C4\u30FC\u30EB\u30D0\u30FC\u80CC\u666F",
  "sm.tbBtnBg": "\u30DC\u30BF\u30F3\u80CC\u666F",
  "sm.tbBtnBorder": "\u30DC\u30BF\u30F3\u67A0\u7DDA\u30B9\u30BF\u30A4\u30EB",
  "sm.tbBtnBorderColor": "\u30DC\u30BF\u30F3\u67A0\u7DDA\u306E\u8272",
  "sm.tbBtnText": "\u30DC\u30BF\u30F3\u6587\u5B57\u8272",
  "sm.tbResetDefault": "\u30C4\u30FC\u30EB\u30D0\u30FC\u30EA\u30BB\u30C3\u30C8",
  "ns.title": "\u{1F3A8} \u30CE\u30FC\u30C9\u30B9\u30BF\u30A4\u30EB",
  "ns.connColor": "\u7DDA\u306E\u8272",
  "ns.connWidth": "\u7DDA\u306E\u5E45",
  "ns.clear": "\u30AB\u30B9\u30BF\u30E0\u3092\u30AF\u30EA\u30A2",
  "ns.borderRadius": "\u89D2\u4E38",
  "search.placeholder": "\u30CE\u30FC\u30C9\u3092\u691C\u7D22...",
  "def.root": "\u30EB\u30FC\u30C8",
  "def.newRoot": "\u65B0\u3057\u3044\u30EB\u30FC\u30C8",
  "def.child": "\u5B50\u30CE\u30FC\u30C9",
  "set.title": "MindZJ \u8A2D\u5B9A",
  "set.lang": "\u8A00\u8A9E",
  "set.langDesc": "\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u8A00\u8A9E",
  "set.theme": "\u30C6\u30FC\u30DE",
  "set.themeDesc": "\u30AB\u30E9\u30FC\u30C6\u30FC\u30DE",
  "set.light": "\u30E9\u30A4\u30C8",
  "set.dark": "\u30C0\u30FC\u30AF",
  "set.toolbar": "\u30C4\u30FC\u30EB\u30D0\u30FC\u8868\u793A",
  "set.toolbarDesc": "\u30C4\u30FC\u30EB\u30D0\u30FC\u3092\u8868\u793A",
  "set.canvasBg": "\u30AD\u30E3\u30F3\u30D0\u30B9\u80CC\u666F\u8272",
  "set.canvasBgDesc": "\u80CC\u666F\u8272",
  "set.about": "\u6982\u8981",
  "set.version": "\u30D0\u30FC\u30B8\u30E7\u30F3",
  "set.author": "\u4F5C\u8005",
  "set.desc": "Obsidian\u7528\u306E\u9AD8\u6A5F\u80FD\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7\u3002\u30AB\u30B9\u30BF\u30E0\u30B9\u30BF\u30A4\u30EB\u3001\u30EC\u30A4\u30F3\u30DC\u30FC\u63A5\u7D9A\u7DDA\u3001\u8907\u6570\u9078\u629E\u3001\u30C9\u30E9\u30C3\u30B0&\u30C9\u30ED\u30C3\u30D7\u3001Markdown\u30A4\u30F3\u30DD\u30FC\u30C8/\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u5BFE\u5FDC\u3002",
  "set.updated": "\u66F4\u65B0\u65E5",
  "set.github": "GitHub\u30EA\u30DD\u30B8\u30C8\u30EA",
  "set.donate": "\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u4F5C\u8005\u3092\u652F\u63F4",
  "set.keys": "\u30AD\u30FC\u30DC\u30FC\u30C9\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8",
  "set.keysDesc": "\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA",
  "set.key.edit": "\u30CE\u30FC\u30C9\u3092\u7DE8\u96C6",
  "set.key.sibling": "\u5144\u5F1F\u30CE\u30FC\u30C9\u8FFD\u52A0",
  "set.key.child": "\u5B50\u30CE\u30FC\u30C9\u8FFD\u52A0",
  "set.key.focus": "\u30CE\u30FC\u30C9\u306B\u30D5\u30A9\u30FC\u30AB\u30B9",
  "set.key.undo": "\u5143\u306B\u623B\u3059",
  "set.key.redo": "\u3084\u308A\u76F4\u3059",
  "set.key.lineBreak": "\u6539\u884C\uFF08\u7DE8\u96C6\u4E2D\uFF09",
  "set.key.dragCanvas": "\u30AD\u30E3\u30F3\u30D0\u30B9\u3092\u79FB\u52D5",
  "set.key.zoomIn": "\u62E1\u5927",
  "set.key.zoomOut": "\u7E2E\u5C0F",
  "set.key.zoomReset": "\u30BA\u30FC\u30E0\u30EA\u30BB\u30C3\u30C8",
  "set.key.up": "\u4E0A\u306B\u79FB\u52D5",
  "set.key.down": "\u4E0B\u306B\u79FB\u52D5",
  "set.key.left": "\u5DE6\u306B\u79FB\u52D5",
  "set.key.right": "\u53F3\u306B\u79FB\u52D5",
  "set.key.press": "\u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044...",
  "set.scroll": "\u30B9\u30AF\u30ED\u30FC\u30EB\u3068\u30BA\u30FC\u30E0",
  "set.invertY": "\u5782\u76F4\u30B9\u30AF\u30ED\u30FC\u30EB\u53CD\u8EE2",
  "set.invertX": "\u6C34\u5E73\u30B9\u30AF\u30ED\u30FC\u30EB\u53CD\u8EE2",
  "set.invertZoom": "\u30BA\u30FC\u30E0\u65B9\u5411\u53CD\u8EE2",
  "set.editOnCreate": "\u4F5C\u6210\u6642\u306B\u7DE8\u96C6",
  "set.editOnCreateDesc": "\u30CE\u30FC\u30C9\u4F5C\u6210\u6642\u306B\u7DE8\u96C6\u30E2\u30FC\u30C9\u306B\u5165\u308B",
  "set.rootName": "\u30EB\u30FC\u30C8\u30CE\u30FC\u30C9\u540D",
  "set.rootNameDesc": "\u65B0\u898F\u30EB\u30FC\u30C8\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u540D",
  "set.childName": "\u5B50\u30CE\u30FC\u30C9\u540D",
  "set.childNameDesc": "\u65B0\u898F\u5B50\u30CE\u30FC\u30C9\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u540D",
  "set.typeToEdit": "\u30AD\u30FC\u3067\u7DE8\u96C6",
  "set.typeToEditDesc": "\u30CE\u30FC\u30C9\u9078\u629E\u6642\u306B\u30AD\u30FC\u3092\u62BC\u3059\u3068\u7DE8\u96C6\u30E2\u30FC\u30C9\u306B\u5165\u308B"
};
var _fr = {
  "tb.root": "\u2795 Racine",
  "tb.undo": "\u21A9 Annuler",
  "tb.redo": "\u21AA Refaire",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F Carte",
  "tb.style": "\u{1F3A8} Style",
  "tb.focus": "Focus",
  "tb.search": "Rechercher",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:Rechercher | Espace:\xC9diter | Ctrl+C/V/X",
  "tb.newRoot": "Nouvelle racine",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Mode Markdown",
  "tb.tipStyle": "Panneau de style",
  "tb.tipFocus": "Focaliser le n\u0153ud",
  "tb.tipSearch": "Rechercher des n\u0153uds",
  "tb.tipSettings": "Param\xE8tres",
  "tb.zoomIn": "Zoom avant",
  "tb.zoomOut": "Zoom arri\xE8re",
  "sm.customRainbow": "+ Personnalis\xE9",
  "ctx.batchDel": "\u{1F5D1}\uFE0F Suppr. en lot",
  "ctx.editStyle": "\u{1F3A8} Modifier le style",
  "ctx.newRoot": "\u2795 Nouvelle racine",
  "ctx.undo": "\u21A9 Annuler",
  "ctx.redo": "\u21AA Refaire",
  "ctx.globalStyle": "\u{1F3A8} Style global",
  "ctx.edit": "\u270F\uFE0F \xC9diter",
  "ctx.style": "\u{1F3A8} Style",
  "ctx.copy": "\u{1F4CB} Copier",
  "ctx.cut": "\u2702\uFE0F Couper",
  "ctx.paste": "\u{1F4CC} Coller",
  "ctx.child": "\u2795 Enfant",
  "ctx.leftChild": "\u2B05 Enfant gauche",
  "ctx.sibling": "\u2795 Fr\xE8re",
  "ctx.delete": "\u{1F5D1}\uFE0F Supprimer",
  "ctx.hideToolbar": "Masquer la barre d'outils",
  "sm.title": "\u{1F3A8} Style global",
  "sm.child": "N\u0153ud enfant",
  "sm.root": "N\u0153ud racine",
  "sm.bg": "Fond",
  "sm.text": "Couleur texte",
  "sm.fontSize": "Taille police",
  "sm.font": "Police",
  "sm.borderStyle": "Style bordure",
  "sm.borderColor": "Couleur bordure",
  "sm.borderWidth": "Largeur bordure",
  "sm.borderRadius": "Rayon bordure",
  "sm.minWidth": "Largeur min.",
  "sm.minHeight": "Hauteur min.",
  "sm.conn": "Connexion",
  "sm.type": "Type",
  "sm.color": "Couleur",
  "sm.width": "Largeur",
  "sm.connLength": "Longueur",
  "sm.rainbow": "\u{1F308} Arc-en-ciel",
  "sm.nodeDir": "Direction n\u0153uds",
  "sm.dirRight": "Droite",
  "sm.dirLeft": "Gauche",
  "sm.dirBoth": "Les deux",
  "sm.rainbowPalette": "Palette",
  "sm.sel": "S\xE9lection",
  "sm.selColor": "Couleur s\xE9lection",
  "sm.selWidth": "Largeur s\xE9lection",
  "sm.selOffset": "D\xE9calage contour",
  "sm.editOutline": "Couleur contour \xE9dition",
  "sm.editOutlineWidth": "Largeur contour \xE9dition",
  "sm.textAlign": "Alignement texte",
  "sm.nodePadX": "Marge texte",
  "sm.nodeLineHeight": "Hauteur de ligne",
  "sm.canvasBg": "Fond du canevas",
  "sm.reset": "R\xE9initialiser",
  "sm.close": "Fermer",
  "sm.showToolbar": "Afficher barre d'outils",
  "sm.tbPad": "Marges barre",
  "sm.tbPadT": "Haut",
  "sm.tbPadR": "Droite",
  "sm.tbPadB": "Bas",
  "sm.tbPadL": "Gauche",
  "sm.tbPos": "Position barre",
  "sm.tbPosTop": "Haut",
  "sm.tbPosBottom": "Bas",
  "sm.tbBg": "Fond barre",
  "sm.tbBtnBg": "Fond bouton",
  "sm.tbBtnBorder": "Style bordure bouton",
  "sm.tbBtnBorderColor": "Couleur bordure bouton",
  "sm.tbBtnText": "Couleur texte bouton",
  "sm.tbResetDefault": "R\xE9initialiser la barre",
  "ns.title": "\u{1F3A8} Style du n\u0153ud",
  "ns.connColor": "Couleur ligne",
  "ns.connWidth": "Largeur ligne",
  "ns.clear": "Effacer personnalisation",
  "ns.borderRadius": "Rayon bordure",
  "search.placeholder": "Rechercher...",
  "def.root": "Racine",
  "def.newRoot": "Nouvelle racine",
  "def.child": "Enfant",
  "set.title": "Param\xE8tres MindZJ",
  "set.lang": "Langue",
  "set.langDesc": "Langue d'interface",
  "set.theme": "Th\xE8me",
  "set.themeDesc": "Th\xE8me de couleur",
  "set.light": "Clair",
  "set.dark": "Sombre",
  "set.toolbar": "Afficher barre d'outils",
  "set.toolbarDesc": "Afficher la barre",
  "set.canvasBg": "Fond du canevas",
  "set.canvasBgDesc": "Couleur de fond",
  "set.about": "\xC0 propos",
  "set.version": "Version",
  "set.author": "Auteur",
  "set.desc": "Application de carte mentale open source pour Obsidian avec styles personnalis\xE9s, connexions arc-en-ciel, multi-s\xE9lection, glisser-d\xE9poser et import/export Markdown.",
  "set.updated": "Mis \xE0 jour",
  "set.github": "D\xE9p\xF4t GitHub",
  "set.donate": "Soutenir l'auteur open source",
  "set.keys": "Raccourcis clavier",
  "set.keysDesc": "Personnaliser les raccourcis",
  "set.key.edit": "\xC9diter le n\u0153ud",
  "set.key.sibling": "Ajouter un fr\xE8re",
  "set.key.child": "Ajouter un enfant",
  "set.key.focus": "Focaliser le n\u0153ud",
  "set.key.undo": "Annuler",
  "set.key.redo": "Refaire",
  "set.key.lineBreak": "Retour \xE0 la ligne (en \xE9dition)",
  "set.key.dragCanvas": "D\xE9placer le canevas",
  "set.key.zoomIn": "Zoom avant",
  "set.key.zoomOut": "Zoom arri\xE8re",
  "set.key.zoomReset": "R\xE9initialiser zoom",
  "set.key.up": "Naviguer haut",
  "set.key.down": "Naviguer bas",
  "set.key.left": "Naviguer gauche",
  "set.key.right": "Naviguer droite",
  "set.key.press": "Appuyez...",
  "set.scroll": "D\xE9filement et zoom",
  "set.invertY": "Inverser d\xE9filement V",
  "set.invertX": "Inverser d\xE9filement H",
  "set.invertZoom": "Inverser zoom",
  "set.editOnCreate": "\xC9diter \xE0 la cr\xE9ation",
  "set.editOnCreateDesc": "Mode \xE9dition \xE0 la cr\xE9ation",
  "set.rootName": "Nom racine",
  "set.rootNameDesc": "Nom par d\xE9faut des racines",
  "set.childName": "Nom enfant",
  "set.childNameDesc": "Nom par d\xE9faut des enfants",
  "set.typeToEdit": "Saisie pour \xE9diter",
  "set.typeToEditDesc": "\xC9diter en tapant quand un n\u0153ud est s\xE9lectionn\xE9"
};
var _de = {
  "tb.root": "\u2795 Wurzel",
  "tb.undo": "\u21A9 R\xFCckg\xE4ngig",
  "tb.redo": "\u21AA Wiederholen",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F Karte",
  "tb.style": "\u{1F3A8} Stil",
  "tb.focus": "Fokus",
  "tb.search": "Suchen",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:Suchen | Leertaste:Bearbeiten | Ctrl+C/V/X",
  "tb.newRoot": "Neue Wurzel",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Markdown-Modus",
  "tb.tipStyle": "Stil-Panel",
  "tb.tipFocus": "Knoten fokussieren",
  "tb.tipSearch": "Knoten suchen",
  "tb.tipSettings": "Einstellungen",
  "tb.zoomIn": "Vergr\xF6\xDFern",
  "tb.zoomOut": "Verkleinern",
  "sm.customRainbow": "+ Benutzerdefiniert",
  "ctx.batchDel": "\u{1F5D1}\uFE0F Alle l\xF6schen",
  "ctx.editStyle": "\u{1F3A8} Stil bearbeiten",
  "ctx.newRoot": "\u2795 Neue Wurzel",
  "ctx.undo": "\u21A9 R\xFCckg\xE4ngig",
  "ctx.redo": "\u21AA Wiederholen",
  "ctx.globalStyle": "\u{1F3A8} Globaler Stil",
  "ctx.edit": "\u270F\uFE0F Bearbeiten",
  "ctx.style": "\u{1F3A8} Stil",
  "ctx.copy": "\u{1F4CB} Kopieren",
  "ctx.cut": "\u2702\uFE0F Ausschneiden",
  "ctx.paste": "\u{1F4CC} Einf\xFCgen",
  "ctx.child": "\u2795 Kindknoten",
  "ctx.leftChild": "\u2B05 Linker Kindknoten",
  "ctx.sibling": "\u2795 Geschwister",
  "ctx.delete": "\u{1F5D1}\uFE0F L\xF6schen",
  "ctx.hideToolbar": "Werkzeugleiste ausblenden",
  "sm.title": "\u{1F3A8} Globaler Stil",
  "sm.child": "Kindknoten",
  "sm.root": "Wurzelknoten",
  "sm.bg": "Hintergrund",
  "sm.text": "Textfarbe",
  "sm.fontSize": "Schriftgr\xF6\xDFe",
  "sm.font": "Schriftart",
  "sm.borderStyle": "Rahmenstil",
  "sm.borderColor": "Rahmenfarbe",
  "sm.borderWidth": "Rahmenbreite",
  "sm.borderRadius": "Eckenradius",
  "sm.minWidth": "Min. Breite",
  "sm.minHeight": "Min. H\xF6he",
  "sm.conn": "Verbindung",
  "sm.type": "Typ",
  "sm.color": "Farbe",
  "sm.width": "Breite",
  "sm.connLength": "L\xE4nge",
  "sm.rainbow": "\u{1F308} Regenbogen",
  "sm.nodeDir": "Knotenrichtung",
  "sm.dirRight": "Rechts",
  "sm.dirLeft": "Links",
  "sm.dirBoth": "Beide",
  "sm.rainbowPalette": "Palette",
  "sm.sel": "Auswahl",
  "sm.selColor": "Auswahlfarbe",
  "sm.selWidth": "Auswahlbreite",
  "sm.selOffset": "Kontur-Versatz",
  "sm.editOutline": "Bearbeitungsrahmenfarbe",
  "sm.editOutlineWidth": "Bearbeitungsrahmenbreite",
  "sm.textAlign": "Textausrichtung",
  "sm.nodePadX": "Textabstand",
  "sm.nodeLineHeight": "Zeilenh\xF6he",
  "sm.canvasBg": "Leinwand-Hintergrund",
  "sm.reset": "Zur\xFCcksetzen",
  "sm.close": "Schlie\xDFen",
  "sm.showToolbar": "Werkzeugleiste anzeigen",
  "sm.tbPad": "Werkzeugleiste Abstand",
  "sm.tbPadT": "Oben",
  "sm.tbPadR": "Rechts",
  "sm.tbPadB": "Unten",
  "sm.tbPadL": "Links",
  "sm.tbPos": "Werkzeugleiste Position",
  "sm.tbPosTop": "Oben",
  "sm.tbPosBottom": "Unten",
  "sm.tbBg": "Werkzeugleiste Hintergrund",
  "sm.tbBtnBg": "Schaltfl\xE4che Hintergrund",
  "sm.tbBtnBorder": "Schaltfl\xE4che Rahmenstil",
  "sm.tbBtnBorderColor": "Schaltfl\xE4che Rahmenfarbe",
  "sm.tbBtnText": "Schaltfl\xE4che Textfarbe",
  "sm.tbResetDefault": "Werkzeugleiste zur\xFCcksetzen",
  "ns.title": "\u{1F3A8} Knotenstil",
  "ns.connColor": "Linienfarbe",
  "ns.connWidth": "Linienbreite",
  "ns.clear": "Anpassung zur\xFCcksetzen",
  "ns.borderRadius": "Eckenradius",
  "search.placeholder": "Knoten suchen...",
  "def.root": "Wurzel",
  "def.newRoot": "Neue Wurzel",
  "def.child": "Kind",
  "set.title": "MindZJ Einstellungen",
  "set.lang": "Sprache",
  "set.langDesc": "Oberfl\xE4chensprache",
  "set.theme": "Thema",
  "set.themeDesc": "Farbthema",
  "set.light": "Hell",
  "set.dark": "Dunkel",
  "set.toolbar": "Werkzeugleiste anzeigen",
  "set.toolbarDesc": "Werkzeugleiste anzeigen",
  "set.canvasBg": "Leinwand-Hintergrund",
  "set.canvasBgDesc": "Hintergrundfarbe",
  "set.about": "\xDCber",
  "set.version": "Version",
  "set.author": "Autor",
  "set.desc": "Funktionsreiche Open-Source-Mindmap-App f\xFCr Obsidian mit benutzerdefinierten Stilen, Regenbogen-Verbindungen, Mehrfachauswahl, Drag & Drop und Markdown-Import/Export.",
  "set.updated": "Aktualisiert",
  "set.github": "GitHub-Repository",
  "set.donate": "Open-Source-Autor unterst\xFCtzen",
  "set.keys": "Tastenkombinationen",
  "set.keysDesc": "Tastenkombinationen anpassen",
  "set.key.edit": "Knoten bearbeiten",
  "set.key.sibling": "Geschwister hinzuf\xFCgen",
  "set.key.child": "Kind hinzuf\xFCgen",
  "set.key.focus": "Knoten fokussieren",
  "set.key.undo": "R\xFCckg\xE4ngig",
  "set.key.redo": "Wiederholen",
  "set.key.lineBreak": "Zeilenumbruch (beim Bearbeiten)",
  "set.key.dragCanvas": "Leinwand ziehen",
  "set.key.zoomIn": "Vergr\xF6\xDFern",
  "set.key.zoomOut": "Verkleinern",
  "set.key.zoomReset": "Zoom zur\xFCcksetzen",
  "set.key.up": "Nach oben",
  "set.key.down": "Nach unten",
  "set.key.left": "Nach links",
  "set.key.right": "Nach rechts",
  "set.key.press": "Taste dr\xFCcken...",
  "set.scroll": "Scrollen und Zoomen",
  "set.invertY": "Vertikales Scrollen umkehren",
  "set.invertX": "Horizontales Scrollen umkehren",
  "set.invertZoom": "Zoom-Richtung umkehren",
  "set.editOnCreate": "Bei Erstellung bearbeiten",
  "set.editOnCreateDesc": "Bearbeitungsmodus beim Erstellen neuer Knoten",
  "set.rootName": "Wurzelknotenname",
  "set.rootNameDesc": "Standardname f\xFCr neue Wurzeln",
  "set.childName": "Kindknotenname",
  "set.childNameDesc": "Standardname f\xFCr neue Kinder",
  "set.typeToEdit": "Tippen zum Bearbeiten",
  "set.typeToEditDesc": "Bei Auswahl direkt bearbeiten"
};
var _es = {
  "tb.root": "\u2795 Ra\xEDz",
  "tb.undo": "\u21A9 Deshacer",
  "tb.redo": "\u21AA Rehacer",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F Mapa",
  "tb.style": "\u{1F3A8} Estilo",
  "tb.focus": "Enfocar",
  "tb.search": "Buscar",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:Buscar | Espacio:Editar | Ctrl+C/V/X",
  "tb.newRoot": "Nueva ra\xEDz",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Modo Markdown",
  "tb.tipStyle": "Panel de estilo",
  "tb.tipFocus": "Enfocar nodo",
  "tb.tipSearch": "Buscar nodos",
  "tb.tipSettings": "Ajustes",
  "tb.zoomIn": "Acercar",
  "tb.zoomOut": "Alejar",
  "sm.customRainbow": "+ Personalizado",
  "ctx.batchDel": "\u{1F5D1}\uFE0F Borrar en lote",
  "ctx.editStyle": "\u{1F3A8} Editar estilo",
  "ctx.newRoot": "\u2795 Nueva ra\xEDz",
  "ctx.undo": "\u21A9 Deshacer",
  "ctx.redo": "\u21AA Rehacer",
  "ctx.globalStyle": "\u{1F3A8} Estilo global",
  "ctx.edit": "\u270F\uFE0F Editar",
  "ctx.style": "\u{1F3A8} Estilo",
  "ctx.copy": "\u{1F4CB} Copiar",
  "ctx.cut": "\u2702\uFE0F Cortar",
  "ctx.paste": "\u{1F4CC} Pegar",
  "ctx.child": "\u2795 Hijo",
  "ctx.leftChild": "\u2B05 Hijo izquierdo",
  "ctx.sibling": "\u2795 Hermano",
  "ctx.delete": "\u{1F5D1}\uFE0F Eliminar",
  "ctx.hideToolbar": "Ocultar barra",
  "sm.title": "\u{1F3A8} Estilo global",
  "sm.child": "Nodo hijo",
  "sm.root": "Nodo ra\xEDz",
  "sm.bg": "Fondo",
  "sm.text": "Color de texto",
  "sm.fontSize": "Tama\xF1o",
  "sm.font": "Fuente",
  "sm.borderStyle": "Estilo borde",
  "sm.borderColor": "Color borde",
  "sm.borderWidth": "Ancho borde",
  "sm.borderRadius": "Radio borde",
  "sm.minWidth": "Ancho m\xEDn.",
  "sm.minHeight": "Alto m\xEDn.",
  "sm.conn": "Conexi\xF3n",
  "sm.type": "Tipo",
  "sm.color": "Color",
  "sm.width": "Ancho",
  "sm.connLength": "Longitud",
  "sm.rainbow": "\u{1F308} Arco\xEDris",
  "sm.nodeDir": "Direcci\xF3n",
  "sm.dirRight": "Derecha",
  "sm.dirLeft": "Izquierda",
  "sm.dirBoth": "Ambos",
  "sm.rainbowPalette": "Paleta",
  "sm.sel": "Selecci\xF3n",
  "sm.selColor": "Color selecci\xF3n",
  "sm.selWidth": "Ancho selecci\xF3n",
  "sm.selOffset": "Desplazamiento contorno",
  "sm.editOutline": "Color contorno edici\xF3n",
  "sm.editOutlineWidth": "Ancho contorno edici\xF3n",
  "sm.textAlign": "Alineaci\xF3n",
  "sm.nodePadX": "Relleno texto",
  "sm.nodeLineHeight": "Altura l\xEDnea",
  "sm.canvasBg": "Fondo lienzo",
  "sm.reset": "Restablecer",
  "sm.close": "Cerrar",
  "sm.showToolbar": "Mostrar barra",
  "sm.tbPad": "Relleno barra",
  "sm.tbPadT": "Arriba",
  "sm.tbPadR": "Derecha",
  "sm.tbPadB": "Abajo",
  "sm.tbPadL": "Izquierda",
  "sm.tbPos": "Posici\xF3n barra",
  "sm.tbPosTop": "Arriba",
  "sm.tbPosBottom": "Abajo",
  "sm.tbBg": "Fondo barra",
  "sm.tbBtnBg": "Fondo bot\xF3n",
  "sm.tbBtnBorder": "Estilo borde bot\xF3n",
  "sm.tbBtnBorderColor": "Color borde bot\xF3n",
  "sm.tbBtnText": "Color texto bot\xF3n",
  "sm.tbResetDefault": "Restablecer barra",
  "ns.title": "\u{1F3A8} Estilo nodo",
  "ns.connColor": "Color l\xEDnea",
  "ns.connWidth": "Ancho l\xEDnea",
  "ns.clear": "Borrar personalizaci\xF3n",
  "ns.borderRadius": "Radio borde",
  "search.placeholder": "Buscar nodos...",
  "def.root": "Ra\xEDz",
  "def.newRoot": "Nueva ra\xEDz",
  "def.child": "Hijo",
  "set.title": "Ajustes MindZJ",
  "set.lang": "Idioma",
  "set.langDesc": "Idioma interfaz",
  "set.theme": "Tema",
  "set.themeDesc": "Tema de color",
  "set.light": "Claro",
  "set.dark": "Oscuro",
  "set.toolbar": "Mostrar barra",
  "set.toolbarDesc": "Mostrar barra",
  "set.canvasBg": "Fondo lienzo",
  "set.canvasBgDesc": "Color de fondo",
  "set.about": "Acerca de",
  "set.version": "Versi\xF3n",
  "set.author": "Autor",
  "set.desc": "Aplicaci\xF3n de mapa mental de c\xF3digo abierto para Obsidian con estilos personalizados, conexiones arco\xEDris, multi-selecci\xF3n, arrastrar y soltar e importaci\xF3n/exportaci\xF3n Markdown.",
  "set.updated": "Actualizado",
  "set.github": "Repositorio GitHub",
  "set.donate": "Apoyar al autor open source",
  "set.keys": "Atajos de teclado",
  "set.keysDesc": "Personalizar atajos",
  "set.key.edit": "Editar nodo",
  "set.key.sibling": "A\xF1adir hermano",
  "set.key.child": "A\xF1adir hijo",
  "set.key.focus": "Enfocar nodo",
  "set.key.undo": "Deshacer",
  "set.key.redo": "Rehacer",
  "set.key.lineBreak": "Salto de l\xEDnea (en edici\xF3n)",
  "set.key.dragCanvas": "Arrastrar lienzo",
  "set.key.zoomIn": "Acercar",
  "set.key.zoomOut": "Alejar",
  "set.key.zoomReset": "Restablecer zoom",
  "set.key.up": "Arriba",
  "set.key.down": "Abajo",
  "set.key.left": "Izquierda",
  "set.key.right": "Derecha",
  "set.key.press": "Pulse...",
  "set.scroll": "Desplazamiento y zoom",
  "set.invertY": "Invertir desplazamiento V",
  "set.invertX": "Invertir desplazamiento H",
  "set.invertZoom": "Invertir zoom",
  "set.editOnCreate": "Editar al crear",
  "set.editOnCreateDesc": "Modo edici\xF3n al crear nodos",
  "set.rootName": "Nombre ra\xEDz",
  "set.rootNameDesc": "Nombre por defecto de ra\xEDces",
  "set.childName": "Nombre hijo",
  "set.childNameDesc": "Nombre por defecto de hijos",
  "set.typeToEdit": "Teclear para editar",
  "set.typeToEditDesc": "Editar al teclear con nodo seleccionado"
};
var _ru = {
  "tb.root": "\u2795 \u041A\u043E\u0440\u0435\u043D\u044C",
  "tb.undo": "\u21A9 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  "tb.redo": "\u21AA \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F \u041A\u0430\u0440\u0442\u0430",
  "tb.style": "\u{1F3A8} \u0421\u0442\u0438\u043B\u044C",
  "tb.focus": "\u0424\u043E\u043A\u0443\u0441",
  "tb.search": "\u041F\u043E\u0438\u0441\u043A",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:\u041F\u043E\u0438\u0441\u043A | \u041F\u0440\u043E\u0431\u0435\u043B:\u0420\u0435\u0434. | Ctrl+C/V/X",
  "tb.newRoot": "\u041D\u043E\u0432\u044B\u0439 \u043A\u043E\u0440\u0435\u043D\u044C",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "\u0420\u0435\u0436\u0438\u043C Markdown",
  "tb.tipStyle": "\u041F\u0430\u043D\u0435\u043B\u044C \u0441\u0442\u0438\u043B\u0435\u0439",
  "tb.tipFocus": "\u0424\u043E\u043A\u0443\u0441 \u043D\u0430 \u0443\u0437\u043B\u0435",
  "tb.tipSearch": "\u041F\u043E\u0438\u0441\u043A \u0443\u0437\u043B\u043E\u0432",
  "tb.tipSettings": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
  "tb.zoomIn": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C",
  "tb.zoomOut": "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C",
  "sm.customRainbow": "+ \u0421\u0432\u043E\u0439",
  "ctx.batchDel": "\u{1F5D1}\uFE0F \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0451",
  "ctx.editStyle": "\u{1F3A8} \u0421\u0442\u0438\u043B\u044C",
  "ctx.newRoot": "\u2795 \u041D\u043E\u0432\u044B\u0439 \u043A\u043E\u0440\u0435\u043D\u044C",
  "ctx.undo": "\u21A9 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  "ctx.redo": "\u21AA \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",
  "ctx.globalStyle": "\u{1F3A8} \u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C",
  "ctx.edit": "\u270F\uFE0F \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  "ctx.style": "\u{1F3A8} \u0421\u0442\u0438\u043B\u044C",
  "ctx.copy": "\u{1F4CB} \u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  "ctx.cut": "\u2702\uFE0F \u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C",
  "ctx.paste": "\u{1F4CC} \u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C",
  "ctx.child": "\u2795 \u0414\u043E\u0447\u0435\u0440\u043D\u0438\u0439",
  "ctx.leftChild": "\u2B05 \u041B\u0435\u0432\u044B\u0439 \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0439",
  "ctx.sibling": "\u2795 \u0421\u043E\u0441\u0435\u0434\u043D\u0438\u0439",
  "ctx.delete": "\u{1F5D1}\uFE0F \u0423\u0434\u0430\u043B\u0438\u0442\u044C",
  "ctx.hideToolbar": "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C",
  "sm.title": "\u{1F3A8} \u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C",
  "sm.child": "\u0414\u043E\u0447\u0435\u0440\u043D\u0438\u0439 \u0443\u0437\u0435\u043B",
  "sm.root": "\u041A\u043E\u0440\u043D\u0435\u0432\u043E\u0439 \u0443\u0437\u0435\u043B",
  "sm.bg": "\u0424\u043E\u043D",
  "sm.text": "\u0426\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430",
  "sm.fontSize": "\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
  "sm.font": "\u0428\u0440\u0438\u0444\u0442",
  "sm.borderStyle": "\u0421\u0442\u0438\u043B\u044C \u0440\u0430\u043C\u043A\u0438",
  "sm.borderColor": "\u0426\u0432\u0435\u0442 \u0440\u0430\u043C\u043A\u0438",
  "sm.borderWidth": "\u0428\u0438\u0440\u0438\u043D\u0430 \u0440\u0430\u043C\u043A\u0438",
  "sm.borderRadius": "\u0420\u0430\u0434\u0438\u0443\u0441",
  "sm.minWidth": "\u041C\u0438\u043D. \u0448\u0438\u0440\u0438\u043D\u0430",
  "sm.minHeight": "\u041C\u0438\u043D. \u0432\u044B\u0441\u043E\u0442\u0430",
  "sm.conn": "\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435",
  "sm.type": "\u0422\u0438\u043F",
  "sm.color": "\u0426\u0432\u0435\u0442",
  "sm.width": "\u0428\u0438\u0440\u0438\u043D\u0430",
  "sm.connLength": "\u0414\u043B\u0438\u043D\u0430",
  "sm.rainbow": "\u{1F308} \u0420\u0430\u0434\u0443\u0433\u0430",
  "sm.nodeDir": "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",
  "sm.dirRight": "\u0412\u043F\u0440\u0430\u0432\u043E",
  "sm.dirLeft": "\u0412\u043B\u0435\u0432\u043E",
  "sm.dirBoth": "\u041E\u0431\u0430",
  "sm.rainbowPalette": "\u041F\u0430\u043B\u0438\u0442\u0440\u0430",
  "sm.sel": "\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
  "sm.selColor": "\u0426\u0432\u0435\u0442 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F",
  "sm.selWidth": "\u0428\u0438\u0440\u0438\u043D\u0430 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F",
  "sm.selOffset": "\u0421\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0443\u0440\u0430",
  "sm.editOutline": "\u0426\u0432\u0435\u0442 \u043A\u043E\u043D\u0442\u0443\u0440\u0430 \u0440\u0435\u0434.",
  "sm.editOutlineWidth": "\u0428\u0438\u0440\u0438\u043D\u0430 \u043A\u043E\u043D\u0442\u0443\u0440\u0430 \u0440\u0435\u0434.",
  "sm.textAlign": "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435",
  "sm.nodePadX": "\u041E\u0442\u0441\u0442\u0443\u043F \u0442\u0435\u043A\u0441\u0442\u0430",
  "sm.nodeLineHeight": "\u0412\u044B\u0441\u043E\u0442\u0430 \u0441\u0442\u0440\u043E\u043A\u0438",
  "sm.canvasBg": "\u0424\u043E\u043D \u0445\u043E\u043B\u0441\u0442\u0430",
  "sm.reset": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",
  "sm.close": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
  "sm.showToolbar": "\u041F\u0430\u043D\u0435\u043B\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432",
  "sm.tbPad": "\u041E\u0442\u0441\u0442\u0443\u043F \u043F\u0430\u043D\u0435\u043B\u0438",
  "sm.tbPadT": "\u0421\u0432\u0435\u0440\u0445\u0443",
  "sm.tbPadR": "\u0421\u043F\u0440\u0430\u0432\u0430",
  "sm.tbPadB": "\u0421\u043D\u0438\u0437\u0443",
  "sm.tbPadL": "\u0421\u043B\u0435\u0432\u0430",
  "sm.tbPos": "\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u043F\u0430\u043D\u0435\u043B\u0438",
  "sm.tbPosTop": "\u0421\u0432\u0435\u0440\u0445\u0443",
  "sm.tbPosBottom": "\u0421\u043D\u0438\u0437\u0443",
  "sm.tbBg": "\u0424\u043E\u043D \u043F\u0430\u043D\u0435\u043B\u0438",
  "sm.tbBtnBg": "\u0424\u043E\u043D \u043A\u043D\u043E\u043F\u043A\u0438",
  "sm.tbBtnBorder": "\u0421\u0442\u0438\u043B\u044C \u0440\u0430\u043C\u043A\u0438 \u043A\u043D\u043E\u043F\u043A\u0438",
  "sm.tbBtnBorderColor": "\u0426\u0432\u0435\u0442 \u0440\u0430\u043C\u043A\u0438 \u043A\u043D\u043E\u043F\u043A\u0438",
  "sm.tbBtnText": "\u0426\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430 \u043A\u043D\u043E\u043F\u043A\u0438",
  "sm.tbResetDefault": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C",
  "ns.title": "\u{1F3A8} \u0421\u0442\u0438\u043B\u044C \u0443\u0437\u043B\u0430",
  "ns.connColor": "\u0426\u0432\u0435\u0442 \u043B\u0438\u043D\u0438\u0438",
  "ns.connWidth": "\u0428\u0438\u0440\u0438\u043D\u0430 \u043B\u0438\u043D\u0438\u0438",
  "ns.clear": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
  "ns.borderRadius": "\u0420\u0430\u0434\u0438\u0443\u0441",
  "search.placeholder": "\u041F\u043E\u0438\u0441\u043A \u0443\u0437\u043B\u043E\u0432...",
  "def.root": "\u041A\u043E\u0440\u0435\u043D\u044C",
  "def.newRoot": "\u041D\u043E\u0432\u044B\u0439 \u043A\u043E\u0440\u0435\u043D\u044C",
  "def.child": "\u0414\u043E\u0447\u0435\u0440\u043D\u0438\u0439",
  "set.title": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 MindZJ",
  "set.lang": "\u042F\u0437\u044B\u043A",
  "set.langDesc": "\u042F\u0437\u044B\u043A \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",
  "set.theme": "\u0422\u0435\u043C\u0430",
  "set.themeDesc": "\u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u0442\u0435\u043C\u0430",
  "set.light": "\u0421\u0432\u0435\u0442\u043B\u0430\u044F",
  "set.dark": "\u0422\u0451\u043C\u043D\u0430\u044F",
  "set.toolbar": "\u041F\u0430\u043D\u0435\u043B\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432",
  "set.toolbarDesc": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C",
  "set.canvasBg": "\u0424\u043E\u043D \u0445\u043E\u043B\u0441\u0442\u0430",
  "set.canvasBgDesc": "\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430",
  "set.about": "\u041E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435",
  "set.version": "\u0412\u0435\u0440\u0441\u0438\u044F",
  "set.author": "\u0410\u0432\u0442\u043E\u0440",
  "set.desc": "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442-\u043A\u0430\u0440\u0442 \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u043A\u043E\u0434\u043E\u043C \u0434\u043B\u044F Obsidian: \u0441\u0442\u0438\u043B\u0438, \u0440\u0430\u0434\u0443\u0436\u043D\u044B\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F, \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440, \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 Markdown.",
  "set.updated": "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E",
  "set.github": "\u0420\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0439 GitHub",
  "set.donate": "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0430",
  "set.keys": "\u0421\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F \u043A\u043B\u0430\u0432\u0438\u0448",
  "set.keysDesc": "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043A\u043B\u0430\u0432\u0438\u0448\u0438",
  "set.key.edit": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0437\u0435\u043B",
  "set.key.sibling": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u0441\u0435\u0434\u043D\u0438\u0439",
  "set.key.child": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0439",
  "set.key.focus": "\u0424\u043E\u043A\u0443\u0441 \u043D\u0430 \u0443\u0437\u043B\u0435",
  "set.key.undo": "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  "set.key.redo": "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",
  "set.key.lineBreak": "\u041F\u0435\u0440\u0435\u043D\u043E\u0441 \u0441\u0442\u0440\u043E\u043A\u0438 (\u0440\u0435\u0434.)",
  "set.key.dragCanvas": "\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0445\u043E\u043B\u0441\u0442\u0430",
  "set.key.zoomIn": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C",
  "set.key.zoomOut": "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C",
  "set.key.zoomReset": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043C\u0430\u0441\u0448\u0442\u0430\u0431",
  "set.key.up": "\u0412\u0432\u0435\u0440\u0445",
  "set.key.down": "\u0412\u043D\u0438\u0437",
  "set.key.left": "\u0412\u043B\u0435\u0432\u043E",
  "set.key.right": "\u0412\u043F\u0440\u0430\u0432\u043E",
  "set.key.press": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443...",
  "set.scroll": "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430 \u0438 \u043C\u0430\u0441\u0448\u0442\u0430\u0431",
  "set.invertY": "\u0418\u043D\u0432\u0435\u0440\u0442. \u0432\u0435\u0440\u0442. \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0443",
  "set.invertX": "\u0418\u043D\u0432\u0435\u0440\u0442. \u0433\u043E\u0440\u0438\u0437. \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0443",
  "set.invertZoom": "\u0418\u043D\u0432\u0435\u0440\u0442. \u043C\u0430\u0441\u0448\u0442\u0430\u0431",
  "set.editOnCreate": "\u0420\u0435\u0434. \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438",
  "set.editOnCreateDesc": "\u0420\u0435\u0436\u0438\u043C \u0440\u0435\u0434. \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438",
  "set.rootName": "\u0418\u043C\u044F \u043A\u043E\u0440\u043D\u044F",
  "set.rootNameDesc": "\u0418\u043C\u044F \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0434\u043B\u044F \u043A\u043E\u0440\u043D\u0435\u0439",
  "set.childName": "\u0418\u043C\u044F \u0434\u043E\u0447\u0435\u0440\u043D\u0435\u0433\u043E",
  "set.childNameDesc": "\u0418\u043C\u044F \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0434\u043B\u044F \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0445",
  "set.typeToEdit": "\u041F\u0435\u0447\u0430\u0442\u0430\u0442\u044C \u0434\u043B\u044F \u0440\u0435\u0434.",
  "set.typeToEditDesc": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u0438 \u043A\u043B\u0430\u0432\u0438\u0448"
};
var _sv = {
  "tb.root": "\u2795 Rot",
  "tb.undo": "\u21A9 \xC5ngra",
  "tb.redo": "\u21AA G\xF6r om",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F Karta",
  "tb.style": "\u{1F3A8} Stil",
  "tb.focus": "Fokus",
  "tb.search": "S\xF6k",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:S\xF6k | Mellanslag:Redigera | Ctrl+C/V/X",
  "tb.newRoot": "Ny rot",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Markdown-l\xE4ge",
  "tb.tipStyle": "Stilpanel",
  "tb.tipFocus": "Fokusera nod",
  "tb.tipSearch": "S\xF6k noder",
  "tb.tipSettings": "Inst\xE4llningar",
  "tb.zoomIn": "Zooma in",
  "tb.zoomOut": "Zooma ut",
  "sm.customRainbow": "+ Anpassad",
  "ctx.batchDel": "\u{1F5D1}\uFE0F Radera alla",
  "ctx.editStyle": "\u{1F3A8} Redigera stil",
  "ctx.newRoot": "\u2795 Ny rot",
  "ctx.undo": "\u21A9 \xC5ngra",
  "ctx.redo": "\u21AA G\xF6r om",
  "ctx.globalStyle": "\u{1F3A8} Global stil",
  "ctx.edit": "\u270F\uFE0F Redigera",
  "ctx.style": "\u{1F3A8} Stil",
  "ctx.copy": "\u{1F4CB} Kopiera",
  "ctx.cut": "\u2702\uFE0F Klipp ut",
  "ctx.paste": "\u{1F4CC} Klistra in",
  "ctx.child": "\u2795 Barn",
  "ctx.leftChild": "\u2B05 V\xE4nster barn",
  "ctx.sibling": "\u2795 Syskon",
  "ctx.delete": "\u{1F5D1}\uFE0F Radera",
  "ctx.hideToolbar": "D\xF6lj verktygsf\xE4lt",
  "sm.title": "\u{1F3A8} Global stil",
  "sm.child": "Barnnod",
  "sm.root": "Rotnod",
  "sm.bg": "Bakgrund",
  "sm.text": "Textf\xE4rg",
  "sm.fontSize": "Teckenstorlek",
  "sm.font": "Teckensnitt",
  "sm.borderStyle": "Kantstil",
  "sm.borderColor": "Kantf\xE4rg",
  "sm.borderWidth": "Kantbredd",
  "sm.borderRadius": "Kantradie",
  "sm.minWidth": "Min. bredd",
  "sm.minHeight": "Min. h\xF6jd",
  "sm.conn": "Koppling",
  "sm.type": "Typ",
  "sm.color": "F\xE4rg",
  "sm.width": "Bredd",
  "sm.connLength": "L\xE4ngd",
  "sm.rainbow": "\u{1F308} Regnb\xE5ge",
  "sm.nodeDir": "Nodriktning",
  "sm.dirRight": "H\xF6ger",
  "sm.dirLeft": "V\xE4nster",
  "sm.dirBoth": "B\xE5da",
  "sm.rainbowPalette": "Palett",
  "sm.sel": "Markering",
  "sm.selColor": "Markeringsf\xE4rg",
  "sm.selWidth": "Markeringsbredd",
  "sm.selOffset": "Konturoffset",
  "sm.editOutline": "Redigeringskonturf\xE4rg",
  "sm.editOutlineWidth": "Redigeringskonturbredd",
  "sm.textAlign": "Textjustering",
  "sm.nodePadX": "Textavst\xE5nd",
  "sm.nodeLineHeight": "Radh\xF6jd",
  "sm.canvasBg": "Dukbakgrund",
  "sm.reset": "\xC5terst\xE4ll",
  "sm.close": "St\xE4ng",
  "sm.showToolbar": "Visa verktygsf\xE4lt",
  "sm.tbPad": "F\xE4ltsavst\xE5nd",
  "sm.tbPadT": "Ovan",
  "sm.tbPadR": "H\xF6ger",
  "sm.tbPadB": "Nedan",
  "sm.tbPadL": "V\xE4nster",
  "sm.tbPos": "F\xE4ltsposition",
  "sm.tbPosTop": "Ovan",
  "sm.tbPosBottom": "Nedan",
  "sm.tbBg": "F\xE4ltsbakgrund",
  "sm.tbBtnBg": "Knappbakgrund",
  "sm.tbBtnBorder": "Knappkantstil",
  "sm.tbBtnBorderColor": "Knappkantf\xE4rg",
  "sm.tbBtnText": "Knapptextf\xE4rg",
  "sm.tbResetDefault": "\xC5terst\xE4ll f\xE4lt",
  "ns.title": "\u{1F3A8} Nodstil",
  "ns.connColor": "Linjef\xE4rg",
  "ns.connWidth": "Linjebredd",
  "ns.clear": "Rensa",
  "ns.borderRadius": "Kantradie",
  "search.placeholder": "S\xF6k noder...",
  "def.root": "Rot",
  "def.newRoot": "Ny rot",
  "def.child": "Barn",
  "set.title": "MindZJ Inst\xE4llningar",
  "set.lang": "Spr\xE5k",
  "set.langDesc": "Gr\xE4nssnittsspr\xE5k",
  "set.theme": "Tema",
  "set.themeDesc": "F\xE4rgtema",
  "set.light": "Ljust",
  "set.dark": "M\xF6rkt",
  "set.toolbar": "Visa verktygsf\xE4lt",
  "set.toolbarDesc": "Visa verktygsf\xE4lt",
  "set.canvasBg": "Dukbakgrund",
  "set.canvasBgDesc": "Bakgrundsf\xE4rg",
  "set.about": "Om",
  "set.version": "Version",
  "set.author": "F\xF6rfattare",
  "set.desc": "Funktionsrik mindmap-app med \xF6ppen k\xE4llkod f\xF6r Obsidian med anpassade stilar, regnb\xE5gskopplingar, flerval, dra-och-sl\xE4pp och Markdown-import/export.",
  "set.updated": "Uppdaterad",
  "set.github": "GitHub-f\xF6rr\xE5d",
  "set.donate": "St\xF6d f\xF6rfattaren",
  "set.keys": "Kortkommandon",
  "set.keysDesc": "Anpassa kortkommandon",
  "set.key.edit": "Redigera nod",
  "set.key.sibling": "L\xE4gg till syskon",
  "set.key.child": "L\xE4gg till barn",
  "set.key.focus": "Fokusera nod",
  "set.key.undo": "\xC5ngra",
  "set.key.redo": "G\xF6r om",
  "set.key.lineBreak": "Radbrytning (redigering)",
  "set.key.dragCanvas": "Dra arbetsyta",
  "set.key.zoomIn": "Zooma in",
  "set.key.zoomOut": "Zooma ut",
  "set.key.zoomReset": "\xC5terst\xE4ll zoom",
  "set.key.up": "Navigera upp\xE5t",
  "set.key.down": "Navigera ned\xE5t",
  "set.key.left": "Navigera v\xE4nster",
  "set.key.right": "Navigera h\xF6ger",
  "set.key.press": "Tryck...",
  "set.scroll": "Scroll och zoom",
  "set.invertY": "Invertera V-scroll",
  "set.invertX": "Invertera H-scroll",
  "set.invertZoom": "Invertera zoom",
  "set.editOnCreate": "Redigera vid skapande",
  "set.editOnCreateDesc": "Redigeringsl\xE4ge vid nya noder",
  "set.rootName": "Rotnamn",
  "set.rootNameDesc": "Standardnamn f\xF6r nya r\xF6tter",
  "set.childName": "Barnnamn",
  "set.childNameDesc": "Standardnamn f\xF6r nya barn",
  "set.typeToEdit": "Skriv f\xF6r att redigera",
  "set.typeToEditDesc": "Redigera genom att skriva"
};
var _hi = {
  "tb.root": "\u2795 \u092E\u0942\u0932",
  "tb.undo": "\u21A9 \u092A\u0942\u0930\u094D\u0935\u0935\u0924",
  "tb.redo": "\u21AA \u092B\u093F\u0930 \u0938\u0947",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F \u092E\u0948\u092A",
  "tb.style": "\u{1F3A8} \u0936\u0948\u0932\u0940",
  "tb.focus": "\u092B\u093C\u094B\u0915\u0938",
  "tb.search": "\u0916\u094B\u091C\u0947\u0902",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:\u0916\u094B\u091C\u0947\u0902 | Space:\u0938\u0902\u092A\u093E\u0926\u0928 | Ctrl+C/V/X",
  "tb.newRoot": "\u0928\u092F\u093E \u092E\u0942\u0932",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Markdown \u092E\u094B\u0921",
  "tb.tipStyle": "\u0936\u0948\u0932\u0940 \u092A\u0948\u0928\u0932",
  "tb.tipFocus": "\u0928\u094B\u0921 \u092A\u0930 \u092B\u093C\u094B\u0915\u0938",
  "tb.tipSearch": "\u0928\u094B\u0921 \u0916\u094B\u091C\u0947\u0902",
  "tb.tipSettings": "\u0938\u0947\u091F\u093F\u0902\u0917\u094D\u0938",
  "tb.zoomIn": "\u091C\u093C\u0942\u092E \u0907\u0928",
  "tb.zoomOut": "\u091C\u093C\u0942\u092E \u0906\u0909\u091F",
  "sm.customRainbow": "+ \u0915\u0938\u094D\u091F\u092E",
  "ctx.batchDel": "\u{1F5D1}\uFE0F \u0938\u092D\u0940 \u0939\u091F\u093E\u090F\u0902",
  "ctx.editStyle": "\u{1F3A8} \u0936\u0948\u0932\u0940 \u0938\u0902\u092A\u093E\u0926\u093F\u0924 \u0915\u0930\u0947\u0902",
  "ctx.newRoot": "\u2795 \u0928\u092F\u093E \u092E\u0942\u0932",
  "ctx.undo": "\u21A9 \u092A\u0942\u0930\u094D\u0935\u0935\u0924",
  "ctx.redo": "\u21AA \u092B\u093F\u0930 \u0938\u0947",
  "ctx.globalStyle": "\u{1F3A8} \u0935\u0948\u0936\u094D\u0935\u093F\u0915 \u0936\u0948\u0932\u0940",
  "ctx.edit": "\u270F\uFE0F \u0938\u0902\u092A\u093E\u0926\u093F\u0924 \u0915\u0930\u0947\u0902",
  "ctx.style": "\u{1F3A8} \u0936\u0948\u0932\u0940",
  "ctx.copy": "\u{1F4CB} \u0915\u0949\u092A\u0940",
  "ctx.cut": "\u2702\uFE0F \u0915\u091F",
  "ctx.paste": "\u{1F4CC} \u092A\u0947\u0938\u094D\u091F",
  "ctx.child": "\u2795 \u091A\u093E\u0907\u0932\u094D\u0921",
  "ctx.leftChild": "\u2B05 \u092C\u093E\u092F\u093E\u0902 \u091A\u093E\u0907\u0932\u094D\u0921",
  "ctx.sibling": "\u2795 \u0938\u093F\u092C\u0932\u093F\u0902\u0917",
  "ctx.delete": "\u{1F5D1}\uFE0F \u0939\u091F\u093E\u090F\u0902",
  "ctx.hideToolbar": "\u091F\u0942\u0932\u092C\u093E\u0930 \u091B\u0941\u092A\u093E\u090F\u0902",
  "sm.title": "\u{1F3A8} \u0935\u0948\u0936\u094D\u0935\u093F\u0915 \u0936\u0948\u0932\u0940",
  "sm.child": "\u091A\u093E\u0907\u0932\u094D\u0921 \u0928\u094B\u0921",
  "sm.root": "\u092E\u0942\u0932 \u0928\u094B\u0921",
  "sm.bg": "\u092A\u0943\u0937\u094D\u0920\u092D\u0942\u092E\u093F",
  "sm.text": "\u091F\u0947\u0915\u094D\u0938\u094D\u091F \u0930\u0902\u0917",
  "sm.fontSize": "\u092B\u093C\u0949\u0928\u094D\u091F \u0906\u0915\u093E\u0930",
  "sm.font": "\u092B\u093C\u0949\u0928\u094D\u091F",
  "sm.borderStyle": "\u092C\u0949\u0930\u094D\u0921\u0930 \u0936\u0948\u0932\u0940",
  "sm.borderColor": "\u092C\u0949\u0930\u094D\u0921\u0930 \u0930\u0902\u0917",
  "sm.borderWidth": "\u092C\u0949\u0930\u094D\u0921\u0930 \u091A\u094C\u0921\u093C\u093E\u0908",
  "sm.borderRadius": "\u092C\u0949\u0930\u094D\u0921\u0930 \u0924\u094D\u0930\u093F\u091C\u094D\u092F\u093E",
  "sm.minWidth": "\u0928\u094D\u092F\u0942\u0928\u0924\u092E \u091A\u094C\u0921\u093C\u093E\u0908",
  "sm.minHeight": "\u0928\u094D\u092F\u0942\u0928\u0924\u092E \u090A\u0902\u091A\u093E\u0908",
  "sm.conn": "\u0915\u0928\u0947\u0915\u094D\u0936\u0928",
  "sm.type": "\u092A\u094D\u0930\u0915\u093E\u0930",
  "sm.color": "\u0930\u0902\u0917",
  "sm.width": "\u091A\u094C\u0921\u093C\u093E\u0908",
  "sm.connLength": "\u0932\u0902\u092C\u093E\u0908",
  "sm.rainbow": "\u{1F308} \u0907\u0902\u0926\u094D\u0930\u0927\u0928\u0941\u0937",
  "sm.nodeDir": "\u0926\u093F\u0936\u093E",
  "sm.dirRight": "\u0926\u093E\u090F\u0902",
  "sm.dirLeft": "\u092C\u093E\u090F\u0902",
  "sm.dirBoth": "\u0926\u094B\u0928\u094B\u0902",
  "sm.rainbowPalette": "\u092A\u0948\u0932\u0947\u091F",
  "sm.sel": "\u091A\u092F\u0928",
  "sm.selColor": "\u091A\u092F\u0928 \u0930\u0902\u0917",
  "sm.selWidth": "\u091A\u092F\u0928 \u091A\u094C\u0921\u093C\u093E\u0908",
  "sm.selOffset": "\u0906\u0909\u091F\u0932\u093E\u0907\u0928 \u0911\u092B\u0938\u0947\u091F",
  "sm.editOutline": "\u0938\u0902\u092A\u093E\u0926\u0928 \u0906\u0909\u091F\u0932\u093E\u0907\u0928 \u0930\u0902\u0917",
  "sm.editOutlineWidth": "\u0938\u0902\u092A\u093E\u0926\u0928 \u0906\u0909\u091F\u0932\u093E\u0907\u0928 \u091A\u094C\u0921\u093C\u093E\u0908",
  "sm.textAlign": "\u091F\u0947\u0915\u094D\u0938\u094D\u091F \u0938\u0902\u0930\u0947\u0916\u0923",
  "sm.nodePadX": "\u091F\u0947\u0915\u094D\u0938\u094D\u091F \u092A\u0948\u0921\u093F\u0902\u0917",
  "sm.nodeLineHeight": "\u092A\u0902\u0915\u094D\u0924\u093F \u090A\u0902\u091A\u093E\u0908",
  "sm.canvasBg": "\u0915\u0948\u0928\u0935\u093E\u0938 \u092A\u0943\u0937\u094D\u0920\u092D\u0942\u092E\u093F",
  "sm.reset": "\u0930\u0940\u0938\u0947\u091F",
  "sm.close": "\u092C\u0902\u0926",
  "sm.showToolbar": "\u091F\u0942\u0932\u092C\u093E\u0930 \u0926\u093F\u0916\u093E\u090F\u0902",
  "sm.tbPad": "\u091F\u0942\u0932\u092C\u093E\u0930 \u092A\u0948\u0921\u093F\u0902\u0917",
  "sm.tbPadT": "\u090A\u092A\u0930",
  "sm.tbPadR": "\u0926\u093E\u090F\u0902",
  "sm.tbPadB": "\u0928\u0940\u091A\u0947",
  "sm.tbPadL": "\u092C\u093E\u090F\u0902",
  "sm.tbPos": "\u091F\u0942\u0932\u092C\u093E\u0930 \u0938\u094D\u0925\u093F\u0924\u093F",
  "sm.tbPosTop": "\u090A\u092A\u0930",
  "sm.tbPosBottom": "\u0928\u0940\u091A\u0947",
  "sm.tbBg": "\u091F\u0942\u0932\u092C\u093E\u0930 \u092A\u0943\u0937\u094D\u0920\u092D\u0942\u092E\u093F",
  "sm.tbBtnBg": "\u092C\u091F\u0928 \u092A\u0943\u0937\u094D\u0920\u092D\u0942\u092E\u093F",
  "sm.tbBtnBorder": "\u092C\u091F\u0928 \u092C\u0949\u0930\u094D\u0921\u0930 \u0936\u0948\u0932\u0940",
  "sm.tbBtnBorderColor": "\u092C\u091F\u0928 \u092C\u0949\u0930\u094D\u0921\u0930 \u0930\u0902\u0917",
  "sm.tbBtnText": "\u092C\u091F\u0928 \u091F\u0947\u0915\u094D\u0938\u094D\u091F \u0930\u0902\u0917",
  "sm.tbResetDefault": "\u091F\u0942\u0932\u092C\u093E\u0930 \u0930\u0940\u0938\u0947\u091F",
  "ns.title": "\u{1F3A8} \u0928\u094B\u0921 \u0936\u0948\u0932\u0940",
  "ns.connColor": "\u0932\u093E\u0907\u0928 \u0930\u0902\u0917",
  "ns.connWidth": "\u0932\u093E\u0907\u0928 \u091A\u094C\u0921\u093C\u093E\u0908",
  "ns.clear": "\u0915\u0938\u094D\u091F\u092E \u0938\u093E\u092B\u093C \u0915\u0930\u0947\u0902",
  "ns.borderRadius": "\u092C\u0949\u0930\u094D\u0921\u0930 \u0924\u094D\u0930\u093F\u091C\u094D\u092F\u093E",
  "search.placeholder": "\u0928\u094B\u0921 \u0916\u094B\u091C\u0947\u0902...",
  "def.root": "\u092E\u0942\u0932",
  "def.newRoot": "\u0928\u092F\u093E \u092E\u0942\u0932",
  "def.child": "\u091A\u093E\u0907\u0932\u094D\u0921",
  "set.title": "MindZJ \u0938\u0947\u091F\u093F\u0902\u0917\u094D\u0938",
  "set.lang": "\u092D\u093E\u0937\u093E",
  "set.langDesc": "\u0907\u0902\u091F\u0930\u092B\u093C\u0947\u0938 \u092D\u093E\u0937\u093E",
  "set.theme": "\u0925\u0940\u092E",
  "set.themeDesc": "\u0930\u0902\u0917 \u0925\u0940\u092E",
  "set.light": "\u0932\u093E\u0907\u091F",
  "set.dark": "\u0921\u093E\u0930\u094D\u0915",
  "set.toolbar": "\u091F\u0942\u0932\u092C\u093E\u0930 \u0926\u093F\u0916\u093E\u090F\u0902",
  "set.toolbarDesc": "\u091F\u0942\u0932\u092C\u093E\u0930 \u0926\u093F\u0916\u093E\u090F\u0902",
  "set.canvasBg": "\u0915\u0948\u0928\u0935\u093E\u0938 \u092A\u0943\u0937\u094D\u0920\u092D\u0942\u092E\u093F",
  "set.canvasBgDesc": "\u092A\u0943\u0937\u094D\u0920\u092D\u0942\u092E\u093F \u0930\u0902\u0917",
  "set.about": "\u092A\u0930\u093F\u091A\u092F",
  "set.version": "\u0938\u0902\u0938\u094D\u0915\u0930\u0923",
  "set.author": "\u0932\u0947\u0916\u0915",
  "set.desc": "Obsidian \u0915\u0947 \u0932\u093F\u090F \u0915\u0938\u094D\u091F\u092E \u0938\u094D\u091F\u093E\u0907\u0932, \u0907\u0902\u0926\u094D\u0930\u0927\u0928\u0941\u0937 \u0915\u0928\u0947\u0915\u094D\u0936\u0928, \u092E\u0932\u094D\u091F\u0940-\u0938\u0947\u0932\u0947\u0915\u094D\u091F, \u0921\u094D\u0930\u0948\u0917 \u090F\u0902\u0921 \u0921\u094D\u0930\u0949\u092A \u0914\u0930 Markdown \u0906\u092F\u093E\u0924/\u0928\u093F\u0930\u094D\u092F\u093E\u0924 \u0915\u0947 \u0938\u093E\u0925 \u092E\u093E\u0907\u0902\u0921 \u092E\u0948\u092A \u0910\u092A\u0964",
  "set.updated": "\u0905\u092A\u0921\u0947\u091F\u0947\u0921",
  "set.github": "GitHub \u0930\u093F\u092A\u0949\u091C\u093C\u093F\u091F\u0930\u0940",
  "set.donate": "\u0913\u092A\u0928 \u0938\u094B\u0930\u094D\u0938 \u0932\u0947\u0916\u0915 \u0915\u093E \u0938\u092E\u0930\u094D\u0925\u0928 \u0915\u0930\u0947\u0902",
  "set.keys": "\u0915\u0940\u092C\u094B\u0930\u094D\u0921 \u0936\u0949\u0930\u094D\u091F\u0915\u091F",
  "set.keysDesc": "\u0936\u0949\u0930\u094D\u091F\u0915\u091F \u0905\u0928\u0941\u0915\u0942\u0932\u093F\u0924 \u0915\u0930\u0947\u0902",
  "set.key.edit": "\u0928\u094B\u0921 \u0938\u0902\u092A\u093E\u0926\u093F\u0924 \u0915\u0930\u0947\u0902",
  "set.key.sibling": "\u0938\u093F\u092C\u0932\u093F\u0902\u0917 \u091C\u094B\u0921\u093C\u0947\u0902",
  "set.key.child": "\u091A\u093E\u0907\u0932\u094D\u0921 \u091C\u094B\u0921\u093C\u0947\u0902",
  "set.key.focus": "\u0928\u094B\u0921 \u092A\u0930 \u092B\u093C\u094B\u0915\u0938",
  "set.key.undo": "\u092A\u0942\u0930\u094D\u0935\u0935\u0924",
  "set.key.redo": "\u092B\u093F\u0930 \u0938\u0947",
  "set.key.lineBreak": "\u0932\u093E\u0907\u0928 \u092C\u094D\u0930\u0947\u0915 (\u0938\u0902\u092A\u093E\u0926\u0928 \u092E\u0947\u0902)",
  "set.key.dragCanvas": "\u0915\u0948\u0928\u0935\u093E\u0938 \u0916\u0940\u0902\u091A\u0947\u0902",
  "set.key.zoomIn": "\u091C\u093C\u0942\u092E \u0907\u0928",
  "set.key.zoomOut": "\u091C\u093C\u0942\u092E \u0906\u0909\u091F",
  "set.key.zoomReset": "\u091C\u093C\u0942\u092E \u0930\u0940\u0938\u0947\u091F",
  "set.key.up": "\u090A\u092A\u0930",
  "set.key.down": "\u0928\u0940\u091A\u0947",
  "set.key.left": "\u092C\u093E\u090F\u0902",
  "set.key.right": "\u0926\u093E\u090F\u0902",
  "set.key.press": "\u0915\u0941\u0902\u091C\u0940 \u0926\u092C\u093E\u090F\u0902...",
  "set.scroll": "\u0938\u094D\u0915\u094D\u0930\u0949\u0932 \u0914\u0930 \u091C\u093C\u0942\u092E",
  "set.invertY": "\u0935\u0930\u094D\u091F\u093F\u0915\u0932 \u0938\u094D\u0915\u094D\u0930\u0949\u0932 \u0909\u0932\u091F\u0947\u0902",
  "set.invertX": "\u0939\u0949\u0930\u093F\u091C\u093C\u0949\u0928\u094D\u091F\u0932 \u0938\u094D\u0915\u094D\u0930\u0949\u0932 \u0909\u0932\u091F\u0947\u0902",
  "set.invertZoom": "\u091C\u093C\u0942\u092E \u0926\u093F\u0936\u093E \u0909\u0932\u091F\u0947\u0902",
  "set.editOnCreate": "\u092C\u0928\u093E\u0924\u0947 \u0938\u092E\u092F \u0938\u0902\u092A\u093E\u0926\u0928",
  "set.editOnCreateDesc": "\u0928\u090F \u0928\u094B\u0921 \u092C\u0928\u093E\u0924\u0947 \u0938\u092E\u092F \u0938\u0902\u092A\u093E\u0926\u0928 \u092E\u094B\u0921",
  "set.rootName": "\u092E\u0942\u0932 \u0928\u093E\u092E",
  "set.rootNameDesc": "\u0928\u090F \u092E\u0942\u0932 \u0915\u093E \u0921\u093F\u092B\u093C\u0949\u0932\u094D\u091F \u0928\u093E\u092E",
  "set.childName": "\u091A\u093E\u0907\u0932\u094D\u0921 \u0928\u093E\u092E",
  "set.childNameDesc": "\u0928\u090F \u091A\u093E\u0907\u0932\u094D\u0921 \u0915\u093E \u0921\u093F\u092B\u093C\u0949\u0932\u094D\u091F \u0928\u093E\u092E",
  "set.typeToEdit": "\u091F\u093E\u0907\u092A \u0915\u0930\u0947\u0902 \u0938\u0902\u092A\u093E\u0926\u0928",
  "set.typeToEditDesc": "\u091A\u092F\u0928\u093F\u0924 \u0928\u094B\u0921 \u092A\u0930 \u091F\u093E\u0907\u092A \u0915\u0930\u0915\u0947 \u0938\u0902\u092A\u093E\u0926\u0928"
};
var _ko = {
  "tb.root": "\u2795 \uB8E8\uD2B8",
  "tb.undo": "\u21A9 \uC2E4\uD589\uCDE8\uC18C",
  "tb.redo": "\u21AA \uB2E4\uC2DC\uC2E4\uD589",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F \uB9F5",
  "tb.style": "\u{1F3A8} \uC2A4\uD0C0\uC77C",
  "tb.focus": "\uD3EC\uCEE4\uC2A4",
  "tb.search": "\uAC80\uC0C9",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:\uAC80\uC0C9 | Space:\uD3B8\uC9D1 | Ctrl+C/V/X",
  "tb.newRoot": "\uC0C8 \uB8E8\uD2B8",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Markdown \uBAA8\uB4DC",
  "tb.tipStyle": "\uC2A4\uD0C0\uC77C \uD328\uB110",
  "tb.tipFocus": "\uB178\uB4DC \uD3EC\uCEE4\uC2A4",
  "tb.tipSearch": "\uB178\uB4DC \uAC80\uC0C9",
  "tb.tipSettings": "\uC124\uC815",
  "tb.zoomIn": "\uD655\uB300",
  "tb.zoomOut": "\uCD95\uC18C",
  "sm.customRainbow": "+ \uC0AC\uC6A9\uC790 \uC815\uC758",
  "ctx.batchDel": "\u{1F5D1}\uFE0F \uC77C\uAD04 \uC0AD\uC81C",
  "ctx.editStyle": "\u{1F3A8} \uC2A4\uD0C0\uC77C \uD3B8\uC9D1",
  "ctx.newRoot": "\u2795 \uC0C8 \uB8E8\uD2B8",
  "ctx.undo": "\u21A9 \uC2E4\uD589\uCDE8\uC18C",
  "ctx.redo": "\u21AA \uB2E4\uC2DC\uC2E4\uD589",
  "ctx.globalStyle": "\u{1F3A8} \uC804\uC5ED \uC2A4\uD0C0\uC77C",
  "ctx.edit": "\u270F\uFE0F \uD3B8\uC9D1",
  "ctx.style": "\u{1F3A8} \uC2A4\uD0C0\uC77C",
  "ctx.copy": "\u{1F4CB} \uBCF5\uC0AC",
  "ctx.cut": "\u2702\uFE0F \uC798\uB77C\uB0B4\uAE30",
  "ctx.paste": "\u{1F4CC} \uBD99\uC5EC\uB123\uAE30",
  "ctx.child": "\u2795 \uC790\uC2DD",
  "ctx.leftChild": "\u2B05 \uC67C\uCABD \uC790\uC2DD",
  "ctx.sibling": "\u2795 \uD615\uC81C",
  "ctx.delete": "\u{1F5D1}\uFE0F \uC0AD\uC81C",
  "ctx.hideToolbar": "\uB3C4\uAD6C\uBAA8\uC74C \uC228\uAE30\uAE30",
  "sm.title": "\u{1F3A8} \uC804\uC5ED \uC2A4\uD0C0\uC77C",
  "sm.child": "\uC790\uC2DD \uB178\uB4DC",
  "sm.root": "\uB8E8\uD2B8 \uB178\uB4DC",
  "sm.bg": "\uBC30\uACBD",
  "sm.text": "\uD14D\uC2A4\uD2B8 \uC0C9\uC0C1",
  "sm.fontSize": "\uAE00\uAF34 \uD06C\uAE30",
  "sm.font": "\uAE00\uAF34",
  "sm.borderStyle": "\uD14C\uB450\uB9AC \uC2A4\uD0C0\uC77C",
  "sm.borderColor": "\uD14C\uB450\uB9AC \uC0C9\uC0C1",
  "sm.borderWidth": "\uD14C\uB450\uB9AC \uB108\uBE44",
  "sm.borderRadius": "\uD14C\uB450\uB9AC \uBC18\uACBD",
  "sm.minWidth": "\uCD5C\uC18C \uB108\uBE44",
  "sm.minHeight": "\uCD5C\uC18C \uB192\uC774",
  "sm.conn": "\uC5F0\uACB0\uC120",
  "sm.type": "\uC720\uD615",
  "sm.color": "\uC0C9\uC0C1",
  "sm.width": "\uB108\uBE44",
  "sm.connLength": "\uAE38\uC774",
  "sm.rainbow": "\u{1F308} \uB808\uC778\uBCF4\uC6B0",
  "sm.nodeDir": "\uB178\uB4DC \uBC29\uD5A5",
  "sm.dirRight": "\uC624\uB978\uCABD",
  "sm.dirLeft": "\uC67C\uCABD",
  "sm.dirBoth": "\uC591\uCABD",
  "sm.rainbowPalette": "\uD314\uB808\uD2B8",
  "sm.sel": "\uC120\uD0DD",
  "sm.selColor": "\uC120\uD0DD \uC0C9\uC0C1",
  "sm.selWidth": "\uC120\uD0DD \uB108\uBE44",
  "sm.selOffset": "\uC724\uACFD\uC120 \uC624\uD504\uC14B",
  "sm.editOutline": "\uD3B8\uC9D1 \uC724\uACFD\uC120 \uC0C9\uC0C1",
  "sm.editOutlineWidth": "\uD3B8\uC9D1 \uC724\uACFD\uC120 \uB108\uBE44",
  "sm.textAlign": "\uD14D\uC2A4\uD2B8 \uC815\uB82C",
  "sm.nodePadX": "\uD14D\uC2A4\uD2B8 \uD328\uB529",
  "sm.nodeLineHeight": "\uC904 \uB192\uC774",
  "sm.canvasBg": "\uCE94\uBC84\uC2A4 \uBC30\uACBD",
  "sm.reset": "\uCD08\uAE30\uD654",
  "sm.close": "\uB2EB\uAE30",
  "sm.showToolbar": "\uB3C4\uAD6C\uBAA8\uC74C \uD45C\uC2DC",
  "sm.tbPad": "\uB3C4\uAD6C\uBAA8\uC74C \uD328\uB529",
  "sm.tbPadT": "\uC704",
  "sm.tbPadR": "\uC624\uB978\uCABD",
  "sm.tbPadB": "\uC544\uB798",
  "sm.tbPadL": "\uC67C\uCABD",
  "sm.tbPos": "\uB3C4\uAD6C\uBAA8\uC74C \uC704\uCE58",
  "sm.tbPosTop": "\uC704",
  "sm.tbPosBottom": "\uC544\uB798",
  "sm.tbBg": "\uB3C4\uAD6C\uBAA8\uC74C \uBC30\uACBD",
  "sm.tbBtnBg": "\uBC84\uD2BC \uBC30\uACBD",
  "sm.tbBtnBorder": "\uBC84\uD2BC \uD14C\uB450\uB9AC \uC2A4\uD0C0\uC77C",
  "sm.tbBtnBorderColor": "\uBC84\uD2BC \uD14C\uB450\uB9AC \uC0C9\uC0C1",
  "sm.tbBtnText": "\uBC84\uD2BC \uD14D\uC2A4\uD2B8 \uC0C9\uC0C1",
  "sm.tbResetDefault": "\uB3C4\uAD6C\uBAA8\uC74C \uCD08\uAE30\uD654",
  "ns.title": "\u{1F3A8} \uB178\uB4DC \uC2A4\uD0C0\uC77C",
  "ns.connColor": "\uC120 \uC0C9\uC0C1",
  "ns.connWidth": "\uC120 \uB108\uBE44",
  "ns.clear": "\uC0AC\uC6A9\uC790 \uC815\uC758 \uC9C0\uC6B0\uAE30",
  "ns.borderRadius": "\uD14C\uB450\uB9AC \uBC18\uACBD",
  "search.placeholder": "\uB178\uB4DC \uAC80\uC0C9...",
  "def.root": "\uB8E8\uD2B8",
  "def.newRoot": "\uC0C8 \uB8E8\uD2B8",
  "def.child": "\uC790\uC2DD",
  "set.title": "MindZJ \uC124\uC815",
  "set.lang": "\uC5B8\uC5B4",
  "set.langDesc": "\uC778\uD130\uD398\uC774\uC2A4 \uC5B8\uC5B4",
  "set.theme": "\uD14C\uB9C8",
  "set.themeDesc": "\uC0C9\uC0C1 \uD14C\uB9C8",
  "set.light": "\uBC1D\uAC8C",
  "set.dark": "\uC5B4\uB461\uAC8C",
  "set.toolbar": "\uB3C4\uAD6C\uBAA8\uC74C \uD45C\uC2DC",
  "set.toolbarDesc": "\uB3C4\uAD6C\uBAA8\uC74C \uD45C\uC2DC",
  "set.canvasBg": "\uCE94\uBC84\uC2A4 \uBC30\uACBD",
  "set.canvasBgDesc": "\uBC30\uACBD \uC0C9\uC0C1",
  "set.about": "\uC815\uBCF4",
  "set.version": "\uBC84\uC804",
  "set.author": "\uC791\uC131\uC790",
  "set.desc": "Obsidian\uC6A9 \uC624\uD508 \uC18C\uC2A4 \uB9C8\uC778\uB4DC\uB9F5 \uC571. \uCEE4\uC2A4\uD140 \uC2A4\uD0C0\uC77C, \uB808\uC778\uBCF4\uC6B0 \uC5F0\uACB0, \uB2E4\uC911 \uC120\uD0DD, \uB4DC\uB798\uADF8 \uC564 \uB4DC\uB86D, Markdown \uC9C0\uC6D0.",
  "set.updated": "\uC5C5\uB370\uC774\uD2B8",
  "set.github": "GitHub \uC800\uC7A5\uC18C",
  "set.donate": "\uC624\uD508\uC18C\uC2A4 \uC791\uAC00 \uD6C4\uC6D0",
  "set.keys": "\uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4",
  "set.keysDesc": "\uB2E8\uCD95\uD0A4 \uC0AC\uC6A9\uC790 \uC815\uC758",
  "set.key.edit": "\uB178\uB4DC \uD3B8\uC9D1",
  "set.key.sibling": "\uD615\uC81C \uCD94\uAC00",
  "set.key.child": "\uC790\uC2DD \uCD94\uAC00",
  "set.key.focus": "\uB178\uB4DC \uD3EC\uCEE4\uC2A4",
  "set.key.undo": "\uC2E4\uD589\uCDE8\uC18C",
  "set.key.redo": "\uB2E4\uC2DC\uC2E4\uD589",
  "set.key.lineBreak": "\uC904\uBC14\uAFC8 (\uD3B8\uC9D1 \uC911)",
  "set.key.dragCanvas": "\uCE94\uBC84\uC2A4 \uB4DC\uB798\uADF8",
  "set.key.zoomIn": "\uD655\uB300",
  "set.key.zoomOut": "\uCD95\uC18C",
  "set.key.zoomReset": "\uD655\uB300/\uCD95\uC18C \uCD08\uAE30\uD654",
  "set.key.up": "\uC704\uB85C",
  "set.key.down": "\uC544\uB798\uB85C",
  "set.key.left": "\uC67C\uCABD\uC73C\uB85C",
  "set.key.right": "\uC624\uB978\uCABD\uC73C\uB85C",
  "set.key.press": "\uD0A4\uB97C \uB204\uB974\uC138\uC694...",
  "set.scroll": "\uC2A4\uD06C\uB864 \uBC0F \uD655\uB300/\uCD95\uC18C",
  "set.invertY": "\uC138\uB85C \uC2A4\uD06C\uB864 \uBC18\uC804",
  "set.invertX": "\uAC00\uB85C \uC2A4\uD06C\uB864 \uBC18\uC804",
  "set.invertZoom": "\uD655\uB300/\uCD95\uC18C \uBC18\uC804",
  "set.editOnCreate": "\uC0DD\uC131 \uC2DC \uD3B8\uC9D1",
  "set.editOnCreateDesc": "\uC0C8 \uB178\uB4DC \uC0DD\uC131 \uC2DC \uD3B8\uC9D1 \uBAA8\uB4DC",
  "set.rootName": "\uB8E8\uD2B8 \uC774\uB984",
  "set.rootNameDesc": "\uC0C8 \uB8E8\uD2B8\uC758 \uAE30\uBCF8 \uC774\uB984",
  "set.childName": "\uC790\uC2DD \uC774\uB984",
  "set.childNameDesc": "\uC0C8 \uC790\uC2DD\uC758 \uAE30\uBCF8 \uC774\uB984",
  "set.typeToEdit": "\uC785\uB825\uD558\uC5EC \uD3B8\uC9D1",
  "set.typeToEditDesc": "\uB178\uB4DC \uC120\uD0DD \uC2DC \uD0A4 \uC785\uB825\uC73C\uB85C \uD3B8\uC9D1"
};
var _pt = {
  "tb.root": "\u2795 Raiz",
  "tb.undo": "\u21A9 Desfazer",
  "tb.redo": "\u21AA Refazer",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F Mapa",
  "tb.style": "\u{1F3A8} Estilo",
  "tb.focus": "Focar",
  "tb.search": "Pesquisar",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:Pesquisar | Espa\xE7o:Editar | Ctrl+C/V/X",
  "tb.newRoot": "Nova raiz",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Modo Markdown",
  "tb.tipStyle": "Painel de estilo",
  "tb.tipFocus": "Focar no n\xF3",
  "tb.tipSearch": "Pesquisar n\xF3s",
  "tb.tipSettings": "Configura\xE7\xF5es",
  "tb.zoomIn": "Ampliar",
  "tb.zoomOut": "Reduzir",
  "sm.customRainbow": "+ Personalizado",
  "ctx.batchDel": "\u{1F5D1}\uFE0F Excluir em lote",
  "ctx.editStyle": "\u{1F3A8} Editar estilo",
  "ctx.newRoot": "\u2795 Nova raiz",
  "ctx.undo": "\u21A9 Desfazer",
  "ctx.redo": "\u21AA Refazer",
  "ctx.globalStyle": "\u{1F3A8} Estilo global",
  "ctx.edit": "\u270F\uFE0F Editar",
  "ctx.style": "\u{1F3A8} Estilo",
  "ctx.copy": "\u{1F4CB} Copiar",
  "ctx.cut": "\u2702\uFE0F Recortar",
  "ctx.paste": "\u{1F4CC} Colar",
  "ctx.child": "\u2795 Filho",
  "ctx.leftChild": "\u2B05 Filho esquerdo",
  "ctx.sibling": "\u2795 Irm\xE3o",
  "ctx.delete": "\u{1F5D1}\uFE0F Excluir",
  "ctx.hideToolbar": "Ocultar barra",
  "sm.title": "\u{1F3A8} Estilo global",
  "sm.child": "N\xF3 filho",
  "sm.root": "N\xF3 raiz",
  "sm.bg": "Fundo",
  "sm.text": "Cor do texto",
  "sm.fontSize": "Tamanho da fonte",
  "sm.font": "Fonte",
  "sm.borderStyle": "Estilo da borda",
  "sm.borderColor": "Cor da borda",
  "sm.borderWidth": "Largura da borda",
  "sm.borderRadius": "Raio da borda",
  "sm.minWidth": "Largura m\xEDn.",
  "sm.minHeight": "Altura m\xEDn.",
  "sm.conn": "Conex\xE3o",
  "sm.type": "Tipo",
  "sm.color": "Cor",
  "sm.width": "Largura",
  "sm.connLength": "Comprimento",
  "sm.rainbow": "\u{1F308} Arco-\xEDris",
  "sm.nodeDir": "Dire\xE7\xE3o",
  "sm.dirRight": "Direita",
  "sm.dirLeft": "Esquerda",
  "sm.dirBoth": "Ambos",
  "sm.rainbowPalette": "Paleta",
  "sm.sel": "Sele\xE7\xE3o",
  "sm.selColor": "Cor de sele\xE7\xE3o",
  "sm.selWidth": "Largura de sele\xE7\xE3o",
  "sm.selOffset": "Deslocamento do contorno",
  "sm.editOutline": "Cor contorno edi\xE7\xE3o",
  "sm.editOutlineWidth": "Largura contorno edi\xE7\xE3o",
  "sm.textAlign": "Alinhamento",
  "sm.nodePadX": "Preenchimento texto",
  "sm.nodeLineHeight": "Altura da linha",
  "sm.canvasBg": "Fundo da tela",
  "sm.reset": "Redefinir",
  "sm.close": "Fechar",
  "sm.showToolbar": "Mostrar barra",
  "sm.tbPad": "Preenchimento barra",
  "sm.tbPadT": "Cima",
  "sm.tbPadR": "Direita",
  "sm.tbPadB": "Baixo",
  "sm.tbPadL": "Esquerda",
  "sm.tbPos": "Posi\xE7\xE3o barra",
  "sm.tbPosTop": "Topo",
  "sm.tbPosBottom": "Fundo",
  "sm.tbBg": "Fundo barra",
  "sm.tbBtnBg": "Fundo bot\xE3o",
  "sm.tbBtnBorder": "Estilo borda bot\xE3o",
  "sm.tbBtnBorderColor": "Cor borda bot\xE3o",
  "sm.tbBtnText": "Cor texto bot\xE3o",
  "sm.tbResetDefault": "Redefinir barra",
  "ns.title": "\u{1F3A8} Estilo do n\xF3",
  "ns.connColor": "Cor da linha",
  "ns.connWidth": "Largura da linha",
  "ns.clear": "Limpar personaliza\xE7\xE3o",
  "ns.borderRadius": "Raio da borda",
  "search.placeholder": "Pesquisar n\xF3s...",
  "def.root": "Raiz",
  "def.newRoot": "Nova raiz",
  "def.child": "Filho",
  "set.title": "Configura\xE7\xF5es MindZJ",
  "set.lang": "Idioma",
  "set.langDesc": "Idioma da interface",
  "set.theme": "Tema",
  "set.themeDesc": "Tema de cor",
  "set.light": "Claro",
  "set.dark": "Escuro",
  "set.toolbar": "Mostrar barra",
  "set.toolbarDesc": "Mostrar barra",
  "set.canvasBg": "Fundo da tela",
  "set.canvasBgDesc": "Cor de fundo",
  "set.about": "Sobre",
  "set.version": "Vers\xE3o",
  "set.author": "Autor",
  "set.desc": "App de mapa mental de c\xF3digo aberto para Obsidian com estilos personalizados, conex\xF5es arco-\xEDris, sele\xE7\xE3o m\xFAltipla, arrastar e soltar e Markdown.",
  "set.updated": "Atualizado",
  "set.github": "Reposit\xF3rio GitHub",
  "set.donate": "Apoiar o autor",
  "set.keys": "Atalhos de teclado",
  "set.keysDesc": "Personalizar atalhos",
  "set.key.edit": "Editar n\xF3",
  "set.key.sibling": "Adicionar irm\xE3o",
  "set.key.child": "Adicionar filho",
  "set.key.focus": "Focar no n\xF3",
  "set.key.undo": "Desfazer",
  "set.key.redo": "Refazer",
  "set.key.lineBreak": "Quebra de linha (edi\xE7\xE3o)",
  "set.key.dragCanvas": "Arrastar tela",
  "set.key.zoomIn": "Ampliar",
  "set.key.zoomOut": "Reduzir",
  "set.key.zoomReset": "Redefinir zoom",
  "set.key.up": "Cima",
  "set.key.down": "Baixo",
  "set.key.left": "Esquerda",
  "set.key.right": "Direita",
  "set.key.press": "Pressione...",
  "set.scroll": "Rolagem e zoom",
  "set.invertY": "Inverter rolagem V",
  "set.invertX": "Inverter rolagem H",
  "set.invertZoom": "Inverter zoom",
  "set.editOnCreate": "Editar ao criar",
  "set.editOnCreateDesc": "Modo edi\xE7\xE3o ao criar n\xF3s",
  "set.rootName": "Nome da raiz",
  "set.rootNameDesc": "Nome padr\xE3o para ra\xEDzes",
  "set.childName": "Nome do filho",
  "set.childNameDesc": "Nome padr\xE3o para filhos",
  "set.typeToEdit": "Digitar para editar",
  "set.typeToEditDesc": "Editar ao digitar com n\xF3 selecionado"
};
var _fi = {
  "tb.root": "\u2795 Juuri",
  "tb.undo": "\u21A9 Kumoa",
  "tb.redo": "\u21AA Tee uudelleen",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F Kartta",
  "tb.style": "\u{1F3A8} Tyyli",
  "tb.focus": "Kohdista",
  "tb.search": "Haku",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:Haku | V\xE4lily\xF6nti:Muokkaa | Ctrl+C/V/X",
  "tb.newRoot": "Uusi juuri",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Markdown-tila",
  "tb.tipStyle": "Tyylipaneeli",
  "tb.tipFocus": "Kohdista solmuun",
  "tb.tipSearch": "Etsi solmuja",
  "tb.tipSettings": "Asetukset",
  "tb.zoomIn": "L\xE4henn\xE4",
  "tb.zoomOut": "Loitonna",
  "sm.customRainbow": "+ Mukautettu",
  "ctx.batchDel": "\u{1F5D1}\uFE0F Poista kaikki",
  "ctx.editStyle": "\u{1F3A8} Muokkaa tyyli\xE4",
  "ctx.newRoot": "\u2795 Uusi juuri",
  "ctx.undo": "\u21A9 Kumoa",
  "ctx.redo": "\u21AA Tee uudelleen",
  "ctx.globalStyle": "\u{1F3A8} Yleinen tyyli",
  "ctx.edit": "\u270F\uFE0F Muokkaa",
  "ctx.style": "\u{1F3A8} Tyyli",
  "ctx.copy": "\u{1F4CB} Kopioi",
  "ctx.cut": "\u2702\uFE0F Leikkaa",
  "ctx.paste": "\u{1F4CC} Liit\xE4",
  "ctx.child": "\u2795 Lapsi",
  "ctx.leftChild": "\u2B05 Vasen lapsi",
  "ctx.sibling": "\u2795 Sisarus",
  "ctx.delete": "\u{1F5D1}\uFE0F Poista",
  "ctx.hideToolbar": "Piilota palkki",
  "sm.title": "\u{1F3A8} Yleinen tyyli",
  "sm.child": "Lapsisolmu",
  "sm.root": "Juurisolmu",
  "sm.bg": "Tausta",
  "sm.text": "Tekstin v\xE4ri",
  "sm.fontSize": "Fonttikoko",
  "sm.font": "Fontti",
  "sm.borderStyle": "Reunan tyyli",
  "sm.borderColor": "Reunan v\xE4ri",
  "sm.borderWidth": "Reunan leveys",
  "sm.borderRadius": "Reunan py\xF6ristys",
  "sm.minWidth": "V\xE4himm\xE4isleveys",
  "sm.minHeight": "V\xE4himm\xE4iskorkeus",
  "sm.conn": "Yhteys",
  "sm.type": "Tyyppi",
  "sm.color": "V\xE4ri",
  "sm.width": "Leveys",
  "sm.connLength": "Pituus",
  "sm.rainbow": "\u{1F308} Sateenkaari",
  "sm.nodeDir": "Solmun suunta",
  "sm.dirRight": "Oikea",
  "sm.dirLeft": "Vasen",
  "sm.dirBoth": "Molemmat",
  "sm.rainbowPalette": "Paletti",
  "sm.sel": "Valinta",
  "sm.selColor": "Valinnan v\xE4ri",
  "sm.selWidth": "Valinnan leveys",
  "sm.selOffset": "\xC4\xE4riviivan siirtym\xE4",
  "sm.editOutline": "Muokkauksen \xE4\xE4riviivan v\xE4ri",
  "sm.editOutlineWidth": "Muokkauksen \xE4\xE4riviivan leveys",
  "sm.textAlign": "Tekstin tasaus",
  "sm.nodePadX": "Tekstin t\xE4yte",
  "sm.nodeLineHeight": "Rivin korkeus",
  "sm.canvasBg": "Kankaan tausta",
  "sm.reset": "Palauta",
  "sm.close": "Sulje",
  "sm.showToolbar": "N\xE4yt\xE4 palkki",
  "sm.tbPad": "Palkin t\xE4yte",
  "sm.tbPadT": "Yl\xE4",
  "sm.tbPadR": "Oikea",
  "sm.tbPadB": "Ala",
  "sm.tbPadL": "Vasen",
  "sm.tbPos": "Palkin sijainti",
  "sm.tbPosTop": "Ylh\xE4\xE4ll\xE4",
  "sm.tbPosBottom": "Alhaalla",
  "sm.tbBg": "Palkin tausta",
  "sm.tbBtnBg": "Painikkeen tausta",
  "sm.tbBtnBorder": "Painikkeen reunan tyyli",
  "sm.tbBtnBorderColor": "Painikkeen reunan v\xE4ri",
  "sm.tbBtnText": "Painikkeen tekstin v\xE4ri",
  "sm.tbResetDefault": "Palauta palkki",
  "ns.title": "\u{1F3A8} Solmun tyyli",
  "ns.connColor": "Viivan v\xE4ri",
  "ns.connWidth": "Viivan leveys",
  "ns.clear": "Tyhjenn\xE4 mukautus",
  "ns.borderRadius": "Reunan py\xF6ristys",
  "search.placeholder": "Etsi solmuja...",
  "def.root": "Juuri",
  "def.newRoot": "Uusi juuri",
  "def.child": "Lapsi",
  "set.title": "MindZJ Asetukset",
  "set.lang": "Kieli",
  "set.langDesc": "K\xE4ytt\xF6liittym\xE4n kieli",
  "set.theme": "Teema",
  "set.themeDesc": "V\xE4riteema",
  "set.light": "Vaalea",
  "set.dark": "Tumma",
  "set.toolbar": "N\xE4yt\xE4 palkki",
  "set.toolbarDesc": "N\xE4yt\xE4 palkki",
  "set.canvasBg": "Kankaan tausta",
  "set.canvasBgDesc": "Taustav\xE4ri",
  "set.about": "Tietoja",
  "set.version": "Versio",
  "set.author": "Tekij\xE4",
  "set.desc": "Obsidianin monipuolinen avoimen l\xE4hdekoodin miellekarttasovellus mukautetuilla tyyleill\xE4, sateenkaariviivoilla ja Markdown-tuella.",
  "set.updated": "P\xE4ivitetty",
  "set.github": "GitHub-varasto",
  "set.donate": "Tue tekij\xE4\xE4",
  "set.keys": "Pikan\xE4pp\xE4imet",
  "set.keysDesc": "Muokkaa pikan\xE4pp\xE4imi\xE4",
  "set.key.edit": "Muokkaa solmua",
  "set.key.sibling": "Lis\xE4\xE4 sisarus",
  "set.key.child": "Lis\xE4\xE4 lapsi",
  "set.key.focus": "Kohdista solmuun",
  "set.key.undo": "Kumoa",
  "set.key.redo": "Tee uudelleen",
  "set.key.lineBreak": "Rivinvaihto (muokkauksessa)",
  "set.key.dragCanvas": "Ved\xE4 kangasta",
  "set.key.zoomIn": "L\xE4henn\xE4",
  "set.key.zoomOut": "Loitonna",
  "set.key.zoomReset": "Nollaa zoomaus",
  "set.key.up": "Yl\xF6s",
  "set.key.down": "Alas",
  "set.key.left": "Vasemmalle",
  "set.key.right": "Oikealle",
  "set.key.press": "Paina n\xE4pp\xE4int\xE4...",
  "set.scroll": "Vieritys ja zoomaus",
  "set.invertY": "K\xE4\xE4nn\xE4 V-vieritys",
  "set.invertX": "K\xE4\xE4nn\xE4 H-vieritys",
  "set.invertZoom": "K\xE4\xE4nn\xE4 zoomaus",
  "set.editOnCreate": "Muokkaa luotaessa",
  "set.editOnCreateDesc": "Muokkaustila uusille solmuille",
  "set.rootName": "Juuren nimi",
  "set.rootNameDesc": "Uusien juurien oletusnimi",
  "set.childName": "Lapsen nimi",
  "set.childNameDesc": "Uusien lasten oletusnimi",
  "set.typeToEdit": "Kirjoita muokataksesi",
  "set.typeToEditDesc": "Paina n\xE4pp\xE4int\xE4 muokataksesi valittua solmua"
};
var _no = {
  "tb.root": "\u2795 Rot",
  "tb.undo": "\u21A9 Angre",
  "tb.redo": "\u21AA Gj\xF8r om",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F Kart",
  "tb.style": "\u{1F3A8} Stil",
  "tb.focus": "Fokus",
  "tb.search": "S\xF8k",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:S\xF8k | Mellomrom:Rediger | Ctrl+C/V/X",
  "tb.newRoot": "Ny rot",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Markdown-modus",
  "tb.tipStyle": "Stilpanel",
  "tb.tipFocus": "Fokuser node",
  "tb.tipSearch": "S\xF8k noder",
  "tb.tipSettings": "Innstillinger",
  "tb.zoomIn": "Zoom inn",
  "tb.zoomOut": "Zoom ut",
  "sm.customRainbow": "+ Egendefinert",
  "ctx.batchDel": "\u{1F5D1}\uFE0F Slett alle",
  "ctx.editStyle": "\u{1F3A8} Rediger stil",
  "ctx.newRoot": "\u2795 Ny rot",
  "ctx.undo": "\u21A9 Angre",
  "ctx.redo": "\u21AA Gj\xF8r om",
  "ctx.globalStyle": "\u{1F3A8} Global stil",
  "ctx.edit": "\u270F\uFE0F Rediger",
  "ctx.style": "\u{1F3A8} Stil",
  "ctx.copy": "\u{1F4CB} Kopier",
  "ctx.cut": "\u2702\uFE0F Klipp ut",
  "ctx.paste": "\u{1F4CC} Lim inn",
  "ctx.child": "\u2795 Barn",
  "ctx.leftChild": "\u2B05 Venstre barn",
  "ctx.sibling": "\u2795 S\xF8sken",
  "ctx.delete": "\u{1F5D1}\uFE0F Slett",
  "ctx.hideToolbar": "Skjul verkt\xF8ylinje",
  "sm.title": "\u{1F3A8} Global stil",
  "sm.child": "Barnenode",
  "sm.root": "Rotnode",
  "sm.bg": "Bakgrunn",
  "sm.text": "Tekstfarge",
  "sm.fontSize": "Skriftst\xF8rrelse",
  "sm.font": "Skrifttype",
  "sm.borderStyle": "Kantstil",
  "sm.borderColor": "Kantfarge",
  "sm.borderWidth": "Kantbredde",
  "sm.borderRadius": "Kantradius",
  "sm.minWidth": "Min. bredde",
  "sm.minHeight": "Min. h\xF8yde",
  "sm.conn": "Forbindelse",
  "sm.type": "Type",
  "sm.color": "Farge",
  "sm.width": "Bredde",
  "sm.connLength": "Lengde",
  "sm.rainbow": "\u{1F308} Regnbue",
  "sm.nodeDir": "Noderetning",
  "sm.dirRight": "H\xF8yre",
  "sm.dirLeft": "Venstre",
  "sm.dirBoth": "Begge",
  "sm.rainbowPalette": "Palett",
  "sm.sel": "Valg",
  "sm.selColor": "Valgfarge",
  "sm.selWidth": "Valgbredde",
  "sm.selOffset": "Konturforskyvning",
  "sm.editOutline": "Redigeringskontur",
  "sm.editOutlineWidth": "Redigeringskonturbredde",
  "sm.textAlign": "Tekstjustering",
  "sm.nodePadX": "Tekstutfylling",
  "sm.nodeLineHeight": "Linjeh\xF8yde",
  "sm.canvasBg": "Lerretsbakgrunn",
  "sm.reset": "Tilbakestill",
  "sm.close": "Lukk",
  "sm.showToolbar": "Vis verkt\xF8ylinje",
  "sm.tbPad": "Verkt\xF8ylinjeutfylling",
  "sm.tbPadT": "Topp",
  "sm.tbPadR": "H\xF8yre",
  "sm.tbPadB": "Bunn",
  "sm.tbPadL": "Venstre",
  "sm.tbPos": "Verkt\xF8ylinjeposisjon",
  "sm.tbPosTop": "Topp",
  "sm.tbPosBottom": "Bunn",
  "sm.tbBg": "Verkt\xF8ylinjebakgrunn",
  "sm.tbBtnBg": "Knappbakgrunn",
  "sm.tbBtnBorder": "Knappkantstil",
  "sm.tbBtnBorderColor": "Knappkantfarge",
  "sm.tbBtnText": "Knapptekstfarge",
  "sm.tbResetDefault": "Tilbakestill verkt\xF8ylinje",
  "ns.title": "\u{1F3A8} Nodestil",
  "ns.connColor": "Linjefarge",
  "ns.connWidth": "Linjebredde",
  "ns.clear": "Fjern tilpasning",
  "ns.borderRadius": "Kantradius",
  "search.placeholder": "S\xF8k noder...",
  "def.root": "Rot",
  "def.newRoot": "Ny rot",
  "def.child": "Barn",
  "set.title": "MindZJ Innstillinger",
  "set.lang": "Spr\xE5k",
  "set.langDesc": "Grensesnittspr\xE5k",
  "set.theme": "Tema",
  "set.themeDesc": "Fargetema",
  "set.light": "Lyst",
  "set.dark": "M\xF8rkt",
  "set.toolbar": "Vis verkt\xF8ylinje",
  "set.toolbarDesc": "Vis verkt\xF8ylinje",
  "set.canvasBg": "Lerretsbakgrunn",
  "set.canvasBgDesc": "Bakgrunnsfarge",
  "set.about": "Om",
  "set.version": "Versjon",
  "set.author": "Forfatter",
  "set.desc": "Funksjonsrik \xE5pen kildekode tankekart-app for Obsidian med tilpassede stiler, regnbueforbindelser og Markdown-st\xF8tte.",
  "set.updated": "Oppdatert",
  "set.github": "GitHub-depot",
  "set.donate": "St\xF8tt forfatteren",
  "set.keys": "Hurtigtaster",
  "set.keysDesc": "Tilpass hurtigtaster",
  "set.key.edit": "Rediger node",
  "set.key.sibling": "Legg til s\xF8sken",
  "set.key.child": "Legg til barn",
  "set.key.focus": "Fokuser node",
  "set.key.undo": "Angre",
  "set.key.redo": "Gj\xF8r om",
  "set.key.lineBreak": "Linjeskift (redigering)",
  "set.key.dragCanvas": "Dra lerret",
  "set.key.zoomIn": "Zoom inn",
  "set.key.zoomOut": "Zoom ut",
  "set.key.zoomReset": "Tilbakestill zoom",
  "set.key.up": "Opp",
  "set.key.down": "Ned",
  "set.key.left": "Venstre",
  "set.key.right": "H\xF8yre",
  "set.key.press": "Trykk en tast...",
  "set.scroll": "Rulling og zoom",
  "set.invertY": "Inverter V-rulling",
  "set.invertX": "Inverter H-rulling",
  "set.invertZoom": "Inverter zoom",
  "set.editOnCreate": "Rediger ved opprettelse",
  "set.editOnCreateDesc": "Redigeringsmodus ved nye noder",
  "set.rootName": "Rotnavn",
  "set.rootNameDesc": "Standardnavn for nye r\xF8tter",
  "set.childName": "Barnenavn",
  "set.childNameDesc": "Standardnavn for nye barn",
  "set.typeToEdit": "Skriv for \xE5 redigere",
  "set.typeToEditDesc": "Skriv for \xE5 redigere valgt node"
};
var _nl = {
  "tb.root": "\u2795 Wortel",
  "tb.undo": "\u21A9 Ongedaan",
  "tb.redo": "\u21AA Opnieuw",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F Kaart",
  "tb.style": "\u{1F3A8} Stijl",
  "tb.focus": "Focus",
  "tb.search": "Zoeken",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:Zoeken | Spatie:Bewerken | Ctrl+C/V/X",
  "tb.newRoot": "Nieuwe wortel",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Markdown-modus",
  "tb.tipStyle": "Stijlpaneel",
  "tb.tipFocus": "Focus op knooppunt",
  "tb.tipSearch": "Knooppunten zoeken",
  "tb.tipSettings": "Instellingen",
  "tb.zoomIn": "Inzoomen",
  "tb.zoomOut": "Uitzoomen",
  "sm.customRainbow": "+ Aangepast",
  "ctx.batchDel": "\u{1F5D1}\uFE0F Alles verwijderen",
  "ctx.editStyle": "\u{1F3A8} Stijl bewerken",
  "ctx.newRoot": "\u2795 Nieuwe wortel",
  "ctx.undo": "\u21A9 Ongedaan",
  "ctx.redo": "\u21AA Opnieuw",
  "ctx.globalStyle": "\u{1F3A8} Globale stijl",
  "ctx.edit": "\u270F\uFE0F Bewerken",
  "ctx.style": "\u{1F3A8} Stijl",
  "ctx.copy": "\u{1F4CB} Kopi\xEBren",
  "ctx.cut": "\u2702\uFE0F Knippen",
  "ctx.paste": "\u{1F4CC} Plakken",
  "ctx.child": "\u2795 Kind",
  "ctx.leftChild": "\u2B05 Links kind",
  "ctx.sibling": "\u2795 Broer/zus",
  "ctx.delete": "\u{1F5D1}\uFE0F Verwijderen",
  "ctx.hideToolbar": "Werkbalk verbergen",
  "sm.title": "\u{1F3A8} Globale stijl",
  "sm.child": "Kindknooppunt",
  "sm.root": "Wortelknooppunt",
  "sm.bg": "Achtergrond",
  "sm.text": "Tekstkleur",
  "sm.fontSize": "Lettergrootte",
  "sm.font": "Lettertype",
  "sm.borderStyle": "Randstijl",
  "sm.borderColor": "Randkleur",
  "sm.borderWidth": "Randbreedte",
  "sm.borderRadius": "Randradius",
  "sm.minWidth": "Min. breedte",
  "sm.minHeight": "Min. hoogte",
  "sm.conn": "Verbinding",
  "sm.type": "Type",
  "sm.color": "Kleur",
  "sm.width": "Breedte",
  "sm.connLength": "Lengte",
  "sm.rainbow": "\u{1F308} Regenboog",
  "sm.nodeDir": "Richting",
  "sm.dirRight": "Rechts",
  "sm.dirLeft": "Links",
  "sm.dirBoth": "Beide",
  "sm.rainbowPalette": "Palet",
  "sm.sel": "Selectie",
  "sm.selColor": "Selectiekleur",
  "sm.selWidth": "Selectiebreedte",
  "sm.selOffset": "Omtrekoffset",
  "sm.editOutline": "Bewerkingsomtrekkleur",
  "sm.editOutlineWidth": "Bewerkingsomtrekbreedte",
  "sm.textAlign": "Tekstuitlijning",
  "sm.nodePadX": "Tekstvulling",
  "sm.nodeLineHeight": "Regelhoogte",
  "sm.canvasBg": "Canvas achtergrond",
  "sm.reset": "Herstellen",
  "sm.close": "Sluiten",
  "sm.showToolbar": "Werkbalk tonen",
  "sm.tbPad": "Werkbalkvulling",
  "sm.tbPadT": "Boven",
  "sm.tbPadR": "Rechts",
  "sm.tbPadB": "Onder",
  "sm.tbPadL": "Links",
  "sm.tbPos": "Werkbalkpositie",
  "sm.tbPosTop": "Boven",
  "sm.tbPosBottom": "Onder",
  "sm.tbBg": "Werkbalk achtergrond",
  "sm.tbBtnBg": "Knop achtergrond",
  "sm.tbBtnBorder": "Knop randstijl",
  "sm.tbBtnBorderColor": "Knop randkleur",
  "sm.tbBtnText": "Knop tekstkleur",
  "sm.tbResetDefault": "Werkbalk herstellen",
  "ns.title": "\u{1F3A8} Knooppuntstijl",
  "ns.connColor": "Lijnkleur",
  "ns.connWidth": "Lijnbreedte",
  "ns.clear": "Aanpassing wissen",
  "ns.borderRadius": "Randradius",
  "search.placeholder": "Knooppunten zoeken...",
  "def.root": "Wortel",
  "def.newRoot": "Nieuwe wortel",
  "def.child": "Kind",
  "set.title": "MindZJ Instellingen",
  "set.lang": "Taal",
  "set.langDesc": "Interfacetaal",
  "set.theme": "Thema",
  "set.themeDesc": "Kleurenthema",
  "set.light": "Licht",
  "set.dark": "Donker",
  "set.toolbar": "Werkbalk tonen",
  "set.toolbarDesc": "Werkbalk tonen",
  "set.canvasBg": "Canvas achtergrond",
  "set.canvasBgDesc": "Achtergrondkleur",
  "set.about": "Over",
  "set.version": "Versie",
  "set.author": "Auteur",
  "set.desc": "Uitgebreide open source mindmap-app voor Obsidian met aangepaste stijlen, regenboogverbindingen en Markdown-ondersteuning.",
  "set.updated": "Bijgewerkt",
  "set.github": "GitHub-repository",
  "set.donate": "Ondersteun de auteur",
  "set.keys": "Sneltoetsen",
  "set.keysDesc": "Sneltoetsen aanpassen",
  "set.key.edit": "Knooppunt bewerken",
  "set.key.sibling": "Broer/zus toevoegen",
  "set.key.child": "Kind toevoegen",
  "set.key.focus": "Focus op knooppunt",
  "set.key.undo": "Ongedaan maken",
  "set.key.redo": "Opnieuw",
  "set.key.lineBreak": "Regelafbreking (bewerking)",
  "set.key.dragCanvas": "Canvas slepen",
  "set.key.zoomIn": "Inzoomen",
  "set.key.zoomOut": "Uitzoomen",
  "set.key.zoomReset": "Zoom herstellen",
  "set.key.up": "Omhoog",
  "set.key.down": "Omlaag",
  "set.key.left": "Links",
  "set.key.right": "Rechts",
  "set.key.press": "Druk op een toets...",
  "set.scroll": "Scrollen en zoomen",
  "set.invertY": "Verticaal omkeren",
  "set.invertX": "Horizontaal omkeren",
  "set.invertZoom": "Zoom omkeren",
  "set.editOnCreate": "Bewerken bij aanmaken",
  "set.editOnCreateDesc": "Bewerkingsmodus bij nieuwe knooppunten",
  "set.rootName": "Wortelnaam",
  "set.rootNameDesc": "Standaardnaam voor wortels",
  "set.childName": "Kindnaam",
  "set.childNameDesc": "Standaardnaam voor kinderen",
  "set.typeToEdit": "Typ om te bewerken",
  "set.typeToEditDesc": "Bewerk door te typen bij geselecteerd knooppunt"
};
var _li = {
  "tb.root": "\u2795 Wurzel",
  "tb.undo": "\u21A9 R\xFCckg\xE4ngig",
  "tb.redo": "\u21AA Wiederhola",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F Charta",
  "tb.style": "\u{1F3A8} Stil",
  "tb.focus": "Fokus",
  "tb.search": "Sueche",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:Sueche | Leertascht:Bearbeita | Ctrl+C/V/X",
  "tb.newRoot": "N\xF6ii Wurzel",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Markdown-Modus",
  "tb.tipStyle": "Stil-Panel",
  "tb.tipFocus": "Chnota fokussiera",
  "tb.tipSearch": "Chnota sueche",
  "tb.tipSettings": "Istelliga",
  "tb.zoomIn": "Vergr\xF6\xDFera",
  "tb.zoomOut": "Verkleinera",
  "sm.customRainbow": "+ Eigets",
  "ctx.batchDel": "\u{1F5D1}\uFE0F Alli l\xF6scha",
  "ctx.editStyle": "\u{1F3A8} Stil bearbeita",
  "ctx.newRoot": "\u2795 N\xF6ii Wurzel",
  "ctx.undo": "\u21A9 R\xFCckg\xE4ngig",
  "ctx.redo": "\u21AA Wiederhola",
  "ctx.globalStyle": "\u{1F3A8} Globale Stil",
  "ctx.edit": "\u270F\uFE0F Bearbeita",
  "ctx.style": "\u{1F3A8} Stil",
  "ctx.copy": "\u{1F4CB} Kopiera",
  "ctx.cut": "\u2702\uFE0F Usschnida",
  "ctx.paste": "\u{1F4CC} Iif\xFCege",
  "ctx.child": "\u2795 Chind",
  "ctx.leftChild": "\u2B05 Lechts Chind",
  "ctx.sibling": "\u2795 Gschw\xF6schter",
  "ctx.delete": "\u{1F5D1}\uFE0F L\xF6scha",
  "ctx.hideToolbar": "Leischta verstecka",
  "sm.title": "\u{1F3A8} Globale Stil",
  "sm.child": "Chind-Chnota",
  "sm.root": "Wurzel-Chnota",
  "sm.bg": "Hintergrund",
  "sm.text": "Textfarb",
  "sm.fontSize": "Schriftgr\xF6sse",
  "sm.font": "Schrift",
  "sm.borderStyle": "Randstil",
  "sm.borderColor": "Randfarb",
  "sm.borderWidth": "Randbreiti",
  "sm.borderRadius": "Rundung",
  "sm.minWidth": "Min. Breiti",
  "sm.minHeight": "Min. H\xF6chi",
  "sm.conn": "Verbindig",
  "sm.type": "Typ",
  "sm.color": "Farb",
  "sm.width": "Breiti",
  "sm.connLength": "L\xE4ngi",
  "sm.rainbow": "\u{1F308} R\xE4gaboga",
  "sm.nodeDir": "Richtig",
  "sm.dirRight": "Rechts",
  "sm.dirLeft": "Lechts",
  "sm.dirBoth": "Beidi",
  "sm.rainbowPalette": "Paletta",
  "sm.sel": "Uswahl",
  "sm.selColor": "Uswahlfarb",
  "sm.selWidth": "Uswahlbreiti",
  "sm.selOffset": "Konturversatz",
  "sm.editOutline": "Bearbeitigsrahmefarb",
  "sm.editOutlineWidth": "Bearbeitigsrahmebreiti",
  "sm.textAlign": "Textusrichtig",
  "sm.nodePadX": "Textabstand",
  "sm.nodeLineHeight": "Zileh\xF6chi",
  "sm.canvasBg": "Leinwandhintergrund",
  "sm.reset": "Zruggsetza",
  "sm.close": "Zuamacha",
  "sm.showToolbar": "Leischta zeiga",
  "sm.tbPad": "Leischta-Abstand",
  "sm.tbPadT": "Oba",
  "sm.tbPadR": "Rechts",
  "sm.tbPadB": "Unta",
  "sm.tbPadL": "Lechts",
  "sm.tbPos": "Leischta-Position",
  "sm.tbPosTop": "Oba",
  "sm.tbPosBottom": "Unta",
  "sm.tbBg": "Leischtahintergrund",
  "sm.tbBtnBg": "Chnopfhintergrund",
  "sm.tbBtnBorder": "Chnopfrandstil",
  "sm.tbBtnBorderColor": "Chnopfrandfarb",
  "sm.tbBtnText": "Chnopftextfarb",
  "sm.tbResetDefault": "Leischta zruggsetza",
  "ns.title": "\u{1F3A8} Chnota-Stil",
  "ns.connColor": "Liniefarb",
  "ns.connWidth": "Liniebreiti",
  "ns.clear": "Ap\xE4ssig l\xF6sche",
  "ns.borderRadius": "Rundung",
  "search.placeholder": "Chnota sueche...",
  "def.root": "Wurzel",
  "def.newRoot": "N\xF6ii Wurzel",
  "def.child": "Chind",
  "set.title": "MindZJ Istelliga",
  "set.lang": "Sproch",
  "set.langDesc": "Oberfl\xE4cha-Sproch",
  "set.theme": "Thema",
  "set.themeDesc": "Farbthema",
  "set.light": "Hell",
  "set.dark": "Dunkel",
  "set.toolbar": "Leischta zeiga",
  "set.toolbarDesc": "Leischta zeiga",
  "set.canvasBg": "Leinwandhintergrund",
  "set.canvasBgDesc": "Hintergrundfarb",
  "set.about": "\xDCber",
  "set.version": "Version",
  "set.author": "Autor",
  "set.desc": "Funktionsriichi Open-Source Mindmap-App f\xFCr Obsidian mit eigena Stila, R\xE4gaboga-Verbindiga und Markdown-Support.",
  "set.updated": "Aktualisiert",
  "set.github": "GitHub-Ablaga",
  "set.donate": "Open-Source-Autor underst\xFCtza",
  "set.keys": "Tastekombinationa",
  "set.keysDesc": "Tastekombinationa apassa",
  "set.key.edit": "Chnota bearbeita",
  "set.key.sibling": "Gschw\xF6schter dezuef\xFCega",
  "set.key.child": "Chind dezuef\xFCega",
  "set.key.focus": "Chnota fokussiera",
  "set.key.undo": "R\xFCckg\xE4ngig",
  "set.key.redo": "Wiederhola",
  "set.key.lineBreak": "Zilaumbruch (bim Bearbeita)",
  "set.key.dragCanvas": "Leinwand z\xFCcha",
  "set.key.zoomIn": "Vergr\xF6\xDFera",
  "set.key.zoomOut": "Verkleinera",
  "set.key.zoomReset": "Zoom zruggsetza",
  "set.key.up": "Uf",
  "set.key.down": "Ab",
  "set.key.left": "Lechts",
  "set.key.right": "Rechts",
  "set.key.press": "Tascht dr\xFCcka...",
  "set.scroll": "Scrolla und Zooma",
  "set.invertY": "Vertikals Scrolla umkehra",
  "set.invertX": "Horizontals Scrolla umkehra",
  "set.invertZoom": "Zoomrichtig umkehra",
  "set.editOnCreate": "Bi Erstellig bearbeita",
  "set.editOnCreateDesc": "Bearbeitigsmodus bi n\xF6ie Chnota",
  "set.rootName": "Wurzelnam",
  "set.rootNameDesc": "Standardnam f\xFCr n\xF6ii Wurzla",
  "set.childName": "Chindnam",
  "set.childNameDesc": "Standardnam f\xFCr n\xF6ii Chinder",
  "set.typeToEdit": "Tippa zum Bearbeita",
  "set.typeToEditDesc": "Bi usgw\xE4hltem Chnota bearbeita"
};
var _da = {
  "tb.root": "\u2795 Rod",
  "tb.undo": "\u21A9 Fortryd",
  "tb.redo": "\u21AA Gentag",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F Kort",
  "tb.style": "\u{1F3A8} Stil",
  "tb.focus": "Fokus",
  "tb.search": "S\xF8g",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:S\xF8g | Mellemrum:Redig\xE9r | Ctrl+C/V/X",
  "tb.newRoot": "Ny rod",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Markdown-tilstand",
  "tb.tipStyle": "Stilpanel",
  "tb.tipFocus": "Fokus\xE9r p\xE5 knude",
  "tb.tipSearch": "S\xF8g i knuder",
  "tb.tipSettings": "Indstillinger",
  "tb.zoomIn": "Zoom ind",
  "tb.zoomOut": "Zoom ud",
  "sm.customRainbow": "+ Brugerdefineret",
  "ctx.batchDel": "\u{1F5D1}\uFE0F Slet alle",
  "ctx.editStyle": "\u{1F3A8} Redig\xE9r stil",
  "ctx.newRoot": "\u2795 Ny rod",
  "ctx.undo": "\u21A9 Fortryd",
  "ctx.redo": "\u21AA Gentag",
  "ctx.globalStyle": "\u{1F3A8} Global stil",
  "ctx.edit": "\u270F\uFE0F Redig\xE9r",
  "ctx.style": "\u{1F3A8} Stil",
  "ctx.copy": "\u{1F4CB} Kopi\xE9r",
  "ctx.cut": "\u2702\uFE0F Klip",
  "ctx.paste": "\u{1F4CC} Inds\xE6t",
  "ctx.child": "\u2795 Barn",
  "ctx.leftChild": "\u2B05 Venstre barn",
  "ctx.sibling": "\u2795 S\xF8skende",
  "ctx.delete": "\u{1F5D1}\uFE0F Slet",
  "ctx.hideToolbar": "Skjul v\xE6rkt\xF8jslinje",
  "sm.title": "\u{1F3A8} Global stil",
  "sm.child": "Barneknude",
  "sm.root": "Rodknude",
  "sm.bg": "Baggrund",
  "sm.text": "Tekstfarve",
  "sm.fontSize": "Skriftst\xF8rrelse",
  "sm.font": "Skrifttype",
  "sm.borderStyle": "Kantstil",
  "sm.borderColor": "Kantfarve",
  "sm.borderWidth": "Kantbredde",
  "sm.borderRadius": "Kantradius",
  "sm.minWidth": "Min. bredde",
  "sm.minHeight": "Min. h\xF8jde",
  "sm.conn": "Forbindelse",
  "sm.type": "Type",
  "sm.color": "Farve",
  "sm.width": "Bredde",
  "sm.connLength": "L\xE6ngde",
  "sm.rainbow": "Regnbue",
  "sm.nodeDir": "Knuderetning",
  "sm.dirRight": "H\xF8jre",
  "sm.dirLeft": "Venstre",
  "sm.dirBoth": "Begge",
  "sm.rainbowPalette": "Palet",
  "sm.sel": "Markering",
  "sm.selColor": "Markeringsfarve",
  "sm.selWidth": "Markeringsbredde",
  "sm.selOffset": "Konturforskydning",
  "sm.editOutline": "Redigeringskonturfarve",
  "sm.editOutlineWidth": "Redigeringskonturbredde",
  "sm.textAlign": "Tekstjustering",
  "sm.nodePadX": "Tekstudfyldning",
  "sm.nodeLineHeight": "Linjeh\xF8jde",
  "sm.canvasBg": "L\xE6rredsbaggrund",
  "sm.reset": "Nulstil",
  "sm.close": "Luk",
  "sm.showToolbar": "Vis v\xE6rkt\xF8jslinje",
  "sm.tbPad": "V\xE6rkt\xF8jslinjeudfyldning",
  "sm.tbPadT": "Top",
  "sm.tbPadR": "H\xF8jre",
  "sm.tbPadB": "Bund",
  "sm.tbPadL": "Venstre",
  "sm.tbPos": "V\xE6rkt\xF8jslinjeposition",
  "sm.tbPosTop": "Top",
  "sm.tbPosBottom": "Bund",
  "sm.tbBg": "V\xE6rkt\xF8jslinjebaggrund",
  "sm.tbBtnBg": "Knapbaggrund",
  "sm.tbBtnBorder": "Knap kantstil",
  "sm.tbBtnBorderColor": "Knap kantfarve",
  "sm.tbBtnText": "Knap tekstfarve",
  "sm.tbResetDefault": "Nulstil v\xE6rkt\xF8jslinje",
  "ns.title": "\u{1F3A8} Knudestil",
  "ns.connColor": "Linjefarve",
  "ns.connWidth": "Linjebredde",
  "ns.clear": "Ryd tilpasning",
  "ns.borderRadius": "Kantradius",
  "search.placeholder": "S\xF8g i knuder...",
  "def.root": "Rod",
  "def.newRoot": "Ny rod",
  "def.child": "Barn",
  "set.title": "MindZJ Indstillinger",
  "set.lang": "Sprog",
  "set.langDesc": "Gr\xE6nsefladesprog",
  "set.theme": "Tema",
  "set.themeDesc": "Farvetema",
  "set.light": "Lyst",
  "set.dark": "M\xF8rkt",
  "set.toolbar": "Vis v\xE6rkt\xF8jslinje",
  "set.toolbarDesc": "Vis v\xE6rkt\xF8jslinje",
  "set.canvasBg": "L\xE6rredsbaggrund",
  "set.canvasBgDesc": "Baggrundsfarve",
  "set.about": "Om",
  "set.version": "Version",
  "set.author": "Forfatter",
  "set.desc": "En funktionsrig open source-tankekortapp til Obsidian med brugerdefinerede stilarter, regnbueforbindelser, multivalg, tr\xE6k-og-slip og Markdown-import/eksport.",
  "set.updated": "Opdateret",
  "set.github": "GitHub-arkiv",
  "set.donate": "St\xF8t open source-forfatteren",
  "set.keys": "Tastaturgenveje",
  "set.keysDesc": "Tilpas genveje",
  "set.key.edit": "Redig\xE9r knude",
  "set.key.sibling": "Tilf\xF8j s\xF8skende",
  "set.key.child": "Tilf\xF8j barn",
  "set.key.focus": "Fokus\xE9r p\xE5 knude",
  "set.key.undo": "Fortryd",
  "set.key.redo": "Gentag",
  "set.key.lineBreak": "Linjeskift (under redigering)",
  "set.key.dragCanvas": "Tr\xE6k l\xE6rred",
  "set.key.zoomIn": "Zoom ind",
  "set.key.zoomOut": "Zoom ud",
  "set.key.zoomReset": "Nulstil zoom",
  "set.key.up": "Navig\xE9r op",
  "set.key.down": "Navig\xE9r ned",
  "set.key.left": "Navig\xE9r venstre",
  "set.key.right": "Navig\xE9r h\xF8jre",
  "set.key.press": "Tryk p\xE5 en tast...",
  "set.scroll": "Rulning og zoom",
  "set.invertY": "Inverter lodret rulning",
  "set.invertX": "Inverter vandret rulning",
  "set.invertZoom": "Inverter zoomretning",
  "set.editOnCreate": "Redig\xE9r ved oprettelse",
  "set.editOnCreateDesc": "Redigeringstilstand ved nye knuder",
  "set.rootName": "Rodnavn",
  "set.rootNameDesc": "Standardnavn for nye r\xF8dder",
  "set.childName": "Barnenavn",
  "set.childNameDesc": "Standardnavn for nye b\xF8rn",
  "set.typeToEdit": "Skriv for at redigere",
  "set.typeToEditDesc": "Redig\xE9r ved at skrive n\xE5r en knude er valgt"
};
var _he = {
  "tb.root": "\u2795 \u05E9\u05D5\u05E8\u05E9",
  "tb.undo": "\u21A9 \u05D1\u05D8\u05DC",
  "tb.redo": "\u21AA \u05D1\u05E6\u05E2 \u05E9\u05D5\u05D1",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F \u05DE\u05E4\u05D4",
  "tb.style": "\u{1F3A8} \u05E1\u05D2\u05E0\u05D5\u05DF",
  "tb.focus": "\u05DE\u05D9\u05E7\u05D5\u05D3",
  "tb.search": "\u05D7\u05D9\u05E4\u05D5\u05E9",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:\u05D7\u05D9\u05E4\u05D5\u05E9 | \u05E8\u05D5\u05D5\u05D7:\u05E2\u05E8\u05D9\u05DB\u05D4 | Ctrl+C/V/X",
  "tb.newRoot": "\u05E9\u05D5\u05E8\u05E9 \u05D7\u05D3\u05E9",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "\u05DE\u05E6\u05D1 Markdown",
  "tb.tipStyle": "\u05D7\u05DC\u05D5\u05E0\u05D9\u05EA \u05E1\u05D2\u05E0\u05D5\u05DF",
  "tb.tipFocus": "\u05DE\u05E7\u05D3 \u05E2\u05DC \u05E6\u05D5\u05DE\u05EA",
  "tb.tipSearch": "\u05D7\u05E4\u05E9 \u05E6\u05DE\u05EA\u05D9\u05DD",
  "tb.tipSettings": "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA",
  "tb.zoomIn": "\u05D4\u05D2\u05D3\u05DC",
  "tb.zoomOut": "\u05D4\u05E7\u05D8\u05DF",
  "sm.customRainbow": "+ \u05DE\u05D5\u05EA\u05D0\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA",
  "ctx.batchDel": "\u{1F5D1}\uFE0F \u05DE\u05D7\u05D9\u05E7\u05D4 \u05D2\u05D5\u05E8\u05E4\u05EA",
  "ctx.editStyle": "\u{1F3A8} \u05E2\u05E8\u05D5\u05DA \u05E1\u05D2\u05E0\u05D5\u05DF",
  "ctx.newRoot": "\u2795 \u05E9\u05D5\u05E8\u05E9 \u05D7\u05D3\u05E9",
  "ctx.undo": "\u21A9 \u05D1\u05D8\u05DC",
  "ctx.redo": "\u21AA \u05D1\u05E6\u05E2 \u05E9\u05D5\u05D1",
  "ctx.globalStyle": "\u{1F3A8} \u05E1\u05D2\u05E0\u05D5\u05DF \u05DB\u05DC\u05DC\u05D9",
  "ctx.edit": "\u270F\uFE0F \u05E2\u05E8\u05D5\u05DA",
  "ctx.style": "\u{1F3A8} \u05E1\u05D2\u05E0\u05D5\u05DF",
  "ctx.copy": "\u{1F4CB} \u05D4\u05E2\u05EA\u05E7",
  "ctx.cut": "\u2702\uFE0F \u05D2\u05D6\u05D5\u05E8",
  "ctx.paste": "\u{1F4CC} \u05D4\u05D3\u05D1\u05E7",
  "ctx.child": "\u2795 \u05E6\u05D0\u05E6\u05D0",
  "ctx.leftChild": "\u2B05 \u05E6\u05D0\u05E6\u05D0 \u05E9\u05DE\u05D0\u05DC\u05D9",
  "ctx.sibling": "\u2795 \u05D0\u05D7",
  "ctx.delete": "\u{1F5D1}\uFE0F \u05DE\u05D7\u05E7",
  "ctx.hideToolbar": "\u05D4\u05E1\u05EA\u05E8 \u05E1\u05E8\u05D2\u05DC \u05DB\u05DC\u05D9\u05DD",
  "sm.title": "\u{1F3A8} \u05E1\u05D2\u05E0\u05D5\u05DF \u05DB\u05DC\u05DC\u05D9",
  "sm.child": "\u05E6\u05D5\u05DE\u05EA \u05E6\u05D0\u05E6\u05D0",
  "sm.root": "\u05E6\u05D5\u05DE\u05EA \u05E9\u05D5\u05E8\u05E9",
  "sm.bg": "\u05E8\u05E7\u05E2",
  "sm.text": "\u05E6\u05D1\u05E2 \u05D8\u05E7\u05E1\u05D8",
  "sm.fontSize": "\u05D2\u05D5\u05D3\u05DC \u05D2\u05D5\u05E4\u05DF",
  "sm.font": "\u05D2\u05D5\u05E4\u05DF",
  "sm.borderStyle": "\u05E1\u05D2\u05E0\u05D5\u05DF \u05D2\u05D1\u05D5\u05DC",
  "sm.borderColor": "\u05E6\u05D1\u05E2 \u05D2\u05D1\u05D5\u05DC",
  "sm.borderWidth": "\u05E2\u05D5\u05D1\u05D9 \u05D2\u05D1\u05D5\u05DC",
  "sm.borderRadius": "\u05E2\u05D9\u05D2\u05D5\u05DC \u05E4\u05D9\u05E0\u05D5\u05EA",
  "sm.minWidth": "\u05E8\u05D5\u05D7\u05D1 \u05DE\u05D9\u05E0\u05D9\u05DE\u05DC\u05D9",
  "sm.minHeight": "\u05D2\u05D5\u05D1\u05D4 \u05DE\u05D9\u05E0\u05D9\u05DE\u05DC\u05D9",
  "sm.conn": "\u05E7\u05D5 \u05D7\u05D9\u05D1\u05D5\u05E8",
  "sm.type": "\u05E1\u05D5\u05D2",
  "sm.color": "\u05E6\u05D1\u05E2",
  "sm.width": "\u05E8\u05D5\u05D7\u05D1",
  "sm.connLength": "\u05D0\u05D5\u05E8\u05DA",
  "sm.rainbow": "\u05E7\u05E9\u05EA",
  "sm.nodeDir": "\u05DB\u05D9\u05D5\u05D5\u05DF \u05E6\u05DE\u05EA\u05D9\u05DD",
  "sm.dirRight": "\u05D9\u05DE\u05D9\u05DF",
  "sm.dirLeft": "\u05E9\u05DE\u05D0\u05DC",
  "sm.dirBoth": "\u05E9\u05E0\u05D9\u05D4\u05DD",
  "sm.rainbowPalette": "\u05DC\u05D5\u05D7 \u05E6\u05D1\u05E2\u05D9\u05DD",
  "sm.sel": "\u05D1\u05D7\u05D9\u05E8\u05D4",
  "sm.selColor": "\u05E6\u05D1\u05E2 \u05D1\u05D7\u05D9\u05E8\u05D4",
  "sm.selWidth": "\u05E2\u05D5\u05D1\u05D9 \u05D1\u05D7\u05D9\u05E8\u05D4",
  "sm.selOffset": "\u05D4\u05D9\u05E1\u05D8 \u05DE\u05EA\u05D0\u05E8",
  "sm.editOutline": "\u05E6\u05D1\u05E2 \u05DE\u05EA\u05D0\u05E8 \u05E2\u05E8\u05D9\u05DB\u05D4",
  "sm.editOutlineWidth": "\u05E2\u05D5\u05D1\u05D9 \u05DE\u05EA\u05D0\u05E8 \u05E2\u05E8\u05D9\u05DB\u05D4",
  "sm.textAlign": "\u05D9\u05D9\u05E9\u05D5\u05E8 \u05D8\u05E7\u05E1\u05D8",
  "sm.nodePadX": "\u05E8\u05D9\u05E4\u05D5\u05D3 \u05D8\u05E7\u05E1\u05D8",
  "sm.nodeLineHeight": "\u05D2\u05D5\u05D1\u05D4 \u05E9\u05D5\u05E8\u05D4",
  "sm.canvasBg": "\u05E8\u05E7\u05E2 \u05D1\u05D3 \u05E6\u05D9\u05D5\u05E8",
  "sm.reset": "\u05D0\u05E4\u05E1",
  "sm.close": "\u05E1\u05D2\u05D5\u05E8",
  "sm.showToolbar": "\u05D4\u05E6\u05D2 \u05E1\u05E8\u05D2\u05DC \u05DB\u05DC\u05D9\u05DD",
  "sm.tbPad": "\u05E8\u05D9\u05E4\u05D5\u05D3 \u05E1\u05E8\u05D2\u05DC",
  "sm.tbPadT": "\u05E2\u05DC\u05D9\u05D5\u05DF",
  "sm.tbPadR": "\u05D9\u05DE\u05D9\u05DF",
  "sm.tbPadB": "\u05EA\u05D7\u05EA\u05D5\u05DF",
  "sm.tbPadL": "\u05E9\u05DE\u05D0\u05DC",
  "sm.tbPos": "\u05DE\u05D9\u05E7\u05D5\u05DD \u05E1\u05E8\u05D2\u05DC",
  "sm.tbPosTop": "\u05E2\u05DC\u05D9\u05D5\u05DF",
  "sm.tbPosBottom": "\u05EA\u05D7\u05EA\u05D5\u05DF",
  "sm.tbBg": "\u05E8\u05E7\u05E2 \u05E1\u05E8\u05D2\u05DC",
  "sm.tbBtnBg": "\u05E8\u05E7\u05E2 \u05DB\u05E4\u05EA\u05D5\u05E8",
  "sm.tbBtnBorder": "\u05E1\u05D2\u05E0\u05D5\u05DF \u05D2\u05D1\u05D5\u05DC \u05DB\u05E4\u05EA\u05D5\u05E8",
  "sm.tbBtnBorderColor": "\u05E6\u05D1\u05E2 \u05D2\u05D1\u05D5\u05DC \u05DB\u05E4\u05EA\u05D5\u05E8",
  "sm.tbBtnText": "\u05E6\u05D1\u05E2 \u05D8\u05E7\u05E1\u05D8 \u05DB\u05E4\u05EA\u05D5\u05E8",
  "sm.tbResetDefault": "\u05D0\u05E4\u05E1 \u05E1\u05E8\u05D2\u05DC \u05DB\u05DC\u05D9\u05DD",
  "ns.title": "\u{1F3A8} \u05E1\u05D2\u05E0\u05D5\u05DF \u05E6\u05D5\u05DE\u05EA",
  "ns.connColor": "\u05E6\u05D1\u05E2 \u05E7\u05D5",
  "ns.connWidth": "\u05E2\u05D5\u05D1\u05D9 \u05E7\u05D5",
  "ns.clear": "\u05E0\u05E7\u05D4 \u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA",
  "ns.borderRadius": "\u05E2\u05D9\u05D2\u05D5\u05DC \u05E4\u05D9\u05E0\u05D5\u05EA",
  "search.placeholder": "\u05D7\u05E4\u05E9 \u05E6\u05DE\u05EA\u05D9\u05DD...",
  "def.root": "\u05E9\u05D5\u05E8\u05E9",
  "def.newRoot": "\u05E9\u05D5\u05E8\u05E9 \u05D7\u05D3\u05E9",
  "def.child": "\u05E6\u05D0\u05E6\u05D0",
  "set.title": "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA MindZJ",
  "set.lang": "\u05E9\u05E4\u05D4",
  "set.langDesc": "\u05E9\u05E4\u05EA \u05DE\u05DE\u05E9\u05E7",
  "set.theme": "\u05E2\u05E8\u05DB\u05EA \u05E0\u05D5\u05E9\u05D0",
  "set.themeDesc": "\u05E2\u05E8\u05DB\u05EA \u05E6\u05D1\u05E2\u05D9\u05DD",
  "set.light": "\u05D1\u05D4\u05D9\u05E8",
  "set.dark": "\u05DB\u05D4\u05D4",
  "set.toolbar": "\u05D4\u05E6\u05D2 \u05E1\u05E8\u05D2\u05DC \u05DB\u05DC\u05D9\u05DD",
  "set.toolbarDesc": "\u05D4\u05E6\u05D2 \u05E1\u05E8\u05D2\u05DC \u05DB\u05DC\u05D9\u05DD",
  "set.canvasBg": "\u05E8\u05E7\u05E2 \u05D1\u05D3 \u05E6\u05D9\u05D5\u05E8",
  "set.canvasBgDesc": "\u05E6\u05D1\u05E2 \u05E8\u05E7\u05E2",
  "set.about": "\u05D0\u05D5\u05D3\u05D5\u05EA",
  "set.version": "\u05D2\u05E8\u05E1\u05D4",
  "set.author": "\u05DE\u05D7\u05D1\u05E8",
  "set.desc": "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA \u05DE\u05E4\u05EA \u05D7\u05E9\u05D9\u05D1\u05D4 \u05D1\u05E7\u05D5\u05D3 \u05E4\u05EA\u05D5\u05D7 \u05E2\u05E9\u05D9\u05E8\u05D4 \u05D1\u05EA\u05DB\u05D5\u05E0\u05D5\u05EA \u05E2\u05D1\u05D5\u05E8 Obsidian \u05E2\u05DD \u05E1\u05D2\u05E0\u05D5\u05E0\u05D5\u05EA \u05DE\u05D5\u05EA\u05D0\u05DE\u05D9\u05DD, \u05D7\u05D9\u05D1\u05D5\u05E8\u05D9 \u05E7\u05E9\u05EA, \u05D1\u05D7\u05D9\u05E8\u05D4 \u05DE\u05E8\u05D5\u05D1\u05D4, \u05D2\u05E8\u05D9\u05E8\u05D4 \u05D5\u05E9\u05D7\u05E8\u05D5\u05E8 \u05D5\u05D9\u05D9\u05D1\u05D5\u05D0/\u05D9\u05D9\u05E6\u05D5\u05D0 Markdown.",
  "set.updated": "\u05E2\u05D5\u05D3\u05DB\u05DF",
  "set.github": "\u05DE\u05D0\u05D2\u05E8 GitHub",
  "set.donate": "\u05EA\u05DE\u05D5\u05DA \u05D1\u05DE\u05D7\u05D1\u05E8 \u05D4\u05E7\u05D5\u05D3 \u05D4\u05E4\u05EA\u05D5\u05D7",
  "set.keys": "\u05E7\u05D9\u05E6\u05D5\u05E8\u05D9 \u05DE\u05E7\u05DC\u05D3\u05EA",
  "set.keysDesc": "\u05D4\u05EA\u05D0\u05DD \u05E7\u05D9\u05E6\u05D5\u05E8\u05D9\u05DD",
  "set.key.edit": "\u05E2\u05E8\u05D5\u05DA \u05E6\u05D5\u05DE\u05EA",
  "set.key.sibling": "\u05D4\u05D5\u05E1\u05E3 \u05D0\u05D7",
  "set.key.child": "\u05D4\u05D5\u05E1\u05E3 \u05E6\u05D0\u05E6\u05D0",
  "set.key.focus": "\u05DE\u05E7\u05D3 \u05E2\u05DC \u05E6\u05D5\u05DE\u05EA",
  "set.key.undo": "\u05D1\u05D8\u05DC",
  "set.key.redo": "\u05D1\u05E6\u05E2 \u05E9\u05D5\u05D1",
  "set.key.lineBreak": "\u05E9\u05D1\u05D9\u05E8\u05EA \u05E9\u05D5\u05E8\u05D4 (\u05D1\u05E2\u05E8\u05D9\u05DB\u05D4)",
  "set.key.dragCanvas": "\u05D2\u05E8\u05D5\u05E8 \u05D1\u05D3 \u05E6\u05D9\u05D5\u05E8",
  "set.key.zoomIn": "\u05D4\u05D2\u05D3\u05DC",
  "set.key.zoomOut": "\u05D4\u05E7\u05D8\u05DF",
  "set.key.zoomReset": "\u05D0\u05E4\u05E1 \u05EA\u05E7\u05E8\u05D9\u05D1",
  "set.key.up": "\u05E0\u05D5\u05D5\u05D8 \u05DC\u05DE\u05E2\u05DC\u05D4",
  "set.key.down": "\u05E0\u05D5\u05D5\u05D8 \u05DC\u05DE\u05D8\u05D4",
  "set.key.left": "\u05E0\u05D5\u05D5\u05D8 \u05E9\u05DE\u05D0\u05DC\u05D4",
  "set.key.right": "\u05E0\u05D5\u05D5\u05D8 \u05D9\u05DE\u05D9\u05E0\u05D4",
  "set.key.press": "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DE\u05E7\u05E9...",
  "set.scroll": "\u05D2\u05DC\u05D9\u05DC\u05D4 \u05D5\u05EA\u05E7\u05E8\u05D9\u05D1",
  "set.invertY": "\u05D4\u05E4\u05D5\u05DA \u05D2\u05DC\u05D9\u05DC\u05D4 \u05D0\u05E0\u05DB\u05D9\u05EA",
  "set.invertX": "\u05D4\u05E4\u05D5\u05DA \u05D2\u05DC\u05D9\u05DC\u05D4 \u05D0\u05D5\u05E4\u05E7\u05D9\u05EA",
  "set.invertZoom": "\u05D4\u05E4\u05D5\u05DA \u05DB\u05D9\u05D5\u05D5\u05DF \u05EA\u05E7\u05E8\u05D9\u05D1",
  "set.editOnCreate": "\u05E2\u05E8\u05D5\u05DA \u05D1\u05D9\u05E6\u05D9\u05E8\u05D4",
  "set.editOnCreateDesc": "\u05DE\u05E6\u05D1 \u05E2\u05E8\u05D9\u05DB\u05D4 \u05D1\u05E2\u05EA \u05D9\u05E6\u05D9\u05E8\u05EA \u05E6\u05DE\u05EA\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD",
  "set.rootName": "\u05E9\u05DD \u05E9\u05D5\u05E8\u05E9",
  "set.rootNameDesc": "\u05E9\u05DD \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC \u05DC\u05E9\u05D5\u05E8\u05E9\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD",
  "set.childName": "\u05E9\u05DD \u05E6\u05D0\u05E6\u05D0",
  "set.childNameDesc": "\u05E9\u05DD \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC \u05DC\u05E6\u05D0\u05E6\u05D0\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD",
  "set.typeToEdit": "\u05D4\u05E7\u05DC\u05D3 \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4",
  "set.typeToEditDesc": "\u05E2\u05E8\u05D5\u05DA \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05E7\u05DC\u05D3\u05D4 \u05DB\u05E9\u05E6\u05D5\u05DE\u05EA \u05E0\u05D1\u05D7\u05E8"
};
var _it = {
  "tb.root": "\u2795 Radice",
  "tb.undo": "\u21A9 Annulla",
  "tb.redo": "\u21AA Ripeti",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F Mappa",
  "tb.style": "\u{1F3A8} Stile",
  "tb.focus": "Messa a fuoco",
  "tb.search": "Cerca",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:Cerca | Spazio:Modifica | Ctrl+C/V/X",
  "tb.newRoot": "Nuova radice",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "Modalit\xE0 Markdown",
  "tb.tipStyle": "Pannello stile",
  "tb.tipFocus": "Messa a fuoco sul nodo",
  "tb.tipSearch": "Cerca nodi",
  "tb.tipSettings": "Impostazioni",
  "tb.zoomIn": "Ingrandisci",
  "tb.zoomOut": "Riduci",
  "sm.customRainbow": "+ Personalizzato",
  "ctx.batchDel": "\u{1F5D1}\uFE0F Elimina in blocco",
  "ctx.editStyle": "\u{1F3A8} Modifica stile",
  "ctx.newRoot": "\u2795 Nuova radice",
  "ctx.undo": "\u21A9 Annulla",
  "ctx.redo": "\u21AA Ripeti",
  "ctx.globalStyle": "\u{1F3A8} Stile globale",
  "ctx.edit": "\u270F\uFE0F Modifica",
  "ctx.style": "\u{1F3A8} Stile",
  "ctx.copy": "\u{1F4CB} Copia",
  "ctx.cut": "\u2702\uFE0F Taglia",
  "ctx.paste": "\u{1F4CC} Incolla",
  "ctx.child": "\u2795 Figlio",
  "ctx.leftChild": "\u2B05 Figlio sinistro",
  "ctx.sibling": "\u2795 Fratello",
  "ctx.delete": "\u{1F5D1}\uFE0F Elimina",
  "ctx.hideToolbar": "Nascondi barra degli strumenti",
  "sm.title": "\u{1F3A8} Stile globale",
  "sm.child": "Nodo figlio",
  "sm.root": "Nodo radice",
  "sm.bg": "Sfondo",
  "sm.text": "Colore testo",
  "sm.fontSize": "Dimensione carattere",
  "sm.font": "Carattere",
  "sm.borderStyle": "Stile bordo",
  "sm.borderColor": "Colore bordo",
  "sm.borderWidth": "Larghezza bordo",
  "sm.borderRadius": "Raggio bordo",
  "sm.minWidth": "Larghezza min.",
  "sm.minHeight": "Altezza min.",
  "sm.conn": "Connessione",
  "sm.type": "Tipo",
  "sm.color": "Colore",
  "sm.width": "Larghezza",
  "sm.connLength": "Lunghezza",
  "sm.rainbow": "Arcobaleno",
  "sm.nodeDir": "Direzione nodi",
  "sm.dirRight": "Destra",
  "sm.dirLeft": "Sinistra",
  "sm.dirBoth": "Entrambi",
  "sm.rainbowPalette": "Tavolozza",
  "sm.sel": "Selezione",
  "sm.selColor": "Colore selezione",
  "sm.selWidth": "Larghezza selezione",
  "sm.selOffset": "Scostamento contorno",
  "sm.editOutline": "Colore contorno modifica",
  "sm.editOutlineWidth": "Larghezza contorno modifica",
  "sm.textAlign": "Allineamento testo",
  "sm.nodePadX": "Riempimento testo",
  "sm.nodeLineHeight": "Altezza riga",
  "sm.canvasBg": "Sfondo area di lavoro",
  "sm.reset": "Ripristina",
  "sm.close": "Chiudi",
  "sm.showToolbar": "Mostra barra strumenti",
  "sm.tbPad": "Riempimento barra",
  "sm.tbPadT": "Superiore",
  "sm.tbPadR": "Destro",
  "sm.tbPadB": "Inferiore",
  "sm.tbPadL": "Sinistro",
  "sm.tbPos": "Posizione barra",
  "sm.tbPosTop": "Superiore",
  "sm.tbPosBottom": "Inferiore",
  "sm.tbBg": "Sfondo barra",
  "sm.tbBtnBg": "Sfondo pulsante",
  "sm.tbBtnBorder": "Stile bordo pulsante",
  "sm.tbBtnBorderColor": "Colore bordo pulsante",
  "sm.tbBtnText": "Colore testo pulsante",
  "sm.tbResetDefault": "Ripristina barra strumenti",
  "ns.title": "\u{1F3A8} Stile nodo",
  "ns.connColor": "Colore linea",
  "ns.connWidth": "Larghezza linea",
  "ns.clear": "Cancella personalizzazione",
  "ns.borderRadius": "Raggio bordo",
  "search.placeholder": "Cerca nodi...",
  "def.root": "Radice",
  "def.newRoot": "Nuova radice",
  "def.child": "Figlio",
  "set.title": "Impostazioni MindZJ",
  "set.lang": "Lingua",
  "set.langDesc": "Lingua dell'interfaccia",
  "set.theme": "Tema",
  "set.themeDesc": "Tema colori",
  "set.light": "Chiaro",
  "set.dark": "Scuro",
  "set.toolbar": "Mostra barra strumenti",
  "set.toolbarDesc": "Mostra barra strumenti",
  "set.canvasBg": "Sfondo area di lavoro",
  "set.canvasBgDesc": "Colore di sfondo",
  "set.about": "Informazioni",
  "set.version": "Versione",
  "set.author": "Autore",
  "set.desc": "App di mappe mentali open source ricca di funzionalit\xE0 per Obsidian con stili personalizzati, connessioni arcobaleno, selezione multipla, trascinamento e importazione/esportazione Markdown.",
  "set.updated": "Aggiornato",
  "set.github": "Repository GitHub",
  "set.donate": "Supporta l'autore open source",
  "set.keys": "Scorciatoie da tastiera",
  "set.keysDesc": "Personalizza scorciatoie",
  "set.key.edit": "Modifica nodo",
  "set.key.sibling": "Aggiungi fratello",
  "set.key.child": "Aggiungi figlio",
  "set.key.focus": "Messa a fuoco sul nodo",
  "set.key.undo": "Annulla",
  "set.key.redo": "Ripeti",
  "set.key.lineBreak": "A capo (in modifica)",
  "set.key.dragCanvas": "Trascina area di lavoro",
  "set.key.zoomIn": "Ingrandisci",
  "set.key.zoomOut": "Riduci",
  "set.key.zoomReset": "Reimposta zoom",
  "set.key.up": "Naviga su",
  "set.key.down": "Naviga gi\xF9",
  "set.key.left": "Naviga a sinistra",
  "set.key.right": "Naviga a destra",
  "set.key.press": "Premi un tasto...",
  "set.scroll": "Scorrimento e zoom",
  "set.invertY": "Inverti scorrimento verticale",
  "set.invertX": "Inverti scorrimento orizzontale",
  "set.invertZoom": "Inverti direzione zoom",
  "set.editOnCreate": "Modifica alla creazione",
  "set.editOnCreateDesc": "Modalit\xE0 modifica alla creazione dei nodi",
  "set.rootName": "Nome radice",
  "set.rootNameDesc": "Nome predefinito per nuove radici",
  "set.childName": "Nome figlio",
  "set.childNameDesc": "Nome predefinito per nuovi figli",
  "set.typeToEdit": "Digita per modificare",
  "set.typeToEditDesc": "Modifica digitando quando un nodo \xE8 selezionato"
};
var _ar = {
  "tb.root": "\u2795 \u062C\u0630\u0631",
  "tb.undo": "\u21A9 \u062A\u0631\u0627\u062C\u0639",
  "tb.redo": "\u21AA \u0625\u0639\u0627\u062F\u0629",
  "tb.md": "\u{1F4C4} MD",
  "tb.map": "\u{1F5FA}\uFE0F \u062E\u0631\u064A\u0637\u0629",
  "tb.style": "\u{1F3A8} \u0646\u0645\u0637",
  "tb.focus": "\u062A\u0631\u0643\u064A\u0632",
  "tb.search": "\u0628\u062D\u062B",
  "tb.settings": "\u2699\uFE0F",
  "tb.help": "Ctrl+F:\u0628\u062D\u062B | \u0645\u0633\u0627\u0641\u0629:\u062A\u062D\u0631\u064A\u0631 | Ctrl+C/V/X",
  "tb.newRoot": "\u062C\u0630\u0631 \u062C\u062F\u064A\u062F",
  "tb.tipUndo": "Ctrl+Z",
  "tb.tipRedo": "Ctrl+Shift+Z",
  "tb.tipMd": "\u0648\u0636\u0639 Markdown",
  "tb.tipStyle": "\u0644\u0648\u062D\u0629 \u0627\u0644\u0623\u0646\u0645\u0627\u0637",
  "tb.tipFocus": "\u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0627\u0644\u0639\u0642\u062F\u0629",
  "tb.tipSearch": "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0639\u0642\u062F",
  "tb.tipSettings": "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
  "tb.zoomIn": "\u062A\u0643\u0628\u064A\u0631",
  "tb.zoomOut": "\u062A\u0635\u063A\u064A\u0631",
  "sm.customRainbow": "+ \u0645\u062E\u0635\u0635",
  "ctx.batchDel": "\u{1F5D1}\uFE0F \u062D\u0630\u0641 \u062C\u0645\u0627\u0639\u064A",
  "ctx.editStyle": "\u{1F3A8} \u062A\u062D\u0631\u064A\u0631 \u0627\u0644\u0646\u0645\u0637",
  "ctx.newRoot": "\u2795 \u062C\u0630\u0631 \u062C\u062F\u064A\u062F",
  "ctx.undo": "\u21A9 \u062A\u0631\u0627\u062C\u0639",
  "ctx.redo": "\u21AA \u0625\u0639\u0627\u062F\u0629",
  "ctx.globalStyle": "\u{1F3A8} \u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u0639\u0627\u0645",
  "ctx.edit": "\u270F\uFE0F \u062A\u062D\u0631\u064A\u0631",
  "ctx.style": "\u{1F3A8} \u0646\u0645\u0637",
  "ctx.copy": "\u{1F4CB} \u0646\u0633\u062E",
  "ctx.cut": "\u2702\uFE0F \u0642\u0635",
  "ctx.paste": "\u{1F4CC} \u0644\u0635\u0642",
  "ctx.child": "\u2795 \u0641\u0631\u0639",
  "ctx.leftChild": "\u2B05 \u0641\u0631\u0639 \u0623\u064A\u0633\u0631",
  "ctx.sibling": "\u2795 \u0634\u0642\u064A\u0642",
  "ctx.delete": "\u{1F5D1}\uFE0F \u062D\u0630\u0641",
  "ctx.hideToolbar": "\u0625\u062E\u0641\u0627\u0621 \u0634\u0631\u064A\u0637 \u0627\u0644\u0623\u062F\u0648\u0627\u062A",
  "sm.title": "\u{1F3A8} \u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u0639\u0627\u0645",
  "sm.child": "\u0639\u0642\u062F\u0629 \u0641\u0631\u0639\u064A\u0629",
  "sm.root": "\u0639\u0642\u062F\u0629 \u062C\u0630\u0631\u064A\u0629",
  "sm.bg": "\u0627\u0644\u062E\u0644\u0641\u064A\u0629",
  "sm.text": "\u0644\u0648\u0646 \u0627\u0644\u0646\u0635",
  "sm.fontSize": "\u062D\u062C\u0645 \u0627\u0644\u062E\u0637",
  "sm.font": "\u0627\u0644\u062E\u0637",
  "sm.borderStyle": "\u0646\u0645\u0637 \u0627\u0644\u062D\u062F\u0648\u062F",
  "sm.borderColor": "\u0644\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F",
  "sm.borderWidth": "\u0639\u0631\u0636 \u0627\u0644\u062D\u062F\u0648\u062F",
  "sm.borderRadius": "\u062A\u0642\u0648\u064A\u0633 \u0627\u0644\u0632\u0648\u0627\u064A\u0627",
  "sm.minWidth": "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0639\u0631\u0636",
  "sm.minHeight": "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0627\u0631\u062A\u0641\u0627\u0639",
  "sm.conn": "\u062E\u0637 \u0627\u0644\u0648\u0635\u0644",
  "sm.type": "\u0627\u0644\u0646\u0648\u0639",
  "sm.color": "\u0627\u0644\u0644\u0648\u0646",
  "sm.width": "\u0627\u0644\u0639\u0631\u0636",
  "sm.connLength": "\u0627\u0644\u0637\u0648\u0644",
  "sm.rainbow": "\u0642\u0648\u0633 \u0642\u0632\u062D",
  "sm.nodeDir": "\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0639\u0642\u062F",
  "sm.dirRight": "\u064A\u0645\u064A\u0646",
  "sm.dirLeft": "\u064A\u0633\u0627\u0631",
  "sm.dirBoth": "\u0643\u0644\u0627\u0647\u0645\u0627",
  "sm.rainbowPalette": "\u0644\u0648\u062D \u0627\u0644\u0623\u0644\u0648\u0627\u0646",
  "sm.sel": "\u0627\u0644\u062A\u062D\u062F\u064A\u062F",
  "sm.selColor": "\u0644\u0648\u0646 \u0627\u0644\u062A\u062D\u062F\u064A\u062F",
  "sm.selWidth": "\u0639\u0631\u0636 \u0627\u0644\u062A\u062D\u062F\u064A\u062F",
  "sm.selOffset": "\u0625\u0632\u0627\u062D\u0629 \u0627\u0644\u0625\u0637\u0627\u0631",
  "sm.editOutline": "\u0644\u0648\u0646 \u0625\u0637\u0627\u0631 \u0627\u0644\u062A\u062D\u0631\u064A\u0631",
  "sm.editOutlineWidth": "\u0639\u0631\u0636 \u0625\u0637\u0627\u0631 \u0627\u0644\u062A\u062D\u0631\u064A\u0631",
  "sm.textAlign": "\u0645\u062D\u0627\u0630\u0627\u0629 \u0627\u0644\u0646\u0635",
  "sm.nodePadX": "\u062D\u0634\u0648 \u0627\u0644\u0646\u0635",
  "sm.nodeLineHeight": "\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u0633\u0637\u0631",
  "sm.canvasBg": "\u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0644\u0648\u062D\u0629",
  "sm.reset": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646",
  "sm.close": "\u0625\u063A\u0644\u0627\u0642",
  "sm.showToolbar": "\u0625\u0638\u0647\u0627\u0631 \u0634\u0631\u064A\u0637 \u0627\u0644\u0623\u062F\u0648\u0627\u062A",
  "sm.tbPad": "\u062D\u0634\u0648 \u0627\u0644\u0634\u0631\u064A\u0637",
  "sm.tbPadT": "\u0623\u0639\u0644\u0649",
  "sm.tbPadR": "\u064A\u0645\u064A\u0646",
  "sm.tbPadB": "\u0623\u0633\u0641\u0644",
  "sm.tbPadL": "\u064A\u0633\u0627\u0631",
  "sm.tbPos": "\u0645\u0648\u0636\u0639 \u0627\u0644\u0634\u0631\u064A\u0637",
  "sm.tbPosTop": "\u0623\u0639\u0644\u0649",
  "sm.tbPosBottom": "\u0623\u0633\u0641\u0644",
  "sm.tbBg": "\u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0634\u0631\u064A\u0637",
  "sm.tbBtnBg": "\u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0632\u0631",
  "sm.tbBtnBorder": "\u0646\u0645\u0637 \u062D\u062F\u0648\u062F \u0627\u0644\u0632\u0631",
  "sm.tbBtnBorderColor": "\u0644\u0648\u0646 \u062D\u062F\u0648\u062F \u0627\u0644\u0632\u0631",
  "sm.tbBtnText": "\u0644\u0648\u0646 \u0646\u0635 \u0627\u0644\u0632\u0631",
  "sm.tbResetDefault": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0634\u0631\u064A\u0637",
  "ns.title": "\u{1F3A8} \u0646\u0645\u0637 \u0627\u0644\u0639\u0642\u062F\u0629",
  "ns.connColor": "\u0644\u0648\u0646 \u0627\u0644\u062E\u0637",
  "ns.connWidth": "\u0639\u0631\u0636 \u0627\u0644\u062E\u0637",
  "ns.clear": "\u0645\u0633\u062D \u0627\u0644\u062A\u062E\u0635\u064A\u0635",
  "ns.borderRadius": "\u062A\u0642\u0648\u064A\u0633 \u0627\u0644\u0632\u0648\u0627\u064A\u0627",
  "search.placeholder": "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0639\u0642\u062F...",
  "def.root": "\u062C\u0630\u0631",
  "def.newRoot": "\u062C\u0630\u0631 \u062C\u062F\u064A\u062F",
  "def.child": "\u0641\u0631\u0639",
  "set.title": "\u0625\u0639\u062F\u0627\u062F\u0627\u062A MindZJ",
  "set.lang": "\u0627\u0644\u0644\u063A\u0629",
  "set.langDesc": "\u0644\u063A\u0629 \u0627\u0644\u0648\u0627\u062C\u0647\u0629",
  "set.theme": "\u0627\u0644\u0633\u0645\u0629",
  "set.themeDesc": "\u0633\u0645\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646",
  "set.light": "\u0641\u0627\u062A\u062D",
  "set.dark": "\u062F\u0627\u0643\u0646",
  "set.toolbar": "\u0625\u0638\u0647\u0627\u0631 \u0634\u0631\u064A\u0637 \u0627\u0644\u0623\u062F\u0648\u0627\u062A",
  "set.toolbarDesc": "\u0625\u0638\u0647\u0627\u0631 \u0634\u0631\u064A\u0637 \u0627\u0644\u0623\u062F\u0648\u0627\u062A",
  "set.canvasBg": "\u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0644\u0648\u062D\u0629",
  "set.canvasBgDesc": "\u0644\u0648\u0646 \u0627\u0644\u062E\u0644\u0641\u064A\u0629",
  "set.about": "\u062D\u0648\u0644",
  "set.version": "\u0627\u0644\u0625\u0635\u062F\u0627\u0631",
  "set.author": "\u0627\u0644\u0645\u0624\u0644\u0641",
  "set.desc": "\u062A\u0637\u0628\u064A\u0642 \u062E\u0631\u0627\u0626\u0637 \u0630\u0647\u0646\u064A\u0629 \u0645\u0641\u062A\u0648\u062D \u0627\u0644\u0645\u0635\u062F\u0631 \u063A\u0646\u064A \u0628\u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0644\u0640 Obsidian \u0645\u0639 \u0623\u0646\u0645\u0627\u0637 \u0645\u062E\u0635\u0635\u0629\u060C \u0648\u0635\u0644\u0627\u062A \u0642\u0648\u0633 \u0642\u0632\u062D\u060C \u062A\u062D\u062F\u064A\u062F \u0645\u062A\u0639\u062F\u062F\u060C \u0633\u062D\u0628 \u0648\u0625\u0641\u0644\u0627\u062A\u060C \u0648\u0627\u0633\u062A\u064A\u0631\u0627\u062F/\u062A\u0635\u062F\u064A\u0631 Markdown.",
  "set.updated": "\u062A\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062B",
  "set.github": "\u0645\u0633\u062A\u0648\u062F\u0639 GitHub",
  "set.donate": "\u0627\u062F\u0639\u0645 \u0645\u0624\u0644\u0641 \u0627\u0644\u0645\u0635\u062F\u0631 \u0627\u0644\u0645\u0641\u062A\u0648\u062D",
  "set.keys": "\u0627\u062E\u062A\u0635\u0627\u0631\u0627\u062A \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D",
  "set.keysDesc": "\u062A\u062E\u0635\u064A\u0635 \u0627\u0644\u0627\u062E\u062A\u0635\u0627\u0631\u0627\u062A",
  "set.key.edit": "\u062A\u062D\u0631\u064A\u0631 \u0627\u0644\u0639\u0642\u062F\u0629",
  "set.key.sibling": "\u0625\u0636\u0627\u0641\u0629 \u0634\u0642\u064A\u0642",
  "set.key.child": "\u0625\u0636\u0627\u0641\u0629 \u0641\u0631\u0639",
  "set.key.focus": "\u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0627\u0644\u0639\u0642\u062F\u0629",
  "set.key.undo": "\u062A\u0631\u0627\u062C\u0639",
  "set.key.redo": "\u0625\u0639\u0627\u062F\u0629",
  "set.key.lineBreak": "\u0641\u0627\u0635\u0644 \u0633\u0637\u0631 (\u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u062D\u0631\u064A\u0631)",
  "set.key.dragCanvas": "\u0633\u062D\u0628 \u0627\u0644\u0644\u0648\u062D\u0629",
  "set.key.zoomIn": "\u062A\u0643\u0628\u064A\u0631",
  "set.key.zoomOut": "\u062A\u0635\u063A\u064A\u0631",
  "set.key.zoomReset": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u062A\u0643\u0628\u064A\u0631",
  "set.key.up": "\u0627\u0644\u062A\u0646\u0642\u0644 \u0644\u0623\u0639\u0644\u0649",
  "set.key.down": "\u0627\u0644\u062A\u0646\u0642\u0644 \u0644\u0623\u0633\u0641\u0644",
  "set.key.left": "\u0627\u0644\u062A\u0646\u0642\u0644 \u0644\u0644\u064A\u0633\u0627\u0631",
  "set.key.right": "\u0627\u0644\u062A\u0646\u0642\u0644 \u0644\u0644\u064A\u0645\u064A\u0646",
  "set.key.press": "\u0627\u0636\u063A\u0637 \u0645\u0641\u062A\u0627\u062D\u0627\u064B...",
  "set.scroll": "\u0627\u0644\u062A\u0645\u0631\u064A\u0631 \u0648\u0627\u0644\u062A\u0643\u0628\u064A\u0631",
  "set.invertY": "\u0639\u0643\u0633 \u0627\u0644\u062A\u0645\u0631\u064A\u0631 \u0627\u0644\u0639\u0645\u0648\u062F\u064A",
  "set.invertX": "\u0639\u0643\u0633 \u0627\u0644\u062A\u0645\u0631\u064A\u0631 \u0627\u0644\u0623\u0641\u0642\u064A",
  "set.invertZoom": "\u0639\u0643\u0633 \u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u062A\u0643\u0628\u064A\u0631",
  "set.editOnCreate": "\u062A\u062D\u0631\u064A\u0631 \u0639\u0646\u062F \u0627\u0644\u0625\u0646\u0634\u0627\u0621",
  "set.editOnCreateDesc": "\u0648\u0636\u0639 \u0627\u0644\u062A\u062D\u0631\u064A\u0631 \u0639\u0646\u062F \u0625\u0646\u0634\u0627\u0621 \u0639\u0642\u062F \u062C\u062F\u064A\u062F\u0629",
  "set.rootName": "\u0627\u0633\u0645 \u0627\u0644\u062C\u0630\u0631",
  "set.rootNameDesc": "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A \u0644\u0644\u062C\u0630\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
  "set.childName": "\u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0639",
  "set.childNameDesc": "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A \u0644\u0644\u0641\u0631\u0648\u0639 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
  "set.typeToEdit": "\u0627\u0643\u062A\u0628 \u0644\u0644\u062A\u062D\u0631\u064A\u0631",
  "set.typeToEditDesc": "\u062D\u0631\u0651\u0631 \u0628\u0627\u0644\u0643\u062A\u0627\u0628\u0629 \u0639\u0646\u062F \u062A\u062D\u062F\u064A\u062F \u0639\u0642\u062F\u0629"
};
var ALL = {
  en: _en,
  zh: _zh,
  ja: _ja,
  fr: _fr,
  de: _de,
  es: _es,
  ru: _ru,
  sv: _sv,
  hi: _hi,
  ko: _ko,
  pt: _pt,
  fi: _fi,
  no: _no,
  nl: _nl,
  li: _li,
  da: _da,
  he: _he,
  it: _it,
  ar: _ar
};
var _lang = "en";
function setLang(l) {
  _lang = l;
}
function t(key) {
  var _a, _b, _c, _d;
  return (_d = (_c = (_a = ALL[_lang]) == null ? void 0 : _a[key]) != null ? _c : (_b = ALL["en"]) == null ? void 0 : _b[key]) != null ? _d : key;
}

// src/MindMapView.ts
var MindMapView = class extends import_obsidian.TextFileView {
  constructor(leaf, plugin) {
    super(leaf);
    this.devEl = null;
    this.panX = 0;
    this.panY = 0;
    this.zoom = 1;
    this.spaceDown = false;
    this.dragCv = false;
    this.smx = 0;
    this.smy = 0;
    this.selId = null;
    this.multiSel = /* @__PURE__ */ new Set();
    this.editId = null;
    this.roots = [];
    this.lct = 0;
    this.lcnid = null;
    this.commitEdit = null;
    this.undoS = [];
    this.redoS = [];
    this.style = { ...DEFAULT_STYLE };
    this.ds = null;
    this.uiOk = false;
    this.boxSel = false;
    this.bsx = 0;
    this.bsy = 0;
    this.bcx = 0;
    this.bcy = 0;
    this.boxShift = false;
    this.boxEl = null;
    this.popClose = null;
    this.mdMode = false;
    this.mdBtn = null;
    this.clipboard = null;
    this.activeMenu = null;
    this.searchBar = null;
    this.searchResults = [];
    this.searchIdx = 0;
    this.oldPos = /* @__PURE__ */ new Map();
    this.animId = null;
    this.liveTA = null;
    this.mdSnapshot = null;
    this.zoomLabel = null;
    this.proxyTA = null;
    this._kd = (e) => {
      var _a;
      if (!this.isAct() || this.mdMode || this.isExtInput(e))
        return;
      if (this.searchBar && this.searchBar.contains(document.activeElement))
        return;
      if (this.popClose) {
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopPropagation();
          this.popClose();
          this.popClose = null;
        }
        return;
      }
      if ((_a = this.ds) == null ? void 0 : _a.isDragging) {
        e.preventDefault();
        e.stopPropagation();
        if (e.key === "Escape")
          this.cancelDrag();
        return;
      }
      if (this.editId) {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a" && this.liveTA) {
          e.preventDefault();
          e.stopPropagation();
          this.liveTA.select();
        }
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
        e.preventDefault();
        e.stopPropagation();
        this.toggleSearch();
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c" && !e.shiftKey && this.selId) {
        e.preventDefault();
        e.stopPropagation();
        this.copyNode(false);
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "x" && this.selId) {
        e.preventDefault();
        e.stopPropagation();
        this.copyNode(true);
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "v" && this.clipboard) {
        e.preventDefault();
        e.stopPropagation();
        this.pasteNode(e.shiftKey);
        return;
      }
      if (this.matchKey(e, this.kb.undo)) {
        e.preventDefault();
        e.stopPropagation();
        this.undo();
        return;
      }
      if (this.matchKey(e, this.kb.redo)) {
        e.preventDefault();
        e.stopPropagation();
        this.redo();
        return;
      }
      if (this.matchKey(e, this.kb.zoomIn)) {
        e.preventDefault();
        e.stopPropagation();
        this.zoomBy(1.1);
        return;
      }
      if (this.matchKey(e, this.kb.zoomOut)) {
        e.preventDefault();
        e.stopPropagation();
        this.zoomBy(0.9);
        return;
      }
      if (this.matchKey(e, this.kb.zoomReset)) {
        e.preventDefault();
        e.stopPropagation();
        this.zoomTo(1);
        return;
      }
      if (this.matchKey(e, this.kb.addChild)) {
        e.preventDefault();
        e.stopPropagation();
        if (e.shiftKey && this.selId) {
          this.addLeftChild();
          return;
        }
        if (this.selId)
          this.addChildNode();
        return;
      }
      if (this.matchKey(e, this.kb.addSibling) && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        e.stopPropagation();
        if (e.shiftKey && this.selId) {
          const sel = this.fAll(this.selId);
          if (sel == null ? void 0 : sel.isRoot) {
            this.addLeftChild();
            return;
          }
        }
        if (!e.shiftKey && this.selId)
          this.addSibling();
        return;
      }
      if (this.matchKey(e, this.kb.editNode) && !e.repeat && this.selId && !this.isMulti()) {
        e.preventDefault();
        e.stopPropagation();
        this.editId = this.selId;
        this.render();
        return;
      }
      if (this.matchKey(e, this.kb.dragCanvas) && !e.repeat) {
        e.preventDefault();
        e.stopPropagation();
        this.spaceDown = true;
        if (this.cc)
          this.cc.toggleClass("mz-cursor-grab", true);
        return;
      }
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        e.stopPropagation();
        if (this.selId) {
          this.editId = this.selId;
          this.render();
        }
        return;
      }
      if (this.matchKey(e, this.kb.focusNode) && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        e.stopPropagation();
        this.focusSel();
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        if (this.searchBar) {
          this.searchBar.remove();
          this.searchBar = null;
        } else {
          this.clrSel();
          this.closePop();
        }
        this.render();
        return;
      }
      if (e.key === "Backspace" || e.key === "Delete") {
        e.preventDefault();
        e.stopPropagation();
        if (this.isMulti())
          this.batchDel();
        else if (this.selId)
          this.delNode();
        return;
      }
      if (this.matchKey(e, this.kb.navUp)) {
        if (this.selId) {
          e.preventDefault();
          e.stopPropagation();
          this.arrow("ArrowUp");
        }
        return;
      }
      if (this.matchKey(e, this.kb.navDown)) {
        if (this.selId) {
          e.preventDefault();
          e.stopPropagation();
          this.arrow("ArrowDown");
        }
        return;
      }
      if (this.matchKey(e, this.kb.navLeft)) {
        if (this.selId) {
          e.preventDefault();
          e.stopPropagation();
          this.arrow("ArrowLeft");
        }
        return;
      }
      if (this.matchKey(e, this.kb.navRight)) {
        if (this.selId) {
          e.preventDefault();
          e.stopPropagation();
          this.arrow("ArrowRight");
        }
        return;
      }
    };
    // FIX #1: keep grab cursor during drag, don't reset to pointer
    this._ku = (e) => {
      if (e.code === "Space" || this.matchKey(e, this.kb.editNode) || this.matchKey(e, this.kb.dragCanvas)) {
        this.spaceDown = false;
        this.dragCv = false;
        if (this.cc) {
          this.cc.toggleClass("mz-cursor-grabbing", false);
          this.cc.toggleClass("mz-cursor-grab", false);
        }
      }
    };
    this._mu = (e) => {
      var _a, _b;
      if (this.boxSel) {
        this.endBox(e);
        return;
      }
      if (this.dragCv) {
        this.dragCv = false;
        if (this.cc) {
          this.cc.toggleClass("mz-cursor-grabbing", false);
          this.cc.toggleClass("mz-cursor-grab", this.spaceDown);
        }
      }
      if (!this.ds)
        return;
      if (!this.ds.isDragging) {
        this.ds = null;
        return;
      }
      if (this.ds.isRootDrag) {
        this.ds = null;
        this.render();
        this.doSave();
        return;
      }
      const d = this.ds;
      const rc = this.cc.getBoundingClientRect();
      const mx = (e.clientX - rc.left - this.panX) / this.zoom, my = (e.clientY - rc.top - this.panY) / this.zoom;
      const dx = mx - d.startX, dy = my - d.startY;
      const dn = this.fAll(d.nodeId);
      const dnW = dn ? dn.width : 0;
      const isLeftSide = (dn == null ? void 0 : dn.side) === "left";
      const edgeX = dn ? isLeftSide ? dn.x + dx + dnW / 2 : dn.x + dx - dnW / 2 : mx;
      const gy = dn ? dn.y + dy : my;
      const tgt = this.detTgt(edgeX, edgeX, gy, d.nodeId);
      if (tgt) {
        this.recPos();
        this.saveS();
        const selIds = this.allSel();
        const toMove = [];
        const collectOrdered = (parent) => {
          for (let i = parent.children.length - 1; i >= 0; i--) {
            const c = parent.children[i];
            if (selIds.has(c.id) && !c.isRoot) {
              toMove.unshift(parent.children.splice(i, 1)[0]);
            } else {
              collectOrdered(c);
            }
          }
        };
        for (const r of this.roots)
          collectOrdered(r);
        if (!toMove.length) {
          const det = this.remAll(d.nodeId);
          if (det)
            toMove.push(det);
        }
        const tgtNode = this.fAll(tgt.id);
        const tgtSide = (tgtNode == null ? void 0 : tgtNode.side) || ((tgtNode == null ? void 0 : tgtNode.isRoot) ? void 0 : "right");
        if (tgtSide) {
          const setSide = (n, s) => {
            n.side = s;
            for (const c of n.children)
              setSide(c, s);
          };
          for (const m of toMove)
            setSide(m, tgtSide);
        }
        for (let i = 0; i < toMove.length; i++) {
          if (i === 0)
            this.insTree(toMove[i], tgt.id, tgt.zone);
          else
            this.insTree(toMove[i], toMove[i - 1].id, "after");
        }
        this.multiSel.clear();
        for (const m of toMove)
          this.multiSel.add(m.id);
        this.selId = toMove.length ? toMove[0].id : null;
      }
      (_a = d.ghostEl) == null ? void 0 : _a.remove();
      (_b = d.indicatorEl) == null ? void 0 : _b.remove();
      this.ds = null;
      if (tgt)
        this.animRender();
      else
        this.render();
      this.doSave();
    };
    this.plugin = plugin;
    this.style = plugin.getStyle();
  }
  get kb() {
    return this.plugin.settings.keyBindings;
  }
  getRainbow() {
    var _a;
    const p = this.style.rainbowPalette;
    if ((_a = this.style.customRainbows) == null ? void 0 : _a[p])
      return this.style.customRainbows[p];
    return RAINBOW_PALETTES[p] || RAINBOW_PALETTES.classic;
  }
  mkRoot(txt) {
    return {
      id: crypto.randomUUID(),
      text: txt,
      x: 0,
      y: 0,
      width: this.calcW(txt, true),
      height: this.calcH(txt, true),
      children: [],
      isRoot: true
    };
  }
  getViewType() {
    return VIEW_TYPE_MINDMAP;
  }
  getDisplayText() {
    return this.file ? this.file.basename : "MindZJ";
  }
  getIcon() {
    return "network";
  }
  getViewData() {
    if (this.editId && this.liveTA) {
      const nd = this.fAll(this.editId);
      if (nd)
        nd.text = this.liveTA.value;
    }
    return JSON.stringify({ rootNodes: this.roots }, null, 2);
  }
  setViewData(data, clear) {
    if (clear) {
      this.roots = [];
      this.selId = null;
      this.editId = null;
      this.undoS = [];
      this.redoS = [];
      this.multiSel.clear();
    }
    try {
      const p = JSON.parse(data);
      this.roots = Array.isArray(p.rootNodes) && p.rootNodes.length ? p.rootNodes : [this.mkRoot(this.plugin.getRootName())];
    } catch (e) {
      this.roots = [this.mkRoot(this.plugin.getRootName())];
    }
    if (this.roots.length && !this.selId)
      this.selId = this.roots[0].id;
    if (this.uiOk) {
      if (this.mdMode)
        this.renderMd();
      else
        this.fitAll();
    }
  }
  clear() {
    this.roots = [];
    this.selId = null;
    this.editId = null;
    this.multiSel.clear();
  }
  doSave() {
    this.requestSave();
  }
  fitAll() {
    if (!this.cc || !this.roots.length)
      return;
    const rc = this.cc.getBoundingClientRect();
    if (rc.width < 1 || rc.height < 1) {
      requestAnimationFrame(() => this.fitAll());
      return;
    }
    for (const r of this.roots)
      this.doLayout(r);
    let x1 = Infinity, x2 = -Infinity, y1 = Infinity, y2 = -Infinity;
    const vis = (n) => {
      x1 = Math.min(x1, n.x - n.width / 2);
      x2 = Math.max(x2, n.x + n.width / 2);
      y1 = Math.min(y1, n.y - n.height / 2);
      y2 = Math.max(y2, n.y + n.height / 2);
      for (const c of n.children)
        vis(c);
    };
    for (const r of this.roots)
      vis(r);
    this.zoom = Math.min(
      1,
      Math.min(rc.width / (x2 - x1 + 100), rc.height / (y2 - y1 + 100))
    );
    if (!isFinite(this.zoom) || this.zoom <= 0)
      this.zoom = 1;
    this.panX = rc.width / 2 - (x1 + x2) / 2 * this.zoom;
    this.panY = rc.height / 2 - (y1 + y2) / 2 * this.zoom;
    this.updTx();
    this.render();
  }
  focusNode(nd) {
    if (!this.cc)
      return;
    const r = this.cc.getBoundingClientRect();
    this.panX = r.width / 2 - nd.x * this.zoom - r.width * 0.17;
    this.panY = r.height / 2 - nd.y * this.zoom - r.height * 0.05;
    this.updTx();
  }
  refreshUI() {
    if (!this.uiOk)
      return;
    if (this.tbEl) {
      this.tbEl.empty();
      this.buildTb(this.tbEl);
      this.applyToolbarStyle();
    }
    this.updateToolbarVisibility();
    this.applyCanvasBg();
    this.updateDevPanel();
    this.render();
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async onOpen() {
    const ct = this.containerEl.children[1];
    ct.empty();
    ct.addClass("mz-view-ct");
    this.tbEl = ct.createEl("div");
    this.applyToolbarStyle();
    this.buildTb(this.tbEl);
    this.svgCt = ct.createEl("div", {
      attr: { tabindex: "0" }
    });
    this.svgCt.addClass("mz-svg-ct");
    this.cc = this.svgCt;
    this.svgCt.addEventListener("scroll", () => {
      this.svgCt.scrollTop = 0;
      this.svgCt.scrollLeft = 0;
    });
    this.applyCanvasBg();
    this.svgEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    this.svgEl.setAttribute("width", "100%");
    this.svgEl.setAttribute("height", "100%");
    this.cc.appendChild(this.svgEl);
    this.gEl = document.createElementNS("http://www.w3.org/2000/svg", "g");
    this.svgEl.appendChild(this.gEl);
    this.edgesG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    this.gEl.appendChild(this.edgesG);
    this.nodesG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    this.gEl.appendChild(this.nodesG);
    this.overlayG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    this.gEl.appendChild(this.overlayG);
    this.mdCt = ct.createEl("textarea");
    this.mdCt.addClass("mz-md-ta");
    this.mdCt.addClass("mz-hidden");
    this.bindEvts();
    window.addEventListener("keydown", this._kd, true);
    window.addEventListener("keyup", this._ku, true);
    window.addEventListener("mouseup", this._mu, true);
    this.uiOk = true;
    this.updateToolbarVisibility();
    this.updateDevPanel();
    setTimeout(() => {
      var _a;
      if (this.roots.length)
        this.fitAll();
      (_a = this.cc) == null ? void 0 : _a.focus({ preventScroll: true });
    }, 0);
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async onClose() {
    if (this.commitEdit)
      this.commitEdit();
    this.clearProxy();
    this.uiOk = false;
    this.spaceDown = false;
    this.dragCv = false;
    this.liveTA = null;
    window.removeEventListener("keydown", this._kd, true);
    window.removeEventListener("keyup", this._ku, true);
    window.removeEventListener("mouseup", this._mu, true);
    if (this.animId)
      cancelAnimationFrame(this.animId);
  }
  applyCanvasBg() {
    if (this.svgCt)
      Object.entries({ "--mz-canvas-bg": this.style.canvasBg }).forEach(
        ([k, v]) => this.svgCt.style.setProperty(k, v)
      );
  }
  applyToolbarStyle() {
    var _a;
    const s = this.style;
    const pos = s.toolbarPosition === "bottom" ? 2 : 0;
    const borderSide = s.toolbarPosition === "bottom" ? "top" : "bottom";
    const bdrC = s.toolbarBorderColor || "#e0e0e0";
    const bdrW = (_a = s.toolbarBorderWidth) != null ? _a : 1;
    this.tbEl.style.cssText = `height:42px;display:flex;align-items:center;gap:6px;flex-shrink:0;padding:${s.toolbarPadTop}px ${s.toolbarPadRight}px ${s.toolbarPadBottom}px ${s.toolbarPadLeft}px;background:${s.toolbarBgColor};border-${borderSide}:${bdrW}px solid ${bdrC};order:${pos};`;
  }
  updateToolbarVisibility() {
    if (this.tbEl)
      this.tbEl.toggleClass(
        "mz-hidden",
        !this.plugin.settings.showToolbar
      );
  }
  isSel(id) {
    return this.selId === id || this.multiSel.has(id);
  }
  clrSel() {
    this.selId = null;
    this.multiSel.clear();
  }
  sel1(id) {
    this.multiSel.clear();
    this.selId = id;
  }
  togSel(id) {
    if (this.multiSel.has(id)) {
      this.multiSel.delete(id);
      if (this.selId === id)
        this.selId = this.multiSel.size ? [...this.multiSel][0] : null;
    } else {
      if (this.selId && !this.multiSel.has(this.selId))
        this.multiSel.add(this.selId);
      this.multiSel.add(id);
      this.selId = id;
    }
  }
  allSel() {
    const s = new Set(this.multiSel);
    if (this.selId)
      s.add(this.selId);
    return s;
  }
  isMulti() {
    return this.allSel().size > 1;
  }
  closePop() {
    if (this.popClose) {
      this.popClose();
      this.popClose = null;
    }
  }
  updateDevPanel() {
    var _a, _b;
    if (!this.plugin.settings.developerMode) {
      if (this.devEl) {
        this.devEl.remove();
        this.devEl = null;
      }
      return;
    }
    if (!this.devEl && this.svgCt) {
      this.devEl = document.createElement("div");
      this.devEl.addClass("mz-dev-panel");
      this.svgCt.appendChild(this.devEl);
    }
    if (this.devEl) {
      const nd = this.selId ? this.fAll(this.selId) : null;
      this.devEl.textContent = JSON.stringify(
        {
          sel: (_a = this.selId) == null ? void 0 : _a.substring(0, 8),
          editId: (_b = this.editId) == null ? void 0 : _b.substring(0, 8),
          zoom: +this.zoom.toFixed(3),
          pan: [+this.panX.toFixed(0), +this.panY.toFixed(0)],
          roots: this.roots.length,
          node: nd ? {
            text: nd.text.substring(0, 20),
            x: +nd.x.toFixed(0),
            y: +nd.y.toFixed(0),
            children: nd.children.length
          } : null
        },
        null,
        1
      );
    }
  }
  buildTb(tb) {
    tb.empty();
    const s = this.style;
    const btnBg = s.toolbarBtnBgColor;
    const btnBdr = s.toolbarBtnBorderColor;
    const btnBdrS = s.toolbarBtnBorderStyle;
    const btnTx = s.toolbarBtnTextColor;
    const btn = (txt, tip, fn) => {
      const b = tb.createEl("button", { title: tip });
      b.addClass("mz-tb-btn");
      b.style.setProperty("--mz-btn-border", `1px ${btnBdrS} ${btnBdr}`);
      b.style.setProperty("--mz-btn-bg", btnBg);
      b.style.setProperty("--mz-btn-color", btnTx);
      b.innerText = txt;
      b.addEventListener("click", fn);
      b.addEventListener(
        "mouseenter",
        () => b.addClass("mz-tb-btn-hover")
      );
      b.addEventListener(
        "mouseleave",
        () => b.removeClass("mz-tb-btn-hover")
      );
      return b;
    };
    btn(t("tb.root"), t("tb.newRoot"), () => this.addRoot());
    btn(t("tb.undo"), t("tb.tipUndo"), () => this.undo());
    btn(t("tb.redo"), t("tb.tipRedo"), () => this.redo());
    const sep = () => {
      const d = tb.createEl("div");
      d.addClass("mz-tb-sep");
      d.style.setProperty("--mz-sep-color", btnBdr);
    };
    sep();
    this.mdBtn = btn(t("tb.md"), t("tb.tipMd"), () => this.toggleMd());
    btn(t("tb.style"), t("tb.tipStyle"), () => this.showStyleModal());
    btn("\u{1F453} " + t("tb.focus"), t("tb.tipFocus"), () => this.focusSel());
    btn(
      "\u{1F50D} " + t("tb.search"),
      t("tb.tipSearch"),
      () => this.toggleSearch()
    );
    btn(
      t("tb.settings"),
      t("tb.tipSettings"),
      () => this.plugin.openPluginSettings()
    );
    sep();
    btn("\u2212", t("tb.zoomOut"), () => this.zoomBy(0.9));
    this.zoomLabel = tb.createEl("span");
    this.zoomLabel.addClass("mz-tb-zoom");
    this.zoomLabel.innerText = Math.round(this.zoom * 100) + "%";
    this.zoomLabel.addEventListener("click", () => this.zoomTo(1));
    btn("+", t("tb.zoomIn"), () => this.zoomBy(1.1));
    const h = tb.createEl("span");
    h.addClass("mz-tb-help");
    h.innerText = t("tb.help");
  }
  focusSel() {
    let nd = null;
    if (this.selId)
      nd = this.fAll(this.selId);
    if (!nd && this.roots.length)
      nd = this.roots[this.roots.length - 1];
    if (nd) {
      this.focusNode(nd);
      this.render();
    }
  }
  toggleMd() {
    if (this.mdMode) {
      this.mdMode = false;
      if (this.mdBtn)
        this.mdBtn.innerText = t("tb.md");
      const newMd = this.mdCt.value;
      const oldMd = this.mdSnapshot ? this.roots2mdFromSnap() : null;
      if (oldMd && newMd === oldMd) {
      } else {
        this.parseMd(newMd);
      }
      this.mdSnapshot = null;
      this.mdCt.toggleClass("mz-hidden", true);
      this.svgCt.toggleClass("mz-hidden", false);
      for (const r of this.roots)
        this.doLayout(r);
      this.render();
      this.doSave();
    } else {
      if (this.commitEdit)
        this.commitEdit();
      this.mdMode = true;
      if (this.mdBtn)
        this.mdBtn.innerText = t("tb.map");
      this.mdSnapshot = JSON.stringify(this.roots);
      this.svgCt.toggleClass("mz-hidden", true);
      this.mdCt.toggleClass("mz-hidden", false);
      this.mdCt.value = this.roots2md();
    }
  }
  roots2mdFromSnap() {
    if (!this.mdSnapshot)
      return null;
    try {
      const rs = JSON.parse(this.mdSnapshot);
      let m = "";
      const n2md = (nd, d, marker) => {
        const tx = nd.text.replace(/\n/g, " ");
        const l = "	".repeat(d - 1) + marker + " " + tx;
        let r = l + "\n";
        for (const c of nd.children)
          r += n2md(c, d + 1, marker);
        return r;
      };
      for (let i = 0; i < rs.length; i++) {
        const r = rs[i];
        const rightCh = r.children.filter((c) => c.side !== "left");
        const leftCh = r.children.filter((c) => c.side === "left");
        m += r.text.replace(/\n/g, " ") + "\n";
        for (const c of rightCh)
          m += n2md(c, 1, "-");
        for (const c of leftCh)
          m += n2md(c, 1, "*");
        if (i < rs.length - 1)
          m += "\n";
      }
      return m;
    } catch (e) {
      return null;
    }
  }
  roots2md() {
    let m = "";
    for (let i = 0; i < this.roots.length; i++) {
      const r = this.roots[i];
      const rightCh = r.children.filter((c) => c.side !== "left");
      const leftCh = r.children.filter((c) => c.side === "left");
      m += r.text.replace(/\n/g, " ") + "\n";
      for (const c of rightCh)
        m += this.n2md(c, 1, "-");
      for (const c of leftCh)
        m += this.n2md(c, 1, "*");
      if (i < this.roots.length - 1)
        m += "\n";
    }
    return m;
  }
  n2md(nd, d, marker) {
    const tx = nd.text.replace(/\n/g, " ");
    const l = "	".repeat(d - 1) + marker + " " + tx;
    let r = l + "\n";
    for (const c of nd.children)
      r += this.n2md(c, d + 1, marker);
    return r;
  }
  renderMd() {
    this.mdCt.value = this.roots2md();
  }
  parseMd(text) {
    const lines = text.split("\n").filter((l) => l.trim());
    if (!lines.length)
      return;
    const nr = [];
    let cur = null;
    const stk = [];
    for (const line of lines) {
      const m = line.match(/^(\t*)([-*])\s+(.*)/);
      if (m) {
        const dep = m[1].length + 1, marker = m[2], txt = m[3].trim();
        const side = marker === "*" ? "left" : "right";
        const nd = {
          id: crypto.randomUUID(),
          text: txt,
          x: 0,
          y: 0,
          width: this.calcW(txt, false),
          height: this.calcH(txt, false),
          children: [],
          side
        };
        while (stk.length && stk[stk.length - 1][0] >= dep)
          stk.pop();
        if (stk.length)
          stk[stk.length - 1][1].children.push(nd);
        else if (cur)
          cur.children.push(nd);
        stk.push([dep, nd]);
      } else {
        const txt = line.trim();
        if (!txt)
          continue;
        cur = this.mkRoot(txt);
        if (nr.length) {
          cur.x = nr[nr.length - 1].x;
          cur.y = nr[nr.length - 1].y + 200;
        }
        nr.push(cur);
        stk.length = 0;
        stk.push([0, cur]);
      }
    }
    if (nr.length)
      this.roots = nr;
  }
  addRoot(text, x, y) {
    this.saveS();
    const n = this.mkRoot(text != null ? text : this.plugin.getRootName());
    const last = this.roots[this.roots.length - 1];
    let maxY = 0;
    if (last) {
      this.doLayout(last);
      const findMaxY = (nd) => {
        const bot = nd.y + nd.height / 2;
        if (bot > maxY)
          maxY = bot;
        for (const c of nd.children)
          findMaxY(c);
      };
      findMaxY(last);
    }
    n.x = x != null ? x : last ? last.x : 0;
    n.y = y != null ? y : last ? maxY + 80 : 0;
    this.roots.push(n);
    this.sel1(n.id);
    if (this.plugin.settings.editOnCreate)
      this.editId = n.id;
    this.render();
    this.focusNode(n);
    this.render();
    this.doSave();
  }
  saveS() {
    this.undoS.push(JSON.stringify(this.roots));
    if (this.undoS.length > 50)
      this.undoS.shift();
    this.redoS = [];
  }
  undo() {
    if (!this.undoS.length)
      return;
    this.redoS.push(JSON.stringify(this.roots));
    this.roots = JSON.parse(this.undoS.pop());
    if (this.selId && !this.fAll(this.selId))
      this.selId = null;
    this.multiSel.clear();
    this.recalcAllSizes();
    this.render();
    this.doSave();
  }
  redo() {
    if (!this.redoS.length)
      return;
    this.undoS.push(JSON.stringify(this.roots));
    this.roots = JSON.parse(this.redoS.pop());
    this.recalcAllSizes();
    this.render();
    this.doSave();
  }
  /** Re-measure every node's width/height based on current style so that
   *  text never gets clipped or force-wrapped after undo/redo. */
  recalcAllSizes() {
    const walk = (n) => {
      const isR = !!n.isRoot;
      n.width = this.calcW(n.text, isR);
      n.height = this.calcH(n.text, isR);
      for (const c of n.children)
        walk(c);
    };
    for (const r of this.roots)
      walk(r);
  }
  fAll(id) {
    for (const r of this.roots) {
      const f = this.fN(id, r);
      if (f)
        return f;
    }
    return null;
  }
  applyStyle(p) {
    this.style = { ...this.style, ...p };
    this.plugin.updateStyle(p);
    this.applyCanvasBg();
    if (p.toolbarPosition !== void 0 || p.toolbarPadTop !== void 0 || p.toolbarPadRight !== void 0 || p.toolbarPadBottom !== void 0 || p.toolbarPadLeft !== void 0 || p.toolbarBgColor !== void 0 || p.toolbarBorderColor !== void 0 || p.toolbarBorderWidth !== void 0)
      this.applyToolbarStyle();
    if (p.toolbarBtnBgColor !== void 0 || p.toolbarBtnBorderStyle !== void 0 || p.toolbarBtnBorderColor !== void 0 || p.toolbarBtnTextColor !== void 0) {
      this.tbEl.empty();
      this.buildTb(this.tbEl);
      this.applyToolbarStyle();
    }
    if (p.nodeFontSize !== void 0 || p.rootFontSize !== void 0 || p.nodeFontFamily !== void 0 || p.rootFontFamily !== void 0 || p.nodeMinWidth !== void 0 || p.nodeMinHeight !== void 0 || p.rootMinWidth !== void 0 || p.rootMinHeight !== void 0 || p.nodePadX !== void 0 || p.nodeLineHeight !== void 0) {
      this.recalcAllNodeSizes();
    }
    this.render();
  }
  recalcAllNodeSizes() {
    const visit = (n) => {
      const isR = !!n.isRoot;
      n.width = this.calcW(n.text || " ", isR);
      n.height = this.calcH(n.text || " ", isR);
      for (const c of n.children)
        visit(c);
    };
    for (const r of this.roots)
      visit(r);
    this.doSave();
  }
  assignRainbowColor(parent, child) {
    if (!this.style.connectionRainbow || !parent.isRoot)
      return;
    if (!child.connectionColor) {
      const rb = this.getRainbow();
      const idx = parent.children.indexOf(child);
      child.connectionColor = rb[(idx >= 0 ? idx : parent.children.length) % rb.length];
    }
  }
  matchKey(e, combo) {
    const parts = combo.toLowerCase().split("+");
    const needCtrl = parts.includes("ctrl");
    const needShift = parts.includes("shift");
    const needAlt = parts.includes("alt");
    const mainKey = parts.filter(
      (p) => p !== "ctrl" && p !== "shift" && p !== "alt"
    )[0] || "";
    if (needCtrl !== (e.ctrlKey || e.metaKey))
      return false;
    if (needShift !== e.shiftKey)
      return false;
    if (needAlt !== e.altKey)
      return false;
    const eKey = e.key === " " ? "space" : e.key.toLowerCase();
    const eCode = e.code.toLowerCase();
    const codeMap = {
      equal: "=",
      minus: "-",
      digit0: "0",
      digit1: "1",
      digit2: "2",
      digit3: "3",
      digit4: "4",
      digit5: "5",
      digit6: "6",
      digit7: "7",
      digit8: "8",
      digit9: "9",
      bracketleft: "[",
      bracketright: "]",
      semicolon: ";",
      quote: "'",
      backquote: "`",
      comma: ",",
      period: ".",
      slash: "/"
    };
    const baseKey = codeMap[eCode] || "";
    return eKey === mainKey || eCode === mainKey || baseKey === mainKey;
  }
  // ═══ Modals - all close on Esc ═══
  showStyleModal() {
    this.closePop();
    const ov = document.createElement("div");
    ov.addClass("mz-modal-overlay");
    const m = document.createElement("div");
    m.addClass("mz-modal");
    m.createEl("h3", { text: t("sm.title") }).addClass("mz-modal-title");
    const close = () => {
      ov.remove();
      m.remove();
      this.popClose = null;
    };
    this.popClose = close;
    ov.addEventListener("click", close);
    m.addEventListener(
      "keydown",
      (e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (e.key === "Escape") {
          e.preventDefault();
          close();
        }
      },
      true
    );
    const sec = (icon, title) => {
      const s = m.createEl("div");
      s.addClass("mz-modal-sec");
      s.createEl("div", { text: icon + " " + title }).addClass(
        "mz-modal-sec-hdr"
      );
      return s;
    };
    const R = (p, l, k, tp, o) => {
      var _a, _b, _c;
      const row = p.createEl("div");
      row.addClass("mz-modal-row");
      row.createEl("label", { text: l }).addClass("mz-modal-lbl");
      const cv = this.style[k];
      if (tp === "color") {
        const i = row.createEl("input");
        i.type = "color";
        i.value = typeof cv === "string" && cv.startsWith("var") ? "#ffffff" : String(cv);
        i.addClass("mz-modal-color");
        i.addEventListener(
          "change",
          () => this.applyStyle({ [k]: i.value })
        );
      } else if (tp === "number") {
        const i = row.createEl("input");
        i.type = "number";
        i.min = String((_a = o == null ? void 0 : o.min) != null ? _a : 0);
        i.max = String((_b = o == null ? void 0 : o.max) != null ? _b : 999);
        if (o == null ? void 0 : o.step)
          i.step = String(o.step);
        i.value = String(cv);
        i.addClass("mz-modal-num");
        i.addEventListener(
          "change",
          () => this.applyStyle({
            [k]: Number(i.value)
          })
        );
      } else if (tp === "select") {
        const s = row.createEl("select");
        s.addClass("mz-modal-sel");
        for (const v of (_c = o == null ? void 0 : o.options) != null ? _c : []) {
          const op = document.createElement("option");
          op.value = v;
          op.text = v;
          if (v === String(cv))
            op.selected = true;
          s.appendChild(op);
        }
        s.addEventListener(
          "change",
          () => this.applyStyle({ [k]: s.value })
        );
      } else if (tp === "toggle") {
        const cb2 = row.createEl("input");
        cb2.type = "checkbox";
        cb2.checked = !!cv;
        cb2.addClass("mz-modal-chk");
        cb2.addEventListener(
          "change",
          () => this.applyStyle({
            [k]: cb2.checked
          })
        );
      }
    };
    const s1 = sec("\u{1F4E6}", t("sm.child"));
    R(s1, t("sm.bg"), "nodeBgColor", "color");
    R(s1, t("sm.text"), "nodeTextColor", "color");
    R(s1, t("sm.fontSize"), "nodeFontSize", "number", { min: 10, max: 32 });
    R(s1, t("sm.font"), "nodeFontFamily", "select", { options: FONT_LIST });
    R(s1, t("sm.borderStyle"), "nodeBorderStyle", "select", {
      options: ["solid", "dashed", "dotted", "double", "none"]
    });
    R(s1, t("sm.borderColor"), "nodeBorderColor", "color");
    R(s1, t("sm.borderWidth"), "nodeBorderWidth", "number", {
      min: 0,
      max: 8
    });
    R(s1, t("sm.borderRadius"), "nodeBorderRadius", "number", {
      min: 0,
      max: 32
    });
    R(s1, t("sm.minWidth"), "nodeMinWidth", "number", {
      min: 30,
      max: 400
    });
    R(s1, t("sm.minHeight"), "nodeMinHeight", "number", {
      min: 20,
      max: 200
    });
    const s2 = sec("\u{1F3E0}", t("sm.root"));
    R(s2, t("sm.bg"), "rootBgColor", "color");
    R(s2, t("sm.text"), "rootTextColor", "color");
    R(s2, t("sm.fontSize"), "rootFontSize", "number", { min: 10, max: 32 });
    R(s2, t("sm.font"), "rootFontFamily", "select", { options: FONT_LIST });
    R(s2, t("sm.borderStyle"), "rootBorderStyle", "select", {
      options: ["solid", "dashed", "dotted", "double", "none"]
    });
    R(s2, t("sm.borderColor"), "rootBorderColor", "color");
    R(s2, t("sm.borderWidth"), "rootBorderWidth", "number", {
      min: 0,
      max: 8
    });
    R(s2, t("sm.borderRadius"), "rootBorderRadius", "number", {
      min: 0,
      max: 32
    });
    R(s2, t("sm.minWidth"), "rootMinWidth", "number", {
      min: 50,
      max: 400
    });
    R(s2, t("sm.minHeight"), "rootMinHeight", "number", {
      min: 20,
      max: 200
    });
    const s3 = sec("\u{1F517}", t("sm.conn"));
    R(s3, t("sm.type"), "connectionStyle", "select", {
      options: CONNECTION_STYLES
    });
    R(s3, t("sm.color"), "connectionColor", "color");
    R(s3, t("sm.width"), "connectionWidth", "number", { min: 1, max: 8 });
    R(s3, t("sm.connLength"), "connectionLength", "number", {
      min: 30,
      max: 300
    });
    R(s3, t("sm.nodeDir"), "nodeDirection", "select", {
      options: ["right", "left", "both"]
    });
    const ctRow = s3.createEl("div");
    ctRow.addClass("mz-rainbow-ct");
    ctRow.createEl("label", {
      text: "\u{1F308} " + t("sm.rainbow")
    }).addClass("mz-rainbow-lbl");
    const allPals = {
      ...RAINBOW_PALETTES,
      ...this.style.customRainbows || {}
    };
    let curPal = this.style.connectionRainbow ? this.style.rainbowPalette : "off";
    const listWrap = ctRow.createEl("div");
    listWrap.addClass("mz-rainbow-list");
    const rebuildList = () => {
      listWrap.innerHTML = "";
      const updated = {
        ...RAINBOW_PALETTES,
        ...this.style.customRainbows || {}
      };
      const mkItem = (key, label, colors) => {
        const it = listWrap.createEl("div");
        it.addClass("mz-rainbow-item");
        it.toggleClass("is-active", key === curPal);
        it.addEventListener("mouseenter", () => {
          if (key !== curPal)
            it.addClass("mz-rainbow-hover");
        });
        it.addEventListener("mouseleave", () => {
          it.toggleClass("mz-rainbow-hover", false);
        });
        const nm = it.createEl("span", { text: label });
        nm.addClass("mz-rainbow-item-lbl");
        if (colors) {
          const dots = it.createEl("span");
          dots.addClass("mz-rainbow-dots");
          for (const c of colors.slice(0, 10)) {
            const d = dots.createEl("span");
            d.addClass("mz-rainbow-dot");
            Object.entries({ "--mz-dot-color": c }).forEach(
              ([k, v]) => d.style.setProperty(k, v)
            );
          }
        }
        it.addEventListener("click", (ev) => {
          if (ev.target.classList.contains("pal-del"))
            return;
          if (key === "off") {
            this.applyStyle({ connectionRainbow: false });
            curPal = "off";
          } else {
            this.applyStyle({
              connectionRainbow: true,
              rainbowPalette: key
            });
            curPal = key;
          }
          rebuildList();
        });
        if (key !== "off" && !RAINBOW_PALETTES[key]) {
          const del = it.createEl("span", { text: "\u2715" });
          del.className = "pal-del";
          del.addClass("mz-reset-btn");
          del.addEventListener("click", (ev) => {
            ev.stopPropagation();
            const cr = { ...this.style.customRainbows || {} };
            delete cr[key];
            this.applyStyle({ customRainbows: cr });
            if (curPal === key) {
              curPal = "off";
              this.applyStyle({ connectionRainbow: false });
            }
            rebuildList();
          });
        }
      };
      mkItem("off", "Solid", null);
      for (const [name, colors] of Object.entries(updated))
        mkItem(name, name, colors);
    };
    rebuildList();
    const addRow = ctRow.createEl("div");
    addRow.addClass("mz-rainbow-ct");
    const addBtn = addRow.createEl("button", {
      text: t("sm.customRainbow")
    });
    addBtn.addClass("mz-modal-btn", "mz-modal-btn-secondary");
    addBtn.addEventListener("click", () => {
      addBtn.toggleClass("mz-hidden", true);
      const ed = addRow.createEl("div");
      ed.addClass("mz-rainbow-ct");
      const nameInp = ed.createEl("input");
      nameInp.type = "text";
      nameInp.placeholder = "Palette name";
      nameInp.value = "Custom";
      nameInp.addClass("mz-rainbow-cr-name");
      const colors = [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#ff00ff",
        "#00ffff"
      ];
      const cDiv = ed.createEl("div");
      cDiv.addClass("mz-rainbow-cr-row");
      const rebuild = () => {
        cDiv.innerHTML = "";
        for (let i = 0; i < colors.length; i++) {
          const ci = cDiv.createEl("input");
          ci.type = "color";
          ci.value = colors[i];
          ci.addClass("mz-rainbow-cr-input");
          ci.addEventListener("change", () => {
            colors[i] = ci.value;
          });
        }
        const ab = cDiv.createEl("button", { text: "+" });
        ab.addClass("mz-rainbow-cr-input");
        ab.addEventListener("click", () => {
          colors.push("#888888");
          rebuild();
        });
      };
      rebuild();
      const saveBtn = ed.createEl("button", { text: "\u2713 Save" });
      saveBtn.addClass("mz-rainbow-cr-btn", "mz-rainbow-cr-save");
      saveBtn.addEventListener("click", () => {
        let nm = nameInp.value.trim() || "Custom";
        const existing = this.style.customRainbows || {};
        if (existing[nm] || RAINBOW_PALETTES[nm]) {
          let i = 2;
          while (existing[nm + " " + i] || RAINBOW_PALETTES[nm + " " + i])
            i++;
          nm = nm + " " + i;
        }
        const newCR = { ...existing, [nm]: [...colors] };
        this.applyStyle({
          customRainbows: newCR,
          connectionRainbow: true,
          rainbowPalette: nm
        });
        curPal = nm;
        ed.remove();
        addBtn.toggleClass("mz-hidden", false);
        rebuildList();
      });
    });
    const s3b = sec("\u{1F4DD}", t("sm.textAlign"));
    R(s3b, t("sm.textAlign"), "textAlign", "select", {
      options: ["left", "center", "right"]
    });
    const s4 = sec("\u2705", t("sm.sel"));
    R(s4, t("sm.selColor"), "selectionColor", "color");
    R(s4, t("sm.selWidth"), "selectionWidth", "number", { min: 1, max: 8 });
    R(s4, t("sm.selOffset"), "selectionOutlineOffset", "number", {
      min: -5,
      max: 20
    });
    R(s4, t("sm.editOutline"), "editOutlineColor", "color");
    R(s4, t("sm.editOutlineWidth"), "editOutlineWidth", "number", {
      min: 0,
      max: 8
    });
    const s5 = sec("\u{1F5BC}\uFE0F", t("sm.canvasBg"));
    R(s5, t("sm.canvasBg"), "canvasBg", "color");
    const s6 = sec("\u{1F527}", t("sm.showToolbar"));
    const tbRow = s6.createEl("div");
    tbRow.addClass("mz-modal-row");
    tbRow.createEl("label", { text: t("sm.showToolbar") }).addClass("mz-modal-lbl");
    const tbCb = tbRow.createEl("input");
    tbCb.type = "checkbox";
    tbCb.checked = this.plugin.settings.showToolbar;
    tbCb.addClass("mz-modal-chk");
    tbCb.addEventListener("change", () => {
      this.plugin.settings.showToolbar = tbCb.checked;
      void this.plugin.saveSettings();
      this.updateToolbarVisibility();
    });
    R(s6, t("sm.tbPos"), "toolbarPosition", "select", {
      options: ["top", "bottom"]
    });
    R(s6, t("sm.tbPadT"), "toolbarPadTop", "number", { min: 0, max: 40 });
    R(s6, t("sm.tbPadR"), "toolbarPadRight", "number", { min: 0, max: 40 });
    R(s6, t("sm.tbPadB"), "toolbarPadBottom", "number", {
      min: 0,
      max: 40
    });
    R(s6, t("sm.tbPadL"), "toolbarPadLeft", "number", { min: 0, max: 40 });
    R(s6, t("sm.tbBg"), "toolbarBgColor", "color");
    R(s6, t("sm.tbBtnBg"), "toolbarBtnBgColor", "color");
    R(s6, t("sm.tbBtnBorder"), "toolbarBtnBorderStyle", "select", {
      options: ["solid", "dashed", "dotted", "none"]
    });
    R(s6, t("sm.tbBtnBorderColor"), "toolbarBtnBorderColor", "color");
    R(s6, t("sm.tbBtnText"), "toolbarBtnTextColor", "color");
    R(s6, "Separator color", "toolbarBorderColor", "color");
    R(s6, "Separator width", "toolbarBorderWidth", "number", {
      min: 0,
      max: 5
    });
    const tbResetBtn = s6.createEl("button", {
      text: "\u21BA " + t("sm.tbResetDefault")
    });
    tbResetBtn.addClass("mz-ns-btn");
    tbResetBtn.addEventListener("click", () => {
      const isDark = this.plugin.settings.theme === "dark";
      const def = isDark ? DEFAULT_TOOLBAR_DARK : DEFAULT_TOOLBAR_LIGHT;
      this.applyStyle({
        toolbarBgColor: def.toolbarBgColor,
        toolbarBtnBgColor: def.toolbarBtnBgColor,
        toolbarBtnBorderStyle: def.toolbarBtnBorderStyle,
        toolbarBtnBorderColor: def.toolbarBtnBorderColor,
        toolbarBtnTextColor: def.toolbarBtnTextColor,
        toolbarBorderColor: def.toolbarBorderColor,
        toolbarBorderWidth: def.toolbarBorderWidth,
        toolbarPadTop: 0,
        toolbarPadRight: 12,
        toolbarPadBottom: 0,
        toolbarPadLeft: 12,
        toolbarPosition: "top"
      });
      close();
      this.showStyleModal();
    });
    const br = m.createEl("div");
    br.addClass("mz-modal-btns");
    br.createEl("button", { text: t("sm.reset") }).addEventListener(
      "click",
      () => {
        this.applyStyle({ ...DEFAULT_STYLE });
        close();
        this.showStyleModal();
      }
    );
    const cb = br.createEl("button", { text: t("sm.close") });
    cb.addClass("mz-modal-btn", "mz-modal-btn-primary");
    cb.addEventListener("click", close);
    document.body.appendChild(ov);
    document.body.appendChild(m);
  }
  showNodeStyleEditor(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    this.closePop();
    const ids = this.allSel();
    const first = this.fAll([...ids][0]);
    const so = (_a = first == null ? void 0 : first.styleOverride) != null ? _a : {};
    const isR = !!(first == null ? void 0 : first.isRoot);
    const ov = document.createElement("div");
    ov.addClass("mz-modal-overlay");
    const m = document.createElement("div");
    m.addClass("mz-modal");
    m.createEl("h4", {
      text: t("ns.title") + " (" + ids.size + ")"
    }).addClass("mz-ns-title");
    const close = () => {
      ov.remove();
      m.remove();
      this.popClose = null;
    };
    this.popClose = close;
    ov.addEventListener("click", close);
    m.addEventListener(
      "keydown",
      (ev) => {
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        if (ev.key === "Escape") {
          ev.preventDefault();
          close();
        }
      },
      true
    );
    const apply = (fn) => {
      this.saveS();
      for (const id of ids) {
        const n = this.fAll(id);
        if (n)
          fn(n);
      }
      this.render();
      this.doSave();
    };
    const mkC = (l, cur, fn) => {
      const r = m.createEl("div");
      r.addClass("mz-modal-row");
      r.createEl("span", { text: l }).addClass("mz-modal-lbl");
      const i = r.createEl("input");
      i.type = "color";
      i.value = cur;
      i.addClass("mz-sp-color");
      i.addEventListener("change", () => fn(i.value));
    };
    const mkN = (l, cur, min, max, fn) => {
      const r = m.createEl("div");
      r.addClass("mz-modal-row");
      r.createEl("span", { text: l }).addClass("mz-modal-lbl");
      const i = r.createEl("input");
      i.type = "number";
      i.min = String(min);
      i.max = String(max);
      i.value = String(cur);
      i.addClass("mz-sp-num");
      i.addEventListener("change", () => fn(Number(i.value)));
    };
    const mkS = (l, cur, opts, fn) => {
      const r = m.createEl("div");
      r.addClass("mz-modal-row");
      r.createEl("span", { text: l }).addClass("mz-modal-lbl");
      const s = r.createEl("select");
      s.addClass("mz-sp-sel");
      for (const o of opts) {
        const op = document.createElement("option");
        op.value = o;
        op.text = o;
        if (o === cur)
          op.selected = true;
        s.appendChild(op);
      }
      s.addEventListener("change", () => fn(s.value));
    };
    mkC(
      t("sm.bg"),
      (_b = so.bgColor) != null ? _b : isR ? this.style.rootBgColor : this.style.nodeBgColor,
      (v) => apply((n) => {
        var _a2;
        n.styleOverride = (_a2 = n.styleOverride) != null ? _a2 : {};
        n.styleOverride.bgColor = v;
      })
    );
    mkC(
      t("sm.text"),
      (_c = so.textColor) != null ? _c : isR ? this.style.rootTextColor : this.style.nodeTextColor,
      (v) => apply((n) => {
        var _a2;
        n.styleOverride = (_a2 = n.styleOverride) != null ? _a2 : {};
        n.styleOverride.textColor = v;
      })
    );
    mkN(
      t("sm.fontSize"),
      (_d = so.fontSize) != null ? _d : isR ? this.style.rootFontSize : this.style.nodeFontSize,
      10,
      32,
      (v) => apply((n) => {
        var _a2;
        n.styleOverride = (_a2 = n.styleOverride) != null ? _a2 : {};
        n.styleOverride.fontSize = v;
        n.width = this.calcW(n.text, !!n.isRoot);
        n.height = this.calcH(n.text, !!n.isRoot);
      })
    );
    mkS(
      t("sm.font"),
      (_e = so.fontFamily) != null ? _e : isR ? this.style.rootFontFamily : this.style.nodeFontFamily,
      FONT_LIST,
      (v) => apply((n) => {
        var _a2;
        n.styleOverride = (_a2 = n.styleOverride) != null ? _a2 : {};
        n.styleOverride.fontFamily = v === "inherit" ? void 0 : v;
      })
    );
    mkS(
      t("sm.borderStyle"),
      (_f = so.borderStyle) != null ? _f : isR ? this.style.rootBorderStyle : this.style.nodeBorderStyle,
      ["solid", "dashed", "dotted", "double", "none"],
      (v) => apply((n) => {
        var _a2;
        n.styleOverride = (_a2 = n.styleOverride) != null ? _a2 : {};
        n.styleOverride.borderStyle = v;
      })
    );
    mkC(
      t("sm.borderColor"),
      (_g = so.borderColor) != null ? _g : isR ? this.style.rootBorderColor : this.style.nodeBorderColor,
      (v) => apply((n) => {
        var _a2;
        n.styleOverride = (_a2 = n.styleOverride) != null ? _a2 : {};
        n.styleOverride.borderColor = v;
      })
    );
    mkN(
      t("sm.borderWidth"),
      (_h = so.borderWidth) != null ? _h : isR ? this.style.rootBorderWidth : this.style.nodeBorderWidth,
      0,
      8,
      (v) => apply((n) => {
        var _a2;
        n.styleOverride = (_a2 = n.styleOverride) != null ? _a2 : {};
        n.styleOverride.borderWidth = v;
      })
    );
    mkN(
      t("ns.borderRadius"),
      (_i = so.borderRadius) != null ? _i : isR ? this.style.rootBorderRadius : this.style.nodeBorderRadius,
      0,
      32,
      (v) => apply((n) => {
        var _a2;
        n.styleOverride = (_a2 = n.styleOverride) != null ? _a2 : {};
        n.styleOverride.borderRadius = v;
      })
    );
    mkC(
      t("ns.connColor"),
      (_j = first == null ? void 0 : first.connectionColor) != null ? _j : this.style.connectionColor,
      (v) => apply((n) => {
        n.connectionColor = v;
      })
    );
    mkN(
      t("ns.connWidth"),
      (_k = first == null ? void 0 : first.connectionWidth) != null ? _k : this.style.connectionWidth,
      1,
      8,
      (v) => apply((n) => {
        n.connectionWidth = v;
      })
    );
    if (isR) {
      const ctDiv = m.createEl("div");
      ctDiv.addClass("mz-rainbow-ct");
      ctDiv.createEl("span", {
        text: "\u{1F308} " + t("sm.rainbow")
      }).addClass("mz-rainbow-lbl");
      const nPals = {
        ...RAINBOW_PALETTES,
        ...this.style.customRainbows || {}
      };
      let activePal = "off";
      if (first && first.children.length > 0) {
        const fc = first.children[0].connectionColor;
        if (fc) {
          for (const [name, colors] of Object.entries(nPals)) {
            if (colors[0] === fc) {
              activePal = name;
              break;
            }
          }
        }
      }
      const nList = ctDiv.createEl("div");
      nList.addClass("mz-rainbow-list");
      const rebuildNL = () => {
        nList.innerHTML = "";
        const mkNI = (key, label, colors) => {
          const it = nList.createEl("div");
          it.addClass("mz-rainbow-item");
          it.toggleClass("is-active", key === activePal);
          it.addEventListener("mouseenter", () => {
            if (key !== activePal)
              it.addClass("mz-rainbow-hover");
          });
          it.addEventListener("mouseleave", () => {
            it.toggleClass("mz-rainbow-hover", false);
          });
          it.createEl("span", { text: label }).addClass(
            "mz-rainbow-item-lbl"
          );
          if (colors) {
            const dots = it.createEl("span");
            dots.addClass("mz-rainbow-dots");
            for (const c of colors.slice(0, 8)) {
              const d = dots.createEl("span");
              d.addClass("mz-rainbow-dot");
              Object.entries({ "--mz-dot-color": c }).forEach(
                ([k, v]) => d.style.setProperty(k, v)
              );
            }
          }
          it.addEventListener("click", () => {
            if (!colors)
              return;
            apply((n) => {
              if (!n.isRoot)
                return;
              for (let i = 0; i < n.children.length; i++) {
                n.children[i].connectionColor = colors[i % colors.length];
              }
            });
            activePal = key;
            rebuildNL();
          });
        };
        mkNI("off", "Solid", null);
        for (const [name, colors] of Object.entries(nPals))
          mkNI(name, name, colors);
      };
      rebuildNL();
    }
    const clr = m.createEl("button", { text: t("ns.clear") });
    clr.addClass("mz-ns-btn");
    clr.addEventListener(
      "click",
      () => apply((n) => {
        n.styleOverride = void 0;
        n.connectionColor = void 0;
        n.connectionWidth = void 0;
      })
    );
    const cbtn = m.createEl("button", { text: t("sm.close") });
    cbtn.addClass("mz-modal-btn", "mz-modal-btn-primary");
    cbtn.addEventListener("click", close);
    document.body.appendChild(ov);
    document.body.appendChild(m);
  }
  toggleSearch() {
    var _a;
    if (this.searchBar) {
      this.searchBar.remove();
      this.searchBar = null;
      (_a = this.cc) == null ? void 0 : _a.focus({ preventScroll: true });
      this.ensureProxy();
      return;
    }
    this.searchBar = document.createElement("div");
    this.searchBar.addClass("mz-search-bar");
    const inp = document.createElement("input");
    inp.type = "text";
    inp.placeholder = t("search.placeholder");
    inp.addClass("mz-search-input");
    const info = document.createElement("span");
    info.addClass("mz-search-count");
    const closeBtn = document.createElement("button");
    closeBtn.innerText = "\u2715";
    closeBtn.addClass("mz-search-btn");
    closeBtn.addEventListener("click", () => {
      var _a2, _b;
      (_a2 = this.searchBar) == null ? void 0 : _a2.remove();
      this.searchBar = null;
      (_b = this.cc) == null ? void 0 : _b.focus({ preventScroll: true });
      this.ensureProxy();
    });
    this.searchBar.appendChild(inp);
    this.searchBar.appendChild(info);
    this.searchBar.appendChild(closeBtn);
    this.svgCt.appendChild(this.searchBar);
    const doSearch = () => {
      const q = inp.value.trim().toLowerCase();
      this.searchResults = [];
      this.searchIdx = 0;
      if (!q) {
        info.textContent = "";
        return;
      }
      const vis = (n) => {
        if (n.text.toLowerCase().includes(q))
          this.searchResults.push(n);
        for (const c of n.children)
          vis(c);
      };
      for (const r of this.roots)
        vis(r);
      if (this.searchResults.length) {
        info.textContent = "1/" + this.searchResults.length;
        this.sel1(this.searchResults[0].id);
        this.focusNode(this.searchResults[0]);
        this.render();
      } else
        info.textContent = "0";
    };
    inp.addEventListener("input", doSearch);
    inp.addEventListener(
      "keydown",
      (e) => {
        var _a2, _b;
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (e.key === "Enter") {
          e.preventDefault();
          if (!this.searchResults.length)
            return;
          if (e.shiftKey)
            this.searchIdx = (this.searchIdx - 1 + this.searchResults.length) % this.searchResults.length;
          else
            this.searchIdx = (this.searchIdx + 1) % this.searchResults.length;
          info.textContent = this.searchIdx + 1 + "/" + this.searchResults.length;
          const nd = this.searchResults[this.searchIdx];
          this.sel1(nd.id);
          this.focusNode(nd);
          this.render();
          requestAnimationFrame(() => inp.focus());
          return;
        }
        if (e.key === "Escape") {
          (_a2 = this.searchBar) == null ? void 0 : _a2.remove();
          this.searchBar = null;
          (_b = this.cc) == null ? void 0 : _b.focus({ preventScroll: true });
          this.ensureProxy();
        }
      },
      true
    );
    setTimeout(() => inp.focus(), 0);
  }
  getCC(ch, pR, idx, inh) {
    if (ch.connectionColor)
      return ch.connectionColor;
    if (inh)
      return inh;
    const rb = this.getRainbow();
    if (this.style.connectionRainbow && pR)
      return rb[idx % rb.length];
    return this.style.connectionColor;
  }
  isAct() {
    return this.app.workspace.getActiveViewOfType(MindMapView) === this;
  }
  isExtInput(e) {
    var _a;
    const t2 = e.target;
    if (!t2)
      return false;
    const tag = t2.tagName.toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") {
      return !((_a = this.svgCt) == null ? void 0 : _a.contains(t2));
    }
    return false;
  }
  // IME-compatible typeToEdit via proxy textarea positioned below selected node
  ensureProxy() {
    this.clearProxy();
    if (!this.plugin.settings.typeToEdit || !this.selId || this.isMulti() || this.editId || !this.svgCt || this.searchBar)
      return;
    if (this.searchBar && this.searchBar.contains(document.activeElement))
      return;
    const nd = this.fAll(this.selId);
    if (!nd)
      return;
    const p = document.createElement("textarea");
    const screenX = nd.x * this.zoom + this.panX;
    const screenY = (nd.y + nd.height / 2) * this.zoom + this.panY + 4;
    p.addClass("mz-proxy-ta");
    Object.entries({
      "--mz-proxy-left": screenX + "px",
      "--mz-proxy-top": screenY + "px"
    }).forEach(([k, v]) => p.style.setProperty(k, v));
    this.svgCt.appendChild(p);
    this.proxyTA = p;
    let composing = false;
    p.addEventListener("compositionstart", () => {
      composing = true;
      p.addClass("mz-proxy-composing");
    });
    p.addEventListener("compositionend", () => {
      composing = false;
      const val = p.value;
      if (val && this.selId && !this.editId) {
        this.editId = this.selId;
        this.render();
        setTimeout(() => {
          if (this.liveTA) {
            this.liveTA.focus({ preventScroll: true });
            this.liveTA.select();
            this.liveTA.setRangeText(
              val,
              this.liveTA.selectionStart,
              this.liveTA.selectionEnd,
              "end"
            );
            this.liveTA.dispatchEvent(new Event("input"));
          }
        }, 0);
      }
    });
    p.addEventListener("input", () => {
      if (composing)
        return;
      const val = p.value;
      if (val && this.selId && !this.editId) {
        this.editId = this.selId;
        this.render();
        setTimeout(() => {
          if (this.liveTA) {
            this.liveTA.focus({ preventScroll: true });
            this.liveTA.select();
            this.liveTA.setRangeText(
              val,
              this.liveTA.selectionStart,
              this.liveTA.selectionEnd,
              "end"
            );
            this.liveTA.dispatchEvent(new Event("input"));
          }
        }, 0);
      }
    });
    setTimeout(() => p.focus({ preventScroll: true }), 0);
  }
  clearProxy() {
    if (this.proxyTA) {
      this.proxyTA.remove();
      this.proxyTA = null;
    }
  }
  copyNode(cut) {
    if (!this.selId)
      return;
    const nd = this.fAll(this.selId);
    if (!nd)
      return;
    this.clipboard = { data: JSON.stringify(nd), isRoot: !!nd.isRoot, cut };
    if (cut) {
      this.saveS();
      if (nd.isRoot)
        this.roots = this.roots.filter((r) => r.id !== nd.id);
      else
        this.remAll(nd.id);
      this.clrSel();
      this.render();
      this.doSave();
    }
  }
  pasteNode(strip) {
    var _a, _b;
    if (!this.clipboard)
      return;
    const clone = JSON.parse(this.clipboard.data);
    if (!this.clipboard.cut) {
      const reId = (n) => {
        n.id = crypto.randomUUID();
        for (const c of n.children)
          reId(c);
      };
      reId(clone);
    } else
      this.clipboard = null;
    if (strip) {
      const s = (n) => {
        n.styleOverride = void 0;
        n.connectionColor = void 0;
        n.connectionWidth = void 0;
        for (const c of n.children)
          s(c);
      };
      s(clone);
    }
    this.saveS();
    if (clone.isRoot) {
      const last = this.roots[this.roots.length - 1];
      clone.x = (_a = last == null ? void 0 : last.x) != null ? _a : 0;
      clone.y = ((_b = last == null ? void 0 : last.y) != null ? _b : 0) + 200;
      this.roots.push(clone);
    } else {
      clone.isRoot = false;
      if (this.selId) {
        const p = this.fAll(this.selId);
        if (p)
          p.children.push(clone);
      } else
        this.roots.push({ ...clone, isRoot: true });
    }
    this.sel1(clone.id);
    this.render();
    this.doSave();
  }
  cancelDrag() {
    var _a, _b;
    if (!this.ds)
      return;
    if (!this.ds.isRootDrag) {
      const d = this.ds;
      if (d.snap)
        this.roots = JSON.parse(d.snap);
      (_a = d.ghostEl) == null ? void 0 : _a.remove();
      (_b = d.indicatorEl) == null ? void 0 : _b.remove();
    }
    this.ds = null;
    if (this.cc)
      this.cc.toggleClass("mz-cursor-grab", false);
    this.render();
  }
  updTx() {
    this.gEl.style.transform = "translate(" + this.panX + "px," + this.panY + "px) scale(" + this.zoom + ")";
    if (this.zoomLabel)
      this.zoomLabel.innerText = Math.round(this.zoom * 100) + "%";
  }
  zoomBy(factor) {
    const rc = this.cc.getBoundingClientRect();
    if (rc.width < 1 || rc.height < 1)
      return;
    const cx = rc.width / 2, cy = rc.height / 2;
    const nz = Math.max(0.1, Math.min(this.zoom * factor, 3));
    this.panX = cx - (cx - this.panX) * (nz / this.zoom);
    this.panY = cy - (cy - this.panY) * (nz / this.zoom);
    this.zoom = nz;
    this.updTx();
  }
  zoomTo(level) {
    const rc = this.cc.getBoundingClientRect();
    if (rc.width < 1 || rc.height < 1)
      return;
    const cx = rc.width / 2, cy = rc.height / 2;
    this.panX = cx - (cx - this.panX) * (level / this.zoom);
    this.panY = cy - (cy - this.panY) * (level / this.zoom);
    this.zoom = level;
    this.updTx();
  }
  doLayout(n) {
    this.cSH(n);
    this.cXY(n);
  }
  cSH(n) {
    var _a, _b;
    const vm = (_a = this.style.nodeGapY) != null ? _a : 24;
    if (!((_b = n.children) == null ? void 0 : _b.length)) {
      n._sh = n.height + vm;
      return n._sh;
    }
    let total = 0;
    for (const c of n.children)
      total += this.cSH(c);
    n._sh = Math.max(n.height + vm, total);
    return n._sh;
  }
  cXY(n) {
    var _a;
    if (!((_a = n.children) == null ? void 0 : _a.length))
      return;
    const hm = this.style.connectionLength || 80;
    const rightCh = n.children.filter((c) => c.side !== "left");
    const leftCh = n.children.filter((c) => c.side === "left");
    if (rightCh.length) {
      let tot = 0;
      for (const c of rightCh)
        tot += c._sh;
      let cy = n.y - tot / 2;
      for (const c of rightCh) {
        c.x = n.x + n.width / 2 + hm + c.width / 2;
        c.y = cy + c._sh / 2;
        this.cXY(c);
        cy += c._sh;
      }
    }
    if (leftCh.length) {
      let tot = 0;
      for (const c of leftCh)
        tot += c._sh;
      let cy = n.y - tot / 2;
      for (const c of leftCh) {
        c.x = n.x - n.width / 2 - hm - c.width / 2;
        c.y = cy + c._sh / 2;
        this.cXY(c);
        cy += c._sh;
      }
    }
  }
  calcW(txt, isR) {
    const fs = isR ? this.style.rootFontSize : this.style.nodeFontSize;
    const ff = isR ? this.style.rootFontFamily : this.style.nodeFontFamily;
    let mw = 0;
    for (const l of txt.split("\n")) {
      const d = document.createElement("span");
      d.addClass("mz-measure-span");
      Object.entries({ "--mz-fs": fs + "px", "--mz-ff": ff }).forEach(
        ([k, v]) => d.style.setProperty(k, v)
      );
      d.innerText = l || " ";
      document.body.appendChild(d);
      if (d.offsetWidth > mw)
        mw = d.offsetWidth;
      document.body.removeChild(d);
    }
    return Math.max(
      isR ? this.style.rootMinWidth : this.style.nodeMinWidth,
      mw + this.style.nodePadX * 2 + 4
    );
  }
  calcH(txt, isR) {
    const fs = isR ? this.style.rootFontSize : this.style.nodeFontSize;
    const lh = this.style.nodeLineHeight || 1.5;
    return Math.max(
      isR ? this.style.rootMinHeight : this.style.nodeMinHeight,
      txt.split("\n").length * fs * lh + 14
    );
  }
  recPos() {
    this.oldPos.clear();
    const v = (n) => {
      this.oldPos.set(n.id, { x: n.x, y: n.y });
      for (const c of n.children)
        v(c);
    };
    for (const r of this.roots)
      v(r);
  }
  animRender() {
    var _a;
    if (!this.nodesG || !this.edgesG || !this.oldPos.size) {
      this.render();
      return;
    }
    const np = /* @__PURE__ */ new Map();
    for (const r of this.roots) {
      this.doLayout(r);
      const v = (n) => {
        np.set(n.id, { x: n.x, y: n.y });
        for (const c of n.children)
          v(c);
      };
      v(r);
    }
    const sp = /* @__PURE__ */ new Map();
    for (const [id, p] of np)
      sp.set(id, (_a = this.oldPos.get(id)) != null ? _a : p);
    const dur = 200, t0 = performance.now();
    if (this.animId)
      cancelAnimationFrame(this.animId);
    for (const [id, p] of np) {
      const n = this.fAll(id);
      if (n) {
        n.x = p.x;
        n.y = p.y;
      }
    }
    this.render();
    for (const [id, p] of sp) {
      const n = this.fAll(id);
      if (n) {
        n.x = p.x;
        n.y = p.y;
      }
    }
    this.updateFO();
    this.edgesG.innerHTML = "";
    for (const r of this.roots)
      this.drawEdges(r);
    const step = (now) => {
      const tt = Math.min((now - t0) / dur, 1), ease = 1 - Math.pow(1 - tt, 3);
      for (const [id, fp] of np) {
        const s = sp.get(id);
        const n = this.fAll(id);
        if (n) {
          n.x = s.x + (fp.x - s.x) * ease;
          n.y = s.y + (fp.y - s.y) * ease;
        }
      }
      this.edgesG.innerHTML = "";
      for (const r of this.roots)
        this.drawEdges(r);
      this.updateFO();
      if (tt < 1)
        this.animId = requestAnimationFrame(step);
      else {
        for (const [id, p] of np) {
          const n = this.fAll(id);
          if (n) {
            n.x = p.x;
            n.y = p.y;
          }
        }
        this.render();
        this.animId = null;
      }
    };
    this.animId = requestAnimationFrame(step);
  }
  softRender() {
    if (!this.edgesG || !this.nodesG)
      return;
    for (const r of this.roots)
      this.doLayout(r);
    this.updateFO();
    this.edgesG.innerHTML = "";
    for (const r of this.roots)
      this.drawEdges(r);
    this.updateDevPanel();
  }
  render() {
    if (!this.edgesG || !this.nodesG || !this.overlayG)
      return;
    this.edgesG.innerHTML = "";
    this.nodesG.innerHTML = "";
    this.overlayG.innerHTML = "";
    this.liveTA = null;
    for (const r of this.roots) {
      this.doLayout(r);
      this.drawEdges(r);
    }
    for (const r of this.roots)
      this.drawNodes(r);
    if (this.boxSel && this.boxEl)
      this.overlayG.appendChild(this.boxEl);
    this.updateDevPanel();
    if (this.editId)
      this.clearProxy();
    else
      this.ensureProxy();
  }
  bPath(sx, sy, ex, ey) {
    const dx = ex - sx;
    switch (this.style.connectionStyle) {
      case "straight":
        return "M" + sx + " " + sy + "L" + ex + " " + ey;
      case "curved":
        return "M" + sx + " " + sy + "Q" + (sx + dx * 0.7) + " " + sy + "," + ex + " " + ey;
      case "step": {
        const mx = (sx + ex) / 2;
        return "M" + sx + " " + sy + "H" + mx + "V" + ey + "H" + ex;
      }
      case "bracket": {
        const mx = sx + dx * 0.5;
        return "M" + sx + " " + sy + "C" + mx + " " + sy + " " + mx + " " + ey + " " + ex + " " + ey;
      }
      case "loose":
        return "M" + sx + " " + sy + "C" + (sx + dx * 0.6) + " " + (sy + (ey - sy) * 0.1) + "," + (ex - dx * 0.3) + " " + (ey - (ey - sy) * 0.1) + "," + ex + " " + ey;
      default:
        return "M" + sx + " " + sy + "C" + (sx + dx * 0.4) + " " + sy + "," + (ex - dx * 0.4) + " " + ey + "," + ex + " " + ey;
    }
  }
  drawEdges(nd, inh) {
    var _a, _b, _c;
    const pR = !!nd.isRoot;
    const above = [];
    const below = [];
    for (let i = 0; i < nd.children.length; i++) {
      if (nd.children[i].y < nd.y)
        above.push(i);
      else
        below.push(i);
    }
    const order = [...above, ...below.reverse()];
    for (const i of order) {
      const ch = nd.children[i];
      const col = this.getCC(ch, pR, i, inh);
      const isLeft = ch.side === "left";
      const pVis = this.nodeVis(nd);
      const pBW = pVis.bS !== "none" ? pVis.bW : 0;
      const cVis = this.nodeVis(ch);
      const cBW = cVis.bS !== "none" ? cVis.bW : 0;
      const sx = isLeft ? nd.x - nd.width / 2 - pBW : nd.x + nd.width / 2 + pBW;
      const ex = isLeft ? ch.x + ch.width / 2 + cBW : ch.x - ch.width / 2 - cBW;
      const p = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      p.setAttribute("d", this.bPath(sx, nd.y, ex, ch.y));
      p.setAttribute("stroke", col);
      p.setAttribute(
        "stroke-width",
        String((_a = ch.connectionWidth) != null ? _a : this.style.connectionWidth)
      );
      p.setAttribute("fill", "none");
      p.setAttribute("stroke-linecap", "round");
      if (((_b = this.ds) == null ? void 0 : _b.isDragging) && !this.ds.isRootDrag && this.ds.nodeId === ch.id)
        p.setAttribute("opacity", "0.15");
      this.edgesG.appendChild(p);
      this.drawEdges(
        ch,
        (_c = ch.connectionColor) != null ? _c : this.style.connectionRainbow && pR ? col : inh
      );
    }
  }
  drawNodes(n) {
    this.drawOne(n);
    for (const c of n.children)
      this.drawNodes(c);
  }
  drawOne(nd) {
    var _a;
    const fo = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "foreignObject"
    );
    fo.id = "mn-" + nd.id;
    const v = this.nodeVis(nd);
    const bW = v.bS !== "none" ? v.bW : 0;
    const visualW = nd.width + bW * 2;
    const visualH = nd.height + bW * 2;
    const selEx = this.isSel(nd.id) ? this.style.selectionWidth + 4 : 0;
    fo.setAttribute("x", String(nd.x - visualW / 2 - selEx));
    fo.setAttribute("y", String(nd.y - visualH / 2 - selEx));
    fo.setAttribute("width", String(visualW + selEx * 2));
    fo.setAttribute("height", String(visualH + selEx * 2));
    fo.setAttribute("overflow", "visible");
    if (((_a = this.ds) == null ? void 0 : _a.isDragging) && !this.ds.isRootDrag && this.ds.nodeId === nd.id)
      fo.toggleClass("mz-drag-transparent", true);
    const wrap = document.createElement("div");
    wrap.addClass("mz-node-wrap");
    if (this.editId === nd.id)
      wrap.appendChild(this.mkTA(nd));
    else
      wrap.appendChild(this.mkDiv(nd));
    fo.appendChild(wrap);
    this.nodesG.appendChild(fo);
  }
  nodeVis(nd) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const isR = !!nd.isRoot;
    const so = (_a = nd.styleOverride) != null ? _a : {};
    const bg = (_b = so.bgColor) != null ? _b : isR ? this.style.rootBgColor : this.style.nodeBgColor;
    const tc = (_c = so.textColor) != null ? _c : isR ? this.style.rootTextColor : this.style.nodeTextColor;
    const fs = (_d = so.fontSize) != null ? _d : isR ? this.style.rootFontSize : this.style.nodeFontSize;
    const ff = (_e = so.fontFamily) != null ? _e : isR ? this.style.rootFontFamily : this.style.nodeFontFamily;
    const bS = (_f = so.borderStyle) != null ? _f : isR ? this.style.rootBorderStyle : this.style.nodeBorderStyle;
    const bW = (_g = so.borderWidth) != null ? _g : isR ? this.style.rootBorderWidth : this.style.nodeBorderWidth;
    let bC = (_h = so.borderColor) != null ? _h : isR ? this.style.rootBorderColor : this.style.nodeBorderColor;
    if (this.style.connectionRainbow && !so.borderColor && !isR && nd.connectionColor)
      bC = nd.connectionColor;
    const rad = (_i = so.borderRadius) != null ? _i : isR ? this.style.rootBorderRadius : this.style.nodeBorderRadius;
    return { isR, bg, tc, fs, ff, bS, bW, bC, rad };
  }
  mkDiv(nd) {
    const div = document.createElement("div");
    const v = this.nodeVis(nd);
    const sel = this.isSel(nd.id);
    const ta = this.style.textAlign;
    const padX = this.style.nodePadX;
    const lh = this.style.nodeLineHeight;
    const off = this.style.selectionOutlineOffset;
    const bW = v.bS !== "none" ? v.bW : 0;
    const visualW = nd.width + bW * 2;
    const visualH = nd.height + bW * 2;
    const borderCSS = v.bS !== "none" ? `border:${v.bW}px ${v.bS} ${v.bC};` : "border:none;";
    const selCSS = sel ? `outline:${this.style.selectionWidth}px solid ${this.style.selectionColor};outline-offset:${off}px;` : "";
    div.addClass("mz-node-div");
    const ds = div.style;
    ds.setProperty("--mz-w", visualW + "px");
    ds.setProperty("--mz-h", visualH + "px");
    ds.setProperty(
      "--mz-jc",
      ta === "left" ? "flex-start" : ta === "right" ? "flex-end" : "center"
    );
    ds.setProperty("--mz-rad", v.rad + "px");
    ds.setProperty("--mz-fw", String(v.isR ? 700 : 500));
    ds.setProperty("--mz-fs", v.fs + "px");
    ds.setProperty("--mz-ff", v.ff);
    ds.setProperty("--mz-ta", ta);
    ds.setProperty("--mz-lh", String(lh));
    ds.setProperty("--mz-bg", v.bg);
    ds.setProperty("--mz-tc", v.tc);
    ds.setProperty("--mz-pad", `6px ${padX}px`);
    ds.setProperty("--mz-cursor", v.isR ? "move" : "grab");
    ds.setProperty(
      "--mz-border",
      v.bS !== "none" ? `${v.bW}px ${v.bS} ${v.bC}` : "none"
    );
    ds.setProperty(
      "--mz-outline",
      sel ? `${this.style.selectionWidth}px solid ${this.style.selectionColor}` : "none"
    );
    ds.setProperty("--mz-outline-off", sel ? off + "px" : "0");
    div.innerText = nd.text;
    div.addEventListener("mousedown", (e) => {
      var _a;
      if (this.spaceDown)
        return;
      e.stopPropagation();
      (_a = this.cc) == null ? void 0 : _a.focus({ preventScroll: true });
      this.closeMenu();
      const now = Date.now();
      const isDbl = this.lcnid === nd.id && now - this.lct < 300;
      this.lct = now;
      this.lcnid = nd.id;
      if (this.commitEdit && this.editId !== nd.id)
        this.commitEdit();
      if (isDbl) {
        this.editId = nd.id;
        this.render();
        return;
      }
      if (e.shiftKey || e.ctrlKey || e.metaKey) {
        this.togSel(nd.id);
        this.render();
        return;
      }
      if (!this.multiSel.has(nd.id))
        this.sel1(nd.id);
      this.render();
      const rc = this.cc.getBoundingClientRect();
      const lx = (e.clientX - rc.left - this.panX) / this.zoom, ly = (e.clientY - rc.top - this.panY) / this.zoom;
      if (nd.isRoot) {
        const peers = [];
        if (this.multiSel.size > 1)
          for (const mid of this.multiSel) {
            if (mid === nd.id)
              continue;
            const mn = this.fAll(mid);
            if (mn == null ? void 0 : mn.isRoot)
              peers.push({ id: mid, sx: mn.x, sy: mn.y });
          }
        this.ds = {
          isDragging: false,
          isRootDrag: true,
          nodeId: nd.id,
          startX: lx,
          startY: ly,
          nsx: nd.x,
          nsy: nd.y,
          peers: peers.length ? peers : void 0
        };
      } else {
        this.ds = {
          isDragging: false,
          isRootDrag: false,
          nodeId: nd.id,
          startX: lx,
          startY: ly,
          ghostEl: null,
          indicatorEl: null,
          snap: JSON.stringify(this.roots)
        };
      }
    });
    div.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.showNodeCtx(e, nd);
    });
    return div;
  }
  mkTA(nd) {
    const ta = document.createElement("textarea");
    ta.value = nd.text;
    const v = this.nodeVis(nd);
    const tAlign = this.style.textAlign;
    const editOC = this.style.editOutlineColor;
    const padX = this.style.nodePadX;
    const lh = this.style.nodeLineHeight;
    const off = this.style.selectionOutlineOffset;
    const bW = v.bS !== "none" ? v.bW : 0;
    const visualW = nd.width + bW * 2;
    const visualH = nd.height + bW * 2;
    const borderCSS = v.bS !== "none" ? `border:${v.bW}px ${v.bS} ${v.bC};` : "border:none;";
    const editOW = this.style.editOutlineWidth;
    const editCSS = `outline:${editOW}px solid ${editOC};outline-offset:${off}px;transition:none;animation:none;`;
    ta.addClass("mz-node-ta");
    const ts = ta.style;
    ts.setProperty("--mz-w", visualW + "px");
    ts.setProperty("--mz-h", visualH + "px");
    ts.setProperty("--mz-rad", v.rad + "px");
    ts.setProperty("--mz-fw", String(v.isR ? 700 : 500));
    ts.setProperty("--mz-fs", v.fs + "px");
    ts.setProperty("--mz-ff", v.ff);
    ts.setProperty("--mz-ta", tAlign);
    ts.setProperty("--mz-lh", String(lh));
    ts.setProperty("--mz-bg", v.bg);
    ts.setProperty("--mz-tc", v.tc);
    ts.setProperty("--mz-pad", `6px ${padX}px`);
    ts.setProperty(
      "--mz-border",
      v.bS !== "none" ? `${v.bW}px ${v.bS} ${v.bC}` : "none"
    );
    ts.setProperty("--mz-edit-outline", `${editOW}px solid ${editOC}`);
    ts.setProperty("--mz-edit-outline-off", off + "px");
    ta.addClass("mz-node-ta");
    ts.setProperty("--mz-sel-bg", editOC + "40");
    ta.addEventListener("mousedown", (e) => e.stopPropagation());
    ta.addEventListener("input", () => {
      const txt = ta.value || " ";
      const nw = this.calcW(txt, !!nd.isRoot);
      const nh = this.calcH(txt, !!nd.isRoot);
      if (nw !== nd.width || nh !== nd.height) {
        nd.width = nw;
        nd.height = nh;
        ta.style.setProperty("--mz-w", nd.width + bW * 2 + "px");
        ta.style.setProperty("--mz-h", nd.height + bW * 2 + "px");
        this.softRender();
      }
    });
    this.liveTA = ta;
    const save = () => {
      if (this.editId !== nd.id)
        return;
      const txt = ta.value;
      if (nd.text !== txt) {
        this.saveS();
        nd.text = txt;
        nd.width = this.calcW(txt || " ", !!nd.isRoot);
        nd.height = this.calcH(txt || " ", !!nd.isRoot);
      }
      this.editId = null;
      this.commitEdit = null;
      this.liveTA = null;
      this.render();
      this.doSave();
    };
    this.commitEdit = save;
    ta.addEventListener(
      "keydown",
      (e) => {
        e.stopPropagation();
        if (e.key === "Escape") {
          e.preventDefault();
          save();
        } else if (e.key === "Enter" && !e.shiftKey && !this.matchKey(e, this.kb.lineBreak)) {
          e.preventDefault();
          save();
        } else if (e.key === "Tab") {
          e.preventDefault();
          e.stopImmediatePropagation();
          const s = ta.selectionStart, end = ta.selectionEnd;
          ta.value = ta.value.substring(0, s) + "	" + ta.value.substring(end);
          ta.selectionStart = ta.selectionEnd = s + 1;
          ta.dispatchEvent(new Event("input"));
        } else if ((e.ctrlKey || e.metaKey) && e.key === "ArrowUp") {
          e.preventDefault();
          ta.selectionStart = 0;
          if (!e.shiftKey)
            ta.selectionEnd = 0;
        } else if ((e.ctrlKey || e.metaKey) && e.key === "ArrowDown") {
          e.preventDefault();
          const len = ta.value.length;
          ta.selectionEnd = len;
          if (!e.shiftKey)
            ta.selectionStart = len;
        }
      },
      true
    );
    setTimeout(() => {
      ta.focus({ preventScroll: true });
      ta.select();
    }, 0);
    return ta;
  }
  updateFO() {
    const v = (n) => {
      const sel = this.isSel(n.id);
      const ex = sel ? this.style.selectionWidth + 4 : 0;
      const nv = this.nodeVis(n);
      const bW = nv.bS !== "none" ? nv.bW : 0;
      const vw = n.width + bW * 2;
      const vh = n.height + bW * 2;
      const fo = document.getElementById("mn-" + n.id);
      if (fo) {
        fo.setAttribute("x", String(n.x - vw / 2 - ex));
        fo.setAttribute("y", String(n.y - vh / 2 - ex));
        fo.setAttribute("width", String(vw + ex * 2));
        fo.setAttribute("height", String(vh + ex * 2));
      }
      for (const c of n.children)
        v(c);
    };
    for (const r of this.roots)
      v(r);
  }
  closeMenu() {
    if (this.activeMenu) {
      this.activeMenu.close();
      this.activeMenu = null;
    }
  }
  showMenu(menu, e) {
    this.closeMenu();
    this.activeMenu = menu;
    menu.showAtMouseEvent(e);
  }
  showCanvasCtx(e) {
    this.closePop();
    const menu = new import_obsidian.Menu();
    if (this.isMulti()) {
      menu.addItem(
        (i) => i.setTitle(
          t("ctx.batchDel") + " (" + this.allSel().size + ")"
        ).setIcon("trash").onClick(() => this.batchDel())
      );
      menu.addItem(
        (i) => i.setTitle(t("ctx.editStyle")).setIcon("palette").onClick(() => this.showNodeStyleEditor(e))
      );
      menu.addSeparator();
    }
    menu.addItem(
      (i) => i.setTitle(t("ctx.newRoot")).onClick(() => {
        const r = this.cc.getBoundingClientRect();
        this.addRoot(
          this.plugin.getRootName(),
          (e.clientX - r.left - this.panX) / this.zoom,
          (e.clientY - r.top - this.panY) / this.zoom
        );
      })
    );
    menu.addSeparator();
    menu.addItem(
      (i) => i.setTitle(t("ctx.undo")).onClick(() => this.undo())
    );
    menu.addItem(
      (i) => i.setTitle(t("ctx.redo")).onClick(() => this.redo())
    );
    menu.addSeparator();
    menu.addItem(
      (i) => i.setTitle(t("ctx.globalStyle")).onClick(() => this.showStyleModal())
    );
    this.showMenu(menu, e);
  }
  showNodeCtx(e, nd) {
    this.closePop();
    const menu = new import_obsidian.Menu();
    if (this.isMulti()) {
      menu.addItem(
        (i) => i.setTitle(
          t("ctx.batchDel") + " (" + this.allSel().size + ")"
        ).onClick(() => this.batchDel())
      );
      menu.addItem(
        (i) => i.setTitle(t("ctx.editStyle")).onClick(() => this.showNodeStyleEditor(e))
      );
    } else {
      menu.addItem(
        (i) => i.setTitle(t("ctx.edit")).onClick(() => {
          this.editId = nd.id;
          this.render();
        })
      );
      menu.addItem(
        (i) => i.setTitle(t("ctx.style")).onClick(() => this.showNodeStyleEditor(e))
      );
      menu.addSeparator();
      menu.addItem(
        (i) => i.setTitle(t("ctx.copy")).onClick(() => {
          this.sel1(nd.id);
          this.copyNode(false);
        })
      );
      menu.addItem(
        (i) => i.setTitle(t("ctx.cut")).onClick(() => {
          this.sel1(nd.id);
          this.copyNode(true);
        })
      );
      if (this.clipboard)
        menu.addItem(
          (i) => i.setTitle(t("ctx.paste")).onClick(() => {
            this.sel1(nd.id);
            this.pasteNode(false);
          })
        );
      menu.addSeparator();
      menu.addItem(
        (i) => i.setTitle(t("ctx.child")).onClick(() => {
          this.sel1(nd.id);
          this.addChildNode(nd.isRoot ? "right" : void 0);
        })
      );
      if (nd.isRoot)
        menu.addItem(
          (i) => i.setTitle(t("ctx.leftChild")).onClick(() => {
            this.sel1(nd.id);
            this.addLeftChild();
          })
        );
      if (!nd.isRoot)
        menu.addItem(
          (i) => i.setTitle(t("ctx.sibling")).onClick(() => {
            this.sel1(nd.id);
            this.addSibling();
          })
        );
      menu.addSeparator();
      menu.addItem(
        (i) => i.setTitle(t("ctx.delete")).onClick(() => {
          this.sel1(nd.id);
          this.delNode();
        })
      );
    }
    this.showMenu(menu, e);
  }
  batchDel() {
    this.saveS();
    for (const id of this.allSel()) {
      if (this.roots.some((r) => r.id === id))
        this.roots = this.roots.filter((r) => r.id !== id);
      else
        this.remAll(id);
    }
    this.clrSel();
    this.render();
    this.doSave();
  }
  startBox(lx, ly, shift) {
    this.boxSel = true;
    this.boxShift = shift;
    this.bsx = lx;
    this.bsy = ly;
    this.bcx = lx;
    this.bcy = ly;
    this.boxEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    this.boxEl.setAttribute("fill", "rgba(59,130,246,0.06)");
    this.boxEl.setAttribute("stroke", "rgba(59,130,246,0.4)");
    this.boxEl.setAttribute("stroke-width", "1");
    this.boxEl.setAttribute("stroke-dasharray", "6 3");
    this.boxEl.setAttribute("rx", "4");
    this.overlayG.appendChild(this.boxEl);
  }
  updBox(lx, ly) {
    this.bcx = lx;
    this.bcy = ly;
    if (!this.boxEl)
      return;
    this.boxEl.setAttribute("x", String(Math.min(this.bsx, lx)));
    this.boxEl.setAttribute("y", String(Math.min(this.bsy, ly)));
    this.boxEl.setAttribute("width", String(Math.abs(lx - this.bsx)));
    this.boxEl.setAttribute("height", String(Math.abs(ly - this.bsy)));
  }
  endBox(_e) {
    var _a;
    this.boxSel = false;
    (_a = this.boxEl) == null ? void 0 : _a.remove();
    this.boxEl = null;
    const bx1 = Math.min(this.bsx, this.bcx), by1 = Math.min(this.bsy, this.bcy), bx2 = Math.max(this.bsx, this.bcx), by2 = Math.max(this.bsy, this.bcy);
    if (Math.abs(bx2 - bx1) < 5 && Math.abs(by2 - by1) < 5) {
      if (!this.boxShift)
        this.clrSel();
      this.render();
      return;
    }
    const ids = /* @__PURE__ */ new Set();
    const chk = (n) => {
      const nl = n.x - n.width / 2, nr = n.x + n.width / 2, nt = n.y - n.height / 2, nb = n.y + n.height / 2;
      if (nr >= bx1 && nl <= bx2 && nb >= by1 && nt <= by2)
        ids.add(n.id);
      for (const c of n.children)
        chk(c);
    };
    for (const r of this.roots)
      chk(r);
    if (this.boxShift) {
      for (const id of ids)
        this.togSel(id);
    } else {
      this.multiSel.clear();
      for (const id of ids)
        this.multiSel.add(id);
      if (this.multiSel.size === 1)
        this.sel1([...this.multiSel][0]);
      else if (this.multiSel.size > 1)
        this.selId = [...this.multiSel][0];
      else
        this.clrSel();
    }
    this.render();
  }
  isDesc(tgt, pid) {
    const d = this.fAll(pid);
    return d ? this.fN(tgt.id, d) !== null : false;
  }
  detTgt(leftX, rightX, y, did) {
    for (const r of this.roots) {
      const h = this._dt(leftX, rightX, y, r, did);
      if (h)
        return h;
    }
    return null;
  }
  _dt(leftX, rightX, y, n, did) {
    const selIds = this.allSel();
    for (const sid of selIds) {
      if (n.id === sid || this.isDesc(n, sid))
        return null;
    }
    if (n.id === did || this.isDesc(n, did))
      return null;
    const x = leftX;
    const pad = 25;
    const l = n.x - n.width / 2 - pad, r = n.x + n.width / 2 + pad, top = n.y - n.height / 2 - pad, b = n.y + n.height / 2 + pad;
    if (x >= l && x <= r && y >= top && y <= b) {
      let z = "child";
      if (!n.isRoot) {
        const h = n.height + pad * 2, ry = y - top;
        if (ry < h * 0.4)
          z = "before";
        else if (ry > h * 0.6)
          z = "after";
      }
      return { id: n.id, zone: z };
    }
    for (const c of n.children) {
      const h = this._dt(leftX, rightX, y, c, did);
      if (h)
        return h;
    }
    return null;
  }
  remTree(id, n) {
    for (let i = 0; i < n.children.length; i++) {
      if (n.children[i].id === id)
        return n.children.splice(i, 1)[0];
      const f = this.remTree(id, n.children[i]);
      if (f)
        return f;
    }
    return null;
  }
  remAll(id) {
    for (const r of this.roots) {
      const f = this.remTree(id, r);
      if (f)
        return f;
    }
    return null;
  }
  insTree(ni, tid, zone) {
    const tn = this.fAll(tid);
    if (!tn)
      return;
    const setSide = (n, s) => {
      n.side = s;
      for (const c of n.children)
        setSide(c, s);
    };
    if (zone === "child" || tn.isRoot) {
      const targetSide = tn.isRoot ? ni.side : tn.side;
      setSide(ni, targetSide);
      tn.children.push(ni);
      return;
    }
    setSide(ni, tn.side);
    for (const r of this.roots) {
      const p = this.fP(tid, r);
      if (p) {
        const idx = p.children.findIndex((c) => c.id === tid);
        if (idx !== -1) {
          p.children.splice(zone === "before" ? idx : idx + 1, 0, ni);
          return;
        }
      }
    }
  }
  fN(id, n) {
    if (n.id === id)
      return n;
    for (const c of n.children) {
      const f = this.fN(id, c);
      if (f)
        return f;
    }
    return null;
  }
  fP(cid, n) {
    for (const c of n.children) {
      if (c.id === cid)
        return n;
      const f = this.fP(cid, c);
      if (f)
        return f;
    }
    return null;
  }
  fPA(cid) {
    for (const r of this.roots) {
      const p = this.fP(cid, r);
      if (p)
        return p;
    }
    return null;
  }
  bindEvts() {
    const cc = this.cc;
    cc.addEventListener("mousedown", (e) => {
      const tgt = e.target;
      if (tgt.tagName.toLowerCase() === "textarea")
        return;
      cc.focus({ preventScroll: true });
      this.closeMenu();
      if (this.spaceDown) {
        this.dragCv = true;
        this.smx = e.clientX;
        this.smy = e.clientY;
        cc.toggleClass("mz-cursor-grabbing", true);
        e.preventDefault();
        return;
      }
      if (tgt === this.svgEl || tgt === cc || tgt.tagName === "svg" || tgt.tagName === "g") {
        if (this.commitEdit)
          this.commitEdit();
        this.startBox(
          (e.clientX - cc.getBoundingClientRect().left - this.panX) / this.zoom,
          (e.clientY - cc.getBoundingClientRect().top - this.panY) / this.zoom,
          e.shiftKey
        );
      }
    });
    cc.addEventListener("contextmenu", (e) => {
      const tgt = e.target;
      if (tgt === this.svgEl || tgt === cc || ["svg", "g", "path"].includes(tgt.tagName)) {
        e.preventDefault();
        this.showCanvasCtx(e);
      }
    });
    cc.addEventListener("mousemove", (e) => {
      const rc = cc.getBoundingClientRect();
      const lx = (e.clientX - rc.left - this.panX) / this.zoom, ly = (e.clientY - rc.top - this.panY) / this.zoom;
      if (this.boxSel) {
        this.updBox(lx, ly);
        return;
      }
      if (this.ds) {
        const dx = lx - this.ds.startX, dy = ly - this.ds.startY;
        if (!this.ds.isDragging && (Math.abs(dx) > 5 || Math.abs(dy) > 5))
          this.ds.isDragging = true;
        if (this.ds.isDragging) {
          if (this.ds.isRootDrag)
            this.rootDF(dx, dy);
          else
            this.childDF(lx, ly, dx, dy);
        }
        return;
      }
      if (this.dragCv) {
        this.panX += e.clientX - this.smx;
        this.panY += e.clientY - this.smy;
        this.smx = e.clientX;
        this.smy = e.clientY;
        this.updTx();
      }
    });
    cc.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        const kb = this.kb;
        if (e.ctrlKey || e.metaKey) {
          const base = e.deltaY > 0 ? 0.9 : 1.1;
          const zf = kb.invertZoom ? 1 / base : base;
          const nz = Math.max(0.1, Math.min(this.zoom * zf, 3));
          const r = cc.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top;
          this.panX = mx - (mx - this.panX) * (nz / this.zoom);
          this.panY = my - (my - this.panY) * (nz / this.zoom);
          this.zoom = nz;
        } else if (e.shiftKey) {
          const d = e.deltaX || e.deltaY;
          this.panX -= kb.invertScrollX ? -d : d;
        } else {
          this.panX -= kb.invertScrollX ? -e.deltaX : e.deltaX;
          this.panY -= kb.invertScrollY ? -e.deltaY : e.deltaY;
        }
        this.updTx();
      },
      { passive: false }
    );
  }
  rootDF(dx, dy) {
    var _a;
    if (!((_a = this.ds) == null ? void 0 : _a.isRootDrag))
      return;
    const rn = this.fAll(this.ds.nodeId);
    if (!rn)
      return;
    rn.x = this.ds.nsx + dx;
    rn.y = this.ds.nsy + dy;
    this.doLayout(rn);
    if (this.ds.peers)
      for (const p of this.ds.peers) {
        const pn = this.fAll(p.id);
        if (pn) {
          pn.x = p.sx + dx;
          pn.y = p.sy + dy;
          this.doLayout(pn);
        }
      }
    this.edgesG.innerHTML = "";
    for (const r of this.roots)
      this.drawEdges(r);
    this.updateFO();
  }
  childDF(lx, ly, dx, dy) {
    const d = this.ds;
    if (!d.ghostEl) {
      const orig = document.getElementById("mn-" + d.nodeId);
      if (orig)
        orig.toggleClass("mz-drag-transparent", true);
      const dn2 = this.fAll(d.nodeId);
      if (dn2) {
        const ghost = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "foreignObject"
        );
        ghost.setAttribute("width", String(dn2.width));
        ghost.setAttribute("height", String(dn2.height));
        ghost.setAttribute("overflow", "visible");
        const gd = document.createElement("div");
        gd.addClass("mz-drag-ghost");
        gd.innerText = dn2.text;
        ghost.appendChild(gd);
        this.overlayG.appendChild(ghost);
        d.ghostEl = ghost;
        const ind = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        ind.setAttribute("fill", "rgba(59,130,246,0.12)");
        ind.setAttribute("stroke", this.style.selectionColor);
        ind.setAttribute("stroke-width", "2");
        ind.setAttribute("rx", String(this.style.nodeBorderRadius));
        ind.toggleClass("mz-hidden", true);
        this.overlayG.appendChild(ind);
        d.indicatorEl = ind;
      }
    }
    const dn = this.fAll(d.nodeId);
    if (dn && d.ghostEl) {
      const isLeftSide = dn.side === "left";
      const edgeX = isLeftSide ? dn.x + dx + dn.width / 2 : dn.x + dx - dn.width / 2;
      const gy = dn.y + dy;
      d.ghostEl.setAttribute("x", String(dn.x + dx - dn.width / 2));
      d.ghostEl.setAttribute("y", String(gy - dn.height / 2));
      const tgt = this.detTgt(edgeX, edgeX, gy, d.nodeId);
      if (tgt && d.indicatorEl) {
        d.indicatorEl.toggleClass("mz-hidden", false);
        const tn = this.fAll(tgt.id);
        if (tn) {
          if (tgt.zone === "child") {
            d.indicatorEl.setAttribute(
              "x",
              String(tn.x - tn.width / 2 - 4)
            );
            d.indicatorEl.setAttribute(
              "y",
              String(tn.y - tn.height / 2 - 4)
            );
            d.indicatorEl.setAttribute(
              "width",
              String(tn.width + 8)
            );
            d.indicatorEl.setAttribute(
              "height",
              String(tn.height + 8)
            );
          } else if (tgt.zone === "before") {
            d.indicatorEl.setAttribute(
              "x",
              String(tn.x - tn.width / 2)
            );
            d.indicatorEl.setAttribute(
              "y",
              String(tn.y - tn.height / 2 - 6)
            );
            d.indicatorEl.setAttribute("width", String(tn.width));
            d.indicatorEl.setAttribute("height", "3");
          } else {
            d.indicatorEl.setAttribute(
              "x",
              String(tn.x - tn.width / 2)
            );
            d.indicatorEl.setAttribute(
              "y",
              String(tn.y + tn.height / 2 + 3)
            );
            d.indicatorEl.setAttribute("width", String(tn.width));
            d.indicatorEl.setAttribute("height", "3");
          }
        }
      } else if (d.indicatorEl)
        d.indicatorEl.toggleClass("mz-hidden", true);
    }
  }
  addChildNode(forceSide) {
    if (!this.selId)
      return;
    const p = this.fAll(this.selId);
    if (!p)
      return;
    this.saveS();
    const txt = this.plugin.getChildName();
    const n = {
      id: crypto.randomUUID(),
      text: txt,
      x: 0,
      y: 0,
      width: this.calcW(txt, false),
      height: this.calcH(txt, false),
      children: []
    };
    if (p.connectionColor)
      n.connectionColor = p.connectionColor;
    if (p.connectionWidth)
      n.connectionWidth = p.connectionWidth;
    if (forceSide)
      n.side = forceSide;
    else if (p.isRoot) {
      const dir = this.style.nodeDirection;
      if (dir === "left")
        n.side = "left";
      else
        n.side = "right";
    } else {
      n.side = p.side || "right";
    }
    p.children.push(n);
    this.assignRainbowColor(p, n);
    this.sel1(n.id);
    if (this.plugin.settings.editOnCreate)
      this.editId = n.id;
    this.render();
    this.doSave();
  }
  addLeftChild() {
    this.addChildNode("left");
  }
  // Enter on root = add child. Enter on child = insert sibling AFTER current
  addSibling() {
    if (!this.selId)
      return;
    const sel = this.fAll(this.selId);
    if (!sel)
      return;
    if (sel.isRoot) {
      this.addChildNode();
      return;
    }
    const p = this.fPA(this.selId);
    if (!p)
      return;
    this.saveS();
    const txt = this.plugin.getChildName();
    const n = {
      id: crypto.randomUUID(),
      text: txt,
      x: 0,
      y: 0,
      width: this.calcW(txt, false),
      height: this.calcH(txt, false),
      children: [],
      side: sel.side
    };
    if (p.connectionColor)
      n.connectionColor = p.connectionColor;
    if (p.connectionWidth)
      n.connectionWidth = p.connectionWidth;
    const idx = p.children.findIndex((c) => c.id === this.selId);
    if (idx !== -1)
      p.children.splice(idx + 1, 0, n);
    else
      p.children.push(n);
    this.assignRainbowColor(p, n);
    this.sel1(n.id);
    if (this.plugin.settings.editOnCreate)
      this.editId = n.id;
    this.render();
    this.doSave();
  }
  // FIX #3: delete selects UPPER sibling (idx-1)
  delNode() {
    if (!this.selId)
      return;
    if (this.roots.some((r) => r.id === this.selId)) {
      this.saveS();
      this.roots = this.roots.filter((r) => r.id !== this.selId);
      this.clrSel();
      if (this.roots.length)
        this.sel1(this.roots[this.roots.length - 1].id);
      this.render();
      this.doSave();
      return;
    }
    const p = this.fPA(this.selId);
    if (!p)
      return;
    const idx = p.children.findIndex((c) => c.id === this.selId);
    this.saveS();
    p.children.splice(idx, 1);
    if (p.children.length) {
      const newIdx = idx > 0 ? idx - 1 : 0;
      this.sel1(p.children[newIdx].id);
    } else
      this.sel1(p.id);
    this.render();
    this.doSave();
  }
  gD(nid) {
    for (const r of this.roots) {
      const d = this._gd(nid, r, 0);
      if (d !== -1)
        return d;
    }
    return -1;
  }
  _gd(nid, n, d) {
    if (n.id === nid)
      return d;
    for (const c of n.children) {
      const r = this._gd(nid, c, d + 1);
      if (r !== -1)
        return r;
    }
    return -1;
  }
  cDep(td) {
    const o = [];
    for (const r of this.roots)
      this._cd(r, 0, td, o);
    return o;
  }
  _cd(n, d, td, o) {
    if (d === td) {
      o.push(n);
      return;
    }
    for (const c of n.children)
      this._cd(c, d + 1, td, o);
  }
  arrow(dir) {
    var _a, _b, _c;
    if (!this.selId)
      return;
    const cur = this.fAll(this.selId);
    if (!cur)
      return;
    const isLeft = cur.side === "left";
    if (dir === "ArrowRight") {
      if (isLeft) {
        const par = this.fPA(this.selId);
        if (par)
          this.sel1(par.id);
      } else {
        const rc = (_a = cur.children) == null ? void 0 : _a.filter((c) => c.side !== "left");
        if (rc == null ? void 0 : rc.length)
          this.sel1(rc[0].id);
      }
    } else if (dir === "ArrowLeft") {
      if (isLeft) {
        const lc = ((_b = cur.children) == null ? void 0 : _b.length) ? cur.children : null;
        if (lc)
          this.sel1(lc[0].id);
      } else if (cur.isRoot) {
        const lc = (_c = cur.children) == null ? void 0 : _c.filter((c) => c.side === "left");
        if (lc == null ? void 0 : lc.length)
          this.sel1(lc[0].id);
      } else {
        const par = this.fPA(this.selId);
        if (par)
          this.sel1(par.id);
      }
    } else {
      const d = this.gD(this.selId);
      if (d === -1)
        return;
      const peers = this.cDep(d);
      if (peers.length <= 1)
        return;
      const idx = peers.findIndex((n) => n.id === this.selId);
      if (idx === -1)
        return;
      if (dir === "ArrowUp")
        this.sel1(peers[idx > 0 ? idx - 1 : peers.length - 1].id);
      else
        this.sel1(peers[idx < peers.length - 1 ? idx + 1 : 0].id);
    }
    this.render();
  }
};

// src/StylePanelView.ts
var import_obsidian2 = require("obsidian");
var StylePanelView = class extends import_obsidian2.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_TYPE_MINDMAP_STYLE;
  }
  getDisplayText() {
    return "MindZJ " + t("tb.style");
  }
  getIcon() {
    return "palette";
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async onOpen() {
    this.build();
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async onClose() {
  }
  getView() {
    const l = this.app.workspace.getLeavesOfType(VIEW_TYPE_MINDMAP);
    return l.length > 0 && l[0].view instanceof MindMapView ? l[0].view : null;
  }
  build() {
    const ct = this.containerEl.children[1];
    ct.empty();
    ct.addClass("mz-sp-ct");
    new import_obsidian2.Setting(ct).setName(t("sm.title")).setHeading();
    const view = this.getView();
    const s = (view == null ? void 0 : view.style) ? { ...view.style } : this.plugin.getStyle();
    const upd = (p) => {
      const v = this.getView();
      if (v)
        v.applyStyle(p);
      else
        void this.plugin.updateStyle(p);
    };
    const safeStr = (val) => typeof val === "string" ? val : typeof val === "number" ? String(val) : typeof val === "boolean" ? String(val) : "";
    const mkSec = (icon, title) => {
      const sec = ct.createEl("div");
      sec.addClass("mz-sp-sec");
      const hdr = sec.createEl("div", { text: icon + "  " + title });
      hdr.addClass("mz-sp-sec-hdr");
      const b = sec.createEl("div");
      b.addClass("mz-sp-sec-body");
      return b;
    };
    const mkRow = (p, l) => {
      const r = p.createEl("div");
      r.addClass("mz-sp-row");
      const lbl = r.createEl("span", { text: l });
      lbl.addClass("mz-sp-lbl");
      return r;
    };
    const mkColor = (p, l, k) => {
      const r = mkRow(p, l);
      const i = r.createEl("input");
      i.type = "color";
      const cv = s[k];
      i.value = typeof cv === "string" && cv.startsWith("var") ? "#ffffff" : safeStr(cv);
      i.addClass("mz-sp-color");
      i.addEventListener(
        "input",
        () => upd({ [k]: i.value })
      );
    };
    const mkRange = (p, l, k, min, max, step) => {
      const r = mkRow(p, l);
      const w = r.createEl("div");
      w.addClass("mz-sp-range-wrap");
      const i = w.createEl("input");
      i.type = "range";
      i.min = String(min);
      i.max = String(max);
      if (step)
        i.step = String(step);
      i.value = safeStr(s[k]);
      i.addClass("mz-sp-range");
      const n = w.createEl("span", { text: safeStr(s[k]) });
      n.addClass("mz-sp-range-val");
      i.addEventListener("input", () => {
        n.textContent = i.value;
        upd({ [k]: Number(i.value) });
      });
    };
    const mkNum = (p, l, k, min, max) => {
      const r = mkRow(p, l);
      const i = r.createEl("input");
      i.type = "number";
      i.min = String(min);
      i.max = String(max);
      i.value = safeStr(s[k]);
      i.addClass("mz-sp-num");
      i.addEventListener(
        "change",
        () => upd({ [k]: Number(i.value) })
      );
    };
    const mkSel = (p, l, k, opts) => {
      const r = mkRow(p, l);
      const sel = r.createEl("select");
      sel.addClass("mz-sp-sel");
      for (const o of opts) {
        const op = document.createElement("option");
        op.value = o;
        op.text = o;
        if (o === safeStr(s[k]))
          op.selected = true;
        sel.appendChild(op);
      }
      sel.addEventListener(
        "change",
        () => upd({ [k]: sel.value })
      );
    };
    const s1 = mkSec("\u{1F4E6}", t("sm.child"));
    mkColor(s1, t("sm.bg"), "nodeBgColor");
    mkColor(s1, t("sm.text"), "nodeTextColor");
    mkRange(s1, t("sm.fontSize"), "nodeFontSize", 10, 32);
    mkSel(s1, t("sm.font"), "nodeFontFamily", FONT_LIST);
    mkSel(s1, t("sm.borderStyle"), "nodeBorderStyle", [
      "solid",
      "dashed",
      "dotted",
      "double",
      "none"
    ]);
    mkColor(s1, t("sm.borderColor"), "nodeBorderColor");
    mkRange(s1, t("sm.borderWidth"), "nodeBorderWidth", 0, 8);
    mkRange(s1, t("sm.borderRadius"), "nodeBorderRadius", 0, 32);
    mkNum(s1, t("sm.minWidth"), "nodeMinWidth", 30, 400);
    mkNum(s1, t("sm.minHeight"), "nodeMinHeight", 20, 200);
    const s2 = mkSec("\u{1F3E0}", t("sm.root"));
    mkColor(s2, t("sm.bg"), "rootBgColor");
    mkColor(s2, t("sm.text"), "rootTextColor");
    mkRange(s2, t("sm.fontSize"), "rootFontSize", 10, 32);
    mkSel(s2, t("sm.font"), "rootFontFamily", FONT_LIST);
    mkSel(s2, t("sm.borderStyle"), "rootBorderStyle", [
      "solid",
      "dashed",
      "dotted",
      "double",
      "none"
    ]);
    mkColor(s2, t("sm.borderColor"), "rootBorderColor");
    mkRange(s2, t("sm.borderWidth"), "rootBorderWidth", 0, 8);
    mkRange(s2, t("sm.borderRadius"), "rootBorderRadius", 0, 32);
    mkNum(s2, t("sm.minWidth"), "rootMinWidth", 50, 400);
    mkNum(s2, t("sm.minHeight"), "rootMinHeight", 20, 200);
    const s3 = mkSec("\u{1F517}", t("sm.conn"));
    mkSel(s3, t("sm.type"), "connectionStyle", CONNECTION_STYLES);
    mkColor(s3, t("sm.color"), "connectionColor");
    mkRange(s3, t("sm.width"), "connectionWidth", 1, 8);
    mkNum(s3, t("sm.connLength"), "connectionLength", 30, 300);
    mkSel(s3, t("sm.nodeDir"), "nodeDirection", ["right", "left", "both"]);
    mkNum(s3, t("sm.nodeGapY") || "Sibling Gap", "nodeGapY", 8, 80);
    const ctRow = s3.createEl("div");
    ctRow.addClass("mz-rainbow-ct");
    const rlbl = ctRow.createEl("span", { text: t("sm.rainbow") });
    rlbl.addClass("mz-rainbow-lbl");
    const allP = {
      ...RAINBOW_PALETTES,
      ...s.customRainbows || {}
    };
    const curP = s.connectionRainbow ? s.rainbowPalette : "off";
    const lw = ctRow.createEl("div");
    lw.addClass("mz-rainbow-list");
    const mkI = (key, label, colors) => {
      const it = lw.createEl("div");
      it.addClass("mz-rainbow-item");
      it.toggleClass("is-active", key === curP);
      const lblEl = it.createEl("span", { text: label });
      lblEl.addClass("mz-rainbow-item-lbl");
      if (colors) {
        const ds = it.createEl("span");
        ds.addClass("mz-rainbow-dots");
        for (const c of colors.slice(0, 10)) {
          const d = ds.createEl("span");
          d.addClass("mz-rainbow-dot");
          Object.entries({ "--mz-dot-color": c }).forEach(
            ([k, v]) => d.style.setProperty(k, v)
          );
        }
      }
      it.addEventListener("click", () => {
        if (key === "off")
          upd({ connectionRainbow: false });
        else
          upd({ connectionRainbow: true, rainbowPalette: key });
      });
    };
    mkI("off", "Solid", null);
    for (const [name, colors] of Object.entries(allP))
      mkI(name, name, colors);
    const s3b = mkSec("\u{1F4DD}", t("sm.textAlign"));
    mkSel(s3b, t("sm.textAlign"), "textAlign", ["left", "center", "right"]);
    const s4 = mkSec("\u2705", t("sm.sel"));
    mkColor(s4, t("sm.selColor"), "selectionColor");
    mkRange(s4, t("sm.selWidth"), "selectionWidth", 1, 8);
    mkNum(s4, t("sm.selOffset"), "selectionOutlineOffset", -5, 20);
    mkColor(s4, t("sm.editOutline"), "editOutlineColor");
    mkRange(s4, t("sm.editOutlineWidth"), "editOutlineWidth", 0, 8);
    const s5 = mkSec("\u{1F5BC}\uFE0F", t("sm.canvasBg"));
    mkColor(s5, t("sm.canvasBg"), "canvasBg");
    const s6 = mkSec("\u{1F527}", t("sm.showToolbar"));
    const tbRow = mkRow(s6, t("sm.showToolbar"));
    const tbCb = tbRow.createEl("input");
    tbCb.type = "checkbox";
    tbCb.checked = this.plugin.settings.showToolbar;
    tbCb.addClass("mz-sp-tb-chk");
    tbCb.addEventListener("change", () => {
      this.plugin.settings.showToolbar = tbCb.checked;
      void this.plugin.saveSettings();
      this.plugin.refreshAllViews();
    });
    mkSel(s6, t("sm.tbPos"), "toolbarPosition", ["top", "bottom"]);
    mkNum(s6, t("sm.tbPadT"), "toolbarPadTop", 0, 40);
    mkNum(s6, t("sm.tbPadR"), "toolbarPadRight", 0, 40);
    mkNum(s6, t("sm.tbPadB"), "toolbarPadBottom", 0, 40);
    mkNum(s6, t("sm.tbPadL"), "toolbarPadLeft", 0, 40);
    mkColor(s6, t("sm.tbBg"), "toolbarBgColor");
    mkColor(s6, t("sm.tbBtnBg"), "toolbarBtnBgColor");
    mkSel(s6, t("sm.tbBtnBorder"), "toolbarBtnBorderStyle", [
      "solid",
      "dashed",
      "dotted",
      "none"
    ]);
    mkColor(s6, t("sm.tbBtnBorderColor"), "toolbarBtnBorderColor");
    mkColor(s6, t("sm.tbBtnText"), "toolbarBtnTextColor");
    const br = ct.createEl("div");
    br.addClass("mz-sp-btns");
    br.createEl("button", { text: t("sm.reset") }).addEventListener(
      "click",
      () => {
        const v = this.getView();
        if (v)
          v.applyStyle({ ...DEFAULT_STYLE });
        else
          void this.plugin.updateStyle({ ...DEFAULT_STYLE });
        this.build();
      }
    );
    const rf = br.createEl("button", { text: "\u21BB" });
    rf.addClass("mz-sp-refresh");
    rf.addEventListener("click", () => this.build());
  }
};

// src/SettingsTab.ts
var import_obsidian3 = require("obsidian");
var MindMapSettingTab = class extends import_obsidian3.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    const scrollTop = containerEl.scrollTop;
    containerEl.empty();
    const about = containerEl.createEl("div");
    about.addClass("mz-about");
    const iconEl = about.createEl("div");
    iconEl.addClass("mz-about-icon");
    iconEl.innerText = "\u{1F5FA}\uFE0F";
    const titleEl = about.createEl("h2", { text: "MindZJ" });
    titleEl.addClass("mz-about-title");
    const verEl = about.createEl("div", {
      text: `${t("set.version")}: ${this.plugin.manifest.version}`
    });
    verEl.addClass("mz-about-meta");
    const authEl = about.createEl("div", {
      text: `${t("set.author")}: ${this.plugin.manifest.author}`
    });
    authEl.addClass("mz-about-meta-last");
    const descEl = about.createEl("p", { text: t("set.desc") });
    descEl.addClass("mz-about-desc");
    const ghLink = about.createEl("div").createEl("a", {
      text: `\u{1F4E6} ${t("set.github")}`,
      href: "https://github.com/zjok/mindzj"
    });
    ghLink.addClass("mz-about-link");
    ghLink.setAttr("target", "_blank");
    const donSec = containerEl.createEl("div");
    donSec.addClass("mz-donate-sec");
    const donTitle = donSec.createEl("h3", {
      text: `\u2615 ${t("set.donate")}`
    });
    donTitle.addClass("mz-donate-heading");
    const donBtns = donSec.createEl("div");
    donBtns.addClass("mz-donate-btns");
    const mkDon = (label, color, url) => {
      const a = donBtns.createEl("a", { href: url });
      a.setAttr("target", "_blank");
      a.addClass("mz-donate-btn");
      Object.entries({ "--mz-btn-color": color }).forEach(
        ([k, v]) => a.style.setProperty(k, v)
      );
      a.innerText = label;
    };
    mkDon(
      "\u2615 Buy Me a Coffee",
      "#FFDD00",
      "https://www.buymeacoffee.com/superjohn"
    );
    mkDon("\u2764\uFE0F Ko-fi", "#FF5E5B", "https://ko-fi.com/superjohn");
    mkDon("\u{1F4B0} PayPal", "#0070ba", "https://paypal.me/TanCat997");
    new import_obsidian3.Setting(containerEl).setName(t("set.title")).setHeading();
    new import_obsidian3.Setting(containerEl).setName(t("set.lang")).setDesc(t("set.langDesc")).addDropdown((dd) => {
      for (const l of LANGUAGES)
        dd.addOption(l.value, l.label);
      dd.setValue(this.plugin.settings.language);
      dd.onChange(async (v) => {
        this.plugin.settings.language = v;
        setLang(v);
        await this.plugin.saveSettings();
        this.plugin.refreshAllViews();
        this.display();
      });
    });
    new import_obsidian3.Setting(containerEl).setName(t("set.theme")).setDesc(t("set.themeDesc")).addDropdown((dd) => {
      dd.addOption("light", t("set.light"));
      dd.addOption("dark", t("set.dark"));
      dd.setValue(this.plugin.settings.theme);
      dd.onChange(async (v) => {
        await this.plugin.switchTheme(v);
        this.display();
      });
    });
    new import_obsidian3.Setting(containerEl).setName(t("set.canvasBg")).setDesc(t("set.canvasBgDesc")).addColorPicker((cp) => {
      const cur = this.plugin.settings.style.canvasBg;
      cp.setValue(cur.startsWith("#") ? cur : "#ffffff");
      cp.onChange(async (v) => {
        this.plugin.settings.style.canvasBg = v;
        await this.plugin.saveSettings();
        this.plugin.applyStyleToAllViews(
          this.plugin.settings.style
        );
      });
    });
    new import_obsidian3.Setting(containerEl).setName(t("set.toolbar")).setDesc(t("set.toolbarDesc")).addToggle((tg) => {
      tg.setValue(this.plugin.settings.showToolbar);
      tg.onChange(async (v) => {
        this.plugin.settings.showToolbar = v;
        await this.plugin.saveSettings();
        this.plugin.refreshAllViews();
      });
    });
    new import_obsidian3.Setting(containerEl).setName(t("set.editOnCreate")).setDesc(t("set.editOnCreateDesc")).addToggle((tg) => {
      tg.setValue(this.plugin.settings.editOnCreate);
      tg.onChange(async (v) => {
        this.plugin.settings.editOnCreate = v;
        await this.plugin.saveSettings();
      });
    });
    const lang = this.plugin.settings.language;
    const defRoot = t("def.root");
    const defChild = t("def.child");
    const mkNameSetting = (name, desc, field, defVal) => {
      const setting = new import_obsidian3.Setting(containerEl).setName(name).setDesc(desc);
      const resetEl = setting.controlEl.createEl("button", { text: "\u21BA" });
      resetEl.addClass("mz-reset-btn");
      const curVal = (this.plugin.settings.customNodeNames[lang] || {})[field];
      resetEl.toggleClass("mz-hidden", !(curVal && curVal !== defVal));
      resetEl.addEventListener("click", async () => {
        const c = { ...this.plugin.settings.customNodeNames };
        if (c[lang])
          delete c[lang][field];
        this.plugin.settings.customNodeNames = c;
        await this.plugin.saveSettings();
        inp.value = defVal;
        resetEl.toggleClass("mz-hidden", true);
      });
      const inp = setting.controlEl.createEl("input");
      inp.type = "text";
      inp.value = curVal || defVal;
      inp.addClass("mz-name-input");
      inp.addEventListener("blur", async () => {
        const v = inp.value.trim();
        const c = { ...this.plugin.settings.customNodeNames };
        c[lang] = { ...c[lang] || {}, [field]: v || void 0 };
        this.plugin.settings.customNodeNames = c;
        await this.plugin.saveSettings();
        resetEl.toggleClass("mz-hidden", !(v && v !== defVal));
      });
    };
    mkNameSetting(
      t("set.rootName"),
      t("set.rootNameDesc"),
      "root",
      defRoot
    );
    mkNameSetting(
      t("set.childName"),
      t("set.childNameDesc"),
      "child",
      defChild
    );
    new import_obsidian3.Setting(containerEl).setName(t("set.typeToEdit")).setDesc(t("set.typeToEditDesc")).addToggle((tg) => {
      tg.setValue(this.plugin.settings.typeToEdit);
      tg.onChange(async (v) => {
        this.plugin.settings.typeToEdit = v;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian3.Setting(containerEl).setName(t("set.keys")).setHeading();
    const kb = this.plugin.settings.keyBindings;
    const keyMap = [
      { key: "editNode", label: t("set.key.edit") },
      { key: "addSibling", label: t("set.key.sibling") },
      { key: "addChild", label: t("set.key.child") },
      { key: "focusNode", label: t("set.key.focus") },
      { key: "undo", label: t("set.key.undo") },
      { key: "redo", label: t("set.key.redo") },
      { key: "dragCanvas", label: t("set.key.dragCanvas") },
      { key: "navUp", label: t("set.key.up") },
      { key: "navDown", label: t("set.key.down") },
      { key: "navLeft", label: t("set.key.left") },
      { key: "navRight", label: t("set.key.right") }
    ];
    for (const item of keyMap) {
      const setting = new import_obsidian3.Setting(containerEl).setName(item.label);
      const curVal = kb[item.key];
      const defVal = DEFAULT_KEYBINDINGS[item.key];
      const resetEl = setting.controlEl.createEl("button", { text: "\u21BA" });
      resetEl.addClass("mz-reset-btn");
      resetEl.toggleClass("mz-hidden", curVal === defVal);
      resetEl.addEventListener("click", async () => {
        kb[item.key] = defVal;
        await this.plugin.saveSettings();
        this.plugin.refreshAllViews();
        btn.setButtonText(defVal);
        resetEl.toggleClass("mz-hidden", true);
      });
      let btn;
      setting.addButton((b) => {
        btn = b;
        b.setButtonText(String(curVal) || "...");
        b.onClick(() => {
          b.setButtonText(t("set.key.press"));
          let recording = true;
          let currentCombo = "";
          let hasMainKey = false;
          let timeout = null;
          const buildCombo = (e) => {
            const parts = [];
            if (e.ctrlKey || e.metaKey)
              parts.push("ctrl");
            if (e.shiftKey)
              parts.push("shift");
            if (e.altKey)
              parts.push("alt");
            if (!["Control", "Shift", "Alt", "Meta"].includes(e.key))
              parts.push(e.key === " " ? "Space" : e.key);
            return parts.join("+");
          };
          const finish = (combo) => {
            if (!recording)
              return;
            recording = false;
            if (timeout)
              clearTimeout(timeout);
            window.removeEventListener("keydown", onDown, true);
            window.removeEventListener("keyup", onUp, true);
            kb[item.key] = combo;
            b.setButtonText(combo);
            void this.plugin.saveSettings();
            this.plugin.refreshAllViews();
            resetEl.toggleClass("mz-hidden", combo === defVal);
          };
          const cancel = () => {
            if (!recording)
              return;
            recording = false;
            if (timeout)
              clearTimeout(timeout);
            window.removeEventListener("keydown", onDown, true);
            window.removeEventListener("keyup", onUp, true);
            b.setButtonText(String(kb[item.key]) || "...");
          };
          const onDown = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.key === "Escape") {
              cancel();
              return;
            }
            currentCombo = buildCombo(e);
            hasMainKey = ![
              "Control",
              "Shift",
              "Alt",
              "Meta"
            ].includes(e.key);
            b.setButtonText(
              currentCombo + (hasMainKey ? "" : "+\u2026")
            );
            if (timeout)
              clearTimeout(timeout);
            timeout = setTimeout(cancel, 5e3);
          };
          const onUp = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (hasMainKey && currentCombo) {
              finish(currentCombo);
            }
          };
          window.addEventListener("keydown", onDown, true);
          window.addEventListener("keyup", onUp, true);
          timeout = setTimeout(cancel, 5e3);
        });
      });
    }
    new import_obsidian3.Setting(containerEl).setName(t("set.scroll")).setHeading();
    new import_obsidian3.Setting(containerEl).setName(t("set.invertY")).addToggle((tg) => {
      tg.setValue(kb.invertScrollY);
      tg.onChange(async (v) => {
        kb.invertScrollY = v;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian3.Setting(containerEl).setName(t("set.invertX")).addToggle((tg) => {
      tg.setValue(kb.invertScrollX);
      tg.onChange(async (v) => {
        kb.invertScrollX = v;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian3.Setting(containerEl).setName(t("set.invertZoom")).addToggle((tg) => {
      tg.setValue(kb.invertZoom);
      tg.onChange(async (v) => {
        kb.invertZoom = v;
        await this.plugin.saveSettings();
      });
    });
    setTimeout(() => {
      containerEl.scrollTop = scrollTop;
    }, 0);
  }
};

// src/main.ts
var MindNodePlugin = class extends import_obsidian4.Plugin {
  constructor() {
    super(...arguments);
    this.settings = {
      ...DEFAULT_SETTINGS,
      style: { ...DEFAULT_STYLE },
      keyBindings: { ...DEFAULT_KEYBINDINGS }
    };
  }
  async onload() {
    await this.loadSettings();
    setLang(this.settings.language);
    this.registerExtensions([MINDMAP_FILE_EXTENSION], VIEW_TYPE_MINDMAP);
    this.registerView(
      VIEW_TYPE_MINDMAP,
      (leaf) => new MindMapView(leaf, this)
    );
    this.registerView(
      VIEW_TYPE_MINDMAP_STYLE,
      (leaf) => new StylePanelView(leaf, this)
    );
    this.addSettingTab(new MindMapSettingTab(this.app, this));
    this.addRibbonIcon("network", "New MindZJ", () => {
      void this.createNew();
    });
    this.addCommand({
      id: "create-new",
      name: "New mind map",
      callback: () => {
        void this.createNew();
      }
    });
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        var _a;
        if (!(file instanceof import_obsidian4.TFolder))
          return;
        menu.addItem(
          (i) => i.setTitle("New MindZJ").setIcon("network").onClick(() => {
            void this.createInFolder(file);
          })
        );
        const m = menu;
        if (((_a = m.items) == null ? void 0 : _a.length) > 1) {
          const mzj = m.items.pop();
          if (mzj) {
            const idx = m.items.findIndex(
              (it) => {
                var _a2, _b;
                return ((_b = (_a2 = it.titleEl) == null ? void 0 : _a2.textContent) != null ? _b : it.title) === "New folder";
              }
            );
            if (idx >= 0) {
              mzj.section = m.items[idx].section;
              m.items.splice(idx + 1, 0, mzj);
            } else {
              m.items.unshift(mzj);
            }
          }
        }
      })
    );
  }
  onunload() {
  }
  async loadSettings() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const d = await this.loadData();
    if (d) {
      this.settings = {
        style: { ...DEFAULT_STYLE, ...(_a = d.style) != null ? _a : {} },
        language: (_b = d.language) != null ? _b : "en",
        theme: (_c = d.theme) != null ? _c : "light",
        showToolbar: (_d = d.showToolbar) != null ? _d : true,
        keyBindings: {
          ...DEFAULT_KEYBINDINGS,
          ...(_e = d.keyBindings) != null ? _e : {}
        },
        developerMode: (_f = d.developerMode) != null ? _f : false,
        editOnCreate: (_g = d.editOnCreate) != null ? _g : true,
        typeToEdit: (_h = d.typeToEdit) != null ? _h : true,
        customNodeNames: (_i = d.customNodeNames) != null ? _i : {},
        toolbarStyleLight: d.toolbarStyleLight,
        toolbarStyleDark: d.toolbarStyleDark
      };
      const valid = [
        "bezier",
        "straight",
        "curved",
        "step",
        "bracket",
        "loose"
      ];
      if (!valid.includes(this.settings.style.connectionStyle))
        this.settings.style.connectionStyle = "bezier";
      if (this.settings.theme === "dark" && !d.toolbarStyleDark) {
        this.applyToolbarColors(DEFAULT_TOOLBAR_DARK);
      }
    }
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async updateStyle(p) {
    this.settings.style = { ...this.settings.style, ...p };
    await this.saveSettings();
  }
  getStyle() {
    return { ...this.settings.style };
  }
  getToolbarColors() {
    const s = this.settings.style;
    return {
      toolbarBgColor: s.toolbarBgColor,
      toolbarBtnBgColor: s.toolbarBtnBgColor,
      toolbarBtnBorderStyle: s.toolbarBtnBorderStyle,
      toolbarBtnBorderColor: s.toolbarBtnBorderColor,
      toolbarBtnTextColor: s.toolbarBtnTextColor,
      toolbarBorderColor: s.toolbarBorderColor,
      toolbarBorderWidth: s.toolbarBorderWidth
    };
  }
  applyToolbarColors(tc) {
    Object.assign(this.settings.style, tc);
  }
  async switchTheme(newTheme) {
    var _a, _b;
    if (this.settings.theme === "light")
      this.settings.toolbarStyleLight = this.getToolbarColors();
    else
      this.settings.toolbarStyleDark = this.getToolbarColors();
    this.settings.theme = newTheme;
    this.settings.style.canvasBg = newTheme === "dark" ? "#1e1e1e" : "#ffffff";
    this.applyToolbarColors(
      newTheme === "light" ? (_a = this.settings.toolbarStyleLight) != null ? _a : DEFAULT_TOOLBAR_LIGHT : (_b = this.settings.toolbarStyleDark) != null ? _b : DEFAULT_TOOLBAR_DARK
    );
    await this.saveSettings();
    this.applyStyleToAllViews(this.settings.style);
  }
  getRootName() {
    const n = this.settings.customNodeNames[this.settings.language];
    return (n == null ? void 0 : n.root) || t("def.root");
  }
  getChildName() {
    const n = this.settings.customNodeNames[this.settings.language];
    return (n == null ? void 0 : n.child) || t("def.child");
  }
  refreshAllViews() {
    for (const leaf of this.app.workspace.getLeavesOfType(
      VIEW_TYPE_MINDMAP
    ))
      if (leaf.view instanceof MindMapView)
        leaf.view.refreshUI();
  }
  applyStyleToAllViews(s) {
    for (const leaf of this.app.workspace.getLeavesOfType(
      VIEW_TYPE_MINDMAP
    ))
      if (leaf.view instanceof MindMapView)
        leaf.view.applyStyle({ ...s });
  }
  openPluginSettings() {
    const appRec = this.app;
    if (appRec.setting) {
      appRec.setting.open();
      appRec.setting.openTabById(this.manifest.id);
    }
  }
  defaultData() {
    return JSON.stringify(
      {
        rootNodes: [
          {
            id: crypto.randomUUID(),
            text: this.getRootName(),
            x: 0,
            y: 0,
            width: 100,
            height: 44,
            children: [],
            isRoot: true
          }
        ]
      },
      null,
      2
    );
  }
  uniPath(folder, base) {
    const ext = MINDMAP_FILE_EXTENSION, pre = folder.path === "/" ? "" : folder.path + "/";
    let p = `${pre}${base}.${ext}`, n = 1;
    while (this.app.vault.getAbstractFileByPath(p)) {
      p = `${pre}${base} ${n}.${ext}`;
      n++;
    }
    return p;
  }
  async createNew() {
    var _a, _b;
    await this.createInFolder(
      (_b = (_a = this.app.workspace.getActiveFile()) == null ? void 0 : _a.parent) != null ? _b : this.app.vault.getRoot()
    );
  }
  async createInFolder(folder) {
    try {
      const f = await this.app.vault.create(
        this.uniPath(folder, "Untitled MindZJ"),
        this.defaultData()
      );
      const leaf = this.app.workspace.getLeaf("tab");
      await leaf.openFile(f);
      this.app.workspace.setActiveLeaf(leaf, { focus: true });
    } catch (e) {
    }
  }
  async openStylePanel() {
    var _a;
    const ls = this.app.workspace.getLeavesOfType(VIEW_TYPE_MINDMAP_STYLE);
    let l;
    if (ls.length)
      l = ls[0];
    else {
      l = (_a = this.app.workspace.getRightLeaf(false)) != null ? _a : this.app.workspace.getLeaf(true);
      await l.setViewState({
        type: VIEW_TYPE_MINDMAP_STYLE,
        active: true
      });
    }
    this.app.workspace.revealLeaf(l);
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL01pbmRNYXBWaWV3LnRzIiwgInNyYy90eXBlcy50cyIsICJzcmMvaTE4bi50cyIsICJzcmMvU3R5bGVQYW5lbFZpZXcudHMiLCAic3JjL1NldHRpbmdzVGFiLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBzcmMvbWFpbi50c1xyXG5pbXBvcnQgeyBQbHVnaW4sIFdvcmtzcGFjZUxlYWYsIFRGb2xkZXIsIE1lbnUgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHsgTWluZE1hcFZpZXcgfSBmcm9tIFwiLi9NaW5kTWFwVmlld1wiO1xyXG5pbXBvcnQgeyBTdHlsZVBhbmVsVmlldyB9IGZyb20gXCIuL1N0eWxlUGFuZWxWaWV3XCI7XHJcbmltcG9ydCB7IE1pbmRNYXBTZXR0aW5nVGFiIH0gZnJvbSBcIi4vU2V0dGluZ3NUYWJcIjtcclxuaW1wb3J0IHsgc2V0TGFuZywgdCB9IGZyb20gXCIuL2kxOG5cIjtcclxuaW1wb3J0IHtcclxuICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgVklFV19UWVBFX01JTkRNQVBfU1RZTEUsXHJcbiAgICBNSU5ETUFQX0ZJTEVfRVhURU5TSU9OLFxyXG4gICAgTWluZE1hcFN0eWxlLFxyXG4gICAgUGx1Z2luU2V0dGluZ3MsXHJcbiAgICBERUZBVUxUX1NFVFRJTkdTLFxyXG4gICAgREVGQVVMVF9TVFlMRSxcclxuICAgIERFRkFVTFRfS0VZQklORElOR1MsXHJcbiAgICBUb29sYmFyVGhlbWVDb2xvcnMsXHJcbiAgICBERUZBVUxUX1RPT0xCQVJfTElHSFQsXHJcbiAgICBERUZBVUxUX1RPT0xCQVJfREFSSyxcclxufSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuaW50ZXJmYWNlIE1lbnVXaXRoSXRlbXMgZXh0ZW5kcyBNZW51IHtcclxuICAgIGl0ZW1zOiBBcnJheTx7IHNlY3Rpb24/OiBzdHJpbmc7IHRpdGxlRWw/OiBIVE1MRWxlbWVudDsgdGl0bGU/OiBzdHJpbmcgfT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmROb2RlUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcclxuICAgIHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncyA9IHtcclxuICAgICAgICAuLi5ERUZBVUxUX1NFVFRJTkdTLFxyXG4gICAgICAgIHN0eWxlOiB7IC4uLkRFRkFVTFRfU1RZTEUgfSxcclxuICAgICAgICBrZXlCaW5kaW5nczogeyAuLi5ERUZBVUxUX0tFWUJJTkRJTkdTIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG4gICAgICAgIHNldExhbmcodGhpcy5zZXR0aW5ncy5sYW5ndWFnZSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV4dGVuc2lvbnMoW01JTkRNQVBfRklMRV9FWFRFTlNJT05dLCBWSUVXX1RZUEVfTUlORE1BUCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclZpZXcoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICAgICAobGVhZikgPT4gbmV3IE1pbmRNYXBWaWV3KGxlYWYsIHRoaXMpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclZpZXcoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFLFxyXG4gICAgICAgICAgICAobGVhZikgPT4gbmV3IFN0eWxlUGFuZWxWaWV3KGxlYWYsIHRoaXMpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBNaW5kTWFwU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG4gICAgICAgIHRoaXMuYWRkUmliYm9uSWNvbihcIm5ldHdvcmtcIiwgXCJOZXcgTWluZFpKXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdm9pZCB0aGlzLmNyZWF0ZU5ldygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgICAgIGlkOiBcImNyZWF0ZS1uZXdcIixcclxuICAgICAgICAgICAgbmFtZTogXCJOZXcgbWluZCBtYXBcIixcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZvaWQgdGhpcy5jcmVhdGVOZXcoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImZpbGUtbWVudVwiLCAobWVudSwgZmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIFRGb2xkZXIpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUoXCJOZXcgTWluZFpKXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJY29uKFwibmV0d29ya1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIHRoaXMuY3JlYXRlSW5Gb2xkZXIoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBtZW51IGFzIHVua25vd24gYXMgTWVudVdpdGhJdGVtcztcclxuICAgICAgICAgICAgICAgIGlmIChtLml0ZW1zPy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXpqID0gbS5pdGVtcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobXpqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IG0uaXRlbXMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdC50aXRsZUVsPy50ZXh0Q29udGVudCA/PyBpdC50aXRsZSkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOZXcgZm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXpqLnNlY3Rpb24gPSBtLml0ZW1zW2lkeF0uc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uaXRlbXMuc3BsaWNlKGlkeCArIDEsIDAsIG16aik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLml0ZW1zLnVuc2hpZnQobXpqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbnVubG9hZCgpOiB2b2lkIHtcclxuICAgICAgICAvKiBubyBjbGVhbnVwIG5lZWRlZCAqL1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyAuLi5ERUZBVUxUX1NUWUxFLCAuLi4oZC5zdHlsZSA/PyB7fSkgfSxcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBkLmxhbmd1YWdlID8/IFwiZW5cIixcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBkLnRoZW1lID8/IFwibGlnaHRcIixcclxuICAgICAgICAgICAgICAgIHNob3dUb29sYmFyOiBkLnNob3dUb29sYmFyID8/IHRydWUsXHJcbiAgICAgICAgICAgICAgICBrZXlCaW5kaW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLkRFRkFVTFRfS0VZQklORElOR1MsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uKGQua2V5QmluZGluZ3MgPz8ge30pLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRldmVsb3Blck1vZGU6IGQuZGV2ZWxvcGVyTW9kZSA/PyBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVkaXRPbkNyZWF0ZTogZC5lZGl0T25DcmVhdGUgPz8gdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHR5cGVUb0VkaXQ6IGQudHlwZVRvRWRpdCA/PyB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tTm9kZU5hbWVzOiBkLmN1c3RvbU5vZGVOYW1lcyA/PyB7fSxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJTdHlsZUxpZ2h0OiBkLnRvb2xiYXJTdHlsZUxpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhclN0eWxlRGFyazogZC50b29sYmFyU3R5bGVEYXJrLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZCA9IFtcclxuICAgICAgICAgICAgICAgIFwiYmV6aWVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0cmFpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1cnZlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGVwXCIsXHJcbiAgICAgICAgICAgICAgICBcImJyYWNrZXRcIixcclxuICAgICAgICAgICAgICAgIFwibG9vc2VcIixcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZC5pbmNsdWRlcyh0aGlzLnNldHRpbmdzLnN0eWxlLmNvbm5lY3Rpb25TdHlsZSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnN0eWxlLmNvbm5lY3Rpb25TdHlsZSA9IFwiYmV6aWVyXCI7XHJcbiAgICAgICAgICAgIC8vIFVwZ3JhZGU6IGFwcGx5IHRoZW1lLWFwcHJvcHJpYXRlIHRvb2xiYXIgY29sb3JzIHdoZW5cclxuICAgICAgICAgICAgLy8gcGVyLXRoZW1lIHNuYXBzaG90cyBoYXZlbid0IGJlZW4gc2F2ZWQgeWV0IChlLmcuIHVzZXJcclxuICAgICAgICAgICAgLy8gdXBncmFkZWQgZnJvbSBhIHZlcnNpb24gdGhhdCBkaWRuJ3QgcGVyc2lzdCB0aGVtKS5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudGhlbWUgPT09IFwiZGFya1wiICYmICFkLnRvb2xiYXJTdHlsZURhcmspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb29sYmFyQ29sb3JzKERFRkFVTFRfVE9PTEJBUl9EQVJLKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgdXBkYXRlU3R5bGUocDogUGFydGlhbDxNaW5kTWFwU3R5bGU+KSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zdHlsZSA9IHsgLi4udGhpcy5zZXR0aW5ncy5zdHlsZSwgLi4ucCB9O1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XHJcbiAgICB9XHJcbiAgICBnZXRTdHlsZSgpOiBNaW5kTWFwU3R5bGUge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMuc2V0dGluZ3Muc3R5bGUgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRvb2xiYXJDb2xvcnMoKTogVG9vbGJhclRoZW1lQ29sb3JzIHtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5zZXR0aW5ncy5zdHlsZTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b29sYmFyQmdDb2xvcjogcy50b29sYmFyQmdDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJ0bkJnQ29sb3I6IHMudG9vbGJhckJ0bkJnQ29sb3IsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogcy50b29sYmFyQnRuQm9yZGVyU3R5bGUsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogcy50b29sYmFyQnRuQm9yZGVyQ29sb3IsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5UZXh0Q29sb3I6IHMudG9vbGJhckJ0blRleHRDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJvcmRlckNvbG9yOiBzLnRvb2xiYXJCb3JkZXJDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJvcmRlcldpZHRoOiBzLnRvb2xiYXJCb3JkZXJXaWR0aCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhcHBseVRvb2xiYXJDb2xvcnModGM6IFRvb2xiYXJUaGVtZUNvbG9ycykge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zZXR0aW5ncy5zdHlsZSwgdGMpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3dpdGNoVGhlbWUobmV3VGhlbWU6IFwibGlnaHRcIiB8IFwiZGFya1wiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudGhlbWUgPT09IFwibGlnaHRcIilcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy50b29sYmFyU3R5bGVMaWdodCA9IHRoaXMuZ2V0VG9vbGJhckNvbG9ycygpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5zZXR0aW5ncy50b29sYmFyU3R5bGVEYXJrID0gdGhpcy5nZXRUb29sYmFyQ29sb3JzKCk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aGVtZSA9IG5ld1RoZW1lO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3R5bGUuY2FudmFzQmcgPVxyXG4gICAgICAgICAgICBuZXdUaGVtZSA9PT0gXCJkYXJrXCIgPyBcIiMxZTFlMWVcIiA6IFwiI2ZmZmZmZlwiO1xyXG4gICAgICAgIHRoaXMuYXBwbHlUb29sYmFyQ29sb3JzKFxyXG4gICAgICAgICAgICBuZXdUaGVtZSA9PT0gXCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgICA/ICh0aGlzLnNldHRpbmdzLnRvb2xiYXJTdHlsZUxpZ2h0ID8/IERFRkFVTFRfVE9PTEJBUl9MSUdIVClcclxuICAgICAgICAgICAgICAgIDogKHRoaXMuc2V0dGluZ3MudG9vbGJhclN0eWxlRGFyayA/PyBERUZBVUxUX1RPT0xCQVJfREFSSyksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZVRvQWxsVmlld3ModGhpcy5zZXR0aW5ncy5zdHlsZSk7XHJcbiAgICB9XHJcbiAgICBnZXRSb290TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lc1t0aGlzLnNldHRpbmdzLmxhbmd1YWdlXTtcclxuICAgICAgICByZXR1cm4gbj8ucm9vdCB8fCB0KFwiZGVmLnJvb3RcIik7XHJcbiAgICB9XHJcbiAgICBnZXRDaGlsZE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBuID0gdGhpcy5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXNbdGhpcy5zZXR0aW5ncy5sYW5ndWFnZV07XHJcbiAgICAgICAgcmV0dXJuIG4/LmNoaWxkIHx8IHQoXCJkZWYuY2hpbGRcIik7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoQWxsVmlld3MoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICkpXHJcbiAgICAgICAgICAgIGlmIChsZWFmLnZpZXcgaW5zdGFuY2VvZiBNaW5kTWFwVmlldykgbGVhZi52aWV3LnJlZnJlc2hVSSgpO1xyXG4gICAgfVxyXG4gICAgYXBwbHlTdHlsZVRvQWxsVmlld3MoczogTWluZE1hcFN0eWxlKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICkpXHJcbiAgICAgICAgICAgIGlmIChsZWFmLnZpZXcgaW5zdGFuY2VvZiBNaW5kTWFwVmlldylcclxuICAgICAgICAgICAgICAgIGxlYWYudmlldy5hcHBseVN0eWxlKHsgLi4ucyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuUGx1Z2luU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICBjb25zdCBhcHBSZWMgPSB0aGlzLmFwcCBhcyB1bmtub3duIGFzIFJlY29yZDxcclxuICAgICAgICAgICAgc3RyaW5nLFxyXG4gICAgICAgICAgICB7IG9wZW4oKTogdm9pZDsgb3BlblRhYkJ5SWQoaWQ6IHN0cmluZyk6IHZvaWQgfVxyXG4gICAgICAgID47XHJcbiAgICAgICAgaWYgKGFwcFJlYy5zZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIGFwcFJlYy5zZXR0aW5nLm9wZW4oKTtcclxuICAgICAgICAgICAgYXBwUmVjLnNldHRpbmcub3BlblRhYkJ5SWQodGhpcy5tYW5pZmVzdC5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvb3ROb2RlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuZ2V0Um9vdE5hbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Jvb3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDIsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdW5pUGF0aChmb2xkZXI6IFRGb2xkZXIsIGJhc2U6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGV4dCA9IE1JTkRNQVBfRklMRV9FWFRFTlNJT04sXHJcbiAgICAgICAgICAgIHByZSA9IGZvbGRlci5wYXRoID09PSBcIi9cIiA/IFwiXCIgOiBmb2xkZXIucGF0aCArIFwiL1wiO1xyXG4gICAgICAgIGxldCBwID0gYCR7cHJlfSR7YmFzZX0uJHtleHR9YCxcclxuICAgICAgICAgICAgbiA9IDE7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwKSkge1xyXG4gICAgICAgICAgICBwID0gYCR7cHJlfSR7YmFzZX0gJHtufS4ke2V4dH1gO1xyXG4gICAgICAgICAgICBuKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhc3luYyBjcmVhdGVOZXcoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJbkZvbGRlcihcclxuICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKT8ucGFyZW50ID8/XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXRSb290KCksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXN5bmMgY3JlYXRlSW5Gb2xkZXIoZm9sZGVyOiBURm9sZGVyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHRoaXMudW5pUGF0aChmb2xkZXIsIFwiVW50aXRsZWQgTWluZFpKXCIpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0RGF0YSgpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBsZWFmID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XHJcbiAgICAgICAgICAgIGF3YWl0IGxlYWYub3BlbkZpbGUoZik7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5zZXRBY3RpdmVMZWFmKGxlYWYsIHsgZm9jdXM6IHRydWUgfSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIC8qIGZpbGUgY3JlYXRpb24gbWF5IGZhaWwgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBvcGVuU3R5bGVQYW5lbCgpIHtcclxuICAgICAgICBjb25zdCBscyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX01JTkRNQVBfU1RZTEUpO1xyXG4gICAgICAgIGxldCBsOiBXb3Jrc3BhY2VMZWFmO1xyXG4gICAgICAgIGlmIChscy5sZW5ndGgpIGwgPSBsc1swXTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbCA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0UmlnaHRMZWFmKGZhbHNlKSA/P1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYodHJ1ZSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGwuc2V0Vmlld1N0YXRlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLnJldmVhbExlYWYobCk7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8vIHNyYy9NaW5kTWFwVmlldy50c1xyXG5pbXBvcnQgeyBUZXh0RmlsZVZpZXcsIFdvcmtzcGFjZUxlYWYsIE1lbnUgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHtcclxuICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgQm9yZGVyU3R5bGUsXHJcbiAgICBNaW5kTm9kZURhdGEsXHJcbiAgICBNaW5kTWFwU3R5bGUsXHJcbiAgICBERUZBVUxUX1NUWUxFLFxyXG4gICAgREVGQVVMVF9UT09MQkFSX0xJR0hULFxyXG4gICAgREVGQVVMVF9UT09MQkFSX0RBUkssXHJcbiAgICBSQUlOQk9XX1BBTEVUVEVTLFxyXG4gICAgRk9OVF9MSVNULFxyXG4gICAgQ09OTkVDVElPTl9TVFlMRVMsXHJcbiAgICBLZXlCaW5kaW5ncyxcclxufSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSBcIi4vaTE4blwiO1xyXG5pbXBvcnQgdHlwZSBNaW5kTm9kZVBsdWdpbiBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG50eXBlIExheW91dE5vZGUgPSBNaW5kTm9kZURhdGEgJiB7IF9zaD86IG51bWJlciB9O1xyXG5cclxuaW50ZXJmYWNlIFJvb3REcmFnIHtcclxuICAgIGlzUm9vdERyYWc6IHRydWU7XHJcbiAgICBub2RlSWQ6IHN0cmluZztcclxuICAgIHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgc3RhcnRZOiBudW1iZXI7XHJcbiAgICBuc3g6IG51bWJlcjtcclxuICAgIG5zeTogbnVtYmVyO1xyXG4gICAgcGVlcnM/OiB7IGlkOiBzdHJpbmc7IHN4OiBudW1iZXI7IHN5OiBudW1iZXIgfVtdO1xyXG59XHJcbmludGVyZmFjZSBDaGlsZERyYWcge1xyXG4gICAgaXNSb290RHJhZzogZmFsc2U7XHJcbiAgICBub2RlSWQ6IHN0cmluZztcclxuICAgIHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgc3RhcnRZOiBudW1iZXI7XHJcbiAgICBnaG9zdEVsOiBTVkdFbGVtZW50IHwgbnVsbDtcclxuICAgIGluZGljYXRvckVsOiBTVkdSZWN0RWxlbWVudCB8IG51bGw7XHJcbiAgICBzbmFwOiBzdHJpbmc7XHJcbn1cclxudHlwZSBEcmFnU3RhdGUgPSAoeyBpc0RyYWdnaW5nOiBib29sZWFuIH0gJiAoUm9vdERyYWcgfCBDaGlsZERyYWcpKSB8IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgTWluZE1hcFZpZXcgZXh0ZW5kcyBUZXh0RmlsZVZpZXcge1xyXG4gICAgcHJpdmF0ZSBzdmdFbCE6IFNWR1NWR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGdFbCE6IFNWR0dFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBlZGdlc0chOiBTVkdHRWxlbWVudDtcclxuICAgIHByaXZhdGUgbm9kZXNHITogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG92ZXJsYXlHITogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNjITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHN2Z0N0ITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1kQ3QhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0YkVsITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGRldkVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwYW5YID0gMDtcclxuICAgIHByaXZhdGUgcGFuWSA9IDA7XHJcbiAgICBwcml2YXRlIHpvb20gPSAxO1xyXG4gICAgcHJpdmF0ZSBzcGFjZURvd24gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZHJhZ0N2ID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNteCA9IDA7XHJcbiAgICBwcml2YXRlIHNteSA9IDA7XHJcbiAgICBwcml2YXRlIHNlbElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgbXVsdGlTZWwgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIHByaXZhdGUgZWRpdElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgcm9vdHM6IE1pbmROb2RlRGF0YVtdID0gW107XHJcbiAgICBwcml2YXRlIGxjdCA9IDA7XHJcbiAgICBwcml2YXRlIGxjbmlkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29tbWl0RWRpdDogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVuZG9TOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZWRvUzogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdHlsZTogTWluZE1hcFN0eWxlID0geyAuLi5ERUZBVUxUX1NUWUxFIH07XHJcbiAgICBwcml2YXRlIGRzOiBEcmFnU3RhdGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwbHVnaW46IE1pbmROb2RlUGx1Z2luO1xyXG4gICAgcHJpdmF0ZSB1aU9rID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGJveFNlbCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBic3ggPSAwO1xyXG4gICAgcHJpdmF0ZSBic3kgPSAwO1xyXG4gICAgcHJpdmF0ZSBiY3ggPSAwO1xyXG4gICAgcHJpdmF0ZSBiY3kgPSAwO1xyXG4gICAgcHJpdmF0ZSBib3hTaGlmdCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBib3hFbDogU1ZHUmVjdEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgcG9wQ2xvc2U6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtZE1vZGUgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbWRCdG46IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNsaXBib2FyZDogeyBkYXRhOiBzdHJpbmc7IGlzUm9vdDogYm9vbGVhbjsgY3V0OiBib29sZWFuIH0gfCBudWxsID1cclxuICAgICAgICBudWxsO1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVNZW51OiBNZW51IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNlYXJjaEJhcjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2VhcmNoUmVzdWx0czogTWluZE5vZGVEYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgc2VhcmNoSWR4ID0gMDtcclxuICAgIHByaXZhdGUgb2xkUG9zID0gbmV3IE1hcDxzdHJpbmcsIHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4oKTtcclxuICAgIHByaXZhdGUgYW5pbUlkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgbGl2ZVRBOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIG1kU25hcHNob3Q6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB6b29tTGFiZWw6IEhUTUxTcGFuRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwcm94eVRBOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBNaW5kTm9kZVBsdWdpbikge1xyXG4gICAgICAgIHN1cGVyKGxlYWYpO1xyXG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBwbHVnaW4uZ2V0U3R5bGUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0IGtiKCk6IEtleUJpbmRpbmdzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW4uc2V0dGluZ3Mua2V5QmluZGluZ3M7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFJhaW5ib3coKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnN0eWxlLnJhaW5ib3dQYWxldHRlO1xyXG4gICAgICAgIGlmICh0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzPy5bcF0pIHJldHVybiB0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzW3BdO1xyXG4gICAgICAgIHJldHVybiBSQUlOQk9XX1BBTEVUVEVTW3BdIHx8IFJBSU5CT1dfUEFMRVRURVMuY2xhc3NpYztcclxuICAgIH1cclxuICAgIHByaXZhdGUgbWtSb290KHR4dDogc3RyaW5nKTogTWluZE5vZGVEYXRhIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcclxuICAgICAgICAgICAgdGV4dDogdHh0LFxyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5jYWxjVyh0eHQsIHRydWUpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY2FsY0godHh0LCB0cnVlKSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICBpc1Jvb3Q6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldFZpZXdUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiBWSUVXX1RZUEVfTUlORE1BUDtcclxuICAgIH1cclxuICAgIGdldERpc3BsYXlUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUuYmFzZW5hbWUgOiBcIk1pbmRaSlwiO1xyXG4gICAgfVxyXG4gICAgZ2V0SWNvbigpIHtcclxuICAgICAgICByZXR1cm4gXCJuZXR3b3JrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld0RhdGEoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5lZGl0SWQgJiYgdGhpcy5saXZlVEEpIHtcclxuICAgICAgICAgICAgY29uc3QgbmQgPSB0aGlzLmZBbGwodGhpcy5lZGl0SWQpO1xyXG4gICAgICAgICAgICBpZiAobmQpIG5kLnRleHQgPSB0aGlzLmxpdmVUQS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHsgcm9vdE5vZGVzOiB0aGlzLnJvb3RzIH0sIG51bGwsIDIpO1xyXG4gICAgfVxyXG4gICAgc2V0Vmlld0RhdGEoZGF0YTogc3RyaW5nLCBjbGVhcjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjbGVhcikge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMudW5kb1MgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5yZWRvUyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzID1cclxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocC5yb290Tm9kZXMpICYmIHAucm9vdE5vZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgID8gcC5yb290Tm9kZXNcclxuICAgICAgICAgICAgICAgICAgICA6IFt0aGlzLm1rUm9vdCh0aGlzLnBsdWdpbi5nZXRSb290TmFtZSgpKV07XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdHMgPSBbdGhpcy5ta1Jvb3QodGhpcy5wbHVnaW4uZ2V0Um9vdE5hbWUoKSldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yb290cy5sZW5ndGggJiYgIXRoaXMuc2VsSWQpIHRoaXMuc2VsSWQgPSB0aGlzLnJvb3RzWzBdLmlkO1xyXG4gICAgICAgIGlmICh0aGlzLnVpT2spIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWRNb2RlKSB0aGlzLnJlbmRlck1kKCk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5maXRBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnJvb3RzID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWwuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9TYXZlKCkge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdFNhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZml0QWxsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYyB8fCAhdGhpcy5yb290cy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBjb25zdCByYyA9IHRoaXMuY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgLy8gR3VhcmQ6IGNvbnRhaW5lciBub3QgeWV0IGxhaWQgb3V0IFx1MjAxNCByZXRyeSBvbiBuZXh0IGZyYW1lXHJcbiAgICAgICAgaWYgKHJjLndpZHRoIDwgMSB8fCByYy5oZWlnaHQgPCAxKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmZpdEFsbCgpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kb0xheW91dChyKTtcclxuICAgICAgICBsZXQgeDEgPSBJbmZpbml0eSxcclxuICAgICAgICAgICAgeDIgPSAtSW5maW5pdHksXHJcbiAgICAgICAgICAgIHkxID0gSW5maW5pdHksXHJcbiAgICAgICAgICAgIHkyID0gLUluZmluaXR5O1xyXG4gICAgICAgIGNvbnN0IHZpcyA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgeDEgPSBNYXRoLm1pbih4MSwgbi54IC0gbi53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICB4MiA9IE1hdGgubWF4KHgyLCBuLnggKyBuLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAgIHkxID0gTWF0aC5taW4oeTEsIG4ueSAtIG4uaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIHkyID0gTWF0aC5tYXgoeTIsIG4ueSArIG4uaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB2aXMoYyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdmlzKHIpO1xyXG4gICAgICAgIHRoaXMuem9vbSA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihyYy53aWR0aCAvICh4MiAtIHgxICsgMTAwKSwgcmMuaGVpZ2h0IC8gKHkyIC0geTEgKyAxMDApKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghaXNGaW5pdGUodGhpcy56b29tKSB8fCB0aGlzLnpvb20gPD0gMCkgdGhpcy56b29tID0gMTtcclxuICAgICAgICB0aGlzLnBhblggPSByYy53aWR0aCAvIDIgLSAoKHgxICsgeDIpIC8gMikgKiB0aGlzLnpvb207XHJcbiAgICAgICAgdGhpcy5wYW5ZID0gcmMuaGVpZ2h0IC8gMiAtICgoeTEgKyB5MikgLyAyKSAqIHRoaXMuem9vbTtcclxuICAgICAgICB0aGlzLnVwZFR4KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZm9jdXNOb2RlKG5kOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2MpIHJldHVybjtcclxuICAgICAgICBjb25zdCByID0gdGhpcy5jYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB0aGlzLnBhblggPSByLndpZHRoIC8gMiAtIG5kLnggKiB0aGlzLnpvb20gLSByLndpZHRoICogMC4xNztcclxuICAgICAgICB0aGlzLnBhblkgPSByLmhlaWdodCAvIDIgLSBuZC55ICogdGhpcy56b29tIC0gci5oZWlnaHQgKiAwLjA1O1xyXG4gICAgICAgIHRoaXMudXBkVHgoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZWZyZXNoVUkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVpT2spIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy50YkVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGJFbC5lbXB0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVGIodGhpcy50YkVsKTtcclxuICAgICAgICAgICAgdGhpcy5hcHBseVRvb2xiYXJTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVRvb2xiYXJWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgdGhpcy5hcHBseUNhbnZhc0JnKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXZQYW5lbCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWF3YWl0XHJcbiAgICBhc3luYyBvbk9wZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY3QgPSB0aGlzLmNvbnRhaW5lckVsLmNoaWxkcmVuWzFdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGN0LmVtcHR5KCk7XHJcbiAgICAgICAgY3QuYWRkQ2xhc3MoXCJtei12aWV3LWN0XCIpO1xyXG4gICAgICAgIC8vIHBhZGRpbmcgb3ZlcnJpZGUgbW92ZWQgdG8gc3R5bGVzLmNzc1xyXG4gICAgICAgIHRoaXMudGJFbCA9IGN0LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlUb29sYmFyU3R5bGUoKTtcclxuICAgICAgICB0aGlzLmJ1aWxkVGIodGhpcy50YkVsKTtcclxuICAgICAgICB0aGlzLnN2Z0N0ID0gY3QuY3JlYXRlRWwoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICBhdHRyOiB7IHRhYmluZGV4OiBcIjBcIiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3ZnQ3QuYWRkQ2xhc3MoXCJtei1zdmctY3RcIik7XHJcbiAgICAgICAgdGhpcy5jYyA9IHRoaXMuc3ZnQ3Q7XHJcbiAgICAgICAgLy8gRklYOiBwcmV2ZW50IGJyb3dzZXIgZnJvbSBzY3JvbGxpbmcgdGhlIGNvbnRhaW5lciBcdTIwMTQgcGFubmluZyB1c2VzIENTUyB0cmFuc2Zvcm0gb25seVxyXG4gICAgICAgIHRoaXMuc3ZnQ3QuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnQ3QhLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnQ3QhLnNjcm9sbExlZnQgPSAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXBwbHlDYW52YXNCZygpO1xyXG4gICAgICAgIHRoaXMuc3ZnRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgXCJzdmdcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc3ZnRWwuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgIHRoaXMuc3ZnRWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKTtcclxuICAgICAgICAvLyBTVkcgZGlzcGxheSBibG9jayBpcyBkZWZhdWx0XHJcbiAgICAgICAgdGhpcy5jYy5hcHBlbmRDaGlsZCh0aGlzLnN2Z0VsKTtcclxuICAgICAgICB0aGlzLmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcclxuICAgICAgICB0aGlzLnN2Z0VsLmFwcGVuZENoaWxkKHRoaXMuZ0VsKTtcclxuICAgICAgICB0aGlzLmVkZ2VzRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICBcImdcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ0VsLmFwcGVuZENoaWxkKHRoaXMuZWRnZXNHKTtcclxuICAgICAgICB0aGlzLm5vZGVzRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICBcImdcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ0VsLmFwcGVuZENoaWxkKHRoaXMubm9kZXNHKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXlHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgIFwiZ1wiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5nRWwuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5Ryk7XHJcbiAgICAgICAgdGhpcy5tZEN0ID0gY3QuY3JlYXRlRWwoXCJ0ZXh0YXJlYVwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICAgIHRoaXMubWRDdC5hZGRDbGFzcyhcIm16LW1kLXRhXCIpO1xyXG4gICAgICAgIHRoaXMubWRDdC5hZGRDbGFzcyhcIm16LWhpZGRlblwiKTtcclxuICAgICAgICB0aGlzLmJpbmRFdnRzKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2tkLCB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2t1LCB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5fbXUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMudWlPayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb29sYmFyVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGV2UGFuZWwoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm9vdHMubGVuZ3RoKSB0aGlzLmZpdEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNjPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXRcclxuICAgIGFzeW5jIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWl0RWRpdCkgdGhpcy5jb21taXRFZGl0KCk7XHJcbiAgICAgICAgdGhpcy5jbGVhclByb3h5KCk7XHJcbiAgICAgICAgdGhpcy51aU9rID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGFjZURvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRyYWdDdiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGl2ZVRBID0gbnVsbDtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5fa2QsIHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5fa3UsIHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLl9tdSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbUlkKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseUNhbnZhc0JnKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN2Z0N0KVxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1jYW52YXMtYmdcIjogdGhpcy5zdHlsZS5jYW52YXNCZyB9KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKFtrLCB2XSkgPT4gdGhpcy5zdmdDdC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSxcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXBwbHlUb29sYmFyU3R5bGUoKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuc3R5bGU7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcy50b29sYmFyUG9zaXRpb24gPT09IFwiYm90dG9tXCIgPyAyIDogMDtcclxuICAgICAgICBjb25zdCBib3JkZXJTaWRlID0gcy50b29sYmFyUG9zaXRpb24gPT09IFwiYm90dG9tXCIgPyBcInRvcFwiIDogXCJib3R0b21cIjtcclxuICAgICAgICBjb25zdCBiZHJDID0gcy50b29sYmFyQm9yZGVyQ29sb3IgfHwgXCIjZTBlMGUwXCI7XHJcbiAgICAgICAgY29uc3QgYmRyVyA9IHMudG9vbGJhckJvcmRlcldpZHRoID8/IDE7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIC0tIGR5bmFtaWMgdG9vbGJhciBjb2xvcnMgcmVxdWlyZSBpbmxpbmUgc3R5bGVcclxuICAgICAgICB0aGlzLnRiRWwuc3R5bGUuY3NzVGV4dCA9IGBoZWlnaHQ6NDJweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo2cHg7ZmxleC1zaHJpbms6MDtwYWRkaW5nOiR7cy50b29sYmFyUGFkVG9wfXB4ICR7cy50b29sYmFyUGFkUmlnaHR9cHggJHtzLnRvb2xiYXJQYWRCb3R0b219cHggJHtzLnRvb2xiYXJQYWRMZWZ0fXB4O2JhY2tncm91bmQ6JHtzLnRvb2xiYXJCZ0NvbG9yfTtib3JkZXItJHtib3JkZXJTaWRlfToke2Jkcld9cHggc29saWQgJHtiZHJDfTtvcmRlcjoke3Bvc307YDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlVG9vbGJhclZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGJFbClcclxuICAgICAgICAgICAgdGhpcy50YkVsLnRvZ2dsZUNsYXNzKFxyXG4gICAgICAgICAgICAgICAgXCJtei1oaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICF0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhcixcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTZWwoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbElkID09PSBpZCB8fCB0aGlzLm11bHRpU2VsLmhhcyhpZCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNsclNlbCgpIHtcclxuICAgICAgICB0aGlzLnNlbElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNlbDEoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWwuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnNlbElkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRvZ1NlbChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlTZWwuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkID09PSBpZClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsSWQgPSB0aGlzLm11bHRpU2VsLnNpemUgPyBbLi4udGhpcy5tdWx0aVNlbF1bMF0gOiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkICYmICF0aGlzLm11bHRpU2VsLmhhcyh0aGlzLnNlbElkKSlcclxuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlTZWwuYWRkKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmFkZChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFsbFNlbCgpOiBTZXQ8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgcyA9IG5ldyBTZXQodGhpcy5tdWx0aVNlbCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHMuYWRkKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc011bHRpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbFNlbCgpLnNpemUgPiAxO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjbG9zZVBvcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3BDbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcENsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wQ2xvc2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlRGV2UGFuZWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZlbG9wZXJNb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldkVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldkVsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZFbCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZGV2RWwgJiYgdGhpcy5zdmdDdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRldkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZFbC5hZGRDbGFzcyhcIm16LWRldi1wYW5lbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5zdmdDdC5hcHBlbmRDaGlsZCh0aGlzLmRldkVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2RWwpIHtcclxuICAgICAgICAgICAgY29uc3QgbmQgPSB0aGlzLnNlbElkID8gdGhpcy5mQWxsKHRoaXMuc2VsSWQpIDogbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5kZXZFbC50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbDogdGhpcy5zZWxJZD8uc3Vic3RyaW5nKDAsIDgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRJZDogdGhpcy5lZGl0SWQ/LnN1YnN0cmluZygwLCA4KSxcclxuICAgICAgICAgICAgICAgICAgICB6b29tOiArdGhpcy56b29tLnRvRml4ZWQoMyksXHJcbiAgICAgICAgICAgICAgICAgICAgcGFuOiBbK3RoaXMucGFuWC50b0ZpeGVkKDApLCArdGhpcy5wYW5ZLnRvRml4ZWQoMCldLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RzOiB0aGlzLnJvb3RzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICBub2RlOiBuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbmQudGV4dC5zdWJzdHJpbmcoMCwgMjApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiArbmQueC50b0ZpeGVkKDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiArbmQueS50b0ZpeGVkKDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogbmQuY2hpbGRyZW4ubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkVGIodGI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGIuZW1wdHkoKTtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5zdHlsZTtcclxuICAgICAgICBjb25zdCBidG5CZyA9IHMudG9vbGJhckJ0bkJnQ29sb3I7XHJcbiAgICAgICAgY29uc3QgYnRuQmRyID0gcy50b29sYmFyQnRuQm9yZGVyQ29sb3I7XHJcbiAgICAgICAgY29uc3QgYnRuQmRyUyA9IHMudG9vbGJhckJ0bkJvcmRlclN0eWxlO1xyXG4gICAgICAgIGNvbnN0IGJ0blR4ID0gcy50b29sYmFyQnRuVGV4dENvbG9yO1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICh0eHQ6IHN0cmluZywgdGlwOiBzdHJpbmcsIGZuOiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSB0Yi5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRpdGxlOiB0aXAgfSk7XHJcbiAgICAgICAgICAgIGIuYWRkQ2xhc3MoXCJtei10Yi1idG5cIik7XHJcbiAgICAgICAgICAgIGIuc3R5bGUuc2V0UHJvcGVydHkoXCItLW16LWJ0bi1ib3JkZXJcIiwgYDFweCAke2J0bkJkclN9ICR7YnRuQmRyfWApO1xyXG4gICAgICAgICAgICBiLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tei1idG4tYmdcIiwgYnRuQmcpO1xyXG4gICAgICAgICAgICBiLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tei1idG4tY29sb3JcIiwgYnRuVHgpO1xyXG4gICAgICAgICAgICBiLmlubmVyVGV4dCA9IHR4dDtcclxuICAgICAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZm4pO1xyXG4gICAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICBiLmFkZENsYXNzKFwibXotdGItYnRuLWhvdmVyXCIpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICBiLnJlbW92ZUNsYXNzKFwibXotdGItYnRuLWhvdmVyXCIpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gYjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bih0KFwidGIucm9vdFwiKSwgdChcInRiLm5ld1Jvb3RcIiksICgpID0+IHRoaXMuYWRkUm9vdCgpKTtcclxuICAgICAgICBidG4odChcInRiLnVuZG9cIiksIHQoXCJ0Yi50aXBVbmRvXCIpLCAoKSA9PiB0aGlzLnVuZG8oKSk7XHJcbiAgICAgICAgYnRuKHQoXCJ0Yi5yZWRvXCIpLCB0KFwidGIudGlwUmVkb1wiKSwgKCkgPT4gdGhpcy5yZWRvKCkpO1xyXG4gICAgICAgIGNvbnN0IHNlcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHRiLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBkLmFkZENsYXNzKFwibXotdGItc2VwXCIpO1xyXG4gICAgICAgICAgICBkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tei1zZXAtY29sb3JcIiwgYnRuQmRyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNlcCgpO1xyXG4gICAgICAgIHRoaXMubWRCdG4gPSBidG4odChcInRiLm1kXCIpLCB0KFwidGIudGlwTWRcIiksICgpID0+IHRoaXMudG9nZ2xlTWQoKSk7XHJcbiAgICAgICAgYnRuKHQoXCJ0Yi5zdHlsZVwiKSwgdChcInRiLnRpcFN0eWxlXCIpLCAoKSA9PiB0aGlzLnNob3dTdHlsZU1vZGFsKCkpO1xyXG4gICAgICAgIGJ0bihcIlx1RDgzRFx1REM1MyBcIiArIHQoXCJ0Yi5mb2N1c1wiKSwgdChcInRiLnRpcEZvY3VzXCIpLCAoKSA9PiB0aGlzLmZvY3VzU2VsKCkpO1xyXG4gICAgICAgIGJ0bihcIlx1RDgzRFx1REQwRCBcIiArIHQoXCJ0Yi5zZWFyY2hcIiksIHQoXCJ0Yi50aXBTZWFyY2hcIiksICgpID0+XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VhcmNoKCksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBidG4odChcInRiLnNldHRpbmdzXCIpLCB0KFwidGIudGlwU2V0dGluZ3NcIiksICgpID0+XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLm9wZW5QbHVnaW5TZXR0aW5ncygpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2VwKCk7XHJcbiAgICAgICAgYnRuKFwiXHUyMjEyXCIsIHQoXCJ0Yi56b29tT3V0XCIpLCAoKSA9PiB0aGlzLnpvb21CeSgwLjkpKTtcclxuICAgICAgICB0aGlzLnpvb21MYWJlbCA9IHRiLmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLnpvb21MYWJlbC5hZGRDbGFzcyhcIm16LXRiLXpvb21cIik7XHJcbiAgICAgICAgdGhpcy56b29tTGFiZWwuaW5uZXJUZXh0ID0gTWF0aC5yb3VuZCh0aGlzLnpvb20gKiAxMDApICsgXCIlXCI7XHJcbiAgICAgICAgdGhpcy56b29tTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuem9vbVRvKDEpKTtcclxuICAgICAgICBidG4oXCIrXCIsIHQoXCJ0Yi56b29tSW5cIiksICgpID0+IHRoaXMuem9vbUJ5KDEuMSkpO1xyXG4gICAgICAgIGNvbnN0IGggPSB0Yi5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgaC5hZGRDbGFzcyhcIm16LXRiLWhlbHBcIik7XHJcbiAgICAgICAgaC5pbm5lclRleHQgPSB0KFwidGIuaGVscFwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZm9jdXNTZWwoKSB7XHJcbiAgICAgICAgbGV0IG5kOiBNaW5kTm9kZURhdGEgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5zZWxJZCkgbmQgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgaWYgKCFuZCAmJiB0aGlzLnJvb3RzLmxlbmd0aCkgbmQgPSB0aGlzLnJvb3RzW3RoaXMucm9vdHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKG5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNOb2RlKG5kKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRvZ2dsZU1kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1kTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1kTW9kZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZEJ0bikgdGhpcy5tZEJ0bi5pbm5lclRleHQgPSB0KFwidGIubWRcIik7XHJcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgZnJvbSBzbmFwc2hvdCBpZiB0ZXh0IHVuY2hhbmdlZCwgZWxzZSBwYXJzZVxyXG4gICAgICAgICAgICBjb25zdCBuZXdNZCA9IHRoaXMubWRDdC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3Qgb2xkTWQgPSB0aGlzLm1kU25hcHNob3QgPyB0aGlzLnJvb3RzMm1kRnJvbVNuYXAoKSA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChvbGRNZCAmJiBuZXdNZCA9PT0gb2xkTWQpIHtcclxuICAgICAgICAgICAgICAgIC8qIG5vIGNoYW5nZXMsIGtlZXAgb3JpZ2luYWwgcm9vdHMgKi9cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VNZChuZXdNZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tZFNuYXBzaG90ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5tZEN0LnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnN2Z0N0LnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHRoaXMuZG9MYXlvdXQocik7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tbWl0RWRpdCkgdGhpcy5jb21taXRFZGl0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubWRNb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWRCdG4pIHRoaXMubWRCdG4uaW5uZXJUZXh0ID0gdChcInRiLm1hcFwiKTtcclxuICAgICAgICAgICAgdGhpcy5tZFNuYXBzaG90ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5yb290cyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnQ3QudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWRDdC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWRDdC52YWx1ZSA9IHRoaXMucm9vdHMybWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJvb3RzMm1kRnJvbVNuYXAoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1kU25hcHNob3QpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJzID0gSlNPTi5wYXJzZSh0aGlzLm1kU25hcHNob3QpIGFzIE1pbmROb2RlRGF0YVtdO1xyXG4gICAgICAgICAgICBsZXQgbSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IG4ybWQgPSAoXHJcbiAgICAgICAgICAgICAgICBuZDogTWluZE5vZGVEYXRhLFxyXG4gICAgICAgICAgICAgICAgZDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgbWFya2VyOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eCA9IG5kLnRleHQucmVwbGFjZSgvXFxuL2csIFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGwgPSBcIlxcdFwiLnJlcGVhdChkIC0gMSkgKyBtYXJrZXIgKyBcIiBcIiArIHR4O1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBsICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuZC5jaGlsZHJlbikgciArPSBuMm1kKGMsIGQgKyAxLCBtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q2ggPSByLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlICE9PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0Q2ggPSByLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlID09PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBtICs9IHIudGV4dC5yZXBsYWNlKC9cXG4vZywgXCIgXCIpICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiByaWdodENoKSBtICs9IG4ybWQoYywgMSwgXCItXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGxlZnRDaCkgbSArPSBuMm1kKGMsIDEsIFwiKlwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgcnMubGVuZ3RoIC0gMSkgbSArPSBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJvb3RzMm1kKCkge1xyXG4gICAgICAgIGxldCBtID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMucm9vdHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q2ggPSByLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlICE9PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZnRDaCA9IHIuY2hpbGRyZW4uZmlsdGVyKChjKSA9PiBjLnNpZGUgPT09IFwibGVmdFwiKTtcclxuICAgICAgICAgICAgbSArPSByLnRleHQucmVwbGFjZSgvXFxuL2csIFwiIFwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiByaWdodENoKSBtICs9IHRoaXMubjJtZChjLCAxLCBcIi1cIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBsZWZ0Q2gpIG0gKz0gdGhpcy5uMm1kKGMsIDEsIFwiKlwiKTtcclxuICAgICAgICAgICAgaWYgKGkgPCB0aGlzLnJvb3RzLmxlbmd0aCAtIDEpIG0gKz0gXCJcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG4ybWQobmQ6IE1pbmROb2RlRGF0YSwgZDogbnVtYmVyLCBtYXJrZXI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdHggPSBuZC50ZXh0LnJlcGxhY2UoL1xcbi9nLCBcIiBcIik7XHJcbiAgICAgICAgY29uc3QgbCA9IFwiXFx0XCIucmVwZWF0KGQgLSAxKSArIG1hcmtlciArIFwiIFwiICsgdHg7XHJcbiAgICAgICAgbGV0IHIgPSBsICsgXCJcXG5cIjtcclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgbmQuY2hpbGRyZW4pIHIgKz0gdGhpcy5uMm1kKGMsIGQgKyAxLCBtYXJrZXIpO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW5kZXJNZCgpIHtcclxuICAgICAgICB0aGlzLm1kQ3QudmFsdWUgPSB0aGlzLnJvb3RzMm1kKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHBhcnNlTWQodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobCkgPT4gbC50cmltKCkpO1xyXG4gICAgICAgIGlmICghbGluZXMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbnI6IE1pbmROb2RlRGF0YVtdID0gW107XHJcbiAgICAgICAgbGV0IGN1cjogTWluZE5vZGVEYXRhIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgY29uc3Qgc3RrOiBbbnVtYmVyLCBNaW5kTm9kZURhdGFdW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgbSA9IGxpbmUubWF0Y2goL14oXFx0KikoWy0qXSlcXHMrKC4qKS8pO1xyXG4gICAgICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVwID0gbVsxXS5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlciA9IG1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHh0ID0gbVszXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWRlID0gbWFya2VyID09PSBcIipcIiA/IFwibGVmdFwiIDogXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmQ6IE1pbmROb2RlRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0eHQsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbGNXKHR4dCwgZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5jYWxjSCh0eHQsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoc3RrLmxlbmd0aCAmJiBzdGtbc3RrLmxlbmd0aCAtIDFdWzBdID49IGRlcCkgc3RrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ay5sZW5ndGgpIHN0a1tzdGsubGVuZ3RoIC0gMV1bMV0uY2hpbGRyZW4ucHVzaChuZCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXIpIGN1ci5jaGlsZHJlbi5wdXNoKG5kKTtcclxuICAgICAgICAgICAgICAgIHN0ay5wdXNoKFtkZXAsIG5kXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eHQgPSBsaW5lLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlmICghdHh0KSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMubWtSb290KHR4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyLnggPSBucltuci5sZW5ndGggLSAxXS54O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1ci55ID0gbnJbbnIubGVuZ3RoIC0gMV0ueSArIDIwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5yLnB1c2goY3VyKTtcclxuICAgICAgICAgICAgICAgIHN0ay5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgc3RrLnB1c2goWzAsIGN1cl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuci5sZW5ndGgpIHRoaXMucm9vdHMgPSBucjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFJvb3QodGV4dD86IHN0cmluZywgeD86IG51bWJlciwgeT86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICBjb25zdCBuID0gdGhpcy5ta1Jvb3QodGV4dCA/PyB0aGlzLnBsdWdpbi5nZXRSb290TmFtZSgpKTtcclxuICAgICAgICBjb25zdCBsYXN0ID0gdGhpcy5yb290c1t0aGlzLnJvb3RzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIC8vIENvbXB1dGUgYm90dG9tLW1vc3QgWSBpbmNsdWRpbmcgYWxsIGRlc2NlbmRhbnRzIG9mIGxhc3Qgcm9vdFxyXG4gICAgICAgIGxldCBtYXhZID0gMDtcclxuICAgICAgICBpZiAobGFzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvTGF5b3V0KGxhc3QpO1xyXG4gICAgICAgICAgICBjb25zdCBmaW5kTWF4WSA9IChuZDogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3QgPSBuZC55ICsgbmQuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgIGlmIChib3QgPiBtYXhZKSBtYXhZID0gYm90O1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG5kLmNoaWxkcmVuKSBmaW5kTWF4WShjKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmluZE1heFkobGFzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG4ueCA9IHggPz8gKGxhc3QgPyBsYXN0LnggOiAwKTtcclxuICAgICAgICBuLnkgPSB5ID8/IChsYXN0ID8gbWF4WSArIDgwIDogMCk7XHJcbiAgICAgICAgdGhpcy5yb290cy5wdXNoKG4pO1xyXG4gICAgICAgIHRoaXMuc2VsMShuLmlkKTtcclxuICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuZWRpdE9uQ3JlYXRlKSB0aGlzLmVkaXRJZCA9IG4uaWQ7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZShuKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNhdmVTKCkge1xyXG4gICAgICAgIHRoaXMudW5kb1MucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLnJvb3RzKSk7XHJcbiAgICAgICAgaWYgKHRoaXMudW5kb1MubGVuZ3RoID4gNTApIHRoaXMudW5kb1Muc2hpZnQoKTtcclxuICAgICAgICB0aGlzLnJlZG9TID0gW107XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVuZG8oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVuZG9TLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmVkb1MucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLnJvb3RzKSk7XHJcbiAgICAgICAgdGhpcy5yb290cyA9IEpTT04ucGFyc2UodGhpcy51bmRvUy5wb3AoKSEpO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbElkICYmICF0aGlzLmZBbGwodGhpcy5zZWxJZCkpIHRoaXMuc2VsSWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWwuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnJlY2FsY0FsbFNpemVzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZWRvKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWRvUy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICB0aGlzLnVuZG9TLnB1c2goSlNPTi5zdHJpbmdpZnkodGhpcy5yb290cykpO1xyXG4gICAgICAgIHRoaXMucm9vdHMgPSBKU09OLnBhcnNlKHRoaXMucmVkb1MucG9wKCkhKTtcclxuICAgICAgICB0aGlzLnJlY2FsY0FsbFNpemVzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqIFJlLW1lYXN1cmUgZXZlcnkgbm9kZSdzIHdpZHRoL2hlaWdodCBiYXNlZCBvbiBjdXJyZW50IHN0eWxlIHNvIHRoYXRcclxuICAgICAqICB0ZXh0IG5ldmVyIGdldHMgY2xpcHBlZCBvciBmb3JjZS13cmFwcGVkIGFmdGVyIHVuZG8vcmVkby4gKi9cclxuICAgIHByaXZhdGUgcmVjYWxjQWxsU2l6ZXMoKSB7XHJcbiAgICAgICAgY29uc3Qgd2FsayA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNSID0gISFuLmlzUm9vdDtcclxuICAgICAgICAgICAgbi53aWR0aCA9IHRoaXMuY2FsY1cobi50ZXh0LCBpc1IpO1xyXG4gICAgICAgICAgICBuLmhlaWdodCA9IHRoaXMuY2FsY0gobi50ZXh0LCBpc1IpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgd2FsayhjKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB3YWxrKHIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmQWxsKGlkOiBzdHJpbmcpOiBNaW5kTm9kZURhdGEgfCBudWxsIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICBjb25zdCBmID0gdGhpcy5mTihpZCwgcik7XHJcbiAgICAgICAgICAgIGlmIChmKSByZXR1cm4gZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXBwbHlTdHlsZShwOiBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pIHtcclxuICAgICAgICB0aGlzLnN0eWxlID0geyAuLi50aGlzLnN0eWxlLCAuLi5wIH07XHJcbiAgICAgICAgdGhpcy5wbHVnaW4udXBkYXRlU3R5bGUocCk7XHJcbiAgICAgICAgdGhpcy5hcHBseUNhbnZhc0JnKCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJQb3NpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhclBhZFRvcCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhclBhZFJpZ2h0ICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyUGFkQm90dG9tICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyUGFkTGVmdCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhckJnQ29sb3IgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJCb3JkZXJDb2xvciAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhckJvcmRlcldpZHRoICE9PSB1bmRlZmluZWRcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlUb29sYmFyU3R5bGUoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHAudG9vbGJhckJ0bkJnQ29sb3IgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJCdG5Cb3JkZXJTdHlsZSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhckJ0bkJvcmRlckNvbG9yICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyQnRuVGV4dENvbG9yICE9PSB1bmRlZmluZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy50YkVsLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRUYih0aGlzLnRiRWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5VG9vbGJhclN0eWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlY2FsY3VsYXRlIGFsbCBub2RlIHNpemVzIHdoZW4gZm9udC9sYXlvdXQgcmVsYXRlZCBzdHlsZXMgY2hhbmdlXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBwLm5vZGVGb250U2l6ZSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAucm9vdEZvbnRTaXplICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5ub2RlRm9udEZhbWlseSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAucm9vdEZvbnRGYW1pbHkgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLm5vZGVNaW5XaWR0aCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAubm9kZU1pbkhlaWdodCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAucm9vdE1pbldpZHRoICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5yb290TWluSGVpZ2h0ICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5ub2RlUGFkWCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAubm9kZUxpbmVIZWlnaHQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnJlY2FsY0FsbE5vZGVTaXplcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZWNhbGNBbGxOb2RlU2l6ZXMoKSB7XHJcbiAgICAgICAgY29uc3QgdmlzaXQgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUiA9ICEhbi5pc1Jvb3Q7XHJcbiAgICAgICAgICAgIG4ud2lkdGggPSB0aGlzLmNhbGNXKG4udGV4dCB8fCBcIiBcIiwgaXNSKTtcclxuICAgICAgICAgICAgbi5oZWlnaHQgPSB0aGlzLmNhbGNIKG4udGV4dCB8fCBcIiBcIiwgaXNSKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHZpc2l0KGMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHZpc2l0KHIpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3NpZ25SYWluYm93Q29sb3IocGFyZW50OiBNaW5kTm9kZURhdGEsIGNoaWxkOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3R5bGUuY29ubmVjdGlvblJhaW5ib3cgfHwgIXBhcmVudC5pc1Jvb3QpIHJldHVybjtcclxuICAgICAgICBpZiAoIWNoaWxkLmNvbm5lY3Rpb25Db2xvcikge1xyXG4gICAgICAgICAgICBjb25zdCByYiA9IHRoaXMuZ2V0UmFpbmJvdygpO1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgICAgIGNoaWxkLmNvbm5lY3Rpb25Db2xvciA9XHJcbiAgICAgICAgICAgICAgICByYlsoaWR4ID49IDAgPyBpZHggOiBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoKSAlIHJiLmxlbmd0aF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBtYXRjaEtleShlOiBLZXlib2FyZEV2ZW50LCBjb21ibzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBjb21iby50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiK1wiKTtcclxuICAgICAgICBjb25zdCBuZWVkQ3RybCA9IHBhcnRzLmluY2x1ZGVzKFwiY3RybFwiKTtcclxuICAgICAgICBjb25zdCBuZWVkU2hpZnQgPSBwYXJ0cy5pbmNsdWRlcyhcInNoaWZ0XCIpO1xyXG4gICAgICAgIGNvbnN0IG5lZWRBbHQgPSBwYXJ0cy5pbmNsdWRlcyhcImFsdFwiKTtcclxuICAgICAgICBjb25zdCBtYWluS2V5ID1cclxuICAgICAgICAgICAgcGFydHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHApID0+IHAgIT09IFwiY3RybFwiICYmIHAgIT09IFwic2hpZnRcIiAmJiBwICE9PSBcImFsdFwiLFxyXG4gICAgICAgICAgICApWzBdIHx8IFwiXCI7XHJcbiAgICAgICAgaWYgKG5lZWRDdHJsICE9PSAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobmVlZFNoaWZ0ICE9PSBlLnNoaWZ0S2V5KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG5lZWRBbHQgIT09IGUuYWx0S2V5KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgZUtleSA9IGUua2V5ID09PSBcIiBcIiA/IFwic3BhY2VcIiA6IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgZUNvZGUgPSBlLmNvZGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAvLyBNYXAgZS5jb2RlIHRvIGJhc2UgdW5zaGlmdGVkIGtleSBmb3IgcmVsaWFibGUgbWF0Y2hpbmdcclxuICAgICAgICBjb25zdCBjb2RlTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICAgICAgICAgICBlcXVhbDogXCI9XCIsXHJcbiAgICAgICAgICAgIG1pbnVzOiBcIi1cIixcclxuICAgICAgICAgICAgZGlnaXQwOiBcIjBcIixcclxuICAgICAgICAgICAgZGlnaXQxOiBcIjFcIixcclxuICAgICAgICAgICAgZGlnaXQyOiBcIjJcIixcclxuICAgICAgICAgICAgZGlnaXQzOiBcIjNcIixcclxuICAgICAgICAgICAgZGlnaXQ0OiBcIjRcIixcclxuICAgICAgICAgICAgZGlnaXQ1OiBcIjVcIixcclxuICAgICAgICAgICAgZGlnaXQ2OiBcIjZcIixcclxuICAgICAgICAgICAgZGlnaXQ3OiBcIjdcIixcclxuICAgICAgICAgICAgZGlnaXQ4OiBcIjhcIixcclxuICAgICAgICAgICAgZGlnaXQ5OiBcIjlcIixcclxuICAgICAgICAgICAgYnJhY2tldGxlZnQ6IFwiW1wiLFxyXG4gICAgICAgICAgICBicmFja2V0cmlnaHQ6IFwiXVwiLFxyXG4gICAgICAgICAgICBzZW1pY29sb246IFwiO1wiLFxyXG4gICAgICAgICAgICBxdW90ZTogXCInXCIsXHJcbiAgICAgICAgICAgIGJhY2txdW90ZTogXCJgXCIsXHJcbiAgICAgICAgICAgIGNvbW1hOiBcIixcIixcclxuICAgICAgICAgICAgcGVyaW9kOiBcIi5cIixcclxuICAgICAgICAgICAgc2xhc2g6IFwiL1wiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYmFzZUtleSA9IGNvZGVNYXBbZUNvZGVdIHx8IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIGVLZXkgPT09IG1haW5LZXkgfHwgZUNvZGUgPT09IG1haW5LZXkgfHwgYmFzZUtleSA9PT0gbWFpbktleTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBcdTI1NTBcdTI1NTBcdTI1NTAgTW9kYWxzIC0gYWxsIGNsb3NlIG9uIEVzYyBcdTI1NTBcdTI1NTBcdTI1NTBcclxuICAgIHByaXZhdGUgc2hvd1N0eWxlTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcCgpO1xyXG4gICAgICAgIGNvbnN0IG92ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBvdi5hZGRDbGFzcyhcIm16LW1vZGFsLW92ZXJsYXlcIik7XHJcbiAgICAgICAgY29uc3QgbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbS5hZGRDbGFzcyhcIm16LW1vZGFsXCIpO1xyXG4gICAgICAgIG0uY3JlYXRlRWwoXCJoM1wiLCB7IHRleHQ6IHQoXCJzbS50aXRsZVwiKSB9KS5hZGRDbGFzcyhcIm16LW1vZGFsLXRpdGxlXCIpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBvdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgbS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3BDbG9zZSA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBvcENsb3NlID0gY2xvc2U7XHJcbiAgICAgICAgb3YuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcclxuICAgICAgICBtLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwia2V5ZG93blwiLFxyXG4gICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNlYyA9IChpY29uOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcyA9IG0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHMuYWRkQ2xhc3MoXCJtei1tb2RhbC1zZWNcIik7XHJcbiAgICAgICAgICAgIHMuY3JlYXRlRWwoXCJkaXZcIiwgeyB0ZXh0OiBpY29uICsgXCIgXCIgKyB0aXRsZSB9KS5hZGRDbGFzcyhcclxuICAgICAgICAgICAgICAgIFwibXotbW9kYWwtc2VjLWhkclwiLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IFIgPSAoXHJcbiAgICAgICAgICAgIHA6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgICAgICBsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGs6IGtleW9mIE1pbmRNYXBTdHlsZSxcclxuICAgICAgICAgICAgdHA6IHN0cmluZyxcclxuICAgICAgICAgICAgbz86IHtcclxuICAgICAgICAgICAgICAgIG1pbj86IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIG1heD86IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM/OiBzdHJpbmdbXTtcclxuICAgICAgICAgICAgICAgIHN0ZXA/OiBudW1iZXI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHAuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJvdy5hZGRDbGFzcyhcIm16LW1vZGFsLXJvd1wiKTtcclxuICAgICAgICAgICAgcm93LmNyZWF0ZUVsKFwibGFiZWxcIiwgeyB0ZXh0OiBsIH0pLmFkZENsYXNzKFwibXotbW9kYWwtbGJsXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjdiA9IHRoaXMuc3R5bGVba107XHJcbiAgICAgICAgICAgIGlmICh0cCA9PT0gXCJjb2xvclwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gcm93LmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGkudHlwZSA9IFwiY29sb3JcIjtcclxuICAgICAgICAgICAgICAgIGkudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjdiA9PT0gXCJzdHJpbmdcIiAmJiBjdi5zdGFydHNXaXRoKFwidmFyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBTdHJpbmcoY3YpO1xyXG4gICAgICAgICAgICAgICAgaS5hZGRDbGFzcyhcIm16LW1vZGFsLWNvbG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHsgW2tdOiBpLnZhbHVlIH0gYXMgUGFydGlhbDxNaW5kTWFwU3R5bGU+KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHAgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSByb3cuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaS50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICAgICAgICAgIGkubWluID0gU3RyaW5nKG8/Lm1pbiA/PyAwKTtcclxuICAgICAgICAgICAgICAgIGkubWF4ID0gU3RyaW5nKG8/Lm1heCA/PyA5OTkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG8/LnN0ZXApIGkuc3RlcCA9IFN0cmluZyhvLnN0ZXApO1xyXG4gICAgICAgICAgICAgICAgaS52YWx1ZSA9IFN0cmluZyhjdik7XHJcbiAgICAgICAgICAgICAgICBpLmFkZENsYXNzKFwibXotbW9kYWwtbnVtXCIpO1xyXG4gICAgICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2tdOiBOdW1iZXIoaS52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0cCA9PT0gXCJzZWxlY3RcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IHJvdy5jcmVhdGVFbChcInNlbGVjdFwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHMuYWRkQ2xhc3MoXCJtei1tb2RhbC1zZWxcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHYgb2Ygbz8ub3B0aW9ucyA/PyBbXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBvcC52YWx1ZSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AudGV4dCA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT09IFN0cmluZyhjdikpIG9wLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzLmFwcGVuZENoaWxkKG9wKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7IFtrXTogcy52YWx1ZSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRwID09PSBcInRvZ2dsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYiA9IHJvdy5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBjYi50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgICAgICAgICAgY2IuY2hlY2tlZCA9ICEhY3Y7XHJcbiAgICAgICAgICAgICAgICBjYi5hZGRDbGFzcyhcIm16LW1vZGFsLWNoa1wiKTtcclxuICAgICAgICAgICAgICAgIGNiLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBba106IGNiLmNoZWNrZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgczEgPSBzZWMoXCJcdUQ4M0RcdURDRTZcIiwgdChcInNtLmNoaWxkXCIpKTtcclxuICAgICAgICBSKHMxLCB0KFwic20uYmdcIiksIFwibm9kZUJnQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHMxLCB0KFwic20udGV4dFwiKSwgXCJub2RlVGV4dENvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmZvbnRTaXplXCIpLCBcIm5vZGVGb250U2l6ZVwiLCBcIm51bWJlclwiLCB7IG1pbjogMTAsIG1heDogMzIgfSk7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmZvbnRcIiksIFwibm9kZUZvbnRGYW1pbHlcIiwgXCJzZWxlY3RcIiwgeyBvcHRpb25zOiBGT05UX0xJU1QgfSk7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmJvcmRlclN0eWxlXCIpLCBcIm5vZGVCb3JkZXJTdHlsZVwiLCBcInNlbGVjdFwiLCB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInNvbGlkXCIsIFwiZGFzaGVkXCIsIFwiZG90dGVkXCIsIFwiZG91YmxlXCIsIFwibm9uZVwiXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMxLCB0KFwic20uYm9yZGVyQ29sb3JcIiksIFwibm9kZUJvcmRlckNvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmJvcmRlcldpZHRoXCIpLCBcIm5vZGVCb3JkZXJXaWR0aFwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiA4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczEsIHQoXCJzbS5ib3JkZXJSYWRpdXNcIiksIFwibm9kZUJvcmRlclJhZGl1c1wiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiAzMixcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMxLCB0KFwic20ubWluV2lkdGhcIiksIFwibm9kZU1pbldpZHRoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAzMCxcclxuICAgICAgICAgICAgbWF4OiA0MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMSwgdChcInNtLm1pbkhlaWdodFwiKSwgXCJub2RlTWluSGVpZ2h0XCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAyMCxcclxuICAgICAgICAgICAgbWF4OiAyMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgczIgPSBzZWMoXCJcdUQ4M0NcdURGRTBcIiwgdChcInNtLnJvb3RcIikpO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5iZ1wiKSwgXCJyb290QmdDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS50ZXh0XCIpLCBcInJvb3RUZXh0Q29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHMyLCB0KFwic20uZm9udFNpemVcIiksIFwicm9vdEZvbnRTaXplXCIsIFwibnVtYmVyXCIsIHsgbWluOiAxMCwgbWF4OiAzMiB9KTtcclxuICAgICAgICBSKHMyLCB0KFwic20uZm9udFwiKSwgXCJyb290Rm9udEZhbWlseVwiLCBcInNlbGVjdFwiLCB7IG9wdGlvbnM6IEZPTlRfTElTVCB9KTtcclxuICAgICAgICBSKHMyLCB0KFwic20uYm9yZGVyU3R5bGVcIiksIFwicm9vdEJvcmRlclN0eWxlXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogW1wic29saWRcIiwgXCJkYXNoZWRcIiwgXCJkb3R0ZWRcIiwgXCJkb3VibGVcIiwgXCJub25lXCJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5ib3JkZXJDb2xvclwiKSwgXCJyb290Qm9yZGVyQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHMyLCB0KFwic20uYm9yZGVyV2lkdGhcIiksIFwicm9vdEJvcmRlcldpZHRoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMiwgdChcInNtLmJvcmRlclJhZGl1c1wiKSwgXCJyb290Qm9yZGVyUmFkaXVzXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDMyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5taW5XaWR0aFwiKSwgXCJyb290TWluV2lkdGhcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDUwLFxyXG4gICAgICAgICAgICBtYXg6IDQwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMyLCB0KFwic20ubWluSGVpZ2h0XCIpLCBcInJvb3RNaW5IZWlnaHRcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDIwLFxyXG4gICAgICAgICAgICBtYXg6IDIwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzMyA9IHNlYyhcIlx1RDgzRFx1REQxN1wiLCB0KFwic20uY29ublwiKSk7XHJcbiAgICAgICAgUihzMywgdChcInNtLnR5cGVcIiksIFwiY29ubmVjdGlvblN0eWxlXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogQ09OTkVDVElPTl9TVFlMRVMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMywgdChcInNtLmNvbG9yXCIpLCBcImNvbm5lY3Rpb25Db2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczMsIHQoXCJzbS53aWR0aFwiKSwgXCJjb25uZWN0aW9uV2lkdGhcIiwgXCJudW1iZXJcIiwgeyBtaW46IDEsIG1heDogOCB9KTtcclxuICAgICAgICBSKHMzLCB0KFwic20uY29ubkxlbmd0aFwiKSwgXCJjb25uZWN0aW9uTGVuZ3RoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAzMCxcclxuICAgICAgICAgICAgbWF4OiAzMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMywgdChcInNtLm5vZGVEaXJcIiksIFwibm9kZURpcmVjdGlvblwiLCBcInNlbGVjdFwiLCB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInJpZ2h0XCIsIFwibGVmdFwiLCBcImJvdGhcIl0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gUmFpbmJvdzogbGlzdCB3aXRoIHJlYWwgY29sb3IgZG90cywgZGVsZXRlIGJ1dHRvbnMsIG5vIG1vZGFsIHJlb3BlblxyXG4gICAgICAgIGNvbnN0IGN0Um93ID0gczMuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgY3RSb3cuYWRkQ2xhc3MoXCJtei1yYWluYm93LWN0XCIpO1xyXG4gICAgICAgIGN0Um93XHJcbiAgICAgICAgICAgIC5jcmVhdGVFbChcImxhYmVsXCIsIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHVEODNDXHVERjA4IFwiICsgdChcInNtLnJhaW5ib3dcIiksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctbGJsXCIpO1xyXG4gICAgICAgIGNvbnN0IGFsbFBhbHM6IHsgW2s6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7XHJcbiAgICAgICAgICAgIC4uLlJBSU5CT1dfUEFMRVRURVMsXHJcbiAgICAgICAgICAgIC4uLih0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzIHx8IHt9KSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBjdXJQYWwgPSB0aGlzLnN0eWxlLmNvbm5lY3Rpb25SYWluYm93XHJcbiAgICAgICAgICAgID8gdGhpcy5zdHlsZS5yYWluYm93UGFsZXR0ZVxyXG4gICAgICAgICAgICA6IFwib2ZmXCI7XHJcbiAgICAgICAgY29uc3QgbGlzdFdyYXAgPSBjdFJvdy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBsaXN0V3JhcC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctbGlzdFwiKTtcclxuICAgICAgICBjb25zdCByZWJ1aWxkTGlzdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGlzdFdyYXAuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZCA9IHtcclxuICAgICAgICAgICAgICAgIC4uLlJBSU5CT1dfUEFMRVRURVMsXHJcbiAgICAgICAgICAgICAgICAuLi4odGhpcy5zdHlsZS5jdXN0b21SYWluYm93cyB8fCB7fSksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IG1rSXRlbSA9IChcclxuICAgICAgICAgICAgICAgIGtleTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIGNvbG9yczogc3RyaW5nW10gfCBudWxsLFxyXG4gICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ID0gbGlzdFdyYXAuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBpdC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIGl0LnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIsIGtleSA9PT0gY3VyUGFsKTtcclxuICAgICAgICAgICAgICAgIGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBjdXJQYWwpIGl0LmFkZENsYXNzKFwibXotcmFpbmJvdy1ob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0LnRvZ2dsZUNsYXNzKFwibXotcmFpbmJvdy1ob3ZlclwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5tID0gaXQuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbGFiZWwgfSk7XHJcbiAgICAgICAgICAgICAgICBubS5hZGRDbGFzcyhcIm16LXJhaW5ib3ctaXRlbS1sYmxcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG90cyA9IGl0LmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb3RzLmFkZENsYXNzKFwibXotcmFpbmJvdy1kb3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBjb2xvcnMuc2xpY2UoMCwgMTApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBkb3RzLmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctZG90XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1kb3QtY29sb3JcIjogYyB9KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFtrLCB2XSkgPT4gZC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWwtZGVsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJvZmZcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoeyBjb25uZWN0aW9uUmFpbmJvdzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clBhbCA9IFwib2ZmXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25SYWluYm93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFpbmJvd1BhbGV0dGU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clBhbCA9IGtleTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVidWlsZExpc3QoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIGJ1dHRvbiAobm90IGZvciBTb2xpZCBvciBidWlsdC1pbiBwYWxldHRlcylcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IFwib2ZmXCIgJiYgIVJBSU5CT1dfUEFMRVRURVNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbCA9IGl0LmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IFwiXHUyNzE1XCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsLmNsYXNzTmFtZSA9IFwicGFsLWRlbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbC5hZGRDbGFzcyhcIm16LXJlc2V0LWJ0blwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3IgPSB7IC4uLih0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzIHx8IHt9KSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3Jba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHsgY3VzdG9tUmFpbmJvd3M6IGNyIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyUGFsID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1clBhbCA9IFwib2ZmXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoeyBjb25uZWN0aW9uUmFpbmJvdzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVidWlsZExpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbWtJdGVtKFwib2ZmXCIsIFwiU29saWRcIiwgbnVsbCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW25hbWUsIGNvbG9yc10gb2YgT2JqZWN0LmVudHJpZXModXBkYXRlZCkpXHJcbiAgICAgICAgICAgICAgICBta0l0ZW0obmFtZSwgbmFtZSwgY29sb3JzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYnVpbGRMaXN0KCk7XHJcbiAgICAgICAgLy8gQWRkIGN1c3RvbSBwYWxldHRlXHJcbiAgICAgICAgY29uc3QgYWRkUm93ID0gY3RSb3cuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgYWRkUm93LmFkZENsYXNzKFwibXotcmFpbmJvdy1jdFwiKTtcclxuICAgICAgICBjb25zdCBhZGRCdG4gPSBhZGRSb3cuY3JlYXRlRWwoXCJidXR0b25cIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiB0KFwic20uY3VzdG9tUmFpbmJvd1wiKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhZGRCdG4uYWRkQ2xhc3MoXCJtei1tb2RhbC1idG5cIiwgXCJtei1tb2RhbC1idG4tc2Vjb25kYXJ5XCIpO1xyXG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBhZGRCdG4udG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVkID0gYWRkUm93LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBlZC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3RcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVJbnAgPSBlZC5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG5hbWVJbnAudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICBuYW1lSW5wLnBsYWNlaG9sZGVyID0gXCJQYWxldHRlIG5hbWVcIjtcclxuICAgICAgICAgICAgbmFtZUlucC52YWx1ZSA9IFwiQ3VzdG9tXCI7XHJcbiAgICAgICAgICAgIG5hbWVJbnAuYWRkQ2xhc3MoXCJtei1yYWluYm93LWNyLW5hbWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IFtcclxuICAgICAgICAgICAgICAgIFwiI2ZmMDAwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjMDBmZjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIiMwMDAwZmZcIixcclxuICAgICAgICAgICAgICAgIFwiI2ZmZmYwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjZmYwMGZmXCIsXHJcbiAgICAgICAgICAgICAgICBcIiMwMGZmZmZcIixcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY29uc3QgY0RpdiA9IGVkLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjRGl2LmFkZENsYXNzKFwibXotcmFpbmJvdy1jci1yb3dcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYnVpbGQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjRGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNpID0gY0Rpdi5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2kudHlwZSA9IFwiY29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICBjaS52YWx1ZSA9IGNvbG9yc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBjaS5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3ItaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2kuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yc1tpXSA9IGNpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWIgPSBjRGl2LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCIrXCIgfSk7XHJcbiAgICAgICAgICAgICAgICBhYi5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3ItaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKFwiIzg4ODg4OFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZWJ1aWxkKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVidWlsZCgpO1xyXG4gICAgICAgICAgICBjb25zdCBzYXZlQnRuID0gZWQuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIlx1MjcxMyBTYXZlXCIgfSk7XHJcbiAgICAgICAgICAgIHNhdmVCdG4uYWRkQ2xhc3MoXCJtei1yYWluYm93LWNyLWJ0blwiLCBcIm16LXJhaW5ib3ctY3Itc2F2ZVwiKTtcclxuICAgICAgICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5tID0gbmFtZUlucC52YWx1ZS50cmltKCkgfHwgXCJDdXN0b21cIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5zdHlsZS5jdXN0b21SYWluYm93cyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1tubV0gfHwgUkFJTkJPV19QQUxFVFRFU1tubV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1tubSArIFwiIFwiICsgaV0gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUkFJTkJPV19QQUxFVFRFU1tubSArIFwiIFwiICsgaV1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICBubSA9IG5tICsgXCIgXCIgKyBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q1IgPSB7IC4uLmV4aXN0aW5nLCBbbm1dOiBbLi4uY29sb3JzXSB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21SYWluYm93czogbmV3Q1IsXHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvblJhaW5ib3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFpbmJvd1BhbGV0dGU6IG5tLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjdXJQYWwgPSBubTtcclxuICAgICAgICAgICAgICAgIGVkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgYWRkQnRuLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJlYnVpbGRMaXN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHMzYiA9IHNlYyhcIlx1RDgzRFx1RENERFwiLCB0KFwic20udGV4dEFsaWduXCIpKTtcclxuICAgICAgICBSKHMzYiwgdChcInNtLnRleHRBbGlnblwiKSwgXCJ0ZXh0QWxpZ25cIiwgXCJzZWxlY3RcIiwge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgczQgPSBzZWMoXCJcdTI3MDVcIiwgdChcInNtLnNlbFwiKSk7XHJcbiAgICAgICAgUihzNCwgdChcInNtLnNlbENvbG9yXCIpLCBcInNlbGVjdGlvbkNvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzNCwgdChcInNtLnNlbFdpZHRoXCIpLCBcInNlbGVjdGlvbldpZHRoXCIsIFwibnVtYmVyXCIsIHsgbWluOiAxLCBtYXg6IDggfSk7XHJcbiAgICAgICAgUihzNCwgdChcInNtLnNlbE9mZnNldFwiKSwgXCJzZWxlY3Rpb25PdXRsaW5lT2Zmc2V0XCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAtNSxcclxuICAgICAgICAgICAgbWF4OiAyMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHM0LCB0KFwic20uZWRpdE91dGxpbmVcIiksIFwiZWRpdE91dGxpbmVDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczQsIHQoXCJzbS5lZGl0T3V0bGluZVdpZHRoXCIpLCBcImVkaXRPdXRsaW5lV2lkdGhcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogOCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzNSA9IHNlYyhcIlx1RDgzRFx1RERCQ1x1RkUwRlwiLCB0KFwic20uY2FudmFzQmdcIikpO1xyXG4gICAgICAgIFIoczUsIHQoXCJzbS5jYW52YXNCZ1wiKSwgXCJjYW52YXNCZ1wiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIGNvbnN0IHM2ID0gc2VjKFwiXHVEODNEXHVERDI3XCIsIHQoXCJzbS5zaG93VG9vbGJhclwiKSk7XHJcbiAgICAgICAgY29uc3QgdGJSb3cgPSBzNi5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICB0YlJvdy5hZGRDbGFzcyhcIm16LW1vZGFsLXJvd1wiKTtcclxuICAgICAgICB0YlJvd1xyXG4gICAgICAgICAgICAuY3JlYXRlRWwoXCJsYWJlbFwiLCB7IHRleHQ6IHQoXCJzbS5zaG93VG9vbGJhclwiKSB9KVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJtei1tb2RhbC1sYmxcIik7XHJcbiAgICAgICAgY29uc3QgdGJDYiA9IHRiUm93LmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB0YkNiLnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgdGJDYi5jaGVja2VkID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1Rvb2xiYXI7XHJcbiAgICAgICAgdGJDYi5hZGRDbGFzcyhcIm16LW1vZGFsLWNoa1wiKTtcclxuICAgICAgICB0YkNiLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhciA9IHRiQ2IuY2hlY2tlZDtcclxuICAgICAgICAgICAgdm9pZCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sYmFyVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YlBvc1wiKSwgXCJ0b29sYmFyUG9zaXRpb25cIiwgXCJzZWxlY3RcIiwge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbXCJ0b3BcIiwgXCJib3R0b21cIl0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiUGFkVFwiKSwgXCJ0b29sYmFyUGFkVG9wXCIsIFwibnVtYmVyXCIsIHsgbWluOiAwLCBtYXg6IDQwIH0pO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YlBhZFJcIiksIFwidG9vbGJhclBhZFJpZ2h0XCIsIFwibnVtYmVyXCIsIHsgbWluOiAwLCBtYXg6IDQwIH0pO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YlBhZEJcIiksIFwidG9vbGJhclBhZEJvdHRvbVwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiA0MCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJQYWRMXCIpLCBcInRvb2xiYXJQYWRMZWZ0XCIsIFwibnVtYmVyXCIsIHsgbWluOiAwLCBtYXg6IDQwIH0pO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YkJnXCIpLCBcInRvb2xiYXJCZ0NvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiQnRuQmdcIiksIFwidG9vbGJhckJ0bkJnQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJCdG5Cb3JkZXJcIiksIFwidG9vbGJhckJ0bkJvcmRlclN0eWxlXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogW1wic29saWRcIiwgXCJkYXNoZWRcIiwgXCJkb3R0ZWRcIiwgXCJub25lXCJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YkJ0bkJvcmRlckNvbG9yXCIpLCBcInRvb2xiYXJCdG5Cb3JkZXJDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YkJ0blRleHRcIiksIFwidG9vbGJhckJ0blRleHRDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczYsIFwiU2VwYXJhdG9yIGNvbG9yXCIsIFwidG9vbGJhckJvcmRlckNvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzNiwgXCJTZXBhcmF0b3Igd2lkdGhcIiwgXCJ0b29sYmFyQm9yZGVyV2lkdGhcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogNSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBSZXNldCB0b29sYmFyIGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IHRiUmVzZXRCdG4gPSBzNi5jcmVhdGVFbChcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiXHUyMUJBIFwiICsgdChcInNtLnRiUmVzZXREZWZhdWx0XCIpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRiUmVzZXRCdG4uYWRkQ2xhc3MoXCJtei1ucy1idG5cIik7XHJcbiAgICAgICAgdGJSZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0RhcmsgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZSA9PT0gXCJkYXJrXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZiA9IGlzRGFyayA/IERFRkFVTFRfVE9PTEJBUl9EQVJLIDogREVGQVVMVF9UT09MQkFSX0xJR0hUO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgdG9vbGJhckJnQ29sb3I6IGRlZi50b29sYmFyQmdDb2xvcixcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJCdG5CZ0NvbG9yOiBkZWYudG9vbGJhckJ0bkJnQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQnRuQm9yZGVyU3R5bGU6IGRlZi50b29sYmFyQnRuQm9yZGVyU3R5bGUsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQnRuQm9yZGVyQ29sb3I6IGRlZi50b29sYmFyQnRuQm9yZGVyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBkZWYudG9vbGJhckJ0blRleHRDb2xvcixcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJCb3JkZXJDb2xvcjogZGVmLnRvb2xiYXJCb3JkZXJDb2xvcixcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJCb3JkZXJXaWR0aDogZGVmLnRvb2xiYXJCb3JkZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJQYWRUb3A6IDAsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyUGFkUmlnaHQ6IDEyLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhclBhZEJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJQYWRMZWZ0OiAxMixcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJQb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1N0eWxlTW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBiciA9IG0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgYnIuYWRkQ2xhc3MoXCJtei1tb2RhbC1idG5zXCIpO1xyXG4gICAgICAgIGJyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogdChcInNtLnJlc2V0XCIpIH0pLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHsgLi4uREVGQVVMVF9TVFlMRSB9KTtcclxuICAgICAgICAgICAgICAgIGNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdHlsZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjYiA9IGJyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogdChcInNtLmNsb3NlXCIpIH0pO1xyXG4gICAgICAgIGNiLmFkZENsYXNzKFwibXotbW9kYWwtYnRuXCIsIFwibXotbW9kYWwtYnRuLXByaW1hcnlcIik7XHJcbiAgICAgICAgY2IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd05vZGVTdHlsZUVkaXRvcihlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcCgpO1xyXG4gICAgICAgIGNvbnN0IGlkcyA9IHRoaXMuYWxsU2VsKCk7XHJcbiAgICAgICAgY29uc3QgZmlyc3QgPSB0aGlzLmZBbGwoWy4uLmlkc11bMF0pO1xyXG4gICAgICAgIGNvbnN0IHNvID0gZmlyc3Q/LnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgY29uc3QgaXNSID0gISFmaXJzdD8uaXNSb290O1xyXG4gICAgICAgIGNvbnN0IG92ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBvdi5hZGRDbGFzcyhcIm16LW1vZGFsLW92ZXJsYXlcIik7XHJcbiAgICAgICAgY29uc3QgbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbS5hZGRDbGFzcyhcIm16LW1vZGFsXCIpO1xyXG4gICAgICAgIG0uY3JlYXRlRWwoXCJoNFwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IHQoXCJucy50aXRsZVwiKSArIFwiIChcIiArIGlkcy5zaXplICsgXCIpXCIsXHJcbiAgICAgICAgfSkuYWRkQ2xhc3MoXCJtei1ucy10aXRsZVwiKTtcclxuICAgICAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgb3YucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIG0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wQ2xvc2UgPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wb3BDbG9zZSA9IGNsb3NlO1xyXG4gICAgICAgIG92LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XHJcbiAgICAgICAgbS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAgICAgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGFwcGx5ID0gKGZuOiAobjogTWluZE5vZGVEYXRhKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmZBbGwoaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG4pIGZuKG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta0MgPSAobDogc3RyaW5nLCBjdXI6IHN0cmluZywgZm46ICh2OiBzdHJpbmcpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHIuYWRkQ2xhc3MoXCJtei1tb2RhbC1yb3dcIik7XHJcbiAgICAgICAgICAgIHIuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbCB9KS5hZGRDbGFzcyhcIm16LW1vZGFsLWxibFwiKTtcclxuICAgICAgICAgICAgY29uc3QgaSA9IHIuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpLnR5cGUgPSBcImNvbG9yXCI7XHJcbiAgICAgICAgICAgIGkudmFsdWUgPSBjdXI7XHJcbiAgICAgICAgICAgIGkuYWRkQ2xhc3MoXCJtei1zcC1jb2xvclwiKTtcclxuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IGZuKGkudmFsdWUpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1rTiA9IChcclxuICAgICAgICAgICAgbDogc3RyaW5nLFxyXG4gICAgICAgICAgICBjdXI6IG51bWJlcixcclxuICAgICAgICAgICAgbWluOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG1heDogbnVtYmVyLFxyXG4gICAgICAgICAgICBmbjogKHY6IG51bWJlcikgPT4gdm9pZCxcclxuICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHIuYWRkQ2xhc3MoXCJtei1tb2RhbC1yb3dcIik7XHJcbiAgICAgICAgICAgIHIuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbCB9KS5hZGRDbGFzcyhcIm16LW1vZGFsLWxibFwiKTtcclxuICAgICAgICAgICAgY29uc3QgaSA9IHIuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgICAgICBpLm1pbiA9IFN0cmluZyhtaW4pO1xyXG4gICAgICAgICAgICBpLm1heCA9IFN0cmluZyhtYXgpO1xyXG4gICAgICAgICAgICBpLnZhbHVlID0gU3RyaW5nKGN1cik7XHJcbiAgICAgICAgICAgIGkuYWRkQ2xhc3MoXCJtei1zcC1udW1cIik7XHJcbiAgICAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBmbihOdW1iZXIoaS52YWx1ZSkpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1rUyA9IChcclxuICAgICAgICAgICAgbDogc3RyaW5nLFxyXG4gICAgICAgICAgICBjdXI6IHN0cmluZyxcclxuICAgICAgICAgICAgb3B0czogc3RyaW5nW10sXHJcbiAgICAgICAgICAgIGZuOiAodjogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByID0gbS5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgci5hZGRDbGFzcyhcIm16LW1vZGFsLXJvd1wiKTtcclxuICAgICAgICAgICAgci5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBsIH0pLmFkZENsYXNzKFwibXotbW9kYWwtbGJsXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBzID0gci5jcmVhdGVFbChcInNlbGVjdFwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICAgICAgcy5hZGRDbGFzcyhcIm16LXNwLXNlbFwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBvIG9mIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIG9wLnZhbHVlID0gbztcclxuICAgICAgICAgICAgICAgIG9wLnRleHQgPSBvO1xyXG4gICAgICAgICAgICAgICAgaWYgKG8gPT09IGN1cikgb3Auc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcy5hcHBlbmRDaGlsZChvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IGZuKHMudmFsdWUpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1rQyhcclxuICAgICAgICAgICAgdChcInNtLmJnXCIpLFxyXG4gICAgICAgICAgICBzby5iZ0NvbG9yID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290QmdDb2xvciA6IHRoaXMuc3R5bGUubm9kZUJnQ29sb3IpLFxyXG4gICAgICAgICAgICAodikgPT5cclxuICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlID0gbi5zdHlsZU92ZXJyaWRlID8/IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZS5iZ0NvbG9yID0gdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtDKFxyXG4gICAgICAgICAgICB0KFwic20udGV4dFwiKSxcclxuICAgICAgICAgICAgc28udGV4dENvbG9yID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290VGV4dENvbG9yIDogdGhpcy5zdHlsZS5ub2RlVGV4dENvbG9yKSxcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUudGV4dENvbG9yID0gdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtOKFxyXG4gICAgICAgICAgICB0KFwic20uZm9udFNpemVcIiksXHJcbiAgICAgICAgICAgIHNvLmZvbnRTaXplID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Rm9udFNpemUgOiB0aGlzLnN0eWxlLm5vZGVGb250U2l6ZSksXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAzMixcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuZm9udFNpemUgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIG4ud2lkdGggPSB0aGlzLmNhbGNXKG4udGV4dCwgISFuLmlzUm9vdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5oZWlnaHQgPSB0aGlzLmNhbGNIKG4udGV4dCwgISFuLmlzUm9vdCk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rUyhcclxuICAgICAgICAgICAgdChcInNtLmZvbnRcIiksXHJcbiAgICAgICAgICAgIHNvLmZvbnRGYW1pbHkgPz9cclxuICAgICAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RGb250RmFtaWx5IDogdGhpcy5zdHlsZS5ub2RlRm9udEZhbWlseSksXHJcbiAgICAgICAgICAgIEZPTlRfTElTVCxcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuZm9udEZhbWlseSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPT09IFwiaW5oZXJpdFwiID8gdW5kZWZpbmVkIDogdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtTKFxyXG4gICAgICAgICAgICB0KFwic20uYm9yZGVyU3R5bGVcIiksXHJcbiAgICAgICAgICAgIHNvLmJvcmRlclN0eWxlID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyU3R5bGUgOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJTdHlsZSksXHJcbiAgICAgICAgICAgIFtcInNvbGlkXCIsIFwiZGFzaGVkXCIsIFwiZG90dGVkXCIsIFwiZG91YmxlXCIsIFwibm9uZVwiXSxcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuYm9yZGVyU3R5bGUgPSB2IGFzIEJvcmRlclN0eWxlO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta0MoXHJcbiAgICAgICAgICAgIHQoXCJzbS5ib3JkZXJDb2xvclwiKSxcclxuICAgICAgICAgICAgc28uYm9yZGVyQ29sb3IgPz9cclxuICAgICAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCb3JkZXJDb2xvciA6IHRoaXMuc3R5bGUubm9kZUJvcmRlckNvbG9yKSxcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuYm9yZGVyQ29sb3IgPSB2O1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta04oXHJcbiAgICAgICAgICAgIHQoXCJzbS5ib3JkZXJXaWR0aFwiKSxcclxuICAgICAgICAgICAgc28uYm9yZGVyV2lkdGggPz9cclxuICAgICAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCb3JkZXJXaWR0aCA6IHRoaXMuc3R5bGUubm9kZUJvcmRlcldpZHRoKSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuYm9yZGVyV2lkdGggPSB2O1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta04oXHJcbiAgICAgICAgICAgIHQoXCJucy5ib3JkZXJSYWRpdXNcIiksXHJcbiAgICAgICAgICAgIHNvLmJvcmRlclJhZGl1cyA/P1xyXG4gICAgICAgICAgICAgICAgKGlzUlxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyUmFkaXVzXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJSYWRpdXMpLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAzMixcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuYm9yZGVyUmFkaXVzID0gdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtDKFxyXG4gICAgICAgICAgICB0KFwibnMuY29ubkNvbG9yXCIpLFxyXG4gICAgICAgICAgICBmaXJzdD8uY29ubmVjdGlvbkNvbG9yID8/IHRoaXMuc3R5bGUuY29ubmVjdGlvbkNvbG9yLFxyXG4gICAgICAgICAgICAodikgPT5cclxuICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5jb25uZWN0aW9uQ29sb3IgPSB2O1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta04oXHJcbiAgICAgICAgICAgIHQoXCJucy5jb25uV2lkdGhcIiksXHJcbiAgICAgICAgICAgIGZpcnN0Py5jb25uZWN0aW9uV2lkdGggPz8gdGhpcy5zdHlsZS5jb25uZWN0aW9uV2lkdGgsXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLmNvbm5lY3Rpb25XaWR0aCA9IHY7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIENvbm5lY3Rpb24gdHlwZSB3aXRoIGNvbG9yIHN3YXRjaGVzIGZvciByb290IG5vZGVzXHJcbiAgICAgICAgaWYgKGlzUikge1xyXG4gICAgICAgICAgICBjb25zdCBjdERpdiA9IG0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGN0RGl2LmFkZENsYXNzKFwibXotcmFpbmJvdy1jdFwiKTtcclxuICAgICAgICAgICAgY3REaXZcclxuICAgICAgICAgICAgICAgIC5jcmVhdGVFbChcInNwYW5cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHVEODNDXHVERjA4IFwiICsgdChcInNtLnJhaW5ib3dcIiksXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwibXotcmFpbmJvdy1sYmxcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5QYWxzOiB7IFtrOiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uUkFJTkJPV19QQUxFVFRFUyxcclxuICAgICAgICAgICAgICAgIC4uLih0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzIHx8IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gRGV0ZWN0IGN1cnJlbnQgcGFsZXR0ZSBieSBtYXRjaGluZyBmaXJzdCBjaGlsZCdzIGNvbG9yXHJcbiAgICAgICAgICAgIGxldCBhY3RpdmVQYWwgPSBcIm9mZlwiO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3QgJiYgZmlyc3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmMgPSBmaXJzdC5jaGlsZHJlblswXS5jb25uZWN0aW9uQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb2xvcnNdIG9mIE9iamVjdC5lbnRyaWVzKG5QYWxzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3JzWzBdID09PSBmYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFsID0gbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5MaXN0ID0gY3REaXYuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG5MaXN0LmFkZENsYXNzKFwibXotcmFpbmJvdy1saXN0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZWJ1aWxkTkwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWtOSSA9IChcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogc3RyaW5nW10gfCBudWxsLFxyXG4gICAgICAgICAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXQgPSBuTGlzdC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdC50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiLCBrZXkgPT09IGFjdGl2ZVBhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBhY3RpdmVQYWwpIGl0LmFkZENsYXNzKFwibXotcmFpbmJvdy1ob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0LnRvZ2dsZUNsYXNzKFwibXotcmFpbmJvdy1ob3ZlclwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXQuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbGFiZWwgfSkuYWRkQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXotcmFpbmJvdy1pdGVtLWxibFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb3RzID0gaXQuY3JlYXRlRWwoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzLmFkZENsYXNzKFwibXotcmFpbmJvdy1kb3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgY29sb3JzLnNsaWNlKDAsIDgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkID0gZG90cy5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmFkZENsYXNzKFwibXotcmFpbmJvdy1kb3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1kb3QtY29sb3JcIjogYyB9KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChbaywgdl0pID0+IGQuc3R5bGUuc2V0UHJvcGVydHkoaywgdiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29sb3JzKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW4uaXNSb290KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG4uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmNoaWxkcmVuW2ldLmNvbm5lY3Rpb25Db2xvciA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yc1tpICUgY29sb3JzLmxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWwgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYnVpbGROTCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG1rTkkoXCJvZmZcIiwgXCJTb2xpZFwiLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW25hbWUsIGNvbG9yc10gb2YgT2JqZWN0LmVudHJpZXMoblBhbHMpKVxyXG4gICAgICAgICAgICAgICAgICAgIG1rTkkobmFtZSwgbmFtZSwgY29sb3JzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVidWlsZE5MKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNsciA9IG0uY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiB0KFwibnMuY2xlYXJcIikgfSk7XHJcbiAgICAgICAgY2xyLmFkZENsYXNzKFwibXotbnMtYnRuXCIpO1xyXG4gICAgICAgIGNsci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIG4uY29ubmVjdGlvbkNvbG9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgbi5jb25uZWN0aW9uV2lkdGggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgY2J0biA9IG0uY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiB0KFwic20uY2xvc2VcIikgfSk7XHJcbiAgICAgICAgY2J0bi5hZGRDbGFzcyhcIm16LW1vZGFsLWJ0blwiLCBcIm16LW1vZGFsLWJ0bi1wcmltYXJ5XCIpO1xyXG4gICAgICAgIGNidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9nZ2xlU2VhcmNoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEJhci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmNjPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5zdXJlUHJveHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCYXIuYWRkQ2xhc3MoXCJtei1zZWFyY2gtYmFyXCIpO1xyXG4gICAgICAgIGNvbnN0IGlucCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnAudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIGlucC5wbGFjZWhvbGRlciA9IHQoXCJzZWFyY2gucGxhY2Vob2xkZXJcIik7XHJcbiAgICAgICAgaW5wLmFkZENsYXNzKFwibXotc2VhcmNoLWlucHV0XCIpO1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBpbmZvLmFkZENsYXNzKFwibXotc2VhcmNoLWNvdW50XCIpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSBcIlx1MjcxNVwiO1xyXG4gICAgICAgIGNsb3NlQnRuLmFkZENsYXNzKFwibXotc2VhcmNoLWJ0blwiKTtcclxuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEJhcj8ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jYz8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuc3VyZVByb3h5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCYXIuYXBwZW5kQ2hpbGQoaW5wKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEJhci5hcHBlbmRDaGlsZChpbmZvKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEJhci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcbiAgICAgICAgdGhpcy5zdmdDdC5hcHBlbmRDaGlsZCh0aGlzLnNlYXJjaEJhcik7XHJcbiAgICAgICAgY29uc3QgZG9TZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBpbnAudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaElkeCA9IDA7XHJcbiAgICAgICAgICAgIGlmICghcSkge1xyXG4gICAgICAgICAgICAgICAgaW5mby50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdmlzID0gKG46IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4udGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cy5wdXNoKG4pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHZpcyhjKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHZpcyhyKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoUmVzdWx0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGluZm8udGV4dENvbnRlbnQgPSBcIjEvXCIgKyB0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWwxKHRoaXMuc2VhcmNoUmVzdWx0c1swXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTm9kZSh0aGlzLnNlYXJjaFJlc3VsdHNbMF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGluZm8udGV4dENvbnRlbnQgPSBcIjBcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlucC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZG9TZWFyY2gpO1xyXG4gICAgICAgIGlucC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSWR4ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnNlYXJjaElkeCAtIDEgKyB0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoKSAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJZHggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc2VhcmNoSWR4ICsgMSkgJSB0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm8udGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaElkeCArIDEgKyBcIi9cIiArIHRoaXMuc2VhcmNoUmVzdWx0cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmQgPSB0aGlzLnNlYXJjaFJlc3VsdHNbdGhpcy5zZWFyY2hJZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c05vZGUobmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGlucC5mb2N1cygpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEJhcj8ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2M/LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZVByb3h5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGlucC5mb2N1cygpLCAwKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0Q0MoXHJcbiAgICAgICAgY2g6IE1pbmROb2RlRGF0YSxcclxuICAgICAgICBwUjogYm9vbGVhbixcclxuICAgICAgICBpZHg6IG51bWJlcixcclxuICAgICAgICBpbmg/OiBzdHJpbmcsXHJcbiAgICApOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChjaC5jb25uZWN0aW9uQ29sb3IpIHJldHVybiBjaC5jb25uZWN0aW9uQ29sb3I7XHJcbiAgICAgICAgaWYgKGluaCkgcmV0dXJuIGluaDtcclxuICAgICAgICBjb25zdCByYiA9IHRoaXMuZ2V0UmFpbmJvdygpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0eWxlLmNvbm5lY3Rpb25SYWluYm93ICYmIHBSKSByZXR1cm4gcmJbaWR4ICUgcmIubGVuZ3RoXTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZS5jb25uZWN0aW9uQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0FjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWluZE1hcFZpZXcpID09PSB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc0V4dElucHV0KGU6IEtleWJvYXJkRXZlbnQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKCF0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdGFnID0gdC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHRhZyA9PT0gXCJpbnB1dFwiIHx8IHRhZyA9PT0gXCJ0ZXh0YXJlYVwiIHx8IHRhZyA9PT0gXCJzZWxlY3RcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuc3ZnQ3Q/LmNvbnRhaW5zKHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9rZCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0KCkgfHwgdGhpcy5tZE1vZGUgfHwgdGhpcy5pc0V4dElucHV0KGUpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoQmFyICYmIHRoaXMuc2VhcmNoQmFyLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gRklYICM3OiB3aGVuIG1vZGFsIGlzIG9wZW4sIEVzYyBjbG9zZXMgaXQ7IGJsb2NrIGFsbCBvdGhlciBrZXlzXHJcbiAgICAgICAgaWYgKHRoaXMucG9wQ2xvc2UpIHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3BDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3BDbG9zZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBGSVggIzY6IGRpc2FibGUgYWxsIGtleXMgZHVyaW5nIGRyYWdcclxuICAgICAgICBpZiAodGhpcy5kcz8uaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikgdGhpcy5jYW5jZWxEcmFnKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRWRpdCBtb2RlXHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdElkKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJlxyXG4gICAgICAgICAgICAgICAgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJhXCIgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcImZcIikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VhcmNoKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgJiZcclxuICAgICAgICAgICAgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJjXCIgJiZcclxuICAgICAgICAgICAgIWUuc2hpZnRLZXkgJiZcclxuICAgICAgICAgICAgdGhpcy5zZWxJZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29weU5vZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmXHJcbiAgICAgICAgICAgIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwieFwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvcHlOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmXHJcbiAgICAgICAgICAgIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwidlwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5wYXN0ZU5vZGUoZS5zaGlmdEtleSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi51bmRvKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5kbygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IucmVkbykpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZG8oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBab29tIGtleWJpbmRpbmdzXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi56b29tSW4pKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy56b29tQnkoMS4xKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLnpvb21PdXQpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy56b29tQnkoMC45KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLnpvb21SZXNldCkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnpvb21UbygxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLmFkZENoaWxkKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIHNoaWZ0K3RhYiA9IGxlZnQgY2hpbGQgKG9uIHJvb3Qgb3IgYW55IG5vZGUpXHJcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5ICYmIHRoaXMuc2VsSWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTGVmdENoaWxkKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHRoaXMuYWRkQ2hpbGROb2RlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5hZGRTaWJsaW5nKSAmJiAhZS5jdHJsS2V5ICYmICFlLm1ldGFLZXkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAvLyBzaGlmdCtlbnRlciA9IGxlZnQgY2hpbGQgb24gcm9vdFxyXG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiB0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsPy5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZExlZnRDaGlsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkgJiYgdGhpcy5zZWxJZCkgdGhpcy5hZGRTaWJsaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3BhY2U6IHNpbmdsZSBub2RlIHNlbGVjdGVkID0gZWRpdCwgbm8vbXVsdGkgPSBwYW5cclxuICAgICAgICAvLyBlZGl0Tm9kZTogc2luZ2xlIG5vZGUgPSBlZGl0XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IuZWRpdE5vZGUpICYmXHJcbiAgICAgICAgICAgICFlLnJlcGVhdCAmJlxyXG4gICAgICAgICAgICB0aGlzLnNlbElkICYmXHJcbiAgICAgICAgICAgICF0aGlzLmlzTXVsdGkoKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdElkID0gdGhpcy5zZWxJZDtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkcmFnQ2FudmFzOiBwYW4gbW9kZVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IuZHJhZ0NhbnZhcykgJiYgIWUucmVwZWF0KSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zcGFjZURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYykgdGhpcy5jYy50b2dnbGVDbGFzcyhcIm16LWN1cnNvci1ncmFiXCIsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEN0cmwrRW50ZXIgZW50ZXJzIGVkaXQgbW9kZVxyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRJZCA9IHRoaXMuc2VsSWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5mb2N1c05vZGUpICYmICFlLmN0cmxLZXkgJiYgIWUubWV0YUtleSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNTZWwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hCYXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbHJTZWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJCYWNrc3BhY2VcIiB8fCBlLmtleSA9PT0gXCJEZWxldGVcIikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTXVsdGkoKSkgdGhpcy5iYXRjaERlbCgpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbElkKSB0aGlzLmRlbE5vZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLm5hdlVwKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxJZCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyb3coXCJBcnJvd1VwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5uYXZEb3duKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxJZCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyb3coXCJBcnJvd0Rvd25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLm5hdkxlZnQpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJvdyhcIkFycm93TGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IubmF2UmlnaHQpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJvdyhcIkFycm93UmlnaHRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBGSVggIzE6IGtlZXAgZ3JhYiBjdXJzb3IgZHVyaW5nIGRyYWcsIGRvbid0IHJlc2V0IHRvIHBvaW50ZXJcclxuICAgIHByaXZhdGUgX2t1ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGUuY29kZSA9PT0gXCJTcGFjZVwiIHx8XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5lZGl0Tm9kZSkgfHxcclxuICAgICAgICAgICAgdGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLmRyYWdDYW52YXMpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BhY2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0N2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNjKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNjLnRvZ2dsZUNsYXNzKFwibXotY3Vyc29yLWdyYWJiaW5nXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2MudG9nZ2xlQ2xhc3MoXCJtei1jdXJzb3ItZ3JhYlwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gSU1FLWNvbXBhdGlibGUgdHlwZVRvRWRpdCB2aWEgcHJveHkgdGV4dGFyZWEgcG9zaXRpb25lZCBiZWxvdyBzZWxlY3RlZCBub2RlXHJcbiAgICBwcml2YXRlIGVuc3VyZVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJQcm94eSgpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXRoaXMucGx1Z2luLnNldHRpbmdzLnR5cGVUb0VkaXQgfHxcclxuICAgICAgICAgICAgIXRoaXMuc2VsSWQgfHxcclxuICAgICAgICAgICAgdGhpcy5pc011bHRpKCkgfHxcclxuICAgICAgICAgICAgdGhpcy5lZGl0SWQgfHxcclxuICAgICAgICAgICAgIXRoaXMuc3ZnQ3QgfHxcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXJcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hCYXIgJiYgdGhpcy5zZWFyY2hCYXIuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCBuZCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIW5kKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgICAgICAvLyBQb3NpdGlvbiBiZWxvdyB0aGUgc2VsZWN0ZWQgbm9kZSBpbiBzY3JlZW4gY29vcmRpbmF0ZXNcclxuICAgICAgICBjb25zdCBzY3JlZW5YID0gbmQueCAqIHRoaXMuem9vbSArIHRoaXMucGFuWDtcclxuICAgICAgICBjb25zdCBzY3JlZW5ZID0gKG5kLnkgKyBuZC5oZWlnaHQgLyAyKSAqIHRoaXMuem9vbSArIHRoaXMucGFuWSArIDQ7XHJcbiAgICAgICAgcC5hZGRDbGFzcyhcIm16LXByb3h5LXRhXCIpO1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHtcclxuICAgICAgICAgICAgXCItLW16LXByb3h5LWxlZnRcIjogc2NyZWVuWCArIFwicHhcIixcclxuICAgICAgICAgICAgXCItLW16LXByb3h5LXRvcFwiOiBzY3JlZW5ZICsgXCJweFwiLFxyXG4gICAgICAgIH0pLmZvckVhY2goKFtrLCB2XSkgPT4gcC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSk7XHJcbiAgICAgICAgdGhpcy5zdmdDdC5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgICB0aGlzLnByb3h5VEEgPSBwO1xyXG4gICAgICAgIGxldCBjb21wb3NpbmcgPSBmYWxzZTtcclxuICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbnN0YXJ0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29tcG9zaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgcC5hZGRDbGFzcyhcIm16LXByb3h5LWNvbXBvc2luZ1wiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbXBvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBwLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodmFsICYmIHRoaXMuc2VsSWQgJiYgIXRoaXMuZWRpdElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRJZCA9IHRoaXMuc2VsSWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGl2ZVRBKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNldFJhbmdlVGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdGlvblN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuc2VsZWN0aW9uRW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb3NpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gcC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHZhbCAmJiB0aGlzLnNlbElkICYmICF0aGlzLmVkaXRJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0SWQgPSB0aGlzLnNlbElkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpdmVUQSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5zZXRSYW5nZVRleHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5zZWxlY3Rpb25TdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdGlvbkVuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KSwgMCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNsZWFyUHJveHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJveHlUQSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3h5VEEucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJveHlUQSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjb3B5Tm9kZShjdXQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsSWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBuZCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIW5kKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jbGlwYm9hcmQgPSB7IGRhdGE6IEpTT04uc3RyaW5naWZ5KG5kKSwgaXNSb290OiAhIW5kLmlzUm9vdCwgY3V0IH07XHJcbiAgICAgICAgaWYgKGN1dCkge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgICAgIGlmIChuZC5pc1Jvb3QpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3RzID0gdGhpcy5yb290cy5maWx0ZXIoKHIpID0+IHIuaWQgIT09IG5kLmlkKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnJlbUFsbChuZC5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xyU2VsKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBwYXN0ZU5vZGUoc3RyaXA6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2xpcGJvYXJkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgY2xvbmU6IE1pbmROb2RlRGF0YSA9IEpTT04ucGFyc2UodGhpcy5jbGlwYm9hcmQuZGF0YSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsaXBib2FyZC5jdXQpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVJZCA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIG4uaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHJlSWQoYyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlSWQoY2xvbmUpO1xyXG4gICAgICAgIH0gZWxzZSB0aGlzLmNsaXBib2FyZCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0cmlwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHMgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBuLmNvbm5lY3Rpb25Db2xvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIG4uY29ubmVjdGlvbldpZHRoID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHMoYyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHMoY2xvbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgaWYgKGNsb25lLmlzUm9vdCkge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gdGhpcy5yb290c1t0aGlzLnJvb3RzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBjbG9uZS54ID0gbGFzdD8ueCA/PyAwO1xyXG4gICAgICAgICAgICBjbG9uZS55ID0gKGxhc3Q/LnkgPz8gMCkgKyAyMDA7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdHMucHVzaChjbG9uZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xvbmUuaXNSb290ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gdGhpcy5mQWxsKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHApIHAuY2hpbGRyZW4ucHVzaChjbG9uZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLnJvb3RzLnB1c2goeyAuLi5jbG9uZSwgaXNSb290OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbDEoY2xvbmUuaWQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2FuY2VsRHJhZygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZHMpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuZHMuaXNSb290RHJhZykge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdGhpcy5kcyBhcyBDaGlsZERyYWc7XHJcbiAgICAgICAgICAgIGlmIChkLnNuYXApIHRoaXMucm9vdHMgPSBKU09OLnBhcnNlKGQuc25hcCk7XHJcbiAgICAgICAgICAgIGQuZ2hvc3RFbD8ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGQuaW5kaWNhdG9yRWw/LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRzID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5jYykgdGhpcy5jYy50b2dnbGVDbGFzcyhcIm16LWN1cnNvci1ncmFiXCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfbXUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmJveFNlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEJveChlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kcmFnQ3YpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmFnQ3YgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2MudG9nZ2xlQ2xhc3MoXCJtei1jdXJzb3ItZ3JhYmJpbmdcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYy50b2dnbGVDbGFzcyhcIm16LWN1cnNvci1ncmFiXCIsIHRoaXMuc3BhY2VEb3duKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZHMpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuZHMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmRzID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kcy5pc1Jvb3REcmFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHMgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmRzIGFzIENoaWxkRHJhZztcclxuICAgICAgICBjb25zdCByYyA9IHRoaXMuY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgbXggPSAoZS5jbGllbnRYIC0gcmMubGVmdCAtIHRoaXMucGFuWCkgLyB0aGlzLnpvb20sXHJcbiAgICAgICAgICAgIG15ID0gKGUuY2xpZW50WSAtIHJjLnRvcCAtIHRoaXMucGFuWSkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgY29uc3QgZHggPSBteCAtIGQuc3RhcnRYLFxyXG4gICAgICAgICAgICBkeSA9IG15IC0gZC5zdGFydFk7XHJcbiAgICAgICAgY29uc3QgZG4gPSB0aGlzLmZBbGwoZC5ub2RlSWQpO1xyXG4gICAgICAgIGNvbnN0IGRuVyA9IGRuID8gZG4ud2lkdGggOiAwO1xyXG4gICAgICAgIGNvbnN0IGlzTGVmdFNpZGUgPSBkbj8uc2lkZSA9PT0gXCJsZWZ0XCI7XHJcbiAgICAgICAgY29uc3QgZWRnZVggPSBkblxyXG4gICAgICAgICAgICA/IGlzTGVmdFNpZGVcclxuICAgICAgICAgICAgICAgID8gZG4ueCArIGR4ICsgZG5XIC8gMlxyXG4gICAgICAgICAgICAgICAgOiBkbi54ICsgZHggLSBkblcgLyAyXHJcbiAgICAgICAgICAgIDogbXg7XHJcbiAgICAgICAgY29uc3QgZ3kgPSBkbiA/IGRuLnkgKyBkeSA6IG15O1xyXG4gICAgICAgIGNvbnN0IHRndCA9IHRoaXMuZGV0VGd0KGVkZ2VYLCBlZGdlWCwgZ3ksIGQubm9kZUlkKTtcclxuICAgICAgICBpZiAodGd0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjUG9zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsSWRzID0gdGhpcy5hbGxTZWwoKTtcclxuICAgICAgICAgICAgLy8gRklYICM2OiBjb2xsZWN0IG5vZGVzIGluIG9yaWdpbmFsIHRyZWUgb3JkZXIsIHByZXNlcnZlIHRoZWlyIHNlcXVlbmNlXHJcbiAgICAgICAgICAgIGNvbnN0IHRvTW92ZTogTWluZE5vZGVEYXRhW10gPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgY29sbGVjdE9yZGVyZWQgPSAocGFyZW50OiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gcGFyZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxJZHMuaGFzKGMuaWQpICYmICFjLmlzUm9vdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b01vdmUudW5zaGlmdChwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGksIDEpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0T3JkZXJlZChjKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSBjb2xsZWN0T3JkZXJlZChyKTtcclxuICAgICAgICAgICAgaWYgKCF0b01vdmUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXQgPSB0aGlzLnJlbUFsbChkLm5vZGVJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGV0KSB0b01vdmUucHVzaChkZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzaWRlIG9mIG1vdmVkIG5vZGVzIHRvIG1hdGNoIHRhcmdldCdzIHNpZGVcclxuICAgICAgICAgICAgY29uc3QgdGd0Tm9kZSA9IHRoaXMuZkFsbCh0Z3QuaWQpO1xyXG4gICAgICAgICAgICBjb25zdCB0Z3RTaWRlID1cclxuICAgICAgICAgICAgICAgIHRndE5vZGU/LnNpZGUgfHwgKHRndE5vZGU/LmlzUm9vdCA/IHVuZGVmaW5lZCA6IFwicmlnaHRcIik7XHJcbiAgICAgICAgICAgIGlmICh0Z3RTaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRTaWRlID0gKG46IE1pbmROb2RlRGF0YSwgczogXCJsZWZ0XCIgfCBcInJpZ2h0XCIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnNpZGUgPSBzO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSBzZXRTaWRlKGMsIHMpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbSBvZiB0b01vdmUpIHNldFNpZGUobSwgdGd0U2lkZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSW5zZXJ0IHByZXNlcnZpbmcgb3JkZXJcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b01vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB0aGlzLmluc1RyZWUodG9Nb3ZlW2ldLCB0Z3QuaWQsIHRndC56b25lKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5pbnNUcmVlKHRvTW92ZVtpXSwgdG9Nb3ZlW2kgLSAxXS5pZCwgXCJhZnRlclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBLZWVwIGFsbCBtb3ZlZCBub2RlcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbSBvZiB0b01vdmUpIHRoaXMubXVsdGlTZWwuYWRkKG0uaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbElkID0gdG9Nb3ZlLmxlbmd0aCA/IHRvTW92ZVswXS5pZCA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGQuZ2hvc3RFbD8ucmVtb3ZlKCk7XHJcbiAgICAgICAgZC5pbmRpY2F0b3JFbD8ucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5kcyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRndCkgdGhpcy5hbmltUmVuZGVyKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgdXBkVHgoKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIC0tIFNWRyBncm91cCB0cmFuc2Zvcm0gcmVxdWlyZXMgZGlyZWN0IHN0eWxlIGZvciBwYW4vem9vbSBwZXJmb3JtYW5jZVxyXG4gICAgICAgIHRoaXMuZ0VsLnN0eWxlLnRyYW5zZm9ybSA9XHJcbiAgICAgICAgICAgIFwidHJhbnNsYXRlKFwiICtcclxuICAgICAgICAgICAgdGhpcy5wYW5YICtcclxuICAgICAgICAgICAgXCJweCxcIiArXHJcbiAgICAgICAgICAgIHRoaXMucGFuWSArXHJcbiAgICAgICAgICAgIFwicHgpIHNjYWxlKFwiICtcclxuICAgICAgICAgICAgdGhpcy56b29tICtcclxuICAgICAgICAgICAgXCIpXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuem9vbUxhYmVsKVxyXG4gICAgICAgICAgICB0aGlzLnpvb21MYWJlbC5pbm5lclRleHQgPSBNYXRoLnJvdW5kKHRoaXMuem9vbSAqIDEwMCkgKyBcIiVcIjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgem9vbUJ5KGZhY3RvcjogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgcmMgPSB0aGlzLmNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGlmIChyYy53aWR0aCA8IDEgfHwgcmMuaGVpZ2h0IDwgMSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGN4ID0gcmMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICBjeSA9IHJjLmhlaWdodCAvIDI7XHJcbiAgICAgICAgY29uc3QgbnogPSBNYXRoLm1heCgwLjEsIE1hdGgubWluKHRoaXMuem9vbSAqIGZhY3RvciwgMykpO1xyXG4gICAgICAgIHRoaXMucGFuWCA9IGN4IC0gKGN4IC0gdGhpcy5wYW5YKSAqIChueiAvIHRoaXMuem9vbSk7XHJcbiAgICAgICAgdGhpcy5wYW5ZID0gY3kgLSAoY3kgLSB0aGlzLnBhblkpICogKG56IC8gdGhpcy56b29tKTtcclxuICAgICAgICB0aGlzLnpvb20gPSBuejtcclxuICAgICAgICB0aGlzLnVwZFR4KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHpvb21UbyhsZXZlbDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgcmMgPSB0aGlzLmNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGlmIChyYy53aWR0aCA8IDEgfHwgcmMuaGVpZ2h0IDwgMSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGN4ID0gcmMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICBjeSA9IHJjLmhlaWdodCAvIDI7XHJcbiAgICAgICAgdGhpcy5wYW5YID0gY3ggLSAoY3ggLSB0aGlzLnBhblgpICogKGxldmVsIC8gdGhpcy56b29tKTtcclxuICAgICAgICB0aGlzLnBhblkgPSBjeSAtIChjeSAtIHRoaXMucGFuWSkgKiAobGV2ZWwgLyB0aGlzLnpvb20pO1xyXG4gICAgICAgIHRoaXMuem9vbSA9IGxldmVsO1xyXG4gICAgICAgIHRoaXMudXBkVHgoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9MYXlvdXQobjogTWluZE5vZGVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jU0gobik7XHJcbiAgICAgICAgdGhpcy5jWFkobik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNTSChuOiBNaW5kTm9kZURhdGEpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHZtID0gdGhpcy5zdHlsZS5ub2RlR2FwWSA/PyAyNDtcclxuICAgICAgICBpZiAoIW4uY2hpbGRyZW4/Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAobiBhcyBMYXlvdXROb2RlKS5fc2ggPSBuLmhlaWdodCArIHZtO1xyXG4gICAgICAgICAgICByZXR1cm4gKG4gYXMgTGF5b3V0Tm9kZSkuX3NoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB0b3RhbCArPSB0aGlzLmNTSChjKTtcclxuICAgICAgICAobiBhcyBMYXlvdXROb2RlKS5fc2ggPSBNYXRoLm1heChuLmhlaWdodCArIHZtLCB0b3RhbCk7XHJcbiAgICAgICAgcmV0dXJuIChuIGFzIExheW91dE5vZGUpLl9zaDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY1hZKG46IE1pbmROb2RlRGF0YSkge1xyXG4gICAgICAgIGlmICghbi5jaGlsZHJlbj8ubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgaG0gPSB0aGlzLnN0eWxlLmNvbm5lY3Rpb25MZW5ndGggfHwgODA7XHJcbiAgICAgICAgLy8gU3BsaXQgY2hpbGRyZW4gYnkgc2lkZSBmb3Igcm9vdCBub2Rlc1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0Q2ggPSBuLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlICE9PSBcImxlZnRcIik7XHJcbiAgICAgICAgY29uc3QgbGVmdENoID0gbi5jaGlsZHJlbi5maWx0ZXIoKGMpID0+IGMuc2lkZSA9PT0gXCJsZWZ0XCIpO1xyXG4gICAgICAgIC8vIExheW91dCByaWdodCBjaGlsZHJlblxyXG4gICAgICAgIGlmIChyaWdodENoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgdG90ID0gMDtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIHJpZ2h0Q2gpIHRvdCArPSAoYyBhcyBMYXlvdXROb2RlKS5fc2g7XHJcbiAgICAgICAgICAgIGxldCBjeSA9IG4ueSAtIHRvdCAvIDI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiByaWdodENoKSB7XHJcbiAgICAgICAgICAgICAgICBjLnggPSBuLnggKyBuLndpZHRoIC8gMiArIGhtICsgYy53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBjLnkgPSBjeSArIChjIGFzIExheW91dE5vZGUpLl9zaCAvIDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNYWShjKTtcclxuICAgICAgICAgICAgICAgIGN5ICs9IChjIGFzIExheW91dE5vZGUpLl9zaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMYXlvdXQgbGVmdCBjaGlsZHJlbiAobWlycm9yKVxyXG4gICAgICAgIGlmIChsZWZ0Q2gubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCB0b3QgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgbGVmdENoKSB0b3QgKz0gKGMgYXMgTGF5b3V0Tm9kZSkuX3NoO1xyXG4gICAgICAgICAgICBsZXQgY3kgPSBuLnkgLSB0b3QgLyAyO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgbGVmdENoKSB7XHJcbiAgICAgICAgICAgICAgICBjLnggPSBuLnggLSBuLndpZHRoIC8gMiAtIGhtIC0gYy53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBjLnkgPSBjeSArIChjIGFzIExheW91dE5vZGUpLl9zaCAvIDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNYWShjKTtcclxuICAgICAgICAgICAgICAgIGN5ICs9IChjIGFzIExheW91dE5vZGUpLl9zaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgY2FsY1codHh0OiBzdHJpbmcsIGlzUjogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZnMgPSBpc1IgPyB0aGlzLnN0eWxlLnJvb3RGb250U2l6ZSA6IHRoaXMuc3R5bGUubm9kZUZvbnRTaXplO1xyXG4gICAgICAgIGNvbnN0IGZmID0gaXNSID8gdGhpcy5zdHlsZS5yb290Rm9udEZhbWlseSA6IHRoaXMuc3R5bGUubm9kZUZvbnRGYW1pbHk7XHJcbiAgICAgICAgbGV0IG13ID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IGwgb2YgdHh0LnNwbGl0KFwiXFxuXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgZC5hZGRDbGFzcyhcIm16LW1lYXN1cmUtc3BhblwiKTtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoeyBcIi0tbXotZnNcIjogZnMgKyBcInB4XCIsIFwiLS1tei1mZlwiOiBmZiB9KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKFtrLCB2XSkgPT4gZC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZC5pbm5lclRleHQgPSBsIHx8IFwiIFwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGQpO1xyXG4gICAgICAgICAgICBpZiAoZC5vZmZzZXRXaWR0aCA+IG13KSBtdyA9IGQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChcclxuICAgICAgICAgICAgaXNSID8gdGhpcy5zdHlsZS5yb290TWluV2lkdGggOiB0aGlzLnN0eWxlLm5vZGVNaW5XaWR0aCxcclxuICAgICAgICAgICAgbXcgKyB0aGlzLnN0eWxlLm5vZGVQYWRYICogMiArIDQsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2FsY0godHh0OiBzdHJpbmcsIGlzUjogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZnMgPSBpc1IgPyB0aGlzLnN0eWxlLnJvb3RGb250U2l6ZSA6IHRoaXMuc3R5bGUubm9kZUZvbnRTaXplO1xyXG4gICAgICAgIGNvbnN0IGxoID0gdGhpcy5zdHlsZS5ub2RlTGluZUhlaWdodCB8fCAxLjU7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KFxyXG4gICAgICAgICAgICBpc1IgPyB0aGlzLnN0eWxlLnJvb3RNaW5IZWlnaHQgOiB0aGlzLnN0eWxlLm5vZGVNaW5IZWlnaHQsXHJcbiAgICAgICAgICAgIHR4dC5zcGxpdChcIlxcblwiKS5sZW5ndGggKiBmcyAqIGxoICsgMTQsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVjUG9zKCkge1xyXG4gICAgICAgIHRoaXMub2xkUG9zLmNsZWFyKCk7XHJcbiAgICAgICAgY29uc3QgdiA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbGRQb3Muc2V0KG4uaWQsIHsgeDogbi54LCB5OiBuLnkgfSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB2KGMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHYocik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFuaW1SZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVzRyB8fCAhdGhpcy5lZGdlc0cgfHwgIXRoaXMub2xkUG9zLnNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBucCA9IG5ldyBNYXA8c3RyaW5nLCB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHtcclxuICAgICAgICAgICAgdGhpcy5kb0xheW91dChyKTtcclxuICAgICAgICAgICAgY29uc3QgdiA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIG5wLnNldChuLmlkLCB7IHg6IG4ueCwgeTogbi55IH0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHYoYyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHYocik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNwID0gbmV3IE1hcDxzdHJpbmcsIHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4oKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtpZCwgcF0gb2YgbnApIHNwLnNldChpZCwgdGhpcy5vbGRQb3MuZ2V0KGlkKSA/PyBwKTtcclxuICAgICAgICBjb25zdCBkdXIgPSAyMDAsXHJcbiAgICAgICAgICAgIHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbUlkKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1JZCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbaWQsIHBdIG9mIG5wKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmZBbGwoaWQpO1xyXG4gICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgbi54ID0gcC54O1xyXG4gICAgICAgICAgICAgICAgbi55ID0gcC55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbaWQsIHBdIG9mIHNwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmZBbGwoaWQpO1xyXG4gICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgbi54ID0gcC54O1xyXG4gICAgICAgICAgICAgICAgbi55ID0gcC55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlRk8oKTtcclxuICAgICAgICB0aGlzLmVkZ2VzRy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLmRyYXdFZGdlcyhyKTtcclxuICAgICAgICBjb25zdCBzdGVwID0gKG5vdzogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR0ID0gTWF0aC5taW4oKG5vdyAtIHQwKSAvIGR1ciwgMSksXHJcbiAgICAgICAgICAgICAgICBlYXNlID0gMSAtIE1hdGgucG93KDEgLSB0dCwgMyk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2lkLCBmcF0gb2YgbnApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBzcC5nZXQoaWQpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmZBbGwoaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBuLnggPSBzLnggKyAoZnAueCAtIHMueCkgKiBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG4ueSA9IHMueSArIChmcC55IC0gcy55KSAqIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lZGdlc0chLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLmRyYXdFZGdlcyhyKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGTygpO1xyXG4gICAgICAgICAgICBpZiAodHQgPCAxKSB0aGlzLmFuaW1JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtpZCwgcF0gb2YgbnApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuID0gdGhpcy5mQWxsKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLnggPSBwLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ueSA9IHAueTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltSWQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFuaW1JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc29mdFJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWRnZXNHIHx8ICF0aGlzLm5vZGVzRykgcmV0dXJuO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLmRvTGF5b3V0KHIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRk8oKTtcclxuICAgICAgICB0aGlzLmVkZ2VzRy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLmRyYXdFZGdlcyhyKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURldlBhbmVsKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWRnZXNHIHx8ICF0aGlzLm5vZGVzRyB8fCAhdGhpcy5vdmVybGF5RykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZWRnZXNHLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5ub2Rlc0cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLm92ZXJsYXlHLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5saXZlVEEgPSBudWxsO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9MYXlvdXQocik7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0VkZ2VzKHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kcmF3Tm9kZXMocik7XHJcbiAgICAgICAgaWYgKHRoaXMuYm94U2VsICYmIHRoaXMuYm94RWwpIHRoaXMub3ZlcmxheUcuYXBwZW5kQ2hpbGQodGhpcy5ib3hFbCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXZQYW5lbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmVkaXRJZCkgdGhpcy5jbGVhclByb3h5KCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVuc3VyZVByb3h5KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGJQYXRoKHN4OiBudW1iZXIsIHN5OiBudW1iZXIsIGV4OiBudW1iZXIsIGV5OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkeCA9IGV4IC0gc3g7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0eWxlLmNvbm5lY3Rpb25TdHlsZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic3RyYWlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1cIiArIHN4ICsgXCIgXCIgKyBzeSArIFwiTFwiICsgZXggKyBcIiBcIiArIGV5O1xyXG4gICAgICAgICAgICBjYXNlIFwiY3VydmVkXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTVwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIlFcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKHN4ICsgZHggKiAwLjcpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3kgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV5XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYXNlIFwic3RlcFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBteCA9IChzeCArIGV4KSAvIDI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNXCIgKyBzeCArIFwiIFwiICsgc3kgKyBcIkhcIiArIG14ICsgXCJWXCIgKyBleSArIFwiSFwiICsgZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImJyYWNrZXRcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbXggPSBzeCArIGR4ICogMC41O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBcIk1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3ggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIG14ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3kgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBteCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwibG9vc2VcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN4ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3kgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ1wiICtcclxuICAgICAgICAgICAgICAgICAgICAoc3ggKyBkeCAqIDAuNikgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAoc3kgKyAoZXkgLSBzeSkgKiAwLjEpICtcclxuICAgICAgICAgICAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKGV4IC0gZHggKiAwLjMpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKGV5IC0gKGV5IC0gc3kpICogMC4xKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV4ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTVwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIkNcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKHN4ICsgZHggKiAwLjQpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3kgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgICAgICAgICAgICAoZXggLSBkeCAqIDAuNCkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV4ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcmF3RWRnZXMobmQ6IE1pbmROb2RlRGF0YSwgaW5oPzogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcFIgPSAhIW5kLmlzUm9vdDtcclxuICAgICAgICAvLyBGb3Igc3RlcC9icmFja2V0IHN0eWxlcywgei1vcmRlciBtYXR0ZXJzLiBEcmF3IGNoaWxkcmVuIGZ1cnRoZXN0IGZyb20gY2VudGVyIGZpcnN0LFxyXG4gICAgICAgIC8vIGNsb3Nlc3QgdG8gY2VudGVyIGxhc3QgKG9uIHRvcCksIHNvIGVhY2ggY2hpbGQncyBjb2xvciBpcyB2aXNpYmxlIGF0IHRoZSBqdW5jdGlvbi5cclxuICAgICAgICBjb25zdCBhYm92ZTogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBjb25zdCBiZWxvdzogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5kLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChuZC5jaGlsZHJlbltpXS55IDwgbmQueSkgYWJvdmUucHVzaChpKTtcclxuICAgICAgICAgICAgZWxzZSBiZWxvdy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBYm92ZTogdG9wLXRvLWJvdHRvbSAoZnVydGhlc3QgZmlyc3QsIGNsb3Nlc3QgdG8gY2VudGVyIGxhc3QgPSBvbiB0b3ApXHJcbiAgICAgICAgLy8gQmVsb3c6IGJvdHRvbS10by10b3AgKGZ1cnRoZXN0IGZpcnN0LCBjbG9zZXN0IHRvIGNlbnRlciBsYXN0ID0gb24gdG9wKVxyXG4gICAgICAgIGNvbnN0IG9yZGVyID0gWy4uLmFib3ZlLCAuLi5iZWxvdy5yZXZlcnNlKCldO1xyXG4gICAgICAgIGZvciAoY29uc3QgaSBvZiBvcmRlcikge1xyXG4gICAgICAgICAgICBjb25zdCBjaCA9IG5kLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmdldENDKGNoLCBwUiwgaSwgaW5oKTtcclxuICAgICAgICAgICAgY29uc3QgaXNMZWZ0ID0gY2guc2lkZSA9PT0gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgIC8vIEFjY291bnQgZm9yIGJvcmRlciB3aWR0aCBzbyBjb25uZWN0aW9ucyByZWFjaCBvdXRlciBlZGdlXHJcbiAgICAgICAgICAgIGNvbnN0IHBWaXMgPSB0aGlzLm5vZGVWaXMobmQpO1xyXG4gICAgICAgICAgICBjb25zdCBwQlcgPSBwVmlzLmJTICE9PSBcIm5vbmVcIiA/IHBWaXMuYlcgOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBjVmlzID0gdGhpcy5ub2RlVmlzKGNoKTtcclxuICAgICAgICAgICAgY29uc3QgY0JXID0gY1Zpcy5iUyAhPT0gXCJub25lXCIgPyBjVmlzLmJXIDogMDtcclxuICAgICAgICAgICAgY29uc3Qgc3ggPSBpc0xlZnRcclxuICAgICAgICAgICAgICAgID8gbmQueCAtIG5kLndpZHRoIC8gMiAtIHBCV1xyXG4gICAgICAgICAgICAgICAgOiBuZC54ICsgbmQud2lkdGggLyAyICsgcEJXO1xyXG4gICAgICAgICAgICBjb25zdCBleCA9IGlzTGVmdFxyXG4gICAgICAgICAgICAgICAgPyBjaC54ICsgY2gud2lkdGggLyAyICsgY0JXXHJcbiAgICAgICAgICAgICAgICA6IGNoLnggLSBjaC53aWR0aCAvIDIgLSBjQlc7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICBcInBhdGhcIixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJkXCIsIHRoaXMuYlBhdGgoc3gsIG5kLnksIGV4LCBjaC55KSk7XHJcbiAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGNvbCk7XHJcbiAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIixcclxuICAgICAgICAgICAgICAgIFN0cmluZyhjaC5jb25uZWN0aW9uV2lkdGggPz8gdGhpcy5zdHlsZS5jb25uZWN0aW9uV2lkdGgpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBwLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICBwLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuZHM/LmlzRHJhZ2dpbmcgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLmRzLmlzUm9vdERyYWcgJiZcclxuICAgICAgICAgICAgICAgICh0aGlzLmRzIGFzIENoaWxkRHJhZykubm9kZUlkID09PSBjaC5pZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBwLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgXCIwLjE1XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmVkZ2VzRy5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3RWRnZXMoXHJcbiAgICAgICAgICAgICAgICBjaCxcclxuICAgICAgICAgICAgICAgIGNoLmNvbm5lY3Rpb25Db2xvciA/P1xyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0eWxlLmNvbm5lY3Rpb25SYWluYm93ICYmIHBSID8gY29sIDogaW5oKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyYXdOb2RlcyhuOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICB0aGlzLmRyYXdPbmUobik7XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHRoaXMuZHJhd05vZGVzKGMpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcmF3T25lKG5kOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICBjb25zdCBmbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICBcImZvcmVpZ25PYmplY3RcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIGZvLmlkID0gXCJtbi1cIiArIG5kLmlkO1xyXG4gICAgICAgIGNvbnN0IHYgPSB0aGlzLm5vZGVWaXMobmQpO1xyXG4gICAgICAgIGNvbnN0IGJXID0gdi5iUyAhPT0gXCJub25lXCIgPyB2LmJXIDogMDtcclxuICAgICAgICBjb25zdCB2aXN1YWxXID0gbmQud2lkdGggKyBiVyAqIDI7XHJcbiAgICAgICAgY29uc3QgdmlzdWFsSCA9IG5kLmhlaWdodCArIGJXICogMjtcclxuICAgICAgICBjb25zdCBzZWxFeCA9IHRoaXMuaXNTZWwobmQuaWQpID8gdGhpcy5zdHlsZS5zZWxlY3Rpb25XaWR0aCArIDQgOiAwO1xyXG4gICAgICAgIGZvLnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKG5kLnggLSB2aXN1YWxXIC8gMiAtIHNlbEV4KSk7XHJcbiAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcobmQueSAtIHZpc3VhbEggLyAyIC0gc2VsRXgpKTtcclxuICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcodmlzdWFsVyArIHNlbEV4ICogMikpO1xyXG4gICAgICAgIGZvLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcodmlzdWFsSCArIHNlbEV4ICogMikpO1xyXG4gICAgICAgIGZvLnNldEF0dHJpYnV0ZShcIm92ZXJmbG93XCIsIFwidmlzaWJsZVwiKTtcclxuICAgICAgICAvLyBvdmVyZmxvdzp2aXNpYmxlIHNldCB2aWEgU1ZHIGF0dHJpYnV0ZSBhYm92ZVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5kcz8uaXNEcmFnZ2luZyAmJlxyXG4gICAgICAgICAgICAhdGhpcy5kcy5pc1Jvb3REcmFnICYmXHJcbiAgICAgICAgICAgICh0aGlzLmRzIGFzIENoaWxkRHJhZykubm9kZUlkID09PSBuZC5pZFxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgZm8udG9nZ2xlQ2xhc3MoXCJtei1kcmFnLXRyYW5zcGFyZW50XCIsIHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHdyYXAuYWRkQ2xhc3MoXCJtei1ub2RlLXdyYXBcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdElkID09PSBuZC5pZCkgd3JhcC5hcHBlbmRDaGlsZCh0aGlzLm1rVEEobmQpKTtcclxuICAgICAgICBlbHNlIHdyYXAuYXBwZW5kQ2hpbGQodGhpcy5ta0RpdihuZCkpO1xyXG4gICAgICAgIGZvLmFwcGVuZENoaWxkKHdyYXApO1xyXG4gICAgICAgIHRoaXMubm9kZXNHLmFwcGVuZENoaWxkKGZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5vZGVWaXMobmQ6IE1pbmROb2RlRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGlzUiA9ICEhbmQuaXNSb290O1xyXG4gICAgICAgIGNvbnN0IHNvID0gbmQuc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICBjb25zdCBiZyA9XHJcbiAgICAgICAgICAgIHNvLmJnQ29sb3IgPz9cclxuICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEJnQ29sb3IgOiB0aGlzLnN0eWxlLm5vZGVCZ0NvbG9yKTtcclxuICAgICAgICBjb25zdCB0YyA9XHJcbiAgICAgICAgICAgIHNvLnRleHRDb2xvciA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290VGV4dENvbG9yIDogdGhpcy5zdHlsZS5ub2RlVGV4dENvbG9yKTtcclxuICAgICAgICBjb25zdCBmcyA9XHJcbiAgICAgICAgICAgIHNvLmZvbnRTaXplID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RGb250U2l6ZSA6IHRoaXMuc3R5bGUubm9kZUZvbnRTaXplKTtcclxuICAgICAgICBjb25zdCBmZiA9XHJcbiAgICAgICAgICAgIHNvLmZvbnRGYW1pbHkgPz9cclxuICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEZvbnRGYW1pbHkgOiB0aGlzLnN0eWxlLm5vZGVGb250RmFtaWx5KTtcclxuICAgICAgICBjb25zdCBiUyA9XHJcbiAgICAgICAgICAgIHNvLmJvcmRlclN0eWxlID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCb3JkZXJTdHlsZSA6IHRoaXMuc3R5bGUubm9kZUJvcmRlclN0eWxlKTtcclxuICAgICAgICBjb25zdCBiVyA9XHJcbiAgICAgICAgICAgIHNvLmJvcmRlcldpZHRoID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCb3JkZXJXaWR0aCA6IHRoaXMuc3R5bGUubm9kZUJvcmRlcldpZHRoKTtcclxuICAgICAgICBsZXQgYkMgPVxyXG4gICAgICAgICAgICBzby5ib3JkZXJDb2xvciA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyQ29sb3IgOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJDb2xvcik7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmNvbm5lY3Rpb25SYWluYm93ICYmXHJcbiAgICAgICAgICAgICFzby5ib3JkZXJDb2xvciAmJlxyXG4gICAgICAgICAgICAhaXNSICYmXHJcbiAgICAgICAgICAgIG5kLmNvbm5lY3Rpb25Db2xvclxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgYkMgPSBuZC5jb25uZWN0aW9uQ29sb3I7XHJcbiAgICAgICAgY29uc3QgcmFkID1cclxuICAgICAgICAgICAgc28uYm9yZGVyUmFkaXVzID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCb3JkZXJSYWRpdXMgOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJSYWRpdXMpO1xyXG4gICAgICAgIHJldHVybiB7IGlzUiwgYmcsIHRjLCBmcywgZmYsIGJTLCBiVywgYkMsIHJhZCB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBta0RpdihuZDogTWluZE5vZGVEYXRhKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgdiA9IHRoaXMubm9kZVZpcyhuZCk7XHJcbiAgICAgICAgY29uc3Qgc2VsID0gdGhpcy5pc1NlbChuZC5pZCk7XHJcbiAgICAgICAgY29uc3QgdGEgPSB0aGlzLnN0eWxlLnRleHRBbGlnbjtcclxuICAgICAgICBjb25zdCBwYWRYID0gdGhpcy5zdHlsZS5ub2RlUGFkWDtcclxuICAgICAgICBjb25zdCBsaCA9IHRoaXMuc3R5bGUubm9kZUxpbmVIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgb2ZmID0gdGhpcy5zdHlsZS5zZWxlY3Rpb25PdXRsaW5lT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGJXID0gdi5iUyAhPT0gXCJub25lXCIgPyB2LmJXIDogMDtcclxuICAgICAgICBjb25zdCB2aXN1YWxXID0gbmQud2lkdGggKyBiVyAqIDI7XHJcbiAgICAgICAgY29uc3QgdmlzdWFsSCA9IG5kLmhlaWdodCArIGJXICogMjtcclxuICAgICAgICBjb25zdCBib3JkZXJDU1MgPVxyXG4gICAgICAgICAgICB2LmJTICE9PSBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgPyBgYm9yZGVyOiR7di5iV31weCAke3YuYlN9ICR7di5iQ307YFxyXG4gICAgICAgICAgICAgICAgOiBcImJvcmRlcjpub25lO1wiO1xyXG4gICAgICAgIGNvbnN0IHNlbENTUyA9IHNlbFxyXG4gICAgICAgICAgICA/IGBvdXRsaW5lOiR7dGhpcy5zdHlsZS5zZWxlY3Rpb25XaWR0aH1weCBzb2xpZCAke3RoaXMuc3R5bGUuc2VsZWN0aW9uQ29sb3J9O291dGxpbmUtb2Zmc2V0OiR7b2ZmfXB4O2BcclxuICAgICAgICAgICAgOiBcIlwiO1xyXG4gICAgICAgIGRpdi5hZGRDbGFzcyhcIm16LW5vZGUtZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IGRzID0gZGl2LnN0eWxlO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei13XCIsIHZpc3VhbFcgKyBcInB4XCIpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1oXCIsIHZpc3VhbEggKyBcInB4XCIpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFxyXG4gICAgICAgICAgICBcIi0tbXotamNcIixcclxuICAgICAgICAgICAgdGEgPT09IFwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICA/IFwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICA6IHRhID09PSBcInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgPyBcImZsZXgtZW5kXCJcclxuICAgICAgICAgICAgICAgICAgOiBcImNlbnRlclwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LXJhZFwiLCB2LnJhZCArIFwicHhcIik7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LWZ3XCIsIFN0cmluZyh2LmlzUiA/IDcwMCA6IDUwMCkpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1mc1wiLCB2LmZzICsgXCJweFwiKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotZmZcIiwgdi5mZik7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LXRhXCIsIHRhKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotbGhcIiwgU3RyaW5nKGxoKSk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LWJnXCIsIHYuYmcpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei10Y1wiLCB2LnRjKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotcGFkXCIsIGA2cHggJHtwYWRYfXB4YCk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LWN1cnNvclwiLCB2LmlzUiA/IFwibW92ZVwiIDogXCJncmFiXCIpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFxyXG4gICAgICAgICAgICBcIi0tbXotYm9yZGVyXCIsXHJcbiAgICAgICAgICAgIHYuYlMgIT09IFwibm9uZVwiID8gYCR7di5iV31weCAke3YuYlN9ICR7di5iQ31gIDogXCJub25lXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcclxuICAgICAgICAgICAgXCItLW16LW91dGxpbmVcIixcclxuICAgICAgICAgICAgc2VsXHJcbiAgICAgICAgICAgICAgICA/IGAke3RoaXMuc3R5bGUuc2VsZWN0aW9uV2lkdGh9cHggc29saWQgJHt0aGlzLnN0eWxlLnNlbGVjdGlvbkNvbG9yfWBcclxuICAgICAgICAgICAgICAgIDogXCJub25lXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotb3V0bGluZS1vZmZcIiwgc2VsID8gb2ZmICsgXCJweFwiIDogXCIwXCIpO1xyXG4gICAgICAgIGRpdi5pbm5lclRleHQgPSBuZC50ZXh0O1xyXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwYWNlRG93bikgcmV0dXJuO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNjPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRGJsID0gdGhpcy5sY25pZCA9PT0gbmQuaWQgJiYgbm93IC0gdGhpcy5sY3QgPCAzMDA7XHJcbiAgICAgICAgICAgIHRoaXMubGN0ID0gbm93O1xyXG4gICAgICAgICAgICB0aGlzLmxjbmlkID0gbmQuaWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbW1pdEVkaXQgJiYgdGhpcy5lZGl0SWQgIT09IG5kLmlkKSB0aGlzLmNvbW1pdEVkaXQoKTtcclxuICAgICAgICAgICAgaWYgKGlzRGJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRJZCA9IG5kLmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSB8fCBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ1NlbChuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aVNlbC5oYXMobmQuaWQpKSB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCByYyA9IHRoaXMuY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGx4ID0gKGUuY2xpZW50WCAtIHJjLmxlZnQgLSB0aGlzLnBhblgpIC8gdGhpcy56b29tLFxyXG4gICAgICAgICAgICAgICAgbHkgPSAoZS5jbGllbnRZIC0gcmMudG9wIC0gdGhpcy5wYW5ZKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgaWYgKG5kLmlzUm9vdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVlcnM6IHsgaWQ6IHN0cmluZzsgc3g6IG51bWJlcjsgc3k6IG51bWJlciB9W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpU2VsLnNpemUgPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbWlkIG9mIHRoaXMubXVsdGlTZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZCA9PT0gbmQuaWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtbiA9IHRoaXMuZkFsbChtaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW4/LmlzUm9vdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJzLnB1c2goeyBpZDogbWlkLCBzeDogbW4ueCwgc3k6IG1uLnkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpc0RyYWdnaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpc1Jvb3REcmFnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbmQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRYOiBseCxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFk6IGx5LFxyXG4gICAgICAgICAgICAgICAgICAgIG5zeDogbmQueCxcclxuICAgICAgICAgICAgICAgICAgICBuc3k6IG5kLnksXHJcbiAgICAgICAgICAgICAgICAgICAgcGVlcnM6IHBlZXJzLmxlbmd0aCA/IHBlZXJzIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSb290RHJhZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBuZC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFg6IGx4LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WTogbHksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2hvc3RFbDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JFbDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBzbmFwOiBKU09OLnN0cmluZ2lmeSh0aGlzLnJvb3RzKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Tm9kZUN0eChlLCBuZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1rVEEobmQ6IE1pbmROb2RlRGF0YSk6IEhUTUxUZXh0QXJlYUVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgICAgIHRhLnZhbHVlID0gbmQudGV4dDtcclxuICAgICAgICBjb25zdCB2ID0gdGhpcy5ub2RlVmlzKG5kKTtcclxuICAgICAgICBjb25zdCB0QWxpZ24gPSB0aGlzLnN0eWxlLnRleHRBbGlnbjtcclxuICAgICAgICBjb25zdCBlZGl0T0MgPSB0aGlzLnN0eWxlLmVkaXRPdXRsaW5lQ29sb3I7XHJcbiAgICAgICAgY29uc3QgcGFkWCA9IHRoaXMuc3R5bGUubm9kZVBhZFg7XHJcbiAgICAgICAgY29uc3QgbGggPSB0aGlzLnN0eWxlLm5vZGVMaW5lSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IG9mZiA9IHRoaXMuc3R5bGUuc2VsZWN0aW9uT3V0bGluZU9mZnNldDtcclxuICAgICAgICBjb25zdCBiVyA9IHYuYlMgIT09IFwibm9uZVwiID8gdi5iVyA6IDA7XHJcbiAgICAgICAgY29uc3QgdmlzdWFsVyA9IG5kLndpZHRoICsgYlcgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpc3VhbEggPSBuZC5oZWlnaHQgKyBiVyAqIDI7XHJcbiAgICAgICAgY29uc3QgYm9yZGVyQ1NTID1cclxuICAgICAgICAgICAgdi5iUyAhPT0gXCJub25lXCJcclxuICAgICAgICAgICAgICAgID8gYGJvcmRlcjoke3YuYld9cHggJHt2LmJTfSAke3YuYkN9O2BcclxuICAgICAgICAgICAgICAgIDogXCJib3JkZXI6bm9uZTtcIjtcclxuICAgICAgICBjb25zdCBlZGl0T1cgPSB0aGlzLnN0eWxlLmVkaXRPdXRsaW5lV2lkdGg7XHJcbiAgICAgICAgY29uc3QgZWRpdENTUyA9IGBvdXRsaW5lOiR7ZWRpdE9XfXB4IHNvbGlkICR7ZWRpdE9DfTtvdXRsaW5lLW9mZnNldDoke29mZn1weDt0cmFuc2l0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmU7YDtcclxuICAgICAgICB0YS5hZGRDbGFzcyhcIm16LW5vZGUtdGFcIik7XHJcbiAgICAgICAgY29uc3QgdHMgPSB0YS5zdHlsZTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotd1wiLCB2aXN1YWxXICsgXCJweFwiKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotaFwiLCB2aXN1YWxIICsgXCJweFwiKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotcmFkXCIsIHYucmFkICsgXCJweFwiKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotZndcIiwgU3RyaW5nKHYuaXNSID8gNzAwIDogNTAwKSk7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LWZzXCIsIHYuZnMgKyBcInB4XCIpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1mZlwiLCB2LmZmKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotdGFcIiwgdEFsaWduKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotbGhcIiwgU3RyaW5nKGxoKSk7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LWJnXCIsIHYuYmcpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei10Y1wiLCB2LnRjKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotcGFkXCIsIGA2cHggJHtwYWRYfXB4YCk7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXHJcbiAgICAgICAgICAgIFwiLS1tei1ib3JkZXJcIixcclxuICAgICAgICAgICAgdi5iUyAhPT0gXCJub25lXCIgPyBgJHt2LmJXfXB4ICR7di5iU30gJHt2LmJDfWAgOiBcIm5vbmVcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1lZGl0LW91dGxpbmVcIiwgYCR7ZWRpdE9XfXB4IHNvbGlkICR7ZWRpdE9DfWApO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1lZGl0LW91dGxpbmUtb2ZmXCIsIG9mZiArIFwicHhcIik7XHJcbiAgICAgICAgdGEuYWRkQ2xhc3MoXCJtei1ub2RlLXRhXCIpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1zZWwtYmdcIiwgZWRpdE9DICsgXCI0MFwiKTtcclxuICAgICAgICB0YS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcclxuICAgICAgICAvLyBGSVg6IGlucHV0IGhhbmRsZXIgXHUyMDE0IHJlY2FsYyBzaXplIGJvdGggZ3JvdyBBTkQgc2hyaW5rXHJcbiAgICAgICAgdGEuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHh0ID0gdGEudmFsdWUgfHwgXCIgXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IG53ID0gdGhpcy5jYWxjVyh0eHQsICEhbmQuaXNSb290KTtcclxuICAgICAgICAgICAgY29uc3QgbmggPSB0aGlzLmNhbGNIKHR4dCwgISFuZC5pc1Jvb3QpO1xyXG4gICAgICAgICAgICBpZiAobncgIT09IG5kLndpZHRoIHx8IG5oICE9PSBuZC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5kLndpZHRoID0gbnc7XHJcbiAgICAgICAgICAgICAgICBuZC5oZWlnaHQgPSBuaDtcclxuICAgICAgICAgICAgICAgIHRhLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tei13XCIsIG5kLndpZHRoICsgYlcgKiAyICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgIHRhLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tei1oXCIsIG5kLmhlaWdodCArIGJXICogMiArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvZnRSZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubGl2ZVRBID0gdGE7XHJcbiAgICAgICAgY29uc3Qgc2F2ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZWRpdElkICE9PSBuZC5pZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCB0eHQgPSB0YS52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKG5kLnRleHQgIT09IHR4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgICAgICAgICAgbmQudGV4dCA9IHR4dDtcclxuICAgICAgICAgICAgICAgIG5kLndpZHRoID0gdGhpcy5jYWxjVyh0eHQgfHwgXCIgXCIsICEhbmQuaXNSb290KTtcclxuICAgICAgICAgICAgICAgIG5kLmhlaWdodCA9IHRoaXMuY2FsY0godHh0IHx8IFwiIFwiLCAhIW5kLmlzUm9vdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1pdEVkaXQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmxpdmVUQSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbW1pdEVkaXQgPSBzYXZlO1xyXG4gICAgICAgIHRhLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwia2V5ZG93blwiLFxyXG4gICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGUua2V5ID09PSBcIkVudGVyXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAhZS5zaGlmdEtleSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IubGluZUJyZWFrKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiVGFiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJbnNlcnQgdGFiIGF0IGN1cnNvciBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHMgPSB0YS5zZWxlY3Rpb25TdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gdGEuc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGEudmFsdWUuc3Vic3RyaW5nKDAsIHMpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhLnZhbHVlLnN1YnN0cmluZyhlbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhLnNlbGVjdGlvblN0YXJ0ID0gdGEuc2VsZWN0aW9uRW5kID0gcyArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGEuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBDdHJsK1VwID0gSG9tZSwgQ3RybCtEb3duID0gRW5kLCBDdHJsK1NoaWZ0K1VwID0gU2hpZnQrSG9tZSwgQ3RybCtTaGlmdCtEb3duID0gU2hpZnQrRW5kXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgJiYgZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhLnNlbGVjdGlvblN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHRhLnNlbGVjdGlvbkVuZCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJiBlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSB0YS52YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGEuc2VsZWN0aW9uRW5kID0gbGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZS5zaGlmdEtleSkgdGEuc2VsZWN0aW9uU3RhcnQgPSBsZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGEuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0YS5zZWxlY3QoKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICByZXR1cm4gdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVGTygpIHtcclxuICAgICAgICBjb25zdCB2ID0gKG46IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSB0aGlzLmlzU2VsKG4uaWQpO1xyXG4gICAgICAgICAgICBjb25zdCBleCA9IHNlbCA/IHRoaXMuc3R5bGUuc2VsZWN0aW9uV2lkdGggKyA0IDogMDtcclxuICAgICAgICAgICAgY29uc3QgbnYgPSB0aGlzLm5vZGVWaXMobik7XHJcbiAgICAgICAgICAgIGNvbnN0IGJXID0gbnYuYlMgIT09IFwibm9uZVwiID8gbnYuYlcgOiAwO1xyXG4gICAgICAgICAgICBjb25zdCB2dyA9IG4ud2lkdGggKyBiVyAqIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHZoID0gbi5oZWlnaHQgKyBiVyAqIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtbi1cIiArIG4uaWQpO1xyXG4gICAgICAgICAgICBpZiAoZm8pIHtcclxuICAgICAgICAgICAgICAgIGZvLnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKG4ueCAtIHZ3IC8gMiAtIGV4KSk7XHJcbiAgICAgICAgICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyhuLnkgLSB2aCAvIDIgLSBleCkpO1xyXG4gICAgICAgICAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHZ3ICsgZXggKiAyKSk7XHJcbiAgICAgICAgICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKHZoICsgZXggKiAyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHYoYyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdihyKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2xvc2VNZW51KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZU1lbnUpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVNZW51LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTWVudSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzaG93TWVudShtZW51OiBNZW51LCBlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZU1lbnUgPSBtZW51O1xyXG4gICAgICAgIG1lbnUuc2hvd0F0TW91c2VFdmVudChlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2hvd0NhbnZhc0N0eChlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcCgpO1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBuZXcgTWVudSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGkoKSkge1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0KFwiY3R4LmJhdGNoRGVsXCIpICsgXCIgKFwiICsgdGhpcy5hbGxTZWwoKS5zaXplICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJY29uKFwidHJhc2hcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLmJhdGNoRGVsKCkpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguZWRpdFN0eWxlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJY29uKFwicGFsZXR0ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuc2hvd05vZGVTdHlsZUVkaXRvcihlKSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHgubmV3Um9vdFwiKSlcclxuICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicGx1cy1jaXJjbGVcIilcclxuICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gdGhpcy5jYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFJvb3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLmdldFJvb3ROYW1lKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLmNsaWVudFggLSByLmxlZnQgLSB0aGlzLnBhblgpIC8gdGhpcy56b29tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5jbGllbnRZIC0gci50b3AgLSB0aGlzLnBhblkpIC8gdGhpcy56b29tLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XHJcbiAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC51bmRvXCIpKVxyXG4gICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJ1bmRvXCIpXHJcbiAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnVuZG8oKSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LnJlZG9cIikpXHJcbiAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInJlZG9cIilcclxuICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMucmVkbygpKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XHJcbiAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5nbG9iYWxTdHlsZVwiKSlcclxuICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicGFsZXR0ZVwiKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy5zaG93U3R5bGVNb2RhbCgpKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2hvd01lbnUobWVudSwgZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNob3dOb2RlQ3R4KGU6IE1vdXNlRXZlbnQsIG5kOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICB0aGlzLmNsb3NlUG9wKCk7XHJcbiAgICAgICAgY29uc3QgbWVudSA9IG5ldyBNZW51KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNdWx0aSgpKSB7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQoXCJjdHguYmF0Y2hEZWxcIikgKyBcIiAoXCIgKyB0aGlzLmFsbFNlbCgpLnNpemUgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJ0cmFzaFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuYmF0Y2hEZWwoKSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5lZGl0U3R5bGVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJwYWxldHRlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy5zaG93Tm9kZVN0eWxlRWRpdG9yKGUpKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguZWRpdFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInBlbmNpbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0SWQgPSBuZC5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LnN0eWxlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicGFsZXR0ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuc2hvd05vZGVTdHlsZUVkaXRvcihlKSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5jb3B5XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwiY29weVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWwxKG5kLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3B5Tm9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5jdXRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJzY2lzc29yc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWwxKG5kLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3B5Tm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkKVxyXG4gICAgICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHgucGFzdGVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwiY2xpcGJvYXJkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhc3RlTm9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LmNoaWxkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicGx1c1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWwxKG5kLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZE5vZGUobmQuaXNSb290ID8gXCJyaWdodFwiIDogdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKG5kLmlzUm9vdClcclxuICAgICAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LmxlZnRDaGlsZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJhcnJvdy1sZWZ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZExlZnRDaGlsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICghbmQuaXNSb290KVxyXG4gICAgICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguc2libGluZ1wiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJwbHVzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNpYmxpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguZGVsZXRlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwidHJhc2hcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dNZW51KG1lbnUsIGUpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBiYXRjaERlbCgpIHtcclxuICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpZCBvZiB0aGlzLmFsbFNlbCgpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvb3RzLnNvbWUoKHIpID0+IHIuaWQgPT09IGlkKSlcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdHMgPSB0aGlzLnJvb3RzLmZpbHRlcigocikgPT4gci5pZCAhPT0gaWQpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMucmVtQWxsKGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbHJTZWwoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHN0YXJ0Qm94KGx4OiBudW1iZXIsIGx5OiBudW1iZXIsIHNoaWZ0OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5ib3hTZWwgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYm94U2hpZnQgPSBzaGlmdDtcclxuICAgICAgICB0aGlzLmJzeCA9IGx4O1xyXG4gICAgICAgIHRoaXMuYnN5ID0gbHk7XHJcbiAgICAgICAgdGhpcy5iY3ggPSBseDtcclxuICAgICAgICB0aGlzLmJjeSA9IGx5O1xyXG4gICAgICAgIHRoaXMuYm94RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgXCJyZWN0XCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZ2JhKDU5LDEzMCwyNDYsMC4wNilcIik7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJyZ2JhKDU5LDEzMCwyNDYsMC40KVwiKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjFcIik7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiNiAzXCIpO1xyXG4gICAgICAgIHRoaXMuYm94RWwuc2V0QXR0cmlidXRlKFwicnhcIiwgXCI0XCIpO1xyXG4gICAgICAgIC8vIGJveC1zZWxlY3QgcG9pbnRlci1ldmVudHMgaGFuZGxlZCBieSBDU1NcclxuICAgICAgICB0aGlzLm92ZXJsYXlHLmFwcGVuZENoaWxkKHRoaXMuYm94RWwpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1cGRCb3gobHg6IG51bWJlciwgbHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYmN4ID0gbHg7XHJcbiAgICAgICAgdGhpcy5iY3kgPSBseTtcclxuICAgICAgICBpZiAoIXRoaXMuYm94RWwpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKE1hdGgubWluKHRoaXMuYnN4LCBseCkpKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKE1hdGgubWluKHRoaXMuYnN5LCBseSkpKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyhNYXRoLmFicyhseCAtIHRoaXMuYnN4KSkpO1xyXG4gICAgICAgIHRoaXMuYm94RWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhNYXRoLmFicyhseSAtIHRoaXMuYnN5KSkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBlbmRCb3goX2U6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmJveFNlbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYm94RWw/LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuYm94RWwgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IGJ4MSA9IE1hdGgubWluKHRoaXMuYnN4LCB0aGlzLmJjeCksXHJcbiAgICAgICAgICAgIGJ5MSA9IE1hdGgubWluKHRoaXMuYnN5LCB0aGlzLmJjeSksXHJcbiAgICAgICAgICAgIGJ4MiA9IE1hdGgubWF4KHRoaXMuYnN4LCB0aGlzLmJjeCksXHJcbiAgICAgICAgICAgIGJ5MiA9IE1hdGgubWF4KHRoaXMuYnN5LCB0aGlzLmJjeSk7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGJ4MiAtIGJ4MSkgPCA1ICYmIE1hdGguYWJzKGJ5MiAtIGJ5MSkgPCA1KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5ib3hTaGlmdCkgdGhpcy5jbHJTZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgICAgICBjb25zdCBjaGsgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5sID0gbi54IC0gbi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICBuciA9IG4ueCArIG4ud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgbnQgPSBuLnkgLSBuLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICBuYiA9IG4ueSArIG4uaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgaWYgKG5yID49IGJ4MSAmJiBubCA8PSBieDIgJiYgbmIgPj0gYnkxICYmIG50IDw9IGJ5MikgaWRzLmFkZChuLmlkKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIGNoayhjKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSBjaGsocik7XHJcbiAgICAgICAgaWYgKHRoaXMuYm94U2hpZnQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHRoaXMudG9nU2VsKGlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB0aGlzLm11bHRpU2VsLmFkZChpZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm11bHRpU2VsLnNpemUgPT09IDEpIHRoaXMuc2VsMShbLi4udGhpcy5tdWx0aVNlbF1bMF0pO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLm11bHRpU2VsLnNpemUgPiAxKSB0aGlzLnNlbElkID0gWy4uLnRoaXMubXVsdGlTZWxdWzBdO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuY2xyU2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzRGVzYyh0Z3Q6IE1pbmROb2RlRGF0YSwgcGlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBkID0gdGhpcy5mQWxsKHBpZCk7XHJcbiAgICAgICAgcmV0dXJuIGQgPyB0aGlzLmZOKHRndC5pZCwgZCkgIT09IG51bGwgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZGV0VGd0KFxyXG4gICAgICAgIGxlZnRYOiBudW1iZXIsXHJcbiAgICAgICAgcmlnaHRYOiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyLFxyXG4gICAgICAgIGRpZDogc3RyaW5nLFxyXG4gICAgKTogeyBpZDogc3RyaW5nOyB6b25lOiBcImNoaWxkXCIgfCBcImJlZm9yZVwiIHwgXCJhZnRlclwiIH0gfCBudWxsIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICBjb25zdCBoID0gdGhpcy5fZHQobGVmdFgsIHJpZ2h0WCwgeSwgciwgZGlkKTtcclxuICAgICAgICAgICAgaWYgKGgpIHJldHVybiBoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2R0KFxyXG4gICAgICAgIGxlZnRYOiBudW1iZXIsXHJcbiAgICAgICAgcmlnaHRYOiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyLFxyXG4gICAgICAgIG46IE1pbmROb2RlRGF0YSxcclxuICAgICAgICBkaWQ6IHN0cmluZyxcclxuICAgICk6IHsgaWQ6IHN0cmluZzsgem9uZTogXCJjaGlsZFwiIHwgXCJiZWZvcmVcIiB8IFwiYWZ0ZXJcIiB9IHwgbnVsbCB7XHJcbiAgICAgICAgLy8gQmxvY2sgZHJvcCBvbnRvIGFueSBzZWxlY3RlZCBub2RlIG9yIGl0cyBkZXNjZW5kYW50c1xyXG4gICAgICAgIGNvbnN0IHNlbElkcyA9IHRoaXMuYWxsU2VsKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBzaWQgb2Ygc2VsSWRzKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmlkID09PSBzaWQgfHwgdGhpcy5pc0Rlc2Mobiwgc2lkKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLmlkID09PSBkaWQgfHwgdGhpcy5pc0Rlc2MobiwgZGlkKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgLy8gVXNlIHJpZ2h0IGVkZ2UgZm9yIGxlZnQtc2lkZSBub2RlcywgbGVmdCBlZGdlIGZvciByaWdodC1zaWRlIG5vZGVzXHJcbiAgICAgICAgY29uc3QgeCA9IGxlZnRYO1xyXG4gICAgICAgIGNvbnN0IHBhZCA9IDI1O1xyXG4gICAgICAgIGNvbnN0IGwgPSBuLnggLSBuLndpZHRoIC8gMiAtIHBhZCxcclxuICAgICAgICAgICAgciA9IG4ueCArIG4ud2lkdGggLyAyICsgcGFkLFxyXG4gICAgICAgICAgICB0b3AgPSBuLnkgLSBuLmhlaWdodCAvIDIgLSBwYWQsXHJcbiAgICAgICAgICAgIGIgPSBuLnkgKyBuLmhlaWdodCAvIDIgKyBwYWQ7XHJcbiAgICAgICAgaWYgKHggPj0gbCAmJiB4IDw9IHIgJiYgeSA+PSB0b3AgJiYgeSA8PSBiKSB7XHJcbiAgICAgICAgICAgIGxldCB6OiBcImNoaWxkXCIgfCBcImJlZm9yZVwiIHwgXCJhZnRlclwiID0gXCJjaGlsZFwiO1xyXG4gICAgICAgICAgICBpZiAoIW4uaXNSb290KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoID0gbi5oZWlnaHQgKyBwYWQgKiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ5ID0geSAtIHRvcDtcclxuICAgICAgICAgICAgICAgIGlmIChyeSA8IGggKiAwLjQpIHogPSBcImJlZm9yZVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocnkgPiBoICogMC42KSB6ID0gXCJhZnRlclwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlkOiBuLmlkLCB6b25lOiB6IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGggPSB0aGlzLl9kdChsZWZ0WCwgcmlnaHRYLCB5LCBjLCBkaWQpO1xyXG4gICAgICAgICAgICBpZiAoaCkgcmV0dXJuIGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW1UcmVlKGlkOiBzdHJpbmcsIG46IE1pbmROb2RlRGF0YSk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobi5jaGlsZHJlbltpXS5pZCA9PT0gaWQpIHJldHVybiBuLmNoaWxkcmVuLnNwbGljZShpLCAxKVswXTtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMucmVtVHJlZShpZCwgbi5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIGlmIChmKSByZXR1cm4gZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlbUFsbChpZDogc3RyaW5nKTogTWluZE5vZGVEYXRhIHwgbnVsbCB7XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMucmVtVHJlZShpZCwgcik7XHJcbiAgICAgICAgICAgIGlmIChmKSByZXR1cm4gZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGluc1RyZWUoXHJcbiAgICAgICAgbmk6IE1pbmROb2RlRGF0YSxcclxuICAgICAgICB0aWQ6IHN0cmluZyxcclxuICAgICAgICB6b25lOiBcImNoaWxkXCIgfCBcImJlZm9yZVwiIHwgXCJhZnRlclwiLFxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgdG4gPSB0aGlzLmZBbGwodGlkKTtcclxuICAgICAgICBpZiAoIXRuKSByZXR1cm47XHJcbiAgICAgICAgLy8gSW5oZXJpdCBzaWRlIGZyb20gdGFyZ2V0XHJcbiAgICAgICAgY29uc3Qgc2V0U2lkZSA9IChuOiBNaW5kTm9kZURhdGEsIHM/OiBcImxlZnRcIiB8IFwicmlnaHRcIikgPT4ge1xyXG4gICAgICAgICAgICBuLnNpZGUgPSBzO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgc2V0U2lkZShjLCBzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh6b25lID09PSBcImNoaWxkXCIgfHwgdG4uaXNSb290KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFNpZGUgPSB0bi5pc1Jvb3QgPyBuaS5zaWRlIDogdG4uc2lkZTtcclxuICAgICAgICAgICAgc2V0U2lkZShuaSwgdGFyZ2V0U2lkZSk7XHJcbiAgICAgICAgICAgIHRuLmNoaWxkcmVuLnB1c2gobmkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNpZGUobmksIHRuLnNpZGUpO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLmZQKHRpZCwgcik7XHJcbiAgICAgICAgICAgIGlmIChwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBwLmNoaWxkcmVuLmZpbmRJbmRleCgoYykgPT4gYy5pZCA9PT0gdGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5jaGlsZHJlbi5zcGxpY2Uoem9uZSA9PT0gXCJiZWZvcmVcIiA/IGlkeCA6IGlkeCArIDEsIDAsIG5pKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZOKGlkOiBzdHJpbmcsIG46IE1pbmROb2RlRGF0YSk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGlmIChuLmlkID09PSBpZCkgcmV0dXJuIG47XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMuZk4oaWQsIGMpO1xyXG4gICAgICAgICAgICBpZiAoZikgcmV0dXJuIGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmUChjaWQ6IHN0cmluZywgbjogTWluZE5vZGVEYXRhKTogTWluZE5vZGVEYXRhIHwgbnVsbCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGMuaWQgPT09IGNpZCkgcmV0dXJuIG47XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLmZQKGNpZCwgYyk7XHJcbiAgICAgICAgICAgIGlmIChmKSByZXR1cm4gZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZQQShjaWQ6IHN0cmluZyk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLmZQKGNpZCwgcik7XHJcbiAgICAgICAgICAgIGlmIChwKSByZXR1cm4gcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGJpbmRFdnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGNjID0gdGhpcy5jYztcclxuICAgICAgICBjYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRndCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh0Z3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInRleHRhcmVhXCIpIHJldHVybjtcclxuICAgICAgICAgICAgY2MuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgICAgICAgICAvLyBGSVg6IGlmIHNwYWNlIGhlbGQsIEFMV0FZUyBzdGFydCBjYW52YXMgZHJhZyByZWdhcmRsZXNzIG9mIGNsaWNrIHRhcmdldFxyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGFjZURvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0N2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc214ID0gZS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbXkgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgICAgICAgICBjYy50b2dnbGVDbGFzcyhcIm16LWN1cnNvci1ncmFiYmluZ1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0Z3QgPT09IHRoaXMuc3ZnRWwgfHxcclxuICAgICAgICAgICAgICAgIHRndCA9PT0gY2MgfHxcclxuICAgICAgICAgICAgICAgIHRndC50YWdOYW1lID09PSBcInN2Z1wiIHx8XHJcbiAgICAgICAgICAgICAgICB0Z3QudGFnTmFtZSA9PT0gXCJnXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21taXRFZGl0KSB0aGlzLmNvbW1pdEVkaXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCb3goXHJcbiAgICAgICAgICAgICAgICAgICAgKGUuY2xpZW50WCAtIGNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSB0aGlzLnBhblgpIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tLFxyXG4gICAgICAgICAgICAgICAgICAgIChlLmNsaWVudFkgLSBjYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0aGlzLnBhblkpIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tLFxyXG4gICAgICAgICAgICAgICAgICAgIGUuc2hpZnRLZXksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRndCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRndCA9PT0gdGhpcy5zdmdFbCB8fFxyXG4gICAgICAgICAgICAgICAgdGd0ID09PSBjYyB8fFxyXG4gICAgICAgICAgICAgICAgW1wic3ZnXCIsIFwiZ1wiLCBcInBhdGhcIl0uaW5jbHVkZXModGd0LnRhZ05hbWUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q2FudmFzQ3R4KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYyA9IGNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBseCA9IChlLmNsaWVudFggLSByYy5sZWZ0IC0gdGhpcy5wYW5YKSAvIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgIGx5ID0gKGUuY2xpZW50WSAtIHJjLnRvcCAtIHRoaXMucGFuWSkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJveFNlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRCb3gobHgsIGx5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBseCAtIHRoaXMuZHMuc3RhcnRYLFxyXG4gICAgICAgICAgICAgICAgICAgIGR5ID0gbHkgLSB0aGlzLmRzLnN0YXJ0WTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5kcy5pc0RyYWdnaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKE1hdGguYWJzKGR4KSA+IDUgfHwgTWF0aC5hYnMoZHkpID4gNSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRzLmlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRzLmlzUm9vdERyYWcpIHRoaXMucm9vdERGKGR4LCBkeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLmNoaWxkREYobHgsIGx5LCBkeCwgZHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdDdikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5YICs9IGUuY2xpZW50WCAtIHRoaXMuc214O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5ZICs9IGUuY2xpZW50WSAtIHRoaXMuc215O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbXggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNteSA9IGUuY2xpZW50WTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkVHgoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwid2hlZWxcIixcclxuICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtiID0gdGhpcy5rYjtcclxuICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZSA9IGUuZGVsdGFZID4gMCA/IDAuOSA6IDEuMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB6ZiA9IGtiLmludmVydFpvb20gPyAxIC8gYmFzZSA6IGJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnogPSBNYXRoLm1heCgwLjEsIE1hdGgubWluKHRoaXMuem9vbSAqIHpmLCAzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IGNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteCA9IGUuY2xpZW50WCAtIHIubGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXkgPSBlLmNsaWVudFkgLSByLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhblggPSBteCAtIChteCAtIHRoaXMucGFuWCkgKiAobnogLyB0aGlzLnpvb20pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuWSA9IG15IC0gKG15IC0gdGhpcy5wYW5ZKSAqIChueiAvIHRoaXMuem9vbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tID0gbno7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkID0gZS5kZWx0YVggfHwgZS5kZWx0YVk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5YIC09IGtiLmludmVydFNjcm9sbFggPyAtZCA6IGQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuWCAtPSBrYi5pbnZlcnRTY3JvbGxYID8gLWUuZGVsdGFYIDogZS5kZWx0YVg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5ZIC09IGtiLmludmVydFNjcm9sbFkgPyAtZS5kZWx0YVkgOiBlLmRlbHRhWTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkVHgoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBwYXNzaXZlOiBmYWxzZSB9LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJvb3RERihkeDogbnVtYmVyLCBkeTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRzPy5pc1Jvb3REcmFnKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgcm4gPSB0aGlzLmZBbGwodGhpcy5kcy5ub2RlSWQpO1xyXG4gICAgICAgIGlmICghcm4pIHJldHVybjtcclxuICAgICAgICBybi54ID0gdGhpcy5kcy5uc3ggKyBkeDtcclxuICAgICAgICBybi55ID0gdGhpcy5kcy5uc3kgKyBkeTtcclxuICAgICAgICB0aGlzLmRvTGF5b3V0KHJuKTtcclxuICAgICAgICBpZiAoKHRoaXMuZHMgYXMgUm9vdERyYWcpLnBlZXJzKVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgKHRoaXMuZHMgYXMgUm9vdERyYWcpLnBlZXJzISkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG4gPSB0aGlzLmZBbGwocC5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBwbi54ID0gcC5zeCArIGR4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBuLnkgPSBwLnN5ICsgZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0xheW91dChwbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB0aGlzLmVkZ2VzRy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLmRyYXdFZGdlcyhyKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZPKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNoaWxkREYobHg6IG51bWJlciwgbHk6IG51bWJlciwgZHg6IG51bWJlciwgZHk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmRzIGFzIENoaWxkRHJhZztcclxuICAgICAgICBpZiAoIWQuZ2hvc3RFbCkge1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtbi1cIiArIGQubm9kZUlkKTtcclxuICAgICAgICAgICAgaWYgKG9yaWcpIG9yaWcudG9nZ2xlQ2xhc3MoXCJtei1kcmFnLXRyYW5zcGFyZW50XCIsIHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBkbiA9IHRoaXMuZkFsbChkLm5vZGVJZCk7XHJcbiAgICAgICAgICAgIGlmIChkbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2hvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9yZWlnbk9iamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGdob3N0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyhkbi53aWR0aCkpO1xyXG4gICAgICAgICAgICAgICAgZ2hvc3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhkbi5oZWlnaHQpKTtcclxuICAgICAgICAgICAgICAgIGdob3N0LnNldEF0dHJpYnV0ZShcIm92ZXJmbG93XCIsIFwidmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vIGdob3N0IG9wYWNpdHkgaGFuZGxlZCBieSBtei1kcmFnLWdob3N0IGNsYXNzXHJcbiAgICAgICAgICAgICAgICAvLyBnaG9zdCBwb2ludGVyLWV2ZW50cyBoYW5kbGVkIGJ5IG16LWRyYWctZ2hvc3QgY2xhc3NcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGdkLmFkZENsYXNzKFwibXotZHJhZy1naG9zdFwiKTtcclxuICAgICAgICAgICAgICAgIGdkLmlubmVyVGV4dCA9IGRuLnRleHQ7XHJcbiAgICAgICAgICAgICAgICBnaG9zdC5hcHBlbmRDaGlsZChnZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlHLmFwcGVuZENoaWxkKGdob3N0KTtcclxuICAgICAgICAgICAgICAgIGQuZ2hvc3RFbCA9IGdob3N0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpbmQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJnYmEoNTksMTMwLDI0NiwwLjEyKVwiKTtcclxuICAgICAgICAgICAgICAgIGluZC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgdGhpcy5zdHlsZS5zZWxlY3Rpb25Db2xvcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgICAgICAgICAgIGluZC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIyXCIpO1xyXG4gICAgICAgICAgICAgICAgaW5kLnNldEF0dHJpYnV0ZShcInJ4XCIsIFN0cmluZyh0aGlzLnN0eWxlLm5vZGVCb3JkZXJSYWRpdXMpKTtcclxuICAgICAgICAgICAgICAgIC8vIGluZGljYXRvciBwb2ludGVyLWV2ZW50cyBoYW5kbGVkIGJ5IENTU1xyXG4gICAgICAgICAgICAgICAgaW5kLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5Ry5hcHBlbmRDaGlsZChpbmQpO1xyXG4gICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbCA9IGluZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkbiA9IHRoaXMuZkFsbChkLm5vZGVJZCk7XHJcbiAgICAgICAgaWYgKGRuICYmIGQuZ2hvc3RFbCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xlZnRTaWRlID0gZG4uc2lkZSA9PT0gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGVkZ2VYID0gaXNMZWZ0U2lkZVxyXG4gICAgICAgICAgICAgICAgPyBkbi54ICsgZHggKyBkbi53aWR0aCAvIDJcclxuICAgICAgICAgICAgICAgIDogZG4ueCArIGR4IC0gZG4ud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBjb25zdCBneSA9IGRuLnkgKyBkeTtcclxuICAgICAgICAgICAgZC5naG9zdEVsLnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKGRuLnggKyBkeCAtIGRuLndpZHRoIC8gMikpO1xyXG4gICAgICAgICAgICBkLmdob3N0RWwuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoZ3kgLSBkbi5oZWlnaHQgLyAyKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRndCA9IHRoaXMuZGV0VGd0KGVkZ2VYLCBlZGdlWCwgZ3ksIGQubm9kZUlkKTtcclxuICAgICAgICAgICAgaWYgKHRndCAmJiBkLmluZGljYXRvckVsKSB7XHJcbiAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRuID0gdGhpcy5mQWxsKHRndC5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGd0LnpvbmUgPT09IFwiY2hpbGRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnggLSB0bi53aWR0aCAvIDIgLSA0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh0bi55IC0gdG4uaGVpZ2h0IC8gMiAtIDQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh0bi53aWR0aCArIDgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcodG4uaGVpZ2h0ICsgOCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0Z3Quem9uZSA9PT0gXCJiZWZvcmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnggLSB0bi53aWR0aCAvIDIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnkgLSB0bi5oZWlnaHQgLyAyIC0gNiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHRuLndpZHRoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiM1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnggLSB0bi53aWR0aCAvIDIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnkgKyB0bi5oZWlnaHQgLyAyICsgMyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHRuLndpZHRoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiM1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZC5pbmRpY2F0b3JFbClcclxuICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRDaGlsZE5vZGUoZm9yY2VTaWRlPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsSWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBwID0gdGhpcy5mQWxsKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghcCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICBjb25zdCB0eHQgPSB0aGlzLnBsdWdpbi5nZXRDaGlsZE5hbWUoKTtcclxuICAgICAgICBjb25zdCBuOiBNaW5kTm9kZURhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxyXG4gICAgICAgICAgICB0ZXh0OiB0eHQsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbGNXKHR4dCwgZmFsc2UpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY2FsY0godHh0LCBmYWxzZSksXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChwLmNvbm5lY3Rpb25Db2xvcikgbi5jb25uZWN0aW9uQ29sb3IgPSBwLmNvbm5lY3Rpb25Db2xvcjtcclxuICAgICAgICBpZiAocC5jb25uZWN0aW9uV2lkdGgpIG4uY29ubmVjdGlvbldpZHRoID0gcC5jb25uZWN0aW9uV2lkdGg7XHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHNpZGVcclxuICAgICAgICBpZiAoZm9yY2VTaWRlKSBuLnNpZGUgPSBmb3JjZVNpZGU7XHJcbiAgICAgICAgZWxzZSBpZiAocC5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlyID0gdGhpcy5zdHlsZS5ub2RlRGlyZWN0aW9uO1xyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBcImxlZnRcIikgbi5zaWRlID0gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgIGVsc2Ugbi5zaWRlID0gXCJyaWdodFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG4uc2lkZSA9IHAuc2lkZSB8fCBcInJpZ2h0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAuY2hpbGRyZW4ucHVzaChuKTtcclxuICAgICAgICB0aGlzLmFzc2lnblJhaW5ib3dDb2xvcihwLCBuKTtcclxuICAgICAgICB0aGlzLnNlbDEobi5pZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmVkaXRPbkNyZWF0ZSkgdGhpcy5lZGl0SWQgPSBuLmlkO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkTGVmdENoaWxkKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGROb2RlKFwibGVmdFwiKTtcclxuICAgIH1cclxuICAgIC8vIEVudGVyIG9uIHJvb3QgPSBhZGQgY2hpbGQuIEVudGVyIG9uIGNoaWxkID0gaW5zZXJ0IHNpYmxpbmcgQUZURVIgY3VycmVudFxyXG4gICAgcHJpdmF0ZSBhZGRTaWJsaW5nKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxJZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHNlbCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIXNlbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChzZWwuaXNSb290KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGROb2RlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuZlBBKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghcCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICBjb25zdCB0eHQgPSB0aGlzLnBsdWdpbi5nZXRDaGlsZE5hbWUoKTtcclxuICAgICAgICBjb25zdCBuOiBNaW5kTm9kZURhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxyXG4gICAgICAgICAgICB0ZXh0OiB0eHQsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbGNXKHR4dCwgZmFsc2UpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY2FsY0godHh0LCBmYWxzZSksXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgc2lkZTogc2VsLnNpZGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocC5jb25uZWN0aW9uQ29sb3IpIG4uY29ubmVjdGlvbkNvbG9yID0gcC5jb25uZWN0aW9uQ29sb3I7XHJcbiAgICAgICAgaWYgKHAuY29ubmVjdGlvbldpZHRoKSBuLmNvbm5lY3Rpb25XaWR0aCA9IHAuY29ubmVjdGlvbldpZHRoO1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHAuY2hpbGRyZW4uZmluZEluZGV4KChjKSA9PiBjLmlkID09PSB0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoaWR4ICE9PSAtMSkgcC5jaGlsZHJlbi5zcGxpY2UoaWR4ICsgMSwgMCwgbik7XHJcbiAgICAgICAgZWxzZSBwLmNoaWxkcmVuLnB1c2gobik7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25SYWluYm93Q29sb3IocCwgbik7XHJcbiAgICAgICAgdGhpcy5zZWwxKG4uaWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5lZGl0T25DcmVhdGUpIHRoaXMuZWRpdElkID0gbi5pZDtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICAvLyBGSVggIzM6IGRlbGV0ZSBzZWxlY3RzIFVQUEVSIHNpYmxpbmcgKGlkeC0xKVxyXG4gICAgcHJpdmF0ZSBkZWxOb2RlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxJZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnJvb3RzLnNvbWUoKHIpID0+IHIuaWQgPT09IHRoaXMuc2VsSWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICAgICAgdGhpcy5yb290cyA9IHRoaXMucm9vdHMuZmlsdGVyKChyKSA9PiByLmlkICE9PSB0aGlzLnNlbElkKTtcclxuICAgICAgICAgICAgdGhpcy5jbHJTZWwoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm9vdHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWwxKHRoaXMucm9vdHNbdGhpcy5yb290cy5sZW5ndGggLSAxXS5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuZlBBKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghcCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHAuY2hpbGRyZW4uZmluZEluZGV4KChjKSA9PiBjLmlkID09PSB0aGlzLnNlbElkKTtcclxuICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgcC5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICBpZiAocC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SWR4ID0gaWR4ID4gMCA/IGlkeCAtIDEgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLnNlbDEocC5jaGlsZHJlbltuZXdJZHhdLmlkKTtcclxuICAgICAgICB9IGVsc2UgdGhpcy5zZWwxKHAuaWQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ0QobmlkOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLl9nZChuaWQsIHIsIDApO1xyXG4gICAgICAgICAgICBpZiAoZCAhPT0gLTEpIHJldHVybiBkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9nZChuaWQ6IHN0cmluZywgbjogTWluZE5vZGVEYXRhLCBkOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChuLmlkID09PSBuaWQpIHJldHVybiBkO1xyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLl9nZChuaWQsIGMsIGQgKyAxKTtcclxuICAgICAgICAgICAgaWYgKHIgIT09IC0xKSByZXR1cm4gcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjRGVwKHRkOiBudW1iZXIpOiBNaW5kTm9kZURhdGFbXSB7XHJcbiAgICAgICAgY29uc3QgbzogTWluZE5vZGVEYXRhW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5fY2QociwgMCwgdGQsIG8pO1xyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfY2QobjogTWluZE5vZGVEYXRhLCBkOiBudW1iZXIsIHRkOiBudW1iZXIsIG86IE1pbmROb2RlRGF0YVtdKSB7XHJcbiAgICAgICAgaWYgKGQgPT09IHRkKSB7XHJcbiAgICAgICAgICAgIG8ucHVzaChuKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgdGhpcy5fY2QoYywgZCArIDEsIHRkLCBvKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXJyb3coZGlyOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsSWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgaWYgKCFjdXIpIHJldHVybjtcclxuICAgICAgICBjb25zdCBpc0xlZnQgPSBjdXIuc2lkZSA9PT0gXCJsZWZ0XCI7XHJcbiAgICAgICAgaWYgKGRpciA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcclxuICAgICAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyID0gdGhpcy5mUEEodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyKSB0aGlzLnNlbDEocGFyLmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJjID0gY3VyLmNoaWxkcmVuPy5maWx0ZXIoKGMpID0+IGMuc2lkZSAhPT0gXCJsZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJjPy5sZW5ndGgpIHRoaXMuc2VsMShyY1swXS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRpciA9PT0gXCJBcnJvd0xlZnRcIikge1xyXG4gICAgICAgICAgICBpZiAoaXNMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYyA9IGN1ci5jaGlsZHJlbj8ubGVuZ3RoID8gY3VyLmNoaWxkcmVuIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChsYykgdGhpcy5zZWwxKGxjWzBdLmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXIuaXNSb290KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYyA9IGN1ci5jaGlsZHJlbj8uZmlsdGVyKChjKSA9PiBjLnNpZGUgPT09IFwibGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChsYz8ubGVuZ3RoKSB0aGlzLnNlbDEobGNbMF0uaWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyID0gdGhpcy5mUEEodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyKSB0aGlzLnNlbDEocGFyLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmdEKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICBpZiAoZCA9PT0gLTEpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgcGVlcnMgPSB0aGlzLmNEZXAoZCk7XHJcbiAgICAgICAgICAgIGlmIChwZWVycy5sZW5ndGggPD0gMSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSBwZWVycy5maW5kSW5kZXgoKG4pID0+IG4uaWQgPT09IHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBcIkFycm93VXBcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsMShwZWVyc1tpZHggPiAwID8gaWR4IC0gMSA6IHBlZXJzLmxlbmd0aCAtIDFdLmlkKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnNlbDEocGVlcnNbaWR4IDwgcGVlcnMubGVuZ3RoIC0gMSA/IGlkeCArIDEgOiAwXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8vIHNyYy90eXBlcy50c1xyXG5pbXBvcnQgdHlwZSB7IExhbmd1YWdlIH0gZnJvbSBcIi4vaTE4blwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNaW5kTm9kZURhdGEge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIGNoaWxkcmVuOiBNaW5kTm9kZURhdGFbXTtcclxuICAgIGlzUm9vdD86IGJvb2xlYW47XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBzdHlsZU92ZXJyaWRlPzogTm9kZVN0eWxlT3ZlcnJpZGU7XHJcbiAgICBjb25uZWN0aW9uQ29sb3I/OiBzdHJpbmc7XHJcbiAgICBjb25uZWN0aW9uV2lkdGg/OiBudW1iZXI7XHJcbiAgICBzaWRlPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBOb2RlU3R5bGVPdmVycmlkZSB7XHJcbiAgICBiZ0NvbG9yPzogc3RyaW5nO1xyXG4gICAgdGV4dENvbG9yPzogc3RyaW5nO1xyXG4gICAgZm9udFNpemU/OiBudW1iZXI7XHJcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xyXG4gICAgYm9yZGVyU3R5bGU/OiBCb3JkZXJTdHlsZTtcclxuICAgIGJvcmRlckNvbG9yPzogc3RyaW5nO1xyXG4gICAgYm9yZGVyV2lkdGg/OiBudW1iZXI7XHJcbiAgICBib3JkZXJSYWRpdXM/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgQm9yZGVyU3R5bGUgPSBcInNvbGlkXCIgfCBcImRhc2hlZFwiIHwgXCJkb3R0ZWRcIiB8IFwiZG91YmxlXCIgfCBcIm5vbmVcIjtcclxuZXhwb3J0IHR5cGUgQ29ubmVjdGlvbkxpbmVTdHlsZSA9XHJcbiAgICB8IFwiYmV6aWVyXCJcclxuICAgIHwgXCJzdHJhaWdodFwiXHJcbiAgICB8IFwiY3VydmVkXCJcclxuICAgIHwgXCJzdGVwXCJcclxuICAgIHwgXCJicmFja2V0XCJcclxuICAgIHwgXCJsb29zZVwiO1xyXG5leHBvcnQgdHlwZSBUZXh0QWxpZ24gPSBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XHJcbmV4cG9ydCB0eXBlIE5vZGVEaXJlY3Rpb24gPSBcInJpZ2h0XCIgfCBcImxlZnRcIiB8IFwiYm90aFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNaW5kTWFwU3R5bGUge1xyXG4gICAgbm9kZUJnQ29sb3I6IHN0cmluZztcclxuICAgIG5vZGVUZXh0Q29sb3I6IHN0cmluZztcclxuICAgIG5vZGVGb250U2l6ZTogbnVtYmVyO1xyXG4gICAgbm9kZUZvbnRGYW1pbHk6IHN0cmluZztcclxuICAgIG5vZGVCb3JkZXJTdHlsZTogQm9yZGVyU3R5bGU7XHJcbiAgICBub2RlQm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIG5vZGVCb3JkZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgbm9kZUJvcmRlclJhZGl1czogbnVtYmVyO1xyXG4gICAgbm9kZU1pbldpZHRoOiBudW1iZXI7XHJcbiAgICBub2RlTWluSGVpZ2h0OiBudW1iZXI7XHJcbiAgICByb290QmdDb2xvcjogc3RyaW5nO1xyXG4gICAgcm9vdFRleHRDb2xvcjogc3RyaW5nO1xyXG4gICAgcm9vdEZvbnRTaXplOiBudW1iZXI7XHJcbiAgICByb290Rm9udEZhbWlseTogc3RyaW5nO1xyXG4gICAgcm9vdEJvcmRlclN0eWxlOiBCb3JkZXJTdHlsZTtcclxuICAgIHJvb3RCb3JkZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgcm9vdEJvcmRlcldpZHRoOiBudW1iZXI7XHJcbiAgICByb290Qm9yZGVyUmFkaXVzOiBudW1iZXI7XHJcbiAgICByb290TWluV2lkdGg6IG51bWJlcjtcclxuICAgIHJvb3RNaW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIGNvbm5lY3Rpb25TdHlsZTogQ29ubmVjdGlvbkxpbmVTdHlsZTtcclxuICAgIGNvbm5lY3Rpb25Db2xvcjogc3RyaW5nO1xyXG4gICAgY29ubmVjdGlvbldpZHRoOiBudW1iZXI7XHJcbiAgICBjb25uZWN0aW9uTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBjb25uZWN0aW9uUmFpbmJvdzogYm9vbGVhbjtcclxuICAgIHJhaW5ib3dQYWxldHRlOiBzdHJpbmc7XHJcbiAgICBjdXN0b21SYWluYm93czogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+O1xyXG4gICAgbm9kZURpcmVjdGlvbjogTm9kZURpcmVjdGlvbjtcclxuICAgIHNlbGVjdGlvbkNvbG9yOiBzdHJpbmc7XHJcbiAgICBzZWxlY3Rpb25XaWR0aDogbnVtYmVyO1xyXG4gICAgc2VsZWN0aW9uT3V0bGluZU9mZnNldDogbnVtYmVyO1xyXG4gICAgZWRpdE91dGxpbmVDb2xvcjogc3RyaW5nO1xyXG4gICAgZWRpdE91dGxpbmVXaWR0aDogbnVtYmVyO1xyXG4gICAgdGV4dEFsaWduOiBUZXh0QWxpZ247XHJcbiAgICBub2RlUGFkWDogbnVtYmVyO1xyXG4gICAgbm9kZUxpbmVIZWlnaHQ6IG51bWJlcjtcclxuICAgIG5vZGVHYXBZOiBudW1iZXI7XHJcbiAgICBjYW52YXNCZzogc3RyaW5nO1xyXG4gICAgdG9vbGJhclBhZFRvcDogbnVtYmVyO1xyXG4gICAgdG9vbGJhclBhZFJpZ2h0OiBudW1iZXI7XHJcbiAgICB0b29sYmFyUGFkQm90dG9tOiBudW1iZXI7XHJcbiAgICB0b29sYmFyUGFkTGVmdDogbnVtYmVyO1xyXG4gICAgdG9vbGJhclBvc2l0aW9uOiBcInRvcFwiIHwgXCJib3R0b21cIjtcclxuICAgIHRvb2xiYXJCZ0NvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQnRuQmdDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0bkJvcmRlclN0eWxlOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQnRuQm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCdG5UZXh0Q29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCb3JkZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJvcmRlcldpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2V5QmluZGluZ3Mge1xyXG4gICAgZWRpdE5vZGU6IHN0cmluZztcclxuICAgIGFkZFNpYmxpbmc6IHN0cmluZztcclxuICAgIGFkZENoaWxkOiBzdHJpbmc7XHJcbiAgICBmb2N1c05vZGU6IHN0cmluZztcclxuICAgIHVuZG86IHN0cmluZztcclxuICAgIHJlZG86IHN0cmluZztcclxuICAgIGxpbmVCcmVhazogc3RyaW5nO1xyXG4gICAgZHJhZ0NhbnZhczogc3RyaW5nO1xyXG4gICAgem9vbUluOiBzdHJpbmc7XHJcbiAgICB6b29tT3V0OiBzdHJpbmc7XHJcbiAgICB6b29tUmVzZXQ6IHN0cmluZztcclxuICAgIG5hdlVwOiBzdHJpbmc7XHJcbiAgICBuYXZEb3duOiBzdHJpbmc7XHJcbiAgICBuYXZMZWZ0OiBzdHJpbmc7XHJcbiAgICBuYXZSaWdodDogc3RyaW5nO1xyXG4gICAgaW52ZXJ0U2Nyb2xsWTogYm9vbGVhbjtcclxuICAgIGludmVydFNjcm9sbFg6IGJvb2xlYW47XHJcbiAgICBpbnZlcnRab29tOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsdWdpblNldHRpbmdzIHtcclxuICAgIHN0eWxlOiBNaW5kTWFwU3R5bGU7XHJcbiAgICBsYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICB0aGVtZTogXCJsaWdodFwiIHwgXCJkYXJrXCI7XHJcbiAgICBzaG93VG9vbGJhcjogYm9vbGVhbjtcclxuICAgIGtleUJpbmRpbmdzOiBLZXlCaW5kaW5ncztcclxuICAgIGRldmVsb3Blck1vZGU6IGJvb2xlYW47XHJcbiAgICBlZGl0T25DcmVhdGU6IGJvb2xlYW47XHJcbiAgICB0eXBlVG9FZGl0OiBib29sZWFuO1xyXG4gICAgY3VzdG9tTm9kZU5hbWVzOiBSZWNvcmQ8c3RyaW5nLCB7IHJvb3Q/OiBzdHJpbmc7IGNoaWxkPzogc3RyaW5nIH0+O1xyXG4gICAgdG9vbGJhclN0eWxlTGlnaHQ/OiBUb29sYmFyVGhlbWVDb2xvcnM7XHJcbiAgICB0b29sYmFyU3R5bGVEYXJrPzogVG9vbGJhclRoZW1lQ29sb3JzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvb2xiYXJUaGVtZUNvbG9ycyB7XHJcbiAgICB0b29sYmFyQmdDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0bkJnQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0bkJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCb3JkZXJXaWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UT09MQkFSX0xJR0hUOiBUb29sYmFyVGhlbWVDb2xvcnMgPSB7XHJcbiAgICB0b29sYmFyQmdDb2xvcjogXCIjZjVmNWY1XCIsXHJcbiAgICB0b29sYmFyQnRuQmdDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICB0b29sYmFyQnRuQm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogXCIjZDFkNWRiXCIsXHJcbiAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBcIiMzMzMzMzNcIixcclxuICAgIHRvb2xiYXJCb3JkZXJDb2xvcjogXCIjZTBlMGUwXCIsXHJcbiAgICB0b29sYmFyQm9yZGVyV2lkdGg6IDEsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UT09MQkFSX0RBUks6IFRvb2xiYXJUaGVtZUNvbG9ycyA9IHtcclxuICAgIHRvb2xiYXJCZ0NvbG9yOiBcIiMyYjJiMmJcIixcclxuICAgIHRvb2xiYXJCdG5CZ0NvbG9yOiBcIiMzYzNjM2NcIixcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogXCJzb2xpZFwiLFxyXG4gICAgdG9vbGJhckJ0bkJvcmRlckNvbG9yOiBcIiM1NTU1NTVcIixcclxuICAgIHRvb2xiYXJCdG5UZXh0Q29sb3I6IFwiI2UwZTBlMFwiLFxyXG4gICAgdG9vbGJhckJvcmRlckNvbG9yOiBcIiM1MDUwNTBcIixcclxuICAgIHRvb2xiYXJCb3JkZXJXaWR0aDogMSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSQUlOQk9XX1BBTEVUVEVTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7XHJcbiAgICBjbGFzc2ljOiBbXHJcbiAgICAgICAgXCIjMTFjZDNjXCIsXHJcbiAgICAgICAgXCIjMzQ5OGRiXCIsXHJcbiAgICAgICAgXCIjZjQyNTBlXCIsXHJcbiAgICAgICAgXCIjZjg4ZDJmXCIsXHJcbiAgICAgICAgXCIjMWFkNWVkXCIsXHJcbiAgICAgICAgXCIjOTg5ODk4XCIsXHJcbiAgICAgICAgXCIjYTY1N2M1XCIsXHJcbiAgICAgICAgXCIjNDBjZGIxXCIsXHJcbiAgICAgICAgXCIjNmI5OWY2XCIsXHJcbiAgICAgICAgXCIjZmIzOTk3ZDhcIixcclxuICAgICAgICBcIiM2ZDVkZThcIixcclxuICAgICAgICBcIiM5MTBmY2RcIixcclxuICAgIF0sXHJcbiAgICBwYXN0ZWw6IFtcclxuICAgICAgICBcIiNiYWZmYzlcIixcclxuICAgICAgICBcIiNiYWUxZmZcIixcclxuICAgICAgICBcIiNmZmIzYmFcIixcclxuICAgICAgICBcIiNmZmRmYmFcIixcclxuICAgICAgICBcIiNmZmZmYmFcIixcclxuICAgICAgICBcIiNlOGJhZmZcIixcclxuICAgICAgICBcIiNmZmM5ZGVcIixcclxuICAgICAgICBcIiNjOWZmZTVcIixcclxuICAgICAgICBcIiNjOWQ2ZmZcIixcclxuICAgICAgICBcIiNmZmU4YzlcIixcclxuICAgICAgICBcIiNkNGJhZmZcIixcclxuICAgICAgICBcIiNiYWZmZWFcIixcclxuICAgIF0sXHJcbiAgICBmb3Jlc3Q6IFtcclxuICAgICAgICBcIiMyN2FlNjBcIixcclxuICAgICAgICBcIiMyZWNjNzFcIixcclxuICAgICAgICBcIiMxYWJjOWNcIixcclxuICAgICAgICBcIiMxNmEwODVcIixcclxuICAgICAgICBcIiMwMDY0MDBcIixcclxuICAgICAgICBcIiMyMjhCMjJcIixcclxuICAgICAgICBcIiMzMkNEMzJcIixcclxuICAgICAgICBcIiMzQ0IzNzFcIixcclxuICAgICAgICBcIiMyRThCNTdcIixcclxuICAgICAgICBcIiM2NkNEQUFcIixcclxuICAgICAgICBcIiM4RkJDOEZcIixcclxuICAgICAgICBcIiM5MEVFOTBcIixcclxuICAgIF0sXHJcbiAgICBjYW5keTogW1xyXG4gICAgICAgIFwiI0ZGNkY5MVwiLFxyXG4gICAgICAgIFwiI0ZGOTY3MVwiLFxyXG4gICAgICAgIFwiI0ZGQzc1RlwiLFxyXG4gICAgICAgIFwiI0Y5Rjg3MVwiLFxyXG4gICAgICAgIFwiI0Q2NURCMVwiLFxyXG4gICAgICAgIFwiIzg0NUVDMlwiLFxyXG4gICAgICAgIFwiIzJDNzNEMlwiLFxyXG4gICAgICAgIFwiIzAwODlCQVwiLFxyXG4gICAgICAgIFwiIzAwOEU5QlwiLFxyXG4gICAgICAgIFwiIzAwOEY3QVwiLFxyXG4gICAgICAgIFwiI0IwQThCOVwiLFxyXG4gICAgICAgIFwiI0MzNEEzNlwiLFxyXG4gICAgXSxcclxuICAgIG5lb246IFtcclxuICAgICAgICBcIiNmZjAwNTVcIixcclxuICAgICAgICBcIiNmZjY2MDBcIixcclxuICAgICAgICBcIiNmZmNjMDBcIixcclxuICAgICAgICBcIiMwMGZmODhcIixcclxuICAgICAgICBcIiMwMDg4ZmZcIixcclxuICAgICAgICBcIiNhYTAwZmZcIixcclxuICAgICAgICBcIiNmZjAwOTlcIixcclxuICAgICAgICBcIiMwMGZmY2NcIixcclxuICAgICAgICBcIiMwMGNjZmZcIixcclxuICAgICAgICBcIiNmZmZmMDBcIixcclxuICAgICAgICBcIiNmZjAwZmZcIixcclxuICAgICAgICBcIiMwMGZmMDBcIixcclxuICAgIF0sXHJcbiAgICBlYXJ0aDogW1xyXG4gICAgICAgIFwiIzhCNDUxM1wiLFxyXG4gICAgICAgIFwiI0EwNTIyRFwiLFxyXG4gICAgICAgIFwiI0NEODUzRlwiLFxyXG4gICAgICAgIFwiI0RFQjg4N1wiLFxyXG4gICAgICAgIFwiI0QyQjQ4Q1wiLFxyXG4gICAgICAgIFwiI0JDOEY4RlwiLFxyXG4gICAgICAgIFwiI0Y0QTQ2MFwiLFxyXG4gICAgICAgIFwiI0RBQTUyMFwiLFxyXG4gICAgICAgIFwiI0I4ODYwQlwiLFxyXG4gICAgICAgIFwiIzgwODAwMFwiLFxyXG4gICAgICAgIFwiIzZCOEUyM1wiLFxyXG4gICAgICAgIFwiIzU1NkIyRlwiLFxyXG4gICAgXSxcclxuICAgIG9jZWFuOiBbXHJcbiAgICAgICAgXCIjMDAxZjNmXCIsXHJcbiAgICAgICAgXCIjMDAzMzY2XCIsXHJcbiAgICAgICAgXCIjMDA0MDgwXCIsXHJcbiAgICAgICAgXCIjMDA1OWIzXCIsXHJcbiAgICAgICAgXCIjMDA3M2U2XCIsXHJcbiAgICAgICAgXCIjMWE4Y2ZmXCIsXHJcbiAgICAgICAgXCIjNGRhNmZmXCIsXHJcbiAgICAgICAgXCIjODBiZmZmXCIsXHJcbiAgICAgICAgXCIjOTljY2ZmXCIsXHJcbiAgICAgICAgXCIjYjNkOWZmXCIsXHJcbiAgICAgICAgXCIjY2NlNWZmXCIsXHJcbiAgICAgICAgXCIjZTZmMmZmXCIsXHJcbiAgICBdLFxyXG4gICAgc3Vuc2V0OiBbXHJcbiAgICAgICAgXCIjZmY2YjZiXCIsXHJcbiAgICAgICAgXCIjZWU1YTI0XCIsXHJcbiAgICAgICAgXCIjZjA5MzJiXCIsXHJcbiAgICAgICAgXCIjZjZlNThkXCIsXHJcbiAgICAgICAgXCIjZmZiZTc2XCIsXHJcbiAgICAgICAgXCIjZmY3OTc5XCIsXHJcbiAgICAgICAgXCIjZTA1NmZkXCIsXHJcbiAgICAgICAgXCIjYmUyZWRkXCIsXHJcbiAgICAgICAgXCIjNjg2ZGUwXCIsXHJcbiAgICAgICAgXCIjNDgzNGQ0XCIsXHJcbiAgICAgICAgXCIjMzAzMzZiXCIsXHJcbiAgICAgICAgXCIjMTMwZjQwXCIsXHJcbiAgICBdLFxyXG4gICAgbW9ub2Nocm9tZTogW1xyXG4gICAgICAgIFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIFwiIzFhMWExYVwiLFxyXG4gICAgICAgIFwiIzMzMzMzM1wiLFxyXG4gICAgICAgIFwiIzRkNGQ0ZFwiLFxyXG4gICAgICAgIFwiIzY2NjY2NlwiLFxyXG4gICAgICAgIFwiIzgwODA4MFwiLFxyXG4gICAgICAgIFwiIzk5OTk5OVwiLFxyXG4gICAgICAgIFwiI2IzYjNiM1wiLFxyXG4gICAgICAgIFwiI2NjY2NjY1wiLFxyXG4gICAgICAgIFwiI2U2ZTZlNlwiLFxyXG4gICAgICAgIFwiI2YyZjJmMlwiLFxyXG4gICAgICAgIFwiI2ZmZmZmZlwiLFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGT05UX0xJU1QgPSBbXHJcbiAgICBcImluaGVyaXRcIixcclxuICAgIFwiQXJpYWxcIixcclxuICAgIFwiSGVsdmV0aWNhIE5ldWVcIixcclxuICAgIFwiR2VvcmdpYVwiLFxyXG4gICAgXCJUaW1lcyBOZXcgUm9tYW5cIixcclxuICAgIFwiQ291cmllciBOZXdcIixcclxuICAgIFwiVmVyZGFuYVwiLFxyXG4gICAgXCJtb25vc3BhY2VcIixcclxuICAgIFwic2Fucy1zZXJpZlwiLFxyXG4gICAgXCJzZXJpZlwiLFxyXG5dO1xyXG5leHBvcnQgY29uc3QgQ09OTkVDVElPTl9TVFlMRVM6IENvbm5lY3Rpb25MaW5lU3R5bGVbXSA9IFtcclxuICAgIFwiYmV6aWVyXCIsXHJcbiAgICBcInN0cmFpZ2h0XCIsXHJcbiAgICBcImN1cnZlZFwiLFxyXG4gICAgXCJzdGVwXCIsXHJcbiAgICBcImJyYWNrZXRcIixcclxuICAgIFwibG9vc2VcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0tFWUJJTkRJTkdTOiBLZXlCaW5kaW5ncyA9IHtcclxuICAgIGVkaXROb2RlOiBcIlNwYWNlXCIsXHJcbiAgICBhZGRTaWJsaW5nOiBcIkVudGVyXCIsXHJcbiAgICBhZGRDaGlsZDogXCJUYWJcIixcclxuICAgIGZvY3VzTm9kZTogXCJmXCIsXHJcbiAgICB1bmRvOiBcImN0cmwrelwiLFxyXG4gICAgcmVkbzogXCJjdHJsK3NoaWZ0K3pcIixcclxuICAgIGxpbmVCcmVhazogXCJzaGlmdCtFbnRlclwiLFxyXG4gICAgZHJhZ0NhbnZhczogXCJTcGFjZVwiLFxyXG4gICAgem9vbUluOiBcInNoaWZ0Kz1cIixcclxuICAgIHpvb21PdXQ6IFwic2hpZnQrLVwiLFxyXG4gICAgem9vbVJlc2V0OiBcInNoaWZ0KzBcIixcclxuICAgIG5hdlVwOiBcIkFycm93VXBcIixcclxuICAgIG5hdkRvd246IFwiQXJyb3dEb3duXCIsXHJcbiAgICBuYXZMZWZ0OiBcIkFycm93TGVmdFwiLFxyXG4gICAgbmF2UmlnaHQ6IFwiQXJyb3dSaWdodFwiLFxyXG4gICAgaW52ZXJ0U2Nyb2xsWTogZmFsc2UsXHJcbiAgICBpbnZlcnRTY3JvbGxYOiBmYWxzZSxcclxuICAgIGludmVydFpvb206IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1RZTEU6IE1pbmRNYXBTdHlsZSA9IHtcclxuICAgIG5vZGVCZ0NvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgIG5vZGVUZXh0Q29sb3I6IFwiIzMzMzMzM1wiLFxyXG4gICAgbm9kZUZvbnRTaXplOiAxNCxcclxuICAgIG5vZGVGb250RmFtaWx5OiBcImluaGVyaXRcIixcclxuICAgIG5vZGVCb3JkZXJTdHlsZTogXCJzb2xpZFwiLFxyXG4gICAgbm9kZUJvcmRlckNvbG9yOiBcIiNkMWQ1ZGJcIixcclxuICAgIG5vZGVCb3JkZXJXaWR0aDogMSxcclxuICAgIG5vZGVCb3JkZXJSYWRpdXM6IDUsXHJcbiAgICBub2RlTWluV2lkdGg6IDYwLFxyXG4gICAgbm9kZU1pbkhlaWdodDogMzIsXHJcbiAgICByb290QmdDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICByb290VGV4dENvbG9yOiBcIiMxNzE3MTdcIixcclxuICAgIHJvb3RGb250U2l6ZTogMTYsXHJcbiAgICByb290Rm9udEZhbWlseTogXCJpbmhlcml0XCIsXHJcbiAgICByb290Qm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgIHJvb3RCb3JkZXJDb2xvcjogXCIjODU4NTg1XCIsXHJcbiAgICByb290Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICByb290Qm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgcm9vdE1pbldpZHRoOiA4MCxcclxuICAgIHJvb3RNaW5IZWlnaHQ6IDQwLFxyXG4gICAgY29ubmVjdGlvblN0eWxlOiBcImJlemllclwiLFxyXG4gICAgY29ubmVjdGlvbkNvbG9yOiBcIiM5NGEzYjhcIixcclxuICAgIGNvbm5lY3Rpb25XaWR0aDogMS41LFxyXG4gICAgY29ubmVjdGlvbkxlbmd0aDogODAsXHJcbiAgICBjb25uZWN0aW9uUmFpbmJvdzogdHJ1ZSxcclxuICAgIHJhaW5ib3dQYWxldHRlOiBcImNsYXNzaWNcIixcclxuICAgIGN1c3RvbVJhaW5ib3dzOiB7fSxcclxuICAgIG5vZGVEaXJlY3Rpb246IFwicmlnaHRcIixcclxuICAgIHNlbGVjdGlvbkNvbG9yOiBcIiM0NGQzMzFcIixcclxuICAgIHNlbGVjdGlvbldpZHRoOiAzLFxyXG4gICAgc2VsZWN0aW9uT3V0bGluZU9mZnNldDogMixcclxuICAgIGVkaXRPdXRsaW5lQ29sb3I6IFwiIzNiZmIyZFwiLFxyXG4gICAgZWRpdE91dGxpbmVXaWR0aDogNCxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIG5vZGVQYWRYOiAxMCxcclxuICAgIG5vZGVMaW5lSGVpZ2h0OiAxLjUsXHJcbiAgICBub2RlR2FwWTogMjQsXHJcbiAgICBjYW52YXNCZzogXCIjZmZmZmZmXCIsXHJcbiAgICB0b29sYmFyUGFkVG9wOiAwLFxyXG4gICAgdG9vbGJhclBhZFJpZ2h0OiAxMixcclxuICAgIHRvb2xiYXJQYWRCb3R0b206IDAsXHJcbiAgICB0b29sYmFyUGFkTGVmdDogMTIsXHJcbiAgICB0b29sYmFyUG9zaXRpb246IFwidG9wXCIsXHJcbiAgICB0b29sYmFyQmdDb2xvcjogXCIjZjVmNWY1XCIsXHJcbiAgICB0b29sYmFyQnRuQmdDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICB0b29sYmFyQnRuQm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogXCIjZDFkNWRiXCIsXHJcbiAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBcIiMzMzMzMzNcIixcclxuICAgIHRvb2xiYXJCb3JkZXJDb2xvcjogXCIjZTBlMGUwXCIsXHJcbiAgICB0b29sYmFyQm9yZGVyV2lkdGg6IDEsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NFVFRJTkdTOiBQbHVnaW5TZXR0aW5ncyA9IHtcclxuICAgIHN0eWxlOiB7IC4uLkRFRkFVTFRfU1RZTEUgfSxcclxuICAgIGxhbmd1YWdlOiBcImVuXCIsXHJcbiAgICB0aGVtZTogXCJsaWdodFwiLFxyXG4gICAgc2hvd1Rvb2xiYXI6IHRydWUsXHJcbiAgICBrZXlCaW5kaW5nczogeyAuLi5ERUZBVUxUX0tFWUJJTkRJTkdTIH0sXHJcbiAgICBkZXZlbG9wZXJNb2RlOiBmYWxzZSxcclxuICAgIGVkaXRPbkNyZWF0ZTogZmFsc2UsXHJcbiAgICB0eXBlVG9FZGl0OiB0cnVlLFxyXG4gICAgY3VzdG9tTm9kZU5hbWVzOiB7fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9NSU5ETUFQID0gXCJtaW5kemotdmlld1wiO1xyXG5leHBvcnQgY29uc3QgVklFV19UWVBFX01JTkRNQVBfU1RZTEUgPSBcIm1pbmR6ai1zdHlsZS1wYW5lbFwiO1xyXG5leHBvcnQgY29uc3QgTUlORE1BUF9GSUxFX0VYVEVOU0lPTiA9IFwibWluZHpqXCI7XHJcbiIsICIvLyBzcmMvaTE4bi50c1xyXG4vLyBBbGwgMTkgbGFuZ3VhZ2VzIHdpdGggQ09NUExFVEUgdHJhbnNsYXRpb25zIChubyBmYWxsYmFjayB0byBFbmdsaXNoKVxyXG5cclxuZXhwb3J0IHR5cGUgTGFuZ3VhZ2UgPVxyXG4gICAgfCBcImVuXCJcclxuICAgIHwgXCJ6aFwiXHJcbiAgICB8IFwiamFcIlxyXG4gICAgfCBcImZyXCJcclxuICAgIHwgXCJkZVwiXHJcbiAgICB8IFwiZXNcIlxyXG4gICAgfCBcInJ1XCJcclxuICAgIHwgXCJzdlwiXHJcbiAgICB8IFwiaGlcIlxyXG4gICAgfCBcImtvXCJcclxuICAgIHwgXCJwdFwiXHJcbiAgICB8IFwiZmlcIlxyXG4gICAgfCBcIm5vXCJcclxuICAgIHwgXCJubFwiXHJcbiAgICB8IFwibGlcIlxyXG4gICAgfCBcImRhXCJcclxuICAgIHwgXCJoZVwiXHJcbiAgICB8IFwiaXRcIlxyXG4gICAgfCBcImFyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTEFOR1VBR0VTOiB7IHZhbHVlOiBMYW5ndWFnZTsgbGFiZWw6IHN0cmluZyB9W10gPSBbXHJcbiAgICB7IHZhbHVlOiBcImVuXCIsIGxhYmVsOiBcIkVuZ2xpc2hcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJ6aFwiLCBsYWJlbDogXCJcdTRFMkRcdTY1ODdcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJqYVwiLCBsYWJlbDogXCJcdTY1RTVcdTY3MkNcdThBOUVcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJmclwiLCBsYWJlbDogXCJGcmFuXHUwMEU3YWlzXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiZGVcIiwgbGFiZWw6IFwiRGV1dHNjaFwiIH0sXHJcbiAgICB7IHZhbHVlOiBcImVzXCIsIGxhYmVsOiBcIkVzcGFcdTAwRjFvbFwiIH0sXHJcbiAgICB7IHZhbHVlOiBcInJ1XCIsIGxhYmVsOiBcIlx1MDQyMFx1MDQ0M1x1MDQ0MVx1MDQ0MVx1MDQzQVx1MDQzOFx1MDQzOVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcInN2XCIsIGxhYmVsOiBcIlN2ZW5za2FcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJoaVwiLCBsYWJlbDogXCJcdTA5MzlcdTA5M0ZcdTA5MjhcdTA5NERcdTA5MjZcdTA5NDBcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJrb1wiLCBsYWJlbDogXCJcdUQ1NUNcdUFENkRcdUM1QjRcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJwdFwiLCBsYWJlbDogXCJQb3J0dWd1XHUwMEVBc1wiIH0sXHJcbiAgICB7IHZhbHVlOiBcImZpXCIsIGxhYmVsOiBcIlN1b21pXCIgfSxcclxuICAgIHsgdmFsdWU6IFwibm9cIiwgbGFiZWw6IFwiTm9yc2tcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJubFwiLCBsYWJlbDogXCJOZWRlcmxhbmRzXCIgfSxcclxuICAgIHsgdmFsdWU6IFwibGlcIiwgbGFiZWw6IFwiTGllY2h0ZW5zdGVpblwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIml0XCIsIGxhYmVsOiBcIkl0YWxpYW5vXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiZGFcIiwgbGFiZWw6IFwiRGFuc2tcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJoZVwiLCBsYWJlbDogXCJcdTA1RTJcdTA1RDFcdTA1RThcdTA1RDlcdTA1RUFcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJhclwiLCBsYWJlbDogXCJcdTA2MjdcdTA2NDRcdTA2MzlcdTA2MzFcdTA2MjhcdTA2NEFcdTA2MjlcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJvb3RcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBVbmRvXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgUmVkb1wiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgTWFwXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRm9jdXNcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiU2VhcmNoXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6U2VhcmNoIHwgU3BhY2U6RWRpdCB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk5ldyByb290XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duIG1vZGVcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdHlsZSBwYW5lbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZvY3VzIG5vZGVcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiU2VhcmNoIG5vZGVzXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiU2V0dGluZ3NcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiWm9vbSBJblwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiWm9vbSBPdXRcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgQ3VzdG9tXCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBCYXRjaCBEZWxldGVcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFZGl0IFN0eWxlXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE5ldyBSb290XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFVuZG9cIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgUmVkb1wiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIFN0eWxlXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIEVkaXRcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIENvcHlcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBDdXRcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFBhc3RlXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBDaGlsZFwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IExlZnQgQ2hpbGRcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgU2libGluZ1wiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIERlbGV0ZVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJIaWRlIFRvb2xiYXJcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIFN0eWxlXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiQ2hpbGQgTm9kZVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiUm9vdCBOb2RlXCIsXHJcbiAgICBcInNtLmJnXCI6IFwiQmFja2dyb3VuZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGV4dCBDb2xvclwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIkZvbnQgU2l6ZVwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiRm9udFwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIkJvcmRlciBTdHlsZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkJvcmRlciBDb2xvclwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkJvcmRlciBXaWR0aFwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJCb3JkZXIgUmFkaXVzXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluIFdpZHRoXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIk1pbiBIZWlnaHRcIixcclxuICAgIFwic20uY29ublwiOiBcIkNvbm5lY3Rpb25cIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cGVcIixcclxuICAgIFwic20uY29sb3JcIjogXCJDb2xvclwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIldpZHRoXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMZW5ndGhcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBSYWluYm93XCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJOb2RlIERpcmVjdGlvblwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlJpZ2h0XCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJMZWZ0XCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCb3RoXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXR0ZVwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJTZWxlY3Rpb25cIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJTZWxlY3Rpb24gQ29sb3JcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJTZWxlY3Rpb24gV2lkdGhcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiT3V0bGluZSBPZmZzZXRcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJFZGl0IE91dGxpbmUgQ29sb3JcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkVkaXQgT3V0bGluZSBXaWR0aFwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJUZXh0IEFsaWduXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGV4dCBQYWRkaW5nXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiTGluZSBIZWlnaHRcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJDYW52YXMgQmFja2dyb3VuZFwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlJlc2V0XCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiQ2xvc2VcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJTaG93IFRvb2xiYXJcIixcclxuICAgIFwic20udGJQYWRcIjogXCJUb29sYmFyIFBhZGRpbmdcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiVG9wXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlJpZ2h0XCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkJvdHRvbVwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJMZWZ0XCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiVG9vbGJhciBQb3NpdGlvblwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlRvcFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIkJvdHRvbVwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiVG9vbGJhciBCYWNrZ3JvdW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJCdXR0b24gQmFja2dyb3VuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIkJ1dHRvbiBCb3JkZXIgU3R5bGVcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIkJ1dHRvbiBCb3JkZXIgQ29sb3JcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiQnV0dG9uIFRleHQgQ29sb3JcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJSZXNldCBUb29sYmFyXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IE5vZGUgU3R5bGVcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiTGluZSBDb2xvclwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMaW5lIFdpZHRoXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiQ2xlYXIgQ3VzdG9tXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIkJvcmRlciBSYWRpdXNcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiU2VhcmNoIG5vZGVzLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiUm9vdFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk5ldyBSb290XCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkNoaWxkXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBTZXR0aW5nc1wiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIkxhbmd1YWdlXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIkludGVyZmFjZSBsYW5ndWFnZVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUaGVtZVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiQ29sb3IgdGhlbWVcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiTGlnaHRcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJEYXJrXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiU2hvdyBUb29sYmFyXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlNob3cgdG9vbGJhclwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJDYW52YXMgQmFja2dyb3VuZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQmFja2dyb3VuZCBjb2xvclwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJBYm91dFwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpb25cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkF1dGhvclwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiQSBmZWF0dXJlLXJpY2ggb3BlbiBzb3VyY2UgbWluZCBtYXAgYXBwIGZvciBPYnNpZGlhbiB3aXRoIGN1c3RvbSBzdHlsZXMsIHJhaW5ib3cgY29ubmVjdGlvbnMsIG11bHRpLXNlbGVjdCwgZHJhZyAmIGRyb3AsIGFuZCBNYXJrZG93biBpbXBvcnQvZXhwb3J0LlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlVwZGF0ZWRcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1YiBSZXBvc2l0b3J5XCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJTdXBwb3J0IE9wZW4gU291cmNlIEF1dGhvclwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIktleWJvYXJkIFNob3J0Y3V0c1wiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJDdXN0b21pemUgc2hvcnRjdXRzXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIkVkaXQgbm9kZVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJBZGQgc2libGluZ1wiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiQWRkIGNoaWxkXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJGb2N1cyBub2RlXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlVuZG9cIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiUmVkb1wiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIkxpbmUgYnJlYWsgKGluIGVkaXQpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkRyYWcgY2FudmFzXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiWm9vbSBpblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJab29tIG91dFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlJlc2V0IHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hdmlnYXRlIHVwXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIk5hdmlnYXRlIGRvd25cIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiTmF2aWdhdGUgbGVmdFwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWdhdGUgcmlnaHRcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlByZXNzIGtleS4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiU2Nyb2xsICYgWm9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVydCB2ZXJ0aWNhbCBzY3JvbGxcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJJbnZlcnQgaG9yaXpvbnRhbCBzY3JvbGxcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnQgem9vbSBkaXJlY3Rpb25cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIkVkaXQgb24gY3JlYXRlXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiRW50ZXIgZWRpdCBtb2RlIHdoZW4gY3JlYXRpbmcgbmV3IG5vZGVzXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlJvb3Qgbm9kZSBuYW1lXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJEZWZhdWx0IG5hbWUgZm9yIG5ldyByb290IG5vZGVzXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJDaGlsZCBub2RlIG5hbWVcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJEZWZhdWx0IG5hbWUgZm9yIG5ldyBjaGlsZCBub2Rlc1wiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlR5cGUgdG8gZWRpdFwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjpcclxuICAgICAgICBcIlByZXNzIGFueSBrZXkgdG8gZW50ZXIgZWRpdCBtb2RlIHdoZW4gYSBub2RlIGlzIHNlbGVjdGVkXCIsXHJcbn07XHJcblxyXG5jb25zdCBfemg6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgXHU0RTNCXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgXHU2NEE0XHU5NTAwXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgXHU5MUNEXHU1MDVBXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXHU2QTIxXHU1RjBGXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBcdTVCRkNcdTU2RkVcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiXHU1QjlBXHU0RjREXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlx1NjQxQ1x1N0QyMlwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlx1NjQxQ1x1N0QyMiB8IFNwYWNlOlx1N0YxNlx1OEY5MSB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1NjVCMFx1NUVGQVx1NEUzQlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93blx1NkEyMVx1NUYwRlwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlx1NjgzN1x1NUYwRlx1OTc2Mlx1Njc3RlwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1NUI5QVx1NEY0RFx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJcdTY0MUNcdTdEMjJcdTgyODJcdTcwQjlcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJcdThCQkVcdTdGNkVcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiXHU2NTNFXHU1OTI3XCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJcdTdGMjlcdTVDMEZcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgXHU4MUVBXHU1QjlBXHU0RTQ5XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTYyNzlcdTkxQ0ZcdTUyMjBcdTk2NjRcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTdGMTZcdThGOTFcdTY4MzdcdTVGMEZcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgXHU2NUIwXHU1RUZBXHU0RTNCXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1NjRBNFx1OTUwMFwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBcdTkxQ0RcdTUwNUFcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1NTE2OFx1NUM0MFx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBcdTdGMTZcdThGOTFcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBcdTU5MERcdTUyMzZcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBcdTUyNkFcdTUyMDdcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFx1N0M5OFx1OEQzNFwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgXHU1QjUwXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgXHU1REU2XHU0RkE3XHU1QjUwXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFx1NTE0NFx1NUYxRlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1NTIyMFx1OTY2NFwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJcdTk2OTBcdTg1Q0ZcdTVERTVcdTUxNzdcdTY4MEZcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHU1MTY4XHU1QzQwXHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHU1QjUwXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJcdTRFM0JcdTgyODJcdTcwQjlcIixcclxuICAgIFwic20uYmdcIjogXCJcdTgwQ0NcdTY2NkZcdTgyNzJcIixcclxuICAgIFwic20udGV4dFwiOiBcIlx1NjU4N1x1NUI1N1x1ODI3MlwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1NUI1N1x1NEY1M1x1NTkyN1x1NUMwRlwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiXHU1QjU3XHU0RjUzXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiXHU4RkI5XHU2ODQ2XHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiXHU4RkI5XHU2ODQ2XHU5ODlDXHU4MjcyXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHU4RkI5XHU2ODQ2XHU1QkJEXHU1RUE2XCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlx1NTcwNlx1ODlEMlwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIlx1NjcwMFx1NUMwRlx1NUJCRFx1NUVBNlwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJcdTY3MDBcdTVDMEZcdTlBRDhcdTVFQTZcIixcclxuICAgIFwic20uY29ublwiOiBcIlx1OEZERVx1N0VCRlwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiXHU3QzdCXHU1NzhCXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiXHU5ODlDXHU4MjcyXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiXHU1QkJEXHU1RUE2XCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJcdTk1N0ZcdTVFQTZcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBcdTVGNjlcdTg2NzlcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlx1ODI4Mlx1NzBCOVx1NjVCOVx1NTQxMVwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlx1NTNGM1x1NEZBN1wiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiXHU1REU2XHU0RkE3XCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJcdTVERTZcdTUzRjNcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJcdThDMDNcdTgyNzJcdTY3N0ZcIixcclxuICAgIFwic20uc2VsXCI6IFwiXHU5MDA5XHU0RTJEXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiXHU5MDA5XHU0RTJEXHU5ODlDXHU4MjcyXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiXHU5MDA5XHU0RTJEXHU2ODQ2XHU1QkJEXHU1RUE2XCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1OTAwOVx1NEUyRFx1Njg0Nlx1NTA0Rlx1NzlGQlwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlx1N0YxNlx1OEY5MVx1Njg0Nlx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiXHU3RjE2XHU4RjkxXHU2ODQ2XHU1QkJEXHU1RUE2XCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1NjU4N1x1NUI1N1x1NUJGOVx1OUY1MFwiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1NjU4N1x1NUI1N1x1OTVGNFx1OERERFwiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIlx1ODg0Q1x1OTVGNFx1OERERFwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1NzUzQlx1NUUwM1x1ODBDQ1x1NjY2Rlx1ODI3MlwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1OTFDRFx1N0Y2RVwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlx1NTE3M1x1OTVFRFwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlx1NjYzRVx1NzkzQVx1NURFNVx1NTE3N1x1NjgwRlwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlx1NURFNVx1NTE3N1x1NjgwRlx1NTE4NVx1OEZCOVx1OERERFwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJcdTRFMEFcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiXHU1M0YzXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIlx1NEUwQlwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJcdTVERTZcIixcclxuICAgIFwic20udGJQb3NcIjogXCJcdTVERTVcdTUxNzdcdTY4MEZcdTRGNERcdTdGNkVcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTk4NzZcdTkwRThcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTVFOTVcdTkwRThcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1NURFNVx1NTE3N1x1NjgwRlx1ODBDQ1x1NjY2Rlx1ODI3MlwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiXHU2MzA5XHU5NEFFXHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiXHU2MzA5XHU5NEFFXHU4RkI5XHU2ODQ2XHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJcdTYzMDlcdTk0QUVcdThGQjlcdTY4NDZcdTk4OUNcdTgyNzJcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHU2MzA5XHU5NEFFXHU1QjU3XHU0RjUzXHU5ODlDXHU4MjcyXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiXHU5MUNEXHU3RjZFXHU1REU1XHU1MTc3XHU2ODBGXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1ODI4Mlx1NzBCOVx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJcdThGREVcdTdFQkZcdTk4OUNcdTgyNzJcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHU4RkRFXHU3RUJGXHU1QkJEXHU1RUE2XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHU2RTA1XHU5NjY0XHU4MUVBXHU1QjlBXHU0RTQ5XCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlx1NTcwNlx1ODlEMlwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJcdTY0MUNcdTdEMjJcdTgyODJcdTcwQjkuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJcdTRFM0JcdTgyODJcdTcwQjlcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJcdTY1QjBcdTRFM0JcdTgyODJcdTcwQjlcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHU1QjUwXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBcdThCQkVcdTdGNkVcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdThCRURcdThBMDBcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHU3NTRDXHU5NzYyXHU4QkVEXHU4QTAwXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlx1NEUzQlx1OTg5OFwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiXHU5ODlDXHU4MjcyXHU0RTNCXHU5ODk4XCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIlx1NEVBRVx1ODI3MlwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIlx1NjY5N1x1ODI3MlwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlx1NjYzRVx1NzkzQVx1NURFNVx1NTE3N1x1NjgwRlwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJcdTY2M0VcdTc5M0FcdTk4NzZcdTkwRThcdTVERTVcdTUxNzdcdTY4MEZcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiXHU3NTNCXHU1RTAzXHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdTc1M0JcdTVFMDNcdTgwQ0NcdTY2NkZcdTk4OUNcdTgyNzJcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiXHU1MTczXHU0RThFXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiXHU3MjQ4XHU2NzJDXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJcdTRGNUNcdTgwMDVcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIlx1NEUwMFx1NkIzRVx1NTI5Rlx1ODBGRFx1NEUzMFx1NUJDQ1x1NzY4NE9ic2lkaWFuXHU2MDFEXHU3RUY0XHU1QkZDXHU1NkZFXHU1RjAwXHU2RTkwXHU1RTk0XHU3NTI4XHVGRjBDXHU2NTJGXHU2MzAxXHU4MUVBXHU1QjlBXHU0RTQ5XHU2ODM3XHU1RjBGXHUzMDAxXHU1RjY5XHU4Njc5XHU4RkRFXHU3RUJGXHUzMDAxXHU1OTFBXHU5MDA5XHUzMDAxXHU2MkQ2XHU2NTNFXHU1NDhDTWFya2Rvd25cdTdGMTZcdThGOTFcdTVCRkNcdTUxNjVcdTVCRkNcdTUxRkFcdTMwMDJcIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJcdTY2RjRcdTY1QjBcdTY1RTVcdTY3MUZcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1YiBcdTRFRDNcdTVFOTNcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlx1NjUyRlx1NjMwMVx1NUYwMFx1NkU5MFx1OTg3OVx1NzZFRVx1NEY1Q1x1ODAwNVwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlx1NUZFQlx1NjM3N1x1OTUyRVx1OEJCRVx1N0Y2RVwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJcdTgxRUFcdTVCOUFcdTRFNDlcdTVGRUJcdTYzNzdcdTk1MkVcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHU3RjE2XHU4RjkxXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIlx1NjVCMFx1NUVGQVx1NTE0NFx1NUYxRlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHU2NUIwXHU1RUZBXHU1QjUwXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdTVCOUFcdTRGNERcdTgyODJcdTcwQjlcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHU2NEE0XHU5NTAwXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1OTFDRFx1NTA1QVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1NjM2Mlx1ODg0QyhcdTdGMTZcdThGOTFcdTRFMkQpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlx1NjJENlx1NTJBOFx1NzUzQlx1NUUwM1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlx1NjUzRVx1NTkyN1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJcdTdGMjlcdTVDMEZcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJcdTkxQ0RcdTdGNkVcdTdGMjlcdTY1M0VcIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIlx1NTQxMVx1NEUwQVx1NUJGQ1x1ODIyQVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTU0MTFcdTRFMEJcdTVCRkNcdTgyMkFcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiXHU1NDExXHU1REU2XHU1QkZDXHU4MjJBXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJcdTU0MTFcdTUzRjNcdTVCRkNcdTgyMkFcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1NjMwOVx1NEUwQlx1NjMwOVx1OTUyRS4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiXHU2RURBXHU1MkE4XHU0RTBFXHU3RjI5XHU2NTNFXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHU1M0NEXHU4RjZDXHU1NzgyXHU3NkY0XHU2RURBXHU1MkE4XCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiXHU1M0NEXHU4RjZDXHU2QzM0XHU1RTczXHU2RURBXHU1MkE4XCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiXHU1M0NEXHU4RjZDXHU3RjI5XHU2NTNFXHU2NUI5XHU1NDExXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTUyMUJcdTVFRkFcdTY1RjZcdTdGMTZcdThGOTFcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJcdTUyMUJcdTVFRkFcdTY1QjBcdTgyODJcdTcwQjlcdTY1RjZcdTgxRUFcdTUyQThcdThGREJcdTUxNjVcdTdGMTZcdThGOTFcdTZBMjFcdTVGMEZcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHU0RTNCXHU4MjgyXHU3MEI5XHU1NDBEXHU3OUYwXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJcdTY1QjBcdTRFM0JcdTgyODJcdTcwQjlcdTc2ODRcdTlFRDhcdThCQTRcdTU0MERcdTc5RjBcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIlx1NUI1MFx1ODI4Mlx1NzBCOVx1NTQwRFx1NzlGMFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlx1NjVCMFx1NUI1MFx1ODI4Mlx1NzBCOVx1NzY4NFx1OUVEOFx1OEJBNFx1NTQwRFx1NzlGMFwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlx1NjMwOVx1OTUyRVx1N0YxNlx1OEY5MVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdTkwMDlcdTRFMkRcdTgyODJcdTcwQjlcdTY1RjZcdTYzMDlcdTRFRkJcdTYxMEZcdTk1MkVcdTc2RjRcdTYzQTVcdThGREJcdTUxNjVcdTdGMTZcdThGOTFcdTZBMjFcdTVGMEZcIixcclxufTtcclxuXHJcbmNvbnN0IF9qYTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTMwRUJcdTMwRkNcdTMwQzhcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTUxNDNcdTMwNkJcdTYyM0JcdTMwNTlcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTMwODRcdTMwOEFcdTc2RjRcdTMwNTlcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIFx1MzBERVx1MzBDM1x1MzBEN1wiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJcdTMwRDVcdTMwQTlcdTMwRkNcdTMwQUJcdTMwQjlcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiXHU2OTFDXHU3RDIyXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6XHU2OTFDXHU3RDIyIHwgU3BhY2U6XHU3REU4XHU5NkM2IHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiXHU2NUIwXHU4OThGXHUzMEVCXHUzMEZDXHUzMEM4XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duXHUzMEUyXHUzMEZDXHUzMEM5XCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXHUzMEQxXHUzMENEXHUzMEVCXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHUzMDZCXHUzMEQ1XHUzMEE5XHUzMEZDXHUzMEFCXHUzMEI5XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1MzBDRVx1MzBGQ1x1MzBDOVx1NjkxQ1x1N0QyMlwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIlx1OEEyRFx1NUI5QVwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJcdTYyRTFcdTU5MjdcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlx1N0UyRVx1NUMwRlwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBcdTMwQUJcdTMwQjlcdTMwQkZcdTMwRTBcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1NEUwMFx1NjJFQ1x1NTI0QVx1OTY2NFwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlx1N0RFOFx1OTZDNlwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBcdTY1QjBcdTg5OEZcdTMwRUJcdTMwRkNcdTMwQzhcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHU1MTQzXHUzMDZCXHU2MjNCXHUzMDU5XCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFx1MzA4NFx1MzA4QVx1NzZGNFx1MzA1OVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHU1MTY4XHU0RjUzXHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1N0RFOFx1OTZDNlwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIFx1MzBCM1x1MzBENFx1MzBGQ1wiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFx1MzBBQlx1MzBDM1x1MzBDOFwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgXHU4Q0JDXHUzMDhBXHU0RUQ4XHUzMDUxXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBcdTVERTZcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgXHU1MTQ0XHU1RjFGXHUzMENFXHUzMEZDXHUzMEM5XCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHU1MjRBXHU5NjY0XCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlx1MzBDNFx1MzBGQ1x1MzBFQlx1MzBEMFx1MzBGQ1x1MzA5Mlx1OTc1RVx1ODg2OFx1NzkzQVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTUxNjhcdTRGNTNcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlx1MzBFQlx1MzBGQ1x1MzBDOFx1MzBDRVx1MzBGQ1x1MzBDOVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1ODBDQ1x1NjY2Rlx1ODI3MlwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHU2NTg3XHU1QjU3XHU4MjcyXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiXHUzMEQ1XHUzMEE5XHUzMEYzXHUzMEM4XHUzMEI1XHUzMEE0XHUzMEJBXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJcdTMwRDVcdTMwQTlcdTMwRjNcdTMwQzhcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJcdTY3QTBcdTdEREFcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdTY3QTBcdTdEREFcdTMwNkVcdTgyNzJcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJcdTY3QTBcdTdEREFcdTMwNkVcdTVFNDVcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiXHU4OUQyXHU0RTM4XCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHU2NzAwXHU1QzBGXHU1RTQ1XCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIlx1NjcwMFx1NUMwRlx1OUFEOFx1MzA1NVwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiXHU2M0E1XHU3RDlBXHU3RERBXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJcdTMwQkZcdTMwQTRcdTMwRDdcIixcclxuICAgIFwic20uY29sb3JcIjogXCJcdTgyNzJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJcdTVFNDVcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIlx1OTU3N1x1MzA1NVwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFx1MzBFQ1x1MzBBNFx1MzBGM1x1MzBEQ1x1MzBGQ1wiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHU2NUI5XHU1NDExXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiXHU1M0YzXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJcdTVERTZcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIlx1NEUyMVx1NjVCOVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlx1MzBEMVx1MzBFQ1x1MzBDM1x1MzBDOFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJcdTkwNzhcdTYyOUVcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJcdTkwNzhcdTYyOUVcdTgyNzJcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJcdTkwNzhcdTYyOUVcdTY3QTBcdTMwNkVcdTVFNDVcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiXHUzMEEyXHUzMEE2XHUzMEM4XHUzMEU5XHUzMEE0XHUzMEYzXHUzMEFBXHUzMEQ1XHUzMEJCXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiXHU3REU4XHU5NkM2XHU2N0EwXHUzMDZFXHU4MjcyXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJcdTdERThcdTk2QzZcdTY3QTBcdTMwNkVcdTVFNDVcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiXHUzMEM2XHUzMEFEXHUzMEI5XHUzMEM4XHU5MTREXHU3RjZFXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiXHUzMEM2XHUzMEFEXHUzMEI5XHUzMEM4XHU0RjU5XHU3NjdEXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHU4ODRDXHUzMDZFXHU5QUQ4XHUzMDU1XCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHUzMEFEXHUzMEUzXHUzMEYzXHUzMEQwXHUzMEI5XHU4MENDXHU2NjZGXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiXHUzMEVBXHUzMEJCXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiXHU5NTg5XHUzMDU4XHUzMDhCXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHU4ODY4XHU3OTNBXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHU0RjU5XHU3NjdEXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1NEUwQVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTUzRjNcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHU0RTBCXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1NURFNlwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MzBDNFx1MzBGQ1x1MzBFQlx1MzBEMFx1MzBGQ1x1NEY0RFx1N0Y2RVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlx1NEUwQVx1OTBFOFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIlx1NEUwQlx1OTBFOFwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHU4MENDXHU2NjZGXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJcdTMwRENcdTMwQkZcdTMwRjNcdTgwQ0NcdTY2NkZcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTMwRENcdTMwQkZcdTMwRjNcdTY3QTBcdTdEREFcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlx1MzBEQ1x1MzBCRlx1MzBGM1x1NjdBMFx1N0REQVx1MzA2RVx1ODI3MlwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJcdTMwRENcdTMwQkZcdTMwRjNcdTY1ODdcdTVCNTdcdTgyNzJcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTMwQzRcdTMwRkNcdTMwRUJcdTMwRDBcdTMwRkNcdTMwRUFcdTMwQkJcdTMwQzNcdTMwQzhcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHUzMENFXHUzMEZDXHUzMEM5XHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1N0REQVx1MzA2RVx1ODI3MlwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdTdEREFcdTMwNkVcdTVFNDVcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJcdTMwQUJcdTMwQjlcdTMwQkZcdTMwRTBcdTMwOTJcdTMwQUZcdTMwRUFcdTMwQTJcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHU4OUQyXHU0RTM4XCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlx1MzBDRVx1MzBGQ1x1MzBDOVx1MzA5Mlx1NjkxQ1x1N0QyMi4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MzBFQlx1MzBGQ1x1MzBDOFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1NjVCMFx1MzA1N1x1MzA0NFx1MzBFQlx1MzBGQ1x1MzBDOFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIFx1OEEyRFx1NUI5QVwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlx1OEEwMFx1OEE5RVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJcdTMwQTRcdTMwRjNcdTMwQkZcdTMwRkNcdTMwRDVcdTMwQTdcdTMwRkNcdTMwQjlcdThBMDBcdThBOUVcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiXHUzMEM2XHUzMEZDXHUzMERFXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJcdTMwQUJcdTMwRTlcdTMwRkNcdTMwQzZcdTMwRkNcdTMwREVcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiXHUzMEU5XHUzMEE0XHUzMEM4XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiXHUzMEMwXHUzMEZDXHUzMEFGXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHU4ODY4XHU3OTNBXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1MzBDNFx1MzBGQ1x1MzBFQlx1MzBEMFx1MzBGQ1x1MzA5Mlx1ODg2OFx1NzkzQVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJcdTMwQURcdTMwRTNcdTMwRjNcdTMwRDBcdTMwQjlcdTgwQ0NcdTY2NkZcdTgyNzJcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIlx1ODBDQ1x1NjY2Rlx1ODI3MlwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTY5ODJcdTg5ODFcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdTMwRDBcdTMwRkNcdTMwQjhcdTMwRTdcdTMwRjNcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1NEY1Q1x1ODAwNVwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiT2JzaWRpYW5cdTc1MjhcdTMwNkVcdTlBRDhcdTZBNUZcdTgwRkRcdTMwQUFcdTMwRkNcdTMwRDdcdTMwRjNcdTMwQkRcdTMwRkNcdTMwQjlcdTMwREVcdTMwQTRcdTMwRjNcdTMwQzlcdTMwREVcdTMwQzNcdTMwRDdcdTMwMDJcdTMwQUJcdTMwQjlcdTMwQkZcdTMwRTBcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcdTMwMDFcdTMwRUNcdTMwQTRcdTMwRjNcdTMwRENcdTMwRkNcdTYzQTVcdTdEOUFcdTdEREFcdTMwMDFcdTg5MDdcdTY1NzBcdTkwNzhcdTYyOUVcdTMwMDFcdTMwQzlcdTMwRTlcdTMwQzNcdTMwQjAmXHUzMEM5XHUzMEVEXHUzMEMzXHUzMEQ3XHUzMDAxTWFya2Rvd25cdTMwQTRcdTMwRjNcdTMwRERcdTMwRkNcdTMwQzgvXHUzMEE4XHUzMEFGXHUzMEI5XHUzMEREXHUzMEZDXHUzMEM4XHU1QkZFXHU1RkRDXHUzMDAyXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHU2NkY0XHU2NUIwXHU2NUU1XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWJcdTMwRUFcdTMwRERcdTMwQjhcdTMwQzhcdTMwRUFcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlx1MzBBQVx1MzBGQ1x1MzBEN1x1MzBGM1x1MzBCRFx1MzBGQ1x1MzBCOVx1NEY1Q1x1ODAwNVx1MzA5Mlx1NjUyRlx1NjNGNFwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlx1MzBBRFx1MzBGQ1x1MzBEQ1x1MzBGQ1x1MzBDOVx1MzBCN1x1MzBFN1x1MzBGQ1x1MzBDOFx1MzBBQlx1MzBDM1x1MzBDOFwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJcdTMwQjdcdTMwRTdcdTMwRkNcdTMwQzhcdTMwQUJcdTMwQzNcdTMwQzhcdTMwOTJcdTMwQUJcdTMwQjlcdTMwQkZcdTMwREVcdTMwQTRcdTMwQkFcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHUzMDkyXHU3REU4XHU5NkM2XCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIlx1NTE0NFx1NUYxRlx1MzBDRVx1MzBGQ1x1MzBDOVx1OEZGRFx1NTJBMFwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHU1QjUwXHUzMENFXHUzMEZDXHUzMEM5XHU4RkZEXHU1MkEwXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdTMwQ0VcdTMwRkNcdTMwQzlcdTMwNkJcdTMwRDVcdTMwQTlcdTMwRkNcdTMwQUJcdTMwQjlcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHU1MTQzXHUzMDZCXHU2MjNCXHUzMDU5XCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1MzA4NFx1MzA4QVx1NzZGNFx1MzA1OVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1NjUzOVx1ODg0Q1x1RkYwOFx1N0RFOFx1OTZDNlx1NEUyRFx1RkYwOVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJcdTMwQURcdTMwRTNcdTMwRjNcdTMwRDBcdTMwQjlcdTMwOTJcdTc5RkJcdTUyRDVcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTYyRTFcdTU5MjdcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHU3RTJFXHU1QzBGXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUzMEJBXHUzMEZDXHUzMEUwXHUzMEVBXHUzMEJCXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJcdTRFMEFcdTMwNkJcdTc5RkJcdTUyRDVcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiXHU0RTBCXHUzMDZCXHU3OUZCXHU1MkQ1XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1NURFNlx1MzA2Qlx1NzlGQlx1NTJENVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiXHU1M0YzXHUzMDZCXHU3OUZCXHU1MkQ1XCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJcdTMwQURcdTMwRkNcdTMwOTJcdTYyQkNcdTMwNTdcdTMwNjZcdTMwNEZcdTMwNjBcdTMwNTVcdTMwNDQuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlx1MzBCOVx1MzBBRlx1MzBFRFx1MzBGQ1x1MzBFQlx1MzA2OFx1MzBCQVx1MzBGQ1x1MzBFMFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIlx1NTc4Mlx1NzZGNFx1MzBCOVx1MzBBRlx1MzBFRFx1MzBGQ1x1MzBFQlx1NTNDRFx1OEVFMlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1NkMzNFx1NUU3M1x1MzBCOVx1MzBBRlx1MzBFRFx1MzBGQ1x1MzBFQlx1NTNDRFx1OEVFMlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MzBCQVx1MzBGQ1x1MzBFMFx1NjVCOVx1NTQxMVx1NTNDRFx1OEVFMlwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiXHU0RjVDXHU2MjEwXHU2NjQyXHUzMDZCXHU3REU4XHU5NkM2XCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHU0RjVDXHU2MjEwXHU2NjQyXHUzMDZCXHU3REU4XHU5NkM2XHUzMEUyXHUzMEZDXHUzMEM5XHUzMDZCXHU1MTY1XHUzMDhCXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlx1MzBFQlx1MzBGQ1x1MzBDOFx1MzBDRVx1MzBGQ1x1MzBDOVx1NTQwRFwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHU2NUIwXHU4OThGXHUzMEVCXHUzMEZDXHUzMEM4XHUzMDZFXHUzMEM3XHUzMEQ1XHUzMEE5XHUzMEVCXHUzMEM4XHU1NDBEXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcdTU0MERcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJcdTY1QjBcdTg5OEZcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcdTMwNkVcdTMwQzdcdTMwRDVcdTMwQTlcdTMwRUJcdTMwQzhcdTU0MERcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJcdTMwQURcdTMwRkNcdTMwNjdcdTdERThcdTk2QzZcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHU5MDc4XHU2MjlFXHU2NjQyXHUzMDZCXHUzMEFEXHUzMEZDXHUzMDkyXHU2MkJDXHUzMDU5XHUzMDY4XHU3REU4XHU5NkM2XHUzMEUyXHUzMEZDXHUzMEM5XHUzMDZCXHU1MTY1XHUzMDhCXCIsXHJcbn07XHJcblxyXG5jb25zdCBfZnI6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUmFjaW5lXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgQW5udWxlclwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJlZmFpcmVcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIENhcnRlXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRm9jdXNcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiUmVjaGVyY2hlclwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlJlY2hlcmNoZXIgfCBFc3BhY2U6XHUwMEM5ZGl0ZXIgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOb3V2ZWxsZSByYWNpbmVcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTW9kZSBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlBhbm5lYXUgZGUgc3R5bGVcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJGb2NhbGlzZXIgbGUgblx1MDE1M3VkXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlJlY2hlcmNoZXIgZGVzIG5cdTAxNTN1ZHNcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJQYXJhbVx1MDBFOHRyZXNcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiWm9vbSBhdmFudFwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiWm9vbSBhcnJpXHUwMEU4cmVcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgUGVyc29ubmFsaXNcdTAwRTlcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFN1cHByLiBlbiBsb3RcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBNb2RpZmllciBsZSBzdHlsZVwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOb3V2ZWxsZSByYWNpbmVcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgQW5udWxlclwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBSZWZhaXJlXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZSBnbG9iYWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHUwMEM5ZGl0ZXJcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIENvcGllclwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIENvdXBlclwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgQ29sbGVyXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBFbmZhbnRcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBFbmZhbnQgZ2F1Y2hlXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEZyXHUwMEU4cmVcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTdXBwcmltZXJcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiTWFzcXVlciBsYSBiYXJyZSBkJ291dGlsc1wiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZSBnbG9iYWxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJOXHUwMTUzdWQgZW5mYW50XCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJOXHUwMTUzdWQgcmFjaW5lXCIsXHJcbiAgICBcInNtLmJnXCI6IFwiRm9uZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiQ291bGV1ciB0ZXh0ZVwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlRhaWxsZSBwb2xpY2VcIixcclxuICAgIFwic20uZm9udFwiOiBcIlBvbGljZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlN0eWxlIGJvcmR1cmVcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJDb3VsZXVyIGJvcmR1cmVcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJMYXJnZXVyIGJvcmR1cmVcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiUmF5b24gYm9yZHVyZVwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIkxhcmdldXIgbWluLlwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJIYXV0ZXVyIG1pbi5cIixcclxuICAgIFwic20uY29ublwiOiBcIkNvbm5leGlvblwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiVHlwZVwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkNvdWxldXJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJMYXJnZXVyXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMb25ndWV1clwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IEFyYy1lbi1jaWVsXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJEaXJlY3Rpb24gblx1MDE1M3Vkc1wiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIkRyb2l0ZVwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiR2F1Y2hlXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJMZXMgZGV1eFwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dGVcIixcclxuICAgIFwic20uc2VsXCI6IFwiU1x1MDBFOWxlY3Rpb25cIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJDb3VsZXVyIHNcdTAwRTlsZWN0aW9uXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiTGFyZ2V1ciBzXHUwMEU5bGVjdGlvblwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJEXHUwMEU5Y2FsYWdlIGNvbnRvdXJcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJDb3VsZXVyIGNvbnRvdXIgXHUwMEU5ZGl0aW9uXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJMYXJnZXVyIGNvbnRvdXIgXHUwMEU5ZGl0aW9uXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIkFsaWduZW1lbnQgdGV4dGVcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJNYXJnZSB0ZXh0ZVwiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIkhhdXRldXIgZGUgbGlnbmVcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJGb25kIGR1IGNhbmV2YXNcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJSXHUwMEU5aW5pdGlhbGlzZXJcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJGZXJtZXJcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJBZmZpY2hlciBiYXJyZSBkJ291dGlsc1wiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIk1hcmdlcyBiYXJyZVwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJIYXV0XCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIkRyb2l0ZVwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJCYXNcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiR2F1Y2hlXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiUG9zaXRpb24gYmFycmVcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJIYXV0XCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiQmFzXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJGb25kIGJhcnJlXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJGb25kIGJvdXRvblwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlN0eWxlIGJvcmR1cmUgYm91dG9uXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJDb3VsZXVyIGJvcmR1cmUgYm91dG9uXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIkNvdWxldXIgdGV4dGUgYm91dG9uXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUlx1MDBFOWluaXRpYWxpc2VyIGxhIGJhcnJlXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlIGR1IG5cdTAxNTN1ZFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJDb3VsZXVyIGxpZ25lXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxhcmdldXIgbGlnbmVcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJFZmZhY2VyIHBlcnNvbm5hbGlzYXRpb25cIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmF5b24gYm9yZHVyZVwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJSZWNoZXJjaGVyLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiUmFjaW5lXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTm91dmVsbGUgcmFjaW5lXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkVuZmFudFwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJQYXJhbVx1MDBFOHRyZXMgTWluZFpKXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiTGFuZ3VlXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIkxhbmd1ZSBkJ2ludGVyZmFjZVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUaFx1MDBFOG1lXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJUaFx1MDBFOG1lIGRlIGNvdWxldXJcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiQ2xhaXJcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJTb21icmVcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJBZmZpY2hlciBiYXJyZSBkJ291dGlsc1wiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJBZmZpY2hlciBsYSBiYXJyZVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJGb25kIGR1IGNhbmV2YXNcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkNvdWxldXIgZGUgZm9uZFwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTAwQzAgcHJvcG9zXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0ZXVyXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJBcHBsaWNhdGlvbiBkZSBjYXJ0ZSBtZW50YWxlIG9wZW4gc291cmNlIHBvdXIgT2JzaWRpYW4gYXZlYyBzdHlsZXMgcGVyc29ubmFsaXNcdTAwRTlzLCBjb25uZXhpb25zIGFyYy1lbi1jaWVsLCBtdWx0aS1zXHUwMEU5bGVjdGlvbiwgZ2xpc3Nlci1kXHUwMEU5cG9zZXIgZXQgaW1wb3J0L2V4cG9ydCBNYXJrZG93bi5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJNaXMgXHUwMEUwIGpvdXJcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkRcdTAwRTlwXHUwMEY0dCBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlNvdXRlbmlyIGwnYXV0ZXVyIG9wZW4gc291cmNlXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiUmFjY291cmNpcyBjbGF2aWVyXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlBlcnNvbm5hbGlzZXIgbGVzIHJhY2NvdXJjaXNcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUwMEM5ZGl0ZXIgbGUgblx1MDE1M3VkXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkFqb3V0ZXIgdW4gZnJcdTAwRThyZVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiQWpvdXRlciB1biBlbmZhbnRcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZvY2FsaXNlciBsZSBuXHUwMTUzdWRcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiQW5udWxlclwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJSZWZhaXJlXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiUmV0b3VyIFx1MDBFMCBsYSBsaWduZSAoZW4gXHUwMEU5ZGl0aW9uKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJEXHUwMEU5cGxhY2VyIGxlIGNhbmV2YXNcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJab29tIGF2YW50XCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlpvb20gYXJyaVx1MDBFOHJlXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiUlx1MDBFOWluaXRpYWxpc2VyIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hdmlndWVyIGhhdXRcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiTmF2aWd1ZXIgYmFzXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hdmlndWVyIGdhdWNoZVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWd1ZXIgZHJvaXRlXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJBcHB1eWV6Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJEXHUwMEU5ZmlsZW1lbnQgZXQgem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVyc2VyIGRcdTAwRTlmaWxlbWVudCBWXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJzZXIgZFx1MDBFOWZpbGVtZW50IEhcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnNlciB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTAwQzlkaXRlciBcdTAwRTAgbGEgY3JcdTAwRTlhdGlvblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIk1vZGUgXHUwMEU5ZGl0aW9uIFx1MDBFMCBsYSBjclx1MDBFOWF0aW9uXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIk5vbSByYWNpbmVcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIk5vbSBwYXIgZFx1MDBFOWZhdXQgZGVzIHJhY2luZXNcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIk5vbSBlbmZhbnRcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJOb20gcGFyIGRcdTAwRTlmYXV0IGRlcyBlbmZhbnRzXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiU2Fpc2llIHBvdXIgXHUwMEU5ZGl0ZXJcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiXHUwMEM5ZGl0ZXIgZW4gdGFwYW50IHF1YW5kIHVuIG5cdTAxNTN1ZCBlc3Qgc1x1MDBFOWxlY3Rpb25uXHUwMEU5XCIsXHJcbn07XHJcblxyXG5jb25zdCBfZGU6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgV3VyemVsXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgUlx1MDBGQ2NrZ1x1MDBFNG5naWdcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBXaWVkZXJob2xlblwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgS2FydGVcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZva3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlN1Y2hlblwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlN1Y2hlbiB8IExlZXJ0YXN0ZTpCZWFyYmVpdGVuIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTmV1ZSBXdXJ6ZWxcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24tTW9kdXNcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlsLVBhbmVsXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiS25vdGVuIGZva3Vzc2llcmVuXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIktub3RlbiBzdWNoZW5cIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJFaW5zdGVsbHVuZ2VuXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlZlcmdyXHUwMEY2XHUwMERGZXJuXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJWZXJrbGVpbmVyblwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBCZW51dHplcmRlZmluaWVydFwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgQWxsZSBsXHUwMEY2c2NoZW5cIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsIGJlYXJiZWl0ZW5cIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTmV1ZSBXdXJ6ZWxcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgUlx1MDBGQ2NrZ1x1MDBFNG5naWdcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgV2llZGVyaG9sZW5cIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbGVyIFN0aWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgQmVhcmJlaXRlblwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBLb3BpZXJlblwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIEF1c3NjaG5laWRlblwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgRWluZlx1MDBGQ2dlblwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgS2luZGtub3RlblwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IExpbmtlciBLaW5ka25vdGVuXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEdlc2Nod2lzdGVyXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgTFx1MDBGNnNjaGVuXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIldlcmt6ZXVnbGVpc3RlIGF1c2JsZW5kZW5cIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsZXIgU3RpbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIktpbmRrbm90ZW5cIixcclxuICAgIFwic20ucm9vdFwiOiBcIld1cnplbGtub3RlblwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZXh0ZmFyYmVcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJTY2hyaWZ0Z3JcdTAwRjZcdTAwREZlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJTY2hyaWZ0YXJ0XCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiUmFobWVuc3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlJhaG1lbmZhcmJlXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiUmFobWVuYnJlaXRlXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIkVja2VucmFkaXVzXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBCcmVpdGVcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiTWluLiBIXHUwMEY2aGVcIixcclxuICAgIFwic20uY29ublwiOiBcIlZlcmJpbmR1bmdcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cFwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkZhcmJlXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiQnJlaXRlXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMXHUwMEU0bmdlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmVnZW5ib2dlblwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiS25vdGVucmljaHR1bmdcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJSZWNodHNcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIkxpbmtzXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCZWlkZVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dGVcIixcclxuICAgIFwic20uc2VsXCI6IFwiQXVzd2FobFwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIkF1c3dhaGxmYXJiZVwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIkF1c3dhaGxicmVpdGVcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiS29udHVyLVZlcnNhdHpcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJCZWFyYmVpdHVuZ3NyYWhtZW5mYXJiZVwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiQmVhcmJlaXR1bmdzcmFobWVuYnJlaXRlXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRleHRhdXNyaWNodHVuZ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRleHRhYnN0YW5kXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiWmVpbGVuaFx1MDBGNmhlXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiTGVpbndhbmQtSGludGVyZ3J1bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJadXJcdTAwRkNja3NldHplblwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlNjaGxpZVx1MDBERmVuXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiV2Vya3pldWdsZWlzdGUgYW56ZWlnZW5cIixcclxuICAgIFwic20udGJQYWRcIjogXCJXZXJremV1Z2xlaXN0ZSBBYnN0YW5kXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIk9iZW5cIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiUmVjaHRzXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIlVudGVuXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIkxpbmtzXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiV2Vya3pldWdsZWlzdGUgUG9zaXRpb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJPYmVuXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiVW50ZW5cIixcclxuICAgIFwic20udGJCZ1wiOiBcIldlcmt6ZXVnbGVpc3RlIEhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJTY2hhbHRmbFx1MDBFNGNoZSBIaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlNjaGFsdGZsXHUwMEU0Y2hlIFJhaG1lbnN0aWxcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlNjaGFsdGZsXHUwMEU0Y2hlIFJhaG1lbmZhcmJlXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIlNjaGFsdGZsXHUwMEU0Y2hlIFRleHRmYXJiZVwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIldlcmt6ZXVnbGVpc3RlIHp1clx1MDBGQ2Nrc2V0emVuXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEtub3RlbnN0aWxcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiTGluaWVuZmFyYmVcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGluaWVuYnJlaXRlXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiQW5wYXNzdW5nIHp1clx1MDBGQ2Nrc2V0emVuXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIkVja2VucmFkaXVzXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIktub3RlbiBzdWNoZW4uLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJXdXJ6ZWxcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOZXVlIFd1cnplbFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJLaW5kXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBFaW5zdGVsbHVuZ2VuXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3ByYWNoZVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJPYmVyZmxcdTAwRTRjaGVuc3ByYWNoZVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUaGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiRmFyYnRoZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkhlbGxcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJEdW5rZWxcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJXZXJremV1Z2xlaXN0ZSBhbnplaWdlblwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJXZXJremV1Z2xlaXN0ZSBhbnplaWdlblwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJMZWlud2FuZC1IaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiSGludGVyZ3J1bmRmYXJiZVwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTAwRENiZXJcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaW9uXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRvclwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiRnVua3Rpb25zcmVpY2hlIE9wZW4tU291cmNlLU1pbmRtYXAtQXBwIGZcdTAwRkNyIE9ic2lkaWFuIG1pdCBiZW51dHplcmRlZmluaWVydGVuIFN0aWxlbiwgUmVnZW5ib2dlbi1WZXJiaW5kdW5nZW4sIE1laHJmYWNoYXVzd2FobCwgRHJhZyAmIERyb3AgdW5kIE1hcmtkb3duLUltcG9ydC9FeHBvcnQuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiQWt0dWFsaXNpZXJ0XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItUmVwb3NpdG9yeVwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiT3Blbi1Tb3VyY2UtQXV0b3IgdW50ZXJzdFx1MDBGQ3R6ZW5cIixcclxuICAgIFwic2V0LmtleXNcIjogXCJUYXN0ZW5rb21iaW5hdGlvbmVuXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlRhc3RlbmtvbWJpbmF0aW9uZW4gYW5wYXNzZW5cIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiS25vdGVuIGJlYXJiZWl0ZW5cIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiR2VzY2h3aXN0ZXIgaGluenVmXHUwMEZDZ2VuXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJLaW5kIGhpbnp1Zlx1MDBGQ2dlblwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiS25vdGVuIGZva3Vzc2llcmVuXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlJcdTAwRkNja2dcdTAwRTRuZ2lnXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIldpZWRlcmhvbGVuXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiWmVpbGVudW1icnVjaCAoYmVpbSBCZWFyYmVpdGVuKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJMZWlud2FuZCB6aWVoZW5cIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJWZXJnclx1MDBGNlx1MDBERmVyblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJWZXJrbGVpbmVyblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlpvb20genVyXHUwMEZDY2tzZXR6ZW5cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hY2ggb2JlblwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOYWNoIHVudGVuXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hY2ggbGlua3NcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIk5hY2ggcmVjaHRzXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJUYXN0ZSBkclx1MDBGQ2NrZW4uLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjcm9sbGVuIHVuZCBab29tZW5cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJWZXJ0aWthbGVzIFNjcm9sbGVuIHVta2VocmVuXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSG9yaXpvbnRhbGVzIFNjcm9sbGVuIHVta2VocmVuXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiWm9vbS1SaWNodHVuZyB1bWtlaHJlblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiQmVpIEVyc3RlbGx1bmcgYmVhcmJlaXRlblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIkJlYXJiZWl0dW5nc21vZHVzIGJlaW0gRXJzdGVsbGVuIG5ldWVyIEtub3RlblwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJXdXJ6ZWxrbm90ZW5uYW1lXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJTdGFuZGFyZG5hbWUgZlx1MDBGQ3IgbmV1ZSBXdXJ6ZWxuXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJLaW5ka25vdGVubmFtZVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmFtZSBmXHUwMEZDciBuZXVlIEtpbmRlclwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlRpcHBlbiB6dW0gQmVhcmJlaXRlblwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJCZWkgQXVzd2FobCBkaXJla3QgYmVhcmJlaXRlblwiLFxyXG59O1xyXG5cclxuY29uc3QgX2VzOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJhXHUwMEVEelwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IERlc2hhY2VyXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgUmVoYWNlclwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgTWFwYVwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG9cIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJFbmZvY2FyXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIkJ1c2NhclwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOkJ1c2NhciB8IEVzcGFjaW86RWRpdGFyIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTnVldmEgcmFcdTAwRUR6XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1vZG8gTWFya2Rvd25cIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJQYW5lbCBkZSBlc3RpbG9cIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJFbmZvY2FyIG5vZG9cIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiQnVzY2FyIG5vZG9zXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiQWp1c3Rlc1wiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJBY2VyY2FyXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJBbGVqYXJcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgUGVyc29uYWxpemFkb1wiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgQm9ycmFyIGVuIGxvdGVcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFZGl0YXIgZXN0aWxvXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE51ZXZhIHJhXHUwMEVEelwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBEZXNoYWNlclwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBSZWhhY2VyXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG8gZ2xvYmFsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIEVkaXRhclwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIENvcGlhclwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIENvcnRhclwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgUGVnYXJcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IEhpam9cIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBIaWpvIGl6cXVpZXJkb1wiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBIZXJtYW5vXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgRWxpbWluYXJcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiT2N1bHRhciBiYXJyYVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG8gZ2xvYmFsXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiTm9kbyBoaWpvXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJOb2RvIHJhXHUwMEVEelwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkZvbmRvXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJDb2xvciBkZSB0ZXh0b1wiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlRhbWFcdTAwRjFvXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJGdWVudGVcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJFc3RpbG8gYm9yZGVcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJDb2xvciBib3JkZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkFuY2hvIGJvcmRlXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlJhZGlvIGJvcmRlXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiQW5jaG8gbVx1MDBFRG4uXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIkFsdG8gbVx1MDBFRG4uXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJDb25leGlcdTAwRjNuXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUaXBvXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiQ29sb3JcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJBbmNob1wiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTG9uZ2l0dWRcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBBcmNvXHUwMEVEcmlzXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJEaXJlY2NpXHUwMEYzblwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIkRlcmVjaGFcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIkl6cXVpZXJkYVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiQW1ib3NcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldGFcIixcclxuICAgIFwic20uc2VsXCI6IFwiU2VsZWNjaVx1MDBGM25cIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJDb2xvciBzZWxlY2NpXHUwMEYzblwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIkFuY2hvIHNlbGVjY2lcdTAwRjNuXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIkRlc3BsYXphbWllbnRvIGNvbnRvcm5vXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiQ29sb3IgY29udG9ybm8gZWRpY2lcdTAwRjNuXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJBbmNobyBjb250b3JubyBlZGljaVx1MDBGM25cIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiQWxpbmVhY2lcdTAwRjNuXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiUmVsbGVubyB0ZXh0b1wiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIkFsdHVyYSBsXHUwMEVEbmVhXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiRm9uZG8gbGllbnpvXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiUmVzdGFibGVjZXJcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJDZXJyYXJcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJNb3N0cmFyIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiUmVsbGVubyBiYXJyYVwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJBcnJpYmFcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiRGVyZWNoYVwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJBYmFqb1wiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJJenF1aWVyZGFcIixcclxuICAgIFwic20udGJQb3NcIjogXCJQb3NpY2lcdTAwRjNuIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiQXJyaWJhXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiQWJham9cIixcclxuICAgIFwic20udGJCZ1wiOiBcIkZvbmRvIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJGb25kbyBib3RcdTAwRjNuXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiRXN0aWxvIGJvcmRlIGJvdFx1MDBGM25cIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIkNvbG9yIGJvcmRlIGJvdFx1MDBGM25cIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiQ29sb3IgdGV4dG8gYm90XHUwMEYzblwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlJlc3RhYmxlY2VyIGJhcnJhXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsbyBub2RvXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkNvbG9yIGxcdTAwRURuZWFcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiQW5jaG8gbFx1MDBFRG5lYVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkJvcnJhciBwZXJzb25hbGl6YWNpXHUwMEYzblwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJSYWRpbyBib3JkZVwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJCdXNjYXIgbm9kb3MuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJSYVx1MDBFRHpcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOdWV2YSByYVx1MDBFRHpcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiSGlqb1wiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJBanVzdGVzIE1pbmRaSlwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIklkaW9tYVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJJZGlvbWEgaW50ZXJmYXpcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiVGVtYSBkZSBjb2xvclwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJDbGFyb1wiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIk9zY3Vyb1wiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIk1vc3RyYXIgYmFycmFcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiTW9zdHJhciBiYXJyYVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJGb25kbyBsaWVuem9cIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkNvbG9yIGRlIGZvbmRvXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIkFjZXJjYSBkZVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpXHUwMEYzblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0b3JcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkFwbGljYWNpXHUwMEYzbiBkZSBtYXBhIG1lbnRhbCBkZSBjXHUwMEYzZGlnbyBhYmllcnRvIHBhcmEgT2JzaWRpYW4gY29uIGVzdGlsb3MgcGVyc29uYWxpemFkb3MsIGNvbmV4aW9uZXMgYXJjb1x1MDBFRHJpcywgbXVsdGktc2VsZWNjaVx1MDBGM24sIGFycmFzdHJhciB5IHNvbHRhciBlIGltcG9ydGFjaVx1MDBGM24vZXhwb3J0YWNpXHUwMEYzbiBNYXJrZG93bi5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJBY3R1YWxpemFkb1wiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiUmVwb3NpdG9yaW8gR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJBcG95YXIgYWwgYXV0b3Igb3BlbiBzb3VyY2VcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJBdGFqb3MgZGUgdGVjbGFkb1wiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJQZXJzb25hbGl6YXIgYXRham9zXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIkVkaXRhciBub2RvXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkFcdTAwRjFhZGlyIGhlcm1hbm9cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkFcdTAwRjFhZGlyIGhpam9cIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkVuZm9jYXIgbm9kb1wiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJEZXNoYWNlclwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJSZWhhY2VyXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiU2FsdG8gZGUgbFx1MDBFRG5lYSAoZW4gZWRpY2lcdTAwRjNuKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJBcnJhc3RyYXIgbGllbnpvXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiQWNlcmNhclwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJBbGVqYXJcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJSZXN0YWJsZWNlciB6b29tXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJBcnJpYmFcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiQWJham9cIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiSXpxdWllcmRhXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJEZXJlY2hhXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJQdWxzZS4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiRGVzcGxhemFtaWVudG8geSB6b29tXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiSW52ZXJ0aXIgZGVzcGxhemFtaWVudG8gVlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVydGlyIGRlc3BsYXphbWllbnRvIEhcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnRpciB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJFZGl0YXIgYWwgY3JlYXJcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJNb2RvIGVkaWNpXHUwMEYzbiBhbCBjcmVhciBub2Rvc1wiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJOb21icmUgcmFcdTAwRUR6XCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJOb21icmUgcG9yIGRlZmVjdG8gZGUgcmFcdTAwRURjZXNcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIk5vbWJyZSBoaWpvXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiTm9tYnJlIHBvciBkZWZlY3RvIGRlIGhpam9zXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiVGVjbGVhciBwYXJhIGVkaXRhclwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJFZGl0YXIgYWwgdGVjbGVhciBjb24gbm9kbyBzZWxlY2Npb25hZG9cIixcclxufTtcclxuXHJcbmNvbnN0IF9ydTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTA0MUFcdTA0M0VcdTA0NDBcdTA0MzVcdTA0M0RcdTA0NENcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTA0MUVcdTA0NDJcdTA0M0NcdTA0MzVcdTA0M0RcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTA0MUZcdTA0M0VcdTA0MzJcdTA0NDJcdTA0M0VcdTA0NDBcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIFx1MDQxQVx1MDQzMFx1MDQ0MFx1MDQ0Mlx1MDQzMFwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA0MjFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NENcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJcdTA0MjRcdTA0M0VcdTA0M0FcdTA0NDNcdTA0NDFcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiXHUwNDFGXHUwNDNFXHUwNDM4XHUwNDQxXHUwNDNBXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6XHUwNDFGXHUwNDNFXHUwNDM4XHUwNDQxXHUwNDNBIHwgXHUwNDFGXHUwNDQwXHUwNDNFXHUwNDMxXHUwNDM1XHUwNDNCOlx1MDQyMFx1MDQzNVx1MDQzNC4gfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJcdTA0MURcdTA0M0VcdTA0MzJcdTA0NEJcdTA0MzkgXHUwNDNBXHUwNDNFXHUwNDQwXHUwNDM1XHUwNDNEXHUwNDRDXCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIlx1MDQyMFx1MDQzNVx1MDQzNlx1MDQzOFx1MDQzQyBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlx1MDQxRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQ0QyBcdTA0NDFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0MzVcdTA0MzlcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJcdTA0MjRcdTA0M0VcdTA0M0FcdTA0NDNcdTA0NDEgXHUwNDNEXHUwNDMwIFx1MDQ0M1x1MDQzN1x1MDQzQlx1MDQzNVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJcdTA0MUZcdTA0M0VcdTA0MzhcdTA0NDFcdTA0M0EgXHUwNDQzXHUwNDM3XHUwNDNCXHUwNDNFXHUwNDMyXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHUwNDFEXHUwNDMwXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDM5XHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1MDQyM1x1MDQzMlx1MDQzNVx1MDQzQlx1MDQzOFx1MDQ0N1x1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHUwNDIzXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDRDXHUwNDQ4XHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1MDQyMVx1MDQzMlx1MDQzRVx1MDQzOVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHUwNDIzXHUwNDM0XHUwNDMwXHUwNDNCXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzMlx1MDQ0MVx1MDQ1MVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDQyMVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBcdTA0MURcdTA0M0VcdTA0MzJcdTA0NEJcdTA0MzkgXHUwNDNBXHUwNDNFXHUwNDQwXHUwNDM1XHUwNDNEXHUwNDRDXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1MDQxRVx1MDQ0Mlx1MDQzQ1x1MDQzNVx1MDQzRFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBcdTA0MUZcdTA0M0VcdTA0MzJcdTA0NDJcdTA0M0VcdTA0NDBcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDQxM1x1MDQzQlx1MDQzRVx1MDQzMVx1MDQzMFx1MDQzQlx1MDQ0Q1x1MDQzRFx1MDQ0Qlx1MDQzOSBcdTA0NDFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NENcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHUwNDIwXHUwNDM1XHUwNDM0XHUwNDMwXHUwNDNBXHUwNDQyXHUwNDM4XHUwNDQwXHUwNDNFXHUwNDMyXHUwNDMwXHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA0MjFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NENcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgXHUwNDFBXHUwNDNFXHUwNDNGXHUwNDM4XHUwNDQwXHUwNDNFXHUwNDMyXHUwNDMwXHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgXHUwNDEyXHUwNDRCXHUwNDQwXHUwNDM1XHUwNDM3XHUwNDMwXHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBcdTA0MTJcdTA0NDFcdTA0NDJcdTA0MzBcdTA0MzJcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IFx1MDQxNFx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0MFx1MDQzRFx1MDQzOFx1MDQzOVwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFx1MDQxQlx1MDQzNVx1MDQzMlx1MDQ0Qlx1MDQzOSBcdTA0MzRcdTA0M0VcdTA0NDdcdTA0MzVcdTA0NDBcdTA0M0RcdTA0MzhcdTA0MzlcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgXHUwNDIxXHUwNDNFXHUwNDQxXHUwNDM1XHUwNDM0XHUwNDNEXHUwNDM4XHUwNDM5XCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHUwNDIzXHUwNDM0XHUwNDMwXHUwNDNCXHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlx1MDQyMVx1MDQzQVx1MDQ0MFx1MDQ0Qlx1MDQ0Mlx1MDQ0QyBcdTA0M0ZcdTA0MzBcdTA0M0RcdTA0MzVcdTA0M0JcdTA0NENcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNDEzXHUwNDNCXHUwNDNFXHUwNDMxXHUwNDMwXHUwNDNCXHUwNDRDXHUwNDNEXHUwNDRCXHUwNDM5IFx1MDQ0MVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIlx1MDQxNFx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0MFx1MDQzRFx1MDQzOFx1MDQzOSBcdTA0NDNcdTA0MzdcdTA0MzVcdTA0M0JcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlx1MDQxQVx1MDQzRVx1MDQ0MFx1MDQzRFx1MDQzNVx1MDQzMlx1MDQzRVx1MDQzOSBcdTA0NDNcdTA0MzdcdTA0MzVcdTA0M0JcIixcclxuICAgIFwic20uYmdcIjogXCJcdTA0MjRcdTA0M0VcdTA0M0RcIixcclxuICAgIFwic20udGV4dFwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0NDJcdTA0MzVcdTA0M0FcdTA0NDFcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJcdTA0MjBcdTA0MzBcdTA0MzdcdTA0M0NcdTA0MzVcdTA0NDAgXHUwNDQ4XHUwNDQwXHUwNDM4XHUwNDQ0XHUwNDQyXHUwNDMwXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJcdTA0MjhcdTA0NDBcdTA0MzhcdTA0NDRcdTA0NDJcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJcdTA0MjFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NEMgXHUwNDQwXHUwNDMwXHUwNDNDXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlx1MDQyOFx1MDQzOFx1MDQ0MFx1MDQzOFx1MDQzRFx1MDQzMCBcdTA0NDBcdTA0MzBcdTA0M0NcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiXHUwNDIwXHUwNDMwXHUwNDM0XHUwNDM4XHUwNDQzXHUwNDQxXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHUwNDFDXHUwNDM4XHUwNDNELiBcdTA0NDhcdTA0MzhcdTA0NDBcdTA0MzhcdTA0M0RcdTA0MzBcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiXHUwNDFDXHUwNDM4XHUwNDNELiBcdTA0MzJcdTA0NEJcdTA0NDFcdTA0M0VcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic20uY29ublwiOiBcIlx1MDQyMVx1MDQzRVx1MDQzNVx1MDQzNFx1MDQzOFx1MDQzRFx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNVwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiXHUwNDIyXHUwNDM4XHUwNDNGXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiXHUwNDI4XHUwNDM4XHUwNDQwXHUwNDM4XHUwNDNEXHUwNDMwXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJcdTA0MTRcdTA0M0JcdTA0MzhcdTA0M0RcdTA0MzBcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBcdTA0MjBcdTA0MzBcdTA0MzRcdTA0NDNcdTA0MzNcdTA0MzBcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlx1MDQxRFx1MDQzMFx1MDQzRlx1MDQ0MFx1MDQzMFx1MDQzMlx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNVwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlx1MDQxMlx1MDQzRlx1MDQ0MFx1MDQzMFx1MDQzMlx1MDQzRVwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiXHUwNDEyXHUwNDNCXHUwNDM1XHUwNDMyXHUwNDNFXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJcdTA0MUVcdTA0MzFcdTA0MzBcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJcdTA0MUZcdTA0MzBcdTA0M0JcdTA0MzhcdTA0NDJcdTA0NDBcdTA0MzBcIixcclxuICAgIFwic20uc2VsXCI6IFwiXHUwNDEyXHUwNDRCXHUwNDM0XHUwNDM1XHUwNDNCXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM1XCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQzMlx1MDQ0Qlx1MDQzNFx1MDQzNVx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzOFx1MDQ0RlwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlx1MDQyOFx1MDQzOFx1MDQ0MFx1MDQzOFx1MDQzRFx1MDQzMCBcdTA0MzJcdTA0NEJcdTA0MzRcdTA0MzVcdTA0M0JcdTA0MzVcdTA0M0RcdTA0MzhcdTA0NEZcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiXHUwNDIxXHUwNDNDXHUwNDM1XHUwNDQ5XHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM1IFx1MDQzQVx1MDQzRVx1MDQzRFx1MDQ0Mlx1MDQ0M1x1MDQ0MFx1MDQzMFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0M0FcdTA0M0VcdTA0M0RcdTA0NDJcdTA0NDNcdTA0NDBcdTA0MzAgXHUwNDQwXHUwNDM1XHUwNDM0LlwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiXHUwNDI4XHUwNDM4XHUwNDQwXHUwNDM4XHUwNDNEXHUwNDMwIFx1MDQzQVx1MDQzRVx1MDQzRFx1MDQ0Mlx1MDQ0M1x1MDQ0MFx1MDQzMCBcdTA0NDBcdTA0MzVcdTA0MzQuXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1MDQxMlx1MDQ0Qlx1MDQ0MFx1MDQzMFx1MDQzMlx1MDQzRFx1MDQzOFx1MDQzMlx1MDQzMFx1MDQzRFx1MDQzOFx1MDQzNVwiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1MDQxRVx1MDQ0Mlx1MDQ0MVx1MDQ0Mlx1MDQ0M1x1MDQzRiBcdTA0NDJcdTA0MzVcdTA0M0FcdTA0NDFcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJcdTA0MTJcdTA0NEJcdTA0NDFcdTA0M0VcdTA0NDJcdTA0MzAgXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHUwNDI0XHUwNDNFXHUwNDNEIFx1MDQ0NVx1MDQzRVx1MDQzQlx1MDQ0MVx1MDQ0Mlx1MDQzMFwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1MDQyMVx1MDQzMVx1MDQ0MFx1MDQzRVx1MDQ0MVx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlx1MDQxN1x1MDQzMFx1MDQzQVx1MDQ0MFx1MDQ0Qlx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlx1MDQxRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQ0QyBcdTA0MzhcdTA0M0RcdTA0NDFcdTA0NDJcdTA0NDBcdTA0NDNcdTA0M0NcdTA0MzVcdTA0M0RcdTA0NDJcdTA0M0VcdTA0MzJcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdTA0MUVcdTA0NDJcdTA0NDFcdTA0NDJcdTA0NDNcdTA0M0YgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDM4XCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1MDQyMVx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0NVx1MDQ0M1wiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTA0MjFcdTA0M0ZcdTA0NDBcdTA0MzBcdTA0MzJcdTA0MzBcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHUwNDIxXHUwNDNEXHUwNDM4XHUwNDM3XHUwNDQzXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1MDQyMVx1MDQzQlx1MDQzNVx1MDQzMlx1MDQzMFwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MDQxRlx1MDQzRVx1MDQzN1x1MDQzOFx1MDQ0Nlx1MDQzOFx1MDQ0RiBcdTA0M0ZcdTA0MzBcdTA0M0RcdTA0MzVcdTA0M0JcdTA0MzhcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTA0MjFcdTA0MzJcdTA0MzVcdTA0NDBcdTA0NDVcdTA0NDNcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTA0MjFcdTA0M0RcdTA0MzhcdTA0MzdcdTA0NDNcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzRCBcdTA0M0ZcdTA0MzBcdTA0M0RcdTA0MzVcdTA0M0JcdTA0MzhcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzRCBcdTA0M0FcdTA0M0RcdTA0M0VcdTA0M0ZcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTA0MjFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NEMgXHUwNDQwXHUwNDMwXHUwNDNDXHUwNDNBXHUwNDM4IFx1MDQzQVx1MDQzRFx1MDQzRVx1MDQzRlx1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzQVx1MDQzOCBcdTA0M0FcdTA0M0RcdTA0M0VcdTA0M0ZcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQ0Mlx1MDQzNVx1MDQzQVx1MDQ0MVx1MDQ0Mlx1MDQzMCBcdTA0M0FcdTA0M0RcdTA0M0VcdTA0M0ZcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTA0MjFcdTA0MzFcdTA0NDBcdTA0M0VcdTA0NDFcdTA0MzhcdTA0NDJcdTA0NEMgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDQyMVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0QyBcdTA0NDNcdTA0MzdcdTA0M0JcdTA0MzBcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQzQlx1MDQzOFx1MDQzRFx1MDQzOFx1MDQzOFwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdTA0MjhcdTA0MzhcdTA0NDBcdTA0MzhcdTA0M0RcdTA0MzAgXHUwNDNCXHUwNDM4XHUwNDNEXHUwNDM4XHUwNDM4XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHUwNDIxXHUwNDMxXHUwNDQwXHUwNDNFXHUwNDQxXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzRFx1MDQzMFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzRVx1MDQzOVx1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJcdTA0MjBcdTA0MzBcdTA0MzRcdTA0MzhcdTA0NDNcdTA0NDFcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiXHUwNDFGXHUwNDNFXHUwNDM4XHUwNDQxXHUwNDNBIFx1MDQ0M1x1MDQzN1x1MDQzQlx1MDQzRVx1MDQzMi4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MDQxQVx1MDQzRVx1MDQ0MFx1MDQzNVx1MDQzRFx1MDQ0Q1wiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1MDQxRFx1MDQzRVx1MDQzMlx1MDQ0Qlx1MDQzOSBcdTA0M0FcdTA0M0VcdTA0NDBcdTA0MzVcdTA0M0RcdTA0NENcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHUwNDE0XHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQwXHUwNDNEXHUwNDM4XHUwNDM5XCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIlx1MDQxRFx1MDQzMFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzRVx1MDQzOVx1MDQzQVx1MDQzOCBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdTA0MkZcdTA0MzdcdTA0NEJcdTA0M0FcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHUwNDJGXHUwNDM3XHUwNDRCXHUwNDNBIFx1MDQzOFx1MDQzRFx1MDQ0Mlx1MDQzNVx1MDQ0MFx1MDQ0NFx1MDQzNVx1MDQzOVx1MDQ0MVx1MDQzMFwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdTA0MjJcdTA0MzVcdTA0M0NcdTA0MzBcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0Mlx1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0RiBcdTA0NDJcdTA0MzVcdTA0M0NcdTA0MzBcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiXHUwNDIxXHUwNDMyXHUwNDM1XHUwNDQyXHUwNDNCXHUwNDMwXHUwNDRGXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiXHUwNDIyXHUwNDUxXHUwNDNDXHUwNDNEXHUwNDMwXHUwNDRGXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiXHUwNDFGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDRDIFx1MDQzOFx1MDQzRFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQ0M1x1MDQzQ1x1MDQzNVx1MDQzRFx1MDQ0Mlx1MDQzRVx1MDQzMlwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJcdTA0MUZcdTA0M0VcdTA0M0FcdTA0MzBcdTA0MzdcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzRCBcdTA0NDVcdTA0M0VcdTA0M0JcdTA0NDFcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0NDRcdTA0M0VcdTA0M0RcdTA0MzBcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiXHUwNDFFIFx1MDQzRlx1MDQ0MFx1MDQzRVx1MDQzM1x1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzQ1x1MDQzNVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1MDQxMlx1MDQzNVx1MDQ0MFx1MDQ0MVx1MDQzOFx1MDQ0RlwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHUwNDEwXHUwNDMyXHUwNDQyXHUwNDNFXHUwNDQwXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJcdTA0MUZcdTA0NDBcdTA0MzhcdTA0M0JcdTA0M0VcdTA0MzZcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzUgXHUwNDM0XHUwNDNCXHUwNDRGIFx1MDQzOFx1MDQzRFx1MDQ0Mlx1MDQzNVx1MDQzQlx1MDQzQlx1MDQzNVx1MDQzQVx1MDQ0Mi1cdTA0M0FcdTA0MzBcdTA0NDBcdTA0NDIgXHUwNDQxIFx1MDQzRVx1MDQ0Mlx1MDQzQVx1MDQ0MFx1MDQ0Qlx1MDQ0Mlx1MDQ0Qlx1MDQzQyBcdTA0M0FcdTA0M0VcdTA0MzRcdTA0M0VcdTA0M0MgXHUwNDM0XHUwNDNCXHUwNDRGIE9ic2lkaWFuOiBcdTA0NDFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0MzgsIFx1MDQ0MFx1MDQzMFx1MDQzNFx1MDQ0M1x1MDQzNlx1MDQzRFx1MDQ0Qlx1MDQzNSBcdTA0NDFcdTA0M0VcdTA0MzVcdTA0MzRcdTA0MzhcdTA0M0RcdTA0MzVcdTA0M0RcdTA0MzhcdTA0NEYsIFx1MDQzQ1x1MDQzRFx1MDQzRVx1MDQzNlx1MDQzNVx1MDQ0MVx1MDQ0Mlx1MDQzMlx1MDQzNVx1MDQzRFx1MDQzRFx1MDQ0Qlx1MDQzOSBcdTA0MzJcdTA0NEJcdTA0MzFcdTA0M0VcdTA0NDAsIFx1MDQzRlx1MDQzNVx1MDQ0MFx1MDQzNVx1MDQ0Mlx1MDQzMFx1MDQ0MVx1MDQzQVx1MDQzOFx1MDQzMlx1MDQzMFx1MDQzRFx1MDQzOFx1MDQzNSBcdTA0MzggTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHUwNDFFXHUwNDMxXHUwNDNEXHUwNDNFXHUwNDMyXHUwNDNCXHUwNDM1XHUwNDNEXHUwNDNFXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJcdTA0MjBcdTA0MzVcdTA0M0ZcdTA0M0VcdTA0MzdcdTA0MzhcdTA0NDJcdTA0M0VcdTA0NDBcdTA0MzhcdTA0MzkgR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdTA0MUZcdTA0M0VcdTA0MzRcdTA0MzRcdTA0MzVcdTA0NDBcdTA0MzZcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDMwXHUwNDMyXHUwNDQyXHUwNDNFXHUwNDQwXHUwNDMwXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiXHUwNDIxXHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQyXHUwNDMwXHUwNDNEXHUwNDM4XHUwNDRGIFx1MDQzQVx1MDQzQlx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0OFwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJcdTA0MURcdTA0MzBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzhcdTA0NDJcdTA0NEMgXHUwNDNBXHUwNDNCXHUwNDMwXHUwNDMyXHUwNDM4XHUwNDQ4XHUwNDM4XCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1MDQyMFx1MDQzNVx1MDQzNFx1MDQzMFx1MDQzQVx1MDQ0Mlx1MDQzOFx1MDQ0MFx1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0Mlx1MDQ0QyBcdTA0NDNcdTA0MzdcdTA0MzVcdTA0M0JcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHUwNDE0XHUwNDNFXHUwNDMxXHUwNDMwXHUwNDMyXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQ0MVx1MDQzRVx1MDQ0MVx1MDQzNVx1MDQzNFx1MDQzRFx1MDQzOFx1MDQzOVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHUwNDE0XHUwNDNFXHUwNDMxXHUwNDMwXHUwNDMyXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzNFx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0MFx1MDQzRFx1MDQzOFx1MDQzOVwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiXHUwNDI0XHUwNDNFXHUwNDNBXHUwNDQzXHUwNDQxIFx1MDQzRFx1MDQzMCBcdTA0NDNcdTA0MzdcdTA0M0JcdTA0MzVcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHUwNDFFXHUwNDQyXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1MDQxRlx1MDQzRVx1MDQzMlx1MDQ0Mlx1MDQzRVx1MDQ0MFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1MDQxRlx1MDQzNVx1MDQ0MFx1MDQzNVx1MDQzRFx1MDQzRVx1MDQ0MSBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0M0FcdTA0MzggKFx1MDQ0MFx1MDQzNVx1MDQzNC4pXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlx1MDQxRlx1MDQzNVx1MDQ0MFx1MDQzNVx1MDQzQ1x1MDQzNVx1MDQ0OVx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNSBcdTA0NDVcdTA0M0VcdTA0M0JcdTA0NDFcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTA0MjNcdTA0MzJcdTA0MzVcdTA0M0JcdTA0MzhcdTA0NDdcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHUwNDIzXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDRDXHUwNDQ4XHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUwNDIxXHUwNDMxXHUwNDQwXHUwNDNFXHUwNDQxXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzQ1x1MDQzMFx1MDQ0MVx1MDQ0OFx1MDQ0Mlx1MDQzMFx1MDQzMVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHUwNDEyXHUwNDMyXHUwNDM1XHUwNDQwXHUwNDQ1XCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIlx1MDQxMlx1MDQzRFx1MDQzOFx1MDQzN1wiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJcdTA0MTJcdTA0M0JcdTA0MzVcdTA0MzJcdTA0M0VcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1MDQxMlx1MDQzRlx1MDQ0MFx1MDQzMFx1MDQzMlx1MDQzRVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiXHUwNDFEXHUwNDMwXHUwNDM2XHUwNDNDXHUwNDM4XHUwNDQyXHUwNDM1IFx1MDQzQVx1MDQzQlx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0OFx1MDQ0My4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiXHUwNDFGXHUwNDQwXHUwNDNFXHUwNDNBXHUwNDQwXHUwNDQzXHUwNDQyXHUwNDNBXHUwNDMwIFx1MDQzOCBcdTA0M0NcdTA0MzBcdTA0NDFcdTA0NDhcdTA0NDJcdTA0MzBcdTA0MzFcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdTA0MThcdTA0M0RcdTA0MzJcdTA0MzVcdTA0NDBcdTA0NDIuIFx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0Mi4gXHUwNDNGXHUwNDQwXHUwNDNFXHUwNDNBXHUwNDQwXHUwNDQzXHUwNDQyXHUwNDNBXHUwNDQzXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiXHUwNDE4XHUwNDNEXHUwNDMyXHUwNDM1XHUwNDQwXHUwNDQyLiBcdTA0MzNcdTA0M0VcdTA0NDBcdTA0MzhcdTA0MzcuIFx1MDQzRlx1MDQ0MFx1MDQzRVx1MDQzQVx1MDQ0MFx1MDQ0M1x1MDQ0Mlx1MDQzQVx1MDQ0M1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MDQxOFx1MDQzRFx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0Mi4gXHUwNDNDXHUwNDMwXHUwNDQxXHUwNDQ4XHUwNDQyXHUwNDMwXHUwNDMxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTA0MjBcdTA0MzVcdTA0MzQuIFx1MDQzRlx1MDQ0MFx1MDQzOCBcdTA0NDFcdTA0M0VcdTA0MzdcdTA0MzRcdTA0MzBcdTA0M0RcdTA0MzhcdTA0MzhcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJcdTA0MjBcdTA0MzVcdTA0MzZcdTA0MzhcdTA0M0MgXHUwNDQwXHUwNDM1XHUwNDM0LiBcdTA0M0ZcdTA0NDBcdTA0MzggXHUwNDQxXHUwNDNFXHUwNDM3XHUwNDM0XHUwNDMwXHUwNDNEXHUwNDM4XHUwNDM4XCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlx1MDQxOFx1MDQzQ1x1MDQ0RiBcdTA0M0FcdTA0M0VcdTA0NDBcdTA0M0RcdTA0NEZcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlx1MDQxOFx1MDQzQ1x1MDQ0RiBcdTA0M0ZcdTA0M0UgXHUwNDQzXHUwNDNDXHUwNDNFXHUwNDNCXHUwNDQ3XHUwNDMwXHUwNDNEXHUwNDM4XHUwNDRFIFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0M0FcdTA0M0VcdTA0NDBcdTA0M0RcdTA0MzVcdTA0MzlcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIlx1MDQxOFx1MDQzQ1x1MDQ0RiBcdTA0MzRcdTA0M0VcdTA0NDdcdTA0MzVcdTA0NDBcdTA0M0RcdTA0MzVcdTA0MzNcdTA0M0VcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJcdTA0MThcdTA0M0NcdTA0NEYgXHUwNDNGXHUwNDNFIFx1MDQ0M1x1MDQzQ1x1MDQzRVx1MDQzQlx1MDQ0N1x1MDQzMFx1MDQzRFx1MDQzOFx1MDQ0RSBcdTA0MzRcdTA0M0JcdTA0NEYgXHUwNDM0XHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQwXHUwNDNEXHUwNDM4XHUwNDQ1XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHUwNDFGXHUwNDM1XHUwNDQ3XHUwNDMwXHUwNDQyXHUwNDMwXHUwNDQyXHUwNDRDIFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0NDBcdTA0MzVcdTA0MzQuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlx1MDQyMFx1MDQzNVx1MDQzNFx1MDQzMFx1MDQzQVx1MDQ0Mlx1MDQzOFx1MDQ0MFx1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0Mlx1MDQ0QyBcdTA0M0ZcdTA0NDBcdTA0MzggXHUwNDNEXHUwNDMwXHUwNDM2XHUwNDMwXHUwNDQyXHUwNDM4XHUwNDM4IFx1MDQzQVx1MDQzQlx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0OFwiLFxyXG59O1xyXG5cclxuY29uc3QgX3N2OiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJvdFwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFx1MDBDNW5ncmFcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBHXHUwMEY2ciBvbVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgS2FydGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZva3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlNcdTAwRjZrXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6U1x1MDBGNmsgfCBNZWxsYW5zbGFnOlJlZGlnZXJhIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTnkgcm90XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duLWxcdTAwRTRnZVwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlN0aWxwYW5lbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZva3VzZXJhIG5vZFwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJTXHUwMEY2ayBub2RlclwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIkluc3RcdTAwRTRsbG5pbmdhclwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJab29tYSBpblwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiWm9vbWEgdXRcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgQW5wYXNzYWRcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFJhZGVyYSBhbGxhXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggUmVkaWdlcmEgc3RpbFwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOeSByb3RcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHUwMEM1bmdyYVwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBHXHUwMEY2ciBvbVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIHN0aWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgUmVkaWdlcmFcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgS29waWVyYVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIEtsaXBwIHV0XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBLbGlzdHJhIGluXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBCYXJuXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgVlx1MDBFNG5zdGVyIGJhcm5cIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgU3lza29uXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgUmFkZXJhXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIkRcdTAwRjZsaiB2ZXJrdHlnc2ZcdTAwRTRsdFwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWwgc3RpbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIkJhcm5ub2RcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlJvdG5vZFwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkJha2dydW5kXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZXh0Zlx1MDBFNHJnXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiVGVja2Vuc3Rvcmxla1wiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiVGVja2Vuc25pdHRcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJLYW50c3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkthbnRmXHUwMEU0cmdcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJLYW50YnJlZGRcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGllXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBicmVkZFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJNaW4uIGhcdTAwRjZqZFwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiS29wcGxpbmdcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cFwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkJyZWRkXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMXHUwMEU0bmdkXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmVnbmJcdTAwRTVnZVwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiTm9kcmlrdG5pbmdcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJIXHUwMEY2Z2VyXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJWXHUwMEU0bnN0ZXJcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJcdTAwRTVkYVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJNYXJrZXJpbmdcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJNYXJrZXJpbmdzZlx1MDBFNHJnXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiTWFya2VyaW5nc2JyZWRkXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIktvbnR1cm9mZnNldFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlJlZGlnZXJpbmdza29udHVyZlx1MDBFNHJnXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJSZWRpZ2VyaW5nc2tvbnR1cmJyZWRkXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRleHRqdXN0ZXJpbmdcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJUZXh0YXZzdFx1MDBFNW5kXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiUmFkaFx1MDBGNmpkXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiRHVrYmFrZ3J1bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJcdTAwQzV0ZXJzdFx1MDBFNGxsXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiU3RcdTAwRTRuZ1wiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlZpc2EgdmVya3R5Z3NmXHUwMEU0bHRcIixcclxuICAgIFwic20udGJQYWRcIjogXCJGXHUwMEU0bHRzYXZzdFx1MDBFNW5kXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIk92YW5cIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiSFx1MDBGNmdlclwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJOZWRhblwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJWXHUwMEU0bnN0ZXJcIixcclxuICAgIFwic20udGJQb3NcIjogXCJGXHUwMEU0bHRzcG9zaXRpb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJPdmFuXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiTmVkYW5cIixcclxuICAgIFwic20udGJCZ1wiOiBcIkZcdTAwRTRsdHNiYWtncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiS25hcHBiYWtncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIktuYXBwa2FudHN0aWxcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIktuYXBwa2FudGZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJLbmFwcHRleHRmXHUwMEU0cmdcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTAwQzV0ZXJzdFx1MDBFNGxsIGZcdTAwRTRsdFwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBOb2RzdGlsXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkxpbmplZlx1MDBFNHJnXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxpbmplYnJlZGRcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJSZW5zYVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJLYW50cmFkaWVcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiU1x1MDBGNmsgbm9kZXIuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJSb3RcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOeSByb3RcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiQmFyblwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogSW5zdFx1MDBFNGxsbmluZ2FyXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3ByXHUwMEU1a1wiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJHclx1MDBFNG5zc25pdHRzc3ByXHUwMEU1a1wiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJGXHUwMEU0cmd0ZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkxqdXN0XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiTVx1MDBGNnJrdFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlZpc2EgdmVya3R5Z3NmXHUwMEU0bHRcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiVmlzYSB2ZXJrdHlnc2ZcdTAwRTRsdFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJEdWtiYWtncnVuZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQmFrZ3J1bmRzZlx1MDBFNHJnXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIk9tXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiRlx1MDBGNnJmYXR0YXJlXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJGdW5rdGlvbnNyaWsgbWluZG1hcC1hcHAgbWVkIFx1MDBGNnBwZW4ga1x1MDBFNGxsa29kIGZcdTAwRjZyIE9ic2lkaWFuIG1lZCBhbnBhc3NhZGUgc3RpbGFyLCByZWduYlx1MDBFNWdza29wcGxpbmdhciwgZmxlcnZhbCwgZHJhLW9jaC1zbFx1MDBFNHBwIG9jaCBNYXJrZG93bi1pbXBvcnQvZXhwb3J0LlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlVwcGRhdGVyYWRcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1Yi1mXHUwMEY2cnJcdTAwRTVkXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJTdFx1MDBGNmQgZlx1MDBGNnJmYXR0YXJlblwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIktvcnRrb21tYW5kb25cIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiQW5wYXNzYSBrb3J0a29tbWFuZG9uXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlJlZGlnZXJhIG5vZFwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJMXHUwMEU0Z2cgdGlsbCBzeXNrb25cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkxcdTAwRTRnZyB0aWxsIGJhcm5cIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZva3VzZXJhIG5vZFwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTAwQzVuZ3JhXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIkdcdTAwRjZyIG9tXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiUmFkYnJ5dG5pbmcgKHJlZGlnZXJpbmcpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkRyYSBhcmJldHN5dGFcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJab29tYSBpblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJab29tYSB1dFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1MDBDNXRlcnN0XHUwMEU0bGwgem9vbVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiTmF2aWdlcmEgdXBwXHUwMEU1dFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOYXZpZ2VyYSBuZWRcdTAwRTV0XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hdmlnZXJhIHZcdTAwRTRuc3RlclwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWdlcmEgaFx1MDBGNmdlclwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiVHJ5Y2suLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjcm9sbCBvY2ggem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVydGVyYSBWLXNjcm9sbFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVydGVyYSBILXNjcm9sbFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGVyYSB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJSZWRpZ2VyYSB2aWQgc2thcGFuZGVcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJSZWRpZ2VyaW5nc2xcdTAwRTRnZSB2aWQgbnlhIG5vZGVyXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlJvdG5hbW5cIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmFtbiBmXHUwMEY2ciBueWEgclx1MDBGNnR0ZXJcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIkJhcm5uYW1uXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYW1uIGZcdTAwRjZyIG55YSBiYXJuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiU2tyaXYgZlx1MDBGNnIgYXR0IHJlZGlnZXJhXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlJlZGlnZXJhIGdlbm9tIGF0dCBza3JpdmFcIixcclxufTtcclxuXHJcbmNvbnN0IF9oaTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTA5MkVcdTA5NDJcdTA5MzJcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTA5MkFcdTA5NDJcdTA5MzBcdTA5NERcdTA5MzVcdTA5MzVcdTA5MjRcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTA5MkJcdTA5M0ZcdTA5MzAgXHUwOTM4XHUwOTQ3XCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBcdTA5MkVcdTA5NDhcdTA5MkFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiXHUwOTJCXHUwOTNDXHUwOTRCXHUwOTE1XHUwOTM4XCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlx1MDkxNlx1MDk0Qlx1MDkxQ1x1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlx1MDkxNlx1MDk0Qlx1MDkxQ1x1MDk0N1x1MDkwMiB8IFNwYWNlOlx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOCB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1MDkyOFx1MDkyRlx1MDkzRSBcdTA5MkVcdTA5NDJcdTA5MzJcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24gXHUwOTJFXHUwOTRCXHUwOTIxXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwIFx1MDkyQVx1MDk0OFx1MDkyOFx1MDkzMlwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MkFcdTA5MzAgXHUwOTJCXHUwOTNDXHUwOTRCXHUwOTE1XHUwOTM4XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MTZcdTA5NEJcdTA5MUNcdTA5NDdcdTA5MDJcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJcdTA5MzhcdTA5NDdcdTA5MUZcdTA5M0ZcdTA5MDJcdTA5MTdcdTA5NERcdTA5MzhcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkwN1x1MDkyOFwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkwNlx1MDkwOVx1MDkxRlwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBcdTA5MTVcdTA5MzhcdTA5NERcdTA5MUZcdTA5MkVcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDkzOFx1MDkyRFx1MDk0MCBcdTA5MzlcdTA5MUZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MzZcdTA5NDhcdTA5MzJcdTA5NDAgXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTNGXHUwOTI0IFx1MDkxNVx1MDkzMFx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBcdTA5MjhcdTA5MkZcdTA5M0UgXHUwOTJFXHUwOTQyXHUwOTMyXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1MDkyQVx1MDk0Mlx1MDkzMFx1MDk0RFx1MDkzNVx1MDkzNVx1MDkyNFwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBcdTA5MkJcdTA5M0ZcdTA5MzAgXHUwOTM4XHUwOTQ3XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MzVcdTA5NDhcdTA5MzZcdTA5NERcdTA5MzVcdTA5M0ZcdTA5MTUgXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkzRlx1MDkyNCBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDkzNlx1MDk0OFx1MDkzMlx1MDk0MFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBcdTA5MTVcdTA5NDlcdTA5MkFcdTA5NDBcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBcdTA5MTVcdTA5MUZcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFx1MDkyQVx1MDk0N1x1MDkzOFx1MDk0RFx1MDkxRlwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgXHUwOTJDXHUwOTNFXHUwOTJGXHUwOTNFXHUwOTAyIFx1MDkxQVx1MDkzRVx1MDkwN1x1MDkzMlx1MDk0RFx1MDkyMVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdTA5MzhcdTA5M0ZcdTA5MkNcdTA5MzJcdTA5M0ZcdTA5MDJcdTA5MTdcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTA5MzlcdTA5MUZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkxQlx1MDk0MVx1MDkyQVx1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MzVcdTA5NDhcdTA5MzZcdTA5NERcdTA5MzVcdTA5M0ZcdTA5MTUgXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxIFx1MDkyOFx1MDk0Qlx1MDkyMVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHUwOTJFXHUwOTQyXHUwOTMyIFx1MDkyOFx1MDk0Qlx1MDkyMVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1MDkyQVx1MDk0M1x1MDkzN1x1MDk0RFx1MDkyMFx1MDkyRFx1MDk0Mlx1MDkyRVx1MDkzRlwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHUwOTFGXHUwOTQ3XHUwOTE1XHUwOTREXHUwOTM4XHUwOTREXHUwOTFGIFx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1MDkyQlx1MDkzQ1x1MDk0OVx1MDkyOFx1MDk0RFx1MDkxRiBcdTA5MDZcdTA5MTVcdTA5M0VcdTA5MzBcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1MDkyQlx1MDkzQ1x1MDk0OVx1MDkyOFx1MDk0RFx1MDkxRlwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1MDkyQ1x1MDk0OVx1MDkzMFx1MDk0RFx1MDkyMVx1MDkzMCBcdTA5MzZcdTA5NDhcdTA5MzJcdTA5NDBcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdTA5MkNcdTA5NDlcdTA5MzBcdTA5NERcdTA5MjFcdTA5MzAgXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHUwOTJDXHUwOTQ5XHUwOTMwXHUwOTREXHUwOTIxXHUwOTMwIFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTA5MkNcdTA5NDlcdTA5MzBcdTA5NERcdTA5MjFcdTA5MzAgXHUwOTI0XHUwOTREXHUwOTMwXHUwOTNGXHUwOTFDXHUwOTREXHUwOTJGXHUwOTNFXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHUwOTI4XHUwOTREXHUwOTJGXHUwOTQyXHUwOTI4XHUwOTI0XHUwOTJFIFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJcdTA5MjhcdTA5NERcdTA5MkZcdTA5NDJcdTA5MjhcdTA5MjRcdTA5MkUgXHUwOTBBXHUwOTAyXHUwOTFBXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJcdTA5MTVcdTA5MjhcdTA5NDdcdTA5MTVcdTA5NERcdTA5MzZcdTA5MjhcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1MDkyQVx1MDk0RFx1MDkzMFx1MDkxNVx1MDkzRVx1MDkzMFwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHUwOTMyXHUwOTAyXHUwOTJDXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggXHUwOTA3XHUwOTAyXHUwOTI2XHUwOTREXHUwOTMwXHUwOTI3XHUwOTI4XHUwOTQxXHUwOTM3XCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdTA5MjZcdTA5M0ZcdTA5MzZcdTA5M0VcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdTA5MjZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1MDkyQ1x1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHUwOTI2XHUwOTRCXHUwOTI4XHUwOTRCXHUwOTAyXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHUwOTJBXHUwOTQ4XHUwOTMyXHUwOTQ3XHUwOTFGXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlx1MDkxQVx1MDkyRlx1MDkyOFwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlx1MDkxQVx1MDkyRlx1MDkyOCBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJcdTA5MUFcdTA5MkZcdTA5MjggXHUwOTFBXHUwOTRDXHUwOTIxXHUwOTNDXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1MDkwNlx1MDkwOVx1MDkxRlx1MDkzMlx1MDkzRVx1MDkwN1x1MDkyOCBcdTA5MTFcdTA5MkJcdTA5MzhcdTA5NDdcdTA5MUZcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5MjggXHUwOTA2XHUwOTA5XHUwOTFGXHUwOTMyXHUwOTNFXHUwOTA3XHUwOTI4IFx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTI4IFx1MDkwNlx1MDkwOVx1MDkxRlx1MDkzMlx1MDkzRVx1MDkwN1x1MDkyOCBcdTA5MUFcdTA5NENcdTA5MjFcdTA5M0NcdTA5M0VcdTA5MDhcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiXHUwOTFGXHUwOTQ3XHUwOTE1XHUwOTREXHUwOTM4XHUwOTREXHUwOTFGIFx1MDkzOFx1MDkwMlx1MDkzMFx1MDk0N1x1MDkxNlx1MDkyM1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1MDkxRlx1MDk0N1x1MDkxNVx1MDk0RFx1MDkzOFx1MDk0RFx1MDkxRiBcdTA5MkFcdTA5NDhcdTA5MjFcdTA5M0ZcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJcdTA5MkFcdTA5MDJcdTA5MTVcdTA5NERcdTA5MjRcdTA5M0YgXHUwOTBBXHUwOTAyXHUwOTFBXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHUwOTE1XHUwOTQ4XHUwOTI4XHUwOTM1XHUwOTNFXHUwOTM4IFx1MDkyQVx1MDk0M1x1MDkzN1x1MDk0RFx1MDkyMFx1MDkyRFx1MDk0Mlx1MDkyRVx1MDkzRlwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1MDkzMFx1MDk0MFx1MDkzOFx1MDk0N1x1MDkxRlwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlx1MDkyQ1x1MDkwMlx1MDkyNlwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlx1MDkxRlx1MDk0Mlx1MDkzMlx1MDkyQ1x1MDkzRVx1MDkzMCBcdTA5MjZcdTA5M0ZcdTA5MTZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTJBXHUwOTQ4XHUwOTIxXHUwOTNGXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1MDkwQVx1MDkyQVx1MDkzMFwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTA5MjZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHUwOTI4XHUwOTQwXHUwOTFBXHUwOTQ3XCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1MDkyQ1x1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MDkxRlx1MDk0Mlx1MDkzMlx1MDkyQ1x1MDkzRVx1MDkzMCBcdTA5MzhcdTA5NERcdTA5MjVcdTA5M0ZcdTA5MjRcdTA5M0ZcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTA5MEFcdTA5MkFcdTA5MzBcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTA5MjhcdTA5NDBcdTA5MUFcdTA5NDdcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1MDkxRlx1MDk0Mlx1MDkzMlx1MDkyQ1x1MDkzRVx1MDkzMCBcdTA5MkFcdTA5NDNcdTA5MzdcdTA5NERcdTA5MjBcdTA5MkRcdTA5NDJcdTA5MkVcdTA5M0ZcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1MDkyQ1x1MDkxRlx1MDkyOCBcdTA5MkFcdTA5NDNcdTA5MzdcdTA5NERcdTA5MjBcdTA5MkRcdTA5NDJcdTA5MkVcdTA5M0ZcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTA5MkNcdTA5MUZcdTA5MjggXHUwOTJDXHUwOTQ5XHUwOTMwXHUwOTREXHUwOTIxXHUwOTMwIFx1MDkzNlx1MDk0OFx1MDkzMlx1MDk0MFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHUwOTJDXHUwOTFGXHUwOTI4IFx1MDkyQ1x1MDk0OVx1MDkzMFx1MDk0RFx1MDkyMVx1MDkzMCBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHUwOTJDXHUwOTFGXHUwOTI4IFx1MDkxRlx1MDk0N1x1MDkxNVx1MDk0RFx1MDkzOFx1MDk0RFx1MDkxRiBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTMwXHUwOTQwXHUwOTM4XHUwOTQ3XHUwOTFGXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MzZcdTA5NDhcdTA5MzJcdTA5NDBcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiXHUwOTMyXHUwOTNFXHUwOTA3XHUwOTI4IFx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MjggXHUwOTFBXHUwOTRDXHUwOTIxXHUwOTNDXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHUwOTE1XHUwOTM4XHUwOTREXHUwOTFGXHUwOTJFIFx1MDkzOFx1MDkzRVx1MDkyQlx1MDkzQyBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHUwOTJDXHUwOTQ5XHUwOTMwXHUwOTREXHUwOTIxXHUwOTMwIFx1MDkyNFx1MDk0RFx1MDkzMFx1MDkzRlx1MDkxQ1x1MDk0RFx1MDkyRlx1MDkzRVwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJcdTA5MjhcdTA5NEJcdTA5MjEgXHUwOTE2XHUwOTRCXHUwOTFDXHUwOTQ3XHUwOTAyLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiXHUwOTJFXHUwOTQyXHUwOTMyXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiXHUwOTI4XHUwOTJGXHUwOTNFIFx1MDkyRVx1MDk0Mlx1MDkzMlwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJcdTA5MUFcdTA5M0VcdTA5MDdcdTA5MzJcdTA5NERcdTA5MjFcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIFx1MDkzOFx1MDk0N1x1MDkxRlx1MDkzRlx1MDkwMlx1MDkxN1x1MDk0RFx1MDkzOFwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlx1MDkyRFx1MDkzRVx1MDkzN1x1MDkzRVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJcdTA5MDdcdTA5MDJcdTA5MUZcdTA5MzBcdTA5MkJcdTA5M0NcdTA5NDdcdTA5MzggXHUwOTJEXHUwOTNFXHUwOTM3XHUwOTNFXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlx1MDkyNVx1MDk0MFx1MDkyRVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiXHUwOTMwXHUwOTAyXHUwOTE3IFx1MDkyNVx1MDk0MFx1MDkyRVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MUZcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJcdTA5MjFcdTA5M0VcdTA5MzBcdTA5NERcdTA5MTVcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTI2XHUwOTNGXHUwOTE2XHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1MDkxRlx1MDk0Mlx1MDkzMlx1MDkyQ1x1MDkzRVx1MDkzMCBcdTA5MjZcdTA5M0ZcdTA5MTZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiXHUwOTE1XHUwOTQ4XHUwOTI4XHUwOTM1XHUwOTNFXHUwOTM4IFx1MDkyQVx1MDk0M1x1MDkzN1x1MDk0RFx1MDkyMFx1MDkyRFx1MDk0Mlx1MDkyRVx1MDkzRlwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiXHUwOTJBXHUwOTQzXHUwOTM3XHUwOTREXHUwOTIwXHUwOTJEXHUwOTQyXHUwOTJFXHUwOTNGIFx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTA5MkFcdTA5MzBcdTA5M0ZcdTA5MUFcdTA5MkZcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdTA5MzhcdTA5MDJcdTA5MzhcdTA5NERcdTA5MTVcdTA5MzBcdTA5MjNcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1MDkzMlx1MDk0N1x1MDkxNlx1MDkxNVwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiT2JzaWRpYW4gXHUwOTE1XHUwOTQ3IFx1MDkzMlx1MDkzRlx1MDkwRiBcdTA5MTVcdTA5MzhcdTA5NERcdTA5MUZcdTA5MkUgXHUwOTM4XHUwOTREXHUwOTFGXHUwOTNFXHUwOTA3XHUwOTMyLCBcdTA5MDdcdTA5MDJcdTA5MjZcdTA5NERcdTA5MzBcdTA5MjdcdTA5MjhcdTA5NDFcdTA5MzcgXHUwOTE1XHUwOTI4XHUwOTQ3XHUwOTE1XHUwOTREXHUwOTM2XHUwOTI4LCBcdTA5MkVcdTA5MzJcdTA5NERcdTA5MUZcdTA5NDAtXHUwOTM4XHUwOTQ3XHUwOTMyXHUwOTQ3XHUwOTE1XHUwOTREXHUwOTFGLCBcdTA5MjFcdTA5NERcdTA5MzBcdTA5NDhcdTA5MTcgXHUwOTBGXHUwOTAyXHUwOTIxIFx1MDkyMVx1MDk0RFx1MDkzMFx1MDk0OVx1MDkyQSBcdTA5MTRcdTA5MzAgTWFya2Rvd24gXHUwOTA2XHUwOTJGXHUwOTNFXHUwOTI0L1x1MDkyOFx1MDkzRlx1MDkzMFx1MDk0RFx1MDkyRlx1MDkzRVx1MDkyNCBcdTA5MTVcdTA5NDcgXHUwOTM4XHUwOTNFXHUwOTI1IFx1MDkyRVx1MDkzRVx1MDkwN1x1MDkwMlx1MDkyMSBcdTA5MkVcdTA5NDhcdTA5MkEgXHUwOTEwXHUwOTJBXHUwOTY0XCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHUwOTA1XHUwOTJBXHUwOTIxXHUwOTQ3XHUwOTFGXHUwOTQ3XHUwOTIxXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWIgXHUwOTMwXHUwOTNGXHUwOTJBXHUwOTQ5XHUwOTFDXHUwOTNDXHUwOTNGXHUwOTFGXHUwOTMwXHUwOTQwXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdTA5MTNcdTA5MkFcdTA5MjggXHUwOTM4XHUwOTRCXHUwOTMwXHUwOTREXHUwOTM4IFx1MDkzMlx1MDk0N1x1MDkxNlx1MDkxNSBcdTA5MTVcdTA5M0UgXHUwOTM4XHUwOTJFXHUwOTMwXHUwOTREXHUwOTI1XHUwOTI4IFx1MDkxNVx1MDkzMFx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlx1MDkxNVx1MDk0MFx1MDkyQ1x1MDk0Qlx1MDkzMFx1MDk0RFx1MDkyMSBcdTA5MzZcdTA5NDlcdTA5MzBcdTA5NERcdTA5MUZcdTA5MTVcdTA5MUZcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiXHUwOTM2XHUwOTQ5XHUwOTMwXHUwOTREXHUwOTFGXHUwOTE1XHUwOTFGIFx1MDkwNVx1MDkyOFx1MDk0MVx1MDkxNVx1MDk0Mlx1MDkzMlx1MDkzRlx1MDkyNCBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUwOTI4XHUwOTRCXHUwOTIxIFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkzRlx1MDkyNCBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHUwOTM4XHUwOTNGXHUwOTJDXHUwOTMyXHUwOTNGXHUwOTAyXHUwOTE3IFx1MDkxQ1x1MDk0Qlx1MDkyMVx1MDkzQ1x1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxIFx1MDkxQ1x1MDk0Qlx1MDkyMVx1MDkzQ1x1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiXHUwOTI4XHUwOTRCXHUwOTIxIFx1MDkyQVx1MDkzMCBcdTA5MkJcdTA5M0NcdTA5NEJcdTA5MTVcdTA5MzhcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHUwOTJBXHUwOTQyXHUwOTMwXHUwOTREXHUwOTM1XHUwOTM1XHUwOTI0XCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1MDkyQlx1MDkzRlx1MDkzMCBcdTA5MzhcdTA5NDdcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MjggXHUwOTJDXHUwOTREXHUwOTMwXHUwOTQ3XHUwOTE1IChcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5MjggXHUwOTJFXHUwOTQ3XHUwOTAyKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJcdTA5MTVcdTA5NDhcdTA5MjhcdTA5MzVcdTA5M0VcdTA5MzggXHUwOTE2XHUwOTQwXHUwOTAyXHUwOTFBXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkwN1x1MDkyOFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJcdTA5MUNcdTA5M0NcdTA5NDJcdTA5MkUgXHUwOTA2XHUwOTA5XHUwOTFGXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkzMFx1MDk0MFx1MDkzOFx1MDk0N1x1MDkxRlwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHUwOTBBXHUwOTJBXHUwOTMwXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIlx1MDkyOFx1MDk0MFx1MDkxQVx1MDk0N1wiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJcdTA5MkNcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1MDkyNlx1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiXHUwOTE1XHUwOTQxXHUwOTAyXHUwOTFDXHUwOTQwIFx1MDkyNlx1MDkyQ1x1MDkzRVx1MDkwRlx1MDkwMi4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiXHUwOTM4XHUwOTREXHUwOTE1XHUwOTREXHUwOTMwXHUwOTQ5XHUwOTMyIFx1MDkxNFx1MDkzMCBcdTA5MUNcdTA5M0NcdTA5NDJcdTA5MkVcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdTA5MzVcdTA5MzBcdTA5NERcdTA5MUZcdTA5M0ZcdTA5MTVcdTA5MzIgXHUwOTM4XHUwOTREXHUwOTE1XHUwOTREXHUwOTMwXHUwOTQ5XHUwOTMyIFx1MDkwOVx1MDkzMlx1MDkxRlx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1MDkzOVx1MDk0OVx1MDkzMFx1MDkzRlx1MDkxQ1x1MDkzQ1x1MDk0OVx1MDkyOFx1MDk0RFx1MDkxRlx1MDkzMiBcdTA5MzhcdTA5NERcdTA5MTVcdTA5NERcdTA5MzBcdTA5NDlcdTA5MzIgXHUwOTA5XHUwOTMyXHUwOTFGXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkyNlx1MDkzRlx1MDkzNlx1MDkzRSBcdTA5MDlcdTA5MzJcdTA5MUZcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIlx1MDkyQ1x1MDkyOFx1MDkzRVx1MDkyNFx1MDk0NyBcdTA5MzhcdTA5MkVcdTA5MkYgXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTI4XCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUwOTI4XHUwOTBGIFx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MkNcdTA5MjhcdTA5M0VcdTA5MjRcdTA5NDcgXHUwOTM4XHUwOTJFXHUwOTJGIFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOCBcdTA5MkVcdTA5NEJcdTA5MjFcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHUwOTJFXHUwOTQyXHUwOTMyIFx1MDkyOFx1MDkzRVx1MDkyRVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHUwOTI4XHUwOTBGIFx1MDkyRVx1MDk0Mlx1MDkzMiBcdTA5MTVcdTA5M0UgXHUwOTIxXHUwOTNGXHUwOTJCXHUwOTNDXHUwOTQ5XHUwOTMyXHUwOTREXHUwOTFGIFx1MDkyOFx1MDkzRVx1MDkyRVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxIFx1MDkyOFx1MDkzRVx1MDkyRVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlx1MDkyOFx1MDkwRiBcdTA5MUFcdTA5M0VcdTA5MDdcdTA5MzJcdTA5NERcdTA5MjEgXHUwOTE1XHUwOTNFIFx1MDkyMVx1MDkzRlx1MDkyQlx1MDkzQ1x1MDk0OVx1MDkzMlx1MDk0RFx1MDkxRiBcdTA5MjhcdTA5M0VcdTA5MkVcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJcdTA5MUZcdTA5M0VcdTA5MDdcdTA5MkEgXHUwOTE1XHUwOTMwXHUwOTQ3XHUwOTAyIFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOFwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdTA5MUFcdTA5MkZcdTA5MjhcdTA5M0ZcdTA5MjQgXHUwOTI4XHUwOTRCXHUwOTIxIFx1MDkyQVx1MDkzMCBcdTA5MUZcdTA5M0VcdTA5MDdcdTA5MkEgXHUwOTE1XHUwOTMwXHUwOTE1XHUwOTQ3IFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOFwiLFxyXG59O1xyXG5cclxuY29uc3QgX2tvOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFx1QjhFOFx1RDJCOFwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFx1QzJFNFx1RDU4OVx1Q0RFOFx1QzE4Q1wiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFx1QjJFNFx1QzJEQ1x1QzJFNFx1RDU4OVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgXHVCOUY1XCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1QzJBNFx1RDBDMFx1Qzc3Q1wiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIlx1RDNFQ1x1Q0VFNFx1QzJBNFwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJcdUFDODBcdUMwQzlcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpcdUFDODBcdUMwQzkgfCBTcGFjZTpcdUQzQjhcdUM5RDEgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJcdUMwQzggXHVCOEU4XHVEMkI4XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duIFx1QkFBOFx1QjREQ1wiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlx1QzJBNFx1RDBDMFx1Qzc3QyBcdUQzMjhcdUIxMTBcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJcdUIxNzhcdUI0REMgXHVEM0VDXHVDRUU0XHVDMkE0XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1QjE3OFx1QjREQyBcdUFDODBcdUMwQzlcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJcdUMxMjRcdUM4MTVcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiXHVENjU1XHVCMzAwXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJcdUNEOTVcdUMxOENcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgXHVDMEFDXHVDNkE5XHVDNzkwIFx1QzgxNVx1Qzc1OFwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHVDNzdDXHVBRDA0IFx1QzBBRFx1QzgxQ1wiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1QzJBNFx1RDBDMFx1Qzc3QyBcdUQzQjhcdUM5RDFcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgXHVDMEM4IFx1QjhFOFx1RDJCOFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBcdUMyRTRcdUQ1ODlcdUNERThcdUMxOENcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgXHVCMkU0XHVDMkRDXHVDMkU0XHVENTg5XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdUM4MDRcdUM1RUQgXHVDMkE0XHVEMEMwXHVDNzdDXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1RDNCOFx1QzlEMVwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHVDMkE0XHVEMEMwXHVDNzdDXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIFx1QkNGNVx1QzBBQ1wiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFx1Qzc5OFx1Qjc3Q1x1QjBCNFx1QUUzMFwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgXHVCRDk5XHVDNUVDXHVCMTIzXHVBRTMwXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBcdUM3OTBcdUMyRERcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBcdUM2N0NcdUNBQkQgXHVDNzkwXHVDMkREXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFx1RDYxNVx1QzgxQ1wiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1QzBBRFx1QzgxQ1wiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVDMjI4XHVBRTMwXHVBRTMwXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1QzgwNFx1QzVFRCBcdUMyQTRcdUQwQzBcdUM3N0NcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJcdUM3OTBcdUMyREQgXHVCMTc4XHVCNERDXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJcdUI4RThcdUQyQjggXHVCMTc4XHVCNERDXCIsXHJcbiAgICBcInNtLmJnXCI6IFwiXHVCQzMwXHVBQ0JEXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJcdUQxNERcdUMyQTRcdUQyQjggXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiXHVBRTAwXHVBRjM0IFx1RDA2Q1x1QUUzMFwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiXHVBRTAwXHVBRjM0XCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiXHVEMTRDXHVCNDUwXHVCOUFDIFx1QzJBNFx1RDBDMFx1Qzc3Q1wiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlx1RDE0Q1x1QjQ1MFx1QjlBQyBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJcdUQxNENcdUI0NTBcdUI5QUMgXHVCMTA4XHVCRTQ0XCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlx1RDE0Q1x1QjQ1MFx1QjlBQyBcdUJDMThcdUFDQkRcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJcdUNENUNcdUMxOEMgXHVCMTA4XHVCRTQ0XCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIlx1Q0Q1Q1x1QzE4QyBcdUIxOTJcdUM3NzRcIixcclxuICAgIFwic20uY29ublwiOiBcIlx1QzVGMFx1QUNCMFx1QzEyMFwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiXHVDNzIwXHVENjE1XCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiXHVCMTA4XHVCRTQ0XCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJcdUFFMzhcdUM3NzRcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBcdUI4MDhcdUM3NzhcdUJDRjRcdUM2QjBcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlx1QjE3OFx1QjREQyBcdUJDMjlcdUQ1QTVcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdUM2MjRcdUI5NzhcdUNBQkRcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1QzY3Q1x1Q0FCRFwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHVDNTkxXHVDQUJEXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHVEMzE0XHVCODA4XHVEMkI4XCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlx1QzEyMFx1RDBERFwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlx1QzEyMFx1RDBERCBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJcdUMxMjBcdUQwREQgXHVCMTA4XHVCRTQ0XCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1QzcyNFx1QUNGRFx1QzEyMCBcdUM2MjRcdUQ1MDRcdUMxNEJcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJcdUQzQjhcdUM5RDEgXHVDNzI0XHVBQ0ZEXHVDMTIwIFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiXHVEM0I4XHVDOUQxIFx1QzcyNFx1QUNGRFx1QzEyMCBcdUIxMDhcdUJFNDRcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiXHVEMTREXHVDMkE0XHVEMkI4IFx1QzgxNVx1QjgyQ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1RDE0RFx1QzJBNFx1RDJCOCBcdUQzMjhcdUI1MjlcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJcdUM5MDQgXHVCMTkyXHVDNzc0XCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHVDRTk0XHVCQzg0XHVDMkE0IFx1QkMzMFx1QUNCRFwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1Q0QwOFx1QUUzMFx1RDY1NFwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlx1QjJFQlx1QUUzMFwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUQ0NUNcdUMyRENcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVEMzI4XHVCNTI5XCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1QzcwNFwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdUM2MjRcdUI5NzhcdUNBQkRcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHVDNTQ0XHVCNzk4XCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1QzY3Q1x1Q0FCRFwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUM3MDRcdUNFNThcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdUM3MDRcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdUM1NDRcdUI3OThcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUJDMzBcdUFDQkRcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1QkM4NFx1RDJCQyBcdUJDMzBcdUFDQkRcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdUJDODRcdUQyQkMgXHVEMTRDXHVCNDUwXHVCOUFDIFx1QzJBNFx1RDBDMFx1Qzc3Q1wiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHVCQzg0XHVEMkJDIFx1RDE0Q1x1QjQ1MFx1QjlBQyBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHVCQzg0XHVEMkJDIFx1RDE0RFx1QzJBNFx1RDJCOCBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVDRDA4XHVBRTMwXHVENjU0XCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1QjE3OFx1QjREQyBcdUMyQTRcdUQwQzBcdUM3N0NcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiXHVDMTIwIFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdUMxMjAgXHVCMTA4XHVCRTQ0XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHVDMEFDXHVDNkE5XHVDNzkwIFx1QzgxNVx1Qzc1OCBcdUM5QzBcdUM2QjBcdUFFMzBcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHVEMTRDXHVCNDUwXHVCOUFDIFx1QkMxOFx1QUNCRFwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJcdUIxNzhcdUI0REMgXHVBQzgwXHVDMEM5Li4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiXHVCOEU4XHVEMkI4XCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiXHVDMEM4IFx1QjhFOFx1RDJCOFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJcdUM3OTBcdUMyRERcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIFx1QzEyNFx1QzgxNVwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlx1QzVCOFx1QzVCNFwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJcdUM3NzhcdUQxMzBcdUQzOThcdUM3NzRcdUMyQTQgXHVDNUI4XHVDNUI0XCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlx1RDE0Q1x1QjlDOFwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiXHVDMEM5XHVDMEMxIFx1RDE0Q1x1QjlDOFwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJcdUJDMURcdUFDOENcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJcdUM1QjRcdUI0NjFcdUFDOENcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVENDVDXHVDMkRDXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUQ0NUNcdUMyRENcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiXHVDRTk0XHVCQzg0XHVDMkE0IFx1QkMzMFx1QUNCRFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiXHVCQzMwXHVBQ0JEIFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdUM4MTVcdUJDRjRcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdUJDODRcdUM4MDRcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1Qzc5MVx1QzEzMVx1Qzc5MFwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiT2JzaWRpYW5cdUM2QTkgXHVDNjI0XHVENTA4IFx1QzE4Q1x1QzJBNCBcdUI5QzhcdUM3NzhcdUI0RENcdUI5RjUgXHVDNTcxLiBcdUNFRTRcdUMyQTRcdUQxNDAgXHVDMkE0XHVEMEMwXHVDNzdDLCBcdUI4MDhcdUM3NzhcdUJDRjRcdUM2QjAgXHVDNUYwXHVBQ0IwLCBcdUIyRTRcdUM5MTEgXHVDMTIwXHVEMERELCBcdUI0RENcdUI3OThcdUFERjggXHVDNTY0IFx1QjREQ1x1Qjg2RCwgTWFya2Rvd24gXHVDOUMwXHVDNkQwLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1QzVDNVx1QjM3MFx1Qzc3NFx1RDJCOFwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViIFx1QzgwMFx1QzdBNVx1QzE4Q1wiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiXHVDNjI0XHVENTA4XHVDMThDXHVDMkE0IFx1Qzc5MVx1QUMwMCBcdUQ2QzRcdUM2RDBcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJcdUQwQTRcdUJDRjRcdUI0REMgXHVCMkU4XHVDRDk1XHVEMEE0XCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1QjJFOFx1Q0Q5NVx1RDBBNCBcdUMwQUNcdUM2QTlcdUM3OTAgXHVDODE1XHVDNzU4XCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1QjE3OFx1QjREQyBcdUQzQjhcdUM5RDFcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHVENjE1XHVDODFDIFx1Q0Q5NFx1QUMwMFwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHVDNzkwXHVDMkREIFx1Q0Q5NFx1QUMwMFwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiXHVCMTc4XHVCNERDIFx1RDNFQ1x1Q0VFNFx1QzJBNFwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdUMyRTRcdUQ1ODlcdUNERThcdUMxOENcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHVCMkU0XHVDMkRDXHVDMkU0XHVENTg5XCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiXHVDOTA0XHVCQzE0XHVBRkM4IChcdUQzQjhcdUM5RDEgXHVDOTExKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJcdUNFOTRcdUJDODRcdUMyQTQgXHVCNERDXHVCNzk4XHVBREY4XCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiXHVENjU1XHVCMzAwXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlx1Q0Q5NVx1QzE4Q1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1RDY1NVx1QjMwMC9cdUNEOTVcdUMxOEMgXHVDRDA4XHVBRTMwXHVENjU0XCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJcdUM3MDRcdUI4NUNcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiXHVDNTQ0XHVCNzk4XHVCODVDXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1QzY3Q1x1Q0FCRFx1QzczQ1x1Qjg1Q1wiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiXHVDNjI0XHVCOTc4XHVDQUJEXHVDNzNDXHVCODVDXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJcdUQwQTRcdUI5N0MgXHVCMjA0XHVCOTc0XHVDMTM4XHVDNjk0Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJcdUMyQTRcdUQwNkNcdUI4NjQgXHVCQzBGIFx1RDY1NVx1QjMwMC9cdUNEOTVcdUMxOENcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdUMxMzhcdUI4NUMgXHVDMkE0XHVEMDZDXHVCODY0IFx1QkMxOFx1QzgwNFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1QUMwMFx1Qjg1QyBcdUMyQTRcdUQwNkNcdUI4NjQgXHVCQzE4XHVDODA0XCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiXHVENjU1XHVCMzAwL1x1Q0Q5NVx1QzE4QyBcdUJDMThcdUM4MDRcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIlx1QzBERFx1QzEzMSBcdUMyREMgXHVEM0I4XHVDOUQxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHVDMEM4IFx1QjE3OFx1QjREQyBcdUMwRERcdUMxMzEgXHVDMkRDIFx1RDNCOFx1QzlEMSBcdUJBQThcdUI0RENcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHVCOEU4XHVEMkI4IFx1Qzc3NFx1Qjk4NFwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHVDMEM4IFx1QjhFOFx1RDJCOFx1Qzc1OCBcdUFFMzBcdUJDRjggXHVDNzc0XHVCOTg0XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJcdUM3OTBcdUMyREQgXHVDNzc0XHVCOTg0XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiXHVDMEM4IFx1Qzc5MFx1QzJERFx1Qzc1OCBcdUFFMzBcdUJDRjggXHVDNzc0XHVCOTg0XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHVDNzg1XHVCODI1XHVENTU4XHVDNUVDIFx1RDNCOFx1QzlEMVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdUIxNzhcdUI0REMgXHVDMTIwXHVEMEREIFx1QzJEQyBcdUQwQTQgXHVDNzg1XHVCODI1XHVDNzNDXHVCODVDIFx1RDNCOFx1QzlEMVwiLFxyXG59O1xyXG5cclxuY29uc3QgX3B0OiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJhaXpcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBEZXNmYXplclwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJlZmF6ZXJcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIE1hcGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRm9jYXJcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiUGVzcXVpc2FyXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6UGVzcXVpc2FyIHwgRXNwYVx1MDBFN286RWRpdGFyIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTm92YSByYWl6XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1vZG8gTWFya2Rvd25cIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJQYWluZWwgZGUgZXN0aWxvXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiRm9jYXIgbm8gblx1MDBGM1wiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJQZXNxdWlzYXIgblx1MDBGM3NcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJDb25maWd1cmFcdTAwRTdcdTAwRjVlc1wiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJBbXBsaWFyXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJSZWR1emlyXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFBlcnNvbmFsaXphZG9cIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEV4Y2x1aXIgZW0gbG90ZVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEVkaXRhciBlc3RpbG9cIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTm92YSByYWl6XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IERlc2ZhemVyXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFJlZmF6ZXJcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsbyBnbG9iYWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgRWRpdGFyXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG9cIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgQ29waWFyXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgUmVjb3J0YXJcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIENvbGFyXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBGaWxob1wiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IEZpbGhvIGVzcXVlcmRvXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IElybVx1MDBFM29cIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBFeGNsdWlyXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIk9jdWx0YXIgYmFycmFcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvIGdsb2JhbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIk5cdTAwRjMgZmlsaG9cIixcclxuICAgIFwic20ucm9vdFwiOiBcIk5cdTAwRjMgcmFpelwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkZ1bmRvXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJDb3IgZG8gdGV4dG9cIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJUYW1hbmhvIGRhIGZvbnRlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJGb250ZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIkVzdGlsbyBkYSBib3JkYVwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkNvciBkYSBib3JkYVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkxhcmd1cmEgZGEgYm9yZGFcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiUmFpbyBkYSBib3JkYVwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIkxhcmd1cmEgbVx1MDBFRG4uXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIkFsdHVyYSBtXHUwMEVEbi5cIixcclxuICAgIFwic20uY29ublwiOiBcIkNvbmV4XHUwMEUzb1wiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiVGlwb1wiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkNvclwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkxhcmd1cmFcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkNvbXByaW1lbnRvXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggQXJjby1cdTAwRURyaXNcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIkRpcmVcdTAwRTdcdTAwRTNvXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiRGlyZWl0YVwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiRXNxdWVyZGFcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkFtYm9zXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXRhXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlNlbGVcdTAwRTdcdTAwRTNvXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiQ29yIGRlIHNlbGVcdTAwRTdcdTAwRTNvXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiTGFyZ3VyYSBkZSBzZWxlXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJEZXNsb2NhbWVudG8gZG8gY29udG9ybm9cIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJDb3IgY29udG9ybm8gZWRpXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiTGFyZ3VyYSBjb250b3JubyBlZGlcdTAwRTdcdTAwRTNvXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIkFsaW5oYW1lbnRvXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiUHJlZW5jaGltZW50byB0ZXh0b1wiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIkFsdHVyYSBkYSBsaW5oYVwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkZ1bmRvIGRhIHRlbGFcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJSZWRlZmluaXJcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJGZWNoYXJcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJNb3N0cmFyIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiUHJlZW5jaGltZW50byBiYXJyYVwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJDaW1hXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIkRpcmVpdGFcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiQmFpeG9cIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiRXNxdWVyZGFcIixcclxuICAgIFwic20udGJQb3NcIjogXCJQb3NpXHUwMEU3XHUwMEUzbyBiYXJyYVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlRvcG9cIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJGdW5kb1wiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiRnVuZG8gYmFycmFcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIkZ1bmRvIGJvdFx1MDBFM29cIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJFc3RpbG8gYm9yZGEgYm90XHUwMEUzb1wiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiQ29yIGJvcmRhIGJvdFx1MDBFM29cIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiQ29yIHRleHRvIGJvdFx1MDBFM29cIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJSZWRlZmluaXIgYmFycmFcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvIGRvIG5cdTAwRjNcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiQ29yIGRhIGxpbmhhXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxhcmd1cmEgZGEgbGluaGFcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJMaW1wYXIgcGVyc29uYWxpemFcdTAwRTdcdTAwRTNvXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlJhaW8gZGEgYm9yZGFcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiUGVzcXVpc2FyIG5cdTAwRjNzLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiUmFpelwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk5vdmEgcmFpelwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJGaWxob1wiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJDb25maWd1cmFcdTAwRTdcdTAwRjVlcyBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJJZGlvbWFcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiSWRpb21hIGRhIGludGVyZmFjZVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJUZW1hIGRlIGNvclwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJDbGFyb1wiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIkVzY3Vyb1wiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIk1vc3RyYXIgYmFycmFcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiTW9zdHJhciBiYXJyYVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJGdW5kbyBkYSB0ZWxhXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJDb3IgZGUgZnVuZG9cIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiU29icmVcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzXHUwMEUzb1wiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0b3JcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkFwcCBkZSBtYXBhIG1lbnRhbCBkZSBjXHUwMEYzZGlnbyBhYmVydG8gcGFyYSBPYnNpZGlhbiBjb20gZXN0aWxvcyBwZXJzb25hbGl6YWRvcywgY29uZXhcdTAwRjVlcyBhcmNvLVx1MDBFRHJpcywgc2VsZVx1MDBFN1x1MDBFM28gbVx1MDBGQWx0aXBsYSwgYXJyYXN0YXIgZSBzb2x0YXIgZSBNYXJrZG93bi5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJBdHVhbGl6YWRvXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJSZXBvc2l0XHUwMEYzcmlvIEdpdEh1YlwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiQXBvaWFyIG8gYXV0b3JcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJBdGFsaG9zIGRlIHRlY2xhZG9cIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiUGVyc29uYWxpemFyIGF0YWxob3NcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiRWRpdGFyIG5cdTAwRjNcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiQWRpY2lvbmFyIGlybVx1MDBFM29cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkFkaWNpb25hciBmaWxob1wiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiRm9jYXIgbm8gblx1MDBGM1wiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJEZXNmYXplclwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJSZWZhemVyXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiUXVlYnJhIGRlIGxpbmhhIChlZGlcdTAwRTdcdTAwRTNvKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJBcnJhc3RhciB0ZWxhXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiQW1wbGlhclwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJSZWR1emlyXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiUmVkZWZpbmlyIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIkNpbWFcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiQmFpeG9cIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiRXNxdWVyZGFcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIkRpcmVpdGFcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlByZXNzaW9uZS4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiUm9sYWdlbSBlIHpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnRlciByb2xhZ2VtIFZcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJJbnZlcnRlciByb2xhZ2VtIEhcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnRlciB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJFZGl0YXIgYW8gY3JpYXJcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJNb2RvIGVkaVx1MDBFN1x1MDBFM28gYW8gY3JpYXIgblx1MDBGM3NcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiTm9tZSBkYSByYWl6XCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJOb21lIHBhZHJcdTAwRTNvIHBhcmEgcmFcdTAwRUR6ZXNcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIk5vbWUgZG8gZmlsaG9cIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJOb21lIHBhZHJcdTAwRTNvIHBhcmEgZmlsaG9zXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiRGlnaXRhciBwYXJhIGVkaXRhclwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJFZGl0YXIgYW8gZGlnaXRhciBjb20gblx1MDBGMyBzZWxlY2lvbmFkb1wiLFxyXG59O1xyXG5cclxuY29uc3QgX2ZpOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IEp1dXJpXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgS3Vtb2FcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBUZWUgdXVkZWxsZWVuXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBLYXJ0dGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggVHl5bGlcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJLb2hkaXN0YVwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJIYWt1XCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6SGFrdSB8IFZcdTAwRTRsaWx5XHUwMEY2bnRpOk11b2trYWEgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJVdXNpIGp1dXJpXCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duLXRpbGFcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJUeXlsaXBhbmVlbGlcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJLb2hkaXN0YSBzb2xtdXVuXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIkV0c2kgc29sbXVqYVwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIkFzZXR1a3NldFwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJMXHUwMEU0aGVublx1MDBFNFwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiTG9pdG9ubmFcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgTXVrYXV0ZXR0dVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgUG9pc3RhIGthaWtraVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IE11b2trYWEgdHl5bGlcdTAwRTRcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgVXVzaSBqdXVyaVwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBLdW1vYVwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBUZWUgdXVkZWxsZWVuXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBZbGVpbmVuIHR5eWxpXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIE11b2trYWFcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFR5eWxpXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIEtvcGlvaVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIExlaWtrYWFcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIExpaXRcdTAwRTRcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IExhcHNpXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgVmFzZW4gbGFwc2lcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgU2lzYXJ1c1wiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFBvaXN0YVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJQaWlsb3RhIHBhbGtraVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBZbGVpbmVuIHR5eWxpXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiTGFwc2lzb2xtdVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiSnV1cmlzb2xtdVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlRhdXN0YVwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGVrc3RpbiB2XHUwMEU0cmlcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJGb250dGlrb2tvXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJGb250dGlcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJSZXVuYW4gdHl5bGlcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJSZXVuYW4gdlx1MDBFNHJpXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiUmV1bmFuIGxldmV5c1wiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJSZXVuYW4gcHlcdTAwRjZyaXN0eXNcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJWXHUwMEU0aGltbVx1MDBFNGlzbGV2ZXlzXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIlZcdTAwRTRoaW1tXHUwMEU0aXNrb3JrZXVzXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJZaHRleXNcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5eXBwaVwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlZcdTAwRTRyaVwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkxldmV5c1wiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiUGl0dXVzXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggU2F0ZWVua2FhcmlcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlNvbG11biBzdXVudGFcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJPaWtlYVwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiVmFzZW5cIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIk1vbGVtbWF0XCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXR0aVwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJWYWxpbnRhXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiVmFsaW5uYW4gdlx1MDBFNHJpXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiVmFsaW5uYW4gbGV2ZXlzXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1MDBDNFx1MDBFNHJpdmlpdmFuIHNpaXJ0eW1cdTAwRTRcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJNdW9ra2F1a3NlbiBcdTAwRTRcdTAwRTRyaXZpaXZhbiB2XHUwMEU0cmlcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIk11b2trYXVrc2VuIFx1MDBFNFx1MDBFNHJpdmlpdmFuIGxldmV5c1wiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJUZWtzdGluIHRhc2F1c1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRla3N0aW4gdFx1MDBFNHl0ZVwiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIlJpdmluIGtvcmtldXNcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJLYW5rYWFuIHRhdXN0YVwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlBhbGF1dGFcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJTdWxqZVwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIk5cdTAwRTR5dFx1MDBFNCBwYWxra2lcIixcclxuICAgIFwic20udGJQYWRcIjogXCJQYWxraW4gdFx1MDBFNHl0ZVwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJZbFx1MDBFNFwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJPaWtlYVwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJBbGFcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiVmFzZW5cIixcclxuICAgIFwic20udGJQb3NcIjogXCJQYWxraW4gc2lqYWludGlcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJZbGhcdTAwRTRcdTAwRTRsbFx1MDBFNFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIkFsaGFhbGxhXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJQYWxraW4gdGF1c3RhXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJQYWluaWtrZWVuIHRhdXN0YVwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlBhaW5pa2tlZW4gcmV1bmFuIHR5eWxpXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJQYWluaWtrZWVuIHJldW5hbiB2XHUwMEU0cmlcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiUGFpbmlra2VlbiB0ZWtzdGluIHZcdTAwRTRyaVwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlBhbGF1dGEgcGFsa2tpXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFNvbG11biB0eXlsaVwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJWaWl2YW4gdlx1MDBFNHJpXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIlZpaXZhbiBsZXZleXNcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJUeWhqZW5uXHUwMEU0IG11a2F1dHVzXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlJldW5hbiBweVx1MDBGNnJpc3R5c1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJFdHNpIHNvbG11amEuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJKdXVyaVwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlV1c2kganV1cmlcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiTGFwc2lcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIEFzZXR1a3NldFwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIktpZWxpXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIktcdTAwRTR5dHRcdTAwRjZsaWl0dHltXHUwMEU0biBraWVsaVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUZWVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiVlx1MDBFNHJpdGVlbWFcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiVmFhbGVhXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiVHVtbWFcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJOXHUwMEU0eXRcdTAwRTQgcGFsa2tpXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIk5cdTAwRTR5dFx1MDBFNCBwYWxra2lcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiS2Fua2FhbiB0YXVzdGFcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIlRhdXN0YXZcdTAwRTRyaVwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJUaWV0b2phXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJUZWtpalx1MDBFNFwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiT2JzaWRpYW5pbiBtb25pcHVvbGluZW4gYXZvaW1lbiBsXHUwMEU0aGRla29vZGluIG1pZWxsZWthcnR0YXNvdmVsbHVzIG11a2F1dGV0dWlsbGEgdHl5bGVpbGxcdTAwRTQsIHNhdGVlbmthYXJpdmlpdm9pbGxhIGphIE1hcmtkb3duLXR1ZWxsYS5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJQXHUwMEU0aXZpdGV0dHlcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1Yi12YXJhc3RvXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJUdWUgdGVraWpcdTAwRTRcdTAwRTRcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJQaWthblx1MDBFNHBwXHUwMEU0aW1ldFwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJNdW9ra2FhIHBpa2FuXHUwMEU0cHBcdTAwRTRpbWlcdTAwRTRcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiTXVva2thYSBzb2xtdWFcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiTGlzXHUwMEU0XHUwMEU0IHNpc2FydXNcIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkxpc1x1MDBFNFx1MDBFNCBsYXBzaVwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiS29oZGlzdGEgc29sbXV1blwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJLdW1vYVwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJUZWUgdXVkZWxsZWVuXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiUml2aW52YWlodG8gKG11b2trYXVrc2Vzc2EpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlZlZFx1MDBFNCBrYW5nYXN0YVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIkxcdTAwRTRoZW5uXHUwMEU0XCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIkxvaXRvbm5hXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiTm9sbGFhIHpvb21hdXNcIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIllsXHUwMEY2c1wiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJBbGFzXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlZhc2VtbWFsbGVcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIk9pa2VhbGxlXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJQYWluYSBuXHUwMEU0cHBcdTAwRTRpbnRcdTAwRTQuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlZpZXJpdHlzIGphIHpvb21hdXNcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJLXHUwMEU0XHUwMEU0bm5cdTAwRTQgVi12aWVyaXR5c1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIktcdTAwRTRcdTAwRTRublx1MDBFNCBILXZpZXJpdHlzXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiS1x1MDBFNFx1MDBFNG5uXHUwMEU0IHpvb21hdXNcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIk11b2trYWEgbHVvdGFlc3NhXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiTXVva2thdXN0aWxhIHV1c2lsbGUgc29sbXVpbGxlXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIkp1dXJlbiBuaW1pXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJVdXNpZW4ganV1cmllbiBvbGV0dXNuaW1pXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJMYXBzZW4gbmltaVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlV1c2llbiBsYXN0ZW4gb2xldHVzbmltaVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIktpcmpvaXRhIG11b2thdGFrc2VzaVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJQYWluYSBuXHUwMEU0cHBcdTAwRTRpbnRcdTAwRTQgbXVva2F0YWtzZXNpIHZhbGl0dHVhIHNvbG11YVwiLFxyXG59O1xyXG5cclxuY29uc3QgX25vOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJvdFwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IEFuZ3JlXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgR2pcdTAwRjhyIG9tXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBLYXJ0XCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJGb2t1c1wiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJTXHUwMEY4a1wiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlNcdTAwRjhrIHwgTWVsbG9tcm9tOlJlZGlnZXIgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOeSByb3RcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24tbW9kdXNcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlscGFuZWxcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJGb2t1c2VyIG5vZGVcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiU1x1MDBGOGsgbm9kZXJcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJJbm5zdGlsbGluZ2VyXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlpvb20gaW5uXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJab29tIHV0XCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIEVnZW5kZWZpbmVydFwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgU2xldHQgYWxsZVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFJlZGlnZXIgc3RpbFwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOeSByb3RcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgQW5ncmVcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgR2pcdTAwRjhyIG9tXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWwgc3RpbFwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBSZWRpZ2VyXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIEtvcGllclwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIEtsaXBwIHV0XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBMaW0gaW5uXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBCYXJuXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgVmVuc3RyZSBiYXJuXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFNcdTAwRjhza2VuXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgU2xldHRcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiU2tqdWwgdmVya3RcdTAwRjh5bGluamVcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIHN0aWxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJCYXJuZW5vZGVcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlJvdG5vZGVcIixcclxuICAgIFwic20uYmdcIjogXCJCYWtncnVublwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGVrc3RmYXJnZVwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlNrcmlmdHN0XHUwMEY4cnJlbHNlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJTa3JpZnR0eXBlXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiS2FudHN0aWxcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJLYW50ZmFyZ2VcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJLYW50YnJlZGRlXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIkthbnRyYWRpdXNcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJNaW4uIGJyZWRkZVwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJNaW4uIGhcdTAwRjh5ZGVcIixcclxuICAgIFwic20uY29ublwiOiBcIkZvcmJpbmRlbHNlXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBlXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiRmFyZ2VcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJCcmVkZGVcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkxlbmdkZVwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFJlZ25idWVcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIk5vZGVyZXRuaW5nXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiSFx1MDBGOHlyZVwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiVmVuc3RyZVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiQmVnZ2VcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldHRcIixcclxuICAgIFwic20uc2VsXCI6IFwiVmFsZ1wiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlZhbGdmYXJnZVwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlZhbGdicmVkZGVcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiS29udHVyZm9yc2t5dm5pbmdcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJSZWRpZ2VyaW5nc2tvbnR1clwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiUmVkaWdlcmluZ3Nrb250dXJicmVkZGVcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiVGVrc3RqdXN0ZXJpbmdcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJUZWtzdHV0ZnlsbGluZ1wiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIkxpbmplaFx1MDBGOHlkZVwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkxlcnJldHNiYWtncnVublwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlRpbGJha2VzdGlsbFwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIkx1a2tcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJWaXMgdmVya3RcdTAwRjh5bGluamVcIixcclxuICAgIFwic20udGJQYWRcIjogXCJWZXJrdFx1MDBGOHlsaW5qZXV0ZnlsbGluZ1wiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJUb3BwXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIkhcdTAwRjh5cmVcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiQnVublwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJWZW5zdHJlXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiVmVya3RcdTAwRjh5bGluamVwb3Npc2pvblwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlRvcHBcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJCdW5uXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJWZXJrdFx1MDBGOHlsaW5qZWJha2dydW5uXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJLbmFwcGJha2dydW5uXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiS25hcHBrYW50c3RpbFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiS25hcHBrYW50ZmFyZ2VcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiS25hcHB0ZWtzdGZhcmdlXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiVGlsYmFrZXN0aWxsIHZlcmt0XHUwMEY4eWxpbmplXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IE5vZGVzdGlsXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkxpbmplZmFyZ2VcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGluamVicmVkZGVcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJGamVybiB0aWxwYXNuaW5nXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIkthbnRyYWRpdXNcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiU1x1MDBGOGsgbm9kZXIuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJSb3RcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOeSByb3RcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiQmFyblwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogSW5uc3RpbGxpbmdlclwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlNwclx1MDBFNWtcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiR3JlbnNlc25pdHRzcHJcdTAwRTVrXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRlbWFcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIkZhcmdldGVtYVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJMeXN0XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiTVx1MDBGOHJrdFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlZpcyB2ZXJrdFx1MDBGOHlsaW5qZVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJWaXMgdmVya3RcdTAwRjh5bGluamVcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiTGVycmV0c2Jha2dydW5uXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJCYWtncnVubnNmYXJnZVwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJPbVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNqb25cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkZvcmZhdHRlclwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiRnVua3Nqb25zcmlrIFx1MDBFNXBlbiBraWxkZWtvZGUgdGFua2VrYXJ0LWFwcCBmb3IgT2JzaWRpYW4gbWVkIHRpbHBhc3NlZGUgc3RpbGVyLCByZWduYnVlZm9yYmluZGVsc2VyIG9nIE1hcmtkb3duLXN0XHUwMEY4dHRlLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIk9wcGRhdGVydFwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViLWRlcG90XCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJTdFx1MDBGOHR0IGZvcmZhdHRlcmVuXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiSHVydGlndGFzdGVyXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlRpbHBhc3MgaHVydGlndGFzdGVyXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlJlZGlnZXIgbm9kZVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJMZWdnIHRpbCBzXHUwMEY4c2tlblwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiTGVnZyB0aWwgYmFyblwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiRm9rdXNlciBub2RlXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIkFuZ3JlXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIkdqXHUwMEY4ciBvbVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIkxpbmplc2tpZnQgKHJlZGlnZXJpbmcpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkRyYSBsZXJyZXRcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJab29tIGlublwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJab29tIHV0XCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiVGlsYmFrZXN0aWxsIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk9wcFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOZWRcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiVmVuc3RyZVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiSFx1MDBGOHlyZVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiVHJ5a2sgZW4gdGFzdC4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiUnVsbGluZyBvZyB6b29tXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiSW52ZXJ0ZXIgVi1ydWxsaW5nXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJ0ZXIgSC1ydWxsaW5nXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiSW52ZXJ0ZXIgem9vbVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiUmVkaWdlciB2ZWQgb3BwcmV0dGVsc2VcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJSZWRpZ2VyaW5nc21vZHVzIHZlZCBueWUgbm9kZXJcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiUm90bmF2blwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYXZuIGZvciBueWUgclx1MDBGOHR0ZXJcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIkJhcm5lbmF2blwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmF2biBmb3IgbnllIGJhcm5cIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJTa3JpdiBmb3IgXHUwMEU1IHJlZGlnZXJlXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlNrcml2IGZvciBcdTAwRTUgcmVkaWdlcmUgdmFsZ3Qgbm9kZVwiLFxyXG59O1xyXG5cclxuY29uc3QgX25sOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFdvcnRlbFwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IE9uZ2VkYWFuXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgT3BuaWV1d1wiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgS2FhcnRcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpamxcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJGb2N1c1wiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJab2VrZW5cIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpab2VrZW4gfCBTcGF0aWU6QmV3ZXJrZW4gfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOaWV1d2Ugd29ydGVsXCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duLW1vZHVzXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiU3RpamxwYW5lZWxcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJGb2N1cyBvcCBrbm9vcHB1bnRcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiS25vb3BwdW50ZW4gem9la2VuXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiSW5zdGVsbGluZ2VuXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIkluem9vbWVuXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJVaXR6b29tZW5cIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgQWFuZ2VwYXN0XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBBbGxlcyB2ZXJ3aWpkZXJlblwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWpsIGJld2Vya2VuXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE5pZXV3ZSB3b3J0ZWxcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgT25nZWRhYW5cIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgT3BuaWV1d1wiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsZSBzdGlqbFwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBCZXdlcmtlblwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpamxcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgS29waVx1MDBFQnJlblwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIEtuaXBwZW5cIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFBsYWtrZW5cIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IEtpbmRcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBMaW5rcyBraW5kXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEJyb2VyL3p1c1wiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFZlcndpamRlcmVuXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIldlcmtiYWxrIHZlcmJlcmdlblwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWxlIHN0aWpsXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiS2luZGtub29wcHVudFwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiV29ydGVsa25vb3BwdW50XCIsXHJcbiAgICBcInNtLmJnXCI6IFwiQWNodGVyZ3JvbmRcIixcclxuICAgIFwic20udGV4dFwiOiBcIlRla3N0a2xldXJcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJMZXR0ZXJncm9vdHRlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJMZXR0ZXJ0eXBlXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiUmFuZHN0aWpsXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiUmFuZGtsZXVyXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiUmFuZGJyZWVkdGVcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiUmFuZHJhZGl1c1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbi4gYnJlZWR0ZVwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJNaW4uIGhvb2d0ZVwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiVmVyYmluZGluZ1wiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiVHlwZVwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIktsZXVyXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiQnJlZWR0ZVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTGVuZ3RlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmVnZW5ib29nXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJSaWNodGluZ1wiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiTGlua3NcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJlaWRlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXRcIixcclxuICAgIFwic20uc2VsXCI6IFwiU2VsZWN0aWVcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJTZWxlY3RpZWtsZXVyXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiU2VsZWN0aWVicmVlZHRlXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIk9tdHJla29mZnNldFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIkJld2Vya2luZ3NvbXRyZWtrbGV1clwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiQmV3ZXJraW5nc29tdHJla2JyZWVkdGVcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiVGVrc3R1aXRsaWpuaW5nXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGVrc3R2dWxsaW5nXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiUmVnZWxob29ndGVcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJDYW52YXMgYWNodGVyZ3JvbmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJIZXJzdGVsbGVuXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiU2x1aXRlblwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIldlcmtiYWxrIHRvbmVuXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiV2Vya2JhbGt2dWxsaW5nXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIkJvdmVuXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJPbmRlclwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJMaW5rc1wiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIldlcmtiYWxrcG9zaXRpZVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIkJvdmVuXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiT25kZXJcIixcclxuICAgIFwic20udGJCZ1wiOiBcIldlcmtiYWxrIGFjaHRlcmdyb25kXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJLbm9wIGFjaHRlcmdyb25kXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiS25vcCByYW5kc3RpamxcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIktub3AgcmFuZGtsZXVyXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIktub3AgdGVrc3RrbGV1clwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIldlcmtiYWxrIGhlcnN0ZWxsZW5cIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggS25vb3BwdW50c3RpamxcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiTGlqbmtsZXVyXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxpam5icmVlZHRlXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiQWFucGFzc2luZyB3aXNzZW5cIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmFuZHJhZGl1c1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJLbm9vcHB1bnRlbiB6b2VrZW4uLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJXb3J0ZWxcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOaWV1d2Ugd29ydGVsXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIktpbmRcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIEluc3RlbGxpbmdlblwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlRhYWxcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiSW50ZXJmYWNldGFhbFwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUaGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiS2xldXJlbnRoZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkxpY2h0XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiRG9ua2VyXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiV2Vya2JhbGsgdG9uZW5cIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiV2Vya2JhbGsgdG9uZW5cIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiQ2FudmFzIGFjaHRlcmdyb25kXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJBY2h0ZXJncm9uZGtsZXVyXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIk92ZXJcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaWVcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkF1dGV1clwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiVWl0Z2VicmVpZGUgb3BlbiBzb3VyY2UgbWluZG1hcC1hcHAgdm9vciBPYnNpZGlhbiBtZXQgYWFuZ2VwYXN0ZSBzdGlqbGVuLCByZWdlbmJvb2d2ZXJiaW5kaW5nZW4gZW4gTWFya2Rvd24tb25kZXJzdGV1bmluZy5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJCaWpnZXdlcmt0XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItcmVwb3NpdG9yeVwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiT25kZXJzdGV1biBkZSBhdXRldXJcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJTbmVsdG9ldHNlblwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJTbmVsdG9ldHNlbiBhYW5wYXNzZW5cIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiS25vb3BwdW50IGJld2Vya2VuXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkJyb2VyL3p1cyB0b2V2b2VnZW5cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIktpbmQgdG9ldm9lZ2VuXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJGb2N1cyBvcCBrbm9vcHB1bnRcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiT25nZWRhYW4gbWFrZW5cIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiT3BuaWV1d1wiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlJlZ2VsYWZicmVraW5nIChiZXdlcmtpbmcpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkNhbnZhcyBzbGVwZW5cIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJJbnpvb21lblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJVaXR6b29tZW5cIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJab29tIGhlcnN0ZWxsZW5cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk9taG9vZ1wiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJPbWxhYWdcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiTGlua3NcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiRHJ1ayBvcCBlZW4gdG9ldHMuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjcm9sbGVuIGVuIHpvb21lblwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIlZlcnRpY2FhbCBvbWtlcmVuXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSG9yaXpvbnRhYWwgb21rZXJlblwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlpvb20gb21rZXJlblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiQmV3ZXJrZW4gYmlqIGFhbm1ha2VuXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiQmV3ZXJraW5nc21vZHVzIGJpaiBuaWV1d2Uga25vb3BwdW50ZW5cIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiV29ydGVsbmFhbVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiU3RhbmRhYXJkbmFhbSB2b29yIHdvcnRlbHNcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIktpbmRuYWFtXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiU3RhbmRhYXJkbmFhbSB2b29yIGtpbmRlcmVuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiVHlwIG9tIHRlIGJld2Vya2VuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIkJld2VyayBkb29yIHRlIHR5cGVuIGJpaiBnZXNlbGVjdGVlcmQga25vb3BwdW50XCIsXHJcbn07XHJcblxyXG5jb25zdCBfbGk6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgV3VyemVsXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgUlx1MDBGQ2NrZ1x1MDBFNG5naWdcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBXaWVkZXJob2xhXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBDaGFydGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZva3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlN1ZWNoZVwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlN1ZWNoZSB8IExlZXJ0YXNjaHQ6QmVhcmJlaXRhIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTlx1MDBGNmlpIFd1cnplbFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93bi1Nb2R1c1wiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlN0aWwtUGFuZWxcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJDaG5vdGEgZm9rdXNzaWVyYVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJDaG5vdGEgc3VlY2hlXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiSXN0ZWxsaWdhXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlZlcmdyXHUwMEY2XHUwMERGZXJhXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJWZXJrbGVpbmVyYVwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBFaWdldHNcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEFsbGkgbFx1MDBGNnNjaGFcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsIGJlYXJiZWl0YVwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOXHUwMEY2aWkgV3VyemVsXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFJcdTAwRkNja2dcdTAwRTRuZ2lnXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFdpZWRlcmhvbGFcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbGUgU3RpbFwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBCZWFyYmVpdGFcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgS29waWVyYVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFVzc2NobmlkYVwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgSWlmXHUwMEZDZWdlXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBDaGluZFwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IExlY2h0cyBDaGluZFwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBHc2Nod1x1MDBGNnNjaHRlclwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIExcdTAwRjZzY2hhXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIkxlaXNjaHRhIHZlcnN0ZWNrYVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWxlIFN0aWxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJDaGluZC1DaG5vdGFcIixcclxuICAgIFwic20ucm9vdFwiOiBcIld1cnplbC1DaG5vdGFcIixcclxuICAgIFwic20uYmdcIjogXCJIaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGV4dGZhcmJcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJTY2hyaWZ0Z3JcdTAwRjZzc2VcIixcclxuICAgIFwic20uZm9udFwiOiBcIlNjaHJpZnRcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJSYW5kc3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlJhbmRmYXJiXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiUmFuZGJyZWl0aVwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJSdW5kdW5nXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBCcmVpdGlcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiTWluLiBIXHUwMEY2Y2hpXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJWZXJiaW5kaWdcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cFwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkZhcmJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJCcmVpdGlcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkxcdTAwRTRuZ2lcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBSXHUwMEU0Z2Fib2dhXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJSaWNodGlnXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiUmVjaHRzXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJMZWNodHNcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJlaWRpXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXR0YVwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJVc3dhaGxcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJVc3dhaGxmYXJiXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiVXN3YWhsYnJlaXRpXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIktvbnR1cnZlcnNhdHpcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJCZWFyYmVpdGlnc3JhaG1lZmFyYlwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiQmVhcmJlaXRpZ3NyYWhtZWJyZWl0aVwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJUZXh0dXNyaWNodGlnXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGV4dGFic3RhbmRcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJaaWxlaFx1MDBGNmNoaVwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkxlaW53YW5kaGludGVyZ3J1bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJacnVnZ3NldHphXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiWnVhbWFjaGFcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJMZWlzY2h0YSB6ZWlnYVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIkxlaXNjaHRhLUFic3RhbmRcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiT2JhXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJVbnRhXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIkxlY2h0c1wiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIkxlaXNjaHRhLVBvc2l0aW9uXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiT2JhXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiVW50YVwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiTGVpc2NodGFoaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiQ2hub3BmaGludGVyZ3J1bmRcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJDaG5vcGZyYW5kc3RpbFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiQ2hub3BmcmFuZGZhcmJcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiQ2hub3BmdGV4dGZhcmJcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJMZWlzY2h0YSB6cnVnZ3NldHphXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IENobm90YS1TdGlsXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkxpbmllZmFyYlwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMaW5pZWJyZWl0aVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkFwXHUwMEU0c3NpZyBsXHUwMEY2c2NoZVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJSdW5kdW5nXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIkNobm90YSBzdWVjaGUuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJXdXJ6ZWxcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOXHUwMEY2aWkgV3VyemVsXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkNoaW5kXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBJc3RlbGxpZ2FcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJTcHJvY2hcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiT2JlcmZsXHUwMEU0Y2hhLVNwcm9jaFwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUaGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiRmFyYnRoZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkhlbGxcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJEdW5rZWxcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJMZWlzY2h0YSB6ZWlnYVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJMZWlzY2h0YSB6ZWlnYVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJMZWlud2FuZGhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJIaW50ZXJncnVuZGZhcmJcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiXHUwMERDYmVyXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0b3JcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkZ1bmt0aW9uc3JpaWNoaSBPcGVuLVNvdXJjZSBNaW5kbWFwLUFwcCBmXHUwMEZDciBPYnNpZGlhbiBtaXQgZWlnZW5hIFN0aWxhLCBSXHUwMEU0Z2Fib2dhLVZlcmJpbmRpZ2EgdW5kIE1hcmtkb3duLVN1cHBvcnQuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiQWt0dWFsaXNpZXJ0XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItQWJsYWdhXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJPcGVuLVNvdXJjZS1BdXRvciB1bmRlcnN0XHUwMEZDdHphXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiVGFzdGVrb21iaW5hdGlvbmFcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiVGFzdGVrb21iaW5hdGlvbmEgYXBhc3NhXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIkNobm90YSBiZWFyYmVpdGFcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiR3NjaHdcdTAwRjZzY2h0ZXIgZGV6dWVmXHUwMEZDZWdhXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJDaGluZCBkZXp1ZWZcdTAwRkNlZ2FcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkNobm90YSBmb2t1c3NpZXJhXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlJcdTAwRkNja2dcdTAwRTRuZ2lnXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIldpZWRlcmhvbGFcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJaaWxhdW1icnVjaCAoYmltIEJlYXJiZWl0YSlcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiTGVpbndhbmQgelx1MDBGQ2NoYVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlZlcmdyXHUwMEY2XHUwMERGZXJhXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlZlcmtsZWluZXJhXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiWm9vbSB6cnVnZ3NldHphXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJVZlwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJBYlwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJMZWNodHNcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiVGFzY2h0IGRyXHUwMEZDY2thLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJTY3JvbGxhIHVuZCBab29tYVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIlZlcnRpa2FscyBTY3JvbGxhIHVta2VocmFcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJIb3Jpem9udGFscyBTY3JvbGxhIHVta2VocmFcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJab29tcmljaHRpZyB1bWtlaHJhXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJCaSBFcnN0ZWxsaWcgYmVhcmJlaXRhXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiQmVhcmJlaXRpZ3Ntb2R1cyBiaSBuXHUwMEY2aWUgQ2hub3RhXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIld1cnplbG5hbVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYW0gZlx1MDBGQ3Igblx1MDBGNmlpIFd1cnpsYVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiQ2hpbmRuYW1cIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJTdGFuZGFyZG5hbSBmXHUwMEZDciBuXHUwMEY2aWkgQ2hpbmRlclwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlRpcHBhIHp1bSBCZWFyYmVpdGFcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiQmkgdXNnd1x1MDBFNGhsdGVtIENobm90YSBiZWFyYmVpdGFcIixcclxufTtcclxuXHJcbmNvbnN0IF9kYTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBSb2RcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBGb3J0cnlkXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgR2VudGFnXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBLb3J0XCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJGb2t1c1wiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJTXHUwMEY4Z1wiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlNcdTAwRjhnIHwgTWVsbGVtcnVtOlJlZGlnXHUwMEU5ciB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk55IHJvZFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93bi10aWxzdGFuZFwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlN0aWxwYW5lbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZva3VzXHUwMEU5ciBwXHUwMEU1IGtudWRlXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlNcdTAwRjhnIGkga251ZGVyXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiSW5kc3RpbGxpbmdlclwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJab29tIGluZFwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiWm9vbSB1ZFwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBCcnVnZXJkZWZpbmVyZXRcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFNsZXQgYWxsZVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFJlZGlnXHUwMEU5ciBzdGlsXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE55IHJvZFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBGb3J0cnlkXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIEdlbnRhZ1wiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIHN0aWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgUmVkaWdcdTAwRTlyXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIEtvcGlcdTAwRTlyXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgS2xpcFwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgSW5kc1x1MDBFNnRcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IEJhcm5cIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBWZW5zdHJlIGJhcm5cIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgU1x1MDBGOHNrZW5kZVwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFNsZXRcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiU2tqdWwgdlx1MDBFNnJrdFx1MDBGOGpzbGluamVcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIHN0aWxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJCYXJuZWtudWRlXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJSb2RrbnVkZVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkJhZ2dydW5kXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZWtzdGZhcnZlXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiU2tyaWZ0c3RcdTAwRjhycmVsc2VcIixcclxuICAgIFwic20uZm9udFwiOiBcIlNrcmlmdHR5cGVcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJLYW50c3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkthbnRmYXJ2ZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkthbnRicmVkZGVcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGl1c1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbi4gYnJlZGRlXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIk1pbi4gaFx1MDBGOGpkZVwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiRm9yYmluZGVsc2VcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cGVcIixcclxuICAgIFwic20uY29sb3JcIjogXCJGYXJ2ZVwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkJyZWRkZVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTFx1MDBFNm5nZGVcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlJlZ25idWVcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIktudWRlcmV0bmluZ1wiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIkhcdTAwRjhqcmVcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlZlbnN0cmVcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJlZ2dlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXRcIixcclxuICAgIFwic20uc2VsXCI6IFwiTWFya2VyaW5nXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiTWFya2VyaW5nc2ZhcnZlXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiTWFya2VyaW5nc2JyZWRkZVwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJLb250dXJmb3Jza3lkbmluZ1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlJlZGlnZXJpbmdza29udHVyZmFydmVcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlJlZGlnZXJpbmdza29udHVyYnJlZGRlXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRla3N0anVzdGVyaW5nXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGVrc3R1ZGZ5bGRuaW5nXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiTGluamVoXHUwMEY4amRlXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiTFx1MDBFNnJyZWRzYmFnZ3J1bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJOdWxzdGlsXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiTHVrXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiVmlzIHZcdTAwRTZya3RcdTAwRjhqc2xpbmplXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiVlx1MDBFNnJrdFx1MDBGOGpzbGluamV1ZGZ5bGRuaW5nXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlRvcFwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJIXHUwMEY4anJlXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkJ1bmRcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiVmVuc3RyZVwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlZcdTAwRTZya3RcdTAwRjhqc2xpbmplcG9zaXRpb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJUb3BcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJCdW5kXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJWXHUwMEU2cmt0XHUwMEY4anNsaW5qZWJhZ2dydW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJLbmFwYmFnZ3J1bmRcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJLbmFwIGthbnRzdGlsXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJLbmFwIGthbnRmYXJ2ZVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJLbmFwIHRla3N0ZmFydmVcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJOdWxzdGlsIHZcdTAwRTZya3RcdTAwRjhqc2xpbmplXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEtudWRlc3RpbFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJMaW5qZWZhcnZlXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxpbmplYnJlZGRlXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiUnlkIHRpbHBhc25pbmdcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGl1c1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJTXHUwMEY4ZyBpIGtudWRlci4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJvZFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk55IHJvZFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJCYXJuXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBJbmRzdGlsbGluZ2VyXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3Byb2dcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiR3JcdTAwRTZuc2VmbGFkZXNwcm9nXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRlbWFcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIkZhcnZldGVtYVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJMeXN0XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiTVx1MDBGOHJrdFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlZpcyB2XHUwMEU2cmt0XHUwMEY4anNsaW5qZVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJWaXMgdlx1MDBFNnJrdFx1MDBGOGpzbGluamVcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiTFx1MDBFNnJyZWRzYmFnZ3J1bmRcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkJhZ2dydW5kc2ZhcnZlXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIk9tXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiRm9yZmF0dGVyXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJFbiBmdW5rdGlvbnNyaWcgb3BlbiBzb3VyY2UtdGFua2Vrb3J0YXBwIHRpbCBPYnNpZGlhbiBtZWQgYnJ1Z2VyZGVmaW5lcmVkZSBzdGlsYXJ0ZXIsIHJlZ25idWVmb3JiaW5kZWxzZXIsIG11bHRpdmFsZywgdHJcdTAwRTZrLW9nLXNsaXAgb2cgTWFya2Rvd24taW1wb3J0L2Vrc3BvcnQuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiT3BkYXRlcmV0XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItYXJraXZcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlN0XHUwMEY4dCBvcGVuIHNvdXJjZS1mb3JmYXR0ZXJlblwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlRhc3RhdHVyZ2VudmVqZVwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJUaWxwYXMgZ2VudmVqZVwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJSZWRpZ1x1MDBFOXIga251ZGVcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiVGlsZlx1MDBGOGogc1x1MDBGOHNrZW5kZVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiVGlsZlx1MDBGOGogYmFyblwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiRm9rdXNcdTAwRTlyIHBcdTAwRTUga251ZGVcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiRm9ydHJ5ZFwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJHZW50YWdcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJMaW5qZXNraWZ0ICh1bmRlciByZWRpZ2VyaW5nKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJUclx1MDBFNmsgbFx1MDBFNnJyZWRcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJab29tIGluZFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJab29tIHVkXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiTnVsc3RpbCB6b29tXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJOYXZpZ1x1MDBFOXIgb3BcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiTmF2aWdcdTAwRTlyIG5lZFwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJOYXZpZ1x1MDBFOXIgdmVuc3RyZVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWdcdTAwRTlyIGhcdTAwRjhqcmVcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlRyeWsgcFx1MDBFNSBlbiB0YXN0Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJSdWxuaW5nIG9nIHpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnRlciBsb2RyZXQgcnVsbmluZ1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVydGVyIHZhbmRyZXQgcnVsbmluZ1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGVyIHpvb21yZXRuaW5nXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJSZWRpZ1x1MDBFOXIgdmVkIG9wcmV0dGVsc2VcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJSZWRpZ2VyaW5nc3RpbHN0YW5kIHZlZCBueWUga251ZGVyXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlJvZG5hdm5cIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmF2biBmb3IgbnllIHJcdTAwRjhkZGVyXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJCYXJuZW5hdm5cIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJTdGFuZGFyZG5hdm4gZm9yIG55ZSBiXHUwMEY4cm5cIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJTa3JpdiBmb3IgYXQgcmVkaWdlcmVcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiUmVkaWdcdTAwRTlyIHZlZCBhdCBza3JpdmUgblx1MDBFNXIgZW4ga251ZGUgZXIgdmFsZ3RcIixcclxufTtcclxuXHJcbmNvbnN0IF9oZTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTA1RTlcdTA1RDVcdTA1RThcdTA1RTlcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTA1RDFcdTA1RDhcdTA1RENcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTA1RDFcdTA1RTZcdTA1RTIgXHUwNUU5XHUwNUQ1XHUwNUQxXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBcdTA1REVcdTA1RTRcdTA1RDRcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiXHUwNURFXHUwNUQ5XHUwNUU3XHUwNUQ1XHUwNUQzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlx1MDVEN1x1MDVEOVx1MDVFNFx1MDVENVx1MDVFOVwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlx1MDVEN1x1MDVEOVx1MDVFNFx1MDVENVx1MDVFOSB8IFx1MDVFOFx1MDVENVx1MDVENVx1MDVENzpcdTA1RTJcdTA1RThcdTA1RDlcdTA1REJcdTA1RDQgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJcdTA1RTlcdTA1RDVcdTA1RThcdTA1RTkgXHUwNUQ3XHUwNUQzXHUwNUU5XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIlx1MDVERVx1MDVFNlx1MDVEMSBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlx1MDVEN1x1MDVEQ1x1MDVENVx1MDVFMFx1MDVEOVx1MDVFQSBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REZcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJcdTA1REVcdTA1RTdcdTA1RDMgXHUwNUUyXHUwNURDIFx1MDVFNlx1MDVENVx1MDVERVx1MDVFQVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJcdTA1RDdcdTA1RTRcdTA1RTkgXHUwNUU2XHUwNURFXHUwNUVBXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHUwNUQ0XHUwNUQyXHUwNUQzXHUwNUU4XHUwNUQ1XHUwNUVBXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1MDVENFx1MDVEMlx1MDVEM1x1MDVEQ1wiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHUwNUQ0XHUwNUU3XHUwNUQ4XHUwNURGXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1MDVERVx1MDVENVx1MDVFQVx1MDVEMFx1MDVERCBcdTA1RDBcdTA1RDlcdTA1RTlcdTA1RDlcdTA1RUFcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDVERVx1MDVEN1x1MDVEOVx1MDVFN1x1MDVENCBcdTA1RDJcdTA1RDVcdTA1RThcdTA1RTRcdTA1RUFcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA1RTJcdTA1RThcdTA1RDVcdTA1REEgXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOSBcdTA1RDdcdTA1RDNcdTA1RTlcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHUwNUQxXHUwNUQ4XHUwNURDXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFx1MDVEMVx1MDVFNlx1MDVFMiBcdTA1RTlcdTA1RDVcdTA1RDFcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDVFMVx1MDVEMlx1MDVFMFx1MDVENVx1MDVERiBcdTA1REJcdTA1RENcdTA1RENcdTA1RDlcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHUwNUUyXHUwNUU4XHUwNUQ1XHUwNURBXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REZcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgXHUwNUQ0XHUwNUUyXHUwNUVBXHUwNUU3XCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgXHUwNUQyXHUwNUQ2XHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBcdTA1RDRcdTA1RDNcdTA1RDFcdTA1RTdcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IFx1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFx1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMCBcdTA1RTlcdTA1REVcdTA1RDBcdTA1RENcdTA1RDlcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgXHUwNUQwXHUwNUQ3XCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHUwNURFXHUwNUQ3XHUwNUU3XCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlx1MDVENFx1MDVFMVx1MDVFQVx1MDVFOCBcdTA1RTFcdTA1RThcdTA1RDJcdTA1REMgXHUwNURCXHUwNURDXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDVFMVx1MDVEMlx1MDVFMFx1MDVENVx1MDVERiBcdTA1REJcdTA1RENcdTA1RENcdTA1RDlcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJcdTA1RTZcdTA1RDVcdTA1REVcdTA1RUEgXHUwNUU2XHUwNUQwXHUwNUU2XHUwNUQwXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJcdTA1RTZcdTA1RDVcdTA1REVcdTA1RUEgXHUwNUU5XHUwNUQ1XHUwNUU4XHUwNUU5XCIsXHJcbiAgICBcInNtLmJnXCI6IFwiXHUwNUU4XHUwNUU3XHUwNUUyXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNUQ4XHUwNUU3XHUwNUUxXHUwNUQ4XCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiXHUwNUQyXHUwNUQ1XHUwNUQzXHUwNURDIFx1MDVEMlx1MDVENVx1MDVFNFx1MDVERlwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiXHUwNUQyXHUwNUQ1XHUwNUU0XHUwNURGXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGIFx1MDVEMlx1MDVEMVx1MDVENVx1MDVEQ1wiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMiBcdTA1RDJcdTA1RDFcdTA1RDVcdTA1RENcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJcdTA1RTJcdTA1RDVcdTA1RDFcdTA1RDkgXHUwNUQyXHUwNUQxXHUwNUQ1XHUwNURDXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlx1MDVFMlx1MDVEOVx1MDVEMlx1MDVENVx1MDVEQyBcdTA1RTRcdTA1RDlcdTA1RTBcdTA1RDVcdTA1RUFcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJcdTA1RThcdTA1RDVcdTA1RDdcdTA1RDEgXHUwNURFXHUwNUQ5XHUwNUUwXHUwNUQ5XHUwNURFXHUwNURDXHUwNUQ5XCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIlx1MDVEMlx1MDVENVx1MDVEMVx1MDVENCBcdTA1REVcdTA1RDlcdTA1RTBcdTA1RDlcdTA1REVcdTA1RENcdTA1RDlcIixcclxuICAgIFwic20uY29ublwiOiBcIlx1MDVFN1x1MDVENSBcdTA1RDdcdTA1RDlcdTA1RDFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1MDVFMVx1MDVENVx1MDVEMlwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMlwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1MDVFOFx1MDVENVx1MDVEN1x1MDVEMVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHUwNUQwXHUwNUQ1XHUwNUU4XHUwNURBXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdTA1RTdcdTA1RTlcdTA1RUFcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlx1MDVEQlx1MDVEOVx1MDVENVx1MDVENVx1MDVERiBcdTA1RTZcdTA1REVcdTA1RUFcdTA1RDlcdTA1RERcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdTA1RDlcdTA1REVcdTA1RDlcdTA1REZcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1MDVFOVx1MDVERVx1MDVEMFx1MDVEQ1wiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHUwNUU5XHUwNUUwXHUwNUQ5XHUwNUQ0XHUwNUREXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHUwNURDXHUwNUQ1XHUwNUQ3IFx1MDVFNlx1MDVEMVx1MDVFMlx1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJcdTA1RDFcdTA1RDdcdTA1RDlcdTA1RThcdTA1RDRcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNUQxXHUwNUQ3XHUwNUQ5XHUwNUU4XHUwNUQ0XCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiXHUwNUUyXHUwNUQ1XHUwNUQxXHUwNUQ5IFx1MDVEMVx1MDVEN1x1MDVEOVx1MDVFOFx1MDVENFwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTA1RDRcdTA1RDlcdTA1RTFcdTA1RDggXHUwNURFXHUwNUVBXHUwNUQwXHUwNUU4XCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVERVx1MDVFQVx1MDVEMFx1MDVFOCBcdTA1RTJcdTA1RThcdTA1RDlcdTA1REJcdTA1RDRcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1MDVFMlx1MDVENVx1MDVEMVx1MDVEOSBcdTA1REVcdTA1RUFcdTA1RDBcdTA1RTggXHUwNUUyXHUwNUU4XHUwNUQ5XHUwNURCXHUwNUQ0XCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1MDVEOVx1MDVEOVx1MDVFOVx1MDVENVx1MDVFOCBcdTA1RDhcdTA1RTdcdTA1RTFcdTA1RDhcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJcdTA1RThcdTA1RDlcdTA1RTRcdTA1RDVcdTA1RDMgXHUwNUQ4XHUwNUU3XHUwNUUxXHUwNUQ4XCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHUwNUQyXHUwNUQ1XHUwNUQxXHUwNUQ0IFx1MDVFOVx1MDVENVx1MDVFOFx1MDVENFwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1RDFcdTA1RDMgXHUwNUU2XHUwNUQ5XHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiXHUwNUQwXHUwNUU0XHUwNUUxXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiXHUwNUUxXHUwNUQyXHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiXHUwNUQ0XHUwNUU2XHUwNUQyIFx1MDVFMVx1MDVFOFx1MDVEMlx1MDVEQyBcdTA1REJcdTA1RENcdTA1RDlcdTA1RERcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdTA1RThcdTA1RDlcdTA1RTRcdTA1RDVcdTA1RDMgXHUwNUUxXHUwNUU4XHUwNUQyXHUwNURDXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1MDVFMlx1MDVEQ1x1MDVEOVx1MDVENVx1MDVERlwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTA1RDlcdTA1REVcdTA1RDlcdTA1REZcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHUwNUVBXHUwNUQ3XHUwNUVBXHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1MDVFOVx1MDVERVx1MDVEMFx1MDVEQ1wiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MDVERVx1MDVEOVx1MDVFN1x1MDVENVx1MDVERCBcdTA1RTFcdTA1RThcdTA1RDJcdTA1RENcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTA1RTJcdTA1RENcdTA1RDlcdTA1RDVcdTA1REZcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTA1RUFcdTA1RDdcdTA1RUFcdTA1RDVcdTA1REZcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1RTFcdTA1RThcdTA1RDJcdTA1RENcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1REJcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REYgXHUwNUQyXHUwNUQxXHUwNUQ1XHUwNURDIFx1MDVEQlx1MDVFNFx1MDVFQVx1MDVENVx1MDVFOFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVEMlx1MDVEMVx1MDVENVx1MDVEQyBcdTA1REJcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVEOFx1MDVFN1x1MDVFMVx1MDVEOCBcdTA1REJcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTA1RDBcdTA1RTRcdTA1RTEgXHUwNUUxXHUwNUU4XHUwNUQyXHUwNURDIFx1MDVEQlx1MDVEQ1x1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REYgXHUwNUU2XHUwNUQ1XHUwNURFXHUwNUVBXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMiBcdTA1RTdcdTA1RDVcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHUwNUUyXHUwNUQ1XHUwNUQxXHUwNUQ5IFx1MDVFN1x1MDVENVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlx1MDVFMFx1MDVFN1x1MDVENCBcdTA1RDRcdTA1RUFcdTA1RDBcdTA1REVcdTA1RDQgXHUwNUQwXHUwNUQ5XHUwNUU5XHUwNUQ5XHUwNUVBXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlx1MDVFMlx1MDVEOVx1MDVEMlx1MDVENVx1MDVEQyBcdTA1RTRcdTA1RDlcdTA1RTBcdTA1RDVcdTA1RUFcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiXHUwNUQ3XHUwNUU0XHUwNUU5IFx1MDVFNlx1MDVERVx1MDVFQVx1MDVEOVx1MDVERC4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOVwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOSBcdTA1RDdcdTA1RDNcdTA1RTlcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHUwNUU2XHUwNUQwXHUwNUU2XHUwNUQwXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIlx1MDVENFx1MDVEMlx1MDVEM1x1MDVFOFx1MDVENVx1MDVFQSBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdTA1RTlcdTA1RTRcdTA1RDRcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHUwNUU5XHUwNUU0XHUwNUVBIFx1MDVERVx1MDVERVx1MDVFOVx1MDVFN1wiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdTA1RTJcdTA1RThcdTA1REJcdTA1RUEgXHUwNUUwXHUwNUQ1XHUwNUU5XHUwNUQwXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJcdTA1RTJcdTA1RThcdTA1REJcdTA1RUEgXHUwNUU2XHUwNUQxXHUwNUUyXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIlx1MDVEMVx1MDVENFx1MDVEOVx1MDVFOFwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIlx1MDVEQlx1MDVENFx1MDVENFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlx1MDVENFx1MDVFNlx1MDVEMiBcdTA1RTFcdTA1RThcdTA1RDJcdTA1REMgXHUwNURCXHUwNURDXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1MDVENFx1MDVFNlx1MDVEMiBcdTA1RTFcdTA1RThcdTA1RDJcdTA1REMgXHUwNURCXHUwNURDXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1RDFcdTA1RDMgXHUwNUU2XHUwNUQ5XHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNUU4XHUwNUU3XHUwNUUyXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1MDVEMFx1MDVENVx1MDVEM1x1MDVENVx1MDVFQVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1MDVEMlx1MDVFOFx1MDVFMVx1MDVENFwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHUwNURFXHUwNUQ3XHUwNUQxXHUwNUU4XCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJcdTA1RDBcdTA1RTRcdTA1RENcdTA1RDlcdTA1RTdcdTA1RTZcdTA1RDlcdTA1RDlcdTA1RUEgXHUwNURFXHUwNUU0XHUwNUVBIFx1MDVEN1x1MDVFOVx1MDVEOVx1MDVEMVx1MDVENCBcdTA1RDFcdTA1RTdcdTA1RDVcdTA1RDMgXHUwNUU0XHUwNUVBXHUwNUQ1XHUwNUQ3IFx1MDVFMlx1MDVFOVx1MDVEOVx1MDVFOFx1MDVENCBcdTA1RDFcdTA1RUFcdTA1REJcdTA1RDVcdTA1RTBcdTA1RDVcdTA1RUEgXHUwNUUyXHUwNUQxXHUwNUQ1XHUwNUU4IE9ic2lkaWFuIFx1MDVFMlx1MDVERCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1RTBcdTA1RDVcdTA1RUEgXHUwNURFXHUwNUQ1XHUwNUVBXHUwNUQwXHUwNURFXHUwNUQ5XHUwNURELCBcdTA1RDdcdTA1RDlcdTA1RDFcdTA1RDVcdTA1RThcdTA1RDkgXHUwNUU3XHUwNUU5XHUwNUVBLCBcdTA1RDFcdTA1RDdcdTA1RDlcdTA1RThcdTA1RDQgXHUwNURFXHUwNUU4XHUwNUQ1XHUwNUQxXHUwNUQ0LCBcdTA1RDJcdTA1RThcdTA1RDlcdTA1RThcdTA1RDQgXHUwNUQ1XHUwNUU5XHUwNUQ3XHUwNUU4XHUwNUQ1XHUwNUU4IFx1MDVENVx1MDVEOVx1MDVEOVx1MDVEMVx1MDVENVx1MDVEMC9cdTA1RDlcdTA1RDlcdTA1RTZcdTA1RDVcdTA1RDAgTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHUwNUUyXHUwNUQ1XHUwNUQzXHUwNURCXHUwNURGXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJcdTA1REVcdTA1RDBcdTA1RDJcdTA1RTggR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdTA1RUFcdTA1REVcdTA1RDVcdTA1REEgXHUwNUQxXHUwNURFXHUwNUQ3XHUwNUQxXHUwNUU4IFx1MDVENFx1MDVFN1x1MDVENVx1MDVEMyBcdTA1RDRcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RDdcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJcdTA1RTdcdTA1RDlcdTA1RTZcdTA1RDVcdTA1RThcdTA1RDkgXHUwNURFXHUwNUU3XHUwNURDXHUwNUQzXHUwNUVBXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1MDVENFx1MDVFQVx1MDVEMFx1MDVERCBcdTA1RTdcdTA1RDlcdTA1RTZcdTA1RDVcdTA1RThcdTA1RDlcdTA1RERcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUwNUUyXHUwNUU4XHUwNUQ1XHUwNURBIFx1MDVFNlx1MDVENVx1MDVERVx1MDVFQVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJcdTA1RDRcdTA1RDVcdTA1RTFcdTA1RTMgXHUwNUQwXHUwNUQ3XCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJcdTA1RDRcdTA1RDVcdTA1RTFcdTA1RTMgXHUwNUU2XHUwNUQwXHUwNUU2XHUwNUQwXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdTA1REVcdTA1RTdcdTA1RDMgXHUwNUUyXHUwNURDIFx1MDVFNlx1MDVENVx1MDVERVx1MDVFQVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTA1RDFcdTA1RDhcdTA1RENcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHUwNUQxXHUwNUU2XHUwNUUyIFx1MDVFOVx1MDVENVx1MDVEMVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1MDVFOVx1MDVEMVx1MDVEOVx1MDVFOFx1MDVFQSBcdTA1RTlcdTA1RDVcdTA1RThcdTA1RDQgKFx1MDVEMVx1MDVFMlx1MDVFOFx1MDVEOVx1MDVEQlx1MDVENClcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiXHUwNUQyXHUwNUU4XHUwNUQ1XHUwNUU4IFx1MDVEMVx1MDVEMyBcdTA1RTZcdTA1RDlcdTA1RDVcdTA1RThcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTA1RDRcdTA1RDJcdTA1RDNcdTA1RENcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHUwNUQ0XHUwNUU3XHUwNUQ4XHUwNURGXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUwNUQwXHUwNUU0XHUwNUUxIFx1MDVFQVx1MDVFN1x1MDVFOFx1MDVEOVx1MDVEMVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHUwNUUwXHUwNUQ1XHUwNUQ1XHUwNUQ4IFx1MDVEQ1x1MDVERVx1MDVFMlx1MDVEQ1x1MDVENFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTA1RTBcdTA1RDVcdTA1RDVcdTA1RDggXHUwNURDXHUwNURFXHUwNUQ4XHUwNUQ0XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1MDVFMFx1MDVENVx1MDVENVx1MDVEOCBcdTA1RTlcdTA1REVcdTA1RDBcdTA1RENcdTA1RDRcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1MDVFMFx1MDVENVx1MDVENVx1MDVEOCBcdTA1RDlcdTA1REVcdTA1RDlcdTA1RTBcdTA1RDRcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1MDVEQ1x1MDVEN1x1MDVFNSBcdTA1RTJcdTA1REMgXHUwNURFXHUwNUU3XHUwNUU5Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJcdTA1RDJcdTA1RENcdTA1RDlcdTA1RENcdTA1RDQgXHUwNUQ1XHUwNUVBXHUwNUU3XHUwNUU4XHUwNUQ5XHUwNUQxXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHUwNUQ0XHUwNUU0XHUwNUQ1XHUwNURBIFx1MDVEMlx1MDVEQ1x1MDVEOVx1MDVEQ1x1MDVENCBcdTA1RDBcdTA1RTBcdTA1REJcdTA1RDlcdTA1RUFcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJcdTA1RDRcdTA1RTRcdTA1RDVcdTA1REEgXHUwNUQyXHUwNURDXHUwNUQ5XHUwNURDXHUwNUQ0IFx1MDVEMFx1MDVENVx1MDVFNFx1MDVFN1x1MDVEOVx1MDVFQVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MDVENFx1MDVFNFx1MDVENVx1MDVEQSBcdTA1REJcdTA1RDlcdTA1RDVcdTA1RDVcdTA1REYgXHUwNUVBXHUwNUU3XHUwNUU4XHUwNUQ5XHUwNUQxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTA1RTJcdTA1RThcdTA1RDVcdTA1REEgXHUwNUQxXHUwNUQ5XHUwNUU2XHUwNUQ5XHUwNUU4XHUwNUQ0XCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUwNURFXHUwNUU2XHUwNUQxIFx1MDVFMlx1MDVFOFx1MDVEOVx1MDVEQlx1MDVENCBcdTA1RDFcdTA1RTJcdTA1RUEgXHUwNUQ5XHUwNUU2XHUwNUQ5XHUwNUU4XHUwNUVBIFx1MDVFNlx1MDVERVx1MDVFQVx1MDVEOVx1MDVERCBcdTA1RDdcdTA1RDNcdTA1RTlcdTA1RDlcdTA1RERcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHUwNUU5XHUwNUREIFx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHUwNUU5XHUwNUREIFx1MDVEMVx1MDVFOFx1MDVEOVx1MDVFOFx1MDVFQSBcdTA1REVcdTA1RDdcdTA1RDNcdTA1REMgXHUwNURDXHUwNUU5XHUwNUQ1XHUwNUU4XHUwNUU5XHUwNUQ5XHUwNUREIFx1MDVEN1x1MDVEM1x1MDVFOVx1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiXHUwNUU5XHUwNUREIFx1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlx1MDVFOVx1MDVERCBcdTA1RDFcdTA1RThcdTA1RDlcdTA1RThcdTA1RUEgXHUwNURFXHUwNUQ3XHUwNUQzXHUwNURDIFx1MDVEQ1x1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFx1MDVEOVx1MDVERCBcdTA1RDdcdTA1RDNcdTA1RTlcdTA1RDlcdTA1RERcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJcdTA1RDRcdTA1RTdcdTA1RENcdTA1RDMgXHUwNURDXHUwNUUyXHUwNUU4XHUwNUQ5XHUwNURCXHUwNUQ0XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlx1MDVFMlx1MDVFOFx1MDVENVx1MDVEQSBcdTA1RTJcdTA1REMgXHUwNUQ5XHUwNUQzXHUwNUQ5IFx1MDVENFx1MDVFN1x1MDVEQ1x1MDVEM1x1MDVENCBcdTA1REJcdTA1RTlcdTA1RTZcdTA1RDVcdTA1REVcdTA1RUEgXHUwNUUwXHUwNUQxXHUwNUQ3XHUwNUU4XCIsXHJcbn07XHJcblxyXG5jb25zdCBfaXQ6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUmFkaWNlXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgQW5udWxsYVwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJpcGV0aVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgTWFwcGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbGVcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJNZXNzYSBhIGZ1b2NvXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIkNlcmNhXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6Q2VyY2EgfCBTcGF6aW86TW9kaWZpY2EgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOdW92YSByYWRpY2VcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTW9kYWxpdFx1MDBFMCBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlBhbm5lbGxvIHN0aWxlXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiTWVzc2EgYSBmdW9jbyBzdWwgbm9kb1wiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJDZXJjYSBub2RpXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiSW1wb3N0YXppb25pXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIkluZ3JhbmRpc2NpXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJSaWR1Y2lcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgUGVyc29uYWxpenphdG9cIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEVsaW1pbmEgaW4gYmxvY2NvXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggTW9kaWZpY2Egc3RpbGVcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTnVvdmEgcmFkaWNlXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IEFubnVsbGFcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgUmlwZXRpXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsZSBnbG9iYWxlXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIE1vZGlmaWNhXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsZVwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBDb3BpYVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFRhZ2xpYVwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgSW5jb2xsYVwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgRmlnbGlvXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgRmlnbGlvIHNpbmlzdHJvXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEZyYXRlbGxvXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgRWxpbWluYVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJOYXNjb25kaSBiYXJyYSBkZWdsaSBzdHJ1bWVudGlcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbGUgZ2xvYmFsZVwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIk5vZG8gZmlnbGlvXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJOb2RvIHJhZGljZVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlNmb25kb1wiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiQ29sb3JlIHRlc3RvXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiRGltZW5zaW9uZSBjYXJhdHRlcmVcIixcclxuICAgIFwic20uZm9udFwiOiBcIkNhcmF0dGVyZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlN0aWxlIGJvcmRvXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiQ29sb3JlIGJvcmRvXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiTGFyZ2hlenphIGJvcmRvXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlJhZ2dpbyBib3Jkb1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIkxhcmdoZXp6YSBtaW4uXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIkFsdGV6emEgbWluLlwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiQ29ubmVzc2lvbmVcIixcclxuICAgIFwic20udHlwZVwiOiBcIlRpcG9cIixcclxuICAgIFwic20uY29sb3JcIjogXCJDb2xvcmVcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJMYXJnaGV6emFcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkx1bmdoZXp6YVwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiQXJjb2JhbGVub1wiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiRGlyZXppb25lIG5vZGlcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJEZXN0cmFcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlNpbmlzdHJhXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJFbnRyYW1iaVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlRhdm9sb3p6YVwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJTZWxlemlvbmVcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJDb2xvcmUgc2VsZXppb25lXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiTGFyZ2hlenphIHNlbGV6aW9uZVwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJTY29zdGFtZW50byBjb250b3Jub1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIkNvbG9yZSBjb250b3JubyBtb2RpZmljYVwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiTGFyZ2hlenphIGNvbnRvcm5vIG1vZGlmaWNhXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIkFsbGluZWFtZW50byB0ZXN0b1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlJpZW1waW1lbnRvIHRlc3RvXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiQWx0ZXp6YSByaWdhXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiU2ZvbmRvIGFyZWEgZGkgbGF2b3JvXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiUmlwcmlzdGluYVwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIkNoaXVkaVwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIk1vc3RyYSBiYXJyYSBzdHJ1bWVudGlcIixcclxuICAgIFwic20udGJQYWRcIjogXCJSaWVtcGltZW50byBiYXJyYVwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJTdXBlcmlvcmVcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiRGVzdHJvXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkluZmVyaW9yZVwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJTaW5pc3Ryb1wiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlBvc2l6aW9uZSBiYXJyYVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlN1cGVyaW9yZVwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIkluZmVyaW9yZVwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiU2ZvbmRvIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJTZm9uZG8gcHVsc2FudGVcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJTdGlsZSBib3JkbyBwdWxzYW50ZVwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiQ29sb3JlIGJvcmRvIHB1bHNhbnRlXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIkNvbG9yZSB0ZXN0byBwdWxzYW50ZVwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlJpcHJpc3RpbmEgYmFycmEgc3RydW1lbnRpXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxlIG5vZG9cIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiQ29sb3JlIGxpbmVhXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxhcmdoZXp6YSBsaW5lYVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkNhbmNlbGxhIHBlcnNvbmFsaXp6YXppb25lXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlJhZ2dpbyBib3Jkb1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJDZXJjYSBub2RpLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiUmFkaWNlXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTnVvdmEgcmFkaWNlXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkZpZ2xpb1wiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJJbXBvc3RhemlvbmkgTWluZFpKXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiTGluZ3VhXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIkxpbmd1YSBkZWxsJ2ludGVyZmFjY2lhXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRlbWFcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlRlbWEgY29sb3JpXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkNoaWFyb1wiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIlNjdXJvXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiTW9zdHJhIGJhcnJhIHN0cnVtZW50aVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJNb3N0cmEgYmFycmEgc3RydW1lbnRpXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIlNmb25kbyBhcmVhIGRpIGxhdm9yb1wiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQ29sb3JlIGRpIHNmb25kb1wiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJJbmZvcm1hemlvbmlcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaW9uZVwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0b3JlXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJBcHAgZGkgbWFwcGUgbWVudGFsaSBvcGVuIHNvdXJjZSByaWNjYSBkaSBmdW56aW9uYWxpdFx1MDBFMCBwZXIgT2JzaWRpYW4gY29uIHN0aWxpIHBlcnNvbmFsaXp6YXRpLCBjb25uZXNzaW9uaSBhcmNvYmFsZW5vLCBzZWxlemlvbmUgbXVsdGlwbGEsIHRyYXNjaW5hbWVudG8gZSBpbXBvcnRhemlvbmUvZXNwb3J0YXppb25lIE1hcmtkb3duLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIkFnZ2lvcm5hdG9cIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIlJlcG9zaXRvcnkgR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJTdXBwb3J0YSBsJ2F1dG9yZSBvcGVuIHNvdXJjZVwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlNjb3JjaWF0b2llIGRhIHRhc3RpZXJhXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlBlcnNvbmFsaXp6YSBzY29yY2lhdG9pZVwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJNb2RpZmljYSBub2RvXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkFnZ2l1bmdpIGZyYXRlbGxvXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJBZ2dpdW5naSBmaWdsaW9cIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIk1lc3NhIGEgZnVvY28gc3VsIG5vZG9cIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiQW5udWxsYVwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJSaXBldGlcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJBIGNhcG8gKGluIG1vZGlmaWNhKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJUcmFzY2luYSBhcmVhIGRpIGxhdm9yb1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIkluZ3JhbmRpc2NpXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlJpZHVjaVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlJlaW1wb3N0YSB6b29tXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJOYXZpZ2Egc3VcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiTmF2aWdhIGdpXHUwMEY5XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hdmlnYSBhIHNpbmlzdHJhXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJOYXZpZ2EgYSBkZXN0cmFcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlByZW1pIHVuIHRhc3RvLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJTY29ycmltZW50byBlIHpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnRpIHNjb3JyaW1lbnRvIHZlcnRpY2FsZVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVydGkgc2NvcnJpbWVudG8gb3JpenpvbnRhbGVcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnRpIGRpcmV6aW9uZSB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJNb2RpZmljYSBhbGxhIGNyZWF6aW9uZVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIk1vZGFsaXRcdTAwRTAgbW9kaWZpY2EgYWxsYSBjcmVhemlvbmUgZGVpIG5vZGlcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiTm9tZSByYWRpY2VcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIk5vbWUgcHJlZGVmaW5pdG8gcGVyIG51b3ZlIHJhZGljaVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiTm9tZSBmaWdsaW9cIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJOb21lIHByZWRlZmluaXRvIHBlciBudW92aSBmaWdsaVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIkRpZ2l0YSBwZXIgbW9kaWZpY2FyZVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJNb2RpZmljYSBkaWdpdGFuZG8gcXVhbmRvIHVuIG5vZG8gXHUwMEU4IHNlbGV6aW9uYXRvXCIsXHJcbn07XHJcblxyXG5jb25zdCBfYXI6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgXHUwNjJDXHUwNjMwXHUwNjMxXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgXHUwNjJBXHUwNjMxXHUwNjI3XHUwNjJDXHUwNjM5XCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgXHUwNjI1XHUwNjM5XHUwNjI3XHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBcdTA2MkVcdTA2MzFcdTA2NEFcdTA2MzdcdTA2MjlcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNjQ2XHUwNjQ1XHUwNjM3XCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiXHUwNjJBXHUwNjMxXHUwNjQzXHUwNjRBXHUwNjMyXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlx1MDYyOFx1MDYyRFx1MDYyQlwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlx1MDYyOFx1MDYyRFx1MDYyQiB8IFx1MDY0NVx1MDYzM1x1MDYyN1x1MDY0MVx1MDYyOTpcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzEgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJcdTA2MkNcdTA2MzBcdTA2MzEgXHUwNjJDXHUwNjJGXHUwNjRBXHUwNjJGXCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIlx1MDY0OFx1MDYzNlx1MDYzOSBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlx1MDY0NFx1MDY0OFx1MDYyRFx1MDYyOSBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2NDZcdTA2NDVcdTA2MjdcdTA2MzdcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MzFcdTA2NDNcdTA2NEFcdTA2MzIgXHUwNjM5XHUwNjQ0XHUwNjQ5IFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0Mlx1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJcdTA2MjdcdTA2NDRcdTA2MjhcdTA2MkRcdTA2MkIgXHUwNjQxXHUwNjRBIFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0Mlx1MDYyRlwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIlx1MDYyN1x1MDY0NFx1MDYyNVx1MDYzOVx1MDYyRlx1MDYyN1x1MDYyRlx1MDYyN1x1MDYyQVwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJcdTA2MkFcdTA2NDNcdTA2MjhcdTA2NEFcdTA2MzFcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlx1MDYyQVx1MDYzNVx1MDYzQVx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBcdTA2NDVcdTA2MkVcdTA2MzVcdTA2MzVcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDYyRFx1MDYzMFx1MDY0MSBcdTA2MkNcdTA2NDVcdTA2MjdcdTA2MzlcdTA2NEFcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzEgXHUwNjI3XHUwNjQ0XHUwNjQ2XHUwNjQ1XHUwNjM3XCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFx1MDYyQ1x1MDYzMFx1MDYzMSBcdTA2MkNcdTA2MkZcdTA2NEFcdTA2MkZcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHUwNjJBXHUwNjMxXHUwNjI3XHUwNjJDXHUwNjM5XCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFx1MDYyNVx1MDYzOVx1MDYyN1x1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNjI3XHUwNjQ0XHUwNjQ2XHUwNjQ1XHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYzOVx1MDYyN1x1MDY0NVwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzFcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDY0Nlx1MDY0NVx1MDYzN1wiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBcdTA2NDZcdTA2MzNcdTA2MkVcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBcdTA2NDJcdTA2MzVcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFx1MDY0NFx1MDYzNVx1MDY0MlwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgXHUwNjQxXHUwNjMxXHUwNjM5XCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgXHUwNjQxXHUwNjMxXHUwNjM5IFx1MDYyM1x1MDY0QVx1MDYzM1x1MDYzMVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdTA2MzRcdTA2NDJcdTA2NEFcdTA2NDJcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTA2MkRcdTA2MzBcdTA2NDFcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHUwNjI1XHUwNjJFXHUwNjQxXHUwNjI3XHUwNjIxIFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2MkZcdTA2NDhcdTA2MjdcdTA2MkFcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNjI3XHUwNjQ0XHUwNjQ2XHUwNjQ1XHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYzOVx1MDYyN1x1MDY0NVwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIlx1MDYzOVx1MDY0Mlx1MDYyRlx1MDYyOSBcdTA2NDFcdTA2MzFcdTA2MzlcdTA2NEFcdTA2MjlcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlx1MDYzOVx1MDY0Mlx1MDYyRlx1MDYyOSBcdTA2MkNcdTA2MzBcdTA2MzFcdTA2NEFcdTA2MjlcIixcclxuICAgIFwic20uYmdcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkVcdTA2NDRcdTA2NDFcdTA2NEFcdTA2MjlcIixcclxuICAgIFwic20udGV4dFwiOiBcIlx1MDY0NFx1MDY0OFx1MDY0NiBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2MzVcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJcdTA2MkRcdTA2MkNcdTA2NDUgXHUwNjI3XHUwNjQ0XHUwNjJFXHUwNjM3XCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkVcdTA2MzdcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJcdTA2NDZcdTA2NDVcdTA2MzcgXHUwNjI3XHUwNjQ0XHUwNjJEXHUwNjJGXHUwNjQ4XHUwNjJGXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYyRFx1MDYyRlx1MDY0OFx1MDYyRlwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlx1MDYzOVx1MDYzMVx1MDYzNiBcdTA2MjdcdTA2NDRcdTA2MkRcdTA2MkZcdTA2NDhcdTA2MkZcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiXHUwNjJBXHUwNjQyXHUwNjQ4XHUwNjRBXHUwNjMzIFx1MDYyN1x1MDY0NFx1MDYzMlx1MDY0OFx1MDYyN1x1MDY0QVx1MDYyN1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyRFx1MDYyRiBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2MkZcdTA2NDZcdTA2NDkgXHUwNjQ0XHUwNjQ0XHUwNjM5XHUwNjMxXHUwNjM2XCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyRFx1MDYyRiBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2MkZcdTA2NDZcdTA2NDkgXHUwNjQ0XHUwNjQ0XHUwNjI3XHUwNjMxXHUwNjJBXHUwNjQxXHUwNjI3XHUwNjM5XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJcdTA2MkVcdTA2MzcgXHUwNjI3XHUwNjQ0XHUwNjQ4XHUwNjM1XHUwNjQ0XCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJcdTA2MjdcdTA2NDRcdTA2NDZcdTA2NDhcdTA2MzlcIixcclxuICAgIFwic20uY29sb3JcIjogXCJcdTA2MjdcdTA2NDRcdTA2NDRcdTA2NDhcdTA2NDZcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJcdTA2MjdcdTA2NDRcdTA2MzlcdTA2MzFcdTA2MzZcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYzN1x1MDY0OFx1MDY0NFwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHUwNjQyXHUwNjQ4XHUwNjMzIFx1MDY0Mlx1MDYzMlx1MDYyRFwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiXHUwNjI3XHUwNjJBXHUwNjJDXHUwNjI3XHUwNjQ3IFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0Mlx1MDYyRlwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlx1MDY0QVx1MDY0NVx1MDY0QVx1MDY0NlwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiXHUwNjRBXHUwNjMzXHUwNjI3XHUwNjMxXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJcdTA2NDNcdTA2NDRcdTA2MjdcdTA2NDdcdTA2NDVcdTA2MjdcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJcdTA2NDRcdTA2NDhcdTA2MkQgXHUwNjI3XHUwNjQ0XHUwNjIzXHUwNjQ0XHUwNjQ4XHUwNjI3XHUwNjQ2XCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYyRlx1MDY0QVx1MDYyRlwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlx1MDY0NFx1MDY0OFx1MDY0NiBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MkZcdTA2NEFcdTA2MkZcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJcdTA2MzlcdTA2MzFcdTA2MzYgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjJEXHUwNjJGXHUwNjRBXHUwNjJGXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1MDYyNVx1MDYzMlx1MDYyN1x1MDYyRFx1MDYyOSBcdTA2MjdcdTA2NDRcdTA2MjVcdTA2MzdcdTA2MjdcdTA2MzFcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjI1XHUwNjM3XHUwNjI3XHUwNjMxIFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiXHUwNjM5XHUwNjMxXHUwNjM2IFx1MDYyNVx1MDYzN1x1MDYyN1x1MDYzMSBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiXHUwNjQ1XHUwNjJEXHUwNjI3XHUwNjMwXHUwNjI3XHUwNjI5IFx1MDYyN1x1MDY0NFx1MDY0Nlx1MDYzNVwiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1MDYyRFx1MDYzNFx1MDY0OCBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2MzVcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJcdTA2MjdcdTA2MzFcdTA2MkFcdTA2NDFcdTA2MjdcdTA2MzkgXHUwNjI3XHUwNjQ0XHUwNjMzXHUwNjM3XHUwNjMxXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDY0NFx1MDY0OFx1MDYyRFx1MDYyOVwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1MDYyNVx1MDYzOVx1MDYyN1x1MDYyRlx1MDYyOSBcdTA2MkFcdTA2MzlcdTA2NEFcdTA2NEFcdTA2NDZcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJcdTA2MjVcdTA2M0FcdTA2NDRcdTA2MjdcdTA2NDJcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJcdTA2MjVcdTA2MzhcdTA2NDdcdTA2MjdcdTA2MzEgXHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0OFx1MDYyN1x1MDYyQVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlx1MDYyRFx1MDYzNFx1MDY0OCBcdTA2MjdcdTA2NDRcdTA2MzRcdTA2MzFcdTA2NEFcdTA2MzdcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiXHUwNjIzXHUwNjM5XHUwNjQ0XHUwNjQ5XCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlx1MDY0QVx1MDY0NVx1MDY0QVx1MDY0NlwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJcdTA2MjNcdTA2MzNcdTA2NDFcdTA2NDRcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiXHUwNjRBXHUwNjMzXHUwNjI3XHUwNjMxXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiXHUwNjQ1XHUwNjQ4XHUwNjM2XHUwNjM5IFx1MDYyN1x1MDY0NFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzN1wiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlx1MDYyM1x1MDYzOVx1MDY0NFx1MDY0OVwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIlx1MDYyM1x1MDYzM1x1MDY0MVx1MDY0NFwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiXHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzN1wiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiXHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDYzMlx1MDYzMVwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlx1MDY0Nlx1MDY0NVx1MDYzNyBcdTA2MkRcdTA2MkZcdTA2NDhcdTA2MkYgXHUwNjI3XHUwNjQ0XHUwNjMyXHUwNjMxXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjJEXHUwNjJGXHUwNjQ4XHUwNjJGIFx1MDYyN1x1MDY0NFx1MDYzMlx1MDYzMVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjQ2XHUwNjM1IFx1MDYyN1x1MDY0NFx1MDYzMlx1MDYzMVwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlx1MDYyNVx1MDYzOVx1MDYyN1x1MDYyRlx1MDYyOSBcdTA2MkFcdTA2MzlcdTA2NEFcdTA2NEFcdTA2NDYgXHUwNjI3XHUwNjQ0XHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3XCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDY0Nlx1MDY0NVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2NDJcdTA2MkZcdTA2MjlcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYyRVx1MDYzN1wiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdTA2MzlcdTA2MzFcdTA2MzYgXHUwNjI3XHUwNjQ0XHUwNjJFXHUwNjM3XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHUwNjQ1XHUwNjMzXHUwNjJEIFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRVx1MDYzNVx1MDY0QVx1MDYzNVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJcdTA2MkFcdTA2NDJcdTA2NDhcdTA2NEFcdTA2MzMgXHUwNjI3XHUwNjQ0XHUwNjMyXHUwNjQ4XHUwNjI3XHUwNjRBXHUwNjI3XCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyOFx1MDYyRFx1MDYyQiBcdTA2NDFcdTA2NEEgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiXHUwNjJDXHUwNjMwXHUwNjMxXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiXHUwNjJDXHUwNjMwXHUwNjMxIFx1MDYyQ1x1MDYyRlx1MDY0QVx1MDYyRlwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJcdTA2NDFcdTA2MzFcdTA2MzlcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiXHUwNjI1XHUwNjM5XHUwNjJGXHUwNjI3XHUwNjJGXHUwNjI3XHUwNjJBIE1pbmRaSlwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlx1MDYyN1x1MDY0NFx1MDY0NFx1MDYzQVx1MDYyOVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJcdTA2NDRcdTA2M0FcdTA2MjkgXHUwNjI3XHUwNjQ0XHUwNjQ4XHUwNjI3XHUwNjJDXHUwNjQ3XHUwNjI5XCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlx1MDYyN1x1MDY0NFx1MDYzM1x1MDY0NVx1MDYyOVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiXHUwNjMzXHUwNjQ1XHUwNjI5IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDY0NFx1MDY0OFx1MDYyN1x1MDY0NlwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJcdTA2NDFcdTA2MjdcdTA2MkFcdTA2MkRcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJcdTA2MkZcdTA2MjdcdTA2NDNcdTA2NDZcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJcdTA2MjVcdTA2MzhcdTA2NDdcdTA2MjdcdTA2MzEgXHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0OFx1MDYyN1x1MDYyQVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJcdTA2MjVcdTA2MzhcdTA2NDdcdTA2MjdcdTA2MzEgXHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0OFx1MDYyN1x1MDYyQVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJcdTA2MkVcdTA2NDRcdTA2NDFcdTA2NEFcdTA2MjkgXHUwNjI3XHUwNjQ0XHUwNjQ0XHUwNjQ4XHUwNjJEXHUwNjI5XCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjI3XHUwNjQ0XHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5XCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1MDYyRFx1MDY0OFx1MDY0NFwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyNVx1MDYzNVx1MDYyRlx1MDYyN1x1MDYzMVwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjI0XHUwNjQ0XHUwNjQxXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJcdTA2MkFcdTA2MzdcdTA2MjhcdTA2NEFcdTA2NDIgXHUwNjJFXHUwNjMxXHUwNjI3XHUwNjI2XHUwNjM3IFx1MDYzMFx1MDY0N1x1MDY0Nlx1MDY0QVx1MDYyOSBcdTA2NDVcdTA2NDFcdTA2MkFcdTA2NDhcdTA2MkQgXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjM1XHUwNjJGXHUwNjMxIFx1MDYzQVx1MDY0Nlx1MDY0QSBcdTA2MjhcdTA2MjdcdTA2NDRcdTA2NDVcdTA2NEFcdTA2MzJcdTA2MjdcdTA2MkEgXHUwNjQ0XHUwNjQwIE9ic2lkaWFuIFx1MDY0NVx1MDYzOSBcdTA2MjNcdTA2NDZcdTA2NDVcdTA2MjdcdTA2MzcgXHUwNjQ1XHUwNjJFXHUwNjM1XHUwNjM1XHUwNjI5XHUwNjBDIFx1MDY0OFx1MDYzNVx1MDY0NFx1MDYyN1x1MDYyQSBcdTA2NDJcdTA2NDhcdTA2MzMgXHUwNjQyXHUwNjMyXHUwNjJEXHUwNjBDIFx1MDYyQVx1MDYyRFx1MDYyRlx1MDY0QVx1MDYyRiBcdTA2NDVcdTA2MkFcdTA2MzlcdTA2MkZcdTA2MkZcdTA2MEMgXHUwNjMzXHUwNjJEXHUwNjI4IFx1MDY0OFx1MDYyNVx1MDY0MVx1MDY0NFx1MDYyN1x1MDYyQVx1MDYwQyBcdTA2NDhcdTA2MjdcdTA2MzNcdTA2MkFcdTA2NEFcdTA2MzFcdTA2MjdcdTA2MkYvXHUwNjJBXHUwNjM1XHUwNjJGXHUwNjRBXHUwNjMxIE1hcmtkb3duLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1MDYyQVx1MDY0NSBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MkZcdTA2NEFcdTA2MkJcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIlx1MDY0NVx1MDYzM1x1MDYyQVx1MDY0OFx1MDYyRlx1MDYzOSBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlx1MDYyN1x1MDYyRlx1MDYzOVx1MDY0NSBcdTA2NDVcdTA2MjRcdTA2NDRcdTA2NDEgXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjM1XHUwNjJGXHUwNjMxIFx1MDYyN1x1MDY0NFx1MDY0NVx1MDY0MVx1MDYyQVx1MDY0OFx1MDYyRFwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlx1MDYyN1x1MDYyRVx1MDYyQVx1MDYzNVx1MDYyN1x1MDYzMVx1MDYyN1x1MDYyQSBcdTA2NDRcdTA2NDhcdTA2MkRcdTA2MjkgXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjQxXHUwNjI3XHUwNjJBXHUwNjRBXHUwNjJEXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1MDYyQVx1MDYyRVx1MDYzNVx1MDY0QVx1MDYzNSBcdTA2MjdcdTA2NDRcdTA2MjdcdTA2MkVcdTA2MkFcdTA2MzVcdTA2MjdcdTA2MzFcdTA2MjdcdTA2MkFcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUwNjJBXHUwNjJEXHUwNjMxXHUwNjRBXHUwNjMxIFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0Mlx1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJcdTA2MjVcdTA2MzZcdTA2MjdcdTA2NDFcdTA2MjkgXHUwNjM0XHUwNjQyXHUwNjRBXHUwNjQyXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJcdTA2MjVcdTA2MzZcdTA2MjdcdTA2NDFcdTA2MjkgXHUwNjQxXHUwNjMxXHUwNjM5XCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MzFcdTA2NDNcdTA2NEFcdTA2MzIgXHUwNjM5XHUwNjQ0XHUwNjQ5IFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0Mlx1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTA2MkFcdTA2MzFcdTA2MjdcdTA2MkNcdTA2MzlcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHUwNjI1XHUwNjM5XHUwNjI3XHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiXHUwNjQxXHUwNjI3XHUwNjM1XHUwNjQ0IFx1MDYzM1x1MDYzN1x1MDYzMSAoXHUwNjIzXHUwNjJCXHUwNjQ2XHUwNjI3XHUwNjIxIFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSlcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiXHUwNjMzXHUwNjJEXHUwNjI4IFx1MDYyN1x1MDY0NFx1MDY0NFx1MDY0OFx1MDYyRFx1MDYyOVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlx1MDYyQVx1MDY0M1x1MDYyOFx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJcdTA2MkFcdTA2MzVcdTA2M0FcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJcdTA2MjVcdTA2MzlcdTA2MjdcdTA2MkZcdTA2MjkgXHUwNjJBXHUwNjM5XHUwNjRBXHUwNjRBXHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0M1x1MDYyOFx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQ2XHUwNjQyXHUwNjQ0IFx1MDY0NFx1MDYyM1x1MDYzOVx1MDY0NFx1MDY0OVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDZcdTA2NDJcdTA2NDQgXHUwNjQ0XHUwNjIzXHUwNjMzXHUwNjQxXHUwNjQ0XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0Nlx1MDY0Mlx1MDY0NCBcdTA2NDRcdTA2NDRcdTA2NEFcdTA2MzNcdTA2MjdcdTA2MzFcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0Nlx1MDY0Mlx1MDY0NCBcdTA2NDRcdTA2NDRcdTA2NEFcdTA2NDVcdTA2NEFcdTA2NDZcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1MDYyN1x1MDYzNlx1MDYzQVx1MDYzNyBcdTA2NDVcdTA2NDFcdTA2MkFcdTA2MjdcdTA2MkRcdTA2MjdcdTA2NEIuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0NVx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2NDhcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDNcdTA2MjhcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdTA2MzlcdTA2NDNcdTA2MzMgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQ1XHUwNjMxXHUwNjRBXHUwNjMxIFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0NVx1MDY0OFx1MDYyRlx1MDY0QVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1MDYzOVx1MDY0M1x1MDYzMyBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDVcdTA2MzFcdTA2NEFcdTA2MzEgXHUwNjI3XHUwNjQ0XHUwNjIzXHUwNjQxXHUwNjQyXHUwNjRBXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiXHUwNjM5XHUwNjQzXHUwNjMzIFx1MDYyN1x1MDYyQVx1MDYyQ1x1MDYyN1x1MDY0NyBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDNcdTA2MjhcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIlx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2MzlcdTA2NDZcdTA2MkYgXHUwNjI3XHUwNjQ0XHUwNjI1XHUwNjQ2XHUwNjM0XHUwNjI3XHUwNjIxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUwNjQ4XHUwNjM2XHUwNjM5IFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2MzlcdTA2NDZcdTA2MkYgXHUwNjI1XHUwNjQ2XHUwNjM0XHUwNjI3XHUwNjIxIFx1MDYzOVx1MDY0Mlx1MDYyRiBcdTA2MkNcdTA2MkZcdTA2NEFcdTA2MkZcdTA2MjlcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHUwNjI3XHUwNjMzXHUwNjQ1IFx1MDYyN1x1MDY0NFx1MDYyQ1x1MDYzMFx1MDYzMVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjI3XHUwNjMzXHUwNjQ1IFx1MDYyN1x1MDY0NFx1MDYyN1x1MDY0MVx1MDYyQVx1MDYzMVx1MDYyN1x1MDYzNlx1MDY0QSBcdTA2NDRcdTA2NDRcdTA2MkNcdTA2MzBcdTA2NDhcdTA2MzEgXHUwNjI3XHUwNjQ0XHUwNjJDXHUwNjJGXHUwNjRBXHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJcdTA2MjdcdTA2MzNcdTA2NDUgXHUwNjI3XHUwNjQ0XHUwNjQxXHUwNjMxXHUwNjM5XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjI3XHUwNjMzXHUwNjQ1IFx1MDYyN1x1MDY0NFx1MDYyN1x1MDY0MVx1MDYyQVx1MDYzMVx1MDYyN1x1MDYzNlx1MDY0QSBcdTA2NDRcdTA2NDRcdTA2NDFcdTA2MzFcdTA2NDhcdTA2MzkgXHUwNjI3XHUwNjQ0XHUwNjJDXHUwNjJGXHUwNjRBXHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHUwNjI3XHUwNjQzXHUwNjJBXHUwNjI4IFx1MDY0NFx1MDY0NFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdTA2MkRcdTA2MzFcdTA2NTFcdTA2MzEgXHUwNjI4XHUwNjI3XHUwNjQ0XHUwNjQzXHUwNjJBXHUwNjI3XHUwNjI4XHUwNjI5IFx1MDYzOVx1MDY0Nlx1MDYyRiBcdTA2MkFcdTA2MkRcdTA2MkZcdTA2NEFcdTA2MkYgXHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5XCIsXHJcbn07XHJcblxyXG5jb25zdCBBTEw6IFJlY29yZDxMYW5ndWFnZSwgdHlwZW9mIF9lbj4gPSB7XHJcbiAgICBlbjogX2VuLFxyXG4gICAgemg6IF96aCxcclxuICAgIGphOiBfamEsXHJcbiAgICBmcjogX2ZyLFxyXG4gICAgZGU6IF9kZSxcclxuICAgIGVzOiBfZXMsXHJcbiAgICBydTogX3J1LFxyXG4gICAgc3Y6IF9zdixcclxuICAgIGhpOiBfaGksXHJcbiAgICBrbzogX2tvLFxyXG4gICAgcHQ6IF9wdCxcclxuICAgIGZpOiBfZmksXHJcbiAgICBubzogX25vLFxyXG4gICAgbmw6IF9ubCxcclxuICAgIGxpOiBfbGksXHJcbiAgICBkYTogX2RhLFxyXG4gICAgaGU6IF9oZSxcclxuICAgIGl0OiBfaXQsXHJcbiAgICBhcjogX2FyLFxyXG59O1xyXG5cclxubGV0IF9sYW5nOiBMYW5ndWFnZSA9IFwiZW5cIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldExhbmcobDogTGFuZ3VhZ2UpIHtcclxuICAgIF9sYW5nID0gbDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZygpOiBMYW5ndWFnZSB7XHJcbiAgICByZXR1cm4gX2xhbmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIChBTExbX2xhbmddIGFzIGFueSk/LltrZXldID8/IChBTExbXCJlblwiXSBhcyBhbnkpPy5ba2V5XSA/PyBrZXk7XHJcbn1cclxuIiwgIi8vIHNyYy9TdHlsZVBhbmVsVmlldy50c1xyXG5pbXBvcnQgeyBJdGVtVmlldywgV29ya3NwYWNlTGVhZiwgU2V0dGluZyB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQge1xyXG4gICAgVklFV19UWVBFX01JTkRNQVBfU1RZTEUsXHJcbiAgICBWSUVXX1RZUEVfTUlORE1BUCxcclxuICAgIE1pbmRNYXBTdHlsZSxcclxuICAgIERFRkFVTFRfU1RZTEUsXHJcbiAgICBGT05UX0xJU1QsXHJcbiAgICBDT05ORUNUSU9OX1NUWUxFUyxcclxuICAgIFJBSU5CT1dfUEFMRVRURVMsXHJcbn0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgdCB9IGZyb20gXCIuL2kxOG5cIjtcclxuaW1wb3J0IHsgTWluZE1hcFZpZXcgfSBmcm9tIFwiLi9NaW5kTWFwVmlld1wiO1xyXG5pbXBvcnQgdHlwZSBNaW5kTm9kZVBsdWdpbiBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R5bGVQYW5lbFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XHJcbiAgICBwcml2YXRlIHBsdWdpbjogTWluZE5vZGVQbHVnaW47XHJcbiAgICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE1pbmROb2RlUGx1Z2luKSB7XHJcbiAgICAgICAgc3VwZXIobGVhZik7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgICB9XHJcbiAgICBnZXRWaWV3VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gVklFV19UWVBFX01JTkRNQVBfU1RZTEU7XHJcbiAgICB9XHJcbiAgICBnZXREaXNwbGF5VGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gXCJNaW5kWkogXCIgKyB0KFwidGIuc3R5bGVcIik7XHJcbiAgICB9XHJcbiAgICBnZXRJY29uKCkge1xyXG4gICAgICAgIHJldHVybiBcInBhbGV0dGVcIjtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxyXG4gICAgYXN5bmMgb25PcGVuKCkge1xyXG4gICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxyXG4gICAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvKiBubyBjbGVhbnVwIG5lZWRlZCAqL1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VmlldygpOiBNaW5kTWFwVmlldyB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9NSU5ETUFQKTtcclxuICAgICAgICByZXR1cm4gbC5sZW5ndGggPiAwICYmIGxbMF0udmlldyBpbnN0YW5jZW9mIE1pbmRNYXBWaWV3XHJcbiAgICAgICAgICAgID8gbFswXS52aWV3XHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkKCkge1xyXG4gICAgICAgIGNvbnN0IGN0ID0gdGhpcy5jb250YWluZXJFbC5jaGlsZHJlblsxXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjdC5lbXB0eSgpO1xyXG4gICAgICAgIGN0LmFkZENsYXNzKFwibXotc3AtY3RcIik7XHJcblxyXG4gICAgICAgIG5ldyBTZXR0aW5nKGN0KS5zZXROYW1lKHQoXCJzbS50aXRsZVwiKSkuc2V0SGVhZGluZygpO1xyXG5cclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5nZXRWaWV3KCk7XHJcbiAgICAgICAgY29uc3QgczogTWluZE1hcFN0eWxlID0gdmlldz8uc3R5bGVcclxuICAgICAgICAgICAgPyB7IC4uLnZpZXcuc3R5bGUgfVxyXG4gICAgICAgICAgICA6IHRoaXMucGx1Z2luLmdldFN0eWxlKCk7XHJcbiAgICAgICAgY29uc3QgdXBkID0gKHA6IFBhcnRpYWw8TWluZE1hcFN0eWxlPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5nZXRWaWV3KCk7XHJcbiAgICAgICAgICAgIGlmICh2KSB2LmFwcGx5U3R5bGUocCk7XHJcbiAgICAgICAgICAgIGVsc2Ugdm9pZCB0aGlzLnBsdWdpbi51cGRhdGVTdHlsZShwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzYWZlU3RyID0gKHZhbDogTWluZE1hcFN0eWxlW2tleW9mIE1pbmRNYXBTdHlsZV0pOiBzdHJpbmcgPT5cclxuICAgICAgICAgICAgdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgPyB2YWxcclxuICAgICAgICAgICAgICAgIDogdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICA/IFN0cmluZyh2YWwpXHJcbiAgICAgICAgICAgICAgICAgIDogdHlwZW9mIHZhbCA9PT0gXCJib29sZWFuXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFN0cmluZyh2YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xyXG5cclxuICAgICAgICBjb25zdCBta1NlYyA9IChpY29uOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VjID0gY3QuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHNlYy5hZGRDbGFzcyhcIm16LXNwLXNlY1wiKTtcclxuICAgICAgICAgICAgY29uc3QgaGRyID0gc2VjLmNyZWF0ZUVsKFwiZGl2XCIsIHsgdGV4dDogaWNvbiArIFwiICBcIiArIHRpdGxlIH0pO1xyXG4gICAgICAgICAgICBoZHIuYWRkQ2xhc3MoXCJtei1zcC1zZWMtaGRyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gc2VjLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBiLmFkZENsYXNzKFwibXotc3Atc2VjLWJvZHlcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtSb3cgPSAocDogSFRNTEVsZW1lbnQsIGw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByID0gcC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgci5hZGRDbGFzcyhcIm16LXNwLXJvd1wiKTtcclxuICAgICAgICAgICAgY29uc3QgbGJsID0gci5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBsIH0pO1xyXG4gICAgICAgICAgICBsYmwuYWRkQ2xhc3MoXCJtei1zcC1sYmxcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtDb2xvciA9IChwOiBIVE1MRWxlbWVudCwgbDogc3RyaW5nLCBrOiBrZXlvZiBNaW5kTWFwU3R5bGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG1rUm93KHAsIGwpO1xyXG4gICAgICAgICAgICBjb25zdCBpID0gci5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGkudHlwZSA9IFwiY29sb3JcIjtcclxuICAgICAgICAgICAgY29uc3QgY3YgPSBzW2tdO1xyXG4gICAgICAgICAgICBpLnZhbHVlID1cclxuICAgICAgICAgICAgICAgIHR5cGVvZiBjdiA9PT0gXCJzdHJpbmdcIiAmJiBjdi5zdGFydHNXaXRoKFwidmFyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogc2FmZVN0cihjdik7XHJcbiAgICAgICAgICAgIGkuYWRkQ2xhc3MoXCJtei1zcC1jb2xvclwiKTtcclxuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT5cclxuICAgICAgICAgICAgICAgIHVwZCh7IFtrXTogaS52YWx1ZSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta1JhbmdlID0gKFxyXG4gICAgICAgICAgICBwOiBIVE1MRWxlbWVudCxcclxuICAgICAgICAgICAgbDogc3RyaW5nLFxyXG4gICAgICAgICAgICBrOiBrZXlvZiBNaW5kTWFwU3R5bGUsXHJcbiAgICAgICAgICAgIG1pbjogbnVtYmVyLFxyXG4gICAgICAgICAgICBtYXg6IG51bWJlcixcclxuICAgICAgICAgICAgc3RlcD86IG51bWJlcixcclxuICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG1rUm93KHAsIGwpO1xyXG4gICAgICAgICAgICBjb25zdCB3ID0gci5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgdy5hZGRDbGFzcyhcIm16LXNwLXJhbmdlLXdyYXBcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGkgPSB3LmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaS50eXBlID0gXCJyYW5nZVwiO1xyXG4gICAgICAgICAgICBpLm1pbiA9IFN0cmluZyhtaW4pO1xyXG4gICAgICAgICAgICBpLm1heCA9IFN0cmluZyhtYXgpO1xyXG4gICAgICAgICAgICBpZiAoc3RlcCkgaS5zdGVwID0gU3RyaW5nKHN0ZXApO1xyXG4gICAgICAgICAgICBpLnZhbHVlID0gc2FmZVN0cihzW2tdKTtcclxuICAgICAgICAgICAgaS5hZGRDbGFzcyhcIm16LXNwLXJhbmdlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBuID0gdy5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBzYWZlU3RyKHNba10pIH0pO1xyXG4gICAgICAgICAgICBuLmFkZENsYXNzKFwibXotc3AtcmFuZ2UtdmFsXCIpO1xyXG4gICAgICAgICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuLnRleHRDb250ZW50ID0gaS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHVwZCh7IFtrXTogTnVtYmVyKGkudmFsdWUpIH0gYXMgUGFydGlhbDxNaW5kTWFwU3R5bGU+KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta051bSA9IChcclxuICAgICAgICAgICAgcDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICAgIGw6IHN0cmluZyxcclxuICAgICAgICAgICAgazoga2V5b2YgTWluZE1hcFN0eWxlLFxyXG4gICAgICAgICAgICBtaW46IG51bWJlcixcclxuICAgICAgICAgICAgbWF4OiBudW1iZXIsXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBta1JvdyhwLCBsKTtcclxuICAgICAgICAgICAgY29uc3QgaSA9IHIuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgICAgICBpLm1pbiA9IFN0cmluZyhtaW4pO1xyXG4gICAgICAgICAgICBpLm1heCA9IFN0cmluZyhtYXgpO1xyXG4gICAgICAgICAgICBpLnZhbHVlID0gc2FmZVN0cihzW2tdKTtcclxuICAgICAgICAgICAgaS5hZGRDbGFzcyhcIm16LXNwLW51bVwiKTtcclxuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICB1cGQoeyBba106IE51bWJlcihpLnZhbHVlKSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta1NlbCA9IChcclxuICAgICAgICAgICAgcDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICAgIGw6IHN0cmluZyxcclxuICAgICAgICAgICAgazoga2V5b2YgTWluZE1hcFN0eWxlLFxyXG4gICAgICAgICAgICBvcHRzOiBzdHJpbmdbXSxcclxuICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG1rUm93KHAsIGwpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSByLmNyZWF0ZUVsKFwic2VsZWN0XCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgICAgICBzZWwuYWRkQ2xhc3MoXCJtei1zcC1zZWxcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbyBvZiBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBvcC52YWx1ZSA9IG87XHJcbiAgICAgICAgICAgICAgICBvcC50ZXh0ID0gbztcclxuICAgICAgICAgICAgICAgIGlmIChvID09PSBzYWZlU3RyKHNba10pKSBvcC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZWwuYXBwZW5kQ2hpbGQob3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICB1cGQoeyBba106IHNlbC52YWx1ZSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQ2hpbGQgbm9kZVxyXG4gICAgICAgIGNvbnN0IHMxID0gbWtTZWMoXCJcdUQ4M0RcdURDRTZcIiwgdChcInNtLmNoaWxkXCIpKTtcclxuICAgICAgICBta0NvbG9yKHMxLCB0KFwic20uYmdcIiksIFwibm9kZUJnQ29sb3JcIik7XHJcbiAgICAgICAgbWtDb2xvcihzMSwgdChcInNtLnRleHRcIiksIFwibm9kZVRleHRDb2xvclwiKTtcclxuICAgICAgICBta1JhbmdlKHMxLCB0KFwic20uZm9udFNpemVcIiksIFwibm9kZUZvbnRTaXplXCIsIDEwLCAzMik7XHJcbiAgICAgICAgbWtTZWwoczEsIHQoXCJzbS5mb250XCIpLCBcIm5vZGVGb250RmFtaWx5XCIsIEZPTlRfTElTVCk7XHJcbiAgICAgICAgbWtTZWwoczEsIHQoXCJzbS5ib3JkZXJTdHlsZVwiKSwgXCJub2RlQm9yZGVyU3R5bGVcIiwgW1xyXG4gICAgICAgICAgICBcInNvbGlkXCIsXHJcbiAgICAgICAgICAgIFwiZGFzaGVkXCIsXHJcbiAgICAgICAgICAgIFwiZG90dGVkXCIsXHJcbiAgICAgICAgICAgIFwiZG91YmxlXCIsXHJcbiAgICAgICAgICAgIFwibm9uZVwiLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIG1rQ29sb3IoczEsIHQoXCJzbS5ib3JkZXJDb2xvclwiKSwgXCJub2RlQm9yZGVyQ29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzMSwgdChcInNtLmJvcmRlcldpZHRoXCIpLCBcIm5vZGVCb3JkZXJXaWR0aFwiLCAwLCA4KTtcclxuICAgICAgICBta1JhbmdlKHMxLCB0KFwic20uYm9yZGVyUmFkaXVzXCIpLCBcIm5vZGVCb3JkZXJSYWRpdXNcIiwgMCwgMzIpO1xyXG4gICAgICAgIG1rTnVtKHMxLCB0KFwic20ubWluV2lkdGhcIiksIFwibm9kZU1pbldpZHRoXCIsIDMwLCA0MDApO1xyXG4gICAgICAgIG1rTnVtKHMxLCB0KFwic20ubWluSGVpZ2h0XCIpLCBcIm5vZGVNaW5IZWlnaHRcIiwgMjAsIDIwMCk7XHJcblxyXG4gICAgICAgIC8vIFJvb3Qgbm9kZVxyXG4gICAgICAgIGNvbnN0IHMyID0gbWtTZWMoXCJcdUQ4M0NcdURGRTBcIiwgdChcInNtLnJvb3RcIikpO1xyXG4gICAgICAgIG1rQ29sb3IoczIsIHQoXCJzbS5iZ1wiKSwgXCJyb290QmdDb2xvclwiKTtcclxuICAgICAgICBta0NvbG9yKHMyLCB0KFwic20udGV4dFwiKSwgXCJyb290VGV4dENvbG9yXCIpO1xyXG4gICAgICAgIG1rUmFuZ2UoczIsIHQoXCJzbS5mb250U2l6ZVwiKSwgXCJyb290Rm9udFNpemVcIiwgMTAsIDMyKTtcclxuICAgICAgICBta1NlbChzMiwgdChcInNtLmZvbnRcIiksIFwicm9vdEZvbnRGYW1pbHlcIiwgRk9OVF9MSVNUKTtcclxuICAgICAgICBta1NlbChzMiwgdChcInNtLmJvcmRlclN0eWxlXCIpLCBcInJvb3RCb3JkZXJTdHlsZVwiLCBbXHJcbiAgICAgICAgICAgIFwic29saWRcIixcclxuICAgICAgICAgICAgXCJkYXNoZWRcIixcclxuICAgICAgICAgICAgXCJkb3R0ZWRcIixcclxuICAgICAgICAgICAgXCJkb3VibGVcIixcclxuICAgICAgICAgICAgXCJub25lXCIsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgbWtDb2xvcihzMiwgdChcInNtLmJvcmRlckNvbG9yXCIpLCBcInJvb3RCb3JkZXJDb2xvclwiKTtcclxuICAgICAgICBta1JhbmdlKHMyLCB0KFwic20uYm9yZGVyV2lkdGhcIiksIFwicm9vdEJvcmRlcldpZHRoXCIsIDAsIDgpO1xyXG4gICAgICAgIG1rUmFuZ2UoczIsIHQoXCJzbS5ib3JkZXJSYWRpdXNcIiksIFwicm9vdEJvcmRlclJhZGl1c1wiLCAwLCAzMik7XHJcbiAgICAgICAgbWtOdW0oczIsIHQoXCJzbS5taW5XaWR0aFwiKSwgXCJyb290TWluV2lkdGhcIiwgNTAsIDQwMCk7XHJcbiAgICAgICAgbWtOdW0oczIsIHQoXCJzbS5taW5IZWlnaHRcIiksIFwicm9vdE1pbkhlaWdodFwiLCAyMCwgMjAwKTtcclxuXHJcbiAgICAgICAgLy8gQ29ubmVjdGlvblxyXG4gICAgICAgIGNvbnN0IHMzID0gbWtTZWMoXCJcdUQ4M0RcdUREMTdcIiwgdChcInNtLmNvbm5cIikpO1xyXG4gICAgICAgIG1rU2VsKHMzLCB0KFwic20udHlwZVwiKSwgXCJjb25uZWN0aW9uU3R5bGVcIiwgQ09OTkVDVElPTl9TVFlMRVMpO1xyXG4gICAgICAgIG1rQ29sb3IoczMsIHQoXCJzbS5jb2xvclwiKSwgXCJjb25uZWN0aW9uQ29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzMywgdChcInNtLndpZHRoXCIpLCBcImNvbm5lY3Rpb25XaWR0aFwiLCAxLCA4KTtcclxuICAgICAgICBta051bShzMywgdChcInNtLmNvbm5MZW5ndGhcIiksIFwiY29ubmVjdGlvbkxlbmd0aFwiLCAzMCwgMzAwKTtcclxuICAgICAgICBta1NlbChzMywgdChcInNtLm5vZGVEaXJcIiksIFwibm9kZURpcmVjdGlvblwiLCBbXCJyaWdodFwiLCBcImxlZnRcIiwgXCJib3RoXCJdKTtcclxuICAgICAgICBta051bShzMywgdChcInNtLm5vZGVHYXBZXCIpIHx8IFwiU2libGluZyBHYXBcIiwgXCJub2RlR2FwWVwiLCA4LCA4MCk7XHJcblxyXG4gICAgICAgIC8vIFJhaW5ib3dcclxuICAgICAgICBjb25zdCBjdFJvdyA9IHMzLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGN0Um93LmFkZENsYXNzKFwibXotcmFpbmJvdy1jdFwiKTtcclxuICAgICAgICBjb25zdCBybGJsID0gY3RSb3cuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogdChcInNtLnJhaW5ib3dcIikgfSk7XHJcbiAgICAgICAgcmxibC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctbGJsXCIpO1xyXG4gICAgICAgIGNvbnN0IGFsbFA6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHtcclxuICAgICAgICAgICAgLi4uUkFJTkJPV19QQUxFVFRFUyxcclxuICAgICAgICAgICAgLi4uKHMuY3VzdG9tUmFpbmJvd3MgfHwge30pLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgY3VyUCA9IHMuY29ubmVjdGlvblJhaW5ib3cgPyBzLnJhaW5ib3dQYWxldHRlIDogXCJvZmZcIjtcclxuICAgICAgICBjb25zdCBsdyA9IGN0Um93LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGx3LmFkZENsYXNzKFwibXotcmFpbmJvdy1saXN0XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBta0kgPSAoa2V5OiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIGNvbG9yczogc3RyaW5nW10gfCBudWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ID0gbHcuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGl0LmFkZENsYXNzKFwibXotcmFpbmJvdy1pdGVtXCIpO1xyXG4gICAgICAgICAgICBpdC50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiLCBrZXkgPT09IGN1clApO1xyXG4gICAgICAgICAgICBjb25zdCBsYmxFbCA9IGl0LmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IGxhYmVsIH0pO1xyXG4gICAgICAgICAgICBsYmxFbC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctaXRlbS1sYmxcIik7XHJcbiAgICAgICAgICAgIGlmIChjb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRzID0gaXQuY3JlYXRlRWwoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgZHMuYWRkQ2xhc3MoXCJtei1yYWluYm93LWRvdHNcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgY29sb3JzLnNsaWNlKDAsIDEwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBkcy5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctZG90XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHsgXCItLW16LWRvdC1jb2xvclwiOiBjIH0pLmZvckVhY2goKFtrLCB2XSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcIm9mZlwiKSB1cGQoeyBjb25uZWN0aW9uUmFpbmJvdzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHVwZCh7IGNvbm5lY3Rpb25SYWluYm93OiB0cnVlLCByYWluYm93UGFsZXR0ZToga2V5IH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1rSShcIm9mZlwiLCBcIlNvbGlkXCIsIG51bGwpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW25hbWUsIGNvbG9yc10gb2YgT2JqZWN0LmVudHJpZXMoYWxsUCkpXHJcbiAgICAgICAgICAgIG1rSShuYW1lLCBuYW1lLCBjb2xvcnMpO1xyXG5cclxuICAgICAgICAvLyBUZXh0XHJcbiAgICAgICAgY29uc3QgczNiID0gbWtTZWMoXCJcdUQ4M0RcdURDRERcIiwgdChcInNtLnRleHRBbGlnblwiKSk7XHJcbiAgICAgICAgbWtTZWwoczNiLCB0KFwic20udGV4dEFsaWduXCIpLCBcInRleHRBbGlnblwiLCBbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0pO1xyXG5cclxuICAgICAgICAvLyBTZWxlY3Rpb25cclxuICAgICAgICBjb25zdCBzNCA9IG1rU2VjKFwiXHUyNzA1XCIsIHQoXCJzbS5zZWxcIikpO1xyXG4gICAgICAgIG1rQ29sb3IoczQsIHQoXCJzbS5zZWxDb2xvclwiKSwgXCJzZWxlY3Rpb25Db2xvclwiKTtcclxuICAgICAgICBta1JhbmdlKHM0LCB0KFwic20uc2VsV2lkdGhcIiksIFwic2VsZWN0aW9uV2lkdGhcIiwgMSwgOCk7XHJcbiAgICAgICAgbWtOdW0oczQsIHQoXCJzbS5zZWxPZmZzZXRcIiksIFwic2VsZWN0aW9uT3V0bGluZU9mZnNldFwiLCAtNSwgMjApO1xyXG4gICAgICAgIG1rQ29sb3IoczQsIHQoXCJzbS5lZGl0T3V0bGluZVwiKSwgXCJlZGl0T3V0bGluZUNvbG9yXCIpO1xyXG4gICAgICAgIG1rUmFuZ2UoczQsIHQoXCJzbS5lZGl0T3V0bGluZVdpZHRoXCIpLCBcImVkaXRPdXRsaW5lV2lkdGhcIiwgMCwgOCk7XHJcblxyXG4gICAgICAgIC8vIENhbnZhc1xyXG4gICAgICAgIGNvbnN0IHM1ID0gbWtTZWMoXCJcdUQ4M0RcdUREQkNcdUZFMEZcIiwgdChcInNtLmNhbnZhc0JnXCIpKTtcclxuICAgICAgICBta0NvbG9yKHM1LCB0KFwic20uY2FudmFzQmdcIiksIFwiY2FudmFzQmdcIik7XHJcblxyXG4gICAgICAgIC8vIFRvb2xiYXJcclxuICAgICAgICBjb25zdCBzNiA9IG1rU2VjKFwiXHVEODNEXHVERDI3XCIsIHQoXCJzbS5zaG93VG9vbGJhclwiKSk7XHJcbiAgICAgICAgY29uc3QgdGJSb3cgPSBta1JvdyhzNiwgdChcInNtLnNob3dUb29sYmFyXCIpKTtcclxuICAgICAgICBjb25zdCB0YkNiID0gdGJSb3cuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIHRiQ2IudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICB0YkNiLmNoZWNrZWQgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhcjtcclxuICAgICAgICB0YkNiLmFkZENsYXNzKFwibXotc3AtdGItY2hrXCIpO1xyXG4gICAgICAgIHRiQ2IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dUb29sYmFyID0gdGJDYi5jaGVja2VkO1xyXG4gICAgICAgICAgICB2b2lkIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoQWxsVmlld3MoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBta1NlbChzNiwgdChcInNtLnRiUG9zXCIpLCBcInRvb2xiYXJQb3NpdGlvblwiLCBbXCJ0b3BcIiwgXCJib3R0b21cIl0pO1xyXG4gICAgICAgIG1rTnVtKHM2LCB0KFwic20udGJQYWRUXCIpLCBcInRvb2xiYXJQYWRUb3BcIiwgMCwgNDApO1xyXG4gICAgICAgIG1rTnVtKHM2LCB0KFwic20udGJQYWRSXCIpLCBcInRvb2xiYXJQYWRSaWdodFwiLCAwLCA0MCk7XHJcbiAgICAgICAgbWtOdW0oczYsIHQoXCJzbS50YlBhZEJcIiksIFwidG9vbGJhclBhZEJvdHRvbVwiLCAwLCA0MCk7XHJcbiAgICAgICAgbWtOdW0oczYsIHQoXCJzbS50YlBhZExcIiksIFwidG9vbGJhclBhZExlZnRcIiwgMCwgNDApO1xyXG4gICAgICAgIG1rQ29sb3IoczYsIHQoXCJzbS50YkJnXCIpLCBcInRvb2xiYXJCZ0NvbG9yXCIpO1xyXG4gICAgICAgIG1rQ29sb3IoczYsIHQoXCJzbS50YkJ0bkJnXCIpLCBcInRvb2xiYXJCdG5CZ0NvbG9yXCIpO1xyXG4gICAgICAgIG1rU2VsKHM2LCB0KFwic20udGJCdG5Cb3JkZXJcIiksIFwidG9vbGJhckJ0bkJvcmRlclN0eWxlXCIsIFtcclxuICAgICAgICAgICAgXCJzb2xpZFwiLFxyXG4gICAgICAgICAgICBcImRhc2hlZFwiLFxyXG4gICAgICAgICAgICBcImRvdHRlZFwiLFxyXG4gICAgICAgICAgICBcIm5vbmVcIixcclxuICAgICAgICBdKTtcclxuICAgICAgICBta0NvbG9yKHM2LCB0KFwic20udGJCdG5Cb3JkZXJDb2xvclwiKSwgXCJ0b29sYmFyQnRuQm9yZGVyQ29sb3JcIik7XHJcbiAgICAgICAgbWtDb2xvcihzNiwgdChcInNtLnRiQnRuVGV4dFwiKSwgXCJ0b29sYmFyQnRuVGV4dENvbG9yXCIpO1xyXG5cclxuICAgICAgICAvLyBCdXR0b25zXHJcbiAgICAgICAgY29uc3QgYnIgPSBjdC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBici5hZGRDbGFzcyhcIm16LXNwLWJ0bnNcIik7XHJcbiAgICAgICAgYnIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiB0KFwic20ucmVzZXRcIikgfSkuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5nZXRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodikgdi5hcHBseVN0eWxlKHsgLi4uREVGQVVMVF9TVFlMRSB9KTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugdm9pZCB0aGlzLnBsdWdpbi51cGRhdGVTdHlsZSh7IC4uLkRFRkFVTFRfU1RZTEUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCByZiA9IGJyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJcdTIxQkJcIiB9KTtcclxuICAgICAgICByZi5hZGRDbGFzcyhcIm16LXNwLXJlZnJlc2hcIik7XHJcbiAgICAgICAgcmYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuYnVpbGQoKSk7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8vIHNyYy9TZXR0aW5nc1RhYi50c1xyXG5pbXBvcnQgeyBQbHVnaW5TZXR0aW5nVGFiLCBBcHAsIFNldHRpbmcsIEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgdHlwZSBNaW5kTm9kZVBsdWdpbiBmcm9tIFwiLi9tYWluXCI7XHJcbmltcG9ydCB7IExBTkdVQUdFUywgTGFuZ3VhZ2UsIHQsIHNldExhbmcgfSBmcm9tIFwiLi9pMThuXCI7XHJcbmltcG9ydCB7IERFRkFVTFRfS0VZQklORElOR1MsIEtleUJpbmRpbmdzIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbnR5cGUgU3RyaW5nS2V5T2Y8VD4gPSB7XHJcbiAgICBbSyBpbiBrZXlvZiBUXTogVFtLXSBleHRlbmRzIHN0cmluZyA/IEsgOiBuZXZlcjtcclxufVtrZXlvZiBUXTtcclxudHlwZSBTdHJpbmdLZXlzID0gU3RyaW5nS2V5T2Y8S2V5QmluZGluZ3M+O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1pbmRNYXBTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcbiAgICBwbHVnaW46IE1pbmROb2RlUGx1Z2luO1xyXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogTWluZE5vZGVQbHVnaW4pIHtcclxuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbik7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gY29udGFpbmVyRWwuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcblxyXG4gICAgICAgIC8vIEFib3V0XHJcbiAgICAgICAgY29uc3QgYWJvdXQgPSBjb250YWluZXJFbC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBhYm91dC5hZGRDbGFzcyhcIm16LWFib3V0XCIpO1xyXG4gICAgICAgIGNvbnN0IGljb25FbCA9IGFib3V0LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGljb25FbC5hZGRDbGFzcyhcIm16LWFib3V0LWljb25cIik7XHJcbiAgICAgICAgaWNvbkVsLmlubmVyVGV4dCA9IFwiXHVEODNEXHVEREZBXHVGRTBGXCI7XHJcbiAgICAgICAgY29uc3QgdGl0bGVFbCA9IGFib3V0LmNyZWF0ZUVsKFwiaDJcIiwgeyB0ZXh0OiBcIk1pbmRaSlwiIH0pO1xyXG4gICAgICAgIHRpdGxlRWwuYWRkQ2xhc3MoXCJtei1hYm91dC10aXRsZVwiKTtcclxuICAgICAgICBjb25zdCB2ZXJFbCA9IGFib3V0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgdGV4dDogYCR7dChcInNldC52ZXJzaW9uXCIpfTogJHt0aGlzLnBsdWdpbi5tYW5pZmVzdC52ZXJzaW9ufWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmVyRWwuYWRkQ2xhc3MoXCJtei1hYm91dC1tZXRhXCIpO1xyXG4gICAgICAgIGNvbnN0IGF1dGhFbCA9IGFib3V0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgdGV4dDogYCR7dChcInNldC5hdXRob3JcIil9OiAke3RoaXMucGx1Z2luLm1hbmlmZXN0LmF1dGhvcn1gLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF1dGhFbC5hZGRDbGFzcyhcIm16LWFib3V0LW1ldGEtbGFzdFwiKTtcclxuICAgICAgICBjb25zdCBkZXNjRWwgPSBhYm91dC5jcmVhdGVFbChcInBcIiwgeyB0ZXh0OiB0KFwic2V0LmRlc2NcIikgfSk7XHJcbiAgICAgICAgZGVzY0VsLmFkZENsYXNzKFwibXotYWJvdXQtZGVzY1wiKTtcclxuICAgICAgICBjb25zdCBnaExpbmsgPSBhYm91dC5jcmVhdGVFbChcImRpdlwiKS5jcmVhdGVFbChcImFcIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiBgXHVEODNEXHVEQ0U2ICR7dChcInNldC5naXRodWJcIil9YCxcclxuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vempvay9taW5kempcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBnaExpbmsuYWRkQ2xhc3MoXCJtei1hYm91dC1saW5rXCIpO1xyXG4gICAgICAgIGdoTGluay5zZXRBdHRyKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG5cclxuICAgICAgICAvLyBEb25hdGlvblxyXG4gICAgICAgIGNvbnN0IGRvblNlYyA9IGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGRvblNlYy5hZGRDbGFzcyhcIm16LWRvbmF0ZS1zZWNcIik7XHJcbiAgICAgICAgY29uc3QgZG9uVGl0bGUgPSBkb25TZWMuY3JlYXRlRWwoXCJoM1wiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IGBcdTI2MTUgJHt0KFwic2V0LmRvbmF0ZVwiKX1gLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvblRpdGxlLmFkZENsYXNzKFwibXotZG9uYXRlLWhlYWRpbmdcIik7XHJcbiAgICAgICAgY29uc3QgZG9uQnRucyA9IGRvblNlYy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBkb25CdG5zLmFkZENsYXNzKFwibXotZG9uYXRlLWJ0bnNcIik7XHJcbiAgICAgICAgY29uc3QgbWtEb24gPSAobGFiZWw6IHN0cmluZywgY29sb3I6IHN0cmluZywgdXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IGRvbkJ0bnMuY3JlYXRlRWwoXCJhXCIsIHsgaHJlZjogdXJsIH0pO1xyXG4gICAgICAgICAgICBhLnNldEF0dHIoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgIGEuYWRkQ2xhc3MoXCJtei1kb25hdGUtYnRuXCIpO1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1idG4tY29sb3JcIjogY29sb3IgfSkuZm9yRWFjaCgoW2ssIHZdKSA9PlxyXG4gICAgICAgICAgICAgICAgYS5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYS5pbm5lclRleHQgPSBsYWJlbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1rRG9uKFxyXG4gICAgICAgICAgICBcIlx1MjYxNSBCdXkgTWUgYSBDb2ZmZWVcIixcclxuICAgICAgICAgICAgXCIjRkZERDAwXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuYnV5bWVhY29mZmVlLmNvbS9zdXBlcmpvaG5cIixcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rRG9uKFwiXHUyNzY0XHVGRTBGIEtvLWZpXCIsIFwiI0ZGNUU1QlwiLCBcImh0dHBzOi8va28tZmkuY29tL3N1cGVyam9oblwiKTtcclxuICAgICAgICBta0RvbihcIlx1RDgzRFx1RENCMCBQYXlQYWxcIiwgXCIjMDA3MGJhXCIsIFwiaHR0cHM6Ly9wYXlwYWwubWUvVGFuQ2F0OTk3XCIpO1xyXG5cclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZSh0KFwic2V0LnRpdGxlXCIpKS5zZXRIZWFkaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIEJhc2ljIHNldHRpbmdzXHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKHQoXCJzZXQubGFuZ1wiKSlcclxuICAgICAgICAgICAgLnNldERlc2ModChcInNldC5sYW5nRGVzY1wiKSlcclxuICAgICAgICAgICAgLmFkZERyb3Bkb3duKChkZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBsIG9mIExBTkdVQUdFUykgZGQuYWRkT3B0aW9uKGwudmFsdWUsIGwubGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgZGQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZGQub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5sYW5ndWFnZSA9IHYgYXMgTGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFuZyh2IGFzIExhbmd1YWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoQWxsVmlld3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUodChcInNldC50aGVtZVwiKSlcclxuICAgICAgICAgICAgLnNldERlc2ModChcInNldC50aGVtZURlc2NcIikpXHJcbiAgICAgICAgICAgIC5hZGREcm9wZG93bigoZGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGRkLmFkZE9wdGlvbihcImxpZ2h0XCIsIHQoXCJzZXQubGlnaHRcIikpO1xyXG4gICAgICAgICAgICAgICAgZGQuYWRkT3B0aW9uKFwiZGFya1wiLCB0KFwic2V0LmRhcmtcIikpO1xyXG4gICAgICAgICAgICAgICAgZGQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgZGQub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zd2l0Y2hUaGVtZSh2IGFzIFwibGlnaHRcIiB8IFwiZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUodChcInNldC5jYW52YXNCZ1wiKSlcclxuICAgICAgICAgICAgLnNldERlc2ModChcInNldC5jYW52YXNCZ0Rlc2NcIikpXHJcbiAgICAgICAgICAgIC5hZGRDb2xvclBpY2tlcigoY3ApID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnN0eWxlLmNhbnZhc0JnO1xyXG4gICAgICAgICAgICAgICAgY3Auc2V0VmFsdWUoY3VyLnN0YXJ0c1dpdGgoXCIjXCIpID8gY3VyIDogXCIjZmZmZmZmXCIpO1xyXG4gICAgICAgICAgICAgICAgY3Aub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zdHlsZS5jYW52YXNCZyA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uYXBwbHlTdHlsZVRvQWxsVmlld3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKHQoXCJzZXQudG9vbGJhclwiKSlcclxuICAgICAgICAgICAgLnNldERlc2ModChcInNldC50b29sYmFyRGVzY1wiKSlcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodGcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRnLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dUb29sYmFyKTtcclxuICAgICAgICAgICAgICAgIHRnLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1Rvb2xiYXIgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hBbGxWaWV3cygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSh0KFwic2V0LmVkaXRPbkNyZWF0ZVwiKSlcclxuICAgICAgICAgICAgLnNldERlc2ModChcInNldC5lZGl0T25DcmVhdGVEZXNjXCIpKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0ZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGcuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZWRpdE9uQ3JlYXRlKTtcclxuICAgICAgICAgICAgICAgIHRnLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZWRpdE9uQ3JlYXRlID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ3VzdG9tIG5vZGUgbmFtZXNcclxuICAgICAgICBjb25zdCBsYW5nID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MubGFuZ3VhZ2U7XHJcbiAgICAgICAgY29uc3QgZGVmUm9vdCA9IHQoXCJkZWYucm9vdFwiKTtcclxuICAgICAgICBjb25zdCBkZWZDaGlsZCA9IHQoXCJkZWYuY2hpbGRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG1rTmFtZVNldHRpbmcgPSAoXHJcbiAgICAgICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgZGVzYzogc3RyaW5nLFxyXG4gICAgICAgICAgICBmaWVsZDogXCJyb290XCIgfCBcImNoaWxkXCIsXHJcbiAgICAgICAgICAgIGRlZlZhbDogc3RyaW5nLFxyXG4gICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxyXG4gICAgICAgICAgICAgICAgLnNldERlc2MoZGVzYyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0RWwgPSBzZXR0aW5nLmNvbnRyb2xFbC5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiXHUyMUJBXCIgfSk7XHJcbiAgICAgICAgICAgIHJlc2V0RWwuYWRkQ2xhc3MoXCJtei1yZXNldC1idG5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clZhbCA9ICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXNbbGFuZ10gfHwge30pW1xyXG4gICAgICAgICAgICAgICAgZmllbGRcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgcmVzZXRFbC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCAhKGN1clZhbCAmJiBjdXJWYWwgIT09IGRlZlZhbCkpO1xyXG4gICAgICAgICAgICByZXNldEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0geyAuLi50aGlzLnBsdWdpbi5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXMgfTtcclxuICAgICAgICAgICAgICAgIGlmIChjW2xhbmddKSBkZWxldGUgY1tsYW5nXVtmaWVsZF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXMgPSBjO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpbnAudmFsdWUgPSBkZWZWYWw7XHJcbiAgICAgICAgICAgICAgICByZXNldEVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgaW5wID0gc2V0dGluZy5jb250cm9sRWwuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpbnAudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICBpbnAudmFsdWUgPSBjdXJWYWwgfHwgZGVmVmFsO1xyXG4gICAgICAgICAgICBpbnAuYWRkQ2xhc3MoXCJtei1uYW1lLWlucHV0XCIpO1xyXG4gICAgICAgICAgICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IGlucC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0geyAuLi50aGlzLnBsdWdpbi5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXMgfTtcclxuICAgICAgICAgICAgICAgIGNbbGFuZ10gPSB7IC4uLihjW2xhbmddIHx8IHt9KSwgW2ZpZWxkXTogdiB8fCB1bmRlZmluZWQgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lcyA9IGM7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIHJlc2V0RWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgISh2ICYmIHYgIT09IGRlZlZhbCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1rTmFtZVNldHRpbmcoXHJcbiAgICAgICAgICAgIHQoXCJzZXQucm9vdE5hbWVcIiksXHJcbiAgICAgICAgICAgIHQoXCJzZXQucm9vdE5hbWVEZXNjXCIpLFxyXG4gICAgICAgICAgICBcInJvb3RcIixcclxuICAgICAgICAgICAgZGVmUm9vdCxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rTmFtZVNldHRpbmcoXHJcbiAgICAgICAgICAgIHQoXCJzZXQuY2hpbGROYW1lXCIpLFxyXG4gICAgICAgICAgICB0KFwic2V0LmNoaWxkTmFtZURlc2NcIiksXHJcbiAgICAgICAgICAgIFwiY2hpbGRcIixcclxuICAgICAgICAgICAgZGVmQ2hpbGQsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKHQoXCJzZXQudHlwZVRvRWRpdFwiKSlcclxuICAgICAgICAgICAgLnNldERlc2ModChcInNldC50eXBlVG9FZGl0RGVzY1wiKSlcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodGcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRnLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnR5cGVUb0VkaXQpO1xyXG4gICAgICAgICAgICAgICAgdGcub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50eXBlVG9FZGl0ID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gS2V5Ym9hcmQgc2hvcnRjdXRzXHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUodChcInNldC5rZXlzXCIpKS5zZXRIZWFkaW5nKCk7XHJcbiAgICAgICAgY29uc3Qga2IgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5rZXlCaW5kaW5ncztcclxuICAgICAgICBjb25zdCBrZXlNYXA6IHsga2V5OiBTdHJpbmdLZXlzOyBsYWJlbDogc3RyaW5nIH1bXSA9IFtcclxuICAgICAgICAgICAgeyBrZXk6IFwiZWRpdE5vZGVcIiwgbGFiZWw6IHQoXCJzZXQua2V5LmVkaXRcIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwiYWRkU2libGluZ1wiLCBsYWJlbDogdChcInNldC5rZXkuc2libGluZ1wiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJhZGRDaGlsZFwiLCBsYWJlbDogdChcInNldC5rZXkuY2hpbGRcIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwiZm9jdXNOb2RlXCIsIGxhYmVsOiB0KFwic2V0LmtleS5mb2N1c1wiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJ1bmRvXCIsIGxhYmVsOiB0KFwic2V0LmtleS51bmRvXCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcInJlZG9cIiwgbGFiZWw6IHQoXCJzZXQua2V5LnJlZG9cIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwiZHJhZ0NhbnZhc1wiLCBsYWJlbDogdChcInNldC5rZXkuZHJhZ0NhbnZhc1wiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJuYXZVcFwiLCBsYWJlbDogdChcInNldC5rZXkudXBcIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwibmF2RG93blwiLCBsYWJlbDogdChcInNldC5rZXkuZG93blwiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJuYXZMZWZ0XCIsIGxhYmVsOiB0KFwic2V0LmtleS5sZWZ0XCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcIm5hdlJpZ2h0XCIsIGxhYmVsOiB0KFwic2V0LmtleS5yaWdodFwiKSB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGtleU1hcCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUoaXRlbS5sYWJlbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clZhbCA9IGtiW2l0ZW0ua2V5XTtcclxuICAgICAgICAgICAgY29uc3QgZGVmVmFsID0gREVGQVVMVF9LRVlCSU5ESU5HU1tpdGVtLmtleV0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICBjb25zdCByZXNldEVsID0gc2V0dGluZy5jb250cm9sRWwuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIlx1MjFCQVwiIH0pO1xyXG4gICAgICAgICAgICByZXNldEVsLmFkZENsYXNzKFwibXotcmVzZXQtYnRuXCIpO1xyXG4gICAgICAgICAgICByZXNldEVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIGN1clZhbCA9PT0gZGVmVmFsKTtcclxuICAgICAgICAgICAgcmVzZXRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAga2JbaXRlbS5rZXldID0gZGVmVmFsO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoQWxsVmlld3MoKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KGRlZlZhbCk7XHJcbiAgICAgICAgICAgICAgICByZXNldEVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGJ0bjogQnV0dG9uQ29tcG9uZW50O1xyXG4gICAgICAgICAgICBzZXR0aW5nLmFkZEJ1dHRvbigoYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnRuID0gYjtcclxuICAgICAgICAgICAgICAgIGIuc2V0QnV0dG9uVGV4dChTdHJpbmcoY3VyVmFsKSB8fCBcIi4uLlwiKTtcclxuICAgICAgICAgICAgICAgIGIub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYi5zZXRCdXR0b25UZXh0KHQoXCJzZXQua2V5LnByZXNzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVjb3JkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudENvbWJvID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzTWFpbktleSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWlsZENvbWJvID0gKGU6IEtleWJvYXJkRXZlbnQpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHBhcnRzLnB1c2goXCJjdHJsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkgcGFydHMucHVzaChcInNoaWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5hbHRLZXkpIHBhcnRzLnB1c2goXCJhbHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFbXCJDb250cm9sXCIsIFwiU2hpZnRcIiwgXCJBbHRcIiwgXCJNZXRhXCJdLmluY2x1ZGVzKGUua2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKGUua2V5ID09PSBcIiBcIiA/IFwiU3BhY2VcIiA6IGUua2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oXCIrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbmlzaCA9IChjb21ibzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVjb3JkaW5nKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZW91dCkgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25Eb3duLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBvblVwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2JbaXRlbS5rZXldID0gY29tYm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuc2V0QnV0dG9uVGV4dChjb21ibyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hBbGxWaWV3cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldEVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIGNvbWJvID09PSBkZWZWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWNvcmRpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbkRvd24sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIG9uVXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnNldEJ1dHRvblRleHQoU3RyaW5nKGtiW2l0ZW0ua2V5XSkgfHwgXCIuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb25Eb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb21ibyA9IGJ1aWxkQ29tYm8oZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01haW5LZXkgPSAhW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250cm9sXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNoaWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNZXRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0uaW5jbHVkZXMoZS5rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnNldEJ1dHRvblRleHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29tYm8gKyAoaGFzTWFpbktleSA/IFwiXCIgOiBcIitcdTIwMjZcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRpbWVvdXQgb24gZWFjaCBrZXlkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNhbmNlbCwgNTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb25VcCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluYWxpemUgd2hlbiBhIG5vbi1tb2RpZmllciBrZXkgaXMgcmVsZWFzZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc01haW5LZXkgJiYgY3VycmVudENvbWJvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2goY3VycmVudENvbWJvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbkRvd24sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgb25VcCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoY2FuY2VsLCA1MDAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKS5zZXROYW1lKHQoXCJzZXQuc2Nyb2xsXCIpKS5zZXRIZWFkaW5nKCk7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUodChcInNldC5pbnZlcnRZXCIpKS5hZGRUb2dnbGUoKHRnKSA9PiB7XHJcbiAgICAgICAgICAgIHRnLnNldFZhbHVlKGtiLmludmVydFNjcm9sbFkpO1xyXG4gICAgICAgICAgICB0Zy5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAga2IuaW52ZXJ0U2Nyb2xsWSA9IHY7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUodChcInNldC5pbnZlcnRYXCIpKS5hZGRUb2dnbGUoKHRnKSA9PiB7XHJcbiAgICAgICAgICAgIHRnLnNldFZhbHVlKGtiLmludmVydFNjcm9sbFgpO1xyXG4gICAgICAgICAgICB0Zy5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAga2IuaW52ZXJ0U2Nyb2xsWCA9IHY7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKHQoXCJzZXQuaW52ZXJ0Wm9vbVwiKSlcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodGcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRnLnNldFZhbHVlKGtiLmludmVydFpvb20pO1xyXG4gICAgICAgICAgICAgICAgdGcub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBrYi5pbnZlcnRab29tID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lckVsLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLElBQUFBLG1CQUFxRDs7O0FDQXJELHNCQUFrRDs7O0FDdUkzQyxJQUFNLHdCQUE0QztBQUFBLEVBQ3JELGdCQUFnQjtBQUFBLEVBQ2hCLG1CQUFtQjtBQUFBLEVBQ25CLHVCQUF1QjtBQUFBLEVBQ3ZCLHVCQUF1QjtBQUFBLEVBQ3ZCLHFCQUFxQjtBQUFBLEVBQ3JCLG9CQUFvQjtBQUFBLEVBQ3BCLG9CQUFvQjtBQUN4QjtBQUVPLElBQU0sdUJBQTJDO0FBQUEsRUFDcEQsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsdUJBQXVCO0FBQUEsRUFDdkIsdUJBQXVCO0FBQUEsRUFDdkIscUJBQXFCO0FBQUEsRUFDckIsb0JBQW9CO0FBQUEsRUFDcEIsb0JBQW9CO0FBQ3hCO0FBRU8sSUFBTSxtQkFBNkM7QUFBQSxFQUN0RCxTQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNIO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNSO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQ0o7QUFFTyxJQUFNLFlBQVk7QUFBQSxFQUNyQjtBQUFBLEVBQ0E7QUFBQSxFQUNB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QUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFB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RUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVB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LEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxF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WUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtC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VztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLEVBQ2IsY0FBYztBQUFBLEVBQ2Qsb0JBQW9CO0FBQUEsRUFDcEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFB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Q1YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLEVBQ2IsY0FBYztBQUFBLEVBQ2Qsb0JBQW9CO0FBQUEsRUFDcEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xC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QUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLEVBQ2IsY0FBYztBQUFBLEVBQ2Qsb0JBQW9CO0FBQUEsRUFDcEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLHFCQUFxQjtBQUFBLEVBQ3JCLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLHNCQUFzQjtBQUFBLEVBQ3RCLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLG1CQUFtQjtBQUFBLEVBQ25CLGdCQUFnQjtBQUFBLEVBQ2hCLG9CQUFvQjtBQUFBLEVBQ3BCLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLFlBQ0k7QUFBQSxFQUNKLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLG1CQUFtQjtBQUFBLEVBQ25CLGlCQUFpQjtBQUFBLEVBQ2pCLGlCQUFpQjtBQUFBLEVBQ2pCLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLHFCQUFxQjtBQUFBLEVBQ3JCLHNCQUFzQjtBQUFBLEVBQ3RCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLHFCQUFxQjtBQUFBLEVBQ3JCLGNBQWM7QUFBQSxFQUNkLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLG9CQUFvQjtBQUFBLEVBQ3BCLHdCQUF3QjtBQUFBLEVBQ3hCLGdCQUFnQjtBQUFBLEVBQ2hC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QUEsTUFDckI7QUFDQSxZQUFNLE9BQU8sS0FBSyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQzdDLFlBQU0sS0FBSyxTQUFTLENBQUM7QUFDckIsV0FBSyxJQUFJLFVBQVUsY0FBYyxNQUFNLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFBQSxJQUMxRCxTQUFRLEdBQU47QUFBQSxJQUVGO0FBQUEsRUFDSjtBQUFBLEVBQ0EsTUFBTSxpQkFBaUI7QUEzUDNCO0FBNFBRLFVBQU0sS0FBSyxLQUFLLElBQUksVUFBVSxnQkFBZ0IsdUJBQXVCO0FBQ3JFLFFBQUk7QUFDSixRQUFJLEdBQUc7QUFBUSxVQUFJLEdBQUcsQ0FBQztBQUFBLFNBQ2xCO0FBQ0QsV0FDSSxVQUFLLElBQUksVUFBVSxhQUFhLEtBQUssTUFBckMsWUFDQSxLQUFLLElBQUksVUFBVSxRQUFRLElBQUk7QUFDbkMsWUFBTSxFQUFFLGFBQWE7QUFBQSxRQUNqQixNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFDTDtBQUNBLFNBQUssSUFBSSxVQUFVLFdBQVcsQ0FBQztBQUFBLEVBQ25DO0FBQ0o7IiwKICAibmFtZXMiOiBbImltcG9ydF9vYnNpZGlhbiIsICJjYiIsICJfYSIsICJ0IiwgImRuIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAiX2EiXQp9Cg==
