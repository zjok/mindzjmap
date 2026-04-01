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
var import_obsidian5 = require("obsidian");

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
  boxSelectionColor: "#3b82f6",
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
var VIEW_TYPE_MINDMAP_OUTLINE = "mindzj-outline";
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
  "sm.boxSelColor": "Box Selection Color",
  "outline.title": "Outline",
  "outline.empty": "No mind map open",
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
  "sm.boxSelColor": "\u6846\u9009\u989C\u8272",
  "outline.title": "\u5927\u7EB2",
  "outline.empty": "\u6CA1\u6709\u6253\u5F00\u7684\u601D\u7EF4\u5BFC\u56FE",
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
  "sm.boxSelColor": "\u7BC4\u56F2\u9078\u629E\u8272",
  "outline.title": "\u30A2\u30A6\u30C8\u30E9\u30A4\u30F3",
  "outline.empty": "\u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7\u304C\u958B\u304B\u308C\u3066\u3044\u307E\u305B\u3093",
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
  "sm.boxSelColor": "Couleur de s\xE9lection",
  "outline.title": "Plan",
  "outline.empty": "Aucune carte ouverte",
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
  "sm.boxSelColor": "Auswahlfarbe",
  "outline.title": "Gliederung",
  "outline.empty": "Keine Mindmap ge\xF6ffnet",
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
  "sm.boxSelColor": "Color de selecci\xF3n",
  "outline.title": "Esquema",
  "outline.empty": "No hay mapa abierto",
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
  "sm.boxSelColor": "\u0426\u0432\u0435\u0442 \u0440\u0430\u043C\u043A\u0438 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F",
  "outline.title": "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430",
  "outline.empty": "\u041D\u0435\u0442 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0439 \u043A\u0430\u0440\u0442\u044B",
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
  "sm.boxSelColor": "Markerings f\xE4rg",
  "outline.title": "Disposition",
  "outline.empty": "Ingen karta \xF6ppen",
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
  "sm.boxSelColor": "\u092C\u0949\u0915\u094D\u0938 \u091A\u092F\u0928 \u0930\u0902\u0917",
  "outline.title": "\u0930\u0942\u092A\u0930\u0947\u0916\u093E",
  "outline.empty": "\u0915\u094B\u0908 \u092E\u093E\u0907\u0902\u0921 \u092E\u0948\u092A \u0928\u0939\u0940\u0902",
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
  "sm.boxSelColor": "\uBC15\uC2A4 \uC120\uD0DD \uC0C9\uC0C1",
  "outline.title": "\uAC1C\uC694",
  "outline.empty": "\uC5F4\uB9B0 \uB9C8\uC778\uB4DC\uB9F5 \uC5C6\uC74C",
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
  "sm.boxSelColor": "Cor de sele\xE7\xE3o",
  "outline.title": "Esbo\xE7o",
  "outline.empty": "Nenhum mapa aberto",
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
  "sm.boxSelColor": "Valinnan v\xE4ri",
  "outline.title": "J\xE4sennys",
  "outline.empty": "Ei avointa karttaa",
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
  "sm.boxSelColor": "Utvalgsfarge",
  "outline.title": "Disposisjon",
  "outline.empty": "Ingen kart \xE5pent",
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
  "sm.boxSelColor": "Selectiekleur",
  "outline.title": "Overzicht",
  "outline.empty": "Geen mindmap open",
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
  "sm.boxSelColor": "Auswahlfarbe",
  "outline.title": "Gliederung",
  "outline.empty": "Keine Mindmap offen",
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
  "sm.boxSelColor": "Valgfarve",
  "outline.title": "Oversigt",
  "outline.empty": "Ingen kort \xE5bent",
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
  "sm.boxSelColor": "\u05E6\u05D1\u05E2 \u05D1\u05D7\u05D9\u05E8\u05D4",
  "outline.title": "\u05DE\u05EA\u05D0\u05E8",
  "outline.empty": "\u05D0\u05D9\u05DF \u05DE\u05E4\u05D4 \u05E4\u05EA\u05D5\u05D7\u05D4",
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
  "sm.boxSelColor": "Colore selezione",
  "outline.title": "Schema",
  "outline.empty": "Nessuna mappa aperta",
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
  "sm.boxSelColor": "\u0644\u0648\u0646 \u0627\u0644\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0645\u0631\u0628\u0639",
  "outline.title": "\u0627\u0644\u0645\u062E\u0637\u0637",
  "outline.empty": "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u0631\u064A\u0637\u0629 \u0645\u0641\u062A\u0648\u062D\u0629",
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
    this.mdOutlineTimer = null;
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
  hexToRgba(hex, alpha) {
    const h = hex.replace("#", "");
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b))
      return `rgba(59,130,246,${alpha})`;
    return `rgba(${r},${g},${b},${alpha})`;
  }
  /** Notify the custom outline panel to re-read the node tree. */
  updateOutlineHeadings() {
    this.plugin.refreshOutline();
  }
  /** Refresh outline when the view is closing (will show empty). */
  clearOutlineHeadings() {
    setTimeout(() => this.plugin.refreshOutline(), 50);
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
    this.updateOutlineHeadings();
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
    this.updateOutlineHeadings();
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
  /** Expose the current root nodes for the outline panel. */
  getRoots() {
    return this.roots;
  }
  /** Select a node by id and pan the canvas to center it. */
  selectAndFocusNode(id) {
    const nd = this.fAll(id);
    if (!nd)
      return;
    if (this.commitEdit)
      this.commitEdit();
    this.sel1(id);
    this.focusNode(nd);
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
    this.mdCt.addEventListener("input", () => {
      if (!this.mdMode)
        return;
      if (this.mdOutlineTimer)
        clearTimeout(this.mdOutlineTimer);
      this.mdOutlineTimer = setTimeout(
        () => this.updateOutlineHeadings(),
        300
      );
    });
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
    if (this.mdOutlineTimer)
      clearTimeout(this.mdOutlineTimer);
    this.clearOutlineHeadings();
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
      b.style.border = `1px ${btnBdrS} ${btnBdr}`;
      b.style.background = btnBg;
      b.style.color = btnTx;
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
      "\u{1F4D1} " + t("outline.title"),
      t("outline.title"),
      () => this.plugin.openOutlinePanel()
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
      this.updateOutlineHeadings();
    }
  }
  roots2mdFromSnap() {
    if (!this.mdSnapshot)
      return null;
    try {
      const rs = JSON.parse(this.mdSnapshot);
      let m = "";
      const fmtRight = (nd, depth, sibIdx) => {
        const tx = nd.text.replace(/\n/g, " ");
        let line;
        if (depth === 1)
          line = "## " + tx;
        else if (depth === 2)
          line = "### " + tx;
        else if (depth === 3)
          line = "##### " + tx;
        else if (depth === 4)
          line = "	" + (sibIdx + 1) + ". " + tx;
        else
          line = "	".repeat(depth - 3) + "- " + tx;
        let r = line + "\n";
        for (let i = 0; i < nd.children.length; i++)
          r += fmtRight(nd.children[i], depth + 1, i);
        return r;
      };
      const fmtLeft = (nd, depth) => {
        const tx = nd.text.replace(/\n/g, " ");
        const line = "	".repeat(depth - 1) + "/ " + tx;
        let r = line + "\n";
        for (const c of nd.children)
          r += fmtLeft(c, depth + 1);
        return r;
      };
      for (let i = 0; i < rs.length; i++) {
        const r = rs[i];
        const rightCh = r.children.filter((c) => c.side !== "left");
        const leftCh = r.children.filter((c) => c.side === "left");
        m += "# " + r.text.replace(/\n/g, " ") + "\n";
        for (let j = 0; j < rightCh.length; j++)
          m += fmtRight(rightCh[j], 1, j);
        for (const c of leftCh)
          m += fmtLeft(c, 1);
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
      m += "# " + r.text.replace(/\n/g, " ") + "\n";
      for (let j = 0; j < rightCh.length; j++)
        m += this.n2mdRight(rightCh[j], 1, j);
      for (const c of leftCh)
        m += this.n2mdLeft(c, 1);
      if (i < this.roots.length - 1)
        m += "\n";
    }
    return m;
  }
  n2mdRight(nd, depth, sibIdx) {
    const tx = nd.text.replace(/\n/g, " ");
    let line;
    if (depth === 1)
      line = "## " + tx;
    else if (depth === 2)
      line = "### " + tx;
    else if (depth === 3)
      line = "##### " + tx;
    else if (depth === 4)
      line = "	" + (sibIdx + 1) + ". " + tx;
    else
      line = "	".repeat(depth - 3) + "- " + tx;
    let r = line + "\n";
    for (let i = 0; i < nd.children.length; i++)
      r += this.n2mdRight(nd.children[i], depth + 1, i);
    return r;
  }
  n2mdLeft(nd, depth) {
    const tx = nd.text.replace(/\n/g, " ");
    const line = "	".repeat(depth - 1) + "/ " + tx;
    let r = line + "\n";
    for (const c of nd.children)
      r += this.n2mdLeft(c, depth + 1);
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
      let depth;
      let txt;
      let side = "right";
      const headingM = line.match(/^(#{1,})\s+(.*)/);
      if (headingM) {
        const level = headingM[1].length;
        txt = headingM[2].trim();
        if (level === 1) {
          cur = this.mkRoot(txt);
          if (nr.length) {
            cur.x = nr[nr.length - 1].x;
            cur.y = nr[nr.length - 1].y + 200;
          }
          nr.push(cur);
          stk.length = 0;
          stk.push([0, cur]);
          continue;
        }
        depth = Math.min(level - 1, 3);
        side = "right";
      } else {
        const leftM = line.match(/^(\t*)\/ (.*)/);
        if (leftM) {
          depth = leftM[1].length + 1;
          txt = leftM[2].trim();
          side = "left";
        } else {
          const numM = line.match(/^(\t+)\d+\.\s+(.*)/);
          if (numM) {
            depth = numM[1].length + 3;
            txt = numM[2].trim();
            side = "right";
          } else {
            const bulletM = line.match(/^(\t+)-\s+(.*)/);
            if (bulletM) {
              depth = bulletM[1].length + 3;
              txt = bulletM[2].trim();
              side = "right";
            } else {
              const oldM = line.match(/^(\t*)([-*])\s+(.*)/);
              if (oldM) {
                depth = oldM[1].length + 1;
                txt = oldM[3].trim();
                side = oldM[2] === "*" ? "left" : "right";
              } else {
                txt = line.trim();
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
                continue;
              }
            }
          }
        }
      }
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
      while (stk.length && stk[stk.length - 1][0] >= depth)
        stk.pop();
      if (stk.length)
        stk[stk.length - 1][1].children.push(nd);
      else if (cur)
        cur.children.push(nd);
      stk.push([depth, nd]);
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
    R(s4, t("sm.boxSelColor"), "boxSelectionColor", "color");
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
    if (t2.isContentEditable)
      return true;
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
    navigator.clipboard.writeText(nd.text).catch(() => {
    });
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
    const bsc = this.style.boxSelectionColor || "#3b82f6";
    this.boxEl.setAttribute("fill", this.hexToRgba(bsc, 0.06));
    this.boxEl.setAttribute("stroke", this.hexToRgba(bsc, 0.4));
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
        ind.setAttribute(
          "fill",
          this.hexToRgba(
            this.style.boxSelectionColor || "#3b82f6",
            0.12
          )
        );
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
    mkColor(s4, t("sm.boxSelColor"), "boxSelectionColor");
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

// src/MindMapOutlineView.ts
var import_obsidian3 = require("obsidian");
var MindMapOutlineView = class extends import_obsidian3.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.treeEl = null;
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_TYPE_MINDMAP_OUTLINE;
  }
  getDisplayText() {
    return "MindZJ " + t("outline.title");
  }
  getIcon() {
    return "list-tree";
  }
  async onOpen() {
    const ct = this.containerEl.children[1];
    ct.empty();
    ct.addClass("mz-outline-ct");
    this.treeEl = ct.createEl("div");
    this.treeEl.addClass("mz-outline-tree");
    this.refresh();
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async onClose() {
    this.treeEl = null;
  }
  // ── public entry point ───────────────────────────────────────
  /** Rebuild the outline tree from the currently active leaf. */
  refresh() {
    if (!this.treeEl)
      return;
    this.treeEl.empty();
    const active = this.app.workspace.activeLeaf;
    if (!active) {
      this.showEmpty();
      return;
    }
    if (active.view instanceof MindMapView) {
      this.refreshMindMap(active.view);
      return;
    }
    if (active.view instanceof import_obsidian3.MarkdownView) {
      this.refreshMarkdown(active.view);
      return;
    }
    this.showEmpty();
  }
  // ── mind map outline ─────────────────────────────────────────
  refreshMindMap(view) {
    const roots = view.getRoots();
    if (!roots.length) {
      this.showEmpty();
      return;
    }
    for (const root of roots) {
      this.buildMindMapNode(this.treeEl, root, 0, view);
    }
  }
  buildMindMapNode(parent, nd, depth, view) {
    const item = parent.createEl("div");
    item.addClass("mz-outline-item");
    const row = item.createEl("div");
    row.addClass("mz-outline-row");
    row.style.paddingLeft = depth * 16 + 8 + "px";
    const hasChildren = nd.children && nd.children.length > 0;
    const toggle = row.createEl("span");
    toggle.addClass("mz-outline-toggle");
    if (hasChildren) {
      toggle.innerText = "\u25BC";
      toggle.addClass("mz-outline-toggle-active");
    } else {
      toggle.innerText = " ";
    }
    const level = depth === 0 ? 1 : Math.min(depth + 1, 6);
    const badge = row.createEl("span", { text: "H" + level });
    badge.addClass("mz-outline-badge");
    badge.addClass("mz-outline-h" + level);
    const text = row.createEl("span", {
      text: nd.text.replace(/\n/g, " ")
    });
    text.addClass("mz-outline-text");
    if (depth === 0)
      text.addClass("mz-outline-text-root");
    if (nd.side === "left") {
      const side = row.createEl("span", { text: "L" });
      side.addClass("mz-outline-side");
    }
    row.addEventListener("click", (e) => {
      e.stopPropagation();
      view.selectAndFocusNode(nd.id);
    });
    if (hasChildren) {
      const childCt = item.createEl("div");
      childCt.addClass("mz-outline-children");
      const rightCh = nd.children.filter((c) => c.side !== "left");
      const leftCh = nd.children.filter((c) => c.side === "left");
      for (const c of rightCh)
        this.buildMindMapNode(childCt, c, depth + 1, view);
      for (const c of leftCh)
        this.buildMindMapNode(childCt, c, depth + 1, view);
      let collapsed = false;
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        collapsed = !collapsed;
        toggle.innerText = collapsed ? "\u25B6" : "\u25BC";
        childCt.toggleClass("mz-outline-collapsed", collapsed);
      });
    }
  }
  // ── markdown outline ─────────────────────────────────────────
  refreshMarkdown(mdView) {
    const file = mdView.file;
    if (!file) {
      this.showEmpty();
      return;
    }
    const cache = this.app.metadataCache.getFileCache(file);
    const rawHeadings = cache == null ? void 0 : cache.headings;
    if (!rawHeadings || !rawHeadings.length) {
      this.showEmpty();
      return;
    }
    const tree = this.buildMdTree(rawHeadings);
    for (const node of tree) {
      this.renderMdNode(this.treeEl, node, 0, mdView);
    }
  }
  /** Convert a flat HeadingCache[] list into a nested tree. */
  buildMdTree(headings) {
    var _a, _b, _c;
    const roots = [];
    const stack = [];
    for (const h of headings) {
      const node = {
        heading: h.heading,
        level: h.level,
        line: (_c = (_b = (_a = h.position) == null ? void 0 : _a.start) == null ? void 0 : _b.line) != null ? _c : 0,
        children: []
      };
      while (stack.length && stack[stack.length - 1].level >= h.level)
        stack.pop();
      if (stack.length)
        stack[stack.length - 1].children.push(node);
      else
        roots.push(node);
      stack.push(node);
    }
    return roots;
  }
  /** Recursively render a markdown heading node. */
  renderMdNode(parent, node, depth, mdView) {
    const item = parent.createEl("div");
    item.addClass("mz-outline-item");
    const row = item.createEl("div");
    row.addClass("mz-outline-row");
    row.style.paddingLeft = depth * 16 + 8 + "px";
    const hasChildren = node.children.length > 0;
    const toggle = row.createEl("span");
    toggle.addClass("mz-outline-toggle");
    if (hasChildren) {
      toggle.innerText = "\u25BC";
      toggle.addClass("mz-outline-toggle-active");
    } else {
      toggle.innerText = " ";
    }
    const badge = row.createEl("span", { text: "H" + node.level });
    badge.addClass("mz-outline-badge");
    badge.addClass("mz-outline-h" + node.level);
    const text = row.createEl("span", { text: node.heading });
    text.addClass("mz-outline-text");
    if (node.level === 1)
      text.addClass("mz-outline-text-root");
    const targetLine = node.line;
    row.addEventListener("click", (e) => {
      e.stopPropagation();
      for (const l of this.app.workspace.getLeavesOfType("markdown")) {
        if (l.view === mdView) {
          this.app.workspace.setActiveLeaf(l, { focus: true });
          break;
        }
      }
      setTimeout(() => {
        mdView.setEphemeralState({ line: targetLine });
      }, 0);
    });
    if (hasChildren) {
      const childCt = item.createEl("div");
      childCt.addClass("mz-outline-children");
      for (const c of node.children)
        this.renderMdNode(childCt, c, depth + 1, mdView);
      let collapsed = false;
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        collapsed = !collapsed;
        toggle.innerText = collapsed ? "\u25B6" : "\u25BC";
        childCt.toggleClass("mz-outline-collapsed", collapsed);
      });
    }
  }
  // ── helpers ───────────────────────────────────────────────────
  showEmpty() {
    if (!this.treeEl)
      return;
    const el = this.treeEl.createEl("div", { text: t("outline.empty") });
    el.addClass("mz-outline-empty");
  }
};

// src/SettingsTab.ts
var import_obsidian4 = require("obsidian");
var MindMapSettingTab = class extends import_obsidian4.PluginSettingTab {
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
    new import_obsidian4.Setting(containerEl).setName(t("set.title")).setHeading();
    new import_obsidian4.Setting(containerEl).setName(t("set.lang")).setDesc(t("set.langDesc")).addDropdown((dd) => {
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
    new import_obsidian4.Setting(containerEl).setName(t("set.theme")).setDesc(t("set.themeDesc")).addDropdown((dd) => {
      dd.addOption("light", t("set.light"));
      dd.addOption("dark", t("set.dark"));
      dd.setValue(this.plugin.settings.theme);
      dd.onChange(async (v) => {
        await this.plugin.switchTheme(v);
        this.display();
      });
    });
    new import_obsidian4.Setting(containerEl).setName(t("set.canvasBg")).setDesc(t("set.canvasBgDesc")).addColorPicker((cp) => {
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
    new import_obsidian4.Setting(containerEl).setName(t("set.toolbar")).setDesc(t("set.toolbarDesc")).addToggle((tg) => {
      tg.setValue(this.plugin.settings.showToolbar);
      tg.onChange(async (v) => {
        this.plugin.settings.showToolbar = v;
        await this.plugin.saveSettings();
        this.plugin.refreshAllViews();
      });
    });
    new import_obsidian4.Setting(containerEl).setName(t("set.editOnCreate")).setDesc(t("set.editOnCreateDesc")).addToggle((tg) => {
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
      const setting = new import_obsidian4.Setting(containerEl).setName(name).setDesc(desc);
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
    new import_obsidian4.Setting(containerEl).setName(t("set.typeToEdit")).setDesc(t("set.typeToEditDesc")).addToggle((tg) => {
      tg.setValue(this.plugin.settings.typeToEdit);
      tg.onChange(async (v) => {
        this.plugin.settings.typeToEdit = v;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian4.Setting(containerEl).setName(t("set.keys")).setHeading();
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
      const setting = new import_obsidian4.Setting(containerEl).setName(item.label);
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
    new import_obsidian4.Setting(containerEl).setName(t("set.scroll")).setHeading();
    new import_obsidian4.Setting(containerEl).setName(t("set.invertY")).addToggle((tg) => {
      tg.setValue(kb.invertScrollY);
      tg.onChange(async (v) => {
        kb.invertScrollY = v;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian4.Setting(containerEl).setName(t("set.invertX")).addToggle((tg) => {
      tg.setValue(kb.invertScrollX);
      tg.onChange(async (v) => {
        kb.invertScrollX = v;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian4.Setting(containerEl).setName(t("set.invertZoom")).addToggle((tg) => {
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
var MindNodePlugin = class extends import_obsidian5.Plugin {
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
    this.registerView(
      VIEW_TYPE_MINDMAP_OUTLINE,
      (leaf) => new MindMapOutlineView(leaf, this)
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
    this.addCommand({
      id: "open-outline",
      name: "Open MindZJ outline",
      callback: () => {
        void this.openOutlinePanel();
      }
    });
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        var _a;
        if (!(file instanceof import_obsidian5.TFolder))
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
            const idx = m.items.findIndex((it) => {
              var _a2, _b, _c;
              const txt = ((_c = (_b = (_a2 = it.titleEl) == null ? void 0 : _a2.textContent) != null ? _b : it.title) != null ? _c : "").toLowerCase().trim();
              return txt === "new folder" || txt === "\u65B0\u5EFA\u6587\u4EF6\u5939" || txt.includes("new folder");
            });
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
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", (leaf) => {
        var _a;
        if ((leaf == null ? void 0 : leaf.view) instanceof MindMapOutlineView)
          return;
        this.refreshOutline();
        const isMindMap = (leaf == null ? void 0 : leaf.view) instanceof MindMapView;
        const isMarkdown = ((_a = leaf == null ? void 0 : leaf.view) == null ? void 0 : _a.getViewType()) === "markdown";
        if ((isMindMap || isMarkdown) && !this.app.workspace.getLeavesOfType(
          VIEW_TYPE_MINDMAP_OUTLINE
        ).length) {
          void this.openOutlinePanel();
        }
      })
    );
    this.registerEvent(
      this.app.metadataCache.on("changed", (file) => {
        var _a;
        if (file.extension === "md" && file.path === ((_a = this.app.workspace.getActiveFile()) == null ? void 0 : _a.path)) {
          this.refreshOutline();
        }
      })
    );
    this.registerEvent(
      this.app.metadataCache.on("resolve", (file) => {
        var _a;
        if (file.extension === "md" && file.path === ((_a = this.app.workspace.getActiveFile()) == null ? void 0 : _a.path)) {
          this.refreshOutline();
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
  // ── Outline support ──────────────────────────────────────────
  /** Called by MindMapView whenever node data changes. */
  refreshOutline() {
    for (const leaf of this.app.workspace.getLeavesOfType(
      VIEW_TYPE_MINDMAP_OUTLINE
    )) {
      if (leaf.view instanceof MindMapOutlineView) {
        leaf.view.refresh();
      }
    }
  }
  /** Open the MindZJ outline panel in the left sidebar. */
  async openOutlinePanel() {
    var _a;
    const ls = this.app.workspace.getLeavesOfType(
      VIEW_TYPE_MINDMAP_OUTLINE
    );
    let l;
    if (ls.length) {
      l = ls[0];
    } else {
      l = (_a = this.app.workspace.getLeftLeaf(false)) != null ? _a : this.app.workspace.getLeaf(true);
      await l.setViewState({
        type: VIEW_TYPE_MINDMAP_OUTLINE,
        active: true
      });
    }
    this.app.workspace.revealLeaf(l);
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL01pbmRNYXBWaWV3LnRzIiwgInNyYy90eXBlcy50cyIsICJzcmMvaTE4bi50cyIsICJzcmMvU3R5bGVQYW5lbFZpZXcudHMiLCAic3JjL01pbmRNYXBPdXRsaW5lVmlldy50cyIsICJzcmMvU2V0dGluZ3NUYWIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIHNyYy9tYWluLnRzXHJcbmltcG9ydCB7IFBsdWdpbiwgV29ya3NwYWNlTGVhZiwgVEZvbGRlciwgTWVudSB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgeyBNaW5kTWFwVmlldyB9IGZyb20gXCIuL01pbmRNYXBWaWV3XCI7XHJcbmltcG9ydCB7IFN0eWxlUGFuZWxWaWV3IH0gZnJvbSBcIi4vU3R5bGVQYW5lbFZpZXdcIjtcclxuaW1wb3J0IHsgTWluZE1hcE91dGxpbmVWaWV3IH0gZnJvbSBcIi4vTWluZE1hcE91dGxpbmVWaWV3XCI7XHJcbmltcG9ydCB7IE1pbmRNYXBTZXR0aW5nVGFiIH0gZnJvbSBcIi4vU2V0dGluZ3NUYWJcIjtcclxuaW1wb3J0IHsgc2V0TGFuZywgdCB9IGZyb20gXCIuL2kxOG5cIjtcclxuaW1wb3J0IHtcclxuICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgVklFV19UWVBFX01JTkRNQVBfU1RZTEUsXHJcbiAgICBWSUVXX1RZUEVfTUlORE1BUF9PVVRMSU5FLFxyXG4gICAgTUlORE1BUF9GSUxFX0VYVEVOU0lPTixcclxuICAgIE1pbmRNYXBTdHlsZSxcclxuICAgIFBsdWdpblNldHRpbmdzLFxyXG4gICAgREVGQVVMVF9TRVRUSU5HUyxcclxuICAgIERFRkFVTFRfU1RZTEUsXHJcbiAgICBERUZBVUxUX0tFWUJJTkRJTkdTLFxyXG4gICAgVG9vbGJhclRoZW1lQ29sb3JzLFxyXG4gICAgREVGQVVMVF9UT09MQkFSX0xJR0hULFxyXG4gICAgREVGQVVMVF9UT09MQkFSX0RBUkssXHJcbn0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmludGVyZmFjZSBNZW51V2l0aEl0ZW1zIGV4dGVuZHMgTWVudSB7XHJcbiAgICBpdGVtczogQXJyYXk8eyBzZWN0aW9uPzogc3RyaW5nOyB0aXRsZUVsPzogSFRNTEVsZW1lbnQ7IHRpdGxlPzogc3RyaW5nIH0+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5kTm9kZVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcbiAgICBzZXR0aW5nczogUGx1Z2luU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgLi4uREVGQVVMVF9TRVRUSU5HUyxcclxuICAgICAgICBzdHlsZTogeyAuLi5ERUZBVUxUX1NUWUxFIH0sXHJcbiAgICAgICAga2V5QmluZGluZ3M6IHsgLi4uREVGQVVMVF9LRVlCSU5ESU5HUyB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBvbmxvYWQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcclxuICAgICAgICBzZXRMYW5nKHRoaXMuc2V0dGluZ3MubGFuZ3VhZ2UpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFeHRlbnNpb25zKFtNSU5ETUFQX0ZJTEVfRVhURU5TSU9OXSwgVklFV19UWVBFX01JTkRNQVApO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJWaWV3KFxyXG4gICAgICAgICAgICBWSUVXX1RZUEVfTUlORE1BUCxcclxuICAgICAgICAgICAgKGxlYWYpID0+IG5ldyBNaW5kTWFwVmlldyhsZWFmLCB0aGlzKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJWaWV3KFxyXG4gICAgICAgICAgICBWSUVXX1RZUEVfTUlORE1BUF9TVFlMRSxcclxuICAgICAgICAgICAgKGxlYWYpID0+IG5ldyBTdHlsZVBhbmVsVmlldyhsZWFmLCB0aGlzKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJWaWV3KFxyXG4gICAgICAgICAgICBWSUVXX1RZUEVfTUlORE1BUF9PVVRMSU5FLFxyXG4gICAgICAgICAgICAobGVhZikgPT4gbmV3IE1pbmRNYXBPdXRsaW5lVmlldyhsZWFmLCB0aGlzKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgTWluZE1hcFNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcclxuICAgICAgICB0aGlzLmFkZFJpYmJvbkljb24oXCJuZXR3b3JrXCIsIFwiTmV3IE1pbmRaSlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZvaWQgdGhpcy5jcmVhdGVOZXcoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICAgICAgICBpZDogXCJjcmVhdGUtbmV3XCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiTmV3IG1pbmQgbWFwXCIsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2b2lkIHRoaXMuY3JlYXRlTmV3KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgICAgICAgaWQ6IFwib3Blbi1vdXRsaW5lXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiT3BlbiBNaW5kWkogb3V0bGluZVwiLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdm9pZCB0aGlzLm9wZW5PdXRsaW5lUGFuZWwoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImZpbGUtbWVudVwiLCAobWVudSwgZmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIFRGb2xkZXIpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUoXCJOZXcgTWluZFpKXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJY29uKFwibmV0d29ya1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIHRoaXMuY3JlYXRlSW5Gb2xkZXIoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBtZW51IGFzIHVua25vd24gYXMgTWVudVdpdGhJdGVtcztcclxuICAgICAgICAgICAgICAgIGlmIChtLml0ZW1zPy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXpqID0gbS5pdGVtcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobXpqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IG0uaXRlbXMuZmluZEluZGV4KChpdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHh0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0LnRpdGxlRWw/LnRleHRDb250ZW50ID8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQudGl0bGUgPz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQgPT09IFwibmV3IGZvbGRlclwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID09PSBcIlx1NjVCMFx1NUVGQVx1NjU4N1x1NEVGNlx1NTkzOVwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0LmluY2x1ZGVzKFwibmV3IGZvbGRlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXpqLnNlY3Rpb24gPSBtLml0ZW1zW2lkeF0uc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uaXRlbXMuc3BsaWNlKGlkeCArIDEsIDAsIG16aik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLml0ZW1zLnVuc2hpZnQobXpqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gUmVmcmVzaCB0aGUgY3VzdG9tIG91dGxpbmUgcGFuZWwgd2hlbmV2ZXIgdGhlIGFjdGl2ZSBsZWFmIGNoYW5nZXMuXHJcbiAgICAgICAgLy8gU2tpcCBpZiB0aGUgb3V0bGluZSBwYW5lbCBpdHNlbGYgYmVjYW1lIGFjdGl2ZSAoYXZvaWRzIERPTSByZWJ1aWxkXHJcbiAgICAgICAgLy8gdGhhdCB3b3VsZCBzd2FsbG93IGNsaWNrcykuXHJcbiAgICAgICAgLy8gQXV0by1vcGVuIHdoZW4gYSBtaW5kIG1hcCBPUiBtYXJrZG93biB2aWV3IGJlY29tZXMgYWN0aXZlLlxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudChcclxuICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9uKFwiYWN0aXZlLWxlYWYtY2hhbmdlXCIsIChsZWFmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGVhZj8udmlldyBpbnN0YW5jZW9mIE1pbmRNYXBPdXRsaW5lVmlldykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoT3V0bGluZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNNaW5kTWFwID0gbGVhZj8udmlldyBpbnN0YW5jZW9mIE1pbmRNYXBWaWV3O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNNYXJrZG93biA9IGxlYWY/LnZpZXc/LmdldFZpZXdUeXBlKCkgPT09IFwibWFya2Rvd25cIjtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAoaXNNaW5kTWFwIHx8IGlzTWFya2Rvd24pICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQX09VVExJTkUsXHJcbiAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgdGhpcy5vcGVuT3V0bGluZVBhbmVsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gUmVmcmVzaCBvdXRsaW5lIHdoZW4gdGhlICphY3RpdmUqIC5tZCBmaWxlJ3MgbWV0YWRhdGEgY2hhbmdlcy5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUub24oXCJjaGFuZ2VkXCIsIChmaWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZS5leHRlbnNpb24gPT09IFwibWRcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGUucGF0aCA9PT0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKT8ucGF0aFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoT3V0bGluZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIEFsc28gcmVmcmVzaCB3aGVuIG1ldGFkYXRhIGlzIGZpcnN0IHJlc29sdmVkIChjb3ZlcnMgc3dpdGNoaW5nXHJcbiAgICAgICAgLy8gdG8gYSAubWQgZmlsZSB3aG9zZSBjYWNoZSB3YXNuJ3QgcmVhZHkgZHVyaW5nIGFjdGl2ZS1sZWFmLWNoYW5nZSkuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KFxyXG4gICAgICAgICAgICB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLm9uKFwicmVzb2x2ZVwiLCAoZmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICBmaWxlLnBhdGggPT09IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCk/LnBhdGhcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaE91dGxpbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbnVubG9hZCgpOiB2b2lkIHtcclxuICAgICAgICAvKiBubyBjbGVhbnVwIG5lZWRlZCAqL1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyAuLi5ERUZBVUxUX1NUWUxFLCAuLi4oZC5zdHlsZSA/PyB7fSkgfSxcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBkLmxhbmd1YWdlID8/IFwiZW5cIixcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBkLnRoZW1lID8/IFwibGlnaHRcIixcclxuICAgICAgICAgICAgICAgIHNob3dUb29sYmFyOiBkLnNob3dUb29sYmFyID8/IHRydWUsXHJcbiAgICAgICAgICAgICAgICBrZXlCaW5kaW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLkRFRkFVTFRfS0VZQklORElOR1MsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uKGQua2V5QmluZGluZ3MgPz8ge30pLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRldmVsb3Blck1vZGU6IGQuZGV2ZWxvcGVyTW9kZSA/PyBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVkaXRPbkNyZWF0ZTogZC5lZGl0T25DcmVhdGUgPz8gdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHR5cGVUb0VkaXQ6IGQudHlwZVRvRWRpdCA/PyB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tTm9kZU5hbWVzOiBkLmN1c3RvbU5vZGVOYW1lcyA/PyB7fSxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJTdHlsZUxpZ2h0OiBkLnRvb2xiYXJTdHlsZUxpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhclN0eWxlRGFyazogZC50b29sYmFyU3R5bGVEYXJrLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZCA9IFtcclxuICAgICAgICAgICAgICAgIFwiYmV6aWVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0cmFpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1cnZlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGVwXCIsXHJcbiAgICAgICAgICAgICAgICBcImJyYWNrZXRcIixcclxuICAgICAgICAgICAgICAgIFwibG9vc2VcIixcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZC5pbmNsdWRlcyh0aGlzLnNldHRpbmdzLnN0eWxlLmNvbm5lY3Rpb25TdHlsZSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnN0eWxlLmNvbm5lY3Rpb25TdHlsZSA9IFwiYmV6aWVyXCI7XHJcbiAgICAgICAgICAgIC8vIFVwZ3JhZGU6IGFwcGx5IHRoZW1lLWFwcHJvcHJpYXRlIHRvb2xiYXIgY29sb3JzIHdoZW5cclxuICAgICAgICAgICAgLy8gcGVyLXRoZW1lIHNuYXBzaG90cyBoYXZlbid0IGJlZW4gc2F2ZWQgeWV0IChlLmcuIHVzZXJcclxuICAgICAgICAgICAgLy8gdXBncmFkZWQgZnJvbSBhIHZlcnNpb24gdGhhdCBkaWRuJ3QgcGVyc2lzdCB0aGVtKS5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudGhlbWUgPT09IFwiZGFya1wiICYmICFkLnRvb2xiYXJTdHlsZURhcmspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb29sYmFyQ29sb3JzKERFRkFVTFRfVE9PTEJBUl9EQVJLKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgdXBkYXRlU3R5bGUocDogUGFydGlhbDxNaW5kTWFwU3R5bGU+KSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zdHlsZSA9IHsgLi4udGhpcy5zZXR0aW5ncy5zdHlsZSwgLi4ucCB9O1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XHJcbiAgICB9XHJcbiAgICBnZXRTdHlsZSgpOiBNaW5kTWFwU3R5bGUge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMuc2V0dGluZ3Muc3R5bGUgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRvb2xiYXJDb2xvcnMoKTogVG9vbGJhclRoZW1lQ29sb3JzIHtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5zZXR0aW5ncy5zdHlsZTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b29sYmFyQmdDb2xvcjogcy50b29sYmFyQmdDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJ0bkJnQ29sb3I6IHMudG9vbGJhckJ0bkJnQ29sb3IsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogcy50b29sYmFyQnRuQm9yZGVyU3R5bGUsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogcy50b29sYmFyQnRuQm9yZGVyQ29sb3IsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5UZXh0Q29sb3I6IHMudG9vbGJhckJ0blRleHRDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJvcmRlckNvbG9yOiBzLnRvb2xiYXJCb3JkZXJDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJvcmRlcldpZHRoOiBzLnRvb2xiYXJCb3JkZXJXaWR0aCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhcHBseVRvb2xiYXJDb2xvcnModGM6IFRvb2xiYXJUaGVtZUNvbG9ycykge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zZXR0aW5ncy5zdHlsZSwgdGMpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3dpdGNoVGhlbWUobmV3VGhlbWU6IFwibGlnaHRcIiB8IFwiZGFya1wiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudGhlbWUgPT09IFwibGlnaHRcIilcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy50b29sYmFyU3R5bGVMaWdodCA9IHRoaXMuZ2V0VG9vbGJhckNvbG9ycygpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5zZXR0aW5ncy50b29sYmFyU3R5bGVEYXJrID0gdGhpcy5nZXRUb29sYmFyQ29sb3JzKCk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aGVtZSA9IG5ld1RoZW1lO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3R5bGUuY2FudmFzQmcgPVxyXG4gICAgICAgICAgICBuZXdUaGVtZSA9PT0gXCJkYXJrXCIgPyBcIiMxZTFlMWVcIiA6IFwiI2ZmZmZmZlwiO1xyXG4gICAgICAgIHRoaXMuYXBwbHlUb29sYmFyQ29sb3JzKFxyXG4gICAgICAgICAgICBuZXdUaGVtZSA9PT0gXCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgICA/ICh0aGlzLnNldHRpbmdzLnRvb2xiYXJTdHlsZUxpZ2h0ID8/IERFRkFVTFRfVE9PTEJBUl9MSUdIVClcclxuICAgICAgICAgICAgICAgIDogKHRoaXMuc2V0dGluZ3MudG9vbGJhclN0eWxlRGFyayA/PyBERUZBVUxUX1RPT0xCQVJfREFSSyksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZVRvQWxsVmlld3ModGhpcy5zZXR0aW5ncy5zdHlsZSk7XHJcbiAgICB9XHJcbiAgICBnZXRSb290TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lc1t0aGlzLnNldHRpbmdzLmxhbmd1YWdlXTtcclxuICAgICAgICByZXR1cm4gbj8ucm9vdCB8fCB0KFwiZGVmLnJvb3RcIik7XHJcbiAgICB9XHJcbiAgICBnZXRDaGlsZE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBuID0gdGhpcy5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXNbdGhpcy5zZXR0aW5ncy5sYW5ndWFnZV07XHJcbiAgICAgICAgcmV0dXJuIG4/LmNoaWxkIHx8IHQoXCJkZWYuY2hpbGRcIik7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoQWxsVmlld3MoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICkpXHJcbiAgICAgICAgICAgIGlmIChsZWFmLnZpZXcgaW5zdGFuY2VvZiBNaW5kTWFwVmlldykgbGVhZi52aWV3LnJlZnJlc2hVSSgpO1xyXG4gICAgfVxyXG4gICAgYXBwbHlTdHlsZVRvQWxsVmlld3MoczogTWluZE1hcFN0eWxlKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICkpXHJcbiAgICAgICAgICAgIGlmIChsZWFmLnZpZXcgaW5zdGFuY2VvZiBNaW5kTWFwVmlldylcclxuICAgICAgICAgICAgICAgIGxlYWYudmlldy5hcHBseVN0eWxlKHsgLi4ucyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuUGx1Z2luU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICBjb25zdCBhcHBSZWMgPSB0aGlzLmFwcCBhcyB1bmtub3duIGFzIFJlY29yZDxcclxuICAgICAgICAgICAgc3RyaW5nLFxyXG4gICAgICAgICAgICB7IG9wZW4oKTogdm9pZDsgb3BlblRhYkJ5SWQoaWQ6IHN0cmluZyk6IHZvaWQgfVxyXG4gICAgICAgID47XHJcbiAgICAgICAgaWYgKGFwcFJlYy5zZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIGFwcFJlYy5zZXR0aW5nLm9wZW4oKTtcclxuICAgICAgICAgICAgYXBwUmVjLnNldHRpbmcub3BlblRhYkJ5SWQodGhpcy5tYW5pZmVzdC5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvb3ROb2RlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuZ2V0Um9vdE5hbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Jvb3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDIsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdW5pUGF0aChmb2xkZXI6IFRGb2xkZXIsIGJhc2U6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGV4dCA9IE1JTkRNQVBfRklMRV9FWFRFTlNJT04sXHJcbiAgICAgICAgICAgIHByZSA9IGZvbGRlci5wYXRoID09PSBcIi9cIiA/IFwiXCIgOiBmb2xkZXIucGF0aCArIFwiL1wiO1xyXG4gICAgICAgIGxldCBwID0gYCR7cHJlfSR7YmFzZX0uJHtleHR9YCxcclxuICAgICAgICAgICAgbiA9IDE7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwKSkge1xyXG4gICAgICAgICAgICBwID0gYCR7cHJlfSR7YmFzZX0gJHtufS4ke2V4dH1gO1xyXG4gICAgICAgICAgICBuKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhc3luYyBjcmVhdGVOZXcoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJbkZvbGRlcihcclxuICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKT8ucGFyZW50ID8/XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXRSb290KCksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXN5bmMgY3JlYXRlSW5Gb2xkZXIoZm9sZGVyOiBURm9sZGVyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHRoaXMudW5pUGF0aChmb2xkZXIsIFwiVW50aXRsZWQgTWluZFpKXCIpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0RGF0YSgpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBsZWFmID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XHJcbiAgICAgICAgICAgIGF3YWl0IGxlYWYub3BlbkZpbGUoZik7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5zZXRBY3RpdmVMZWFmKGxlYWYsIHsgZm9jdXM6IHRydWUgfSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIC8qIGZpbGUgY3JlYXRpb24gbWF5IGZhaWwgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBvcGVuU3R5bGVQYW5lbCgpIHtcclxuICAgICAgICBjb25zdCBscyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX01JTkRNQVBfU1RZTEUpO1xyXG4gICAgICAgIGxldCBsOiBXb3Jrc3BhY2VMZWFmO1xyXG4gICAgICAgIGlmIChscy5sZW5ndGgpIGwgPSBsc1swXTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbCA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0UmlnaHRMZWFmKGZhbHNlKSA/P1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYodHJ1ZSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGwuc2V0Vmlld1N0YXRlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLnJldmVhbExlYWYobCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXHUyNTAwXHUyNTAwIE91dGxpbmUgc3VwcG9ydCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcclxuICAgIC8qKiBDYWxsZWQgYnkgTWluZE1hcFZpZXcgd2hlbmV2ZXIgbm9kZSBkYXRhIGNoYW5nZXMuICovXHJcbiAgICByZWZyZXNoT3V0bGluZSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGxlYWYgb2YgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShcclxuICAgICAgICAgICAgVklFV19UWVBFX01JTkRNQVBfT1VUTElORSxcclxuICAgICAgICApKSB7XHJcbiAgICAgICAgICAgIGlmIChsZWFmLnZpZXcgaW5zdGFuY2VvZiBNaW5kTWFwT3V0bGluZVZpZXcpIHtcclxuICAgICAgICAgICAgICAgIGxlYWYudmlldy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiogT3BlbiB0aGUgTWluZFpKIG91dGxpbmUgcGFuZWwgaW4gdGhlIGxlZnQgc2lkZWJhci4gKi9cclxuICAgIGFzeW5jIG9wZW5PdXRsaW5lUGFuZWwoKSB7XHJcbiAgICAgICAgY29uc3QgbHMgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFxyXG4gICAgICAgICAgICBWSUVXX1RZUEVfTUlORE1BUF9PVVRMSU5FLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IGw6IFdvcmtzcGFjZUxlYWY7XHJcbiAgICAgICAgaWYgKGxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsID0gbHNbMF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbCA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVmdExlYWYoZmFsc2UpID8/XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhZih0cnVlKTtcclxuICAgICAgICAgICAgYXdhaXQgbC5zZXRWaWV3U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogVklFV19UWVBFX01JTkRNQVBfT1VUTElORSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5yZXZlYWxMZWFmKGwpO1xyXG4gICAgfVxyXG59XHJcbiIsICIvLyBzcmMvTWluZE1hcFZpZXcudHNcclxuaW1wb3J0IHsgVGV4dEZpbGVWaWV3LCBXb3Jrc3BhY2VMZWFmLCBNZW51IH0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcbmltcG9ydCB7XHJcbiAgICBWSUVXX1RZUEVfTUlORE1BUCxcclxuICAgIEJvcmRlclN0eWxlLFxyXG4gICAgTWluZE5vZGVEYXRhLFxyXG4gICAgTWluZE1hcFN0eWxlLFxyXG4gICAgREVGQVVMVF9TVFlMRSxcclxuICAgIERFRkFVTFRfVE9PTEJBUl9MSUdIVCxcclxuICAgIERFRkFVTFRfVE9PTEJBUl9EQVJLLFxyXG4gICAgUkFJTkJPV19QQUxFVFRFUyxcclxuICAgIEZPTlRfTElTVCxcclxuICAgIENPTk5FQ1RJT05fU1RZTEVTLFxyXG4gICAgS2V5QmluZGluZ3MsXHJcbn0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgdCB9IGZyb20gXCIuL2kxOG5cIjtcclxuaW1wb3J0IHR5cGUgTWluZE5vZGVQbHVnaW4gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxudHlwZSBMYXlvdXROb2RlID0gTWluZE5vZGVEYXRhICYgeyBfc2g/OiBudW1iZXIgfTtcclxuXHJcbmludGVyZmFjZSBSb290RHJhZyB7XHJcbiAgICBpc1Jvb3REcmFnOiB0cnVlO1xyXG4gICAgbm9kZUlkOiBzdHJpbmc7XHJcbiAgICBzdGFydFg6IG51bWJlcjtcclxuICAgIHN0YXJ0WTogbnVtYmVyO1xyXG4gICAgbnN4OiBudW1iZXI7XHJcbiAgICBuc3k6IG51bWJlcjtcclxuICAgIHBlZXJzPzogeyBpZDogc3RyaW5nOyBzeDogbnVtYmVyOyBzeTogbnVtYmVyIH1bXTtcclxufVxyXG5pbnRlcmZhY2UgQ2hpbGREcmFnIHtcclxuICAgIGlzUm9vdERyYWc6IGZhbHNlO1xyXG4gICAgbm9kZUlkOiBzdHJpbmc7XHJcbiAgICBzdGFydFg6IG51bWJlcjtcclxuICAgIHN0YXJ0WTogbnVtYmVyO1xyXG4gICAgZ2hvc3RFbDogU1ZHRWxlbWVudCB8IG51bGw7XHJcbiAgICBpbmRpY2F0b3JFbDogU1ZHUmVjdEVsZW1lbnQgfCBudWxsO1xyXG4gICAgc25hcDogc3RyaW5nO1xyXG59XHJcbnR5cGUgRHJhZ1N0YXRlID0gKHsgaXNEcmFnZ2luZzogYm9vbGVhbiB9ICYgKFJvb3REcmFnIHwgQ2hpbGREcmFnKSkgfCBudWxsO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1pbmRNYXBWaWV3IGV4dGVuZHMgVGV4dEZpbGVWaWV3IHtcclxuICAgIHByaXZhdGUgc3ZnRWwhOiBTVkdTVkdFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBnRWwhOiBTVkdHRWxlbWVudDtcclxuICAgIHByaXZhdGUgZWRnZXNHITogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG5vZGVzRyE6IFNWR0dFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5RyE6IFNWR0dFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjYyE6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBzdmdDdCE6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBtZEN0ITogSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHByaXZhdGUgdGJFbCE6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBkZXZFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgcGFuWCA9IDA7XHJcbiAgICBwcml2YXRlIHBhblkgPSAwO1xyXG4gICAgcHJpdmF0ZSB6b29tID0gMTtcclxuICAgIHByaXZhdGUgc3BhY2VEb3duID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGRyYWdDdiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzbXggPSAwO1xyXG4gICAgcHJpdmF0ZSBzbXkgPSAwO1xyXG4gICAgcHJpdmF0ZSBzZWxJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIG11bHRpU2VsID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICBwcml2YXRlIGVkaXRJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJvb3RzOiBNaW5kTm9kZURhdGFbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBsY3QgPSAwO1xyXG4gICAgcHJpdmF0ZSBsY25pZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNvbW1pdEVkaXQ6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1bmRvUzogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgcmVkb1M6IHN0cmluZ1tdID0gW107XHJcbiAgICBwdWJsaWMgc3R5bGU6IE1pbmRNYXBTdHlsZSA9IHsgLi4uREVGQVVMVF9TVFlMRSB9O1xyXG4gICAgcHJpdmF0ZSBkczogRHJhZ1N0YXRlID0gbnVsbDtcclxuICAgIHByaXZhdGUgcGx1Z2luOiBNaW5kTm9kZVBsdWdpbjtcclxuICAgIHByaXZhdGUgdWlPayA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBib3hTZWwgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgYnN4ID0gMDtcclxuICAgIHByaXZhdGUgYnN5ID0gMDtcclxuICAgIHByaXZhdGUgYmN4ID0gMDtcclxuICAgIHByaXZhdGUgYmN5ID0gMDtcclxuICAgIHByaXZhdGUgYm94U2hpZnQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgYm94RWw6IFNWR1JlY3RFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHBvcENsb3NlOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgbWRNb2RlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG1kQnRuOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjbGlwYm9hcmQ6IHsgZGF0YTogc3RyaW5nOyBpc1Jvb3Q6IGJvb2xlYW47IGN1dDogYm9vbGVhbiB9IHwgbnVsbCA9XHJcbiAgICAgICAgbnVsbDtcclxuICAgIHByaXZhdGUgYWN0aXZlTWVudTogTWVudSB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzZWFyY2hCYXI6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNlYXJjaFJlc3VsdHM6IE1pbmROb2RlRGF0YVtdID0gW107XHJcbiAgICBwcml2YXRlIHNlYXJjaElkeCA9IDA7XHJcbiAgICBwcml2YXRlIG9sZFBvcyA9IG5ldyBNYXA8c3RyaW5nLCB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+KCk7XHJcbiAgICBwcml2YXRlIGFuaW1JZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGxpdmVUQTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtZFNuYXBzaG90OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgem9vbUxhYmVsOiBIVE1MU3BhbkVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgcHJveHlUQTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtZE91dGxpbmVUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE1pbmROb2RlUGx1Z2luKSB7XHJcbiAgICAgICAgc3VwZXIobGVhZik7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IHBsdWdpbi5nZXRTdHlsZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXQga2IoKTogS2V5QmluZGluZ3Mge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5rZXlCaW5kaW5ncztcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0UmFpbmJvdygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuc3R5bGUucmFpbmJvd1BhbGV0dGU7XHJcbiAgICAgICAgaWYgKHRoaXMuc3R5bGUuY3VzdG9tUmFpbmJvd3M/LltwXSkgcmV0dXJuIHRoaXMuc3R5bGUuY3VzdG9tUmFpbmJvd3NbcF07XHJcbiAgICAgICAgcmV0dXJuIFJBSU5CT1dfUEFMRVRURVNbcF0gfHwgUkFJTkJPV19QQUxFVFRFUy5jbGFzc2ljO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoZXhUb1JnYmEoaGV4OiBzdHJpbmcsIGFscGhhOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGggPSBoZXgucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcbiAgICAgICAgY29uc3QgciA9IHBhcnNlSW50KGguc3Vic3RyaW5nKDAsIDIpLCAxNik7XHJcbiAgICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKDIsIDQpLCAxNik7XHJcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGguc3Vic3RyaW5nKDQsIDYpLCAxNik7XHJcbiAgICAgICAgaWYgKGlzTmFOKHIpIHx8IGlzTmFOKGcpIHx8IGlzTmFOKGIpKVxyXG4gICAgICAgICAgICByZXR1cm4gYHJnYmEoNTksMTMwLDI0Niwke2FscGhhfSlgO1xyXG4gICAgICAgIHJldHVybiBgcmdiYSgke3J9LCR7Z30sJHtifSwke2FscGhhfSlgO1xyXG4gICAgfVxyXG4gICAgLyoqIE5vdGlmeSB0aGUgY3VzdG9tIG91dGxpbmUgcGFuZWwgdG8gcmUtcmVhZCB0aGUgbm9kZSB0cmVlLiAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVPdXRsaW5lSGVhZGluZ3MoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaE91dGxpbmUoKTtcclxuICAgIH1cclxuICAgIC8qKiBSZWZyZXNoIG91dGxpbmUgd2hlbiB0aGUgdmlldyBpcyBjbG9zaW5nICh3aWxsIHNob3cgZW1wdHkpLiAqL1xyXG4gICAgcHJpdmF0ZSBjbGVhck91dGxpbmVIZWFkaW5ncygpIHtcclxuICAgICAgICAvLyBEZWxheSBzbGlnaHRseSBzbyB0aGUgb3V0bGluZSBjYW4gZGV0ZWN0IHRoZSB2aWV3IGlzIGdvbmVcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucGx1Z2luLnJlZnJlc2hPdXRsaW5lKCksIDUwKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgbWtSb290KHR4dDogc3RyaW5nKTogTWluZE5vZGVEYXRhIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcclxuICAgICAgICAgICAgdGV4dDogdHh0LFxyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5jYWxjVyh0eHQsIHRydWUpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY2FsY0godHh0LCB0cnVlKSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICBpc1Jvb3Q6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldFZpZXdUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiBWSUVXX1RZUEVfTUlORE1BUDtcclxuICAgIH1cclxuICAgIGdldERpc3BsYXlUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUuYmFzZW5hbWUgOiBcIk1pbmRaSlwiO1xyXG4gICAgfVxyXG4gICAgZ2V0SWNvbigpIHtcclxuICAgICAgICByZXR1cm4gXCJuZXR3b3JrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld0RhdGEoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5lZGl0SWQgJiYgdGhpcy5saXZlVEEpIHtcclxuICAgICAgICAgICAgY29uc3QgbmQgPSB0aGlzLmZBbGwodGhpcy5lZGl0SWQpO1xyXG4gICAgICAgICAgICBpZiAobmQpIG5kLnRleHQgPSB0aGlzLmxpdmVUQS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHsgcm9vdE5vZGVzOiB0aGlzLnJvb3RzIH0sIG51bGwsIDIpO1xyXG4gICAgfVxyXG4gICAgc2V0Vmlld0RhdGEoZGF0YTogc3RyaW5nLCBjbGVhcjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjbGVhcikge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMudW5kb1MgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5yZWRvUyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzID1cclxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocC5yb290Tm9kZXMpICYmIHAucm9vdE5vZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgID8gcC5yb290Tm9kZXNcclxuICAgICAgICAgICAgICAgICAgICA6IFt0aGlzLm1rUm9vdCh0aGlzLnBsdWdpbi5nZXRSb290TmFtZSgpKV07XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdHMgPSBbdGhpcy5ta1Jvb3QodGhpcy5wbHVnaW4uZ2V0Um9vdE5hbWUoKSldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yb290cy5sZW5ndGggJiYgIXRoaXMuc2VsSWQpIHRoaXMuc2VsSWQgPSB0aGlzLnJvb3RzWzBdLmlkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3V0bGluZUhlYWRpbmdzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMudWlPaykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZE1vZGUpIHRoaXMucmVuZGVyTWQoKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmZpdEFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMucm9vdHMgPSBbXTtcclxuICAgICAgICB0aGlzLnNlbElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tdWx0aVNlbC5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkb1NhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0U2F2ZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3V0bGluZUhlYWRpbmdzKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZpdEFsbCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2MgfHwgIXRoaXMucm9vdHMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgcmMgPSB0aGlzLmNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIC8vIEd1YXJkOiBjb250YWluZXIgbm90IHlldCBsYWlkIG91dCBcdTIwMTQgcmV0cnkgb24gbmV4dCBmcmFtZVxyXG4gICAgICAgIGlmIChyYy53aWR0aCA8IDEgfHwgcmMuaGVpZ2h0IDwgMSkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5maXRBbGwoKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHRoaXMuZG9MYXlvdXQocik7XHJcbiAgICAgICAgbGV0IHgxID0gSW5maW5pdHksXHJcbiAgICAgICAgICAgIHgyID0gLUluZmluaXR5LFxyXG4gICAgICAgICAgICB5MSA9IEluZmluaXR5LFxyXG4gICAgICAgICAgICB5MiA9IC1JbmZpbml0eTtcclxuICAgICAgICBjb25zdCB2aXMgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHgxID0gTWF0aC5taW4oeDEsIG4ueCAtIG4ud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgeDIgPSBNYXRoLm1heCh4Miwgbi54ICsgbi53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICB5MSA9IE1hdGgubWluKHkxLCBuLnkgLSBuLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICB5MiA9IE1hdGgubWF4KHkyLCBuLnkgKyBuLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgdmlzKGMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHZpcyhyKTtcclxuICAgICAgICB0aGlzLnpvb20gPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgTWF0aC5taW4ocmMud2lkdGggLyAoeDIgLSB4MSArIDEwMCksIHJjLmhlaWdodCAvICh5MiAtIHkxICsgMTAwKSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoIWlzRmluaXRlKHRoaXMuem9vbSkgfHwgdGhpcy56b29tIDw9IDApIHRoaXMuem9vbSA9IDE7XHJcbiAgICAgICAgdGhpcy5wYW5YID0gcmMud2lkdGggLyAyIC0gKCh4MSArIHgyKSAvIDIpICogdGhpcy56b29tO1xyXG4gICAgICAgIHRoaXMucGFuWSA9IHJjLmhlaWdodCAvIDIgLSAoKHkxICsgeTIpIC8gMikgKiB0aGlzLnpvb207XHJcbiAgICAgICAgdGhpcy51cGRUeCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZvY3VzTm9kZShuZDogTWluZE5vZGVEYXRhKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNjKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgciA9IHRoaXMuY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdGhpcy5wYW5YID0gci53aWR0aCAvIDIgLSBuZC54ICogdGhpcy56b29tIC0gci53aWR0aCAqIDAuMTc7XHJcbiAgICAgICAgdGhpcy5wYW5ZID0gci5oZWlnaHQgLyAyIC0gbmQueSAqIHRoaXMuem9vbSAtIHIuaGVpZ2h0ICogMC4wNTtcclxuICAgICAgICB0aGlzLnVwZFR4KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVmcmVzaFVJKCkge1xyXG4gICAgICAgIGlmICghdGhpcy51aU9rKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMudGJFbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRiRWwuZW1wdHkoKTtcclxuICAgICAgICAgICAgdGhpcy5idWlsZFRiKHRoaXMudGJFbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlUb29sYmFyU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb29sYmFyVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlDYW52YXNCZygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGV2UGFuZWwoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqIEV4cG9zZSB0aGUgY3VycmVudCByb290IG5vZGVzIGZvciB0aGUgb3V0bGluZSBwYW5lbC4gKi9cclxuICAgIHB1YmxpYyBnZXRSb290cygpOiBNaW5kTm9kZURhdGFbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdHM7XHJcbiAgICB9XHJcbiAgICAvKiogU2VsZWN0IGEgbm9kZSBieSBpZCBhbmQgcGFuIHRoZSBjYW52YXMgdG8gY2VudGVyIGl0LiAqL1xyXG4gICAgcHVibGljIHNlbGVjdEFuZEZvY3VzTm9kZShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbmQgPSB0aGlzLmZBbGwoaWQpO1xyXG4gICAgICAgIGlmICghbmQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5jb21taXRFZGl0KSB0aGlzLmNvbW1pdEVkaXQoKTtcclxuICAgICAgICB0aGlzLnNlbDEoaWQpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNOb2RlKG5kKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxyXG4gICAgYXN5bmMgb25PcGVuKCkge1xyXG4gICAgICAgIGNvbnN0IGN0ID0gdGhpcy5jb250YWluZXJFbC5jaGlsZHJlblsxXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjdC5lbXB0eSgpO1xyXG4gICAgICAgIGN0LmFkZENsYXNzKFwibXotdmlldy1jdFwiKTtcclxuICAgICAgICAvLyBwYWRkaW5nIG92ZXJyaWRlIG1vdmVkIHRvIHN0eWxlcy5jc3NcclxuICAgICAgICB0aGlzLnRiRWwgPSBjdC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmFwcGx5VG9vbGJhclN0eWxlKCk7XHJcbiAgICAgICAgdGhpcy5idWlsZFRiKHRoaXMudGJFbCk7XHJcbiAgICAgICAgdGhpcy5zdmdDdCA9IGN0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgYXR0cjogeyB0YWJpbmRleDogXCIwXCIgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN2Z0N0LmFkZENsYXNzKFwibXotc3ZnLWN0XCIpO1xyXG4gICAgICAgIHRoaXMuY2MgPSB0aGlzLnN2Z0N0O1xyXG4gICAgICAgIC8vIEZJWDogcHJldmVudCBicm93c2VyIGZyb20gc2Nyb2xsaW5nIHRoZSBjb250YWluZXIgXHUyMDE0IHBhbm5pbmcgdXNlcyBDU1MgdHJhbnNmb3JtIG9ubHlcclxuICAgICAgICB0aGlzLnN2Z0N0LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN2Z0N0IS5zY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnN2Z0N0IS5zY3JvbGxMZWZ0ID0gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFwcGx5Q2FudmFzQmcoKTtcclxuICAgICAgICB0aGlzLnN2Z0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgIFwic3ZnXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnN2Z0VsLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICAgICAgICB0aGlzLnN2Z0VsLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjEwMCVcIik7XHJcbiAgICAgICAgLy8gU1ZHIGRpc3BsYXkgYmxvY2sgaXMgZGVmYXVsdFxyXG4gICAgICAgIHRoaXMuY2MuYXBwZW5kQ2hpbGQodGhpcy5zdmdFbCk7XHJcbiAgICAgICAgdGhpcy5nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIik7XHJcbiAgICAgICAgdGhpcy5zdmdFbC5hcHBlbmRDaGlsZCh0aGlzLmdFbCk7XHJcbiAgICAgICAgdGhpcy5lZGdlc0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgXCJnXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmdFbC5hcHBlbmRDaGlsZCh0aGlzLmVkZ2VzRyk7XHJcbiAgICAgICAgdGhpcy5ub2Rlc0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgXCJnXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmdFbC5hcHBlbmRDaGlsZCh0aGlzLm5vZGVzRyk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5RyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICBcImdcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ0VsLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheUcpO1xyXG4gICAgICAgIHRoaXMubWRDdCA9IGN0LmNyZWF0ZUVsKFwidGV4dGFyZWFcIikgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgICAgICB0aGlzLm1kQ3QuYWRkQ2xhc3MoXCJtei1tZC10YVwiKTtcclxuICAgICAgICB0aGlzLm1kQ3QuYWRkQ2xhc3MoXCJtei1oaWRkZW5cIik7XHJcbiAgICAgICAgLy8gRGVib3VuY2VkIG91dGxpbmUgdXBkYXRlIHdoaWxlIGVkaXRpbmcgaW4gTUQgbW9kZVxyXG4gICAgICAgIHRoaXMubWRDdC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubWRNb2RlKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1kT3V0bGluZVRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5tZE91dGxpbmVUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMubWRPdXRsaW5lVGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVPdXRsaW5lSGVhZGluZ3MoKSxcclxuICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJpbmRFdnRzKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2tkLCB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2t1LCB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5fbXUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMudWlPayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb29sYmFyVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGV2UGFuZWwoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm9vdHMubGVuZ3RoKSB0aGlzLmZpdEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNjPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXRcclxuICAgIGFzeW5jIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWl0RWRpdCkgdGhpcy5jb21taXRFZGl0KCk7XHJcbiAgICAgICAgdGhpcy5jbGVhclByb3h5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMubWRPdXRsaW5lVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLm1kT3V0bGluZVRpbWVyKTtcclxuICAgICAgICB0aGlzLmNsZWFyT3V0bGluZUhlYWRpbmdzKCk7XHJcbiAgICAgICAgdGhpcy51aU9rID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGFjZURvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRyYWdDdiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGl2ZVRBID0gbnVsbDtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5fa2QsIHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5fa3UsIHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLl9tdSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbUlkKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseUNhbnZhc0JnKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN2Z0N0KVxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1jYW52YXMtYmdcIjogdGhpcy5zdHlsZS5jYW52YXNCZyB9KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKFtrLCB2XSkgPT4gdGhpcy5zdmdDdC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSxcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXBwbHlUb29sYmFyU3R5bGUoKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuc3R5bGU7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcy50b29sYmFyUG9zaXRpb24gPT09IFwiYm90dG9tXCIgPyAyIDogMDtcclxuICAgICAgICBjb25zdCBib3JkZXJTaWRlID0gcy50b29sYmFyUG9zaXRpb24gPT09IFwiYm90dG9tXCIgPyBcInRvcFwiIDogXCJib3R0b21cIjtcclxuICAgICAgICBjb25zdCBiZHJDID0gcy50b29sYmFyQm9yZGVyQ29sb3IgfHwgXCIjZTBlMGUwXCI7XHJcbiAgICAgICAgY29uc3QgYmRyVyA9IHMudG9vbGJhckJvcmRlcldpZHRoID8/IDE7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIC0tIGR5bmFtaWMgdG9vbGJhciBjb2xvcnMgcmVxdWlyZSBpbmxpbmUgc3R5bGVcclxuICAgICAgICB0aGlzLnRiRWwuc3R5bGUuY3NzVGV4dCA9IGBoZWlnaHQ6NDJweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo2cHg7ZmxleC1zaHJpbms6MDtwYWRkaW5nOiR7cy50b29sYmFyUGFkVG9wfXB4ICR7cy50b29sYmFyUGFkUmlnaHR9cHggJHtzLnRvb2xiYXJQYWRCb3R0b219cHggJHtzLnRvb2xiYXJQYWRMZWZ0fXB4O2JhY2tncm91bmQ6JHtzLnRvb2xiYXJCZ0NvbG9yfTtib3JkZXItJHtib3JkZXJTaWRlfToke2Jkcld9cHggc29saWQgJHtiZHJDfTtvcmRlcjoke3Bvc307YDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlVG9vbGJhclZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGJFbClcclxuICAgICAgICAgICAgdGhpcy50YkVsLnRvZ2dsZUNsYXNzKFxyXG4gICAgICAgICAgICAgICAgXCJtei1oaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICF0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhcixcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTZWwoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbElkID09PSBpZCB8fCB0aGlzLm11bHRpU2VsLmhhcyhpZCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNsclNlbCgpIHtcclxuICAgICAgICB0aGlzLnNlbElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNlbDEoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWwuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnNlbElkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRvZ1NlbChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlTZWwuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkID09PSBpZClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsSWQgPSB0aGlzLm11bHRpU2VsLnNpemUgPyBbLi4udGhpcy5tdWx0aVNlbF1bMF0gOiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkICYmICF0aGlzLm11bHRpU2VsLmhhcyh0aGlzLnNlbElkKSlcclxuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlTZWwuYWRkKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmFkZChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFsbFNlbCgpOiBTZXQ8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgcyA9IG5ldyBTZXQodGhpcy5tdWx0aVNlbCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHMuYWRkKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc011bHRpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbFNlbCgpLnNpemUgPiAxO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjbG9zZVBvcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3BDbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcENsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wQ2xvc2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlRGV2UGFuZWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZlbG9wZXJNb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldkVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldkVsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZFbCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZGV2RWwgJiYgdGhpcy5zdmdDdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRldkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZFbC5hZGRDbGFzcyhcIm16LWRldi1wYW5lbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5zdmdDdC5hcHBlbmRDaGlsZCh0aGlzLmRldkVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2RWwpIHtcclxuICAgICAgICAgICAgY29uc3QgbmQgPSB0aGlzLnNlbElkID8gdGhpcy5mQWxsKHRoaXMuc2VsSWQpIDogbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5kZXZFbC50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbDogdGhpcy5zZWxJZD8uc3Vic3RyaW5nKDAsIDgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRJZDogdGhpcy5lZGl0SWQ/LnN1YnN0cmluZygwLCA4KSxcclxuICAgICAgICAgICAgICAgICAgICB6b29tOiArdGhpcy56b29tLnRvRml4ZWQoMyksXHJcbiAgICAgICAgICAgICAgICAgICAgcGFuOiBbK3RoaXMucGFuWC50b0ZpeGVkKDApLCArdGhpcy5wYW5ZLnRvRml4ZWQoMCldLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RzOiB0aGlzLnJvb3RzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICBub2RlOiBuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbmQudGV4dC5zdWJzdHJpbmcoMCwgMjApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiArbmQueC50b0ZpeGVkKDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiArbmQueS50b0ZpeGVkKDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogbmQuY2hpbGRyZW4ubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkVGIodGI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGIuZW1wdHkoKTtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5zdHlsZTtcclxuICAgICAgICBjb25zdCBidG5CZyA9IHMudG9vbGJhckJ0bkJnQ29sb3I7XHJcbiAgICAgICAgY29uc3QgYnRuQmRyID0gcy50b29sYmFyQnRuQm9yZGVyQ29sb3I7XHJcbiAgICAgICAgY29uc3QgYnRuQmRyUyA9IHMudG9vbGJhckJ0bkJvcmRlclN0eWxlO1xyXG4gICAgICAgIGNvbnN0IGJ0blR4ID0gcy50b29sYmFyQnRuVGV4dENvbG9yO1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICh0eHQ6IHN0cmluZywgdGlwOiBzdHJpbmcsIGZuOiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSB0Yi5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRpdGxlOiB0aXAgfSk7XHJcbiAgICAgICAgICAgIGIuYWRkQ2xhc3MoXCJtei10Yi1idG5cIik7XHJcbiAgICAgICAgICAgIGIuc3R5bGUuYm9yZGVyID0gYDFweCAke2J0bkJkclN9ICR7YnRuQmRyfWA7XHJcbiAgICAgICAgICAgIGIuc3R5bGUuYmFja2dyb3VuZCA9IGJ0bkJnO1xyXG4gICAgICAgICAgICBiLnN0eWxlLmNvbG9yID0gYnRuVHg7XHJcbiAgICAgICAgICAgIGIuaW5uZXJUZXh0ID0gdHh0O1xyXG4gICAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmbik7XHJcbiAgICAgICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT5cclxuICAgICAgICAgICAgICAgIGIuYWRkQ2xhc3MoXCJtei10Yi1idG4taG92ZXJcIiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT5cclxuICAgICAgICAgICAgICAgIGIucmVtb3ZlQ2xhc3MoXCJtei10Yi1idG4taG92ZXJcIiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuKHQoXCJ0Yi5yb290XCIpLCB0KFwidGIubmV3Um9vdFwiKSwgKCkgPT4gdGhpcy5hZGRSb290KCkpO1xyXG4gICAgICAgIGJ0bih0KFwidGIudW5kb1wiKSwgdChcInRiLnRpcFVuZG9cIiksICgpID0+IHRoaXMudW5kbygpKTtcclxuICAgICAgICBidG4odChcInRiLnJlZG9cIiksIHQoXCJ0Yi50aXBSZWRvXCIpLCAoKSA9PiB0aGlzLnJlZG8oKSk7XHJcbiAgICAgICAgY29uc3Qgc2VwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdGIuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGQuYWRkQ2xhc3MoXCJtei10Yi1zZXBcIik7XHJcbiAgICAgICAgICAgIGQuc3R5bGUuc2V0UHJvcGVydHkoXCItLW16LXNlcC1jb2xvclwiLCBidG5CZHIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VwKCk7XHJcbiAgICAgICAgdGhpcy5tZEJ0biA9IGJ0bih0KFwidGIubWRcIiksIHQoXCJ0Yi50aXBNZFwiKSwgKCkgPT4gdGhpcy50b2dnbGVNZCgpKTtcclxuICAgICAgICBidG4odChcInRiLnN0eWxlXCIpLCB0KFwidGIudGlwU3R5bGVcIiksICgpID0+IHRoaXMuc2hvd1N0eWxlTW9kYWwoKSk7XHJcbiAgICAgICAgYnRuKFwiXHVEODNEXHVEQzUzIFwiICsgdChcInRiLmZvY3VzXCIpLCB0KFwidGIudGlwRm9jdXNcIiksICgpID0+IHRoaXMuZm9jdXNTZWwoKSk7XHJcbiAgICAgICAgYnRuKFwiXHVEODNEXHVERDBEIFwiICsgdChcInRiLnNlYXJjaFwiKSwgdChcInRiLnRpcFNlYXJjaFwiKSwgKCkgPT5cclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTZWFyY2goKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGJ0bihcIlx1RDgzRFx1RENEMSBcIiArIHQoXCJvdXRsaW5lLnRpdGxlXCIpLCB0KFwib3V0bGluZS50aXRsZVwiKSwgKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ub3Blbk91dGxpbmVQYW5lbCgpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnRuKHQoXCJ0Yi5zZXR0aW5nc1wiKSwgdChcInRiLnRpcFNldHRpbmdzXCIpLCAoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5vcGVuUGx1Z2luU2V0dGluZ3MoKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNlcCgpO1xyXG4gICAgICAgIGJ0bihcIlx1MjIxMlwiLCB0KFwidGIuem9vbU91dFwiKSwgKCkgPT4gdGhpcy56b29tQnkoMC45KSk7XHJcbiAgICAgICAgdGhpcy56b29tTGFiZWwgPSB0Yi5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgdGhpcy56b29tTGFiZWwuYWRkQ2xhc3MoXCJtei10Yi16b29tXCIpO1xyXG4gICAgICAgIHRoaXMuem9vbUxhYmVsLmlubmVyVGV4dCA9IE1hdGgucm91bmQodGhpcy56b29tICogMTAwKSArIFwiJVwiO1xyXG4gICAgICAgIHRoaXMuem9vbUxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnpvb21UbygxKSk7XHJcbiAgICAgICAgYnRuKFwiK1wiLCB0KFwidGIuem9vbUluXCIpLCAoKSA9PiB0aGlzLnpvb21CeSgxLjEpKTtcclxuICAgICAgICBjb25zdCBoID0gdGIuY3JlYXRlRWwoXCJzcGFuXCIpO1xyXG4gICAgICAgIGguYWRkQ2xhc3MoXCJtei10Yi1oZWxwXCIpO1xyXG4gICAgICAgIGguaW5uZXJUZXh0ID0gdChcInRiLmhlbHBcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZvY3VzU2VsKCkge1xyXG4gICAgICAgIGxldCBuZDogTWluZE5vZGVEYXRhIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsSWQpIG5kID0gdGhpcy5mQWxsKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghbmQgJiYgdGhpcy5yb290cy5sZW5ndGgpIG5kID0gdGhpcy5yb290c1t0aGlzLnJvb3RzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzTm9kZShuZCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB0b2dnbGVNZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tZE1vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5tZE1vZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWRCdG4pIHRoaXMubWRCdG4uaW5uZXJUZXh0ID0gdChcInRiLm1kXCIpO1xyXG4gICAgICAgICAgICAvLyBSZXN0b3JlIGZyb20gc25hcHNob3QgaWYgdGV4dCB1bmNoYW5nZWQsIGVsc2UgcGFyc2VcclxuICAgICAgICAgICAgY29uc3QgbmV3TWQgPSB0aGlzLm1kQ3QudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZE1kID0gdGhpcy5tZFNuYXBzaG90ID8gdGhpcy5yb290czJtZEZyb21TbmFwKCkgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAob2xkTWQgJiYgbmV3TWQgPT09IG9sZE1kKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBubyBjaGFuZ2VzLCBrZWVwIG9yaWdpbmFsIHJvb3RzICovXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlTWQobmV3TWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWRTbmFwc2hvdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMubWRDdC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5zdmdDdC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLmRvTGF5b3V0KHIpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbW1pdEVkaXQpIHRoaXMuY29tbWl0RWRpdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1kTW9kZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1kQnRuKSB0aGlzLm1kQnRuLmlubmVyVGV4dCA9IHQoXCJ0Yi5tYXBcIik7XHJcbiAgICAgICAgICAgIHRoaXMubWRTbmFwc2hvdCA9IEpTT04uc3RyaW5naWZ5KHRoaXMucm9vdHMpO1xyXG4gICAgICAgICAgICB0aGlzLnN2Z0N0LnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLm1kQ3QudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLm1kQ3QudmFsdWUgPSB0aGlzLnJvb3RzMm1kKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT3V0bGluZUhlYWRpbmdzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByb290czJtZEZyb21TbmFwKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgICAgIGlmICghdGhpcy5tZFNuYXBzaG90KSByZXR1cm4gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBycyA9IEpTT04ucGFyc2UodGhpcy5tZFNuYXBzaG90KSBhcyBNaW5kTm9kZURhdGFbXTtcclxuICAgICAgICAgICAgbGV0IG0gPSBcIlwiO1xyXG4gICAgICAgICAgICBjb25zdCBmbXRSaWdodCA9IChcclxuICAgICAgICAgICAgICAgIG5kOiBNaW5kTm9kZURhdGEsXHJcbiAgICAgICAgICAgICAgICBkZXB0aDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgc2liSWR4OiBudW1iZXIsXHJcbiAgICAgICAgICAgICk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eCA9IG5kLnRleHQucmVwbGFjZSgvXFxuL2csIFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDEpIGxpbmUgPSBcIiMjIFwiICsgdHg7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZXB0aCA9PT0gMikgbGluZSA9IFwiIyMjIFwiICsgdHg7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZXB0aCA9PT0gMykgbGluZSA9IFwiIyMjIyMgXCIgKyB0eDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlcHRoID09PSA0KSBsaW5lID0gXCJcXHRcIiArIChzaWJJZHggKyAxKSArIFwiLiBcIiArIHR4O1xyXG4gICAgICAgICAgICAgICAgZWxzZSBsaW5lID0gXCJcXHRcIi5yZXBlYXQoZGVwdGggLSAzKSArIFwiLSBcIiArIHR4O1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBsaW5lICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAgciArPSBmbXRSaWdodChuZC5jaGlsZHJlbltpXSwgZGVwdGggKyAxLCBpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBmbXRMZWZ0ID0gKG5kOiBNaW5kTm9kZURhdGEsIGRlcHRoOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHggPSBuZC50ZXh0LnJlcGxhY2UoL1xcbi9nLCBcIiBcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gXCJcXHRcIi5yZXBlYXQoZGVwdGggLSAxKSArIFwiLyBcIiArIHR4O1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBsaW5lICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuZC5jaGlsZHJlbikgciArPSBmbXRMZWZ0KGMsIGRlcHRoICsgMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHJzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRDaCA9IHIuY2hpbGRyZW4uZmlsdGVyKChjKSA9PiBjLnNpZGUgIT09IFwibGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRDaCA9IHIuY2hpbGRyZW4uZmlsdGVyKChjKSA9PiBjLnNpZGUgPT09IFwibGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIG0gKz0gXCIjIFwiICsgci50ZXh0LnJlcGxhY2UoL1xcbi9nLCBcIiBcIikgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByaWdodENoLmxlbmd0aDsgaisrKVxyXG4gICAgICAgICAgICAgICAgICAgIG0gKz0gZm10UmlnaHQocmlnaHRDaFtqXSwgMSwgaik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgbGVmdENoKSBtICs9IGZtdExlZnQoYywgMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHJzLmxlbmd0aCAtIDEpIG0gKz0gXCJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByb290czJtZCgpIHtcclxuICAgICAgICBsZXQgbSA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnJvb3RzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodENoID0gci5jaGlsZHJlbi5maWx0ZXIoKGMpID0+IGMuc2lkZSAhPT0gXCJsZWZ0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0Q2ggPSByLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlID09PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgIG0gKz0gXCIjIFwiICsgci50ZXh0LnJlcGxhY2UoL1xcbi9nLCBcIiBcIikgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJpZ2h0Q2gubGVuZ3RoOyBqKyspXHJcbiAgICAgICAgICAgICAgICBtICs9IHRoaXMubjJtZFJpZ2h0KHJpZ2h0Q2hbal0sIDEsIGopO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgbGVmdENoKSBtICs9IHRoaXMubjJtZExlZnQoYywgMSk7XHJcbiAgICAgICAgICAgIGlmIChpIDwgdGhpcy5yb290cy5sZW5ndGggLSAxKSBtICs9IFwiXFxuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBuMm1kUmlnaHQobmQ6IE1pbmROb2RlRGF0YSwgZGVwdGg6IG51bWJlciwgc2liSWR4OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHR4ID0gbmQudGV4dC5yZXBsYWNlKC9cXG4vZywgXCIgXCIpO1xyXG4gICAgICAgIGxldCBsaW5lOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKGRlcHRoID09PSAxKSBsaW5lID0gXCIjIyBcIiArIHR4O1xyXG4gICAgICAgIGVsc2UgaWYgKGRlcHRoID09PSAyKSBsaW5lID0gXCIjIyMgXCIgKyB0eDtcclxuICAgICAgICBlbHNlIGlmIChkZXB0aCA9PT0gMykgbGluZSA9IFwiIyMjIyMgXCIgKyB0eDtcclxuICAgICAgICBlbHNlIGlmIChkZXB0aCA9PT0gNCkgbGluZSA9IFwiXFx0XCIgKyAoc2liSWR4ICsgMSkgKyBcIi4gXCIgKyB0eDtcclxuICAgICAgICBlbHNlIGxpbmUgPSBcIlxcdFwiLnJlcGVhdChkZXB0aCAtIDMpICsgXCItIFwiICsgdHg7XHJcbiAgICAgICAgbGV0IHIgPSBsaW5lICsgXCJcXG5cIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5kLmNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICByICs9IHRoaXMubjJtZFJpZ2h0KG5kLmNoaWxkcmVuW2ldLCBkZXB0aCArIDEsIGkpO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBuMm1kTGVmdChuZDogTWluZE5vZGVEYXRhLCBkZXB0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCB0eCA9IG5kLnRleHQucmVwbGFjZSgvXFxuL2csIFwiIFwiKTtcclxuICAgICAgICBjb25zdCBsaW5lID0gXCJcXHRcIi5yZXBlYXQoZGVwdGggLSAxKSArIFwiLyBcIiArIHR4O1xyXG4gICAgICAgIGxldCByID0gbGluZSArIFwiXFxuXCI7XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG5kLmNoaWxkcmVuKSByICs9IHRoaXMubjJtZExlZnQoYywgZGVwdGggKyAxKTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVuZGVyTWQoKSB7XHJcbiAgICAgICAgdGhpcy5tZEN0LnZhbHVlID0gdGhpcy5yb290czJtZCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBwYXJzZU1kKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGwpID0+IGwudHJpbSgpKTtcclxuICAgICAgICBpZiAoIWxpbmVzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IG5yOiBNaW5kTm9kZURhdGFbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjdXI6IE1pbmROb2RlRGF0YSB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IHN0azogW251bWJlciwgTWluZE5vZGVEYXRhXVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XHJcbiAgICAgICAgICAgIGxldCBkZXB0aDogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgdHh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGxldCBzaWRlOiBcImxlZnRcIiB8IFwicmlnaHRcIiA9IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgLy8gSGVhZGluZyBmb3JtYXQ6ICMgPSByb290LCAjIyA9IGRlcHRoMSwgIyMjID0gZGVwdGgyLCA0KyAjID0gZGVwdGgzXHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmdNID0gbGluZS5tYXRjaCgvXigjezEsfSlcXHMrKC4qKS8pO1xyXG4gICAgICAgICAgICBpZiAoaGVhZGluZ00pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsID0gaGVhZGluZ01bMV0ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdHh0ID0gaGVhZGluZ01bMl0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxldmVsID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUm9vdCBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgY3VyID0gdGhpcy5ta1Jvb3QodHh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ci54ID0gbnJbbnIubGVuZ3RoIC0gMV0ueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyLnkgPSBucltuci5sZW5ndGggLSAxXS55ICsgMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBuci5wdXNoKGN1cik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RrLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RrLnB1c2goWzAsIGN1cl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gIyMgPSBkZXB0aDEsICMjIyA9IGRlcHRoMiwgIyMjIysgPSBkZXB0aDNcclxuICAgICAgICAgICAgICAgIGRlcHRoID0gTWF0aC5taW4obGV2ZWwgLSAxLCAzKTtcclxuICAgICAgICAgICAgICAgIHNpZGUgPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMZWZ0LXNpZGUgbWFya2VyOiAvXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0TSA9IGxpbmUubWF0Y2goL14oXFx0KilcXC8gKC4qKS8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnRNKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGggPSBsZWZ0TVsxXS5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHR4dCA9IGxlZnRNWzJdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlID0gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE51bWJlcmVkIGxpc3QgKGRlcHRoIDQpOiBcXHQxLiB0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtTSA9IGxpbmUubWF0Y2goL14oXFx0KylcXGQrXFwuXFxzKyguKikvKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtTSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IG51bU1bMV0ubGVuZ3RoICsgMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gbnVtTVsyXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGUgPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVsbGV0IGxpc3QgKGRlcHRoIDUrKTogXFx0XFx0LSB0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1bGxldE0gPSBsaW5lLm1hdGNoKC9eKFxcdCspLVxccysoLiopLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWxsZXRNKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IGJ1bGxldE1bMV0ubGVuZ3RoICsgMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IGJ1bGxldE1bMl0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZSA9IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExlZ2FjeTogb2xkIC0gb3IgKiBtYXJrZXJzIChiYWNrd2FyZCBjb21wYXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRNID0gbGluZS5tYXRjaCgvXihcXHQqKShbLSpdKVxccysoLiopLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkTSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoID0gb2xkTVsxXS5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IG9sZE1bM10udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGUgPSBvbGRNWzJdID09PSBcIipcIiA/IFwibGVmdFwiIDogXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGFpbiB0ZXh0ID0gcm9vdCAobGVnYWN5IGZvcm1hdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQgPSBsaW5lLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXR4dCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyID0gdGhpcy5ta1Jvb3QodHh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ci54ID0gbnJbbnIubGVuZ3RoIC0gMV0ueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyLnkgPSBucltuci5sZW5ndGggLSAxXS55ICsgMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuci5wdXNoKGN1cik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RrLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RrLnB1c2goWzAsIGN1cl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5kOiBNaW5kTm9kZURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHR4dCxcclxuICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuY2FsY1codHh0LCBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY2FsY0godHh0LCBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgICAgICBzaWRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB3aGlsZSAoc3RrLmxlbmd0aCAmJiBzdGtbc3RrLmxlbmd0aCAtIDFdWzBdID49IGRlcHRoKSBzdGsucG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChzdGsubGVuZ3RoKSBzdGtbc3RrLmxlbmd0aCAtIDFdWzFdLmNoaWxkcmVuLnB1c2gobmQpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChjdXIpIGN1ci5jaGlsZHJlbi5wdXNoKG5kKTtcclxuICAgICAgICAgICAgc3RrLnB1c2goW2RlcHRoLCBuZF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobnIubGVuZ3RoKSB0aGlzLnJvb3RzID0gbnI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRSb290KHRleHQ/OiBzdHJpbmcsIHg/OiBudW1iZXIsIHk/OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgY29uc3QgbiA9IHRoaXMubWtSb290KHRleHQgPz8gdGhpcy5wbHVnaW4uZ2V0Um9vdE5hbWUoKSk7XHJcbiAgICAgICAgY29uc3QgbGFzdCA9IHRoaXMucm9vdHNbdGhpcy5yb290cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAvLyBDb21wdXRlIGJvdHRvbS1tb3N0IFkgaW5jbHVkaW5nIGFsbCBkZXNjZW5kYW50cyBvZiBsYXN0IHJvb3RcclxuICAgICAgICBsZXQgbWF4WSA9IDA7XHJcbiAgICAgICAgaWYgKGxhc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5kb0xheW91dChsYXN0KTtcclxuICAgICAgICAgICAgY29uc3QgZmluZE1heFkgPSAobmQ6IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm90ID0gbmQueSArIG5kLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm90ID4gbWF4WSkgbWF4WSA9IGJvdDtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuZC5jaGlsZHJlbikgZmluZE1heFkoYyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZpbmRNYXhZKGxhc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuLnggPSB4ID8/IChsYXN0ID8gbGFzdC54IDogMCk7XHJcbiAgICAgICAgbi55ID0geSA/PyAobGFzdCA/IG1heFkgKyA4MCA6IDApO1xyXG4gICAgICAgIHRoaXMucm9vdHMucHVzaChuKTtcclxuICAgICAgICB0aGlzLnNlbDEobi5pZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmVkaXRPbkNyZWF0ZSkgdGhpcy5lZGl0SWQgPSBuLmlkO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGUobik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzYXZlUygpIHtcclxuICAgICAgICB0aGlzLnVuZG9TLnB1c2goSlNPTi5zdHJpbmdpZnkodGhpcy5yb290cykpO1xyXG4gICAgICAgIGlmICh0aGlzLnVuZG9TLmxlbmd0aCA+IDUwKSB0aGlzLnVuZG9TLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5yZWRvUyA9IFtdO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1bmRvKCkge1xyXG4gICAgICAgIGlmICghdGhpcy51bmRvUy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJlZG9TLnB1c2goSlNPTi5zdHJpbmdpZnkodGhpcy5yb290cykpO1xyXG4gICAgICAgIHRoaXMucm9vdHMgPSBKU09OLnBhcnNlKHRoaXMudW5kb1MucG9wKCkhKTtcclxuICAgICAgICBpZiAodGhpcy5zZWxJZCAmJiAhdGhpcy5mQWxsKHRoaXMuc2VsSWQpKSB0aGlzLnNlbElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5yZWNhbGNBbGxTaXplcygpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVkbygpIHtcclxuICAgICAgICBpZiAoIXRoaXMucmVkb1MubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy51bmRvUy5wdXNoKEpTT04uc3RyaW5naWZ5KHRoaXMucm9vdHMpKTtcclxuICAgICAgICB0aGlzLnJvb3RzID0gSlNPTi5wYXJzZSh0aGlzLnJlZG9TLnBvcCgpISk7XHJcbiAgICAgICAgdGhpcy5yZWNhbGNBbGxTaXplcygpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuICAgIC8qKiBSZS1tZWFzdXJlIGV2ZXJ5IG5vZGUncyB3aWR0aC9oZWlnaHQgYmFzZWQgb24gY3VycmVudCBzdHlsZSBzbyB0aGF0XHJcbiAgICAgKiAgdGV4dCBuZXZlciBnZXRzIGNsaXBwZWQgb3IgZm9yY2Utd3JhcHBlZCBhZnRlciB1bmRvL3JlZG8uICovXHJcbiAgICBwcml2YXRlIHJlY2FsY0FsbFNpemVzKCkge1xyXG4gICAgICAgIGNvbnN0IHdhbGsgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUiA9ICEhbi5pc1Jvb3Q7XHJcbiAgICAgICAgICAgIG4ud2lkdGggPSB0aGlzLmNhbGNXKG4udGV4dCwgaXNSKTtcclxuICAgICAgICAgICAgbi5oZWlnaHQgPSB0aGlzLmNhbGNIKG4udGV4dCwgaXNSKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHdhbGsoYyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgd2FsayhyKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZkFsbChpZDogc3RyaW5nKTogTWluZE5vZGVEYXRhIHwgbnVsbCB7XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMuZk4oaWQsIHIpO1xyXG4gICAgICAgICAgICBpZiAoZikgcmV0dXJuIGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFwcGx5U3R5bGUocDogUGFydGlhbDxNaW5kTWFwU3R5bGU+KSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IHsgLi4udGhpcy5zdHlsZSwgLi4ucCB9O1xyXG4gICAgICAgIHRoaXMucGx1Z2luLnVwZGF0ZVN0eWxlKHApO1xyXG4gICAgICAgIHRoaXMuYXBwbHlDYW52YXNCZygpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgcC50b29sYmFyUG9zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJQYWRUb3AgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJQYWRSaWdodCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhclBhZEJvdHRvbSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhclBhZExlZnQgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJCZ0NvbG9yICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyQm9yZGVyQ29sb3IgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJCb3JkZXJXaWR0aCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICB0aGlzLmFwcGx5VG9vbGJhclN0eWxlKCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJCdG5CZ0NvbG9yICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyQnRuQm9yZGVyU3R5bGUgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJCdG5Cb3JkZXJDb2xvciAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhckJ0blRleHRDb2xvciAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGJFbC5lbXB0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVGIodGhpcy50YkVsKTtcclxuICAgICAgICAgICAgdGhpcy5hcHBseVRvb2xiYXJTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWNhbGN1bGF0ZSBhbGwgbm9kZSBzaXplcyB3aGVuIGZvbnQvbGF5b3V0IHJlbGF0ZWQgc3R5bGVzIGNoYW5nZVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgcC5ub2RlRm9udFNpemUgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnJvb3RGb250U2l6ZSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAubm9kZUZvbnRGYW1pbHkgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnJvb3RGb250RmFtaWx5ICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5ub2RlTWluV2lkdGggIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLm5vZGVNaW5IZWlnaHQgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnJvb3RNaW5XaWR0aCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAucm9vdE1pbkhlaWdodCAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAubm9kZVBhZFggIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLm5vZGVMaW5lSGVpZ2h0ICE9PSB1bmRlZmluZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNhbGNBbGxOb2RlU2l6ZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVjYWxjQWxsTm9kZVNpemVzKCkge1xyXG4gICAgICAgIGNvbnN0IHZpc2l0ID0gKG46IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1IgPSAhIW4uaXNSb290O1xyXG4gICAgICAgICAgICBuLndpZHRoID0gdGhpcy5jYWxjVyhuLnRleHQgfHwgXCIgXCIsIGlzUik7XHJcbiAgICAgICAgICAgIG4uaGVpZ2h0ID0gdGhpcy5jYWxjSChuLnRleHQgfHwgXCIgXCIsIGlzUik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB2aXNpdChjKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB2aXNpdChyKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXNzaWduUmFpbmJvd0NvbG9yKHBhcmVudDogTWluZE5vZGVEYXRhLCBjaGlsZDogTWluZE5vZGVEYXRhKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0eWxlLmNvbm5lY3Rpb25SYWluYm93IHx8ICFwYXJlbnQuaXNSb290KSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFjaGlsZC5jb25uZWN0aW9uQ29sb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgcmIgPSB0aGlzLmdldFJhaW5ib3coKTtcclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgICAgICAgICBjaGlsZC5jb25uZWN0aW9uQ29sb3IgPVxyXG4gICAgICAgICAgICAgICAgcmJbKGlkeCA+PSAwID8gaWR4IDogcGFyZW50LmNoaWxkcmVuLmxlbmd0aCkgJSByYi5sZW5ndGhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgbWF0Y2hLZXkoZTogS2V5Ym9hcmRFdmVudCwgY29tYm86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gY29tYm8udG9Mb3dlckNhc2UoKS5zcGxpdChcIitcIik7XHJcbiAgICAgICAgY29uc3QgbmVlZEN0cmwgPSBwYXJ0cy5pbmNsdWRlcyhcImN0cmxcIik7XHJcbiAgICAgICAgY29uc3QgbmVlZFNoaWZ0ID0gcGFydHMuaW5jbHVkZXMoXCJzaGlmdFwiKTtcclxuICAgICAgICBjb25zdCBuZWVkQWx0ID0gcGFydHMuaW5jbHVkZXMoXCJhbHRcIik7XHJcbiAgICAgICAgY29uc3QgbWFpbktleSA9XHJcbiAgICAgICAgICAgIHBhcnRzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChwKSA9PiBwICE9PSBcImN0cmxcIiAmJiBwICE9PSBcInNoaWZ0XCIgJiYgcCAhPT0gXCJhbHRcIixcclxuICAgICAgICAgICAgKVswXSB8fCBcIlwiO1xyXG4gICAgICAgIGlmIChuZWVkQ3RybCAhPT0gKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG5lZWRTaGlmdCAhPT0gZS5zaGlmdEtleSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChuZWVkQWx0ICE9PSBlLmFsdEtleSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGVLZXkgPSBlLmtleSA9PT0gXCIgXCIgPyBcInNwYWNlXCIgOiBlLmtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGVDb2RlID0gZS5jb2RlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgLy8gTWFwIGUuY29kZSB0byBiYXNlIHVuc2hpZnRlZCBrZXkgZm9yIHJlbGlhYmxlIG1hdGNoaW5nXHJcbiAgICAgICAgY29uc3QgY29kZU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgICAgICAgICAgZXF1YWw6IFwiPVwiLFxyXG4gICAgICAgICAgICBtaW51czogXCItXCIsXHJcbiAgICAgICAgICAgIGRpZ2l0MDogXCIwXCIsXHJcbiAgICAgICAgICAgIGRpZ2l0MTogXCIxXCIsXHJcbiAgICAgICAgICAgIGRpZ2l0MjogXCIyXCIsXHJcbiAgICAgICAgICAgIGRpZ2l0MzogXCIzXCIsXHJcbiAgICAgICAgICAgIGRpZ2l0NDogXCI0XCIsXHJcbiAgICAgICAgICAgIGRpZ2l0NTogXCI1XCIsXHJcbiAgICAgICAgICAgIGRpZ2l0NjogXCI2XCIsXHJcbiAgICAgICAgICAgIGRpZ2l0NzogXCI3XCIsXHJcbiAgICAgICAgICAgIGRpZ2l0ODogXCI4XCIsXHJcbiAgICAgICAgICAgIGRpZ2l0OTogXCI5XCIsXHJcbiAgICAgICAgICAgIGJyYWNrZXRsZWZ0OiBcIltcIixcclxuICAgICAgICAgICAgYnJhY2tldHJpZ2h0OiBcIl1cIixcclxuICAgICAgICAgICAgc2VtaWNvbG9uOiBcIjtcIixcclxuICAgICAgICAgICAgcXVvdGU6IFwiJ1wiLFxyXG4gICAgICAgICAgICBiYWNrcXVvdGU6IFwiYFwiLFxyXG4gICAgICAgICAgICBjb21tYTogXCIsXCIsXHJcbiAgICAgICAgICAgIHBlcmlvZDogXCIuXCIsXHJcbiAgICAgICAgICAgIHNsYXNoOiBcIi9cIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJhc2VLZXkgPSBjb2RlTWFwW2VDb2RlXSB8fCBcIlwiO1xyXG4gICAgICAgIHJldHVybiBlS2V5ID09PSBtYWluS2V5IHx8IGVDb2RlID09PSBtYWluS2V5IHx8IGJhc2VLZXkgPT09IG1haW5LZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXHUyNTUwXHUyNTUwXHUyNTUwIE1vZGFscyAtIGFsbCBjbG9zZSBvbiBFc2MgXHUyNTUwXHUyNTUwXHUyNTUwXHJcbiAgICBwcml2YXRlIHNob3dTdHlsZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQb3AoKTtcclxuICAgICAgICBjb25zdCBvdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgb3YuYWRkQ2xhc3MoXCJtei1tb2RhbC1vdmVybGF5XCIpO1xyXG4gICAgICAgIGNvbnN0IG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG0uYWRkQ2xhc3MoXCJtei1tb2RhbFwiKTtcclxuICAgICAgICBtLmNyZWF0ZUVsKFwiaDNcIiwgeyB0ZXh0OiB0KFwic20udGl0bGVcIikgfSkuYWRkQ2xhc3MoXCJtei1tb2RhbC10aXRsZVwiKTtcclxuICAgICAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgb3YucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIG0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wQ2xvc2UgPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wb3BDbG9zZSA9IGNsb3NlO1xyXG4gICAgICAgIG92LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XHJcbiAgICAgICAgbS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzZWMgPSAoaWNvbjogc3RyaW5nLCB0aXRsZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHMgPSBtLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBzLmFkZENsYXNzKFwibXotbW9kYWwtc2VjXCIpO1xyXG4gICAgICAgICAgICBzLmNyZWF0ZUVsKFwiZGl2XCIsIHsgdGV4dDogaWNvbiArIFwiIFwiICsgdGl0bGUgfSkuYWRkQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICBcIm16LW1vZGFsLXNlYy1oZHJcIixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBSID0gKFxyXG4gICAgICAgICAgICBwOiBIVE1MRWxlbWVudCxcclxuICAgICAgICAgICAgbDogc3RyaW5nLFxyXG4gICAgICAgICAgICBrOiBrZXlvZiBNaW5kTWFwU3R5bGUsXHJcbiAgICAgICAgICAgIHRwOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIG8/OiB7XHJcbiAgICAgICAgICAgICAgICBtaW4/OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBtYXg/OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPzogc3RyaW5nW107XHJcbiAgICAgICAgICAgICAgICBzdGVwPzogbnVtYmVyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBwLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByb3cuYWRkQ2xhc3MoXCJtei1tb2RhbC1yb3dcIik7XHJcbiAgICAgICAgICAgIHJvdy5jcmVhdGVFbChcImxhYmVsXCIsIHsgdGV4dDogbCB9KS5hZGRDbGFzcyhcIm16LW1vZGFsLWxibFwiKTtcclxuICAgICAgICAgICAgY29uc3QgY3YgPSB0aGlzLnN0eWxlW2tdO1xyXG4gICAgICAgICAgICBpZiAodHAgPT09IFwiY29sb3JcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IHJvdy5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpLnR5cGUgPSBcImNvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICBpLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY3YgPT09IFwic3RyaW5nXCIgJiYgY3Yuc3RhcnRzV2l0aChcInZhclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogU3RyaW5nKGN2KTtcclxuICAgICAgICAgICAgICAgIGkuYWRkQ2xhc3MoXCJtei1tb2RhbC1jb2xvclwiKTtcclxuICAgICAgICAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7IFtrXTogaS52YWx1ZSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRwID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gcm93LmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGkudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgICAgICAgICAgICBpLm1pbiA9IFN0cmluZyhvPy5taW4gPz8gMCk7XHJcbiAgICAgICAgICAgICAgICBpLm1heCA9IFN0cmluZyhvPy5tYXggPz8gOTk5KTtcclxuICAgICAgICAgICAgICAgIGlmIChvPy5zdGVwKSBpLnN0ZXAgPSBTdHJpbmcoby5zdGVwKTtcclxuICAgICAgICAgICAgICAgIGkudmFsdWUgPSBTdHJpbmcoY3YpO1xyXG4gICAgICAgICAgICAgICAgaS5hZGRDbGFzcyhcIm16LW1vZGFsLW51bVwiKTtcclxuICAgICAgICAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtrXTogTnVtYmVyKGkudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgUGFydGlhbDxNaW5kTWFwU3R5bGU+KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHAgPT09IFwic2VsZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSByb3cuY3JlYXRlRWwoXCJzZWxlY3RcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBzLmFkZENsYXNzKFwibXotbW9kYWwtc2VsXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB2IG9mIG8/Lm9wdGlvbnMgPz8gW10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AudmFsdWUgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wLnRleHQgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2ID09PSBTdHJpbmcoY3YpKSBvcC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5hcHBlbmRDaGlsZChvcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoeyBba106IHMudmFsdWUgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0cCA9PT0gXCJ0b2dnbGVcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2IgPSByb3cuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgY2IudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgICAgIGNiLmNoZWNrZWQgPSAhIWN2O1xyXG4gICAgICAgICAgICAgICAgY2IuYWRkQ2xhc3MoXCJtei1tb2RhbC1jaGtcIik7XHJcbiAgICAgICAgICAgICAgICBjYi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2tdOiBjYi5jaGVja2VkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgUGFydGlhbDxNaW5kTWFwU3R5bGU+KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHMxID0gc2VjKFwiXHVEODNEXHVEQ0U2XCIsIHQoXCJzbS5jaGlsZFwiKSk7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmJnXCIpLCBcIm5vZGVCZ0NvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzMSwgdChcInNtLnRleHRcIiksIFwibm9kZVRleHRDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczEsIHQoXCJzbS5mb250U2l6ZVwiKSwgXCJub2RlRm9udFNpemVcIiwgXCJudW1iZXJcIiwgeyBtaW46IDEwLCBtYXg6IDMyIH0pO1xyXG4gICAgICAgIFIoczEsIHQoXCJzbS5mb250XCIpLCBcIm5vZGVGb250RmFtaWx5XCIsIFwic2VsZWN0XCIsIHsgb3B0aW9uczogRk9OVF9MSVNUIH0pO1xyXG4gICAgICAgIFIoczEsIHQoXCJzbS5ib3JkZXJTdHlsZVwiKSwgXCJub2RlQm9yZGVyU3R5bGVcIiwgXCJzZWxlY3RcIiwge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbXCJzb2xpZFwiLCBcImRhc2hlZFwiLCBcImRvdHRlZFwiLCBcImRvdWJsZVwiLCBcIm5vbmVcIl0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmJvcmRlckNvbG9yXCIpLCBcIm5vZGVCb3JkZXJDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczEsIHQoXCJzbS5ib3JkZXJXaWR0aFwiKSwgXCJub2RlQm9yZGVyV2lkdGhcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogOCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMxLCB0KFwic20uYm9yZGVyUmFkaXVzXCIpLCBcIm5vZGVCb3JkZXJSYWRpdXNcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogMzIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMSwgdChcInNtLm1pbldpZHRoXCIpLCBcIm5vZGVNaW5XaWR0aFwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMzAsXHJcbiAgICAgICAgICAgIG1heDogNDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczEsIHQoXCJzbS5taW5IZWlnaHRcIiksIFwibm9kZU1pbkhlaWdodFwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMjAsXHJcbiAgICAgICAgICAgIG1heDogMjAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHMyID0gc2VjKFwiXHVEODNDXHVERkUwXCIsIHQoXCJzbS5yb290XCIpKTtcclxuICAgICAgICBSKHMyLCB0KFwic20uYmdcIiksIFwicm9vdEJnQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHMyLCB0KFwic20udGV4dFwiKSwgXCJyb290VGV4dENvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzMiwgdChcInNtLmZvbnRTaXplXCIpLCBcInJvb3RGb250U2l6ZVwiLCBcIm51bWJlclwiLCB7IG1pbjogMTAsIG1heDogMzIgfSk7XHJcbiAgICAgICAgUihzMiwgdChcInNtLmZvbnRcIiksIFwicm9vdEZvbnRGYW1pbHlcIiwgXCJzZWxlY3RcIiwgeyBvcHRpb25zOiBGT05UX0xJU1QgfSk7XHJcbiAgICAgICAgUihzMiwgdChcInNtLmJvcmRlclN0eWxlXCIpLCBcInJvb3RCb3JkZXJTdHlsZVwiLCBcInNlbGVjdFwiLCB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInNvbGlkXCIsIFwiZGFzaGVkXCIsIFwiZG90dGVkXCIsIFwiZG91YmxlXCIsIFwibm9uZVwiXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMyLCB0KFwic20uYm9yZGVyQ29sb3JcIiksIFwicm9vdEJvcmRlckNvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzMiwgdChcInNtLmJvcmRlcldpZHRoXCIpLCBcInJvb3RCb3JkZXJXaWR0aFwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiA4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5ib3JkZXJSYWRpdXNcIiksIFwicm9vdEJvcmRlclJhZGl1c1wiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiAzMixcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMyLCB0KFwic20ubWluV2lkdGhcIiksIFwicm9vdE1pbldpZHRoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiA1MCxcclxuICAgICAgICAgICAgbWF4OiA0MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMiwgdChcInNtLm1pbkhlaWdodFwiKSwgXCJyb290TWluSGVpZ2h0XCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAyMCxcclxuICAgICAgICAgICAgbWF4OiAyMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgczMgPSBzZWMoXCJcdUQ4M0RcdUREMTdcIiwgdChcInNtLmNvbm5cIikpO1xyXG4gICAgICAgIFIoczMsIHQoXCJzbS50eXBlXCIpLCBcImNvbm5lY3Rpb25TdHlsZVwiLCBcInNlbGVjdFwiLCB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IENPTk5FQ1RJT05fU1RZTEVTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczMsIHQoXCJzbS5jb2xvclwiKSwgXCJjb25uZWN0aW9uQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHMzLCB0KFwic20ud2lkdGhcIiksIFwiY29ubmVjdGlvbldpZHRoXCIsIFwibnVtYmVyXCIsIHsgbWluOiAxLCBtYXg6IDggfSk7XHJcbiAgICAgICAgUihzMywgdChcInNtLmNvbm5MZW5ndGhcIiksIFwiY29ubmVjdGlvbkxlbmd0aFwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMzAsXHJcbiAgICAgICAgICAgIG1heDogMzAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczMsIHQoXCJzbS5ub2RlRGlyXCIpLCBcIm5vZGVEaXJlY3Rpb25cIiwgXCJzZWxlY3RcIiwge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbXCJyaWdodFwiLCBcImxlZnRcIiwgXCJib3RoXCJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczMsIHQoXCJzbS5ub2RlR2FwWVwiKSwgXCJub2RlR2FwWVwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogOCxcclxuICAgICAgICAgICAgbWF4OiA4MCxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBSYWluYm93OiBsaXN0IHdpdGggcmVhbCBjb2xvciBkb3RzLCBkZWxldGUgYnV0dG9ucywgbm8gbW9kYWwgcmVvcGVuXHJcbiAgICAgICAgY29uc3QgY3RSb3cgPSBzMy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBjdFJvdy5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3RcIik7XHJcbiAgICAgICAgY3RSb3dcclxuICAgICAgICAgICAgLmNyZWF0ZUVsKFwibGFiZWxcIiwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogdChcInNtLnJhaW5ib3dcIiksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctbGJsXCIpO1xyXG4gICAgICAgIGNvbnN0IGFsbFBhbHM6IHsgW2s6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7XHJcbiAgICAgICAgICAgIC4uLlJBSU5CT1dfUEFMRVRURVMsXHJcbiAgICAgICAgICAgIC4uLih0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzIHx8IHt9KSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBjdXJQYWwgPSB0aGlzLnN0eWxlLmNvbm5lY3Rpb25SYWluYm93XHJcbiAgICAgICAgICAgID8gdGhpcy5zdHlsZS5yYWluYm93UGFsZXR0ZVxyXG4gICAgICAgICAgICA6IFwib2ZmXCI7XHJcbiAgICAgICAgY29uc3QgbGlzdFdyYXAgPSBjdFJvdy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBsaXN0V3JhcC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctbGlzdFwiKTtcclxuICAgICAgICBjb25zdCByZWJ1aWxkTGlzdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGlzdFdyYXAuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZCA9IHtcclxuICAgICAgICAgICAgICAgIC4uLlJBSU5CT1dfUEFMRVRURVMsXHJcbiAgICAgICAgICAgICAgICAuLi4odGhpcy5zdHlsZS5jdXN0b21SYWluYm93cyB8fCB7fSksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IG1rSXRlbSA9IChcclxuICAgICAgICAgICAgICAgIGtleTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIGNvbG9yczogc3RyaW5nW10gfCBudWxsLFxyXG4gICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ID0gbGlzdFdyYXAuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBpdC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIGl0LnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIsIGtleSA9PT0gY3VyUGFsKTtcclxuICAgICAgICAgICAgICAgIGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBjdXJQYWwpIGl0LmFkZENsYXNzKFwibXotcmFpbmJvdy1ob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0LnRvZ2dsZUNsYXNzKFwibXotcmFpbmJvdy1ob3ZlclwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5tID0gaXQuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbGFiZWwgfSk7XHJcbiAgICAgICAgICAgICAgICBubS5hZGRDbGFzcyhcIm16LXJhaW5ib3ctaXRlbS1sYmxcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG90cyA9IGl0LmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb3RzLmFkZENsYXNzKFwibXotcmFpbmJvdy1kb3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBjb2xvcnMuc2xpY2UoMCwgMTApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBkb3RzLmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctZG90XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1kb3QtY29sb3JcIjogYyB9KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFtrLCB2XSkgPT4gZC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWwtZGVsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJvZmZcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoeyBjb25uZWN0aW9uUmFpbmJvdzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clBhbCA9IFwib2ZmXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25SYWluYm93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFpbmJvd1BhbGV0dGU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clBhbCA9IGtleTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVidWlsZExpc3QoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIGJ1dHRvbiAobm90IGZvciBTb2xpZCBvciBidWlsdC1pbiBwYWxldHRlcylcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IFwib2ZmXCIgJiYgIVJBSU5CT1dfUEFMRVRURVNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbCA9IGl0LmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IFwiXHUyNzE1XCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsLmNsYXNzTmFtZSA9IFwicGFsLWRlbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbC5hZGRDbGFzcyhcIm16LXJlc2V0LWJ0blwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3IgPSB7IC4uLih0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzIHx8IHt9KSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3Jba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHsgY3VzdG9tUmFpbmJvd3M6IGNyIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyUGFsID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1clBhbCA9IFwib2ZmXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoeyBjb25uZWN0aW9uUmFpbmJvdzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVidWlsZExpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbWtJdGVtKFwib2ZmXCIsIFwiU29saWRcIiwgbnVsbCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW25hbWUsIGNvbG9yc10gb2YgT2JqZWN0LmVudHJpZXModXBkYXRlZCkpXHJcbiAgICAgICAgICAgICAgICBta0l0ZW0obmFtZSwgbmFtZSwgY29sb3JzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYnVpbGRMaXN0KCk7XHJcbiAgICAgICAgLy8gQWRkIGN1c3RvbSBwYWxldHRlXHJcbiAgICAgICAgY29uc3QgYWRkUm93ID0gY3RSb3cuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgYWRkUm93LmFkZENsYXNzKFwibXotcmFpbmJvdy1jdFwiKTtcclxuICAgICAgICBjb25zdCBhZGRCdG4gPSBhZGRSb3cuY3JlYXRlRWwoXCJidXR0b25cIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiB0KFwic20uY3VzdG9tUmFpbmJvd1wiKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhZGRCdG4uYWRkQ2xhc3MoXCJtei1tb2RhbC1idG5cIiwgXCJtei1tb2RhbC1idG4tc2Vjb25kYXJ5XCIpO1xyXG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBhZGRCdG4udG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVkID0gYWRkUm93LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBlZC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3RcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVJbnAgPSBlZC5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG5hbWVJbnAudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICBuYW1lSW5wLnBsYWNlaG9sZGVyID0gXCJQYWxldHRlIG5hbWVcIjtcclxuICAgICAgICAgICAgbmFtZUlucC52YWx1ZSA9IFwiQ3VzdG9tXCI7XHJcbiAgICAgICAgICAgIG5hbWVJbnAuYWRkQ2xhc3MoXCJtei1yYWluYm93LWNyLW5hbWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IFtcclxuICAgICAgICAgICAgICAgIFwiI2ZmMDAwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjMDBmZjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIiMwMDAwZmZcIixcclxuICAgICAgICAgICAgICAgIFwiI2ZmZmYwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjZmYwMGZmXCIsXHJcbiAgICAgICAgICAgICAgICBcIiMwMGZmZmZcIixcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY29uc3QgY0RpdiA9IGVkLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjRGl2LmFkZENsYXNzKFwibXotcmFpbmJvdy1jci1yb3dcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYnVpbGQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjRGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNpID0gY0Rpdi5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2kudHlwZSA9IFwiY29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICBjaS52YWx1ZSA9IGNvbG9yc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBjaS5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3ItaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2kuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yc1tpXSA9IGNpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWIgPSBjRGl2LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCIrXCIgfSk7XHJcbiAgICAgICAgICAgICAgICBhYi5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3ItaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKFwiIzg4ODg4OFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZWJ1aWxkKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVidWlsZCgpO1xyXG4gICAgICAgICAgICBjb25zdCBzYXZlQnRuID0gZWQuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIlx1MjcxMyBTYXZlXCIgfSk7XHJcbiAgICAgICAgICAgIHNhdmVCdG4uYWRkQ2xhc3MoXCJtei1yYWluYm93LWNyLWJ0blwiLCBcIm16LXJhaW5ib3ctY3Itc2F2ZVwiKTtcclxuICAgICAgICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5tID0gbmFtZUlucC52YWx1ZS50cmltKCkgfHwgXCJDdXN0b21cIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5zdHlsZS5jdXN0b21SYWluYm93cyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1tubV0gfHwgUkFJTkJPV19QQUxFVFRFU1tubV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1tubSArIFwiIFwiICsgaV0gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUkFJTkJPV19QQUxFVFRFU1tubSArIFwiIFwiICsgaV1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICBubSA9IG5tICsgXCIgXCIgKyBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q1IgPSB7IC4uLmV4aXN0aW5nLCBbbm1dOiBbLi4uY29sb3JzXSB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21SYWluYm93czogbmV3Q1IsXHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvblJhaW5ib3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFpbmJvd1BhbGV0dGU6IG5tLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjdXJQYWwgPSBubTtcclxuICAgICAgICAgICAgICAgIGVkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgYWRkQnRuLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJlYnVpbGRMaXN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHMzYiA9IHNlYyhcIlx1RDgzRFx1RENERFwiLCB0KFwic20udGV4dEFsaWduXCIpKTtcclxuICAgICAgICBSKHMzYiwgdChcInNtLnRleHRBbGlnblwiKSwgXCJ0ZXh0QWxpZ25cIiwgXCJzZWxlY3RcIiwge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgczQgPSBzZWMoXCJcdTI3MDVcIiwgdChcInNtLnNlbFwiKSk7XHJcbiAgICAgICAgUihzNCwgdChcInNtLnNlbENvbG9yXCIpLCBcInNlbGVjdGlvbkNvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzNCwgdChcInNtLnNlbFdpZHRoXCIpLCBcInNlbGVjdGlvbldpZHRoXCIsIFwibnVtYmVyXCIsIHsgbWluOiAxLCBtYXg6IDggfSk7XHJcbiAgICAgICAgUihzNCwgdChcInNtLnNlbE9mZnNldFwiKSwgXCJzZWxlY3Rpb25PdXRsaW5lT2Zmc2V0XCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAtNSxcclxuICAgICAgICAgICAgbWF4OiAyMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHM0LCB0KFwic20uZWRpdE91dGxpbmVcIiksIFwiZWRpdE91dGxpbmVDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczQsIHQoXCJzbS5lZGl0T3V0bGluZVdpZHRoXCIpLCBcImVkaXRPdXRsaW5lV2lkdGhcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogOCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHM0LCB0KFwic20uYm94U2VsQ29sb3JcIiksIFwiYm94U2VsZWN0aW9uQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBjb25zdCBzNSA9IHNlYyhcIlx1RDgzRFx1RERCQ1x1RkUwRlwiLCB0KFwic20uY2FudmFzQmdcIikpO1xyXG4gICAgICAgIFIoczUsIHQoXCJzbS5jYW52YXNCZ1wiKSwgXCJjYW52YXNCZ1wiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIGNvbnN0IHM2ID0gc2VjKFwiXHVEODNEXHVERDI3XCIsIHQoXCJzbS5zaG93VG9vbGJhclwiKSk7XHJcbiAgICAgICAgY29uc3QgdGJSb3cgPSBzNi5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICB0YlJvdy5hZGRDbGFzcyhcIm16LW1vZGFsLXJvd1wiKTtcclxuICAgICAgICB0YlJvd1xyXG4gICAgICAgICAgICAuY3JlYXRlRWwoXCJsYWJlbFwiLCB7IHRleHQ6IHQoXCJzbS5zaG93VG9vbGJhclwiKSB9KVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJtei1tb2RhbC1sYmxcIik7XHJcbiAgICAgICAgY29uc3QgdGJDYiA9IHRiUm93LmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB0YkNiLnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgdGJDYi5jaGVja2VkID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1Rvb2xiYXI7XHJcbiAgICAgICAgdGJDYi5hZGRDbGFzcyhcIm16LW1vZGFsLWNoa1wiKTtcclxuICAgICAgICB0YkNiLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhciA9IHRiQ2IuY2hlY2tlZDtcclxuICAgICAgICAgICAgdm9pZCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sYmFyVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YlBvc1wiKSwgXCJ0b29sYmFyUG9zaXRpb25cIiwgXCJzZWxlY3RcIiwge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbXCJ0b3BcIiwgXCJib3R0b21cIl0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiUGFkVFwiKSwgXCJ0b29sYmFyUGFkVG9wXCIsIFwibnVtYmVyXCIsIHsgbWluOiAwLCBtYXg6IDQwIH0pO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YlBhZFJcIiksIFwidG9vbGJhclBhZFJpZ2h0XCIsIFwibnVtYmVyXCIsIHsgbWluOiAwLCBtYXg6IDQwIH0pO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YlBhZEJcIiksIFwidG9vbGJhclBhZEJvdHRvbVwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiA0MCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJQYWRMXCIpLCBcInRvb2xiYXJQYWRMZWZ0XCIsIFwibnVtYmVyXCIsIHsgbWluOiAwLCBtYXg6IDQwIH0pO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YkJnXCIpLCBcInRvb2xiYXJCZ0NvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiQnRuQmdcIiksIFwidG9vbGJhckJ0bkJnQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJCdG5Cb3JkZXJcIiksIFwidG9vbGJhckJ0bkJvcmRlclN0eWxlXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogW1wic29saWRcIiwgXCJkYXNoZWRcIiwgXCJkb3R0ZWRcIiwgXCJub25lXCJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YkJ0bkJvcmRlckNvbG9yXCIpLCBcInRvb2xiYXJCdG5Cb3JkZXJDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YkJ0blRleHRcIiksIFwidG9vbGJhckJ0blRleHRDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczYsIFwiU2VwYXJhdG9yIGNvbG9yXCIsIFwidG9vbGJhckJvcmRlckNvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzNiwgXCJTZXBhcmF0b3Igd2lkdGhcIiwgXCJ0b29sYmFyQm9yZGVyV2lkdGhcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogNSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBSZXNldCB0b29sYmFyIGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IHRiUmVzZXRCdG4gPSBzNi5jcmVhdGVFbChcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiXHUyMUJBIFwiICsgdChcInNtLnRiUmVzZXREZWZhdWx0XCIpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRiUmVzZXRCdG4uYWRkQ2xhc3MoXCJtei1ucy1idG5cIik7XHJcbiAgICAgICAgdGJSZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0RhcmsgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZSA9PT0gXCJkYXJrXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZiA9IGlzRGFyayA/IERFRkFVTFRfVE9PTEJBUl9EQVJLIDogREVGQVVMVF9UT09MQkFSX0xJR0hUO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgdG9vbGJhckJnQ29sb3I6IGRlZi50b29sYmFyQmdDb2xvcixcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJCdG5CZ0NvbG9yOiBkZWYudG9vbGJhckJ0bkJnQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQnRuQm9yZGVyU3R5bGU6IGRlZi50b29sYmFyQnRuQm9yZGVyU3R5bGUsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQnRuQm9yZGVyQ29sb3I6IGRlZi50b29sYmFyQnRuQm9yZGVyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBkZWYudG9vbGJhckJ0blRleHRDb2xvcixcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJCb3JkZXJDb2xvcjogZGVmLnRvb2xiYXJCb3JkZXJDb2xvcixcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJCb3JkZXJXaWR0aDogZGVmLnRvb2xiYXJCb3JkZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJQYWRUb3A6IDAsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyUGFkUmlnaHQ6IDEyLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhclBhZEJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJQYWRMZWZ0OiAxMixcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJQb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1N0eWxlTW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBiciA9IG0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgYnIuYWRkQ2xhc3MoXCJtei1tb2RhbC1idG5zXCIpO1xyXG4gICAgICAgIGJyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogdChcInNtLnJlc2V0XCIpIH0pLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHsgLi4uREVGQVVMVF9TVFlMRSB9KTtcclxuICAgICAgICAgICAgICAgIGNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdHlsZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjYiA9IGJyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogdChcInNtLmNsb3NlXCIpIH0pO1xyXG4gICAgICAgIGNiLmFkZENsYXNzKFwibXotbW9kYWwtYnRuXCIsIFwibXotbW9kYWwtYnRuLXByaW1hcnlcIik7XHJcbiAgICAgICAgY2IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd05vZGVTdHlsZUVkaXRvcihlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcCgpO1xyXG4gICAgICAgIGNvbnN0IGlkcyA9IHRoaXMuYWxsU2VsKCk7XHJcbiAgICAgICAgY29uc3QgZmlyc3QgPSB0aGlzLmZBbGwoWy4uLmlkc11bMF0pO1xyXG4gICAgICAgIGNvbnN0IHNvID0gZmlyc3Q/LnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgY29uc3QgaXNSID0gISFmaXJzdD8uaXNSb290O1xyXG4gICAgICAgIGNvbnN0IG92ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBvdi5hZGRDbGFzcyhcIm16LW1vZGFsLW92ZXJsYXlcIik7XHJcbiAgICAgICAgY29uc3QgbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbS5hZGRDbGFzcyhcIm16LW1vZGFsXCIpO1xyXG4gICAgICAgIG0uY3JlYXRlRWwoXCJoNFwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IHQoXCJucy50aXRsZVwiKSArIFwiIChcIiArIGlkcy5zaXplICsgXCIpXCIsXHJcbiAgICAgICAgfSkuYWRkQ2xhc3MoXCJtei1ucy10aXRsZVwiKTtcclxuICAgICAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgb3YucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIG0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wQ2xvc2UgPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wb3BDbG9zZSA9IGNsb3NlO1xyXG4gICAgICAgIG92LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XHJcbiAgICAgICAgbS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAgICAgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGFwcGx5ID0gKGZuOiAobjogTWluZE5vZGVEYXRhKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmZBbGwoaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG4pIGZuKG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta0MgPSAobDogc3RyaW5nLCBjdXI6IHN0cmluZywgZm46ICh2OiBzdHJpbmcpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHIuYWRkQ2xhc3MoXCJtei1tb2RhbC1yb3dcIik7XHJcbiAgICAgICAgICAgIHIuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbCB9KS5hZGRDbGFzcyhcIm16LW1vZGFsLWxibFwiKTtcclxuICAgICAgICAgICAgY29uc3QgaSA9IHIuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpLnR5cGUgPSBcImNvbG9yXCI7XHJcbiAgICAgICAgICAgIGkudmFsdWUgPSBjdXI7XHJcbiAgICAgICAgICAgIGkuYWRkQ2xhc3MoXCJtei1zcC1jb2xvclwiKTtcclxuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IGZuKGkudmFsdWUpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1rTiA9IChcclxuICAgICAgICAgICAgbDogc3RyaW5nLFxyXG4gICAgICAgICAgICBjdXI6IG51bWJlcixcclxuICAgICAgICAgICAgbWluOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG1heDogbnVtYmVyLFxyXG4gICAgICAgICAgICBmbjogKHY6IG51bWJlcikgPT4gdm9pZCxcclxuICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHIuYWRkQ2xhc3MoXCJtei1tb2RhbC1yb3dcIik7XHJcbiAgICAgICAgICAgIHIuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbCB9KS5hZGRDbGFzcyhcIm16LW1vZGFsLWxibFwiKTtcclxuICAgICAgICAgICAgY29uc3QgaSA9IHIuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgICAgICBpLm1pbiA9IFN0cmluZyhtaW4pO1xyXG4gICAgICAgICAgICBpLm1heCA9IFN0cmluZyhtYXgpO1xyXG4gICAgICAgICAgICBpLnZhbHVlID0gU3RyaW5nKGN1cik7XHJcbiAgICAgICAgICAgIGkuYWRkQ2xhc3MoXCJtei1zcC1udW1cIik7XHJcbiAgICAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBmbihOdW1iZXIoaS52YWx1ZSkpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1rUyA9IChcclxuICAgICAgICAgICAgbDogc3RyaW5nLFxyXG4gICAgICAgICAgICBjdXI6IHN0cmluZyxcclxuICAgICAgICAgICAgb3B0czogc3RyaW5nW10sXHJcbiAgICAgICAgICAgIGZuOiAodjogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByID0gbS5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgci5hZGRDbGFzcyhcIm16LW1vZGFsLXJvd1wiKTtcclxuICAgICAgICAgICAgci5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBsIH0pLmFkZENsYXNzKFwibXotbW9kYWwtbGJsXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBzID0gci5jcmVhdGVFbChcInNlbGVjdFwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICAgICAgcy5hZGRDbGFzcyhcIm16LXNwLXNlbFwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBvIG9mIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIG9wLnZhbHVlID0gbztcclxuICAgICAgICAgICAgICAgIG9wLnRleHQgPSBvO1xyXG4gICAgICAgICAgICAgICAgaWYgKG8gPT09IGN1cikgb3Auc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcy5hcHBlbmRDaGlsZChvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IGZuKHMudmFsdWUpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1rQyhcclxuICAgICAgICAgICAgdChcInNtLmJnXCIpLFxyXG4gICAgICAgICAgICBzby5iZ0NvbG9yID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290QmdDb2xvciA6IHRoaXMuc3R5bGUubm9kZUJnQ29sb3IpLFxyXG4gICAgICAgICAgICAodikgPT5cclxuICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlID0gbi5zdHlsZU92ZXJyaWRlID8/IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZS5iZ0NvbG9yID0gdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtDKFxyXG4gICAgICAgICAgICB0KFwic20udGV4dFwiKSxcclxuICAgICAgICAgICAgc28udGV4dENvbG9yID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290VGV4dENvbG9yIDogdGhpcy5zdHlsZS5ub2RlVGV4dENvbG9yKSxcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUudGV4dENvbG9yID0gdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtOKFxyXG4gICAgICAgICAgICB0KFwic20uZm9udFNpemVcIiksXHJcbiAgICAgICAgICAgIHNvLmZvbnRTaXplID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Rm9udFNpemUgOiB0aGlzLnN0eWxlLm5vZGVGb250U2l6ZSksXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAzMixcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuZm9udFNpemUgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIG4ud2lkdGggPSB0aGlzLmNhbGNXKG4udGV4dCwgISFuLmlzUm9vdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5oZWlnaHQgPSB0aGlzLmNhbGNIKG4udGV4dCwgISFuLmlzUm9vdCk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rUyhcclxuICAgICAgICAgICAgdChcInNtLmZvbnRcIiksXHJcbiAgICAgICAgICAgIHNvLmZvbnRGYW1pbHkgPz9cclxuICAgICAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RGb250RmFtaWx5IDogdGhpcy5zdHlsZS5ub2RlRm9udEZhbWlseSksXHJcbiAgICAgICAgICAgIEZPTlRfTElTVCxcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuZm9udEZhbWlseSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPT09IFwiaW5oZXJpdFwiID8gdW5kZWZpbmVkIDogdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtTKFxyXG4gICAgICAgICAgICB0KFwic20uYm9yZGVyU3R5bGVcIiksXHJcbiAgICAgICAgICAgIHNvLmJvcmRlclN0eWxlID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyU3R5bGUgOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJTdHlsZSksXHJcbiAgICAgICAgICAgIFtcInNvbGlkXCIsIFwiZGFzaGVkXCIsIFwiZG90dGVkXCIsIFwiZG91YmxlXCIsIFwibm9uZVwiXSxcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuYm9yZGVyU3R5bGUgPSB2IGFzIEJvcmRlclN0eWxlO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta0MoXHJcbiAgICAgICAgICAgIHQoXCJzbS5ib3JkZXJDb2xvclwiKSxcclxuICAgICAgICAgICAgc28uYm9yZGVyQ29sb3IgPz9cclxuICAgICAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCb3JkZXJDb2xvciA6IHRoaXMuc3R5bGUubm9kZUJvcmRlckNvbG9yKSxcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuYm9yZGVyQ29sb3IgPSB2O1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta04oXHJcbiAgICAgICAgICAgIHQoXCJzbS5ib3JkZXJXaWR0aFwiKSxcclxuICAgICAgICAgICAgc28uYm9yZGVyV2lkdGggPz9cclxuICAgICAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCb3JkZXJXaWR0aCA6IHRoaXMuc3R5bGUubm9kZUJvcmRlcldpZHRoKSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuYm9yZGVyV2lkdGggPSB2O1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta04oXHJcbiAgICAgICAgICAgIHQoXCJucy5ib3JkZXJSYWRpdXNcIiksXHJcbiAgICAgICAgICAgIHNvLmJvcmRlclJhZGl1cyA/P1xyXG4gICAgICAgICAgICAgICAgKGlzUlxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyUmFkaXVzXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJSYWRpdXMpLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAzMixcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuYm9yZGVyUmFkaXVzID0gdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtDKFxyXG4gICAgICAgICAgICB0KFwibnMuY29ubkNvbG9yXCIpLFxyXG4gICAgICAgICAgICBmaXJzdD8uY29ubmVjdGlvbkNvbG9yID8/IHRoaXMuc3R5bGUuY29ubmVjdGlvbkNvbG9yLFxyXG4gICAgICAgICAgICAodikgPT5cclxuICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5jb25uZWN0aW9uQ29sb3IgPSB2O1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta04oXHJcbiAgICAgICAgICAgIHQoXCJucy5jb25uV2lkdGhcIiksXHJcbiAgICAgICAgICAgIGZpcnN0Py5jb25uZWN0aW9uV2lkdGggPz8gdGhpcy5zdHlsZS5jb25uZWN0aW9uV2lkdGgsXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLmNvbm5lY3Rpb25XaWR0aCA9IHY7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIENvbm5lY3Rpb24gdHlwZSB3aXRoIGNvbG9yIHN3YXRjaGVzIGZvciByb290IG5vZGVzXHJcbiAgICAgICAgaWYgKGlzUikge1xyXG4gICAgICAgICAgICBjb25zdCBjdERpdiA9IG0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGN0RGl2LmFkZENsYXNzKFwibXotcmFpbmJvdy1jdFwiKTtcclxuICAgICAgICAgICAgY3REaXZcclxuICAgICAgICAgICAgICAgIC5jcmVhdGVFbChcInNwYW5cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHQoXCJzbS5yYWluYm93XCIpLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctbGJsXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBuUGFsczogeyBbazogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLlJBSU5CT1dfUEFMRVRURVMsXHJcbiAgICAgICAgICAgICAgICAuLi4odGhpcy5zdHlsZS5jdXN0b21SYWluYm93cyB8fCB7fSksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIERldGVjdCBjdXJyZW50IHBhbGV0dGUgYnkgbWF0Y2hpbmcgZmlyc3QgY2hpbGQncyBjb2xvclxyXG4gICAgICAgICAgICBsZXQgYWN0aXZlUGFsID0gXCJvZmZcIjtcclxuICAgICAgICAgICAgaWYgKGZpcnN0ICYmIGZpcnN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZjID0gZmlyc3QuY2hpbGRyZW5bMF0uY29ubmVjdGlvbkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgY29sb3JzXSBvZiBPYmplY3QuZW50cmllcyhuUGFscykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yc1swXSA9PT0gZmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhbCA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBuTGlzdCA9IGN0RGl2LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBuTGlzdC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctbGlzdFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVidWlsZE5MID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbkxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1rTkkgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IHN0cmluZ1tdIHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ID0gbkxpc3QuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXQudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIiwga2V5ID09PSBhY3RpdmVQYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gYWN0aXZlUGFsKSBpdC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdC50b2dnbGVDbGFzcyhcIm16LXJhaW5ib3ctaG92ZXJcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0LmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IGxhYmVsIH0pLmFkZENsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm16LXJhaW5ib3ctaXRlbS1sYmxcIixcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZG90cyA9IGl0LmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90cy5hZGRDbGFzcyhcIm16LXJhaW5ib3ctZG90c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGNvbG9ycy5zbGljZSgwLCA4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IGRvdHMuY3JlYXRlRWwoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctZG90XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoeyBcIi0tbXotZG90LWNvbG9yXCI6IGMgfSkuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoW2ssIHZdKSA9PiBkLnN0eWxlLnNldFByb3BlcnR5KGssIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbG9ycykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuLmlzUm9vdCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jaGlsZHJlbltpXS5jb25uZWN0aW9uQ29sb3IgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnNbaSAlIGNvbG9ycy5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFsID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWJ1aWxkTkwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBta05JKFwib2ZmXCIsIFwiU29saWRcIiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb2xvcnNdIG9mIE9iamVjdC5lbnRyaWVzKG5QYWxzKSlcclxuICAgICAgICAgICAgICAgICAgICBta05JKG5hbWUsIG5hbWUsIGNvbG9ycyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlYnVpbGROTCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbHIgPSBtLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogdChcIm5zLmNsZWFyXCIpIH0pO1xyXG4gICAgICAgIGNsci5hZGRDbGFzcyhcIm16LW5zLWJ0blwiKTtcclxuICAgICAgICBjbHIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBuLmNvbm5lY3Rpb25Db2xvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIG4uY29ubmVjdGlvbldpZHRoID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGNidG4gPSBtLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogdChcInNtLmNsb3NlXCIpIH0pO1xyXG4gICAgICAgIGNidG4uYWRkQ2xhc3MoXCJtei1tb2RhbC1idG5cIiwgXCJtei1tb2RhbC1idG4tcHJpbWFyeVwiKTtcclxuICAgICAgICBjYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvZ2dsZVNlYXJjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hCYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jYz8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuc3VyZVByb3h5KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQmFyLmFkZENsYXNzKFwibXotc2VhcmNoLWJhclwiKTtcclxuICAgICAgICBjb25zdCBpbnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgaW5wLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpbnAucGxhY2Vob2xkZXIgPSB0KFwic2VhcmNoLnBsYWNlaG9sZGVyXCIpO1xyXG4gICAgICAgIGlucC5hZGRDbGFzcyhcIm16LXNlYXJjaC1pbnB1dFwiKTtcclxuICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgaW5mby5hZGRDbGFzcyhcIm16LXNlYXJjaC1jb3VudFwiKTtcclxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gXCJcdTI3MTVcIjtcclxuICAgICAgICBjbG9zZUJ0bi5hZGRDbGFzcyhcIm16LXNlYXJjaC1idG5cIik7XHJcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXI/LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEJhciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY2M/LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5lbnN1cmVQcm94eSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQmFyLmFwcGVuZENoaWxkKGlucCk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCYXIuYXBwZW5kQ2hpbGQoaW5mbyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCYXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xyXG4gICAgICAgIHRoaXMuc3ZnQ3QuYXBwZW5kQ2hpbGQodGhpcy5zZWFyY2hCYXIpO1xyXG4gICAgICAgIGNvbnN0IGRvU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBxID0gaW5wLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hJZHggPSAwO1xyXG4gICAgICAgICAgICBpZiAoIXEpIHtcclxuICAgICAgICAgICAgICAgIGluZm8udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHZpcyA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChuLnRleHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMucHVzaChuKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB2aXMoYyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB2aXMocik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvLnRleHRDb250ZW50ID0gXCIxL1wiICsgdGhpcy5zZWFyY2hSZXN1bHRzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsMSh0aGlzLnNlYXJjaFJlc3VsdHNbMF0uaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c05vZGUodGhpcy5zZWFyY2hSZXN1bHRzWzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpbmZvLnRleHRDb250ZW50ID0gXCIwXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGRvU2VhcmNoKTtcclxuICAgICAgICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJrZXlkb3duXCIsXHJcbiAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hSZXN1bHRzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaElkeCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zZWFyY2hJZHggLSAxICsgdGhpcy5zZWFyY2hSZXN1bHRzLmxlbmd0aCkgJVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSWR4ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnNlYXJjaElkeCArIDEpICUgdGhpcy5zZWFyY2hSZXN1bHRzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBpbmZvLnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJZHggKyAxICsgXCIvXCIgKyB0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5kID0gdGhpcy5zZWFyY2hSZXN1bHRzW3RoaXMuc2VhcmNoSWR4XTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNOb2RlKG5kKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBpbnAuZm9jdXMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXI/LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNjPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVQcm94eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnAuZm9jdXMoKSwgMCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldENDKFxyXG4gICAgICAgIGNoOiBNaW5kTm9kZURhdGEsXHJcbiAgICAgICAgcFI6IGJvb2xlYW4sXHJcbiAgICAgICAgaWR4OiBudW1iZXIsXHJcbiAgICAgICAgaW5oPzogc3RyaW5nLFxyXG4gICAgKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoY2guY29ubmVjdGlvbkNvbG9yKSByZXR1cm4gY2guY29ubmVjdGlvbkNvbG9yO1xyXG4gICAgICAgIGlmIChpbmgpIHJldHVybiBpbmg7XHJcbiAgICAgICAgY29uc3QgcmIgPSB0aGlzLmdldFJhaW5ib3coKTtcclxuICAgICAgICBpZiAodGhpcy5zdHlsZS5jb25uZWN0aW9uUmFpbmJvdyAmJiBwUikgcmV0dXJuIHJiW2lkeCAlIHJiLmxlbmd0aF07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUuY29ubmVjdGlvbkNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNBY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1pbmRNYXBWaWV3KSA9PT0gdGhpcztcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNFeHRJbnB1dChlOiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGlmICghdCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHRhZyA9IHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICh0YWcgPT09IFwiaW5wdXRcIiB8fCB0YWcgPT09IFwidGV4dGFyZWFcIiB8fCB0YWcgPT09IFwic2VsZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLnN2Z0N0Py5jb250YWlucyh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQuaXNDb250ZW50RWRpdGFibGUpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2tkID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3QoKSB8fCB0aGlzLm1kTW9kZSB8fCB0aGlzLmlzRXh0SW5wdXQoZSkpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hCYXIgJiYgdGhpcy5zZWFyY2hCYXIuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyBGSVggIzc6IHdoZW4gbW9kYWwgaXMgb3BlbiwgRXNjIGNsb3NlcyBpdDsgYmxvY2sgYWxsIG90aGVyIGtleXNcclxuICAgICAgICBpZiAodGhpcy5wb3BDbG9zZSkge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcENsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcENsb3NlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEZJWCAjNjogZGlzYWJsZSBhbGwga2V5cyBkdXJpbmcgZHJhZ1xyXG4gICAgICAgIGlmICh0aGlzLmRzPy5pc0RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB0aGlzLmNhbmNlbERyYWcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBFZGl0IG1vZGVcclxuICAgICAgICBpZiAodGhpcy5lZGl0SWQpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmXHJcbiAgICAgICAgICAgICAgICBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcImFcIiAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXZlVEFcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiZlwiKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTZWFyY2goKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJlxyXG4gICAgICAgICAgICBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcImNcIiAmJlxyXG4gICAgICAgICAgICAhZS5zaGlmdEtleSAmJlxyXG4gICAgICAgICAgICB0aGlzLnNlbElkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5jb3B5Tm9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgJiZcclxuICAgICAgICAgICAgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJ4XCIgJiZcclxuICAgICAgICAgICAgdGhpcy5zZWxJZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29weU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgJiZcclxuICAgICAgICAgICAgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJ2XCIgJiZcclxuICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3RlTm9kZShlLnNoaWZ0S2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLnVuZG8pKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy51bmRvKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5yZWRvKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVkbygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFpvb20ga2V5YmluZGluZ3NcclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLnpvb21JbikpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnpvb21CeSgxLjEpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2Iuem9vbU91dCkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnpvb21CeSgwLjkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2Iuem9vbVJlc2V0KSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbVRvKDEpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IuYWRkQ2hpbGQpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgLy8gc2hpZnQrdGFiID0gbGVmdCBjaGlsZCAob24gcm9vdCBvciBhbnkgbm9kZSlcclxuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgJiYgdGhpcy5zZWxJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMZWZ0Q2hpbGQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxJZCkgdGhpcy5hZGRDaGlsZE5vZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLmFkZFNpYmxpbmcpICYmICFlLmN0cmxLZXkgJiYgIWUubWV0YUtleSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIHNoaWZ0K2VudGVyID0gbGVmdCBjaGlsZCBvbiByb290XHJcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5ICYmIHRoaXMuc2VsSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWw/LmlzUm9vdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTGVmdENoaWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZS5zaGlmdEtleSAmJiB0aGlzLnNlbElkKSB0aGlzLmFkZFNpYmxpbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTcGFjZTogc2luZ2xlIG5vZGUgc2VsZWN0ZWQgPSBlZGl0LCBuby9tdWx0aSA9IHBhblxyXG4gICAgICAgIC8vIGVkaXROb2RlOiBzaW5nbGUgbm9kZSA9IGVkaXRcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5lZGl0Tm9kZSkgJiZcclxuICAgICAgICAgICAgIWUucmVwZWF0ICYmXHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWQgJiZcclxuICAgICAgICAgICAgIXRoaXMuaXNNdWx0aSgpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0SWQgPSB0aGlzLnNlbElkO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRyYWdDYW52YXM6IHBhbiBtb2RlXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5kcmFnQ2FudmFzKSAmJiAhZS5yZXBlYXQpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNwYWNlRG93biA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNjKSB0aGlzLmNjLnRvZ2dsZUNsYXNzKFwibXotY3Vyc29yLWdyYWJcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ3RybCtFbnRlciBlbnRlcnMgZWRpdCBtb2RlXHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdElkID0gdGhpcy5zZWxJZDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLmZvY3VzTm9kZSkgJiYgIWUuY3RybEtleSAmJiAhZS5tZXRhS2V5KSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c1NlbCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaEJhcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEJhciA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsclNlbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkJhY2tzcGFjZVwiIHx8IGUua2V5ID09PSBcIkRlbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNdWx0aSgpKSB0aGlzLmJhdGNoRGVsKCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsSWQpIHRoaXMuZGVsTm9kZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IubmF2VXApKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJvdyhcIkFycm93VXBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLm5hdkRvd24pKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJvdyhcIkFycm93RG93blwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IubmF2TGVmdCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycm93KFwiQXJyb3dMZWZ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5uYXZSaWdodCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycm93KFwiQXJyb3dSaWdodFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIEZJWCAjMToga2VlcCBncmFiIGN1cnNvciBkdXJpbmcgZHJhZywgZG9uJ3QgcmVzZXQgdG8gcG9pbnRlclxyXG4gICAgcHJpdmF0ZSBfa3UgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZS5jb2RlID09PSBcIlNwYWNlXCIgfHxcclxuICAgICAgICAgICAgdGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLmVkaXROb2RlKSB8fFxyXG4gICAgICAgICAgICB0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IuZHJhZ0NhbnZhcylcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zcGFjZURvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kcmFnQ3YgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2MudG9nZ2xlQ2xhc3MoXCJtei1jdXJzb3ItZ3JhYmJpbmdcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYy50b2dnbGVDbGFzcyhcIm16LWN1cnNvci1ncmFiXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBJTUUtY29tcGF0aWJsZSB0eXBlVG9FZGl0IHZpYSBwcm94eSB0ZXh0YXJlYSBwb3NpdGlvbmVkIGJlbG93IHNlbGVjdGVkIG5vZGVcclxuICAgIHByaXZhdGUgZW5zdXJlUHJveHkoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclByb3h5KCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhdGhpcy5wbHVnaW4uc2V0dGluZ3MudHlwZVRvRWRpdCB8fFxyXG4gICAgICAgICAgICAhdGhpcy5zZWxJZCB8fFxyXG4gICAgICAgICAgICB0aGlzLmlzTXVsdGkoKSB8fFxyXG4gICAgICAgICAgICB0aGlzLmVkaXRJZCB8fFxyXG4gICAgICAgICAgICAhdGhpcy5zdmdDdCB8fFxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEJhclxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEJhciAmJiB0aGlzLnNlYXJjaEJhci5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IG5kID0gdGhpcy5mQWxsKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghbmQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgICAgIC8vIFBvc2l0aW9uIGJlbG93IHRoZSBzZWxlY3RlZCBub2RlIGluIHNjcmVlbiBjb29yZGluYXRlc1xyXG4gICAgICAgIGNvbnN0IHNjcmVlblggPSBuZC54ICogdGhpcy56b29tICsgdGhpcy5wYW5YO1xyXG4gICAgICAgIGNvbnN0IHNjcmVlblkgPSAobmQueSArIG5kLmhlaWdodCAvIDIpICogdGhpcy56b29tICsgdGhpcy5wYW5ZICsgNDtcclxuICAgICAgICBwLmFkZENsYXNzKFwibXotcHJveHktdGFcIik7XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoe1xyXG4gICAgICAgICAgICBcIi0tbXotcHJveHktbGVmdFwiOiBzY3JlZW5YICsgXCJweFwiLFxyXG4gICAgICAgICAgICBcIi0tbXotcHJveHktdG9wXCI6IHNjcmVlblkgKyBcInB4XCIsXHJcbiAgICAgICAgfSkuZm9yRWFjaCgoW2ssIHZdKSA9PiBwLnN0eWxlLnNldFByb3BlcnR5KGssIHYpKTtcclxuICAgICAgICB0aGlzLnN2Z0N0LmFwcGVuZENoaWxkKHApO1xyXG4gICAgICAgIHRoaXMucHJveHlUQSA9IHA7XHJcbiAgICAgICAgbGV0IGNvbXBvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBvc2l0aW9uc3RhcnRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb21wb3NpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBwLmFkZENsYXNzKFwibXotcHJveHktY29tcG9zaW5nXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBvc2l0aW9uZW5kXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29tcG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHAudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh2YWwgJiYgdGhpcy5zZWxJZCAmJiAhdGhpcy5lZGl0SWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdElkID0gdGhpcy5zZWxJZDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXZlVEEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuc2V0UmFuZ2VUZXh0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuc2VsZWN0aW9uU3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5zZWxlY3Rpb25FbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvc2luZykgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBwLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodmFsICYmIHRoaXMuc2VsSWQgJiYgIXRoaXMuZWRpdElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRJZCA9IHRoaXMuc2VsSWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGl2ZVRBKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNldFJhbmdlVGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdGlvblN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuc2VsZWN0aW9uRW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHAuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pLCAwKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2xlYXJQcm94eSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm94eVRBKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJveHlUQS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5wcm94eVRBID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNvcHlOb2RlKGN1dDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxJZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IG5kID0gdGhpcy5mQWxsKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghbmQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmNsaXBib2FyZCA9IHsgZGF0YTogSlNPTi5zdHJpbmdpZnkobmQpLCBpc1Jvb3Q6ICEhbmQuaXNSb290LCBjdXQgfTtcclxuICAgICAgICAvLyBBbHNvIHdyaXRlIHRvIHN5c3RlbSBjbGlwYm9hcmQgc28gcGFzdGUgd29ya3MgaW4gb3RoZXIgdGV4dCBmaWVsZHNcclxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChuZC50ZXh0KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8qIGlnbm9yZSAqL1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChjdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgICAgICBpZiAobmQuaXNSb290KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290cyA9IHRoaXMucm9vdHMuZmlsdGVyKChyKSA9PiByLmlkICE9PSBuZC5pZCk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZW1BbGwobmQuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLmNsclNlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgcGFzdGVOb2RlKHN0cmlwOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsaXBib2FyZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGNsb25lOiBNaW5kTm9kZURhdGEgPSBKU09OLnBhcnNlKHRoaXMuY2xpcGJvYXJkLmRhdGEpO1xyXG4gICAgICAgIGlmICghdGhpcy5jbGlwYm9hcmQuY3V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlSWQgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuLmlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSByZUlkKGMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZUlkKGNsb25lKTtcclxuICAgICAgICB9IGVsc2UgdGhpcy5jbGlwYm9hcmQgPSBudWxsO1xyXG4gICAgICAgIGlmIChzdHJpcCkge1xyXG4gICAgICAgICAgICBjb25zdCBzID0gKG46IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgbi5jb25uZWN0aW9uQ29sb3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBuLmNvbm5lY3Rpb25XaWR0aCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSBzKGMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzKGNsb25lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgIGlmIChjbG9uZS5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHRoaXMucm9vdHNbdGhpcy5yb290cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgY2xvbmUueCA9IGxhc3Q/LnggPz8gMDtcclxuICAgICAgICAgICAgY2xvbmUueSA9IChsYXN0Py55ID8/IDApICsgMjAwO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzLnB1c2goY2xvbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsb25lLmlzUm9vdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICAgICAgICAgIGlmIChwKSBwLmNoaWxkcmVuLnB1c2goY2xvbmUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgdGhpcy5yb290cy5wdXNoKHsgLi4uY2xvbmUsIGlzUm9vdDogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWwxKGNsb25lLmlkKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNhbmNlbERyYWcoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRzKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmRzLmlzUm9vdERyYWcpIHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZHMgYXMgQ2hpbGREcmFnO1xyXG4gICAgICAgICAgICBpZiAoZC5zbmFwKSB0aGlzLnJvb3RzID0gSlNPTi5wYXJzZShkLnNuYXApO1xyXG4gICAgICAgICAgICBkLmdob3N0RWw/LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBkLmluZGljYXRvckVsPy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuY2MpIHRoaXMuY2MudG9nZ2xlQ2xhc3MoXCJtei1jdXJzb3ItZ3JhYlwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX211ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5ib3hTZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRCb3goZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0N2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0N2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNjKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNjLnRvZ2dsZUNsYXNzKFwibXotY3Vyc29yLWdyYWJiaW5nXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2MudG9nZ2xlQ2xhc3MoXCJtei1jdXJzb3ItZ3JhYlwiLCB0aGlzLnNwYWNlRG93bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmRzKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmRzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5kcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZHMuaXNSb290RHJhZykge1xyXG4gICAgICAgICAgICB0aGlzLmRzID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkID0gdGhpcy5kcyBhcyBDaGlsZERyYWc7XHJcbiAgICAgICAgY29uc3QgcmMgPSB0aGlzLmNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IG14ID0gKGUuY2xpZW50WCAtIHJjLmxlZnQgLSB0aGlzLnBhblgpIC8gdGhpcy56b29tLFxyXG4gICAgICAgICAgICBteSA9IChlLmNsaWVudFkgLSByYy50b3AgLSB0aGlzLnBhblkpIC8gdGhpcy56b29tO1xyXG4gICAgICAgIGNvbnN0IGR4ID0gbXggLSBkLnN0YXJ0WCxcclxuICAgICAgICAgICAgZHkgPSBteSAtIGQuc3RhcnRZO1xyXG4gICAgICAgIGNvbnN0IGRuID0gdGhpcy5mQWxsKGQubm9kZUlkKTtcclxuICAgICAgICBjb25zdCBkblcgPSBkbiA/IGRuLndpZHRoIDogMDtcclxuICAgICAgICBjb25zdCBpc0xlZnRTaWRlID0gZG4/LnNpZGUgPT09IFwibGVmdFwiO1xyXG4gICAgICAgIGNvbnN0IGVkZ2VYID0gZG5cclxuICAgICAgICAgICAgPyBpc0xlZnRTaWRlXHJcbiAgICAgICAgICAgICAgICA/IGRuLnggKyBkeCArIGRuVyAvIDJcclxuICAgICAgICAgICAgICAgIDogZG4ueCArIGR4IC0gZG5XIC8gMlxyXG4gICAgICAgICAgICA6IG14O1xyXG4gICAgICAgIGNvbnN0IGd5ID0gZG4gPyBkbi55ICsgZHkgOiBteTtcclxuICAgICAgICBjb25zdCB0Z3QgPSB0aGlzLmRldFRndChlZGdlWCwgZWRnZVgsIGd5LCBkLm5vZGVJZCk7XHJcbiAgICAgICAgaWYgKHRndCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlY1BvcygpO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbElkcyA9IHRoaXMuYWxsU2VsKCk7XHJcbiAgICAgICAgICAgIC8vIEZJWCAjNjogY29sbGVjdCBub2RlcyBpbiBvcmlnaW5hbCB0cmVlIG9yZGVyLCBwcmVzZXJ2ZSB0aGVpciBzZXF1ZW5jZVxyXG4gICAgICAgICAgICBjb25zdCB0b01vdmU6IE1pbmROb2RlRGF0YVtdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RPcmRlcmVkID0gKHBhcmVudDogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gcGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IHBhcmVudC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsSWRzLmhhcyhjLmlkKSAmJiAhYy5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Nb3ZlLnVuc2hpZnQocGFyZW50LmNoaWxkcmVuLnNwbGljZShpLCAxKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdE9yZGVyZWQoYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgY29sbGVjdE9yZGVyZWQocik7XHJcbiAgICAgICAgICAgIGlmICghdG9Nb3ZlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGV0ID0gdGhpcy5yZW1BbGwoZC5ub2RlSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRldCkgdG9Nb3ZlLnB1c2goZGV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgc2lkZSBvZiBtb3ZlZCBub2RlcyB0byBtYXRjaCB0YXJnZXQncyBzaWRlXHJcbiAgICAgICAgICAgIGNvbnN0IHRndE5vZGUgPSB0aGlzLmZBbGwodGd0LmlkKTtcclxuICAgICAgICAgICAgY29uc3QgdGd0U2lkZSA9XHJcbiAgICAgICAgICAgICAgICB0Z3ROb2RlPy5zaWRlIHx8ICh0Z3ROb2RlPy5pc1Jvb3QgPyB1bmRlZmluZWQgOiBcInJpZ2h0XCIpO1xyXG4gICAgICAgICAgICBpZiAodGd0U2lkZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0U2lkZSA9IChuOiBNaW5kTm9kZURhdGEsIHM6IFwibGVmdFwiIHwgXCJyaWdodFwiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zaWRlID0gcztcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgc2V0U2lkZShjLCBzKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG0gb2YgdG9Nb3ZlKSBzZXRTaWRlKG0sIHRndFNpZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEluc2VydCBwcmVzZXJ2aW5nIG9yZGVyXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Nb3ZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkgdGhpcy5pbnNUcmVlKHRvTW92ZVtpXSwgdGd0LmlkLCB0Z3Quem9uZSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuaW5zVHJlZSh0b01vdmVbaV0sIHRvTW92ZVtpIC0gMV0uaWQsIFwiYWZ0ZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gS2VlcCBhbGwgbW92ZWQgbm9kZXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgdGhpcy5tdWx0aVNlbC5jbGVhcigpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG0gb2YgdG9Nb3ZlKSB0aGlzLm11bHRpU2VsLmFkZChtLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxJZCA9IHRvTW92ZS5sZW5ndGggPyB0b01vdmVbMF0uaWQgOiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkLmdob3N0RWw/LnJlbW92ZSgpO1xyXG4gICAgICAgIGQuaW5kaWNhdG9yRWw/LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZHMgPSBudWxsO1xyXG4gICAgICAgIGlmICh0Z3QpIHRoaXMuYW5pbVJlbmRlcigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHVwZFR4KCkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAtLSBTVkcgZ3JvdXAgdHJhbnNmb3JtIHJlcXVpcmVzIGRpcmVjdCBzdHlsZSBmb3IgcGFuL3pvb20gcGVyZm9ybWFuY2VcclxuICAgICAgICB0aGlzLmdFbC5zdHlsZS50cmFuc2Zvcm0gPVxyXG4gICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArXHJcbiAgICAgICAgICAgIHRoaXMucGFuWCArXHJcbiAgICAgICAgICAgIFwicHgsXCIgK1xyXG4gICAgICAgICAgICB0aGlzLnBhblkgK1xyXG4gICAgICAgICAgICBcInB4KSBzY2FsZShcIiArXHJcbiAgICAgICAgICAgIHRoaXMuem9vbSArXHJcbiAgICAgICAgICAgIFwiKVwiO1xyXG4gICAgICAgIGlmICh0aGlzLnpvb21MYWJlbClcclxuICAgICAgICAgICAgdGhpcy56b29tTGFiZWwuaW5uZXJUZXh0ID0gTWF0aC5yb3VuZCh0aGlzLnpvb20gKiAxMDApICsgXCIlXCI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHpvb21CeShmYWN0b3I6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHJjID0gdGhpcy5jYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpZiAocmMud2lkdGggPCAxIHx8IHJjLmhlaWdodCA8IDEpIHJldHVybjtcclxuICAgICAgICBjb25zdCBjeCA9IHJjLndpZHRoIC8gMixcclxuICAgICAgICAgICAgY3kgPSByYy5oZWlnaHQgLyAyO1xyXG4gICAgICAgIGNvbnN0IG56ID0gTWF0aC5tYXgoMC4xLCBNYXRoLm1pbih0aGlzLnpvb20gKiBmYWN0b3IsIDMpKTtcclxuICAgICAgICB0aGlzLnBhblggPSBjeCAtIChjeCAtIHRoaXMucGFuWCkgKiAobnogLyB0aGlzLnpvb20pO1xyXG4gICAgICAgIHRoaXMucGFuWSA9IGN5IC0gKGN5IC0gdGhpcy5wYW5ZKSAqIChueiAvIHRoaXMuem9vbSk7XHJcbiAgICAgICAgdGhpcy56b29tID0gbno7XHJcbiAgICAgICAgdGhpcy51cGRUeCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB6b29tVG8obGV2ZWw6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHJjID0gdGhpcy5jYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpZiAocmMud2lkdGggPCAxIHx8IHJjLmhlaWdodCA8IDEpIHJldHVybjtcclxuICAgICAgICBjb25zdCBjeCA9IHJjLndpZHRoIC8gMixcclxuICAgICAgICAgICAgY3kgPSByYy5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHRoaXMucGFuWCA9IGN4IC0gKGN4IC0gdGhpcy5wYW5YKSAqIChsZXZlbCAvIHRoaXMuem9vbSk7XHJcbiAgICAgICAgdGhpcy5wYW5ZID0gY3kgLSAoY3kgLSB0aGlzLnBhblkpICogKGxldmVsIC8gdGhpcy56b29tKTtcclxuICAgICAgICB0aGlzLnpvb20gPSBsZXZlbDtcclxuICAgICAgICB0aGlzLnVwZFR4KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRvTGF5b3V0KG46IE1pbmROb2RlRGF0YSkge1xyXG4gICAgICAgIHRoaXMuY1NIKG4pO1xyXG4gICAgICAgIHRoaXMuY1hZKG4pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjU0gobjogTWluZE5vZGVEYXRhKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCB2bSA9IHRoaXMuc3R5bGUubm9kZUdhcFkgPz8gMjQ7XHJcbiAgICAgICAgaWYgKCFuLmNoaWxkcmVuPy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgKG4gYXMgTGF5b3V0Tm9kZSkuX3NoID0gbi5oZWlnaHQgKyB2bTtcclxuICAgICAgICAgICAgcmV0dXJuIChuIGFzIExheW91dE5vZGUpLl9zaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgdG90YWwgKz0gdGhpcy5jU0goYyk7XHJcbiAgICAgICAgKG4gYXMgTGF5b3V0Tm9kZSkuX3NoID0gTWF0aC5tYXgobi5oZWlnaHQgKyB2bSwgdG90YWwpO1xyXG4gICAgICAgIHJldHVybiAobiBhcyBMYXlvdXROb2RlKS5fc2g7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNYWShuOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICBpZiAoIW4uY2hpbGRyZW4/Lmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGhtID0gdGhpcy5zdHlsZS5jb25uZWN0aW9uTGVuZ3RoIHx8IDgwO1xyXG4gICAgICAgIC8vIFNwbGl0IGNoaWxkcmVuIGJ5IHNpZGUgZm9yIHJvb3Qgbm9kZXNcclxuICAgICAgICBjb25zdCByaWdodENoID0gbi5jaGlsZHJlbi5maWx0ZXIoKGMpID0+IGMuc2lkZSAhPT0gXCJsZWZ0XCIpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRDaCA9IG4uY2hpbGRyZW4uZmlsdGVyKChjKSA9PiBjLnNpZGUgPT09IFwibGVmdFwiKTtcclxuICAgICAgICAvLyBMYXlvdXQgcmlnaHQgY2hpbGRyZW5cclxuICAgICAgICBpZiAocmlnaHRDaC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IHRvdCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiByaWdodENoKSB0b3QgKz0gKGMgYXMgTGF5b3V0Tm9kZSkuX3NoO1xyXG4gICAgICAgICAgICBsZXQgY3kgPSBuLnkgLSB0b3QgLyAyO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgcmlnaHRDaCkge1xyXG4gICAgICAgICAgICAgICAgYy54ID0gbi54ICsgbi53aWR0aCAvIDIgKyBobSArIGMud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgYy55ID0gY3kgKyAoYyBhcyBMYXlvdXROb2RlKS5fc2ggLyAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jWFkoYyk7XHJcbiAgICAgICAgICAgICAgICBjeSArPSAoYyBhcyBMYXlvdXROb2RlKS5fc2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTGF5b3V0IGxlZnQgY2hpbGRyZW4gKG1pcnJvcilcclxuICAgICAgICBpZiAobGVmdENoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgdG90ID0gMDtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGxlZnRDaCkgdG90ICs9IChjIGFzIExheW91dE5vZGUpLl9zaDtcclxuICAgICAgICAgICAgbGV0IGN5ID0gbi55IC0gdG90IC8gMjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGxlZnRDaCkge1xyXG4gICAgICAgICAgICAgICAgYy54ID0gbi54IC0gbi53aWR0aCAvIDIgLSBobSAtIGMud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgYy55ID0gY3kgKyAoYyBhcyBMYXlvdXROb2RlKS5fc2ggLyAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jWFkoYyk7XHJcbiAgICAgICAgICAgICAgICBjeSArPSAoYyBhcyBMYXlvdXROb2RlKS5fc2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNhbGNXKHR4dDogc3RyaW5nLCBpc1I6IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGZzID0gaXNSID8gdGhpcy5zdHlsZS5yb290Rm9udFNpemUgOiB0aGlzLnN0eWxlLm5vZGVGb250U2l6ZTtcclxuICAgICAgICBjb25zdCBmZiA9IGlzUiA/IHRoaXMuc3R5bGUucm9vdEZvbnRGYW1pbHkgOiB0aGlzLnN0eWxlLm5vZGVGb250RmFtaWx5O1xyXG4gICAgICAgIGxldCBtdyA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCBsIG9mIHR4dC5zcGxpdChcIlxcblwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIGQuYWRkQ2xhc3MoXCJtei1tZWFzdXJlLXNwYW5cIik7XHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHsgXCItLW16LWZzXCI6IGZzICsgXCJweFwiLCBcIi0tbXotZmZcIjogZmYgfSkuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIChbaywgdl0pID0+IGQuc3R5bGUuc2V0UHJvcGVydHkoaywgdiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGQuaW5uZXJUZXh0ID0gbCB8fCBcIiBcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkKTtcclxuICAgICAgICAgICAgaWYgKGQub2Zmc2V0V2lkdGggPiBtdykgbXcgPSBkLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgIGlzUiA/IHRoaXMuc3R5bGUucm9vdE1pbldpZHRoIDogdGhpcy5zdHlsZS5ub2RlTWluV2lkdGgsXHJcbiAgICAgICAgICAgIG13ICsgdGhpcy5zdHlsZS5ub2RlUGFkWCAqIDIgKyA0LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNhbGNIKHR4dDogc3RyaW5nLCBpc1I6IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGZzID0gaXNSID8gdGhpcy5zdHlsZS5yb290Rm9udFNpemUgOiB0aGlzLnN0eWxlLm5vZGVGb250U2l6ZTtcclxuICAgICAgICBjb25zdCBsaCA9IHRoaXMuc3R5bGUubm9kZUxpbmVIZWlnaHQgfHwgMS41O1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChcclxuICAgICAgICAgICAgaXNSID8gdGhpcy5zdHlsZS5yb290TWluSGVpZ2h0IDogdGhpcy5zdHlsZS5ub2RlTWluSGVpZ2h0LFxyXG4gICAgICAgICAgICB0eHQuc3BsaXQoXCJcXG5cIikubGVuZ3RoICogZnMgKiBsaCArIDE0LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlY1BvcygpIHtcclxuICAgICAgICB0aGlzLm9sZFBvcy5jbGVhcigpO1xyXG4gICAgICAgIGNvbnN0IHYgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2xkUG9zLnNldChuLmlkLCB7IHg6IG4ueCwgeTogbi55IH0pO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgdihjKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB2KHIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhbmltUmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5ub2Rlc0cgfHwgIXRoaXMuZWRnZXNHIHx8ICF0aGlzLm9sZFBvcy5zaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbnAgPSBuZXcgTWFwPHN0cmluZywgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9PigpO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9MYXlvdXQocik7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBucC5zZXQobi5pZCwgeyB4OiBuLngsIHk6IG4ueSB9KTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB2KGMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2KHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcCA9IG5ldyBNYXA8c3RyaW5nLCB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbaWQsIHBdIG9mIG5wKSBzcC5zZXQoaWQsIHRoaXMub2xkUG9zLmdldChpZCkgPz8gcCk7XHJcbiAgICAgICAgY29uc3QgZHVyID0gMjAwLFxyXG4gICAgICAgICAgICB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1JZCkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltSWQpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2lkLCBwXSBvZiBucCkge1xyXG4gICAgICAgICAgICBjb25zdCBuID0gdGhpcy5mQWxsKGlkKTtcclxuICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgIG4ueCA9IHAueDtcclxuICAgICAgICAgICAgICAgIG4ueSA9IHAueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2lkLCBwXSBvZiBzcCkge1xyXG4gICAgICAgICAgICBjb25zdCBuID0gdGhpcy5mQWxsKGlkKTtcclxuICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgIG4ueCA9IHAueDtcclxuICAgICAgICAgICAgICAgIG4ueSA9IHAueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUZPKCk7XHJcbiAgICAgICAgdGhpcy5lZGdlc0cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kcmF3RWRnZXMocik7XHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IChub3c6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0dCA9IE1hdGgubWluKChub3cgLSB0MCkgLyBkdXIsIDEpLFxyXG4gICAgICAgICAgICAgICAgZWFzZSA9IDEgLSBNYXRoLnBvdygxIC0gdHQsIDMpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtpZCwgZnBdIG9mIG5wKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gc3AuZ2V0KGlkKSE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuID0gdGhpcy5mQWxsKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi54ID0gcy54ICsgKGZwLnggLSBzLngpICogZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBuLnkgPSBzLnkgKyAoZnAueSAtIHMueSkgKiBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZWRnZXNHIS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kcmF3RWRnZXMocik7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRk8oKTtcclxuICAgICAgICAgICAgaWYgKHR0IDwgMSkgdGhpcy5hbmltSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbaWQsIHBdIG9mIG5wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMuZkFsbChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi54ID0gcC54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLnkgPSBwLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUlkID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hbmltSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNvZnRSZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVkZ2VzRyB8fCAhdGhpcy5ub2Rlc0cpIHJldHVybjtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kb0xheW91dChyKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZPKCk7XHJcbiAgICAgICAgdGhpcy5lZGdlc0cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kcmF3RWRnZXMocik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXZQYW5lbCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVkZ2VzRyB8fCAhdGhpcy5ub2Rlc0cgfHwgIXRoaXMub3ZlcmxheUcpIHJldHVybjtcclxuICAgICAgICB0aGlzLmVkZ2VzRy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubm9kZXNHLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5Ry5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubGl2ZVRBID0gbnVsbDtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICB0aGlzLmRvTGF5b3V0KHIpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdFZGdlcyhyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHRoaXMuZHJhd05vZGVzKHIpO1xyXG4gICAgICAgIGlmICh0aGlzLmJveFNlbCAmJiB0aGlzLmJveEVsKSB0aGlzLm92ZXJsYXlHLmFwcGVuZENoaWxkKHRoaXMuYm94RWwpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGV2UGFuZWwoKTtcclxuICAgICAgICBpZiAodGhpcy5lZGl0SWQpIHRoaXMuY2xlYXJQcm94eSgpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbnN1cmVQcm94eSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBiUGF0aChzeDogbnVtYmVyLCBzeTogbnVtYmVyLCBleDogbnVtYmVyLCBleTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZHggPSBleCAtIHN4O1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdHlsZS5jb25uZWN0aW9uU3R5bGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInN0cmFpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNXCIgKyBzeCArIFwiIFwiICsgc3kgKyBcIkxcIiArIGV4ICsgXCIgXCIgKyBleTtcclxuICAgICAgICAgICAgY2FzZSBcImN1cnZlZFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBcIk1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3ggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCJRXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIChzeCArIGR4ICogMC43KSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2FzZSBcInN0ZXBcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbXggPSAoc3ggKyBleCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVwiICsgc3ggKyBcIiBcIiArIHN5ICsgXCJIXCIgKyBteCArIFwiVlwiICsgZXkgKyBcIkhcIiArIGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJicmFja2V0XCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG14ID0gc3ggKyBkeCAqIDAuNTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN4ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3kgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ1wiICtcclxuICAgICAgICAgICAgICAgICAgICBteCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgbXggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV4ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImxvb3NlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTVwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIkNcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKHN4ICsgZHggKiAwLjYpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKHN5ICsgKGV5IC0gc3kpICogMC4xKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIChleCAtIGR4ICogMC4zKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIChleSAtIChleSAtIHN5KSAqIDAuMSkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV5XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBcIk1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3ggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIChzeCArIGR4ICogMC40KSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKGV4IC0gZHggKiAwLjQpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV5XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJhd0VkZ2VzKG5kOiBNaW5kTm9kZURhdGEsIGluaD86IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHBSID0gISFuZC5pc1Jvb3Q7XHJcbiAgICAgICAgLy8gRm9yIHN0ZXAvYnJhY2tldCBzdHlsZXMsIHotb3JkZXIgbWF0dGVycy4gRHJhdyBjaGlsZHJlbiBmdXJ0aGVzdCBmcm9tIGNlbnRlciBmaXJzdCxcclxuICAgICAgICAvLyBjbG9zZXN0IHRvIGNlbnRlciBsYXN0IChvbiB0b3ApLCBzbyBlYWNoIGNoaWxkJ3MgY29sb3IgaXMgdmlzaWJsZSBhdCB0aGUganVuY3Rpb24uXHJcbiAgICAgICAgY29uc3QgYWJvdmU6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgY29uc3QgYmVsb3c6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobmQuY2hpbGRyZW5baV0ueSA8IG5kLnkpIGFib3ZlLnB1c2goaSk7XHJcbiAgICAgICAgICAgIGVsc2UgYmVsb3cucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWJvdmU6IHRvcC10by1ib3R0b20gKGZ1cnRoZXN0IGZpcnN0LCBjbG9zZXN0IHRvIGNlbnRlciBsYXN0ID0gb24gdG9wKVxyXG4gICAgICAgIC8vIEJlbG93OiBib3R0b20tdG8tdG9wIChmdXJ0aGVzdCBmaXJzdCwgY2xvc2VzdCB0byBjZW50ZXIgbGFzdCA9IG9uIHRvcClcclxuICAgICAgICBjb25zdCBvcmRlciA9IFsuLi5hYm92ZSwgLi4uYmVsb3cucmV2ZXJzZSgpXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGkgb2Ygb3JkZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgY2ggPSBuZC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgY29uc3QgY29sID0gdGhpcy5nZXRDQyhjaCwgcFIsIGksIGluaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTGVmdCA9IGNoLnNpZGUgPT09IFwibGVmdFwiO1xyXG4gICAgICAgICAgICAvLyBBY2NvdW50IGZvciBib3JkZXIgd2lkdGggc28gY29ubmVjdGlvbnMgcmVhY2ggb3V0ZXIgZWRnZVxyXG4gICAgICAgICAgICBjb25zdCBwVmlzID0gdGhpcy5ub2RlVmlzKG5kKTtcclxuICAgICAgICAgICAgY29uc3QgcEJXID0gcFZpcy5iUyAhPT0gXCJub25lXCIgPyBwVmlzLmJXIDogMDtcclxuICAgICAgICAgICAgY29uc3QgY1ZpcyA9IHRoaXMubm9kZVZpcyhjaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNCVyA9IGNWaXMuYlMgIT09IFwibm9uZVwiID8gY1Zpcy5iVyA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHN4ID0gaXNMZWZ0XHJcbiAgICAgICAgICAgICAgICA/IG5kLnggLSBuZC53aWR0aCAvIDIgLSBwQldcclxuICAgICAgICAgICAgICAgIDogbmQueCArIG5kLndpZHRoIC8gMiArIHBCVztcclxuICAgICAgICAgICAgY29uc3QgZXggPSBpc0xlZnRcclxuICAgICAgICAgICAgICAgID8gY2gueCArIGNoLndpZHRoIC8gMiArIGNCV1xyXG4gICAgICAgICAgICAgICAgOiBjaC54IC0gY2gud2lkdGggLyAyIC0gY0JXO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICAgICAgXCJwYXRoXCIsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKFwiZFwiLCB0aGlzLmJQYXRoKHN4LCBuZC55LCBleCwgY2gueSkpO1xyXG4gICAgICAgICAgICBwLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBjb2wpO1xyXG4gICAgICAgICAgICBwLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCIsXHJcbiAgICAgICAgICAgICAgICBTdHJpbmcoY2guY29ubmVjdGlvbldpZHRoID8/IHRoaXMuc3R5bGUuY29ubmVjdGlvbldpZHRoKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRzPy5pc0RyYWdnaW5nICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5kcy5pc1Jvb3REcmFnICYmXHJcbiAgICAgICAgICAgICAgICAodGhpcy5kcyBhcyBDaGlsZERyYWcpLm5vZGVJZCA9PT0gY2guaWRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJvcGFjaXR5XCIsIFwiMC4xNVwiKTtcclxuICAgICAgICAgICAgdGhpcy5lZGdlc0cuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0VkZ2VzKFxyXG4gICAgICAgICAgICAgICAgY2gsXHJcbiAgICAgICAgICAgICAgICBjaC5jb25uZWN0aW9uQ29sb3IgPz9cclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdHlsZS5jb25uZWN0aW9uUmFpbmJvdyAmJiBwUiA/IGNvbCA6IGluaCksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcmF3Tm9kZXMobjogTWluZE5vZGVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3T25lKG4pO1xyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB0aGlzLmRyYXdOb2RlcyhjKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJhd09uZShuZDogTWluZE5vZGVEYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgXCJmb3JlaWduT2JqZWN0XCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmby5pZCA9IFwibW4tXCIgKyBuZC5pZDtcclxuICAgICAgICBjb25zdCB2ID0gdGhpcy5ub2RlVmlzKG5kKTtcclxuICAgICAgICBjb25zdCBiVyA9IHYuYlMgIT09IFwibm9uZVwiID8gdi5iVyA6IDA7XHJcbiAgICAgICAgY29uc3QgdmlzdWFsVyA9IG5kLndpZHRoICsgYlcgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpc3VhbEggPSBuZC5oZWlnaHQgKyBiVyAqIDI7XHJcbiAgICAgICAgY29uc3Qgc2VsRXggPSB0aGlzLmlzU2VsKG5kLmlkKSA/IHRoaXMuc3R5bGUuc2VsZWN0aW9uV2lkdGggKyA0IDogMDtcclxuICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyhuZC54IC0gdmlzdWFsVyAvIDIgLSBzZWxFeCkpO1xyXG4gICAgICAgIGZvLnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKG5kLnkgLSB2aXN1YWxIIC8gMiAtIHNlbEV4KSk7XHJcbiAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHZpc3VhbFcgKyBzZWxFeCAqIDIpKTtcclxuICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKHZpc3VhbEggKyBzZWxFeCAqIDIpKTtcclxuICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJvdmVyZmxvd1wiLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgLy8gb3ZlcmZsb3c6dmlzaWJsZSBzZXQgdmlhIFNWRyBhdHRyaWJ1dGUgYWJvdmVcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZHM/LmlzRHJhZ2dpbmcgJiZcclxuICAgICAgICAgICAgIXRoaXMuZHMuaXNSb290RHJhZyAmJlxyXG4gICAgICAgICAgICAodGhpcy5kcyBhcyBDaGlsZERyYWcpLm5vZGVJZCA9PT0gbmQuaWRcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIGZvLnRvZ2dsZUNsYXNzKFwibXotZHJhZy10cmFuc3BhcmVudFwiLCB0cnVlKTtcclxuICAgICAgICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB3cmFwLmFkZENsYXNzKFwibXotbm9kZS13cmFwXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmVkaXRJZCA9PT0gbmQuaWQpIHdyYXAuYXBwZW5kQ2hpbGQodGhpcy5ta1RBKG5kKSk7XHJcbiAgICAgICAgZWxzZSB3cmFwLmFwcGVuZENoaWxkKHRoaXMubWtEaXYobmQpKTtcclxuICAgICAgICBmby5hcHBlbmRDaGlsZCh3cmFwKTtcclxuICAgICAgICB0aGlzLm5vZGVzRy5hcHBlbmRDaGlsZChmbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBub2RlVmlzKG5kOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICBjb25zdCBpc1IgPSAhIW5kLmlzUm9vdDtcclxuICAgICAgICBjb25zdCBzbyA9IG5kLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgY29uc3QgYmcgPVxyXG4gICAgICAgICAgICBzby5iZ0NvbG9yID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCZ0NvbG9yIDogdGhpcy5zdHlsZS5ub2RlQmdDb2xvcik7XHJcbiAgICAgICAgY29uc3QgdGMgPVxyXG4gICAgICAgICAgICBzby50ZXh0Q29sb3IgPz9cclxuICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdFRleHRDb2xvciA6IHRoaXMuc3R5bGUubm9kZVRleHRDb2xvcik7XHJcbiAgICAgICAgY29uc3QgZnMgPVxyXG4gICAgICAgICAgICBzby5mb250U2l6ZSA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Rm9udFNpemUgOiB0aGlzLnN0eWxlLm5vZGVGb250U2l6ZSk7XHJcbiAgICAgICAgY29uc3QgZmYgPVxyXG4gICAgICAgICAgICBzby5mb250RmFtaWx5ID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RGb250RmFtaWx5IDogdGhpcy5zdHlsZS5ub2RlRm9udEZhbWlseSk7XHJcbiAgICAgICAgY29uc3QgYlMgPVxyXG4gICAgICAgICAgICBzby5ib3JkZXJTdHlsZSA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyU3R5bGUgOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJTdHlsZSk7XHJcbiAgICAgICAgY29uc3QgYlcgPVxyXG4gICAgICAgICAgICBzby5ib3JkZXJXaWR0aCA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyV2lkdGggOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJXaWR0aCk7XHJcbiAgICAgICAgbGV0IGJDID1cclxuICAgICAgICAgICAgc28uYm9yZGVyQ29sb3IgPz9cclxuICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEJvcmRlckNvbG9yIDogdGhpcy5zdHlsZS5ub2RlQm9yZGVyQ29sb3IpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5jb25uZWN0aW9uUmFpbmJvdyAmJlxyXG4gICAgICAgICAgICAhc28uYm9yZGVyQ29sb3IgJiZcclxuICAgICAgICAgICAgIWlzUiAmJlxyXG4gICAgICAgICAgICBuZC5jb25uZWN0aW9uQ29sb3JcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIGJDID0gbmQuY29ubmVjdGlvbkNvbG9yO1xyXG4gICAgICAgIGNvbnN0IHJhZCA9XHJcbiAgICAgICAgICAgIHNvLmJvcmRlclJhZGl1cyA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyUmFkaXVzIDogdGhpcy5zdHlsZS5ub2RlQm9yZGVyUmFkaXVzKTtcclxuICAgICAgICByZXR1cm4geyBpc1IsIGJnLCB0YywgZnMsIGZmLCBiUywgYlcsIGJDLCByYWQgfTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgbWtEaXYobmQ6IE1pbmROb2RlRGF0YSk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IHYgPSB0aGlzLm5vZGVWaXMobmQpO1xyXG4gICAgICAgIGNvbnN0IHNlbCA9IHRoaXMuaXNTZWwobmQuaWQpO1xyXG4gICAgICAgIGNvbnN0IHRhID0gdGhpcy5zdHlsZS50ZXh0QWxpZ247XHJcbiAgICAgICAgY29uc3QgcGFkWCA9IHRoaXMuc3R5bGUubm9kZVBhZFg7XHJcbiAgICAgICAgY29uc3QgbGggPSB0aGlzLnN0eWxlLm5vZGVMaW5lSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IG9mZiA9IHRoaXMuc3R5bGUuc2VsZWN0aW9uT3V0bGluZU9mZnNldDtcclxuICAgICAgICBjb25zdCBiVyA9IHYuYlMgIT09IFwibm9uZVwiID8gdi5iVyA6IDA7XHJcbiAgICAgICAgY29uc3QgdmlzdWFsVyA9IG5kLndpZHRoICsgYlcgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpc3VhbEggPSBuZC5oZWlnaHQgKyBiVyAqIDI7XHJcbiAgICAgICAgY29uc3QgYm9yZGVyQ1NTID1cclxuICAgICAgICAgICAgdi5iUyAhPT0gXCJub25lXCJcclxuICAgICAgICAgICAgICAgID8gYGJvcmRlcjoke3YuYld9cHggJHt2LmJTfSAke3YuYkN9O2BcclxuICAgICAgICAgICAgICAgIDogXCJib3JkZXI6bm9uZTtcIjtcclxuICAgICAgICBjb25zdCBzZWxDU1MgPSBzZWxcclxuICAgICAgICAgICAgPyBgb3V0bGluZToke3RoaXMuc3R5bGUuc2VsZWN0aW9uV2lkdGh9cHggc29saWQgJHt0aGlzLnN0eWxlLnNlbGVjdGlvbkNvbG9yfTtvdXRsaW5lLW9mZnNldDoke29mZn1weDtgXHJcbiAgICAgICAgICAgIDogXCJcIjtcclxuICAgICAgICBkaXYuYWRkQ2xhc3MoXCJtei1ub2RlLWRpdlwiKTtcclxuICAgICAgICBjb25zdCBkcyA9IGRpdi5zdHlsZTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotd1wiLCB2aXN1YWxXICsgXCJweFwiKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotaFwiLCB2aXN1YWxIICsgXCJweFwiKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcclxuICAgICAgICAgICAgXCItLW16LWpjXCIsXHJcbiAgICAgICAgICAgIHRhID09PSBcImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgPyBcImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgOiB0YSA9PT0gXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgID8gXCJmbGV4LWVuZFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJjZW50ZXJcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1yYWRcIiwgdi5yYWQgKyBcInB4XCIpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1md1wiLCBTdHJpbmcodi5pc1IgPyA3MDAgOiA1MDApKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotZnNcIiwgdi5mcyArIFwicHhcIik7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LWZmXCIsIHYuZmYpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei10YVwiLCB0YSk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LWxoXCIsIFN0cmluZyhsaCkpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1iZ1wiLCB2LmJnKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotdGNcIiwgdi50Yyk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LXBhZFwiLCBgNnB4ICR7cGFkWH1weGApO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1jdXJzb3JcIiwgdi5pc1IgPyBcIm1vdmVcIiA6IFwiZ3JhYlwiKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcclxuICAgICAgICAgICAgXCItLW16LWJvcmRlclwiLFxyXG4gICAgICAgICAgICB2LmJTICE9PSBcIm5vbmVcIiA/IGAke3YuYld9cHggJHt2LmJTfSAke3YuYkN9YCA6IFwibm9uZVwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXHJcbiAgICAgICAgICAgIFwiLS1tei1vdXRsaW5lXCIsXHJcbiAgICAgICAgICAgIHNlbFxyXG4gICAgICAgICAgICAgICAgPyBgJHt0aGlzLnN0eWxlLnNlbGVjdGlvbldpZHRofXB4IHNvbGlkICR7dGhpcy5zdHlsZS5zZWxlY3Rpb25Db2xvcn1gXHJcbiAgICAgICAgICAgICAgICA6IFwibm9uZVwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LW91dGxpbmUtb2ZmXCIsIHNlbCA/IG9mZiArIFwicHhcIiA6IFwiMFwiKTtcclxuICAgICAgICBkaXYuaW5uZXJUZXh0ID0gbmQudGV4dDtcclxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGFjZURvd24pIHJldHVybjtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5jYz8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0RibCA9IHRoaXMubGNuaWQgPT09IG5kLmlkICYmIG5vdyAtIHRoaXMubGN0IDwgMzAwO1xyXG4gICAgICAgICAgICB0aGlzLmxjdCA9IG5vdztcclxuICAgICAgICAgICAgdGhpcy5sY25pZCA9IG5kLmlkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21taXRFZGl0ICYmIHRoaXMuZWRpdElkICE9PSBuZC5pZCkgdGhpcy5jb21taXRFZGl0KCk7XHJcbiAgICAgICAgICAgIGlmIChpc0RibCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0SWQgPSBuZC5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dTZWwobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlTZWwuaGFzKG5kLmlkKSkgdGhpcy5zZWwxKG5kLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgcmMgPSB0aGlzLmNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBseCA9IChlLmNsaWVudFggLSByYy5sZWZ0IC0gdGhpcy5wYW5YKSAvIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgIGx5ID0gKGUuY2xpZW50WSAtIHJjLnRvcCAtIHRoaXMucGFuWSkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIGlmIChuZC5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlZXJzOiB7IGlkOiBzdHJpbmc7IHN4OiBudW1iZXI7IHN5OiBudW1iZXIgfVtdID0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aVNlbC5zaXplID4gMSlcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG1pZCBvZiB0aGlzLm11bHRpU2VsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWQgPT09IG5kLmlkKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW4gPSB0aGlzLmZBbGwobWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1uPy5pc1Jvb3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZWVycy5wdXNoKHsgaWQ6IG1pZCwgc3g6IG1uLngsIHN5OiBtbi55IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSb290RHJhZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IG5kLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WDogbHgsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRZOiBseSxcclxuICAgICAgICAgICAgICAgICAgICBuc3g6IG5kLngsXHJcbiAgICAgICAgICAgICAgICAgICAgbnN5OiBuZC55LFxyXG4gICAgICAgICAgICAgICAgICAgIHBlZXJzOiBwZWVycy5sZW5ndGggPyBwZWVycyA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRHJhZ2dpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUm9vdERyYWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbmQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRYOiBseCxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFk6IGx5LFxyXG4gICAgICAgICAgICAgICAgICAgIGdob3N0RWw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yRWw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgc25hcDogSlNPTi5zdHJpbmdpZnkodGhpcy5yb290cyksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vZGVDdHgoZSwgbmQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBta1RBKG5kOiBNaW5kTm9kZURhdGEpOiBIVE1MVGV4dEFyZWFFbGVtZW50IHtcclxuICAgICAgICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgICAgICB0YS52YWx1ZSA9IG5kLnRleHQ7XHJcbiAgICAgICAgY29uc3QgdiA9IHRoaXMubm9kZVZpcyhuZCk7XHJcbiAgICAgICAgY29uc3QgdEFsaWduID0gdGhpcy5zdHlsZS50ZXh0QWxpZ247XHJcbiAgICAgICAgY29uc3QgZWRpdE9DID0gdGhpcy5zdHlsZS5lZGl0T3V0bGluZUNvbG9yO1xyXG4gICAgICAgIGNvbnN0IHBhZFggPSB0aGlzLnN0eWxlLm5vZGVQYWRYO1xyXG4gICAgICAgIGNvbnN0IGxoID0gdGhpcy5zdHlsZS5ub2RlTGluZUhlaWdodDtcclxuICAgICAgICBjb25zdCBvZmYgPSB0aGlzLnN0eWxlLnNlbGVjdGlvbk91dGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgY29uc3QgYlcgPSB2LmJTICE9PSBcIm5vbmVcIiA/IHYuYlcgOiAwO1xyXG4gICAgICAgIGNvbnN0IHZpc3VhbFcgPSBuZC53aWR0aCArIGJXICogMjtcclxuICAgICAgICBjb25zdCB2aXN1YWxIID0gbmQuaGVpZ2h0ICsgYlcgKiAyO1xyXG4gICAgICAgIGNvbnN0IGJvcmRlckNTUyA9XHJcbiAgICAgICAgICAgIHYuYlMgIT09IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICA/IGBib3JkZXI6JHt2LmJXfXB4ICR7di5iU30gJHt2LmJDfTtgXHJcbiAgICAgICAgICAgICAgICA6IFwiYm9yZGVyOm5vbmU7XCI7XHJcbiAgICAgICAgY29uc3QgZWRpdE9XID0gdGhpcy5zdHlsZS5lZGl0T3V0bGluZVdpZHRoO1xyXG4gICAgICAgIGNvbnN0IGVkaXRDU1MgPSBgb3V0bGluZToke2VkaXRPV31weCBzb2xpZCAke2VkaXRPQ307b3V0bGluZS1vZmZzZXQ6JHtvZmZ9cHg7dHJhbnNpdGlvbjpub25lO2FuaW1hdGlvbjpub25lO2A7XHJcbiAgICAgICAgdGEuYWRkQ2xhc3MoXCJtei1ub2RlLXRhXCIpO1xyXG4gICAgICAgIGNvbnN0IHRzID0gdGEuc3R5bGU7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LXdcIiwgdmlzdWFsVyArIFwicHhcIik7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LWhcIiwgdmlzdWFsSCArIFwicHhcIik7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LXJhZFwiLCB2LnJhZCArIFwicHhcIik7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LWZ3XCIsIFN0cmluZyh2LmlzUiA/IDcwMCA6IDUwMCkpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1mc1wiLCB2LmZzICsgXCJweFwiKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotZmZcIiwgdi5mZik7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LXRhXCIsIHRBbGlnbik7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LWxoXCIsIFN0cmluZyhsaCkpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1iZ1wiLCB2LmJnKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotdGNcIiwgdi50Yyk7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LXBhZFwiLCBgNnB4ICR7cGFkWH1weGApO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFxyXG4gICAgICAgICAgICBcIi0tbXotYm9yZGVyXCIsXHJcbiAgICAgICAgICAgIHYuYlMgIT09IFwibm9uZVwiID8gYCR7di5iV31weCAke3YuYlN9ICR7di5iQ31gIDogXCJub25lXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotZWRpdC1vdXRsaW5lXCIsIGAke2VkaXRPV31weCBzb2xpZCAke2VkaXRPQ31gKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotZWRpdC1vdXRsaW5lLW9mZlwiLCBvZmYgKyBcInB4XCIpO1xyXG4gICAgICAgIHRhLmFkZENsYXNzKFwibXotbm9kZS10YVwiKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotc2VsLWJnXCIsIGVkaXRPQyArIFwiNDBcIik7XHJcbiAgICAgICAgdGEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XHJcbiAgICAgICAgLy8gRklYOiBpbnB1dCBoYW5kbGVyIFx1MjAxNCByZWNhbGMgc2l6ZSBib3RoIGdyb3cgQU5EIHNocmlua1xyXG4gICAgICAgIHRhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR4dCA9IHRhLnZhbHVlIHx8IFwiIFwiO1xyXG4gICAgICAgICAgICBjb25zdCBudyA9IHRoaXMuY2FsY1codHh0LCAhIW5kLmlzUm9vdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5oID0gdGhpcy5jYWxjSCh0eHQsICEhbmQuaXNSb290KTtcclxuICAgICAgICAgICAgaWYgKG53ICE9PSBuZC53aWR0aCB8fCBuaCAhPT0gbmQuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZC53aWR0aCA9IG53O1xyXG4gICAgICAgICAgICAgICAgbmQuaGVpZ2h0ID0gbmg7XHJcbiAgICAgICAgICAgICAgICB0YS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbXotd1wiLCBuZC53aWR0aCArIGJXICogMiArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICB0YS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbXotaFwiLCBuZC5oZWlnaHQgKyBiVyAqIDIgKyBcInB4XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb2Z0UmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxpdmVUQSA9IHRhO1xyXG4gICAgICAgIGNvbnN0IHNhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVkaXRJZCAhPT0gbmQuaWQpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgdHh0ID0gdGEudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChuZC50ZXh0ICE9PSB0eHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICAgICAgICAgIG5kLnRleHQgPSB0eHQ7XHJcbiAgICAgICAgICAgICAgICBuZC53aWR0aCA9IHRoaXMuY2FsY1codHh0IHx8IFwiIFwiLCAhIW5kLmlzUm9vdCk7XHJcbiAgICAgICAgICAgICAgICBuZC5oZWlnaHQgPSB0aGlzLmNhbGNIKHR4dCB8fCBcIiBcIiwgISFuZC5pc1Jvb3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jb21taXRFZGl0ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5saXZlVEEgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb21taXRFZGl0ID0gc2F2ZTtcclxuICAgICAgICB0YS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBlLmtleSA9PT0gXCJFbnRlclwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWUuc2hpZnRLZXkgJiZcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLmxpbmVCcmVhaylcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIlRhYlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5zZXJ0IHRhYiBhdCBjdXJzb3IgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzID0gdGEuc2VsZWN0aW9uU3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IHRhLnNlbGVjdGlvbkVuZDtcclxuICAgICAgICAgICAgICAgICAgICB0YS52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhLnZhbHVlLnN1YnN0cmluZygwLCBzKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YS52YWx1ZS5zdWJzdHJpbmcoZW5kKTtcclxuICAgICAgICAgICAgICAgICAgICB0YS5zZWxlY3Rpb25TdGFydCA9IHRhLnNlbGVjdGlvbkVuZCA9IHMgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQ3RybCtVcCA9IEhvbWUsIEN0cmwrRG93biA9IEVuZCwgQ3RybCtTaGlmdCtVcCA9IFNoaWZ0K0hvbWUsIEN0cmwrU2hpZnQrRG93biA9IFNoaWZ0K0VuZFxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmIGUua2V5ID09PSBcIkFycm93VXBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0YS5zZWxlY3Rpb25TdGFydCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB0YS5zZWxlY3Rpb25FbmQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgJiYgZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVuID0gdGEudmFsdWUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhLnNlbGVjdGlvbkVuZCA9IGxlbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHRhLnNlbGVjdGlvblN0YXJ0ID0gbGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRhLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGEuc2VsZWN0KCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlRk8oKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsID0gdGhpcy5pc1NlbChuLmlkKTtcclxuICAgICAgICAgICAgY29uc3QgZXggPSBzZWwgPyB0aGlzLnN0eWxlLnNlbGVjdGlvbldpZHRoICsgNCA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG52ID0gdGhpcy5ub2RlVmlzKG4pO1xyXG4gICAgICAgICAgICBjb25zdCBiVyA9IG52LmJTICE9PSBcIm5vbmVcIiA/IG52LmJXIDogMDtcclxuICAgICAgICAgICAgY29uc3QgdncgPSBuLndpZHRoICsgYlcgKiAyO1xyXG4gICAgICAgICAgICBjb25zdCB2aCA9IG4uaGVpZ2h0ICsgYlcgKiAyO1xyXG4gICAgICAgICAgICBjb25zdCBmbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW4tXCIgKyBuLmlkKTtcclxuICAgICAgICAgICAgaWYgKGZvKSB7XHJcbiAgICAgICAgICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyhuLnggLSB2dyAvIDIgLSBleCkpO1xyXG4gICAgICAgICAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcobi55IC0gdmggLyAyIC0gZXgpKTtcclxuICAgICAgICAgICAgICAgIGZvLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh2dyArIGV4ICogMikpO1xyXG4gICAgICAgICAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyh2aCArIGV4ICogMikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB2KGMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHYocik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNsb3NlTWVudSgpIHtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVNZW51KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTWVudS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU1lbnUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgc2hvd01lbnUobWVudTogTWVudSwgZTogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVNZW51ID0gbWVudTtcclxuICAgICAgICBtZW51LnNob3dBdE1vdXNlRXZlbnQoZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNob3dDYW52YXNDdHgoZTogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQb3AoKTtcclxuICAgICAgICBjb25zdCBtZW51ID0gbmV3IE1lbnUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc011bHRpKCkpIHtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdChcImN0eC5iYXRjaERlbFwiKSArIFwiIChcIiArIHRoaXMuYWxsU2VsKCkuc2l6ZSArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0SWNvbihcInRyYXNoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy5iYXRjaERlbCgpKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LmVkaXRTdHlsZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0SWNvbihcInBhbGV0dGVcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnNob3dOb2RlU3R5bGVFZGl0b3IoZSkpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4Lm5ld1Jvb3RcIikpXHJcbiAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInBsdXMtY2lyY2xlXCIpXHJcbiAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRSb290KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5nZXRSb290TmFtZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5jbGllbnRYIC0gci5sZWZ0IC0gdGhpcy5wYW5YKSAvIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGUuY2xpZW50WSAtIHIudG9wIC0gdGhpcy5wYW5ZKSAvIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xyXG4gICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHgudW5kb1wiKSlcclxuICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwidW5kb1wiKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy51bmRvKCkpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5yZWRvXCIpKVxyXG4gICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJyZWRvXCIpXHJcbiAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnJlZG8oKSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xyXG4gICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguZ2xvYmFsU3R5bGVcIikpXHJcbiAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInBhbGV0dGVcIilcclxuICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuc2hvd1N0eWxlTW9kYWwoKSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNob3dNZW51KG1lbnUsIGUpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzaG93Tm9kZUN0eChlOiBNb3VzZUV2ZW50LCBuZDogTWluZE5vZGVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcCgpO1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBuZXcgTWVudSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGkoKSkge1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0KFwiY3R4LmJhdGNoRGVsXCIpICsgXCIgKFwiICsgdGhpcy5hbGxTZWwoKS5zaXplICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwidHJhc2hcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLmJhdGNoRGVsKCkpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguZWRpdFN0eWxlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicGFsZXR0ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuc2hvd05vZGVTdHlsZUVkaXRvcihlKSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LmVkaXRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJwZW5jaWxcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdElkID0gbmQuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5zdHlsZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInBhbGV0dGVcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnNob3dOb2RlU3R5bGVFZGl0b3IoZSkpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguY29weVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcImNvcHlcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29weU5vZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguY3V0XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwic2Npc3NvcnNcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29weU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZClcclxuICAgICAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LnBhc3RlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcImNsaXBib2FyZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXN0ZU5vZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5jaGlsZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInBsdXNcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGROb2RlKG5kLmlzUm9vdCA/IFwicmlnaHRcIiA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChuZC5pc1Jvb3QpXHJcbiAgICAgICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5sZWZ0Q2hpbGRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwiYXJyb3ctbGVmdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRMZWZ0Q2hpbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoIW5kLmlzUm9vdClcclxuICAgICAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LnNpYmxpbmdcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicGx1c1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTaWJsaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LmRlbGV0ZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInRyYXNoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbE5vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93TWVudShtZW51LCBlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYmF0Y2hEZWwoKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWQgb2YgdGhpcy5hbGxTZWwoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb290cy5zb21lKChyKSA9PiByLmlkID09PSBpZCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3RzID0gdGhpcy5yb290cy5maWx0ZXIoKHIpID0+IHIuaWQgIT09IGlkKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnJlbUFsbChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xyU2VsKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGFydEJveChseDogbnVtYmVyLCBseTogbnVtYmVyLCBzaGlmdDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuYm94U2VsID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJveFNoaWZ0ID0gc2hpZnQ7XHJcbiAgICAgICAgdGhpcy5ic3ggPSBseDtcclxuICAgICAgICB0aGlzLmJzeSA9IGx5O1xyXG4gICAgICAgIHRoaXMuYmN4ID0gbHg7XHJcbiAgICAgICAgdGhpcy5iY3kgPSBseTtcclxuICAgICAgICB0aGlzLmJveEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgIFwicmVjdFwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgYnNjID0gdGhpcy5zdHlsZS5ib3hTZWxlY3Rpb25Db2xvciB8fCBcIiMzYjgyZjZcIjtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgdGhpcy5oZXhUb1JnYmEoYnNjLCAwLjA2KSk7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgdGhpcy5oZXhUb1JnYmEoYnNjLCAwLjQpKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjFcIik7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiNiAzXCIpO1xyXG4gICAgICAgIHRoaXMuYm94RWwuc2V0QXR0cmlidXRlKFwicnhcIiwgXCI0XCIpO1xyXG4gICAgICAgIC8vIGJveC1zZWxlY3QgcG9pbnRlci1ldmVudHMgaGFuZGxlZCBieSBDU1NcclxuICAgICAgICB0aGlzLm92ZXJsYXlHLmFwcGVuZENoaWxkKHRoaXMuYm94RWwpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1cGRCb3gobHg6IG51bWJlciwgbHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYmN4ID0gbHg7XHJcbiAgICAgICAgdGhpcy5iY3kgPSBseTtcclxuICAgICAgICBpZiAoIXRoaXMuYm94RWwpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKE1hdGgubWluKHRoaXMuYnN4LCBseCkpKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKE1hdGgubWluKHRoaXMuYnN5LCBseSkpKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyhNYXRoLmFicyhseCAtIHRoaXMuYnN4KSkpO1xyXG4gICAgICAgIHRoaXMuYm94RWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhNYXRoLmFicyhseSAtIHRoaXMuYnN5KSkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBlbmRCb3goX2U6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmJveFNlbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYm94RWw/LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuYm94RWwgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IGJ4MSA9IE1hdGgubWluKHRoaXMuYnN4LCB0aGlzLmJjeCksXHJcbiAgICAgICAgICAgIGJ5MSA9IE1hdGgubWluKHRoaXMuYnN5LCB0aGlzLmJjeSksXHJcbiAgICAgICAgICAgIGJ4MiA9IE1hdGgubWF4KHRoaXMuYnN4LCB0aGlzLmJjeCksXHJcbiAgICAgICAgICAgIGJ5MiA9IE1hdGgubWF4KHRoaXMuYnN5LCB0aGlzLmJjeSk7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGJ4MiAtIGJ4MSkgPCA1ICYmIE1hdGguYWJzKGJ5MiAtIGJ5MSkgPCA1KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5ib3hTaGlmdCkgdGhpcy5jbHJTZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgICAgICBjb25zdCBjaGsgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5sID0gbi54IC0gbi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICBuciA9IG4ueCArIG4ud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgbnQgPSBuLnkgLSBuLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICBuYiA9IG4ueSArIG4uaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgaWYgKG5yID49IGJ4MSAmJiBubCA8PSBieDIgJiYgbmIgPj0gYnkxICYmIG50IDw9IGJ5MikgaWRzLmFkZChuLmlkKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIGNoayhjKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSBjaGsocik7XHJcbiAgICAgICAgaWYgKHRoaXMuYm94U2hpZnQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHRoaXMudG9nU2VsKGlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB0aGlzLm11bHRpU2VsLmFkZChpZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm11bHRpU2VsLnNpemUgPT09IDEpIHRoaXMuc2VsMShbLi4udGhpcy5tdWx0aVNlbF1bMF0pO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLm11bHRpU2VsLnNpemUgPiAxKSB0aGlzLnNlbElkID0gWy4uLnRoaXMubXVsdGlTZWxdWzBdO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuY2xyU2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzRGVzYyh0Z3Q6IE1pbmROb2RlRGF0YSwgcGlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBkID0gdGhpcy5mQWxsKHBpZCk7XHJcbiAgICAgICAgcmV0dXJuIGQgPyB0aGlzLmZOKHRndC5pZCwgZCkgIT09IG51bGwgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZGV0VGd0KFxyXG4gICAgICAgIGxlZnRYOiBudW1iZXIsXHJcbiAgICAgICAgcmlnaHRYOiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyLFxyXG4gICAgICAgIGRpZDogc3RyaW5nLFxyXG4gICAgKTogeyBpZDogc3RyaW5nOyB6b25lOiBcImNoaWxkXCIgfCBcImJlZm9yZVwiIHwgXCJhZnRlclwiIH0gfCBudWxsIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICBjb25zdCBoID0gdGhpcy5fZHQobGVmdFgsIHJpZ2h0WCwgeSwgciwgZGlkKTtcclxuICAgICAgICAgICAgaWYgKGgpIHJldHVybiBoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2R0KFxyXG4gICAgICAgIGxlZnRYOiBudW1iZXIsXHJcbiAgICAgICAgcmlnaHRYOiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyLFxyXG4gICAgICAgIG46IE1pbmROb2RlRGF0YSxcclxuICAgICAgICBkaWQ6IHN0cmluZyxcclxuICAgICk6IHsgaWQ6IHN0cmluZzsgem9uZTogXCJjaGlsZFwiIHwgXCJiZWZvcmVcIiB8IFwiYWZ0ZXJcIiB9IHwgbnVsbCB7XHJcbiAgICAgICAgLy8gQmxvY2sgZHJvcCBvbnRvIGFueSBzZWxlY3RlZCBub2RlIG9yIGl0cyBkZXNjZW5kYW50c1xyXG4gICAgICAgIGNvbnN0IHNlbElkcyA9IHRoaXMuYWxsU2VsKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBzaWQgb2Ygc2VsSWRzKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmlkID09PSBzaWQgfHwgdGhpcy5pc0Rlc2Mobiwgc2lkKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLmlkID09PSBkaWQgfHwgdGhpcy5pc0Rlc2MobiwgZGlkKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgLy8gVXNlIHJpZ2h0IGVkZ2UgZm9yIGxlZnQtc2lkZSBub2RlcywgbGVmdCBlZGdlIGZvciByaWdodC1zaWRlIG5vZGVzXHJcbiAgICAgICAgY29uc3QgeCA9IGxlZnRYO1xyXG4gICAgICAgIGNvbnN0IHBhZCA9IDI1O1xyXG4gICAgICAgIGNvbnN0IGwgPSBuLnggLSBuLndpZHRoIC8gMiAtIHBhZCxcclxuICAgICAgICAgICAgciA9IG4ueCArIG4ud2lkdGggLyAyICsgcGFkLFxyXG4gICAgICAgICAgICB0b3AgPSBuLnkgLSBuLmhlaWdodCAvIDIgLSBwYWQsXHJcbiAgICAgICAgICAgIGIgPSBuLnkgKyBuLmhlaWdodCAvIDIgKyBwYWQ7XHJcbiAgICAgICAgaWYgKHggPj0gbCAmJiB4IDw9IHIgJiYgeSA+PSB0b3AgJiYgeSA8PSBiKSB7XHJcbiAgICAgICAgICAgIGxldCB6OiBcImNoaWxkXCIgfCBcImJlZm9yZVwiIHwgXCJhZnRlclwiID0gXCJjaGlsZFwiO1xyXG4gICAgICAgICAgICBpZiAoIW4uaXNSb290KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoID0gbi5oZWlnaHQgKyBwYWQgKiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ5ID0geSAtIHRvcDtcclxuICAgICAgICAgICAgICAgIGlmIChyeSA8IGggKiAwLjQpIHogPSBcImJlZm9yZVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocnkgPiBoICogMC42KSB6ID0gXCJhZnRlclwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlkOiBuLmlkLCB6b25lOiB6IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGggPSB0aGlzLl9kdChsZWZ0WCwgcmlnaHRYLCB5LCBjLCBkaWQpO1xyXG4gICAgICAgICAgICBpZiAoaCkgcmV0dXJuIGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW1UcmVlKGlkOiBzdHJpbmcsIG46IE1pbmROb2RlRGF0YSk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobi5jaGlsZHJlbltpXS5pZCA9PT0gaWQpIHJldHVybiBuLmNoaWxkcmVuLnNwbGljZShpLCAxKVswXTtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMucmVtVHJlZShpZCwgbi5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIGlmIChmKSByZXR1cm4gZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlbUFsbChpZDogc3RyaW5nKTogTWluZE5vZGVEYXRhIHwgbnVsbCB7XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMucmVtVHJlZShpZCwgcik7XHJcbiAgICAgICAgICAgIGlmIChmKSByZXR1cm4gZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGluc1RyZWUoXHJcbiAgICAgICAgbmk6IE1pbmROb2RlRGF0YSxcclxuICAgICAgICB0aWQ6IHN0cmluZyxcclxuICAgICAgICB6b25lOiBcImNoaWxkXCIgfCBcImJlZm9yZVwiIHwgXCJhZnRlclwiLFxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgdG4gPSB0aGlzLmZBbGwodGlkKTtcclxuICAgICAgICBpZiAoIXRuKSByZXR1cm47XHJcbiAgICAgICAgLy8gSW5oZXJpdCBzaWRlIGZyb20gdGFyZ2V0XHJcbiAgICAgICAgY29uc3Qgc2V0U2lkZSA9IChuOiBNaW5kTm9kZURhdGEsIHM/OiBcImxlZnRcIiB8IFwicmlnaHRcIikgPT4ge1xyXG4gICAgICAgICAgICBuLnNpZGUgPSBzO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgc2V0U2lkZShjLCBzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh6b25lID09PSBcImNoaWxkXCIgfHwgdG4uaXNSb290KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFNpZGUgPSB0bi5pc1Jvb3QgPyBuaS5zaWRlIDogdG4uc2lkZTtcclxuICAgICAgICAgICAgc2V0U2lkZShuaSwgdGFyZ2V0U2lkZSk7XHJcbiAgICAgICAgICAgIHRuLmNoaWxkcmVuLnB1c2gobmkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNpZGUobmksIHRuLnNpZGUpO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLmZQKHRpZCwgcik7XHJcbiAgICAgICAgICAgIGlmIChwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBwLmNoaWxkcmVuLmZpbmRJbmRleCgoYykgPT4gYy5pZCA9PT0gdGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5jaGlsZHJlbi5zcGxpY2Uoem9uZSA9PT0gXCJiZWZvcmVcIiA/IGlkeCA6IGlkeCArIDEsIDAsIG5pKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZOKGlkOiBzdHJpbmcsIG46IE1pbmROb2RlRGF0YSk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGlmIChuLmlkID09PSBpZCkgcmV0dXJuIG47XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMuZk4oaWQsIGMpO1xyXG4gICAgICAgICAgICBpZiAoZikgcmV0dXJuIGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmUChjaWQ6IHN0cmluZywgbjogTWluZE5vZGVEYXRhKTogTWluZE5vZGVEYXRhIHwgbnVsbCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGMuaWQgPT09IGNpZCkgcmV0dXJuIG47XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLmZQKGNpZCwgYyk7XHJcbiAgICAgICAgICAgIGlmIChmKSByZXR1cm4gZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZQQShjaWQ6IHN0cmluZyk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLmZQKGNpZCwgcik7XHJcbiAgICAgICAgICAgIGlmIChwKSByZXR1cm4gcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGJpbmRFdnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGNjID0gdGhpcy5jYztcclxuICAgICAgICBjYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRndCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh0Z3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInRleHRhcmVhXCIpIHJldHVybjtcclxuICAgICAgICAgICAgY2MuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgICAgICAgICAvLyBGSVg6IGlmIHNwYWNlIGhlbGQsIEFMV0FZUyBzdGFydCBjYW52YXMgZHJhZyByZWdhcmRsZXNzIG9mIGNsaWNrIHRhcmdldFxyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGFjZURvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0N2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc214ID0gZS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbXkgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgICAgICAgICBjYy50b2dnbGVDbGFzcyhcIm16LWN1cnNvci1ncmFiYmluZ1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0Z3QgPT09IHRoaXMuc3ZnRWwgfHxcclxuICAgICAgICAgICAgICAgIHRndCA9PT0gY2MgfHxcclxuICAgICAgICAgICAgICAgIHRndC50YWdOYW1lID09PSBcInN2Z1wiIHx8XHJcbiAgICAgICAgICAgICAgICB0Z3QudGFnTmFtZSA9PT0gXCJnXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21taXRFZGl0KSB0aGlzLmNvbW1pdEVkaXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCb3goXHJcbiAgICAgICAgICAgICAgICAgICAgKGUuY2xpZW50WCAtIGNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSB0aGlzLnBhblgpIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tLFxyXG4gICAgICAgICAgICAgICAgICAgIChlLmNsaWVudFkgLSBjYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0aGlzLnBhblkpIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tLFxyXG4gICAgICAgICAgICAgICAgICAgIGUuc2hpZnRLZXksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRndCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRndCA9PT0gdGhpcy5zdmdFbCB8fFxyXG4gICAgICAgICAgICAgICAgdGd0ID09PSBjYyB8fFxyXG4gICAgICAgICAgICAgICAgW1wic3ZnXCIsIFwiZ1wiLCBcInBhdGhcIl0uaW5jbHVkZXModGd0LnRhZ05hbWUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q2FudmFzQ3R4KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYyA9IGNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBseCA9IChlLmNsaWVudFggLSByYy5sZWZ0IC0gdGhpcy5wYW5YKSAvIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgIGx5ID0gKGUuY2xpZW50WSAtIHJjLnRvcCAtIHRoaXMucGFuWSkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJveFNlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRCb3gobHgsIGx5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBseCAtIHRoaXMuZHMuc3RhcnRYLFxyXG4gICAgICAgICAgICAgICAgICAgIGR5ID0gbHkgLSB0aGlzLmRzLnN0YXJ0WTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5kcy5pc0RyYWdnaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKE1hdGguYWJzKGR4KSA+IDUgfHwgTWF0aC5hYnMoZHkpID4gNSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRzLmlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRzLmlzUm9vdERyYWcpIHRoaXMucm9vdERGKGR4LCBkeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLmNoaWxkREYobHgsIGx5LCBkeCwgZHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdDdikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5YICs9IGUuY2xpZW50WCAtIHRoaXMuc214O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5ZICs9IGUuY2xpZW50WSAtIHRoaXMuc215O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbXggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNteSA9IGUuY2xpZW50WTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkVHgoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwid2hlZWxcIixcclxuICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtiID0gdGhpcy5rYjtcclxuICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZSA9IGUuZGVsdGFZID4gMCA/IDAuOSA6IDEuMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB6ZiA9IGtiLmludmVydFpvb20gPyAxIC8gYmFzZSA6IGJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnogPSBNYXRoLm1heCgwLjEsIE1hdGgubWluKHRoaXMuem9vbSAqIHpmLCAzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IGNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteCA9IGUuY2xpZW50WCAtIHIubGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXkgPSBlLmNsaWVudFkgLSByLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhblggPSBteCAtIChteCAtIHRoaXMucGFuWCkgKiAobnogLyB0aGlzLnpvb20pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuWSA9IG15IC0gKG15IC0gdGhpcy5wYW5ZKSAqIChueiAvIHRoaXMuem9vbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tID0gbno7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkID0gZS5kZWx0YVggfHwgZS5kZWx0YVk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5YIC09IGtiLmludmVydFNjcm9sbFggPyAtZCA6IGQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuWCAtPSBrYi5pbnZlcnRTY3JvbGxYID8gLWUuZGVsdGFYIDogZS5kZWx0YVg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5ZIC09IGtiLmludmVydFNjcm9sbFkgPyAtZS5kZWx0YVkgOiBlLmRlbHRhWTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkVHgoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBwYXNzaXZlOiBmYWxzZSB9LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJvb3RERihkeDogbnVtYmVyLCBkeTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRzPy5pc1Jvb3REcmFnKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgcm4gPSB0aGlzLmZBbGwodGhpcy5kcy5ub2RlSWQpO1xyXG4gICAgICAgIGlmICghcm4pIHJldHVybjtcclxuICAgICAgICBybi54ID0gdGhpcy5kcy5uc3ggKyBkeDtcclxuICAgICAgICBybi55ID0gdGhpcy5kcy5uc3kgKyBkeTtcclxuICAgICAgICB0aGlzLmRvTGF5b3V0KHJuKTtcclxuICAgICAgICBpZiAoKHRoaXMuZHMgYXMgUm9vdERyYWcpLnBlZXJzKVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgKHRoaXMuZHMgYXMgUm9vdERyYWcpLnBlZXJzISkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG4gPSB0aGlzLmZBbGwocC5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBwbi54ID0gcC5zeCArIGR4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBuLnkgPSBwLnN5ICsgZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0xheW91dChwbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB0aGlzLmVkZ2VzRy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLmRyYXdFZGdlcyhyKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZPKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNoaWxkREYobHg6IG51bWJlciwgbHk6IG51bWJlciwgZHg6IG51bWJlciwgZHk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmRzIGFzIENoaWxkRHJhZztcclxuICAgICAgICBpZiAoIWQuZ2hvc3RFbCkge1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtbi1cIiArIGQubm9kZUlkKTtcclxuICAgICAgICAgICAgaWYgKG9yaWcpIG9yaWcudG9nZ2xlQ2xhc3MoXCJtei1kcmFnLXRyYW5zcGFyZW50XCIsIHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBkbiA9IHRoaXMuZkFsbChkLm5vZGVJZCk7XHJcbiAgICAgICAgICAgIGlmIChkbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2hvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9yZWlnbk9iamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGdob3N0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyhkbi53aWR0aCkpO1xyXG4gICAgICAgICAgICAgICAgZ2hvc3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhkbi5oZWlnaHQpKTtcclxuICAgICAgICAgICAgICAgIGdob3N0LnNldEF0dHJpYnV0ZShcIm92ZXJmbG93XCIsIFwidmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vIGdob3N0IG9wYWNpdHkgaGFuZGxlZCBieSBtei1kcmFnLWdob3N0IGNsYXNzXHJcbiAgICAgICAgICAgICAgICAvLyBnaG9zdCBwb2ludGVyLWV2ZW50cyBoYW5kbGVkIGJ5IG16LWRyYWctZ2hvc3QgY2xhc3NcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGdkLmFkZENsYXNzKFwibXotZHJhZy1naG9zdFwiKTtcclxuICAgICAgICAgICAgICAgIGdkLmlubmVyVGV4dCA9IGRuLnRleHQ7XHJcbiAgICAgICAgICAgICAgICBnaG9zdC5hcHBlbmRDaGlsZChnZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlHLmFwcGVuZENoaWxkKGdob3N0KTtcclxuICAgICAgICAgICAgICAgIGQuZ2hvc3RFbCA9IGdob3N0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpbmQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGV4VG9SZ2JhKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLmJveFNlbGVjdGlvbkNvbG9yIHx8IFwiIzNiODJmNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjEyLFxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaW5kLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCB0aGlzLnN0eWxlLnNlbGVjdGlvbkNvbG9yKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICAgICAgICAgICAgaW5kLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjJcIik7XHJcbiAgICAgICAgICAgICAgICBpbmQuc2V0QXR0cmlidXRlKFwicnhcIiwgU3RyaW5nKHRoaXMuc3R5bGUubm9kZUJvcmRlclJhZGl1cykpO1xyXG4gICAgICAgICAgICAgICAgLy8gaW5kaWNhdG9yIHBvaW50ZXItZXZlbnRzIGhhbmRsZWQgYnkgQ1NTXHJcbiAgICAgICAgICAgICAgICBpbmQudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlHLmFwcGVuZENoaWxkKGluZCk7XHJcbiAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsID0gaW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRuID0gdGhpcy5mQWxsKGQubm9kZUlkKTtcclxuICAgICAgICBpZiAoZG4gJiYgZC5naG9zdEVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTGVmdFNpZGUgPSBkbi5zaWRlID09PSBcImxlZnRcIjtcclxuICAgICAgICAgICAgY29uc3QgZWRnZVggPSBpc0xlZnRTaWRlXHJcbiAgICAgICAgICAgICAgICA/IGRuLnggKyBkeCArIGRuLndpZHRoIC8gMlxyXG4gICAgICAgICAgICAgICAgOiBkbi54ICsgZHggLSBkbi53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IGd5ID0gZG4ueSArIGR5O1xyXG4gICAgICAgICAgICBkLmdob3N0RWwuc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcoZG4ueCArIGR4IC0gZG4ud2lkdGggLyAyKSk7XHJcbiAgICAgICAgICAgIGQuZ2hvc3RFbC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyhneSAtIGRuLmhlaWdodCAvIDIpKTtcclxuICAgICAgICAgICAgY29uc3QgdGd0ID0gdGhpcy5kZXRUZ3QoZWRnZVgsIGVkZ2VYLCBneSwgZC5ub2RlSWQpO1xyXG4gICAgICAgICAgICBpZiAodGd0ICYmIGQuaW5kaWNhdG9yRWwpIHtcclxuICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG4gPSB0aGlzLmZBbGwodGd0LmlkKTtcclxuICAgICAgICAgICAgICAgIGlmICh0bikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0Z3Quem9uZSA9PT0gXCJjaGlsZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcodG4ueCAtIHRuLndpZHRoIC8gMiAtIDQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnkgLSB0bi5oZWlnaHQgLyAyIC0gNCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLndpZHRoICsgOCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh0bi5oZWlnaHQgKyA4KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRndC56b25lID09PSBcImJlZm9yZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcodG4ueCAtIHRuLndpZHRoIC8gMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcodG4ueSAtIHRuLmhlaWdodCAvIDIgLSA2KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcodG4ud2lkdGgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcodG4ueCAtIHRuLndpZHRoIC8gMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcodG4ueSArIHRuLmhlaWdodCAvIDIgKyAzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcodG4ud2lkdGgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkLmluZGljYXRvckVsKVxyXG4gICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkZENoaWxkTm9kZShmb3JjZVNpZGU/OiBcImxlZnRcIiB8IFwicmlnaHRcIikge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxJZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgaWYgKCFwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgIGNvbnN0IHR4dCA9IHRoaXMucGx1Z2luLmdldENoaWxkTmFtZSgpO1xyXG4gICAgICAgIGNvbnN0IG46IE1pbmROb2RlRGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXHJcbiAgICAgICAgICAgIHRleHQ6IHR4dCxcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuY2FsY1codHh0LCBmYWxzZSksXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5jYWxjSCh0eHQsIGZhbHNlKSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHAuY29ubmVjdGlvbkNvbG9yKSBuLmNvbm5lY3Rpb25Db2xvciA9IHAuY29ubmVjdGlvbkNvbG9yO1xyXG4gICAgICAgIGlmIChwLmNvbm5lY3Rpb25XaWR0aCkgbi5jb25uZWN0aW9uV2lkdGggPSBwLmNvbm5lY3Rpb25XaWR0aDtcclxuICAgICAgICAvLyBEZXRlcm1pbmUgc2lkZVxyXG4gICAgICAgIGlmIChmb3JjZVNpZGUpIG4uc2lkZSA9IGZvcmNlU2lkZTtcclxuICAgICAgICBlbHNlIGlmIChwLmlzUm9vdCkge1xyXG4gICAgICAgICAgICBjb25zdCBkaXIgPSB0aGlzLnN0eWxlLm5vZGVEaXJlY3Rpb247XHJcbiAgICAgICAgICAgIGlmIChkaXIgPT09IFwibGVmdFwiKSBuLnNpZGUgPSBcImxlZnRcIjtcclxuICAgICAgICAgICAgZWxzZSBuLnNpZGUgPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbi5zaWRlID0gcC5zaWRlIHx8IFwicmlnaHRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcC5jaGlsZHJlbi5wdXNoKG4pO1xyXG4gICAgICAgIHRoaXMuYXNzaWduUmFpbmJvd0NvbG9yKHAsIG4pO1xyXG4gICAgICAgIHRoaXMuc2VsMShuLmlkKTtcclxuICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuZWRpdE9uQ3JlYXRlKSB0aGlzLmVkaXRJZCA9IG4uaWQ7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRMZWZ0Q2hpbGQoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZE5vZGUoXCJsZWZ0XCIpO1xyXG4gICAgfVxyXG4gICAgLy8gRW50ZXIgb24gcm9vdCA9IGFkZCBjaGlsZC4gRW50ZXIgb24gY2hpbGQgPSBpbnNlcnQgc2libGluZyBBRlRFUiBjdXJyZW50XHJcbiAgICBwcml2YXRlIGFkZFNpYmxpbmcoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbElkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgc2VsID0gdGhpcy5mQWxsKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghc2VsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHNlbC5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZE5vZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwID0gdGhpcy5mUEEodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgaWYgKCFwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgIGNvbnN0IHR4dCA9IHRoaXMucGx1Z2luLmdldENoaWxkTmFtZSgpO1xyXG4gICAgICAgIGNvbnN0IG46IE1pbmROb2RlRGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXHJcbiAgICAgICAgICAgIHRleHQ6IHR4dCxcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuY2FsY1codHh0LCBmYWxzZSksXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5jYWxjSCh0eHQsIGZhbHNlKSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICBzaWRlOiBzZWwuc2lkZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChwLmNvbm5lY3Rpb25Db2xvcikgbi5jb25uZWN0aW9uQ29sb3IgPSBwLmNvbm5lY3Rpb25Db2xvcjtcclxuICAgICAgICBpZiAocC5jb25uZWN0aW9uV2lkdGgpIG4uY29ubmVjdGlvbldpZHRoID0gcC5jb25uZWN0aW9uV2lkdGg7XHJcbiAgICAgICAgY29uc3QgaWR4ID0gcC5jaGlsZHJlbi5maW5kSW5kZXgoKGMpID0+IGMuaWQgPT09IHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmIChpZHggIT09IC0xKSBwLmNoaWxkcmVuLnNwbGljZShpZHggKyAxLCAwLCBuKTtcclxuICAgICAgICBlbHNlIHAuY2hpbGRyZW4ucHVzaChuKTtcclxuICAgICAgICB0aGlzLmFzc2lnblJhaW5ib3dDb2xvcihwLCBuKTtcclxuICAgICAgICB0aGlzLnNlbDEobi5pZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmVkaXRPbkNyZWF0ZSkgdGhpcy5lZGl0SWQgPSBuLmlkO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuICAgIC8vIEZJWCAjMzogZGVsZXRlIHNlbGVjdHMgVVBQRVIgc2libGluZyAoaWR4LTEpXHJcbiAgICBwcml2YXRlIGRlbE5vZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbElkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMucm9vdHMuc29tZSgocikgPT4gci5pZCA9PT0gdGhpcy5zZWxJZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzID0gdGhpcy5yb290cy5maWx0ZXIoKHIpID0+IHIuaWQgIT09IHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICB0aGlzLmNsclNlbCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb290cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbDEodGhpcy5yb290c1t0aGlzLnJvb3RzLmxlbmd0aCAtIDFdLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwID0gdGhpcy5mUEEodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgaWYgKCFwKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgaWR4ID0gcC5jaGlsZHJlbi5maW5kSW5kZXgoKGMpID0+IGMuaWQgPT09IHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICBwLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIGlmIChwLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJZHggPSBpZHggPiAwID8gaWR4IC0gMSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsMShwLmNoaWxkcmVuW25ld0lkeF0uaWQpO1xyXG4gICAgICAgIH0gZWxzZSB0aGlzLnNlbDEocC5pZCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnRChuaWQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuX2dkKG5pZCwgciwgMCk7XHJcbiAgICAgICAgICAgIGlmIChkICE9PSAtMSkgcmV0dXJuIGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2dkKG5pZDogc3RyaW5nLCBuOiBNaW5kTm9kZURhdGEsIGQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKG4uaWQgPT09IG5pZCkgcmV0dXJuIGQ7XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuX2dkKG5pZCwgYywgZCArIDEpO1xyXG4gICAgICAgICAgICBpZiAociAhPT0gLTEpIHJldHVybiByO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNEZXAodGQ6IG51bWJlcik6IE1pbmROb2RlRGF0YVtdIHtcclxuICAgICAgICBjb25zdCBvOiBNaW5kTm9kZURhdGFbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLl9jZChyLCAwLCB0ZCwgbyk7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9jZChuOiBNaW5kTm9kZURhdGEsIGQ6IG51bWJlciwgdGQ6IG51bWJlciwgbzogTWluZE5vZGVEYXRhW10pIHtcclxuICAgICAgICBpZiAoZCA9PT0gdGQpIHtcclxuICAgICAgICAgICAgby5wdXNoKG4pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB0aGlzLl9jZChjLCBkICsgMSwgdGQsIG8pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhcnJvdyhkaXI6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxJZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIWN1cikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGlzTGVmdCA9IGN1ci5zaWRlID09PSBcImxlZnRcIjtcclxuICAgICAgICBpZiAoZGlyID09PSBcIkFycm93UmlnaHRcIikge1xyXG4gICAgICAgICAgICBpZiAoaXNMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXIgPSB0aGlzLmZQQSh0aGlzLnNlbElkKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXIpIHRoaXMuc2VsMShwYXIuaWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmMgPSBjdXIuY2hpbGRyZW4/LmZpbHRlcigoYykgPT4gYy5zaWRlICE9PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAocmM/Lmxlbmd0aCkgdGhpcy5zZWwxKHJjWzBdLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBcIkFycm93TGVmdFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0xlZnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxjID0gY3VyLmNoaWxkcmVuPy5sZW5ndGggPyBjdXIuY2hpbGRyZW4gOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxjKSB0aGlzLnNlbDEobGNbMF0uaWQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1ci5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxjID0gY3VyLmNoaWxkcmVuPy5maWx0ZXIoKGMpID0+IGMuc2lkZSA9PT0gXCJsZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxjPy5sZW5ndGgpIHRoaXMuc2VsMShsY1swXS5pZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXIgPSB0aGlzLmZQQSh0aGlzLnNlbElkKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXIpIHRoaXMuc2VsMShwYXIuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZ0QodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgICAgIGlmIChkID09PSAtMSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBwZWVycyA9IHRoaXMuY0RlcChkKTtcclxuICAgICAgICAgICAgaWYgKHBlZXJzLmxlbmd0aCA8PSAxKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHBlZXJzLmZpbmRJbmRleCgobikgPT4gbi5pZCA9PT0gdGhpcy5zZWxJZCk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPT09IC0xKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChkaXIgPT09IFwiQXJyb3dVcFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWwxKHBlZXJzW2lkeCA+IDAgPyBpZHggLSAxIDogcGVlcnMubGVuZ3RoIC0gMV0uaWQpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuc2VsMShwZWVyc1tpZHggPCBwZWVycy5sZW5ndGggLSAxID8gaWR4ICsgMSA6IDBdLmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxufVxyXG4iLCAiLy8gc3JjL3R5cGVzLnRzXHJcbmltcG9ydCB0eXBlIHsgTGFuZ3VhZ2UgfSBmcm9tIFwiLi9pMThuXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1pbmROb2RlRGF0YSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW46IE1pbmROb2RlRGF0YVtdO1xyXG4gICAgaXNSb290PzogYm9vbGVhbjtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHN0eWxlT3ZlcnJpZGU/OiBOb2RlU3R5bGVPdmVycmlkZTtcclxuICAgIGNvbm5lY3Rpb25Db2xvcj86IHN0cmluZztcclxuICAgIGNvbm5lY3Rpb25XaWR0aD86IG51bWJlcjtcclxuICAgIHNpZGU/OiBcImxlZnRcIiB8IFwicmlnaHRcIjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVTdHlsZU92ZXJyaWRlIHtcclxuICAgIGJnQ29sb3I/OiBzdHJpbmc7XHJcbiAgICB0ZXh0Q29sb3I/OiBzdHJpbmc7XHJcbiAgICBmb250U2l6ZT86IG51bWJlcjtcclxuICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XHJcbiAgICBib3JkZXJTdHlsZT86IEJvcmRlclN0eWxlO1xyXG4gICAgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XHJcbiAgICBib3JkZXJXaWR0aD86IG51bWJlcjtcclxuICAgIGJvcmRlclJhZGl1cz86IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBCb3JkZXJTdHlsZSA9IFwic29saWRcIiB8IFwiZGFzaGVkXCIgfCBcImRvdHRlZFwiIHwgXCJkb3VibGVcIiB8IFwibm9uZVwiO1xyXG5leHBvcnQgdHlwZSBDb25uZWN0aW9uTGluZVN0eWxlID1cclxuICAgIHwgXCJiZXppZXJcIlxyXG4gICAgfCBcInN0cmFpZ2h0XCJcclxuICAgIHwgXCJjdXJ2ZWRcIlxyXG4gICAgfCBcInN0ZXBcIlxyXG4gICAgfCBcImJyYWNrZXRcIlxyXG4gICAgfCBcImxvb3NlXCI7XHJcbmV4cG9ydCB0eXBlIFRleHRBbGlnbiA9IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcclxuZXhwb3J0IHR5cGUgTm9kZURpcmVjdGlvbiA9IFwicmlnaHRcIiB8IFwibGVmdFwiIHwgXCJib3RoXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1pbmRNYXBTdHlsZSB7XHJcbiAgICBub2RlQmdDb2xvcjogc3RyaW5nO1xyXG4gICAgbm9kZVRleHRDb2xvcjogc3RyaW5nO1xyXG4gICAgbm9kZUZvbnRTaXplOiBudW1iZXI7XHJcbiAgICBub2RlRm9udEZhbWlseTogc3RyaW5nO1xyXG4gICAgbm9kZUJvcmRlclN0eWxlOiBCb3JkZXJTdHlsZTtcclxuICAgIG5vZGVCb3JkZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgbm9kZUJvcmRlcldpZHRoOiBudW1iZXI7XHJcbiAgICBub2RlQm9yZGVyUmFkaXVzOiBudW1iZXI7XHJcbiAgICBub2RlTWluV2lkdGg6IG51bWJlcjtcclxuICAgIG5vZGVNaW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIHJvb3RCZ0NvbG9yOiBzdHJpbmc7XHJcbiAgICByb290VGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgICByb290Rm9udFNpemU6IG51bWJlcjtcclxuICAgIHJvb3RGb250RmFtaWx5OiBzdHJpbmc7XHJcbiAgICByb290Qm9yZGVyU3R5bGU6IEJvcmRlclN0eWxlO1xyXG4gICAgcm9vdEJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICByb290Qm9yZGVyV2lkdGg6IG51bWJlcjtcclxuICAgIHJvb3RCb3JkZXJSYWRpdXM6IG51bWJlcjtcclxuICAgIHJvb3RNaW5XaWR0aDogbnVtYmVyO1xyXG4gICAgcm9vdE1pbkhlaWdodDogbnVtYmVyO1xyXG4gICAgY29ubmVjdGlvblN0eWxlOiBDb25uZWN0aW9uTGluZVN0eWxlO1xyXG4gICAgY29ubmVjdGlvbkNvbG9yOiBzdHJpbmc7XHJcbiAgICBjb25uZWN0aW9uV2lkdGg6IG51bWJlcjtcclxuICAgIGNvbm5lY3Rpb25MZW5ndGg6IG51bWJlcjtcclxuICAgIGNvbm5lY3Rpb25SYWluYm93OiBib29sZWFuO1xyXG4gICAgcmFpbmJvd1BhbGV0dGU6IHN0cmluZztcclxuICAgIGN1c3RvbVJhaW5ib3dzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT47XHJcbiAgICBub2RlRGlyZWN0aW9uOiBOb2RlRGlyZWN0aW9uO1xyXG4gICAgc2VsZWN0aW9uQ29sb3I6IHN0cmluZztcclxuICAgIHNlbGVjdGlvbldpZHRoOiBudW1iZXI7XHJcbiAgICBzZWxlY3Rpb25PdXRsaW5lT2Zmc2V0OiBudW1iZXI7XHJcbiAgICBlZGl0T3V0bGluZUNvbG9yOiBzdHJpbmc7XHJcbiAgICBlZGl0T3V0bGluZVdpZHRoOiBudW1iZXI7XHJcbiAgICBib3hTZWxlY3Rpb25Db2xvcjogc3RyaW5nO1xyXG4gICAgdGV4dEFsaWduOiBUZXh0QWxpZ247XHJcbiAgICBub2RlUGFkWDogbnVtYmVyO1xyXG4gICAgbm9kZUxpbmVIZWlnaHQ6IG51bWJlcjtcclxuICAgIG5vZGVHYXBZOiBudW1iZXI7XHJcbiAgICBjYW52YXNCZzogc3RyaW5nO1xyXG4gICAgdG9vbGJhclBhZFRvcDogbnVtYmVyO1xyXG4gICAgdG9vbGJhclBhZFJpZ2h0OiBudW1iZXI7XHJcbiAgICB0b29sYmFyUGFkQm90dG9tOiBudW1iZXI7XHJcbiAgICB0b29sYmFyUGFkTGVmdDogbnVtYmVyO1xyXG4gICAgdG9vbGJhclBvc2l0aW9uOiBcInRvcFwiIHwgXCJib3R0b21cIjtcclxuICAgIHRvb2xiYXJCZ0NvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQnRuQmdDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0bkJvcmRlclN0eWxlOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQnRuQm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCdG5UZXh0Q29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCb3JkZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJvcmRlcldpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2V5QmluZGluZ3Mge1xyXG4gICAgZWRpdE5vZGU6IHN0cmluZztcclxuICAgIGFkZFNpYmxpbmc6IHN0cmluZztcclxuICAgIGFkZENoaWxkOiBzdHJpbmc7XHJcbiAgICBmb2N1c05vZGU6IHN0cmluZztcclxuICAgIHVuZG86IHN0cmluZztcclxuICAgIHJlZG86IHN0cmluZztcclxuICAgIGxpbmVCcmVhazogc3RyaW5nO1xyXG4gICAgZHJhZ0NhbnZhczogc3RyaW5nO1xyXG4gICAgem9vbUluOiBzdHJpbmc7XHJcbiAgICB6b29tT3V0OiBzdHJpbmc7XHJcbiAgICB6b29tUmVzZXQ6IHN0cmluZztcclxuICAgIG5hdlVwOiBzdHJpbmc7XHJcbiAgICBuYXZEb3duOiBzdHJpbmc7XHJcbiAgICBuYXZMZWZ0OiBzdHJpbmc7XHJcbiAgICBuYXZSaWdodDogc3RyaW5nO1xyXG4gICAgaW52ZXJ0U2Nyb2xsWTogYm9vbGVhbjtcclxuICAgIGludmVydFNjcm9sbFg6IGJvb2xlYW47XHJcbiAgICBpbnZlcnRab29tOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsdWdpblNldHRpbmdzIHtcclxuICAgIHN0eWxlOiBNaW5kTWFwU3R5bGU7XHJcbiAgICBsYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICB0aGVtZTogXCJsaWdodFwiIHwgXCJkYXJrXCI7XHJcbiAgICBzaG93VG9vbGJhcjogYm9vbGVhbjtcclxuICAgIGtleUJpbmRpbmdzOiBLZXlCaW5kaW5ncztcclxuICAgIGRldmVsb3Blck1vZGU6IGJvb2xlYW47XHJcbiAgICBlZGl0T25DcmVhdGU6IGJvb2xlYW47XHJcbiAgICB0eXBlVG9FZGl0OiBib29sZWFuO1xyXG4gICAgY3VzdG9tTm9kZU5hbWVzOiBSZWNvcmQ8c3RyaW5nLCB7IHJvb3Q/OiBzdHJpbmc7IGNoaWxkPzogc3RyaW5nIH0+O1xyXG4gICAgdG9vbGJhclN0eWxlTGlnaHQ/OiBUb29sYmFyVGhlbWVDb2xvcnM7XHJcbiAgICB0b29sYmFyU3R5bGVEYXJrPzogVG9vbGJhclRoZW1lQ29sb3JzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvb2xiYXJUaGVtZUNvbG9ycyB7XHJcbiAgICB0b29sYmFyQmdDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0bkJnQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0bkJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCb3JkZXJXaWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UT09MQkFSX0xJR0hUOiBUb29sYmFyVGhlbWVDb2xvcnMgPSB7XHJcbiAgICB0b29sYmFyQmdDb2xvcjogXCIjZjVmNWY1XCIsXHJcbiAgICB0b29sYmFyQnRuQmdDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICB0b29sYmFyQnRuQm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogXCIjZDFkNWRiXCIsXHJcbiAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBcIiMzMzMzMzNcIixcclxuICAgIHRvb2xiYXJCb3JkZXJDb2xvcjogXCIjZTBlMGUwXCIsXHJcbiAgICB0b29sYmFyQm9yZGVyV2lkdGg6IDEsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UT09MQkFSX0RBUks6IFRvb2xiYXJUaGVtZUNvbG9ycyA9IHtcclxuICAgIHRvb2xiYXJCZ0NvbG9yOiBcIiMyYjJiMmJcIixcclxuICAgIHRvb2xiYXJCdG5CZ0NvbG9yOiBcIiMzYzNjM2NcIixcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogXCJzb2xpZFwiLFxyXG4gICAgdG9vbGJhckJ0bkJvcmRlckNvbG9yOiBcIiM1NTU1NTVcIixcclxuICAgIHRvb2xiYXJCdG5UZXh0Q29sb3I6IFwiI2UwZTBlMFwiLFxyXG4gICAgdG9vbGJhckJvcmRlckNvbG9yOiBcIiM1MDUwNTBcIixcclxuICAgIHRvb2xiYXJCb3JkZXJXaWR0aDogMSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSQUlOQk9XX1BBTEVUVEVTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7XHJcbiAgICBjbGFzc2ljOiBbXHJcbiAgICAgICAgXCIjMTFjZDNjXCIsXHJcbiAgICAgICAgXCIjMzQ5OGRiXCIsXHJcbiAgICAgICAgXCIjZjQyNTBlXCIsXHJcbiAgICAgICAgXCIjZjg4ZDJmXCIsXHJcbiAgICAgICAgXCIjMWFkNWVkXCIsXHJcbiAgICAgICAgXCIjYjBiMGIwXCIsXHJcbiAgICAgICAgXCIjYzg1YmYzXCIsXHJcbiAgICAgICAgXCIjNDBjZGIxXCIsXHJcbiAgICAgICAgXCIjNmI5OWY2XCIsXHJcbiAgICAgICAgXCIjZmIzOTk3ZDhcIixcclxuICAgICAgICBcIiM4MDcwZjlcIixcclxuICAgICAgICBcIiNjYjcwZjVcIixcclxuICAgIF0sXHJcbiAgICBwYXN0ZWw6IFtcclxuICAgICAgICBcIiNiYWZmYzlcIixcclxuICAgICAgICBcIiNiYWUxZmZcIixcclxuICAgICAgICBcIiNmZmIzYmFcIixcclxuICAgICAgICBcIiNmZmRmYmFcIixcclxuICAgICAgICBcIiNmZmZmYmFcIixcclxuICAgICAgICBcIiNlOGJhZmZcIixcclxuICAgICAgICBcIiNmZmM5ZGVcIixcclxuICAgICAgICBcIiNjOWZmZTVcIixcclxuICAgICAgICBcIiNjOWQ2ZmZcIixcclxuICAgICAgICBcIiNmZmU4YzlcIixcclxuICAgICAgICBcIiNkNGJhZmZcIixcclxuICAgICAgICBcIiNiYWZmZWFcIixcclxuICAgIF0sXHJcbiAgICBmb3Jlc3Q6IFtcclxuICAgICAgICBcIiMyN2FlNjBcIixcclxuICAgICAgICBcIiMyZWNjNzFcIixcclxuICAgICAgICBcIiMxYWJjOWNcIixcclxuICAgICAgICBcIiMxNmEwODVcIixcclxuICAgICAgICBcIiMwMDY0MDBcIixcclxuICAgICAgICBcIiMyMjhCMjJcIixcclxuICAgICAgICBcIiMzMkNEMzJcIixcclxuICAgICAgICBcIiMzQ0IzNzFcIixcclxuICAgICAgICBcIiMyRThCNTdcIixcclxuICAgICAgICBcIiM2NkNEQUFcIixcclxuICAgICAgICBcIiM4RkJDOEZcIixcclxuICAgICAgICBcIiM5MEVFOTBcIixcclxuICAgIF0sXHJcbiAgICBjYW5keTogW1xyXG4gICAgICAgIFwiI0ZGNkY5MVwiLFxyXG4gICAgICAgIFwiI0ZGOTY3MVwiLFxyXG4gICAgICAgIFwiI0ZGQzc1RlwiLFxyXG4gICAgICAgIFwiI0Y5Rjg3MVwiLFxyXG4gICAgICAgIFwiI0Q2NURCMVwiLFxyXG4gICAgICAgIFwiIzg0NUVDMlwiLFxyXG4gICAgICAgIFwiIzJDNzNEMlwiLFxyXG4gICAgICAgIFwiIzAwODlCQVwiLFxyXG4gICAgICAgIFwiIzAwOEU5QlwiLFxyXG4gICAgICAgIFwiIzAwOEY3QVwiLFxyXG4gICAgICAgIFwiI0IwQThCOVwiLFxyXG4gICAgICAgIFwiI0MzNEEzNlwiLFxyXG4gICAgXSxcclxuICAgIG5lb246IFtcclxuICAgICAgICBcIiNmZjAwNTVcIixcclxuICAgICAgICBcIiNmZjY2MDBcIixcclxuICAgICAgICBcIiNmZmNjMDBcIixcclxuICAgICAgICBcIiMwMGZmODhcIixcclxuICAgICAgICBcIiMwMDg4ZmZcIixcclxuICAgICAgICBcIiNhYTAwZmZcIixcclxuICAgICAgICBcIiNmZjAwOTlcIixcclxuICAgICAgICBcIiMwMGZmY2NcIixcclxuICAgICAgICBcIiMwMGNjZmZcIixcclxuICAgICAgICBcIiNmZmZmMDBcIixcclxuICAgICAgICBcIiNmZjAwZmZcIixcclxuICAgICAgICBcIiMwMGZmMDBcIixcclxuICAgIF0sXHJcbiAgICBlYXJ0aDogW1xyXG4gICAgICAgIFwiIzhCNDUxM1wiLFxyXG4gICAgICAgIFwiI0EwNTIyRFwiLFxyXG4gICAgICAgIFwiI0NEODUzRlwiLFxyXG4gICAgICAgIFwiI0RFQjg4N1wiLFxyXG4gICAgICAgIFwiI0QyQjQ4Q1wiLFxyXG4gICAgICAgIFwiI0JDOEY4RlwiLFxyXG4gICAgICAgIFwiI0Y0QTQ2MFwiLFxyXG4gICAgICAgIFwiI0RBQTUyMFwiLFxyXG4gICAgICAgIFwiI0I4ODYwQlwiLFxyXG4gICAgICAgIFwiIzgwODAwMFwiLFxyXG4gICAgICAgIFwiIzZCOEUyM1wiLFxyXG4gICAgICAgIFwiIzU1NkIyRlwiLFxyXG4gICAgXSxcclxuICAgIG9jZWFuOiBbXHJcbiAgICAgICAgXCIjMDAxZjNmXCIsXHJcbiAgICAgICAgXCIjMDAzMzY2XCIsXHJcbiAgICAgICAgXCIjMDA0MDgwXCIsXHJcbiAgICAgICAgXCIjMDA1OWIzXCIsXHJcbiAgICAgICAgXCIjMDA3M2U2XCIsXHJcbiAgICAgICAgXCIjMWE4Y2ZmXCIsXHJcbiAgICAgICAgXCIjNGRhNmZmXCIsXHJcbiAgICAgICAgXCIjODBiZmZmXCIsXHJcbiAgICAgICAgXCIjOTljY2ZmXCIsXHJcbiAgICAgICAgXCIjYjNkOWZmXCIsXHJcbiAgICAgICAgXCIjY2NlNWZmXCIsXHJcbiAgICAgICAgXCIjZTZmMmZmXCIsXHJcbiAgICBdLFxyXG4gICAgc3Vuc2V0OiBbXHJcbiAgICAgICAgXCIjZmY2YjZiXCIsXHJcbiAgICAgICAgXCIjZWU1YTI0XCIsXHJcbiAgICAgICAgXCIjZjA5MzJiXCIsXHJcbiAgICAgICAgXCIjZjZlNThkXCIsXHJcbiAgICAgICAgXCIjZmZiZTc2XCIsXHJcbiAgICAgICAgXCIjZmY3OTc5XCIsXHJcbiAgICAgICAgXCIjZTA1NmZkXCIsXHJcbiAgICAgICAgXCIjYmUyZWRkXCIsXHJcbiAgICAgICAgXCIjNjg2ZGUwXCIsXHJcbiAgICAgICAgXCIjNDgzNGQ0XCIsXHJcbiAgICAgICAgXCIjMzAzMzZiXCIsXHJcbiAgICAgICAgXCIjMTMwZjQwXCIsXHJcbiAgICBdLFxyXG4gICAgbW9ub2Nocm9tZTogW1xyXG4gICAgICAgIFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIFwiIzFhMWExYVwiLFxyXG4gICAgICAgIFwiIzMzMzMzM1wiLFxyXG4gICAgICAgIFwiIzRkNGQ0ZFwiLFxyXG4gICAgICAgIFwiIzY2NjY2NlwiLFxyXG4gICAgICAgIFwiIzgwODA4MFwiLFxyXG4gICAgICAgIFwiIzk5OTk5OVwiLFxyXG4gICAgICAgIFwiI2IzYjNiM1wiLFxyXG4gICAgICAgIFwiI2NjY2NjY1wiLFxyXG4gICAgICAgIFwiI2U2ZTZlNlwiLFxyXG4gICAgICAgIFwiI2YyZjJmMlwiLFxyXG4gICAgICAgIFwiI2ZmZmZmZlwiLFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGT05UX0xJU1QgPSBbXHJcbiAgICBcImluaGVyaXRcIixcclxuICAgIFwiQXJpYWxcIixcclxuICAgIFwiSGVsdmV0aWNhIE5ldWVcIixcclxuICAgIFwiR2VvcmdpYVwiLFxyXG4gICAgXCJUaW1lcyBOZXcgUm9tYW5cIixcclxuICAgIFwiQ291cmllciBOZXdcIixcclxuICAgIFwiVmVyZGFuYVwiLFxyXG4gICAgXCJtb25vc3BhY2VcIixcclxuICAgIFwic2Fucy1zZXJpZlwiLFxyXG4gICAgXCJzZXJpZlwiLFxyXG5dO1xyXG5leHBvcnQgY29uc3QgQ09OTkVDVElPTl9TVFlMRVM6IENvbm5lY3Rpb25MaW5lU3R5bGVbXSA9IFtcclxuICAgIFwiYmV6aWVyXCIsXHJcbiAgICBcInN0cmFpZ2h0XCIsXHJcbiAgICBcImN1cnZlZFwiLFxyXG4gICAgXCJzdGVwXCIsXHJcbiAgICBcImJyYWNrZXRcIixcclxuICAgIFwibG9vc2VcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0tFWUJJTkRJTkdTOiBLZXlCaW5kaW5ncyA9IHtcclxuICAgIGVkaXROb2RlOiBcIlNwYWNlXCIsXHJcbiAgICBhZGRTaWJsaW5nOiBcIkVudGVyXCIsXHJcbiAgICBhZGRDaGlsZDogXCJUYWJcIixcclxuICAgIGZvY3VzTm9kZTogXCJmXCIsXHJcbiAgICB1bmRvOiBcImN0cmwrelwiLFxyXG4gICAgcmVkbzogXCJjdHJsK3NoaWZ0K3pcIixcclxuICAgIGxpbmVCcmVhazogXCJzaGlmdCtFbnRlclwiLFxyXG4gICAgZHJhZ0NhbnZhczogXCJTcGFjZVwiLFxyXG4gICAgem9vbUluOiBcInNoaWZ0Kz1cIixcclxuICAgIHpvb21PdXQ6IFwic2hpZnQrLVwiLFxyXG4gICAgem9vbVJlc2V0OiBcInNoaWZ0KzBcIixcclxuICAgIG5hdlVwOiBcIkFycm93VXBcIixcclxuICAgIG5hdkRvd246IFwiQXJyb3dEb3duXCIsXHJcbiAgICBuYXZMZWZ0OiBcIkFycm93TGVmdFwiLFxyXG4gICAgbmF2UmlnaHQ6IFwiQXJyb3dSaWdodFwiLFxyXG4gICAgaW52ZXJ0U2Nyb2xsWTogZmFsc2UsXHJcbiAgICBpbnZlcnRTY3JvbGxYOiBmYWxzZSxcclxuICAgIGludmVydFpvb206IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1RZTEU6IE1pbmRNYXBTdHlsZSA9IHtcclxuICAgIG5vZGVCZ0NvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgIG5vZGVUZXh0Q29sb3I6IFwiIzMzMzMzM1wiLFxyXG4gICAgbm9kZUZvbnRTaXplOiAxNCxcclxuICAgIG5vZGVGb250RmFtaWx5OiBcImluaGVyaXRcIixcclxuICAgIG5vZGVCb3JkZXJTdHlsZTogXCJzb2xpZFwiLFxyXG4gICAgbm9kZUJvcmRlckNvbG9yOiBcIiNjY2NjY2NcIixcclxuICAgIG5vZGVCb3JkZXJXaWR0aDogMixcclxuICAgIG5vZGVCb3JkZXJSYWRpdXM6IDUsXHJcbiAgICBub2RlTWluV2lkdGg6IDYwLFxyXG4gICAgbm9kZU1pbkhlaWdodDogMzIsXHJcbiAgICByb290QmdDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICByb290VGV4dENvbG9yOiBcIiMxNzE3MTdcIixcclxuICAgIHJvb3RGb250U2l6ZTogMTgsXHJcbiAgICByb290Rm9udEZhbWlseTogXCJpbmhlcml0XCIsXHJcbiAgICByb290Qm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgIHJvb3RCb3JkZXJDb2xvcjogXCIjYmFiYWJhXCIsXHJcbiAgICByb290Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICByb290Qm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgcm9vdE1pbldpZHRoOiA5NixcclxuICAgIHJvb3RNaW5IZWlnaHQ6IDQwLFxyXG4gICAgY29ubmVjdGlvblN0eWxlOiBcImJyYWNrZXRcIixcclxuICAgIGNvbm5lY3Rpb25Db2xvcjogXCIjYThhOGE4XCIsXHJcbiAgICBjb25uZWN0aW9uV2lkdGg6IDEuNSxcclxuICAgIGNvbm5lY3Rpb25MZW5ndGg6IDk2LFxyXG4gICAgY29ubmVjdGlvblJhaW5ib3c6IHRydWUsXHJcbiAgICByYWluYm93UGFsZXR0ZTogXCJjbGFzc2ljXCIsXHJcbiAgICBjdXN0b21SYWluYm93czoge1xyXG4gICAgICAgIEN1c3RvbTogW1xyXG4gICAgICAgICAgICBcIiNmZjg5ODlcIixcclxuICAgICAgICAgICAgXCIjOGVmZDhlXCIsXHJcbiAgICAgICAgICAgIFwiI2EzYTNmZlwiLFxyXG4gICAgICAgICAgICBcIiNmZmZmOTFcIixcclxuICAgICAgICAgICAgXCIjZjliMWY5XCIsXHJcbiAgICAgICAgICAgIFwiI2E0ZmZmZlwiLFxyXG4gICAgICAgICAgICBcIiNkZWRlZGVcIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIG5vZGVEaXJlY3Rpb246IFwicmlnaHRcIixcclxuICAgIHNlbGVjdGlvbkNvbG9yOiBcIiMyNGJjMTBcIixcclxuICAgIHNlbGVjdGlvbldpZHRoOiAzLFxyXG4gICAgc2VsZWN0aW9uT3V0bGluZU9mZnNldDogMixcclxuICAgIGVkaXRPdXRsaW5lQ29sb3I6IFwiIzNiZmIyZFwiLFxyXG4gICAgZWRpdE91dGxpbmVXaWR0aDogNSxcclxuICAgIGJveFNlbGVjdGlvbkNvbG9yOiBcIiMzYjgyZjZcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIG5vZGVQYWRYOiAxMCxcclxuICAgIG5vZGVMaW5lSGVpZ2h0OiAxLjUsXHJcbiAgICBub2RlR2FwWTogMzIsXHJcbiAgICBjYW52YXNCZzogXCIjZmZmZmZmXCIsXHJcbiAgICB0b29sYmFyUGFkVG9wOiAwLFxyXG4gICAgdG9vbGJhclBhZFJpZ2h0OiAxMixcclxuICAgIHRvb2xiYXJQYWRCb3R0b206IDAsXHJcbiAgICB0b29sYmFyUGFkTGVmdDogMTIsXHJcbiAgICB0b29sYmFyUG9zaXRpb246IFwidG9wXCIsXHJcbiAgICB0b29sYmFyQmdDb2xvcjogXCIjZjVmNWY1XCIsXHJcbiAgICB0b29sYmFyQnRuQmdDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICB0b29sYmFyQnRuQm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogXCIjZDFkNWRiXCIsXHJcbiAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBcIiMzMzMzMzNcIixcclxuICAgIHRvb2xiYXJCb3JkZXJDb2xvcjogXCIjZTBlMGUwXCIsXHJcbiAgICB0b29sYmFyQm9yZGVyV2lkdGg6IDEsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NFVFRJTkdTOiBQbHVnaW5TZXR0aW5ncyA9IHtcclxuICAgIHN0eWxlOiB7IC4uLkRFRkFVTFRfU1RZTEUgfSxcclxuICAgIGxhbmd1YWdlOiBcImVuXCIsXHJcbiAgICB0aGVtZTogXCJsaWdodFwiLFxyXG4gICAgc2hvd1Rvb2xiYXI6IHRydWUsXHJcbiAgICBrZXlCaW5kaW5nczogeyAuLi5ERUZBVUxUX0tFWUJJTkRJTkdTIH0sXHJcbiAgICBkZXZlbG9wZXJNb2RlOiBmYWxzZSxcclxuICAgIGVkaXRPbkNyZWF0ZTogZmFsc2UsXHJcbiAgICB0eXBlVG9FZGl0OiB0cnVlLFxyXG4gICAgY3VzdG9tTm9kZU5hbWVzOiB7fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9NSU5ETUFQID0gXCJtaW5kemotdmlld1wiO1xyXG5leHBvcnQgY29uc3QgVklFV19UWVBFX01JTkRNQVBfU1RZTEUgPSBcIm1pbmR6ai1zdHlsZS1wYW5lbFwiO1xyXG5leHBvcnQgY29uc3QgVklFV19UWVBFX01JTkRNQVBfT1VUTElORSA9IFwibWluZHpqLW91dGxpbmVcIjtcclxuZXhwb3J0IGNvbnN0IE1JTkRNQVBfRklMRV9FWFRFTlNJT04gPSBcIm1pbmR6alwiO1xyXG4iLCAiLy8gc3JjL2kxOG4udHNcclxuLy8gQWxsIDE5IGxhbmd1YWdlcyB3aXRoIENPTVBMRVRFIHRyYW5zbGF0aW9ucyAobm8gZmFsbGJhY2sgdG8gRW5nbGlzaClcclxuXHJcbmV4cG9ydCB0eXBlIExhbmd1YWdlID1cclxuICAgIHwgXCJlblwiXHJcbiAgICB8IFwiemhcIlxyXG4gICAgfCBcImphXCJcclxuICAgIHwgXCJmclwiXHJcbiAgICB8IFwiZGVcIlxyXG4gICAgfCBcImVzXCJcclxuICAgIHwgXCJydVwiXHJcbiAgICB8IFwic3ZcIlxyXG4gICAgfCBcImhpXCJcclxuICAgIHwgXCJrb1wiXHJcbiAgICB8IFwicHRcIlxyXG4gICAgfCBcImZpXCJcclxuICAgIHwgXCJub1wiXHJcbiAgICB8IFwibmxcIlxyXG4gICAgfCBcImxpXCJcclxuICAgIHwgXCJkYVwiXHJcbiAgICB8IFwiaGVcIlxyXG4gICAgfCBcIml0XCJcclxuICAgIHwgXCJhclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUzogeyB2YWx1ZTogTGFuZ3VhZ2U7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xyXG4gICAgeyB2YWx1ZTogXCJlblwiLCBsYWJlbDogXCJFbmdsaXNoXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiemhcIiwgbGFiZWw6IFwiXHU0RTJEXHU2NTg3XCIgfSxcclxuICAgIHsgdmFsdWU6IFwiamFcIiwgbGFiZWw6IFwiXHU2NUU1XHU2NzJDXHU4QTlFXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiZnJcIiwgbGFiZWw6IFwiRnJhblx1MDBFN2Fpc1wiIH0sXHJcbiAgICB7IHZhbHVlOiBcImRlXCIsIGxhYmVsOiBcIkRldXRzY2hcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJlc1wiLCBsYWJlbDogXCJFc3BhXHUwMEYxb2xcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJydVwiLCBsYWJlbDogXCJcdTA0MjBcdTA0NDNcdTA0NDFcdTA0NDFcdTA0M0FcdTA0MzhcdTA0MzlcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJzdlwiLCBsYWJlbDogXCJTdmVuc2thXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiaGlcIiwgbGFiZWw6IFwiXHUwOTM5XHUwOTNGXHUwOTI4XHUwOTREXHUwOTI2XHUwOTQwXCIgfSxcclxuICAgIHsgdmFsdWU6IFwia29cIiwgbGFiZWw6IFwiXHVENTVDXHVBRDZEXHVDNUI0XCIgfSxcclxuICAgIHsgdmFsdWU6IFwicHRcIiwgbGFiZWw6IFwiUG9ydHVndVx1MDBFQXNcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJmaVwiLCBsYWJlbDogXCJTdW9taVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIm5vXCIsIGxhYmVsOiBcIk5vcnNrXCIgfSxcclxuICAgIHsgdmFsdWU6IFwibmxcIiwgbGFiZWw6IFwiTmVkZXJsYW5kc1wiIH0sXHJcbiAgICB7IHZhbHVlOiBcImxpXCIsIGxhYmVsOiBcIkxpZWNodGVuc3RlaW5cIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJpdFwiLCBsYWJlbDogXCJJdGFsaWFub1wiIH0sXHJcbiAgICB7IHZhbHVlOiBcImRhXCIsIGxhYmVsOiBcIkRhbnNrXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiaGVcIiwgbGFiZWw6IFwiXHUwNUUyXHUwNUQxXHUwNUU4XHUwNUQ5XHUwNUVBXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiYXJcIiwgbGFiZWw6IFwiXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjMxXHUwNjI4XHUwNjRBXHUwNjI5XCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBSb290XCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgVW5kb1wiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJlZG9cIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIE1hcFwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZVwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZvY3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlNlYXJjaFwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlNlYXJjaCB8IFNwYWNlOkVkaXQgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOZXcgcm9vdFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93biBtb2RlXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiU3R5bGUgcGFuZWxcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJGb2N1cyBub2RlXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlNlYXJjaCBub2Rlc1wiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIlNldHRpbmdzXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlpvb20gSW5cIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlpvb20gT3V0XCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIEN1c3RvbVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgQmF0Y2ggRGVsZXRlXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRWRpdCBTdHlsZVwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOZXcgUm9vdFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBVbmRvXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFJlZG9cIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBTdHlsZVwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBFZGl0XCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZVwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBDb3B5XCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgQ3V0XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBQYXN0ZVwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgQ2hpbGRcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBMZWZ0IENoaWxkXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFNpYmxpbmdcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBEZWxldGVcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiSGlkZSBUb29sYmFyXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBTdHlsZVwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIkNoaWxkIE5vZGVcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlJvb3QgTm9kZVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkJhY2tncm91bmRcIixcclxuICAgIFwic20udGV4dFwiOiBcIlRleHQgQ29sb3JcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJGb250IFNpemVcIixcclxuICAgIFwic20uZm9udFwiOiBcIkZvbnRcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJCb3JkZXIgU3R5bGVcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJCb3JkZXIgQ29sb3JcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJCb3JkZXIgV2lkdGhcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiQm9yZGVyIFJhZGl1c1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbiBXaWR0aFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJNaW4gSGVpZ2h0XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJDb25uZWN0aW9uXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBlXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiQ29sb3JcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJXaWR0aFwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTGVuZ3RoXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmFpbmJvd1wiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiTm9kZSBEaXJlY3Rpb25cIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTaWJsaW5nIEdhcFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlJpZ2h0XCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJMZWZ0XCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCb3RoXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXR0ZVwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJTZWxlY3Rpb25cIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJTZWxlY3Rpb24gQ29sb3JcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJTZWxlY3Rpb24gV2lkdGhcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiT3V0bGluZSBPZmZzZXRcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJFZGl0IE91dGxpbmUgQ29sb3JcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkVkaXQgT3V0bGluZSBXaWR0aFwiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIkJveCBTZWxlY3Rpb24gQ29sb3JcIixcclxuICAgIFwib3V0bGluZS50aXRsZVwiOiBcIk91dGxpbmVcIixcclxuICAgIFwib3V0bGluZS5lbXB0eVwiOiBcIk5vIG1pbmQgbWFwIG9wZW5cIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiVGV4dCBBbGlnblwiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRleHQgUGFkZGluZ1wiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIkxpbmUgSGVpZ2h0XCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiQ2FudmFzIEJhY2tncm91bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJSZXNldFwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIkNsb3NlXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiU2hvdyBUb29sYmFyXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiVG9vbGJhciBQYWRkaW5nXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlRvcFwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJSaWdodFwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJCb3R0b21cIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiTGVmdFwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlRvb2xiYXIgUG9zaXRpb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJUb3BcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJCb3R0b21cIixcclxuICAgIFwic20udGJCZ1wiOiBcIlRvb2xiYXIgQmFja2dyb3VuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiQnV0dG9uIEJhY2tncm91bmRcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJCdXR0b24gQm9yZGVyIFN0eWxlXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJCdXR0b24gQm9yZGVyIENvbG9yXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIkJ1dHRvbiBUZXh0IENvbG9yXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUmVzZXQgVG9vbGJhclwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBOb2RlIFN0eWxlXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkxpbmUgQ29sb3JcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGluZSBXaWR0aFwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkNsZWFyIEN1c3RvbVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJCb3JkZXIgUmFkaXVzXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlNlYXJjaCBub2Rlcy4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJvb3RcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOZXcgUm9vdFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJDaGlsZFwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogU2V0dGluZ3NcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJMYW5ndWFnZVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJJbnRlcmZhY2UgbGFuZ3VhZ2VcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGhlbWVcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIkNvbG9yIHRoZW1lXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkxpZ2h0XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiRGFya1wiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlNob3cgVG9vbGJhclwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJTaG93IHRvb2xiYXJcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiQ2FudmFzIEJhY2tncm91bmRcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkJhY2tncm91bmQgY29sb3JcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiQWJvdXRcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaW9uXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRob3JcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkEgZmVhdHVyZS1yaWNoIG9wZW4gc291cmNlIG1pbmQgbWFwIGFwcCBmb3IgT2JzaWRpYW4gd2l0aCBjdXN0b20gc3R5bGVzLCByYWluYm93IGNvbm5lY3Rpb25zLCBtdWx0aS1zZWxlY3QsIGRyYWcgJiBkcm9wLCBhbmQgTWFya2Rvd24gaW1wb3J0L2V4cG9ydC5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJVcGRhdGVkXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWIgUmVwb3NpdG9yeVwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiU3VwcG9ydCBPcGVuIFNvdXJjZSBBdXRob3JcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJLZXlib2FyZCBTaG9ydGN1dHNcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiQ3VzdG9taXplIHNob3J0Y3V0c1wiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJFZGl0IG5vZGVcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiQWRkIHNpYmxpbmdcIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkFkZCBjaGlsZFwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiRm9jdXMgbm9kZVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJVbmRvXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlJlZG9cIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJMaW5lIGJyZWFrIChpbiBlZGl0KVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJEcmFnIGNhbnZhc1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlpvb20gaW5cIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiWm9vbSBvdXRcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJSZXNldCB6b29tXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJOYXZpZ2F0ZSB1cFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOYXZpZ2F0ZSBkb3duXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hdmlnYXRlIGxlZnRcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIk5hdmlnYXRlIHJpZ2h0XCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJQcmVzcyBrZXkuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjcm9sbCAmIFpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnQgdmVydGljYWwgc2Nyb2xsXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJ0IGhvcml6b250YWwgc2Nyb2xsXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiSW52ZXJ0IHpvb20gZGlyZWN0aW9uXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJFZGl0IG9uIGNyZWF0ZVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIkVudGVyIGVkaXQgbW9kZSB3aGVuIGNyZWF0aW5nIG5ldyBub2Rlc1wiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJSb290IG5vZGUgbmFtZVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiRGVmYXVsdCBuYW1lIGZvciBuZXcgcm9vdCBub2Rlc1wiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiQ2hpbGQgbm9kZSBuYW1lXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiRGVmYXVsdCBuYW1lIGZvciBuZXcgY2hpbGQgbm9kZXNcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJUeXBlIHRvIGVkaXRcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6XHJcbiAgICAgICAgXCJQcmVzcyBhbnkga2V5IHRvIGVudGVyIGVkaXQgbW9kZSB3aGVuIGEgbm9kZSBpcyBzZWxlY3RlZFwiLFxyXG59O1xyXG5cclxuY29uc3QgX3poOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFx1NEUzQlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFx1NjRBNFx1OTUwMFwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFx1OTFDRFx1NTA1QVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFx1NkEyMVx1NUYwRlwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgXHU1QkZDXHU1NkZFXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIlx1NUI5QVx1NEY0RFwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJcdTY0MUNcdTdEMjJcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpcdTY0MUNcdTdEMjIgfCBTcGFjZTpcdTdGMTZcdThGOTEgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJcdTY1QjBcdTVFRkFcdTRFM0JcdTgyODJcdTcwQjlcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd25cdTZBMjFcdTVGMEZcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJcdTY4MzdcdTVGMEZcdTk3NjJcdTY3N0ZcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJcdTVCOUFcdTRGNERcdTgyODJcdTcwQjlcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiXHU2NDFDXHU3RDIyXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHU4QkJFXHU3RjZFXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1NjUzRVx1NTkyN1wiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHU3RjI5XHU1QzBGXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1ODFFQVx1NUI5QVx1NEU0OVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHU2Mjc5XHU5MUNGXHU1MjIwXHU5NjY0XCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHU3RjE2XHU4RjkxXHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFx1NjVCMFx1NUVGQVx1NEUzQlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBcdTY0QTRcdTk1MDBcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgXHU5MUNEXHU1MDVBXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTUxNjhcdTVDNDBcdTY4MzdcdTVGMEZcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHU3RjE2XHU4RjkxXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTY4MzdcdTVGMEZcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgXHU1OTBEXHU1MjM2XCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgXHU1MjZBXHU1MjA3XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBcdTdDOThcdThEMzRcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IFx1NUI1MFx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFx1NURFNlx1NEZBN1x1NUI1MFx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdTUxNDRcdTVGMUZcdTgyODJcdTcwQjlcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTUyMjBcdTk2NjRcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHU5NjkwXHU4NUNGXHU1REU1XHU1MTc3XHU2ODBGXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1NTE2OFx1NUM0MFx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIlx1NUI1MFx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHU0RTNCXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInNtLmJnXCI6IFwiXHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJcdTY1ODdcdTVCNTdcdTgyNzJcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJcdTVCNTdcdTRGNTNcdTU5MjdcdTVDMEZcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1NUI1N1x1NEY1M1wiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1OEZCOVx1Njg0Nlx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlx1OEZCOVx1Njg0Nlx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlx1OEZCOVx1Njg0Nlx1NUJCRFx1NUVBNlwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTU3MDZcdTg5RDJcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJcdTY3MDBcdTVDMEZcdTVCQkRcdTVFQTZcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiXHU2NzAwXHU1QzBGXHU5QUQ4XHU1RUE2XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJcdThGREVcdTdFQkZcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1N0M3Qlx1NTc4QlwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1NUJCRFx1NUVBNlwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHU5NTdGXHU1RUE2XCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggXHU1RjY5XHU4Njc5XCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdTgyODJcdTcwQjlcdTY1QjlcdTU0MTFcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJcdTU0MENcdTdFQTdcdTk1RjRcdThERERcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdTUzRjNcdTRGQTdcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1NURFNlx1NEZBN1wiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHU1REU2XHU1M0YzXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHU4QzAzXHU4MjcyXHU2NzdGXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlx1OTAwOVx1NEUyRFwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlx1OTAwOVx1NEUyRFx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlx1OTAwOVx1NEUyRFx1Njg0Nlx1NUJCRFx1NUVBNlwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTkwMDlcdTRFMkRcdTY4NDZcdTUwNEZcdTc5RkJcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJcdTdGMTZcdThGOTFcdTY4NDZcdTk4OUNcdTgyNzJcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1N0YxNlx1OEY5MVx1Njg0Nlx1NUJCRFx1NUVBNlwiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIlx1Njg0Nlx1OTAwOVx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJvdXRsaW5lLnRpdGxlXCI6IFwiXHU1OTI3XHU3RUIyXCIsXHJcbiAgICBcIm91dGxpbmUuZW1wdHlcIjogXCJcdTZDQTFcdTY3MDlcdTYyNTNcdTVGMDBcdTc2ODRcdTYwMURcdTdFRjRcdTVCRkNcdTU2RkVcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiXHU2NTg3XHU1QjU3XHU1QkY5XHU5RjUwXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiXHU2NTg3XHU1QjU3XHU5NUY0XHU4REREXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHU4ODRDXHU5NUY0XHU4REREXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHU3NTNCXHU1RTAzXHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiXHU5MUNEXHU3RjZFXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiXHU1MTczXHU5NUVEXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiXHU2NjNFXHU3OTNBXHU1REU1XHU1MTc3XHU2ODBGXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiXHU1REU1XHU1MTc3XHU2ODBGXHU1MTg1XHU4RkI5XHU4REREXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1NEUwQVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTUzRjNcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHU0RTBCXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1NURFNlwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1NURFNVx1NTE3N1x1NjgwRlx1NEY0RFx1N0Y2RVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlx1OTg3Nlx1OTBFOFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIlx1NUU5NVx1OTBFOFwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiXHU1REU1XHU1MTc3XHU2ODBGXHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJcdTYzMDlcdTk0QUVcdTgwQ0NcdTY2NkZcdTgyNzJcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTYzMDlcdTk0QUVcdThGQjlcdTY4NDZcdTY4MzdcdTVGMEZcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlx1NjMwOVx1OTRBRVx1OEZCOVx1Njg0Nlx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJcdTYzMDlcdTk0QUVcdTVCNTdcdTRGNTNcdTk4OUNcdTgyNzJcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTkxQ0RcdTdGNkVcdTVERTVcdTUxNzdcdTY4MEZcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHU4MjgyXHU3MEI5XHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1OEZERVx1N0VCRlx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdThGREVcdTdFQkZcdTVCQkRcdTVFQTZcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJcdTZFMDVcdTk2NjRcdTgxRUFcdTVCOUFcdTRFNDlcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHU1NzA2XHU4OUQyXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlx1NjQxQ1x1N0QyMlx1ODI4Mlx1NzBCOS4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1NEUzQlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1NjVCMFx1NEUzQlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJcdTVCNTBcdTgyODJcdTcwQjlcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIFx1OEJCRVx1N0Y2RVwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlx1OEJFRFx1OEEwMFwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJcdTc1NENcdTk3NjJcdThCRURcdThBMDBcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiXHU0RTNCXHU5ODk4XCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJcdTk4OUNcdTgyNzJcdTRFM0JcdTk4OThcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiXHU0RUFFXHU4MjcyXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiXHU2Njk3XHU4MjcyXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiXHU2NjNFXHU3OTNBXHU1REU1XHU1MTc3XHU2ODBGXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1NjYzRVx1NzkzQVx1OTg3Nlx1OTBFOFx1NURFNVx1NTE3N1x1NjgwRlwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJcdTc1M0JcdTVFMDNcdTgwQ0NcdTY2NkZcdTgyNzJcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIlx1NzUzQlx1NUUwM1x1ODBDQ1x1NjY2Rlx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTUxNzNcdTRFOEVcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdTcyNDhcdTY3MkNcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1NEY1Q1x1ODAwNVwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiXHU0RTAwXHU2QjNFXHU1MjlGXHU4MEZEXHU0RTMwXHU1QkNDXHU3Njg0T2JzaWRpYW5cdTYwMURcdTdFRjRcdTVCRkNcdTU2RkVcdTVGMDBcdTZFOTBcdTVFOTRcdTc1MjhcdUZGMENcdTY1MkZcdTYzMDFcdTgxRUFcdTVCOUFcdTRFNDlcdTY4MzdcdTVGMEZcdTMwMDFcdTVGNjlcdTg2NzlcdThGREVcdTdFQkZcdTMwMDFcdTU5MUFcdTkwMDlcdTMwMDFcdTYyRDZcdTY1M0VcdTU0OENNYXJrZG93blx1N0YxNlx1OEY5MVx1NUJGQ1x1NTE2NVx1NUJGQ1x1NTFGQVx1MzAwMlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1NjZGNFx1NjVCMFx1NjVFNVx1NjcxRlwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViIFx1NEVEM1x1NUU5M1wiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiXHU2NTJGXHU2MzAxXHU1RjAwXHU2RTkwXHU5ODc5XHU3NkVFXHU0RjVDXHU4MDA1XCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiXHU1RkVCXHU2Mzc3XHU5NTJFXHU4QkJFXHU3RjZFXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1ODFFQVx1NUI5QVx1NEU0OVx1NUZFQlx1NjM3N1x1OTUyRVwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJcdTdGMTZcdThGOTFcdTgyODJcdTcwQjlcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHU2NUIwXHU1RUZBXHU1MTQ0XHU1RjFGXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJcdTY1QjBcdTVFRkFcdTVCNTBcdTgyODJcdTcwQjlcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIlx1NUI5QVx1NEY0RFx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTY0QTRcdTk1MDBcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHU5MUNEXHU1MDVBXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiXHU2MzYyXHU4ODRDKFx1N0YxNlx1OEY5MVx1NEUyRClcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiXHU2MkQ2XHU1MkE4XHU3NTNCXHU1RTAzXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiXHU2NTNFXHU1OTI3XCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlx1N0YyOVx1NUMwRlwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1OTFDRFx1N0Y2RVx1N0YyOVx1NjUzRVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHU1NDExXHU0RTBBXHU1QkZDXHU4MjJBXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIlx1NTQxMVx1NEUwQlx1NUJGQ1x1ODIyQVwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJcdTU0MTFcdTVERTZcdTVCRkNcdTgyMkFcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1NTQxMVx1NTNGM1x1NUJGQ1x1ODIyQVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiXHU2MzA5XHU0RTBCXHU2MzA5XHU5NTJFLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJcdTZFREFcdTUyQThcdTRFMEVcdTdGMjlcdTY1M0VcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdTUzQ0RcdThGNkNcdTU3ODJcdTc2RjRcdTZFREFcdTUyQThcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJcdTUzQ0RcdThGNkNcdTZDMzRcdTVFNzNcdTZFREFcdTUyQThcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJcdTUzQ0RcdThGNkNcdTdGMjlcdTY1M0VcdTY1QjlcdTU0MTFcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIlx1NTIxQlx1NUVGQVx1NjVGNlx1N0YxNlx1OEY5MVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIlx1NTIxQlx1NUVGQVx1NjVCMFx1ODI4Mlx1NzBCOVx1NjVGNlx1ODFFQVx1NTJBOFx1OEZEQlx1NTE2NVx1N0YxNlx1OEY5MVx1NkEyMVx1NUYwRlwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJcdTRFM0JcdTgyODJcdTcwQjlcdTU0MERcdTc5RjBcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlx1NjVCMFx1NEUzQlx1ODI4Mlx1NzBCOVx1NzY4NFx1OUVEOFx1OEJBNFx1NTQwRFx1NzlGMFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiXHU1QjUwXHU4MjgyXHU3MEI5XHU1NDBEXHU3OUYwXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiXHU2NUIwXHU1QjUwXHU4MjgyXHU3MEI5XHU3Njg0XHU5RUQ4XHU4QkE0XHU1NDBEXHU3OUYwXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHU2MzA5XHU5NTJFXHU3RjE2XHU4RjkxXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlx1OTAwOVx1NEUyRFx1ODI4Mlx1NzBCOVx1NjVGNlx1NjMwOVx1NEVGQlx1NjEwRlx1OTUyRVx1NzZGNFx1NjNBNVx1OEZEQlx1NTE2NVx1N0YxNlx1OEY5MVx1NkEyMVx1NUYwRlwiLFxyXG59O1xyXG5cclxuY29uc3QgX2phOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFx1MzBFQlx1MzBGQ1x1MzBDOFwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFx1NTE0M1x1MzA2Qlx1NjIzQlx1MzA1OVwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFx1MzA4NFx1MzA4QVx1NzZGNFx1MzA1OVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgXHUzMERFXHUzMEMzXHUzMEQ3XCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIlx1MzBENVx1MzBBOVx1MzBGQ1x1MzBBQlx1MzBCOVwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJcdTY5MUNcdTdEMjJcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpcdTY5MUNcdTdEMjIgfCBTcGFjZTpcdTdERThcdTk2QzYgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJcdTY1QjBcdTg5OEZcdTMwRUJcdTMwRkNcdTMwQzhcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd25cdTMwRTJcdTMwRkNcdTMwQzlcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcdTMwRDFcdTMwQ0RcdTMwRUJcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJcdTMwQ0VcdTMwRkNcdTMwQzlcdTMwNkJcdTMwRDVcdTMwQTlcdTMwRkNcdTMwQUJcdTMwQjlcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHU2OTFDXHU3RDIyXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHU4QTJEXHU1QjlBXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1NjJFMVx1NTkyN1wiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHU3RTJFXHU1QzBGXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1MzBBQlx1MzBCOVx1MzBCRlx1MzBFMFwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHU0RTAwXHU2MkVDXHU1MjRBXHU5NjY0XCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXHU3REU4XHU5NkM2XCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFx1NjVCMFx1ODk4Rlx1MzBFQlx1MzBGQ1x1MzBDOFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBcdTUxNDNcdTMwNkJcdTYyM0JcdTMwNTlcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgXHUzMDg0XHUzMDhBXHU3NkY0XHUzMDU5XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTUxNjhcdTRGNTNcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHU3REU4XHU5NkM2XCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgXHUzMEIzXHUzMEQ0XHUzMEZDXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgXHUzMEFCXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBcdThDQkNcdTMwOEFcdTRFRDhcdTMwNTFcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IFx1NUI1MFx1MzBDRVx1MzBGQ1x1MzBDOVwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFx1NURFNlx1NUI1MFx1MzBDRVx1MzBGQ1x1MzBDOVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdTUxNDRcdTVGMUZcdTMwQ0VcdTMwRkNcdTMwQzlcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTUyNEFcdTk2NjRcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHUzMDkyXHU5NzVFXHU4ODY4XHU3OTNBXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1NTE2OFx1NEY1M1x1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIlx1NUI1MFx1MzBDRVx1MzBGQ1x1MzBDOVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHUzMEVCXHUzMEZDXHUzMEM4XHUzMENFXHUzMEZDXHUzMEM5XCIsXHJcbiAgICBcInNtLmJnXCI6IFwiXHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJcdTY1ODdcdTVCNTdcdTgyNzJcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJcdTMwRDVcdTMwQTlcdTMwRjNcdTMwQzhcdTMwQjVcdTMwQTRcdTMwQkFcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1MzBENVx1MzBBOVx1MzBGM1x1MzBDOFwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1NjdBMFx1N0REQVx1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlx1NjdBMFx1N0REQVx1MzA2RVx1ODI3MlwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlx1NjdBMFx1N0REQVx1MzA2RVx1NUU0NVwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTg5RDJcdTRFMzhcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJcdTY3MDBcdTVDMEZcdTVFNDVcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiXHU2NzAwXHU1QzBGXHU5QUQ4XHUzMDU1XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJcdTYzQTVcdTdEOUFcdTdEREFcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1MzBCRlx1MzBBNFx1MzBEN1wiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1ODI3MlwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1NUU0NVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHU5NTc3XHUzMDU1XCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggXHUzMEVDXHUzMEE0XHUzMEYzXHUzMERDXHUzMEZDXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdTMwQ0VcdTMwRkNcdTMwQzlcdTY1QjlcdTU0MTFcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJcdTUxNDRcdTVGMUZcdTMwQ0VcdTMwRkNcdTMwQzlcdTk1OTNcdTk2OTRcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdTUzRjNcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1NURFNlwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHU0RTIxXHU2NUI5XCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHUzMEQxXHUzMEVDXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlx1OTA3OFx1NjI5RVwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlx1OTA3OFx1NjI5RVx1ODI3MlwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlx1OTA3OFx1NjI5RVx1NjdBMFx1MzA2RVx1NUU0NVwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTMwQTJcdTMwQTZcdTMwQzhcdTMwRTlcdTMwQTRcdTMwRjNcdTMwQUFcdTMwRDVcdTMwQkJcdTMwQzNcdTMwQzhcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJcdTdERThcdTk2QzZcdTY3QTBcdTMwNkVcdTgyNzJcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1N0RFOFx1OTZDNlx1NjdBMFx1MzA2RVx1NUU0NVwiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIlx1N0JDNFx1NTZGMlx1OTA3OFx1NjI5RVx1ODI3MlwiLFxyXG4gICAgXCJvdXRsaW5lLnRpdGxlXCI6IFwiXHUzMEEyXHUzMEE2XHUzMEM4XHUzMEU5XHUzMEE0XHUzMEYzXCIsXHJcbiAgICBcIm91dGxpbmUuZW1wdHlcIjogXCJcdTMwREVcdTMwQTRcdTMwRjNcdTMwQzlcdTMwREVcdTMwQzNcdTMwRDdcdTMwNENcdTk1OEJcdTMwNEJcdTMwOENcdTMwNjZcdTMwNDRcdTMwN0VcdTMwNUJcdTMwOTNcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiXHUzMEM2XHUzMEFEXHUzMEI5XHUzMEM4XHU5MTREXHU3RjZFXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiXHUzMEM2XHUzMEFEXHUzMEI5XHUzMEM4XHU0RjU5XHU3NjdEXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHU4ODRDXHUzMDZFXHU5QUQ4XHUzMDU1XCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHUzMEFEXHUzMEUzXHUzMEYzXHUzMEQwXHUzMEI5XHU4MENDXHU2NjZGXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiXHUzMEVBXHUzMEJCXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiXHU5NTg5XHUzMDU4XHUzMDhCXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHU4ODY4XHU3OTNBXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHU0RjU5XHU3NjdEXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1NEUwQVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTUzRjNcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHU0RTBCXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1NURFNlwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MzBDNFx1MzBGQ1x1MzBFQlx1MzBEMFx1MzBGQ1x1NEY0RFx1N0Y2RVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlx1NEUwQVx1OTBFOFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIlx1NEUwQlx1OTBFOFwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHU4MENDXHU2NjZGXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJcdTMwRENcdTMwQkZcdTMwRjNcdTgwQ0NcdTY2NkZcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTMwRENcdTMwQkZcdTMwRjNcdTY3QTBcdTdEREFcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlx1MzBEQ1x1MzBCRlx1MzBGM1x1NjdBMFx1N0REQVx1MzA2RVx1ODI3MlwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJcdTMwRENcdTMwQkZcdTMwRjNcdTY1ODdcdTVCNTdcdTgyNzJcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTMwQzRcdTMwRkNcdTMwRUJcdTMwRDBcdTMwRkNcdTMwRUFcdTMwQkJcdTMwQzNcdTMwQzhcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHUzMENFXHUzMEZDXHUzMEM5XHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1N0REQVx1MzA2RVx1ODI3MlwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdTdEREFcdTMwNkVcdTVFNDVcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJcdTMwQUJcdTMwQjlcdTMwQkZcdTMwRTBcdTMwOTJcdTMwQUZcdTMwRUFcdTMwQTJcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHU4OUQyXHU0RTM4XCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlx1MzBDRVx1MzBGQ1x1MzBDOVx1MzA5Mlx1NjkxQ1x1N0QyMi4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MzBFQlx1MzBGQ1x1MzBDOFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1NjVCMFx1MzA1N1x1MzA0NFx1MzBFQlx1MzBGQ1x1MzBDOFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIFx1OEEyRFx1NUI5QVwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlx1OEEwMFx1OEE5RVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJcdTMwQTRcdTMwRjNcdTMwQkZcdTMwRkNcdTMwRDVcdTMwQTdcdTMwRkNcdTMwQjlcdThBMDBcdThBOUVcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiXHUzMEM2XHUzMEZDXHUzMERFXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJcdTMwQUJcdTMwRTlcdTMwRkNcdTMwQzZcdTMwRkNcdTMwREVcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiXHUzMEU5XHUzMEE0XHUzMEM4XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiXHUzMEMwXHUzMEZDXHUzMEFGXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHU4ODY4XHU3OTNBXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1MzBDNFx1MzBGQ1x1MzBFQlx1MzBEMFx1MzBGQ1x1MzA5Mlx1ODg2OFx1NzkzQVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJcdTMwQURcdTMwRTNcdTMwRjNcdTMwRDBcdTMwQjlcdTgwQ0NcdTY2NkZcdTgyNzJcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIlx1ODBDQ1x1NjY2Rlx1ODI3MlwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTY5ODJcdTg5ODFcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdTMwRDBcdTMwRkNcdTMwQjhcdTMwRTdcdTMwRjNcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1NEY1Q1x1ODAwNVwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiT2JzaWRpYW5cdTc1MjhcdTMwNkVcdTlBRDhcdTZBNUZcdTgwRkRcdTMwQUFcdTMwRkNcdTMwRDdcdTMwRjNcdTMwQkRcdTMwRkNcdTMwQjlcdTMwREVcdTMwQTRcdTMwRjNcdTMwQzlcdTMwREVcdTMwQzNcdTMwRDdcdTMwMDJcdTMwQUJcdTMwQjlcdTMwQkZcdTMwRTBcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcdTMwMDFcdTMwRUNcdTMwQTRcdTMwRjNcdTMwRENcdTMwRkNcdTYzQTVcdTdEOUFcdTdEREFcdTMwMDFcdTg5MDdcdTY1NzBcdTkwNzhcdTYyOUVcdTMwMDFcdTMwQzlcdTMwRTlcdTMwQzNcdTMwQjAmXHUzMEM5XHUzMEVEXHUzMEMzXHUzMEQ3XHUzMDAxTWFya2Rvd25cdTMwQTRcdTMwRjNcdTMwRERcdTMwRkNcdTMwQzgvXHUzMEE4XHUzMEFGXHUzMEI5XHUzMEREXHUzMEZDXHUzMEM4XHU1QkZFXHU1RkRDXHUzMDAyXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHU2NkY0XHU2NUIwXHU2NUU1XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWJcdTMwRUFcdTMwRERcdTMwQjhcdTMwQzhcdTMwRUFcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlx1MzBBQVx1MzBGQ1x1MzBEN1x1MzBGM1x1MzBCRFx1MzBGQ1x1MzBCOVx1NEY1Q1x1ODAwNVx1MzA5Mlx1NjUyRlx1NjNGNFwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlx1MzBBRFx1MzBGQ1x1MzBEQ1x1MzBGQ1x1MzBDOVx1MzBCN1x1MzBFN1x1MzBGQ1x1MzBDOFx1MzBBQlx1MzBDM1x1MzBDOFwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJcdTMwQjdcdTMwRTdcdTMwRkNcdTMwQzhcdTMwQUJcdTMwQzNcdTMwQzhcdTMwOTJcdTMwQUJcdTMwQjlcdTMwQkZcdTMwREVcdTMwQTRcdTMwQkFcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHUzMDkyXHU3REU4XHU5NkM2XCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIlx1NTE0NFx1NUYxRlx1MzBDRVx1MzBGQ1x1MzBDOVx1OEZGRFx1NTJBMFwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHU1QjUwXHUzMENFXHUzMEZDXHUzMEM5XHU4RkZEXHU1MkEwXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdTMwQ0VcdTMwRkNcdTMwQzlcdTMwNkJcdTMwRDVcdTMwQTlcdTMwRkNcdTMwQUJcdTMwQjlcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHU1MTQzXHUzMDZCXHU2MjNCXHUzMDU5XCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1MzA4NFx1MzA4QVx1NzZGNFx1MzA1OVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1NjUzOVx1ODg0Q1x1RkYwOFx1N0RFOFx1OTZDNlx1NEUyRFx1RkYwOVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJcdTMwQURcdTMwRTNcdTMwRjNcdTMwRDBcdTMwQjlcdTMwOTJcdTc5RkJcdTUyRDVcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTYyRTFcdTU5MjdcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHU3RTJFXHU1QzBGXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUzMEJBXHUzMEZDXHUzMEUwXHUzMEVBXHUzMEJCXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJcdTRFMEFcdTMwNkJcdTc5RkJcdTUyRDVcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiXHU0RTBCXHUzMDZCXHU3OUZCXHU1MkQ1XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1NURFNlx1MzA2Qlx1NzlGQlx1NTJENVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiXHU1M0YzXHUzMDZCXHU3OUZCXHU1MkQ1XCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJcdTMwQURcdTMwRkNcdTMwOTJcdTYyQkNcdTMwNTdcdTMwNjZcdTMwNEZcdTMwNjBcdTMwNTVcdTMwNDQuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlx1MzBCOVx1MzBBRlx1MzBFRFx1MzBGQ1x1MzBFQlx1MzA2OFx1MzBCQVx1MzBGQ1x1MzBFMFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIlx1NTc4Mlx1NzZGNFx1MzBCOVx1MzBBRlx1MzBFRFx1MzBGQ1x1MzBFQlx1NTNDRFx1OEVFMlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1NkMzNFx1NUU3M1x1MzBCOVx1MzBBRlx1MzBFRFx1MzBGQ1x1MzBFQlx1NTNDRFx1OEVFMlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MzBCQVx1MzBGQ1x1MzBFMFx1NjVCOVx1NTQxMVx1NTNDRFx1OEVFMlwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiXHU0RjVDXHU2MjEwXHU2NjQyXHUzMDZCXHU3REU4XHU5NkM2XCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHU0RjVDXHU2MjEwXHU2NjQyXHUzMDZCXHU3REU4XHU5NkM2XHUzMEUyXHUzMEZDXHUzMEM5XHUzMDZCXHU1MTY1XHUzMDhCXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlx1MzBFQlx1MzBGQ1x1MzBDOFx1MzBDRVx1MzBGQ1x1MzBDOVx1NTQwRFwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHU2NUIwXHU4OThGXHUzMEVCXHUzMEZDXHUzMEM4XHUzMDZFXHUzMEM3XHUzMEQ1XHUzMEE5XHUzMEVCXHUzMEM4XHU1NDBEXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcdTU0MERcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJcdTY1QjBcdTg5OEZcdTVCNTBcdTMwQ0VcdTMwRkNcdTMwQzlcdTMwNkVcdTMwQzdcdTMwRDVcdTMwQTlcdTMwRUJcdTMwQzhcdTU0MERcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJcdTMwQURcdTMwRkNcdTMwNjdcdTdERThcdTk2QzZcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHU5MDc4XHU2MjlFXHU2NjQyXHUzMDZCXHUzMEFEXHUzMEZDXHUzMDkyXHU2MkJDXHUzMDU5XHUzMDY4XHU3REU4XHU5NkM2XHUzMEUyXHUzMEZDXHUzMEM5XHUzMDZCXHU1MTY1XHUzMDhCXCIsXHJcbn07XHJcblxyXG5jb25zdCBfZnI6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUmFjaW5lXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgQW5udWxlclwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJlZmFpcmVcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIENhcnRlXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRm9jdXNcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiUmVjaGVyY2hlclwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlJlY2hlcmNoZXIgfCBFc3BhY2U6XHUwMEM5ZGl0ZXIgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOb3V2ZWxsZSByYWNpbmVcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTW9kZSBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlBhbm5lYXUgZGUgc3R5bGVcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJGb2NhbGlzZXIgbGUgblx1MDE1M3VkXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlJlY2hlcmNoZXIgZGVzIG5cdTAxNTN1ZHNcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJQYXJhbVx1MDBFOHRyZXNcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiWm9vbSBhdmFudFwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiWm9vbSBhcnJpXHUwMEU4cmVcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgUGVyc29ubmFsaXNcdTAwRTlcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFN1cHByLiBlbiBsb3RcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBNb2RpZmllciBsZSBzdHlsZVwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOb3V2ZWxsZSByYWNpbmVcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgQW5udWxlclwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBSZWZhaXJlXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZSBnbG9iYWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHUwMEM5ZGl0ZXJcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIENvcGllclwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIENvdXBlclwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgQ29sbGVyXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBFbmZhbnRcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBFbmZhbnQgZ2F1Y2hlXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEZyXHUwMEU4cmVcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTdXBwcmltZXJcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiTWFzcXVlciBsYSBiYXJyZSBkJ291dGlsc1wiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZSBnbG9iYWxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJOXHUwMTUzdWQgZW5mYW50XCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJOXHUwMTUzdWQgcmFjaW5lXCIsXHJcbiAgICBcInNtLmJnXCI6IFwiRm9uZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiQ291bGV1ciB0ZXh0ZVwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlRhaWxsZSBwb2xpY2VcIixcclxuICAgIFwic20uZm9udFwiOiBcIlBvbGljZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlN0eWxlIGJvcmR1cmVcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJDb3VsZXVyIGJvcmR1cmVcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJMYXJnZXVyIGJvcmR1cmVcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiUmF5b24gYm9yZHVyZVwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIkxhcmdldXIgbWluLlwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJIYXV0ZXVyIG1pbi5cIixcclxuICAgIFwic20uY29ublwiOiBcIkNvbm5leGlvblwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiVHlwZVwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkNvdWxldXJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJMYXJnZXVyXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMb25ndWV1clwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IEFyYy1lbi1jaWVsXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJEaXJlY3Rpb24gblx1MDE1M3Vkc1wiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIkVzcGFjZW1lbnQgZnJcdTAwRThyZXNcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJEcm9pdGVcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIkdhdWNoZVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiTGVzIGRldXhcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldHRlXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlNcdTAwRTlsZWN0aW9uXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiQ291bGV1ciBzXHUwMEU5bGVjdGlvblwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIkxhcmdldXIgc1x1MDBFOWxlY3Rpb25cIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiRFx1MDBFOWNhbGFnZSBjb250b3VyXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiQ291bGV1ciBjb250b3VyIFx1MDBFOWRpdGlvblwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiTGFyZ2V1ciBjb250b3VyIFx1MDBFOWRpdGlvblwiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIkNvdWxldXIgZGUgc1x1MDBFOWxlY3Rpb25cIixcclxuICAgIFwib3V0bGluZS50aXRsZVwiOiBcIlBsYW5cIixcclxuICAgIFwib3V0bGluZS5lbXB0eVwiOiBcIkF1Y3VuZSBjYXJ0ZSBvdXZlcnRlXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIkFsaWduZW1lbnQgdGV4dGVcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJNYXJnZSB0ZXh0ZVwiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIkhhdXRldXIgZGUgbGlnbmVcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJGb25kIGR1IGNhbmV2YXNcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJSXHUwMEU5aW5pdGlhbGlzZXJcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJGZXJtZXJcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJBZmZpY2hlciBiYXJyZSBkJ291dGlsc1wiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIk1hcmdlcyBiYXJyZVwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJIYXV0XCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIkRyb2l0ZVwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJCYXNcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiR2F1Y2hlXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiUG9zaXRpb24gYmFycmVcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJIYXV0XCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiQmFzXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJGb25kIGJhcnJlXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJGb25kIGJvdXRvblwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlN0eWxlIGJvcmR1cmUgYm91dG9uXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJDb3VsZXVyIGJvcmR1cmUgYm91dG9uXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIkNvdWxldXIgdGV4dGUgYm91dG9uXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUlx1MDBFOWluaXRpYWxpc2VyIGxhIGJhcnJlXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlIGR1IG5cdTAxNTN1ZFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJDb3VsZXVyIGxpZ25lXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxhcmdldXIgbGlnbmVcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJFZmZhY2VyIHBlcnNvbm5hbGlzYXRpb25cIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmF5b24gYm9yZHVyZVwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJSZWNoZXJjaGVyLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiUmFjaW5lXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTm91dmVsbGUgcmFjaW5lXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkVuZmFudFwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJQYXJhbVx1MDBFOHRyZXMgTWluZFpKXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiTGFuZ3VlXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIkxhbmd1ZSBkJ2ludGVyZmFjZVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUaFx1MDBFOG1lXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJUaFx1MDBFOG1lIGRlIGNvdWxldXJcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiQ2xhaXJcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJTb21icmVcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJBZmZpY2hlciBiYXJyZSBkJ291dGlsc1wiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJBZmZpY2hlciBsYSBiYXJyZVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJGb25kIGR1IGNhbmV2YXNcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkNvdWxldXIgZGUgZm9uZFwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTAwQzAgcHJvcG9zXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0ZXVyXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJBcHBsaWNhdGlvbiBkZSBjYXJ0ZSBtZW50YWxlIG9wZW4gc291cmNlIHBvdXIgT2JzaWRpYW4gYXZlYyBzdHlsZXMgcGVyc29ubmFsaXNcdTAwRTlzLCBjb25uZXhpb25zIGFyYy1lbi1jaWVsLCBtdWx0aS1zXHUwMEU5bGVjdGlvbiwgZ2xpc3Nlci1kXHUwMEU5cG9zZXIgZXQgaW1wb3J0L2V4cG9ydCBNYXJrZG93bi5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJNaXMgXHUwMEUwIGpvdXJcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkRcdTAwRTlwXHUwMEY0dCBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlNvdXRlbmlyIGwnYXV0ZXVyIG9wZW4gc291cmNlXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiUmFjY291cmNpcyBjbGF2aWVyXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlBlcnNvbm5hbGlzZXIgbGVzIHJhY2NvdXJjaXNcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUwMEM5ZGl0ZXIgbGUgblx1MDE1M3VkXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkFqb3V0ZXIgdW4gZnJcdTAwRThyZVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiQWpvdXRlciB1biBlbmZhbnRcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZvY2FsaXNlciBsZSBuXHUwMTUzdWRcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiQW5udWxlclwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJSZWZhaXJlXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiUmV0b3VyIFx1MDBFMCBsYSBsaWduZSAoZW4gXHUwMEU5ZGl0aW9uKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJEXHUwMEU5cGxhY2VyIGxlIGNhbmV2YXNcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJab29tIGF2YW50XCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlpvb20gYXJyaVx1MDBFOHJlXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiUlx1MDBFOWluaXRpYWxpc2VyIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hdmlndWVyIGhhdXRcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiTmF2aWd1ZXIgYmFzXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hdmlndWVyIGdhdWNoZVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWd1ZXIgZHJvaXRlXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJBcHB1eWV6Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJEXHUwMEU5ZmlsZW1lbnQgZXQgem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVyc2VyIGRcdTAwRTlmaWxlbWVudCBWXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJzZXIgZFx1MDBFOWZpbGVtZW50IEhcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnNlciB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTAwQzlkaXRlciBcdTAwRTAgbGEgY3JcdTAwRTlhdGlvblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIk1vZGUgXHUwMEU5ZGl0aW9uIFx1MDBFMCBsYSBjclx1MDBFOWF0aW9uXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIk5vbSByYWNpbmVcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIk5vbSBwYXIgZFx1MDBFOWZhdXQgZGVzIHJhY2luZXNcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIk5vbSBlbmZhbnRcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJOb20gcGFyIGRcdTAwRTlmYXV0IGRlcyBlbmZhbnRzXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiU2Fpc2llIHBvdXIgXHUwMEU5ZGl0ZXJcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiXHUwMEM5ZGl0ZXIgZW4gdGFwYW50IHF1YW5kIHVuIG5cdTAxNTN1ZCBlc3Qgc1x1MDBFOWxlY3Rpb25uXHUwMEU5XCIsXHJcbn07XHJcblxyXG5jb25zdCBfZGU6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgV3VyemVsXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgUlx1MDBGQ2NrZ1x1MDBFNG5naWdcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBXaWVkZXJob2xlblwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgS2FydGVcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZva3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlN1Y2hlblwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlN1Y2hlbiB8IExlZXJ0YXN0ZTpCZWFyYmVpdGVuIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTmV1ZSBXdXJ6ZWxcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24tTW9kdXNcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlsLVBhbmVsXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiS25vdGVuIGZva3Vzc2llcmVuXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIktub3RlbiBzdWNoZW5cIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJFaW5zdGVsbHVuZ2VuXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlZlcmdyXHUwMEY2XHUwMERGZXJuXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJWZXJrbGVpbmVyblwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBCZW51dHplcmRlZmluaWVydFwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgQWxsZSBsXHUwMEY2c2NoZW5cIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsIGJlYXJiZWl0ZW5cIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTmV1ZSBXdXJ6ZWxcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgUlx1MDBGQ2NrZ1x1MDBFNG5naWdcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgV2llZGVyaG9sZW5cIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbGVyIFN0aWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgQmVhcmJlaXRlblwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBLb3BpZXJlblwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIEF1c3NjaG5laWRlblwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgRWluZlx1MDBGQ2dlblwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgS2luZGtub3RlblwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IExpbmtlciBLaW5ka25vdGVuXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEdlc2Nod2lzdGVyXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgTFx1MDBGNnNjaGVuXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIldlcmt6ZXVnbGVpc3RlIGF1c2JsZW5kZW5cIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsZXIgU3RpbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIktpbmRrbm90ZW5cIixcclxuICAgIFwic20ucm9vdFwiOiBcIld1cnplbGtub3RlblwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZXh0ZmFyYmVcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJTY2hyaWZ0Z3JcdTAwRjZcdTAwREZlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJTY2hyaWZ0YXJ0XCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiUmFobWVuc3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlJhaG1lbmZhcmJlXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiUmFobWVuYnJlaXRlXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIkVja2VucmFkaXVzXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBCcmVpdGVcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiTWluLiBIXHUwMEY2aGVcIixcclxuICAgIFwic20uY29ublwiOiBcIlZlcmJpbmR1bmdcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cFwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkZhcmJlXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiQnJlaXRlXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMXHUwMEU0bmdlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmVnZW5ib2dlblwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiS25vdGVucmljaHR1bmdcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJHZXNjaHdpc3RlcmFic3RhbmRcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJSZWNodHNcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIkxpbmtzXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCZWlkZVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dGVcIixcclxuICAgIFwic20uc2VsXCI6IFwiQXVzd2FobFwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIkF1c3dhaGxmYXJiZVwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIkF1c3dhaGxicmVpdGVcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiS29udHVyLVZlcnNhdHpcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJCZWFyYmVpdHVuZ3NyYWhtZW5mYXJiZVwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiQmVhcmJlaXR1bmdzcmFobWVuYnJlaXRlXCIsXHJcbiAgICBcInNtLmJveFNlbENvbG9yXCI6IFwiQXVzd2FobGZhcmJlXCIsXHJcbiAgICBcIm91dGxpbmUudGl0bGVcIjogXCJHbGllZGVydW5nXCIsXHJcbiAgICBcIm91dGxpbmUuZW1wdHlcIjogXCJLZWluZSBNaW5kbWFwIGdlXHUwMEY2ZmZuZXRcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiVGV4dGF1c3JpY2h0dW5nXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGV4dGFic3RhbmRcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJaZWlsZW5oXHUwMEY2aGVcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJMZWlud2FuZC1IaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlp1clx1MDBGQ2Nrc2V0emVuXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiU2NobGllXHUwMERGZW5cIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJXZXJremV1Z2xlaXN0ZSBhbnplaWdlblwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIldlcmt6ZXVnbGVpc3RlIEFic3RhbmRcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiT2JlblwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJSZWNodHNcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiVW50ZW5cIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiTGlua3NcIixcclxuICAgIFwic20udGJQb3NcIjogXCJXZXJremV1Z2xlaXN0ZSBQb3NpdGlvblwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIk9iZW5cIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJVbnRlblwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiV2Vya3pldWdsZWlzdGUgSGludGVyZ3J1bmRcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlNjaGFsdGZsXHUwMEU0Y2hlIEhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiU2NoYWx0ZmxcdTAwRTRjaGUgUmFobWVuc3RpbFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiU2NoYWx0ZmxcdTAwRTRjaGUgUmFobWVuZmFyYmVcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiU2NoYWx0ZmxcdTAwRTRjaGUgVGV4dGZhcmJlXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiV2Vya3pldWdsZWlzdGUgenVyXHUwMEZDY2tzZXR6ZW5cIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggS25vdGVuc3RpbFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJMaW5pZW5mYXJiZVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMaW5pZW5icmVpdGVcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJBbnBhc3N1bmcgenVyXHUwMEZDY2tzZXR6ZW5cIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiRWNrZW5yYWRpdXNcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiS25vdGVuIHN1Y2hlbi4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIld1cnplbFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk5ldWUgV3VyemVsXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIktpbmRcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIEVpbnN0ZWxsdW5nZW5cIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJTcHJhY2hlXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIk9iZXJmbFx1MDBFNGNoZW5zcHJhY2hlXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRoZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJGYXJidGhlbWFcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiSGVsbFwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIkR1bmtlbFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIldlcmt6ZXVnbGVpc3RlIGFuemVpZ2VuXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIldlcmt6ZXVnbGVpc3RlIGFuemVpZ2VuXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIkxlaW53YW5kLUhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJIaW50ZXJncnVuZGZhcmJlXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1MDBEQ2JlclwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpb25cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkF1dG9yXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJGdW5rdGlvbnNyZWljaGUgT3Blbi1Tb3VyY2UtTWluZG1hcC1BcHAgZlx1MDBGQ3IgT2JzaWRpYW4gbWl0IGJlbnV0emVyZGVmaW5pZXJ0ZW4gU3RpbGVuLCBSZWdlbmJvZ2VuLVZlcmJpbmR1bmdlbiwgTWVocmZhY2hhdXN3YWhsLCBEcmFnICYgRHJvcCB1bmQgTWFya2Rvd24tSW1wb3J0L0V4cG9ydC5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJBa3R1YWxpc2llcnRcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1Yi1SZXBvc2l0b3J5XCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJPcGVuLVNvdXJjZS1BdXRvciB1bnRlcnN0XHUwMEZDdHplblwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlRhc3RlbmtvbWJpbmF0aW9uZW5cIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiVGFzdGVua29tYmluYXRpb25lbiBhbnBhc3NlblwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJLbm90ZW4gYmVhcmJlaXRlblwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJHZXNjaHdpc3RlciBoaW56dWZcdTAwRkNnZW5cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIktpbmQgaGluenVmXHUwMEZDZ2VuXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJLbm90ZW4gZm9rdXNzaWVyZW5cIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiUlx1MDBGQ2NrZ1x1MDBFNG5naWdcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiV2llZGVyaG9sZW5cIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJaZWlsZW51bWJydWNoIChiZWltIEJlYXJiZWl0ZW4pXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkxlaW53YW5kIHppZWhlblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlZlcmdyXHUwMEY2XHUwMERGZXJuXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlZlcmtsZWluZXJuXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiWm9vbSB6dXJcdTAwRkNja3NldHplblwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiTmFjaCBvYmVuXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIk5hY2ggdW50ZW5cIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiTmFjaCBsaW5rc1wiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmFjaCByZWNodHNcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlRhc3RlIGRyXHUwMEZDY2tlbi4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiU2Nyb2xsZW4gdW5kIFpvb21lblwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIlZlcnRpa2FsZXMgU2Nyb2xsZW4gdW1rZWhyZW5cIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJIb3Jpem9udGFsZXMgU2Nyb2xsZW4gdW1rZWhyZW5cIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJab29tLVJpY2h0dW5nIHVta2VocmVuXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJCZWkgRXJzdGVsbHVuZyBiZWFyYmVpdGVuXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiQmVhcmJlaXR1bmdzbW9kdXMgYmVpbSBFcnN0ZWxsZW4gbmV1ZXIgS25vdGVuXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIld1cnplbGtub3Rlbm5hbWVcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmFtZSBmXHUwMEZDciBuZXVlIFd1cnplbG5cIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIktpbmRrbm90ZW5uYW1lXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYW1lIGZcdTAwRkNyIG5ldWUgS2luZGVyXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiVGlwcGVuIHp1bSBCZWFyYmVpdGVuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIkJlaSBBdXN3YWhsIGRpcmVrdCBiZWFyYmVpdGVuXCIsXHJcbn07XHJcblxyXG5jb25zdCBfZXM6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUmFcdTAwRUR6XCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgRGVzaGFjZXJcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBSZWhhY2VyXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBNYXBhXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsb1wiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkVuZm9jYXJcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiQnVzY2FyXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6QnVzY2FyIHwgRXNwYWNpbzpFZGl0YXIgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOdWV2YSByYVx1MDBFRHpcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTW9kbyBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlBhbmVsIGRlIGVzdGlsb1wiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkVuZm9jYXIgbm9kb1wiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJCdXNjYXIgbm9kb3NcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJBanVzdGVzXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIkFjZXJjYXJcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIkFsZWphclwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBQZXJzb25hbGl6YWRvXCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBCb3JyYXIgZW4gbG90ZVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEVkaXRhciBlc3RpbG9cIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTnVldmEgcmFcdTAwRUR6XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IERlc2hhY2VyXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFJlaGFjZXJcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsbyBnbG9iYWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgRWRpdGFyXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG9cIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgQ29waWFyXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgQ29ydGFyXCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBQZWdhclwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgSGlqb1wiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IEhpam8gaXpxdWllcmRvXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEhlcm1hbm9cIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBFbGltaW5hclwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJPY3VsdGFyIGJhcnJhXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsbyBnbG9iYWxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJOb2RvIGhpam9cIixcclxuICAgIFwic20ucm9vdFwiOiBcIk5vZG8gcmFcdTAwRUR6XCIsXHJcbiAgICBcInNtLmJnXCI6IFwiRm9uZG9cIixcclxuICAgIFwic20udGV4dFwiOiBcIkNvbG9yIGRlIHRleHRvXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiVGFtYVx1MDBGMW9cIixcclxuICAgIFwic20uZm9udFwiOiBcIkZ1ZW50ZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIkVzdGlsbyBib3JkZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkNvbG9yIGJvcmRlXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiQW5jaG8gYm9yZGVcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiUmFkaW8gYm9yZGVcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJBbmNobyBtXHUwMEVEbi5cIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiQWx0byBtXHUwMEVEbi5cIixcclxuICAgIFwic20uY29ublwiOiBcIkNvbmV4aVx1MDBGM25cIixcclxuICAgIFwic20udHlwZVwiOiBcIlRpcG9cIixcclxuICAgIFwic20uY29sb3JcIjogXCJDb2xvclwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkFuY2hvXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMb25naXR1ZFwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IEFyY29cdTAwRURyaXNcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIkRpcmVjY2lcdTAwRjNuXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiRXNwYWNpbyBlbnRyZSBoZXJtYW5vc1wiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIkRlcmVjaGFcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIkl6cXVpZXJkYVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiQW1ib3NcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldGFcIixcclxuICAgIFwic20uc2VsXCI6IFwiU2VsZWNjaVx1MDBGM25cIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJDb2xvciBzZWxlY2NpXHUwMEYzblwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIkFuY2hvIHNlbGVjY2lcdTAwRjNuXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIkRlc3BsYXphbWllbnRvIGNvbnRvcm5vXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiQ29sb3IgY29udG9ybm8gZWRpY2lcdTAwRjNuXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJBbmNobyBjb250b3JubyBlZGljaVx1MDBGM25cIixcclxuICAgIFwic20uYm94U2VsQ29sb3JcIjogXCJDb2xvciBkZSBzZWxlY2NpXHUwMEYzblwiLFxyXG4gICAgXCJvdXRsaW5lLnRpdGxlXCI6IFwiRXNxdWVtYVwiLFxyXG4gICAgXCJvdXRsaW5lLmVtcHR5XCI6IFwiTm8gaGF5IG1hcGEgYWJpZXJ0b1wiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJBbGluZWFjaVx1MDBGM25cIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJSZWxsZW5vIHRleHRvXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiQWx0dXJhIGxcdTAwRURuZWFcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJGb25kbyBsaWVuem9cIixcclxuICAgIFwic20ucmVzZXRcIjogXCJSZXN0YWJsZWNlclwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIkNlcnJhclwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIk1vc3RyYXIgYmFycmFcIixcclxuICAgIFwic20udGJQYWRcIjogXCJSZWxsZW5vIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIkFycmliYVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJEZXJlY2hhXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkFiYWpvXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIkl6cXVpZXJkYVwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlBvc2ljaVx1MDBGM24gYmFycmFcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJBcnJpYmFcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJBYmFqb1wiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiRm9uZG8gYmFycmFcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIkZvbmRvIGJvdFx1MDBGM25cIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJFc3RpbG8gYm9yZGUgYm90XHUwMEYzblwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiQ29sb3IgYm9yZGUgYm90XHUwMEYzblwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJDb2xvciB0ZXh0byBib3RcdTAwRjNuXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUmVzdGFibGVjZXIgYmFycmFcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvIG5vZG9cIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiQ29sb3IgbFx1MDBFRG5lYVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJBbmNobyBsXHUwMEVEbmVhXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiQm9ycmFyIHBlcnNvbmFsaXphY2lcdTAwRjNuXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlJhZGlvIGJvcmRlXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIkJ1c2NhciBub2Rvcy4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJhXHUwMEVEelwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk51ZXZhIHJhXHUwMEVEelwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJIaWpvXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIkFqdXN0ZXMgTWluZFpKXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiSWRpb21hXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIklkaW9tYSBpbnRlcmZhelwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJUZW1hIGRlIGNvbG9yXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkNsYXJvXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiT3NjdXJvXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiTW9zdHJhciBiYXJyYVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJNb3N0cmFyIGJhcnJhXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIkZvbmRvIGxpZW56b1wiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQ29sb3IgZGUgZm9uZG9cIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiQWNlcmNhIGRlXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lcdTAwRjNuXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRvclwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiQXBsaWNhY2lcdTAwRjNuIGRlIG1hcGEgbWVudGFsIGRlIGNcdTAwRjNkaWdvIGFiaWVydG8gcGFyYSBPYnNpZGlhbiBjb24gZXN0aWxvcyBwZXJzb25hbGl6YWRvcywgY29uZXhpb25lcyBhcmNvXHUwMEVEcmlzLCBtdWx0aS1zZWxlY2NpXHUwMEYzbiwgYXJyYXN0cmFyIHkgc29sdGFyIGUgaW1wb3J0YWNpXHUwMEYzbi9leHBvcnRhY2lcdTAwRjNuIE1hcmtkb3duLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIkFjdHVhbGl6YWRvXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJSZXBvc2l0b3JpbyBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIkFwb3lhciBhbCBhdXRvciBvcGVuIHNvdXJjZVwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIkF0YWpvcyBkZSB0ZWNsYWRvXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlBlcnNvbmFsaXphciBhdGFqb3NcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiRWRpdGFyIG5vZG9cIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiQVx1MDBGMWFkaXIgaGVybWFub1wiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiQVx1MDBGMWFkaXIgaGlqb1wiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiRW5mb2NhciBub2RvXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIkRlc2hhY2VyXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlJlaGFjZXJcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJTYWx0byBkZSBsXHUwMEVEbmVhIChlbiBlZGljaVx1MDBGM24pXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkFycmFzdHJhciBsaWVuem9cIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJBY2VyY2FyXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIkFsZWphclwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlJlc3RhYmxlY2VyIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIkFycmliYVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJBYmFqb1wiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJJenF1aWVyZGFcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIkRlcmVjaGFcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlB1bHNlLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJEZXNwbGF6YW1pZW50byB5IHpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnRpciBkZXNwbGF6YW1pZW50byBWXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJ0aXIgZGVzcGxhemFtaWVudG8gSFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGlyIHpvb21cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIkVkaXRhciBhbCBjcmVhclwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIk1vZG8gZWRpY2lcdTAwRjNuIGFsIGNyZWFyIG5vZG9zXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIk5vbWJyZSByYVx1MDBFRHpcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIk5vbWJyZSBwb3IgZGVmZWN0byBkZSByYVx1MDBFRGNlc1wiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiTm9tYnJlIGhpam9cIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJOb21icmUgcG9yIGRlZmVjdG8gZGUgaGlqb3NcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJUZWNsZWFyIHBhcmEgZWRpdGFyXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIkVkaXRhciBhbCB0ZWNsZWFyIGNvbiBub2RvIHNlbGVjY2lvbmFkb1wiLFxyXG59O1xyXG5cclxuY29uc3QgX3J1OiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFx1MDQxQVx1MDQzRVx1MDQ0MFx1MDQzNVx1MDQzRFx1MDQ0Q1wiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFx1MDQxRVx1MDQ0Mlx1MDQzQ1x1MDQzNVx1MDQzRFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFx1MDQxRlx1MDQzRVx1MDQzMlx1MDQ0Mlx1MDQzRVx1MDQ0MFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgXHUwNDFBXHUwNDMwXHUwNDQwXHUwNDQyXHUwNDMwXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDQyMVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzQVx1MDQ0M1x1MDQ0MVwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJcdTA0MUZcdTA0M0VcdTA0MzhcdTA0NDFcdTA0M0FcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpcdTA0MUZcdTA0M0VcdTA0MzhcdTA0NDFcdTA0M0EgfCBcdTA0MUZcdTA0NDBcdTA0M0VcdTA0MzFcdTA0MzVcdTA0M0I6XHUwNDIwXHUwNDM1XHUwNDM0LiB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1MDQxRFx1MDQzRVx1MDQzMlx1MDQ0Qlx1MDQzOSBcdTA0M0FcdTA0M0VcdTA0NDBcdTA0MzVcdTA0M0RcdTA0NENcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiXHUwNDIwXHUwNDM1XHUwNDM2XHUwNDM4XHUwNDNDIE1hcmtkb3duXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHUwNDFGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDRDIFx1MDQ0MVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQzNVx1MDQzOVwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzQVx1MDQ0M1x1MDQ0MSBcdTA0M0RcdTA0MzAgXHUwNDQzXHUwNDM3XHUwNDNCXHUwNDM1XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1MDQxRlx1MDQzRVx1MDQzOFx1MDQ0MVx1MDQzQSBcdTA0NDNcdTA0MzdcdTA0M0JcdTA0M0VcdTA0MzJcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJcdTA0MURcdTA0MzBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzlcdTA0M0FcdTA0MzhcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiXHUwNDIzXHUwNDMyXHUwNDM1XHUwNDNCXHUwNDM4XHUwNDQ3XHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJcdTA0MjNcdTA0M0NcdTA0MzVcdTA0M0RcdTA0NENcdTA0NDhcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgXHUwNDIxXHUwNDMyXHUwNDNFXHUwNDM5XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTA0MjNcdTA0MzRcdTA0MzBcdTA0M0JcdTA0MzhcdTA0NDJcdTA0NEMgXHUwNDMyXHUwNDQxXHUwNDUxXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNDIxXHUwNDQyXHUwNDM4XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFx1MDQxRFx1MDQzRVx1MDQzMlx1MDQ0Qlx1MDQzOSBcdTA0M0FcdTA0M0VcdTA0NDBcdTA0MzVcdTA0M0RcdTA0NENcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHUwNDFFXHUwNDQyXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFx1MDQxRlx1MDQzRVx1MDQzMlx1MDQ0Mlx1MDQzRVx1MDQ0MFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNDEzXHUwNDNCXHUwNDNFXHUwNDMxXHUwNDMwXHUwNDNCXHUwNDRDXHUwNDNEXHUwNDRCXHUwNDM5IFx1MDQ0MVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBcdTA0MjBcdTA0MzVcdTA0MzRcdTA0MzBcdTA0M0FcdTA0NDJcdTA0MzhcdTA0NDBcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NDJcdTA0NENcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDQyMVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBcdTA0MUFcdTA0M0VcdTA0M0ZcdTA0MzhcdTA0NDBcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NDJcdTA0NENcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBcdTA0MTJcdTA0NEJcdTA0NDBcdTA0MzVcdTA0MzdcdTA0MzBcdTA0NDJcdTA0NENcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFx1MDQxMlx1MDQ0MVx1MDQ0Mlx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgXHUwNDE0XHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQwXHUwNDNEXHUwNDM4XHUwNDM5XCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgXHUwNDFCXHUwNDM1XHUwNDMyXHUwNDRCXHUwNDM5IFx1MDQzNFx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0MFx1MDQzRFx1MDQzOFx1MDQzOVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdTA0MjFcdTA0M0VcdTA0NDFcdTA0MzVcdTA0MzRcdTA0M0RcdTA0MzhcdTA0MzlcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTA0MjNcdTA0MzRcdTA0MzBcdTA0M0JcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHUwNDIxXHUwNDNBXHUwNDQwXHUwNDRCXHUwNDQyXHUwNDRDIFx1MDQzRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA0MTNcdTA0M0JcdTA0M0VcdTA0MzFcdTA0MzBcdTA0M0JcdTA0NENcdTA0M0RcdTA0NEJcdTA0MzkgXHUwNDQxXHUwNDQyXHUwNDM4XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHUwNDE0XHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQwXHUwNDNEXHUwNDM4XHUwNDM5IFx1MDQ0M1x1MDQzN1x1MDQzNVx1MDQzQlwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHUwNDFBXHUwNDNFXHUwNDQwXHUwNDNEXHUwNDM1XHUwNDMyXHUwNDNFXHUwNDM5IFx1MDQ0M1x1MDQzN1x1MDQzNVx1MDQzQlwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzRFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQ0Mlx1MDQzNVx1MDQzQVx1MDQ0MVx1MDQ0Mlx1MDQzMFwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1MDQyMFx1MDQzMFx1MDQzN1x1MDQzQ1x1MDQzNVx1MDQ0MCBcdTA0NDhcdTA0NDBcdTA0MzhcdTA0NDRcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1MDQyOFx1MDQ0MFx1MDQzOFx1MDQ0NFx1MDQ0MlwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1MDQyMVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0QyBcdTA0NDBcdTA0MzBcdTA0M0NcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdTA0MjZcdTA0MzJcdTA0MzVcdTA0NDIgXHUwNDQwXHUwNDMwXHUwNDNDXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHUwNDI4XHUwNDM4XHUwNDQwXHUwNDM4XHUwNDNEXHUwNDMwIFx1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTA0MjBcdTA0MzBcdTA0MzRcdTA0MzhcdTA0NDNcdTA0NDFcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJcdTA0MUNcdTA0MzhcdTA0M0QuIFx1MDQ0OFx1MDQzOFx1MDQ0MFx1MDQzOFx1MDQzRFx1MDQzMFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJcdTA0MUNcdTA0MzhcdTA0M0QuIFx1MDQzMlx1MDQ0Qlx1MDQ0MVx1MDQzRVx1MDQ0Mlx1MDQzMFwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiXHUwNDIxXHUwNDNFXHUwNDM1XHUwNDM0XHUwNDM4XHUwNDNEXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM1XCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJcdTA0MjJcdTA0MzhcdTA0M0ZcIixcclxuICAgIFwic20uY29sb3JcIjogXCJcdTA0MjZcdTA0MzJcdTA0MzVcdTA0NDJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJcdTA0MjhcdTA0MzhcdTA0NDBcdTA0MzhcdTA0M0RcdTA0MzBcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIlx1MDQxNFx1MDQzQlx1MDQzOFx1MDQzRFx1MDQzMFwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFx1MDQyMFx1MDQzMFx1MDQzNFx1MDQ0M1x1MDQzM1x1MDQzMFwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiXHUwNDFEXHUwNDMwXHUwNDNGXHUwNDQwXHUwNDMwXHUwNDMyXHUwNDNCXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM1XCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiXHUwNDFFXHUwNDQyXHUwNDQxXHUwNDQyXHUwNDQzXHUwNDNGIFx1MDQzQ1x1MDQzNVx1MDQzNlx1MDQzNFx1MDQ0MyBcdTA0NDNcdTA0MzdcdTA0M0JcdTA0MzBcdTA0M0NcdTA0MzhcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdTA0MTJcdTA0M0ZcdTA0NDBcdTA0MzBcdTA0MzJcdTA0M0VcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1MDQxMlx1MDQzQlx1MDQzNVx1MDQzMlx1MDQzRVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHUwNDFFXHUwNDMxXHUwNDMwXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHUwNDFGXHUwNDMwXHUwNDNCXHUwNDM4XHUwNDQyXHUwNDQwXHUwNDMwXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlx1MDQxMlx1MDQ0Qlx1MDQzNFx1MDQzNVx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNVwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0MzJcdTA0NEJcdTA0MzRcdTA0MzVcdTA0M0JcdTA0MzVcdTA0M0RcdTA0MzhcdTA0NEZcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJcdTA0MjhcdTA0MzhcdTA0NDBcdTA0MzhcdTA0M0RcdTA0MzAgXHUwNDMyXHUwNDRCXHUwNDM0XHUwNDM1XHUwNDNCXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDRGXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1MDQyMVx1MDQzQ1x1MDQzNVx1MDQ0OVx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNSBcdTA0M0FcdTA0M0VcdTA0M0RcdTA0NDJcdTA0NDNcdTA0NDBcdTA0MzBcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJcdTA0MjZcdTA0MzJcdTA0MzVcdTA0NDIgXHUwNDNBXHUwNDNFXHUwNDNEXHUwNDQyXHUwNDQzXHUwNDQwXHUwNDMwIFx1MDQ0MFx1MDQzNVx1MDQzNC5cIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1MDQyOFx1MDQzOFx1MDQ0MFx1MDQzOFx1MDQzRFx1MDQzMCBcdTA0M0FcdTA0M0VcdTA0M0RcdTA0NDJcdTA0NDNcdTA0NDBcdTA0MzAgXHUwNDQwXHUwNDM1XHUwNDM0LlwiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0NDBcdTA0MzBcdTA0M0NcdTA0M0FcdTA0MzggXHUwNDMyXHUwNDRCXHUwNDM0XHUwNDM1XHUwNDNCXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDRGXCIsXHJcbiAgICBcIm91dGxpbmUudGl0bGVcIjogXCJcdTA0MjFcdTA0NDJcdTA0NDBcdTA0NDNcdTA0M0FcdTA0NDJcdTA0NDNcdTA0NDBcdTA0MzBcIixcclxuICAgIFwib3V0bGluZS5lbXB0eVwiOiBcIlx1MDQxRFx1MDQzNVx1MDQ0MiBcdTA0M0VcdTA0NDJcdTA0M0FcdTA0NDBcdTA0NEJcdTA0NDJcdTA0M0VcdTA0MzkgXHUwNDNBXHUwNDMwXHUwNDQwXHUwNDQyXHUwNDRCXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1MDQxMlx1MDQ0Qlx1MDQ0MFx1MDQzMFx1MDQzMlx1MDQzRFx1MDQzOFx1MDQzMlx1MDQzMFx1MDQzRFx1MDQzOFx1MDQzNVwiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1MDQxRVx1MDQ0Mlx1MDQ0MVx1MDQ0Mlx1MDQ0M1x1MDQzRiBcdTA0NDJcdTA0MzVcdTA0M0FcdTA0NDFcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJcdTA0MTJcdTA0NEJcdTA0NDFcdTA0M0VcdTA0NDJcdTA0MzAgXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHUwNDI0XHUwNDNFXHUwNDNEIFx1MDQ0NVx1MDQzRVx1MDQzQlx1MDQ0MVx1MDQ0Mlx1MDQzMFwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1MDQyMVx1MDQzMVx1MDQ0MFx1MDQzRVx1MDQ0MVx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlx1MDQxN1x1MDQzMFx1MDQzQVx1MDQ0MFx1MDQ0Qlx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlx1MDQxRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQ0QyBcdTA0MzhcdTA0M0RcdTA0NDFcdTA0NDJcdTA0NDBcdTA0NDNcdTA0M0NcdTA0MzVcdTA0M0RcdTA0NDJcdTA0M0VcdTA0MzJcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdTA0MUVcdTA0NDJcdTA0NDFcdTA0NDJcdTA0NDNcdTA0M0YgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDM4XCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1MDQyMVx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0NVx1MDQ0M1wiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTA0MjFcdTA0M0ZcdTA0NDBcdTA0MzBcdTA0MzJcdTA0MzBcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHUwNDIxXHUwNDNEXHUwNDM4XHUwNDM3XHUwNDQzXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1MDQyMVx1MDQzQlx1MDQzNVx1MDQzMlx1MDQzMFwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MDQxRlx1MDQzRVx1MDQzN1x1MDQzOFx1MDQ0Nlx1MDQzOFx1MDQ0RiBcdTA0M0ZcdTA0MzBcdTA0M0RcdTA0MzVcdTA0M0JcdTA0MzhcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTA0MjFcdTA0MzJcdTA0MzVcdTA0NDBcdTA0NDVcdTA0NDNcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTA0MjFcdTA0M0RcdTA0MzhcdTA0MzdcdTA0NDNcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzRCBcdTA0M0ZcdTA0MzBcdTA0M0RcdTA0MzVcdTA0M0JcdTA0MzhcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzRCBcdTA0M0FcdTA0M0RcdTA0M0VcdTA0M0ZcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTA0MjFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NEMgXHUwNDQwXHUwNDMwXHUwNDNDXHUwNDNBXHUwNDM4IFx1MDQzQVx1MDQzRFx1MDQzRVx1MDQzRlx1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzQVx1MDQzOCBcdTA0M0FcdTA0M0RcdTA0M0VcdTA0M0ZcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQ0Mlx1MDQzNVx1MDQzQVx1MDQ0MVx1MDQ0Mlx1MDQzMCBcdTA0M0FcdTA0M0RcdTA0M0VcdTA0M0ZcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTA0MjFcdTA0MzFcdTA0NDBcdTA0M0VcdTA0NDFcdTA0MzhcdTA0NDJcdTA0NEMgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDQyMVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0QyBcdTA0NDNcdTA0MzdcdTA0M0JcdTA0MzBcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQzQlx1MDQzOFx1MDQzRFx1MDQzOFx1MDQzOFwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdTA0MjhcdTA0MzhcdTA0NDBcdTA0MzhcdTA0M0RcdTA0MzAgXHUwNDNCXHUwNDM4XHUwNDNEXHUwNDM4XHUwNDM4XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHUwNDIxXHUwNDMxXHUwNDQwXHUwNDNFXHUwNDQxXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzRFx1MDQzMFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzRVx1MDQzOVx1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJcdTA0MjBcdTA0MzBcdTA0MzRcdTA0MzhcdTA0NDNcdTA0NDFcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiXHUwNDFGXHUwNDNFXHUwNDM4XHUwNDQxXHUwNDNBIFx1MDQ0M1x1MDQzN1x1MDQzQlx1MDQzRVx1MDQzMi4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MDQxQVx1MDQzRVx1MDQ0MFx1MDQzNVx1MDQzRFx1MDQ0Q1wiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1MDQxRFx1MDQzRVx1MDQzMlx1MDQ0Qlx1MDQzOSBcdTA0M0FcdTA0M0VcdTA0NDBcdTA0MzVcdTA0M0RcdTA0NENcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHUwNDE0XHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQwXHUwNDNEXHUwNDM4XHUwNDM5XCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIlx1MDQxRFx1MDQzMFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzRVx1MDQzOVx1MDQzQVx1MDQzOCBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdTA0MkZcdTA0MzdcdTA0NEJcdTA0M0FcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHUwNDJGXHUwNDM3XHUwNDRCXHUwNDNBIFx1MDQzOFx1MDQzRFx1MDQ0Mlx1MDQzNVx1MDQ0MFx1MDQ0NFx1MDQzNVx1MDQzOVx1MDQ0MVx1MDQzMFwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdTA0MjJcdTA0MzVcdTA0M0NcdTA0MzBcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0Mlx1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0RiBcdTA0NDJcdTA0MzVcdTA0M0NcdTA0MzBcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiXHUwNDIxXHUwNDMyXHUwNDM1XHUwNDQyXHUwNDNCXHUwNDMwXHUwNDRGXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiXHUwNDIyXHUwNDUxXHUwNDNDXHUwNDNEXHUwNDMwXHUwNDRGXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiXHUwNDFGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDRDIFx1MDQzOFx1MDQzRFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQ0M1x1MDQzQ1x1MDQzNVx1MDQzRFx1MDQ0Mlx1MDQzRVx1MDQzMlwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJcdTA0MUZcdTA0M0VcdTA0M0FcdTA0MzBcdTA0MzdcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDRDXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzRCBcdTA0NDVcdTA0M0VcdTA0M0JcdTA0NDFcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0NDRcdTA0M0VcdTA0M0RcdTA0MzBcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiXHUwNDFFIFx1MDQzRlx1MDQ0MFx1MDQzRVx1MDQzM1x1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzQ1x1MDQzNVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1MDQxMlx1MDQzNVx1MDQ0MFx1MDQ0MVx1MDQzOFx1MDQ0RlwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHUwNDEwXHUwNDMyXHUwNDQyXHUwNDNFXHUwNDQwXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJcdTA0MUZcdTA0NDBcdTA0MzhcdTA0M0JcdTA0M0VcdTA0MzZcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzUgXHUwNDM0XHUwNDNCXHUwNDRGIFx1MDQzOFx1MDQzRFx1MDQ0Mlx1MDQzNVx1MDQzQlx1MDQzQlx1MDQzNVx1MDQzQVx1MDQ0Mi1cdTA0M0FcdTA0MzBcdTA0NDBcdTA0NDIgXHUwNDQxIFx1MDQzRVx1MDQ0Mlx1MDQzQVx1MDQ0MFx1MDQ0Qlx1MDQ0Mlx1MDQ0Qlx1MDQzQyBcdTA0M0FcdTA0M0VcdTA0MzRcdTA0M0VcdTA0M0MgXHUwNDM0XHUwNDNCXHUwNDRGIE9ic2lkaWFuOiBcdTA0NDFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0MzgsIFx1MDQ0MFx1MDQzMFx1MDQzNFx1MDQ0M1x1MDQzNlx1MDQzRFx1MDQ0Qlx1MDQzNSBcdTA0NDFcdTA0M0VcdTA0MzVcdTA0MzRcdTA0MzhcdTA0M0RcdTA0MzVcdTA0M0RcdTA0MzhcdTA0NEYsIFx1MDQzQ1x1MDQzRFx1MDQzRVx1MDQzNlx1MDQzNVx1MDQ0MVx1MDQ0Mlx1MDQzMlx1MDQzNVx1MDQzRFx1MDQzRFx1MDQ0Qlx1MDQzOSBcdTA0MzJcdTA0NEJcdTA0MzFcdTA0M0VcdTA0NDAsIFx1MDQzRlx1MDQzNVx1MDQ0MFx1MDQzNVx1MDQ0Mlx1MDQzMFx1MDQ0MVx1MDQzQVx1MDQzOFx1MDQzMlx1MDQzMFx1MDQzRFx1MDQzOFx1MDQzNSBcdTA0MzggTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHUwNDFFXHUwNDMxXHUwNDNEXHUwNDNFXHUwNDMyXHUwNDNCXHUwNDM1XHUwNDNEXHUwNDNFXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJcdTA0MjBcdTA0MzVcdTA0M0ZcdTA0M0VcdTA0MzdcdTA0MzhcdTA0NDJcdTA0M0VcdTA0NDBcdTA0MzhcdTA0MzkgR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdTA0MUZcdTA0M0VcdTA0MzRcdTA0MzRcdTA0MzVcdTA0NDBcdTA0MzZcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDMwXHUwNDMyXHUwNDQyXHUwNDNFXHUwNDQwXHUwNDMwXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiXHUwNDIxXHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQyXHUwNDMwXHUwNDNEXHUwNDM4XHUwNDRGIFx1MDQzQVx1MDQzQlx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0OFwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJcdTA0MURcdTA0MzBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzhcdTA0NDJcdTA0NEMgXHUwNDNBXHUwNDNCXHUwNDMwXHUwNDMyXHUwNDM4XHUwNDQ4XHUwNDM4XCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1MDQyMFx1MDQzNVx1MDQzNFx1MDQzMFx1MDQzQVx1MDQ0Mlx1MDQzOFx1MDQ0MFx1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0Mlx1MDQ0QyBcdTA0NDNcdTA0MzdcdTA0MzVcdTA0M0JcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHUwNDE0XHUwNDNFXHUwNDMxXHUwNDMwXHUwNDMyXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQ0MVx1MDQzRVx1MDQ0MVx1MDQzNVx1MDQzNFx1MDQzRFx1MDQzOFx1MDQzOVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHUwNDE0XHUwNDNFXHUwNDMxXHUwNDMwXHUwNDMyXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzNFx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0MFx1MDQzRFx1MDQzOFx1MDQzOVwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiXHUwNDI0XHUwNDNFXHUwNDNBXHUwNDQzXHUwNDQxIFx1MDQzRFx1MDQzMCBcdTA0NDNcdTA0MzdcdTA0M0JcdTA0MzVcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHUwNDFFXHUwNDQyXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1MDQxRlx1MDQzRVx1MDQzMlx1MDQ0Mlx1MDQzRVx1MDQ0MFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1MDQxRlx1MDQzNVx1MDQ0MFx1MDQzNVx1MDQzRFx1MDQzRVx1MDQ0MSBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0M0FcdTA0MzggKFx1MDQ0MFx1MDQzNVx1MDQzNC4pXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlx1MDQxRlx1MDQzNVx1MDQ0MFx1MDQzNVx1MDQzQ1x1MDQzNVx1MDQ0OVx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNSBcdTA0NDVcdTA0M0VcdTA0M0JcdTA0NDFcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTA0MjNcdTA0MzJcdTA0MzVcdTA0M0JcdTA0MzhcdTA0NDdcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHUwNDIzXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDRDXHUwNDQ4XHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUwNDIxXHUwNDMxXHUwNDQwXHUwNDNFXHUwNDQxXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzQ1x1MDQzMFx1MDQ0MVx1MDQ0OFx1MDQ0Mlx1MDQzMFx1MDQzMVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHUwNDEyXHUwNDMyXHUwNDM1XHUwNDQwXHUwNDQ1XCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIlx1MDQxMlx1MDQzRFx1MDQzOFx1MDQzN1wiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJcdTA0MTJcdTA0M0JcdTA0MzVcdTA0MzJcdTA0M0VcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1MDQxMlx1MDQzRlx1MDQ0MFx1MDQzMFx1MDQzMlx1MDQzRVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiXHUwNDFEXHUwNDMwXHUwNDM2XHUwNDNDXHUwNDM4XHUwNDQyXHUwNDM1IFx1MDQzQVx1MDQzQlx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0OFx1MDQ0My4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiXHUwNDFGXHUwNDQwXHUwNDNFXHUwNDNBXHUwNDQwXHUwNDQzXHUwNDQyXHUwNDNBXHUwNDMwIFx1MDQzOCBcdTA0M0NcdTA0MzBcdTA0NDFcdTA0NDhcdTA0NDJcdTA0MzBcdTA0MzFcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdTA0MThcdTA0M0RcdTA0MzJcdTA0MzVcdTA0NDBcdTA0NDIuIFx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0Mi4gXHUwNDNGXHUwNDQwXHUwNDNFXHUwNDNBXHUwNDQwXHUwNDQzXHUwNDQyXHUwNDNBXHUwNDQzXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiXHUwNDE4XHUwNDNEXHUwNDMyXHUwNDM1XHUwNDQwXHUwNDQyLiBcdTA0MzNcdTA0M0VcdTA0NDBcdTA0MzhcdTA0MzcuIFx1MDQzRlx1MDQ0MFx1MDQzRVx1MDQzQVx1MDQ0MFx1MDQ0M1x1MDQ0Mlx1MDQzQVx1MDQ0M1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MDQxOFx1MDQzRFx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0Mi4gXHUwNDNDXHUwNDMwXHUwNDQxXHUwNDQ4XHUwNDQyXHUwNDMwXHUwNDMxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTA0MjBcdTA0MzVcdTA0MzQuIFx1MDQzRlx1MDQ0MFx1MDQzOCBcdTA0NDFcdTA0M0VcdTA0MzdcdTA0MzRcdTA0MzBcdTA0M0RcdTA0MzhcdTA0MzhcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJcdTA0MjBcdTA0MzVcdTA0MzZcdTA0MzhcdTA0M0MgXHUwNDQwXHUwNDM1XHUwNDM0LiBcdTA0M0ZcdTA0NDBcdTA0MzggXHUwNDQxXHUwNDNFXHUwNDM3XHUwNDM0XHUwNDMwXHUwNDNEXHUwNDM4XHUwNDM4XCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlx1MDQxOFx1MDQzQ1x1MDQ0RiBcdTA0M0FcdTA0M0VcdTA0NDBcdTA0M0RcdTA0NEZcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlx1MDQxOFx1MDQzQ1x1MDQ0RiBcdTA0M0ZcdTA0M0UgXHUwNDQzXHUwNDNDXHUwNDNFXHUwNDNCXHUwNDQ3XHUwNDMwXHUwNDNEXHUwNDM4XHUwNDRFIFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0M0FcdTA0M0VcdTA0NDBcdTA0M0RcdTA0MzVcdTA0MzlcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIlx1MDQxOFx1MDQzQ1x1MDQ0RiBcdTA0MzRcdTA0M0VcdTA0NDdcdTA0MzVcdTA0NDBcdTA0M0RcdTA0MzVcdTA0MzNcdTA0M0VcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJcdTA0MThcdTA0M0NcdTA0NEYgXHUwNDNGXHUwNDNFIFx1MDQ0M1x1MDQzQ1x1MDQzRVx1MDQzQlx1MDQ0N1x1MDQzMFx1MDQzRFx1MDQzOFx1MDQ0RSBcdTA0MzRcdTA0M0JcdTA0NEYgXHUwNDM0XHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQwXHUwNDNEXHUwNDM4XHUwNDQ1XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHUwNDFGXHUwNDM1XHUwNDQ3XHUwNDMwXHUwNDQyXHUwNDMwXHUwNDQyXHUwNDRDIFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0NDBcdTA0MzVcdTA0MzQuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlx1MDQyMFx1MDQzNVx1MDQzNFx1MDQzMFx1MDQzQVx1MDQ0Mlx1MDQzOFx1MDQ0MFx1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0Mlx1MDQ0QyBcdTA0M0ZcdTA0NDBcdTA0MzggXHUwNDNEXHUwNDMwXHUwNDM2XHUwNDMwXHUwNDQyXHUwNDM4XHUwNDM4IFx1MDQzQVx1MDQzQlx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0OFwiLFxyXG59O1xyXG5cclxuY29uc3QgX3N2OiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJvdFwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFx1MDBDNW5ncmFcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBHXHUwMEY2ciBvbVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgS2FydGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZva3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlNcdTAwRjZrXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6U1x1MDBGNmsgfCBNZWxsYW5zbGFnOlJlZGlnZXJhIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTnkgcm90XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duLWxcdTAwRTRnZVwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlN0aWxwYW5lbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZva3VzZXJhIG5vZFwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJTXHUwMEY2ayBub2RlclwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIkluc3RcdTAwRTRsbG5pbmdhclwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJab29tYSBpblwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiWm9vbWEgdXRcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgQW5wYXNzYWRcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFJhZGVyYSBhbGxhXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggUmVkaWdlcmEgc3RpbFwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOeSByb3RcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHUwMEM1bmdyYVwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBHXHUwMEY2ciBvbVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIHN0aWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgUmVkaWdlcmFcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgS29waWVyYVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIEtsaXBwIHV0XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBLbGlzdHJhIGluXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBCYXJuXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgVlx1MDBFNG5zdGVyIGJhcm5cIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgU3lza29uXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgUmFkZXJhXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIkRcdTAwRjZsaiB2ZXJrdHlnc2ZcdTAwRTRsdFwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWwgc3RpbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIkJhcm5ub2RcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlJvdG5vZFwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkJha2dydW5kXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZXh0Zlx1MDBFNHJnXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiVGVja2Vuc3Rvcmxla1wiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiVGVja2Vuc25pdHRcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJLYW50c3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkthbnRmXHUwMEU0cmdcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJLYW50YnJlZGRcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGllXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBicmVkZFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJNaW4uIGhcdTAwRjZqZFwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiS29wcGxpbmdcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cFwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkJyZWRkXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMXHUwMEU0bmdkXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmVnbmJcdTAwRTVnZVwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiTm9kcmlrdG5pbmdcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTeXNrb25tZWxsYW5ydW1cIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJIXHUwMEY2Z2VyXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJWXHUwMEU0bnN0ZXJcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJcdTAwRTVkYVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJNYXJrZXJpbmdcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJNYXJrZXJpbmdzZlx1MDBFNHJnXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiTWFya2VyaW5nc2JyZWRkXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIktvbnR1cm9mZnNldFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlJlZGlnZXJpbmdza29udHVyZlx1MDBFNHJnXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJSZWRpZ2VyaW5nc2tvbnR1cmJyZWRkXCIsXHJcbiAgICBcInNtLmJveFNlbENvbG9yXCI6IFwiTWFya2VyaW5ncyBmXHUwMEU0cmdcIixcclxuICAgIFwib3V0bGluZS50aXRsZVwiOiBcIkRpc3Bvc2l0aW9uXCIsXHJcbiAgICBcIm91dGxpbmUuZW1wdHlcIjogXCJJbmdlbiBrYXJ0YSBcdTAwRjZwcGVuXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRleHRqdXN0ZXJpbmdcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJUZXh0YXZzdFx1MDBFNW5kXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiUmFkaFx1MDBGNmpkXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiRHVrYmFrZ3J1bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJcdTAwQzV0ZXJzdFx1MDBFNGxsXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiU3RcdTAwRTRuZ1wiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlZpc2EgdmVya3R5Z3NmXHUwMEU0bHRcIixcclxuICAgIFwic20udGJQYWRcIjogXCJGXHUwMEU0bHRzYXZzdFx1MDBFNW5kXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIk92YW5cIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiSFx1MDBGNmdlclwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJOZWRhblwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJWXHUwMEU0bnN0ZXJcIixcclxuICAgIFwic20udGJQb3NcIjogXCJGXHUwMEU0bHRzcG9zaXRpb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJPdmFuXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiTmVkYW5cIixcclxuICAgIFwic20udGJCZ1wiOiBcIkZcdTAwRTRsdHNiYWtncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiS25hcHBiYWtncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIktuYXBwa2FudHN0aWxcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIktuYXBwa2FudGZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJLbmFwcHRleHRmXHUwMEU0cmdcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTAwQzV0ZXJzdFx1MDBFNGxsIGZcdTAwRTRsdFwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBOb2RzdGlsXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkxpbmplZlx1MDBFNHJnXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxpbmplYnJlZGRcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJSZW5zYVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJLYW50cmFkaWVcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiU1x1MDBGNmsgbm9kZXIuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJSb3RcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOeSByb3RcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiQmFyblwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogSW5zdFx1MDBFNGxsbmluZ2FyXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3ByXHUwMEU1a1wiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJHclx1MDBFNG5zc25pdHRzc3ByXHUwMEU1a1wiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJGXHUwMEU0cmd0ZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkxqdXN0XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiTVx1MDBGNnJrdFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlZpc2EgdmVya3R5Z3NmXHUwMEU0bHRcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiVmlzYSB2ZXJrdHlnc2ZcdTAwRTRsdFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJEdWtiYWtncnVuZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQmFrZ3J1bmRzZlx1MDBFNHJnXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIk9tXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiRlx1MDBGNnJmYXR0YXJlXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJGdW5rdGlvbnNyaWsgbWluZG1hcC1hcHAgbWVkIFx1MDBGNnBwZW4ga1x1MDBFNGxsa29kIGZcdTAwRjZyIE9ic2lkaWFuIG1lZCBhbnBhc3NhZGUgc3RpbGFyLCByZWduYlx1MDBFNWdza29wcGxpbmdhciwgZmxlcnZhbCwgZHJhLW9jaC1zbFx1MDBFNHBwIG9jaCBNYXJrZG93bi1pbXBvcnQvZXhwb3J0LlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlVwcGRhdGVyYWRcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1Yi1mXHUwMEY2cnJcdTAwRTVkXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJTdFx1MDBGNmQgZlx1MDBGNnJmYXR0YXJlblwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIktvcnRrb21tYW5kb25cIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiQW5wYXNzYSBrb3J0a29tbWFuZG9uXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlJlZGlnZXJhIG5vZFwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJMXHUwMEU0Z2cgdGlsbCBzeXNrb25cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkxcdTAwRTRnZyB0aWxsIGJhcm5cIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZva3VzZXJhIG5vZFwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTAwQzVuZ3JhXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIkdcdTAwRjZyIG9tXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiUmFkYnJ5dG5pbmcgKHJlZGlnZXJpbmcpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkRyYSBhcmJldHN5dGFcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJab29tYSBpblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJab29tYSB1dFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1MDBDNXRlcnN0XHUwMEU0bGwgem9vbVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiTmF2aWdlcmEgdXBwXHUwMEU1dFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOYXZpZ2VyYSBuZWRcdTAwRTV0XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hdmlnZXJhIHZcdTAwRTRuc3RlclwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWdlcmEgaFx1MDBGNmdlclwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiVHJ5Y2suLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjcm9sbCBvY2ggem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVydGVyYSBWLXNjcm9sbFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVydGVyYSBILXNjcm9sbFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGVyYSB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJSZWRpZ2VyYSB2aWQgc2thcGFuZGVcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJSZWRpZ2VyaW5nc2xcdTAwRTRnZSB2aWQgbnlhIG5vZGVyXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlJvdG5hbW5cIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmFtbiBmXHUwMEY2ciBueWEgclx1MDBGNnR0ZXJcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIkJhcm5uYW1uXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYW1uIGZcdTAwRjZyIG55YSBiYXJuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiU2tyaXYgZlx1MDBGNnIgYXR0IHJlZGlnZXJhXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlJlZGlnZXJhIGdlbm9tIGF0dCBza3JpdmFcIixcclxufTtcclxuXHJcbmNvbnN0IF9oaTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTA5MkVcdTA5NDJcdTA5MzJcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTA5MkFcdTA5NDJcdTA5MzBcdTA5NERcdTA5MzVcdTA5MzVcdTA5MjRcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTA5MkJcdTA5M0ZcdTA5MzAgXHUwOTM4XHUwOTQ3XCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBcdTA5MkVcdTA5NDhcdTA5MkFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiXHUwOTJCXHUwOTNDXHUwOTRCXHUwOTE1XHUwOTM4XCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlx1MDkxNlx1MDk0Qlx1MDkxQ1x1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlx1MDkxNlx1MDk0Qlx1MDkxQ1x1MDk0N1x1MDkwMiB8IFNwYWNlOlx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOCB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1MDkyOFx1MDkyRlx1MDkzRSBcdTA5MkVcdTA5NDJcdTA5MzJcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24gXHUwOTJFXHUwOTRCXHUwOTIxXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwIFx1MDkyQVx1MDk0OFx1MDkyOFx1MDkzMlwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MkFcdTA5MzAgXHUwOTJCXHUwOTNDXHUwOTRCXHUwOTE1XHUwOTM4XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MTZcdTA5NEJcdTA5MUNcdTA5NDdcdTA5MDJcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJcdTA5MzhcdTA5NDdcdTA5MUZcdTA5M0ZcdTA5MDJcdTA5MTdcdTA5NERcdTA5MzhcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkwN1x1MDkyOFwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkwNlx1MDkwOVx1MDkxRlwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBcdTA5MTVcdTA5MzhcdTA5NERcdTA5MUZcdTA5MkVcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDkzOFx1MDkyRFx1MDk0MCBcdTA5MzlcdTA5MUZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MzZcdTA5NDhcdTA5MzJcdTA5NDAgXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTNGXHUwOTI0IFx1MDkxNVx1MDkzMFx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBcdTA5MjhcdTA5MkZcdTA5M0UgXHUwOTJFXHUwOTQyXHUwOTMyXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1MDkyQVx1MDk0Mlx1MDkzMFx1MDk0RFx1MDkzNVx1MDkzNVx1MDkyNFwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBcdTA5MkJcdTA5M0ZcdTA5MzAgXHUwOTM4XHUwOTQ3XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MzVcdTA5NDhcdTA5MzZcdTA5NERcdTA5MzVcdTA5M0ZcdTA5MTUgXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkzRlx1MDkyNCBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDkzNlx1MDk0OFx1MDkzMlx1MDk0MFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBcdTA5MTVcdTA5NDlcdTA5MkFcdTA5NDBcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBcdTA5MTVcdTA5MUZcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFx1MDkyQVx1MDk0N1x1MDkzOFx1MDk0RFx1MDkxRlwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgXHUwOTJDXHUwOTNFXHUwOTJGXHUwOTNFXHUwOTAyIFx1MDkxQVx1MDkzRVx1MDkwN1x1MDkzMlx1MDk0RFx1MDkyMVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdTA5MzhcdTA5M0ZcdTA5MkNcdTA5MzJcdTA5M0ZcdTA5MDJcdTA5MTdcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTA5MzlcdTA5MUZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkxQlx1MDk0MVx1MDkyQVx1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MzVcdTA5NDhcdTA5MzZcdTA5NERcdTA5MzVcdTA5M0ZcdTA5MTUgXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxIFx1MDkyOFx1MDk0Qlx1MDkyMVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHUwOTJFXHUwOTQyXHUwOTMyIFx1MDkyOFx1MDk0Qlx1MDkyMVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1MDkyQVx1MDk0M1x1MDkzN1x1MDk0RFx1MDkyMFx1MDkyRFx1MDk0Mlx1MDkyRVx1MDkzRlwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHUwOTFGXHUwOTQ3XHUwOTE1XHUwOTREXHUwOTM4XHUwOTREXHUwOTFGIFx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1MDkyQlx1MDkzQ1x1MDk0OVx1MDkyOFx1MDk0RFx1MDkxRiBcdTA5MDZcdTA5MTVcdTA5M0VcdTA5MzBcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1MDkyQlx1MDkzQ1x1MDk0OVx1MDkyOFx1MDk0RFx1MDkxRlwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1MDkyQ1x1MDk0OVx1MDkzMFx1MDk0RFx1MDkyMVx1MDkzMCBcdTA5MzZcdTA5NDhcdTA5MzJcdTA5NDBcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdTA5MkNcdTA5NDlcdTA5MzBcdTA5NERcdTA5MjFcdTA5MzAgXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHUwOTJDXHUwOTQ5XHUwOTMwXHUwOTREXHUwOTIxXHUwOTMwIFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTA5MkNcdTA5NDlcdTA5MzBcdTA5NERcdTA5MjFcdTA5MzAgXHUwOTI0XHUwOTREXHUwOTMwXHUwOTNGXHUwOTFDXHUwOTREXHUwOTJGXHUwOTNFXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHUwOTI4XHUwOTREXHUwOTJGXHUwOTQyXHUwOTI4XHUwOTI0XHUwOTJFIFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJcdTA5MjhcdTA5NERcdTA5MkZcdTA5NDJcdTA5MjhcdTA5MjRcdTA5MkUgXHUwOTBBXHUwOTAyXHUwOTFBXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJcdTA5MTVcdTA5MjhcdTA5NDdcdTA5MTVcdTA5NERcdTA5MzZcdTA5MjhcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1MDkyQVx1MDk0RFx1MDkzMFx1MDkxNVx1MDkzRVx1MDkzMFwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHUwOTMyXHUwOTAyXHUwOTJDXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggXHUwOTA3XHUwOTAyXHUwOTI2XHUwOTREXHUwOTMwXHUwOTI3XHUwOTI4XHUwOTQxXHUwOTM3XCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdTA5MjZcdTA5M0ZcdTA5MzZcdTA5M0VcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJcdTA5MzhcdTA5MzlcdTA5NEJcdTA5MjZcdTA5MzAgXHUwOTA1XHUwOTAyXHUwOTI0XHUwOTMwXHUwOTNFXHUwOTMyXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiXHUwOTI2XHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJcdTA5MkNcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIlx1MDkyNlx1MDk0Qlx1MDkyOFx1MDk0Qlx1MDkwMlwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlx1MDkyQVx1MDk0OFx1MDkzMlx1MDk0N1x1MDkxRlwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJcdTA5MUFcdTA5MkZcdTA5MjhcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJcdTA5MUFcdTA5MkZcdTA5MjggXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiXHUwOTFBXHUwOTJGXHUwOTI4IFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTA5MDZcdTA5MDlcdTA5MUZcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MjggXHUwOTExXHUwOTJCXHUwOTM4XHUwOTQ3XHUwOTFGXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTI4IFx1MDkwNlx1MDkwOVx1MDkxRlx1MDkzMlx1MDkzRVx1MDkwN1x1MDkyOCBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOCBcdTA5MDZcdTA5MDlcdTA5MUZcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MjggXHUwOTFBXHUwOTRDXHUwOTIxXHUwOTNDXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLmJveFNlbENvbG9yXCI6IFwiXHUwOTJDXHUwOTQ5XHUwOTE1XHUwOTREXHUwOTM4IFx1MDkxQVx1MDkyRlx1MDkyOCBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwib3V0bGluZS50aXRsZVwiOiBcIlx1MDkzMFx1MDk0Mlx1MDkyQVx1MDkzMFx1MDk0N1x1MDkxNlx1MDkzRVwiLFxyXG4gICAgXCJvdXRsaW5lLmVtcHR5XCI6IFwiXHUwOTE1XHUwOTRCXHUwOTA4IFx1MDkyRVx1MDkzRVx1MDkwN1x1MDkwMlx1MDkyMSBcdTA5MkVcdTA5NDhcdTA5MkEgXHUwOTI4XHUwOTM5XHUwOTQwXHUwOTAyXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1MDkxRlx1MDk0N1x1MDkxNVx1MDk0RFx1MDkzOFx1MDk0RFx1MDkxRiBcdTA5MzhcdTA5MDJcdTA5MzBcdTA5NDdcdTA5MTZcdTA5MjNcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJcdTA5MUZcdTA5NDdcdTA5MTVcdTA5NERcdTA5MzhcdTA5NERcdTA5MUYgXHUwOTJBXHUwOTQ4XHUwOTIxXHUwOTNGXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHUwOTJBXHUwOTAyXHUwOTE1XHUwOTREXHUwOTI0XHUwOTNGIFx1MDkwQVx1MDkwMlx1MDkxQVx1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1MDkxNVx1MDk0OFx1MDkyOFx1MDkzNVx1MDkzRVx1MDkzOCBcdTA5MkFcdTA5NDNcdTA5MzdcdTA5NERcdTA5MjBcdTA5MkRcdTA5NDJcdTA5MkVcdTA5M0ZcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJcdTA5MzBcdTA5NDBcdTA5MzhcdTA5NDdcdTA5MUZcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJcdTA5MkNcdTA5MDJcdTA5MjZcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTI2XHUwOTNGXHUwOTE2XHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkyQVx1MDk0OFx1MDkyMVx1MDkzRlx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJcdTA5MEFcdTA5MkFcdTA5MzBcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiXHUwOTI2XHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIlx1MDkyOFx1MDk0MFx1MDkxQVx1MDk0N1wiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJcdTA5MkNcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic20udGJQb3NcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTM4XHUwOTREXHUwOTI1XHUwOTNGXHUwOTI0XHUwOTNGXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiXHUwOTBBXHUwOTJBXHUwOTMwXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiXHUwOTI4XHUwOTQwXHUwOTFBXHUwOTQ3XCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTJBXHUwOTQzXHUwOTM3XHUwOTREXHUwOTIwXHUwOTJEXHUwOTQyXHUwOTJFXHUwOTNGXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJcdTA5MkNcdTA5MUZcdTA5MjggXHUwOTJBXHUwOTQzXHUwOTM3XHUwOTREXHUwOTIwXHUwOTJEXHUwOTQyXHUwOTJFXHUwOTNGXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiXHUwOTJDXHUwOTFGXHUwOTI4IFx1MDkyQ1x1MDk0OVx1MDkzMFx1MDk0RFx1MDkyMVx1MDkzMCBcdTA5MzZcdTA5NDhcdTA5MzJcdTA5NDBcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlx1MDkyQ1x1MDkxRlx1MDkyOCBcdTA5MkNcdTA5NDlcdTA5MzBcdTA5NERcdTA5MjFcdTA5MzAgXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIlx1MDkyQ1x1MDkxRlx1MDkyOCBcdTA5MUZcdTA5NDdcdTA5MTVcdTA5NERcdTA5MzhcdTA5NERcdTA5MUYgXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkzMFx1MDk0MFx1MDkzOFx1MDk0N1x1MDkxRlwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MjhcdTA5NEJcdTA5MjEgXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1MDkzMlx1MDkzRVx1MDkwN1x1MDkyOCBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHUwOTMyXHUwOTNFXHUwOTA3XHUwOTI4IFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlx1MDkxNVx1MDkzOFx1MDk0RFx1MDkxRlx1MDkyRSBcdTA5MzhcdTA5M0VcdTA5MkJcdTA5M0MgXHUwOTE1XHUwOTMwXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlx1MDkyQ1x1MDk0OVx1MDkzMFx1MDk0RFx1MDkyMVx1MDkzMCBcdTA5MjRcdTA5NERcdTA5MzBcdTA5M0ZcdTA5MUNcdTA5NERcdTA5MkZcdTA5M0VcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiXHUwOTI4XHUwOTRCXHUwOTIxIFx1MDkxNlx1MDk0Qlx1MDkxQ1x1MDk0N1x1MDkwMi4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MDkyRVx1MDk0Mlx1MDkzMlwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1MDkyOFx1MDkyRlx1MDkzRSBcdTA5MkVcdTA5NDJcdTA5MzJcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBcdTA5MzhcdTA5NDdcdTA5MUZcdTA5M0ZcdTA5MDJcdTA5MTdcdTA5NERcdTA5MzhcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdTA5MkRcdTA5M0VcdTA5MzdcdTA5M0VcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHUwOTA3XHUwOTAyXHUwOTFGXHUwOTMwXHUwOTJCXHUwOTNDXHUwOTQ3XHUwOTM4IFx1MDkyRFx1MDkzRVx1MDkzN1x1MDkzRVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdTA5MjVcdTA5NDBcdTA5MkVcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlx1MDkzMFx1MDkwMlx1MDkxNyBcdTA5MjVcdTA5NDBcdTA5MkVcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiXHUwOTMyXHUwOTNFXHUwOTA3XHUwOTFGXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiXHUwOTIxXHUwOTNFXHUwOTMwXHUwOTREXHUwOTE1XCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkyNlx1MDkzRlx1MDkxNlx1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTI2XHUwOTNGXHUwOTE2XHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIlx1MDkxNVx1MDk0OFx1MDkyOFx1MDkzNVx1MDkzRVx1MDkzOCBcdTA5MkFcdTA5NDNcdTA5MzdcdTA5NERcdTA5MjBcdTA5MkRcdTA5NDJcdTA5MkVcdTA5M0ZcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIlx1MDkyQVx1MDk0M1x1MDkzN1x1MDk0RFx1MDkyMFx1MDkyRFx1MDk0Mlx1MDkyRVx1MDkzRiBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiXHUwOTJBXHUwOTMwXHUwOTNGXHUwOTFBXHUwOTJGXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiXHUwOTM4XHUwOTAyXHUwOTM4XHUwOTREXHUwOTE1XHUwOTMwXHUwOTIzXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJcdTA5MzJcdTA5NDdcdTA5MTZcdTA5MTVcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIk9ic2lkaWFuIFx1MDkxNVx1MDk0NyBcdTA5MzJcdTA5M0ZcdTA5MEYgXHUwOTE1XHUwOTM4XHUwOTREXHUwOTFGXHUwOTJFIFx1MDkzOFx1MDk0RFx1MDkxRlx1MDkzRVx1MDkwN1x1MDkzMiwgXHUwOTA3XHUwOTAyXHUwOTI2XHUwOTREXHUwOTMwXHUwOTI3XHUwOTI4XHUwOTQxXHUwOTM3IFx1MDkxNVx1MDkyOFx1MDk0N1x1MDkxNVx1MDk0RFx1MDkzNlx1MDkyOCwgXHUwOTJFXHUwOTMyXHUwOTREXHUwOTFGXHUwOTQwLVx1MDkzOFx1MDk0N1x1MDkzMlx1MDk0N1x1MDkxNVx1MDk0RFx1MDkxRiwgXHUwOTIxXHUwOTREXHUwOTMwXHUwOTQ4XHUwOTE3IFx1MDkwRlx1MDkwMlx1MDkyMSBcdTA5MjFcdTA5NERcdTA5MzBcdTA5NDlcdTA5MkEgXHUwOTE0XHUwOTMwIE1hcmtkb3duIFx1MDkwNlx1MDkyRlx1MDkzRVx1MDkyNC9cdTA5MjhcdTA5M0ZcdTA5MzBcdTA5NERcdTA5MkZcdTA5M0VcdTA5MjQgXHUwOTE1XHUwOTQ3IFx1MDkzOFx1MDkzRVx1MDkyNSBcdTA5MkVcdTA5M0VcdTA5MDdcdTA5MDJcdTA5MjEgXHUwOTJFXHUwOTQ4XHUwOTJBIFx1MDkxMFx1MDkyQVx1MDk2NFwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1MDkwNVx1MDkyQVx1MDkyMVx1MDk0N1x1MDkxRlx1MDk0N1x1MDkyMVwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViIFx1MDkzMFx1MDkzRlx1MDkyQVx1MDk0OVx1MDkxQ1x1MDkzQ1x1MDkzRlx1MDkxRlx1MDkzMFx1MDk0MFwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiXHUwOTEzXHUwOTJBXHUwOTI4IFx1MDkzOFx1MDk0Qlx1MDkzMFx1MDk0RFx1MDkzOCBcdTA5MzJcdTA5NDdcdTA5MTZcdTA5MTUgXHUwOTE1XHUwOTNFIFx1MDkzOFx1MDkyRVx1MDkzMFx1MDk0RFx1MDkyNVx1MDkyOCBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJcdTA5MTVcdTA5NDBcdTA5MkNcdTA5NEJcdTA5MzBcdTA5NERcdTA5MjEgXHUwOTM2XHUwOTQ5XHUwOTMwXHUwOTREXHUwOTFGXHUwOTE1XHUwOTFGXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1MDkzNlx1MDk0OVx1MDkzMFx1MDk0RFx1MDkxRlx1MDkxNVx1MDkxRiBcdTA5MDVcdTA5MjhcdTA5NDFcdTA5MTVcdTA5NDJcdTA5MzJcdTA5M0ZcdTA5MjQgXHUwOTE1XHUwOTMwXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5M0ZcdTA5MjQgXHUwOTE1XHUwOTMwXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIlx1MDkzOFx1MDkzRlx1MDkyQ1x1MDkzMlx1MDkzRlx1MDkwMlx1MDkxNyBcdTA5MUNcdTA5NEJcdTA5MjFcdTA5M0NcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIlx1MDkxQVx1MDkzRVx1MDkwN1x1MDkzMlx1MDk0RFx1MDkyMSBcdTA5MUNcdTA5NEJcdTA5MjFcdTA5M0NcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIlx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MkFcdTA5MzAgXHUwOTJCXHUwOTNDXHUwOTRCXHUwOTE1XHUwOTM4XCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlx1MDkyQVx1MDk0Mlx1MDkzMFx1MDk0RFx1MDkzNVx1MDkzNVx1MDkyNFwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJcdTA5MkJcdTA5M0ZcdTA5MzAgXHUwOTM4XHUwOTQ3XCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiXHUwOTMyXHUwOTNFXHUwOTA3XHUwOTI4IFx1MDkyQ1x1MDk0RFx1MDkzMFx1MDk0N1x1MDkxNSAoXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTI4IFx1MDkyRVx1MDk0N1x1MDkwMilcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiXHUwOTE1XHUwOTQ4XHUwOTI4XHUwOTM1XHUwOTNFXHUwOTM4IFx1MDkxNlx1MDk0MFx1MDkwMlx1MDkxQVx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlx1MDkxQ1x1MDkzQ1x1MDk0Mlx1MDkyRSBcdTA5MDdcdTA5MjhcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkwNlx1MDkwOVx1MDkxRlwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1MDkxQ1x1MDkzQ1x1MDk0Mlx1MDkyRSBcdTA5MzBcdTA5NDBcdTA5MzhcdTA5NDdcdTA5MUZcIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIlx1MDkwQVx1MDkyQVx1MDkzMFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTA5MjhcdTA5NDBcdTA5MUFcdTA5NDdcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiXHUwOTJDXHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJcdTA5MjZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1MDkxNVx1MDk0MVx1MDkwMlx1MDkxQ1x1MDk0MCBcdTA5MjZcdTA5MkNcdTA5M0VcdTA5MEZcdTA5MDIuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlx1MDkzOFx1MDk0RFx1MDkxNVx1MDk0RFx1MDkzMFx1MDk0OVx1MDkzMiBcdTA5MTRcdTA5MzAgXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHUwOTM1XHUwOTMwXHUwOTREXHUwOTFGXHUwOTNGXHUwOTE1XHUwOTMyIFx1MDkzOFx1MDk0RFx1MDkxNVx1MDk0RFx1MDkzMFx1MDk0OVx1MDkzMiBcdTA5MDlcdTA5MzJcdTA5MUZcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJcdTA5MzlcdTA5NDlcdTA5MzBcdTA5M0ZcdTA5MUNcdTA5M0NcdTA5NDlcdTA5MjhcdTA5NERcdTA5MUZcdTA5MzIgXHUwOTM4XHUwOTREXHUwOTE1XHUwOTREXHUwOTMwXHUwOTQ5XHUwOTMyIFx1MDkwOVx1MDkzMlx1MDkxRlx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MDkxQ1x1MDkzQ1x1MDk0Mlx1MDkyRSBcdTA5MjZcdTA5M0ZcdTA5MzZcdTA5M0UgXHUwOTA5XHUwOTMyXHUwOTFGXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTA5MkNcdTA5MjhcdTA5M0VcdTA5MjRcdTA5NDcgXHUwOTM4XHUwOTJFXHUwOTJGIFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOFwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIlx1MDkyOFx1MDkwRiBcdTA5MjhcdTA5NEJcdTA5MjEgXHUwOTJDXHUwOTI4XHUwOTNFXHUwOTI0XHUwOTQ3IFx1MDkzOFx1MDkyRVx1MDkyRiBcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5MjggXHUwOTJFXHUwOTRCXHUwOTIxXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlx1MDkyRVx1MDk0Mlx1MDkzMiBcdTA5MjhcdTA5M0VcdTA5MkVcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlx1MDkyOFx1MDkwRiBcdTA5MkVcdTA5NDJcdTA5MzIgXHUwOTE1XHUwOTNFIFx1MDkyMVx1MDkzRlx1MDkyQlx1MDkzQ1x1MDk0OVx1MDkzMlx1MDk0RFx1MDkxRiBcdTA5MjhcdTA5M0VcdTA5MkVcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIlx1MDkxQVx1MDkzRVx1MDkwN1x1MDkzMlx1MDk0RFx1MDkyMSBcdTA5MjhcdTA5M0VcdTA5MkVcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJcdTA5MjhcdTA5MEYgXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxIFx1MDkxNVx1MDkzRSBcdTA5MjFcdTA5M0ZcdTA5MkJcdTA5M0NcdTA5NDlcdTA5MzJcdTA5NERcdTA5MUYgXHUwOTI4XHUwOTNFXHUwOTJFXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHUwOTFGXHUwOTNFXHUwOTA3XHUwOTJBIFx1MDkxNVx1MDkzMFx1MDk0N1x1MDkwMiBcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5MjhcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiXHUwOTFBXHUwOTJGXHUwOTI4XHUwOTNGXHUwOTI0IFx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MkFcdTA5MzAgXHUwOTFGXHUwOTNFXHUwOTA3XHUwOTJBIFx1MDkxNVx1MDkzMFx1MDkxNVx1MDk0NyBcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5MjhcIixcclxufTtcclxuXHJcbmNvbnN0IF9rbzogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdUI4RThcdUQyQjhcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdUMyRTRcdUQ1ODlcdUNERThcdUMxOENcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdUIyRTRcdUMyRENcdUMyRTRcdUQ1ODlcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIFx1QjlGNVwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdUMyQTRcdUQwQzBcdUM3N0NcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJcdUQzRUNcdUNFRTRcdUMyQTRcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiXHVBQzgwXHVDMEM5XCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6XHVBQzgwXHVDMEM5IHwgU3BhY2U6XHVEM0I4XHVDOUQxIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiXHVDMEM4IFx1QjhFOFx1RDJCOFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93biBcdUJBQThcdUI0RENcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJcdUMyQTRcdUQwQzBcdUM3N0MgXHVEMzI4XHVCMTEwXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiXHVCMTc4XHVCNERDIFx1RDNFQ1x1Q0VFNFx1QzJBNFwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJcdUIxNzhcdUI0REMgXHVBQzgwXHVDMEM5XCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHVDMTI0XHVDODE1XCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1RDY1NVx1QjMwMFwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHVDRDk1XHVDMThDXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1QzBBQ1x1QzZBOVx1Qzc5MCBcdUM4MTVcdUM3NThcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1Qzc3Q1x1QUQwNCBcdUMwQURcdUM4MUNcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdUMyQTRcdUQwQzBcdUM3N0MgXHVEM0I4XHVDOUQxXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFx1QzBDOCBcdUI4RThcdUQyQjhcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHVDMkU0XHVENTg5XHVDREU4XHVDMThDXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFx1QjJFNFx1QzJEQ1x1QzJFNFx1RDU4OVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHVDODA0XHVDNUVEIFx1QzJBNFx1RDBDMFx1Qzc3Q1wiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBcdUQzQjhcdUM5RDFcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1QzJBNFx1RDBDMFx1Qzc3Q1wiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBcdUJDRjVcdUMwQUNcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBcdUM3OThcdUI3N0NcdUIwQjRcdUFFMzBcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFx1QkQ5OVx1QzVFQ1x1QjEyM1x1QUUzMFwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgXHVDNzkwXHVDMkREXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgXHVDNjdDXHVDQUJEIFx1Qzc5MFx1QzJERFwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdUQ2MTVcdUM4MUNcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdUMwQURcdUM4MUNcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHVCM0M0XHVBRDZDXHVCQUE4XHVDNzRDIFx1QzIyOFx1QUUzMFx1QUUzMFwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdUM4MDRcdUM1RUQgXHVDMkE0XHVEMEMwXHVDNzdDXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHVDNzkwXHVDMkREIFx1QjE3OFx1QjREQ1wiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHVCOEU4XHVEMkI4IFx1QjE3OFx1QjREQ1wiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1QkMzMFx1QUNCRFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHVEMTREXHVDMkE0XHVEMkI4IFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1QUUwMFx1QUYzNCBcdUQwNkNcdUFFMzBcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1QUUwMFx1QUYzNFwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1RDE0Q1x1QjQ1MFx1QjlBQyBcdUMyQTRcdUQwQzBcdUM3N0NcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdUQxNENcdUI0NTBcdUI5QUMgXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHVEMTRDXHVCNDUwXHVCOUFDIFx1QjEwOFx1QkU0NFwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdUQxNENcdUI0NTBcdUI5QUMgXHVCQzE4XHVBQ0JEXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHVDRDVDXHVDMThDIFx1QjEwOFx1QkU0NFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJcdUNENUNcdUMxOEMgXHVCMTkyXHVDNzc0XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJcdUM1RjBcdUFDQjBcdUMxMjBcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1QzcyMFx1RDYxNVwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1QjEwOFx1QkU0NFwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHVBRTM4XHVDNzc0XCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggXHVCODA4XHVDNzc4XHVCQ0Y0XHVDNkIwXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdUIxNzhcdUI0REMgXHVCQzI5XHVENUE1XCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiXHVENjE1XHVDODFDIFx1QUMwNFx1QUNBOVwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlx1QzYyNFx1Qjk3OFx1Q0FCRFwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiXHVDNjdDXHVDQUJEXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJcdUM1OTFcdUNBQkRcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJcdUQzMTRcdUI4MDhcdUQyQjhcIixcclxuICAgIFwic20uc2VsXCI6IFwiXHVDMTIwXHVEMEREXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiXHVDMTIwXHVEMEREIFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlx1QzEyMFx1RDBERCBcdUIxMDhcdUJFNDRcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiXHVDNzI0XHVBQ0ZEXHVDMTIwIFx1QzYyNFx1RDUwNFx1QzE0QlwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlx1RDNCOFx1QzlEMSBcdUM3MjRcdUFDRkRcdUMxMjAgXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJcdUQzQjhcdUM5RDEgXHVDNzI0XHVBQ0ZEXHVDMTIwIFx1QjEwOFx1QkU0NFwiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIlx1QkMxNVx1QzJBNCBcdUMxMjBcdUQwREQgXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcIm91dGxpbmUudGl0bGVcIjogXCJcdUFDMUNcdUM2OTRcIixcclxuICAgIFwib3V0bGluZS5lbXB0eVwiOiBcIlx1QzVGNFx1QjlCMCBcdUI5QzhcdUM3NzhcdUI0RENcdUI5RjUgXHVDNUM2XHVDNzRDXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1RDE0RFx1QzJBNFx1RDJCOCBcdUM4MTVcdUI4MkNcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJcdUQxNERcdUMyQTRcdUQyQjggXHVEMzI4XHVCNTI5XCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHVDOTA0IFx1QjE5Mlx1Qzc3NFwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1Q0U5NFx1QkM4NFx1QzJBNCBcdUJDMzBcdUFDQkRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJcdUNEMDhcdUFFMzBcdUQ2NTRcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJcdUIyRUJcdUFFMzBcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVENDVDXHVDMkRDXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiXHVCM0M0XHVBRDZDXHVCQUE4XHVDNzRDIFx1RDMyOFx1QjUyOVwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJcdUM3MDRcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiXHVDNjI0XHVCOTc4XHVDQUJEXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIlx1QzU0NFx1Qjc5OFwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJcdUM2N0NcdUNBQkRcIixcclxuICAgIFwic20udGJQb3NcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVDNzA0XHVDRTU4XCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiXHVDNzA0XCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiXHVDNTQ0XHVCNzk4XCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVCQzMwXHVBQ0JEXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJcdUJDODRcdUQyQkMgXHVCQzMwXHVBQ0JEXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiXHVCQzg0XHVEMkJDIFx1RDE0Q1x1QjQ1MFx1QjlBQyBcdUMyQTRcdUQwQzBcdUM3N0NcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlx1QkM4NFx1RDJCQyBcdUQxNENcdUI0NTBcdUI5QUMgXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIlx1QkM4NFx1RDJCQyBcdUQxNERcdUMyQTRcdUQyQjggXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiXHVCM0M0XHVBRDZDXHVCQUE4XHVDNzRDIFx1Q0QwOFx1QUUzMFx1RDY1NFwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdUIxNzhcdUI0REMgXHVDMkE0XHVEMEMwXHVDNzdDXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1QzEyMCBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHVDMTIwIFx1QjEwOFx1QkU0NFwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlx1QzBBQ1x1QzZBOVx1Qzc5MCBcdUM4MTVcdUM3NTggXHVDOUMwXHVDNkIwXHVBRTMwXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlx1RDE0Q1x1QjQ1MFx1QjlBQyBcdUJDMThcdUFDQkRcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiXHVCMTc4XHVCNERDIFx1QUM4MFx1QzBDOS4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1QjhFOFx1RDJCOFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1QzBDOCBcdUI4RThcdUQyQjhcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHVDNzkwXHVDMkREXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBcdUMxMjRcdUM4MTVcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdUM1QjhcdUM1QjRcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHVDNzc4XHVEMTMwXHVEMzk4XHVDNzc0XHVDMkE0IFx1QzVCOFx1QzVCNFwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdUQxNENcdUI5QzhcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlx1QzBDOVx1QzBDMSBcdUQxNENcdUI5QzhcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiXHVCQzFEXHVBQzhDXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiXHVDNUI0XHVCNDYxXHVBQzhDXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiXHVCM0M0XHVBRDZDXHVCQUE4XHVDNzRDIFx1RDQ1Q1x1QzJEQ1wiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVENDVDXHVDMkRDXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIlx1Q0U5NFx1QkM4NFx1QzJBNCBcdUJDMzBcdUFDQkRcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIlx1QkMzMFx1QUNCRCBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiXHVDODE1XHVCQ0Y0XCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiXHVCQzg0XHVDODA0XCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJcdUM3OTFcdUMxMzFcdUM3OTBcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIk9ic2lkaWFuXHVDNkE5IFx1QzYyNFx1RDUwOCBcdUMxOENcdUMyQTQgXHVCOUM4XHVDNzc4XHVCNERDXHVCOUY1IFx1QzU3MS4gXHVDRUU0XHVDMkE0XHVEMTQwIFx1QzJBNFx1RDBDMFx1Qzc3QywgXHVCODA4XHVDNzc4XHVCQ0Y0XHVDNkIwIFx1QzVGMFx1QUNCMCwgXHVCMkU0XHVDOTExIFx1QzEyMFx1RDBERCwgXHVCNERDXHVCNzk4XHVBREY4IFx1QzU2NCBcdUI0RENcdUI4NkQsIE1hcmtkb3duIFx1QzlDMFx1QzZEMC5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJcdUM1QzVcdUIzNzBcdUM3NzRcdUQyQjhcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1YiBcdUM4MDBcdUM3QTVcdUMxOENcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlx1QzYyNFx1RDUwOFx1QzE4Q1x1QzJBNCBcdUM3OTFcdUFDMDAgXHVENkM0XHVDNkQwXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiXHVEMEE0XHVCQ0Y0XHVCNERDIFx1QjJFOFx1Q0Q5NVx1RDBBNFwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJcdUIyRThcdUNEOTVcdUQwQTQgXHVDMEFDXHVDNkE5XHVDNzkwIFx1QzgxNVx1Qzc1OFwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJcdUIxNzhcdUI0REMgXHVEM0I4XHVDOUQxXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIlx1RDYxNVx1QzgxQyBcdUNEOTRcdUFDMDBcIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIlx1Qzc5MFx1QzJERCBcdUNEOTRcdUFDMDBcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIlx1QjE3OFx1QjREQyBcdUQzRUNcdUNFRTRcdUMyQTRcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHVDMkU0XHVENTg5XHVDREU4XHVDMThDXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1QjJFNFx1QzJEQ1x1QzJFNFx1RDU4OVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1QzkwNFx1QkMxNFx1QUZDOCAoXHVEM0I4XHVDOUQxIFx1QzkxMSlcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiXHVDRTk0XHVCQzg0XHVDMkE0IFx1QjREQ1x1Qjc5OFx1QURGOFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlx1RDY1NVx1QjMwMFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJcdUNEOTVcdUMxOENcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJcdUQ2NTVcdUIzMDAvXHVDRDk1XHVDMThDIFx1Q0QwOFx1QUUzMFx1RDY1NFwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHVDNzA0XHVCODVDXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIlx1QzU0NFx1Qjc5OFx1Qjg1Q1wiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJcdUM2N0NcdUNBQkRcdUM3M0NcdUI4NUNcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1QzYyNFx1Qjk3OFx1Q0FCRFx1QzczQ1x1Qjg1Q1wiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiXHVEMEE0XHVCOTdDIFx1QjIwNFx1Qjk3NFx1QzEzOFx1QzY5NC4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiXHVDMkE0XHVEMDZDXHVCODY0IFx1QkMwRiBcdUQ2NTVcdUIzMDAvXHVDRDk1XHVDMThDXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHVDMTM4XHVCODVDIFx1QzJBNFx1RDA2Q1x1Qjg2NCBcdUJDMThcdUM4MDRcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJcdUFDMDBcdUI4NUMgXHVDMkE0XHVEMDZDXHVCODY0IFx1QkMxOFx1QzgwNFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1RDY1NVx1QjMwMC9cdUNEOTVcdUMxOEMgXHVCQzE4XHVDODA0XCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdUMwRERcdUMxMzEgXHVDMkRDIFx1RDNCOFx1QzlEMVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIlx1QzBDOCBcdUIxNzhcdUI0REMgXHVDMEREXHVDMTMxIFx1QzJEQyBcdUQzQjhcdUM5RDEgXHVCQUE4XHVCNERDXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlx1QjhFOFx1RDJCOCBcdUM3NzRcdUI5ODRcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlx1QzBDOCBcdUI4RThcdUQyQjhcdUM3NTggXHVBRTMwXHVCQ0Y4IFx1Qzc3NFx1Qjk4NFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiXHVDNzkwXHVDMkREIFx1Qzc3NFx1Qjk4NFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlx1QzBDOCBcdUM3OTBcdUMyRERcdUM3NTggXHVBRTMwXHVCQ0Y4IFx1Qzc3NFx1Qjk4NFwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlx1Qzc4NVx1QjgyNVx1RDU1OFx1QzVFQyBcdUQzQjhcdUM5RDFcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiXHVCMTc4XHVCNERDIFx1QzEyMFx1RDBERCBcdUMyREMgXHVEMEE0IFx1Qzc4NVx1QjgyNVx1QzczQ1x1Qjg1QyBcdUQzQjhcdUM5RDFcIixcclxufTtcclxuXHJcbmNvbnN0IF9wdDogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBSYWl6XCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgRGVzZmF6ZXJcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBSZWZhemVyXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBNYXBhXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsb1wiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZvY2FyXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlBlc3F1aXNhclwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlBlc3F1aXNhciB8IEVzcGFcdTAwRTdvOkVkaXRhciB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk5vdmEgcmFpelwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNb2RvIE1hcmtkb3duXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiUGFpbmVsIGRlIGVzdGlsb1wiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZvY2FyIG5vIG5cdTAwRjNcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiUGVzcXVpc2FyIG5cdTAwRjNzXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiQ29uZmlndXJhXHUwMEU3XHUwMEY1ZXNcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiQW1wbGlhclwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiUmVkdXppclwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBQZXJzb25hbGl6YWRvXCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBFeGNsdWlyIGVtIGxvdGVcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFZGl0YXIgZXN0aWxvXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE5vdmEgcmFpelwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBEZXNmYXplclwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBSZWZhemVyXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG8gZ2xvYmFsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIEVkaXRhclwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIENvcGlhclwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFJlY29ydGFyXCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBDb2xhclwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgRmlsaG9cIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBGaWxobyBlc3F1ZXJkb1wiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBJcm1cdTAwRTNvXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgRXhjbHVpclwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJPY3VsdGFyIGJhcnJhXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsbyBnbG9iYWxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJOXHUwMEYzIGZpbGhvXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJOXHUwMEYzIHJhaXpcIixcclxuICAgIFwic20uYmdcIjogXCJGdW5kb1wiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiQ29yIGRvIHRleHRvXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiVGFtYW5obyBkYSBmb250ZVwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiRm9udGVcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJFc3RpbG8gZGEgYm9yZGFcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJDb3IgZGEgYm9yZGFcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJMYXJndXJhIGRhIGJvcmRhXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlJhaW8gZGEgYm9yZGFcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJMYXJndXJhIG1cdTAwRURuLlwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJBbHR1cmEgbVx1MDBFRG4uXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJDb25leFx1MDBFM29cIixcclxuICAgIFwic20udHlwZVwiOiBcIlRpcG9cIixcclxuICAgIFwic20uY29sb3JcIjogXCJDb3JcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJMYXJndXJhXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJDb21wcmltZW50b1wiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IEFyY28tXHUwMEVEcmlzXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJEaXJlXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIkVzcGFcdTAwRTdhbWVudG8gZW50cmUgaXJtXHUwMEUzb3NcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJEaXJlaXRhXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJFc3F1ZXJkYVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiQW1ib3NcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldGFcIixcclxuICAgIFwic20uc2VsXCI6IFwiU2VsZVx1MDBFN1x1MDBFM29cIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJDb3IgZGUgc2VsZVx1MDBFN1x1MDBFM29cIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJMYXJndXJhIGRlIHNlbGVcdTAwRTdcdTAwRTNvXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIkRlc2xvY2FtZW50byBkbyBjb250b3Jub1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIkNvciBjb250b3JubyBlZGlcdTAwRTdcdTAwRTNvXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJMYXJndXJhIGNvbnRvcm5vIGVkaVx1MDBFN1x1MDBFM29cIixcclxuICAgIFwic20uYm94U2VsQ29sb3JcIjogXCJDb3IgZGUgc2VsZVx1MDBFN1x1MDBFM29cIixcclxuICAgIFwib3V0bGluZS50aXRsZVwiOiBcIkVzYm9cdTAwRTdvXCIsXHJcbiAgICBcIm91dGxpbmUuZW1wdHlcIjogXCJOZW5odW0gbWFwYSBhYmVydG9cIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiQWxpbmhhbWVudG9cIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJQcmVlbmNoaW1lbnRvIHRleHRvXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiQWx0dXJhIGRhIGxpbmhhXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiRnVuZG8gZGEgdGVsYVwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlJlZGVmaW5pclwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIkZlY2hhclwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIk1vc3RyYXIgYmFycmFcIixcclxuICAgIFwic20udGJQYWRcIjogXCJQcmVlbmNoaW1lbnRvIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIkNpbWFcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiRGlyZWl0YVwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJCYWl4b1wiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJFc3F1ZXJkYVwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlBvc2lcdTAwRTdcdTAwRTNvIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiVG9wb1wiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIkZ1bmRvXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJGdW5kbyBiYXJyYVwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiRnVuZG8gYm90XHUwMEUzb1wiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIkVzdGlsbyBib3JkYSBib3RcdTAwRTNvXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJDb3IgYm9yZGEgYm90XHUwMEUzb1wiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJDb3IgdGV4dG8gYm90XHUwMEUzb1wiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlJlZGVmaW5pciBiYXJyYVwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG8gZG8gblx1MDBGM1wiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJDb3IgZGEgbGluaGFcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGFyZ3VyYSBkYSBsaW5oYVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkxpbXBhciBwZXJzb25hbGl6YVx1MDBFN1x1MDBFM29cIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmFpbyBkYSBib3JkYVwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJQZXNxdWlzYXIgblx1MDBGM3MuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJSYWl6XCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTm92YSByYWl6XCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkZpbGhvXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIkNvbmZpZ3VyYVx1MDBFN1x1MDBGNWVzIE1pbmRaSlwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIklkaW9tYVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJJZGlvbWEgZGEgaW50ZXJmYWNlXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRlbWFcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlRlbWEgZGUgY29yXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkNsYXJvXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiRXNjdXJvXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiTW9zdHJhciBiYXJyYVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJNb3N0cmFyIGJhcnJhXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIkZ1bmRvIGRhIHRlbGFcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkNvciBkZSBmdW5kb1wiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJTb2JyZVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNcdTAwRTNvXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRvclwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiQXBwIGRlIG1hcGEgbWVudGFsIGRlIGNcdTAwRjNkaWdvIGFiZXJ0byBwYXJhIE9ic2lkaWFuIGNvbSBlc3RpbG9zIHBlcnNvbmFsaXphZG9zLCBjb25leFx1MDBGNWVzIGFyY28tXHUwMEVEcmlzLCBzZWxlXHUwMEU3XHUwMEUzbyBtXHUwMEZBbHRpcGxhLCBhcnJhc3RhciBlIHNvbHRhciBlIE1hcmtkb3duLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIkF0dWFsaXphZG9cIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIlJlcG9zaXRcdTAwRjNyaW8gR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJBcG9pYXIgbyBhdXRvclwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIkF0YWxob3MgZGUgdGVjbGFkb1wiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJQZXJzb25hbGl6YXIgYXRhbGhvc1wiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJFZGl0YXIgblx1MDBGM1wiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJBZGljaW9uYXIgaXJtXHUwMEUzb1wiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiQWRpY2lvbmFyIGZpbGhvXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJGb2NhciBubyBuXHUwMEYzXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIkRlc2ZhemVyXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlJlZmF6ZXJcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJRdWVicmEgZGUgbGluaGEgKGVkaVx1MDBFN1x1MDBFM28pXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkFycmFzdGFyIHRlbGFcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJBbXBsaWFyXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlJlZHV6aXJcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJSZWRlZmluaXIgem9vbVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiQ2ltYVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJCYWl4b1wiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJFc3F1ZXJkYVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiRGlyZWl0YVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiUHJlc3Npb25lLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJSb2xhZ2VtIGUgem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVydGVyIHJvbGFnZW0gVlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVydGVyIHJvbGFnZW0gSFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGVyIHpvb21cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIkVkaXRhciBhbyBjcmlhclwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIk1vZG8gZWRpXHUwMEU3XHUwMEUzbyBhbyBjcmlhciBuXHUwMEYzc1wiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJOb21lIGRhIHJhaXpcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIk5vbWUgcGFkclx1MDBFM28gcGFyYSByYVx1MDBFRHplc1wiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiTm9tZSBkbyBmaWxob1wiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIk5vbWUgcGFkclx1MDBFM28gcGFyYSBmaWxob3NcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJEaWdpdGFyIHBhcmEgZWRpdGFyXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIkVkaXRhciBhbyBkaWdpdGFyIGNvbSBuXHUwMEYzIHNlbGVjaW9uYWRvXCIsXHJcbn07XHJcblxyXG5jb25zdCBfZmk6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgSnV1cmlcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBLdW1vYVwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFRlZSB1dWRlbGxlZW5cIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIEthcnR0YVwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBUeXlsaVwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIktvaGRpc3RhXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIkhha3VcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpIYWt1IHwgVlx1MDBFNGxpbHlcdTAwRjZudGk6TXVva2thYSB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlV1c2kganV1cmlcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24tdGlsYVwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlR5eWxpcGFuZWVsaVwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIktvaGRpc3RhIHNvbG11dW5cIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiRXRzaSBzb2xtdWphXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiQXNldHVrc2V0XCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIkxcdTAwRTRoZW5uXHUwMEU0XCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJMb2l0b25uYVwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBNdWthdXRldHR1XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBQb2lzdGEga2Fpa2tpXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggTXVva2thYSB0eXlsaVx1MDBFNFwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBVdXNpIGp1dXJpXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IEt1bW9hXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFRlZSB1dWRlbGxlZW5cIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFlsZWluZW4gdHl5bGlcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgTXVva2thYVwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggVHl5bGlcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgS29waW9pXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgTGVpa2thYVwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgTGlpdFx1MDBFNFwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgTGFwc2lcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBWYXNlbiBsYXBzaVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBTaXNhcnVzXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgUG9pc3RhXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlBpaWxvdGEgcGFsa2tpXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFlsZWluZW4gdHl5bGlcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJMYXBzaXNvbG11XCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJKdXVyaXNvbG11XCIsXHJcbiAgICBcInNtLmJnXCI6IFwiVGF1c3RhXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZWtzdGluIHZcdTAwRTRyaVwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIkZvbnR0aWtva29cIixcclxuICAgIFwic20uZm9udFwiOiBcIkZvbnR0aVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlJldW5hbiB0eXlsaVwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlJldW5hbiB2XHUwMEU0cmlcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJSZXVuYW4gbGV2ZXlzXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlJldW5hbiBweVx1MDBGNnJpc3R5c1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIlZcdTAwRTRoaW1tXHUwMEU0aXNsZXZleXNcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiVlx1MDBFNGhpbW1cdTAwRTRpc2tvcmtldXNcIixcclxuICAgIFwic20uY29ublwiOiBcIllodGV5c1wiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiVHl5cHBpXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiVlx1MDBFNHJpXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiTGV2ZXlzXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJQaXR1dXNcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBTYXRlZW5rYWFyaVwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiU29sbXVuIHN1dW50YVwiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIlNpc2FydXN2XHUwMEU0bGlcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJPaWtlYVwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiVmFzZW5cIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIk1vbGVtbWF0XCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXR0aVwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJWYWxpbnRhXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiVmFsaW5uYW4gdlx1MDBFNHJpXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiVmFsaW5uYW4gbGV2ZXlzXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1MDBDNFx1MDBFNHJpdmlpdmFuIHNpaXJ0eW1cdTAwRTRcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJNdW9ra2F1a3NlbiBcdTAwRTRcdTAwRTRyaXZpaXZhbiB2XHUwMEU0cmlcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIk11b2trYXVrc2VuIFx1MDBFNFx1MDBFNHJpdmlpdmFuIGxldmV5c1wiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIlZhbGlubmFuIHZcdTAwRTRyaVwiLFxyXG4gICAgXCJvdXRsaW5lLnRpdGxlXCI6IFwiSlx1MDBFNHNlbm55c1wiLFxyXG4gICAgXCJvdXRsaW5lLmVtcHR5XCI6IFwiRWkgYXZvaW50YSBrYXJ0dGFhXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRla3N0aW4gdGFzYXVzXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGVrc3RpbiB0XHUwMEU0eXRlXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiUml2aW4ga29ya2V1c1wiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkthbmthYW4gdGF1c3RhXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiUGFsYXV0YVwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlN1bGplXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiTlx1MDBFNHl0XHUwMEU0IHBhbGtraVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlBhbGtpbiB0XHUwMEU0eXRlXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIllsXHUwMEU0XCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIk9pa2VhXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkFsYVwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJWYXNlblwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlBhbGtpbiBzaWphaW50aVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIllsaFx1MDBFNFx1MDBFNGxsXHUwMEU0XCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiQWxoYWFsbGFcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlBhbGtpbiB0YXVzdGFcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlBhaW5pa2tlZW4gdGF1c3RhXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiUGFpbmlra2VlbiByZXVuYW4gdHl5bGlcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlBhaW5pa2tlZW4gcmV1bmFuIHZcdTAwRTRyaVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJQYWluaWtrZWVuIHRla3N0aW4gdlx1MDBFNHJpXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUGFsYXV0YSBwYWxra2lcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggU29sbXVuIHR5eWxpXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlZpaXZhbiB2XHUwMEU0cmlcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiVmlpdmFuIGxldmV5c1wiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlR5aGplbm5cdTAwRTQgbXVrYXV0dXNcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmV1bmFuIHB5XHUwMEY2cmlzdHlzXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIkV0c2kgc29sbXVqYS4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIkp1dXJpXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiVXVzaSBqdXVyaVwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJMYXBzaVwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogQXNldHVrc2V0XCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiS2llbGlcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiS1x1MDBFNHl0dFx1MDBGNmxpaXR0eW1cdTAwRTRuIGtpZWxpXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRlZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJWXHUwMEU0cml0ZWVtYVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJWYWFsZWFcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJUdW1tYVwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIk5cdTAwRTR5dFx1MDBFNCBwYWxra2lcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiTlx1MDBFNHl0XHUwMEU0IHBhbGtraVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJLYW5rYWFuIHRhdXN0YVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiVGF1c3Rhdlx1MDBFNHJpXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlRpZXRvamFcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaW9cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlRla2lqXHUwMEU0XCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJPYnNpZGlhbmluIG1vbmlwdW9saW5lbiBhdm9pbWVuIGxcdTAwRTRoZGVrb29kaW4gbWllbGxla2FydHRhc292ZWxsdXMgbXVrYXV0ZXR1aWxsYSB0eXlsZWlsbFx1MDBFNCwgc2F0ZWVua2Fhcml2aWl2b2lsbGEgamEgTWFya2Rvd24tdHVlbGxhLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlBcdTAwRTRpdml0ZXR0eVwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViLXZhcmFzdG9cIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlR1ZSB0ZWtpalx1MDBFNFx1MDBFNFwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlBpa2FuXHUwMEU0cHBcdTAwRTRpbWV0XCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIk11b2trYWEgcGlrYW5cdTAwRTRwcFx1MDBFNGltaVx1MDBFNFwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJNdW9ra2FhIHNvbG11YVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJMaXNcdTAwRTRcdTAwRTQgc2lzYXJ1c1wiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiTGlzXHUwMEU0XHUwMEU0IGxhcHNpXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJLb2hkaXN0YSBzb2xtdXVuXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIkt1bW9hXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlRlZSB1dWRlbGxlZW5cIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJSaXZpbnZhaWh0byAobXVva2thdWtzZXNzYSlcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiVmVkXHUwMEU0IGthbmdhc3RhXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiTFx1MDBFNGhlbm5cdTAwRTRcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiTG9pdG9ubmFcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJOb2xsYWEgem9vbWF1c1wiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiWWxcdTAwRjZzXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIkFsYXNcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiVmFzZW1tYWxsZVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiT2lrZWFsbGVcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlBhaW5hIG5cdTAwRTRwcFx1MDBFNGludFx1MDBFNC4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiVmllcml0eXMgamEgem9vbWF1c1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIktcdTAwRTRcdTAwRTRublx1MDBFNCBWLXZpZXJpdHlzXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiS1x1MDBFNFx1MDBFNG5uXHUwMEU0IEgtdmllcml0eXNcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJLXHUwMEU0XHUwMEU0bm5cdTAwRTQgem9vbWF1c1wiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiTXVva2thYSBsdW90YWVzc2FcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJNdW9ra2F1c3RpbGEgdXVzaWxsZSBzb2xtdWlsbGVcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiSnV1cmVuIG5pbWlcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlV1c2llbiBqdXVyaWVuIG9sZXR1c25pbWlcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIkxhcHNlbiBuaW1pXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiVXVzaWVuIGxhc3RlbiBvbGV0dXNuaW1pXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiS2lyam9pdGEgbXVva2F0YWtzZXNpXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlBhaW5hIG5cdTAwRTRwcFx1MDBFNGludFx1MDBFNCBtdW9rYXRha3Nlc2kgdmFsaXR0dWEgc29sbXVhXCIsXHJcbn07XHJcblxyXG5jb25zdCBfbm86IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUm90XCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgQW5ncmVcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBHalx1MDBGOHIgb21cIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIEthcnRcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZva3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlNcdTAwRjhrXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6U1x1MDBGOGsgfCBNZWxsb21yb206UmVkaWdlciB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk55IHJvdFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93bi1tb2R1c1wiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlN0aWxwYW5lbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZva3VzZXIgbm9kZVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJTXHUwMEY4ayBub2RlclwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIklubnN0aWxsaW5nZXJcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiWm9vbSBpbm5cIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlpvb20gdXRcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgRWdlbmRlZmluZXJ0XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTbGV0dCBhbGxlXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggUmVkaWdlciBzdGlsXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE55IHJvdFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBBbmdyZVwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBHalx1MDBGOHIgb21cIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBzdGlsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFJlZGlnZXJcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgS29waWVyXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgS2xpcHAgdXRcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIExpbSBpbm5cIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IEJhcm5cIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBWZW5zdHJlIGJhcm5cIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgU1x1MDBGOHNrZW5cIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTbGV0dFwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJTa2p1bCB2ZXJrdFx1MDBGOHlsaW5qZVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWwgc3RpbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIkJhcm5lbm9kZVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiUm90bm9kZVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkJha2dydW5uXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZWtzdGZhcmdlXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiU2tyaWZ0c3RcdTAwRjhycmVsc2VcIixcclxuICAgIFwic20uZm9udFwiOiBcIlNrcmlmdHR5cGVcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJLYW50c3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkthbnRmYXJnZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkthbnRicmVkZGVcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGl1c1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbi4gYnJlZGRlXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIk1pbi4gaFx1MDBGOHlkZVwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiRm9yYmluZGVsc2VcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cGVcIixcclxuICAgIFwic20uY29sb3JcIjogXCJGYXJnZVwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkJyZWRkZVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTGVuZ2RlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmVnbmJ1ZVwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiTm9kZXJldG5pbmdcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTXHUwMEY4c2tlbmF2c3RhbmRcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJIXHUwMEY4eXJlXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJWZW5zdHJlXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCZWdnZVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJWYWxnXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiVmFsZ2ZhcmdlXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiVmFsZ2JyZWRkZVwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJLb250dXJmb3Jza3l2bmluZ1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlJlZGlnZXJpbmdza29udHVyXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJSZWRpZ2VyaW5nc2tvbnR1cmJyZWRkZVwiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIlV0dmFsZ3NmYXJnZVwiLFxyXG4gICAgXCJvdXRsaW5lLnRpdGxlXCI6IFwiRGlzcG9zaXNqb25cIixcclxuICAgIFwib3V0bGluZS5lbXB0eVwiOiBcIkluZ2VuIGthcnQgXHUwMEU1cGVudFwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJUZWtzdGp1c3RlcmluZ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRla3N0dXRmeWxsaW5nXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiTGluamVoXHUwMEY4eWRlXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiTGVycmV0c2Jha2dydW5uXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiVGlsYmFrZXN0aWxsXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiTHVra1wiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlZpcyB2ZXJrdFx1MDBGOHlsaW5qZVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlZlcmt0XHUwMEY4eWxpbmpldXRmeWxsaW5nXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlRvcHBcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiSFx1MDBGOHlyZVwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJCdW5uXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlZlbnN0cmVcIixcclxuICAgIFwic20udGJQb3NcIjogXCJWZXJrdFx1MDBGOHlsaW5qZXBvc2lzam9uXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiVG9wcFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIkJ1bm5cIixcclxuICAgIFwic20udGJCZ1wiOiBcIlZlcmt0XHUwMEY4eWxpbmplYmFrZ3J1bm5cIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIktuYXBwYmFrZ3J1bm5cIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJLbmFwcGthbnRzdGlsXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJLbmFwcGthbnRmYXJnZVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJLbmFwcHRla3N0ZmFyZ2VcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJUaWxiYWtlc3RpbGwgdmVya3RcdTAwRjh5bGluamVcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggTm9kZXN0aWxcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiTGluamVmYXJnZVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMaW5qZWJyZWRkZVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkZqZXJuIHRpbHBhc25pbmdcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGl1c1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJTXHUwMEY4ayBub2Rlci4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJvdFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk55IHJvdFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJCYXJuXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBJbm5zdGlsbGluZ2VyXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3ByXHUwMEU1a1wiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJHcmVuc2Vzbml0dHNwclx1MDBFNWtcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiRmFyZ2V0ZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkx5c3RcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJNXHUwMEY4cmt0XCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiVmlzIHZlcmt0XHUwMEY4eWxpbmplXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlZpcyB2ZXJrdFx1MDBGOHlsaW5qZVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJMZXJyZXRzYmFrZ3J1bm5cIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkJha2dydW5uc2ZhcmdlXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIk9tXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2pvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiRm9yZmF0dGVyXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJGdW5rc2pvbnNyaWsgXHUwMEU1cGVuIGtpbGRla29kZSB0YW5rZWthcnQtYXBwIGZvciBPYnNpZGlhbiBtZWQgdGlscGFzc2VkZSBzdGlsZXIsIHJlZ25idWVmb3JiaW5kZWxzZXIgb2cgTWFya2Rvd24tc3RcdTAwRjh0dGUuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiT3BwZGF0ZXJ0XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItZGVwb3RcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlN0XHUwMEY4dHQgZm9yZmF0dGVyZW5cIixcclxuICAgIFwic2V0LmtleXNcIjogXCJIdXJ0aWd0YXN0ZXJcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiVGlscGFzcyBodXJ0aWd0YXN0ZXJcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiUmVkaWdlciBub2RlXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkxlZ2cgdGlsIHNcdTAwRjhza2VuXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJMZWdnIHRpbCBiYXJuXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJGb2t1c2VyIG5vZGVcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiQW5ncmVcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiR2pcdTAwRjhyIG9tXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiTGluamVza2lmdCAocmVkaWdlcmluZylcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiRHJhIGxlcnJldFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlpvb20gaW5uXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlpvb20gdXRcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJUaWxiYWtlc3RpbGwgem9vbVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiT3BwXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIk5lZFwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJWZW5zdHJlXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJIXHUwMEY4eXJlXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJUcnlrayBlbiB0YXN0Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJSdWxsaW5nIG9nIHpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnRlciBWLXJ1bGxpbmdcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJJbnZlcnRlciBILXJ1bGxpbmdcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnRlciB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJSZWRpZ2VyIHZlZCBvcHByZXR0ZWxzZVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIlJlZGlnZXJpbmdzbW9kdXMgdmVkIG55ZSBub2RlclwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJSb3RuYXZuXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJTdGFuZGFyZG5hdm4gZm9yIG55ZSByXHUwMEY4dHRlclwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiQmFybmVuYXZuXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYXZuIGZvciBueWUgYmFyblwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlNrcml2IGZvciBcdTAwRTUgcmVkaWdlcmVcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiU2tyaXYgZm9yIFx1MDBFNSByZWRpZ2VyZSB2YWxndCBub2RlXCIsXHJcbn07XHJcblxyXG5jb25zdCBfbmw6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgV29ydGVsXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgT25nZWRhYW5cIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBPcG5pZXV3XCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBLYWFydFwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlqbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZvY3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlpvZWtlblwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlpvZWtlbiB8IFNwYXRpZTpCZXdlcmtlbiB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk5pZXV3ZSB3b3J0ZWxcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24tbW9kdXNcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlqbHBhbmVlbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZvY3VzIG9wIGtub29wcHVudFwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJLbm9vcHB1bnRlbiB6b2VrZW5cIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJJbnN0ZWxsaW5nZW5cIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiSW56b29tZW5cIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlVpdHpvb21lblwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBBYW5nZXBhc3RcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEFsbGVzIHZlcndpamRlcmVuXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpamwgYmV3ZXJrZW5cIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTmlldXdlIHdvcnRlbFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBPbmdlZGFhblwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBPcG5pZXV3XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWxlIHN0aWpsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIEJld2Vya2VuXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlqbFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBLb3BpXHUwMEVCcmVuXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgS25pcHBlblwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgUGxha2tlblwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgS2luZFwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IExpbmtzIGtpbmRcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgQnJvZXIvenVzXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgVmVyd2lqZGVyZW5cIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiV2Vya2JhbGsgdmVyYmVyZ2VuXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbGUgc3RpamxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJLaW5ka25vb3BwdW50XCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJXb3J0ZWxrbm9vcHB1bnRcIixcclxuICAgIFwic20uYmdcIjogXCJBY2h0ZXJncm9uZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGVrc3RrbGV1clwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIkxldHRlcmdyb290dGVcIixcclxuICAgIFwic20uZm9udFwiOiBcIkxldHRlcnR5cGVcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJSYW5kc3RpamxcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJSYW5ka2xldXJcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJSYW5kYnJlZWR0ZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJSYW5kcmFkaXVzXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBicmVlZHRlXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIk1pbi4gaG9vZ3RlXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJWZXJiaW5kaW5nXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBlXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiS2xldXJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJCcmVlZHRlXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMZW5ndGVcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBSZWdlbmJvb2dcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlJpY2h0aW5nXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiVHVzc2VuYWZzdGFuZFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiTGlua3NcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJlaWRlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXRcIixcclxuICAgIFwic20uc2VsXCI6IFwiU2VsZWN0aWVcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJTZWxlY3RpZWtsZXVyXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiU2VsZWN0aWVicmVlZHRlXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIk9tdHJla29mZnNldFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIkJld2Vya2luZ3NvbXRyZWtrbGV1clwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiQmV3ZXJraW5nc29tdHJla2JyZWVkdGVcIixcclxuICAgIFwic20uYm94U2VsQ29sb3JcIjogXCJTZWxlY3RpZWtsZXVyXCIsXHJcbiAgICBcIm91dGxpbmUudGl0bGVcIjogXCJPdmVyemljaHRcIixcclxuICAgIFwib3V0bGluZS5lbXB0eVwiOiBcIkdlZW4gbWluZG1hcCBvcGVuXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRla3N0dWl0bGlqbmluZ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRla3N0dnVsbGluZ1wiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIlJlZ2VsaG9vZ3RlXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiQ2FudmFzIGFjaHRlcmdyb25kXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiSGVyc3RlbGxlblwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlNsdWl0ZW5cIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJXZXJrYmFsayB0b25lblwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIldlcmtiYWxrdnVsbGluZ1wiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJCb3ZlblwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJSZWNodHNcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiT25kZXJcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiTGlua3NcIixcclxuICAgIFwic20udGJQb3NcIjogXCJXZXJrYmFsa3Bvc2l0aWVcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJCb3ZlblwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIk9uZGVyXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJXZXJrYmFsayBhY2h0ZXJncm9uZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiS25vcCBhY2h0ZXJncm9uZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIktub3AgcmFuZHN0aWpsXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJLbm9wIHJhbmRrbGV1clwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJLbm9wIHRla3N0a2xldXJcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJXZXJrYmFsayBoZXJzdGVsbGVuXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEtub29wcHVudHN0aWpsXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkxpam5rbGV1clwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMaWpuYnJlZWR0ZVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkFhbnBhc3Npbmcgd2lzc2VuXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlJhbmRyYWRpdXNcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiS25vb3BwdW50ZW4gem9la2VuLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiV29ydGVsXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTmlldXdlIHdvcnRlbFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJLaW5kXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBJbnN0ZWxsaW5nZW5cIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJUYWFsXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIkludGVyZmFjZXRhYWxcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGhlbWFcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIktsZXVyZW50aGVtYVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJMaWNodFwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIkRvbmtlclwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIldlcmtiYWxrIHRvbmVuXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIldlcmtiYWxrIHRvbmVuXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIkNhbnZhcyBhY2h0ZXJncm9uZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQWNodGVyZ3JvbmRrbGV1clwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJPdmVyXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2llXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRldXJcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIlVpdGdlYnJlaWRlIG9wZW4gc291cmNlIG1pbmRtYXAtYXBwIHZvb3IgT2JzaWRpYW4gbWV0IGFhbmdlcGFzdGUgc3RpamxlbiwgcmVnZW5ib29ndmVyYmluZGluZ2VuIGVuIE1hcmtkb3duLW9uZGVyc3RldW5pbmcuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiQmlqZ2V3ZXJrdFwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViLXJlcG9zaXRvcnlcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIk9uZGVyc3RldW4gZGUgYXV0ZXVyXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiU25lbHRvZXRzZW5cIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiU25lbHRvZXRzZW4gYWFucGFzc2VuXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIktub29wcHVudCBiZXdlcmtlblwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJCcm9lci96dXMgdG9ldm9lZ2VuXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJLaW5kIHRvZXZvZWdlblwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiRm9jdXMgb3Aga25vb3BwdW50XCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIk9uZ2VkYWFuIG1ha2VuXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIk9wbmlldXdcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJSZWdlbGFmYnJla2luZyAoYmV3ZXJraW5nKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJDYW52YXMgc2xlcGVuXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiSW56b29tZW5cIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiVWl0em9vbWVuXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiWm9vbSBoZXJzdGVsbGVuXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJPbWhvb2dcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiT21sYWFnXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIkxpbmtzXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJSZWNodHNcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIkRydWsgb3AgZWVuIHRvZXRzLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJTY3JvbGxlbiBlbiB6b29tZW5cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJWZXJ0aWNhYWwgb21rZXJlblwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkhvcml6b250YWFsIG9ta2VyZW5cIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJab29tIG9ta2VyZW5cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIkJld2Vya2VuIGJpaiBhYW5tYWtlblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIkJld2Vya2luZ3Ntb2R1cyBiaWogbmlldXdlIGtub29wcHVudGVuXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIldvcnRlbG5hYW1cIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlN0YW5kYWFyZG5hYW0gdm9vciB3b3J0ZWxzXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJLaW5kbmFhbVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlN0YW5kYWFyZG5hYW0gdm9vciBraW5kZXJlblwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlR5cCBvbSB0ZSBiZXdlcmtlblwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJCZXdlcmsgZG9vciB0ZSB0eXBlbiBiaWogZ2VzZWxlY3RlZXJkIGtub29wcHVudFwiLFxyXG59O1xyXG5cclxuY29uc3QgX2xpOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFd1cnplbFwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFJcdTAwRkNja2dcdTAwRTRuZ2lnXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgV2llZGVyaG9sYVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgQ2hhcnRhXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJGb2t1c1wiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJTdWVjaGVcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpTdWVjaGUgfCBMZWVydGFzY2h0OkJlYXJiZWl0YSB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk5cdTAwRjZpaSBXdXJ6ZWxcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24tTW9kdXNcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlsLVBhbmVsXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiQ2hub3RhIGZva3Vzc2llcmFcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiQ2hub3RhIHN1ZWNoZVwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIklzdGVsbGlnYVwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJWZXJnclx1MDBGNlx1MDBERmVyYVwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiVmVya2xlaW5lcmFcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgRWlnZXRzXCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBBbGxpIGxcdTAwRjZzY2hhXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbCBiZWFyYmVpdGFcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTlx1MDBGNmlpIFd1cnplbFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBSXHUwMEZDY2tnXHUwMEU0bmdpZ1wiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBXaWVkZXJob2xhXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWxlIFN0aWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgQmVhcmJlaXRhXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIEtvcGllcmFcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBVc3NjaG5pZGFcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIElpZlx1MDBGQ2VnZVwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgQ2hpbmRcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBMZWNodHMgQ2hpbmRcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgR3NjaHdcdTAwRjZzY2h0ZXJcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBMXHUwMEY2c2NoYVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJMZWlzY2h0YSB2ZXJzdGVja2FcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsZSBTdGlsXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiQ2hpbmQtQ2hub3RhXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJXdXJ6ZWwtQ2hub3RhXCIsXHJcbiAgICBcInNtLmJnXCI6IFwiSGludGVyZ3J1bmRcIixcclxuICAgIFwic20udGV4dFwiOiBcIlRleHRmYXJiXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiU2NocmlmdGdyXHUwMEY2c3NlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJTY2hyaWZ0XCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiUmFuZHN0aWxcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJSYW5kZmFyYlwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlJhbmRicmVpdGlcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiUnVuZHVuZ1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbi4gQnJlaXRpXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIk1pbi4gSFx1MDBGNmNoaVwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiVmVyYmluZGlnXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBcIixcclxuICAgIFwic20uY29sb3JcIjogXCJGYXJiXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiQnJlaXRpXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMXHUwMEU0bmdpXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUlx1MDBFNGdhYm9nYVwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiUmljaHRpZ1wiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIkdlc2Nod2lzdGVyYWJzdGFuZFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiTGVjaHRzXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCZWlkaVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dGFcIixcclxuICAgIFwic20uc2VsXCI6IFwiVXN3YWhsXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiVXN3YWhsZmFyYlwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlVzd2FobGJyZWl0aVwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJLb250dXJ2ZXJzYXR6XCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiQmVhcmJlaXRpZ3NyYWhtZWZhcmJcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkJlYXJiZWl0aWdzcmFobWVicmVpdGlcIixcclxuICAgIFwic20uYm94U2VsQ29sb3JcIjogXCJBdXN3YWhsZmFyYmVcIixcclxuICAgIFwib3V0bGluZS50aXRsZVwiOiBcIkdsaWVkZXJ1bmdcIixcclxuICAgIFwib3V0bGluZS5lbXB0eVwiOiBcIktlaW5lIE1pbmRtYXAgb2ZmZW5cIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiVGV4dHVzcmljaHRpZ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRleHRhYnN0YW5kXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiWmlsZWhcdTAwRjZjaGlcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJMZWlud2FuZGhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiWnJ1Z2dzZXR6YVwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlp1YW1hY2hhXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiTGVpc2NodGEgemVpZ2FcIixcclxuICAgIFwic20udGJQYWRcIjogXCJMZWlzY2h0YS1BYnN0YW5kXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIk9iYVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJSZWNodHNcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiVW50YVwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJMZWNodHNcIixcclxuICAgIFwic20udGJQb3NcIjogXCJMZWlzY2h0YS1Qb3NpdGlvblwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIk9iYVwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIlVudGFcIixcclxuICAgIFwic20udGJCZ1wiOiBcIkxlaXNjaHRhaGludGVyZ3J1bmRcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIkNobm9wZmhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiQ2hub3BmcmFuZHN0aWxcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIkNobm9wZnJhbmRmYXJiXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIkNobm9wZnRleHRmYXJiXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiTGVpc2NodGEgenJ1Z2dzZXR6YVwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBDaG5vdGEtU3RpbFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJMaW5pZWZhcmJcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGluaWVicmVpdGlcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJBcFx1MDBFNHNzaWcgbFx1MDBGNnNjaGVcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUnVuZHVuZ1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJDaG5vdGEgc3VlY2hlLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiV3VyemVsXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTlx1MDBGNmlpIFd1cnplbFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJDaGluZFwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogSXN0ZWxsaWdhXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3Byb2NoXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIk9iZXJmbFx1MDBFNGNoYS1TcHJvY2hcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGhlbWFcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIkZhcmJ0aGVtYVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJIZWxsXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiRHVua2VsXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiTGVpc2NodGEgemVpZ2FcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiTGVpc2NodGEgemVpZ2FcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiTGVpbndhbmRoaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiSGludGVyZ3J1bmRmYXJiXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1MDBEQ2JlclwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpb25cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkF1dG9yXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJGdW5rdGlvbnNyaWljaGkgT3Blbi1Tb3VyY2UgTWluZG1hcC1BcHAgZlx1MDBGQ3IgT2JzaWRpYW4gbWl0IGVpZ2VuYSBTdGlsYSwgUlx1MDBFNGdhYm9nYS1WZXJiaW5kaWdhIHVuZCBNYXJrZG93bi1TdXBwb3J0LlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIkFrdHVhbGlzaWVydFwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViLUFibGFnYVwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiT3Blbi1Tb3VyY2UtQXV0b3IgdW5kZXJzdFx1MDBGQ3R6YVwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlRhc3Rla29tYmluYXRpb25hXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlRhc3Rla29tYmluYXRpb25hIGFwYXNzYVwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJDaG5vdGEgYmVhcmJlaXRhXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkdzY2h3XHUwMEY2c2NodGVyIGRlenVlZlx1MDBGQ2VnYVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiQ2hpbmQgZGV6dWVmXHUwMEZDZWdhXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJDaG5vdGEgZm9rdXNzaWVyYVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJSXHUwMEZDY2tnXHUwMEU0bmdpZ1wiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJXaWVkZXJob2xhXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiWmlsYXVtYnJ1Y2ggKGJpbSBCZWFyYmVpdGEpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkxlaW53YW5kIHpcdTAwRkNjaGFcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJWZXJnclx1MDBGNlx1MDBERmVyYVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJWZXJrbGVpbmVyYVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlpvb20genJ1Z2dzZXR6YVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiVWZcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiQWJcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiTGVjaHRzXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJSZWNodHNcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlRhc2NodCBkclx1MDBGQ2NrYS4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiU2Nyb2xsYSB1bmQgWm9vbWFcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJWZXJ0aWthbHMgU2Nyb2xsYSB1bWtlaHJhXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSG9yaXpvbnRhbHMgU2Nyb2xsYSB1bWtlaHJhXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiWm9vbXJpY2h0aWcgdW1rZWhyYVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiQmkgRXJzdGVsbGlnIGJlYXJiZWl0YVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIkJlYXJiZWl0aWdzbW9kdXMgYmkgblx1MDBGNmllIENobm90YVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJXdXJ6ZWxuYW1cIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmFtIGZcdTAwRkNyIG5cdTAwRjZpaSBXdXJ6bGFcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIkNoaW5kbmFtXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYW0gZlx1MDBGQ3Igblx1MDBGNmlpIENoaW5kZXJcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJUaXBwYSB6dW0gQmVhcmJlaXRhXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIkJpIHVzZ3dcdTAwRTRobHRlbSBDaG5vdGEgYmVhcmJlaXRhXCIsXHJcbn07XHJcblxyXG5jb25zdCBfZGE6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUm9kXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgRm9ydHJ5ZFwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIEdlbnRhZ1wiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgS29ydFwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRm9rdXNcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiU1x1MDBGOGdcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpTXHUwMEY4ZyB8IE1lbGxlbXJ1bTpSZWRpZ1x1MDBFOXIgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOeSByb2RcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24tdGlsc3RhbmRcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlscGFuZWxcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJGb2t1c1x1MDBFOXIgcFx1MDBFNSBrbnVkZVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJTXHUwMEY4ZyBpIGtudWRlclwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIkluZHN0aWxsaW5nZXJcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiWm9vbSBpbmRcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlpvb20gdWRcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgQnJ1Z2VyZGVmaW5lcmV0XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTbGV0IGFsbGVcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBSZWRpZ1x1MDBFOXIgc3RpbFwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOeSByb2RcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgRm9ydHJ5ZFwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBHZW50YWdcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBzdGlsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFJlZGlnXHUwMEU5clwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBLb3BpXHUwMEU5clwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIEtsaXBcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIEluZHNcdTAwRTZ0XCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBCYXJuXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgVmVuc3RyZSBiYXJuXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFNcdTAwRjhza2VuZGVcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTbGV0XCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlNranVsIHZcdTAwRTZya3RcdTAwRjhqc2xpbmplXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBzdGlsXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiQmFybmVrbnVkZVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiUm9ka251ZGVcIixcclxuICAgIFwic20uYmdcIjogXCJCYWdncnVuZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGVrc3RmYXJ2ZVwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlNrcmlmdHN0XHUwMEY4cnJlbHNlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJTa3JpZnR0eXBlXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiS2FudHN0aWxcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJLYW50ZmFydmVcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJLYW50YnJlZGRlXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIkthbnRyYWRpdXNcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJNaW4uIGJyZWRkZVwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJNaW4uIGhcdTAwRjhqZGVcIixcclxuICAgIFwic20uY29ublwiOiBcIkZvcmJpbmRlbHNlXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBlXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiRmFydmVcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJCcmVkZGVcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkxcdTAwRTZuZ2RlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJSZWduYnVlXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJLbnVkZXJldG5pbmdcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTXHUwMEY4c2tlbmRlYWZzdGFuZFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIkhcdTAwRjhqcmVcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlZlbnN0cmVcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJlZ2dlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXRcIixcclxuICAgIFwic20uc2VsXCI6IFwiTWFya2VyaW5nXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiTWFya2VyaW5nc2ZhcnZlXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiTWFya2VyaW5nc2JyZWRkZVwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJLb250dXJmb3Jza3lkbmluZ1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlJlZGlnZXJpbmdza29udHVyZmFydmVcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlJlZGlnZXJpbmdza29udHVyYnJlZGRlXCIsXHJcbiAgICBcInNtLmJveFNlbENvbG9yXCI6IFwiVmFsZ2ZhcnZlXCIsXHJcbiAgICBcIm91dGxpbmUudGl0bGVcIjogXCJPdmVyc2lndFwiLFxyXG4gICAgXCJvdXRsaW5lLmVtcHR5XCI6IFwiSW5nZW4ga29ydCBcdTAwRTViZW50XCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRla3N0anVzdGVyaW5nXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGVrc3R1ZGZ5bGRuaW5nXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiTGluamVoXHUwMEY4amRlXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiTFx1MDBFNnJyZWRzYmFnZ3J1bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJOdWxzdGlsXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiTHVrXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiVmlzIHZcdTAwRTZya3RcdTAwRjhqc2xpbmplXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiVlx1MDBFNnJrdFx1MDBGOGpzbGluamV1ZGZ5bGRuaW5nXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlRvcFwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJIXHUwMEY4anJlXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkJ1bmRcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiVmVuc3RyZVwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlZcdTAwRTZya3RcdTAwRjhqc2xpbmplcG9zaXRpb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJUb3BcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJCdW5kXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJWXHUwMEU2cmt0XHUwMEY4anNsaW5qZWJhZ2dydW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJLbmFwYmFnZ3J1bmRcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJLbmFwIGthbnRzdGlsXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJLbmFwIGthbnRmYXJ2ZVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJLbmFwIHRla3N0ZmFydmVcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJOdWxzdGlsIHZcdTAwRTZya3RcdTAwRjhqc2xpbmplXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEtudWRlc3RpbFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJMaW5qZWZhcnZlXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxpbmplYnJlZGRlXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiUnlkIHRpbHBhc25pbmdcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGl1c1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJTXHUwMEY4ZyBpIGtudWRlci4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJvZFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk55IHJvZFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJCYXJuXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBJbmRzdGlsbGluZ2VyXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3Byb2dcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiR3JcdTAwRTZuc2VmbGFkZXNwcm9nXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRlbWFcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIkZhcnZldGVtYVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJMeXN0XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiTVx1MDBGOHJrdFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlZpcyB2XHUwMEU2cmt0XHUwMEY4anNsaW5qZVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJWaXMgdlx1MDBFNnJrdFx1MDBGOGpzbGluamVcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiTFx1MDBFNnJyZWRzYmFnZ3J1bmRcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkJhZ2dydW5kc2ZhcnZlXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIk9tXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiRm9yZmF0dGVyXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJFbiBmdW5rdGlvbnNyaWcgb3BlbiBzb3VyY2UtdGFua2Vrb3J0YXBwIHRpbCBPYnNpZGlhbiBtZWQgYnJ1Z2VyZGVmaW5lcmVkZSBzdGlsYXJ0ZXIsIHJlZ25idWVmb3JiaW5kZWxzZXIsIG11bHRpdmFsZywgdHJcdTAwRTZrLW9nLXNsaXAgb2cgTWFya2Rvd24taW1wb3J0L2Vrc3BvcnQuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiT3BkYXRlcmV0XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItYXJraXZcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlN0XHUwMEY4dCBvcGVuIHNvdXJjZS1mb3JmYXR0ZXJlblwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlRhc3RhdHVyZ2VudmVqZVwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJUaWxwYXMgZ2VudmVqZVwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJSZWRpZ1x1MDBFOXIga251ZGVcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiVGlsZlx1MDBGOGogc1x1MDBGOHNrZW5kZVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiVGlsZlx1MDBGOGogYmFyblwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiRm9rdXNcdTAwRTlyIHBcdTAwRTUga251ZGVcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiRm9ydHJ5ZFwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJHZW50YWdcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJMaW5qZXNraWZ0ICh1bmRlciByZWRpZ2VyaW5nKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJUclx1MDBFNmsgbFx1MDBFNnJyZWRcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJab29tIGluZFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJab29tIHVkXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiTnVsc3RpbCB6b29tXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJOYXZpZ1x1MDBFOXIgb3BcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiTmF2aWdcdTAwRTlyIG5lZFwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJOYXZpZ1x1MDBFOXIgdmVuc3RyZVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWdcdTAwRTlyIGhcdTAwRjhqcmVcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlRyeWsgcFx1MDBFNSBlbiB0YXN0Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJSdWxuaW5nIG9nIHpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnRlciBsb2RyZXQgcnVsbmluZ1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVydGVyIHZhbmRyZXQgcnVsbmluZ1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGVyIHpvb21yZXRuaW5nXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJSZWRpZ1x1MDBFOXIgdmVkIG9wcmV0dGVsc2VcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJSZWRpZ2VyaW5nc3RpbHN0YW5kIHZlZCBueWUga251ZGVyXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlJvZG5hdm5cIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmF2biBmb3IgbnllIHJcdTAwRjhkZGVyXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJCYXJuZW5hdm5cIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJTdGFuZGFyZG5hdm4gZm9yIG55ZSBiXHUwMEY4cm5cIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJTa3JpdiBmb3IgYXQgcmVkaWdlcmVcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiUmVkaWdcdTAwRTlyIHZlZCBhdCBza3JpdmUgblx1MDBFNXIgZW4ga251ZGUgZXIgdmFsZ3RcIixcclxufTtcclxuXHJcbmNvbnN0IF9oZTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTA1RTlcdTA1RDVcdTA1RThcdTA1RTlcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTA1RDFcdTA1RDhcdTA1RENcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTA1RDFcdTA1RTZcdTA1RTIgXHUwNUU5XHUwNUQ1XHUwNUQxXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBcdTA1REVcdTA1RTRcdTA1RDRcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiXHUwNURFXHUwNUQ5XHUwNUU3XHUwNUQ1XHUwNUQzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlx1MDVEN1x1MDVEOVx1MDVFNFx1MDVENVx1MDVFOVwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlx1MDVEN1x1MDVEOVx1MDVFNFx1MDVENVx1MDVFOSB8IFx1MDVFOFx1MDVENVx1MDVENVx1MDVENzpcdTA1RTJcdTA1RThcdTA1RDlcdTA1REJcdTA1RDQgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJcdTA1RTlcdTA1RDVcdTA1RThcdTA1RTkgXHUwNUQ3XHUwNUQzXHUwNUU5XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIlx1MDVERVx1MDVFNlx1MDVEMSBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlx1MDVEN1x1MDVEQ1x1MDVENVx1MDVFMFx1MDVEOVx1MDVFQSBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REZcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJcdTA1REVcdTA1RTdcdTA1RDMgXHUwNUUyXHUwNURDIFx1MDVFNlx1MDVENVx1MDVERVx1MDVFQVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJcdTA1RDdcdTA1RTRcdTA1RTkgXHUwNUU2XHUwNURFXHUwNUVBXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHUwNUQ0XHUwNUQyXHUwNUQzXHUwNUU4XHUwNUQ1XHUwNUVBXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1MDVENFx1MDVEMlx1MDVEM1x1MDVEQ1wiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHUwNUQ0XHUwNUU3XHUwNUQ4XHUwNURGXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1MDVERVx1MDVENVx1MDVFQVx1MDVEMFx1MDVERCBcdTA1RDBcdTA1RDlcdTA1RTlcdTA1RDlcdTA1RUFcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDVERVx1MDVEN1x1MDVEOVx1MDVFN1x1MDVENCBcdTA1RDJcdTA1RDVcdTA1RThcdTA1RTRcdTA1RUFcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA1RTJcdTA1RThcdTA1RDVcdTA1REEgXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOSBcdTA1RDdcdTA1RDNcdTA1RTlcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHUwNUQxXHUwNUQ4XHUwNURDXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFx1MDVEMVx1MDVFNlx1MDVFMiBcdTA1RTlcdTA1RDVcdTA1RDFcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDVFMVx1MDVEMlx1MDVFMFx1MDVENVx1MDVERiBcdTA1REJcdTA1RENcdTA1RENcdTA1RDlcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHUwNUUyXHUwNUU4XHUwNUQ1XHUwNURBXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REZcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgXHUwNUQ0XHUwNUUyXHUwNUVBXHUwNUU3XCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgXHUwNUQyXHUwNUQ2XHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBcdTA1RDRcdTA1RDNcdTA1RDFcdTA1RTdcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IFx1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFx1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMCBcdTA1RTlcdTA1REVcdTA1RDBcdTA1RENcdTA1RDlcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgXHUwNUQwXHUwNUQ3XCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHUwNURFXHUwNUQ3XHUwNUU3XCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlx1MDVENFx1MDVFMVx1MDVFQVx1MDVFOCBcdTA1RTFcdTA1RThcdTA1RDJcdTA1REMgXHUwNURCXHUwNURDXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDVFMVx1MDVEMlx1MDVFMFx1MDVENVx1MDVERiBcdTA1REJcdTA1RENcdTA1RENcdTA1RDlcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJcdTA1RTZcdTA1RDVcdTA1REVcdTA1RUEgXHUwNUU2XHUwNUQwXHUwNUU2XHUwNUQwXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJcdTA1RTZcdTA1RDVcdTA1REVcdTA1RUEgXHUwNUU5XHUwNUQ1XHUwNUU4XHUwNUU5XCIsXHJcbiAgICBcInNtLmJnXCI6IFwiXHUwNUU4XHUwNUU3XHUwNUUyXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNUQ4XHUwNUU3XHUwNUUxXHUwNUQ4XCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiXHUwNUQyXHUwNUQ1XHUwNUQzXHUwNURDIFx1MDVEMlx1MDVENVx1MDVFNFx1MDVERlwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiXHUwNUQyXHUwNUQ1XHUwNUU0XHUwNURGXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGIFx1MDVEMlx1MDVEMVx1MDVENVx1MDVEQ1wiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMiBcdTA1RDJcdTA1RDFcdTA1RDVcdTA1RENcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJcdTA1RTJcdTA1RDVcdTA1RDFcdTA1RDkgXHUwNUQyXHUwNUQxXHUwNUQ1XHUwNURDXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlx1MDVFMlx1MDVEOVx1MDVEMlx1MDVENVx1MDVEQyBcdTA1RTRcdTA1RDlcdTA1RTBcdTA1RDVcdTA1RUFcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJcdTA1RThcdTA1RDVcdTA1RDdcdTA1RDEgXHUwNURFXHUwNUQ5XHUwNUUwXHUwNUQ5XHUwNURFXHUwNURDXHUwNUQ5XCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIlx1MDVEMlx1MDVENVx1MDVEMVx1MDVENCBcdTA1REVcdTA1RDlcdTA1RTBcdTA1RDlcdTA1REVcdTA1RENcdTA1RDlcIixcclxuICAgIFwic20uY29ublwiOiBcIlx1MDVFN1x1MDVENSBcdTA1RDdcdTA1RDlcdTA1RDFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1MDVFMVx1MDVENVx1MDVEMlwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMlwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1MDVFOFx1MDVENVx1MDVEN1x1MDVEMVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHUwNUQwXHUwNUQ1XHUwNUU4XHUwNURBXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdTA1RTdcdTA1RTlcdTA1RUFcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlx1MDVEQlx1MDVEOVx1MDVENVx1MDVENVx1MDVERiBcdTA1RTZcdTA1REVcdTA1RUFcdTA1RDlcdTA1RERcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJcdTA1REVcdTA1RThcdTA1RDVcdTA1RDVcdTA1RDcgXHUwNUQxXHUwNUQ5XHUwNURGIFx1MDVEMFx1MDVEN1x1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlx1MDVEOVx1MDVERVx1MDVEOVx1MDVERlwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiXHUwNUU5XHUwNURFXHUwNUQwXHUwNURDXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJcdTA1RTlcdTA1RTBcdTA1RDlcdTA1RDRcdTA1RERcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJcdTA1RENcdTA1RDVcdTA1RDcgXHUwNUU2XHUwNUQxXHUwNUUyXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlx1MDVEMVx1MDVEN1x1MDVEOVx1MDVFOFx1MDVENFwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMiBcdTA1RDFcdTA1RDdcdTA1RDlcdTA1RThcdTA1RDRcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJcdTA1RTJcdTA1RDVcdTA1RDFcdTA1RDkgXHUwNUQxXHUwNUQ3XHUwNUQ5XHUwNUU4XHUwNUQ0XCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1MDVENFx1MDVEOVx1MDVFMVx1MDVEOCBcdTA1REVcdTA1RUFcdTA1RDBcdTA1RThcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNURFXHUwNUVBXHUwNUQwXHUwNUU4IFx1MDVFMlx1MDVFOFx1MDVEOVx1MDVEQlx1MDVENFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiXHUwNUUyXHUwNUQ1XHUwNUQxXHUwNUQ5IFx1MDVERVx1MDVFQVx1MDVEMFx1MDVFOCBcdTA1RTJcdTA1RThcdTA1RDlcdTA1REJcdTA1RDRcIixcclxuICAgIFwic20uYm94U2VsQ29sb3JcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNUQxXHUwNUQ3XHUwNUQ5XHUwNUU4XHUwNUQ0XCIsXHJcbiAgICBcIm91dGxpbmUudGl0bGVcIjogXCJcdTA1REVcdTA1RUFcdTA1RDBcdTA1RThcIixcclxuICAgIFwib3V0bGluZS5lbXB0eVwiOiBcIlx1MDVEMFx1MDVEOVx1MDVERiBcdTA1REVcdTA1RTRcdTA1RDQgXHUwNUU0XHUwNUVBXHUwNUQ1XHUwNUQ3XHUwNUQ0XCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1MDVEOVx1MDVEOVx1MDVFOVx1MDVENVx1MDVFOCBcdTA1RDhcdTA1RTdcdTA1RTFcdTA1RDhcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJcdTA1RThcdTA1RDlcdTA1RTRcdTA1RDVcdTA1RDMgXHUwNUQ4XHUwNUU3XHUwNUUxXHUwNUQ4XCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHUwNUQyXHUwNUQ1XHUwNUQxXHUwNUQ0IFx1MDVFOVx1MDVENVx1MDVFOFx1MDVENFwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1RDFcdTA1RDMgXHUwNUU2XHUwNUQ5XHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiXHUwNUQwXHUwNUU0XHUwNUUxXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiXHUwNUUxXHUwNUQyXHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiXHUwNUQ0XHUwNUU2XHUwNUQyIFx1MDVFMVx1MDVFOFx1MDVEMlx1MDVEQyBcdTA1REJcdTA1RENcdTA1RDlcdTA1RERcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdTA1RThcdTA1RDlcdTA1RTRcdTA1RDVcdTA1RDMgXHUwNUUxXHUwNUU4XHUwNUQyXHUwNURDXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1MDVFMlx1MDVEQ1x1MDVEOVx1MDVENVx1MDVERlwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTA1RDlcdTA1REVcdTA1RDlcdTA1REZcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHUwNUVBXHUwNUQ3XHUwNUVBXHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1MDVFOVx1MDVERVx1MDVEMFx1MDVEQ1wiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MDVERVx1MDVEOVx1MDVFN1x1MDVENVx1MDVERCBcdTA1RTFcdTA1RThcdTA1RDJcdTA1RENcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTA1RTJcdTA1RENcdTA1RDlcdTA1RDVcdTA1REZcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTA1RUFcdTA1RDdcdTA1RUFcdTA1RDVcdTA1REZcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1RTFcdTA1RThcdTA1RDJcdTA1RENcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1REJcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REYgXHUwNUQyXHUwNUQxXHUwNUQ1XHUwNURDIFx1MDVEQlx1MDVFNFx1MDVFQVx1MDVENVx1MDVFOFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVEMlx1MDVEMVx1MDVENVx1MDVEQyBcdTA1REJcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVEOFx1MDVFN1x1MDVFMVx1MDVEOCBcdTA1REJcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTA1RDBcdTA1RTRcdTA1RTEgXHUwNUUxXHUwNUU4XHUwNUQyXHUwNURDIFx1MDVEQlx1MDVEQ1x1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REYgXHUwNUU2XHUwNUQ1XHUwNURFXHUwNUVBXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMiBcdTA1RTdcdTA1RDVcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHUwNUUyXHUwNUQ1XHUwNUQxXHUwNUQ5IFx1MDVFN1x1MDVENVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlx1MDVFMFx1MDVFN1x1MDVENCBcdTA1RDRcdTA1RUFcdTA1RDBcdTA1REVcdTA1RDQgXHUwNUQwXHUwNUQ5XHUwNUU5XHUwNUQ5XHUwNUVBXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlx1MDVFMlx1MDVEOVx1MDVEMlx1MDVENVx1MDVEQyBcdTA1RTRcdTA1RDlcdTA1RTBcdTA1RDVcdTA1RUFcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiXHUwNUQ3XHUwNUU0XHUwNUU5IFx1MDVFNlx1MDVERVx1MDVFQVx1MDVEOVx1MDVERC4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOVwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOSBcdTA1RDdcdTA1RDNcdTA1RTlcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHUwNUU2XHUwNUQwXHUwNUU2XHUwNUQwXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIlx1MDVENFx1MDVEMlx1MDVEM1x1MDVFOFx1MDVENVx1MDVFQSBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdTA1RTlcdTA1RTRcdTA1RDRcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHUwNUU5XHUwNUU0XHUwNUVBIFx1MDVERVx1MDVERVx1MDVFOVx1MDVFN1wiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdTA1RTJcdTA1RThcdTA1REJcdTA1RUEgXHUwNUUwXHUwNUQ1XHUwNUU5XHUwNUQwXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJcdTA1RTJcdTA1RThcdTA1REJcdTA1RUEgXHUwNUU2XHUwNUQxXHUwNUUyXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIlx1MDVEMVx1MDVENFx1MDVEOVx1MDVFOFwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIlx1MDVEQlx1MDVENFx1MDVENFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlx1MDVENFx1MDVFNlx1MDVEMiBcdTA1RTFcdTA1RThcdTA1RDJcdTA1REMgXHUwNURCXHUwNURDXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1MDVENFx1MDVFNlx1MDVEMiBcdTA1RTFcdTA1RThcdTA1RDJcdTA1REMgXHUwNURCXHUwNURDXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1RDFcdTA1RDMgXHUwNUU2XHUwNUQ5XHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNUU4XHUwNUU3XHUwNUUyXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1MDVEMFx1MDVENVx1MDVEM1x1MDVENVx1MDVFQVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1MDVEMlx1MDVFOFx1MDVFMVx1MDVENFwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHUwNURFXHUwNUQ3XHUwNUQxXHUwNUU4XCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJcdTA1RDBcdTA1RTRcdTA1RENcdTA1RDlcdTA1RTdcdTA1RTZcdTA1RDlcdTA1RDlcdTA1RUEgXHUwNURFXHUwNUU0XHUwNUVBIFx1MDVEN1x1MDVFOVx1MDVEOVx1MDVEMVx1MDVENCBcdTA1RDFcdTA1RTdcdTA1RDVcdTA1RDMgXHUwNUU0XHUwNUVBXHUwNUQ1XHUwNUQ3IFx1MDVFMlx1MDVFOVx1MDVEOVx1MDVFOFx1MDVENCBcdTA1RDFcdTA1RUFcdTA1REJcdTA1RDVcdTA1RTBcdTA1RDVcdTA1RUEgXHUwNUUyXHUwNUQxXHUwNUQ1XHUwNUU4IE9ic2lkaWFuIFx1MDVFMlx1MDVERCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1RTBcdTA1RDVcdTA1RUEgXHUwNURFXHUwNUQ1XHUwNUVBXHUwNUQwXHUwNURFXHUwNUQ5XHUwNURELCBcdTA1RDdcdTA1RDlcdTA1RDFcdTA1RDVcdTA1RThcdTA1RDkgXHUwNUU3XHUwNUU5XHUwNUVBLCBcdTA1RDFcdTA1RDdcdTA1RDlcdTA1RThcdTA1RDQgXHUwNURFXHUwNUU4XHUwNUQ1XHUwNUQxXHUwNUQ0LCBcdTA1RDJcdTA1RThcdTA1RDlcdTA1RThcdTA1RDQgXHUwNUQ1XHUwNUU5XHUwNUQ3XHUwNUU4XHUwNUQ1XHUwNUU4IFx1MDVENVx1MDVEOVx1MDVEOVx1MDVEMVx1MDVENVx1MDVEMC9cdTA1RDlcdTA1RDlcdTA1RTZcdTA1RDVcdTA1RDAgTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHUwNUUyXHUwNUQ1XHUwNUQzXHUwNURCXHUwNURGXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJcdTA1REVcdTA1RDBcdTA1RDJcdTA1RTggR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdTA1RUFcdTA1REVcdTA1RDVcdTA1REEgXHUwNUQxXHUwNURFXHUwNUQ3XHUwNUQxXHUwNUU4IFx1MDVENFx1MDVFN1x1MDVENVx1MDVEMyBcdTA1RDRcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RDdcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJcdTA1RTdcdTA1RDlcdTA1RTZcdTA1RDVcdTA1RThcdTA1RDkgXHUwNURFXHUwNUU3XHUwNURDXHUwNUQzXHUwNUVBXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1MDVENFx1MDVFQVx1MDVEMFx1MDVERCBcdTA1RTdcdTA1RDlcdTA1RTZcdTA1RDVcdTA1RThcdTA1RDlcdTA1RERcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUwNUUyXHUwNUU4XHUwNUQ1XHUwNURBIFx1MDVFNlx1MDVENVx1MDVERVx1MDVFQVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJcdTA1RDRcdTA1RDVcdTA1RTFcdTA1RTMgXHUwNUQwXHUwNUQ3XCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJcdTA1RDRcdTA1RDVcdTA1RTFcdTA1RTMgXHUwNUU2XHUwNUQwXHUwNUU2XHUwNUQwXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdTA1REVcdTA1RTdcdTA1RDMgXHUwNUUyXHUwNURDIFx1MDVFNlx1MDVENVx1MDVERVx1MDVFQVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTA1RDFcdTA1RDhcdTA1RENcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHUwNUQxXHUwNUU2XHUwNUUyIFx1MDVFOVx1MDVENVx1MDVEMVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1MDVFOVx1MDVEMVx1MDVEOVx1MDVFOFx1MDVFQSBcdTA1RTlcdTA1RDVcdTA1RThcdTA1RDQgKFx1MDVEMVx1MDVFMlx1MDVFOFx1MDVEOVx1MDVEQlx1MDVENClcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiXHUwNUQyXHUwNUU4XHUwNUQ1XHUwNUU4IFx1MDVEMVx1MDVEMyBcdTA1RTZcdTA1RDlcdTA1RDVcdTA1RThcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTA1RDRcdTA1RDJcdTA1RDNcdTA1RENcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHUwNUQ0XHUwNUU3XHUwNUQ4XHUwNURGXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUwNUQwXHUwNUU0XHUwNUUxIFx1MDVFQVx1MDVFN1x1MDVFOFx1MDVEOVx1MDVEMVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHUwNUUwXHUwNUQ1XHUwNUQ1XHUwNUQ4IFx1MDVEQ1x1MDVERVx1MDVFMlx1MDVEQ1x1MDVENFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTA1RTBcdTA1RDVcdTA1RDVcdTA1RDggXHUwNURDXHUwNURFXHUwNUQ4XHUwNUQ0XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1MDVFMFx1MDVENVx1MDVENVx1MDVEOCBcdTA1RTlcdTA1REVcdTA1RDBcdTA1RENcdTA1RDRcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1MDVFMFx1MDVENVx1MDVENVx1MDVEOCBcdTA1RDlcdTA1REVcdTA1RDlcdTA1RTBcdTA1RDRcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1MDVEQ1x1MDVEN1x1MDVFNSBcdTA1RTJcdTA1REMgXHUwNURFXHUwNUU3XHUwNUU5Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJcdTA1RDJcdTA1RENcdTA1RDlcdTA1RENcdTA1RDQgXHUwNUQ1XHUwNUVBXHUwNUU3XHUwNUU4XHUwNUQ5XHUwNUQxXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHUwNUQ0XHUwNUU0XHUwNUQ1XHUwNURBIFx1MDVEMlx1MDVEQ1x1MDVEOVx1MDVEQ1x1MDVENCBcdTA1RDBcdTA1RTBcdTA1REJcdTA1RDlcdTA1RUFcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJcdTA1RDRcdTA1RTRcdTA1RDVcdTA1REEgXHUwNUQyXHUwNURDXHUwNUQ5XHUwNURDXHUwNUQ0IFx1MDVEMFx1MDVENVx1MDVFNFx1MDVFN1x1MDVEOVx1MDVFQVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MDVENFx1MDVFNFx1MDVENVx1MDVEQSBcdTA1REJcdTA1RDlcdTA1RDVcdTA1RDVcdTA1REYgXHUwNUVBXHUwNUU3XHUwNUU4XHUwNUQ5XHUwNUQxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTA1RTJcdTA1RThcdTA1RDVcdTA1REEgXHUwNUQxXHUwNUQ5XHUwNUU2XHUwNUQ5XHUwNUU4XHUwNUQ0XCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUwNURFXHUwNUU2XHUwNUQxIFx1MDVFMlx1MDVFOFx1MDVEOVx1MDVEQlx1MDVENCBcdTA1RDFcdTA1RTJcdTA1RUEgXHUwNUQ5XHUwNUU2XHUwNUQ5XHUwNUU4XHUwNUVBIFx1MDVFNlx1MDVERVx1MDVFQVx1MDVEOVx1MDVERCBcdTA1RDdcdTA1RDNcdTA1RTlcdTA1RDlcdTA1RERcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHUwNUU5XHUwNUREIFx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHUwNUU5XHUwNUREIFx1MDVEMVx1MDVFOFx1MDVEOVx1MDVFOFx1MDVFQSBcdTA1REVcdTA1RDdcdTA1RDNcdTA1REMgXHUwNURDXHUwNUU5XHUwNUQ1XHUwNUU4XHUwNUU5XHUwNUQ5XHUwNUREIFx1MDVEN1x1MDVEM1x1MDVFOVx1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiXHUwNUU5XHUwNUREIFx1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlx1MDVFOVx1MDVERCBcdTA1RDFcdTA1RThcdTA1RDlcdTA1RThcdTA1RUEgXHUwNURFXHUwNUQ3XHUwNUQzXHUwNURDIFx1MDVEQ1x1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFx1MDVEOVx1MDVERCBcdTA1RDdcdTA1RDNcdTA1RTlcdTA1RDlcdTA1RERcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJcdTA1RDRcdTA1RTdcdTA1RENcdTA1RDMgXHUwNURDXHUwNUUyXHUwNUU4XHUwNUQ5XHUwNURCXHUwNUQ0XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlx1MDVFMlx1MDVFOFx1MDVENVx1MDVEQSBcdTA1RTJcdTA1REMgXHUwNUQ5XHUwNUQzXHUwNUQ5IFx1MDVENFx1MDVFN1x1MDVEQ1x1MDVEM1x1MDVENCBcdTA1REJcdTA1RTlcdTA1RTZcdTA1RDVcdTA1REVcdTA1RUEgXHUwNUUwXHUwNUQxXHUwNUQ3XHUwNUU4XCIsXHJcbn07XHJcblxyXG5jb25zdCBfaXQ6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUmFkaWNlXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgQW5udWxsYVwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJpcGV0aVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgTWFwcGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbGVcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJNZXNzYSBhIGZ1b2NvXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIkNlcmNhXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6Q2VyY2EgfCBTcGF6aW86TW9kaWZpY2EgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOdW92YSByYWRpY2VcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTW9kYWxpdFx1MDBFMCBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlBhbm5lbGxvIHN0aWxlXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiTWVzc2EgYSBmdW9jbyBzdWwgbm9kb1wiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJDZXJjYSBub2RpXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiSW1wb3N0YXppb25pXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIkluZ3JhbmRpc2NpXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJSaWR1Y2lcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgUGVyc29uYWxpenphdG9cIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEVsaW1pbmEgaW4gYmxvY2NvXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggTW9kaWZpY2Egc3RpbGVcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTnVvdmEgcmFkaWNlXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IEFubnVsbGFcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgUmlwZXRpXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsZSBnbG9iYWxlXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIE1vZGlmaWNhXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsZVwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBDb3BpYVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFRhZ2xpYVwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgSW5jb2xsYVwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgRmlnbGlvXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgRmlnbGlvIHNpbmlzdHJvXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEZyYXRlbGxvXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgRWxpbWluYVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJOYXNjb25kaSBiYXJyYSBkZWdsaSBzdHJ1bWVudGlcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbGUgZ2xvYmFsZVwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIk5vZG8gZmlnbGlvXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJOb2RvIHJhZGljZVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlNmb25kb1wiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiQ29sb3JlIHRlc3RvXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiRGltZW5zaW9uZSBjYXJhdHRlcmVcIixcclxuICAgIFwic20uZm9udFwiOiBcIkNhcmF0dGVyZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlN0aWxlIGJvcmRvXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiQ29sb3JlIGJvcmRvXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiTGFyZ2hlenphIGJvcmRvXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlJhZ2dpbyBib3Jkb1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIkxhcmdoZXp6YSBtaW4uXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIkFsdGV6emEgbWluLlwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiQ29ubmVzc2lvbmVcIixcclxuICAgIFwic20udHlwZVwiOiBcIlRpcG9cIixcclxuICAgIFwic20uY29sb3JcIjogXCJDb2xvcmVcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJMYXJnaGV6emFcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkx1bmdoZXp6YVwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiQXJjb2JhbGVub1wiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiRGlyZXppb25lIG5vZGlcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTcGF6aWF0dXJhIGZyYXRlbGxpXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiRGVzdHJhXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJTaW5pc3RyYVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiRW50cmFtYmlcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJUYXZvbG96emFcIixcclxuICAgIFwic20uc2VsXCI6IFwiU2VsZXppb25lXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiQ29sb3JlIHNlbGV6aW9uZVwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIkxhcmdoZXp6YSBzZWxlemlvbmVcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiU2Nvc3RhbWVudG8gY29udG9ybm9cIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJDb2xvcmUgY29udG9ybm8gbW9kaWZpY2FcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkxhcmdoZXp6YSBjb250b3JubyBtb2RpZmljYVwiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIkNvbG9yZSBzZWxlemlvbmVcIixcclxuICAgIFwib3V0bGluZS50aXRsZVwiOiBcIlNjaGVtYVwiLFxyXG4gICAgXCJvdXRsaW5lLmVtcHR5XCI6IFwiTmVzc3VuYSBtYXBwYSBhcGVydGFcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiQWxsaW5lYW1lbnRvIHRlc3RvXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiUmllbXBpbWVudG8gdGVzdG9cIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJBbHRlenphIHJpZ2FcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJTZm9uZG8gYXJlYSBkaSBsYXZvcm9cIixcclxuICAgIFwic20ucmVzZXRcIjogXCJSaXByaXN0aW5hXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiQ2hpdWRpXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiTW9zdHJhIGJhcnJhIHN0cnVtZW50aVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlJpZW1waW1lbnRvIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlN1cGVyaW9yZVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJEZXN0cm9cIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiSW5mZXJpb3JlXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlNpbmlzdHJvXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiUG9zaXppb25lIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiU3VwZXJpb3JlXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiSW5mZXJpb3JlXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJTZm9uZG8gYmFycmFcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlNmb25kbyBwdWxzYW50ZVwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlN0aWxlIGJvcmRvIHB1bHNhbnRlXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJDb2xvcmUgYm9yZG8gcHVsc2FudGVcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiQ29sb3JlIHRlc3RvIHB1bHNhbnRlXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUmlwcmlzdGluYSBiYXJyYSBzdHJ1bWVudGlcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbGUgbm9kb1wiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJDb2xvcmUgbGluZWFcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGFyZ2hlenphIGxpbmVhXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiQ2FuY2VsbGEgcGVyc29uYWxpenphemlvbmVcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmFnZ2lvIGJvcmRvXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIkNlcmNhIG5vZGkuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJSYWRpY2VcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOdW92YSByYWRpY2VcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiRmlnbGlvXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIkltcG9zdGF6aW9uaSBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJMaW5ndWFcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiTGluZ3VhIGRlbGwnaW50ZXJmYWNjaWFcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiVGVtYSBjb2xvcmlcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiQ2hpYXJvXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiU2N1cm9cIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJNb3N0cmEgYmFycmEgc3RydW1lbnRpXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIk1vc3RyYSBiYXJyYSBzdHJ1bWVudGlcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiU2ZvbmRvIGFyZWEgZGkgbGF2b3JvXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJDb2xvcmUgZGkgc2ZvbmRvXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIkluZm9ybWF6aW9uaVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpb25lXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRvcmVcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkFwcCBkaSBtYXBwZSBtZW50YWxpIG9wZW4gc291cmNlIHJpY2NhIGRpIGZ1bnppb25hbGl0XHUwMEUwIHBlciBPYnNpZGlhbiBjb24gc3RpbGkgcGVyc29uYWxpenphdGksIGNvbm5lc3Npb25pIGFyY29iYWxlbm8sIHNlbGV6aW9uZSBtdWx0aXBsYSwgdHJhc2NpbmFtZW50byBlIGltcG9ydGF6aW9uZS9lc3BvcnRhemlvbmUgTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiQWdnaW9ybmF0b1wiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiUmVwb3NpdG9yeSBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlN1cHBvcnRhIGwnYXV0b3JlIG9wZW4gc291cmNlXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiU2NvcmNpYXRvaWUgZGEgdGFzdGllcmFcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiUGVyc29uYWxpenphIHNjb3JjaWF0b2llXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIk1vZGlmaWNhIG5vZG9cIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiQWdnaXVuZ2kgZnJhdGVsbG9cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkFnZ2l1bmdpIGZpZ2xpb1wiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiTWVzc2EgYSBmdW9jbyBzdWwgbm9kb1wiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJBbm51bGxhXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlJpcGV0aVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIkEgY2FwbyAoaW4gbW9kaWZpY2EpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlRyYXNjaW5hIGFyZWEgZGkgbGF2b3JvXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiSW5ncmFuZGlzY2lcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiUmlkdWNpXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiUmVpbXBvc3RhIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hdmlnYSBzdVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOYXZpZ2EgZ2lcdTAwRjlcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiTmF2aWdhIGEgc2luaXN0cmFcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIk5hdmlnYSBhIGRlc3RyYVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiUHJlbWkgdW4gdGFzdG8uLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjb3JyaW1lbnRvIGUgem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVydGkgc2NvcnJpbWVudG8gdmVydGljYWxlXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJ0aSBzY29ycmltZW50byBvcml6em9udGFsZVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGkgZGlyZXppb25lIHpvb21cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIk1vZGlmaWNhIGFsbGEgY3JlYXppb25lXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiTW9kYWxpdFx1MDBFMCBtb2RpZmljYSBhbGxhIGNyZWF6aW9uZSBkZWkgbm9kaVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJOb21lIHJhZGljZVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiTm9tZSBwcmVkZWZpbml0byBwZXIgbnVvdmUgcmFkaWNpXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJOb21lIGZpZ2xpb1wiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIk5vbWUgcHJlZGVmaW5pdG8gcGVyIG51b3ZpIGZpZ2xpXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiRGlnaXRhIHBlciBtb2RpZmljYXJlXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIk1vZGlmaWNhIGRpZ2l0YW5kbyBxdWFuZG8gdW4gbm9kbyBcdTAwRTggc2VsZXppb25hdG9cIixcclxufTtcclxuXHJcbmNvbnN0IF9hcjogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTA2MkNcdTA2MzBcdTA2MzFcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTA2MkFcdTA2MzFcdTA2MjdcdTA2MkNcdTA2MzlcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTA2MjVcdTA2MzlcdTA2MjdcdTA2MkZcdTA2MjlcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIFx1MDYyRVx1MDYzMVx1MDY0QVx1MDYzN1x1MDYyOVwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA2NDZcdTA2NDVcdTA2MzdcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJcdTA2MkFcdTA2MzFcdTA2NDNcdTA2NEFcdTA2MzJcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiXHUwNjI4XHUwNjJEXHUwNjJCXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6XHUwNjI4XHUwNjJEXHUwNjJCIHwgXHUwNjQ1XHUwNjMzXHUwNjI3XHUwNjQxXHUwNjI5Olx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1MDYyQ1x1MDYzMFx1MDYzMSBcdTA2MkNcdTA2MkZcdTA2NEFcdTA2MkZcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiXHUwNjQ4XHUwNjM2XHUwNjM5IE1hcmtkb3duXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjJEXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDY0Nlx1MDY0NVx1MDYyN1x1MDYzN1wiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDYzMVx1MDY0M1x1MDY0QVx1MDYzMiBcdTA2MzlcdTA2NDRcdTA2NDkgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyOFx1MDYyRFx1MDYyQiBcdTA2NDFcdTA2NEEgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjI1XHUwNjM5XHUwNjJGXHUwNjI3XHUwNjJGXHUwNjI3XHUwNjJBXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1MDYyQVx1MDY0M1x1MDYyOFx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHUwNjJBXHUwNjM1XHUwNjNBXHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1MDY0NVx1MDYyRVx1MDYzNVx1MDYzNVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHUwNjJEXHUwNjMwXHUwNjQxIFx1MDYyQ1x1MDY0NVx1MDYyN1x1MDYzOVx1MDY0QVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2NDVcdTA2MzdcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgXHUwNjJDXHUwNjMwXHUwNjMxIFx1MDYyQ1x1MDYyRlx1MDY0QVx1MDYyRlwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBcdTA2MkFcdTA2MzFcdTA2MjdcdTA2MkNcdTA2MzlcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgXHUwNjI1XHUwNjM5XHUwNjI3XHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2NDVcdTA2MzcgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjI3XHUwNjQ1XCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNjQ2XHUwNjQ1XHUwNjM3XCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIFx1MDY0Nlx1MDYzM1x1MDYyRVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFx1MDY0Mlx1MDYzNVwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgXHUwNjQ0XHUwNjM1XHUwNjQyXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBcdTA2NDFcdTA2MzFcdTA2MzlcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBcdTA2NDFcdTA2MzFcdTA2MzkgXHUwNjIzXHUwNjRBXHUwNjMzXHUwNjMxXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFx1MDYzNFx1MDY0Mlx1MDY0QVx1MDY0MlwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDYyRFx1MDYzMFx1MDY0MVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJcdTA2MjVcdTA2MkVcdTA2NDFcdTA2MjdcdTA2MjEgXHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0OFx1MDYyN1x1MDYyQVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2NDVcdTA2MzcgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjI3XHUwNjQ1XCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5IFx1MDY0MVx1MDYzMVx1MDYzOVx1MDY0QVx1MDYyOVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5IFx1MDYyQ1x1MDYzMFx1MDYzMVx1MDY0QVx1MDYyOVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1MDYyN1x1MDY0NFx1MDYyRVx1MDY0NFx1MDY0MVx1MDY0QVx1MDYyOVwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDY0Nlx1MDYzNVwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1MDYyRFx1MDYyQ1x1MDY0NSBcdTA2MjdcdTA2NDRcdTA2MkVcdTA2MzdcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyRVx1MDYzN1wiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1MDY0Nlx1MDY0NVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MkRcdTA2MkZcdTA2NDhcdTA2MkZcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjI3XHUwNjQ0XHUwNjJEXHUwNjJGXHUwNjQ4XHUwNjJGXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHUwNjM5XHUwNjMxXHUwNjM2IFx1MDYyN1x1MDY0NFx1MDYyRFx1MDYyRlx1MDY0OFx1MDYyRlwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTA2MkFcdTA2NDJcdTA2NDhcdTA2NEFcdTA2MzMgXHUwNjI3XHUwNjQ0XHUwNjMyXHUwNjQ4XHUwNjI3XHUwNjRBXHUwNjI3XCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJEXHUwNjJGIFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0Nlx1MDY0OSBcdTA2NDRcdTA2NDRcdTA2MzlcdTA2MzFcdTA2MzZcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJEXHUwNjJGIFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0Nlx1MDY0OSBcdTA2NDRcdTA2NDRcdTA2MjdcdTA2MzFcdTA2MkFcdTA2NDFcdTA2MjdcdTA2MzlcIixcclxuICAgIFwic20uY29ublwiOiBcIlx1MDYyRVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2NDhcdTA2MzVcdTA2NDRcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1MDYyN1x1MDY0NFx1MDY0Nlx1MDY0OFx1MDYzOVwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1MDYyN1x1MDY0NFx1MDY0NFx1MDY0OFx1MDY0NlwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYzOVx1MDYzMVx1MDYzNlwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjM3XHUwNjQ4XHUwNjQ0XCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdTA2NDJcdTA2NDhcdTA2MzMgXHUwNjQyXHUwNjMyXHUwNjJEXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdTA2MjdcdTA2MkFcdTA2MkNcdTA2MjdcdTA2NDcgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjMzXHUwNjI3XHUwNjQxXHUwNjI5IFx1MDYyOFx1MDY0QVx1MDY0NiBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2MzRcdTA2NDJcdTA2MjdcdTA2MjFcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdTA2NEFcdTA2NDVcdTA2NEFcdTA2NDZcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1MDY0QVx1MDYzM1x1MDYyN1x1MDYzMVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHUwNjQzXHUwNjQ0XHUwNjI3XHUwNjQ3XHUwNjQ1XHUwNjI3XCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjJEIFx1MDYyN1x1MDY0NFx1MDYyM1x1MDY0NFx1MDY0OFx1MDYyN1x1MDY0NlwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MkZcdTA2NEFcdTA2MkZcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjJEXHUwNjJGXHUwNjRBXHUwNjJGXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiXHUwNjM5XHUwNjMxXHUwNjM2IFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYyRlx1MDY0QVx1MDYyRlwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTA2MjVcdTA2MzJcdTA2MjdcdTA2MkRcdTA2MjkgXHUwNjI3XHUwNjQ0XHUwNjI1XHUwNjM3XHUwNjI3XHUwNjMxXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyNVx1MDYzN1x1MDYyN1x1MDYzMSBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1MDYzOVx1MDYzMVx1MDYzNiBcdTA2MjVcdTA2MzdcdTA2MjdcdTA2MzEgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjJEXHUwNjMxXHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcInNtLmJveFNlbENvbG9yXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYyRlx1MDY0QVx1MDYyRiBcdTA2MjdcdTA2NDRcdTA2NDVcdTA2MzFcdTA2MjhcdTA2MzlcIixcclxuICAgIFwib3V0bGluZS50aXRsZVwiOiBcIlx1MDYyN1x1MDY0NFx1MDY0NVx1MDYyRVx1MDYzN1x1MDYzN1wiLFxyXG4gICAgXCJvdXRsaW5lLmVtcHR5XCI6IFwiXHUwNjQ0XHUwNjI3IFx1MDYyQVx1MDY0OFx1MDYyQ1x1MDYyRiBcdTA2MkVcdTA2MzFcdTA2NEFcdTA2MzdcdTA2MjkgXHUwNjQ1XHUwNjQxXHUwNjJBXHUwNjQ4XHUwNjJEXHUwNjI5XCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1MDY0NVx1MDYyRFx1MDYyN1x1MDYzMFx1MDYyN1x1MDYyOSBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2MzVcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJcdTA2MkRcdTA2MzRcdTA2NDggXHUwNjI3XHUwNjQ0XHUwNjQ2XHUwNjM1XCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHUwNjI3XHUwNjMxXHUwNjJBXHUwNjQxXHUwNjI3XHUwNjM5IFx1MDYyN1x1MDY0NFx1MDYzM1x1MDYzN1x1MDYzMVwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1MDYyRVx1MDY0NFx1MDY0MVx1MDY0QVx1MDYyOSBcdTA2MjdcdTA2NDRcdTA2NDRcdTA2NDhcdTA2MkRcdTA2MjlcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJcdTA2MjVcdTA2MzlcdTA2MjdcdTA2MkZcdTA2MjkgXHUwNjJBXHUwNjM5XHUwNjRBXHUwNjRBXHUwNjQ2XCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiXHUwNjI1XHUwNjNBXHUwNjQ0XHUwNjI3XHUwNjQyXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiXHUwNjI1XHUwNjM4XHUwNjQ3XHUwNjI3XHUwNjMxIFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2MkZcdTA2NDhcdTA2MjdcdTA2MkFcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdTA2MkRcdTA2MzRcdTA2NDggXHUwNjI3XHUwNjQ0XHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3XCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1MDYyM1x1MDYzOVx1MDY0NFx1MDY0OVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTA2NEFcdTA2NDVcdTA2NEFcdTA2NDZcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHUwNjIzXHUwNjMzXHUwNjQxXHUwNjQ0XCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1MDY0QVx1MDYzM1x1MDYyN1x1MDYzMVwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MDY0NVx1MDY0OFx1MDYzNlx1MDYzOSBcdTA2MjdcdTA2NDRcdTA2MzRcdTA2MzFcdTA2NEFcdTA2MzdcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTA2MjNcdTA2MzlcdTA2NDRcdTA2NDlcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTA2MjNcdTA2MzNcdTA2NDFcdTA2NDRcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1MDYyRVx1MDY0NFx1MDY0MVx1MDY0QVx1MDYyOSBcdTA2MjdcdTA2NDRcdTA2MzRcdTA2MzFcdTA2NEFcdTA2MzdcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1MDYyRVx1MDY0NFx1MDY0MVx1MDY0QVx1MDYyOSBcdTA2MjdcdTA2NDRcdTA2MzJcdTA2MzFcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTA2NDZcdTA2NDVcdTA2MzcgXHUwNjJEXHUwNjJGXHUwNjQ4XHUwNjJGIFx1MDYyN1x1MDY0NFx1MDYzMlx1MDYzMVwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyRFx1MDYyRlx1MDY0OFx1MDYyRiBcdTA2MjdcdTA2NDRcdTA2MzJcdTA2MzFcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDY0Nlx1MDYzNSBcdTA2MjdcdTA2NDRcdTA2MzJcdTA2MzFcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTA2MjVcdTA2MzlcdTA2MjdcdTA2MkZcdTA2MjkgXHUwNjJBXHUwNjM5XHUwNjRBXHUwNjRBXHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzN1wiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA2NDZcdTA2NDVcdTA2MzcgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1MDY0NFx1MDY0OFx1MDY0NiBcdTA2MjdcdTA2NDRcdTA2MkVcdTA2MzdcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHUwNjM5XHUwNjMxXHUwNjM2IFx1MDYyN1x1MDY0NFx1MDYyRVx1MDYzN1wiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlx1MDY0NVx1MDYzM1x1MDYyRCBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkVcdTA2MzVcdTA2NEFcdTA2MzVcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHUwNjJBXHUwNjQyXHUwNjQ4XHUwNjRBXHUwNjMzIFx1MDYyN1x1MDY0NFx1MDYzMlx1MDY0OFx1MDYyN1x1MDY0QVx1MDYyN1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJcdTA2MjdcdTA2NDRcdTA2MjhcdTA2MkRcdTA2MkIgXHUwNjQxXHUwNjRBIFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0Mlx1MDYyRi4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MDYyQ1x1MDYzMFx1MDYzMVwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1MDYyQ1x1MDYzMFx1MDYzMSBcdTA2MkNcdTA2MkZcdTA2NEFcdTA2MkZcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHUwNjQxXHUwNjMxXHUwNjM5XCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIlx1MDYyNVx1MDYzOVx1MDYyRlx1MDYyN1x1MDYyRlx1MDYyN1x1MDYyQSBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdTA2MjdcdTA2NDRcdTA2NDRcdTA2M0FcdTA2MjlcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHUwNjQ0XHUwNjNBXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDY0OFx1MDYyN1x1MDYyQ1x1MDY0N1x1MDYyOVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdTA2MjdcdTA2NDRcdTA2MzNcdTA2NDVcdTA2MjlcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlx1MDYzM1x1MDY0NVx1MDYyOSBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2NDRcdTA2NDhcdTA2MjdcdTA2NDZcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiXHUwNjQxXHUwNjI3XHUwNjJBXHUwNjJEXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiXHUwNjJGXHUwNjI3XHUwNjQzXHUwNjQ2XCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiXHUwNjI1XHUwNjM4XHUwNjQ3XHUwNjI3XHUwNjMxIFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2MkZcdTA2NDhcdTA2MjdcdTA2MkFcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiXHUwNjI1XHUwNjM4XHUwNjQ3XHUwNjI3XHUwNjMxIFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2MkZcdTA2NDhcdTA2MjdcdTA2MkFcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiXHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDY0NFx1MDY0OFx1MDYyRFx1MDYyOVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYyRVx1MDY0NFx1MDY0MVx1MDY0QVx1MDYyOVwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTA2MkRcdTA2NDhcdTA2NDRcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdTA2MjdcdTA2NDRcdTA2MjVcdTA2MzVcdTA2MkZcdTA2MjdcdTA2MzFcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1MDYyN1x1MDY0NFx1MDY0NVx1MDYyNFx1MDY0NFx1MDY0MVwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiXHUwNjJBXHUwNjM3XHUwNjI4XHUwNjRBXHUwNjQyIFx1MDYyRVx1MDYzMVx1MDYyN1x1MDYyNlx1MDYzNyBcdTA2MzBcdTA2NDdcdTA2NDZcdTA2NEFcdTA2MjkgXHUwNjQ1XHUwNjQxXHUwNjJBXHUwNjQ4XHUwNjJEIFx1MDYyN1x1MDY0NFx1MDY0NVx1MDYzNVx1MDYyRlx1MDYzMSBcdTA2M0FcdTA2NDZcdTA2NEEgXHUwNjI4XHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjRBXHUwNjMyXHUwNjI3XHUwNjJBIFx1MDY0NFx1MDY0MCBPYnNpZGlhbiBcdTA2NDVcdTA2MzkgXHUwNjIzXHUwNjQ2XHUwNjQ1XHUwNjI3XHUwNjM3IFx1MDY0NVx1MDYyRVx1MDYzNVx1MDYzNVx1MDYyOVx1MDYwQyBcdTA2NDhcdTA2MzVcdTA2NDRcdTA2MjdcdTA2MkEgXHUwNjQyXHUwNjQ4XHUwNjMzIFx1MDY0Mlx1MDYzMlx1MDYyRFx1MDYwQyBcdTA2MkFcdTA2MkRcdTA2MkZcdTA2NEFcdTA2MkYgXHUwNjQ1XHUwNjJBXHUwNjM5XHUwNjJGXHUwNjJGXHUwNjBDIFx1MDYzM1x1MDYyRFx1MDYyOCBcdTA2NDhcdTA2MjVcdTA2NDFcdTA2NDRcdTA2MjdcdTA2MkFcdTA2MEMgXHUwNjQ4XHUwNjI3XHUwNjMzXHUwNjJBXHUwNjRBXHUwNjMxXHUwNjI3XHUwNjJGL1x1MDYyQVx1MDYzNVx1MDYyRlx1MDY0QVx1MDYzMSBNYXJrZG93bi5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJcdTA2MkFcdTA2NDUgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjJEXHUwNjJGXHUwNjRBXHUwNjJCXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJcdTA2NDVcdTA2MzNcdTA2MkFcdTA2NDhcdTA2MkZcdTA2MzkgR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdTA2MjdcdTA2MkZcdTA2MzlcdTA2NDUgXHUwNjQ1XHUwNjI0XHUwNjQ0XHUwNjQxIFx1MDYyN1x1MDY0NFx1MDY0NVx1MDYzNVx1MDYyRlx1MDYzMSBcdTA2MjdcdTA2NDRcdTA2NDVcdTA2NDFcdTA2MkFcdTA2NDhcdTA2MkRcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJcdTA2MjdcdTA2MkVcdTA2MkFcdTA2MzVcdTA2MjdcdTA2MzFcdTA2MjdcdTA2MkEgXHUwNjQ0XHUwNjQ4XHUwNjJEXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDY0NVx1MDY0MVx1MDYyN1x1MDYyQVx1MDY0QVx1MDYyRFwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJcdTA2MkFcdTA2MkVcdTA2MzVcdTA2NEFcdTA2MzUgXHUwNjI3XHUwNjQ0XHUwNjI3XHUwNjJFXHUwNjJBXHUwNjM1XHUwNjI3XHUwNjMxXHUwNjI3XHUwNjJBXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2NDJcdTA2MkZcdTA2MjlcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHUwNjI1XHUwNjM2XHUwNjI3XHUwNjQxXHUwNjI5IFx1MDYzNFx1MDY0Mlx1MDY0QVx1MDY0MlwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHUwNjI1XHUwNjM2XHUwNjI3XHUwNjQxXHUwNjI5IFx1MDY0MVx1MDYzMVx1MDYzOVwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjMxXHUwNjQzXHUwNjRBXHUwNjMyIFx1MDYzOVx1MDY0NFx1MDY0OSBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2NDJcdTA2MkZcdTA2MjlcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHUwNjJBXHUwNjMxXHUwNjI3XHUwNjJDXHUwNjM5XCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1MDYyNVx1MDYzOVx1MDYyN1x1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1MDY0MVx1MDYyN1x1MDYzNVx1MDY0NCBcdTA2MzNcdTA2MzdcdTA2MzEgKFx1MDYyM1x1MDYyQlx1MDY0Nlx1MDYyN1x1MDYyMSBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzEpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlx1MDYzM1x1MDYyRFx1MDYyOCBcdTA2MjdcdTA2NDRcdTA2NDRcdTA2NDhcdTA2MkRcdTA2MjlcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTA2MkFcdTA2NDNcdTA2MjhcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHUwNjJBXHUwNjM1XHUwNjNBXHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUwNjI1XHUwNjM5XHUwNjI3XHUwNjJGXHUwNjI5IFx1MDYyQVx1MDYzOVx1MDY0QVx1MDY0QVx1MDY0NiBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDNcdTA2MjhcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0Nlx1MDY0Mlx1MDY0NCBcdTA2NDRcdTA2MjNcdTA2MzlcdTA2NDRcdTA2NDlcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQ2XHUwNjQyXHUwNjQ0IFx1MDY0NFx1MDYyM1x1MDYzM1x1MDY0MVx1MDY0NFwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDZcdTA2NDJcdTA2NDQgXHUwNjQ0XHUwNjQ0XHUwNjRBXHUwNjMzXHUwNjI3XHUwNjMxXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDZcdTA2NDJcdTA2NDQgXHUwNjQ0XHUwNjQ0XHUwNjRBXHUwNjQ1XHUwNjRBXHUwNjQ2XCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJcdTA2MjdcdTA2MzZcdTA2M0FcdTA2MzcgXHUwNjQ1XHUwNjQxXHUwNjJBXHUwNjI3XHUwNjJEXHUwNjI3XHUwNjRCLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDVcdTA2MzFcdTA2NEFcdTA2MzEgXHUwNjQ4XHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQzXHUwNjI4XHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHUwNjM5XHUwNjQzXHUwNjMzIFx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0NVx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2NDVcdTA2NDhcdTA2MkZcdTA2NEFcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJcdTA2MzlcdTA2NDNcdTA2MzMgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQ1XHUwNjMxXHUwNjRBXHUwNjMxIFx1MDYyN1x1MDY0NFx1MDYyM1x1MDY0MVx1MDY0Mlx1MDY0QVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MDYzOVx1MDY0M1x1MDYzMyBcdTA2MjdcdTA2MkFcdTA2MkNcdTA2MjdcdTA2NDcgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQzXHUwNjI4XHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzEgXHUwNjM5XHUwNjQ2XHUwNjJGIFx1MDYyN1x1MDY0NFx1MDYyNVx1MDY0Nlx1MDYzNFx1MDYyN1x1MDYyMVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIlx1MDY0OFx1MDYzNlx1MDYzOSBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzEgXHUwNjM5XHUwNjQ2XHUwNjJGIFx1MDYyNVx1MDY0Nlx1MDYzNFx1MDYyN1x1MDYyMSBcdTA2MzlcdTA2NDJcdTA2MkYgXHUwNjJDXHUwNjJGXHUwNjRBXHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlx1MDYyN1x1MDYzM1x1MDY0NSBcdTA2MjdcdTA2NDRcdTA2MkNcdTA2MzBcdTA2MzFcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlx1MDYyN1x1MDY0NFx1MDYyN1x1MDYzM1x1MDY0NSBcdTA2MjdcdTA2NDRcdTA2MjdcdTA2NDFcdTA2MkFcdTA2MzFcdTA2MjdcdTA2MzZcdTA2NEEgXHUwNjQ0XHUwNjQ0XHUwNjJDXHUwNjMwXHUwNjQ4XHUwNjMxIFx1MDYyN1x1MDY0NFx1MDYyQ1x1MDYyRlx1MDY0QVx1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiXHUwNjI3XHUwNjMzXHUwNjQ1IFx1MDYyN1x1MDY0NFx1MDY0MVx1MDYzMVx1MDYzOVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlx1MDYyN1x1MDY0NFx1MDYyN1x1MDYzM1x1MDY0NSBcdTA2MjdcdTA2NDRcdTA2MjdcdTA2NDFcdTA2MkFcdTA2MzFcdTA2MjdcdTA2MzZcdTA2NEEgXHUwNjQ0XHUwNjQ0XHUwNjQxXHUwNjMxXHUwNjQ4XHUwNjM5IFx1MDYyN1x1MDY0NFx1MDYyQ1x1MDYyRlx1MDY0QVx1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlx1MDYyN1x1MDY0M1x1MDYyQVx1MDYyOCBcdTA2NDRcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiXHUwNjJEXHUwNjMxXHUwNjUxXHUwNjMxIFx1MDYyOFx1MDYyN1x1MDY0NFx1MDY0M1x1MDYyQVx1MDYyN1x1MDYyOFx1MDYyOSBcdTA2MzlcdTA2NDZcdTA2MkYgXHUwNjJBXHUwNjJEXHUwNjJGXHUwNjRBXHUwNjJGIFx1MDYzOVx1MDY0Mlx1MDYyRlx1MDYyOVwiLFxyXG59O1xyXG5cclxuY29uc3QgQUxMOiBSZWNvcmQ8TGFuZ3VhZ2UsIHR5cGVvZiBfZW4+ID0ge1xyXG4gICAgZW46IF9lbixcclxuICAgIHpoOiBfemgsXHJcbiAgICBqYTogX2phLFxyXG4gICAgZnI6IF9mcixcclxuICAgIGRlOiBfZGUsXHJcbiAgICBlczogX2VzLFxyXG4gICAgcnU6IF9ydSxcclxuICAgIHN2OiBfc3YsXHJcbiAgICBoaTogX2hpLFxyXG4gICAga286IF9rbyxcclxuICAgIHB0OiBfcHQsXHJcbiAgICBmaTogX2ZpLFxyXG4gICAgbm86IF9ubyxcclxuICAgIG5sOiBfbmwsXHJcbiAgICBsaTogX2xpLFxyXG4gICAgZGE6IF9kYSxcclxuICAgIGhlOiBfaGUsXHJcbiAgICBpdDogX2l0LFxyXG4gICAgYXI6IF9hcixcclxufTtcclxuXHJcbmxldCBfbGFuZzogTGFuZ3VhZ2UgPSBcImVuXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMYW5nKGw6IExhbmd1YWdlKSB7XHJcbiAgICBfbGFuZyA9IGw7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmcoKTogTGFuZ3VhZ2Uge1xyXG4gICAgcmV0dXJuIF9sYW5nO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoQUxMW19sYW5nXSBhcyBhbnkpPy5ba2V5XSA/PyAoQUxMW1wiZW5cIl0gYXMgYW55KT8uW2tleV0gPz8ga2V5O1xyXG59XHJcbiIsICIvLyBzcmMvU3R5bGVQYW5lbFZpZXcudHNcclxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFNldHRpbmcgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHtcclxuICAgIFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFLFxyXG4gICAgVklFV19UWVBFX01JTkRNQVAsXHJcbiAgICBNaW5kTWFwU3R5bGUsXHJcbiAgICBERUZBVUxUX1NUWUxFLFxyXG4gICAgRk9OVF9MSVNULFxyXG4gICAgQ09OTkVDVElPTl9TVFlMRVMsXHJcbiAgICBSQUlOQk9XX1BBTEVUVEVTLFxyXG59IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IHQgfSBmcm9tIFwiLi9pMThuXCI7XHJcbmltcG9ydCB7IE1pbmRNYXBWaWV3IH0gZnJvbSBcIi4vTWluZE1hcFZpZXdcIjtcclxuaW1wb3J0IHR5cGUgTWluZE5vZGVQbHVnaW4gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0eWxlUGFuZWxWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xyXG4gICAgcHJpdmF0ZSBwbHVnaW46IE1pbmROb2RlUGx1Z2luO1xyXG4gICAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBNaW5kTm9kZVBsdWdpbikge1xyXG4gICAgICAgIHN1cGVyKGxlYWYpO1xyXG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgfVxyXG4gICAgZ2V0Vmlld1R5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFO1xyXG4gICAgfVxyXG4gICAgZ2V0RGlzcGxheVRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiTWluZFpKIFwiICsgdChcInRiLnN0eWxlXCIpO1xyXG4gICAgfVxyXG4gICAgZ2V0SWNvbigpIHtcclxuICAgICAgICByZXR1cm4gXCJwYWxldHRlXCI7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXRcclxuICAgIGFzeW5jIG9uT3BlbigpIHtcclxuICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXRcclxuICAgIGFzeW5jIG9uQ2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLyogbm8gY2xlYW51cCBuZWVkZWQgKi9cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFZpZXcoKTogTWluZE1hcFZpZXcgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBsID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfTUlORE1BUCk7XHJcbiAgICAgICAgcmV0dXJuIGwubGVuZ3RoID4gMCAmJiBsWzBdLnZpZXcgaW5zdGFuY2VvZiBNaW5kTWFwVmlld1xyXG4gICAgICAgICAgICA/IGxbMF0udmlld1xyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZCgpIHtcclxuICAgICAgICBjb25zdCBjdCA9IHRoaXMuY29udGFpbmVyRWwuY2hpbGRyZW5bMV0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY3QuZW1wdHkoKTtcclxuICAgICAgICBjdC5hZGRDbGFzcyhcIm16LXNwLWN0XCIpO1xyXG5cclxuICAgICAgICBuZXcgU2V0dGluZyhjdCkuc2V0TmFtZSh0KFwic20udGl0bGVcIikpLnNldEhlYWRpbmcoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuZ2V0VmlldygpO1xyXG4gICAgICAgIGNvbnN0IHM6IE1pbmRNYXBTdHlsZSA9IHZpZXc/LnN0eWxlXHJcbiAgICAgICAgICAgID8geyAuLi52aWV3LnN0eWxlIH1cclxuICAgICAgICAgICAgOiB0aGlzLnBsdWdpbi5nZXRTdHlsZSgpO1xyXG4gICAgICAgIGNvbnN0IHVwZCA9IChwOiBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMuZ2V0VmlldygpO1xyXG4gICAgICAgICAgICBpZiAodikgdi5hcHBseVN0eWxlKHApO1xyXG4gICAgICAgICAgICBlbHNlIHZvaWQgdGhpcy5wbHVnaW4udXBkYXRlU3R5bGUocCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FmZVN0ciA9ICh2YWw6IE1pbmRNYXBTdHlsZVtrZXlvZiBNaW5kTWFwU3R5bGVdKTogc3RyaW5nID0+XHJcbiAgICAgICAgICAgIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgID8gdmFsXHJcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgPyBTdHJpbmcodmFsKVxyXG4gICAgICAgICAgICAgICAgICA6IHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBTdHJpbmcodmFsKVxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgbWtTZWMgPSAoaWNvbjogc3RyaW5nLCB0aXRsZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYyA9IGN0LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBzZWMuYWRkQ2xhc3MoXCJtei1zcC1zZWNcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhkciA9IHNlYy5jcmVhdGVFbChcImRpdlwiLCB7IHRleHQ6IGljb24gKyBcIiAgXCIgKyB0aXRsZSB9KTtcclxuICAgICAgICAgICAgaGRyLmFkZENsYXNzKFwibXotc3Atc2VjLWhkclwiKTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHNlYy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgYi5hZGRDbGFzcyhcIm16LXNwLXNlYy1ib2R5XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gYjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1rUm93ID0gKHA6IEhUTUxFbGVtZW50LCBsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHAuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHIuYWRkQ2xhc3MoXCJtei1zcC1yb3dcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxibCA9IHIuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbCB9KTtcclxuICAgICAgICAgICAgbGJsLmFkZENsYXNzKFwibXotc3AtbGJsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1rQ29sb3IgPSAocDogSFRNTEVsZW1lbnQsIGw6IHN0cmluZywgazoga2V5b2YgTWluZE1hcFN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBta1JvdyhwLCBsKTtcclxuICAgICAgICAgICAgY29uc3QgaSA9IHIuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpLnR5cGUgPSBcImNvbG9yXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGN2ID0gc1trXTtcclxuICAgICAgICAgICAgaS52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgY3YgPT09IFwic3RyaW5nXCIgJiYgY3Yuc3RhcnRzV2l0aChcInZhclwiKVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICA6IHNhZmVTdHIoY3YpO1xyXG4gICAgICAgICAgICBpLmFkZENsYXNzKFwibXotc3AtY29sb3JcIik7XHJcbiAgICAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICB1cGQoeyBba106IGkudmFsdWUgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtSYW5nZSA9IChcclxuICAgICAgICAgICAgcDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICAgIGw6IHN0cmluZyxcclxuICAgICAgICAgICAgazoga2V5b2YgTWluZE1hcFN0eWxlLFxyXG4gICAgICAgICAgICBtaW46IG51bWJlcixcclxuICAgICAgICAgICAgbWF4OiBudW1iZXIsXHJcbiAgICAgICAgICAgIHN0ZXA/OiBudW1iZXIsXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBta1JvdyhwLCBsKTtcclxuICAgICAgICAgICAgY29uc3QgdyA9IHIuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHcuYWRkQ2xhc3MoXCJtei1zcC1yYW5nZS13cmFwXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBpID0gdy5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGkudHlwZSA9IFwicmFuZ2VcIjtcclxuICAgICAgICAgICAgaS5taW4gPSBTdHJpbmcobWluKTtcclxuICAgICAgICAgICAgaS5tYXggPSBTdHJpbmcobWF4KTtcclxuICAgICAgICAgICAgaWYgKHN0ZXApIGkuc3RlcCA9IFN0cmluZyhzdGVwKTtcclxuICAgICAgICAgICAgaS52YWx1ZSA9IHNhZmVTdHIoc1trXSk7XHJcbiAgICAgICAgICAgIGkuYWRkQ2xhc3MoXCJtei1zcC1yYW5nZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbiA9IHcuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogc2FmZVN0cihzW2tdKSB9KTtcclxuICAgICAgICAgICAgbi5hZGRDbGFzcyhcIm16LXNwLXJhbmdlLXZhbFwiKTtcclxuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbi50ZXh0Q29udGVudCA9IGkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB1cGQoeyBba106IE51bWJlcihpLnZhbHVlKSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtOdW0gPSAoXHJcbiAgICAgICAgICAgIHA6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgICAgICBsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGs6IGtleW9mIE1pbmRNYXBTdHlsZSxcclxuICAgICAgICAgICAgbWluOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG1heDogbnVtYmVyLFxyXG4gICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByID0gbWtSb3cocCwgbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGkgPSByLmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaS50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICAgICAgaS5taW4gPSBTdHJpbmcobWluKTtcclxuICAgICAgICAgICAgaS5tYXggPSBTdHJpbmcobWF4KTtcclxuICAgICAgICAgICAgaS52YWx1ZSA9IHNhZmVTdHIoc1trXSk7XHJcbiAgICAgICAgICAgIGkuYWRkQ2xhc3MoXCJtei1zcC1udW1cIik7XHJcbiAgICAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxyXG4gICAgICAgICAgICAgICAgdXBkKHsgW2tdOiBOdW1iZXIoaS52YWx1ZSkgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtTZWwgPSAoXHJcbiAgICAgICAgICAgIHA6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgICAgICBsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGs6IGtleW9mIE1pbmRNYXBTdHlsZSxcclxuICAgICAgICAgICAgb3B0czogc3RyaW5nW10sXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBta1JvdyhwLCBsKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsID0gci5jcmVhdGVFbChcInNlbGVjdFwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICAgICAgc2VsLmFkZENsYXNzKFwibXotc3Atc2VsXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygb3B0cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgb3AudmFsdWUgPSBvO1xyXG4gICAgICAgICAgICAgICAgb3AudGV4dCA9IG87XHJcbiAgICAgICAgICAgICAgICBpZiAobyA9PT0gc2FmZVN0cihzW2tdKSkgb3Auc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2VsLmFwcGVuZENoaWxkKG9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxyXG4gICAgICAgICAgICAgICAgdXBkKHsgW2tdOiBzZWwudmFsdWUgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIENoaWxkIG5vZGVcclxuICAgICAgICBjb25zdCBzMSA9IG1rU2VjKFwiXHVEODNEXHVEQ0U2XCIsIHQoXCJzbS5jaGlsZFwiKSk7XHJcbiAgICAgICAgbWtDb2xvcihzMSwgdChcInNtLmJnXCIpLCBcIm5vZGVCZ0NvbG9yXCIpO1xyXG4gICAgICAgIG1rQ29sb3IoczEsIHQoXCJzbS50ZXh0XCIpLCBcIm5vZGVUZXh0Q29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzMSwgdChcInNtLmZvbnRTaXplXCIpLCBcIm5vZGVGb250U2l6ZVwiLCAxMCwgMzIpO1xyXG4gICAgICAgIG1rU2VsKHMxLCB0KFwic20uZm9udFwiKSwgXCJub2RlRm9udEZhbWlseVwiLCBGT05UX0xJU1QpO1xyXG4gICAgICAgIG1rU2VsKHMxLCB0KFwic20uYm9yZGVyU3R5bGVcIiksIFwibm9kZUJvcmRlclN0eWxlXCIsIFtcclxuICAgICAgICAgICAgXCJzb2xpZFwiLFxyXG4gICAgICAgICAgICBcImRhc2hlZFwiLFxyXG4gICAgICAgICAgICBcImRvdHRlZFwiLFxyXG4gICAgICAgICAgICBcImRvdWJsZVwiLFxyXG4gICAgICAgICAgICBcIm5vbmVcIixcclxuICAgICAgICBdKTtcclxuICAgICAgICBta0NvbG9yKHMxLCB0KFwic20uYm9yZGVyQ29sb3JcIiksIFwibm9kZUJvcmRlckNvbG9yXCIpO1xyXG4gICAgICAgIG1rUmFuZ2UoczEsIHQoXCJzbS5ib3JkZXJXaWR0aFwiKSwgXCJub2RlQm9yZGVyV2lkdGhcIiwgMCwgOCk7XHJcbiAgICAgICAgbWtSYW5nZShzMSwgdChcInNtLmJvcmRlclJhZGl1c1wiKSwgXCJub2RlQm9yZGVyUmFkaXVzXCIsIDAsIDMyKTtcclxuICAgICAgICBta051bShzMSwgdChcInNtLm1pbldpZHRoXCIpLCBcIm5vZGVNaW5XaWR0aFwiLCAzMCwgNDAwKTtcclxuICAgICAgICBta051bShzMSwgdChcInNtLm1pbkhlaWdodFwiKSwgXCJub2RlTWluSGVpZ2h0XCIsIDIwLCAyMDApO1xyXG5cclxuICAgICAgICAvLyBSb290IG5vZGVcclxuICAgICAgICBjb25zdCBzMiA9IG1rU2VjKFwiXHVEODNDXHVERkUwXCIsIHQoXCJzbS5yb290XCIpKTtcclxuICAgICAgICBta0NvbG9yKHMyLCB0KFwic20uYmdcIiksIFwicm9vdEJnQ29sb3JcIik7XHJcbiAgICAgICAgbWtDb2xvcihzMiwgdChcInNtLnRleHRcIiksIFwicm9vdFRleHRDb2xvclwiKTtcclxuICAgICAgICBta1JhbmdlKHMyLCB0KFwic20uZm9udFNpemVcIiksIFwicm9vdEZvbnRTaXplXCIsIDEwLCAzMik7XHJcbiAgICAgICAgbWtTZWwoczIsIHQoXCJzbS5mb250XCIpLCBcInJvb3RGb250RmFtaWx5XCIsIEZPTlRfTElTVCk7XHJcbiAgICAgICAgbWtTZWwoczIsIHQoXCJzbS5ib3JkZXJTdHlsZVwiKSwgXCJyb290Qm9yZGVyU3R5bGVcIiwgW1xyXG4gICAgICAgICAgICBcInNvbGlkXCIsXHJcbiAgICAgICAgICAgIFwiZGFzaGVkXCIsXHJcbiAgICAgICAgICAgIFwiZG90dGVkXCIsXHJcbiAgICAgICAgICAgIFwiZG91YmxlXCIsXHJcbiAgICAgICAgICAgIFwibm9uZVwiLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIG1rQ29sb3IoczIsIHQoXCJzbS5ib3JkZXJDb2xvclwiKSwgXCJyb290Qm9yZGVyQ29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzMiwgdChcInNtLmJvcmRlcldpZHRoXCIpLCBcInJvb3RCb3JkZXJXaWR0aFwiLCAwLCA4KTtcclxuICAgICAgICBta1JhbmdlKHMyLCB0KFwic20uYm9yZGVyUmFkaXVzXCIpLCBcInJvb3RCb3JkZXJSYWRpdXNcIiwgMCwgMzIpO1xyXG4gICAgICAgIG1rTnVtKHMyLCB0KFwic20ubWluV2lkdGhcIiksIFwicm9vdE1pbldpZHRoXCIsIDUwLCA0MDApO1xyXG4gICAgICAgIG1rTnVtKHMyLCB0KFwic20ubWluSGVpZ2h0XCIpLCBcInJvb3RNaW5IZWlnaHRcIiwgMjAsIDIwMCk7XHJcblxyXG4gICAgICAgIC8vIENvbm5lY3Rpb25cclxuICAgICAgICBjb25zdCBzMyA9IG1rU2VjKFwiXHVEODNEXHVERDE3XCIsIHQoXCJzbS5jb25uXCIpKTtcclxuICAgICAgICBta1NlbChzMywgdChcInNtLnR5cGVcIiksIFwiY29ubmVjdGlvblN0eWxlXCIsIENPTk5FQ1RJT05fU1RZTEVTKTtcclxuICAgICAgICBta0NvbG9yKHMzLCB0KFwic20uY29sb3JcIiksIFwiY29ubmVjdGlvbkNvbG9yXCIpO1xyXG4gICAgICAgIG1rUmFuZ2UoczMsIHQoXCJzbS53aWR0aFwiKSwgXCJjb25uZWN0aW9uV2lkdGhcIiwgMSwgOCk7XHJcbiAgICAgICAgbWtOdW0oczMsIHQoXCJzbS5jb25uTGVuZ3RoXCIpLCBcImNvbm5lY3Rpb25MZW5ndGhcIiwgMzAsIDMwMCk7XHJcbiAgICAgICAgbWtTZWwoczMsIHQoXCJzbS5ub2RlRGlyXCIpLCBcIm5vZGVEaXJlY3Rpb25cIiwgW1wicmlnaHRcIiwgXCJsZWZ0XCIsIFwiYm90aFwiXSk7XHJcbiAgICAgICAgbWtSYW5nZShzMywgdChcInNtLm5vZGVHYXBZXCIpLCBcIm5vZGVHYXBZXCIsIDgsIDgwKTtcclxuXHJcbiAgICAgICAgLy8gUmFpbmJvd1xyXG4gICAgICAgIGNvbnN0IGN0Um93ID0gczMuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgY3RSb3cuYWRkQ2xhc3MoXCJtei1yYWluYm93LWN0XCIpO1xyXG4gICAgICAgIGNvbnN0IHJsYmwgPSBjdFJvdy5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiB0KFwic20ucmFpbmJvd1wiKSB9KTtcclxuICAgICAgICBybGJsLmFkZENsYXNzKFwibXotcmFpbmJvdy1sYmxcIik7XHJcbiAgICAgICAgY29uc3QgYWxsUDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge1xyXG4gICAgICAgICAgICAuLi5SQUlOQk9XX1BBTEVUVEVTLFxyXG4gICAgICAgICAgICAuLi4ocy5jdXN0b21SYWluYm93cyB8fCB7fSksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBjdXJQID0gcy5jb25uZWN0aW9uUmFpbmJvdyA/IHMucmFpbmJvd1BhbGV0dGUgOiBcIm9mZlwiO1xyXG4gICAgICAgIGNvbnN0IGx3ID0gY3RSb3cuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgbHcuYWRkQ2xhc3MoXCJtei1yYWluYm93LWxpc3RcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG1rSSA9IChrZXk6IHN0cmluZywgbGFiZWw6IHN0cmluZywgY29sb3JzOiBzdHJpbmdbXSB8IG51bGwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXQgPSBsdy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgaXQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWl0ZW1cIik7XHJcbiAgICAgICAgICAgIGl0LnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIsIGtleSA9PT0gY3VyUCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxibEVsID0gaXQuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbGFiZWwgfSk7XHJcbiAgICAgICAgICAgIGxibEVsLmFkZENsYXNzKFwibXotcmFpbmJvdy1pdGVtLWxibFwiKTtcclxuICAgICAgICAgICAgaWYgKGNvbG9ycykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHMgPSBpdC5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICBkcy5hZGRDbGFzcyhcIm16LXJhaW5ib3ctZG90c1wiKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBjb2xvcnMuc2xpY2UoMCwgMTApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IGRzLmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkLmFkZENsYXNzKFwibXotcmFpbmJvdy1kb3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoeyBcIi0tbXotZG90LWNvbG9yXCI6IGMgfSkuZm9yRWFjaCgoW2ssIHZdKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLnN0eWxlLnNldFByb3BlcnR5KGssIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwib2ZmXCIpIHVwZCh7IGNvbm5lY3Rpb25SYWluYm93OiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdXBkKHsgY29ubmVjdGlvblJhaW5ib3c6IHRydWUsIHJhaW5ib3dQYWxldHRlOiBrZXkgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWtJKFwib2ZmXCIsIFwiU29saWRcIiwgbnVsbCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgY29sb3JzXSBvZiBPYmplY3QuZW50cmllcyhhbGxQKSlcclxuICAgICAgICAgICAgbWtJKG5hbWUsIG5hbWUsIGNvbG9ycyk7XHJcblxyXG4gICAgICAgIC8vIFRleHRcclxuICAgICAgICBjb25zdCBzM2IgPSBta1NlYyhcIlx1RDgzRFx1RENERFwiLCB0KFwic20udGV4dEFsaWduXCIpKTtcclxuICAgICAgICBta1NlbChzM2IsIHQoXCJzbS50ZXh0QWxpZ25cIiksIFwidGV4dEFsaWduXCIsIFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSk7XHJcblxyXG4gICAgICAgIC8vIFNlbGVjdGlvblxyXG4gICAgICAgIGNvbnN0IHM0ID0gbWtTZWMoXCJcdTI3MDVcIiwgdChcInNtLnNlbFwiKSk7XHJcbiAgICAgICAgbWtDb2xvcihzNCwgdChcInNtLnNlbENvbG9yXCIpLCBcInNlbGVjdGlvbkNvbG9yXCIpO1xyXG4gICAgICAgIG1rUmFuZ2UoczQsIHQoXCJzbS5zZWxXaWR0aFwiKSwgXCJzZWxlY3Rpb25XaWR0aFwiLCAxLCA4KTtcclxuICAgICAgICBta051bShzNCwgdChcInNtLnNlbE9mZnNldFwiKSwgXCJzZWxlY3Rpb25PdXRsaW5lT2Zmc2V0XCIsIC01LCAyMCk7XHJcbiAgICAgICAgbWtDb2xvcihzNCwgdChcInNtLmVkaXRPdXRsaW5lXCIpLCBcImVkaXRPdXRsaW5lQ29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzNCwgdChcInNtLmVkaXRPdXRsaW5lV2lkdGhcIiksIFwiZWRpdE91dGxpbmVXaWR0aFwiLCAwLCA4KTtcclxuICAgICAgICBta0NvbG9yKHM0LCB0KFwic20uYm94U2VsQ29sb3JcIiksIFwiYm94U2VsZWN0aW9uQ29sb3JcIik7XHJcblxyXG4gICAgICAgIC8vIENhbnZhc1xyXG4gICAgICAgIGNvbnN0IHM1ID0gbWtTZWMoXCJcdUQ4M0RcdUREQkNcdUZFMEZcIiwgdChcInNtLmNhbnZhc0JnXCIpKTtcclxuICAgICAgICBta0NvbG9yKHM1LCB0KFwic20uY2FudmFzQmdcIiksIFwiY2FudmFzQmdcIik7XHJcblxyXG4gICAgICAgIC8vIFRvb2xiYXJcclxuICAgICAgICBjb25zdCBzNiA9IG1rU2VjKFwiXHVEODNEXHVERDI3XCIsIHQoXCJzbS5zaG93VG9vbGJhclwiKSk7XHJcbiAgICAgICAgY29uc3QgdGJSb3cgPSBta1JvdyhzNiwgdChcInNtLnNob3dUb29sYmFyXCIpKTtcclxuICAgICAgICBjb25zdCB0YkNiID0gdGJSb3cuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIHRiQ2IudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICB0YkNiLmNoZWNrZWQgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhcjtcclxuICAgICAgICB0YkNiLmFkZENsYXNzKFwibXotc3AtdGItY2hrXCIpO1xyXG4gICAgICAgIHRiQ2IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dUb29sYmFyID0gdGJDYi5jaGVja2VkO1xyXG4gICAgICAgICAgICB2b2lkIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoQWxsVmlld3MoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBta1NlbChzNiwgdChcInNtLnRiUG9zXCIpLCBcInRvb2xiYXJQb3NpdGlvblwiLCBbXCJ0b3BcIiwgXCJib3R0b21cIl0pO1xyXG4gICAgICAgIG1rTnVtKHM2LCB0KFwic20udGJQYWRUXCIpLCBcInRvb2xiYXJQYWRUb3BcIiwgMCwgNDApO1xyXG4gICAgICAgIG1rTnVtKHM2LCB0KFwic20udGJQYWRSXCIpLCBcInRvb2xiYXJQYWRSaWdodFwiLCAwLCA0MCk7XHJcbiAgICAgICAgbWtOdW0oczYsIHQoXCJzbS50YlBhZEJcIiksIFwidG9vbGJhclBhZEJvdHRvbVwiLCAwLCA0MCk7XHJcbiAgICAgICAgbWtOdW0oczYsIHQoXCJzbS50YlBhZExcIiksIFwidG9vbGJhclBhZExlZnRcIiwgMCwgNDApO1xyXG4gICAgICAgIG1rQ29sb3IoczYsIHQoXCJzbS50YkJnXCIpLCBcInRvb2xiYXJCZ0NvbG9yXCIpO1xyXG4gICAgICAgIG1rQ29sb3IoczYsIHQoXCJzbS50YkJ0bkJnXCIpLCBcInRvb2xiYXJCdG5CZ0NvbG9yXCIpO1xyXG4gICAgICAgIG1rU2VsKHM2LCB0KFwic20udGJCdG5Cb3JkZXJcIiksIFwidG9vbGJhckJ0bkJvcmRlclN0eWxlXCIsIFtcclxuICAgICAgICAgICAgXCJzb2xpZFwiLFxyXG4gICAgICAgICAgICBcImRhc2hlZFwiLFxyXG4gICAgICAgICAgICBcImRvdHRlZFwiLFxyXG4gICAgICAgICAgICBcIm5vbmVcIixcclxuICAgICAgICBdKTtcclxuICAgICAgICBta0NvbG9yKHM2LCB0KFwic20udGJCdG5Cb3JkZXJDb2xvclwiKSwgXCJ0b29sYmFyQnRuQm9yZGVyQ29sb3JcIik7XHJcbiAgICAgICAgbWtDb2xvcihzNiwgdChcInNtLnRiQnRuVGV4dFwiKSwgXCJ0b29sYmFyQnRuVGV4dENvbG9yXCIpO1xyXG5cclxuICAgICAgICAvLyBCdXR0b25zXHJcbiAgICAgICAgY29uc3QgYnIgPSBjdC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBici5hZGRDbGFzcyhcIm16LXNwLWJ0bnNcIik7XHJcbiAgICAgICAgYnIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiB0KFwic20ucmVzZXRcIikgfSkuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5nZXRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodikgdi5hcHBseVN0eWxlKHsgLi4uREVGQVVMVF9TVFlMRSB9KTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugdm9pZCB0aGlzLnBsdWdpbi51cGRhdGVTdHlsZSh7IC4uLkRFRkFVTFRfU1RZTEUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCByZiA9IGJyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJcdTIxQkJcIiB9KTtcclxuICAgICAgICByZi5hZGRDbGFzcyhcIm16LXNwLXJlZnJlc2hcIik7XHJcbiAgICAgICAgcmYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuYnVpbGQoKSk7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8vIHNyYy9NaW5kTWFwT3V0bGluZVZpZXcudHNcclxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIE1hcmtkb3duVmlldyB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQge1xyXG4gICAgVklFV19UWVBFX01JTkRNQVBfT1VUTElORSxcclxuICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgTWluZE5vZGVEYXRhLFxyXG59IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IHQgfSBmcm9tIFwiLi9pMThuXCI7XHJcbmltcG9ydCB7IE1pbmRNYXBWaWV3IH0gZnJvbSBcIi4vTWluZE1hcFZpZXdcIjtcclxuaW1wb3J0IHR5cGUgTWluZE5vZGVQbHVnaW4gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuLyoqIExpZ2h0d2VpZ2h0IHRyZWUgbm9kZSBidWlsdCBmcm9tIC5tZCBIZWFkaW5nQ2FjaGUgZW50cmllcy4gKi9cclxuaW50ZXJmYWNlIE1kSGVhZGluZ05vZGUge1xyXG4gICAgaGVhZGluZzogc3RyaW5nO1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGxpbmU6IG51bWJlcjtcclxuICAgIGNoaWxkcmVuOiBNZEhlYWRpbmdOb2RlW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNaW5kTWFwT3V0bGluZVZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XHJcbiAgICBwcml2YXRlIHBsdWdpbjogTWluZE5vZGVQbHVnaW47XHJcbiAgICBwcml2YXRlIHRyZWVFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE1pbmROb2RlUGx1Z2luKSB7XHJcbiAgICAgICAgc3VwZXIobGVhZik7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld1R5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFZJRVdfVFlQRV9NSU5ETUFQX09VVExJTkU7XHJcbiAgICB9XHJcbiAgICBnZXREaXNwbGF5VGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gXCJNaW5kWkogXCIgKyB0KFwib3V0bGluZS50aXRsZVwiKTtcclxuICAgIH1cclxuICAgIGdldEljb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIFwibGlzdC10cmVlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25PcGVuKCkge1xyXG4gICAgICAgIGNvbnN0IGN0ID0gdGhpcy5jb250YWluZXJFbC5jaGlsZHJlblsxXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjdC5lbXB0eSgpO1xyXG4gICAgICAgIGN0LmFkZENsYXNzKFwibXotb3V0bGluZS1jdFwiKTtcclxuICAgICAgICB0aGlzLnRyZWVFbCA9IGN0LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMudHJlZUVsLmFkZENsYXNzKFwibXotb3V0bGluZS10cmVlXCIpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxyXG4gICAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0aGlzLnRyZWVFbCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXHUyNTAwXHUyNTAwIHB1YmxpYyBlbnRyeSBwb2ludCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcclxuICAgIC8qKiBSZWJ1aWxkIHRoZSBvdXRsaW5lIHRyZWUgZnJvbSB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZWFmLiAqL1xyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudHJlZUVsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy50cmVlRWwuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWY7XHJcbiAgICAgICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RW1wdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gXHUyNTAwXHUyNTAwIC5taW5kemogbWluZCBtYXAgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHJcbiAgICAgICAgaWYgKGFjdGl2ZS52aWV3IGluc3RhbmNlb2YgTWluZE1hcFZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoTWluZE1hcChhY3RpdmUudmlldyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFx1MjUwMFx1MjUwMCAubWQgbWFya2Rvd24gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHJcbiAgICAgICAgaWYgKGFjdGl2ZS52aWV3IGluc3RhbmNlb2YgTWFya2Rvd25WaWV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaE1hcmtkb3duKGFjdGl2ZS52aWV3KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zaG93RW1wdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBcdTI1MDBcdTI1MDAgbWluZCBtYXAgb3V0bGluZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcclxuICAgIHByaXZhdGUgcmVmcmVzaE1pbmRNYXAodmlldzogTWluZE1hcFZpZXcpIHtcclxuICAgICAgICBjb25zdCByb290cyA9IHZpZXcuZ2V0Um9vdHMoKTtcclxuICAgICAgICBpZiAoIXJvb3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFbXB0eSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qgcm9vdCBvZiByb290cykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkTWluZE1hcE5vZGUodGhpcy50cmVlRWwhLCByb290LCAwLCB2aWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZE1pbmRNYXBOb2RlKFxyXG4gICAgICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgbmQ6IE1pbmROb2RlRGF0YSxcclxuICAgICAgICBkZXB0aDogbnVtYmVyLFxyXG4gICAgICAgIHZpZXc6IE1pbmRNYXBWaWV3LFxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHBhcmVudC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBpdGVtLmFkZENsYXNzKFwibXotb3V0bGluZS1pdGVtXCIpO1xyXG5cclxuICAgICAgICBjb25zdCByb3cgPSBpdGVtLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIHJvdy5hZGRDbGFzcyhcIm16LW91dGxpbmUtcm93XCIpO1xyXG4gICAgICAgIHJvdy5zdHlsZS5wYWRkaW5nTGVmdCA9IGRlcHRoICogMTYgKyA4ICsgXCJweFwiO1xyXG5cclxuICAgICAgICBjb25zdCBoYXNDaGlsZHJlbiA9IG5kLmNoaWxkcmVuICYmIG5kLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIC8vIENvbGxhcHNlIHRvZ2dsZVxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IHJvdy5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgdG9nZ2xlLmFkZENsYXNzKFwibXotb3V0bGluZS10b2dnbGVcIik7XHJcbiAgICAgICAgaWYgKGhhc0NoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5pbm5lclRleHQgPSBcIlx1MjVCQ1wiO1xyXG4gICAgICAgICAgICB0b2dnbGUuYWRkQ2xhc3MoXCJtei1vdXRsaW5lLXRvZ2dsZS1hY3RpdmVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9nZ2xlLmlubmVyVGV4dCA9IFwiIFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTGV2ZWwgYmFkZ2VcclxuICAgICAgICBjb25zdCBsZXZlbCA9IGRlcHRoID09PSAwID8gMSA6IE1hdGgubWluKGRlcHRoICsgMSwgNik7XHJcbiAgICAgICAgY29uc3QgYmFkZ2UgPSByb3cuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogXCJIXCIgKyBsZXZlbCB9KTtcclxuICAgICAgICBiYWRnZS5hZGRDbGFzcyhcIm16LW91dGxpbmUtYmFkZ2VcIik7XHJcbiAgICAgICAgYmFkZ2UuYWRkQ2xhc3MoXCJtei1vdXRsaW5lLWhcIiArIGxldmVsKTtcclxuXHJcbiAgICAgICAgLy8gVGV4dFxyXG4gICAgICAgIGNvbnN0IHRleHQgPSByb3cuY3JlYXRlRWwoXCJzcGFuXCIsIHtcclxuICAgICAgICAgICAgdGV4dDogbmQudGV4dC5yZXBsYWNlKC9cXG4vZywgXCIgXCIpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRleHQuYWRkQ2xhc3MoXCJtei1vdXRsaW5lLXRleHRcIik7XHJcbiAgICAgICAgaWYgKGRlcHRoID09PSAwKSB0ZXh0LmFkZENsYXNzKFwibXotb3V0bGluZS10ZXh0LXJvb3RcIik7XHJcblxyXG4gICAgICAgIC8vIFNpZGUgaW5kaWNhdG9yIGZvciBsZWZ0LXNpZGUgbm9kZXNcclxuICAgICAgICBpZiAobmQuc2lkZSA9PT0gXCJsZWZ0XCIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2lkZSA9IHJvdy5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBcIkxcIiB9KTtcclxuICAgICAgICAgICAgc2lkZS5hZGRDbGFzcyhcIm16LW91dGxpbmUtc2lkZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENsaWNrIFx1MjE5MiBzZWxlY3QgYW5kIGZvY3VzIG5vZGUgaW4gdGhlIG1pbmQgbWFwXHJcbiAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB2aWV3LnNlbGVjdEFuZEZvY3VzTm9kZShuZC5pZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENoaWxkcmVuIGNvbnRhaW5lclxyXG4gICAgICAgIGlmIChoYXNDaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZEN0ID0gaXRlbS5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgY2hpbGRDdC5hZGRDbGFzcyhcIm16LW91dGxpbmUtY2hpbGRyZW5cIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByaWdodENoID0gbmQuY2hpbGRyZW4uZmlsdGVyKChjKSA9PiBjLnNpZGUgIT09IFwibGVmdFwiKTtcclxuICAgICAgICAgICAgY29uc3QgbGVmdENoID0gbmQuY2hpbGRyZW4uZmlsdGVyKChjKSA9PiBjLnNpZGUgPT09IFwibGVmdFwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIHJpZ2h0Q2gpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkTWluZE1hcE5vZGUoY2hpbGRDdCwgYywgZGVwdGggKyAxLCB2aWV3KTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGxlZnRDaClcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRNaW5kTWFwTm9kZShjaGlsZEN0LCBjLCBkZXB0aCArIDEsIHZpZXcpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkID0gIWNvbGxhcHNlZDtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZS5pbm5lclRleHQgPSBjb2xsYXBzZWQgPyBcIlx1MjVCNlwiIDogXCJcdTI1QkNcIjtcclxuICAgICAgICAgICAgICAgIGNoaWxkQ3QudG9nZ2xlQ2xhc3MoXCJtei1vdXRsaW5lLWNvbGxhcHNlZFwiLCBjb2xsYXBzZWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXHUyNTAwXHUyNTAwIG1hcmtkb3duIG91dGxpbmUgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHJcbiAgICBwcml2YXRlIHJlZnJlc2hNYXJrZG93bihtZFZpZXc6IE1hcmtkb3duVmlldykge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBtZFZpZXcuZmlsZTtcclxuICAgICAgICBpZiAoIWZpbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RW1wdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgY29uc3QgcmF3SGVhZGluZ3M6IGFueVtdIHwgdW5kZWZpbmVkID0gKGNhY2hlIGFzIGFueSk/LmhlYWRpbmdzO1xyXG4gICAgICAgIGlmICghcmF3SGVhZGluZ3MgfHwgIXJhd0hlYWRpbmdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFbXB0eSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyZWUgPSB0aGlzLmJ1aWxkTWRUcmVlKHJhd0hlYWRpbmdzKTtcclxuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdHJlZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlck1kTm9kZSh0aGlzLnRyZWVFbCEsIG5vZGUsIDAsIG1kVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDb252ZXJ0IGEgZmxhdCBIZWFkaW5nQ2FjaGVbXSBsaXN0IGludG8gYSBuZXN0ZWQgdHJlZS4gKi9cclxuICAgIHByaXZhdGUgYnVpbGRNZFRyZWUoXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICBoZWFkaW5nczogYW55W10sXHJcbiAgICApOiBNZEhlYWRpbmdOb2RlW10ge1xyXG4gICAgICAgIGNvbnN0IHJvb3RzOiBNZEhlYWRpbmdOb2RlW10gPSBbXTtcclxuICAgICAgICBjb25zdCBzdGFjazogTWRIZWFkaW5nTm9kZVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBoIG9mIGhlYWRpbmdzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGU6IE1kSGVhZGluZ05vZGUgPSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiBoLmhlYWRpbmcsXHJcbiAgICAgICAgICAgICAgICBsZXZlbDogaC5sZXZlbCxcclxuICAgICAgICAgICAgICAgIGxpbmU6IGgucG9zaXRpb24/LnN0YXJ0Py5saW5lID8/IDAsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggJiYgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0ubGV2ZWwgPj0gaC5sZXZlbClcclxuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoKSBzdGFja1tzdGFjay5sZW5ndGggLSAxXS5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICBlbHNlIHJvb3RzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb290cztcclxuICAgIH1cclxuXHJcbiAgICAvKiogUmVjdXJzaXZlbHkgcmVuZGVyIGEgbWFya2Rvd24gaGVhZGluZyBub2RlLiAqL1xyXG4gICAgcHJpdmF0ZSByZW5kZXJNZE5vZGUoXHJcbiAgICAgICAgcGFyZW50OiBIVE1MRWxlbWVudCxcclxuICAgICAgICBub2RlOiBNZEhlYWRpbmdOb2RlLFxyXG4gICAgICAgIGRlcHRoOiBudW1iZXIsXHJcbiAgICAgICAgbWRWaWV3OiBNYXJrZG93blZpZXcsXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gcGFyZW50LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGl0ZW0uYWRkQ2xhc3MoXCJtei1vdXRsaW5lLWl0ZW1cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdyA9IGl0ZW0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgcm93LmFkZENsYXNzKFwibXotb3V0bGluZS1yb3dcIik7XHJcbiAgICAgICAgcm93LnN0eWxlLnBhZGRpbmdMZWZ0ID0gZGVwdGggKiAxNiArIDggKyBcInB4XCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc0NoaWxkcmVuID0gbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAvLyBDb2xsYXBzZSB0b2dnbGVcclxuICAgICAgICBjb25zdCB0b2dnbGUgPSByb3cuY3JlYXRlRWwoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRvZ2dsZS5hZGRDbGFzcyhcIm16LW91dGxpbmUtdG9nZ2xlXCIpO1xyXG4gICAgICAgIGlmIChoYXNDaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0b2dnbGUuaW5uZXJUZXh0ID0gXCJcdTI1QkNcIjtcclxuICAgICAgICAgICAgdG9nZ2xlLmFkZENsYXNzKFwibXotb3V0bGluZS10b2dnbGUtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5pbm5lclRleHQgPSBcIiBcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExldmVsIGJhZGdlXHJcbiAgICAgICAgY29uc3QgYmFkZ2UgPSByb3cuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogXCJIXCIgKyBub2RlLmxldmVsIH0pO1xyXG4gICAgICAgIGJhZGdlLmFkZENsYXNzKFwibXotb3V0bGluZS1iYWRnZVwiKTtcclxuICAgICAgICBiYWRnZS5hZGRDbGFzcyhcIm16LW91dGxpbmUtaFwiICsgbm9kZS5sZXZlbCk7XHJcblxyXG4gICAgICAgIC8vIFRleHRcclxuICAgICAgICBjb25zdCB0ZXh0ID0gcm93LmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IG5vZGUuaGVhZGluZyB9KTtcclxuICAgICAgICB0ZXh0LmFkZENsYXNzKFwibXotb3V0bGluZS10ZXh0XCIpO1xyXG4gICAgICAgIGlmIChub2RlLmxldmVsID09PSAxKSB0ZXh0LmFkZENsYXNzKFwibXotb3V0bGluZS10ZXh0LXJvb3RcIik7XHJcblxyXG4gICAgICAgIC8vIENsaWNrIFx1MjE5MiBhY3RpdmF0ZSB0aGUgZWRpdG9yIGxlYWYgYW5kIHNjcm9sbCB0byBoZWFkaW5nXHJcbiAgICAgICAgLy8gV29ya3MgaW4gYm90aCBzb3VyY2UgKGVkaXRpbmcpIGFuZCBwcmV2aWV3IChyZWFkaW5nKSBtb2Rlcy5cclxuICAgICAgICBjb25zdCB0YXJnZXRMaW5lID0gbm9kZS5saW5lO1xyXG4gICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgLy8gRmluZCB0aGUgbGVhZiB0aGF0IGhvbGRzIHRoaXMgbWFya2Rvd24gdmlldyBhbmQgYWN0aXZhdGUgaXRcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsIG9mIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXCJtYXJrZG93blwiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGwudmlldyA9PT0gbWRWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLnNldEFjdGl2ZUxlYWYobCwgeyBmb2N1czogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTY3JvbGwgYWZ0ZXIgdGhlIGxlYWYgYWN0aXZhdGlvbiBzZXR0bGVzXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0RXBoZW1lcmFsU3RhdGUgc2Nyb2xscyBpZGVudGljYWxseSBpbiBib3RoXHJcbiAgICAgICAgICAgICAgICAvLyByZWFkaW5nIChwcmV2aWV3KSBhbmQgZWRpdGluZyAoc291cmNlKSBtb2Rlcy5cclxuICAgICAgICAgICAgICAgIG1kVmlldy5zZXRFcGhlbWVyYWxTdGF0ZSh7IGxpbmU6IHRhcmdldExpbmUgfSk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDaGlsZHJlblxyXG4gICAgICAgIGlmIChoYXNDaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZEN0ID0gaXRlbS5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgY2hpbGRDdC5hZGRDbGFzcyhcIm16LW91dGxpbmUtY2hpbGRyZW5cIik7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbm9kZS5jaGlsZHJlbilcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTWROb2RlKGNoaWxkQ3QsIGMsIGRlcHRoICsgMSwgbWRWaWV3KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb2xsYXBzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZCA9ICFjb2xsYXBzZWQ7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuaW5uZXJUZXh0ID0gY29sbGFwc2VkID8gXCJcdTI1QjZcIiA6IFwiXHUyNUJDXCI7XHJcbiAgICAgICAgICAgICAgICBjaGlsZEN0LnRvZ2dsZUNsYXNzKFwibXotb3V0bGluZS1jb2xsYXBzZWRcIiwgY29sbGFwc2VkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFx1MjUwMFx1MjUwMCBoZWxwZXJzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxyXG4gICAgcHJpdmF0ZSBzaG93RW1wdHkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRyZWVFbCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy50cmVlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyB0ZXh0OiB0KFwib3V0bGluZS5lbXB0eVwiKSB9KTtcclxuICAgICAgICBlbC5hZGRDbGFzcyhcIm16LW91dGxpbmUtZW1wdHlcIik7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8vIHNyYy9TZXR0aW5nc1RhYi50c1xyXG5pbXBvcnQgeyBQbHVnaW5TZXR0aW5nVGFiLCBBcHAsIFNldHRpbmcsIEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgdHlwZSBNaW5kTm9kZVBsdWdpbiBmcm9tIFwiLi9tYWluXCI7XHJcbmltcG9ydCB7IExBTkdVQUdFUywgTGFuZ3VhZ2UsIHQsIHNldExhbmcgfSBmcm9tIFwiLi9pMThuXCI7XHJcbmltcG9ydCB7IERFRkFVTFRfS0VZQklORElOR1MsIEtleUJpbmRpbmdzIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbnR5cGUgU3RyaW5nS2V5T2Y8VD4gPSB7XHJcbiAgICBbSyBpbiBrZXlvZiBUXTogVFtLXSBleHRlbmRzIHN0cmluZyA/IEsgOiBuZXZlcjtcclxufVtrZXlvZiBUXTtcclxudHlwZSBTdHJpbmdLZXlzID0gU3RyaW5nS2V5T2Y8S2V5QmluZGluZ3M+O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1pbmRNYXBTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcbiAgICBwbHVnaW46IE1pbmROb2RlUGx1Z2luO1xyXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogTWluZE5vZGVQbHVnaW4pIHtcclxuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbik7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gY29udGFpbmVyRWwuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcblxyXG4gICAgICAgIC8vIEFib3V0XHJcbiAgICAgICAgY29uc3QgYWJvdXQgPSBjb250YWluZXJFbC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBhYm91dC5hZGRDbGFzcyhcIm16LWFib3V0XCIpO1xyXG4gICAgICAgIGNvbnN0IGljb25FbCA9IGFib3V0LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGljb25FbC5hZGRDbGFzcyhcIm16LWFib3V0LWljb25cIik7XHJcbiAgICAgICAgaWNvbkVsLmlubmVyVGV4dCA9IFwiXHVEODNEXHVEREZBXHVGRTBGXCI7XHJcbiAgICAgICAgY29uc3QgdGl0bGVFbCA9IGFib3V0LmNyZWF0ZUVsKFwiaDJcIiwgeyB0ZXh0OiBcIk1pbmRaSlwiIH0pO1xyXG4gICAgICAgIHRpdGxlRWwuYWRkQ2xhc3MoXCJtei1hYm91dC10aXRsZVwiKTtcclxuICAgICAgICBjb25zdCB2ZXJFbCA9IGFib3V0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgdGV4dDogYCR7dChcInNldC52ZXJzaW9uXCIpfTogJHt0aGlzLnBsdWdpbi5tYW5pZmVzdC52ZXJzaW9ufWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmVyRWwuYWRkQ2xhc3MoXCJtei1hYm91dC1tZXRhXCIpO1xyXG4gICAgICAgIGNvbnN0IGF1dGhFbCA9IGFib3V0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgdGV4dDogYCR7dChcInNldC5hdXRob3JcIil9OiAke3RoaXMucGx1Z2luLm1hbmlmZXN0LmF1dGhvcn1gLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF1dGhFbC5hZGRDbGFzcyhcIm16LWFib3V0LW1ldGEtbGFzdFwiKTtcclxuICAgICAgICBjb25zdCBkZXNjRWwgPSBhYm91dC5jcmVhdGVFbChcInBcIiwgeyB0ZXh0OiB0KFwic2V0LmRlc2NcIikgfSk7XHJcbiAgICAgICAgZGVzY0VsLmFkZENsYXNzKFwibXotYWJvdXQtZGVzY1wiKTtcclxuICAgICAgICBjb25zdCBnaExpbmsgPSBhYm91dC5jcmVhdGVFbChcImRpdlwiKS5jcmVhdGVFbChcImFcIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiBgXHVEODNEXHVEQ0U2ICR7dChcInNldC5naXRodWJcIil9YCxcclxuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vempvay9taW5kempcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBnaExpbmsuYWRkQ2xhc3MoXCJtei1hYm91dC1saW5rXCIpO1xyXG4gICAgICAgIGdoTGluay5zZXRBdHRyKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG5cclxuICAgICAgICAvLyBEb25hdGlvblxyXG4gICAgICAgIGNvbnN0IGRvblNlYyA9IGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGRvblNlYy5hZGRDbGFzcyhcIm16LWRvbmF0ZS1zZWNcIik7XHJcbiAgICAgICAgY29uc3QgZG9uVGl0bGUgPSBkb25TZWMuY3JlYXRlRWwoXCJoM1wiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IGBcdTI2MTUgJHt0KFwic2V0LmRvbmF0ZVwiKX1gLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvblRpdGxlLmFkZENsYXNzKFwibXotZG9uYXRlLWhlYWRpbmdcIik7XHJcbiAgICAgICAgY29uc3QgZG9uQnRucyA9IGRvblNlYy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBkb25CdG5zLmFkZENsYXNzKFwibXotZG9uYXRlLWJ0bnNcIik7XHJcbiAgICAgICAgY29uc3QgbWtEb24gPSAobGFiZWw6IHN0cmluZywgY29sb3I6IHN0cmluZywgdXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IGRvbkJ0bnMuY3JlYXRlRWwoXCJhXCIsIHsgaHJlZjogdXJsIH0pO1xyXG4gICAgICAgICAgICBhLnNldEF0dHIoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgIGEuYWRkQ2xhc3MoXCJtei1kb25hdGUtYnRuXCIpO1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1idG4tY29sb3JcIjogY29sb3IgfSkuZm9yRWFjaCgoW2ssIHZdKSA9PlxyXG4gICAgICAgICAgICAgICAgYS5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYS5pbm5lclRleHQgPSBsYWJlbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1rRG9uKFxyXG4gICAgICAgICAgICBcIlx1MjYxNSBCdXkgTWUgYSBDb2ZmZWVcIixcclxuICAgICAgICAgICAgXCIjRkZERDAwXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuYnV5bWVhY29mZmVlLmNvbS9zdXBlcmpvaG5cIixcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rRG9uKFwiXHUyNzY0XHVGRTBGIEtvLWZpXCIsIFwiI0ZGNUU1QlwiLCBcImh0dHBzOi8va28tZmkuY29tL3N1cGVyam9oblwiKTtcclxuICAgICAgICBta0RvbihcIlx1RDgzRFx1RENCMCBQYXlQYWxcIiwgXCIjMDA3MGJhXCIsIFwiaHR0cHM6Ly9wYXlwYWwubWUvVGFuQ2F0OTk3XCIpO1xyXG5cclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZSh0KFwic2V0LnRpdGxlXCIpKS5zZXRIZWFkaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIEJhc2ljIHNldHRpbmdzXHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKHQoXCJzZXQubGFuZ1wiKSlcclxuICAgICAgICAgICAgLnNldERlc2ModChcInNldC5sYW5nRGVzY1wiKSlcclxuICAgICAgICAgICAgLmFkZERyb3Bkb3duKChkZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBsIG9mIExBTkdVQUdFUykgZGQuYWRkT3B0aW9uKGwudmFsdWUsIGwubGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgZGQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZGQub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5sYW5ndWFnZSA9IHYgYXMgTGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFuZyh2IGFzIExhbmd1YWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoQWxsVmlld3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUodChcInNldC50aGVtZVwiKSlcclxuICAgICAgICAgICAgLnNldERlc2ModChcInNldC50aGVtZURlc2NcIikpXHJcbiAgICAgICAgICAgIC5hZGREcm9wZG93bigoZGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGRkLmFkZE9wdGlvbihcImxpZ2h0XCIsIHQoXCJzZXQubGlnaHRcIikpO1xyXG4gICAgICAgICAgICAgICAgZGQuYWRkT3B0aW9uKFwiZGFya1wiLCB0KFwic2V0LmRhcmtcIikpO1xyXG4gICAgICAgICAgICAgICAgZGQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgZGQub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zd2l0Y2hUaGVtZSh2IGFzIFwibGlnaHRcIiB8IFwiZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUodChcInNldC5jYW52YXNCZ1wiKSlcclxuICAgICAgICAgICAgLnNldERlc2ModChcInNldC5jYW52YXNCZ0Rlc2NcIikpXHJcbiAgICAgICAgICAgIC5hZGRDb2xvclBpY2tlcigoY3ApID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnN0eWxlLmNhbnZhc0JnO1xyXG4gICAgICAgICAgICAgICAgY3Auc2V0VmFsdWUoY3VyLnN0YXJ0c1dpdGgoXCIjXCIpID8gY3VyIDogXCIjZmZmZmZmXCIpO1xyXG4gICAgICAgICAgICAgICAgY3Aub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zdHlsZS5jYW52YXNCZyA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uYXBwbHlTdHlsZVRvQWxsVmlld3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKHQoXCJzZXQudG9vbGJhclwiKSlcclxuICAgICAgICAgICAgLnNldERlc2ModChcInNldC50b29sYmFyRGVzY1wiKSlcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodGcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRnLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dUb29sYmFyKTtcclxuICAgICAgICAgICAgICAgIHRnLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1Rvb2xiYXIgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hBbGxWaWV3cygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSh0KFwic2V0LmVkaXRPbkNyZWF0ZVwiKSlcclxuICAgICAgICAgICAgLnNldERlc2ModChcInNldC5lZGl0T25DcmVhdGVEZXNjXCIpKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0ZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGcuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZWRpdE9uQ3JlYXRlKTtcclxuICAgICAgICAgICAgICAgIHRnLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZWRpdE9uQ3JlYXRlID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ3VzdG9tIG5vZGUgbmFtZXNcclxuICAgICAgICBjb25zdCBsYW5nID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MubGFuZ3VhZ2U7XHJcbiAgICAgICAgY29uc3QgZGVmUm9vdCA9IHQoXCJkZWYucm9vdFwiKTtcclxuICAgICAgICBjb25zdCBkZWZDaGlsZCA9IHQoXCJkZWYuY2hpbGRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG1rTmFtZVNldHRpbmcgPSAoXHJcbiAgICAgICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgZGVzYzogc3RyaW5nLFxyXG4gICAgICAgICAgICBmaWVsZDogXCJyb290XCIgfCBcImNoaWxkXCIsXHJcbiAgICAgICAgICAgIGRlZlZhbDogc3RyaW5nLFxyXG4gICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxyXG4gICAgICAgICAgICAgICAgLnNldERlc2MoZGVzYyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0RWwgPSBzZXR0aW5nLmNvbnRyb2xFbC5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiXHUyMUJBXCIgfSk7XHJcbiAgICAgICAgICAgIHJlc2V0RWwuYWRkQ2xhc3MoXCJtei1yZXNldC1idG5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clZhbCA9ICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXNbbGFuZ10gfHwge30pW1xyXG4gICAgICAgICAgICAgICAgZmllbGRcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgcmVzZXRFbC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCAhKGN1clZhbCAmJiBjdXJWYWwgIT09IGRlZlZhbCkpO1xyXG4gICAgICAgICAgICByZXNldEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0geyAuLi50aGlzLnBsdWdpbi5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXMgfTtcclxuICAgICAgICAgICAgICAgIGlmIChjW2xhbmddKSBkZWxldGUgY1tsYW5nXVtmaWVsZF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXMgPSBjO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpbnAudmFsdWUgPSBkZWZWYWw7XHJcbiAgICAgICAgICAgICAgICByZXNldEVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgaW5wID0gc2V0dGluZy5jb250cm9sRWwuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpbnAudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICBpbnAudmFsdWUgPSBjdXJWYWwgfHwgZGVmVmFsO1xyXG4gICAgICAgICAgICBpbnAuYWRkQ2xhc3MoXCJtei1uYW1lLWlucHV0XCIpO1xyXG4gICAgICAgICAgICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IGlucC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0geyAuLi50aGlzLnBsdWdpbi5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXMgfTtcclxuICAgICAgICAgICAgICAgIGNbbGFuZ10gPSB7IC4uLihjW2xhbmddIHx8IHt9KSwgW2ZpZWxkXTogdiB8fCB1bmRlZmluZWQgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lcyA9IGM7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIHJlc2V0RWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgISh2ICYmIHYgIT09IGRlZlZhbCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1rTmFtZVNldHRpbmcoXHJcbiAgICAgICAgICAgIHQoXCJzZXQucm9vdE5hbWVcIiksXHJcbiAgICAgICAgICAgIHQoXCJzZXQucm9vdE5hbWVEZXNjXCIpLFxyXG4gICAgICAgICAgICBcInJvb3RcIixcclxuICAgICAgICAgICAgZGVmUm9vdCxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rTmFtZVNldHRpbmcoXHJcbiAgICAgICAgICAgIHQoXCJzZXQuY2hpbGROYW1lXCIpLFxyXG4gICAgICAgICAgICB0KFwic2V0LmNoaWxkTmFtZURlc2NcIiksXHJcbiAgICAgICAgICAgIFwiY2hpbGRcIixcclxuICAgICAgICAgICAgZGVmQ2hpbGQsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKHQoXCJzZXQudHlwZVRvRWRpdFwiKSlcclxuICAgICAgICAgICAgLnNldERlc2ModChcInNldC50eXBlVG9FZGl0RGVzY1wiKSlcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodGcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRnLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnR5cGVUb0VkaXQpO1xyXG4gICAgICAgICAgICAgICAgdGcub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50eXBlVG9FZGl0ID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gS2V5Ym9hcmQgc2hvcnRjdXRzXHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUodChcInNldC5rZXlzXCIpKS5zZXRIZWFkaW5nKCk7XHJcbiAgICAgICAgY29uc3Qga2IgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5rZXlCaW5kaW5ncztcclxuICAgICAgICBjb25zdCBrZXlNYXA6IHsga2V5OiBTdHJpbmdLZXlzOyBsYWJlbDogc3RyaW5nIH1bXSA9IFtcclxuICAgICAgICAgICAgeyBrZXk6IFwiZWRpdE5vZGVcIiwgbGFiZWw6IHQoXCJzZXQua2V5LmVkaXRcIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwiYWRkU2libGluZ1wiLCBsYWJlbDogdChcInNldC5rZXkuc2libGluZ1wiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJhZGRDaGlsZFwiLCBsYWJlbDogdChcInNldC5rZXkuY2hpbGRcIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwiZm9jdXNOb2RlXCIsIGxhYmVsOiB0KFwic2V0LmtleS5mb2N1c1wiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJ1bmRvXCIsIGxhYmVsOiB0KFwic2V0LmtleS51bmRvXCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcInJlZG9cIiwgbGFiZWw6IHQoXCJzZXQua2V5LnJlZG9cIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwiZHJhZ0NhbnZhc1wiLCBsYWJlbDogdChcInNldC5rZXkuZHJhZ0NhbnZhc1wiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJuYXZVcFwiLCBsYWJlbDogdChcInNldC5rZXkudXBcIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwibmF2RG93blwiLCBsYWJlbDogdChcInNldC5rZXkuZG93blwiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJuYXZMZWZ0XCIsIGxhYmVsOiB0KFwic2V0LmtleS5sZWZ0XCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcIm5hdlJpZ2h0XCIsIGxhYmVsOiB0KFwic2V0LmtleS5yaWdodFwiKSB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGtleU1hcCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUoaXRlbS5sYWJlbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clZhbCA9IGtiW2l0ZW0ua2V5XTtcclxuICAgICAgICAgICAgY29uc3QgZGVmVmFsID0gREVGQVVMVF9LRVlCSU5ESU5HU1tpdGVtLmtleV0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICBjb25zdCByZXNldEVsID0gc2V0dGluZy5jb250cm9sRWwuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIlx1MjFCQVwiIH0pO1xyXG4gICAgICAgICAgICByZXNldEVsLmFkZENsYXNzKFwibXotcmVzZXQtYnRuXCIpO1xyXG4gICAgICAgICAgICByZXNldEVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIGN1clZhbCA9PT0gZGVmVmFsKTtcclxuICAgICAgICAgICAgcmVzZXRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAga2JbaXRlbS5rZXldID0gZGVmVmFsO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoQWxsVmlld3MoKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KGRlZlZhbCk7XHJcbiAgICAgICAgICAgICAgICByZXNldEVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGJ0bjogQnV0dG9uQ29tcG9uZW50O1xyXG4gICAgICAgICAgICBzZXR0aW5nLmFkZEJ1dHRvbigoYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnRuID0gYjtcclxuICAgICAgICAgICAgICAgIGIuc2V0QnV0dG9uVGV4dChTdHJpbmcoY3VyVmFsKSB8fCBcIi4uLlwiKTtcclxuICAgICAgICAgICAgICAgIGIub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYi5zZXRCdXR0b25UZXh0KHQoXCJzZXQua2V5LnByZXNzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVjb3JkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudENvbWJvID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzTWFpbktleSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWlsZENvbWJvID0gKGU6IEtleWJvYXJkRXZlbnQpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHBhcnRzLnB1c2goXCJjdHJsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkgcGFydHMucHVzaChcInNoaWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5hbHRLZXkpIHBhcnRzLnB1c2goXCJhbHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFbXCJDb250cm9sXCIsIFwiU2hpZnRcIiwgXCJBbHRcIiwgXCJNZXRhXCJdLmluY2x1ZGVzKGUua2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKGUua2V5ID09PSBcIiBcIiA/IFwiU3BhY2VcIiA6IGUua2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oXCIrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbmlzaCA9IChjb21ibzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVjb3JkaW5nKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZW91dCkgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25Eb3duLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBvblVwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2JbaXRlbS5rZXldID0gY29tYm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuc2V0QnV0dG9uVGV4dChjb21ibyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hBbGxWaWV3cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldEVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIGNvbWJvID09PSBkZWZWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWNvcmRpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbkRvd24sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIG9uVXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnNldEJ1dHRvblRleHQoU3RyaW5nKGtiW2l0ZW0ua2V5XSkgfHwgXCIuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb25Eb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb21ibyA9IGJ1aWxkQ29tYm8oZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01haW5LZXkgPSAhW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250cm9sXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNoaWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNZXRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0uaW5jbHVkZXMoZS5rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnNldEJ1dHRvblRleHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29tYm8gKyAoaGFzTWFpbktleSA/IFwiXCIgOiBcIitcdTIwMjZcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRpbWVvdXQgb24gZWFjaCBrZXlkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNhbmNlbCwgNTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb25VcCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluYWxpemUgd2hlbiBhIG5vbi1tb2RpZmllciBrZXkgaXMgcmVsZWFzZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc01haW5LZXkgJiYgY3VycmVudENvbWJvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2goY3VycmVudENvbWJvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbkRvd24sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgb25VcCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoY2FuY2VsLCA1MDAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKS5zZXROYW1lKHQoXCJzZXQuc2Nyb2xsXCIpKS5zZXRIZWFkaW5nKCk7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUodChcInNldC5pbnZlcnRZXCIpKS5hZGRUb2dnbGUoKHRnKSA9PiB7XHJcbiAgICAgICAgICAgIHRnLnNldFZhbHVlKGtiLmludmVydFNjcm9sbFkpO1xyXG4gICAgICAgICAgICB0Zy5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAga2IuaW52ZXJ0U2Nyb2xsWSA9IHY7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUodChcInNldC5pbnZlcnRYXCIpKS5hZGRUb2dnbGUoKHRnKSA9PiB7XHJcbiAgICAgICAgICAgIHRnLnNldFZhbHVlKGtiLmludmVydFNjcm9sbFgpO1xyXG4gICAgICAgICAgICB0Zy5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAga2IuaW52ZXJ0U2Nyb2xsWCA9IHY7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKHQoXCJzZXQuaW52ZXJ0Wm9vbVwiKSlcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodGcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRnLnNldFZhbHVlKGtiLmludmVydFpvb20pO1xyXG4gICAgICAgICAgICAgICAgdGcub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBrYi5pbnZlcnRab29tID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lckVsLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLElBQUFBLG1CQUFxRDs7O0FDQXJELHNCQUFrRDs7O0FDd0kzQyxJQUFNLHdCQUE0QztBQUFBLEVBQ3JELGdCQUFnQjtBQUFBLEVBQ2hCLG1CQUFtQjtBQUFBLEVBQ25CLHVCQUF1QjtBQUFBLEVBQ3ZCLHVCQUF1QjtBQUFBLEVBQ3ZCLHFCQUFxQjtBQUFBLEVBQ3JCLG9CQUFvQjtBQUFBLEVBQ3BCLG9CQUFvQjtBQUN4QjtBQUVPLElBQU0sdUJBQTJDO0FBQUEsRUFDcEQsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsdUJBQXVCO0FBQUEsRUFDdkIsdUJBQXVCO0FBQUEsRUFDdkIscUJBQXFCO0FBQUEsRUFDckIsb0JBQW9CO0FBQUEsRUFDcEIsb0JBQW9CO0FBQ3hCO0FBRU8sSUFBTSxtQkFBNkM7QUFBQSxFQUN0RCxTQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNIO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVB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QSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxF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YztBQUFBLEVBQ2Qsb0JBQW9CO0FBQUEsRUFDcEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsa0JBQWtCO0FBQUEsRUFDbEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGtCQUFrQjtBQUFBLEVBQ2xCLGlCQUFpQjtBQUFBLEVBQ2pCLGlCQUFpQjtBQUFBLEVBQ2pCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLHFCQUFxQjtBQUFBLEVBQ3JCLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLHNCQUFzQjtBQUFBLEVBQ3RCLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLG1CQUFtQjtBQUFBLEVBQ25CLGdCQUFnQjtBQUFBLEVBQ2hCLG9CQUFvQjtBQUFBLEVBQ3BCLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLFlBQ0k7QUFBQSxFQUNKLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLG1CQUFtQjtBQUFBLEVBQ25CLGlCQUFpQjtBQUFBLEVBQ2pCLGlCQUFpQjtBQUFBLEVBQ2pCLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLHFCQUFxQjtBQUFBLEVBQ3JCLHNCQUFzQjtBQUFBLEVBQ3RCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLHFCQUFxQjtBQUFBLEVBQ3JCLGNBQWM7QUFBQSxFQUNkLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLG9CQUFvQjtBQUFBLEVBQ3BCLHdCQUF3QjtBQUFBLEVBQ3hCLGdCQUFnQjtBQUFBLEVBQ2hCLG9CQUFvQjtBQUFBLEVB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QUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLEVBQ2IsY0FBYztBQUFBLEVBQ2Qsb0JBQW9CO0FBQUEsRUFDcEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsa0JBQWtCO0FBQUEsRUFDbEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGtCQUFrQjtBQUFBLEVBQ2xCLGlCQUFpQjtBQUFBLEVBQ2pCLGlCQUFpQjtBQUFBLEVBQ2pCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFB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VztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLEVBQ2IsY0FBYztBQUFBLEVBQ2Qsb0JBQW9CO0FBQUEsRUFDcEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsa0JBQWtCO0FBQUEsRUFDbEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGtCQUFrQjtBQUFBLEVBQ2xCLGlCQUFpQjtBQUFBLEVBQ2pCLGlCQUFpQjtBQUFBLEVBQ2pCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFB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QUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsa0JBQWtCO0FBQUEsRUFDbEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVB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VztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsa0JBQWtCO0FBQUEsRUFDbEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNk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QUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsa0JBQWtCO0FBQUEsRUFDbEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGtCQUFrQjtBQUFBLEVBQ2xCLGlCQUFpQjtBQUFBLEVBQ2pCLGlCQUFpQjtBQUFBLEVBQ2pCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLHFCQUFxQjtBQUFBLEVBQ3JCLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLHNCQUFzQjtBQUFBLEVBQ3RCLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVB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QUFBO0FBQUEsRUFJQSxpQkFBaUI7QUFDYixlQUFXLFFBQVEsS0FBSyxJQUFJLFVBQVU7QUFBQSxNQUNsQztBQUFBLElBQ0osR0FBRztBQUNDLFVBQUksS0FBSyxnQkFBZ0Isb0JBQW9CO0FBQ3pDLGFBQUssS0FBSyxRQUFRO0FBQUEsTUFDdEI7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBO0FBQUEsRUFFQSxNQUFNLG1CQUFtQjtBQXpWN0I7QUEwVlEsVUFBTSxLQUFLLEtBQUssSUFBSSxVQUFVO0FBQUEsTUFDMUI7QUFBQSxJQUNKO0FBQ0EsUUFBSTtBQUNKLFFBQUksR0FBRyxRQUFRO0FBQ1gsVUFBSSxHQUFHLENBQUM7QUFBQSxJQUNaLE9BQU87QUFDSCxXQUNJLFVBQUssSUFBSSxVQUFVLFlBQVksS0FBSyxNQUFwQyxZQUNBLEtBQUssSUFBSSxVQUFVLFFBQVEsSUFBSTtBQUNuQyxZQUFNLEVBQUUsYUFBYTtBQUFBLFFBQ2pCLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxNQUNaLENBQUM7QUFBQSxJQUNMO0FBQ0EsU0FBSyxJQUFJLFVBQVUsV0FBVyxDQUFDO0FBQUEsRUFDbkM7QUFDSjsiLAogICJuYW1lcyI6IFsiaW1wb3J0X29ic2lkaWFuIiwgImNiIiwgIl9hIiwgInQiLCAiZG4iLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAiX2EiXQp9Cg==
