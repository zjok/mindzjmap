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
    "#b0b0b0",
    "#c85bf3",
    "#40cdb1",
    "#6b99f6",
    "#fb3997d8",
    "#8070f9",
    "#cb70f5"
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
  nodeBorderColor: "#cccccc",
  nodeBorderWidth: 2,
  nodeBorderRadius: 5,
  nodeMinWidth: 60,
  nodeMinHeight: 32,
  rootBgColor: "#ffffff",
  rootTextColor: "#171717",
  rootFontSize: 18,
  rootFontFamily: "inherit",
  rootBorderStyle: "solid",
  rootBorderColor: "#bababa",
  rootBorderWidth: 2,
  rootBorderRadius: 5,
  rootMinWidth: 96,
  rootMinHeight: 40,
  connectionStyle: "bracket",
  connectionColor: "#a8a8a8",
  connectionWidth: 1.5,
  connectionLength: 96,
  connectionRainbow: true,
  rainbowPalette: "classic",
  customRainbows: {
    Custom: [
      "#ff8989",
      "#8efd8e",
      "#a3a3ff",
      "#ffff91",
      "#f9b1f9",
      "#a4ffff",
      "#dedede"
    ]
  },
  nodeDirection: "right",
  selectionColor: "#24bc10",
  selectionWidth: 3,
  selectionOutlineOffset: 2,
  editOutlineColor: "#3bfb2d",
  editOutlineWidth: 5,
  textAlign: "center",
  nodePadX: 10,
  nodeLineHeight: 1.5,
  nodeGapY: 32,
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
      text: t("sm.rainbow")
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
        text: t("sm.rainbow")
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL01pbmRNYXBWaWV3LnRzIiwgInNyYy90eXBlcy50cyIsICJzcmMvaTE4bi50cyIsICJzcmMvU3R5bGVQYW5lbFZpZXcudHMiLCAic3JjL1NldHRpbmdzVGFiLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBzcmMvbWFpbi50c1xyXG5pbXBvcnQgeyBQbHVnaW4sIFdvcmtzcGFjZUxlYWYsIFRGb2xkZXIsIE1lbnUgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHsgTWluZE1hcFZpZXcgfSBmcm9tIFwiLi9NaW5kTWFwVmlld1wiO1xyXG5pbXBvcnQgeyBTdHlsZVBhbmVsVmlldyB9IGZyb20gXCIuL1N0eWxlUGFuZWxWaWV3XCI7XHJcbmltcG9ydCB7IE1pbmRNYXBTZXR0aW5nVGFiIH0gZnJvbSBcIi4vU2V0dGluZ3NUYWJcIjtcclxuaW1wb3J0IHsgc2V0TGFuZywgdCB9IGZyb20gXCIuL2kxOG5cIjtcclxuaW1wb3J0IHtcclxuICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgVklFV19UWVBFX01JTkRNQVBfU1RZTEUsXHJcbiAgICBNSU5ETUFQX0ZJTEVfRVhURU5TSU9OLFxyXG4gICAgTWluZE1hcFN0eWxlLFxyXG4gICAgUGx1Z2luU2V0dGluZ3MsXHJcbiAgICBERUZBVUxUX1NFVFRJTkdTLFxyXG4gICAgREVGQVVMVF9TVFlMRSxcclxuICAgIERFRkFVTFRfS0VZQklORElOR1MsXHJcbiAgICBUb29sYmFyVGhlbWVDb2xvcnMsXHJcbiAgICBERUZBVUxUX1RPT0xCQVJfTElHSFQsXHJcbiAgICBERUZBVUxUX1RPT0xCQVJfREFSSyxcclxufSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuaW50ZXJmYWNlIE1lbnVXaXRoSXRlbXMgZXh0ZW5kcyBNZW51IHtcclxuICAgIGl0ZW1zOiBBcnJheTx7IHNlY3Rpb24/OiBzdHJpbmc7IHRpdGxlRWw/OiBIVE1MRWxlbWVudDsgdGl0bGU/OiBzdHJpbmcgfT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmROb2RlUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcclxuICAgIHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncyA9IHtcclxuICAgICAgICAuLi5ERUZBVUxUX1NFVFRJTkdTLFxyXG4gICAgICAgIHN0eWxlOiB7IC4uLkRFRkFVTFRfU1RZTEUgfSxcclxuICAgICAgICBrZXlCaW5kaW5nczogeyAuLi5ERUZBVUxUX0tFWUJJTkRJTkdTIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG4gICAgICAgIHNldExhbmcodGhpcy5zZXR0aW5ncy5sYW5ndWFnZSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV4dGVuc2lvbnMoW01JTkRNQVBfRklMRV9FWFRFTlNJT05dLCBWSUVXX1RZUEVfTUlORE1BUCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclZpZXcoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICAgICAobGVhZikgPT4gbmV3IE1pbmRNYXBWaWV3KGxlYWYsIHRoaXMpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclZpZXcoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFLFxyXG4gICAgICAgICAgICAobGVhZikgPT4gbmV3IFN0eWxlUGFuZWxWaWV3KGxlYWYsIHRoaXMpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBNaW5kTWFwU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG4gICAgICAgIHRoaXMuYWRkUmliYm9uSWNvbihcIm5ldHdvcmtcIiwgXCJOZXcgTWluZFpKXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdm9pZCB0aGlzLmNyZWF0ZU5ldygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgICAgIGlkOiBcImNyZWF0ZS1uZXdcIixcclxuICAgICAgICAgICAgbmFtZTogXCJOZXcgbWluZCBtYXBcIixcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZvaWQgdGhpcy5jcmVhdGVOZXcoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImZpbGUtbWVudVwiLCAobWVudSwgZmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIFRGb2xkZXIpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUoXCJOZXcgTWluZFpKXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJY29uKFwibmV0d29ya1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIHRoaXMuY3JlYXRlSW5Gb2xkZXIoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBtZW51IGFzIHVua25vd24gYXMgTWVudVdpdGhJdGVtcztcclxuICAgICAgICAgICAgICAgIGlmIChtLml0ZW1zPy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXpqID0gbS5pdGVtcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobXpqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IG0uaXRlbXMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdC50aXRsZUVsPy50ZXh0Q29udGVudCA/PyBpdC50aXRsZSkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOZXcgZm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXpqLnNlY3Rpb24gPSBtLml0ZW1zW2lkeF0uc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uaXRlbXMuc3BsaWNlKGlkeCArIDEsIDAsIG16aik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLml0ZW1zLnVuc2hpZnQobXpqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbnVubG9hZCgpOiB2b2lkIHtcclxuICAgICAgICAvKiBubyBjbGVhbnVwIG5lZWRlZCAqL1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyAuLi5ERUZBVUxUX1NUWUxFLCAuLi4oZC5zdHlsZSA/PyB7fSkgfSxcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBkLmxhbmd1YWdlID8/IFwiZW5cIixcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBkLnRoZW1lID8/IFwibGlnaHRcIixcclxuICAgICAgICAgICAgICAgIHNob3dUb29sYmFyOiBkLnNob3dUb29sYmFyID8/IHRydWUsXHJcbiAgICAgICAgICAgICAgICBrZXlCaW5kaW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLkRFRkFVTFRfS0VZQklORElOR1MsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uKGQua2V5QmluZGluZ3MgPz8ge30pLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRldmVsb3Blck1vZGU6IGQuZGV2ZWxvcGVyTW9kZSA/PyBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVkaXRPbkNyZWF0ZTogZC5lZGl0T25DcmVhdGUgPz8gdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHR5cGVUb0VkaXQ6IGQudHlwZVRvRWRpdCA/PyB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tTm9kZU5hbWVzOiBkLmN1c3RvbU5vZGVOYW1lcyA/PyB7fSxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJTdHlsZUxpZ2h0OiBkLnRvb2xiYXJTdHlsZUxpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhclN0eWxlRGFyazogZC50b29sYmFyU3R5bGVEYXJrLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZCA9IFtcclxuICAgICAgICAgICAgICAgIFwiYmV6aWVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0cmFpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1cnZlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGVwXCIsXHJcbiAgICAgICAgICAgICAgICBcImJyYWNrZXRcIixcclxuICAgICAgICAgICAgICAgIFwibG9vc2VcIixcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZC5pbmNsdWRlcyh0aGlzLnNldHRpbmdzLnN0eWxlLmNvbm5lY3Rpb25TdHlsZSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnN0eWxlLmNvbm5lY3Rpb25TdHlsZSA9IFwiYmV6aWVyXCI7XHJcbiAgICAgICAgICAgIC8vIFVwZ3JhZGU6IGFwcGx5IHRoZW1lLWFwcHJvcHJpYXRlIHRvb2xiYXIgY29sb3JzIHdoZW5cclxuICAgICAgICAgICAgLy8gcGVyLXRoZW1lIHNuYXBzaG90cyBoYXZlbid0IGJlZW4gc2F2ZWQgeWV0IChlLmcuIHVzZXJcclxuICAgICAgICAgICAgLy8gdXBncmFkZWQgZnJvbSBhIHZlcnNpb24gdGhhdCBkaWRuJ3QgcGVyc2lzdCB0aGVtKS5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudGhlbWUgPT09IFwiZGFya1wiICYmICFkLnRvb2xiYXJTdHlsZURhcmspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb29sYmFyQ29sb3JzKERFRkFVTFRfVE9PTEJBUl9EQVJLKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgdXBkYXRlU3R5bGUocDogUGFydGlhbDxNaW5kTWFwU3R5bGU+KSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zdHlsZSA9IHsgLi4udGhpcy5zZXR0aW5ncy5zdHlsZSwgLi4ucCB9O1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XHJcbiAgICB9XHJcbiAgICBnZXRTdHlsZSgpOiBNaW5kTWFwU3R5bGUge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMuc2V0dGluZ3Muc3R5bGUgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRvb2xiYXJDb2xvcnMoKTogVG9vbGJhclRoZW1lQ29sb3JzIHtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5zZXR0aW5ncy5zdHlsZTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b29sYmFyQmdDb2xvcjogcy50b29sYmFyQmdDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJ0bkJnQ29sb3I6IHMudG9vbGJhckJ0bkJnQ29sb3IsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogcy50b29sYmFyQnRuQm9yZGVyU3R5bGUsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogcy50b29sYmFyQnRuQm9yZGVyQ29sb3IsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5UZXh0Q29sb3I6IHMudG9vbGJhckJ0blRleHRDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJvcmRlckNvbG9yOiBzLnRvb2xiYXJCb3JkZXJDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJvcmRlcldpZHRoOiBzLnRvb2xiYXJCb3JkZXJXaWR0aCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhcHBseVRvb2xiYXJDb2xvcnModGM6IFRvb2xiYXJUaGVtZUNvbG9ycykge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zZXR0aW5ncy5zdHlsZSwgdGMpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3dpdGNoVGhlbWUobmV3VGhlbWU6IFwibGlnaHRcIiB8IFwiZGFya1wiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudGhlbWUgPT09IFwibGlnaHRcIilcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy50b29sYmFyU3R5bGVMaWdodCA9IHRoaXMuZ2V0VG9vbGJhckNvbG9ycygpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5zZXR0aW5ncy50b29sYmFyU3R5bGVEYXJrID0gdGhpcy5nZXRUb29sYmFyQ29sb3JzKCk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aGVtZSA9IG5ld1RoZW1lO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3R5bGUuY2FudmFzQmcgPVxyXG4gICAgICAgICAgICBuZXdUaGVtZSA9PT0gXCJkYXJrXCIgPyBcIiMxZTFlMWVcIiA6IFwiI2ZmZmZmZlwiO1xyXG4gICAgICAgIHRoaXMuYXBwbHlUb29sYmFyQ29sb3JzKFxyXG4gICAgICAgICAgICBuZXdUaGVtZSA9PT0gXCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgICA/ICh0aGlzLnNldHRpbmdzLnRvb2xiYXJTdHlsZUxpZ2h0ID8/IERFRkFVTFRfVE9PTEJBUl9MSUdIVClcclxuICAgICAgICAgICAgICAgIDogKHRoaXMuc2V0dGluZ3MudG9vbGJhclN0eWxlRGFyayA/PyBERUZBVUxUX1RPT0xCQVJfREFSSyksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZVRvQWxsVmlld3ModGhpcy5zZXR0aW5ncy5zdHlsZSk7XHJcbiAgICB9XHJcbiAgICBnZXRSb290TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lc1t0aGlzLnNldHRpbmdzLmxhbmd1YWdlXTtcclxuICAgICAgICByZXR1cm4gbj8ucm9vdCB8fCB0KFwiZGVmLnJvb3RcIik7XHJcbiAgICB9XHJcbiAgICBnZXRDaGlsZE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBuID0gdGhpcy5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXNbdGhpcy5zZXR0aW5ncy5sYW5ndWFnZV07XHJcbiAgICAgICAgcmV0dXJuIG4/LmNoaWxkIHx8IHQoXCJkZWYuY2hpbGRcIik7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoQWxsVmlld3MoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICkpXHJcbiAgICAgICAgICAgIGlmIChsZWFmLnZpZXcgaW5zdGFuY2VvZiBNaW5kTWFwVmlldykgbGVhZi52aWV3LnJlZnJlc2hVSSgpO1xyXG4gICAgfVxyXG4gICAgYXBwbHlTdHlsZVRvQWxsVmlld3MoczogTWluZE1hcFN0eWxlKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICkpXHJcbiAgICAgICAgICAgIGlmIChsZWFmLnZpZXcgaW5zdGFuY2VvZiBNaW5kTWFwVmlldylcclxuICAgICAgICAgICAgICAgIGxlYWYudmlldy5hcHBseVN0eWxlKHsgLi4ucyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuUGx1Z2luU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICBjb25zdCBhcHBSZWMgPSB0aGlzLmFwcCBhcyB1bmtub3duIGFzIFJlY29yZDxcclxuICAgICAgICAgICAgc3RyaW5nLFxyXG4gICAgICAgICAgICB7IG9wZW4oKTogdm9pZDsgb3BlblRhYkJ5SWQoaWQ6IHN0cmluZyk6IHZvaWQgfVxyXG4gICAgICAgID47XHJcbiAgICAgICAgaWYgKGFwcFJlYy5zZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIGFwcFJlYy5zZXR0aW5nLm9wZW4oKTtcclxuICAgICAgICAgICAgYXBwUmVjLnNldHRpbmcub3BlblRhYkJ5SWQodGhpcy5tYW5pZmVzdC5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvb3ROb2RlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuZ2V0Um9vdE5hbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Jvb3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDIsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdW5pUGF0aChmb2xkZXI6IFRGb2xkZXIsIGJhc2U6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGV4dCA9IE1JTkRNQVBfRklMRV9FWFRFTlNJT04sXHJcbiAgICAgICAgICAgIHByZSA9IGZvbGRlci5wYXRoID09PSBcIi9cIiA/IFwiXCIgOiBmb2xkZXIucGF0aCArIFwiL1wiO1xyXG4gICAgICAgIGxldCBwID0gYCR7cHJlfSR7YmFzZX0uJHtleHR9YCxcclxuICAgICAgICAgICAgbiA9IDE7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwKSkge1xyXG4gICAgICAgICAgICBwID0gYCR7cHJlfSR7YmFzZX0gJHtufS4ke2V4dH1gO1xyXG4gICAgICAgICAgICBuKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhc3luYyBjcmVhdGVOZXcoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJbkZvbGRlcihcclxuICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKT8ucGFyZW50ID8/XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXRSb290KCksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXN5bmMgY3JlYXRlSW5Gb2xkZXIoZm9sZGVyOiBURm9sZGVyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHRoaXMudW5pUGF0aChmb2xkZXIsIFwiVW50aXRsZWQgTWluZFpKXCIpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0RGF0YSgpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBsZWFmID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XHJcbiAgICAgICAgICAgIGF3YWl0IGxlYWYub3BlbkZpbGUoZik7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5zZXRBY3RpdmVMZWFmKGxlYWYsIHsgZm9jdXM6IHRydWUgfSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIC8qIGZpbGUgY3JlYXRpb24gbWF5IGZhaWwgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBvcGVuU3R5bGVQYW5lbCgpIHtcclxuICAgICAgICBjb25zdCBscyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX01JTkRNQVBfU1RZTEUpO1xyXG4gICAgICAgIGxldCBsOiBXb3Jrc3BhY2VMZWFmO1xyXG4gICAgICAgIGlmIChscy5sZW5ndGgpIGwgPSBsc1swXTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbCA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0UmlnaHRMZWFmKGZhbHNlKSA/P1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYodHJ1ZSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGwuc2V0Vmlld1N0YXRlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLnJldmVhbExlYWYobCk7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8vIHNyYy9NaW5kTWFwVmlldy50c1xyXG5pbXBvcnQgeyBUZXh0RmlsZVZpZXcsIFdvcmtzcGFjZUxlYWYsIE1lbnUgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHtcclxuICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgQm9yZGVyU3R5bGUsXHJcbiAgICBNaW5kTm9kZURhdGEsXHJcbiAgICBNaW5kTWFwU3R5bGUsXHJcbiAgICBERUZBVUxUX1NUWUxFLFxyXG4gICAgREVGQVVMVF9UT09MQkFSX0xJR0hULFxyXG4gICAgREVGQVVMVF9UT09MQkFSX0RBUkssXHJcbiAgICBSQUlOQk9XX1BBTEVUVEVTLFxyXG4gICAgRk9OVF9MSVNULFxyXG4gICAgQ09OTkVDVElPTl9TVFlMRVMsXHJcbiAgICBLZXlCaW5kaW5ncyxcclxufSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSBcIi4vaTE4blwiO1xyXG5pbXBvcnQgdHlwZSBNaW5kTm9kZVBsdWdpbiBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG50eXBlIExheW91dE5vZGUgPSBNaW5kTm9kZURhdGEgJiB7IF9zaD86IG51bWJlciB9O1xyXG5cclxuaW50ZXJmYWNlIFJvb3REcmFnIHtcclxuICAgIGlzUm9vdERyYWc6IHRydWU7XHJcbiAgICBub2RlSWQ6IHN0cmluZztcclxuICAgIHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgc3RhcnRZOiBudW1iZXI7XHJcbiAgICBuc3g6IG51bWJlcjtcclxuICAgIG5zeTogbnVtYmVyO1xyXG4gICAgcGVlcnM/OiB7IGlkOiBzdHJpbmc7IHN4OiBudW1iZXI7IHN5OiBudW1iZXIgfVtdO1xyXG59XHJcbmludGVyZmFjZSBDaGlsZERyYWcge1xyXG4gICAgaXNSb290RHJhZzogZmFsc2U7XHJcbiAgICBub2RlSWQ6IHN0cmluZztcclxuICAgIHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgc3RhcnRZOiBudW1iZXI7XHJcbiAgICBnaG9zdEVsOiBTVkdFbGVtZW50IHwgbnVsbDtcclxuICAgIGluZGljYXRvckVsOiBTVkdSZWN0RWxlbWVudCB8IG51bGw7XHJcbiAgICBzbmFwOiBzdHJpbmc7XHJcbn1cclxudHlwZSBEcmFnU3RhdGUgPSAoeyBpc0RyYWdnaW5nOiBib29sZWFuIH0gJiAoUm9vdERyYWcgfCBDaGlsZERyYWcpKSB8IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgTWluZE1hcFZpZXcgZXh0ZW5kcyBUZXh0RmlsZVZpZXcge1xyXG4gICAgcHJpdmF0ZSBzdmdFbCE6IFNWR1NWR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGdFbCE6IFNWR0dFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBlZGdlc0chOiBTVkdHRWxlbWVudDtcclxuICAgIHByaXZhdGUgbm9kZXNHITogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG92ZXJsYXlHITogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNjITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHN2Z0N0ITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1kQ3QhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0YkVsITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGRldkVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwYW5YID0gMDtcclxuICAgIHByaXZhdGUgcGFuWSA9IDA7XHJcbiAgICBwcml2YXRlIHpvb20gPSAxO1xyXG4gICAgcHJpdmF0ZSBzcGFjZURvd24gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZHJhZ0N2ID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNteCA9IDA7XHJcbiAgICBwcml2YXRlIHNteSA9IDA7XHJcbiAgICBwcml2YXRlIHNlbElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgbXVsdGlTZWwgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIHByaXZhdGUgZWRpdElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgcm9vdHM6IE1pbmROb2RlRGF0YVtdID0gW107XHJcbiAgICBwcml2YXRlIGxjdCA9IDA7XHJcbiAgICBwcml2YXRlIGxjbmlkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29tbWl0RWRpdDogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVuZG9TOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZWRvUzogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdHlsZTogTWluZE1hcFN0eWxlID0geyAuLi5ERUZBVUxUX1NUWUxFIH07XHJcbiAgICBwcml2YXRlIGRzOiBEcmFnU3RhdGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwbHVnaW46IE1pbmROb2RlUGx1Z2luO1xyXG4gICAgcHJpdmF0ZSB1aU9rID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGJveFNlbCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBic3ggPSAwO1xyXG4gICAgcHJpdmF0ZSBic3kgPSAwO1xyXG4gICAgcHJpdmF0ZSBiY3ggPSAwO1xyXG4gICAgcHJpdmF0ZSBiY3kgPSAwO1xyXG4gICAgcHJpdmF0ZSBib3hTaGlmdCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBib3hFbDogU1ZHUmVjdEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgcG9wQ2xvc2U6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtZE1vZGUgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbWRCdG46IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNsaXBib2FyZDogeyBkYXRhOiBzdHJpbmc7IGlzUm9vdDogYm9vbGVhbjsgY3V0OiBib29sZWFuIH0gfCBudWxsID1cclxuICAgICAgICBudWxsO1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVNZW51OiBNZW51IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNlYXJjaEJhcjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2VhcmNoUmVzdWx0czogTWluZE5vZGVEYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgc2VhcmNoSWR4ID0gMDtcclxuICAgIHByaXZhdGUgb2xkUG9zID0gbmV3IE1hcDxzdHJpbmcsIHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4oKTtcclxuICAgIHByaXZhdGUgYW5pbUlkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgbGl2ZVRBOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIG1kU25hcHNob3Q6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB6b29tTGFiZWw6IEhUTUxTcGFuRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwcm94eVRBOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBNaW5kTm9kZVBsdWdpbikge1xyXG4gICAgICAgIHN1cGVyKGxlYWYpO1xyXG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBwbHVnaW4uZ2V0U3R5bGUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0IGtiKCk6IEtleUJpbmRpbmdzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW4uc2V0dGluZ3Mua2V5QmluZGluZ3M7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFJhaW5ib3coKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnN0eWxlLnJhaW5ib3dQYWxldHRlO1xyXG4gICAgICAgIGlmICh0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzPy5bcF0pIHJldHVybiB0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzW3BdO1xyXG4gICAgICAgIHJldHVybiBSQUlOQk9XX1BBTEVUVEVTW3BdIHx8IFJBSU5CT1dfUEFMRVRURVMuY2xhc3NpYztcclxuICAgIH1cclxuICAgIHByaXZhdGUgbWtSb290KHR4dDogc3RyaW5nKTogTWluZE5vZGVEYXRhIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcclxuICAgICAgICAgICAgdGV4dDogdHh0LFxyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5jYWxjVyh0eHQsIHRydWUpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY2FsY0godHh0LCB0cnVlKSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICBpc1Jvb3Q6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldFZpZXdUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiBWSUVXX1RZUEVfTUlORE1BUDtcclxuICAgIH1cclxuICAgIGdldERpc3BsYXlUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUuYmFzZW5hbWUgOiBcIk1pbmRaSlwiO1xyXG4gICAgfVxyXG4gICAgZ2V0SWNvbigpIHtcclxuICAgICAgICByZXR1cm4gXCJuZXR3b3JrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld0RhdGEoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5lZGl0SWQgJiYgdGhpcy5saXZlVEEpIHtcclxuICAgICAgICAgICAgY29uc3QgbmQgPSB0aGlzLmZBbGwodGhpcy5lZGl0SWQpO1xyXG4gICAgICAgICAgICBpZiAobmQpIG5kLnRleHQgPSB0aGlzLmxpdmVUQS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHsgcm9vdE5vZGVzOiB0aGlzLnJvb3RzIH0sIG51bGwsIDIpO1xyXG4gICAgfVxyXG4gICAgc2V0Vmlld0RhdGEoZGF0YTogc3RyaW5nLCBjbGVhcjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjbGVhcikge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMudW5kb1MgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5yZWRvUyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzID1cclxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocC5yb290Tm9kZXMpICYmIHAucm9vdE5vZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgID8gcC5yb290Tm9kZXNcclxuICAgICAgICAgICAgICAgICAgICA6IFt0aGlzLm1rUm9vdCh0aGlzLnBsdWdpbi5nZXRSb290TmFtZSgpKV07XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdHMgPSBbdGhpcy5ta1Jvb3QodGhpcy5wbHVnaW4uZ2V0Um9vdE5hbWUoKSldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yb290cy5sZW5ndGggJiYgIXRoaXMuc2VsSWQpIHRoaXMuc2VsSWQgPSB0aGlzLnJvb3RzWzBdLmlkO1xyXG4gICAgICAgIGlmICh0aGlzLnVpT2spIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWRNb2RlKSB0aGlzLnJlbmRlck1kKCk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5maXRBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnJvb3RzID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWwuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9TYXZlKCkge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdFNhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZml0QWxsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYyB8fCAhdGhpcy5yb290cy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBjb25zdCByYyA9IHRoaXMuY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgLy8gR3VhcmQ6IGNvbnRhaW5lciBub3QgeWV0IGxhaWQgb3V0IFx1MjAxNCByZXRyeSBvbiBuZXh0IGZyYW1lXHJcbiAgICAgICAgaWYgKHJjLndpZHRoIDwgMSB8fCByYy5oZWlnaHQgPCAxKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmZpdEFsbCgpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kb0xheW91dChyKTtcclxuICAgICAgICBsZXQgeDEgPSBJbmZpbml0eSxcclxuICAgICAgICAgICAgeDIgPSAtSW5maW5pdHksXHJcbiAgICAgICAgICAgIHkxID0gSW5maW5pdHksXHJcbiAgICAgICAgICAgIHkyID0gLUluZmluaXR5O1xyXG4gICAgICAgIGNvbnN0IHZpcyA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgeDEgPSBNYXRoLm1pbih4MSwgbi54IC0gbi53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICB4MiA9IE1hdGgubWF4KHgyLCBuLnggKyBuLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAgIHkxID0gTWF0aC5taW4oeTEsIG4ueSAtIG4uaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIHkyID0gTWF0aC5tYXgoeTIsIG4ueSArIG4uaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB2aXMoYyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdmlzKHIpO1xyXG4gICAgICAgIHRoaXMuem9vbSA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihyYy53aWR0aCAvICh4MiAtIHgxICsgMTAwKSwgcmMuaGVpZ2h0IC8gKHkyIC0geTEgKyAxMDApKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghaXNGaW5pdGUodGhpcy56b29tKSB8fCB0aGlzLnpvb20gPD0gMCkgdGhpcy56b29tID0gMTtcclxuICAgICAgICB0aGlzLnBhblggPSByYy53aWR0aCAvIDIgLSAoKHgxICsgeDIpIC8gMikgKiB0aGlzLnpvb207XHJcbiAgICAgICAgdGhpcy5wYW5ZID0gcmMuaGVpZ2h0IC8gMiAtICgoeTEgKyB5MikgLyAyKSAqIHRoaXMuem9vbTtcclxuICAgICAgICB0aGlzLnVwZFR4KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZm9jdXNOb2RlKG5kOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2MpIHJldHVybjtcclxuICAgICAgICBjb25zdCByID0gdGhpcy5jYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB0aGlzLnBhblggPSByLndpZHRoIC8gMiAtIG5kLnggKiB0aGlzLnpvb20gLSByLndpZHRoICogMC4xNztcclxuICAgICAgICB0aGlzLnBhblkgPSByLmhlaWdodCAvIDIgLSBuZC55ICogdGhpcy56b29tIC0gci5oZWlnaHQgKiAwLjA1O1xyXG4gICAgICAgIHRoaXMudXBkVHgoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZWZyZXNoVUkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVpT2spIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy50YkVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGJFbC5lbXB0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVGIodGhpcy50YkVsKTtcclxuICAgICAgICAgICAgdGhpcy5hcHBseVRvb2xiYXJTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVRvb2xiYXJWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgdGhpcy5hcHBseUNhbnZhc0JnKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXZQYW5lbCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWF3YWl0XHJcbiAgICBhc3luYyBvbk9wZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY3QgPSB0aGlzLmNvbnRhaW5lckVsLmNoaWxkcmVuWzFdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGN0LmVtcHR5KCk7XHJcbiAgICAgICAgY3QuYWRkQ2xhc3MoXCJtei12aWV3LWN0XCIpO1xyXG4gICAgICAgIC8vIHBhZGRpbmcgb3ZlcnJpZGUgbW92ZWQgdG8gc3R5bGVzLmNzc1xyXG4gICAgICAgIHRoaXMudGJFbCA9IGN0LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlUb29sYmFyU3R5bGUoKTtcclxuICAgICAgICB0aGlzLmJ1aWxkVGIodGhpcy50YkVsKTtcclxuICAgICAgICB0aGlzLnN2Z0N0ID0gY3QuY3JlYXRlRWwoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICBhdHRyOiB7IHRhYmluZGV4OiBcIjBcIiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3ZnQ3QuYWRkQ2xhc3MoXCJtei1zdmctY3RcIik7XHJcbiAgICAgICAgdGhpcy5jYyA9IHRoaXMuc3ZnQ3Q7XHJcbiAgICAgICAgLy8gRklYOiBwcmV2ZW50IGJyb3dzZXIgZnJvbSBzY3JvbGxpbmcgdGhlIGNvbnRhaW5lciBcdTIwMTQgcGFubmluZyB1c2VzIENTUyB0cmFuc2Zvcm0gb25seVxyXG4gICAgICAgIHRoaXMuc3ZnQ3QuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnQ3QhLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnQ3QhLnNjcm9sbExlZnQgPSAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXBwbHlDYW52YXNCZygpO1xyXG4gICAgICAgIHRoaXMuc3ZnRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgXCJzdmdcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc3ZnRWwuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgIHRoaXMuc3ZnRWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKTtcclxuICAgICAgICAvLyBTVkcgZGlzcGxheSBibG9jayBpcyBkZWZhdWx0XHJcbiAgICAgICAgdGhpcy5jYy5hcHBlbmRDaGlsZCh0aGlzLnN2Z0VsKTtcclxuICAgICAgICB0aGlzLmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcclxuICAgICAgICB0aGlzLnN2Z0VsLmFwcGVuZENoaWxkKHRoaXMuZ0VsKTtcclxuICAgICAgICB0aGlzLmVkZ2VzRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICBcImdcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ0VsLmFwcGVuZENoaWxkKHRoaXMuZWRnZXNHKTtcclxuICAgICAgICB0aGlzLm5vZGVzRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICBcImdcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ0VsLmFwcGVuZENoaWxkKHRoaXMubm9kZXNHKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXlHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgIFwiZ1wiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5nRWwuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5Ryk7XHJcbiAgICAgICAgdGhpcy5tZEN0ID0gY3QuY3JlYXRlRWwoXCJ0ZXh0YXJlYVwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICAgIHRoaXMubWRDdC5hZGRDbGFzcyhcIm16LW1kLXRhXCIpO1xyXG4gICAgICAgIHRoaXMubWRDdC5hZGRDbGFzcyhcIm16LWhpZGRlblwiKTtcclxuICAgICAgICB0aGlzLmJpbmRFdnRzKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2tkLCB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2t1LCB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5fbXUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMudWlPayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb29sYmFyVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGV2UGFuZWwoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm9vdHMubGVuZ3RoKSB0aGlzLmZpdEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNjPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXRcclxuICAgIGFzeW5jIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWl0RWRpdCkgdGhpcy5jb21taXRFZGl0KCk7XHJcbiAgICAgICAgdGhpcy5jbGVhclByb3h5KCk7XHJcbiAgICAgICAgdGhpcy51aU9rID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGFjZURvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRyYWdDdiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGl2ZVRBID0gbnVsbDtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5fa2QsIHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5fa3UsIHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLl9tdSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbUlkKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseUNhbnZhc0JnKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN2Z0N0KVxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1jYW52YXMtYmdcIjogdGhpcy5zdHlsZS5jYW52YXNCZyB9KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKFtrLCB2XSkgPT4gdGhpcy5zdmdDdC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSxcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXBwbHlUb29sYmFyU3R5bGUoKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuc3R5bGU7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcy50b29sYmFyUG9zaXRpb24gPT09IFwiYm90dG9tXCIgPyAyIDogMDtcclxuICAgICAgICBjb25zdCBib3JkZXJTaWRlID0gcy50b29sYmFyUG9zaXRpb24gPT09IFwiYm90dG9tXCIgPyBcInRvcFwiIDogXCJib3R0b21cIjtcclxuICAgICAgICBjb25zdCBiZHJDID0gcy50b29sYmFyQm9yZGVyQ29sb3IgfHwgXCIjZTBlMGUwXCI7XHJcbiAgICAgICAgY29uc3QgYmRyVyA9IHMudG9vbGJhckJvcmRlcldpZHRoID8/IDE7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIC0tIGR5bmFtaWMgdG9vbGJhciBjb2xvcnMgcmVxdWlyZSBpbmxpbmUgc3R5bGVcclxuICAgICAgICB0aGlzLnRiRWwuc3R5bGUuY3NzVGV4dCA9IGBoZWlnaHQ6NDJweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo2cHg7ZmxleC1zaHJpbms6MDtwYWRkaW5nOiR7cy50b29sYmFyUGFkVG9wfXB4ICR7cy50b29sYmFyUGFkUmlnaHR9cHggJHtzLnRvb2xiYXJQYWRCb3R0b219cHggJHtzLnRvb2xiYXJQYWRMZWZ0fXB4O2JhY2tncm91bmQ6JHtzLnRvb2xiYXJCZ0NvbG9yfTtib3JkZXItJHtib3JkZXJTaWRlfToke2Jkcld9cHggc29saWQgJHtiZHJDfTtvcmRlcjoke3Bvc307YDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlVG9vbGJhclZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGJFbClcclxuICAgICAgICAgICAgdGhpcy50YkVsLnRvZ2dsZUNsYXNzKFxyXG4gICAgICAgICAgICAgICAgXCJtei1oaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICF0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhcixcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTZWwoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbElkID09PSBpZCB8fCB0aGlzLm11bHRpU2VsLmhhcyhpZCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNsclNlbCgpIHtcclxuICAgICAgICB0aGlzLnNlbElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNlbDEoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWwuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnNlbElkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRvZ1NlbChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlTZWwuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkID09PSBpZClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsSWQgPSB0aGlzLm11bHRpU2VsLnNpemUgPyBbLi4udGhpcy5tdWx0aVNlbF1bMF0gOiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkICYmICF0aGlzLm11bHRpU2VsLmhhcyh0aGlzLnNlbElkKSlcclxuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlTZWwuYWRkKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmFkZChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFsbFNlbCgpOiBTZXQ8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgcyA9IG5ldyBTZXQodGhpcy5tdWx0aVNlbCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHMuYWRkKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc011bHRpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbFNlbCgpLnNpemUgPiAxO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjbG9zZVBvcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3BDbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcENsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wQ2xvc2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlRGV2UGFuZWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZlbG9wZXJNb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldkVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldkVsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZFbCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZGV2RWwgJiYgdGhpcy5zdmdDdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRldkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZFbC5hZGRDbGFzcyhcIm16LWRldi1wYW5lbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5zdmdDdC5hcHBlbmRDaGlsZCh0aGlzLmRldkVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2RWwpIHtcclxuICAgICAgICAgICAgY29uc3QgbmQgPSB0aGlzLnNlbElkID8gdGhpcy5mQWxsKHRoaXMuc2VsSWQpIDogbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5kZXZFbC50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbDogdGhpcy5zZWxJZD8uc3Vic3RyaW5nKDAsIDgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRJZDogdGhpcy5lZGl0SWQ/LnN1YnN0cmluZygwLCA4KSxcclxuICAgICAgICAgICAgICAgICAgICB6b29tOiArdGhpcy56b29tLnRvRml4ZWQoMyksXHJcbiAgICAgICAgICAgICAgICAgICAgcGFuOiBbK3RoaXMucGFuWC50b0ZpeGVkKDApLCArdGhpcy5wYW5ZLnRvRml4ZWQoMCldLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RzOiB0aGlzLnJvb3RzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICBub2RlOiBuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbmQudGV4dC5zdWJzdHJpbmcoMCwgMjApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiArbmQueC50b0ZpeGVkKDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiArbmQueS50b0ZpeGVkKDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogbmQuY2hpbGRyZW4ubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkVGIodGI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGIuZW1wdHkoKTtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5zdHlsZTtcclxuICAgICAgICBjb25zdCBidG5CZyA9IHMudG9vbGJhckJ0bkJnQ29sb3I7XHJcbiAgICAgICAgY29uc3QgYnRuQmRyID0gcy50b29sYmFyQnRuQm9yZGVyQ29sb3I7XHJcbiAgICAgICAgY29uc3QgYnRuQmRyUyA9IHMudG9vbGJhckJ0bkJvcmRlclN0eWxlO1xyXG4gICAgICAgIGNvbnN0IGJ0blR4ID0gcy50b29sYmFyQnRuVGV4dENvbG9yO1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICh0eHQ6IHN0cmluZywgdGlwOiBzdHJpbmcsIGZuOiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSB0Yi5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRpdGxlOiB0aXAgfSk7XHJcbiAgICAgICAgICAgIGIuYWRkQ2xhc3MoXCJtei10Yi1idG5cIik7XHJcbiAgICAgICAgICAgIGIuc3R5bGUuc2V0UHJvcGVydHkoXCItLW16LWJ0bi1ib3JkZXJcIiwgYDFweCAke2J0bkJkclN9ICR7YnRuQmRyfWApO1xyXG4gICAgICAgICAgICBiLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tei1idG4tYmdcIiwgYnRuQmcpO1xyXG4gICAgICAgICAgICBiLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tei1idG4tY29sb3JcIiwgYnRuVHgpO1xyXG4gICAgICAgICAgICBiLmlubmVyVGV4dCA9IHR4dDtcclxuICAgICAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZm4pO1xyXG4gICAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICBiLmFkZENsYXNzKFwibXotdGItYnRuLWhvdmVyXCIpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICBiLnJlbW92ZUNsYXNzKFwibXotdGItYnRuLWhvdmVyXCIpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gYjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bih0KFwidGIucm9vdFwiKSwgdChcInRiLm5ld1Jvb3RcIiksICgpID0+IHRoaXMuYWRkUm9vdCgpKTtcclxuICAgICAgICBidG4odChcInRiLnVuZG9cIiksIHQoXCJ0Yi50aXBVbmRvXCIpLCAoKSA9PiB0aGlzLnVuZG8oKSk7XHJcbiAgICAgICAgYnRuKHQoXCJ0Yi5yZWRvXCIpLCB0KFwidGIudGlwUmVkb1wiKSwgKCkgPT4gdGhpcy5yZWRvKCkpO1xyXG4gICAgICAgIGNvbnN0IHNlcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHRiLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBkLmFkZENsYXNzKFwibXotdGItc2VwXCIpO1xyXG4gICAgICAgICAgICBkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tei1zZXAtY29sb3JcIiwgYnRuQmRyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNlcCgpO1xyXG4gICAgICAgIHRoaXMubWRCdG4gPSBidG4odChcInRiLm1kXCIpLCB0KFwidGIudGlwTWRcIiksICgpID0+IHRoaXMudG9nZ2xlTWQoKSk7XHJcbiAgICAgICAgYnRuKHQoXCJ0Yi5zdHlsZVwiKSwgdChcInRiLnRpcFN0eWxlXCIpLCAoKSA9PiB0aGlzLnNob3dTdHlsZU1vZGFsKCkpO1xyXG4gICAgICAgIGJ0bihcIlx1RDgzRFx1REM1MyBcIiArIHQoXCJ0Yi5mb2N1c1wiKSwgdChcInRiLnRpcEZvY3VzXCIpLCAoKSA9PiB0aGlzLmZvY3VzU2VsKCkpO1xyXG4gICAgICAgIGJ0bihcIlx1RDgzRFx1REQwRCBcIiArIHQoXCJ0Yi5zZWFyY2hcIiksIHQoXCJ0Yi50aXBTZWFyY2hcIiksICgpID0+XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VhcmNoKCksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBidG4odChcInRiLnNldHRpbmdzXCIpLCB0KFwidGIudGlwU2V0dGluZ3NcIiksICgpID0+XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLm9wZW5QbHVnaW5TZXR0aW5ncygpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2VwKCk7XHJcbiAgICAgICAgYnRuKFwiXHUyMjEyXCIsIHQoXCJ0Yi56b29tT3V0XCIpLCAoKSA9PiB0aGlzLnpvb21CeSgwLjkpKTtcclxuICAgICAgICB0aGlzLnpvb21MYWJlbCA9IHRiLmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLnpvb21MYWJlbC5hZGRDbGFzcyhcIm16LXRiLXpvb21cIik7XHJcbiAgICAgICAgdGhpcy56b29tTGFiZWwuaW5uZXJUZXh0ID0gTWF0aC5yb3VuZCh0aGlzLnpvb20gKiAxMDApICsgXCIlXCI7XHJcbiAgICAgICAgdGhpcy56b29tTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuem9vbVRvKDEpKTtcclxuICAgICAgICBidG4oXCIrXCIsIHQoXCJ0Yi56b29tSW5cIiksICgpID0+IHRoaXMuem9vbUJ5KDEuMSkpO1xyXG4gICAgICAgIGNvbnN0IGggPSB0Yi5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgaC5hZGRDbGFzcyhcIm16LXRiLWhlbHBcIik7XHJcbiAgICAgICAgaC5pbm5lclRleHQgPSB0KFwidGIuaGVscFwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZm9jdXNTZWwoKSB7XHJcbiAgICAgICAgbGV0IG5kOiBNaW5kTm9kZURhdGEgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5zZWxJZCkgbmQgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgaWYgKCFuZCAmJiB0aGlzLnJvb3RzLmxlbmd0aCkgbmQgPSB0aGlzLnJvb3RzW3RoaXMucm9vdHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKG5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNOb2RlKG5kKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRvZ2dsZU1kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1kTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1kTW9kZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZEJ0bikgdGhpcy5tZEJ0bi5pbm5lclRleHQgPSB0KFwidGIubWRcIik7XHJcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgZnJvbSBzbmFwc2hvdCBpZiB0ZXh0IHVuY2hhbmdlZCwgZWxzZSBwYXJzZVxyXG4gICAgICAgICAgICBjb25zdCBuZXdNZCA9IHRoaXMubWRDdC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3Qgb2xkTWQgPSB0aGlzLm1kU25hcHNob3QgPyB0aGlzLnJvb3RzMm1kRnJvbVNuYXAoKSA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChvbGRNZCAmJiBuZXdNZCA9PT0gb2xkTWQpIHtcclxuICAgICAgICAgICAgICAgIC8qIG5vIGNoYW5nZXMsIGtlZXAgb3JpZ2luYWwgcm9vdHMgKi9cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VNZChuZXdNZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tZFNuYXBzaG90ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5tZEN0LnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnN2Z0N0LnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHRoaXMuZG9MYXlvdXQocik7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tbWl0RWRpdCkgdGhpcy5jb21taXRFZGl0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubWRNb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWRCdG4pIHRoaXMubWRCdG4uaW5uZXJUZXh0ID0gdChcInRiLm1hcFwiKTtcclxuICAgICAgICAgICAgdGhpcy5tZFNuYXBzaG90ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5yb290cyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnQ3QudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWRDdC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWRDdC52YWx1ZSA9IHRoaXMucm9vdHMybWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJvb3RzMm1kRnJvbVNuYXAoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1kU25hcHNob3QpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJzID0gSlNPTi5wYXJzZSh0aGlzLm1kU25hcHNob3QpIGFzIE1pbmROb2RlRGF0YVtdO1xyXG4gICAgICAgICAgICBsZXQgbSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IG4ybWQgPSAoXHJcbiAgICAgICAgICAgICAgICBuZDogTWluZE5vZGVEYXRhLFxyXG4gICAgICAgICAgICAgICAgZDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgbWFya2VyOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eCA9IG5kLnRleHQucmVwbGFjZSgvXFxuL2csIFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGwgPSBcIlxcdFwiLnJlcGVhdChkIC0gMSkgKyBtYXJrZXIgKyBcIiBcIiArIHR4O1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBsICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuZC5jaGlsZHJlbikgciArPSBuMm1kKGMsIGQgKyAxLCBtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q2ggPSByLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlICE9PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0Q2ggPSByLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlID09PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBtICs9IHIudGV4dC5yZXBsYWNlKC9cXG4vZywgXCIgXCIpICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiByaWdodENoKSBtICs9IG4ybWQoYywgMSwgXCItXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGxlZnRDaCkgbSArPSBuMm1kKGMsIDEsIFwiKlwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgcnMubGVuZ3RoIC0gMSkgbSArPSBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJvb3RzMm1kKCkge1xyXG4gICAgICAgIGxldCBtID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMucm9vdHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q2ggPSByLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlICE9PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZnRDaCA9IHIuY2hpbGRyZW4uZmlsdGVyKChjKSA9PiBjLnNpZGUgPT09IFwibGVmdFwiKTtcclxuICAgICAgICAgICAgbSArPSByLnRleHQucmVwbGFjZSgvXFxuL2csIFwiIFwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiByaWdodENoKSBtICs9IHRoaXMubjJtZChjLCAxLCBcIi1cIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBsZWZ0Q2gpIG0gKz0gdGhpcy5uMm1kKGMsIDEsIFwiKlwiKTtcclxuICAgICAgICAgICAgaWYgKGkgPCB0aGlzLnJvb3RzLmxlbmd0aCAtIDEpIG0gKz0gXCJcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG4ybWQobmQ6IE1pbmROb2RlRGF0YSwgZDogbnVtYmVyLCBtYXJrZXI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdHggPSBuZC50ZXh0LnJlcGxhY2UoL1xcbi9nLCBcIiBcIik7XHJcbiAgICAgICAgY29uc3QgbCA9IFwiXFx0XCIucmVwZWF0KGQgLSAxKSArIG1hcmtlciArIFwiIFwiICsgdHg7XHJcbiAgICAgICAgbGV0IHIgPSBsICsgXCJcXG5cIjtcclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgbmQuY2hpbGRyZW4pIHIgKz0gdGhpcy5uMm1kKGMsIGQgKyAxLCBtYXJrZXIpO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW5kZXJNZCgpIHtcclxuICAgICAgICB0aGlzLm1kQ3QudmFsdWUgPSB0aGlzLnJvb3RzMm1kKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHBhcnNlTWQodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobCkgPT4gbC50cmltKCkpO1xyXG4gICAgICAgIGlmICghbGluZXMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbnI6IE1pbmROb2RlRGF0YVtdID0gW107XHJcbiAgICAgICAgbGV0IGN1cjogTWluZE5vZGVEYXRhIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgY29uc3Qgc3RrOiBbbnVtYmVyLCBNaW5kTm9kZURhdGFdW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgbSA9IGxpbmUubWF0Y2goL14oXFx0KikoWy0qXSlcXHMrKC4qKS8pO1xyXG4gICAgICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVwID0gbVsxXS5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlciA9IG1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHh0ID0gbVszXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWRlID0gbWFya2VyID09PSBcIipcIiA/IFwibGVmdFwiIDogXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmQ6IE1pbmROb2RlRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0eHQsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbGNXKHR4dCwgZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5jYWxjSCh0eHQsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoc3RrLmxlbmd0aCAmJiBzdGtbc3RrLmxlbmd0aCAtIDFdWzBdID49IGRlcCkgc3RrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ay5sZW5ndGgpIHN0a1tzdGsubGVuZ3RoIC0gMV1bMV0uY2hpbGRyZW4ucHVzaChuZCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXIpIGN1ci5jaGlsZHJlbi5wdXNoKG5kKTtcclxuICAgICAgICAgICAgICAgIHN0ay5wdXNoKFtkZXAsIG5kXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eHQgPSBsaW5lLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlmICghdHh0KSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMubWtSb290KHR4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyLnggPSBucltuci5sZW5ndGggLSAxXS54O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1ci55ID0gbnJbbnIubGVuZ3RoIC0gMV0ueSArIDIwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5yLnB1c2goY3VyKTtcclxuICAgICAgICAgICAgICAgIHN0ay5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgc3RrLnB1c2goWzAsIGN1cl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuci5sZW5ndGgpIHRoaXMucm9vdHMgPSBucjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFJvb3QodGV4dD86IHN0cmluZywgeD86IG51bWJlciwgeT86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICBjb25zdCBuID0gdGhpcy5ta1Jvb3QodGV4dCA/PyB0aGlzLnBsdWdpbi5nZXRSb290TmFtZSgpKTtcclxuICAgICAgICBjb25zdCBsYXN0ID0gdGhpcy5yb290c1t0aGlzLnJvb3RzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIC8vIENvbXB1dGUgYm90dG9tLW1vc3QgWSBpbmNsdWRpbmcgYWxsIGRlc2NlbmRhbnRzIG9mIGxhc3Qgcm9vdFxyXG4gICAgICAgIGxldCBtYXhZID0gMDtcclxuICAgICAgICBpZiAobGFzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvTGF5b3V0KGxhc3QpO1xyXG4gICAgICAgICAgICBjb25zdCBmaW5kTWF4WSA9IChuZDogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3QgPSBuZC55ICsgbmQuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgIGlmIChib3QgPiBtYXhZKSBtYXhZID0gYm90O1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG5kLmNoaWxkcmVuKSBmaW5kTWF4WShjKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmluZE1heFkobGFzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG4ueCA9IHggPz8gKGxhc3QgPyBsYXN0LnggOiAwKTtcclxuICAgICAgICBuLnkgPSB5ID8/IChsYXN0ID8gbWF4WSArIDgwIDogMCk7XHJcbiAgICAgICAgdGhpcy5yb290cy5wdXNoKG4pO1xyXG4gICAgICAgIHRoaXMuc2VsMShuLmlkKTtcclxuICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuZWRpdE9uQ3JlYXRlKSB0aGlzLmVkaXRJZCA9IG4uaWQ7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZShuKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNhdmVTKCkge1xyXG4gICAgICAgIHRoaXMudW5kb1MucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLnJvb3RzKSk7XHJcbiAgICAgICAgaWYgKHRoaXMudW5kb1MubGVuZ3RoID4gNTApIHRoaXMudW5kb1Muc2hpZnQoKTtcclxuICAgICAgICB0aGlzLnJlZG9TID0gW107XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVuZG8oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVuZG9TLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmVkb1MucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLnJvb3RzKSk7XHJcbiAgICAgICAgdGhpcy5yb290cyA9IEpTT04ucGFyc2UodGhpcy51bmRvUy5wb3AoKSEpO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbElkICYmICF0aGlzLmZBbGwodGhpcy5zZWxJZCkpIHRoaXMuc2VsSWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWwuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnJlY2FsY0FsbFNpemVzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZWRvKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWRvUy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICB0aGlzLnVuZG9TLnB1c2goSlNPTi5zdHJpbmdpZnkodGhpcy5yb290cykpO1xyXG4gICAgICAgIHRoaXMucm9vdHMgPSBKU09OLnBhcnNlKHRoaXMucmVkb1MucG9wKCkhKTtcclxuICAgICAgICB0aGlzLnJlY2FsY0FsbFNpemVzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqIFJlLW1lYXN1cmUgZXZlcnkgbm9kZSdzIHdpZHRoL2hlaWdodCBiYXNlZCBvbiBjdXJyZW50IHN0eWxlIHNvIHRoYXRcclxuICAgICAqICB0ZXh0IG5ldmVyIGdldHMgY2xpcHBlZCBvciBmb3JjZS13cmFwcGVkIGFmdGVyIHVuZG8vcmVkby4gKi9cclxuICAgIHByaXZhdGUgcmVjYWxjQWxsU2l6ZXMoKSB7XHJcbiAgICAgICAgY29uc3Qgd2FsayA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNSID0gISFuLmlzUm9vdDtcclxuICAgICAgICAgICAgbi53aWR0aCA9IHRoaXMuY2FsY1cobi50ZXh0LCBpc1IpO1xyXG4gICAgICAgICAgICBuLmhlaWdodCA9IHRoaXMuY2FsY0gobi50ZXh0LCBpc1IpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgd2FsayhjKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB3YWxrKHIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmQWxsKGlkOiBzdHJpbmcpOiBNaW5kTm9kZURhdGEgfCBudWxsIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICBjb25zdCBmID0gdGhpcy5mTihpZCwgcik7XHJcbiAgICAgICAgICAgIGlmIChmKSByZXR1cm4gZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXBwbHlTdHlsZShwOiBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pIHtcclxuICAgICAgICB0aGlzLnN0eWxlID0geyAuLi50aGlzLnN0eWxlLCAuLi5wIH07XHJcbiAgICAgICAgdGhpcy5wbHVnaW4udXBkYXRlU3R5bGUocCk7XHJcbiAgICAgICAgdGhpcy5hcHBseUNhbnZhc0JnKCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJQb3NpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhclBhZFRvcCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhclBhZFJpZ2h0ICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyUGFkQm90dG9tICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyUGFkTGVmdCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhckJnQ29sb3IgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJCb3JkZXJDb2xvciAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhckJvcmRlcldpZHRoICE9PSB1bmRlZmluZWRcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlUb29sYmFyU3R5bGUoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHAudG9vbGJhckJ0bkJnQ29sb3IgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJCdG5Cb3JkZXJTdHlsZSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhckJ0bkJvcmRlckNvbG9yICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyQnRuVGV4dENvbG9yICE9PSB1bmRlZmluZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy50YkVsLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRUYih0aGlzLnRiRWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5VG9vbGJhclN0eWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlY2FsY3VsYXRlIGFsbCBub2RlIHNpemVzIHdoZW4gZm9udC9sYXlvdXQgcmVsYXRlZCBzdHlsZXMgY2hhbmdlXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBwLm5vZGVGb250U2l6ZSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAucm9vdEZvbnRTaXplICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5ub2RlRm9udEZhbWlseSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAucm9vdEZvbnRGYW1pbHkgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLm5vZGVNaW5XaWR0aCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAubm9kZU1pbkhlaWdodCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAucm9vdE1pbldpZHRoICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5yb290TWluSGVpZ2h0ICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5ub2RlUGFkWCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAubm9kZUxpbmVIZWlnaHQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnJlY2FsY0FsbE5vZGVTaXplcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZWNhbGNBbGxOb2RlU2l6ZXMoKSB7XHJcbiAgICAgICAgY29uc3QgdmlzaXQgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUiA9ICEhbi5pc1Jvb3Q7XHJcbiAgICAgICAgICAgIG4ud2lkdGggPSB0aGlzLmNhbGNXKG4udGV4dCB8fCBcIiBcIiwgaXNSKTtcclxuICAgICAgICAgICAgbi5oZWlnaHQgPSB0aGlzLmNhbGNIKG4udGV4dCB8fCBcIiBcIiwgaXNSKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHZpc2l0KGMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHZpc2l0KHIpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3NpZ25SYWluYm93Q29sb3IocGFyZW50OiBNaW5kTm9kZURhdGEsIGNoaWxkOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3R5bGUuY29ubmVjdGlvblJhaW5ib3cgfHwgIXBhcmVudC5pc1Jvb3QpIHJldHVybjtcclxuICAgICAgICBpZiAoIWNoaWxkLmNvbm5lY3Rpb25Db2xvcikge1xyXG4gICAgICAgICAgICBjb25zdCByYiA9IHRoaXMuZ2V0UmFpbmJvdygpO1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgICAgIGNoaWxkLmNvbm5lY3Rpb25Db2xvciA9XHJcbiAgICAgICAgICAgICAgICByYlsoaWR4ID49IDAgPyBpZHggOiBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoKSAlIHJiLmxlbmd0aF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBtYXRjaEtleShlOiBLZXlib2FyZEV2ZW50LCBjb21ibzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBjb21iby50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiK1wiKTtcclxuICAgICAgICBjb25zdCBuZWVkQ3RybCA9IHBhcnRzLmluY2x1ZGVzKFwiY3RybFwiKTtcclxuICAgICAgICBjb25zdCBuZWVkU2hpZnQgPSBwYXJ0cy5pbmNsdWRlcyhcInNoaWZ0XCIpO1xyXG4gICAgICAgIGNvbnN0IG5lZWRBbHQgPSBwYXJ0cy5pbmNsdWRlcyhcImFsdFwiKTtcclxuICAgICAgICBjb25zdCBtYWluS2V5ID1cclxuICAgICAgICAgICAgcGFydHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHApID0+IHAgIT09IFwiY3RybFwiICYmIHAgIT09IFwic2hpZnRcIiAmJiBwICE9PSBcImFsdFwiLFxyXG4gICAgICAgICAgICApWzBdIHx8IFwiXCI7XHJcbiAgICAgICAgaWYgKG5lZWRDdHJsICE9PSAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobmVlZFNoaWZ0ICE9PSBlLnNoaWZ0S2V5KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG5lZWRBbHQgIT09IGUuYWx0S2V5KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgZUtleSA9IGUua2V5ID09PSBcIiBcIiA/IFwic3BhY2VcIiA6IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgZUNvZGUgPSBlLmNvZGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAvLyBNYXAgZS5jb2RlIHRvIGJhc2UgdW5zaGlmdGVkIGtleSBmb3IgcmVsaWFibGUgbWF0Y2hpbmdcclxuICAgICAgICBjb25zdCBjb2RlTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICAgICAgICAgICBlcXVhbDogXCI9XCIsXHJcbiAgICAgICAgICAgIG1pbnVzOiBcIi1cIixcclxuICAgICAgICAgICAgZGlnaXQwOiBcIjBcIixcclxuICAgICAgICAgICAgZGlnaXQxOiBcIjFcIixcclxuICAgICAgICAgICAgZGlnaXQyOiBcIjJcIixcclxuICAgICAgICAgICAgZGlnaXQzOiBcIjNcIixcclxuICAgICAgICAgICAgZGlnaXQ0OiBcIjRcIixcclxuICAgICAgICAgICAgZGlnaXQ1OiBcIjVcIixcclxuICAgICAgICAgICAgZGlnaXQ2OiBcIjZcIixcclxuICAgICAgICAgICAgZGlnaXQ3OiBcIjdcIixcclxuICAgICAgICAgICAgZGlnaXQ4OiBcIjhcIixcclxuICAgICAgICAgICAgZGlnaXQ5OiBcIjlcIixcclxuICAgICAgICAgICAgYnJhY2tldGxlZnQ6IFwiW1wiLFxyXG4gICAgICAgICAgICBicmFja2V0cmlnaHQ6IFwiXVwiLFxyXG4gICAgICAgICAgICBzZW1pY29sb246IFwiO1wiLFxyXG4gICAgICAgICAgICBxdW90ZTogXCInXCIsXHJcbiAgICAgICAgICAgIGJhY2txdW90ZTogXCJgXCIsXHJcbiAgICAgICAgICAgIGNvbW1hOiBcIixcIixcclxuICAgICAgICAgICAgcGVyaW9kOiBcIi5cIixcclxuICAgICAgICAgICAgc2xhc2g6IFwiL1wiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYmFzZUtleSA9IGNvZGVNYXBbZUNvZGVdIHx8IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIGVLZXkgPT09IG1haW5LZXkgfHwgZUNvZGUgPT09IG1haW5LZXkgfHwgYmFzZUtleSA9PT0gbWFpbktleTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBcdTI1NTBcdTI1NTBcdTI1NTAgTW9kYWxzIC0gYWxsIGNsb3NlIG9uIEVzYyBcdTI1NTBcdTI1NTBcdTI1NTBcclxuICAgIHByaXZhdGUgc2hvd1N0eWxlTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcCgpO1xyXG4gICAgICAgIGNvbnN0IG92ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBvdi5hZGRDbGFzcyhcIm16LW1vZGFsLW92ZXJsYXlcIik7XHJcbiAgICAgICAgY29uc3QgbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbS5hZGRDbGFzcyhcIm16LW1vZGFsXCIpO1xyXG4gICAgICAgIG0uY3JlYXRlRWwoXCJoM1wiLCB7IHRleHQ6IHQoXCJzbS50aXRsZVwiKSB9KS5hZGRDbGFzcyhcIm16LW1vZGFsLXRpdGxlXCIpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBvdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgbS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3BDbG9zZSA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBvcENsb3NlID0gY2xvc2U7XHJcbiAgICAgICAgb3YuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcclxuICAgICAgICBtLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwia2V5ZG93blwiLFxyXG4gICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNlYyA9IChpY29uOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcyA9IG0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHMuYWRkQ2xhc3MoXCJtei1tb2RhbC1zZWNcIik7XHJcbiAgICAgICAgICAgIHMuY3JlYXRlRWwoXCJkaXZcIiwgeyB0ZXh0OiBpY29uICsgXCIgXCIgKyB0aXRsZSB9KS5hZGRDbGFzcyhcclxuICAgICAgICAgICAgICAgIFwibXotbW9kYWwtc2VjLWhkclwiLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IFIgPSAoXHJcbiAgICAgICAgICAgIHA6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgICAgICBsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGs6IGtleW9mIE1pbmRNYXBTdHlsZSxcclxuICAgICAgICAgICAgdHA6IHN0cmluZyxcclxuICAgICAgICAgICAgbz86IHtcclxuICAgICAgICAgICAgICAgIG1pbj86IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIG1heD86IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM/OiBzdHJpbmdbXTtcclxuICAgICAgICAgICAgICAgIHN0ZXA/OiBudW1iZXI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHAuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJvdy5hZGRDbGFzcyhcIm16LW1vZGFsLXJvd1wiKTtcclxuICAgICAgICAgICAgcm93LmNyZWF0ZUVsKFwibGFiZWxcIiwgeyB0ZXh0OiBsIH0pLmFkZENsYXNzKFwibXotbW9kYWwtbGJsXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjdiA9IHRoaXMuc3R5bGVba107XHJcbiAgICAgICAgICAgIGlmICh0cCA9PT0gXCJjb2xvclwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gcm93LmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGkudHlwZSA9IFwiY29sb3JcIjtcclxuICAgICAgICAgICAgICAgIGkudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjdiA9PT0gXCJzdHJpbmdcIiAmJiBjdi5zdGFydHNXaXRoKFwidmFyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBTdHJpbmcoY3YpO1xyXG4gICAgICAgICAgICAgICAgaS5hZGRDbGFzcyhcIm16LW1vZGFsLWNvbG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHsgW2tdOiBpLnZhbHVlIH0gYXMgUGFydGlhbDxNaW5kTWFwU3R5bGU+KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHAgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSByb3cuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaS50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICAgICAgICAgIGkubWluID0gU3RyaW5nKG8/Lm1pbiA/PyAwKTtcclxuICAgICAgICAgICAgICAgIGkubWF4ID0gU3RyaW5nKG8/Lm1heCA/PyA5OTkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG8/LnN0ZXApIGkuc3RlcCA9IFN0cmluZyhvLnN0ZXApO1xyXG4gICAgICAgICAgICAgICAgaS52YWx1ZSA9IFN0cmluZyhjdik7XHJcbiAgICAgICAgICAgICAgICBpLmFkZENsYXNzKFwibXotbW9kYWwtbnVtXCIpO1xyXG4gICAgICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2tdOiBOdW1iZXIoaS52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0cCA9PT0gXCJzZWxlY3RcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IHJvdy5jcmVhdGVFbChcInNlbGVjdFwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHMuYWRkQ2xhc3MoXCJtei1tb2RhbC1zZWxcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHYgb2Ygbz8ub3B0aW9ucyA/PyBbXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBvcC52YWx1ZSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AudGV4dCA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT09IFN0cmluZyhjdikpIG9wLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzLmFwcGVuZENoaWxkKG9wKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7IFtrXTogcy52YWx1ZSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRwID09PSBcInRvZ2dsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYiA9IHJvdy5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBjYi50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgICAgICAgICAgY2IuY2hlY2tlZCA9ICEhY3Y7XHJcbiAgICAgICAgICAgICAgICBjYi5hZGRDbGFzcyhcIm16LW1vZGFsLWNoa1wiKTtcclxuICAgICAgICAgICAgICAgIGNiLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBba106IGNiLmNoZWNrZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgczEgPSBzZWMoXCJcdUQ4M0RcdURDRTZcIiwgdChcInNtLmNoaWxkXCIpKTtcclxuICAgICAgICBSKHMxLCB0KFwic20uYmdcIiksIFwibm9kZUJnQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHMxLCB0KFwic20udGV4dFwiKSwgXCJub2RlVGV4dENvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmZvbnRTaXplXCIpLCBcIm5vZGVGb250U2l6ZVwiLCBcIm51bWJlclwiLCB7IG1pbjogMTAsIG1heDogMzIgfSk7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmZvbnRcIiksIFwibm9kZUZvbnRGYW1pbHlcIiwgXCJzZWxlY3RcIiwgeyBvcHRpb25zOiBGT05UX0xJU1QgfSk7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmJvcmRlclN0eWxlXCIpLCBcIm5vZGVCb3JkZXJTdHlsZVwiLCBcInNlbGVjdFwiLCB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInNvbGlkXCIsIFwiZGFzaGVkXCIsIFwiZG90dGVkXCIsIFwiZG91YmxlXCIsIFwibm9uZVwiXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMxLCB0KFwic20uYm9yZGVyQ29sb3JcIiksIFwibm9kZUJvcmRlckNvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmJvcmRlcldpZHRoXCIpLCBcIm5vZGVCb3JkZXJXaWR0aFwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiA4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczEsIHQoXCJzbS5ib3JkZXJSYWRpdXNcIiksIFwibm9kZUJvcmRlclJhZGl1c1wiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiAzMixcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMxLCB0KFwic20ubWluV2lkdGhcIiksIFwibm9kZU1pbldpZHRoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAzMCxcclxuICAgICAgICAgICAgbWF4OiA0MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMSwgdChcInNtLm1pbkhlaWdodFwiKSwgXCJub2RlTWluSGVpZ2h0XCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAyMCxcclxuICAgICAgICAgICAgbWF4OiAyMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgczIgPSBzZWMoXCJcdUQ4M0NcdURGRTBcIiwgdChcInNtLnJvb3RcIikpO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5iZ1wiKSwgXCJyb290QmdDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS50ZXh0XCIpLCBcInJvb3RUZXh0Q29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHMyLCB0KFwic20uZm9udFNpemVcIiksIFwicm9vdEZvbnRTaXplXCIsIFwibnVtYmVyXCIsIHsgbWluOiAxMCwgbWF4OiAzMiB9KTtcclxuICAgICAgICBSKHMyLCB0KFwic20uZm9udFwiKSwgXCJyb290Rm9udEZhbWlseVwiLCBcInNlbGVjdFwiLCB7IG9wdGlvbnM6IEZPTlRfTElTVCB9KTtcclxuICAgICAgICBSKHMyLCB0KFwic20uYm9yZGVyU3R5bGVcIiksIFwicm9vdEJvcmRlclN0eWxlXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogW1wic29saWRcIiwgXCJkYXNoZWRcIiwgXCJkb3R0ZWRcIiwgXCJkb3VibGVcIiwgXCJub25lXCJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5ib3JkZXJDb2xvclwiKSwgXCJyb290Qm9yZGVyQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHMyLCB0KFwic20uYm9yZGVyV2lkdGhcIiksIFwicm9vdEJvcmRlcldpZHRoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMiwgdChcInNtLmJvcmRlclJhZGl1c1wiKSwgXCJyb290Qm9yZGVyUmFkaXVzXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDMyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5taW5XaWR0aFwiKSwgXCJyb290TWluV2lkdGhcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDUwLFxyXG4gICAgICAgICAgICBtYXg6IDQwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMyLCB0KFwic20ubWluSGVpZ2h0XCIpLCBcInJvb3RNaW5IZWlnaHRcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDIwLFxyXG4gICAgICAgICAgICBtYXg6IDIwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzMyA9IHNlYyhcIlx1RDgzRFx1REQxN1wiLCB0KFwic20uY29ublwiKSk7XHJcbiAgICAgICAgUihzMywgdChcInNtLnR5cGVcIiksIFwiY29ubmVjdGlvblN0eWxlXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogQ09OTkVDVElPTl9TVFlMRVMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMywgdChcInNtLmNvbG9yXCIpLCBcImNvbm5lY3Rpb25Db2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczMsIHQoXCJzbS53aWR0aFwiKSwgXCJjb25uZWN0aW9uV2lkdGhcIiwgXCJudW1iZXJcIiwgeyBtaW46IDEsIG1heDogOCB9KTtcclxuICAgICAgICBSKHMzLCB0KFwic20uY29ubkxlbmd0aFwiKSwgXCJjb25uZWN0aW9uTGVuZ3RoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAzMCxcclxuICAgICAgICAgICAgbWF4OiAzMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMywgdChcInNtLm5vZGVEaXJcIiksIFwibm9kZURpcmVjdGlvblwiLCBcInNlbGVjdFwiLCB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInJpZ2h0XCIsIFwibGVmdFwiLCBcImJvdGhcIl0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMywgdChcInNtLm5vZGVHYXBZXCIpLCBcIm5vZGVHYXBZXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiA4LFxyXG4gICAgICAgICAgICBtYXg6IDgwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFJhaW5ib3c6IGxpc3Qgd2l0aCByZWFsIGNvbG9yIGRvdHMsIGRlbGV0ZSBidXR0b25zLCBubyBtb2RhbCByZW9wZW5cclxuICAgICAgICBjb25zdCBjdFJvdyA9IHMzLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGN0Um93LmFkZENsYXNzKFwibXotcmFpbmJvdy1jdFwiKTtcclxuICAgICAgICBjdFJvd1xyXG4gICAgICAgICAgICAuY3JlYXRlRWwoXCJsYWJlbFwiLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0KFwic20ucmFpbmJvd1wiKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwibXotcmFpbmJvdy1sYmxcIik7XHJcbiAgICAgICAgY29uc3QgYWxsUGFsczogeyBbazogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcclxuICAgICAgICAgICAgLi4uUkFJTkJPV19QQUxFVFRFUyxcclxuICAgICAgICAgICAgLi4uKHRoaXMuc3R5bGUuY3VzdG9tUmFpbmJvd3MgfHwge30pLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGN1clBhbCA9IHRoaXMuc3R5bGUuY29ubmVjdGlvblJhaW5ib3dcclxuICAgICAgICAgICAgPyB0aGlzLnN0eWxlLnJhaW5ib3dQYWxldHRlXHJcbiAgICAgICAgICAgIDogXCJvZmZcIjtcclxuICAgICAgICBjb25zdCBsaXN0V3JhcCA9IGN0Um93LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGxpc3RXcmFwLmFkZENsYXNzKFwibXotcmFpbmJvdy1saXN0XCIpO1xyXG4gICAgICAgIGNvbnN0IHJlYnVpbGRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0V3JhcC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uUkFJTkJPV19QQUxFVFRFUyxcclxuICAgICAgICAgICAgICAgIC4uLih0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzIHx8IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgbWtJdGVtID0gKFxyXG4gICAgICAgICAgICAgICAga2V5OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBzdHJpbmdbXSB8IG51bGwsXHJcbiAgICAgICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXQgPSBsaXN0V3JhcC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGl0LmFkZENsYXNzKFwibXotcmFpbmJvdy1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgaXQudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIiwga2V5ID09PSBjdXJQYWwpO1xyXG4gICAgICAgICAgICAgICAgaXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IGN1clBhbCkgaXQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXQudG9nZ2xlQ2xhc3MoXCJtei1yYWluYm93LWhvdmVyXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm0gPSBpdC5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBsYWJlbCB9KTtcclxuICAgICAgICAgICAgICAgIG5tLmFkZENsYXNzKFwibXotcmFpbmJvdy1pdGVtLWxibFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb3RzID0gaXQuY3JlYXRlRWwoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdHMuYWRkQ2xhc3MoXCJtei1yYWluYm93LWRvdHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGNvbG9ycy5zbGljZSgwLCAxMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IGRvdHMuY3JlYXRlRWwoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmFkZENsYXNzKFwibXotcmFpbmJvdy1kb3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHsgXCItLW16LWRvdC1jb2xvclwiOiBjIH0pLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoW2ssIHZdKSA9PiBkLnN0eWxlLnNldFByb3BlcnR5KGssIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucyhcInBhbC1kZWxcIilcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcIm9mZlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7IGNvbm5lY3Rpb25SYWluYm93OiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyUGFsID0gXCJvZmZcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvblJhaW5ib3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWluYm93UGFsZXR0ZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyUGFsID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZWJ1aWxkTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBEZWxldGUgYnV0dG9uIChub3QgZm9yIFNvbGlkIG9yIGJ1aWx0LWluIHBhbGV0dGVzKVxyXG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gXCJvZmZcIiAmJiAhUkFJTkJPV19QQUxFVFRFU1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsID0gaXQuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogXCJcdTI3MTVcIiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBkZWwuY2xhc3NOYW1lID0gXCJwYWwtZGVsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsLmFkZENsYXNzKFwibXotcmVzZXQtYnRuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjciA9IHsgLi4uKHRoaXMuc3R5bGUuY3VzdG9tUmFpbmJvd3MgfHwge30pIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjcltrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoeyBjdXN0b21SYWluYm93czogY3IgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJQYWwgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyUGFsID0gXCJvZmZcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7IGNvbm5lY3Rpb25SYWluYm93OiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWJ1aWxkTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBta0l0ZW0oXCJvZmZcIiwgXCJTb2xpZFwiLCBudWxsKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgY29sb3JzXSBvZiBPYmplY3QuZW50cmllcyh1cGRhdGVkKSlcclxuICAgICAgICAgICAgICAgIG1rSXRlbShuYW1lLCBuYW1lLCBjb2xvcnMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVidWlsZExpc3QoKTtcclxuICAgICAgICAvLyBBZGQgY3VzdG9tIHBhbGV0dGVcclxuICAgICAgICBjb25zdCBhZGRSb3cgPSBjdFJvdy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBhZGRSb3cuYWRkQ2xhc3MoXCJtei1yYWluYm93LWN0XCIpO1xyXG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGFkZFJvdy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IHQoXCJzbS5jdXN0b21SYWluYm93XCIpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFkZEJ0bi5hZGRDbGFzcyhcIm16LW1vZGFsLWJ0blwiLCBcIm16LW1vZGFsLWJ0bi1zZWNvbmRhcnlcIik7XHJcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZEJ0bi50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgZWQgPSBhZGRSb3cuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGVkLmFkZENsYXNzKFwibXotcmFpbmJvdy1jdFwiKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZUlucCA9IGVkLmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgbmFtZUlucC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgIG5hbWVJbnAucGxhY2Vob2xkZXIgPSBcIlBhbGV0dGUgbmFtZVwiO1xyXG4gICAgICAgICAgICBuYW1lSW5wLnZhbHVlID0gXCJDdXN0b21cIjtcclxuICAgICAgICAgICAgbmFtZUlucC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3ItbmFtZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JzID0gW1xyXG4gICAgICAgICAgICAgICAgXCIjZmYwMDAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIiMwMGZmMDBcIixcclxuICAgICAgICAgICAgICAgIFwiIzAwMDBmZlwiLFxyXG4gICAgICAgICAgICAgICAgXCIjZmZmZjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIiNmZjAwZmZcIixcclxuICAgICAgICAgICAgICAgIFwiIzAwZmZmZlwiLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBjb25zdCBjRGl2ID0gZWQuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNEaXYuYWRkQ2xhc3MoXCJtei1yYWluYm93LWNyLXJvd1wiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVidWlsZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNEaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2kgPSBjRGl2LmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBjaS50eXBlID0gXCJjb2xvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpLnZhbHVlID0gY29sb3JzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpLmFkZENsYXNzKFwibXotcmFpbmJvdy1jci1pbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzW2ldID0gY2kudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhYiA9IGNEaXYuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIitcIiB9KTtcclxuICAgICAgICAgICAgICAgIGFiLmFkZENsYXNzKFwibXotcmFpbmJvdy1jci1pbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzLnB1c2goXCIjODg4ODg4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWJ1aWxkKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNhdmVCdG4gPSBlZC5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiXHUyNzEzIFNhdmVcIiB9KTtcclxuICAgICAgICAgICAgc2F2ZUJ0bi5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3ItYnRuXCIsIFwibXotcmFpbmJvdy1jci1zYXZlXCIpO1xyXG4gICAgICAgICAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm0gPSBuYW1lSW5wLnZhbHVlLnRyaW0oKSB8fCBcIkN1c3RvbVwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nW25tXSB8fCBSQUlOQk9XX1BBTEVUVEVTW25tXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nW25tICsgXCIgXCIgKyBpXSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSQUlOQk9XX1BBTEVUVEVTW25tICsgXCIgXCIgKyBpXVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIG5tID0gbm0gKyBcIiBcIiArIGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDUiA9IHsgLi4uZXhpc3RpbmcsIFtubV06IFsuLi5jb2xvcnNdIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbVJhaW5ib3dzOiBuZXdDUixcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uUmFpbmJvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICByYWluYm93UGFsZXR0ZTogbm0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGN1clBhbCA9IG5tO1xyXG4gICAgICAgICAgICAgICAgZWQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBhZGRCdG4udG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmVidWlsZExpc3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgczNiID0gc2VjKFwiXHVEODNEXHVEQ0REXCIsIHQoXCJzbS50ZXh0QWxpZ25cIikpO1xyXG4gICAgICAgIFIoczNiLCB0KFwic20udGV4dEFsaWduXCIpLCBcInRleHRBbGlnblwiLCBcInNlbGVjdFwiLCB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzNCA9IHNlYyhcIlx1MjcwNVwiLCB0KFwic20uc2VsXCIpKTtcclxuICAgICAgICBSKHM0LCB0KFwic20uc2VsQ29sb3JcIiksIFwic2VsZWN0aW9uQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHM0LCB0KFwic20uc2VsV2lkdGhcIiksIFwic2VsZWN0aW9uV2lkdGhcIiwgXCJudW1iZXJcIiwgeyBtaW46IDEsIG1heDogOCB9KTtcclxuICAgICAgICBSKHM0LCB0KFwic20uc2VsT2Zmc2V0XCIpLCBcInNlbGVjdGlvbk91dGxpbmVPZmZzZXRcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IC01LFxyXG4gICAgICAgICAgICBtYXg6IDIwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczQsIHQoXCJzbS5lZGl0T3V0bGluZVwiKSwgXCJlZGl0T3V0bGluZUNvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzNCwgdChcInNtLmVkaXRPdXRsaW5lV2lkdGhcIiksIFwiZWRpdE91dGxpbmVXaWR0aFwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiA4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHM1ID0gc2VjKFwiXHVEODNEXHVEREJDXHVGRTBGXCIsIHQoXCJzbS5jYW52YXNCZ1wiKSk7XHJcbiAgICAgICAgUihzNSwgdChcInNtLmNhbnZhc0JnXCIpLCBcImNhbnZhc0JnXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgY29uc3QgczYgPSBzZWMoXCJcdUQ4M0RcdUREMjdcIiwgdChcInNtLnNob3dUb29sYmFyXCIpKTtcclxuICAgICAgICBjb25zdCB0YlJvdyA9IHM2LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIHRiUm93LmFkZENsYXNzKFwibXotbW9kYWwtcm93XCIpO1xyXG4gICAgICAgIHRiUm93XHJcbiAgICAgICAgICAgIC5jcmVhdGVFbChcImxhYmVsXCIsIHsgdGV4dDogdChcInNtLnNob3dUb29sYmFyXCIpIH0pXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcIm16LW1vZGFsLWxibFwiKTtcclxuICAgICAgICBjb25zdCB0YkNiID0gdGJSb3cuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIHRiQ2IudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICB0YkNiLmNoZWNrZWQgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhcjtcclxuICAgICAgICB0YkNiLmFkZENsYXNzKFwibXotbW9kYWwtY2hrXCIpO1xyXG4gICAgICAgIHRiQ2IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dUb29sYmFyID0gdGJDYi5jaGVja2VkO1xyXG4gICAgICAgICAgICB2b2lkIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2xiYXJWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiUG9zXCIpLCBcInRvb2xiYXJQb3NpdGlvblwiLCBcInNlbGVjdFwiLCB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInRvcFwiLCBcImJvdHRvbVwiXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJQYWRUXCIpLCBcInRvb2xiYXJQYWRUb3BcIiwgXCJudW1iZXJcIiwgeyBtaW46IDAsIG1heDogNDAgfSk7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiUGFkUlwiKSwgXCJ0b29sYmFyUGFkUmlnaHRcIiwgXCJudW1iZXJcIiwgeyBtaW46IDAsIG1heDogNDAgfSk7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiUGFkQlwiKSwgXCJ0b29sYmFyUGFkQm90dG9tXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDQwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YlBhZExcIiksIFwidG9vbGJhclBhZExlZnRcIiwgXCJudW1iZXJcIiwgeyBtaW46IDAsIG1heDogNDAgfSk7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiQmdcIiksIFwidG9vbGJhckJnQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJCdG5CZ1wiKSwgXCJ0b29sYmFyQnRuQmdDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YkJ0bkJvcmRlclwiKSwgXCJ0b29sYmFyQnRuQm9yZGVyU3R5bGVcIiwgXCJzZWxlY3RcIiwge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbXCJzb2xpZFwiLCBcImRhc2hlZFwiLCBcImRvdHRlZFwiLCBcIm5vbmVcIl0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiQnRuQm9yZGVyQ29sb3JcIiksIFwidG9vbGJhckJ0bkJvcmRlckNvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiQnRuVGV4dFwiKSwgXCJ0b29sYmFyQnRuVGV4dENvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzNiwgXCJTZXBhcmF0b3IgY29sb3JcIiwgXCJ0b29sYmFyQm9yZGVyQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHM2LCBcIlNlcGFyYXRvciB3aWR0aFwiLCBcInRvb2xiYXJCb3JkZXJXaWR0aFwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiA1LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFJlc2V0IHRvb2xiYXIgYnV0dG9uXHJcbiAgICAgICAgY29uc3QgdGJSZXNldEJ0biA9IHM2LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcclxuICAgICAgICAgICAgdGV4dDogXCJcdTIxQkEgXCIgKyB0KFwic20udGJSZXNldERlZmF1bHRcIiksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGJSZXNldEJ0bi5hZGRDbGFzcyhcIm16LW5zLWJ0blwiKTtcclxuICAgICAgICB0YlJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRGFyayA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRoZW1lID09PSBcImRhcmtcIjtcclxuICAgICAgICAgICAgY29uc3QgZGVmID0gaXNEYXJrID8gREVGQVVMVF9UT09MQkFSX0RBUksgOiBERUZBVUxUX1RPT0xCQVJfTElHSFQ7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQmdDb2xvcjogZGVmLnRvb2xiYXJCZ0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhckJ0bkJnQ29sb3I6IGRlZi50b29sYmFyQnRuQmdDb2xvcixcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogZGVmLnRvb2xiYXJCdG5Cb3JkZXJTdHlsZSxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogZGVmLnRvb2xiYXJCdG5Cb3JkZXJDb2xvcixcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJCdG5UZXh0Q29sb3I6IGRlZi50b29sYmFyQnRuVGV4dENvbG9yLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhckJvcmRlckNvbG9yOiBkZWYudG9vbGJhckJvcmRlckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhckJvcmRlcldpZHRoOiBkZWYudG9vbGJhckJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhclBhZFRvcDogMCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJQYWRSaWdodDogMTIsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyUGFkQm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhclBhZExlZnQ6IDEyLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhclBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U3R5bGVNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGJyID0gbS5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBici5hZGRDbGFzcyhcIm16LW1vZGFsLWJ0bnNcIik7XHJcbiAgICAgICAgYnIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiB0KFwic20ucmVzZXRcIikgfSkuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoeyAuLi5ERUZBVUxUX1NUWUxFIH0pO1xyXG4gICAgICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N0eWxlTW9kYWwoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGNiID0gYnIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiB0KFwic20uY2xvc2VcIikgfSk7XHJcbiAgICAgICAgY2IuYWRkQ2xhc3MoXCJtei1tb2RhbC1idG5cIiwgXCJtei1tb2RhbC1idG4tcHJpbWFyeVwiKTtcclxuICAgICAgICBjYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3YpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93Tm9kZVN0eWxlRWRpdG9yKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNsb3NlUG9wKCk7XHJcbiAgICAgICAgY29uc3QgaWRzID0gdGhpcy5hbGxTZWwoKTtcclxuICAgICAgICBjb25zdCBmaXJzdCA9IHRoaXMuZkFsbChbLi4uaWRzXVswXSk7XHJcbiAgICAgICAgY29uc3Qgc28gPSBmaXJzdD8uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICBjb25zdCBpc1IgPSAhIWZpcnN0Py5pc1Jvb3Q7XHJcbiAgICAgICAgY29uc3Qgb3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG92LmFkZENsYXNzKFwibXotbW9kYWwtb3ZlcmxheVwiKTtcclxuICAgICAgICBjb25zdCBtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBtLmFkZENsYXNzKFwibXotbW9kYWxcIik7XHJcbiAgICAgICAgbS5jcmVhdGVFbChcImg0XCIsIHtcclxuICAgICAgICAgICAgdGV4dDogdChcIm5zLnRpdGxlXCIpICsgXCIgKFwiICsgaWRzLnNpemUgKyBcIilcIixcclxuICAgICAgICB9KS5hZGRDbGFzcyhcIm16LW5zLXRpdGxlXCIpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBvdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgbS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3BDbG9zZSA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBvcENsb3NlID0gY2xvc2U7XHJcbiAgICAgICAgb3YuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcclxuICAgICAgICBtLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwia2V5ZG93blwiLFxyXG4gICAgICAgICAgICAoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXYua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgYXBwbHkgPSAoZm46IChuOiBNaW5kTm9kZURhdGEpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMuZkFsbChpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobikgZm4obik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1rQyA9IChsOiBzdHJpbmcsIGN1cjogc3RyaW5nLCBmbjogKHY6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByID0gbS5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgci5hZGRDbGFzcyhcIm16LW1vZGFsLXJvd1wiKTtcclxuICAgICAgICAgICAgci5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBsIH0pLmFkZENsYXNzKFwibXotbW9kYWwtbGJsXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBpID0gci5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGkudHlwZSA9IFwiY29sb3JcIjtcclxuICAgICAgICAgICAgaS52YWx1ZSA9IGN1cjtcclxuICAgICAgICAgICAgaS5hZGRDbGFzcyhcIm16LXNwLWNvbG9yXCIpO1xyXG4gICAgICAgICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gZm4oaS52YWx1ZSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtOID0gKFxyXG4gICAgICAgICAgICBsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGN1cjogbnVtYmVyLFxyXG4gICAgICAgICAgICBtaW46IG51bWJlcixcclxuICAgICAgICAgICAgbWF4OiBudW1iZXIsXHJcbiAgICAgICAgICAgIGZuOiAodjogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByID0gbS5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgci5hZGRDbGFzcyhcIm16LW1vZGFsLXJvd1wiKTtcclxuICAgICAgICAgICAgci5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBsIH0pLmFkZENsYXNzKFwibXotbW9kYWwtbGJsXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBpID0gci5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGkudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgICAgICAgIGkubWluID0gU3RyaW5nKG1pbik7XHJcbiAgICAgICAgICAgIGkubWF4ID0gU3RyaW5nKG1heCk7XHJcbiAgICAgICAgICAgIGkudmFsdWUgPSBTdHJpbmcoY3VyKTtcclxuICAgICAgICAgICAgaS5hZGRDbGFzcyhcIm16LXNwLW51bVwiKTtcclxuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IGZuKE51bWJlcihpLnZhbHVlKSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtTID0gKFxyXG4gICAgICAgICAgICBsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGN1cjogc3RyaW5nLFxyXG4gICAgICAgICAgICBvcHRzOiBzdHJpbmdbXSxcclxuICAgICAgICAgICAgZm46ICh2OiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBtLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByLmFkZENsYXNzKFwibXotbW9kYWwtcm93XCIpO1xyXG4gICAgICAgICAgICByLmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IGwgfSkuYWRkQ2xhc3MoXCJtei1tb2RhbC1sYmxcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHMgPSByLmNyZWF0ZUVsKFwic2VsZWN0XCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgICAgICBzLmFkZENsYXNzKFwibXotc3Atc2VsXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygb3B0cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgb3AudmFsdWUgPSBvO1xyXG4gICAgICAgICAgICAgICAgb3AudGV4dCA9IG87XHJcbiAgICAgICAgICAgICAgICBpZiAobyA9PT0gY3VyKSBvcC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzLmFwcGVuZENoaWxkKG9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gZm4ocy52YWx1ZSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWtDKFxyXG4gICAgICAgICAgICB0KFwic20uYmdcIiksXHJcbiAgICAgICAgICAgIHNvLmJnQ29sb3IgPz9cclxuICAgICAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCZ0NvbG9yIDogdGhpcy5zdHlsZS5ub2RlQmdDb2xvciksXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLmJnQ29sb3IgPSB2O1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta0MoXHJcbiAgICAgICAgICAgIHQoXCJzbS50ZXh0XCIpLFxyXG4gICAgICAgICAgICBzby50ZXh0Q29sb3IgPz9cclxuICAgICAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RUZXh0Q29sb3IgOiB0aGlzLnN0eWxlLm5vZGVUZXh0Q29sb3IpLFxyXG4gICAgICAgICAgICAodikgPT5cclxuICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlID0gbi5zdHlsZU92ZXJyaWRlID8/IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZS50ZXh0Q29sb3IgPSB2O1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta04oXHJcbiAgICAgICAgICAgIHQoXCJzbS5mb250U2l6ZVwiKSxcclxuICAgICAgICAgICAgc28uZm9udFNpemUgPz9cclxuICAgICAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RGb250U2l6ZSA6IHRoaXMuc3R5bGUubm9kZUZvbnRTaXplKSxcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIDMyLFxyXG4gICAgICAgICAgICAodikgPT5cclxuICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlID0gbi5zdHlsZU92ZXJyaWRlID8/IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZS5mb250U2l6ZSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgbi53aWR0aCA9IHRoaXMuY2FsY1cobi50ZXh0LCAhIW4uaXNSb290KTtcclxuICAgICAgICAgICAgICAgICAgICBuLmhlaWdodCA9IHRoaXMuY2FsY0gobi50ZXh0LCAhIW4uaXNSb290KTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtTKFxyXG4gICAgICAgICAgICB0KFwic20uZm9udFwiKSxcclxuICAgICAgICAgICAgc28uZm9udEZhbWlseSA/P1xyXG4gICAgICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEZvbnRGYW1pbHkgOiB0aGlzLnN0eWxlLm5vZGVGb250RmFtaWx5KSxcclxuICAgICAgICAgICAgRk9OVF9MSVNULFxyXG4gICAgICAgICAgICAodikgPT5cclxuICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlID0gbi5zdHlsZU92ZXJyaWRlID8/IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZS5mb250RmFtaWx5ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdiA9PT0gXCJpbmhlcml0XCIgPyB1bmRlZmluZWQgOiB2O1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta1MoXHJcbiAgICAgICAgICAgIHQoXCJzbS5ib3JkZXJTdHlsZVwiKSxcclxuICAgICAgICAgICAgc28uYm9yZGVyU3R5bGUgPz9cclxuICAgICAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCb3JkZXJTdHlsZSA6IHRoaXMuc3R5bGUubm9kZUJvcmRlclN0eWxlKSxcclxuICAgICAgICAgICAgW1wic29saWRcIiwgXCJkYXNoZWRcIiwgXCJkb3R0ZWRcIiwgXCJkb3VibGVcIiwgXCJub25lXCJdLFxyXG4gICAgICAgICAgICAodikgPT5cclxuICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlID0gbi5zdHlsZU92ZXJyaWRlID8/IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZS5ib3JkZXJTdHlsZSA9IHYgYXMgQm9yZGVyU3R5bGU7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rQyhcclxuICAgICAgICAgICAgdChcInNtLmJvcmRlckNvbG9yXCIpLFxyXG4gICAgICAgICAgICBzby5ib3JkZXJDb2xvciA/P1xyXG4gICAgICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEJvcmRlckNvbG9yIDogdGhpcy5zdHlsZS5ub2RlQm9yZGVyQ29sb3IpLFxyXG4gICAgICAgICAgICAodikgPT5cclxuICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlID0gbi5zdHlsZU92ZXJyaWRlID8/IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZS5ib3JkZXJDb2xvciA9IHY7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rTihcclxuICAgICAgICAgICAgdChcInNtLmJvcmRlcldpZHRoXCIpLFxyXG4gICAgICAgICAgICBzby5ib3JkZXJXaWR0aCA/P1xyXG4gICAgICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEJvcmRlcldpZHRoIDogdGhpcy5zdHlsZS5ub2RlQm9yZGVyV2lkdGgpLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAodikgPT5cclxuICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlID0gbi5zdHlsZU92ZXJyaWRlID8/IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZS5ib3JkZXJXaWR0aCA9IHY7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rTihcclxuICAgICAgICAgICAgdChcIm5zLmJvcmRlclJhZGl1c1wiKSxcclxuICAgICAgICAgICAgc28uYm9yZGVyUmFkaXVzID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0eWxlLnJvb3RCb3JkZXJSYWRpdXNcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuc3R5bGUubm9kZUJvcmRlclJhZGl1cyksXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDMyLFxyXG4gICAgICAgICAgICAodikgPT5cclxuICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlID0gbi5zdHlsZU92ZXJyaWRlID8/IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZS5ib3JkZXJSYWRpdXMgPSB2O1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta0MoXHJcbiAgICAgICAgICAgIHQoXCJucy5jb25uQ29sb3JcIiksXHJcbiAgICAgICAgICAgIGZpcnN0Py5jb25uZWN0aW9uQ29sb3IgPz8gdGhpcy5zdHlsZS5jb25uZWN0aW9uQ29sb3IsXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLmNvbm5lY3Rpb25Db2xvciA9IHY7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rTihcclxuICAgICAgICAgICAgdChcIm5zLmNvbm5XaWR0aFwiKSxcclxuICAgICAgICAgICAgZmlyc3Q/LmNvbm5lY3Rpb25XaWR0aCA/PyB0aGlzLnN0eWxlLmNvbm5lY3Rpb25XaWR0aCxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uY29ubmVjdGlvbldpZHRoID0gdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gQ29ubmVjdGlvbiB0eXBlIHdpdGggY29sb3Igc3dhdGNoZXMgZm9yIHJvb3Qgbm9kZXNcclxuICAgICAgICBpZiAoaXNSKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN0RGl2ID0gbS5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgY3REaXYuYWRkQ2xhc3MoXCJtei1yYWluYm93LWN0XCIpO1xyXG4gICAgICAgICAgICBjdERpdlxyXG4gICAgICAgICAgICAgICAgLmNyZWF0ZUVsKFwic3BhblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdChcInNtLnJhaW5ib3dcIiksXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwibXotcmFpbmJvdy1sYmxcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5QYWxzOiB7IFtrOiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uUkFJTkJPV19QQUxFVFRFUyxcclxuICAgICAgICAgICAgICAgIC4uLih0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzIHx8IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gRGV0ZWN0IGN1cnJlbnQgcGFsZXR0ZSBieSBtYXRjaGluZyBmaXJzdCBjaGlsZCdzIGNvbG9yXHJcbiAgICAgICAgICAgIGxldCBhY3RpdmVQYWwgPSBcIm9mZlwiO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3QgJiYgZmlyc3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmMgPSBmaXJzdC5jaGlsZHJlblswXS5jb25uZWN0aW9uQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb2xvcnNdIG9mIE9iamVjdC5lbnRyaWVzKG5QYWxzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3JzWzBdID09PSBmYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFsID0gbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5MaXN0ID0gY3REaXYuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG5MaXN0LmFkZENsYXNzKFwibXotcmFpbmJvdy1saXN0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZWJ1aWxkTkwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWtOSSA9IChcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogc3RyaW5nW10gfCBudWxsLFxyXG4gICAgICAgICAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXQgPSBuTGlzdC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdC50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiLCBrZXkgPT09IGFjdGl2ZVBhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBhY3RpdmVQYWwpIGl0LmFkZENsYXNzKFwibXotcmFpbmJvdy1ob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0LnRvZ2dsZUNsYXNzKFwibXotcmFpbmJvdy1ob3ZlclwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXQuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbGFiZWwgfSkuYWRkQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXotcmFpbmJvdy1pdGVtLWxibFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb3RzID0gaXQuY3JlYXRlRWwoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzLmFkZENsYXNzKFwibXotcmFpbmJvdy1kb3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgY29sb3JzLnNsaWNlKDAsIDgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkID0gZG90cy5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmFkZENsYXNzKFwibXotcmFpbmJvdy1kb3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1kb3QtY29sb3JcIjogYyB9KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChbaywgdl0pID0+IGQuc3R5bGUuc2V0UHJvcGVydHkoaywgdiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29sb3JzKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW4uaXNSb290KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG4uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmNoaWxkcmVuW2ldLmNvbm5lY3Rpb25Db2xvciA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yc1tpICUgY29sb3JzLmxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWwgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYnVpbGROTCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG1rTkkoXCJvZmZcIiwgXCJTb2xpZFwiLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW25hbWUsIGNvbG9yc10gb2YgT2JqZWN0LmVudHJpZXMoblBhbHMpKVxyXG4gICAgICAgICAgICAgICAgICAgIG1rTkkobmFtZSwgbmFtZSwgY29sb3JzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVidWlsZE5MKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNsciA9IG0uY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiB0KFwibnMuY2xlYXJcIikgfSk7XHJcbiAgICAgICAgY2xyLmFkZENsYXNzKFwibXotbnMtYnRuXCIpO1xyXG4gICAgICAgIGNsci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIG4uY29ubmVjdGlvbkNvbG9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgbi5jb25uZWN0aW9uV2lkdGggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgY2J0biA9IG0uY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiB0KFwic20uY2xvc2VcIikgfSk7XHJcbiAgICAgICAgY2J0bi5hZGRDbGFzcyhcIm16LW1vZGFsLWJ0blwiLCBcIm16LW1vZGFsLWJ0bi1wcmltYXJ5XCIpO1xyXG4gICAgICAgIGNidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9nZ2xlU2VhcmNoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEJhci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmNjPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5zdXJlUHJveHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCYXIuYWRkQ2xhc3MoXCJtei1zZWFyY2gtYmFyXCIpO1xyXG4gICAgICAgIGNvbnN0IGlucCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnAudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIGlucC5wbGFjZWhvbGRlciA9IHQoXCJzZWFyY2gucGxhY2Vob2xkZXJcIik7XHJcbiAgICAgICAgaW5wLmFkZENsYXNzKFwibXotc2VhcmNoLWlucHV0XCIpO1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBpbmZvLmFkZENsYXNzKFwibXotc2VhcmNoLWNvdW50XCIpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSBcIlx1MjcxNVwiO1xyXG4gICAgICAgIGNsb3NlQnRuLmFkZENsYXNzKFwibXotc2VhcmNoLWJ0blwiKTtcclxuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEJhcj8ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jYz8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuc3VyZVByb3h5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCYXIuYXBwZW5kQ2hpbGQoaW5wKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEJhci5hcHBlbmRDaGlsZChpbmZvKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEJhci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcbiAgICAgICAgdGhpcy5zdmdDdC5hcHBlbmRDaGlsZCh0aGlzLnNlYXJjaEJhcik7XHJcbiAgICAgICAgY29uc3QgZG9TZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBpbnAudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaElkeCA9IDA7XHJcbiAgICAgICAgICAgIGlmICghcSkge1xyXG4gICAgICAgICAgICAgICAgaW5mby50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdmlzID0gKG46IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4udGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cy5wdXNoKG4pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHZpcyhjKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHZpcyhyKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoUmVzdWx0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGluZm8udGV4dENvbnRlbnQgPSBcIjEvXCIgKyB0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWwxKHRoaXMuc2VhcmNoUmVzdWx0c1swXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTm9kZSh0aGlzLnNlYXJjaFJlc3VsdHNbMF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGluZm8udGV4dENvbnRlbnQgPSBcIjBcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlucC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZG9TZWFyY2gpO1xyXG4gICAgICAgIGlucC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSWR4ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnNlYXJjaElkeCAtIDEgKyB0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoKSAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJZHggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc2VhcmNoSWR4ICsgMSkgJSB0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm8udGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaElkeCArIDEgKyBcIi9cIiArIHRoaXMuc2VhcmNoUmVzdWx0cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmQgPSB0aGlzLnNlYXJjaFJlc3VsdHNbdGhpcy5zZWFyY2hJZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c05vZGUobmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGlucC5mb2N1cygpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEJhcj8ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2M/LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZVByb3h5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGlucC5mb2N1cygpLCAwKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0Q0MoXHJcbiAgICAgICAgY2g6IE1pbmROb2RlRGF0YSxcclxuICAgICAgICBwUjogYm9vbGVhbixcclxuICAgICAgICBpZHg6IG51bWJlcixcclxuICAgICAgICBpbmg/OiBzdHJpbmcsXHJcbiAgICApOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChjaC5jb25uZWN0aW9uQ29sb3IpIHJldHVybiBjaC5jb25uZWN0aW9uQ29sb3I7XHJcbiAgICAgICAgaWYgKGluaCkgcmV0dXJuIGluaDtcclxuICAgICAgICBjb25zdCByYiA9IHRoaXMuZ2V0UmFpbmJvdygpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0eWxlLmNvbm5lY3Rpb25SYWluYm93ICYmIHBSKSByZXR1cm4gcmJbaWR4ICUgcmIubGVuZ3RoXTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZS5jb25uZWN0aW9uQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0FjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWluZE1hcFZpZXcpID09PSB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc0V4dElucHV0KGU6IEtleWJvYXJkRXZlbnQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKCF0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdGFnID0gdC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHRhZyA9PT0gXCJpbnB1dFwiIHx8IHRhZyA9PT0gXCJ0ZXh0YXJlYVwiIHx8IHRhZyA9PT0gXCJzZWxlY3RcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuc3ZnQ3Q/LmNvbnRhaW5zKHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9rZCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0KCkgfHwgdGhpcy5tZE1vZGUgfHwgdGhpcy5pc0V4dElucHV0KGUpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoQmFyICYmIHRoaXMuc2VhcmNoQmFyLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gRklYICM3OiB3aGVuIG1vZGFsIGlzIG9wZW4sIEVzYyBjbG9zZXMgaXQ7IGJsb2NrIGFsbCBvdGhlciBrZXlzXHJcbiAgICAgICAgaWYgKHRoaXMucG9wQ2xvc2UpIHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3BDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3BDbG9zZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBGSVggIzY6IGRpc2FibGUgYWxsIGtleXMgZHVyaW5nIGRyYWdcclxuICAgICAgICBpZiAodGhpcy5kcz8uaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikgdGhpcy5jYW5jZWxEcmFnKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRWRpdCBtb2RlXHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdElkKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJlxyXG4gICAgICAgICAgICAgICAgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJhXCIgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcImZcIikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VhcmNoKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgJiZcclxuICAgICAgICAgICAgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJjXCIgJiZcclxuICAgICAgICAgICAgIWUuc2hpZnRLZXkgJiZcclxuICAgICAgICAgICAgdGhpcy5zZWxJZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29weU5vZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmXHJcbiAgICAgICAgICAgIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwieFwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvcHlOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmXHJcbiAgICAgICAgICAgIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwidlwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5wYXN0ZU5vZGUoZS5zaGlmdEtleSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi51bmRvKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5kbygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IucmVkbykpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZG8oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBab29tIGtleWJpbmRpbmdzXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi56b29tSW4pKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy56b29tQnkoMS4xKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLnpvb21PdXQpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy56b29tQnkoMC45KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLnpvb21SZXNldCkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnpvb21UbygxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLmFkZENoaWxkKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIHNoaWZ0K3RhYiA9IGxlZnQgY2hpbGQgKG9uIHJvb3Qgb3IgYW55IG5vZGUpXHJcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5ICYmIHRoaXMuc2VsSWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTGVmdENoaWxkKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHRoaXMuYWRkQ2hpbGROb2RlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5hZGRTaWJsaW5nKSAmJiAhZS5jdHJsS2V5ICYmICFlLm1ldGFLZXkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAvLyBzaGlmdCtlbnRlciA9IGxlZnQgY2hpbGQgb24gcm9vdFxyXG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiB0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsPy5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZExlZnRDaGlsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkgJiYgdGhpcy5zZWxJZCkgdGhpcy5hZGRTaWJsaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3BhY2U6IHNpbmdsZSBub2RlIHNlbGVjdGVkID0gZWRpdCwgbm8vbXVsdGkgPSBwYW5cclxuICAgICAgICAvLyBlZGl0Tm9kZTogc2luZ2xlIG5vZGUgPSBlZGl0XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IuZWRpdE5vZGUpICYmXHJcbiAgICAgICAgICAgICFlLnJlcGVhdCAmJlxyXG4gICAgICAgICAgICB0aGlzLnNlbElkICYmXHJcbiAgICAgICAgICAgICF0aGlzLmlzTXVsdGkoKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdElkID0gdGhpcy5zZWxJZDtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkcmFnQ2FudmFzOiBwYW4gbW9kZVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IuZHJhZ0NhbnZhcykgJiYgIWUucmVwZWF0KSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zcGFjZURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYykgdGhpcy5jYy50b2dnbGVDbGFzcyhcIm16LWN1cnNvci1ncmFiXCIsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEN0cmwrRW50ZXIgZW50ZXJzIGVkaXQgbW9kZVxyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRJZCA9IHRoaXMuc2VsSWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5mb2N1c05vZGUpICYmICFlLmN0cmxLZXkgJiYgIWUubWV0YUtleSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNTZWwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hCYXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbHJTZWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJCYWNrc3BhY2VcIiB8fCBlLmtleSA9PT0gXCJEZWxldGVcIikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTXVsdGkoKSkgdGhpcy5iYXRjaERlbCgpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbElkKSB0aGlzLmRlbE5vZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLm5hdlVwKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxJZCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyb3coXCJBcnJvd1VwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5uYXZEb3duKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxJZCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyb3coXCJBcnJvd0Rvd25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLm5hdkxlZnQpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJvdyhcIkFycm93TGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IubmF2UmlnaHQpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJvdyhcIkFycm93UmlnaHRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBGSVggIzE6IGtlZXAgZ3JhYiBjdXJzb3IgZHVyaW5nIGRyYWcsIGRvbid0IHJlc2V0IHRvIHBvaW50ZXJcclxuICAgIHByaXZhdGUgX2t1ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGUuY29kZSA9PT0gXCJTcGFjZVwiIHx8XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5lZGl0Tm9kZSkgfHxcclxuICAgICAgICAgICAgdGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLmRyYWdDYW52YXMpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BhY2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0N2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNjKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNjLnRvZ2dsZUNsYXNzKFwibXotY3Vyc29yLWdyYWJiaW5nXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2MudG9nZ2xlQ2xhc3MoXCJtei1jdXJzb3ItZ3JhYlwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gSU1FLWNvbXBhdGlibGUgdHlwZVRvRWRpdCB2aWEgcHJveHkgdGV4dGFyZWEgcG9zaXRpb25lZCBiZWxvdyBzZWxlY3RlZCBub2RlXHJcbiAgICBwcml2YXRlIGVuc3VyZVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJQcm94eSgpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXRoaXMucGx1Z2luLnNldHRpbmdzLnR5cGVUb0VkaXQgfHxcclxuICAgICAgICAgICAgIXRoaXMuc2VsSWQgfHxcclxuICAgICAgICAgICAgdGhpcy5pc011bHRpKCkgfHxcclxuICAgICAgICAgICAgdGhpcy5lZGl0SWQgfHxcclxuICAgICAgICAgICAgIXRoaXMuc3ZnQ3QgfHxcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXJcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hCYXIgJiYgdGhpcy5zZWFyY2hCYXIuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCBuZCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIW5kKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgICAgICAvLyBQb3NpdGlvbiBiZWxvdyB0aGUgc2VsZWN0ZWQgbm9kZSBpbiBzY3JlZW4gY29vcmRpbmF0ZXNcclxuICAgICAgICBjb25zdCBzY3JlZW5YID0gbmQueCAqIHRoaXMuem9vbSArIHRoaXMucGFuWDtcclxuICAgICAgICBjb25zdCBzY3JlZW5ZID0gKG5kLnkgKyBuZC5oZWlnaHQgLyAyKSAqIHRoaXMuem9vbSArIHRoaXMucGFuWSArIDQ7XHJcbiAgICAgICAgcC5hZGRDbGFzcyhcIm16LXByb3h5LXRhXCIpO1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHtcclxuICAgICAgICAgICAgXCItLW16LXByb3h5LWxlZnRcIjogc2NyZWVuWCArIFwicHhcIixcclxuICAgICAgICAgICAgXCItLW16LXByb3h5LXRvcFwiOiBzY3JlZW5ZICsgXCJweFwiLFxyXG4gICAgICAgIH0pLmZvckVhY2goKFtrLCB2XSkgPT4gcC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSk7XHJcbiAgICAgICAgdGhpcy5zdmdDdC5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgICB0aGlzLnByb3h5VEEgPSBwO1xyXG4gICAgICAgIGxldCBjb21wb3NpbmcgPSBmYWxzZTtcclxuICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbnN0YXJ0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29tcG9zaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgcC5hZGRDbGFzcyhcIm16LXByb3h5LWNvbXBvc2luZ1wiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbXBvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBwLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodmFsICYmIHRoaXMuc2VsSWQgJiYgIXRoaXMuZWRpdElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRJZCA9IHRoaXMuc2VsSWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGl2ZVRBKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNldFJhbmdlVGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdGlvblN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuc2VsZWN0aW9uRW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb3NpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gcC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHZhbCAmJiB0aGlzLnNlbElkICYmICF0aGlzLmVkaXRJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0SWQgPSB0aGlzLnNlbElkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpdmVUQSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5zZXRSYW5nZVRleHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5zZWxlY3Rpb25TdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdGlvbkVuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KSwgMCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNsZWFyUHJveHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJveHlUQSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3h5VEEucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJveHlUQSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjb3B5Tm9kZShjdXQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsSWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBuZCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIW5kKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jbGlwYm9hcmQgPSB7IGRhdGE6IEpTT04uc3RyaW5naWZ5KG5kKSwgaXNSb290OiAhIW5kLmlzUm9vdCwgY3V0IH07XHJcbiAgICAgICAgaWYgKGN1dCkge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgICAgIGlmIChuZC5pc1Jvb3QpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3RzID0gdGhpcy5yb290cy5maWx0ZXIoKHIpID0+IHIuaWQgIT09IG5kLmlkKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnJlbUFsbChuZC5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xyU2VsKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBwYXN0ZU5vZGUoc3RyaXA6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2xpcGJvYXJkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgY2xvbmU6IE1pbmROb2RlRGF0YSA9IEpTT04ucGFyc2UodGhpcy5jbGlwYm9hcmQuZGF0YSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsaXBib2FyZC5jdXQpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVJZCA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIG4uaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHJlSWQoYyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlSWQoY2xvbmUpO1xyXG4gICAgICAgIH0gZWxzZSB0aGlzLmNsaXBib2FyZCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0cmlwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHMgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBuLmNvbm5lY3Rpb25Db2xvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIG4uY29ubmVjdGlvbldpZHRoID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHMoYyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHMoY2xvbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgaWYgKGNsb25lLmlzUm9vdCkge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gdGhpcy5yb290c1t0aGlzLnJvb3RzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBjbG9uZS54ID0gbGFzdD8ueCA/PyAwO1xyXG4gICAgICAgICAgICBjbG9uZS55ID0gKGxhc3Q/LnkgPz8gMCkgKyAyMDA7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdHMucHVzaChjbG9uZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xvbmUuaXNSb290ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gdGhpcy5mQWxsKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHApIHAuY2hpbGRyZW4ucHVzaChjbG9uZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLnJvb3RzLnB1c2goeyAuLi5jbG9uZSwgaXNSb290OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbDEoY2xvbmUuaWQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2FuY2VsRHJhZygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZHMpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuZHMuaXNSb290RHJhZykge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdGhpcy5kcyBhcyBDaGlsZERyYWc7XHJcbiAgICAgICAgICAgIGlmIChkLnNuYXApIHRoaXMucm9vdHMgPSBKU09OLnBhcnNlKGQuc25hcCk7XHJcbiAgICAgICAgICAgIGQuZ2hvc3RFbD8ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGQuaW5kaWNhdG9yRWw/LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRzID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5jYykgdGhpcy5jYy50b2dnbGVDbGFzcyhcIm16LWN1cnNvci1ncmFiXCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfbXUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmJveFNlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEJveChlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kcmFnQ3YpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmFnQ3YgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2MudG9nZ2xlQ2xhc3MoXCJtei1jdXJzb3ItZ3JhYmJpbmdcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYy50b2dnbGVDbGFzcyhcIm16LWN1cnNvci1ncmFiXCIsIHRoaXMuc3BhY2VEb3duKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZHMpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuZHMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmRzID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kcy5pc1Jvb3REcmFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHMgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmRzIGFzIENoaWxkRHJhZztcclxuICAgICAgICBjb25zdCByYyA9IHRoaXMuY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgbXggPSAoZS5jbGllbnRYIC0gcmMubGVmdCAtIHRoaXMucGFuWCkgLyB0aGlzLnpvb20sXHJcbiAgICAgICAgICAgIG15ID0gKGUuY2xpZW50WSAtIHJjLnRvcCAtIHRoaXMucGFuWSkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgY29uc3QgZHggPSBteCAtIGQuc3RhcnRYLFxyXG4gICAgICAgICAgICBkeSA9IG15IC0gZC5zdGFydFk7XHJcbiAgICAgICAgY29uc3QgZG4gPSB0aGlzLmZBbGwoZC5ub2RlSWQpO1xyXG4gICAgICAgIGNvbnN0IGRuVyA9IGRuID8gZG4ud2lkdGggOiAwO1xyXG4gICAgICAgIGNvbnN0IGlzTGVmdFNpZGUgPSBkbj8uc2lkZSA9PT0gXCJsZWZ0XCI7XHJcbiAgICAgICAgY29uc3QgZWRnZVggPSBkblxyXG4gICAgICAgICAgICA/IGlzTGVmdFNpZGVcclxuICAgICAgICAgICAgICAgID8gZG4ueCArIGR4ICsgZG5XIC8gMlxyXG4gICAgICAgICAgICAgICAgOiBkbi54ICsgZHggLSBkblcgLyAyXHJcbiAgICAgICAgICAgIDogbXg7XHJcbiAgICAgICAgY29uc3QgZ3kgPSBkbiA/IGRuLnkgKyBkeSA6IG15O1xyXG4gICAgICAgIGNvbnN0IHRndCA9IHRoaXMuZGV0VGd0KGVkZ2VYLCBlZGdlWCwgZ3ksIGQubm9kZUlkKTtcclxuICAgICAgICBpZiAodGd0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjUG9zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsSWRzID0gdGhpcy5hbGxTZWwoKTtcclxuICAgICAgICAgICAgLy8gRklYICM2OiBjb2xsZWN0IG5vZGVzIGluIG9yaWdpbmFsIHRyZWUgb3JkZXIsIHByZXNlcnZlIHRoZWlyIHNlcXVlbmNlXHJcbiAgICAgICAgICAgIGNvbnN0IHRvTW92ZTogTWluZE5vZGVEYXRhW10gPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgY29sbGVjdE9yZGVyZWQgPSAocGFyZW50OiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gcGFyZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxJZHMuaGFzKGMuaWQpICYmICFjLmlzUm9vdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b01vdmUudW5zaGlmdChwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGksIDEpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0T3JkZXJlZChjKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSBjb2xsZWN0T3JkZXJlZChyKTtcclxuICAgICAgICAgICAgaWYgKCF0b01vdmUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXQgPSB0aGlzLnJlbUFsbChkLm5vZGVJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGV0KSB0b01vdmUucHVzaChkZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzaWRlIG9mIG1vdmVkIG5vZGVzIHRvIG1hdGNoIHRhcmdldCdzIHNpZGVcclxuICAgICAgICAgICAgY29uc3QgdGd0Tm9kZSA9IHRoaXMuZkFsbCh0Z3QuaWQpO1xyXG4gICAgICAgICAgICBjb25zdCB0Z3RTaWRlID1cclxuICAgICAgICAgICAgICAgIHRndE5vZGU/LnNpZGUgfHwgKHRndE5vZGU/LmlzUm9vdCA/IHVuZGVmaW5lZCA6IFwicmlnaHRcIik7XHJcbiAgICAgICAgICAgIGlmICh0Z3RTaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRTaWRlID0gKG46IE1pbmROb2RlRGF0YSwgczogXCJsZWZ0XCIgfCBcInJpZ2h0XCIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnNpZGUgPSBzO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSBzZXRTaWRlKGMsIHMpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbSBvZiB0b01vdmUpIHNldFNpZGUobSwgdGd0U2lkZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSW5zZXJ0IHByZXNlcnZpbmcgb3JkZXJcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b01vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB0aGlzLmluc1RyZWUodG9Nb3ZlW2ldLCB0Z3QuaWQsIHRndC56b25lKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5pbnNUcmVlKHRvTW92ZVtpXSwgdG9Nb3ZlW2kgLSAxXS5pZCwgXCJhZnRlclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBLZWVwIGFsbCBtb3ZlZCBub2RlcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbSBvZiB0b01vdmUpIHRoaXMubXVsdGlTZWwuYWRkKG0uaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbElkID0gdG9Nb3ZlLmxlbmd0aCA/IHRvTW92ZVswXS5pZCA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGQuZ2hvc3RFbD8ucmVtb3ZlKCk7XHJcbiAgICAgICAgZC5pbmRpY2F0b3JFbD8ucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5kcyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRndCkgdGhpcy5hbmltUmVuZGVyKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgdXBkVHgoKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIC0tIFNWRyBncm91cCB0cmFuc2Zvcm0gcmVxdWlyZXMgZGlyZWN0IHN0eWxlIGZvciBwYW4vem9vbSBwZXJmb3JtYW5jZVxyXG4gICAgICAgIHRoaXMuZ0VsLnN0eWxlLnRyYW5zZm9ybSA9XHJcbiAgICAgICAgICAgIFwidHJhbnNsYXRlKFwiICtcclxuICAgICAgICAgICAgdGhpcy5wYW5YICtcclxuICAgICAgICAgICAgXCJweCxcIiArXHJcbiAgICAgICAgICAgIHRoaXMucGFuWSArXHJcbiAgICAgICAgICAgIFwicHgpIHNjYWxlKFwiICtcclxuICAgICAgICAgICAgdGhpcy56b29tICtcclxuICAgICAgICAgICAgXCIpXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuem9vbUxhYmVsKVxyXG4gICAgICAgICAgICB0aGlzLnpvb21MYWJlbC5pbm5lclRleHQgPSBNYXRoLnJvdW5kKHRoaXMuem9vbSAqIDEwMCkgKyBcIiVcIjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgem9vbUJ5KGZhY3RvcjogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgcmMgPSB0aGlzLmNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGlmIChyYy53aWR0aCA8IDEgfHwgcmMuaGVpZ2h0IDwgMSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGN4ID0gcmMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICBjeSA9IHJjLmhlaWdodCAvIDI7XHJcbiAgICAgICAgY29uc3QgbnogPSBNYXRoLm1heCgwLjEsIE1hdGgubWluKHRoaXMuem9vbSAqIGZhY3RvciwgMykpO1xyXG4gICAgICAgIHRoaXMucGFuWCA9IGN4IC0gKGN4IC0gdGhpcy5wYW5YKSAqIChueiAvIHRoaXMuem9vbSk7XHJcbiAgICAgICAgdGhpcy5wYW5ZID0gY3kgLSAoY3kgLSB0aGlzLnBhblkpICogKG56IC8gdGhpcy56b29tKTtcclxuICAgICAgICB0aGlzLnpvb20gPSBuejtcclxuICAgICAgICB0aGlzLnVwZFR4KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHpvb21UbyhsZXZlbDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgcmMgPSB0aGlzLmNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGlmIChyYy53aWR0aCA8IDEgfHwgcmMuaGVpZ2h0IDwgMSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGN4ID0gcmMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICBjeSA9IHJjLmhlaWdodCAvIDI7XHJcbiAgICAgICAgdGhpcy5wYW5YID0gY3ggLSAoY3ggLSB0aGlzLnBhblgpICogKGxldmVsIC8gdGhpcy56b29tKTtcclxuICAgICAgICB0aGlzLnBhblkgPSBjeSAtIChjeSAtIHRoaXMucGFuWSkgKiAobGV2ZWwgLyB0aGlzLnpvb20pO1xyXG4gICAgICAgIHRoaXMuem9vbSA9IGxldmVsO1xyXG4gICAgICAgIHRoaXMudXBkVHgoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9MYXlvdXQobjogTWluZE5vZGVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jU0gobik7XHJcbiAgICAgICAgdGhpcy5jWFkobik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNTSChuOiBNaW5kTm9kZURhdGEpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHZtID0gdGhpcy5zdHlsZS5ub2RlR2FwWSA/PyAyNDtcclxuICAgICAgICBpZiAoIW4uY2hpbGRyZW4/Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAobiBhcyBMYXlvdXROb2RlKS5fc2ggPSBuLmhlaWdodCArIHZtO1xyXG4gICAgICAgICAgICByZXR1cm4gKG4gYXMgTGF5b3V0Tm9kZSkuX3NoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB0b3RhbCArPSB0aGlzLmNTSChjKTtcclxuICAgICAgICAobiBhcyBMYXlvdXROb2RlKS5fc2ggPSBNYXRoLm1heChuLmhlaWdodCArIHZtLCB0b3RhbCk7XHJcbiAgICAgICAgcmV0dXJuIChuIGFzIExheW91dE5vZGUpLl9zaDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY1hZKG46IE1pbmROb2RlRGF0YSkge1xyXG4gICAgICAgIGlmICghbi5jaGlsZHJlbj8ubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgaG0gPSB0aGlzLnN0eWxlLmNvbm5lY3Rpb25MZW5ndGggfHwgODA7XHJcbiAgICAgICAgLy8gU3BsaXQgY2hpbGRyZW4gYnkgc2lkZSBmb3Igcm9vdCBub2Rlc1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0Q2ggPSBuLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlICE9PSBcImxlZnRcIik7XHJcbiAgICAgICAgY29uc3QgbGVmdENoID0gbi5jaGlsZHJlbi5maWx0ZXIoKGMpID0+IGMuc2lkZSA9PT0gXCJsZWZ0XCIpO1xyXG4gICAgICAgIC8vIExheW91dCByaWdodCBjaGlsZHJlblxyXG4gICAgICAgIGlmIChyaWdodENoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgdG90ID0gMDtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIHJpZ2h0Q2gpIHRvdCArPSAoYyBhcyBMYXlvdXROb2RlKS5fc2g7XHJcbiAgICAgICAgICAgIGxldCBjeSA9IG4ueSAtIHRvdCAvIDI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiByaWdodENoKSB7XHJcbiAgICAgICAgICAgICAgICBjLnggPSBuLnggKyBuLndpZHRoIC8gMiArIGhtICsgYy53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBjLnkgPSBjeSArIChjIGFzIExheW91dE5vZGUpLl9zaCAvIDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNYWShjKTtcclxuICAgICAgICAgICAgICAgIGN5ICs9IChjIGFzIExheW91dE5vZGUpLl9zaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMYXlvdXQgbGVmdCBjaGlsZHJlbiAobWlycm9yKVxyXG4gICAgICAgIGlmIChsZWZ0Q2gubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCB0b3QgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgbGVmdENoKSB0b3QgKz0gKGMgYXMgTGF5b3V0Tm9kZSkuX3NoO1xyXG4gICAgICAgICAgICBsZXQgY3kgPSBuLnkgLSB0b3QgLyAyO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgbGVmdENoKSB7XHJcbiAgICAgICAgICAgICAgICBjLnggPSBuLnggLSBuLndpZHRoIC8gMiAtIGhtIC0gYy53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBjLnkgPSBjeSArIChjIGFzIExheW91dE5vZGUpLl9zaCAvIDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNYWShjKTtcclxuICAgICAgICAgICAgICAgIGN5ICs9IChjIGFzIExheW91dE5vZGUpLl9zaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgY2FsY1codHh0OiBzdHJpbmcsIGlzUjogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZnMgPSBpc1IgPyB0aGlzLnN0eWxlLnJvb3RGb250U2l6ZSA6IHRoaXMuc3R5bGUubm9kZUZvbnRTaXplO1xyXG4gICAgICAgIGNvbnN0IGZmID0gaXNSID8gdGhpcy5zdHlsZS5yb290Rm9udEZhbWlseSA6IHRoaXMuc3R5bGUubm9kZUZvbnRGYW1pbHk7XHJcbiAgICAgICAgbGV0IG13ID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IGwgb2YgdHh0LnNwbGl0KFwiXFxuXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgZC5hZGRDbGFzcyhcIm16LW1lYXN1cmUtc3BhblwiKTtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoeyBcIi0tbXotZnNcIjogZnMgKyBcInB4XCIsIFwiLS1tei1mZlwiOiBmZiB9KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKFtrLCB2XSkgPT4gZC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZC5pbm5lclRleHQgPSBsIHx8IFwiIFwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGQpO1xyXG4gICAgICAgICAgICBpZiAoZC5vZmZzZXRXaWR0aCA+IG13KSBtdyA9IGQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChcclxuICAgICAgICAgICAgaXNSID8gdGhpcy5zdHlsZS5yb290TWluV2lkdGggOiB0aGlzLnN0eWxlLm5vZGVNaW5XaWR0aCxcclxuICAgICAgICAgICAgbXcgKyB0aGlzLnN0eWxlLm5vZGVQYWRYICogMiArIDQsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2FsY0godHh0OiBzdHJpbmcsIGlzUjogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZnMgPSBpc1IgPyB0aGlzLnN0eWxlLnJvb3RGb250U2l6ZSA6IHRoaXMuc3R5bGUubm9kZUZvbnRTaXplO1xyXG4gICAgICAgIGNvbnN0IGxoID0gdGhpcy5zdHlsZS5ub2RlTGluZUhlaWdodCB8fCAxLjU7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KFxyXG4gICAgICAgICAgICBpc1IgPyB0aGlzLnN0eWxlLnJvb3RNaW5IZWlnaHQgOiB0aGlzLnN0eWxlLm5vZGVNaW5IZWlnaHQsXHJcbiAgICAgICAgICAgIHR4dC5zcGxpdChcIlxcblwiKS5sZW5ndGggKiBmcyAqIGxoICsgMTQsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVjUG9zKCkge1xyXG4gICAgICAgIHRoaXMub2xkUG9zLmNsZWFyKCk7XHJcbiAgICAgICAgY29uc3QgdiA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbGRQb3Muc2V0KG4uaWQsIHsgeDogbi54LCB5OiBuLnkgfSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB2KGMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHYocik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFuaW1SZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVzRyB8fCAhdGhpcy5lZGdlc0cgfHwgIXRoaXMub2xkUG9zLnNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBucCA9IG5ldyBNYXA8c3RyaW5nLCB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHtcclxuICAgICAgICAgICAgdGhpcy5kb0xheW91dChyKTtcclxuICAgICAgICAgICAgY29uc3QgdiA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIG5wLnNldChuLmlkLCB7IHg6IG4ueCwgeTogbi55IH0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHYoYyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHYocik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNwID0gbmV3IE1hcDxzdHJpbmcsIHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4oKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtpZCwgcF0gb2YgbnApIHNwLnNldChpZCwgdGhpcy5vbGRQb3MuZ2V0KGlkKSA/PyBwKTtcclxuICAgICAgICBjb25zdCBkdXIgPSAyMDAsXHJcbiAgICAgICAgICAgIHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbUlkKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1JZCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbaWQsIHBdIG9mIG5wKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmZBbGwoaWQpO1xyXG4gICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgbi54ID0gcC54O1xyXG4gICAgICAgICAgICAgICAgbi55ID0gcC55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbaWQsIHBdIG9mIHNwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmZBbGwoaWQpO1xyXG4gICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgbi54ID0gcC54O1xyXG4gICAgICAgICAgICAgICAgbi55ID0gcC55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlRk8oKTtcclxuICAgICAgICB0aGlzLmVkZ2VzRy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLmRyYXdFZGdlcyhyKTtcclxuICAgICAgICBjb25zdCBzdGVwID0gKG5vdzogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR0ID0gTWF0aC5taW4oKG5vdyAtIHQwKSAvIGR1ciwgMSksXHJcbiAgICAgICAgICAgICAgICBlYXNlID0gMSAtIE1hdGgucG93KDEgLSB0dCwgMyk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2lkLCBmcF0gb2YgbnApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBzcC5nZXQoaWQpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmZBbGwoaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBuLnggPSBzLnggKyAoZnAueCAtIHMueCkgKiBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG4ueSA9IHMueSArIChmcC55IC0gcy55KSAqIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lZGdlc0chLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLmRyYXdFZGdlcyhyKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGTygpO1xyXG4gICAgICAgICAgICBpZiAodHQgPCAxKSB0aGlzLmFuaW1JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtpZCwgcF0gb2YgbnApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuID0gdGhpcy5mQWxsKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLnggPSBwLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ueSA9IHAueTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltSWQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFuaW1JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc29mdFJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWRnZXNHIHx8ICF0aGlzLm5vZGVzRykgcmV0dXJuO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLmRvTGF5b3V0KHIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRk8oKTtcclxuICAgICAgICB0aGlzLmVkZ2VzRy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLmRyYXdFZGdlcyhyKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURldlBhbmVsKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWRnZXNHIHx8ICF0aGlzLm5vZGVzRyB8fCAhdGhpcy5vdmVybGF5RykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZWRnZXNHLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5ub2Rlc0cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLm92ZXJsYXlHLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5saXZlVEEgPSBudWxsO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9MYXlvdXQocik7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0VkZ2VzKHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kcmF3Tm9kZXMocik7XHJcbiAgICAgICAgaWYgKHRoaXMuYm94U2VsICYmIHRoaXMuYm94RWwpIHRoaXMub3ZlcmxheUcuYXBwZW5kQ2hpbGQodGhpcy5ib3hFbCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXZQYW5lbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmVkaXRJZCkgdGhpcy5jbGVhclByb3h5KCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVuc3VyZVByb3h5KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGJQYXRoKHN4OiBudW1iZXIsIHN5OiBudW1iZXIsIGV4OiBudW1iZXIsIGV5OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkeCA9IGV4IC0gc3g7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0eWxlLmNvbm5lY3Rpb25TdHlsZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic3RyYWlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1cIiArIHN4ICsgXCIgXCIgKyBzeSArIFwiTFwiICsgZXggKyBcIiBcIiArIGV5O1xyXG4gICAgICAgICAgICBjYXNlIFwiY3VydmVkXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTVwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIlFcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKHN4ICsgZHggKiAwLjcpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3kgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV5XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYXNlIFwic3RlcFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBteCA9IChzeCArIGV4KSAvIDI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNXCIgKyBzeCArIFwiIFwiICsgc3kgKyBcIkhcIiArIG14ICsgXCJWXCIgKyBleSArIFwiSFwiICsgZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImJyYWNrZXRcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbXggPSBzeCArIGR4ICogMC41O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBcIk1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3ggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIG14ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3kgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBteCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwibG9vc2VcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN4ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3kgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ1wiICtcclxuICAgICAgICAgICAgICAgICAgICAoc3ggKyBkeCAqIDAuNikgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAoc3kgKyAoZXkgLSBzeSkgKiAwLjEpICtcclxuICAgICAgICAgICAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKGV4IC0gZHggKiAwLjMpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKGV5IC0gKGV5IC0gc3kpICogMC4xKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV4ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTVwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIkNcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKHN4ICsgZHggKiAwLjQpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3kgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgICAgICAgICAgICAoZXggLSBkeCAqIDAuNCkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV4ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcmF3RWRnZXMobmQ6IE1pbmROb2RlRGF0YSwgaW5oPzogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcFIgPSAhIW5kLmlzUm9vdDtcclxuICAgICAgICAvLyBGb3Igc3RlcC9icmFja2V0IHN0eWxlcywgei1vcmRlciBtYXR0ZXJzLiBEcmF3IGNoaWxkcmVuIGZ1cnRoZXN0IGZyb20gY2VudGVyIGZpcnN0LFxyXG4gICAgICAgIC8vIGNsb3Nlc3QgdG8gY2VudGVyIGxhc3QgKG9uIHRvcCksIHNvIGVhY2ggY2hpbGQncyBjb2xvciBpcyB2aXNpYmxlIGF0IHRoZSBqdW5jdGlvbi5cclxuICAgICAgICBjb25zdCBhYm92ZTogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBjb25zdCBiZWxvdzogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5kLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChuZC5jaGlsZHJlbltpXS55IDwgbmQueSkgYWJvdmUucHVzaChpKTtcclxuICAgICAgICAgICAgZWxzZSBiZWxvdy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBYm92ZTogdG9wLXRvLWJvdHRvbSAoZnVydGhlc3QgZmlyc3QsIGNsb3Nlc3QgdG8gY2VudGVyIGxhc3QgPSBvbiB0b3ApXHJcbiAgICAgICAgLy8gQmVsb3c6IGJvdHRvbS10by10b3AgKGZ1cnRoZXN0IGZpcnN0LCBjbG9zZXN0IHRvIGNlbnRlciBsYXN0ID0gb24gdG9wKVxyXG4gICAgICAgIGNvbnN0IG9yZGVyID0gWy4uLmFib3ZlLCAuLi5iZWxvdy5yZXZlcnNlKCldO1xyXG4gICAgICAgIGZvciAoY29uc3QgaSBvZiBvcmRlcikge1xyXG4gICAgICAgICAgICBjb25zdCBjaCA9IG5kLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmdldENDKGNoLCBwUiwgaSwgaW5oKTtcclxuICAgICAgICAgICAgY29uc3QgaXNMZWZ0ID0gY2guc2lkZSA9PT0gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgIC8vIEFjY291bnQgZm9yIGJvcmRlciB3aWR0aCBzbyBjb25uZWN0aW9ucyByZWFjaCBvdXRlciBlZGdlXHJcbiAgICAgICAgICAgIGNvbnN0IHBWaXMgPSB0aGlzLm5vZGVWaXMobmQpO1xyXG4gICAgICAgICAgICBjb25zdCBwQlcgPSBwVmlzLmJTICE9PSBcIm5vbmVcIiA/IHBWaXMuYlcgOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBjVmlzID0gdGhpcy5ub2RlVmlzKGNoKTtcclxuICAgICAgICAgICAgY29uc3QgY0JXID0gY1Zpcy5iUyAhPT0gXCJub25lXCIgPyBjVmlzLmJXIDogMDtcclxuICAgICAgICAgICAgY29uc3Qgc3ggPSBpc0xlZnRcclxuICAgICAgICAgICAgICAgID8gbmQueCAtIG5kLndpZHRoIC8gMiAtIHBCV1xyXG4gICAgICAgICAgICAgICAgOiBuZC54ICsgbmQud2lkdGggLyAyICsgcEJXO1xyXG4gICAgICAgICAgICBjb25zdCBleCA9IGlzTGVmdFxyXG4gICAgICAgICAgICAgICAgPyBjaC54ICsgY2gud2lkdGggLyAyICsgY0JXXHJcbiAgICAgICAgICAgICAgICA6IGNoLnggLSBjaC53aWR0aCAvIDIgLSBjQlc7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICBcInBhdGhcIixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJkXCIsIHRoaXMuYlBhdGgoc3gsIG5kLnksIGV4LCBjaC55KSk7XHJcbiAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGNvbCk7XHJcbiAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIixcclxuICAgICAgICAgICAgICAgIFN0cmluZyhjaC5jb25uZWN0aW9uV2lkdGggPz8gdGhpcy5zdHlsZS5jb25uZWN0aW9uV2lkdGgpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBwLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICBwLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuZHM/LmlzRHJhZ2dpbmcgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLmRzLmlzUm9vdERyYWcgJiZcclxuICAgICAgICAgICAgICAgICh0aGlzLmRzIGFzIENoaWxkRHJhZykubm9kZUlkID09PSBjaC5pZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBwLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgXCIwLjE1XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmVkZ2VzRy5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3RWRnZXMoXHJcbiAgICAgICAgICAgICAgICBjaCxcclxuICAgICAgICAgICAgICAgIGNoLmNvbm5lY3Rpb25Db2xvciA/P1xyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0eWxlLmNvbm5lY3Rpb25SYWluYm93ICYmIHBSID8gY29sIDogaW5oKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyYXdOb2RlcyhuOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICB0aGlzLmRyYXdPbmUobik7XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHRoaXMuZHJhd05vZGVzKGMpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcmF3T25lKG5kOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICBjb25zdCBmbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICBcImZvcmVpZ25PYmplY3RcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIGZvLmlkID0gXCJtbi1cIiArIG5kLmlkO1xyXG4gICAgICAgIGNvbnN0IHYgPSB0aGlzLm5vZGVWaXMobmQpO1xyXG4gICAgICAgIGNvbnN0IGJXID0gdi5iUyAhPT0gXCJub25lXCIgPyB2LmJXIDogMDtcclxuICAgICAgICBjb25zdCB2aXN1YWxXID0gbmQud2lkdGggKyBiVyAqIDI7XHJcbiAgICAgICAgY29uc3QgdmlzdWFsSCA9IG5kLmhlaWdodCArIGJXICogMjtcclxuICAgICAgICBjb25zdCBzZWxFeCA9IHRoaXMuaXNTZWwobmQuaWQpID8gdGhpcy5zdHlsZS5zZWxlY3Rpb25XaWR0aCArIDQgOiAwO1xyXG4gICAgICAgIGZvLnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKG5kLnggLSB2aXN1YWxXIC8gMiAtIHNlbEV4KSk7XHJcbiAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcobmQueSAtIHZpc3VhbEggLyAyIC0gc2VsRXgpKTtcclxuICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcodmlzdWFsVyArIHNlbEV4ICogMikpO1xyXG4gICAgICAgIGZvLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcodmlzdWFsSCArIHNlbEV4ICogMikpO1xyXG4gICAgICAgIGZvLnNldEF0dHJpYnV0ZShcIm92ZXJmbG93XCIsIFwidmlzaWJsZVwiKTtcclxuICAgICAgICAvLyBvdmVyZmxvdzp2aXNpYmxlIHNldCB2aWEgU1ZHIGF0dHJpYnV0ZSBhYm92ZVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5kcz8uaXNEcmFnZ2luZyAmJlxyXG4gICAgICAgICAgICAhdGhpcy5kcy5pc1Jvb3REcmFnICYmXHJcbiAgICAgICAgICAgICh0aGlzLmRzIGFzIENoaWxkRHJhZykubm9kZUlkID09PSBuZC5pZFxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgZm8udG9nZ2xlQ2xhc3MoXCJtei1kcmFnLXRyYW5zcGFyZW50XCIsIHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHdyYXAuYWRkQ2xhc3MoXCJtei1ub2RlLXdyYXBcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdElkID09PSBuZC5pZCkgd3JhcC5hcHBlbmRDaGlsZCh0aGlzLm1rVEEobmQpKTtcclxuICAgICAgICBlbHNlIHdyYXAuYXBwZW5kQ2hpbGQodGhpcy5ta0RpdihuZCkpO1xyXG4gICAgICAgIGZvLmFwcGVuZENoaWxkKHdyYXApO1xyXG4gICAgICAgIHRoaXMubm9kZXNHLmFwcGVuZENoaWxkKGZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5vZGVWaXMobmQ6IE1pbmROb2RlRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGlzUiA9ICEhbmQuaXNSb290O1xyXG4gICAgICAgIGNvbnN0IHNvID0gbmQuc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICBjb25zdCBiZyA9XHJcbiAgICAgICAgICAgIHNvLmJnQ29sb3IgPz9cclxuICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEJnQ29sb3IgOiB0aGlzLnN0eWxlLm5vZGVCZ0NvbG9yKTtcclxuICAgICAgICBjb25zdCB0YyA9XHJcbiAgICAgICAgICAgIHNvLnRleHRDb2xvciA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290VGV4dENvbG9yIDogdGhpcy5zdHlsZS5ub2RlVGV4dENvbG9yKTtcclxuICAgICAgICBjb25zdCBmcyA9XHJcbiAgICAgICAgICAgIHNvLmZvbnRTaXplID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RGb250U2l6ZSA6IHRoaXMuc3R5bGUubm9kZUZvbnRTaXplKTtcclxuICAgICAgICBjb25zdCBmZiA9XHJcbiAgICAgICAgICAgIHNvLmZvbnRGYW1pbHkgPz9cclxuICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEZvbnRGYW1pbHkgOiB0aGlzLnN0eWxlLm5vZGVGb250RmFtaWx5KTtcclxuICAgICAgICBjb25zdCBiUyA9XHJcbiAgICAgICAgICAgIHNvLmJvcmRlclN0eWxlID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCb3JkZXJTdHlsZSA6IHRoaXMuc3R5bGUubm9kZUJvcmRlclN0eWxlKTtcclxuICAgICAgICBjb25zdCBiVyA9XHJcbiAgICAgICAgICAgIHNvLmJvcmRlcldpZHRoID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCb3JkZXJXaWR0aCA6IHRoaXMuc3R5bGUubm9kZUJvcmRlcldpZHRoKTtcclxuICAgICAgICBsZXQgYkMgPVxyXG4gICAgICAgICAgICBzby5ib3JkZXJDb2xvciA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyQ29sb3IgOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJDb2xvcik7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmNvbm5lY3Rpb25SYWluYm93ICYmXHJcbiAgICAgICAgICAgICFzby5ib3JkZXJDb2xvciAmJlxyXG4gICAgICAgICAgICAhaXNSICYmXHJcbiAgICAgICAgICAgIG5kLmNvbm5lY3Rpb25Db2xvclxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgYkMgPSBuZC5jb25uZWN0aW9uQ29sb3I7XHJcbiAgICAgICAgY29uc3QgcmFkID1cclxuICAgICAgICAgICAgc28uYm9yZGVyUmFkaXVzID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCb3JkZXJSYWRpdXMgOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJSYWRpdXMpO1xyXG4gICAgICAgIHJldHVybiB7IGlzUiwgYmcsIHRjLCBmcywgZmYsIGJTLCBiVywgYkMsIHJhZCB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBta0RpdihuZDogTWluZE5vZGVEYXRhKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgdiA9IHRoaXMubm9kZVZpcyhuZCk7XHJcbiAgICAgICAgY29uc3Qgc2VsID0gdGhpcy5pc1NlbChuZC5pZCk7XHJcbiAgICAgICAgY29uc3QgdGEgPSB0aGlzLnN0eWxlLnRleHRBbGlnbjtcclxuICAgICAgICBjb25zdCBwYWRYID0gdGhpcy5zdHlsZS5ub2RlUGFkWDtcclxuICAgICAgICBjb25zdCBsaCA9IHRoaXMuc3R5bGUubm9kZUxpbmVIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgb2ZmID0gdGhpcy5zdHlsZS5zZWxlY3Rpb25PdXRsaW5lT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGJXID0gdi5iUyAhPT0gXCJub25lXCIgPyB2LmJXIDogMDtcclxuICAgICAgICBjb25zdCB2aXN1YWxXID0gbmQud2lkdGggKyBiVyAqIDI7XHJcbiAgICAgICAgY29uc3QgdmlzdWFsSCA9IG5kLmhlaWdodCArIGJXICogMjtcclxuICAgICAgICBjb25zdCBib3JkZXJDU1MgPVxyXG4gICAgICAgICAgICB2LmJTICE9PSBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgPyBgYm9yZGVyOiR7di5iV31weCAke3YuYlN9ICR7di5iQ307YFxyXG4gICAgICAgICAgICAgICAgOiBcImJvcmRlcjpub25lO1wiO1xyXG4gICAgICAgIGNvbnN0IHNlbENTUyA9IHNlbFxyXG4gICAgICAgICAgICA/IGBvdXRsaW5lOiR7dGhpcy5zdHlsZS5zZWxlY3Rpb25XaWR0aH1weCBzb2xpZCAke3RoaXMuc3R5bGUuc2VsZWN0aW9uQ29sb3J9O291dGxpbmUtb2Zmc2V0OiR7b2ZmfXB4O2BcclxuICAgICAgICAgICAgOiBcIlwiO1xyXG4gICAgICAgIGRpdi5hZGRDbGFzcyhcIm16LW5vZGUtZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IGRzID0gZGl2LnN0eWxlO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei13XCIsIHZpc3VhbFcgKyBcInB4XCIpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1oXCIsIHZpc3VhbEggKyBcInB4XCIpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFxyXG4gICAgICAgICAgICBcIi0tbXotamNcIixcclxuICAgICAgICAgICAgdGEgPT09IFwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICA/IFwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICA6IHRhID09PSBcInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgPyBcImZsZXgtZW5kXCJcclxuICAgICAgICAgICAgICAgICAgOiBcImNlbnRlclwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LXJhZFwiLCB2LnJhZCArIFwicHhcIik7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LWZ3XCIsIFN0cmluZyh2LmlzUiA/IDcwMCA6IDUwMCkpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1mc1wiLCB2LmZzICsgXCJweFwiKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotZmZcIiwgdi5mZik7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LXRhXCIsIHRhKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotbGhcIiwgU3RyaW5nKGxoKSk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LWJnXCIsIHYuYmcpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei10Y1wiLCB2LnRjKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotcGFkXCIsIGA2cHggJHtwYWRYfXB4YCk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LWN1cnNvclwiLCB2LmlzUiA/IFwibW92ZVwiIDogXCJncmFiXCIpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFxyXG4gICAgICAgICAgICBcIi0tbXotYm9yZGVyXCIsXHJcbiAgICAgICAgICAgIHYuYlMgIT09IFwibm9uZVwiID8gYCR7di5iV31weCAke3YuYlN9ICR7di5iQ31gIDogXCJub25lXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcclxuICAgICAgICAgICAgXCItLW16LW91dGxpbmVcIixcclxuICAgICAgICAgICAgc2VsXHJcbiAgICAgICAgICAgICAgICA/IGAke3RoaXMuc3R5bGUuc2VsZWN0aW9uV2lkdGh9cHggc29saWQgJHt0aGlzLnN0eWxlLnNlbGVjdGlvbkNvbG9yfWBcclxuICAgICAgICAgICAgICAgIDogXCJub25lXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotb3V0bGluZS1vZmZcIiwgc2VsID8gb2ZmICsgXCJweFwiIDogXCIwXCIpO1xyXG4gICAgICAgIGRpdi5pbm5lclRleHQgPSBuZC50ZXh0O1xyXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwYWNlRG93bikgcmV0dXJuO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNjPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRGJsID0gdGhpcy5sY25pZCA9PT0gbmQuaWQgJiYgbm93IC0gdGhpcy5sY3QgPCAzMDA7XHJcbiAgICAgICAgICAgIHRoaXMubGN0ID0gbm93O1xyXG4gICAgICAgICAgICB0aGlzLmxjbmlkID0gbmQuaWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbW1pdEVkaXQgJiYgdGhpcy5lZGl0SWQgIT09IG5kLmlkKSB0aGlzLmNvbW1pdEVkaXQoKTtcclxuICAgICAgICAgICAgaWYgKGlzRGJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRJZCA9IG5kLmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSB8fCBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ1NlbChuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aVNlbC5oYXMobmQuaWQpKSB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCByYyA9IHRoaXMuY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGx4ID0gKGUuY2xpZW50WCAtIHJjLmxlZnQgLSB0aGlzLnBhblgpIC8gdGhpcy56b29tLFxyXG4gICAgICAgICAgICAgICAgbHkgPSAoZS5jbGllbnRZIC0gcmMudG9wIC0gdGhpcy5wYW5ZKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgaWYgKG5kLmlzUm9vdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVlcnM6IHsgaWQ6IHN0cmluZzsgc3g6IG51bWJlcjsgc3k6IG51bWJlciB9W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpU2VsLnNpemUgPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbWlkIG9mIHRoaXMubXVsdGlTZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZCA9PT0gbmQuaWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtbiA9IHRoaXMuZkFsbChtaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW4/LmlzUm9vdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJzLnB1c2goeyBpZDogbWlkLCBzeDogbW4ueCwgc3k6IG1uLnkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpc0RyYWdnaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpc1Jvb3REcmFnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbmQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRYOiBseCxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFk6IGx5LFxyXG4gICAgICAgICAgICAgICAgICAgIG5zeDogbmQueCxcclxuICAgICAgICAgICAgICAgICAgICBuc3k6IG5kLnksXHJcbiAgICAgICAgICAgICAgICAgICAgcGVlcnM6IHBlZXJzLmxlbmd0aCA/IHBlZXJzIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSb290RHJhZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBuZC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFg6IGx4LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WTogbHksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2hvc3RFbDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JFbDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBzbmFwOiBKU09OLnN0cmluZ2lmeSh0aGlzLnJvb3RzKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Tm9kZUN0eChlLCBuZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1rVEEobmQ6IE1pbmROb2RlRGF0YSk6IEhUTUxUZXh0QXJlYUVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgICAgIHRhLnZhbHVlID0gbmQudGV4dDtcclxuICAgICAgICBjb25zdCB2ID0gdGhpcy5ub2RlVmlzKG5kKTtcclxuICAgICAgICBjb25zdCB0QWxpZ24gPSB0aGlzLnN0eWxlLnRleHRBbGlnbjtcclxuICAgICAgICBjb25zdCBlZGl0T0MgPSB0aGlzLnN0eWxlLmVkaXRPdXRsaW5lQ29sb3I7XHJcbiAgICAgICAgY29uc3QgcGFkWCA9IHRoaXMuc3R5bGUubm9kZVBhZFg7XHJcbiAgICAgICAgY29uc3QgbGggPSB0aGlzLnN0eWxlLm5vZGVMaW5lSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IG9mZiA9IHRoaXMuc3R5bGUuc2VsZWN0aW9uT3V0bGluZU9mZnNldDtcclxuICAgICAgICBjb25zdCBiVyA9IHYuYlMgIT09IFwibm9uZVwiID8gdi5iVyA6IDA7XHJcbiAgICAgICAgY29uc3QgdmlzdWFsVyA9IG5kLndpZHRoICsgYlcgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpc3VhbEggPSBuZC5oZWlnaHQgKyBiVyAqIDI7XHJcbiAgICAgICAgY29uc3QgYm9yZGVyQ1NTID1cclxuICAgICAgICAgICAgdi5iUyAhPT0gXCJub25lXCJcclxuICAgICAgICAgICAgICAgID8gYGJvcmRlcjoke3YuYld9cHggJHt2LmJTfSAke3YuYkN9O2BcclxuICAgICAgICAgICAgICAgIDogXCJib3JkZXI6bm9uZTtcIjtcclxuICAgICAgICBjb25zdCBlZGl0T1cgPSB0aGlzLnN0eWxlLmVkaXRPdXRsaW5lV2lkdGg7XHJcbiAgICAgICAgY29uc3QgZWRpdENTUyA9IGBvdXRsaW5lOiR7ZWRpdE9XfXB4IHNvbGlkICR7ZWRpdE9DfTtvdXRsaW5lLW9mZnNldDoke29mZn1weDt0cmFuc2l0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmU7YDtcclxuICAgICAgICB0YS5hZGRDbGFzcyhcIm16LW5vZGUtdGFcIik7XHJcbiAgICAgICAgY29uc3QgdHMgPSB0YS5zdHlsZTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotd1wiLCB2aXN1YWxXICsgXCJweFwiKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotaFwiLCB2aXN1YWxIICsgXCJweFwiKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotcmFkXCIsIHYucmFkICsgXCJweFwiKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotZndcIiwgU3RyaW5nKHYuaXNSID8gNzAwIDogNTAwKSk7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LWZzXCIsIHYuZnMgKyBcInB4XCIpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1mZlwiLCB2LmZmKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotdGFcIiwgdEFsaWduKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotbGhcIiwgU3RyaW5nKGxoKSk7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LWJnXCIsIHYuYmcpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei10Y1wiLCB2LnRjKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotcGFkXCIsIGA2cHggJHtwYWRYfXB4YCk7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXHJcbiAgICAgICAgICAgIFwiLS1tei1ib3JkZXJcIixcclxuICAgICAgICAgICAgdi5iUyAhPT0gXCJub25lXCIgPyBgJHt2LmJXfXB4ICR7di5iU30gJHt2LmJDfWAgOiBcIm5vbmVcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1lZGl0LW91dGxpbmVcIiwgYCR7ZWRpdE9XfXB4IHNvbGlkICR7ZWRpdE9DfWApO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1lZGl0LW91dGxpbmUtb2ZmXCIsIG9mZiArIFwicHhcIik7XHJcbiAgICAgICAgdGEuYWRkQ2xhc3MoXCJtei1ub2RlLXRhXCIpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1zZWwtYmdcIiwgZWRpdE9DICsgXCI0MFwiKTtcclxuICAgICAgICB0YS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcclxuICAgICAgICAvLyBGSVg6IGlucHV0IGhhbmRsZXIgXHUyMDE0IHJlY2FsYyBzaXplIGJvdGggZ3JvdyBBTkQgc2hyaW5rXHJcbiAgICAgICAgdGEuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHh0ID0gdGEudmFsdWUgfHwgXCIgXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IG53ID0gdGhpcy5jYWxjVyh0eHQsICEhbmQuaXNSb290KTtcclxuICAgICAgICAgICAgY29uc3QgbmggPSB0aGlzLmNhbGNIKHR4dCwgISFuZC5pc1Jvb3QpO1xyXG4gICAgICAgICAgICBpZiAobncgIT09IG5kLndpZHRoIHx8IG5oICE9PSBuZC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5kLndpZHRoID0gbnc7XHJcbiAgICAgICAgICAgICAgICBuZC5oZWlnaHQgPSBuaDtcclxuICAgICAgICAgICAgICAgIHRhLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tei13XCIsIG5kLndpZHRoICsgYlcgKiAyICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgIHRhLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tei1oXCIsIG5kLmhlaWdodCArIGJXICogMiArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvZnRSZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubGl2ZVRBID0gdGE7XHJcbiAgICAgICAgY29uc3Qgc2F2ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZWRpdElkICE9PSBuZC5pZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCB0eHQgPSB0YS52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKG5kLnRleHQgIT09IHR4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgICAgICAgICAgbmQudGV4dCA9IHR4dDtcclxuICAgICAgICAgICAgICAgIG5kLndpZHRoID0gdGhpcy5jYWxjVyh0eHQgfHwgXCIgXCIsICEhbmQuaXNSb290KTtcclxuICAgICAgICAgICAgICAgIG5kLmhlaWdodCA9IHRoaXMuY2FsY0godHh0IHx8IFwiIFwiLCAhIW5kLmlzUm9vdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1pdEVkaXQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmxpdmVUQSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbW1pdEVkaXQgPSBzYXZlO1xyXG4gICAgICAgIHRhLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwia2V5ZG93blwiLFxyXG4gICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGUua2V5ID09PSBcIkVudGVyXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAhZS5zaGlmdEtleSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IubGluZUJyZWFrKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiVGFiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJbnNlcnQgdGFiIGF0IGN1cnNvciBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHMgPSB0YS5zZWxlY3Rpb25TdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gdGEuc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGEudmFsdWUuc3Vic3RyaW5nKDAsIHMpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhLnZhbHVlLnN1YnN0cmluZyhlbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhLnNlbGVjdGlvblN0YXJ0ID0gdGEuc2VsZWN0aW9uRW5kID0gcyArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGEuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBDdHJsK1VwID0gSG9tZSwgQ3RybCtEb3duID0gRW5kLCBDdHJsK1NoaWZ0K1VwID0gU2hpZnQrSG9tZSwgQ3RybCtTaGlmdCtEb3duID0gU2hpZnQrRW5kXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgJiYgZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhLnNlbGVjdGlvblN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHRhLnNlbGVjdGlvbkVuZCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJiBlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSB0YS52YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGEuc2VsZWN0aW9uRW5kID0gbGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZS5zaGlmdEtleSkgdGEuc2VsZWN0aW9uU3RhcnQgPSBsZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGEuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0YS5zZWxlY3QoKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICByZXR1cm4gdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVGTygpIHtcclxuICAgICAgICBjb25zdCB2ID0gKG46IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSB0aGlzLmlzU2VsKG4uaWQpO1xyXG4gICAgICAgICAgICBjb25zdCBleCA9IHNlbCA/IHRoaXMuc3R5bGUuc2VsZWN0aW9uV2lkdGggKyA0IDogMDtcclxuICAgICAgICAgICAgY29uc3QgbnYgPSB0aGlzLm5vZGVWaXMobik7XHJcbiAgICAgICAgICAgIGNvbnN0IGJXID0gbnYuYlMgIT09IFwibm9uZVwiID8gbnYuYlcgOiAwO1xyXG4gICAgICAgICAgICBjb25zdCB2dyA9IG4ud2lkdGggKyBiVyAqIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHZoID0gbi5oZWlnaHQgKyBiVyAqIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtbi1cIiArIG4uaWQpO1xyXG4gICAgICAgICAgICBpZiAoZm8pIHtcclxuICAgICAgICAgICAgICAgIGZvLnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKG4ueCAtIHZ3IC8gMiAtIGV4KSk7XHJcbiAgICAgICAgICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyhuLnkgLSB2aCAvIDIgLSBleCkpO1xyXG4gICAgICAgICAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHZ3ICsgZXggKiAyKSk7XHJcbiAgICAgICAgICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKHZoICsgZXggKiAyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHYoYyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdihyKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2xvc2VNZW51KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZU1lbnUpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVNZW51LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTWVudSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzaG93TWVudShtZW51OiBNZW51LCBlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZU1lbnUgPSBtZW51O1xyXG4gICAgICAgIG1lbnUuc2hvd0F0TW91c2VFdmVudChlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2hvd0NhbnZhc0N0eChlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcCgpO1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBuZXcgTWVudSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGkoKSkge1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0KFwiY3R4LmJhdGNoRGVsXCIpICsgXCIgKFwiICsgdGhpcy5hbGxTZWwoKS5zaXplICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJY29uKFwidHJhc2hcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLmJhdGNoRGVsKCkpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguZWRpdFN0eWxlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJY29uKFwicGFsZXR0ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuc2hvd05vZGVTdHlsZUVkaXRvcihlKSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHgubmV3Um9vdFwiKSlcclxuICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicGx1cy1jaXJjbGVcIilcclxuICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gdGhpcy5jYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFJvb3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLmdldFJvb3ROYW1lKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLmNsaWVudFggLSByLmxlZnQgLSB0aGlzLnBhblgpIC8gdGhpcy56b29tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5jbGllbnRZIC0gci50b3AgLSB0aGlzLnBhblkpIC8gdGhpcy56b29tLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XHJcbiAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC51bmRvXCIpKVxyXG4gICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJ1bmRvXCIpXHJcbiAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnVuZG8oKSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LnJlZG9cIikpXHJcbiAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInJlZG9cIilcclxuICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMucmVkbygpKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XHJcbiAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5nbG9iYWxTdHlsZVwiKSlcclxuICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicGFsZXR0ZVwiKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy5zaG93U3R5bGVNb2RhbCgpKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2hvd01lbnUobWVudSwgZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNob3dOb2RlQ3R4KGU6IE1vdXNlRXZlbnQsIG5kOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICB0aGlzLmNsb3NlUG9wKCk7XHJcbiAgICAgICAgY29uc3QgbWVudSA9IG5ldyBNZW51KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNdWx0aSgpKSB7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQoXCJjdHguYmF0Y2hEZWxcIikgKyBcIiAoXCIgKyB0aGlzLmFsbFNlbCgpLnNpemUgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJ0cmFzaFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuYmF0Y2hEZWwoKSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5lZGl0U3R5bGVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJwYWxldHRlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy5zaG93Tm9kZVN0eWxlRWRpdG9yKGUpKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguZWRpdFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInBlbmNpbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0SWQgPSBuZC5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LnN0eWxlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicGFsZXR0ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuc2hvd05vZGVTdHlsZUVkaXRvcihlKSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5jb3B5XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwiY29weVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWwxKG5kLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3B5Tm9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5jdXRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJzY2lzc29yc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWwxKG5kLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3B5Tm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkKVxyXG4gICAgICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHgucGFzdGVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwiY2xpcGJvYXJkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhc3RlTm9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LmNoaWxkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicGx1c1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWwxKG5kLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZE5vZGUobmQuaXNSb290ID8gXCJyaWdodFwiIDogdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKG5kLmlzUm9vdClcclxuICAgICAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LmxlZnRDaGlsZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJhcnJvdy1sZWZ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZExlZnRDaGlsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICghbmQuaXNSb290KVxyXG4gICAgICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguc2libGluZ1wiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJwbHVzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNpYmxpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguZGVsZXRlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwidHJhc2hcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dNZW51KG1lbnUsIGUpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBiYXRjaERlbCgpIHtcclxuICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpZCBvZiB0aGlzLmFsbFNlbCgpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvb3RzLnNvbWUoKHIpID0+IHIuaWQgPT09IGlkKSlcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdHMgPSB0aGlzLnJvb3RzLmZpbHRlcigocikgPT4gci5pZCAhPT0gaWQpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMucmVtQWxsKGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbHJTZWwoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHN0YXJ0Qm94KGx4OiBudW1iZXIsIGx5OiBudW1iZXIsIHNoaWZ0OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5ib3hTZWwgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYm94U2hpZnQgPSBzaGlmdDtcclxuICAgICAgICB0aGlzLmJzeCA9IGx4O1xyXG4gICAgICAgIHRoaXMuYnN5ID0gbHk7XHJcbiAgICAgICAgdGhpcy5iY3ggPSBseDtcclxuICAgICAgICB0aGlzLmJjeSA9IGx5O1xyXG4gICAgICAgIHRoaXMuYm94RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgXCJyZWN0XCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZ2JhKDU5LDEzMCwyNDYsMC4wNilcIik7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJyZ2JhKDU5LDEzMCwyNDYsMC40KVwiKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjFcIik7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiNiAzXCIpO1xyXG4gICAgICAgIHRoaXMuYm94RWwuc2V0QXR0cmlidXRlKFwicnhcIiwgXCI0XCIpO1xyXG4gICAgICAgIC8vIGJveC1zZWxlY3QgcG9pbnRlci1ldmVudHMgaGFuZGxlZCBieSBDU1NcclxuICAgICAgICB0aGlzLm92ZXJsYXlHLmFwcGVuZENoaWxkKHRoaXMuYm94RWwpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1cGRCb3gobHg6IG51bWJlciwgbHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYmN4ID0gbHg7XHJcbiAgICAgICAgdGhpcy5iY3kgPSBseTtcclxuICAgICAgICBpZiAoIXRoaXMuYm94RWwpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKE1hdGgubWluKHRoaXMuYnN4LCBseCkpKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKE1hdGgubWluKHRoaXMuYnN5LCBseSkpKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyhNYXRoLmFicyhseCAtIHRoaXMuYnN4KSkpO1xyXG4gICAgICAgIHRoaXMuYm94RWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhNYXRoLmFicyhseSAtIHRoaXMuYnN5KSkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBlbmRCb3goX2U6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmJveFNlbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYm94RWw/LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuYm94RWwgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IGJ4MSA9IE1hdGgubWluKHRoaXMuYnN4LCB0aGlzLmJjeCksXHJcbiAgICAgICAgICAgIGJ5MSA9IE1hdGgubWluKHRoaXMuYnN5LCB0aGlzLmJjeSksXHJcbiAgICAgICAgICAgIGJ4MiA9IE1hdGgubWF4KHRoaXMuYnN4LCB0aGlzLmJjeCksXHJcbiAgICAgICAgICAgIGJ5MiA9IE1hdGgubWF4KHRoaXMuYnN5LCB0aGlzLmJjeSk7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGJ4MiAtIGJ4MSkgPCA1ICYmIE1hdGguYWJzKGJ5MiAtIGJ5MSkgPCA1KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5ib3hTaGlmdCkgdGhpcy5jbHJTZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgICAgICBjb25zdCBjaGsgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5sID0gbi54IC0gbi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICBuciA9IG4ueCArIG4ud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgbnQgPSBuLnkgLSBuLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICBuYiA9IG4ueSArIG4uaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgaWYgKG5yID49IGJ4MSAmJiBubCA8PSBieDIgJiYgbmIgPj0gYnkxICYmIG50IDw9IGJ5MikgaWRzLmFkZChuLmlkKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIGNoayhjKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSBjaGsocik7XHJcbiAgICAgICAgaWYgKHRoaXMuYm94U2hpZnQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHRoaXMudG9nU2VsKGlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB0aGlzLm11bHRpU2VsLmFkZChpZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm11bHRpU2VsLnNpemUgPT09IDEpIHRoaXMuc2VsMShbLi4udGhpcy5tdWx0aVNlbF1bMF0pO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLm11bHRpU2VsLnNpemUgPiAxKSB0aGlzLnNlbElkID0gWy4uLnRoaXMubXVsdGlTZWxdWzBdO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuY2xyU2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzRGVzYyh0Z3Q6IE1pbmROb2RlRGF0YSwgcGlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBkID0gdGhpcy5mQWxsKHBpZCk7XHJcbiAgICAgICAgcmV0dXJuIGQgPyB0aGlzLmZOKHRndC5pZCwgZCkgIT09IG51bGwgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZGV0VGd0KFxyXG4gICAgICAgIGxlZnRYOiBudW1iZXIsXHJcbiAgICAgICAgcmlnaHRYOiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyLFxyXG4gICAgICAgIGRpZDogc3RyaW5nLFxyXG4gICAgKTogeyBpZDogc3RyaW5nOyB6b25lOiBcImNoaWxkXCIgfCBcImJlZm9yZVwiIHwgXCJhZnRlclwiIH0gfCBudWxsIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICBjb25zdCBoID0gdGhpcy5fZHQobGVmdFgsIHJpZ2h0WCwgeSwgciwgZGlkKTtcclxuICAgICAgICAgICAgaWYgKGgpIHJldHVybiBoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2R0KFxyXG4gICAgICAgIGxlZnRYOiBudW1iZXIsXHJcbiAgICAgICAgcmlnaHRYOiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyLFxyXG4gICAgICAgIG46IE1pbmROb2RlRGF0YSxcclxuICAgICAgICBkaWQ6IHN0cmluZyxcclxuICAgICk6IHsgaWQ6IHN0cmluZzsgem9uZTogXCJjaGlsZFwiIHwgXCJiZWZvcmVcIiB8IFwiYWZ0ZXJcIiB9IHwgbnVsbCB7XHJcbiAgICAgICAgLy8gQmxvY2sgZHJvcCBvbnRvIGFueSBzZWxlY3RlZCBub2RlIG9yIGl0cyBkZXNjZW5kYW50c1xyXG4gICAgICAgIGNvbnN0IHNlbElkcyA9IHRoaXMuYWxsU2VsKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBzaWQgb2Ygc2VsSWRzKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmlkID09PSBzaWQgfHwgdGhpcy5pc0Rlc2Mobiwgc2lkKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLmlkID09PSBkaWQgfHwgdGhpcy5pc0Rlc2MobiwgZGlkKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgLy8gVXNlIHJpZ2h0IGVkZ2UgZm9yIGxlZnQtc2lkZSBub2RlcywgbGVmdCBlZGdlIGZvciByaWdodC1zaWRlIG5vZGVzXHJcbiAgICAgICAgY29uc3QgeCA9IGxlZnRYO1xyXG4gICAgICAgIGNvbnN0IHBhZCA9IDI1O1xyXG4gICAgICAgIGNvbnN0IGwgPSBuLnggLSBuLndpZHRoIC8gMiAtIHBhZCxcclxuICAgICAgICAgICAgciA9IG4ueCArIG4ud2lkdGggLyAyICsgcGFkLFxyXG4gICAgICAgICAgICB0b3AgPSBuLnkgLSBuLmhlaWdodCAvIDIgLSBwYWQsXHJcbiAgICAgICAgICAgIGIgPSBuLnkgKyBuLmhlaWdodCAvIDIgKyBwYWQ7XHJcbiAgICAgICAgaWYgKHggPj0gbCAmJiB4IDw9IHIgJiYgeSA+PSB0b3AgJiYgeSA8PSBiKSB7XHJcbiAgICAgICAgICAgIGxldCB6OiBcImNoaWxkXCIgfCBcImJlZm9yZVwiIHwgXCJhZnRlclwiID0gXCJjaGlsZFwiO1xyXG4gICAgICAgICAgICBpZiAoIW4uaXNSb290KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoID0gbi5oZWlnaHQgKyBwYWQgKiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ5ID0geSAtIHRvcDtcclxuICAgICAgICAgICAgICAgIGlmIChyeSA8IGggKiAwLjQpIHogPSBcImJlZm9yZVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocnkgPiBoICogMC42KSB6ID0gXCJhZnRlclwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlkOiBuLmlkLCB6b25lOiB6IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGggPSB0aGlzLl9kdChsZWZ0WCwgcmlnaHRYLCB5LCBjLCBkaWQpO1xyXG4gICAgICAgICAgICBpZiAoaCkgcmV0dXJuIGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW1UcmVlKGlkOiBzdHJpbmcsIG46IE1pbmROb2RlRGF0YSk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobi5jaGlsZHJlbltpXS5pZCA9PT0gaWQpIHJldHVybiBuLmNoaWxkcmVuLnNwbGljZShpLCAxKVswXTtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMucmVtVHJlZShpZCwgbi5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIGlmIChmKSByZXR1cm4gZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlbUFsbChpZDogc3RyaW5nKTogTWluZE5vZGVEYXRhIHwgbnVsbCB7XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMucmVtVHJlZShpZCwgcik7XHJcbiAgICAgICAgICAgIGlmIChmKSByZXR1cm4gZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGluc1RyZWUoXHJcbiAgICAgICAgbmk6IE1pbmROb2RlRGF0YSxcclxuICAgICAgICB0aWQ6IHN0cmluZyxcclxuICAgICAgICB6b25lOiBcImNoaWxkXCIgfCBcImJlZm9yZVwiIHwgXCJhZnRlclwiLFxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgdG4gPSB0aGlzLmZBbGwodGlkKTtcclxuICAgICAgICBpZiAoIXRuKSByZXR1cm47XHJcbiAgICAgICAgLy8gSW5oZXJpdCBzaWRlIGZyb20gdGFyZ2V0XHJcbiAgICAgICAgY29uc3Qgc2V0U2lkZSA9IChuOiBNaW5kTm9kZURhdGEsIHM/OiBcImxlZnRcIiB8IFwicmlnaHRcIikgPT4ge1xyXG4gICAgICAgICAgICBuLnNpZGUgPSBzO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgc2V0U2lkZShjLCBzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh6b25lID09PSBcImNoaWxkXCIgfHwgdG4uaXNSb290KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFNpZGUgPSB0bi5pc1Jvb3QgPyBuaS5zaWRlIDogdG4uc2lkZTtcclxuICAgICAgICAgICAgc2V0U2lkZShuaSwgdGFyZ2V0U2lkZSk7XHJcbiAgICAgICAgICAgIHRuLmNoaWxkcmVuLnB1c2gobmkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNpZGUobmksIHRuLnNpZGUpO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLmZQKHRpZCwgcik7XHJcbiAgICAgICAgICAgIGlmIChwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBwLmNoaWxkcmVuLmZpbmRJbmRleCgoYykgPT4gYy5pZCA9PT0gdGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5jaGlsZHJlbi5zcGxpY2Uoem9uZSA9PT0gXCJiZWZvcmVcIiA/IGlkeCA6IGlkeCArIDEsIDAsIG5pKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZOKGlkOiBzdHJpbmcsIG46IE1pbmROb2RlRGF0YSk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGlmIChuLmlkID09PSBpZCkgcmV0dXJuIG47XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMuZk4oaWQsIGMpO1xyXG4gICAgICAgICAgICBpZiAoZikgcmV0dXJuIGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmUChjaWQ6IHN0cmluZywgbjogTWluZE5vZGVEYXRhKTogTWluZE5vZGVEYXRhIHwgbnVsbCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGMuaWQgPT09IGNpZCkgcmV0dXJuIG47XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLmZQKGNpZCwgYyk7XHJcbiAgICAgICAgICAgIGlmIChmKSByZXR1cm4gZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZQQShjaWQ6IHN0cmluZyk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLmZQKGNpZCwgcik7XHJcbiAgICAgICAgICAgIGlmIChwKSByZXR1cm4gcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGJpbmRFdnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGNjID0gdGhpcy5jYztcclxuICAgICAgICBjYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRndCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh0Z3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInRleHRhcmVhXCIpIHJldHVybjtcclxuICAgICAgICAgICAgY2MuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgICAgICAgICAvLyBGSVg6IGlmIHNwYWNlIGhlbGQsIEFMV0FZUyBzdGFydCBjYW52YXMgZHJhZyByZWdhcmRsZXNzIG9mIGNsaWNrIHRhcmdldFxyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGFjZURvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0N2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc214ID0gZS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbXkgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgICAgICAgICBjYy50b2dnbGVDbGFzcyhcIm16LWN1cnNvci1ncmFiYmluZ1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0Z3QgPT09IHRoaXMuc3ZnRWwgfHxcclxuICAgICAgICAgICAgICAgIHRndCA9PT0gY2MgfHxcclxuICAgICAgICAgICAgICAgIHRndC50YWdOYW1lID09PSBcInN2Z1wiIHx8XHJcbiAgICAgICAgICAgICAgICB0Z3QudGFnTmFtZSA9PT0gXCJnXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21taXRFZGl0KSB0aGlzLmNvbW1pdEVkaXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCb3goXHJcbiAgICAgICAgICAgICAgICAgICAgKGUuY2xpZW50WCAtIGNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSB0aGlzLnBhblgpIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tLFxyXG4gICAgICAgICAgICAgICAgICAgIChlLmNsaWVudFkgLSBjYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0aGlzLnBhblkpIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tLFxyXG4gICAgICAgICAgICAgICAgICAgIGUuc2hpZnRLZXksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRndCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRndCA9PT0gdGhpcy5zdmdFbCB8fFxyXG4gICAgICAgICAgICAgICAgdGd0ID09PSBjYyB8fFxyXG4gICAgICAgICAgICAgICAgW1wic3ZnXCIsIFwiZ1wiLCBcInBhdGhcIl0uaW5jbHVkZXModGd0LnRhZ05hbWUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q2FudmFzQ3R4KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYyA9IGNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBseCA9IChlLmNsaWVudFggLSByYy5sZWZ0IC0gdGhpcy5wYW5YKSAvIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgIGx5ID0gKGUuY2xpZW50WSAtIHJjLnRvcCAtIHRoaXMucGFuWSkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJveFNlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRCb3gobHgsIGx5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBseCAtIHRoaXMuZHMuc3RhcnRYLFxyXG4gICAgICAgICAgICAgICAgICAgIGR5ID0gbHkgLSB0aGlzLmRzLnN0YXJ0WTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5kcy5pc0RyYWdnaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKE1hdGguYWJzKGR4KSA+IDUgfHwgTWF0aC5hYnMoZHkpID4gNSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRzLmlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRzLmlzUm9vdERyYWcpIHRoaXMucm9vdERGKGR4LCBkeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLmNoaWxkREYobHgsIGx5LCBkeCwgZHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdDdikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5YICs9IGUuY2xpZW50WCAtIHRoaXMuc214O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5ZICs9IGUuY2xpZW50WSAtIHRoaXMuc215O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbXggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNteSA9IGUuY2xpZW50WTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkVHgoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwid2hlZWxcIixcclxuICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtiID0gdGhpcy5rYjtcclxuICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZSA9IGUuZGVsdGFZID4gMCA/IDAuOSA6IDEuMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB6ZiA9IGtiLmludmVydFpvb20gPyAxIC8gYmFzZSA6IGJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnogPSBNYXRoLm1heCgwLjEsIE1hdGgubWluKHRoaXMuem9vbSAqIHpmLCAzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IGNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteCA9IGUuY2xpZW50WCAtIHIubGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXkgPSBlLmNsaWVudFkgLSByLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhblggPSBteCAtIChteCAtIHRoaXMucGFuWCkgKiAobnogLyB0aGlzLnpvb20pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuWSA9IG15IC0gKG15IC0gdGhpcy5wYW5ZKSAqIChueiAvIHRoaXMuem9vbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tID0gbno7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkID0gZS5kZWx0YVggfHwgZS5kZWx0YVk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5YIC09IGtiLmludmVydFNjcm9sbFggPyAtZCA6IGQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuWCAtPSBrYi5pbnZlcnRTY3JvbGxYID8gLWUuZGVsdGFYIDogZS5kZWx0YVg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5ZIC09IGtiLmludmVydFNjcm9sbFkgPyAtZS5kZWx0YVkgOiBlLmRlbHRhWTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkVHgoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBwYXNzaXZlOiBmYWxzZSB9LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJvb3RERihkeDogbnVtYmVyLCBkeTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRzPy5pc1Jvb3REcmFnKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgcm4gPSB0aGlzLmZBbGwodGhpcy5kcy5ub2RlSWQpO1xyXG4gICAgICAgIGlmICghcm4pIHJldHVybjtcclxuICAgICAgICBybi54ID0gdGhpcy5kcy5uc3ggKyBkeDtcclxuICAgICAgICBybi55ID0gdGhpcy5kcy5uc3kgKyBkeTtcclxuICAgICAgICB0aGlzLmRvTGF5b3V0KHJuKTtcclxuICAgICAgICBpZiAoKHRoaXMuZHMgYXMgUm9vdERyYWcpLnBlZXJzKVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgKHRoaXMuZHMgYXMgUm9vdERyYWcpLnBlZXJzISkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG4gPSB0aGlzLmZBbGwocC5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBwbi54ID0gcC5zeCArIGR4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBuLnkgPSBwLnN5ICsgZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0xheW91dChwbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB0aGlzLmVkZ2VzRy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLmRyYXdFZGdlcyhyKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZPKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNoaWxkREYobHg6IG51bWJlciwgbHk6IG51bWJlciwgZHg6IG51bWJlciwgZHk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmRzIGFzIENoaWxkRHJhZztcclxuICAgICAgICBpZiAoIWQuZ2hvc3RFbCkge1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtbi1cIiArIGQubm9kZUlkKTtcclxuICAgICAgICAgICAgaWYgKG9yaWcpIG9yaWcudG9nZ2xlQ2xhc3MoXCJtei1kcmFnLXRyYW5zcGFyZW50XCIsIHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBkbiA9IHRoaXMuZkFsbChkLm5vZGVJZCk7XHJcbiAgICAgICAgICAgIGlmIChkbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2hvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9yZWlnbk9iamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGdob3N0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyhkbi53aWR0aCkpO1xyXG4gICAgICAgICAgICAgICAgZ2hvc3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhkbi5oZWlnaHQpKTtcclxuICAgICAgICAgICAgICAgIGdob3N0LnNldEF0dHJpYnV0ZShcIm92ZXJmbG93XCIsIFwidmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vIGdob3N0IG9wYWNpdHkgaGFuZGxlZCBieSBtei1kcmFnLWdob3N0IGNsYXNzXHJcbiAgICAgICAgICAgICAgICAvLyBnaG9zdCBwb2ludGVyLWV2ZW50cyBoYW5kbGVkIGJ5IG16LWRyYWctZ2hvc3QgY2xhc3NcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGdkLmFkZENsYXNzKFwibXotZHJhZy1naG9zdFwiKTtcclxuICAgICAgICAgICAgICAgIGdkLmlubmVyVGV4dCA9IGRuLnRleHQ7XHJcbiAgICAgICAgICAgICAgICBnaG9zdC5hcHBlbmRDaGlsZChnZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlHLmFwcGVuZENoaWxkKGdob3N0KTtcclxuICAgICAgICAgICAgICAgIGQuZ2hvc3RFbCA9IGdob3N0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpbmQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJnYmEoNTksMTMwLDI0NiwwLjEyKVwiKTtcclxuICAgICAgICAgICAgICAgIGluZC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgdGhpcy5zdHlsZS5zZWxlY3Rpb25Db2xvcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgICAgICAgICAgIGluZC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIyXCIpO1xyXG4gICAgICAgICAgICAgICAgaW5kLnNldEF0dHJpYnV0ZShcInJ4XCIsIFN0cmluZyh0aGlzLnN0eWxlLm5vZGVCb3JkZXJSYWRpdXMpKTtcclxuICAgICAgICAgICAgICAgIC8vIGluZGljYXRvciBwb2ludGVyLWV2ZW50cyBoYW5kbGVkIGJ5IENTU1xyXG4gICAgICAgICAgICAgICAgaW5kLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5Ry5hcHBlbmRDaGlsZChpbmQpO1xyXG4gICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbCA9IGluZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkbiA9IHRoaXMuZkFsbChkLm5vZGVJZCk7XHJcbiAgICAgICAgaWYgKGRuICYmIGQuZ2hvc3RFbCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xlZnRTaWRlID0gZG4uc2lkZSA9PT0gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGVkZ2VYID0gaXNMZWZ0U2lkZVxyXG4gICAgICAgICAgICAgICAgPyBkbi54ICsgZHggKyBkbi53aWR0aCAvIDJcclxuICAgICAgICAgICAgICAgIDogZG4ueCArIGR4IC0gZG4ud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBjb25zdCBneSA9IGRuLnkgKyBkeTtcclxuICAgICAgICAgICAgZC5naG9zdEVsLnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKGRuLnggKyBkeCAtIGRuLndpZHRoIC8gMikpO1xyXG4gICAgICAgICAgICBkLmdob3N0RWwuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoZ3kgLSBkbi5oZWlnaHQgLyAyKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRndCA9IHRoaXMuZGV0VGd0KGVkZ2VYLCBlZGdlWCwgZ3ksIGQubm9kZUlkKTtcclxuICAgICAgICAgICAgaWYgKHRndCAmJiBkLmluZGljYXRvckVsKSB7XHJcbiAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRuID0gdGhpcy5mQWxsKHRndC5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGd0LnpvbmUgPT09IFwiY2hpbGRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnggLSB0bi53aWR0aCAvIDIgLSA0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh0bi55IC0gdG4uaGVpZ2h0IC8gMiAtIDQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh0bi53aWR0aCArIDgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcodG4uaGVpZ2h0ICsgOCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0Z3Quem9uZSA9PT0gXCJiZWZvcmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnggLSB0bi53aWR0aCAvIDIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnkgLSB0bi5oZWlnaHQgLyAyIC0gNiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHRuLndpZHRoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiM1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnggLSB0bi53aWR0aCAvIDIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnkgKyB0bi5oZWlnaHQgLyAyICsgMyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHRuLndpZHRoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiM1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZC5pbmRpY2F0b3JFbClcclxuICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRDaGlsZE5vZGUoZm9yY2VTaWRlPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsSWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBwID0gdGhpcy5mQWxsKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghcCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICBjb25zdCB0eHQgPSB0aGlzLnBsdWdpbi5nZXRDaGlsZE5hbWUoKTtcclxuICAgICAgICBjb25zdCBuOiBNaW5kTm9kZURhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxyXG4gICAgICAgICAgICB0ZXh0OiB0eHQsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbGNXKHR4dCwgZmFsc2UpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY2FsY0godHh0LCBmYWxzZSksXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChwLmNvbm5lY3Rpb25Db2xvcikgbi5jb25uZWN0aW9uQ29sb3IgPSBwLmNvbm5lY3Rpb25Db2xvcjtcclxuICAgICAgICBpZiAocC5jb25uZWN0aW9uV2lkdGgpIG4uY29ubmVjdGlvbldpZHRoID0gcC5jb25uZWN0aW9uV2lkdGg7XHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHNpZGVcclxuICAgICAgICBpZiAoZm9yY2VTaWRlKSBuLnNpZGUgPSBmb3JjZVNpZGU7XHJcbiAgICAgICAgZWxzZSBpZiAocC5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlyID0gdGhpcy5zdHlsZS5ub2RlRGlyZWN0aW9uO1xyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBcImxlZnRcIikgbi5zaWRlID0gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgIGVsc2Ugbi5zaWRlID0gXCJyaWdodFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG4uc2lkZSA9IHAuc2lkZSB8fCBcInJpZ2h0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAuY2hpbGRyZW4ucHVzaChuKTtcclxuICAgICAgICB0aGlzLmFzc2lnblJhaW5ib3dDb2xvcihwLCBuKTtcclxuICAgICAgICB0aGlzLnNlbDEobi5pZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmVkaXRPbkNyZWF0ZSkgdGhpcy5lZGl0SWQgPSBuLmlkO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkTGVmdENoaWxkKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGROb2RlKFwibGVmdFwiKTtcclxuICAgIH1cclxuICAgIC8vIEVudGVyIG9uIHJvb3QgPSBhZGQgY2hpbGQuIEVudGVyIG9uIGNoaWxkID0gaW5zZXJ0IHNpYmxpbmcgQUZURVIgY3VycmVudFxyXG4gICAgcHJpdmF0ZSBhZGRTaWJsaW5nKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxJZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHNlbCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIXNlbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChzZWwuaXNSb290KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGROb2RlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuZlBBKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghcCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICBjb25zdCB0eHQgPSB0aGlzLnBsdWdpbi5nZXRDaGlsZE5hbWUoKTtcclxuICAgICAgICBjb25zdCBuOiBNaW5kTm9kZURhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxyXG4gICAgICAgICAgICB0ZXh0OiB0eHQsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbGNXKHR4dCwgZmFsc2UpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY2FsY0godHh0LCBmYWxzZSksXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgc2lkZTogc2VsLnNpZGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocC5jb25uZWN0aW9uQ29sb3IpIG4uY29ubmVjdGlvbkNvbG9yID0gcC5jb25uZWN0aW9uQ29sb3I7XHJcbiAgICAgICAgaWYgKHAuY29ubmVjdGlvbldpZHRoKSBuLmNvbm5lY3Rpb25XaWR0aCA9IHAuY29ubmVjdGlvbldpZHRoO1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHAuY2hpbGRyZW4uZmluZEluZGV4KChjKSA9PiBjLmlkID09PSB0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoaWR4ICE9PSAtMSkgcC5jaGlsZHJlbi5zcGxpY2UoaWR4ICsgMSwgMCwgbik7XHJcbiAgICAgICAgZWxzZSBwLmNoaWxkcmVuLnB1c2gobik7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25SYWluYm93Q29sb3IocCwgbik7XHJcbiAgICAgICAgdGhpcy5zZWwxKG4uaWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5lZGl0T25DcmVhdGUpIHRoaXMuZWRpdElkID0gbi5pZDtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICAvLyBGSVggIzM6IGRlbGV0ZSBzZWxlY3RzIFVQUEVSIHNpYmxpbmcgKGlkeC0xKVxyXG4gICAgcHJpdmF0ZSBkZWxOb2RlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxJZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnJvb3RzLnNvbWUoKHIpID0+IHIuaWQgPT09IHRoaXMuc2VsSWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICAgICAgdGhpcy5yb290cyA9IHRoaXMucm9vdHMuZmlsdGVyKChyKSA9PiByLmlkICE9PSB0aGlzLnNlbElkKTtcclxuICAgICAgICAgICAgdGhpcy5jbHJTZWwoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm9vdHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWwxKHRoaXMucm9vdHNbdGhpcy5yb290cy5sZW5ndGggLSAxXS5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuZlBBKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghcCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHAuY2hpbGRyZW4uZmluZEluZGV4KChjKSA9PiBjLmlkID09PSB0aGlzLnNlbElkKTtcclxuICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgcC5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICBpZiAocC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SWR4ID0gaWR4ID4gMCA/IGlkeCAtIDEgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLnNlbDEocC5jaGlsZHJlbltuZXdJZHhdLmlkKTtcclxuICAgICAgICB9IGVsc2UgdGhpcy5zZWwxKHAuaWQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ0QobmlkOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLl9nZChuaWQsIHIsIDApO1xyXG4gICAgICAgICAgICBpZiAoZCAhPT0gLTEpIHJldHVybiBkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9nZChuaWQ6IHN0cmluZywgbjogTWluZE5vZGVEYXRhLCBkOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChuLmlkID09PSBuaWQpIHJldHVybiBkO1xyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLl9nZChuaWQsIGMsIGQgKyAxKTtcclxuICAgICAgICAgICAgaWYgKHIgIT09IC0xKSByZXR1cm4gcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjRGVwKHRkOiBudW1iZXIpOiBNaW5kTm9kZURhdGFbXSB7XHJcbiAgICAgICAgY29uc3QgbzogTWluZE5vZGVEYXRhW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5fY2QociwgMCwgdGQsIG8pO1xyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfY2QobjogTWluZE5vZGVEYXRhLCBkOiBudW1iZXIsIHRkOiBudW1iZXIsIG86IE1pbmROb2RlRGF0YVtdKSB7XHJcbiAgICAgICAgaWYgKGQgPT09IHRkKSB7XHJcbiAgICAgICAgICAgIG8ucHVzaChuKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgdGhpcy5fY2QoYywgZCArIDEsIHRkLCBvKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXJyb3coZGlyOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsSWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgaWYgKCFjdXIpIHJldHVybjtcclxuICAgICAgICBjb25zdCBpc0xlZnQgPSBjdXIuc2lkZSA9PT0gXCJsZWZ0XCI7XHJcbiAgICAgICAgaWYgKGRpciA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcclxuICAgICAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyID0gdGhpcy5mUEEodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyKSB0aGlzLnNlbDEocGFyLmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJjID0gY3VyLmNoaWxkcmVuPy5maWx0ZXIoKGMpID0+IGMuc2lkZSAhPT0gXCJsZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJjPy5sZW5ndGgpIHRoaXMuc2VsMShyY1swXS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRpciA9PT0gXCJBcnJvd0xlZnRcIikge1xyXG4gICAgICAgICAgICBpZiAoaXNMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYyA9IGN1ci5jaGlsZHJlbj8ubGVuZ3RoID8gY3VyLmNoaWxkcmVuIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChsYykgdGhpcy5zZWwxKGxjWzBdLmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXIuaXNSb290KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYyA9IGN1ci5jaGlsZHJlbj8uZmlsdGVyKChjKSA9PiBjLnNpZGUgPT09IFwibGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChsYz8ubGVuZ3RoKSB0aGlzLnNlbDEobGNbMF0uaWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyID0gdGhpcy5mUEEodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyKSB0aGlzLnNlbDEocGFyLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmdEKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICBpZiAoZCA9PT0gLTEpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgcGVlcnMgPSB0aGlzLmNEZXAoZCk7XHJcbiAgICAgICAgICAgIGlmIChwZWVycy5sZW5ndGggPD0gMSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSBwZWVycy5maW5kSW5kZXgoKG4pID0+IG4uaWQgPT09IHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBcIkFycm93VXBcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsMShwZWVyc1tpZHggPiAwID8gaWR4IC0gMSA6IHBlZXJzLmxlbmd0aCAtIDFdLmlkKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnNlbDEocGVlcnNbaWR4IDwgcGVlcnMubGVuZ3RoIC0gMSA/IGlkeCArIDEgOiAwXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8vIHNyYy90eXBlcy50c1xyXG5pbXBvcnQgdHlwZSB7IExhbmd1YWdlIH0gZnJvbSBcIi4vaTE4blwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNaW5kTm9kZURhdGEge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIGNoaWxkcmVuOiBNaW5kTm9kZURhdGFbXTtcclxuICAgIGlzUm9vdD86IGJvb2xlYW47XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBzdHlsZU92ZXJyaWRlPzogTm9kZVN0eWxlT3ZlcnJpZGU7XHJcbiAgICBjb25uZWN0aW9uQ29sb3I/OiBzdHJpbmc7XHJcbiAgICBjb25uZWN0aW9uV2lkdGg/OiBudW1iZXI7XHJcbiAgICBzaWRlPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBOb2RlU3R5bGVPdmVycmlkZSB7XHJcbiAgICBiZ0NvbG9yPzogc3RyaW5nO1xyXG4gICAgdGV4dENvbG9yPzogc3RyaW5nO1xyXG4gICAgZm9udFNpemU/OiBudW1iZXI7XHJcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xyXG4gICAgYm9yZGVyU3R5bGU/OiBCb3JkZXJTdHlsZTtcclxuICAgIGJvcmRlckNvbG9yPzogc3RyaW5nO1xyXG4gICAgYm9yZGVyV2lkdGg/OiBudW1iZXI7XHJcbiAgICBib3JkZXJSYWRpdXM/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgQm9yZGVyU3R5bGUgPSBcInNvbGlkXCIgfCBcImRhc2hlZFwiIHwgXCJkb3R0ZWRcIiB8IFwiZG91YmxlXCIgfCBcIm5vbmVcIjtcclxuZXhwb3J0IHR5cGUgQ29ubmVjdGlvbkxpbmVTdHlsZSA9XHJcbiAgICB8IFwiYmV6aWVyXCJcclxuICAgIHwgXCJzdHJhaWdodFwiXHJcbiAgICB8IFwiY3VydmVkXCJcclxuICAgIHwgXCJzdGVwXCJcclxuICAgIHwgXCJicmFja2V0XCJcclxuICAgIHwgXCJsb29zZVwiO1xyXG5leHBvcnQgdHlwZSBUZXh0QWxpZ24gPSBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XHJcbmV4cG9ydCB0eXBlIE5vZGVEaXJlY3Rpb24gPSBcInJpZ2h0XCIgfCBcImxlZnRcIiB8IFwiYm90aFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNaW5kTWFwU3R5bGUge1xyXG4gICAgbm9kZUJnQ29sb3I6IHN0cmluZztcclxuICAgIG5vZGVUZXh0Q29sb3I6IHN0cmluZztcclxuICAgIG5vZGVGb250U2l6ZTogbnVtYmVyO1xyXG4gICAgbm9kZUZvbnRGYW1pbHk6IHN0cmluZztcclxuICAgIG5vZGVCb3JkZXJTdHlsZTogQm9yZGVyU3R5bGU7XHJcbiAgICBub2RlQm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIG5vZGVCb3JkZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgbm9kZUJvcmRlclJhZGl1czogbnVtYmVyO1xyXG4gICAgbm9kZU1pbldpZHRoOiBudW1iZXI7XHJcbiAgICBub2RlTWluSGVpZ2h0OiBudW1iZXI7XHJcbiAgICByb290QmdDb2xvcjogc3RyaW5nO1xyXG4gICAgcm9vdFRleHRDb2xvcjogc3RyaW5nO1xyXG4gICAgcm9vdEZvbnRTaXplOiBudW1iZXI7XHJcbiAgICByb290Rm9udEZhbWlseTogc3RyaW5nO1xyXG4gICAgcm9vdEJvcmRlclN0eWxlOiBCb3JkZXJTdHlsZTtcclxuICAgIHJvb3RCb3JkZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgcm9vdEJvcmRlcldpZHRoOiBudW1iZXI7XHJcbiAgICByb290Qm9yZGVyUmFkaXVzOiBudW1iZXI7XHJcbiAgICByb290TWluV2lkdGg6IG51bWJlcjtcclxuICAgIHJvb3RNaW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIGNvbm5lY3Rpb25TdHlsZTogQ29ubmVjdGlvbkxpbmVTdHlsZTtcclxuICAgIGNvbm5lY3Rpb25Db2xvcjogc3RyaW5nO1xyXG4gICAgY29ubmVjdGlvbldpZHRoOiBudW1iZXI7XHJcbiAgICBjb25uZWN0aW9uTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBjb25uZWN0aW9uUmFpbmJvdzogYm9vbGVhbjtcclxuICAgIHJhaW5ib3dQYWxldHRlOiBzdHJpbmc7XHJcbiAgICBjdXN0b21SYWluYm93czogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+O1xyXG4gICAgbm9kZURpcmVjdGlvbjogTm9kZURpcmVjdGlvbjtcclxuICAgIHNlbGVjdGlvbkNvbG9yOiBzdHJpbmc7XHJcbiAgICBzZWxlY3Rpb25XaWR0aDogbnVtYmVyO1xyXG4gICAgc2VsZWN0aW9uT3V0bGluZU9mZnNldDogbnVtYmVyO1xyXG4gICAgZWRpdE91dGxpbmVDb2xvcjogc3RyaW5nO1xyXG4gICAgZWRpdE91dGxpbmVXaWR0aDogbnVtYmVyO1xyXG4gICAgdGV4dEFsaWduOiBUZXh0QWxpZ247XHJcbiAgICBub2RlUGFkWDogbnVtYmVyO1xyXG4gICAgbm9kZUxpbmVIZWlnaHQ6IG51bWJlcjtcclxuICAgIG5vZGVHYXBZOiBudW1iZXI7XHJcbiAgICBjYW52YXNCZzogc3RyaW5nO1xyXG4gICAgdG9vbGJhclBhZFRvcDogbnVtYmVyO1xyXG4gICAgdG9vbGJhclBhZFJpZ2h0OiBudW1iZXI7XHJcbiAgICB0b29sYmFyUGFkQm90dG9tOiBudW1iZXI7XHJcbiAgICB0b29sYmFyUGFkTGVmdDogbnVtYmVyO1xyXG4gICAgdG9vbGJhclBvc2l0aW9uOiBcInRvcFwiIHwgXCJib3R0b21cIjtcclxuICAgIHRvb2xiYXJCZ0NvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQnRuQmdDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0bkJvcmRlclN0eWxlOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQnRuQm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCdG5UZXh0Q29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCb3JkZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJvcmRlcldpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2V5QmluZGluZ3Mge1xyXG4gICAgZWRpdE5vZGU6IHN0cmluZztcclxuICAgIGFkZFNpYmxpbmc6IHN0cmluZztcclxuICAgIGFkZENoaWxkOiBzdHJpbmc7XHJcbiAgICBmb2N1c05vZGU6IHN0cmluZztcclxuICAgIHVuZG86IHN0cmluZztcclxuICAgIHJlZG86IHN0cmluZztcclxuICAgIGxpbmVCcmVhazogc3RyaW5nO1xyXG4gICAgZHJhZ0NhbnZhczogc3RyaW5nO1xyXG4gICAgem9vbUluOiBzdHJpbmc7XHJcbiAgICB6b29tT3V0OiBzdHJpbmc7XHJcbiAgICB6b29tUmVzZXQ6IHN0cmluZztcclxuICAgIG5hdlVwOiBzdHJpbmc7XHJcbiAgICBuYXZEb3duOiBzdHJpbmc7XHJcbiAgICBuYXZMZWZ0OiBzdHJpbmc7XHJcbiAgICBuYXZSaWdodDogc3RyaW5nO1xyXG4gICAgaW52ZXJ0U2Nyb2xsWTogYm9vbGVhbjtcclxuICAgIGludmVydFNjcm9sbFg6IGJvb2xlYW47XHJcbiAgICBpbnZlcnRab29tOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsdWdpblNldHRpbmdzIHtcclxuICAgIHN0eWxlOiBNaW5kTWFwU3R5bGU7XHJcbiAgICBsYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICB0aGVtZTogXCJsaWdodFwiIHwgXCJkYXJrXCI7XHJcbiAgICBzaG93VG9vbGJhcjogYm9vbGVhbjtcclxuICAgIGtleUJpbmRpbmdzOiBLZXlCaW5kaW5ncztcclxuICAgIGRldmVsb3Blck1vZGU6IGJvb2xlYW47XHJcbiAgICBlZGl0T25DcmVhdGU6IGJvb2xlYW47XHJcbiAgICB0eXBlVG9FZGl0OiBib29sZWFuO1xyXG4gICAgY3VzdG9tTm9kZU5hbWVzOiBSZWNvcmQ8c3RyaW5nLCB7IHJvb3Q/OiBzdHJpbmc7IGNoaWxkPzogc3RyaW5nIH0+O1xyXG4gICAgdG9vbGJhclN0eWxlTGlnaHQ/OiBUb29sYmFyVGhlbWVDb2xvcnM7XHJcbiAgICB0b29sYmFyU3R5bGVEYXJrPzogVG9vbGJhclRoZW1lQ29sb3JzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvb2xiYXJUaGVtZUNvbG9ycyB7XHJcbiAgICB0b29sYmFyQmdDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0bkJnQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0bkJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCb3JkZXJXaWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UT09MQkFSX0xJR0hUOiBUb29sYmFyVGhlbWVDb2xvcnMgPSB7XHJcbiAgICB0b29sYmFyQmdDb2xvcjogXCIjZjVmNWY1XCIsXHJcbiAgICB0b29sYmFyQnRuQmdDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICB0b29sYmFyQnRuQm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogXCIjZDFkNWRiXCIsXHJcbiAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBcIiMzMzMzMzNcIixcclxuICAgIHRvb2xiYXJCb3JkZXJDb2xvcjogXCIjZTBlMGUwXCIsXHJcbiAgICB0b29sYmFyQm9yZGVyV2lkdGg6IDEsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UT09MQkFSX0RBUks6IFRvb2xiYXJUaGVtZUNvbG9ycyA9IHtcclxuICAgIHRvb2xiYXJCZ0NvbG9yOiBcIiMyYjJiMmJcIixcclxuICAgIHRvb2xiYXJCdG5CZ0NvbG9yOiBcIiMzYzNjM2NcIixcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogXCJzb2xpZFwiLFxyXG4gICAgdG9vbGJhckJ0bkJvcmRlckNvbG9yOiBcIiM1NTU1NTVcIixcclxuICAgIHRvb2xiYXJCdG5UZXh0Q29sb3I6IFwiI2UwZTBlMFwiLFxyXG4gICAgdG9vbGJhckJvcmRlckNvbG9yOiBcIiM1MDUwNTBcIixcclxuICAgIHRvb2xiYXJCb3JkZXJXaWR0aDogMSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSQUlOQk9XX1BBTEVUVEVTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7XHJcbiAgICBjbGFzc2ljOiBbXHJcbiAgICAgICAgXCIjMTFjZDNjXCIsXHJcbiAgICAgICAgXCIjMzQ5OGRiXCIsXHJcbiAgICAgICAgXCIjZjQyNTBlXCIsXHJcbiAgICAgICAgXCIjZjg4ZDJmXCIsXHJcbiAgICAgICAgXCIjMWFkNWVkXCIsXHJcbiAgICAgICAgXCIjYjBiMGIwXCIsXHJcbiAgICAgICAgXCIjYzg1YmYzXCIsXHJcbiAgICAgICAgXCIjNDBjZGIxXCIsXHJcbiAgICAgICAgXCIjNmI5OWY2XCIsXHJcbiAgICAgICAgXCIjZmIzOTk3ZDhcIixcclxuICAgICAgICBcIiM4MDcwZjlcIixcclxuICAgICAgICBcIiNjYjcwZjVcIixcclxuICAgIF0sXHJcbiAgICBwYXN0ZWw6IFtcclxuICAgICAgICBcIiNiYWZmYzlcIixcclxuICAgICAgICBcIiNiYWUxZmZcIixcclxuICAgICAgICBcIiNmZmIzYmFcIixcclxuICAgICAgICBcIiNmZmRmYmFcIixcclxuICAgICAgICBcIiNmZmZmYmFcIixcclxuICAgICAgICBcIiNlOGJhZmZcIixcclxuICAgICAgICBcIiNmZmM5ZGVcIixcclxuICAgICAgICBcIiNjOWZmZTVcIixcclxuICAgICAgICBcIiNjOWQ2ZmZcIixcclxuICAgICAgICBcIiNmZmU4YzlcIixcclxuICAgICAgICBcIiNkNGJhZmZcIixcclxuICAgICAgICBcIiNiYWZmZWFcIixcclxuICAgIF0sXHJcbiAgICBmb3Jlc3Q6IFtcclxuICAgICAgICBcIiMyN2FlNjBcIixcclxuICAgICAgICBcIiMyZWNjNzFcIixcclxuICAgICAgICBcIiMxYWJjOWNcIixcclxuICAgICAgICBcIiMxNmEwODVcIixcclxuICAgICAgICBcIiMwMDY0MDBcIixcclxuICAgICAgICBcIiMyMjhCMjJcIixcclxuICAgICAgICBcIiMzMkNEMzJcIixcclxuICAgICAgICBcIiMzQ0IzNzFcIixcclxuICAgICAgICBcIiMyRThCNTdcIixcclxuICAgICAgICBcIiM2NkNEQUFcIixcclxuICAgICAgICBcIiM4RkJDOEZcIixcclxuICAgICAgICBcIiM5MEVFOTBcIixcclxuICAgIF0sXHJcbiAgICBjYW5keTogW1xyXG4gICAgICAgIFwiI0ZGNkY5MVwiLFxyXG4gICAgICAgIFwiI0ZGOTY3MVwiLFxyXG4gICAgICAgIFwiI0ZGQzc1RlwiLFxyXG4gICAgICAgIFwiI0Y5Rjg3MVwiLFxyXG4gICAgICAgIFwiI0Q2NURCMVwiLFxyXG4gICAgICAgIFwiIzg0NUVDMlwiLFxyXG4gICAgICAgIFwiIzJDNzNEMlwiLFxyXG4gICAgICAgIFwiIzAwODlCQVwiLFxyXG4gICAgICAgIFwiIzAwOEU5QlwiLFxyXG4gICAgICAgIFwiIzAwOEY3QVwiLFxyXG4gICAgICAgIFwiI0IwQThCOVwiLFxyXG4gICAgICAgIFwiI0MzNEEzNlwiLFxyXG4gICAgXSxcclxuICAgIG5lb246IFtcclxuICAgICAgICBcIiNmZjAwNTVcIixcclxuICAgICAgICBcIiNmZjY2MDBcIixcclxuICAgICAgICBcIiNmZmNjMDBcIixcclxuICAgICAgICBcIiMwMGZmODhcIixcclxuICAgICAgICBcIiMwMDg4ZmZcIixcclxuICAgICAgICBcIiNhYTAwZmZcIixcclxuICAgICAgICBcIiNmZjAwOTlcIixcclxuICAgICAgICBcIiMwMGZmY2NcIixcclxuICAgICAgICBcIiMwMGNjZmZcIixcclxuICAgICAgICBcIiNmZmZmMDBcIixcclxuICAgICAgICBcIiNmZjAwZmZcIixcclxuICAgICAgICBcIiMwMGZmMDBcIixcclxuICAgIF0sXHJcbiAgICBlYXJ0aDogW1xyXG4gICAgICAgIFwiIzhCNDUxM1wiLFxyXG4gICAgICAgIFwiI0EwNTIyRFwiLFxyXG4gICAgICAgIFwiI0NEODUzRlwiLFxyXG4gICAgICAgIFwiI0RFQjg4N1wiLFxyXG4gICAgICAgIFwiI0QyQjQ4Q1wiLFxyXG4gICAgICAgIFwiI0JDOEY4RlwiLFxyXG4gICAgICAgIFwiI0Y0QTQ2MFwiLFxyXG4gICAgICAgIFwiI0RBQTUyMFwiLFxyXG4gICAgICAgIFwiI0I4ODYwQlwiLFxyXG4gICAgICAgIFwiIzgwODAwMFwiLFxyXG4gICAgICAgIFwiIzZCOEUyM1wiLFxyXG4gICAgICAgIFwiIzU1NkIyRlwiLFxyXG4gICAgXSxcclxuICAgIG9jZWFuOiBbXHJcbiAgICAgICAgXCIjMDAxZjNmXCIsXHJcbiAgICAgICAgXCIjMDAzMzY2XCIsXHJcbiAgICAgICAgXCIjMDA0MDgwXCIsXHJcbiAgICAgICAgXCIjMDA1OWIzXCIsXHJcbiAgICAgICAgXCIjMDA3M2U2XCIsXHJcbiAgICAgICAgXCIjMWE4Y2ZmXCIsXHJcbiAgICAgICAgXCIjNGRhNmZmXCIsXHJcbiAgICAgICAgXCIjODBiZmZmXCIsXHJcbiAgICAgICAgXCIjOTljY2ZmXCIsXHJcbiAgICAgICAgXCIjYjNkOWZmXCIsXHJcbiAgICAgICAgXCIjY2NlNWZmXCIsXHJcbiAgICAgICAgXCIjZTZmMmZmXCIsXHJcbiAgICBdLFxyXG4gICAgc3Vuc2V0OiBbXHJcbiAgICAgICAgXCIjZmY2YjZiXCIsXHJcbiAgICAgICAgXCIjZWU1YTI0XCIsXHJcbiAgICAgICAgXCIjZjA5MzJiXCIsXHJcbiAgICAgICAgXCIjZjZlNThkXCIsXHJcbiAgICAgICAgXCIjZmZiZTc2XCIsXHJcbiAgICAgICAgXCIjZmY3OTc5XCIsXHJcbiAgICAgICAgXCIjZTA1NmZkXCIsXHJcbiAgICAgICAgXCIjYmUyZWRkXCIsXHJcbiAgICAgICAgXCIjNjg2ZGUwXCIsXHJcbiAgICAgICAgXCIjNDgzNGQ0XCIsXHJcbiAgICAgICAgXCIjMzAzMzZiXCIsXHJcbiAgICAgICAgXCIjMTMwZjQwXCIsXHJcbiAgICBdLFxyXG4gICAgbW9ub2Nocm9tZTogW1xyXG4gICAgICAgIFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIFwiIzFhMWExYVwiLFxyXG4gICAgICAgIFwiIzMzMzMzM1wiLFxyXG4gICAgICAgIFwiIzRkNGQ0ZFwiLFxyXG4gICAgICAgIFwiIzY2NjY2NlwiLFxyXG4gICAgICAgIFwiIzgwODA4MFwiLFxyXG4gICAgICAgIFwiIzk5OTk5OVwiLFxyXG4gICAgICAgIFwiI2IzYjNiM1wiLFxyXG4gICAgICAgIFwiI2NjY2NjY1wiLFxyXG4gICAgICAgIFwiI2U2ZTZlNlwiLFxyXG4gICAgICAgIFwiI2YyZjJmMlwiLFxyXG4gICAgICAgIFwiI2ZmZmZmZlwiLFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGT05UX0xJU1QgPSBbXHJcbiAgICBcImluaGVyaXRcIixcclxuICAgIFwiQXJpYWxcIixcclxuICAgIFwiSGVsdmV0aWNhIE5ldWVcIixcclxuICAgIFwiR2VvcmdpYVwiLFxyXG4gICAgXCJUaW1lcyBOZXcgUm9tYW5cIixcclxuICAgIFwiQ291cmllciBOZXdcIixcclxuICAgIFwiVmVyZGFuYVwiLFxyXG4gICAgXCJtb25vc3BhY2VcIixcclxuICAgIFwic2Fucy1zZXJpZlwiLFxyXG4gICAgXCJzZXJpZlwiLFxyXG5dO1xyXG5leHBvcnQgY29uc3QgQ09OTkVDVElPTl9TVFlMRVM6IENvbm5lY3Rpb25MaW5lU3R5bGVbXSA9IFtcclxuICAgIFwiYmV6aWVyXCIsXHJcbiAgICBcInN0cmFpZ2h0XCIsXHJcbiAgICBcImN1cnZlZFwiLFxyXG4gICAgXCJzdGVwXCIsXHJcbiAgICBcImJyYWNrZXRcIixcclxuICAgIFwibG9vc2VcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0tFWUJJTkRJTkdTOiBLZXlCaW5kaW5ncyA9IHtcclxuICAgIGVkaXROb2RlOiBcIlNwYWNlXCIsXHJcbiAgICBhZGRTaWJsaW5nOiBcIkVudGVyXCIsXHJcbiAgICBhZGRDaGlsZDogXCJUYWJcIixcclxuICAgIGZvY3VzTm9kZTogXCJmXCIsXHJcbiAgICB1bmRvOiBcImN0cmwrelwiLFxyXG4gICAgcmVkbzogXCJjdHJsK3NoaWZ0K3pcIixcclxuICAgIGxpbmVCcmVhazogXCJzaGlmdCtFbnRlclwiLFxyXG4gICAgZHJhZ0NhbnZhczogXCJTcGFjZVwiLFxyXG4gICAgem9vbUluOiBcInNoaWZ0Kz1cIixcclxuICAgIHpvb21PdXQ6IFwic2hpZnQrLVwiLFxyXG4gICAgem9vbVJlc2V0OiBcInNoaWZ0KzBcIixcclxuICAgIG5hdlVwOiBcIkFycm93VXBcIixcclxuICAgIG5hdkRvd246IFwiQXJyb3dEb3duXCIsXHJcbiAgICBuYXZMZWZ0OiBcIkFycm93TGVmdFwiLFxyXG4gICAgbmF2UmlnaHQ6IFwiQXJyb3dSaWdodFwiLFxyXG4gICAgaW52ZXJ0U2Nyb2xsWTogZmFsc2UsXHJcbiAgICBpbnZlcnRTY3JvbGxYOiBmYWxzZSxcclxuICAgIGludmVydFpvb206IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1RZTEU6IE1pbmRNYXBTdHlsZSA9IHtcclxuICAgIG5vZGVCZ0NvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgIG5vZGVUZXh0Q29sb3I6IFwiIzMzMzMzM1wiLFxyXG4gICAgbm9kZUZvbnRTaXplOiAxNCxcclxuICAgIG5vZGVGb250RmFtaWx5OiBcImluaGVyaXRcIixcclxuICAgIG5vZGVCb3JkZXJTdHlsZTogXCJzb2xpZFwiLFxyXG4gICAgbm9kZUJvcmRlckNvbG9yOiBcIiNjY2NjY2NcIixcclxuICAgIG5vZGVCb3JkZXJXaWR0aDogMixcclxuICAgIG5vZGVCb3JkZXJSYWRpdXM6IDUsXHJcbiAgICBub2RlTWluV2lkdGg6IDYwLFxyXG4gICAgbm9kZU1pbkhlaWdodDogMzIsXHJcbiAgICByb290QmdDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICByb290VGV4dENvbG9yOiBcIiMxNzE3MTdcIixcclxuICAgIHJvb3RGb250U2l6ZTogMTgsXHJcbiAgICByb290Rm9udEZhbWlseTogXCJpbmhlcml0XCIsXHJcbiAgICByb290Qm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgIHJvb3RCb3JkZXJDb2xvcjogXCIjYmFiYWJhXCIsXHJcbiAgICByb290Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICByb290Qm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgcm9vdE1pbldpZHRoOiA5NixcclxuICAgIHJvb3RNaW5IZWlnaHQ6IDQwLFxyXG4gICAgY29ubmVjdGlvblN0eWxlOiBcImJyYWNrZXRcIixcclxuICAgIGNvbm5lY3Rpb25Db2xvcjogXCIjYThhOGE4XCIsXHJcbiAgICBjb25uZWN0aW9uV2lkdGg6IDEuNSxcclxuICAgIGNvbm5lY3Rpb25MZW5ndGg6IDk2LFxyXG4gICAgY29ubmVjdGlvblJhaW5ib3c6IHRydWUsXHJcbiAgICByYWluYm93UGFsZXR0ZTogXCJjbGFzc2ljXCIsXHJcbiAgICBjdXN0b21SYWluYm93czoge1xyXG4gICAgICAgIEN1c3RvbTogW1xyXG4gICAgICAgICAgICBcIiNmZjg5ODlcIixcclxuICAgICAgICAgICAgXCIjOGVmZDhlXCIsXHJcbiAgICAgICAgICAgIFwiI2EzYTNmZlwiLFxyXG4gICAgICAgICAgICBcIiNmZmZmOTFcIixcclxuICAgICAgICAgICAgXCIjZjliMWY5XCIsXHJcbiAgICAgICAgICAgIFwiI2E0ZmZmZlwiLFxyXG4gICAgICAgICAgICBcIiNkZWRlZGVcIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIG5vZGVEaXJlY3Rpb246IFwicmlnaHRcIixcclxuICAgIHNlbGVjdGlvbkNvbG9yOiBcIiMyNGJjMTBcIixcclxuICAgIHNlbGVjdGlvbldpZHRoOiAzLFxyXG4gICAgc2VsZWN0aW9uT3V0bGluZU9mZnNldDogMixcclxuICAgIGVkaXRPdXRsaW5lQ29sb3I6IFwiIzNiZmIyZFwiLFxyXG4gICAgZWRpdE91dGxpbmVXaWR0aDogNSxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIG5vZGVQYWRYOiAxMCxcclxuICAgIG5vZGVMaW5lSGVpZ2h0OiAxLjUsXHJcbiAgICBub2RlR2FwWTogMzIsXHJcbiAgICBjYW52YXNCZzogXCIjZmZmZmZmXCIsXHJcbiAgICB0b29sYmFyUGFkVG9wOiAwLFxyXG4gICAgdG9vbGJhclBhZFJpZ2h0OiAxMixcclxuICAgIHRvb2xiYXJQYWRCb3R0b206IDAsXHJcbiAgICB0b29sYmFyUGFkTGVmdDogMTIsXHJcbiAgICB0b29sYmFyUG9zaXRpb246IFwidG9wXCIsXHJcbiAgICB0b29sYmFyQmdDb2xvcjogXCIjZjVmNWY1XCIsXHJcbiAgICB0b29sYmFyQnRuQmdDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICB0b29sYmFyQnRuQm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogXCIjZDFkNWRiXCIsXHJcbiAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBcIiMzMzMzMzNcIixcclxuICAgIHRvb2xiYXJCb3JkZXJDb2xvcjogXCIjZTBlMGUwXCIsXHJcbiAgICB0b29sYmFyQm9yZGVyV2lkdGg6IDEsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NFVFRJTkdTOiBQbHVnaW5TZXR0aW5ncyA9IHtcclxuICAgIHN0eWxlOiB7IC4uLkRFRkFVTFRfU1RZTEUgfSxcclxuICAgIGxhbmd1YWdlOiBcImVuXCIsXHJcbiAgICB0aGVtZTogXCJsaWdodFwiLFxyXG4gICAgc2hvd1Rvb2xiYXI6IHRydWUsXHJcbiAgICBrZXlCaW5kaW5nczogeyAuLi5ERUZBVUxUX0tFWUJJTkRJTkdTIH0sXHJcbiAgICBkZXZlbG9wZXJNb2RlOiBmYWxzZSxcclxuICAgIGVkaXRPbkNyZWF0ZTogZmFsc2UsXHJcbiAgICB0eXBlVG9FZGl0OiB0cnVlLFxyXG4gICAgY3VzdG9tTm9kZU5hbWVzOiB7fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9NSU5ETUFQID0gXCJtaW5kemotdmlld1wiO1xyXG5leHBvcnQgY29uc3QgVklFV19UWVBFX01JTkRNQVBfU1RZTEUgPSBcIm1pbmR6ai1zdHlsZS1wYW5lbFwiO1xyXG5leHBvcnQgY29uc3QgTUlORE1BUF9GSUxFX0VYVEVOU0lPTiA9IFwibWluZHpqXCI7XHJcbiIsICIvLyBzcmMvaTE4bi50c1xyXG4vLyBBbGwgMTkgbGFuZ3VhZ2VzIHdpdGggQ09NUExFVEUgdHJhbnNsYXRpb25zIChubyBmYWxsYmFjayB0byBFbmdsaXNoKVxyXG5cclxuZXhwb3J0IHR5cGUgTGFuZ3VhZ2UgPVxyXG4gICAgfCBcImVuXCJcclxuICAgIHwgXCJ6aFwiXHJcbiAgICB8IFwiamFcIlxyXG4gICAgfCBcImZyXCJcclxuICAgIHwgXCJkZVwiXHJcbiAgICB8IFwiZXNcIlxyXG4gICAgfCBcInJ1XCJcclxuICAgIHwgXCJzdlwiXHJcbiAgICB8IFwiaGlcIlxyXG4gICAgfCBcImtvXCJcclxuICAgIHwgXCJwdFwiXHJcbiAgICB8IFwiZmlcIlxyXG4gICAgfCBcIm5vXCJcclxuICAgIHwgXCJubFwiXHJcbiAgICB8IFwibGlcIlxyXG4gICAgfCBcImRhXCJcclxuICAgIHwgXCJoZVwiXHJcbiAgICB8IFwiaXRcIlxyXG4gICAgfCBcImFyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTEFOR1VBR0VTOiB7IHZhbHVlOiBMYW5ndWFnZTsgbGFiZWw6IHN0cmluZyB9W10gPSBbXHJcbiAgICB7IHZhbHVlOiBcImVuXCIsIGxhYmVsOiBcIkVuZ2xpc2hcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJ6aFwiLCBsYWJlbDogXCJcdTRFMkRcdTY1ODdcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJqYVwiLCBsYWJlbDogXCJcdTY1RTVcdTY3MkNcdThBOUVcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJmclwiLCBsYWJlbDogXCJGcmFuXHUwMEU3YWlzXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiZGVcIiwgbGFiZWw6IFwiRGV1dHNjaFwiIH0sXHJcbiAgICB7IHZhbHVlOiBcImVzXCIsIGxhYmVsOiBcIkVzcGFcdTAwRjFvbFwiIH0sXHJcbiAgICB7IHZhbHVlOiBcInJ1XCIsIGxhYmVsOiBcIlx1MDQyMFx1MDQ0M1x1MDQ0MVx1MDQ0MVx1MDQzQVx1MDQzOFx1MDQzOVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcInN2XCIsIGxhYmVsOiBcIlN2ZW5za2FcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJoaVwiLCBsYWJlbDogXCJcdTA5MzlcdTA5M0ZcdTA5MjhcdTA5NERcdTA5MjZcdTA5NDBcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJrb1wiLCBsYWJlbDogXCJcdUQ1NUNcdUFENkRcdUM1QjRcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJwdFwiLCBsYWJlbDogXCJQb3J0dWd1XHUwMEVBc1wiIH0sXHJcbiAgICB7IHZhbHVlOiBcImZpXCIsIGxhYmVsOiBcIlN1b21pXCIgfSxcclxuICAgIHsgdmFsdWU6IFwibm9cIiwgbGFiZWw6IFwiTm9yc2tcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJubFwiLCBsYWJlbDogXCJOZWRlcmxhbmRzXCIgfSxcclxuICAgIHsgdmFsdWU6IFwibGlcIiwgbGFiZWw6IFwiTGllY2h0ZW5zdGVpblwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIml0XCIsIGxhYmVsOiBcIkl0YWxpYW5vXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiZGFcIiwgbGFiZWw6IFwiRGFuc2tcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJoZVwiLCBsYWJlbDogXCJcdTA1RTJcdTA1RDFcdTA1RThcdTA1RDlcdTA1RUFcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJhclwiLCBsYWJlbDogXCJcdTA2MjdcdTA2NDRcdTA2MzlcdTA2MzFcdTA2MjhcdTA2NEFcdTA2MjlcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJvb3RcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBVbmRvXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgUmVkb1wiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgTWFwXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRm9jdXNcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiU2VhcmNoXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6U2VhcmNoIHwgU3BhY2U6RWRpdCB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk5ldyByb290XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duIG1vZGVcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdHlsZSBwYW5lbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZvY3VzIG5vZGVcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiU2VhcmNoIG5vZGVzXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiU2V0dGluZ3NcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiWm9vbSBJblwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiWm9vbSBPdXRcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgQ3VzdG9tXCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBCYXRjaCBEZWxldGVcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFZGl0IFN0eWxlXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE5ldyBSb290XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFVuZG9cIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgUmVkb1wiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIFN0eWxlXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIEVkaXRcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIENvcHlcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBDdXRcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFBhc3RlXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBDaGlsZFwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IExlZnQgQ2hpbGRcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgU2libGluZ1wiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIERlbGV0ZVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJIaWRlIFRvb2xiYXJcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIFN0eWxlXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiQ2hpbGQgTm9kZVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiUm9vdCBOb2RlXCIsXHJcbiAgICBcInNtLmJnXCI6IFwiQmFja2dyb3VuZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGV4dCBDb2xvclwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIkZvbnQgU2l6ZVwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiRm9udFwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIkJvcmRlciBTdHlsZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkJvcmRlciBDb2xvclwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkJvcmRlciBXaWR0aFwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJCb3JkZXIgUmFkaXVzXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluIFdpZHRoXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIk1pbiBIZWlnaHRcIixcclxuICAgIFwic20uY29ublwiOiBcIkNvbm5lY3Rpb25cIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cGVcIixcclxuICAgIFwic20uY29sb3JcIjogXCJDb2xvclwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIldpZHRoXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMZW5ndGhcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBSYWluYm93XCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJOb2RlIERpcmVjdGlvblwiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIlNpYmxpbmcgR2FwXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiUmlnaHRcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIkxlZnRcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJvdGhcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldHRlXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlNlbGVjdGlvblwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlNlbGVjdGlvbiBDb2xvclwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlNlbGVjdGlvbiBXaWR0aFwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJPdXRsaW5lIE9mZnNldFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIkVkaXQgT3V0bGluZSBDb2xvclwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiRWRpdCBPdXRsaW5lIFdpZHRoXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRleHQgQWxpZ25cIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJUZXh0IFBhZGRpbmdcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJMaW5lIEhlaWdodFwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkNhbnZhcyBCYWNrZ3JvdW5kXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiUmVzZXRcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJDbG9zZVwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlNob3cgVG9vbGJhclwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlRvb2xiYXIgUGFkZGluZ1wiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJUb3BcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiUmlnaHRcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiQm90dG9tXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIkxlZnRcIixcclxuICAgIFwic20udGJQb3NcIjogXCJUb29sYmFyIFBvc2l0aW9uXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiVG9wXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiQm90dG9tXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJUb29sYmFyIEJhY2tncm91bmRcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIkJ1dHRvbiBCYWNrZ3JvdW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiQnV0dG9uIEJvcmRlciBTdHlsZVwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiQnV0dG9uIEJvcmRlciBDb2xvclwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJCdXR0b24gVGV4dCBDb2xvclwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlJlc2V0IFRvb2xiYXJcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggTm9kZSBTdHlsZVwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJMaW5lIENvbG9yXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxpbmUgV2lkdGhcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJDbGVhciBDdXN0b21cIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiQm9yZGVyIFJhZGl1c1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJTZWFyY2ggbm9kZXMuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJSb290XCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTmV3IFJvb3RcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiQ2hpbGRcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIFNldHRpbmdzXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiTGFuZ3VhZ2VcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiSW50ZXJmYWNlIGxhbmd1YWdlXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRoZW1lXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJDb2xvciB0aGVtZVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJMaWdodFwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIkRhcmtcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJTaG93IFRvb2xiYXJcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiU2hvdyB0b29sYmFyXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIkNhbnZhcyBCYWNrZ3JvdW5kXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJCYWNrZ3JvdW5kIGNvbG9yXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIkFib3V0XCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0aG9yXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJBIGZlYXR1cmUtcmljaCBvcGVuIHNvdXJjZSBtaW5kIG1hcCBhcHAgZm9yIE9ic2lkaWFuIHdpdGggY3VzdG9tIHN0eWxlcywgcmFpbmJvdyBjb25uZWN0aW9ucywgbXVsdGktc2VsZWN0LCBkcmFnICYgZHJvcCwgYW5kIE1hcmtkb3duIGltcG9ydC9leHBvcnQuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiVXBkYXRlZFwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViIFJlcG9zaXRvcnlcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlN1cHBvcnQgT3BlbiBTb3VyY2UgQXV0aG9yXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiS2V5Ym9hcmQgU2hvcnRjdXRzXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIkN1c3RvbWl6ZSBzaG9ydGN1dHNcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiRWRpdCBub2RlXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkFkZCBzaWJsaW5nXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJBZGQgY2hpbGRcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZvY3VzIG5vZGVcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiVW5kb1wiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJSZWRvXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiTGluZSBicmVhayAoaW4gZWRpdClcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiRHJhZyBjYW52YXNcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJab29tIGluXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlpvb20gb3V0XCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiUmVzZXQgem9vbVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiTmF2aWdhdGUgdXBcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiTmF2aWdhdGUgZG93blwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJOYXZpZ2F0ZSBsZWZ0XCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJOYXZpZ2F0ZSByaWdodFwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiUHJlc3Mga2V5Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJTY3JvbGwgJiBab29tXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiSW52ZXJ0IHZlcnRpY2FsIHNjcm9sbFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVydCBob3Jpem9udGFsIHNjcm9sbFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydCB6b29tIGRpcmVjdGlvblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiRWRpdCBvbiBjcmVhdGVcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJFbnRlciBlZGl0IG1vZGUgd2hlbiBjcmVhdGluZyBuZXcgbm9kZXNcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiUm9vdCBub2RlIG5hbWVcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIkRlZmF1bHQgbmFtZSBmb3IgbmV3IHJvb3Qgbm9kZXNcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIkNoaWxkIG5vZGUgbmFtZVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIkRlZmF1bHQgbmFtZSBmb3IgbmV3IGNoaWxkIG5vZGVzXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiVHlwZSB0byBlZGl0XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOlxyXG4gICAgICAgIFwiUHJlc3MgYW55IGtleSB0byBlbnRlciBlZGl0IG1vZGUgd2hlbiBhIG5vZGUgaXMgc2VsZWN0ZWRcIixcclxufTtcclxuXHJcbmNvbnN0IF96aDogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTRFM0JcdTgyODJcdTcwQjlcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTY0QTRcdTk1MDBcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTkxQ0RcdTUwNUFcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcdTZBMjFcdTVGMEZcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIFx1NUJGQ1x1NTZGRVwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTY4MzdcdTVGMEZcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJcdTVCOUFcdTRGNERcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiXHU2NDFDXHU3RDIyXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6XHU2NDFDXHU3RDIyIHwgU3BhY2U6XHU3RjE2XHU4RjkxIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiXHU2NUIwXHU1RUZBXHU0RTNCXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duXHU2QTIxXHU1RjBGXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHU2ODM3XHU1RjBGXHU5NzYyXHU2NzdGXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiXHU1QjlBXHU0RjREXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1NjQxQ1x1N0QyMlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIlx1OEJCRVx1N0Y2RVwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJcdTY1M0VcdTU5MjdcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlx1N0YyOVx1NUMwRlwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBcdTgxRUFcdTVCOUFcdTRFNDlcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1NjI3OVx1OTFDRlx1NTIyMFx1OTY2NFwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1N0YxNlx1OEY5MVx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBcdTY1QjBcdTVFRkFcdTRFM0JcdTgyODJcdTcwQjlcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHU2NEE0XHU5NTAwXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFx1OTFDRFx1NTA1QVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHU1MTY4XHU1QzQwXHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1N0YxNlx1OEY5MVwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIFx1NTkwRFx1NTIzNlwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFx1NTI2QVx1NTIwN1wiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgXHU3Qzk4XHU4RDM0XCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBcdTVCNTBcdTgyODJcdTcwQjlcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBcdTVERTZcdTRGQTdcdTVCNTBcdTgyODJcdTcwQjlcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgXHU1MTQ0XHU1RjFGXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHU1MjIwXHU5NjY0XCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlx1OTY5MFx1ODVDRlx1NURFNVx1NTE3N1x1NjgwRlwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTUxNjhcdTVDNDBcdTY4MzdcdTVGMEZcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJcdTVCNTBcdTgyODJcdTcwQjlcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlx1NEUzQlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1ODBDQ1x1NjY2Rlx1ODI3MlwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHU2NTg3XHU1QjU3XHU4MjcyXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiXHU1QjU3XHU0RjUzXHU1OTI3XHU1QzBGXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJcdTVCNTdcdTRGNTNcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJcdThGQjlcdTY4NDZcdTY4MzdcdTVGMEZcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdThGQjlcdTY4NDZcdTk4OUNcdTgyNzJcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJcdThGQjlcdTY4NDZcdTVCQkRcdTVFQTZcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiXHU1NzA2XHU4OUQyXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHU2NzAwXHU1QzBGXHU1QkJEXHU1RUE2XCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIlx1NjcwMFx1NUMwRlx1OUFEOFx1NUVBNlwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiXHU4RkRFXHU3RUJGXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJcdTdDN0JcdTU3OEJcIixcclxuICAgIFwic20uY29sb3JcIjogXCJcdTk4OUNcdTgyNzJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJcdTVCQkRcdTVFQTZcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIlx1OTU3Rlx1NUVBNlwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFx1NUY2OVx1ODY3OVwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiXHU4MjgyXHU3MEI5XHU2NUI5XHU1NDExXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiXHU1NDBDXHU3RUE3XHU5NUY0XHU4REREXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiXHU1M0YzXHU0RkE3XCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJcdTVERTZcdTRGQTdcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIlx1NURFNlx1NTNGM1wiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlx1OEMwM1x1ODI3Mlx1Njc3RlwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJcdTkwMDlcdTRFMkRcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJcdTkwMDlcdTRFMkRcdTk4OUNcdTgyNzJcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJcdTkwMDlcdTRFMkRcdTY4NDZcdTVCQkRcdTVFQTZcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiXHU5MDA5XHU0RTJEXHU2ODQ2XHU1MDRGXHU3OUZCXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiXHU3RjE2XHU4RjkxXHU2ODQ2XHU5ODlDXHU4MjcyXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJcdTdGMTZcdThGOTFcdTY4NDZcdTVCQkRcdTVFQTZcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiXHU2NTg3XHU1QjU3XHU1QkY5XHU5RjUwXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiXHU2NTg3XHU1QjU3XHU5NUY0XHU4REREXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHU4ODRDXHU5NUY0XHU4REREXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHU3NTNCXHU1RTAzXHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiXHU5MUNEXHU3RjZFXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiXHU1MTczXHU5NUVEXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiXHU2NjNFXHU3OTNBXHU1REU1XHU1MTc3XHU2ODBGXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiXHU1REU1XHU1MTc3XHU2ODBGXHU1MTg1XHU4RkI5XHU4REREXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1NEUwQVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTUzRjNcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHU0RTBCXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1NURFNlwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1NURFNVx1NTE3N1x1NjgwRlx1NEY0RFx1N0Y2RVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlx1OTg3Nlx1OTBFOFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIlx1NUU5NVx1OTBFOFwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiXHU1REU1XHU1MTc3XHU2ODBGXHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJcdTYzMDlcdTk0QUVcdTgwQ0NcdTY2NkZcdTgyNzJcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTYzMDlcdTk0QUVcdThGQjlcdTY4NDZcdTY4MzdcdTVGMEZcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlx1NjMwOVx1OTRBRVx1OEZCOVx1Njg0Nlx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJcdTYzMDlcdTk0QUVcdTVCNTdcdTRGNTNcdTk4OUNcdTgyNzJcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTkxQ0RcdTdGNkVcdTVERTVcdTUxNzdcdTY4MEZcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHU4MjgyXHU3MEI5XHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1OEZERVx1N0VCRlx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdThGREVcdTdFQkZcdTVCQkRcdTVFQTZcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJcdTZFMDVcdTk2NjRcdTgxRUFcdTVCOUFcdTRFNDlcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHU1NzA2XHU4OUQyXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlx1NjQxQ1x1N0QyMlx1ODI4Mlx1NzBCOS4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1NEUzQlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1NjVCMFx1NEUzQlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJcdTVCNTBcdTgyODJcdTcwQjlcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIFx1OEJCRVx1N0Y2RVwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlx1OEJFRFx1OEEwMFwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJcdTc1NENcdTk3NjJcdThCRURcdThBMDBcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiXHU0RTNCXHU5ODk4XCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJcdTk4OUNcdTgyNzJcdTRFM0JcdTk4OThcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiXHU0RUFFXHU4MjcyXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiXHU2Njk3XHU4MjcyXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiXHU2NjNFXHU3OTNBXHU1REU1XHU1MTc3XHU2ODBGXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1NjYzRVx1NzkzQVx1OTg3Nlx1OTBFOFx1NURFNVx1NTE3N1x1NjgwRlwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJcdTc1M0JcdTVFMDNcdTgwQ0NcdTY2NkZcdTgyNzJcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIlx1NzUzQlx1NUUwM1x1ODBDQ1x1NjY2Rlx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTUxNzNcdTRFOEVcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdTcyNDhcdTY3MkNcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1NEY1Q1x1ODAwNVwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiXHU0RTAwXHU2QjNFXHU1MjlGXHU4MEZEXHU0RTMwXHU1QkNDXHU3Njg0T2JzaWRpYW5cdTYwMURcdTdFRjRcdTVCRkNcdTU2RkVcdTVGMDBcdTZFOTBcdTVFOTRcdTc1MjhcdUZGMENcdTY1MkZcdTYzMDFcdTgxRUFcdTVCOUFcdTRFNDlcdTY4MzdcdTVGMEZcdTMwMDFcdTVGNjlcdTg2NzlcdThGREVcdTdFQkZcdTMwMDFcdTU5MUFcdTkwMDlcdTMwMDFcdTYyRDZcdTY1M0VcdTU0OENNYXJrZG93blx1N0YxNlx1OEY5MVx1NUJGQ1x1NTE2NVx1NUJGQ1x1NTFGQVx1MzAwMlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1NjZGNFx1NjVCMFx1NjVFNVx1NjcxRlwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViIFx1NEVEM1x1NUU5M1wiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiXHU2NTJGXHU2MzAxXHU1RjAwXHU2RTkwXHU5ODc5XHU3NkVFXHU0RjVDXHU4MDA1XCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiXHU1RkVCXHU2Mzc3XHU5NTJFXHU4QkJFXHU3RjZFXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1ODFFQVx1NUI5QVx1NEU0OVx1NUZFQlx1NjM3N1x1OTUyRVwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJcdTdGMTZcdThGOTFcdTgyODJcdTcwQjlcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHU2NUIwXHU1RUZBXHU1MTQ0XHU1RjFGXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJcdTY1QjBcdTVFRkFcdTVCNTBcdTgyODJcdTcwQjlcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIlx1NUI5QVx1NEY0RFx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTY0QTRcdTk1MDBcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHU5MUNEXHU1MDVBXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiXHU2MzYyXHU4ODRDKFx1N0YxNlx1OEY5MVx1NEUyRClcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiXHU2MkQ2XHU1MkE4XHU3NTNCXHU1RTAzXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiXHU2NTNFXHU1OTI3XCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlx1N0YyOVx1NUMwRlwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1OTFDRFx1N0Y2RVx1N0YyOVx1NjUzRVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHU1NDExXHU0RTBBXHU1QkZDXHU4MjJBXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIlx1NTQxMVx1NEUwQlx1NUJGQ1x1ODIyQVwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJcdTU0MTFcdTVERTZcdTVCRkNcdTgyMkFcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1NTQxMVx1NTNGM1x1NUJGQ1x1ODIyQVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiXHU2MzA5XHU0RTBCXHU2MzA5XHU5NTJFLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJcdTZFREFcdTUyQThcdTRFMEVcdTdGMjlcdTY1M0VcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdTUzQ0RcdThGNkNcdTU3ODJcdTc2RjRcdTZFREFcdTUyQThcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJcdTUzQ0RcdThGNkNcdTZDMzRcdTVFNzNcdTZFREFcdTUyQThcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJcdTUzQ0RcdThGNkNcdTdGMjlcdTY1M0VcdTY1QjlcdTU0MTFcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIlx1NTIxQlx1NUVGQVx1NjVGNlx1N0YxNlx1OEY5MVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIlx1NTIxQlx1NUVGQVx1NjVCMFx1ODI4Mlx1NzBCOVx1NjVGNlx1ODFFQVx1NTJBOFx1OEZEQlx1NTE2NVx1N0YxNlx1OEY5MVx1NkEyMVx1NUYwRlwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJcdTRFM0JcdTgyODJcdTcwQjlcdTU0MERcdTc5RjBcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlx1NjVCMFx1NEUzQlx1ODI4Mlx1NzBCOVx1NzY4NFx1OUVEOFx1OEJBNFx1NTQwRFx1NzlGMFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiXHU1QjUwXHU4MjgyXHU3MEI5XHU1NDBEXHU3OUYwXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiXHU2NUIwXHU1QjUwXHU4MjgyXHU3MEI5XHU3Njg0XHU5RUQ4XHU4QkE0XHU1NDBEXHU3OUYwXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHU2MzA5XHU5NTJFXHU3RjE2XHU4RjkxXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlx1OTAwOVx1NEUyRFx1ODI4Mlx1NzBCOVx1NjVGNlx1NjMwOVx1NEVGQlx1NjEwRlx1OTUyRVx1NzZGNFx1NjNBNVx1OEZEQlx1NTE2NVx1N0YxNlx1OEY5MVx1NkEyMVx1NUYwRlwiLFxyXG59O1xyXG5cclxuY29uc3QgX2phOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFx1MzBFQlx1MzBGQ1x1MzBDOFwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFx1NTE0M1x1MzA2Qlx1NjIzQlx1MzA1OVwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFx1MzA4NFx1MzA4QVx1NzZGNFx1MzA1OVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgXHUzMERFXHUzMEMzXHUzMEQ3XCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIlx1MzBENVx1MzBBOVx1MzBGQ1x1MzBBQlx1MzBCOVwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJcdTY5MUNcdTdEMjJcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpcdTY5MUNcdTdEMjIgfCBTcGFjZTpcdTdERThcdTk2QzYgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJcdTY1QjBcdTg5OEZcdTMwRUJcdTMwRkNcdTMwQzhcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd25cdTMwRTJcdTMwRkNcdTMwQzlcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcdTMwRDFcdTMwQ0RcdTMwRUJcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJcdTMwQ0VcdTMwRkNcdTMwQzlcdTMwNkJcdTMwRDVcdTMwQTlcdTMwRkNcdTMwQUJcdTMwQjlcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHU2OTFDXHU3RDIyXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHU4QTJEXHU1QjlBXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1NjJFMVx1NTkyN1wiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHU3RTJFXHU1QzBGXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1MzBBQlx1MzBCOVx1MzBCRlx1MzBFMFwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHU0RTAwXHU2MkVDXHU1MjRBXHU5NjY0XCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXHU3REU4XHU5NkM2XCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFx1NjVCMFx1ODk4Rlx1MzBFQlx1MzBGQ1x1MzBDOFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBcdTUxNDNcdTMwNkJcdTYyM0JcdTMwNTlcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgXHUzMDg0XHUzMDhBXHU3NkY0XHUzMDU5XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTUxNjhcdTRGNTNcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHU3REU4XHU5NkM2XCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgXHUzMEIzXHUzMEQ0XHUzMEZDXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgXHUzMEFCXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBcdThDQkNcdTMwOEFcdTRFRDhcdTMwNTFcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IFx1NUI1MFx1MzBDRVx1MzBGQ1x1MzBDOVwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFx1NURFNlx1NUI1MFx1MzBDRVx1MzBGQ1x1MzBDOVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdTUxNDRcdTVGMUZcdTMwQ0VcdTMwRkNcdTMwQzlcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTUyNEFcdTk2NjRcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHUzMDkyXHU5NzVFXHU4ODY4XHU3OTNBXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1NTE2OFx1NEY1M1x1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIlx1NUI1MFx1MzBDRVx1MzBGQ1x1MzBDOVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHUzMEVCXHUzMEZDXHUzMEM4XHUzMENFXHUzMEZDXHUzMEM5XCIsXHJcbiAgICBcInNtLmJnXCI6IFwiXHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJcdTY1ODdcdTVCNTdcdTgyNzJcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJcdTMwRDVcdTMwQTlcdTMwRjNcdTMwQzhcdTMwQjVcdTMwQTRcdTMwQkFcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1MzBENVx1MzBBOVx1MzBGM1x1MzBDOFwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1NjdBMFx1N0REQVx1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlx1NjdBMFx1N0REQVx1MzA2RVx1ODI3MlwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlx1NjdBMFx1N0REQVx1MzA2RVx1NUU0NVwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTg5RDJcdTRFMzhcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJcdTY3MDBcdTVDMEZcdTVFNDVcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiXHU2NzAwXHU1QzBGXHU5QUQ4XHUzMDU1XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJcdTYzQTVcdTdEOUFcdTdEREFcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1MzBCRlx1MzBBNFx1MzBEN1wiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1ODI3MlwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1NUU0NVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHU5NTc3XHUzMDU1XCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggXHUzMEVDXHUzMEE0XHUzMEYzXHUzMERDXHUzMEZDXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdTMwQ0VcdTMwRkNcdTMwQzlcdTY1QjlcdTU0MTFcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJcdTUxNDRcdTVGMUZcdTMwQ0VcdTMwRkNcdTMwQzlcdTk1OTNcdTk2OTRcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdTUzRjNcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1NURFNlwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHU0RTIxXHU2NUI5XCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHUzMEQxXHUzMEVDXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlx1OTA3OFx1NjI5RVwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlx1OTA3OFx1NjI5RVx1ODI3MlwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlx1OTA3OFx1NjI5RVx1NjdBMFx1MzA2RVx1NUU0NVwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTMwQTJcdTMwQTZcdTMwQzhcdTMwRTlcdTMwQTRcdTMwRjNcdTMwQUFcdTMwRDVcdTMwQkJcdTMwQzNcdTMwQzhcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJcdTdERThcdTk2QzZcdTY3QTBcdTMwNkVcdTgyNzJcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1N0RFOFx1OTZDNlx1NjdBMFx1MzA2RVx1NUU0NVwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJcdTMwQzZcdTMwQURcdTMwQjlcdTMwQzhcdTkxNERcdTdGNkVcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJcdTMwQzZcdTMwQURcdTMwQjlcdTMwQzhcdTRGNTlcdTc2N0RcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJcdTg4NENcdTMwNkVcdTlBRDhcdTMwNTVcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJcdTMwQURcdTMwRTNcdTMwRjNcdTMwRDBcdTMwQjlcdTgwQ0NcdTY2NkZcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJcdTMwRUFcdTMwQkJcdTMwQzNcdTMwQzhcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJcdTk1ODlcdTMwNThcdTMwOEJcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJcdTMwQzRcdTMwRkNcdTMwRUJcdTMwRDBcdTMwRkNcdTg4NjhcdTc5M0FcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdTMwQzRcdTMwRkNcdTMwRUJcdTMwRDBcdTMwRkNcdTRGNTlcdTc2N0RcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiXHU0RTBBXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlx1NTNGM1wiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJcdTRFMEJcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiXHU1REU2XCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHU0RjREXHU3RjZFXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiXHU0RTBBXHU5MEU4XCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiXHU0RTBCXHU5MEU4XCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJcdTMwQzRcdTMwRkNcdTMwRUJcdTMwRDBcdTMwRkNcdTgwQ0NcdTY2NkZcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1MzBEQ1x1MzBCRlx1MzBGM1x1ODBDQ1x1NjY2RlwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlx1MzBEQ1x1MzBCRlx1MzBGM1x1NjdBMFx1N0REQVx1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHUzMERDXHUzMEJGXHUzMEYzXHU2N0EwXHU3RERBXHUzMDZFXHU4MjcyXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIlx1MzBEQ1x1MzBCRlx1MzBGM1x1NjU4N1x1NUI1N1x1ODI3MlwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlx1MzBDNFx1MzBGQ1x1MzBFQlx1MzBEMFx1MzBGQ1x1MzBFQVx1MzBCQlx1MzBDM1x1MzBDOFwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTMwQ0VcdTMwRkNcdTMwQzlcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiXHU3RERBXHUzMDZFXHU4MjcyXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIlx1N0REQVx1MzA2RVx1NUU0NVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlx1MzBBQlx1MzBCOVx1MzBCRlx1MzBFMFx1MzA5Mlx1MzBBRlx1MzBFQVx1MzBBMlwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJcdTg5RDJcdTRFMzhcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHUzMDkyXHU2OTFDXHU3RDIyLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiXHUzMEVCXHUzMEZDXHUzMEM4XCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiXHU2NUIwXHUzMDU3XHUzMDQ0XHUzMEVCXHUzMEZDXHUzMEM4XCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIlx1NUI1MFx1MzBDRVx1MzBGQ1x1MzBDOVwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogXHU4QTJEXHU1QjlBXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiXHU4QTAwXHU4QTlFXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIlx1MzBBNFx1MzBGM1x1MzBCRlx1MzBGQ1x1MzBENVx1MzBBN1x1MzBGQ1x1MzBCOVx1OEEwMFx1OEE5RVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdTMwQzZcdTMwRkNcdTMwREVcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlx1MzBBQlx1MzBFOVx1MzBGQ1x1MzBDNlx1MzBGQ1x1MzBERVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJcdTMwRTlcdTMwQTRcdTMwQzhcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJcdTMwQzBcdTMwRkNcdTMwQUZcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJcdTMwQzRcdTMwRkNcdTMwRUJcdTMwRDBcdTMwRkNcdTg4NjhcdTc5M0FcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHUzMDkyXHU4ODY4XHU3OTNBXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIlx1MzBBRFx1MzBFM1x1MzBGM1x1MzBEMFx1MzBCOVx1ODBDQ1x1NjY2Rlx1ODI3MlwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiXHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1Njk4Mlx1ODk4MVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1MzBEMFx1MzBGQ1x1MzBCOFx1MzBFN1x1MzBGM1wiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHU0RjVDXHU4MDA1XCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJPYnNpZGlhblx1NzUyOFx1MzA2RVx1OUFEOFx1NkE1Rlx1ODBGRFx1MzBBQVx1MzBGQ1x1MzBEN1x1MzBGM1x1MzBCRFx1MzBGQ1x1MzBCOVx1MzBERVx1MzBBNFx1MzBGM1x1MzBDOVx1MzBERVx1MzBDM1x1MzBEN1x1MzAwMlx1MzBBQlx1MzBCOVx1MzBCRlx1MzBFMFx1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlx1MzAwMVx1MzBFQ1x1MzBBNFx1MzBGM1x1MzBEQ1x1MzBGQ1x1NjNBNVx1N0Q5QVx1N0REQVx1MzAwMVx1ODkwN1x1NjU3MFx1OTA3OFx1NjI5RVx1MzAwMVx1MzBDOVx1MzBFOVx1MzBDM1x1MzBCMCZcdTMwQzlcdTMwRURcdTMwQzNcdTMwRDdcdTMwMDFNYXJrZG93blx1MzBBNFx1MzBGM1x1MzBERFx1MzBGQ1x1MzBDOC9cdTMwQThcdTMwQUZcdTMwQjlcdTMwRERcdTMwRkNcdTMwQzhcdTVCRkVcdTVGRENcdTMwMDJcIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJcdTY2RjRcdTY1QjBcdTY1RTVcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1Ylx1MzBFQVx1MzBERFx1MzBCOFx1MzBDOFx1MzBFQVwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiXHUzMEFBXHUzMEZDXHUzMEQ3XHUzMEYzXHUzMEJEXHUzMEZDXHUzMEI5XHU0RjVDXHU4MDA1XHUzMDkyXHU2NTJGXHU2M0Y0XCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiXHUzMEFEXHUzMEZDXHUzMERDXHUzMEZDXHUzMEM5XHUzMEI3XHUzMEU3XHUzMEZDXHUzMEM4XHUzMEFCXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1MzBCN1x1MzBFN1x1MzBGQ1x1MzBDOFx1MzBBQlx1MzBDM1x1MzBDOFx1MzA5Mlx1MzBBQlx1MzBCOVx1MzBCRlx1MzBERVx1MzBBNFx1MzBCQVwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJcdTMwQ0VcdTMwRkNcdTMwQzlcdTMwOTJcdTdERThcdTk2QzZcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHU1MTQ0XHU1RjFGXHUzMENFXHUzMEZDXHUzMEM5XHU4RkZEXHU1MkEwXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcdThGRkRcdTUyQTBcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIlx1MzBDRVx1MzBGQ1x1MzBDOVx1MzA2Qlx1MzBENVx1MzBBOVx1MzBGQ1x1MzBBQlx1MzBCOVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTUxNDNcdTMwNkJcdTYyM0JcdTMwNTlcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHUzMDg0XHUzMDhBXHU3NkY0XHUzMDU5XCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiXHU2NTM5XHU4ODRDXHVGRjA4XHU3REU4XHU5NkM2XHU0RTJEXHVGRjA5XCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlx1MzBBRFx1MzBFM1x1MzBGM1x1MzBEMFx1MzBCOVx1MzA5Mlx1NzlGQlx1NTJENVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlx1NjJFMVx1NTkyN1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJcdTdFMkVcdTVDMEZcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJcdTMwQkFcdTMwRkNcdTMwRTBcdTMwRUFcdTMwQkJcdTMwQzNcdTMwQzhcIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIlx1NEUwQVx1MzA2Qlx1NzlGQlx1NTJENVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTRFMEJcdTMwNkJcdTc5RkJcdTUyRDVcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiXHU1REU2XHUzMDZCXHU3OUZCXHU1MkQ1XCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJcdTUzRjNcdTMwNkJcdTc5RkJcdTUyRDVcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1MzBBRFx1MzBGQ1x1MzA5Mlx1NjJCQ1x1MzA1N1x1MzA2Nlx1MzA0Rlx1MzA2MFx1MzA1NVx1MzA0NC4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiXHUzMEI5XHUzMEFGXHUzMEVEXHUzMEZDXHUzMEVCXHUzMDY4XHUzMEJBXHUzMEZDXHUzMEUwXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHU1NzgyXHU3NkY0XHUzMEI5XHUzMEFGXHUzMEVEXHUzMEZDXHUzMEVCXHU1M0NEXHU4RUUyXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiXHU2QzM0XHU1RTczXHUzMEI5XHUzMEFGXHUzMEVEXHUzMEZDXHUzMEVCXHU1M0NEXHU4RUUyXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiXHUzMEJBXHUzMEZDXHUzMEUwXHU2NUI5XHU1NDExXHU1M0NEXHU4RUUyXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTRGNUNcdTYyMTBcdTY2NDJcdTMwNkJcdTdERThcdTk2QzZcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJcdTMwQ0VcdTMwRkNcdTMwQzlcdTRGNUNcdTYyMTBcdTY2NDJcdTMwNkJcdTdERThcdTk2QzZcdTMwRTJcdTMwRkNcdTMwQzlcdTMwNkJcdTUxNjVcdTMwOEJcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHUzMEVCXHUzMEZDXHUzMEM4XHUzMENFXHUzMEZDXHUzMEM5XHU1NDBEXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJcdTY1QjBcdTg5OEZcdTMwRUJcdTMwRkNcdTMwQzhcdTMwNkVcdTMwQzdcdTMwRDVcdTMwQTlcdTMwRUJcdTMwQzhcdTU0MERcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIlx1NUI1MFx1MzBDRVx1MzBGQ1x1MzBDOVx1NTQwRFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlx1NjVCMFx1ODk4Rlx1NUI1MFx1MzBDRVx1MzBGQ1x1MzBDOVx1MzA2RVx1MzBDN1x1MzBENVx1MzBBOVx1MzBFQlx1MzBDOFx1NTQwRFwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlx1MzBBRFx1MzBGQ1x1MzA2N1x1N0RFOFx1OTZDNlwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdTMwQ0VcdTMwRkNcdTMwQzlcdTkwNzhcdTYyOUVcdTY2NDJcdTMwNkJcdTMwQURcdTMwRkNcdTMwOTJcdTYyQkNcdTMwNTlcdTMwNjhcdTdERThcdTk2QzZcdTMwRTJcdTMwRkNcdTMwQzlcdTMwNkJcdTUxNjVcdTMwOEJcIixcclxufTtcclxuXHJcbmNvbnN0IF9mcjogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBSYWNpbmVcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBBbm51bGVyXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgUmVmYWlyZVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgQ2FydGVcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3R5bGVcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJGb2N1c1wiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJSZWNoZXJjaGVyXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6UmVjaGVyY2hlciB8IEVzcGFjZTpcdTAwQzlkaXRlciB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk5vdXZlbGxlIHJhY2luZVwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNb2RlIE1hcmtkb3duXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiUGFubmVhdSBkZSBzdHlsZVwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZvY2FsaXNlciBsZSBuXHUwMTUzdWRcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiUmVjaGVyY2hlciBkZXMgblx1MDE1M3Vkc1wiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIlBhcmFtXHUwMEU4dHJlc1wiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJab29tIGF2YW50XCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJab29tIGFycmlcdTAwRThyZVwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBQZXJzb25uYWxpc1x1MDBFOVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgU3VwcHIuIGVuIGxvdFwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IE1vZGlmaWVyIGxlIHN0eWxlXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE5vdXZlbGxlIHJhY2luZVwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBBbm51bGVyXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFJlZmFpcmVcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlIGdsb2JhbFwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBcdTAwQzlkaXRlclwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3R5bGVcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgQ29waWVyXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgQ291cGVyXCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBDb2xsZXJcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IEVuZmFudFwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IEVuZmFudCBnYXVjaGVcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgRnJcdTAwRThyZVwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFN1cHByaW1lclwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJNYXNxdWVyIGxhIGJhcnJlIGQnb3V0aWxzXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlIGdsb2JhbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIk5cdTAxNTN1ZCBlbmZhbnRcIixcclxuICAgIFwic20ucm9vdFwiOiBcIk5cdTAxNTN1ZCByYWNpbmVcIixcclxuICAgIFwic20uYmdcIjogXCJGb25kXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJDb3VsZXVyIHRleHRlXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiVGFpbGxlIHBvbGljZVwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiUG9saWNlXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiU3R5bGUgYm9yZHVyZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkNvdWxldXIgYm9yZHVyZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkxhcmdldXIgYm9yZHVyZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJSYXlvbiBib3JkdXJlXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTGFyZ2V1ciBtaW4uXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIkhhdXRldXIgbWluLlwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiQ29ubmV4aW9uXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBlXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiQ291bGV1clwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkxhcmdldXJcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkxvbmd1ZXVyXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggQXJjLWVuLWNpZWxcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIkRpcmVjdGlvbiBuXHUwMTUzdWRzXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiRXNwYWNlbWVudCBmclx1MDBFOHJlc1wiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIkRyb2l0ZVwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiR2F1Y2hlXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJMZXMgZGV1eFwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dGVcIixcclxuICAgIFwic20uc2VsXCI6IFwiU1x1MDBFOWxlY3Rpb25cIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJDb3VsZXVyIHNcdTAwRTlsZWN0aW9uXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiTGFyZ2V1ciBzXHUwMEU5bGVjdGlvblwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJEXHUwMEU5Y2FsYWdlIGNvbnRvdXJcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJDb3VsZXVyIGNvbnRvdXIgXHUwMEU5ZGl0aW9uXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJMYXJnZXVyIGNvbnRvdXIgXHUwMEU5ZGl0aW9uXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIkFsaWduZW1lbnQgdGV4dGVcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJNYXJnZSB0ZXh0ZVwiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIkhhdXRldXIgZGUgbGlnbmVcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJGb25kIGR1IGNhbmV2YXNcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJSXHUwMEU5aW5pdGlhbGlzZXJcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJGZXJtZXJcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJBZmZpY2hlciBiYXJyZSBkJ291dGlsc1wiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIk1hcmdlcyBiYXJyZVwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJIYXV0XCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIkRyb2l0ZVwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJCYXNcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiR2F1Y2hlXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiUG9zaXRpb24gYmFycmVcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJIYXV0XCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiQmFzXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJGb25kIGJhcnJlXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJGb25kIGJvdXRvblwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlN0eWxlIGJvcmR1cmUgYm91dG9uXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJDb3VsZXVyIGJvcmR1cmUgYm91dG9uXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIkNvdWxldXIgdGV4dGUgYm91dG9uXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUlx1MDBFOWluaXRpYWxpc2VyIGxhIGJhcnJlXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlIGR1IG5cdTAxNTN1ZFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJDb3VsZXVyIGxpZ25lXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxhcmdldXIgbGlnbmVcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJFZmZhY2VyIHBlcnNvbm5hbGlzYXRpb25cIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmF5b24gYm9yZHVyZVwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJSZWNoZXJjaGVyLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiUmFjaW5lXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTm91dmVsbGUgcmFjaW5lXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkVuZmFudFwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJQYXJhbVx1MDBFOHRyZXMgTWluZFpKXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiTGFuZ3VlXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIkxhbmd1ZSBkJ2ludGVyZmFjZVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUaFx1MDBFOG1lXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJUaFx1MDBFOG1lIGRlIGNvdWxldXJcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiQ2xhaXJcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJTb21icmVcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJBZmZpY2hlciBiYXJyZSBkJ291dGlsc1wiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJBZmZpY2hlciBsYSBiYXJyZVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJGb25kIGR1IGNhbmV2YXNcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkNvdWxldXIgZGUgZm9uZFwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTAwQzAgcHJvcG9zXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0ZXVyXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJBcHBsaWNhdGlvbiBkZSBjYXJ0ZSBtZW50YWxlIG9wZW4gc291cmNlIHBvdXIgT2JzaWRpYW4gYXZlYyBzdHlsZXMgcGVyc29ubmFsaXNcdTAwRTlzLCBjb25uZXhpb25zIGFyYy1lbi1jaWVsLCBtdWx0aS1zXHUwMEU5bGVjdGlvbiwgZ2xpc3Nlci1kXHUwMEU5cG9zZXIgZXQgaW1wb3J0L2V4cG9ydCBNYXJrZG93bi5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJNaXMgXHUwMEUwIGpvdXJcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkRcdTAwRTlwXHUwMEY0dCBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlNvdXRlbmlyIGwnYXV0ZXVyIG9wZW4gc291cmNlXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiUmFjY291cmNpcyBjbGF2aWVyXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlBlcnNvbm5hbGlzZXIgbGVzIHJhY2NvdXJjaXNcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUwMEM5ZGl0ZXIgbGUgblx1MDE1M3VkXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkFqb3V0ZXIgdW4gZnJcdTAwRThyZVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiQWpvdXRlciB1biBlbmZhbnRcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZvY2FsaXNlciBsZSBuXHUwMTUzdWRcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiQW5udWxlclwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJSZWZhaXJlXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiUmV0b3VyIFx1MDBFMCBsYSBsaWduZSAoZW4gXHUwMEU5ZGl0aW9uKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJEXHUwMEU5cGxhY2VyIGxlIGNhbmV2YXNcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJab29tIGF2YW50XCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlpvb20gYXJyaVx1MDBFOHJlXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiUlx1MDBFOWluaXRpYWxpc2VyIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hdmlndWVyIGhhdXRcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiTmF2aWd1ZXIgYmFzXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hdmlndWVyIGdhdWNoZVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWd1ZXIgZHJvaXRlXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJBcHB1eWV6Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJEXHUwMEU5ZmlsZW1lbnQgZXQgem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVyc2VyIGRcdTAwRTlmaWxlbWVudCBWXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJzZXIgZFx1MDBFOWZpbGVtZW50IEhcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnNlciB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTAwQzlkaXRlciBcdTAwRTAgbGEgY3JcdTAwRTlhdGlvblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIk1vZGUgXHUwMEU5ZGl0aW9uIFx1MDBFMCBsYSBjclx1MDBFOWF0aW9uXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIk5vbSByYWNpbmVcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIk5vbSBwYXIgZFx1MDBFOWZhdXQgZGVzIHJhY2luZXNcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIk5vbSBlbmZhbnRcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJOb20gcGFyIGRcdTAwRTlmYXV0IGRlcyBlbmZhbnRzXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiU2Fpc2llIHBvdXIgXHUwMEU5ZGl0ZXJcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiXHUwMEM5ZGl0ZXIgZW4gdGFwYW50IHF1YW5kIHVuIG5cdTAxNTN1ZCBlc3Qgc1x1MDBFOWxlY3Rpb25uXHUwMEU5XCIsXHJcbn07XHJcblxyXG5jb25zdCBfZGU6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgV3VyemVsXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgUlx1MDBGQ2NrZ1x1MDBFNG5naWdcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBXaWVkZXJob2xlblwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgS2FydGVcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZva3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlN1Y2hlblwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlN1Y2hlbiB8IExlZXJ0YXN0ZTpCZWFyYmVpdGVuIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTmV1ZSBXdXJ6ZWxcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24tTW9kdXNcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlsLVBhbmVsXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiS25vdGVuIGZva3Vzc2llcmVuXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIktub3RlbiBzdWNoZW5cIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJFaW5zdGVsbHVuZ2VuXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlZlcmdyXHUwMEY2XHUwMERGZXJuXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJWZXJrbGVpbmVyblwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBCZW51dHplcmRlZmluaWVydFwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgQWxsZSBsXHUwMEY2c2NoZW5cIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsIGJlYXJiZWl0ZW5cIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTmV1ZSBXdXJ6ZWxcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgUlx1MDBGQ2NrZ1x1MDBFNG5naWdcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgV2llZGVyaG9sZW5cIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbGVyIFN0aWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgQmVhcmJlaXRlblwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBLb3BpZXJlblwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIEF1c3NjaG5laWRlblwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgRWluZlx1MDBGQ2dlblwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgS2luZGtub3RlblwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IExpbmtlciBLaW5ka25vdGVuXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEdlc2Nod2lzdGVyXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgTFx1MDBGNnNjaGVuXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIldlcmt6ZXVnbGVpc3RlIGF1c2JsZW5kZW5cIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsZXIgU3RpbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIktpbmRrbm90ZW5cIixcclxuICAgIFwic20ucm9vdFwiOiBcIld1cnplbGtub3RlblwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZXh0ZmFyYmVcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJTY2hyaWZ0Z3JcdTAwRjZcdTAwREZlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJTY2hyaWZ0YXJ0XCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiUmFobWVuc3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlJhaG1lbmZhcmJlXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiUmFobWVuYnJlaXRlXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIkVja2VucmFkaXVzXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBCcmVpdGVcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiTWluLiBIXHUwMEY2aGVcIixcclxuICAgIFwic20uY29ublwiOiBcIlZlcmJpbmR1bmdcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cFwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkZhcmJlXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiQnJlaXRlXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMXHUwMEU0bmdlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmVnZW5ib2dlblwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiS25vdGVucmljaHR1bmdcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJHZXNjaHdpc3RlcmFic3RhbmRcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJSZWNodHNcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIkxpbmtzXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCZWlkZVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dGVcIixcclxuICAgIFwic20uc2VsXCI6IFwiQXVzd2FobFwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIkF1c3dhaGxmYXJiZVwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIkF1c3dhaGxicmVpdGVcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiS29udHVyLVZlcnNhdHpcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJCZWFyYmVpdHVuZ3NyYWhtZW5mYXJiZVwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiQmVhcmJlaXR1bmdzcmFobWVuYnJlaXRlXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRleHRhdXNyaWNodHVuZ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRleHRhYnN0YW5kXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiWmVpbGVuaFx1MDBGNmhlXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiTGVpbndhbmQtSGludGVyZ3J1bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJadXJcdTAwRkNja3NldHplblwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlNjaGxpZVx1MDBERmVuXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiV2Vya3pldWdsZWlzdGUgYW56ZWlnZW5cIixcclxuICAgIFwic20udGJQYWRcIjogXCJXZXJremV1Z2xlaXN0ZSBBYnN0YW5kXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIk9iZW5cIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiUmVjaHRzXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIlVudGVuXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIkxpbmtzXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiV2Vya3pldWdsZWlzdGUgUG9zaXRpb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJPYmVuXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiVW50ZW5cIixcclxuICAgIFwic20udGJCZ1wiOiBcIldlcmt6ZXVnbGVpc3RlIEhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJTY2hhbHRmbFx1MDBFNGNoZSBIaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlNjaGFsdGZsXHUwMEU0Y2hlIFJhaG1lbnN0aWxcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlNjaGFsdGZsXHUwMEU0Y2hlIFJhaG1lbmZhcmJlXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIlNjaGFsdGZsXHUwMEU0Y2hlIFRleHRmYXJiZVwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIldlcmt6ZXVnbGVpc3RlIHp1clx1MDBGQ2Nrc2V0emVuXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEtub3RlbnN0aWxcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiTGluaWVuZmFyYmVcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGluaWVuYnJlaXRlXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiQW5wYXNzdW5nIHp1clx1MDBGQ2Nrc2V0emVuXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIkVja2VucmFkaXVzXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIktub3RlbiBzdWNoZW4uLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJXdXJ6ZWxcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOZXVlIFd1cnplbFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJLaW5kXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBFaW5zdGVsbHVuZ2VuXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3ByYWNoZVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJPYmVyZmxcdTAwRTRjaGVuc3ByYWNoZVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUaGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiRmFyYnRoZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkhlbGxcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJEdW5rZWxcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJXZXJremV1Z2xlaXN0ZSBhbnplaWdlblwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJXZXJremV1Z2xlaXN0ZSBhbnplaWdlblwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJMZWlud2FuZC1IaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiSGludGVyZ3J1bmRmYXJiZVwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTAwRENiZXJcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaW9uXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRvclwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiRnVua3Rpb25zcmVpY2hlIE9wZW4tU291cmNlLU1pbmRtYXAtQXBwIGZcdTAwRkNyIE9ic2lkaWFuIG1pdCBiZW51dHplcmRlZmluaWVydGVuIFN0aWxlbiwgUmVnZW5ib2dlbi1WZXJiaW5kdW5nZW4sIE1laHJmYWNoYXVzd2FobCwgRHJhZyAmIERyb3AgdW5kIE1hcmtkb3duLUltcG9ydC9FeHBvcnQuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiQWt0dWFsaXNpZXJ0XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItUmVwb3NpdG9yeVwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiT3Blbi1Tb3VyY2UtQXV0b3IgdW50ZXJzdFx1MDBGQ3R6ZW5cIixcclxuICAgIFwic2V0LmtleXNcIjogXCJUYXN0ZW5rb21iaW5hdGlvbmVuXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlRhc3RlbmtvbWJpbmF0aW9uZW4gYW5wYXNzZW5cIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiS25vdGVuIGJlYXJiZWl0ZW5cIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiR2VzY2h3aXN0ZXIgaGluenVmXHUwMEZDZ2VuXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJLaW5kIGhpbnp1Zlx1MDBGQ2dlblwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiS25vdGVuIGZva3Vzc2llcmVuXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlJcdTAwRkNja2dcdTAwRTRuZ2lnXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIldpZWRlcmhvbGVuXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiWmVpbGVudW1icnVjaCAoYmVpbSBCZWFyYmVpdGVuKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJMZWlud2FuZCB6aWVoZW5cIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJWZXJnclx1MDBGNlx1MDBERmVyblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJWZXJrbGVpbmVyblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlpvb20genVyXHUwMEZDY2tzZXR6ZW5cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hY2ggb2JlblwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOYWNoIHVudGVuXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hY2ggbGlua3NcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIk5hY2ggcmVjaHRzXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJUYXN0ZSBkclx1MDBGQ2NrZW4uLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjcm9sbGVuIHVuZCBab29tZW5cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJWZXJ0aWthbGVzIFNjcm9sbGVuIHVta2VocmVuXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSG9yaXpvbnRhbGVzIFNjcm9sbGVuIHVta2VocmVuXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiWm9vbS1SaWNodHVuZyB1bWtlaHJlblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiQmVpIEVyc3RlbGx1bmcgYmVhcmJlaXRlblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIkJlYXJiZWl0dW5nc21vZHVzIGJlaW0gRXJzdGVsbGVuIG5ldWVyIEtub3RlblwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJXdXJ6ZWxrbm90ZW5uYW1lXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJTdGFuZGFyZG5hbWUgZlx1MDBGQ3IgbmV1ZSBXdXJ6ZWxuXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJLaW5ka25vdGVubmFtZVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmFtZSBmXHUwMEZDciBuZXVlIEtpbmRlclwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlRpcHBlbiB6dW0gQmVhcmJlaXRlblwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJCZWkgQXVzd2FobCBkaXJla3QgYmVhcmJlaXRlblwiLFxyXG59O1xyXG5cclxuY29uc3QgX2VzOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJhXHUwMEVEelwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IERlc2hhY2VyXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgUmVoYWNlclwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgTWFwYVwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG9cIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJFbmZvY2FyXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIkJ1c2NhclwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOkJ1c2NhciB8IEVzcGFjaW86RWRpdGFyIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTnVldmEgcmFcdTAwRUR6XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1vZG8gTWFya2Rvd25cIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJQYW5lbCBkZSBlc3RpbG9cIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJFbmZvY2FyIG5vZG9cIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiQnVzY2FyIG5vZG9zXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiQWp1c3Rlc1wiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJBY2VyY2FyXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJBbGVqYXJcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgUGVyc29uYWxpemFkb1wiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgQm9ycmFyIGVuIGxvdGVcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFZGl0YXIgZXN0aWxvXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE51ZXZhIHJhXHUwMEVEelwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBEZXNoYWNlclwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBSZWhhY2VyXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG8gZ2xvYmFsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIEVkaXRhclwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIENvcGlhclwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIENvcnRhclwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgUGVnYXJcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IEhpam9cIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBIaWpvIGl6cXVpZXJkb1wiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBIZXJtYW5vXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgRWxpbWluYXJcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiT2N1bHRhciBiYXJyYVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG8gZ2xvYmFsXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiTm9kbyBoaWpvXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJOb2RvIHJhXHUwMEVEelwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkZvbmRvXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJDb2xvciBkZSB0ZXh0b1wiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlRhbWFcdTAwRjFvXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJGdWVudGVcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJFc3RpbG8gYm9yZGVcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJDb2xvciBib3JkZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkFuY2hvIGJvcmRlXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlJhZGlvIGJvcmRlXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiQW5jaG8gbVx1MDBFRG4uXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIkFsdG8gbVx1MDBFRG4uXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJDb25leGlcdTAwRjNuXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUaXBvXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiQ29sb3JcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJBbmNob1wiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTG9uZ2l0dWRcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBBcmNvXHUwMEVEcmlzXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJEaXJlY2NpXHUwMEYzblwiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIkVzcGFjaW8gZW50cmUgaGVybWFub3NcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJEZXJlY2hhXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJJenF1aWVyZGFcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkFtYm9zXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXRhXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlNlbGVjY2lcdTAwRjNuXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiQ29sb3Igc2VsZWNjaVx1MDBGM25cIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJBbmNobyBzZWxlY2NpXHUwMEYzblwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJEZXNwbGF6YW1pZW50byBjb250b3Jub1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIkNvbG9yIGNvbnRvcm5vIGVkaWNpXHUwMEYzblwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiQW5jaG8gY29udG9ybm8gZWRpY2lcdTAwRjNuXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIkFsaW5lYWNpXHUwMEYzblwiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlJlbGxlbm8gdGV4dG9cIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJBbHR1cmEgbFx1MDBFRG5lYVwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkZvbmRvIGxpZW56b1wiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlJlc3RhYmxlY2VyXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiQ2VycmFyXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiTW9zdHJhciBiYXJyYVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlJlbGxlbm8gYmFycmFcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiQXJyaWJhXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIkRlcmVjaGFcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiQWJham9cIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiSXpxdWllcmRhXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiUG9zaWNpXHUwMEYzbiBiYXJyYVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIkFycmliYVwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIkFiYWpvXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJGb25kbyBiYXJyYVwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiRm9uZG8gYm90XHUwMEYzblwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIkVzdGlsbyBib3JkZSBib3RcdTAwRjNuXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJDb2xvciBib3JkZSBib3RcdTAwRjNuXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIkNvbG9yIHRleHRvIGJvdFx1MDBGM25cIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJSZXN0YWJsZWNlciBiYXJyYVwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG8gbm9kb1wiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJDb2xvciBsXHUwMEVEbmVhXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkFuY2hvIGxcdTAwRURuZWFcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJCb3JyYXIgcGVyc29uYWxpemFjaVx1MDBGM25cIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmFkaW8gYm9yZGVcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiQnVzY2FyIG5vZG9zLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiUmFcdTAwRUR6XCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTnVldmEgcmFcdTAwRUR6XCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkhpam9cIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiQWp1c3RlcyBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJJZGlvbWFcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiSWRpb21hIGludGVyZmF6XCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRlbWFcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlRlbWEgZGUgY29sb3JcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiQ2xhcm9cIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJPc2N1cm9cIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJNb3N0cmFyIGJhcnJhXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIk1vc3RyYXIgYmFycmFcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiRm9uZG8gbGllbnpvXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJDb2xvciBkZSBmb25kb1wiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJBY2VyY2EgZGVcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaVx1MDBGM25cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkF1dG9yXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJBcGxpY2FjaVx1MDBGM24gZGUgbWFwYSBtZW50YWwgZGUgY1x1MDBGM2RpZ28gYWJpZXJ0byBwYXJhIE9ic2lkaWFuIGNvbiBlc3RpbG9zIHBlcnNvbmFsaXphZG9zLCBjb25leGlvbmVzIGFyY29cdTAwRURyaXMsIG11bHRpLXNlbGVjY2lcdTAwRjNuLCBhcnJhc3RyYXIgeSBzb2x0YXIgZSBpbXBvcnRhY2lcdTAwRjNuL2V4cG9ydGFjaVx1MDBGM24gTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiQWN0dWFsaXphZG9cIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIlJlcG9zaXRvcmlvIEdpdEh1YlwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiQXBveWFyIGFsIGF1dG9yIG9wZW4gc291cmNlXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiQXRham9zIGRlIHRlY2xhZG9cIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiUGVyc29uYWxpemFyIGF0YWpvc1wiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJFZGl0YXIgbm9kb1wiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJBXHUwMEYxYWRpciBoZXJtYW5vXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJBXHUwMEYxYWRpciBoaWpvXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJFbmZvY2FyIG5vZG9cIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiRGVzaGFjZXJcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiUmVoYWNlclwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlNhbHRvIGRlIGxcdTAwRURuZWEgKGVuIGVkaWNpXHUwMEYzbilcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiQXJyYXN0cmFyIGxpZW56b1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIkFjZXJjYXJcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiQWxlamFyXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiUmVzdGFibGVjZXIgem9vbVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiQXJyaWJhXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIkFiYWpvXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIkl6cXVpZXJkYVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiRGVyZWNoYVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiUHVsc2UuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIkRlc3BsYXphbWllbnRvIHkgem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVydGlyIGRlc3BsYXphbWllbnRvIFZcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJJbnZlcnRpciBkZXNwbGF6YW1pZW50byBIXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiSW52ZXJ0aXIgem9vbVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiRWRpdGFyIGFsIGNyZWFyXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiTW9kbyBlZGljaVx1MDBGM24gYWwgY3JlYXIgbm9kb3NcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiTm9tYnJlIHJhXHUwMEVEelwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiTm9tYnJlIHBvciBkZWZlY3RvIGRlIHJhXHUwMEVEY2VzXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJOb21icmUgaGlqb1wiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIk5vbWJyZSBwb3IgZGVmZWN0byBkZSBoaWpvc1wiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlRlY2xlYXIgcGFyYSBlZGl0YXJcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiRWRpdGFyIGFsIHRlY2xlYXIgY29uIG5vZG8gc2VsZWNjaW9uYWRvXCIsXHJcbn07XHJcblxyXG5jb25zdCBfcnU6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgXHUwNDFBXHUwNDNFXHUwNDQwXHUwNDM1XHUwNDNEXHUwNDRDXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgXHUwNDFFXHUwNDQyXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgXHUwNDFGXHUwNDNFXHUwNDMyXHUwNDQyXHUwNDNFXHUwNDQwXHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBcdTA0MUFcdTA0MzBcdTA0NDBcdTA0NDJcdTA0MzBcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNDIxXHUwNDQyXHUwNDM4XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiXHUwNDI0XHUwNDNFXHUwNDNBXHUwNDQzXHUwNDQxXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlx1MDQxRlx1MDQzRVx1MDQzOFx1MDQ0MVx1MDQzQVwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlx1MDQxRlx1MDQzRVx1MDQzOFx1MDQ0MVx1MDQzQSB8IFx1MDQxRlx1MDQ0MFx1MDQzRVx1MDQzMVx1MDQzNVx1MDQzQjpcdTA0MjBcdTA0MzVcdTA0MzQuIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiXHUwNDFEXHUwNDNFXHUwNDMyXHUwNDRCXHUwNDM5IFx1MDQzQVx1MDQzRVx1MDQ0MFx1MDQzNVx1MDQzRFx1MDQ0Q1wiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJcdTA0MjBcdTA0MzVcdTA0MzZcdTA0MzhcdTA0M0MgTWFya2Rvd25cIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJcdTA0MUZcdTA0MzBcdTA0M0RcdTA0MzVcdTA0M0JcdTA0NEMgXHUwNDQxXHUwNDQyXHUwNDM4XHUwNDNCXHUwNDM1XHUwNDM5XCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiXHUwNDI0XHUwNDNFXHUwNDNBXHUwNDQzXHUwNDQxIFx1MDQzRFx1MDQzMCBcdTA0NDNcdTA0MzdcdTA0M0JcdTA0MzVcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiXHUwNDFGXHUwNDNFXHUwNDM4XHUwNDQxXHUwNDNBIFx1MDQ0M1x1MDQzN1x1MDQzQlx1MDQzRVx1MDQzMlwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIlx1MDQxRFx1MDQzMFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzRVx1MDQzOVx1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJcdTA0MjNcdTA0MzJcdTA0MzVcdTA0M0JcdTA0MzhcdTA0NDdcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlx1MDQyM1x1MDQzQ1x1MDQzNVx1MDQzRFx1MDQ0Q1x1MDQ0OFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBcdTA0MjFcdTA0MzJcdTA0M0VcdTA0MzlcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDQyM1x1MDQzNFx1MDQzMFx1MDQzQlx1MDQzOFx1MDQ0Mlx1MDQ0QyBcdTA0MzJcdTA0NDFcdTA0NTFcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA0MjFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NENcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgXHUwNDFEXHUwNDNFXHUwNDMyXHUwNDRCXHUwNDM5IFx1MDQzQVx1MDQzRVx1MDQ0MFx1MDQzNVx1MDQzRFx1MDQ0Q1wiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBcdTA0MUVcdTA0NDJcdTA0M0NcdTA0MzVcdTA0M0RcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgXHUwNDFGXHUwNDNFXHUwNDMyXHUwNDQyXHUwNDNFXHUwNDQwXHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA0MTNcdTA0M0JcdTA0M0VcdTA0MzFcdTA0MzBcdTA0M0JcdTA0NENcdTA0M0RcdTA0NEJcdTA0MzkgXHUwNDQxXHUwNDQyXHUwNDM4XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1MDQyMFx1MDQzNVx1MDQzNFx1MDQzMFx1MDQzQVx1MDQ0Mlx1MDQzOFx1MDQ0MFx1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNDIxXHUwNDQyXHUwNDM4XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIFx1MDQxQVx1MDQzRVx1MDQzRlx1MDQzOFx1MDQ0MFx1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFx1MDQxMlx1MDQ0Qlx1MDQ0MFx1MDQzNVx1MDQzN1x1MDQzMFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgXHUwNDEyXHUwNDQxXHUwNDQyXHUwNDMwXHUwNDMyXHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBcdTA0MTRcdTA0M0VcdTA0NDdcdTA0MzVcdTA0NDBcdTA0M0RcdTA0MzhcdTA0MzlcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBcdTA0MUJcdTA0MzVcdTA0MzJcdTA0NEJcdTA0MzkgXHUwNDM0XHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQwXHUwNDNEXHUwNDM4XHUwNDM5XCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFx1MDQyMVx1MDQzRVx1MDQ0MVx1MDQzNVx1MDQzNFx1MDQzRFx1MDQzOFx1MDQzOVwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDQyM1x1MDQzNFx1MDQzMFx1MDQzQlx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJcdTA0MjFcdTA0M0FcdTA0NDBcdTA0NEJcdTA0NDJcdTA0NEMgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDQxM1x1MDQzQlx1MDQzRVx1MDQzMVx1MDQzMFx1MDQzQlx1MDQ0Q1x1MDQzRFx1MDQ0Qlx1MDQzOSBcdTA0NDFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NENcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJcdTA0MTRcdTA0M0VcdTA0NDdcdTA0MzVcdTA0NDBcdTA0M0RcdTA0MzhcdTA0MzkgXHUwNDQzXHUwNDM3XHUwNDM1XHUwNDNCXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJcdTA0MUFcdTA0M0VcdTA0NDBcdTA0M0RcdTA0MzVcdTA0MzJcdTA0M0VcdTA0MzkgXHUwNDQzXHUwNDM3XHUwNDM1XHUwNDNCXCIsXHJcbiAgICBcInNtLmJnXCI6IFwiXHUwNDI0XHUwNDNFXHUwNDNEXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJcdTA0MjZcdTA0MzJcdTA0MzVcdTA0NDIgXHUwNDQyXHUwNDM1XHUwNDNBXHUwNDQxXHUwNDQyXHUwNDMwXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiXHUwNDIwXHUwNDMwXHUwNDM3XHUwNDNDXHUwNDM1XHUwNDQwIFx1MDQ0OFx1MDQ0MFx1MDQzOFx1MDQ0NFx1MDQ0Mlx1MDQzMFwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiXHUwNDI4XHUwNDQwXHUwNDM4XHUwNDQ0XHUwNDQyXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiXHUwNDIxXHUwNDQyXHUwNDM4XHUwNDNCXHUwNDRDIFx1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0NDBcdTA0MzBcdTA0M0NcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJcdTA0MjhcdTA0MzhcdTA0NDBcdTA0MzhcdTA0M0RcdTA0MzAgXHUwNDQwXHUwNDMwXHUwNDNDXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlx1MDQyMFx1MDQzMFx1MDQzNFx1MDQzOFx1MDQ0M1x1MDQ0MVwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIlx1MDQxQ1x1MDQzOFx1MDQzRC4gXHUwNDQ4XHUwNDM4XHUwNDQwXHUwNDM4XHUwNDNEXHUwNDMwXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIlx1MDQxQ1x1MDQzOFx1MDQzRC4gXHUwNDMyXHUwNDRCXHUwNDQxXHUwNDNFXHUwNDQyXHUwNDMwXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJcdTA0MjFcdTA0M0VcdTA0MzVcdTA0MzRcdTA0MzhcdTA0M0RcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzVcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1MDQyMlx1MDQzOFx1MDQzRlwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MlwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1MDQyOFx1MDQzOFx1MDQ0MFx1MDQzOFx1MDQzRFx1MDQzMFwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHUwNDE0XHUwNDNCXHUwNDM4XHUwNDNEXHUwNDMwXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggXHUwNDIwXHUwNDMwXHUwNDM0XHUwNDQzXHUwNDMzXHUwNDMwXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdTA0MURcdTA0MzBcdTA0M0ZcdTA0NDBcdTA0MzBcdTA0MzJcdTA0M0JcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzVcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJcdTA0MUVcdTA0NDJcdTA0NDFcdTA0NDJcdTA0NDNcdTA0M0YgXHUwNDNDXHUwNDM1XHUwNDM2XHUwNDM0XHUwNDQzIFx1MDQ0M1x1MDQzN1x1MDQzQlx1MDQzMFx1MDQzQ1x1MDQzOFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlx1MDQxMlx1MDQzRlx1MDQ0MFx1MDQzMFx1MDQzMlx1MDQzRVwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiXHUwNDEyXHUwNDNCXHUwNDM1XHUwNDMyXHUwNDNFXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJcdTA0MUVcdTA0MzFcdTA0MzBcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJcdTA0MUZcdTA0MzBcdTA0M0JcdTA0MzhcdTA0NDJcdTA0NDBcdTA0MzBcIixcclxuICAgIFwic20uc2VsXCI6IFwiXHUwNDEyXHUwNDRCXHUwNDM0XHUwNDM1XHUwNDNCXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM1XCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQzMlx1MDQ0Qlx1MDQzNFx1MDQzNVx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzOFx1MDQ0RlwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlx1MDQyOFx1MDQzOFx1MDQ0MFx1MDQzOFx1MDQzRFx1MDQzMCBcdTA0MzJcdTA0NEJcdTA0MzRcdTA0MzVcdTA0M0JcdTA0MzVcdTA0M0RcdTA0MzhcdTA0NEZcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiXHUwNDIxXHUwNDNDXHUwNDM1XHUwNDQ5XHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM1IFx1MDQzQVx1MDQzRVx1MDQzRFx1MDQ0Mlx1MDQ0M1x1MDQ0MFx1MDQzMFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0M0FcdTA0M0VcdTA0M0RcdTA0NDJcdTA0NDNcdTA0NDBcdTA0MzAgXHUwNDQwXHUwNDM1XHUwNDM0LlwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiXHUwNDI4XHUwNDM4XHUwNDQwXHUwNDM4XHUwNDNEXHUwNDMwIFx1MDQzQVx1MDQzRVx1MDQzRFx1MDQ0Mlx1MDQ0M1x1MDQ0MFx1MDQzMCBcdTA0NDBcdTA0MzVcdTA0MzQuXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1MDQxMlx1MDQ0Qlx1MDQ0MFx1MDQzMFx1MDQzMlx1MDQzRFx1MDQzOFx1MDQzMlx1MDQzMFx1MDQzRFx1MDQzOFx1MDQzNVwiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1MDQxRVx1MDQ0Mlx1MDQ0MVx1MDQ0Mlx1MDQ0M1x1MDQzRiBcdTA0NDJcdTA0MzVcdTA0M0FcdTA0NDFcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJcdTA0MTJcdTA0NEJcdTA0NDFcdTA0M0VcdTA0NDJcdTA0MzAgXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHUwNDI0XHUwNDNFXHUwNDNEIFx1MDQ0NVx1MDQzRVx1MDQzQlx1MDQ0MVx1MDQ0Mlx1MDQzMFwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1MDQyMVx1MDQzMVx1MDQ0MFx1MDQzRVx1MDQ0MVx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlx1MDQxN1x1MDQzMFx1MDQzQVx1MDQ0MFx1MDQ0Qlx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlx1MDQxRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQ0QyBcdTA0MzhcdTA0M0RcdTA0NDFcdTA0NDJcdTA0NDBcdTA0NDNcdTA0M0NcdTA0MzVcdTA0M0RcdTA0NDJcdTA0M0VcdTA0MzJcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdTA0MUVcdTA0NDJcdTA0NDFcdTA0NDJcdTA0NDNcdTA0M0YgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDM4XCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1MDQyMVx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0NVx1MDQ0M1wiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTA0MjFcdTA0M0ZcdTA0NDBcdTA0MzBcdTA0MzJcdTA0MzBcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHUwNDIxXHUwNDNEXHUwNDM4XHUwNDM3XHUwNDQzXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1MDQyMVx1MDQzQlx1MDQzNVx1MDQzMlx1MDQzMFwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MDQxRlx1MDQzRVx1MDQzN1x1MDQzOFx1MDQ0Nlx1MDQzOFx1MDQ0RiBcdTA0M0ZcdTA0MzBcdTA0M0RcdTA0MzVcdTA0M0JcdTA0MzhcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTA0MjFcdTA0MzJcdTA0MzVcdTA0NDBcdTA0NDVcdTA0NDNcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTA0MjFcdTA0M0RcdTA0MzhcdTA0MzdcdTA0NDNcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzRCBcdTA0M0ZcdTA0MzBcdTA0M0RcdTA0MzVcdTA0M0JcdTA0MzhcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzRCBcdTA0M0FcdTA0M0RcdTA0M0VcdTA0M0ZcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTA0MjFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NEMgXHUwNDQwXHUwNDMwXHUwNDNDXHUwNDNBXHUwNDM4IFx1MDQzQVx1MDQzRFx1MDQzRVx1MDQzRlx1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzQVx1MDQzOCBcdTA0M0FcdTA0M0RcdTA0M0VcdTA0M0ZcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQ0Mlx1MDQzNVx1MDQzQVx1MDQ0MVx1MDQ0Mlx1MDQzMCBcdTA0M0FcdTA0M0RcdTA0M0VcdTA0M0ZcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTA0MjFcdTA0MzFcdTA0NDBcdTA0M0VcdTA0NDFcdTA0MzhcdTA0NDJcdTA0NEMgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDQyMVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0QyBcdTA0NDNcdTA0MzdcdTA0M0JcdTA0MzBcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQzQlx1MDQzOFx1MDQzRFx1MDQzOFx1MDQzOFwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdTA0MjhcdTA0MzhcdTA0NDBcdTA0MzhcdTA0M0RcdTA0MzAgXHUwNDNCXHUwNDM4XHUwNDNEXHUwNDM4XHUwNDM4XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHUwNDIxXHUwNDMxXHUwNDQwXHUwNDNFXHUwNDQxXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzRFx1MDQzMFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzRVx1MDQzOVx1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJcdTA0MjBcdTA0MzBcdTA0MzRcdTA0MzhcdTA0NDNcdTA0NDFcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiXHUwNDFGXHUwNDNFXHUwNDM4XHUwNDQxXHUwNDNBIFx1MDQ0M1x1MDQzN1x1MDQzQlx1MDQzRVx1MDQzMi4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MDQxQVx1MDQzRVx1MDQ0MFx1MDQzNVx1MDQzRFx1MDQ0Q1wiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1MDQxRFx1MDQzRVx1MDQzMlx1MDQ0Qlx1MDQzOSBcdTA0M0FcdTA0M0VcdTA0NDBcdTA0MzVcdTA0M0RcdTA0NENcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHUwNDE0XHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQwXHUwNDNEXHUwNDM4XHUwNDM5XCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIlx1MDQxRFx1MDQzMFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzRVx1MDQzOVx1MDQzQVx1MDQzOCBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdTA0MkZcdTA0MzdcdTA0NEJcdTA0M0FcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHUwNDJGXHUwNDM3XHUwNDRCXHUwNDNBIFx1MDQzOFx1MDQzRFx1MDQ0Mlx1MDQzNVx1MDQ0MFx1MDQ0NFx1MDQzNVx1MDQzOVx1MDQ0MVx1MDQzMFwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdTA0MjJcdTA0MzVcdTA0M0NcdTA0MzBcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0Mlx1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0RiBcdTA0NDJcdTA0MzVcdTA0M0NcdTA0MzBcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiXHUwNDIxXHUwNDMyXHUwNDM1XHUwNDQyXHUwNDNCXHUwNDMwXHUwNDRGXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiXHUwNDIyXHUwNDUxXHUwNDNDXHUwNDNEXHUwNDMwXHUwNDRGXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiXHUwNDFGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDRDIFx1MDQzOFx1MDQzRFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQ0M1x1MDQzQ1x1MDQzNVx1MDQzRFx1MDQ0Mlx1MDQzRVx1MDQzMlwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJcdTA0MUZcdTA0M0VcdTA0M0FcdTA0MzBcdTA0MzdcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzRCBcdTA0NDVcdTA0M0VcdTA0M0JcdTA0NDFcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0NDRcdTA0M0VcdTA0M0RcdTA0MzBcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiXHUwNDFFIFx1MDQzRlx1MDQ0MFx1MDQzRVx1MDQzM1x1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzQ1x1MDQzNVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1MDQxMlx1MDQzNVx1MDQ0MFx1MDQ0MVx1MDQzOFx1MDQ0RlwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHUwNDEwXHUwNDMyXHUwNDQyXHUwNDNFXHUwNDQwXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJcdTA0MUZcdTA0NDBcdTA0MzhcdTA0M0JcdTA0M0VcdTA0MzZcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzUgXHUwNDM0XHUwNDNCXHUwNDRGIFx1MDQzOFx1MDQzRFx1MDQ0Mlx1MDQzNVx1MDQzQlx1MDQzQlx1MDQzNVx1MDQzQVx1MDQ0Mi1cdTA0M0FcdTA0MzBcdTA0NDBcdTA0NDIgXHUwNDQxIFx1MDQzRVx1MDQ0Mlx1MDQzQVx1MDQ0MFx1MDQ0Qlx1MDQ0Mlx1MDQ0Qlx1MDQzQyBcdTA0M0FcdTA0M0VcdTA0MzRcdTA0M0VcdTA0M0MgXHUwNDM0XHUwNDNCXHUwNDRGIE9ic2lkaWFuOiBcdTA0NDFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0MzgsIFx1MDQ0MFx1MDQzMFx1MDQzNFx1MDQ0M1x1MDQzNlx1MDQzRFx1MDQ0Qlx1MDQzNSBcdTA0NDFcdTA0M0VcdTA0MzVcdTA0MzRcdTA0MzhcdTA0M0RcdTA0MzVcdTA0M0RcdTA0MzhcdTA0NEYsIFx1MDQzQ1x1MDQzRFx1MDQzRVx1MDQzNlx1MDQzNVx1MDQ0MVx1MDQ0Mlx1MDQzMlx1MDQzNVx1MDQzRFx1MDQzRFx1MDQ0Qlx1MDQzOSBcdTA0MzJcdTA0NEJcdTA0MzFcdTA0M0VcdTA0NDAsIFx1MDQzRlx1MDQzNVx1MDQ0MFx1MDQzNVx1MDQ0Mlx1MDQzMFx1MDQ0MVx1MDQzQVx1MDQzOFx1MDQzMlx1MDQzMFx1MDQzRFx1MDQzOFx1MDQzNSBcdTA0MzggTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHUwNDFFXHUwNDMxXHUwNDNEXHUwNDNFXHUwNDMyXHUwNDNCXHUwNDM1XHUwNDNEXHUwNDNFXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJcdTA0MjBcdTA0MzVcdTA0M0ZcdTA0M0VcdTA0MzdcdTA0MzhcdTA0NDJcdTA0M0VcdTA0NDBcdTA0MzhcdTA0MzkgR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdTA0MUZcdTA0M0VcdTA0MzRcdTA0MzRcdTA0MzVcdTA0NDBcdTA0MzZcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDMwXHUwNDMyXHUwNDQyXHUwNDNFXHUwNDQwXHUwNDMwXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiXHUwNDIxXHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQyXHUwNDMwXHUwNDNEXHUwNDM4XHUwNDRGIFx1MDQzQVx1MDQzQlx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0OFwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJcdTA0MURcdTA0MzBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzhcdTA0NDJcdTA0NEMgXHUwNDNBXHUwNDNCXHUwNDMwXHUwNDMyXHUwNDM4XHUwNDQ4XHUwNDM4XCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1MDQyMFx1MDQzNVx1MDQzNFx1MDQzMFx1MDQzQVx1MDQ0Mlx1MDQzOFx1MDQ0MFx1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0Mlx1MDQ0QyBcdTA0NDNcdTA0MzdcdTA0MzVcdTA0M0JcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHUwNDE0XHUwNDNFXHUwNDMxXHUwNDMwXHUwNDMyXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQ0MVx1MDQzRVx1MDQ0MVx1MDQzNVx1MDQzNFx1MDQzRFx1MDQzOFx1MDQzOVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHUwNDE0XHUwNDNFXHUwNDMxXHUwNDMwXHUwNDMyXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzNFx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0MFx1MDQzRFx1MDQzOFx1MDQzOVwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiXHUwNDI0XHUwNDNFXHUwNDNBXHUwNDQzXHUwNDQxIFx1MDQzRFx1MDQzMCBcdTA0NDNcdTA0MzdcdTA0M0JcdTA0MzVcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHUwNDFFXHUwNDQyXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1MDQxRlx1MDQzRVx1MDQzMlx1MDQ0Mlx1MDQzRVx1MDQ0MFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1MDQxRlx1MDQzNVx1MDQ0MFx1MDQzNVx1MDQzRFx1MDQzRVx1MDQ0MSBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0M0FcdTA0MzggKFx1MDQ0MFx1MDQzNVx1MDQzNC4pXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlx1MDQxRlx1MDQzNVx1MDQ0MFx1MDQzNVx1MDQzQ1x1MDQzNVx1MDQ0OVx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNSBcdTA0NDVcdTA0M0VcdTA0M0JcdTA0NDFcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTA0MjNcdTA0MzJcdTA0MzVcdTA0M0JcdTA0MzhcdTA0NDdcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHUwNDIzXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDRDXHUwNDQ4XHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUwNDIxXHUwNDMxXHUwNDQwXHUwNDNFXHUwNDQxXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzQ1x1MDQzMFx1MDQ0MVx1MDQ0OFx1MDQ0Mlx1MDQzMFx1MDQzMVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHUwNDEyXHUwNDMyXHUwNDM1XHUwNDQwXHUwNDQ1XCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIlx1MDQxMlx1MDQzRFx1MDQzOFx1MDQzN1wiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJcdTA0MTJcdTA0M0JcdTA0MzVcdTA0MzJcdTA0M0VcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1MDQxMlx1MDQzRlx1MDQ0MFx1MDQzMFx1MDQzMlx1MDQzRVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiXHUwNDFEXHUwNDMwXHUwNDM2XHUwNDNDXHUwNDM4XHUwNDQyXHUwNDM1IFx1MDQzQVx1MDQzQlx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0OFx1MDQ0My4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiXHUwNDFGXHUwNDQwXHUwNDNFXHUwNDNBXHUwNDQwXHUwNDQzXHUwNDQyXHUwNDNBXHUwNDMwIFx1MDQzOCBcdTA0M0NcdTA0MzBcdTA0NDFcdTA0NDhcdTA0NDJcdTA0MzBcdTA0MzFcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdTA0MThcdTA0M0RcdTA0MzJcdTA0MzVcdTA0NDBcdTA0NDIuIFx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0Mi4gXHUwNDNGXHUwNDQwXHUwNDNFXHUwNDNBXHUwNDQwXHUwNDQzXHUwNDQyXHUwNDNBXHUwNDQzXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiXHUwNDE4XHUwNDNEXHUwNDMyXHUwNDM1XHUwNDQwXHUwNDQyLiBcdTA0MzNcdTA0M0VcdTA0NDBcdTA0MzhcdTA0MzcuIFx1MDQzRlx1MDQ0MFx1MDQzRVx1MDQzQVx1MDQ0MFx1MDQ0M1x1MDQ0Mlx1MDQzQVx1MDQ0M1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MDQxOFx1MDQzRFx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0Mi4gXHUwNDNDXHUwNDMwXHUwNDQxXHUwNDQ4XHUwNDQyXHUwNDMwXHUwNDMxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTA0MjBcdTA0MzVcdTA0MzQuIFx1MDQzRlx1MDQ0MFx1MDQzOCBcdTA0NDFcdTA0M0VcdTA0MzdcdTA0MzRcdTA0MzBcdTA0M0RcdTA0MzhcdTA0MzhcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJcdTA0MjBcdTA0MzVcdTA0MzZcdTA0MzhcdTA0M0MgXHUwNDQwXHUwNDM1XHUwNDM0LiBcdTA0M0ZcdTA0NDBcdTA0MzggXHUwNDQxXHUwNDNFXHUwNDM3XHUwNDM0XHUwNDMwXHUwNDNEXHUwNDM4XHUwNDM4XCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlx1MDQxOFx1MDQzQ1x1MDQ0RiBcdTA0M0FcdTA0M0VcdTA0NDBcdTA0M0RcdTA0NEZcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlx1MDQxOFx1MDQzQ1x1MDQ0RiBcdTA0M0ZcdTA0M0UgXHUwNDQzXHUwNDNDXHUwNDNFXHUwNDNCXHUwNDQ3XHUwNDMwXHUwNDNEXHUwNDM4XHUwNDRFIFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0M0FcdTA0M0VcdTA0NDBcdTA0M0RcdTA0MzVcdTA0MzlcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIlx1MDQxOFx1MDQzQ1x1MDQ0RiBcdTA0MzRcdTA0M0VcdTA0NDdcdTA0MzVcdTA0NDBcdTA0M0RcdTA0MzVcdTA0MzNcdTA0M0VcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJcdTA0MThcdTA0M0NcdTA0NEYgXHUwNDNGXHUwNDNFIFx1MDQ0M1x1MDQzQ1x1MDQzRVx1MDQzQlx1MDQ0N1x1MDQzMFx1MDQzRFx1MDQzOFx1MDQ0RSBcdTA0MzRcdTA0M0JcdTA0NEYgXHUwNDM0XHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQwXHUwNDNEXHUwNDM4XHUwNDQ1XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHUwNDFGXHUwNDM1XHUwNDQ3XHUwNDMwXHUwNDQyXHUwNDMwXHUwNDQyXHUwNDRDIFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0NDBcdTA0MzVcdTA0MzQuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlx1MDQyMFx1MDQzNVx1MDQzNFx1MDQzMFx1MDQzQVx1MDQ0Mlx1MDQzOFx1MDQ0MFx1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0Mlx1MDQ0QyBcdTA0M0ZcdTA0NDBcdTA0MzggXHUwNDNEXHUwNDMwXHUwNDM2XHUwNDMwXHUwNDQyXHUwNDM4XHUwNDM4IFx1MDQzQVx1MDQzQlx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0OFwiLFxyXG59O1xyXG5cclxuY29uc3QgX3N2OiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJvdFwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFx1MDBDNW5ncmFcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBHXHUwMEY2ciBvbVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgS2FydGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZva3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlNcdTAwRjZrXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6U1x1MDBGNmsgfCBNZWxsYW5zbGFnOlJlZGlnZXJhIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTnkgcm90XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duLWxcdTAwRTRnZVwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlN0aWxwYW5lbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZva3VzZXJhIG5vZFwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJTXHUwMEY2ayBub2RlclwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIkluc3RcdTAwRTRsbG5pbmdhclwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJab29tYSBpblwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiWm9vbWEgdXRcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgQW5wYXNzYWRcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFJhZGVyYSBhbGxhXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggUmVkaWdlcmEgc3RpbFwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOeSByb3RcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHUwMEM1bmdyYVwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBHXHUwMEY2ciBvbVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIHN0aWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgUmVkaWdlcmFcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgS29waWVyYVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIEtsaXBwIHV0XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBLbGlzdHJhIGluXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBCYXJuXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgVlx1MDBFNG5zdGVyIGJhcm5cIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgU3lza29uXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgUmFkZXJhXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIkRcdTAwRjZsaiB2ZXJrdHlnc2ZcdTAwRTRsdFwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWwgc3RpbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIkJhcm5ub2RcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlJvdG5vZFwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkJha2dydW5kXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZXh0Zlx1MDBFNHJnXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiVGVja2Vuc3Rvcmxla1wiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiVGVja2Vuc25pdHRcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJLYW50c3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkthbnRmXHUwMEU0cmdcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJLYW50YnJlZGRcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGllXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBicmVkZFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJNaW4uIGhcdTAwRjZqZFwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiS29wcGxpbmdcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cFwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkJyZWRkXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMXHUwMEU0bmdkXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmVnbmJcdTAwRTVnZVwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiTm9kcmlrdG5pbmdcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTeXNrb25tZWxsYW5ydW1cIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJIXHUwMEY2Z2VyXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJWXHUwMEU0bnN0ZXJcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJcdTAwRTVkYVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJNYXJrZXJpbmdcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJNYXJrZXJpbmdzZlx1MDBFNHJnXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiTWFya2VyaW5nc2JyZWRkXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIktvbnR1cm9mZnNldFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlJlZGlnZXJpbmdza29udHVyZlx1MDBFNHJnXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJSZWRpZ2VyaW5nc2tvbnR1cmJyZWRkXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRleHRqdXN0ZXJpbmdcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJUZXh0YXZzdFx1MDBFNW5kXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiUmFkaFx1MDBGNmpkXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiRHVrYmFrZ3J1bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJcdTAwQzV0ZXJzdFx1MDBFNGxsXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiU3RcdTAwRTRuZ1wiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlZpc2EgdmVya3R5Z3NmXHUwMEU0bHRcIixcclxuICAgIFwic20udGJQYWRcIjogXCJGXHUwMEU0bHRzYXZzdFx1MDBFNW5kXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIk92YW5cIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiSFx1MDBGNmdlclwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJOZWRhblwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJWXHUwMEU0bnN0ZXJcIixcclxuICAgIFwic20udGJQb3NcIjogXCJGXHUwMEU0bHRzcG9zaXRpb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJPdmFuXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiTmVkYW5cIixcclxuICAgIFwic20udGJCZ1wiOiBcIkZcdTAwRTRsdHNiYWtncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiS25hcHBiYWtncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIktuYXBwa2FudHN0aWxcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIktuYXBwa2FudGZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJLbmFwcHRleHRmXHUwMEU0cmdcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTAwQzV0ZXJzdFx1MDBFNGxsIGZcdTAwRTRsdFwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBOb2RzdGlsXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkxpbmplZlx1MDBFNHJnXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxpbmplYnJlZGRcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJSZW5zYVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJLYW50cmFkaWVcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiU1x1MDBGNmsgbm9kZXIuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJSb3RcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOeSByb3RcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiQmFyblwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogSW5zdFx1MDBFNGxsbmluZ2FyXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3ByXHUwMEU1a1wiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJHclx1MDBFNG5zc25pdHRzc3ByXHUwMEU1a1wiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJGXHUwMEU0cmd0ZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkxqdXN0XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiTVx1MDBGNnJrdFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlZpc2EgdmVya3R5Z3NmXHUwMEU0bHRcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiVmlzYSB2ZXJrdHlnc2ZcdTAwRTRsdFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJEdWtiYWtncnVuZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQmFrZ3J1bmRzZlx1MDBFNHJnXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIk9tXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiRlx1MDBGNnJmYXR0YXJlXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJGdW5rdGlvbnNyaWsgbWluZG1hcC1hcHAgbWVkIFx1MDBGNnBwZW4ga1x1MDBFNGxsa29kIGZcdTAwRjZyIE9ic2lkaWFuIG1lZCBhbnBhc3NhZGUgc3RpbGFyLCByZWduYlx1MDBFNWdza29wcGxpbmdhciwgZmxlcnZhbCwgZHJhLW9jaC1zbFx1MDBFNHBwIG9jaCBNYXJrZG93bi1pbXBvcnQvZXhwb3J0LlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlVwcGRhdGVyYWRcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1Yi1mXHUwMEY2cnJcdTAwRTVkXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJTdFx1MDBGNmQgZlx1MDBGNnJmYXR0YXJlblwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIktvcnRrb21tYW5kb25cIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiQW5wYXNzYSBrb3J0a29tbWFuZG9uXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlJlZGlnZXJhIG5vZFwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJMXHUwMEU0Z2cgdGlsbCBzeXNrb25cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkxcdTAwRTRnZyB0aWxsIGJhcm5cIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZva3VzZXJhIG5vZFwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTAwQzVuZ3JhXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIkdcdTAwRjZyIG9tXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiUmFkYnJ5dG5pbmcgKHJlZGlnZXJpbmcpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkRyYSBhcmJldHN5dGFcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJab29tYSBpblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJab29tYSB1dFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1MDBDNXRlcnN0XHUwMEU0bGwgem9vbVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiTmF2aWdlcmEgdXBwXHUwMEU1dFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOYXZpZ2VyYSBuZWRcdTAwRTV0XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hdmlnZXJhIHZcdTAwRTRuc3RlclwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWdlcmEgaFx1MDBGNmdlclwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiVHJ5Y2suLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjcm9sbCBvY2ggem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVydGVyYSBWLXNjcm9sbFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVydGVyYSBILXNjcm9sbFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGVyYSB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJSZWRpZ2VyYSB2aWQgc2thcGFuZGVcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJSZWRpZ2VyaW5nc2xcdTAwRTRnZSB2aWQgbnlhIG5vZGVyXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlJvdG5hbW5cIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmFtbiBmXHUwMEY2ciBueWEgclx1MDBGNnR0ZXJcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIkJhcm5uYW1uXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYW1uIGZcdTAwRjZyIG55YSBiYXJuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiU2tyaXYgZlx1MDBGNnIgYXR0IHJlZGlnZXJhXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlJlZGlnZXJhIGdlbm9tIGF0dCBza3JpdmFcIixcclxufTtcclxuXHJcbmNvbnN0IF9oaTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTA5MkVcdTA5NDJcdTA5MzJcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTA5MkFcdTA5NDJcdTA5MzBcdTA5NERcdTA5MzVcdTA5MzVcdTA5MjRcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTA5MkJcdTA5M0ZcdTA5MzAgXHUwOTM4XHUwOTQ3XCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBcdTA5MkVcdTA5NDhcdTA5MkFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiXHUwOTJCXHUwOTNDXHUwOTRCXHUwOTE1XHUwOTM4XCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlx1MDkxNlx1MDk0Qlx1MDkxQ1x1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlx1MDkxNlx1MDk0Qlx1MDkxQ1x1MDk0N1x1MDkwMiB8IFNwYWNlOlx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOCB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1MDkyOFx1MDkyRlx1MDkzRSBcdTA5MkVcdTA5NDJcdTA5MzJcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24gXHUwOTJFXHUwOTRCXHUwOTIxXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwIFx1MDkyQVx1MDk0OFx1MDkyOFx1MDkzMlwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MkFcdTA5MzAgXHUwOTJCXHUwOTNDXHUwOTRCXHUwOTE1XHUwOTM4XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MTZcdTA5NEJcdTA5MUNcdTA5NDdcdTA5MDJcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJcdTA5MzhcdTA5NDdcdTA5MUZcdTA5M0ZcdTA5MDJcdTA5MTdcdTA5NERcdTA5MzhcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkwN1x1MDkyOFwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkwNlx1MDkwOVx1MDkxRlwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBcdTA5MTVcdTA5MzhcdTA5NERcdTA5MUZcdTA5MkVcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDkzOFx1MDkyRFx1MDk0MCBcdTA5MzlcdTA5MUZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MzZcdTA5NDhcdTA5MzJcdTA5NDAgXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTNGXHUwOTI0IFx1MDkxNVx1MDkzMFx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBcdTA5MjhcdTA5MkZcdTA5M0UgXHUwOTJFXHUwOTQyXHUwOTMyXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1MDkyQVx1MDk0Mlx1MDkzMFx1MDk0RFx1MDkzNVx1MDkzNVx1MDkyNFwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBcdTA5MkJcdTA5M0ZcdTA5MzAgXHUwOTM4XHUwOTQ3XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MzVcdTA5NDhcdTA5MzZcdTA5NERcdTA5MzVcdTA5M0ZcdTA5MTUgXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkzRlx1MDkyNCBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDkzNlx1MDk0OFx1MDkzMlx1MDk0MFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBcdTA5MTVcdTA5NDlcdTA5MkFcdTA5NDBcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBcdTA5MTVcdTA5MUZcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFx1MDkyQVx1MDk0N1x1MDkzOFx1MDk0RFx1MDkxRlwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgXHUwOTJDXHUwOTNFXHUwOTJGXHUwOTNFXHUwOTAyIFx1MDkxQVx1MDkzRVx1MDkwN1x1MDkzMlx1MDk0RFx1MDkyMVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdTA5MzhcdTA5M0ZcdTA5MkNcdTA5MzJcdTA5M0ZcdTA5MDJcdTA5MTdcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTA5MzlcdTA5MUZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkxQlx1MDk0MVx1MDkyQVx1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MzVcdTA5NDhcdTA5MzZcdTA5NERcdTA5MzVcdTA5M0ZcdTA5MTUgXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxIFx1MDkyOFx1MDk0Qlx1MDkyMVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHUwOTJFXHUwOTQyXHUwOTMyIFx1MDkyOFx1MDk0Qlx1MDkyMVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1MDkyQVx1MDk0M1x1MDkzN1x1MDk0RFx1MDkyMFx1MDkyRFx1MDk0Mlx1MDkyRVx1MDkzRlwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHUwOTFGXHUwOTQ3XHUwOTE1XHUwOTREXHUwOTM4XHUwOTREXHUwOTFGIFx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1MDkyQlx1MDkzQ1x1MDk0OVx1MDkyOFx1MDk0RFx1MDkxRiBcdTA5MDZcdTA5MTVcdTA5M0VcdTA5MzBcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1MDkyQlx1MDkzQ1x1MDk0OVx1MDkyOFx1MDk0RFx1MDkxRlwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1MDkyQ1x1MDk0OVx1MDkzMFx1MDk0RFx1MDkyMVx1MDkzMCBcdTA5MzZcdTA5NDhcdTA5MzJcdTA5NDBcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdTA5MkNcdTA5NDlcdTA5MzBcdTA5NERcdTA5MjFcdTA5MzAgXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHUwOTJDXHUwOTQ5XHUwOTMwXHUwOTREXHUwOTIxXHUwOTMwIFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTA5MkNcdTA5NDlcdTA5MzBcdTA5NERcdTA5MjFcdTA5MzAgXHUwOTI0XHUwOTREXHUwOTMwXHUwOTNGXHUwOTFDXHUwOTREXHUwOTJGXHUwOTNFXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHUwOTI4XHUwOTREXHUwOTJGXHUwOTQyXHUwOTI4XHUwOTI0XHUwOTJFIFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJcdTA5MjhcdTA5NERcdTA5MkZcdTA5NDJcdTA5MjhcdTA5MjRcdTA5MkUgXHUwOTBBXHUwOTAyXHUwOTFBXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJcdTA5MTVcdTA5MjhcdTA5NDdcdTA5MTVcdTA5NERcdTA5MzZcdTA5MjhcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1MDkyQVx1MDk0RFx1MDkzMFx1MDkxNVx1MDkzRVx1MDkzMFwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHUwOTMyXHUwOTAyXHUwOTJDXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggXHUwOTA3XHUwOTAyXHUwOTI2XHUwOTREXHUwOTMwXHUwOTI3XHUwOTI4XHUwOTQxXHUwOTM3XCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdTA5MjZcdTA5M0ZcdTA5MzZcdTA5M0VcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJcdTA5MzhcdTA5MzlcdTA5NEJcdTA5MjZcdTA5MzAgXHUwOTA1XHUwOTAyXHUwOTI0XHUwOTMwXHUwOTNFXHUwOTMyXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiXHUwOTI2XHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJcdTA5MkNcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIlx1MDkyNlx1MDk0Qlx1MDkyOFx1MDk0Qlx1MDkwMlwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlx1MDkyQVx1MDk0OFx1MDkzMlx1MDk0N1x1MDkxRlwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJcdTA5MUFcdTA5MkZcdTA5MjhcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJcdTA5MUFcdTA5MkZcdTA5MjggXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiXHUwOTFBXHUwOTJGXHUwOTI4IFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTA5MDZcdTA5MDlcdTA5MUZcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MjggXHUwOTExXHUwOTJCXHUwOTM4XHUwOTQ3XHUwOTFGXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTI4IFx1MDkwNlx1MDkwOVx1MDkxRlx1MDkzMlx1MDkzRVx1MDkwN1x1MDkyOCBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOCBcdTA5MDZcdTA5MDlcdTA5MUZcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MjggXHUwOTFBXHUwOTRDXHUwOTIxXHUwOTNDXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1MDkxRlx1MDk0N1x1MDkxNVx1MDk0RFx1MDkzOFx1MDk0RFx1MDkxRiBcdTA5MzhcdTA5MDJcdTA5MzBcdTA5NDdcdTA5MTZcdTA5MjNcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJcdTA5MUZcdTA5NDdcdTA5MTVcdTA5NERcdTA5MzhcdTA5NERcdTA5MUYgXHUwOTJBXHUwOTQ4XHUwOTIxXHUwOTNGXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHUwOTJBXHUwOTAyXHUwOTE1XHUwOTREXHUwOTI0XHUwOTNGIFx1MDkwQVx1MDkwMlx1MDkxQVx1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1MDkxNVx1MDk0OFx1MDkyOFx1MDkzNVx1MDkzRVx1MDkzOCBcdTA5MkFcdTA5NDNcdTA5MzdcdTA5NERcdTA5MjBcdTA5MkRcdTA5NDJcdTA5MkVcdTA5M0ZcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJcdTA5MzBcdTA5NDBcdTA5MzhcdTA5NDdcdTA5MUZcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJcdTA5MkNcdTA5MDJcdTA5MjZcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTI2XHUwOTNGXHUwOTE2XHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkyQVx1MDk0OFx1MDkyMVx1MDkzRlx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJcdTA5MEFcdTA5MkFcdTA5MzBcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiXHUwOTI2XHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIlx1MDkyOFx1MDk0MFx1MDkxQVx1MDk0N1wiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJcdTA5MkNcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic20udGJQb3NcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTM4XHUwOTREXHUwOTI1XHUwOTNGXHUwOTI0XHUwOTNGXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiXHUwOTBBXHUwOTJBXHUwOTMwXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiXHUwOTI4XHUwOTQwXHUwOTFBXHUwOTQ3XCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTJBXHUwOTQzXHUwOTM3XHUwOTREXHUwOTIwXHUwOTJEXHUwOTQyXHUwOTJFXHUwOTNGXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJcdTA5MkNcdTA5MUZcdTA5MjggXHUwOTJBXHUwOTQzXHUwOTM3XHUwOTREXHUwOTIwXHUwOTJEXHUwOTQyXHUwOTJFXHUwOTNGXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiXHUwOTJDXHUwOTFGXHUwOTI4IFx1MDkyQ1x1MDk0OVx1MDkzMFx1MDk0RFx1MDkyMVx1MDkzMCBcdTA5MzZcdTA5NDhcdTA5MzJcdTA5NDBcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlx1MDkyQ1x1MDkxRlx1MDkyOCBcdTA5MkNcdTA5NDlcdTA5MzBcdTA5NERcdTA5MjFcdTA5MzAgXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIlx1MDkyQ1x1MDkxRlx1MDkyOCBcdTA5MUZcdTA5NDdcdTA5MTVcdTA5NERcdTA5MzhcdTA5NERcdTA5MUYgXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkzMFx1MDk0MFx1MDkzOFx1MDk0N1x1MDkxRlwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MjhcdTA5NEJcdTA5MjEgXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1MDkzMlx1MDkzRVx1MDkwN1x1MDkyOCBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHUwOTMyXHUwOTNFXHUwOTA3XHUwOTI4IFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlx1MDkxNVx1MDkzOFx1MDk0RFx1MDkxRlx1MDkyRSBcdTA5MzhcdTA5M0VcdTA5MkJcdTA5M0MgXHUwOTE1XHUwOTMwXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlx1MDkyQ1x1MDk0OVx1MDkzMFx1MDk0RFx1MDkyMVx1MDkzMCBcdTA5MjRcdTA5NERcdTA5MzBcdTA5M0ZcdTA5MUNcdTA5NERcdTA5MkZcdTA5M0VcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiXHUwOTI4XHUwOTRCXHUwOTIxIFx1MDkxNlx1MDk0Qlx1MDkxQ1x1MDk0N1x1MDkwMi4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MDkyRVx1MDk0Mlx1MDkzMlwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1MDkyOFx1MDkyRlx1MDkzRSBcdTA5MkVcdTA5NDJcdTA5MzJcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBcdTA5MzhcdTA5NDdcdTA5MUZcdTA5M0ZcdTA5MDJcdTA5MTdcdTA5NERcdTA5MzhcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdTA5MkRcdTA5M0VcdTA5MzdcdTA5M0VcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHUwOTA3XHUwOTAyXHUwOTFGXHUwOTMwXHUwOTJCXHUwOTNDXHUwOTQ3XHUwOTM4IFx1MDkyRFx1MDkzRVx1MDkzN1x1MDkzRVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdTA5MjVcdTA5NDBcdTA5MkVcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlx1MDkzMFx1MDkwMlx1MDkxNyBcdTA5MjVcdTA5NDBcdTA5MkVcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiXHUwOTMyXHUwOTNFXHUwOTA3XHUwOTFGXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiXHUwOTIxXHUwOTNFXHUwOTMwXHUwOTREXHUwOTE1XCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkyNlx1MDkzRlx1MDkxNlx1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTI2XHUwOTNGXHUwOTE2XHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIlx1MDkxNVx1MDk0OFx1MDkyOFx1MDkzNVx1MDkzRVx1MDkzOCBcdTA5MkFcdTA5NDNcdTA5MzdcdTA5NERcdTA5MjBcdTA5MkRcdTA5NDJcdTA5MkVcdTA5M0ZcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIlx1MDkyQVx1MDk0M1x1MDkzN1x1MDk0RFx1MDkyMFx1MDkyRFx1MDk0Mlx1MDkyRVx1MDkzRiBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiXHUwOTJBXHUwOTMwXHUwOTNGXHUwOTFBXHUwOTJGXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiXHUwOTM4XHUwOTAyXHUwOTM4XHUwOTREXHUwOTE1XHUwOTMwXHUwOTIzXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJcdTA5MzJcdTA5NDdcdTA5MTZcdTA5MTVcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIk9ic2lkaWFuIFx1MDkxNVx1MDk0NyBcdTA5MzJcdTA5M0ZcdTA5MEYgXHUwOTE1XHUwOTM4XHUwOTREXHUwOTFGXHUwOTJFIFx1MDkzOFx1MDk0RFx1MDkxRlx1MDkzRVx1MDkwN1x1MDkzMiwgXHUwOTA3XHUwOTAyXHUwOTI2XHUwOTREXHUwOTMwXHUwOTI3XHUwOTI4XHUwOTQxXHUwOTM3IFx1MDkxNVx1MDkyOFx1MDk0N1x1MDkxNVx1MDk0RFx1MDkzNlx1MDkyOCwgXHUwOTJFXHUwOTMyXHUwOTREXHUwOTFGXHUwOTQwLVx1MDkzOFx1MDk0N1x1MDkzMlx1MDk0N1x1MDkxNVx1MDk0RFx1MDkxRiwgXHUwOTIxXHUwOTREXHUwOTMwXHUwOTQ4XHUwOTE3IFx1MDkwRlx1MDkwMlx1MDkyMSBcdTA5MjFcdTA5NERcdTA5MzBcdTA5NDlcdTA5MkEgXHUwOTE0XHUwOTMwIE1hcmtkb3duIFx1MDkwNlx1MDkyRlx1MDkzRVx1MDkyNC9cdTA5MjhcdTA5M0ZcdTA5MzBcdTA5NERcdTA5MkZcdTA5M0VcdTA5MjQgXHUwOTE1XHUwOTQ3IFx1MDkzOFx1MDkzRVx1MDkyNSBcdTA5MkVcdTA5M0VcdTA5MDdcdTA5MDJcdTA5MjEgXHUwOTJFXHUwOTQ4XHUwOTJBIFx1MDkxMFx1MDkyQVx1MDk2NFwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1MDkwNVx1MDkyQVx1MDkyMVx1MDk0N1x1MDkxRlx1MDk0N1x1MDkyMVwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViIFx1MDkzMFx1MDkzRlx1MDkyQVx1MDk0OVx1MDkxQ1x1MDkzQ1x1MDkzRlx1MDkxRlx1MDkzMFx1MDk0MFwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiXHUwOTEzXHUwOTJBXHUwOTI4IFx1MDkzOFx1MDk0Qlx1MDkzMFx1MDk0RFx1MDkzOCBcdTA5MzJcdTA5NDdcdTA5MTZcdTA5MTUgXHUwOTE1XHUwOTNFIFx1MDkzOFx1MDkyRVx1MDkzMFx1MDk0RFx1MDkyNVx1MDkyOCBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJcdTA5MTVcdTA5NDBcdTA5MkNcdTA5NEJcdTA5MzBcdTA5NERcdTA5MjEgXHUwOTM2XHUwOTQ5XHUwOTMwXHUwOTREXHUwOTFGXHUwOTE1XHUwOTFGXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1MDkzNlx1MDk0OVx1MDkzMFx1MDk0RFx1MDkxRlx1MDkxNVx1MDkxRiBcdTA5MDVcdTA5MjhcdTA5NDFcdTA5MTVcdTA5NDJcdTA5MzJcdTA5M0ZcdTA5MjQgXHUwOTE1XHUwOTMwXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5M0ZcdTA5MjQgXHUwOTE1XHUwOTMwXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIlx1MDkzOFx1MDkzRlx1MDkyQ1x1MDkzMlx1MDkzRlx1MDkwMlx1MDkxNyBcdTA5MUNcdTA5NEJcdTA5MjFcdTA5M0NcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIlx1MDkxQVx1MDkzRVx1MDkwN1x1MDkzMlx1MDk0RFx1MDkyMSBcdTA5MUNcdTA5NEJcdTA5MjFcdTA5M0NcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIlx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MkFcdTA5MzAgXHUwOTJCXHUwOTNDXHUwOTRCXHUwOTE1XHUwOTM4XCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlx1MDkyQVx1MDk0Mlx1MDkzMFx1MDk0RFx1MDkzNVx1MDkzNVx1MDkyNFwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJcdTA5MkJcdTA5M0ZcdTA5MzAgXHUwOTM4XHUwOTQ3XCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiXHUwOTMyXHUwOTNFXHUwOTA3XHUwOTI4IFx1MDkyQ1x1MDk0RFx1MDkzMFx1MDk0N1x1MDkxNSAoXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTI4IFx1MDkyRVx1MDk0N1x1MDkwMilcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiXHUwOTE1XHUwOTQ4XHUwOTI4XHUwOTM1XHUwOTNFXHUwOTM4IFx1MDkxNlx1MDk0MFx1MDkwMlx1MDkxQVx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlx1MDkxQ1x1MDkzQ1x1MDk0Mlx1MDkyRSBcdTA5MDdcdTA5MjhcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkwNlx1MDkwOVx1MDkxRlwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1MDkxQ1x1MDkzQ1x1MDk0Mlx1MDkyRSBcdTA5MzBcdTA5NDBcdTA5MzhcdTA5NDdcdTA5MUZcIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIlx1MDkwQVx1MDkyQVx1MDkzMFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTA5MjhcdTA5NDBcdTA5MUFcdTA5NDdcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiXHUwOTJDXHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJcdTA5MjZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1MDkxNVx1MDk0MVx1MDkwMlx1MDkxQ1x1MDk0MCBcdTA5MjZcdTA5MkNcdTA5M0VcdTA5MEZcdTA5MDIuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlx1MDkzOFx1MDk0RFx1MDkxNVx1MDk0RFx1MDkzMFx1MDk0OVx1MDkzMiBcdTA5MTRcdTA5MzAgXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHUwOTM1XHUwOTMwXHUwOTREXHUwOTFGXHUwOTNGXHUwOTE1XHUwOTMyIFx1MDkzOFx1MDk0RFx1MDkxNVx1MDk0RFx1MDkzMFx1MDk0OVx1MDkzMiBcdTA5MDlcdTA5MzJcdTA5MUZcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJcdTA5MzlcdTA5NDlcdTA5MzBcdTA5M0ZcdTA5MUNcdTA5M0NcdTA5NDlcdTA5MjhcdTA5NERcdTA5MUZcdTA5MzIgXHUwOTM4XHUwOTREXHUwOTE1XHUwOTREXHUwOTMwXHUwOTQ5XHUwOTMyIFx1MDkwOVx1MDkzMlx1MDkxRlx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MDkxQ1x1MDkzQ1x1MDk0Mlx1MDkyRSBcdTA5MjZcdTA5M0ZcdTA5MzZcdTA5M0UgXHUwOTA5XHUwOTMyXHUwOTFGXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTA5MkNcdTA5MjhcdTA5M0VcdTA5MjRcdTA5NDcgXHUwOTM4XHUwOTJFXHUwOTJGIFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOFwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIlx1MDkyOFx1MDkwRiBcdTA5MjhcdTA5NEJcdTA5MjEgXHUwOTJDXHUwOTI4XHUwOTNFXHUwOTI0XHUwOTQ3IFx1MDkzOFx1MDkyRVx1MDkyRiBcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5MjggXHUwOTJFXHUwOTRCXHUwOTIxXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlx1MDkyRVx1MDk0Mlx1MDkzMiBcdTA5MjhcdTA5M0VcdTA5MkVcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlx1MDkyOFx1MDkwRiBcdTA5MkVcdTA5NDJcdTA5MzIgXHUwOTE1XHUwOTNFIFx1MDkyMVx1MDkzRlx1MDkyQlx1MDkzQ1x1MDk0OVx1MDkzMlx1MDk0RFx1MDkxRiBcdTA5MjhcdTA5M0VcdTA5MkVcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIlx1MDkxQVx1MDkzRVx1MDkwN1x1MDkzMlx1MDk0RFx1MDkyMSBcdTA5MjhcdTA5M0VcdTA5MkVcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJcdTA5MjhcdTA5MEYgXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxIFx1MDkxNVx1MDkzRSBcdTA5MjFcdTA5M0ZcdTA5MkJcdTA5M0NcdTA5NDlcdTA5MzJcdTA5NERcdTA5MUYgXHUwOTI4XHUwOTNFXHUwOTJFXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHUwOTFGXHUwOTNFXHUwOTA3XHUwOTJBIFx1MDkxNVx1MDkzMFx1MDk0N1x1MDkwMiBcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5MjhcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiXHUwOTFBXHUwOTJGXHUwOTI4XHUwOTNGXHUwOTI0IFx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MkFcdTA5MzAgXHUwOTFGXHUwOTNFXHUwOTA3XHUwOTJBIFx1MDkxNVx1MDkzMFx1MDkxNVx1MDk0NyBcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5MjhcIixcclxufTtcclxuXHJcbmNvbnN0IF9rbzogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdUI4RThcdUQyQjhcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdUMyRTRcdUQ1ODlcdUNERThcdUMxOENcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdUIyRTRcdUMyRENcdUMyRTRcdUQ1ODlcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIFx1QjlGNVwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdUMyQTRcdUQwQzBcdUM3N0NcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJcdUQzRUNcdUNFRTRcdUMyQTRcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiXHVBQzgwXHVDMEM5XCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6XHVBQzgwXHVDMEM5IHwgU3BhY2U6XHVEM0I4XHVDOUQxIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiXHVDMEM4IFx1QjhFOFx1RDJCOFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93biBcdUJBQThcdUI0RENcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJcdUMyQTRcdUQwQzBcdUM3N0MgXHVEMzI4XHVCMTEwXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiXHVCMTc4XHVCNERDIFx1RDNFQ1x1Q0VFNFx1QzJBNFwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJcdUIxNzhcdUI0REMgXHVBQzgwXHVDMEM5XCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHVDMTI0XHVDODE1XCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1RDY1NVx1QjMwMFwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHVDRDk1XHVDMThDXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1QzBBQ1x1QzZBOVx1Qzc5MCBcdUM4MTVcdUM3NThcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1Qzc3Q1x1QUQwNCBcdUMwQURcdUM4MUNcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdUMyQTRcdUQwQzBcdUM3N0MgXHVEM0I4XHVDOUQxXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFx1QzBDOCBcdUI4RThcdUQyQjhcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHVDMkU0XHVENTg5XHVDREU4XHVDMThDXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFx1QjJFNFx1QzJEQ1x1QzJFNFx1RDU4OVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHVDODA0XHVDNUVEIFx1QzJBNFx1RDBDMFx1Qzc3Q1wiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBcdUQzQjhcdUM5RDFcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1QzJBNFx1RDBDMFx1Qzc3Q1wiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBcdUJDRjVcdUMwQUNcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBcdUM3OThcdUI3N0NcdUIwQjRcdUFFMzBcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFx1QkQ5OVx1QzVFQ1x1QjEyM1x1QUUzMFwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgXHVDNzkwXHVDMkREXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgXHVDNjdDXHVDQUJEIFx1Qzc5MFx1QzJERFwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdUQ2MTVcdUM4MUNcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdUMwQURcdUM4MUNcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHVCM0M0XHVBRDZDXHVCQUE4XHVDNzRDIFx1QzIyOFx1QUUzMFx1QUUzMFwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdUM4MDRcdUM1RUQgXHVDMkE0XHVEMEMwXHVDNzdDXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHVDNzkwXHVDMkREIFx1QjE3OFx1QjREQ1wiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHVCOEU4XHVEMkI4IFx1QjE3OFx1QjREQ1wiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1QkMzMFx1QUNCRFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHVEMTREXHVDMkE0XHVEMkI4IFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1QUUwMFx1QUYzNCBcdUQwNkNcdUFFMzBcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1QUUwMFx1QUYzNFwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1RDE0Q1x1QjQ1MFx1QjlBQyBcdUMyQTRcdUQwQzBcdUM3N0NcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdUQxNENcdUI0NTBcdUI5QUMgXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHVEMTRDXHVCNDUwXHVCOUFDIFx1QjEwOFx1QkU0NFwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdUQxNENcdUI0NTBcdUI5QUMgXHVCQzE4XHVBQ0JEXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHVDRDVDXHVDMThDIFx1QjEwOFx1QkU0NFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJcdUNENUNcdUMxOEMgXHVCMTkyXHVDNzc0XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJcdUM1RjBcdUFDQjBcdUMxMjBcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1QzcyMFx1RDYxNVwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1QjEwOFx1QkU0NFwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHVBRTM4XHVDNzc0XCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggXHVCODA4XHVDNzc4XHVCQ0Y0XHVDNkIwXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdUIxNzhcdUI0REMgXHVCQzI5XHVENUE1XCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiXHVENjE1XHVDODFDIFx1QUMwNFx1QUNBOVwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlx1QzYyNFx1Qjk3OFx1Q0FCRFwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiXHVDNjdDXHVDQUJEXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJcdUM1OTFcdUNBQkRcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJcdUQzMTRcdUI4MDhcdUQyQjhcIixcclxuICAgIFwic20uc2VsXCI6IFwiXHVDMTIwXHVEMEREXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiXHVDMTIwXHVEMEREIFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlx1QzEyMFx1RDBERCBcdUIxMDhcdUJFNDRcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiXHVDNzI0XHVBQ0ZEXHVDMTIwIFx1QzYyNFx1RDUwNFx1QzE0QlwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlx1RDNCOFx1QzlEMSBcdUM3MjRcdUFDRkRcdUMxMjAgXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJcdUQzQjhcdUM5RDEgXHVDNzI0XHVBQ0ZEXHVDMTIwIFx1QjEwOFx1QkU0NFwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJcdUQxNERcdUMyQTRcdUQyQjggXHVDODE1XHVCODJDXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiXHVEMTREXHVDMkE0XHVEMkI4IFx1RDMyOFx1QjUyOVwiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIlx1QzkwNCBcdUIxOTJcdUM3NzRcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJcdUNFOTRcdUJDODRcdUMyQTQgXHVCQzMwXHVBQ0JEXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiXHVDRDA4XHVBRTMwXHVENjU0XCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiXHVCMkVCXHVBRTMwXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiXHVCM0M0XHVBRDZDXHVCQUE4XHVDNzRDIFx1RDQ1Q1x1QzJEQ1wiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUQzMjhcdUI1MjlcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiXHVDNzA0XCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlx1QzYyNFx1Qjk3OFx1Q0FCRFwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJcdUM1NDRcdUI3OThcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiXHVDNjdDXHVDQUJEXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiXHVCM0M0XHVBRDZDXHVCQUE4XHVDNzRDIFx1QzcwNFx1Q0U1OFwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlx1QzcwNFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIlx1QzU0NFx1Qjc5OFwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiXHVCM0M0XHVBRDZDXHVCQUE4XHVDNzRDIFx1QkMzMFx1QUNCRFwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiXHVCQzg0XHVEMkJDIFx1QkMzMFx1QUNCRFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlx1QkM4NFx1RDJCQyBcdUQxNENcdUI0NTBcdUI5QUMgXHVDMkE0XHVEMEMwXHVDNzdDXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJcdUJDODRcdUQyQkMgXHVEMTRDXHVCNDUwXHVCOUFDIFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJcdUJDODRcdUQyQkMgXHVEMTREXHVDMkE0XHVEMkI4IFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUNEMDhcdUFFMzBcdUQ2NTRcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHVCMTc4XHVCNERDIFx1QzJBNFx1RDBDMFx1Qzc3Q1wiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJcdUMxMjAgXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIlx1QzEyMCBcdUIxMDhcdUJFNDRcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJcdUMwQUNcdUM2QTlcdUM3OTAgXHVDODE1XHVDNzU4IFx1QzlDMFx1QzZCMFx1QUUzMFwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJcdUQxNENcdUI0NTBcdUI5QUMgXHVCQzE4XHVBQ0JEXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlx1QjE3OFx1QjREQyBcdUFDODBcdUMwQzkuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJcdUI4RThcdUQyQjhcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJcdUMwQzggXHVCOEU4XHVEMkI4XCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIlx1Qzc5MFx1QzJERFwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogXHVDMTI0XHVDODE1XCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiXHVDNUI4XHVDNUI0XCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIlx1Qzc3OFx1RDEzMFx1RDM5OFx1Qzc3NFx1QzJBNCBcdUM1QjhcdUM1QjRcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiXHVEMTRDXHVCOUM4XCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJcdUMwQzlcdUMwQzEgXHVEMTRDXHVCOUM4XCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIlx1QkMxRFx1QUM4Q1wiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIlx1QzVCNFx1QjQ2MVx1QUM4Q1wiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUQ0NUNcdUMyRENcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiXHVCM0M0XHVBRDZDXHVCQUE4XHVDNzRDIFx1RDQ1Q1x1QzJEQ1wiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJcdUNFOTRcdUJDODRcdUMyQTQgXHVCQzMwXHVBQ0JEXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdUJDMzBcdUFDQkQgXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1QzgxNVx1QkNGNFwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1QkM4NFx1QzgwNFwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHVDNzkxXHVDMTMxXHVDNzkwXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJPYnNpZGlhblx1QzZBOSBcdUM2MjRcdUQ1MDggXHVDMThDXHVDMkE0IFx1QjlDOFx1Qzc3OFx1QjREQ1x1QjlGNSBcdUM1NzEuIFx1Q0VFNFx1QzJBNFx1RDE0MCBcdUMyQTRcdUQwQzBcdUM3N0MsIFx1QjgwOFx1Qzc3OFx1QkNGNFx1QzZCMCBcdUM1RjBcdUFDQjAsIFx1QjJFNFx1QzkxMSBcdUMxMjBcdUQwREQsIFx1QjREQ1x1Qjc5OFx1QURGOCBcdUM1NjQgXHVCNERDXHVCODZELCBNYXJrZG93biBcdUM5QzBcdUM2RDAuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHVDNUM1XHVCMzcwXHVDNzc0XHVEMkI4XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWIgXHVDODAwXHVDN0E1XHVDMThDXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdUM2MjRcdUQ1MDhcdUMxOENcdUMyQTQgXHVDNzkxXHVBQzAwIFx1RDZDNFx1QzZEMFwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlx1RDBBNFx1QkNGNFx1QjREQyBcdUIyRThcdUNEOTVcdUQwQTRcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiXHVCMkU4XHVDRDk1XHVEMEE0IFx1QzBBQ1x1QzZBOVx1Qzc5MCBcdUM4MTVcdUM3NThcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHVCMTc4XHVCNERDIFx1RDNCOFx1QzlEMVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJcdUQ2MTVcdUM4MUMgXHVDRDk0XHVBQzAwXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJcdUM3OTBcdUMyREQgXHVDRDk0XHVBQzAwXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdUIxNzhcdUI0REMgXHVEM0VDXHVDRUU0XHVDMkE0XCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlx1QzJFNFx1RDU4OVx1Q0RFOFx1QzE4Q1wiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJcdUIyRTRcdUMyRENcdUMyRTRcdUQ1ODlcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJcdUM5MDRcdUJDMTRcdUFGQzggKFx1RDNCOFx1QzlEMSBcdUM5MTEpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlx1Q0U5NFx1QkM4NFx1QzJBNCBcdUI0RENcdUI3OThcdUFERjhcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdUQ2NTVcdUIzMDBcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHVDRDk1XHVDMThDXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHVENjU1XHVCMzAwL1x1Q0Q5NVx1QzE4QyBcdUNEMDhcdUFFMzBcdUQ2NTRcIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIlx1QzcwNFx1Qjg1Q1wiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdUM1NDRcdUI3OThcdUI4NUNcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiXHVDNjdDXHVDQUJEXHVDNzNDXHVCODVDXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJcdUM2MjRcdUI5NzhcdUNBQkRcdUM3M0NcdUI4NUNcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1RDBBNFx1Qjk3QyBcdUIyMDRcdUI5NzRcdUMxMzhcdUM2OTQuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlx1QzJBNFx1RDA2Q1x1Qjg2NCBcdUJDMEYgXHVENjU1XHVCMzAwL1x1Q0Q5NVx1QzE4Q1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIlx1QzEzOFx1Qjg1QyBcdUMyQTRcdUQwNkNcdUI4NjQgXHVCQzE4XHVDODA0XCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiXHVBQzAwXHVCODVDIFx1QzJBNFx1RDA2Q1x1Qjg2NCBcdUJDMThcdUM4MDRcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJcdUQ2NTVcdUIzMDAvXHVDRDk1XHVDMThDIFx1QkMxOFx1QzgwNFwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiXHVDMEREXHVDMTMxIFx1QzJEQyBcdUQzQjhcdUM5RDFcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJcdUMwQzggXHVCMTc4XHVCNERDIFx1QzBERFx1QzEzMSBcdUMyREMgXHVEM0I4XHVDOUQxIFx1QkFBOFx1QjREQ1wiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJcdUI4RThcdUQyQjggXHVDNzc0XHVCOTg0XCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJcdUMwQzggXHVCOEU4XHVEMkI4XHVDNzU4IFx1QUUzMFx1QkNGOCBcdUM3NzRcdUI5ODRcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIlx1Qzc5MFx1QzJERCBcdUM3NzRcdUI5ODRcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJcdUMwQzggXHVDNzkwXHVDMkREXHVDNzU4IFx1QUUzMFx1QkNGOCBcdUM3NzRcdUI5ODRcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJcdUM3ODVcdUI4MjVcdUQ1NThcdUM1RUMgXHVEM0I4XHVDOUQxXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlx1QjE3OFx1QjREQyBcdUMxMjBcdUQwREQgXHVDMkRDIFx1RDBBNCBcdUM3ODVcdUI4MjVcdUM3M0NcdUI4NUMgXHVEM0I4XHVDOUQxXCIsXHJcbn07XHJcblxyXG5jb25zdCBfcHQ6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUmFpelwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IERlc2ZhemVyXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgUmVmYXplclwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgTWFwYVwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG9cIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJGb2NhclwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJQZXNxdWlzYXJcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpQZXNxdWlzYXIgfCBFc3BhXHUwMEU3bzpFZGl0YXIgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOb3ZhIHJhaXpcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTW9kbyBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlBhaW5lbCBkZSBlc3RpbG9cIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJGb2NhciBubyBuXHUwMEYzXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlBlc3F1aXNhciBuXHUwMEYzc1wiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIkNvbmZpZ3VyYVx1MDBFN1x1MDBGNWVzXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIkFtcGxpYXJcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlJlZHV6aXJcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgUGVyc29uYWxpemFkb1wiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgRXhjbHVpciBlbSBsb3RlXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRWRpdGFyIGVzdGlsb1wiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOb3ZhIHJhaXpcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgRGVzZmF6ZXJcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgUmVmYXplclwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvIGdsb2JhbFwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBFZGl0YXJcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsb1wiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBDb3BpYXJcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBSZWNvcnRhclwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgQ29sYXJcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IEZpbGhvXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgRmlsaG8gZXNxdWVyZG9cIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgSXJtXHUwMEUzb1wiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEV4Y2x1aXJcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiT2N1bHRhciBiYXJyYVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG8gZ2xvYmFsXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiTlx1MDBGMyBmaWxob1wiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiTlx1MDBGMyByYWl6XCIsXHJcbiAgICBcInNtLmJnXCI6IFwiRnVuZG9cIixcclxuICAgIFwic20udGV4dFwiOiBcIkNvciBkbyB0ZXh0b1wiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlRhbWFuaG8gZGEgZm9udGVcIixcclxuICAgIFwic20uZm9udFwiOiBcIkZvbnRlXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiRXN0aWxvIGRhIGJvcmRhXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiQ29yIGRhIGJvcmRhXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiTGFyZ3VyYSBkYSBib3JkYVwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJSYWlvIGRhIGJvcmRhXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTGFyZ3VyYSBtXHUwMEVEbi5cIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiQWx0dXJhIG1cdTAwRURuLlwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiQ29uZXhcdTAwRTNvXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUaXBvXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiQ29yXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiTGFyZ3VyYVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiQ29tcHJpbWVudG9cIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBBcmNvLVx1MDBFRHJpc1wiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiRGlyZVx1MDBFN1x1MDBFM29cIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJFc3BhXHUwMEU3YW1lbnRvIGVudHJlIGlybVx1MDBFM29zXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiRGlyZWl0YVwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiRXNxdWVyZGFcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkFtYm9zXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXRhXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlNlbGVcdTAwRTdcdTAwRTNvXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiQ29yIGRlIHNlbGVcdTAwRTdcdTAwRTNvXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiTGFyZ3VyYSBkZSBzZWxlXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJEZXNsb2NhbWVudG8gZG8gY29udG9ybm9cIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJDb3IgY29udG9ybm8gZWRpXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiTGFyZ3VyYSBjb250b3JubyBlZGlcdTAwRTdcdTAwRTNvXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIkFsaW5oYW1lbnRvXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiUHJlZW5jaGltZW50byB0ZXh0b1wiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIkFsdHVyYSBkYSBsaW5oYVwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkZ1bmRvIGRhIHRlbGFcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJSZWRlZmluaXJcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJGZWNoYXJcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJNb3N0cmFyIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiUHJlZW5jaGltZW50byBiYXJyYVwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJDaW1hXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIkRpcmVpdGFcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiQmFpeG9cIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiRXNxdWVyZGFcIixcclxuICAgIFwic20udGJQb3NcIjogXCJQb3NpXHUwMEU3XHUwMEUzbyBiYXJyYVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlRvcG9cIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJGdW5kb1wiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiRnVuZG8gYmFycmFcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIkZ1bmRvIGJvdFx1MDBFM29cIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJFc3RpbG8gYm9yZGEgYm90XHUwMEUzb1wiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiQ29yIGJvcmRhIGJvdFx1MDBFM29cIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiQ29yIHRleHRvIGJvdFx1MDBFM29cIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJSZWRlZmluaXIgYmFycmFcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvIGRvIG5cdTAwRjNcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiQ29yIGRhIGxpbmhhXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxhcmd1cmEgZGEgbGluaGFcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJMaW1wYXIgcGVyc29uYWxpemFcdTAwRTdcdTAwRTNvXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlJhaW8gZGEgYm9yZGFcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiUGVzcXVpc2FyIG5cdTAwRjNzLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiUmFpelwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk5vdmEgcmFpelwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJGaWxob1wiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJDb25maWd1cmFcdTAwRTdcdTAwRjVlcyBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJJZGlvbWFcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiSWRpb21hIGRhIGludGVyZmFjZVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJUZW1hIGRlIGNvclwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJDbGFyb1wiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIkVzY3Vyb1wiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIk1vc3RyYXIgYmFycmFcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiTW9zdHJhciBiYXJyYVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJGdW5kbyBkYSB0ZWxhXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJDb3IgZGUgZnVuZG9cIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiU29icmVcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzXHUwMEUzb1wiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0b3JcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkFwcCBkZSBtYXBhIG1lbnRhbCBkZSBjXHUwMEYzZGlnbyBhYmVydG8gcGFyYSBPYnNpZGlhbiBjb20gZXN0aWxvcyBwZXJzb25hbGl6YWRvcywgY29uZXhcdTAwRjVlcyBhcmNvLVx1MDBFRHJpcywgc2VsZVx1MDBFN1x1MDBFM28gbVx1MDBGQWx0aXBsYSwgYXJyYXN0YXIgZSBzb2x0YXIgZSBNYXJrZG93bi5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJBdHVhbGl6YWRvXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJSZXBvc2l0XHUwMEYzcmlvIEdpdEh1YlwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiQXBvaWFyIG8gYXV0b3JcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJBdGFsaG9zIGRlIHRlY2xhZG9cIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiUGVyc29uYWxpemFyIGF0YWxob3NcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiRWRpdGFyIG5cdTAwRjNcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiQWRpY2lvbmFyIGlybVx1MDBFM29cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkFkaWNpb25hciBmaWxob1wiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiRm9jYXIgbm8gblx1MDBGM1wiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJEZXNmYXplclwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJSZWZhemVyXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiUXVlYnJhIGRlIGxpbmhhIChlZGlcdTAwRTdcdTAwRTNvKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJBcnJhc3RhciB0ZWxhXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiQW1wbGlhclwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJSZWR1emlyXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiUmVkZWZpbmlyIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIkNpbWFcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiQmFpeG9cIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiRXNxdWVyZGFcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIkRpcmVpdGFcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlByZXNzaW9uZS4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiUm9sYWdlbSBlIHpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnRlciByb2xhZ2VtIFZcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJJbnZlcnRlciByb2xhZ2VtIEhcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnRlciB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJFZGl0YXIgYW8gY3JpYXJcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJNb2RvIGVkaVx1MDBFN1x1MDBFM28gYW8gY3JpYXIgblx1MDBGM3NcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiTm9tZSBkYSByYWl6XCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJOb21lIHBhZHJcdTAwRTNvIHBhcmEgcmFcdTAwRUR6ZXNcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIk5vbWUgZG8gZmlsaG9cIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJOb21lIHBhZHJcdTAwRTNvIHBhcmEgZmlsaG9zXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiRGlnaXRhciBwYXJhIGVkaXRhclwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJFZGl0YXIgYW8gZGlnaXRhciBjb20gblx1MDBGMyBzZWxlY2lvbmFkb1wiLFxyXG59O1xyXG5cclxuY29uc3QgX2ZpOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IEp1dXJpXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgS3Vtb2FcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBUZWUgdXVkZWxsZWVuXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBLYXJ0dGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggVHl5bGlcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJLb2hkaXN0YVwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJIYWt1XCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6SGFrdSB8IFZcdTAwRTRsaWx5XHUwMEY2bnRpOk11b2trYWEgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJVdXNpIGp1dXJpXCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duLXRpbGFcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJUeXlsaXBhbmVlbGlcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJLb2hkaXN0YSBzb2xtdXVuXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIkV0c2kgc29sbXVqYVwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIkFzZXR1a3NldFwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJMXHUwMEU0aGVublx1MDBFNFwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiTG9pdG9ubmFcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgTXVrYXV0ZXR0dVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgUG9pc3RhIGthaWtraVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IE11b2trYWEgdHl5bGlcdTAwRTRcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgVXVzaSBqdXVyaVwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBLdW1vYVwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBUZWUgdXVkZWxsZWVuXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBZbGVpbmVuIHR5eWxpXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIE11b2trYWFcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFR5eWxpXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIEtvcGlvaVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIExlaWtrYWFcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIExpaXRcdTAwRTRcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IExhcHNpXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgVmFzZW4gbGFwc2lcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgU2lzYXJ1c1wiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFBvaXN0YVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJQaWlsb3RhIHBhbGtraVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBZbGVpbmVuIHR5eWxpXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiTGFwc2lzb2xtdVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiSnV1cmlzb2xtdVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlRhdXN0YVwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGVrc3RpbiB2XHUwMEU0cmlcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJGb250dGlrb2tvXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJGb250dGlcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJSZXVuYW4gdHl5bGlcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJSZXVuYW4gdlx1MDBFNHJpXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiUmV1bmFuIGxldmV5c1wiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJSZXVuYW4gcHlcdTAwRjZyaXN0eXNcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJWXHUwMEU0aGltbVx1MDBFNGlzbGV2ZXlzXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIlZcdTAwRTRoaW1tXHUwMEU0aXNrb3JrZXVzXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJZaHRleXNcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5eXBwaVwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlZcdTAwRTRyaVwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkxldmV5c1wiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiUGl0dXVzXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggU2F0ZWVua2FhcmlcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlNvbG11biBzdXVudGFcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTaXNhcnVzdlx1MDBFNGxpXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiT2lrZWFcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlZhc2VuXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJNb2xlbW1hdFwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dGlcIixcclxuICAgIFwic20uc2VsXCI6IFwiVmFsaW50YVwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlZhbGlubmFuIHZcdTAwRTRyaVwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlZhbGlubmFuIGxldmV5c1wiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTAwQzRcdTAwRTRyaXZpaXZhbiBzaWlydHltXHUwMEU0XCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiTXVva2thdWtzZW4gXHUwMEU0XHUwMEU0cml2aWl2YW4gdlx1MDBFNHJpXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJNdW9ra2F1a3NlbiBcdTAwRTRcdTAwRTRyaXZpaXZhbiBsZXZleXNcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiVGVrc3RpbiB0YXNhdXNcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJUZWtzdGluIHRcdTAwRTR5dGVcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJSaXZpbiBrb3JrZXVzXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiS2Fua2FhbiB0YXVzdGFcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJQYWxhdXRhXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiU3VsamVcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJOXHUwMEU0eXRcdTAwRTQgcGFsa2tpXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiUGFsa2luIHRcdTAwRTR5dGVcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiWWxcdTAwRTRcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiT2lrZWFcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiQWxhXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlZhc2VuXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiUGFsa2luIHNpamFpbnRpXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiWWxoXHUwMEU0XHUwMEU0bGxcdTAwRTRcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJBbGhhYWxsYVwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiUGFsa2luIHRhdXN0YVwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiUGFpbmlra2VlbiB0YXVzdGFcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJQYWluaWtrZWVuIHJldW5hbiB0eXlsaVwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiUGFpbmlra2VlbiByZXVuYW4gdlx1MDBFNHJpXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIlBhaW5pa2tlZW4gdGVrc3RpbiB2XHUwMEU0cmlcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJQYWxhdXRhIHBhbGtraVwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBTb2xtdW4gdHl5bGlcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiVmlpdmFuIHZcdTAwRTRyaVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJWaWl2YW4gbGV2ZXlzXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiVHloamVublx1MDBFNCBtdWthdXR1c1wiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJSZXVuYW4gcHlcdTAwRjZyaXN0eXNcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiRXRzaSBzb2xtdWphLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiSnV1cmlcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJVdXNpIGp1dXJpXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkxhcHNpXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBBc2V0dWtzZXRcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJLaWVsaVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJLXHUwMEU0eXR0XHUwMEY2bGlpdHR5bVx1MDBFNG4ga2llbGlcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGVlbWFcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlZcdTAwRTRyaXRlZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIlZhYWxlYVwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIlR1bW1hXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiTlx1MDBFNHl0XHUwMEU0IHBhbGtraVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJOXHUwMEU0eXRcdTAwRTQgcGFsa2tpXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIkthbmthYW4gdGF1c3RhXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJUYXVzdGF2XHUwMEU0cmlcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiVGlldG9qYVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpb1wiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiVGVraWpcdTAwRTRcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIk9ic2lkaWFuaW4gbW9uaXB1b2xpbmVuIGF2b2ltZW4gbFx1MDBFNGhkZWtvb2RpbiBtaWVsbGVrYXJ0dGFzb3ZlbGx1cyBtdWthdXRldHVpbGxhIHR5eWxlaWxsXHUwMEU0LCBzYXRlZW5rYWFyaXZpaXZvaWxsYSBqYSBNYXJrZG93bi10dWVsbGEuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiUFx1MDBFNGl2aXRldHR5XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItdmFyYXN0b1wiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiVHVlIHRla2lqXHUwMEU0XHUwMEU0XCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiUGlrYW5cdTAwRTRwcFx1MDBFNGltZXRcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiTXVva2thYSBwaWthblx1MDBFNHBwXHUwMEU0aW1pXHUwMEU0XCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIk11b2trYWEgc29sbXVhXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkxpc1x1MDBFNFx1MDBFNCBzaXNhcnVzXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJMaXNcdTAwRTRcdTAwRTQgbGFwc2lcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIktvaGRpc3RhIHNvbG11dW5cIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiS3Vtb2FcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiVGVlIHV1ZGVsbGVlblwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlJpdmludmFpaHRvIChtdW9ra2F1a3Nlc3NhKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJWZWRcdTAwRTQga2FuZ2FzdGFcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJMXHUwMEU0aGVublx1MDBFNFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJMb2l0b25uYVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIk5vbGxhYSB6b29tYXVzXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJZbFx1MDBGNnNcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiQWxhc1wiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJWYXNlbW1hbGxlXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJPaWtlYWxsZVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiUGFpbmEgblx1MDBFNHBwXHUwMEU0aW50XHUwMEU0Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJWaWVyaXR5cyBqYSB6b29tYXVzXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiS1x1MDBFNFx1MDBFNG5uXHUwMEU0IFYtdmllcml0eXNcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJLXHUwMEU0XHUwMEU0bm5cdTAwRTQgSC12aWVyaXR5c1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIktcdTAwRTRcdTAwRTRublx1MDBFNCB6b29tYXVzXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJNdW9ra2FhIGx1b3RhZXNzYVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIk11b2trYXVzdGlsYSB1dXNpbGxlIHNvbG11aWxsZVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJKdXVyZW4gbmltaVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiVXVzaWVuIGp1dXJpZW4gb2xldHVzbmltaVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiTGFwc2VuIG5pbWlcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJVdXNpZW4gbGFzdGVuIG9sZXR1c25pbWlcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJLaXJqb2l0YSBtdW9rYXRha3Nlc2lcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiUGFpbmEgblx1MDBFNHBwXHUwMEU0aW50XHUwMEU0IG11b2thdGFrc2VzaSB2YWxpdHR1YSBzb2xtdWFcIixcclxufTtcclxuXHJcbmNvbnN0IF9ubzogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBSb3RcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBBbmdyZVwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIEdqXHUwMEY4ciBvbVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgS2FydFwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRm9rdXNcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiU1x1MDBGOGtcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpTXHUwMEY4ayB8IE1lbGxvbXJvbTpSZWRpZ2VyIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTnkgcm90XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duLW1vZHVzXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiU3RpbHBhbmVsXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiRm9rdXNlciBub2RlXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlNcdTAwRjhrIG5vZGVyXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiSW5uc3RpbGxpbmdlclwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJab29tIGlublwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiWm9vbSB1dFwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBFZ2VuZGVmaW5lcnRcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFNsZXR0IGFsbGVcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBSZWRpZ2VyIHN0aWxcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTnkgcm90XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IEFuZ3JlXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIEdqXHUwMEY4ciBvbVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIHN0aWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgUmVkaWdlclwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBLb3BpZXJcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBLbGlwcCB1dFwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgTGltIGlublwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgQmFyblwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFZlbnN0cmUgYmFyblwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBTXHUwMEY4c2tlblwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFNsZXR0XCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlNranVsIHZlcmt0XHUwMEY4eWxpbmplXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBzdGlsXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiQmFybmVub2RlXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJSb3Rub2RlXCIsXHJcbiAgICBcInNtLmJnXCI6IFwiQmFrZ3J1bm5cIixcclxuICAgIFwic20udGV4dFwiOiBcIlRla3N0ZmFyZ2VcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJTa3JpZnRzdFx1MDBGOHJyZWxzZVwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiU2tyaWZ0dHlwZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIkthbnRzdGlsXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiS2FudGZhcmdlXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiS2FudGJyZWRkZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJLYW50cmFkaXVzXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBicmVkZGVcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiTWluLiBoXHUwMEY4eWRlXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJGb3JiaW5kZWxzZVwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiVHlwZVwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkZhcmdlXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiQnJlZGRlXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMZW5nZGVcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBSZWduYnVlXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJOb2RlcmV0bmluZ1wiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIlNcdTAwRjhza2VuYXZzdGFuZFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIkhcdTAwRjh5cmVcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlZlbnN0cmVcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJlZ2dlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXR0XCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlZhbGdcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJWYWxnZmFyZ2VcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJWYWxnYnJlZGRlXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIktvbnR1cmZvcnNreXZuaW5nXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiUmVkaWdlcmluZ3Nrb250dXJcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlJlZGlnZXJpbmdza29udHVyYnJlZGRlXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRla3N0anVzdGVyaW5nXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGVrc3R1dGZ5bGxpbmdcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJMaW5qZWhcdTAwRjh5ZGVcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJMZXJyZXRzYmFrZ3J1bm5cIixcclxuICAgIFwic20ucmVzZXRcIjogXCJUaWxiYWtlc3RpbGxcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJMdWtrXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiVmlzIHZlcmt0XHUwMEY4eWxpbmplXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiVmVya3RcdTAwRjh5bGluamV1dGZ5bGxpbmdcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiVG9wcFwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJIXHUwMEY4eXJlXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkJ1bm5cIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiVmVuc3RyZVwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlZlcmt0XHUwMEY4eWxpbmplcG9zaXNqb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJUb3BwXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiQnVublwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiVmVya3RcdTAwRjh5bGluamViYWtncnVublwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiS25hcHBiYWtncnVublwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIktuYXBwa2FudHN0aWxcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIktuYXBwa2FudGZhcmdlXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIktuYXBwdGVrc3RmYXJnZVwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlRpbGJha2VzdGlsbCB2ZXJrdFx1MDBGOHlsaW5qZVwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBOb2Rlc3RpbFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJMaW5qZWZhcmdlXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxpbmplYnJlZGRlXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiRmplcm4gdGlscGFzbmluZ1wiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJLYW50cmFkaXVzXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlNcdTAwRjhrIG5vZGVyLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiUm90XCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTnkgcm90XCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkJhcm5cIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIElubnN0aWxsaW5nZXJcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJTcHJcdTAwRTVrXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIkdyZW5zZXNuaXR0c3ByXHUwMEU1a1wiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJGYXJnZXRlbWFcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiTHlzdFwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIk1cdTAwRjhya3RcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJWaXMgdmVya3RcdTAwRjh5bGluamVcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiVmlzIHZlcmt0XHUwMEY4eWxpbmplXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIkxlcnJldHNiYWtncnVublwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQmFrZ3J1bm5zZmFyZ2VcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiT21cIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzam9uXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJGb3JmYXR0ZXJcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkZ1bmtzam9uc3JpayBcdTAwRTVwZW4ga2lsZGVrb2RlIHRhbmtla2FydC1hcHAgZm9yIE9ic2lkaWFuIG1lZCB0aWxwYXNzZWRlIHN0aWxlciwgcmVnbmJ1ZWZvcmJpbmRlbHNlciBvZyBNYXJrZG93bi1zdFx1MDBGOHR0ZS5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJPcHBkYXRlcnRcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1Yi1kZXBvdFwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiU3RcdTAwRjh0dCBmb3JmYXR0ZXJlblwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIkh1cnRpZ3Rhc3RlclwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJUaWxwYXNzIGh1cnRpZ3Rhc3RlclwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJSZWRpZ2VyIG5vZGVcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiTGVnZyB0aWwgc1x1MDBGOHNrZW5cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkxlZ2cgdGlsIGJhcm5cIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZva3VzZXIgbm9kZVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJBbmdyZVwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJHalx1MDBGOHIgb21cIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJMaW5qZXNraWZ0IChyZWRpZ2VyaW5nKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJEcmEgbGVycmV0XCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiWm9vbSBpbm5cIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiWm9vbSB1dFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlRpbGJha2VzdGlsbCB6b29tXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJPcHBcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiTmVkXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlZlbnN0cmVcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIkhcdTAwRjh5cmVcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlRyeWtrIGVuIHRhc3QuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlJ1bGxpbmcgb2cgem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVydGVyIFYtcnVsbGluZ1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVydGVyIEgtcnVsbGluZ1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGVyIHpvb21cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIlJlZGlnZXIgdmVkIG9wcHJldHRlbHNlXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiUmVkaWdlcmluZ3Ntb2R1cyB2ZWQgbnllIG5vZGVyXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlJvdG5hdm5cIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmF2biBmb3IgbnllIHJcdTAwRjh0dGVyXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJCYXJuZW5hdm5cIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJTdGFuZGFyZG5hdm4gZm9yIG55ZSBiYXJuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiU2tyaXYgZm9yIFx1MDBFNSByZWRpZ2VyZVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJTa3JpdiBmb3IgXHUwMEU1IHJlZGlnZXJlIHZhbGd0IG5vZGVcIixcclxufTtcclxuXHJcbmNvbnN0IF9ubDogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBXb3J0ZWxcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBPbmdlZGFhblwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIE9wbmlldXdcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIEthYXJ0XCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWpsXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRm9jdXNcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiWm9la2VuXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6Wm9la2VuIHwgU3BhdGllOkJld2Vya2VuIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTmlldXdlIHdvcnRlbFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93bi1tb2R1c1wiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlN0aWpscGFuZWVsXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiRm9jdXMgb3Aga25vb3BwdW50XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIktub29wcHVudGVuIHpvZWtlblwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIkluc3RlbGxpbmdlblwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJJbnpvb21lblwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiVWl0em9vbWVuXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIEFhbmdlcGFzdFwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgQWxsZXMgdmVyd2lqZGVyZW5cIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlqbCBiZXdlcmtlblwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOaWV1d2Ugd29ydGVsXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IE9uZ2VkYWFuXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIE9wbmlldXdcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbGUgc3RpamxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgQmV3ZXJrZW5cIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWpsXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIEtvcGlcdTAwRUJyZW5cIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBLbmlwcGVuXCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBQbGFra2VuXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBLaW5kXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgTGlua3Mga2luZFwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBCcm9lci96dXNcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBWZXJ3aWpkZXJlblwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJXZXJrYmFsayB2ZXJiZXJnZW5cIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsZSBzdGlqbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIktpbmRrbm9vcHB1bnRcIixcclxuICAgIFwic20ucm9vdFwiOiBcIldvcnRlbGtub29wcHVudFwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkFjaHRlcmdyb25kXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZWtzdGtsZXVyXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiTGV0dGVyZ3Jvb3R0ZVwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiTGV0dGVydHlwZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlJhbmRzdGlqbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlJhbmRrbGV1clwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlJhbmRicmVlZHRlXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlJhbmRyYWRpdXNcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJNaW4uIGJyZWVkdGVcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiTWluLiBob29ndGVcIixcclxuICAgIFwic20uY29ublwiOiBcIlZlcmJpbmRpbmdcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cGVcIixcclxuICAgIFwic20uY29sb3JcIjogXCJLbGV1clwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkJyZWVkdGVcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkxlbmd0ZVwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFJlZ2VuYm9vZ1wiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiUmljaHRpbmdcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJUdXNzZW5hZnN0YW5kXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiUmVjaHRzXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJMaW5rc1wiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiQmVpZGVcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJTZWxlY3RpZVwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlNlbGVjdGlla2xldXJcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJTZWxlY3RpZWJyZWVkdGVcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiT210cmVrb2Zmc2V0XCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiQmV3ZXJraW5nc29tdHJla2tsZXVyXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJCZXdlcmtpbmdzb210cmVrYnJlZWR0ZVwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJUZWtzdHVpdGxpam5pbmdcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJUZWtzdHZ1bGxpbmdcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJSZWdlbGhvb2d0ZVwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkNhbnZhcyBhY2h0ZXJncm9uZFwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIkhlcnN0ZWxsZW5cIixcclxuICAgIFwic20uY2xvc2VcIjogXCJTbHVpdGVuXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiV2Vya2JhbGsgdG9uZW5cIixcclxuICAgIFwic20udGJQYWRcIjogXCJXZXJrYmFsa3Z1bGxpbmdcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiQm92ZW5cIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiUmVjaHRzXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIk9uZGVyXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIkxpbmtzXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiV2Vya2JhbGtwb3NpdGllXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiQm92ZW5cIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJPbmRlclwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiV2Vya2JhbGsgYWNodGVyZ3JvbmRcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIktub3AgYWNodGVyZ3JvbmRcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJLbm9wIHJhbmRzdGlqbFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiS25vcCByYW5ka2xldXJcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiS25vcCB0ZWtzdGtsZXVyXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiV2Vya2JhbGsgaGVyc3RlbGxlblwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBLbm9vcHB1bnRzdGlqbFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJMaWpua2xldXJcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGlqbmJyZWVkdGVcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJBYW5wYXNzaW5nIHdpc3NlblwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJSYW5kcmFkaXVzXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIktub29wcHVudGVuIHpvZWtlbi4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIldvcnRlbFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk5pZXV3ZSB3b3J0ZWxcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiS2luZFwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogSW5zdGVsbGluZ2VuXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiVGFhbFwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJJbnRlcmZhY2V0YWFsXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRoZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJLbGV1cmVudGhlbWFcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiTGljaHRcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJEb25rZXJcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJXZXJrYmFsayB0b25lblwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJXZXJrYmFsayB0b25lblwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJDYW52YXMgYWNodGVyZ3JvbmRcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkFjaHRlcmdyb25ka2xldXJcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiT3ZlclwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpZVwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0ZXVyXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJVaXRnZWJyZWlkZSBvcGVuIHNvdXJjZSBtaW5kbWFwLWFwcCB2b29yIE9ic2lkaWFuIG1ldCBhYW5nZXBhc3RlIHN0aWpsZW4sIHJlZ2VuYm9vZ3ZlcmJpbmRpbmdlbiBlbiBNYXJrZG93bi1vbmRlcnN0ZXVuaW5nLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIkJpamdld2Vya3RcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1Yi1yZXBvc2l0b3J5XCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJPbmRlcnN0ZXVuIGRlIGF1dGV1clwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlNuZWx0b2V0c2VuXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlNuZWx0b2V0c2VuIGFhbnBhc3NlblwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJLbm9vcHB1bnQgYmV3ZXJrZW5cIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiQnJvZXIvenVzIHRvZXZvZWdlblwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiS2luZCB0b2V2b2VnZW5cIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZvY3VzIG9wIGtub29wcHVudFwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJPbmdlZGFhbiBtYWtlblwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJPcG5pZXV3XCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiUmVnZWxhZmJyZWtpbmcgKGJld2Vya2luZylcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiQ2FudmFzIHNsZXBlblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIkluem9vbWVuXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlVpdHpvb21lblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlpvb20gaGVyc3RlbGxlblwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiT21ob29nXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIk9tbGFhZ1wiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJMaW5rc1wiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiUmVjaHRzXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJEcnVrIG9wIGVlbiB0b2V0cy4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiU2Nyb2xsZW4gZW4gem9vbWVuXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiVmVydGljYWFsIG9ta2VyZW5cIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJIb3Jpem9udGFhbCBvbWtlcmVuXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiWm9vbSBvbWtlcmVuXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJCZXdlcmtlbiBiaWogYWFubWFrZW5cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJCZXdlcmtpbmdzbW9kdXMgYmlqIG5pZXV3ZSBrbm9vcHB1bnRlblwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJXb3J0ZWxuYWFtXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJTdGFuZGFhcmRuYWFtIHZvb3Igd29ydGVsc1wiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiS2luZG5hYW1cIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJTdGFuZGFhcmRuYWFtIHZvb3Iga2luZGVyZW5cIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJUeXAgb20gdGUgYmV3ZXJrZW5cIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiQmV3ZXJrIGRvb3IgdGUgdHlwZW4gYmlqIGdlc2VsZWN0ZWVyZCBrbm9vcHB1bnRcIixcclxufTtcclxuXHJcbmNvbnN0IF9saTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBXdXJ6ZWxcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBSXHUwMEZDY2tnXHUwMEU0bmdpZ1wiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFdpZWRlcmhvbGFcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIENoYXJ0YVwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRm9rdXNcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiU3VlY2hlXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6U3VlY2hlIHwgTGVlcnRhc2NodDpCZWFyYmVpdGEgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOXHUwMEY2aWkgV3VyemVsXCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duLU1vZHVzXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiU3RpbC1QYW5lbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkNobm90YSBmb2t1c3NpZXJhXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIkNobm90YSBzdWVjaGVcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJJc3RlbGxpZ2FcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiVmVyZ3JcdTAwRjZcdTAwREZlcmFcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlZlcmtsZWluZXJhXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIEVpZ2V0c1wiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgQWxsaSBsXHUwMEY2c2NoYVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWwgYmVhcmJlaXRhXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE5cdTAwRjZpaSBXdXJ6ZWxcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgUlx1MDBGQ2NrZ1x1MDBFNG5naWdcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgV2llZGVyaG9sYVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsZSBTdGlsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIEJlYXJiZWl0YVwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBLb3BpZXJhXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgVXNzY2huaWRhXCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBJaWZcdTAwRkNlZ2VcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IENoaW5kXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgTGVjaHRzIENoaW5kXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEdzY2h3XHUwMEY2c2NodGVyXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgTFx1MDBGNnNjaGFcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiTGVpc2NodGEgdmVyc3RlY2thXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbGUgU3RpbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIkNoaW5kLUNobm90YVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiV3VyemVsLUNobm90YVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZXh0ZmFyYlwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlNjaHJpZnRnclx1MDBGNnNzZVwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiU2NocmlmdFwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlJhbmRzdGlsXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiUmFuZGZhcmJcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJSYW5kYnJlaXRpXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlJ1bmR1bmdcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJNaW4uIEJyZWl0aVwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJNaW4uIEhcdTAwRjZjaGlcIixcclxuICAgIFwic20uY29ublwiOiBcIlZlcmJpbmRpZ1wiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiVHlwXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiRmFyYlwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkJyZWl0aVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTFx1MDBFNG5naVwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFJcdTAwRTRnYWJvZ2FcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlJpY2h0aWdcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJHZXNjaHdpc3RlcmFic3RhbmRcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJSZWNodHNcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIkxlY2h0c1wiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiQmVpZGlcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldHRhXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlVzd2FobFwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlVzd2FobGZhcmJcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJVc3dhaGxicmVpdGlcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiS29udHVydmVyc2F0elwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIkJlYXJiZWl0aWdzcmFobWVmYXJiXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJCZWFyYmVpdGlnc3JhaG1lYnJlaXRpXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRleHR1c3JpY2h0aWdcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJUZXh0YWJzdGFuZFwiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIlppbGVoXHUwMEY2Y2hpXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiTGVpbndhbmRoaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlpydWdnc2V0emFcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJadWFtYWNoYVwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIkxlaXNjaHRhIHplaWdhXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiTGVpc2NodGEtQWJzdGFuZFwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJPYmFcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiUmVjaHRzXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIlVudGFcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiTGVjaHRzXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiTGVpc2NodGEtUG9zaXRpb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJPYmFcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJVbnRhXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJMZWlzY2h0YWhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJDaG5vcGZoaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIkNobm9wZnJhbmRzdGlsXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJDaG5vcGZyYW5kZmFyYlwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJDaG5vcGZ0ZXh0ZmFyYlwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIkxlaXNjaHRhIHpydWdnc2V0emFcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggQ2hub3RhLVN0aWxcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiTGluaWVmYXJiXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxpbmllYnJlaXRpXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiQXBcdTAwRTRzc2lnIGxcdTAwRjZzY2hlXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlJ1bmR1bmdcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiQ2hub3RhIHN1ZWNoZS4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIld1cnplbFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk5cdTAwRjZpaSBXdXJ6ZWxcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiQ2hpbmRcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIElzdGVsbGlnYVwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlNwcm9jaFwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJPYmVyZmxcdTAwRTRjaGEtU3Byb2NoXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRoZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJGYXJidGhlbWFcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiSGVsbFwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIkR1bmtlbFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIkxlaXNjaHRhIHplaWdhXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIkxlaXNjaHRhIHplaWdhXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIkxlaW53YW5kaGludGVyZ3J1bmRcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkhpbnRlcmdydW5kZmFyYlwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTAwRENiZXJcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaW9uXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRvclwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiRnVua3Rpb25zcmlpY2hpIE9wZW4tU291cmNlIE1pbmRtYXAtQXBwIGZcdTAwRkNyIE9ic2lkaWFuIG1pdCBlaWdlbmEgU3RpbGEsIFJcdTAwRTRnYWJvZ2EtVmVyYmluZGlnYSB1bmQgTWFya2Rvd24tU3VwcG9ydC5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJBa3R1YWxpc2llcnRcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1Yi1BYmxhZ2FcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIk9wZW4tU291cmNlLUF1dG9yIHVuZGVyc3RcdTAwRkN0emFcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJUYXN0ZWtvbWJpbmF0aW9uYVwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJUYXN0ZWtvbWJpbmF0aW9uYSBhcGFzc2FcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiQ2hub3RhIGJlYXJiZWl0YVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJHc2Nod1x1MDBGNnNjaHRlciBkZXp1ZWZcdTAwRkNlZ2FcIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkNoaW5kIGRlenVlZlx1MDBGQ2VnYVwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiQ2hub3RhIGZva3Vzc2llcmFcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiUlx1MDBGQ2NrZ1x1MDBFNG5naWdcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiV2llZGVyaG9sYVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlppbGF1bWJydWNoIChiaW0gQmVhcmJlaXRhKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJMZWlud2FuZCB6XHUwMEZDY2hhXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiVmVyZ3JcdTAwRjZcdTAwREZlcmFcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiVmVya2xlaW5lcmFcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJab29tIHpydWdnc2V0emFcIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIlVmXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIkFiXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIkxlY2h0c1wiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiUmVjaHRzXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJUYXNjaHQgZHJcdTAwRkNja2EuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjcm9sbGEgdW5kIFpvb21hXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiVmVydGlrYWxzIFNjcm9sbGEgdW1rZWhyYVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkhvcml6b250YWxzIFNjcm9sbGEgdW1rZWhyYVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlpvb21yaWNodGlnIHVta2VocmFcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIkJpIEVyc3RlbGxpZyBiZWFyYmVpdGFcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJCZWFyYmVpdGlnc21vZHVzIGJpIG5cdTAwRjZpZSBDaG5vdGFcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiV3VyemVsbmFtXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJTdGFuZGFyZG5hbSBmXHUwMEZDciBuXHUwMEY2aWkgV3VyemxhXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJDaGluZG5hbVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmFtIGZcdTAwRkNyIG5cdTAwRjZpaSBDaGluZGVyXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiVGlwcGEgenVtIEJlYXJiZWl0YVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJCaSB1c2d3XHUwMEU0aGx0ZW0gQ2hub3RhIGJlYXJiZWl0YVwiLFxyXG59O1xyXG5cclxuY29uc3QgX2RhOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJvZFwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IEZvcnRyeWRcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBHZW50YWdcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIEtvcnRcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZva3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlNcdTAwRjhnXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6U1x1MDBGOGcgfCBNZWxsZW1ydW06UmVkaWdcdTAwRTlyIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTnkgcm9kXCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duLXRpbHN0YW5kXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiU3RpbHBhbmVsXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiRm9rdXNcdTAwRTlyIHBcdTAwRTUga251ZGVcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiU1x1MDBGOGcgaSBrbnVkZXJcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJJbmRzdGlsbGluZ2VyXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlpvb20gaW5kXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJab29tIHVkXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIEJydWdlcmRlZmluZXJldFwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgU2xldCBhbGxlXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggUmVkaWdcdTAwRTlyIHN0aWxcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTnkgcm9kXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IEZvcnRyeWRcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgR2VudGFnXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWwgc3RpbFwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBSZWRpZ1x1MDBFOXJcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgS29waVx1MDBFOXJcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBLbGlwXCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBJbmRzXHUwMEU2dFwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgQmFyblwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFZlbnN0cmUgYmFyblwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBTXHUwMEY4c2tlbmRlXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgU2xldFwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJTa2p1bCB2XHUwMEU2cmt0XHUwMEY4anNsaW5qZVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWwgc3RpbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIkJhcm5la251ZGVcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlJvZGtudWRlXCIsXHJcbiAgICBcInNtLmJnXCI6IFwiQmFnZ3J1bmRcIixcclxuICAgIFwic20udGV4dFwiOiBcIlRla3N0ZmFydmVcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJTa3JpZnRzdFx1MDBGOHJyZWxzZVwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiU2tyaWZ0dHlwZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIkthbnRzdGlsXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiS2FudGZhcnZlXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiS2FudGJyZWRkZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJLYW50cmFkaXVzXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBicmVkZGVcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiTWluLiBoXHUwMEY4amRlXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJGb3JiaW5kZWxzZVwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiVHlwZVwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkZhcnZlXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiQnJlZGRlXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMXHUwMEU2bmdkZVwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiUmVnbmJ1ZVwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiS251ZGVyZXRuaW5nXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiU1x1MDBGOHNrZW5kZWFmc3RhbmRcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJIXHUwMEY4anJlXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJWZW5zdHJlXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCZWdnZVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0XCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIk1hcmtlcmluZ1wiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIk1hcmtlcmluZ3NmYXJ2ZVwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIk1hcmtlcmluZ3NicmVkZGVcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiS29udHVyZm9yc2t5ZG5pbmdcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJSZWRpZ2VyaW5nc2tvbnR1cmZhcnZlXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJSZWRpZ2VyaW5nc2tvbnR1cmJyZWRkZVwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJUZWtzdGp1c3RlcmluZ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRla3N0dWRmeWxkbmluZ1wiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIkxpbmplaFx1MDBGOGpkZVwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkxcdTAwRTZycmVkc2JhZ2dydW5kXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiTnVsc3RpbFwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIkx1a1wiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlZpcyB2XHUwMEU2cmt0XHUwMEY4anNsaW5qZVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlZcdTAwRTZya3RcdTAwRjhqc2xpbmpldWRmeWxkbmluZ1wiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJUb3BcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiSFx1MDBGOGpyZVwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJCdW5kXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlZlbnN0cmVcIixcclxuICAgIFwic20udGJQb3NcIjogXCJWXHUwMEU2cmt0XHUwMEY4anNsaW5qZXBvc2l0aW9uXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiVG9wXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiQnVuZFwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiVlx1MDBFNnJrdFx1MDBGOGpzbGluamViYWdncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiS25hcGJhZ2dydW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiS25hcCBrYW50c3RpbFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiS25hcCBrYW50ZmFydmVcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiS25hcCB0ZWtzdGZhcnZlXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiTnVsc3RpbCB2XHUwMEU2cmt0XHUwMEY4anNsaW5qZVwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBLbnVkZXN0aWxcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiTGluamVmYXJ2ZVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMaW5qZWJyZWRkZVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlJ5ZCB0aWxwYXNuaW5nXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIkthbnRyYWRpdXNcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiU1x1MDBGOGcgaSBrbnVkZXIuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJSb2RcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOeSByb2RcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiQmFyblwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogSW5kc3RpbGxpbmdlclwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlNwcm9nXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIkdyXHUwMEU2bnNlZmxhZGVzcHJvZ1wiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJGYXJ2ZXRlbWFcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiTHlzdFwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIk1cdTAwRjhya3RcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJWaXMgdlx1MDBFNnJrdFx1MDBGOGpzbGluamVcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiVmlzIHZcdTAwRTZya3RcdTAwRjhqc2xpbmplXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIkxcdTAwRTZycmVkc2JhZ2dydW5kXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJCYWdncnVuZHNmYXJ2ZVwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJPbVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpb25cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkZvcmZhdHRlclwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiRW4gZnVua3Rpb25zcmlnIG9wZW4gc291cmNlLXRhbmtla29ydGFwcCB0aWwgT2JzaWRpYW4gbWVkIGJydWdlcmRlZmluZXJlZGUgc3RpbGFydGVyLCByZWduYnVlZm9yYmluZGVsc2VyLCBtdWx0aXZhbGcsIHRyXHUwMEU2ay1vZy1zbGlwIG9nIE1hcmtkb3duLWltcG9ydC9la3Nwb3J0LlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIk9wZGF0ZXJldFwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViLWFya2l2XCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJTdFx1MDBGOHQgb3BlbiBzb3VyY2UtZm9yZmF0dGVyZW5cIixcclxuICAgIFwic2V0LmtleXNcIjogXCJUYXN0YXR1cmdlbnZlamVcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiVGlscGFzIGdlbnZlamVcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiUmVkaWdcdTAwRTlyIGtudWRlXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIlRpbGZcdTAwRjhqIHNcdTAwRjhza2VuZGVcIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIlRpbGZcdTAwRjhqIGJhcm5cIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZva3VzXHUwMEU5ciBwXHUwMEU1IGtudWRlXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIkZvcnRyeWRcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiR2VudGFnXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiTGluamVza2lmdCAodW5kZXIgcmVkaWdlcmluZylcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiVHJcdTAwRTZrIGxcdTAwRTZycmVkXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiWm9vbSBpbmRcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiWm9vbSB1ZFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIk51bHN0aWwgem9vbVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiTmF2aWdcdTAwRTlyIG9wXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIk5hdmlnXHUwMEU5ciBuZWRcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiTmF2aWdcdTAwRTlyIHZlbnN0cmVcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIk5hdmlnXHUwMEU5ciBoXHUwMEY4anJlXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJUcnlrIHBcdTAwRTUgZW4gdGFzdC4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiUnVsbmluZyBvZyB6b29tXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiSW52ZXJ0ZXIgbG9kcmV0IHJ1bG5pbmdcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJJbnZlcnRlciB2YW5kcmV0IHJ1bG5pbmdcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnRlciB6b29tcmV0bmluZ1wiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiUmVkaWdcdTAwRTlyIHZlZCBvcHJldHRlbHNlXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiUmVkaWdlcmluZ3N0aWxzdGFuZCB2ZWQgbnllIGtudWRlclwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJSb2RuYXZuXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJTdGFuZGFyZG5hdm4gZm9yIG55ZSByXHUwMEY4ZGRlclwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiQmFybmVuYXZuXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYXZuIGZvciBueWUgYlx1MDBGOHJuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiU2tyaXYgZm9yIGF0IHJlZGlnZXJlXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlJlZGlnXHUwMEU5ciB2ZWQgYXQgc2tyaXZlIG5cdTAwRTVyIGVuIGtudWRlIGVyIHZhbGd0XCIsXHJcbn07XHJcblxyXG5jb25zdCBfaGU6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgXHUwNUU5XHUwNUQ1XHUwNUU4XHUwNUU5XCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgXHUwNUQxXHUwNUQ4XHUwNURDXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgXHUwNUQxXHUwNUU2XHUwNUUyIFx1MDVFOVx1MDVENVx1MDVEMVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgXHUwNURFXHUwNUU0XHUwNUQ0XCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDVFMVx1MDVEMlx1MDVFMFx1MDVENVx1MDVERlwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIlx1MDVERVx1MDVEOVx1MDVFN1x1MDVENVx1MDVEM1wiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJcdTA1RDdcdTA1RDlcdTA1RTRcdTA1RDVcdTA1RTlcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpcdTA1RDdcdTA1RDlcdTA1RTRcdTA1RDVcdTA1RTkgfCBcdTA1RThcdTA1RDVcdTA1RDVcdTA1RDc6XHUwNUUyXHUwNUU4XHUwNUQ5XHUwNURCXHUwNUQ0IHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiXHUwNUU5XHUwNUQ1XHUwNUU4XHUwNUU5IFx1MDVEN1x1MDVEM1x1MDVFOVwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJcdTA1REVcdTA1RTZcdTA1RDEgTWFya2Rvd25cIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJcdTA1RDdcdTA1RENcdTA1RDVcdTA1RTBcdTA1RDlcdTA1RUEgXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiXHUwNURFXHUwNUU3XHUwNUQzIFx1MDVFMlx1MDVEQyBcdTA1RTZcdTA1RDVcdTA1REVcdTA1RUFcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiXHUwNUQ3XHUwNUU0XHUwNUU5IFx1MDVFNlx1MDVERVx1MDVFQVx1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIlx1MDVENFx1MDVEMlx1MDVEM1x1MDVFOFx1MDVENVx1MDVFQVwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJcdTA1RDRcdTA1RDJcdTA1RDNcdTA1RENcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlx1MDVENFx1MDVFN1x1MDVEOFx1MDVERlwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBcdTA1REVcdTA1RDVcdTA1RUFcdTA1RDBcdTA1REQgXHUwNUQwXHUwNUQ5XHUwNUU5XHUwNUQ5XHUwNUVBXCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTA1REVcdTA1RDdcdTA1RDlcdTA1RTdcdTA1RDQgXHUwNUQyXHUwNUQ1XHUwNUU4XHUwNUU0XHUwNUVBXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNUUyXHUwNUU4XHUwNUQ1XHUwNURBIFx1MDVFMVx1MDVEMlx1MDVFMFx1MDVENVx1MDVERlwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBcdTA1RTlcdTA1RDVcdTA1RThcdTA1RTkgXHUwNUQ3XHUwNUQzXHUwNUU5XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1MDVEMVx1MDVEOFx1MDVEQ1wiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBcdTA1RDFcdTA1RTZcdTA1RTIgXHUwNUU5XHUwNUQ1XHUwNUQxXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REYgXHUwNURCXHUwNURDXHUwNURDXHUwNUQ5XCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1MDVFMlx1MDVFOFx1MDVENVx1MDVEQVwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIFx1MDVENFx1MDVFMlx1MDVFQVx1MDVFN1wiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFx1MDVEMlx1MDVENlx1MDVENVx1MDVFOFwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgXHUwNUQ0XHUwNUQzXHUwNUQxXHUwNUU3XCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBcdTA1RTZcdTA1RDBcdTA1RTZcdTA1RDBcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBcdTA1RTZcdTA1RDBcdTA1RTZcdTA1RDAgXHUwNUU5XHUwNURFXHUwNUQwXHUwNURDXHUwNUQ5XCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFx1MDVEMFx1MDVEN1wiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDVERVx1MDVEN1x1MDVFN1wiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJcdTA1RDRcdTA1RTFcdTA1RUFcdTA1RTggXHUwNUUxXHUwNUU4XHUwNUQyXHUwNURDIFx1MDVEQlx1MDVEQ1x1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REYgXHUwNURCXHUwNURDXHUwNURDXHUwNUQ5XCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHUwNUU2XHUwNUQ1XHUwNURFXHUwNUVBIFx1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHUwNUU2XHUwNUQ1XHUwNURFXHUwNUVBIFx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMlwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVEOFx1MDVFN1x1MDVFMVx1MDVEOFwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1MDVEMlx1MDVENVx1MDVEM1x1MDVEQyBcdTA1RDJcdTA1RDVcdTA1RTRcdTA1REZcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1MDVEMlx1MDVENVx1MDVFNFx1MDVERlwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1MDVFMVx1MDVEMlx1MDVFMFx1MDVENVx1MDVERiBcdTA1RDJcdTA1RDFcdTA1RDVcdTA1RENcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNUQyXHUwNUQxXHUwNUQ1XHUwNURDXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHUwNUUyXHUwNUQ1XHUwNUQxXHUwNUQ5IFx1MDVEMlx1MDVEMVx1MDVENVx1MDVEQ1wiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTA1RTJcdTA1RDlcdTA1RDJcdTA1RDVcdTA1REMgXHUwNUU0XHUwNUQ5XHUwNUUwXHUwNUQ1XHUwNUVBXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHUwNUU4XHUwNUQ1XHUwNUQ3XHUwNUQxIFx1MDVERVx1MDVEOVx1MDVFMFx1MDVEOVx1MDVERVx1MDVEQ1x1MDVEOVwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJcdTA1RDJcdTA1RDVcdTA1RDFcdTA1RDQgXHUwNURFXHUwNUQ5XHUwNUUwXHUwNUQ5XHUwNURFXHUwNURDXHUwNUQ5XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJcdTA1RTdcdTA1RDUgXHUwNUQ3XHUwNUQ5XHUwNUQxXHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJcdTA1RTFcdTA1RDVcdTA1RDJcIixcclxuICAgIFwic20uY29sb3JcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJcdTA1RThcdTA1RDVcdTA1RDdcdTA1RDFcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIlx1MDVEMFx1MDVENVx1MDVFOFx1MDVEQVwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHUwNUU3XHUwNUU5XHUwNUVBXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdTA1REJcdTA1RDlcdTA1RDVcdTA1RDVcdTA1REYgXHUwNUU2XHUwNURFXHUwNUVBXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiXHUwNURFXHUwNUU4XHUwNUQ1XHUwNUQ1XHUwNUQ3IFx1MDVEMVx1MDVEOVx1MDVERiBcdTA1RDBcdTA1RDdcdTA1RDlcdTA1RERcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdTA1RDlcdTA1REVcdTA1RDlcdTA1REZcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1MDVFOVx1MDVERVx1MDVEMFx1MDVEQ1wiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHUwNUU5XHUwNUUwXHUwNUQ5XHUwNUQ0XHUwNUREXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHUwNURDXHUwNUQ1XHUwNUQ3IFx1MDVFNlx1MDVEMVx1MDVFMlx1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJcdTA1RDFcdTA1RDdcdTA1RDlcdTA1RThcdTA1RDRcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNUQxXHUwNUQ3XHUwNUQ5XHUwNUU4XHUwNUQ0XCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiXHUwNUUyXHUwNUQ1XHUwNUQxXHUwNUQ5IFx1MDVEMVx1MDVEN1x1MDVEOVx1MDVFOFx1MDVENFwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTA1RDRcdTA1RDlcdTA1RTFcdTA1RDggXHUwNURFXHUwNUVBXHUwNUQwXHUwNUU4XCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVERVx1MDVFQVx1MDVEMFx1MDVFOCBcdTA1RTJcdTA1RThcdTA1RDlcdTA1REJcdTA1RDRcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1MDVFMlx1MDVENVx1MDVEMVx1MDVEOSBcdTA1REVcdTA1RUFcdTA1RDBcdTA1RTggXHUwNUUyXHUwNUU4XHUwNUQ5XHUwNURCXHUwNUQ0XCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1MDVEOVx1MDVEOVx1MDVFOVx1MDVENVx1MDVFOCBcdTA1RDhcdTA1RTdcdTA1RTFcdTA1RDhcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJcdTA1RThcdTA1RDlcdTA1RTRcdTA1RDVcdTA1RDMgXHUwNUQ4XHUwNUU3XHUwNUUxXHUwNUQ4XCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHUwNUQyXHUwNUQ1XHUwNUQxXHUwNUQ0IFx1MDVFOVx1MDVENVx1MDVFOFx1MDVENFwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1RDFcdTA1RDMgXHUwNUU2XHUwNUQ5XHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiXHUwNUQwXHUwNUU0XHUwNUUxXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiXHUwNUUxXHUwNUQyXHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiXHUwNUQ0XHUwNUU2XHUwNUQyIFx1MDVFMVx1MDVFOFx1MDVEMlx1MDVEQyBcdTA1REJcdTA1RENcdTA1RDlcdTA1RERcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdTA1RThcdTA1RDlcdTA1RTRcdTA1RDVcdTA1RDMgXHUwNUUxXHUwNUU4XHUwNUQyXHUwNURDXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1MDVFMlx1MDVEQ1x1MDVEOVx1MDVENVx1MDVERlwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTA1RDlcdTA1REVcdTA1RDlcdTA1REZcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHUwNUVBXHUwNUQ3XHUwNUVBXHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1MDVFOVx1MDVERVx1MDVEMFx1MDVEQ1wiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MDVERVx1MDVEOVx1MDVFN1x1MDVENVx1MDVERCBcdTA1RTFcdTA1RThcdTA1RDJcdTA1RENcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTA1RTJcdTA1RENcdTA1RDlcdTA1RDVcdTA1REZcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTA1RUFcdTA1RDdcdTA1RUFcdTA1RDVcdTA1REZcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1RTFcdTA1RThcdTA1RDJcdTA1RENcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1REJcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REYgXHUwNUQyXHUwNUQxXHUwNUQ1XHUwNURDIFx1MDVEQlx1MDVFNFx1MDVFQVx1MDVENVx1MDVFOFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVEMlx1MDVEMVx1MDVENVx1MDVEQyBcdTA1REJcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVEOFx1MDVFN1x1MDVFMVx1MDVEOCBcdTA1REJcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTA1RDBcdTA1RTRcdTA1RTEgXHUwNUUxXHUwNUU4XHUwNUQyXHUwNURDIFx1MDVEQlx1MDVEQ1x1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REYgXHUwNUU2XHUwNUQ1XHUwNURFXHUwNUVBXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMiBcdTA1RTdcdTA1RDVcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHUwNUUyXHUwNUQ1XHUwNUQxXHUwNUQ5IFx1MDVFN1x1MDVENVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlx1MDVFMFx1MDVFN1x1MDVENCBcdTA1RDRcdTA1RUFcdTA1RDBcdTA1REVcdTA1RDQgXHUwNUQwXHUwNUQ5XHUwNUU5XHUwNUQ5XHUwNUVBXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlx1MDVFMlx1MDVEOVx1MDVEMlx1MDVENVx1MDVEQyBcdTA1RTRcdTA1RDlcdTA1RTBcdTA1RDVcdTA1RUFcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiXHUwNUQ3XHUwNUU0XHUwNUU5IFx1MDVFNlx1MDVERVx1MDVFQVx1MDVEOVx1MDVERC4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOVwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOSBcdTA1RDdcdTA1RDNcdTA1RTlcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHUwNUU2XHUwNUQwXHUwNUU2XHUwNUQwXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIlx1MDVENFx1MDVEMlx1MDVEM1x1MDVFOFx1MDVENVx1MDVFQSBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdTA1RTlcdTA1RTRcdTA1RDRcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHUwNUU5XHUwNUU0XHUwNUVBIFx1MDVERVx1MDVERVx1MDVFOVx1MDVFN1wiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdTA1RTJcdTA1RThcdTA1REJcdTA1RUEgXHUwNUUwXHUwNUQ1XHUwNUU5XHUwNUQwXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJcdTA1RTJcdTA1RThcdTA1REJcdTA1RUEgXHUwNUU2XHUwNUQxXHUwNUUyXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIlx1MDVEMVx1MDVENFx1MDVEOVx1MDVFOFwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIlx1MDVEQlx1MDVENFx1MDVENFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlx1MDVENFx1MDVFNlx1MDVEMiBcdTA1RTFcdTA1RThcdTA1RDJcdTA1REMgXHUwNURCXHUwNURDXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1MDVENFx1MDVFNlx1MDVEMiBcdTA1RTFcdTA1RThcdTA1RDJcdTA1REMgXHUwNURCXHUwNURDXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1RDFcdTA1RDMgXHUwNUU2XHUwNUQ5XHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNUU4XHUwNUU3XHUwNUUyXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1MDVEMFx1MDVENVx1MDVEM1x1MDVENVx1MDVFQVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1MDVEMlx1MDVFOFx1MDVFMVx1MDVENFwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHUwNURFXHUwNUQ3XHUwNUQxXHUwNUU4XCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJcdTA1RDBcdTA1RTRcdTA1RENcdTA1RDlcdTA1RTdcdTA1RTZcdTA1RDlcdTA1RDlcdTA1RUEgXHUwNURFXHUwNUU0XHUwNUVBIFx1MDVEN1x1MDVFOVx1MDVEOVx1MDVEMVx1MDVENCBcdTA1RDFcdTA1RTdcdTA1RDVcdTA1RDMgXHUwNUU0XHUwNUVBXHUwNUQ1XHUwNUQ3IFx1MDVFMlx1MDVFOVx1MDVEOVx1MDVFOFx1MDVENCBcdTA1RDFcdTA1RUFcdTA1REJcdTA1RDVcdTA1RTBcdTA1RDVcdTA1RUEgXHUwNUUyXHUwNUQxXHUwNUQ1XHUwNUU4IE9ic2lkaWFuIFx1MDVFMlx1MDVERCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1RTBcdTA1RDVcdTA1RUEgXHUwNURFXHUwNUQ1XHUwNUVBXHUwNUQwXHUwNURFXHUwNUQ5XHUwNURELCBcdTA1RDdcdTA1RDlcdTA1RDFcdTA1RDVcdTA1RThcdTA1RDkgXHUwNUU3XHUwNUU5XHUwNUVBLCBcdTA1RDFcdTA1RDdcdTA1RDlcdTA1RThcdTA1RDQgXHUwNURFXHUwNUU4XHUwNUQ1XHUwNUQxXHUwNUQ0LCBcdTA1RDJcdTA1RThcdTA1RDlcdTA1RThcdTA1RDQgXHUwNUQ1XHUwNUU5XHUwNUQ3XHUwNUU4XHUwNUQ1XHUwNUU4IFx1MDVENVx1MDVEOVx1MDVEOVx1MDVEMVx1MDVENVx1MDVEMC9cdTA1RDlcdTA1RDlcdTA1RTZcdTA1RDVcdTA1RDAgTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHUwNUUyXHUwNUQ1XHUwNUQzXHUwNURCXHUwNURGXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJcdTA1REVcdTA1RDBcdTA1RDJcdTA1RTggR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdTA1RUFcdTA1REVcdTA1RDVcdTA1REEgXHUwNUQxXHUwNURFXHUwNUQ3XHUwNUQxXHUwNUU4IFx1MDVENFx1MDVFN1x1MDVENVx1MDVEMyBcdTA1RDRcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RDdcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJcdTA1RTdcdTA1RDlcdTA1RTZcdTA1RDVcdTA1RThcdTA1RDkgXHUwNURFXHUwNUU3XHUwNURDXHUwNUQzXHUwNUVBXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1MDVENFx1MDVFQVx1MDVEMFx1MDVERCBcdTA1RTdcdTA1RDlcdTA1RTZcdTA1RDVcdTA1RThcdTA1RDlcdTA1RERcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUwNUUyXHUwNUU4XHUwNUQ1XHUwNURBIFx1MDVFNlx1MDVENVx1MDVERVx1MDVFQVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJcdTA1RDRcdTA1RDVcdTA1RTFcdTA1RTMgXHUwNUQwXHUwNUQ3XCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJcdTA1RDRcdTA1RDVcdTA1RTFcdTA1RTMgXHUwNUU2XHUwNUQwXHUwNUU2XHUwNUQwXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdTA1REVcdTA1RTdcdTA1RDMgXHUwNUUyXHUwNURDIFx1MDVFNlx1MDVENVx1MDVERVx1MDVFQVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTA1RDFcdTA1RDhcdTA1RENcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHUwNUQxXHUwNUU2XHUwNUUyIFx1MDVFOVx1MDVENVx1MDVEMVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1MDVFOVx1MDVEMVx1MDVEOVx1MDVFOFx1MDVFQSBcdTA1RTlcdTA1RDVcdTA1RThcdTA1RDQgKFx1MDVEMVx1MDVFMlx1MDVFOFx1MDVEOVx1MDVEQlx1MDVENClcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiXHUwNUQyXHUwNUU4XHUwNUQ1XHUwNUU4IFx1MDVEMVx1MDVEMyBcdTA1RTZcdTA1RDlcdTA1RDVcdTA1RThcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTA1RDRcdTA1RDJcdTA1RDNcdTA1RENcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHUwNUQ0XHUwNUU3XHUwNUQ4XHUwNURGXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUwNUQwXHUwNUU0XHUwNUUxIFx1MDVFQVx1MDVFN1x1MDVFOFx1MDVEOVx1MDVEMVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHUwNUUwXHUwNUQ1XHUwNUQ1XHUwNUQ4IFx1MDVEQ1x1MDVERVx1MDVFMlx1MDVEQ1x1MDVENFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTA1RTBcdTA1RDVcdTA1RDVcdTA1RDggXHUwNURDXHUwNURFXHUwNUQ4XHUwNUQ0XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1MDVFMFx1MDVENVx1MDVENVx1MDVEOCBcdTA1RTlcdTA1REVcdTA1RDBcdTA1RENcdTA1RDRcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1MDVFMFx1MDVENVx1MDVENVx1MDVEOCBcdTA1RDlcdTA1REVcdTA1RDlcdTA1RTBcdTA1RDRcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1MDVEQ1x1MDVEN1x1MDVFNSBcdTA1RTJcdTA1REMgXHUwNURFXHUwNUU3XHUwNUU5Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJcdTA1RDJcdTA1RENcdTA1RDlcdTA1RENcdTA1RDQgXHUwNUQ1XHUwNUVBXHUwNUU3XHUwNUU4XHUwNUQ5XHUwNUQxXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHUwNUQ0XHUwNUU0XHUwNUQ1XHUwNURBIFx1MDVEMlx1MDVEQ1x1MDVEOVx1MDVEQ1x1MDVENCBcdTA1RDBcdTA1RTBcdTA1REJcdTA1RDlcdTA1RUFcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJcdTA1RDRcdTA1RTRcdTA1RDVcdTA1REEgXHUwNUQyXHUwNURDXHUwNUQ5XHUwNURDXHUwNUQ0IFx1MDVEMFx1MDVENVx1MDVFNFx1MDVFN1x1MDVEOVx1MDVFQVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MDVENFx1MDVFNFx1MDVENVx1MDVEQSBcdTA1REJcdTA1RDlcdTA1RDVcdTA1RDVcdTA1REYgXHUwNUVBXHUwNUU3XHUwNUU4XHUwNUQ5XHUwNUQxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTA1RTJcdTA1RThcdTA1RDVcdTA1REEgXHUwNUQxXHUwNUQ5XHUwNUU2XHUwNUQ5XHUwNUU4XHUwNUQ0XCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUwNURFXHUwNUU2XHUwNUQxIFx1MDVFMlx1MDVFOFx1MDVEOVx1MDVEQlx1MDVENCBcdTA1RDFcdTA1RTJcdTA1RUEgXHUwNUQ5XHUwNUU2XHUwNUQ5XHUwNUU4XHUwNUVBIFx1MDVFNlx1MDVERVx1MDVFQVx1MDVEOVx1MDVERCBcdTA1RDdcdTA1RDNcdTA1RTlcdTA1RDlcdTA1RERcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHUwNUU5XHUwNUREIFx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHUwNUU5XHUwNUREIFx1MDVEMVx1MDVFOFx1MDVEOVx1MDVFOFx1MDVFQSBcdTA1REVcdTA1RDdcdTA1RDNcdTA1REMgXHUwNURDXHUwNUU5XHUwNUQ1XHUwNUU4XHUwNUU5XHUwNUQ5XHUwNUREIFx1MDVEN1x1MDVEM1x1MDVFOVx1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiXHUwNUU5XHUwNUREIFx1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlx1MDVFOVx1MDVERCBcdTA1RDFcdTA1RThcdTA1RDlcdTA1RThcdTA1RUEgXHUwNURFXHUwNUQ3XHUwNUQzXHUwNURDIFx1MDVEQ1x1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFx1MDVEOVx1MDVERCBcdTA1RDdcdTA1RDNcdTA1RTlcdTA1RDlcdTA1RERcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJcdTA1RDRcdTA1RTdcdTA1RENcdTA1RDMgXHUwNURDXHUwNUUyXHUwNUU4XHUwNUQ5XHUwNURCXHUwNUQ0XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlx1MDVFMlx1MDVFOFx1MDVENVx1MDVEQSBcdTA1RTJcdTA1REMgXHUwNUQ5XHUwNUQzXHUwNUQ5IFx1MDVENFx1MDVFN1x1MDVEQ1x1MDVEM1x1MDVENCBcdTA1REJcdTA1RTlcdTA1RTZcdTA1RDVcdTA1REVcdTA1RUEgXHUwNUUwXHUwNUQxXHUwNUQ3XHUwNUU4XCIsXHJcbn07XHJcblxyXG5jb25zdCBfaXQ6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUmFkaWNlXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgQW5udWxsYVwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJpcGV0aVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgTWFwcGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbGVcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJNZXNzYSBhIGZ1b2NvXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIkNlcmNhXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6Q2VyY2EgfCBTcGF6aW86TW9kaWZpY2EgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOdW92YSByYWRpY2VcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTW9kYWxpdFx1MDBFMCBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlBhbm5lbGxvIHN0aWxlXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiTWVzc2EgYSBmdW9jbyBzdWwgbm9kb1wiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJDZXJjYSBub2RpXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiSW1wb3N0YXppb25pXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIkluZ3JhbmRpc2NpXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJSaWR1Y2lcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgUGVyc29uYWxpenphdG9cIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEVsaW1pbmEgaW4gYmxvY2NvXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggTW9kaWZpY2Egc3RpbGVcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTnVvdmEgcmFkaWNlXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IEFubnVsbGFcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgUmlwZXRpXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsZSBnbG9iYWxlXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIE1vZGlmaWNhXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsZVwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBDb3BpYVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFRhZ2xpYVwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgSW5jb2xsYVwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgRmlnbGlvXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgRmlnbGlvIHNpbmlzdHJvXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEZyYXRlbGxvXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgRWxpbWluYVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJOYXNjb25kaSBiYXJyYSBkZWdsaSBzdHJ1bWVudGlcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbGUgZ2xvYmFsZVwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIk5vZG8gZmlnbGlvXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJOb2RvIHJhZGljZVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlNmb25kb1wiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiQ29sb3JlIHRlc3RvXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiRGltZW5zaW9uZSBjYXJhdHRlcmVcIixcclxuICAgIFwic20uZm9udFwiOiBcIkNhcmF0dGVyZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlN0aWxlIGJvcmRvXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiQ29sb3JlIGJvcmRvXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiTGFyZ2hlenphIGJvcmRvXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlJhZ2dpbyBib3Jkb1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIkxhcmdoZXp6YSBtaW4uXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIkFsdGV6emEgbWluLlwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiQ29ubmVzc2lvbmVcIixcclxuICAgIFwic20udHlwZVwiOiBcIlRpcG9cIixcclxuICAgIFwic20uY29sb3JcIjogXCJDb2xvcmVcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJMYXJnaGV6emFcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkx1bmdoZXp6YVwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiQXJjb2JhbGVub1wiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiRGlyZXppb25lIG5vZGlcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTcGF6aWF0dXJhIGZyYXRlbGxpXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiRGVzdHJhXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJTaW5pc3RyYVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiRW50cmFtYmlcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJUYXZvbG96emFcIixcclxuICAgIFwic20uc2VsXCI6IFwiU2VsZXppb25lXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiQ29sb3JlIHNlbGV6aW9uZVwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIkxhcmdoZXp6YSBzZWxlemlvbmVcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiU2Nvc3RhbWVudG8gY29udG9ybm9cIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJDb2xvcmUgY29udG9ybm8gbW9kaWZpY2FcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkxhcmdoZXp6YSBjb250b3JubyBtb2RpZmljYVwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJBbGxpbmVhbWVudG8gdGVzdG9cIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJSaWVtcGltZW50byB0ZXN0b1wiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIkFsdGV6emEgcmlnYVwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlNmb25kbyBhcmVhIGRpIGxhdm9yb1wiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlJpcHJpc3RpbmFcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJDaGl1ZGlcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJNb3N0cmEgYmFycmEgc3RydW1lbnRpXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiUmllbXBpbWVudG8gYmFycmFcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiU3VwZXJpb3JlXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIkRlc3Ryb1wiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJJbmZlcmlvcmVcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiU2luaXN0cm9cIixcclxuICAgIFwic20udGJQb3NcIjogXCJQb3NpemlvbmUgYmFycmFcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJTdXBlcmlvcmVcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJJbmZlcmlvcmVcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlNmb25kbyBiYXJyYVwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiU2ZvbmRvIHB1bHNhbnRlXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiU3RpbGUgYm9yZG8gcHVsc2FudGVcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIkNvbG9yZSBib3JkbyBwdWxzYW50ZVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJDb2xvcmUgdGVzdG8gcHVsc2FudGVcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJSaXByaXN0aW5hIGJhcnJhIHN0cnVtZW50aVwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsZSBub2RvXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkNvbG9yZSBsaW5lYVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMYXJnaGV6emEgbGluZWFcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJDYW5jZWxsYSBwZXJzb25hbGl6emF6aW9uZVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJSYWdnaW8gYm9yZG9cIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiQ2VyY2Egbm9kaS4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJhZGljZVwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk51b3ZhIHJhZGljZVwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJGaWdsaW9cIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiSW1wb3N0YXppb25pIE1pbmRaSlwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIkxpbmd1YVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJMaW5ndWEgZGVsbCdpbnRlcmZhY2NpYVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJUZW1hIGNvbG9yaVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJDaGlhcm9cIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJTY3Vyb1wiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIk1vc3RyYSBiYXJyYSBzdHJ1bWVudGlcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiTW9zdHJhIGJhcnJhIHN0cnVtZW50aVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJTZm9uZG8gYXJlYSBkaSBsYXZvcm9cIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkNvbG9yZSBkaSBzZm9uZG9cIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiSW5mb3JtYXppb25pXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvbmVcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkF1dG9yZVwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiQXBwIGRpIG1hcHBlIG1lbnRhbGkgb3BlbiBzb3VyY2UgcmljY2EgZGkgZnVuemlvbmFsaXRcdTAwRTAgcGVyIE9ic2lkaWFuIGNvbiBzdGlsaSBwZXJzb25hbGl6emF0aSwgY29ubmVzc2lvbmkgYXJjb2JhbGVubywgc2VsZXppb25lIG11bHRpcGxhLCB0cmFzY2luYW1lbnRvIGUgaW1wb3J0YXppb25lL2VzcG9ydGF6aW9uZSBNYXJrZG93bi5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJBZ2dpb3JuYXRvXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJSZXBvc2l0b3J5IEdpdEh1YlwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiU3VwcG9ydGEgbCdhdXRvcmUgb3BlbiBzb3VyY2VcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJTY29yY2lhdG9pZSBkYSB0YXN0aWVyYVwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJQZXJzb25hbGl6emEgc2NvcmNpYXRvaWVcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiTW9kaWZpY2Egbm9kb1wiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJBZ2dpdW5naSBmcmF0ZWxsb1wiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiQWdnaXVuZ2kgZmlnbGlvXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJNZXNzYSBhIGZ1b2NvIHN1bCBub2RvXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIkFubnVsbGFcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiUmlwZXRpXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiQSBjYXBvIChpbiBtb2RpZmljYSlcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiVHJhc2NpbmEgYXJlYSBkaSBsYXZvcm9cIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJJbmdyYW5kaXNjaVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJSaWR1Y2lcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJSZWltcG9zdGEgem9vbVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiTmF2aWdhIHN1XCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIk5hdmlnYSBnaVx1MDBGOVwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJOYXZpZ2EgYSBzaW5pc3RyYVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWdhIGEgZGVzdHJhXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJQcmVtaSB1biB0YXN0by4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiU2NvcnJpbWVudG8gZSB6b29tXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiSW52ZXJ0aSBzY29ycmltZW50byB2ZXJ0aWNhbGVcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJJbnZlcnRpIHNjb3JyaW1lbnRvIG9yaXp6b250YWxlXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiSW52ZXJ0aSBkaXJlemlvbmUgem9vbVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiTW9kaWZpY2EgYWxsYSBjcmVhemlvbmVcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJNb2RhbGl0XHUwMEUwIG1vZGlmaWNhIGFsbGEgY3JlYXppb25lIGRlaSBub2RpXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIk5vbWUgcmFkaWNlXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJOb21lIHByZWRlZmluaXRvIHBlciBudW92ZSByYWRpY2lcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIk5vbWUgZmlnbGlvXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiTm9tZSBwcmVkZWZpbml0byBwZXIgbnVvdmkgZmlnbGlcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJEaWdpdGEgcGVyIG1vZGlmaWNhcmVcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiTW9kaWZpY2EgZGlnaXRhbmRvIHF1YW5kbyB1biBub2RvIFx1MDBFOCBzZWxlemlvbmF0b1wiLFxyXG59O1xyXG5cclxuY29uc3QgX2FyOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFx1MDYyQ1x1MDYzMFx1MDYzMVwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFx1MDYyQVx1MDYzMVx1MDYyN1x1MDYyQ1x1MDYzOVwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFx1MDYyNVx1MDYzOVx1MDYyN1x1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgXHUwNjJFXHUwNjMxXHUwNjRBXHUwNjM3XHUwNjI5XCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDY0Nlx1MDY0NVx1MDYzN1wiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIlx1MDYyQVx1MDYzMVx1MDY0M1x1MDY0QVx1MDYzMlwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJcdTA2MjhcdTA2MkRcdTA2MkJcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpcdTA2MjhcdTA2MkRcdTA2MkIgfCBcdTA2NDVcdTA2MzNcdTA2MjdcdTA2NDFcdTA2Mjk6XHUwNjJBXHUwNjJEXHUwNjMxXHUwNjRBXHUwNjMxIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiXHUwNjJDXHUwNjMwXHUwNjMxIFx1MDYyQ1x1MDYyRlx1MDY0QVx1MDYyRlwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJcdTA2NDhcdTA2MzZcdTA2MzkgTWFya2Rvd25cIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJcdTA2NDRcdTA2NDhcdTA2MkRcdTA2MjkgXHUwNjI3XHUwNjQ0XHUwNjIzXHUwNjQ2XHUwNjQ1XHUwNjI3XHUwNjM3XCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjMxXHUwNjQzXHUwNjRBXHUwNjMyIFx1MDYzOVx1MDY0NFx1MDY0OSBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2NDJcdTA2MkZcdTA2MjlcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjI4XHUwNjJEXHUwNjJCIFx1MDY0MVx1MDY0QSBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2NDJcdTA2MkZcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJcdTA2MjdcdTA2NDRcdTA2MjVcdTA2MzlcdTA2MkZcdTA2MjdcdTA2MkZcdTA2MjdcdTA2MkFcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiXHUwNjJBXHUwNjQzXHUwNjI4XHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJcdTA2MkFcdTA2MzVcdTA2M0FcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgXHUwNjQ1XHUwNjJFXHUwNjM1XHUwNjM1XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTA2MkRcdTA2MzBcdTA2NDEgXHUwNjJDXHUwNjQ1XHUwNjI3XHUwNjM5XHUwNjRBXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNjJBXHUwNjJEXHUwNjMxXHUwNjRBXHUwNjMxIFx1MDYyN1x1MDY0NFx1MDY0Nlx1MDY0NVx1MDYzN1wiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBcdTA2MkNcdTA2MzBcdTA2MzEgXHUwNjJDXHUwNjJGXHUwNjRBXHUwNjJGXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1MDYyQVx1MDYzMVx1MDYyN1x1MDYyQ1x1MDYzOVwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBcdTA2MjVcdTA2MzlcdTA2MjdcdTA2MkZcdTA2MjlcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDYyN1x1MDY0NFx1MDY0Nlx1MDY0NVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2MjdcdTA2NDVcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHUwNjJBXHUwNjJEXHUwNjMxXHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA2NDZcdTA2NDVcdTA2MzdcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgXHUwNjQ2XHUwNjMzXHUwNjJFXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgXHUwNjQyXHUwNjM1XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBcdTA2NDRcdTA2MzVcdTA2NDJcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IFx1MDY0MVx1MDYzMVx1MDYzOVwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFx1MDY0MVx1MDYzMVx1MDYzOSBcdTA2MjNcdTA2NEFcdTA2MzNcdTA2MzFcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgXHUwNjM0XHUwNjQyXHUwNjRBXHUwNjQyXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHUwNjJEXHUwNjMwXHUwNjQxXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlx1MDYyNVx1MDYyRVx1MDY0MVx1MDYyN1x1MDYyMSBcdTA2MzRcdTA2MzFcdTA2NEFcdTA2MzcgXHUwNjI3XHUwNjQ0XHUwNjIzXHUwNjJGXHUwNjQ4XHUwNjI3XHUwNjJBXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDYyN1x1MDY0NFx1MDY0Nlx1MDY0NVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2MjdcdTA2NDVcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJcdTA2MzlcdTA2NDJcdTA2MkZcdTA2MjkgXHUwNjQxXHUwNjMxXHUwNjM5XHUwNjRBXHUwNjI5XCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJcdTA2MzlcdTA2NDJcdTA2MkZcdTA2MjkgXHUwNjJDXHUwNjMwXHUwNjMxXHUwNjRBXHUwNjI5XCIsXHJcbiAgICBcInNtLmJnXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5XCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjI3XHUwNjQ0XHUwNjQ2XHUwNjM1XCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiXHUwNjJEXHUwNjJDXHUwNjQ1IFx1MDYyN1x1MDY0NFx1MDYyRVx1MDYzN1wiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJFXHUwNjM3XCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiXHUwNjQ2XHUwNjQ1XHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYyRFx1MDYyRlx1MDY0OFx1MDYyRlwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlx1MDY0NFx1MDY0OFx1MDY0NiBcdTA2MjdcdTA2NDRcdTA2MkRcdTA2MkZcdTA2NDhcdTA2MkZcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJcdTA2MzlcdTA2MzFcdTA2MzYgXHUwNjI3XHUwNjQ0XHUwNjJEXHUwNjJGXHUwNjQ4XHUwNjJGXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlx1MDYyQVx1MDY0Mlx1MDY0OFx1MDY0QVx1MDYzMyBcdTA2MjdcdTA2NDRcdTA2MzJcdTA2NDhcdTA2MjdcdTA2NEFcdTA2MjdcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkRcdTA2MkYgXHUwNjI3XHUwNjQ0XHUwNjIzXHUwNjJGXHUwNjQ2XHUwNjQ5IFx1MDY0NFx1MDY0NFx1MDYzOVx1MDYzMVx1MDYzNlwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkRcdTA2MkYgXHUwNjI3XHUwNjQ0XHUwNjIzXHUwNjJGXHUwNjQ2XHUwNjQ5IFx1MDY0NFx1MDY0NFx1MDYyN1x1MDYzMVx1MDYyQVx1MDY0MVx1MDYyN1x1MDYzOVwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiXHUwNjJFXHUwNjM3IFx1MDYyN1x1MDY0NFx1MDY0OFx1MDYzNVx1MDY0NFwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjQ2XHUwNjQ4XHUwNjM5XCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjQ0XHUwNjQ4XHUwNjQ2XCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjMxXHUwNjM2XCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJcdTA2MjdcdTA2NDRcdTA2MzdcdTA2NDhcdTA2NDRcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1MDY0Mlx1MDY0OFx1MDYzMyBcdTA2NDJcdTA2MzJcdTA2MkRcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlx1MDYyN1x1MDYyQVx1MDYyQ1x1MDYyN1x1MDY0NyBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2NDJcdTA2MkZcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJcdTA2MjdcdTA2NDRcdTA2NDVcdTA2MzNcdTA2MjdcdTA2NDFcdTA2MjkgXHUwNjI4XHUwNjRBXHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYzNFx1MDY0Mlx1MDYyN1x1MDYyMVwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlx1MDY0QVx1MDY0NVx1MDY0QVx1MDY0NlwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiXHUwNjRBXHUwNjMzXHUwNjI3XHUwNjMxXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJcdTA2NDNcdTA2NDRcdTA2MjdcdTA2NDdcdTA2NDVcdTA2MjdcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJcdTA2NDRcdTA2NDhcdTA2MkQgXHUwNjI3XHUwNjQ0XHUwNjIzXHUwNjQ0XHUwNjQ4XHUwNjI3XHUwNjQ2XCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYyRlx1MDY0QVx1MDYyRlwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlx1MDY0NFx1MDY0OFx1MDY0NiBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MkZcdTA2NEFcdTA2MkZcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJcdTA2MzlcdTA2MzFcdTA2MzYgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjJEXHUwNjJGXHUwNjRBXHUwNjJGXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1MDYyNVx1MDYzMlx1MDYyN1x1MDYyRFx1MDYyOSBcdTA2MjdcdTA2NDRcdTA2MjVcdTA2MzdcdTA2MjdcdTA2MzFcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjI1XHUwNjM3XHUwNjI3XHUwNjMxIFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiXHUwNjM5XHUwNjMxXHUwNjM2IFx1MDYyNVx1MDYzN1x1MDYyN1x1MDYzMSBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiXHUwNjQ1XHUwNjJEXHUwNjI3XHUwNjMwXHUwNjI3XHUwNjI5IFx1MDYyN1x1MDY0NFx1MDY0Nlx1MDYzNVwiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1MDYyRFx1MDYzNFx1MDY0OCBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2MzVcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJcdTA2MjdcdTA2MzFcdTA2MkFcdTA2NDFcdTA2MjdcdTA2MzkgXHUwNjI3XHUwNjQ0XHUwNjMzXHUwNjM3XHUwNjMxXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDY0NFx1MDY0OFx1MDYyRFx1MDYyOVwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1MDYyNVx1MDYzOVx1MDYyN1x1MDYyRlx1MDYyOSBcdTA2MkFcdTA2MzlcdTA2NEFcdTA2NEFcdTA2NDZcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJcdTA2MjVcdTA2M0FcdTA2NDRcdTA2MjdcdTA2NDJcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJcdTA2MjVcdTA2MzhcdTA2NDdcdTA2MjdcdTA2MzEgXHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0OFx1MDYyN1x1MDYyQVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlx1MDYyRFx1MDYzNFx1MDY0OCBcdTA2MjdcdTA2NDRcdTA2MzRcdTA2MzFcdTA2NEFcdTA2MzdcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiXHUwNjIzXHUwNjM5XHUwNjQ0XHUwNjQ5XCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlx1MDY0QVx1MDY0NVx1MDY0QVx1MDY0NlwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJcdTA2MjNcdTA2MzNcdTA2NDFcdTA2NDRcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiXHUwNjRBXHUwNjMzXHUwNjI3XHUwNjMxXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiXHUwNjQ1XHUwNjQ4XHUwNjM2XHUwNjM5IFx1MDYyN1x1MDY0NFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzN1wiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlx1MDYyM1x1MDYzOVx1MDY0NFx1MDY0OVwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIlx1MDYyM1x1MDYzM1x1MDY0MVx1MDY0NFwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiXHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzN1wiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiXHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDYzMlx1MDYzMVwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlx1MDY0Nlx1MDY0NVx1MDYzNyBcdTA2MkRcdTA2MkZcdTA2NDhcdTA2MkYgXHUwNjI3XHUwNjQ0XHUwNjMyXHUwNjMxXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjJEXHUwNjJGXHUwNjQ4XHUwNjJGIFx1MDYyN1x1MDY0NFx1MDYzMlx1MDYzMVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjQ2XHUwNjM1IFx1MDYyN1x1MDY0NFx1MDYzMlx1MDYzMVwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlx1MDYyNVx1MDYzOVx1MDYyN1x1MDYyRlx1MDYyOSBcdTA2MkFcdTA2MzlcdTA2NEFcdTA2NEFcdTA2NDYgXHUwNjI3XHUwNjQ0XHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3XCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDY0Nlx1MDY0NVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2NDJcdTA2MkZcdTA2MjlcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYyRVx1MDYzN1wiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdTA2MzlcdTA2MzFcdTA2MzYgXHUwNjI3XHUwNjQ0XHUwNjJFXHUwNjM3XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHUwNjQ1XHUwNjMzXHUwNjJEIFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRVx1MDYzNVx1MDY0QVx1MDYzNVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJcdTA2MkFcdTA2NDJcdTA2NDhcdTA2NEFcdTA2MzMgXHUwNjI3XHUwNjQ0XHUwNjMyXHUwNjQ4XHUwNjI3XHUwNjRBXHUwNjI3XCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyOFx1MDYyRFx1MDYyQiBcdTA2NDFcdTA2NEEgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiXHUwNjJDXHUwNjMwXHUwNjMxXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiXHUwNjJDXHUwNjMwXHUwNjMxIFx1MDYyQ1x1MDYyRlx1MDY0QVx1MDYyRlwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJcdTA2NDFcdTA2MzFcdTA2MzlcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiXHUwNjI1XHUwNjM5XHUwNjJGXHUwNjI3XHUwNjJGXHUwNjI3XHUwNjJBIE1pbmRaSlwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlx1MDYyN1x1MDY0NFx1MDY0NFx1MDYzQVx1MDYyOVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJcdTA2NDRcdTA2M0FcdTA2MjkgXHUwNjI3XHUwNjQ0XHUwNjQ4XHUwNjI3XHUwNjJDXHUwNjQ3XHUwNjI5XCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlx1MDYyN1x1MDY0NFx1MDYzM1x1MDY0NVx1MDYyOVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiXHUwNjMzXHUwNjQ1XHUwNjI5IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDY0NFx1MDY0OFx1MDYyN1x1MDY0NlwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJcdTA2NDFcdTA2MjdcdTA2MkFcdTA2MkRcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJcdTA2MkZcdTA2MjdcdTA2NDNcdTA2NDZcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJcdTA2MjVcdTA2MzhcdTA2NDdcdTA2MjdcdTA2MzEgXHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0OFx1MDYyN1x1MDYyQVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJcdTA2MjVcdTA2MzhcdTA2NDdcdTA2MjdcdTA2MzEgXHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0OFx1MDYyN1x1MDYyQVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJcdTA2MkVcdTA2NDRcdTA2NDFcdTA2NEFcdTA2MjkgXHUwNjI3XHUwNjQ0XHUwNjQ0XHUwNjQ4XHUwNjJEXHUwNjI5XCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjI3XHUwNjQ0XHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5XCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1MDYyRFx1MDY0OFx1MDY0NFwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyNVx1MDYzNVx1MDYyRlx1MDYyN1x1MDYzMVwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjI0XHUwNjQ0XHUwNjQxXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJcdTA2MkFcdTA2MzdcdTA2MjhcdTA2NEFcdTA2NDIgXHUwNjJFXHUwNjMxXHUwNjI3XHUwNjI2XHUwNjM3IFx1MDYzMFx1MDY0N1x1MDY0Nlx1MDY0QVx1MDYyOSBcdTA2NDVcdTA2NDFcdTA2MkFcdTA2NDhcdTA2MkQgXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjM1XHUwNjJGXHUwNjMxIFx1MDYzQVx1MDY0Nlx1MDY0QSBcdTA2MjhcdTA2MjdcdTA2NDRcdTA2NDVcdTA2NEFcdTA2MzJcdTA2MjdcdTA2MkEgXHUwNjQ0XHUwNjQwIE9ic2lkaWFuIFx1MDY0NVx1MDYzOSBcdTA2MjNcdTA2NDZcdTA2NDVcdTA2MjdcdTA2MzcgXHUwNjQ1XHUwNjJFXHUwNjM1XHUwNjM1XHUwNjI5XHUwNjBDIFx1MDY0OFx1MDYzNVx1MDY0NFx1MDYyN1x1MDYyQSBcdTA2NDJcdTA2NDhcdTA2MzMgXHUwNjQyXHUwNjMyXHUwNjJEXHUwNjBDIFx1MDYyQVx1MDYyRFx1MDYyRlx1MDY0QVx1MDYyRiBcdTA2NDVcdTA2MkFcdTA2MzlcdTA2MkZcdTA2MkZcdTA2MEMgXHUwNjMzXHUwNjJEXHUwNjI4IFx1MDY0OFx1MDYyNVx1MDY0MVx1MDY0NFx1MDYyN1x1MDYyQVx1MDYwQyBcdTA2NDhcdTA2MjdcdTA2MzNcdTA2MkFcdTA2NEFcdTA2MzFcdTA2MjdcdTA2MkYvXHUwNjJBXHUwNjM1XHUwNjJGXHUwNjRBXHUwNjMxIE1hcmtkb3duLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1MDYyQVx1MDY0NSBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MkZcdTA2NEFcdTA2MkJcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIlx1MDY0NVx1MDYzM1x1MDYyQVx1MDY0OFx1MDYyRlx1MDYzOSBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlx1MDYyN1x1MDYyRlx1MDYzOVx1MDY0NSBcdTA2NDVcdTA2MjRcdTA2NDRcdTA2NDEgXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjM1XHUwNjJGXHUwNjMxIFx1MDYyN1x1MDY0NFx1MDY0NVx1MDY0MVx1MDYyQVx1MDY0OFx1MDYyRFwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlx1MDYyN1x1MDYyRVx1MDYyQVx1MDYzNVx1MDYyN1x1MDYzMVx1MDYyN1x1MDYyQSBcdTA2NDRcdTA2NDhcdTA2MkRcdTA2MjkgXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjQxXHUwNjI3XHUwNjJBXHUwNjRBXHUwNjJEXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1MDYyQVx1MDYyRVx1MDYzNVx1MDY0QVx1MDYzNSBcdTA2MjdcdTA2NDRcdTA2MjdcdTA2MkVcdTA2MkFcdTA2MzVcdTA2MjdcdTA2MzFcdTA2MjdcdTA2MkFcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUwNjJBXHUwNjJEXHUwNjMxXHUwNjRBXHUwNjMxIFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0Mlx1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJcdTA2MjVcdTA2MzZcdTA2MjdcdTA2NDFcdTA2MjkgXHUwNjM0XHUwNjQyXHUwNjRBXHUwNjQyXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJcdTA2MjVcdTA2MzZcdTA2MjdcdTA2NDFcdTA2MjkgXHUwNjQxXHUwNjMxXHUwNjM5XCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MzFcdTA2NDNcdTA2NEFcdTA2MzIgXHUwNjM5XHUwNjQ0XHUwNjQ5IFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0Mlx1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTA2MkFcdTA2MzFcdTA2MjdcdTA2MkNcdTA2MzlcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHUwNjI1XHUwNjM5XHUwNjI3XHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiXHUwNjQxXHUwNjI3XHUwNjM1XHUwNjQ0IFx1MDYzM1x1MDYzN1x1MDYzMSAoXHUwNjIzXHUwNjJCXHUwNjQ2XHUwNjI3XHUwNjIxIFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSlcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiXHUwNjMzXHUwNjJEXHUwNjI4IFx1MDYyN1x1MDY0NFx1MDY0NFx1MDY0OFx1MDYyRFx1MDYyOVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlx1MDYyQVx1MDY0M1x1MDYyOFx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJcdTA2MkFcdTA2MzVcdTA2M0FcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJcdTA2MjVcdTA2MzlcdTA2MjdcdTA2MkZcdTA2MjkgXHUwNjJBXHUwNjM5XHUwNjRBXHUwNjRBXHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0M1x1MDYyOFx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQ2XHUwNjQyXHUwNjQ0IFx1MDY0NFx1MDYyM1x1MDYzOVx1MDY0NFx1MDY0OVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDZcdTA2NDJcdTA2NDQgXHUwNjQ0XHUwNjIzXHUwNjMzXHUwNjQxXHUwNjQ0XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0Nlx1MDY0Mlx1MDY0NCBcdTA2NDRcdTA2NDRcdTA2NEFcdTA2MzNcdTA2MjdcdTA2MzFcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0Nlx1MDY0Mlx1MDY0NCBcdTA2NDRcdTA2NDRcdTA2NEFcdTA2NDVcdTA2NEFcdTA2NDZcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1MDYyN1x1MDYzNlx1MDYzQVx1MDYzNyBcdTA2NDVcdTA2NDFcdTA2MkFcdTA2MjdcdTA2MkRcdTA2MjdcdTA2NEIuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0NVx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2NDhcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDNcdTA2MjhcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdTA2MzlcdTA2NDNcdTA2MzMgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQ1XHUwNjMxXHUwNjRBXHUwNjMxIFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0NVx1MDY0OFx1MDYyRlx1MDY0QVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1MDYzOVx1MDY0M1x1MDYzMyBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDVcdTA2MzFcdTA2NEFcdTA2MzEgXHUwNjI3XHUwNjQ0XHUwNjIzXHUwNjQxXHUwNjQyXHUwNjRBXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiXHUwNjM5XHUwNjQzXHUwNjMzIFx1MDYyN1x1MDYyQVx1MDYyQ1x1MDYyN1x1MDY0NyBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDNcdTA2MjhcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIlx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2MzlcdTA2NDZcdTA2MkYgXHUwNjI3XHUwNjQ0XHUwNjI1XHUwNjQ2XHUwNjM0XHUwNjI3XHUwNjIxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUwNjQ4XHUwNjM2XHUwNjM5IFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2MzlcdTA2NDZcdTA2MkYgXHUwNjI1XHUwNjQ2XHUwNjM0XHUwNjI3XHUwNjIxIFx1MDYzOVx1MDY0Mlx1MDYyRiBcdTA2MkNcdTA2MkZcdTA2NEFcdTA2MkZcdTA2MjlcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHUwNjI3XHUwNjMzXHUwNjQ1IFx1MDYyN1x1MDY0NFx1MDYyQ1x1MDYzMFx1MDYzMVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjI3XHUwNjMzXHUwNjQ1IFx1MDYyN1x1MDY0NFx1MDYyN1x1MDY0MVx1MDYyQVx1MDYzMVx1MDYyN1x1MDYzNlx1MDY0QSBcdTA2NDRcdTA2NDRcdTA2MkNcdTA2MzBcdTA2NDhcdTA2MzEgXHUwNjI3XHUwNjQ0XHUwNjJDXHUwNjJGXHUwNjRBXHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJcdTA2MjdcdTA2MzNcdTA2NDUgXHUwNjI3XHUwNjQ0XHUwNjQxXHUwNjMxXHUwNjM5XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjI3XHUwNjMzXHUwNjQ1IFx1MDYyN1x1MDY0NFx1MDYyN1x1MDY0MVx1MDYyQVx1MDYzMVx1MDYyN1x1MDYzNlx1MDY0QSBcdTA2NDRcdTA2NDRcdTA2NDFcdTA2MzFcdTA2NDhcdTA2MzkgXHUwNjI3XHUwNjQ0XHUwNjJDXHUwNjJGXHUwNjRBXHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHUwNjI3XHUwNjQzXHUwNjJBXHUwNjI4IFx1MDY0NFx1MDY0NFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdTA2MkRcdTA2MzFcdTA2NTFcdTA2MzEgXHUwNjI4XHUwNjI3XHUwNjQ0XHUwNjQzXHUwNjJBXHUwNjI3XHUwNjI4XHUwNjI5IFx1MDYzOVx1MDY0Nlx1MDYyRiBcdTA2MkFcdTA2MkRcdTA2MkZcdTA2NEFcdTA2MkYgXHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5XCIsXHJcbn07XHJcblxyXG5jb25zdCBBTEw6IFJlY29yZDxMYW5ndWFnZSwgdHlwZW9mIF9lbj4gPSB7XHJcbiAgICBlbjogX2VuLFxyXG4gICAgemg6IF96aCxcclxuICAgIGphOiBfamEsXHJcbiAgICBmcjogX2ZyLFxyXG4gICAgZGU6IF9kZSxcclxuICAgIGVzOiBfZXMsXHJcbiAgICBydTogX3J1LFxyXG4gICAgc3Y6IF9zdixcclxuICAgIGhpOiBfaGksXHJcbiAgICBrbzogX2tvLFxyXG4gICAgcHQ6IF9wdCxcclxuICAgIGZpOiBfZmksXHJcbiAgICBubzogX25vLFxyXG4gICAgbmw6IF9ubCxcclxuICAgIGxpOiBfbGksXHJcbiAgICBkYTogX2RhLFxyXG4gICAgaGU6IF9oZSxcclxuICAgIGl0OiBfaXQsXHJcbiAgICBhcjogX2FyLFxyXG59O1xyXG5cclxubGV0IF9sYW5nOiBMYW5ndWFnZSA9IFwiZW5cIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldExhbmcobDogTGFuZ3VhZ2UpIHtcclxuICAgIF9sYW5nID0gbDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZygpOiBMYW5ndWFnZSB7XHJcbiAgICByZXR1cm4gX2xhbmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIChBTExbX2xhbmddIGFzIGFueSk/LltrZXldID8/IChBTExbXCJlblwiXSBhcyBhbnkpPy5ba2V5XSA/PyBrZXk7XHJcbn1cclxuIiwgIi8vIHNyYy9TdHlsZVBhbmVsVmlldy50c1xyXG5pbXBvcnQgeyBJdGVtVmlldywgV29ya3NwYWNlTGVhZiwgU2V0dGluZyB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQge1xyXG4gICAgVklFV19UWVBFX01JTkRNQVBfU1RZTEUsXHJcbiAgICBWSUVXX1RZUEVfTUlORE1BUCxcclxuICAgIE1pbmRNYXBTdHlsZSxcclxuICAgIERFRkFVTFRfU1RZTEUsXHJcbiAgICBGT05UX0xJU1QsXHJcbiAgICBDT05ORUNUSU9OX1NUWUxFUyxcclxuICAgIFJBSU5CT1dfUEFMRVRURVMsXHJcbn0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgdCB9IGZyb20gXCIuL2kxOG5cIjtcclxuaW1wb3J0IHsgTWluZE1hcFZpZXcgfSBmcm9tIFwiLi9NaW5kTWFwVmlld1wiO1xyXG5pbXBvcnQgdHlwZSBNaW5kTm9kZVBsdWdpbiBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R5bGVQYW5lbFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XHJcbiAgICBwcml2YXRlIHBsdWdpbjogTWluZE5vZGVQbHVnaW47XHJcbiAgICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE1pbmROb2RlUGx1Z2luKSB7XHJcbiAgICAgICAgc3VwZXIobGVhZik7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgICB9XHJcbiAgICBnZXRWaWV3VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gVklFV19UWVBFX01JTkRNQVBfU1RZTEU7XHJcbiAgICB9XHJcbiAgICBnZXREaXNwbGF5VGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gXCJNaW5kWkogXCIgKyB0KFwidGIuc3R5bGVcIik7XHJcbiAgICB9XHJcbiAgICBnZXRJY29uKCkge1xyXG4gICAgICAgIHJldHVybiBcInBhbGV0dGVcIjtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxyXG4gICAgYXN5bmMgb25PcGVuKCkge1xyXG4gICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxyXG4gICAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvKiBubyBjbGVhbnVwIG5lZWRlZCAqL1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VmlldygpOiBNaW5kTWFwVmlldyB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9NSU5ETUFQKTtcclxuICAgICAgICByZXR1cm4gbC5sZW5ndGggPiAwICYmIGxbMF0udmlldyBpbnN0YW5jZW9mIE1pbmRNYXBWaWV3XHJcbiAgICAgICAgICAgID8gbFswXS52aWV3XHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkKCkge1xyXG4gICAgICAgIGNvbnN0IGN0ID0gdGhpcy5jb250YWluZXJFbC5jaGlsZHJlblsxXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjdC5lbXB0eSgpO1xyXG4gICAgICAgIGN0LmFkZENsYXNzKFwibXotc3AtY3RcIik7XHJcblxyXG4gICAgICAgIG5ldyBTZXR0aW5nKGN0KS5zZXROYW1lKHQoXCJzbS50aXRsZVwiKSkuc2V0SGVhZGluZygpO1xyXG5cclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5nZXRWaWV3KCk7XHJcbiAgICAgICAgY29uc3QgczogTWluZE1hcFN0eWxlID0gdmlldz8uc3R5bGVcclxuICAgICAgICAgICAgPyB7IC4uLnZpZXcuc3R5bGUgfVxyXG4gICAgICAgICAgICA6IHRoaXMucGx1Z2luLmdldFN0eWxlKCk7XHJcbiAgICAgICAgY29uc3QgdXBkID0gKHA6IFBhcnRpYWw8TWluZE1hcFN0eWxlPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5nZXRWaWV3KCk7XHJcbiAgICAgICAgICAgIGlmICh2KSB2LmFwcGx5U3R5bGUocCk7XHJcbiAgICAgICAgICAgIGVsc2Ugdm9pZCB0aGlzLnBsdWdpbi51cGRhdGVTdHlsZShwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzYWZlU3RyID0gKHZhbDogTWluZE1hcFN0eWxlW2tleW9mIE1pbmRNYXBTdHlsZV0pOiBzdHJpbmcgPT5cclxuICAgICAgICAgICAgdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgPyB2YWxcclxuICAgICAgICAgICAgICAgIDogdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICA/IFN0cmluZyh2YWwpXHJcbiAgICAgICAgICAgICAgICAgIDogdHlwZW9mIHZhbCA9PT0gXCJib29sZWFuXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFN0cmluZyh2YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xyXG5cclxuICAgICAgICBjb25zdCBta1NlYyA9IChpY29uOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VjID0gY3QuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHNlYy5hZGRDbGFzcyhcIm16LXNwLXNlY1wiKTtcclxuICAgICAgICAgICAgY29uc3QgaGRyID0gc2VjLmNyZWF0ZUVsKFwiZGl2XCIsIHsgdGV4dDogaWNvbiArIFwiICBcIiArIHRpdGxlIH0pO1xyXG4gICAgICAgICAgICBoZHIuYWRkQ2xhc3MoXCJtei1zcC1zZWMtaGRyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gc2VjLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBiLmFkZENsYXNzKFwibXotc3Atc2VjLWJvZHlcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtSb3cgPSAocDogSFRNTEVsZW1lbnQsIGw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByID0gcC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgci5hZGRDbGFzcyhcIm16LXNwLXJvd1wiKTtcclxuICAgICAgICAgICAgY29uc3QgbGJsID0gci5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBsIH0pO1xyXG4gICAgICAgICAgICBsYmwuYWRkQ2xhc3MoXCJtei1zcC1sYmxcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtDb2xvciA9IChwOiBIVE1MRWxlbWVudCwgbDogc3RyaW5nLCBrOiBrZXlvZiBNaW5kTWFwU3R5bGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG1rUm93KHAsIGwpO1xyXG4gICAgICAgICAgICBjb25zdCBpID0gci5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGkudHlwZSA9IFwiY29sb3JcIjtcclxuICAgICAgICAgICAgY29uc3QgY3YgPSBzW2tdO1xyXG4gICAgICAgICAgICBpLnZhbHVlID1cclxuICAgICAgICAgICAgICAgIHR5cGVvZiBjdiA9PT0gXCJzdHJpbmdcIiAmJiBjdi5zdGFydHNXaXRoKFwidmFyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogc2FmZVN0cihjdik7XHJcbiAgICAgICAgICAgIGkuYWRkQ2xhc3MoXCJtei1zcC1jb2xvclwiKTtcclxuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT5cclxuICAgICAgICAgICAgICAgIHVwZCh7IFtrXTogaS52YWx1ZSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta1JhbmdlID0gKFxyXG4gICAgICAgICAgICBwOiBIVE1MRWxlbWVudCxcclxuICAgICAgICAgICAgbDogc3RyaW5nLFxyXG4gICAgICAgICAgICBrOiBrZXlvZiBNaW5kTWFwU3R5bGUsXHJcbiAgICAgICAgICAgIG1pbjogbnVtYmVyLFxyXG4gICAgICAgICAgICBtYXg6IG51bWJlcixcclxuICAgICAgICAgICAgc3RlcD86IG51bWJlcixcclxuICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG1rUm93KHAsIGwpO1xyXG4gICAgICAgICAgICBjb25zdCB3ID0gci5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgdy5hZGRDbGFzcyhcIm16LXNwLXJhbmdlLXdyYXBcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGkgPSB3LmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaS50eXBlID0gXCJyYW5nZVwiO1xyXG4gICAgICAgICAgICBpLm1pbiA9IFN0cmluZyhtaW4pO1xyXG4gICAgICAgICAgICBpLm1heCA9IFN0cmluZyhtYXgpO1xyXG4gICAgICAgICAgICBpZiAoc3RlcCkgaS5zdGVwID0gU3RyaW5nKHN0ZXApO1xyXG4gICAgICAgICAgICBpLnZhbHVlID0gc2FmZVN0cihzW2tdKTtcclxuICAgICAgICAgICAgaS5hZGRDbGFzcyhcIm16LXNwLXJhbmdlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBuID0gdy5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBzYWZlU3RyKHNba10pIH0pO1xyXG4gICAgICAgICAgICBuLmFkZENsYXNzKFwibXotc3AtcmFuZ2UtdmFsXCIpO1xyXG4gICAgICAgICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuLnRleHRDb250ZW50ID0gaS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHVwZCh7IFtrXTogTnVtYmVyKGkudmFsdWUpIH0gYXMgUGFydGlhbDxNaW5kTWFwU3R5bGU+KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta051bSA9IChcclxuICAgICAgICAgICAgcDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICAgIGw6IHN0cmluZyxcclxuICAgICAgICAgICAgazoga2V5b2YgTWluZE1hcFN0eWxlLFxyXG4gICAgICAgICAgICBtaW46IG51bWJlcixcclxuICAgICAgICAgICAgbWF4OiBudW1iZXIsXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBta1JvdyhwLCBsKTtcclxuICAgICAgICAgICAgY29uc3QgaSA9IHIuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgICAgICBpLm1pbiA9IFN0cmluZyhtaW4pO1xyXG4gICAgICAgICAgICBpLm1heCA9IFN0cmluZyhtYXgpO1xyXG4gICAgICAgICAgICBpLnZhbHVlID0gc2FmZVN0cihzW2tdKTtcclxuICAgICAgICAgICAgaS5hZGRDbGFzcyhcIm16LXNwLW51bVwiKTtcclxuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICB1cGQoeyBba106IE51bWJlcihpLnZhbHVlKSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta1NlbCA9IChcclxuICAgICAgICAgICAgcDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICAgIGw6IHN0cmluZyxcclxuICAgICAgICAgICAgazoga2V5b2YgTWluZE1hcFN0eWxlLFxyXG4gICAgICAgICAgICBvcHRzOiBzdHJpbmdbXSxcclxuICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG1rUm93KHAsIGwpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSByLmNyZWF0ZUVsKFwic2VsZWN0XCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgICAgICBzZWwuYWRkQ2xhc3MoXCJtei1zcC1zZWxcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbyBvZiBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBvcC52YWx1ZSA9IG87XHJcbiAgICAgICAgICAgICAgICBvcC50ZXh0ID0gbztcclxuICAgICAgICAgICAgICAgIGlmIChvID09PSBzYWZlU3RyKHNba10pKSBvcC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZWwuYXBwZW5kQ2hpbGQob3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICB1cGQoeyBba106IHNlbC52YWx1ZSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQ2hpbGQgbm9kZVxyXG4gICAgICAgIGNvbnN0IHMxID0gbWtTZWMoXCJcdUQ4M0RcdURDRTZcIiwgdChcInNtLmNoaWxkXCIpKTtcclxuICAgICAgICBta0NvbG9yKHMxLCB0KFwic20uYmdcIiksIFwibm9kZUJnQ29sb3JcIik7XHJcbiAgICAgICAgbWtDb2xvcihzMSwgdChcInNtLnRleHRcIiksIFwibm9kZVRleHRDb2xvclwiKTtcclxuICAgICAgICBta1JhbmdlKHMxLCB0KFwic20uZm9udFNpemVcIiksIFwibm9kZUZvbnRTaXplXCIsIDEwLCAzMik7XHJcbiAgICAgICAgbWtTZWwoczEsIHQoXCJzbS5mb250XCIpLCBcIm5vZGVGb250RmFtaWx5XCIsIEZPTlRfTElTVCk7XHJcbiAgICAgICAgbWtTZWwoczEsIHQoXCJzbS5ib3JkZXJTdHlsZVwiKSwgXCJub2RlQm9yZGVyU3R5bGVcIiwgW1xyXG4gICAgICAgICAgICBcInNvbGlkXCIsXHJcbiAgICAgICAgICAgIFwiZGFzaGVkXCIsXHJcbiAgICAgICAgICAgIFwiZG90dGVkXCIsXHJcbiAgICAgICAgICAgIFwiZG91YmxlXCIsXHJcbiAgICAgICAgICAgIFwibm9uZVwiLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIG1rQ29sb3IoczEsIHQoXCJzbS5ib3JkZXJDb2xvclwiKSwgXCJub2RlQm9yZGVyQ29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzMSwgdChcInNtLmJvcmRlcldpZHRoXCIpLCBcIm5vZGVCb3JkZXJXaWR0aFwiLCAwLCA4KTtcclxuICAgICAgICBta1JhbmdlKHMxLCB0KFwic20uYm9yZGVyUmFkaXVzXCIpLCBcIm5vZGVCb3JkZXJSYWRpdXNcIiwgMCwgMzIpO1xyXG4gICAgICAgIG1rTnVtKHMxLCB0KFwic20ubWluV2lkdGhcIiksIFwibm9kZU1pbldpZHRoXCIsIDMwLCA0MDApO1xyXG4gICAgICAgIG1rTnVtKHMxLCB0KFwic20ubWluSGVpZ2h0XCIpLCBcIm5vZGVNaW5IZWlnaHRcIiwgMjAsIDIwMCk7XHJcblxyXG4gICAgICAgIC8vIFJvb3Qgbm9kZVxyXG4gICAgICAgIGNvbnN0IHMyID0gbWtTZWMoXCJcdUQ4M0NcdURGRTBcIiwgdChcInNtLnJvb3RcIikpO1xyXG4gICAgICAgIG1rQ29sb3IoczIsIHQoXCJzbS5iZ1wiKSwgXCJyb290QmdDb2xvclwiKTtcclxuICAgICAgICBta0NvbG9yKHMyLCB0KFwic20udGV4dFwiKSwgXCJyb290VGV4dENvbG9yXCIpO1xyXG4gICAgICAgIG1rUmFuZ2UoczIsIHQoXCJzbS5mb250U2l6ZVwiKSwgXCJyb290Rm9udFNpemVcIiwgMTAsIDMyKTtcclxuICAgICAgICBta1NlbChzMiwgdChcInNtLmZvbnRcIiksIFwicm9vdEZvbnRGYW1pbHlcIiwgRk9OVF9MSVNUKTtcclxuICAgICAgICBta1NlbChzMiwgdChcInNtLmJvcmRlclN0eWxlXCIpLCBcInJvb3RCb3JkZXJTdHlsZVwiLCBbXHJcbiAgICAgICAgICAgIFwic29saWRcIixcclxuICAgICAgICAgICAgXCJkYXNoZWRcIixcclxuICAgICAgICAgICAgXCJkb3R0ZWRcIixcclxuICAgICAgICAgICAgXCJkb3VibGVcIixcclxuICAgICAgICAgICAgXCJub25lXCIsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgbWtDb2xvcihzMiwgdChcInNtLmJvcmRlckNvbG9yXCIpLCBcInJvb3RCb3JkZXJDb2xvclwiKTtcclxuICAgICAgICBta1JhbmdlKHMyLCB0KFwic20uYm9yZGVyV2lkdGhcIiksIFwicm9vdEJvcmRlcldpZHRoXCIsIDAsIDgpO1xyXG4gICAgICAgIG1rUmFuZ2UoczIsIHQoXCJzbS5ib3JkZXJSYWRpdXNcIiksIFwicm9vdEJvcmRlclJhZGl1c1wiLCAwLCAzMik7XHJcbiAgICAgICAgbWtOdW0oczIsIHQoXCJzbS5taW5XaWR0aFwiKSwgXCJyb290TWluV2lkdGhcIiwgNTAsIDQwMCk7XHJcbiAgICAgICAgbWtOdW0oczIsIHQoXCJzbS5taW5IZWlnaHRcIiksIFwicm9vdE1pbkhlaWdodFwiLCAyMCwgMjAwKTtcclxuXHJcbiAgICAgICAgLy8gQ29ubmVjdGlvblxyXG4gICAgICAgIGNvbnN0IHMzID0gbWtTZWMoXCJcdUQ4M0RcdUREMTdcIiwgdChcInNtLmNvbm5cIikpO1xyXG4gICAgICAgIG1rU2VsKHMzLCB0KFwic20udHlwZVwiKSwgXCJjb25uZWN0aW9uU3R5bGVcIiwgQ09OTkVDVElPTl9TVFlMRVMpO1xyXG4gICAgICAgIG1rQ29sb3IoczMsIHQoXCJzbS5jb2xvclwiKSwgXCJjb25uZWN0aW9uQ29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzMywgdChcInNtLndpZHRoXCIpLCBcImNvbm5lY3Rpb25XaWR0aFwiLCAxLCA4KTtcclxuICAgICAgICBta051bShzMywgdChcInNtLmNvbm5MZW5ndGhcIiksIFwiY29ubmVjdGlvbkxlbmd0aFwiLCAzMCwgMzAwKTtcclxuICAgICAgICBta1NlbChzMywgdChcInNtLm5vZGVEaXJcIiksIFwibm9kZURpcmVjdGlvblwiLCBbXCJyaWdodFwiLCBcImxlZnRcIiwgXCJib3RoXCJdKTtcclxuICAgICAgICBta1JhbmdlKHMzLCB0KFwic20ubm9kZUdhcFlcIiksIFwibm9kZUdhcFlcIiwgOCwgODApO1xyXG5cclxuICAgICAgICAvLyBSYWluYm93XHJcbiAgICAgICAgY29uc3QgY3RSb3cgPSBzMy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBjdFJvdy5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3RcIik7XHJcbiAgICAgICAgY29uc3QgcmxibCA9IGN0Um93LmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IHQoXCJzbS5yYWluYm93XCIpIH0pO1xyXG4gICAgICAgIHJsYmwuYWRkQ2xhc3MoXCJtei1yYWluYm93LWxibFwiKTtcclxuICAgICAgICBjb25zdCBhbGxQOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7XHJcbiAgICAgICAgICAgIC4uLlJBSU5CT1dfUEFMRVRURVMsXHJcbiAgICAgICAgICAgIC4uLihzLmN1c3RvbVJhaW5ib3dzIHx8IHt9KSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGN1clAgPSBzLmNvbm5lY3Rpb25SYWluYm93ID8gcy5yYWluYm93UGFsZXR0ZSA6IFwib2ZmXCI7XHJcbiAgICAgICAgY29uc3QgbHcgPSBjdFJvdy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBsdy5hZGRDbGFzcyhcIm16LXJhaW5ib3ctbGlzdFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWtJID0gKGtleTogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBjb2xvcnM6IHN0cmluZ1tdIHwgbnVsbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdCA9IGx3LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBpdC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctaXRlbVwiKTtcclxuICAgICAgICAgICAgaXQudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIiwga2V5ID09PSBjdXJQKTtcclxuICAgICAgICAgICAgY29uc3QgbGJsRWwgPSBpdC5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBsYWJlbCB9KTtcclxuICAgICAgICAgICAgbGJsRWwuYWRkQ2xhc3MoXCJtei1yYWluYm93LWl0ZW0tbGJsXCIpO1xyXG4gICAgICAgICAgICBpZiAoY29sb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkcyA9IGl0LmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgIGRzLmFkZENsYXNzKFwibXotcmFpbmJvdy1kb3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGNvbG9ycy5zbGljZSgwLCAxMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkID0gZHMuY3JlYXRlRWwoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWRvdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1kb3QtY29sb3JcIjogYyB9KS5mb3JFYWNoKChbaywgdl0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuc3R5bGUuc2V0UHJvcGVydHkoaywgdiksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJvZmZcIikgdXBkKHsgY29ubmVjdGlvblJhaW5ib3c6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB1cGQoeyBjb25uZWN0aW9uUmFpbmJvdzogdHJ1ZSwgcmFpbmJvd1BhbGV0dGU6IGtleSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBta0koXCJvZmZcIiwgXCJTb2xpZFwiLCBudWxsKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb2xvcnNdIG9mIE9iamVjdC5lbnRyaWVzKGFsbFApKVxyXG4gICAgICAgICAgICBta0kobmFtZSwgbmFtZSwgY29sb3JzKTtcclxuXHJcbiAgICAgICAgLy8gVGV4dFxyXG4gICAgICAgIGNvbnN0IHMzYiA9IG1rU2VjKFwiXHVEODNEXHVEQ0REXCIsIHQoXCJzbS50ZXh0QWxpZ25cIikpO1xyXG4gICAgICAgIG1rU2VsKHMzYiwgdChcInNtLnRleHRBbGlnblwiKSwgXCJ0ZXh0QWxpZ25cIiwgW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdKTtcclxuXHJcbiAgICAgICAgLy8gU2VsZWN0aW9uXHJcbiAgICAgICAgY29uc3QgczQgPSBta1NlYyhcIlx1MjcwNVwiLCB0KFwic20uc2VsXCIpKTtcclxuICAgICAgICBta0NvbG9yKHM0LCB0KFwic20uc2VsQ29sb3JcIiksIFwic2VsZWN0aW9uQ29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzNCwgdChcInNtLnNlbFdpZHRoXCIpLCBcInNlbGVjdGlvbldpZHRoXCIsIDEsIDgpO1xyXG4gICAgICAgIG1rTnVtKHM0LCB0KFwic20uc2VsT2Zmc2V0XCIpLCBcInNlbGVjdGlvbk91dGxpbmVPZmZzZXRcIiwgLTUsIDIwKTtcclxuICAgICAgICBta0NvbG9yKHM0LCB0KFwic20uZWRpdE91dGxpbmVcIiksIFwiZWRpdE91dGxpbmVDb2xvclwiKTtcclxuICAgICAgICBta1JhbmdlKHM0LCB0KFwic20uZWRpdE91dGxpbmVXaWR0aFwiKSwgXCJlZGl0T3V0bGluZVdpZHRoXCIsIDAsIDgpO1xyXG5cclxuICAgICAgICAvLyBDYW52YXNcclxuICAgICAgICBjb25zdCBzNSA9IG1rU2VjKFwiXHVEODNEXHVEREJDXHVGRTBGXCIsIHQoXCJzbS5jYW52YXNCZ1wiKSk7XHJcbiAgICAgICAgbWtDb2xvcihzNSwgdChcInNtLmNhbnZhc0JnXCIpLCBcImNhbnZhc0JnXCIpO1xyXG5cclxuICAgICAgICAvLyBUb29sYmFyXHJcbiAgICAgICAgY29uc3QgczYgPSBta1NlYyhcIlx1RDgzRFx1REQyN1wiLCB0KFwic20uc2hvd1Rvb2xiYXJcIikpO1xyXG4gICAgICAgIGNvbnN0IHRiUm93ID0gbWtSb3coczYsIHQoXCJzbS5zaG93VG9vbGJhclwiKSk7XHJcbiAgICAgICAgY29uc3QgdGJDYiA9IHRiUm93LmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB0YkNiLnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgdGJDYi5jaGVja2VkID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1Rvb2xiYXI7XHJcbiAgICAgICAgdGJDYi5hZGRDbGFzcyhcIm16LXNwLXRiLWNoa1wiKTtcclxuICAgICAgICB0YkNiLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhciA9IHRiQ2IuY2hlY2tlZDtcclxuICAgICAgICAgICAgdm9pZCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaEFsbFZpZXdzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWtTZWwoczYsIHQoXCJzbS50YlBvc1wiKSwgXCJ0b29sYmFyUG9zaXRpb25cIiwgW1widG9wXCIsIFwiYm90dG9tXCJdKTtcclxuICAgICAgICBta051bShzNiwgdChcInNtLnRiUGFkVFwiKSwgXCJ0b29sYmFyUGFkVG9wXCIsIDAsIDQwKTtcclxuICAgICAgICBta051bShzNiwgdChcInNtLnRiUGFkUlwiKSwgXCJ0b29sYmFyUGFkUmlnaHRcIiwgMCwgNDApO1xyXG4gICAgICAgIG1rTnVtKHM2LCB0KFwic20udGJQYWRCXCIpLCBcInRvb2xiYXJQYWRCb3R0b21cIiwgMCwgNDApO1xyXG4gICAgICAgIG1rTnVtKHM2LCB0KFwic20udGJQYWRMXCIpLCBcInRvb2xiYXJQYWRMZWZ0XCIsIDAsIDQwKTtcclxuICAgICAgICBta0NvbG9yKHM2LCB0KFwic20udGJCZ1wiKSwgXCJ0b29sYmFyQmdDb2xvclwiKTtcclxuICAgICAgICBta0NvbG9yKHM2LCB0KFwic20udGJCdG5CZ1wiKSwgXCJ0b29sYmFyQnRuQmdDb2xvclwiKTtcclxuICAgICAgICBta1NlbChzNiwgdChcInNtLnRiQnRuQm9yZGVyXCIpLCBcInRvb2xiYXJCdG5Cb3JkZXJTdHlsZVwiLCBbXHJcbiAgICAgICAgICAgIFwic29saWRcIixcclxuICAgICAgICAgICAgXCJkYXNoZWRcIixcclxuICAgICAgICAgICAgXCJkb3R0ZWRcIixcclxuICAgICAgICAgICAgXCJub25lXCIsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgbWtDb2xvcihzNiwgdChcInNtLnRiQnRuQm9yZGVyQ29sb3JcIiksIFwidG9vbGJhckJ0bkJvcmRlckNvbG9yXCIpO1xyXG4gICAgICAgIG1rQ29sb3IoczYsIHQoXCJzbS50YkJ0blRleHRcIiksIFwidG9vbGJhckJ0blRleHRDb2xvclwiKTtcclxuXHJcbiAgICAgICAgLy8gQnV0dG9uc1xyXG4gICAgICAgIGNvbnN0IGJyID0gY3QuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgYnIuYWRkQ2xhc3MoXCJtei1zcC1idG5zXCIpO1xyXG4gICAgICAgIGJyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogdChcInNtLnJlc2V0XCIpIH0pLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMuZ2V0VmlldygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHYpIHYuYXBwbHlTdHlsZSh7IC4uLkRFRkFVTFRfU1RZTEUgfSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHZvaWQgdGhpcy5wbHVnaW4udXBkYXRlU3R5bGUoeyAuLi5ERUZBVUxUX1NUWUxFIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcmYgPSBici5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiXHUyMUJCXCIgfSk7XHJcbiAgICAgICAgcmYuYWRkQ2xhc3MoXCJtei1zcC1yZWZyZXNoXCIpO1xyXG4gICAgICAgIHJmLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmJ1aWxkKCkpO1xyXG4gICAgfVxyXG59XHJcbiIsICIvLyBzcmMvU2V0dGluZ3NUYWIudHNcclxuaW1wb3J0IHsgUGx1Z2luU2V0dGluZ1RhYiwgQXBwLCBTZXR0aW5nLCBCdXR0b25Db21wb25lbnQgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHR5cGUgTWluZE5vZGVQbHVnaW4gZnJvbSBcIi4vbWFpblwiO1xyXG5pbXBvcnQgeyBMQU5HVUFHRVMsIExhbmd1YWdlLCB0LCBzZXRMYW5nIH0gZnJvbSBcIi4vaTE4blwiO1xyXG5pbXBvcnQgeyBERUZBVUxUX0tFWUJJTkRJTkdTLCBLZXlCaW5kaW5ncyB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG50eXBlIFN0cmluZ0tleU9mPFQ+ID0ge1xyXG4gICAgW0sgaW4ga2V5b2YgVF06IFRbS10gZXh0ZW5kcyBzdHJpbmcgPyBLIDogbmV2ZXI7XHJcbn1ba2V5b2YgVF07XHJcbnR5cGUgU3RyaW5nS2V5cyA9IFN0cmluZ0tleU9mPEtleUJpbmRpbmdzPjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNaW5kTWFwU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG4gICAgcGx1Z2luOiBNaW5kTm9kZVBsdWdpbjtcclxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IE1pbmROb2RlUGx1Z2luKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xyXG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGNvbnRhaW5lckVsLnNjcm9sbFRvcDtcclxuICAgICAgICBjb250YWluZXJFbC5lbXB0eSgpO1xyXG5cclxuICAgICAgICAvLyBBYm91dFxyXG4gICAgICAgIGNvbnN0IGFib3V0ID0gY29udGFpbmVyRWwuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgYWJvdXQuYWRkQ2xhc3MoXCJtei1hYm91dFwiKTtcclxuICAgICAgICBjb25zdCBpY29uRWwgPSBhYm91dC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBpY29uRWwuYWRkQ2xhc3MoXCJtei1hYm91dC1pY29uXCIpO1xyXG4gICAgICAgIGljb25FbC5pbm5lclRleHQgPSBcIlx1RDgzRFx1RERGQVx1RkUwRlwiO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlRWwgPSBhYm91dC5jcmVhdGVFbChcImgyXCIsIHsgdGV4dDogXCJNaW5kWkpcIiB9KTtcclxuICAgICAgICB0aXRsZUVsLmFkZENsYXNzKFwibXotYWJvdXQtdGl0bGVcIik7XHJcbiAgICAgICAgY29uc3QgdmVyRWwgPSBhYm91dC5jcmVhdGVFbChcImRpdlwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IGAke3QoXCJzZXQudmVyc2lvblwiKX06ICR7dGhpcy5wbHVnaW4ubWFuaWZlc3QudmVyc2lvbn1gLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZlckVsLmFkZENsYXNzKFwibXotYWJvdXQtbWV0YVwiKTtcclxuICAgICAgICBjb25zdCBhdXRoRWwgPSBhYm91dC5jcmVhdGVFbChcImRpdlwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IGAke3QoXCJzZXQuYXV0aG9yXCIpfTogJHt0aGlzLnBsdWdpbi5tYW5pZmVzdC5hdXRob3J9YCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhdXRoRWwuYWRkQ2xhc3MoXCJtei1hYm91dC1tZXRhLWxhc3RcIik7XHJcbiAgICAgICAgY29uc3QgZGVzY0VsID0gYWJvdXQuY3JlYXRlRWwoXCJwXCIsIHsgdGV4dDogdChcInNldC5kZXNjXCIpIH0pO1xyXG4gICAgICAgIGRlc2NFbC5hZGRDbGFzcyhcIm16LWFib3V0LWRlc2NcIik7XHJcbiAgICAgICAgY29uc3QgZ2hMaW5rID0gYWJvdXQuY3JlYXRlRWwoXCJkaXZcIikuY3JlYXRlRWwoXCJhXCIsIHtcclxuICAgICAgICAgICAgdGV4dDogYFx1RDgzRFx1RENFNiAke3QoXCJzZXQuZ2l0aHViXCIpfWAsXHJcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3pqb2svbWluZHpqXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2hMaW5rLmFkZENsYXNzKFwibXotYWJvdXQtbGlua1wiKTtcclxuICAgICAgICBnaExpbmsuc2V0QXR0cihcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuXHJcbiAgICAgICAgLy8gRG9uYXRpb25cclxuICAgICAgICBjb25zdCBkb25TZWMgPSBjb250YWluZXJFbC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBkb25TZWMuYWRkQ2xhc3MoXCJtei1kb25hdGUtc2VjXCIpO1xyXG4gICAgICAgIGNvbnN0IGRvblRpdGxlID0gZG9uU2VjLmNyZWF0ZUVsKFwiaDNcIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiBgXHUyNjE1ICR7dChcInNldC5kb25hdGVcIil9YCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb25UaXRsZS5hZGRDbGFzcyhcIm16LWRvbmF0ZS1oZWFkaW5nXCIpO1xyXG4gICAgICAgIGNvbnN0IGRvbkJ0bnMgPSBkb25TZWMuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgZG9uQnRucy5hZGRDbGFzcyhcIm16LWRvbmF0ZS1idG5zXCIpO1xyXG4gICAgICAgIGNvbnN0IG1rRG9uID0gKGxhYmVsOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBkb25CdG5zLmNyZWF0ZUVsKFwiYVwiLCB7IGhyZWY6IHVybCB9KTtcclxuICAgICAgICAgICAgYS5zZXRBdHRyKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAgICAgICBhLmFkZENsYXNzKFwibXotZG9uYXRlLWJ0blwiKTtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoeyBcIi0tbXotYnRuLWNvbG9yXCI6IGNvbG9yIH0pLmZvckVhY2goKFtrLCB2XSkgPT5cclxuICAgICAgICAgICAgICAgIGEuc3R5bGUuc2V0UHJvcGVydHkoaywgdiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGEuaW5uZXJUZXh0ID0gbGFiZWw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBta0RvbihcclxuICAgICAgICAgICAgXCJcdTI2MTUgQnV5IE1lIGEgQ29mZmVlXCIsXHJcbiAgICAgICAgICAgIFwiI0ZGREQwMFwiLFxyXG4gICAgICAgICAgICBcImh0dHBzOi8vd3d3LmJ1eW1lYWNvZmZlZS5jb20vc3VwZXJqb2huXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta0RvbihcIlx1Mjc2NFx1RkUwRiBLby1maVwiLCBcIiNGRjVFNUJcIiwgXCJodHRwczovL2tvLWZpLmNvbS9zdXBlcmpvaG5cIik7XHJcbiAgICAgICAgbWtEb24oXCJcdUQ4M0RcdURDQjAgUGF5UGFsXCIsIFwiIzAwNzBiYVwiLCBcImh0dHBzOi8vcGF5cGFsLm1lL1RhbkNhdDk5N1wiKTtcclxuXHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUodChcInNldC50aXRsZVwiKSkuc2V0SGVhZGluZygpO1xyXG5cclxuICAgICAgICAvLyBCYXNpYyBzZXR0aW5nc1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSh0KFwic2V0LmxhbmdcIikpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKHQoXCJzZXQubGFuZ0Rlc2NcIikpXHJcbiAgICAgICAgICAgIC5hZGREcm9wZG93bigoZGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbCBvZiBMQU5HVUFHRVMpIGRkLmFkZE9wdGlvbihsLnZhbHVlLCBsLmxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGRkLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmxhbmd1YWdlKTtcclxuICAgICAgICAgICAgICAgIGRkLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubGFuZ3VhZ2UgPSB2IGFzIExhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhbmcodiBhcyBMYW5ndWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaEFsbFZpZXdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKHQoXCJzZXQudGhlbWVcIikpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKHQoXCJzZXQudGhlbWVEZXNjXCIpKVxyXG4gICAgICAgICAgICAuYWRkRHJvcGRvd24oKGRkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZC5hZGRPcHRpb24oXCJsaWdodFwiLCB0KFwic2V0LmxpZ2h0XCIpKTtcclxuICAgICAgICAgICAgICAgIGRkLmFkZE9wdGlvbihcImRhcmtcIiwgdChcInNldC5kYXJrXCIpKTtcclxuICAgICAgICAgICAgICAgIGRkLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnRoZW1lKTtcclxuICAgICAgICAgICAgICAgIGRkLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc3dpdGNoVGhlbWUodiBhcyBcImxpZ2h0XCIgfCBcImRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKHQoXCJzZXQuY2FudmFzQmdcIikpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKHQoXCJzZXQuY2FudmFzQmdEZXNjXCIpKVxyXG4gICAgICAgICAgICAuYWRkQ29sb3JQaWNrZXIoKGNwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zdHlsZS5jYW52YXNCZztcclxuICAgICAgICAgICAgICAgIGNwLnNldFZhbHVlKGN1ci5zdGFydHNXaXRoKFwiI1wiKSA/IGN1ciA6IFwiI2ZmZmZmZlwiKTtcclxuICAgICAgICAgICAgICAgIGNwLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3R5bGUuY2FudmFzQmcgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLmFwcGx5U3R5bGVUb0FsbFZpZXdzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSh0KFwic2V0LnRvb2xiYXJcIikpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKHQoXCJzZXQudG9vbGJhckRlc2NcIikpXHJcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoKHRnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0Zy5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhcik7XHJcbiAgICAgICAgICAgICAgICB0Zy5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dUb29sYmFyID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoQWxsVmlld3MoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUodChcInNldC5lZGl0T25DcmVhdGVcIikpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKHQoXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiKSlcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodGcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRnLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmVkaXRPbkNyZWF0ZSk7XHJcbiAgICAgICAgICAgICAgICB0Zy5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmVkaXRPbkNyZWF0ZSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEN1c3RvbSBub2RlIG5hbWVzXHJcbiAgICAgICAgY29uc3QgbGFuZyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmxhbmd1YWdlO1xyXG4gICAgICAgIGNvbnN0IGRlZlJvb3QgPSB0KFwiZGVmLnJvb3RcIik7XHJcbiAgICAgICAgY29uc3QgZGVmQ2hpbGQgPSB0KFwiZGVmLmNoaWxkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBta05hbWVTZXR0aW5nID0gKFxyXG4gICAgICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRlc2M6IHN0cmluZyxcclxuICAgICAgICAgICAgZmllbGQ6IFwicm9vdFwiIHwgXCJjaGlsZFwiLFxyXG4gICAgICAgICAgICBkZWZWYWw6IHN0cmluZyxcclxuICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZyA9IG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAgICAgLnNldE5hbWUobmFtZSlcclxuICAgICAgICAgICAgICAgIC5zZXREZXNjKGRlc2MpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNldEVsID0gc2V0dGluZy5jb250cm9sRWwuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIlx1MjFCQVwiIH0pO1xyXG4gICAgICAgICAgICByZXNldEVsLmFkZENsYXNzKFwibXotcmVzZXQtYnRuXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJWYWwgPSAodGhpcy5wbHVnaW4uc2V0dGluZ3MuY3VzdG9tTm9kZU5hbWVzW2xhbmddIHx8IHt9KVtcclxuICAgICAgICAgICAgICAgIGZpZWxkXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHJlc2V0RWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgIShjdXJWYWwgJiYgY3VyVmFsICE9PSBkZWZWYWwpKTtcclxuICAgICAgICAgICAgcmVzZXRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHsgLi4udGhpcy5wbHVnaW4uc2V0dGluZ3MuY3VzdG9tTm9kZU5hbWVzIH07XHJcbiAgICAgICAgICAgICAgICBpZiAoY1tsYW5nXSkgZGVsZXRlIGNbbGFuZ11bZmllbGRdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY3VzdG9tTm9kZU5hbWVzID0gYztcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgaW5wLnZhbHVlID0gZGVmVmFsO1xyXG4gICAgICAgICAgICAgICAgcmVzZXRFbC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucCA9IHNldHRpbmcuY29udHJvbEVsLmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaW5wLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgaW5wLnZhbHVlID0gY3VyVmFsIHx8IGRlZlZhbDtcclxuICAgICAgICAgICAgaW5wLmFkZENsYXNzKFwibXotbmFtZS1pbnB1dFwiKTtcclxuICAgICAgICAgICAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBpbnAudmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHsgLi4udGhpcy5wbHVnaW4uc2V0dGluZ3MuY3VzdG9tTm9kZU5hbWVzIH07XHJcbiAgICAgICAgICAgICAgICBjW2xhbmddID0geyAuLi4oY1tsYW5nXSB8fCB7fSksIFtmaWVsZF06IHYgfHwgdW5kZWZpbmVkIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXMgPSBjO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICByZXNldEVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsICEodiAmJiB2ICE9PSBkZWZWYWwpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBta05hbWVTZXR0aW5nKFxyXG4gICAgICAgICAgICB0KFwic2V0LnJvb3ROYW1lXCIpLFxyXG4gICAgICAgICAgICB0KFwic2V0LnJvb3ROYW1lRGVzY1wiKSxcclxuICAgICAgICAgICAgXCJyb290XCIsXHJcbiAgICAgICAgICAgIGRlZlJvb3QsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta05hbWVTZXR0aW5nKFxyXG4gICAgICAgICAgICB0KFwic2V0LmNoaWxkTmFtZVwiKSxcclxuICAgICAgICAgICAgdChcInNldC5jaGlsZE5hbWVEZXNjXCIpLFxyXG4gICAgICAgICAgICBcImNoaWxkXCIsXHJcbiAgICAgICAgICAgIGRlZkNoaWxkLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSh0KFwic2V0LnR5cGVUb0VkaXRcIikpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKHQoXCJzZXQudHlwZVRvRWRpdERlc2NcIikpXHJcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoKHRnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0Zy5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50eXBlVG9FZGl0KTtcclxuICAgICAgICAgICAgICAgIHRnLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudHlwZVRvRWRpdCA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEtleWJvYXJkIHNob3J0Y3V0c1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKS5zZXROYW1lKHQoXCJzZXQua2V5c1wiKSkuc2V0SGVhZGluZygpO1xyXG4gICAgICAgIGNvbnN0IGtiID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Mua2V5QmluZGluZ3M7XHJcbiAgICAgICAgY29uc3Qga2V5TWFwOiB7IGtleTogU3RyaW5nS2V5czsgbGFiZWw6IHN0cmluZyB9W10gPSBbXHJcbiAgICAgICAgICAgIHsga2V5OiBcImVkaXROb2RlXCIsIGxhYmVsOiB0KFwic2V0LmtleS5lZGl0XCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcImFkZFNpYmxpbmdcIiwgbGFiZWw6IHQoXCJzZXQua2V5LnNpYmxpbmdcIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwiYWRkQ2hpbGRcIiwgbGFiZWw6IHQoXCJzZXQua2V5LmNoaWxkXCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcImZvY3VzTm9kZVwiLCBsYWJlbDogdChcInNldC5rZXkuZm9jdXNcIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwidW5kb1wiLCBsYWJlbDogdChcInNldC5rZXkudW5kb1wiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJyZWRvXCIsIGxhYmVsOiB0KFwic2V0LmtleS5yZWRvXCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcImRyYWdDYW52YXNcIiwgbGFiZWw6IHQoXCJzZXQua2V5LmRyYWdDYW52YXNcIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwibmF2VXBcIiwgbGFiZWw6IHQoXCJzZXQua2V5LnVwXCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcIm5hdkRvd25cIiwgbGFiZWw6IHQoXCJzZXQua2V5LmRvd25cIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwibmF2TGVmdFwiLCBsYWJlbDogdChcInNldC5rZXkubGVmdFwiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJuYXZSaWdodFwiLCBsYWJlbDogdChcInNldC5rZXkucmlnaHRcIikgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBrZXlNYXApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZyA9IG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKS5zZXROYW1lKGl0ZW0ubGFiZWwpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJWYWwgPSBrYltpdGVtLmtleV07XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZlZhbCA9IERFRkFVTFRfS0VZQklORElOR1NbaXRlbS5rZXldIGFzIHN0cmluZztcclxuICAgICAgICAgICAgY29uc3QgcmVzZXRFbCA9IHNldHRpbmcuY29udHJvbEVsLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJcdTIxQkFcIiB9KTtcclxuICAgICAgICAgICAgcmVzZXRFbC5hZGRDbGFzcyhcIm16LXJlc2V0LWJ0blwiKTtcclxuICAgICAgICAgICAgcmVzZXRFbC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCBjdXJWYWwgPT09IGRlZlZhbCk7XHJcbiAgICAgICAgICAgIHJlc2V0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGtiW2l0ZW0ua2V5XSA9IGRlZlZhbDtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaEFsbFZpZXdzKCk7XHJcbiAgICAgICAgICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChkZWZWYWwpO1xyXG4gICAgICAgICAgICAgICAgcmVzZXRFbC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCBidG46IEJ1dHRvbkNvbXBvbmVudDtcclxuICAgICAgICAgICAgc2V0dGluZy5hZGRCdXR0b24oKGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGJ0biA9IGI7XHJcbiAgICAgICAgICAgICAgICBiLnNldEJ1dHRvblRleHQoU3RyaW5nKGN1clZhbCkgfHwgXCIuLi5cIik7XHJcbiAgICAgICAgICAgICAgICBiLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGIuc2V0QnV0dG9uVGV4dCh0KFwic2V0LmtleS5wcmVzc1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDb21ibyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc01haW5LZXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZW91dDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnVpbGRDb21ibyA9IChlOiBLZXlib2FyZEV2ZW50KTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSBwYXJ0cy5wdXNoKFwiY3RybFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHBhcnRzLnB1c2goXCJzaGlmdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuYWx0S2V5KSBwYXJ0cy5wdXNoKFwiYWx0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhW1wiQ29udHJvbFwiLCBcIlNoaWZ0XCIsIFwiQWx0XCIsIFwiTWV0YVwiXS5pbmNsdWRlcyhlLmtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaChlLmtleSA9PT0gXCIgXCIgPyBcIlNwYWNlXCIgOiBlLmtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0cy5qb2luKFwiK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaW5pc2ggPSAoY29tYm86IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlY29yZGluZykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uRG93biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgb25VcCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtiW2l0ZW0ua2V5XSA9IGNvbWJvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnNldEJ1dHRvblRleHQoY29tYm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2lkIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoQWxsVmlld3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRFbC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCBjb21ibyA9PT0gZGVmVmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVjb3JkaW5nKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZW91dCkgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25Eb3duLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBvblVwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5zZXRCdXR0b25UZXh0KFN0cmluZyhrYltpdGVtLmtleV0pIHx8IFwiLi4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9uRG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29tYm8gPSBidWlsZENvbWJvKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNYWluS2V5ID0gIVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udHJvbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTaGlmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBbHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTWV0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmluY2x1ZGVzKGUua2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5zZXRCdXR0b25UZXh0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbWJvICsgKGhhc01haW5LZXkgPyBcIlwiIDogXCIrXHUyMDI2XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCB0aW1lb3V0IG9uIGVhY2gga2V5ZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZW91dCkgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChjYW5jZWwsIDUwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9uVXAgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbmFsaXplIHdoZW4gYSBub24tbW9kaWZpZXIga2V5IGlzIHJlbGVhc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNNYWluS2V5ICYmIGN1cnJlbnRDb21ibykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoKGN1cnJlbnRDb21ibyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25Eb3duLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIG9uVXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNhbmNlbCwgNTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZSh0KFwic2V0LnNjcm9sbFwiKSkuc2V0SGVhZGluZygpO1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKS5zZXROYW1lKHQoXCJzZXQuaW52ZXJ0WVwiKSkuYWRkVG9nZ2xlKCh0ZykgPT4ge1xyXG4gICAgICAgICAgICB0Zy5zZXRWYWx1ZShrYi5pbnZlcnRTY3JvbGxZKTtcclxuICAgICAgICAgICAgdGcub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgIGtiLmludmVydFNjcm9sbFkgPSB2O1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKS5zZXROYW1lKHQoXCJzZXQuaW52ZXJ0WFwiKSkuYWRkVG9nZ2xlKCh0ZykgPT4ge1xyXG4gICAgICAgICAgICB0Zy5zZXRWYWx1ZShrYi5pbnZlcnRTY3JvbGxYKTtcclxuICAgICAgICAgICAgdGcub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgIGtiLmludmVydFNjcm9sbFggPSB2O1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSh0KFwic2V0LmludmVydFpvb21cIikpXHJcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoKHRnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0Zy5zZXRWYWx1ZShrYi5pbnZlcnRab29tKTtcclxuICAgICAgICAgICAgICAgIHRnLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2IuaW52ZXJ0Wm9vbSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250YWluZXJFbC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxJQUFBQSxtQkFBcUQ7OztBQ0FyRCxzQkFBa0Q7OztBQ3VJM0MsSUFBTSx3QkFBNEM7QUFBQSxFQUNyRCxnQkFBZ0I7QUFBQSxFQUNoQixtQkFBbUI7QUFBQSxFQUNuQix1QkFBdUI7QUFBQSxFQUN2Qix1QkFBdUI7QUFBQSxFQUN2QixxQkFBcUI7QUFBQSxFQUNyQixvQkFBb0I7QUFBQSxFQUNwQixvQkFBb0I7QUFDeEI7QUFFTyxJQUFNLHVCQUEyQztBQUFBLEVBQ3BELGdCQUFnQjtBQUFBLEVBQ2hCLG1CQUFtQjtBQUFBLEVBQ25CLHVCQUF1QjtBQUFBLEVBQ3ZCLHVCQUF1QjtBQUFBLEVBQ3ZCLHFCQUFxQjtBQUFBLEVBQ3JCLG9CQUFvQjtBQUFBLEVBQ3BCLG9CQUFvQjtBQUN4QjtBQUVPLElBQU0sbUJBQTZDO0FBQUEsRUFDdEQsU0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0g7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0g7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUNKO0FBRU8sSUFBTSxZQUFZO0FBQUEsRUFDckI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDSjtBQUNPLElBQU0sb0JBQTJDO0FBQUEsRUFDcEQ7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNKO0FBRU8sSUFBTSxzQkFBbUM7QUFBQSxFQUM1QyxVQUFVO0FBQUEsRUFDVixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxNQUFNO0FB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QUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIs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bkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLHFCQUFxQjtBQUFBLEVBQ3JCLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLHNCQUFzQjtBQUFBLEVBQ3RCLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLG1CQUFtQjtBQUFBLEVBQ25CLGdCQUFnQjtBQUFBLEVBQ2hCLG9CQUFvQjtBQUFBLEVBQ3BCLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLFlBQ0k7QUFBQSxFQUNKLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLG1CQUFtQjtBQUFBLEVBQ25CLGlCQUFpQjtBQUFBLEVBQ2pCLGlCQUFpQjtBQUFBLEVBQ2pCLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLHFCQUFxQjtBQUFBLEVBQ3JCLHNCQUFzQjtBQUFBLEVBQ3RCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLHFCQUFxQjtBQUFBLEVBQ3JCLGNBQWM7QUFBQSxFQUNkLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLG9CQUFvQjtBQUFBLEVBQ3BCLHdCQUF3QjtBQUFBLEVBQ3hCLGdCQUFnQjtBQUFBLEVBQ2hCLG9CQUFvQjtBQUFBLEVBQ3BCLGlCQUFpQjtBQUFBLEVBQ2pCLHFCQUFxQjtBQUFBLEVBQ3JCLGtCQUFrQjtBQUFBLEVBQ2xCLHNCQUFzQjtBQUMxQjtBQUVBLElBQU0sTUFBa0I7QUFBQSxFQUNwQixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsRUFDVCxVQUFVO0FBQUEsRUFDVixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsRUFDYixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixnQkFBZ0I7QUFBQSxFQUNoQixrQkFBa0I7QUFBQSxFQUNsQixhQUFhO0FBQUEsRUFDYixjQUFjO0FBQUEsRUFDZCxvQkFBb0I7QUFBQSxFQUNwQixnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixtQkFBbUI7QUFBQSxFQUNuQixZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxtQkFBbUI7QUFBQSxFQUNuQixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxrQkFBa0I7QUFBQSxFQUNsQixrQkFBa0I7QUFBQSxFQUNsQixrQkFBa0I7QUFBQSxFQUNsQixtQkFBbUI7QUFBQSxFQUNuQixlQUFlO0FBQUEsRUFDZixnQkFBZ0I7QUFBQSxFQUNoQixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixpQkFBaUI7QUFBQSxFQUNqQixjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxxQkFBcUI7QUFBQSxFQUNyQixVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixnQkFBZ0I7QUFBQSxFQUNoQixrQkFBa0I7QUFBQSxFQUNsQix1QkFBdUI7QUFBQSxFQUN2QixnQkFBZ0I7QUFBQSxFQUNoQixlQUFlO0FBQUEsRUFDZixxQkFBcUI7QUFBQSxFQUNyQixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixrQkFBa0I7QUFBQSxFQUNsQixZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixlQUFlO0FBQUEsRUFDZixrQkFBa0I7QUFBQSxFQUNsQixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxrQkFBa0I7QUFBQSxFQUNsQix1QkFBdUI7QUFBQSxFQUN2QixnQkFBZ0I7QUFBQSxFQUNoQixxQkFBcUI7QUFBQSxFQUNyQixZQUFZO0FBQUEsRUFDWixnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixZQUFZO0FBQUEsRUFDWixtQkFBbUI7QUFBQSxFQUNuQixzQkFBc0I7QUFBQSxFQUN0QixZQUFZO0FBQUEsRUFDWixlQUFlO0FBQUEsRUFDZixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixnQkFBZ0I7QUFBQSxFQUNoQixhQUFhO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixlQUFlO0FBQUEsRUFDZixtQkFBbUI7QUFBQSxFQUNuQixnQkFBZ0I7QUFBQSxFQUNoQixvQkFBb0I7QUFBQSxFQUNwQixhQUFhO0FBQUEsRUFDYixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxZQUNJO0FBQUEsRUFDSixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixtQkFBbUI7QUFBQSxFQUNuQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixxQkFBcUI7QUFBQSxFQUNyQixzQkFBc0I7QUFBQSxFQUN0QixrQkFBa0I7QUFBQSxFQUNsQixtQkFBbUI7QUFBQSxFQUNuQixxQkFBcUI7QUFBQSxFQUNyQixjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixrQkFBa0I7QUFBQSxFQUNsQixvQkFBb0I7QUFBQSxFQUNwQix3QkFBd0I7QUFBQSxFQUN4QixnQkFBZ0I7QUFBQSxFQUNoQixvQkFBb0I7QUFBQSxFQUNwQixpQkFBaUI7QUFBQSxFQUNqQixxQkFBcUI7QUFBQSxFQUNyQixrQkFBa0I7QUFBQSxFQUNsQixzQkFBc0I7QUFDMUI7QUFFQSxJQUFNLE1BQWtCO0FBQUEsRUFDcEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLEVBQ2IsY0FBYztBQUFBLEVBQ2Qsb0JBQW9CO0FBQUEsRUFDcEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxF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U0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7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LEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNk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VztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVB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QVUsY0FBYyxNQUFqQyxtQkFBb0MsV0FBcEMsWUFDSSxLQUFLLElBQUksTUFBTSxRQUFRO0FBQUEsSUFDL0I7QUFBQSxFQUNKO0FBQUEsRUFDQSxNQUFjLGVBQWUsUUFBaUI7QUFDMUMsUUFBSTtBQUNBLFlBQU0sSUFBSSxNQUFNLEtBQUssSUFBSSxNQUFNO0FBQUEsUUFDM0IsS0FBSyxRQUFRLFFBQVEsaUJBQWlCO0FBQUEsUUFDdEMsS0FBSyxZQUFZO0FBQUEsTUFDckI7QUFDQSxZQUFNLE9BQU8sS0FBSyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQzdDLFlBQU0sS0FBSyxTQUFTLENBQUM7QUFDckIsV0FBSyxJQUFJLFVBQVUsY0FBYyxNQUFNLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFBQSxJQUMxRCxTQUFRLEdBQU47QUFBQSxJQUVGO0FBQUEsRUFDSjtBQUFBLEVBQ0EsTUFBTSxpQkFBaUI7QUEzUDNCO0FBNFBRLFVBQU0sS0FBSyxLQUFLLElBQUksVUFBVSxnQkFBZ0IsdUJBQXVCO0FBQ3JFLFFBQUk7QUFDSixRQUFJLEdBQUc7QUFBUSxVQUFJLEdBQUcsQ0FBQztBQUFBLFNBQ2xCO0FBQ0QsV0FDSSxVQUFLLElBQUksVUFBVSxhQUFhLEtBQUssTUFBckMsWUFDQSxLQUFLLElBQUksVUFBVSxRQUFRLElBQUk7QUFDbkMsWUFBTSxFQUFFLGFBQWE7QUFBQSxRQUNqQixNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFDTDtBQUNBLFNBQUssSUFBSSxVQUFVLFdBQVcsQ0FBQztBQUFBLEVBQ25DO0FBQ0o7IiwKICAibmFtZXMiOiBbImltcG9ydF9vYnNpZGlhbiIsICJjYiIsICJfYSIsICJ0IiwgImRuIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAiX2EiXQp9Cg==
