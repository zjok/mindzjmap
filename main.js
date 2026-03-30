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
  "sm.nodeGapY": "Sibling Gap",
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
  "sm.nodeGapY": "\u540C\u7EA7\u95F4\u8DDD",
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
  "sm.nodeGapY": "\u5144\u5F1F\u30CE\u30FC\u30C9\u9593\u9694",
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
  "sm.nodeGapY": "Espacement fr\xE8res",
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
  "sm.nodeGapY": "Geschwisterabstand",
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
  "sm.nodeGapY": "Espacio entre hermanos",
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
  "sm.nodeGapY": "\u041E\u0442\u0441\u0442\u0443\u043F \u043C\u0435\u0436\u0434\u0443 \u0443\u0437\u043B\u0430\u043C\u0438",
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
  "sm.nodeGapY": "Syskonmellanrum",
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
  "sm.nodeGapY": "\u0938\u0939\u094B\u0926\u0930 \u0905\u0902\u0924\u0930\u093E\u0932",
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
  "sm.nodeGapY": "\uD615\uC81C \uAC04\uACA9",
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
  "sm.nodeGapY": "Espa\xE7amento entre irm\xE3os",
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
  "sm.nodeGapY": "Sisarusv\xE4li",
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
  "sm.nodeGapY": "S\xF8skenavstand",
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
  "sm.nodeGapY": "Tussenafstand",
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
  "sm.nodeGapY": "Geschwisterabstand",
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
  "sm.nodeGapY": "S\xF8skendeafstand",
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
  "sm.nodeGapY": "\u05DE\u05E8\u05D5\u05D5\u05D7 \u05D1\u05D9\u05DF \u05D0\u05D7\u05D9\u05DD",
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
  "sm.nodeGapY": "Spaziatura fratelli",
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
  "sm.nodeGapY": "\u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0628\u064A\u0646 \u0627\u0644\u0623\u0634\u0642\u0627\u0621",
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
    R(s3, t("sm.nodeGapY"), "nodeGapY", "number", {
      min: 8,
      max: 80
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
    mkRange(s3, t("sm.nodeGapY"), "nodeGapY", 8, 80);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL01pbmRNYXBWaWV3LnRzIiwgInNyYy90eXBlcy50cyIsICJzcmMvaTE4bi50cyIsICJzcmMvU3R5bGVQYW5lbFZpZXcudHMiLCAic3JjL1NldHRpbmdzVGFiLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBzcmMvbWFpbi50c1xyXG5pbXBvcnQgeyBQbHVnaW4sIFdvcmtzcGFjZUxlYWYsIFRGb2xkZXIsIE1lbnUgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHsgTWluZE1hcFZpZXcgfSBmcm9tIFwiLi9NaW5kTWFwVmlld1wiO1xyXG5pbXBvcnQgeyBTdHlsZVBhbmVsVmlldyB9IGZyb20gXCIuL1N0eWxlUGFuZWxWaWV3XCI7XHJcbmltcG9ydCB7IE1pbmRNYXBTZXR0aW5nVGFiIH0gZnJvbSBcIi4vU2V0dGluZ3NUYWJcIjtcclxuaW1wb3J0IHsgc2V0TGFuZywgdCB9IGZyb20gXCIuL2kxOG5cIjtcclxuaW1wb3J0IHtcclxuICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgVklFV19UWVBFX01JTkRNQVBfU1RZTEUsXHJcbiAgICBNSU5ETUFQX0ZJTEVfRVhURU5TSU9OLFxyXG4gICAgTWluZE1hcFN0eWxlLFxyXG4gICAgUGx1Z2luU2V0dGluZ3MsXHJcbiAgICBERUZBVUxUX1NFVFRJTkdTLFxyXG4gICAgREVGQVVMVF9TVFlMRSxcclxuICAgIERFRkFVTFRfS0VZQklORElOR1MsXHJcbiAgICBUb29sYmFyVGhlbWVDb2xvcnMsXHJcbiAgICBERUZBVUxUX1RPT0xCQVJfTElHSFQsXHJcbiAgICBERUZBVUxUX1RPT0xCQVJfREFSSyxcclxufSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuaW50ZXJmYWNlIE1lbnVXaXRoSXRlbXMgZXh0ZW5kcyBNZW51IHtcclxuICAgIGl0ZW1zOiBBcnJheTx7IHNlY3Rpb24/OiBzdHJpbmc7IHRpdGxlRWw/OiBIVE1MRWxlbWVudDsgdGl0bGU/OiBzdHJpbmcgfT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmROb2RlUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcclxuICAgIHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncyA9IHtcclxuICAgICAgICAuLi5ERUZBVUxUX1NFVFRJTkdTLFxyXG4gICAgICAgIHN0eWxlOiB7IC4uLkRFRkFVTFRfU1RZTEUgfSxcclxuICAgICAgICBrZXlCaW5kaW5nczogeyAuLi5ERUZBVUxUX0tFWUJJTkRJTkdTIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG4gICAgICAgIHNldExhbmcodGhpcy5zZXR0aW5ncy5sYW5ndWFnZSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV4dGVuc2lvbnMoW01JTkRNQVBfRklMRV9FWFRFTlNJT05dLCBWSUVXX1RZUEVfTUlORE1BUCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclZpZXcoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICAgICAobGVhZikgPT4gbmV3IE1pbmRNYXBWaWV3KGxlYWYsIHRoaXMpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclZpZXcoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFLFxyXG4gICAgICAgICAgICAobGVhZikgPT4gbmV3IFN0eWxlUGFuZWxWaWV3KGxlYWYsIHRoaXMpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBNaW5kTWFwU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG4gICAgICAgIHRoaXMuYWRkUmliYm9uSWNvbihcIm5ldHdvcmtcIiwgXCJOZXcgTWluZFpKXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdm9pZCB0aGlzLmNyZWF0ZU5ldygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgICAgIGlkOiBcImNyZWF0ZS1uZXdcIixcclxuICAgICAgICAgICAgbmFtZTogXCJOZXcgbWluZCBtYXBcIixcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZvaWQgdGhpcy5jcmVhdGVOZXcoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImZpbGUtbWVudVwiLCAobWVudSwgZmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIFRGb2xkZXIpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUoXCJOZXcgTWluZFpKXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJY29uKFwibmV0d29ya1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIHRoaXMuY3JlYXRlSW5Gb2xkZXIoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBtZW51IGFzIHVua25vd24gYXMgTWVudVdpdGhJdGVtcztcclxuICAgICAgICAgICAgICAgIGlmIChtLml0ZW1zPy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXpqID0gbS5pdGVtcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobXpqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IG0uaXRlbXMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdC50aXRsZUVsPy50ZXh0Q29udGVudCA/PyBpdC50aXRsZSkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOZXcgZm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXpqLnNlY3Rpb24gPSBtLml0ZW1zW2lkeF0uc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uaXRlbXMuc3BsaWNlKGlkeCArIDEsIDAsIG16aik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLml0ZW1zLnVuc2hpZnQobXpqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbnVubG9hZCgpOiB2b2lkIHtcclxuICAgICAgICAvKiBubyBjbGVhbnVwIG5lZWRlZCAqL1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyAuLi5ERUZBVUxUX1NUWUxFLCAuLi4oZC5zdHlsZSA/PyB7fSkgfSxcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBkLmxhbmd1YWdlID8/IFwiZW5cIixcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBkLnRoZW1lID8/IFwibGlnaHRcIixcclxuICAgICAgICAgICAgICAgIHNob3dUb29sYmFyOiBkLnNob3dUb29sYmFyID8/IHRydWUsXHJcbiAgICAgICAgICAgICAgICBrZXlCaW5kaW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLkRFRkFVTFRfS0VZQklORElOR1MsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uKGQua2V5QmluZGluZ3MgPz8ge30pLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRldmVsb3Blck1vZGU6IGQuZGV2ZWxvcGVyTW9kZSA/PyBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVkaXRPbkNyZWF0ZTogZC5lZGl0T25DcmVhdGUgPz8gdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHR5cGVUb0VkaXQ6IGQudHlwZVRvRWRpdCA/PyB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tTm9kZU5hbWVzOiBkLmN1c3RvbU5vZGVOYW1lcyA/PyB7fSxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJTdHlsZUxpZ2h0OiBkLnRvb2xiYXJTdHlsZUxpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhclN0eWxlRGFyazogZC50b29sYmFyU3R5bGVEYXJrLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZCA9IFtcclxuICAgICAgICAgICAgICAgIFwiYmV6aWVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0cmFpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1cnZlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGVwXCIsXHJcbiAgICAgICAgICAgICAgICBcImJyYWNrZXRcIixcclxuICAgICAgICAgICAgICAgIFwibG9vc2VcIixcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZC5pbmNsdWRlcyh0aGlzLnNldHRpbmdzLnN0eWxlLmNvbm5lY3Rpb25TdHlsZSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnN0eWxlLmNvbm5lY3Rpb25TdHlsZSA9IFwiYmV6aWVyXCI7XHJcbiAgICAgICAgICAgIC8vIFVwZ3JhZGU6IGFwcGx5IHRoZW1lLWFwcHJvcHJpYXRlIHRvb2xiYXIgY29sb3JzIHdoZW5cclxuICAgICAgICAgICAgLy8gcGVyLXRoZW1lIHNuYXBzaG90cyBoYXZlbid0IGJlZW4gc2F2ZWQgeWV0IChlLmcuIHVzZXJcclxuICAgICAgICAgICAgLy8gdXBncmFkZWQgZnJvbSBhIHZlcnNpb24gdGhhdCBkaWRuJ3QgcGVyc2lzdCB0aGVtKS5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudGhlbWUgPT09IFwiZGFya1wiICYmICFkLnRvb2xiYXJTdHlsZURhcmspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb29sYmFyQ29sb3JzKERFRkFVTFRfVE9PTEJBUl9EQVJLKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgdXBkYXRlU3R5bGUocDogUGFydGlhbDxNaW5kTWFwU3R5bGU+KSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zdHlsZSA9IHsgLi4udGhpcy5zZXR0aW5ncy5zdHlsZSwgLi4ucCB9O1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XHJcbiAgICB9XHJcbiAgICBnZXRTdHlsZSgpOiBNaW5kTWFwU3R5bGUge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMuc2V0dGluZ3Muc3R5bGUgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRvb2xiYXJDb2xvcnMoKTogVG9vbGJhclRoZW1lQ29sb3JzIHtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5zZXR0aW5ncy5zdHlsZTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b29sYmFyQmdDb2xvcjogcy50b29sYmFyQmdDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJ0bkJnQ29sb3I6IHMudG9vbGJhckJ0bkJnQ29sb3IsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogcy50b29sYmFyQnRuQm9yZGVyU3R5bGUsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogcy50b29sYmFyQnRuQm9yZGVyQ29sb3IsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5UZXh0Q29sb3I6IHMudG9vbGJhckJ0blRleHRDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJvcmRlckNvbG9yOiBzLnRvb2xiYXJCb3JkZXJDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJvcmRlcldpZHRoOiBzLnRvb2xiYXJCb3JkZXJXaWR0aCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhcHBseVRvb2xiYXJDb2xvcnModGM6IFRvb2xiYXJUaGVtZUNvbG9ycykge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zZXR0aW5ncy5zdHlsZSwgdGMpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3dpdGNoVGhlbWUobmV3VGhlbWU6IFwibGlnaHRcIiB8IFwiZGFya1wiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudGhlbWUgPT09IFwibGlnaHRcIilcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy50b29sYmFyU3R5bGVMaWdodCA9IHRoaXMuZ2V0VG9vbGJhckNvbG9ycygpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5zZXR0aW5ncy50b29sYmFyU3R5bGVEYXJrID0gdGhpcy5nZXRUb29sYmFyQ29sb3JzKCk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aGVtZSA9IG5ld1RoZW1lO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3R5bGUuY2FudmFzQmcgPVxyXG4gICAgICAgICAgICBuZXdUaGVtZSA9PT0gXCJkYXJrXCIgPyBcIiMxZTFlMWVcIiA6IFwiI2ZmZmZmZlwiO1xyXG4gICAgICAgIHRoaXMuYXBwbHlUb29sYmFyQ29sb3JzKFxyXG4gICAgICAgICAgICBuZXdUaGVtZSA9PT0gXCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgICA/ICh0aGlzLnNldHRpbmdzLnRvb2xiYXJTdHlsZUxpZ2h0ID8/IERFRkFVTFRfVE9PTEJBUl9MSUdIVClcclxuICAgICAgICAgICAgICAgIDogKHRoaXMuc2V0dGluZ3MudG9vbGJhclN0eWxlRGFyayA/PyBERUZBVUxUX1RPT0xCQVJfREFSSyksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZVRvQWxsVmlld3ModGhpcy5zZXR0aW5ncy5zdHlsZSk7XHJcbiAgICB9XHJcbiAgICBnZXRSb290TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lc1t0aGlzLnNldHRpbmdzLmxhbmd1YWdlXTtcclxuICAgICAgICByZXR1cm4gbj8ucm9vdCB8fCB0KFwiZGVmLnJvb3RcIik7XHJcbiAgICB9XHJcbiAgICBnZXRDaGlsZE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBuID0gdGhpcy5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXNbdGhpcy5zZXR0aW5ncy5sYW5ndWFnZV07XHJcbiAgICAgICAgcmV0dXJuIG4/LmNoaWxkIHx8IHQoXCJkZWYuY2hpbGRcIik7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoQWxsVmlld3MoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICkpXHJcbiAgICAgICAgICAgIGlmIChsZWFmLnZpZXcgaW5zdGFuY2VvZiBNaW5kTWFwVmlldykgbGVhZi52aWV3LnJlZnJlc2hVSSgpO1xyXG4gICAgfVxyXG4gICAgYXBwbHlTdHlsZVRvQWxsVmlld3MoczogTWluZE1hcFN0eWxlKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICkpXHJcbiAgICAgICAgICAgIGlmIChsZWFmLnZpZXcgaW5zdGFuY2VvZiBNaW5kTWFwVmlldylcclxuICAgICAgICAgICAgICAgIGxlYWYudmlldy5hcHBseVN0eWxlKHsgLi4ucyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuUGx1Z2luU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICBjb25zdCBhcHBSZWMgPSB0aGlzLmFwcCBhcyB1bmtub3duIGFzIFJlY29yZDxcclxuICAgICAgICAgICAgc3RyaW5nLFxyXG4gICAgICAgICAgICB7IG9wZW4oKTogdm9pZDsgb3BlblRhYkJ5SWQoaWQ6IHN0cmluZyk6IHZvaWQgfVxyXG4gICAgICAgID47XHJcbiAgICAgICAgaWYgKGFwcFJlYy5zZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIGFwcFJlYy5zZXR0aW5nLm9wZW4oKTtcclxuICAgICAgICAgICAgYXBwUmVjLnNldHRpbmcub3BlblRhYkJ5SWQodGhpcy5tYW5pZmVzdC5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvb3ROb2RlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuZ2V0Um9vdE5hbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Jvb3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDIsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdW5pUGF0aChmb2xkZXI6IFRGb2xkZXIsIGJhc2U6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGV4dCA9IE1JTkRNQVBfRklMRV9FWFRFTlNJT04sXHJcbiAgICAgICAgICAgIHByZSA9IGZvbGRlci5wYXRoID09PSBcIi9cIiA/IFwiXCIgOiBmb2xkZXIucGF0aCArIFwiL1wiO1xyXG4gICAgICAgIGxldCBwID0gYCR7cHJlfSR7YmFzZX0uJHtleHR9YCxcclxuICAgICAgICAgICAgbiA9IDE7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwKSkge1xyXG4gICAgICAgICAgICBwID0gYCR7cHJlfSR7YmFzZX0gJHtufS4ke2V4dH1gO1xyXG4gICAgICAgICAgICBuKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhc3luYyBjcmVhdGVOZXcoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJbkZvbGRlcihcclxuICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKT8ucGFyZW50ID8/XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXRSb290KCksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXN5bmMgY3JlYXRlSW5Gb2xkZXIoZm9sZGVyOiBURm9sZGVyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHRoaXMudW5pUGF0aChmb2xkZXIsIFwiVW50aXRsZWQgTWluZFpKXCIpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0RGF0YSgpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBsZWFmID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XHJcbiAgICAgICAgICAgIGF3YWl0IGxlYWYub3BlbkZpbGUoZik7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5zZXRBY3RpdmVMZWFmKGxlYWYsIHsgZm9jdXM6IHRydWUgfSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIC8qIGZpbGUgY3JlYXRpb24gbWF5IGZhaWwgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBvcGVuU3R5bGVQYW5lbCgpIHtcclxuICAgICAgICBjb25zdCBscyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX01JTkRNQVBfU1RZTEUpO1xyXG4gICAgICAgIGxldCBsOiBXb3Jrc3BhY2VMZWFmO1xyXG4gICAgICAgIGlmIChscy5sZW5ndGgpIGwgPSBsc1swXTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbCA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0UmlnaHRMZWFmKGZhbHNlKSA/P1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYodHJ1ZSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGwuc2V0Vmlld1N0YXRlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLnJldmVhbExlYWYobCk7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8vIHNyYy9NaW5kTWFwVmlldy50c1xyXG5pbXBvcnQgeyBUZXh0RmlsZVZpZXcsIFdvcmtzcGFjZUxlYWYsIE1lbnUgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHtcclxuICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgQm9yZGVyU3R5bGUsXHJcbiAgICBNaW5kTm9kZURhdGEsXHJcbiAgICBNaW5kTWFwU3R5bGUsXHJcbiAgICBERUZBVUxUX1NUWUxFLFxyXG4gICAgREVGQVVMVF9UT09MQkFSX0xJR0hULFxyXG4gICAgREVGQVVMVF9UT09MQkFSX0RBUkssXHJcbiAgICBSQUlOQk9XX1BBTEVUVEVTLFxyXG4gICAgRk9OVF9MSVNULFxyXG4gICAgQ09OTkVDVElPTl9TVFlMRVMsXHJcbiAgICBLZXlCaW5kaW5ncyxcclxufSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSBcIi4vaTE4blwiO1xyXG5pbXBvcnQgdHlwZSBNaW5kTm9kZVBsdWdpbiBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG50eXBlIExheW91dE5vZGUgPSBNaW5kTm9kZURhdGEgJiB7IF9zaD86IG51bWJlciB9O1xyXG5cclxuaW50ZXJmYWNlIFJvb3REcmFnIHtcclxuICAgIGlzUm9vdERyYWc6IHRydWU7XHJcbiAgICBub2RlSWQ6IHN0cmluZztcclxuICAgIHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgc3RhcnRZOiBudW1iZXI7XHJcbiAgICBuc3g6IG51bWJlcjtcclxuICAgIG5zeTogbnVtYmVyO1xyXG4gICAgcGVlcnM/OiB7IGlkOiBzdHJpbmc7IHN4OiBudW1iZXI7IHN5OiBudW1iZXIgfVtdO1xyXG59XHJcbmludGVyZmFjZSBDaGlsZERyYWcge1xyXG4gICAgaXNSb290RHJhZzogZmFsc2U7XHJcbiAgICBub2RlSWQ6IHN0cmluZztcclxuICAgIHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgc3RhcnRZOiBudW1iZXI7XHJcbiAgICBnaG9zdEVsOiBTVkdFbGVtZW50IHwgbnVsbDtcclxuICAgIGluZGljYXRvckVsOiBTVkdSZWN0RWxlbWVudCB8IG51bGw7XHJcbiAgICBzbmFwOiBzdHJpbmc7XHJcbn1cclxudHlwZSBEcmFnU3RhdGUgPSAoeyBpc0RyYWdnaW5nOiBib29sZWFuIH0gJiAoUm9vdERyYWcgfCBDaGlsZERyYWcpKSB8IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgTWluZE1hcFZpZXcgZXh0ZW5kcyBUZXh0RmlsZVZpZXcge1xyXG4gICAgcHJpdmF0ZSBzdmdFbCE6IFNWR1NWR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGdFbCE6IFNWR0dFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBlZGdlc0chOiBTVkdHRWxlbWVudDtcclxuICAgIHByaXZhdGUgbm9kZXNHITogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG92ZXJsYXlHITogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNjITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHN2Z0N0ITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1kQ3QhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0YkVsITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGRldkVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwYW5YID0gMDtcclxuICAgIHByaXZhdGUgcGFuWSA9IDA7XHJcbiAgICBwcml2YXRlIHpvb20gPSAxO1xyXG4gICAgcHJpdmF0ZSBzcGFjZURvd24gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZHJhZ0N2ID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNteCA9IDA7XHJcbiAgICBwcml2YXRlIHNteSA9IDA7XHJcbiAgICBwcml2YXRlIHNlbElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgbXVsdGlTZWwgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIHByaXZhdGUgZWRpdElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgcm9vdHM6IE1pbmROb2RlRGF0YVtdID0gW107XHJcbiAgICBwcml2YXRlIGxjdCA9IDA7XHJcbiAgICBwcml2YXRlIGxjbmlkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29tbWl0RWRpdDogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVuZG9TOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZWRvUzogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdHlsZTogTWluZE1hcFN0eWxlID0geyAuLi5ERUZBVUxUX1NUWUxFIH07XHJcbiAgICBwcml2YXRlIGRzOiBEcmFnU3RhdGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwbHVnaW46IE1pbmROb2RlUGx1Z2luO1xyXG4gICAgcHJpdmF0ZSB1aU9rID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGJveFNlbCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBic3ggPSAwO1xyXG4gICAgcHJpdmF0ZSBic3kgPSAwO1xyXG4gICAgcHJpdmF0ZSBiY3ggPSAwO1xyXG4gICAgcHJpdmF0ZSBiY3kgPSAwO1xyXG4gICAgcHJpdmF0ZSBib3hTaGlmdCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBib3hFbDogU1ZHUmVjdEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgcG9wQ2xvc2U6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtZE1vZGUgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbWRCdG46IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNsaXBib2FyZDogeyBkYXRhOiBzdHJpbmc7IGlzUm9vdDogYm9vbGVhbjsgY3V0OiBib29sZWFuIH0gfCBudWxsID1cclxuICAgICAgICBudWxsO1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVNZW51OiBNZW51IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNlYXJjaEJhcjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2VhcmNoUmVzdWx0czogTWluZE5vZGVEYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgc2VhcmNoSWR4ID0gMDtcclxuICAgIHByaXZhdGUgb2xkUG9zID0gbmV3IE1hcDxzdHJpbmcsIHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4oKTtcclxuICAgIHByaXZhdGUgYW5pbUlkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgbGl2ZVRBOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIG1kU25hcHNob3Q6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB6b29tTGFiZWw6IEhUTUxTcGFuRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwcm94eVRBOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBNaW5kTm9kZVBsdWdpbikge1xyXG4gICAgICAgIHN1cGVyKGxlYWYpO1xyXG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBwbHVnaW4uZ2V0U3R5bGUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0IGtiKCk6IEtleUJpbmRpbmdzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW4uc2V0dGluZ3Mua2V5QmluZGluZ3M7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFJhaW5ib3coKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnN0eWxlLnJhaW5ib3dQYWxldHRlO1xyXG4gICAgICAgIGlmICh0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzPy5bcF0pIHJldHVybiB0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzW3BdO1xyXG4gICAgICAgIHJldHVybiBSQUlOQk9XX1BBTEVUVEVTW3BdIHx8IFJBSU5CT1dfUEFMRVRURVMuY2xhc3NpYztcclxuICAgIH1cclxuICAgIHByaXZhdGUgbWtSb290KHR4dDogc3RyaW5nKTogTWluZE5vZGVEYXRhIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcclxuICAgICAgICAgICAgdGV4dDogdHh0LFxyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5jYWxjVyh0eHQsIHRydWUpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY2FsY0godHh0LCB0cnVlKSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICBpc1Jvb3Q6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldFZpZXdUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiBWSUVXX1RZUEVfTUlORE1BUDtcclxuICAgIH1cclxuICAgIGdldERpc3BsYXlUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUuYmFzZW5hbWUgOiBcIk1pbmRaSlwiO1xyXG4gICAgfVxyXG4gICAgZ2V0SWNvbigpIHtcclxuICAgICAgICByZXR1cm4gXCJuZXR3b3JrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld0RhdGEoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5lZGl0SWQgJiYgdGhpcy5saXZlVEEpIHtcclxuICAgICAgICAgICAgY29uc3QgbmQgPSB0aGlzLmZBbGwodGhpcy5lZGl0SWQpO1xyXG4gICAgICAgICAgICBpZiAobmQpIG5kLnRleHQgPSB0aGlzLmxpdmVUQS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHsgcm9vdE5vZGVzOiB0aGlzLnJvb3RzIH0sIG51bGwsIDIpO1xyXG4gICAgfVxyXG4gICAgc2V0Vmlld0RhdGEoZGF0YTogc3RyaW5nLCBjbGVhcjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjbGVhcikge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMudW5kb1MgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5yZWRvUyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzID1cclxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocC5yb290Tm9kZXMpICYmIHAucm9vdE5vZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgID8gcC5yb290Tm9kZXNcclxuICAgICAgICAgICAgICAgICAgICA6IFt0aGlzLm1rUm9vdCh0aGlzLnBsdWdpbi5nZXRSb290TmFtZSgpKV07XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdHMgPSBbdGhpcy5ta1Jvb3QodGhpcy5wbHVnaW4uZ2V0Um9vdE5hbWUoKSldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yb290cy5sZW5ndGggJiYgIXRoaXMuc2VsSWQpIHRoaXMuc2VsSWQgPSB0aGlzLnJvb3RzWzBdLmlkO1xyXG4gICAgICAgIGlmICh0aGlzLnVpT2spIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWRNb2RlKSB0aGlzLnJlbmRlck1kKCk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5maXRBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnJvb3RzID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWwuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9TYXZlKCkge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdFNhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZml0QWxsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYyB8fCAhdGhpcy5yb290cy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBjb25zdCByYyA9IHRoaXMuY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgLy8gR3VhcmQ6IGNvbnRhaW5lciBub3QgeWV0IGxhaWQgb3V0IFx1MjAxNCByZXRyeSBvbiBuZXh0IGZyYW1lXHJcbiAgICAgICAgaWYgKHJjLndpZHRoIDwgMSB8fCByYy5oZWlnaHQgPCAxKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmZpdEFsbCgpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kb0xheW91dChyKTtcclxuICAgICAgICBsZXQgeDEgPSBJbmZpbml0eSxcclxuICAgICAgICAgICAgeDIgPSAtSW5maW5pdHksXHJcbiAgICAgICAgICAgIHkxID0gSW5maW5pdHksXHJcbiAgICAgICAgICAgIHkyID0gLUluZmluaXR5O1xyXG4gICAgICAgIGNvbnN0IHZpcyA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgeDEgPSBNYXRoLm1pbih4MSwgbi54IC0gbi53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICB4MiA9IE1hdGgubWF4KHgyLCBuLnggKyBuLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAgIHkxID0gTWF0aC5taW4oeTEsIG4ueSAtIG4uaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIHkyID0gTWF0aC5tYXgoeTIsIG4ueSArIG4uaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB2aXMoYyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdmlzKHIpO1xyXG4gICAgICAgIHRoaXMuem9vbSA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihyYy53aWR0aCAvICh4MiAtIHgxICsgMTAwKSwgcmMuaGVpZ2h0IC8gKHkyIC0geTEgKyAxMDApKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghaXNGaW5pdGUodGhpcy56b29tKSB8fCB0aGlzLnpvb20gPD0gMCkgdGhpcy56b29tID0gMTtcclxuICAgICAgICB0aGlzLnBhblggPSByYy53aWR0aCAvIDIgLSAoKHgxICsgeDIpIC8gMikgKiB0aGlzLnpvb207XHJcbiAgICAgICAgdGhpcy5wYW5ZID0gcmMuaGVpZ2h0IC8gMiAtICgoeTEgKyB5MikgLyAyKSAqIHRoaXMuem9vbTtcclxuICAgICAgICB0aGlzLnVwZFR4KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZm9jdXNOb2RlKG5kOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2MpIHJldHVybjtcclxuICAgICAgICBjb25zdCByID0gdGhpcy5jYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB0aGlzLnBhblggPSByLndpZHRoIC8gMiAtIG5kLnggKiB0aGlzLnpvb20gLSByLndpZHRoICogMC4xNztcclxuICAgICAgICB0aGlzLnBhblkgPSByLmhlaWdodCAvIDIgLSBuZC55ICogdGhpcy56b29tIC0gci5oZWlnaHQgKiAwLjA1O1xyXG4gICAgICAgIHRoaXMudXBkVHgoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZWZyZXNoVUkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVpT2spIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy50YkVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGJFbC5lbXB0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVGIodGhpcy50YkVsKTtcclxuICAgICAgICAgICAgdGhpcy5hcHBseVRvb2xiYXJTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVRvb2xiYXJWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgdGhpcy5hcHBseUNhbnZhc0JnKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXZQYW5lbCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWF3YWl0XHJcbiAgICBhc3luYyBvbk9wZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY3QgPSB0aGlzLmNvbnRhaW5lckVsLmNoaWxkcmVuWzFdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGN0LmVtcHR5KCk7XHJcbiAgICAgICAgY3QuYWRkQ2xhc3MoXCJtei12aWV3LWN0XCIpO1xyXG4gICAgICAgIC8vIHBhZGRpbmcgb3ZlcnJpZGUgbW92ZWQgdG8gc3R5bGVzLmNzc1xyXG4gICAgICAgIHRoaXMudGJFbCA9IGN0LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlUb29sYmFyU3R5bGUoKTtcclxuICAgICAgICB0aGlzLmJ1aWxkVGIodGhpcy50YkVsKTtcclxuICAgICAgICB0aGlzLnN2Z0N0ID0gY3QuY3JlYXRlRWwoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICBhdHRyOiB7IHRhYmluZGV4OiBcIjBcIiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3ZnQ3QuYWRkQ2xhc3MoXCJtei1zdmctY3RcIik7XHJcbiAgICAgICAgdGhpcy5jYyA9IHRoaXMuc3ZnQ3Q7XHJcbiAgICAgICAgLy8gRklYOiBwcmV2ZW50IGJyb3dzZXIgZnJvbSBzY3JvbGxpbmcgdGhlIGNvbnRhaW5lciBcdTIwMTQgcGFubmluZyB1c2VzIENTUyB0cmFuc2Zvcm0gb25seVxyXG4gICAgICAgIHRoaXMuc3ZnQ3QuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnQ3QhLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnQ3QhLnNjcm9sbExlZnQgPSAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXBwbHlDYW52YXNCZygpO1xyXG4gICAgICAgIHRoaXMuc3ZnRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgXCJzdmdcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc3ZnRWwuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgIHRoaXMuc3ZnRWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKTtcclxuICAgICAgICAvLyBTVkcgZGlzcGxheSBibG9jayBpcyBkZWZhdWx0XHJcbiAgICAgICAgdGhpcy5jYy5hcHBlbmRDaGlsZCh0aGlzLnN2Z0VsKTtcclxuICAgICAgICB0aGlzLmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcclxuICAgICAgICB0aGlzLnN2Z0VsLmFwcGVuZENoaWxkKHRoaXMuZ0VsKTtcclxuICAgICAgICB0aGlzLmVkZ2VzRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICBcImdcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ0VsLmFwcGVuZENoaWxkKHRoaXMuZWRnZXNHKTtcclxuICAgICAgICB0aGlzLm5vZGVzRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICBcImdcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ0VsLmFwcGVuZENoaWxkKHRoaXMubm9kZXNHKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXlHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgIFwiZ1wiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5nRWwuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5Ryk7XHJcbiAgICAgICAgdGhpcy5tZEN0ID0gY3QuY3JlYXRlRWwoXCJ0ZXh0YXJlYVwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICAgIHRoaXMubWRDdC5hZGRDbGFzcyhcIm16LW1kLXRhXCIpO1xyXG4gICAgICAgIHRoaXMubWRDdC5hZGRDbGFzcyhcIm16LWhpZGRlblwiKTtcclxuICAgICAgICB0aGlzLmJpbmRFdnRzKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2tkLCB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2t1LCB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5fbXUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMudWlPayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb29sYmFyVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGV2UGFuZWwoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm9vdHMubGVuZ3RoKSB0aGlzLmZpdEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNjPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXRcclxuICAgIGFzeW5jIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWl0RWRpdCkgdGhpcy5jb21taXRFZGl0KCk7XHJcbiAgICAgICAgdGhpcy5jbGVhclByb3h5KCk7XHJcbiAgICAgICAgdGhpcy51aU9rID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGFjZURvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRyYWdDdiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGl2ZVRBID0gbnVsbDtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5fa2QsIHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5fa3UsIHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLl9tdSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbUlkKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseUNhbnZhc0JnKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN2Z0N0KVxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1jYW52YXMtYmdcIjogdGhpcy5zdHlsZS5jYW52YXNCZyB9KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKFtrLCB2XSkgPT4gdGhpcy5zdmdDdC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSxcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXBwbHlUb29sYmFyU3R5bGUoKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuc3R5bGU7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcy50b29sYmFyUG9zaXRpb24gPT09IFwiYm90dG9tXCIgPyAyIDogMDtcclxuICAgICAgICBjb25zdCBib3JkZXJTaWRlID0gcy50b29sYmFyUG9zaXRpb24gPT09IFwiYm90dG9tXCIgPyBcInRvcFwiIDogXCJib3R0b21cIjtcclxuICAgICAgICBjb25zdCBiZHJDID0gcy50b29sYmFyQm9yZGVyQ29sb3IgfHwgXCIjZTBlMGUwXCI7XHJcbiAgICAgICAgY29uc3QgYmRyVyA9IHMudG9vbGJhckJvcmRlcldpZHRoID8/IDE7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIC0tIGR5bmFtaWMgdG9vbGJhciBjb2xvcnMgcmVxdWlyZSBpbmxpbmUgc3R5bGVcclxuICAgICAgICB0aGlzLnRiRWwuc3R5bGUuY3NzVGV4dCA9IGBoZWlnaHQ6NDJweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo2cHg7ZmxleC1zaHJpbms6MDtwYWRkaW5nOiR7cy50b29sYmFyUGFkVG9wfXB4ICR7cy50b29sYmFyUGFkUmlnaHR9cHggJHtzLnRvb2xiYXJQYWRCb3R0b219cHggJHtzLnRvb2xiYXJQYWRMZWZ0fXB4O2JhY2tncm91bmQ6JHtzLnRvb2xiYXJCZ0NvbG9yfTtib3JkZXItJHtib3JkZXJTaWRlfToke2Jkcld9cHggc29saWQgJHtiZHJDfTtvcmRlcjoke3Bvc307YDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlVG9vbGJhclZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGJFbClcclxuICAgICAgICAgICAgdGhpcy50YkVsLnRvZ2dsZUNsYXNzKFxyXG4gICAgICAgICAgICAgICAgXCJtei1oaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICF0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhcixcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTZWwoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbElkID09PSBpZCB8fCB0aGlzLm11bHRpU2VsLmhhcyhpZCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNsclNlbCgpIHtcclxuICAgICAgICB0aGlzLnNlbElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNlbDEoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWwuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnNlbElkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRvZ1NlbChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlTZWwuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkID09PSBpZClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsSWQgPSB0aGlzLm11bHRpU2VsLnNpemUgPyBbLi4udGhpcy5tdWx0aVNlbF1bMF0gOiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkICYmICF0aGlzLm11bHRpU2VsLmhhcyh0aGlzLnNlbElkKSlcclxuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlTZWwuYWRkKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmFkZChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFsbFNlbCgpOiBTZXQ8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgcyA9IG5ldyBTZXQodGhpcy5tdWx0aVNlbCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHMuYWRkKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc011bHRpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbFNlbCgpLnNpemUgPiAxO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjbG9zZVBvcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3BDbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcENsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wQ2xvc2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlRGV2UGFuZWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZlbG9wZXJNb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldkVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldkVsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZFbCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZGV2RWwgJiYgdGhpcy5zdmdDdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRldkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZFbC5hZGRDbGFzcyhcIm16LWRldi1wYW5lbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5zdmdDdC5hcHBlbmRDaGlsZCh0aGlzLmRldkVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2RWwpIHtcclxuICAgICAgICAgICAgY29uc3QgbmQgPSB0aGlzLnNlbElkID8gdGhpcy5mQWxsKHRoaXMuc2VsSWQpIDogbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5kZXZFbC50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbDogdGhpcy5zZWxJZD8uc3Vic3RyaW5nKDAsIDgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRJZDogdGhpcy5lZGl0SWQ/LnN1YnN0cmluZygwLCA4KSxcclxuICAgICAgICAgICAgICAgICAgICB6b29tOiArdGhpcy56b29tLnRvRml4ZWQoMyksXHJcbiAgICAgICAgICAgICAgICAgICAgcGFuOiBbK3RoaXMucGFuWC50b0ZpeGVkKDApLCArdGhpcy5wYW5ZLnRvRml4ZWQoMCldLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RzOiB0aGlzLnJvb3RzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICBub2RlOiBuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbmQudGV4dC5zdWJzdHJpbmcoMCwgMjApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiArbmQueC50b0ZpeGVkKDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiArbmQueS50b0ZpeGVkKDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogbmQuY2hpbGRyZW4ubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkVGIodGI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGIuZW1wdHkoKTtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5zdHlsZTtcclxuICAgICAgICBjb25zdCBidG5CZyA9IHMudG9vbGJhckJ0bkJnQ29sb3I7XHJcbiAgICAgICAgY29uc3QgYnRuQmRyID0gcy50b29sYmFyQnRuQm9yZGVyQ29sb3I7XHJcbiAgICAgICAgY29uc3QgYnRuQmRyUyA9IHMudG9vbGJhckJ0bkJvcmRlclN0eWxlO1xyXG4gICAgICAgIGNvbnN0IGJ0blR4ID0gcy50b29sYmFyQnRuVGV4dENvbG9yO1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICh0eHQ6IHN0cmluZywgdGlwOiBzdHJpbmcsIGZuOiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSB0Yi5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRpdGxlOiB0aXAgfSk7XHJcbiAgICAgICAgICAgIGIuYWRkQ2xhc3MoXCJtei10Yi1idG5cIik7XHJcbiAgICAgICAgICAgIGIuc3R5bGUuc2V0UHJvcGVydHkoXCItLW16LWJ0bi1ib3JkZXJcIiwgYDFweCAke2J0bkJkclN9ICR7YnRuQmRyfWApO1xyXG4gICAgICAgICAgICBiLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tei1idG4tYmdcIiwgYnRuQmcpO1xyXG4gICAgICAgICAgICBiLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tei1idG4tY29sb3JcIiwgYnRuVHgpO1xyXG4gICAgICAgICAgICBiLmlubmVyVGV4dCA9IHR4dDtcclxuICAgICAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZm4pO1xyXG4gICAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICBiLmFkZENsYXNzKFwibXotdGItYnRuLWhvdmVyXCIpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICBiLnJlbW92ZUNsYXNzKFwibXotdGItYnRuLWhvdmVyXCIpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gYjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bih0KFwidGIucm9vdFwiKSwgdChcInRiLm5ld1Jvb3RcIiksICgpID0+IHRoaXMuYWRkUm9vdCgpKTtcclxuICAgICAgICBidG4odChcInRiLnVuZG9cIiksIHQoXCJ0Yi50aXBVbmRvXCIpLCAoKSA9PiB0aGlzLnVuZG8oKSk7XHJcbiAgICAgICAgYnRuKHQoXCJ0Yi5yZWRvXCIpLCB0KFwidGIudGlwUmVkb1wiKSwgKCkgPT4gdGhpcy5yZWRvKCkpO1xyXG4gICAgICAgIGNvbnN0IHNlcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHRiLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBkLmFkZENsYXNzKFwibXotdGItc2VwXCIpO1xyXG4gICAgICAgICAgICBkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tei1zZXAtY29sb3JcIiwgYnRuQmRyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNlcCgpO1xyXG4gICAgICAgIHRoaXMubWRCdG4gPSBidG4odChcInRiLm1kXCIpLCB0KFwidGIudGlwTWRcIiksICgpID0+IHRoaXMudG9nZ2xlTWQoKSk7XHJcbiAgICAgICAgYnRuKHQoXCJ0Yi5zdHlsZVwiKSwgdChcInRiLnRpcFN0eWxlXCIpLCAoKSA9PiB0aGlzLnNob3dTdHlsZU1vZGFsKCkpO1xyXG4gICAgICAgIGJ0bihcIlx1RDgzRFx1REM1MyBcIiArIHQoXCJ0Yi5mb2N1c1wiKSwgdChcInRiLnRpcEZvY3VzXCIpLCAoKSA9PiB0aGlzLmZvY3VzU2VsKCkpO1xyXG4gICAgICAgIGJ0bihcIlx1RDgzRFx1REQwRCBcIiArIHQoXCJ0Yi5zZWFyY2hcIiksIHQoXCJ0Yi50aXBTZWFyY2hcIiksICgpID0+XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VhcmNoKCksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBidG4odChcInRiLnNldHRpbmdzXCIpLCB0KFwidGIudGlwU2V0dGluZ3NcIiksICgpID0+XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLm9wZW5QbHVnaW5TZXR0aW5ncygpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2VwKCk7XHJcbiAgICAgICAgYnRuKFwiXHUyMjEyXCIsIHQoXCJ0Yi56b29tT3V0XCIpLCAoKSA9PiB0aGlzLnpvb21CeSgwLjkpKTtcclxuICAgICAgICB0aGlzLnpvb21MYWJlbCA9IHRiLmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLnpvb21MYWJlbC5hZGRDbGFzcyhcIm16LXRiLXpvb21cIik7XHJcbiAgICAgICAgdGhpcy56b29tTGFiZWwuaW5uZXJUZXh0ID0gTWF0aC5yb3VuZCh0aGlzLnpvb20gKiAxMDApICsgXCIlXCI7XHJcbiAgICAgICAgdGhpcy56b29tTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuem9vbVRvKDEpKTtcclxuICAgICAgICBidG4oXCIrXCIsIHQoXCJ0Yi56b29tSW5cIiksICgpID0+IHRoaXMuem9vbUJ5KDEuMSkpO1xyXG4gICAgICAgIGNvbnN0IGggPSB0Yi5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgaC5hZGRDbGFzcyhcIm16LXRiLWhlbHBcIik7XHJcbiAgICAgICAgaC5pbm5lclRleHQgPSB0KFwidGIuaGVscFwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZm9jdXNTZWwoKSB7XHJcbiAgICAgICAgbGV0IG5kOiBNaW5kTm9kZURhdGEgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5zZWxJZCkgbmQgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgaWYgKCFuZCAmJiB0aGlzLnJvb3RzLmxlbmd0aCkgbmQgPSB0aGlzLnJvb3RzW3RoaXMucm9vdHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKG5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNOb2RlKG5kKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRvZ2dsZU1kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1kTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1kTW9kZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZEJ0bikgdGhpcy5tZEJ0bi5pbm5lclRleHQgPSB0KFwidGIubWRcIik7XHJcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgZnJvbSBzbmFwc2hvdCBpZiB0ZXh0IHVuY2hhbmdlZCwgZWxzZSBwYXJzZVxyXG4gICAgICAgICAgICBjb25zdCBuZXdNZCA9IHRoaXMubWRDdC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3Qgb2xkTWQgPSB0aGlzLm1kU25hcHNob3QgPyB0aGlzLnJvb3RzMm1kRnJvbVNuYXAoKSA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChvbGRNZCAmJiBuZXdNZCA9PT0gb2xkTWQpIHtcclxuICAgICAgICAgICAgICAgIC8qIG5vIGNoYW5nZXMsIGtlZXAgb3JpZ2luYWwgcm9vdHMgKi9cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VNZChuZXdNZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tZFNuYXBzaG90ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5tZEN0LnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnN2Z0N0LnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHRoaXMuZG9MYXlvdXQocik7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tbWl0RWRpdCkgdGhpcy5jb21taXRFZGl0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubWRNb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWRCdG4pIHRoaXMubWRCdG4uaW5uZXJUZXh0ID0gdChcInRiLm1hcFwiKTtcclxuICAgICAgICAgICAgdGhpcy5tZFNuYXBzaG90ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5yb290cyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnQ3QudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWRDdC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWRDdC52YWx1ZSA9IHRoaXMucm9vdHMybWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJvb3RzMm1kRnJvbVNuYXAoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1kU25hcHNob3QpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJzID0gSlNPTi5wYXJzZSh0aGlzLm1kU25hcHNob3QpIGFzIE1pbmROb2RlRGF0YVtdO1xyXG4gICAgICAgICAgICBsZXQgbSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IG4ybWQgPSAoXHJcbiAgICAgICAgICAgICAgICBuZDogTWluZE5vZGVEYXRhLFxyXG4gICAgICAgICAgICAgICAgZDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgbWFya2VyOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eCA9IG5kLnRleHQucmVwbGFjZSgvXFxuL2csIFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGwgPSBcIlxcdFwiLnJlcGVhdChkIC0gMSkgKyBtYXJrZXIgKyBcIiBcIiArIHR4O1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBsICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuZC5jaGlsZHJlbikgciArPSBuMm1kKGMsIGQgKyAxLCBtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q2ggPSByLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlICE9PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0Q2ggPSByLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlID09PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBtICs9IHIudGV4dC5yZXBsYWNlKC9cXG4vZywgXCIgXCIpICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiByaWdodENoKSBtICs9IG4ybWQoYywgMSwgXCItXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGxlZnRDaCkgbSArPSBuMm1kKGMsIDEsIFwiKlwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgcnMubGVuZ3RoIC0gMSkgbSArPSBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJvb3RzMm1kKCkge1xyXG4gICAgICAgIGxldCBtID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMucm9vdHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q2ggPSByLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlICE9PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZnRDaCA9IHIuY2hpbGRyZW4uZmlsdGVyKChjKSA9PiBjLnNpZGUgPT09IFwibGVmdFwiKTtcclxuICAgICAgICAgICAgbSArPSByLnRleHQucmVwbGFjZSgvXFxuL2csIFwiIFwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiByaWdodENoKSBtICs9IHRoaXMubjJtZChjLCAxLCBcIi1cIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBsZWZ0Q2gpIG0gKz0gdGhpcy5uMm1kKGMsIDEsIFwiKlwiKTtcclxuICAgICAgICAgICAgaWYgKGkgPCB0aGlzLnJvb3RzLmxlbmd0aCAtIDEpIG0gKz0gXCJcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG4ybWQobmQ6IE1pbmROb2RlRGF0YSwgZDogbnVtYmVyLCBtYXJrZXI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdHggPSBuZC50ZXh0LnJlcGxhY2UoL1xcbi9nLCBcIiBcIik7XHJcbiAgICAgICAgY29uc3QgbCA9IFwiXFx0XCIucmVwZWF0KGQgLSAxKSArIG1hcmtlciArIFwiIFwiICsgdHg7XHJcbiAgICAgICAgbGV0IHIgPSBsICsgXCJcXG5cIjtcclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgbmQuY2hpbGRyZW4pIHIgKz0gdGhpcy5uMm1kKGMsIGQgKyAxLCBtYXJrZXIpO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW5kZXJNZCgpIHtcclxuICAgICAgICB0aGlzLm1kQ3QudmFsdWUgPSB0aGlzLnJvb3RzMm1kKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHBhcnNlTWQodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobCkgPT4gbC50cmltKCkpO1xyXG4gICAgICAgIGlmICghbGluZXMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbnI6IE1pbmROb2RlRGF0YVtdID0gW107XHJcbiAgICAgICAgbGV0IGN1cjogTWluZE5vZGVEYXRhIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgY29uc3Qgc3RrOiBbbnVtYmVyLCBNaW5kTm9kZURhdGFdW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgbSA9IGxpbmUubWF0Y2goL14oXFx0KikoWy0qXSlcXHMrKC4qKS8pO1xyXG4gICAgICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVwID0gbVsxXS5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlciA9IG1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHh0ID0gbVszXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWRlID0gbWFya2VyID09PSBcIipcIiA/IFwibGVmdFwiIDogXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmQ6IE1pbmROb2RlRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0eHQsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbGNXKHR4dCwgZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5jYWxjSCh0eHQsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoc3RrLmxlbmd0aCAmJiBzdGtbc3RrLmxlbmd0aCAtIDFdWzBdID49IGRlcCkgc3RrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ay5sZW5ndGgpIHN0a1tzdGsubGVuZ3RoIC0gMV1bMV0uY2hpbGRyZW4ucHVzaChuZCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXIpIGN1ci5jaGlsZHJlbi5wdXNoKG5kKTtcclxuICAgICAgICAgICAgICAgIHN0ay5wdXNoKFtkZXAsIG5kXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eHQgPSBsaW5lLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlmICghdHh0KSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMubWtSb290KHR4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyLnggPSBucltuci5sZW5ndGggLSAxXS54O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1ci55ID0gbnJbbnIubGVuZ3RoIC0gMV0ueSArIDIwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5yLnB1c2goY3VyKTtcclxuICAgICAgICAgICAgICAgIHN0ay5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgc3RrLnB1c2goWzAsIGN1cl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuci5sZW5ndGgpIHRoaXMucm9vdHMgPSBucjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFJvb3QodGV4dD86IHN0cmluZywgeD86IG51bWJlciwgeT86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICBjb25zdCBuID0gdGhpcy5ta1Jvb3QodGV4dCA/PyB0aGlzLnBsdWdpbi5nZXRSb290TmFtZSgpKTtcclxuICAgICAgICBjb25zdCBsYXN0ID0gdGhpcy5yb290c1t0aGlzLnJvb3RzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIC8vIENvbXB1dGUgYm90dG9tLW1vc3QgWSBpbmNsdWRpbmcgYWxsIGRlc2NlbmRhbnRzIG9mIGxhc3Qgcm9vdFxyXG4gICAgICAgIGxldCBtYXhZID0gMDtcclxuICAgICAgICBpZiAobGFzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvTGF5b3V0KGxhc3QpO1xyXG4gICAgICAgICAgICBjb25zdCBmaW5kTWF4WSA9IChuZDogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3QgPSBuZC55ICsgbmQuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgIGlmIChib3QgPiBtYXhZKSBtYXhZID0gYm90O1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG5kLmNoaWxkcmVuKSBmaW5kTWF4WShjKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmluZE1heFkobGFzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG4ueCA9IHggPz8gKGxhc3QgPyBsYXN0LnggOiAwKTtcclxuICAgICAgICBuLnkgPSB5ID8/IChsYXN0ID8gbWF4WSArIDgwIDogMCk7XHJcbiAgICAgICAgdGhpcy5yb290cy5wdXNoKG4pO1xyXG4gICAgICAgIHRoaXMuc2VsMShuLmlkKTtcclxuICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuZWRpdE9uQ3JlYXRlKSB0aGlzLmVkaXRJZCA9IG4uaWQ7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZShuKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNhdmVTKCkge1xyXG4gICAgICAgIHRoaXMudW5kb1MucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLnJvb3RzKSk7XHJcbiAgICAgICAgaWYgKHRoaXMudW5kb1MubGVuZ3RoID4gNTApIHRoaXMudW5kb1Muc2hpZnQoKTtcclxuICAgICAgICB0aGlzLnJlZG9TID0gW107XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVuZG8oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVuZG9TLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmVkb1MucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLnJvb3RzKSk7XHJcbiAgICAgICAgdGhpcy5yb290cyA9IEpTT04ucGFyc2UodGhpcy51bmRvUy5wb3AoKSEpO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbElkICYmICF0aGlzLmZBbGwodGhpcy5zZWxJZCkpIHRoaXMuc2VsSWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWwuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnJlY2FsY0FsbFNpemVzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZWRvKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWRvUy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICB0aGlzLnVuZG9TLnB1c2goSlNPTi5zdHJpbmdpZnkodGhpcy5yb290cykpO1xyXG4gICAgICAgIHRoaXMucm9vdHMgPSBKU09OLnBhcnNlKHRoaXMucmVkb1MucG9wKCkhKTtcclxuICAgICAgICB0aGlzLnJlY2FsY0FsbFNpemVzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqIFJlLW1lYXN1cmUgZXZlcnkgbm9kZSdzIHdpZHRoL2hlaWdodCBiYXNlZCBvbiBjdXJyZW50IHN0eWxlIHNvIHRoYXRcclxuICAgICAqICB0ZXh0IG5ldmVyIGdldHMgY2xpcHBlZCBvciBmb3JjZS13cmFwcGVkIGFmdGVyIHVuZG8vcmVkby4gKi9cclxuICAgIHByaXZhdGUgcmVjYWxjQWxsU2l6ZXMoKSB7XHJcbiAgICAgICAgY29uc3Qgd2FsayA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNSID0gISFuLmlzUm9vdDtcclxuICAgICAgICAgICAgbi53aWR0aCA9IHRoaXMuY2FsY1cobi50ZXh0LCBpc1IpO1xyXG4gICAgICAgICAgICBuLmhlaWdodCA9IHRoaXMuY2FsY0gobi50ZXh0LCBpc1IpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgd2FsayhjKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB3YWxrKHIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmQWxsKGlkOiBzdHJpbmcpOiBNaW5kTm9kZURhdGEgfCBudWxsIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICBjb25zdCBmID0gdGhpcy5mTihpZCwgcik7XHJcbiAgICAgICAgICAgIGlmIChmKSByZXR1cm4gZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXBwbHlTdHlsZShwOiBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pIHtcclxuICAgICAgICB0aGlzLnN0eWxlID0geyAuLi50aGlzLnN0eWxlLCAuLi5wIH07XHJcbiAgICAgICAgdGhpcy5wbHVnaW4udXBkYXRlU3R5bGUocCk7XHJcbiAgICAgICAgdGhpcy5hcHBseUNhbnZhc0JnKCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJQb3NpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhclBhZFRvcCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhclBhZFJpZ2h0ICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyUGFkQm90dG9tICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyUGFkTGVmdCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhckJnQ29sb3IgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJCb3JkZXJDb2xvciAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhckJvcmRlcldpZHRoICE9PSB1bmRlZmluZWRcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlUb29sYmFyU3R5bGUoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHAudG9vbGJhckJ0bkJnQ29sb3IgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJCdG5Cb3JkZXJTdHlsZSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhckJ0bkJvcmRlckNvbG9yICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyQnRuVGV4dENvbG9yICE9PSB1bmRlZmluZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy50YkVsLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRUYih0aGlzLnRiRWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5VG9vbGJhclN0eWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlY2FsY3VsYXRlIGFsbCBub2RlIHNpemVzIHdoZW4gZm9udC9sYXlvdXQgcmVsYXRlZCBzdHlsZXMgY2hhbmdlXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBwLm5vZGVGb250U2l6ZSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAucm9vdEZvbnRTaXplICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5ub2RlRm9udEZhbWlseSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAucm9vdEZvbnRGYW1pbHkgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLm5vZGVNaW5XaWR0aCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAubm9kZU1pbkhlaWdodCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAucm9vdE1pbldpZHRoICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5yb290TWluSGVpZ2h0ICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5ub2RlUGFkWCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAubm9kZUxpbmVIZWlnaHQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnJlY2FsY0FsbE5vZGVTaXplcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZWNhbGNBbGxOb2RlU2l6ZXMoKSB7XHJcbiAgICAgICAgY29uc3QgdmlzaXQgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUiA9ICEhbi5pc1Jvb3Q7XHJcbiAgICAgICAgICAgIG4ud2lkdGggPSB0aGlzLmNhbGNXKG4udGV4dCB8fCBcIiBcIiwgaXNSKTtcclxuICAgICAgICAgICAgbi5oZWlnaHQgPSB0aGlzLmNhbGNIKG4udGV4dCB8fCBcIiBcIiwgaXNSKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHZpc2l0KGMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHZpc2l0KHIpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3NpZ25SYWluYm93Q29sb3IocGFyZW50OiBNaW5kTm9kZURhdGEsIGNoaWxkOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3R5bGUuY29ubmVjdGlvblJhaW5ib3cgfHwgIXBhcmVudC5pc1Jvb3QpIHJldHVybjtcclxuICAgICAgICBpZiAoIWNoaWxkLmNvbm5lY3Rpb25Db2xvcikge1xyXG4gICAgICAgICAgICBjb25zdCByYiA9IHRoaXMuZ2V0UmFpbmJvdygpO1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgICAgIGNoaWxkLmNvbm5lY3Rpb25Db2xvciA9XHJcbiAgICAgICAgICAgICAgICByYlsoaWR4ID49IDAgPyBpZHggOiBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoKSAlIHJiLmxlbmd0aF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBtYXRjaEtleShlOiBLZXlib2FyZEV2ZW50LCBjb21ibzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBjb21iby50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiK1wiKTtcclxuICAgICAgICBjb25zdCBuZWVkQ3RybCA9IHBhcnRzLmluY2x1ZGVzKFwiY3RybFwiKTtcclxuICAgICAgICBjb25zdCBuZWVkU2hpZnQgPSBwYXJ0cy5pbmNsdWRlcyhcInNoaWZ0XCIpO1xyXG4gICAgICAgIGNvbnN0IG5lZWRBbHQgPSBwYXJ0cy5pbmNsdWRlcyhcImFsdFwiKTtcclxuICAgICAgICBjb25zdCBtYWluS2V5ID1cclxuICAgICAgICAgICAgcGFydHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHApID0+IHAgIT09IFwiY3RybFwiICYmIHAgIT09IFwic2hpZnRcIiAmJiBwICE9PSBcImFsdFwiLFxyXG4gICAgICAgICAgICApWzBdIHx8IFwiXCI7XHJcbiAgICAgICAgaWYgKG5lZWRDdHJsICE9PSAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobmVlZFNoaWZ0ICE9PSBlLnNoaWZ0S2V5KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG5lZWRBbHQgIT09IGUuYWx0S2V5KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgZUtleSA9IGUua2V5ID09PSBcIiBcIiA/IFwic3BhY2VcIiA6IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgZUNvZGUgPSBlLmNvZGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAvLyBNYXAgZS5jb2RlIHRvIGJhc2UgdW5zaGlmdGVkIGtleSBmb3IgcmVsaWFibGUgbWF0Y2hpbmdcclxuICAgICAgICBjb25zdCBjb2RlTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICAgICAgICAgICBlcXVhbDogXCI9XCIsXHJcbiAgICAgICAgICAgIG1pbnVzOiBcIi1cIixcclxuICAgICAgICAgICAgZGlnaXQwOiBcIjBcIixcclxuICAgICAgICAgICAgZGlnaXQxOiBcIjFcIixcclxuICAgICAgICAgICAgZGlnaXQyOiBcIjJcIixcclxuICAgICAgICAgICAgZGlnaXQzOiBcIjNcIixcclxuICAgICAgICAgICAgZGlnaXQ0OiBcIjRcIixcclxuICAgICAgICAgICAgZGlnaXQ1OiBcIjVcIixcclxuICAgICAgICAgICAgZGlnaXQ2OiBcIjZcIixcclxuICAgICAgICAgICAgZGlnaXQ3OiBcIjdcIixcclxuICAgICAgICAgICAgZGlnaXQ4OiBcIjhcIixcclxuICAgICAgICAgICAgZGlnaXQ5OiBcIjlcIixcclxuICAgICAgICAgICAgYnJhY2tldGxlZnQ6IFwiW1wiLFxyXG4gICAgICAgICAgICBicmFja2V0cmlnaHQ6IFwiXVwiLFxyXG4gICAgICAgICAgICBzZW1pY29sb246IFwiO1wiLFxyXG4gICAgICAgICAgICBxdW90ZTogXCInXCIsXHJcbiAgICAgICAgICAgIGJhY2txdW90ZTogXCJgXCIsXHJcbiAgICAgICAgICAgIGNvbW1hOiBcIixcIixcclxuICAgICAgICAgICAgcGVyaW9kOiBcIi5cIixcclxuICAgICAgICAgICAgc2xhc2g6IFwiL1wiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYmFzZUtleSA9IGNvZGVNYXBbZUNvZGVdIHx8IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIGVLZXkgPT09IG1haW5LZXkgfHwgZUNvZGUgPT09IG1haW5LZXkgfHwgYmFzZUtleSA9PT0gbWFpbktleTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBcdTI1NTBcdTI1NTBcdTI1NTAgTW9kYWxzIC0gYWxsIGNsb3NlIG9uIEVzYyBcdTI1NTBcdTI1NTBcdTI1NTBcclxuICAgIHByaXZhdGUgc2hvd1N0eWxlTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcCgpO1xyXG4gICAgICAgIGNvbnN0IG92ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBvdi5hZGRDbGFzcyhcIm16LW1vZGFsLW92ZXJsYXlcIik7XHJcbiAgICAgICAgY29uc3QgbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbS5hZGRDbGFzcyhcIm16LW1vZGFsXCIpO1xyXG4gICAgICAgIG0uY3JlYXRlRWwoXCJoM1wiLCB7IHRleHQ6IHQoXCJzbS50aXRsZVwiKSB9KS5hZGRDbGFzcyhcIm16LW1vZGFsLXRpdGxlXCIpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBvdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgbS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3BDbG9zZSA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBvcENsb3NlID0gY2xvc2U7XHJcbiAgICAgICAgb3YuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcclxuICAgICAgICBtLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwia2V5ZG93blwiLFxyXG4gICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNlYyA9IChpY29uOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcyA9IG0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHMuYWRkQ2xhc3MoXCJtei1tb2RhbC1zZWNcIik7XHJcbiAgICAgICAgICAgIHMuY3JlYXRlRWwoXCJkaXZcIiwgeyB0ZXh0OiBpY29uICsgXCIgXCIgKyB0aXRsZSB9KS5hZGRDbGFzcyhcclxuICAgICAgICAgICAgICAgIFwibXotbW9kYWwtc2VjLWhkclwiLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IFIgPSAoXHJcbiAgICAgICAgICAgIHA6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgICAgICBsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGs6IGtleW9mIE1pbmRNYXBTdHlsZSxcclxuICAgICAgICAgICAgdHA6IHN0cmluZyxcclxuICAgICAgICAgICAgbz86IHtcclxuICAgICAgICAgICAgICAgIG1pbj86IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIG1heD86IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM/OiBzdHJpbmdbXTtcclxuICAgICAgICAgICAgICAgIHN0ZXA/OiBudW1iZXI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHAuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJvdy5hZGRDbGFzcyhcIm16LW1vZGFsLXJvd1wiKTtcclxuICAgICAgICAgICAgcm93LmNyZWF0ZUVsKFwibGFiZWxcIiwgeyB0ZXh0OiBsIH0pLmFkZENsYXNzKFwibXotbW9kYWwtbGJsXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjdiA9IHRoaXMuc3R5bGVba107XHJcbiAgICAgICAgICAgIGlmICh0cCA9PT0gXCJjb2xvclwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gcm93LmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGkudHlwZSA9IFwiY29sb3JcIjtcclxuICAgICAgICAgICAgICAgIGkudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjdiA9PT0gXCJzdHJpbmdcIiAmJiBjdi5zdGFydHNXaXRoKFwidmFyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBTdHJpbmcoY3YpO1xyXG4gICAgICAgICAgICAgICAgaS5hZGRDbGFzcyhcIm16LW1vZGFsLWNvbG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHsgW2tdOiBpLnZhbHVlIH0gYXMgUGFydGlhbDxNaW5kTWFwU3R5bGU+KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHAgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSByb3cuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaS50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICAgICAgICAgIGkubWluID0gU3RyaW5nKG8/Lm1pbiA/PyAwKTtcclxuICAgICAgICAgICAgICAgIGkubWF4ID0gU3RyaW5nKG8/Lm1heCA/PyA5OTkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG8/LnN0ZXApIGkuc3RlcCA9IFN0cmluZyhvLnN0ZXApO1xyXG4gICAgICAgICAgICAgICAgaS52YWx1ZSA9IFN0cmluZyhjdik7XHJcbiAgICAgICAgICAgICAgICBpLmFkZENsYXNzKFwibXotbW9kYWwtbnVtXCIpO1xyXG4gICAgICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2tdOiBOdW1iZXIoaS52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0cCA9PT0gXCJzZWxlY3RcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IHJvdy5jcmVhdGVFbChcInNlbGVjdFwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHMuYWRkQ2xhc3MoXCJtei1tb2RhbC1zZWxcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHYgb2Ygbz8ub3B0aW9ucyA/PyBbXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBvcC52YWx1ZSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AudGV4dCA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT09IFN0cmluZyhjdikpIG9wLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzLmFwcGVuZENoaWxkKG9wKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7IFtrXTogcy52YWx1ZSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRwID09PSBcInRvZ2dsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYiA9IHJvdy5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBjYi50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgICAgICAgICAgY2IuY2hlY2tlZCA9ICEhY3Y7XHJcbiAgICAgICAgICAgICAgICBjYi5hZGRDbGFzcyhcIm16LW1vZGFsLWNoa1wiKTtcclxuICAgICAgICAgICAgICAgIGNiLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBba106IGNiLmNoZWNrZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgczEgPSBzZWMoXCJcdUQ4M0RcdURDRTZcIiwgdChcInNtLmNoaWxkXCIpKTtcclxuICAgICAgICBSKHMxLCB0KFwic20uYmdcIiksIFwibm9kZUJnQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHMxLCB0KFwic20udGV4dFwiKSwgXCJub2RlVGV4dENvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmZvbnRTaXplXCIpLCBcIm5vZGVGb250U2l6ZVwiLCBcIm51bWJlclwiLCB7IG1pbjogMTAsIG1heDogMzIgfSk7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmZvbnRcIiksIFwibm9kZUZvbnRGYW1pbHlcIiwgXCJzZWxlY3RcIiwgeyBvcHRpb25zOiBGT05UX0xJU1QgfSk7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmJvcmRlclN0eWxlXCIpLCBcIm5vZGVCb3JkZXJTdHlsZVwiLCBcInNlbGVjdFwiLCB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInNvbGlkXCIsIFwiZGFzaGVkXCIsIFwiZG90dGVkXCIsIFwiZG91YmxlXCIsIFwibm9uZVwiXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMxLCB0KFwic20uYm9yZGVyQ29sb3JcIiksIFwibm9kZUJvcmRlckNvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmJvcmRlcldpZHRoXCIpLCBcIm5vZGVCb3JkZXJXaWR0aFwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiA4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczEsIHQoXCJzbS5ib3JkZXJSYWRpdXNcIiksIFwibm9kZUJvcmRlclJhZGl1c1wiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiAzMixcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMxLCB0KFwic20ubWluV2lkdGhcIiksIFwibm9kZU1pbldpZHRoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAzMCxcclxuICAgICAgICAgICAgbWF4OiA0MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMSwgdChcInNtLm1pbkhlaWdodFwiKSwgXCJub2RlTWluSGVpZ2h0XCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAyMCxcclxuICAgICAgICAgICAgbWF4OiAyMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgczIgPSBzZWMoXCJcdUQ4M0NcdURGRTBcIiwgdChcInNtLnJvb3RcIikpO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5iZ1wiKSwgXCJyb290QmdDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS50ZXh0XCIpLCBcInJvb3RUZXh0Q29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHMyLCB0KFwic20uZm9udFNpemVcIiksIFwicm9vdEZvbnRTaXplXCIsIFwibnVtYmVyXCIsIHsgbWluOiAxMCwgbWF4OiAzMiB9KTtcclxuICAgICAgICBSKHMyLCB0KFwic20uZm9udFwiKSwgXCJyb290Rm9udEZhbWlseVwiLCBcInNlbGVjdFwiLCB7IG9wdGlvbnM6IEZPTlRfTElTVCB9KTtcclxuICAgICAgICBSKHMyLCB0KFwic20uYm9yZGVyU3R5bGVcIiksIFwicm9vdEJvcmRlclN0eWxlXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogW1wic29saWRcIiwgXCJkYXNoZWRcIiwgXCJkb3R0ZWRcIiwgXCJkb3VibGVcIiwgXCJub25lXCJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5ib3JkZXJDb2xvclwiKSwgXCJyb290Qm9yZGVyQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHMyLCB0KFwic20uYm9yZGVyV2lkdGhcIiksIFwicm9vdEJvcmRlcldpZHRoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMiwgdChcInNtLmJvcmRlclJhZGl1c1wiKSwgXCJyb290Qm9yZGVyUmFkaXVzXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDMyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5taW5XaWR0aFwiKSwgXCJyb290TWluV2lkdGhcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDUwLFxyXG4gICAgICAgICAgICBtYXg6IDQwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMyLCB0KFwic20ubWluSGVpZ2h0XCIpLCBcInJvb3RNaW5IZWlnaHRcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDIwLFxyXG4gICAgICAgICAgICBtYXg6IDIwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzMyA9IHNlYyhcIlx1RDgzRFx1REQxN1wiLCB0KFwic20uY29ublwiKSk7XHJcbiAgICAgICAgUihzMywgdChcInNtLnR5cGVcIiksIFwiY29ubmVjdGlvblN0eWxlXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogQ09OTkVDVElPTl9TVFlMRVMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMywgdChcInNtLmNvbG9yXCIpLCBcImNvbm5lY3Rpb25Db2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczMsIHQoXCJzbS53aWR0aFwiKSwgXCJjb25uZWN0aW9uV2lkdGhcIiwgXCJudW1iZXJcIiwgeyBtaW46IDEsIG1heDogOCB9KTtcclxuICAgICAgICBSKHMzLCB0KFwic20uY29ubkxlbmd0aFwiKSwgXCJjb25uZWN0aW9uTGVuZ3RoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAzMCxcclxuICAgICAgICAgICAgbWF4OiAzMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMywgdChcInNtLm5vZGVEaXJcIiksIFwibm9kZURpcmVjdGlvblwiLCBcInNlbGVjdFwiLCB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInJpZ2h0XCIsIFwibGVmdFwiLCBcImJvdGhcIl0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMywgdChcInNtLm5vZGVHYXBZXCIpLCBcIm5vZGVHYXBZXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiA4LFxyXG4gICAgICAgICAgICBtYXg6IDgwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFJhaW5ib3c6IGxpc3Qgd2l0aCByZWFsIGNvbG9yIGRvdHMsIGRlbGV0ZSBidXR0b25zLCBubyBtb2RhbCByZW9wZW5cclxuICAgICAgICBjb25zdCBjdFJvdyA9IHMzLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGN0Um93LmFkZENsYXNzKFwibXotcmFpbmJvdy1jdFwiKTtcclxuICAgICAgICBjdFJvd1xyXG4gICAgICAgICAgICAuY3JlYXRlRWwoXCJsYWJlbFwiLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1RDgzQ1x1REYwOCBcIiArIHQoXCJzbS5yYWluYm93XCIpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJtei1yYWluYm93LWxibFwiKTtcclxuICAgICAgICBjb25zdCBhbGxQYWxzOiB7IFtrOiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge1xyXG4gICAgICAgICAgICAuLi5SQUlOQk9XX1BBTEVUVEVTLFxyXG4gICAgICAgICAgICAuLi4odGhpcy5zdHlsZS5jdXN0b21SYWluYm93cyB8fCB7fSksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgY3VyUGFsID0gdGhpcy5zdHlsZS5jb25uZWN0aW9uUmFpbmJvd1xyXG4gICAgICAgICAgICA/IHRoaXMuc3R5bGUucmFpbmJvd1BhbGV0dGVcclxuICAgICAgICAgICAgOiBcIm9mZlwiO1xyXG4gICAgICAgIGNvbnN0IGxpc3RXcmFwID0gY3RSb3cuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgbGlzdFdyYXAuYWRkQ2xhc3MoXCJtei1yYWluYm93LWxpc3RcIik7XHJcbiAgICAgICAgY29uc3QgcmVidWlsZExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3RXcmFwLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5SQUlOQk9XX1BBTEVUVEVTLFxyXG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuc3R5bGUuY3VzdG9tUmFpbmJvd3MgfHwge30pLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBta0l0ZW0gPSAoXHJcbiAgICAgICAgICAgICAgICBrZXk6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IHN0cmluZ1tdIHwgbnVsbCxcclxuICAgICAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdCA9IGxpc3RXcmFwLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgaXQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBpdC50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiLCBrZXkgPT09IGN1clBhbCk7XHJcbiAgICAgICAgICAgICAgICBpdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gY3VyUGFsKSBpdC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdC50b2dnbGVDbGFzcyhcIm16LXJhaW5ib3ctaG92ZXJcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBubSA9IGl0LmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IGxhYmVsIH0pO1xyXG4gICAgICAgICAgICAgICAgbm0uYWRkQ2xhc3MoXCJtei1yYWluYm93LWl0ZW0tbGJsXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvdHMgPSBpdC5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG90cy5hZGRDbGFzcyhcIm16LXJhaW5ib3ctZG90c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgY29sb3JzLnNsaWNlKDAsIDEwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkID0gZG90cy5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWRvdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoeyBcIi0tbXotZG90LWNvbG9yXCI6IGMgfSkuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChbaywgdl0pID0+IGQuc3R5bGUuc2V0UHJvcGVydHkoaywgdiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFsLWRlbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwib2ZmXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHsgY29ubmVjdGlvblJhaW5ib3c6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJQYWwgPSBcIm9mZlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uUmFpbmJvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhaW5ib3dQYWxldHRlOiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJQYWwgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYnVpbGRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBidXR0b24gKG5vdCBmb3IgU29saWQgb3IgYnVpbHQtaW4gcGFsZXR0ZXMpXHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBcIm9mZlwiICYmICFSQUlOQk9XX1BBTEVUVEVTW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWwgPSBpdC5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBcIlx1MjcxNVwiIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbC5jbGFzc05hbWUgPSBcInBhbC1kZWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWwuYWRkQ2xhc3MoXCJtei1yZXNldC1idG5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyID0geyAuLi4odGhpcy5zdHlsZS5jdXN0b21SYWluYm93cyB8fCB7fSkgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNyW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7IGN1c3RvbVJhaW5ib3dzOiBjciB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1clBhbCA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJQYWwgPSBcIm9mZlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHsgY29ubmVjdGlvblJhaW5ib3c6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYnVpbGRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG1rSXRlbShcIm9mZlwiLCBcIlNvbGlkXCIsIG51bGwpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb2xvcnNdIG9mIE9iamVjdC5lbnRyaWVzKHVwZGF0ZWQpKVxyXG4gICAgICAgICAgICAgICAgbWtJdGVtKG5hbWUsIG5hbWUsIGNvbG9ycyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZWJ1aWxkTGlzdCgpO1xyXG4gICAgICAgIC8vIEFkZCBjdXN0b20gcGFsZXR0ZVxyXG4gICAgICAgIGNvbnN0IGFkZFJvdyA9IGN0Um93LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGFkZFJvdy5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3RcIik7XHJcbiAgICAgICAgY29uc3QgYWRkQnRuID0gYWRkUm93LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcclxuICAgICAgICAgICAgdGV4dDogdChcInNtLmN1c3RvbVJhaW5ib3dcIiksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWRkQnRuLmFkZENsYXNzKFwibXotbW9kYWwtYnRuXCIsIFwibXotbW9kYWwtYnRuLXNlY29uZGFyeVwiKTtcclxuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgYWRkQnRuLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBlZCA9IGFkZFJvdy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgZWQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWN0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lSW5wID0gZWQuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBuYW1lSW5wLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgbmFtZUlucC5wbGFjZWhvbGRlciA9IFwiUGFsZXR0ZSBuYW1lXCI7XHJcbiAgICAgICAgICAgIG5hbWVJbnAudmFsdWUgPSBcIkN1c3RvbVwiO1xyXG4gICAgICAgICAgICBuYW1lSW5wLmFkZENsYXNzKFwibXotcmFpbmJvdy1jci1uYW1lXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBbXHJcbiAgICAgICAgICAgICAgICBcIiNmZjAwMDBcIixcclxuICAgICAgICAgICAgICAgIFwiIzAwZmYwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjMDAwMGZmXCIsXHJcbiAgICAgICAgICAgICAgICBcIiNmZmZmMDBcIixcclxuICAgICAgICAgICAgICAgIFwiI2ZmMDBmZlwiLFxyXG4gICAgICAgICAgICAgICAgXCIjMDBmZmZmXCIsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGNvbnN0IGNEaXYgPSBlZC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgY0Rpdi5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3Itcm93XCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZWJ1aWxkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaSA9IGNEaXYuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNpLnR5cGUgPSBcImNvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2kudmFsdWUgPSBjb2xvcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2kuYWRkQ2xhc3MoXCJtei1yYWluYm93LWNyLWlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnNbaV0gPSBjaS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFiID0gY0Rpdi5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiK1wiIH0pO1xyXG4gICAgICAgICAgICAgICAgYWIuYWRkQ2xhc3MoXCJtei1yYWluYm93LWNyLWlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnMucHVzaChcIiM4ODg4ODhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVidWlsZCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlYnVpbGQoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGVkLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJcdTI3MTMgU2F2ZVwiIH0pO1xyXG4gICAgICAgICAgICBzYXZlQnRuLmFkZENsYXNzKFwibXotcmFpbmJvdy1jci1idG5cIiwgXCJtei1yYWluYm93LWNyLXNhdmVcIik7XHJcbiAgICAgICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBubSA9IG5hbWVJbnAudmFsdWUudHJpbSgpIHx8IFwiQ3VzdG9tXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuc3R5bGUuY3VzdG9tUmFpbmJvd3MgfHwge307XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3Rpbmdbbm1dIHx8IFJBSU5CT1dfUEFMRVRURVNbbm1dKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmdbbm0gKyBcIiBcIiArIGldIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJBSU5CT1dfUEFMRVRURVNbbm0gKyBcIiBcIiArIGldXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgbm0gPSBubSArIFwiIFwiICsgaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NSID0geyAuLi5leGlzdGluZywgW25tXTogWy4uLmNvbG9yc10gfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tUmFpbmJvd3M6IG5ld0NSLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25SYWluYm93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhaW5ib3dQYWxldHRlOiBubSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY3VyUGFsID0gbm07XHJcbiAgICAgICAgICAgICAgICBlZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGFkZEJ0bi50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZWJ1aWxkTGlzdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzM2IgPSBzZWMoXCJcdUQ4M0RcdURDRERcIiwgdChcInNtLnRleHRBbGlnblwiKSk7XHJcbiAgICAgICAgUihzM2IsIHQoXCJzbS50ZXh0QWxpZ25cIiksIFwidGV4dEFsaWduXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHM0ID0gc2VjKFwiXHUyNzA1XCIsIHQoXCJzbS5zZWxcIikpO1xyXG4gICAgICAgIFIoczQsIHQoXCJzbS5zZWxDb2xvclwiKSwgXCJzZWxlY3Rpb25Db2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczQsIHQoXCJzbS5zZWxXaWR0aFwiKSwgXCJzZWxlY3Rpb25XaWR0aFwiLCBcIm51bWJlclwiLCB7IG1pbjogMSwgbWF4OiA4IH0pO1xyXG4gICAgICAgIFIoczQsIHQoXCJzbS5zZWxPZmZzZXRcIiksIFwic2VsZWN0aW9uT3V0bGluZU9mZnNldFwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogLTUsXHJcbiAgICAgICAgICAgIG1heDogMjAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzNCwgdChcInNtLmVkaXRPdXRsaW5lXCIpLCBcImVkaXRPdXRsaW5lQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHM0LCB0KFwic20uZWRpdE91dGxpbmVXaWR0aFwiKSwgXCJlZGl0T3V0bGluZVdpZHRoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgczUgPSBzZWMoXCJcdUQ4M0RcdUREQkNcdUZFMEZcIiwgdChcInNtLmNhbnZhc0JnXCIpKTtcclxuICAgICAgICBSKHM1LCB0KFwic20uY2FudmFzQmdcIiksIFwiY2FudmFzQmdcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBjb25zdCBzNiA9IHNlYyhcIlx1RDgzRFx1REQyN1wiLCB0KFwic20uc2hvd1Rvb2xiYXJcIikpO1xyXG4gICAgICAgIGNvbnN0IHRiUm93ID0gczYuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgdGJSb3cuYWRkQ2xhc3MoXCJtei1tb2RhbC1yb3dcIik7XHJcbiAgICAgICAgdGJSb3dcclxuICAgICAgICAgICAgLmNyZWF0ZUVsKFwibGFiZWxcIiwgeyB0ZXh0OiB0KFwic20uc2hvd1Rvb2xiYXJcIikgfSlcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwibXotbW9kYWwtbGJsXCIpO1xyXG4gICAgICAgIGNvbnN0IHRiQ2IgPSB0YlJvdy5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGJDYi50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIHRiQ2IuY2hlY2tlZCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dUb29sYmFyO1xyXG4gICAgICAgIHRiQ2IuYWRkQ2xhc3MoXCJtei1tb2RhbC1jaGtcIik7XHJcbiAgICAgICAgdGJDYi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1Rvb2xiYXIgPSB0YkNiLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIHZvaWQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbGJhclZpc2liaWxpdHkoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJQb3NcIiksIFwidG9vbGJhclBvc2l0aW9uXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogW1widG9wXCIsIFwiYm90dG9tXCJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YlBhZFRcIiksIFwidG9vbGJhclBhZFRvcFwiLCBcIm51bWJlclwiLCB7IG1pbjogMCwgbWF4OiA0MCB9KTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJQYWRSXCIpLCBcInRvb2xiYXJQYWRSaWdodFwiLCBcIm51bWJlclwiLCB7IG1pbjogMCwgbWF4OiA0MCB9KTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJQYWRCXCIpLCBcInRvb2xiYXJQYWRCb3R0b21cIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogNDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiUGFkTFwiKSwgXCJ0b29sYmFyUGFkTGVmdFwiLCBcIm51bWJlclwiLCB7IG1pbjogMCwgbWF4OiA0MCB9KTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJCZ1wiKSwgXCJ0b29sYmFyQmdDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YkJ0bkJnXCIpLCBcInRvb2xiYXJCdG5CZ0NvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiQnRuQm9yZGVyXCIpLCBcInRvb2xiYXJCdG5Cb3JkZXJTdHlsZVwiLCBcInNlbGVjdFwiLCB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInNvbGlkXCIsIFwiZGFzaGVkXCIsIFwiZG90dGVkXCIsIFwibm9uZVwiXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJCdG5Cb3JkZXJDb2xvclwiKSwgXCJ0b29sYmFyQnRuQm9yZGVyQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJCdG5UZXh0XCIpLCBcInRvb2xiYXJCdG5UZXh0Q29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHM2LCBcIlNlcGFyYXRvciBjb2xvclwiLCBcInRvb2xiYXJCb3JkZXJDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczYsIFwiU2VwYXJhdG9yIHdpZHRoXCIsIFwidG9vbGJhckJvcmRlcldpZHRoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gUmVzZXQgdG9vbGJhciBidXR0b25cclxuICAgICAgICBjb25zdCB0YlJlc2V0QnRuID0gczYuY3JlYXRlRWwoXCJidXR0b25cIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlx1MjFCQSBcIiArIHQoXCJzbS50YlJlc2V0RGVmYXVsdFwiKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YlJlc2V0QnRuLmFkZENsYXNzKFwibXotbnMtYnRuXCIpO1xyXG4gICAgICAgIHRiUmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNEYXJrID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWUgPT09IFwiZGFya1wiO1xyXG4gICAgICAgICAgICBjb25zdCBkZWYgPSBpc0RhcmsgPyBERUZBVUxUX1RPT0xCQVJfREFSSyA6IERFRkFVTFRfVE9PTEJBUl9MSUdIVDtcclxuICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHtcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJCZ0NvbG9yOiBkZWYudG9vbGJhckJnQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQnRuQmdDb2xvcjogZGVmLnRvb2xiYXJCdG5CZ0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhckJ0bkJvcmRlclN0eWxlOiBkZWYudG9vbGJhckJ0bkJvcmRlclN0eWxlLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhckJ0bkJvcmRlckNvbG9yOiBkZWYudG9vbGJhckJ0bkJvcmRlckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhckJ0blRleHRDb2xvcjogZGVmLnRvb2xiYXJCdG5UZXh0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQm9yZGVyQ29sb3I6IGRlZi50b29sYmFyQm9yZGVyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQm9yZGVyV2lkdGg6IGRlZi50b29sYmFyQm9yZGVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyUGFkVG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhclBhZFJpZ2h0OiAxMixcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJQYWRCb3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyUGFkTGVmdDogMTIsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyUG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTdHlsZU1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgYnIgPSBtLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGJyLmFkZENsYXNzKFwibXotbW9kYWwtYnRuc1wiKTtcclxuICAgICAgICBici5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IHQoXCJzbS5yZXNldFwiKSB9KS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7IC4uLkRFRkFVTFRfU1RZTEUgfSk7XHJcbiAgICAgICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U3R5bGVNb2RhbCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgY2IgPSBici5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IHQoXCJzbS5jbG9zZVwiKSB9KTtcclxuICAgICAgICBjYi5hZGRDbGFzcyhcIm16LW1vZGFsLWJ0blwiLCBcIm16LW1vZGFsLWJ0bi1wcmltYXJ5XCIpO1xyXG4gICAgICAgIGNiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dOb2RlU3R5bGVFZGl0b3IoZTogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQb3AoKTtcclxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLmFsbFNlbCgpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5mQWxsKFsuLi5pZHNdWzBdKTtcclxuICAgICAgICBjb25zdCBzbyA9IGZpcnN0Py5zdHlsZU92ZXJyaWRlID8/IHt9O1xyXG4gICAgICAgIGNvbnN0IGlzUiA9ICEhZmlyc3Q/LmlzUm9vdDtcclxuICAgICAgICBjb25zdCBvdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgb3YuYWRkQ2xhc3MoXCJtei1tb2RhbC1vdmVybGF5XCIpO1xyXG4gICAgICAgIGNvbnN0IG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG0uYWRkQ2xhc3MoXCJtei1tb2RhbFwiKTtcclxuICAgICAgICBtLmNyZWF0ZUVsKFwiaDRcIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiB0KFwibnMudGl0bGVcIikgKyBcIiAoXCIgKyBpZHMuc2l6ZSArIFwiKVwiLFxyXG4gICAgICAgIH0pLmFkZENsYXNzKFwibXotbnMtdGl0bGVcIik7XHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG92LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBtLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcENsb3NlID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG9wQ2xvc2UgPSBjbG9zZTtcclxuICAgICAgICBvdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xyXG4gICAgICAgIG0uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJrZXlkb3duXCIsXHJcbiAgICAgICAgICAgIChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChldi5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBhcHBseSA9IChmbjogKG46IE1pbmROb2RlRGF0YSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuID0gdGhpcy5mQWxsKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChuKSBmbihuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtDID0gKGw6IHN0cmluZywgY3VyOiBzdHJpbmcsIGZuOiAodjogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBtLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByLmFkZENsYXNzKFwibXotbW9kYWwtcm93XCIpO1xyXG4gICAgICAgICAgICByLmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IGwgfSkuYWRkQ2xhc3MoXCJtei1tb2RhbC1sYmxcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGkgPSByLmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaS50eXBlID0gXCJjb2xvclwiO1xyXG4gICAgICAgICAgICBpLnZhbHVlID0gY3VyO1xyXG4gICAgICAgICAgICBpLmFkZENsYXNzKFwibXotc3AtY29sb3JcIik7XHJcbiAgICAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBmbihpLnZhbHVlKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta04gPSAoXHJcbiAgICAgICAgICAgIGw6IHN0cmluZyxcclxuICAgICAgICAgICAgY3VyOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG1pbjogbnVtYmVyLFxyXG4gICAgICAgICAgICBtYXg6IG51bWJlcixcclxuICAgICAgICAgICAgZm46ICh2OiBudW1iZXIpID0+IHZvaWQsXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBtLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByLmFkZENsYXNzKFwibXotbW9kYWwtcm93XCIpO1xyXG4gICAgICAgICAgICByLmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IGwgfSkuYWRkQ2xhc3MoXCJtei1tb2RhbC1sYmxcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGkgPSByLmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaS50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICAgICAgaS5taW4gPSBTdHJpbmcobWluKTtcclxuICAgICAgICAgICAgaS5tYXggPSBTdHJpbmcobWF4KTtcclxuICAgICAgICAgICAgaS52YWx1ZSA9IFN0cmluZyhjdXIpO1xyXG4gICAgICAgICAgICBpLmFkZENsYXNzKFwibXotc3AtbnVtXCIpO1xyXG4gICAgICAgICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gZm4oTnVtYmVyKGkudmFsdWUpKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta1MgPSAoXHJcbiAgICAgICAgICAgIGw6IHN0cmluZyxcclxuICAgICAgICAgICAgY3VyOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIG9wdHM6IHN0cmluZ1tdLFxyXG4gICAgICAgICAgICBmbjogKHY6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHIuYWRkQ2xhc3MoXCJtei1tb2RhbC1yb3dcIik7XHJcbiAgICAgICAgICAgIHIuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbCB9KS5hZGRDbGFzcyhcIm16LW1vZGFsLWxibFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcyA9IHIuY3JlYXRlRWwoXCJzZWxlY3RcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHMuYWRkQ2xhc3MoXCJtei1zcC1zZWxcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbyBvZiBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBvcC52YWx1ZSA9IG87XHJcbiAgICAgICAgICAgICAgICBvcC50ZXh0ID0gbztcclxuICAgICAgICAgICAgICAgIGlmIChvID09PSBjdXIpIG9wLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHMuYXBwZW5kQ2hpbGQob3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBmbihzLnZhbHVlKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBta0MoXHJcbiAgICAgICAgICAgIHQoXCJzbS5iZ1wiKSxcclxuICAgICAgICAgICAgc28uYmdDb2xvciA/P1xyXG4gICAgICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEJnQ29sb3IgOiB0aGlzLnN0eWxlLm5vZGVCZ0NvbG9yKSxcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuYmdDb2xvciA9IHY7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rQyhcclxuICAgICAgICAgICAgdChcInNtLnRleHRcIiksXHJcbiAgICAgICAgICAgIHNvLnRleHRDb2xvciA/P1xyXG4gICAgICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdFRleHRDb2xvciA6IHRoaXMuc3R5bGUubm9kZVRleHRDb2xvciksXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLnRleHRDb2xvciA9IHY7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rTihcclxuICAgICAgICAgICAgdChcInNtLmZvbnRTaXplXCIpLFxyXG4gICAgICAgICAgICBzby5mb250U2l6ZSA/P1xyXG4gICAgICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEZvbnRTaXplIDogdGhpcy5zdHlsZS5ub2RlRm9udFNpemUpLFxyXG4gICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgMzIsXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLmZvbnRTaXplID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBuLndpZHRoID0gdGhpcy5jYWxjVyhuLnRleHQsICEhbi5pc1Jvb3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIG4uaGVpZ2h0ID0gdGhpcy5jYWxjSChuLnRleHQsICEhbi5pc1Jvb3QpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta1MoXHJcbiAgICAgICAgICAgIHQoXCJzbS5mb250XCIpLFxyXG4gICAgICAgICAgICBzby5mb250RmFtaWx5ID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Rm9udEZhbWlseSA6IHRoaXMuc3R5bGUubm9kZUZvbnRGYW1pbHkpLFxyXG4gICAgICAgICAgICBGT05UX0xJU1QsXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLmZvbnRGYW1pbHkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ID09PSBcImluaGVyaXRcIiA/IHVuZGVmaW5lZCA6IHY7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rUyhcclxuICAgICAgICAgICAgdChcInNtLmJvcmRlclN0eWxlXCIpLFxyXG4gICAgICAgICAgICBzby5ib3JkZXJTdHlsZSA/P1xyXG4gICAgICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEJvcmRlclN0eWxlIDogdGhpcy5zdHlsZS5ub2RlQm9yZGVyU3R5bGUpLFxyXG4gICAgICAgICAgICBbXCJzb2xpZFwiLCBcImRhc2hlZFwiLCBcImRvdHRlZFwiLCBcImRvdWJsZVwiLCBcIm5vbmVcIl0sXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLmJvcmRlclN0eWxlID0gdiBhcyBCb3JkZXJTdHlsZTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtDKFxyXG4gICAgICAgICAgICB0KFwic20uYm9yZGVyQ29sb3JcIiksXHJcbiAgICAgICAgICAgIHNvLmJvcmRlckNvbG9yID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyQ29sb3IgOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJDb2xvciksXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLmJvcmRlckNvbG9yID0gdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtOKFxyXG4gICAgICAgICAgICB0KFwic20uYm9yZGVyV2lkdGhcIiksXHJcbiAgICAgICAgICAgIHNvLmJvcmRlcldpZHRoID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyV2lkdGggOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJXaWR0aCksXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLmJvcmRlcldpZHRoID0gdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtOKFxyXG4gICAgICAgICAgICB0KFwibnMuYm9yZGVyUmFkaXVzXCIpLFxyXG4gICAgICAgICAgICBzby5ib3JkZXJSYWRpdXMgPz9cclxuICAgICAgICAgICAgICAgIChpc1JcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3R5bGUucm9vdEJvcmRlclJhZGl1c1xyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5zdHlsZS5ub2RlQm9yZGVyUmFkaXVzKSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMzIsXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLmJvcmRlclJhZGl1cyA9IHY7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rQyhcclxuICAgICAgICAgICAgdChcIm5zLmNvbm5Db2xvclwiKSxcclxuICAgICAgICAgICAgZmlyc3Q/LmNvbm5lY3Rpb25Db2xvciA/PyB0aGlzLnN0eWxlLmNvbm5lY3Rpb25Db2xvcixcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uY29ubmVjdGlvbkNvbG9yID0gdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtOKFxyXG4gICAgICAgICAgICB0KFwibnMuY29ubldpZHRoXCIpLFxyXG4gICAgICAgICAgICBmaXJzdD8uY29ubmVjdGlvbldpZHRoID8/IHRoaXMuc3R5bGUuY29ubmVjdGlvbldpZHRoLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAodikgPT5cclxuICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5jb25uZWN0aW9uV2lkdGggPSB2O1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBDb25uZWN0aW9uIHR5cGUgd2l0aCBjb2xvciBzd2F0Y2hlcyBmb3Igcm9vdCBub2Rlc1xyXG4gICAgICAgIGlmIChpc1IpIHtcclxuICAgICAgICAgICAgY29uc3QgY3REaXYgPSBtLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjdERpdi5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3RcIik7XHJcbiAgICAgICAgICAgIGN0RGl2XHJcbiAgICAgICAgICAgICAgICAuY3JlYXRlRWwoXCJzcGFuXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1RDgzQ1x1REYwOCBcIiArIHQoXCJzbS5yYWluYm93XCIpLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctbGJsXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBuUGFsczogeyBbazogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLlJBSU5CT1dfUEFMRVRURVMsXHJcbiAgICAgICAgICAgICAgICAuLi4odGhpcy5zdHlsZS5jdXN0b21SYWluYm93cyB8fCB7fSksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIERldGVjdCBjdXJyZW50IHBhbGV0dGUgYnkgbWF0Y2hpbmcgZmlyc3QgY2hpbGQncyBjb2xvclxyXG4gICAgICAgICAgICBsZXQgYWN0aXZlUGFsID0gXCJvZmZcIjtcclxuICAgICAgICAgICAgaWYgKGZpcnN0ICYmIGZpcnN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZjID0gZmlyc3QuY2hpbGRyZW5bMF0uY29ubmVjdGlvbkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgY29sb3JzXSBvZiBPYmplY3QuZW50cmllcyhuUGFscykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yc1swXSA9PT0gZmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhbCA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBuTGlzdCA9IGN0RGl2LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBuTGlzdC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctbGlzdFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVidWlsZE5MID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbkxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1rTkkgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IHN0cmluZ1tdIHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ID0gbkxpc3QuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXQudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIiwga2V5ID09PSBhY3RpdmVQYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gYWN0aXZlUGFsKSBpdC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdC50b2dnbGVDbGFzcyhcIm16LXJhaW5ib3ctaG92ZXJcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0LmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IGxhYmVsIH0pLmFkZENsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm16LXJhaW5ib3ctaXRlbS1sYmxcIixcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZG90cyA9IGl0LmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90cy5hZGRDbGFzcyhcIm16LXJhaW5ib3ctZG90c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGNvbG9ycy5zbGljZSgwLCA4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IGRvdHMuY3JlYXRlRWwoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctZG90XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoeyBcIi0tbXotZG90LWNvbG9yXCI6IGMgfSkuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoW2ssIHZdKSA9PiBkLnN0eWxlLnNldFByb3BlcnR5KGssIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbG9ycykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuLmlzUm9vdCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jaGlsZHJlbltpXS5jb25uZWN0aW9uQ29sb3IgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnNbaSAlIGNvbG9ycy5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFsID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWJ1aWxkTkwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBta05JKFwib2ZmXCIsIFwiU29saWRcIiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb2xvcnNdIG9mIE9iamVjdC5lbnRyaWVzKG5QYWxzKSlcclxuICAgICAgICAgICAgICAgICAgICBta05JKG5hbWUsIG5hbWUsIGNvbG9ycyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlYnVpbGROTCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbHIgPSBtLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogdChcIm5zLmNsZWFyXCIpIH0pO1xyXG4gICAgICAgIGNsci5hZGRDbGFzcyhcIm16LW5zLWJ0blwiKTtcclxuICAgICAgICBjbHIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBuLmNvbm5lY3Rpb25Db2xvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIG4uY29ubmVjdGlvbldpZHRoID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGNidG4gPSBtLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogdChcInNtLmNsb3NlXCIpIH0pO1xyXG4gICAgICAgIGNidG4uYWRkQ2xhc3MoXCJtei1tb2RhbC1idG5cIiwgXCJtei1tb2RhbC1idG4tcHJpbWFyeVwiKTtcclxuICAgICAgICBjYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvZ2dsZVNlYXJjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hCYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jYz8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuc3VyZVByb3h5KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQmFyLmFkZENsYXNzKFwibXotc2VhcmNoLWJhclwiKTtcclxuICAgICAgICBjb25zdCBpbnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgaW5wLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpbnAucGxhY2Vob2xkZXIgPSB0KFwic2VhcmNoLnBsYWNlaG9sZGVyXCIpO1xyXG4gICAgICAgIGlucC5hZGRDbGFzcyhcIm16LXNlYXJjaC1pbnB1dFwiKTtcclxuICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgaW5mby5hZGRDbGFzcyhcIm16LXNlYXJjaC1jb3VudFwiKTtcclxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gXCJcdTI3MTVcIjtcclxuICAgICAgICBjbG9zZUJ0bi5hZGRDbGFzcyhcIm16LXNlYXJjaC1idG5cIik7XHJcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXI/LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEJhciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY2M/LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5lbnN1cmVQcm94eSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQmFyLmFwcGVuZENoaWxkKGlucCk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCYXIuYXBwZW5kQ2hpbGQoaW5mbyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCYXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xyXG4gICAgICAgIHRoaXMuc3ZnQ3QuYXBwZW5kQ2hpbGQodGhpcy5zZWFyY2hCYXIpO1xyXG4gICAgICAgIGNvbnN0IGRvU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBxID0gaW5wLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hJZHggPSAwO1xyXG4gICAgICAgICAgICBpZiAoIXEpIHtcclxuICAgICAgICAgICAgICAgIGluZm8udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHZpcyA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChuLnRleHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMucHVzaChuKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB2aXMoYyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB2aXMocik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvLnRleHRDb250ZW50ID0gXCIxL1wiICsgdGhpcy5zZWFyY2hSZXN1bHRzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsMSh0aGlzLnNlYXJjaFJlc3VsdHNbMF0uaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c05vZGUodGhpcy5zZWFyY2hSZXN1bHRzWzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpbmZvLnRleHRDb250ZW50ID0gXCIwXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGRvU2VhcmNoKTtcclxuICAgICAgICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJrZXlkb3duXCIsXHJcbiAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hSZXN1bHRzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaElkeCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zZWFyY2hJZHggLSAxICsgdGhpcy5zZWFyY2hSZXN1bHRzLmxlbmd0aCkgJVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSWR4ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnNlYXJjaElkeCArIDEpICUgdGhpcy5zZWFyY2hSZXN1bHRzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBpbmZvLnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJZHggKyAxICsgXCIvXCIgKyB0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5kID0gdGhpcy5zZWFyY2hSZXN1bHRzW3RoaXMuc2VhcmNoSWR4XTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNOb2RlKG5kKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBpbnAuZm9jdXMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXI/LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNjPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVQcm94eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnAuZm9jdXMoKSwgMCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldENDKFxyXG4gICAgICAgIGNoOiBNaW5kTm9kZURhdGEsXHJcbiAgICAgICAgcFI6IGJvb2xlYW4sXHJcbiAgICAgICAgaWR4OiBudW1iZXIsXHJcbiAgICAgICAgaW5oPzogc3RyaW5nLFxyXG4gICAgKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoY2guY29ubmVjdGlvbkNvbG9yKSByZXR1cm4gY2guY29ubmVjdGlvbkNvbG9yO1xyXG4gICAgICAgIGlmIChpbmgpIHJldHVybiBpbmg7XHJcbiAgICAgICAgY29uc3QgcmIgPSB0aGlzLmdldFJhaW5ib3coKTtcclxuICAgICAgICBpZiAodGhpcy5zdHlsZS5jb25uZWN0aW9uUmFpbmJvdyAmJiBwUikgcmV0dXJuIHJiW2lkeCAlIHJiLmxlbmd0aF07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUuY29ubmVjdGlvbkNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNBY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1pbmRNYXBWaWV3KSA9PT0gdGhpcztcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNFeHRJbnB1dChlOiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGlmICghdCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHRhZyA9IHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICh0YWcgPT09IFwiaW5wdXRcIiB8fCB0YWcgPT09IFwidGV4dGFyZWFcIiB8fCB0YWcgPT09IFwic2VsZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLnN2Z0N0Py5jb250YWlucyh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfa2QgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdCgpIHx8IHRoaXMubWRNb2RlIHx8IHRoaXMuaXNFeHRJbnB1dChlKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEJhciAmJiB0aGlzLnNlYXJjaEJhci5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIEZJWCAjNzogd2hlbiBtb2RhbCBpcyBvcGVuLCBFc2MgY2xvc2VzIGl0OyBibG9jayBhbGwgb3RoZXIga2V5c1xyXG4gICAgICAgIGlmICh0aGlzLnBvcENsb3NlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9wQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9wQ2xvc2UgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRklYICM2OiBkaXNhYmxlIGFsbCBrZXlzIGR1cmluZyBkcmFnXHJcbiAgICAgICAgaWYgKHRoaXMuZHM/LmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHRoaXMuY2FuY2VsRHJhZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEVkaXQgbW9kZVxyXG4gICAgICAgIGlmICh0aGlzLmVkaXRJZCkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgJiZcclxuICAgICAgICAgICAgICAgIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiYVwiICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgJiYgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJmXCIpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVNlYXJjaCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmXHJcbiAgICAgICAgICAgIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiY1wiICYmXHJcbiAgICAgICAgICAgICFlLnNoaWZ0S2V5ICYmXHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvcHlOb2RlKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJlxyXG4gICAgICAgICAgICBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcInhcIiAmJlxyXG4gICAgICAgICAgICB0aGlzLnNlbElkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5jb3B5Tm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJlxyXG4gICAgICAgICAgICBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcInZcIiAmJlxyXG4gICAgICAgICAgICB0aGlzLmNsaXBib2FyZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFzdGVOb2RlKGUuc2hpZnRLZXkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IudW5kbykpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnVuZG8oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLnJlZG8pKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5yZWRvKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gWm9vbSBrZXliaW5kaW5nc1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2Iuem9vbUluKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUJ5KDEuMSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi56b29tT3V0KSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUJ5KDAuOSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi56b29tUmVzZXQpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy56b29tVG8oMSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5hZGRDaGlsZCkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAvLyBzaGlmdCt0YWIgPSBsZWZ0IGNoaWxkIChvbiByb290IG9yIGFueSBub2RlKVxyXG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiB0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExlZnRDaGlsZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB0aGlzLmFkZENoaWxkTm9kZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IuYWRkU2libGluZykgJiYgIWUuY3RybEtleSAmJiAhZS5tZXRhS2V5KSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgLy8gc2hpZnQrZW50ZXIgPSBsZWZ0IGNoaWxkIG9uIHJvb3RcclxuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgJiYgdGhpcy5zZWxJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gdGhpcy5mQWxsKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbD8uaXNSb290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRMZWZ0Q2hpbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFlLnNoaWZ0S2V5ICYmIHRoaXMuc2VsSWQpIHRoaXMuYWRkU2libGluZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNwYWNlOiBzaW5nbGUgbm9kZSBzZWxlY3RlZCA9IGVkaXQsIG5vL211bHRpID0gcGFuXHJcbiAgICAgICAgLy8gZWRpdE5vZGU6IHNpbmdsZSBub2RlID0gZWRpdFxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLmVkaXROb2RlKSAmJlxyXG4gICAgICAgICAgICAhZS5yZXBlYXQgJiZcclxuICAgICAgICAgICAgdGhpcy5zZWxJZCAmJlxyXG4gICAgICAgICAgICAhdGhpcy5pc011bHRpKClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRJZCA9IHRoaXMuc2VsSWQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZHJhZ0NhbnZhczogcGFuIG1vZGVcclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLmRyYWdDYW52YXMpICYmICFlLnJlcGVhdCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3BhY2VEb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2MpIHRoaXMuY2MudG9nZ2xlQ2xhc3MoXCJtei1jdXJzb3ItZ3JhYlwiLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDdHJsK0VudGVyIGVudGVycyBlZGl0IG1vZGVcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0SWQgPSB0aGlzLnNlbElkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IuZm9jdXNOb2RlKSAmJiAhZS5jdHJsS2V5ICYmICFlLm1ldGFLZXkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzU2VsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoQmFyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEJhci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xyU2VsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlUG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiQmFja3NwYWNlXCIgfHwgZS5rZXkgPT09IFwiRGVsZXRlXCIpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc011bHRpKCkpIHRoaXMuYmF0Y2hEZWwoKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxJZCkgdGhpcy5kZWxOb2RlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5uYXZVcCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycm93KFwiQXJyb3dVcFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IubmF2RG93bikpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycm93KFwiQXJyb3dEb3duXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5uYXZMZWZ0KSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxJZCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyb3coXCJBcnJvd0xlZnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLm5hdlJpZ2h0KSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxJZCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyb3coXCJBcnJvd1JpZ2h0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gRklYICMxOiBrZWVwIGdyYWIgY3Vyc29yIGR1cmluZyBkcmFnLCBkb24ndCByZXNldCB0byBwb2ludGVyXHJcbiAgICBwcml2YXRlIF9rdSA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBlLmNvZGUgPT09IFwiU3BhY2VcIiB8fFxyXG4gICAgICAgICAgICB0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IuZWRpdE5vZGUpIHx8XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5kcmFnQ2FudmFzKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnNwYWNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdDdiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYy50b2dnbGVDbGFzcyhcIm16LWN1cnNvci1ncmFiYmluZ1wiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNjLnRvZ2dsZUNsYXNzKFwibXotY3Vyc29yLWdyYWJcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIElNRS1jb21wYXRpYmxlIHR5cGVUb0VkaXQgdmlhIHByb3h5IHRleHRhcmVhIHBvc2l0aW9uZWQgYmVsb3cgc2VsZWN0ZWQgbm9kZVxyXG4gICAgcHJpdmF0ZSBlbnN1cmVQcm94eSgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyUHJveHkoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICF0aGlzLnBsdWdpbi5zZXR0aW5ncy50eXBlVG9FZGl0IHx8XHJcbiAgICAgICAgICAgICF0aGlzLnNlbElkIHx8XHJcbiAgICAgICAgICAgIHRoaXMuaXNNdWx0aSgpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdElkIHx8XHJcbiAgICAgICAgICAgICF0aGlzLnN2Z0N0IHx8XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoQmFyICYmIHRoaXMuc2VhcmNoQmFyLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbmQgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgaWYgKCFuZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgLy8gUG9zaXRpb24gYmVsb3cgdGhlIHNlbGVjdGVkIG5vZGUgaW4gc2NyZWVuIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgY29uc3Qgc2NyZWVuWCA9IG5kLnggKiB0aGlzLnpvb20gKyB0aGlzLnBhblg7XHJcbiAgICAgICAgY29uc3Qgc2NyZWVuWSA9IChuZC55ICsgbmQuaGVpZ2h0IC8gMikgKiB0aGlzLnpvb20gKyB0aGlzLnBhblkgKyA0O1xyXG4gICAgICAgIHAuYWRkQ2xhc3MoXCJtei1wcm94eS10YVwiKTtcclxuICAgICAgICBPYmplY3QuZW50cmllcyh7XHJcbiAgICAgICAgICAgIFwiLS1tei1wcm94eS1sZWZ0XCI6IHNjcmVlblggKyBcInB4XCIsXHJcbiAgICAgICAgICAgIFwiLS1tei1wcm94eS10b3BcIjogc2NyZWVuWSArIFwicHhcIixcclxuICAgICAgICB9KS5mb3JFYWNoKChbaywgdl0pID0+IHAuc3R5bGUuc2V0UHJvcGVydHkoaywgdikpO1xyXG4gICAgICAgIHRoaXMuc3ZnQ3QuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgdGhpcy5wcm94eVRBID0gcDtcclxuICAgICAgICBsZXQgY29tcG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgcC5hZGRFdmVudExpc3RlbmVyKFwiY29tcG9zaXRpb25zdGFydFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbXBvc2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHAuYWRkQ2xhc3MoXCJtei1wcm94eS1jb21wb3NpbmdcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcC5hZGRFdmVudExpc3RlbmVyKFwiY29tcG9zaXRpb25lbmRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb21wb3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gcC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHZhbCAmJiB0aGlzLnNlbElkICYmICF0aGlzLmVkaXRJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0SWQgPSB0aGlzLnNlbElkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpdmVUQSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5zZXRSYW5nZVRleHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5zZWxlY3Rpb25TdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdGlvbkVuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9zaW5nKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHAudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh2YWwgJiYgdGhpcy5zZWxJZCAmJiAhdGhpcy5lZGl0SWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdElkID0gdGhpcy5zZWxJZDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXZlVEEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuc2V0UmFuZ2VUZXh0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuc2VsZWN0aW9uU3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5zZWxlY3Rpb25FbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSksIDApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjbGVhclByb3h5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3h5VEEpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm94eVRBLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3h5VEEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgY29weU5vZGUoY3V0OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbElkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbmQgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgaWYgKCFuZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY2xpcGJvYXJkID0geyBkYXRhOiBKU09OLnN0cmluZ2lmeShuZCksIGlzUm9vdDogISFuZC5pc1Jvb3QsIGN1dCB9O1xyXG4gICAgICAgIGlmIChjdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgICAgICBpZiAobmQuaXNSb290KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290cyA9IHRoaXMucm9vdHMuZmlsdGVyKChyKSA9PiByLmlkICE9PSBuZC5pZCk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZW1BbGwobmQuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLmNsclNlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgcGFzdGVOb2RlKHN0cmlwOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsaXBib2FyZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGNsb25lOiBNaW5kTm9kZURhdGEgPSBKU09OLnBhcnNlKHRoaXMuY2xpcGJvYXJkLmRhdGEpO1xyXG4gICAgICAgIGlmICghdGhpcy5jbGlwYm9hcmQuY3V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlSWQgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuLmlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSByZUlkKGMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZUlkKGNsb25lKTtcclxuICAgICAgICB9IGVsc2UgdGhpcy5jbGlwYm9hcmQgPSBudWxsO1xyXG4gICAgICAgIGlmIChzdHJpcCkge1xyXG4gICAgICAgICAgICBjb25zdCBzID0gKG46IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgbi5jb25uZWN0aW9uQ29sb3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBuLmNvbm5lY3Rpb25XaWR0aCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSBzKGMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzKGNsb25lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgIGlmIChjbG9uZS5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHRoaXMucm9vdHNbdGhpcy5yb290cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgY2xvbmUueCA9IGxhc3Q/LnggPz8gMDtcclxuICAgICAgICAgICAgY2xvbmUueSA9IChsYXN0Py55ID8/IDApICsgMjAwO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzLnB1c2goY2xvbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsb25lLmlzUm9vdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICAgICAgICAgIGlmIChwKSBwLmNoaWxkcmVuLnB1c2goY2xvbmUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgdGhpcy5yb290cy5wdXNoKHsgLi4uY2xvbmUsIGlzUm9vdDogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWwxKGNsb25lLmlkKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNhbmNlbERyYWcoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRzKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmRzLmlzUm9vdERyYWcpIHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZHMgYXMgQ2hpbGREcmFnO1xyXG4gICAgICAgICAgICBpZiAoZC5zbmFwKSB0aGlzLnJvb3RzID0gSlNPTi5wYXJzZShkLnNuYXApO1xyXG4gICAgICAgICAgICBkLmdob3N0RWw/LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBkLmluZGljYXRvckVsPy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuY2MpIHRoaXMuY2MudG9nZ2xlQ2xhc3MoXCJtei1jdXJzb3ItZ3JhYlwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX211ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5ib3hTZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRCb3goZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0N2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0N2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNjKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNjLnRvZ2dsZUNsYXNzKFwibXotY3Vyc29yLWdyYWJiaW5nXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2MudG9nZ2xlQ2xhc3MoXCJtei1jdXJzb3ItZ3JhYlwiLCB0aGlzLnNwYWNlRG93bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmRzKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmRzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5kcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZHMuaXNSb290RHJhZykge1xyXG4gICAgICAgICAgICB0aGlzLmRzID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkID0gdGhpcy5kcyBhcyBDaGlsZERyYWc7XHJcbiAgICAgICAgY29uc3QgcmMgPSB0aGlzLmNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IG14ID0gKGUuY2xpZW50WCAtIHJjLmxlZnQgLSB0aGlzLnBhblgpIC8gdGhpcy56b29tLFxyXG4gICAgICAgICAgICBteSA9IChlLmNsaWVudFkgLSByYy50b3AgLSB0aGlzLnBhblkpIC8gdGhpcy56b29tO1xyXG4gICAgICAgIGNvbnN0IGR4ID0gbXggLSBkLnN0YXJ0WCxcclxuICAgICAgICAgICAgZHkgPSBteSAtIGQuc3RhcnRZO1xyXG4gICAgICAgIGNvbnN0IGRuID0gdGhpcy5mQWxsKGQubm9kZUlkKTtcclxuICAgICAgICBjb25zdCBkblcgPSBkbiA/IGRuLndpZHRoIDogMDtcclxuICAgICAgICBjb25zdCBpc0xlZnRTaWRlID0gZG4/LnNpZGUgPT09IFwibGVmdFwiO1xyXG4gICAgICAgIGNvbnN0IGVkZ2VYID0gZG5cclxuICAgICAgICAgICAgPyBpc0xlZnRTaWRlXHJcbiAgICAgICAgICAgICAgICA/IGRuLnggKyBkeCArIGRuVyAvIDJcclxuICAgICAgICAgICAgICAgIDogZG4ueCArIGR4IC0gZG5XIC8gMlxyXG4gICAgICAgICAgICA6IG14O1xyXG4gICAgICAgIGNvbnN0IGd5ID0gZG4gPyBkbi55ICsgZHkgOiBteTtcclxuICAgICAgICBjb25zdCB0Z3QgPSB0aGlzLmRldFRndChlZGdlWCwgZWRnZVgsIGd5LCBkLm5vZGVJZCk7XHJcbiAgICAgICAgaWYgKHRndCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlY1BvcygpO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbElkcyA9IHRoaXMuYWxsU2VsKCk7XHJcbiAgICAgICAgICAgIC8vIEZJWCAjNjogY29sbGVjdCBub2RlcyBpbiBvcmlnaW5hbCB0cmVlIG9yZGVyLCBwcmVzZXJ2ZSB0aGVpciBzZXF1ZW5jZVxyXG4gICAgICAgICAgICBjb25zdCB0b01vdmU6IE1pbmROb2RlRGF0YVtdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RPcmRlcmVkID0gKHBhcmVudDogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gcGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IHBhcmVudC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsSWRzLmhhcyhjLmlkKSAmJiAhYy5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Nb3ZlLnVuc2hpZnQocGFyZW50LmNoaWxkcmVuLnNwbGljZShpLCAxKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdE9yZGVyZWQoYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgY29sbGVjdE9yZGVyZWQocik7XHJcbiAgICAgICAgICAgIGlmICghdG9Nb3ZlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGV0ID0gdGhpcy5yZW1BbGwoZC5ub2RlSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRldCkgdG9Nb3ZlLnB1c2goZGV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgc2lkZSBvZiBtb3ZlZCBub2RlcyB0byBtYXRjaCB0YXJnZXQncyBzaWRlXHJcbiAgICAgICAgICAgIGNvbnN0IHRndE5vZGUgPSB0aGlzLmZBbGwodGd0LmlkKTtcclxuICAgICAgICAgICAgY29uc3QgdGd0U2lkZSA9XHJcbiAgICAgICAgICAgICAgICB0Z3ROb2RlPy5zaWRlIHx8ICh0Z3ROb2RlPy5pc1Jvb3QgPyB1bmRlZmluZWQgOiBcInJpZ2h0XCIpO1xyXG4gICAgICAgICAgICBpZiAodGd0U2lkZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0U2lkZSA9IChuOiBNaW5kTm9kZURhdGEsIHM6IFwibGVmdFwiIHwgXCJyaWdodFwiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zaWRlID0gcztcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgc2V0U2lkZShjLCBzKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG0gb2YgdG9Nb3ZlKSBzZXRTaWRlKG0sIHRndFNpZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEluc2VydCBwcmVzZXJ2aW5nIG9yZGVyXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Nb3ZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkgdGhpcy5pbnNUcmVlKHRvTW92ZVtpXSwgdGd0LmlkLCB0Z3Quem9uZSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuaW5zVHJlZSh0b01vdmVbaV0sIHRvTW92ZVtpIC0gMV0uaWQsIFwiYWZ0ZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gS2VlcCBhbGwgbW92ZWQgbm9kZXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgdGhpcy5tdWx0aVNlbC5jbGVhcigpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG0gb2YgdG9Nb3ZlKSB0aGlzLm11bHRpU2VsLmFkZChtLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxJZCA9IHRvTW92ZS5sZW5ndGggPyB0b01vdmVbMF0uaWQgOiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkLmdob3N0RWw/LnJlbW92ZSgpO1xyXG4gICAgICAgIGQuaW5kaWNhdG9yRWw/LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZHMgPSBudWxsO1xyXG4gICAgICAgIGlmICh0Z3QpIHRoaXMuYW5pbVJlbmRlcigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHVwZFR4KCkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAtLSBTVkcgZ3JvdXAgdHJhbnNmb3JtIHJlcXVpcmVzIGRpcmVjdCBzdHlsZSBmb3IgcGFuL3pvb20gcGVyZm9ybWFuY2VcclxuICAgICAgICB0aGlzLmdFbC5zdHlsZS50cmFuc2Zvcm0gPVxyXG4gICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArXHJcbiAgICAgICAgICAgIHRoaXMucGFuWCArXHJcbiAgICAgICAgICAgIFwicHgsXCIgK1xyXG4gICAgICAgICAgICB0aGlzLnBhblkgK1xyXG4gICAgICAgICAgICBcInB4KSBzY2FsZShcIiArXHJcbiAgICAgICAgICAgIHRoaXMuem9vbSArXHJcbiAgICAgICAgICAgIFwiKVwiO1xyXG4gICAgICAgIGlmICh0aGlzLnpvb21MYWJlbClcclxuICAgICAgICAgICAgdGhpcy56b29tTGFiZWwuaW5uZXJUZXh0ID0gTWF0aC5yb3VuZCh0aGlzLnpvb20gKiAxMDApICsgXCIlXCI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHpvb21CeShmYWN0b3I6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHJjID0gdGhpcy5jYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpZiAocmMud2lkdGggPCAxIHx8IHJjLmhlaWdodCA8IDEpIHJldHVybjtcclxuICAgICAgICBjb25zdCBjeCA9IHJjLndpZHRoIC8gMixcclxuICAgICAgICAgICAgY3kgPSByYy5oZWlnaHQgLyAyO1xyXG4gICAgICAgIGNvbnN0IG56ID0gTWF0aC5tYXgoMC4xLCBNYXRoLm1pbih0aGlzLnpvb20gKiBmYWN0b3IsIDMpKTtcclxuICAgICAgICB0aGlzLnBhblggPSBjeCAtIChjeCAtIHRoaXMucGFuWCkgKiAobnogLyB0aGlzLnpvb20pO1xyXG4gICAgICAgIHRoaXMucGFuWSA9IGN5IC0gKGN5IC0gdGhpcy5wYW5ZKSAqIChueiAvIHRoaXMuem9vbSk7XHJcbiAgICAgICAgdGhpcy56b29tID0gbno7XHJcbiAgICAgICAgdGhpcy51cGRUeCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB6b29tVG8obGV2ZWw6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHJjID0gdGhpcy5jYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpZiAocmMud2lkdGggPCAxIHx8IHJjLmhlaWdodCA8IDEpIHJldHVybjtcclxuICAgICAgICBjb25zdCBjeCA9IHJjLndpZHRoIC8gMixcclxuICAgICAgICAgICAgY3kgPSByYy5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHRoaXMucGFuWCA9IGN4IC0gKGN4IC0gdGhpcy5wYW5YKSAqIChsZXZlbCAvIHRoaXMuem9vbSk7XHJcbiAgICAgICAgdGhpcy5wYW5ZID0gY3kgLSAoY3kgLSB0aGlzLnBhblkpICogKGxldmVsIC8gdGhpcy56b29tKTtcclxuICAgICAgICB0aGlzLnpvb20gPSBsZXZlbDtcclxuICAgICAgICB0aGlzLnVwZFR4KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRvTGF5b3V0KG46IE1pbmROb2RlRGF0YSkge1xyXG4gICAgICAgIHRoaXMuY1NIKG4pO1xyXG4gICAgICAgIHRoaXMuY1hZKG4pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjU0gobjogTWluZE5vZGVEYXRhKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCB2bSA9IHRoaXMuc3R5bGUubm9kZUdhcFkgPz8gMjQ7XHJcbiAgICAgICAgaWYgKCFuLmNoaWxkcmVuPy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgKG4gYXMgTGF5b3V0Tm9kZSkuX3NoID0gbi5oZWlnaHQgKyB2bTtcclxuICAgICAgICAgICAgcmV0dXJuIChuIGFzIExheW91dE5vZGUpLl9zaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgdG90YWwgKz0gdGhpcy5jU0goYyk7XHJcbiAgICAgICAgKG4gYXMgTGF5b3V0Tm9kZSkuX3NoID0gTWF0aC5tYXgobi5oZWlnaHQgKyB2bSwgdG90YWwpO1xyXG4gICAgICAgIHJldHVybiAobiBhcyBMYXlvdXROb2RlKS5fc2g7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNYWShuOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICBpZiAoIW4uY2hpbGRyZW4/Lmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGhtID0gdGhpcy5zdHlsZS5jb25uZWN0aW9uTGVuZ3RoIHx8IDgwO1xyXG4gICAgICAgIC8vIFNwbGl0IGNoaWxkcmVuIGJ5IHNpZGUgZm9yIHJvb3Qgbm9kZXNcclxuICAgICAgICBjb25zdCByaWdodENoID0gbi5jaGlsZHJlbi5maWx0ZXIoKGMpID0+IGMuc2lkZSAhPT0gXCJsZWZ0XCIpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRDaCA9IG4uY2hpbGRyZW4uZmlsdGVyKChjKSA9PiBjLnNpZGUgPT09IFwibGVmdFwiKTtcclxuICAgICAgICAvLyBMYXlvdXQgcmlnaHQgY2hpbGRyZW5cclxuICAgICAgICBpZiAocmlnaHRDaC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IHRvdCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiByaWdodENoKSB0b3QgKz0gKGMgYXMgTGF5b3V0Tm9kZSkuX3NoO1xyXG4gICAgICAgICAgICBsZXQgY3kgPSBuLnkgLSB0b3QgLyAyO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgcmlnaHRDaCkge1xyXG4gICAgICAgICAgICAgICAgYy54ID0gbi54ICsgbi53aWR0aCAvIDIgKyBobSArIGMud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgYy55ID0gY3kgKyAoYyBhcyBMYXlvdXROb2RlKS5fc2ggLyAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jWFkoYyk7XHJcbiAgICAgICAgICAgICAgICBjeSArPSAoYyBhcyBMYXlvdXROb2RlKS5fc2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTGF5b3V0IGxlZnQgY2hpbGRyZW4gKG1pcnJvcilcclxuICAgICAgICBpZiAobGVmdENoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgdG90ID0gMDtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGxlZnRDaCkgdG90ICs9IChjIGFzIExheW91dE5vZGUpLl9zaDtcclxuICAgICAgICAgICAgbGV0IGN5ID0gbi55IC0gdG90IC8gMjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGxlZnRDaCkge1xyXG4gICAgICAgICAgICAgICAgYy54ID0gbi54IC0gbi53aWR0aCAvIDIgLSBobSAtIGMud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgYy55ID0gY3kgKyAoYyBhcyBMYXlvdXROb2RlKS5fc2ggLyAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jWFkoYyk7XHJcbiAgICAgICAgICAgICAgICBjeSArPSAoYyBhcyBMYXlvdXROb2RlKS5fc2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNhbGNXKHR4dDogc3RyaW5nLCBpc1I6IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGZzID0gaXNSID8gdGhpcy5zdHlsZS5yb290Rm9udFNpemUgOiB0aGlzLnN0eWxlLm5vZGVGb250U2l6ZTtcclxuICAgICAgICBjb25zdCBmZiA9IGlzUiA/IHRoaXMuc3R5bGUucm9vdEZvbnRGYW1pbHkgOiB0aGlzLnN0eWxlLm5vZGVGb250RmFtaWx5O1xyXG4gICAgICAgIGxldCBtdyA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCBsIG9mIHR4dC5zcGxpdChcIlxcblwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIGQuYWRkQ2xhc3MoXCJtei1tZWFzdXJlLXNwYW5cIik7XHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHsgXCItLW16LWZzXCI6IGZzICsgXCJweFwiLCBcIi0tbXotZmZcIjogZmYgfSkuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIChbaywgdl0pID0+IGQuc3R5bGUuc2V0UHJvcGVydHkoaywgdiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGQuaW5uZXJUZXh0ID0gbCB8fCBcIiBcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkKTtcclxuICAgICAgICAgICAgaWYgKGQub2Zmc2V0V2lkdGggPiBtdykgbXcgPSBkLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgIGlzUiA/IHRoaXMuc3R5bGUucm9vdE1pbldpZHRoIDogdGhpcy5zdHlsZS5ub2RlTWluV2lkdGgsXHJcbiAgICAgICAgICAgIG13ICsgdGhpcy5zdHlsZS5ub2RlUGFkWCAqIDIgKyA0LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNhbGNIKHR4dDogc3RyaW5nLCBpc1I6IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGZzID0gaXNSID8gdGhpcy5zdHlsZS5yb290Rm9udFNpemUgOiB0aGlzLnN0eWxlLm5vZGVGb250U2l6ZTtcclxuICAgICAgICBjb25zdCBsaCA9IHRoaXMuc3R5bGUubm9kZUxpbmVIZWlnaHQgfHwgMS41O1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChcclxuICAgICAgICAgICAgaXNSID8gdGhpcy5zdHlsZS5yb290TWluSGVpZ2h0IDogdGhpcy5zdHlsZS5ub2RlTWluSGVpZ2h0LFxyXG4gICAgICAgICAgICB0eHQuc3BsaXQoXCJcXG5cIikubGVuZ3RoICogZnMgKiBsaCArIDE0LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlY1BvcygpIHtcclxuICAgICAgICB0aGlzLm9sZFBvcy5jbGVhcigpO1xyXG4gICAgICAgIGNvbnN0IHYgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2xkUG9zLnNldChuLmlkLCB7IHg6IG4ueCwgeTogbi55IH0pO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgdihjKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB2KHIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhbmltUmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5ub2Rlc0cgfHwgIXRoaXMuZWRnZXNHIHx8ICF0aGlzLm9sZFBvcy5zaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbnAgPSBuZXcgTWFwPHN0cmluZywgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9PigpO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9MYXlvdXQocik7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBucC5zZXQobi5pZCwgeyB4OiBuLngsIHk6IG4ueSB9KTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB2KGMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2KHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcCA9IG5ldyBNYXA8c3RyaW5nLCB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbaWQsIHBdIG9mIG5wKSBzcC5zZXQoaWQsIHRoaXMub2xkUG9zLmdldChpZCkgPz8gcCk7XHJcbiAgICAgICAgY29uc3QgZHVyID0gMjAwLFxyXG4gICAgICAgICAgICB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1JZCkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltSWQpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2lkLCBwXSBvZiBucCkge1xyXG4gICAgICAgICAgICBjb25zdCBuID0gdGhpcy5mQWxsKGlkKTtcclxuICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgIG4ueCA9IHAueDtcclxuICAgICAgICAgICAgICAgIG4ueSA9IHAueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2lkLCBwXSBvZiBzcCkge1xyXG4gICAgICAgICAgICBjb25zdCBuID0gdGhpcy5mQWxsKGlkKTtcclxuICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgIG4ueCA9IHAueDtcclxuICAgICAgICAgICAgICAgIG4ueSA9IHAueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUZPKCk7XHJcbiAgICAgICAgdGhpcy5lZGdlc0cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kcmF3RWRnZXMocik7XHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IChub3c6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0dCA9IE1hdGgubWluKChub3cgLSB0MCkgLyBkdXIsIDEpLFxyXG4gICAgICAgICAgICAgICAgZWFzZSA9IDEgLSBNYXRoLnBvdygxIC0gdHQsIDMpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtpZCwgZnBdIG9mIG5wKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gc3AuZ2V0KGlkKSE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuID0gdGhpcy5mQWxsKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi54ID0gcy54ICsgKGZwLnggLSBzLngpICogZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBuLnkgPSBzLnkgKyAoZnAueSAtIHMueSkgKiBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZWRnZXNHIS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kcmF3RWRnZXMocik7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRk8oKTtcclxuICAgICAgICAgICAgaWYgKHR0IDwgMSkgdGhpcy5hbmltSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbaWQsIHBdIG9mIG5wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMuZkFsbChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi54ID0gcC54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLnkgPSBwLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUlkID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hbmltSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNvZnRSZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVkZ2VzRyB8fCAhdGhpcy5ub2Rlc0cpIHJldHVybjtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kb0xheW91dChyKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZPKCk7XHJcbiAgICAgICAgdGhpcy5lZGdlc0cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kcmF3RWRnZXMocik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXZQYW5lbCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVkZ2VzRyB8fCAhdGhpcy5ub2Rlc0cgfHwgIXRoaXMub3ZlcmxheUcpIHJldHVybjtcclxuICAgICAgICB0aGlzLmVkZ2VzRy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubm9kZXNHLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5Ry5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubGl2ZVRBID0gbnVsbDtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICB0aGlzLmRvTGF5b3V0KHIpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdFZGdlcyhyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHRoaXMuZHJhd05vZGVzKHIpO1xyXG4gICAgICAgIGlmICh0aGlzLmJveFNlbCAmJiB0aGlzLmJveEVsKSB0aGlzLm92ZXJsYXlHLmFwcGVuZENoaWxkKHRoaXMuYm94RWwpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGV2UGFuZWwoKTtcclxuICAgICAgICBpZiAodGhpcy5lZGl0SWQpIHRoaXMuY2xlYXJQcm94eSgpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbnN1cmVQcm94eSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBiUGF0aChzeDogbnVtYmVyLCBzeTogbnVtYmVyLCBleDogbnVtYmVyLCBleTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZHggPSBleCAtIHN4O1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdHlsZS5jb25uZWN0aW9uU3R5bGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInN0cmFpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNXCIgKyBzeCArIFwiIFwiICsgc3kgKyBcIkxcIiArIGV4ICsgXCIgXCIgKyBleTtcclxuICAgICAgICAgICAgY2FzZSBcImN1cnZlZFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBcIk1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3ggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCJRXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIChzeCArIGR4ICogMC43KSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2FzZSBcInN0ZXBcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbXggPSAoc3ggKyBleCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVwiICsgc3ggKyBcIiBcIiArIHN5ICsgXCJIXCIgKyBteCArIFwiVlwiICsgZXkgKyBcIkhcIiArIGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJicmFja2V0XCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG14ID0gc3ggKyBkeCAqIDAuNTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN4ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3kgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ1wiICtcclxuICAgICAgICAgICAgICAgICAgICBteCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgbXggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV4ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImxvb3NlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTVwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIkNcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKHN4ICsgZHggKiAwLjYpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKHN5ICsgKGV5IC0gc3kpICogMC4xKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIChleCAtIGR4ICogMC4zKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIChleSAtIChleSAtIHN5KSAqIDAuMSkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV5XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBcIk1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3ggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIChzeCArIGR4ICogMC40KSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKGV4IC0gZHggKiAwLjQpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV5XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJhd0VkZ2VzKG5kOiBNaW5kTm9kZURhdGEsIGluaD86IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHBSID0gISFuZC5pc1Jvb3Q7XHJcbiAgICAgICAgLy8gRm9yIHN0ZXAvYnJhY2tldCBzdHlsZXMsIHotb3JkZXIgbWF0dGVycy4gRHJhdyBjaGlsZHJlbiBmdXJ0aGVzdCBmcm9tIGNlbnRlciBmaXJzdCxcclxuICAgICAgICAvLyBjbG9zZXN0IHRvIGNlbnRlciBsYXN0IChvbiB0b3ApLCBzbyBlYWNoIGNoaWxkJ3MgY29sb3IgaXMgdmlzaWJsZSBhdCB0aGUganVuY3Rpb24uXHJcbiAgICAgICAgY29uc3QgYWJvdmU6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgY29uc3QgYmVsb3c6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobmQuY2hpbGRyZW5baV0ueSA8IG5kLnkpIGFib3ZlLnB1c2goaSk7XHJcbiAgICAgICAgICAgIGVsc2UgYmVsb3cucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWJvdmU6IHRvcC10by1ib3R0b20gKGZ1cnRoZXN0IGZpcnN0LCBjbG9zZXN0IHRvIGNlbnRlciBsYXN0ID0gb24gdG9wKVxyXG4gICAgICAgIC8vIEJlbG93OiBib3R0b20tdG8tdG9wIChmdXJ0aGVzdCBmaXJzdCwgY2xvc2VzdCB0byBjZW50ZXIgbGFzdCA9IG9uIHRvcClcclxuICAgICAgICBjb25zdCBvcmRlciA9IFsuLi5hYm92ZSwgLi4uYmVsb3cucmV2ZXJzZSgpXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGkgb2Ygb3JkZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgY2ggPSBuZC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgY29uc3QgY29sID0gdGhpcy5nZXRDQyhjaCwgcFIsIGksIGluaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTGVmdCA9IGNoLnNpZGUgPT09IFwibGVmdFwiO1xyXG4gICAgICAgICAgICAvLyBBY2NvdW50IGZvciBib3JkZXIgd2lkdGggc28gY29ubmVjdGlvbnMgcmVhY2ggb3V0ZXIgZWRnZVxyXG4gICAgICAgICAgICBjb25zdCBwVmlzID0gdGhpcy5ub2RlVmlzKG5kKTtcclxuICAgICAgICAgICAgY29uc3QgcEJXID0gcFZpcy5iUyAhPT0gXCJub25lXCIgPyBwVmlzLmJXIDogMDtcclxuICAgICAgICAgICAgY29uc3QgY1ZpcyA9IHRoaXMubm9kZVZpcyhjaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNCVyA9IGNWaXMuYlMgIT09IFwibm9uZVwiID8gY1Zpcy5iVyA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHN4ID0gaXNMZWZ0XHJcbiAgICAgICAgICAgICAgICA/IG5kLnggLSBuZC53aWR0aCAvIDIgLSBwQldcclxuICAgICAgICAgICAgICAgIDogbmQueCArIG5kLndpZHRoIC8gMiArIHBCVztcclxuICAgICAgICAgICAgY29uc3QgZXggPSBpc0xlZnRcclxuICAgICAgICAgICAgICAgID8gY2gueCArIGNoLndpZHRoIC8gMiArIGNCV1xyXG4gICAgICAgICAgICAgICAgOiBjaC54IC0gY2gud2lkdGggLyAyIC0gY0JXO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICAgICAgXCJwYXRoXCIsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKFwiZFwiLCB0aGlzLmJQYXRoKHN4LCBuZC55LCBleCwgY2gueSkpO1xyXG4gICAgICAgICAgICBwLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBjb2wpO1xyXG4gICAgICAgICAgICBwLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCIsXHJcbiAgICAgICAgICAgICAgICBTdHJpbmcoY2guY29ubmVjdGlvbldpZHRoID8/IHRoaXMuc3R5bGUuY29ubmVjdGlvbldpZHRoKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRzPy5pc0RyYWdnaW5nICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5kcy5pc1Jvb3REcmFnICYmXHJcbiAgICAgICAgICAgICAgICAodGhpcy5kcyBhcyBDaGlsZERyYWcpLm5vZGVJZCA9PT0gY2guaWRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJvcGFjaXR5XCIsIFwiMC4xNVwiKTtcclxuICAgICAgICAgICAgdGhpcy5lZGdlc0cuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0VkZ2VzKFxyXG4gICAgICAgICAgICAgICAgY2gsXHJcbiAgICAgICAgICAgICAgICBjaC5jb25uZWN0aW9uQ29sb3IgPz9cclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdHlsZS5jb25uZWN0aW9uUmFpbmJvdyAmJiBwUiA/IGNvbCA6IGluaCksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcmF3Tm9kZXMobjogTWluZE5vZGVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3T25lKG4pO1xyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB0aGlzLmRyYXdOb2RlcyhjKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJhd09uZShuZDogTWluZE5vZGVEYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgXCJmb3JlaWduT2JqZWN0XCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmby5pZCA9IFwibW4tXCIgKyBuZC5pZDtcclxuICAgICAgICBjb25zdCB2ID0gdGhpcy5ub2RlVmlzKG5kKTtcclxuICAgICAgICBjb25zdCBiVyA9IHYuYlMgIT09IFwibm9uZVwiID8gdi5iVyA6IDA7XHJcbiAgICAgICAgY29uc3QgdmlzdWFsVyA9IG5kLndpZHRoICsgYlcgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpc3VhbEggPSBuZC5oZWlnaHQgKyBiVyAqIDI7XHJcbiAgICAgICAgY29uc3Qgc2VsRXggPSB0aGlzLmlzU2VsKG5kLmlkKSA/IHRoaXMuc3R5bGUuc2VsZWN0aW9uV2lkdGggKyA0IDogMDtcclxuICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyhuZC54IC0gdmlzdWFsVyAvIDIgLSBzZWxFeCkpO1xyXG4gICAgICAgIGZvLnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKG5kLnkgLSB2aXN1YWxIIC8gMiAtIHNlbEV4KSk7XHJcbiAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHZpc3VhbFcgKyBzZWxFeCAqIDIpKTtcclxuICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKHZpc3VhbEggKyBzZWxFeCAqIDIpKTtcclxuICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJvdmVyZmxvd1wiLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgLy8gb3ZlcmZsb3c6dmlzaWJsZSBzZXQgdmlhIFNWRyBhdHRyaWJ1dGUgYWJvdmVcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZHM/LmlzRHJhZ2dpbmcgJiZcclxuICAgICAgICAgICAgIXRoaXMuZHMuaXNSb290RHJhZyAmJlxyXG4gICAgICAgICAgICAodGhpcy5kcyBhcyBDaGlsZERyYWcpLm5vZGVJZCA9PT0gbmQuaWRcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIGZvLnRvZ2dsZUNsYXNzKFwibXotZHJhZy10cmFuc3BhcmVudFwiLCB0cnVlKTtcclxuICAgICAgICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB3cmFwLmFkZENsYXNzKFwibXotbm9kZS13cmFwXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmVkaXRJZCA9PT0gbmQuaWQpIHdyYXAuYXBwZW5kQ2hpbGQodGhpcy5ta1RBKG5kKSk7XHJcbiAgICAgICAgZWxzZSB3cmFwLmFwcGVuZENoaWxkKHRoaXMubWtEaXYobmQpKTtcclxuICAgICAgICBmby5hcHBlbmRDaGlsZCh3cmFwKTtcclxuICAgICAgICB0aGlzLm5vZGVzRy5hcHBlbmRDaGlsZChmbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBub2RlVmlzKG5kOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICBjb25zdCBpc1IgPSAhIW5kLmlzUm9vdDtcclxuICAgICAgICBjb25zdCBzbyA9IG5kLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgY29uc3QgYmcgPVxyXG4gICAgICAgICAgICBzby5iZ0NvbG9yID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCZ0NvbG9yIDogdGhpcy5zdHlsZS5ub2RlQmdDb2xvcik7XHJcbiAgICAgICAgY29uc3QgdGMgPVxyXG4gICAgICAgICAgICBzby50ZXh0Q29sb3IgPz9cclxuICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdFRleHRDb2xvciA6IHRoaXMuc3R5bGUubm9kZVRleHRDb2xvcik7XHJcbiAgICAgICAgY29uc3QgZnMgPVxyXG4gICAgICAgICAgICBzby5mb250U2l6ZSA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Rm9udFNpemUgOiB0aGlzLnN0eWxlLm5vZGVGb250U2l6ZSk7XHJcbiAgICAgICAgY29uc3QgZmYgPVxyXG4gICAgICAgICAgICBzby5mb250RmFtaWx5ID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RGb250RmFtaWx5IDogdGhpcy5zdHlsZS5ub2RlRm9udEZhbWlseSk7XHJcbiAgICAgICAgY29uc3QgYlMgPVxyXG4gICAgICAgICAgICBzby5ib3JkZXJTdHlsZSA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyU3R5bGUgOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJTdHlsZSk7XHJcbiAgICAgICAgY29uc3QgYlcgPVxyXG4gICAgICAgICAgICBzby5ib3JkZXJXaWR0aCA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyV2lkdGggOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJXaWR0aCk7XHJcbiAgICAgICAgbGV0IGJDID1cclxuICAgICAgICAgICAgc28uYm9yZGVyQ29sb3IgPz9cclxuICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEJvcmRlckNvbG9yIDogdGhpcy5zdHlsZS5ub2RlQm9yZGVyQ29sb3IpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5jb25uZWN0aW9uUmFpbmJvdyAmJlxyXG4gICAgICAgICAgICAhc28uYm9yZGVyQ29sb3IgJiZcclxuICAgICAgICAgICAgIWlzUiAmJlxyXG4gICAgICAgICAgICBuZC5jb25uZWN0aW9uQ29sb3JcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIGJDID0gbmQuY29ubmVjdGlvbkNvbG9yO1xyXG4gICAgICAgIGNvbnN0IHJhZCA9XHJcbiAgICAgICAgICAgIHNvLmJvcmRlclJhZGl1cyA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyUmFkaXVzIDogdGhpcy5zdHlsZS5ub2RlQm9yZGVyUmFkaXVzKTtcclxuICAgICAgICByZXR1cm4geyBpc1IsIGJnLCB0YywgZnMsIGZmLCBiUywgYlcsIGJDLCByYWQgfTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgbWtEaXYobmQ6IE1pbmROb2RlRGF0YSk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IHYgPSB0aGlzLm5vZGVWaXMobmQpO1xyXG4gICAgICAgIGNvbnN0IHNlbCA9IHRoaXMuaXNTZWwobmQuaWQpO1xyXG4gICAgICAgIGNvbnN0IHRhID0gdGhpcy5zdHlsZS50ZXh0QWxpZ247XHJcbiAgICAgICAgY29uc3QgcGFkWCA9IHRoaXMuc3R5bGUubm9kZVBhZFg7XHJcbiAgICAgICAgY29uc3QgbGggPSB0aGlzLnN0eWxlLm5vZGVMaW5lSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IG9mZiA9IHRoaXMuc3R5bGUuc2VsZWN0aW9uT3V0bGluZU9mZnNldDtcclxuICAgICAgICBjb25zdCBiVyA9IHYuYlMgIT09IFwibm9uZVwiID8gdi5iVyA6IDA7XHJcbiAgICAgICAgY29uc3QgdmlzdWFsVyA9IG5kLndpZHRoICsgYlcgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpc3VhbEggPSBuZC5oZWlnaHQgKyBiVyAqIDI7XHJcbiAgICAgICAgY29uc3QgYm9yZGVyQ1NTID1cclxuICAgICAgICAgICAgdi5iUyAhPT0gXCJub25lXCJcclxuICAgICAgICAgICAgICAgID8gYGJvcmRlcjoke3YuYld9cHggJHt2LmJTfSAke3YuYkN9O2BcclxuICAgICAgICAgICAgICAgIDogXCJib3JkZXI6bm9uZTtcIjtcclxuICAgICAgICBjb25zdCBzZWxDU1MgPSBzZWxcclxuICAgICAgICAgICAgPyBgb3V0bGluZToke3RoaXMuc3R5bGUuc2VsZWN0aW9uV2lkdGh9cHggc29saWQgJHt0aGlzLnN0eWxlLnNlbGVjdGlvbkNvbG9yfTtvdXRsaW5lLW9mZnNldDoke29mZn1weDtgXHJcbiAgICAgICAgICAgIDogXCJcIjtcclxuICAgICAgICBkaXYuYWRkQ2xhc3MoXCJtei1ub2RlLWRpdlwiKTtcclxuICAgICAgICBjb25zdCBkcyA9IGRpdi5zdHlsZTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotd1wiLCB2aXN1YWxXICsgXCJweFwiKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotaFwiLCB2aXN1YWxIICsgXCJweFwiKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcclxuICAgICAgICAgICAgXCItLW16LWpjXCIsXHJcbiAgICAgICAgICAgIHRhID09PSBcImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgPyBcImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgOiB0YSA9PT0gXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgID8gXCJmbGV4LWVuZFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJjZW50ZXJcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1yYWRcIiwgdi5yYWQgKyBcInB4XCIpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1md1wiLCBTdHJpbmcodi5pc1IgPyA3MDAgOiA1MDApKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotZnNcIiwgdi5mcyArIFwicHhcIik7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LWZmXCIsIHYuZmYpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei10YVwiLCB0YSk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LWxoXCIsIFN0cmluZyhsaCkpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1iZ1wiLCB2LmJnKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotdGNcIiwgdi50Yyk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LXBhZFwiLCBgNnB4ICR7cGFkWH1weGApO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1jdXJzb3JcIiwgdi5pc1IgPyBcIm1vdmVcIiA6IFwiZ3JhYlwiKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcclxuICAgICAgICAgICAgXCItLW16LWJvcmRlclwiLFxyXG4gICAgICAgICAgICB2LmJTICE9PSBcIm5vbmVcIiA/IGAke3YuYld9cHggJHt2LmJTfSAke3YuYkN9YCA6IFwibm9uZVwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXHJcbiAgICAgICAgICAgIFwiLS1tei1vdXRsaW5lXCIsXHJcbiAgICAgICAgICAgIHNlbFxyXG4gICAgICAgICAgICAgICAgPyBgJHt0aGlzLnN0eWxlLnNlbGVjdGlvbldpZHRofXB4IHNvbGlkICR7dGhpcy5zdHlsZS5zZWxlY3Rpb25Db2xvcn1gXHJcbiAgICAgICAgICAgICAgICA6IFwibm9uZVwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LW91dGxpbmUtb2ZmXCIsIHNlbCA/IG9mZiArIFwicHhcIiA6IFwiMFwiKTtcclxuICAgICAgICBkaXYuaW5uZXJUZXh0ID0gbmQudGV4dDtcclxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGFjZURvd24pIHJldHVybjtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5jYz8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0RibCA9IHRoaXMubGNuaWQgPT09IG5kLmlkICYmIG5vdyAtIHRoaXMubGN0IDwgMzAwO1xyXG4gICAgICAgICAgICB0aGlzLmxjdCA9IG5vdztcclxuICAgICAgICAgICAgdGhpcy5sY25pZCA9IG5kLmlkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21taXRFZGl0ICYmIHRoaXMuZWRpdElkICE9PSBuZC5pZCkgdGhpcy5jb21taXRFZGl0KCk7XHJcbiAgICAgICAgICAgIGlmIChpc0RibCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0SWQgPSBuZC5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dTZWwobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlTZWwuaGFzKG5kLmlkKSkgdGhpcy5zZWwxKG5kLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgcmMgPSB0aGlzLmNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBseCA9IChlLmNsaWVudFggLSByYy5sZWZ0IC0gdGhpcy5wYW5YKSAvIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgIGx5ID0gKGUuY2xpZW50WSAtIHJjLnRvcCAtIHRoaXMucGFuWSkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIGlmIChuZC5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlZXJzOiB7IGlkOiBzdHJpbmc7IHN4OiBudW1iZXI7IHN5OiBudW1iZXIgfVtdID0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aVNlbC5zaXplID4gMSlcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG1pZCBvZiB0aGlzLm11bHRpU2VsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWQgPT09IG5kLmlkKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW4gPSB0aGlzLmZBbGwobWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1uPy5pc1Jvb3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZWVycy5wdXNoKHsgaWQ6IG1pZCwgc3g6IG1uLngsIHN5OiBtbi55IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSb290RHJhZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IG5kLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WDogbHgsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRZOiBseSxcclxuICAgICAgICAgICAgICAgICAgICBuc3g6IG5kLngsXHJcbiAgICAgICAgICAgICAgICAgICAgbnN5OiBuZC55LFxyXG4gICAgICAgICAgICAgICAgICAgIHBlZXJzOiBwZWVycy5sZW5ndGggPyBwZWVycyA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRHJhZ2dpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUm9vdERyYWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbmQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRYOiBseCxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFk6IGx5LFxyXG4gICAgICAgICAgICAgICAgICAgIGdob3N0RWw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yRWw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgc25hcDogSlNPTi5zdHJpbmdpZnkodGhpcy5yb290cyksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vZGVDdHgoZSwgbmQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBta1RBKG5kOiBNaW5kTm9kZURhdGEpOiBIVE1MVGV4dEFyZWFFbGVtZW50IHtcclxuICAgICAgICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgICAgICB0YS52YWx1ZSA9IG5kLnRleHQ7XHJcbiAgICAgICAgY29uc3QgdiA9IHRoaXMubm9kZVZpcyhuZCk7XHJcbiAgICAgICAgY29uc3QgdEFsaWduID0gdGhpcy5zdHlsZS50ZXh0QWxpZ247XHJcbiAgICAgICAgY29uc3QgZWRpdE9DID0gdGhpcy5zdHlsZS5lZGl0T3V0bGluZUNvbG9yO1xyXG4gICAgICAgIGNvbnN0IHBhZFggPSB0aGlzLnN0eWxlLm5vZGVQYWRYO1xyXG4gICAgICAgIGNvbnN0IGxoID0gdGhpcy5zdHlsZS5ub2RlTGluZUhlaWdodDtcclxuICAgICAgICBjb25zdCBvZmYgPSB0aGlzLnN0eWxlLnNlbGVjdGlvbk91dGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgY29uc3QgYlcgPSB2LmJTICE9PSBcIm5vbmVcIiA/IHYuYlcgOiAwO1xyXG4gICAgICAgIGNvbnN0IHZpc3VhbFcgPSBuZC53aWR0aCArIGJXICogMjtcclxuICAgICAgICBjb25zdCB2aXN1YWxIID0gbmQuaGVpZ2h0ICsgYlcgKiAyO1xyXG4gICAgICAgIGNvbnN0IGJvcmRlckNTUyA9XHJcbiAgICAgICAgICAgIHYuYlMgIT09IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICA/IGBib3JkZXI6JHt2LmJXfXB4ICR7di5iU30gJHt2LmJDfTtgXHJcbiAgICAgICAgICAgICAgICA6IFwiYm9yZGVyOm5vbmU7XCI7XHJcbiAgICAgICAgY29uc3QgZWRpdE9XID0gdGhpcy5zdHlsZS5lZGl0T3V0bGluZVdpZHRoO1xyXG4gICAgICAgIGNvbnN0IGVkaXRDU1MgPSBgb3V0bGluZToke2VkaXRPV31weCBzb2xpZCAke2VkaXRPQ307b3V0bGluZS1vZmZzZXQ6JHtvZmZ9cHg7dHJhbnNpdGlvbjpub25lO2FuaW1hdGlvbjpub25lO2A7XHJcbiAgICAgICAgdGEuYWRkQ2xhc3MoXCJtei1ub2RlLXRhXCIpO1xyXG4gICAgICAgIGNvbnN0IHRzID0gdGEuc3R5bGU7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LXdcIiwgdmlzdWFsVyArIFwicHhcIik7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LWhcIiwgdmlzdWFsSCArIFwicHhcIik7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LXJhZFwiLCB2LnJhZCArIFwicHhcIik7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LWZ3XCIsIFN0cmluZyh2LmlzUiA/IDcwMCA6IDUwMCkpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1mc1wiLCB2LmZzICsgXCJweFwiKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotZmZcIiwgdi5mZik7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LXRhXCIsIHRBbGlnbik7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LWxoXCIsIFN0cmluZyhsaCkpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1iZ1wiLCB2LmJnKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotdGNcIiwgdi50Yyk7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LXBhZFwiLCBgNnB4ICR7cGFkWH1weGApO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFxyXG4gICAgICAgICAgICBcIi0tbXotYm9yZGVyXCIsXHJcbiAgICAgICAgICAgIHYuYlMgIT09IFwibm9uZVwiID8gYCR7di5iV31weCAke3YuYlN9ICR7di5iQ31gIDogXCJub25lXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotZWRpdC1vdXRsaW5lXCIsIGAke2VkaXRPV31weCBzb2xpZCAke2VkaXRPQ31gKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotZWRpdC1vdXRsaW5lLW9mZlwiLCBvZmYgKyBcInB4XCIpO1xyXG4gICAgICAgIHRhLmFkZENsYXNzKFwibXotbm9kZS10YVwiKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotc2VsLWJnXCIsIGVkaXRPQyArIFwiNDBcIik7XHJcbiAgICAgICAgdGEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XHJcbiAgICAgICAgLy8gRklYOiBpbnB1dCBoYW5kbGVyIFx1MjAxNCByZWNhbGMgc2l6ZSBib3RoIGdyb3cgQU5EIHNocmlua1xyXG4gICAgICAgIHRhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR4dCA9IHRhLnZhbHVlIHx8IFwiIFwiO1xyXG4gICAgICAgICAgICBjb25zdCBudyA9IHRoaXMuY2FsY1codHh0LCAhIW5kLmlzUm9vdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5oID0gdGhpcy5jYWxjSCh0eHQsICEhbmQuaXNSb290KTtcclxuICAgICAgICAgICAgaWYgKG53ICE9PSBuZC53aWR0aCB8fCBuaCAhPT0gbmQuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZC53aWR0aCA9IG53O1xyXG4gICAgICAgICAgICAgICAgbmQuaGVpZ2h0ID0gbmg7XHJcbiAgICAgICAgICAgICAgICB0YS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbXotd1wiLCBuZC53aWR0aCArIGJXICogMiArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICB0YS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbXotaFwiLCBuZC5oZWlnaHQgKyBiVyAqIDIgKyBcInB4XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb2Z0UmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxpdmVUQSA9IHRhO1xyXG4gICAgICAgIGNvbnN0IHNhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVkaXRJZCAhPT0gbmQuaWQpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgdHh0ID0gdGEudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChuZC50ZXh0ICE9PSB0eHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICAgICAgICAgIG5kLnRleHQgPSB0eHQ7XHJcbiAgICAgICAgICAgICAgICBuZC53aWR0aCA9IHRoaXMuY2FsY1codHh0IHx8IFwiIFwiLCAhIW5kLmlzUm9vdCk7XHJcbiAgICAgICAgICAgICAgICBuZC5oZWlnaHQgPSB0aGlzLmNhbGNIKHR4dCB8fCBcIiBcIiwgISFuZC5pc1Jvb3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jb21taXRFZGl0ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5saXZlVEEgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb21taXRFZGl0ID0gc2F2ZTtcclxuICAgICAgICB0YS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBlLmtleSA9PT0gXCJFbnRlclwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWUuc2hpZnRLZXkgJiZcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLmxpbmVCcmVhaylcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIlRhYlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5zZXJ0IHRhYiBhdCBjdXJzb3IgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzID0gdGEuc2VsZWN0aW9uU3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IHRhLnNlbGVjdGlvbkVuZDtcclxuICAgICAgICAgICAgICAgICAgICB0YS52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhLnZhbHVlLnN1YnN0cmluZygwLCBzKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YS52YWx1ZS5zdWJzdHJpbmcoZW5kKTtcclxuICAgICAgICAgICAgICAgICAgICB0YS5zZWxlY3Rpb25TdGFydCA9IHRhLnNlbGVjdGlvbkVuZCA9IHMgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQ3RybCtVcCA9IEhvbWUsIEN0cmwrRG93biA9IEVuZCwgQ3RybCtTaGlmdCtVcCA9IFNoaWZ0K0hvbWUsIEN0cmwrU2hpZnQrRG93biA9IFNoaWZ0K0VuZFxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmIGUua2V5ID09PSBcIkFycm93VXBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0YS5zZWxlY3Rpb25TdGFydCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB0YS5zZWxlY3Rpb25FbmQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgJiYgZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVuID0gdGEudmFsdWUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhLnNlbGVjdGlvbkVuZCA9IGxlbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHRhLnNlbGVjdGlvblN0YXJ0ID0gbGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRhLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGEuc2VsZWN0KCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlRk8oKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsID0gdGhpcy5pc1NlbChuLmlkKTtcclxuICAgICAgICAgICAgY29uc3QgZXggPSBzZWwgPyB0aGlzLnN0eWxlLnNlbGVjdGlvbldpZHRoICsgNCA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG52ID0gdGhpcy5ub2RlVmlzKG4pO1xyXG4gICAgICAgICAgICBjb25zdCBiVyA9IG52LmJTICE9PSBcIm5vbmVcIiA/IG52LmJXIDogMDtcclxuICAgICAgICAgICAgY29uc3QgdncgPSBuLndpZHRoICsgYlcgKiAyO1xyXG4gICAgICAgICAgICBjb25zdCB2aCA9IG4uaGVpZ2h0ICsgYlcgKiAyO1xyXG4gICAgICAgICAgICBjb25zdCBmbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW4tXCIgKyBuLmlkKTtcclxuICAgICAgICAgICAgaWYgKGZvKSB7XHJcbiAgICAgICAgICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyhuLnggLSB2dyAvIDIgLSBleCkpO1xyXG4gICAgICAgICAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcobi55IC0gdmggLyAyIC0gZXgpKTtcclxuICAgICAgICAgICAgICAgIGZvLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh2dyArIGV4ICogMikpO1xyXG4gICAgICAgICAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyh2aCArIGV4ICogMikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB2KGMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHYocik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNsb3NlTWVudSgpIHtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVNZW51KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTWVudS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU1lbnUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgc2hvd01lbnUobWVudTogTWVudSwgZTogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVNZW51ID0gbWVudTtcclxuICAgICAgICBtZW51LnNob3dBdE1vdXNlRXZlbnQoZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNob3dDYW52YXNDdHgoZTogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQb3AoKTtcclxuICAgICAgICBjb25zdCBtZW51ID0gbmV3IE1lbnUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc011bHRpKCkpIHtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdChcImN0eC5iYXRjaERlbFwiKSArIFwiIChcIiArIHRoaXMuYWxsU2VsKCkuc2l6ZSArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0SWNvbihcInRyYXNoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy5iYXRjaERlbCgpKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LmVkaXRTdHlsZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0SWNvbihcInBhbGV0dGVcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnNob3dOb2RlU3R5bGVFZGl0b3IoZSkpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4Lm5ld1Jvb3RcIikpXHJcbiAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInBsdXMtY2lyY2xlXCIpXHJcbiAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRSb290KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5nZXRSb290TmFtZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5jbGllbnRYIC0gci5sZWZ0IC0gdGhpcy5wYW5YKSAvIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGUuY2xpZW50WSAtIHIudG9wIC0gdGhpcy5wYW5ZKSAvIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xyXG4gICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHgudW5kb1wiKSlcclxuICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwidW5kb1wiKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy51bmRvKCkpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5yZWRvXCIpKVxyXG4gICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJyZWRvXCIpXHJcbiAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnJlZG8oKSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xyXG4gICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguZ2xvYmFsU3R5bGVcIikpXHJcbiAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInBhbGV0dGVcIilcclxuICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuc2hvd1N0eWxlTW9kYWwoKSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNob3dNZW51KG1lbnUsIGUpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzaG93Tm9kZUN0eChlOiBNb3VzZUV2ZW50LCBuZDogTWluZE5vZGVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcCgpO1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBuZXcgTWVudSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGkoKSkge1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0KFwiY3R4LmJhdGNoRGVsXCIpICsgXCIgKFwiICsgdGhpcy5hbGxTZWwoKS5zaXplICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwidHJhc2hcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLmJhdGNoRGVsKCkpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguZWRpdFN0eWxlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicGFsZXR0ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuc2hvd05vZGVTdHlsZUVkaXRvcihlKSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LmVkaXRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJwZW5jaWxcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdElkID0gbmQuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5zdHlsZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInBhbGV0dGVcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnNob3dOb2RlU3R5bGVFZGl0b3IoZSkpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguY29weVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcImNvcHlcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29weU5vZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguY3V0XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwic2Npc3NvcnNcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29weU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZClcclxuICAgICAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LnBhc3RlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcImNsaXBib2FyZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXN0ZU5vZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5jaGlsZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInBsdXNcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGROb2RlKG5kLmlzUm9vdCA/IFwicmlnaHRcIiA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChuZC5pc1Jvb3QpXHJcbiAgICAgICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5sZWZ0Q2hpbGRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwiYXJyb3ctbGVmdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRMZWZ0Q2hpbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoIW5kLmlzUm9vdClcclxuICAgICAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LnNpYmxpbmdcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicGx1c1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTaWJsaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LmRlbGV0ZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInRyYXNoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbE5vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93TWVudShtZW51LCBlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYmF0Y2hEZWwoKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWQgb2YgdGhpcy5hbGxTZWwoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb290cy5zb21lKChyKSA9PiByLmlkID09PSBpZCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3RzID0gdGhpcy5yb290cy5maWx0ZXIoKHIpID0+IHIuaWQgIT09IGlkKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnJlbUFsbChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xyU2VsKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGFydEJveChseDogbnVtYmVyLCBseTogbnVtYmVyLCBzaGlmdDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuYm94U2VsID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJveFNoaWZ0ID0gc2hpZnQ7XHJcbiAgICAgICAgdGhpcy5ic3ggPSBseDtcclxuICAgICAgICB0aGlzLmJzeSA9IGx5O1xyXG4gICAgICAgIHRoaXMuYmN4ID0gbHg7XHJcbiAgICAgICAgdGhpcy5iY3kgPSBseTtcclxuICAgICAgICB0aGlzLmJveEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgIFwicmVjdFwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmdiYSg1OSwxMzAsMjQ2LDAuMDYpXCIpO1xyXG4gICAgICAgIHRoaXMuYm94RWwuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwicmdiYSg1OSwxMzAsMjQ2LDAuNClcIik7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxXCIpO1xyXG4gICAgICAgIHRoaXMuYm94RWwuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcIjYgM1wiKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiNFwiKTtcclxuICAgICAgICAvLyBib3gtc2VsZWN0IHBvaW50ZXItZXZlbnRzIGhhbmRsZWQgYnkgQ1NTXHJcbiAgICAgICAgdGhpcy5vdmVybGF5Ry5hcHBlbmRDaGlsZCh0aGlzLmJveEVsKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkQm94KGx4OiBudW1iZXIsIGx5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmJjeCA9IGx4O1xyXG4gICAgICAgIHRoaXMuYmN5ID0gbHk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJveEVsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyhNYXRoLm1pbih0aGlzLmJzeCwgbHgpKSk7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyhNYXRoLm1pbih0aGlzLmJzeSwgbHkpKSk7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcoTWF0aC5hYnMobHggLSB0aGlzLmJzeCkpKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoTWF0aC5hYnMobHkgLSB0aGlzLmJzeSkpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZW5kQm94KF9lOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ib3hTZWwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJveEVsPy5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmJveEVsID0gbnVsbDtcclxuICAgICAgICBjb25zdCBieDEgPSBNYXRoLm1pbih0aGlzLmJzeCwgdGhpcy5iY3gpLFxyXG4gICAgICAgICAgICBieTEgPSBNYXRoLm1pbih0aGlzLmJzeSwgdGhpcy5iY3kpLFxyXG4gICAgICAgICAgICBieDIgPSBNYXRoLm1heCh0aGlzLmJzeCwgdGhpcy5iY3gpLFxyXG4gICAgICAgICAgICBieTIgPSBNYXRoLm1heCh0aGlzLmJzeSwgdGhpcy5iY3kpO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhieDIgLSBieDEpIDwgNSAmJiBNYXRoLmFicyhieTIgLSBieTEpIDwgNSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYm94U2hpZnQpIHRoaXMuY2xyU2VsKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWRzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICAgICAgY29uc3QgY2hrID0gKG46IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBubCA9IG4ueCAtIG4ud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgbnIgPSBuLnggKyBuLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIG50ID0gbi55IC0gbi5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgICAgbmIgPSBuLnkgKyBuLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIGlmIChuciA+PSBieDEgJiYgbmwgPD0gYngyICYmIG5iID49IGJ5MSAmJiBudCA8PSBieTIpIGlkcy5hZGQobi5pZCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSBjaGsoYyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgY2hrKHIpO1xyXG4gICAgICAgIGlmICh0aGlzLmJveFNoaWZ0KSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB0aGlzLnRvZ1NlbChpZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tdWx0aVNlbC5jbGVhcigpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykgdGhpcy5tdWx0aVNlbC5hZGQoaWQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tdWx0aVNlbC5zaXplID09PSAxKSB0aGlzLnNlbDEoWy4uLnRoaXMubXVsdGlTZWxdWzBdKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5tdWx0aVNlbC5zaXplID4gMSkgdGhpcy5zZWxJZCA9IFsuLi50aGlzLm11bHRpU2VsXVswXTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmNsclNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc0Rlc2ModGd0OiBNaW5kTm9kZURhdGEsIHBpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZkFsbChwaWQpO1xyXG4gICAgICAgIHJldHVybiBkID8gdGhpcy5mTih0Z3QuaWQsIGQpICE9PSBudWxsIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRldFRndChcclxuICAgICAgICBsZWZ0WDogbnVtYmVyLFxyXG4gICAgICAgIHJpZ2h0WDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlcixcclxuICAgICAgICBkaWQ6IHN0cmluZyxcclxuICAgICk6IHsgaWQ6IHN0cmluZzsgem9uZTogXCJjaGlsZFwiIHwgXCJiZWZvcmVcIiB8IFwiYWZ0ZXJcIiB9IHwgbnVsbCB7XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHtcclxuICAgICAgICAgICAgY29uc3QgaCA9IHRoaXMuX2R0KGxlZnRYLCByaWdodFgsIHksIHIsIGRpZCk7XHJcbiAgICAgICAgICAgIGlmIChoKSByZXR1cm4gaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9kdChcclxuICAgICAgICBsZWZ0WDogbnVtYmVyLFxyXG4gICAgICAgIHJpZ2h0WDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlcixcclxuICAgICAgICBuOiBNaW5kTm9kZURhdGEsXHJcbiAgICAgICAgZGlkOiBzdHJpbmcsXHJcbiAgICApOiB7IGlkOiBzdHJpbmc7IHpvbmU6IFwiY2hpbGRcIiB8IFwiYmVmb3JlXCIgfCBcImFmdGVyXCIgfSB8IG51bGwge1xyXG4gICAgICAgIC8vIEJsb2NrIGRyb3Agb250byBhbnkgc2VsZWN0ZWQgbm9kZSBvciBpdHMgZGVzY2VuZGFudHNcclxuICAgICAgICBjb25zdCBzZWxJZHMgPSB0aGlzLmFsbFNlbCgpO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2lkIG9mIHNlbElkcykge1xyXG4gICAgICAgICAgICBpZiAobi5pZCA9PT0gc2lkIHx8IHRoaXMuaXNEZXNjKG4sIHNpZCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobi5pZCA9PT0gZGlkIHx8IHRoaXMuaXNEZXNjKG4sIGRpZCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIC8vIFVzZSByaWdodCBlZGdlIGZvciBsZWZ0LXNpZGUgbm9kZXMsIGxlZnQgZWRnZSBmb3IgcmlnaHQtc2lkZSBub2Rlc1xyXG4gICAgICAgIGNvbnN0IHggPSBsZWZ0WDtcclxuICAgICAgICBjb25zdCBwYWQgPSAyNTtcclxuICAgICAgICBjb25zdCBsID0gbi54IC0gbi53aWR0aCAvIDIgLSBwYWQsXHJcbiAgICAgICAgICAgIHIgPSBuLnggKyBuLndpZHRoIC8gMiArIHBhZCxcclxuICAgICAgICAgICAgdG9wID0gbi55IC0gbi5oZWlnaHQgLyAyIC0gcGFkLFxyXG4gICAgICAgICAgICBiID0gbi55ICsgbi5oZWlnaHQgLyAyICsgcGFkO1xyXG4gICAgICAgIGlmICh4ID49IGwgJiYgeCA8PSByICYmIHkgPj0gdG9wICYmIHkgPD0gYikge1xyXG4gICAgICAgICAgICBsZXQgejogXCJjaGlsZFwiIHwgXCJiZWZvcmVcIiB8IFwiYWZ0ZXJcIiA9IFwiY2hpbGRcIjtcclxuICAgICAgICAgICAgaWYgKCFuLmlzUm9vdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaCA9IG4uaGVpZ2h0ICsgcGFkICogMixcclxuICAgICAgICAgICAgICAgICAgICByeSA9IHkgLSB0b3A7XHJcbiAgICAgICAgICAgICAgICBpZiAocnkgPCBoICogMC40KSB6ID0gXCJiZWZvcmVcIjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJ5ID4gaCAqIDAuNikgeiA9IFwiYWZ0ZXJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4geyBpZDogbi5pZCwgem9uZTogeiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjb25zdCBoID0gdGhpcy5fZHQobGVmdFgsIHJpZ2h0WCwgeSwgYywgZGlkKTtcclxuICAgICAgICAgICAgaWYgKGgpIHJldHVybiBoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVtVHJlZShpZDogc3RyaW5nLCBuOiBNaW5kTm9kZURhdGEpOiBNaW5kTm9kZURhdGEgfCBudWxsIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG4uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG4uY2hpbGRyZW5baV0uaWQgPT09IGlkKSByZXR1cm4gbi5jaGlsZHJlbi5zcGxpY2UoaSwgMSlbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLnJlbVRyZWUoaWQsIG4uY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICBpZiAoZikgcmV0dXJuIGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW1BbGwoaWQ6IHN0cmluZyk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLnJlbVRyZWUoaWQsIHIpO1xyXG4gICAgICAgICAgICBpZiAoZikgcmV0dXJuIGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpbnNUcmVlKFxyXG4gICAgICAgIG5pOiBNaW5kTm9kZURhdGEsXHJcbiAgICAgICAgdGlkOiBzdHJpbmcsXHJcbiAgICAgICAgem9uZTogXCJjaGlsZFwiIHwgXCJiZWZvcmVcIiB8IFwiYWZ0ZXJcIixcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHRuID0gdGhpcy5mQWxsKHRpZCk7XHJcbiAgICAgICAgaWYgKCF0bikgcmV0dXJuO1xyXG4gICAgICAgIC8vIEluaGVyaXQgc2lkZSBmcm9tIHRhcmdldFxyXG4gICAgICAgIGNvbnN0IHNldFNpZGUgPSAobjogTWluZE5vZGVEYXRhLCBzPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCIpID0+IHtcclxuICAgICAgICAgICAgbi5zaWRlID0gcztcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHNldFNpZGUoYywgcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoem9uZSA9PT0gXCJjaGlsZFwiIHx8IHRuLmlzUm9vdCkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTaWRlID0gdG4uaXNSb290ID8gbmkuc2lkZSA6IHRuLnNpZGU7XHJcbiAgICAgICAgICAgIHNldFNpZGUobmksIHRhcmdldFNpZGUpO1xyXG4gICAgICAgICAgICB0bi5jaGlsZHJlbi5wdXNoKG5pKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTaWRlKG5pLCB0bi5zaWRlKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5mUCh0aWQsIHIpO1xyXG4gICAgICAgICAgICBpZiAocCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gcC5jaGlsZHJlbi5maW5kSW5kZXgoKGMpID0+IGMuaWQgPT09IHRpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHAuY2hpbGRyZW4uc3BsaWNlKHpvbmUgPT09IFwiYmVmb3JlXCIgPyBpZHggOiBpZHggKyAxLCAwLCBuaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmTihpZDogc3RyaW5nLCBuOiBNaW5kTm9kZURhdGEpOiBNaW5kTm9kZURhdGEgfCBudWxsIHtcclxuICAgICAgICBpZiAobi5pZCA9PT0gaWQpIHJldHVybiBuO1xyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLmZOKGlkLCBjKTtcclxuICAgICAgICAgICAgaWYgKGYpIHJldHVybiBmO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZlAoY2lkOiBzdHJpbmcsIG46IE1pbmROb2RlRGF0YSk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGlmIChjLmlkID09PSBjaWQpIHJldHVybiBuO1xyXG4gICAgICAgICAgICBjb25zdCBmID0gdGhpcy5mUChjaWQsIGMpO1xyXG4gICAgICAgICAgICBpZiAoZikgcmV0dXJuIGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmUEEoY2lkOiBzdHJpbmcpOiBNaW5kTm9kZURhdGEgfCBudWxsIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5mUChjaWQsIHIpO1xyXG4gICAgICAgICAgICBpZiAocCkgcmV0dXJuIHA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBiaW5kRXZ0cygpIHtcclxuICAgICAgICBjb25zdCBjYyA9IHRoaXMuY2M7XHJcbiAgICAgICAgY2MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0Z3QgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodGd0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZXh0YXJlYVwiKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNjLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcclxuICAgICAgICAgICAgLy8gRklYOiBpZiBzcGFjZSBoZWxkLCBBTFdBWVMgc3RhcnQgY2FudmFzIGRyYWcgcmVnYXJkbGVzcyBvZiBjbGljayB0YXJnZXRcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3BhY2VEb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdDdiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNteCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc215ID0gZS5jbGllbnRZO1xyXG4gICAgICAgICAgICAgICAgY2MudG9nZ2xlQ2xhc3MoXCJtei1jdXJzb3ItZ3JhYmJpbmdcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGd0ID09PSB0aGlzLnN2Z0VsIHx8XHJcbiAgICAgICAgICAgICAgICB0Z3QgPT09IGNjIHx8XHJcbiAgICAgICAgICAgICAgICB0Z3QudGFnTmFtZSA9PT0gXCJzdmdcIiB8fFxyXG4gICAgICAgICAgICAgICAgdGd0LnRhZ05hbWUgPT09IFwiZ1wiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbWl0RWRpdCkgdGhpcy5jb21taXRFZGl0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Qm94KFxyXG4gICAgICAgICAgICAgICAgICAgIChlLmNsaWVudFggLSBjYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gdGhpcy5wYW5YKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgICAgICAoZS5jbGllbnRZIC0gY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gdGhpcy5wYW5ZKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgICAgICBlLnNoaWZ0S2V5LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0Z3QgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0Z3QgPT09IHRoaXMuc3ZnRWwgfHxcclxuICAgICAgICAgICAgICAgIHRndCA9PT0gY2MgfHxcclxuICAgICAgICAgICAgICAgIFtcInN2Z1wiLCBcImdcIiwgXCJwYXRoXCJdLmluY2x1ZGVzKHRndC50YWdOYW1lKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NhbnZhc0N0eChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmMgPSBjYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgbHggPSAoZS5jbGllbnRYIC0gcmMubGVmdCAtIHRoaXMucGFuWCkgLyB0aGlzLnpvb20sXHJcbiAgICAgICAgICAgICAgICBseSA9IChlLmNsaWVudFkgLSByYy50b3AgLSB0aGlzLnBhblkpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib3hTZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkQm94KGx4LCBseSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gbHggLSB0aGlzLmRzLnN0YXJ0WCxcclxuICAgICAgICAgICAgICAgICAgICBkeSA9IGx5IC0gdGhpcy5kcy5zdGFydFk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZHMuaXNEcmFnZ2luZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChNYXRoLmFicyhkeCkgPiA1IHx8IE1hdGguYWJzKGR5KSA+IDUpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kcy5pc1Jvb3REcmFnKSB0aGlzLnJvb3RERihkeCwgZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5jaGlsZERGKGx4LCBseSwgZHgsIGR5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnQ3YpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuWCArPSBlLmNsaWVudFggLSB0aGlzLnNteDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuWSArPSBlLmNsaWVudFkgLSB0aGlzLnNteTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc214ID0gZS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbXkgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZFR4KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcIndoZWVsXCIsXHJcbiAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrYiA9IHRoaXMua2I7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2UgPSBlLmRlbHRhWSA+IDAgPyAwLjkgOiAxLjE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgemYgPSBrYi5pbnZlcnRab29tID8gMSAvIGJhc2UgOiBiYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG56ID0gTWF0aC5tYXgoMC4xLCBNYXRoLm1pbih0aGlzLnpvb20gKiB6ZiwgMykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBjYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXggPSBlLmNsaWVudFggLSByLmxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15ID0gZS5jbGllbnRZIC0gci50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5YID0gbXggLSAobXggLSB0aGlzLnBhblgpICogKG56IC8gdGhpcy56b29tKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhblkgPSBteSAtIChteSAtIHRoaXMucGFuWSkgKiAobnogLyB0aGlzLnpvb20pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuem9vbSA9IG56O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IGUuZGVsdGFYIHx8IGUuZGVsdGFZO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuWCAtPSBrYi5pbnZlcnRTY3JvbGxYID8gLWQgOiBkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhblggLT0ga2IuaW52ZXJ0U2Nyb2xsWCA/IC1lLmRlbHRhWCA6IGUuZGVsdGFYO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuWSAtPSBrYi5pbnZlcnRTY3JvbGxZID8gLWUuZGVsdGFZIDogZS5kZWx0YVk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZFR4KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgcGFzc2l2ZTogZmFsc2UgfSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByb290REYoZHg6IG51bWJlciwgZHk6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5kcz8uaXNSb290RHJhZykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHJuID0gdGhpcy5mQWxsKHRoaXMuZHMubm9kZUlkKTtcclxuICAgICAgICBpZiAoIXJuKSByZXR1cm47XHJcbiAgICAgICAgcm4ueCA9IHRoaXMuZHMubnN4ICsgZHg7XHJcbiAgICAgICAgcm4ueSA9IHRoaXMuZHMubnN5ICsgZHk7XHJcbiAgICAgICAgdGhpcy5kb0xheW91dChybik7XHJcbiAgICAgICAgaWYgKCh0aGlzLmRzIGFzIFJvb3REcmFnKS5wZWVycylcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwIG9mICh0aGlzLmRzIGFzIFJvb3REcmFnKS5wZWVycyEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBuID0gdGhpcy5mQWxsKHAuaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG4ueCA9IHAuc3ggKyBkeDtcclxuICAgICAgICAgICAgICAgICAgICBwbi55ID0gcC5zeSArIGR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9MYXlvdXQocG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lZGdlc0cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kcmF3RWRnZXMocik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGTygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjaGlsZERGKGx4OiBudW1iZXIsIGx5OiBudW1iZXIsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkID0gdGhpcy5kcyBhcyBDaGlsZERyYWc7XHJcbiAgICAgICAgaWYgKCFkLmdob3N0RWwpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW4tXCIgKyBkLm5vZGVJZCk7XHJcbiAgICAgICAgICAgIGlmIChvcmlnKSBvcmlnLnRvZ2dsZUNsYXNzKFwibXotZHJhZy10cmFuc3BhcmVudFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgZG4gPSB0aGlzLmZBbGwoZC5ub2RlSWQpO1xyXG4gICAgICAgICAgICBpZiAoZG4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvcmVpZ25PYmplY3RcIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBnaG9zdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcoZG4ud2lkdGgpKTtcclxuICAgICAgICAgICAgICAgIGdob3N0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoZG4uaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICBnaG9zdC5zZXRBdHRyaWJ1dGUoXCJvdmVyZmxvd1wiLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBnaG9zdCBvcGFjaXR5IGhhbmRsZWQgYnkgbXotZHJhZy1naG9zdCBjbGFzc1xyXG4gICAgICAgICAgICAgICAgLy8gZ2hvc3QgcG9pbnRlci1ldmVudHMgaGFuZGxlZCBieSBtei1kcmFnLWdob3N0IGNsYXNzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBnZC5hZGRDbGFzcyhcIm16LWRyYWctZ2hvc3RcIik7XHJcbiAgICAgICAgICAgICAgICBnZC5pbm5lclRleHQgPSBkbi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgZ2hvc3QuYXBwZW5kQ2hpbGQoZ2QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5Ry5hcHBlbmRDaGlsZChnaG9zdCk7XHJcbiAgICAgICAgICAgICAgICBkLmdob3N0RWwgPSBnaG9zdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCIsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaW5kLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZ2JhKDU5LDEzMCwyNDYsMC4xMilcIik7XHJcbiAgICAgICAgICAgICAgICBpbmQuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIHRoaXMuc3R5bGUuc2VsZWN0aW9uQ29sb3IpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgICAgICAgICAgICBpbmQuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMlwiKTtcclxuICAgICAgICAgICAgICAgIGluZC5zZXRBdHRyaWJ1dGUoXCJyeFwiLCBTdHJpbmcodGhpcy5zdHlsZS5ub2RlQm9yZGVyUmFkaXVzKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpbmRpY2F0b3IgcG9pbnRlci1ldmVudHMgaGFuZGxlZCBieSBDU1NcclxuICAgICAgICAgICAgICAgIGluZC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheUcuYXBwZW5kQ2hpbGQoaW5kKTtcclxuICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwgPSBpbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZG4gPSB0aGlzLmZBbGwoZC5ub2RlSWQpO1xyXG4gICAgICAgIGlmIChkbiAmJiBkLmdob3N0RWwpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNMZWZ0U2lkZSA9IGRuLnNpZGUgPT09IFwibGVmdFwiO1xyXG4gICAgICAgICAgICBjb25zdCBlZGdlWCA9IGlzTGVmdFNpZGVcclxuICAgICAgICAgICAgICAgID8gZG4ueCArIGR4ICsgZG4ud2lkdGggLyAyXHJcbiAgICAgICAgICAgICAgICA6IGRuLnggKyBkeCAtIGRuLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgZ3kgPSBkbi55ICsgZHk7XHJcbiAgICAgICAgICAgIGQuZ2hvc3RFbC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyhkbi54ICsgZHggLSBkbi53aWR0aCAvIDIpKTtcclxuICAgICAgICAgICAgZC5naG9zdEVsLnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKGd5IC0gZG4uaGVpZ2h0IC8gMikpO1xyXG4gICAgICAgICAgICBjb25zdCB0Z3QgPSB0aGlzLmRldFRndChlZGdlWCwgZWRnZVgsIGd5LCBkLm5vZGVJZCk7XHJcbiAgICAgICAgICAgIGlmICh0Z3QgJiYgZC5pbmRpY2F0b3JFbCkge1xyXG4gICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0biA9IHRoaXMuZkFsbCh0Z3QuaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRndC56b25lID09PSBcImNoaWxkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh0bi54IC0gdG4ud2lkdGggLyAyIC0gNCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcodG4ueSAtIHRuLmhlaWdodCAvIDIgLSA0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcodG4ud2lkdGggKyA4KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLmhlaWdodCArIDgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGd0LnpvbmUgPT09IFwiYmVmb3JlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh0bi54IC0gdG4ud2lkdGggLyAyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh0bi55IC0gdG4uaGVpZ2h0IC8gMiAtIDYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh0bi53aWR0aCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh0bi54IC0gdG4ud2lkdGggLyAyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh0bi55ICsgdG4uaGVpZ2h0IC8gMiArIDMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh0bi53aWR0aCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGQuaW5kaWNhdG9yRWwpXHJcbiAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkQ2hpbGROb2RlKGZvcmNlU2lkZT86IFwibGVmdFwiIHwgXCJyaWdodFwiKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbElkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIXApIHJldHVybjtcclxuICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgY29uc3QgdHh0ID0gdGhpcy5wbHVnaW4uZ2V0Q2hpbGROYW1lKCk7XHJcbiAgICAgICAgY29uc3QgbjogTWluZE5vZGVEYXRhID0ge1xyXG4gICAgICAgICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcclxuICAgICAgICAgICAgdGV4dDogdHh0LFxyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5jYWxjVyh0eHQsIGZhbHNlKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmNhbGNIKHR4dCwgZmFsc2UpLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocC5jb25uZWN0aW9uQ29sb3IpIG4uY29ubmVjdGlvbkNvbG9yID0gcC5jb25uZWN0aW9uQ29sb3I7XHJcbiAgICAgICAgaWYgKHAuY29ubmVjdGlvbldpZHRoKSBuLmNvbm5lY3Rpb25XaWR0aCA9IHAuY29ubmVjdGlvbldpZHRoO1xyXG4gICAgICAgIC8vIERldGVybWluZSBzaWRlXHJcbiAgICAgICAgaWYgKGZvcmNlU2lkZSkgbi5zaWRlID0gZm9yY2VTaWRlO1xyXG4gICAgICAgIGVsc2UgaWYgKHAuaXNSb290KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpciA9IHRoaXMuc3R5bGUubm9kZURpcmVjdGlvbjtcclxuICAgICAgICAgICAgaWYgKGRpciA9PT0gXCJsZWZ0XCIpIG4uc2lkZSA9IFwibGVmdFwiO1xyXG4gICAgICAgICAgICBlbHNlIG4uc2lkZSA9IFwicmlnaHRcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuLnNpZGUgPSBwLnNpZGUgfHwgXCJyaWdodFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwLmNoaWxkcmVuLnB1c2gobik7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25SYWluYm93Q29sb3IocCwgbik7XHJcbiAgICAgICAgdGhpcy5zZWwxKG4uaWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5lZGl0T25DcmVhdGUpIHRoaXMuZWRpdElkID0gbi5pZDtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkZExlZnRDaGlsZCgpIHtcclxuICAgICAgICB0aGlzLmFkZENoaWxkTm9kZShcImxlZnRcIik7XHJcbiAgICB9XHJcbiAgICAvLyBFbnRlciBvbiByb290ID0gYWRkIGNoaWxkLiBFbnRlciBvbiBjaGlsZCA9IGluc2VydCBzaWJsaW5nIEFGVEVSIGN1cnJlbnRcclxuICAgIHByaXZhdGUgYWRkU2libGluZygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsSWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBzZWwgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgaWYgKCFzZWwpIHJldHVybjtcclxuICAgICAgICBpZiAoc2VsLmlzUm9vdCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkTm9kZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLmZQQSh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIXApIHJldHVybjtcclxuICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgY29uc3QgdHh0ID0gdGhpcy5wbHVnaW4uZ2V0Q2hpbGROYW1lKCk7XHJcbiAgICAgICAgY29uc3QgbjogTWluZE5vZGVEYXRhID0ge1xyXG4gICAgICAgICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcclxuICAgICAgICAgICAgdGV4dDogdHh0LFxyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5jYWxjVyh0eHQsIGZhbHNlKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmNhbGNIKHR4dCwgZmFsc2UpLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgIHNpZGU6IHNlbC5zaWRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHAuY29ubmVjdGlvbkNvbG9yKSBuLmNvbm5lY3Rpb25Db2xvciA9IHAuY29ubmVjdGlvbkNvbG9yO1xyXG4gICAgICAgIGlmIChwLmNvbm5lY3Rpb25XaWR0aCkgbi5jb25uZWN0aW9uV2lkdGggPSBwLmNvbm5lY3Rpb25XaWR0aDtcclxuICAgICAgICBjb25zdCBpZHggPSBwLmNoaWxkcmVuLmZpbmRJbmRleCgoYykgPT4gYy5pZCA9PT0gdGhpcy5zZWxJZCk7XHJcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHAuY2hpbGRyZW4uc3BsaWNlKGlkeCArIDEsIDAsIG4pO1xyXG4gICAgICAgIGVsc2UgcC5jaGlsZHJlbi5wdXNoKG4pO1xyXG4gICAgICAgIHRoaXMuYXNzaWduUmFpbmJvd0NvbG9yKHAsIG4pO1xyXG4gICAgICAgIHRoaXMuc2VsMShuLmlkKTtcclxuICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuZWRpdE9uQ3JlYXRlKSB0aGlzLmVkaXRJZCA9IG4uaWQ7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgLy8gRklYICMzOiBkZWxldGUgc2VsZWN0cyBVUFBFUiBzaWJsaW5nIChpZHgtMSlcclxuICAgIHByaXZhdGUgZGVsTm9kZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsSWQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5yb290cy5zb21lKChyKSA9PiByLmlkID09PSB0aGlzLnNlbElkKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdHMgPSB0aGlzLnJvb3RzLmZpbHRlcigocikgPT4gci5pZCAhPT0gdGhpcy5zZWxJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xyU2VsKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvb3RzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsMSh0aGlzLnJvb3RzW3RoaXMucm9vdHMubGVuZ3RoIC0gMV0uaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLmZQQSh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIXApIHJldHVybjtcclxuICAgICAgICBjb25zdCBpZHggPSBwLmNoaWxkcmVuLmZpbmRJbmRleCgoYykgPT4gYy5pZCA9PT0gdGhpcy5zZWxJZCk7XHJcbiAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgIHAuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgaWYgKHAuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0lkeCA9IGlkeCA+IDAgPyBpZHggLSAxIDogMDtcclxuICAgICAgICAgICAgdGhpcy5zZWwxKHAuY2hpbGRyZW5bbmV3SWR4XS5pZCk7XHJcbiAgICAgICAgfSBlbHNlIHRoaXMuc2VsMShwLmlkKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdEKG5pZDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdGhpcy5fZ2QobmlkLCByLCAwKTtcclxuICAgICAgICAgICAgaWYgKGQgIT09IC0xKSByZXR1cm4gZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfZ2QobmlkOiBzdHJpbmcsIG46IE1pbmROb2RlRGF0YSwgZDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAobi5pZCA9PT0gbmlkKSByZXR1cm4gZDtcclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjb25zdCByID0gdGhpcy5fZ2QobmlkLCBjLCBkICsgMSk7XHJcbiAgICAgICAgICAgIGlmIChyICE9PSAtMSkgcmV0dXJuIHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY0RlcCh0ZDogbnVtYmVyKTogTWluZE5vZGVEYXRhW10ge1xyXG4gICAgICAgIGNvbnN0IG86IE1pbmROb2RlRGF0YVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHRoaXMuX2NkKHIsIDAsIHRkLCBvKTtcclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2NkKG46IE1pbmROb2RlRGF0YSwgZDogbnVtYmVyLCB0ZDogbnVtYmVyLCBvOiBNaW5kTm9kZURhdGFbXSkge1xyXG4gICAgICAgIGlmIChkID09PSB0ZCkge1xyXG4gICAgICAgICAgICBvLnB1c2gobik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHRoaXMuX2NkKGMsIGQgKyAxLCB0ZCwgbyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFycm93KGRpcjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbElkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgY3VyID0gdGhpcy5mQWxsKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghY3VyKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgaXNMZWZ0ID0gY3VyLnNpZGUgPT09IFwibGVmdFwiO1xyXG4gICAgICAgIGlmIChkaXIgPT09IFwiQXJyb3dSaWdodFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0xlZnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhciA9IHRoaXMuZlBBKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcikgdGhpcy5zZWwxKHBhci5pZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYyA9IGN1ci5jaGlsZHJlbj8uZmlsdGVyKChjKSA9PiBjLnNpZGUgIT09IFwibGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChyYz8ubGVuZ3RoKSB0aGlzLnNlbDEocmNbMF0uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXIgPT09IFwiQXJyb3dMZWZ0XCIpIHtcclxuICAgICAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGMgPSBjdXIuY2hpbGRyZW4/Lmxlbmd0aCA/IGN1ci5jaGlsZHJlbiA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAobGMpIHRoaXMuc2VsMShsY1swXS5pZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyLmlzUm9vdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGMgPSBjdXIuY2hpbGRyZW4/LmZpbHRlcigoYykgPT4gYy5zaWRlID09PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobGM/Lmxlbmd0aCkgdGhpcy5zZWwxKGxjWzBdLmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhciA9IHRoaXMuZlBBKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcikgdGhpcy5zZWwxKHBhci5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdGhpcy5nRCh0aGlzLnNlbElkKTtcclxuICAgICAgICAgICAgaWYgKGQgPT09IC0xKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IHBlZXJzID0gdGhpcy5jRGVwKGQpO1xyXG4gICAgICAgICAgICBpZiAocGVlcnMubGVuZ3RoIDw9IDEpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gcGVlcnMuZmluZEluZGV4KChuKSA9PiBuLmlkID09PSB0aGlzLnNlbElkKTtcclxuICAgICAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGRpciA9PT0gXCJBcnJvd1VwXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbDEocGVlcnNbaWR4ID4gMCA/IGlkeCAtIDEgOiBwZWVycy5sZW5ndGggLSAxXS5pZCk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5zZWwxKHBlZXJzW2lkeCA8IHBlZXJzLmxlbmd0aCAtIDEgPyBpZHggKyAxIDogMF0uaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG59XHJcbiIsICIvLyBzcmMvdHlwZXMudHNcclxuaW1wb3J0IHR5cGUgeyBMYW5ndWFnZSB9IGZyb20gXCIuL2kxOG5cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWluZE5vZGVEYXRhIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbjogTWluZE5vZGVEYXRhW107XHJcbiAgICBpc1Jvb3Q/OiBib29sZWFuO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgc3R5bGVPdmVycmlkZT86IE5vZGVTdHlsZU92ZXJyaWRlO1xyXG4gICAgY29ubmVjdGlvbkNvbG9yPzogc3RyaW5nO1xyXG4gICAgY29ubmVjdGlvbldpZHRoPzogbnVtYmVyO1xyXG4gICAgc2lkZT86IFwibGVmdFwiIHwgXCJyaWdodFwiO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTm9kZVN0eWxlT3ZlcnJpZGUge1xyXG4gICAgYmdDb2xvcj86IHN0cmluZztcclxuICAgIHRleHRDb2xvcj86IHN0cmluZztcclxuICAgIGZvbnRTaXplPzogbnVtYmVyO1xyXG4gICAgZm9udEZhbWlseT86IHN0cmluZztcclxuICAgIGJvcmRlclN0eWxlPzogQm9yZGVyU3R5bGU7XHJcbiAgICBib3JkZXJDb2xvcj86IHN0cmluZztcclxuICAgIGJvcmRlcldpZHRoPzogbnVtYmVyO1xyXG4gICAgYm9yZGVyUmFkaXVzPzogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCB0eXBlIEJvcmRlclN0eWxlID0gXCJzb2xpZFwiIHwgXCJkYXNoZWRcIiB8IFwiZG90dGVkXCIgfCBcImRvdWJsZVwiIHwgXCJub25lXCI7XHJcbmV4cG9ydCB0eXBlIENvbm5lY3Rpb25MaW5lU3R5bGUgPVxyXG4gICAgfCBcImJlemllclwiXHJcbiAgICB8IFwic3RyYWlnaHRcIlxyXG4gICAgfCBcImN1cnZlZFwiXHJcbiAgICB8IFwic3RlcFwiXHJcbiAgICB8IFwiYnJhY2tldFwiXHJcbiAgICB8IFwibG9vc2VcIjtcclxuZXhwb3J0IHR5cGUgVGV4dEFsaWduID0gXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiO1xyXG5leHBvcnQgdHlwZSBOb2RlRGlyZWN0aW9uID0gXCJyaWdodFwiIHwgXCJsZWZ0XCIgfCBcImJvdGhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWluZE1hcFN0eWxlIHtcclxuICAgIG5vZGVCZ0NvbG9yOiBzdHJpbmc7XHJcbiAgICBub2RlVGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgICBub2RlRm9udFNpemU6IG51bWJlcjtcclxuICAgIG5vZGVGb250RmFtaWx5OiBzdHJpbmc7XHJcbiAgICBub2RlQm9yZGVyU3R5bGU6IEJvcmRlclN0eWxlO1xyXG4gICAgbm9kZUJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICBub2RlQm9yZGVyV2lkdGg6IG51bWJlcjtcclxuICAgIG5vZGVCb3JkZXJSYWRpdXM6IG51bWJlcjtcclxuICAgIG5vZGVNaW5XaWR0aDogbnVtYmVyO1xyXG4gICAgbm9kZU1pbkhlaWdodDogbnVtYmVyO1xyXG4gICAgcm9vdEJnQ29sb3I6IHN0cmluZztcclxuICAgIHJvb3RUZXh0Q29sb3I6IHN0cmluZztcclxuICAgIHJvb3RGb250U2l6ZTogbnVtYmVyO1xyXG4gICAgcm9vdEZvbnRGYW1pbHk6IHN0cmluZztcclxuICAgIHJvb3RCb3JkZXJTdHlsZTogQm9yZGVyU3R5bGU7XHJcbiAgICByb290Qm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIHJvb3RCb3JkZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgcm9vdEJvcmRlclJhZGl1czogbnVtYmVyO1xyXG4gICAgcm9vdE1pbldpZHRoOiBudW1iZXI7XHJcbiAgICByb290TWluSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBjb25uZWN0aW9uU3R5bGU6IENvbm5lY3Rpb25MaW5lU3R5bGU7XHJcbiAgICBjb25uZWN0aW9uQ29sb3I6IHN0cmluZztcclxuICAgIGNvbm5lY3Rpb25XaWR0aDogbnVtYmVyO1xyXG4gICAgY29ubmVjdGlvbkxlbmd0aDogbnVtYmVyO1xyXG4gICAgY29ubmVjdGlvblJhaW5ib3c6IGJvb2xlYW47XHJcbiAgICByYWluYm93UGFsZXR0ZTogc3RyaW5nO1xyXG4gICAgY3VzdG9tUmFpbmJvd3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPjtcclxuICAgIG5vZGVEaXJlY3Rpb246IE5vZGVEaXJlY3Rpb247XHJcbiAgICBzZWxlY3Rpb25Db2xvcjogc3RyaW5nO1xyXG4gICAgc2VsZWN0aW9uV2lkdGg6IG51bWJlcjtcclxuICAgIHNlbGVjdGlvbk91dGxpbmVPZmZzZXQ6IG51bWJlcjtcclxuICAgIGVkaXRPdXRsaW5lQ29sb3I6IHN0cmluZztcclxuICAgIGVkaXRPdXRsaW5lV2lkdGg6IG51bWJlcjtcclxuICAgIHRleHRBbGlnbjogVGV4dEFsaWduO1xyXG4gICAgbm9kZVBhZFg6IG51bWJlcjtcclxuICAgIG5vZGVMaW5lSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBub2RlR2FwWTogbnVtYmVyO1xyXG4gICAgY2FudmFzQmc6IHN0cmluZztcclxuICAgIHRvb2xiYXJQYWRUb3A6IG51bWJlcjtcclxuICAgIHRvb2xiYXJQYWRSaWdodDogbnVtYmVyO1xyXG4gICAgdG9vbGJhclBhZEJvdHRvbTogbnVtYmVyO1xyXG4gICAgdG9vbGJhclBhZExlZnQ6IG51bWJlcjtcclxuICAgIHRvb2xiYXJQb3NpdGlvbjogXCJ0b3BcIiB8IFwiYm90dG9tXCI7XHJcbiAgICB0b29sYmFyQmdDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0bkJnQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0bkJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCb3JkZXJXaWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtleUJpbmRpbmdzIHtcclxuICAgIGVkaXROb2RlOiBzdHJpbmc7XHJcbiAgICBhZGRTaWJsaW5nOiBzdHJpbmc7XHJcbiAgICBhZGRDaGlsZDogc3RyaW5nO1xyXG4gICAgZm9jdXNOb2RlOiBzdHJpbmc7XHJcbiAgICB1bmRvOiBzdHJpbmc7XHJcbiAgICByZWRvOiBzdHJpbmc7XHJcbiAgICBsaW5lQnJlYWs6IHN0cmluZztcclxuICAgIGRyYWdDYW52YXM6IHN0cmluZztcclxuICAgIHpvb21Jbjogc3RyaW5nO1xyXG4gICAgem9vbU91dDogc3RyaW5nO1xyXG4gICAgem9vbVJlc2V0OiBzdHJpbmc7XHJcbiAgICBuYXZVcDogc3RyaW5nO1xyXG4gICAgbmF2RG93bjogc3RyaW5nO1xyXG4gICAgbmF2TGVmdDogc3RyaW5nO1xyXG4gICAgbmF2UmlnaHQ6IHN0cmluZztcclxuICAgIGludmVydFNjcm9sbFk6IGJvb2xlYW47XHJcbiAgICBpbnZlcnRTY3JvbGxYOiBib29sZWFuO1xyXG4gICAgaW52ZXJ0Wm9vbTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQbHVnaW5TZXR0aW5ncyB7XHJcbiAgICBzdHlsZTogTWluZE1hcFN0eWxlO1xyXG4gICAgbGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgdGhlbWU6IFwibGlnaHRcIiB8IFwiZGFya1wiO1xyXG4gICAgc2hvd1Rvb2xiYXI6IGJvb2xlYW47XHJcbiAgICBrZXlCaW5kaW5nczogS2V5QmluZGluZ3M7XHJcbiAgICBkZXZlbG9wZXJNb2RlOiBib29sZWFuO1xyXG4gICAgZWRpdE9uQ3JlYXRlOiBib29sZWFuO1xyXG4gICAgdHlwZVRvRWRpdDogYm9vbGVhbjtcclxuICAgIGN1c3RvbU5vZGVOYW1lczogUmVjb3JkPHN0cmluZywgeyByb290Pzogc3RyaW5nOyBjaGlsZD86IHN0cmluZyB9PjtcclxuICAgIHRvb2xiYXJTdHlsZUxpZ2h0PzogVG9vbGJhclRoZW1lQ29sb3JzO1xyXG4gICAgdG9vbGJhclN0eWxlRGFyaz86IFRvb2xiYXJUaGVtZUNvbG9ycztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb29sYmFyVGhlbWVDb2xvcnMge1xyXG4gICAgdG9vbGJhckJnQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCdG5CZ0NvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQnRuQm9yZGVyU3R5bGU6IHN0cmluZztcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0blRleHRDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQm9yZGVyV2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTEJBUl9MSUdIVDogVG9vbGJhclRoZW1lQ29sb3JzID0ge1xyXG4gICAgdG9vbGJhckJnQ29sb3I6IFwiI2Y1ZjVmNVwiLFxyXG4gICAgdG9vbGJhckJ0bkJnQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgdG9vbGJhckJ0bkJvcmRlclN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICB0b29sYmFyQnRuQm9yZGVyQ29sb3I6IFwiI2QxZDVkYlwiLFxyXG4gICAgdG9vbGJhckJ0blRleHRDb2xvcjogXCIjMzMzMzMzXCIsXHJcbiAgICB0b29sYmFyQm9yZGVyQ29sb3I6IFwiI2UwZTBlMFwiLFxyXG4gICAgdG9vbGJhckJvcmRlcldpZHRoOiAxLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTEJBUl9EQVJLOiBUb29sYmFyVGhlbWVDb2xvcnMgPSB7XHJcbiAgICB0b29sYmFyQmdDb2xvcjogXCIjMmIyYjJiXCIsXHJcbiAgICB0b29sYmFyQnRuQmdDb2xvcjogXCIjM2MzYzNjXCIsXHJcbiAgICB0b29sYmFyQnRuQm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogXCIjNTU1NTU1XCIsXHJcbiAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBcIiNlMGUwZTBcIixcclxuICAgIHRvb2xiYXJCb3JkZXJDb2xvcjogXCIjNTA1MDUwXCIsXHJcbiAgICB0b29sYmFyQm9yZGVyV2lkdGg6IDEsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUkFJTkJPV19QQUxFVFRFUzogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge1xyXG4gICAgY2xhc3NpYzogW1xyXG4gICAgICAgIFwiIzExY2QzY1wiLFxyXG4gICAgICAgIFwiIzM0OThkYlwiLFxyXG4gICAgICAgIFwiI2Y0MjUwZVwiLFxyXG4gICAgICAgIFwiI2Y4OGQyZlwiLFxyXG4gICAgICAgIFwiIzFhZDVlZFwiLFxyXG4gICAgICAgIFwiIzk4OTg5OFwiLFxyXG4gICAgICAgIFwiI2E2NTdjNVwiLFxyXG4gICAgICAgIFwiIzQwY2RiMVwiLFxyXG4gICAgICAgIFwiIzZiOTlmNlwiLFxyXG4gICAgICAgIFwiI2ZiMzk5N2Q4XCIsXHJcbiAgICAgICAgXCIjNmQ1ZGU4XCIsXHJcbiAgICAgICAgXCIjOTEwZmNkXCIsXHJcbiAgICBdLFxyXG4gICAgcGFzdGVsOiBbXHJcbiAgICAgICAgXCIjYmFmZmM5XCIsXHJcbiAgICAgICAgXCIjYmFlMWZmXCIsXHJcbiAgICAgICAgXCIjZmZiM2JhXCIsXHJcbiAgICAgICAgXCIjZmZkZmJhXCIsXHJcbiAgICAgICAgXCIjZmZmZmJhXCIsXHJcbiAgICAgICAgXCIjZThiYWZmXCIsXHJcbiAgICAgICAgXCIjZmZjOWRlXCIsXHJcbiAgICAgICAgXCIjYzlmZmU1XCIsXHJcbiAgICAgICAgXCIjYzlkNmZmXCIsXHJcbiAgICAgICAgXCIjZmZlOGM5XCIsXHJcbiAgICAgICAgXCIjZDRiYWZmXCIsXHJcbiAgICAgICAgXCIjYmFmZmVhXCIsXHJcbiAgICBdLFxyXG4gICAgZm9yZXN0OiBbXHJcbiAgICAgICAgXCIjMjdhZTYwXCIsXHJcbiAgICAgICAgXCIjMmVjYzcxXCIsXHJcbiAgICAgICAgXCIjMWFiYzljXCIsXHJcbiAgICAgICAgXCIjMTZhMDg1XCIsXHJcbiAgICAgICAgXCIjMDA2NDAwXCIsXHJcbiAgICAgICAgXCIjMjI4QjIyXCIsXHJcbiAgICAgICAgXCIjMzJDRDMyXCIsXHJcbiAgICAgICAgXCIjM0NCMzcxXCIsXHJcbiAgICAgICAgXCIjMkU4QjU3XCIsXHJcbiAgICAgICAgXCIjNjZDREFBXCIsXHJcbiAgICAgICAgXCIjOEZCQzhGXCIsXHJcbiAgICAgICAgXCIjOTBFRTkwXCIsXHJcbiAgICBdLFxyXG4gICAgY2FuZHk6IFtcclxuICAgICAgICBcIiNGRjZGOTFcIixcclxuICAgICAgICBcIiNGRjk2NzFcIixcclxuICAgICAgICBcIiNGRkM3NUZcIixcclxuICAgICAgICBcIiNGOUY4NzFcIixcclxuICAgICAgICBcIiNENjVEQjFcIixcclxuICAgICAgICBcIiM4NDVFQzJcIixcclxuICAgICAgICBcIiMyQzczRDJcIixcclxuICAgICAgICBcIiMwMDg5QkFcIixcclxuICAgICAgICBcIiMwMDhFOUJcIixcclxuICAgICAgICBcIiMwMDhGN0FcIixcclxuICAgICAgICBcIiNCMEE4QjlcIixcclxuICAgICAgICBcIiNDMzRBMzZcIixcclxuICAgIF0sXHJcbiAgICBuZW9uOiBbXHJcbiAgICAgICAgXCIjZmYwMDU1XCIsXHJcbiAgICAgICAgXCIjZmY2NjAwXCIsXHJcbiAgICAgICAgXCIjZmZjYzAwXCIsXHJcbiAgICAgICAgXCIjMDBmZjg4XCIsXHJcbiAgICAgICAgXCIjMDA4OGZmXCIsXHJcbiAgICAgICAgXCIjYWEwMGZmXCIsXHJcbiAgICAgICAgXCIjZmYwMDk5XCIsXHJcbiAgICAgICAgXCIjMDBmZmNjXCIsXHJcbiAgICAgICAgXCIjMDBjY2ZmXCIsXHJcbiAgICAgICAgXCIjZmZmZjAwXCIsXHJcbiAgICAgICAgXCIjZmYwMGZmXCIsXHJcbiAgICAgICAgXCIjMDBmZjAwXCIsXHJcbiAgICBdLFxyXG4gICAgZWFydGg6IFtcclxuICAgICAgICBcIiM4QjQ1MTNcIixcclxuICAgICAgICBcIiNBMDUyMkRcIixcclxuICAgICAgICBcIiNDRDg1M0ZcIixcclxuICAgICAgICBcIiNERUI4ODdcIixcclxuICAgICAgICBcIiNEMkI0OENcIixcclxuICAgICAgICBcIiNCQzhGOEZcIixcclxuICAgICAgICBcIiNGNEE0NjBcIixcclxuICAgICAgICBcIiNEQUE1MjBcIixcclxuICAgICAgICBcIiNCODg2MEJcIixcclxuICAgICAgICBcIiM4MDgwMDBcIixcclxuICAgICAgICBcIiM2QjhFMjNcIixcclxuICAgICAgICBcIiM1NTZCMkZcIixcclxuICAgIF0sXHJcbiAgICBvY2VhbjogW1xyXG4gICAgICAgIFwiIzAwMWYzZlwiLFxyXG4gICAgICAgIFwiIzAwMzM2NlwiLFxyXG4gICAgICAgIFwiIzAwNDA4MFwiLFxyXG4gICAgICAgIFwiIzAwNTliM1wiLFxyXG4gICAgICAgIFwiIzAwNzNlNlwiLFxyXG4gICAgICAgIFwiIzFhOGNmZlwiLFxyXG4gICAgICAgIFwiIzRkYTZmZlwiLFxyXG4gICAgICAgIFwiIzgwYmZmZlwiLFxyXG4gICAgICAgIFwiIzk5Y2NmZlwiLFxyXG4gICAgICAgIFwiI2IzZDlmZlwiLFxyXG4gICAgICAgIFwiI2NjZTVmZlwiLFxyXG4gICAgICAgIFwiI2U2ZjJmZlwiLFxyXG4gICAgXSxcclxuICAgIHN1bnNldDogW1xyXG4gICAgICAgIFwiI2ZmNmI2YlwiLFxyXG4gICAgICAgIFwiI2VlNWEyNFwiLFxyXG4gICAgICAgIFwiI2YwOTMyYlwiLFxyXG4gICAgICAgIFwiI2Y2ZTU4ZFwiLFxyXG4gICAgICAgIFwiI2ZmYmU3NlwiLFxyXG4gICAgICAgIFwiI2ZmNzk3OVwiLFxyXG4gICAgICAgIFwiI2UwNTZmZFwiLFxyXG4gICAgICAgIFwiI2JlMmVkZFwiLFxyXG4gICAgICAgIFwiIzY4NmRlMFwiLFxyXG4gICAgICAgIFwiIzQ4MzRkNFwiLFxyXG4gICAgICAgIFwiIzMwMzM2YlwiLFxyXG4gICAgICAgIFwiIzEzMGY0MFwiLFxyXG4gICAgXSxcclxuICAgIG1vbm9jaHJvbWU6IFtcclxuICAgICAgICBcIiMwMDAwMDBcIixcclxuICAgICAgICBcIiMxYTFhMWFcIixcclxuICAgICAgICBcIiMzMzMzMzNcIixcclxuICAgICAgICBcIiM0ZDRkNGRcIixcclxuICAgICAgICBcIiM2NjY2NjZcIixcclxuICAgICAgICBcIiM4MDgwODBcIixcclxuICAgICAgICBcIiM5OTk5OTlcIixcclxuICAgICAgICBcIiNiM2IzYjNcIixcclxuICAgICAgICBcIiNjY2NjY2NcIixcclxuICAgICAgICBcIiNlNmU2ZTZcIixcclxuICAgICAgICBcIiNmMmYyZjJcIixcclxuICAgICAgICBcIiNmZmZmZmZcIixcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRk9OVF9MSVNUID0gW1xyXG4gICAgXCJpbmhlcml0XCIsXHJcbiAgICBcIkFyaWFsXCIsXHJcbiAgICBcIkhlbHZldGljYSBOZXVlXCIsXHJcbiAgICBcIkdlb3JnaWFcIixcclxuICAgIFwiVGltZXMgTmV3IFJvbWFuXCIsXHJcbiAgICBcIkNvdXJpZXIgTmV3XCIsXHJcbiAgICBcIlZlcmRhbmFcIixcclxuICAgIFwibW9ub3NwYWNlXCIsXHJcbiAgICBcInNhbnMtc2VyaWZcIixcclxuICAgIFwic2VyaWZcIixcclxuXTtcclxuZXhwb3J0IGNvbnN0IENPTk5FQ1RJT05fU1RZTEVTOiBDb25uZWN0aW9uTGluZVN0eWxlW10gPSBbXHJcbiAgICBcImJlemllclwiLFxyXG4gICAgXCJzdHJhaWdodFwiLFxyXG4gICAgXCJjdXJ2ZWRcIixcclxuICAgIFwic3RlcFwiLFxyXG4gICAgXCJicmFja2V0XCIsXHJcbiAgICBcImxvb3NlXCIsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9LRVlCSU5ESU5HUzogS2V5QmluZGluZ3MgPSB7XHJcbiAgICBlZGl0Tm9kZTogXCJTcGFjZVwiLFxyXG4gICAgYWRkU2libGluZzogXCJFbnRlclwiLFxyXG4gICAgYWRkQ2hpbGQ6IFwiVGFiXCIsXHJcbiAgICBmb2N1c05vZGU6IFwiZlwiLFxyXG4gICAgdW5kbzogXCJjdHJsK3pcIixcclxuICAgIHJlZG86IFwiY3RybCtzaGlmdCt6XCIsXHJcbiAgICBsaW5lQnJlYWs6IFwic2hpZnQrRW50ZXJcIixcclxuICAgIGRyYWdDYW52YXM6IFwiU3BhY2VcIixcclxuICAgIHpvb21JbjogXCJzaGlmdCs9XCIsXHJcbiAgICB6b29tT3V0OiBcInNoaWZ0Ky1cIixcclxuICAgIHpvb21SZXNldDogXCJzaGlmdCswXCIsXHJcbiAgICBuYXZVcDogXCJBcnJvd1VwXCIsXHJcbiAgICBuYXZEb3duOiBcIkFycm93RG93blwiLFxyXG4gICAgbmF2TGVmdDogXCJBcnJvd0xlZnRcIixcclxuICAgIG5hdlJpZ2h0OiBcIkFycm93UmlnaHRcIixcclxuICAgIGludmVydFNjcm9sbFk6IGZhbHNlLFxyXG4gICAgaW52ZXJ0U2Nyb2xsWDogZmFsc2UsXHJcbiAgICBpbnZlcnRab29tOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NUWUxFOiBNaW5kTWFwU3R5bGUgPSB7XHJcbiAgICBub2RlQmdDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICBub2RlVGV4dENvbG9yOiBcIiMzMzMzMzNcIixcclxuICAgIG5vZGVGb250U2l6ZTogMTQsXHJcbiAgICBub2RlRm9udEZhbWlseTogXCJpbmhlcml0XCIsXHJcbiAgICBub2RlQm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgIG5vZGVCb3JkZXJDb2xvcjogXCIjZDFkNWRiXCIsXHJcbiAgICBub2RlQm9yZGVyV2lkdGg6IDEsXHJcbiAgICBub2RlQm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgbm9kZU1pbldpZHRoOiA2MCxcclxuICAgIG5vZGVNaW5IZWlnaHQ6IDMyLFxyXG4gICAgcm9vdEJnQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgcm9vdFRleHRDb2xvcjogXCIjMTcxNzE3XCIsXHJcbiAgICByb290Rm9udFNpemU6IDE2LFxyXG4gICAgcm9vdEZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLFxyXG4gICAgcm9vdEJvcmRlclN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICByb290Qm9yZGVyQ29sb3I6IFwiIzg1ODU4NVwiLFxyXG4gICAgcm9vdEJvcmRlcldpZHRoOiAxLFxyXG4gICAgcm9vdEJvcmRlclJhZGl1czogNSxcclxuICAgIHJvb3RNaW5XaWR0aDogODAsXHJcbiAgICByb290TWluSGVpZ2h0OiA0MCxcclxuICAgIGNvbm5lY3Rpb25TdHlsZTogXCJiZXppZXJcIixcclxuICAgIGNvbm5lY3Rpb25Db2xvcjogXCIjOTRhM2I4XCIsXHJcbiAgICBjb25uZWN0aW9uV2lkdGg6IDEuNSxcclxuICAgIGNvbm5lY3Rpb25MZW5ndGg6IDgwLFxyXG4gICAgY29ubmVjdGlvblJhaW5ib3c6IHRydWUsXHJcbiAgICByYWluYm93UGFsZXR0ZTogXCJjbGFzc2ljXCIsXHJcbiAgICBjdXN0b21SYWluYm93czoge30sXHJcbiAgICBub2RlRGlyZWN0aW9uOiBcInJpZ2h0XCIsXHJcbiAgICBzZWxlY3Rpb25Db2xvcjogXCIjNDRkMzMxXCIsXHJcbiAgICBzZWxlY3Rpb25XaWR0aDogMyxcclxuICAgIHNlbGVjdGlvbk91dGxpbmVPZmZzZXQ6IDIsXHJcbiAgICBlZGl0T3V0bGluZUNvbG9yOiBcIiMzYmZiMmRcIixcclxuICAgIGVkaXRPdXRsaW5lV2lkdGg6IDQsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBub2RlUGFkWDogMTAsXHJcbiAgICBub2RlTGluZUhlaWdodDogMS41LFxyXG4gICAgbm9kZUdhcFk6IDI0LFxyXG4gICAgY2FudmFzQmc6IFwiI2ZmZmZmZlwiLFxyXG4gICAgdG9vbGJhclBhZFRvcDogMCxcclxuICAgIHRvb2xiYXJQYWRSaWdodDogMTIsXHJcbiAgICB0b29sYmFyUGFkQm90dG9tOiAwLFxyXG4gICAgdG9vbGJhclBhZExlZnQ6IDEyLFxyXG4gICAgdG9vbGJhclBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgdG9vbGJhckJnQ29sb3I6IFwiI2Y1ZjVmNVwiLFxyXG4gICAgdG9vbGJhckJ0bkJnQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgdG9vbGJhckJ0bkJvcmRlclN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICB0b29sYmFyQnRuQm9yZGVyQ29sb3I6IFwiI2QxZDVkYlwiLFxyXG4gICAgdG9vbGJhckJ0blRleHRDb2xvcjogXCIjMzMzMzMzXCIsXHJcbiAgICB0b29sYmFyQm9yZGVyQ29sb3I6IFwiI2UwZTBlMFwiLFxyXG4gICAgdG9vbGJhckJvcmRlcldpZHRoOiAxLFxyXG59O1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9TRVRUSU5HUzogUGx1Z2luU2V0dGluZ3MgPSB7XHJcbiAgICBzdHlsZTogeyAuLi5ERUZBVUxUX1NUWUxFIH0sXHJcbiAgICBsYW5ndWFnZTogXCJlblwiLFxyXG4gICAgdGhlbWU6IFwibGlnaHRcIixcclxuICAgIHNob3dUb29sYmFyOiB0cnVlLFxyXG4gICAga2V5QmluZGluZ3M6IHsgLi4uREVGQVVMVF9LRVlCSU5ESU5HUyB9LFxyXG4gICAgZGV2ZWxvcGVyTW9kZTogZmFsc2UsXHJcbiAgICBlZGl0T25DcmVhdGU6IGZhbHNlLFxyXG4gICAgdHlwZVRvRWRpdDogdHJ1ZSxcclxuICAgIGN1c3RvbU5vZGVOYW1lczoge30sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBWSUVXX1RZUEVfTUlORE1BUCA9IFwibWluZHpqLXZpZXdcIjtcclxuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFID0gXCJtaW5kemotc3R5bGUtcGFuZWxcIjtcclxuZXhwb3J0IGNvbnN0IE1JTkRNQVBfRklMRV9FWFRFTlNJT04gPSBcIm1pbmR6alwiO1xyXG4iLCAiLy8gc3JjL2kxOG4udHNcclxuLy8gQWxsIDE5IGxhbmd1YWdlcyB3aXRoIENPTVBMRVRFIHRyYW5zbGF0aW9ucyAobm8gZmFsbGJhY2sgdG8gRW5nbGlzaClcclxuXHJcbmV4cG9ydCB0eXBlIExhbmd1YWdlID1cclxuICAgIHwgXCJlblwiXHJcbiAgICB8IFwiemhcIlxyXG4gICAgfCBcImphXCJcclxuICAgIHwgXCJmclwiXHJcbiAgICB8IFwiZGVcIlxyXG4gICAgfCBcImVzXCJcclxuICAgIHwgXCJydVwiXHJcbiAgICB8IFwic3ZcIlxyXG4gICAgfCBcImhpXCJcclxuICAgIHwgXCJrb1wiXHJcbiAgICB8IFwicHRcIlxyXG4gICAgfCBcImZpXCJcclxuICAgIHwgXCJub1wiXHJcbiAgICB8IFwibmxcIlxyXG4gICAgfCBcImxpXCJcclxuICAgIHwgXCJkYVwiXHJcbiAgICB8IFwiaGVcIlxyXG4gICAgfCBcIml0XCJcclxuICAgIHwgXCJhclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUzogeyB2YWx1ZTogTGFuZ3VhZ2U7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xyXG4gICAgeyB2YWx1ZTogXCJlblwiLCBsYWJlbDogXCJFbmdsaXNoXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiemhcIiwgbGFiZWw6IFwiXHU0RTJEXHU2NTg3XCIgfSxcclxuICAgIHsgdmFsdWU6IFwiamFcIiwgbGFiZWw6IFwiXHU2NUU1XHU2NzJDXHU4QTlFXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiZnJcIiwgbGFiZWw6IFwiRnJhblx1MDBFN2Fpc1wiIH0sXHJcbiAgICB7IHZhbHVlOiBcImRlXCIsIGxhYmVsOiBcIkRldXRzY2hcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJlc1wiLCBsYWJlbDogXCJFc3BhXHUwMEYxb2xcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJydVwiLCBsYWJlbDogXCJcdTA0MjBcdTA0NDNcdTA0NDFcdTA0NDFcdTA0M0FcdTA0MzhcdTA0MzlcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJzdlwiLCBsYWJlbDogXCJTdmVuc2thXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiaGlcIiwgbGFiZWw6IFwiXHUwOTM5XHUwOTNGXHUwOTI4XHUwOTREXHUwOTI2XHUwOTQwXCIgfSxcclxuICAgIHsgdmFsdWU6IFwia29cIiwgbGFiZWw6IFwiXHVENTVDXHVBRDZEXHVDNUI0XCIgfSxcclxuICAgIHsgdmFsdWU6IFwicHRcIiwgbGFiZWw6IFwiUG9ydHVndVx1MDBFQXNcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJmaVwiLCBsYWJlbDogXCJTdW9taVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIm5vXCIsIGxhYmVsOiBcIk5vcnNrXCIgfSxcclxuICAgIHsgdmFsdWU6IFwibmxcIiwgbGFiZWw6IFwiTmVkZXJsYW5kc1wiIH0sXHJcbiAgICB7IHZhbHVlOiBcImxpXCIsIGxhYmVsOiBcIkxpZWNodGVuc3RlaW5cIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJpdFwiLCBsYWJlbDogXCJJdGFsaWFub1wiIH0sXHJcbiAgICB7IHZhbHVlOiBcImRhXCIsIGxhYmVsOiBcIkRhbnNrXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiaGVcIiwgbGFiZWw6IFwiXHUwNUUyXHUwNUQxXHUwNUU4XHUwNUQ5XHUwNUVBXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiYXJcIiwgbGFiZWw6IFwiXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjMxXHUwNjI4XHUwNjRBXHUwNjI5XCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBSb290XCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgVW5kb1wiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJlZG9cIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIE1hcFwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZVwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZvY3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlNlYXJjaFwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlNlYXJjaCB8IFNwYWNlOkVkaXQgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOZXcgcm9vdFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93biBtb2RlXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiU3R5bGUgcGFuZWxcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJGb2N1cyBub2RlXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlNlYXJjaCBub2Rlc1wiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIlNldHRpbmdzXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlpvb20gSW5cIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlpvb20gT3V0XCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIEN1c3RvbVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgQmF0Y2ggRGVsZXRlXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRWRpdCBTdHlsZVwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOZXcgUm9vdFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBVbmRvXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFJlZG9cIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBTdHlsZVwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBFZGl0XCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZVwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBDb3B5XCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgQ3V0XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBQYXN0ZVwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgQ2hpbGRcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBMZWZ0IENoaWxkXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFNpYmxpbmdcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBEZWxldGVcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiSGlkZSBUb29sYmFyXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBTdHlsZVwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIkNoaWxkIE5vZGVcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlJvb3QgTm9kZVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkJhY2tncm91bmRcIixcclxuICAgIFwic20udGV4dFwiOiBcIlRleHQgQ29sb3JcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJGb250IFNpemVcIixcclxuICAgIFwic20uZm9udFwiOiBcIkZvbnRcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJCb3JkZXIgU3R5bGVcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJCb3JkZXIgQ29sb3JcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJCb3JkZXIgV2lkdGhcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiQm9yZGVyIFJhZGl1c1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbiBXaWR0aFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJNaW4gSGVpZ2h0XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJDb25uZWN0aW9uXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBlXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiQ29sb3JcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJXaWR0aFwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTGVuZ3RoXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmFpbmJvd1wiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiTm9kZSBEaXJlY3Rpb25cIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTaWJsaW5nIEdhcFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlJpZ2h0XCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJMZWZ0XCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCb3RoXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXR0ZVwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJTZWxlY3Rpb25cIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJTZWxlY3Rpb24gQ29sb3JcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJTZWxlY3Rpb24gV2lkdGhcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiT3V0bGluZSBPZmZzZXRcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJFZGl0IE91dGxpbmUgQ29sb3JcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkVkaXQgT3V0bGluZSBXaWR0aFwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJUZXh0IEFsaWduXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGV4dCBQYWRkaW5nXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiTGluZSBIZWlnaHRcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJDYW52YXMgQmFja2dyb3VuZFwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlJlc2V0XCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiQ2xvc2VcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJTaG93IFRvb2xiYXJcIixcclxuICAgIFwic20udGJQYWRcIjogXCJUb29sYmFyIFBhZGRpbmdcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiVG9wXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlJpZ2h0XCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkJvdHRvbVwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJMZWZ0XCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiVG9vbGJhciBQb3NpdGlvblwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlRvcFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIkJvdHRvbVwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiVG9vbGJhciBCYWNrZ3JvdW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJCdXR0b24gQmFja2dyb3VuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIkJ1dHRvbiBCb3JkZXIgU3R5bGVcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIkJ1dHRvbiBCb3JkZXIgQ29sb3JcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiQnV0dG9uIFRleHQgQ29sb3JcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJSZXNldCBUb29sYmFyXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IE5vZGUgU3R5bGVcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiTGluZSBDb2xvclwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMaW5lIFdpZHRoXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiQ2xlYXIgQ3VzdG9tXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIkJvcmRlciBSYWRpdXNcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiU2VhcmNoIG5vZGVzLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiUm9vdFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk5ldyBSb290XCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkNoaWxkXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBTZXR0aW5nc1wiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIkxhbmd1YWdlXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIkludGVyZmFjZSBsYW5ndWFnZVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUaGVtZVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiQ29sb3IgdGhlbWVcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiTGlnaHRcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJEYXJrXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiU2hvdyBUb29sYmFyXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlNob3cgdG9vbGJhclwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJDYW52YXMgQmFja2dyb3VuZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQmFja2dyb3VuZCBjb2xvclwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJBYm91dFwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpb25cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkF1dGhvclwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiQSBmZWF0dXJlLXJpY2ggb3BlbiBzb3VyY2UgbWluZCBtYXAgYXBwIGZvciBPYnNpZGlhbiB3aXRoIGN1c3RvbSBzdHlsZXMsIHJhaW5ib3cgY29ubmVjdGlvbnMsIG11bHRpLXNlbGVjdCwgZHJhZyAmIGRyb3AsIGFuZCBNYXJrZG93biBpbXBvcnQvZXhwb3J0LlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlVwZGF0ZWRcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1YiBSZXBvc2l0b3J5XCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJTdXBwb3J0IE9wZW4gU291cmNlIEF1dGhvclwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIktleWJvYXJkIFNob3J0Y3V0c1wiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJDdXN0b21pemUgc2hvcnRjdXRzXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIkVkaXQgbm9kZVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJBZGQgc2libGluZ1wiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiQWRkIGNoaWxkXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJGb2N1cyBub2RlXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlVuZG9cIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiUmVkb1wiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIkxpbmUgYnJlYWsgKGluIGVkaXQpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkRyYWcgY2FudmFzXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiWm9vbSBpblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJab29tIG91dFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlJlc2V0IHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hdmlnYXRlIHVwXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIk5hdmlnYXRlIGRvd25cIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiTmF2aWdhdGUgbGVmdFwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWdhdGUgcmlnaHRcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlByZXNzIGtleS4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiU2Nyb2xsICYgWm9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVydCB2ZXJ0aWNhbCBzY3JvbGxcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJJbnZlcnQgaG9yaXpvbnRhbCBzY3JvbGxcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnQgem9vbSBkaXJlY3Rpb25cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIkVkaXQgb24gY3JlYXRlXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiRW50ZXIgZWRpdCBtb2RlIHdoZW4gY3JlYXRpbmcgbmV3IG5vZGVzXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlJvb3Qgbm9kZSBuYW1lXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJEZWZhdWx0IG5hbWUgZm9yIG5ldyByb290IG5vZGVzXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJDaGlsZCBub2RlIG5hbWVcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJEZWZhdWx0IG5hbWUgZm9yIG5ldyBjaGlsZCBub2Rlc1wiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlR5cGUgdG8gZWRpdFwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjpcclxuICAgICAgICBcIlByZXNzIGFueSBrZXkgdG8gZW50ZXIgZWRpdCBtb2RlIHdoZW4gYSBub2RlIGlzIHNlbGVjdGVkXCIsXHJcbn07XHJcblxyXG5jb25zdCBfemg6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgXHU0RTNCXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgXHU2NEE0XHU5NTAwXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgXHU5MUNEXHU1MDVBXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXHU2QTIxXHU1RjBGXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBcdTVCRkNcdTU2RkVcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiXHU1QjlBXHU0RjREXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlx1NjQxQ1x1N0QyMlwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlx1NjQxQ1x1N0QyMiB8IFNwYWNlOlx1N0YxNlx1OEY5MSB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1NjVCMFx1NUVGQVx1NEUzQlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93blx1NkEyMVx1NUYwRlwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlx1NjgzN1x1NUYwRlx1OTc2Mlx1Njc3RlwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1NUI5QVx1NEY0RFx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJcdTY0MUNcdTdEMjJcdTgyODJcdTcwQjlcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJcdThCQkVcdTdGNkVcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiXHU2NTNFXHU1OTI3XCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJcdTdGMjlcdTVDMEZcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgXHU4MUVBXHU1QjlBXHU0RTQ5XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTYyNzlcdTkxQ0ZcdTUyMjBcdTk2NjRcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTdGMTZcdThGOTFcdTY4MzdcdTVGMEZcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgXHU2NUIwXHU1RUZBXHU0RTNCXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1NjRBNFx1OTUwMFwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBcdTkxQ0RcdTUwNUFcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1NTE2OFx1NUM0MFx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBcdTdGMTZcdThGOTFcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBcdTU5MERcdTUyMzZcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBcdTUyNkFcdTUyMDdcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFx1N0M5OFx1OEQzNFwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgXHU1QjUwXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgXHU1REU2XHU0RkE3XHU1QjUwXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFx1NTE0NFx1NUYxRlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1NTIyMFx1OTY2NFwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJcdTk2OTBcdTg1Q0ZcdTVERTVcdTUxNzdcdTY4MEZcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHU1MTY4XHU1QzQwXHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHU1QjUwXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJcdTRFM0JcdTgyODJcdTcwQjlcIixcclxuICAgIFwic20uYmdcIjogXCJcdTgwQ0NcdTY2NkZcdTgyNzJcIixcclxuICAgIFwic20udGV4dFwiOiBcIlx1NjU4N1x1NUI1N1x1ODI3MlwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1NUI1N1x1NEY1M1x1NTkyN1x1NUMwRlwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiXHU1QjU3XHU0RjUzXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiXHU4RkI5XHU2ODQ2XHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiXHU4RkI5XHU2ODQ2XHU5ODlDXHU4MjcyXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHU4RkI5XHU2ODQ2XHU1QkJEXHU1RUE2XCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlx1NTcwNlx1ODlEMlwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIlx1NjcwMFx1NUMwRlx1NUJCRFx1NUVBNlwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJcdTY3MDBcdTVDMEZcdTlBRDhcdTVFQTZcIixcclxuICAgIFwic20uY29ublwiOiBcIlx1OEZERVx1N0VCRlwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiXHU3QzdCXHU1NzhCXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiXHU5ODlDXHU4MjcyXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiXHU1QkJEXHU1RUE2XCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJcdTk1N0ZcdTVFQTZcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBcdTVGNjlcdTg2NzlcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlx1ODI4Mlx1NzBCOVx1NjVCOVx1NTQxMVwiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIlx1NTQwQ1x1N0VBN1x1OTVGNFx1OERERFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlx1NTNGM1x1NEZBN1wiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiXHU1REU2XHU0RkE3XCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJcdTVERTZcdTUzRjNcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJcdThDMDNcdTgyNzJcdTY3N0ZcIixcclxuICAgIFwic20uc2VsXCI6IFwiXHU5MDA5XHU0RTJEXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiXHU5MDA5XHU0RTJEXHU5ODlDXHU4MjcyXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiXHU5MDA5XHU0RTJEXHU2ODQ2XHU1QkJEXHU1RUE2XCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1OTAwOVx1NEUyRFx1Njg0Nlx1NTA0Rlx1NzlGQlwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlx1N0YxNlx1OEY5MVx1Njg0Nlx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiXHU3RjE2XHU4RjkxXHU2ODQ2XHU1QkJEXHU1RUE2XCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1NjU4N1x1NUI1N1x1NUJGOVx1OUY1MFwiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1NjU4N1x1NUI1N1x1OTVGNFx1OERERFwiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIlx1ODg0Q1x1OTVGNFx1OERERFwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1NzUzQlx1NUUwM1x1ODBDQ1x1NjY2Rlx1ODI3MlwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1OTFDRFx1N0Y2RVwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlx1NTE3M1x1OTVFRFwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlx1NjYzRVx1NzkzQVx1NURFNVx1NTE3N1x1NjgwRlwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlx1NURFNVx1NTE3N1x1NjgwRlx1NTE4NVx1OEZCOVx1OERERFwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJcdTRFMEFcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiXHU1M0YzXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIlx1NEUwQlwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJcdTVERTZcIixcclxuICAgIFwic20udGJQb3NcIjogXCJcdTVERTVcdTUxNzdcdTY4MEZcdTRGNERcdTdGNkVcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTk4NzZcdTkwRThcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTVFOTVcdTkwRThcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1NURFNVx1NTE3N1x1NjgwRlx1ODBDQ1x1NjY2Rlx1ODI3MlwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiXHU2MzA5XHU5NEFFXHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiXHU2MzA5XHU5NEFFXHU4RkI5XHU2ODQ2XHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJcdTYzMDlcdTk0QUVcdThGQjlcdTY4NDZcdTk4OUNcdTgyNzJcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHU2MzA5XHU5NEFFXHU1QjU3XHU0RjUzXHU5ODlDXHU4MjcyXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiXHU5MUNEXHU3RjZFXHU1REU1XHU1MTc3XHU2ODBGXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1ODI4Mlx1NzBCOVx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJcdThGREVcdTdFQkZcdTk4OUNcdTgyNzJcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHU4RkRFXHU3RUJGXHU1QkJEXHU1RUE2XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHU2RTA1XHU5NjY0XHU4MUVBXHU1QjlBXHU0RTQ5XCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlx1NTcwNlx1ODlEMlwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJcdTY0MUNcdTdEMjJcdTgyODJcdTcwQjkuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJcdTRFM0JcdTgyODJcdTcwQjlcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJcdTY1QjBcdTRFM0JcdTgyODJcdTcwQjlcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHU1QjUwXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBcdThCQkVcdTdGNkVcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdThCRURcdThBMDBcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHU3NTRDXHU5NzYyXHU4QkVEXHU4QTAwXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlx1NEUzQlx1OTg5OFwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiXHU5ODlDXHU4MjcyXHU0RTNCXHU5ODk4XCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIlx1NEVBRVx1ODI3MlwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIlx1NjY5N1x1ODI3MlwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlx1NjYzRVx1NzkzQVx1NURFNVx1NTE3N1x1NjgwRlwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJcdTY2M0VcdTc5M0FcdTk4NzZcdTkwRThcdTVERTVcdTUxNzdcdTY4MEZcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiXHU3NTNCXHU1RTAzXHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdTc1M0JcdTVFMDNcdTgwQ0NcdTY2NkZcdTk4OUNcdTgyNzJcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiXHU1MTczXHU0RThFXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiXHU3MjQ4XHU2NzJDXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJcdTRGNUNcdTgwMDVcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIlx1NEUwMFx1NkIzRVx1NTI5Rlx1ODBGRFx1NEUzMFx1NUJDQ1x1NzY4NE9ic2lkaWFuXHU2MDFEXHU3RUY0XHU1QkZDXHU1NkZFXHU1RjAwXHU2RTkwXHU1RTk0XHU3NTI4XHVGRjBDXHU2NTJGXHU2MzAxXHU4MUVBXHU1QjlBXHU0RTQ5XHU2ODM3XHU1RjBGXHUzMDAxXHU1RjY5XHU4Njc5XHU4RkRFXHU3RUJGXHUzMDAxXHU1OTFBXHU5MDA5XHUzMDAxXHU2MkQ2XHU2NTNFXHU1NDhDTWFya2Rvd25cdTdGMTZcdThGOTFcdTVCRkNcdTUxNjVcdTVCRkNcdTUxRkFcdTMwMDJcIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJcdTY2RjRcdTY1QjBcdTY1RTVcdTY3MUZcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1YiBcdTRFRDNcdTVFOTNcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlx1NjUyRlx1NjMwMVx1NUYwMFx1NkU5MFx1OTg3OVx1NzZFRVx1NEY1Q1x1ODAwNVwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlx1NUZFQlx1NjM3N1x1OTUyRVx1OEJCRVx1N0Y2RVwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJcdTgxRUFcdTVCOUFcdTRFNDlcdTVGRUJcdTYzNzdcdTk1MkVcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHU3RjE2XHU4RjkxXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIlx1NjVCMFx1NUVGQVx1NTE0NFx1NUYxRlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHU2NUIwXHU1RUZBXHU1QjUwXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdTVCOUFcdTRGNERcdTgyODJcdTcwQjlcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHU2NEE0XHU5NTAwXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1OTFDRFx1NTA1QVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1NjM2Mlx1ODg0QyhcdTdGMTZcdThGOTFcdTRFMkQpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlx1NjJENlx1NTJBOFx1NzUzQlx1NUUwM1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlx1NjUzRVx1NTkyN1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJcdTdGMjlcdTVDMEZcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJcdTkxQ0RcdTdGNkVcdTdGMjlcdTY1M0VcIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIlx1NTQxMVx1NEUwQVx1NUJGQ1x1ODIyQVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTU0MTFcdTRFMEJcdTVCRkNcdTgyMkFcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiXHU1NDExXHU1REU2XHU1QkZDXHU4MjJBXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJcdTU0MTFcdTUzRjNcdTVCRkNcdTgyMkFcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1NjMwOVx1NEUwQlx1NjMwOVx1OTUyRS4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiXHU2RURBXHU1MkE4XHU0RTBFXHU3RjI5XHU2NTNFXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHU1M0NEXHU4RjZDXHU1NzgyXHU3NkY0XHU2RURBXHU1MkE4XCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiXHU1M0NEXHU4RjZDXHU2QzM0XHU1RTczXHU2RURBXHU1MkE4XCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiXHU1M0NEXHU4RjZDXHU3RjI5XHU2NTNFXHU2NUI5XHU1NDExXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTUyMUJcdTVFRkFcdTY1RjZcdTdGMTZcdThGOTFcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJcdTUyMUJcdTVFRkFcdTY1QjBcdTgyODJcdTcwQjlcdTY1RjZcdTgxRUFcdTUyQThcdThGREJcdTUxNjVcdTdGMTZcdThGOTFcdTZBMjFcdTVGMEZcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHU0RTNCXHU4MjgyXHU3MEI5XHU1NDBEXHU3OUYwXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJcdTY1QjBcdTRFM0JcdTgyODJcdTcwQjlcdTc2ODRcdTlFRDhcdThCQTRcdTU0MERcdTc5RjBcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIlx1NUI1MFx1ODI4Mlx1NzBCOVx1NTQwRFx1NzlGMFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlx1NjVCMFx1NUI1MFx1ODI4Mlx1NzBCOVx1NzY4NFx1OUVEOFx1OEJBNFx1NTQwRFx1NzlGMFwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlx1NjMwOVx1OTUyRVx1N0YxNlx1OEY5MVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdTkwMDlcdTRFMkRcdTgyODJcdTcwQjlcdTY1RjZcdTYzMDlcdTRFRkJcdTYxMEZcdTk1MkVcdTc2RjRcdTYzQTVcdThGREJcdTUxNjVcdTdGMTZcdThGOTFcdTZBMjFcdTVGMEZcIixcclxufTtcclxuXHJcbmNvbnN0IF9qYTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTMwRUJcdTMwRkNcdTMwQzhcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTUxNDNcdTMwNkJcdTYyM0JcdTMwNTlcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTMwODRcdTMwOEFcdTc2RjRcdTMwNTlcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIFx1MzBERVx1MzBDM1x1MzBEN1wiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJcdTMwRDVcdTMwQTlcdTMwRkNcdTMwQUJcdTMwQjlcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiXHU2OTFDXHU3RDIyXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6XHU2OTFDXHU3RDIyIHwgU3BhY2U6XHU3REU4XHU5NkM2IHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiXHU2NUIwXHU4OThGXHUzMEVCXHUzMEZDXHUzMEM4XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duXHUzMEUyXHUzMEZDXHUzMEM5XCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXHUzMEQxXHUzMENEXHUzMEVCXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHUzMDZCXHUzMEQ1XHUzMEE5XHUzMEZDXHUzMEFCXHUzMEI5XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1MzBDRVx1MzBGQ1x1MzBDOVx1NjkxQ1x1N0QyMlwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIlx1OEEyRFx1NUI5QVwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJcdTYyRTFcdTU5MjdcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlx1N0UyRVx1NUMwRlwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBcdTMwQUJcdTMwQjlcdTMwQkZcdTMwRTBcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1NEUwMFx1NjJFQ1x1NTI0QVx1OTY2NFwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlx1N0RFOFx1OTZDNlwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBcdTY1QjBcdTg5OEZcdTMwRUJcdTMwRkNcdTMwQzhcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHU1MTQzXHUzMDZCXHU2MjNCXHUzMDU5XCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFx1MzA4NFx1MzA4QVx1NzZGNFx1MzA1OVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHU1MTY4XHU0RjUzXHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1N0RFOFx1OTZDNlwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIFx1MzBCM1x1MzBENFx1MzBGQ1wiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFx1MzBBQlx1MzBDM1x1MzBDOFwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgXHU4Q0JDXHUzMDhBXHU0RUQ4XHUzMDUxXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBcdTVERTZcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgXHU1MTQ0XHU1RjFGXHUzMENFXHUzMEZDXHUzMEM5XCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHU1MjRBXHU5NjY0XCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlx1MzBDNFx1MzBGQ1x1MzBFQlx1MzBEMFx1MzBGQ1x1MzA5Mlx1OTc1RVx1ODg2OFx1NzkzQVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTUxNjhcdTRGNTNcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlx1MzBFQlx1MzBGQ1x1MzBDOFx1MzBDRVx1MzBGQ1x1MzBDOVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1ODBDQ1x1NjY2Rlx1ODI3MlwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHU2NTg3XHU1QjU3XHU4MjcyXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiXHUzMEQ1XHUzMEE5XHUzMEYzXHUzMEM4XHUzMEI1XHUzMEE0XHUzMEJBXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJcdTMwRDVcdTMwQTlcdTMwRjNcdTMwQzhcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJcdTY3QTBcdTdEREFcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdTY3QTBcdTdEREFcdTMwNkVcdTgyNzJcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJcdTY3QTBcdTdEREFcdTMwNkVcdTVFNDVcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiXHU4OUQyXHU0RTM4XCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHU2NzAwXHU1QzBGXHU1RTQ1XCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIlx1NjcwMFx1NUMwRlx1OUFEOFx1MzA1NVwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiXHU2M0E1XHU3RDlBXHU3RERBXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJcdTMwQkZcdTMwQTRcdTMwRDdcIixcclxuICAgIFwic20uY29sb3JcIjogXCJcdTgyNzJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJcdTVFNDVcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIlx1OTU3N1x1MzA1NVwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFx1MzBFQ1x1MzBBNFx1MzBGM1x1MzBEQ1x1MzBGQ1wiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHU2NUI5XHU1NDExXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiXHU1MTQ0XHU1RjFGXHUzMENFXHUzMEZDXHUzMEM5XHU5NTkzXHU5Njk0XCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiXHU1M0YzXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJcdTVERTZcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIlx1NEUyMVx1NjVCOVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlx1MzBEMVx1MzBFQ1x1MzBDM1x1MzBDOFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJcdTkwNzhcdTYyOUVcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJcdTkwNzhcdTYyOUVcdTgyNzJcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJcdTkwNzhcdTYyOUVcdTY3QTBcdTMwNkVcdTVFNDVcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiXHUzMEEyXHUzMEE2XHUzMEM4XHUzMEU5XHUzMEE0XHUzMEYzXHUzMEFBXHUzMEQ1XHUzMEJCXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiXHU3REU4XHU5NkM2XHU2N0EwXHUzMDZFXHU4MjcyXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJcdTdERThcdTk2QzZcdTY3QTBcdTMwNkVcdTVFNDVcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiXHUzMEM2XHUzMEFEXHUzMEI5XHUzMEM4XHU5MTREXHU3RjZFXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiXHUzMEM2XHUzMEFEXHUzMEI5XHUzMEM4XHU0RjU5XHU3NjdEXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHU4ODRDXHUzMDZFXHU5QUQ4XHUzMDU1XCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHUzMEFEXHUzMEUzXHUzMEYzXHUzMEQwXHUzMEI5XHU4MENDXHU2NjZGXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiXHUzMEVBXHUzMEJCXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiXHU5NTg5XHUzMDU4XHUzMDhCXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHU4ODY4XHU3OTNBXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHU0RjU5XHU3NjdEXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1NEUwQVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTUzRjNcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHU0RTBCXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1NURFNlwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MzBDNFx1MzBGQ1x1MzBFQlx1MzBEMFx1MzBGQ1x1NEY0RFx1N0Y2RVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlx1NEUwQVx1OTBFOFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIlx1NEUwQlx1OTBFOFwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHU4MENDXHU2NjZGXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJcdTMwRENcdTMwQkZcdTMwRjNcdTgwQ0NcdTY2NkZcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTMwRENcdTMwQkZcdTMwRjNcdTY3QTBcdTdEREFcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlx1MzBEQ1x1MzBCRlx1MzBGM1x1NjdBMFx1N0REQVx1MzA2RVx1ODI3MlwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJcdTMwRENcdTMwQkZcdTMwRjNcdTY1ODdcdTVCNTdcdTgyNzJcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTMwQzRcdTMwRkNcdTMwRUJcdTMwRDBcdTMwRkNcdTMwRUFcdTMwQkJcdTMwQzNcdTMwQzhcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHUzMENFXHUzMEZDXHUzMEM5XHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1N0REQVx1MzA2RVx1ODI3MlwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdTdEREFcdTMwNkVcdTVFNDVcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJcdTMwQUJcdTMwQjlcdTMwQkZcdTMwRTBcdTMwOTJcdTMwQUZcdTMwRUFcdTMwQTJcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHU4OUQyXHU0RTM4XCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlx1MzBDRVx1MzBGQ1x1MzBDOVx1MzA5Mlx1NjkxQ1x1N0QyMi4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MzBFQlx1MzBGQ1x1MzBDOFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1NjVCMFx1MzA1N1x1MzA0NFx1MzBFQlx1MzBGQ1x1MzBDOFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIFx1OEEyRFx1NUI5QVwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlx1OEEwMFx1OEE5RVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJcdTMwQTRcdTMwRjNcdTMwQkZcdTMwRkNcdTMwRDVcdTMwQTdcdTMwRkNcdTMwQjlcdThBMDBcdThBOUVcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiXHUzMEM2XHUzMEZDXHUzMERFXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJcdTMwQUJcdTMwRTlcdTMwRkNcdTMwQzZcdTMwRkNcdTMwREVcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiXHUzMEU5XHUzMEE0XHUzMEM4XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiXHUzMEMwXHUzMEZDXHUzMEFGXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHU4ODY4XHU3OTNBXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1MzBDNFx1MzBGQ1x1MzBFQlx1MzBEMFx1MzBGQ1x1MzA5Mlx1ODg2OFx1NzkzQVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJcdTMwQURcdTMwRTNcdTMwRjNcdTMwRDBcdTMwQjlcdTgwQ0NcdTY2NkZcdTgyNzJcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIlx1ODBDQ1x1NjY2Rlx1ODI3MlwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTY5ODJcdTg5ODFcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdTMwRDBcdTMwRkNcdTMwQjhcdTMwRTdcdTMwRjNcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1NEY1Q1x1ODAwNVwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiT2JzaWRpYW5cdTc1MjhcdTMwNkVcdTlBRDhcdTZBNUZcdTgwRkRcdTMwQUFcdTMwRkNcdTMwRDdcdTMwRjNcdTMwQkRcdTMwRkNcdTMwQjlcdTMwREVcdTMwQTRcdTMwRjNcdTMwQzlcdTMwREVcdTMwQzNcdTMwRDdcdTMwMDJcdTMwQUJcdTMwQjlcdTMwQkZcdTMwRTBcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcdTMwMDFcdTMwRUNcdTMwQTRcdTMwRjNcdTMwRENcdTMwRkNcdTYzQTVcdTdEOUFcdTdEREFcdTMwMDFcdTg5MDdcdTY1NzBcdTkwNzhcdTYyOUVcdTMwMDFcdTMwQzlcdTMwRTlcdTMwQzNcdTMwQjAmXHUzMEM5XHUzMEVEXHUzMEMzXHUzMEQ3XHUzMDAxTWFya2Rvd25cdTMwQTRcdTMwRjNcdTMwRERcdTMwRkNcdTMwQzgvXHUzMEE4XHUzMEFGXHUzMEI5XHUzMEREXHUzMEZDXHUzMEM4XHU1QkZFXHU1RkRDXHUzMDAyXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHU2NkY0XHU2NUIwXHU2NUU1XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWJcdTMwRUFcdTMwRERcdTMwQjhcdTMwQzhcdTMwRUFcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlx1MzBBQVx1MzBGQ1x1MzBEN1x1MzBGM1x1MzBCRFx1MzBGQ1x1MzBCOVx1NEY1Q1x1ODAwNVx1MzA5Mlx1NjUyRlx1NjNGNFwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlx1MzBBRFx1MzBGQ1x1MzBEQ1x1MzBGQ1x1MzBDOVx1MzBCN1x1MzBFN1x1MzBGQ1x1MzBDOFx1MzBBQlx1MzBDM1x1MzBDOFwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJcdTMwQjdcdTMwRTdcdTMwRkNcdTMwQzhcdTMwQUJcdTMwQzNcdTMwQzhcdTMwOTJcdTMwQUJcdTMwQjlcdTMwQkZcdTMwREVcdTMwQTRcdTMwQkFcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHUzMDkyXHU3REU4XHU5NkM2XCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIlx1NTE0NFx1NUYxRlx1MzBDRVx1MzBGQ1x1MzBDOVx1OEZGRFx1NTJBMFwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHU1QjUwXHUzMENFXHUzMEZDXHUzMEM5XHU4RkZEXHU1MkEwXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdTMwQ0VcdTMwRkNcdTMwQzlcdTMwNkJcdTMwRDVcdTMwQTlcdTMwRkNcdTMwQUJcdTMwQjlcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHU1MTQzXHUzMDZCXHU2MjNCXHUzMDU5XCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1MzA4NFx1MzA4QVx1NzZGNFx1MzA1OVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1NjUzOVx1ODg0Q1x1RkYwOFx1N0RFOFx1OTZDNlx1NEUyRFx1RkYwOVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJcdTMwQURcdTMwRTNcdTMwRjNcdTMwRDBcdTMwQjlcdTMwOTJcdTc5RkJcdTUyRDVcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTYyRTFcdTU5MjdcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHU3RTJFXHU1QzBGXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUzMEJBXHUzMEZDXHUzMEUwXHUzMEVBXHUzMEJCXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJcdTRFMEFcdTMwNkJcdTc5RkJcdTUyRDVcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiXHU0RTBCXHUzMDZCXHU3OUZCXHU1MkQ1XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1NURFNlx1MzA2Qlx1NzlGQlx1NTJENVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiXHU1M0YzXHUzMDZCXHU3OUZCXHU1MkQ1XCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJcdTMwQURcdTMwRkNcdTMwOTJcdTYyQkNcdTMwNTdcdTMwNjZcdTMwNEZcdTMwNjBcdTMwNTVcdTMwNDQuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlx1MzBCOVx1MzBBRlx1MzBFRFx1MzBGQ1x1MzBFQlx1MzA2OFx1MzBCQVx1MzBGQ1x1MzBFMFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIlx1NTc4Mlx1NzZGNFx1MzBCOVx1MzBBRlx1MzBFRFx1MzBGQ1x1MzBFQlx1NTNDRFx1OEVFMlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1NkMzNFx1NUU3M1x1MzBCOVx1MzBBRlx1MzBFRFx1MzBGQ1x1MzBFQlx1NTNDRFx1OEVFMlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MzBCQVx1MzBGQ1x1MzBFMFx1NjVCOVx1NTQxMVx1NTNDRFx1OEVFMlwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiXHU0RjVDXHU2MjEwXHU2NjQyXHUzMDZCXHU3REU4XHU5NkM2XCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHU0RjVDXHU2MjEwXHU2NjQyXHUzMDZCXHU3REU4XHU5NkM2XHUzMEUyXHUzMEZDXHUzMEM5XHUzMDZCXHU1MTY1XHUzMDhCXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlx1MzBFQlx1MzBGQ1x1MzBDOFx1MzBDRVx1MzBGQ1x1MzBDOVx1NTQwRFwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHU2NUIwXHU4OThGXHUzMEVCXHUzMEZDXHUzMEM4XHUzMDZFXHUzMEM3XHUzMEQ1XHUzMEE5XHUzMEVCXHUzMEM4XHU1NDBEXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcdTU0MERcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJcdTY1QjBcdTg5OEZcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcdTMwNkVcdTMwQzdcdTMwRDVcdTMwQTlcdTMwRUJcdTMwQzhcdTU0MERcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJcdTMwQURcdTMwRkNcdTMwNjdcdTdERThcdTk2QzZcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHU5MDc4XHU2MjlFXHU2NjQyXHUzMDZCXHUzMEFEXHUzMEZDXHUzMDkyXHU2MkJDXHUzMDU5XHUzMDY4XHU3REU4XHU5NkM2XHUzMEUyXHUzMEZDXHUzMEM5XHUzMDZCXHU1MTY1XHUzMDhCXCIsXHJcbn07XHJcblxyXG5jb25zdCBfZnI6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUmFjaW5lXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgQW5udWxlclwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJlZmFpcmVcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIENhcnRlXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRm9jdXNcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiUmVjaGVyY2hlclwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlJlY2hlcmNoZXIgfCBFc3BhY2U6XHUwMEM5ZGl0ZXIgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOb3V2ZWxsZSByYWNpbmVcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTW9kZSBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlBhbm5lYXUgZGUgc3R5bGVcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJGb2NhbGlzZXIgbGUgblx1MDE1M3VkXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlJlY2hlcmNoZXIgZGVzIG5cdTAxNTN1ZHNcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJQYXJhbVx1MDBFOHRyZXNcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiWm9vbSBhdmFudFwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiWm9vbSBhcnJpXHUwMEU4cmVcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgUGVyc29ubmFsaXNcdTAwRTlcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFN1cHByLiBlbiBsb3RcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBNb2RpZmllciBsZSBzdHlsZVwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOb3V2ZWxsZSByYWNpbmVcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgQW5udWxlclwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBSZWZhaXJlXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZSBnbG9iYWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHUwMEM5ZGl0ZXJcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIENvcGllclwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIENvdXBlclwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgQ29sbGVyXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBFbmZhbnRcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBFbmZhbnQgZ2F1Y2hlXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEZyXHUwMEU4cmVcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTdXBwcmltZXJcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiTWFzcXVlciBsYSBiYXJyZSBkJ291dGlsc1wiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZSBnbG9iYWxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJOXHUwMTUzdWQgZW5mYW50XCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJOXHUwMTUzdWQgcmFjaW5lXCIsXHJcbiAgICBcInNtLmJnXCI6IFwiRm9uZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiQ291bGV1ciB0ZXh0ZVwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlRhaWxsZSBwb2xpY2VcIixcclxuICAgIFwic20uZm9udFwiOiBcIlBvbGljZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlN0eWxlIGJvcmR1cmVcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJDb3VsZXVyIGJvcmR1cmVcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJMYXJnZXVyIGJvcmR1cmVcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiUmF5b24gYm9yZHVyZVwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIkxhcmdldXIgbWluLlwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJIYXV0ZXVyIG1pbi5cIixcclxuICAgIFwic20uY29ublwiOiBcIkNvbm5leGlvblwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiVHlwZVwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkNvdWxldXJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJMYXJnZXVyXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMb25ndWV1clwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IEFyYy1lbi1jaWVsXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJEaXJlY3Rpb24gblx1MDE1M3Vkc1wiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIkVzcGFjZW1lbnQgZnJcdTAwRThyZXNcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJEcm9pdGVcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIkdhdWNoZVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiTGVzIGRldXhcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldHRlXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlNcdTAwRTlsZWN0aW9uXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiQ291bGV1ciBzXHUwMEU5bGVjdGlvblwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIkxhcmdldXIgc1x1MDBFOWxlY3Rpb25cIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiRFx1MDBFOWNhbGFnZSBjb250b3VyXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiQ291bGV1ciBjb250b3VyIFx1MDBFOWRpdGlvblwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiTGFyZ2V1ciBjb250b3VyIFx1MDBFOWRpdGlvblwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJBbGlnbmVtZW50IHRleHRlXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiTWFyZ2UgdGV4dGVcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJIYXV0ZXVyIGRlIGxpZ25lXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiRm9uZCBkdSBjYW5ldmFzXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiUlx1MDBFOWluaXRpYWxpc2VyXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiRmVybWVyXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiQWZmaWNoZXIgYmFycmUgZCdvdXRpbHNcIixcclxuICAgIFwic20udGJQYWRcIjogXCJNYXJnZXMgYmFycmVcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiSGF1dFwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJEcm9pdGVcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiQmFzXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIkdhdWNoZVwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlBvc2l0aW9uIGJhcnJlXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiSGF1dFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIkJhc1wiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiRm9uZCBiYXJyZVwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiRm9uZCBib3V0b25cIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJTdHlsZSBib3JkdXJlIGJvdXRvblwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiQ291bGV1ciBib3JkdXJlIGJvdXRvblwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJDb3VsZXVyIHRleHRlIGJvdXRvblwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlJcdTAwRTlpbml0aWFsaXNlciBsYSBiYXJyZVwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZSBkdSBuXHUwMTUzdWRcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiQ291bGV1ciBsaWduZVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMYXJnZXVyIGxpZ25lXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiRWZmYWNlciBwZXJzb25uYWxpc2F0aW9uXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlJheW9uIGJvcmR1cmVcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiUmVjaGVyY2hlci4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJhY2luZVwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk5vdXZlbGxlIHJhY2luZVwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJFbmZhbnRcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiUGFyYW1cdTAwRTh0cmVzIE1pbmRaSlwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIkxhbmd1ZVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJMYW5ndWUgZCdpbnRlcmZhY2VcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGhcdTAwRThtZVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiVGhcdTAwRThtZSBkZSBjb3VsZXVyXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkNsYWlyXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiU29tYnJlXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiQWZmaWNoZXIgYmFycmUgZCdvdXRpbHNcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiQWZmaWNoZXIgbGEgYmFycmVcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiRm9uZCBkdSBjYW5ldmFzXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJDb3VsZXVyIGRlIGZvbmRcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiXHUwMEMwIHByb3Bvc1wiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpb25cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkF1dGV1clwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiQXBwbGljYXRpb24gZGUgY2FydGUgbWVudGFsZSBvcGVuIHNvdXJjZSBwb3VyIE9ic2lkaWFuIGF2ZWMgc3R5bGVzIHBlcnNvbm5hbGlzXHUwMEU5cywgY29ubmV4aW9ucyBhcmMtZW4tY2llbCwgbXVsdGktc1x1MDBFOWxlY3Rpb24sIGdsaXNzZXItZFx1MDBFOXBvc2VyIGV0IGltcG9ydC9leHBvcnQgTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiTWlzIFx1MDBFMCBqb3VyXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJEXHUwMEU5cFx1MDBGNHQgR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJTb3V0ZW5pciBsJ2F1dGV1ciBvcGVuIHNvdXJjZVwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlJhY2NvdXJjaXMgY2xhdmllclwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJQZXJzb25uYWxpc2VyIGxlcyByYWNjb3VyY2lzXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1MDBDOWRpdGVyIGxlIG5cdTAxNTN1ZFwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJBam91dGVyIHVuIGZyXHUwMEU4cmVcIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkFqb3V0ZXIgdW4gZW5mYW50XCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJGb2NhbGlzZXIgbGUgblx1MDE1M3VkXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIkFubnVsZXJcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiUmVmYWlyZVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlJldG91ciBcdTAwRTAgbGEgbGlnbmUgKGVuIFx1MDBFOWRpdGlvbilcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiRFx1MDBFOXBsYWNlciBsZSBjYW5ldmFzXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiWm9vbSBhdmFudFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJab29tIGFycmlcdTAwRThyZVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlJcdTAwRTlpbml0aWFsaXNlciB6b29tXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJOYXZpZ3VlciBoYXV0XCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIk5hdmlndWVyIGJhc1wiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJOYXZpZ3VlciBnYXVjaGVcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIk5hdmlndWVyIGRyb2l0ZVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiQXBwdXllei4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiRFx1MDBFOWZpbGVtZW50IGV0IHpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnNlciBkXHUwMEU5ZmlsZW1lbnQgVlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVyc2VyIGRcdTAwRTlmaWxlbWVudCBIXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiSW52ZXJzZXIgem9vbVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiXHUwMEM5ZGl0ZXIgXHUwMEUwIGxhIGNyXHUwMEU5YXRpb25cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJNb2RlIFx1MDBFOWRpdGlvbiBcdTAwRTAgbGEgY3JcdTAwRTlhdGlvblwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJOb20gcmFjaW5lXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJOb20gcGFyIGRcdTAwRTlmYXV0IGRlcyByYWNpbmVzXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJOb20gZW5mYW50XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiTm9tIHBhciBkXHUwMEU5ZmF1dCBkZXMgZW5mYW50c1wiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlNhaXNpZSBwb3VyIFx1MDBFOWRpdGVyXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlx1MDBDOWRpdGVyIGVuIHRhcGFudCBxdWFuZCB1biBuXHUwMTUzdWQgZXN0IHNcdTAwRTlsZWN0aW9ublx1MDBFOVwiLFxyXG59O1xyXG5cclxuY29uc3QgX2RlOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFd1cnplbFwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFJcdTAwRkNja2dcdTAwRTRuZ2lnXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgV2llZGVyaG9sZW5cIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIEthcnRlXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJGb2t1c1wiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJTdWNoZW5cIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpTdWNoZW4gfCBMZWVydGFzdGU6QmVhcmJlaXRlbiB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk5ldWUgV3VyemVsXCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duLU1vZHVzXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiU3RpbC1QYW5lbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIktub3RlbiBmb2t1c3NpZXJlblwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJLbm90ZW4gc3VjaGVuXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiRWluc3RlbGx1bmdlblwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJWZXJnclx1MDBGNlx1MDBERmVyblwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiVmVya2xlaW5lcm5cIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgQmVudXR6ZXJkZWZpbmllcnRcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEFsbGUgbFx1MDBGNnNjaGVuXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbCBiZWFyYmVpdGVuXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE5ldWUgV3VyemVsXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFJcdTAwRkNja2dcdTAwRTRuZ2lnXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFdpZWRlcmhvbGVuXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWxlciBTdGlsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIEJlYXJiZWl0ZW5cIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgS29waWVyZW5cIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBBdXNzY2huZWlkZW5cIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIEVpbmZcdTAwRkNnZW5cIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IEtpbmRrbm90ZW5cIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBMaW5rZXIgS2luZGtub3RlblwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBHZXNjaHdpc3RlclwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIExcdTAwRjZzY2hlblwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJXZXJremV1Z2xlaXN0ZSBhdXNibGVuZGVuXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbGVyIFN0aWxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJLaW5ka25vdGVuXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJXdXJ6ZWxrbm90ZW5cIixcclxuICAgIFwic20uYmdcIjogXCJIaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGV4dGZhcmJlXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiU2NocmlmdGdyXHUwMEY2XHUwMERGZVwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiU2NocmlmdGFydFwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlJhaG1lbnN0aWxcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJSYWhtZW5mYXJiZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlJhaG1lbmJyZWl0ZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJFY2tlbnJhZGl1c1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbi4gQnJlaXRlXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIk1pbi4gSFx1MDBGNmhlXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJWZXJiaW5kdW5nXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBcIixcclxuICAgIFwic20uY29sb3JcIjogXCJGYXJiZVwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkJyZWl0ZVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTFx1MDBFNG5nZVwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFJlZ2VuYm9nZW5cIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIktub3RlbnJpY2h0dW5nXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiR2VzY2h3aXN0ZXJhYnN0YW5kXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiUmVjaHRzXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJMaW5rc1wiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiQmVpZGVcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldHRlXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIkF1c3dhaGxcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJBdXN3YWhsZmFyYmVcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJBdXN3YWhsYnJlaXRlXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIktvbnR1ci1WZXJzYXR6XCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiQmVhcmJlaXR1bmdzcmFobWVuZmFyYmVcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkJlYXJiZWl0dW5nc3JhaG1lbmJyZWl0ZVwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJUZXh0YXVzcmljaHR1bmdcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJUZXh0YWJzdGFuZFwiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIlplaWxlbmhcdTAwRjZoZVwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkxlaW53YW5kLUhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiWnVyXHUwMEZDY2tzZXR6ZW5cIixcclxuICAgIFwic20uY2xvc2VcIjogXCJTY2hsaWVcdTAwREZlblwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIldlcmt6ZXVnbGVpc3RlIGFuemVpZ2VuXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiV2Vya3pldWdsZWlzdGUgQWJzdGFuZFwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJPYmVuXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJVbnRlblwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJMaW5rc1wiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIldlcmt6ZXVnbGVpc3RlIFBvc2l0aW9uXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiT2JlblwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIlVudGVuXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJXZXJremV1Z2xlaXN0ZSBIaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiU2NoYWx0ZmxcdTAwRTRjaGUgSGludGVyZ3J1bmRcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJTY2hhbHRmbFx1MDBFNGNoZSBSYWhtZW5zdGlsXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJTY2hhbHRmbFx1MDBFNGNoZSBSYWhtZW5mYXJiZVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJTY2hhbHRmbFx1MDBFNGNoZSBUZXh0ZmFyYmVcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJXZXJremV1Z2xlaXN0ZSB6dXJcdTAwRkNja3NldHplblwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBLbm90ZW5zdGlsXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkxpbmllbmZhcmJlXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxpbmllbmJyZWl0ZVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkFucGFzc3VuZyB6dXJcdTAwRkNja3NldHplblwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJFY2tlbnJhZGl1c1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJLbm90ZW4gc3VjaGVuLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiV3VyemVsXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTmV1ZSBXdXJ6ZWxcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiS2luZFwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogRWluc3RlbGx1bmdlblwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlNwcmFjaGVcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiT2JlcmZsXHUwMEU0Y2hlbnNwcmFjaGVcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGhlbWFcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIkZhcmJ0aGVtYVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJIZWxsXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiRHVua2VsXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiV2Vya3pldWdsZWlzdGUgYW56ZWlnZW5cIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiV2Vya3pldWdsZWlzdGUgYW56ZWlnZW5cIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiTGVpbndhbmQtSGludGVyZ3J1bmRcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkhpbnRlcmdydW5kZmFyYmVcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiXHUwMERDYmVyXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0b3JcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkZ1bmt0aW9uc3JlaWNoZSBPcGVuLVNvdXJjZS1NaW5kbWFwLUFwcCBmXHUwMEZDciBPYnNpZGlhbiBtaXQgYmVudXR6ZXJkZWZpbmllcnRlbiBTdGlsZW4sIFJlZ2VuYm9nZW4tVmVyYmluZHVuZ2VuLCBNZWhyZmFjaGF1c3dhaGwsIERyYWcgJiBEcm9wIHVuZCBNYXJrZG93bi1JbXBvcnQvRXhwb3J0LlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIkFrdHVhbGlzaWVydFwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViLVJlcG9zaXRvcnlcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIk9wZW4tU291cmNlLUF1dG9yIHVudGVyc3RcdTAwRkN0emVuXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiVGFzdGVua29tYmluYXRpb25lblwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJUYXN0ZW5rb21iaW5hdGlvbmVuIGFucGFzc2VuXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIktub3RlbiBiZWFyYmVpdGVuXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkdlc2Nod2lzdGVyIGhpbnp1Zlx1MDBGQ2dlblwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiS2luZCBoaW56dWZcdTAwRkNnZW5cIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIktub3RlbiBmb2t1c3NpZXJlblwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJSXHUwMEZDY2tnXHUwMEU0bmdpZ1wiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJXaWVkZXJob2xlblwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlplaWxlbnVtYnJ1Y2ggKGJlaW0gQmVhcmJlaXRlbilcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiTGVpbndhbmQgemllaGVuXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiVmVyZ3JcdTAwRjZcdTAwREZlcm5cIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiVmVya2xlaW5lcm5cIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJab29tIHp1clx1MDBGQ2Nrc2V0emVuXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJOYWNoIG9iZW5cIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiTmFjaCB1bnRlblwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJOYWNoIGxpbmtzXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJOYWNoIHJlY2h0c1wiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiVGFzdGUgZHJcdTAwRkNja2VuLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJTY3JvbGxlbiB1bmQgWm9vbWVuXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiVmVydGlrYWxlcyBTY3JvbGxlbiB1bWtlaHJlblwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkhvcml6b250YWxlcyBTY3JvbGxlbiB1bWtlaHJlblwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlpvb20tUmljaHR1bmcgdW1rZWhyZW5cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIkJlaSBFcnN0ZWxsdW5nIGJlYXJiZWl0ZW5cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJCZWFyYmVpdHVuZ3Ntb2R1cyBiZWltIEVyc3RlbGxlbiBuZXVlciBLbm90ZW5cIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiV3VyemVsa25vdGVubmFtZVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYW1lIGZcdTAwRkNyIG5ldWUgV3VyemVsblwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiS2luZGtub3Rlbm5hbWVcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJTdGFuZGFyZG5hbWUgZlx1MDBGQ3IgbmV1ZSBLaW5kZXJcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJUaXBwZW4genVtIEJlYXJiZWl0ZW5cIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiQmVpIEF1c3dhaGwgZGlyZWt0IGJlYXJiZWl0ZW5cIixcclxufTtcclxuXHJcbmNvbnN0IF9lczogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBSYVx1MDBFRHpcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBEZXNoYWNlclwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJlaGFjZXJcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIE1hcGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRW5mb2NhclwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJCdXNjYXJcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpCdXNjYXIgfCBFc3BhY2lvOkVkaXRhciB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk51ZXZhIHJhXHUwMEVEelwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNb2RvIE1hcmtkb3duXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiUGFuZWwgZGUgZXN0aWxvXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiRW5mb2NhciBub2RvXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIkJ1c2NhciBub2Rvc1wiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIkFqdXN0ZXNcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiQWNlcmNhclwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiQWxlamFyXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFBlcnNvbmFsaXphZG9cIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEJvcnJhciBlbiBsb3RlXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRWRpdGFyIGVzdGlsb1wiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOdWV2YSByYVx1MDBFRHpcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgRGVzaGFjZXJcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgUmVoYWNlclwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvIGdsb2JhbFwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBFZGl0YXJcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsb1wiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBDb3BpYXJcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBDb3J0YXJcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFBlZ2FyXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBIaWpvXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgSGlqbyBpenF1aWVyZG9cIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgSGVybWFub1wiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEVsaW1pbmFyXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIk9jdWx0YXIgYmFycmFcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvIGdsb2JhbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIk5vZG8gaGlqb1wiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiTm9kbyByYVx1MDBFRHpcIixcclxuICAgIFwic20uYmdcIjogXCJGb25kb1wiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiQ29sb3IgZGUgdGV4dG9cIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJUYW1hXHUwMEYxb1wiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiRnVlbnRlXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiRXN0aWxvIGJvcmRlXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiQ29sb3IgYm9yZGVcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJBbmNobyBib3JkZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJSYWRpbyBib3JkZVwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIkFuY2hvIG1cdTAwRURuLlwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJBbHRvIG1cdTAwRURuLlwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiQ29uZXhpXHUwMEYzblwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiVGlwb1wiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkNvbG9yXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiQW5jaG9cIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkxvbmdpdHVkXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggQXJjb1x1MDBFRHJpc1wiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiRGlyZWNjaVx1MDBGM25cIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJFc3BhY2lvIGVudHJlIGhlcm1hbm9zXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiRGVyZWNoYVwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiSXpxdWllcmRhXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJBbWJvc1wiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0YVwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJTZWxlY2NpXHUwMEYzblwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIkNvbG9yIHNlbGVjY2lcdTAwRjNuXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiQW5jaG8gc2VsZWNjaVx1MDBGM25cIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiRGVzcGxhemFtaWVudG8gY29udG9ybm9cIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJDb2xvciBjb250b3JubyBlZGljaVx1MDBGM25cIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkFuY2hvIGNvbnRvcm5vIGVkaWNpXHUwMEYzblwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJBbGluZWFjaVx1MDBGM25cIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJSZWxsZW5vIHRleHRvXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiQWx0dXJhIGxcdTAwRURuZWFcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJGb25kbyBsaWVuem9cIixcclxuICAgIFwic20ucmVzZXRcIjogXCJSZXN0YWJsZWNlclwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIkNlcnJhclwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIk1vc3RyYXIgYmFycmFcIixcclxuICAgIFwic20udGJQYWRcIjogXCJSZWxsZW5vIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIkFycmliYVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJEZXJlY2hhXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkFiYWpvXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIkl6cXVpZXJkYVwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlBvc2ljaVx1MDBGM24gYmFycmFcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJBcnJpYmFcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJBYmFqb1wiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiRm9uZG8gYmFycmFcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIkZvbmRvIGJvdFx1MDBGM25cIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJFc3RpbG8gYm9yZGUgYm90XHUwMEYzblwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiQ29sb3IgYm9yZGUgYm90XHUwMEYzblwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJDb2xvciB0ZXh0byBib3RcdTAwRjNuXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUmVzdGFibGVjZXIgYmFycmFcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvIG5vZG9cIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiQ29sb3IgbFx1MDBFRG5lYVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJBbmNobyBsXHUwMEVEbmVhXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiQm9ycmFyIHBlcnNvbmFsaXphY2lcdTAwRjNuXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlJhZGlvIGJvcmRlXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIkJ1c2NhciBub2Rvcy4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJhXHUwMEVEelwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk51ZXZhIHJhXHUwMEVEelwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJIaWpvXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIkFqdXN0ZXMgTWluZFpKXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiSWRpb21hXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIklkaW9tYSBpbnRlcmZhelwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJUZW1hIGRlIGNvbG9yXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkNsYXJvXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiT3NjdXJvXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiTW9zdHJhciBiYXJyYVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJNb3N0cmFyIGJhcnJhXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIkZvbmRvIGxpZW56b1wiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQ29sb3IgZGUgZm9uZG9cIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiQWNlcmNhIGRlXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lcdTAwRjNuXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRvclwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiQXBsaWNhY2lcdTAwRjNuIGRlIG1hcGEgbWVudGFsIGRlIGNcdTAwRjNkaWdvIGFiaWVydG8gcGFyYSBPYnNpZGlhbiBjb24gZXN0aWxvcyBwZXJzb25hbGl6YWRvcywgY29uZXhpb25lcyBhcmNvXHUwMEVEcmlzLCBtdWx0aS1zZWxlY2NpXHUwMEYzbiwgYXJyYXN0cmFyIHkgc29sdGFyIGUgaW1wb3J0YWNpXHUwMEYzbi9leHBvcnRhY2lcdTAwRjNuIE1hcmtkb3duLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIkFjdHVhbGl6YWRvXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJSZXBvc2l0b3JpbyBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIkFwb3lhciBhbCBhdXRvciBvcGVuIHNvdXJjZVwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIkF0YWpvcyBkZSB0ZWNsYWRvXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlBlcnNvbmFsaXphciBhdGFqb3NcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiRWRpdGFyIG5vZG9cIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiQVx1MDBGMWFkaXIgaGVybWFub1wiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiQVx1MDBGMWFkaXIgaGlqb1wiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiRW5mb2NhciBub2RvXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIkRlc2hhY2VyXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlJlaGFjZXJcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJTYWx0byBkZSBsXHUwMEVEbmVhIChlbiBlZGljaVx1MDBGM24pXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkFycmFzdHJhciBsaWVuem9cIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJBY2VyY2FyXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIkFsZWphclwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlJlc3RhYmxlY2VyIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIkFycmliYVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJBYmFqb1wiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJJenF1aWVyZGFcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIkRlcmVjaGFcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlB1bHNlLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJEZXNwbGF6YW1pZW50byB5IHpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnRpciBkZXNwbGF6YW1pZW50byBWXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJ0aXIgZGVzcGxhemFtaWVudG8gSFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGlyIHpvb21cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIkVkaXRhciBhbCBjcmVhclwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIk1vZG8gZWRpY2lcdTAwRjNuIGFsIGNyZWFyIG5vZG9zXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIk5vbWJyZSByYVx1MDBFRHpcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIk5vbWJyZSBwb3IgZGVmZWN0byBkZSByYVx1MDBFRGNlc1wiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiTm9tYnJlIGhpam9cIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJOb21icmUgcG9yIGRlZmVjdG8gZGUgaGlqb3NcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJUZWNsZWFyIHBhcmEgZWRpdGFyXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIkVkaXRhciBhbCB0ZWNsZWFyIGNvbiBub2RvIHNlbGVjY2lvbmFkb1wiLFxyXG59O1xyXG5cclxuY29uc3QgX3J1OiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFx1MDQxQVx1MDQzRVx1MDQ0MFx1MDQzNVx1MDQzRFx1MDQ0Q1wiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFx1MDQxRVx1MDQ0Mlx1MDQzQ1x1MDQzNVx1MDQzRFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFx1MDQxRlx1MDQzRVx1MDQzMlx1MDQ0Mlx1MDQzRVx1MDQ0MFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgXHUwNDFBXHUwNDMwXHUwNDQwXHUwNDQyXHUwNDMwXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDQyMVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzQVx1MDQ0M1x1MDQ0MVwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJcdTA0MUZcdTA0M0VcdTA0MzhcdTA0NDFcdTA0M0FcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpcdTA0MUZcdTA0M0VcdTA0MzhcdTA0NDFcdTA0M0EgfCBcdTA0MUZcdTA0NDBcdTA0M0VcdTA0MzFcdTA0MzVcdTA0M0I6XHUwNDIwXHUwNDM1XHUwNDM0LiB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1MDQxRFx1MDQzRVx1MDQzMlx1MDQ0Qlx1MDQzOSBcdTA0M0FcdTA0M0VcdTA0NDBcdTA0MzVcdTA0M0RcdTA0NENcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiXHUwNDIwXHUwNDM1XHUwNDM2XHUwNDM4XHUwNDNDIE1hcmtkb3duXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHUwNDFGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDRDIFx1MDQ0MVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQzNVx1MDQzOVwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzQVx1MDQ0M1x1MDQ0MSBcdTA0M0RcdTA0MzAgXHUwNDQzXHUwNDM3XHUwNDNCXHUwNDM1XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1MDQxRlx1MDQzRVx1MDQzOFx1MDQ0MVx1MDQzQSBcdTA0NDNcdTA0MzdcdTA0M0JcdTA0M0VcdTA0MzJcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJcdTA0MURcdTA0MzBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzlcdTA0M0FcdTA0MzhcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiXHUwNDIzXHUwNDMyXHUwNDM1XHUwNDNCXHUwNDM4XHUwNDQ3XHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJcdTA0MjNcdTA0M0NcdTA0MzVcdTA0M0RcdTA0NENcdTA0NDhcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgXHUwNDIxXHUwNDMyXHUwNDNFXHUwNDM5XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTA0MjNcdTA0MzRcdTA0MzBcdTA0M0JcdTA0MzhcdTA0NDJcdTA0NEMgXHUwNDMyXHUwNDQxXHUwNDUxXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNDIxXHUwNDQyXHUwNDM4XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFx1MDQxRFx1MDQzRVx1MDQzMlx1MDQ0Qlx1MDQzOSBcdTA0M0FcdTA0M0VcdTA0NDBcdTA0MzVcdTA0M0RcdTA0NENcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHUwNDFFXHUwNDQyXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFx1MDQxRlx1MDQzRVx1MDQzMlx1MDQ0Mlx1MDQzRVx1MDQ0MFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNDEzXHUwNDNCXHUwNDNFXHUwNDMxXHUwNDMwXHUwNDNCXHUwNDRDXHUwNDNEXHUwNDRCXHUwNDM5IFx1MDQ0MVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBcdTA0MjBcdTA0MzVcdTA0MzRcdTA0MzBcdTA0M0FcdTA0NDJcdTA0MzhcdTA0NDBcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NDJcdTA0NENcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDQyMVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBcdTA0MUFcdTA0M0VcdTA0M0ZcdTA0MzhcdTA0NDBcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NDJcdTA0NENcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBcdTA0MTJcdTA0NEJcdTA0NDBcdTA0MzVcdTA0MzdcdTA0MzBcdTA0NDJcdTA0NENcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFx1MDQxMlx1MDQ0MVx1MDQ0Mlx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgXHUwNDE0XHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQwXHUwNDNEXHUwNDM4XHUwNDM5XCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgXHUwNDFCXHUwNDM1XHUwNDMyXHUwNDRCXHUwNDM5IFx1MDQzNFx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0MFx1MDQzRFx1MDQzOFx1MDQzOVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdTA0MjFcdTA0M0VcdTA0NDFcdTA0MzVcdTA0MzRcdTA0M0RcdTA0MzhcdTA0MzlcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTA0MjNcdTA0MzRcdTA0MzBcdTA0M0JcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHUwNDIxXHUwNDNBXHUwNDQwXHUwNDRCXHUwNDQyXHUwNDRDIFx1MDQzRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA0MTNcdTA0M0JcdTA0M0VcdTA0MzFcdTA0MzBcdTA0M0JcdTA0NENcdTA0M0RcdTA0NEJcdTA0MzkgXHUwNDQxXHUwNDQyXHUwNDM4XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHUwNDE0XHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQwXHUwNDNEXHUwNDM4XHUwNDM5IFx1MDQ0M1x1MDQzN1x1MDQzNVx1MDQzQlwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHUwNDFBXHUwNDNFXHUwNDQwXHUwNDNEXHUwNDM1XHUwNDMyXHUwNDNFXHUwNDM5IFx1MDQ0M1x1MDQzN1x1MDQzNVx1MDQzQlwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzRFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQ0Mlx1MDQzNVx1MDQzQVx1MDQ0MVx1MDQ0Mlx1MDQzMFwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1MDQyMFx1MDQzMFx1MDQzN1x1MDQzQ1x1MDQzNVx1MDQ0MCBcdTA0NDhcdTA0NDBcdTA0MzhcdTA0NDRcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1MDQyOFx1MDQ0MFx1MDQzOFx1MDQ0NFx1MDQ0MlwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1MDQyMVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0QyBcdTA0NDBcdTA0MzBcdTA0M0NcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdTA0MjZcdTA0MzJcdTA0MzVcdTA0NDIgXHUwNDQwXHUwNDMwXHUwNDNDXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHUwNDI4XHUwNDM4XHUwNDQwXHUwNDM4XHUwNDNEXHUwNDMwIFx1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTA0MjBcdTA0MzBcdTA0MzRcdTA0MzhcdTA0NDNcdTA0NDFcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJcdTA0MUNcdTA0MzhcdTA0M0QuIFx1MDQ0OFx1MDQzOFx1MDQ0MFx1MDQzOFx1MDQzRFx1MDQzMFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJcdTA0MUNcdTA0MzhcdTA0M0QuIFx1MDQzMlx1MDQ0Qlx1MDQ0MVx1MDQzRVx1MDQ0Mlx1MDQzMFwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiXHUwNDIxXHUwNDNFXHUwNDM1XHUwNDM0XHUwNDM4XHUwNDNEXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM1XCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJcdTA0MjJcdTA0MzhcdTA0M0ZcIixcclxuICAgIFwic20uY29sb3JcIjogXCJcdTA0MjZcdTA0MzJcdTA0MzVcdTA0NDJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJcdTA0MjhcdTA0MzhcdTA0NDBcdTA0MzhcdTA0M0RcdTA0MzBcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIlx1MDQxNFx1MDQzQlx1MDQzOFx1MDQzRFx1MDQzMFwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFx1MDQyMFx1MDQzMFx1MDQzNFx1MDQ0M1x1MDQzM1x1MDQzMFwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiXHUwNDFEXHUwNDMwXHUwNDNGXHUwNDQwXHUwNDMwXHUwNDMyXHUwNDNCXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM1XCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiXHUwNDFFXHUwNDQyXHUwNDQxXHUwNDQyXHUwNDQzXHUwNDNGIFx1MDQzQ1x1MDQzNVx1MDQzNlx1MDQzNFx1MDQ0MyBcdTA0NDNcdTA0MzdcdTA0M0JcdTA0MzBcdTA0M0NcdTA0MzhcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdTA0MTJcdTA0M0ZcdTA0NDBcdTA0MzBcdTA0MzJcdTA0M0VcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1MDQxMlx1MDQzQlx1MDQzNVx1MDQzMlx1MDQzRVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHUwNDFFXHUwNDMxXHUwNDMwXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHUwNDFGXHUwNDMwXHUwNDNCXHUwNDM4XHUwNDQyXHUwNDQwXHUwNDMwXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlx1MDQxMlx1MDQ0Qlx1MDQzNFx1MDQzNVx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNVwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0MzJcdTA0NEJcdTA0MzRcdTA0MzVcdTA0M0JcdTA0MzVcdTA0M0RcdTA0MzhcdTA0NEZcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJcdTA0MjhcdTA0MzhcdTA0NDBcdTA0MzhcdTA0M0RcdTA0MzAgXHUwNDMyXHUwNDRCXHUwNDM0XHUwNDM1XHUwNDNCXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDRGXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1MDQyMVx1MDQzQ1x1MDQzNVx1MDQ0OVx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNSBcdTA0M0FcdTA0M0VcdTA0M0RcdTA0NDJcdTA0NDNcdTA0NDBcdTA0MzBcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJcdTA0MjZcdTA0MzJcdTA0MzVcdTA0NDIgXHUwNDNBXHUwNDNFXHUwNDNEXHUwNDQyXHUwNDQzXHUwNDQwXHUwNDMwIFx1MDQ0MFx1MDQzNVx1MDQzNC5cIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1MDQyOFx1MDQzOFx1MDQ0MFx1MDQzOFx1MDQzRFx1MDQzMCBcdTA0M0FcdTA0M0VcdTA0M0RcdTA0NDJcdTA0NDNcdTA0NDBcdTA0MzAgXHUwNDQwXHUwNDM1XHUwNDM0LlwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJcdTA0MTJcdTA0NEJcdTA0NDBcdTA0MzBcdTA0MzJcdTA0M0RcdTA0MzhcdTA0MzJcdTA0MzBcdTA0M0RcdTA0MzhcdTA0MzVcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJcdTA0MUVcdTA0NDJcdTA0NDFcdTA0NDJcdTA0NDNcdTA0M0YgXHUwNDQyXHUwNDM1XHUwNDNBXHUwNDQxXHUwNDQyXHUwNDMwXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHUwNDEyXHUwNDRCXHUwNDQxXHUwNDNFXHUwNDQyXHUwNDMwIFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzRVx1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzRCBcdTA0NDVcdTA0M0VcdTA0M0JcdTA0NDFcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJcdTA0MjFcdTA0MzFcdTA0NDBcdTA0M0VcdTA0NDFcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJcdTA0MTdcdTA0MzBcdTA0M0FcdTA0NDBcdTA0NEJcdTA0NDJcdTA0NENcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJcdTA0MUZcdTA0MzBcdTA0M0RcdTA0MzVcdTA0M0JcdTA0NEMgXHUwNDM4XHUwNDNEXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDQzXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDQyXHUwNDNFXHUwNDMyXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiXHUwNDFFXHUwNDQyXHUwNDQxXHUwNDQyXHUwNDQzXHUwNDNGIFx1MDQzRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQzOFwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJcdTA0MjFcdTA0MzJcdTA0MzVcdTA0NDBcdTA0NDVcdTA0NDNcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiXHUwNDIxXHUwNDNGXHUwNDQwXHUwNDMwXHUwNDMyXHUwNDMwXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIlx1MDQyMVx1MDQzRFx1MDQzOFx1MDQzN1x1MDQ0M1wiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJcdTA0MjFcdTA0M0JcdTA0MzVcdTA0MzJcdTA0MzBcIixcclxuICAgIFwic20udGJQb3NcIjogXCJcdTA0MUZcdTA0M0VcdTA0MzdcdTA0MzhcdTA0NDZcdTA0MzhcdTA0NEYgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDM4XCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiXHUwNDIxXHUwNDMyXHUwNDM1XHUwNDQwXHUwNDQ1XHUwNDQzXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiXHUwNDIxXHUwNDNEXHUwNDM4XHUwNDM3XHUwNDQzXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJcdTA0MjRcdTA0M0VcdTA0M0QgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDM4XCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJcdTA0MjRcdTA0M0VcdTA0M0QgXHUwNDNBXHUwNDNEXHUwNDNFXHUwNDNGXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiXHUwNDIxXHUwNDQyXHUwNDM4XHUwNDNCXHUwNDRDIFx1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzQVx1MDQzOCBcdTA0M0FcdTA0M0RcdTA0M0VcdTA0M0ZcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0NDBcdTA0MzBcdTA0M0NcdTA0M0FcdTA0MzggXHUwNDNBXHUwNDNEXHUwNDNFXHUwNDNGXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0NDJcdTA0MzVcdTA0M0FcdTA0NDFcdTA0NDJcdTA0MzAgXHUwNDNBXHUwNDNEXHUwNDNFXHUwNDNGXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiXHUwNDIxXHUwNDMxXHUwNDQwXHUwNDNFXHUwNDQxXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA0MjFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NEMgXHUwNDQzXHUwNDM3XHUwNDNCXHUwNDMwXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0M0JcdTA0MzhcdTA0M0RcdTA0MzhcdTA0MzhcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHUwNDI4XHUwNDM4XHUwNDQwXHUwNDM4XHUwNDNEXHUwNDMwIFx1MDQzQlx1MDQzOFx1MDQzRFx1MDQzOFx1MDQzOFwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlx1MDQyMVx1MDQzMVx1MDQ0MFx1MDQzRVx1MDQ0MVx1MDQzOFx1MDQ0Mlx1MDQ0QyBcdTA0M0RcdTA0MzBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzlcdTA0M0FcdTA0MzhcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHUwNDIwXHUwNDMwXHUwNDM0XHUwNDM4XHUwNDQzXHUwNDQxXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlx1MDQxRlx1MDQzRVx1MDQzOFx1MDQ0MVx1MDQzQSBcdTA0NDNcdTA0MzdcdTA0M0JcdTA0M0VcdTA0MzIuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJcdTA0MUFcdTA0M0VcdTA0NDBcdTA0MzVcdTA0M0RcdTA0NENcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJcdTA0MURcdTA0M0VcdTA0MzJcdTA0NEJcdTA0MzkgXHUwNDNBXHUwNDNFXHUwNDQwXHUwNDM1XHUwNDNEXHUwNDRDXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIlx1MDQxNFx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0MFx1MDQzRFx1MDQzOFx1MDQzOVwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJcdTA0MURcdTA0MzBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzlcdTA0M0FcdTA0MzggTWluZFpKXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiXHUwNDJGXHUwNDM3XHUwNDRCXHUwNDNBXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIlx1MDQyRlx1MDQzN1x1MDQ0Qlx1MDQzQSBcdTA0MzhcdTA0M0RcdTA0NDJcdTA0MzVcdTA0NDBcdTA0NDRcdTA0MzVcdTA0MzlcdTA0NDFcdTA0MzBcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiXHUwNDIyXHUwNDM1XHUwNDNDXHUwNDMwXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJcdTA0MjZcdTA0MzJcdTA0MzVcdTA0NDJcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NEYgXHUwNDQyXHUwNDM1XHUwNDNDXHUwNDMwXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIlx1MDQyMVx1MDQzMlx1MDQzNVx1MDQ0Mlx1MDQzQlx1MDQzMFx1MDQ0RlwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIlx1MDQyMlx1MDQ1MVx1MDQzQ1x1MDQzRFx1MDQzMFx1MDQ0RlwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlx1MDQxRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQ0QyBcdTA0MzhcdTA0M0RcdTA0NDFcdTA0NDJcdTA0NDBcdTA0NDNcdTA0M0NcdTA0MzVcdTA0M0RcdTA0NDJcdTA0M0VcdTA0MzJcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiXHUwNDFGXHUwNDNFXHUwNDNBXHUwNDMwXHUwNDM3XHUwNDMwXHUwNDQyXHUwNDRDIFx1MDQzRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJcdTA0MjRcdTA0M0VcdTA0M0QgXHUwNDQ1XHUwNDNFXHUwNDNCXHUwNDQxXHUwNDQyXHUwNDMwXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdTA0MjZcdTA0MzJcdTA0MzVcdTA0NDIgXHUwNDQ0XHUwNDNFXHUwNDNEXHUwNDMwXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1MDQxRSBcdTA0M0ZcdTA0NDBcdTA0M0VcdTA0MzNcdTA0NDBcdTA0MzBcdTA0M0NcdTA0M0NcdTA0MzVcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdTA0MTJcdTA0MzVcdTA0NDBcdTA0NDFcdTA0MzhcdTA0NEZcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1MDQxMFx1MDQzMlx1MDQ0Mlx1MDQzRVx1MDQ0MFwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiXHUwNDFGXHUwNDQwXHUwNDM4XHUwNDNCXHUwNDNFXHUwNDM2XHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM1IFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0MzhcdTA0M0RcdTA0NDJcdTA0MzVcdTA0M0JcdTA0M0JcdTA0MzVcdTA0M0FcdTA0NDItXHUwNDNBXHUwNDMwXHUwNDQwXHUwNDQyIFx1MDQ0MSBcdTA0M0VcdTA0NDJcdTA0M0FcdTA0NDBcdTA0NEJcdTA0NDJcdTA0NEJcdTA0M0MgXHUwNDNBXHUwNDNFXHUwNDM0XHUwNDNFXHUwNDNDIFx1MDQzNFx1MDQzQlx1MDQ0RiBPYnNpZGlhbjogXHUwNDQxXHUwNDQyXHUwNDM4XHUwNDNCXHUwNDM4LCBcdTA0NDBcdTA0MzBcdTA0MzRcdTA0NDNcdTA0MzZcdTA0M0RcdTA0NEJcdTA0MzUgXHUwNDQxXHUwNDNFXHUwNDM1XHUwNDM0XHUwNDM4XHUwNDNEXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDRGLCBcdTA0M0NcdTA0M0RcdTA0M0VcdTA0MzZcdTA0MzVcdTA0NDFcdTA0NDJcdTA0MzJcdTA0MzVcdTA0M0RcdTA0M0RcdTA0NEJcdTA0MzkgXHUwNDMyXHUwNDRCXHUwNDMxXHUwNDNFXHUwNDQwLCBcdTA0M0ZcdTA0MzVcdTA0NDBcdTA0MzVcdTA0NDJcdTA0MzBcdTA0NDFcdTA0M0FcdTA0MzhcdTA0MzJcdTA0MzBcdTA0M0RcdTA0MzhcdTA0MzUgXHUwNDM4IE1hcmtkb3duLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1MDQxRVx1MDQzMVx1MDQzRFx1MDQzRVx1MDQzMlx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzRVwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiXHUwNDIwXHUwNDM1XHUwNDNGXHUwNDNFXHUwNDM3XHUwNDM4XHUwNDQyXHUwNDNFXHUwNDQwXHUwNDM4XHUwNDM5IEdpdEh1YlwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiXHUwNDFGXHUwNDNFXHUwNDM0XHUwNDM0XHUwNDM1XHUwNDQwXHUwNDM2XHUwNDMwXHUwNDQyXHUwNDRDIFx1MDQzMFx1MDQzMlx1MDQ0Mlx1MDQzRVx1MDQ0MFx1MDQzMFwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlx1MDQyMVx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0Mlx1MDQzMFx1MDQzRFx1MDQzOFx1MDQ0RiBcdTA0M0FcdTA0M0JcdTA0MzBcdTA0MzJcdTA0MzhcdTA0NDhcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiXHUwNDFEXHUwNDMwXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzQVx1MDQzQlx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0OFx1MDQzOFwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJcdTA0MjBcdTA0MzVcdTA0MzRcdTA0MzBcdTA0M0FcdTA0NDJcdTA0MzhcdTA0NDBcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDQzXHUwNDM3XHUwNDM1XHUwNDNCXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIlx1MDQxNFx1MDQzRVx1MDQzMVx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0Mlx1MDQ0QyBcdTA0NDFcdTA0M0VcdTA0NDFcdTA0MzVcdTA0MzRcdTA0M0RcdTA0MzhcdTA0MzlcIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIlx1MDQxNFx1MDQzRVx1MDQzMVx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0Mlx1MDQ0QyBcdTA0MzRcdTA0M0VcdTA0NDdcdTA0MzVcdTA0NDBcdTA0M0RcdTA0MzhcdTA0MzlcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzQVx1MDQ0M1x1MDQ0MSBcdTA0M0RcdTA0MzAgXHUwNDQzXHUwNDM3XHUwNDNCXHUwNDM1XCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlx1MDQxRVx1MDQ0Mlx1MDQzQ1x1MDQzNVx1MDQzRFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJcdTA0MUZcdTA0M0VcdTA0MzJcdTA0NDJcdTA0M0VcdTA0NDBcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJcdTA0MUZcdTA0MzVcdTA0NDBcdTA0MzVcdTA0M0RcdTA0M0VcdTA0NDEgXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDNBXHUwNDM4IChcdTA0NDBcdTA0MzVcdTA0MzQuKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJcdTA0MUZcdTA0MzVcdTA0NDBcdTA0MzVcdTA0M0NcdTA0MzVcdTA0NDlcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzUgXHUwNDQ1XHUwNDNFXHUwNDNCXHUwNDQxXHUwNDQyXHUwNDMwXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiXHUwNDIzXHUwNDMyXHUwNDM1XHUwNDNCXHUwNDM4XHUwNDQ3XHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlx1MDQyM1x1MDQzQ1x1MDQzNVx1MDQzRFx1MDQ0Q1x1MDQ0OFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1MDQyMVx1MDQzMVx1MDQ0MFx1MDQzRVx1MDQ0MVx1MDQzOFx1MDQ0Mlx1MDQ0QyBcdTA0M0NcdTA0MzBcdTA0NDFcdTA0NDhcdTA0NDJcdTA0MzBcdTA0MzFcIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIlx1MDQxMlx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0NVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTA0MTJcdTA0M0RcdTA0MzhcdTA0MzdcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiXHUwNDEyXHUwNDNCXHUwNDM1XHUwNDMyXHUwNDNFXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJcdTA0MTJcdTA0M0ZcdTA0NDBcdTA0MzBcdTA0MzJcdTA0M0VcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1MDQxRFx1MDQzMFx1MDQzNlx1MDQzQ1x1MDQzOFx1MDQ0Mlx1MDQzNSBcdTA0M0FcdTA0M0JcdTA0MzBcdTA0MzJcdTA0MzhcdTA0NDhcdTA0NDMuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlx1MDQxRlx1MDQ0MFx1MDQzRVx1MDQzQVx1MDQ0MFx1MDQ0M1x1MDQ0Mlx1MDQzQVx1MDQzMCBcdTA0MzggXHUwNDNDXHUwNDMwXHUwNDQxXHUwNDQ4XHUwNDQyXHUwNDMwXHUwNDMxXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHUwNDE4XHUwNDNEXHUwNDMyXHUwNDM1XHUwNDQwXHUwNDQyLiBcdTA0MzJcdTA0MzVcdTA0NDBcdTA0NDIuIFx1MDQzRlx1MDQ0MFx1MDQzRVx1MDQzQVx1MDQ0MFx1MDQ0M1x1MDQ0Mlx1MDQzQVx1MDQ0M1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1MDQxOFx1MDQzRFx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0Mi4gXHUwNDMzXHUwNDNFXHUwNDQwXHUwNDM4XHUwNDM3LiBcdTA0M0ZcdTA0NDBcdTA0M0VcdTA0M0FcdTA0NDBcdTA0NDNcdTA0NDJcdTA0M0FcdTA0NDNcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJcdTA0MThcdTA0M0RcdTA0MzJcdTA0MzVcdTA0NDBcdTA0NDIuIFx1MDQzQ1x1MDQzMFx1MDQ0MVx1MDQ0OFx1MDQ0Mlx1MDQzMFx1MDQzMVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiXHUwNDIwXHUwNDM1XHUwNDM0LiBcdTA0M0ZcdTA0NDBcdTA0MzggXHUwNDQxXHUwNDNFXHUwNDM3XHUwNDM0XHUwNDMwXHUwNDNEXHUwNDM4XHUwNDM4XCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUwNDIwXHUwNDM1XHUwNDM2XHUwNDM4XHUwNDNDIFx1MDQ0MFx1MDQzNVx1MDQzNC4gXHUwNDNGXHUwNDQwXHUwNDM4IFx1MDQ0MVx1MDQzRVx1MDQzN1x1MDQzNFx1MDQzMFx1MDQzRFx1MDQzOFx1MDQzOFwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJcdTA0MThcdTA0M0NcdTA0NEYgXHUwNDNBXHUwNDNFXHUwNDQwXHUwNDNEXHUwNDRGXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJcdTA0MThcdTA0M0NcdTA0NEYgXHUwNDNGXHUwNDNFIFx1MDQ0M1x1MDQzQ1x1MDQzRVx1MDQzQlx1MDQ0N1x1MDQzMFx1MDQzRFx1MDQzOFx1MDQ0RSBcdTA0MzRcdTA0M0JcdTA0NEYgXHUwNDNBXHUwNDNFXHUwNDQwXHUwNDNEXHUwNDM1XHUwNDM5XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJcdTA0MThcdTA0M0NcdTA0NEYgXHUwNDM0XHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQwXHUwNDNEXHUwNDM1XHUwNDMzXHUwNDNFXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiXHUwNDE4XHUwNDNDXHUwNDRGIFx1MDQzRlx1MDQzRSBcdTA0NDNcdTA0M0NcdTA0M0VcdTA0M0JcdTA0NDdcdTA0MzBcdTA0M0RcdTA0MzhcdTA0NEUgXHUwNDM0XHUwNDNCXHUwNDRGIFx1MDQzNFx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0MFx1MDQzRFx1MDQzOFx1MDQ0NVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlx1MDQxRlx1MDQzNVx1MDQ0N1x1MDQzMFx1MDQ0Mlx1MDQzMFx1MDQ0Mlx1MDQ0QyBcdTA0MzRcdTA0M0JcdTA0NEYgXHUwNDQwXHUwNDM1XHUwNDM0LlwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdTA0MjBcdTA0MzVcdTA0MzRcdTA0MzBcdTA0M0FcdTA0NDJcdTA0MzhcdTA0NDBcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDNGXHUwNDQwXHUwNDM4IFx1MDQzRFx1MDQzMFx1MDQzNlx1MDQzMFx1MDQ0Mlx1MDQzOFx1MDQzOCBcdTA0M0FcdTA0M0JcdTA0MzBcdTA0MzJcdTA0MzhcdTA0NDhcIixcclxufTtcclxuXHJcbmNvbnN0IF9zdjogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBSb3RcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTAwQzVuZ3JhXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgR1x1MDBGNnIgb21cIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIEthcnRhXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJGb2t1c1wiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJTXHUwMEY2a1wiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlNcdTAwRjZrIHwgTWVsbGFuc2xhZzpSZWRpZ2VyYSB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk55IHJvdFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93bi1sXHUwMEU0Z2VcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlscGFuZWxcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJGb2t1c2VyYSBub2RcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiU1x1MDBGNmsgbm9kZXJcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJJbnN0XHUwMEU0bGxuaW5nYXJcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiWm9vbWEgaW5cIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlpvb21hIHV0XCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIEFucGFzc2FkXCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBSYWRlcmEgYWxsYVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFJlZGlnZXJhIHN0aWxcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTnkgcm90XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1MDBDNW5ncmFcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgR1x1MDBGNnIgb21cIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBzdGlsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFJlZGlnZXJhXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIEtvcGllcmFcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBLbGlwcCB1dFwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgS2xpc3RyYSBpblwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgQmFyblwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFZcdTAwRTRuc3RlciBiYXJuXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFN5c2tvblwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFJhZGVyYVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJEXHUwMEY2bGogdmVya3R5Z3NmXHUwMEU0bHRcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIHN0aWxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJCYXJubm9kXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJSb3Rub2RcIixcclxuICAgIFwic20uYmdcIjogXCJCYWtncnVuZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGV4dGZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlRlY2tlbnN0b3JsZWtcIixcclxuICAgIFwic20uZm9udFwiOiBcIlRlY2tlbnNuaXR0XCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiS2FudHN0aWxcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJLYW50Zlx1MDBFNHJnXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiS2FudGJyZWRkXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIkthbnRyYWRpZVwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbi4gYnJlZGRcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiTWluLiBoXHUwMEY2amRcIixcclxuICAgIFwic20uY29ublwiOiBcIktvcHBsaW5nXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBcIixcclxuICAgIFwic20uY29sb3JcIjogXCJGXHUwMEU0cmdcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJCcmVkZFwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTFx1MDBFNG5nZFwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFJlZ25iXHUwMEU1Z2VcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIk5vZHJpa3RuaW5nXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiU3lza29ubWVsbGFucnVtXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiSFx1MDBGNmdlclwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiVlx1MDBFNG5zdGVyXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCXHUwMEU1ZGFcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldHRcIixcclxuICAgIFwic20uc2VsXCI6IFwiTWFya2VyaW5nXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiTWFya2VyaW5nc2ZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIk1hcmtlcmluZ3NicmVkZFwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJLb250dXJvZmZzZXRcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJSZWRpZ2VyaW5nc2tvbnR1cmZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiUmVkaWdlcmluZ3Nrb250dXJicmVkZFwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJUZXh0anVzdGVyaW5nXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGV4dGF2c3RcdTAwRTVuZFwiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIlJhZGhcdTAwRjZqZFwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkR1a2Jha2dydW5kXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiXHUwMEM1dGVyc3RcdTAwRTRsbFwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlN0XHUwMEU0bmdcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJWaXNhIHZlcmt0eWdzZlx1MDBFNGx0XCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiRlx1MDBFNGx0c2F2c3RcdTAwRTVuZFwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJPdmFuXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIkhcdTAwRjZnZXJcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiTmVkYW5cIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiVlx1MDBFNG5zdGVyXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiRlx1MDBFNGx0c3Bvc2l0aW9uXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiT3ZhblwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIk5lZGFuXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJGXHUwMEU0bHRzYmFrZ3J1bmRcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIktuYXBwYmFrZ3J1bmRcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJLbmFwcGthbnRzdGlsXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJLbmFwcGthbnRmXHUwMEU0cmdcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiS25hcHB0ZXh0Zlx1MDBFNHJnXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiXHUwMEM1dGVyc3RcdTAwRTRsbCBmXHUwMEU0bHRcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggTm9kc3RpbFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJMaW5qZWZcdTAwRTRyZ1wiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMaW5qZWJyZWRkXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiUmVuc2FcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGllXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlNcdTAwRjZrIG5vZGVyLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiUm90XCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTnkgcm90XCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkJhcm5cIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIEluc3RcdTAwRTRsbG5pbmdhclwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlNwclx1MDBFNWtcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiR3JcdTAwRTRuc3NuaXR0c3Nwclx1MDBFNWtcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiRlx1MDBFNHJndGVtYVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJManVzdFwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIk1cdTAwRjZya3RcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJWaXNhIHZlcmt0eWdzZlx1MDBFNGx0XCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlZpc2EgdmVya3R5Z3NmXHUwMEU0bHRcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiRHVrYmFrZ3J1bmRcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkJha2dydW5kc2ZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJPbVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpb25cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkZcdTAwRjZyZmF0dGFyZVwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiRnVua3Rpb25zcmlrIG1pbmRtYXAtYXBwIG1lZCBcdTAwRjZwcGVuIGtcdTAwRTRsbGtvZCBmXHUwMEY2ciBPYnNpZGlhbiBtZWQgYW5wYXNzYWRlIHN0aWxhciwgcmVnbmJcdTAwRTVnc2tvcHBsaW5nYXIsIGZsZXJ2YWwsIGRyYS1vY2gtc2xcdTAwRTRwcCBvY2ggTWFya2Rvd24taW1wb3J0L2V4cG9ydC5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJVcHBkYXRlcmFkXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItZlx1MDBGNnJyXHUwMEU1ZFwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiU3RcdTAwRjZkIGZcdTAwRjZyZmF0dGFyZW5cIixcclxuICAgIFwic2V0LmtleXNcIjogXCJLb3J0a29tbWFuZG9uXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIkFucGFzc2Ega29ydGtvbW1hbmRvblwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJSZWRpZ2VyYSBub2RcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiTFx1MDBFNGdnIHRpbGwgc3lza29uXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJMXHUwMEU0Z2cgdGlsbCBiYXJuXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJGb2t1c2VyYSBub2RcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHUwMEM1bmdyYVwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJHXHUwMEY2ciBvbVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlJhZGJyeXRuaW5nIChyZWRpZ2VyaW5nKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJEcmEgYXJiZXRzeXRhXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiWm9vbWEgaW5cIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiWm9vbWEgdXRcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJcdTAwQzV0ZXJzdFx1MDBFNGxsIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hdmlnZXJhIHVwcFx1MDBFNXRcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiTmF2aWdlcmEgbmVkXHUwMEU1dFwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJOYXZpZ2VyYSB2XHUwMEU0bnN0ZXJcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIk5hdmlnZXJhIGhcdTAwRjZnZXJcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlRyeWNrLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJTY3JvbGwgb2NoIHpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnRlcmEgVi1zY3JvbGxcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJJbnZlcnRlcmEgSC1zY3JvbGxcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnRlcmEgem9vbVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiUmVkaWdlcmEgdmlkIHNrYXBhbmRlXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiUmVkaWdlcmluZ3NsXHUwMEU0Z2UgdmlkIG55YSBub2RlclwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJSb3RuYW1uXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJTdGFuZGFyZG5hbW4gZlx1MDBGNnIgbnlhIHJcdTAwRjZ0dGVyXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJCYXJubmFtblwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmFtbiBmXHUwMEY2ciBueWEgYmFyblwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlNrcml2IGZcdTAwRjZyIGF0dCByZWRpZ2VyYVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJSZWRpZ2VyYSBnZW5vbSBhdHQgc2tyaXZhXCIsXHJcbn07XHJcblxyXG5jb25zdCBfaGk6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgXHUwOTJFXHUwOTQyXHUwOTMyXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgXHUwOTJBXHUwOTQyXHUwOTMwXHUwOTREXHUwOTM1XHUwOTM1XHUwOTI0XCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgXHUwOTJCXHUwOTNGXHUwOTMwIFx1MDkzOFx1MDk0N1wiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgXHUwOTJFXHUwOTQ4XHUwOTJBXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDkzNlx1MDk0OFx1MDkzMlx1MDk0MFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIlx1MDkyQlx1MDkzQ1x1MDk0Qlx1MDkxNVx1MDkzOFwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJcdTA5MTZcdTA5NEJcdTA5MUNcdTA5NDdcdTA5MDJcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpcdTA5MTZcdTA5NEJcdTA5MUNcdTA5NDdcdTA5MDIgfCBTcGFjZTpcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5MjggfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJcdTA5MjhcdTA5MkZcdTA5M0UgXHUwOTJFXHUwOTQyXHUwOTMyXCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duIFx1MDkyRVx1MDk0Qlx1MDkyMVwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlx1MDkzNlx1MDk0OFx1MDkzMlx1MDk0MCBcdTA5MkFcdTA5NDhcdTA5MjhcdTA5MzJcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJcdTA5MjhcdTA5NEJcdTA5MjEgXHUwOTJBXHUwOTMwIFx1MDkyQlx1MDkzQ1x1MDk0Qlx1MDkxNVx1MDkzOFwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJcdTA5MjhcdTA5NEJcdTA5MjEgXHUwOTE2XHUwOTRCXHUwOTFDXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHUwOTM4XHUwOTQ3XHUwOTFGXHUwOTNGXHUwOTAyXHUwOTE3XHUwOTREXHUwOTM4XCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1MDkxQ1x1MDkzQ1x1MDk0Mlx1MDkyRSBcdTA5MDdcdTA5MjhcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlx1MDkxQ1x1MDkzQ1x1MDk0Mlx1MDkyRSBcdTA5MDZcdTA5MDlcdTA5MUZcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgXHUwOTE1XHUwOTM4XHUwOTREXHUwOTFGXHUwOTJFXCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTA5MzhcdTA5MkRcdTA5NDAgXHUwOTM5XHUwOTFGXHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwIFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkzRlx1MDkyNCBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgXHUwOTI4XHUwOTJGXHUwOTNFIFx1MDkyRVx1MDk0Mlx1MDkzMlwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBcdTA5MkFcdTA5NDJcdTA5MzBcdTA5NERcdTA5MzVcdTA5MzVcdTA5MjRcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgXHUwOTJCXHUwOTNGXHUwOTMwIFx1MDkzOFx1MDk0N1wiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwOTM1XHUwOTQ4XHUwOTM2XHUwOTREXHUwOTM1XHUwOTNGXHUwOTE1IFx1MDkzNlx1MDk0OFx1MDkzMlx1MDk0MFwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5M0ZcdTA5MjQgXHUwOTE1XHUwOTMwXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MzZcdTA5NDhcdTA5MzJcdTA5NDBcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgXHUwOTE1XHUwOTQ5XHUwOTJBXHUwOTQwXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgXHUwOTE1XHUwOTFGXCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBcdTA5MkFcdTA5NDdcdTA5MzhcdTA5NERcdTA5MUZcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IFx1MDkxQVx1MDkzRVx1MDkwN1x1MDkzMlx1MDk0RFx1MDkyMVwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFx1MDkyQ1x1MDkzRVx1MDkyRlx1MDkzRVx1MDkwMiBcdTA5MUFcdTA5M0VcdTA5MDdcdTA5MzJcdTA5NERcdTA5MjFcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgXHUwOTM4XHUwOTNGXHUwOTJDXHUwOTMyXHUwOTNGXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHUwOTM5XHUwOTFGXHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlx1MDkxRlx1MDk0Mlx1MDkzMlx1MDkyQ1x1MDkzRVx1MDkzMCBcdTA5MUJcdTA5NDFcdTA5MkFcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwOTM1XHUwOTQ4XHUwOTM2XHUwOTREXHUwOTM1XHUwOTNGXHUwOTE1IFx1MDkzNlx1MDk0OFx1MDkzMlx1MDk0MFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIlx1MDkxQVx1MDkzRVx1MDkwN1x1MDkzMlx1MDk0RFx1MDkyMSBcdTA5MjhcdTA5NEJcdTA5MjFcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlx1MDkyRVx1MDk0Mlx1MDkzMiBcdTA5MjhcdTA5NEJcdTA5MjFcIixcclxuICAgIFwic20uYmdcIjogXCJcdTA5MkFcdTA5NDNcdTA5MzdcdTA5NERcdTA5MjBcdTA5MkRcdTA5NDJcdTA5MkVcdTA5M0ZcIixcclxuICAgIFwic20udGV4dFwiOiBcIlx1MDkxRlx1MDk0N1x1MDkxNVx1MDk0RFx1MDkzOFx1MDk0RFx1MDkxRiBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJcdTA5MkJcdTA5M0NcdTA5NDlcdTA5MjhcdTA5NERcdTA5MUYgXHUwOTA2XHUwOTE1XHUwOTNFXHUwOTMwXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJcdTA5MkJcdTA5M0NcdTA5NDlcdTA5MjhcdTA5NERcdTA5MUZcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJcdTA5MkNcdTA5NDlcdTA5MzBcdTA5NERcdTA5MjFcdTA5MzAgXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiXHUwOTJDXHUwOTQ5XHUwOTMwXHUwOTREXHUwOTIxXHUwOTMwIFx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlx1MDkyQ1x1MDk0OVx1MDkzMFx1MDk0RFx1MDkyMVx1MDkzMCBcdTA5MUFcdTA5NENcdTA5MjFcdTA5M0NcdTA5M0VcdTA5MDhcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiXHUwOTJDXHUwOTQ5XHUwOTMwXHUwOTREXHUwOTIxXHUwOTMwIFx1MDkyNFx1MDk0RFx1MDkzMFx1MDkzRlx1MDkxQ1x1MDk0RFx1MDkyRlx1MDkzRVwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIlx1MDkyOFx1MDk0RFx1MDkyRlx1MDk0Mlx1MDkyOFx1MDkyNFx1MDkyRSBcdTA5MUFcdTA5NENcdTA5MjFcdTA5M0NcdTA5M0VcdTA5MDhcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiXHUwOTI4XHUwOTREXHUwOTJGXHUwOTQyXHUwOTI4XHUwOTI0XHUwOTJFIFx1MDkwQVx1MDkwMlx1MDkxQVx1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiXHUwOTE1XHUwOTI4XHUwOTQ3XHUwOTE1XHUwOTREXHUwOTM2XHUwOTI4XCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJcdTA5MkFcdTA5NERcdTA5MzBcdTA5MTVcdTA5M0VcdTA5MzBcIixcclxuICAgIFwic20uY29sb3JcIjogXCJcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJcdTA5MUFcdTA5NENcdTA5MjFcdTA5M0NcdTA5M0VcdTA5MDhcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIlx1MDkzMlx1MDkwMlx1MDkyQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFx1MDkwN1x1MDkwMlx1MDkyNlx1MDk0RFx1MDkzMFx1MDkyN1x1MDkyOFx1MDk0MVx1MDkzN1wiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiXHUwOTI2XHUwOTNGXHUwOTM2XHUwOTNFXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiXHUwOTM4XHUwOTM5XHUwOTRCXHUwOTI2XHUwOTMwIFx1MDkwNVx1MDkwMlx1MDkyNFx1MDkzMFx1MDkzRVx1MDkzMlwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlx1MDkyNlx1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiXHUwOTJDXHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJcdTA5MjZcdTA5NEJcdTA5MjhcdTA5NEJcdTA5MDJcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJcdTA5MkFcdTA5NDhcdTA5MzJcdTA5NDdcdTA5MUZcIixcclxuICAgIFwic20uc2VsXCI6IFwiXHUwOTFBXHUwOTJGXHUwOTI4XCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiXHUwOTFBXHUwOTJGXHUwOTI4IFx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlx1MDkxQVx1MDkyRlx1MDkyOCBcdTA5MUFcdTA5NENcdTA5MjFcdTA5M0NcdTA5M0VcdTA5MDhcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiXHUwOTA2XHUwOTA5XHUwOTFGXHUwOTMyXHUwOTNFXHUwOTA3XHUwOTI4IFx1MDkxMVx1MDkyQlx1MDkzOFx1MDk0N1x1MDkxRlwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOCBcdTA5MDZcdTA5MDlcdTA5MUZcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MjggXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5MjggXHUwOTA2XHUwOTA5XHUwOTFGXHUwOTMyXHUwOTNFXHUwOTA3XHUwOTI4IFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJcdTA5MUZcdTA5NDdcdTA5MTVcdTA5NERcdTA5MzhcdTA5NERcdTA5MUYgXHUwOTM4XHUwOTAyXHUwOTMwXHUwOTQ3XHUwOTE2XHUwOTIzXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiXHUwOTFGXHUwOTQ3XHUwOTE1XHUwOTREXHUwOTM4XHUwOTREXHUwOTFGIFx1MDkyQVx1MDk0OFx1MDkyMVx1MDkzRlx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIlx1MDkyQVx1MDkwMlx1MDkxNVx1MDk0RFx1MDkyNFx1MDkzRiBcdTA5MEFcdTA5MDJcdTA5MUFcdTA5M0VcdTA5MDhcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJcdTA5MTVcdTA5NDhcdTA5MjhcdTA5MzVcdTA5M0VcdTA5MzggXHUwOTJBXHUwOTQzXHUwOTM3XHUwOTREXHUwOTIwXHUwOTJEXHUwOTQyXHUwOTJFXHUwOTNGXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiXHUwOTMwXHUwOTQwXHUwOTM4XHUwOTQ3XHUwOTFGXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiXHUwOTJDXHUwOTAyXHUwOTI2XCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkyNlx1MDkzRlx1MDkxNlx1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlx1MDkxRlx1MDk0Mlx1MDkzMlx1MDkyQ1x1MDkzRVx1MDkzMCBcdTA5MkFcdTA5NDhcdTA5MjFcdTA5M0ZcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiXHUwOTBBXHUwOTJBXHUwOTMwXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlx1MDkyNlx1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJcdTA5MjhcdTA5NDBcdTA5MUFcdTA5NDdcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiXHUwOTJDXHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkzOFx1MDk0RFx1MDkyNVx1MDkzRlx1MDkyNFx1MDkzRlwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlx1MDkwQVx1MDkyQVx1MDkzMFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIlx1MDkyOFx1MDk0MFx1MDkxQVx1MDk0N1wiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkyQVx1MDk0M1x1MDkzN1x1MDk0RFx1MDkyMFx1MDkyRFx1MDk0Mlx1MDkyRVx1MDkzRlwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiXHUwOTJDXHUwOTFGXHUwOTI4IFx1MDkyQVx1MDk0M1x1MDkzN1x1MDk0RFx1MDkyMFx1MDkyRFx1MDk0Mlx1MDkyRVx1MDkzRlwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlx1MDkyQ1x1MDkxRlx1MDkyOCBcdTA5MkNcdTA5NDlcdTA5MzBcdTA5NERcdTA5MjFcdTA5MzAgXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJcdTA5MkNcdTA5MUZcdTA5MjggXHUwOTJDXHUwOTQ5XHUwOTMwXHUwOTREXHUwOTIxXHUwOTMwIFx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJcdTA5MkNcdTA5MUZcdTA5MjggXHUwOTFGXHUwOTQ3XHUwOTE1XHUwOTREXHUwOTM4XHUwOTREXHUwOTFGIFx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlx1MDkxRlx1MDk0Mlx1MDkzMlx1MDkyQ1x1MDkzRVx1MDkzMCBcdTA5MzBcdTA5NDBcdTA5MzhcdTA5NDdcdTA5MUZcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwOTI4XHUwOTRCXHUwOTIxIFx1MDkzNlx1MDk0OFx1MDkzMlx1MDk0MFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MjggXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIlx1MDkzMlx1MDkzRVx1MDkwN1x1MDkyOCBcdTA5MUFcdTA5NENcdTA5MjFcdTA5M0NcdTA5M0VcdTA5MDhcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJcdTA5MTVcdTA5MzhcdTA5NERcdTA5MUZcdTA5MkUgXHUwOTM4XHUwOTNFXHUwOTJCXHUwOTNDIFx1MDkxNVx1MDkzMFx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJcdTA5MkNcdTA5NDlcdTA5MzBcdTA5NERcdTA5MjFcdTA5MzAgXHUwOTI0XHUwOTREXHUwOTMwXHUwOTNGXHUwOTFDXHUwOTREXHUwOTJGXHUwOTNFXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MTZcdTA5NEJcdTA5MUNcdTA5NDdcdTA5MDIuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJcdTA5MkVcdTA5NDJcdTA5MzJcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJcdTA5MjhcdTA5MkZcdTA5M0UgXHUwOTJFXHUwOTQyXHUwOTMyXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIlx1MDkxQVx1MDkzRVx1MDkwN1x1MDkzMlx1MDk0RFx1MDkyMVwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogXHUwOTM4XHUwOTQ3XHUwOTFGXHUwOTNGXHUwOTAyXHUwOTE3XHUwOTREXHUwOTM4XCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiXHUwOTJEXHUwOTNFXHUwOTM3XHUwOTNFXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIlx1MDkwN1x1MDkwMlx1MDkxRlx1MDkzMFx1MDkyQlx1MDkzQ1x1MDk0N1x1MDkzOCBcdTA5MkRcdTA5M0VcdTA5MzdcdTA5M0VcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiXHUwOTI1XHUwOTQwXHUwOTJFXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJcdTA5MzBcdTA5MDJcdTA5MTcgXHUwOTI1XHUwOTQwXHUwOTJFXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIlx1MDkzMlx1MDkzRVx1MDkwN1x1MDkxRlwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIlx1MDkyMVx1MDkzRVx1MDkzMFx1MDk0RFx1MDkxNVwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlx1MDkxRlx1MDk0Mlx1MDkzMlx1MDkyQ1x1MDkzRVx1MDkzMCBcdTA5MjZcdTA5M0ZcdTA5MTZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkyNlx1MDkzRlx1MDkxNlx1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJcdTA5MTVcdTA5NDhcdTA5MjhcdTA5MzVcdTA5M0VcdTA5MzggXHUwOTJBXHUwOTQzXHUwOTM3XHUwOTREXHUwOTIwXHUwOTJEXHUwOTQyXHUwOTJFXHUwOTNGXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdTA5MkFcdTA5NDNcdTA5MzdcdTA5NERcdTA5MjBcdTA5MkRcdTA5NDJcdTA5MkVcdTA5M0YgXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1MDkyQVx1MDkzMFx1MDkzRlx1MDkxQVx1MDkyRlwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1MDkzOFx1MDkwMlx1MDkzOFx1MDk0RFx1MDkxNVx1MDkzMFx1MDkyM1wiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHUwOTMyXHUwOTQ3XHUwOTE2XHUwOTE1XCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJPYnNpZGlhbiBcdTA5MTVcdTA5NDcgXHUwOTMyXHUwOTNGXHUwOTBGIFx1MDkxNVx1MDkzOFx1MDk0RFx1MDkxRlx1MDkyRSBcdTA5MzhcdTA5NERcdTA5MUZcdTA5M0VcdTA5MDdcdTA5MzIsIFx1MDkwN1x1MDkwMlx1MDkyNlx1MDk0RFx1MDkzMFx1MDkyN1x1MDkyOFx1MDk0MVx1MDkzNyBcdTA5MTVcdTA5MjhcdTA5NDdcdTA5MTVcdTA5NERcdTA5MzZcdTA5MjgsIFx1MDkyRVx1MDkzMlx1MDk0RFx1MDkxRlx1MDk0MC1cdTA5MzhcdTA5NDdcdTA5MzJcdTA5NDdcdTA5MTVcdTA5NERcdTA5MUYsIFx1MDkyMVx1MDk0RFx1MDkzMFx1MDk0OFx1MDkxNyBcdTA5MEZcdTA5MDJcdTA5MjEgXHUwOTIxXHUwOTREXHUwOTMwXHUwOTQ5XHUwOTJBIFx1MDkxNFx1MDkzMCBNYXJrZG93biBcdTA5MDZcdTA5MkZcdTA5M0VcdTA5MjQvXHUwOTI4XHUwOTNGXHUwOTMwXHUwOTREXHUwOTJGXHUwOTNFXHUwOTI0IFx1MDkxNVx1MDk0NyBcdTA5MzhcdTA5M0VcdTA5MjUgXHUwOTJFXHUwOTNFXHUwOTA3XHUwOTAyXHUwOTIxIFx1MDkyRVx1MDk0OFx1MDkyQSBcdTA5MTBcdTA5MkFcdTA5NjRcIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJcdTA5MDVcdTA5MkFcdTA5MjFcdTA5NDdcdTA5MUZcdTA5NDdcdTA5MjFcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1YiBcdTA5MzBcdTA5M0ZcdTA5MkFcdTA5NDlcdTA5MUNcdTA5M0NcdTA5M0ZcdTA5MUZcdTA5MzBcdTA5NDBcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlx1MDkxM1x1MDkyQVx1MDkyOCBcdTA5MzhcdTA5NEJcdTA5MzBcdTA5NERcdTA5MzggXHUwOTMyXHUwOTQ3XHUwOTE2XHUwOTE1IFx1MDkxNVx1MDkzRSBcdTA5MzhcdTA5MkVcdTA5MzBcdTA5NERcdTA5MjVcdTA5MjggXHUwOTE1XHUwOTMwXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiXHUwOTE1XHUwOTQwXHUwOTJDXHUwOTRCXHUwOTMwXHUwOTREXHUwOTIxIFx1MDkzNlx1MDk0OVx1MDkzMFx1MDk0RFx1MDkxRlx1MDkxNVx1MDkxRlwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJcdTA5MzZcdTA5NDlcdTA5MzBcdTA5NERcdTA5MUZcdTA5MTVcdTA5MUYgXHUwOTA1XHUwOTI4XHUwOTQxXHUwOTE1XHUwOTQyXHUwOTMyXHUwOTNGXHUwOTI0IFx1MDkxNVx1MDkzMFx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJcdTA5MjhcdTA5NEJcdTA5MjEgXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTNGXHUwOTI0IFx1MDkxNVx1MDkzMFx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJcdTA5MzhcdTA5M0ZcdTA5MkNcdTA5MzJcdTA5M0ZcdTA5MDJcdTA5MTcgXHUwOTFDXHUwOTRCXHUwOTIxXHUwOTNDXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJcdTA5MUFcdTA5M0VcdTA5MDdcdTA5MzJcdTA5NERcdTA5MjEgXHUwOTFDXHUwOTRCXHUwOTIxXHUwOTNDXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdTA5MjhcdTA5NEJcdTA5MjEgXHUwOTJBXHUwOTMwIFx1MDkyQlx1MDkzQ1x1MDk0Qlx1MDkxNVx1MDkzOFwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTA5MkFcdTA5NDJcdTA5MzBcdTA5NERcdTA5MzVcdTA5MzVcdTA5MjRcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHUwOTJCXHUwOTNGXHUwOTMwIFx1MDkzOFx1MDk0N1wiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1MDkzMlx1MDkzRVx1MDkwN1x1MDkyOCBcdTA5MkNcdTA5NERcdTA5MzBcdTA5NDdcdTA5MTUgKFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOCBcdTA5MkVcdTA5NDdcdTA5MDIpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlx1MDkxNVx1MDk0OFx1MDkyOFx1MDkzNVx1MDkzRVx1MDkzOCBcdTA5MTZcdTA5NDBcdTA5MDJcdTA5MUFcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTA5MUNcdTA5M0NcdTA5NDJcdTA5MkUgXHUwOTA3XHUwOTI4XCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlx1MDkxQ1x1MDkzQ1x1MDk0Mlx1MDkyRSBcdTA5MDZcdTA5MDlcdTA5MUZcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJcdTA5MUNcdTA5M0NcdTA5NDJcdTA5MkUgXHUwOTMwXHUwOTQwXHUwOTM4XHUwOTQ3XHUwOTFGXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJcdTA5MEFcdTA5MkFcdTA5MzBcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiXHUwOTI4XHUwOTQwXHUwOTFBXHUwOTQ3XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1MDkyQ1x1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiXHUwOTI2XHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJcdTA5MTVcdTA5NDFcdTA5MDJcdTA5MUNcdTA5NDAgXHUwOTI2XHUwOTJDXHUwOTNFXHUwOTBGXHUwOTAyLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJcdTA5MzhcdTA5NERcdTA5MTVcdTA5NERcdTA5MzBcdTA5NDlcdTA5MzIgXHUwOTE0XHUwOTMwIFx1MDkxQ1x1MDkzQ1x1MDk0Mlx1MDkyRVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIlx1MDkzNVx1MDkzMFx1MDk0RFx1MDkxRlx1MDkzRlx1MDkxNVx1MDkzMiBcdTA5MzhcdTA5NERcdTA5MTVcdTA5NERcdTA5MzBcdTA5NDlcdTA5MzIgXHUwOTA5XHUwOTMyXHUwOTFGXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiXHUwOTM5XHUwOTQ5XHUwOTMwXHUwOTNGXHUwOTFDXHUwOTNDXHUwOTQ5XHUwOTI4XHUwOTREXHUwOTFGXHUwOTMyIFx1MDkzOFx1MDk0RFx1MDkxNVx1MDk0RFx1MDkzMFx1MDk0OVx1MDkzMiBcdTA5MDlcdTA5MzJcdTA5MUZcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJcdTA5MUNcdTA5M0NcdTA5NDJcdTA5MkUgXHUwOTI2XHUwOTNGXHUwOTM2XHUwOTNFIFx1MDkwOVx1MDkzMlx1MDkxRlx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiXHUwOTJDXHUwOTI4XHUwOTNFXHUwOTI0XHUwOTQ3IFx1MDkzOFx1MDkyRVx1MDkyRiBcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5MjhcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJcdTA5MjhcdTA5MEYgXHUwOTI4XHUwOTRCXHUwOTIxIFx1MDkyQ1x1MDkyOFx1MDkzRVx1MDkyNFx1MDk0NyBcdTA5MzhcdTA5MkVcdTA5MkYgXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTI4IFx1MDkyRVx1MDk0Qlx1MDkyMVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJcdTA5MkVcdTA5NDJcdTA5MzIgXHUwOTI4XHUwOTNFXHUwOTJFXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJcdTA5MjhcdTA5MEYgXHUwOTJFXHUwOTQyXHUwOTMyIFx1MDkxNVx1MDkzRSBcdTA5MjFcdTA5M0ZcdTA5MkJcdTA5M0NcdTA5NDlcdTA5MzJcdTA5NERcdTA5MUYgXHUwOTI4XHUwOTNFXHUwOTJFXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJcdTA5MUFcdTA5M0VcdTA5MDdcdTA5MzJcdTA5NERcdTA5MjEgXHUwOTI4XHUwOTNFXHUwOTJFXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiXHUwOTI4XHUwOTBGIFx1MDkxQVx1MDkzRVx1MDkwN1x1MDkzMlx1MDk0RFx1MDkyMSBcdTA5MTVcdTA5M0UgXHUwOTIxXHUwOTNGXHUwOTJCXHUwOTNDXHUwOTQ5XHUwOTMyXHUwOTREXHUwOTFGIFx1MDkyOFx1MDkzRVx1MDkyRVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlx1MDkxRlx1MDkzRVx1MDkwN1x1MDkyQSBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDIgXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTI4XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlx1MDkxQVx1MDkyRlx1MDkyOFx1MDkzRlx1MDkyNCBcdTA5MjhcdTA5NEJcdTA5MjEgXHUwOTJBXHUwOTMwIFx1MDkxRlx1MDkzRVx1MDkwN1x1MDkyQSBcdTA5MTVcdTA5MzBcdTA5MTVcdTA5NDcgXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTI4XCIsXHJcbn07XHJcblxyXG5jb25zdCBfa286IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgXHVCOEU4XHVEMkI4XCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgXHVDMkU0XHVENTg5XHVDREU4XHVDMThDXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgXHVCMkU0XHVDMkRDXHVDMkU0XHVENTg5XCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBcdUI5RjVcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHVDMkE0XHVEMEMwXHVDNzdDXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiXHVEM0VDXHVDRUU0XHVDMkE0XCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlx1QUM4MFx1QzBDOVwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlx1QUM4MFx1QzBDOSB8IFNwYWNlOlx1RDNCOFx1QzlEMSB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1QzBDOCBcdUI4RThcdUQyQjhcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24gXHVCQUE4XHVCNERDXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHVDMkE0XHVEMEMwXHVDNzdDIFx1RDMyOFx1QjExMFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1QjE3OFx1QjREQyBcdUQzRUNcdUNFRTRcdUMyQTRcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiXHVCMTc4XHVCNERDIFx1QUM4MFx1QzBDOVwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIlx1QzEyNFx1QzgxNVwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJcdUQ2NTVcdUIzMDBcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlx1Q0Q5NVx1QzE4Q1wiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBcdUMwQUNcdUM2QTlcdUM3OTAgXHVDODE1XHVDNzU4XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdUM3N0NcdUFEMDQgXHVDMEFEXHVDODFDXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHVDMkE0XHVEMEMwXHVDNzdDIFx1RDNCOFx1QzlEMVwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBcdUMwQzggXHVCOEU4XHVEMkI4XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1QzJFNFx1RDU4OVx1Q0RFOFx1QzE4Q1wiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBcdUIyRTRcdUMyRENcdUMyRTRcdUQ1ODlcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1QzgwNFx1QzVFRCBcdUMyQTRcdUQwQzBcdUM3N0NcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHVEM0I4XHVDOUQxXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdUMyQTRcdUQwQzBcdUM3N0NcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgXHVCQ0Y1XHVDMEFDXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgXHVDNzk4XHVCNzdDXHVCMEI0XHVBRTMwXCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBcdUJEOTlcdUM1RUNcdUIxMjNcdUFFMzBcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IFx1Qzc5MFx1QzJERFwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFx1QzY3Q1x1Q0FCRCBcdUM3OTBcdUMyRERcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgXHVENjE1XHVDODFDXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHVDMEFEXHVDODFDXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUMyMjhcdUFFMzBcdUFFMzBcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHVDODA0XHVDNUVEIFx1QzJBNFx1RDBDMFx1Qzc3Q1wiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIlx1Qzc5MFx1QzJERCBcdUIxNzhcdUI0RENcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlx1QjhFOFx1RDJCOCBcdUIxNzhcdUI0RENcIixcclxuICAgIFwic20uYmdcIjogXCJcdUJDMzBcdUFDQkRcIixcclxuICAgIFwic20udGV4dFwiOiBcIlx1RDE0RFx1QzJBNFx1RDJCOCBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJcdUFFMDBcdUFGMzQgXHVEMDZDXHVBRTMwXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJcdUFFMDBcdUFGMzRcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJcdUQxNENcdUI0NTBcdUI5QUMgXHVDMkE0XHVEMEMwXHVDNzdDXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiXHVEMTRDXHVCNDUwXHVCOUFDIFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlx1RDE0Q1x1QjQ1MFx1QjlBQyBcdUIxMDhcdUJFNDRcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiXHVEMTRDXHVCNDUwXHVCOUFDIFx1QkMxOFx1QUNCRFwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIlx1Q0Q1Q1x1QzE4QyBcdUIxMDhcdUJFNDRcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiXHVDRDVDXHVDMThDIFx1QjE5Mlx1Qzc3NFwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiXHVDNUYwXHVBQ0IwXHVDMTIwXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJcdUM3MjBcdUQ2MTVcIixcclxuICAgIFwic20uY29sb3JcIjogXCJcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJcdUIxMDhcdUJFNDRcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIlx1QUUzOFx1Qzc3NFwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFx1QjgwOFx1Qzc3OFx1QkNGNFx1QzZCMFwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiXHVCMTc4XHVCNERDIFx1QkMyOVx1RDVBNVwiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIlx1RDYxNVx1QzgxQyBcdUFDMDRcdUFDQTlcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdUM2MjRcdUI5NzhcdUNBQkRcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1QzY3Q1x1Q0FCRFwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHVDNTkxXHVDQUJEXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHVEMzE0XHVCODA4XHVEMkI4XCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlx1QzEyMFx1RDBERFwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlx1QzEyMFx1RDBERCBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJcdUMxMjBcdUQwREQgXHVCMTA4XHVCRTQ0XCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1QzcyNFx1QUNGRFx1QzEyMCBcdUM2MjRcdUQ1MDRcdUMxNEJcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJcdUQzQjhcdUM5RDEgXHVDNzI0XHVBQ0ZEXHVDMTIwIFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiXHVEM0I4XHVDOUQxIFx1QzcyNFx1QUNGRFx1QzEyMCBcdUIxMDhcdUJFNDRcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiXHVEMTREXHVDMkE0XHVEMkI4IFx1QzgxNVx1QjgyQ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1RDE0RFx1QzJBNFx1RDJCOCBcdUQzMjhcdUI1MjlcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJcdUM5MDQgXHVCMTkyXHVDNzc0XCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHVDRTk0XHVCQzg0XHVDMkE0IFx1QkMzMFx1QUNCRFwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1Q0QwOFx1QUUzMFx1RDY1NFwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlx1QjJFQlx1QUUzMFwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUQ0NUNcdUMyRENcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVEMzI4XHVCNTI5XCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1QzcwNFwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdUM2MjRcdUI5NzhcdUNBQkRcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHVDNTQ0XHVCNzk4XCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1QzY3Q1x1Q0FCRFwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUM3MDRcdUNFNThcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdUM3MDRcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdUM1NDRcdUI3OThcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUJDMzBcdUFDQkRcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1QkM4NFx1RDJCQyBcdUJDMzBcdUFDQkRcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdUJDODRcdUQyQkMgXHVEMTRDXHVCNDUwXHVCOUFDIFx1QzJBNFx1RDBDMFx1Qzc3Q1wiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHVCQzg0XHVEMkJDIFx1RDE0Q1x1QjQ1MFx1QjlBQyBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHVCQzg0XHVEMkJDIFx1RDE0RFx1QzJBNFx1RDJCOCBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVDRDA4XHVBRTMwXHVENjU0XCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1QjE3OFx1QjREQyBcdUMyQTRcdUQwQzBcdUM3N0NcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiXHVDMTIwIFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdUMxMjAgXHVCMTA4XHVCRTQ0XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHVDMEFDXHVDNkE5XHVDNzkwIFx1QzgxNVx1Qzc1OCBcdUM5QzBcdUM2QjBcdUFFMzBcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHVEMTRDXHVCNDUwXHVCOUFDIFx1QkMxOFx1QUNCRFwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJcdUIxNzhcdUI0REMgXHVBQzgwXHVDMEM5Li4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiXHVCOEU4XHVEMkI4XCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiXHVDMEM4IFx1QjhFOFx1RDJCOFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJcdUM3OTBcdUMyRERcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIFx1QzEyNFx1QzgxNVwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlx1QzVCOFx1QzVCNFwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJcdUM3NzhcdUQxMzBcdUQzOThcdUM3NzRcdUMyQTQgXHVDNUI4XHVDNUI0XCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlx1RDE0Q1x1QjlDOFwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiXHVDMEM5XHVDMEMxIFx1RDE0Q1x1QjlDOFwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJcdUJDMURcdUFDOENcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJcdUM1QjRcdUI0NjFcdUFDOENcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVENDVDXHVDMkRDXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUQ0NUNcdUMyRENcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiXHVDRTk0XHVCQzg0XHVDMkE0IFx1QkMzMFx1QUNCRFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiXHVCQzMwXHVBQ0JEIFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdUM4MTVcdUJDRjRcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdUJDODRcdUM4MDRcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1Qzc5MVx1QzEzMVx1Qzc5MFwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiT2JzaWRpYW5cdUM2QTkgXHVDNjI0XHVENTA4IFx1QzE4Q1x1QzJBNCBcdUI5QzhcdUM3NzhcdUI0RENcdUI5RjUgXHVDNTcxLiBcdUNFRTRcdUMyQTRcdUQxNDAgXHVDMkE0XHVEMEMwXHVDNzdDLCBcdUI4MDhcdUM3NzhcdUJDRjRcdUM2QjAgXHVDNUYwXHVBQ0IwLCBcdUIyRTRcdUM5MTEgXHVDMTIwXHVEMERELCBcdUI0RENcdUI3OThcdUFERjggXHVDNTY0IFx1QjREQ1x1Qjg2RCwgTWFya2Rvd24gXHVDOUMwXHVDNkQwLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1QzVDNVx1QjM3MFx1Qzc3NFx1RDJCOFwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViIFx1QzgwMFx1QzdBNVx1QzE4Q1wiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiXHVDNjI0XHVENTA4XHVDMThDXHVDMkE0IFx1Qzc5MVx1QUMwMCBcdUQ2QzRcdUM2RDBcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJcdUQwQTRcdUJDRjRcdUI0REMgXHVCMkU4XHVDRDk1XHVEMEE0XCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1QjJFOFx1Q0Q5NVx1RDBBNCBcdUMwQUNcdUM2QTlcdUM3OTAgXHVDODE1XHVDNzU4XCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1QjE3OFx1QjREQyBcdUQzQjhcdUM5RDFcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHVENjE1XHVDODFDIFx1Q0Q5NFx1QUMwMFwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHVDNzkwXHVDMkREIFx1Q0Q5NFx1QUMwMFwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiXHVCMTc4XHVCNERDIFx1RDNFQ1x1Q0VFNFx1QzJBNFwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdUMyRTRcdUQ1ODlcdUNERThcdUMxOENcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHVCMkU0XHVDMkRDXHVDMkU0XHVENTg5XCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiXHVDOTA0XHVCQzE0XHVBRkM4IChcdUQzQjhcdUM5RDEgXHVDOTExKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJcdUNFOTRcdUJDODRcdUMyQTQgXHVCNERDXHVCNzk4XHVBREY4XCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiXHVENjU1XHVCMzAwXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlx1Q0Q5NVx1QzE4Q1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1RDY1NVx1QjMwMC9cdUNEOTVcdUMxOEMgXHVDRDA4XHVBRTMwXHVENjU0XCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJcdUM3MDRcdUI4NUNcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiXHVDNTQ0XHVCNzk4XHVCODVDXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1QzY3Q1x1Q0FCRFx1QzczQ1x1Qjg1Q1wiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiXHVDNjI0XHVCOTc4XHVDQUJEXHVDNzNDXHVCODVDXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJcdUQwQTRcdUI5N0MgXHVCMjA0XHVCOTc0XHVDMTM4XHVDNjk0Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJcdUMyQTRcdUQwNkNcdUI4NjQgXHVCQzBGIFx1RDY1NVx1QjMwMC9cdUNEOTVcdUMxOENcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdUMxMzhcdUI4NUMgXHVDMkE0XHVEMDZDXHVCODY0IFx1QkMxOFx1QzgwNFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1QUMwMFx1Qjg1QyBcdUMyQTRcdUQwNkNcdUI4NjQgXHVCQzE4XHVDODA0XCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiXHVENjU1XHVCMzAwL1x1Q0Q5NVx1QzE4QyBcdUJDMThcdUM4MDRcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIlx1QzBERFx1QzEzMSBcdUMyREMgXHVEM0I4XHVDOUQxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHVDMEM4IFx1QjE3OFx1QjREQyBcdUMwRERcdUMxMzEgXHVDMkRDIFx1RDNCOFx1QzlEMSBcdUJBQThcdUI0RENcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHVCOEU4XHVEMkI4IFx1Qzc3NFx1Qjk4NFwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHVDMEM4IFx1QjhFOFx1RDJCOFx1Qzc1OCBcdUFFMzBcdUJDRjggXHVDNzc0XHVCOTg0XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJcdUM3OTBcdUMyREQgXHVDNzc0XHVCOTg0XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiXHVDMEM4IFx1Qzc5MFx1QzJERFx1Qzc1OCBcdUFFMzBcdUJDRjggXHVDNzc0XHVCOTg0XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHVDNzg1XHVCODI1XHVENTU4XHVDNUVDIFx1RDNCOFx1QzlEMVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdUIxNzhcdUI0REMgXHVDMTIwXHVEMEREIFx1QzJEQyBcdUQwQTQgXHVDNzg1XHVCODI1XHVDNzNDXHVCODVDIFx1RDNCOFx1QzlEMVwiLFxyXG59O1xyXG5cclxuY29uc3QgX3B0OiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJhaXpcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBEZXNmYXplclwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJlZmF6ZXJcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIE1hcGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRm9jYXJcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiUGVzcXVpc2FyXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6UGVzcXVpc2FyIHwgRXNwYVx1MDBFN286RWRpdGFyIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTm92YSByYWl6XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1vZG8gTWFya2Rvd25cIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJQYWluZWwgZGUgZXN0aWxvXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiRm9jYXIgbm8gblx1MDBGM1wiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJQZXNxdWlzYXIgblx1MDBGM3NcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJDb25maWd1cmFcdTAwRTdcdTAwRjVlc1wiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJBbXBsaWFyXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJSZWR1emlyXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFBlcnNvbmFsaXphZG9cIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEV4Y2x1aXIgZW0gbG90ZVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEVkaXRhciBlc3RpbG9cIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTm92YSByYWl6XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IERlc2ZhemVyXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFJlZmF6ZXJcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsbyBnbG9iYWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgRWRpdGFyXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG9cIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgQ29waWFyXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgUmVjb3J0YXJcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIENvbGFyXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBGaWxob1wiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IEZpbGhvIGVzcXVlcmRvXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IElybVx1MDBFM29cIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBFeGNsdWlyXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIk9jdWx0YXIgYmFycmFcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvIGdsb2JhbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIk5cdTAwRjMgZmlsaG9cIixcclxuICAgIFwic20ucm9vdFwiOiBcIk5cdTAwRjMgcmFpelwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkZ1bmRvXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJDb3IgZG8gdGV4dG9cIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJUYW1hbmhvIGRhIGZvbnRlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJGb250ZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIkVzdGlsbyBkYSBib3JkYVwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkNvciBkYSBib3JkYVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkxhcmd1cmEgZGEgYm9yZGFcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiUmFpbyBkYSBib3JkYVwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIkxhcmd1cmEgbVx1MDBFRG4uXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIkFsdHVyYSBtXHUwMEVEbi5cIixcclxuICAgIFwic20uY29ublwiOiBcIkNvbmV4XHUwMEUzb1wiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiVGlwb1wiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkNvclwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkxhcmd1cmFcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkNvbXByaW1lbnRvXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggQXJjby1cdTAwRURyaXNcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIkRpcmVcdTAwRTdcdTAwRTNvXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiRXNwYVx1MDBFN2FtZW50byBlbnRyZSBpcm1cdTAwRTNvc1wiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIkRpcmVpdGFcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIkVzcXVlcmRhXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJBbWJvc1wiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0YVwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJTZWxlXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIkNvciBkZSBzZWxlXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIkxhcmd1cmEgZGUgc2VsZVx1MDBFN1x1MDBFM29cIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiRGVzbG9jYW1lbnRvIGRvIGNvbnRvcm5vXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiQ29yIGNvbnRvcm5vIGVkaVx1MDBFN1x1MDBFM29cIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkxhcmd1cmEgY29udG9ybm8gZWRpXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJBbGluaGFtZW50b1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlByZWVuY2hpbWVudG8gdGV4dG9cIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJBbHR1cmEgZGEgbGluaGFcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJGdW5kbyBkYSB0ZWxhXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiUmVkZWZpbmlyXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiRmVjaGFyXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiTW9zdHJhciBiYXJyYVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlByZWVuY2hpbWVudG8gYmFycmFcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiQ2ltYVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJEaXJlaXRhXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkJhaXhvXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIkVzcXVlcmRhXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiUG9zaVx1MDBFN1x1MDBFM28gYmFycmFcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJUb3BvXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiRnVuZG9cIixcclxuICAgIFwic20udGJCZ1wiOiBcIkZ1bmRvIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJGdW5kbyBib3RcdTAwRTNvXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiRXN0aWxvIGJvcmRhIGJvdFx1MDBFM29cIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIkNvciBib3JkYSBib3RcdTAwRTNvXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIkNvciB0ZXh0byBib3RcdTAwRTNvXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUmVkZWZpbmlyIGJhcnJhXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsbyBkbyBuXHUwMEYzXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkNvciBkYSBsaW5oYVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMYXJndXJhIGRhIGxpbmhhXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiTGltcGFyIHBlcnNvbmFsaXphXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJSYWlvIGRhIGJvcmRhXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlBlc3F1aXNhciBuXHUwMEYzcy4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJhaXpcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOb3ZhIHJhaXpcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiRmlsaG9cIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiQ29uZmlndXJhXHUwMEU3XHUwMEY1ZXMgTWluZFpKXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiSWRpb21hXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIklkaW9tYSBkYSBpbnRlcmZhY2VcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiVGVtYSBkZSBjb3JcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiQ2xhcm9cIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJFc2N1cm9cIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJNb3N0cmFyIGJhcnJhXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIk1vc3RyYXIgYmFycmFcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiRnVuZG8gZGEgdGVsYVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQ29yIGRlIGZ1bmRvXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlNvYnJlXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc1x1MDBFM29cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkF1dG9yXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJBcHAgZGUgbWFwYSBtZW50YWwgZGUgY1x1MDBGM2RpZ28gYWJlcnRvIHBhcmEgT2JzaWRpYW4gY29tIGVzdGlsb3MgcGVyc29uYWxpemFkb3MsIGNvbmV4XHUwMEY1ZXMgYXJjby1cdTAwRURyaXMsIHNlbGVcdTAwRTdcdTAwRTNvIG1cdTAwRkFsdGlwbGEsIGFycmFzdGFyIGUgc29sdGFyIGUgTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiQXR1YWxpemFkb1wiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiUmVwb3NpdFx1MDBGM3JpbyBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIkFwb2lhciBvIGF1dG9yXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiQXRhbGhvcyBkZSB0ZWNsYWRvXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlBlcnNvbmFsaXphciBhdGFsaG9zXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIkVkaXRhciBuXHUwMEYzXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkFkaWNpb25hciBpcm1cdTAwRTNvXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJBZGljaW9uYXIgZmlsaG9cIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZvY2FyIG5vIG5cdTAwRjNcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiRGVzZmF6ZXJcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiUmVmYXplclwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlF1ZWJyYSBkZSBsaW5oYSAoZWRpXHUwMEU3XHUwMEUzbylcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiQXJyYXN0YXIgdGVsYVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIkFtcGxpYXJcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiUmVkdXppclwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlJlZGVmaW5pciB6b29tXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJDaW1hXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIkJhaXhvXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIkVzcXVlcmRhXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJEaXJlaXRhXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJQcmVzc2lvbmUuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlJvbGFnZW0gZSB6b29tXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiSW52ZXJ0ZXIgcm9sYWdlbSBWXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJ0ZXIgcm9sYWdlbSBIXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiSW52ZXJ0ZXIgem9vbVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiRWRpdGFyIGFvIGNyaWFyXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiTW9kbyBlZGlcdTAwRTdcdTAwRTNvIGFvIGNyaWFyIG5cdTAwRjNzXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIk5vbWUgZGEgcmFpelwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiTm9tZSBwYWRyXHUwMEUzbyBwYXJhIHJhXHUwMEVEemVzXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJOb21lIGRvIGZpbGhvXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiTm9tZSBwYWRyXHUwMEUzbyBwYXJhIGZpbGhvc1wiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIkRpZ2l0YXIgcGFyYSBlZGl0YXJcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiRWRpdGFyIGFvIGRpZ2l0YXIgY29tIG5cdTAwRjMgc2VsZWNpb25hZG9cIixcclxufTtcclxuXHJcbmNvbnN0IF9maTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBKdXVyaVwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IEt1bW9hXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgVGVlIHV1ZGVsbGVlblwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgS2FydHRhXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFR5eWxpXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiS29oZGlzdGFcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiSGFrdVwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOkhha3UgfCBWXHUwMEU0bGlseVx1MDBGNm50aTpNdW9ra2FhIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiVXVzaSBqdXVyaVwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93bi10aWxhXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiVHl5bGlwYW5lZWxpXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiS29oZGlzdGEgc29sbXV1blwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJFdHNpIHNvbG11amFcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJBc2V0dWtzZXRcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiTFx1MDBFNGhlbm5cdTAwRTRcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIkxvaXRvbm5hXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIE11a2F1dGV0dHVcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFBvaXN0YSBrYWlra2lcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBNdW9ra2FhIHR5eWxpXHUwMEU0XCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFV1c2kganV1cmlcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgS3Vtb2FcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgVGVlIHV1ZGVsbGVlblwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggWWxlaW5lbiB0eXlsaVwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBNdW9ra2FhXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBUeXlsaVwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBLb3Bpb2lcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBMZWlra2FhXCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBMaWl0XHUwMEU0XCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBMYXBzaVwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFZhc2VuIGxhcHNpXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFNpc2FydXNcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBQb2lzdGFcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiUGlpbG90YSBwYWxra2lcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggWWxlaW5lbiB0eXlsaVwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIkxhcHNpc29sbXVcIixcclxuICAgIFwic20ucm9vdFwiOiBcIkp1dXJpc29sbXVcIixcclxuICAgIFwic20uYmdcIjogXCJUYXVzdGFcIixcclxuICAgIFwic20udGV4dFwiOiBcIlRla3N0aW4gdlx1MDBFNHJpXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiRm9udHRpa29rb1wiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiRm9udHRpXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiUmV1bmFuIHR5eWxpXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiUmV1bmFuIHZcdTAwRTRyaVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlJldW5hbiBsZXZleXNcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiUmV1bmFuIHB5XHUwMEY2cmlzdHlzXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiVlx1MDBFNGhpbW1cdTAwRTRpc2xldmV5c1wiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJWXHUwMEU0aGltbVx1MDBFNGlza29ya2V1c1wiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiWWh0ZXlzXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXlwcGlcIixcclxuICAgIFwic20uY29sb3JcIjogXCJWXHUwMEU0cmlcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJMZXZleXNcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIlBpdHV1c1wiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFNhdGVlbmthYXJpXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJTb2xtdW4gc3V1bnRhXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiU2lzYXJ1c3ZcdTAwRTRsaVwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIk9pa2VhXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJWYXNlblwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiTW9sZW1tYXRcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldHRpXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlZhbGludGFcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJWYWxpbm5hbiB2XHUwMEU0cmlcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJWYWxpbm5hbiBsZXZleXNcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiXHUwMEM0XHUwMEU0cml2aWl2YW4gc2lpcnR5bVx1MDBFNFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIk11b2trYXVrc2VuIFx1MDBFNFx1MDBFNHJpdmlpdmFuIHZcdTAwRTRyaVwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiTXVva2thdWtzZW4gXHUwMEU0XHUwMEU0cml2aWl2YW4gbGV2ZXlzXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRla3N0aW4gdGFzYXVzXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGVrc3RpbiB0XHUwMEU0eXRlXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiUml2aW4ga29ya2V1c1wiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkthbmthYW4gdGF1c3RhXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiUGFsYXV0YVwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlN1bGplXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiTlx1MDBFNHl0XHUwMEU0IHBhbGtraVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlBhbGtpbiB0XHUwMEU0eXRlXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIllsXHUwMEU0XCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIk9pa2VhXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkFsYVwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJWYXNlblwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlBhbGtpbiBzaWphaW50aVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIllsaFx1MDBFNFx1MDBFNGxsXHUwMEU0XCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiQWxoYWFsbGFcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlBhbGtpbiB0YXVzdGFcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlBhaW5pa2tlZW4gdGF1c3RhXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiUGFpbmlra2VlbiByZXVuYW4gdHl5bGlcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlBhaW5pa2tlZW4gcmV1bmFuIHZcdTAwRTRyaVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJQYWluaWtrZWVuIHRla3N0aW4gdlx1MDBFNHJpXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUGFsYXV0YSBwYWxra2lcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggU29sbXVuIHR5eWxpXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlZpaXZhbiB2XHUwMEU0cmlcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiVmlpdmFuIGxldmV5c1wiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlR5aGplbm5cdTAwRTQgbXVrYXV0dXNcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmV1bmFuIHB5XHUwMEY2cmlzdHlzXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIkV0c2kgc29sbXVqYS4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIkp1dXJpXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiVXVzaSBqdXVyaVwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJMYXBzaVwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogQXNldHVrc2V0XCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiS2llbGlcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiS1x1MDBFNHl0dFx1MDBGNmxpaXR0eW1cdTAwRTRuIGtpZWxpXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRlZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJWXHUwMEU0cml0ZWVtYVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJWYWFsZWFcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJUdW1tYVwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIk5cdTAwRTR5dFx1MDBFNCBwYWxra2lcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiTlx1MDBFNHl0XHUwMEU0IHBhbGtraVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJLYW5rYWFuIHRhdXN0YVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiVGF1c3Rhdlx1MDBFNHJpXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlRpZXRvamFcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaW9cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlRla2lqXHUwMEU0XCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJPYnNpZGlhbmluIG1vbmlwdW9saW5lbiBhdm9pbWVuIGxcdTAwRTRoZGVrb29kaW4gbWllbGxla2FydHRhc292ZWxsdXMgbXVrYXV0ZXR1aWxsYSB0eXlsZWlsbFx1MDBFNCwgc2F0ZWVua2Fhcml2aWl2b2lsbGEgamEgTWFya2Rvd24tdHVlbGxhLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlBcdTAwRTRpdml0ZXR0eVwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViLXZhcmFzdG9cIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlR1ZSB0ZWtpalx1MDBFNFx1MDBFNFwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlBpa2FuXHUwMEU0cHBcdTAwRTRpbWV0XCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIk11b2trYWEgcGlrYW5cdTAwRTRwcFx1MDBFNGltaVx1MDBFNFwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJNdW9ra2FhIHNvbG11YVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJMaXNcdTAwRTRcdTAwRTQgc2lzYXJ1c1wiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiTGlzXHUwMEU0XHUwMEU0IGxhcHNpXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJLb2hkaXN0YSBzb2xtdXVuXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIkt1bW9hXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlRlZSB1dWRlbGxlZW5cIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJSaXZpbnZhaWh0byAobXVva2thdWtzZXNzYSlcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiVmVkXHUwMEU0IGthbmdhc3RhXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiTFx1MDBFNGhlbm5cdTAwRTRcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiTG9pdG9ubmFcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJOb2xsYWEgem9vbWF1c1wiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiWWxcdTAwRjZzXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIkFsYXNcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiVmFzZW1tYWxsZVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiT2lrZWFsbGVcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlBhaW5hIG5cdTAwRTRwcFx1MDBFNGludFx1MDBFNC4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiVmllcml0eXMgamEgem9vbWF1c1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIktcdTAwRTRcdTAwRTRublx1MDBFNCBWLXZpZXJpdHlzXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiS1x1MDBFNFx1MDBFNG5uXHUwMEU0IEgtdmllcml0eXNcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJLXHUwMEU0XHUwMEU0bm5cdTAwRTQgem9vbWF1c1wiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiTXVva2thYSBsdW90YWVzc2FcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJNdW9ra2F1c3RpbGEgdXVzaWxsZSBzb2xtdWlsbGVcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiSnV1cmVuIG5pbWlcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlV1c2llbiBqdXVyaWVuIG9sZXR1c25pbWlcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIkxhcHNlbiBuaW1pXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiVXVzaWVuIGxhc3RlbiBvbGV0dXNuaW1pXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiS2lyam9pdGEgbXVva2F0YWtzZXNpXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlBhaW5hIG5cdTAwRTRwcFx1MDBFNGludFx1MDBFNCBtdW9rYXRha3Nlc2kgdmFsaXR0dWEgc29sbXVhXCIsXHJcbn07XHJcblxyXG5jb25zdCBfbm86IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUm90XCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgQW5ncmVcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBHalx1MDBGOHIgb21cIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIEthcnRcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZva3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlNcdTAwRjhrXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6U1x1MDBGOGsgfCBNZWxsb21yb206UmVkaWdlciB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk55IHJvdFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93bi1tb2R1c1wiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlN0aWxwYW5lbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZva3VzZXIgbm9kZVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJTXHUwMEY4ayBub2RlclwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIklubnN0aWxsaW5nZXJcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiWm9vbSBpbm5cIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlpvb20gdXRcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgRWdlbmRlZmluZXJ0XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTbGV0dCBhbGxlXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggUmVkaWdlciBzdGlsXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE55IHJvdFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBBbmdyZVwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBHalx1MDBGOHIgb21cIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBzdGlsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFJlZGlnZXJcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgS29waWVyXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgS2xpcHAgdXRcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIExpbSBpbm5cIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IEJhcm5cIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBWZW5zdHJlIGJhcm5cIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgU1x1MDBGOHNrZW5cIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTbGV0dFwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJTa2p1bCB2ZXJrdFx1MDBGOHlsaW5qZVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWwgc3RpbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIkJhcm5lbm9kZVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiUm90bm9kZVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkJha2dydW5uXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZWtzdGZhcmdlXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiU2tyaWZ0c3RcdTAwRjhycmVsc2VcIixcclxuICAgIFwic20uZm9udFwiOiBcIlNrcmlmdHR5cGVcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJLYW50c3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkthbnRmYXJnZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkthbnRicmVkZGVcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGl1c1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbi4gYnJlZGRlXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIk1pbi4gaFx1MDBGOHlkZVwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiRm9yYmluZGVsc2VcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cGVcIixcclxuICAgIFwic20uY29sb3JcIjogXCJGYXJnZVwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkJyZWRkZVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTGVuZ2RlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmVnbmJ1ZVwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiTm9kZXJldG5pbmdcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTXHUwMEY4c2tlbmF2c3RhbmRcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJIXHUwMEY4eXJlXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJWZW5zdHJlXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCZWdnZVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJWYWxnXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiVmFsZ2ZhcmdlXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiVmFsZ2JyZWRkZVwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJLb250dXJmb3Jza3l2bmluZ1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlJlZGlnZXJpbmdza29udHVyXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJSZWRpZ2VyaW5nc2tvbnR1cmJyZWRkZVwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJUZWtzdGp1c3RlcmluZ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRla3N0dXRmeWxsaW5nXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiTGluamVoXHUwMEY4eWRlXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiTGVycmV0c2Jha2dydW5uXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiVGlsYmFrZXN0aWxsXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiTHVra1wiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlZpcyB2ZXJrdFx1MDBGOHlsaW5qZVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlZlcmt0XHUwMEY4eWxpbmpldXRmeWxsaW5nXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlRvcHBcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiSFx1MDBGOHlyZVwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJCdW5uXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlZlbnN0cmVcIixcclxuICAgIFwic20udGJQb3NcIjogXCJWZXJrdFx1MDBGOHlsaW5qZXBvc2lzam9uXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiVG9wcFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIkJ1bm5cIixcclxuICAgIFwic20udGJCZ1wiOiBcIlZlcmt0XHUwMEY4eWxpbmplYmFrZ3J1bm5cIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIktuYXBwYmFrZ3J1bm5cIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJLbmFwcGthbnRzdGlsXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJLbmFwcGthbnRmYXJnZVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJLbmFwcHRla3N0ZmFyZ2VcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJUaWxiYWtlc3RpbGwgdmVya3RcdTAwRjh5bGluamVcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggTm9kZXN0aWxcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiTGluamVmYXJnZVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMaW5qZWJyZWRkZVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkZqZXJuIHRpbHBhc25pbmdcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGl1c1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJTXHUwMEY4ayBub2Rlci4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJvdFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk55IHJvdFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJCYXJuXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBJbm5zdGlsbGluZ2VyXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3ByXHUwMEU1a1wiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJHcmVuc2Vzbml0dHNwclx1MDBFNWtcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiRmFyZ2V0ZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkx5c3RcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJNXHUwMEY4cmt0XCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiVmlzIHZlcmt0XHUwMEY4eWxpbmplXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlZpcyB2ZXJrdFx1MDBGOHlsaW5qZVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJMZXJyZXRzYmFrZ3J1bm5cIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkJha2dydW5uc2ZhcmdlXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIk9tXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2pvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiRm9yZmF0dGVyXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJGdW5rc2pvbnNyaWsgXHUwMEU1cGVuIGtpbGRla29kZSB0YW5rZWthcnQtYXBwIGZvciBPYnNpZGlhbiBtZWQgdGlscGFzc2VkZSBzdGlsZXIsIHJlZ25idWVmb3JiaW5kZWxzZXIgb2cgTWFya2Rvd24tc3RcdTAwRjh0dGUuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiT3BwZGF0ZXJ0XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItZGVwb3RcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlN0XHUwMEY4dHQgZm9yZmF0dGVyZW5cIixcclxuICAgIFwic2V0LmtleXNcIjogXCJIdXJ0aWd0YXN0ZXJcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiVGlscGFzcyBodXJ0aWd0YXN0ZXJcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiUmVkaWdlciBub2RlXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkxlZ2cgdGlsIHNcdTAwRjhza2VuXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJMZWdnIHRpbCBiYXJuXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJGb2t1c2VyIG5vZGVcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiQW5ncmVcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiR2pcdTAwRjhyIG9tXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiTGluamVza2lmdCAocmVkaWdlcmluZylcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiRHJhIGxlcnJldFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlpvb20gaW5uXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlpvb20gdXRcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJUaWxiYWtlc3RpbGwgem9vbVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiT3BwXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIk5lZFwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJWZW5zdHJlXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJIXHUwMEY4eXJlXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJUcnlrayBlbiB0YXN0Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJSdWxsaW5nIG9nIHpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnRlciBWLXJ1bGxpbmdcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJJbnZlcnRlciBILXJ1bGxpbmdcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnRlciB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJSZWRpZ2VyIHZlZCBvcHByZXR0ZWxzZVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIlJlZGlnZXJpbmdzbW9kdXMgdmVkIG55ZSBub2RlclwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJSb3RuYXZuXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJTdGFuZGFyZG5hdm4gZm9yIG55ZSByXHUwMEY4dHRlclwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiQmFybmVuYXZuXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYXZuIGZvciBueWUgYmFyblwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlNrcml2IGZvciBcdTAwRTUgcmVkaWdlcmVcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiU2tyaXYgZm9yIFx1MDBFNSByZWRpZ2VyZSB2YWxndCBub2RlXCIsXHJcbn07XHJcblxyXG5jb25zdCBfbmw6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgV29ydGVsXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgT25nZWRhYW5cIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBPcG5pZXV3XCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBLYWFydFwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlqbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZvY3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlpvZWtlblwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlpvZWtlbiB8IFNwYXRpZTpCZXdlcmtlbiB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk5pZXV3ZSB3b3J0ZWxcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24tbW9kdXNcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlqbHBhbmVlbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZvY3VzIG9wIGtub29wcHVudFwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJLbm9vcHB1bnRlbiB6b2VrZW5cIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJJbnN0ZWxsaW5nZW5cIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiSW56b29tZW5cIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlVpdHpvb21lblwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBBYW5nZXBhc3RcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEFsbGVzIHZlcndpamRlcmVuXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpamwgYmV3ZXJrZW5cIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTmlldXdlIHdvcnRlbFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBPbmdlZGFhblwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBPcG5pZXV3XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWxlIHN0aWpsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIEJld2Vya2VuXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlqbFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBLb3BpXHUwMEVCcmVuXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgS25pcHBlblwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgUGxha2tlblwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgS2luZFwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IExpbmtzIGtpbmRcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgQnJvZXIvenVzXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgVmVyd2lqZGVyZW5cIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiV2Vya2JhbGsgdmVyYmVyZ2VuXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbGUgc3RpamxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJLaW5ka25vb3BwdW50XCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJXb3J0ZWxrbm9vcHB1bnRcIixcclxuICAgIFwic20uYmdcIjogXCJBY2h0ZXJncm9uZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGVrc3RrbGV1clwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIkxldHRlcmdyb290dGVcIixcclxuICAgIFwic20uZm9udFwiOiBcIkxldHRlcnR5cGVcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJSYW5kc3RpamxcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJSYW5ka2xldXJcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJSYW5kYnJlZWR0ZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJSYW5kcmFkaXVzXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBicmVlZHRlXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIk1pbi4gaG9vZ3RlXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJWZXJiaW5kaW5nXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBlXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiS2xldXJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJCcmVlZHRlXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMZW5ndGVcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBSZWdlbmJvb2dcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlJpY2h0aW5nXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiVHVzc2VuYWZzdGFuZFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiTGlua3NcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJlaWRlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXRcIixcclxuICAgIFwic20uc2VsXCI6IFwiU2VsZWN0aWVcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJTZWxlY3RpZWtsZXVyXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiU2VsZWN0aWVicmVlZHRlXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIk9tdHJla29mZnNldFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIkJld2Vya2luZ3NvbXRyZWtrbGV1clwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiQmV3ZXJraW5nc29tdHJla2JyZWVkdGVcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiVGVrc3R1aXRsaWpuaW5nXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGVrc3R2dWxsaW5nXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiUmVnZWxob29ndGVcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJDYW52YXMgYWNodGVyZ3JvbmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJIZXJzdGVsbGVuXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiU2x1aXRlblwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIldlcmtiYWxrIHRvbmVuXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiV2Vya2JhbGt2dWxsaW5nXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIkJvdmVuXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJPbmRlclwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJMaW5rc1wiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIldlcmtiYWxrcG9zaXRpZVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIkJvdmVuXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiT25kZXJcIixcclxuICAgIFwic20udGJCZ1wiOiBcIldlcmtiYWxrIGFjaHRlcmdyb25kXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJLbm9wIGFjaHRlcmdyb25kXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiS25vcCByYW5kc3RpamxcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIktub3AgcmFuZGtsZXVyXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIktub3AgdGVrc3RrbGV1clwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIldlcmtiYWxrIGhlcnN0ZWxsZW5cIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggS25vb3BwdW50c3RpamxcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiTGlqbmtsZXVyXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxpam5icmVlZHRlXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiQWFucGFzc2luZyB3aXNzZW5cIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmFuZHJhZGl1c1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJLbm9vcHB1bnRlbiB6b2VrZW4uLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJXb3J0ZWxcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOaWV1d2Ugd29ydGVsXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIktpbmRcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIEluc3RlbGxpbmdlblwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlRhYWxcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiSW50ZXJmYWNldGFhbFwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUaGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiS2xldXJlbnRoZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkxpY2h0XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiRG9ua2VyXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiV2Vya2JhbGsgdG9uZW5cIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiV2Vya2JhbGsgdG9uZW5cIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiQ2FudmFzIGFjaHRlcmdyb25kXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJBY2h0ZXJncm9uZGtsZXVyXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIk92ZXJcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaWVcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkF1dGV1clwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiVWl0Z2VicmVpZGUgb3BlbiBzb3VyY2UgbWluZG1hcC1hcHAgdm9vciBPYnNpZGlhbiBtZXQgYWFuZ2VwYXN0ZSBzdGlqbGVuLCByZWdlbmJvb2d2ZXJiaW5kaW5nZW4gZW4gTWFya2Rvd24tb25kZXJzdGV1bmluZy5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJCaWpnZXdlcmt0XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItcmVwb3NpdG9yeVwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiT25kZXJzdGV1biBkZSBhdXRldXJcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJTbmVsdG9ldHNlblwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJTbmVsdG9ldHNlbiBhYW5wYXNzZW5cIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiS25vb3BwdW50IGJld2Vya2VuXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkJyb2VyL3p1cyB0b2V2b2VnZW5cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIktpbmQgdG9ldm9lZ2VuXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJGb2N1cyBvcCBrbm9vcHB1bnRcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiT25nZWRhYW4gbWFrZW5cIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiT3BuaWV1d1wiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlJlZ2VsYWZicmVraW5nIChiZXdlcmtpbmcpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkNhbnZhcyBzbGVwZW5cIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJJbnpvb21lblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJVaXR6b29tZW5cIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJab29tIGhlcnN0ZWxsZW5cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk9taG9vZ1wiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJPbWxhYWdcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiTGlua3NcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiRHJ1ayBvcCBlZW4gdG9ldHMuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjcm9sbGVuIGVuIHpvb21lblwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIlZlcnRpY2FhbCBvbWtlcmVuXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSG9yaXpvbnRhYWwgb21rZXJlblwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlpvb20gb21rZXJlblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiQmV3ZXJrZW4gYmlqIGFhbm1ha2VuXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiQmV3ZXJraW5nc21vZHVzIGJpaiBuaWV1d2Uga25vb3BwdW50ZW5cIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiV29ydGVsbmFhbVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiU3RhbmRhYXJkbmFhbSB2b29yIHdvcnRlbHNcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIktpbmRuYWFtXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiU3RhbmRhYXJkbmFhbSB2b29yIGtpbmRlcmVuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiVHlwIG9tIHRlIGJld2Vya2VuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIkJld2VyayBkb29yIHRlIHR5cGVuIGJpaiBnZXNlbGVjdGVlcmQga25vb3BwdW50XCIsXHJcbn07XHJcblxyXG5jb25zdCBfbGk6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgV3VyemVsXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgUlx1MDBGQ2NrZ1x1MDBFNG5naWdcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBXaWVkZXJob2xhXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBDaGFydGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZva3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlN1ZWNoZVwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlN1ZWNoZSB8IExlZXJ0YXNjaHQ6QmVhcmJlaXRhIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTlx1MDBGNmlpIFd1cnplbFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93bi1Nb2R1c1wiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlN0aWwtUGFuZWxcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJDaG5vdGEgZm9rdXNzaWVyYVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJDaG5vdGEgc3VlY2hlXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiSXN0ZWxsaWdhXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlZlcmdyXHUwMEY2XHUwMERGZXJhXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJWZXJrbGVpbmVyYVwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBFaWdldHNcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEFsbGkgbFx1MDBGNnNjaGFcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsIGJlYXJiZWl0YVwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOXHUwMEY2aWkgV3VyemVsXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFJcdTAwRkNja2dcdTAwRTRuZ2lnXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFdpZWRlcmhvbGFcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbGUgU3RpbFwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBCZWFyYmVpdGFcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgS29waWVyYVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFVzc2NobmlkYVwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgSWlmXHUwMEZDZWdlXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBDaGluZFwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IExlY2h0cyBDaGluZFwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBHc2Nod1x1MDBGNnNjaHRlclwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIExcdTAwRjZzY2hhXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIkxlaXNjaHRhIHZlcnN0ZWNrYVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWxlIFN0aWxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJDaGluZC1DaG5vdGFcIixcclxuICAgIFwic20ucm9vdFwiOiBcIld1cnplbC1DaG5vdGFcIixcclxuICAgIFwic20uYmdcIjogXCJIaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGV4dGZhcmJcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJTY2hyaWZ0Z3JcdTAwRjZzc2VcIixcclxuICAgIFwic20uZm9udFwiOiBcIlNjaHJpZnRcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJSYW5kc3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlJhbmRmYXJiXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiUmFuZGJyZWl0aVwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJSdW5kdW5nXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBCcmVpdGlcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiTWluLiBIXHUwMEY2Y2hpXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJWZXJiaW5kaWdcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cFwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkZhcmJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJCcmVpdGlcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkxcdTAwRTRuZ2lcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBSXHUwMEU0Z2Fib2dhXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJSaWNodGlnXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiR2VzY2h3aXN0ZXJhYnN0YW5kXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiUmVjaHRzXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJMZWNodHNcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJlaWRpXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXR0YVwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJVc3dhaGxcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJVc3dhaGxmYXJiXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiVXN3YWhsYnJlaXRpXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIktvbnR1cnZlcnNhdHpcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJCZWFyYmVpdGlnc3JhaG1lZmFyYlwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiQmVhcmJlaXRpZ3NyYWhtZWJyZWl0aVwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJUZXh0dXNyaWNodGlnXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGV4dGFic3RhbmRcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJaaWxlaFx1MDBGNmNoaVwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkxlaW53YW5kaGludGVyZ3J1bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJacnVnZ3NldHphXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiWnVhbWFjaGFcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJMZWlzY2h0YSB6ZWlnYVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIkxlaXNjaHRhLUFic3RhbmRcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiT2JhXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJVbnRhXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIkxlY2h0c1wiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIkxlaXNjaHRhLVBvc2l0aW9uXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiT2JhXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiVW50YVwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiTGVpc2NodGFoaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiQ2hub3BmaGludGVyZ3J1bmRcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJDaG5vcGZyYW5kc3RpbFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiQ2hub3BmcmFuZGZhcmJcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiQ2hub3BmdGV4dGZhcmJcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJMZWlzY2h0YSB6cnVnZ3NldHphXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IENobm90YS1TdGlsXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkxpbmllZmFyYlwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMaW5pZWJyZWl0aVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkFwXHUwMEU0c3NpZyBsXHUwMEY2c2NoZVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJSdW5kdW5nXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIkNobm90YSBzdWVjaGUuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJXdXJ6ZWxcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOXHUwMEY2aWkgV3VyemVsXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkNoaW5kXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBJc3RlbGxpZ2FcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJTcHJvY2hcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiT2JlcmZsXHUwMEU0Y2hhLVNwcm9jaFwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUaGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiRmFyYnRoZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkhlbGxcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJEdW5rZWxcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJMZWlzY2h0YSB6ZWlnYVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJMZWlzY2h0YSB6ZWlnYVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJMZWlud2FuZGhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJIaW50ZXJncnVuZGZhcmJcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiXHUwMERDYmVyXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0b3JcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkZ1bmt0aW9uc3JpaWNoaSBPcGVuLVNvdXJjZSBNaW5kbWFwLUFwcCBmXHUwMEZDciBPYnNpZGlhbiBtaXQgZWlnZW5hIFN0aWxhLCBSXHUwMEU0Z2Fib2dhLVZlcmJpbmRpZ2EgdW5kIE1hcmtkb3duLVN1cHBvcnQuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiQWt0dWFsaXNpZXJ0XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItQWJsYWdhXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJPcGVuLVNvdXJjZS1BdXRvciB1bmRlcnN0XHUwMEZDdHphXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiVGFzdGVrb21iaW5hdGlvbmFcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiVGFzdGVrb21iaW5hdGlvbmEgYXBhc3NhXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIkNobm90YSBiZWFyYmVpdGFcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiR3NjaHdcdTAwRjZzY2h0ZXIgZGV6dWVmXHUwMEZDZWdhXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJDaGluZCBkZXp1ZWZcdTAwRkNlZ2FcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkNobm90YSBmb2t1c3NpZXJhXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlJcdTAwRkNja2dcdTAwRTRuZ2lnXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIldpZWRlcmhvbGFcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJaaWxhdW1icnVjaCAoYmltIEJlYXJiZWl0YSlcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiTGVpbndhbmQgelx1MDBGQ2NoYVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlZlcmdyXHUwMEY2XHUwMERGZXJhXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlZlcmtsZWluZXJhXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiWm9vbSB6cnVnZ3NldHphXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJVZlwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJBYlwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJMZWNodHNcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiVGFzY2h0IGRyXHUwMEZDY2thLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJTY3JvbGxhIHVuZCBab29tYVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIlZlcnRpa2FscyBTY3JvbGxhIHVta2VocmFcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJIb3Jpem9udGFscyBTY3JvbGxhIHVta2VocmFcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJab29tcmljaHRpZyB1bWtlaHJhXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJCaSBFcnN0ZWxsaWcgYmVhcmJlaXRhXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiQmVhcmJlaXRpZ3Ntb2R1cyBiaSBuXHUwMEY2aWUgQ2hub3RhXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIld1cnplbG5hbVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYW0gZlx1MDBGQ3Igblx1MDBGNmlpIFd1cnpsYVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiQ2hpbmRuYW1cIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJTdGFuZGFyZG5hbSBmXHUwMEZDciBuXHUwMEY2aWkgQ2hpbmRlclwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlRpcHBhIHp1bSBCZWFyYmVpdGFcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiQmkgdXNnd1x1MDBFNGhsdGVtIENobm90YSBiZWFyYmVpdGFcIixcclxufTtcclxuXHJcbmNvbnN0IF9kYTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBSb2RcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBGb3J0cnlkXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgR2VudGFnXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBLb3J0XCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJGb2t1c1wiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJTXHUwMEY4Z1wiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlNcdTAwRjhnIHwgTWVsbGVtcnVtOlJlZGlnXHUwMEU5ciB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk55IHJvZFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93bi10aWxzdGFuZFwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlN0aWxwYW5lbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZva3VzXHUwMEU5ciBwXHUwMEU1IGtudWRlXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlNcdTAwRjhnIGkga251ZGVyXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiSW5kc3RpbGxpbmdlclwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJab29tIGluZFwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiWm9vbSB1ZFwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBCcnVnZXJkZWZpbmVyZXRcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFNsZXQgYWxsZVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFJlZGlnXHUwMEU5ciBzdGlsXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE55IHJvZFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBGb3J0cnlkXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIEdlbnRhZ1wiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIHN0aWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgUmVkaWdcdTAwRTlyXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIEtvcGlcdTAwRTlyXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgS2xpcFwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgSW5kc1x1MDBFNnRcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IEJhcm5cIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBWZW5zdHJlIGJhcm5cIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgU1x1MDBGOHNrZW5kZVwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFNsZXRcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiU2tqdWwgdlx1MDBFNnJrdFx1MDBGOGpzbGluamVcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIHN0aWxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJCYXJuZWtudWRlXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJSb2RrbnVkZVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkJhZ2dydW5kXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZWtzdGZhcnZlXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiU2tyaWZ0c3RcdTAwRjhycmVsc2VcIixcclxuICAgIFwic20uZm9udFwiOiBcIlNrcmlmdHR5cGVcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJLYW50c3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkthbnRmYXJ2ZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkthbnRicmVkZGVcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGl1c1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbi4gYnJlZGRlXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIk1pbi4gaFx1MDBGOGpkZVwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiRm9yYmluZGVsc2VcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cGVcIixcclxuICAgIFwic20uY29sb3JcIjogXCJGYXJ2ZVwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkJyZWRkZVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTFx1MDBFNm5nZGVcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlJlZ25idWVcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIktudWRlcmV0bmluZ1wiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIlNcdTAwRjhza2VuZGVhZnN0YW5kXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiSFx1MDBGOGpyZVwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiVmVuc3RyZVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiQmVnZ2VcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJNYXJrZXJpbmdcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJNYXJrZXJpbmdzZmFydmVcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJNYXJrZXJpbmdzYnJlZGRlXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIktvbnR1cmZvcnNreWRuaW5nXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiUmVkaWdlcmluZ3Nrb250dXJmYXJ2ZVwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiUmVkaWdlcmluZ3Nrb250dXJicmVkZGVcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiVGVrc3RqdXN0ZXJpbmdcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJUZWtzdHVkZnlsZG5pbmdcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJMaW5qZWhcdTAwRjhqZGVcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJMXHUwMEU2cnJlZHNiYWdncnVuZFwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIk51bHN0aWxcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJMdWtcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJWaXMgdlx1MDBFNnJrdFx1MDBGOGpzbGluamVcIixcclxuICAgIFwic20udGJQYWRcIjogXCJWXHUwMEU2cmt0XHUwMEY4anNsaW5qZXVkZnlsZG5pbmdcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiVG9wXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIkhcdTAwRjhqcmVcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiQnVuZFwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJWZW5zdHJlXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiVlx1MDBFNnJrdFx1MDBGOGpzbGluamVwb3NpdGlvblwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlRvcFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIkJ1bmRcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlZcdTAwRTZya3RcdTAwRjhqc2xpbmplYmFnZ3J1bmRcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIktuYXBiYWdncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIktuYXAga2FudHN0aWxcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIktuYXAga2FudGZhcnZlXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIktuYXAgdGVrc3RmYXJ2ZVwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIk51bHN0aWwgdlx1MDBFNnJrdFx1MDBGOGpzbGluamVcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggS251ZGVzdGlsXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkxpbmplZmFydmVcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGluamVicmVkZGVcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJSeWQgdGlscGFzbmluZ1wiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJLYW50cmFkaXVzXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlNcdTAwRjhnIGkga251ZGVyLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiUm9kXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTnkgcm9kXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkJhcm5cIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIEluZHN0aWxsaW5nZXJcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJTcHJvZ1wiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJHclx1MDBFNm5zZWZsYWRlc3Byb2dcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiRmFydmV0ZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkx5c3RcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJNXHUwMEY4cmt0XCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiVmlzIHZcdTAwRTZya3RcdTAwRjhqc2xpbmplXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlZpcyB2XHUwMEU2cmt0XHUwMEY4anNsaW5qZVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJMXHUwMEU2cnJlZHNiYWdncnVuZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQmFnZ3J1bmRzZmFydmVcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiT21cIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaW9uXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJGb3JmYXR0ZXJcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkVuIGZ1bmt0aW9uc3JpZyBvcGVuIHNvdXJjZS10YW5rZWtvcnRhcHAgdGlsIE9ic2lkaWFuIG1lZCBicnVnZXJkZWZpbmVyZWRlIHN0aWxhcnRlciwgcmVnbmJ1ZWZvcmJpbmRlbHNlciwgbXVsdGl2YWxnLCB0clx1MDBFNmstb2ctc2xpcCBvZyBNYXJrZG93bi1pbXBvcnQvZWtzcG9ydC5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJPcGRhdGVyZXRcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1Yi1hcmtpdlwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiU3RcdTAwRjh0IG9wZW4gc291cmNlLWZvcmZhdHRlcmVuXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiVGFzdGF0dXJnZW52ZWplXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlRpbHBhcyBnZW52ZWplXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlJlZGlnXHUwMEU5ciBrbnVkZVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJUaWxmXHUwMEY4aiBzXHUwMEY4c2tlbmRlXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJUaWxmXHUwMEY4aiBiYXJuXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJGb2t1c1x1MDBFOXIgcFx1MDBFNSBrbnVkZVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJGb3J0cnlkXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIkdlbnRhZ1wiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIkxpbmplc2tpZnQgKHVuZGVyIHJlZGlnZXJpbmcpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlRyXHUwMEU2ayBsXHUwMEU2cnJlZFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlpvb20gaW5kXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlpvb20gdWRcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJOdWxzdGlsIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hdmlnXHUwMEU5ciBvcFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOYXZpZ1x1MDBFOXIgbmVkXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hdmlnXHUwMEU5ciB2ZW5zdHJlXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJOYXZpZ1x1MDBFOXIgaFx1MDBGOGpyZVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiVHJ5ayBwXHUwMEU1IGVuIHRhc3QuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlJ1bG5pbmcgb2cgem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVydGVyIGxvZHJldCBydWxuaW5nXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJ0ZXIgdmFuZHJldCBydWxuaW5nXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiSW52ZXJ0ZXIgem9vbXJldG5pbmdcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIlJlZGlnXHUwMEU5ciB2ZWQgb3ByZXR0ZWxzZVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIlJlZGlnZXJpbmdzdGlsc3RhbmQgdmVkIG55ZSBrbnVkZXJcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiUm9kbmF2blwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYXZuIGZvciBueWUgclx1MDBGOGRkZXJcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIkJhcm5lbmF2blwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmF2biBmb3IgbnllIGJcdTAwRjhyblwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlNrcml2IGZvciBhdCByZWRpZ2VyZVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJSZWRpZ1x1MDBFOXIgdmVkIGF0IHNrcml2ZSBuXHUwMEU1ciBlbiBrbnVkZSBlciB2YWxndFwiLFxyXG59O1xyXG5cclxuY29uc3QgX2hlOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOVwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFx1MDVEMVx1MDVEOFx1MDVEQ1wiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFx1MDVEMVx1MDVFNlx1MDVFMiBcdTA1RTlcdTA1RDVcdTA1RDFcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIFx1MDVERVx1MDVFNFx1MDVENFwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REZcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJcdTA1REVcdTA1RDlcdTA1RTdcdTA1RDVcdTA1RDNcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiXHUwNUQ3XHUwNUQ5XHUwNUU0XHUwNUQ1XHUwNUU5XCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6XHUwNUQ3XHUwNUQ5XHUwNUU0XHUwNUQ1XHUwNUU5IHwgXHUwNUU4XHUwNUQ1XHUwNUQ1XHUwNUQ3Olx1MDVFMlx1MDVFOFx1MDVEOVx1MDVEQlx1MDVENCB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOSBcdTA1RDdcdTA1RDNcdTA1RTlcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiXHUwNURFXHUwNUU2XHUwNUQxIE1hcmtkb3duXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHUwNUQ3XHUwNURDXHUwNUQ1XHUwNUUwXHUwNUQ5XHUwNUVBIFx1MDVFMVx1MDVEMlx1MDVFMFx1MDVENVx1MDVERlwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1MDVERVx1MDVFN1x1MDVEMyBcdTA1RTJcdTA1REMgXHUwNUU2XHUwNUQ1XHUwNURFXHUwNUVBXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1MDVEN1x1MDVFNFx1MDVFOSBcdTA1RTZcdTA1REVcdTA1RUFcdTA1RDlcdTA1RERcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJcdTA1RDRcdTA1RDJcdTA1RDNcdTA1RThcdTA1RDVcdTA1RUFcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiXHUwNUQ0XHUwNUQyXHUwNUQzXHUwNURDXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJcdTA1RDRcdTA1RTdcdTA1RDhcdTA1REZcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgXHUwNURFXHUwNUQ1XHUwNUVBXHUwNUQwXHUwNUREIFx1MDVEMFx1MDVEOVx1MDVFOVx1MDVEOVx1MDVFQVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHUwNURFXHUwNUQ3XHUwNUQ5XHUwNUU3XHUwNUQ0IFx1MDVEMlx1MDVENVx1MDVFOFx1MDVFNFx1MDVFQVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDVFMlx1MDVFOFx1MDVENVx1MDVEQSBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REZcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgXHUwNUU5XHUwNUQ1XHUwNUU4XHUwNUU5IFx1MDVEN1x1MDVEM1x1MDVFOVwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBcdTA1RDFcdTA1RDhcdTA1RENcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgXHUwNUQxXHUwNUU2XHUwNUUyIFx1MDVFOVx1MDVENVx1MDVEMVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGIFx1MDVEQlx1MDVEQ1x1MDVEQ1x1MDVEOVwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBcdTA1RTJcdTA1RThcdTA1RDVcdTA1REFcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDVFMVx1MDVEMlx1MDVFMFx1MDVENVx1MDVERlwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBcdTA1RDRcdTA1RTJcdTA1RUFcdTA1RTdcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBcdTA1RDJcdTA1RDZcdTA1RDVcdTA1RThcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFx1MDVENFx1MDVEM1x1MDVEMVx1MDVFN1wiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgXHUwNUU2XHUwNUQwXHUwNUU2XHUwNUQwXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgXHUwNUU2XHUwNUQwXHUwNUU2XHUwNUQwIFx1MDVFOVx1MDVERVx1MDVEMFx1MDVEQ1x1MDVEOVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdTA1RDBcdTA1RDdcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTA1REVcdTA1RDdcdTA1RTdcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHUwNUQ0XHUwNUUxXHUwNUVBXHUwNUU4IFx1MDVFMVx1MDVFOFx1MDVEMlx1MDVEQyBcdTA1REJcdTA1RENcdTA1RDlcdTA1RERcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGIFx1MDVEQlx1MDVEQ1x1MDVEQ1x1MDVEOVwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIlx1MDVFNlx1MDVENVx1MDVERVx1MDVFQSBcdTA1RTZcdTA1RDBcdTA1RTZcdTA1RDBcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlx1MDVFNlx1MDVENVx1MDVERVx1MDVFQSBcdTA1RTlcdTA1RDVcdTA1RThcdTA1RTlcIixcclxuICAgIFwic20uYmdcIjogXCJcdTA1RThcdTA1RTdcdTA1RTJcIixcclxuICAgIFwic20udGV4dFwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMiBcdTA1RDhcdTA1RTdcdTA1RTFcdTA1RDhcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJcdTA1RDJcdTA1RDVcdTA1RDNcdTA1REMgXHUwNUQyXHUwNUQ1XHUwNUU0XHUwNURGXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJcdTA1RDJcdTA1RDVcdTA1RTRcdTA1REZcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REYgXHUwNUQyXHUwNUQxXHUwNUQ1XHUwNURDXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVEMlx1MDVEMVx1MDVENVx1MDVEQ1wiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlx1MDVFMlx1MDVENVx1MDVEMVx1MDVEOSBcdTA1RDJcdTA1RDFcdTA1RDVcdTA1RENcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiXHUwNUUyXHUwNUQ5XHUwNUQyXHUwNUQ1XHUwNURDIFx1MDVFNFx1MDVEOVx1MDVFMFx1MDVENVx1MDVFQVwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIlx1MDVFOFx1MDVENVx1MDVEN1x1MDVEMSBcdTA1REVcdTA1RDlcdTA1RTBcdTA1RDlcdTA1REVcdTA1RENcdTA1RDlcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiXHUwNUQyXHUwNUQ1XHUwNUQxXHUwNUQ0IFx1MDVERVx1MDVEOVx1MDVFMFx1MDVEOVx1MDVERVx1MDVEQ1x1MDVEOVwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiXHUwNUU3XHUwNUQ1IFx1MDVEN1x1MDVEOVx1MDVEMVx1MDVENVx1MDVFOFwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiXHUwNUUxXHUwNUQ1XHUwNUQyXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiXHUwNUU4XHUwNUQ1XHUwNUQ3XHUwNUQxXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJcdTA1RDBcdTA1RDVcdTA1RThcdTA1REFcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1MDVFN1x1MDVFOVx1MDVFQVwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiXHUwNURCXHUwNUQ5XHUwNUQ1XHUwNUQ1XHUwNURGIFx1MDVFNlx1MDVERVx1MDVFQVx1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIlx1MDVERVx1MDVFOFx1MDVENVx1MDVENVx1MDVENyBcdTA1RDFcdTA1RDlcdTA1REYgXHUwNUQwXHUwNUQ3XHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiXHUwNUQ5XHUwNURFXHUwNUQ5XHUwNURGXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJcdTA1RTlcdTA1REVcdTA1RDBcdTA1RENcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIlx1MDVFOVx1MDVFMFx1MDVEOVx1MDVENFx1MDVERFwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlx1MDVEQ1x1MDVENVx1MDVENyBcdTA1RTZcdTA1RDFcdTA1RTJcdTA1RDlcdTA1RERcIixcclxuICAgIFwic20uc2VsXCI6IFwiXHUwNUQxXHUwNUQ3XHUwNUQ5XHUwNUU4XHUwNUQ0XCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVEMVx1MDVEN1x1MDVEOVx1MDVFOFx1MDVENFwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlx1MDVFMlx1MDVENVx1MDVEMVx1MDVEOSBcdTA1RDFcdTA1RDdcdTA1RDlcdTA1RThcdTA1RDRcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiXHUwNUQ0XHUwNUQ5XHUwNUUxXHUwNUQ4IFx1MDVERVx1MDVFQVx1MDVEMFx1MDVFOFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMiBcdTA1REVcdTA1RUFcdTA1RDBcdTA1RTggXHUwNUUyXHUwNUU4XHUwNUQ5XHUwNURCXHUwNUQ0XCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJcdTA1RTJcdTA1RDVcdTA1RDFcdTA1RDkgXHUwNURFXHUwNUVBXHUwNUQwXHUwNUU4IFx1MDVFMlx1MDVFOFx1MDVEOVx1MDVEQlx1MDVENFwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJcdTA1RDlcdTA1RDlcdTA1RTlcdTA1RDVcdTA1RTggXHUwNUQ4XHUwNUU3XHUwNUUxXHUwNUQ4XCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiXHUwNUU4XHUwNUQ5XHUwNUU0XHUwNUQ1XHUwNUQzIFx1MDVEOFx1MDVFN1x1MDVFMVx1MDVEOFwiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIlx1MDVEMlx1MDVENVx1MDVEMVx1MDVENCBcdTA1RTlcdTA1RDVcdTA1RThcdTA1RDRcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJcdTA1RThcdTA1RTdcdTA1RTIgXHUwNUQxXHUwNUQzIFx1MDVFNlx1MDVEOVx1MDVENVx1MDVFOFwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1MDVEMFx1MDVFNFx1MDVFMVwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlx1MDVFMVx1MDVEMlx1MDVENVx1MDVFOFwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlx1MDVENFx1MDVFNlx1MDVEMiBcdTA1RTFcdTA1RThcdTA1RDJcdTA1REMgXHUwNURCXHUwNURDXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiXHUwNUU4XHUwNUQ5XHUwNUU0XHUwNUQ1XHUwNUQzIFx1MDVFMVx1MDVFOFx1MDVEMlx1MDVEQ1wiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJcdTA1RTJcdTA1RENcdTA1RDlcdTA1RDVcdTA1REZcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiXHUwNUQ5XHUwNURFXHUwNUQ5XHUwNURGXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIlx1MDVFQVx1MDVEN1x1MDVFQVx1MDVENVx1MDVERlwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJcdTA1RTlcdTA1REVcdTA1RDBcdTA1RENcIixcclxuICAgIFwic20udGJQb3NcIjogXCJcdTA1REVcdTA1RDlcdTA1RTdcdTA1RDVcdTA1REQgXHUwNUUxXHUwNUU4XHUwNUQyXHUwNURDXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiXHUwNUUyXHUwNURDXHUwNUQ5XHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiXHUwNUVBXHUwNUQ3XHUwNUVBXHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJcdTA1RThcdTA1RTdcdTA1RTIgXHUwNUUxXHUwNUU4XHUwNUQyXHUwNURDXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJcdTA1RThcdTA1RTdcdTA1RTIgXHUwNURCXHUwNUU0XHUwNUVBXHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGIFx1MDVEMlx1MDVEMVx1MDVENVx1MDVEQyBcdTA1REJcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMiBcdTA1RDJcdTA1RDFcdTA1RDVcdTA1REMgXHUwNURCXHUwNUU0XHUwNUVBXHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMiBcdTA1RDhcdTA1RTdcdTA1RTFcdTA1RDggXHUwNURCXHUwNUU0XHUwNUVBXHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiXHUwNUQwXHUwNUU0XHUwNUUxIFx1MDVFMVx1MDVFOFx1MDVEMlx1MDVEQyBcdTA1REJcdTA1RENcdTA1RDlcdTA1RERcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGIFx1MDVFNlx1MDVENVx1MDVERVx1MDVFQVwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNUU3XHUwNUQ1XCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIlx1MDVFMlx1MDVENVx1MDVEMVx1MDVEOSBcdTA1RTdcdTA1RDVcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJcdTA1RTBcdTA1RTdcdTA1RDQgXHUwNUQ0XHUwNUVBXHUwNUQwXHUwNURFXHUwNUQ0IFx1MDVEMFx1MDVEOVx1MDVFOVx1MDVEOVx1MDVFQVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJcdTA1RTJcdTA1RDlcdTA1RDJcdTA1RDVcdTA1REMgXHUwNUU0XHUwNUQ5XHUwNUUwXHUwNUQ1XHUwNUVBXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlx1MDVEN1x1MDVFNFx1MDVFOSBcdTA1RTZcdTA1REVcdTA1RUFcdTA1RDlcdTA1REQuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJcdTA1RTlcdTA1RDVcdTA1RThcdTA1RTlcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJcdTA1RTlcdTA1RDVcdTA1RThcdTA1RTkgXHUwNUQ3XHUwNUQzXHUwNUU5XCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIlx1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJcdTA1RDRcdTA1RDJcdTA1RDNcdTA1RThcdTA1RDVcdTA1RUEgTWluZFpKXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiXHUwNUU5XHUwNUU0XHUwNUQ0XCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIlx1MDVFOVx1MDVFNFx1MDVFQSBcdTA1REVcdTA1REVcdTA1RTlcdTA1RTdcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiXHUwNUUyXHUwNUU4XHUwNURCXHUwNUVBIFx1MDVFMFx1MDVENVx1MDVFOVx1MDVEMFwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiXHUwNUUyXHUwNUU4XHUwNURCXHUwNUVBIFx1MDVFNlx1MDVEMVx1MDVFMlx1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJcdTA1RDFcdTA1RDRcdTA1RDlcdTA1RThcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJcdTA1REJcdTA1RDRcdTA1RDRcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJcdTA1RDRcdTA1RTZcdTA1RDIgXHUwNUUxXHUwNUU4XHUwNUQyXHUwNURDIFx1MDVEQlx1MDVEQ1x1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJcdTA1RDRcdTA1RTZcdTA1RDIgXHUwNUUxXHUwNUU4XHUwNUQyXHUwNURDIFx1MDVEQlx1MDVEQ1x1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJcdTA1RThcdTA1RTdcdTA1RTIgXHUwNUQxXHUwNUQzIFx1MDVFNlx1MDVEOVx1MDVENVx1MDVFOFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVFOFx1MDVFN1x1MDVFMlwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTA1RDBcdTA1RDVcdTA1RDNcdTA1RDVcdTA1RUFcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdTA1RDJcdTA1RThcdTA1RTFcdTA1RDRcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1MDVERVx1MDVEN1x1MDVEMVx1MDVFOFwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiXHUwNUQwXHUwNUU0XHUwNURDXHUwNUQ5XHUwNUU3XHUwNUU2XHUwNUQ5XHUwNUQ5XHUwNUVBIFx1MDVERVx1MDVFNFx1MDVFQSBcdTA1RDdcdTA1RTlcdTA1RDlcdTA1RDFcdTA1RDQgXHUwNUQxXHUwNUU3XHUwNUQ1XHUwNUQzIFx1MDVFNFx1MDVFQVx1MDVENVx1MDVENyBcdTA1RTJcdTA1RTlcdTA1RDlcdTA1RThcdTA1RDQgXHUwNUQxXHUwNUVBXHUwNURCXHUwNUQ1XHUwNUUwXHUwNUQ1XHUwNUVBIFx1MDVFMlx1MDVEMVx1MDVENVx1MDVFOCBPYnNpZGlhbiBcdTA1RTJcdTA1REQgXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNUUwXHUwNUQ1XHUwNUVBIFx1MDVERVx1MDVENVx1MDVFQVx1MDVEMFx1MDVERVx1MDVEOVx1MDVERCwgXHUwNUQ3XHUwNUQ5XHUwNUQxXHUwNUQ1XHUwNUU4XHUwNUQ5IFx1MDVFN1x1MDVFOVx1MDVFQSwgXHUwNUQxXHUwNUQ3XHUwNUQ5XHUwNUU4XHUwNUQ0IFx1MDVERVx1MDVFOFx1MDVENVx1MDVEMVx1MDVENCwgXHUwNUQyXHUwNUU4XHUwNUQ5XHUwNUU4XHUwNUQ0IFx1MDVENVx1MDVFOVx1MDVEN1x1MDVFOFx1MDVENVx1MDVFOCBcdTA1RDVcdTA1RDlcdTA1RDlcdTA1RDFcdTA1RDVcdTA1RDAvXHUwNUQ5XHUwNUQ5XHUwNUU2XHUwNUQ1XHUwNUQwIE1hcmtkb3duLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1MDVFMlx1MDVENVx1MDVEM1x1MDVEQlx1MDVERlwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiXHUwNURFXHUwNUQwXHUwNUQyXHUwNUU4IEdpdEh1YlwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiXHUwNUVBXHUwNURFXHUwNUQ1XHUwNURBIFx1MDVEMVx1MDVERVx1MDVEN1x1MDVEMVx1MDVFOCBcdTA1RDRcdTA1RTdcdTA1RDVcdTA1RDMgXHUwNUQ0XHUwNUU0XHUwNUVBXHUwNUQ1XHUwNUQ3XCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiXHUwNUU3XHUwNUQ5XHUwNUU2XHUwNUQ1XHUwNUU4XHUwNUQ5IFx1MDVERVx1MDVFN1x1MDVEQ1x1MDVEM1x1MDVFQVwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJcdTA1RDRcdTA1RUFcdTA1RDBcdTA1REQgXHUwNUU3XHUwNUQ5XHUwNUU2XHUwNUQ1XHUwNUU4XHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1MDVFMlx1MDVFOFx1MDVENVx1MDVEQSBcdTA1RTZcdTA1RDVcdTA1REVcdTA1RUFcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHUwNUQ0XHUwNUQ1XHUwNUUxXHUwNUUzIFx1MDVEMFx1MDVEN1wiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHUwNUQ0XHUwNUQ1XHUwNUUxXHUwNUUzIFx1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiXHUwNURFXHUwNUU3XHUwNUQzIFx1MDVFMlx1MDVEQyBcdTA1RTZcdTA1RDVcdTA1REVcdTA1RUFcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHUwNUQxXHUwNUQ4XHUwNURDXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1MDVEMVx1MDVFNlx1MDVFMiBcdTA1RTlcdTA1RDVcdTA1RDFcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJcdTA1RTlcdTA1RDFcdTA1RDlcdTA1RThcdTA1RUEgXHUwNUU5XHUwNUQ1XHUwNUU4XHUwNUQ0IChcdTA1RDFcdTA1RTJcdTA1RThcdTA1RDlcdTA1REJcdTA1RDQpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlx1MDVEMlx1MDVFOFx1MDVENVx1MDVFOCBcdTA1RDFcdTA1RDMgXHUwNUU2XHUwNUQ5XHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiXHUwNUQ0XHUwNUQyXHUwNUQzXHUwNURDXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlx1MDVENFx1MDVFN1x1MDVEOFx1MDVERlwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1MDVEMFx1MDVFNFx1MDVFMSBcdTA1RUFcdTA1RTdcdTA1RThcdTA1RDlcdTA1RDFcIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIlx1MDVFMFx1MDVENVx1MDVENVx1MDVEOCBcdTA1RENcdTA1REVcdTA1RTJcdTA1RENcdTA1RDRcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiXHUwNUUwXHUwNUQ1XHUwNUQ1XHUwNUQ4IFx1MDVEQ1x1MDVERVx1MDVEOFx1MDVENFwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJcdTA1RTBcdTA1RDVcdTA1RDVcdTA1RDggXHUwNUU5XHUwNURFXHUwNUQwXHUwNURDXHUwNUQ0XCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJcdTA1RTBcdTA1RDVcdTA1RDVcdTA1RDggXHUwNUQ5XHUwNURFXHUwNUQ5XHUwNUUwXHUwNUQ0XCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJcdTA1RENcdTA1RDdcdTA1RTUgXHUwNUUyXHUwNURDIFx1MDVERVx1MDVFN1x1MDVFOS4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiXHUwNUQyXHUwNURDXHUwNUQ5XHUwNURDXHUwNUQ0IFx1MDVENVx1MDVFQVx1MDVFN1x1MDVFOFx1MDVEOVx1MDVEMVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIlx1MDVENFx1MDVFNFx1MDVENVx1MDVEQSBcdTA1RDJcdTA1RENcdTA1RDlcdTA1RENcdTA1RDQgXHUwNUQwXHUwNUUwXHUwNURCXHUwNUQ5XHUwNUVBXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiXHUwNUQ0XHUwNUU0XHUwNUQ1XHUwNURBIFx1MDVEMlx1MDVEQ1x1MDVEOVx1MDVEQ1x1MDVENCBcdTA1RDBcdTA1RDVcdTA1RTRcdTA1RTdcdTA1RDlcdTA1RUFcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJcdTA1RDRcdTA1RTRcdTA1RDVcdTA1REEgXHUwNURCXHUwNUQ5XHUwNUQ1XHUwNUQ1XHUwNURGIFx1MDVFQVx1MDVFN1x1MDVFOFx1MDVEOVx1MDVEMVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiXHUwNUUyXHUwNUU4XHUwNUQ1XHUwNURBIFx1MDVEMVx1MDVEOVx1MDVFNlx1MDVEOVx1MDVFOFx1MDVENFwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIlx1MDVERVx1MDVFNlx1MDVEMSBcdTA1RTJcdTA1RThcdTA1RDlcdTA1REJcdTA1RDQgXHUwNUQxXHUwNUUyXHUwNUVBIFx1MDVEOVx1MDVFNlx1MDVEOVx1MDVFOFx1MDVFQSBcdTA1RTZcdTA1REVcdTA1RUFcdTA1RDlcdTA1REQgXHUwNUQ3XHUwNUQzXHUwNUU5XHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlx1MDVFOVx1MDVERCBcdTA1RTlcdTA1RDVcdTA1RThcdTA1RTlcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlx1MDVFOVx1MDVERCBcdTA1RDFcdTA1RThcdTA1RDlcdTA1RThcdTA1RUEgXHUwNURFXHUwNUQ3XHUwNUQzXHUwNURDIFx1MDVEQ1x1MDVFOVx1MDVENVx1MDVFOFx1MDVFOVx1MDVEOVx1MDVERCBcdTA1RDdcdTA1RDNcdTA1RTlcdTA1RDlcdTA1RERcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIlx1MDVFOVx1MDVERCBcdTA1RTZcdTA1RDBcdTA1RTZcdTA1RDBcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJcdTA1RTlcdTA1REQgXHUwNUQxXHUwNUU4XHUwNUQ5XHUwNUU4XHUwNUVBIFx1MDVERVx1MDVEN1x1MDVEM1x1MDVEQyBcdTA1RENcdTA1RTZcdTA1RDBcdTA1RTZcdTA1RDBcdTA1RDlcdTA1REQgXHUwNUQ3XHUwNUQzXHUwNUU5XHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHUwNUQ0XHUwNUU3XHUwNURDXHUwNUQzIFx1MDVEQ1x1MDVFMlx1MDVFOFx1MDVEOVx1MDVEQlx1MDVENFwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdTA1RTJcdTA1RThcdTA1RDVcdTA1REEgXHUwNUUyXHUwNURDIFx1MDVEOVx1MDVEM1x1MDVEOSBcdTA1RDRcdTA1RTdcdTA1RENcdTA1RDNcdTA1RDQgXHUwNURCXHUwNUU5XHUwNUU2XHUwNUQ1XHUwNURFXHUwNUVBIFx1MDVFMFx1MDVEMVx1MDVEN1x1MDVFOFwiLFxyXG59O1xyXG5cclxuY29uc3QgX2l0OiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJhZGljZVwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IEFubnVsbGFcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBSaXBldGlcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIE1hcHBhXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxlXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiTWVzc2EgYSBmdW9jb1wiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJDZXJjYVwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOkNlcmNhIHwgU3BhemlvOk1vZGlmaWNhIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTnVvdmEgcmFkaWNlXCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1vZGFsaXRcdTAwRTAgTWFya2Rvd25cIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJQYW5uZWxsbyBzdGlsZVwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIk1lc3NhIGEgZnVvY28gc3VsIG5vZG9cIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiQ2VyY2Egbm9kaVwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIkltcG9zdGF6aW9uaVwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJJbmdyYW5kaXNjaVwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiUmlkdWNpXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFBlcnNvbmFsaXp6YXRvXCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBFbGltaW5hIGluIGJsb2Njb1wiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IE1vZGlmaWNhIHN0aWxlXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE51b3ZhIHJhZGljZVwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBBbm51bGxhXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFJpcGV0aVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbGUgZ2xvYmFsZVwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBNb2RpZmljYVwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbGVcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgQ29waWFcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBUYWdsaWFcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIEluY29sbGFcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IEZpZ2xpb1wiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IEZpZ2xpbyBzaW5pc3Ryb1wiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBGcmF0ZWxsb1wiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEVsaW1pbmFcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiTmFzY29uZGkgYmFycmEgZGVnbGkgc3RydW1lbnRpXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxlIGdsb2JhbGVcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJOb2RvIGZpZ2xpb1wiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiTm9kbyByYWRpY2VcIixcclxuICAgIFwic20uYmdcIjogXCJTZm9uZG9cIixcclxuICAgIFwic20udGV4dFwiOiBcIkNvbG9yZSB0ZXN0b1wiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIkRpbWVuc2lvbmUgY2FyYXR0ZXJlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJDYXJhdHRlcmVcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJTdGlsZSBib3Jkb1wiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkNvbG9yZSBib3Jkb1wiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkxhcmdoZXp6YSBib3Jkb1wiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJSYWdnaW8gYm9yZG9cIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJMYXJnaGV6emEgbWluLlwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJBbHRlenphIG1pbi5cIixcclxuICAgIFwic20uY29ublwiOiBcIkNvbm5lc3Npb25lXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUaXBvXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiQ29sb3JlXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiTGFyZ2hlenphXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMdW5naGV6emFcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIkFyY29iYWxlbm9cIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIkRpcmV6aW9uZSBub2RpXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiU3BhemlhdHVyYSBmcmF0ZWxsaVwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIkRlc3RyYVwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiU2luaXN0cmFcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkVudHJhbWJpXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiVGF2b2xvenphXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlNlbGV6aW9uZVwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIkNvbG9yZSBzZWxlemlvbmVcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJMYXJnaGV6emEgc2VsZXppb25lXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlNjb3N0YW1lbnRvIGNvbnRvcm5vXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiQ29sb3JlIGNvbnRvcm5vIG1vZGlmaWNhXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJMYXJnaGV6emEgY29udG9ybm8gbW9kaWZpY2FcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiQWxsaW5lYW1lbnRvIHRlc3RvXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiUmllbXBpbWVudG8gdGVzdG9cIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJBbHRlenphIHJpZ2FcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJTZm9uZG8gYXJlYSBkaSBsYXZvcm9cIixcclxuICAgIFwic20ucmVzZXRcIjogXCJSaXByaXN0aW5hXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiQ2hpdWRpXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiTW9zdHJhIGJhcnJhIHN0cnVtZW50aVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlJpZW1waW1lbnRvIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlN1cGVyaW9yZVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJEZXN0cm9cIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiSW5mZXJpb3JlXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlNpbmlzdHJvXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiUG9zaXppb25lIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiU3VwZXJpb3JlXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiSW5mZXJpb3JlXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJTZm9uZG8gYmFycmFcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlNmb25kbyBwdWxzYW50ZVwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlN0aWxlIGJvcmRvIHB1bHNhbnRlXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJDb2xvcmUgYm9yZG8gcHVsc2FudGVcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiQ29sb3JlIHRlc3RvIHB1bHNhbnRlXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUmlwcmlzdGluYSBiYXJyYSBzdHJ1bWVudGlcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbGUgbm9kb1wiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJDb2xvcmUgbGluZWFcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGFyZ2hlenphIGxpbmVhXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiQ2FuY2VsbGEgcGVyc29uYWxpenphemlvbmVcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmFnZ2lvIGJvcmRvXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIkNlcmNhIG5vZGkuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJSYWRpY2VcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOdW92YSByYWRpY2VcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiRmlnbGlvXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIkltcG9zdGF6aW9uaSBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJMaW5ndWFcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiTGluZ3VhIGRlbGwnaW50ZXJmYWNjaWFcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiVGVtYSBjb2xvcmlcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiQ2hpYXJvXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiU2N1cm9cIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJNb3N0cmEgYmFycmEgc3RydW1lbnRpXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIk1vc3RyYSBiYXJyYSBzdHJ1bWVudGlcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiU2ZvbmRvIGFyZWEgZGkgbGF2b3JvXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJDb2xvcmUgZGkgc2ZvbmRvXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIkluZm9ybWF6aW9uaVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpb25lXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRvcmVcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkFwcCBkaSBtYXBwZSBtZW50YWxpIG9wZW4gc291cmNlIHJpY2NhIGRpIGZ1bnppb25hbGl0XHUwMEUwIHBlciBPYnNpZGlhbiBjb24gc3RpbGkgcGVyc29uYWxpenphdGksIGNvbm5lc3Npb25pIGFyY29iYWxlbm8sIHNlbGV6aW9uZSBtdWx0aXBsYSwgdHJhc2NpbmFtZW50byBlIGltcG9ydGF6aW9uZS9lc3BvcnRhemlvbmUgTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiQWdnaW9ybmF0b1wiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiUmVwb3NpdG9yeSBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlN1cHBvcnRhIGwnYXV0b3JlIG9wZW4gc291cmNlXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiU2NvcmNpYXRvaWUgZGEgdGFzdGllcmFcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiUGVyc29uYWxpenphIHNjb3JjaWF0b2llXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIk1vZGlmaWNhIG5vZG9cIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiQWdnaXVuZ2kgZnJhdGVsbG9cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkFnZ2l1bmdpIGZpZ2xpb1wiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiTWVzc2EgYSBmdW9jbyBzdWwgbm9kb1wiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJBbm51bGxhXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlJpcGV0aVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIkEgY2FwbyAoaW4gbW9kaWZpY2EpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlRyYXNjaW5hIGFyZWEgZGkgbGF2b3JvXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiSW5ncmFuZGlzY2lcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiUmlkdWNpXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiUmVpbXBvc3RhIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hdmlnYSBzdVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOYXZpZ2EgZ2lcdTAwRjlcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiTmF2aWdhIGEgc2luaXN0cmFcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIk5hdmlnYSBhIGRlc3RyYVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiUHJlbWkgdW4gdGFzdG8uLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjb3JyaW1lbnRvIGUgem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVydGkgc2NvcnJpbWVudG8gdmVydGljYWxlXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJ0aSBzY29ycmltZW50byBvcml6em9udGFsZVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGkgZGlyZXppb25lIHpvb21cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIk1vZGlmaWNhIGFsbGEgY3JlYXppb25lXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiTW9kYWxpdFx1MDBFMCBtb2RpZmljYSBhbGxhIGNyZWF6aW9uZSBkZWkgbm9kaVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJOb21lIHJhZGljZVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiTm9tZSBwcmVkZWZpbml0byBwZXIgbnVvdmUgcmFkaWNpXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJOb21lIGZpZ2xpb1wiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIk5vbWUgcHJlZGVmaW5pdG8gcGVyIG51b3ZpIGZpZ2xpXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiRGlnaXRhIHBlciBtb2RpZmljYXJlXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIk1vZGlmaWNhIGRpZ2l0YW5kbyBxdWFuZG8gdW4gbm9kbyBcdTAwRTggc2VsZXppb25hdG9cIixcclxufTtcclxuXHJcbmNvbnN0IF9hcjogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTA2MkNcdTA2MzBcdTA2MzFcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTA2MkFcdTA2MzFcdTA2MjdcdTA2MkNcdTA2MzlcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTA2MjVcdTA2MzlcdTA2MjdcdTA2MkZcdTA2MjlcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIFx1MDYyRVx1MDYzMVx1MDY0QVx1MDYzN1x1MDYyOVwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA2NDZcdTA2NDVcdTA2MzdcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJcdTA2MkFcdTA2MzFcdTA2NDNcdTA2NEFcdTA2MzJcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiXHUwNjI4XHUwNjJEXHUwNjJCXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6XHUwNjI4XHUwNjJEXHUwNjJCIHwgXHUwNjQ1XHUwNjMzXHUwNjI3XHUwNjQxXHUwNjI5Olx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1MDYyQ1x1MDYzMFx1MDYzMSBcdTA2MkNcdTA2MkZcdTA2NEFcdTA2MkZcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiXHUwNjQ4XHUwNjM2XHUwNjM5IE1hcmtkb3duXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjJEXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDY0Nlx1MDY0NVx1MDYyN1x1MDYzN1wiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDYzMVx1MDY0M1x1MDY0QVx1MDYzMiBcdTA2MzlcdTA2NDRcdTA2NDkgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyOFx1MDYyRFx1MDYyQiBcdTA2NDFcdTA2NEEgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjI1XHUwNjM5XHUwNjJGXHUwNjI3XHUwNjJGXHUwNjI3XHUwNjJBXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1MDYyQVx1MDY0M1x1MDYyOFx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHUwNjJBXHUwNjM1XHUwNjNBXHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1MDY0NVx1MDYyRVx1MDYzNVx1MDYzNVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHUwNjJEXHUwNjMwXHUwNjQxIFx1MDYyQ1x1MDY0NVx1MDYyN1x1MDYzOVx1MDY0QVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2NDVcdTA2MzdcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgXHUwNjJDXHUwNjMwXHUwNjMxIFx1MDYyQ1x1MDYyRlx1MDY0QVx1MDYyRlwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBcdTA2MkFcdTA2MzFcdTA2MjdcdTA2MkNcdTA2MzlcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgXHUwNjI1XHUwNjM5XHUwNjI3XHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2NDVcdTA2MzcgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjI3XHUwNjQ1XCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNjQ2XHUwNjQ1XHUwNjM3XCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIFx1MDY0Nlx1MDYzM1x1MDYyRVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFx1MDY0Mlx1MDYzNVwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgXHUwNjQ0XHUwNjM1XHUwNjQyXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBcdTA2NDFcdTA2MzFcdTA2MzlcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBcdTA2NDFcdTA2MzFcdTA2MzkgXHUwNjIzXHUwNjRBXHUwNjMzXHUwNjMxXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFx1MDYzNFx1MDY0Mlx1MDY0QVx1MDY0MlwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDYyRFx1MDYzMFx1MDY0MVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJcdTA2MjVcdTA2MkVcdTA2NDFcdTA2MjdcdTA2MjEgXHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0OFx1MDYyN1x1MDYyQVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2NDVcdTA2MzcgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjI3XHUwNjQ1XCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5IFx1MDY0MVx1MDYzMVx1MDYzOVx1MDY0QVx1MDYyOVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5IFx1MDYyQ1x1MDYzMFx1MDYzMVx1MDY0QVx1MDYyOVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1MDYyN1x1MDY0NFx1MDYyRVx1MDY0NFx1MDY0MVx1MDY0QVx1MDYyOVwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDY0Nlx1MDYzNVwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1MDYyRFx1MDYyQ1x1MDY0NSBcdTA2MjdcdTA2NDRcdTA2MkVcdTA2MzdcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyRVx1MDYzN1wiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1MDY0Nlx1MDY0NVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MkRcdTA2MkZcdTA2NDhcdTA2MkZcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjI3XHUwNjQ0XHUwNjJEXHUwNjJGXHUwNjQ4XHUwNjJGXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHUwNjM5XHUwNjMxXHUwNjM2IFx1MDYyN1x1MDY0NFx1MDYyRFx1MDYyRlx1MDY0OFx1MDYyRlwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTA2MkFcdTA2NDJcdTA2NDhcdTA2NEFcdTA2MzMgXHUwNjI3XHUwNjQ0XHUwNjMyXHUwNjQ4XHUwNjI3XHUwNjRBXHUwNjI3XCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJEXHUwNjJGIFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0Nlx1MDY0OSBcdTA2NDRcdTA2NDRcdTA2MzlcdTA2MzFcdTA2MzZcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJEXHUwNjJGIFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0Nlx1MDY0OSBcdTA2NDRcdTA2NDRcdTA2MjdcdTA2MzFcdTA2MkFcdTA2NDFcdTA2MjdcdTA2MzlcIixcclxuICAgIFwic20uY29ublwiOiBcIlx1MDYyRVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2NDhcdTA2MzVcdTA2NDRcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1MDYyN1x1MDY0NFx1MDY0Nlx1MDY0OFx1MDYzOVwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1MDYyN1x1MDY0NFx1MDY0NFx1MDY0OFx1MDY0NlwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYzOVx1MDYzMVx1MDYzNlwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjM3XHUwNjQ4XHUwNjQ0XCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdTA2NDJcdTA2NDhcdTA2MzMgXHUwNjQyXHUwNjMyXHUwNjJEXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdTA2MjdcdTA2MkFcdTA2MkNcdTA2MjdcdTA2NDcgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjMzXHUwNjI3XHUwNjQxXHUwNjI5IFx1MDYyOFx1MDY0QVx1MDY0NiBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2MzRcdTA2NDJcdTA2MjdcdTA2MjFcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdTA2NEFcdTA2NDVcdTA2NEFcdTA2NDZcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1MDY0QVx1MDYzM1x1MDYyN1x1MDYzMVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHUwNjQzXHUwNjQ0XHUwNjI3XHUwNjQ3XHUwNjQ1XHUwNjI3XCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjJEIFx1MDYyN1x1MDY0NFx1MDYyM1x1MDY0NFx1MDY0OFx1MDYyN1x1MDY0NlwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MkZcdTA2NEFcdTA2MkZcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjJEXHUwNjJGXHUwNjRBXHUwNjJGXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiXHUwNjM5XHUwNjMxXHUwNjM2IFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYyRlx1MDY0QVx1MDYyRlwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTA2MjVcdTA2MzJcdTA2MjdcdTA2MkRcdTA2MjkgXHUwNjI3XHUwNjQ0XHUwNjI1XHUwNjM3XHUwNjI3XHUwNjMxXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyNVx1MDYzN1x1MDYyN1x1MDYzMSBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1MDYzOVx1MDYzMVx1MDYzNiBcdTA2MjVcdTA2MzdcdTA2MjdcdTA2MzEgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjJEXHUwNjMxXHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1MDY0NVx1MDYyRFx1MDYyN1x1MDYzMFx1MDYyN1x1MDYyOSBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2MzVcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJcdTA2MkRcdTA2MzRcdTA2NDggXHUwNjI3XHUwNjQ0XHUwNjQ2XHUwNjM1XCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHUwNjI3XHUwNjMxXHUwNjJBXHUwNjQxXHUwNjI3XHUwNjM5IFx1MDYyN1x1MDY0NFx1MDYzM1x1MDYzN1x1MDYzMVwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1MDYyRVx1MDY0NFx1MDY0MVx1MDY0QVx1MDYyOSBcdTA2MjdcdTA2NDRcdTA2NDRcdTA2NDhcdTA2MkRcdTA2MjlcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJcdTA2MjVcdTA2MzlcdTA2MjdcdTA2MkZcdTA2MjkgXHUwNjJBXHUwNjM5XHUwNjRBXHUwNjRBXHUwNjQ2XCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiXHUwNjI1XHUwNjNBXHUwNjQ0XHUwNjI3XHUwNjQyXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiXHUwNjI1XHUwNjM4XHUwNjQ3XHUwNjI3XHUwNjMxIFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2MkZcdTA2NDhcdTA2MjdcdTA2MkFcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdTA2MkRcdTA2MzRcdTA2NDggXHUwNjI3XHUwNjQ0XHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3XCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1MDYyM1x1MDYzOVx1MDY0NFx1MDY0OVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTA2NEFcdTA2NDVcdTA2NEFcdTA2NDZcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHUwNjIzXHUwNjMzXHUwNjQxXHUwNjQ0XCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1MDY0QVx1MDYzM1x1MDYyN1x1MDYzMVwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MDY0NVx1MDY0OFx1MDYzNlx1MDYzOSBcdTA2MjdcdTA2NDRcdTA2MzRcdTA2MzFcdTA2NEFcdTA2MzdcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTA2MjNcdTA2MzlcdTA2NDRcdTA2NDlcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTA2MjNcdTA2MzNcdTA2NDFcdTA2NDRcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1MDYyRVx1MDY0NFx1MDY0MVx1MDY0QVx1MDYyOSBcdTA2MjdcdTA2NDRcdTA2MzRcdTA2MzFcdTA2NEFcdTA2MzdcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1MDYyRVx1MDY0NFx1MDY0MVx1MDY0QVx1MDYyOSBcdTA2MjdcdTA2NDRcdTA2MzJcdTA2MzFcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTA2NDZcdTA2NDVcdTA2MzcgXHUwNjJEXHUwNjJGXHUwNjQ4XHUwNjJGIFx1MDYyN1x1MDY0NFx1MDYzMlx1MDYzMVwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyRFx1MDYyRlx1MDY0OFx1MDYyRiBcdTA2MjdcdTA2NDRcdTA2MzJcdTA2MzFcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDY0Nlx1MDYzNSBcdTA2MjdcdTA2NDRcdTA2MzJcdTA2MzFcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTA2MjVcdTA2MzlcdTA2MjdcdTA2MkZcdTA2MjkgXHUwNjJBXHUwNjM5XHUwNjRBXHUwNjRBXHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzN1wiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA2NDZcdTA2NDVcdTA2MzcgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1MDY0NFx1MDY0OFx1MDY0NiBcdTA2MjdcdTA2NDRcdTA2MkVcdTA2MzdcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHUwNjM5XHUwNjMxXHUwNjM2IFx1MDYyN1x1MDY0NFx1MDYyRVx1MDYzN1wiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlx1MDY0NVx1MDYzM1x1MDYyRCBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkVcdTA2MzVcdTA2NEFcdTA2MzVcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHUwNjJBXHUwNjQyXHUwNjQ4XHUwNjRBXHUwNjMzIFx1MDYyN1x1MDY0NFx1MDYzMlx1MDY0OFx1MDYyN1x1MDY0QVx1MDYyN1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJcdTA2MjdcdTA2NDRcdTA2MjhcdTA2MkRcdTA2MkIgXHUwNjQxXHUwNjRBIFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0Mlx1MDYyRi4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MDYyQ1x1MDYzMFx1MDYzMVwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1MDYyQ1x1MDYzMFx1MDYzMSBcdTA2MkNcdTA2MkZcdTA2NEFcdTA2MkZcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHUwNjQxXHUwNjMxXHUwNjM5XCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIlx1MDYyNVx1MDYzOVx1MDYyRlx1MDYyN1x1MDYyRlx1MDYyN1x1MDYyQSBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdTA2MjdcdTA2NDRcdTA2NDRcdTA2M0FcdTA2MjlcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHUwNjQ0XHUwNjNBXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDY0OFx1MDYyN1x1MDYyQ1x1MDY0N1x1MDYyOVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdTA2MjdcdTA2NDRcdTA2MzNcdTA2NDVcdTA2MjlcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlx1MDYzM1x1MDY0NVx1MDYyOSBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2NDRcdTA2NDhcdTA2MjdcdTA2NDZcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiXHUwNjQxXHUwNjI3XHUwNjJBXHUwNjJEXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiXHUwNjJGXHUwNjI3XHUwNjQzXHUwNjQ2XCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiXHUwNjI1XHUwNjM4XHUwNjQ3XHUwNjI3XHUwNjMxIFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2MkZcdTA2NDhcdTA2MjdcdTA2MkFcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiXHUwNjI1XHUwNjM4XHUwNjQ3XHUwNjI3XHUwNjMxIFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2MkZcdTA2NDhcdTA2MjdcdTA2MkFcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiXHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDY0NFx1MDY0OFx1MDYyRFx1MDYyOVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYyRVx1MDY0NFx1MDY0MVx1MDY0QVx1MDYyOVwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTA2MkRcdTA2NDhcdTA2NDRcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdTA2MjdcdTA2NDRcdTA2MjVcdTA2MzVcdTA2MkZcdTA2MjdcdTA2MzFcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1MDYyN1x1MDY0NFx1MDY0NVx1MDYyNFx1MDY0NFx1MDY0MVwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiXHUwNjJBXHUwNjM3XHUwNjI4XHUwNjRBXHUwNjQyIFx1MDYyRVx1MDYzMVx1MDYyN1x1MDYyNlx1MDYzNyBcdTA2MzBcdTA2NDdcdTA2NDZcdTA2NEFcdTA2MjkgXHUwNjQ1XHUwNjQxXHUwNjJBXHUwNjQ4XHUwNjJEIFx1MDYyN1x1MDY0NFx1MDY0NVx1MDYzNVx1MDYyRlx1MDYzMSBcdTA2M0FcdTA2NDZcdTA2NEEgXHUwNjI4XHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjRBXHUwNjMyXHUwNjI3XHUwNjJBIFx1MDY0NFx1MDY0MCBPYnNpZGlhbiBcdTA2NDVcdTA2MzkgXHUwNjIzXHUwNjQ2XHUwNjQ1XHUwNjI3XHUwNjM3IFx1MDY0NVx1MDYyRVx1MDYzNVx1MDYzNVx1MDYyOVx1MDYwQyBcdTA2NDhcdTA2MzVcdTA2NDRcdTA2MjdcdTA2MkEgXHUwNjQyXHUwNjQ4XHUwNjMzIFx1MDY0Mlx1MDYzMlx1MDYyRFx1MDYwQyBcdTA2MkFcdTA2MkRcdTA2MkZcdTA2NEFcdTA2MkYgXHUwNjQ1XHUwNjJBXHUwNjM5XHUwNjJGXHUwNjJGXHUwNjBDIFx1MDYzM1x1MDYyRFx1MDYyOCBcdTA2NDhcdTA2MjVcdTA2NDFcdTA2NDRcdTA2MjdcdTA2MkFcdTA2MEMgXHUwNjQ4XHUwNjI3XHUwNjMzXHUwNjJBXHUwNjRBXHUwNjMxXHUwNjI3XHUwNjJGL1x1MDYyQVx1MDYzNVx1MDYyRlx1MDY0QVx1MDYzMSBNYXJrZG93bi5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJcdTA2MkFcdTA2NDUgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjJEXHUwNjJGXHUwNjRBXHUwNjJCXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJcdTA2NDVcdTA2MzNcdTA2MkFcdTA2NDhcdTA2MkZcdTA2MzkgR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdTA2MjdcdTA2MkZcdTA2MzlcdTA2NDUgXHUwNjQ1XHUwNjI0XHUwNjQ0XHUwNjQxIFx1MDYyN1x1MDY0NFx1MDY0NVx1MDYzNVx1MDYyRlx1MDYzMSBcdTA2MjdcdTA2NDRcdTA2NDVcdTA2NDFcdTA2MkFcdTA2NDhcdTA2MkRcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJcdTA2MjdcdTA2MkVcdTA2MkFcdTA2MzVcdTA2MjdcdTA2MzFcdTA2MjdcdTA2MkEgXHUwNjQ0XHUwNjQ4XHUwNjJEXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDY0NVx1MDY0MVx1MDYyN1x1MDYyQVx1MDY0QVx1MDYyRFwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJcdTA2MkFcdTA2MkVcdTA2MzVcdTA2NEFcdTA2MzUgXHUwNjI3XHUwNjQ0XHUwNjI3XHUwNjJFXHUwNjJBXHUwNjM1XHUwNjI3XHUwNjMxXHUwNjI3XHUwNjJBXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2NDJcdTA2MkZcdTA2MjlcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHUwNjI1XHUwNjM2XHUwNjI3XHUwNjQxXHUwNjI5IFx1MDYzNFx1MDY0Mlx1MDY0QVx1MDY0MlwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHUwNjI1XHUwNjM2XHUwNjI3XHUwNjQxXHUwNjI5IFx1MDY0MVx1MDYzMVx1MDYzOVwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjMxXHUwNjQzXHUwNjRBXHUwNjMyIFx1MDYzOVx1MDY0NFx1MDY0OSBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2NDJcdTA2MkZcdTA2MjlcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHUwNjJBXHUwNjMxXHUwNjI3XHUwNjJDXHUwNjM5XCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1MDYyNVx1MDYzOVx1MDYyN1x1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1MDY0MVx1MDYyN1x1MDYzNVx1MDY0NCBcdTA2MzNcdTA2MzdcdTA2MzEgKFx1MDYyM1x1MDYyQlx1MDY0Nlx1MDYyN1x1MDYyMSBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzEpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlx1MDYzM1x1MDYyRFx1MDYyOCBcdTA2MjdcdTA2NDRcdTA2NDRcdTA2NDhcdTA2MkRcdTA2MjlcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTA2MkFcdTA2NDNcdTA2MjhcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHUwNjJBXHUwNjM1XHUwNjNBXHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUwNjI1XHUwNjM5XHUwNjI3XHUwNjJGXHUwNjI5IFx1MDYyQVx1MDYzOVx1MDY0QVx1MDY0QVx1MDY0NiBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDNcdTA2MjhcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0Nlx1MDY0Mlx1MDY0NCBcdTA2NDRcdTA2MjNcdTA2MzlcdTA2NDRcdTA2NDlcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQ2XHUwNjQyXHUwNjQ0IFx1MDY0NFx1MDYyM1x1MDYzM1x1MDY0MVx1MDY0NFwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDZcdTA2NDJcdTA2NDQgXHUwNjQ0XHUwNjQ0XHUwNjRBXHUwNjMzXHUwNjI3XHUwNjMxXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDZcdTA2NDJcdTA2NDQgXHUwNjQ0XHUwNjQ0XHUwNjRBXHUwNjQ1XHUwNjRBXHUwNjQ2XCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJcdTA2MjdcdTA2MzZcdTA2M0FcdTA2MzcgXHUwNjQ1XHUwNjQxXHUwNjJBXHUwNjI3XHUwNjJEXHUwNjI3XHUwNjRCLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDVcdTA2MzFcdTA2NEFcdTA2MzEgXHUwNjQ4XHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQzXHUwNjI4XHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHUwNjM5XHUwNjQzXHUwNjMzIFx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0NVx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2NDVcdTA2NDhcdTA2MkZcdTA2NEFcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJcdTA2MzlcdTA2NDNcdTA2MzMgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQ1XHUwNjMxXHUwNjRBXHUwNjMxIFx1MDYyN1x1MDY0NFx1MDYyM1x1MDY0MVx1MDY0Mlx1MDY0QVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MDYzOVx1MDY0M1x1MDYzMyBcdTA2MjdcdTA2MkFcdTA2MkNcdTA2MjdcdTA2NDcgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQzXHUwNjI4XHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzEgXHUwNjM5XHUwNjQ2XHUwNjJGIFx1MDYyN1x1MDY0NFx1MDYyNVx1MDY0Nlx1MDYzNFx1MDYyN1x1MDYyMVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIlx1MDY0OFx1MDYzNlx1MDYzOSBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzEgXHUwNjM5XHUwNjQ2XHUwNjJGIFx1MDYyNVx1MDY0Nlx1MDYzNFx1MDYyN1x1MDYyMSBcdTA2MzlcdTA2NDJcdTA2MkYgXHUwNjJDXHUwNjJGXHUwNjRBXHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlx1MDYyN1x1MDYzM1x1MDY0NSBcdTA2MjdcdTA2NDRcdTA2MkNcdTA2MzBcdTA2MzFcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlx1MDYyN1x1MDY0NFx1MDYyN1x1MDYzM1x1MDY0NSBcdTA2MjdcdTA2NDRcdTA2MjdcdTA2NDFcdTA2MkFcdTA2MzFcdTA2MjdcdTA2MzZcdTA2NEEgXHUwNjQ0XHUwNjQ0XHUwNjJDXHUwNjMwXHUwNjQ4XHUwNjMxIFx1MDYyN1x1MDY0NFx1MDYyQ1x1MDYyRlx1MDY0QVx1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiXHUwNjI3XHUwNjMzXHUwNjQ1IFx1MDYyN1x1MDY0NFx1MDY0MVx1MDYzMVx1MDYzOVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlx1MDYyN1x1MDY0NFx1MDYyN1x1MDYzM1x1MDY0NSBcdTA2MjdcdTA2NDRcdTA2MjdcdTA2NDFcdTA2MkFcdTA2MzFcdTA2MjdcdTA2MzZcdTA2NEEgXHUwNjQ0XHUwNjQ0XHUwNjQxXHUwNjMxXHUwNjQ4XHUwNjM5IFx1MDYyN1x1MDY0NFx1MDYyQ1x1MDYyRlx1MDY0QVx1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlx1MDYyN1x1MDY0M1x1MDYyQVx1MDYyOCBcdTA2NDRcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiXHUwNjJEXHUwNjMxXHUwNjUxXHUwNjMxIFx1MDYyOFx1MDYyN1x1MDY0NFx1MDY0M1x1MDYyQVx1MDYyN1x1MDYyOFx1MDYyOSBcdTA2MzlcdTA2NDZcdTA2MkYgXHUwNjJBXHUwNjJEXHUwNjJGXHUwNjRBXHUwNjJGIFx1MDYzOVx1MDY0Mlx1MDYyRlx1MDYyOVwiLFxyXG59O1xyXG5cclxuY29uc3QgQUxMOiBSZWNvcmQ8TGFuZ3VhZ2UsIHR5cGVvZiBfZW4+ID0ge1xyXG4gICAgZW46IF9lbixcclxuICAgIHpoOiBfemgsXHJcbiAgICBqYTogX2phLFxyXG4gICAgZnI6IF9mcixcclxuICAgIGRlOiBfZGUsXHJcbiAgICBlczogX2VzLFxyXG4gICAgcnU6IF9ydSxcclxuICAgIHN2OiBfc3YsXHJcbiAgICBoaTogX2hpLFxyXG4gICAga286IF9rbyxcclxuICAgIHB0OiBfcHQsXHJcbiAgICBmaTogX2ZpLFxyXG4gICAgbm86IF9ubyxcclxuICAgIG5sOiBfbmwsXHJcbiAgICBsaTogX2xpLFxyXG4gICAgZGE6IF9kYSxcclxuICAgIGhlOiBfaGUsXHJcbiAgICBpdDogX2l0LFxyXG4gICAgYXI6IF9hcixcclxufTtcclxuXHJcbmxldCBfbGFuZzogTGFuZ3VhZ2UgPSBcImVuXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMYW5nKGw6IExhbmd1YWdlKSB7XHJcbiAgICBfbGFuZyA9IGw7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmcoKTogTGFuZ3VhZ2Uge1xyXG4gICAgcmV0dXJuIF9sYW5nO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoQUxMW19sYW5nXSBhcyBhbnkpPy5ba2V5XSA/PyAoQUxMW1wiZW5cIl0gYXMgYW55KT8uW2tleV0gPz8ga2V5O1xyXG59XHJcbiIsICIvLyBzcmMvU3R5bGVQYW5lbFZpZXcudHNcclxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFNldHRpbmcgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHtcclxuICAgIFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFLFxyXG4gICAgVklFV19UWVBFX01JTkRNQVAsXHJcbiAgICBNaW5kTWFwU3R5bGUsXHJcbiAgICBERUZBVUxUX1NUWUxFLFxyXG4gICAgRk9OVF9MSVNULFxyXG4gICAgQ09OTkVDVElPTl9TVFlMRVMsXHJcbiAgICBSQUlOQk9XX1BBTEVUVEVTLFxyXG59IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IHQgfSBmcm9tIFwiLi9pMThuXCI7XHJcbmltcG9ydCB7IE1pbmRNYXBWaWV3IH0gZnJvbSBcIi4vTWluZE1hcFZpZXdcIjtcclxuaW1wb3J0IHR5cGUgTWluZE5vZGVQbHVnaW4gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0eWxlUGFuZWxWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xyXG4gICAgcHJpdmF0ZSBwbHVnaW46IE1pbmROb2RlUGx1Z2luO1xyXG4gICAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBNaW5kTm9kZVBsdWdpbikge1xyXG4gICAgICAgIHN1cGVyKGxlYWYpO1xyXG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgfVxyXG4gICAgZ2V0Vmlld1R5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFO1xyXG4gICAgfVxyXG4gICAgZ2V0RGlzcGxheVRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiTWluZFpKIFwiICsgdChcInRiLnN0eWxlXCIpO1xyXG4gICAgfVxyXG4gICAgZ2V0SWNvbigpIHtcclxuICAgICAgICByZXR1cm4gXCJwYWxldHRlXCI7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXRcclxuICAgIGFzeW5jIG9uT3BlbigpIHtcclxuICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXRcclxuICAgIGFzeW5jIG9uQ2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLyogbm8gY2xlYW51cCBuZWVkZWQgKi9cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFZpZXcoKTogTWluZE1hcFZpZXcgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBsID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfTUlORE1BUCk7XHJcbiAgICAgICAgcmV0dXJuIGwubGVuZ3RoID4gMCAmJiBsWzBdLnZpZXcgaW5zdGFuY2VvZiBNaW5kTWFwVmlld1xyXG4gICAgICAgICAgICA/IGxbMF0udmlld1xyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZCgpIHtcclxuICAgICAgICBjb25zdCBjdCA9IHRoaXMuY29udGFpbmVyRWwuY2hpbGRyZW5bMV0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY3QuZW1wdHkoKTtcclxuICAgICAgICBjdC5hZGRDbGFzcyhcIm16LXNwLWN0XCIpO1xyXG5cclxuICAgICAgICBuZXcgU2V0dGluZyhjdCkuc2V0TmFtZSh0KFwic20udGl0bGVcIikpLnNldEhlYWRpbmcoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuZ2V0VmlldygpO1xyXG4gICAgICAgIGNvbnN0IHM6IE1pbmRNYXBTdHlsZSA9IHZpZXc/LnN0eWxlXHJcbiAgICAgICAgICAgID8geyAuLi52aWV3LnN0eWxlIH1cclxuICAgICAgICAgICAgOiB0aGlzLnBsdWdpbi5nZXRTdHlsZSgpO1xyXG4gICAgICAgIGNvbnN0IHVwZCA9IChwOiBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMuZ2V0VmlldygpO1xyXG4gICAgICAgICAgICBpZiAodikgdi5hcHBseVN0eWxlKHApO1xyXG4gICAgICAgICAgICBlbHNlIHZvaWQgdGhpcy5wbHVnaW4udXBkYXRlU3R5bGUocCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FmZVN0ciA9ICh2YWw6IE1pbmRNYXBTdHlsZVtrZXlvZiBNaW5kTWFwU3R5bGVdKTogc3RyaW5nID0+XHJcbiAgICAgICAgICAgIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgID8gdmFsXHJcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgPyBTdHJpbmcodmFsKVxyXG4gICAgICAgICAgICAgICAgICA6IHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBTdHJpbmcodmFsKVxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgbWtTZWMgPSAoaWNvbjogc3RyaW5nLCB0aXRsZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYyA9IGN0LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBzZWMuYWRkQ2xhc3MoXCJtei1zcC1zZWNcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhkciA9IHNlYy5jcmVhdGVFbChcImRpdlwiLCB7IHRleHQ6IGljb24gKyBcIiAgXCIgKyB0aXRsZSB9KTtcclxuICAgICAgICAgICAgaGRyLmFkZENsYXNzKFwibXotc3Atc2VjLWhkclwiKTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHNlYy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgYi5hZGRDbGFzcyhcIm16LXNwLXNlYy1ib2R5XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gYjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1rUm93ID0gKHA6IEhUTUxFbGVtZW50LCBsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHAuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHIuYWRkQ2xhc3MoXCJtei1zcC1yb3dcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxibCA9IHIuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbCB9KTtcclxuICAgICAgICAgICAgbGJsLmFkZENsYXNzKFwibXotc3AtbGJsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1rQ29sb3IgPSAocDogSFRNTEVsZW1lbnQsIGw6IHN0cmluZywgazoga2V5b2YgTWluZE1hcFN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBta1JvdyhwLCBsKTtcclxuICAgICAgICAgICAgY29uc3QgaSA9IHIuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpLnR5cGUgPSBcImNvbG9yXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGN2ID0gc1trXTtcclxuICAgICAgICAgICAgaS52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgY3YgPT09IFwic3RyaW5nXCIgJiYgY3Yuc3RhcnRzV2l0aChcInZhclwiKVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICA6IHNhZmVTdHIoY3YpO1xyXG4gICAgICAgICAgICBpLmFkZENsYXNzKFwibXotc3AtY29sb3JcIik7XHJcbiAgICAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICB1cGQoeyBba106IGkudmFsdWUgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtSYW5nZSA9IChcclxuICAgICAgICAgICAgcDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICAgIGw6IHN0cmluZyxcclxuICAgICAgICAgICAgazoga2V5b2YgTWluZE1hcFN0eWxlLFxyXG4gICAgICAgICAgICBtaW46IG51bWJlcixcclxuICAgICAgICAgICAgbWF4OiBudW1iZXIsXHJcbiAgICAgICAgICAgIHN0ZXA/OiBudW1iZXIsXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBta1JvdyhwLCBsKTtcclxuICAgICAgICAgICAgY29uc3QgdyA9IHIuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHcuYWRkQ2xhc3MoXCJtei1zcC1yYW5nZS13cmFwXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBpID0gdy5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGkudHlwZSA9IFwicmFuZ2VcIjtcclxuICAgICAgICAgICAgaS5taW4gPSBTdHJpbmcobWluKTtcclxuICAgICAgICAgICAgaS5tYXggPSBTdHJpbmcobWF4KTtcclxuICAgICAgICAgICAgaWYgKHN0ZXApIGkuc3RlcCA9IFN0cmluZyhzdGVwKTtcclxuICAgICAgICAgICAgaS52YWx1ZSA9IHNhZmVTdHIoc1trXSk7XHJcbiAgICAgICAgICAgIGkuYWRkQ2xhc3MoXCJtei1zcC1yYW5nZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbiA9IHcuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogc2FmZVN0cihzW2tdKSB9KTtcclxuICAgICAgICAgICAgbi5hZGRDbGFzcyhcIm16LXNwLXJhbmdlLXZhbFwiKTtcclxuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbi50ZXh0Q29udGVudCA9IGkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB1cGQoeyBba106IE51bWJlcihpLnZhbHVlKSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtOdW0gPSAoXHJcbiAgICAgICAgICAgIHA6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgICAgICBsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGs6IGtleW9mIE1pbmRNYXBTdHlsZSxcclxuICAgICAgICAgICAgbWluOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG1heDogbnVtYmVyLFxyXG4gICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByID0gbWtSb3cocCwgbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGkgPSByLmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaS50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICAgICAgaS5taW4gPSBTdHJpbmcobWluKTtcclxuICAgICAgICAgICAgaS5tYXggPSBTdHJpbmcobWF4KTtcclxuICAgICAgICAgICAgaS52YWx1ZSA9IHNhZmVTdHIoc1trXSk7XHJcbiAgICAgICAgICAgIGkuYWRkQ2xhc3MoXCJtei1zcC1udW1cIik7XHJcbiAgICAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxyXG4gICAgICAgICAgICAgICAgdXBkKHsgW2tdOiBOdW1iZXIoaS52YWx1ZSkgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtTZWwgPSAoXHJcbiAgICAgICAgICAgIHA6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgICAgICBsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGs6IGtleW9mIE1pbmRNYXBTdHlsZSxcclxuICAgICAgICAgICAgb3B0czogc3RyaW5nW10sXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBta1JvdyhwLCBsKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsID0gci5jcmVhdGVFbChcInNlbGVjdFwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICAgICAgc2VsLmFkZENsYXNzKFwibXotc3Atc2VsXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygb3B0cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgb3AudmFsdWUgPSBvO1xyXG4gICAgICAgICAgICAgICAgb3AudGV4dCA9IG87XHJcbiAgICAgICAgICAgICAgICBpZiAobyA9PT0gc2FmZVN0cihzW2tdKSkgb3Auc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2VsLmFwcGVuZENoaWxkKG9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxyXG4gICAgICAgICAgICAgICAgdXBkKHsgW2tdOiBzZWwudmFsdWUgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIENoaWxkIG5vZGVcclxuICAgICAgICBjb25zdCBzMSA9IG1rU2VjKFwiXHVEODNEXHVEQ0U2XCIsIHQoXCJzbS5jaGlsZFwiKSk7XHJcbiAgICAgICAgbWtDb2xvcihzMSwgdChcInNtLmJnXCIpLCBcIm5vZGVCZ0NvbG9yXCIpO1xyXG4gICAgICAgIG1rQ29sb3IoczEsIHQoXCJzbS50ZXh0XCIpLCBcIm5vZGVUZXh0Q29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzMSwgdChcInNtLmZvbnRTaXplXCIpLCBcIm5vZGVGb250U2l6ZVwiLCAxMCwgMzIpO1xyXG4gICAgICAgIG1rU2VsKHMxLCB0KFwic20uZm9udFwiKSwgXCJub2RlRm9udEZhbWlseVwiLCBGT05UX0xJU1QpO1xyXG4gICAgICAgIG1rU2VsKHMxLCB0KFwic20uYm9yZGVyU3R5bGVcIiksIFwibm9kZUJvcmRlclN0eWxlXCIsIFtcclxuICAgICAgICAgICAgXCJzb2xpZFwiLFxyXG4gICAgICAgICAgICBcImRhc2hlZFwiLFxyXG4gICAgICAgICAgICBcImRvdHRlZFwiLFxyXG4gICAgICAgICAgICBcImRvdWJsZVwiLFxyXG4gICAgICAgICAgICBcIm5vbmVcIixcclxuICAgICAgICBdKTtcclxuICAgICAgICBta0NvbG9yKHMxLCB0KFwic20uYm9yZGVyQ29sb3JcIiksIFwibm9kZUJvcmRlckNvbG9yXCIpO1xyXG4gICAgICAgIG1rUmFuZ2UoczEsIHQoXCJzbS5ib3JkZXJXaWR0aFwiKSwgXCJub2RlQm9yZGVyV2lkdGhcIiwgMCwgOCk7XHJcbiAgICAgICAgbWtSYW5nZShzMSwgdChcInNtLmJvcmRlclJhZGl1c1wiKSwgXCJub2RlQm9yZGVyUmFkaXVzXCIsIDAsIDMyKTtcclxuICAgICAgICBta051bShzMSwgdChcInNtLm1pbldpZHRoXCIpLCBcIm5vZGVNaW5XaWR0aFwiLCAzMCwgNDAwKTtcclxuICAgICAgICBta051bShzMSwgdChcInNtLm1pbkhlaWdodFwiKSwgXCJub2RlTWluSGVpZ2h0XCIsIDIwLCAyMDApO1xyXG5cclxuICAgICAgICAvLyBSb290IG5vZGVcclxuICAgICAgICBjb25zdCBzMiA9IG1rU2VjKFwiXHVEODNDXHVERkUwXCIsIHQoXCJzbS5yb290XCIpKTtcclxuICAgICAgICBta0NvbG9yKHMyLCB0KFwic20uYmdcIiksIFwicm9vdEJnQ29sb3JcIik7XHJcbiAgICAgICAgbWtDb2xvcihzMiwgdChcInNtLnRleHRcIiksIFwicm9vdFRleHRDb2xvclwiKTtcclxuICAgICAgICBta1JhbmdlKHMyLCB0KFwic20uZm9udFNpemVcIiksIFwicm9vdEZvbnRTaXplXCIsIDEwLCAzMik7XHJcbiAgICAgICAgbWtTZWwoczIsIHQoXCJzbS5mb250XCIpLCBcInJvb3RGb250RmFtaWx5XCIsIEZPTlRfTElTVCk7XHJcbiAgICAgICAgbWtTZWwoczIsIHQoXCJzbS5ib3JkZXJTdHlsZVwiKSwgXCJyb290Qm9yZGVyU3R5bGVcIiwgW1xyXG4gICAgICAgICAgICBcInNvbGlkXCIsXHJcbiAgICAgICAgICAgIFwiZGFzaGVkXCIsXHJcbiAgICAgICAgICAgIFwiZG90dGVkXCIsXHJcbiAgICAgICAgICAgIFwiZG91YmxlXCIsXHJcbiAgICAgICAgICAgIFwibm9uZVwiLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIG1rQ29sb3IoczIsIHQoXCJzbS5ib3JkZXJDb2xvclwiKSwgXCJyb290Qm9yZGVyQ29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzMiwgdChcInNtLmJvcmRlcldpZHRoXCIpLCBcInJvb3RCb3JkZXJXaWR0aFwiLCAwLCA4KTtcclxuICAgICAgICBta1JhbmdlKHMyLCB0KFwic20uYm9yZGVyUmFkaXVzXCIpLCBcInJvb3RCb3JkZXJSYWRpdXNcIiwgMCwgMzIpO1xyXG4gICAgICAgIG1rTnVtKHMyLCB0KFwic20ubWluV2lkdGhcIiksIFwicm9vdE1pbldpZHRoXCIsIDUwLCA0MDApO1xyXG4gICAgICAgIG1rTnVtKHMyLCB0KFwic20ubWluSGVpZ2h0XCIpLCBcInJvb3RNaW5IZWlnaHRcIiwgMjAsIDIwMCk7XHJcblxyXG4gICAgICAgIC8vIENvbm5lY3Rpb25cclxuICAgICAgICBjb25zdCBzMyA9IG1rU2VjKFwiXHVEODNEXHVERDE3XCIsIHQoXCJzbS5jb25uXCIpKTtcclxuICAgICAgICBta1NlbChzMywgdChcInNtLnR5cGVcIiksIFwiY29ubmVjdGlvblN0eWxlXCIsIENPTk5FQ1RJT05fU1RZTEVTKTtcclxuICAgICAgICBta0NvbG9yKHMzLCB0KFwic20uY29sb3JcIiksIFwiY29ubmVjdGlvbkNvbG9yXCIpO1xyXG4gICAgICAgIG1rUmFuZ2UoczMsIHQoXCJzbS53aWR0aFwiKSwgXCJjb25uZWN0aW9uV2lkdGhcIiwgMSwgOCk7XHJcbiAgICAgICAgbWtOdW0oczMsIHQoXCJzbS5jb25uTGVuZ3RoXCIpLCBcImNvbm5lY3Rpb25MZW5ndGhcIiwgMzAsIDMwMCk7XHJcbiAgICAgICAgbWtTZWwoczMsIHQoXCJzbS5ub2RlRGlyXCIpLCBcIm5vZGVEaXJlY3Rpb25cIiwgW1wicmlnaHRcIiwgXCJsZWZ0XCIsIFwiYm90aFwiXSk7XHJcbiAgICAgICAgbWtSYW5nZShzMywgdChcInNtLm5vZGVHYXBZXCIpLCBcIm5vZGVHYXBZXCIsIDgsIDgwKTtcclxuXHJcbiAgICAgICAgLy8gUmFpbmJvd1xyXG4gICAgICAgIGNvbnN0IGN0Um93ID0gczMuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgY3RSb3cuYWRkQ2xhc3MoXCJtei1yYWluYm93LWN0XCIpO1xyXG4gICAgICAgIGNvbnN0IHJsYmwgPSBjdFJvdy5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiB0KFwic20ucmFpbmJvd1wiKSB9KTtcclxuICAgICAgICBybGJsLmFkZENsYXNzKFwibXotcmFpbmJvdy1sYmxcIik7XHJcbiAgICAgICAgY29uc3QgYWxsUDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge1xyXG4gICAgICAgICAgICAuLi5SQUlOQk9XX1BBTEVUVEVTLFxyXG4gICAgICAgICAgICAuLi4ocy5jdXN0b21SYWluYm93cyB8fCB7fSksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBjdXJQID0gcy5jb25uZWN0aW9uUmFpbmJvdyA/IHMucmFpbmJvd1BhbGV0dGUgOiBcIm9mZlwiO1xyXG4gICAgICAgIGNvbnN0IGx3ID0gY3RSb3cuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgbHcuYWRkQ2xhc3MoXCJtei1yYWluYm93LWxpc3RcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG1rSSA9IChrZXk6IHN0cmluZywgbGFiZWw6IHN0cmluZywgY29sb3JzOiBzdHJpbmdbXSB8IG51bGwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXQgPSBsdy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgaXQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWl0ZW1cIik7XHJcbiAgICAgICAgICAgIGl0LnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIsIGtleSA9PT0gY3VyUCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxibEVsID0gaXQuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbGFiZWwgfSk7XHJcbiAgICAgICAgICAgIGxibEVsLmFkZENsYXNzKFwibXotcmFpbmJvdy1pdGVtLWxibFwiKTtcclxuICAgICAgICAgICAgaWYgKGNvbG9ycykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHMgPSBpdC5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICBkcy5hZGRDbGFzcyhcIm16LXJhaW5ib3ctZG90c1wiKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBjb2xvcnMuc2xpY2UoMCwgMTApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IGRzLmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkLmFkZENsYXNzKFwibXotcmFpbmJvdy1kb3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoeyBcIi0tbXotZG90LWNvbG9yXCI6IGMgfSkuZm9yRWFjaCgoW2ssIHZdKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLnN0eWxlLnNldFByb3BlcnR5KGssIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwib2ZmXCIpIHVwZCh7IGNvbm5lY3Rpb25SYWluYm93OiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdXBkKHsgY29ubmVjdGlvblJhaW5ib3c6IHRydWUsIHJhaW5ib3dQYWxldHRlOiBrZXkgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWtJKFwib2ZmXCIsIFwiU29saWRcIiwgbnVsbCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgY29sb3JzXSBvZiBPYmplY3QuZW50cmllcyhhbGxQKSlcclxuICAgICAgICAgICAgbWtJKG5hbWUsIG5hbWUsIGNvbG9ycyk7XHJcblxyXG4gICAgICAgIC8vIFRleHRcclxuICAgICAgICBjb25zdCBzM2IgPSBta1NlYyhcIlx1RDgzRFx1RENERFwiLCB0KFwic20udGV4dEFsaWduXCIpKTtcclxuICAgICAgICBta1NlbChzM2IsIHQoXCJzbS50ZXh0QWxpZ25cIiksIFwidGV4dEFsaWduXCIsIFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSk7XHJcblxyXG4gICAgICAgIC8vIFNlbGVjdGlvblxyXG4gICAgICAgIGNvbnN0IHM0ID0gbWtTZWMoXCJcdTI3MDVcIiwgdChcInNtLnNlbFwiKSk7XHJcbiAgICAgICAgbWtDb2xvcihzNCwgdChcInNtLnNlbENvbG9yXCIpLCBcInNlbGVjdGlvbkNvbG9yXCIpO1xyXG4gICAgICAgIG1rUmFuZ2UoczQsIHQoXCJzbS5zZWxXaWR0aFwiKSwgXCJzZWxlY3Rpb25XaWR0aFwiLCAxLCA4KTtcclxuICAgICAgICBta051bShzNCwgdChcInNtLnNlbE9mZnNldFwiKSwgXCJzZWxlY3Rpb25PdXRsaW5lT2Zmc2V0XCIsIC01LCAyMCk7XHJcbiAgICAgICAgbWtDb2xvcihzNCwgdChcInNtLmVkaXRPdXRsaW5lXCIpLCBcImVkaXRPdXRsaW5lQ29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzNCwgdChcInNtLmVkaXRPdXRsaW5lV2lkdGhcIiksIFwiZWRpdE91dGxpbmVXaWR0aFwiLCAwLCA4KTtcclxuXHJcbiAgICAgICAgLy8gQ2FudmFzXHJcbiAgICAgICAgY29uc3QgczUgPSBta1NlYyhcIlx1RDgzRFx1RERCQ1x1RkUwRlwiLCB0KFwic20uY2FudmFzQmdcIikpO1xyXG4gICAgICAgIG1rQ29sb3IoczUsIHQoXCJzbS5jYW52YXNCZ1wiKSwgXCJjYW52YXNCZ1wiKTtcclxuXHJcbiAgICAgICAgLy8gVG9vbGJhclxyXG4gICAgICAgIGNvbnN0IHM2ID0gbWtTZWMoXCJcdUQ4M0RcdUREMjdcIiwgdChcInNtLnNob3dUb29sYmFyXCIpKTtcclxuICAgICAgICBjb25zdCB0YlJvdyA9IG1rUm93KHM2LCB0KFwic20uc2hvd1Rvb2xiYXJcIikpO1xyXG4gICAgICAgIGNvbnN0IHRiQ2IgPSB0YlJvdy5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGJDYi50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIHRiQ2IuY2hlY2tlZCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dUb29sYmFyO1xyXG4gICAgICAgIHRiQ2IuYWRkQ2xhc3MoXCJtei1zcC10Yi1jaGtcIik7XHJcbiAgICAgICAgdGJDYi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1Rvb2xiYXIgPSB0YkNiLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIHZvaWQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hBbGxWaWV3cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1rU2VsKHM2LCB0KFwic20udGJQb3NcIiksIFwidG9vbGJhclBvc2l0aW9uXCIsIFtcInRvcFwiLCBcImJvdHRvbVwiXSk7XHJcbiAgICAgICAgbWtOdW0oczYsIHQoXCJzbS50YlBhZFRcIiksIFwidG9vbGJhclBhZFRvcFwiLCAwLCA0MCk7XHJcbiAgICAgICAgbWtOdW0oczYsIHQoXCJzbS50YlBhZFJcIiksIFwidG9vbGJhclBhZFJpZ2h0XCIsIDAsIDQwKTtcclxuICAgICAgICBta051bShzNiwgdChcInNtLnRiUGFkQlwiKSwgXCJ0b29sYmFyUGFkQm90dG9tXCIsIDAsIDQwKTtcclxuICAgICAgICBta051bShzNiwgdChcInNtLnRiUGFkTFwiKSwgXCJ0b29sYmFyUGFkTGVmdFwiLCAwLCA0MCk7XHJcbiAgICAgICAgbWtDb2xvcihzNiwgdChcInNtLnRiQmdcIiksIFwidG9vbGJhckJnQ29sb3JcIik7XHJcbiAgICAgICAgbWtDb2xvcihzNiwgdChcInNtLnRiQnRuQmdcIiksIFwidG9vbGJhckJ0bkJnQ29sb3JcIik7XHJcbiAgICAgICAgbWtTZWwoczYsIHQoXCJzbS50YkJ0bkJvcmRlclwiKSwgXCJ0b29sYmFyQnRuQm9yZGVyU3R5bGVcIiwgW1xyXG4gICAgICAgICAgICBcInNvbGlkXCIsXHJcbiAgICAgICAgICAgIFwiZGFzaGVkXCIsXHJcbiAgICAgICAgICAgIFwiZG90dGVkXCIsXHJcbiAgICAgICAgICAgIFwibm9uZVwiLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIG1rQ29sb3IoczYsIHQoXCJzbS50YkJ0bkJvcmRlckNvbG9yXCIpLCBcInRvb2xiYXJCdG5Cb3JkZXJDb2xvclwiKTtcclxuICAgICAgICBta0NvbG9yKHM2LCB0KFwic20udGJCdG5UZXh0XCIpLCBcInRvb2xiYXJCdG5UZXh0Q29sb3JcIik7XHJcblxyXG4gICAgICAgIC8vIEJ1dHRvbnNcclxuICAgICAgICBjb25zdCBiciA9IGN0LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGJyLmFkZENsYXNzKFwibXotc3AtYnRuc1wiKTtcclxuICAgICAgICBici5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IHQoXCJzbS5yZXNldFwiKSB9KS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLmdldFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlmICh2KSB2LmFwcGx5U3R5bGUoeyAuLi5ERUZBVUxUX1NUWUxFIH0pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB2b2lkIHRoaXMucGx1Z2luLnVwZGF0ZVN0eWxlKHsgLi4uREVGQVVMVF9TVFlMRSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHJmID0gYnIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIlx1MjFCQlwiIH0pO1xyXG4gICAgICAgIHJmLmFkZENsYXNzKFwibXotc3AtcmVmcmVzaFwiKTtcclxuICAgICAgICByZi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5idWlsZCgpKTtcclxuICAgIH1cclxufVxyXG4iLCAiLy8gc3JjL1NldHRpbmdzVGFiLnRzXHJcbmltcG9ydCB7IFBsdWdpblNldHRpbmdUYWIsIEFwcCwgU2V0dGluZywgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcbmltcG9ydCB0eXBlIE1pbmROb2RlUGx1Z2luIGZyb20gXCIuL21haW5cIjtcclxuaW1wb3J0IHsgTEFOR1VBR0VTLCBMYW5ndWFnZSwgdCwgc2V0TGFuZyB9IGZyb20gXCIuL2kxOG5cIjtcclxuaW1wb3J0IHsgREVGQVVMVF9LRVlCSU5ESU5HUywgS2V5QmluZGluZ3MgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxudHlwZSBTdHJpbmdLZXlPZjxUPiA9IHtcclxuICAgIFtLIGluIGtleW9mIFRdOiBUW0tdIGV4dGVuZHMgc3RyaW5nID8gSyA6IG5ldmVyO1xyXG59W2tleW9mIFRdO1xyXG50eXBlIFN0cmluZ0tleXMgPSBTdHJpbmdLZXlPZjxLZXlCaW5kaW5ncz47XHJcblxyXG5leHBvcnQgY2xhc3MgTWluZE1hcFNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcclxuICAgIHBsdWdpbjogTWluZE5vZGVQbHVnaW47XHJcbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBNaW5kTm9kZVBsdWdpbikge1xyXG4gICAgICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcclxuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuICAgIH1cclxuICAgIGRpc3BsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBjb250YWluZXJFbC5zY3JvbGxUb3A7XHJcbiAgICAgICAgY29udGFpbmVyRWwuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgLy8gQWJvdXRcclxuICAgICAgICBjb25zdCBhYm91dCA9IGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGFib3V0LmFkZENsYXNzKFwibXotYWJvdXRcIik7XHJcbiAgICAgICAgY29uc3QgaWNvbkVsID0gYWJvdXQuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgaWNvbkVsLmFkZENsYXNzKFwibXotYWJvdXQtaWNvblwiKTtcclxuICAgICAgICBpY29uRWwuaW5uZXJUZXh0ID0gXCJcdUQ4M0RcdURERkFcdUZFMEZcIjtcclxuICAgICAgICBjb25zdCB0aXRsZUVsID0gYWJvdXQuY3JlYXRlRWwoXCJoMlwiLCB7IHRleHQ6IFwiTWluZFpKXCIgfSk7XHJcbiAgICAgICAgdGl0bGVFbC5hZGRDbGFzcyhcIm16LWFib3V0LXRpdGxlXCIpO1xyXG4gICAgICAgIGNvbnN0IHZlckVsID0gYWJvdXQuY3JlYXRlRWwoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiBgJHt0KFwic2V0LnZlcnNpb25cIil9OiAke3RoaXMucGx1Z2luLm1hbmlmZXN0LnZlcnNpb259YCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB2ZXJFbC5hZGRDbGFzcyhcIm16LWFib3V0LW1ldGFcIik7XHJcbiAgICAgICAgY29uc3QgYXV0aEVsID0gYWJvdXQuY3JlYXRlRWwoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiBgJHt0KFwic2V0LmF1dGhvclwiKX06ICR7dGhpcy5wbHVnaW4ubWFuaWZlc3QuYXV0aG9yfWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXV0aEVsLmFkZENsYXNzKFwibXotYWJvdXQtbWV0YS1sYXN0XCIpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NFbCA9IGFib3V0LmNyZWF0ZUVsKFwicFwiLCB7IHRleHQ6IHQoXCJzZXQuZGVzY1wiKSB9KTtcclxuICAgICAgICBkZXNjRWwuYWRkQ2xhc3MoXCJtei1hYm91dC1kZXNjXCIpO1xyXG4gICAgICAgIGNvbnN0IGdoTGluayA9IGFib3V0LmNyZWF0ZUVsKFwiZGl2XCIpLmNyZWF0ZUVsKFwiYVwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IGBcdUQ4M0RcdURDRTYgJHt0KFwic2V0LmdpdGh1YlwiKX1gLFxyXG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS96am9rL21pbmR6alwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdoTGluay5hZGRDbGFzcyhcIm16LWFib3V0LWxpbmtcIik7XHJcbiAgICAgICAgZ2hMaW5rLnNldEF0dHIoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcblxyXG4gICAgICAgIC8vIERvbmF0aW9uXHJcbiAgICAgICAgY29uc3QgZG9uU2VjID0gY29udGFpbmVyRWwuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgZG9uU2VjLmFkZENsYXNzKFwibXotZG9uYXRlLXNlY1wiKTtcclxuICAgICAgICBjb25zdCBkb25UaXRsZSA9IGRvblNlYy5jcmVhdGVFbChcImgzXCIsIHtcclxuICAgICAgICAgICAgdGV4dDogYFx1MjYxNSAke3QoXCJzZXQuZG9uYXRlXCIpfWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9uVGl0bGUuYWRkQ2xhc3MoXCJtei1kb25hdGUtaGVhZGluZ1wiKTtcclxuICAgICAgICBjb25zdCBkb25CdG5zID0gZG9uU2VjLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGRvbkJ0bnMuYWRkQ2xhc3MoXCJtei1kb25hdGUtYnRuc1wiKTtcclxuICAgICAgICBjb25zdCBta0RvbiA9IChsYWJlbDogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCB1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gZG9uQnRucy5jcmVhdGVFbChcImFcIiwgeyBocmVmOiB1cmwgfSk7XHJcbiAgICAgICAgICAgIGEuc2V0QXR0cihcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuICAgICAgICAgICAgYS5hZGRDbGFzcyhcIm16LWRvbmF0ZS1idG5cIik7XHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHsgXCItLW16LWJ0bi1jb2xvclwiOiBjb2xvciB9KS5mb3JFYWNoKChbaywgdl0pID0+XHJcbiAgICAgICAgICAgICAgICBhLnN0eWxlLnNldFByb3BlcnR5KGssIHYpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBhLmlubmVyVGV4dCA9IGxhYmVsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWtEb24oXHJcbiAgICAgICAgICAgIFwiXHUyNjE1IEJ1eSBNZSBhIENvZmZlZVwiLFxyXG4gICAgICAgICAgICBcIiNGRkREMDBcIixcclxuICAgICAgICAgICAgXCJodHRwczovL3d3dy5idXltZWFjb2ZmZWUuY29tL3N1cGVyam9oblwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtEb24oXCJcdTI3NjRcdUZFMEYgS28tZmlcIiwgXCIjRkY1RTVCXCIsIFwiaHR0cHM6Ly9rby1maS5jb20vc3VwZXJqb2huXCIpO1xyXG4gICAgICAgIG1rRG9uKFwiXHVEODNEXHVEQ0IwIFBheVBhbFwiLCBcIiMwMDcwYmFcIiwgXCJodHRwczovL3BheXBhbC5tZS9UYW5DYXQ5OTdcIik7XHJcblxyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKS5zZXROYW1lKHQoXCJzZXQudGl0bGVcIikpLnNldEhlYWRpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gQmFzaWMgc2V0dGluZ3NcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUodChcInNldC5sYW5nXCIpKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyh0KFwic2V0LmxhbmdEZXNjXCIpKVxyXG4gICAgICAgICAgICAuYWRkRHJvcGRvd24oKGRkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGwgb2YgTEFOR1VBR0VTKSBkZC5hZGRPcHRpb24obC52YWx1ZSwgbC5sYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBkZC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5sYW5ndWFnZSk7XHJcbiAgICAgICAgICAgICAgICBkZC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmxhbmd1YWdlID0gdiBhcyBMYW5ndWFnZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYW5nKHYgYXMgTGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hBbGxWaWV3cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSh0KFwic2V0LnRoZW1lXCIpKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyh0KFwic2V0LnRoZW1lRGVzY1wiKSlcclxuICAgICAgICAgICAgLmFkZERyb3Bkb3duKChkZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGQuYWRkT3B0aW9uKFwibGlnaHRcIiwgdChcInNldC5saWdodFwiKSk7XHJcbiAgICAgICAgICAgICAgICBkZC5hZGRPcHRpb24oXCJkYXJrXCIsIHQoXCJzZXQuZGFya1wiKSk7XHJcbiAgICAgICAgICAgICAgICBkZC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZSk7XHJcbiAgICAgICAgICAgICAgICBkZC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnN3aXRjaFRoZW1lKHYgYXMgXCJsaWdodFwiIHwgXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSh0KFwic2V0LmNhbnZhc0JnXCIpKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyh0KFwic2V0LmNhbnZhc0JnRGVzY1wiKSlcclxuICAgICAgICAgICAgLmFkZENvbG9yUGlja2VyKChjcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3R5bGUuY2FudmFzQmc7XHJcbiAgICAgICAgICAgICAgICBjcC5zZXRWYWx1ZShjdXIuc3RhcnRzV2l0aChcIiNcIikgPyBjdXIgOiBcIiNmZmZmZmZcIik7XHJcbiAgICAgICAgICAgICAgICBjcC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnN0eWxlLmNhbnZhc0JnID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5hcHBseVN0eWxlVG9BbGxWaWV3cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUodChcInNldC50b29sYmFyXCIpKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyh0KFwic2V0LnRvb2xiYXJEZXNjXCIpKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0ZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGcuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1Rvb2xiYXIpO1xyXG4gICAgICAgICAgICAgICAgdGcub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhciA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaEFsbFZpZXdzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKHQoXCJzZXQuZWRpdE9uQ3JlYXRlXCIpKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyh0KFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIikpXHJcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoKHRnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0Zy5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5lZGl0T25DcmVhdGUpO1xyXG4gICAgICAgICAgICAgICAgdGcub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5lZGl0T25DcmVhdGUgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDdXN0b20gbm9kZSBuYW1lc1xyXG4gICAgICAgIGNvbnN0IGxhbmcgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5sYW5ndWFnZTtcclxuICAgICAgICBjb25zdCBkZWZSb290ID0gdChcImRlZi5yb290XCIpO1xyXG4gICAgICAgIGNvbnN0IGRlZkNoaWxkID0gdChcImRlZi5jaGlsZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWtOYW1lU2V0dGluZyA9IChcclxuICAgICAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBkZXNjOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGZpZWxkOiBcInJvb3RcIiB8IFwiY2hpbGRcIixcclxuICAgICAgICAgICAgZGVmVmFsOiBzdHJpbmcsXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAuc2V0RGVzYyhkZXNjKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzZXRFbCA9IHNldHRpbmcuY29udHJvbEVsLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJcdTIxQkFcIiB9KTtcclxuICAgICAgICAgICAgcmVzZXRFbC5hZGRDbGFzcyhcIm16LXJlc2V0LWJ0blwiKTtcclxuICAgICAgICAgICAgY29uc3QgY3VyVmFsID0gKHRoaXMucGx1Z2luLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lc1tsYW5nXSB8fCB7fSlbXHJcbiAgICAgICAgICAgICAgICBmaWVsZFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICByZXNldEVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsICEoY3VyVmFsICYmIGN1clZhbCAhPT0gZGVmVmFsKSk7XHJcbiAgICAgICAgICAgIHJlc2V0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSB7IC4uLnRoaXMucGx1Z2luLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lcyB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNbbGFuZ10pIGRlbGV0ZSBjW2xhbmddW2ZpZWxkXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lcyA9IGM7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGlucC52YWx1ZSA9IGRlZlZhbDtcclxuICAgICAgICAgICAgICAgIHJlc2V0RWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBpbnAgPSBzZXR0aW5nLmNvbnRyb2xFbC5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlucC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgIGlucC52YWx1ZSA9IGN1clZhbCB8fCBkZWZWYWw7XHJcbiAgICAgICAgICAgIGlucC5hZGRDbGFzcyhcIm16LW5hbWUtaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGlucC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gaW5wLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSB7IC4uLnRoaXMucGx1Z2luLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lcyB9O1xyXG4gICAgICAgICAgICAgICAgY1tsYW5nXSA9IHsgLi4uKGNbbGFuZ10gfHwge30pLCBbZmllbGRdOiB2IHx8IHVuZGVmaW5lZCB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY3VzdG9tTm9kZU5hbWVzID0gYztcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgcmVzZXRFbC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCAhKHYgJiYgdiAhPT0gZGVmVmFsKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWtOYW1lU2V0dGluZyhcclxuICAgICAgICAgICAgdChcInNldC5yb290TmFtZVwiKSxcclxuICAgICAgICAgICAgdChcInNldC5yb290TmFtZURlc2NcIiksXHJcbiAgICAgICAgICAgIFwicm9vdFwiLFxyXG4gICAgICAgICAgICBkZWZSb290LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtOYW1lU2V0dGluZyhcclxuICAgICAgICAgICAgdChcInNldC5jaGlsZE5hbWVcIiksXHJcbiAgICAgICAgICAgIHQoXCJzZXQuY2hpbGROYW1lRGVzY1wiKSxcclxuICAgICAgICAgICAgXCJjaGlsZFwiLFxyXG4gICAgICAgICAgICBkZWZDaGlsZCxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUodChcInNldC50eXBlVG9FZGl0XCIpKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyh0KFwic2V0LnR5cGVUb0VkaXREZXNjXCIpKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0ZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGcuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudHlwZVRvRWRpdCk7XHJcbiAgICAgICAgICAgICAgICB0Zy5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnR5cGVUb0VkaXQgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBLZXlib2FyZCBzaG9ydGN1dHNcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZSh0KFwic2V0LmtleXNcIikpLnNldEhlYWRpbmcoKTtcclxuICAgICAgICBjb25zdCBrYiA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmtleUJpbmRpbmdzO1xyXG4gICAgICAgIGNvbnN0IGtleU1hcDogeyBrZXk6IFN0cmluZ0tleXM7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xyXG4gICAgICAgICAgICB7IGtleTogXCJlZGl0Tm9kZVwiLCBsYWJlbDogdChcInNldC5rZXkuZWRpdFwiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJhZGRTaWJsaW5nXCIsIGxhYmVsOiB0KFwic2V0LmtleS5zaWJsaW5nXCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcImFkZENoaWxkXCIsIGxhYmVsOiB0KFwic2V0LmtleS5jaGlsZFwiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJmb2N1c05vZGVcIiwgbGFiZWw6IHQoXCJzZXQua2V5LmZvY3VzXCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcInVuZG9cIiwgbGFiZWw6IHQoXCJzZXQua2V5LnVuZG9cIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwicmVkb1wiLCBsYWJlbDogdChcInNldC5rZXkucmVkb1wiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJkcmFnQ2FudmFzXCIsIGxhYmVsOiB0KFwic2V0LmtleS5kcmFnQ2FudmFzXCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcIm5hdlVwXCIsIGxhYmVsOiB0KFwic2V0LmtleS51cFwiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJuYXZEb3duXCIsIGxhYmVsOiB0KFwic2V0LmtleS5kb3duXCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcIm5hdkxlZnRcIiwgbGFiZWw6IHQoXCJzZXQua2V5LmxlZnRcIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwibmF2UmlnaHRcIiwgbGFiZWw6IHQoXCJzZXQua2V5LnJpZ2h0XCIpIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Yga2V5TWFwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZShpdGVtLmxhYmVsKTtcclxuICAgICAgICAgICAgY29uc3QgY3VyVmFsID0ga2JbaXRlbS5rZXldO1xyXG4gICAgICAgICAgICBjb25zdCBkZWZWYWwgPSBERUZBVUxUX0tFWUJJTkRJTkdTW2l0ZW0ua2V5XSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0RWwgPSBzZXR0aW5nLmNvbnRyb2xFbC5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiXHUyMUJBXCIgfSk7XHJcbiAgICAgICAgICAgIHJlc2V0RWwuYWRkQ2xhc3MoXCJtei1yZXNldC1idG5cIik7XHJcbiAgICAgICAgICAgIHJlc2V0RWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgY3VyVmFsID09PSBkZWZWYWwpO1xyXG4gICAgICAgICAgICByZXNldEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBrYltpdGVtLmtleV0gPSBkZWZWYWw7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hBbGxWaWV3cygpO1xyXG4gICAgICAgICAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoZGVmVmFsKTtcclxuICAgICAgICAgICAgICAgIHJlc2V0RWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgYnRuOiBCdXR0b25Db21wb25lbnQ7XHJcbiAgICAgICAgICAgIHNldHRpbmcuYWRkQnV0dG9uKChiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBidG4gPSBiO1xyXG4gICAgICAgICAgICAgICAgYi5zZXRCdXR0b25UZXh0KFN0cmluZyhjdXJWYWwpIHx8IFwiLi4uXCIpO1xyXG4gICAgICAgICAgICAgICAgYi5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBiLnNldEJ1dHRvblRleHQodChcInNldC5rZXkucHJlc3NcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q29tYm8gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNNYWluS2V5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVvdXQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1aWxkQ29tYm8gPSAoZTogS2V5Ym9hcmRFdmVudCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgcGFydHMucHVzaChcImN0cmxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSBwYXJ0cy5wdXNoKFwic2hpZnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmFsdEtleSkgcGFydHMucHVzaChcImFsdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIVtcIkNvbnRyb2xcIiwgXCJTaGlmdFwiLCBcIkFsdFwiLCBcIk1ldGFcIl0uaW5jbHVkZXMoZS5rZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goZS5rZXkgPT09IFwiIFwiID8gXCJTcGFjZVwiIDogZS5rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFydHMuam9pbihcIitcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmluaXNoID0gKGNvbWJvOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWNvcmRpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbkRvd24sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIG9uVXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrYltpdGVtLmtleV0gPSBjb21ibztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5zZXRCdXR0b25UZXh0KGNvbWJvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaEFsbFZpZXdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0RWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgY29tYm8gPT09IGRlZlZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlY29yZGluZykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uRG93biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgb25VcCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuc2V0QnV0dG9uVGV4dChTdHJpbmcoa2JbaXRlbS5rZXldKSB8fCBcIi4uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvbkRvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbWJvID0gYnVpbGRDb21ibyhlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWFpbktleSA9ICFbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRyb2xcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2hpZnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1ldGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXS5pbmNsdWRlcyhlLmtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuc2V0QnV0dG9uVGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb21ibyArIChoYXNNYWluS2V5ID8gXCJcIiA6IFwiK1x1MjAyNlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGltZW91dCBvbiBlYWNoIGtleWRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoY2FuY2VsLCA1MDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvblVwID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5hbGl6ZSB3aGVuIGEgbm9uLW1vZGlmaWVyIGtleSBpcyByZWxlYXNlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzTWFpbktleSAmJiBjdXJyZW50Q29tYm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaChjdXJyZW50Q29tYm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uRG93biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBvblVwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChjYW5jZWwsIDUwMDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUodChcInNldC5zY3JvbGxcIikpLnNldEhlYWRpbmcoKTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZSh0KFwic2V0LmludmVydFlcIikpLmFkZFRvZ2dsZSgodGcpID0+IHtcclxuICAgICAgICAgICAgdGcuc2V0VmFsdWUoa2IuaW52ZXJ0U2Nyb2xsWSk7XHJcbiAgICAgICAgICAgIHRnLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBrYi5pbnZlcnRTY3JvbGxZID0gdjtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZSh0KFwic2V0LmludmVydFhcIikpLmFkZFRvZ2dsZSgodGcpID0+IHtcclxuICAgICAgICAgICAgdGcuc2V0VmFsdWUoa2IuaW52ZXJ0U2Nyb2xsWCk7XHJcbiAgICAgICAgICAgIHRnLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBrYi5pbnZlcnRTY3JvbGxYID0gdjtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUodChcInNldC5pbnZlcnRab29tXCIpKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0ZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGcuc2V0VmFsdWUoa2IuaW52ZXJ0Wm9vbSk7XHJcbiAgICAgICAgICAgICAgICB0Zy5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGtiLmludmVydFpvb20gPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyRWwuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBQUEsbUJBQXFEOzs7QUNBckQsc0JBQWtEOzs7QUN1STNDLElBQU0sd0JBQTRDO0FBQUEsRUFDckQsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsdUJBQXVCO0FBQUEsRUFDdkIsdUJBQXVCO0FBQUEsRUFDdkIscUJBQXFCO0FBQUEsRUFDckIsb0JBQW9CO0FBQUEsRUFDcEIsb0JBQW9CO0FBQ3hCO0FBRU8sSUFBTSx1QkFBMkM7QUFBQSxFQUNwRCxnQkFBZ0I7QUFBQSxFQUNoQixtQkFBbUI7QUFBQSxFQUNuQix1QkFBdUI7QUFBQSxFQUN2Qix1QkFBdUI7QUFBQSxFQUN2QixxQkFBcUI7QUFBQSxFQUNyQixvQkFBb0I7QUFBQSxFQUNwQixvQkFBb0I7QUFDeEI7QUFFTyxJQUFNLG1CQUE2QztBQUFBLEVBQ3RELFNBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNIO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0g7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNIO0FBQUEsSUFDQTtBQUFB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LGlDQUFRO0FBQUEsRUFDOUIsRUFBRSxPQUFPLE1BQU0sT0FBTyw2Q0FBVTtBQUNwQztBQUVBLElBQU0sTUFBTTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLEVBQ2IsY0FBYztBQUFBLEVBQ2Qsb0JBQW9CO0FBQUEsRUFDcEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQ0k7QUFDUjtBQUVBLElBQU0sTUFBa0I7QUFBQSxFQUNwQixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsRUFDVCxVQUFVO0FBQUEsRUFDVixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsRUFDYixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixnQkFBZ0I7QUFBQSxFQUNoQixrQkFBa0I7QUFBQSxFQUNsQixhQUFhO0FBQUEsRUFDYixjQUFjO0FBQUEsRUFDZCxvQkFBb0I7QUFBQSxFQUNwQixnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixtQkFBbUI7QUFBQSxFQUNuQixZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxtQkFBbUI7QUFBQSxFQUNuQixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxrQkFBa0I7QUFBQSxFQUNsQixrQkFBa0I7QUFBQSxFQUNsQixrQkFBa0I7QUFBQSxFQUNsQixtQkFBbUI7QUFBQSxFQUNuQixlQUFlO0FBQUEsRUFDZixnQkFBZ0I7QUFBQSxFQUNoQixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixpQkFBaUI7QUFBQSxFQUNqQixjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxxQkFBcUI7QUFBQSxFQUNyQixVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixnQkFBZ0I7QUFBQSxFQUNoQixrQkFBa0I7QUFBQSxFQUNsQix1QkFBdUI7QUFBQSxFQUN2QixnQkFBZ0I7QUFBQSxFQUNoQixlQUFlO0FBQUEsRUFDZixxQkFBcUI7QUFBQSxFQUNyQixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixrQkFBa0I7QUFBQSxFQUNsQixZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixlQUFlO0FBQUEsRUFDZixrQkFBa0I7QUFBQSxFQUNsQixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxrQkFBa0I7QUFBQSxFQUNsQix1QkFBdUI7QUFBQSxFQUN2QixnQkFBZ0I7QUFBQSxFQUNoQixxQkFBcUI7QUFBQSxFQUNyQixZQUFZO0FBQUEsRUFDWixnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixZQUFZO0FBQUEsRUFDWixtQkFBbUI7QUFBQSxFQUNuQixzQkFBc0I7QUFBQSxFQUN0QixZQUFZO0FBQUEsRUFDWixlQUFlO0FBQUEsRUFDZixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixnQkFBZ0I7QUFBQSxFQUNoQixhQUFhO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixlQUFlO0FBQUEsRUFDZixtQkFBbUI7QUFBQSxFQUNuQixnQkFBZ0I7QUFBQSxFQUNoQixvQkFBb0I7QUFBQSxFQUNwQixhQUFhO0FBQUEsRUFDYixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxZQUNJO0FBQUEsRUFDSixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixtQkFBbUI7QUFBQSxFQUNuQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixxQkFBcUI7QUFBQSxFQUNyQixzQkFBc0I7QUFBQSxFQUN0QixrQkFBa0I7QUFBQSxFQUNsQixtQkFBbUI7QUFBQSxFQUNuQixxQkFBcUI7QUFBQSxFQUNyQixjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixrQkFBa0I7QUFBQSxFQUNsQixvQkFBb0I7QUFBQSxFQUNwQix3QkFBd0I7QUFBQSxFQUN4QixnQkFBZ0I7QUFBQSxFQUNoQixvQkFBb0I7QUFBQSxFQUNwQixpQkFBaUI7QUFBQSxFQUNqQixxQkFBcUI7QUFBQSxFQUNyQixrQkFBa0I7QUFBQSxFQUNsQixzQkFBc0I7QUFDMUI7QUFFQSxJQUFNLE1BQWtCO0FBQUEsRUFDcEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLEVBQ2IsY0FBYztBQUFBLEVBQ2Qsb0JBQW9CO0FBQUEsRUFDcEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FB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O0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFB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Q1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVB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QUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxF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V0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7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LEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVB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QUksVUFBVSxjQUFjLE1BQU0sRUFBRSxPQUFPLEtBQUssQ0FBQztBQUFBLElBQzFELFNBQVEsR0FBTjtBQUFBLElBRUY7QUFBQSxFQUNKO0FBQUEsRUFDQSxNQUFNLGlCQUFpQjtBQTNQM0I7QUE0UFEsVUFBTSxLQUFLLEtBQUssSUFBSSxVQUFVLGdCQUFnQix1QkFBdUI7QUFDckUsUUFBSTtBQUNKLFFBQUksR0FBRztBQUFRLFVBQUksR0FBRyxDQUFDO0FBQUEsU0FDbEI7QUFDRCxXQUNJLFVBQUssSUFBSSxVQUFVLGFBQWEsS0FBSyxNQUFyQyxZQUNBLEtBQUssSUFBSSxVQUFVLFFBQVEsSUFBSTtBQUNuQyxZQUFNLEVBQUUsYUFBYTtBQUFBLFFBQ2pCLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxNQUNaLENBQUM7QUFBQSxJQUNMO0FBQ0EsU0FBSyxJQUFJLFVBQVUsV0FBVyxDQUFDO0FBQUEsRUFDbkM7QUFDSjsiLAogICJuYW1lcyI6IFsiaW1wb3J0X29ic2lkaWFuIiwgImNiIiwgIl9hIiwgInQiLCAiZG4iLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiIsICJfYSJdCn0K
